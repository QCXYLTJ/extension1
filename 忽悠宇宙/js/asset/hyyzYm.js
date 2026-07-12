'use strict';
//—————————————————————圆梦计划武将—————————————————————//
game.import('character', (lib, game, ui, get, ai, _status) => {
  let hyyzYm = {};
  hyyzYm.name = 'hyyzYm';
  hyyzYm.connect = false;
  const author = {
    //作者分类//统一管理
    Ym_yingjie: ['Ym_zilinggudelige', 'Ym_youyi', 'Ym_jiulipu', 'Ym_canghaiyisu', 'Ym_zhongshiweiyu', 'Ym_miealiei', 'Ym_menghailishang', 'Ym_aizazadi', 'Ym_yanfeng', 'Ym_fushengyi', 'Ym_lalalala', 'Ym_rijiuyangqichongsanguan', 'Ym_xilin', 'Ym_daowuji', 'Ym_lengruohan', 'Ym_sp_jiulipu', 'Ym_xinzhisuoxiangxingzhisuoxiang', 'Ym_sp_menghailishang', 'Ym_miemennayou', 'Ym_sp_youyi', 'Ym_re_canghaiyisu', 'Ym_mushancai', 'Ym_sp_daowuji'], //16
    Ym_zhongshiweiyu: ['meng_sp_fuxuan', 'meng_bronya', 'meng_sb_xier', 'meng_shenlilingren', 'meng_lisushang', 'meng_sp_shenlilinghua', 'meng_chiyuan', 'meng_wendi', 'meng_abeiduo', 'meng_sp_kafuka', 'meng_sb_jingyuan', 'meng_luocha', 'meng_jingliu', 'meng_leidianyayi'], //14
    Ym_canghaiyisu: ['meng_shuoyeguanxing', 'meng_sb_jizi', 'meng_xiercanghai', 'meng_kalilu', 'meng_funinna', 'meng_naweilaite', 'meng_maisha', 'meng_lita', 'meng_jiutiao'], //9
    Ym_youyi: ['meng_qingqizhe', 'meng_kafuka', 'meng_sushang', 'meng_jizi', 'meng_aierhaisen', 'meng_tuopa', 'meng_luocharen', 'meng_ruanmei', 'meng_guinaifen', 'meng_sp_naxida', 'meng_tuoma', 'meng_heitiane', 'meng_shajin'], //13
    Ym_woganyunadedanshoujian: ['meng_jiepade', 'meng_alan', 'meng_kuisangti', 'meng_kaiyin', 'meng_zhaoxing', 'meng_jingyuan', 'meng_huangquan'], //7
    Ym_rijiuyangqichongsanguan: ['meng_nuoaier', 'meng_kelala', 'meng_naxida', 'meng_yelianna', 'meng_aisida', 'meng_hutao', 'meng_danhengbailu'], //7
    Ym_jiulipu: ['meng_sp_ren', 'JLP_furina', 'JLP_zhongli', 'JLP_nahida', 'meng_kaiya', 'meng_shaoxia', 'JLP_leidianying', 'JLP_huohuo', 'JLP_wendy'], //9
    Ym_qi: ['meng_luka', 'meng_xierde', 'meng_lizhiluzhe', 'meng_yanqing', 'meng_laiyila', 'meng_sp_xier'], //6
    Ym_shiyi: ['meng_re_zhongyanzhiluzhe', 'meng_kiana', 'meng_zhongyanzhiluzhe', 'meng_xinyanzhiluzhe', 'meng_re_xinyanzhiluzhe'], //5
    Ym_qixiyueming: ['meng_shenlilinghua', 'meng_saixiliya', 'meng_wodanheng'], //3
    Ym_miealiei: [
      'meng_shalangbaizi',
      'meng_wangxiayitong',
      'meng_zhipeizhiluzhe',
      'meng_shiwaluo',
      'meng_luotianyi', // 'meng_re_shalangbaizi'
    ], //5
    Ym_zhouwang: ['meng_tingyun', 'meng_shen_tingyun'], //2
    Ym_muci: ['meng_xier', 'meng_fuxuan'], //2
    Ym_lengruohan: ['meng_wu_xiaogong', 'meng_baizhu', 'meng_shanhugongxinhai'], //3
    Ym_menghailishang: ['meng_yukong', 'meng_zhenliyisheng', 'meng_natasha', 'meng_diluke', 'meng_sb_ren', 'meng_leidianzhen'], //6
    Ym_xianyi: ['meng_ren'], //1
    Ym_sanyueqidegou: ['meng_sanyueqi'], //1
    Ym_fushengyi: ['meng_aiyi', 'meng_sangbo'], //2
    Ym_sabalujiang: ['meng_pink'], //1
    Ym_yiqingmeng: ['meng_wu_jingyuan'], //1
    Ym_benzhibeilun: ['meng_kalian'], //1
    Ym_653linzhiyekong: ['meng_huahuo'], //11
    Ym_xinzhisuoxiangxingzhisuoxiang: ['meng_lingke'], //1
    Ym_zuoriliuying: ['meng_liuying'], //1
  };
  hyyzYm.characterSort = { hyyzYm: author };
  hyyzYm.characterReplace = {};
  hyyzYm.character = {
    Ym_zilinggudelige: ['female', 'hyyz_other', 4, ['menggengxin', 'mengsanlian', 'mengzhenggao'], ['zhu']],
    Ym_jiulipu: ['male', 'hyyz_other', 3, ['mengzhuxin', 'mengyingping', 'mengzhuojian'], []],
    Ym_canghaiyisu: ['female', 'hyyz_other', 4, ['mengmoyu', 'mengxingmeng'], []], //无
    Ym_miealiei: ['female', 'hyyz_other', '3/4', ['mengxunshi', 'mengzaobing', 'mengpanli'], []],
    Ym_menghailishang: ['male', 'hyyz_other', 4, ['mengyingji', 'menganxing'], []],
    Ym_youyi: ['female', 'hyyz_other', 4, ['mengzhumeng', 'menggongmian'], []],
    Ym_aizazadi: ['male', 'hyyz_other', 4, ['menglijian', 'mengyinxia'], []], //无
    Ym_yanfeng: ['male', 'hyyz_other', 4, ['mengbianma', 'mengxianpo'], []], //无
    Ym_fushengyi: ['female', 'hyyz_other', 4, ['mengdaiduo', 'mengcunzhi'], []], //无
    Ym_lalalala: ['male', 'hyyz_other', 4, ['menganli'], []], //无
    Ym_rijiuyangqichongsanguan: ['male', 'hyyz_other', 3, ['mengxuanxiang', 'mengxiaoxing', 'menghuanying'], []], //无
    Ym_xilin: ['male', 'hyyz_other', 3, ['mengbailan', 'mengle', 'mengdiaotu'], []],
    Ym_zhongshiweiyu: ['male', 'hyyz_other', 3, ['mengxudu', 'mengfenxin'], []], //无
    Ym_daowuji: ['male', 'qun', 8, ['mengfenji', 'mengduofa', 'mengdaogui'], []], //无
    Ym_lengruohan: ['male', 'qun', 4, ['mengguxing', 'mengqisi'], []], //无
    Ym_sp_jiulipu: ['male', 'hyyz_other', 3, ['JLPjingsi', 'JLPqiuxin'], []], //
    Ym_xinzhisuoxiangxingzhisuoxiang: ['female', 'hyyz_other', 4, ['mengjingjin'], []], //
    Ym_sp_menghailishang: ['male', 'hyyz_other', 4, ['mengspxingmeng', 'menglangu'], []],
    Ym_miemennayou: ['female', 'hyyz_other', 4, ['mengkunlu', 'mengsiyan'], []],
    Ym_sp_youyi: ['female', 'hyyz_other', 4, ['mengtihan', 'mengwennuan'], []],
    Ym_re_canghaiyisu: ['female', 'hyyz_other', 4, ['mengremoyu', 'mengrexingmeng'], []], //
    Ym_mushancai: ['male', 'hyyz_other', 4, ['mengjiejian', 'mengyingbian'], []], //
    Ym_sp_daowuji: ['male', 'hyyz_other', 4, ['spgualun', 'spbolu', 'spxiuyao'], []], //
    meng_sushang: ['female', 'hyyz_xt', 4, ['mengshanqing', 'mengyouren', 'mengwuji'], []],
    meng_yukong: ['female', 'hyyz_xt', 3, ['mengtianque', 'mengguanyun'], []],
    meng_xier: ['female', 'hyyz_xt', 3, ['mengluandie', 'mengzaixian'], []],
    meng_ren: ['male', 'hyyz_xt', 4, ['mengwansi', 'mengdibian', 'mengenci'], []],
    meng_bronya: ['female', 'hyyz_xt', 3, ['mengzhenjun', 'mengzhenqu', 'mengjunzhen'], ['zhu']],
    meng_jiepade: ['male', 'hyyz_xt', 4, ['mengyuhan', 'mengjianyi', 'mengjueyi'], []],
    meng_xierde: ['female', 'hyyz_other', 3, ['menghengyue', 'mengguanyang'], []],
    meng_tingyun: ['female', 'hyyz_xt', 3, ['mengfuyao', 'mengcifu', 'mengyidao'], []],
    meng_kelala: ['female', 'hyyz_xt', 4, ['mengdaijia', 'mengweijia', 'mengruyue'], []],
    meng_shen_tingyun: ['female', 'hyyz_xt', 3, ['shenfuyao', 'shencifu', 'shenyidao'], ['die:ext:忽悠宇宙/audio/skill/meng_tingyun.mp3']],
    meng_sanyueqi: ['female', 'hyyz_xt', 4, ['mengchunjie', 'menghuyou'], []],
    meng_sb_xier: ['female', 'hyyz_b3', 3, ['mengshuangsheng', 'mengbian'], []],
    meng_alan: ['male', 'hyyz_xt', 4, ['mengshinu', 'mengjianren'], []],
    meng_naxida: ['female', 'shen', 3, ['mengxukong', 'menghuanmeng', 'mengmoye'], []],
    meng_kiana: ['female', 'hyyz_b3', 4, ['mengyuehua', 'mengliushang'], ['zhu']],
    meng_jizi: ['female', 'hyyz_b3', '4/6', ['mengnuwu', 'mengjiezhan', 'mengxinhuo'], []],
    meng_shenlilingren: ['male', 'hyyz_ys', 3, ['mengwenmou', 'menggutu'], []],
    meng_sb_jizi: ['female', 'hyyz_b3', '1/9', ['mengezhan', 'mengzhuoshi', 'mengjiyi', 'mengzhicheng'], []],
    meng_fuxuan: ['female', 'hyyz_xt', 5, ['mengqiongguan', 'mengbie'], []],
    meng_lizhiluzhe: ['female', 'shen', 3, ['mengsheyuan', 'mengkanming'], []],
    meng_lisushang: ['female', 'hyyz_b3', 3, ['mengzhejian', 'mengtaixu', 'mengjianxin'], []], //李素裳未找到
    meng_zhongyanzhiluzhe: ['female', 'hyyz_b3', 5, ['mengpingji', 'mengzhaoxi', 'mengcifan'], ['zhu']], //终焉未找到
    meng_shenlilinghua: ['female', 'hyyz_ys', 3, ['menglinren', 'mengqingzi'], []],
    meng_kuisangti: ['male', 'hyyz_other', 6, ['mengxuexing', 'mengpijing', 'mengaoan'], []],
    meng_kaiyin: ['male', 'hyyz_other', 4, ['menganyi', 'mengduoshe'], []], //凯隐未提供
    //meng_re_shalangbaizi: ["female", "hyyz_other", 4, ["mengrejipo", "mengzhilei", "mengkongxi"], []],
    meng_shalangbaizi: ['female', 'hyyz_other', 4, ['mengjipo', 'mengjiecai', 'mengyouji'], ['die:ext:忽悠宇宙/audio/skill/meng_re_shalangbaizi.mp3']],
    meng_sp_shenlilinghua: ['female', 'hyyz_ys', 3, ['mengyaohua', 'mengshuangyi'], []],
    meng_yanqing: ['male', 'hyyz_xt', 4, ['mengjiaoqi', 'mengduanao'], []],
    meng_chiyuan: ['female', 'hyyz_b3', 3, ['mengshuyun', 'mengcaixin'], ['die:ext:忽悠宇宙/audio/skill/b3_hua.mp3']],
    meng_laiyila: ['female', 'hyyz_ys', 3, ['mengfanqi', 'mengmiansi'], []],
    meng_aierhaisen: ['male', 'hyyz_ys', 4, ['mengtuiyan', 'mengrishen'], []],
    meng_xiercanghai: ['female', 'hyyz_b3', 4, ['mengshuanghun', 'mengsisheng'], []], //化身希儿技能中按化身定制
    meng_saixiliya: ['female', 'hyyz_b3', '3/5', ['mengxieheng1', 'mengxieheng2', 'mengxieheng3'], []], //塞西莉亚未找到
    meng_wu_xiaogong: ['female', 'hyyz_ys', 3, ['mengyanshang', 'menghuahuo', 'mengxiaji'], []],
    meng_kalilu: ['female', 'hyyz_ys', 3, ['menglinting', 'mengquanxin'], []], //卡莉露不存在素材
    meng_funinna: ['female', 'hyyz_ys', 4, ['mengduanming'], []],
    meng_naweilaite: ['male', 'hyyz_ys', 4, ['menglonglei', 'mengshuilong'], ['zhu']],
    meng_wendi: ['male', 'hyyz_ys', 3, ['mengliufeng', 'menggexian', 'mengbaizhan'], []],
    meng_abeiduo: ['male', 'hyyz_ys', 3, ['mengsucheng', 'mengchuangsheng', 'mengbaie'], []],
    meng_tuopa: ['female', 'hyyz_xt', 3, ['mengzhaiquan', 'mengshougou', 'mengshicha'], []],
    meng_yelianna: ['female', 'hyyz_other', 4, ['mengdonghen', 'mengjiannu', 'mengrongyu'], []],
    meng_aiyi: ['female', 'hyyz_b3', 3, ['mengmiaobu', 'mengyansuan'], []],
    meng_zhaoxing: ['male', 'hyyz_other', 4, ['mengdianci', 'mengwuwei'], []],
    meng_wodanheng: ['male', 'hyyz_xt', 3, ['menggufeng', 'mengqinghua'], []],
    meng_aisida: ['female', 'hyyz_xt', 3, ['menglisi', 'mengshanzhi', 'mengchuxin'], []],
    meng_luocharen: ['male', 'hyyz_b3', 3, ['mengnishang', 'mengshouwang', 'mengwenrun'], []], //罗刹人不存在素材
    meng_sp_kafuka: ['female', 'hyyz_xt', 3, ['menglaixin', 'mengyueluo'], []],
    meng_xinyanzhiluzhe: ['female', 'hyyz_b3', 4, ['mengliaohuang', 'mengjingmang'], []],
    meng_sb_jingyuan: ['male', 'hyyz_xt', 5, ['menglaoshen', 'mengguiqu'], ['zhu', 'die:ext:忽悠宇宙/audio/skill/xt_jingyuan.mp3']],
    meng_maisha: ['female', 'hyyz_other', 5, ['mengyanhu', 'mengguanghuan'], []],
    meng_lita: ['female', 'hyyz_b3', 4, ['mengsishou', 'mengyanjue', 'mengsizhi'], []],
    meng_ruanmei: ['female', 'hyyz_xt', 3, ['mengtansheng', 'mengzidian'], []],
    meng_jingyuan: ['male', 'hyyz_xt', 4, ['mengchoumou'], ['die:ext:忽悠宇宙/audio/skill/xt_jingyuan.mp3']],
    meng_hutao: ['female', 'hyyz_ys', 3, ['mengxifeng', 'mengliaoshi', 'mengwansheng'], []], //胡桃定制但尚未回复
    meng_qingqizhe: ['male', 'hyyz_ys', 3, ['mengsanpan', 'mengnixin', 'menggulu'], []],
    meng_kafuka: ['female', 'hyyz_xt', 3, ['mengyuemian', 'mengyexuan'], []],
    meng_nuoaier: ['female', 'hyyz_ys', 4, ['mengchawei', 'mengkuangzhu', 'mengjianshou'], []],
    meng_shuoyeguanxing: ['female', 'hyyz_b3', 3, ['mengtianfu', 'mengdizai', 'mengfengyang'], []],
    meng_sp_fuxuan: ['female', 'hyyz_xt', 6, ['mengchitong', 'mengxizhi'], ['die:ext:忽悠宇宙/audio/skill/meng_fuxuan.mp3']],
    meng_wangxiayitong: ['none', 'hyyz_xt', 4, ['mengmoli'], []], //垃圾桶未找到素材
    meng_re_zhongyanzhiluzhe: ['female', 'hyyz_b3', 4, ['mengrezhaoxi', 'mengrepingji', 'mengrecifan'], []], //终焉未找到
    meng_baizhu: ['male', 'hyyz_ys', 3, ['mengzhenyao', 'mengwenji'], []],
    meng_luka: ['male', 'hyyz_xt', 4, ['menghanxin', 'mengquanzhi'], ['die:ext:忽悠宇宙/audio/skill/meng_luka.mp3']],
    meng_guinaifen: ['female', 'hyyz_xt', 3, ['mengzhuyi', 'menghenhuo', 'mengtangcai'], []],
    meng_sp_naxida: ['female', 'hyyz_ys', 3, ['mengxushi', 'mengnanke', 'mengzhezhi'], ['die:ext:忽悠宇宙/audio/skill/meng_naxida.mp3']],
    meng_zhipeizhiluzhe: ['female', 'hyyz_b3', 3, ['mengzongou', 'mengkuixi'], []], //支配之律者未发布
    meng_zhenliyisheng: ['male', 'hyyz_xt', 4, ['mengsigu', 'mengbeilun', 'mengzhenli'], ['die:ext:忽悠宇宙/audio/skill/xt_zhenliyisheng.mp3']],
    meng_jiutiao: ['female', 'hyyz_ys', 4, ['mengyayu', 'mengwuyan', 'mengchezheng'], []],
    meng_pink: ['female', 'shu', 7, ['mengyingzhu', 'mengqiongpi'], []], //没有语音
    meng_heitiane: ['female', 'hyyz_xt', 3, ['mengshuijing', 'mengliuguang', 'mengzhenzhao'], ['die:ext:忽悠宇宙/audio/skill/meng_heitiane.mp3']],
    meng_jingliu: ['female', 'hyyz_xt', 4, ['mengzuanyue', 'mengshishui'], ['die:ext:忽悠宇宙/audio/skill/xt_jingliu.mp3']],
    meng_sangbo: ['male', 'hyyz_xt', 4, ['mengdahun', 'mengzishu'], ['die:ext:忽悠宇宙/audio/skill/meng_sangbo.mp3']],
    meng_shiwaluo: ['male', 'hyyz_xt', 4, ['mengshouhu', 'mengbushu'], []], //史瓦罗没有语音
    meng_leidianzhen: ['female', 'hyyz_ys', 4, ['mengjiaohui', 'mengzhufu', 'mengxvyu'], []], //雷电真
    meng_sp_xier: ['female', 'hyyz_xt', '4/4/0', ['meng_shoupan', 'meng_xingan'], ['die:ext:忽悠宇宙/audio/skill/meng_xier.mp3']],
    //感谢为群扩提供代码支持的魈、就离谱
    //以下为粉丝提供的代码(含粉丝修改的代码)
    meng_kaiya: ['male', 'hyyz_ys', 3, ['mengxuanse', 'menglinwei', 'menganzhi'], ['zhu']],
    meng_shaoxia: ['male', 'qun', 4, ['mengweie', 'mengmushou'], ['zhu']], //真实人物,少侠不存在素材
    JLP_furina: ['female', 'hyyz_ys', 3, ['JLPjuxing', 'JLPshenyi'], ['zhu']],
    JLP_zhongli: ['male', 'hyyz_ys', 4, ['JLPqiyue', 'JLPluheng', 'JLPminhui'], ['zhu']],
    JLP_nahida: ['female', 'hyyz_ys', '3/4', ['JLPkunchu', 'JLPxukong', 'JLPzhuguang'], []],
    meng_sp_ren: ['male', 'hyyz_xt', 4, ['mengkunsheng', 'mengyetu', 'mengenciJLP'], ['die:ext:忽悠宇宙/audio/skill/meng_ren.mp3']],
    JLP_leidianying: ['female', 'hyyz_ys', 4, ['JLPwuwang', 'JLPwuxiang'], []],
    meng_luocha: ['male', 'hyyz_xt', 4, ['mengxingmou', 'mengzhangtu'], ['die:ext:忽悠宇宙/audio/skill/xt_luocha.mp3']],
    meng_natasha: ['female', 'hyyz_xt', 3, ['mengyizhe', 'mengjiuhu'], []],
    meng_wu_jingyuan: ['male', 'hyyz_xt', 3, ['mengkanxing', 'mengqianjiang'], ['die:ext:忽悠宇宙/audio/skill/xt_jingyuan.mp3']],
    meng_tuoma: ['male', 'hyyz_ys', 4, ['mengjingzheng', 'menghuchi'], []],
    meng_diluke: ['male', 'hyyz_ys', 4, ['mengniyan', 'mengliming'], []],
    JLP_huohuo: ['female', 'hyyz_xt', 3, ['JLPweiqie', 'JLPxvxing'], ['die:ext:忽悠宇宙/audio/skill/xt_huohuo.mp3']],
    meng_kalian: ['female', 'hyyz_b3', 3, ['mengguaili', 'mengshengnv', 'mengxinsheng'], ['zhu']], //无素材
    meng_shanhugongxinhai: ['female', 'hyyz_ys', 3, ['mengchengxin', 'mengshouyuan'], []], //0
    meng_huahuo: ['female', 'hyyz_xt', 3, ['mengpogui', 'mengzhiyv', 'mengqianmian'], []], //未上线
    meng_sb_ren: ['male', 'hyyz_xt', 4, ['mengshuhu', 'mengdapi'], ['die:ext:忽悠宇宙/audio/skill/meng_ren.mp3']],
    meng_danhengbailu: ['double', 'hyyz_xt', 4, ['mengwugui', 'menggushen', 'mengjuefeng'], []], //双头无语音
    JLP_wendy: ['male', 'hyyz_ys', 4, ['JLPjulan', 'JLPgongdan', 'JLPqinxin'], ['die:ext:忽悠宇宙/audio/skill/meng_wendi.mp3']],
    meng_huangquan: ['female', 'hyyz_xt', 4, ['mengkuque', 'mengnailuo'], ['die:ext:忽悠宇宙/audio/skill/xt_huangquan.mp3']],
    meng_re_xinyanzhiluzhe: ['female', 'hyyz_b3', 4, ['mengweizhu', 'mengbinye'], ['die:ext:忽悠宇宙/audio/skill/meng_xinyanzhiluzhe.mp3']],
    meng_leidianyayi: ['female', 'hyyz_b3', 3, ['mengwanzui', 'mengchangci', 'mengguxing2'], []], //
    meng_shajin: ['male', 'hyyz_xt', 4, ['mengyanglu', 'mengtuipan'], []], //
    meng_lingke: ['female', 'hyyz_xt', '1/3/2', ['mengjuejing', 'mengxueyuan', 'mengqiusheng'], []], //
    meng_luotianyi: ['female', 'hyyz_other', 3, ['mengzhongya', 'mengduyun'], []], //
    meng_liuying: ['female', 'hyyz_xt', '3/4', ['mengliuguangzhuhuo', 'mengranquyingshen', 'mengmengguihechu'], []], //
  };
  hyyzYm.characterIntro = {
    Ym_zilinggudelige: '紫灵谷的骊歌,名不见经传的业余小up,喜欢武将制作,本扩展包<圆梦计划>的作者.',
    Ym_jiulipu: '作者注:花里胡哨的,虚情假意的,拐弯抹角的,含沙射影的,隔岸观火的,添油加醋的,在下不才,可陋词一二.',
    Ym_canghaiyisu: '作者注:感觉没什么好介绍的,就是上班没事的时候摸鱼划水,有事的时候拼命干活.工作累了就停下休息吧,但是人生不能一直原地踏步,所以该前进的时候也要努力前行啊.',
    Ym_miealiei: '作者注:原名来星那由,砂狼白子设计师,因为找了坑人的师傅而走了设计的歪路,后来因为一些事情,转生了,改名咩阿栗.一技能拜师,还原了那由拜师时的过程,师傅出多少,他就出多少,二技能,体现了那由制作武将,从被师傅怒骂到让师傅感到满意的过程,觉醒技就是最近,那由的武将经过群友的一番修改,提建议后,意识到了那个坑比师傅,于是果断离开了师傅,觉醒后的精修和修改造兵都是为了体现那由酱的进步总结:前期攒灵感,后期就是觉醒钟会体验卡.', //卦者灵风<一见钟情>
    Ym_menghailishang: '作者注:我是梦海离殇,以前的名字是影寂-黯星,驭空的设计者,现在这个(影寂-黯星)名字变成了我如今的技能,技能效果吗就是按照技能名字的意思写的,虽然二技能不太像,但是是我想要的技能效果,台词也是我朋友帮我写的,谢谢他帮我写了.', //BGM:卦者灵风-<阳光开朗大男孩>
    Ym_youyi: '作者注:我的形象就用我的头像吧~魔女之旅的伊蕾娜,也是我很喜欢很憧憬的角色.沾沾光~逐梦技能是追逐梦想的意思嘛.其实就是完善圆梦武将的设计,同时现实中也在小小的追梦嘛.技能效果就是一件事去反复做,精益求精.共励技能是共同勉励,一起加油的意思.就是群里的大家一起努力进步,互相吸取经验,争取更完善的设计.同时也是现实中希望大家都可以一起努力啦~实战方面我的思路是两个技能有一定的配合,2技能可以蹭蹭多过牌多用牌的武将,也是向有能力的人学习借鉴经验嘛~但是别人的东西终究是别人的,每回合只能一次.也是自我表现想进步,终究还是靠自己.不限次数和距离就是表示精益求精嘛~',
    Ym_aizazadi: '',
    Ym_yanfeng: '作者注:介绍也没什么,不过是小说的自己,技能就关於我编码,无次数是因为修改规则,仙魄就是群内的人都叫我<魈上仙>,可叠加是因为我不可能只帮那三个,这三个效果是被我帮助人的馈赠.在此附一首诗句我非我,心外求,独立于世,难觅真我.寻寻觅觅,空落泪,我仍是我,未曾改变.梦中之我,真实之你,跨越时空,交相辉映.心若有光,何处不乐,我非我,但我是我.',
    Ym_fushengyi: '',
    Ym_lalalala: '作者注:啦啦啦啦,新人.十分想要朋友的啦啦啦啦在学校到处安利游戏,只要他玩了这个游戏,啦啦啦啦就会开心,感觉自己帮到了忙,有成就感.反之,啦啦啦啦就会陷入脑补和精神内耗中.如果啦啦啦啦成功让整个班都玩上了自己安利的游戏,他就会反复回味这个过程使自己开心,如果啦啦啦啦在达到使命前就被外界的压力击倒,他就会走向极端,认为世上所有都不喜欢自己.', //传说之下<sans>
    Ym_rijiuyangqichongsanguan: '作者注:形象就斗胆借用一下爱缇的吧,至于为什么想借用她?因为我认为我和她很像,在平凡的现实中撕开一道口子,创造一个只属于自己的幻想的世界.这个武将设计是玩法驱动,记得在很久之前,up曾经对我说过<这个机制值得更优秀>.但是随着时间,它已经被我慢慢忘记了.直到我翻看以前的武将,这才想起,因此,我最终决定用这个<值得更优秀>的机制来写这个武将.', //bgm:<龙与天空岛>
    Ym_xilin: '作者注:西琳感觉没啥好说的吧,就是太摆了,有想法也摆,有时候还没事来群刷个乐的表情,有时掏出一下吊图来.', //光之救世主吧,九霄大人的角色歌
    Ym_zhongshiweiyu: '',
    Ym_daowuji: '',
    Ym_lengruohan: '',
    Ym_sp_jiulipu: '作者注:进群接近一年,有些许感悟.学会了无名杀代码,比刚来时更谦卑圆滑,但本心从未改变.',
    meng_sushang: '出生于仙舟「曜晴」,前往「罗浮」云骑军接受历练的新兵.身佩母亲赠予的家传剑器,憧憬着自己即将书写的未来.',
    meng_yukong: '仙舟「罗浮」天舶司的首领,久历战阵的飞行士与射手.而今却陷于繁冗公务,难以抽身',
    meng_xier: '地火反抗组织「地火」的骨干,别号「蝴蝶」.性格率真直爽,内心隐藏着细腻敏锐的一面.',
    meng_ren: '弃身锋刃的剑客,原名不详.效忠于「命运的奴隶」,拥有可怖的自愈能力.手持古剑作战,剑身遍布破碎裂痕,正如其身,亦如其心.',
    meng_bronya: '贝洛伯格「大守护者」的继承人.兼有公主的高傲和军人的坚贞.',
    meng_jiepade: '银鬃铁卫的戍卫官,贝洛伯格数一数二的战士.表里如一,一丝不苟,从不懈怠.',
    meng_xierde: '神鹿族的公主.与她的姐妹们不同,希尔德不喜欢种花也不想成为德鲁伊,举着长枪和谷里的勇士决斗就是她的消遣.希尔德听长老讲过一个公主从军的故事,<我也可以和父王去战斗吗？>她问道.</br>然而,当战争真的来临时,面对敌人的机甲和加农炮,神鹿族英勇的战士们很快溃败下来,树神和鹿灵的力量根本无法抵抗这些钢铁怪物.</br><孩子,你是我们唯一的希望了.>当火光点燃神鹿祭坛,流着泪的希尔德从小径悄悄离开.她必须为族人们带回那种名为<科技>的力量,即便要以森林和小溪作为代价.',
    meng_tingyun: '粉丝<纣王>设计.</br>八面玲珑的狐人少女,天舶司商团「鸣火」的首席代表.停云天生生得一副慧心妙舌,但凡她开口,人们就免不了想听她多说几句.在她的调度下,仙舟的贸易庆典逐渐声名远扬.能不战斗就尽量不去战斗,能劝为己用就尽量劝为己用——这便是停云的原则.',
    meng_kelala: '被机器人养大的女孩,有着超越年龄的通透和坚持.</br>对克拉拉而言,史瓦罗理性的计算是世界法则,绝不会出错.</br>直到发现「计算」得到的结果,并不一定能带给大家幸福.</br>怯生生的女孩决定勇敢起来.',
    meng_shen_tingyun: '八面玲珑的狐人少女,天舶司商团「鸣火」的首席代表.停云天生生得一副慧心妙舌,但凡她开口,人们就免不了想听她多说几句.在她的调度下,仙舟的贸易庆典逐渐声名远扬.能不战斗就尽量不去战斗,能劝为己用就尽量劝为己用——这便是停云的原则.</br>值得一提的是,这个武将不是真正的boss,而是纣王设计的超模武将,在群友的呼吁下当boss打的.',
    meng_sanyueqi: '精灵古怪的少女,自认热衷于这个年纪的女孩子「应当热衷」的所有事,比如照相.</br>从一块漂流的恒冰中苏醒,却发现自己对身世与过往都一无所知.短暂的消沉之后,她决定以重获新生的日期为自己命名.</br>这一天,三月七「诞生」了.',
    meng_sb_xier: '希儿·芙乐艾,可可利亚孤儿院的孩子,对布洛妮娅有特殊的感情.代替布洛妮娅参加X-10实验,实验中希儿突破了临界点,存在形式跃迁为量子态,进入名为<量子之海>的异度空间.',
    meng_alan: '不善言辞的空间站「黑塔」防卫科负责人.</br>虽然不懂科研,但为了保护珍视研究的空间站科员顺利完成他们的研究,阿兰可以拼上性命.他早已习惯疼痛,并将负伤视作勋章.</br>也只有抱着佩佩时,男孩才会放下戒备,露出难得一见的笑容.',
    meng_naxida: '须弥的神明,曾经被人民禁锢和遗忘,如今已经重拾信心治理须弥.',
    meng_kiana: '琪亚娜使用过的装甲之一,是试作型第四代女武神弑神装甲.原本只是只有S级女武神才有资格使用的对崩坏最终兵装.装甲内高速流动的伽马例子不断从背后的连接处扩散出来其形态,犹如一对神圣的羽翼.',
    meng_jizi: '天命A级女武神.姬子出生于极东之地,是从首批实验性瓦尔基里中成长起来的最高一线作战指挥官.2016年,姬子在与空之律者的战斗中战至力竭,在完成净化律者人格的目标后死亡.',
    meng_shenlilingren: '社奉行神里家现任家主.总有办法以周全的手段实现自身目的.不过,鲜少有人知道他如今最在意的<目标>是什么.',
    meng_sb_jizi: '天命A级女武神.姬子出生于极东之地,是从首批实验性瓦尔基里中成长起来的最高一线作战指挥官.2016年,姬子在与空之律者的战斗中战至力竭,在完成净化律者人格的目标后死亡.</br>这个一开始是好奇,因为作者在群里发了好多次这个将,说这个机制要比华更好,我就很感兴趣,就想做出来看看是什么机制.既然做了就放进来好啦.',
    meng_fuxuan: '仙舟「罗浮」太卜司之首,自信耿直的智者.</br>凭借第三眼与穷观阵为仙舟占算航路,预卜事务吉凶,坚信自己所做的一切便是事情的「最优解」.</br>符玄等待着将军承诺的「退位让贤」,然而这一天的到来…似乎还遥遥无期.',
    meng_lizhiluzhe: '布洛妮娅在量子之海中与理之律者的核心融合而成的姿态,亦是瓦尔特·杨对其认可的证明.在这个形态下,重装小兔和布洛妮娅本人的样子都朝着<她理想中的样子>产生了一些变化.</br>但,也只是有限的变化.',
    meng_lisushang: '李素裳,川中<忆剑山庄>少庄主,赤鸢真人座下第七徒<染香剑>秦素衣的独生女儿.她自幼习剑,五岁时拜入赤鸢第五徒<自在剑>程凌霜门下,修习剑法.十年之后,她听从师父的指示出门试剑,并由此卷入了一场壮大的波折之中.在素裳重伤之后,奥托使用天命的技术冻结了她的时间,直到柯洛斯藤的时候才重新将她唤醒.</br>白云苍狗,昔日的神州江湖已不复存在,她却以天命女武神的身份重新踏入了这个陌生的世界.冻结的时光并未羁留她的脚步,在光怪陆离的时代,这位惯于漂泊的少女已踏上了新的旅程.',
    meng_zhongyanzhiluzhe: '她所展现出的姿态,恰是人类跨越终焉,拥抱未来的关键一步.<这份‘权能’,是所有人不懈斗争的成果……我会妥善保管的.>',
    meng_shenlilinghua: '继承稻妻城中至为尊崇的三家名门之一——神里家族的,是一对兄妹.哥哥绫人出任「家主」一职,掌管政务,妹妹绫华贵为「公主」,平日主理家族内外事宜.绫华常出现在社交场合,与民间交集也较多.因此,更被人们所熟悉的她反而获得了高于兄长的名望,被雅称为「白鹭公主」.众所周知,神里家的女儿绫华小姐容姿端丽、品行高洁,是深受民众钦慕的人物.',
    meng_kuisangti: '今天,人们将奎桑提称为<纳祖芒荣耀>.但是如果他希望成为纳祖芒真正的领袖,他就必须明白自己再也不能让那份傲慢遮蔽理智.飞升者的威胁已经越来越不可忽视,他的家乡未来将会如何,没有人知道.但是奎桑提知道一件事,无论是阿兹尔还是泽拉斯,只要他们胆敢南下,他就会挺身而出,迎接战斗.',
    meng_kaiyin: '凯隐是修炼暗影魔法的佼佼者.他战斗的意义,是为了实现自己真正的命运.有朝一日能够率领影流教派,开创艾欧尼亚霸业的新世代.',
    meng_re_shalangbaizi: '砂狼白子喜欢运动,是阿拜多斯对策委员会的突击队长.因为沉默寡言、面无表情,所以给人一种很冷漠的印象,但其实是比任何一个人都爱惜阿拜多斯的少女.为了阿拜多斯的复兴,她主张不惜一切手段,偶尔还会提出天马行空的想法.',
    meng_shalangbaizi: '砂狼白子喜欢运动,是阿拜多斯对策委员会的突击队长.因为沉默寡言、面无表情,所以给人一种很冷漠的印象,但其实是比任何一个人都爱惜阿拜多斯的少女.为了阿拜多斯的复兴,她主张不惜一切手段,偶尔还会提出天马行空的想法.',
    meng_sp_shenlilinghua: '继承稻妻城中至为尊崇的三家名门之一——神里家族的,是一对兄妹.哥哥绫人出任「家主」一职,掌管政务,妹妹绫华贵为「公主」,平日主理家族内外事宜.绫华常出现在社交场合,与民间交集也较多.因此,更被人们所熟悉的她反而获得了高于兄长的名望,被雅称为「白鹭公主」.众所周知,神里家的女儿绫华小姐容姿端丽、品行高洁,是深受民众钦慕的人物.',
    meng_yanqing: '意气飞扬的云骑骁卫,仙舟<罗浮>最强剑士.为剑生亦为剑痴,当彦卿手中握剑时,无人敢小看这位尚在总角之年的天才.或许能让手中宝剑微微收敛锋芒的,只有时间.',
    meng_chiyuan: '本名华,第一文明纪元抗崩坏组织逐火之蛾的十三英桀之一,位次<XII>,刻印为<浮生>.负责火种计划的先行者,第二文明纪元成为守护神州的仙人赤鸢.天穹峰事件中失去无敌的力量,和天命主教奥托达成交易,成为天命A级女武神.伪装身份成为圣芙蕾雅学园学生,琪亚娜所在班级的班长.因为奥托的背叛而死,临死前发动羽渡尘第零额定功率,将意识转移到一根羽毛身上,压制空之律者的存在.抛弃的身体则被奥托治好,其中诞生了律者的意识.',
    meng_laiyila: '莱依拉是专攻理论星相学的梨多梵谛学院学生,时常梦游,长期缺觉,饱受睡眠问题困扰.但无论课业多重,她总能拿出最精彩的推演,叫人不得不怀疑,她是否连做梦都在写论文.',
    meng_aierhaisen: '艾尔海森,须弥教令院六大学派之一<知论派>的学者,现任教令院书记官,曾任代理贤者一职,有过人的智慧与才能,生活得自由自在,一般人基本找不到他.在须弥的风波结束,虚空系统关闭之后,教令院还有很多亟待解决的难题.而艾尔海森身为代理贤者,又是当前教令院中非常有智谋的角色,也将会面临新的考验.不过,不论发生什么,艾尔海森的头脑始终保持着冷静和清醒,能从更宏观的视角找到病灶,最高效率地去解决问题',
    meng_xiercanghai: '希儿·芙乐艾,可可利亚孤儿院的孩子,对布洛妮娅有特殊的感情.代替布洛妮娅参加X-10实验,实验中希儿突破了临界点,存在形式跃迁为量子态,进入名为<量子之海>的异度空间.',
    meng_saixiliya: '塞西莉亚·沙尼亚特,手机游戏<崩坏3>及其衍生作品中角色,天命史上最强S级女武神,沙尼亚特家族的圣女,琪亚娜·卡斯兰娜的母亲,齐格飞·卡斯兰娜的妻子,德丽莎·阿波卡利斯的密友,第六神之键<黑渊白花>的前任持有者.',
    meng_wu_xiaogong: '才华横溢的烟花工匠,<长野原烟花店>的现任店主,被誉为<夏祭的女王>.宵宫是热情似火的少女,未泯的童心与匠人的执着在她身上交织出了奇妙的焰色反应.',
    meng_kalilu: '清泉镇的纯水精灵.在清泉镇结识了年少时期的老芬奇,聆听了他的故事,为了不留下遗憾而离去.多年后,在4.1版本活动<游水酝诗籍>中与故人再会.',
    meng_funinna: '<尘世七执政>中的水神芙卡洛斯,<众水、众方、众民与众律法的女王>,深受民众喜爱.热衷于欧庇克莱歌剧院上演的每一场审判,也总是在意着<观众>的眼光.',
    meng_naweilaite: '那维莱特,枫丹最高审判官,水龙王,因其无懈可击的<秉公无私>而闻名.那维莱特严肃且公正,说是枫丹<公正>的象征也不为过.',
    meng_wendi: '巴巴托斯,自由城邦蒙德的建立者,<尘世七执政>中的风神,为了让蒙德人民得到自由而放弃治理.千年后重返蒙德,辅助奴隶少女温妮莎推翻贵族的残暴统治,设立四风守护.又过千年,愚人众和深渊教团令蒙德内外交困,因而引来神的回归.风之神化身吟游诗人,与旅行者一同行动,解救被深渊教团操控的东风之龙.',
    meng_abeiduo: '阿贝多,米哈游出品的游戏<原神>及其衍生作品中的角色.蒙德西风骑士团首席炼金术士兼调查小队队长,被称做<白垩之子>的天才,他不怎么在意称号和名望,只专注于研究课题.财富和人脉不是他的目标.他渴望驾驭的,是从古到今深藏于人类头脑中的无上知识.',
    meng_tuopa: '星际和平公司旗下「战略投资部」高级干部托帕,领导特殊债务纠察小组.年纪轻轻便已成为「石心十人」之一,基石为「催讨黄玉」.搭档次元扑满「账账」则能敏锐感知「财富」所在,即便是安保、催债、精算等工作也不在话下.如今他们正一同巡行银河,追究各类影响公司业务开展的债务纠纷.',
    meng_yelianna: '霜星,本名叶莲娜,前整合运动干部,现罗德岛荣誉干员,已死亡,遗体在罗德岛生物处理室13号仓处理防止结晶粉尘化后保存.已被博士承认为罗德岛的干员.',
    meng_aiyi: '爱衣·休伯利安Λ,手机游戏<崩坏3>及其衍生作品中的角色,诞生于拟似时间晶体的生命体,休伯利安的舰载AI——爱衣·休伯利安<长大成人>后的样子.相比于小爱衣的活泼可爱,成熟的Λ显得更加稳重,也更具智慧.她以谜之漂泊者的身份出现在受困于圣痕计划的少女们身前,利用自身的特异性为她们提供帮助,是充满了善意和神秘感的存在.至于名字里的Λ,是宇宙学常量的符号,和她本身有非常密切的联系……大概.',
    meng_zhaoxing: '赵信属于德玛西亚阵营,是光盾王朝的私人管家.而在游戏中的赵信则是一个爆发能力极高的战士英雄,他也是一名优秀的团战发起者,能够以迅雷不及掩耳的速度突破对方的防线,对对方的核心英雄造成致命威胁,但是赵信也有着装备没成型之前过于脆弱,没有逃生手段等等劣势.',
    meng_wodanheng: '前世为罗浮持明龙尊<丹枫>,尊号<饮月君>.对自己的过去讳莫如深,清冷寡言的青年.为了躲避血裔同族,选择与星穹列车同行.丹恒在接纳了上一世<饮月君>所遗存的力量,所展露的持明族本相.既然接受了额顶的峥嵘角冠,便也要接受那人所负的一切功过.但从始至终,他都不是他.',
    meng_aisida: '空间站「黑塔」的站长,出身名门的大小姐.好奇心旺盛的天文研究者,擅长管理空间站各抒己见的科员.',
    meng_luocharen: '来自欧陆的神秘男子,能够施展诡异<妖法>.携带一具巨大的棺木,无人知晓其中藏着何物.我觉得设计的不错,所以特别选出入稿,二来也是为包里的素裳配一个专拐.',
    meng_sp_kafuka: '来自微雨的设计,强度很高.微雨在帖子下面写的介绍打动了观众,因此纳入,以资鼓励.',
    meng_xinyanzhiluzhe: '在支配剧场挥出最后那一击时,手中的大剑仿佛感受到了旁人的希冀,剑身凝结出一道道光芒,将同伴们的力量传递,将汇聚于她身上的希望燃起.少女没有回头,但她知道,自己身后是许多人注视的目光、是同伴们传递给自己前行的力量、是黑夜中永燃不熄的薪火.',
    meng_sb_jingyuan: '仙舟联盟帝弓七天将之一,负责节制罗浮云骑军的「神策将军」.师从前代「罗浮」剑首,但并不显名于武力.',
    meng_maisha: '善良活泼乐观坚强的少女佣兵,铃兰之剑佣兵团的初期人员,也是团长最初的伙伴和重要的支持者.作为战争孤儿的少女曾四处流浪,直到被拉维耶收养定居小镇才有了自己的家.悲惨的童年并未抹去少女灿烂的笑容,乐观、坚强、对所有人都报以善意和信任的少女很快赢得了所有人的喜爱.为了保护大家,少女自愿拿起武器,加入了拉维耶建立的佣兵团.麦莎坚信,只要不放弃希望,一切总会好起来的.',
    meng_lita: '煌夕国宰相',
    meng_ruanmei: '气质温婉优雅的学者,「天才俱乐部」#81号会员,生命科学领域的专家.凭借天赋与惊人的执著得到了博识尊的瞩目,在秘密的角落开始了对生命本源的研究与探索.并因此被黑塔邀请,同螺丝咕姆、斯蒂芬联合开发了「模拟宇宙」.私下里,她十分喜爱传统戏剧与点心,对刺绣也很感兴趣.',
    meng_jingyuan: '仙舟联盟帝弓七天将之一,负责节制罗浮云骑军的「神策将军」.师从前代「罗浮」剑首,但并不显名于武力.',
    meng_hutao: '璃月港<往生堂>第七十七代堂主,掌控着璃月葬仪事务的重要人物.尽心尽力地为人们完成送别之仪,维护着世间阴阳平衡之道.除此以外还是个神奇打油诗人,诸多<杰作>被璃月人口口相传.',
    meng_qingqizhe: '须弥智慧之神布耶尔的追随者,稻妻永恒之神巴尔泽布制造的人偶.若有心者方为人,他不可称之为人.若无心者亦有悲喜苦乐,他便是最像人的人偶.几度起落,如今他只为自己而活.<流浪者>是他用以描述自身立场的最佳词语——没有故乡,没有亲人,没有目的地.如清风一般,活在世间,行在世间.',
    meng_kafuka: '在星际和平公司的通缉档案里,卡芙卡只留下了名字和「爱好收集大衣」的记录.人们对这位星核猎手所知甚少,只知道她是「命运的奴隶」艾利欧最信任的成员之一.为了到达艾利欧预见的「未来」,卡芙卡开始行动.',
    meng_nuoaier: '和普通的骑士团女仆相比,诺艾尔心中有着更加远大的梦想.在这被西风骑士团庇护了千年的城邦里,她与万千普通少男少女一样,都憧憬着有朝一日能穿上那副象征荣耀的甲胄. 就算自身能力还不足以通过严苛的骑士选拔,至少也要在更近的地方学习骑士言行. 训练学习之余,她很享受现在的生活——在蒙德城忙里忙外,出现在每一个需要帮助的人身边. 「交给我吧!什么都可以交给我!」 这是她的口头禅,所以有需要的话,就呼唤她的名字吧,她会很开心的.',
    meng_shuoyeguanxing: '一场意外——异兽降世,先皇驾崩.观星原本平静的生活,在一夜间土崩瓦解.群臣的非议、宫内的背叛、异兽的侵略……内忧外患,生死存亡.煌国未来的命运,连同着<皇位继承人>这一沉重的名号,一并落到了少女那纤弱的肩上.但也恰恰因为这场意外,少女邂逅了<他>……',
    meng_sp_fuxuan: '仙舟「罗浮」太卜司之首,自信耿直的智者.</br>凭借第三眼与穷观阵为仙舟占算航路,预卜事务吉凶,坚信自己所做的一切便是事情的「最优解」.</br>符玄等待着将军承诺的「退位让贤」,然而这一天的到来…似乎还遥遥无期.',
    meng_wangxiayitong: '于虚构中诞生的古怪之物,它的故事记录于无名的史书:孤高悍勇的一桶承载着垃圾之王的使命,寻觅强而有力的战士,扫除危害世间的废料.',
    meng_luka: '乐观阳光、不拘小节的机械臂自由格斗家,<地火>成员之一.从拳台到战场,从拳击手到战士,卢卡用这份力量去守护下层区的人们.正因为自己曾经体会过绝望,所以他更渴望将希望带给其他人.',
    meng_baizhu: '白术是璃月最具盛名的药庐<不卜庐>的主人,肩上常盘着名为<长生>的白蛇.用药手法不拘一格,仁心妙术济助四海.',
    meng_re_zhongyanzhiluzhe: '她所展现出的姿态,恰是人类跨越终焉,拥抱未来的关键一步.<这份‘权能’,是所有人不懈斗争的成果……我会妥善保管的.>',
    meng_guinaifen: '因机缘巧合留在仙舟的化外民,如今是热情烂漫的街头艺人.本名「格妮薇儿」,「桂乃芬」是好友素裳为她起的仙舟名.面对「罗浮」的全新人生,凭着对仙舟文化的热爱,桂乃芬很快学到了安身立命的一技之长——倒立吃面条、胸口碎大石、徒手接子弹等等.',
    meng_sp_naxida: '真名布耶尔,<尘世七执政>中的草神,被须弥人给予<小吉祥草王>的爱称.现今七神中最年轻的一位,自诞生起已五百年.倾听与观察是纳西妲了解这个世界的重要途径.或许是因为久居净善宫,纳西妲对世间万物都有着旺盛的好奇心.纳西妲深居于净善宫内,向来不受重视,也很少被人提及.她身负重任,哪怕目睹漆黑,经历孤独,也不曾停下脚步.对纳西妲来说,设法拯救世界树才是使命与最优先事项.她会一边继续寻找方法,一边努力成长为更合格的神.偶尔,负起<智慧之神>的责任,开导一下迷途中的子民.',
    meng_zhipeizhiluzhe: '以一千个人的负面情绪集合而成的律者,其外形具有虚数造物的特征.能够操纵一千个与宿主相关联的人偶,且每个人偶都具有一定的自我意识.它们共同掌控着一个特别的异空间<支配剧场>,并能将用傀儡线标记的人拉入剧场.其权能为:当其他律者在支配剧场内使用权能时将其夺取.在剧情中夺取识之律者,理之律者部分权能后,曾集合一千个个体力量展现出合体的巨大人偶姿态.最终被集合空、理、识、炎四个律者力量的薪炎之律者击杀.',
    meng_zhenliyisheng: '真理医生本名<维里塔斯•拉帝奥<,自称<庸人>,是一名古怪、自我、略显阴郁又不失风度的<博识学会>学者.容貌俊美,却常以奇怪的石膏头雕遮蔽面容.',
    meng_jiutiao: '天领奉行九条家的养女,幕府军的大将.九条裟罗有着天狗血统,却不像一般天狗那样栖居于山林间.她自幼被九条家收养,归入天领奉行麾下.九条裟罗行如风,言如誓,是位魄力过人的女性.她有着<神的笃信者>之名,将全部忠心都奉献给了雷电将军.将军所追求的<永恒>,也是她愿意为之而战的信念.',
    meng_pink: '颦客,谐音pink,指小粉红.别语忒分明,午夜鹣鹣梦早醒.饭圈女孩们为了维护不存在的<完美>之物穷尽一生,殊不知迟来的铁拳也可以夺走她们的一切.',
    meng_heitiane: '「流光忆庭」的忆者,神秘优雅的占卜师.常挂着温柔的微笑,耐心聆听他人的言语,并借此走入「记忆」,掌握全盘信息.热衷于收集独一无二的记忆,背后的想法却难以看透.',
    meng_jingliu: '传奇「云上五骁」之一,人送尊号「无罅(xià)飞光」.超脱了人间的胜负,为了获得斩杀「神」的力量,她选择走上截然不同的道路.至此之后,仙舟的记录中少了一个罗浮「剑首」,多了一个名字被抹去的「叛徒」.',
    meng_sangbo: '口若悬河的倒货商人,只要有「利」的地方,就有桑博的身影.桑博手中绝无仅有的情报让人不得不接近他,不过成为他的「客人」并不是什么好事.毕竟只要价钱合适,「客人」也随时可以转化为「商品」.',
    meng_shiwaluo: '旧世界的古老遗物,地髓开拓团的时代遗留下的自动控制单元.与大部分无智、只接受指令的机器不同,史瓦罗具有复杂的思考能力.',
    meng_leidianzhen: '前代雷之神.现任雷神雷电影的姐姐.',
    meng_sp_xier: '飒爽俊逸的「地火」成员,成长于地底危险混乱的环境,习惯独来独往.作为曾经的弱者,如今的她锲而不舍地追求更强大的力量.为了有朝一日揭示地底的真相,为了给自己的族人正名,希儿可以忍受任何痛苦.保护与被保护,压迫与被压迫,世界向希儿展示的始终是非黑即白的那一面——直至「那名少女」的出现.',
    //感谢为群扩提供代码支持的魈、就离谱
    //以下为粉丝提供的代码(含粉丝修改的代码)
    meng_kaiya: '凯亚·亚尔伯里奇,蒙德城西风骑士团的骑兵队长.在西风骑士团里,凯亚是代理团长最信任的副手.凡是交托于他的任务,总能得到解决.在蒙德城中,风趣幽默的他同样深受人们的喜爱,然而这位谈吐不凡的骑士隐约有着什么不为人知的秘密.',
    meng_shaoxia: '以身为铒,邀天下人入局.</br>扩展包中第一个以公益为目的创作的武将,无侮辱、轻佻、歧视、玩笑等含义,武将的初衷在于让大家记住平民英雄.如有冒犯,联系b站紫灵谷的骊歌,即刻删除.',
    JLP_furina: 'up非常喜欢,技能表现力很强,玩法和剧情的契合度也很好.另外本武将的代码、语音、台词和制图均是<就离谱>本人独立制作的.<hr>特别鸣谢——</br>代码导师:<font color=#ff0dac>紫灵谷的骊歌</font></br>引路老师:<font color=#ff0dac>萨巴鲁酱</font></br>代码参考:<font color=#ff0dac><忽悠宇宙>扩展</font></br>教科书:<font color=#ff0dac><大宝规则集><三国杀DIY·设计攻略&资源导航></font></br>模板来源(制图在米忽悠の小宇宙群相册):<font color=#ff0dac>幽蝶化烬</font></br><hr>基础意象:装备牌栏=>神权及其外显</br><hr><b>芙宁娜 3 踽踽独行</b></br>踽踽独行意为孤独地行走,五百年来芙芙孤身一人走在看不到结局的路上,不能保证成功,也不能轻易放弃.她就像一根绷紧的琴弦,不能松弛,时常几近崩溃边缘……</br><hr><b>踽行</br>使命技,锁定技.每轮开始时,废除最后一个装备栏,并令场上牌数最少的一名角色明置并弃置一张手牌.</br>成功:洗牌后,你回复所有体力,交换〖神仪〗中的<回复>和<废除>,将未废除的装备栏转移给一名其他角色,并随机置入装备牌.</br>失败:若你的装备栏均被废除,你失去〖神仪〗,并令其他角色各失去1点体力.</br>〖踽行〗失效后,你获得〖人生〗.</b></br>⑴五个装备栏逐渐向上废除=>耗时五百年,水灾逐渐淹没神座</br>⑵场上牌(主要为装备牌)最少=>罪犯的权力最少☞装备牌最少</br>⑶芙芙的装备栏随时间减少=>装备牌也减少☞芙芙注定要被众人审判</br>因为神仪的存在,芙芙非常害怕手牌的暴露.</br>⑷暴露手牌=>更容易失去普通牌=>废除装备栏=>使命失败=>五百年功亏一篑</br>使命成功</br>⑸洗牌=>时代更替=>预言</br>⑹回复所有体力=>芙芙满血复活!</br>⑺移动装备栏和装备牌=>转移神权给那维莱特</br>使命失败</br>⑻其他人扣血=>枫丹人坠入深海,仅余芙宁娜</br>⑼获得〖人生〗=>无论芙卡洛斯计划的成功与否,芙芙终将卸下伪装,成为凡人</br><hr><b>神仪</br>锁定技,你的手牌数至少为装备栏数.你于出牌阶段外失去〖神仪〗/非〖神仪〗牌后,回复/废除最后一个装备栏.</b></br>神仪旨在用虚张声势隐藏自己,手牌数至少装备栏数,意为手牌数低于装备栏时摸牌,获得的这些牌就是〖神仪〗牌.</br>⑴不断补充〖神仪〗牌=>用神权保护自己</br>⑵用〖神仪〗牌保护非〖神仪〗牌=>用<虚假形象>保护<真实内心></br>⑶失去〖神仪〗牌=>回复装备栏=>巩固神的形象</br>⑷失去普通牌=>废除装备栏=>神的形象崩溃</br>装备栏减少时,补充神仪牌的阈值也会降低,那么芙芙会更加难以维持神的形象,会如滚雪球般提高使命失败的概率.维持神仪的稳定,需要小心经营,如履薄冰,正如小心经营自己的形象的芙宁娜一般.因为前期没有神仪牌,为了防止回合外失去普通牌,芙芙刚需前置位,从而于出牌阶段将普通牌换为神仪牌.</br><hr><b>神仪改</br>锁定技,你的手牌数至少为装备栏数.你于出牌阶段外失去〖神仪〗/非〖神仪〗牌后,废除/回复最后一个装备栏.</b></br>象征意义</br>⑴交换<回复>和<废除>二词,相当于给芙芙一个靠自己从0开始,重新走自己人生,争取幸福生活的机会</br>⑵此时的芙芙玩法从尽可能使用〖神仪〗牌、不愿展现内心的小心翼翼,变为了尽可能使用自己的牌,回合外展示自己的轻松自由.玩家玩法的变化也反映了芙芙真实的内心感受,描述了芙芙走下神位后的生活.</br><hr><b>人生</br>锁定技,你的准备阶段和结束阶段随机改为摸牌阶段和弃牌阶段.</b></br>象征意义</br>技能名很<宏大>,为了方便后人使用,不能过于个性化和私有化.我选择了降低与芙宁娜的耦合,提升其可用价值.</br>所谓生活,就是即使昨日天降横财,明日灾难降临,今日依然要喝咖啡,享受我的小蛋糕.</br>☞非主要阶段随机改成弃牌摸牌阶段=>人生的各种意外</br><hr>芙芙玩法</br>撑到洗牌即可任务完成,将权力交给忠臣来一波爆发和保护,人生和神仪都是触发技,玩起来更从容一些.但是牌堆的刷新速度要靠所有人,能不能保住枫丹,不是芙宁娜一个人的责任.但是,谢谢你,五百年来辛苦了,给你一个拥抱,我的芙芙.</br>如果失败,芙宁娜会失去所有权力,仅剩意义有限的人生.但是,请不要自责,我的芙宁娜,你已经很努力了,这一切都不怪你.',
    JLP_zhongli: '就离谱的第二个长设计作品,本武将的代码、语音、台词和制图依然是<就离谱>本人独立制作的.<hr>特别鸣谢——</br>代码导师:<font color=#ff0dac>紫灵谷的骊歌</font></br>引路老师:<font color=#ff0dac>萨巴鲁酱</font></br>代码参考:<font color=#ff0dac><忽悠宇宙>扩展</font></br>教科书:<font color=#ff0dac><大宝规则集><三国杀DIY·设计攻略&资源导航></font></br>模板来源(制图在米忽悠の小宇宙群相册):<font color=#ff0dac>幽蝶化烬</font></br><hr>钟离的事迹不像芙芙一样是具体、单一、重复的,相比之下,钟离深入人心的地方是他的众多神名、众多形象、众多传说.换言之,一个故事不足以概括钟离,我对钟离的刻画,必然是片面的.</br>芙芙同款基础意象:装备牌=>神权/权力</br>因为没有岩属性,故基础意象=>装备牌=>岩神权能=>岩罚,岩盾,天星或各种岩造物</br><hr>钟离 4/4 鼎铸山河</br>鼎=>大国重器.</br>以鼎喻言行分量重=>契约既成,一言九鼎</br>以鼎表重嶂不移=>武神荡尘涤污,璃月鼎立天下</br>以鼎作国家之象征=>以鼎合岩王爷之身份</br><hr><b><u>契约</br>每名角色的出牌阶段限一次.该角色可以展示一张牌,并邀请其他角色展示一张其指定类型的牌,该角色可以用自己的展示牌交换一名其他角色的展示牌.若其中一方为你,你获得一枚护甲.</u></b></br>象征意义</br>钟离=>贸易之神、契约之神.</br>岩王爷鼓励交易=>不论敌友,每名角色都可各取所需.贸易,没有永远的敌人.</br>实战意义</br>提高卡牌利用率+增加高价值牌的传递=>增强全场<隐形>防御力,鼓励玩家断长补短=>高位面实现<岩>系防御高、重嶂不移的特色<同时><液化>角色强度</br><i><s>额外提示,最后一句获得护甲,是在不破坏已有内涵的同时进行的强度考量.因为钟离的前两个技能都是辅助技能,自身没有额外能力,不得已增加此描述保障基础强度.</s></i></br><hr><b><u>律衡</br>锁定技,当一名角色的牌进入其他角色的区域后,你选择一项:</br>1. 为前者的 空装备栏 随机置入一张装备牌;否则摸一张牌.</br>2.令后者将一张装备牌当【杀】对自己使用;否则弃一张牌.</u></b></br>象征意义</br>钟离=>契约之神,曰:契约既成,食言者当受食岩之罚.</br>一名角色的牌进入另一名角色的区域=>打破平衡,以律法衡度失者的损失或惩罚贪者.</br>实机钟离为盾辅=>适合以装备作为补偿</br>对自己出装备【杀】(而非直伤)=><生吞>岩罚(必须<自食恶果>)</br>队友触发此技=>律法之下,众生平等.律衡为锁定技,无论敌我,破坏平衡者必当承担后果=>鼓励钟离主公,方便玩家配合选将,防止忠臣被克制</br>实战意义</br>单律衡=>收益迷惑且不稳定=>须搭配契约发动</br>意象上=>律衡与契约同为交易的一部分</br>收益上=>钟离通过改变律衡分支,可实现敌我区分.我的初版①为获得护甲,但收益逆天,因此改为置入装备牌.</br>后面的摸一张牌和弃一张牌,是不可删除的,这部分损失和赔偿的于私于公都必须执行.</br>隐性威慑=>敌人忌惮钟离对律衡②的实施=>主动放弃交易=>因为<律衡>的存在,契约和收益不会<失衡></br><hr><b><u>暝晖</br>主公技,限定技.一名其他角色造成击杀后,你可以将所有装备牌依次对其使用.</u></b></br>象征意义(实战意义不难理解)</br>暝晖=>光明与黑暗交相辉映</br>解读①敌人击杀队友:</br><i>天星极陨,此乃天道!</i></br>钟离引动岩神之力,将场上的岩造物汇聚为天星砸向敌人.如何体现<砸>,只是给他装备吗？二技能律衡给出答案.该角色获得太多来自他人的装备,钟离只需执行<律衡②>,便可实现连续多刀斩杀,这是体现钟离作为<武神>杀敌的场景.</br>解读②队友击杀敌人:</br><i>我的职责……又是否已经完成？</i></br>队友击杀=>璃月人民击杀魔神=>人民的成长</br>剧情对钟离着笔墨最多的——钟离放弃神位,贯彻以人为本的发展观.既然人民已经长大,何不安然退位,于是钟离将自己的装备尽数移动给此造成击杀的角色.不论芙芙还是钟离,装备都象征权力,让权于人,这是体现钟离作为<岩王帝君>假死卸任的场景.</br>这个技能非主公技不可,而因为解读①的高爆发,解读②的卸任设定,这个技能又非限定技不可.</br>',
    JLP_nahida: '就离谱的第三个长设计作品,本武将的代码、语音、台词和制图依然是<就离谱>本人独立制作的.<hr>特别鸣谢——</br>代码导师:<font color=#ff0dac>紫灵谷的骊歌</font></br>引路老师:<font color=#ff0dac>萨巴鲁酱</font></br>代码参考:<font color=#ff0dac><忽悠宇宙>扩展</font></br>教科书:<font color=#ff0dac><大宝规则集><三国杀DIY·设计攻略&资源导航></font></br>模板来源(制图在米忽悠の小宇宙群相册):<font color=#ff0dac>幽蝶化烬</font></br><hr>基础意象:装备牌栏=>神权及其外显.</br>基础意象:装备牌栏=>神权及其外显.</br>纳西妲的设计需要平衡本我,自我,超我三个概念.大慈树王以超我的姿态舍命救世;而纳西妲则在种种经历中重新找回并审视<自我>,成为新一代草之神.</br><hr><b>纳西妲 3/4 破土新芽</b></br>这个称号简单清新,描述了纳西妲的新芽本质,营造纳西妲身为新神在磨难下破土而出、破茧成蝶的情景.体力值的设计,保留温迪钟离和影纯正神躯的高上限4,而非芙宁娜的凡体3,考虑到纳西妲年幼、自我认知尚不成熟,因而体力值有所缺失.</br><hr><b>困雏</br>否极技,锁定技.你不能对未对你使用过牌的其他角色使用牌;其他角色对你使用牌时,你转移给其一个装备栏.</br>泰来:你回复所有体力且本巡调离.</b></br>⑴锁定技=>不容改变的无力感</br>⑵☞现实屏障:教令院</br>┗游戏开始时无法对他人使用牌=>被关在教令院中无依无靠</br>┗∵装备栏=>权能</br>∴扩展装备栏=>草神权能的外放☞虚空终端</br>⑶☞内心屏障:超我的认知</br>┗不在乎纳西妲的人=>也无法接触之</br>┗对纳西妲使用了牌=>恰似夜中曙光</br>┗纳西妲对此人用牌=>借此窥见世间</br>⑷有人使用终端后,纳西妲可以借虚空的漏洞看到现实世界.而她被教令院囚禁后,虽然不能再看到外界,但得以重新审视自己,找回遗失的<本我>.</br>⑸p.s.否极技:民间标签.相当于无序有多个选项的转换技,选项全部选择后,触发<泰来>效果并重置此技.</br>本技能中,选项的执行为装备栏的废除;泰来触发后复原所有装备栏.</br>此处取<否极泰来>的内涵,异常合适</br>┗装备栏全废=>纳西妲被架空☞移出游戏☞消失在民众视野中=>囚禁的末路,救赎的开始=>既是否极,亦是泰来</br>本巡:民间标签.范围是角色每两个<回合开始时>之间的时间段,长度与一轮相同.</br>⑹泰来前☞〖困雏〗锁定技,纳西妲正如她向往的大慈树王一般,以透支自己的超我姿态无差别帮助所有人☞因为纳西妲从未将大贤者视为敌人和威胁,在她眼中,他们都是自己守护的对象.即使哭泣着表示<我有点生气了>,也依然像<慈母>般仅仅是责怪这些<犯错的孩子>.</br>⑺泰来后☞纳西妲从阴影中走出,重新认知<自我>后不再忽视自己的感受,甚至扬言要<报复>大贤者(真是有点可爱呢).这个时候纳西妲已经得到了他人充足的关注,不再是孤身一人.</br>转移装备栏的操作流程是:①来源有扩展栏,删除此扩展栏;否则,废除一个装备栏.②目标直接获得一个扩展栏.</br>纳西妲被困的险境得以还原.当玩家感到憋屈无力的时候,如果能理解纳西妲当初比这难受一千万倍的感受,此番设计却也不算白费.</br><hr><b>虚空</br>锁定技,你或有扩展装备栏的角色受到伤害后,你观看并交换牌堆顶的两张牌和其的手牌.若其因此获得描述含有牌名的牌,你废除一个装备栏,其移除所有扩展装备栏并失去1点体力.</b></br>⑴☞大贤者的运营下,民众对虚空的滥用</br>⒈扩展装备栏=>虚空终端</br>⒉受到伤害后=>民众经历挫折</br>⒊锁定技=>对终端无脑依赖</br>⒋小观星=>终端的作用</br>⒌交换牌=>草神权能的指引</br>⑵☞纳西妲被虚空<边缘化><工具化></br>⒈虽名为<虚空>,其也表现了技能拥有者——纳西妲无私奉献的过程.</br>⒉扩展装备栏何来☞来自〖困雏〗中纳西妲的给予</br>⒊锁定技=>纳西妲的至善本性让她不擅拒绝</br>⑶描述中包含其他牌=>可能很难被get到.</br>解读1:普通知识中隐藏的<禁忌知识></br>解读2:剧情里艾尔海森植入的<木马></br>将<一张牌里藏的另一张牌>视为入侵信息.入侵后,对民众和纳西妲都有害,且该角色须销毁终端.</br><hr><b>逐光</br>锁定技,你使用单体牌前,重新指定使用者和使用目标.</b></br>这个技能看似是辅助前二者的,但此技本身却又恰好成为纳西妲的最核心机制.</br>⑴锁定技=>为了玩家操作的便捷,不用一直点确定</br>⑵☞泰来前的纳西妲难道真的只能等人来救吗？</br>当有人首次对纳西妲使用牌后,纳西妲可以通过对此人使用牌,发动〖逐光〗改为令其他角色对自己使用,从而触发〖困雏〗给出虚空终端(额外装备栏),扩大自己接触外界的突破口.</br>纳西妲亦可自我救赎.她对自己使用牌时,也可以改为他人对纳西妲使用此牌,实现自创突破口.</br>⑶☞纳西妲困在教令院真的就对外界0接触吗?</br>当然不是,纳西妲通过虚空拯救了阿如村,拯救了迪娜泽黛,还帮助了许多迷茫或受难的须弥人.纳西妲使用牌可以实现离间敌人或明策队友,即使纳西妲不直接接触这些人,亦可通过此法提供帮助.</br><hr><b>总结</b></br>☞〖困雏〗纳西妲虽然依靠他人打开突破口;但她亦可〖逐光〗自救,并非妄自菲薄,自暴自弃.</br>☞纳西妲虽〖逐光〗为他人指明方向,催动他人行动;但自己<泰来>后亦能摆脱〖困雏〗身份,而非待人以严,待己以宽.</br>☞纳西妲亦可如她向往的大慈树王般,拥有舍命救世的决心,敢承受<禁忌知识>的伤害;但亦有手段消除<禁忌知识>,在未来的草主之路走出了独属于自己的人生.</br>☞纵使前期被〖虚空〗所限,但后期亦可利用〖虚空〗造福民众.这是一个神明成长的过程,让我们见证一个最有担当、最有责任感的神明的诞生吧.',
    meng_sp_ren: '弃身锋刃的剑客,原名不详.效忠于「命运的奴隶」,拥有可怖的自愈能力.手持古剑作战,剑身遍布破碎裂痕,正如其身,亦如其心.',
    JLP_leidianying: '就离谱的第四个长设计作品,本武将的代码、语音、台词和制图依然是<就离谱>本人独立制作的.<hr>特别鸣谢——</br>代码导师:<font color=#ff0dac>紫灵谷的骊歌</font></br>引路老师:<font color=#ff0dac>萨巴鲁酱</font></br>代码参考:<font color=#ff0dac><忽悠宇宙>扩展</font></br>教科书:<font color=#ff0dac><大宝规则集><三国杀DIY·设计攻略&资源导航></font></br>模板来源(制图在米忽悠の小宇宙群相册):<font color=#ff0dac>幽蝶化烬</font></br><hr>基础意象:装备栏=>神权.</br><hr>影先后失去三位友人天狗<笹百合>、鬼族少女<御舆千代>、狐主<狐斋宫>、和孪生姐姐雷电真.逐渐碎裂的回忆撕裂她的内心,「前进就会有所失去」令影不再相信未来.为了维持现状,留住身边的一切,影造出了雷电将军,化为意识隐入「梦想一心」中,许以臣民千世万代不变不移的「永恒」.</br><hr><b><u>影 4 断目销魂</br></u></b><断目销魂>取自<目断魂销>,原意是指竭尽目力也看不见,内心十分悲痛.<目断魂销>适合表现影失去故友时的绝望的心情,但我们也知道,影最终走出阴霾,看到了人民心存的梦想和希望.将这个词改为有主动内涵的<断目销魂>,意为告别过去,走向未来;如<梦想一心>般,斩悲痛为决心.</br><hr><b><u>无妄</br>锁定技,你的初始牌为【影】.你受到伤害时,或一名角色的判定结果确定为黑色时,你改为将一个{首项}当雷【杀】使用,结算中目标角色与{此项}类型相同的元素失效.</br>{①【影】② 护甲 ③ 普通技能}</br>无想</br>锁定技.每回合结开始时,若〖无妄〗:没有项目,你装备【梦想一心】;有项目,但你没有{首项}的元素,你删除此项并获得{同序号的技能}.</br>{①〖无念〗②〖无梦〗③〖无我〗}</br></u></b>①〖无妄〗<目标角色本回合与{此项}类型相同的元素失效>,其实很好理解:</br>☞影牌=>牌失效=>强命</br>☞护甲=>护甲失效=>无视护甲</br>☞普通技能=>普通技能失效=>封技能</br>②〖无想〗的第一句,会根据〖无妄〗的执行进度抉择,〖无妄〗的选项全部删除后,影将获得【梦想一心】.</br>第一形态:【影】当雷杀,无子技能</br>①初始牌为四张【影】=>影的三位故友和姐姐真</br>失去【影】的方式,可能是弃置(被灾厄吞没的狐斋宫),可能被敌人顺走(因发疯而对影挥刀的千代),可能当杀使用(为稻妻战斗而陨落的百合),失去最后一张(陨落的真)后,〖无妄〗会在〖无想〗的驱使下切换形态.三国杀的<牌>失去的方式恰好对应<剧情中人物>的逝去方式,这种<巧合>实在可遇不可求</br>②受到伤害时/判定为黑色=>友人逝去的原因=>守护/天灾</br>第二形态:护甲当雷杀+〖无念〗</br>①影的所有故友都逝去之后,影陷入极度的迷茫和痛苦.因为不断的<失去>,影开始坚信永恒可以留住一切,于是开始制备人偶(护甲),自己则前往<梦想一心>的净土闭关.</br><hr><b><u>无念</br>每回合结束后,若本回合没有角色对你使用过牌,你可以废除一个非武器栏,获得一枚护甲.</u></b></br>②结束阶段=>时机略早于〖无想〗,可以消耗非武器栏制备人偶.</br>③没有人对你使用牌=>影孤身一人作出的抉择</br>④非武器栏=>基础意象,象征雷神除无想的一刀外的权能</br>⑤换了护甲=>影用雷神权能换了执行永恒的人偶-雷电将军(甚至神之心都不要了)</br>⑥〖无妄〗中护甲当无视护甲的雷杀使用=>影授予人偶力量,其代行<御前决斗>的裁决</br>第三形态:非锁定技当雷杀+〖无念〗〖无梦〗</br>①在愚人众摸清人偶的行事法则后,诱导雷电将军实施<眼狩令>,为稻妻带来了巨大的危机.</br><hr><b><u>无梦</br>你使用【杀】指定目标后,获得目标角色一个失效的普通技能;若其有未失效的技能,你失去一个普通技能.</u></b></br>②普通技能=>普通人的神之眼</br>③〖无妄〗令技能本回合失效=>眼狩令</br>④〖无梦〗获得此技能=>神之眼?拿来吧你!</br>⑤未失效的技能=>大多数特殊技能,锁定技/使命技/觉醒技/限定技等等=>未被收缴的神之眼表示宵宫、托马、神里绫华、神里绫人、早柚、九条裟罗……以及没有神之眼的爷!他们是变数,是影追求永恒的阻碍.若有他们,将军的眼狩令便难以推行.</br>⑥如果想要到达下一阶段,需要影失去已有所有普通技能,包括〖无念〗和〖无梦〗.这意味着,影要想真正认识到无法达到的永恒,首先要放下自己的一切,有舍才有得.</br>⑦这个技能不会让敌人失去技能技能,通常情况只是普通技能的获得又失去(根本留不住神之眼好吧),而因为〖无妄〗的存在,所有普通技能都迟早会失去.</br>第四形态:〖无妄〗〖无想〗化为<妄想></br>只剩〖无我〗</br>①因为违背了将军的理念,影的身体和意识产生了冲突.〖无我〗技能是影对自我的反思和矫正,象征着影的新生,象征着她将目光从过去投向未来,从自我投向外在.</br><hr><b><u>无我</br>锁定技,你使用【杀】后,若目标角色未改变体力值,你重铸一张牌且此【杀】不计入次数上限;否则,你将其的一张牌移至你的合法区域.</u></b></br>②使用【杀】未改变敌人的体力,一是被抵消了,二是濒死救回来了,都意味着对方坚不可摧,不易击溃.影会因此产生信仰的动摇,重铸和双刀是自我反思;而击败对方则可以夺回身体的掌控权.</br><b><u>梦想一心♥️️️6 武器 攻击范围3</br>①你可以改变一种装备栏的废除状态,视为使用一张雷【杀】.</br>②你使用【杀】指定目标后,结算时根据装备区的牌:</br>断绝·没有其他牌,目标不能响应此【杀】;</br>涤罪·没有颜色,目标的非锁定技失效;</br>洞察·有颜色,目标的防具和护甲失效.</u></b></br>③【梦想一心】是以自身装备栏的改变作为出【杀】的凭据.一来是反映其主人前后对权能的舍弃和找回以及自我的心路历程;二来是配合〖无我〗技能,实现装备牌花色的掌控和〖无念〗废除装备栏的复原,实现强度和操作上的配合.</br>④这把武器的三个效果其实就是影和〖无妄〗的缩影.而装备区的颜色的判定方式和多张转化牌的判定方式是一样的,表示的是内心的彷徨.</br><hr>P.S.</br>☞可以看到影的觉醒流程非常长,虽然设计上需要精打细算,但真实游玩时每一步都可以逃课.这也是修复之前的几个设计发育期过长的毛病.</br>跳过方式为:</br>☞第一阶段,丢弃浪费【影】牌.</br>☞第二阶段,不补充护甲.</br>☞第三阶段,这个阶段本来就很短暂,技能本就不多,抗两下就没了</br>但是需要注意,影其实是前期将,在获得〖无我〗前拥有多刀和防御能力,拖到后期反而严重匮乏防御力和进攻性,应当速战速决.</br>p.s.影的缺陷是卡距离,如果攻击范围内没有敌人,影要么被迫杀队友,要么无法免伤,分分钟崩盘.</br><hr><b><u>总结</u></b></br>影的整体设计,需要还原她失去友人=>造出人偶=>将军狩梦=>重审自己的过程,分别用【影】=>护甲=>普通技能=>重铸和移动牌代表这些事物.<失去>作为令影痛苦的根源,贯彻了整个武将;虽然影失去了以上种种,但也因此守护了她心爱的稻妻——她所失去的一切,换来的是稻妻的和平.人虽然最终会失去一切,但相比失去的东西,能留下什么才是我们应该在乎的.痛定思痛,痛何如哉?',
    meng_luocha: '金发俊雅的年轻人,背着巨大的棺棹.身为天外行商的他,不幸被卷入仙舟「罗浮」的星核危机,一身精湛医术莫名有了用武之地.',
    meng_natasha: '做事严谨的医生,总带着难以捉摸的微笑.在医疗资源匮乏的下层区,娜塔莎作为为数不多的医生照料着地下的男女老幼.即使是最调皮的虎克,见了她也要乖乖喊一声「娜塔莎姐姐」.',
    meng_wu_jingyuan: '位列帝弓七天将之一的「神策将军」,外表懒散、心思缜密.不以危局中力挽狂澜为智策,因此在常事上十分下功夫,以免节外生枝.因其细心谋划,仙舟承平日久,看似行事慵懒的景元反被送上绰号「闭目将军」.',
    meng_tuoma: '社奉行神里家的家政官,同时也是活跃在稻妻的<地头蛇>.为人友善又富有亲和力,不论身处何处都能轻易融入人群.乍看似乎是个非常随性的人,实际上却很有责任感.无论对待工作或人际都有着格外认真的一面.',
    meng_diluke: '作为诗酒之城,蒙德的酒业闻名遐迩.而「晨曦酒庄」的主人迪卢克老爷掌握了蒙德的酒业之半,这意味着,他掌握了金钱的流动脉络与酒馆的闲言碎语.某种意义而言,称得上是无冕的蒙德之王.',
    JLP_huohuo: '可怜又弱小的狐人小姑娘,也是怕鬼捉鬼的罗浮十王司见习判官.名为<尾巴>的岁阳被十王司的判官封印在她的颀尾上,使她成为了招邪的<贞凶之命>.害怕妖魔邪物,却总是受命捉拿邪祟,完成艰巨的除魔任务;自认能力不足,却无法鼓起勇气辞职,只好默默害怕地继续下去.<hr>●作者:就离谱</br>●个人介绍:大家好,我是尾巴大爷.首先,希望诸位加入「尾门」,我们的信仰只有一个,那就是——藿藿⸜₍๑•⌔•๑₎⸝!凛凛寒冬,让我们一起抱住藿藿取暖!</br>●总体设计:叙事方面,取材自我(尾巴)与她的初次相遇;实战操作,包含星铁中实机藿藿的技能效果;玩法感受,则是藿藿本人的性格特点.</br>●技能详解:</br>⑴〖畏怯〗技能表现藿藿胆小的性格特点,一碰到敌人就龟缩起来.因为延时类锦囊不能重复,所以如果队友不拆,相当于每轮限一次的防御技(如果是虚拟牌,当然就白嫖啦).</br>⑵〖煦心〗是表现藿藿善良温暖的本性,是她救了尾巴大爷我!这个技能表现藿藿救尾巴的场景:</br>①将判定区的牌当锦囊使用,可以为队友解判定;如果锦囊是铁锁,可以复原横置的角色,还原实机藿藿的解控定位.除此之外,也可以对自己发动,消除一技能的负面影响;或清空牌量不多的区域,视为使用一张扭转战局的锦囊.</br>②若目标包含你,表示尾巴(该角色)在意藿藿,藿藿也愿意和尾巴在一起,尾巴就会得救,实现一次简单的治疗.</br>③但如果尾巴(该角色)开南万,想要变成<燎原>干坏事,野心膨胀的尾巴就会伤害藿藿,把藿藿吃掉!但如果藿藿愿意,也可以忍痛喂养尾巴,放任它四处撒野(˃ ˄ ˂̥̥ ).</br>●总结总体而言,玩法很多.三血两技能,可防御可辅助,必要情况也可以扣一血开南蛮,收益并不阴间.最后,新的一年,希望各位尾巴都可以找到困难时愿意帮助你的那位<藿藿>,新年快乐!',
    meng_kalian: '500年前的天命最强女武神,天命女武神部队的队长,卡斯兰娜最杰出的战士.第十一神之键<犹大的誓约>的持有者.天命东征后叛离天命,带着封印第十二律者的盒子逃到极东,邂逅了巫女八重樱……',
    meng_shanhugongxinhai: '她是海祇岛的<现人神巫女>,也就是现任海祇岛最高领袖.珊瑚宫心海通读兵法、擅长谋略,在军事上有着独特见解,也能将内政、外交等工作处理得井井有条.不过这位人们眼中深不可测的领导者,似乎也有不为人知的一面.',
    meng_huahuo: '「假面愚者」的成员之一,难以捉摸,不择手段.危险的戏剧大师,沉迷于扮演,身怀千张假面,能化万种面相.财富、地位、权力…于花火而言都不重要,能让她出手的,唯有「乐趣」.',
    meng_sb_ren: '弃身锋刃的剑客,原名不详.效忠于「命运的奴隶」,拥有可怖的自愈能力.手持古剑作战,剑身遍布破碎裂痕,正如其身,亦如其心.',
    meng_danhengbailu: '仙舟联盟的三大基石之一.持明族来自某个海洋世界,其血脉传承据说可上溯至「不朽」之龙.拥有罕见的长生机制:在漫长生涯的尽头,持明会返回古海中,结成珍珠般的卵,静待破壳蜕生,重以年幼的形态出水落地.丹恒&白露分别是前代和现代的持明龙尊.',
    JLP_wendy: '就离谱的第五个长设计作品,本武将的代码、语音、台词和制图依然是<就离谱>本人独立制作的.<hr>特别鸣谢——</br>代码导师:<font color=#ff0dac>紫灵谷的骊歌</font></br>引路老师:<font color=#ff0dac>萨巴鲁酱</font></br>代码参考:<font color=#ff0dac><忽悠宇宙>扩展</font></br>教科书:<font color=#ff0dac><大宝规则集><三国杀DIY·设计攻略&资源导航></font></br>模板来源(制图在米忽悠の小宇宙群相册):<font color=#ff0dac>幽蝶化烬</font></br><hr><b><u>温迪4(    )</br>聚岚</br>每个轮次开始时,令所有角色抉择:</br>横置并摸一张牌;复原并重铸手牌;</br>将一张牌交给你,你可令其恢拓 1 .</br>你因此获得的杀,不计入所有上限、</br>默认指定与你横置状态不同的角色.</br></u></b>抗争,是为了蒙德的抗争不被遗忘.</br>与先驱同生共死,让心灵洗尽铅华;</br>追随振弦的少年,投入解放的浪潮.</br>愿意同命共存者,潜力可破禁锢的风墙;</br>决心推翻暴权者,信念就是锋镝的航线.</br><b><u>弓胆</br>转换技,锁定技,你使用【杀】时,</br>阳:所有目标替换为其中一个目标.</br>阴:重置琴心并令此牌不能被响应.</br>交换与琴心同名的一对选项.</br></u></b>抗争,是为了蒙德的人们拥有自由,</br>刺穿真正的敌人,不被泪水蒙蔽双眼;</br>重拾遗忘的初心,不因仇恨走火入魔.</br>无论弓弦还是号角,皆可奏响镇魂的幕曲;</br>无论笔刃还是枪炮,都是挽危救国的良药.</br><b><u>琴心</br>转换技,限定技,你使用锦囊牌时,</br>阳:醉酒并切换此牌的可响应状态.</br>阴:将此牌名改为铁索连环或决斗.</br>此牌造成伤害后,摸与之等量的牌,</br>若手牌唯一最多,分配你超出的牌.</br></u></b>抗争,是为了蒙德的诗文永不终结.</br>厮杀不能令战争停止,</br>镇压不会让狂风平息.</br>诗人自千年前走来,从未攫取权柄;</br>只为属于天空的鸟,能在苍穹翱翔.</br>骑士向云翳上走去,从未替天行道;</br>只为属于人民的歌,能够源远流长.</br><hr><风之国土的精神是自由.></br><风之国土的灵魂是诗文.></br><风之国土的脊梁是抗争.></br></br>蒙德的历史曾是抗争的历史.</br>抗争是为了蒙德过去的抗争不被遗忘,</br>如同草木突破土壤,以恒风之力洞穿石墙.</br></br>蒙德的历史就是抗争的历史.</br>抗争是为了蒙德现在的人们拥有自由,</br>如同风神吹散冰雪,以狮牙之心奋起抗争.</br></br>蒙德的历史将是抗争的历史.</br>抗争是为了蒙德未来的诗文永不终结,</br>如同轻风随韵而起,以悠悠之歌颂扬.</br><hr>设计师们,当你完成一个作品之后,</br>一定要记得设计本身的意义.</br>武将的数值、音乐和美工,</br>强度、意象和隐喻,</br>都是作品的一部分.</br>战胜、优越他人并不意味着一切,</br>在抵达终点之前,</br>用你的眼睛多多观察这个<世界>吧.</br>',
    meng_huangquan: '自称「巡海游侠」的旅人,本名不详.身佩一柄长刀,独行银河.淡漠寡言,剑出如紫电般迅猛,却从来只以刀鞘战斗,收而不发.',
    meng_re_xinyanzhiluzhe: '在支配剧场挥出最后那一击时,手中的大剑仿佛感受到了旁人的希冀,剑身凝结出一道道光芒,将同伴们的力量传递,将汇聚于她身上的希望燃起.少女没有回头,但她知道,自己身后是许多人注视的目光、是同伴们传递给自己前行的力量、是黑夜中永燃不熄的薪火.',
    meng_leidianyayi: '雷电芽衣,身为ME社社长雷电龙马的女儿,本是千金大小姐,却因父亲的含冤入狱,处境一落千丈,她的心境也因此陷入了黑暗.于是,她被选中成为了第三律者.然而名为琪亚娜·卡斯兰娜的少女却出现了,与律者人格当面对峙并击败了她.是这位白发女孩,将芽衣从无限的黑暗中拉向了光明,带给她全新的人生.但是,为了拯救这位女孩,她甘愿亲手斩断过去的一切——与女孩的回忆、往昔的温暖、甚至是自身的命运,并再次踏入崩坏的黑暗,成为雷之律者.因为在她心中,比起这个世界,她更重要!',
    meng_shajin: '星际和平公司「战略投资部」的高级干部,「石心十人」之一,基石为「诡弈砂金」.个性张扬的风险爱好者,时常面带笑容,真心却难以揣测.靠着同命运的博弈赢得如今的地位,将人生视作一场高风险、高回报的投资,而他向来游刃有余.',
    meng_lingke: '朗道家年龄最小的女孩,贝洛伯格首屈一指的极地探险家.看似慵懒,实际上执行力极强.散发生人勿近的气场只是为了避免不必要的社交.至于如何定义不必要的社交——「呃…所有社交不都是没必要的吗？」',
  };
  hyyzYm.skill = {
    //紫灵谷的骊歌
    menggengxin: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      enable: 'phaseUse',
      position: 'he',
      filter(event, player) {
        if (!player.countCards('he') || player.getExpansions('mengshiping').length >= 4) return false;
        var suits = [];
        if (player.getExpansions('mengshiping').length) {
          for (var i of player.getExpansions('mengshiping')) {
            suits.push(i.suit);
          }
        }
        if (
          player.countCards('he', function (card) {
            return !suits.includes(card.suit);
          }) > 0
        )
          return true;
      },
      filterCard(card, player) {
        var suits = [];
        if (player.getExpansions('mengshiping').length) {
          for (var i of player.getExpansions('mengshiping')) {
            suits.push(i.suit);
          }
        }
        if (ui.selected.cards.length) {
          for (var j of ui.selected.cards) {
            suits.push(j.suit);
          }
        }
        return !suits.includes(card.suit);
      },
      selectCard: [1, Infinity],
      discard: false,
      lose: false,
      complexCard: true,
      check(card) {
        return 10 - _status.event.player.getUseValue(card);
      },
      content() {
        var cards = cards;
        player.addToExpansion(cards, player, 'give').gaintag.add('mengshiping');
        player.draw(cards.length);
      },
      group: ['menggengxin_sub', 'mengshiping'],
      subSkill: {
        sub: {
          trigger: {
            global: ['phaseBefore'],
            player: 'enterGame',
          },
          forced: true,
          filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
          },
          content() {
            player.say('大家好,我是紫灵谷的骊歌!');
            game.playAudio('../extension/忽悠宇宙/audio/skill/Ym_zilinggudelige_begin.mp3');
          },
        },
      },
      ai: {
        order: 1,
        result: {
          player: 1,
        },
      },
    },
    mengshiping: {
      init(player) {
        player.markSkill('mengshiping');
      },
      charlotte: true,
      mark: true,
      marktext: '视频',
      intro: {
        markcount: 'expansion',
        mark(dialog, content, player) {
          var content = player.getExpansions('mengshiping');
          if (content && content.length) {
            if (player == game.me || player.isUnderControl()) {
              dialog.addAuto(content);
            } else {
              return `共有${get.cnNumber(content.length)}个<视频>`;
            }
          } else return '断更ing……';
        },
        content(content, player) {
          var content = player.getExpansions('mengshiping');
          if (content && content.length) {
            if (player == game.me || player.isUnderControl()) {
              return get.translation(content);
            }
            return `共有${get.cnNumber(content.length)}个<视频>`;
          } else return '断更ing……';
        },
      },
      onremove(player, skill) {
        var cards = player.getExpansions(skill);
        if (cards.length) player.loseToDiscardpile(cards);
      },
    },
    mengsanlian: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      init(player) {
        player.storage.mengsanlian = [];
      },
      onremove(player) {
        for (var i of player.storage.mengsanlian) player.removeGaintag(i);
      },
      mod: {
        aiOrder(card, player, num) {
          if (!card.cards) return num;
          for (var i of card.cards) {
            for (var j of player.storage.mengsanlian) {
              if (i.hasGaintag(j) && !player.hasSkill('mengyuanmeng')) {
                return num - 0.5;
              }
            }
          }
        },
      },
      group: 'mengshiping',
      global: 'mengsanlian_give',
      subSkill: {
        give: {
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            if (player.hasSkill('mengsanlian')) return false;
            var targets = game.filterPlayer(function (current) {
              return current != player && current.hasSkill('mengsanlian') && current.hasSkill('mengshiping') && current.getExpansions('mengshiping').length;
            });
            if (!targets.length) return false;
            return true;
          },
          filterTarget(card, player, target) {
            var targets = game.filterPlayer(function (current) {
              return current != player && current.hasSkill('mengsanlian') && current.hasSkill('mengshiping') && current.getExpansions('mengshiping').length;
            });
            if (targets.length > 1) return targets.includes(target);
            else return target == targets[0];
          },
          selectTarget: 1,
          complexSelect: true,
          prompt() {
            var player = _status.event.player;
            var targets = game.filterPlayer(function (current) {
              return current != player && current.hasSkill('mengsanlian') && current.hasSkill('mengshiping') && current.getExpansions('mengshiping').length;
            });
            return '获得' + get.translation(targets) + (targets.length > 1 ? '中的一人' : '') + '的一张<视频>,交给其至多三张牌';
          },
          content() {
            'step 0';
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengsanlian1.mp3');
            player.chooseCardButton(true, '获得一张<视频>', target.getExpansions('mengshiping')).ai = function (button) {
              return get.value(button.link) || player.getUseValue(button.link);
            };
            ('step 1');
            player.gain(result.links[0], target, 'giveAuto');
            if (player.countCards('he') > 0) {
              player
                .chooseCard(true, 'he', [1, 3])
                .set('ai', function (card) {
                  var player = _status.event.player;
                  var target = _status.event.targetx;
                  if (card.name == 'du') {
                    if (get.attitude(player, target) < 0) return 20;
                    else return -1;
                  }
                  if (target.storage.mengzhenggao && target.storage.mengzhenggao.length < 5) return 12 - get.value(card);
                  var num = player.needsToDiscard();
                  if (ui.selected.cards.length < player.needsToDiscard()) return 8 - get.value(card);
                  else return -1;
                })
                .set('prompt', `交给${get.translation(target)}至多三张牌`)
                .set('targetx', target);
            } else event.finish();
            ('step 2');
            event.cards = result.cards;
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengsanlian' + Math.min(event.cards.length + 1, 4));
            target.gain(event.cards, player, 'giveAuto');
            ('step 3');
            target.addGaintag(event.cards, player.name);
            if (!target.storage.mengsanlian.includes(player.name)) {
              target.storage.mengsanlian.push(player.name);
            }
          },
          ai: {
            order: 1,
            result: {
              target: 2,
            },
          },
        },
      },
    },
    mengzhenggao: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      init(player) {
        player.storage.mengzhenggao = 0;
      },
      onremove(player) {
        delete player.storage.mengzhenggao;
      },
      mark: true,
      marktext: '征',
      intro: {
        content(storage, player) {
          if (player.storage.mengzhenggao == 0) return '没有粉丝……暂时……';
          return '你的支持率:' + player.storage.mengzhenggao;
        },
      },
      trigger: {
        global: ['gainAfter', 'loseAsyncAfter'],
      },
      forced: true,
      dutySkill: true,
      filter(event, player) {
        if (event.name == 'phaseDiscard') return true;
        var cards = event.getg(player);
        if (!cards.length) return false;
        return game.hasPlayer((current) => {
          if (current == player) return false;
          var evt = event.getl(current);
          if (evt && evt.cards && evt.cards.length) return true;
          return false;
        });
      },
      content() {
        'step 0';
        var cards = trigger.getg(player);
        if (!cards.length) {
          event.finish();
          return;
        }
        player.recover();
        player.storage.mengzhenggao += cards.length;
      },
      group: ['mengzhenggao_achieve', 'mengzhenggao_fail'],
      subSkill: {
        achieve: {
          trigger: {
            player: 'mengzhenggaoAfter',
          },
          forced: true,
          filter(event, player) {
            return player.storage.mengzhenggao >= 5;
          },
          content() {
            'step 0';
            game.log(player, '成功完成使命');
            player.popup('成功');
            player.awakenSkill('mengzhenggao');
            player.unmarkSkill('mengzhenggao');
            ('step 1');
            player.loseMaxHp();
            ('step 2');
            player.addSkillLog('mengyuanmeng');
          },
        },
        fail: {
          trigger: {
            global: 'roundStart',
          },
          forced: true,
          filter(event, player) {
            return game.roundNumber == 4;
          },
          content() {
            'step 0';
            game.log(player, '使命失败');
            player.popup('失败');
            player.awakenSkill('mengzhenggao');
            player.unmarkSkill('mengzhenggao');
            ('step 1');
            player.clearSkills();
            ('step 2');
            player.addSkillLog('mengduangeng');
          },
        },
      },
      derivation: ['mengyuanmeng', 'mengduangeng'],
    },
    mengyuanmeng: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        player: 'useCard',
      },
      forced: true,
      charlotte: true,
      filter(event, player) {
        return player.hasHistory('lose', (evt) => {
          if (event != evt.parent) return false;
          for (var i in evt.gaintag_map) {
            for (var j of player.storage.mengsanlian) {
              if (evt.gaintag_map[i].includes(j)) return true;
            }
          }
          return false;
        });
      },
      content() {
        'step 0';
        game.log(trigger.card, '不能被响应');
        trigger.directHit.addArray(game.filterPlayer());
        ('step 1');
        var log = {};
        player.getHistory('lose', function (evt) {
          if (trigger == evt.parent) {
            for (var i in evt.gaintag_map) {
              for (var j of player.storage.mengsanlian) {
                if (evt.gaintag_map[i].includes(j)) log[j] ? log[j]++ : (log[j] = 1);
              }
            }
          }
        });
        if (log == []) event.finish();
        else {
          for (var i in log) {
            var target = game.filterPlayer(function (current) {
              return current.name == i && current.isIn();
            })[0];
            if (target) {
              //player.draw(log[i]);
              target.draw(log[i]);
            }
          }
        }
      },
      mod: {
        targetInRange(card, player, target) {
          if (!card.cards) return;
          for (var i of card.cards) {
            for (var j of player.storage.mengsanlian) {
              if (i.hasGaintag(j)) return true;
            }
          }
        },
        aiUseful(player, card, num) {
          if (get.itemtype(card) == 'card') {
            if (!player.storage.mengsanlian) return;
            for (var name of player.storage.mengsanlian) {
              if (card.hasGaintag(name)) {
                return num + 10;
              }
            }
          }
        },
        aiOrder() {
          lib.skill.mengyuanmeng.mod.aiUseful.apply(this, arguments);
        },
      },
    },
    mengduangeng: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      init(player) {
        player.say('饿死啦!饿死啦!我不干啦!');
        player.markSkill('mengshiping');
      },
      group: 'mengshiping',
      trigger: {
        player: 'phaseJieshuBegin',
      },
      filter(event, player) {
        return player.getExpansions('mengshiping').length;
      },
      forced: true,
      content() {
        'step 0';
        player.chooseCardButton(get.prompt('mengduangeng'), '弃置一张<视频>牌,回复1点体力并摸两张牌', player.getExpansions('mengshiping')).set('ai', function () {
          return _status.event.player.isDamaged();
        });
        ('step 1');
        if (result.bool) {
          player.loseToDiscardpile(result.links);
          player.recover();
          player.draw(2);
        } else event.finish();
        ('step 2');
        if (player.getExpansions('mengshiping').length <= 0) {
          player.removeSkill('mengshiping');
          player.removeSkill('mengduangeng');
        }
      },
    },
    //就离谱
    mengzhuxin: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'useCardToTargeted',
      },
      filter(event, player) {
        return event.card && event.card.name == 'sha';
      },
      forced: true,
      content() {
        'step 0';
        trigger.parent.excluded.add(trigger.target);
        trigger.excluded.add(trigger.target);
        ('step 1');
        if (trigger.target.countCards('he') > 0)
          trigger.target.chooseToDiscard('诛心:弃置【闪】可免伤,否则失去1点体力', 'he', true).set('ai', function (card) {
            if (player.countCards('h', { name: 'shan' })) return card.name == 'shan';
            else return 10 - get.value(card);
          });
        else event._result = { bool: false, cards: [] };
        ('step 2');
        if (result.cards && result.cards[0] && result.cards[0].name == 'shan') {
        } else {
          //QQQ
          trigger.target.loseHp();
        }
      },
      ai: {
        unequip: true,
        unequip: true,
        skillTagFilter(player, tag, arg) {
          if (arg && arg.name == 'sha') return true;
          return false;
        },
      },
    },
    mengyingping: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: ['gainAfter'],
      },
      filter(event, player) {
        if (player.hasSkill('mengyingping_log')) return false;
        if (!event.cards) return false;
        for (var i of event.cards) {
          if (player.getCards('h').includes(i) && game.hasPlayer((current) => lib.filter.targetEnabled(i, player, current) && lib.filter.cardEnabled(i, player))) return true;
        }
      },
      forced: true,
      content() {
        'step 0';
        var cards = [],
          hs = player.getCards('h');
        cards = trigger.cards.filter(function (i) {
          if (!hs.includes(i)) return false;
          if (!game.hasPlayer((current) => lib.filter.targetEnabled(i, player, current) && lib.filter.cardEnabled(i, player))) return false;
          if (_status.currentPhase == player) {
            return ['basic', 'trick'].includes(get.type(i));
          } else return true;
        });
        if (!cards.length) event.finish();
        event.cards = cards;
        ('step 1');
        var str = '应评:对任一合法目标' + (_status.currentPhase == player ? '视为' : '') + '使用其中一张牌';
        player.chooseCardTarget({
          prompt: str,
          cards: event.cards,
          filterCard(card) {
            return _status.event.cards.includes(card) && lib.filter.cardEnabled(card, player);
          },
          filterTarget(card, player, target) {
            if (ui.selected.cards.length) {
              return lib.filter.targetEnabled2(ui.selected.cards[0], player, target);
            }
            return false;
          },
          ai1(card) {
            _status.event.player.getUseValue(card);
          },
          ai2(target) {
            if (ui.selected.cards.length) {
              var player = _status.event.player;
              return get.effect(target, ui.selected.cards[0], player, player) > 0;
            } else {
              return -get.attitude(_status.event.player, target);
            }
          },
        });
        ('step 2');
        if (result.bool) {
          var card = result.cards[0];
          var target = result.targets[0];
          if (_status.currentPhase == player) {
            card = {
              name: result.cards[0].name,
              nature: get.nature(result.cards[0]),
            };
          }
          player.addTempSkill('mengyingping_log');
          player.useCard(card, target, false);
        } else event.finish();
      },
      subSkill: {
        log: {},
      },
    },
    mengzhuojian: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      forced: true,
      group: ['mengzhuojian_begin', 'mengzhuojian_after'],
      subSkill: {
        begin: {
          trigger: {
            global: 'useCard',
          },
          silent: true,
          popup: false,
          forced: true,
          filter(event, player) {
            if (get.itemtype(event.cards) == 'cards') return false;
            return event.targets && event.targets.includes(player);
          },
          content() {
            game.log('#g【灼见】', trigger.card, '对', player, '无效');
            trigger.excluded.add(player);
          },
          _priority: 1,
        },
        after: {
          trigger: {
            global: ['useCardAfter', 'respondAfter'],
          },
          silent: true,
          popup: false,
          forced: true,
          filter(event, player) {
            return get.itemtype(event.cards) != 'cards';
          },
          content() {
            var names = [];
            game.getGlobalHistory('useCard', function (evt) {
              if (!names.includes(evt.card.name)) names.push(evt.card.name);
            });
            var card = get.cardPile2(function (card) {
              if (!names.includes(card.name)) return true;
            });
            if (card) {
              player.gain(card, 'gain2');
            }
          },
          _priority: 1,
        },
      },
    },
    //沧海依酥
    mengmoyu: {
      trigger: {
        global: 'phaseUseBefore',
      },
      forced: true,
      content() {
        if (trigger.player == player) {
          trigger.cancel();
        } else {
          player.draw();
          player.chooseToUse();
        }
      },
    },
    mengxingmeng: {
      trigger: {
        global: 'phaseAfter',
      },
      filter(event, player) {
        return event.player != player && player.getStat('damage') > 0;
      },
      content() {
        player.addSkill('mengxingmeng_a');
        player.phase('nodelay');
      },
      subSkill: {
        a: {
          trigger: {
            player: 'phaseBefore',
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          content() {
            player.addTempSkill('mengxingmeng_no');
          },
        },
        no: {
          init(player, skill) {
            player.removeSkill('mengxingmeng_a');
            player.addSkillBlocker(skill);
          },
          onremove(player, skill) {
            player.removeSkillBlocker(skill);
          },
          charlotte: true,
          skillBlocker(skill, player) {
            return skill == 'mengmoyu';
          },
          mark: true,
          intro: {
            content(storage, player, skill) {
              var str = '';
              var list = player.getSkills(null, false, false).filter(function (i) {
                return lib.skill.mengxingmeng_no.skillBlocker(i, player);
              });
              if (list.length) str += '<br><li>失效技能:' + get.translation(list);
              return str;
            },
          },
        },
      },
    },
    //梦海离殇
    mengyingji: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return player.countCards('he', { color: 'black' }) && game.hasPlayer((current) => player.canUse('sha', current, false));
      },
      filterTarget(card, player, target) {
        return target != player && player.canUse('sha', target, false);
      },
      filterCard: {
        color: 'black',
      },
      position: 'he',
      check(card) {
        return 7 - get.value(card);
      },
      content() {
        'step 0';
        player.useCard({ name: 'sha' }, target, false).animate = false;
      },
      ai: {
        order: 10,
        result: {
          target(player, target) {
            if (player.hasUnknown()) return 0;
            return get.effect(target, { name: 'sha' }, player, target);
          },
        },
      },
    },
    menganxing: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'damageEnd',
      },
      filter(event, player) {
        return event.player.isIn();
      },
      check(event, player) {
        var att1 = get.attitude(player, event.player);
        var att2 = get.attitude(player, event.source);
        return att1 > 0 && att2 <= 0;
      },
      preHidden: true,
      content() {
        'step 0';
        player.judge(function (card) {
          if (get.color(card) == 'black') return 2;
          else return 1;
        });
        ('step 1');
        if (result.color == 'black') {
          if (trigger.source && trigger.source.isAlive()) {
            player.link(trigger.source, 'fire');
            trigger.source.damage(player);
          }
        } else {
          player.link(trigger.player, 'green');
          trigger.player.draw();
        }
      },
      ai: {
        expose: 0.3,
      },
    },
    //咩阿栗诶
    mengxunshi: {
      //*1选择师傅
      audio: 'ext:忽悠宇宙/audio/skill:1',
      init(player) {
        player.storage.mengxunshi = [];
      },
      onremove(player) {
        delete player.storage.mengxunshi;
        delete player.storage.mengxunshi2;
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
          .chooseTarget('选择你的师傅', lib.translate.mengxunshi_info, true, function (card, player, target) {
            return target != player;
          })
          .set('ai', function (target) {
            var att = get.attitude(_status.event.player, target);
            if (att > 0) return att + 1;
            if (att == 0) return Math.random();
            return att;
          }).animate = true;
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          player.addSkill('mengxunshi2');
          player.storage.mengxunshi2.push(target);
          target.addMark('mengxunshi2');
        }
      },
      group: 'menglinggan',
    },
    mengxunshi2: {
      //卖师傅的血+**播放灵感
      init(player) {
        player.storage.mengxunshi2 = [];
      },
      marktext: '师',
      intro: {
        name: '寻师',
        content: '你成为了咩阿栗诶的师傅',
      },
      trigger: {
        global: 'changeHp',
      },
      filter(event, player) {
        return player.storage.mengxunshi2 && player.storage.mengxunshi2.includes(event.player);
      },
      forced: true,
      content() {
        'step 0';
        player.draw(Math.abs(trigger.num));
        ('step 1');
        if (player.countCards('he') > 0) player.chooseCard('寻师:可以将一张牌置于武将牌上', 'he');
        else event._result = { bool: false };
        ('step 2');
        if (result.cards?.length) {
          game.trySkillAudio('menglinggan', player);
          player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('menglinggan');
        }
      },
      ai: {
        combo: 'xunshi',
      },
    },
    menglinggan: {
      //*1灵感语音
      audio: 'ext:忽悠宇宙/audio/skill:1',
      marktext: '灵感',
      intro: {
        name: '灵感',
        content: 'expansion',
        markcount: 'expansion',
      },
      onremove(player, skill) {
        var cards = player.getExpansions(skill);
        if (cards.length) player.loseToDiscardpile(cards);
      },
    },
    mengzaobing: {
      //*1造兵
      audio: 'ext:忽悠宇宙/audio/skill:1',
      init(player) {
        player.storage.mengzaobing = [];
      },
      onremove(player) {
        delete player.storage.mengzaobing;
      },
      marktext: '造兵',
      intro: {
        name: '造兵',
        content: '师傅用过的牌:$',
      },
      enable: 'phaseUse',
      usable: 2,
      filter(event, player) {
        return player.countCards('he');
      },
      check(card) {
        return 7 - get.value(card);
      },
      filterCard: true,
      position: 'he',
      discard: false,
      lose: false,
      delay: 0,
      prompt(event, player) {
        return '造兵:重铸师傅使用过的牌的花色可额外摸一张牌,否则将重铸的牌置为<灵感>.';
      },
      content() {
        'step 0';
        var suit = cards[0].suit;
        if (player.getStorage('mengzaobing').includes(suit)) {
          player.recast(cards);
          player.draw().gaintag = ['mengzaobing'];
        } else {
          game.trySkillAudio('menglinggan', player);
          player.addToExpansion(cards, player, 'giveAuto').gaintag.add('menglinggan');
          player.draw().gaintag = ['mengzaobing'];
        }
      },
      mod: {
        ignoredHandcard(card, player) {
          if (card.hasGaintag('mengzaobing')) {
            return true;
          }
        },
        cardDiscardable(card, player, name) {
          if (name == 'phaseDiscard' && card.hasGaintag('mengzaobing')) {
            return false;
          }
        },
      },
      ai: {
        combo: 'xunshi',
        order: 1,
        result: {
          player: 1,
        },
      },
      group: ['mengzaobing2_add', 'mengzaobing2_clear', 'menglinggan'],
    },
    mengzaobing2: {
      subSkill: {
        add: {
          //记录师傅使用的牌
          trigger: {
            global: 'useCard',
          },
          filter(event, player) {
            if (_status.currentPhase != event.player) return false;
            return player.hasSkill('mengxunshi2') && player.storage.mengxunshi2.includes(event.player);
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          content() {
            if (trigger.card.suit != 'none' && !player.getStorage('mengzaobing').includes(trigger.card.suit)) {
              player.markAuto('mengzaobing', [trigger.card.suit]);
            }
          },
        },
        clear: {
          //回合结束清除
          trigger: {
            global: ['phaseBefore'],
          },
          filter(event, player) {
            return player.hasSkill('mengxunshi2') && player.storage.mengxunshi2.includes(event.player);
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          content() {
            player.storage.mengzaobing = [];
            player.unmarkSkill('mengzaobing');
          },
        },
      },
    },
    mengpanli: {
      //*1叛离
      audio: 'ext:忽悠宇宙/audio/skill:1',
      juexingji: true,
      derivation: ['mengzaobing_rewrite', 'mengjingxiu'],
      trigger: {
        player: 'phaseZhunbeiBegin',
      },
      filter(event, player) {
        return player.getExpansions('menglinggan').length > game.countPlayer();
      },
      forced: true,
      content() {
        player.draw(player.countCards('e'));
        player.removeSkill('mengxunshi');
        player.removeSkill('mengzaobing');
        player.addSkillLog('mengzaobing_rewrite');
        player.addSkillLog('mengjingxiu');
        player.awakenSkill(event.name);
        player.storage[event.name] = true;
      },
    },
    mengzaobing_rewrite: {
      //*同造兵+播放灵感
      audio: 'mengzaobing',
      init(player) {
        player.storage.mengzaobing_rewrite = [];
        player.storage.mengzaobing_rewrite2 = [];
      },
      enable: 'phaseUse',
      filter(event, player) {
        return player.countCards('he');
      },
      check(card) {
        return 7 - get.value(card);
      },
      filterCard(card, player) {
        var suit = card.suit;
        return !player.storage.mengzaobing_rewrite.includes(suit);
      },
      position: 'he',
      content() {
        'step 0';
        if (!player.storage.mengzaobing_rewrite.includes(cards[0].suit)) {
          player.storage.mengzaobing_rewrite.push(cards[0].suit);
        }
        player.draw();
        ('step 1');
        var suits = [];
        for (var j of player.getExpansions('menglinggan')) {
          if (!suits.includes(j.suit)) {
            suits.push(j.suit);
          }
        }
        if (suits.includes(cards[0].suit)) {
          player.chooseCardButton(get.prompt('menglinggan'), '弃置一张<灵感>,摸两张牌;或视为使用一张锦囊牌', player.getExpansions('menglinggan'));
          event.goto(3);
        } else {
          if (player.countCards('he') > 0) {
            player.chooseCard('寻师:将一张手牌置于武将牌上', 'h');
          } else event.finish();
        }
        ('step 2');
        if (result.bool) {
          game.trySkillAudio('menglinggan', player);
          player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('menglinggan');
        }
        event.finish();
        ('step 3');
        if (result.bool) {
          player.loseToDiscardpile(result.links);
          player.draw(2).gaintag = ['mengzaobing'];
          event.finish();
        } else {
          var list = [];
          for (var i = 0; i < lib.inpile.length; i++) {
            var name = lib.inpile[i];
            if (get.type(name) == 'trick') {
              list.push(['锦囊', '', name]);
            }
          }
          var dialog = ui.create.dialog('造兵', [list, 'vcard']);
          var taoyuan = 0,
            nanman = 0;
          var players = game.filterPlayer();
          for (var i of players) {
            var eff1 = get.effect(i, { name: 'taoyuan' }, player, player);
            var eff2 = get.effect(i, { name: 'nanman' }, player, player);
            if (eff1 > 0) {
              taoyuan++;
            } else if (eff1 < 0) {
              taoyuan--;
            }
            if (eff2 > 0) {
              nanman++;
            } else if (eff2 < 0) {
              nanman--;
            }
          }
          player.chooseButton(true, dialog).set('filterButton', function (button) {
            return !player.storage.mengzaobing_rewrite2.includes(button.link[2]);
          }).ai = function (button) {
            var name = button.link[2];
            if (Math.max(taoyuan, nanman) > 1) {
              if (taoyuan > nanman) return name == 'taoyuan' ? 1 : 0;
              return name == 'nanman' ? 1 : 0;
            }
            if (player.countCards('h') < player.hp && player.hp >= 2) {
              return name == 'wuzhong' ? 1 : 0;
            }
            if (player.hp < player.maxHp && player.hp < 3) {
              return name == 'tao' ? 1 : 0;
            }
            return name == 'zengbin' ? 1 : 0;
          };
        }
        ('step 4');
        player.storage.mengzaobing_rewrite2.push(result.links[0][2]);
        player.chooseUseTarget(true, { name: result.links[0][2] });
      },
      mod: {
        ignoredHandcard(card, player) {
          if (card.hasGaintag('mengzaobing')) {
            return true;
          }
        },
        cardDiscardable(card, player, name) {
          if (name == 'phaseDiscard' && card.hasGaintag('mengzaobing')) {
            return false;
          }
        },
      },
      ai: {
        order: 1,
        result: {
          player: 1,
        },
      },
      group: ['mengzaobing_rewrite2'],
    },
    mengzaobing_rewrite2: {
      //回合结束清除
      trigger: {
        global: 'phaseEnd',
      },
      silent: true,
      popup: false,
      forced: true,
      charlotte: true,
      content() {
        player.storage.mengzaobing_rewrite = [];
        player.storage.mengzaobing_rewrite2 = [];
      },
    },
    mengjingxiu: {
      //*1精修
      audio: 'ext:忽悠宇宙/audio/skill:2',
      forced: true,
      trigger: {
        player: 'useCard1',
      },
      filter(event, player) {
        if (!player.getExpansions('menglinggan').length) return false;
        return event.player.hasHistory('lose', function (evt) {
          if (evt.parent != event) return false;
          for (var i in evt.gaintag_map) {
            if (evt.gaintag_map[i].includes('mengzaobing')) return true;
          }
          return false;
        });
      },
      filterx(event, player) {
        var card = event.card;
        var info = get.info(card);
        if (info.allowMultiple == false) return false;
        if (event.targets && !info.multitarget) {
          if (
            game.hasPlayer(function (current) {
              return !event.targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && lib.filter.targetInRange(card, player, current);
            })
          ) {
            return true;
          }
        }
        return false;
      },
      content() {
        'step 0';
        player.chooseCardButton(get.prompt('menglinggan'), '弃置至多三张<灵感>牌,加强' + get.translation(trigger.card), player.getExpansions('menglinggan'), [1, Math.min(3, player.getExpansions('menglinggan').length)]).set('ai', function () {
          return true;
        });
        ('step 1');
        if (result.bool) {
          player.loseToDiscardpile(result.links);
          var num = result.links.length;
          var list = [`摸${num}张牌`];
          if (lib.skill.mengjingxiu.filterx(trigger, player)) {
            list.push(`为此牌增加至多${num}个目标`);
          }
          event.num = num;
          player.chooseControl(list, true).set('ai', function () {
            return 0;
          });
        } else event.finish();
        ('step 2');
        if (result.control == `摸${num}张牌`) {
          player.draw(num);
          event.finish();
        } else {
          player
            .chooseTarget(true, `精修:为${get.translation(trigger.card)}增加至多${num}个目标？`, [1, num], function (card, player, target) {
              var trigger = _status.event.getTrigger();
              var card = trigger.card;
              return !trigger.targets.includes(target) && lib.filter.targetEnabled2(card, player, target) && lib.filter.targetInRange(card, player, target);
            })
            .set('ai', function (target) {
              var player = _status.event.player;
              var card = _status.event.getTrigger().card;
              return get.effect(target, card, player, player);
            });
        }
        ('step 3');
        var targets = result.targets.sortBySeat();
        trigger.targets.addArray(targets);
      },
      mod: {
        aiOrder(player, card, num) {
          if (get.itemtype(card) == 'card' && card.hasGaintag('mengzaobing')) return num + 0.5;
        },
      },
      ai: {
        directHit_ai: true,
      },
    },
    //柚衣
    mengzhumeng: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      lastcard(player) {
        var name = '';
        var history = player.getAllHistory('useCard', function (evt) {
          if (get.type(evt.card) == 'trick' || get.type(evt.card) == 'basic') return true;
        });
        if (history.length) name = history[history.length - 1].card.name;
        return name;
      },
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        var name = lib.skill.mengzhumeng.lastcard(player);
        if (!name) return false;
        return game.hasPlayer((current) => player.canUse({ name: name }, current, false));
      },
      filterCard: true,
      position: 'he',
      prompt() {
        var name = lib.skill.mengzhumeng.lastcard(_status.event.player);
        return `将一张牌当${get.translation(name)}使用`;
      },
      viewAs(cards, player) {
        return {
          name: lib.skill.mengzhumeng.lastcard(player),
        };
      },
      ai: {
        order: 8,
        result: {
          player: 1,
        },
      },
      mod: {
        cardUsable(card, player) {
          if (_status.event.skill) return Infinity;
        },
        targetInRange(card, player) {
          if (_status.event.skill) return true;
        },
      },
    },
    menggongmian: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'useCardAfter',
      },
      usable: 1,
      forced: true,
      filter(event, player) {
        var history = event.player.getHistory('useCard', function (evt) {
          return evt != event && evt.card.name == event.card.name;
        });
        return history.length == 1 && event.cards.filterInD().length;
      },
      content() {
        'step 0';
        player
          .chooseTarget(true, get.prompt('menggongmian'), `将${get.translation(trigger.cards)}交给一名其他角色`, function (card, player, target) {
            return target != _status.event.getTrigger().player;
          })
          .set('ai', function (target) {
            var player = _status.event.player,
              att = get.attitude(player, target);
            if (target.hasSkillTag('nogain')) att /= 9;
            return 4 + att;
          })
          .set('sha', trigger.cards[0].name == 'sha')
          .set('wuxie', trigger.cards[0].name == 'wuxie');
        ('step 1');
        if (result.bool) {
          result.targets[0].gain(trigger.cards.filterInD(), 'gain2').gaintag.add('menggongmian');
        }
      },
      global: 'menggongmian_buff',
      subSkill: {
        buff: {
          mod: {
            cardUsable(card) {
              if (!card.cards) return;
              for (var i of card.cards) {
                if (i.hasGaintag('menggongmian')) return Infinity;
              }
            },
            targetInRange(card, player, target) {
              if (!card.cards) return;
              for (var i of card.cards) {
                if (i.hasGaintag('menggongmian')) return true;
              }
            },
          },
        },
      },
    },
    //爱咋咋地
    menglijian: {
      shaRelated: true,
      trigger: {
        player: ['shaMiss', 'useCard'],
      },
      forced: true,
      filter(event, player) {
        if (event.name == 'useCard') return event.card && event.card.name == 'shan';
        return true;
      },
      content() {
        player.draw();
      },
    },
    mengyinxia: {
      mod: {
        targetEnabled(card, player, target, now) {
          if (player.countCards('e') && (card.name == 'guohe' || get.type(card) == 'delay')) return false;
        },
      },
    },
    //焰枫//魈
    mengbianma: {
      mod: {
        cardUsable(card) {
          if (card) return Infinity;
        },
      },
    },
    mengxianpo: {
      init(player, skill) {
        player.storage.mengxiaopo = [0, 0, 0];
      },
      trigger: {
        player: 'phaseZhunbeiBegin',
      },
      forced: true,
      content() {
        'step 0';
        var list = ['摸牌阶段多摸一张牌', '判定阶段多摸一张牌并弃置判定区内的牌', '手牌上限+1'];
        player.chooseControlList(true, list, '选择一项永久获得').set('ai', function () {
          if (_status.event.player.hp <= 2) return 2;
          if (!_status.event.player.storage.mengxiaopo[0]) return 1;
          return 0;
        });
        ('step 1');
        player.storage.mengxiaopo[result.index]++;
        player.markSkill('mengxiaopo');
      },
      mark: true,
      intro: {
        content(storage, player) {
          var str = '';
          if (player.storage.mengxiaopo[0]) str += `<li>摸牌阶段多摸${get.cnNumber(player.storage.mengxiaopo[0])}张牌`;
          if (player.storage.mengxiaopo[1]) str += `<li>判定阶段摸${get.cnNumber(player.storage.mengxiaopo[1])}张牌并弃置判定区内的牌`;
          if (player.storage.mengxiaopo[2]) str += '<li>手牌上限+' + player.storage.mengxiaopo[2];
          return str;
        },
      },
      group: ['mengxianpo_buff_1', 'mengxianpo_buff_2', 'mengxianpo_buff_3'],
    },
    mengxianpo_buff: {
      subSkill: {
        1: {
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          trigger: {
            player: 'phaseDrawBegin2',
          },
          preHidden: true,
          filter(event, player) {
            return !event.numFixed && player.storage.mengxiaopo[0];
          },
          content() {
            trigger.num += player.storage.mengxiaopo[0];
          },
          ai: {
            threaten: 1.5,
          },
        },
        2: {
          trigger: {
            player: 'phaseJudgeBegin',
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          filter(event, player) {
            return player.storage.mengxiaopo && player.storage.mengxiaopo[1];
          },
          content() {
            'step 0';
            player.draw(player.storage.mengxiaopo[1]);
            player.discard(player.getCards('j'));
          },
        },
        3: {
          mod: {
            maxHandcard(player, num) {
              if (player.storage.mengxiaopo[2]) return num + player.storage.mengxiaopo[2];
            },
          },
        },
      },
    },
    //浮生亦
    mengdaiduo: {
      init(player) {
        player.storage.mengdaiduo = 0;
      },
      forced: true,
      trigger: {
        player: 'phaseBegin',
      },
      filter(event, player) {
        return player.storage.mengdaiduo + 1 > 0;
      },
      content() {
        'step 0';
        player.storage.mengdaiduo++;
        ('step 1');
        var list0 = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'];
        var num = Math.min(list0.length, player.storage.mengdaiduo);
        var list1 = [];
        while (list1.length < num) {
          var name = list0.randomGet();
          list0.remove(name);
          list1.push(name);
        }
        for (var i of list1) {
          game.log(player, '跳过了下个', i);
          player.skip(i);
        }
        if (list0.length == 0) player.addTempSkill('mengdaiduo_end');
        ('step 2');
      },
      subSkill: {
        end: {
          onremove(player) {
            player.turnOver();
            player.storage.mengdaiduo = 0;
          },
        },
      },
    },
    mengcunzhi: {
      trigger: {
        player: ['phaseZhunbeiSkipped', 'phaseZhunbeiCancelled', 'phaseDrawSkipped', 'phaseDrawCancelled', 'phaseUseSkipped', 'phaseUseCancelled', 'phaseDiscardSkipped', 'phaseDiscardCancelled', 'phaseJieshuSkipped', 'phaseJieshuCancelled'],
      },
      forced: true,
      content() {
        'step 0';
        'step 1';
        switch (trigger.currentPhase) {
          case 'phaseZhunbei': {
            if (game.hasPlayer((current) => current.countCards('h') > 0))
              player.chooseTarget(true, '令一名角色扣置所有手牌').set('ai', function (target) {
                return -get.attitude(player, target);
              });
            else event.finish();
            break;
          }
          case 'phaseDraw': {
            if (game.hasPlayer((current) => current != player && current.countCards('h') > 0))
              player.chooseTarget(true, '观看并获得其他角色花色最多的手牌').set('ai', function (target) {
                if (get.attitude(player, target) < 0) return target.countCards('h') > 0;
              });
            else event.finish();
            break;
          }
          case 'phaseUse': {
            player.loseHp();
            var num = player.storage.mengdaiduo;
            player.chooseTarget(true, [1, num], `对至多${num}名角色造成1点伤害`).set('ai', function (target) {
              return get.damageEffect(target, player, player);
            });
            break;
          }
          case 'phaseDiscard': {
            if (player.countCards('h') > 0)
              player.chooseCardTarget({
                prompt: '请选择【存志】的牌和目标',
                prompt2: '将任意花色不同的手牌交给一名其他角色',
                filterCard(card) {
                  for (var i of ui.selected.cards) {
                    if (i.suit == card.suit) return false;
                  }
                  return true;
                },
                complexSelect: true,
                complexCard: true,
                selectCard: [1, 4],
                forced: true,
                filterTarget: lib.filter.notMe,
                ai1(card) {
                  if (
                    get.tag(card, 'recover') &&
                    !game.hasPlayer(function (current) {
                      return get.attitude(current, player) > 0 && !current.hasSkillTag('nogain');
                    })
                  )
                    return 0;
                  return 1 / Math.max(0.1, get.value(card));
                },
                ai2(target) {
                  var player = _status.event.player;
                  var card = ui.selected.cards[0];
                  var att = get.attitude(player, target);
                  if (card.name == 'du') return -6 * att;
                  if (att > 0) {
                    if (get.position(card) == 'h' && target.getUseValue(card) > player.getUseValue(card)) return 4 * att;
                    if (get.value(card, target) > get.value(card, player)) return 2 * att;
                    return 1.2 * att;
                  }
                  return (-att * Math.min(4, target.countCards('he'))) / 4;
                },
              });
            else event.finish();
            break;
          }
          case 'phaseJieshu': {
            player.recover();
            var num = player.storage.mengdaiduo;
            var cards = get.bottomCards(num);
            game.cardsGotoOrdering(cards);
            var next = player.chooseToMove();
            next.set('list', [['牌堆顶'], ['牌堆底', cards]]);
            next.set('forced', true);
            next.set('prompt', '存志:点击将牌全部移动到牌堆顶');
            next.processAI = function (list) {
              var cards = list[1][1];
              return [cards, []];
            };
            next.set('filterOk', function (moved) {
              return moved[1] == [] || moved[1].length == 0;
            });
            break;
          }
        }
        ('step 2');
        switch (trigger.currentPhase) {
          case 'phaseZhunbei': {
            var target = result.targets[0];
            target.addSkill('mengcunzhi2');
            break;
          }
          case 'phaseDraw': {
            var target = result.targets[0];
            player.viewHandcards(target);
            var map = {};
            for (var i of target.getCards('h')) {
              if (!map[i.suit]) map[i.suit] = 1;
              else map[i.suit]++;
            }
            var max = 0,
              max_suit = [];
            for (var i in map) {
              if (map[i] > max) {
                max = map[i];
                max_suit = [i];
              }
              if (map[i] == max) {
                max_suit.push(i);
              }
            }
            var cards = target.getCards('h').filter(function (card) {
              return max_suit.includes(card.suit);
            });
            target.give(cards, player, 'giveAuto');
            break;
          }
          case 'phaseUse': {
            var targets = result.targets;
            for (var i of targets) i.damage();
            break;
          }
          case 'phaseDiscard': {
            var target = result.targets[0],
              cards = result.cards;
            player.give(cards, target);
            break;
          }
          case 'phaseJieshu': {
            var top = result.moved[0];
            top.reverse();
            for (var i = 0; i < top.length; i++) {
              ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
            }
            player.popup(get.cnNumber(top.length) + '上');
            game.log(player, `将${get.cnNumber(top.length)}张牌置于牌堆顶`);
            game.updateRoundNumber();
            break;
          }
        }
      },
    },
    mengcunzhi2: {
      init(player) {
        player.addToExpansion(player.getCards('h'), 'giveAuto', player).gaintag.add('mengcunzhi2');
      },
      trigger: {
        player: 'phaseBegin',
      },
      forced: true,
      popup: false,
      charlotte: true,
      filter(event, player) {
        return player.getExpansions('mengcunzhi2').length;
      },
      content() {
        'step 0';
        var cards = player.getExpansions('mengcunzhi2');
        player.gain(cards, 'draw');
        game.log(player, `收回了${get.cnNumber(cards.length)}张<存志>牌`);
        ('step 1');
        player.removeSkill('mengcunzhi2');
      },
      intro: {
        markcount: 'expansion',
        mark(dialog, storage, player) {
          var cards = player.getExpansions('mengcunzhi2');
          if (player.isUnderControl(true)) dialog.addAuto(cards);
          else return `共有${get.cnNumber(cards.length)}张牌`;
        },
      },
    },
    //啦啦啦啦
    menganli: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        global: 'phaseUseBegin',
      },
      filter(event, player) {
        return event.player != player && player.countCards('he') > 0;
      },
      dutySkill: true,
      forced: true,
      content() {
        'step 0';
        player.chooseCardTarget({
          prompt: '安利',
          prompt2: '是否将一张牌交给其他角色',
          position: 'he',
          filterCard: true,
          filterTarget: lib.filter.notMe,
          ai1(card) {
            return 7 - get.value(card);
          },
          ai2(target) {
            return get.attitude(_status.event.player, target) >= -2;
          },
        });
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          player.addSkill('mengyouxi');
          player.give(result.cards, target).gaintag.add('mengyouxi');
          if (!player.storage.mengyouxi.includes(target)) player.storage.mengyouxi.push(target);
        }
      },
      group: ['menganli_achieve', 'menganli_fail'],
      subSkill: {
        achieve: {
          audio: 'ext:忽悠宇宙/audio/skill:1',
          trigger: {
            player: 'menganliAfter',
          },
          forced: true,
          filter(event, player) {
            return !game.hasPlayer(function (current) {
              return player.storage.mengyouxi && !player.storage.mengyouxi.includes(current) && current != player;
            });
          },
          content() {
            'step 0';
            game.log(player, '成功完成使命');
            player.awakenSkill('menganli');
            player.gainMaxHp();
            ('step 1');
            player.recover();
            player.addSkillLog('mengyongle');
          },
        },
        fail: {
          audio: 'ext:忽悠宇宙/audio/skill:1',
          trigger: {
            player: 'dying',
          },
          forced: true,
          content() {
            'step 0';
            game.log(player, '使命失败');
            player.awakenSkill('menganli');
            ('step 1');
            player.maxHp = 2;
            ('step 2');
            player.hp = 2;
            ('step 3');
            player.addSkillLog('mengguli');
          },
        },
      },
      derivation: ['mengyongle', 'mengguli'],
    },
    mengyouxi: {
      init(player) {
        player.storage.mengyouxi = [];
      },
      mark: true,
      marktext: '安',
      intro: {
        content(storage, player) {
          var str = '已安利的角色:';
          for (var i of storage) {
            if (i.name) str += get.translation(i.name);
            if (i != storage[storage.length - 1]) str += '、';
          }
          return str;
        },
      },
      trigger: {
        global: ['useCard', 'loseAfter', 'loseAsyncAfter'],
      },
      silent: true,
      popup: false,
      forced: true,
      charlotte: true,
      filter(event, player) {
        if (!player.storage.mengyouxi.includes(event.player)) return false;
        if (event.name != 'useCard') {
          if (event.type != 'discard') return false;
          var evt = event.getl(event.player);
          if (!evt || !evt.cards2 || !evt.cards2.length) return false;
          if (event.name == 'lose') {
            for (var i in event.gaintag_map) {
              if (event.gaintag_map[i].includes('mengyouxi')) return true;
            }
            return false;
          }
        }
        return event.player.hasHistory('lose', function (evt) {
          if (evt.parent != event) return false;
          for (var i in evt.gaintag_map) {
            if (evt.gaintag_map[i].includes('mengyouxi')) return true;
          }
          return false;
        });
      },
      content() {
        if (trigger.name == 'useCard') {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengyouxi_use' + [1, 2].randomGet());
          var num = player.maxHp - player.countCards('h');
          if (num > 0) player.chooseDrawRecover(num);
          else player.recover();
        } else {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengyouxi_lose' + [1, 2].randomGet());
          player.loseHp();
        }
      },
    },
    mengyongle: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'phaseAfter',
      },
      forced: true,
      content() {
        player.drawTo(player.maxHp);
        player.recover();
      },
    },
    mengguli: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'phaseAfter',
      },
      forced: true,
      content() {
        'step 0';
        player.chooseTarget('孤立:请选择一名角色,与其一同失去1点体力', true, function (card, player, target) {
          return target != player;
        }).ai = function (target) {
          return -get.attitude(_status.event.player, target);
        };
        ('step 1');
        player.line(result.targets[0], 'fire');
        player.loseHp();
        result.targets[0].loseHp();
      },
    },
    //日玖阳气冲三关
    mengxuanxiang: {
      mark: true,
      intro: {
        markcount: 'expansion',
        mark(dialog, content, player) {
          var content = player.getExpansions('mengxuanxiang');
          if (content && content.length) {
            if (player == game.me || player.isUnderControl()) {
              dialog.addText('游戏外的牌');
              dialog.addAuto(content);
            } else {
              return `共有${get.cnNumber(content.length)}张牌移出游戏`;
            }
          } else return '没有牌移出游戏';
        },
        content(content, player) {
          var content = player.getExpansions('mengxuanxiang');
          if (content && content.length) {
            if (player == game.me || player.isUnderControl()) {
              return get.translation(content);
            }
            return `共有${get.cnNumber(content.length)}张牌移出游戏`;
          } else return '没有牌移出游戏';
        },
      },
      onremove(player, skill) {
        var cards = player.getExpansions(skill);
        if (cards.length) player.loseToDiscardpile(cards);
      },
      trigger: {
        global: 'phaseBegin',
      },
      filter(event, player) {
        return true;
      },
      check(event, player) {
        return get.attitude(player, event.player) > 0 && player.hp > 2;
      },
      content() {
        'step 0';
        player.loseHp();
        ('step 1');
        var list = [];
        for (var i = 0; i < lib.inpile.length; i++) {
          var name = lib.inpile[i];
          var card = { name: name };
          if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
          else if (get.type(name) == 'basic') list.push(['基本', '', name]);
        }
        var next = player.chooseButton([`绚想:请选择至多${player.hp}个牌名令其视为使用之`, [list, 'vcard']]);
        next.set('forced', true);
        next.set('selectButton', [1, player.hp]);
        next.set('filterButton', function (button) {
          var name = button.link[2];
          for (var i of player.getExpansions('mengxuanxiang')) {
            if (i.name == name) return false;
          }
          return game.hasPlayer(function (current) {
            return _status.event.targetx.canUse({ name: name }, current, true);
          });
        });
        next.set('ai', function (button) {
          var val = _status.event.targetx.getUseValue({ name: button.link[2] });
          return val;
        });
        next.set('targetx', trigger.player);
        ('step 2');
        for (var i of result.links) {
          var name = i[2];
          trigger.player.chooseUseTarget(true, { name: name });
          var card = get.cardPile(function (card) {
            return card.name == name;
          });
          if (card) {
            player.addToExpansion([card], player, 'gain2').gaintag.add('mengxuanxiang');
          }
        }
      },
    },
    menghuanying: {
      trigger: {
        global: 'useCard',
      },
      filter(event, player) {
        if (!player.getExpansions('mengxuanxiang').length) return false;
        for (var i of player.getExpansions('mengxuanxiang')) {
          if (i.name == event.card.name) return true;
        }
        return false;
      },
      forced: true,
      content() {
        'step 0';
        trigger.directHit.add(player);
        ('step 1');
        for (var i of player.getExpansions('mengxuanxiang')) {
          if (i.name == trigger.card.name) {
            var list = [i];
            game.log(player, '将', list, '加入牌堆');
            while (list.length) ui.cardPile.insertBefore(list.shift().fix(), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
            game.updateRoundNumber();
          }
        }
      },
    },
    mengxiaoxing: {
      trigger: {
        global: ['loseAfter', 'addToExpansionAfter', 'cardsGotoSpecialAfter', 'loseAsyncAfter'],
      },
      filter(event, player, name) {
        if (event.name == 'lose' || event.name == 'loseAsync') return event.getlx !== false && event.toStorage == true;
        if (event.name == 'cardsGotoSpecial') return !event.notrigger;
        return true;
      },
      forced: true,
      content() {
        player.draw();
      },
      group: ['mengxiaoxing_1'],
      subSkill: {
        1: {
          trigger: {
            global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
          },
          filter(event, player) {
            return game.hasPlayer(function (current) {
              var evt = event.getl(current);
              return evt && (evt.xs.length || evt.ss.length);
            });
          },
          forced: true,
          content() {
            'step 0';
            var list = ['失去1点体力获得之'];
            if (player.isDamaged()) list.push('回复1点体力');
            player.chooseControl(list, 'cancel2').set('ai', function () {
              if (!player.isDamaged() && player.countCards('h') > 1) return '失去1点体力获得之';
              return '回复1点体力';
            });
            ('step 1');
            if (result.control != 'cancel2') {
              if (result.control == '失去1点体力获得之') {
                player.loseHp();
                player.gain(trigger.cards, 'gain2');
              }
              if (result.control == '回复1点体力') {
                player.recover();
              }
            }
          },
        },
      },
    },
    //西琳
    mengbailan: {
      trigger: {
        player: 'phaseUseEnd',
      },
      forced: true,
      filter(event, player) {
        return player.getHistory('useCard').length < player.maxHp;
      },
      content() {
        player.skip('phaseDiscard');
      },
      mod: {
        targetEnabled(card, player, target, now) {
          if (player.countCards('h') > player.maxHp) {
            if (card.name == 'shunshou' || card.name == 'guohe') return false;
          }
        },
      },
    },
    mengle: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return player.countCards('hes') > 0;
      },
      position: 'hes',
      discard: false,
      lose: false,
      delay: false,
      filterCard: true,
      selectTarget: 1,
      filterTarget(card, player, target) {
        return !target.hasJudge('lebu') && player.canUse({ name: 'lebu' }, target);
      },
      check(card) {
        return 9 - get.value(card);
      },
      content() {
        'step 0';
        player.useCard({ name: 'lebu' }, cards, targets);
        ('step 1');
        if (player.countCards('he')) {
          player.chooseCardTarget({
            prompt: '是否反转一名角色某花色的延时类判定结果？',
            prompt2: '弃置一张牌,并选择一名判定区内有【乐不思蜀】的其他角色',
            filterCard: lib.filter.cardDiscardable,
            position: 'he',
            filterTarget(card, player, target) {
              return target.hasJudge('lebu');
            },
            ai1(card) {
              return 7 - get.value(card);
            },
            ai2(target) {
              return -get.attitude(_status.event.player, target);
            },
          });
        } else {
          event.finish();
        }
        ('step 2');
        if (result.bool) {
          player.discard(result.cards);
          var target = result.targets[0];
          var next = player.chooseButton(['乐:选择花色后,若原先判定失败则将视为判定成功,反之', [lib.suit.map((i) => ['', '', 'lukai_' + i]), 'vcard']]);
          next.set('forced', true);
          next.set('selectButton', [1, 1]);
          next.set('filterButton', function (button) {
            return true;
          });
          next.set('ai', function (button) {
            if (button.link[2].slice(6) == 'heart') {
              return 1;
            }
          });
          event.target = target;
        } else event.finish();
        ('step 3');
        if (result.bool) {
          var suit = result.links[0][2].slice(6);
          event.target.addSkill('mengle_buff');
          event.target.storage.mengle_buff = suit;
        }
      },
      ai: {
        order: 1,
        result: {
          target: -1,
        },
      },
    },
    mengle_buff: {
      mark: true,
      marktext: '乐',
      intro: {
        name: '乐',
        content: '你进行延时类锦囊牌的判定时,反转$花色的判定结果',
      },
      mod: {
        judge(player, result) {
          if (!player.storage.mengle_buff || !_status.event.cardname || !_status.event.node) return;
          if (!_status.event.judgestr) return;
          if (typeof _status.event.node != 'object') return;
          if (get.type(_status.event.cardname) == 'delay' && _status.event.node.suit == player.storage.mengle_buff) {
            game.log('#g乐!', '判定结果反转!');
            if (result.bool == false) {
              result.bool = true;
            } else {
              result.bool = false;
            }
          }
        },
      },
    },
    mengdiaotu: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        player: 'phaseEnd',
      },
      filter(event, player) {
        return player.countCards('h') && player.getHistory('useCard').length < player.maxHp;
      },
      forced: true,
      content() {
        'step 0';
        player.chooseToDiscard('he', '弃置一张牌,视为使用【万箭齐发】或【桃园结义】').set('ai', function (card) {
          var num1 = 0,
            num2 = 0;
          num1 = player.getFriends().length;
          num2 = player.getEnemies().length;
          if (num1 != num2) return 7 - get.value(card);
        });
        ('step 1');
        if (result.bool) {
          player.chooseControl('万箭齐发', '桃园结义');
        } else event.finish();
        ('step 2');
        player.chooseUseTarget({ name: result.control == '万箭齐发' ? 'wanjian' : 'taoyuan' }, true);
      },
    },
    //微雨
    mengxudu: {
      forced: true,
      trigger: {
        global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
      },
      filter(event, player) {
        return lib.skill.mengxudu.count() > player.maxHp;
      },
      usable: 1,
      count() {
        var num = 0;
        game.countPlayer2(function (current) {
          current.getHistory('lose', function (evt) {
            if (evt.position == ui.discardPile) {
              if (Array.isArray(evt.cards))
                for (var i of evt.cards) {
                  if (i) num++;
                }
            }
          });
        });
        game.getGlobalHistory('cardMove', function (evt) {
          if (evt.name == 'cardsDiscard') {
            if (Array.isArray(evt.cards))
              for (var i of evt.cards) {
                if (i) num++;
              }
          }
        });
        return num;
      },
      content() {
        'step 0';
        player.gainMaxHp();
        ('step 1');
        player.addTempSkill('mengxudu_hand');
      },
      subSkill: {
        hand: {
          forced: true,
          charlotte: true,
          group: 'undist',
          mark: true,
          marktext: '虚',
          mod: {
            cardEnabled2(card) {
              if (get.position(card) == 'h') return false;
            },
          },
          intro: {
            content: '不能使用或打出手牌,不计入距离和座次的计算',
          },
        },
      },
    },
    mengfenxin: {
      init(player) {
        player.storage.mengfenxin = [];
      },
      trigger: {
        global: 'useCard',
      },
      filter(event, player) {
        if (player.storage.mengfenxin.includes(get.type2(event.card))) return false;
        return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
      },
      prompt: '奋心:减1点体力上限获得此牌？',
      check(event, player) {
        return player.isDamaged();
      },
      content() {
        'step 0';
        player.loseMaxHp();
        player.storage.mengfenxin.push(get.type2(trigger.card));
        player.gain(trigger.cards, 'gain2');
        ('step 1');
        if (trigger.player == player) {
          if (player.getStat().card[trigger.card.name]) player.getStat().card[trigger.card.name]--;
        }
      },
      group: ['mengfenxin_gain', 'mengfenxin_clear'],
      subSkill: {
        gain: {
          trigger: {
            player: 'loseAfter',
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
          },
          forced: true,
          filter(event, player) {
            if (event.name == 'gain' && event.player != player) return false;
            var types = [],
              types2 = [];
            player.hasHistory('gain', (evt) => {
              if (!evt.cards || !evt.cards.length) return false;
              for (var i of evt.cards) {
                if (!types.includes(get.type2(i))) {
                  types.push(get.type2(i));
                }
              }
            });
            if (types.length < 3) return false;
            player.hasHistory('lose', (evt) => {
              if (!evt.cards2 || !evt.cards2.length) return false;
              for (var i of evt.cards2) {
                if (!types2.includes(get.type2(i))) {
                  types2.push(get.type2(i));
                }
              }
            });
            if (types2.length < 3) return false;
            return true;
          },
          content() {
            game.log('#g【奋心】', '已刷新!');
            player.storage.mengfenxin = [];
          },
        },
        clear: {
          trigger: {
            global: 'phaseEnd',
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          content() {
            player.storage.mengfenxin = [];
          },
        },
      },
    },
    //道无吉
    mengfenji: {
      init(player) {
        if (!player.storage.mengfenji) {
          //人格
          player.storage.mengfenji = {
            owned: {}, //所有人格牌,每个属性都是数组
            current: {}, //当前使用的角色及技能,也是数组
          };
        }
      },
      intro: {
        mark(dialog, content, player) {
          var list = Object.keys(content.owned); //当前数组
          if (list.length) {
            var characters = Object.keys(player.storage.mengfenji.current);
            if (characters.length) {
              for (var character in player.storage.mengfenji.current) {
                var skills = player.storage.mengfenji.current[character]; //获取对应的技能组
                dialog.addSmall([[character], 'character']);
                for (var skill of skills) {
                  dialog.add('<div><div class="skill">【' + get.translation(lib.translate[`${skill}_ab`] || get.translation(skill).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(skill, player) + '</div></div>');
                }
              }
            } else {
              return '没有人格显现';
            }
            if (player.isUnderControl(true)) {
              dialog.addSmall([list, 'character']);
            } else {
              dialog.addText(`共有${get.cnNumber(list.length)}张<人格>`);
            }
          } else {
            return '没有人格';
          }
        },
        onunmark(storage, player) {
          _status.characterlist.addArray(Object.keys(storage.owned)); //放回包里
          storage.owned = [];
        },
      },
      addRenge(player, num) {
        if (!player.storage.mengfenji) return; //如果没有空
        if (!_status.characterlist) {
          lib.skill.pingjian.initList(); //借用评荐的初始化
        }
        _status.characterlist.randomSort(); //打乱顺序
        for (var i = 0; i < _status.characterlist.length; i++) {
          //所有池(名)中
          let name = _status.characterlist[i]; //获取一个
          if (!name || !lib.character[name] || !lib.character[name][3]) return;
          if (
            name.includes('mengdaowuji') ||
            name.indexOf('key_') == 0 ||
            name.indexOf('sp_key_') == 0 || //基础名隔离
            lib.skill.mengfenji.banned.includes(name) || //默认ban位
            player.storage.mengfenji.owned[name]
          )
            continue; //目前在用的
          let skills = lib.character[name][3].filter((skill) => {
            //该对象所有组
            const categories = get.skillCategoriesOf(skill); //获取标签
            if (categories.some((type) => lib.skill.mengfenji.bannedType.includes(type))) return false; //不含ban类型
            var info = get.translation(skill).concat(get.translation(skill + '_info'));
            for (var ix = 0; ix < info.length; ix++) {
              if (/仁|义|礼|智|信|暴|妒|狂|怒|疑/.test(info[ix]) == true) return true;
            }
          });
          if (skills.length) {
            //得到检索结果
            player.storage.mengfenji.owned[name] = skills; //存入一个人物及其组
            _status.characterlist.remove(name); //移去检索的结果
            return name;
          }
        }
      },
      addRenges(player, num) {
        //多次循环addRenge
        var list = [];
        for (var i = 0; i < num; i++) {
          var name = lib.skill.mengfenji.addRenge(player);
          if (name) list.push(name);
        }
        if (list.length) {
          player.markSkill('mengfenji');
          game.log(player, '获得了', get.cnNumber(list.length) + '张', '#g人格');
        }
      },
      banned: ['lisu', 'sp_xiahoudun', 'xushao', 'jsrg_xushao', 'zhoutai', 'old_zhoutai', 'shixie', 'xin_zhoutai', 'dc_shixie', 'old_shixie', 'zuoci'],
      bannedType: ['Charlotte'], // "主公技", "觉醒技", "限定技", "隐匿技", "使命技"
      trigger: {
        global: 'roundStart',
      },
      filter(event, player) {
        return true; //!get.is.empty(player.storage.mengfenji.owned);
      },
      check(event, player) {
        return player.maxHp > 5 || player.getDamagedHp() >= 2;
      },
      prompt: '分极:是否减少体力上限增加等量人格？',
      content() {
        'step 0';
        var map = {};
        var list = [];
        for (var i = 1; i <= player.maxHp; i++) {
          var cn = get.cnNumber(i, true);
          map[cn] = i;
          list.push(cn);
        }
        event.map = map;
        player
          .chooseControl(list, function () {
            return get.cnNumber(_status.event.goon, true);
          })
          .set('prompt', '失去任意点体力')
          .set('goon', player.maxHp - 2);
        ('step 1');
        var num = event.map[result.control] || 1;
        player.loseMaxHp(num);
        lib.skill.mengfenji.addRenges(player, num);
      },
      group: 'mengfenji_1',
      subSkill: {
        1: {
          trigger: {
            player: ['phaseBegin'],
          },
          filter(event, player) {
            var owned = Object.keys(player.storage.mengfenji.owned).length;
            var now = Object.keys(player.storage.mengfenji.current).length;
            return owned - now > 0;
            return owned >= 2 && owned - now >= 2;
          },
          prompt() {
            var player = _status.event.player;
            var owned = Object.keys(player.storage.mengfenji.owned).length;
            var now = Object.keys(player.storage.mengfenji.current).length;
            return `分极:是否切换人格？(剩余人格${owned - now}/${owned})`;
          },
          check(event, player) {
            var owned = Object.keys(player.storage.mengfenji.owned).length;
            var now = Object.keys(player.storage.mengfenji.current).length;
            if (now > 2) return false;
            if (owned - now < 2) return false;
          },
          content() {
            'step 0';
            var characters = Object.keys(player.storage.mengfenji.owned);
            var now = Object.keys(player.storage.mengfenji.current);
            var dialog = ui.create.dialog('<h3>【分极】</h3>', 'hidden');
            var num = Math.min(characters.length - now.length, 2);
            dialog.addText(`<font align="center";font size=3px>选择${num}张武将牌,视为拥有该武将的特定技能</font>`);
            dialog.add([characters, 'character']);
            var next = player.chooseButton(dialog);
            next.set('ai', function (button) {
              return get.rank(button.link, true) - lib.character[button.link][2];
            });
            next.set('selectButton', num);
            next.set('forced', true);
            next.set('filterButton', function (button) {
              if (player.storage.mengfenji.current) {
                if (player.storage.mengfenji.current[button.link] != undefined) return false;
              }
              return true;
            });
            ('step 1');
            var map = result.links;
            if (map) player.say('道爷,我成了!!');
            var old = Object.keys(player.storage.mengfenji.current);
            if (old.length) {
              for (var i in player.storage.mengfenji.current) {
                for (let j of player.storage.mengfenji.current[i]) {
                  player.removeSkill(j);
                  game.log(player, '失去了', `<font color=#FF4500>【${get.translation(j)}】</font>`);
                }
                delete player.storage.mengfenji.current[i];
              }
            }
            for (var i in map) {
              if (player.storage.mengfenji.owned[map[i]]) {
                var character = map[i];
                var skills = player.storage.mengfenji.owned[character];
                player.storage.mengfenji.current[character] = skills;
                for (let skill of skills) {
                  player.addTempSkill(skill, { player: 'dieAfter' });
                  game.log(player, '获得了', `#g【${get.translation(skill)}】`);
                }
              }
            }
          },
        },
      },
    },
    mengduofa: {
      trigger: {
        player: 'damageBegin4',
      },
      filter(event, player) {
        return event.num >= player.hp;
      },
      prompt2(event, player) {
        var str = '减1点体力上限';
        var owned = Object.keys(player.storage.mengfenji.owned).length;
        var now = Object.keys(player.storage.mengfenji.current).length;
        if (owned - now > 0) {
          str += ',或弃置一张人格牌';
        }
        str += `,防止此伤害,并回复${event.num}点体力`;
        return str;
      },
      content() {
        'step 0';
        if (Object.keys(player.storage.mengfenji.owned).length - Object.keys(player.storage.mengfenji.current).length) {
          var characters = Object.keys(player.storage.mengfenji.owned);
          var dialog = ui.create.dialog('<h3>躲罚</h3>', 'hidden');
          dialog.addText('<font align="center";font size=3px>弃置一张人格牌,或点取消减1点体力上限</font>');
          dialog.add([characters, 'character']);
          var next = player.chooseButton();
          next.set('ai', function (button) {
            return get.rank(button.link, true) - lib.character[button.link][2];
          });
          next.set('dialog', dialog);
          next.set('selectButton', [1, 1]);
          next.set('filterButton', function (button) {
            if (player.storage.mengfenji.current) {
              if (player.storage.mengfenji.current[button.link]) return false;
            }
            return true;
          });
          event.dialog = dialog;
        } else {
          event._result = { bool: false };
        }
        ('step 1');
        if (event.dialog) event.dialog.close();
        if (result.bool) {
          var map = result.links;
          for (var i in map) {
            if (player.storage.mengfenji.owned[map[i]]) {
              _status.characterlist.push(player.storage.mengfenji.owned[map[i]]);
              delete player.storage.mengfenji.owned[map[i]];
              game.log(player, '失去了一个人格');
            }
          }
        } else {
          player.loseMaxHp();
        }
        player.say('万物皆有法,道爷我算不得？!');
        var num = trigger.num;
        trigger.cancel();
        player.recover(num);
      },
    },
    mengdaogui: {
      trigger: {
        global: 'judgeBefore',
      },
      filter(event, player) {
        return !player.hasSkill('mengkuitian');
      },
      prompt: '道诡:是否猜测判定结果？',
      content() {
        'step 0';
        player.addTempSkill('mengkuitian', { global: 'judgeAfter' });
        ('step 1');
        var next = player.chooseButton([`猜测${get.translation(trigger.player)}的` + (trigger.judgestr || '') + '判定的花色', [lib.suit.map((i) => ['', '', 'lukai_' + i]), 'vcard']]);
        next.set('forced', true);
        next.set('selectButton', [1, 1]);
        next.set('filterButton', function (button) {
          return true;
        });
        next.set('ai', function (button) {
          if (get.itemtype(_status.pileTop) != 'card') return 1;
          else return button.link[2].slice(6) == _status.pileTop.suit;
        });
        ('step 2');
        player.storage.mengkuitian[0] = result.links[0][2].slice(6);
        var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => get.strNumber(i));
        player
          .chooseControl(list, true)
          .set('ai', function () {
            return get.rand(0, 12);
          })
          .set('prompt', `猜测${get.translation(trigger.player)}的` + (trigger.judgestr || '') + '判定的点数');
        ('step 3');
        player.storage.mengkuitian[1] = result.index + 1;
        game.log(player, '进行窥天:', '#g' + get.translation(player.storage.mengkuitian[0]), '#g' + player.storage.mengkuitian[1]);
      },
      derivation: 'mengkuitian',
    },
    mengkuitian: {
      init(player, skill) {
        player.storage.mengkuitian = [];
      },
      onremove(player, skill) {
        delete player.storage.mengkuitian;
      },
      charlotte: true,
      mark: true,
      marktext: '窥',
      intro: {
        name: '窥天',
        content(storage, player) {
          if (storage != []) {
            if (storage.length == 1) return '窥天:' + get.translation(storage[0]);
            return '窥天:' + get.translation(storage[0]) + storage[1];
          }
          return '未进行<窥天>';
        },
      },
      trigger: {
        global: 'judgeFixing',
      },
      forced: true,
      filter(event, player) {
        return event.result;
      },
      content() {
        'step 0';
        if (!player.storage.mengkuitian || player.storage.mengkuitian.length != 2) {
          event.finish();
        }
        ('step 1');
        if (trigger.result.suit && player.storage.mengkuitian[0] && trigger.result.suit == player.storage.mengkuitian[0]) {
          event.kuitian = true;
        }
        if (trigger.result.number && player.storage.mengkuitian[1] && trigger.result.number == player.storage.mengkuitian[1]) {
          event.kuitian = true;
        }
        ('step 2');
        if (!event.kuitian) {
          player.say('哼!道爷自有手段躲这该死的天劫!');
          event.finish(); //失败
        } else {
          player.say('天机别人碰得,我就碰不得？');
          player.chooseTarget('道诡:令一名角色加减体力上限', true).set('ai', (target) => target == player);
        }
        ('step 3');
        event.target = result.targets[0];
        player
          .chooseControl('加1点体力上限', '减1点体力上限')
          .set('prompt', '令' + get.translation(event.target))
          .set('ai', () => '加1点体力上限');
        ('step 4');
        event.control = result.control;
        var goon = false;
        if (trigger.result.judge < 0.5) {
          goon = true;
        } else if (trigger.result.judge <= 0 && get.attitude(trigger.player, player) >= 2) {
          goon = Math.random() > 0.5 ? true : false;
        }
        trigger.player.chooseBool('是否改为终止判定？', get.translation(player) + '即将令' + get.translation(event.target) + event.control).set('ai', () => goon);
        ('step 5');
        if (result.bool) {
          game.log('#g【道诡】', trigger.player, '终止了判定');
          var evt = trigger.parent;
          if (evt.name == 'phaseJudge') {
            evt.excluded = true;
          } else {
            evt.cancel();
            if (evt.name.startsWith('pre_')) {
              var evtx = evt.parent;
              evtx.finish();
              evtx._triggered = null;
            }
            var nexts = trigger.next.slice();
            for (var next of nexts) {
              if (next.name == 'judgeCallback') trigger.next.remove(next);
            }
          }
        } else {
          game.log('#g【道诡】', trigger.player, '没有干涉', player, '的选择');
          event.target[event.control == '加1点体力上限' ? 'gainMaxHp' : 'loseMaxHp']();
        }
        ('step 6');
        lib.skill.mengfenji.addRenges(player, 1);
        var characters = Object.keys(player.storage.mengfenji.owned);
        var dialog = ui.create.dialog('<h3>【道诡】</h3>', 'hidden');
        dialog.addText('<font align="center";font size=3px>展示一张人格牌</font>');
        dialog.add([characters, 'character']);
        var next = player.chooseButton(dialog);
        next.set('ai', function (button) {
          return get.rank(button.link, true) - lib.character[button.link][2];
        });
        next.set('selectButton', 1);
        next.set('forced', false);
        next.set('filterButton', function (button) {
          if (player.storage.mengfenji.current) {
            if (player.storage.mengfenji.current[button.link] != undefined) return false;
          }
          return true;
        });
        ('step 7');
        if (result.bool) {
          var map = result.links;
          for (var i in map) {
            if (player.storage.mengfenji.owned[map[i]]) {
              var character = map[i];
              var skills = player.storage.mengfenji.owned[character];
              player.storage.mengfenji.current[character] = skills;
              for (let skill of skills) {
                player.addTempSkill(skill, { player: 'dieAfter' });
                game.log(player, '获得了', `#g【${get.translation(skill)}】`);
              }
            }
          }
        }
        ('step 8');
        player.removeSkill('mengkuitian');
      },
    },
    //冷若寒
    mengguxing: {
      trigger: {
        global: 'phaseBegin',
      },
      filter(event, player) {
        return player.countCards('h') > 0;
      },
      forced: true,
      content() {
        'step 0';
        player.chooseCardTarget({
          prompt: '孤行',
          prompt2: '将一张手牌当调虎离山使用',
          position: 'h',
          filterCard: true,
          filterTarget(card, player, target) {
            return player.canUse({ name: 'diaohulishan' }, target) && target != _status.currentPhase;
            return lib.filter.targetEnabled2({ name: 'diaohulishan' }, _status.event.getTrigger().player, target); //&&target != _status.currentPhase;
          },
          selectTarget: [1, 2],
          ai1(card) {
            return 10 - get.value(card);
          },
          ai2(target) {
            return get.attitude(_status.event.player, target) > 0;
          },
        });
        ('step 1');
        if (result.bool) {
          player.useCard({ name: 'diaohulishan' }, result.cards, result.targets);
          _status.currentPhase.draw(result.targets.length);
        }
      },
    },
    mengqisi: {
      init(player, skill) {
        player.storage[skill] = false;
      },
      mark: true,
      intro: {
        content: 'limited',
      },
      enable: 'phaseUse',
      limited: true,
      useCards(player) {
        var num = 0;
        player.getAllHistory('useCard', function (evt) {
          var cardx = evt.card;
          if (get.type(cardx) == 'trick' || get.type(cardx) == 'basic') num++;
        });
        return num;
      },
      filter(event, player) {
        return !player.storage.mengqisi && lib.skill.mengqisi.useCards(player) > 0;
      },
      ranTargets(card, player) {
        var targets = game.filterPlayer(function (current) {
          return lib.filter.targetEnabled2(card, player, current);
        });
        if (!targets.length) return [];
        var num = Math.floor(Math.random() * targets.length) + 1;
        if (!lib.skill.xunshi.isXunshi(card)) num = 1;
        return targets.randomGets(num);
      },
      ranCard() {
        var cards = [];
        for (var i = 0; i < lib.inpile.length; i++) {
          var name = lib.inpile[i];
          if (name == 'wuxie' || name == 'shan') continue;
          if (get.type(name) == 'trick' || get.type(name) == 'basic') cards.push(name);
        }
        if (!cards.length) return;
        return cards.randomGet();
      },
      content() {
        'step 0';
        player.awakenSkill('mengqisi');
        player.storage.mengqisi = true;
        ('step 1');
        event.count = lib.skill.mengqisi.useCards(player);
        ('step 2');
        game.log('#g剩余【绮思】次数:', '#y' + event.count);
        event.count--;
        var card = { name: lib.skill.mengqisi.ranCard() };
        game.log('#g随机牌名:', '#y' + get.translation(card.name));
        var targets = lib.skill.mengqisi.ranTargets(card, player);
        game.log('#g随机目标数:', '#y' + targets.length);
        if (targets.length) {
          player.useCard(card, targets);
        }
        if (event.count > 0) event.redo();
      },
      ai: {
        result: {
          player(player, target) {
            if (lib.skill.mengqisi.useCards(player) >= 20 || player.hp <= 1) return 20;
          },
        },
      },
    },
    //心之所向
    mengjingjin: {
      init(player) {
        if (!player.storage.mengjingjin) player.storage.mengjingjin = [4, 2, 3, 1];
      },
      getInfo(player) {
        if (!player.storage.mengjingjin) player.storage.mengjingjin = [4, 2, 3, 1];
        return player.storage.mengjingjin;
      },
      forced: true,
      trigger: {
        player: 'damageEnd',
        source: 'damageSource',
      },
      filter(event, player) {
        return true;
      },
      async content(event, trigger, player) {
        const info = lib.skill.mengjingjin.getInfo(player);
        //0
        const cards = get.cards(info[0]);
        game.cardsGotoOrdering(cards);
        var next = player.chooseToMove();
        next.set('list', [['牌堆顶', cards]]);
        next.set('prompt', '精进:重排牌堆顶的牌');
        next.processAI = function (list) {
          var cards = list[0][1],
            player = _status.event.player;
          const target = _status.currentPhase?.next || player;
          const att = get.attitude(player, target);
          const top = [],
            bottom = cards;
          for (const i of target.getCards('j')) {
            const judge = get.judge(i);
            bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
            if (bottom.length) {
              top.push(bottom.shift());
            }
          }
          bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
          while (bottom.length) {
            top.push(bottom.shift());
          }
          return [top];
        };
        const { bool, moved } = await next.forResult();
        if (bool) {
          let top = moved[0];
          top.reverse();
          for (var i = 0; i < top.length; i++) {
            ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
          }
          player.popup(get.cnNumber(top.length) + '上');
          game.log(player, `将${get.cnNumber(top.length)}张牌置于牌堆顶`);
          game.updateRoundNumber();
        }
        //1
        player.discardPlayerCard(trigger.player, info[1], true);
        //2
        trigger.player.draw(info[2]);
        //3
        if (trigger.source) {
          if (trigger.source.countCards('h') > info[3]) {
            let num = trigger.source.countCards('h') - info[3];
            trigger.source.chooseToDiscard(true, `弃置${num}张牌`, num);
          } else if (trigger.source.countCards('h') < info[3]) {
            trigger.source.drawTo(info[3]);
          }
        }
        let target;
        if (!trigger.source) target = player;
        else {
          if (player.countCards('h') > trigger.source.countCards('h')) target = trigger.source;
          if (player.countCards('h') < trigger.source.countCards('h')) target = player;
        }
        if (target && target.isIn()) {
          let list = [1, 2, 3, 4];
          const { control: a } = await target
            .chooseControl(list)
            .set('prompt', '〖精进〗:观看牌堆顶几张牌？')
            .set('prompt2', '锁定技,当你对一名角色造成或受到伤害时,你观看牌堆顶4张牌并以任意顺序放回,你弃置受伤角色2张牌、令其摸3张牌并令伤害来源将手牌数调整至1.')
            .set('ai', () => {
              if (!_status.event.player.hasSkill('mengjingjin')) {
                return 4;
              } else {
                return 1;
              }
            })
            .forResult();
          list.remove(a);
          player.storage.mengjingjin[0] = a;
          const { control: b } = await target
            .chooseControl(list)
            .set('prompt', '〖精进〗:弃置受伤角色几张牌？')
            .set('prompt2', '锁定技,当你对一名角色造成或受到伤害时,你观看牌堆顶4张牌并以任意顺序放回,你弃置受伤角色2张牌、令其摸3张牌并令伤害来源将手牌数调整至1.')
            .set('ai', () => {
              if (!_status.event.player.hasSkill('mengjingjin')) {
                return 3;
              } else {
                return 4;
              }
            })
            .forResult();
          list.remove(b);
          player.storage.mengjingjin[1] = b;
          const { control: c } = await target
            .chooseControl(list)
            .set('prompt', '〖精进〗:受伤角色摸几张牌？')
            .set('prompt2', '锁定技,当你对一名角色造成或受到伤害时,你观看牌堆顶4张牌并以任意顺序放回,你弃置受伤角色2张牌、令其摸3张牌并令伤害来源将手牌数调整至1.')
            .set('ai', () => {
              if (!_status.event.player.hasSkill('mengjingjin')) {
                return 4;
              } else {
                return 3;
              }
            })
            .forResult();
          list.remove(c);
          player.storage.mengjingjin[2] = c;
          const { control: d } = await target
            .chooseControl(list)
            .set('prompt', '〖精进〗:伤害来源将手牌数调整至？')
            .set('prompt2', '锁定技,当你对一名角色造成或受到伤害时,你观看牌堆顶4张牌并以任意顺序放回,你弃置受伤角色2张牌、令其摸3张牌并令伤害来源将手牌数调整至1.')
            .set('ai', () => 2)
            .forResult();
          list.remove(d);
          player.storage.mengjingjin[3] = d;
        }
      },
      mark: true,
      intro: {
        content(storage, player) {
          var info = lib.skill.mengjingjin.getInfo(player);
          return `
									<span class=thundertext>观看牌堆顶:${info[0]}</span><br>
									<span class=firetext>弃置受伤角色:${info[1]}</span><br>
									<span class=greentext>受伤角色摸:${info[2]}</span><br>
									<span class=yellowtext>伤害来源手牌至:${info[3]}</span>
									`;
        },
      },
      ai: {
        threaten: 8.8,
      },
    },
    //sp梦海
    mengspxingmeng: {
      audio: 'ext:测试服:3',
      trigger: {
        source: 'damageSource',
      },
      usable: 1,
      forced: true,
      content() {
        if (trigger.player.countCards('h') > player.countCards('h')) {
          player.discardPlayerCard(trigger.player, 'he');
        } else if (trigger.player.countCards('h') == player.countCards('h')) {
          trigger.player.damage(player);
        } else if (trigger.player.countCards('h') < player.countCards('h')) {
          player.draw();
        }
      },
    },
    menglangu: {
      audio: 'ext:测试服:3',
      trigger: {
        global: 'phaseEnd',
      },
      filter: (event, player) => event.player.getStat('damage') > 0,
      prompt(event, player) {
        let num = 0;
        event.player.getHistory('sourceDamage', function (evt) {
          num += evt.num;
        });
        return `兰谷:令${get.translation(event.player)}摸${num}张牌`;
      },
      check(event, player) {
        return get.attitude(player, event.player) > 0;
      },
      content() {
        let num = 0;
        trigger.player.getHistory('sourceDamage', function (evt) {
          num += evt.num;
        });
        trigger.player.draw(num);
      },
    },
    //咩门那由
    mengkunlu: {
      audio: 'ext:测试服:2',
      forced: true,
      trigger: {
        player: 'phaseBegin',
      },
      filter(event, player) {
        let suits = [];
        player.getCards('he').map((card) => {
          suits.add(card.suit);
        });
        if (suits.length >= player.hp) return game.hasPlayer((current) => current.hp < player.hp);
      },
      async content(event, trigger, player) {
        const { targets } = await player
          .chooseTarget('困虑:将手牌向一名体力值不大于你的角色调整2', (card, player, target) => {
            return target.hp <= player.hp;
          })
          .set('ai', (target) => {
            if (player.storage.mengkunlu != undefined) {
              if (player.storage.mengkunlu == 1) {
                if (game.hasPlayer((current) => current.hp < player.hp && current.countCards('h') < player.countCards('h'))) return target.countCards('h') < player.countCards('h');
              } else {
                if (game.hasPlayer((current) => current.hp < player.hp && current.countCards('h') > player.countCards('h'))) return target.countCards('h') > player.countCards('h');
              }
            }
            if (game.hasPlayer((current) => current.hp < player.hp && current.countCards('h') > player.countCards('h'))) {
              return target.countCards('h') > player.countCards('h');
            } else {
              return true;
            }
          })
          .forResult();
        if (targets) {
          if (targets[0].countCards('h') > player.countCards('h')) {
            //1
            if (player.storage.mengkunlu == 0) {
              player.addTempSkill('mengsiling');
            } else {
              player.when('phaseAfter').then(() => {
                var next = player.phaseDraw();
                event.next.remove(next);
                trigger.next.push(next);
              });
            }
            player.storage.mengkunlu = 1;
            player.draw(2);
          } else if (targets[0].countCards('h') < player.countCards('h')) {
            //0
            if (player.storage.mengkunlu == 1) {
              player.addTempSkill('mengsiling');
            } else {
              player.when('phaseAfter').then(() => {
                var next = player.phaseDraw();
                event.next.remove(next);
                trigger.next.push(next);
              });
            }
            player.storage.mengkunlu = 0;
            player.chooseToDiscard('h', true, 2);
          }
        }
      },
      derivation: 'mengsiling',
    },
    mengsiyan: {
      audio: 'ext:测试服:2',
      trigger: {
        player: ['drawAfter', 'discardAfter'],
      },
      forced: true,
      filter(event, player) {
        return (event.name == 'draw' ? event.parent.name : event.getParent(2).name) == 'mengkunlu';
      },
      async content(event, trigger, player) {
        var cards = player.getCards('he');
        var list = [];
        if (Array.isArray(cards))
          for (var i of cards) {
            list.add(get.color(i));
          }
        list.sort();
        const { control } = await player
          .chooseControl(list, 'cancel2')
          .set('prompt', '思焰:是否重铸一种颜色的所有牌？')
          .set('ai', function () {
            var player = _status.event.player;
            var val = {},
              min = ['', 100];
            for (var i of player.getCards('he')) {
              var suit = i.suit;
              if (!val[suit]) {
                val[suit] = get.value(i);
              } else {
                val[suit] += get.value(i);
              }
              if (val[suit] < min[1]) min = [suit, val[suit]];
            }
            return min[0];
          })
          .forResult();
        if (control) {
          player.recast(player.getCards('he', { color: control }));
        }
      },
      group: 'mengsiyan_draw',
      subSkill: {
        draw: {
          trigger: {
            player: 'gainAfter',
          },
          forced: true,
          charlotte: true,
          filter(event, player) {
            if (event.getParent(3).name != 'mengsiyan') return false;
            if (event.getg(player).length < 2) return false;
            let types = [],
              types2 = ['trick', 'equip', 'basic'];
            for (var i of event.getg(player)) {
              types.add(get.type2(i));
              types2.remove(get.type2(i));
            }
            return types.length == 2 && types2.length && get.centralCards().some((card) => get.type2(card) == types2[0]);
          },
          async content(event, trigger, player) {
            let types = ['trick', 'equip', 'basic'];
            for (var i of trigger.getg(player)) types.remove(get.type2(i));
            let list = get.centralCards().filter((card) => get.type2(card) == types[0]);
            const { links } = await player.chooseButton(['选择要获得的牌', list], 1, true).forResult();
            if (links) {
              player.gain(links, 'gain2');
            }
          },
        },
      },
    },
    mengsiling: {
      audio: 'ext:测试服:2',
      init(player) {
        player.storage.mengsiling = [];
      },
      enable: 'phaseUse',
      filter(event, player) {
        if (player.countCards('h') == 0) return false;
        return game.hasPlayer(function (current) {
          return current.countCards('h') <= player.countCards('h') && player.canCompare(current);
        });
      },
      filterTarget(card, player, target) {
        return target.countCards('h') <= player.countCards('h') + 1 && player.canCompare(target) && !player.storage.mengsiling.includes(target);
      },
      async content(event, map) {
        const player = map.player,
          target = event.targets[0];
        player.storage.mengsiling.push(target);
        player
          .when({
            global: 'phaseAfter',
          })
          .then(() => {
            player.storage.mengsiling = [];
          });
        player.draw();
        const result = await player.chooseToCompare(target);
        if (result.bool) {
          player.useCard({ name: 'zhibi' }, [target]);
          let result2;
          if (target.countCards('h')) result2 = await player.discardPlayerCard('弃置其一张牌,否则对其造成1点伤害', target, 'he').set('ai', (card) => false);
          else result2 = { bool: false };
          if (!result2.bool) target.damage();
        }
      },
    },
    //sp柚衣
    mengtihan: {
      audio: 'ext:测试服:2',
      init(player) {
        player.storage.mengtihan = [[], []];
        player.storage.mengtihan2 = [];
      },
      trigger: {
        global: ['damageEnd', 'gainAfter'],
      },
      check(trigger, player) {
        return get.attitude(player, trigger.name == 'damage' ? trigger.source : trigger.player) < 0;
      },
      filter(event, player) {
        let num = 0;
        if (event.name == 'damage') {
          if (!event.source || !event.source.isIn()) return false;
          event.source.getHistory('sourceDamage', function (evt) {
            num += evt.num;
          });
          return num > 1 && player.storage.mengtihan2.includes(event.source) && !player.storage.mengtihan[0].includes(event.source);
        } else {
          event.player.getHistory('gain', (evt) => {
            num += evt.cards.length;
          });
          return num >= 4 && player.storage.mengtihan2.includes(event.player) && !player.storage.mengtihan[1].includes(event.player);
        }
      },
      async content(event, trigger, player) {
        if (trigger.name == 'damage') {
          player.storage.mengtihan[0].add(trigger.source);
          await player.recover();
        } else {
          player.storage.mengtihan[1].add(trigger.player);
          await trigger.player.loseHp();
        }
        player
          .when({
            global: 'phaseAfter',
          })
          .then(() => {
            player.storage.mengtihan = [[], []];
          });
        let tar = trigger.name == 'damage' ? trigger.source : trigger.player;
        if (tar.hasSkill('baiban')) return;
        const { cards } = await player.chooseCard(`是否交给${get.translation(tar)}一张牌,令其本回合变成白板？`, 'he').forResult();
        if (cards) {
          player.give(cards, tar);
          tar.addTempSkill('baiban');
        }
      },
      group: 'mengtihan2',
    },
    mengtihan2: {
      trigger: {
        global: ['logSkillBegin', 'useSkillBegin'],
      },
      filter(event, player) {
        if (event.type != 'player') return false;
        var info = get.info(event.sourceSkill || event.skill);
        if (!info || info.charlotte) return false;
        return true;
      },
      forced: true,
      silent: true,
      charlotte: true,
      superCharlotte: true,
      content() {
        player.storage.mengtihan2.add(trigger.player);
        player
          .when({
            global: 'phaseAfter',
          })
          .then(() => {
            player.storage.mengtihan2 = [];
          });
      },
    },
    mengwennuan: {
      audio: 'ext:测试服:2',
      usable: 1,
      enable: 'phaseUse',
      filterTarget(card, player, target) {
        return target.countCards('h');
      },
      selectTarget: [1, 3],
      //complexTarget: true,
      //complexSelect: true,
      multiline: true,
      multitarget: true,
      async content(event, trigger, player) {
        let players = event.targets;
        players.sort(function (a, b) {
          return b.countCards('h') - a.countCards('h');
        });
        for (var i of players) {
          const next = players[i + 1] ? players[i + 1] : players[0];
          const { cards } = await i.chooseCard(`将一张牌交给${get.translation(next)}`, true, 'he').forResult();
          await i.give(cards, next);
          if (next.getCards('h').includes(cards[0]) && next.hasUseTarget(cards[0], false)) {
            await next.chooseUseTarget(cards[0], false);
          }
        }
        players.sort(function (a, b) {
          return a.countCards('h') - b.countCards('h');
        });
        for (let j of players) {
          if (j.countCards('h') == players[0].countCards('h')) j.draw();
        }
      },
      ai: {
        order: 10,
        result: {
          target: 2,
        },
      },
    },
    //re沧海依酥
    mengremoyu: {
      audio: 'mengmoyu',
      init(player) {
        player.storage.mengremoyu = [];
      },
      forced: true,
      trigger: {
        global: 'phaseUseBegin',
      },
      async content(event, trigger, player) {
        if (trigger.player == player) {
          trigger.cancel();
        } else {
          player.draw();
          const { card } = await player
            .chooseToUse('摸鱼:使用一张牌', function (card, player, event) {
              if (get.position(card) != 'h') return false;
              return lib.filter.cardEnabled.apply(this, arguments);
            })
            .forResult();
          if (card) {
            if (get.type(card) != 'equip') player.storage.mengremoyu.add(card.name);
          }
        }
      },
    },
    mengrexingmeng: {
      juexingji: true,
      trigger: {
        player: 'phaseBegin',
      },
      filter(event, player) {
        return !player.storage.mengrexingmeng && player.storage.mengremoyu.length >= game.countPlayer();
      },
      forced: true,
      async content(event, trigger, player) {
        player.awakenSkill(event.name);
        player.storage[event.name] = true;
        player.addSkillLog('mengyimeng');
        player.storage.mengyimeng = player.storage.mengremoyu;
        player.removeSkill('mengremoyu');
      },
      derivation: ['mengyimeng'],
    },
    mengyimeng: {
      hiddenCard(player, name) {
        return player.getStorage('mengyimeng').includes(name) && !player.getStorage('mengyimeng2').includes(name) && player.countCards('hes') > 0;
      },
      init(player) {
        player.storage.mengyimeng = [];
        player.storage.mengyimeng2 = [];
      },
      enable: 'chooseToUse',
      filter(event, player) {
        return (
          player.hasCard((card) =>
            lib.inpile.some((name) => {
              if (player.getStorage('mengyimeng').includes(name) || player.getStorage('mengyimeng2').includes(name)) return false;
              if (get.type(name) != 'basic' && get.type(name) != 'trick') return false;
              if (event.filterCard && event.filterCard({ name: name, cards: [card] }, player, event)) return true;
              if (name == 'sha') {
                for (var nature of lib.inpile_nature) {
                  if (event.filterCard && event.filterCard({ name: name, nature: nature, cards: [card] }, player, event)) return true;
                }
              }
              return false;
            }, 'hes')
          ) > 0
        );
      },
      chooseButton: {
        dialog(event, player) {
          var list = [];
          for (var name of player.getStorage('mengyimeng')) {
            if (get.type(name) == 'basic' || get.type(name) == 'trick') {
              if (player.getStorage('mengyimeng2').includes(name)) continue;
              list.push([get.translation(get.type(name)), '', name]);
              if (name == 'sha') {
                for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
              }
            }
          }
          return ui.create.dialog('忆梦', [list, 'vcard']);
        },
        filter(button, player) {
          return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
        },
        check(button) {
          var player = _status.event.player;
          var card = { name: button.link[2], nature: button.link[3] };
          if (player.countCards('hes', (cardx) => cardx.name == card.name)) return 0;
          return _status.event.parent.type == 'phase' ? player.getUseValue(card) : 1;
        },
        backup(links, player) {
          return {
            filterCard: true,
            popname: true,
            check(card) {
              return 7 - get.value(card);
            },
            position: 'hes',
            viewAs: { name: links[0][2], nature: links[0][3] },
            onuse(result, player) {
              player.markAuto('mengyimeng2', [result.card.name]);
              player
                .when({
                  global: 'phaseAfter',
                })
                .then(() => {
                  player.storage.mengyimeng2 = [];
                });
            },
          };
        },
        prompt(links, player) {
          return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
        },
      },
      ai: {
        order: 4,
        save: true,
        respondSha: true,
        respondShan: true,
        skillTagFilter(player, tag, arg) {
          if (!player.countCards('hes') || player.hasSkill('taoluan3')) return false;
          if (tag == 'respondSha' || tag == 'respondShan') {
            if (arg == 'respond') return false;
            return !player.getStorage('taoluan').includes(tag == 'respondSha' ? 'sha' : 'shan');
          }
          return !player.getStorage('taoluan').includes('tao') || (!player.getStorage('taoluan').includes('jiu') && arg == player);
        },
        result: {
          player(player) {
            var num = player.countMark('xintaoluan2');
            var players = game.filterPlayer();
            for (var i of players) {
              if (i != player && i.countCards('he') > (num + 1) * 2 && get.attitude(player, i) > 0) {
                return 1;
              }
            }
            return 0;
          },
        },
        threaten: 1.9,
      },
    },
    //木善才
    mengjiejian: {
      enable: 'phaseUse',
      filter(event, player) {
        return game.hasPlayer((current) => {
          return player.canCompare(current);
        });
      },
      filterTarget(card, player, target) {
        return player.canCompare(target);
      },
      async content(event, map) {
        var player = map.player,
          trigger = map.trigger,
          target = event.target;
        const result = await player.chooseToCompare(target);
        if (result.bool) {
          if (player.hasDisabledSlot() || target.hasDisabledSlot()) {
            const result2 = await player
              .chooseControl('摸一张牌', '回复装备栏')
              .set('prompt', '借鉴:令你们')
              .set('ai', () => (Math.random() > 0.3 ? '回复装备栏' : '摸一张牌'));
            if (result2.control == '摸一张牌') {
              game.asyncDraw([player, target]);
            } else {
              if (player.hasDisabledSlot())
                player.chooseToEnable().set('ai', function () {
                  var player = _status.event.player;
                  var list = [2, 5, 1, 3, 4];
                  for (var i of list) {
                    if (player.hasDisabledSlot(i)) return 'equip' + i;
                  }
                });
              if (target.hasDisabledSlot())
                target.chooseToEnable().set('ai', function () {
                  var player = _status.event.player;
                  var list = [2, 5, 1, 3, 4];
                  for (var i of list) {
                    if (player.hasDisabledSlot(i)) return 'equip' + i;
                  }
                });
            }
          } else {
            game.asyncDraw([player, target]);
          }
          const num = Math.floor((lib.translate[result.player.name].length + lib.translate[result.target.name].length) / 2);
          game.log(lib.translate[result.player.name].length, '+', lib.translate[result.target.name].length, '均值为', num);
          let list = [];
          for (var i of lib.inpile) {
            let type = get.type(i);
            if (type == 'basic' || type == 'trick') list.push([type, '', i]);
            if (i == 'sha') {
              for (let j of lib.inpile_nature) list.push([type, '', i, j]);
            }
          }
          if (list.length) {
            const result3 = await player
              .chooseButton([`视为使用一张字数为<span class='firetext'>${num}</span>的基本牌或普通锦囊牌？`, [list, 'vcard']])
              .set('num', num)
              .set('filterButton', function (button) {
                if (lib.translate[button.link[2]].length != _status.event.num) return false;
                return player.hasUseTarget({
                  name: button.link[2],
                  nature: button.link[3],
                });
              })
              .set('ai', function (button) {
                return player.getUseValue({
                  name: button.link[2],
                  nature: button.link[3],
                });
              });
            if (result3.bool) {
              player.chooseUseTarget(true, {
                name: result3.links[0][2],
                nature: result3.links[0][3],
              });
            }
          }
          if (player.getStat().skill.mengjiejian >= num) {
            player.awakenSkill(event.name);
            player
              .when({
                global: 'phaseAfter',
              })
              .then(() => {
                player.restoreSkill('mengjiejian');
              });
          }
        }
      },
      ai: {
        order: 10,
        result: {
          player: 2,
          target: -1,
        },
      },
    },
    mengyingbian: {
      trigger: {
        player: ['chooseToCompareBefore', 'compareMultipleBefore'],
        target: ['chooseToCompareBefore', 'compareMultipleBefore'],
        //global: ['chooseToCompareBefore', '']
      },
      forced: true,
      filter(event, player) {
        if (event.preserve) return false;
        return event.player == player || event.target == player;
      },
      async content(event, trigger, player) {
        let list = [];
        for (var i = 1; i <= 5; i++) {
          if (player.hasEnabledSlot('equip' + i)) list.push('equip' + i);
        }
        if (!list.length) return;
        list.sort();
        const { control } = await player.chooseControl(list, 'cancel2').set('prompt', '是否废除一个装备栏并用牌堆对应的牌进行拼点？').forResult();
        if (control != 'cancel2') {
          await player.disableEquip(control);
          let list2 = [];
          for (var i of ui.cardPile.childNodes) if (get.subtype(i) == control) list2.push(i);
          if (!list2.length) return;
          const { links } = await player.chooseButton(['选择要拼点的牌', list2], 1, true).forResult();
          if (links) {
            if (!trigger.fixedResult) trigger.fixedResult = {};
            trigger.fixedResult[player.playerid] = game.cardsGotoOrdering(links).cards[0];
          }
        }
      },
      ai: {
        canCompareSource: true,
        canCompareTarget: true,
      },
    },
    //帕朵
    spgualun: {
      audio: 'shejian',
      mark: true,
      marktext: '卦',
      intro: {
        content: 'expansion',
        markcount: 'expansion',
      },
      init(player) {
        player.storage.spgualun = [];
      },
      trigger: {
        global: 'useCardToPlayered',
      },
      filter(event, player) {
        if (event.spgualun) return false;
        if (get.type(event.card) == 'equip') return false;
        return event.player != player && player.canCompare(event.player) && player.countCards('he') && !event.spgualun;
      },
      forced: true,
      async content(event, trigger, player) {
        const { cards: give } = await player.chooseCard(1, 'he', `卦论:是否交给${get.translation(trigger.player)}一张牌并与之拼点？`).forResult();
        if (give) {
          trigger.spgualun = true;
          player.give(give, trigger.player);
          if (player.canCompare(trigger.player)) {
            const result = await player.chooseToCompare(trigger.player).forResult();
            if (result) {
              if (result.player) {
                if (player.getExpansions('spgualun').some((card) => card.suit == result.player.suit)) await player.gain(result.player, 'gain2');
                else {
                  game.log(player, '将', result.player, '置于武将牌旁');
                  player.addToExpansion(result.player, player, 'gain2').gaintag.add('spgualun');
                }
              }
              if (result.target) await trigger.player.gain(result.target, 'gain2');
              if (result.winner) await result.winner.draw();
              if (result.bool) {
                if (player.storage.spbolu) player.markAuto('spbolu', [trigger.card.name]);
              } else {
                game.playAudio('../extension/忽悠宇宙/audio/skill/spgualun.mp3');
              }
            }
          }
        }
      },
      group: ['spgualun_gaipan'],
      subSkill: {
        gaipan: {
          audio: 'kuangcai',
          trigger: {
            global: 'judge',
          },
          forced: true,
          filter(event, player) {
            return player.getExpansions('spgualun').length && event.player.isIn();
          },
          async content(event, trigger, player) {
            const { bool, links } = await player
              .chooseButton([get.translation(trigger.player) + '的' + (trigger.judgestr || '') + `判定为${get.translation(trigger.player.judging[0])},是否用卦论牌发动鬼才？`, player.getExpansions('spgualun'), 'hidden'])
              .set('filterButton', (button) => {
                const player = get.event('player'),
                  card = button.link;
                const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                if (mod2 != 'unchanged') return mod2;
                const mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                if (mod != 'unchanged') return mod;
                return true;
              })
              .set('ai', (button) => {
                const card = button.link,
                  trigger = get.event().getTrigger();
                const player = get.event('player'),
                  judging = get.event('judging');
                const result = trigger.judge(card) - trigger.judge(judging) + 0.00001;
                const attitude = get.attitude(player, trigger.player);
                return result * attitude;
              })
              .set('judging', trigger.player.judging[0])
              .forResult();
            if (bool) {
              event.forceDie = true;
              await player.respond(links, 'spgualun', 'highlight', 'noOrdering');
              if (trigger.player.judging[0].clone) {
                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                game.broadcast((card) => {
                  if (card.clone) card.clone.classList.remove('thrownhighlight');
                }, trigger.player.judging[0]);
                game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
              }
              await game.cardsDiscard(trigger.player.judging[0]);
              trigger.player.judging[0] = links[0];
              trigger.orderingCards.addArray(links);
              game.log(trigger.player, '的判定牌改为', links[0]);
              await game.asyncDelay(2);
              //await player.draw();
            }
          },
          ai: {
            combo: 'spgualun',
            rejudge: true,
            tag: {
              rejudge: 0.6,
            },
          },
        },
      },
    },
    spbolu: {
      audio: 'kuangcai',
      mark: true,
      marktext: '箓',
      intro: {
        name: '博箓',
        mark(dialog, content, player) {
          if (player == game.me || player.isUnderControl()) {
            dialog.add([player.getStorage('spbolu'), 'vcard']);
          }
        },
        content: '已记录牌名:$',
      },
      init(player) {
        player.storage.spbolu = ['shan'];
      },
      hiddenCard(player, name) {
        if (player.storage.spbolu.includes(name) && player.countCards('hes')) return true;
      },
      enable: ['chooseToUse', 'chooseToRespond'],
      filter(event, player) {
        if (event.spbolu) return false;
        if (_status.currentPhase == player && !player.countCards('hes')) return false;
        return player.getStorage('spbolu').some((name) => event.filterCard({ name }, player, event) && (get.type2(name) == 'basic' || get.type2(name) == 'trick'));
      },
      chooseButton: {
        dialog(event, player) {
          var list = [];
          for (let name of player.getStorage('spbolu')) {
            if (!event.filterCard || !event.filterCard({ name }, player, event)) continue;
            let type = get.type2(name);
            if (name == 'sha') {
              list.push([type, '', 'sha']);
              for (var nature of lib.inpile_nature) {
                if (event.filterCard && event.filterCard({ name, nature }, player, event)) list.push([type, '', 'sha', nature]);
              }
            } else if (type == 'basic' || type == 'trick') list.push([type, '', name]);
          }
          return ui.create.dialog('博箓', [list, 'vcard']);
        },
        backup(links, player) {
          return {
            audio: 'kuangcai',
            filterCard: (card) => _status.currentPhase == _status.event.player,
            position: 'hes',
            popname: true,
            check(card) {
              return 8 - get.value(card);
            },
            selectCard: (card, player) => (_status.currentPhase == _status.event.player ? 1 : -1),
            viewAs: { name: links[0][2], nature: links[0][3] },
            precontent() {
              'step 0';
              player
                .judge('博箓', function (card) {
                  if (lib.translate[card.name].length == lib.translate[event.result.card.name].length) return 2;
                  return -2;
                })
                .set('judge2', (result) => result.bool)
                .set('spxiuyao', event.result.card.name);
              ('step 1');
              if (result.bool) {
                var cards = event.result.cards;
                event.result.card = {
                  name: event.result.card.name,
                  nature: event.result.card.nature,
                };
                event.result.cards = cards;
              } else {
                var evt = event.parent;
                evt.set('spbolu', true);
                evt.goto(0);
                return;
              }
            },
          };
        },
        prompt(links, player) {
          if (_status.currentPhase == player) return `将一张牌当${(get.translation(links[0][3]) || '') + get.translation(links[0][2])}使用`;
          else '视为使用或打出一张' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
        },
      },
      ai: {
        freeAttack: true,
        respondSha: true,
        respondShan: true,
        save: true,
        skillTagFilter(player) {
          return player.getStorage('spbolu').length && player.countCards('hes');
        },
        order: 1,
        result: {
          player(player) {
            if (_status.event.dying) return get.attitude(player, _status.event.dying);
            return 1;
          },
        },
      },
    },
    spxiuyao: {
      trigger: {
        player: 'judgeEnd',
      },
      filter(event, player) {
        return event.parent.name == 'pre_spbolu_backup' && event.judge(event.result.card) < 0 && event.spxiuyao != undefined;
      },
      forced: true,
      async content(event, trigger, player) {
        let name = trigger.spxiuyao;
        const { bool } = await player
          .chooseBool(`是否移除${get.translation(name)}并摸一张牌？`)
          .set('ai', () => false)
          .forResult();
        if (bool) {
          player.storage.spbolu.remove(name);
          player.draw();
        }
        if (!player.getExpansions('spgualun').length || get.position(trigger.result.card, true) != 'o') return;
        const { links } = await player.chooseButton(['替换一张牌', player.getExpansions('spgualun')], true).forResult();
        if (links) {
          player.loseToDiscardpile(links);
          game.log(player, '将', trigger.result.card, '置于武将牌旁');
          player.addToExpansion(trigger.result.card, player, 'gain2').gaintag.add('spgualun');
        }
      },
      group: 'spxiuyao_add',
      subSkill: {
        add: {
          trigger: {
            player: 'compare',
            target: 'compare',
          },
          filter(event, player) {
            if (!player.getExpansions('spgualun').length) return false;
            if (event.player == player) return !event.iwhile;
            return true;
          },
          forced: true,
          content() {
            let num = player.getExpansions('spgualun').length;
            if (player == trigger.player) {
              trigger.num1 += num;
              if (trigger.num1 > 13) trigger.num1 = 13;
            } else {
              trigger.num2 += updateRoundNumber;
              if (trigger.num2 > 13) trigger.num2 = 13;
            }
            game.log(player, '的拼点牌点数+', num);
          },
        },
      },
    },
    //素裳
    mengshanqing: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        player: 'useCardToPlayer',
      },
      shaRelated: true,
      filter(event, player) {
        if (event.card.name != 'sha' || get.itemtype(event.cards) != 'cards') return false;
        return event.target.countGainableCards(player, 'he') > 0;
      },
      check(event, player) {
        return event.target.countGainableCards(player, 'he') > 0 && get.attitude(player, event.target) < 0;
      },
      frequent: 'check',
      logTarget: 'target',
      content() {
        'step 0';
        if (trigger.target.countGainableCards(player, 'e') > 0) {
          player.gainPlayerCard(trigger.target, 'e', true);
        } else if (trigger.target.countGainableCards(player, 'h') > 0) {
          player.gainPlayerCard(trigger.target, 'h', true);
        }
      },
      ai: {
        unequip: true,
        directHit_ai: true,
        skillTagFilter(player, tag, arg) {
          if (tag == 'directHit_ai')
            return (
              arg.card.name == 'sha' &&
              arg.target.countCards('e', function (card) {
                return get.value(card) > 1;
              }) > 0
            );

          if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
          return false;
        },
      },
    },
    mengyouren: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'useCardAfter',
      },
      check(event, player) {
        return get.attitude(player, event.targets[0]) < 0;
      },
      shaRelated: true,
      frequent: 'check',
      filter(event, player) {
        return event.card && event.card.name == 'sha' && get.itemtype(event.cards) == 'cards' && event.targets.length;
      },
      content() {
        'step 0';
        var num = lib.skill.mengyouren.num(trigger);
        event.cards = get.cards(num);
        var list = [],
          reds = [],
          blacks = [];
        var dialog = [`游刃:弃置某种颜色的牌,视为对${get.translation(trigger.targets)}使用等量【杀】,获得剩余的牌`];
        for (var i of event.cards) {
          if (get.color(i) == 'red') reds.push(i);
          else if (get.color(i) == 'black') blacks.push(i);
        }
        if (reds.length) {
          dialog.push('<div class="text center">红色牌</div>');
          dialog.push(reds);
          list.push('red');
        }
        if (blacks.length) {
          dialog.push('<div class="text center">黑色牌</div>');
          dialog.push(blacks);
          list.push('black');
        }
        var bool = false;
        for (var i of trigger.targets) {
          if (i.isIn()) bool = true;
        }
        if (list.length && bool) {
          list.push('cancel2');
          player
            .chooseControl(list)
            .set('dialog', dialog)
            .set('ai', function () {
              if (blacks.length >= reds.length) return 'black';
              else return 'red' || _status.event.control;
            })
            .set('control', list);
        } else {
          event._result = { control: 'cancel2' };
        }
        ('step 1');
        var gain = [];
        if (result.control == 'cancel2') {
          gain = event.cards;
        } else {
          var color = result.control;
          for (var i of event.cards) {
            if (get.color(i) == color) {
              for (var j of trigger.targets) {
                game.cardsDiscard(i);
                if (j.isIn() && player.canUse({ name: 'sha' }, j, false)) player.useCard({ name: 'sha' }, j, false, 'noai');
              }
            } else gain.push(i);
          }
        }
        player.gain(gain, 'gain2');
      },
      num(event) {
        var num = 1;
        var str = '#g【游刃】:';
        for (var i of event.targets) {
          if (i.countCards('e') == 0) {
            str += `<li>${get.translation(i)}的装备区内没有牌`;
            num++;
            break;
          }
        }
        for (var i of event.targets) {
          if (i.countCards('h') == 0) {
            str += `<li>${get.translation(i)}的手牌区内没有牌`;
            num++;
            break;
          }
        }
        if (
          event.player.hasHistory('sourceDamage', function (evt) {
            return evt.card == event.card;
          })
        ) {
          str += `<li>${get.translation(event.card)}造成过伤害`;
          num++;
        }
        if (num <= 1) str != '没有任何条件满足';
        game.log(str); //游刃打印
        return num;
      },
    },
    mengwuji: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      mod: {
        cardname(card, player, name) {
          if (get.type(card.name) == 'delay') return 'sha';
        },
      },
      ai: {
        skillTagFilter(player) {
          if (
            !player.countCards('h', function (card) {
              return get.type(card) == 'delay';
            })
          )
            return false;
        },
        respondSha: true,
      },
      trigger: {
        player: ['useCard1', 'respond'],
      },
      firstDo: true,
      forced: true,
      filter(event, player) {
        return event.card && event.card.name == 'sha' && !event.skill && event.cards.length == 1 && get.type(event.cards[0]) == 'delay';
      },
      content() { },
    },
    //驭空
    mengtianque: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      mark: true,
      markname: '鸣',
      intro: {
        content: '当前有#层<鸣弦号令>',
      },
      init(player) {
        player.storage.mengtianque = 0;
      },
      trigger: {
        player: ['phaseZhunbeiBegin'],
        global: 'damageBegin1',
      },
      prompt2(event, player) {
        var str = `是否令${get.translation(event.player)}受到的伤害+1,回合结束移除一层<鸣弦号令>？`;
        return event.name == 'damage' ? str : '是否增加两层<鸣弦号令>？';
      },
      frequent(event, player) {
        if (event.name == 'phaseZhunbei') return true;
        else return false;
      },
      check(event, player) {
        return event.name == 'phaseZhunbei' || get.attitude(player, event.player) < 0;
      },
      filter(event, player) {
        return event.name == 'damage' ? player.storage.mengtianque > 0 : player.storage.mengtianque == 0;
      },
      content() {
        if (trigger.name == 'damage') {
          trigger.num++;
          player.addTempSkill('mengtianque_remove');
        } else {
          player.storage.mengtianque += 2;
        }
      },
      subSkill: {
        remove: {
          onremove(player) {
            player.storage.mengtianque--;
          },
        },
      },
    },
    mengguanyun: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        source: 'damageEnd',
      },
      filter(event, player) {
        if (player.storage.mengtianque <= 0) return false;
        if (!event.player || !event.player.isIn()) return false;
        var evt = event.getParent('phaseUse');
        return event.player.countCards('he') > 0 && evt && evt.player == player;
      },
      logTarget: 'player',
      check(event, player) {
        return get.attitude(player, event.player) < 0;
      },
      content() {
        'step 0';
        player.discardPlayerCard(true, get.prompt('mengguanyun', trigger.player), 'he', trigger.player);
        player.draw();
      },
    },
    //希儿
    mengluandie: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      enable: 'phaseUse',
      usable: 1,
      content() {
        'step 0';
        var list = ['本回合使用【杀】造成的伤害+1', '本回合使用的【杀】不能被响应', '　　　　　摸三张牌　　　　　', '　本回合可以多使用XXX张杀　'];
        for (var i = 0; i < list.length; i++) {
          list[i] = [i, list[i].replace(/XXX/g, player.hp)];
        }
        var next = player.chooseButton([`【乱蝶】:请选择至多${get.cnNumber(player.hp)}项`, [list.slice(0, 1), 'tdnodes'], [list.slice(1, 2), 'tdnodes'], [list.slice(2, 3), 'tdnodes'], [list.slice(3, 4), 'tdnodes']]);
        next.set('forced', true);
        next.set('selectButton', [1, player.hp]);
        next.set('filterButton', function (button) {
          return true;
        });
        next.set('ai', function (button) {
          var player = _status.event.player;
          switch (button.link) {
            case 0:
              return player.countCards('h', 'sha') * 1.5 || player.hp >= 4;
            case 1:
              return player.countCards('h', 'sha') * 1.7 || player.hp >= 4;
            case 2:
              return 4 - player.countCards('h', 'sha') || player.hp >= 4;
            case 3:
              return player.countCards('h', 'sha') + 1 || player.hp >= 4;
          }
        });
        ('step 1');
        for (var i of result.links) {
          game.log(player, '选择了', '#g【乱蝶】', '的', '#y选项' + get.cnNumber(i + 1, true));
          player.addTempSkill('mengluandie_' + (i + 1));
          switch (i) {
            case 0:
              game.log(player, '本回合使用【杀】造成的伤害+1');
              break;
            case 1:
              game.log(player, '本回合使用的【杀】不能被响应');
              break;
            case 2:
              player.draw(3);
              break;
            case 3:
              game.log(player, `本回合可以多使用${get.cnNumber(player.hp)}张杀`);
              break;
          }
        }
      },
      ai: {
        threaten: 1.5,
        order(item, player) {
          if (player.countCards('h', 'tao')) return 1;
          else return 10;
        },
        result: {
          player: 10,
        },
      },
      group: 'mengluandie_sha',
      subSkill: {
        sha: {
          trigger: {
            player: 'shaBegin',
          },
          forced: true,
          content() {
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengluandie_sha' + [1, 2, 3].randomGet());
          },
        },
        1: {
          trigger: {
            source: 'damageBegin1',
          },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && event.notLink();
          },
          forced: true,
          content() {
            game.log('#g【乱蝶】', trigger.card, '造成的伤害+1');
            trigger.num++;
          },
          ai: {
            effect: {
              player(card, player, target) {
                if (card.name == 'sha') return [1, 2];
              },
            },
            damageBonus: true,
          },
        },
        2: {
          trigger: {
            player: 'useCard',
          },
          forced: true,
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          content() {
            game.log('#g【乱蝶】', trigger.card, '不能被响应');
            trigger.directHit.addArray(game.players);
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              return arg.card.name == 'sha';
            },
          },
        },
        3: {
          init(player) {
            player.removeSkill('mengluandie_3');
            //player.draw(3)
          },
        },
        4: {
          init(player) {
            player.storage.mengluandie_4 = player.hp;
          },
          onremove(player) {
            delete player.storage.mengluandie_4;
          },
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha') return num + player.storage.mengluandie_4;
            },
          },
        },
      },
    },
    mengzaixian: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'phaseAfter',
      },
      forced: true,
      filter(event, player) {
        return player.getStat('kill') > 0;
      },
      round: 1,
      content() {
        player.addTempSkill('mengzaixian_buff');
        player.phase('nodelay');
      },
      derivation: ['mengzaixian_buff'],
      group: ['mengzaixian_roundcount'],
    },
    mengzaixian_buff: {
      init(player) {
        game.log(player, '进入了增幅状态');
        player.recover();
        player.draw(Math.min(player.hp, 20));
      },
      charlotte: true,
      onremove(player) {
        game.log(player, '退出了增幅状态');
      },
      ai: {
        unequip: true,
        unequip: true,
        skillTagFilter(player, tag, arg) {
          if (arg && arg.name == 'sha') return true;
          return false;
        },
      },
    },
    //刃
    mengwansi: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'roundStart',
      },
      forced: true,
      content() {
        //QQQ
        'step 0';
        game.playAudio('../extension/忽悠宇宙/audio/skill/mengwansi1.mp3');
        player.chooseTarget('万死', '对一名角色造成1点伤害,将体力值调整至' + Math.ceil(player.maxHp / 2), true).ai = function (target) {
          return get.damageEffect(target, player, player);
        };
        ('step 1');
        if (result.bool) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengwansi2.mp3');
          result.targets[0].damage(player, 'nocard');
          var num = Math.ceil(player.maxHp / 2);
          if (player.hp > num) player.damage(player.hp - num);
          else if (num > player.hp) player.recover(num - player.hp);
        }
      },
    },
    mengdibian: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      enable: 'phaseUse',
      usable: 1,
      prompt: '对自己造成1点伤害,摸已损失体力值数量的牌,且本回合使用杀或普通锦囊牌指定的目标数上限+2.',
      content() {
        'step 0';
        player.damage(1, player);
        ('step 1');
        player.draw(player.getDamagedHp());
        player.addTempSkill('mengdibian_add');
      },
      subSkill: {
        add: {
          charlotte: true,
          trigger: {
            player: 'useCard1',
          },
          forced: true,
          filter(event, player) {
            var info = get.info(event.card, false);
            if (info.allowMultiple == false) return false;
            if (event.card.name != 'sha' && info.type != 'trick') return false;
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
            var num = game.countPlayer(function (current) {
              return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current) && lib.filter.targetInRange(trigger.card, player, current);
            });
            player
              .chooseTarget(`地变:是否为${get.translation(trigger.card)}增加` + (num > 1 ? '至多两个' : '一个') + '目标？', [1, Math.min(2, num)], function (card, player, target) {
                var trigger = _status.event.getTrigger();
                var card = trigger.card;
                return !trigger.targets.includes(target) && lib.filter.targetEnabled2(card, player, target) && lib.filter.targetInRange(card, player, target);
              })
              .set('ai', function (target) {
                var player = _status.event.player;
                var card = _status.event.getTrigger().card;
                return get.effect(target, card, player, player);
              });
            ('step 1');
            if (result.bool) {
            } else event.finish();
            ('step 2');
            var targets = result.targets.sortBySeat();
            trigger.targets.addArray(targets);
          },
        },
      },
      ai: {
        order: 10,
        result: {
          player(player) {
            if (player.hp > 1 || player.countCards('hs', 'tao')) return 1;
          },
        },
      },
    },
    mengenci: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      marktext: '赐',
      intro: {
        name: '恩赐',
        name2: '赐',
        content: '当前有#枚<赐>',
      },
      trigger: {
        player: 'damageEnd',
      },
      forced: true,
      content() {
        'step 0';
        if (player.countMark('mengenci') < 5) {
          game.log(player, '发动了', '#g【恩赐】');
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengenci' + [1, 2].randomGet());
          player.addMark('mengenci', 1);
          player.markSkill('mengenci');
        }
        ('step 1');
        if (trigger.source && trigger.source.isIn() && player.countMark('mengenci') > player.hp) {
          player
            .chooseBool(`是否对${get.translation(trigger.source)}造成1点伤害并回复1点体力？`)
            .set('ai', function () {
              var player = _status.event.player,
                source = _status.event.source;
              if (source == player) return false;
              return -get.attitude(player, source);
            })
            .set('source', trigger.source);
        } else event.finish();
        ('step 2');
        if (result.bool) {
          game.log(player, '对', trigger.source, '发动了', '#g【恩赐】');
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengenci' + [3, 4].randomGet());
          trigger.source.damage('nocard');
          player.recover();
        }
      },
      group: 'mengenci_damage',
      subSkill: {
        damage: {
          trigger: {
            source: 'damageBegin1',
          },
          filter(event, player) {
            return player.countMark('mengenci') > 0;
          },
          prompt2(event, player) {
            var str = player.countMark('mengenci');
            return `是否移去所有<赐>令<${get.translation(event.player)}>受到的伤害改为${str}？`;
          },
          check(event, player) {
            if (event.player == player) return false;
            return player.countMark('mengenci') > 1 && get.attitude(player, event.player) < 0;
          },
          content() {
            'step 0';
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengenci' + [5, 6].randomGet());
            var num = player.countMark('mengenci');
            player.removeMark('mengenci', num);
            player.unmarkSkill('xyenci');
            game.log('#g【恩赐】', '伤害值改为', num);
            trigger.num = num;
          },
        },
      },
    },
    //布洛妮娅
    mengzhenjun: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'phaseUseEnd',
      },
      filter(event, player) {
        return player.countCards('he') > 0;
      },
      forced: true,
      content() {
        'step 0';
        player.chooseCardTarget({
          prompt: get.prompt('mengzhenjun'),
          filterCard(card) {
            return true;
          },
          position: 'he',
          filterTarget(card, player, target) {
            return target != player;
          },
          ai1(card) {
            if (get.color(card) == 'red') return 10 - get.value(card);
            if (get.color(card) == 'black') return 8 - get.value(card);
          },
          ai2(target) {
            var player = _status.event.player;
            if (get.attitude(player, target) > 4) {
              var num = get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1);
              if (target.isTurnedOver()) num += 2;
              if (target.countCards('j') > 0) num++;
              if (target.isLinked()) num++;
              return num;
            }
            return false;
          },
        });
        ('step 1');
        if (result.bool) {
          event.target = result.targets[0];
          player.discard(result.cards);
          if (event.target.canhyyzJinghua()) {
            event.target.hyyzJinghua();
          } else event.target.draw(2);
        } else {
          event.finish();
        }
        ('step 2');
        var next = event.target.phaseUse();
        event.next.remove(next);
        trigger.getParent('phase').next.push(next);
      },
      ai: {
        expose: 0.5,
      },
    },
    mengzhenqu: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'phaseUseBegin',
      },
      filter(event, player) {
        return player.countCards('he') >= 2 && event.player != player;
      },
      round: 1,
      forced: true,
      content() {
        'step 0';
        player
          .chooseCard('he', [2, Infinity], get.prompt('mengzhenqu', trigger.player))
          .set('ai', function (card) {
            var player = _status.event.player,
              target = _status.event.targetx;
            if (get.attitude(player, target) < 4) return -1;
            if (ui.selected.cards.length) {
              return get.color(card) == 'black' && _status.event.targetx.getUseValue(card) > 0;
            } else return get.color(card) == 'red' && _status.event.targetx.getUseValue(card) > 0;
          })
          .set('targetx', trigger.player)
          .set('prompt2', '交出的牌不能被响应,包含两种颜色可为其增伤');
        ('step 1');
        if (result.bool) {
          var list = result.cards;
          if (list.some((card) => get.color(card) == 'red') && list.some((card) => get.color(card) == 'black')) {
            trigger.player.addTempSkill('mengzhenqu_add');
          }
          trigger.player.gain(list, 'giveAuto').gaintag.add('mengzhenqu');
          list.gaintag = ['mengzhenqu'];
        } else event.finish();
        ('step 2');
        player.drawTo(player.maxHp);
        trigger.player.addSkill('mengzhenqu_dir');
      },
      subSkill: {
        add: {
          silent: true,
          charlotte: true,
          forced: true,
          popup: false,
          name: '阵曲+',
          mark: true,
          marktext: '+',
          intro: {
            name: '阵曲',
            content: '下次造成的伤害+1',
          },
          trigger: {
            source: 'damageBegin1',
          },
          forced: true,
          content() {
            game.trySkillAudio('xtfengjin_2', player);
            trigger.num++;
            game.log('#g【阵曲】', '此伤害+1');
            player.removeSkill('mengzhenqu_add');
          },
          ai: {
            effect: {
              player(card, player, target) {
                if (get.tag(card, 'damage')) {
                  if (player.hasSkillTag('jueqing', false, target)) return;
                  return [1, 2];
                }
              },
            },
          },
        },
        dir: {
          name: '阵曲',
          forced: true,
          trigger: {
            player: 'useCard',
          },
          filter(event, player) {
            if (!event.card || !(get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name)))) return false;
            return event.player.hasHistory('lose', function (evt) {
              if (evt.parent != event) return false;
              for (var i in evt.gaintag_map) {
                if (evt.gaintag_map[i].includes('mengzhenqu')) return true;
              }
              return false;
            });
          },
          content() {
            trigger.directHit.addArray(game.filterPlayer());
          },
          mod: {
            aiOrder(player, card, num) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('mengzhenqu')) return num + 0.5;
            },
          },
          ai: {
            directHit_ai: true,
          },
        },
      },
      group: ['mengzhenqu_roundcount'],
    },
    mengjunzhen: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      zhuSkill: true,
      trigger: {
        global: 'damageBegin1',
      },
      filter(event, player) {
        if (!player.hasZhuSkill('mengjunzhen')) return false;
        if (!event.source || event.source == player || event.source.group != 'hyyz_xt') return false;
        return player.countCards('he');
      },
      forced: true,
      content() {
        'step 0';
        var str = '重铸一张牌';
        event.bool = [];
        if (trigger.card && trigger.card.suit) {
          str += `,若重铸${get.translation(trigger.card.suit)}牌则伤害+1`;
        }
        var next = player.chooseCard('he', get.prompt('mengjunzhen', trigger.source), str);
        next.set('ai', function (card) {
          var suit = _status.event.suitx;
          if (suit && card.suit && suit == card.suit && _status.event.att > 0) return -10;
          else return 8 - get.value(card);
        });
        next.set('att', get.attitude(player, trigger.player));
        next.set('suitx', trigger.card.suit || null);
        ('step 1');
        if (result.bool) {
          var cards = result.cards;
          player.recast(cards);
          if (trigger.card.suit && cards[0].suit == trigger.card.suit) {
            game.log('#g【军阵】', '重铸牌和伤害牌的花色相同,此伤害+1');
            trigger.num++;
          }
        } else event.finish();
      },
    },
    //杰帕德
    mengyuhan: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        source: 'damageSource',
      },
      filter(event, player) {
        return event.player && event.player.isIn();
      },
      forced: true,
      logTarget: 'player',
      content() {
        'step 0';
        trigger.player.judge(function (card) {
          var color = get.color(card);
          if (color == 'black') return 4;
          return 0;
        });
        ('step 1');
        if (result.color == 'black') {
          trigger.player.addhyyzBuff('hyyzBuff_dongjie');
          player.draw();
        }
      },
    },
    mengjianyi: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      enable: 'phaseUse',
      usable: 1,
      prompt2: '令任意名角色将护甲补充至2,并获得〖坚毅〗',
      filterCard(card) {
        for (var i of ui.selected.cards) {
          if (i.suit == card.suit) return false;
        }
        return true;
      },
      complexSelect: true,
      complexCard: true,
      complexTarget: true,
      selectCard: [1, 4],
      filterTarget: true,
      position: 'he',
      selectTarget() {
        return ui.selected.cards.length;
      },
      targetprompt(target) {
        var num = Math.ceil(_status.event.player.maxHp / 2);
        if (target.hujia >= num) return '护甲不变';
        else return '护甲+' + (num - target.hujia);
      },
      check(card) {
        var player = _status.event.player;
        var num = game.countPlayer(function (current) {
          if (get.attitude(player, current) > 0) {
            if (current == player && player.hujia < Math.ceil(player.maxHp / 2)) return true;
            if (!current.hasSkill('mengjianyi_buff')) return true;
            if (current.hp + current.hujia < 3) return true;
          }
        });
        if (num > 0) {
          if (ui.selected.cards.length < num) return 10 - get.value(card) && (get.type(card) == 'equip' || true);
        }
        return -1;
      },
      content() {
        'step 0';
        var num = Math.ceil(player.maxHp / 2);
        for (var i of targets) {
          if (i.hujia < num) i.changeHujia(num - i.hujia);
          i.addSkill('mengjianyi_buff');
        }
      },
      derivation: ['mengjianyi_buff'],
      ai: {
        order: 8,
        result: {
          target(player, target) {
            if (get.attitude(player, target) > 0) {
              if (target == player && player.hujia < Math.ceil(player.maxHp / 2)) return 3;
              if (!target.hasSkill('mengjianyi_buff')) return 3;
              if (target.hujia + target.hp < 3) return 2;
              return 0;
            }
          },
        },
      },
    },
    mengjueyi: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      enable: 'chooseToUse',
      mark: true,
      limited: true,
      filter(event, player) {
        return event.type == 'dying' && player == event.dying;
      },
      content() {
        'step 0';
        player.awakenSkill('mengjueyi');
        if (player.hp < 1) player.recover(1 - player.hp);
        ('step 1');
        player.changeHujia(2);
        player.addSkill('mengjianyi_buff');
        ('step 2');
        var cards = [];
        for (var i of lib.suit) {
          var card = get.cardPile2(function (card) {
            return card.suit == i;
          });
          if (card) cards.push(card);
        }
        if (cards.length) player.gain(cards, 'gain2');
      },
      ai: {
        order: 1,
        skillTagFilter(player, arg, target) {
          if (player != target || player.storage.mengjueyi) return false;
        },
        save: true,
        result: {
          player(player) {
            if (player.hp <= 0) return 10;
            return 0;
          },
        },
        threaten(player, target) {
          if (!target.storage.mengjueyi) return 0.6;
        },
      },
      intro: {
        content: 'limited',
      },
      init(player, skill) {
        player.storage[skill] = false;
      },
    },
    mengjianyi_buff: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      init(player) {
        game.log('#g【坚毅】', player, '被赋予〖坚毅〗');
        player.disableEquip('equip1');
        player.disableEquip('equip2');
        player.disableEquip('equip3');
        player.disableEquip('equip4');
        player.disableEquip('equip5');
        player.disableJudge();
        player
          .when('changeHujiaAfter')
          .filter(() => !player.hujia)
          .then(() => player.removeSkill('mengjianyi_buff'));
      },
      onremove(player) {
        game.log('#g【坚毅】', player, '被移除〖坚毅〗');
        player.enableEquip('equip1');
        player.enableEquip('equip2');
        player.enableEquip('equip3');
        player.enableEquip('equip4');
        player.enableEquip('equip5');
        player.enableJudge();
      },
      mark: true,
      marktext: '🔰',
      intro: {
        name: '坚毅',
        content: '锁定技,获得/失去此技能时,你废除/回复装备区和判定区.<br>①1.摸牌阶段,你多摸一张牌.</br>2.你的手牌上限+1,使用【杀】的次数上限+1,攻击范围+1.</br>3.当你受到伤害时,此伤害改为1.</br>4.当你失去所有护甲后,失去此效果.',
      },
      trigger: {
        player: ['damageBegin3', 'phaseDrawBegin2'],
      },
      silent: true,
      popup: false,
      forced: true,
      charlotte: true,
      filter(event, player) {
        return event.name == 'damage' || !event.numFixed;
      },
      content() {
        if (trigger.name == 'damage') {
          if (player.name == 'meng_jiepade') {
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengjianyi_buff' + [3, 4].randomGet());
          } else {
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengjianyi_buff2.mp3');
          }
          trigger.num = 1;
        } else {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengjianyi_buff1.mp3');
          trigger.num++;
        }
      },
      mod: {
        attackFrom(from, to, distance) {
          if (from.hujia > 0) return distance - 1;
        },
        cardUsable(card, player, num) {
          if (card.name == 'sha') return num + 1;
        },
        maxHandcard(player, num) {
          return num + 1;
        },
      },
    },
    //希尔德
    menghengyue: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      mod: {
        attackRangeBase(player) {
          if (player.getEquip(1)) return 2;
        },
        globalFrom(from, to, distance) {
          if (_status.currentPhase == from) {
            return distance - from.storage.menghengyue1;
          }
        },
      },
      init(player) {
        player.storage.menghengyue = [];
        player.storage.menghengyue1 = 0;
      },
      intro: {
        name: '横跃',
        content: '已记录花色:$',
      },
      forced: true,
      trigger: {
        player: 'useCardAfter',
      },
      filter(event, player) {
        var suit = event.card.suit;
        if (!lib.suit.includes(suit)) return false;
        if (player.storage.menghengyue && player.storage.menghengyue.includes(suit)) return false;
        return _status.currentPhase == player;
      },
      content() {
        'step 0';
        player.markAuto('menghengyue', [trigger.card.suit]);
        player.storage.menghengyue1++;
        ('step 1');
        var players = game.filterPlayer((current) => current != player && get.distance(player, current) == 1 && current.countCards('he') > 0);
        if (players.length) {
          if (players.length > 1)
            player
              .chooseTarget(true, '横跃', '获得其一张牌,摸一张牌并交给其一张牌', function (card, player, target) {
                return target != player && get.distance(player, target) == 1 && target.countCards('he');
              })
              .set('ai', function (target) {
                return -get.attitude(_status.event.player, target) * Math.sqrt(1 + target.countCards('he'));
              });
          else event._result = { bool: true, targets: players };
        } else {
          game.log('#g【横跃】', '没有距离为1且有牌的其他角色');
          event.finish();
        }
        ('step 2');
        event.target = result.targets[0];
        if (event.target.countCards('he')) player.gainPlayerCard(event.target, true, 'he');
        player.draw();
        player.chooseCard(true, `交给${get.translation(event.target)}一张牌`, 'he');
        ('step 3');
        event.target.gain(result.cards, player, 'giveAuto');
      },
      group: 'menghengyue_summer',
      subSkill: {
        summer: {
          trigger: {
            player: 'phaseAfter',
          },
          silent: true,
          filter(event, player) {
            return player == _status.currentPhase;
          },
          content() {
            player.storage.menghengyue = [];
            player.storage.menghengyue1 = 0;
            player.unmarkSkill('menghengyue');
          },
          forced: true,
          popup: false,
        },
      },
    },
    mengguanyang: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      enable: 'chooseToUse',
      filter(event, player) {
        return player.storage.menghengyue1 && player.storage.menghengyue1 > 0 && player.countCards('he') >= player.storage.menghengyue1;
      },
      filterCard: true,
      selectCard() {
        return _status.event.player.storage.menghengyue1;
      },
      usable: 1,
      position: 'hes',
      viewAs: {
        name: 'sha',
        storage: {
          mengguanyang: true,
        },
      },
      check(card) {
        var player = _status.event.player;
        return 7 - get.useful(card);
      },
      precontent() {
        event.parent.addCount = false;
      },
      mod: {
        targetInRange(card) {
          if (card.storage && card.storage.mengguanyang) return true;
        },
        cardUsable(card, player, num) {
          if (card.storage && card.storage.mengguanyang) return Infinity;
        },
      },
      group: ['mengguanyang_shan', 'mengguanyang_used'],
      subSkill: {
        shan: {
          trigger: {
            player: 'useCardToPlayered',
          },
          filter(event, player) {
            return event.target.hp >= player.hp && event.card && event.card.storage.mengguanyang && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
          },
          forced: true,
          popup: false,
          content() {
            'step 0';
            game.log('#g【贯杨】', '此杀需要两张闪才能抵消');
            ('step 1');
            var id = trigger.target.playerid;
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
              if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
            },
          },
        },
        used: {
          trigger: {
            player: 'useCardAfter',
          },
          charlotte: true,
          forced: true,
          filter(event, player) {
            if (!event.card.storage || !event.card.storage.mengguanyang) return false;
            return game.hasPlayer(function (current) {
              return current.hasHistory('damage', (evt) => evt.card == event.card) && get.distance(player, current) == 1;
            });
          },
          content() {
            'step 0';
            var targets = game.filterPlayer((current) => {
              return current.hasHistory('damage', (evt) => evt.card == trigger.card) && get.distance(player, current) == 1;
            });
            for (var i of targets) {
              if (i.countCards('h') > i.hp) {
                i.addhyyzBuff('hyyzBuff_jiansu');
              }
            }
          },
        },
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
    //停云
    mengfuyao: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        global: 'damageEnd',
      },
      forced: true,
      usable: 2,
      filter(event, player) {
        if (event.player == player || (event.source && event.source == player)) return true;
        if (player.storage.mengcifu && (event.player == player.storage.mengcifu || (event.source && event.source == player.storage.mengcifu))) return true;
        return false;
      },
      content() {
        player.draw();
        if (player.storage.mengcifu && player != player.storage.mengcifu) player.storage.mengcifu.draw();
      },
    },
    mengcifu: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      init(player) {
        player.storage.mengcifu = undefined;
      },
      trigger: {
        global: 'phaseBefore',
        player: ['enterGame', 'phaseUseBegin'],
      },
      filter(event, player) {
        if (event.name == 'phaseUse') return true;
        else return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0);
      },
      forced: true,
      content() {
        'step 0';
        player.chooseTarget(get.prompt2('mengcifu')).set('ai', function (target) {
          return get.attitude(_status.event.player, target) > 4 && get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1) > 0;
        });
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          player.line(target, 'green');
          player.storage.mengcifu = target;
        }
      },
      mark: true,
      marktext: '赐福',
      intro: {
        name: '被赐福的角色',
        mark(dialog, content, player) {
          dialog.add([content]);
          dialog.addText(get.translation(content.name));
        },
      },
      group: 'mengcifu_cifu',
      subSkill: {
        cifu: {
          trigger: {
            global: 'useCardToPlayered',
          },
          filter(event, player) {
            if (!player.storage.mengcifu || !event.targets) return false;
            if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return false;
            return player.countCards('he') > 0 && player.storage.mengcifu == event.player && event.targets.length == 1;
          },
          forced: true,
          content() {
            'step 0';
            player.chooseToDiscard(`是否弃置一张牌令${get.translation(trigger.player)}强化${get.translation(trigger.card)}？`).set('ai', function (card) {
              var trigger = _status.event.getTrigger();
              var player = _status.event.player;
              if (get.tag(trigger.card, 'damage') > 0 || (trigger.card.name == 'tao' && trigger.player.getDamagedHp() > 1)) return 8 - get.value(card);
            });
            ('step 1');
            if (result.bool) {
              if (!get.tag(trigger.card, 'damage') && !get.tag(trigger.card, 'recover')) {
                event._result = { bool: true, index: 0 };
              } else {
                trigger.player.chooseControl('强命', `令${get.translation(trigger.card)}的伤害值与回复量+1`, true).set('ai', function () {
                  var trigger = _status.event.getTrigger();
                  var player = _status.event.player;
                  if (trigger.card.name == 'tao' && trigger.player.getDamagedHp() > 1) return 1;
                  return Math.random() < 0.8 ? 0 : 1;
                });
              }
            } else event.finish();
            ('step 2');
            if (result.index == 0) {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengcifu_cifu1.mp3');
              trigger.parent.directHit.addArray(game.filterPlayer());
              game.log('#g【赐福】', trigger.card, '不能被响应');
            } else {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengcifu_cifu2.mp3');
              trigger.targets[0].addTempSkill('mengcifu_add');
              trigger.targets[0].storage.mengcifu_add = {
                card: trigger.card,
              };
              game.log('#g【赐福】', trigger.card, '的伤害值/回复值+1');
            }
          },
        },
        add: {
          onremove(player) {
            delete player.storage.mengcifu_add;
          },
          trigger: {
            player: ['damageBegin1', 'recoverBegin'],
          },
          filter(event, player) {
            var info = player.storage.mengcifu_add;
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
      },
    },
    mengyidao: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'phaseJieshuBegin',
      },
      filter(event, player) {
        return player.countCards('he') > 0;
      },
      forced: true,
      content() {
        'step 0';
        var str = '弃置一张牌,令一名角色摸一张牌';
        if (player.storage.mengcifu && player.storage.mengcifu != player)
          ((str += `,或令${get.translation(player.storage.mengcifu)}摸三张牌`),
            player.chooseCardTarget({
              prompt: get.prompt('mengyidao'),
              prompt2: str,
              filterCard: lib.filter.cardDiscardable,
              position: 'he',
              filterTarget: true,
              ai1(card) {
                return 7 - get.value(card);
              },
              ai2(target) {
                var att = get.attitude(_status.event.player, target);
                if (target == _status.event.player.storage.mengcifu && target != player) att *= 3;
                return att;
              },
            }));
        ('step 1');
        if (result.bool) {
          player.discard(result.cards);
          var target = result.targets[0];
          if (target == player.storage.mengcifu && target != player) target.draw(3);
          else target.draw();
        }
      },
    },
    //克拉拉
    mengdaijia: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'phaseZhunbeiBegin',
      },
      check(event, player) {
        var num = game.countPlayer(function (current) {
          return current != player && get.attitude(player, current) > 3 && player.hp > current.hp;
        });
        if (num <= 0) return false;
        if (get.attitude(player, event.player) < -2) {
          var cards = player.getCards('h');
          if (cards.length > player.hp) return true;
          if (Array.isArray(cards))
            for (var i of cards) {
              var useful = get.useful(i);
              if (useful < 5 || (i.number > 9 && useful < 7)) return true;
            }
        }
        return false;
      },
      logTarget: 'player',
      filter(event, player) {
        return player.canCompare(event.player) && !player.hasSkill('mengdaijia_no');
      },
      content() {
        'step 0';
        player.chooseToCompare(trigger.player, function (card) {
          var player = get.owner(card);
          var target = _status.event.parent.target;
          if (target != player && get.attitude(player, target) < 0 && game.hasPlayer((current) => current != target && get.attitude(target, current) > 4 && current.hp < target.hp)) return -card.number;
        });
        ('step 1');
        if (result.bool) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengdaijia3.mp3');
          trigger.player.addTempSkill('mengdaijia_me');
          trigger.player.storage.xtshengjia_me = player;
          player.addSkill('mengdaijia_no');
        } else {
          trigger.player.addSkillLog('xtjinggao');
          player.damage(trigger.player);
        }
      },
      subSkill: {
        no: {
          mark: true,
          intro: {
            content: '不能再发动代价',
          },
          trigger: {
            global: 'roundStart',
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          content() {
            player.removeSkill('mengdaijia_no');
          },
        },
        me: {
          mod: {
            playerEnabled(card, player, target) {
              if (player.storage.xtshengjia_me != target && (!get.info(card) || !get.info(card).singleCard || !ui.selected.targets.length)) return false;
            },
          },
          mark: true,
          intro: {
            content(player, storage) {
              return `只能对${get.translation(storage)}使用牌`;
            },
          },
        },
      },
    },
    mengweijia: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      mod: {
        maxHandcard(player, num) {
          return (
            num +
            game.countPlayer(function (current) {
              if (player != current && current.hasSkill('xtjinggao')) return 1;
            })
          );
        },
      },
      trigger: {
        player: 'damageEnd',
      },
      filter(event, player) {
        return event.source && event.source != player;
      },
      prompt2: '对伤害来源造成1点伤害,并令其获得<警告>？',
      check(event, player) {
        if (get.attitude(player, event.source) > 0) return false;
        return get.damageEffect(event.player, player, player);
      },
      content() {
        'step 0';
        trigger.source.damage(player);
        ('step 1');
        trigger.source.addSkillLog('xtjinggao');
      },
      group: 'mengweijia_other',
      subSkill: {
        other: {
          trigger: {
            player: 'damageEnd',
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          content() {
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengweijia_other' + [1, 2].randomGet());
          },
        },
      },
      ai: {
        maixie_defend: true,
        threaten: 0.85,
        effect: {
          target(card, player, target) {
            if (player.hasSkillTag('jueqing', false, target)) return;
            return [1, 0, 0, player.hp == 1 ? -1.2 : -0.8];
          },
        },
      },
    },
    mengruyue: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      trigger: {
        source: 'damageBegin1',
      },
      filter(event, player) {
        return event.player.hasSkill('xtjinggao');
      },
      forced: true,
      content() {
        'step 0';
        player
          .chooseControl('移去<警告>加伤并摸牌', '回复1点体力', '取消')
          .set('prompt', get.prompt('mengruyue'))
          .set('ai', () => (player.hp <= 2 ? 1 : 0));
        ('step 1');
        if (result.index == 0) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengruyue' + [1, 2].randomGet());
          game.log(player, '对', trigger.player, '发动了', '#g【如约】');
          game.log(player, '选择了', '#y' + result.control, '的效果');
          trigger.player.removeSkill('xtjinggao');
          trigger.num++;
          player.draw();
        } else if (result.index == 1) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengruyue' + [3, 4].randomGet());
          game.log(player, '发动了', '#g【如约】');
          game.log(player, '选择了', '#y' + result.control, '的效果');
          player.recover();
        }
      },
    },
    xtjinggao: {
      mark: true,
      marktext: '警',
      intro: {
        name: '史瓦罗在看着你',
        content: '你的手牌上限-1,你视为在克拉拉的攻击范围内',
      },
      charlotte: true,
      mod: {
        maxHandcard(player, num) {
          return num - 1;
        },
        inRangeOf(source, player) {
          var targets = game.filterPlayer(function (current) {
            return current.hasSkill('mengruyue');
          });
          if (targets.includes(source)) return true;
        },
      },
    },
    //神停云
    shenfuyao: {
      nobracket: true,
      audio: 'mengfuyao',
      trigger: {
        global: 'damageEnd',
      },
      filter(event, player) {
        if (player.hasSkill('shenfuyao_usable')) return false;
        var card = {
          name: 'sha',
          nature: 'thunder',
        };
        return player.countCards('he') > 0 && player.canUse(card, event.player, false) && event.player.isIn();
      },
      forced: true,
      content() {
        'step 0';
        var card = {
          name: 'sha',
          nature: 'thunder',
        };
        player
          .chooseToDiscard('he', `是否弃置一张牌,视为对${get.translation(trigger.player)}使用一张雷【杀】？`)
          .set('ai', function (card) {
            if (get.attitude(_status.event.player, _status.event.targetx) < 0) return 8 - get.value(card);
          })
          .set('targetx', trigger.player);
        ('step 1');
        if (result.bool) {
          player.addTempSkill('shenfuyao_usable');
          var card = {
            name: 'sha',
            nature: 'thunder',
          };
          player.useCard(card, trigger.player, false);
        } else event.finish();
      },
      group: 'shenfuyao_add',
      subSkill: {
        usable: {
          charlotte: true,
        },
        add: {
          trigger: {
            player: 'useCardToTargeted',
          },
          forced: true,
          filter(event, player) {
            return event.getParent(2).name == 'shenfuyao' && event.getParent(5).source && event.getParent(5).source.hasSkill('shencifu_cifu');
          },
          content() {
            var map = trigger.customArgs;
            var id = trigger.target.playerid;
            if (!map[id]) map[id] = {};
            if (!map[id].extraDamage) map[id].extraDamage = 0;
            map[id].extraDamage++;
          },
        },
      },
    },
    shencifu: {
      nobracket: true,
      audio: 'mengcifu',
      trigger: {
        player: 'phaseUseBegin',
      },
      forced: true,
      filter(event, player) {
        return game.hasPlayer(function (current) {
          return current != player && current.countCards('h') > 0;
        });
      },
      content() {
        'step 0';
        player.chooseTarget(get.prompt2('shencifu')).set('ai', function (target) {
          return get.attitude(_status.event.player, target) > 4;
        });
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          target.addSkillLog('shencifu_cifu');
          target.addMark('shencifu_cifu', 3);
        } else event.finish();
      },
      group: 'shencifu_draw',
      subSkill: {
        cifu: {
          init(player) {
            player.storage.shencifu_cifu2 = [];
          },
          name: '赐福',
          mark: true,
          marktext: '赐福',
          intro: {
            name: '赐福',
            name2: '祝愿',
            content: '你成为停云赐福的对象</br>剩余#枚<祝愿>',
          },
          trigger: {
            player: 'useCard1',
          },
          filter(event, player) {
            if (player.countMark('shencifu_cifu') < 1) return false;
            if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay' || event.card.name == 'shan') return false;
            return true;
          },
          filter1(event, player) {
            var card = event.card;
            var info = get.info(card);
            if (info.allowMultiple == false) return false;
            if (event.targets && !info.multitarget) {
              if (
                game.hasPlayer(function (current) {
                  return !event.targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && lib.filter.targetInRange(card, player, current);
                })
              ) {
                return true;
              }
            }
            return false;
          },
          filter2(event, player) {
            if (!get.tag(event.card, 'damage') && !get.tag(event.card, 'recover')) return false;
            return player.hasHistory('lose', function (evt) {
              if (evt.parent != event) return false;
              for (var i in evt.gaintag_map) {
                if (evt.gaintag_map[i].includes('shenyidao')) return false;
              }
              return true;
            });
          },
          forced: true,
          content() {
            'step 0';
            var list = ['　为XXX多选择一个目标　', '令XXX的伤害值与回复量+1'],
              card = get.translation(trigger.card);
            for (var i = 0; i < list.length; i++) {
              list[i] = [i, list[i].replace(/XXX/g, card)];
            }
            var next = player.chooseButton(['赐福:是否弃置一枚<祝愿>并选择一项', [list.slice(0, 2), 'tdnodes']]);
            next.set('forced', false);
            next.set('selectButton', [1, 1]);
            next.set('filterButton', function (button) {
              if (button.link == 0) return _status.event.bool1;
              if (button.link == 1) return _status.event.bool2;
            });
            next.set('bool1', lib.skill.shencifu_cifu.filter1(trigger, player));
            next.set('bool2', lib.skill.shencifu_cifu.filter2(trigger, player));
            next.set('ai', function (button) {
              var player = _status.event.player;
              var event = _status.event.getTrigger();
              switch (button.link) {
                case 0: {
                  if (
                    game.hasPlayer(function (current) {
                      return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current) && get.effect(current, event.card, player, player) > 0;
                    })
                  )
                    return 2 * Math.random();
                  return 0;
                }
                case 1: {
                  if (event.targets[0].hp < 2 && get.tag(event.card, 'recover')) return 2 + Math.random;
                  return (get.tag(event.card, 'damage') * 2 || 0) + Math.random() + 1;
                }
              }
            });
            ('step 1');
            if (result.links?.length) {
              if (result.links[0] == 0) {
                var str = `请选择${get.translation(trigger.card)}的额外目标`;
                player
                  .chooseTarget(str, function (card, player, target) {
                    var player = _status.event.player;
                    if (_status.event.targets.includes(target)) return false;
                    return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
                  })
                  .set('card', trigger.card)
                  .set('ai', function (target) {
                    var trigger = _status.event.getTrigger();
                    var player = _status.event.player;
                    return get.effect(target, trigger.card, player, player);
                  })
                  .set('targets', trigger.targets);
              } else {
                player.removeMark('shencifu_cifu', 1);
                player.storage.shencifu_cifu2.add(trigger.card);
                game.playAudio('../extension/忽悠宇宙/audio/skill/mengcifu_cifu2.mp3');
                trigger.baseDamage++;
                game.log('#g【赐福】', trigger.card, '的伤害值/回复值+1');
                event.finish();
              }
            } else event.finish();
            ('step 2');
            if (result.targets?.length) {
              player.removeMark('shencifu_cifu', 1);
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengcifu_cifu1.mp3');
              player.storage.shencifu_cifu2.add(trigger.card);
              game.log('#g【赐福】', result.targets, '成为', trigger.card, '的额外目标');
              trigger.targets.addArray(result.targets);
            }
          },
        },
        draw: {
          trigger: {
            global: 'damageEnd',
          },
          forced: true,
          _priority: 2,
          filter(event, player) {
            if (!event.source || !event.card || !event.source.isIn()) return false;
            return event.source.hasSkill('shencifu_cifu') && event.source.storage.shencifu_cifu2.includes(event.card);
          },
          content() {
            game.log('#g【赐福】', trigger.card, '造成伤害,施放和接受', '#g【赐福】', '的角色各摸一张牌');
            trigger.source.draw();
            player.draw();
          },
        },
      },
    },
    shenyidao: {
      nobracket: true,
      audio: 'mengyidao',
      enable: 'phaseUse',
      usable: 1,
      filterCard: true,
      filter(card, player) {
        return player.countCards('he') > 0;
      },
      position: 'he',
      filterTarget: true,
      check(card) {
        return 7 - get.value(card);
      },
      content() {
        'step 0';
        player.turnOver();
        ('step 1');
        var cards = [];
        for (var i = 0; i < 3; i++) {
          var card = get.cardPile2(function (card) {
            return !cards.includes(card) && (card.name == 'sha' || (get.type(card) == 'trick' && get.tag(card, 'damage') > 0));
          });
          if (card) {
            cards.push(card);
          } else break;
        }
        if (cards) {
          target.gain(cards, 'gain2').gaintag.add('shenyidao');
          target.addSkill('shenyidao_dir');
        }
      },
      subSkill: {
        dir: {
          trigger: {
            player: 'useCard',
          },
          forced: true,
          filter(event, player) {
            if (!event.card || !(get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name)))) return false;
            return event.player.hasHistory('lose', function (evt) {
              if (evt.parent != event) return false;
              for (var i in evt.gaintag_map) {
                if (evt.gaintag_map[i].includes('shenyidao')) return true;
              }
              return false;
            });
          },
          content() {
            trigger.directHit.addArray(game.filterPlayer());
          },
          mod: {
            targetInRange(card, player, target) {
              if (!card.cards) return;
              for (var i of card.cards) {
                if (i.hasGaintag('shenyidao')) return true;
              }
            },
            cardUsable(card, player, target) {
              if (!card.cards) return;
              for (var i of card.cards) {
                if (i.hasGaintag('shenyidao')) return Infinity;
              }
            },
            aiOrder(player, card, num) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('shenyidao')) return num + 0.5;
            },
          },
          ai: {
            directHit_ai: true,
          },
        },
      },
    },
    //三月七
    mengchunjie: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'phaseUseBegin',
      },
      forced: true,
      content() {
        'step 0';
        player.chooseTarget(get.prompt('mengchunjie')).set('ai', function (target) {
          var player = _status.event.player;
          var att = get.attitude(_status.event.player, target);
          if (target == player && player.hp + player.hujia < 2) return 1;
          if (att > 0) {
            if (!target.hujia) att += 2;
            if (target.hp == 1) att++;
            if (!target.countCards('h') && target.hp == 2) att++;
            return att;
          } else return -1;
        });
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          target.hyyzJinghua();
          if (target.hujia < 5) {
            target.changeHujia(Math.min(2, 5 - target.hujia));
          }
          target.addSkillLog('mengkeai');
        }
      },
      derivation: ['mengkeai'],
      ai: {
        order: 2,
        expose: 0.2,
      },
    },
    menghuyou: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'damageEnd',
      },
      forced: true,
      filter(event, player) {
        return event.hujia && event.player.isIn() && event.source && event.source != player && event.source.isIn() && player.countCards('he') > 0;
      },
      content() {
        'step 0';
        player
          .chooseCard(1, 'he', get.prompt('menghuyou', trigger.source), `重铸一张牌,视为对${get.translation(trigger.source)}使用无视防具的冰【杀】`)
          .set('goon', get.attitude(player, trigger.source) > 0)
          .set('ai', function (card) {
            if (_status.event.goon) return 0;
            return 10 - get.value(card);
          });
        ('step 1');
        if (result.bool) {
          var target = trigger.source;
          player.recast(result.cards);
          var card = {
            name: 'sha',
            nature: 'ice',
          };
          if (player.canUse(card, target, false)) player.useCard(card, false, target).card.menghuyou = true;
        }
      },
      group: 'menghuyou_sha',
      subSkill: {
        sha: {
          audio: 'ext:忽悠宇宙/audio/skill:2',
          trigger: {
            player: 'useCardAfter',
          },
          filter(event, player) {
            return event.card && event.card.menghuyou == true;
          },
          forced: true,
          content() {
            if (
              player.getHistory('sourceDamage', function (evt) {
                return evt.card == trigger.card;
              }).length
            ) {
              for (var i of trigger.targets) {
                i.addhyyzBuff('hyyzBuff_dongjie');
              }
            } else player.draw();
          },
        },
      },
      ai: {
        expose: 0.2,
        unequip: true,
        skillTagFilter(player, tag, arg) {
          if (!arg || !arg.card || arg.card.menghuyou != true) return false;
        },
      },
    },
    mengkeai: {
      mark: true,
      marktext: '萌',
      intro: {
        name: '可爱',
        content: '你要可爱出血啦,别人忍不住来rua你',
      },
      trigger: {
        global: 'damageBegin3',
      },
      check(event, player) {
        if (get.attitude(player, event.player) < 4) return false;
        return player.hujia > 0 || (player.hp > event.player.hp && player.hp + player.countCards('h', 'tao') < event.num);
      },
      filter(event, player) {
        return event.player != player && !event.player.hasSkill('mengkeai') && event.num;
      },
      prompt: '可爱:是否将此伤害转移给自己？',
      content() {
        'step 0';
        trigger.player = player;
        ('step 1');
        player.removeSkill('mengkeai');
      },
    },
    //圆梦计划2//b3希儿
    mengshuangsheng: {
      audio: 'ext:忽悠宇宙/audio/skill:5',
      mark: true,
      marktext: '☯',
      zhuanhuanji: true,
      intro: {
        content(storage, player, skill) {
          var str = '';
          if (player.storage.mengshuangsheng == true) str += '当你使用牌指定其他角色后,你可以失去1点体力并摸一张牌,令其本回合非锁定技失效,对其造成一点伤害并获得一枚护甲.';
          else str += '当你受到伤害时,你可以弃置两张颜色不同的牌,防止此伤害并加1点体力上限.';
          return str;
        },
      },
      group: ['mengshuangsheng_1', 'mengshuangsheng_2'],
      subSkill: {
        1: {
          trigger: {
            player: 'damageBegin4',
          },
          filter(event, player) {
            return player.storage.mengshuangsheng != true && player.countCards('he', { color: 'red' }) && player.countCards('he', { color: 'black' });
          },
          forced: true,
          content() {
            'step 0';
            player
              .chooseToDiscard('是否发动【双生·阳】？', '弃置两张颜色不同的牌并防止此伤害,加1点体力上限', 'he', 2, function (card) {
                if (ui.selected.cards.length) {
                  if (get.color(card) == get.color(ui.selected.cards[0])) return false;
                }
                return true;
              })
              .set('complexCard', true)
              .set('ai', (card) => 8 - get.value(card));
            ('step 1');
            if (result.bool) {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengshuangsheng' + [1, 2].randomGet());
              player.changeZhuanhuanji('mengshuangsheng');
              trigger.cancel();
            } else event.finish();
            ('step 2');
            player.gainMaxHp();
          },
          ai: {
            maixie_defend: true,
            effect: {
              target(card, player, target) {
                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                if (!target.hasFriend()) return;
                if (target.countCards('he', { color: 'red' }) && target.countCards('he', { color: 'black' })) {
                  return [1, 2];
                }
              },
            },
          },
        },
        2: {
          trigger: {
            player: 'useCardToTargeted',
          },
          filter(event, player) {
            return player.storage.mengshuangsheng == true && player.hp > 0 && event.target != player;
          },
          prompt: '是否发动【双生·阴】？',
          prompt2: '失去1点体力并摸一张牌,令对方本回合非锁定技失效,对其造成一点伤害并获得一枚护甲.',
          check(event, player) {
            return player.hp > 1;
          },
          content() {
            'step 0';
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengshuangsheng' + [3, 4, 5].randomGet());
            player.changeZhuanhuanji('mengshuangsheng');
            player.loseHp();
            ('step 1');
            player.draw();
            ('step 2');
            trigger.target.addTempSkill('fengyin');
            ('step 3');
            trigger.target.damage();
            ('step 4');
            player.changeHujia(1);
          },
        },
      },
    },
    mengbian: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      derivation: 'mengjuangu',
      enable: 'phaseUse',
      limited: true,
      filter(event, player) {
        return player.maxHp > 1;
      },
      selectTarget() {
        var num = _status.event.player.maxHp - 1;
        return [1, Math.min(5, num)];
      },
      filterTarget(event, player, target) {
        return player != target;
      },
      content() {
        'step 0';
        player.awakenSkill('mengbian');
        player.loseMaxHp();
        player.changeHujia();
        target.damage();
        player.addSkill('mengjuangu');
      },
      ai: {
        order: 100,
        result: {
          target(player, target) {
            var eff = get.damageEffect(target, player, player);
            if (player.maxHp == 1 || player.maxHp == player.hp) return;
            if (ui.selected.targets.length <= player.getDamagedHp()) return -eff;
          },
        },
      },
      mark: true,
      intro: {
        content: 'limited',
      },
      init(player, skill) {
        player.storage[skill] = false;
      },
    },
    mengjuangu: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      trigger: {
        global: 'roundStart',
      },
      forced: true,
      filter(event, player) {
        return player.getDamagedHp() > 0 && player.hujia > 0;
      },
      content() {
        var num = Math.min(player.hujia, player.getDamagedHp());
        player.changeHujia(-num);
        player.recover(num);
        player.draw(num);
      },
      group: 'mengjuangu_1',
      subSkill: {
        1: {
          trigger: {
            player: 'loseAfter',
          },
          filter(event, player) {
            return event.type == 'discard';
          },
          forced: true,
          content() {
            'step 0';
            player.changeHujia(1);
          },
        },
      },
    },
    //阿兰
    mengshinu: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      trigger: {
        player: 'useCardToPlayered',
      },
      filter(event, player) {
        return event.card && event.card.name == 'sha' && player.isPhaseUsing();
      },
      logTarget: 'target',
      usable: 1,
      check(event, player) {
        return get.attitude(player, event.target) <= 0;
      },
      content() {
        'step 0';
        if (player.hp > 1) player.loseHp();
        ('step 1');
        var num = player.getDamagedHp();
        if (num >= 1) {
          game.log('#g【释怒】', trigger.card, '改为雷属性');
          trigger.card.nature = 'thunder';
        }
        if (num >= 2) {
          game.log('#g【释怒】', trigger.card, '不能被响应');
          trigger.parent.directHit.push(trigger.target);
        }
        if (num >= 3) {
          game.log('#g【释怒】', trigger.card, '的伤害+', player.getDamagedHp());
          var id = trigger.target.playerid;
          var map = trigger.parent.customArgs;
          if (!map[id]) map[id] = {};
          if (typeof map[id].extraDamage != 'number') {
            map[id].extraDamage = 0;
          }
          map[id].extraDamage += player.getDamagedHp();
        }
      },
    },
    mengjianren: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        player: 'dying',
      },
      round: 1,
      forced: true,
      content() {
        player.recover(1 - player.hp);
      },
      mod: {
        maxHandcard(player) {
          return player.getDamagedHp();
        },
      },
      group: 'mengjianren_1',
      subSkill: {
        1: {
          trigger: {
            player: 'phaseJieshuBegin',
          },
          forced: true,
          filter(event, player) {
            return player.getDamagedHp() > 0;
          },
          content() {
            game.trySkillAudio('mengjianren', player);
            player.draw(player.getDamagedHp());
          },
        },
      },
    },
    //纳西妲
    mengxukong: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        global: 'useCardAfter',
      },
      forced: true,
      filter(event, player) {
        return !player.getStorage('mengxukong').includes(event.card.name) && (get.type(event.card, false) == 'trick' || get.type(event.card) == 'basic');
      },
      content() {
        player.markAuto('mengxukong', [trigger.card.name]);
        game.log('【虚空】记录了', trigger.card.name);
      },
      intro: {
        name: '虚空',
        mark(dialog, content, player) {
          dialog.addText('虚空数据');
          if (player == game.me || player.isUnderControl()) {
            dialog.addSmall([player.getStorage('mengxukong'), 'vcard']);
          }
        },
        content: '已记录牌名:$',
      },
      group: ['mengxukong_add'],
      subSkill: {
        add: {
          trigger: {
            player: 'phaseBegin',
          },
          forced: true,
          content() {
            'step 0';
            var dialog = [get.prompt('mengxukong')];
            var list1 = player.getStorage('mengxukong'),
              list2 = lib.inpile.filter(function (i) {
                return !list1.includes(i) && (get.type(i, false) == 'trick' || get.type(i) == 'basic');
              });
            if (list1.length) {
              dialog.push('<div class="text center">已记录</div>');
              dialog.push('<div class="text center">(可触发<唤梦>反转)</div>');
              dialog.push([list1, 'vcard']);
            } else {
              dialog.push('<div class="text center">——目前没有记录——</div>');
              dialog.push('<div class="text center">(可触发<唤梦>反转)</div>');
            }
            if (list2.length) {
              dialog.push('<div class="text center">未记录</div>');
              dialog.push('<div class="text center">(可触发<摩耶>防御)</div>');
              dialog.push([list2, 'vcard']);
            } else {
              dialog.push('<div class="text center">——目前所有牌都被记录——</div>');
              dialog.push('<div class="text center">(可触发<摩耶>防御)</div>');
            }
            player.chooseButton(dialog).set('ai', function (button) {
              var player = _status.event.player,
                name = button.link[2];
              if (player.getStorage('mengxukong').includes(name)) {
                return -get.effect(player, { name: name }, player, player);
              } else {
                return get.effect(player, { name: name }, player, player) * (1 + player.countCards('hs', name));
              }
            });
            ('step 1');
            if (result.bool) {
              var name = result.links[0][2];
              if (player.getStorage('mengxukong').includes(name)) {
                player.unmarkAuto('mengxukong', [name]);
                game.log(player, '从<虚空>中移除了', '#y' + get.translation(name));
              } else {
                player.markAuto('mengxukong', [name]);
                game.log(player, '向<虚空>中添加了', '#y' + get.translation(name));
              }
            }
          },
        },
      },
    },
    menghuanmeng: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        global: 'useCardBefore',
      },
      usable: 1,
      filter(event, player) {
        var target = event.target || event.targets[0];
        if (!target || !target.isIn()) return false;
        return player.getStorage('mengxukong').includes(event.card.name) && (get.type(event.card, false) == 'trick' || get.type(event.card) == 'basic');
      },
      prompt(event, player) {
        var target = event.target || event.targets[0];
        event.player.line(target);
        return `唤梦:${get.translation(event.player)}即将对${get.translation(event.target || event.targets[0])}使用${get.translation(event.card)},是否交换目标和使用者？`;
      },
      check(event, player) {
        return get.attitude(player, event.player) < 0 && get.attitude(player, event.target || event.targets[0]) > 0;
      },
      content() {
        'step 0';
        player.draw();
        //player.unmarkAuto('mengxukong', [trigger.card.name]);
        ('step 1');
        game.log('交换', trigger.card, '的使用者(', trigger.player, ')和目标(', trigger.target || trigger.targets[0], ')');
        [trigger.player, trigger.targets[0]] = [trigger.targets[0], trigger.player];
        player.line([trigger.player, trigger.targets[0]]);
        //event.a = trigger.player;
        //event.b = trigger.targets[0];
        //trigger.player = event.b;
        //trigger.targets[0] = event.a;
        //trigger.untrigger();
      },
    },
    mengmoye: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        target: 'useCardToTarget',
      },
      forced: true,
      filter(event, player) {
        if (event.player == player) return false;
        return !player.getStorage('mengxukong').includes(event.card.name) && (get.type(event.card, false) == 'trick' || get.type(event.card) == 'basic');
      },
      content() {
        game.log(trigger.card, '对', player, '无效');
        player.markAuto('mengxukong', [trigger.card.name]);
        trigger.targets.remove(player);
        trigger.parent.triggeredTargets2.remove(player);
        trigger.untrigger();
      },
    },
    //琪亚娜
    mengyuehua: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      init(player) {
        player.storage.mengyuehua = [1, 2, 3, 4, 5, 6, 7];
        player.storage.mengyuehua2 = [1, 2, 3, 4, 5, 6, 7];
      },
      mark: true,
      intro: {
        content(storage, player) {
          var list = ['1.造成1点火焰伤害</br>', '2.回复1点体力</br>', '3.摸一张牌</br>', '4.造成1点冰冻伤害</br>', '5.你弃置一名角色的一张牌</br>', '6.获得其他角色的一张牌</br>', '7.造成1点雷电伤害</br>'];
          var str = '';
          for (var i = 0; i < 7; i++) {
            if (player.storage.mengyuehua2.includes(i + 1)) {
              if (player.storage.mengyuehua.includes(i + 1)) {
                str += '<p style=\"color: rgb(124,252,0)\">';
                str += list[i];
                str += '</p>';
              } else {
                str += '<p style=\"color: rgb(255,102,102)\">';
                str += list[i];
                str += '</p>';
              }
            }
          }
          return str;
        },
      },
      trigger: {
        source: 'damageSource',
        player: ['recoverEnd', 'drawAfter', 'gainAfter'],
        global: ['loseAfter', 'loseAsyncAfter'],
      },
      forced: true,
      filter(event, player) {
        if (player.storage.mengyuehua.length == 0) return false;
        var list = player.storage.mengyuehua;
        switch (event.name) {
          case 'damage': {
            if (event.num != 1) return false;
            if (event.nature != undefined) {
              if (event.nature == 'fire' || event.hasNature('fire')) return list.includes(1);
              if (event.nature == 'ice' || event.hasNature('ice')) return list.includes(4);
              if (event.nature == 'thunder' || event.hasNature('thunder')) return list.includes(7);
            } else return false;
          }
          case 'lose': {
            if (event.type != 'discard' || !list.includes(5)) return false;
            if (event.player == player && event.cards.length == 1) return true;
            if (event.parent.notBySelf != true) return false;
            if ((event.discarder || event.getParent(2).player) != player) return false;
            var evtx = event.getl(event.player);
            return evtx && evtx.cards2 && evtx.cards2.length == 1;
          }
          case 'recover':
            return event.num == 1 && list.includes(2);
          case 'draw':
            return event.num == 1 && list.includes(3);
          default: {
            var cards = event.getg(player);
            if (!cards.length) return false;
            return (
              game.hasPlayer((current) => {
                return current != player && event.getl(current).cards2.length;
              }) && list.includes(6)
            );
          }
        }
      },
      content() {
        'step 0';
        switch (trigger.name) {
          case 'damage': {
            if (trigger.nature == 'fire') {
              player.storage.mengyuehua.remove(1);
              game.log('#g【月华】', player, '触发并禁用', '#y选项一');
            } else if (trigger.nature == 'ice') {
              player.storage.mengyuehua.remove(4);
              game.log('#g【月华】', player, '触发并禁用', '#y选项四');
            } else if (trigger.nature == 'thunder') {
              player.storage.mengyuehua.remove(7);
              game.log('#g【月华】', player, '触发并禁用', '#y选项七');
            }
            break;
          }
          case 'lose': {
            player.storage.mengyuehua.remove(5);
            game.log('#g【月华】', player, '触发并禁用', '#y选项五');
            break;
          }
          case 'recover': {
            player.storage.mengyuehua.remove(2);
            game.log('#g【月华】', player, '触发并禁用', '#y选项二');
            break;
          }
          case 'draw': {
            player.storage.mengyuehua.remove(3);
            game.log('#g【月华】', player, '触发并禁用', '#y选项三');
            break;
          }
          default: {
            player.storage.mengyuehua.remove(6);
            game.log('#g【月华】', player, '触发并禁用', '#y选项六');
            break;
          }
        }
        ('step 1');
        var list = ['对一名角色造成1点火焰伤害', '回复1点体力', '摸一张牌', '对一名角色造成1点冰冻伤害', '弃置一名角色区域内的一张牌', '获得一名其他角色的一张牌', '对一名角色造成1点雷电伤害'];
        for (var i = 0; i < list.length; i++) {
          list[i] = [i, list[i]];
        }
        var next = player.chooseButton(['月华:执行一项', [list.slice(0, 1), 'tdnodes'], [list.slice(1, 3), 'tdnodes'], [list.slice(3, 4), 'tdnodes'], [list.slice(4, 5), 'tdnodes'], [list.slice(5, 6), 'tdnodes'], [list.slice(6, 7), 'tdnodes']]);
        next.set('forced', false);
        next.set('selectButton', [1, 1]);
        next.set('filterButton', function (button) {
          var player = _status.event.player;
          var list = player.storage.mengyuehua;
          if (button.link == 0) return list.includes(1);
          if (button.link == 1) return list.includes(2) && player.isDamaged();
          if (button.link == 2) return list.includes(3);
          if (button.link == 3) return list.includes(4);
          if (button.link == 4) return list.includes(5) && game.hasPlayer((current) => current != player && current.countDiscardableCards(player, 'hej') > 0);
          if (button.link == 5) return list.includes(6) && game.hasPlayer((current) => current != player && current.countGainableCards(player, 'hej') > 0);
          if (button.link == 6) return list.includes(7);
        });
        next.set('ai', function (button) {
          var player = _status.event.player;
          var event = _status.event.getTrigger();
          switch (button.link) {
            case 0: {
              var num = 0;
              if (
                game.hasPlayer(function (current) {
                  if (get.damageEffect(current, player, player, 'fire') > num) num = get.damageEffect(current, player, player);
                })
              )
                return num;
            }
            case 1: {
              if (player.isDamaged()) {
                if (player.hp == 1) return 2;
                if (player.hp == 2) return 1.5;
                return 1.2;
              }
            }
            case 2:
              return 0.8;
            case 3: {
              var num = 0;
              if (
                game.hasPlayer(function (current) {
                  if (get.damageEffect(current, player, player, 'ice') > num) num = get.damageEffect(current, player, player);
                })
              )
                return num;
            }
            case 4: {
              var num = 0;
              if (
                game.hasPlayer(function (current) {
                  var att = get.attitude(player, current);
                  if (att < 0) att = -Math.sqrt(-att);
                  else att = Math.sqrt(att);
                  if (att * lib.card.guohe.ai.result.target(player, current) > num) num = att * lib.card.guohe.ai.result.target(player, current);
                })
              )
                return num;
            }
            case 5: {
              var num = 0;
              if (
                game.hasPlayer(function (current) {
                  var att = get.attitude(player, current);
                  if (att < 0) att = -Math.sqrt(-att);
                  else att = Math.sqrt(att);
                  if (att * lib.card.shunshou.ai.result.target(player, current) > num) num = att * lib.card.shunshou.ai.result.target(player, current);
                })
              )
                return num;
            }
            case 6: {
              var num = 0;
              if (
                game.hasPlayer(function (current) {
                  if (get.damageEffect(current, player, player, 'thunder') > num) num = get.damageEffect(current, player, player) > num;
                })
              )
                return num;
            }
          }
        });
        ('step 2');
        if (result.bool) {
          var map = [
            function (trigger, player) {
              player.storage.mengyuehua.remove(1);
              player.chooseTarget('月华,对一名角色造成1点火焰伤害', true).set('ai', function (target) {
                return get.damageEffect(target, player, player, 'fire');
              });
              event.nature = 'fire';
            },
            function (trigger, player) {
              player.storage.mengyuehua.remove(2);
              player.recover();
            },
            function (trigger, player) {
              player.storage.mengyuehua.remove(3);
              player.draw();
            },
            function (trigger, player) {
              player.storage.mengyuehua.remove(4);
              player.chooseTarget('月华,对一名角色造成1点冰冻伤害', true).set('ai', function (target) {
                return get.damageEffect(target, player, player, 'ice');
              });
              event.nature = 'ice';
            },
            function (trigger, player) {
              player.storage.mengyuehua.remove(5);
              player.chooseTarget(
                '月华:弃置一名角色区域内的一张牌',
                function (card, player, target) {
                  return target.countDiscardableCards(player, 'hej');
                },
                true
              );
              event.do = 'discardPlayerCard';
            },
            function (trigger, player) {
              player.storage.mengyuehua.remove(6);
              player.chooseTarget(
                '月华:获得一名角色区域内的一张牌',
                function (card, player, target) {
                  return target.countGainableCards(player, 'hej') && target != player;
                },
                true
              );
              event.do = 'gainPlayerCard';
            },
            function (trigger, player) {
              player.storage.mengyuehua.remove(7);
              player.chooseTarget('月华,对一名角色造成1点雷电伤害').set(
                'ai',
                function (target) {
                  return get.damageEffect(target, player, player, 'thunder');
                },
                true
              );
              event.nature = 'thunder';
            },
          ];

          for (var i of result.links) {
            game.log('#g【月华】', player, '执行并禁用了', '#y选项' + get.cnNumber(i + 1, true));
            map[i](trigger, player);
          }
          if (result.links.includes(1) || result.links.includes(2)) event.finish();
        } else event.finish();
        ('step 3');
        var target = result.targets[0];
        if (event.nature) {
          target.damage(event.nature);
        } else if (event.do) {
          player[event.do](target, true);
        }
      },
      group: 'mengyuehua_clear',
      subSkill: {
        clear: {
          trigger: {
            global: 'phaseEnd',
          },
          forced: true,
          content() {
            player.storage.mengyuehua = [];
            for (var i of player.storage.mengyuehua2) player.storage.mengyuehua.push(i);
          },
        },
      },
    },
    mengliushang: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: ['useCard', 'respond'],
      },
      preHidden: true,
      filter(event, player) {
        return event.respondTo && event.respondTo[0] != player;
      },
      content() {
        'step 0';
        var list = ['对一名角色造成1点火焰伤害', '回复1点体力', '摸一张牌', '对一名角色造成1点冰冻伤害', '弃置一名角色区域内的一张牌', '获得一名其他角色的一张牌', '对一名角色造成1点雷电伤害'];
        for (var i = 0; i < list.length; i++) {
          list[i] = [i, list[i]];
        }
        var next = player.chooseButton(['流裳:执行一项并永久移除', [list.slice(0, 1), 'tdnodes'], [list.slice(1, 3), 'tdnodes'], [list.slice(3, 4), 'tdnodes'], [list.slice(4, 5), 'tdnodes'], [list.slice(5, 6), 'tdnodes'], [list.slice(6, 7), 'tdnodes']]);
        next.set('forced', false);
        next.set('selectButton', [1, 1]);
        next.set('filterButton', function (button) {
          var player = _status.event.player;
          var list = player.storage.mengyuehua;
          if (button.link == 0) return list.includes(1);
          if (button.link == 1) return list.includes(2) && player.isDamaged();
          if (button.link == 2) return list.includes(3);
          if (button.link == 3) return list.includes(4);
          if (button.link == 4) return list.includes(5) && game.hasPlayer((current) => current.countDiscardableCards(player, 'hej') > 0);
          if (button.link == 5) return list.includes(6) && game.hasPlayer((current) => current.countGainableCards(player, 'hej') > 0);
          if (button.link == 6) return list.includes(7);
        });
        next.set('ai', function (button) {
          var player = _status.event.player;
          var event = _status.event.getTrigger();
          switch (button.link) {
            case 0: {
              var num = 0;
              if (
                game.hasPlayer(function (current) {
                  if (get.damageEffect(current, player, player, 'fire') > num) num = get.damageEffect(current, player, player);
                })
              )
                return num - 1;
            }
            case 1: {
              if (player.isDamaged()) {
                if (player.hp == 1) return 1;
                if (player.hp == 2) return 0.5;
                return 0.2;
              }
            }
            case 2:
              return 0.1;
            case 3: {
              var num = 0;
              if (
                game.hasPlayer(function (current) {
                  if (get.damageEffect(current, player, player, 'ice') > num) num = get.damageEffect(current, player, player);
                })
              )
                return num - 1;
            }
            case 4: {
              var num = 0;
              if (
                game.hasPlayer(function (current) {
                  var att = get.attitude(player, current);
                  if (att < 0) att = -Math.sqrt(-att);
                  else att = Math.sqrt(att);
                  if (att * lib.card.guohe.ai.result.target(player, current) > num) num = att * lib.card.guohe.ai.result.target(player, current);
                })
              )
                return num - 1;
            }
            case 5: {
              var num = 0;
              if (
                game.hasPlayer(function (current) {
                  var att = get.attitude(player, current);
                  if (att < 0) att = -Math.sqrt(-att);
                  else att = Math.sqrt(att);
                  if (att * lib.card.shunshou.ai.result.target(player, current) > num) num = att * lib.card.shunshou.ai.result.target(player, current);
                })
              )
                return num - 1;
            }
            case 6: {
              var num = 0;
              if (
                game.hasPlayer(function (current) {
                  if (get.damageEffect(current, player, player, 'thunder') > num) num = get.damageEffect(current, player, player) > num;
                })
              )
                return num - 1;
            }
          }
        });
        ('step 1');
        if (result.bool) {
          var map = [
            function (trigger, player) {
              player.storage.mengyuehua.remove(1);
              player.storage.mengyuehua2.remove(1);
              player.chooseTarget('流裳,对一名角色造成1点火焰伤害', true).set('ai', function (target) {
                return get.damageEffect(target, player, player, 'fire');
              });
              event.nature = 'fire';
            },
            function (trigger, player) {
              player.storage.mengyuehua.remove(2);
              player.storage.mengyuehua2.remove(2);
              player.recover();
            },
            function (trigger, player) {
              player.storage.mengyuehua.remove(3);
              player.storage.mengyuehua2.remove(3);
              player.draw();
            },
            function (trigger, player) {
              player.storage.mengyuehua.remove(4);
              player.storage.mengyuehua2.remove(4);
              player.chooseTarget('流裳,对一名角色造成1点冰冻伤害', true).set('ai', function (target) {
                return get.damageEffect(target, player, player, 'ice');
              });
              event.nature = 'ice';
            },
            function (trigger, player) {
              player.storage.mengyuehua.remove(5);
              player.storage.mengyuehua2.remove(5);
              player.chooseTarget(
                '流裳:弃置一名角色区域内的一张牌',
                function (card, player, target) {
                  return target.countDiscardableCards(player, 'hej');
                },
                true
              );
              event.do = 'discardPlayerCard';
            },
            function (trigger, player) {
              player.storage.mengyuehua.remove(6);
              player.storage.mengyuehua2.remove(6);
              player.chooseTarget(
                '流裳:获得一名角色区域内的一张牌',
                function (card, player, target) {
                  return target.countGainableCards(player, 'hej') && target != player;
                },
                true
              );
              event.do = 'gainPlayerCard';
            },
            function (trigger, player) {
              player.storage.mengyuehua.remove(7);
              player.storage.mengyuehua2.remove(7);
              player.chooseTarget('流裳,对一名角色造成1点雷电伤害').set(
                'ai',
                function (target) {
                  return get.damageEffect(target, player, player, 'thunder');
                },
                true
              );
              event.nature = 'thunder';
            },
          ];

          for (var i of result.links) {
            game.log(player, '选择了', '#g【月华】', '的', '#y选项' + get.cnNumber(i + 1, true));
            map[i](trigger, player);
          }
          if (result.links.includes(1) || result.links.includes(2)) event.finish();
        } else event.finish();
        ('step 2');
        var target = result.targets[0];
        if (event.nature) {
          target.damage(event.nature);
        } else if (event.do) {
          player[event.do](target, true);
        }
      },
    },
    //姬子
    mengnuwu: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'damageEnd',
        source: 'damageSource',
      },
      usable: 1,
      filter(event, player) {
        return event.num > 0;
      },
      maxhp(target1, target2, player) {
        //数组,输入(角色1,角色2,视角)根据两名角色,判定体力值较高的一方,返回[该角色,名字/你]
        if (!target1 || !target1.isIn() || !target2 || !target2.isIn() || target1.hp == target2.hp) return [];
        var target = target1.hp > target2.hp ? target1 : target2;
        return [target, target == player ? '你' : get.translation(target)];
      },
      prompt(event, player) {
        var max = lib.skill.mengnuwu.maxhp(event.player, event.source, player);
        var str = `【女武】是否摸${event.num * 2}张牌`;
        if (max.length && max[0] != player) str += `且${max[1]}失去1点体力`;
        return str;
      },
      content() {
        'step 0';
        player.draw(trigger.num * 2);
        ('step 1');
        var max = lib.skill.mengnuwu.maxhp(trigger.player, trigger.source, player);
        if (max.length && max[0] != player) max[0].loseHp();
      },
    },
    mengjiezhan: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'useCard',
      },
      filter(event, player) {
        return (event.card && event.card.name == 'sha') || event.card.name == 'jiu' || get.type(event.card) == 'trick';
      },
      forced: true,
      content() {
        'step 0';
        player
          .chooseControl('baonue_hp', 'baonue_maxHp', 'cancel2', function (event, player) {
            let zhu = false;
            switch (get.mode()) {
              case 'identity': {
                zhu = player.isZhu;
                break;
              }
              case 'guozhan': {
                zhu = get.is.jun(player);
                break;
              }
              case 'versus': {
                zhu = player.identity == 'zhu';
                break;
              }
              case 'doudizhu': {
                zhu = player == game.zhu;
                break;
              }
            }
            if (zhu && player.hp <= 3) return false;
            if (player.hp == player.maxHp) return 'baonue_hp';
            if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_maxHp';
            return 'baonue_hp';
          })
          .set('prompt', '竭战:是否失去1点体力或减1点体力上限,令此牌不能被响应且不计入使用次数？');
        ('step 1');
        if (result.control != 'cancel2') {
          if (result.control == 'baonue_hp') player.loseHp();
          else player.loseMaxHp(true);
          game.log('#g【竭战】', trigger.card, '不能被响应且不计入使用次数');
          trigger.nowuxie = true;
          trigger.directHit.addArray(game.players);
          if (player.getStat().card[trigger.card.name] > 0) player.getStat().card[trigger.card.name]--;
          //if (trigger.card.name == 'sha') player.getStat().card.sha--;
          //if (trigger.card.name == 'jiu') player.getStat().card.jiu--;
        } else event.finish();
        ('step 2');
        player.chooseTarget('令一名角色随机获得一张红色牌', true).set('ai', function (target) {
          return get.attitude(_status.event.player, target);
        });
        ('step 3');
        if (result.bool) {
          var card = get.cardPile2(function (card) {
            return get.color(card) == 'red';
          });
          if (card) result.targets[0].gain(card, 'gain2');
        }
      },
    },
    mengxinhuo: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        player: 'dying',
      },
      filter(event, player) {
        return player.countCards('he');
      },
      forced: true,
      content() {
        'step 0';
        player
          .chooseTarget(get.prompt2('mengxinhuo'), function (card, player, target) {
            return player != target;
          })
          .set('ai', function (target) {
            var att = get.attitude(_status.event.player, target);
            if (att > 0) {
              if (target.hp == 1) {
                att += 2;
              }
              if (target.hp < target.maxHp) {
                att += 2;
              }
            }
            return att;
          });
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          player.line(target, 'green');
          target.gain(player.getCards('he'), player, 'giveAuto');
          target.addSkill('mengxinyan');
          player.die().source = trigger.source;
        }
      },
    },
    mengxinyan: {
      trigger: {
        player: 'useCardToPlayer',
        source: 'damageBegin1',
      },
      forced: true,
      filter(event, player) {
        return event.card && get.color(event.card) && get.color(event.card) == 'red';
      },
      _priority: 20,
      content() {
        //QQQ
        if (trigger.name == 'useCardToPlayer') {
          game.log('#g【薪炎】', trigger.card, '不能被响应');
          trigger.nowuxie = true;
          trigger.directHit.addArray(game.players);
        } else {
          player.draw();
          game.log('#g【薪炎】', '此伤害+1');
          trigger.num++;
        }
      },
      mod: {
        ignoredHandcard(card, player) {
          if (get.color(card) == 'red') {
            return true;
          }
        },
        cardDiscardable(card, player, name) {
          if (name == 'phaseDiscard' && get.color(card) == 'red') {
            return false;
          }
        },
      },
    },
    //神里绫人
    mengwenmou: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: ['useCard', 'respond'],
      },
      forced: true,
      _priority: 10,
      filter(event, player) {
        return event.card.suit;
        var suit = event.card.suit,
          name = event.card.name;
        return (
          event.card &&
          (suit || name) &&
          player.countCards('h', function (card) {
            return suit == card.suit || name == card.name;
          }) > 0
        );
      },
      content() {
        if (
          player.countCards('h', function (card) {
            return trigger.card.suit == card.suit;
          }) > 0
        ) {
          if (trigger.card.name == 'sha') player.getStat().card.sha--;
          if (trigger.card.name == 'jiu') player.getStat().card.jiu--;
        } else {
          var suits = ['club', 'diamond', 'heart', 'spade'];
          for (var i of player.getCards('h')) {
            suits.remove(i.suit);
          }
          if (suits.length) {
            var card = get.cardPile2(function (card) {
              return suits.includes(card.suit);
            });
            if (card) player.gain(card, 'gain2');
          }
        }
      },
      ai: {
        maixie_defend: true,
        effect: {
          target(card, player, target) {
            if (target.countCards('h') > 3) return [1, 5];
            if (get.attitude(target, player) < 0) return [1, 1];
          },
        },
      },
    },
    menggutu: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        player: ['useCard', 'respond'],
      },
      preHidden: true,
      filter(event, player) {
        return event.respondTo && event.respondTo[0] != player; //&& player.storage.mengwenmou && player.storage.mengwenmou == event.card;
      },
      forced: true,
      content() {
        'step 0';
        player.chooseTarget('【固图】:</br>1.选择当前回合角色,获得其的牌或令其失去体力</br>2.点取消,让自己摸牌或回血', function (card, player, target) {
          return target == _status.currentPhase;
        }).ai = function (target) {
          return _status.event.player.hp > target.hp;
        };
        ('step 1');
        if (result.bool) {
          player
            .choosePlayerCard('操作提示:</br>1.选择其的牌获得</br>2.点取消,令其失去体力', result.targets[0], 'he')
            .set('ai', function (button) {
              return player.hp > _status.event.target;
            })
            .set('target', result.targets[0]);
        } else {
          player.chooseDrawRecover(2, true, function (event, player) {
            if (player.hp == 1 && player.isDamaged()) return 'recover_hp';
            return 'draw_card';
          });
          event.finish();
        }
        ('step 2');
        var target = _status.currentPhase;
        if (result.bool) {
          var cards = result.cards;
          target.give(cards, player, 'giveAuto');
        } else {
          target.loseHp();
        }
      },
    },
    //谋姬子
    mengezhan: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      ai: {
        halfneg: true,
        threaten: 1.2,
        effect: {
          target(card, player, target) {
            if (target.countCards('he')) return [1, 0, 0, -1];
          },
        },
      },
      group: ['mengezhan_target', 'mengezhan_player'],
      subSkill: {
        target: {
          trigger: {
            global: 'useCardAfter',
          },
          filter(event, player) {
            if (_status.currentPhase == player) return false;
            if (!event.player.isIn() || event.player == player) return false;
            if (!event.targets || event.targets.length != 1 || event.targets[0] != player) return false;
            return player.canUse({ name: 'sha' }, event.player, false) && player.countCards('h');
          },
          forced: true,
          content() {
            'step 0';
            var eff = get.effect(player, { name: 'sha' }, trigger.player, player);
            player.chooseCard(`将一张手牌当【杀】对${get.translation(trigger.player)}使用`).set('ai', function (card) {
              if (eff > 0) return 7 - get.value(card);
            });
            ('step 1');
            if (result.bool) {
              var card = result.cards[0];
              player.useCard({ name: 'sha' }, [card], trigger.player, false);
            } else event.finish();
          },
        },
        player: {
          trigger: {
            player: 'useCardAfter',
          },
          forced: true,
          filter(event, player) {
            if (!player.isPhaseUsing()) return false;
            if (!event.targets || event.targets.length != 1) return false;
            if (!event.targets[0].isIn() || event.targets[0] == player) return false;
            if (!event.targets[0].canUse({ name: 'sha' }, player)) return false;
            return event.targets[0].countCards('h');
          },
          content() {
            'step 0';
            var eff = get.effect(trigger.targets[0], { name: 'sha' }, player, trigger.targets[0]);
            trigger.targets[0].chooseCard(`将一张手牌当【杀】对${get.translation(player)}使用`).set('ai', function (card) {
              if (eff > 0) return 8 - get.value(card);
            });
            ('step 1');
            if (result.bool) {
              var card = result.cards[0];
              trigger.targets[0].useCard({ name: 'sha' }, [card], player);
            } else event.finish();
          },
        },
      },
    },
    mengzhuoshi: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'damageBegin4',
      },
      filter(event, player) {
        return event.num > 0;
      },
      forced: true,
      content() {
        'step 0';
        var num = trigger.num;
        trigger.cancel();
        player.loseMaxHp(num);
        player.draw(num);
      },
      ai: {
        fireAttack: true,
        halfneg: true,
        threaten: 1.05,
        effect: {
          target(card, player, target) {
            if (get.tag(card, 'damage')) {
              if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
              return [1, 0, 0, -1];
            }
          },
        },
      },
    },
    mengjiyi: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      mod: {
        maxHandcard(player, num) {
          return player.maxHp;
        },
      },
      trigger: {
        player: ['useCard', 'shaMiss'],
      },
      filter(event, player) {
        if (event.name == 'useCard') return event.card && event.card.name == 'sha';
        else return event.target.isIn() && event.target.countCards('h') > 0;
      },
      forced: true,
      logTarget(event, player) {
        return event.target || '';
      },
      content() {
        if (trigger.name == 'useCard') {
          game.log('#g【疾疫】', trigger.card, '改为火属性');
          trigger.card.nature = 'fire';
        } else {
          trigger.target.chooseToDiscard(true);
        }
      },
      ai: {
        fireAttack: true,
      },
    },
    mengzhicheng: {
      trigger: {
        player: 'dieBegin',
      },
      forced: true,
      content() {
        'step 0';
        player
          .chooseTarget(get.prompt2('mengzhicheng'), function (card, player, target) {
            return player != target;
          })
          .set('ai', function (target) {
            var att = get.attitude(_status.event.player, target);
            if (att > 0) {
              if (target.hp == 1) {
                att += 2;
              }
              if (target.hp < target.maxHp) {
                att += 2;
              }
            }
            return att;
          });
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          player.line(target, 'green');
          target.gainMaxHp();
          target.recover();
          target.addSkill('mengjiyi');
          target.gain(player.getCards('he'), player, 'giveAuto');
        }
      },
      ai: {
        threaten(player, target) {
          if (target.hp == 1) return 2;
          return 0.5;
        },
      },
    },
    //符玄
    mengqiongguan: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return game.hasPlayer(function (current) {
          return !current.hasSkill('mengqiongguan_buff');
        });
      },
      filterTarget(card, player, target) {
        return !target.hasSkill('mengqiongguan_buff');
      },
      content() {
        'step 0';
        target.addSkill('mengqiongguan_buff');
        target.addSkill('mengjianzhi');
        player.addSkill('mengqiongguan_buff');
        player.addSkill('mengjianzhi');
      },
      derivation: ['mengqiongguan_buff', 'mengjianzhi'],
      group: ['mengqiongguan_game'],
      subSkill: {
        game: {
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
          },
          forced: true,
          filter(event, player) {
            return game.hasPlayer((current) => !current.hasSkill('mengqiongguan_buff')) && (event.name != 'phase' || game.phaseNumber == 0);
          },
          content() {
            'step 0';
            player
              .chooseTarget('请选择<穷观阵>保护的对象', '能够将其每回合超过1点的伤害转移给你', function (card, player, target) {
                return !target.hasSkill('mengqiongguan_buff');
              })
              .set('ai', function (target) {
                var player = _status.event.player,
                  att = get.attitude(player, target);
                if (att > 0) {
                  if (target == player) return att + 10 - target.hp;
                  else return att + 100 - target.hp;
                }
                if (att == 0) return Math.random();
                return att;
              });
            ('step 1');
            if (result.bool) {
              var target = result.targets[0];
              target.addSkill('mengqiongguan_buff');
              target.addSkill('mengjianzhi');
              player.addSkill('mengqiongguan_buff');
              player.addSkill('mengjianzhi');
              player
                .when('die')
                .assign({
                  forceDie: true,
                  charlotte: true,
                  firstDo: true,
                })
                .then(() => {
                  game.countPlayer(function (current) {
                    if (current.hasSkill('mengqiongguan_buff')) current.removeSkill('mengqiongguan_buff');
                    if (current.hasSkill('mengjianzhi')) current.removeSkill('mengjianzhi');
                  });
                });
            }
          },
        },
      },
      ai: {
        order: 10,
        expose: 0.2,
        result: {
          target(player, target) {
            if (target == player) return 10 - target.hp;
            else return 100 - target.hp;
          },
        },
      },
    },
    mengqiongguan_buff: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      mark: true,
      intro: {
        name: '穷观阵',
        content(storage, player) {
          if (!player.hasSkill('mengqiongguan')) return '将超过1点的伤害转移给符玄';
          return '正在保护[穷观阵]内的其他角色';
        },
      },
      trigger: {
        player: 'damageBegin3',
      },
      forced: true,
      filter(event, player) {
        if (
          !game.hasPlayer(function (current) {
            return current != player && current.hasSkill('mengqiongguan');
          }) ||
          player.hasSkill('mengqiongguan')
        )
          return false;
        return player.getHistory('damage', (evt) => evt != event).length || event.num > 1;
      },
      content() {
        'step 0';
        var target = game.filterPlayer(function (current) {
          return current != player && current.hasSkill('mengqiongguan');
        })[0];
        if (player.getHistory('damage', (evt) => evt != trigger).length) {
          var num = trigger.num;
          game.log('#g【穷观阵】', player, '转移此次伤害');
          trigger.player = target;
        } else {
          var num = trigger.num - 1;
          game.log('#g【穷观阵】', player, '受到的伤害降低为1');
          trigger.num = 1;
          target.addSkill('mengqiongguan_buff_move');
          target.storage.mengqiongguan_buff = player;
          target.storage.mengqiongguan_buff_move = [];
          target.storage.mengqiongguan_buff_move[0] = target;
          if (trigger.cards && trigger.cards.length) target.storage.mengqiongguan_buff_move[1] = trigger.cards;
          else target.storage.mengqiongguan_buff_move[1] = [];
          if (trigger.card) target.storage.mengqiongguan_buff_move[2] = trigger.card;
          else target.storage.mengqiongguan_buff_move[2] = undefined;
          target.storage.mengqiongguan_buff_move[3] = num;
          if (trigger.source && trigger.source.isAlive()) target.storage.mengqiongguan_buff_move[4] = trigger.source;
          else target.storage.mengqiongguan_buff_move[4] = undefined;
          if (trigger.nature) target.storage.mengqiongguan_buff_move[5] = trigger.nature;
          else target.storage.mengqiongguan_buff_move[5] = undefined;
        }
      },
      subSkill: {
        move: {
          init(player) {
            player.storage.mengqiongguan_buff;
            player.storage.mengqiongguan_buff_move = [];
          },
          trigger: {
            global: 'damageEnd',
          },
          forced: true,
          _priority: null,
          filter(event, player) {
            return player.storage.mengqiongguan_buff && player.storage.mengqiongguan_buff == event.player && player.storage.mengqiongguan_buff_move != [];
          },
          content() {
            'step 0';
            var list = player.storage.mengqiongguan_buff_move;
            game.log('#g【穷观阵】', '转移了', player.storage.mengqiongguan_buff, '的', list[3], '点伤害给', player);
            var next = list[0].damage();
            next.cards = [];
            if (list[1].length) next.cards = list[1];
            else next.cards = [];
            if (list[2] != undefined) next.card = list[2];
            else delete next.card;
            next.num = list[3];
            if (list[4] != undefined) next.source = list[4];
            else delete next.source;
            if (list[5] != undefined) next.nature = list[5];
            next.original_num = next.num;
            next.change_history = [];
            if (next.nature == 'poison') delete next._triggered;
            next.setContent('damage');
            next.filterStop = function () {
              if (this.source && this.source.isDead()) delete this.source;
              var num = this.original_num;
              for (var i of this.change_history) num += i;
              if (num != this.num) this.change_history.push(this.num - num);
              if (this.num <= 0) {
                delete this.filterStop;
                this.trigger('damageZero');
                this.finish();
                this._triggered = null;
                return true;
              }
            };
            ('step 1');
            delete player.storage.mengqiongguan_buff;
            delete player.storage.mengqiongguan_buff_move;
            player.removeSkill('mengqiongguan_buff_move');
          },
        },
      },
    },
    mengjianzhi: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      mark: true,
      intro: {
        name: '鉴知',
        content: '获得此技时加1点体力上限并回复1点体力,失去此技时减1点体力上限.</br>你每回合首次使用【杀】造成伤害时,此伤害+1.',
      },
      init(player) {
        player.gainMaxHp();
        player.recover();
      },
      onremove(player) {
        player.loseMaxHp();
      },
      trigger: {
        source: 'damageBegin1',
      },
      forced: true,
      usable: 1,
      filter(event, player) {
        return event.card && event.card.name == 'sha';
      },
      content() {
        trigger.num++;
      },
    },
    mengbie: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        player: ['damageEnd', 'loseHpEnd', 'recoverEnd'],
      },
      filter(event, player) {
        var num = 0;
        player.getHistory('damage', function (evt) {
          num += evt.num;
        });
        return player.hp < player.getDamagedHp() && num > 0;
      },
      round: 1,
      forced: true,
      content() {
        var num = 0;
        player.getHistory('damage', function (evt) {
          num += evt.num;
        });
        player.recover(num);
      },
      group: ['mengbie_roundcount'],
    },
    //理律
    mengsheyuan: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      intro: {
        name: '涉渊',
        mark(dialog, content, player) {
          if (player == game.me || player.isUnderControl()) {
            dialog.add([player.getStorage('mengsheyuan'), 'vcard']);
            var card = player.getStorage('mengsheyuan')[player.getStorage('mengsheyuan').length - 1];
            var type = get.type(card, 'trick');
            dialog.addText('最后一张记录牌:');
            dialog.addSmall([[card], 'vcard']);
            dialog.addText('类型:' + get.translation(type));
            var str = '失去的牌数:</br>';
            str += `<li>相同类型:${player.storage.mengsheyuan_lose[0]}/1`;
            str += `<li>不同类型:${player.storage.mengsheyuan_lose[1]}/2`;
            dialog.addText(str);
          } else {
            dialog.addText('偷看女孩子的记录可是不礼貌的哦!');
          }
        },
      },
      trigger: {
        global: 'phaseEnd',
      },
      filter(event, player) {
        if (event.player == player) return false;
        return game.getGlobalHistory('cardMove', (evt) => {
          if ((evt.name == 'lose' && evt.position == ui.discardPile) || evt.name == 'cardsDiscard') {
            for (var i of evt.cards.filterInD('d')) {
              if (get.type(i) != 'equip') return true;
            }
          }
        });
      },
      forced: true,
      content() {
        'step 0';
        var cards = [];
        game.getGlobalHistory('cardMove', (evt) => {
          if ((evt.name == 'lose' && evt.position == ui.discardPile) || evt.name == 'cardsDiscard') {
            for (var i of evt.cards.filterInD('d')) {
              if (get.type(i) != 'equip') {
                cards.push(i);
              }
            }
          }
        });
        if (cards.length) {
          var card = cards.randomGet();
          player.showCards(card);
          if (player.storage.mengsheyuan && player.storage.mengsheyuan.length && player.storage.mengsheyuan.includes(card.name)) player.unmarkAuto('mengsheyuan', [card.name]);
          player.markAuto('mengsheyuan', [card.name]);
          game.log('【涉渊】记录了', `#g【${get.translation(card.name)}】`);
          player.addSkill('mengsheyuan_lose');
          player.storage.mengsheyuan_lose = [0, 0];
        }
      },
      subSkill: {
        lose: {
          init(player) {
            player.storage.mengsheyuan_lose = [0, 0];
          },
          trigger: {
            player: 'loseAfter',
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
          },
          forced: true,
          silent: true,
          filter(event, player) {
            if (player.countDisabled() >= 5) return false;
            if (event.name == 'gain' && event.player == player) return false;
            var evt = event.getl(player);
            return evt && evt.cards2 && evt.cards2.length;
          },
          content() {
            'step 0';
            event.type = get.type(player.getStorage('mengsheyuan')[player.getStorage('mengsheyuan').length - 1], 'trick'); //记录类型
            var evt = trigger.getl(player);
            for (var i of evt.cards2) {
              if (get.type(i, 'trick') == event.type) {
                player.storage.mengsheyuan_lose[0]++;
              } else {
                player.storage.mengsheyuan_lose[1]++;
              }
            }
            ('step 1');
            if (player.storage.mengsheyuan_lose[0] > 0 && player.countDisabled() < 5) {
              event.num = 1;
            } else if (player.storage.mengsheyuan_lose[1] > 1 && player.countDisabled() < 5) {
              event.num = 2;
            } else event.finish();
            ('step 2');
            var list = [];
            for (var i = 1; i <= 5; i++) {
              if (player.hasEnabledSlot(i)) list.push('equip' + i);
            }
            list.sort();
            player
              .chooseControl(list, 'cancel2')
              .set('prompt', '请选择废除一个装备栏')
              .set('ai', function (evevt, player, list) {
                for (var i = 1; i <= 5; i++) {
                  if (_status.event.list.includes('equip' + i) && !player.getEquip(i)) return 'equip' + i;
                }
                return _status.event.list.randomGet();
              })
              .set('list', list);
            ('step 3');
            if (result.control && result.control != 'cancel2') {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengsheyuan3.mp3');
              player.storage.mengsheyuan_lose[event.num - 1] -= event.num;
              delete event.num;
              player.disableEquip(result.control);
              if (!player.hasSkill('mengsheyuan_usable')) {
                event.notype = event.type == 'basic' ? 'trick' : 'basic';
                var gains = [];
                while (gains.length < 2) {
                  var card = get.cardPile(function (card) {
                    return get.type(card, 'trick') == event.notype && !gains.includes(card);
                  });
                  if (card) gains.push(card);
                }
                if (gains.length == 2) player.gain(gains, 'gain2', 'log');
              }
              player.addTempSkill('mengsheyuan_usable');
              event.goto(1);
            } else event.finish();
          },
        },
        usable: {
          charlotte: true,
        },
      },
    },
    mengkanming: {
      enable: ['chooseToUse'],
      filter(event, player) {
        if (!player.getStorage('mengsheyuan').length || player.hasSkill('mengkanming_used')) return false;
        if (player.countDisabled() < 5 || !player.countCards('hes')) return false;
        if (event.name == 'chooseToRespond' && event.responded) return false;
        for (var i of player.getStorage('mengsheyuan')) {
          if (get.type(i) != 'equip' && event.filterCard({ name: i }, player, event)) return true;
        }
        return false;
      },
      chooseButton: {
        dialog(event, player) {
          var list = [];
          var names = player.getStorage('mengsheyuan');
          for (var i of names) {
            if (i == 'sha') {
              list.push(['基本', '', 'sha']);
              for (var j of lib.inpile_nature) {
                //if (event.filterCard && event.filterCard({ name: i, nature: j }, player, event))
                list.push(['基本', '', 'sha', j]);
              }
            } else if (get.type2(i) == 'trick') list.push(['锦囊', '', i]);
            else if (get.type(i) == 'basic') list.push(['基本', '', i]);
          }
          return ui.create.dialog('堪名', [list, 'vcard']);
        },
        filter(button, player) {
          return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
        },
        check(button) {
          if (_status.event.parent.type != 'phase') return 1;
          var player = _status.event.player;
          if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
          return player.getUseValue({
            name: button.link[2],
            nature: button.link[3],
          });
        },
        backup(links, player) {
          return {
            filterCard() {
              return true;
            },
            check(card) {
              return 10 - get.value(card);
            },
            position: 'hes',
            viewAs: {
              name: links[0][2],
              nature: links[0][3],
            },
            precontent() {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengkanming1.mp3');
              player.addTempSkill('mengkanming_used');
            },
          };
        },
        prompt(links, player) {
          return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
        },
      },
      hiddenCard(player, name) {
        if (player.countCards('hes') && player.getStorage('mengsheyuan').includes(name)) return true;
        return false;
      },
      group: ['mengkanming_log', 'mengkanming_after'],
      subSkill: {
        used: {
          charlotte: true,
        },
        log: {
          trigger: {
            global: 'changeHp',
          },
          charlotte: true,
          forced: true,
          firstDo: true,
          popup: false,
          silent: true,
          filter(event, player) {
            return event.getParent(2).skill == 'mengkanming_backup' && !player.hasSkill('mengkanming_log2');
          },
          content() {
            game.log(trigger.player, '改变了体力值', '#g【堪名】②', '失效');
            player.addTempSkill('mengkanming_log2');
          },
        },
        log2: {
          charlotte: true,
        },
        after: {
          trigger: {
            player: 'useCardAfter',
          },
          filter(event, player) {
            return event.skill == 'mengkanming_backup' && !player.hasSkill('mengkanming_log2');
          },
          forced: true,
          content() {
            'step 0';
            if (player.hasSkill('mengkanming_log2')) {
              player.removeSkill('mengkanming_log2');
            }
            ('step 1');
            event.count = 0;
            ('step 2');
            if (player.countDisabledSlot() > 0) {
              var list = [];
              for (var i = 1; i <= 5; i++) {
                if (player.hasDisabledSlot(i)) list.push('equip' + i);
              }
              player
                .chooseControl(list, 'cancel2')
                .set('prompt', '堪名:是否回复一个装备栏？')
                .set('ai', function (evevt, player, list) {
                  return _status.event.list.randomGet();
                })
                .set('list', list);
            } else event.finish();
            ('step 3');
            if (result.control && result.control != 'cancel2') {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengkanming2.mp3');
              player.enableEquip(result.control);
              event.count++;
              if (event.count >= 2) {
                event.count -= 2;
                player.chooseDrawRecover(true);
              }
              event.goto(2);
            }
          },
        },
      },
      ai: {
        fireAttack: true,
        respondSha: true,
        respondShan: true,
        skillTagFilter(player) {
          if (player.countCards('hes') < 1) return false;
        },
        order: 1,
        result: {
          player(player) {
            if (_status.event.dying) return get.attitude(player, _status.event.dying);
            return 1;
          },
        },
      },
    },
    //李素裳
    mengzhejian: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'mengzhejian',
      },
      forced: true,
      content() {
        player.draw();
      },
      mod: {
        globalFrom(from, to) {
          if (to.getEquip(1)) return -Infinity;
        },
      },
      group: 'mengzhejian_gain',
      global: 'mengzhejian_lose',
      subSkill: {
        lose: {
          trigger: {
            player: ['loseAfter'],
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
          },
          filter(event, player) {
            if (event.name == 'gain' && event.player == player) return false;
            var evt = event.getl(player);
            if (!evt || !evt.es || !evt.es.length) return false;
            if (event.name == 'equip' && event.player == player) return false;
            for (var i of evt.es) {
              if (get.subtype(i, false) == 'equip1') return true;
            }
            return false;
          },
          forced: true,
          silent: true,
          popup: false,
          content() {
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengzhejian1.mp3');
            event.trigger('mengzhejian');
          },
        },
        gain: {
          forced: true,
          silent: true,
          popup: false,
          trigger: {
            global: ['equipAfter'],
          },
          filter(event, player) {
            return get.subtype(event.card) == 'equip1';
          },
          content() {
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengzhejian2.mp3');
            event.trigger('mengzhejian');
          },
        },
      },
    },
    mengtaixu: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'useCardToPlayered',
      },
      filter(event, player) {
        if (event.targets.length != 1 || !event.cards || event.cards.length != 1) return false;
        return event.target.getEquip(1) || event.target.hasEmptySlot(1);
      },
      prompt2(event, player) {
        var str = '';
        if (event.target.getEquip(1)) {
          if (event.target.getEquip(1).name == 'meng_jianqi') {
            var card = event.target.storage.mengjianqi_skill;
            str = '的化形之源' + get.translation(card);
          }
          return `获得${get.translation(event.target.getEquip(1)) + str}并令其本回合不能使用或打出牌`;
        } else {
          if (get.subtype(event.cards[0]) != 'equip1') str = '化形的同花色、同点数的【太虚剑气】';
          return `将${get.translation(event.cards[0]) + str}置入其武器栏`;
        }
      },
      logTarget: 'target',
      content() {
        'step 0';
        if (trigger.target.getEquip(1)) {
          trigger.parent.excluded.add(trigger.target);
          var cards = trigger.target.getExpansions('mengjianqi_skill');
          player.gain(cards, 'gain2');
          trigger.target.give(trigger.target.getEquip(1), player, 'giveAuto');
          trigger.target.addTempSkill('mengtaixu_add');
          event.finish();
        }
        ('step 1');
        var card = trigger.cards[0];
        if (get.subtype(card) != 'equip1') {
          var cardx = game.createCard('meng_jianqi', card.suit, card.number);
          var length = lib.skill.dcweidang.getLength(card);
          if (length != 1) cardx.distance = { attackFrom: 1 - length };
          trigger.target.$gain2(cardx);
          trigger.target.equip(cardx);
          trigger.target.addToExpansion(card, trigger.target, 'give').gaintag.add('mengjianqi_skill');
        } else {
          trigger.target.$gain2(card);
          trigger.target.equip(card);
        }
      },
      subSkill: {
        add: {
          mark: true,
          intro: {
            content: '不能使用或打出牌',
          },
          mod: {
            cardEnabled2(card) {
              if (card) return false;
            },
          },
        },
      },
    },
    mengjianxin: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        player: 'shaBegin',
      },
      forced: true,
      filter(event, player) {
        return (event.card && event.card.nature == 'ice') || get.natureList(event.card).includes('ice');
      },
      content() { },
      group: ['mengjianxin_disable'],
      subSkill: {
        disable: {
          audio: 'ext:忽悠宇宙/audio/skill:1',
          trigger: {
            global: 'gameDrawAfter',
            player: 'enterGame',
          },
          forced: true,
          content() {
            player.disableEquip(1);
          },
        },
      },
      mod: {
        cardname(card) {
          if (get.subtype(card, false) == 'equip1') return 'sha';
        },
        cardUsable(card, player) {
          if (!card.cards || card.name != 'sha') return;
          for (var i of card.cards) {
            if (lib.card[i.name].subtype == 'equip1') return Infinity;
          }
        },
        cardnature(card) {
          var info = get.translation(card.name);
          if (lib.card[card.name].subtype == 'equip1' && info.includes('剑')) return 'ice';
        },
        targetInRange(card) {
          if (!card.cards || card.name != 'sha') return;
          for (var i of card.cards) {
            var info = get.translation(i.name);
            if (lib.card[i.name].subtype == 'equip1' && info.includes('剑')) return true;
          }
        },
      },
    },
    //终焉
    mengpingji: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'damageEnd',
      },
      filter(event, player) {
        if (!event.source) return false;
        return player.storage.mengpingji || player.countCards('he');
      },
      forced: true,
      content() {
        'step 0';
        if (player.storage.mengpingji) {
          var num = 0,
            list = player.storage.mengpingji;
          if (trigger.player == list.player) {
            game.log('<li>目标均为:', trigger.player);
            num++;
          } else game.log('<li>目标不同');
          if (trigger.source == list.source) {
            game.log('<li>来源均为:', trigger.source);
            num++;
          } else game.log('<li>来源不同');
          if (trigger.num == list.num) {
            game.log('<li>点数均为:', trigger.num);
            num++;
          } else game.log('<li>点数不同');
          if (trigger.nature == undefined && list.nature == undefined) {
            game.log('<li>属性均为:', 'undefined');
            num++;
          } else if (trigger.nature == list.nature) {
            game.log('<li>属性均为:', trigger.nature);
            num++;
          } else game.log('<li>属性不同');
          if (num > 0) player.draw(num);
          delete player.storage.mengpingji;
          event.finish();
        } else {
          player.chooseToDiscard('he', '平寂:你可以弃置一张牌并记录此伤害').set('ai', function (card) {
            return 8 - get.value(card);
          });
        }
        ('step 1');
        if (result.bool) {
          game.log('记录此伤害:</br>', '<li>属性:', trigger.nature, '<li>点数:', trigger.num, '<li>来源:', trigger.source, '<li>目标:', trigger.player);
          player.storage.mengpingji = {
            nature: trigger.nature,
            num: trigger.num,
            source: trigger.source,
            player: trigger.player,
          };
        }
      },
    },
    mengzhaoxi: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      mod: {
        cardname(card, player, name) {
          if (get.position(card) == 'h') {
            if (player.getHistory('gain', (evt) => evt && evt.cards && evt.cards.includes(card)).length) return 'huogong';
          }
        },
      },
      trigger: {
        player: 'useCard',
      },
      filter(event, player) {
        if (get.itemtype(event.cards) != 'cards' || event.cards.length != 1) return false;
        return event.cards[0].name != 'huogong' && event.card.name == 'huogong';
      },
      forced: true,
      content() { },
      group: 'mengzhaoxi_use',
      subSkill: {
        use: {
          trigger: {
            global: 'useCardAfter',
          },
          filter(event, player) {
            if (event.targets.length != 1) return false;
            if (event.player == player || _status.currentPhase != event.player) return false;
            if (event.player.getHistory('useCard', (evt) => evt && evt != event && evt.targets.length == 1).length) return false;
            return player.canUse('huogong', event.targets[0]) && player.countCards('h');
          },
          forced: true,
          content() {
            'step 0';
            var next = player.chooseToUse(function (card, player, event) {
              if (card.name != 'huogong') return false;
              return lib.filter.cardEnabled.apply(this, arguments);
            });
            next.set('prompt', `朝夕:是否对${get.translation(trigger.targets[0])}使用一张【火攻】？`);
            next.set('filterTarget', function (card, player, target) {
              if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
              return lib.filter.targetEnabled.apply(this, arguments);
            });
            next.set('targetRequired', true);
            next.set('sourcex', trigger.targets[0]);
          },
        },
      },
    },
    mengcifan: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      group: ['mengcifan_top', 'mengcifan_wugu'],
      subSkill: {
        top: {
          audio: 'mengcifan',
          trigger: {
            source: 'damageSource',
          },
          filter(event, player) {
            if (get.itemtype(event.cards) != 'cards') return false;
            for (var i of event.cards) {
              if (get.position(i, true) == 'o') return true;
            }
          },
          prompt(event, player) {
            return `赐繁:是否将${get.translation(event.cards)}置于牌堆顶？`;
          },
          content() {
            'step 0';
            event.cards = [];
            for (var i of trigger.cards) {
              if (get.position(i, true) == 'o') event.cards.push(i);
            }
            if (event.cards.length > 1) {
              var next = player.chooseToMove('赐繁:将牌按顺序置于牌堆顶');
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
            while (cards.length) {
              var card = cards.pop();
              if (get.position(card, true) == 'o') {
                card.fix();
                ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                game.log(player, '将', card, '置于牌堆顶');
              }
            }
            game.updateRoundNumber();
          },
        },
        wugu: {
          audio: 'mengcifan',
          trigger: {
            global: 'dyingAfter',
          },
          filter(event, player) {
            return event.player.isAlive();
          },
          forced: true,
          content() {
            var card = {
              name: 'wugu',
            };
            player.chooseUseTarget('###是否发动【赐繁】？###视为使用一张【五谷丰登】', card, false, 'nodistance');
          },
        },
      },
    },
    //神里绫华
    menglinren: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        player: 'useCard1',
      },
      filter(event, player) {
        if (!event.targets || event.targets.length != 1) return false;
        return event.card && (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name)));
      },
      check(event, player) {
        var types = lib.skill.menglinren.respond(event.card);
        var func = function (player) {
          var cards = player.getCards('h', function (card) {
            return types.includes(get.type2(card));
          });
          var val = 0;
          for (var i of cards) {
            val += get.value(i, player);
          }
          return [val, cards.length];
        };
        return func(player)[0] <= func(event.targets[0])[0] || func(player)[1] < 3;
      },
      respond(card) {
        var respond = [];
        if (get.type(card) == 'basic') respond.push('basic');
        else if (get.type(card) == 'trick') {
          respond.push('trick');
          if (['nanman', 'wanjian', 'juedou'].includes(card.name)) respond.push('basic');
        }
        return respond;
      },
      content() {
        'step 0';
        event.types = lib.skill.menglinren.respond(trigger.card);
        ('step 1');
        player.addTempSkill('menglinren_no');
        event.cards1 = player.getCards('h', function (card) {
          return event.types.includes(get.type2(card));
        });
        player.give(event.cards1, trigger.targets[0], 'giveAuto');
        trigger.targets[0].addTempSkill('menglinren_no');
        event.cards2 = trigger.targets[0].getCards('h', function (card) {
          return event.types.includes(get.type2(card));
        });
        trigger.targets[0].give(event.cards2, player, 'giveAuto');
        ('step 2');
        trigger.targets[0].addGaintag(event.cards1, 'menglinren');
        player.addGaintag(event.cards2, 'menglinren');
        player
          .chooseTarget(`选择一名角色成为${get.translation(event.card)}的额外目标(无视合法性)`)
          .set('ai', function (target) {
            var player = _status.event.player;
            var card = _status.event.getTrigger().card;
            return (get.effect(target, card, player, player) && !_status.event.targetx.includes(target)) || target == player;
          })
          .set('targetx', trigger.targets);
        ('step 3');
        if (result.bool) {
          if (!trigger.targets.includes(result.targets[0])) trigger.targets.push(result.targets[0]);
          game.log('#g【凛刃】', '强制更新此牌的目标为', '<li>' + get.translation(trigger.targets));
        }
      },
      subSkill: {
        no: {
          mod: {
            cardEnabled2(card) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('menglinren')) return false;
            },
            cardDiscardable(card) {
              if (card.hasGaintag('menglinren')) return false;
            },
          },
          onremove(player) {
            player.removeGaintag('menglinren');
          },
        },
      },
    },
    mengqingzi: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        global: 'useCard2',
      },
      forced: true,
      filter(event, player) {
        if (!event.targets.includes(player) && event.player != player) return false;
        return event.targets.length > 1;
      },
      content() {
        'step 0';
        if (trigger.targets.includes(player)) {
          game.log('#g【顷姿】', '将', player, '从目标中移除');
          trigger.targets.remove(player);
        }
        ('step 1');
        if (trigger.player == player) {
          game.log('#g【顷姿】', '此牌结算两次');
          trigger.effectCount++;
        }
        if (!trigger.targets.length) event.finish();
        ('step 2');
        player
          .chooseTarget('你可以取消其中一个目标或令一个目标摸一张牌', function (card, player, target) {
            return _status.event.targetx.includes(target);
          })
          .set('targetx', trigger.targets)
          .set('ai', function (target) {
            var player = _status.event.player;
            return -get.effect(target, _status.event.getTrigger().card, player, player);
          });
        ('step 3');
        if (result.bool) {
          event.target = result.targets[0];
          player.chooseControl('此牌无效', '摸一张牌');
        } else event.finish();
        ('step 4');
        if (result.control == '此牌无效') {
          game.log('#g【顷姿】', '此牌对', event.target, '无效');
          trigger.excluded.add(event.target);
        } else event.target.draw();
      },
    },
    //奎桑提
    mengxuexing: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        source: 'damageSource',
      },
      forced: true,
      logTarget: 'player',
      filter(event, player) {
        return true; //!event.player.hasSkill('mengkui');
      },
      content() {
        if (!trigger.player.hasSkill('mengkui')) trigger.player.addTempSkill('mengkui');
        else trigger.player.removeSkill('mengkui');
      },
      group: ['mengxuexing_kui', 'mengxuexing_ohhh'],
      subSkill: {
        kui: {
          trigger: {
            source: 'damageBegin1',
          },
          forced: true,
          filter(event, player) {
            return event.card && event.player.hasSkill('mengkui');
          },
          content() {
            game.trySkillAudio('mengxuexing', player);
            trigger.num++;
          },
        },
        ohhh: {
          audio: 'ext:忽悠宇宙/audio/skill:3',
          forced: true,
          trigger: {
            player: 'useCard',
          },
          filter(event, player) {
            if (!player.hasSkill('mengquansheng')) return false;
            return (
              event.card &&
              (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
              game.hasPlayer(function (current) {
                return current.hasSkill('mengkui');
              })
            );
          },
          content() {
            trigger.directHit.addArray(
              game.filterPlayer(function (current) {
                return current.hasSkill('mengkui');
              })
            );
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              return arg.target.hasSkill('mengkui');
            },
          },
        },
      },
    },
    mengkui: {
      mark: true,
      marktext: '奎',
      intro: {
        name: '血性',
        name2: '奎',
        content: '你被盯上了!',
      },
    },
    mengpijing: {
      audio: 'ext:忽悠宇宙/audio/skill:5',
      enable: 'phaseUse',
      usable: 2,
      prompt(event, player) {
        if (player.hujia > 0) {
          return `辟径:失去${player.hujia}点护甲并摸${player.hujia}张牌`;
        } else {
          var num = player.hasSkill('mengquansheng') ? player.hp : Math.floor(player.hp / 2);
          return '辟径:失去1点体力' + num > 0 ? `并获得${num}点护甲` : '';
        }
      },
      filter(card, player) {
        if (player.hasSkill('mengpijing_usable') && !player.hasSkill('mengquansheng')) return false;
        return true;
      },
      content() {
        'step 0';
        player.addTempSkill('mengpijing_usable');
        ('step 1');
        if (player.hujia > 0) {
          var num = player.hujia;
          player.changeHujia(-num);
          player.draw(num);
          event.finish();
        } else {
          player.loseHp();
        }
        ('step 2');
        var num = player.hasSkill('mengquansheng') ? player.hp : Math.floor(player.hp / 2);
        if (num > 0) player.changeHujia(num);
      },
      subSkill: {
        usable: {
          forced: true,
          charlotte: true,
        },
      },
      ai: {
        basic: {
          order: 1,
        },
        result: {
          player(player) {
            if (player.hp <= 4 || player.hujia) return -1;
            return 1;
          },
        },
      },
    },
    mengaoan: {
      audio: 'ext:忽悠宇宙/audio/skill:5',
      enable: 'phaseUse',
      usable: 1,
      prompt(event, player) {
        var num = Math.ceil(event.player.maxHp / 2);
        return `傲岸:失去${num}点体力,对一名角色造成1点伤害并进入一轮全盛姿态`;
      },
      filterTarget: true,
      content() {
        player.loseHp(Math.ceil(player.maxHp / 2));
        target.damage();
        player.addTempSkill('mengquansheng', { player: 'phaseZhunbei' });
      },
      ai: {
        order: 10,
        result: {
          player: -10,
        },
      },
    },
    mengquansheng: {
      mark: true,
      marktext: '盛',
      intro: {
        name: '全盛姿态',
        content: '所有技能得到加强.</br>你使用【杀】造成伤害后回复一点体力,你受到的伤害+1.',
      },
      group: ['mengquansheng_player', 'mengquansheng_source'],
      subSkill: {
        player: {
          audio: 'mengaoan',
          trigger: {
            player: 'damageBegin3',
          },
          forced: true,
          content() {
            game.log(`#g全盛姿态${get.translation(player)}受到的伤害+1`);
            trigger.num++;
          },
        },
        source: {
          audio: 'mengaoan',
          trigger: {
            source: 'damageSource',
          },
          forced: true,
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          content() {
            game.log(`#g全盛姿态,${get.translation(player)}回复1点体力`);
            player.recover();
          },
        },
      },
    },
    //凯隐
    menganyi: {
      audio: 'ext:忽悠宇宙/audio/skill:8',
      group: ['menganyi_gain', 'menganyi_blocker', 'menganyi_sha'],
      subSkill: {
        gain: {
          init(player, skill) {
            //获得技能时获得武器
            if (player.hasEquipableSlot(1) && !player.getEquips('meng_layasite').length) {
              var card = get.cardPile(function (card) {
                return card.name.search('meng_layasite') != -1;
              }, 'field');
              if (!card) {
                for (var i of game.filterPlayer()) {
                  var card = i.getCards('hejs', (card) => card.name.search('meng_layasite') != -1)[0];
                  if (card) break;
                }
              }
              if (!card) card = game.createCard2('meng_layasite', 'heart', 9);
              player.$gain2(card, false);
              player.equip(card);
            }
          },
          trigger: {
            //别人偷走后获得武器
            global: 'gainAfter',
          },
          filter(event, player) {
            var evt = event.getl(player);
            if (!evt || !evt.es || !evt.es.length) return false;
            for (var i of evt.es) {
              if (get.subtype(i) == 'equip1' && i.name == 'meng_layasite') {
                return player.hasEquipableSlot('equip1') && !player.getEquips('meng_layasite').length;
              }
            }
          },
          forced: true,
          content() {
            var card = get.cardPile(function (card) {
              return card.name.search('meng_layasite') != -1;
            }, 'field');
            if (!card) {
              for (var i of game.filterPlayer()) {
                if (i != player) {
                  var card = i.getCards('hej', (card) => card.name.search('meng_layasite') != -1)[0];
                }
                if (card) break;
              }
            }
            if (!card) card = game.createCard2('meng_layasite', 'heart', 9);
            player.$gain2(card, false);
            player.equip(card);
          },
        },
        blocker: {
          trigger: {
            //失去武器后,从中取消
            player: ['loseBefore', 'disableEquipBefore'],
          },
          forced: true,
          filter(event, player) {
            if (event.name == 'disableEquip') return event.slots.includes('equip1');
            var cards = player.getEquips('meng_layasite');
            return event.cards && event.cards.some((card) => cards.includes(card));
          },
          content() {
            if (trigger.name == 'lose') {
              trigger.cards.removeArray(player.getEquips('meng_layasite'));
            } else {
              while (trigger.slots.includes('equip1')) trigger.slots.remove('equip1');
            }
          },
          mod: {
            //各种抵抗
            targetEnabled(card, player, target, now) {
              if (card.name == 'jiedao') return false;
            },
            canBeGained(card, source, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
            canBeDiscarded(card, source, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
            canBeReplaced(card, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
            cardDiscardable(card, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
            cardEnabled2(card, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
          },
        },
        sha: {
          trigger: {
            player: 'useCard',
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          content() {
            game.trySkillAudio('menganyi', player);
          },
        },
      },
    },
    mengduoshe: {
      dutySkill: true,
      trigger: {
        global: 'damageEnd',
      },
      forced: true,
      filter(event, player) {
        return event.player == player || (event.source && event.source == player);
      },
      content() {
        if (trigger.player == player) player.addMark('mengduoshe_yi');
        if (trigger.source && trigger.source == player) player.addMark('mengduoshe_yin');
      },
      group: ['mengduoshe_achieve', 'mengduoshe_fail', 'mengduoshe_other'],
      subSkill: {
        yin: {
          mark: true,
          marktext: '影',
          intro: {
            name: '影',
            name2: '影',
          },
        },
        yi: {
          mark: true,
          marktext: '裔',
          intro: {
            name: '裔',
            name2: '裔',
          },
        },
        achieve: {
          audio: 'ext:忽悠宇宙/audio/skill:1',
          trigger: {
            player: 'phaseZhunbeiBegin',
          },
          forced: true,
          filter(event, player) {
            return player.countMark('mengduoshe_yi') >= 3 && player.countMark('mengduoshe_yin') < 3;
          },
          content() {
            'step 0';
            game.log(player, '成功完成使命');
            player.unmarkSkill('mengduoshe');
            player.removeMark('mengduoshe_yi', 99, false);
            player.removeMark('mengduoshe_yin', 99, false);
            player.awakenSkill('mengduoshe');
            ('step 1');
            player.gainMaxHp();
            ('step 2');
            player.recover(player.maxHp);
            player.removeSkill('menganyi');
            player.addSkill('menganyi_rewrite');
          },
        },
        fail: {
          audio: 'ext:忽悠宇宙/audio/skill:1',
          trigger: {
            player: 'phaseZhunbeiBegin',
          },
          forced: true,
          filter(event, player) {
            return player.countMark('mengduoshe_yin') >= 3 && player.countMark('mengduoshe_yi') < 3;
          },
          content() {
            'step 0';
            game.log(player, '使命失败');
            player.unmarkSkill('mengduoshe');
            player.removeMark('mengduoshe_yi', 99, false);
            player.removeMark('mengduoshe_yin', 99, false);
            player.awakenSkill('mengduoshe');
            ('step 1');
            player.loseMaxHp();
            ('step 2');
            player.recover(player.maxHp);
            ('step 3');
            player.removeSkill('menganyi');
            player.addSkillLog('mengyingliu');
          },
        },
        other: {
          trigger: {
            player: 'phaseZhunbeiBegin',
          },
          forced: true,
          filter(event, player) {
            return player.countMark('mengduoshe_yin') >= 3 && player.countMark('mengduoshe_yi') >= 3;
          },
          content() {
            'step 0';
            player.unmarkSkill('mengduoshe');
            player.removeMark('mengduoshe_yi', 99, false);
            player.removeMark('mengduoshe_yin', 99, false);
            player.awakenSkill('mengduoshe');
            player.chooseControl('成功路线', '失败路线').set('prompt', '夺舍:你同时满足两个条件,选择一个使命方向').set('prompt2', '成功:准备阶段,若你至少拥有三枚<裔>,你加1点体力上限并回复所有体力,修改<暗裔>.</br><span class=firetext>失败</span>:准备阶段,若你至少拥有三枚<影>,你减1点体力上限并回复所有体力,失去<暗裔>并获得<影流>.');
            ('step 1');
            event.control = result.control;
            if (event.control == '成功路线') {
              game.log(player, '成功完成使命');
              game.trySkillAudio('mengduoshe_achieve', player);
              player.trySkillAnimate('mengduoshe_achieve', 'mengduoshe_achieve', player.checkShow('mengduoshe_achieve'));
            } else {
              game.trySkillAudio('mengduoshe_fail', player);
              game.log(player, '使命失败');
            }
            event.control == '成功路线' ? player.gainMaxHp() : player.loseMaxHp();
            ('step 2');
            player.recover(player.maxHp);
            ('step 3');
            if (event.control == '成功路线') {
              player.removeSkill('menganyi');
              player.addSkill('menganyi_rewrite');
            } else {
              player.removeSkill('menganyi');
              player.addSkillLog('mengyingliu');
            }
          },
        },
      },
      derivation: ['menganyi_rewrite', 'mengyingliu'],
    },
    menganyi_rewrite: {
      audio: 'ext:忽悠宇宙/audio/skill:7',
      trigger: {
        global: 'damageEnd',
      },
      forced: true,
      filter(event, player) {
        return event.player == player || (event.source && event.source == player && player.isDamaged());
      },
      content() {
        if (trigger.player == player) player.draw(2);
        if (trigger.source && trigger.source == player) player.recover();
      },
      group: ['menganyi_rewrite_gain', 'menganyi_rewrite_blocker', 'menganyi_rewrite_sha'],
      subSkill: {
        gain: {
          init(player, skill) {
            //获得技能时获得武器
            if (player.hasEquipableSlot(1) && !player.getEquips('meng_layasite').length) {
              var card = get.cardPile(function (card) {
                return card.name.search('meng_layasite') != -1;
              }, 'field');
              if (!card) {
                for (var i of game.filterPlayer()) {
                  var card = i.getCards('hejs', (card) => card.name.search('meng_layasite') != -1)[0];
                  if (card) break;
                }
              }
              if (!card) card = game.createCard2('meng_layasite', 'heart', 9);
              player.$gain2(card, false);
              player.equip(card);
            }
          },
          trigger: {
            //别人偷走后获得武器
            global: 'gainAfter',
          },
          filter(event, player) {
            if (!event.cards || !event.cards.length) return false;
            return event.cards && event.cards.some((card) => card.name.search('meng_layasite') != -1) && player.hasEquipableSlot(1) && !player.getEquips('meng_layasite').length;
          },
          forced: true,
          content() {
            var card = get.cardPile(function (card) {
              return card.name.search('meng_layasite') != -1;
            }, 'field');
            if (!card) {
              for (var i of game.filterPlayer()) {
                if (i != player) {
                  var card = i.getCards('hej', (card) => card.name.search('meng_layasite') != -1)[0];
                }
                if (card) break;
              }
            }
            if (!card) card = game.createCard2('meng_layasite', 'heart', 9);
            player.$gain2(card, false);
            player.equip(card);
          },
        },
        blocker: {
          trigger: {
            player: ['loseBefore', 'disableEquipBefore'],
          },
          forced: true,
          filter(event, player) {
            if (event.name == 'disableEquip') return event.slots.includes('equip1');
            var cards = player.getEquips('meng_layasite');
            return event.cards && event.cards.some((card) => cards.includes(card));
          },
          content() {
            if (trigger.name == 'lose') {
              trigger.cards.removeArray(player.getEquips('meng_layasite'));
            } else {
              while (trigger.slots.includes('equip1')) trigger.slots.remove('equip1');
            }
          },
          mod: {
            targetEnabled(card, player, target, now) {
              if (card.name == 'jiedao') return false;
            },
            canBeGained(card, source, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
            canBeDiscarded(card, source, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
            canBeReplaced(card, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
            cardDiscardable(card, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
            cardEnabled2(card, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
          },
        },
        sha: {
          trigger: {
            player: 'useCard',
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          content() {
            game.trySkillAudio('menganyi_rewrite', player);
          },
        },
      },
    },
    mengyingliu: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      trigger: {
        player: 'useCard',
      },
      usable: 1,
      forced: true,
      filter(event, player) {
        return event.card && event.card.name == 'sha';
      },
      content() {
        'step 0';
        game.log('#g【影流】', '此【杀】不能被响应且伤害+1');
        trigger.directHit.addArray(game.players);
        ('step 1');
        var id = trigger.targets[0].playerid;
        var map = trigger.customArgs;
        if (!map[id]) map[id] = {};
        if (typeof map[id].extraDamage != 'number') {
          map[id].extraDamage = 0;
        }
        map[id].extraDamage++;
      },
      group: ['mengyingliu_gain', 'mengyingliu_blocker', 'mengyingliu_add'],
      subSkill: {
        gain: {
          init(player, skill) {
            //获得技能时获得武器
            if (player.hasEquipableSlot(1) && !player.getEquips('meng_layasite').length) {
              var card = get.cardPile(function (card) {
                return card.name.search('meng_layasite') != -1;
              }, 'field');
              if (!card) {
                for (var i of game.filterPlayer()) {
                  var card = i.getCards('hejs', (card) => card.name.search('meng_layasite') != -1)[0];
                  if (card) break;
                }
              }
              if (!card) card = game.createCard2('meng_layasite', 'heart', 9);
              player.$gain2(card, false);
              player.equip(card);
            }
          },
          trigger: {
            //别人偷走后获得武器
            global: 'gainAfter',
          },
          filter(event, player) {
            return event.cards && event.cards.some((card) => card.name.search('meng_layasite') != -1) && player.hasEquipableSlot(1) && !player.getEquips('meng_layasite').length;
          },
          forced: true,
          content() {
            var card = get.cardPile(function (card) {
              return card.name.search('meng_layasite') != -1;
            }, 'field');
            if (!card) {
              for (var i of game.filterPlayer()) {
                if (i != player) {
                  var card = i.getCards('hej', (card) => card.name.search('meng_layasite') != -1)[0];
                }
                if (card) break;
              }
            }
            if (!card) card = game.createCard2('meng_layasite', 'heart', 9);
            player.$gain2(card, false);
            player.equip(card);
          },
        },
        blocker: {
          trigger: {
            player: ['loseBefore', 'disableEquipBefore'],
          },
          forced: true,
          filter(event, player) {
            if (event.name == 'disableEquip') return event.slots.includes('equip1');
            var cards = player.getEquips('meng_layasite');
            return event.cards && event.cards.some((card) => cards.includes(card));
          },
          content() {
            if (trigger.name == 'lose') {
              trigger.cards.removeArray(player.getEquips('meng_layasite'));
            } else {
              while (trigger.slots.includes('equip1')) trigger.slots.remove('equip1');
            }
          },
          mod: {
            targetEnabled(card, player, target, now) {
              if (card.name == 'jiedao') return false;
            },
            canBeGained(card, source, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
            canBeDiscarded(card, source, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
            canBeReplaced(card, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
            cardDiscardable(card, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
            cardEnabled2(card, player) {
              if (player.getEquips('meng_layasite').includes(card)) return false;
              if (get.position(card) == 'e' && get.subtype(card) == 'equip1' && card.name == 'meng_layasite') return false;
            },
          },
        },
        add: {
          trigger: {
            source: 'damageBegin3',
          },
          forced: true,
          charlotte: true,
          filter(event, player) {
            return event.player.hp == 1;
          },
          content() {
            game.log('#g【影流】', '斩杀!');
            trigger.num++;
          },
          _priority: 10,
        },
      },
      ai: {
        directHit_ai: true,
        skillTagFilter(player, tag, arg) {
          return arg.card.name == 'sha' && !player.hasSkill('mengyingliu_phase', null, null, false);
        },
      },
      shaRelated: true,
    },
    //白子
    mengrejipo: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      trigger: {
        source: 'damageBegin1',
      },
      _priority: 20,
      forced: true,
      content() {
        'step 0';
        if (trigger.player.hasSkill('mengzhiru_buff1')) {
          trigger.player.removeSkill('mengzhiru_buff1');
          game.log(trigger.player, '#g触发[减攻]击破,此伤害+1');
          trigger.num++;
          trigger.player.addTempSkill('fengyin');
          event.finish();
        } else if (trigger.player.hasSkill('mengzhiru_buff2')) {
          trigger.player.removeSkill('mengzhiru_buff2');
          trigger.nature = lib.inpile_nature.randomGet();
          game.log(trigger.player, '#g触发[减防]击破,此伤害+1');
          trigger.num++;
          player.addTempSkill('mengrejipo_num');
          player.storage.mengrejipo_num2.push(trigger.player);
          event.finish();
        } else {
          player.chooseBool(get.prompt('mengrejipo', trigger.player), '摸一张牌并令此伤害-1,植入[弱点]').set('ai', function () {
            return get.attitude(player, trigger.player) < 0;
          });
        }
        ('step 1');
        if (result.bool) {
          trigger.num--;
          player.draw();
          var cards = game.cardsGotoOrdering(get.cards(2)).cards;
          player.showCards(cards);
          if (get.type2(cards[0], false) == get.type2(cards[1], false)) {
            game.log(trigger.player, '#g植入[减攻]');
            trigger.player.addSkill('mengzhiru_buff1');
          } else {
            game.log(trigger.player, '#g植入[减防]');
            trigger.player.addSkill('mengzhiru_buff2');
          }
          player
            .when('die')
            .assign({
              forceDie: true,
              charlotte: true,
              firstDo: true,
            })
            .then(() => {
              if (current.hasSkill('mengzhiru_buff1')) current.removeSkill('mengzhiru_buff1');
              if (current.hasSkill('mengzhiru_buff2')) current.removeSkill('mengzhiru_buff2');
            });
        }
      },
      subSkill: {
        num: {
          init(player) {
            player.storage.mengrejipo_num = 0;
            player.storage.mengrejipo_num2 = [];
          },
          trigger: {
            source: 'damageEnd',
          },
          filter(event, player) {
            return player.storage.mengrejipo_num2.includes(event.player);
          },
          forced: true,
          charlotte: true,
          content() {
            game.log(trigger.player, '#r[减防]弱点击破', ',砂狼白子本回合可以额外使用一张杀');
            player.storage.mengrejipo_num++;
          },
          mark: true,
          marktext: '破',
          intro: {
            name: '破防',
            content(content, player) {
              return `你可以额外使用${player.storage.mengrejipo_num}张杀`;
            },
          },
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha') return num + player.storage.mengrejipo_num;
            },
          },
        },
      },
      _priority: 2000,
    },
    mengzhiru_buff1: {
      mark: true,
      marktext: '攻',
      intro: {
        name: '减攻',
        content: '效果:你使用牌指定目标后,除非弃置两张牌(优先弃置手牌),否则此牌无效.',
      },
      trigger: {
        player: 'useCardToPlayered',
      },
      filter(event, player) {
        return player.countCards('he') > 0;
      },
      charlotte: true,
      forced: true,
      content() {
        'step 0';
        if (player.countCards('he') >= 2)
          player
            .chooseToDiscard('弃置两张牌,否则此牌无效', 2, 'he', function (card) {
              if (player.countCards('h') >= 2) return get.position(card) == 'h';
              return true;
            })
            .set('ai', function (card) {
              return true;
            });
        else event._result = { bool: false };
        ('step 1');
        if (!result.bool) {
          game.log(player, '#r[减攻]', '此牌无效');
          trigger.parent.excluded.addArray(game.players);
        }
      },
    },
    mengzhiru_buff2: {
      mark: true,
      marktext: '防',
      intro: {
        name: '减防',
        content: '效果:防具无效且手牌上限基数为2.',
      },
      charlotte: true,
      ai: {
        unequip2: true,
      },
      mod: {
        maxHandcardBase(player, num) {
          return 2;
        },
      },
    },
    mengzhilei: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'phaseUseBegin',
      },
      content() {
        'step 0';
        var cards = game.cardsGotoOrdering(get.cards(3)).cards;
        player.showCards(cards);
        var types = [],
          bool = false;
        for (var i of cards) {
          var type = get.type2(i, false);
          if (!types.includes(type)) types.push(type);
          else {
            bool = true;
            break;
          }
        }
        if (bool) {
          player.chooseTarget(get.prompt2('mengzhilei'), [1, 2], lib.filter.notMe).set('ai', function (target) {
            var att = get.attitude(_status.event.player, target);
            if (target.hasSkill('mengzhiru_buff1') || target.hasSkill('mengzhiru_buff2')) att *= 5;
            return -att;
          });
        } else event.finish();
        ('step 1');
        if (result.bool) {
          event.targets = result.targets;
        } else event.finish();
        ('step 2');
        event.to = event.targets.shift();
        event.from = event.to.hasSkill('mengzhiru_buff1') || event.to.hasSkill('mengzhiru_buff2') ? player : event.to;
        list = [`令${get.translation(event.to)}受到1点无来源的火焰伤害,${get.translation(event.to)}弃置装备区内的所有牌`, `令${get.translation(event.to)}弃置两张牌(优先弃置手牌)`];
        event.from.chooseControlList(list, true);
        ('step 3');
        player.line(event.to, 'fire');
        if (result.index == 0) {
          event.to.damage('fire', 'nosource', 'nocard');
          event.to.discard(event.to.getCards('e'));
        } else {
          event.to.chooseToDiscard(
            '弃置两张牌',
            2,
            'he',
            function (card) {
              if (player.countCards('h') >= 2) return get.position(card) == 'h';
              return true;
            },
            true
          );
        }
        if (event.targets.length) event.goto(2);
      },
    },
    mengkongxi: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      enable: 'phaseUse',
      usable: 1,
      position: 'hes',
      viewAs: {
        name: 'wanjian',
        storage: {
          mengkongxi: true,
        },
      },
      filterCard(card, player) {
        if (ui.selected.cards.length) {
          return get.type2(card) == get.type2(ui.selected.cards[0]);
        }
        var cards = player.getCards('hes');
        if (Array.isArray(cards))
          for (var i of cards) {
            if (card != i) {
              if (get.type2(card) == get.type2(i)) return true;
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
      group: ['mengkongxi_add', 'mengkongxi_count', 'mengkongxi_draw'],
      subSkill: {
        add: {
          trigger: {
            global: 'damageBegin1',
          },
          filter(event, player) {
            return event.card && event.card.storage && event.card.storage.mengkongxi;
          },
          _priority: null,
          silent: true,
          charlotte: true,
          forced: true,
          popup: false,
          content() {
            game.log('#g【空袭】,此伤害+1');
            trigger.num++;
          },
          _priority: null,
        },
        count: {
          trigger: {
            global: 'damageEnd',
          },
          filter(event, player) {
            return event.card && event.card.storage && event.card.storage.mengkongxi;
          },
          charlotte: true,
          silent: true,
          forced: true,
          popup: false,
          content() {
            if (!player.storage.mengkongxi_count) player.storage.mengkongxi_count = 0;
            player.storage.mengkongxi_count += trigger.num;
          },
          _priority: 1,
        },
        draw: {
          trigger: {
            player: 'useCardAfter',
          },
          filter(event, player) {
            return event.card && event.card.storage && event.card.storage.mengkongxi;
          },
          charlotte: true,
          forced: true,
          content() {
            var num = player.storage.mengkongxi_count;
            if (num > 0) player.draw(num);
            delete player.storage.mengkongxi_count;
          },
        },
      },
      ai: {
        order: 8,
        threaten: 1.14,
        unequip: true,
        unequip: true,
        skillTagFilter(player, tag, arg) {
          if (arg && arg.name == 'wanjian' && (tag.name == 'unequip' || tag.name == 'unequip') && arg.card && arg.card.storage && arg.card.storage.mengkongxi) return true;
          return false;
        },
        basic: {
          order: 8.5,
          useful: 1,
          value: 5,
        },
        wuxie(target, card, player, viewer) {
          if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
            if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
          }
        },
        result: {
          target_use(player, target) {
            if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
            var nh = target.countCards('h');
            if (get.mode() == 'identity') {
              if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
            }
            if (nh == 0) return -2;
            if (nh == 1) return -1.7;
            return -1.5;
          },
          target(player, target) {
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
        },
      },
    },
    //新白子---------------------------------------------------------------
    mengjipo: {
      audio: 'mengrejipo',
      trigger: {
        source: 'damageBegin1',
      },
      logTarget: 'player',
      prompt2: (event, player) => (event.player.hasSkill('mengruodian') ? '[击破]此弱点？' : '植入[弱点]'),
      check: (event, player) => -get.attitude(player, event.player),
      content() {
        if (trigger.player.hasSkill('mengruodian')) {
          trigger.player.removeSkill('mengruodian');
        } else {
          game.log('#g[植入]', '此伤害-1');
          trigger.num--;
          trigger.player.addSkill('mengruodian');
        }
      },
    },
    mengruodian: {
      init(player, skill) {
        player.markSkill(skill);
        player.storage[skill] = ['gong', 'fang'].randomGet();
      },
      onremove(player, skill) {
        let tar = game.filterPlayer((current) => current.hasSkill('mengjipo'))[0];
        tar.draw();
        tar.addSkill('mengruodian_jipo');
        //tar.when('phaseEnd').then(() => player.removeSkill('mengruodian_jipo'));//持续到白子tar的回合结束
        tar.storage.mengruodian_jipo.add(player);
        player.unmarkSkill(skill);
        delete player.storage[skill];
      },
      trigger: {
        player: 'useCard',
      },
      mark: true,
      marktext: '弱',
      intro: {
        name: '弱点',
        markcount: (storage, player) => (storage == 'gong' ? ' 攻' : ' 防'),
        content(storage, player) {
          return (storage == 'gong' ? '减攻:你使用牌时随机弃置一张牌.' : '减防:你的防具和护甲失效;且每失效一项,手牌上限-1.') + '</br>击破后,白子摸一张牌,直到白子的回合结束,受到的伤害+1.';
        },
      },
      forced: true,
      charlotte: true,
      filter: (event, player) => player.countCards('he') > 0 && player.storage.mengruodian == 'gong',
      content() {
        player.discard(player.getCards('he').randomGet());
      },
      mod: {
        maxHandcard(player, num) {
          if (player.storage.mengruodian != 'fang') return;
          let k = 0;
          if (player.getEquip(2)) k++;
          if (player.hujia > 0) k++;
          return num - k;
        },
      },
      ai: {
        nohujia: true,
        unequip2: true,
      },
      subSkill: {
        jipo: {
          init(player, skill) {
            player.storage[skill] = [];
          },
          trigger: {
            global: 'damageBegin1',
          },
          mark: true,
          marktext: '破',
          intro: {
            name: '击破',
            content(storage, player) {
              return get.translation(storage);
            },
          },
          _priority: 10,
          forced: true,
          charlotte: true,
          filter(event, player) {
            return player.storage.mengruodian_jipo.includes(event.player);
          },
          content() {
            game.log('#g[击破]', '此伤害+1');
            trigger.num++;
            //下次
            player.storage.mengruodian_jipo.remove(trigger.player);
            if (!player.storage.mengruodian_jipo.length) player.removeSkill('mengruodian_jipo');
          },
        },
      },
    },
    mengjiecai: {
      audio: 'mengzhilei',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return player.countCards('he', (card) => {
          if (card.name == 'sha') return true;
          if (get.type(card) == 'trick' && get.tag(card, 'damage') > 0) return true;
          return false;
        });
      },
      filterCard(card) {
        if (card.name == 'sha') return true;
        if (get.type(card) == 'trick' && get.tag(card, 'damage') > 0) return true;
        return false;
      },
      selectCard: () => [1, game.countPlayer((current) => current != _status.event.player)],
      filterTarget: lib.filter.notMe,
      selectTarget() {
        return ui.selected.cards.length;
      },
      multitarget: false,
      multiline: false,
      async content(event, trigger, player) {
        let str = event.target.hasSkill('mengruodian') ? '' : '否则' + `受到1点火焰伤害`;
        const { cards } = await event.target
          .chooseCard(`将${event.cards.length}张牌交给白子`, 'he', str, event.cards.length)
          .set('forced', event.target.hasSkill('mengruodian') ? true : false)
          .forResult();
        if (cards) {
          player.gain(cards, event.target, 'give');
        }
        if (!cards || event.target.hasSkill('mengruodian')) {
          event.target.damage(player, 'fire');
        }
      },
      ai: {
        order: 8,
        result: {
          target: -5,
        },
      },
    },
    mengyouji: {
      audio: 'mengkongxi',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return game.hasPlayer((current) => current != player && !current.getEquips(3).length && !current.getEquips(4).length);
      },
      filterTarget(card, player, target) {
        return target != player && !target.getEquips(3).length && !target.getEquips(4).length;
      },
      selectTarget: -1,
      multitarget: true,
      multiline: true,
      content() {
        let next = player.useCard({ name: 'wanjian' }, targets);
        next.directHit = game.filterPlayer((current) => current.hasSkill('mengruodian'));
      },
    },
    //微雨绫华
    mengyaohua: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      mark: true,
      marktext: '☯',
      zhuanhuanji: true,
      intro: {
        content(storage, player, skill) {
          var str = '转换技,当你对一名其他角色造成伤害时,你可以防止此伤害,:';
          if (player.storage.mengyaohua != true) str += '阳:你与其翻面.';
          else str += '阴:你弃置自己与其各两张牌.';
          return str;
        },
      },
      trigger: {
        source: 'damageBegin2',
      },
      prompt(event, player) {
        if (player.storage.mengyaohua != true) {
          return `是否防止此伤害,与${get.translation(event.player)}一起翻面？`;
        } else {
          return `是否防止此伤害,弃置自己和${get.translation(event.player)}各两张牌？`;
        }
      },
      check() {
        return false;
      },
      filter(event, player) {
        if (event.player == player) return false;
        return player.storage.mengyaohua != true || player.countCards('he') >= 2;
      },
      content() {
        'step 0';
        trigger.cancel();
        ('step 1');
        if (player.storage.mengyaohua != true) {
          player.changeZhuanhuanji('mengyaohua');
          player.turnOver();
          trigger.player.turnOver();
        } else {
          player.changeZhuanhuanji('mengyaohua');
          player.chooseToDiscard(2, true);
          player.discardPlayerCard(2, trigger.player, true);
        }
      },
    },
    mengshuangyi: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      mark: true,
      marktext: '§',
      yunluji: true,
      intro: {
        content(storage, player, skill) {
          var str = '<li>' + (player.isTurnedOver() ? '背面朝上' : '正面朝上') + '</br>';
          str += '<li>当前效果为:</br>';
          if (!player.isTurnedOver() && player.storage.mengshuangyi != true) {
            str += '①其他角色弃置牌后你获得之';
            str += player.hasSkill('mengshuangyi_one3') ? '.' : ',且防止你受到的伤害.';
          } else if (player.isTurnedOver() && player.storage.mengshuangyi == true) {
            str += '②你使用牌无法被响应,且你无法响应其他角色使用的牌';
          } else str += '<font color=#FF4500>当前无效果</font>';
          str += '<li>转韵可触发的效果为:</br>';
          if (player.storage.mengshuangyi == true) str += '1.正面朝上时,其他角色弃置牌后你获得之.每回合限一次,若你未以此法获得过牌,防止你受到的伤害.';
          else str += '2.背面朝上时,你使用牌无法被响应,且你无法响应其他角色使用的牌.';
          return str;
        },
      },
      trigger: {
        player: 'damageEnd',
        source: 'damageSource',
      },
      forced: true,
      content() {
        lib.skill.mengshuangyi.changeYunluji(player, 'mengshuangyi');
      },
      changeYunluji(player, skill) {
        //事件,韵律技
        var player = player,
          info = get.info(skill),
          yunlu = info.yunluji;
        if (typeof yunlu == 'function') yunlu(player, skill);
        else if (yunlu == 'number') player.addMark(skill, 1, false);
        else player.storage[skill] = !player.storage[skill];
        game.broadcastAll(
          function (player, skill) {
            lib.skill.mengshuangyi.$changeYunluji(player, skill);
          },
          player,
          skill
        );
      },
      $changeYunluji(player, skill) {
        //事件,转韵90动画
        var mark = player.marks[skill];
        if (mark) {
          if (mark.firstChild.reversed) {
            mark.firstChild.reversed = false;
            mark.firstChild.style.transform = 'none';
          } else {
            mark.firstChild.reversed = true;
            mark.firstChild.style.transform = 'rotate(90deg)';
          }
        }
      },
      group: ['mengshuangyi_one1', 'mengshuangyi_one2', 'mengshuangyi_two'],
      subSkill: {
        one1: {
          trigger: {
            global: ['loseAfter', 'loseAsyncAfter'],
          },
          filter(event, player) {
            if (player.isTurnedOver() || player.storage.mengshuangyi == true) return false;
            if (event.type != 'discard' || event.getlx === false) return false;
            var cards = event.cards.slice(0);
            var evt = event.getl(player);
            if (evt && evt.cards) cards.removeArray(evt.cards);
            if (Array.isArray(cards))
              for (var i of cards) {
                if (i.original != 'j' && get.position(i, true) == 'd') {
                  return true;
                }
              }
            return false;
          },
          forced: true,
          content() {
            var cards = [],
              cards2 = trigger.cards.slice(0),
              evt = trigger.getl(player);
            if (evt && evt.cards) cards2.removeArray(evt.cards);
            for (var i = 0; i < cards2.length; i++) {
              if (cards2[i].original != 'j' && get.position(cards2[i], true) == 'd') {
                cards.push(cards2[i]);
              }
            }
            if (cards.length) {
              player.gain(cards, 'gain2', 'log');
              player.addTempSkill('mengshuangyi_one3');
            }
          },
        },
        one2: {
          trigger: {
            player: 'damageBegin4',
          },
          forced: true,
          filter(event, player) {
            if (player.hasSkill('mengshuangyi_one3')) return false;
            return !player.isTurnedOver() && player.storage.mengshuangyi != true;
          },
          content() {
            game.log('#g【霜溢】①', '防止此伤害');
            player.addTempSkill('mengshuangyi_one3');
            trigger.cancel();
          },
        },
        one3: { sub: true },
        two: {
          trigger: {
            global: 'useCard',
          },
          filter(event, player) {
            return player.isTurnedOver() && player.storage.mengshuangyi == true && event.card && (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name)));
          },
          forced: true,
          content() {
            if (event.player == player) {
              game.log('#g【霜溢】②', '你使用牌不能被响应');
              trigger.directHit.addArray(game.filterPlayer());
            } else {
              game.log('#g【霜溢】②', '你不能响应此牌');
              trigger.directHit.push(player);
            }
          },
        },
      },
    },
    //罗刹人
    mengnishang: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      mod: {
        targetEnabled(card, player, target, now) {
          if (card.name == 'shunshou' || card.name == 'guohe') return false;
        },
      },
      global: 'mengnishang_gain',
      subSkill: {
        gain: {
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            if (game.countPlayer((current) => current.hasSkill('mengnishang')) <= 0) return false;
            return player.countCards('he') >= 2 && !player.hasSkill('mengnishang');
          },
          filterCard: true,
          position: 'he',
          selectCard: 2,
          discard: false,
          lose: false,
          delay: 0,
          filterTarget(card, player, target) {
            return target.hasSkill('mengnishang');
          },
          check(card) {
            if (card.name == 'du') return 20;
            if (get.owner(card).countCards('h') < get.owner(card).hp) return 0;
            return 5 - get.value(card);
          },
          content() {
            'step 0';
            game.trySkillAudio('mengnishang', player);
            player.give(cards, target);
            ('step 1');
            target
              .chooseCard(`交给${get.translation(player)}一张牌`, 'he', true, function (card) {
                if (_status.event.cardx.includes(card)) return false;
                return true;
              })
              .set('ai', function (card) {
                return 100 - get.value(card);
              })
              .set('cardx', cards);
            ('step 2');
            player.gain(result.cards, target, 'giveAuto');
          },
          ai: {
            order: 10,
            result: {
              player(player, target) {
                var val = 0.8;
                if (ui.selected.cards[0]) val -= get.value(ui.selected.cards[0]);
                if (ui.selected.cards[1]) val -= get.value(ui.selected.cards[1]);
                return val;
              },
              target: 2,
            },
          },
        },
      },
    },
    mengshouwang: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'useCardToPlayered',
      },
      filter(event, player) {
        if (event.card.name != 'sha') return false;
        if (
          !player.countCards('he', function (card) {
            return get.type2(card) != 'trick';
          })
        )
          return false;
        var evt = lib.skill.mengshouwang.getLastUsed(event.player, event.parent);
        if (!evt || !evt.card) return false;
        return evt.targets && evt.targets.includes(event.target);
      },
      getLastUsed(player, event) {
        var history = player.getAllHistory('useCard', function (evt) {
          return evt.card.name == 'sha' && evt.targets;
        }),
          index;
        if (event) index = history.indexOf(event) - 1;
        else index = history.length - 1;
        if (index >= 0) return history[index];
        return false;
      },
      forced: true,
      content() {
        'step 0';
        player.chooseCardTarget({
          prompt: get.prompt('mengshouwang'),
          prompt: '弃置一张非锦囊牌,对其攻击范围内的角色造成1点伤害',
          filterCard(card) {
            return get.type2(card) != 'trick';
          },
          position: 'he',
          filterTarget(card, player, target) {
            return trigger.player.inRange(target);
          },
          ai1(card) {
            return 8 - get.value(card);
          },
          ai2(target) {
            return get.damageEffect(target, player, player);
          },
        });
        ('step 1');
        if (result.bool) {
          player.discard(result.cards);
          result.targets[0].damage(player);
        }
      },
    },
    mengwenrun: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return player.countCards('e');
      },
      filterCard: true,
      position: 'e',
      filterTarget(card, player, target) {
        return true;
      },
      check(card) {
        return 8 - get.value(card);
      },
      content() {
        target.recover();
        target.addSkill('mengwenrun_1');
        if (!target.getEquip(1)) target.draw();
      },
      ai: {
        order: 1,
        result: {
          target(player, target) {
            return 2;
          },
        }, //QQQ
      },
      subSkill: {
        1: {
          trigger: {
            player: 'phaseBegin',
          },
          charlotte: true,
          popup: true,
          forced: true,
          content() {
            player.addTempSkill('mengwenrun_2', { player: 'phaseAfter' });
            (player.removeSkill('mengwenrun_1'), player.storage.mengwenrun_2++);
          },
        },
        2: {
          charlotte: true,
          mark: true,
          intro: {
            content: '出杀次数+#',
          },
          init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = 0;
          },
          mod: {
            maxHandcard(player, num) {
              return num + player.storage.mengwenrun_2;
            },
            cardUsable(card, player, num) {
              if (card.name == 'sha') return num + player.storage.mengwenrun_2;
            },
          },
        },
      },
    },
    //微雨卡夫卡
    menglaixin: {
      audio: 'ext:忽悠宇宙/audio/skill:8',
      trigger: {
        global: 'phaseBegin',
      },
      filter(event, player) {
        return event.player != player && player.countCards('he') > 0;
      },
      forced: true,
      content() {
        'step 0';
        player
          .chooseCard('he', '来信:你可以交给其一张牌,其执行一项', '1.将此牌交给你,与你各失去1点体力.</br>2.令你摸两张牌并移动场上一张牌.</br>3.与你各摸一张牌,本回合不能对你使用牌.')
          .set('ai', function (card) {
            var att = _status.event.att;
            if (att > 0) {
              return 6 - get.value(card);
            } else {
              if (player.hp <= 2) return 0;
              else return 10 - get.value(card);
            }
          })
          .set('att', get.attitude(player, trigger.player));
        ('step 1');
        if (result.bool) {
          game.log(player, '对', trigger.player, '发动了', '#g【来信】');
          event.cards = result.cards;
          player.give(event.cards, trigger.player, 'giveAuto');
          var name = get.translation(player);
          var list = [`将${get.translation(event.cards)}交给${name},与${name}各失去1点体力.`, `令${name}摸两张牌并移动场上一张牌`, `与${name}各摸一张牌,本回合不能对${name}使用牌`];
          trigger.player
            .chooseControlList(list, '选择一项', true)
            .set('ai', function () {
              var targetx = _status.event.targetx;
              var playerx = _status.event.playerx;
              var att = get.attitude(targetx, playerx);
              if (att >= 0) {
                return 1;
              } else {
                if (get.effect(targetx, { name: 'losehp' }, targetx, targetx) >= 0) return 0;
                if (targetx.hp + targetx.countCards('h', 'tao') > playerx.hp + playerx.countCards('h', 'tao')) return 0;
                if (game.players.length != 2) return 2;
                return 1;
              }
            })
            .set('targetx', trigger.player)
            .set('playerx', player);
        } else event.finish();
        ('step 2');
        switch (result.index) {
          case 0: {
            game.playAudio('../extension/忽悠宇宙/audio/skill/menglaixin' + [1, 2, 3, 4].randomGet());
            trigger.player.give(event.cards, player, 'giveAuto');
            trigger.player.loseHp();
            player.loseHp();
            break;
          }
          case 1: {
            game.playAudio('../extension/忽悠宇宙/audio/skill/menglaixin' + [5, 6].randomGet());
            player.draw(2);
            player.moveCard();
            break;
          }
          case 2: {
            game.playAudio('../extension/忽悠宇宙/audio/skill/menglaixin' + [7, 8].randomGet());
            trigger.player.draw();
            player.draw();
            trigger.player.addTempSkill('menglaixin_no');
          }
        }
      },
      mod: {
        targetEnabled(card, player, target) {
          if (player.hasSkill('menglaixin_no')) return false;
        },
      },
      subSkill: {
        no: {
          mark: true,
          intro: {
            content(player, storage) {
              return '不能对卡夫卡使用牌';
            },
          },
        },
      },
    },
    mengyueluo: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'gainAfter',
        global: 'loseAsyncAfter',
      },
      forced: true,
      filter(event, player) {
        var evt = event.getParent('phaseDraw');
        if (evt && evt.player == player) return false;
        return event.getg(player).length && event.getParent(3).name != 'mengyueluo';
      },
      content() {
        'step 0';
        var cards = trigger.getg(player),
          hs = player.getCards('h');
        cards = cards.filter(function (i) {
          return hs.includes(i);
        });
        player.chooseCardTarget({
          prompt: get.prompt('mengyueluo'),
          prompt2: '将其中一张红/黑色牌当【乐不思蜀】/【兵粮寸断】置入其他角色的判定区内.',
          cards: cards,
          filterCard(card) {
            return _status.event.cards.includes(card);
          },
          filterTarget(card, player, target) {
            var card = ui.selected.cards[0];
            return player != target && target.canAddJudge({ name: get.color(card, false) == 'red' ? 'lebu' : 'bingliang' });
          },
          ai1(card) {
            return 100 - get.value(card);
          },
          ai2(target) {
            return -get.attitude(_status.event.player, target);
          },
        });
        ('step 1');
        if (result.bool) {
          var cards = result.cards,
            target = result.targets[0];
          target.$throw(cards[0]);
          target.addJudge({ name: get.color(cards[0], false) == 'red' ? 'lebu' : 'bingliang' }, result.cards);
        } else event.finish();
        ('step 2');
        if (
          !game.hasPlayer((current) => {
            if (current == player) return false;
            return trigger.getl(current).cards2.length;
          })
        ) {
          player.chooseDrawRecover();
        } else {
          var players = game.players.slice(0).sortBySeat();
          player.line(players);
          for (var i of players) {
            if (i != player) player.useCard({ name: 'sha', nature: 'thunder' }, i);
          }
          player.turnOver();
          player.loseMaxHp();
        }
      },
    },
    //彦卿
    mengjiaoqi: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'phaseDrawAfter',
      },
      preHidden: true,
      filter(event, player) {
        return (
          player.countCards('h') > 0 &&
          game.countPlayer(function (current) {
            return lib.filter.targetEnabled({ name: 'sha' }, player, current);
          })
        );
      },
      forced: true,
      content() {
        'step 0';
        var next = player.chooseCardTarget({
          prompt: '选择普通【杀】的目标',
          prompt2: '将任意张手牌当无距离限制的【杀】使用',
          position: 'h',
          filterCard: true,
          selectCard: [1, Infinity],
          filterTarget(card, player, target) {
            return lib.filter.targetEnabled({ name: 'sha' }, player, target);
          },
          ai1(card) {
            return 4 - get.value(card);
          },
          ai2(target) {
            return get.effect(target, { name: 'sha' }, player);
          },
        });
        ('step 1');
        if (result.bool) {
          player.useCard({ name: 'sha', storage: { mengjiaoqi: true } }, result.cards, result.targets[0], false);
        }
      },
      group: 'mengjiaoqi_damage',
      subSkill: {
        damage: {
          audio: 'ext:忽悠宇宙/audio/skill:2',
          trigger: {
            source: 'damageBegin2',
          },
          filter(event, player) {
            return event.card && event.card.storage && event.card.storage.mengjiaoqi;
          },
          forced: true,
          content() {
            'step 0';
            var num = player.countCards('h');
            game.filterPlayer(function (current) {
              var hs = current.countCards('h');
              if (hs > num) num = hs;
            });
            num++;
            event.count = num - player.countCards('h');
            if (event.count > 5) event.count = 5;
            if (event.count < 2) event.count = 2;
            var list = [];
            if (player.hasSkill('mengduanao_add')) {
              list = ['失去1点体力' + (event.count > 0 ? `并摸${event.count}张牌` : ''), '回复1点体力并摸两张牌'];
            } else {
              list = ['失去1点体力' + (event.count > 0 ? `并摸${event.count}张牌` : '')];
            }
            var ai = function (player) {
              if (list.length > 1) return 1;
              else if (player.hp > 2 && event.count >= 2) return 0;
            };
            player.chooseControl('cancel2').set('choiceList', list).set('prompt', '骄麒:选择一项执行').set('ai', ai);
            ('step 1');
            if (result.control != 'cancel2') {
              if (result.index == 0) {
                player.loseHp();
                if (event.count > 0) player.draw(event.count);
              } else {
                player.recover();
                player.draw(2);
              }
            }
          },
        },
      },
    },
    mengduanao: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      round: 1,
      trigger: {
        global: 'damageEnd',
      },
      filter(event, player) {
        if (_status.currentPhase == player) {
          if (event.player != player) return false;
          if (!event.player.isAlive()) return false;
          if (!event.source) return false;
          return event.source == player;
        } else {
          if (!event.source || !event.source.isAlive()) return false;
          return event.source != player;
        }
      },
      duifang(event, player) {
        var target1 = event.player,
          target2 = event.source;
        if (!target1 || !target1.isIn() || !target2 || !target2.isIn()) return undefined;
        if (target1 == player && target2 != player) return target2;
        else if (target2 == player && target1 != player) return target1;
        else return undefined;
      },
      logTarget(event, player) {
        return _status.currentPhase == player ? event.player : event.source;
      },
      content() {
        'step 0';
        player.draw();
        ('step 1');
        event.targetx = _status.currentPhase == player ? trigger.player : trigger.source;
        if (player.canCompare(event.targetx)) {
          player.chooseToCompare(event.targetx);
        } else event.finish();
        ('step 2');
        if (result.bool) {
          event.targetx.addhyyzBuff('hyyzBuff_dongjie');
          event.finish();
        } else {
          var cards = player.getCards('he');
          var list = [];
          if (Array.isArray(cards))
            for (var i of cards) {
              list.add(i.suit);
            }
          list.sort();
          player
            .chooseControl(list, 'cancel2')
            .set('prompt', '弃置一种花色的所有牌,下次<骄麒>造成伤害可以回血')
            .set('ai', function () {
              var player = _status.event.player;
              if (player.hasSkill('mengduanao_add')) return 'cancel2';
              var val = {},
                min = ['', 100];
              for (var i of player.getCards('he')) {
                var suit = i.suit;
                if (!val[suit]) {
                  val[suit] = get.value(i);
                } else {
                  val[suit] += get.value(i);
                }
                if (val[suit] < min[1]) min = [suit, val[suit]];
              }
              return min[0];
            });
        }
        ('step 3');
        if (result.control != 'cancel2') {
          player.discard(player.getCards('he', { suit: result.control }));
          player.addSkill('mengduanao_add');
          player.markSkill('mengduanao_add');
        }
      },
      subSkill: {
        add: {
          mark: true,
          intro: {
            content: '骄麒②:回复1点体力并摸两张牌',
          },
          trigger: {
            source: 'damageSource',
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          filter(event, player) {
            return event.card && event.card.storage && event.card.storage.mengjiaoqi;
          },
          content() {
            player.removeSkill('mengduanao_add');
            player.unmarkSkill('mengduanao_add');
          },
        },
      },
    },
    //赤鸢
    mengshuyun: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'damageBegin4',
      },
      check(event, player) {
        return get.attitude(player, event.player) > 0;
      },
      logTarget: 'player',
      content() {
        'step 0';
        trigger.player.judge();
        ('step 1');
        if (player.countCards('he')) {
          var str = '';
          if (result.suit == 'red') {
            str += '防止此伤害';
            if (trigger.source && trigger.source.isIn()) {
              str += `,并${get.translation(trigger.player)}对${get.translation(trigger.source)}造成一点伤害`;
            }
          } else {
            if (trigger.source && trigger.source.isIn()) {
              str += get.translation(trigger.player) + `获得${get.translation(trigger.source)}一张牌`;
            }
            if (trigger.num > 1) {
              if (str.length) str += ',且';
              str += '此伤害-1';
            }
            if (!str.length) str += '无事发生';
          }
          player
            .chooseToDiscard('he', function (card) {
              return card.suit == _status.event.suitx;
            })
            .set('suitx', result.suit)
            .set('ai', function (card) {
              return get.attitude(player, trigger.player) > 0 && get.value(card) < 8;
            })
            .set('prompt2', str);
        } else event._result = { bool: false };
        ('step 2');
        if (result.bool) {
          var color = get.color(result.cards[0]);
          if (color == 'red') {
            trigger.cancel();
            if (trigger.source && trigger.source.isIn()) trigger.source.damage(trigger.player);
          } else {
            if (trigger.source && trigger.source.isIn() && trigger.source.countCards('he') > 0) trigger.player.gainPlayerCard(trigger.source, 'he');
            if (trigger.num > 1) trigger.num--;
          }
        }
      },
    },
    mengcaixin: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      group: ['mengcaixin_cancel', 'mengcaixin_use', 'mengcaixin_exc'],
      subSkill: {
        cancel: {
          trigger: {
            global: ['damageCancelled', 'damageZero', 'damageAfter'],
          },
          forced: true,
          filter(event, player, name) {
            if (name == 'damageCancelled') return true;
            for (var i of event.change_history) {
              if (i < 0) return true;
            }
            return false;
          },
          content() {
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengcaixin' + [1, 2].randomGet());
            player.gainMaxHp();
            //player.draw();
          },
        },
        use: {
          trigger: {
            player: 'useCardAfter',
          },
          filter(event, player) {
            return player.maxHp > 1 && (event.card.name == 'sha' || event.card.name == 'jiu');
          },
          prompt2(event, player) {
            return `减1点体力上限令${get.translation(event.card)}不计入次数限制`;
          },
          check(event, player) {
            if (event.card.name == 'sha' && player.countCards('h', { name: 'sha' }) > 0 && player.getDamagedHp() > 2) return true;
          },
          content() {
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengcaixin3.mp3');
            player.loseMaxHp();
            if (player.getStat().card[trigger.card.name] > 0) player.getStat().card[trigger.card.name]--;
          },
        },
        exc: {
          prompt2(event, player) {
            return `减1点体力上限令${get.translation(event.card)}无效,并获得${get.translation(event.player)}一张牌`;
          },
          trigger: {
            global: ['useCard'],
          },
          logTarget: 'player',
          filter(event, player) {
            if (event.player == player) return false;
            return _status.currentPhase == player && event.player.maxHp > 1;
          },
          check(event, player) {
            return player.getDamagedHp() > 2;
          },
          content() {
            'step 0';
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengcaixin4.mp3');
            player.loseMaxHp();
            if (trigger.name == 'useCard') {
              trigger.all_excluded = true;
              trigger.targets.length = 0;
              game.log('#g【裁心】', trigger.card, '被取消');
            } else {
            }
            ('step 1');
            player.gainPlayerCard(trigger.player, 'he');
          },
        },
      },
    },
    //莱依拉
    mengfanqi: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      init(player) {
        player.storage.mengfanqi = true;
      },
      trigger: {
        player: 'phaseDrawBegin2',
      },
      filter(event, player) {
        return !event.numFixed;
      },
      forced: true,
      content() {
        'step 0';
        if (player.storage.mengfanqi) {
          var map = { 一: 1, 二: 2, 三: 3, 四: 4 };
          var list = ['一', '二', '三', '四'];
        } else {
          var map = { 一: 1, 二: 2 };
          var list = ['一', '二'];
        }
        event.map = map;
        player
          .chooseControl(list, 'cancel2', function () {
            return get.cnNumber(_status.event.goon, true);
          })
          .set(
            'goon',
            player.skipList.includes('phaseUse')
              ? 4
              : player.countCards('h', function (card) {
                return get.tag(card, 'damage') && player.hasUseTarget(card);
              })
                ? 1
                : 4
          )
          .set('prompt', `繁期:多摸至多${get.translation(list.length)}张牌`)
          .set('prompt2', '不为1,本回合你使用牌时,不能再对其他角色使用牌;</br>为4,下次发动此技至多多摸两张牌');
        ('step 1');
        if (result.control != 'cancel2') {
          var num = event.map[result.control] || 1;
          if (num >= 4) player.storage.mengfanqi = false;
          else player.storage.mengfanqi = true;
          trigger.num += num;
          if (num > 1) player.addTempSkill('mengfanqi2', { player: 'phaseUseAfter' });
        }
      },
    },
    mengfanqi2: {
      trigger: {
        player: 'useCard1',
      },
      filter(event, player) {
        return player.isPhaseUsing();
      },
      silent: true,
      popup: false,
      forced: true,
      charlotte: true,
      content() {
        player.addTempSkill('zishou2', { player: 'phaseUseAfter' });
      },
      _priority: 1,
    },
    mengmiansi: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        player: 'phaseDiscardBegin',
      },
      filter(event, player) {
        return !player.isTurnedOver();
      },
      content() {
        'step 0';
        player.turnOver();
        player.addTempSkill('mengmiansi_tag', 'phaseDiscardAfter');
      },
      group: ['mengmiansi_count', 'mengmiansi_reset', 'mengmiansi2'],
      subSkill: {
        count: {
          trigger: {
            player: 'gainBegin',
          },
          forced: true,
          silent: true,
          popup: false,
          filter(event, player) {
            return _status.currentPhase == player;
          },
          content() {
            trigger.gaintag.add('mengmiansi');
          },
          _priority: 1,
        },
        reset: {
          trigger: {
            player: ['phaseBefore', 'phaseAfter'],
          },
          silent: true,
          _priority: 10,
          content() {
            player.removeGaintag('mengmiansi');
          },
          forced: true,
          popup: false,
          _priority: 1001,
        },
        tag: {
          mod: {
            ignoredHandcard(card, player) {
              if (card.hasGaintag('mengmiansi')) {
                return true;
              }
            },
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && card.hasGaintag('mengmiansi')) {
                return false;
              }
            },
          },
        },
      },
      onremove(player) {
        player.removeGaintag('mengmiansi');
      },
    },
    mengmiansi2: {
      trigger: {
        player: 'turnOverEnd',
      },
      forced: true,
      filter(event, player) {
        return player.countCards('he') >= 1;
      },
      async content(event, trigger, player) {
        let dialog = ui.create.dialog('眠思', 'hidden');
        dialog.addText('若选择出杀,将根据你选择的排序依次使用之');
        var table = document.createElement('div');
        table.classList.add('add-setting');
        table.style.margin = '0';
        table.style.width = '100%';
        table.style.position = 'relative';
        var list = ['出杀', '拆牌', '回复'];
        for (var i = 0; i < list.length; i++) {
          var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
          td.innerHTML = `<span>${list[i]}</span>`;
          td.link = i;
          td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
          Object.setPrototypeOf(td, lib.element.Button.prototype); //QQQ
          table.appendChild(td);
          dialog.buttons.add(td);
        }
        dialog.content.appendChild(table);
        dialog.add(player.getCards('he'));
        let next = player.chooseButton();
        next.set('dialog', dialog);
        next.set('selectButton', [2, 4]);
        next.set('filterButton', function (button, player) {
          var map = {
            number: 0,
            object: 0,
          };
          if (ui.selected.buttons.length) {
            for (var i = 0; i < ui.selected.buttons.length; i++) {
              map[typeof ui.selected.buttons[i].link]++;
            }
          }
          if (map.object == map.number) return true;
          else {
            if (map.object > map.number) return typeof button.link == 'number';
            if (map.object < map.number) return typeof button.link == 'object';
          }
        });
        const { links } = await next.forResult();
        if (links) {
          dialog.close();
          const cardx = links.filter((i) => typeof i != 'number');
          const control = links.filter((i) => typeof i == 'number');
          player.discard(cardx);
          if (control.includes(0) && player.hasUseTarget({ name: 'sha' })) {
            //包含杀
            const { targets: shaer } = await player
              .chooseTarget(`选择一名其他角色作为【杀】(${get.translation(cardx)})的目标`, true, function (card, player, target) {
                return lib.filter.targetEnabled2({ name: 'sha' }, player, target) && lib.filter.targetInRange({ name: 'sha' }, player, target);
              })
              .set('ai', function (target) {
                return get.effect(target, { name: 'sha' }, player, player) > 0;
              })
              .forResult();
            if (shaer) {
              player.useCard({ name: 'sha' }, cardx, shaer[0], false);
            }
          }
          if (control.includes(1)) {
            let map = [];
            while (
              map.length < 3 &&
              game.hasPlayer((current) => {
                return current != player && current.countDiscardableCards(player, 'he') && map.filter((k) => k == current.name).length < 2;
              })
            ) {
              const { targets: discarder } = await player
                .chooseTarget(`弃置一名其他角色的牌(${map.length}/3)`, function (card, player, target) {
                  if (map.filter((k) => k == target.name).length >= 2) return false;
                  return target.countDiscardableCards(player, 'he') && target != player;
                })
                .set('ai', (target) => -get.attitude(player, target))
                .forResult();
              if (discarder) {
                map.push(discarder[0].name);
                player.discardPlayerCard(discarder[0], 'he', true);
              }
            }
          }
          if (control.includes(2)) {
            player.recover();
            player.draw();
          }
        }
      },
      ai: {
        unequip: true,
        unequip: true,
        skillTagFilter(player, tag, arg) {
          if (tag == 'unequip' && (!arg || !arg.card || !arg.card.storage || !arg.card.storage.mengmiansi)) return false;
          if (tag == 'unequip' && (!arg || arg.name != 'sha')) return false;
        },
      },
    },
    //艾尔海森
    mengtuiyan: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return true;
      },
      filterTarget(card, player, target) {
        return player != target && target.countCards('h') > 0;
      },
      content() {
        'step 0';
        target.chooseCard('推演:选择一张手牌', true);
        ('step 1');
        event.cardx = result.cards[0];
        var list = ['此时是否有此牌的合法目标', '　　此牌是否是基本牌　　', '　　　　此牌的颜色　　　　'];
        for (var i = 0; i < list.length; i++) {
          list[i] = [i, list[i]];
        }
        var next = target.chooseButton(['赐福:选择两种描述方式', [list.slice(0, 1), 'tdnodes'], [list.slice(1, 2), 'tdnodes'], [list.slice(2, 3), 'tdnodes']]);
        next.set('forced', true);
        next.set('selectButton', 2);
        next.set('filterButton', () => true);
        ('step 2');
        var str = '这是一张';
        event.boolx = {};
        if (result.links.includes(0)) {
          if (game.hasPlayer((current) => target.canUse(event.cardx, current))) {
            event.boolx[1] = true;
            str += '[能使用的]';
          } else {
            event.boolx[1] = false;
            str += '[不能使用的]';
          }
        }
        if (result.links.includes(2)) {
          event.boolx[2] = get.color(event.cardx);
          str += `[${get.translation(get.color(event.cardx))}]`;
        }
        if (result.links.includes(1)) {
          event.boolx[3] = get.type(event.cardx) == 'basic' ? true : false;
          str += get.type(event.cardx) == 'basic' ? '[基本]' : '[非基本]';
        }
        str += '牌';
        target.say(str);
        game.log(target, '说', str);
        ('step 3');
        player
          .choosePlayerCard(target, true, 'h', 'visible')
          .set('prompt', '猜猜看他说的是那张牌？')
          .set('ai', function (button) {
            //QQQ
            var bool = _status.event.bool;
            if (bool[1] == true && !game.hasPlayer((current) => _status.event.target.canUse(button.link, current))) return false;
            if (bool[1] == false && game.hasPlayer((current) => _status.event.target.canUse(button.link, current))) return false;
            if (bool[2] == 'red' && get.color(button.link) != 'red') return false;
            if (bool[2] == 'black' && get.color(button.link) != 'black') return false;
            if (bool[3] == true && get.type(button.link) != 'basic') return false;
            if (bool[3] == false && get.type(button.link) == 'basic') return false;
            if (_status.event.luck != false) return (button.link = _status.event.luck);
            return true;
          })
          .set('bool', event.boolx)
          .set('target', target)
          .set('luck', get.isLuckyStar(player) ? event.cardx : false);
        ('step 4');
        target.showCards(event.cardx);
        game.log(player, '选择了', result.cards[0]);
        if (event.cardx == result.cards[0]) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengtuiyan' + [2, 3].randomGet());
          player.say('如我所料');
          player.draw(target.countCards('h'));
        } else {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengtuiyan' + [4, 5].randomGet());
          player.say('计划有变');
          player.loseHp();
          target.give(event.cardx, player, 'giveAuto');
        }
      },
      ai: {
        order: 15,
        result: {
          player(player, target) {
            var num = target.countCards('he');
            if (player.hp <= 1) return (1 - num) * 10 + 1;
            return 3 - num;
          },
          target: -1,
        },
        threaten: 2,
      },
    },
    mengrishen: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      trigger: {
        player: ['gainAfter', 'useCard1'],
        global: 'loseAsyncAfter',
      },
      forced: true,
      filter(event, player) {
        if (event.name == 'useCard') {
          return player.hasHistory('lose', (evt) => {
            if (event != evt.parent) return false;
            for (var i in evt.gaintag_map) {
              if (evt.gaintag_map[i][0].includes('visible_')) return true;
            }
            return false;
          });
        } else {
          var evt = event.getParent('phaseDraw');
          if (evt && evt.player == player) return false;
          return event.getg(player).length;
        }
      },
      content() {
        'step 0';
        if (trigger.name == 'useCard') {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengrishen' + [3, 4].randomGet());
          game.log(trigger.card, '不能被响应');
          trigger.directHit.addArray(game.players);
        } else {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengrishen' + [1, 2].randomGet());
          var cards = trigger.getg(player);
          player.addShownCards(cards, 'visible_dddxianglang');
        }
      },
    },
    //希儿沧海
    mengshuanghun: {
      init() {
        lib.character.meng_xiercanghaiwhite = ['female', 'hyyz_b3', 4, ['mengbaizhou', 'mengmingguang'], ['ext:忽悠宇宙/image/character/meng_xiercanghaiwhite.jpg']];
        lib.character.meng_xiercanghaiblack = ['female', 'hyyz_b3', 4, ['mengheiye', 'menganying'], ['ext:忽悠宇宙/image/character/meng_xiercanghaiblack.jpg']];
      },
      trigger: {
        global: ['phaseBefore'],
        player: 'enterGame',
      },
      forced: true,
      filter(event, player) {
        return event.name != 'phase' || game.phaseNumber == 0;
      },
      content() {
        'step 0';
        player.chooseButton(true, ['双魂:选择一个人格', [['meng_xiercanghaiwhite', 'meng_xiercanghaiblack'], 'character']]);
        ('step 1');
        player.storage.mengshuanghun = result.links[0];
        player.markSkill('mengshuanghun');
        ('step 2');
        if (player.storage.mengshuanghun == 'meng_xiercanghaiwhite') {
          player.addAdditionalSkill('mengshuanghun', ['mengbaizhou', 'mengmingguang']);
          player.node.avatar.setBackgroundImage('extension/忽悠宇宙/image/character/meng_xiercanghaiwhite.jpg');
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengshuanghun1.mp3');
        } else {
          player.addAdditionalSkill('mengshuanghun', ['mengheiye', 'menganying']);
          player.node.avatar.setBackgroundImage('extension/忽悠宇宙/image/character/meng_xiercanghaiblack.jpg');
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengshuanghun2.mp3');
        }
      },
      derivation: ['mengbaizhou', 'mengmingguang', 'mengheiye', 'menganying'],
    },
    mengsisheng: {
      trigger: {
        player: ['phaseZhunbeiBegin', 'turnOverEnd'],
      },
      filter(event, player) {
        if (player.hasSkill('mengsisheng_end') || player.hasSkill('mengsisheng_phase')) return false;
        return true;
      },
      content() {
        'step 0';
        if (player.isLinked()) {
          player.link();
        }
        ('step 1');
        if (player.isTurnedOver()) {
          player.turnOver();
        }
        ('step 2');
        if (player.storage.mengshuanghun && player.storage.mengshuanghun == 'meng_xiercanghaiwhite') {
          player.storage.mengshuanghun = 'meng_xiercanghaiblack';
        } else player.storage.mengshuanghun = 'meng_xiercanghaiwhite';
        player.markSkill('mengshuanghun');
        player.addTempSkill('mengsisheng_phase', { player: 'phaseBegin' });
        ('step 3');
        if (player.storage.mengshuanghun == 'meng_xiercanghaiwhite') {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengsisheng1.mp3');
          player.addAdditionalSkill('mengshuanghun', ['mengbaizhou', 'mengmingguang']);
          player.node.avatar.setBackgroundImage('extension/忽悠宇宙/image/character/meng_xiercanghaiwhite.jpg');
        } else {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengsisheng2.mp3');
          player.addAdditionalSkill('mengshuanghun', ['mengheiye', 'menganying']);
          player.node.avatar.setBackgroundImage('extension/忽悠宇宙/image/character/meng_xiercanghaiblack.jpg');
        }
      },
      subSkill: {
        phase: {
          mark: true,
          intro: {
            content: '死生失效',
          },
          onremove(player, skill) {
            player.addTempSkill('mengsisheng_end');
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
        },
        end: {
          mark: true,
          intro: {
            content: '死生失效',
          },
        },
      },
    },
    mengbaizhou: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      enable: 'phaseUse',
      usable: 1,
      filterCard: true,
      position: 'he',
      selectCard: [1, Infinity],
      check(card) {
        var player = get.owner(card);
        if (get.type(card) == 'trick') return 10;
        if (player.countCards('h') - player.hp - ui.selected.cards.length) {
          return 8 - get.value(card);
        }
        return 4 - get.value(card);
      },
      filterTarget: true,
      content() {
        target.recover();
        target.draw(cards.length);
      },
      ai: {
        expose: 0.2,
        order: 1,
        result: {
          target: 1,
        },
      },
    },
    mengmingguang: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'recoverAfter',
      },
      usable: 1,
      check(event, player) {
        return get.attitude(player, event.player) > 0;
      },
      content() {
        trigger.player.addSkill('mengmingguang_1');
        player.drawTo(player.maxHp);
      },
      group: 'mengmingguang_die',
      subSkill: {
        die: {
          trigger: {
            player: 'dieBegin',
          },
          forceDie: true,
          forced: true,
          popup: false,
          firstDo: true,
          charlotte: true,
          content() {
            game.playAudio('../extension/忽悠宇宙/audio/skill/meng_xiercanghaiwhite.mp3');
          },
        },
        1: {
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          mark: true,
          intro: {
            content: '下次受到的伤害-1',
          },
          trigger: {
            player: 'damageBegin3',
          },
          content() {
            game.log('#g【明光】', '此伤害-1');
            trigger.num--;
            player.removeSkill('mengmingguang_1');
          },
        },
      },
    },
    mengheiye: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        source: 'damageSource',
      },
      check(event, player) {
        return get.attitude(player, event.player) < 0;
      },
      filter(event, player) {
        return event.card && get.color(event.card) == 'black' && event.player.isAlive();
      },
      content() {
        'step 0';
        trigger.player.loseHp();
        ('step 1');
        if (trigger.player.getDamagedHp() > 0) player.draw(trigger.player.getDamagedHp());
      },
    },
    menganying: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'loseHpEnd',
      },
      usable: 1,
      check(event, player) {
        return get.attitude(player, event.player) < 0;
      },
      filter(event, player) {
        return event.player.isAlive();
      },
      content() {
        'step 0';
        trigger.player.addSkill('menganying_1');
        ('step 1');
        var num = trigger.player.countCards('h') - trigger.player.hp;
        if (num > 0) trigger.player.chooseToDiscard('h', true, num);
        else trigger.player.draw(-num);
      },
      group: 'menganying_die',
      subSkill: {
        die: {
          trigger: {
            player: 'dieBegin',
          },
          forceDie: true,
          forced: true,
          popup: false,
          firstDo: true,
          charlotte: true,
          content() {
            game.playAudio('../extension/忽悠宇宙/audio/skill/meng_xiercanghaiblack.mp3');
          },
        },
        1: {
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          mark: true,
          intro: {
            content: '下次受到的伤害+1',
          },
          trigger: {
            player: 'damageBegin3',
          },
          content() {
            game.log('#g【暗影】', '此伤害+1');
            trigger.num++;
            player.removeSkill('menganying_1');
          },
        },
      },
    },
    //塞西莉亚
    mengxieheng1: {
      mark: true,
      marktext: '☯',
      zhuanhuanji: true,
      intro: {
        content(storage, player, skill) {
          var str = '';
          if (player.storage.mengxieheng1 == true) str += '阴:你使用【桃】时,令所有角色加入此牌目标.';
          else str += '阳:你使用【杀】时,令所有角色加入此牌目标.';
          return str;
        },
      },
      trigger: {
        player: 'useCard',
      },
      forced: true,
      filter(event, player) {
        if (player.storage.mengxieheng1 != true) {
          //阳
          return event.card && event.card.name == 'sha';
        } else return event.card && event.card.name == 'tao';
      },
      content() {
        'step 0';
        player.changeZhuanhuanji('mengxieheng1');
        trigger.targets.length = 0;
        ('step 1');
        trigger.targets = game.filterPlayer();
        player.line(game.filterPlayer(), trigger.card.name == 'sha' ? 'fire' : 'green');
      },
      ai: {
        threaten: 1.05,
      },
    },
    mengxieheng2: {
      mark: true,
      marktext: '☯',
      zhuanhuanji: true,
      intro: {
        content(storage, player, skill) {
          var str = '';
          if (player.storage.mengxieheng2 == true) str += '阴:你使用牌时,若目标包含自己,将自己移出目标.';
          else str += '阳:你使用牌时,若目标包含其他角色,将其他角色移出目标.';
          return str;
        },
      },
      trigger: {
        player: 'useCard',
      },
      forced: true,
      filter(event, player) {
        if (player.storage.mengxieheng2 != true) {
          //阳
          return event.targets.filter((target) => target != player).length;
        } else {
          return event.targets.filter((target) => target == player).length;
        }
      },
      content() {
        'step 0';
        if (player.storage.mengxieheng2 != true) {
          //阳
          trigger.targets.removeArray(game.filterPlayer((current) => current != player));
        } else {
          trigger.targets.remove(player);
        }
        ('step 1');
        player.changeZhuanhuanji('mengxieheng2');
      },
      ai: {
        threaten: 1.05,
      },
    },
    mengxieheng3: {
      mark: true,
      marktext: '☯',
      zhuanhuanji: true,
      intro: {
        content(storage, player, skill) {
          var str = '';
          if (player.storage.mengxieheng3 == true) str += '阴:你使用的牌结算后,若有角色因此牌受到伤害或回复体力,你失去一点体力并获得此牌,且此牌不计入使用次数.';
          else str += '阳:你使用的牌结算后,若没有角色因此牌受到伤害或回复体力,你将手牌摸至或弃置至已损失体力值,本回合你使用同类型的牌额外结算一次.';
          return str;
        },
      },
      trigger: {
        player: 'useCardAfter',
      },
      forced: true,
      filter(event, player) {
        if (player.storage.mengxieheng3 != true) {
          return !event.card.storage || !event.card.storage.mengxieheng3;
        } else {
          return event.card && event.card.storage && event.card.storage.mengxieheng3;
        }
      },
      content() {
        'step 0';
        if (player.storage.mengxieheng3 != true) {
          var num = player.countCards('h') - player.getDamagedHp();
          if (num > 0) trigger.player.chooseToDiscard('h', true, num);
          else trigger.player.draw(-num);
          player.addTempSkill('mengxieheng3_add');
          player.storage.mengxieheng3_add = get.type2(trigger.card);
        } else {
          player.loseHp();
          player.gain(trigger.cards, 'gain2');
          if (player.getStat().card[trigger.card.name] > 0) player.getStat().card[trigger.card.name]--;
        }
        ('step 1');
        player.changeZhuanhuanji('mengxieheng3');
      },
      group: 'mengxieheng3_log',
      subSkill: {
        add: {
          onremove(player, skill) {
            delete player.storage.mengxieheng3_add;
          },
          init(player, skill) {
            player.storage.mengxieheng3_add = '';
          },
          trigger: {
            player: 'useCard',
          },
          forced: true,
          filter(event, player) {
            return player.storage.mengxieheng3_add == get.type2(event.card);
          },
          content() {
            // trigger.parent.targets=trigger.parent.targets.concat(trigger.targets);
            // trigger.parent.triggeredTargets4=trigger.parent.triggeredTargets4.concat(trigger.targets);
            trigger.parent.effectCount++;
          },
        },
        log: {
          trigger: {
            global: ['damageEnd', 'recoverEnd'],
          },
          filter(event, player) {
            return event.card && event.source && event.source == player;
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          content() {
            trigger.card.storage.mengxieheng3 = true;
          },
        },
      },
      ai: {
        threaten: 1.05,
      },
    },
    //宵宫
    mengyanshang: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      mod: {
        targetInRange(card, player, target) {
          if (!card.cards) return;
          for (var i of card.cards) {
            if (player.getHistory('gain', (evt) => evt && evt.cards && evt.cards.includes(i)).length) return true;
          }
        },
        cardUsable(card, player) {
          if (!card.cards) return;
          for (var i of card.cards) {
            if (player.getHistory('gain', (evt) => evt && evt.cards && evt.cards.includes(i)).length) return true;
          }
        },
      },
      trigger: {
        player: 'useCard',
      },
      filter(event, player) {
        if (get.itemtype(event.cards) != 'cards') return false;
        for (var i of event.cards) {
          if (player.getHistory('gain', (evt) => evt && evt.cards && evt.cards.includes(i)).length) return true;
        }
        return false;
      },
      forced: true,
      content() { },
    },
    menghuahuo: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      init(player) {
        player.storage.menghuahuo = [];
      },
      trigger: {
        player: 'useCardAfter',
      },
      filter(event, player) {
        if (!event.card) return false;
        return ['trick', 'basic'].includes(get.type(event.card));
      },
      forced: true,
      content() {
        'step 0';
        var card1 = game.createCard(trigger.card);
        var card2 = game.createCard(trigger.card);
        var cards = [card1, card2];
        player.$throw(cards, 1000);
        game.log('【花火】', player, '将', cards, '加入牌堆');
        game.cardsGotoPile(cards, () => {
          return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
        });
        player.storage.menghuahuo.push(card1);
        player.storage.menghuahuo.push(card2);
        player.markSkill('menghuahuo');
        ('step 1');
        game.updateRoundNumber();
      },
      intro: {
        mark(dialog, content, player) {
          dialog.addAuto(content);
        },
      },
      group: ['menghuahuo_use', 'menghuahuo_lose'],
      subSkill: {
        use: {
          trigger: {
            global: 'useCardToPlayer',
          },
          filter(event, player) {
            return (
              player.storage.menghuahuo &&
              player.storage.menghuahuo.length &&
              event.cards.filter(function (i) {
                return player.storage.menghuahuo.includes(i);
              }).length
            );
          },
          forced: true,
          content() {
            'step 0';
            var list = trigger.cards.filter(function (i) {
              return player.storage.menghuahuo.includes(i);
            });
            var cards = [];
            for (var cardx of list) {
              for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                var card = ui.cardPile.childNodes[i];
                if (card.name == cardx.name) {
                  cards.push(card);
                }
              }
            }
            player.gain(cards, 'gain2').triggerd = null;
            player.discard(cards);
          },
        },
        lose: {
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
              if ((type == 'basic' || type == 'trick') && player.storage.menghuahuo && player.storage.menghuahuo.includes(i)) return true;
            }
            return false;
          },
          content() {
            var num = 0;
            for (var i of trigger.cards) {
              if (player.storage.menghuahuo && player.storage.menghuahuo.includes(i)) num++;
            }
            player.draw(num);
          },
        },
      },
    },
    mengxiaji: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      enable: 'phaseUse',
      limited: true,
      filter(event, player) {
        return !player.storage.mengxiaji;
      },
      content() {
        player.storage.mengxiaji = true;
        game.filterPlayer(function (current) {
          current.addSkill('mengxiaji2');
        });
      },
      mark: true,
      intro: {
        content: 'limited',
      },
      init(player, skill) {
        player.storage[skill] = false;
      },
      ai: {
        order: 1,
        result: {
          player: 1,
        },
      },
    },
    mengxiaji2: {
      trigger: {
        player: ['phaseBegin', 'die'],
      },
      forceDie: true,
      silent: true,
      popup: false,
      forced: true,
      charlotte: true,
      filter(event, player) {
        return player.hasSkill('mengxiaji');
      },
      content() {
        game.filterPlayer(function (current) {
          current.removeSkill('mengxiaji2');
        });
      },
      mod: {
        cardname(card, player, name) {
          if (card) return 'huogong';
        },
      },
    },
    //卡莉露
    menglinting: {
      trigger: {
        global: 'useCardToPlayer',
      },
      forced: true,
      filter(event, player) {
        if (player.hasSkill('menglinting_usable')) return false;
        var info = get.info(event.card, false);
        if (info.allowMultiple == false) return false;
        if (event.card.name != 'tao' && !(get.type(event.card) == 'trick' && !get.tag(event.card, 'damage'))) return false;
        if (event.player == player) {
          return game.hasPlayer(function (current) {
            return current.countCards('he') > 0 && !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
          });
        } else {
          return player.countCards('he') > 0 && !event.targets.includes(player) && lib.filter.targetEnabled2(event.card, event.player, player);
        }
      },
      content() {
        'step 0';
        if (trigger.player != player) {
          player.chooseCard('he', `【聆听】,交给${get.translation(trigger.player)}一张牌成为${get.translation(trigger.card)}的目标`).set('ai', function (card) {
            var trigger = _status.event.getTrigger();
            var card = trigger.card;
            var player = _status.event.player;
            if (get.effect(player, card, trigger.player, player) > 0) return 8 - get.value(card);
          });
        } else {
          player
            .chooseTarget(`【聆听】,获得一名角色的一张牌使其成为${get.translation(trigger.card)}的目标`, function (card, player, target) {
              var trigger = _status.event.getTrigger();
              var card = trigger.card;
              return !trigger.targets.includes(target) && lib.filter.targetEnabled2(card, player, target) && target.countCards('he') > 0;
            })
            .set('ai', function (target) {
              var player = _status.event.player;
              var card = _status.event.getTrigger().card;
              return get.effect(target, card, player, player);
            });
        }
        ('step 1');
        if (result.bool) {
          player.addTempSkill('menglinting_usable');
          if (result.cards?.length) {
            trigger.player.gain(result.cards, player, 'giveAuto');
            trigger.parent.targets.add(player);
          }
          if (result.targets?.length) {
            player.gainPlayerCard(result.targets[0], true, 'hej');
            trigger.parent.targets.add(result.targets[0]);
          }
        }
      },
      subSkill: {
        usable: {},
      },
    },
    mengquanxin: {
      usable: 1,
      enable: ['chooseToUse', 'chooseToRespond'],
      filter(event, player) {
        if (!player.countCards('hes')) return false;
        for (var i of lib.inpile) {
          var type = get.type(i);
          if (type == 'trick' && !get.tag({ name: i }, 'damage') && event.filterCard({ name: i }, player, event)) return true;
        }
        return false;
      },
      chooseButton: {
        dialog(event, player) {
          var list = [];
          for (var i of lib.inpile) {
            if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event) && !get.tag({ name: i }, 'damage')) list.push(['锦囊', '', i]);
          }
          return ui.create.dialog('泉心', [list, 'vcard']);
        },
        filter(button, player) {
          return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
        },
        check(button) {
          if (_status.event.parent.type != 'phase') return 1;
          var player = _status.event.player;
          if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
          return player.getUseValue({
            name: button.link[2],
            nature: button.link[3],
          });
        },
        backup(links, player) {
          return {
            filterCard: true,
            popname: true,
            check(card) {
              return 8 - get.value(card);
            },
            position: 'hes',
            viewAs: { name: links[0][2], nature: links[0][3] },
          };
        },
        prompt(links, player) {
          return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
        },
      },
      hiddenCard(player, name) {
        if (!lib.inpile.includes(name)) return false;
        var type = get.type(name);
        return type == 'trick' && !get.tag({ name: name }, 'damage') && player.countCards('hes') > 0;
      }, //QQQ
      ai: {
        skillTagFilter(player) {
          if (!player.countCards('hes')) return false;
        },
        order: 10,
        result: {
          player(player) {
            return 1;
          },
        },
      },
    },
    //芙宁娜
    mengduanming: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        player: 'phaseUseBefore',
      },
      filter(event, player) {
        return game.hasPlayer((i) => i != player && i.countCards('h') > 0);
      },
      forced: true,
      content() {
        'step 0';
        player
          .chooseTarget(get.prompt('mengduanming'), function (card, player, target) {
            return target != player && target.countCards('h') > 0;
          })
          .set('ai', (target) => get.attitude(player, target) < 0);
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          var next = player.chooseButton(['断明:选择你觉得对方有的花色', [lib.suit.map((i) => ['', '', 'lukai_' + i]), 'vcard']]);
          next.set('forced', true);
          next.set('selectButton', [0, 4]);
          next.set('filterButton', function (button) {
            return true;
          });
          next.set('ai', function (button) {
            if (button.link[2].slice(6) == 'heart' || button.link[2].slice(6) == 'diamond') {
              return 1;
            } else return 1;
          });
          event.target = target;
        } else event.finish();
        ('step 2');
        target.showHandcards();
        var suit_player = { spade: false, heart: false, club: false, diamond: false },
          str_player = '';
        for (var i of result.links) {
          suit_player[i[2].slice(6)] = true;
          str_player += get.translation(i[2]);
        }
        var suit_target = { spade: false, heart: false, club: false, diamond: false };
        for (var j of target.getCards('h')) suit_target[j.suit] = true;
        var num = 0;
        for (var k in suit_player) {
          if (suit_player[k] == suit_target[k]) {
            if (suit_player[k] == true) {
              game.log('猜有', k, ',实有', k, ',猜对了');
            } else game.log('猜无', k, ',实无', k, ',猜对了');
            num++;
          } else {
            if (suit_player[k] == true) {
              game.log('猜有', k, ',实无', k, ',', '猜错了');
            } else game.log('猜无', k, ',实有', k, ',', '猜错了');
            //num--;
          }
        }
        game.log(player, '猜对的花色数为', num);
        event.num = num;
        ('step 3');
        if (num <= 0) {
          trigger.cancel();
          target.skip('phaseUse');
          target.addTempSkill('mengduanming_skip', { player: 'phaseUseSkipped' });
        } else if (num > 0) {
          player.draw();
          player.discardPlayerCard(target, 'he', true);
          if (num > 1) {
            player.addTempSkill('mengduanming_pla');
            target.addTempSkill('mengduanming_tar');
            if (num > 2) {
              target.damage(player);
              if (num > 3) {
                target.addTempSkill('fengyin');
              }
            }
          }
        }
      },
      subSkill: {
        skip: {
          mark: true,
          intro: {
            content: '跳过下回合的出牌阶段',
          },
        },
        pla: {
          mark: true,
          intro: {
            content: '无距离和次数限制',
          },
          mod: {
            targetInRange(card, player, target) {
              if (target.hasSkill('mengduanming_tar')) {
                return true;
              }
            },
            cardUsableTarget(card, player, target) {
              if (target.hasSkill('mengduanming_tar')) return true;
            },
          },
          charlotte: true,
        },
        tar: {
          mark: true,
          intro: {
            content: '被芙宁娜审判',
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (get.tag(card, 'damage')) return [0, -999];
              },
            },
          },
          charlotte: true,
        },
      },
    },
    //那维莱特
    menglonglei: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      mark: true,
      intro: {
        content(storage, player) {
          if (!game.weather) return '无天气';
          var str = '当前天气为:' + get.translation(game.weather);
          str += '</br>';
          if (lib.skill[`_${game.weather}`] && lib.skill[`_${game.weather}`].description) str += lib.skill[`_${game.weather}`].description;
          return str;
        },
      },
      trigger: {
        player: 'phaseBegin',
      },
      filter(event, player) {
        return game.weather && game.weather != 'hyyz_rain' && player.countCards('he') > 0;
      },
      forced: true,
      content() {
        'step 0';
        player.chooseCard('是否重铸一张牌将天气切换为【雷雨】？', 'he').set('ai', function (card) {
          return 10 - get.value(card);
        });
        ('step 1');
        if (result.bool) {
          player.recast(result.cards);
          game.changeWeather('hyyz_rain');
        }
      },
      group: ['menglonglei_sub'],
      subSkill: {
        sub: {
          trigger: {
            global: ['phaseBefore'],
            player: 'enterGame',
          },
          forced: true,
          filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
          },
          content() {
            game.changeWeather('hyyz_fine');
          },
        },
      },
      derivation: ['menglonglei_faq'],
    },
    menglonglei_faq: {},
    mengshuilong: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return player.getExpansions('mengshuilong').length >= 3;
      },
      filterTarget(card, player, target) {
        return player.canUse('sha', target, false);
      },
      selectTarget: 1,
      content() {
        'step 0';
        player.chooseCardButton(true, 3, get.prompt('mengshuilong'), `将三张<水龙>牌置于牌堆顶,视为对${get.translation(target)}使用【杀】`, player.getExpansions('mengshuilong')).set('ai', function () {
          return true;
        });
        ('step 1');
        if (result.bool) {
          var cards = result.links;
          while (cards.length) {
            var card = cards.pop();
            card.fix();
            ui.cardPile.insertBefore(card, ui.cardPile.firstChild, 'fromStorage');
            game.log(player, '将', card, '置于牌堆顶');
          }
          player.useCard({ name: 'sha' }, target, false);
          player.recover();
        } else event.finish();
      },
      ai: {
        order: 1,
        result: {
          target: -1,
          player: 1,
        },
      },
      intro: {
        content: 'expansion',
        markcount: 'expansion',
      },
      onremove(player, skill) {
        var cards = player.getExpansions(skill);
        if (cards.length) player.loseToDiscardpile(cards);
      },
      group: ['mengshuilong_dis', 'mengshuilong_dam'],
      subSkill: {
        dam: {
          trigger: {
            global: 'damageAfter',
          },
          filter(event, player) {
            return event && event.storage && event.storage && event.storage.weather == 'hyyz_sun' && player.getExpansions('mengshuilong').length;
          },
          forced: true,
          content() {
            'step 0';
            player.chooseCardButton(get.prompt('mengshuilong'), `弃置一张<水龙>牌,令${get.translation(trigger.player)}回复1点体力`, player.getExpansions('mengshuilong')).set('ai', () => get.attitude(player, trigger.player) > 0);
            ('step 1');
            if (result.bool) {
              player.loseToDiscardpile(result.links);
              trigger.player.recover();
            } else event.finish();
          },
        },
        dis: {
          trigger: {
            global: 'discardAfter',
          },
          filter(event, player) {
            if (event.player == player) return false;
            if (!event.getParent(2) || event.getParent(2).name != '_hyyz_rain') return false;
            if (Array.isArray(event.cards))
              for (var i of event.cards) {
                if (get.position(i) == 'd') {
                  return true;
                }
              }
            return false;
          },
          forced: true,
          content() {
            var list = [];
            if (Array.isArray(trigger.cards))
              for (var i of trigger.cards) {
                if (get.position(i) == 'd') {
                  list.push(i);
                }
              }
            trigger.player.$give(list, player, 'giveAuto');
            player.addToExpansion(player, 'giveAuto', list).gaintag.add('mengshuilong');
          },
        },
      },
    },
    //温迪
    mengliufeng: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      init(player) {
        player.storage.mengliufeng = 0;
      },
      trigger: {
        global: 'roundStart',
      },
      forced: true,
      filter(event, player) {
        return player.getHandcardLimit() > 0 || game.hasPlayer((current) => get.distance(current, player) > 1);
      },
      content() {
        'step 0';
        var list = [];
        if (game.hasPlayer((current) => get.distance(current, player) > 1)) {
          list.push('手牌上限+1');
        }
        if (player.getHandcardLimit() > 0) list.push('手牌上限-1');
        player.chooseControl(list, 'cancel2').set('ai', () => 0);
        ('step 1');
        if (result.control != 'cancel2') {
          if (result.control == '手牌上限+1') {
            player.storage.mengliufeng++;
          }
          if (result.control == '手牌上限-1') {
            player.storage.mengliufeng--;
          }
        }
      },
      mod: {
        maxHandcard(player, num) {
          if (player.storage.mengliufeng == 0) return;
          return num + player.storage.mengliufeng;
        },
        globalTo(from, to, distance) {
          if (typeof to.storage.mengliufeng == 'number' && to.storage.mengliufeng != 0) {
            return distance - to.storage.mengliufeng;
          }
        },
      },
      mark: true,
      marktext: '流风',
      intro: {
        content(storage, player) {
          if (storage == 0) return '无变化';
          var str = `手牌上限${storage},计算与你的距离`;
          if (storage > 0) {
            str += '-' + storage;
          } else {
            str += '+' + -storage;
          }
          return str;
        },
      },
    },
    menggexian: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'phaseEnd',
      },
      filter(event, player) {
        return game.hasPlayer((current) => get.distance(current, player) == 1 && current.countCards('he') > 0);
      },
      content() {
        'step 0';
        var targets = game.filterPlayer((current) => get.distance(current, player) == 1 && current.countCards('he') > 0);
        targets.sortBySeat();
        if (!targets.length) event.finish();
        else {
          event.num = targets.length;
          event.targets = targets;
        }
        ('step 1');
        event.current = event.targets.shift();
        if (!event.current.countCards('he')) event.goto(3);
        else
          event.current.chooseCard(`交给${get.translation(player)}一张牌`, 'he', true).set('ai', function (card) {
            var evt = _status.event.parent;
            if (get.attitude(_status.event.player, evt.player) > 2) {
              if (card.name == 'jiu') return 120;
              if (card.name == 'tao') return 110;
            }
            return 100 - get.value(card);
          });
        ('step 2');
        if (result.cards?.length) {
          event.current.give(result.cards, player);
        }
        ('step 3');
        if (event.targets.length) event.goto(1);
        ('step 4');
        var num = event.num;
        if (num > 0) {
          var next = player.phaseZhunbei();
          event.next.remove(next);
          trigger.next.push(next);
          if (num > 1) {
            var next = player.phaseJudge();
            event.next.remove(next);
            trigger.next.push(next);
            if (num > 2) {
              var next = player.phaseDraw();
              event.next.remove(next);
              trigger.next.push(next);
              if (num > 3) {
                var next = player.phaseUse();
                event.next.remove(next);
                trigger.next.push(next);
                if (num > 4) {
                  var next = player.phaseDiscard();
                  event.next.remove(next);
                  trigger.next.push(next);
                  if (num > 5) {
                    var next = player.phaseJieshu();
                    event.next.remove(next);
                    trigger.next.push(next);
                    if (num > 6) {
                      player.chooseControl('准备', '判定', '摸牌', '出牌', '弃牌', '结束').set('ai', () => '摸牌');
                    }
                  }
                }
              }
            }
          }
        }
        ('step 5');
        var map = {
          准备: 'phaseZhunbei',
          判定: 'phaseJudge',
          摸牌: 'phaseDraw',
          出牌: 'phaseUse',
          弃牌: 'phaseDiscard',
          结束: 'phaseJieshu',
        };
        for (var i in map) {
          if (result.control == i) {
            var next = player[map[i]]();
            event.next.remove(next);
            trigger.next.push(next);
          }
        }
      },
    },
    mengbaizhan: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
      },
      filter(event, player) {
        return lib.skill.mengbaizhan.count() == player.getHandcardLimit();
      },
      count() {
        var num = 0;
        game.countPlayer2(function (current) {
          current.getHistory('lose', function (evt) {
            if (evt.position == ui.discardPile) {
              if (Array.isArray(evt.cards))
                for (var i of evt.cards) {
                  if (i) num++;
                }
            }
          });
        });
        game.getGlobalHistory('cardMove', function (evt) {
          if (evt.name == 'cardsDiscard') {
            if (Array.isArray(evt.cards))
              for (var i of evt.cards) {
                if (i) num++;
              }
          }
        });
        return num;
      },
      forced: true,
      content() {
        'step 0';
        var cards = trigger.getd();
        player.gain(cards, 'gain2');
      },
      mark: true,
      marktext: '百盏',
      intro: {
        content(storage, player) {
          var str = '';
          var num = 0;
          if (game.online) {
            num = player.countUsed();
          } else {
            num = player.getHistory('useCard').length;
          }
          str += `使用牌数/手牌上限:${num}/` + player.getHandcardLimit();
          var count = 0;
          game.getGlobalHistory('cardMove', function (evt) {
            if (evt.name == 'lose') {
              if (evt.position == ui.discardPile) {
                count += evt.cards.length;
              }
            } else {
              if (evt.name == 'cardsDiscard') {
                count += evt.cards.length;
              }
            }
          });
          str += '</br>进入弃牌堆的牌数:' + count;
          return str;
        },
      },
      mod: {
        targetInRange(card, player, target, now) {
          var num = 0;
          if (game.online) {
            num = player.countUsed();
          } else {
            num = player.getHistory('useCard').length;
          }
          if (num + 1 == player.getHandcardLimit()) return true;
        },
        cardUsable(card, player, num) {
          var num = 0;
          if (game.online) {
            num = player.countUsed();
          } else {
            num = player.getHistory('useCard').length;
          }
          if (num + 1 == player.getHandcardLimit()) return Infinity;
        },
      },
    },
    //阿贝多
    mengsucheng: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      init(player) {
        player.storage.mengsucheng = [];
      },
      enable: 'phaseUse',
      filter(card, player) {
        return !player.hasSkill('mengsucheng_no');
      },
      content() {
        'step 0';
        var cards = get.cards();
        var content = ['牌堆顶的牌', cards];
        game.log(player, '观看了牌堆顶的牌');
        player.chooseControl('ok').set('dialog', content);
        ui.cardPile.insertBefore(cards[0], ui.cardPile.firstChild);
        if (!player.getStorage('mengsucheng').includes(cards[0].suit)) {
          player.markAuto('mengsucheng', [cards[0].suit]);
          event.finish();
        } else {
          player.addTempSkill('mengsucheng_no');
          var list = [];
          for (var i = 0; i < lib.inpile.length; i++) {
            var name = lib.inpile[i];
            if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
          }
          player.chooseButton(true, ['选择视为使用的牌', [list, 'vcard'], true]).set('ai', function (button) {
            return button.link[2] == 'wuzhong' ? 1 : 0;
          });
        }
        ('step 1');
        var num = player.getStorage('mengsucheng').length;
        event.card = { name: result.links[0][2] };
        if (game.countPlayer((current) => lib.filter.targetEnabled2(event.card, player, current)) > 0) {
          player
            .chooseTarget(`视为对至多${num}名角色使用` + get.translation(event.card), [1, num], function (card, player, target) {
              return lib.filter.targetEnabled2(_status.event.cardx, player, target);
            })
            .set('ai', function (target) {
              return get.effect(target, _status.event.cardx, player, player);
            })
            .set('cardx', event.card);
        } else event.finish();
        ('step 2');
        var targets = result.targets;
        if (targets.length) targets.sortBySeat();
        for (var i of targets) {
          player.useCard(event.card, i, false);
        }
      },
      group: 'mengsucheng_clear',
      subSkill: {
        no: {},
        clear: {
          trigger: {
            player: 'phaseEnd',
          },
          forced: true,
          silent: true,
          popup: false,
          content() {
            player.storage.mengsucheng = [];
          },
          _priority: 1,
        },
      },
      ai: {
        order: 9,
        result: {
          player: 1,
        },
      },
    },
    mengchuangsheng: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        player: ['useCardAfter', 'respondEnd'],
      },
      forced: true,
      filter(event, player) {
        return !player.hasSkill('mengchuangsheng_no');
      },
      content() {
        'step 0';
        var next = player.chooseButton(['创生:猜测牌堆顶的牌的花色', [lib.suit.map((i) => ['', '', 'lukai_' + i]), 'vcard']]);
        next.set('forced', false);
        next.set('selectButton', [1, 1]);
        next.set('filterButton', function (button) {
          return true;
        });
        next.set('ai', function (button) {
          if (player.hasSkill('mengsucheng_no')) return 1;
          else if (get.itemtype(_status.pileTop) != 'card') return 1;
          else return button.link[2].slice(6) == _status.pileTop.suit;
        });
        ('step 1');
        if (result.bool) {
          var suitx = result.links[0][2].slice(6);
          var cards = get.cards();
          var suit2 = cards[0].suit;
          if (suitx == suit2) {
            player.gain(cards, 'gain2');
            if (player.getStat().card[trigger.card.name] > 0) delete player.getStat().card[trigger.card.name];
            //var history = player.getHistory('useCard');
            //for (var i of history) {
            //    if (player.getStat().card[i.card.name] > 0) delete player.getStat().card[i.card.name];
            //}
          } else {
            player.showCards(cards);
            player.addTempSkill('mengchuangsheng_no');
          }
        }
      },
      subSkill: {
        no: {},
      },
    },
    mengbaie: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'gainAfter',
      },
      forced: true,
      filter(event, player) {
        for (var i of event.getg(player)) {
          if (!player.getStorage('mengbaie').includes(i.suit)) {
            return true;
          }
        }
        return false;
      },
      mark: true,
      marktext: '白垩',
      intro: {
        content: '已获得牌的花色:$',
      },
      forced: true,
      content() {
        'step 0';
        for (var i of trigger.getg(player)) {
          if (!player.getStorage('mengbaie').includes(i.suit)) {
            player.markAuto('mengbaie', [i.suit]);
          }
        }
        ('step 1');
        if (!player.hasSkill('mengchuangsheng_no') && !player.hasSkill('mengsucheng_no')) {
          event.finish();
        } else {
          var list = [];
          if (player.hasSkill('mengchuangsheng_no')) list.push('创生');
          if (player.hasSkill('mengsucheng_no')) list.push('塑成');
          player.chooseControl(list).set('prompt', '白垩:选择清除的技能记录');
        }
        ('step 2');
        if (result.control == '塑成') {
          player.storage.mengsucheng = [];
          player.removeSkill('mengsucheng_no');
        }
        if (result.control == '创生') {
          player.removeSkill('mengchuangsheng_no');
        }
      },
      group: 'mengbaie_clear',
      subSkill: {
        clear: {
          trigger: {
            global: 'phaseEnd',
          },
          forced: true,
          silent: true,
          popup: false,
          content() {
            player.storage.mengbaie = [];
            player.unmarkSkill('mengbaie');
          },
          _priority: 1,
        },
      },
    },
    //托帕
    mengzhaiquan: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      marktext: '债',
      intro: {
        name: '债权',
        name2: '债',
        content: '当前有#个<债>',
      },
      trigger: {
        player: ['chooseToRespondBegin', 'chooseToUseBegin'],
      },
      forced: true,
      popup: false,
      filter(event, player) {
        return _status.currentPhase != player && game.hasPlayer((current) => current.countMark('mengzhaiquan') > 0);
      },
      _priority: 101,
      content() {
        'step 0';
        var cardname = [];
        for (var name of lib.inpile) {
          if (trigger.filterCard({ name: name }, player, trigger)) {
            cardname.push(name);
          }
        }
        if (!cardname.length) event.finish();
        else {
          event.Q = cardname;
          player.chooseTarget(get.prompt2('mengzhaiquan'), function (card, player, target) {
            return target.countMark('mengzhaiquan') > 0;
          });
        }
        ('step 1');
        if (result.bool) {
          event.target = result.targets[0];
          event.target.chooseCard(function (card) {
            return card.name == event.Q;
          }); //QQQ
        } else event.finish();
        ('step 2');
        if (result.bool) {
          event.target.give(result.cards, player, 'giveAuto');
          event.target.removeMark('mengzhaiquan', 1);
        } else {
          var num = event.target.countMark('mengzhaiquan');
          event.target.removeMark('mengzhaiquan', num);
          player.line(event.target, 'fire');
          event.target.damage(num, 'fire');
        }
      },
      ai: {
        respondSha: true,
        respondShan: true,
        effect: {
          target(card, player, target, effect) {
            if (get.tag(card, 'respondShan')) return 0.7;
            if (get.tag(card, 'respondSha')) return 0.7;
          },
        },
      },
      hiddenCard(player, name) {
        if (_status.currentPhase == player) return false;
        return true;
      },
      _priority: 10100,
      group: 'mengzhaiquan_mark',
      subSkill: {
        mark: {
          trigger: {
            global: 'gainAfter',
          },
          filter(event, player) {
            return event.player != player && event.source && event.source == player;
          },
          forced: true,
          content() {
            'step 0';
            trigger.player.addMark('mengzhaiquan', trigger.cards.length);
          },
        },
      },
    },
    mengshougou: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        global: 'phaseDrawAfter',
      },
      filter(event, player) {
        return event.player.hasMark('mengzhaiquan');
      },
      forced: true,
      content() {
        'step 0';
        var num = Math.min(trigger.player.countCards('h'), trigger.player.countMark('mengzhaiquan'));
        player.gainPlayerCard(trigger.player, [0, num], 'visible', 'h', true);
        ('step 1');
        if (result.bool) {
          if (result.cards.length) trigger.player.removeMark('mengzhaiquan', result.cards.length);
        }
      },
    },
    mengshicha: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      enable: 'phaseUse',
      usable: 1,
      filterTarget(card, player, target) {
        return target.countCards('h') < target.maxHp;
      },
      content() {
        'step 0';
        event.num = target.maxHp - target.countCards('h');
        player.draw(event.num);
        ('step 1');
        event.num = Math.min(player.countCards('he'), num);
        if (target == player) event.finish();
        else player.chooseCard(`交给${get.translation(target) + get.translation(event.num)}张牌`, event.num, true);
        ('step 2');
        player.give(result.cards, target, 'giveAuto');
      },
    },
    //叶莲娜
    mengdonghen: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      mark: true,
      marktext: '☯',
      zhuanhuanji: true,
      intro: {
        content(storage, player, skill) {
          var str = '当你成为其他角色使用牌的目标后,';
          if (player.storage.mengdonghen == true) str += '阴:失去1点体力并获得此牌';
          else str += '阳:此牌对你无效';
          return str;
        },
      },
      prompt(event, player) {
        var str = '';
        if (player.storage.mengdonghen == true) str += '失去1点体力并获得' + get.translation(event.card);
        else str += get.translation(event.card) + '对你无效';
        return str;
      },
      check(event, player) {
        if (player.storage.mengdonghen == true) {
          return player.hp > 1;
        } else {
          return -get.effect(player, event.card, event.player, player);
        }
      },
      trigger: {
        target: 'useCardToTargeted',
      },
      filter(event, player) {
        return event.card && event.player != player;
      },
      content() {
        'step 0';
        player.changeZhuanhuanji('mengdonghen');
        if (player.storage.mengdonghen != true) {
          //阳
          player.loseHp();
          player.gain(trigger.cards, 'gain2');
        } else {
          //阴
          game.log('#g【冬痕】', trigger.card, '对', player, '无效');
          trigger.parent.excluded.add(player);
        }
      },
    },
    mengjiannu: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return player.countCards('h') > 0;
      },
      content() {
        'step 0';
        var prompt = '###' + get.prompt('mengjiannu') + '###重铸一种花色的所有牌';
        var next = player.chooseButton(true, [prompt, [lib.suit.map((i) => ['', '', 'lukai_' + i]), 'vcard']], 1);
        next.set('filterButton', (button) => {
          var player = _status.event.player;
          var cards = player.getCards('h', { suit: button.link[2].slice(6) });
          return cards.length && cards.filter((card) => lib.filter.cardDiscardable(card, player)).length == cards.length;
        });
        next.set('ai', (button) => {
          var player = _status.event.player;
          return (
            30 -
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
          var cards = result.cards;
          if (!cards.length) {
            var suits = result.links.map((i) => i[2].slice(6));
            cards = player.getCards('h', (card) => suits.includes(card.suit));
          }
          event.cards = cards;
          if (!cards.length) event.finish();
          else {
            player.recast(cards);
            if (
              game.hasPlayer(function (current) {
                var card = { name: 'sha', nature: 'ice' };
                return lib.filter.targetEnabled2(card, player, current) && lib.filter.targetInRange(card, player, current);
              })
            ) {
              player
                .chooseTarget('视为使用一张冰【杀】,或点取消摸一张牌', function (card, player, target) {
                  var card = { name: 'sha', nature: 'ice' };
                  return lib.filter.targetEnabled2(card, player, target) && lib.filter.targetInRange(card, player, target);
                })
                .set('ai', function (target) {
                  var card = { name: 'sha', nature: 'ice' };
                  return get.effect(target, card, player, player);
                });
            } else {
              event._result = { bool: false, targets: [] };
            }
          }
        }
        ('step 2');
        if (result.bool && result.targets.length) {
          player.useCard({ name: 'sha', nature: 'ice' }, result.targets[0], false).set('addCount', false);
        } else {
          player.draw();
        }
      },
      marktext: '缄怒',
      intro: {
        content: '失去最后一种花色:$',
      },
      group: 'mengjiannu_lose',
      subSkill: {
        lose: {
          trigger: {
            player: 'loseEnd',
          },
          forced: true,
          filter(event, player) {
            if (Array.isArray(event.cards))
              for (var i of event.cards) {
                if (i.original == 'h') {
                  var suit = i.suit;
                  if (!player.countCards('h', { suit: suit }) && !player.getStorage('mengjiannu').includes(suit)) return true;
                }
              }
            return false;
          },
          content() {
            'step 0';
            if (Array.isArray(trigger.cards))
              for (var i of trigger.cards) {
                if (i.original == 'h') {
                  var suit = i.suit;
                  if (!player.countCards('h', { suit: suit }) && !player.getStorage('mengjiannu').includes(suit)) {
                    player.markAuto('mengjiannu', [suit]);
                  }
                }
              }
            ('step 1');
            if (player.getStorage('mengjiannu').length >= 4) {
              player.chooseTarget(get.prompt('mengjiannu'), '造成1点冰冻伤害').set('ai', function (target) {
                var player = _status.event.player;
                return get.damageEffect(target, player, player, 'ice');
              });
            }
            ('step 2');
            if (result.targets?.length) {
              player.unmarkSkill('mengjiannu');
              player.line(result.targets[0], 'ice');
              result.targets[0].damage('ice');
            }
          },
        },
      },
    },
    mengrongyu: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      mod: {
        maxHandcard(player, num) {
          return num++;
        },
      },
      trigger: {
        player: 'dieBegin',
      },
      forced: true,
      content() {
        'step 0';
        player
          .chooseTarget(get.prompt2('mengrongyu'), function (card, player, target) {
            return player != target;
          })
          .set('ai', function (target) {
            var att = get.attitude(_status.event.player, target);
            if (att > 0) {
              if (target.countCards('hs', { name: 'tao' })) return true;
              if (target.countCards('hs', { name: 'jiu' })) return true;
            }
            return -target.hp * att;
          });
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          player.line(target, 'fire');
          var num = target.hp;
          target.loseHp(num);
          target.recover(num);
          target.addSkill('mengrongyu_add');
        }
      },
      subSkill: {
        add: {
          marktext: '融',
          intro: {
            name: '融语',
            content: '摸牌阶段多摸一张牌,出牌阶段多使用一张【杀】',
          },
          trigger: {
            player: 'phaseDrawBegin2',
          },
          forced: true,
          filter(event, player) {
            return !event.numFixed;
          },
          content() {
            trigger.num++;
          },
          ai: {
            threaten: 1.3,
          },
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha') return num + 1;
            },
          },
        },
      },
      ai: {
        threaten(player, target) {
          if (target.hp == 1) return 2;
          return 0.5;
        },
      },
    },
    //爱衣
    mengmiaobu: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      intro: {
        content(storage, player) {
          if (player == game.me || player.isUnderControl()) {
            var str = '记录的牌名:';
            for (var i of storage) {
              str += get.translation(i);
              if (storage.length > 1 && i != storage[storage.length - 1]) str += '、';
            }
            if (player.storage.mengmiaobu_log > 0) str += '</br>发动瞄捕②的次数为' + player.storage.mengmiaobu_log;
            return str;
          } else {
            return `共记录了${storage.length}张牌名`;
          }
        },
      },
      trigger: {
        global: 'roundStart',
      },
      forced: true,
      filter(event, player) {
        return player.countCards('he') >= 0 && player.getStorage('mengmiaobu').length < 3;
      },
      content() {
        'step 0';
        player.storage.mengmiaobu_log = 0;
        player.chooseToDiscard(get.prompt2('mengmiaobu'), 'he', [1, 3 - player.getStorage('mengmiaobu').length]).set('ai', (card) => 10 - get.value(card));
        ('step 1');
        if (result.bool && result.cards.length) {
          var num = result.cards.length;
          var list = [];
          for (var i = 0; i < lib.inpile.length; i++) {
            var name = lib.inpile[i];
            if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
            else if (get.type(name) == 'basic') list.push(['基本', '', name]);
          }
          var next = player.chooseButton([`瞄捕①:请选择至多${num}个牌名`, [list, 'vcard']]);
          next.set('forced', true);
          next.set('selectButton', [1, num]);
          next.set('filterButton', function (button) {
            var name = button.link[2];
            if (player.getStorage('mengmiaobu').includes(name)) return false;
            return true;
          });
          next.set('ai', function (button) {
            var val = _status.event.player.getUseValue({ name: button.link[2] });
            if (['sha', 'shan', 'tao'].includes(button.link[2])) val += 20;
            return val;
          });
        } else {
          event.finish();
        }
        ('step 2');
        var names = [];
        for (var i of result.links) {
          names.push(i[2]);
        }
        player.markAuto('mengmiaobu', names);
      },
      group: 'mengmiaobu_log',
      subSkill: {
        log: {
          audio: 'ext:忽悠宇宙/audio/skill:3',
          init(player) {
            player.storage.mengmiaobu_log = 0;
          },
          trigger: {
            global: 'useCard',
          },
          filter(event, player) {
            return player.getStorage('mengmiaobu').length && player.getStorage('mengmiaobu').includes(event.card.name);
          },
          forced: true,
          content() {
            'step 0';
            var list = [`令${get.translation(trigger.card)}无效`, `为${get.translation(trigger.card)}增加或减少一个目标`, `摸两张牌并弃置${get.translation(_status.currentPhase)}区域内的一张牌`];
            for (var i = 0; i < list.length; i++) {
              list[i] = [i, list[i]];
            }
            var next = player.chooseButton([`瞄捕②:选择一项并移除【${get.translation(trigger.card.name)}】`, [list.slice(0, 1), 'tdnodes'], [list.slice(1, 2), 'tdnodes'], [list.slice(2, 3), 'tdnodes']]);
            next.set('forced', false);
            next.set('selectButton', [1, 1]);
            next.set('filterButton', function (button) {
              return true;
            });
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
            next.set('eff', effect);
            next.set('ai', function (button) {
              if (_status.event.eff < 0) return button.link == 0;
              return button.link == 2;
            });
            ('step 1');
            if (result.bool) {
              player.storage.mengmiaobu_log++;
              player.unmarkAuto('mengmiaobu', [trigger.card.name]);
              if (result.links == 0) {
                //trigger.excluded.addArray(game.filterPlayer());
                trigger.targets.length = 0;
                trigger.all_excluded = true;
                event.finish();
              } else if (result.links == 1) {
                var str = `请选择${get.translation(trigger.card)}的额外目标或取消目标`;
                player
                  .chooseTarget(str, function (card, player, target) {
                    var player = _status.event.players;
                    //if (_status.event.targets.includes(target)) return false;
                    return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
                  })
                  .set('card', trigger.card)
                  .set('ai', function (target) {
                    var trigger = _status.event.getTrigger();
                    var player = _status.event.players;
                    return get.effect(target, trigger.card, player, player);
                  })
                  .set('targets', trigger.targets)
                  .set('players', trigger.player);
              } else if (result.links == 2) {
                player.draw(2);
                player.discardPlayerCard(_status.currentPhase, 'hej', true);
                event.finish();
              }
            } else {
              event.finish();
            }
            ('step 2');
            if (result.bool) {
              if (trigger.targets.includes(result.targets[0])) {
                game.log('#g【瞄捕】', result.targets, '移出', trigger.card, '的目标');
                trigger.targets.remove(result.targets[0]);
              } else {
                game.log('#g【瞄捕】', result.targets, '成为', trigger.card, '的额外目标');
                trigger.targets.addArray(result.targets);
              }
            }
          },
        },
      },
    },
    mengyansuan: {
      trigger: {
        player: 'phaseBegin',
      },
      forced: true,
      filter(event, player) {
        return player.storage.mengmiaobu_log && player.storage.mengmiaobu_log > 0;
      },
      content() {
        'step 0';
        var num = player.storage.mengmiaobu_log;
        if (num > 0) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengyansuan1.mp3');
          player.draw(num);
        }
        if (num > 1) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengyansuan2.mp3');
          player.addTempSkill('mengyansuan_1');
        }
        if (num > 2) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengyansuan3.mp3');
          player.chooseTarget([1, num], `弃置至多${num}名其他角色的各一张牌`, function (card, player, target) {
            return target != player && target.countDiscardableCards(player, 'he') > 0;
          }).ai = function (target) {
            var player = _status.event.player;
            return get.effect(target, { name: 'guohe' }, player, player);
          };
        }
        ('step 1');
        if (result.bool && result.targets.length) {
          result.targets.sortBySeat();
          event.targets = result.targets;
          player.line(result.targets, 'green');
        } else event.finish();
        ('step 2');
        event.current = targets.shift();
        player.discardPlayerCard(event.current, 'he', true);
        event.current.addTempSkill('mengyansuan_2');
        if (targets.length) event.redo();
      },
      subSkill: {
        1: {
          mark: true,
          intro: {
            content(storage, player) {
              return '无距离和次数限制,且手牌上限+' + player.storage.mengmiaobu_log;
            },
          },
          mod: {
            targetInRange(card, player, target) {
              return true;
            },
            cardUsable(card, player) {
              return Infinity;
            },
            maxHandcard(player, num) {
              if (player.storage.mengmiaobu_log && player.storage.mengmiaobu_log > 0) return num + player.storage.mengmiaobu_log;
            },
          },
        },
        2: {
          mark: true,
          intro: {
            content: '受到的火焰伤害+1',
          },
          trigger: {
            global: 'damageBegin3',
          },
          filter(event, player) {
            return event.nature == 'fire' || event.hasNature('fire');
          },
          charlotte: true,
          forced: true,
          logTarget: 'player',
          content() {
            trigger.num++;
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (get.tag(card, 'fireDamage') && current < 0) return 1.5;
              },
            },
          },
        },
      },
    },
    //赵信
    mengdianci: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      enable: 'phaseUse',
      filterCard: true,
      selectCard: -1,
      position: 'h',
      filter(event, player) {
        if (player.hasSkill('mengdianci_buff')) return false;
        var hs = player.getCards('h');
        if (!hs.length) return false;
        for (var card of hs) {
          var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
          if (mod2 === false) return false;
        }
        return event.filterCard({ name: 'sha' }, player);
      },
      check() {
        return 1;
      },
      viewAs: {
        name: 'sha',
        storage: {
          mengdianci: true,
        },
      },
      onuse(links, player) {
        player.addTempSkill('mengdianci_buff', 'phaseUseAfter');
      },
      mod: {
        targetInRange(card, player, target) {
          if (card.storage && card.storage.mengdianci) {
            if (get.distance(player, target) != 1) return false;
          }
        },
      },
      ai: {
        order: 8,
        threaten: 1.14,
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
            if (game.hasNature(card, 'poison')) return;
            return 1;
          },
          natureDamage(card) {
            if (game.hasNature(card)) return 1;
          },
          fireDamage(card, nature) {
            if (game.hasNature(card, 'fire')) return 1;
          },
          thunderDamage(card, nature) {
            if (game.hasNature(card, 'thunder')) return 1;
          },
          poisonDamage(card, nature) {
            if (game.hasNature(card, 'poison')) return 1;
          },
        },
      },
    },
    mengdianci_buff: {
      audio: 'mengdianci',
      trigger: {
        global: 'useCardAfter',
      },
      charlotte: true,
      forced: true,
      filter(event, player) {
        return (
          event.card &&
          event.card.storage &&
          event.card.storage.mengdianci &&
          game.hasPlayer2((current) => {
            return current.hasHistory('sourceDamage', (evt) => evt.card == event.card);
          })
        );
      },
      content() {
        'step 0';
        var list = trigger.cards.slice(0);
        var map = { basic: 0, trick: 0, equip: 0 };
        for (var i of list) {
          var type = get.type(i);
          switch (type) {
            case 'basic':
              map.basic++;
              break;
            case 'trick':
              map.trick++;
              break;
            case 'equip':
              if (get.subtype(i) == 'equip1') map.equip++;
              break;
          }
        }
        if (map.trick > 0) player.draw(map.trick);
        if (map.equip > 0) player.changeHujia(map.equip);
        if (map.basic > 0) {
          for (let target of trigger.targets) {
            for (var count = 0; count < map.basic; count++) {
              player.useCard({ name: 'sha' }, target, false);
            }
          }
        }
      },
    },
    mengwuwei: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      trigger: {
        global: 'phaseBefore',
        player: 'enterGame',
      },
      forced: true,
      filter(event, player) {
        return game.hasPlayer((current) => current != player && !current.hasSkill('mengwuwei_juedou')) && (event.name != 'phase' || game.phaseNumber == 0);
      },
      content() {
        'step 0';
        player
          .chooseTarget('请选择【决斗】的目标', lib.translate.mengwuwei_info, true, function (card, player, target) {
            return target != player && !target.hasSkill('mengwuwei_juedou');
          })
          .set('ai', function (target) {
            var att = get.attitude(_status.event.player, target);
            if (att > 0) return att + 1;
            if (att == 0) return Math.random();
            return -att;
          }).animate = true;
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          target.addSkill('mengwuwei_juedou');
        }
      },
      mod: {
        globalFrom(from, to, distance) {
          if (to.hasSkill('mengwuwei_juedou')) return -Infinity;
        },
      },
      group: 'mengwuwei_add',
      subSkill: {
        juedou: {
          mark: true,
          marktext: '🔱',
          intro: {
            content: '赵信的⌈决斗⌋目标',
          },
        },
        add: {
          trigger: {
            source: 'damageSource',
            player: 'damageEnd',
          },
          forced: true,
          filter(event, player) {
            return event.source && event.source.isAlive();
          },
          content() {
            'step 0';
            var target = trigger.source == player ? trigger.player : trigger.source;
            if (target.hasSkill('mengwuwei_juedou')) {
              player.draw();
            } else {
              game.filterPlayer(function (current) {
                if (current.hasSkill('mengwuwei_juedou')) current.removeSkill('mengwuwei_juedou');
              });
              target.addSkill('mengwuwei_juedou');
            }
          },
        },
      },
    },
    //我丹恒
    menggufeng: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      mark: true,
      marktext: '☯',
      zhuanhuanji: true,
      intro: {
        content(storage, player, skill) {
          var str = '古枫:';
          if (player.storage.menggufeng == true) str += '阴:将X张手牌当等量数值的风【杀】使用,X为上次发动〖古枫①阳〗时使用的手牌数.';
          else str += '阳:将一半(向下取整)的手牌当等量数值的【酒】使用.';
          return str;
        },
      },
      lasttrick(player) {
        var name = '';
        var history = player.getAllHistory('useCard', function (evt) {
          var cardx = evt.card;
          var info = lib.card[cardx.name];
          if (cardx.name == 'wuzhong' || cardx.name == 'xt_zisu') return true;
          if (!info || info.type != 'trick' || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
          if (get.type2(cardx) == 'trick') return true;
        });
        if (history.length) name = history[history.length - 1].card.name;
        return name;
      },
      group: ['menggufeng_jiusha', 'menggufeng_buff'],
      subSkill: {
        jiusha: {
          name: '古枫①',
          enable: 'chooseToUse',
          filter(event, player) {
            if (player.storage.menggufeng)
              return true; //杀
            else return Math.floor(player.countCards('h') / 2) > 0; //酒
          },
          prompt(event, player) {
            var player = _status.event.player;
            if (player.storage.menggufeng) {
              var num = player.storage.menggufeng2;
              return `古枫杀:将${num}张手牌当伤害基数为${num}的风【杀】使用`;
            } else {
              var num = Math.floor(player.countCards('h') / 2);
              return `古枫酒:将${num}张手牌当伤害基数为${num}的【酒】使用`;
            }
          },
          check(card) {
            var player = _status.event.player;
            return 7 - get.useful(card);
          },
          filterCard: true,
          selectCard() {
            if (_status.event.player.storage.menggufeng) {
              return _status.event.player.storage.menggufeng2;
            } else return Math.floor(_status.event.player.countCards('h') / 2);
          },
          position: 'h',
          viewAs(cards, player) {
            if (player.storage.menggufeng) {
              return {
                name: 'sha',
                nature: 'hyyz_wind',
                storage: {
                  menggufeng: true,
                },
              };
            } else
              return {
                name: 'jiu',
                storage: {
                  menggufeng: true,
                },
              };
          },
          precontent() {
            if (player.storage.menggufeng) {
              game.playAudio('../extension/忽悠宇宙/audio/skill/menggufeng2.mp3');
              player.changeZhuanhuanji('menggufeng');
              player.addTempSkill('menggufeng_sha2');
            } else {
              game.playAudio('../extension/忽悠宇宙/audio/skill/menggufeng1.mp3');
              player.changeZhuanhuanji('menggufeng');
              var num = Math.floor(player.countCards('h') / 2);
              player.storage.menggufeng2 = num;
              player.addTempSkill('menggufeng_jiu2');
            }
          },
        },
        buff: {
          trigger: {
            global: 'useCard',
          },
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          filter(event, player) {
            return event.card && event.card.storage && event.card.storage.menggufeng;
          },
          content() {
            'step 0';
            var num = trigger.cards.length;
            if (typeof trigger.baseDamage != 'number') trigger.baseDamage = num;
            trigger.baseDamage += num - 1;
            ('step 1');
            if (player.hasSkill('menggufeng_sha2') && player.hasSkill('menggufeng_jiu2')) {
              player.addTempSkill('menggufeng_trick');
            }
          },
          _priority: 1,
        },
        jiu2: {},
        sha2: {},
        trick: {
          name: '古枫②',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            if (!player.hasSkill('menggufeng_sha2') || !player.hasSkill('menggufeng_jiu2')) return;
            var name = lib.skill.menggufeng.lasttrick(player);
            if (!name || !event.filterCard({ name: name }, player, event)) return false;
            return player.countCards('h') > 0;
          },
          filterCard: true,
          selectCard: -1,
          position: 'h',
          prompt(event, player) {
            var name = lib.skill.menggufeng.lasttrick(_status.event.player);
            return `将所有手牌当${get.translation(name)}使用`;
          },
          viewAs(cards, player) {
            var name = lib.skill.menggufeng.lasttrick(player);
            if (name) return { name: name };
            else return null;
          },
          precontent() {
            game.playAudio('../extension/忽悠宇宙/audio/skill/menggufeng' + [3, 4].randomGet());
            player.removeSkill('menggufeng_trick');
          },
          ai: {
            order: 10,
          },
          mod: {
            cardEnabled2(card, player) {
              if (!player.hasSkill('menggufeng_sha2') || !player.hasSkill('menggufeng_jiu2')) return;
              if (get.position(card) == 'h' && !_status.event.skill && !['menggufeng_jiusha', 'menggufeng_trick'].includes(_status.event.skill)) return false;
            },
          },
        },
      },
    },
    mengqinghua: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      getLastUsed(player, event) {
        var history = player.getAllHistory('useCard');
        var index;
        if (event) index = history.indexOf(event) - 1;
        else index = history.length - 1;
        if (index >= 0) return history[index];
        return false;
      },
      silent: true,
      forced: true,
      trigger: {
        player: 'useCardAfter',
      },
      filter(event, player) {
        if (event.card.isCard || get.itemtype(event.cards) != 'cards') return false;
        var evtx = lib.skill.mengqinghua.getLastUsed(player, event);
        if (!evtx || !evtx.card || evtx.card.isCard || get.itemtype(evtx.cards) != 'cards') return false;
        return true;
      },
      content() {
        'step 0';
        var num = 0;
        var targets = [];
        if (
          trigger.player.getAllHistory('sourceDamage', function (evt) {
            if (evt.card == trigger.card) {
              game.log(evt.card, '造成过伤害');
              if (evt.player) targets.push(evt.player);
              return true;
            } else return false;
          }).length
        )
          num++;
        var evtx = lib.skill.mengqinghua.getLastUsed(player, trigger);
        if (
          trigger.player.getAllHistory('sourceDamage', function (evt) {
            if (evt.card == evtx.card) {
              game.log(evt.card, '造成过伤害');
              if (evt.player) targets.push(evt.player);
              return true;
            } else return false;
          }).length
        )
          num++;
        if (num > 0) {
          for (var i of targets) i.draw();
          player.draw();
          for (var i of [trigger.card, evtx.card]) {
            if (player.getStat().card[i.name] && player.getStat().card[i.name] > 0) {
              game.log(i, '不计入使用次数');
              player.getStat().card[i.name]--;
            }
          }
        }
      },
    },
    //艾丝妲
    menglisi: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        player: 'loseAfter',
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
      },
      forced: true,
      filter(event, player) {
        if (event.name == 'gain' && event.player == player) return false;
        var evt = event.getl(player);
        return evt && evt.cards2 && evt.cards2.length;
      },
      content() {
        'step 0';
        var evt = trigger.getl(player);
        if (evt && evt.cards2 && evt.cards2.length) {
          var num = evt.cards2.length;
          player.addTempSkill('menglisi_buff');
        }
        while (num > 0) {
          num--;
          player.storage.menglisi_buff++;
          if (player.storage.menglisi_buff % 2 == 0) {
            var skills = player.getStockSkills(false, true);
            var skill = skills[skills.length - 1];
            game.log(player, '失去了', skill);
            player.removeSkill(skill);
          }
        }
      },
    },
    menglisi_buff: {
      silent: true,
      popup: false,
      forced: true,
      charlotte: true,
      init(player) {
        player.storage.menglisi_buff = 0;
      },
      onremove(player) {
        delete player.storage.menglisi_buff;
        var skills = player.getStockSkills(true, true);
        var num = 0;
        for (var i of skills) {
          if (!player.hasSkill(i)) {
            player.addSkillLog(i);
            num++;
          }
        }
        player.draw(num);
      },
      _priority: 1,
    },
    mengshanzhi: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      enable: 'phaseUse',
      prompt: '弃置两张牌,令一名角色获得并使用(若可以使用)一张你声明类别与检索方向的随机牌.',
      selectCard: 2,
      position: 'he',
      filterCard: true,
      filterTarget: true,
      check(card) {
        return 6 - get.value(card);
      },
      content() {
        'step 0';
        player
          .chooseControl('basic', 'trick', 'equip')
          .set('ai', function () {
            if (player.hp <= 2) return 0;
            if (!player.getEquip(2)) return 2;
            return 1;
          })
          .set('prompt', '缮治')
          .set('prompt2', '选择定向牌的类型');
        ('step 1');
        event.type1 = result.control;
        switch (event.type1) {
          case 'basic': {
            player.chooseControl('描述有<伤害>', '描述有<回复>', '以上均不要').set('prompt', '自塑尘脂').set('prompt2', '选择定向牌的方向').ai = function () {
              if (player.hp <= 2) return 1;
              return 0;
            };
            break;
          }
          case 'trick': {
            player.chooseControl('延时类', '普通有伤害', '以上均不要').set('prompt', '自塑尘脂').set('prompt2', '选择定向牌的方向').ai = function () {
              return 0;
            };
            break;
          }
          case 'equip': {
            player
              .chooseControl('equip1', 'equip2', 'equip3', 'equip4', 'equip5')
              .set('ai', function () {
                if (!player.getEquip(2)) return 1;
                if (!player.getEquip(1)) return 0;
                if (!player.getEquip(3)) return 3;
                if (!player.getEquip(5)) return 4;
                return [1, 2, 3, 4, 5].randomGet();
              })
              .set('prompt', '缮治')
              .set('prompt2', '选择定向牌的方向');
            break;
          }
        }
        ('step 2');
        var type2 = result.control;
        event.filter = () => false;
        switch (event.type1) {
          case 'basic': {
            switch (type2) {
              case '描述有<伤害>': {
                game.log('#g【缮治】', player, '选择了描述带有<<span class=firetext>伤害</span>>的<span class=yellowtext>基本牌</span>');
                event.filter = function (card) {
                  var info1 = lib.translate[`${card.name}_info`],
                    info2 = lib.translate[card.name];
                  var info = info1.concat(info2);
                  if (get.type(card) != 'basic') return false;
                  if (info && info.includes('伤害')) return true;
                };
                break;
              }
              case '描述有<回复>': {
                game.log('#g【缮治】', player, '选择了描述带有<<span class=greentext>回复</span>>的<span class=yellowtext>基本牌</span>');
                event.filter = function (card) {
                  var info1 = lib.translate[`${card.name}_info`],
                    info2 = lib.translate[card.name];
                  var info = info1.concat(info2);
                  if (get.type(card) != 'basic') return false;
                  if (info && info.includes('回复')) return true;
                };
                break;
              }
              case '以上均不要': {
                game.log('#g【缮治】', player, '选择了描述没有<<span class=firetext>伤害</span>>和<<span class=greentext>回复</span>>的<span class=yellowtext>基本牌</span>');
                event.filter = function (card) {
                  var info1 = lib.translate[`${card.name}_info`],
                    info2 = lib.translate[card.name];
                  var info = info1.concat(info2);
                  if (get.type(card) != 'basic') return false;
                  if (info && info.indexOf('回复') == -1 && info.indexOf('伤害') == -1) return true;
                };
                break;
              }
            }
            break;
          }
          case 'trick': {
            switch (type2) {
              case '延时类': {
                event.filter = (card) => get.type(card) == 'delay';
                game.log('#g【缮治】', player, '选择了延时类<span class=yellowtext>锦囊牌</span>');
                break;
              }
              case '普通有伤害': {
                event.filter = (card) => get.type(card) == 'trick' && get.tag(card, 'damage');
                game.log('#g【缮治】', player, '选择了普通<span class=firetext>伤害</span><span class=yellowtext>锦囊牌</span>');
                break;
              }
              case '以上均不要': {
                event.filter = (card) => get.type(card) == 'trick' && !get.tag(card, 'damage');
                game.log('#g【缮治】', player, '选择了普通<span class=greentext>非伤害</span><span class=yellowtext>锦囊牌</span>');
                break;
              }
            }
            break;
          }
          case 'equip': {
            event.filter = (card) => get.type(card) == 'equip' && get.subtype(card) == type2;
            game.log('#g【缮治】', player, `选择了<span class=yellowtext>${get.translation(type2)}</span>`);
            break;
          }
        }
        ('step 3');
        var card = get.cardPile2(event.filter);
        if (card) {
          target.gain(card, 'gain2', 'log');
          if (
            game.hasPlayer(function (current) {
              return target.canUse(card, current);
            })
          )
            target.chooseToUse({
              prompt: `是否使用${get.translation(card)}？`,
              filterCard(cardx, player, target) {
                return cardx == _status.event.cardx;
              },
              cardx: card,
            });
        }
      },
      ai: {
        order: 8,
        result: {
          target: 1,
        },
        threaten: 1.5,
      },
    },
    mengchuxin: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'useCardAfter',
      },
      filter(event, player) {
        let evt = event,
          type = get.type2(evt.card, false);
        return !player.hasHistory(
          'useCard',
          (evtx) => {
            return evtx != evt && get.type2(evtx.card, false) == type;
          },
          evt
        );
      },
      forced: true,
      content() {
        'step 0';
        player.draw();
        ('step 1');
        event.card = result[0];
        player.chooseTarget(`是否将${get.translation(event.card)}交给其他角色？`, function (card, player, target) {
          return target != player;
        }).ai = function () {
          return false;
        };
        ('step 2');
        if (result.bool) {
          player.give(event.card, result.targets[0], true);
        }
      },
    },
    //薪炎
    mengliaohuang: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      trigger: {
        global: 'damageEnd',
      },
      usable: 3,
      filter(event, player) {
        return event.nature && (['fire', 'thunder'].includes(event.nature) || event.lianhuanable == true);
      },
      list: [
        ['diamond', '1', 'huogong'],
        ['spade', '1', 'fulei'],
        ['club', '1', 'tiesuo'],
      ],

      forced: true,
      content() {
        'step 0';
        var list = [];
        if (trigger.nature == 'fire') list.push(lib.skill.mengliaohuang.list[0]);
        if (trigger.nature == 'thunder') list.push(lib.skill.mengliaohuang.list[1]);
        if (trigger.lianhuanable == true) list.push(lib.skill.mengliaohuang.list[2]);
        event.list = list;
        ('step 1');
        if (event.list.length) {
          var cardx = event.list.shift();
          event.cards = [ui.create.card(), ui.create.card()];
          event.cards[0].init(cardx);
          event.cards[1].init(cardx);
          if (trigger.source && trigger.source.isAlive()) player.chooseBool(`将${get.translation(cardx[2])}交给${get.translation(trigger.source)},或点取消置入牌堆`).set('ai', () => get.attitude(player, trigger.source) > 0);
          else event._result = { bool: false };
        } else event.finish();
        ('step 2');
        if (result.bool) {
          trigger.source.gain(event.cards, 'gain2');
        } else {
          game.log(player, '将', event.cards, '随机插入牌堆');
          while (event.cards.length) ui.cardPile.insertBefore(event.cards.shift().fix(), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
          game.updateRoundNumber();
        }
        event.goto(1);
      },
    },
    mengjingmang: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      enable: 'phaseUse',
      filter(event, player) {
        return !player.storage.mengjingmang;
      },
      limited: true,
      filterTarget(card, player, target) {
        return target.countCards('h') >= player.countCards('h');
      },
      selectTarget: -1,
      multitarget: true,
      multiline: true,
      content() {
        'step 0';
        player.awakenSkill('mengjingmang');
        player.storage.mengjingmang = true;
        event.currents0 = targets; //存储!
        event.currents = targets; //存储!
        event.not = []; //被选过的选项123
        ('step 1');
        if (event.currents.length) event.current = event.currents.shift();
        else event.finish();
        ('step 2');
        if (event.current.countCards('h') > 0) {
          game.log(event.current, ':<font color=#FF4500>战争尚未结束!</font>');
          event.current.addTempClass('target');
          var dialog = ['选择要使用的牌']; //窗口
          dialog.push('<div class="text center">你的手牌</div>');
          dialog.add(event.current.getCards('h'));
          var control = {
            1: [
              ['锦囊', '', 'tiesuo'],
              ['锦囊', '', 'guohe'],
            ],
            //一个牌组list,[list,'vcard']
            2: [
              ['基本', '', 'sha', 'fire'],
              ['基本', '', 'sha', 'thunder'],
            ],

            3: [
              ['锦囊', '', 'juedou'],
              ['锦囊', '', 'wugu'],
            ],
          };
          if (event.not.length) for (let count of event.not) if (control[count]) delete control[count];
          for (let count in control) {
            //构筑
            dialog.push(`<div class="text center">选项${get.translation(count)}</div>`);
            dialog.push([control[count], 'vcard']);
          }
          event.current
            .chooseButton(true, dialog)
            .set('filterButton', function (button) {
              if (!ui.selected.buttons.length) return true;
              var current = _status.event.player;
              var map = { hand: [], name: [] };
              var map2 = [['tiesuo', 'guohe'], ['sha'], ['juedou', 'wugu']];
              if (ui.selected.buttons.length) {
                for (var i = 0; i < ui.selected.buttons.length; i++) {
                  var ui_button = ui.selected.buttons[i].link;
                  if (current.getCards('h').includes(ui_button)) {
                    map.hand.push(ui_button);
                  } else {
                    map.name.push(ui_button[2]);
                    for (var j of map2) {
                      if (j.includes(ui_button[2]) && j.includes(button.link[2])) {
                        return false;
                      }
                    }
                  }
                }
                if (map.hand.length >= _status.event.hs && current.getCards('h').includes(button.link)) return false;
              }
              return true;
            })
            .set('selectButton', [2, event.current.countCards('h') * 2])
            .set('hs', Object.keys(control).length)
            .set('filterOk', function () {
              if (!ui.selected.buttons.length) return false;
              let current = _status.event.player;
              let map = { true: 0, false: 0 };
              if (ui.selected.buttons.length) {
                for (var i = 0; i < ui.selected.buttons.length; i++) {
                  map[current.getCards('h').includes(ui.selected.buttons[i].link)]++;
                }
              }
              return map.true == map.false;
            });
        } else {
          event.goto(1);
        }
        ('step 3');
        var map = result.links,
          names = [],
          cards = [];
        for (var i = 0; i < map.length; i++) {
          event.current.getCards('h').includes(map[i]) ? cards.push(map[i]) : names.push(map[i]);
        }
        for (var k of names) {
          if (['tiesuo', 'guohe'].includes(k[2])) event.not.push(1);
          if (k[2] == 'sha') event.not.push(2);
          if (['juedou', 'wugu'].includes(k[2])) event.not.push(3);
        }
        if (event.not.length >= 3) {
          event.not = [];
          if (player.hasSkill('mengliaohuang')) {
            game.log('#g【旌芒】', '重置', '#g【燎荒】');
            if (player.getStat('triggerSkill').mengliaohuang && player.getStat('triggerSkill').mengliaohuang > 0) player.getStat('triggerSkill').mengliaohuang = 0;
          }
        }
        for (var j = 0; j < cards.length; j++) {
          var use_targets = event.currents0.filter((target) => target != event.current && target.isIn());
          if (use_targets.length) {
            event.current.useCard({ name: names[j][2], nature: names[j][3] }, [cards[j]], use_targets);
          } else {
            event.goto(1);
          }
        }
        ('step 4');
        event.goto(1);
      },
      ai: {
        order: 1,
        result: {
          target(player, target) {
            return;
            if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
              if (game.zhu.hp <= 2 && game.zhu.countCards('h') >= player) return -100;
            }
            if (player != target) return -10;
          },
        },
      },
      mark: true,
      intro: {
        content: 'limited',
      },
      init: (player, skill) => (player.storage[skill] = false),
    },
    //景元微雨
    menglaoshen: {
      audio: 'xtshenjun',
      trigger: {
        player: 'loseAfter',
      },
      forced: true,
      filter(event, player) {
        var evt = event.getl(player);
        if ((!evt.hs || !evt.hs.length) && (!evt.es || !evt.es.length)) return false;
        return ['useCard', 'respond'].includes(event.parent.name) || event.type == 'discard';
      },
      content() {
        'step 0';
        if (trigger.type == 'discard') {
          player.draw();
          event.finish();
        } else
          player.chooseTarget('劳神:请选择一名角色,与其一同失去1点体力', true, function (card, player, target) {
            return target != player;
          }).ai = function (target) {
            return -get.attitude(_status.event.player, target);
          };
        ('step 1');
        player.line(result.targets[0], 'fire');
        player.loseHp();
        result.targets[0].loseHp();
      },
      ai: {
        effect: {
          player(card, player, target) {
            if (player.hp == 1) return 0;
          },
        },
      },
    },
    mengguiqu: {
      audio: 'xtshence',
      enable: ['chooseToUse', 'chooseToRespond'],
      init(player) {
        player.storage.mengguiqu = 0;
      },
      filter(event, player) {
        if (player.storage.mengguiqu >= player.getDamagedHp()) return false;
        for (var i of player.getCards('he')) {
          if (get.type(i) == 'equip' && event.filterCard(i, player, event)) return true;
        }
        for (var j of lib.inpile) {
          var type = get.type2(j);
          if ((type == 'basic' || type == 'trick') && event.filterCard({ name: j }, player, event)) return true;
        }
        return false;
      },
      chooseButton: {
        dialog(event, player) {
          var dialog = ui.create.dialog('归去', 'hidden');
          var list0 = [],
            list1 = [];
          for (var i of lib.inpile) {
            if (get.type(i) == 'basic' && player.countCards('he', { type: 'basic' }) >= 2 && event.filterCard({ name: i }, player, event)) {
              list0.push(['基本', '', i]);
              if (i == 'sha') {
                for (var j of lib.inpile_nature) list0.push(['基本', '', 'sha', j]);
              }
            } else if (
              get.type(i) == 'trick' &&
              player.countCards('he', function (card) {
                return get.type2(card) == 'trick';
              }) >= 2 &&
              event.filterCard({ name: i }, player, event)
            )
              list0.push(['锦囊', '', i]);
          }
          if (list0.length) {
            dialog.addText('即时牌');
            dialog.add([list0, 'vcard']);
          }
          for (var j of player.getCards('he')) {
            if (get.type(j) == 'equip' && player.countCards('he', { type: 'equip' }) >= 2 && event.filterCard(j, player, event)) list1.push(j);
          }
          if (list1.length) {
            dialog.addText('直接置入装备区');
            dialog.add([list1, 'vcard']);
          }
          if (!list0.length && !list1.length) dialog.addText('没有成对的同类型牌,或没有可用牌');
          return dialog;
        },
        check(button) {
          if (_status.event.parent.type != 'phase') return 1;
          var player = _status.event.player;
          if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
          var card = player.getCards('he').includes(button.link)
            ? button.link
            : {
              name: button.link[2],
              nature: button.link[3],
            };
          return player.getUseValue(card);
        },
        backup(links, player) {
          var guiqu = player.getCards('he').includes(links[0])
            ? links[0]
            : {
              name: links[0][2],
              nature: links[0][3],
              suit: 'none',
              number: null,
            };
          return {
            selectCard: 2,
            filterCard(card, player) {
              if (!ui.selected.cards.length && get.type(guiqu) == 'equip' && card != guiqu) return false;
              if (ui.selected.cards.length) {
                if (get.type2(card) != get.type2(ui.selected.cards[0])) return false;
              }
              return get.type2(card) == get.type(guiqu) && lib.filter.cardDiscardable.apply(this, arguments);
            },
            complexCard: true,
            viewAs: guiqu,
            position: 'he',
            ignoreMod: true,
            precontent() {
              player.addTempSkill('mengguiqu2');
              player.storage.mengguiqu++;
              var cards = event.result.cards;
              if (cards.length == player.countCards('he')) {
                player.discard(cards);
                player.draw(Math.min(player.maxHp, 20));
                player.loseHp();
                player.addTempSkill('baiban');
              } else {
                player.discard(cards);
              }
              if (get.type2(cards[0]) == 'equip') {
                event.result.card = cards[0];
                event.result.cards = cards;
              } else {
                event.result.card = {
                  name: event.result.card.name,
                  nature: event.result.card.nature,
                };
                event.result.cards = [];
                event.parent.addCount = false;
              }
            },
          };
        },
        prompt(links, player) {
          return player.getCards('he').includes(links[0]) ? `将${get.translation(links[0])}置入装备区` : '弃置两张牌视为使用【' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '】';
        },
        hiddenCard(player, name) {
          if (!lib.inpile.includes(name)) return false;
          var type = get.type(name);
          return (type == 'basic' || type == 'trick') && player.countCards('he') >= 2;
        },
        ai: {
          fireAttack: true,
          respondSha: true,
          respondShan: true,
          skillTagFilter(player) {
            if (!player.countCards('he')) return false;
          },
          order: 15,
          result: {
            player(player) {
              if (_status.event.dying) return get.attitude(player, _status.event.dying);
              return 1;
            },
          },
        },
      },
      mod: {
        targetInRange(card) {
          if (_status.event.skill == 'mengguiqu_backup') return true;
        },
      },
    },
    mengguiqu2: {
      mark: true,
      intro: {
        content(storage, player) {
          return '其他角色计算与你的距离+' + player.storage.mengguiqu;
        },
      },
      mod: {
        globalTo(from, to, distance) {
          if (typeof to.storage.mengguiqu2 == 'number') {
            return distance + to.storage.mengguiqu;
          }
        },
      },
      onremove(player) {
        delete player.storage.mengguiqu;
      },
    },
    //麦莎
    mengyanhu: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'damageBegin4',
      },
      filter(event, player) {
        return event.player != player && event.source && event.source != player && event.player.isIn();
      },
      usable: 1,
      check(event, player) {
        return get.attitude(player, event.player) > player.getDamagedHp();
      },
      logTarget: 'player',
      content() {
        'step 0';
        trigger.player = player;
        trigger.player.addTempSkill('mengyanhu2');
        trigger.player.storage.mengyanhu2 = [player, trigger.source];
      },
    },
    mengyanhu2: {
      onremove(player) {
        delete player.storage.mengyanhu2;
      },
      trigger: {
        player: ['damageAfter', 'damageCancelled', 'damageZero'],
      },
      forced: true,
      popup: false,
      charlotte: true,
      content() {
        if (player.storage.mengyanhu2[1] && player.storage.mengyanhu2[0].canUse({ name: 'sha' }, player.storage.mengyanhu2[1], false)) {
          player.storage.mengyanhu2[0].useCard({ name: 'sha' }, player.storage.mengyanhu2[1], false);
        }
        player.removeSkill('mengyanhu2');
        player.popup('mengyanhu');
      },
    },
    mengguanghuan: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        player: 'phaseJieshuBegin',
      },
      forced: true,
      content() {
        'step 0';
        player.chooseTarget(lib.translate.mengguanghuan_info, function (card, player, target) {
          return target.isMinHp();
        }).ai = function (target) {
          return get.attitude(_status.event.player, target);
        };
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          player.line(target, 'green');
          target.recover();
          target.draw();
        }
      },
    },
    //丽塔
    mengsishou: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        global: 'phaseZhunbeiBegin',
      },
      check(event, player) {
        return get.attitude(player, event.player) < 0;
      },
      logTarget: 'player',
      filter(event, player) {
        return player.canCompare(event.player);
      },
      prompt2: '赢:你嘲讽之</br>没赢:你摸一张牌且不能响应其的牌',
      content() {
        'step 0';
        player.chooseToCompare(trigger.player, function (card) {
          var player = get.owner(card);
          var target = _status.event.parent.target;
          if (target != player && get.attitude(player, target) < 0 && game.hasPlayer((current) => current != target && get.attitude(target, current) > 4 && current.hp < target.hp)) return -card.number;
        });
        ('step 1');
        if (result.bool) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengsishou2.mp3');
          trigger.player.addTempSkill('mengsishou_me');
          trigger.player.storage.mengsishou_me = player;
        } else {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengsishou3.mp3');
          player.draw();
          trigger.player.addTempSkill('mengsishou_ohhh');
          trigger.player.storage.mengsishou_ohhh = player;
        }
      },
      subSkill: {
        me: {
          mod: {
            playerEnabled(card, player, target) {
              if (player.storage.mengsishou_me != target && (!get.info(card) || !get.info(card).singleCard || !ui.selected.targets.length)) return false;
            },
          },
          mark: true,
          intro: {
            content(player, storage) {
              return `只能对${get.translation(storage)}使用牌`;
            },
          },
        },
        ohhh: {
          forced: true,
          trigger: {
            player: 'useCard',
          },
          filter(event, player) {
            return (
              event.card &&
              (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
              game.hasPlayer(function (current) {
                return current == player.storage.mengsishou_ohhh;
              })
            );
          },
          content() {
            trigger.directHit.addArray(
              game.filterPlayer(function (current) {
                return current == player.storage.mengsishou_ohhh;
              })
            );
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              return arg.target == player.storage.mengsishou_ohhh;
            },
          },
        },
      },
    },
    mengyanjue: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        player: ['chooseToCompareAfter', 'compareMultipleAfter'],
        target: ['chooseToCompareAfter', 'compareMultipleAfter'],
      },
      filter(event, player) {
        if (event.preserve) return false;
        if (event.name == 'compareMultiple') return true;
        return !event.compareMultiple;
      },
      forced: true,
      content() {
        'step 0';
        player.chooseTarget('延决:令一名角色摸一张牌', '不为你则你摸一张牌', true).set('ai', function (target) {
          var player = _status.event.player;
          var att = get.attitude(player, target);
          if (target.hasSkillTag('nogain')) return 0;
          if (target != player) att *= 10;
          return att;
        });
        ('step 1');
        var target = result.targets[0];
        target.draw();
        if (target != player) player.draw();
      },
    },
    mengsizhi: {
      trigger: {
        player: 'damageEnd',
      },
      filter(event, player) {
        return event.source && event.source.countDiscardableCards(player, 'he') > 0;
      },
      check(event, player) {
        return -get.attitude(player, event.source);
      },
      logTarget: 'source',
      content() {
        'step 0';
        player
          .discardPlayerCard(trigger.source, get.prompt2('mengsizhi', trigger.source), true)
          .set('ai', function (button) {
            if (!_status.event.att) return 0;
            if (get.color(button.link) == 'red') {
              return 2 * get.value(button.link);
            }
            return 1;
          })
          .set('att', get.attitude(player, trigger.source) <= 0);
        ('step 1');
        if (result.links?.length) {
          var card = result.links[0];
          if (get.color(card) == 'red') {
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengsizhi1.mp3');
            player.recover();
          } else {
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengsizhi2.mp3');
            player.chooseToDiscard(true, 'he');
            trigger.source.draw();
          }
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
              if (player.countCards('e', { color: 'red' }) > 0 || player.countCards('h', { color: 'red' }) >= player.countCards('h', { color: 'black' }) * 1.2) return 0;
            }
          },
        },
      },
    },
    //阮梅
    mengtansheng: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      enable: 'phaseUse',
      usable: 4,
      filter(event, player) {
        return player.countCards('he') && !player.hasSkill('mengtansheng_usable');
      },
      check(card) {
        return 8 - get.value(card);
      },
      filterCard(card, player) {
        var cards = [];
        player.getHistory('lose', function (evt) {
          if (evt.type != 'discard') return false;
          if (!evt.getParent(2).skill || evt.getParent(2).skill != 'mengtansheng') return false;
          cards.addArray(evt.cards2);
        });
        for (var i of cards) {
          if (i.suit == card.suit) return false;
        }
        return true;
      },
      position: 'he',
      selectCard: 1,
      content() {
        'step 0';
        event.card0 = cards[0];
        event.card = get.LifeCard();
        player.gain(event.card, 'draw');
        ('step 1');
        if (get.color(event.card0) == get.color(event.card)) {
          player.addTempSkill('mengtansheng_add');
        } else {
          player.addTempSkill('mengtansheng_usable');
        }
        if (event.card0.number != event.card.number || event.card0.suit != event.card.suit) {
          event.finish();
        } else {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengtansheng3.mp3');
          event.count = 0;
        }
        ('step 2');
        event.count++;
        var card = get.cards()[0];
        event.card = card;
        if (player.hasUseTarget(card)) {
          var next = player.chooseUseTarget(card);
          if (get.info(card).updateUsable == 'phaseUse') next.addCount = false;
        } else event._result = { bool: false };
        ('step 3');
        if (!result.bool) {
          player.loseToDiscardpile(event.card);
        }
        if (event.count < 20) event.goto(2);
      },
      subSkill: {
        add: {
          silent: true,
          charlotte: true,
          forced: true,
          trigger: {
            player: 'useCard1',
          },
          filter(event, player) {
            if (get.itemtype(event.cards) != 'cards') return false;
            if (!event.cards.some((card) => ['meng_taohuasu', 'meng_meihuagao', 'meng_caomeibing', 'meng_chashaobao'].includes(card.name))) return false;
            return true;
          },
          forced: true,
          content() {
            'step 0';
            trigger.directHit.addArray(game.filterPlayer());
            ('step 1');
            var info = get.info(trigger.card, false);
            if (
              info.allowMultiple != false &&
              trigger.targets &&
              !info.multitarget &&
              game.hasPlayer(function (current) {
                return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current) && lib.filter.targetInRange(trigger.card, player, current);
              })
            ) {
              player
                .chooseTarget(`探生:是否为${get.translation(trigger.card)}增加一个目标？`, 1, function (card, player, target) {
                  var trigger = _status.event.getTrigger(),
                    player = _status.event.player;
                  var trigger = _status.event.getTrigger();
                  var card = trigger.card;
                  return !trigger.targets.includes(target) && lib.filter.targetEnabled2(card, player, target) && lib.filter.targetInRange(card, player, target);
                })
                .set('ai', function (target) {
                  var trigger = _status.event.getTrigger(),
                    player = _status.event.player;
                  return get.effect(target, trigger.card, player, player);
                });
            } else event.finish();
            ('step 2');
            if (result.bool) {
              var targets = result.targets;
              trigger.targets.addArray(targets);
            }
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              return ['meng_taohuasu', 'meng_meihuagao', 'meng_caomeibing', 'meng_chashaobao'].includes(arg.card.name);
            },
          },
        },
        usable: {},
      },
      ai: {
        result: {
          player(player, target) {
            return 2;
          },
        },
      },
    },
    mengzidian: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'phaseEnd',
      },
      forced: true,
      filter(event, player) {
        return player.hasHistory('lose', (evt) => evt.cards2 && evt.cards2.length) || player.hasHistory('gain', (evt) => evt.cards && evt.cards.length) || game.getGlobalHistory('changeHp').some((evt) => evt.player == player);
      },
      content() {
        event.card = get.LifeCard();
        player.gain(event.card, 'draw');
      },
    },
    //景元
    mengchoumou: {
      enable: ['chooseToUse'],
      filter(event, player) {
        if (player.hasSkill('mengchoumou_no')) return false;
        if (player.countCards('hes') < 2) return false;
        if (player.countCards('hes', { type: 'basic' }).length < 2 && player.countCards('hes', { type: 'equip' }).length < 2 && player.countCards('hes', (card) => get.type2(card) == 'trick').length < 2) return false;
        for (var i of lib.inpile) {
          if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) return true;
        }
        return false;
      },
      chooseButton: {
        dialog(event, player) {
          var list = [];
          for (var i of lib.inpile) {
            if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) list.push(['锦囊', '', i]);
          }
          return ui.create.dialog('绸缪', [list, 'vcard']);
        },
        check(button, player) {
          if (_status.event.parent.type != 'phase') return 1;
          return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
        },
        backup(links, player) {
          return {
            audio: 'xtshenjun',
            popname: true,
            viewAs: { name: links[0][2], nature: links[0][3] },
            filterCard(card, player) {
              if (ui.selected.cards.length) {
                if (get.type2(card) != get.type2(ui.selected.cards[0])) return false;
              }
              return true;
            },
            check(card) {
              var value = get.value(card);
              if (ui.selected.cards.length) {
                if (get.color(card) == get.color(ui.selected.cards[0])) value / 2;
              }
              return 10 - value;
            },
            complexCard: true,
            selectCard: 2,
            position: 'hes',
          };
        },
      },
      hiddenCard(player, name) {
        if (player.countCards('hes', { type: 'basic' }).length < 2 && player.countCards('hes', { type: 'equip' }).length < 2 && player.countCards('hes', (card) => get.type2(card) == 'trick').length < 2) return false;
        return get.type(name) == 'trick' && player.countCards('hes') > 1;
      },
      ai: {
        respondSha: true,
        respondShan: true,
        skillTagFilter(player) {
          if (player.countCards('hes', { type: 'basic' }).length < 2 && player.countCards('hes', { type: 'equip' }).length < 2 && player.countCards('hes', (card) => get.type2(card) == 'trick').length < 2) return false;
          return player.countCards('hes') > 1;
        },
        order: 5,
        result: {
          player(player) {
            if (_status.event.dying) return get.attitude(player, _status.event.dying);
            return 1;
          },
        },
      },
      group: ['mengchoumou_effect', 'mengchoumou_draw'],
      subSkill: {
        no: {},
        effect: {
          trigger: {
            player: 'useCard',
          },
          forced: true,
          charlotte: true,
          popup: false,
          filter(event, player) {
            if (event.skill != 'mengchoumou_backup') return false;
            return true;
          },
          content() {
            'step 0';
            if (get.color(trigger.card) == 'black') {
              player.draw();
              player.chooseUseTarget(true, { name: trigger.card.name });
            } else if (get.color(trigger.card) == 'red') {
              player.draw();
              if (_status.currentPhase != player && _status.currentPhase.countCards('h') > 0) player.gainPlayerCard(_status.currentPhase, 'h', true);
            } else {
              player.addTempSkill('mengchoumou_no');
            }
          },
        },
        draw: {
          trigger: {
            global: 'phaseEnd',
          },
          filter(event, player) {
            var num = 0;
            player.getHistory('useCard', function (evt) {
              if (evt.skill && evt.skill == 'mengchoumou_backup') num++;
            });
            return num > 0;
          },
          content() {
            var num = 0;
            player.getHistory('useCard', function (evt) {
              if (evt.skill && evt.skill == 'mengchoumou_backup') num++;
            });
            player.draw(num);
          },
        },
      },
    },
    //胡桃
    mengxifeng: {
      trigger: {
        player: 'loseAfter',
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
      },
      filter(event, player) {
        var evt = event.getl(player);
        if (!evt || !evt.hs || !evt.hs.length) return false;
        if (event.name == 'lose') {
          for (var i in event.gaintag_map) {
            if (event.gaintag_map[i].includes('mengxifeng_bg')) return true;
          }
          return false;
        }
        return player.hasHistory('lose', function (evt) {
          if (event != evt.parent) return false;
          for (var i in evt.gaintag_map) {
            if (evt.gaintag_map[i].includes('mengxifeng_bg')) return true;
          }
          return false;
        });
      },
      forced: true,
      content() {
        'step 0';
        var num = 0;
        if (trigger.name == 'lose') {
          for (var i in trigger.gaintag_map) {
            if (trigger.gaintag_map[i].includes('mengxifeng_bg')) num++;
          }
        } else
          player.getHistory('lose', function (evt) {
            if (trigger != evt.parent) return false;
            for (var i in evt.gaintag_map) {
              if (evt.gaintag_map[i].includes('mengxifeng_bg')) num++;
            }
            return false;
          });
        player.draw(num);
      },
      group: ['mengxifeng_init'],
      subSkill: {
        init: {
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
          },
          forced: true,
          filter(event, player) {
            return (event.name != 'phase' || game.phaseNumber == 0) && player.countCards('h') > 0;
          },
          content() {
            var hs = player.getCards('h');
            if (hs.length) player.addGaintag(hs, 'mengxifeng_bg');
          },
        },
      },
    },
    mengxifeng_bg: {},
    mengliaoshi: {
      juexingji: true,
      derivation: ['mengwansheng_rewrite'],
      trigger: {
        global: 'phaseJieshuBegin',
      },
      filter(event, player) {
        return !player.hasCard(function (card) {
          return card.hasGaintag('mengxifeng_bg');
        }, 'h');
      },
      forced: true,
      content() {
        'step 0';
        player.awakenSkill(event.name);
        player.storage[event.name] = true;
        ('step 1');
        player.gainMaxHp();
        var cards = player.getCards('hej');
        player.recast(cards);
        player.addSkill('mengwansheng_rewrite');
        player.removeSkill('mengwansheng');
        game.log(player, '修改了技能', '#g【万生】');
      },
    },
    mengjiu: {
      init(player) {
        player.markSkill('mengjiu');
      },
      charlotte: true,
      mark: true,
      marktext: '柩',
      intro: {
        markcount: 'expansion',
        mark(dialog, content, player) {
          var content = player.getExpansions('mengjiu');
          if (content && content.length) {
            if (player == game.me || player.isUnderControl()) {
              dialog.addAuto(content);
            } else {
              return `共有${get.cnNumber(content.length)}个<柩>`;
            }
          } else return '空柩';
        },
        content(content, player) {
          var content = player.getExpansions('mengjiu');
          if (content && content.length) {
            if (player == game.me || player.isUnderControl()) {
              return get.translation(content);
            }
            return `共有${get.cnNumber(content.length)}个<柩>`;
          } else return '空柩';
        },
      },
      onremove(player, skill) {
        var cards = player.getExpansions(skill);
        if (cards.length) player.loseToDiscardpile(cards);
      },
    },
    mengwansheng: {
      trigger: {
        global: ['eventNeutralized', 'shaMiss'],
      },
      filter(event, player) {
        if (event.type != 'card') return false;
        if (!event.targets || event.targets.length != 1) return false;
        return true;
      },
      forced: true,
      content() {
        'step 0';
        player.addToExpansion(trigger.cards, 'gain2').gaintag.add('mengjiu');
        ('step 1');
        if (player.getExpansions('mengjiu').length > player.maxHp) player.chooseToDiscard('he', true);
      },
      group: 'mengjiu',
    },
    mengwansheng_rewrite: {
      group: ['mengwansheng_rewrite_1', 'mengwansheng_rewrite_2', 'mengjiu'],
      subSkill: {
        1: {
          trigger: {
            global: ['eventNeutralized', 'shaMiss'],
          },
          filter(event, player) {
            if (event.type != 'card') return false;
            if (!event.targets || event.targets.length != 1) return false;
            if (player.getExpansions('mengjiu').length >= player.maxHp) return false;
            return true;
          },
          forced: true,
          content() {
            'step 0';
            player.addToExpansion(trigger.cards, 'gain2').gaintag.add('mengjiu');
            ('step 1');
            if (player.getExpansions('mengjiu').length > player.maxHp) player.chooseToDiscard('he', true);
          },
        },
        2: {
          trigger: {
            global: 'useCard',
          },
          filter(event, player) {
            if (event.name == 'shan' || event.name == 'wuxie') return false;
            var type = get.type(event.card, false);
            if (type != 'basic' && type != 'trick') return false;
            return player.getExpansions('mengjiu').some((card) => get.type2(card) == get.type2(event.card));
          },
          content() {
            'step 0';
            player
              .chooseCardButton('万生:重铸同类型的<柩>令此牌额外结算', player.getExpansions('mengjiu'))
              .set('ai', () => get.attitude(player, trigger.player) > 0)
              .set('filterButton', function (button) {
                var card = button.link;
                var trigger = _status.event.getTrigger();
                return get.type2(card) == get.type2(trigger.card);
              });
            ('step 1');
            if (result.bool) {
              player.loseToDiscardpile(result.links);
              player.draw();
              trigger.effectCount++;
            } else event.finish();
          },
        },
      },
    },
    //推荐-倾奇者
    mengsanpan: {
      mark: true,
      marktext: '叛',
      intro: {
        content(storage, player, skill) {
          var str = '<li>上一轮于回合外';
          if (player.storage.mengsanpan_log[1][0]) {
            str += '<p style=\"color: rgb(124,252,0)\">体力值减少过</p>';
          } else str += '<p style=\"color: rgb(255,102,102)\">体力值未减少</p>';
          if (player.storage.mengsanpan_log[1][1]) {
            str += '<p style=\"color: rgb(124,252,0)\">失去过牌</p>';
          } else str += '<p style=\"color: rgb(255,102,102)\">未失去过牌</p>';
          str += '<li>当前';
          if (player.countCards('j') > 0) str += '<p style=\"color: rgb(124,252,0)\">判定区有牌</p>';
          else str += '<p style=\"color: rgb(255,102,102)\">判定区没有牌</p>';
          str += '<li>本轮于回合外';
          if (player.storage.mengsanpan_log[0][0]) {
            str += '<p style=\"color: rgb(124,252,0)\">体力值减少过</p>';
          } else str += '<p style=\"color: rgb(255,102,102)\">体力值未减少</p>';
          if (player.storage.mengsanpan_log[0][1]) {
            str += '<p style=\"color: rgb(124,252,0)\">失去过牌</p>';
          } else str += '<p style=\"color: rgb(255,102,102)\">未失去过牌</p>';
          return str;
        },
      },
      trigger: {
        player: 'phaseBegin',
      },
      forced: true,
      content() {
        'step 0';
        event.num = 0;
        if (player.storage.mengsanpan_log && player.storage.mengsanpan_log[1][0]) {
          game.log('#g【三叛】1', '上轮于回合外体力值减少');
          event.num++;
          player.storage.mengsanpan_log[1][0] = false;
        }
        if (player.storage.mengsanpan_log && player.storage.mengsanpan_log[1][1]) {
          game.log('#g【三叛】1', '上轮于回合外失去过牌');
          event.num++;
          player.storage.mengsanpan_log[1][1] = false;
        }
        if (player.countCards('j') > 0) {
          game.log('#g【三叛】', '判定区有牌');
          event.num++;
        }
        ('step 1');
        if (event.num > 0) {
          game.log('#g【三叛】', '可以获得', event.num, '张其他角色的牌');
          event.goto(3);
        } else {
          if (player.countCards('he')) {
            player.chooseCardTarget({
              prompt: '三叛:是否弃置一张牌,令一名角色回复1点体力或摸两张牌',
              filterCard(card) {
                return true;
              },
              position: 'he',
              filterTarget(card, player, target) {
                return true;
              },
              ai1(card) {
                return 8 - get.value(card);
              },
              ai2(target) {
                return get.attitude(_status.event.player, target);
              },
            });
          } else event.finish();
        }
        ('step 2');
        if (result.bool) {
          var target = result.targets[0];
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengsanpan' + [3, 4].randomGet());
          player.discard(result.cards);
          target.chooseDrawRecover('三叛:回复1点体力或摸两张牌', 2, true);
        }
        event.finish();
        ('step 3');
        event.num--;
        game.playAudio('../extension/忽悠宇宙/audio/skill/mengsanpan' + [1, 2].randomGet());
        if (
          game.countPlayer(function (current) {
            return current != player && current.hasCard((card) => lib.filter.canBeGained(card, current, player), 'hej');
          }) > 0
        )
          player
            .chooseTarget(true, `三叛:获得一名其他角色区域内的一张牌(剩余${event.num}次)`, function (card, player, current) {
              return current != player && current.hasCard((card) => lib.filter.canBeGained(card, current, player), 'hej');
            })
            .set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(target, { name: 'shunshou' }, player, player);
            });
        else event.finish();
        ('step 4');
        var target = result.targets[0];
        player.gainPlayerCard(target, 'hej', true);
        if (event.num > 0) event.goto(3);
      },
      group: ['mengsanpan_hp', 'mengsanpan_lose', 'mengsanpan_log'],
      subSkill: {
        log: {
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          _priority: null,
          firstDo: true,
          init(player) {
            player.storage.mengsanpan_log = [
              [false, false],
              [false, false],
            ];
          },
          trigger: {
            global: 'roundStart',
          },
          content() {
            game.log('#g【三叛】1', '截止上轮记录');
            player.storage.mengsanpan_log[1] = player.storage.mengsanpan_log[0];
            game.log('#g【三叛】0', '记录刷新');
            player.storage.mengsanpan_log[0] = [false, false];
          },
          _priority: null,
        },
        hp: {
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          _priority: null,
          firstDo: true,
          trigger: {
            player: ['damageEnd', 'loseHp'],
          },
          filter(event, player) {
            return player.storage.mengsanpan_log[0][0] == false && player != _status.currentPhase;
          },
          content() {
            game.log('#g【三叛】0', '记录回合外体力减少');
            player.storage.mengsanpan_log[0][0] = true;
          },
          _priority: null,
        },
        lose: {
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          _priority: null,
          firstDo: true,
          trigger: {
            player: 'loseAfter',
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
          },
          filter(event, player) {
            if (player == _status.currentPhase) return false;
            if (event.name == 'gain' && event.player == player) return false;
            var evt = event.getl(player);
            return evt && evt.cards2 && evt.cards2.length && player.storage.mengsanpan_log[0][1] == false;
          },
          content() {
            game.log('#g【三叛】0', '记录回合外失去牌');
            player.storage.mengsanpan_log[0][1] = true;
          },
          _priority: null,
        },
      },
    },
    mengnixin: {
      trigger: {
        global: 'damageBegin4',
        player: 'phaseDiscardBegin',
      },
      filter(event, player) {
        if (event.name == 'phaseDiscard') return true;
        if (!event.source || event.source == event.player) return false;
        if (event.player == player && _status.currentPhase != event.source) return true;
        if (event.source == player && _status.currentPhase != player) return true;
      },
      forced: true,
      content() {
        if (trigger.name == 'phaseDiscard') {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengnixin1.mp3');
        } else {
          if (trigger.player == player) {
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengnixin3.mp3');
          } else {
            game.playAudio('../extension/忽悠宇宙/audio/skill/mengnixin2.mp3');
          }
          trigger.cancel();
        }
      },
      mod: {
        maxHandcard(player, num) {
          return num + 1;
        },
      },
    },
    menggulu: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'gainAfter',
      },
      filter(event, player) {
        if (!event.source || event.source == player || !event.source.isIn()) return false;
        if (_status.currentPhase != player) return false;
        return (
          player.countCards('he', function (card) {
            return get.type(card) == 'equip';
          }) > 0 || event.source.countCards('e') > 0
        );
      },
      frequent: 'check',
      check(event, player) {
        if (get.attitude(event.player, event.source) < 0) return true;
      },
      content() {
        'step 0';
        var targetx = [];
        if (
          player.countCards('he', function (card) {
            return get.type(card) == 'equip';
          }) > 0
        )
          targetx.push(player);
        if (trigger.source != player && trigger.source.countCards('e') > 0) targetx.push(trigger.source);
        if (targetx.length)
          player
            .chooseTarget('孤履:选择对方或自己', '1.重铸对方装备区内的一张牌.若此牌为武器牌,则其额外摸一张牌.</br>2.你弃置一张装备牌并对其造成1点雷电伤害.若此牌为武器牌,则你回复1点体力.', function (card, player, target) {
              return _status.event.targetx.includes(target);
            })
            .set('targetx', targetx)
            .set('ai', function (target) {
              var sourcex = _status.event.sourcex;
              var att = get.attitude(player, sourcex);
              if (att < 0)
                return player.countCards('he', function (card) {
                  return get.type(card) == 'equip';
                });
            })
            .set('sourcex', trigger.source);
        else event.finish();
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          if (target == player) {
            player.chooseCard(true, 'he', function (card) {
              return get.type(card) == 'equip';
            });
          } else {
            player.choosePlayerCard(true, target, 'e');
          }
        } else event.finish();
        ('step 2');
        var cardx = result.cards[0] || result.links[0];
        var target = get.owner(cardx);
        if (target == player) {
          player.discard(cardx);
          trigger.source.damage('thunder');
          if (get.subtype(cardx) == 'equip1') player.recover();
        } else {
          target.recast(cardx);
          if (get.subtype(cardx) == 'equip1') target.draw();
        }
      },
    },
    //卡夫卡
    mengyuemian: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'linkBegin',
        global: 'damageEnd',
      },
      forced: true,
      filter(event, player) {
        if (event.name == 'link') return !player.isLinked();
        else return event.dotDebuff && event.dotDebuff == 'hyyzBuff_chudian';
      },
      content() {
        if (trigger.name == 'link') trigger.cancel();
        else {
          player.chooseDrawRecover(true);
        }
      },
      mod: {
        globalTo(from, to, distance) {
          if (from.hashyyzBuff('hyyzBuff_chudian') && to.hashyyzBuff('mengyuemian')) return distance + 1;
        },
      },
      ai: {},
    },
    mengyexuan: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return player.countCards('he');
      },
      filterCard: true,
      selectCard() {
        return [
          1,
          Math.min(
            3,
            game.countPlayer(function (current) {
              return current != _status.event.player;
            })
          ),
        ];
      },
      position: 'he',
      filterTarget(card, player, target) {
        return player != target;
      },
      selectTarget() {
        return Math.min(
          ui.selected.cards.length,
          game.countPlayer(function (current) {
            return current != _status.event.player;
          })
        );
      },
      prompt: '夜喧,选择判定的角色',
      targetprompt(target) {
        var cards = ui.selected.cards;
        for (var i = 0; i < ui.selected.targets.length; i++) {
          if (target == ui.selected.targets[i]) return get.translation(i);
        }
      },
      discard: false,
      delay: false,
      loseTo: 'cardPile',
      insert: true,
      visible: false,
      check(card) {
        if (get.color(card) == 'red') return _status.event.player.hp > 3;
        else return 8 - get.value(card);
      },
      content() {
        'step 0';
        event.user = target;
        event.user.judge('mengyexuan', function (card) {
          return get.color(card) == 'red' ? 1 : 1.5;
        });
        ('step 1');
        if (result.color) event.color = result.color;
        else event.finish();
        ('step 2');
        if (event.color == 'black') {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengyexuan3.mp3');
          event.user.addhyyzBuff('hyyzBuff_chudian');
          event.goto(7);
        }
        ('step 3');
        if (event.color == 'red') {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengyexuan4.mp3');
          if (event.user.countCards('h')) {
            player
              .choosePlayerCard(event.user, true, 'h', 'visible', [0, 1])
              .set('user', event.user)
              .set('ai', (button) => {
                var player = _status.event.player,
                  user = _status.event.user;
                var card = button.link;
                var eff = 0,
                  att = -1;
                game.countPlayer(function (current) {
                  if (current != user && user.canUse(button.link, current)) {
                    eff = get.effect(current, card, user, player);
                    att = (get.attitude(player, current) + get.attitude(player, user)) / 1.5;
                  }
                });
                if (eff * att > 0) return eff * att;
                else return get.value(card);
              })
              .set('prompt', '夜喧:选择一张牌')
              .set('prompt2', '令其对你指定的角色使用此牌,或你获得此牌,其视为对你指定的角色使用【杀】')
              .set('filterOk', () => ui.selected.buttons.length);
          } else event._result = { bool: true, cards: [] };
        } else event.finish();
        ('step 4');
        if (result.cards.length) {
          event.cardr = result.cards[0];
          if (
            game.countPlayer(function (current) {
              return current != event.user && event.user.canUse(event.cardr, current);
            }) <= 0
          ) {
            event.user.give(event.cardr, player, 'giveAuto');
            event.cardr = { name: 'sha' };
          }
        } else {
          event.cardr = { name: 'sha' };
        }
        ('step 5');
        player
          .chooseTarget(true, function (card, player, target) {
            return target != _status.event.user && _status.event.user.canUse(_status.event.cardr, target, false);
          })
          .set('cardr', event.cardr)
          .set('user', event.user)
          .set('ai', function (target) {
            return get.effect(target, _status.event.cardr, _status.event.user, player);
          })
          .set('prompt', `夜喧:选择${get.translation(event.user)}使用${get.translation(event.cardr)}的目标`);
        ('step 6');
        event.user.useCard(event.cardr, result.targets[0]);
        event.finish();
        ('step 7');
        event.user.hyyzBang();
      },
      ai: {
        order: 10,
        result: {
          target(player, target) {
            if (get.attitude(player, target) > 0) return;
            var eff = get.damageEffect(target, player, player, 'thunder');
            if (target.hashyyzBuff('hyyzBuff_chudian')) eff *= 2;
            return eff * get.attitude(player, target);
          },
        },
      },
    },
    //诺艾尔
    mengchawei: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      trigger: {
        player: ['phaseZhunbeiBegin', 'damageEnd'],
      },
      forced: true,
      content() {
        'step 0';
        player.chooseTarget('察微:摸一张牌并观看一名角色的手牌', '令其摸一张牌,或弃置其一张牌').ai = function (target) {
          var att = get.attitude(_status.event.player, target);
          if (att > 0) {
            if (target.hasSkillTag('nogain')) {
              return false;
            } else {
              if (target == player) return att;
              else return att * 2;
            }
          } else {
            return -att * (target.countCards('e') + 1);
          }
        };
        ('step 1');
        if (result.bool) {
          event.target = result.targets[0];
          player.draw();
        } else event.finish();
        ('step 2');
        if (target.countCards('he') > 0)
          player
            .choosePlayerCard(`选择一张${get.translation(target)}的牌弃置,或点取消令其摸一张牌`, target, 'he', 'visible')
            .set('ai', (button) => {
              var att = _status.event.att,
                target = _status.event.targetx;
              var card = button.link;
              var val = target.getUseValue(card);
              if (att <= 0) {
                if (val > 0) return val;
                return get.value(card);
              }
              return -100;
            })
            .set('att', get.attitude(player, target))
            .set('targetx', target);
        else event._result = { bool: false };
        ('step 3');
        if (result.bool) {
          event.target.discard(result.links[0]);
        } else event.target.draw();
      },
    },
    mengkuangzhu: {
      audio: 'ext:忽悠宇宙/audio/skill:7',
      trigger: {
        global: ['chooseToUseBegin', 'chooseToRespondBegin'],
      },
      filter(event, player) {
        if (player.hp < 1) return false;
        if (event.player == _status.currentPhase || event.player == player) return false;
        if (event.responded || event.mengkuangzhu || player.hasSkill('mengkuangzhu_usable')) return false;
        for (var name of lib.inpile) {
          return get.type(name) == 'basic' && event.filterCard({ name: name }, event.player, event);
        }
        return false;
      },
      forced: true,
      content() {
        'step 0';
        var list = [];
        for (var name of lib.inpile) {
          if (get.type(name) == 'basic' && trigger.filterCard({ name: name }, trigger.player, trigger)) list.push(name);
        }
        var listx = [];
        for (var name of list) {
          listx.push([get.type2(name), '', name]);
          if (name == 'sha') {
            for (var nature of lib.inpile_nature) {
              if (trigger.filterCard({ name: name, nature: nature }, player, trigger)) {
                listx.push([get.type2(name), '', name, nature]);
              }
            }
          }
        }
        var evt = trigger.parent;
        var names = '';
        for (var i = 0; i < list.length; i++) {
          names += `【${get.translation(list[i])}】`;
          names += i < list.length - 2 ? '、' : '或';
        }
        names = names.slice(0, names.length - 1);
        var prompt2 = `<span class="yellowtext">${get.translation(trigger.player)}</span>` + (evt.card ? `因<span class="yellowtext">${get.translation(evt.card)}</span>` : '') + '可' + (trigger.name == 'chooseToUse' ? '使用' : '打出') + `一张<span class="yellowtext">${names}</span></br>是否受到1点伤害,视为其` + (trigger.name == 'chooseToUse' ? '使用' : '打出') + '之？';
        event.prompt2 = prompt2; //显示str
        if (!listx.length) event.finish();
        else {
          player
            .chooseButton([`###【匡助】###<div class="text center">${prompt2}</div>`, [listx, 'vcard']])
            .set('ai', function () {
              if (_status.event.dyx < 0) return false;
              return get.attitude(player, trigger.player) > 4 && player.hp + player.hujia > 0 && Math.random() + 1;
            })
            .set('dyx', trigger.dying ? get.attitude(player, trigger.dying) : 0);
        }
        ('step 1');
        if (result.bool) {
          var card = {
            name: result.links[0][2],
            nature: result.links[0][3],
          };
          event.card = card;
          if (
            trigger.name == 'chooseToUse' &&
            game.countPlayer(function (current) {
              return trigger.player.canUse(card, current, false);
            }) > 0
          ) {
            var next = player.chooseCardTarget({
              prompt: '匡助',
              prompt2: `选择${get.translation(trigger.player)}使用${get.translation(card)}的目标角色`,
              filterCard() {
                return false;
              },
              forced: true,
              selectCard: -1,
            });
            var keys = ['filterTarget', 'selectTarget', 'ai'];
            for (var key of keys) delete next[key];
            for (var i in trigger) {
              if (!Object.hasOwn(next, i)) {
                next[i] = trigger[i];
              }
            }
            next.cardx = card;
            next.filterTargetx = trigger.filterTarget || (() => false);
            next.filterTarget = function (card, player, target) {
              var filter = this.filterTargetx;
              if (typeof filter != 'function') filter = () => filter;
              card = _status.event.cardx;
              player = _status.event.getTrigger().player;
              return this.filterTargetx.apply(this, arguments);
            };
            //if (typeof next.selectTarget != 'number' && typeof next.selectTarget != 'function' && get.itemtype(next.selectTarget) != 'select') next.selectTarget = -1;
          } else {
            event._result = { bool: true, targets: [] };
          }
        } else event.finish();
        ('step 2');
        var targets = result.targets || [];
        event.targets = targets;
        player.say(['不要怕,我来帮忙啦', '好痛……', '我没关系的'].randomGet());
        player.addTempSkill('mengkuangzhu_usable');
        trigger.player.line(player);
        player.damage(trigger.player, 'nocard');
        trigger.untrigger();
        trigger.set('responded', true);
        var result = {
          bool: true,
          card: card,
        };
        if (targets.length) result.targets = targets;
        trigger.result = result;
        ('step 3');
        trigger.player
          .chooseControl('必须回报诺艾尔小姐!', '残忍拒绝!')
          .set('prompt', '可爱的诺艾尔小姐舍身帮助了你,不打算让她摸一张牌么？')
          .set('ai', () => (get.attitude(trigger.player, player) >= 0 ? '必须回报诺艾尔小姐!' : '残忍拒绝'));
        ('step 4');
        if (result.control == '必须回报诺艾尔小姐!') player.draw();
      },
      global: 'mengkuangzhu_ai',
      subSkill: {
        usable: {},
        ai: {
          charlotte: true,
          ai: {
            save: true,
            skillTagFilter(player, arg, target) {
              return (
                _status.currentPhase &&
                _status.currentPhase != player &&
                game.countPlayer(function (current) {
                  return current.hasSkill('mengkuangzhu') && !current.hasSkill('mengkuangzhu_usable');
                })
              );
            },
          },
        },
      },
    },
    mengjianshou: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      marktext: '言',
      intro: {
        content: 'expansion',
        markcount: 'expansion',
      },
      onremove(player, skill) {
        var cards = player.getExpansions(skill);
        if (cards.length) player.loseToDiscardpile(cards);
      },
      trigger: {
        player: 'gainAfter',
      },
      filter(event, player) {
        if (_status.currentPhase == player) return false;
        if (!event.cards || !event.cards.length) return false;
        return player.countCards('he', function (card) {
          return event.cards && event.cards.includes(card);
        });
      },
      forced: true,
      content() {
        'step 0';
        var cards = player.getCards('he', function (card) {
          return trigger.cards.includes(card);
        });
        player.addToExpansion(cards, 'throw').gaintag.add('mengjianshou');
        if (!player.hasSkill('mengjianshou_first')) {
          player.changeHujia(1);
          player.addTempSkill('mengjianshou_first');
        } else player.addTempSkill('mengjianshou_first');
        player.addSkill('mengjianshou_die');
      },
      subSkill: {
        die: {
          mod: {
            targetEnabled(card, player, target, now) {
              if (card.name == 'shunshou' && player.getExpansions('mengjianshou')) return false;
            },
          },
          trigger: {
            player: 'dieBegin',
          },
          forced: true,
          content() {
            'step 0';
            player
              .chooseTarget(get.prompt2('mengjianshou'), function (card, player, target) {
                return player != target;
              })
              .set('ai', function (target) {
                var att = get.attitude(_status.event.player, target);
                if (att > 0) {
                  if (target.hp == 1) {
                    att += 2;
                  }
                  if (target.hp < target.maxHp) {
                    att += 2;
                  }
                }
                return att;
              });
            ('step 1');
            if (result.bool) {
              var target = result.targets[0];
              player.line(target, 'green');
              target.recover();
              target.gain(player.getExpansions('mengjianshou'), player, 'giveAuto');
            }
          },
        },
        first: {
          mark: true,
          marktext: '缄守',
          intro: {
            content: '本回合已获得过<言>',
          },
        },
      },
      ai: {
        nogain: 1,
        skillTagFilter(player) {
          return player != _status.currentPhase;
        },
      },
    },
    //观星
    mengtianfu: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      marktext: '星',
      intro: {
        name: '天覆',
        name2: '星',
        content: '你有#枚<星>',
      },
      trigger: {
        player: 'phaseZhunbeiBegin',
      },
      forced: true,
      filter(event, player) {
        return player.countMark('mengtianfu') > 0;
      },
      preHidden: true,
      content() {
        'step 0';
        event.hand0 = player.getCards('h');
        ('step 1');
        var num = player.countMark('mengtianfu');
        player.removeMark('mengtianfu', 5);
        player.unmarkSkill('mengtianfu');
        var cards = get.cards(num);
        game.cardsGotoOrdering(cards);
        var next = player.chooseToMove(true);
        next.set('list', [['牌堆顶', cards], ['牌堆底'], ['你的手牌', player.getCards('h')]]);
        next.set('prompt', '天覆:交换等量手牌,并将牌移动到牌堆顶或牌堆底');
        next.set('num', player.countCards('h'));
        next.set('filterMove', function (from, to, moved) {
          if ((to == 0 || to == 1) && moved[2].includes(from.link)) return false;
          else return to != 2;
        });
        next.set('filterOk', function (moved) {
          return moved[2].length == _status.event.num;
        });
        next.processAI = function (list) {
          var cards = list[0][1],
            player = _status.event.player;
          const top = [],
            bottom = cards;
          for (const i of player.getCards('j')) {
            const judge = get.judge(i);
            bottom.sort((a, b) => judge(b) - judge(a)); //价值高的牌放前面
            if (bottom.length) {
              top.push(bottom.shift());
            }
          }
          bottom.sort((a, b) => get.value(b) - get.value(a)); //把价值高的牌放前面
          while (bottom.length) {
            top.push(bottom.shift());
          }
          top.reverse();
          return [top, bottom, player.getCards('h')];
        };
        ('step 2');
        var top = result.moved[0];
        var bottom = result.moved[1];
        var hand = result.moved[2];
        top.reverse();
        game.cardsGotoPile(top.concat(bottom), ['top_cards', top], function (event, card) {
          if (event.top_cards.includes(card)) return ui.cardPile.firstChild;
          return null;
        });
        player.gain(hand, 'gain2', 'log');
        player.popup(get.cnNumber(top.length) + `上${get.cnNumber(bottom.length)}下`);
        game.log(player, `将${get.cnNumber(top.length)}张牌置于牌堆顶`);
        ('step 3');
        var bool = true;
        if (event.hand0.length == 0) bool = false;
        for (var i of event.hand0) {
          if (player.getCards('h').includes(i)) {
            bool = false;
            break;
          }
        }
        if (bool) {
          game.log('#g【天覆】', '手牌全部被置换');
          player.draw();
        }
        ('step 4');
      },
      group: 'mengtianfu_add',
      subSkill: {
        add: {
          trigger: {
            global: 'changeHp',
          },
          filter(event, player) {
            return event.num != 0 && player.countMark('mengtianfu') < 5;
          },
          forced: true,
          content() {
            player.addMark('mengtianfu', Math.min(5 - player.countMark('mengtianfu'), Math.abs(trigger.num)));
            player.markSkill('mengtianfu');
          },
        },
      },
      ai: {
        threaten: 1.2,
      },
    },
    mengdizai: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        if (game.countPlayer() < 3) return false;
        return player.countCards('he') > 0;
      },
      position: 'he',
      filterCard: true,
      filterTarget(card, player, target) {
        return player != target;
      },
      check(card) {
        return 6 - get.value(card);
      },
      selectTarget: 2,
      multitarget: true,
      multiline: true,
      targetprompt: ['拼点发起人', '拼点目标'],
      content() {
        'step 0';
        targets[0].draw('bottom');
        targets[1].draw('bottom');
        ('step 1');
        if (targets[0].canCompare(targets[1])) {
          targets[0].chooseToCompare(targets[1]);
        } else event.finish();
        ('step 2');
        if (result.winner == targets[0] && result.winner != targets[1]) {
          targets[0].chooseToDiscard('he', 2, true);
          targets[1].damage(targets[0]);
        } else if (result.winner == targets[1] && result.winner != targets[0]) {
          targets[1].chooseToDiscard('he', 2, true);
          targets[0].damage(targets[1]);
        } else if (result.winner !== targets[0] && result.winner !== targets[1]) {
          player.gain([result.player, result.target].filterInD('d'), 'gain2').gaintag.add('mengdizai');
        }
      },
      ai: {
        order: 1,
        result: {
          target: -1,
        },
      },
      group: 'mengdizai_tag',
      subSkill: {
        tag: {
          charlotte: true,
          onremove(player) {
            player.removeGaintag('mengdizai');
          },
          mod: {
            ignoredHandcard(card, player) {
              if (card.hasGaintag('mengdizai')) return true;
            },
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && card.hasGaintag('mengdizai')) return false;
            },
          },
        },
      },
    },
    mengfengyang: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'chooseToCompareAfter',
      },
      filter(event, player) {
        if (event.preserve) return false;
        return true;
      },
      forced: true,
      content() {
        'step 0';
        var targetx = [],
          str = '';
        var num1 = trigger.num1;
        if (trigger.result.targets && trigger.result.targets.length >= 2) {
          str += '目标数大于1';
          str += `<li>${get.translation(trigger.player)}的拼点牌为` + num1;
          for (var i = 0; i < trigger.targets.length; i++) {
            var num2 = trigger.result.num2[i];
            str += `<li>${get.translation(trigger.targets[i])}的拼点牌为` + num2;
            var str2 = '<li>本次拼点没赢的角色为:';
            if (num1 > num2) {
              str2 += `[${get.translation(trigger.targets[i])}]`;
              if (!targetx.includes(trigger.targets[i])) targetx.push(trigger.targets[i]);
            }
            if (num1 < num2) {
              str2 += `[${get.translation(trigger.player)}]`;
              if (!targetx.includes(trigger.player)) targetx.push(trigger.player);
            }
            if (num1 == num2) {
              str2 += `[${get.translation(trigger.targets[i])}]`;
              str2 += `[${get.translation(trigger.player)}]`;
              if (!targetx.includes(trigger.targets[i])) {
                targetx.push(trigger.targets[i]);
              }
              if (!targetx.includes(trigger.player)) {
                targetx.push(trigger.player);
              }
            }
            str += str2;
          }
        } else {
          str += '目标数唯一';
          str += `<li>${get.translation(trigger.player)}的拼点牌为` + num1;
          var num2 = trigger.num2;
          str += `<li>${get.translation(trigger.target)}的拼点牌为` + num2;
          var str2 = '<li>本次拼点没赢的角色为:';
          if (num1 > num2) {
            str2 += `[${get.translation(trigger.target)}]`;
            targetx = [trigger.target];
          }
          if (num1 < num2) {
            str2 += `[${get.translation(trigger.player)}]`;
            targetx = [trigger.player];
          }
          if (num1 == num2) {
            str2 += `[${get.translation(trigger.player)}]`;
            str2 += `[${get.translation(trigger.target)}]`;
            targetx = [trigger.player, trigger.target];
          }
          str += str2;
        }
        game.log('#g【风扬】', str);
        event.targetx = targetx;
        ('step 1');
        event.target = event.targetx.shift();
        if (event.target.countCards('h') > 0) {
          player.chooseBool(`风扬:是否观看并交换${get.translation(event.target)}的手牌？`);
        } else {
          game.log('#g【风扬】', event.target, '没有手牌');
          event._result = { bool: false };
        }
        ('step 2');
        if (result.bool) {
          var next = player.chooseToMove('风场:交换你们的手牌');
          next.set('list', [
            [get.translation(event.target) + '的手牌', event.target.getCards('h')],
            ['你的手牌', player.countCards('h') > 0 ? player.getCards('h') : []],
          ]);
          next.set('filterMove', function (from, to) {
            return typeof to != 'number';
          });
          next.set('processAI', function (list) {
            var cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
              return get.value(a) - get.value(b);
            }),
              cards2 = cards.splice(0, event.target.countCards('h'));
            return [cards2, cards];
          });
        } else {
          if (event.targetx.length) event.goto(1);
          else event.finish();
        }
        ('step 3');
        if (result.bool) {
          var pushs = result.moved[0],
            gains = result.moved[1];
          pushs.removeArray(event.target.getCards('h'));
          gains.removeArray(player.getCards('h'));
          if (!pushs.length || pushs.length != gains.length) return;
          player.give(pushs, event.target, 'giveAuto');
          event.target.give(gains, player, 'giveAuto');
        }
        ('step 4');
        if (event.targetx.length) event.goto(1);
      },
      ai: {
        noCompareTarget: true,
      },
    },
    //王下一桶
    mengmoli: {
      enable: 'phaseUse',
      usable: 1,
      viewAs: {
        name: 'juedou',
      },
      filterCard: () => false,
      selectCard: -1,
      prompt: '视为使用一张【决斗】',
      group: ['mengmoli_dam'],
      ai: {
        order: 1,
      },
      subSkill: {
        dam: {
          trigger: {
            global: 'damageEnd',
          },
          filter(event, player) {
            return event.parent.skill == 'mengmoli' || event.getParent(3).name == 'mengmoli_dam';
          },
          forced: true,
          content() {
            if (trigger.player == player) {
              if (trigger.source && trigger.source.isIn() && player.canUse({ name: 'juedou' }, trigger.source, false)) {
                player.recast(
                  player.getCards('h', function (card) {
                    if (!['basic', 'trick'].includes(get.type(card))) return false;
                    if (get.tag(card, 'damage')) return player.canRecast(card);
                  })
                );
                player.useCard({ name: 'juedou' }, trigger.source, false);
              }
            }
            if (trigger.source && trigger.source == player) {
              player.recover();
              if (trigger.player.countCards('hej')) {
                player.gainPlayerCard(trigger.player, 'hej', true);
              }
            }
          },
        },
      },
    },
    //符玄微雨
    mengchitong: {
      audio: 'mengqiongguan_buff',
      trigger: { player: 'phaseZhunbeiBegin' },
      check(event, player) {
        return player.hp >= 3;
      },
      frequent: false,
      prompt2: '失去1点体力',
      content() {
        player.loseHp();
      },
      group: ['mengchitong_dam'],
      subSkill: {
        dam: {
          audio: 'mengqiongguan_buff',
          init(player) {
            player.storage.mengchitong_dam = [];
          },
          trigger: {
            global: 'damageBegin4',
          },
          filter(event, player) {
            return !player.storage.mengchitong_dam.includes(event.player);
          },
          check(event, player) {
            if (event.player != player && player.isMinHp()) return false;
            return get.attitude(player, event.player) > 0;
          },
          logTarget: 'player',
          prompt2: '防止此伤害.若为未发动过此技的其他角色,你失去1点体力并摸两张牌',
          content() {
            'step 0';
            player.storage.mengchitong_dam.push(trigger.player);
            trigger.cancel();
            ('step 1');
            if (trigger.player != player) {
              player.loseHp();
              player.draw();
            }
          },
        },
      },
    },
    mengxizhi: {
      audio: ['mengjianzhi', 'mengbie'],
      trigger: {
        player: ['loseHpEnd', 'gainAfter'],
      },
      forced: true,
      filter(event, player) {
        if (event.name == 'loseHp') return true;
        if (event.name == 'gain' && event.cards && event.cards.length <= 1) return false;
        for (var card of event.cards) {
          if (get.color(card, player) != get.color(event.cards[0], player)) return false;
        }
        return true;
      },
      content() {
        'step 0';
        if (trigger.name == 'loseHp') {
          var cards = get.cards(player.hp);
          game.cardsGotoOrdering(cards);
          var next = player.chooseToMove();
          next.set('list', [['牌堆顶', cards]]);
          next.set('prompt', '悉知:调整牌堆顶的牌');
          next.processAI = function (list) {
            list[0][1].sort(function (a, b) {
              return player.getUseValue(b) - player.getUseValue(a);
            });
            return [list[0][1]];
          };
        } else {
          var color = get.color(trigger.cards[0]);
          var str = `令${color == 'red' ? '一' : '至多两名'}名角色${color == 'red' ? '回复1点体力' : '弃置共计两张牌'}`;
          player
            .chooseTarget(str, [1, color == 'red' ? 1 : 2], true, function (card, player, target) {
              return color == 'red' ? true : target.countCards('he');
            })
            .set('ai', (target) => (color == 'red' ? get.recoverEffect(target, player, player) : -get.attitude(player, target)));
        }
        ('step 1');
        if (result.bool) {
          if (result.targets?.length) {
            if (get.color(trigger.cards[0]) == 'red') {
              result.targets[0].recover();
            } else {
              if (result.targets.length == 2) {
                player.discardPlayerCard(result.targets[0], true);
                player.discardPlayerCard(result.targets[1], true);
              } else {
                player.discardPlayerCard(result.targets[0], Math.min(result.targets[0].countCards('he'), 2), true);
              }
            }
          } else {
            var top = result.moved[0];
            top.reverse();
            for (var i = 0; i < top.length; i++) {
              ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
            }
            player.popup(get.cnNumber(top.length) + '上');
            game.log(player, `将${get.cnNumber(top.length)}张牌置于牌堆顶`);
            game.updateRoundNumber();
          }
        }
      },
    },
    //界终焉
    mengrezhaoxi: {
      audio: 'mengzhaoxi',
      mark: true,
      marktext: '☯',
      zhuanhuanji: true,
      intro: {
        content(storage, player, skill) {
          return `锁定技,转换技.${player.storage.mengrezhaoxi ? '阴:你不' : '阳:你'}于当前回合获得的手牌只能当做【火攻】使用.`;
        },
      },
      mod: {
        cardname(card, player, name) {
          if (get.position(card) == 'h') {
            if (player.getHistory('gain', (evt) => evt && evt.cards && evt.cards.includes(card)).length == !player.storage.mengrezhaoxi) return 'huogong';
          }
        },
      },
      trigger: {
        player: 'useCard',
      },
      filter(event, player) {
        if (get.itemtype(event.cards) != 'cards' || event.cards.length != 1) return false;
        return event.cards[0].name != 'huogong' && event.card.name == 'huogong';
      },
      forced: true,
      content() {
        player.changeZhuanhuanji('mengrezhaoxi');
      },
      ai: {
        threaten: 1.05,
      },
    },
    mengrepingji: {
      audio: 'mengpingji',
      mark: true,
      marktext: '平',
      intro: {
        markcount(storage, player) {
          return '' + player.getHistory('useCard', (evt) => evt.isPhaseUsing(player)).length + '/' + get.centralCards().length;
        },
        mark(dialog, storage, player) {
          dialog.addText(`<li>使用的牌数:${player.getHistory('useCard', (evt) => evt.isPhaseUsing(player)).length}`);
          dialog.addText(`<li>中央区的牌数:${get.centralCards().length}`);
        },
        content(storage, player) {
          return `${player.getHistory('useCard', (evt) => evt.isPhaseUsing(player)).length}<li>中央区的牌数:${get.centralCards().length}`;
        },
      },
      trigger: {
        player: 'useCardAfter',
      },
      filter(event, player) {
        if (!player.isPhaseUsing()) return false;
        var num = get.centralCards().length / 2;
        return player.getHistory('useCard', (evt) => evt.isPhaseUsing(player)).length == num;
      },
      content() {
        var num = get.centralCards().length / 2;
        player.draw(num);
      },
      group: 'mengrepingji_log',
      subSkill: {
        log: {
          trigger: {
            global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
          },
          forced: true,
          charlotte: true,
          silent: true,
          content() { },
        },
      },
    },
    mengrecifan: {
      audio: 'mengcifan',
      trigger: {
        global: 'dyingAfter',
      },
      filter(event, player) {
        return event.player.isAlive() && get.centralCards().length;
      },
      content() {
        //QQQ
        'step 0';
        event.targets = game.filterPlayer().slice(0);
        event.targets.sortBySeat(trigger.player);
        ('step 1');
        if (event.targets.length && get.centralCards().length) {
          event.targetx = event.targets.shift();
          event.targetx.chooseButton(['赐繁:获得中央区的一张牌', get.centralCards()], true).ai = get.buttonValue;
        } else event.finish();
        ('step 2');
        event.targetx.gain(result.links, 'gain2');
        event.goto(1);
      },
    },
    //白术
    mengzhenyao: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      enable: 'phaseUse',
      usable: 1,
      filterTarget(card, player, target) {
        return target != player;
      },
      content() {
        'step 0';
        player.swapHandcards(target);
        ('step 1');
        player
          .chooseControl()
          .set('choiceList', ['将一张手牌替换为【毒】', '创造一张【无中生有】', '与对方交换手牌'])
          .set('forced', false)
          .set('ai', function () {
            var targetx = _status.event.targetx;
            var player = _status.event.player;
            var value = 0;
            var cards0 = player.getCards('h');
            for (var i of cards0) value -= get.value(i);
            var cards1 = targetx.getCards('h');
            for (var i of cards1) value += get.value(i);
            if (get.attitude(player, targetx) > 0) return 1;
            else {
              if (value > 0) return 0;
              return Math.random() < 0.6 ? 1 : 2;
            }
          })
          .set('targetx', target);
        ('step 2');
        event.index1 = result.index;
        target
          .chooseControl()
          .set('choiceList', ['将一张手牌替换为【毒】', '创造一张【无中生有】', '与对方交换手牌'])
          .set('forced', false)
          .set('ai', function () {
            var targetx = _status.event.targetx;
            var player = _status.event.player;
            var value = 0;
            var cards0 = player.getCards('h');
            for (var i of cards0) value -= get.value(i);
            var cards1 = targetx.getCards('h');
            for (var i of cards1) value += get.value(i);
            if (get.attitude(player, targetx) > 0) return 1;
            else {
              if (value > 0) return 0;
              return Math.random() < 0.6 ? 1 : 2;
            }
          })
          .set('targetx', player);
        ('step 3');
        event.index2 = result.index;
        ('step 4');
        if (event.index1 == 0) {
          if (player.countCards('h')) player.chooseCard('h', '将一张牌替换为【毒】', true);
          else event.goto(6);
        } else if (event.index1 == 1) {
          game.log(player, '获得了', '#y【无中生有】');
          player.gain(game.createCard('wuzhong'));
          event.goto(6);
        } else if (event.index1 == 2) {
          player.swapHandcards(target);
          event.goto(6);
        }
        ('step 5');
        if (result.bool && result.cards) {
          game.log(player, '替换了', '#y【毒】');
          player.loseToDiscardpile(result.cards);
          var card = ui.create.card().init([card.suit, card.number, 'du']);
          player.gain(card).animate = false;
        }
        ('step 6');
        if (event.index2 == 0) {
          if (player.countCards('h')) target.chooseCard('h', '将一张牌替换为【毒】', true);
          else event.goto(6);
        } else if (event.index2 == 1) {
          game.log(target, '获得了', '#y【无中生有】');
          target.gain(game.createCard('wuzhong'), 'gain2');
          event.finish();
        } else if (event.index2 == 2) {
          target.swapHandcards(player);
          event.finish();
        }
        ('step 7');
        if (result.bool && result.cards) {
          game.log(target, '替换了', '#y【毒】');
          target.loseToDiscardpile(result.cards);
          var card = ui.create.card().init([card.suit, card.number, 'du']);
          target.gain(card).animate = false;
        }
      },
      ai: {
        order: 10,
        result: {
          player(player, target) {
            var value = 0;
            var cards0 = player.getCards('h');
            for (var i of cards0) value -= get.value(i);
            var cards1 = target.getCards('h');
            for (var i of cards1) value += get.value(i);
            if (get.attitude(player, target) > 0) value += 2;
            return value;
          },
          target(player, target) {
            var value = 0;
            var cards0 = player.getCards('h');
            for (var i of cards0) value += get.value(i);
            var cards1 = target.getCards('h');
            for (var i of cards1) value -= get.value(i);
            if (get.attitude(player, target) > 0) value += 2;
            return value;
          },
        },
      },
    },
    mengwenji: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        global: 'damageEnd',
      },
      filter(event, player) {
        if (!event.source || !event.source.isIn()) return false;
        if (event.player == event.source) return false;
        if (event.player != player && event.source != player) return false;
        return player.canUse({ name: 'tuixinzhifu' }, event.player == player ? event.source : event.player, false);
      },
      content() {
        player.useCard({ name: 'tuixinzhifu' }, trigger.player == player ? trigger.source : trigger.player, false);
      },
    },
    //卢卡
    menghanxin: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
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
        if (!result.tie) {
          var players = [player, target];
          if (result.bool) players.reverse();
          players[1].line(players[0], 'thunder');
          players[0].damage(players[1], 1);
        }
      },
      group: 'menghanxin_damage',
      global: 'menghanxin_add',
      subSkill: {
        damage: {
          trigger: {
            player: 'damageAfter',
            source: 'damageSource',
          },
          forced: true,
          filter(event, player) {
            return event.num > 0;
          },
          content() {
            'step 0';
            player.chooseCard('he', '是否重铸至多两张牌', [1, 2], lib.filter.cardRecastable).set('ai', function (card) {
              var player = _status.event.player;
              return 5 - get.value(card);
            });
            ('step 1');
            if (result.bool) {
              if (trigger.player == player) game.playAudio('../extension/忽悠宇宙/audio/skill/menghanxin' + [4, 5].randomGet());
              player.recast(result.cards);
            }
          },
        },
        add: {
          trigger: {
            target: 'compare',
          },
          forced: true,
          filter(event, player) {
            return event.parent.name == 'menghanxin' && !event.iwhile && event.num1 < 13;
          },
          content() {
            trigger.num2 += 2;
            game.log(player, '的拼点牌点数+2');
          },
        },
      },
      ai: {
        order: 8,
        result: {
          player(player) {
            return player.hp > 2 ? 2 : -2;
          },
          target: -1,
        },
      },
    },
    mengquanzhi: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      otherNum(player) {
        let num = 0;
        game.countPlayer2(function (current) {
          if (current != player) {
            current.getHistory('lose', (evt) => {
              if (evt.cards2 && evt.cards2.length) {
                for (var i of evt.cards2) {
                  let a = i.number;
                  if (typeof a == 'number') {
                    if (evt.getParent(3).name == 'menghanxin') a += 2;
                    if (a > num) num = Math.min(a, 13);
                  }
                }
              }
            });
          }
        });
        return num;
      },
      mark: true,
      intro: {
        content(storage, player) {
          let num = lib.skill.mengquanzhi.otherNum(player);
          let str = '';
          if (num > 0) str += '本回合其他角色失去最大的点数:' + num;
          else str += '无记录';
          if (player.hasSkill('mengquanzhi_disable')) str += '<li>拳志②无效';
          return str;
        },
      },
      mod: {
        cardUsable(card, player) {
          if (typeof card == 'object') {
            var num1 = lib.skill.mengquanzhi.otherNum(player);
            var num2 = card.number;
            if (typeof num1 == 'number' && typeof num2 == 'number' && num1 > num2) return Infinity;
          }
        },
        aiOrder(player, card, num) {
          if (typeof card == 'object') {
            var num1 = lib.skill.mengquanzhi.otherNum(player);
            var num2 = card.number;
            if (typeof num1 == 'number' && typeof num2 == 'number' && num1 > num2) return num + 5;
          }
        },
      },
      trigger: {
        global: 'damageEnd',
      },
      filter(event, player) {
        if (player.hasSkill('mengquanzhi_disable')) return false;
        return event.source && event.source.isIn() && event.player != event.source && (event.player.countCards('h') != event.source.countCards('h') || event.player.hp != event.source.hp);
      },
      forced: true,
      content() {
        'step 0';
        var list = [];
        if (trigger.player.countCards('h') > trigger.source.countCards('h')) {
          list.push(trigger.source);
        } else {
          list.push(trigger.player);
        }
        if (trigger.player.hp > trigger.source.hp) {
          list.push(trigger.source);
        } else {
          list.push(trigger.player);
        }
        player.chooseTarget('拳志:令一名角色摸一张牌', (card, player, target) => list.includes(target));
        ('step 1');
        if (result.bool) {
          if (trigger.source.hp > trigger.player.hp) player.addTempSkill('mengquanzhi_disable');
          result.targets[0].draw();
        }
      },
      subSkill: { disable: {} },
    },
    //桂乃芬
    mengzhuyi: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      trigger: {
        player: 'phaseUseBegin',
      },
      filter(event, player) {
        return player.countCards('he', function (card) {
          return get.type2(card) == 'trick' || get.type2(card) == 'basic';
        });
      },
      forced: true,
      content() {
        'step 0';
        player
          .chooseCard('诸艺:选择一种类型的牌全部重铸,本回合不能使用此类的牌', '本回合使用以下类型的牌时:</br>基本牌,无距离限制且不能被响应.</br>锦囊牌,可以增加或减少1个目标.</br>装备牌,摸一张牌.', function (card) {
            return (get.type2(card) == 'trick' || get.type2(card) == 'basic') && player.canRecast(card);
          })
          .set('ai', function (card) {
            if (!player.countCards('h', { name: 'tao' })) return get.type(card) == 'basic';
            return get.type2(card) == 'trick';
          });
        ('step 1');
        if (result.bool) {
          var typex = get.type2(result.cards[0]);
          player.recast(
            player.getCards('h', function (card) {
              return get.type2(card) == typex;
            })
          );
          player.addTempSkill('mengzhuyi_buff');
          player.storage.mengzhuyi_buff = typex;
        }
      },
      subSkill: {
        buff: {
          mark: true,
          intro: {
            content: `不能使用或打出$牌`,
          },
          onremove(player) {
            delete player.storage.mengzhuyi_buff;
          },
          mod: {
            cardEnabled2(card, player) {
              if (get.position(card) != 'h') return false;
              if (get.type2(card) == player.storage.mengzhuyi_buff || (player.storage.mengzhuyi_buff == 'trick' && get.type(card) == 'delay')) return false;
            },
            targetInRange(card, player, target) {
              if (get.type2(card) == player.storage.mengzhuyi_buff) return;
              return true;
            },
          },
          trigger: {
            player: 'useCard2',
          },
          filter(event, player) {
            return get.type(event.card) != 'delay';
          },
          forced: true,
          content() {
            'step 0';
            if (get.type(trigger.card) == 'equip') {
              player.draw();
              event.finish();
            } else if (get.type2(trigger.card) == 'basic') {
              game.log(trigger.card, '不能被响应');
              trigger.nowuxie = true;
              trigger.directHit.addArray(game.players);
              event.finish();
            } else {
              var goon = false;
              var info = get.info(trigger.card);
              if (trigger.targets && !info.multitarget) {
                var players = game.filterPlayer();
                for (var i of players) {
                  if (lib.filter.targetEnabled2(trigger.card, player, i) && !trigger.targets.includes(i)) {
                    goon = true;
                    break;
                  }
                }
              }
              if (goon) {
                player
                  .chooseTarget(`诸艺:是否额外指定一名${get.translation(trigger.card)}的目标？`, function (card, player, target) {
                    var trigger = _status.event;
                    if (trigger.targets.includes(target)) return false;
                    return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                  })
                  .set('ai', function (target) {
                    var trigger = _status.event.getTrigger();
                    var player = _status.event.player;
                    return get.effect(target, trigger.card, player, player);
                  })
                  .set('targets', trigger.targets)
                  .set('card', trigger.card);
              } else {
                if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                  event.goto(3);
                }
              }
            }
            ('step 1');
            if (result.bool) {
              event.target = result.targets[0];
            } else {
              event.finish();
            }
            ('step 2');
            if (event.target) {
              if (!trigger.targets.includes(event.target)) trigger.targets.push(event.target);
              game.log(trigger.card, '增加了', event.target);
            }
            event.finish();
            ('step 3');
            player
              .chooseTarget(`诸艺:是否减少一名${get.translation(trigger.card)}的目标？`, function (card, player, target) {
                return _status.event.targets.includes(target);
              })
              .set('ai', function (target) {
                var trigger = _status.event.getTrigger();
                return -get.effect(target, trigger.card, trigger.player, _status.event.player);
              })
              .set('targets', trigger.targets);
            ('step 4');
            if (result.bool) {
              event.targets = result.targets;
              if (event.isMine()) {
                event.finish();
              }
              for (var i = 0; i < result.targets.length; i++) {
                trigger.targets.remove(result.targets[i]);
                game.log(trigger.card, '移除了', result.targets[i]);
              }
            } else {
              event.finish();
            }
            ('step 5');
          },
        },
      },
    },
    menghenhuo: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return player;
      },
      content() {
        'step 0';
        player.damage(player);
        ('step 1');
        var list = ['　　基本牌　　', '　　锦囊牌　　', '　　装备牌　　'];
        for (var i = 0; i < list.length; i++) {
          list[i] = [i, list[i]];
        }
        var next = player.chooseButton(['狠活:依次选择两个类型<br>本回合手牌中的前者将视为后者', [list.slice(0, 1), 'tdnodes'], [list.slice(1, 2), 'tdnodes'], [list.slice(2, 3), 'tdnodes']]);
        next.set('forced', true);
        next.set('selectButton', 2);
        next.set('filterButton', function (button) {
          return true;
        });
        next.set('ai', function (button) {
          var player = _status.event.player;
          switch (button.link) {
            case 0:
              return 10;
            case 1:
              return 5;
            case 2:
              return 0;
          }
        });
        ('step 2');
        var map = {
          1: 'basic',
          2: 'trick',
          3: 'equip',
        };
        game.log('#g【狠活】', '本回合', player, '手牌中的', `#y${lib.translate[map[result.links[0] + 1]]}牌`, '视为', `#y${lib.translate[map[result.links[1] + 1]]}牌`);
        player.addTempSkill('menghenhuo_buff');
        player.storage.menghenhuo_buff = [map[result.links[0] + 1], map[result.links[1] + 1]];
      },
      ai: {
        order: 12,
        result: {
          player(player, target) {
            if (player.hp <= 1) return -5;
            return player.countCards('h') * 3;
          },
        },
      },
    },
    menghenhuo_buff: {
      mark: true,
      marktext: '狠',
      intro: {
        name: '狠活',
        content(storage, player) {
          return `<span class=firetext>${lib.translate[storage[0]]}牌</span>视为<span class=greentext>${lib.translate[storage[1]]}牌</span>`;
        },
      },
      init(player) {
        delete player.storage.menghenhuo_buff;
        get.type = function (obj, method, player) {
          var returnx = '';
          if (typeof obj == 'string') obj = { name: obj };
          if (typeof obj != 'object') return;
          var name = obj.name;
          if (!lib.card[name]) {
            if (!name.startsWith('sha_')) return;
            if (
              name
                .slice(4)
                .split('_')
                .every((n) => lib.nature.has(n))
            )
              returnx = lib.card.sha.type;
          }
          if (method == 'trick' && lib.card[name].type == 'delay') returnx = 'trick';
          returnx = lib.card[name].type;
          if (get.itemtype(player) == 'player' || (player !== false && get.position(obj) == 'h')) {
            var owner = player || get.owner(obj);
          }
          if (_status.event.player) owner = _status.event.player;
          if (_status.event.parent.player) owner = _status.event.parent.player;
          if (owner && owner.hasSkill('menghenhuo_buff')) {
            var sto = owner.getStorage('menghenhuo_buff');
            if (returnx == sto[0]) return sto[1];
          }
          return returnx;
        };
      },
      onremove(player) {
        get.type = function (obj, method, player) {
          if (typeof obj == 'string') obj = { name: obj };
          if (typeof obj != 'object') return;
          var name = obj.name;
          if (!lib.card[name]) {
            if (!name.startsWith('sha_')) return;
            if (
              name
                .slice(4)
                .split('_')
                .every((n) => lib.nature.has(n))
            )
              return lib.card.sha.type;
          }
          if (method == 'trick' && lib.card[name].type == 'delay') return 'trick';
          return lib.card[name].type;
        };
        delete player.storage.menghenhuo_buff;
      },
    },
    mengtangcai: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        player: 'damageEnd',
      },
      forced: true,
      preHidden: true,
      filter(event, player) {
        return player.countCards('hej');
      },
      content() {
        'step 0';
        player.showCards(player.getCards('hej'));
        ('step 1');
        var type = [];
        player.getCards('hej').map((card) => type.add(get.type2(card)));
        player.draw(type.length);
      },
      ai: {
        maixie_defend: true,
        threaten: 0.9,
      },
    },
    //纳西妲柚衣
    mengxushi: {
      trigger: {
        player: ['useCard', 'respond'],
      },
      mark: true,
      intro: {
        content(storage, player) {
          var str = '本回合使用过:</br>';
          var list = [];
          player.getHistory('useCard', (evt) => {
            if (evt.card.suit != 'none' && !list.includes(evt.card.suit)) list.push(evt.card.suit);
          });
          player.getHistory('respond', (evt) => {
            if (evt.card.suit != 'none' && !list.includes(evt.card.suit)) list.push(evt.card.suit);
          });
          if (!list.length) return '本回合未使用过有花色的牌';
          list.forEach(function (card) {
            str += get.translation(card);
          });
          return str;
        },
      },
      forced: true,
      content() {
        var suit = trigger.card.suit;
        if (suit && suit != 'none') {
          var bool = true;
          player.getHistory('useCard', (evt) => {
            if (evt != trigger && evt.card.suit == trigger.card.suit) {
              bool = false;
            }
          });
          player.getHistory('respond', (evt) => {
            if (evt != trigger && evt.card.suit == trigger.card.suit) bool = false;
          });
          if (bool) player.draw();
          else player.chooseToDiscard(true, 'he');
        } else player.draw();
      },
      mod: {
        aiUseful(player, card, num) {
          let suit = card.suit;
          if (!suit || suit == 'none') return;
          let bool = true;
          player.getHistory('useCard', (evt) => {
            if (evt.card.suit == card.suit) {
              bool = false;
            }
          });
          player.getHistory('respond', (evt) => {
            if (evt.card.suit == card.suit) bool = false;
          });
          return bool ? [num + 5] : [num - 5];
        },
        aiOrder() {
          lib.skill.mengxushi.mod.aiUseful.apply(this, arguments);
        },
      },
      ai: {
        effect: {
          player(card, player, target) {
            let suit = card.suit;
            if (!suit || suit == 'none') return;
            let bool = true;
            player.getHistory('useCard', (evt) => {
              if (evt.card.suit == card.suit) {
                bool = false;
              }
            });
            player.getHistory('respond', (evt) => {
              if (evt.card.suit == card.suit) bool = false;
            });
            return [1, bool ? 1 : -1];
          },
        },
      },
    },
    mengnanke: {
      enable: 'phaseUse',
      filter(event, player) {
        return !player.hasSkill('mengnanke_disable');
      },
      content() {
        player.addTempSkill('mengnanke_disable');
        lib.skill.mengnanke.delete();
      },
      delete() {
        game.countPlayer2(function (current) {
          var history = current.actionHistory[current.actionHistory.length - 1].useCard;
          if (history.length) {
            current.getStat().card.sha = 0;
            current.getStat().card.jiu = 0;
            game.log('<span class="firetext">——已删除</span>', current, '<span class="firetext">的<span class="yellowtext">使用牌</span>记录——</span>');
            history.length = 0;
            history = [];
          }
          var history = current.actionHistory[current.actionHistory.length - 1].respond;
          if (history.length) {
            game.log('<span class="firetext">——已删除</span>', current, '<span class="firetext">的<span class="yellowtext">打出牌</span>记录——</span>');
            history.length = 0;
            history = [];
          }
        });
      },
      ai: {
        order: 1,
        result: { player: 4 },
      },
      group: 'mengnanke_1',
      subSkill: {
        1: {
          trigger: {
            player: ['loseAfter', 'damageEnd'],
            global: 'loseAsyncAfter',
          },
          filter(event, player) {
            if (player.hasSkill('mengnanke_disable')) return false;
            return event.name == 'damage' || (event.type == 'discard' && event.getl(player).cards2.length);
          },
          content() {
            player.addTempSkill('mengnanke_disable');
            lib.skill.mengnanke.delete();
          },
        },
        disable: {},
      },
    },
    mengzhezhi: {
      trigger: { global: 'phaseJieshuBegin' },
      filter(event, player) {
        if (!player.countCards('hes')) return false;
        return player.getHistory('useCard').length + player.getHistory('respond').length == 0 || event.player.getHistory('useCard').length + event.player.getHistory('respond').length == 0;
      },
      forced: true,
      content() {
        'step 0';
        var list = [];
        for (var i of lib.inpile) {
          let card = { name: i };
          if (get.type(i) == 'basic') {
            if (i == 'shan' || i == 'du') continue;
            if (player.countCards('hes', { color: 'red' })) {
              if (player.canUse(card, trigger.player)) list.push(['基本', '', i]);
              if (i == 'sha') {
                for (var j of lib.inpile_nature) {
                  card.nature = j;
                  if (player.canUse(card, trigger.player)) list.push(['基本', '', 'sha', j]);
                }
              }
            }
          } else if (get.type(i) == 'trick') {
            if (i == 'wuxie' || i == 'du') continue;
            if (player.countCards('hes', { color: 'black' })) {
              if (player.canUse(card, trigger.player)) list.push(['锦囊', '', i]);
            }
          }
        }
        var dialog = ui.create.dialog('折枝:将一张红/黑色牌当任意基本/锦囊牌对其使用', 'hidden');
        dialog.addText('<div class="text center">你的手牌</div>');
        dialog.add(player.getCards('hes'));
        dialog.addText('<div class="text center">视为使用的牌</div>');
        dialog.add([list, 'vcard']);
        var next = player
          .chooseButton(dialog)
          .set('selectButton', 2)
          .set('filterButton', function (button) {
            let hs = _status.event.player.getCards('hes');
            if (ui.selected.buttons.length) {
              let ui_button = ui.selected.buttons[0].link,
                ready_button = button.link;
              if (hs.includes(ui_button) == hs.includes(ready_button)) return false;
              if (hs.includes(ui_button) == true) return get.type(ready_button[2]) == (get.color(ui_button) == 'black' ? 'trick' : 'basic');
              else return get.color(ready_button) == (get.type(ui_button[2]) == 'trick' ? 'black' : 'red');
            } else return true;
          })
          .set('ai', function (button) {
            let hs = _status.event.player.getCards('hes');
            if (hs.includes(button.link)) {
              return 10 - get.value(button.link);
            } else {
              return get.effect(_status.currentPhase, { name: button.link[2], nature: button.link[3] }, player, player);
            }
          });
        ('step 1');
        if (result.bool && result.links && result.links.length == 2) {
          var hs = player.getCards('hes');
          if (hs.includes(result.links[0])) {
            player.useCard({ name: result.links[1][2], nature: result.links[1][3] }, [result.links[0]], trigger.player, false);
          } else {
            player.useCard({ name: result.links[0][2], nature: result.links[0][3] }, [result.links[1]], trigger.player, false);
          }
        }
      },
    },
    //支配之律者
    mengzongou: {
      audio: 'ext:忽悠宇宙/audio/skill:14',
      enable: 'phaseUse',
      usable: 1,
      filter: (event, player) => player.countCards('he', (card) => get.type(card) == 'trick'),
      filterCard: (card) => get.type(card) == 'trick',
      content() {
        'step 0';
        var len = get.cardNameLength(cards[0]) + player.getDamagedHp();
        var cards = get.cards(len);
        player.showCards(cards, get.translation(player) + '发动了【纵偶】');
        var suits = [];
        for (let card of cards) {
          if (card.suit && card.suit != 'none' && !suits.includes(card.suit)) suits.push(card.suit);
        }
        event.suits = suits;
        ('step 1');
        if (game.countPlayer((current) => current.isIn() && current != player) > 1) {
          player
            .chooseTarget('纵偶', `将${get.translation(event.suits[0])}分配给其他角色`, lib.filter.notMe, true)
            .set('ai', (target) => {
              var eff = -get.attitude(player, target);
              if (target.hasSkill('mengzongou_mark') && target.storage.mengzongou_mark && target.storage.mengzongou_mark.includes(_status.event.suitx)) eff /= 2;
              return eff;
            })
            .set('suitx', event.suits[0]);
        } else event._result = { bool: true, targets: game.filterPlayer((current) => current.isIn() && current != player) };
        ('step 2');
        var target = result.targets[0];
        player.line(target, 'fire');
        target.addSkill('mengzongou_mark');
        player
          .when('die')
          .assign({
            forceDie: true,
            charlotte: true,
            firstDo: true,
          })
          .then(() => {
            game.countPlayer(function (current) {
              if (current.hasSkill('mengzongou_mark')) current.removeSkill('mengzongou_mark');
            });
          });
        game.log(target, '被', player, '<span class="firetext">操控</span>了');
        do {
          var suit = event.suits.shift();
          if (!target.storage.mengzongou_mark.includes(suit)) {
            target.markAuto('mengzongou_mark', [suit]);
          }
        } while (game.countPlayer((current) => current.isIn() && current != player) == 1 && event.suits.length);
        ('step 3');
        if (event.suits.length) event.goto(1);
      },
      group: 'mengzongou_use',
      subSkill: {
        mark: {
          mark: true,
          charlotte: true,
          init: (player) => (player.storage.mengzongou_mark = []),
          marktext: '傀',
          intro: {
            name: '傀',
            content(storage, player) {
              if (!storage) return '没有<傀>标记';
              var str = '<傀>标记的花色:';
              str += storage.map((suit) => get.translation(suit));
              return str;
            },
          },
          onremove: (player) => player.unmarkSkill('mengzongou_mark'),
        },
        use: {
          trigger: {
            global: 'useCardToPlayer',
          },
          forced: true,
          filter(event, player) {
            return (
              event.targets.length == 1 &&
              event.player.hasSkill('mengzongou_mark') &&
              event.player.storage.mengzongou_mark.includes(event.card.suit) &&
              !event.parent.mengzongou_use &&
              game.countPlayer(function (current) {
                return lib.filter.targetEnabled2(event.card, event.player, current) && !event.targets.includes(current) && lib.filter.targetInRange(event.card, event.player, current);
              })
            );
          },
          content() {
            'step 0';
            player
              .chooseTarget('纵偶', `重新指定${get.translation(trigger.player)}使用${get.translation(trigger.card)}的目标`, function (card, player, target) {
                var trigger = _status.event.getTrigger();
                var card = trigger.card;
                return lib.filter.targetEnabled2(card, trigger.player, target) && !trigger.targets.includes(target) && lib.filter.targetInRange(card, trigger.player, target);
              })
              .set('ai', (target) => get.effect(target, trigger.card, trigger.player, player));
            ('step 1');
            if (result.bool) {
              var targets = result.targets;
              if (trigger.target != targets[0]) {
                game.log(player, '将', trigger.card, '的目标改为了', targets[0]);
                trigger.player.unmarkAuto('mengzongou_mark', [trigger.card.suit]);
                trigger.parent.mengzongou_use = true;
                trigger.parent.targets.remove(trigger.target);
                trigger.parent.targets.push(targets[0]);
              }
            }
          },
        },
      },
      ai: {
        order: 12,
        result: {
          player: 10,
        },
      },
    },
    mengkuixi: {
      audio: 'mengzongou',
      trigger: {
        global: 'useCard1',
      },
      forced: true,
      filter(event, player) {
        if (event.name == 'shan' || event.name == 'wuxie') return false;
        if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return false;
        if (player.getStorage('mengkuixi').length) return false;
        var info = get.translation(event.card.name + '_info');
        if (!info) return false;
        for (var i of ['伤害', '回复', '弃置']) {
          if (info.includes(i)) return true;
        }
        return false;
      },
      filter1(event, player) {
        if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return false;
        var info = get.info(event.card);
        if (event.targets && !info.multitarget) {
          var players = game.filterPlayer();
          for (var i of players) {
            if (lib.filter.targetEnabled2(event.card, event.player, i) && !event.targets.includes(i) && lib.filter.targetInRange(event.card, event.player, i)) {
              return true;
            }
          }
        }
      },
      filter2(event, player) {
        return event.targets && event.targets.length;
      },
      content() {
        'step 0';
        var list = ['为XXX增加/减少一个目标', '令XXX无法被响应', 'XXX结算结束后,分配此牌的花色为<傀>'],
          card = get.translation(trigger.card);
        for (var i = 0; i < list.length; i++) {
          list[i] = [i, list[i].replace(/XXX/g, card)];
        }
        var next = player.chooseButton([`傀戏:<span class='thundertext'>选择一项</span>或<span class='thundertext'>直接确定</span>`, [list.slice(0, 2), 'tdnodes'], [list.slice(2, 3), 'tdnodes']]);
        next.set('forced', true);
        next.set('selectButton', [0, 1]);
        next.set('filterButton', function (button) {
          var trigger = _status.event.getTrigger();
          if (button.link == 0) return _status.event.bool1 || _status.event.bool2;
          if (button.link == 1) return true;
          if (button.link == 2) return player.hasSkill('mengzongou') && trigger.card.suit && trigger.card.suit != 'none';
        });
        next.set('bool1', lib.skill.mengkuixi.filter1(trigger, player));
        next.set('bool2', lib.skill.mengkuixi.filter2(trigger, player));
        next.set('ai', function (button) {
          var player = _status.event.player;
          var event = _status.event.getTrigger();
          switch (button.link) {
            case 0: {
              var num = 0;
              if (
                game.hasPlayer(function (current) {
                  return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current) && get.effect(current, event.card, player, player) > 0;
                })
              )
                num = 1.6 + Math.random();
              var info = get.info(event.card);
              if (info.multitarget && trigger.targets && trigger.targets.length && get.effect(current, event.card, player, player) < 0) num = 1.9 + Math.random();
              return num;
            }
            case 1: {
              if (get.attitude(player, event.player) > 0) {
                var num = 1.3;
                if (event.card.name == 'sha') {
                  if (!event.targets.filter((current) => get.effect(current, event.card, player, player) > 0).length) return 0;
                  if (
                    event.card.name == 'sha' &&
                    event.targets.filter(function (current) {
                      if (current.mayHaveShan() && get.attitude(player, current) <= 0) {
                        if (current.hasSkillTag('useShan')) num = 1.8;
                        return true;
                      }
                      return false;
                    }).length
                  )
                    return num + Math.random();
                }
                return 0.5 + Math.random();
              } else return -1;
            }
            case 2: {
              return 0.3 + Math.random();
            }
          }
        });
        ('step 1');
        if (result.links?.length) {
          if (result.links[0] == 0) {
            player
              .chooseTarget(true, '选择一名角色', '选择原目标则取消之,选择非原目标则增加之', function (card, player, target) {
                var trigger = _status.event.getTrigger();
                if (trigger.targets.includes(target)) return true;
                if (get.type(trigger.card) == 'equip' || get.type(trigger.card) == 'delay') return trigger.targets.includes(target);
                return trigger.targets.includes(target) || (lib.filter.targetEnabled2(trigger.card, trigger.player, target) && lib.filter.targetInRange(trigger.card, trigger.player, target));
              })
              .set('ai', function (target) {
                var player = _status.event.player;
                var trigger = _status.event.getTrigger();
                return (trigger.targets.includes(target) ? -1 : 1) * get.effect(target, trigger.card, trigger.player, player);
              });
          } else {
            if (!player.storage.mengkuixi) {
              player.when({ global: 'phaseAfter' }).then(() => {
                player.unmarkSkill('mengkuixi');
              });
            }
            player.markAuto('mengkuixi', trigger.card);
            if (result.links[0] == 1) {
              game.log(trigger.card, '不能被响应');
              trigger.nowuxie = true;
              trigger.directHit.addArray(game.players);
            } else if (result.links[0] == 2) {
              game.log(trigger.card, '结算后将被', player, '用于<span class="firetext">操控</span>');
              trigger.card.storage.mengkuixi_add = true;
            }
            event.finish();
          }
        } else event.finish();
        ('step 2');
        if (result.targets?.length) {
          var target = result.targets[0];
          if (!player.storage.mengkuixi) {
            player.when({ global: 'phaseAfter' }).then(() => {
              player.unmarkSkill('mengkuixi');
            });
          }
          player.markAuto('mengkuixi', trigger.card);
          game.log(player, '将', target, trigger.targets.includes(target) ? '移出' : '加入', '了目标');
          trigger.targets[trigger.targets.includes(target) ? 'remove' : 'push'](target);
          if (trigger.targets == []) trigger.targets.length = 0;
        }
      },
      marktext: '傀',
      intro: {
        content: (storage) => `本回合已发动过${storage.length}次〖傀戏〗`,
      },
      group: 'mengkuixi_add',
      subSkill: {
        add: {
          trigger: {
            global: 'useCardAfter',
          },
          charlotte: true,
          forced: true,
          filter: (event, player) => player.hasSkill('mengzongou') && event.card.storage && event.card.storage.mengkuixi_add && event.card.suit != 'none',
          content() {
            'step 0';
            if (game.countPlayer((current) => current.isIn() && current != player) > 1) {
              player.chooseTarget('傀戏', `将${get.translation(trigger.card.suit)}分配给其他角色`, lib.filter.notMe, true).set('ai', (target) => {
                var trigger = _status.event.getTrigger();
                var eff = -get.attitude(player, target);
                if (target.hasSkill('mengzongou_mark') && target.storage.mengzongou_mark && target.storage.mengzongou_mark.includes(trigger.card.suit)) eff /= 2;
                return eff;
              });
            } else event._result = { bool: true, targets: game.filterPlayer((current) => current.isIn() && current != player) };
            ('step 1');
            if (result.targets?.length) {
              var target = result.targets[0];
              player.line(target, 'fire');
              game.log(target, '被', player, '<span class="firetext">操控</span>了');
              target.addSkill('mengzongou_mark');
              if (!target.storage.mengzongou_mark.includes(trigger.card.suit)) {
                target.markAuto('mengzongou_mark', [trigger.card.suit]);
              }
            }
          },
        },
      },
    },
    //真理
    mengsigu: {
      trigger: {
        global: 'addhyyzBuffAfter',
      },
      forced: true,
      usable: 1,
      check: (event, player) => get.attitude(player, event.player) < 0,
      content() {
        'step 0';
        game.playAudio('../extension/忽悠宇宙/audio/skill/xtbianbo' + [2, 3].randomGet());
        player.judge(function (card) {
          if (get.color(card) == 'red') {
            return 1;
          } else return 2;
        });
        ('step 1');
        if (result.color) {
          if (result.color == 'red') {
            player.draw();
          } else {
            trigger.player.damage(player);
          }
        }
      },
    },
    mengbeilun: {
      init() {
        lib.hyyzBuff.hyyzBuff_duanjian = '智者的短见';
      },
      trigger: {
        source: 'damageSource',
      },
      round: 1,
      logTarget: 'player',
      check: (event, player) => get.attitude(player, event.player) < 0,
      filter: () => true,
      content() {
        'step 0';
        game.playAudio('../extension/忽悠宇宙/audio/skill/xtbianbo' + [5, 6].randomGet());
        trigger.player.addhyyzBuff('hyyzBuff_duanjian');
        //trigger.player.addTempSkill('mengduanjian', 'roundStart');
      },
    },
    hyyzBuff_duanjian: {
      init(player) {
        player.when({ global: 'roundStart' }).then(() => {
          player.removeSkill('hyyzBuff_duanjian');
        });
      },
      type: 'debuff',
      mark: true,
      marktext: '智',
      name: '智者的短见',
      description: '无效果,每轮结束移除',
      intro: {
        name: '智者的短见',
        content: '无效果,每轮结束移除',
      },
      charlotte: true,
      ai: {
        threaten: 50,
      },
    },
    mengzhenli: {
      usable: 3,
      trigger: {
        global: 'damageAfter',
      },
      check: (event, player) => get.attitude(player, event.player) < 0,
      logTarget: 'player',
      filter(event, player) {
        return event.player.hashyyzBuff('hyyzBuff_duanjian') && event.source && event.source != player;
      },
      content() {
        game.playAudio('../extension/忽悠宇宙/audio/skill/xtbianbo' + [7, 8].randomGet());
        trigger.player.damage(player);
      },
    },
    //九条
    mengyayu: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      getyu() {
        return game.filterPlayer((current) => current.isAlive() && current.hasSkill('mengyu'))[0];
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
          .chooseTarget('鸦羽:请选择〖羽〗的目标(队友)', lib.translate.mengyu_info, true, function (card, player, target) {
            return target != player && !target.hasSkill('mengyu');
          })
          .set('ai', function (target) {
            var att = get.attitude(_status.event.player, target) * target.hp;
            if (att > 0) return att + 1;
            if (att == 0) return Math.random();
            return att;
          });
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          target.addSkill('mengyu');
        }
      },
      onremove: (player) => game.countPlayer2((current) => current.removeSkill('mengyu')),
      group: 'mengyayu_damage',
      subSkill: {
        damage: {
          audio: 'mengyayu',
          trigger: {
            source: 'damageSource',
          },
          forced: true,
          filter(event, player) {
            var target = lib.skill.mengyayu.getyu();
            if (!target) return false;
            return target.isIn() && target.storage.mengyu[get.translation(event.player)] != undefined;
          },
          content() {
            var target = lib.skill.mengyayu.getyu();
            game.asyncDraw([target, player]);
            target.storage.mengyu[get.translation(trigger.player)]++;
          },
        },
      },
      derivation: ['mengyu'],
    },
    mengyu: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      init: (player) => (player.storage.mengyu = {}),
      mark: true,
      intro: {
        content(storage, player) {
          var str = '选择的角色:';
          if (!Object.keys(storage).length) return '未选择角色';
          for (var i in storage) {
            str += `<li>${i}:${storage[i]}`;
          }
          return str;
        },
      },
      trigger: {
        global: 'phaseBegin',
      },
      onremove(player) {
        delete player.storage.mengyu;
        player.unmarkSkill('mengyu');
      },
      filter: () =>
        game.countPlayer() > 2 &&
        game.hasPlayer((current) => {
          return current.hasSkill('mengyayu') && current.isIn();
        }),
      charlotte: true,
      forced: true,
      content() {
        'step 0';
        if (trigger.player == player) {
          if (Object.keys(player.storage.mengyu).length && !Object.values(player.storage.mengyu).some((a) => a > 0) && game.hasPlayer((current) => current.hasSkill('mengyayu'))) {
            game.filterPlayer((current) => current.hasSkill('mengyayu'))[0].loseHp();
          }
          player.storage.mengyu = {};
          event.finish();
        } else
          player
            .chooseTarget('选择一名九条需要攻击的角色', true, function (card, player, target) {
              return target != player && !target.hasSkill('mengyayu');
            })
            .set('ai', (target) => {
              var value = -get.attitude(player, target);
              if (_status.event.player.storage[target] == undefined) value *= 2;
              return value;
            });
        ('step 1');
        if (result.bool) {
          var target = result.targets[0];
          player.storage.mengyu[get.translation(target)] = 0;
        }
      },
    },
    mengwuyan: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'damageBegin3',
      },
      forced: true,
      filter(event, player) {
        var target = lib.skill.mengyayu.getyu();
        return target && target == event.player && target.hp + target.hujia <= event.num;
      },
      content() {
        trigger.player = player;
      },
      mod: {
        inRange(from, to) {
          var target = lib.skill.mengyayu.getyu();
          if (!target || !from.hasSkill('mengyayu')) return;
          if (target != from && target != to && target.inRange(to)) return true;
        },
      },
    },
    mengchezheng: {
      audio: 'mengwuyan',
      mark: true,
      limited: true,
      enable: 'phaseUse',
      filterTarget: (card, player, target) => target != player && !target.hasSkill('mengyu'),
      content() {
        'step 0';
        player.awakenSkill('mengchezheng');
        player.storage.mengchezheng = true;
        player.loseMaxHp();
        ('step 1');
        game.hasPlayer((current) => {
          current.removeSkill('mengyu');
        });
        target.addSkill('mengyu');
      },
      ai: {
        expose: 0.3,
        order: 1,
        result: {
          target(player, target) {
            if (!game.hasPlayer((current) => current.hasSkill('mengyu') && current.hp > 2)) return 2 + target.hp;
          },
        },
      },
      intro: {
        content: 'limited',
      },
      init: (player, skill) => (player.storage[skill] = false),
    },
    //颦客
    mengyingzhu: {
      init(player) {
        player.storage.mengyingzhu = new Map();
      },
      marktext: '荧',
      intro: {
        content(storage, player) {
          var str = '<先辅>的角色:';
          storage.forEach((value, key, map) => {
            if (key.isIn()) str += `<li>${get.translation(key)}:${value}`;
          });
          return str;
        },
      },
      trigger: {
        global: 'roundStart',
        player: 'damageEnd',
      },
      forced: true,
      content() {
        'step 0';
        if (trigger.name == 'damage') {
          if (game.countPlayer((current) => player.getStorage('mengyingzhu').has(current)) > 1) {
            player
              .chooseTarget(true, '与一名<偶>依次遗计X', 'X为你先辅其的次数', function (card, player, target) {
                return player.getStorage('mengyingzhu').has(target);
              })
              .set('ai', (target) => {
                return player.getStorage('mengyingzhu').get(target);
              });
          } else
            event._result = {
              bool: true,
              targets: game.filterPlayer((current) => player.getStorage('mengyingzhu').has(current)),
            };
        } else {
          player
            .chooseTarget(true, '<先辅>一名其他角色', lib.translate.xianfu_info, function (card, player, target) {
              return target != player;
            })
            .set('ai', function (target) {
              let att = get.attitude(_status.event.player, target);
              if (att > 0) return att + 1;
              if (att == 0) return Math.random();
              return att;
            }).animate = false;
        }
        ('step 1');
        if (result.bool) {
          let target = result.targets[0];
          let map = player.getStorage('mengyingzhu');
          if (trigger.name == 'damage') {
            let a = ['为国除弊,怎惜残年!', '接天连夜无穷碧,映日荷花别样红!'].randomGet();
            player.say(a);
            if (a == '为国除弊,怎惜残年!') {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengyingzhu3.mp3');
            } else {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengyingzhu4.mp3');
            }
            event.count = Math.min(map.get(target), 3);
            event.players = [player, target];
          } else {
            let a = ['玄甲耀目,朱旗绛天!', '干云气惊八万里,一键光寒十九州!'].randomGet();
            player.say(a);
            if (a == '玄甲耀目,朱旗绛天!') {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengyingzhu1.mp3');
            } else {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengyingzhu2.mp3');
            }
            player.storage.mengyingzhu.set(target, map.has(target) ? map.get(target) + 1 : 1);
            player.markSkill('mengyingzhu');
            target.addSkill('mengyingzhu_log');
            event.finish();
          }
        }
        ('step 2');
        event.owner = event.players.shift();
        event.owner.draw(event.count);
        if (_status.connectMode)
          game.broadcastAll(function () {
            _status.noclearcountdown = true;
          });
        event.num = event.count;
        event.given_map = {};
        ('step 3');
        event.owner.chooseCardTarget({
          filterCard(card) {
            return get.itemtype(card) == 'card' && !card.hasGaintag('reyiji_tag');
          },
          filterTarget: lib.filter.notMe,
          selectCard: [1, event.num],
          prompt: '请选择要分配的卡牌和目标',
          ai1(card) {
            if (!ui.selected.cards.length) return 1;
            return 0;
          },
          ai2(target) {
            var player = _status.event.player,
              card = ui.selected.cards[0];
            var val = target.getUseValue(card);
            if (val > 0) return val * get.attitude(player, target) * 2;
            return get.value(card) * get.attitude(player, target);
          },
        });
        ('step 4');
        if (result.bool) {
          var res = result.cards,
            target = result.targets[0].playerid;
          if (player.getStorage('mengyingzhu').has(event.owner) && result.targets[0] == player) {
            let a = ['姐妹们,爱国真的有用!', '耶!被阿中哥哥表扬了!'].randomGet();
            player.say(a);
            if (a == '姐妹们,爱国真的有用!') {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengyingzhu5.mp3');
            } else {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengyingzhu6.mp3');
            }
          }
          event.owner.addGaintag(res, 'reyiji_tag');
          event.num -= res.length;
          if (!event.given_map[target]) event.given_map[target] = [];
          event.given_map[target].addArray(res);
          if (event.num > 0) event.goto(3);
        } else if (event.num == event.count) {
          if (_status.connectMode) {
            game.broadcastAll(function () {
              delete _status.noclearcountdown;
              game.stopCountChoose();
            });
          }
          event.goto(6);
        }
        ('step 5');
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
          event.owner.line(source, 'green');
          map.push([source, event.given_map[i]]);
          cards.addArray(event.given_map[i]);
        }
        game.loseAsync({
          gain_list: map,
          player: event.owner,
          cards: cards,
          giver: event.owner,
          animate: 'giveAuto',
        }).setContent('gaincardMultiple');
        ('step 6');
        if (event.players.length && player.hasSkill('mengyingzhu')) {
          event.goto(2);
        }
      },
      group: ['mengyingzhu_xianfu', 'mengyingzhu_log', 'mengyingzhu_die'],
      subSkill: {
        xianfu: {
          charlotte: true,
          trigger: {
            global: ['damageEnd', 'recoverEnd'],
          },
          forced: true,
          filter(event, player) {
            if (event.player.isDead() || !player.getStorage('mengyingzhu').size || !player.getStorage('mengyingzhu').has(event.player) || event.num <= 0) return false;
            if (event.name == 'damage') return true;
            return player.isDamaged();
          },
          logTarget: 'player',
          content() {
            player[trigger.name](trigger.num, 'nosource');
          },
        },
        log: {
          mark: true,
          marktext: '偶',
          intro: {
            markcount(storage, player) {
              let target = game.filterPlayer((current) => current != player && current.hasSkill('mengyingzhu') && current.getStorage('mengyingzhu').size > 0)[0];
              if (!target) return;
              let map = target.getStorage('mengyingzhu');
              return '' + map.get(player);
            },
            content(storage, player) {
              let target = game.filterPlayer((current) => current != player && current.hasSkill('mengyingzhu') && current.getStorage('mengyingzhu').size > 0)[0];
              if (!target) return '好像有人不在了</br>但你毫不在意';
              let map = target.getStorage('mengyingzhu');
              return `颦客对你的狂热:${map.get(player)}`;
            },
          },
        },
        die: {
          trigger: {
            player: ['changeHp', 'damageEnd', 'loseMaxHpEnd'],
          },
          silent: true,
          charlotte: true,
          superCharlotte: true,
          forced: true,
          forceDie: true,
          _priority: Infinity,
          popup: false,
          filter: (event, player) => player.isDamaged(),
          content() {
            if (player.hp > 0) player.loseMaxHp(player.getDamagedHp())._triggered = null;
            else {
              if (trigger.parent && trigger.parent.source) player.die().source = trigger.parent.source;
              else {
                player.say('江山娇矣…红旗漫乎…'); //江山娇也!红旗漫也!
                player.die();
              }
            }
          },
          mod: {
            cardSavable(card, player) {
              if (player.name != 'meng_pink') return;
              if (player.isDying() && ['tao', 'jiu'].includes(card.name)) return false;
            },
            cardEnabled(card, player) {
              if (player.name != 'meng_pink') return;
              if (player.isDying() && ['tao', 'jiu'].includes(card.name)) return false;
            },
          },
        },
      },
      ai: {
        threaten(player, target) {
          return 1.5;
        },
      },
      derivation: ['xianfu', 'new_reyiji'],
    },
    mengqiongpi: {
      dutySkill: true,
      trigger: {
        global: ['gainAfter', 'loseAsyncAfter', 'damageAfter'],
      },
      forced: true,
      filter(event, player) {
        if (event.name == 'damage') {
          //一名角色对其他角色造成伤害后
          if (!event.source || !event.player.isIn() || !event.player.countCards('he')) return false;
          if (event.player == event.source) return false;
          //若该角色为你/偶,且受伤角色不为偶/你
          return (player.getStorage('mengyingzhu').has(event.source) && event.player != player) || (event.source == player && !player.getStorage('mengyingzhu').has(event.player));
        } else if (event.name == 'gain') {
          //一名角色获得其他角色的牌后
          let cards = event.getg(event.player);
          if (!cards.length) return false;
          if (event.player == player) {
            //game.log('pink获得牌');
            //你获得,失去的人非偶
            return game.hasPlayer((current) => {
              if (current == player || !current.countCards('he') || !current.isIn()) return false; //
              //game.log('1是pink,且有牌');
              if (player.getStorage('mengyingzhu').has(current)) return false;
              //game.log('1',current,'不是偶');
              let hs = event.getl(current).cards;
              for (var i of hs) {
                if (cards.includes(i)) return true;
              }
            });
          } else if (player.getStorage('mengyingzhu').has(event.player)) {
            //game.log('偶获得牌');
            //偶获得牌,失去人非你+非此偶
            return game.hasPlayer((current) => {
              if (current == event.player || !current.countCards('he') || !current.isIn()) return false; //
              if (current == player) return false;
              //game.log('通过2');
              let hs = event.getl(current).cards;
              for (var i of hs) {
                if (cards.includes(i)) return true;
              }
            });
          }
          return false;
        } else if (event.type == 'gain') {
          //不能你分配
          if (event.giver || event.player != player || !event.player.countCards('he') || !event.player.isIn()) return false;
          let hs = event.getl(event.player).cards;
          //偶分配牌,其他偶获得
          if (player.getStorage('mengyingzhu').has(event.player)) {
            //game.log('偶分配牌');
            return game.hasPlayer((current) => {
              if (current == event.player) return false; //
              if (!player.getStorage('mengyingzhu').has(current)) return false;
              //game.log('通过3');
              let cards = event.getg(current);
              for (var i of cards) {
                if (hs.includes(i)) return true;
              }
            });
          } else {
            //普通人分配牌,你或偶获得
            //game.log('普通人分配牌');
            return game.hasPlayer((current) => {
              if (current == event.player) return false;
              if (current == player || player.getStorage('mengyingzhu').has(current)) {
                //game.log('通过4');
                let cards = event.getg(current);
                for (var i of cards) {
                  if (hs.includes(i)) return true;
                }
              }
            });
          }
        }
        return false;
      },
      content() {
        'step 0';
        let target;
        if (trigger.name == 'damage') {
          target = trigger.player; //拿受伤角色的牌
          if (player.getStorage('mengyingzhu').has(trigger.source)) {
            let a = ['摅高文之宿愤,光祖宗之玄灵!', '拓后嗣之境宇,振华夏之天声!'].randomGet();
            player.say(a);
            if (a == '摅高文之宿愤,光祖宗之玄灵!') {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengqiongpi3.mp3');
            } else {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengqiongpi4.mp3');
            }
          } else if (trigger.source == player) {
            let a = ['不服国命,纵兵凶战危,也应以血相偿!', '花墙霸屏金鼓震,饭圈起兮万人随!'].randomGet();
            player.say(a);
            if (a == '不服国命,纵兵凶战危,也应以血相偿!') {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengqiongpi7.mp3');
            } else {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengqiongpi8.mp3');
            }
          }
        } else if (trigger.name == 'gain') {
          var cards = trigger.getg(trigger.player);
          if (trigger.player == player) {
            let a = ['饭圈出征,寸草不生!', '守护我们最好的阿中哥哥!'].randomGet();
            player.say(a);
            if (a == '饭圈出征,寸草不生!') {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengqiongpi5.mp3');
            } else {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengqiongpi6.mp3');
            }
            target = game.filterPlayer((current) => {
              if (current == trigger.player) return false; //失去牌的人是获得的牌的人
              if (player.getStorage('mengyingzhu').has(current) || !current.countCards('he') || current == player) return false;
              let hs = trigger.getl(current).cards;
              for (var i of hs) {
                if (cards.includes(i)) return true;
              }
              return false;
            })[0];
          } else {
            if (player.getStorage('mengyingzhu').has(trigger.player)) {
              let a = ['蠢尔蛮荆,大邦为仇!', '威动四极,武义直方!'].randomGet();
              player.say(a);
              if (a == '蠢尔蛮荆,大邦为仇!') {
                game.playAudio('../extension/忽悠宇宙/audio/skill/mengqiongpi1.mp3');
              } else {
                game.playAudio('../extension/忽悠宇宙/audio/skill/mengqiongpi2.mp3');
              }
            }
            target = game.filterPlayer((current) => {
              if (current != trigger.player || !current.countCards('he') || current == player || !current.isIn()) return false;
              let hs = trigger.getl(current).cards;
              for (var i of hs) {
                if (cards.includes(i)) return true;
              }
              return false;
            })[0];
          }
          target = game.filterPlayer((current) => {
            if (current == trigger.player || !current.countCards('he')) return false;
            var hs = trigger.getl(current).cards;
            for (var i of hs) {
              if (cards.includes(i)) return true;
            }
          })[0];
        } else {
          //拿分配牌的牌
          target = trigger.player;
        }
        if (!target) return;
        player.choosePlayerCard(target, 'he', true, `将${get.translation(target)}的一张牌置为<逆>`);
        event.target = target;
        ('step 1');
        if (result.bool) {
          player.addToExpansion(result.cards, event.target, 'give').gaintag.add('mengqiongpi');
        }
      },
      intro: {
        content: 'expansion',
        markcount: 'expansion',
      },
      onremove(player) {
        var cards = player.getExpansions('mengqiongpi');
        if (cards.length) player.loseToDiscardpile(cards);
      },
      global: 'mengqiongpi_ni',
      group: ['mengqiongpi_fail'],
      subSkill: {
        fail: {
          trigger: {
            target: 'useCardToTargeted',
          },
          forced: true,
          filter(event, player) {
            return player.getStorage('mengyingzhu').get(event.player) && (get.itemtype(event.cards) != 'cards' || !event.cards || !event.cards.length);
          },
          content() {
            'step 0';
            game.log(player, '使命失败');
            player.awakenSkill('mengqiongpi');
            ('step 1');
            let a = ['主公,臣妾无异心呐!', '铁拳怎么砸到我身上了？'].randomGet();
            player.say(a);
            if (a == '主公,臣妾无异心呐!') {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengqiongpi11.mp3');
            } else {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengqiongpi12.mp3');
            }
            player.give(player.getCards('he'), trigger.player);
            player.give(player.getExpansions('mengqiongpi'), trigger.player);
          },
        },
        ni: {
          name: '陷肆(茕辟)',
          enable: 'chooseToUse',
          viewAs: {
            name: 'sha',
          },
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return current.hasSkill('mengqiongpi') && current.getExpansions('mengqiongpi').length > 1 && event.filterTarget({ name: 'sha' }, player, current);
            });
          },
          filterTarget(card, player, target) {
            var bool = false;
            var players = ui.selected.targets.slice(0);
            for (var i of players) {
              if (i.hasSkill('mengqiongpi') && i.getExpansions('mengqiongpi').length > 1) bool = true;
              break;
            }
            if (!bool && (!target.hasSkill('mengqiongpi') || target.getExpansions('mengqiongpi').length <= 1)) return false;
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
            var targets = event.result.targets.filter(function (current) {
              return current.getExpansions('mengqiongpi').length > 1 && current.hasSkill('mengqiongpi');
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
              if (event.target.getExpansions('mengqiongpi').length == 2) {
                event.directresult = event.target.getExpansions('mengqiongpi').slice(0);
              } else {
                player.chooseCardButton('移去两张<逆>', 2, event.target.getExpansions('mengqiongpi'), true);
              }
            } else {
              event.finish();
            }
            ('step 3');
            if (event.directresult || result.bool) {
              var links = event.directresult || result.links;
              target.loseToDiscardpile(links);
              let a = ['不惧千夫指,但求无愧心!', '你们越是指责我,那就越说明我做对了!'].randomGet();
              target.say(a);
              if (a == '不惧千夫指,但求无愧心!') {
                game.playAudio('../extension/忽悠宇宙/audio/skill/mengqiongpi9.mp3');
              } else {
                game.playAudio('../extension/忽悠宇宙/audio/skill/mengqiongpi10.mp3');
              }
            }
          },
          ai: {
            order: 10,
            effect: {
              player(card, player, target, current) {
                if (card.name != 'sha') return;
                if (!target.hasSkill('mengqiongpi') || target.getExpansions('mengqiongpi').length < 2) return;
                if (target.hasSkill('mengyingzhu') && target.getStorage('mengyingzhu').has(player)) {
                  if (_status.event.skill == 'mengqiongpi_ni') {
                    if (target.hp < 3) return [0, target.getExpansions('mengqiongpi').length - player.hp];
                    if (!player.countCards('h')) return [1, 0, 0, target.getExpansions('mengqiongpi').length - 4];
                  }
                }
              },
            },
          },
        },
      },
      ai: {
        threaten: 3,
      },
      derivation: 'xiansi',
    },
    //黑天鹅
    mengshuijing: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      init(player) {
        if (player.storage.mengshuijing) delete player.storage.mengshuijing;
        player.storage.mengshuijing_num = 1;
        player.storage.mengshuijing_history = new Map();
      },
      mark: true,
      intro: {
        content(storage, player) {
          if (storage && player.storage.mengshuijing_history && player.getStorage('mengshuijing_history').has(storage)) {
            if (player == game.me || player.isUnderControl()) {
              let str = `占卜<span class='bluetext'>${get.translation(storage)}</sapn>`;
              const list = player.getStorage('mengshuijing_history').get(storage);
              str += `<li><span class='${list[0] >= player.storage.mengshuijing_num ? 'green' : 'fire'}text'>造成${list[0]}/${player.storage.mengshuijing_num}点伤害</sapn>`;
              str += `<li><span class='${list[1] >= player.storage.mengshuijing_num ? 'green' : 'fire'}text'>弃置${list[1]}/${player.storage.mengshuijing_num}张牌</sapn>`;
              return str;
              str = ``;
              player.getStorage('mengshuijing_history').forEach((list, target) => {
                str += `<li><span class='bluetext'>${get.translation(target)}</sapn>`;
                str += `<li><span class='${list[0] >= player.storage.mengshuijing_num ? 'green' : 'fire'}text'>造成${list[0]}/${player.storage.mengshuijing_num}点伤害</sapn>`;
                str += `<li><span class='${list[1] >= player.storage.mengshuijing_num ? 'green' : 'fire'}text'>弃置${list[1]}/${player.storage.mengshuijing_num}张牌</sapn>`;
              });
              return str;
            }
            return '天机不可泄露';
          } else return '无记录';
        },
      },
      enable: 'phaseUse',
      usable: 1,
      async content(event, trigger, player) {
        const { targets } = await player
          .chooseTarget(true, '水镜:猜测一名角色的行为,猜中其损伤,否则你损伤', lib.translate.mengshuijing_info)
          .set('ai', function (target) {
            const player = _status.event.player;
            let att = get.attitude(player, target);
            if (target.hasJudge('lebu')) att /= 5;
            if (player.storage.mengshuijing_history && player.getStorage('mengshuijing_history').has(target)) {
              const list = player.getStorage('mengshuijing_history').get(target);
              if (list[0] > player.storage.mengshuijing_num) att *= 1.5;
              if (list[1] > player.storage.mengshuijing_num) att *= 1.5;
            }
            return -att;
          })
          .set('animate', false)
          .forResult();
        if (targets) {
          player.storage.mengshuijing = targets[0];
        } else {
          delete player.getStat().skill.mengshuijing;
        }
      },
      ai: {
        order: 1,
        result: {
          player: 2,
        },
      },
      group: ['mengshuijing_history', 'mengshuijing_end'],
      subSkill: {
        end: {
          audio: 'ext:忽悠宇宙/audio/skill:1',
          trigger: {
            global: 'phaseEnd',
          },
          forced: true,
          filter(event, player) {
            return player.getStorage('mengshuijing') == event.player;
          },
          content() {
            const list = player.getStorage('mengshuijing_history').get(trigger.player);
            const count = player.storage.mengshuijing_num;
            let str = `<span class='greentext'>【水镜】</span>`;
            if (list[0] >= count) {
              str += `<li>${get.translation(trigger.player)}造成过<span class='greentext'>${list[0]}</span>/${count}点伤害`;
              if (count > 0) trigger.player.damage(trigger.player, count);
            } else {
              str += `<li>${get.translation(trigger.player)}造成过<span class='firetext'>${list[0]}</span>/${count}点伤害`;
              if (count > 0) player.damage(player, count);
            }
            if (list[1] >= count) {
              str += `<li>${get.translation(trigger.player)}弃置过<span class='greentext'>${list[1]}</span>/${count}张牌`;
              if (count > 0) trigger.player.chooseToDiscard('水镜:黑天鹅预测成功,请弃牌', 'he', count, true);
            } else {
              str += `<li>${get.translation(trigger.player)}弃置过<span class='firetext'>${list[1]}</span>/${count}张牌`;
              if (count > 0) player.chooseToDiscard('水镜:你预测失败,请弃牌', 'he', count, true);
            }
            game.log(str);
            delete player.storage.mengshuijing;
          },
        },
      },
    },
    mengshuijing_history: {
      trigger: {
        global: ['roundStart', 'damageEnd', 'loseAfter'],
      },
      forced: true,
      charlotte: true,
      filter(event, player) {
        switch (event.name) {
          case 'phase':
            return true;
          case 'damage':
            return event.source && event.source.isAlive() && event.num > 0;
          default: {
            if (event.type != 'discard') return false;
            //if ((event.discarder || event.getParent(2).player) == event.player || !event.parent.notBySelf) return false;
            if (!event.getl(event.player).cards2.length) return false;
            return true;
          }
        }
      },
      content() {
        let value;
        switch (trigger.name) {
          case 'phase': {
            player.storage.mengshuijing_history = new Map();
            game.countPlayer((current) => {
              player.storage.mengshuijing_history.set(current, [0, 0]);
            });
            break;
          }
          case 'damage': {
            if (player.getStorage('mengshuijing_history').has(trigger.source)) {
              let list = player.getStorage('mengshuijing_history').get(trigger.source);
              value = [(list[0] += 1), list[1]];
            } else {
              value = [1, 0];
            }
            player.storage.mengshuijing_history.set(trigger.source, value);
            break;
          }
          default: {
            const count = trigger.getl(trigger.player).cards2.length;
            if (player.getStorage('mengshuijing_history').has(trigger.discarder || trigger.getParent(2).player)) {
              let list = player.storage.mengshuijing_history.get(trigger.discarder || trigger.getParent(2).player);
              value = [list[0], (list[1] += count)];
            } else {
              value = [0, count];
            }
            player.storage.mengshuijing_history.set(trigger.discarder || trigger.getParent(2).player, value);
            break;
          }
        }
      },
    },
    mengliuguang: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      init: (player, skill) => (player.storage[skill] = 1),
      trigger: {
        global: 'loseAfter',
      },
      filter(event, player) {
        if (event.type != 'discard') return false;
        for (var i of event.cards2) {
          if (get.position(i, true) == 'd') return player.hasSkill('mengshuijing');
        }
        return false;
      },
      forced: true,
      usable: 1,
      async content(event, trigger, player) {
        let list = ['下回合〖水镜〗的数字+1', '下回合〖水镜〗的数字-1'];
        const cards = trigger.cards2.filter((card) => get.position(card, true) == 'd');
        let num = Math.min(player.storage.mengshuijing_num, cards.length);
        if (num > 0) list.push(`获得这些牌中的${num}张`);
        const { index } = await player
          .chooseControlList(list)
          .set('prompt', '流光:选择一项')
          .set('ai', () => list.length - 1)
          .forResult();
        if (index != undefined) {
          switch (index) {
            case 0: {
              player
                .when({
                  global: 'phaseBegin',
                })
                .then(() => {
                  player.addTempSkill('mengliuguang_add');
                });
              break;
            }
            case 1: {
              player
                .when({
                  global: 'phaseBegin',
                })
                .then(() => {
                  player.addTempSkill('mengliuguang_remove');
                });
              break;
            }
            case 2: {
              const { links } = await player
                .chooseButton(num, [`流光:获得其中${num}张`, cards], (button) => {
                  return _status.event.player.getUseValue(button.link) || get.value(button.link);
                })
                .forResult();
              if (links) player.gain(links, 'gain2');
              break;
            }
            default:
              return;
          }
        }
      },
      subSkill: {
        add: {
          init: (player) => (player.storage.mengshuijing_num = 2),
          mark: true,
          intro: {
            markcount(storage, player) {
              return '2';
            },
            content: '水镜的数字+1',
          },
          onremove: (player) => (player.storage.mengshuijing_num = 1),
        },
        remove: {
          init: (player) => (player.storage.mengshuijing_num = 0),
          mark: true,
          intro: {
            markcount(storage, player) {
              return '0';
            },
            content: '水镜的数字-1',
          },
          onremove: (player) => (player.storage.mengshuijing_num = 1),
        },
      },
    },
    mengzhenzhao: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'damageEnd',
      },
      filter: (event, player) => event.num && player.hasSkill('mengshuijing'),
      async content(event, trigger, player) {
        event.count = Math.min(trigger.num, 9);
        while (true) {
          event.count--;
          const { targets: targets1 } = await player
            .chooseTarget(`令一名角色弃置${player.storage.mengshuijing_num}张牌`)
            .set('ai', function (target) {
              const player = _status.event.player;
              let val = get.attitude(player, target);
              if (player.storage.mengshuijing == target) val *= 10;
              return -val;
            })
            .forResult();
          if (targets1) {
            targets1[0].chooseToDiscard(player.storage.mengshuijing_num, true, 'he');
            const { targets: targets2 } = await player
              .chooseTarget(lib.filter.notMe)
              .set('prompt', `是否令${get.translation(targets1[0])}视为对一名角色造成${player.storage.mengshuijing_num}点伤害？`)
              .set('ai', (target) => player.storage.mengshuijing_num * get.damageEffect(target, targets1[0], player))
              .forResult();
            if (targets2) {
              targets2[0].damage(targets1[0], player.storage.mengshuijing_num, 'unreal');
            } else return;
          } else return;
          if (event.count > 0 && player.hasSkill(event.name) && !get.is.blocked(event.name, player)) {
            const { bool } = await player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name).forResult();
            if (!bool) return;
          } else return;
        }
      },
    },
    //镜流
    mengzuanyue: {
      audio: 'xtzhuanpo',
      enable: ['chooseToUse', 'chooseToRespond'],
      filter(event, player) {
        if (!player.countCards('hes') || player.countCards('he', { color: 'red' }) == player.countCards('he', { color: 'black' })) return false;
        let color = player.countCards('he', { color: 'red' }) > player.countCards('he', { color: 'black' }) ? 'red' : 'black';
        for (var i of lib.inpile) {
          if (player.getStorage('mengzuanyue').includes(i)) continue;
          var info = lib.card[i];
          if (!info || info.notarget || (info.selectTarget && info.selectTarget != 1)) continue;
          if (color == 'black' && get.tag({ name: i }, 'damage')) continue;
          if (color == 'red' && !get.tag({ name: i }, 'damage')) continue;
          var type = get.type2(i);
          if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
        }
        return false;
      },
      chooseButton: {
        dialog(event, player) {
          let list = [];
          let color = player.countCards('he', { color: 'red' }) > player.countCards('he', { color: 'black' }) ? 'red' : 'black';
          for (let name of lib.inpile) {
            if (player.getStorage('mengzuanyue').includes(name)) continue;
            var info = lib.card[name];
            if (!info || info.notarget || (info.selectTarget && info.selectTarget != 1)) continue;
            if (color == 'black' && get.tag({ name: name }, 'damage')) continue;
            if (color == 'red' && !get.tag({ name: name }, 'damage')) continue;
            if (name == 'sha') {
              list.push(['基本', '', 'sha']);
              for (let nature of lib.inpile_nature) list.push(['基本', '', name, nature]);
            } else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
            else if (get.type(name) == 'basic') list.push(['基本', '', name]);
          }
          return ui.create.dialog('攥月', [list, 'vcard']);
        },
        filter(button, player) {
          return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
        },
        check(button) {
          if (_status.event.parent.type != 'phase') return 1;
          var player = _status.event.player;
          if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
          return player.getUseValue({
            name: button.link[2],
            nature: button.link[3],
          });
        },
        backup(links, player) {
          const color = player.countCards('he', { color: 'red' }) > player.countCards('he', { color: 'black' }) ? 'red' : 'black';
          const numx = Math.abs(player.countCards('he', { color: 'red' }) - player.countCards('he', { color: 'black' }));
          return {
            filterCard: (card) => get.color(card) == color,
            selectCard: numx,
            audio: 'xtzhuanpo',
            popname: true,
            check(card) {
              return 8 - get.value(card);
            },
            position: 'hes',
            viewAs: {
              name: links[0][2],
              nature: links[0][3],
            },
            onuse(result, player) {
              player.markAuto('mengzuanyue', [result.card.name]);
              player
                .when({
                  global: 'roundStart',
                })
                .then(() => {
                  player.storage.mengzuanyue = [];
                  player.unmarkSkill('mengzuanyue');
                });
            },
          };
        },
        prompt(links, player) {
          return '将' + Math.abs(player.countCards('he', { color: 'red' }) - player.countCards('he', { color: 'black' })) + '张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
        },
      },
      hiddenCard(player, name) {
        if (!lib.inpile.includes(name)) return false;
        var type = get.type(name);
        return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0 && player.countCards('he', { color: 'red' }) != player.countCards('he', { color: 'black' });
      },
      ai: {
        fireAttack: true,
        respondSha: true,
        respondShan: true,
        skillTagFilter(player) {
          if (!player.countCards('hes')) return false;
        },
        order: 5,
        result: {
          player(player) {
            if (_status.event.dying) return get.attitude(player, _status.event.dying);
            return 1;
          },
        },
      },
    },
    mengshishui: {
      trigger: {
        global: 'loseEnd',
      },
      mark: true,
      zhuanhuanji: true,
      marktext: '☯',
      intro: {
        content(storage, player, skill) {
          var str = `转换技,锁定技,当一张装备牌非依此法进入弃牌堆后,若你场上有与此牌颜色相同的牌,${player.storage.mengshishui ? '你失去1点体力并将这些牌当做一张无法被响应的冰【杀】使用' : '你弃置这些牌并获得等量的其他角色各一张牌'}`;
          return str;
        },
      },
      filter(event, player) {
        if (event.getParent(2).name == 'mengshishui') return false;
        if (event.getParent(2).name == 'chooseUseTarget' && event.getParent(3).name == 'mengshishui') return false;
        if (event.parent.name == 'useCard' && event.getParent(3).name != 'mengshishui') return false;
        for (var i of event.cards) {
          if (get.type(i) == 'equip' && get.position(i) == 'd' && player.countCards('ej', { color: get.color(i) }) > 0) {
            return true;
          }
        }
        return false;
      },
      forced: true,
      async content(event, trigger, player) {
        const color = get.color(trigger.cards.filter((card) => get.type(card) == 'equip' && get.position(card) == 'd' && player.countCards('ej', { color: get.color(card) }) > 0)[0]);
        const cards = player.getCards('ej', { color: color });
        if (player.storage.mengshishui) {
          player.changeZhuanhuanji('mengshishui');
          player.loseHp();
          player.chooseUseTarget({ name: 'sha', nature: 'ice' }, cards, true, false);
          game.playAudio('../extension/忽悠宇宙/audio/skill/xtfeiguang' + [1, 2, 3, 4].randomGet());
        } else {
          player.changeZhuanhuanji('mengshishui');
          game.playAudio('../extension/忽悠宇宙/audio/skill/xtfeiguang' + [5, 6, 7, 8].randomGet());
          player.discard(cards);
          const { targets } = await player
            .chooseTarget(
              '获得其他角色的牌',
              Math.max(
                1,
                Math.min(
                  game.countPlayer((q) => q != player && q.countCards('he')),
                  cards.length
                )
              ),
              true
            )
            .set('ai', (target) => -get.attitude(player, target))
            .forResult(); //QQQ
          if (targets) {
            player.gainMultiple(targets, 'he');
          }
        }
      },
    },
    //桑博
    mengdahun: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        player: 'damageBegin4',
      },
      prompt: '打诨:防止此伤害,其再次对你使用牌将有损害',
      filter(event, player) {
        return event.source && event.num;
      },
      content() {
        player.addTempSkill('mengdahun_buff');
        player.addTempSkill('mengdahun_draw');
        player.storage.mengdahun = [trigger.source, trigger.num];
        trigger.cancel();
      },
      usable: 1,
    },
    mengdahun_buff: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      forced: true,
      charlotte: true,
      trigger: {
        target: 'useCardToTargeted',
      },
      filter(event, player) {
        if (!player.storage.mengdahun || !player.storage.mengdahun[0]) return false;
        return event.player == player.storage.mengdahun[0];
      },
      content() {
        player.removeSkill('mengdahun_draw');
        player
          .when({
            global: 'phaseBegin',
          })
          .vars({
            list: player.storage.mengdahun,
          })
          .then(() => {
            player.damage(list[1], 'nosource');
            if (list[0].isIn()) list[0].addhyyzBuff('hyyzBuff_fenghua', 1);
          });
      },
      onremove(player) {
        delete player.storage.mengdahun;
      },
    },
    mengdahun_draw: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        global: 'phaseEnd',
      },
      forced: true,
      charlotte: true,
      filter(event, player) {
        return player.storage.mengdahun && player.storage.mengdahun[0] && player.storage.mengdahun[0].isIn();
      },
      content() {
        player.storage.mengdahun[0].draw(player.storage.mengdahun[1]);
      },
    },
    mengzishu: {
      audio: ['mengdahun', 'mengdahun_buff', 'mengdahun_draw'],
      trigger: {
        global: 'gainAfter',
      },
      filter(event, player) {
        return game.countPlayer((current) => current.hp < player.hp) > 0 && player.inRange(event.player);
      },
      usable: game.countPlayer((current) => current.hp < _status.event.player.hp),
      content() {
        'step 0';
        player.draw();
        ('step 1');
        if (player.countCards('he') > 0 && (player.countCards('h') > trigger.player.countCards('h') || player.countCards('e') > trigger.player.countCards('e') || player.hp > trigger.player.hp)) player.chooseCard(true, 'he', '将一张牌交给' + get.translation(trigger.player));
        ('step 2');
        if (result.bool) {
          player.give(result.cards, trigger.player);
        }
      },
    },
    //史瓦罗
    mengshouhu: {
      audio: 'mengweijia',
      trigger: {
        global: 'damageBegin4',
      },
      filter(event, player) {
        return event.player != player && event.num > 1;
      },
      check: (event, player) => get.attitude(player, event.player) >= 4,
      preHidden: true,
      content() {
        trigger.player = player;
        trigger.mengshouhu = true;
      },
      group: ['mengshouhu_dam', 'mengshouhu_hujia'],
      subSkill: {
        dam: {
          trigger: {
            player: 'damageEnd',
          },
          filter(event, player) {
            return event.source != undefined && event.num > 0 && event.mengshouhu == true;
          },
          forced: true,
          logTarget: 'source',
          async content(event, trigger, player) {
            let num = trigger.num;
            while (num > 0) {
              num--;
              game.log(player, '对', trigger.source, '发动了', '#g【刚烈】');
              const { color } = await player
                .judge(function (card) {
                  if (get.color(card) == 'red') return 1;
                  return 0;
                })
                .forResult();
              if (color == 'black') {
                if (trigger.source.countCards('he')) {
                  player.discardPlayerCard(trigger.source, 'he', true);
                }
              } else if (trigger.source.isIn()) {
                trigger.source.damage();
              }
            }
          },
        },
        hujia: {
          trigger: {
            player: 'phaseZhunbeiBegin',
          },
          filter(event, player) {
            return player.isDamaged() && game.countPlayer((current) => !current.hujia);
          },
          forced: true,
          async content(event, trigger, player) {
            const { targets } = await player
              .chooseTarget(`守护:令至多${player.getDamagedHp()}名没有护甲的角色获得1点护甲`, [1, player.getDamagedHp()], (card, player, target) => {
                return !target.hujia;
              })
              .set('ai', (target) => get.attitude(player, target))
              .forResult();
            if (targets) {
              game.playAudio('../extension/忽悠宇宙/audio/skill/mengruyue' + [1, 2, 4].randomGet());
              targets.forEach((k) => {
                k.changeHujia(1);
              });
            }
          },
        },
      },
    },
    mengbushu: {
      trigger: {
        player: 'phaseJieshuBegin',
      },
      filter(event, player) {
        let suits = [];
        player.getHistory('useCard', (evt) => {
          if (evt.card && evt.card.suit && evt.card.suit != 'none') {
            suits.add(evt.card.suit);
          }
        });
        return suits.length >= player.hp;
      },
      forced: true,
      async content(event, trigger, player) {
        const { targets } = await player
          .chooseTarget([1, 2], get.prompt2('mengbushu'))
          .set('ai', (target) => get.attitude(player, target))
          .forResult();
        if (targets) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengruyue' + [1, 2, 4].randomGet());
          for (var i of targets) {
            const { control } = await i.chooseControl('火杀', '万箭齐发', '调虎离山').set('prompt', '获得一张...').forResult();
            if (control) {
              switch (control) {
                case '火杀':
                  i.gain(game.createCard({ name: 'sha', nature: 'dire' }), 'gain2');
                  break;
                case '万箭齐发':
                  i.gain(game.createCard('wanjian'), 'gain2');
                  break;
                case '调虎离山':
                  i.gain(game.createCard('diaohulishan'), 'gain2');
                  break;
              }
            }
          }
        }
      },
    },
    //雷电真
    mengjiaohui: {
      enable: 'phaseUse',
      filter(event, player) {
        return player.countCards('he');
      },
      usable: 1,
      filterCard: true,
      position: 'he',
      filterTarget: true,
      content() {
        targets[0].draw();
        targets[0].addTempSkill('mengjiaohui2', { player: 'phaseEnd' });
      },
      ai: {
        order: 1,
        result: {
          target: 1,
        },
      },
    },
    mengjiaohui2: {
      mod: {
        cardUsable(card, player, num) {
          if (card.name == 'sha') return num + 1;
        },
      },
    },
    mengzhufu: {
      usable: 1,
      trigger: {
        global: 'damageEnd',
      },
      filter(event, player) {
        return player.countCards('he', { color: 'red' }) && event.player.isDamaged();
      },
      forced: true,
      async content(event, trigger, player) {
        const { cards } = await player
          .chooseToDiscard('he', get.prompt2('mengzhufu', trigger.player), (card) => get.color(card) == 'red')
          .set('ai', (card) => (get.attitude(player, trigger.player) > 0 ? 10 : 0) - get.value(card))
          .forResult();
        if (cards) {
          trigger.player.recover();
        } else {
          player.getStat('triggerSkill').mengzhufu--;
        }
      },
    },
    mengxvyu: {
      zhuSkill: true,
      trigger: {
        global: 'gainAfter',
      },
      usable: 1,
      filter(event, player) {
        if (!player.hasZhuSkill('mengxvyu')) return false;
        if (event.player.group != 'hyyz_ys') return false;
        if (_status.currentPhase == event.player) return false;
        return true;
      },
      check(event, player) {
        return get.attitude(player, trigger.player) > 0;
      },
      content() {
        trigger.player.draw();
      },
    },
    //希儿
    meng_shoupan: {
      trigger: {
        global: 'phaseJieshuBegin',
      },
      filter(event, player, card) {
        return player.hasMark('meng_shoupan_count') < 3;
      },
      group: ['buqu', 'meng_shoupan_roundcount'],
      async content(event, trigger, player) {
        player.addTempSkill('meng_shoupan_count', 'roundStart');
        player.addMark('meng_shoupan_count', 1, false);
        game.playAudio('../extension/忽悠宇宙/audio/skill/mengluandie_sha' + [1, 2, 3].randomGet());
        const { bool } = await player.chooseToDiscard('he', { color: 'red' }).forResult();
        if (!bool) player.loseHp();
        let card = {
          name: 'sha',
          storage: {
            meng_shoupan: true,
          },
        };
        const { targets } = await player.chooseTarget(true).forResult();
        targets[0].addSkill('meng_shoupan_sub');
        player.useCard(card, targets[0]);
      },
      subSkill: {
        count: {
          charlotte: true,
        },
        sub: {
          audio: 'mengluandie',
          filter(event, player) {
            return event.card && event.card.storage && event.card.storage.meng_shoupan;
          },
          trigger: {
            global: 'useCardAfter',
          },
          content() {
            'step 0';
            player.judge(function (card) {
              if (player.hp == player.maxHp) {
                if (get.color(card) == 'red') return -1;
              }
              if (get.color(card) == 'red') return 1;
              return 0;
            });
            ('step 1');
            let num = 0;
            player.getHistory('sourceDamage', (evt) => {
              if (evt.card == trigger.card) num += evt.num;
            });
            if (result.color) {
              if (result.color == 'red') {
                if (player.hp < player.maxHp) player.recover();
              } else {
                player.draw(num);
              }
            }
          },
        },
      },
    },
    meng_xingan: {
      audio: 'mengzaixian',
      trigger: {
        player: 'useCardToPlayered',
      },
      filter(event, player, card) {
        return get.tag(event.card, 'damage') && !event.target.getStorage('meng_xingan_sub').includes(event.card.name);
      },
      async content(event, trigger, player) {
        trigger.target.addSkill('meng_xingan_sub');
        trigger.target.markAuto('meng_xingan_sub', [trigger.card.name]);
        let list = [1, 2, 3];
        trigger.cancel();
        const { control } = await player.chooseControl(list).forResult();
        const { bool } = await trigger.target
          .chooseToDiscard('he', [control, control], function (card, player) {
            if (!ui.selected.cards.length) return true;
            var type = get.type(card, trigger.target);
            for (var i of ui.selected.cards) {
              if (get.type(i, trigger.target) == type) return false;
            }
            return true;
          })
          .forResult();
        if (!bool) {
          trigger.target.turnOver();
          trigger.target.draw(control);
        }
      },
      subSkill: {
        sub: {},
      },
    },
    //感谢为群扩提供代码支持的魈、就离谱
    //以下为粉丝提供的代码(含粉丝修改的代码)
    //凯亚
    mengxuanse: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      enable: ['chooseToUse', 'chooseToRespond'],
      xuanseCards() {
        let cards = [ui.cardPile.childNodes[0], ui.cardPile.childNodes[ui.cardPile.childNodes.length - 1]];
        if (ui.discardPile.childNodes.length) cards.addArray([ui.discardPile.childNodes[0], ui.discardPile.childNodes[ui.discardPile.childNodes.length - 1]]);
        return cards;
      },
      filter(event, player) {
        if (event.name == 'chooseToRespond' && event.responded) return false;
        for (var i of lib.skill.mengxuanse.xuanseCards().map((card) => card.name)) {
          var type = get.type(i);
          if (type != 'equip' && event.filterCard({ name: i }, player, event)) return true;
        }
        return false;
      },
      chooseButton: {
        dialog(event, player) {
          var list = [];
          var str = '  牌堆顶   牌堆底  ';
          let card1 = ui.cardPile.childNodes[0];
          list.push(card1);
          let card2 = ui.cardPile.childNodes[ui.cardPile.childNodes.length - 1];
          list.push(card2);
          if (ui.discardPile.childNodes.length) {
            var card3 = ui.discardPile.childNodes[ui.discardPile.childNodes.length - 1];
            list.push(card3);
            var card4 = ui.discardPile.childNodes[0];
            list.push(card4);
            str += '弃牌堆顶  弃牌堆底';
          }
          return ui.create.dialog('玄色', str, list, 'hidden');
        },
        filter(button, player) {
          if (get.type(button.link) == 'equip') return false;
          for (var i = 1; i <= 5; i++) {
            if (player.getEquip(i) && get.subtype(button.link) == 'equip' + i) return false;
          }
          var evt = _status.event.parent;
          if (evt && evt.filterCard) {
            return evt.filterCard(button.link, player, evt);
          }
          return true;
        },
        check(button) {
          if (_status.event.parent.type != 'phase') return 1;
          var player = _status.event.player;
          if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link.name)) return 0;
          return player.getUseValue(button.link);
        },
        backup(links, player) {
          let cards = links.filter((i) => get.position(i) == 'd' || get.position(i) == 'c');
          return {
            filterCard: (card) => false,
            selectCard: -1,
            viewAs: links[0],
            cards: cards,
            precontent() {
              event.result.cards = lib.skill[event.result.skill].cards;
            },
          };
        },
        prompt(links, player) {
          return `选择${get.translation(links)}的目标`;
        },
      },
      hiddenCard(player, name) {
        if (
          lib.skill.mengxuanse
            .xuanseCards()
            .map((card) => card.name)
            .includes(name)
        )
          return true;
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
    },
    menglinwei: {
      audio: 'ext:忽悠宇宙/audio/skill:4',
      trigger: {
        player: 'damageAfter',
        source: 'damageAfter',
      },
      filter(event, player) {
        if (!event.source || !event.player.isIn() || !event.source.isIn()) return false;
        if (event.player.countCards('h') == event.source.countCards('h')) return false;
        return true;
      },
      forced: true,
      content() {
        'step 0';
        if (trigger.source.countCards('h') > trigger.player.countCards('h')) {
          event.target = trigger.source;
        } else {
          event.target = trigger.player;
        }
        ('step 1');
        player
          .discardPlayerCard(event.target, get.prompt2('menglinwei', event.target))
          .set('ai', function (button) {
            if (_status.event.att > 0) return 8 - get.value(button.link);
            if (get.position(button.link) == 'e') {
              if (get.subtype(button.link) == 'equip2') return 2 * get.value(button.link);
              return get.value(button.link);
            }
            return 1;
          })
          .set('att', get.attitude(player, event.target));
        player.line(player, event.target);
        ('step 2');
        if (result.bool) {
          player.chooseButton(['临危:获得一张<玄色>牌', lib.skill.mengxuanse.xuanseCards()], true).set('ai', (button) => {
            var val = get.value(button.link);
            if (get.type(button.link) == 'equip' && player.hp > 2) {
              val += 5;
            }
            return val;
          });
        } else event.finish();
        ('step 3');
        if (result.bool) {
          player.gain(result.links, 'gain2');
        }
      },
    },
    menganzhi: {
      trigger: {
        player: 'useCardAfter',
      },
      filter(event, player) {
        if (get.type(event.card) == 'equip') return false;
        return get.itemtype(event.cards) == 'cards' && event.cards.filterInD().length;
      },
      forced: true,
      content() {
        var list = trigger.cards.filterInD();
        game.log(player, '将', list, '随机插入牌堆');
        while (list.length) ui.cardPile.insertBefore(list.shift().fix(), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
        game.updateRoundNumber();
      },
    },
    //少侠
    mengweie: {
      trigger: {
        global: 'roundStart',
      },
      forced: true,
      content() {
        'step 0';
        game.filterPlayer(function (current) {
          if (current.hasSkill('mengshuguang')) {
            current.draw(2);
          }
        });
        ('step 1');
        player
          .chooseTarget('伪恶:对一名角色出谋划策', lib.translate.mengweie_info, function (card, player, target) {
            return !target.hasSkill('mengshuguang');
          })
          .set('ai', function (target) {
            var att = get.attitude(player, target),
              eff = get.damageEffect(target, player, target) * 10;
            if (
              !game.countPlayer(function (current) {
                return current.hasSkill('mengshuguang');
              })
            ) {
              if (target == player) att /= 2;
              if (get.damageEffect(target, player, target) * 10 > 0) att *= 10;
              return att;
            } else return false;
          });
        ('step 2');
        if (result.bool) {
          var target = result.targets[0];
          game.filterPlayer(function (current) {
            if (current.hasSkill('mengshuguang')) {
              current.removeSkill('mengshuguang');
            }
          });
          target.damage(player, 'unreal');
          target.addSkill('mengshuguang');
        }
      },
      derivation: 'mengshuguang',
      group: 'mengweie_die',
      subSkill: {
        die: {
          trigger: {
            player: 'dieBegin',
          },
          forceDie: true,
          forced: true,
          charlotte: true,
          content() {
            game.countPlayer(function (current) {
              if (current.hasSkill('mengshuguang')) {
                player.say('对不起,我尽力了……');
                current.removeSkill('mengshuguang');
              }
            });
          },
        },
      },
    },
    mengshuguang: {
      mark: true,
      marktext: '曙',
      intro: {
        name: '曙光',
        name2: '曙',
        content: '此计若成,我儿有救矣!',
      },
      trigger: {
        global: ['loseAfter', 'loseAsyncAfter'],
      },
      filter(event, player) {
        if (event.type != 'discard' || event.getlx === false) return false;
        var cards = event.cards.slice(0);
        var evt = event.getl(player);
        if (evt && evt.cards) cards.removeArray(evt.cards);
        if (Array.isArray(cards))
          for (var i of cards) {
            if (i.original != 'j' && get.type(i, event.player) == 'basic' && get.position(i, true) == 'd') {
              return true;
            }
          }
        return false;
      },
      forced: true,
      async content(event, trigger, player) {
        let cards = [],
          cards2 = trigger.cards.slice(0),
          evt = trigger.getl(player);
        if (evt && evt.cards) cards2.removeArray(evt.cards);
        for (var i = 0; i < cards2.length; i++) {
          if (cards2[i].original != 'j' && get.type(i, event.player) == 'basic' && get.position(cards2[i], true) == 'd') {
            cards.push(cards2[i]);
          }
        }
        if (cards.length) {
          const { bool } = await trigger.player
            .chooseBool(`曙光:${get.translation(player)}需要善款,将这些用不上的物资捐助给他吧`, get.translation(cards), function (card, player, target) {
              return player != target;
            })
            .set('ai', () => get.attitude(trigger.player, player) > 0)
            .forResult();
          if (bool) {
            player.gain(cards, 'gain2', 'log').giver = trigger.player;
            player.say(['谢谢好心人!', '好人一生平安!', '我实在无以回报……'].randomGet());
          }
        }
      },
      mod: {
        maxHandcard(player, num) {
          return num + 2;
        },
      },
    },
    mengmushou: {
      mod: {
        targetEnabled(card) {
          if ((get.type(card) == 'trick' || get.type(card) == 'delay') && get.color(card) == 'black') return false;
        },
      },
      init(player) {
        player.storage.mengmushou = 0;
      },
      mark: true,
      intro: {
        content: '你已帮助别人筹集的善款:#',
      },
      trigger: {
        global: 'gainAfter',
      },
      filter(event, player) {
        return event.player.hasSkill('mengshuguang');
      },
      charlotte: true,
      forced: true,
      dutySkill: true,
      content() {
        player.storage.mengmushou += trigger.cards.length;
        game.log('#y捐款+' + trigger.cards.length);
      },
      group: ['mengmushou_achieve', 'mengmushou_fail'],
      subSkill: {
        achieve: {
          trigger: {
            global: 'gainAfter',
          },
          forced: true,
          filter(event, player) {
            return player.storage.mengmushou >= 28;
          },
          content() {
            'step 0';
            game.log(player, '成功完成使命');
            player.awakenSkill('mengmushou');
            ('step 1');
            player.gainMaxHp(2);
            ('step 2');
            //player.recover(2);
            ('step 3');
            player.addSkillLog('mengshentui');
          },
        },
        fail: {
          trigger: {
            global: 'dying',
          },
          forced: true,
          filter(event, player) {
            return event.player.hasSkill('mengshuguang');
          },
          content() {
            'step 0';
            game.log(player, '使命失败');
            player.awakenSkill('mengmushou');
            ('step 1');
            player.loseMaxHp(2);
            trigger.player.recover(2);
            ('step 2');
            player.addSkillLog('mengshentui');
          },
        },
      },
      derivation: 'mengshentui',
    },
    mengshentui: {
      trigger: {
        global: 'useCard',
      },
      forced: true,
      filter(event, player) {
        if (event.player == event.targets[0]) return false;
        if (event.targets.length != 1) return false;
        if (player != event.targets[0] && player != event.player) return false;
        return event.card && (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name)));
      },
      content() {
        'step 0';
        var target = trigger.player.maxHp > trigger.targets[0].maxHp ? trigger.targets[0] : trigger.player;
        trigger.directHit.push(target);
      },
    },
    //芙宁娜
    JLPjuxing: {
      init() {
        game.playAudio('../extension/忽悠宇宙/audio/skill/JLPjuxing_init.mp3');
      },
      audio: 'JLPjuxing_audio',
      dutySkill: true,
      trigger: {
        global: 'roundStart',
      },
      forced: true,
      content() {
        'step 0';
        game.log(player, '发动了', '#g【踽行】');
        lib.skill.JLPshenyi.disableEnd(player);
        ('step 1');
        player
          .chooseTarget('定断一名角色的罪行', '明置其的手牌并令其弃置一张牌', true, function (card, player, target) {
            return !game.hasPlayer((tar) => tar.countCards('e') < target.countCards('e'));
          })
          .set('ai', function (target) {
            var att = get.attitude(_status.event.player, target);
            return -att / (get.distance(player, target) + 0.01);
          });
        ('step 2');
        if (result.bool) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/JLPjuxing_audio' + player.countEnabledSlot());
          var target = result.targets[0];
          target.addShownCards(target.getCards('h'), 'visible_JLPjuxing');
          target.showCards(target.getCards('h'), get.translation(player) + `对${get.translation(target)}发动了【踽行】`);
          target.chooseToDiscard(true);
        }
      },
      group: ['JLPjuxing_achieve', 'JLPjuxing_fail'],
      subSkill: {
        audio: {
          audio: 'ext:忽悠宇宙/audio/skill:4',
        },
        achieve: {
          audio: 'ext:忽悠宇宙/audio/skill:1',
          trigger: {
            global: 'washCard',
          },
          forced: true,
          filter(event, player) {
            return true;
          },
          content() {
            'step 0';
            game.log(player, '成功完成使命');
            player.awakenSkill('JLPjuxing');
            player.addSkillLog('JLPrensheng');
            player.node.avatar.setBackgroundImage('extension/忽悠宇宙/image/character/JLPjuxing_achieve.jpg');
            game.filterPlayer(function (current) {
              if (current == player) {
                player.say('我……真的成功了吗?');
              } else {
                if (Math.random() > 0.5) current.say(['500年来辛苦你了,芙芙!', '你也是我们心中的水神!'].randomGet());
              }
            });
            ('step 1');
            player.recover(player.getDamagedHp());
            player.removeSkill('JLPshenyi');
            player.addSkillLog('JLPshenyi_rewrite');
            event.a = 1;
            ('step 2');
            while (event.a < 6) {
              if (player.hasEmptySlot(event.a)) {
                var card = get.cardPile2(function (card) {
                  return get.subtype(card) == 'equip' + event.a && player.canUse(card, player);
                });
                if (card) player.chooseUseTarget(card, true, 'nopopup');
              }
              event.a++;
            }
            ('step 3');
            player
              .chooseTarget(true, function (card, player, target) {
                return target != player;
              })
              .set('ai', function (target) {
                return get.attitude(_status.event.player, target) > 0;
              });
            ('step 4');
            var target = result.targets[0];
            var equips = player.getCards('e');
            for (var card of equips) {
              var type = get.subtype(card);
              target.expandEquip(type);
              player.$give(card, target, false);
              target.equip(card);
              player.disableEquip(type);
            }
          },
        },
        fail: {
          audio: 'ext:忽悠宇宙/audio/skill:1',
          trigger: {
            player: 'disableEquipAfter',
          },
          forced: true,
          filter(event, player) {
            return !player.hasEnabledSlot();
          },
          content() {
            'step 0';
            game.log(player, '使命失败');
            player.awakenSkill('JLPjuxing');
            player.awakenSkill('JLPshenyi');
            player.addSkillLog('JLPrensheng');
            player.node.avatar.setBackgroundImage('extension/忽悠宇宙/image/character/JLPjuxing_fail.jpg');
            game.filterPlayer(function (current) {
              if (current == player) {
                player.say('对不起……真的对不起……');
              } else {
                if (Math.random() > 0.5) current.say(['这不怪你,你已经为我们付出了太多', '你已经尽力了,芙芙'].randomGet());
              }
            });
            ('step 1');
            game.countPlayer(function (current) {
              if (current != player) current.loseHp();
            });
          },
        },
      },
      derivation: ['JLPrensheng'],
    },
    JLPshenyi: {
      audio: 'ext:忽悠宇宙/audio/skill:13',
      trigger: {
        player: 'loseAfter',
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
      },
      forced: true,
      preHidden: true,
      filter(event, player) {
        if (player.isPhaseUsing()) return false;
        var evt = event.getl(player);
        if (!evt || !evt.hs || !evt.hs.length) return false;
        return true;
      },
      content() {
        'step 0';
        game.log(player, '发动了', '#g【神仪】');
        var a = 0;
        if (trigger.name == 'lose') {
          for (var i in trigger.gaintag_map) {
            if (trigger.gaintag_map[i].includes('JLPshenyi')) a++;
          }
        } else
          player.getHistory('lose', function (evt) {
            if (trigger != evt.parent) return false;
            for (var i in evt.gaintag_map) {
              if (evt.gaintag_map[i].includes('JLPshenyi')) a++;
            }
            return false;
          });
        var evt = trigger.getl(player);
        var b = evt.hs.length - a;
        event.c = a - b;
        if (event.c == 0) event.finish();
        ('step 1');
        var d, dd;
        if (event.c > 0) {
          //回复
          lib.skill.JLPshenyi.enableEnd(player, event.c);
          if (_status.currentPhase == player) {
            d = player.countEnabledSlot();
            if (d > 3) dd = 3;
            if (d == 3) dd = 2;
            if (d < 3) dd = 1;
            game.playAudio('../extension/忽悠宇宙/audio/skill/JLPshenyi' + dd);
          } else {
            d = player.countEnabledSlot();
            if (d > 3) dd = 9;
            if (d == 3) dd = 8;
            if (d < 3) dd = 7;
            game.playAudio('../extension/忽悠宇宙/audio/skill/JLPshenyi' + dd);
          }
        } else if (event.c < 0) {
          //废除
          lib.skill.JLPshenyi.disableEnd(player, -event.c);
          if (_status.currentPhase == player) {
            d = player.countEnabledSlot();
            if (d > 3) dd = 6;
            if (d == 3) dd = 5;
            if (d < 3) dd = 4;
            game.playAudio('../extension/忽悠宇宙/audio/skill/JLPshenyi' + dd);
          } else {
            d = player.countEnabledSlot();
            if (d > 3) dd = 13;
            if (d == 3) dd = 12;
            if (d == 2) dd = 11;
            if (d == 1) dd = 10;
            var d = player.countEnabledSlot();
            game.playAudio('../extension/忽悠宇宙/audio/skill/JLPshenyi' + dd);
          }
        }
      },
      disableEnd(player, num) {
        if (!player.hasEnabledSlot()) return;
        if (!num) num = 1;
        for (var i = 5; i >= 1; i--) {
          if (player.hasEnabledSlot(i)) {
            player.disableEquip(i);
            num--;
            if (num <= 0) break;
          }
        }
      },
      enableEnd(player, num) {
        if (!player.hasDisabledSlot()) return;
        if (!num) num = 1;
        for (var i = 5; i >= 1; i--) {
          if (player.hasDisabledSlot(i)) {
            player.enableEquip(i);
            num--;
            if (num <= 0) break;
          }
        }
      },
      mod: {
        aiUseful(player, card, num) {
          if (get.itemtype(card) == 'card') {
            if (_status.event.parent.name == 'phaseUse' || player == _status.currentPhase) {
              if (card.hasGaintag('JLPshenyi')) {
                return num / 10;
              }
            } else {
              if (card.hasGaintag('JLPshenyi')) {
                return num * 10;
              }
            }
          }
        },
        aiOrder() {
          lib.skill.JLPshenyi.mod.aiUseful.apply(this, arguments);
        },
        aiValue(player, card, num) {
          if (get.itemtype(card) == 'card') {
            if (card.hasGaintag('JLPshenyi')) return num / 10;
          }
        },
      },
      //global: ["JLPshenyi_target"],
      group: ['JLPshenyi_draw'],
      subSkill: {
        target: {
          mod: {
            targetEnabled(card, player, target) {
              if (player != target) {
                if (card.cards) {
                  for (var i of card.cards) {
                    if (i.hasGaintag('JLPshenyi')) return false;
                  }
                }
                if (get.itemtype(card) == 'card') {
                  if (card.hasGaintag('JLPshenyi')) return false;
                }
              }
            },
          },
        },
        draw: {
          trigger: {
            player: ['loseAfter'],
          },
          forced: true,
          _priority: Infinity,
          firstDo: true,
          //你的手牌数至少为装备栏数.你于出牌阶段外失去〖神仪〗/非〖神仪〗牌后,回复/废除最后一个装备栏
          filter(event, player) {
            return player.countCards('h') < 5 - player.countDisabledSlot();
          }, //QQQ
          content() {
            player.draw(5 - player.countDisabledSlot() - player.countCards('h')).gaintag = ['JLPshenyi'];
          },
        },
      },
      ai: {
        noh: true,
        nogain: 1,
        skillTagFilter(player, tag) {
          if (tag == 'noh' && 5 - player.countDisabledSlot() < player.countCards('h')) {
            return false;
          }
          if (tag == 'nogain' && player != _status.currentPhase) return true;
        },
        effect: {
          player_use(card, player, target) {
            if (player == _status.currentPhase) {
              if (card.cards && card.cards.some((i) => !i.hasGaintag('JLPshenyi'))) return [1, 1];
            } else {
              if (card.cards && card.cards.some((i) => i.hasGaintag('JLPshenyi'))) return [1, 1];
            }
          },
        },
      },
      derivation: ['JLPshenyi_rewrite'],
    },
    JLPrensheng: {
      audio: 'JLPrensheng_audio',
      trigger: {
        player: 'phaseChange',
      },
      forced: true,
      filter(event, player) {
        if (event.phaseList[event.num].startsWith('phaseZhunbei') || event.phaseList[event.num].startsWith('phaseJieshu')) return true;
      },
      content() {
        'step 0';
        game.log(player, '发动了', '#g【人生】');
        ('step 1');
        var a = ['phaseDraw', 'phaseDiscard'];
        var aa = trigger.phaseList[trigger.num].startsWith('phaseZhunbei') ? '准备阶段' : '结束阶段';
        var b = a.randomGet();
        var bb = b == 'phaseDraw' ? '摸牌阶段' : '弃牌阶段';
        game.playAudio('../extension/忽悠宇宙/audio/skill/JLPrensheng_audio' + (b == 'phaseDraw' ? [1, 2].randomGet() : [3, 4].randomGet()));
        game.log('把', '#g' + aa, '改为了', '#g' + bb);
        var c = b + '|JLPrensheng';
        trigger.phaseList[trigger.num] = c;
      },
      subSkill: {
        audio: {
          audio: 'ext:忽悠宇宙/audio/skill:4',
        },
      },
    },
    JLPshenyi_rewrite: {
      audio: 'ext:忽悠宇宙/audio/skill:6',
      trigger: {
        player: 'loseAfter',
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
      },
      forced: true,
      preHidden: true,
      filter(event, player) {
        if (player.isPhaseUsing()) return false;
        var evt = event.getl(player);
        if (!evt || !evt.hs || !evt.hs.length) return false;
        return true;
      },
      content() {
        'step 0';
        var a = 0;
        if (trigger.name == 'lose') {
          for (var i in trigger.gaintag_map) {
            if (trigger.gaintag_map[i].includes('JLPshenyi')) a++;
          }
        } else
          player.getHistory('lose', function (evt) {
            if (trigger != evt.parent) return false;
            for (var i in evt.gaintag_map) {
              if (evt.gaintag_map[i].includes('JLPshenyi')) a++;
            }
            return false;
          });
        var evt = trigger.getl(player);
        var b = evt.hs.length - a;
        event.c = a - b;
        if (event.c == 0) event.finish();
        ('step 1');
        if (event.c > 0) {
          lib.skill.JLPshenyi.disableEnd(player, event.c);
        } else if (event.c < 0) {
          lib.skill.JLPshenyi.enableEnd(player, -event.c);
        }
      },
      group: ['JLPshenyi_draw'], //"JLPshenyi_rewrite_target",
      subSkill: {
        target: {
          name: '神仪',
          enable: 'phaseUse',
          filter(event, player) {
            return (
              player.countCards('h', function (card) {
                return card.hasGaintag('JLPshenyi');
              }) > 0
            );
          },
          filterTarget(card, player, target) {
            if (card.name == 'sha' && !player.canUse({ name: 'sha' }, target)) return false;
            if (ui.selected.cards.length) {
              return player != target && lib.filter.targetEnabled2(ui.selected.cards[0], player, target);
            }
            return false;
          },
          filterCard(card) {
            return card.hasGaintag('JLPshenyi');
          },
          check(card) {
            var player = _status.event.player;
            return game.hasPlayer(function (current) {
              return get.effect(current, card, player, player);
            });
          },
          discard: false,
          lose: false,
          delay: false,
          content() {
            'step 0';
            player.useCard(cards[0], targets[0]);
          },
        },
      },
      mod: {
        aiUseful(player, card, num) {
          if (get.itemtype(card) == 'card') {
            if (_status.event.parent.name == 'phaseUse' || player == _status.currentPhase) {
              if (card.hasGaintag('JLPshenyi')) {
                return num + 10;
              }
            } else {
              if (card.hasGaintag('JLPshenyi')) {
                return num - 10;
              }
            }
          }
        },
        aiOrder() {
          lib.skill.JLPshenyi_rewrite.mod.aiUseful.apply(this, arguments);
        },
        aiValue(player, card, num) {
          if (get.itemtype(card) == 'card' && card.hasGaintag('JLPshenyi')) return num + 10;
        },
      },
      ai: {
        noh: true,
        skillTagFilter(player, tag) {
          if (tag == 'noh' && 5 - player.countDisabledSlot() < player.countCards('h')) {
            return false;
          }
        },
        effect: {
          player_use(card, player, target) {
            if (player == _status.currentPhase) {
              if (card.cards && card.cards.some((i) => i.hasGaintag('JLPshenyi'))) return [1, 1];
            } else {
              if (card.cards && card.cards.some((i) => !i.hasGaintag('JLPshenyi'))) return [1, 1];
            }
          },
        },
      },
    },
    //钟离
    JLPqiyue: {
      global: 'JLPqiyue2',
      ai: {
        threaten: 2.5,
      },
    },
    JLPqiyue2: {
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        if (!game.hasPlayer((current) => current.hasSkill('JLPqiyue'))) return false;
        return game.countPlayer((current) => current.countCards('h') > 0) > 1;
      },
      filterCard: true,
      position: 'he',
      lose: false,
      discard: false,
      delay: false,
      prompt: '契约:展示一张牌用来交易',
      check(card) {
        return 100 - get.value(card);
      },
      content() {
        'step 0';
        event.card = cards[0];
        player.showCards(event.card1, get.translation(player) + '发动了【契约】');
        event.card.gaintag = ['JLPqiyue'];
        player
          .chooseControl('基本牌', '锦囊牌', '装备牌')
          .set('ai', function () {
            return ['装备牌', '基本牌', '锦囊牌'].randomGet();
          })
          .set('prompt', '声明一种牌的类型');
        ('step 1');
        event.type2 = result.control;
        event.type = {
          基本牌: 'basic',
          锦囊牌: 'trick',
          装备牌: 'equip',
        }[event.type2];
        game.log(player, '想要', '#y' + event.type2);
        player.say('谁有' + event.type2);
        event.shop = [];
        event.currents = game.filterPlayer((current) => current.countCards('he', (card) => get.type2(card) == event.type));
        event.currents.remove(player);
        event.currents.sortBySeat();
        ('step 2');
        if (event.currents.length) {
          event.target = event.currents.shift();
          event.target
            .chooseCard('he', (card) => get.type2(card) == event.type, `你可以展示一张${event.type2}与${get.translation(player)}交换` + get.translation(event.card))
            .set('ai', function (card) {
              if (_status.event.att > 0) {
                return get.value(card) > get.value(_status.event.cardx);
              } else return -1;
            })
            .set('att', get.attitude(event.target, player))
            .set('cardx', event.card);
        } else event.goto(4);
        ('step 3');
        if (result.bool) {
          event.shop.push(result.cards[0]);
        }
        event.goto(2);
        ('step 4');
        if (!event.shop.length) {
          game.log('契约:交易失败');
          player.say('没有交易到想要的东西');
          event.finish();
        }
        ('step 5');
        var dialog = ui.create.dialog('###【契约】###选择其中一张获得之', event.shop);
        var getName = function (target) {
          if (target._tempTranslate) return target._tempTranslate;
          let name = target.name;
          if (lib.translate[`${name}_ab`]) return lib.translate[`${name}_ab`];
          return get.translation(name);
        };
        for (var i = 0; i < event.shop.length; i++) {
          dialog.buttons[i].querySelector('.info').innerHTML = getName(get.owner(event.shop[i]));
        }
        player.chooseButton(dialog).set('ai', function (button) {
          var card = button.link;
          return get.attitude(_status.event.player, get.owner(card)) * get.value(card);
        });
        event.dialog = dialog;
        ('step 6');
        if (result.bool) {
          game.log(player, '对', get.owner(result.links[0]), '发动了', '#g【契约】');
          player.gain(result.links[0], 'give');
          get.owner(result.links[0]).gain(event.card, 'give');
        }
      },
      ai: {
        order: 10,
        expose: 1,
        result: {
          player(player, target) {
            var current = game.filterPlayer((current) => current.hasSkill('JLPqiyue'))[0];
            var att = get.attitude(player, current);
            return att * 2;
          },
        },
      },
    },
    JLPluheng: {
      audio: 'ext:忽悠宇宙/audio/skill:8',
      trigger: {
        global: ['gainAfter', 'equipAfter', 'useCardAfter'],
      },
      filter(event, player) {
        if (event.name != 'useCard') {
          if (event.name == 'gain' && (!event.getg(event.player) || !event.getg(event.player).length)) return false;
          return game.hasPlayer((current) => {
            if (current == event.player) return false;
            var evt = event.getl(current);
            if (evt && evt.cards && evt.cards.length) return true;
            return false;
          });
        } else {
          if (get.itemtype(event.cards) != 'cards') return false;
          if (event.cards.length != 1 || event.targets.length != 1 || event.targets[0] == event.player) return false;
          return ['equip', 'delay'].includes(get.type(event.card)) && event.targets[0].getCards('ehj').includes(event.cards[0]);
        }
      },
      forced: true,
      kong(target) {
        for (var i = 1; i < 6; i++) {
          if (target.hasEmptySlot(i)) return true;
        }
        return false;
      },
      content() {
        'step 0';
        var lose, gain;
        if (trigger.name != 'useCard') {
          gain = trigger.player;
          lose = game.filterPlayer((current) => {
            if (current == trigger.player) return false;
            var evt = trigger.getl(current);
            if (evt && evt.cards && evt.cards.length) return true;
            return false;
          })[0];
        } else {
          gain = trigger.targets[0];
          lose = trigger.player;
        }
        event.lose = lose;
        event.gain = gain;
        ('step 1');
        var list = [];
        if (lib.skill.JLPluheng.kong(event.lose)) {
          list[0] = `补偿:令${get.translation(event.lose)}的场上随机置入一张装备牌`;
        } else {
          list[0] = `补偿:令${get.translation(event.lose)}摸一张牌`;
        }
        if (event.gain.countCards('hes', { type: 'equip' })) {
          list[1] = `岩罚:令${get.translation(event.gain)}将一张装备牌当不可响应的【杀】对自己使用`;
        } else {
          list[1] = `岩罚:令${get.translation(event.gain)}弃一张牌`;
        }
        player
          .chooseControlList(true, list, '律衡:食言者,当受食岩之罚!')
          .set('ai', function () {
            var player = _status.event.player;
            var sx = _status.event.s;
            if (get.attitude(player, sx[1]) < 0) {
              return 1;
            } else if (get.attitude(player, sx[0]) > 0) {
              return 0;
            } else return get.attitude(player, sx[1]) > 0 && sx[1].hp < 3 ? 0 : [0, 0, 0, 1, 1].randomGet();
          })
          .set('s', [event.lose, event.gain]);
        ('step 2');
        if (result.index == 0) {
          var bool = false;
          for (var i = 1; i < 7; i++) {
            if (event.lose.hasEmptySlot(i)) {
              var sub = 'equip' + i,
                card = get.cardPile(function (card) {
                  return get.subtype(card, false) == sub && !get.cardtag(card, 'gifts') && event.lose.canEquip(card);
                });
              if (card) {
                event.lose.$gain2(card);
                event.lose.equip(card);
                bool = true;
                break;
              }
            }
          }
          if (!bool) event.lose.draw();
          event.finish();
        } else {
          if (event.gain.countCards('hes', { type: 'equip' }) > 0) event.gain.chooseCard('律衡', '将一张装备牌当不可响应的【杀】对自己使用', 'hes', { type: 'equip' }, true);
          else {
            event.gain.chooseToDiscard('he', true);
            event.finish();
          }
        }
        ('step 3');
        event.gain.useCard({ name: 'sha', storage: { JLPluheng: true } }, result.cards, event.gain);
      },
      group: 'JLPluheng_dir',
      global: 'JLPluheng_ai',
      subSkill: {
        dir: {
          trigger: {
            global: 'useCard',
          },
          forced: true,
          charlotte: true,
          filter(event, player) {
            return event.card && event.card.storage && event.card.storage.JLPluheng;
          },
          content() {
            game.log(trigger.card, '不能被响应');
            trigger.directHit.addArray(game.filterPlayer());
          },
        },
        ai: {
          ai: {
            effect: {
              target(card, player, target, current) {
                if (['jiedao', 'shunshou', 'chenghuodajie', 'tuixinzhifu'].includes(card.name)) return [1, 1];
              },
              player(card, player, target, current) {
                if (['jiedao', 'shunshou', 'chenghuodajie', 'tuixinzhifu'].includes(card.name)) return [1, -1.8];
              },
            },
          },
        },
      },
      ai: {
        threaten: 2.5,
        expose: 1,
      },
    },
    JLPminhui: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      init(player) {
        player.storage.JLPminhui = false;
      },
      mark: true,
      limited: true,
      trigger: {
        global: ['dieAfter'],
      },
      zhuSkill: true,
      filter(event, player) {
        if (!player.hasZhuSkill('JLPminhui')) return false;
        if (!player.countCards('hes', { type: 'equip' })) return false;
        return event.source && event.source != player && event.source.isIn() && player.storage.JLPminhui == false;
      },
      check(event, player) {
        return get.attitude(player, event.source) < -2 && player.countCards('hes', { type: 'equip' }) >= Math.min(3, event.source.hp);
      },
      logTarget: 'source',
      content() {
        'step 0';
        player.awakenSkill('JLPminhui');
        player.storage.JLPminhui = true;
        event.cards = player.getCards('hes', { type: 'equip' });
        ('step 1');
        if (event.cards.length && trigger.source.isIn()) {
          player.useCard(event.cards.shift(), trigger.source);
          event.redo();
        }
      },
      intro: {
        content: 'limited',
      },
      ai: {
        expose: 2,
      },
    },
    //纳西妲
    JLPkunchu: {
      mod: {
        playerEnabled(card, player, target) {
          if (player == target || player.storage.JLPkunchu_tailai) return;
          var history = target.getAllHistory('useCard', (evt) => evt && evt.targets && evt.targets.includes(player));
          if (!history.length) return false;
        },
      },
      trigger: {
        global: 'useCard1',
      },
      filter(event, player) {
        //if (event.player.countExpandedSlots() > 0) return false;
        if (!player.hasEnabledSlot() && !player.countExpandedSlots()) return false;
        if (!event.player.isIn() || !event.targets.length || !event.targets.includes(player)) return false;
        return event.player != player;
      },
      forced: true,
      logTarget: 'player',
      async content(event, trigger, player) {
        if (player.storage.JLPjinghua) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/JLPkunchu' + [7, 8, 9, 10, 11].randomGet());
        } else {
          game.playAudio('../extension/忽悠宇宙/audio/skill/JLPkunchu' + [1, 2, 3, 4, 5, 6].randomGet());
        }
        if (trigger.player != player && !player.storage.JLPjinghua) {
          trigger.player.say(['纳西妲!', '小吉祥草王,我们来救你了!', '不要放弃,草神大人!', '我们一直信仰着你啊!'].randomGet());
        }
        if (player.countExpandedSlots()) {
          let list = Object.keys(player.getExpandedSlots());
          list.sort();
          if (list.length) {
            const { control } = await player.chooseControl(list).set('prompt', '移除一个扩展装备栏').forResult();
            trigger.player.expandEquip(control);
            player.deleteEquip(control);
          } else return;
        } else if (player.hasEnabledSlot()) {
          let list = [];
          for (var i = 1; i <= 5; i++) {
            //五个位置
            if (player.hasEnabledSlot('equip' + i)) list.push('equip' + i);
          }
          list.sort();
          if (list.length) {
            const { control } = await player.chooseControl(list).set('prompt', '废除一个装备栏').forResult();
            trigger.player.expandEquip(control);
            player.disableEquip(control);
          }
        } else return;
      },
      group: 'JLPkunchu_disable',
      subSkill: {
        disable: {
          audio: 'ext:忽悠宇宙/audio/skill:7',
          trigger: {
            player: 'disableEquipAfter',
          },
          forced: true,
          charlotte: true,
          filter(event, player) {
            for (var i = 1; i <= 5; i++) {
              if (!player.hasDisabledSlot('equip' + i)) return false;
            }
            return true;
          },
          content() {
            'step 0';
            player.storage.JLPkunchu = true;
            player.recover(player.getDamagedHp());
            ('step 1');
            player.addTempSkill('JLPkunchu_out', { player: 'phaseBegin' });
          },
        },
        out: {
          charlotte: true,
          group: 'undist',
          init(player) {
            if (player.isIn()) {
              game.broadcastAll(function (player) {
                player.classList.add('out');
              }, player);
              game.log(player, '移出了游戏');
            }
          },
          onremove(player) {
            for (let slot = 1; slot < 6; slot++) {
              if (player.countDisabledSlot('equip' + slot) > 0) {
                let count = player.countDisabledSlot('equip' + slot);
                for (var i = 0; i < count; i++) {
                  player.enableEquip('equip' + slot);
                }
              }
            }
            if (player.isOut()) {
              game.broadcastAll(function (player) {
                player.classList.remove('out');
              }, player);
              game.log(player, '移回了游戏');
            }
          },
        },
      },
    },
    JLPxukong: {
      trigger: {
        global: 'damageEnd',
      },
      filter(event, player) {
        return (event.player.countExpandedSlots() > 0 && event.player.isIn()) || event.player == player;
      },
      getInclusion(card, player) {
        let list = [];
        const str = lib.translate[`${card.name}_info`];
        const names = Object.keys(lib.card);
        for (const name of names) {
          let type = get.type(name);
          if (!['basic', 'trick'].includes(type)) continue;
          const reg = `【${get.translation(name)}】`;
          if (name == 'sha') {
            if (str.includes(reg)) {
              list.push([type, '', name]);
            }
            for (let nature of lib.inpile_nature) {
              const reg1 = `【${get.translation(nature) + get.translation(name)}】`;
              const reg2 = `${get.translation(nature)}【${get.translation(name)}】`;
              if (str.includes(reg1) || str.includes(reg2)) {
                list.push([type, '', name, nature]);
              }
            }
          } else {
            if (!str.includes(reg)) continue;
            list.push([type, '', name]);
          }
        }
        return list;
      },
      forced: true,
      async content(event, trigger, player) {
        const cards = get.cards(2);
        game.cardsGotoOrdering(cards);
        let next = player.chooseToMove();
        next.set('list', [
          ['牌堆顶', cards],
          [get.translation(trigger.player) + '的手牌', trigger.player.getCards('h')],
        ]);
        next.set('prompt', `虚空:为${get.translation(trigger.player)}卜算`);
        next.set('targetx', trigger.player);
        next.set('filterMove', function (from, to, moved) {
          return typeof to != 'number';
        });
        next.processAI = function (list) {
          var check = function (card) {
            let player = _status.event.player;
            let next = _status.event.targetx;
            let att = get.attitude(player, next);
            return next.getUseValue(card) * att;
          };
          let cards = list[0][1].slice(0).concat(list[1][1].slice(0));
          cards.sort((a, b) => check(a) - check(b));
          let tops = cards.slice(0, 2),
            hands = cards.slice(2, cards.length);
          return [tops, hands];
        };
        const { moved } = await next.forResult();
        if (moved) {
          let top = moved[0],
            gains = moved[1];
          top.removeArray(cards);
          top.reverse();
          trigger.player.$throw(top);
          for (var i = 0; i < top.length; i++) {
            ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
          }
          gains.removeArray(trigger.player.getCards('h'));
          if (!top.length || top.length != gains.length) return;
          game.addCardKnower(top, player);
          game.addCardKnower(gains, player);
          player.addToExpansion(top).gaintag.add('drlt_zhenrong');
          trigger.player.gain(gains, 'gain2', 'log');
          player.popup(get.cnNumber(top.length) + '上');
          game.log(player, `将${get.cnNumber(top.length)}张牌置于牌堆顶`);
          game.updateRoundNumber();
          if (player.storage.JLPkunchu) {
            game.playAudio('../extension/忽悠宇宙/audio/skill/JLPxukong' + [5, 6, 7, 8, 9, 11, 12].randomGet());
          } else {
            game.playAudio('../extension/忽悠宇宙/audio/skill/JLPxukong' + [1, 2, 3, 4].randomGet());
          }
          let names = [];
          for (let card of gains) {
            if (lib.skill.JLPxukong.getInclusion(card).length) {
              names.addArray(lib.skill.JLPxukong.getInclusion(card));
            }
          }
          if (names.length) {
            if (player.hasEnabledSlot()) {
              let list = [];
              for (var i = 1; i <= 5; i++) {
                if (player.hasEnabledSlot('equip' + i)) list.push('equip' + i);
              }
              list.sort();
              if (list.length) {
                const { control } = await player.chooseControl(list).set('prompt', '虚空:废除一个装备栏').forResult();
                if (control) player.disableEquip(control);
              }
            }
            if (trigger.player.countExpandedSlots() > 0) {
              let list = Object.keys(trigger.player.getExpandedSlots());
              list.sort();
              if (list.length) {
                trigger.player.loseHp();
                for (let slot of list) {
                  trigger.player.deleteEquip(slot);
                }
              }
            }
          }
        }
      },
    },
    JLPzhuguang: {
      audio: 'JLPkunchu',
      trigger: {
        player: 'useCardBefore',
      },
      filter(event, player) {
        if (!event.targets.length || event.targets.length != 1) return false;
        return game.hasPlayer(function (user) {
          return game.hasPlayer((target) => user != target && lib.filter.targetEnabled2(event.card, user, target));
        });
      },
      forced: true,
      async content(event, trigger, player) {
        game.log(player, '发动了', '#g【逐光】');
        if (player.storage.JLPkunchu) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/JLPkunchu' + [7, 8, 9, 10, 11].randomGet());
        } else {
          game.playAudio('../extension/忽悠宇宙/audio/skill/JLPkunchu' + [1, 2, 3, 4, 5, 6].randomGet());
        }
        if (game.hasPlayer((current) => lib.filter.targetEnabled2(trigger.card, current, current))) {
          const { targets: targets1 } = await player
            .chooseTarget(true, `逐光:选择一名角色`, `选择${get.translation(trigger.card)}的使用者`, function (card, player, target) {
              var trigger = _status.event.getTrigger();
              return game.hasPlayer((current) => lib.filter.targetEnabled2(trigger.card, target, current));
            })
            .set('ai', function (target) {
              const trigger = _status.event.getTrigger(),
                player = _status.event.player;
              let eff = target.getUseValue(trigger.card);
              if (!target.getAllHistory('useCard', (evt) => evt.targets && evt.targets.includes(player)).length) {
                eff *= 1.5;
              }
              return eff;
            })
            .forResult();
          if (targets1) {
            const { targets: targets2 } = await player
              .chooseTarget(true, `逐光:选择一名角色`, `选择${get.translation(targets1)}使用${get.translation(trigger.card)}的目标`, function (card, player, target) {
                var trigger = _status.event.getTrigger();
                return lib.filter.targetEnabled2(trigger.card, targets1[0], target);
              })
              .set('ai', function (target) {
                const trigger = _status.event.getTrigger(),
                  card = trigger.card,
                  player = _status.event.player;
                const user = _status.event.user;
                let eff = get.effect(target, card, user, player);
                if (!user.getAllHistory('useCard', (evt) => evt.targets && evt.targets.includes(player)).length) {
                  if (eff > 0 && target == player) eff *= 1.5;
                }
                return eff;
              })
              .set('user', targets1[0])
              .forResult();
            if (targets2) {
              trigger.player = targets1[0];
              trigger.targets = targets2;
            }
          }
        } else if (game.hasPlayer((current) => game.hasPlayer((current2) => current != current2 && lib.filter.targetEnabled2(trigger.card, current, current2)))) {
          const { targets } = await player
            .chooseTarget(2, '逐光:选择两名角色', `依次为${get.translation(trigger.card)}的使用者和目标`, function (card, player, target) {
              var trigger = _status.event.getTrigger();
              if (!ui.selected.targets.length) {
                return game.hasPlayer((current) => lib.filter.targetEnabled2(trigger.card, target, current));
              } else {
                return lib.filter.targetEnabled2(trigger.card, ui.selected.targets[0], target);
              }
            })
            .set('ai', function (target) {
              const trigger = _status.event.getTrigger(),
                card = trigger.card,
                player = _status.event.player;
              if (!ui.selected.targets.length) {
                let eff = target.getUseValue(card);
                if (!target.getAllHistory('useCard', (evt) => evt.targets && evt.targets.includes(player)).length) {
                  eff *= 1.5;
                }
                return eff;
              } else {
                var user = ui.selected.targets[0];
                let eff = get.effect(target, card, user, player);
                if (!user.getAllHistory('useCard', (evt) => evt.targets && evt.targets.includes(player)).length) {
                  if (eff > 0 && target == player) eff *= 1.5;
                }
                return eff;
              }
            })
            .forResult();
          if (targets) {
            trigger.player = targets[0];
            trigger.targets = [targets[1]];
          }
        }
      },
      ai: {
        effect: {
          player(card, player, target, current) {
            return 5;
          },
        },
      },
    },
    //刃
    mengkunsheng: {
      audio: 'xttushang',
      trigger: {
        global: 'phaseEnd',
      },
      forced: true,
      content() {
        player[player.getDamagedHp() > player.hp ? 'recover' : 'loseHp'](Math.abs(player.getDamagedHp() - player.hp));
      },
      ai: {
        threaten(player, target) {
          return target.getDamagedHp();
        },
        maixie: true,
      },
    },
    mengyetu: {
      audio: 'mengwansi',
      trigger: {
        player: 'useCard2',
      },
      forced: true,
      filter(event, player) {
        return event.card && event.card.name == 'sha';
      },
      async content(event, trigger, player) {
        player.loseHp();
        game.setNature(trigger.card, 'hyyz_wind');
        let num = Math.min(
          player.getDamagedHp(),
          game.countPlayer(function (current) {
            return !trigger.targets.includes(current) && lib.filter.filterTarget(trigger.card, player, current);
          })
        );
        if (!num) return;
        const { targets } = await player
          .chooseTarget(`业途-誓仇`, `是否令至多${get.cnNumber(num)}名其他角色也成为此【杀】的目标`, [1, num], function (card, player, target) {
            var evt = _status.event.getTrigger();
            return target != player && !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
          })
          .set('ai', function (target) {
            return get.effect(target, { name: 'sha' }, _status.event.player);
          })
          .forResult();
        if (targets) {
          player.line(targets, trigger.card.nature);
          trigger.targets.addArray(targets);
          trigger.mengyetu = true;
          player.addTempSkill('mengyetu_1');
        }
      },
      derivation: 'dc_olshichou',
      subSkill: {
        1: {
          trigger: {
            player: 'useCardAfter',
          },
          filter(event, player) {
            return (
              event.mengyetu &&
              !player.getHistory('sourceDamage', function (evt) {
                return evt.card == event.card;
              }).length &&
              event.cards.filterInD().length
            );
          },
          charlotte: true,
          forced: true,
          popup: false,
          content() {
            player.gain(trigger.cards.filterInD(), 'gain2');
          },
        },
      },
    },
    mengenciJLP: {
      audio: 'xthuiduo',
      init(player) {
        player.storage.mengenciJLP = [];
      },
      trigger: {
        player: ['dying'],
      },
      forced: true,
      initList() {
        var list,
          skills = [];
        var banned = ['xunyi'];
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
          if (!lib.character[i] || !lib.character[i][3]) continue;
          for (var j of lib.character[i][3]) {
            var skill = lib.skill[j];
            if (!skill || skill.zhuSkill || banned.includes(j)) continue;
            if (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
            var info0 = get.translation(j),
              info1 = get.translation(j + '_info');
            for (var word of info0) {
              if (/死/.test(word) == true) {
                if (!skills.includes(j)) skills.push(j);
                break;
              }
            }
            for (var word of info1) {
              if (/死/.test(word) == true) {
                if (!skills.includes(j)) skills.push(j);
                break;
              }
            }
          }
        }
        _status.mengenciJLP_list = skills;
      },
      async content(event, trigger, player) {
        player.recover();
        if (!_status.mengenciJLP_list) lib.skill.mengenciJLP.initList();
        var list = _status.mengenciJLP_list
          .filter(function (i) {
            return !player.hasSkill(i, null, null, false);
          })
          .randomGets(3);
        if (list.length == 0) event.goto(2);
        else {
          event.videoId = lib.status.videoId++;
          let func = function (skills, id, target) {
            let dialog = ui.create.dialog('forcebutton');
            dialog.videoId = id;
            dialog.add('恩赐:获得一个技能');
            for (var i = 0; i < skills.length; i++) {
              dialog.add(`<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【${get.translation(skills[i])}】</div><div>` + lib.translate[`${skills[i]}_info`] + '</div></div>');
            }
            dialog.addText(' <br> ');
          };
          if (player.isOnline()) player.send(func, list, event.videoId);
          else if (player == game.me) func(list, event.videoId);
          const { control } = await player
            .chooseControl(list)
            .set('ai', function () {
              var controls = _status.event.controls;
              if (controls.includes('cslilu')) return 'cslilu';
              return controls[0];
            })
            .forResult();
          if (control) {
            game.broadcastAll('closeDialog', event.videoId);
            if (player.storage.mengenciJLP) {
              player.removeSkillLog(player.storage.mengenciJLP);
              delete player.storage.mengenciJLP;
            }
            player.storage.mengenciJLP = control;
            player.addSkillLog(control);
          }
        }
      },
    },
    //雷神
    JLPwuwang: {
      audio: 'ext:忽悠宇宙/audio/skill:6',
      init(player, skill) {
        player.storage[skill] = {
          card(player) {
            return player.countCards('h', { name: 'ying' }) > 0;
          },
          hujia(player) {
            return player.hujia > 0;
          },
          skill(player) {
            return lib.skill.JLPwumeng.skills_normal([player]).length;
          },
        };
      },
      trigger: {
        player: 'damageBefore',
        global: 'judgeFixing',
      },
      filter(event, player) {
        if (event.name != 'damage' && (!event.result || event.result.color != 'black')) return false;
        let list = player.getStorage('JLPwuwang'),
          keys = Object.keys(list);
        if (keys.length) return list[keys[0]](player) && player.hasUseTarget({ name: 'sha', nature: 'thunder' });
        return false;
      },
      forced: true,
      content() {
        'step 0';
        if (trigger.name == 'damage') trigger.cancel();
        else {
          var evt = trigger.parent;
          if (evt.name == 'phaseJudge') {
            evt.excluded = true;
          } else {
            evt.cancel();
            if (evt.name.startsWith('pre_')) {
              var evtx = evt.parent;
              evtx.finish();
              evtx._triggered = null;
            }
            var nexts = trigger.next.slice();
            for (var next of nexts) {
              if (next.name == 'judgeCallback') trigger.next.remove(next);
            }
            var evts = game.getGlobalHistory('cardMove', function (evt) {
              return evt.getParent(2) == trigger.parent;
            });
            var cards = [];
            for (var i = evts.length - 1; i >= 0; i--) {
              var evt = evts[i];
              for (var card of evt.cards) {
                if (get.position(card, true) == 'o') cards.push(card);
              }
            }
            trigger.orderingCards.addArray(cards);
          }
        }
        ('step 1');
        let list = player.getStorage('JLPwuwang'),
          l = Object.keys(list);
        if (list[l[0]](player) && player.hasUseTarget({ name: 'sha', nature: 'thunder' })) {
          switch (l[0]) {
            case 'card': {
              player.chooseCardTarget({
                prompt: '选择雷<span class="yellowtext">【杀】</span>(<span class="yellowtext">【影】</span>)的目标',
                position: 'h',
                forced: true,
                filterCard(card) {
                  return card.name == 'ying';
                },
                selectCard: 1,
                filterTarget(card, player, target) {
                  return player.canUse({ name: 'sha', nature: 'thunder' }, target);
                },
                ai1(card) {
                  return true;
                },
                ai2(target) {
                  var player = _status.event.player;
                  return get.effect(target, { name: 'sha', nature: 'thunder' }, player, player);
                },
              });
              break;
            }
            case 'hujia': {
              player
                .chooseTarget(true, '选择雷<span class="yellowtext">【杀】</span>(<span class="yellowtext">护甲</span>)的目标', function (card, player, target) {
                  return player.canUse({ name: 'sha', nature: 'thunder' }, target);
                })
                .set('ai', (target) => {
                  var player = _status.event.player;
                  return get.effect(target, { name: 'sha', nature: 'thunder' }, player, player);
                });
              break;
            }
            case 'skill': {
              let skills = lib.skill.JLPwumeng.skills_normal([player]);
              player
                .chooseControl(skills)
                .set('prompt', '选择当雷<span class="yellowtext">【杀】</span>使用的技能')
                .set('forced', true)
                .set('ai', () => {
                  return skills.randomGet();
                });
              break;
            }
          }
        }
        ('step 2');
        if (result.cards && result.cards.length && result.targets && result.targets.length) {
          var target = result.targets[0];
          target.addTempSkill('JLPwuwang_card');
          target.storage.JLPwuwang_card.add(trigger.card);
          target.markSkill('JLPwuwang_card');
          player.useCard({ name: 'sha', nature: 'thunder' }, result.cards, target, false);
          event.finish();
        } else if ((!result.cards || !result.cards.length) && result.targets && result.targets.length) {
          var target = result.targets[0];
          target.addTempSkill('JLPwuwang_hujia');
          target.storage.JLPwuwang_hujia.add(trigger.card);
          target.markSkill('JLPwuwang_hujia');
          player.changeHujia(-1);
          player.useCard({ name: 'sha', nature: 'thunder' }, target, false);
          event.finish();
        } else if (result.control) {
          event.control = result.control;
          player
            .chooseTarget(true, `选择雷<span class="yellowtext">【杀】</span>(<span class="yellowtext">${get.translation(event.control)}</span>)的目标`, function (card, player, target) {
              return player.canUse({ name: 'sha', nature: 'thunder' }, target);
              //return lib.filter.targetEnabled({ name: 'sha', nature: 'thunder' }, player, target);
            })
            .set('ai', (target) => {
              var player = _status.event.player;
              return get.effect(target, { name: 'sha', nature: 'thunder' }, player, player);
            });
        }
        ('step 3');
        if (result.targets?.length) {
          var target = result.targets[0];
          target.addTempSkill('JLPwuwang_skill');
          target.storage.JLPwuwang_skill.add(trigger.card);
          target.markSkill('JLPwuwang_skill');
          player.removeSkillLog(event.control);
          player.useCard({ name: 'sha', nature: 'thunder' }, target, false);
        }
      },
      group: 'JLPwuwang_start',
      subSkill: {
        start: {
          init(player) {
            game.playAudio('../extension/忽悠宇宙/audio/skill/JLPwuwang_init.mp3');
            lib.element.player.doubleDrawYing = function () {
              'step 0';
              player.chooseBool('你的主副将体力上限之和是奇数,是否获得一张【影】？');
              ('step 1');
              if (result.bool) {
                player.gain(get.hyyzYing(1), 'draw');
              }
            };
            lib.element.content.gameDraw = () => {
              'step 0';
              if (_status.brawl && _status.brawl.noGameDraw) {
                event.finish();
                return;
              }
              var end = player;
              var numx = num;
              do {
                if (player.hasSkill('JLPwuwang_start')) {
                  player.directgain(get.hyyzYing(4));
                  if (player.singleHp === true && get.mode() != 'guozhan' && (lib.config.mode != 'doudizhu' || _status.mode != 'online')) {
                    player.doubleDrawYing();
                  }
                } else {
                  if (typeof num == 'function') {
                    numx = num(player);
                  }
                  if (player.getTopCards) player.directgain(player.getTopCards(numx));
                  else player.directgain(get.cards(numx));
                  if (player.singleHp === true && get.mode() != 'guozhan' && (lib.config.mode != 'doudizhu' || _status.mode != 'online')) {
                    player.doubleDraw();
                  }
                }
                player._start_cards = player.getCards('h');
                player = player.next;
              } while (player != end);
              event.changeCard = get.config('change_card');
              if (_status.connectMode || (lib.config.mode == 'doudizhu' && _status.mode == 'online') || (lib.config.mode != 'identity' && lib.config.mode != 'guozhan' && lib.config.mode != 'doudizhu')) {
                event.changeCard = 'disabled';
              }
              ('step 1');
              if (event.changeCard != 'disabled' && !_status.auto) {
                event.dialog = ui.create.dialog('是否使用手气卡？');
                ui.create.confirm('oc');
                event.custom.replace.confirm = function (bool) {
                  _status.event.bool = bool;
                  game.resume();
                };
              } else {
                event.finish();
              }
              ('step 2');
              if (event.changeCard == 'once') {
                event.changeCard = 'disabled';
              } else if (event.changeCard == 'twice') {
                event.changeCard = 'once';
              } else if (event.changeCard == 'disabled') {
                event.bool = false;
                return;
              }
              _status.imchoosing = true;
              event.switchToAuto = () => {
                _status.event.bool = false;
                game.resume();
              };
              game.pause();
              ('step 3');
              _status.imchoosing = false;
              if (event.bool) {
                if (game.changeCoin) {
                  game.changeCoin(-3);
                }
                var hs = game.me.getCards('h');
                game.addVideo('lose', game.me, [get.cardsInfo(hs), [], [], []]);
                for (var i = 0; i < hs.length; i++) {
                  hs[i].discard(false);
                }
                game.me.directgain(game.me.hasSkill('JLPwuwang_start') ? get.hyyzYing(hs.length) : get.cards(hs.length));
                event.goto(2);
              } else {
                if (event.dialog) event.dialog.close();
                if (ui.confirm) ui.confirm.close();
                game.me._start_cards = game.me.getCards('h');
                event.finish();
              }
              ('step 4');
              //if (game.me.hasSkill('JLPwuwang_start')) game.me.removeSkill('JLPwuwang_start');
            };
          },
          onremove(player) {
            lib.element.content.gameDraw = () => {
              'step 0';
              if (_status.brawl && _status.brawl.noGameDraw) {
                event.finish();
                return;
              }
              var end = player;
              var numx = num;
              do {
                if (typeof num == 'function') {
                  numx = num(player);
                }
                if (player.getTopCards) player.directgain(player.getTopCards(numx));
                else player.directgain(get.cards(numx));
                if (player.singleHp === true && get.mode() != 'guozhan' && (lib.config.mode != 'doudizhu' || _status.mode != 'online')) {
                  player.doubleDraw();
                }
                player._start_cards = player.getCards('h');
                player = player.next;
              } while (player != end);
              event.changeCard = get.config('change_card');
              if (_status.connectMode || (lib.config.mode == 'doudizhu' && _status.mode == 'online') || (lib.config.mode != 'identity' && lib.config.mode != 'guozhan' && lib.config.mode != 'doudizhu')) {
                event.changeCard = 'disabled';
              }
              ('step 1');
              if (event.changeCard != 'disabled' && !_status.auto) {
                event.dialog = ui.create.dialog('是否使用手气卡？');
                ui.create.confirm('oc');
                event.custom.replace.confirm = function (bool) {
                  _status.event.bool = bool;
                  game.resume();
                };
              } else {
                event.finish();
              }
              ('step 2');
              if (event.changeCard == 'once') {
                event.changeCard = 'disabled';
              } else if (event.changeCard == 'twice') {
                event.changeCard = 'once';
              } else if (event.changeCard == 'disabled') {
                event.bool = false;
                return;
              }
              _status.imchoosing = true;
              event.switchToAuto = () => {
                _status.event.bool = false;
                game.resume();
              };
              game.pause();
              ('step 3');
              _status.imchoosing = false;
              if (event.bool) {
                if (game.changeCoin) {
                  game.changeCoin(-3);
                }
                var hs = game.me.getCards('h');
                game.addVideo('lose', game.me, [get.cardsInfo(hs), [], [], []]);
                for (var i = 0; i < hs.length; i++) {
                  hs[i].discard(false);
                }
                game.me.directgain(get.cards(hs.length));
                event.goto(2);
              } else {
                if (event.dialog) event.dialog.close();
                if (ui.confirm) ui.confirm.close();
                game.me._start_cards = game.me.getCards('h');
                event.finish();
              }
            };
          },
          _priority: 1,
        },
        card: {
          init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = [];
          },
          marktext: '妄',
          intro: {
            name: '无妄·影',
            content: '不能使用牌',
          },
          trigger: {
            player: ['damage', 'damageCancelled', 'damageZero'],
            source: ['damage', 'damageCancelled', 'damageZero'],
            target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd', 'eventNeutralized'],
            global: ['useCardEnd'],
          },
          firstDo: true,
          charlotte: true,
          silent: true,
          forced: true,
          popup: false,
          _priority: 12,
          filter(event, player) {
            return player.storage.JLPwuwang_card && event.card && player.storage.JLPwuwang_card.includes(event.card) && (event.name != 'damage' || event.notLink());
          },
          content() {
            player.storage.JLPwuwang_card.remove(trigger.card);
            if (!player.storage.JLPwuwang_card.length) player.removeSkill('JLPwuwang_card');
          },
          mod: {
            cardEnabled2(card) {
              if (card) return false;
            },
          },
          _priority: 1201,
        },
        hujia: {
          init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = [];
          },
          marktext: '妄',
          intro: {
            name: '无妄·护甲',
            content: '护甲失效',
          },
          trigger: {
            player: ['damage', 'damageCancelled', 'damageZero'],
            source: ['damage', 'damageCancelled', 'damageZero'],
            target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd', 'eventNeutralized'],
            global: ['useCardEnd'],
          },
          silent: true,
          forced: true,
          popup: false,
          _priority: 12,
          charlotte: true,
          firstDo: true,
          filter(event, player) {
            return player.storage.JLPwuwang_hujia && event.card && player.storage.JLPwuwang_hujia.includes(event.card) && (event.name != 'damage' || event.notLink());
          },
          content() {
            player.storage.JLPwuwang_hujia.remove(trigger.card);
            if (!player.storage.JLPwuwang_hujia.length) player.removeSkill('JLPwuwang_hujia');
          },
          ai: {
            nohujia: true,
            skillTagFilter(player, tag, arg) {
              return true;
            },
          },
          _priority: 1201,
        },
        skill: {
          init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = [];
            player.addSkillBlocker(skill);
          },
          onremove(player, skill) {
            player.removeSkillBlocker(skill);
            delete player.storage[skill];
          },
          skillBlocker(skill, player) {
            let info = get.info(skill);
            return info && !info.charlotte && !info.hiddenSkill && !info.zhuSkill && !info.juexingji && !info.limited && !info.dutySkill && !get.is.locked(skill); //普通技能
            //return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
          },
          marktext: '妄',
          intro: {
            name: '无妄·普通技能',
            content(storage, player, skill) {
              var list = player.getSkills(null, false, false).filter(function (i) {
                return lib.skill.JLPwuwang_skill.skillBlocker(i, player);
              });
              var str = '<li>【无妄】封锁的技能:' + get.translation(list);
              var skills_false = lib.skill.JLPwumeng.skills_false([player]);
              if (skills_false.length) str += '<li>所有失效的技能:' + get.translation(skills_false);
              var skills_true = lib.skill.JLPwumeng.skills_true([player]);
              if (skills_true.length) str += '<li>未失效的技能:' + get.translation(skills_true);
              return str;
            },
          },
          trigger: {
            player: ['damage', 'damageCancelled', 'damageZero'],
            source: ['damage', 'damageCancelled', 'damageZero'],
            target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd', 'eventNeutralized'],
            global: ['useCardEnd'],
          },
          firstDo: true,
          charlotte: true,
          silent: true,
          forced: true,
          popup: false,
          _priority: 12,
          filter(event, player) {
            return player.storage.JLPwuwang_skill && event.card && player.storage.JLPwuwang_skill.includes(event.card) && (event.name != 'damage' || event.notLink());
          },
          content() {
            player.storage.JLPwuwang_skill.remove(trigger.card);
            if (!player.storage.JLPwuwang_skill.length) player.removeSkill('JLPwuwang_skill');
          },
          _priority: 1201,
        },
      },
      mod: {
        aiValue(player, card, num) {
          if (card.name == 'ying' && player.getStorage('JLPwuwang').card != undefined) return num * 10;
        },
      },
      ai: {
        maixie_defend: true,
        effect: {
          target(card, player, target) {
            return;
            if (get.tag(card, 'damage')) {
              if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
              if (!target.hasFriend()) return;
              let list = target.getStorage('JLPwuwang'),
                l = Object.keys(list);
              if (!l.length) return;
              if (get.attitude(player, target) > 0) {
                return 4;
              } else {
                return [0, 0, 0, get.damageEffect(player, target, player, 'thunder')];
              }
            }
          },
        },
      },
    },
    JLPwuxiang: {
      trigger: {
        global: 'phaseBegin',
      },
      forced: true,
      filter(event, player) {
        let list = player.getStorage('JLPwuwang'),
          keys = Object.keys(list);
        if (!keys.length) return !player.getEquips('JLP_mengxiang').length;
        else {
          return !list[keys[0]](player);
        }
      },
      content() {
        'step 0';
        let list = player.getStorage('JLPwuwang'),
          keys = Object.keys(list);
        if (!keys.length) {
          if (!player.hasEnabledSlot('equip1')) return;
          var card = get.cardPile(function (card) {
            return card.name.search('JLP_mengxiang') != -1;
          }, 'field');
          if (!card) {
            for (var i of game.filterPlayer()) {
              var card = i.getCards('he', (card) => card.name.search('JLP_mengxiang') != -1)[0];
              if (card) break;
            }
          }
          if (!card) card = game.createCard2('JLP_mengxiang', 'heart', 6);
          game.playAudio('../extension/忽悠宇宙/audio/skill/JLPwuxiang4.mp3');
          player.$gain2(card, false);
          player.equip(card);
        } else {
          switch (keys[0]) {
            case 'card': {
              game.playAudio('../extension/忽悠宇宙/audio/skill/JLPwuxiang1.mp3');
              player.addSkillLog(lib.skill.JLPwuxiang.derivation[0]);
              lib.translate.JLPwuwang_info = '锁定技,你的初始牌为【影】.你受到伤害时、或一名角色的判定结果为黑色时,你改为将一个{<span class="thundertext" style="font-family: yuanli">首项</span>}当雷【杀】使用,目标角色本回合与{<span class="thundertext" style="font-family: yuanli">此项</span>}类型相同的事物失效.<span class="thundertext" style="font-family: yuanli"><li><s>①【影】</s><li>②护甲<li>③普通技能</span>';
              delete player.storage.JLPwuwang.card;
              break;
            }
            case 'hujia': {
              game.playAudio('../extension/忽悠宇宙/audio/skill/JLPwuxiang2.mp3');
              player.addSkillLog(lib.skill.JLPwuxiang.derivation[1]);
              lib.translate.JLPwuwang_info = '锁定技,你的初始牌为【影】.你受到伤害时、或一名角色的判定结果为黑色时,你改为将一个{<span class="thundertext" style="font-family: yuanli">首项</span>}当雷【杀】使用,目标角色本回合与{<span class="thundertext" style="font-family: yuanli">此项</span>}类型相同的事物失效.<span class="thundertext" style="font-family: yuanli"><li><s>①【影】</s><li><s>②护甲</s><li>③普通技能</span>';
              delete player.storage.JLPwuwang.hujia;
              break;
            }
            case 'skill': {
              game.playAudio('../extension/忽悠宇宙/audio/skill/JLPwuxiang3.mp3');
              player.addSkillLog(lib.skill.JLPwuxiang.derivation[2]);
              lib.translate.JLPwuwang_info = '锁定技,你的初始牌为【影】.你受到伤害时、或一名角色的判定结果为黑色时,你改为将一个{<span class="thundertext" style="font-family: yuanli">首项</span>}当雷【杀】使用,目标角色本回合与{<span class="thundertext" style="font-family: yuanli">此项</span>}类型相同的事物失效.<span class="thundertext" style="font-family: yuanli"><li><s>①【影】</s><li><s>②护甲</s><li><s>③普通技能</s></span>';
              delete player.storage.JLPwuwang.skill;
              break;
            }
          }
        }
      },
      derivation: ['JLPwunian', 'JLPwumeng', 'JLPwuwo'],
    },
    JLPwunian: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        global: 'phaseAfter',
      },
      forced: true,
      filter(event, player) {
        var list = [];
        for (var i = 2; i <= 5; i++) {
          if (player.hasEnabledSlot(i)) list.push('equip' + i);
        }
        return (
          list.length &&
          !game.hasPlayer(function (current) {
            var history = current.getHistory('useCard', function (evt) {
              if (!evt || !evt.targets || !evt.targets.includes(player)) return false;
              return true;
            });
            return history.length;
          })
        );
      },
      content() {
        'step 0';
        var list = [];
        for (var i = 2; i <= 5; i++) {
          if (player.hasEnabledSlot(i)) list.push('equip' + i);
        }
        list.sort();
        var next = player.chooseControl(list, 'cancel2');
        next.set('prompt', '废除一个装备栏');
        ('step 1');
        if (result.control != 'cancel2') {
          player.disableEquip(result.control);
          player.changeHujia(1);
        }
      },
    },
    JLPwumeng: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      init(player) {
        if (player == game.me) {
          _status.auto = true;
          ui.auto.hide();
          player.say('厌离浮世泡影,欣求净土常道');
          player.node.avatar.setBackgroundImage('extension/忽悠宇宙/image/character/JLP_leidianjiangjun.jpg');
        }
      },
      onremove(player) {
        if (player == game.me && (ui.auto.innerHTML == '托管' || _status.auto == true)) {
          _status.auto = false;
          ui.auto.show();
          player.say('我会成为,下一个『开始』');
          player.node.avatar.setBackgroundImage('extension/忽悠宇宙/image/character/JLP_leidianying.jpg');
        }
      },
      trigger: {
        player: 'useCardToTargeted',
      },
      filter(event) {
        if (event.card.name != 'sha' || !event.targets || !event.targets.length) return false;
        var skills_false = lib.skill.JLPwumeng.skills_false([event.target]);
        return skills_false.length;
      },
      forced: true,
      content() {
        'step 0';
        var skills_false = lib.skill.JLPwumeng.skills_false([trigger.target]);
        game.log(trigger.target, '失效的普通技能:', '#g' + skills_false.map((skill) => `【${get.translation(skill)}】`));
        event.videoId = lib.status.videoId++;
        var func = function (skills, id, target) {
          var dialog = ui.create.dialog('forcebutton');
          dialog.videoId = id;
          dialog.add('无梦:获得一个普通技能');
          for (var i = 0; i < skills.length; i++) {
            dialog.add(`<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【${get.translation(skills[i])}】</div><div>` + lib.translate[`${skills[i]}_info`] + '</div></div>');
          }
          dialog.addText(' <br> ');
        };
        if (player.isOnline()) player.send(func, skills_false, event.videoId);
        else if (player == game.me) func(skills_false, event.videoId);
        player.chooseControl(skills_false.concat('cancel2')).set('ai', () => {
          var controls = _status.event.controls;
          return controls[0];
        });
        ('step 1');
        if (result.control) {
          game.broadcastAll('closeDialog', event.videoId);
          player.addSkillLog(result.control);
        } else event.finish();
        ('step 1');
        var skills_true = lib.skill.JLPwumeng.skills_true([trigger.target]),
          skills_normal = lib.skill.JLPwumeng.skills_normal([player]);
        if (skills_true.length) game.log(trigger.target, '未失效的技能:', '#g' + skills_true.map((skill) => `【${get.translation(skill)}】`));
        if (skills_normal.length) game.log(player, '的普通技能:', '#g' + skills_normal.map((skill) => `【${get.translation(skill)}】`));
        if (skills_true.length && skills_normal.length) {
          event.videoId = lib.status.videoId++;
          var func = function (skills, id, target) {
            var dialog = ui.create.dialog('forcebutton');
            dialog.videoId = id;
            dialog.add('无梦:失去一个普通技能');
            for (var i = 0; i < skills.length; i++) {
              dialog.add(`<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【${get.translation(skills[i])}】</div><div>` + lib.translate[`${skills[i]}_info`] + '</div></div>');
            }
            dialog.addText(' <br> ');
          };
          if (player.isOnline()) player.send(func, skills_normal, event.videoId);
          else if (player == game.me) func(skills_normal, event.videoId);
          player.chooseControl(skills_normal).set('ai', () => {
            var controls = _status.event.controls;
            let list = controls.filter((skill) => skill != 'JLPwumeng');
            if (controls.length > 1) return list.randomGet();
            else return controls[0];
          });
        } else event.finish();
        ('step 2');
        if (result.control) {
          game.broadcastAll('closeDialog', event.videoId);
          player.removeSkillLog(result.control);
        }
      },
      skills_false(targets, bool) {
        //对象组失效的技能,普通
        bool = true;
        let skills_false = [];
        for (let current of targets) {
          if (!current.storage.skill_blocker || !current.storage.skill_blocker.length) continue;
          for (let lock of current.storage.skill_blocker) {
            //遍历起封锁作用的技能
            let skill_no = current.getSkills(null, false, false).filter((skill) => lib.skill[lock].skillBlocker(skill, current)); //获得被封锁的技能
            skills_false.addArray(skill_no);
          }
        }
        if (!bool) return skills_false;
        let skills_false_normal = skills_false.filter((skill) => {
          let info = get.info(skill);
          return info && !info.charlotte && !info.hiddenSkill && !info.zhuSkill && !info.juexingji && !info.limited && !info.dutySkill && !get.is.locked(skill);
        });
        return skills_false_normal;
      },
      skills_true(targets, bool) {
        //对象组未失效的技能,普通
        //bool = true;
        let skills_true = [],
          skills_false = lib.skill.JLPwumeng.skills_false(targets, bool);
        for (let current of targets) {
          let skill_true = current.getSkills(null, false, false).filter(function (skill) {
            let info = get.info(skill);
            return info && !info.charlotte && !skills_false.includes(skill);
          });
          skills_true.addArray(skill_true);
        }
        if (!bool) return skills_true;
        let skills_true_normal = skills_true.filter((skill) => {
          let info = get.info(skill);
          return info && !info.charlotte && !info.hiddenSkill && !info.zhuSkill && !info.juexingji && !info.limited && !info.dutySkill && !get.is.locked(skill) && !skills_false.includes(skill);
        });
        return skills_true_normal;
      },
      skills_normal(targets, bol) {
        //对象组的普通技能
        let skills_normal = [];
        for (let current of targets) {
          let skill_normal = current.getSkills(null, false, false).filter(function (skill) {
            let info = get.info(skill);
            return info && !info.charlotte && !get.is.locked(skill) && !info.hiddenSkill && !info.zhuSkill && !info.juexingji && !info.limited && !info.dutySkill;
          });
          skills_normal.addArray(skill_normal);
        }
        return skills_normal;
      },
    },
    JLPwuwo: {
      audio: 'ext:忽悠宇宙/audio/skill:1',
      trigger: {
        player: 'useCardAfter',
      },
      filter(event, player) {
        return event.card && event.card.name == 'sha' && event.targets.length;
      },
      forced: true,
      content() {
        'step 0';
        var list = trigger.targets.filter((current) => current.hasSkill('JLPwuwo_log'));
        if (list.length) {
          event.targets = list.filter((current) => current.isIn() && current.countCards('he'));
          if (event.targets.length) event.goto(2);
          else event.finish();
        } else {
          player
            .chooseCard(true, 'he', (card) => {
              return player.canRecast(card);
            })
            .set('ai', (card) => {
              return 8 - get.value(card);
            })
            .set('prompt', '重铸一张牌且此【杀】不计入次数');
        }
        ('step 1');
        if (result.bool && result.cards) {
          player.recast(result.cards);
          player.getStat().card.sha--;
          event.finish();
        }
        ('step 2');
        event.target = event.targets.shift();
        player.choosePlayerCard(event.target, '选择要移动的牌', true, 'he');
        ('step 3');
        event.card = result.cards[0];
        var list = ['手牌区'];
        if (lib.card[event.card.name].type == 'equip' && player.isEmpty(lib.card[event.card.name].subtype)) list.push('装备区');
        if (lib.card[event.card.name].type == 'delay' && !player.storage._disableJudge && !player.hasJudge(event.card.name)) list.push('判定区');
        if (list.length == 1) event._result = { control: list[0] };
        else {
          player.chooseControl(list).set('prompt', `把${get.translation(event.card)}移动到你的什么区域`).ai = () => {
            return 0;
          };
        }
        ('step 4');
        if (result.control == '手牌区') {
          var next = player.gain(event.card);
          if (event.target) {
            next.source = event.target;
            next.animate = 'giveAuto';
          } else next.animate = 'draw';
        } else if (result.control == '装备区') {
          if (event.target) event.target.$give(event.card, event.target);
          player.equip(event.card);
        } else {
          if (event.target) event.target.$give(event.card, player);
          player.addJudge(event.card);
        }
        ('step 5');
        if (event.targets.length) event.goto(2);
      },
      group: ['JLPwuwo_use'],
      subSkill: {
        use: {
          trigger: {
            player: 'useCard1',
          },
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          charlotte: true,
          silent: true,
          content() {
            player.addTempSkill('JLPwuwo_hp');
          },
        },
        hp: {
          trigger: {
            global: 'changeHp',
          },
          charlotte: true,
          forced: true,
          popup: false,
          silent: true,
          content() {
            trigger.player.addTempSkill('JLPwuwo_log');
          },
        },
        log: { charlotte: true },
      },
    },
    //罗刹
    mengxingmou: {
      audio: 'mengnishang', // 技能音效
      trigger: {
        player: 'useCardAfter', // 时机:玩家使用卡牌
      },
      filter(event, player, cards) {
        if (get.itemtype(event.cards) != 'cards' || !event.cards || !event.cards.length || event.cards.length != 1) return false;
        return player.countCards('hes') > 0; //检测虚拟牌&&玩家有
      },
      forced: true, // 强制发动技能
      async content(event, trigger, player) {
        let bool0 = _status.currentPhase == player;
        const { cards, bool: bool1 } = await player.chooseCard('hes', [1, 1], true, `行谋:将一张牌当${bool0 ? '【铁索连环】使用/重铸' : '【火攻】使用'}`).forResult(); // 玩家选择一张牌
        if (bool1) {
          const { bool: bool2 } = await player
            .chooseUseTarget({ name: bool0 ? 'tiesuo' : 'huogong' }, cards)
            .set('forced', bool0 ? false : true)
            .set('prompt', `选择${bool0 ? '铁锁连环' : '火攻'}(${get.translation(cards)})的目标${bool0 ? '点取消重铸' : ''}`)
            .forResult();
          if (bool0 && !bool2) {
            player.recast(cards);
          }
        }
      },
    },
    mengzhangtu: {
      init(player) {
        // 初始化玩家的属性,设置"mengzhangtu"为阳
        player.storage.mengzhangtu = true;
      },
      audio: 'mengshouwang', // 技能音效
      mark: true, // 是否有标记
      // 是否锁定
      zhuanhuanji: true, // 是否可以转换技
      marktext: '☯', // 标记文本
      intro: {
        content(storage, player, skill) {
          // 根据转换技状态返回不同的描述
          return `当你使用${storage ? '' : '非'}伤害类锦囊牌时,你可以${storage ? `摸${game.countPlayer((current) => current.isLinked())}张牌.` : '令一名角色回复一点体力并弃置每个区域一张牌.'}`;
        },
      },
      popup: false,
      trigger: {
        player: 'useCard', // 时机:玩家使用卡牌
      },
      filter(event, player) {
        if (get.type2(event.card) != 'trick') return false;
        // 根据"mengzhangtu"属性的取值和卡牌类型以及标签来判断是否符合条件
        if (player.storage.mengzhangtu == true) {
          //阳
          return get.tag(event.card, 'damage') && game.countPlayer((current) => current.isLinked()) > 0;
        } else {
          //阴
          return !get.tag(event.card, 'damage');
        }
      },
      prompt: () => `张图:是否${_status.event.player.storage.mengzhangtu ? `摸${game.countPlayer((current) => current.isLinked())}张牌` : '令一名角色回复一点体力并弃置每个区域一张牌'}`,
      async content(event, trigger, player) {
        player.changeZhuanhuanji('mengzhangtu');
        if (!player.storage.mengzhangtu) {
          player.draw(game.countPlayer((current) => current.isLinked())); // 如果"mengzhangtu"为true,则摸牌 // 玩家摸取对应数量的牌
        } else {
          const { bool, targets } = await player.chooseTarget('张图:令一名角色回复一点体力并弃置每个区域一张牌', true).forResult(); // 否则玩家选择目标
          targets[0].recover();
          let num = 0;
          if (targets[0].countCards('h')) num++;
          if (targets[0].countCards('e')) num++;
          if (targets[0].countCards('j')) num++;
          if (num > 0) {
            const { links } = await player
              .choosePlayerCard('弃置每个区域各一张牌', targets[0], num, 'hej', true)
              .set('filterButton', function (button) {
                for (var i = 0; i < ui.selected.buttons.length; i++) {
                  if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                }
                return true;
              })
              .forResult();
            if (links && links.length) {
              targets[0].discard(links);
            }
          }
        }
      },
    },
    //娜塔莎
    mengjiuhu: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      marktext: '护',
      intro: {
        name: '救护', // 技能名称
        name2: '护',
        content: '娜塔莎的回合开始时回复体力或摸牌', // 技能描述
      },
      enable: 'phaseUse', // 技能可在出牌阶段使用
      usable: 1, // 每回合可以使用一次
      filter(event, player) {
        return game.countPlayer((current) => current.isDamaged());
      },
      filterCard(card) {
        return get.color(card) == 'red'; // 过滤红色牌
      },
      filterTarget(card, player, target) {
        return target.isDamaged(); // 过滤受伤角色
      },
      content() {
        target.recover(); // 目标角色回复一点体力
        target.addMark('mengjiuhu', 1); // 给目标角色添加<护>标记
      },
      group: ['mengjiuhu_sub'], // 子技能组
      subSkill: {
        sub: {
          audio: 'mengjiuhu',
          trigger: {
            player: ['phaseBegin'], // 当玩家的回合开始时触发
          },
          filter(event, player) {
            return game.hasPlayer((current) => current.hasMark('mengjiuhu')); // 当场上有拥有<护>标记的角色时过滤条件成立
          },
          forced: true, // 强制发动技能
          firstDo: true,
          async content(event, trigger, player) {
            let targets = game.filterPlayer((current) => current.hasMark('mengjiuhu')); // 选择拥有<护>标记的角色
            while (targets.length) {
              let target = targets.shift();
              await target.chooseDrawRecover(true).set('num1', 1).set('num2', 1);
              target.removeMark('mengjiuhu', 1);
            }
          },
        },
      },
    },
    mengyizhe: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: 'recoverBegin', // 当有角色开始回复体力时触发
      },
      filter(event, player) {
        return player.countCards('he') > 0; // 筛选条件:拥有手牌或装备区的牌
      },
      forced: true,
      async content(event, trigger, player) {
        const { bool } = await player
          .chooseToDiscard(get.prompt2('mengyizhe'), 'he')
          .set('ai', () => get.attitude(player, trigger.player) > 0 && trigger.player.getDamagedHp() > 1)
          .forResult();
        if (bool) {
          trigger.num++; // 如果成功弃置牌,则使回复量额外增加1
          trigger.player.removehyyzBuff(false); // 移除玩家身上的所有buff
          player.draw();
        }
      },
    },
    //景元
    mengkanxing: {
      mark: true, // 拥有标记
      audio: 'xtshenjun', // 技能发动音效
      intro: {
        content: 'expansion', // 技能描述
        markcount: 'expansion', // 标记数量描述
      },
      trigger: {
        player: 'loseAfter',
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'roundStart'], // 当玩家失去卡牌时触发
      },
      forced: true,
      locked(skill, player) {
        if (_status.event.name == 'roundStart') return true;
        return false;
      },
      preHidden: true,
      filter(event, player) {
        if (event._roundStart) {
          return game.roundNumber > 1 && player.getExpansions('mengkanxing').length; // 筛选条件:当前轮次数大于1且武将牌上拥有<堪行>牌
        } else {
          if (event.name == 'lose' && event.getParent(3).skill == 'mengkanxing') return false; // 如果是<堪行><遣将>技能触发的失去卡牌,则不触发本技能
          if (event.name == 'addToExpansion' && event.getParent(2).skill == 'mengkanxing') return false;
          if (event.name == 'gain' && event.player == player) return false;
          var evt = event.getl(player);
          return evt && evt.cards2 && evt.cards2.length;
        }
      },
      async content(event, trigger, player) {
        if (trigger._roundStart) {
          let cards = player.getExpansions('mengkanxing'),
            count = cards.length; // 获取扩展区中的<堪行>牌
          player.loseToDiscardpile(cards); // 弃置所有<堪行>牌
          while (count > 0) {
            count--;
            const { bool } = await player.chooseUseTarget({ name: 'sha', nature: 'thunder' }).forResult(); // 玩家使用一张雷属性杀
            if (!bool) return;
          }
        } else {
          let count = trigger.getl(player).cards2.length; // 记录失去卡牌的数量
          while (count > 0) {
            count--;
            player.draw(); // 玩家摸一张牌
            if (player.countCards('h') > 0) {
              const { cards } = await player.chooseCard('h', '将一张牌置于武将牌上作为<神君>', true).forResult(); // 玩家选择一张手牌并置于武将牌上作为<神君>
              if (cards && cards.length) {
                player.addToExpansion(cards, player, 'giveAuto').gaintag.add('mengkanxing'); // 将选择的牌添加到武将牌上
              }
            }
          }
        }
      },
    },
    mengqianjiang: {
      audio: 'xtzhankan',
      trigger: {
        player: 'damageAfter',
      },
      forced: true,
      async content(event, trigger, player) {
        if (player.getExpansions('mengkanxing').length) {
          const { links } = await player.chooseCardButton(player.getExpansions('mengkanxing'), true).forResult();
          if (links && links.length) {
            player.loseToDiscardpile(links);
          }
          player.recover();
        } else {
          player.draw();
        }
      },
    },
    //托马
    mengjingzheng: {
      audio: 'ext:忽悠宇宙/audio/skill:2',
      trigger: {
        global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter'],
      },
      forced: true, //自动发动
      filter(event, player) {
        if (player.hasSkill('mengjingzheng_sub')) return false;
        if (event.name.indexOf('lose') == 0) {
          if (event.parent.name == 'equip') {
            if (!event.cards.some((card) => get.type(card) == 'equip' && get.position(card) == 'd')) return false;
          } else {
            if (event.getParent(2).name == 'recast') return false; // 排除重铸操作引起的失去卡牌
            if (event.getlx === false || event.position != ui.discardPile) return false; // 排除特殊情况下的卡牌失去
          }
        } else {
          var evt = event.parent;
          if (evt.relatedEvent && ['useCard', 'respond'].includes(evt.relatedEvent.name)) return false; // 排除与使用卡牌相关的事件
        }
        for (var i of event.cards) {
          var owner = false;
          if (event.cards && event.cards.includes(i)) owner = event.player;
          let number = i.number;
          if ([1, 11, 12, 13].includes(number) && !get.owner(i)) return true; // 有点数为1、11、12、13的卡牌
        }
        return false;
      },
      async content(event, trigger, player) {
        let cards = [];
        for (var i of trigger.cards) {
          var owner = false;
          if (trigger.cards && trigger.cards.includes(i)) owner = trigger.player;
          if ([1, 11, 12, 13].includes(i.number) && !get.owner(i)) cards.push(i);
        }
        if (cards && cards.length) player.gain(cards, 'gain2');
        if (
          player.canMoveCard(
            null,
            false,
            game.filterPlayer((i) => i != player),
            player,
            (card) => get.position(card) == 'j'
          )
        ) {
          await player.moveCard(
            `精政:将其他角色判定区里的牌移动至你的判定区`,
            game.filterPlayer((i) => i != player),
            player,
            (card) => {
              return get.position(card) == 'j';
            }
          );
          //让游戏停顿一会儿,防止各种结算问题
        }
      },
      mod: {
        aiValue(player, card, num) {
          if ([1, 11, 12, 13].includes(card.number)) return num / 10;
        },
      },
      subSkill: {
        sub: {
          mark: true,
          intro: {
            content: '精政无效',
          },
        },
      },
    },
    menghuchi: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        global: 'useCardToTargeted', // 当有卡牌指向其他角色时触发该技能
      },
      filter(event, player) {
        // 根据不同情况返回不同的过滤条件
        if (player.hasSkill('menghuchi_sub')) return false;
        if (!player.canCompare(event.player) || event.targets.length != 1) return false; //玩家可以和来源拼点,且目标为一
        return event.targets[0] == player || player.inRange(event.targets[0]);
      },
      logTarget: 'player',
      async content(event, trigger, player) {
        const { bool } = await player.chooseToCompare(trigger.player).forResult(); // 玩家与来源进行拼点
        if (bool) {
          trigger.targets.length = 0; // 如果玩家赢了,则清空使用卡牌的目标列表
          //trigger.parent.triggeredTargets1.length = 0; // 目标列表=0(就是没了)
          player.addTempSkill('menghuchi_sub');
          trigger.parent.excluded.addArray(game.filterPlayer());
        } else {
          player.addTempSkill('mengjingzheng_sub'); // 否则,获得一个临时技能"mengjingzheng_sub"(也就是令精政失效)
        }
      },
      subSkill: {
        sub: {
          mark: true,
          intro: {
            content: '护持无效',
          },
        },
      },
    },
    //迪卢克
    mengniyan: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      enable: 'phaseUse', // 可以在出牌阶段使用
      usable: 1, // 每回合可使用1次
      position: 'he', // 从手牌或装备区中选择
      filterCard: {
        color: 'red', // 只能选择红色牌
      },
      filterTarget(card, player, target) {
        return target != player && player.canUse('sha', target, false);
      },
      filter(event, player) {
        return player.countCards('he', { color: 'red' }) > 0; // 只有当玩家有红色牌时才能使用该技能
      },
      async content(event, trigger, player) {
        if (event.target.isAlive()) {
          await player.useCard({ name: 'sha', nature: 'fire' }, event.target, false);
        }
        if (event.target.isAlive() && player.canUse('sha', event.target, false)) {
          await player.useCard({ name: 'sha', nature: 'fire' }, event.target, false);
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengniyan2.mp3');
        }
        if (event.target.isAlive() && player.canUse('sha', event.target, false)) {
          await player.useCard({ name: 'sha', nature: 'fire' }, event.target, false);
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengniyan3.mp3');
        }
      },
      ai: {
        order: 9,
        result: {
          target: -4.8,
        },
      },
    },
    mengliming: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      enable: 'phaseUse', //出牌阶段
      round: 2, //每两轮限一次
      filterTarget(card, player, target) {
        //选择目标条件
        if (player == target) return false; //玩家不能是目标
        return player.inRange(target); //目标要在玩家的攻击范围内
      },
      content() {
        target.damage(2, 'fire'); //对目标造成两点火焰伤害
      },
      ai: {
        order: 9,
        result: {
          target: -4,
        },
      },
    },
    //藿藿
    JLPweiqie: {
      trigger: {
        target: 'useCardToTarget',
      },
      check(event, player) {
        return -get.attitude(player, event.player);
      },
      filter(event, player) {
        if (!event.targets || event.targets.length != 1) return false;
        if (event.card.name != 'sha') return false;
        if (get.itemtype(event.cards) == 'cards') return !player.hasJudge('lebu');
        return true;
      },
      async content(event, trigger, player) {
        game.playAudio('../extension/忽悠宇宙/audio/skill/xtsuiyang_buff' + [3, 4].randomGet());
        trigger.card.name = 'lebu';
      },
    },
    JLPxvxing: {
      audio: 'xtqushen',
      trigger: {
        player: 'phaseZhunbeiBegin',
      },
      forced: true,
      filter(event, player) {
        return game.hasPlayer((current) => current.countCards('hej'));
      },
      async content(event, trigger, player) {
        const { targets } = await player
          .chooseTarget(
            get.prompt('JLPxvxing'),
            '令一名角色将一个区域内的所有牌当任意一张普通锦囊牌使用',
            '目标包含你,其回复1点体力;</br>目标数大于其体力值,对你造成1点伤害',
            (card, player, target) => {
              return target.countCards('hej');
            },
            (target) => {
              const att = get.attitude(_status.event.player, target);
              return att;
            }
          )
          .forResult();
        if (targets && targets.length) {
          let target = targets[0];
          let position = [];
          if (target.countCards('h')) position.push('手牌区');
          if (target.countCards('e')) position.push('装备区');
          if (target.countCards('j')) position.push('判定区');
          const { control } = await target
            .chooseControl(position)
            .set('prompt', `###将一个区域的牌当任意锦囊牌使用###目标包含藿藿,你回复1点体力;</br>目标数大于${target.hp},对藿藿造成1点伤害`)
            .set('ai', () => {
              let player = _status.event.player;
              if (position.includes('判定区')) return '判定区';
              if (position.length == 1) return position[0];
              let cards1 = player.getCards('e');
              let num1 = cards1.map((a) => get.value(a)).reduce((a, b) => a + b);
              let cards2 = player.getCards('h');
              let num2 = cards2.map((a) => get.value(a)).reduce((a, b) => a + b);
              if (num1 > num2) return '手牌区';
              return position[0];
            })
            .forResult();
          if (control) {
            game.trySkillAudio('xtsuiyang', player);
            let map = {
              手牌区: 'h',
              装备区: 'e',
              判定区: 'j',
            };
            let list = [];
            for (var i = 0; i < lib.inpile.length; i++) {
              let name = lib.inpile[i],
                card = {
                  name: name,
                };
              if (get.type(name) != 'trick') continue;
              if (!target.hasUseTarget(card)) continue;
              if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
            }
            const { links } = await target
              .chooseButton(true, [`###选择一张牌###目标包含藿藿,其回复1点体力;</br>目标数大于${target.hp},对藿藿造成1点伤害`, [list, 'vcard']])
              .set('ai', function (button) {
                return get.value({
                  name: button.link[2],
                });
              })
              .forResult();
            if (links && links.length) {
              let cards = target.getCards(map[control]);
              target.chooseUseTarget(
                {
                  name: links[0][2],
                  nature: links[0][3],
                },
                cards.slice(),
                true
              );
            }
          }
        }
      },
      group: ['JLPxvxing_tar'],
      subSkill: {
        tar: {
          trigger: {
            global: ['useCardAfter'],
          },
          forced: true,
          charlotte: true,
          filter(event, player) {
            return event.getParent(2).name == 'JLPxvxing';
          },
          async content(event, trigger, player) {
            if (trigger.targets.includes(player)) {
              game.playAudio('../extension/忽悠宇宙/audio/skill/xtsuiyang_buff' + [1, 2].randomGet());
              player.line('green', trigger.player);
              trigger.player.recover();
            }
            if (trigger.targets.length > trigger.player.hp) {
              trigger.player.line('fire', player);
              player.damage(trigger.player);
            }
          },
        },
      },
    },
    //卡莲
    mengguaili: {
      trigger: {
        source: ['damageSource'],
      },
      logTarget: 'player',
      filter(event, player) {
        return event.player.isAlive();
      },
      async content(event, trigger, player) {
        event.count = Math.min(trigger.num, 9);
        while (true) {
          event.count--;
          trigger.player.loseHp();
          if (!event.count) return;
          const { bool } = await player.chooseBool(get.prompt('mengguaili', trigger.player)).forResult();
          if (!bool) return;
        }
      },
    },
    mengshengnv: {
      trigger: {
        global: ['dyingAfter'],
      },
      filter(event, player) {
        return event.player != player && event.player.isAlive();
      },
      logTarget: 'player',
      async content(event, trigger, player) {
        trigger.player.draw();
        player.recover();
        if (get.mode() == 'identity' && player.isZhu) {
          player.gainMaxHp();
        }
      },
    },
    mengxinsheng: {
      trigger: {
        player: 'dieBegin',
      },
      filter(event, player) {
        if (!player.hasZhuSkill('mengxinsheng')) return false;
        return event.parent.name == 'dying' && player.isIn();
      },
      limited: true,
      zhuSkill: true,
      async content(event, trigger, player) {
        player.awakenSkill('mengxinsheng');
        trigger.cancel();
        player.recover(3);
      },
      mark: true,
      intro: {
        content: 'limited',
      },
      init: (player, skill) => (player.storage[skill] = false),
    },
    //心海
    mengchengxin: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      init(player) {
        player.storage.mengchengxin = ['h', 'e', 'j'];
      },
      hiddenCard(player, name) {
        let map = player.getStorage('mengchengxin');
        for (var i in map) {
          if (!player.countCards(i) || map[i]) continue;
          var cards = player.getCards(i);
          var mod2 = game.checkMod(cards[0], player, 'unchanged', 'cardEnabled2', player);
          if (mod2 === false) continue;
          return get.type(name) == 'trick';
        }
        return false;
      },
      enable: 'chooseToUse',
      filter(event, player) {
        if (player.storage.mengchengxin.some((q) => player.countCards(q))) {
          for (var i in lib.card) {
            var info = lib.card[i];
            if (info.mode && !info.mode.includes(lib.config.mode)) continue;
            if (!info.content) continue;
            if (info.type == 'trick' && event.filterCard({ name: i }, player, event)) {
              return true;
            }
          }
          for (var i of player.getCards('j', (card) => (card.viewAs || card.name) == 'xumou_jsrg')) {
            if (event.filterCard({ name: i.name }, player, event)) {
              return true;
            }
          }
        }
        return false;
      },
      //每轮每个区域限一次,你可以将一个区域的所有牌当做任意一张智囊牌或蓄谋牌使用.此牌结算完成后,若你区域内的牌数不小于此牌的实体牌数,你可以用此牌的实体牌蓄谋
      chooseButton: {
        //QQQ
        dialog(event, player) {
          var position = [];
          for (var i of player.storage.mengchengxin) {
            if (player.countCards(i)) {
              position.push(i);
            }
          }
          var list = [];
          for (var i in lib.card) {
            var info = lib.card[i];
            if (info.mode && !info.mode.includes(lib.config.mode)) continue;
            if (!info.content) continue;
            if (info.type == 'trick' && event.filterCard({ name: i }, player, event)) {
              list.add(i);
            }
          }
          for (var i of player.getCards('j', (card) => (card.viewAs || card.name) == 'xumou_jsrg')) {
            if (event.filterCard({ name: i.name }, player, event)) {
              list.add(i.name);
            }
          }
          return ui.create.dialog('澄心', '牌源区域', [position, 'tdnodes'], '智囊', [list, 'vcard'], 'hidden');
        },
        select: 2,
        filter(button) {
          if (ui.selected.buttons.length) return typeof ui.selected.buttons[0].link != typeof button.link;
          return true;
        },
        check(button) {
          if (typeof button.link == 'string') return 1;
          return _status.event.player.getUseValue({ name: button.link[2] }) + 1;
        },
        backup(links, player) {
          const position = links.find((q) => typeof q == 'string');
          const name = links.find((q) => Array.isArray(q))[2];
          const cards = player.getCards(position);
          return {
            filterCard: () => false,
            cards: cards,
            position: position,
            selectCard: -1,
            viewAs: {
              name: name,
            },
            precontent() {
              player.storage.mengchengxin.remove(lib.skill.mengchengxin_backup.position);
              player.when({ global: 'roundStart' }).then(() => {
                player.storage.mengchengxin = ['h', 'e', 'j'];
              });
            },
          };
        },
        prompt(links, player) {
          let map = {
            h: '手牌区',
            e: '装备区',
            j: '判定区',
          };
          return `将${map[links[0]]}的牌当做${get.translation(links[1][2])}使用`;
        },
      },
      ai: {
        order: 12,
        result: {
          player: 1,
        },
      },
      group: ['mengchengxin_1'],
      subSkill: {
        1: {
          audio: 'mengchengxin',
          trigger: {
            player: 'useCardAfter',
          },
          filter(event, player) {
            return event.skill && event.skill == 'mengchengxin_backup' && player.countCards('hej') >= event.cards.length && !player.isDisabledJudge();
          },
          prompt: '是否将这些牌蓄谋?',
          async content(event, trigger, player) {
            trigger.cards.map((card) => {
              player.addJudge(
                {
                  name: 'xumou_jsrg',
                },
                card
              );
            });
          },
        },
      },
    },
    mengshouyuan: {
      audio: 'ext:忽悠宇宙/audio/skill:3',
      trigger: {
        player: 'loseAfter',
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
      },
      filter(event, player) {
        var evt = event.getl(player);
        if (!evt) return;
        return (evt.js && evt.js.length && !player.countCards('j')) || (evt.hs && evt.hs.length && !player.countCards('h')) || (evt.es && evt.es.length && !player.countCards('e'));
      },
      equip(player, num) {
        if (!num) return;
        if (!player.hasEmptySlot()) return;
        for (var i = 1; i < 7; i++) {
          if (player.hasEmptySlot(i)) {
            var sub = 'equip' + i,
              card = get.cardPile(function (card) {
                return get.subtype(card, false) == sub && !get.cardtag(card, 'gifts') && player.canEquip(card);
              });
            if (card) {
              num--;
              player.$gain2(card);
              player.equip(card);
              if (!num) return;
            }
          } else break;
        }
      },
      hand(player, num) {
        if (!num) return;
        if (player.hasSkill('mengshouyuan_h')) return;
        player.draw(num);
      },
      judge(player, num) {
        if (!num) return;
        if (player.isDisabledJudge()) return;
        while (num > 0) {
          num--;
          player.addJudge(
            {
              name: 'xumou_jsrg',
            },
            get.cards()
          );
        }
      },
      async content(event, trigger, player) {
        const map = player.getStorage('mengchengxin');
        let num = 0;
        if (map) for (var i in map) if (map[i] == true) num++;
        const evt = trigger.getl(player);
        if (evt.js && evt.js.length && !player.countCards('j')) {
          player.disableJudge();
          lib.skill.mengshouyuan.equip(player, num);
          lib.skill.mengshouyuan.hand(player, num);
        }
        if (evt.es && evt.es.length && !player.countCards('e')) {
          player.disableEquip('equip1');
          player.disableEquip('equip2');
          player.disableEquip('equip3');
          player.disableEquip('equip4');
          player.disableEquip('equip5');
          lib.skill.mengshouyuan.hand(player, num);
          lib.skill.mengshouyuan.judge(player, num);
        }
        if (evt.hs && evt.hs.length && !player.countCards('h')) {
          player.addSkill('mengshouyuan_h');
          lib.skill.mengshouyuan.equip(player, num);
          lib.skill.mengshouyuan.judge(player, num);
        }
      },
      group: ['mengshouyuan_hp'],
      subSkill: {
        hp: {
          trigger: {
            player: 'changeHp',
          },
          filter(event, player) {
            return event.num != 0;
          },
          forced: true,
          async content(event, trigger, player) {
            let list = ['重置澄心'];
            if (player.isDisabledJudge()) list.push('判定区');
            if (player.hasDisabledSlot()) list.push('装备区');
            if (player.hasSkill('mengshouyuan_h')) list.push('手牌区');
            const { control } = await player.chooseControl(list).set('prompt', '重置技能或复原区域').forResult();
            if (!control) return;
            switch (control) {
              case '重置澄心': {
                player.storage.mengchengxin = ['h', 'e', 'j'];
                break;
              }
              case '判定区': {
                player.enableJudge();
                break;
              }
              case '装备区': {
                var k = [];
                for (var i = 1; i < 6; i++) {
                  for (var j = 0; j < player.countDisabledSlot(i); j++) {
                    k.push(i);
                  }
                }
                if (k.length) player.enableEquip(k);
                break;
              }
              case '手牌区': {
                player.removeSkill('mengshouyuan_h');
                break;
              }
            }
          },
        },
        h: {
          init(player) {
            player.discard(player.getCards('h'));
          },
          trigger: {
            player: 'gainBefore',
            target: 'gift',
          },
          mark: true,
          marktext: '✋',
          intro: {
            content: '手牌区已废除',
          },
          forced: true,
          slient: true,
          charlotte: true,
          _priority: null,
          firstDo: true,
          filter(event, player) {
            if (event.giver == player) return false;
            if (event.name == 'gift') return event.target != player;
            if (event.source && event.source == player) return false;
            return event.getParent(2).name != 'mengshouyuan_h';
          },
          content() {
            'step 0';
            game.trySkillAudio('mengshouyuan', player);
            if (trigger.getParent(2).name == 'useCard') {
              trigger.getParent(2).targets.remove(player);
              trigger.getParent(2).excluded.add(player);
            }
            if (trigger.name == 'gift') {
              trigger.deniedGift.add(trigger.card);
              trigger.deniedGifts = trigger.cards;
            }
            ('step 1');
            var cards = trigger.cards;
            if (get.owner(cards[0])) get.owner(cards[0]).discard(cards);
            game.cardsDiscard(cards);
            ('step 2');
            if (trigger.name == 'gain' && trigger.getg(player).length) {
              player.loseToDiscardpile(trigger.cards);
            }
            ('step 3');
            trigger.cancel();
            ('step 4');
            if (trigger.bool) trigger.bool = false;
            if (trigger.cards) trigger.cards = [];
            if (trigger.links) trigger.links = [];
            if (trigger.buttons) trigger.buttons = {};
          },
          ai: {
            refuseGifts: true,
          },
        },
      },
    },
    //花火
    mengpogui: {
      trigger: {
        player: 'phaseDrawBegin2',
      },
      forced: true,
      filter(event, player) {
        return !event.numFixed;
      },
      content() {
        trigger.num = Math.max(player.getHandcardLimit() - player.countCards('h'), 0);
      },
      global: ['mengpogui_g'],
      subSkill: {
        g: {
          mod: {
            maxHandcard(player, num) {
              return (
                num +
                2 *
                game.countPlayer(function (current) {
                  return current.hasSkill('mengpogui');
                })
              );
            },
          },
        },
      },
    },
    mengzhiyv: {
      marktext: '鱼',
      intro: {
        name: '纸鱼',
        content: 'mark',
      },
      enable: 'phaseUse',
      filter(event, player) {
        return player.countMark('mengzhiyv') > 0;
      },
      filterTarget(card, player, target) {
        return player != target && !target.hasMark('mengzhiyv');
      },
      async content(event, trigger, player) {
        player.removeMark('mengzhiyv', 1);
        event.target.addMark('mengzhiyv', 1);
      },
      group: 'mengzhiyv_u',
      subSkill: {
        u: {
          trigger: {
            global: 'phaseBegin',
          },
          forced: true,
          filter(event, player) {
            return event.player == player ? true : event.player.hasMark('mengzhiyv');
          },
          async content(event, trigger, player) {
            if (trigger.player == player) {
              player.addMark('mengzhiyv', 2);
            } else {
              const { color } = await trigger.player.judge('mengzhiyv', () => 2).forResult();
              if (color) {
                if (color == 'red') trigger.player.damage('fire', 'nosource');
                else trigger.player.addTempSkill('mengzhiyv2', 'phaseUseBegin');
              }
            }
          },
        },
      },
    },
    mengzhiyv2: {
      init(player) {
        if (!player.countCards('h')) return;
        player.addToExpansion(player.getCards('h'), 'giveAuto', player).gaintag.add('mengzhiyv2');
      },
      intro: {
        markcount: 'expansion',
        mark(dialog, storage, player) {
          var cards = player.getExpansions('mengzhiyv2');
          if (player.isUnderControl(true)) dialog.addAuto(cards);
          else return `共有${get.cnNumber(cards.length)}张牌`;
        },
      },
      onremove(player) {
        var cards = player.getExpansions('mengzhiyv2');
        if (!cards.length) return;
        player.gain(cards, 'draw');
        game.log(player, `收回了${get.cnNumber(cards.length)}张<纸鱼>牌`);
      },
    },
    mengqianmian: {
      marktext: '能',
      intro: {
        name: '充能',
        content: 'mark',
      },
      trigger: {
        global: 'phaseUseBefore',
      },
      filter(event, player) {
        return player.countMark('mengqianmian') >= 4 && event.player.getHandcardLimit() > event.player.countCards('h');
      },
      async content(event, trigger, player) {
        trigger.player.drawTo(trigger.player.getHandcardLimit());
      },
      group: 'mengqianmian_u',
      subSkill: {
        u: {
          trigger: {
            global: 'judge',
          },
          forced: true,
          filter(event, player) {
            return event.skill && event.skill == 'mengzhiyv';
          },
          content() {
            player.addMark('mengqianmian', 1);
          },
        },
      },
    },
    //刃
    mengshuhu: {
      trigger: {
        player: 'damageAfter',
        source: 'damageSource',
      },
      forced: true,
      filter(event, player) {
        return (player.getAllHistory('damage').length + player.getAllHistory('sourceDamage').length) % 4 == 0;
      },
      async content(event, trigger, player) {
        const { targets } = await player
          .chooseTarget(lib.filter.notMe, get.prompt('mengshuhu'))
          .set('ai', (target) => get.damageEffect(player, target, player))
          .forResult();
        if (targets && targets.length) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/mengenci' + [1, 2, 3, 4, 5, 6].randomGet());
          targets[0].damage(player);
          player.recover();
        }
      },
    },
    mengdapi: {
      enable: 'phaseUse',
      round: 2,
      filter(event, player) {
        return player.countCards('h', (card) => get.type(card) == 'basic' && get.color(card) == 'black');
      },
      filterTarget(card, player, target) {
        return target != player;
      },
      filterCard: {
        color: 'black',
        type: 'basic',
      },
      position: 'h',
      check(card) {
        return get.value(card);
      },
      content() {
        let num = Math.ceil(player.maxHp / 2);
        if (player.hp > num) {
          player.damage(player.hp - num, player);
        } else player.recover(num - player.hp);
        targets[0].damage(2);
        game.playAudio('../extension/忽悠宇宙/audio/skill/mengwansi' + [1, 2].randomGet());
      },
      ai: {
        result: {
          target: -4,
        },
      },
      group: ['mengdapi_roundcount'],
    },
    //丹恒白露
    mengwugui: {
      init(player) {
        player.storage.mengwugui = {};
      },
      trigger: {
        player: 'useCard',
      },
      filter(event, player) {
        if (!lib.skill.mengwugui.choices.length) return false;
        let map = player.getStorage('mengwugui');
        let list = lib.skill.mengwugui.choices.slice();
        for (var i of list) {
          if (map[i[0]]) continue;
          switch (i[0]) {
            case 'damage':
              return true;
            case 'discard':
              if (player.countCards('he') >= 2) return true;
              break;
            case 'link':
              if (!player.isLinked()) return true;
              break;
            case 'recover':
              if (player.isDamaged()) return true;
              break;
            case 'draw':
              return true;
            case 're':
              if (player.isLinked() || player.isTurnedOver()) return true;
              break;
          }
        }
        return false;
      },
      async content(event, trigger, player) {
        let dialog = ui.create.dialog('无归:选择一项', 'hidden');
        dialog.add([lib.skill.mengwugui.choices.slice(), 'textbutton']);
        const { links } = await player
          .chooseButton(dialog)
          .set('filterButton', function (button, player) {
            let link = button.link;
            let map = player.getStorage('mengwugui');
            if (map[link]) return false;
            if (link == 'damage') return true;
            if (link == 'discard') return player.countCards('he') >= 2;
            if (link == 'link') return !player.isLinked();
            if (link == 'recover') return player.isDamaged();
            if (link == 'draw') return true;
            if (link == 're') return player.isLinked() || player.isTurnedOver();
          })
          .set('ai', function (button) {
            return button.link == lib.skill.mengwugui.choices.slice().randomGet();
          })
          .forResult();
        if (!links || !links.length) return;
        player.storage.mengwugui[links[0]] = true;
        player
          .when({
            global: 'phaseAfter',
          })
          .then(() => {
            player.storage.mengwugui = {};
          });
        switch (links[0]) {
          case 'damage':
            player.damage('thunder');
            break;
          case 'discard':
            player.chooseToDiscard('he', 2, true);
            break;
          case 'link':
            player.link(true);
            break;
          case 'recover':
            player.recover();
            break;
          case 'draw':
            player.draw(2);
            break;
          case 're': {
            if (player.isLinked()) player.link();
            if (player.isTurnedOver()) player.turnOver();
            break;
          }
        }
        const { targets } = await player
          .chooseTarget('无归:令一名其他角色执行其他项或进行【闪电】判定', lib.filter.notMe)
          .set('ai', (target) => -get.attitude(player, target))
          .forResult();
        if (!targets || !targets.length) return;
        player.line(targets[0], 'fire');
        let list = [];
        const choiceList = lib.skill.mengwugui.choices.slice();
        let choiceList2 = choiceList.map((link, n, array) => {
          link = link[1];
          let ok = true;
          if (array[n][0] == links[0]) {
            link += `(${get.translation(player)}已选)`;
            ok = false;
          }
          switch (choiceList[n][0]) {
            case 'damage':
              break;
            case 'discard':
              if (targets[0].countCards('he') < 2) ok = false;
              break;
            case 'link':
              if (targets[0].isLinked()) ok = false;
              break;
            case 'recover':
              if (targets[0].isDamaged()) ok = false;
              break;
            case 'draw':
              break;
            case 're':
              if (targets[0].isLinked() && targets[0].isTurnedOver()) ok = false;
              break;
          }
          if (ok) list.push('选项' + get.cnNumber(n + 1, true));
          else link = `<span style="opacity:0.5">${link}</span>`;
          return link;
        });
        list.push('判【闪电】');
        if (list.length) {
          const { control } = await targets[0]
            .chooseControl(list)
            .set('choiceList', choiceList2)
            .set('ai', () => list.randomGet())
            .forResult();
          if (control && control != '判【闪电】') {
            let choice = choiceList[lib.skill.mengwugui.getNum[control.slice(2)] - 1][0];
            switch (choice) {
              case 'damage':
                targets[0].damage('thunder');
                break;
              case 'discard':
                targets[0].chooseToDiscard('he', 2, true);
                break;
              case 'link':
                targets[0].link(true);
                break;
              case 'recover':
                targets[0].recover();
                break;
              case 'draw':
                targets[0].draw(2);
                break;
              case 're': {
                if (targets[0].isLinked()) targets[0].link();
                if (targets[0].isTurnedOver()) targets[0].turnOver();
                break;
              }
            }
          } else {
            targets[0].executeDelayCardEffect('shandian');
          }
        } else {
          game.log(targets[0], '没有能执行的选项');
        }
      },
      choices: [
        ['damage', '受到1点雷电伤害'],
        ['discard', '弃置两张牌'],
        ['link', '横置'],
      ],

      getNum: {
        一: 1,
        二: 2,
        三: 3,
        四: 4,
        五: 5,
        六: 6,
        七: 7,
        八: 8,
        九: 9,
        十: 10,
        十一: 11,
        十二: 13,
      },
    },
    menggushen: {
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return lib.skill.menggushen.choices.length;
      },
      chooseButton: {
        dialog(event, player) {
          var dialog = ui.create.dialog('顾神:选择一项', 'hidden');
          dialog.add([lib.skill.menggushen.choices.slice(), 'textbutton']);
          return dialog;
        },
        filter(button, player) {
          var link = button.link;
          if (link == 'damage') return true;
          if (link == 'discard') return player.countCards('he') >= 2;
          if (link == 'link') return !player.isLinked();
          if (link == 'recover') return player.isDamaged();
          if (link == 'draw') return true;
          if (link == 're') return player.isLinked() || player.isTurnedOver();
        },
        backup(links) {
          var next = get.copy(lib.skill.menggushen_backupx);
          next.choice = links[0];
          return next;
        },
        prompt(links) {
          if (links[0] == 'damage') return '受到1点雷电伤害';
          if (links[0] == 'discard') return '弃置两张牌';
          if (links[0] == 'link') return '横置';
          if (links[0] == 'recover') return '回复1点体力';
          if (links[0] == 'draw') return '摸两张牌';
          if (links[0] == 're') return '复原武将牌';
        },
      },
      subSkill: {
        backup: {},
        backupx: {
          selectCard: -1,
          selectTarget: -1,
          filterCard: () => false,
          filterTarget: () => false,
          multitarget: true,
          content() {
            'step 0';
            var choice = lib.skill.menggushen_backup.choice;
            event.choice = choice;
            switch (choice) {
              case 'damage':
                player.damage('thunder');
                break;
              case 'discard':
                player.chooseToDiscard('he', 2, true);
                break;
              case 'link':
                player.link(true);
                break;
              case 'recover':
                player.recover();
                break;
              case 'draw':
                player.draw(2);
                break;
              case 're': {
                if (player.isLinked()) player.link();
                if (player.isTurnedOver()) player.turnOver();
                break;
              }
            }
            ('step 1');
            if (!player.isIn() || !game.hasPlayer((current) => current != player)) event.finish();
            else player.chooseTarget('顾神:令一名其他角色执行此项,或点取消进行【闪电】判定', lib.filter.notMe).set('ai', (target) => get.attitude(player, target));
            ('step 2');
            if (result.bool) {
              var target = result.targets[0];
              event.target = target;
              player.line(target, 'green');
              switch (event.choice) {
                case 'damage':
                  target.damage('thunder');
                  break;
                case 'discard':
                  target.chooseToDiscard('he', 2, true);
                  break;
                case 'link':
                  target.link(true);
                  break;
                case 'recover':
                  target.recover();
                  break;
                case 'draw':
                  target.draw(2);
                  break;
                case 're': {
                  if (target.isLinked()) target.link();
                  if (target.isTurnedOver()) target.turnOver();
                  break;
                }
              }
            } else {
              player.executeDelayCardEffect('shandian');
            }
          },
        },
      },
      choices: [
        ['recover', '回复1点体力'],
        ['draw', '摸两张牌'],
        ['re', '复原武将牌'],
      ],
    },
    mengjuefeng: {
      trigger: {
        player: 'damageAfter',
        source: 'damageSource',
      },
      usable: 1,
      async content(event, trigger, player) {
        player.draw(2);
        if (trigger.source && trigger.source.isIn() && player.hasSkill('mengwugui') && player.hasSkill('menggushen')) {
          let { result } = await trigger.source.chooseControl('交换选项', `令${trigger.source == player ? '你' : get.translation(player)}控顶`).set('ai', () => `令${trigger.source == player ? '你' : get.translation(player)}控顶`);
          if (result.control) {
            if (result.control == '交换选项') {
              const choice1 = lib.skill.mengwugui.choices.slice(),
                choice2 = lib.skill.menggushen.choices.slice();
              let dialog = ui.create.dialog('交换上下两个选项', 'hidden');
              dialog.addText('无归');
              dialog.add([choice1, 'textbutton']);
              dialog.addText('顾神');
              dialog.add([choice2, 'textbutton']);
              const { links } = await player
                .chooseButton(dialog)
                .set('filterButton', function (button, player) {
                  if (ui.selected.buttons.length) {
                    let listx = _status.event.listx;
                    return (listx[0].some((link) => link[0] == ui.selected.buttons[0].link) && listx[1].some((link) => link[0] == button.link)) || (listx[0].some((link) => link[0] == button.link) && listx[1].some((link) => link[0] == ui.selected.buttons[0].link));
                  }
                  return true;
                })
                .set('selectButton', 2)
                .set('forced', true)
                .set('listx', [choice1, choice2])
                .forResult();
              if (links && links.length == 2) {
                let index1, index2;
                if (choice1.some((x) => x[0] == links[0])) {
                  for (var i = 0; i < choice1.length; i++) {
                    if (choice1[i][0] == links[0]) {
                      index1 = i;
                      break;
                    }
                  }
                  for (var i = 0; i < choice2.length; i++) {
                    if (choice2[i][0] == links[1]) {
                      index2 = i;
                      break;
                    }
                  }
                } else if (choice2.some((x) => x[0] == links[0])) {
                  for (var i = 0; i < choice1.length; i++) {
                    if (choice1[i][0] == links[1]) {
                      index1 = i;
                      break;
                    }
                  }
                  for (var i = 0; i < choice2.length; i++) {
                    if (choice2[i][0] == links[0]) {
                      index2 = i;
                      break;
                    }
                  }
                } else return;
                const str1 = lib.translate.mengwugui_info.replace(choice1[index1][1], choice2[index2][1]);
                const str2 = lib.translate.menggushen_info.replace(choice2[index2][1], choice1[index1][1]);
                lib.translate.mengwugui_info = str1;
                lib.translate.menggushen_info = str2;
                [lib.skill.mengwugui.choices[index1], lib.skill.menggushen.choices[index2]] = [lib.skill.menggushen.choices[index2], lib.skill.mengwugui.choices[index1]];
              } else return;
            } else if (player.countCards('he') > 0) {
              let { result } = await player.chooseCard('将一张牌控顶', true);
              if (result.bool) {
                player.lose(result.cards[0], ui.cardPile, 'insert');
                player.$throw(result.cards, 1000);
                game.log(player, '将一张牌置于牌堆顶');
              }
            }
          }
        }
      },
    },
    //温迪
    JLPjulan: {
      audio: 'mengliufeng',
      trigger: {
        global: 'roundStart',
      },
      filter(event, player) {
        return true;
      },
      async content(event, trigger, player) {
        const players = game.filterPlayer();
        for (let current of players) {
          let list = [];
          if (!current.isLinked()) list.push('横置并摸一张牌');
          if ((current.isLinked() || current.isTurnedOver()) && current.countCards('h')) list.push('复原并重铸手牌');
          if (current.countCards('he')) list.push('将一张牌给温迪,其可以令你恢拓');
          if (!list.length) continue;
          if (list.includes('横置并摸一张牌'));
          const { control } = await current
            .chooseControl(list)
            .set('prompt', '聚岚:选择一项')
            .set('ai', () => {
              const list = _status.event.listx;
              const tar = _status.event.player,
                player = _status.event.playerx;
              const zhu = game.findPlayer((i) => i.seatNum == 1);
              const att = get.attitude(tar, zhu);
              let str;
              if (zhu.isLinked()) {
                //主公横
                if (att < 0) {
                  //反贼
                  if (list.includes('复原并重铸手牌')) str = '复原并重铸手牌';
                } else {
                  if (list.includes('横置并摸一张牌')) str = '横置并摸一张牌';
                }
              } else {
                if (att < 0) {
                  //反贼
                  if (list.includes('横置并摸一张牌')) str = '横置并摸一张牌';
                } else {
                  if (list.includes('复原并重铸手牌')) str = '复原并重铸手牌';
                }
              }
              if (get.attitude(tar, player) > 0 && list.includes('将一张牌给温迪,其可以令你恢拓')) {
                str = '将一张牌给温迪,其可以令你恢拓';
              }
              if (str && list.includes(str)) return str;
              else return list.randomGet();
            })
            .set('listx', list)
            .set('playerx', player)
            .forResult();
          switch (control) {
            case '横置并摸一张牌': {
              current.link(true);
              current.draw();
              break;
            }
            case '复原并重铸手牌': {
              if (current.isLinked()) current.link();
              if (current.isTurnedOver()) current.turnOver();
              current.recast(current.getCards('h'));
              break;
            }
            default: {
              const { cards } = await current
                .chooseCard('将一张牌交给温迪', 'he', true)
                .set('ai', (card) => {
                  let val = get.value(card);
                  if (card.name == 'sha') val += 2;
                  return val;
                })
                .forResult();
              if (cards) {
                if (current != player) await current.give(cards, player);
                cards.map((card) => {
                  if (card.name == 'sha') player.addGaintag(card, 'JLPjulan');
                });
                let str = get.attitude(player, current) > 0 ? '✓' : '×';
                const { bool } = await player
                  .chooseBool(str + `是否令${get.translation(current)}恢拓？`)
                  .set('ai', () => get.translation(player, current))
                  .forResult();
                if (bool) {
                  const { color } = await current
                    .judge(function (card) {
                      if (current.hp == current.maxHp) {
                        if (get.color(card) == 'red') return -1;
                      }
                      if (get.color(card) == 'red') return 1;
                      return 0;
                    })
                    .forResult();
                  if (color) {
                    if (color == 'red') {
                      if (current.hp < current.maxHp) current.recover();
                    } else {
                      current.draw();
                    }
                  }
                }
              }
              break;
            }
          }
        }
      },
      group: 'JLPjulan_use',
      subSkill: {
        use: {
          trigger: {
            player: 'useCardBefore',
          },
          forced: true,
          charlotte: true,
          filter(event, player) {
            if (!event.cards || !event.cards.length) return false;
            if (!game.hasPlayer((current) => (current.isLinked() && !player.isLinked()) || (!current.isLinked() && player.isLinked()))) return false;
            return event.cards && event.cards.some((card) => card.hasGaintag('JLPjulan'));
            return player.hasHistory('lose', (evt) => {
              if (event != evt.parent) return false;
              for (var i in evt.gaintag_map) {
                if (evt.gaintag_map[i].includes('JLPjulan')) return true;
              }
              return false;
            });
          },
          content() {
            trigger.targets.addArray(game.filterPlayer((current) => (player.isLinked() && !current.isLinked()) || (!player.isLinked() && current.isLinked())));
          },
        },
      },
      mod: {
        targetInRange(card, player, target) {
          if (!card.cards) return;
          for (var i of card.cards) {
            if (i.hasGaintag('JLPjulan')) return true;
          }
        },
        cardUsable(card, player) {
          if (!card.cards) return;
          for (var i of card.cards) {
            if (i.hasGaintag('JLPjulan')) return true;
          }
        },
        ignoredHandcard(card, player) {
          if (card.hasGaintag('JLPjulan')) {
            return true;
          }
        },
        cardDiscardable(card, player, name) {
          if (name == 'phaseDiscard' && card.hasGaintag('JLPjulan')) {
            return false;
          }
        },
        aiUseful(player, card, num) {
          if (get.itemtype(card) == 'card') {
            if (card.hasGaintag('JLPjulan')) {
              return num + 10;
            }
          }
        },
        aiOrder() {
          lib.skill.JLPjulan.mod.aiUseful.apply(this, arguments);
        },
      },
    },
    JLPgongdan: {
      audio: 'menggexian',
      init(player) {
        player.storage.JLPgongdan = false;
      },
      mark: true,
      forced: true,
      zhuanhuanji: true,
      marktext: '☯',
      intro: {
        markcount(storage, player) {
          const key = lib.skill.JLPgongdan.key;
          const map = {
            醉酒并切换此牌的可响应状态: '醉酒',
            将此牌名改为铁索连环或决斗: '改名',
            所有目标替换为其中一个目标: '集火',
            重置琴心并令此牌不能被响应: '刷新',
          };
          return storage ? map[key[1]] : map[key[0]];
        },
        content(storage, player, skill) {
          const key = lib.skill.JLPgongdan.key;
          return `你使用【杀】时,${storage ? key[1] : key[0]},交换与琴心同类的一对选项.`;
        },
      },
      trigger: {
        player: 'useCard1',
      },
      filter(event, player) {
        return event.card && event.card.name == 'sha';
      },
      async content(event, trigger, player) {
        const key = lib.skill.JLPgongdan.key;
        if (player.storage.JLPgongdan) {
          if (key[1] == '重置琴心并令此牌不能被响应') {
            player.restoreSkill('JLPqinxin');
            trigger.directHit.addArray(game.filterPlayer());
            game.log('#g【弓胆·阴】', '#y重置', '#g【琴心】;', trigger.card, '不能被响应');
          } else {
            const { control } = await player
              .chooseControl('铁索连环', '决斗')
              .set('prompt', '将牌名改为铁索连环或决斗')
              .set('ai', () => (get.effect(trigger.target, { name: 'juedou' }, player, player) > 0 ? '决斗' : '铁索连环'))
              .forResult();
            if (control == '铁索连环') {
              trigger.card.name = 'tiesuo';
            } else {
              trigger.card.name = 'juedou';
            }
            game.log('#g【弓胆·阴】', '牌名改为', trigger.card);
          }
        } else {
          if (key[0] == '所有目标替换为其中一个目标') {
            const { targets } = await player
              .chooseTarget(
                '所有目标替换为其中一个目标',
                (card, player, target) => {
                  var trigger = _status.event.getTrigger();
                  return trigger.targets.includes(target);
                },
                true
              )
              .forResult();
            if (targets) {
              trigger.targets.map((tar) => (tar = targets[0]));
              game.log('#g【弓胆·阳】', '目标集中至', targets[0]);
            }
          } else {
            //酒的代码
            /* game.addVideo('jiuNode', player, true);
            if (!player.storage.jiu) player.storage.jiu = 0;
            player.storage.jiu += 1;
            game.broadcastAll(function (player) {
              player.addSkill('jiu');
              if (!player.node.jiu && lib.config.jiu_effect) {
                player.node.jiu = ui.create.div('.playerjiu', player.node.avatar);
                player.node.jiu2 = ui.create.div('.playerjiu', player.node.avatar2);
              }
            }, player); */
            //
            //喝酒
            if (!player.storage.jiu) player.storage.jiu = 0;
            player.storage.jiu += 1;
            //jiu
            if (!trigger.baseDamage) trigger.baseDamage = 1;
            trigger.baseDamage += player.storage.jiu;
            trigger.jiu = true;
            trigger.jiu_add = player.storage.jiu;
            //失去jiu
            if (player.node.jiu) {
              player.node.jiu.delete();
              player.node.jiu2.delete();
              delete player.node.jiu;
              delete player.node.jiu2;
            }
            delete player.storage.jiu;
            if (trigger.directHit.length) {
              trigger.directHit = [];
              game.log('#g【弓胆·阳】', '醉酒并切换为目标均可响应');
            } else {
              trigger.directHit.addArray(game.filterPlayer());
              game.log('#g【弓胆·阳】', '醉酒并切换为目标不可响应');
            }
          }
        }
        player.changeZhuanhuanji('JLPgongdan');
        const { control } = await player.chooseControl('交换<阳>', '交换<阴>').set('prompt', '交换【弓胆】和【琴心】的同名项').forResult();
        if (control == '交换<阳>') {
          let temp = lib.skill.JLPgongdan.key[0];
          lib.skill.JLPgongdan.key[0] = lib.skill.JLPqinxin.key[0];
          lib.skill.JLPqinxin.key[0] = temp;
        } else {
          let temp = lib.skill.JLPgongdan.key[1];
          lib.skill.JLPgongdan.key[1] = lib.skill.JLPqinxin.key[1];
          lib.skill.JLPqinxin.key[1] = temp;
        }
      },
      key: ['所有目标替换为其中一个目标', '重置琴心并令此牌不能被响应'],
    },
    JLPqinxin: {
      audio: 'mengbaizhan',
      init(player) {
        player.storage.JLPqinxin = 0;
      },
      mark: true,
      zhuanhuanji: 'number',
      marktext: '☯',
      intro: {
        markcount(storage, player) {
          const key = lib.skill.JLPqinxin.key;
          const map = {
            醉酒并切换此牌的可响应状态: '醉酒',
            将此牌名改为铁索连环或决斗: '改名',
            所有目标替换为其中一个目标: '集火',
            重置琴心并令此牌不能被响应: '刷新',
          };
          return `${player.awakenedSkills.includes('JLPqinxin') ? '×' : ''}${storage % 2 ? map[key[1]] : map[key[0]]}`;
        },
        content(storage, player, skill) {
          const key = lib.skill.JLPqinxin.key;
          return `你使用锦囊牌时,${storage % 2 ? key[1] : key[0]}.此牌造成伤害后,摸与之等量的牌,若手牌唯一最多,分配你超出的牌.`;
        },
      },
      prompt2() {
        let player = _status.event.player,
          storage = player.storage.JLPqinxin;
        const key = lib.skill.JLPqinxin.key;
        return `你使用锦囊牌时,${storage % 2 ? key[1] : key[0]}.此牌造成伤害后,摸与之等量的牌,若手牌唯一最多,分配你超出的牌.`;
      },
      trigger: {
        player: 'useCard1',
      },
      zhuanhuanji: true,
      filter(event, player) {
        return get.type2(event.card) == 'trick';
      },
      async content(event, trigger, player) {
        const key = lib.skill.JLPqinxin.key;
        const str = player.storage.JLPqinxin;
        if (str % 2) {
          //true
          if (key[1] == '重置琴心并令此牌不能被响应') {
            player.when('JLPqinxinAfter').then(() => {
              player.restoreSkill('JLPqinxin');
            });
            trigger.directHit.addArray(game.filterPlayer());
            game.log('#g【琴心·阴】', '#y重置', '#g【琴心】;', trigger.card, '不能被响应');
          } else {
            const { control } = await player
              .chooseControl('铁索连环', '决斗')
              .set('prompt', '将牌名改为铁索连环或决斗')
              .set('ai', () => (get.effect(trigger.target, { name: 'juedou' }, player, player) > 0 ? '决斗' : '铁索连环'))
              .forResult();
            if (control == '铁索连环') {
              trigger.card.name = 'tiesuo';
            } else {
              trigger.card.name = 'juedou';
            }
            game.log('#g【琴心·阴】', '牌名改为', trigger.card);
          }
        } else {
          //0246 false
          if (key[0] == '所有目标替换为其中一个目标') {
            const { targets } = await player
              .chooseTarget(
                '所有目标替换为其中一个目标',
                (card, player, target) => {
                  var trigger = _status.event.getTrigger();
                  return trigger.targets.includes(target);
                },
                true
              )
              .forResult();
            if (targets) trigger.targets.forEach((tar) => (tar = targets[0]));
            game.log('#g【琴心·阳】', '目标集中至', targets[0]);
          } else {
            game.addVideo('jiuNode', player, true);
            if (!player.storage.jiu) player.storage.jiu = 0;
            player.storage.jiu += 1;
            game.broadcastAll(function (player) {
              player.addSkill('jiu');
              if (!player.node.jiu && lib.config.jiu_effect) {
                player.node.jiu = ui.create.div('.playerjiu', player.node.avatar);
                player.node.jiu2 = ui.create.div('.playerjiu', player.node.avatar2);
              }
            }, player);
            if (trigger.directHit.length) {
              trigger.directHit = [];
              game.log('#g【琴心·阳】', '切换为目标均可响应');
            } else {
              trigger.directHit.addArray(game.filterPlayer());
              game.log('#g【琴心·阳】', '切换为目标不可响应');
            }
          }
        }
        player.changeZhuanhuanji('JLPqinxin');
        player.awakenSkill('JLPqinxin', true);
        player.addTempSkill('JLPqinxin_buff');
        trigger.card.storage.JLPqinxin = true;
      },
      key: ['醉酒并切换此牌的可响应状态', '将此牌名改为铁索连环或决斗'],
    },
    JLPqinxin_buff: {
      trigger: {
        global: 'damageEnd',
      },
      forced: true,
      filter(event, player) {
        return event.card && event.card.storage.JLPqinxin;
      },
      async content(event, trigger, player) {
        player.draw(trigger.num);
        while (player.countCards('h') > 0 && player.isMaxHandcard(true) && game.countPlayer((current) => current != player && current.isIn())) {
          const result = await player.chooseCardTarget({
            prompt: '将一张手牌交给其他角色',
            filterCard: true,
            filterTarget: lib.filter.notMe,
            position: 'h',
            forced: true,
            ai1(card) {
              if (
                get.tag(card, 'recover') &&
                !game.hasPlayer(function (current) {
                  return get.attitude(current, player) > 0 && !current.hasSkillTag('nogain');
                })
              )
                return 0;
              return 1 / Math.max(0.1, get.value(card));
            },
            ai2(target) {
              var player = _status.event.player,
                att = get.attitude(player, target);
              if (target.hasSkillTag('nogain')) att /= 9;
              return 4 + att;
            },
          }).forResult();
          if (result.bool) {
            player.line(result.targets[0], 'green');
            player.give(result.cards, result.targets[0]);
          }
        }
      },
    },
    //黄泉
    mengkuque: {
      audio: 'xtxuwu',
      trigger: {
        player: 'phaseZhunbeiBegin',
      },
      filter(event, player) {
        return player.hasEnabledSlot();
      },
      forced: true,
      async content(event, trigger, player) {
        let list = [];
        for (var i = 1; i <= 5; i++) {
          if (player.hasEnabledSlot('equip' + i)) list.push('equip' + i);
        }
        list.sort();
        const { control } = await player.chooseControl(list, 'cancel2').set('prompt', '废除一个装备栏').forResult();
        if (control != 'cancel2') {
          await player.disableEquip(control);
          player.draw(player.countDisabled());
          if (!player.hasEnabledSlot()) {
            player.addTempSkill('mengkuque2');
          }
        }
      },
    },
    mengkuque2: {
      mod: {
        globalFrom(from, to, distance) {
          return 1;
        },
      },
    },
    mengnailuo: {
      audio: 'xtlunshi',
      trigger: {
        player: 'phaseJieshuBegin',
      },
      filter(event, player) {
        return !player.hasEnabledSlot();
      },
      forced: true,
      content() {
        player.die();
      },
      group: ['mengnailuo_1', 'mengnailuo_2', 'mengnailuo_3'],
      subSkill: {
        1: {
          trigger: {
            player: 'phaseDrawBegin2',
          },
          filter(event, player) {
            return !event.numFixed && player.countDisabled() >= 1;
          },
          forced: true,
          content() {
            trigger.num += player.countDisabled();
          },
        },
        2: {
          forced: true,
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha' && player.countDisabled() >= 3) return num + player.countDisabled();
            },
          },
        },
        3: {
          init: (player) => (player.storage.mengnailuo_4 = 0),
          trigger: {
            player: 'useCard',
          },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && player.countDisabled() >= 5 && player.storage.mengnailuo_4 <= player.countDisabled();
          },
          forced: true,
          content() {
            player.storage.mengnailuo_4 = 1;
            for (let target of trigger.targets) {
              var id = target.playerid;
              var map = trigger.customArgs;
              if (!map[id]) map[id] = {};
              if (typeof map[id].extraDamage != 'number') {
                map[id].extraDamage = 0;
              }
              map[id].extraDamage++;
            }
            player
              .when({
                global: 'phaseEnd',
              })
              .then(() => {
                player.storage.mengnailuo_4 = 0;
              });
          },
        },
      },
    },
    //薪炎
    mengweizhu: {
      audio: 'mengliaohuang',
      trigger: {
        global: 'useCardAfter',
      },
      forced: true,
      filter(event, player) {
        //if (['delay', 'eauip'].includes(get.type(event.card))) return false;
        if (!player.countCards('h', { color: 'red' })) return false;
        return event.player == player || (event.targets && event.targets.includes(player));
      },
      async content(event, trigger, player) {
        player.showCards(player.getCards('h', { color: 'red' }), get.translation(player) + '因【危烛】展示');
        if (!player.countCards('h', { color: 'black' })) {
          trigger.player.damage(player, 'fire');
        }
        if (!player.countCards('h', (card) => get.type2(card) == get.type2(trigger.card))) return;
        const { cards } = await player
          .chooseCard('危烛:你可以重置一张类型相同的牌', [1, Infinity], (card) => player.canRecast(card) && get.type2(card) == get.type2(trigger.card))
          .set('ai', (card) => {
            return get.attitude(player, trigger.player) > 0 && get.value(card) > 8;
          })
          .forResult();
        if (cards) {
          let bool = false;
          if (cards.length == player.countCards('h')) bool = true;
          player.recast(cards);
          if (bool) {
            trigger.targets.map((tar) => {
              tar.damage(player, 'fire');
            });
          }
        }
      },
    },
    mengbinye: {
      audio: 'mengjingmang',
      trigger: {
        player: 'loseEnd',
      },
      filter(event, player) {
        if (Array.isArray(event.cards))
          for (var i of event.cards) {
            if (i.original == 'h') {
              const color = get.color(i);
              if (!player.countCards('h', { color: color }) && !player.getStorage('mengbinye').includes(color)) return true;
            }
          }
        return false;
      },
      forced: true,
      content() {
        if (Array.isArray(trigger.cards))
          for (var i of trigger.cards) {
            if (i.original == 'h') {
              const color = get.color(i);
              if (!player.countCards('h', { color: color }) && !player.getStorage('mengbinye').includes(color)) {
                player.markAuto('mengbinye', [color]);
              }
            }
          }
      },
      group: 'mengbinye_draw',
      subSkill: {
        draw: {
          trigger: {
            player: 'drawBegin',
          },
          _priority: -5,
          filter(event, player) {
            if (game.fixedPile) return false;
            if (event.num <= 0) return false;
            if (ui.cardPile.childNodes.length == 0) return false;
            return player.getStorage('mengbinye').length;
          },
          forced: true,
          async content(event, trigger, player) {
            let num = Math.min(player.getStorage('mengbinye').length, trigger.num);
            while (num > 0) {
              num--;
              let card = get.cardPile2((i) => {
                return player.canUse(i, player, false) && get.color(i) == player.getStorage('mengbinye')[0];
              });
              if (card) {
                player.unmarkAuto('mengbinye', [get.color(card)]);
                ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
              }
            }
          },
          _priority: -500,
        },
      },
    },
    //就离谱
    JLPjingsi: {
      trigger: {
        global: 'useCard',
      },
      forced: true,
      filter(event, player) {
        if (event.player != player && !event.targets.includes(player)) return false;
        return true;
      },
      async content(event, trigger, player) {
        let cards = player.getCards('h', (card) => card.suit == trigger.card.suit);
        if (cards.length) player.recast(cards);
        else {
          var card = get.cardPile2((card) => {
            return trigger.card.suit == card.suit;
          });
          if (card) {
            //player.gain(card, 'gain2');
            player.$gain2(card);
            player.addJudge({ name: 'xumou_jsrg' }, card);
          }
        }
      },
    },
    JLPqiuxin: {
      trigger: {
        global: 'useCardToPlayered',
      },
      filter(event, player) {
        if (['delay', 'equip'].includes(get.type(event.card))) return false;
        if (!event.target.countCards('h') || event.targets.length != 1) return false;
        return (event.target == player && event.target.countCards('h', { suit: event.card.suit })) || (event.player == player && !event.target.countCards('h', { suit: event.card.suit }));
      },
      forced: true,
      async content(event, trigger, player) {
        await trigger.target.showCards(trigger.target.getCards('h'), get.translation(trigger.target) + '因【求心】展示');
        if (trigger.target == player && trigger.target.countCards('h', { suit: trigger.card.suit })) {
          trigger.parent.excluded.add(trigger.target);
          game.trySkillAudio('xinpaiyi', player);
          player.say('顺我者,封侯拜将!');
          game.log(trigger.card, '对', trigger.target, '无效');
        }
        if (trigger.player == player && !trigger.target.countCards('h', { suit: trigger.card.suit })) {
          trigger.parent.directHit.add(trigger.target);
          game.trySkillAudio('xinpaiyi', player);
          player.say('逆我者,斧钺加身!');
          game.log(trigger.card, '对', trigger.target, '强中');
        }
      },
    },
    //芽衣
    mengwanzui: {
      trigger: {
        global: 'useCardToTarget',
      },
      filter(event, player) {
        if (event.targets.length != 1 || event.targets.includes(player)) return false;
        return player.storage.mengwanzui2.includes(event.card.name) && player.countCards('he', (card) => get.type2(card) == get.type2(event.card));
      },
      forced: true,
      async content(event, trigger, player) {
        const { cards } = await player.chooseToDiscard('弃置一张同类型牌,将此牌目标改为你', 'he', (card) => get.type2(card) == get.type2(trigger.card)).forResult();
        if (cards) {
          trigger.parent.targets = [player];
          trigger.targets = [player];
        }
      },
      group: 'mengwanzui2',
    },
    mengwanzui2: {
      init(player) {
        player.storage.mengwanzui2 = [];
      },
      onremove(player) {
        delete player.storage.mengwanzui2;
      },
      trigger: {
        global: 'useCard',
      },
      filter(event, player) {
        return event.targets && event.targets.includes(player);
      },
      charlotte: true,
      forced: true,
      content() {
        player.storage.mengwanzui2.add(trigger.card.name);
        player
          .when({
            global: 'roundStart',
          })
          .then(() => {
            player.storage.mengwanzui2 = [];
          });
      },
    },
    mengchangci: {
      trigger: {
        player: 'discard',
      },
      forced: true,
      usable: 1,
      async content(event, trigger, player) {
        const { bool } = await player.chooseBool('视为对本回合成为过牌的目标的所有角色使用一张【决斗】,依次与这些角色各摸一张牌且本轮你与其计算与对方的距离+1').forResult();
        if (bool) {
          let players = [];
          game.countPlayer2((current) => {
            return current.hasHistory('useCard', (evt) => {
              players.addArray(evt.targets);
            });
          });
          if (players.length) {
            player.useCard({ name: 'juedou' }, players);
          }
          game.asyncDraw(players);
          player.addTempSkill('mengchangci1', 'roundStart');
          players.map((i) => {
            i.addTempSkill('mengchangci2', 'roundStart');
          });
        }
      },
    },
    mengchangci1: {
      mod: {
        globalFrom(from, to, distance) {
          if (to.hasSkill('mengchangci2')) return distance + 1;
        },
      },
    },
    mengchangci2: {
      mod: {
        globalFrom(from, to, distance) {
          if (to.hasSkill('mengchangci1')) return distance + 1;
        },
      },
    },
    mengguxing2: {
      init(player) {
        lib.character.meng_jiu = ['', '', Infinity, [], []];
        lib.translate.meng_jiu = '虚无星神-Ⅸ';
      },
      trigger: {
        target: 'useCardToTarget',
      },
      forced: true,
      content() {
        var player;
        if (game.players.some((current) => current.name == 'meng_jiu')) {
          player = game.players.find((current) => current.name == 'meng_jiu');
          game.players.remove(player);
          game.dead.push(player);
        } else if (game.dead.some((current) => current.name == 'meng_jiu')) {
          player = game.dead.find((current) => current.name == 'meng_jiu');
        } else {
          player = ui.create.player();
          player.init('meng_jiu');
          player.classList.remove('likedead');
          player.classList.add('dead');
          game.dead.push(player);
        }
        trigger.parent.player = player;
      },
    },
    //砂金
    mengyanglu: {
      trigger: {
        target: ['rewriteGainResult'],
      },
      forced: true,
      preHidden: true,
      filter(event, player) {
        return event.player != player;
      },
      async content(event, trigger, player) {
        const { links: lose } = await player
          .choosePlayerCard(player, `即将失去${get.translation(trigger.result.cards)}改为交给其——`, 'he')
          .set('filterButton', trigger.filterButton)
          .set('selectButton', 1)
          .set('ai', function (button) {
            return 20 - get.value(button.link);
          })
          .forResult();
        if (lose) {
          trigger.result.cards = lose.slice(0);
          trigger.result.links = lose.slice(0);
          trigger.cards = lose.slice(0);
          trigger.untrigger();
        }
        let cards = get.cards(2);
        const { links: gain } = await player.chooseButton(true, ['获得一张牌', cards]).forResult();
        if (gain) {
          cards.remove(gain[0]);
          player.gain(gain, 'draw');
          ui.cardPile.insertBefore(cards[0], ui.cardPile.firstChild);
          game.updateRoundNumber();
        }
      },
    },
    mengtuipan: {
      init(player) {
        player.storage.mengtuipan = [];
      },
      enable: 'phaseUse',
      filterTarget(card, player, target) {
        return !player.storage.mengtuipan.includes(target) && target != player && target.countCards('he') > 0;
      },
      async content(event, trigger, player) {
        player.storage.mengtuipan.add(event.targets[0]);
        player
          .when({
            global: 'phaseAfter',
          })
          .then(() => {
            player.storage.mengtuipan = [];
          });
        await player.discardPlayerCard(event.targets[0], true);
        if (player.countCards('he')) await event.targets[0].useCard({ name: 'shunshou' }, player);
        await player.useCard({ name: 'chuqibuyi' }, get.cards(), event.targets[0]);
      },
      ai: {
        order: 10,
        result: {
          target: -2,
        },
      },
    },
    //玲可
    mengjuejing: {
      trigger: {
        player: 'loseHpBefore',
      },
      forced: true,
      async content(event, trigger, player) {
        await player.addTempSkill('mengjuejing2', {
          global: 'phaseAfter',
          player: ['damageEnd', 'mengjuejingAfter'],
        });
        trigger.cancel();
        await player.damage(trigger.num, player);
      },
      group: 'mengjuejing_dying',
      subSkill: {
        dying: {
          trigger: {
            player: 'dyingAfter',
          },
          firstDo: true,
          filter(event, player) {
            return player.isAlive() && event.source && event.source.isIn();
          },
          forced: true,
          async content(event, trigger, player) {
            const list = [`体力值:${player.hp}`, `护甲值:${player.hujia}`, `体力上限:${player.maxHp}`];
            for (var i = 0; i < list.length; i++) {
              list[i] = [i, list[i]];
            }
            let next = trigger.source.chooseButton(['绝景:交换两个数值', [list.slice(0, 1), 'tdnodes'], [list.slice(1, 2), 'tdnodes'], [list.slice(2, 3), 'tdnodes']]);
            next.set('forced', true);
            next.set('selectButton', 2);
            next.set('filterButton', () => true);
            next.set('ai', (button) => {
              let target = _status.event.target;
              let player = _status.event.player;
              if (get.attitude(player, target) > 0) return true;
              if (ui.selected.buttons.length) {
                if (target.hujia < target.hp) return button.link == 1;
                return button.link == 0;
              } else {
                return button.link == 2;
              }
            });
            next.set('target', player);
            const { links } = await next.forResult();
            if (links) {
              const map = {
                0: 'player.hp',
                1: 'player.hujia',
                2: 'player.maxHp',
              };
              const num1 = eval(map[links[0]]),
                num2 = eval(map[links[1]]);
              eval(`${map[links[0]]}=${num2}`);
              eval(`${map[links[1]]}=${num1}`);
              if (eval(map[0]) == eval(map[1])) {
                eval(`${map[2]}+=1`);
              } else if (eval(map[1]) == eval(map[2])) {
                eval(`${map[0]}+=1`);
              } else if (eval(map[0]) == eval(map[2])) {
                eval(`${map[1]}+=1`);
              }
              player.update();
              if (player.maxHp <= 0) {
                player.die(event);
              }
              if (player.hp <= 0 && !event.nodying) {
                event._dyinged = true;
                player.dying(event);
              }
              player.drawTo(lib.skill.mengjuejing.max(player));
            }
          },
        },
      },
      max(player) {
        const a = player.hp,
          b = player.hujia,
          c = player.maxHp;
        let max;
        if (a > b && a > c) {
          max = a;
        } else if (b > a && b > c) {
          max = b;
        } else {
          max = c;
        }
        return max;
      },
    },
    mengjuejing2: {
      ai: {
        nohujia: true,
      },
    },
    mengxueyuan: {
      trigger: {
        player: 'damageEnd',
        source: 'damageEnd',
      },
      check(event, player) {
        return player.hujia > 0 || player.maxHp > 1;
      },
      filter(event, player) {
        return event.parent.name != 'mengjuejing';
      },
      async content(event, trigger, player) {
        player.loseHp();
      },
      group: 'mengxueyuan_dying',
      subSkill: {
        dying: {
          trigger: {
            player: 'dyingAfter',
          },
          forced: true,
          filter(event, player) {
            return player.isAlive() && event.getParent(6).name == 'mengxueyuan';
          },
          content() {
            player.changeHujia(2);
          },
        },
      },
    },
    mengqiusheng: {
      trigger: {
        player: 'dying',
      },
      forced: true,
      async content(event, trigger, player) {
        let list = ['体力上限'];
        if (player.hujia > 0) list.push('护甲');
        list.push('cancel2');
        const { control } = await player
          .chooseControl(list)
          .set('prompt', '求生:减少1点体力上限或护甲,回复体力至1点')
          .set('ai', () => {
            if (player.hujia > 0) return '护甲';
            return '体力上限';
          })
          .forResult();
        if (control == 'cancel2') return;
        if (control == '体力上限') {
          player.loseMaxHp();
          player.recover(1 - player.hp);
        } else {
          player.changeHujia(-1);
          player.recover(1 - player.hp);
        }
      },
    },
    //洛天依
    mengzhongya: {
      trigger: {
        player: 'useCardBefore',
      },
      usable: 1,
      forced: true,
      filter(event, player) {
        return player.isPhaseUsing() && event.card && !get.tag(event.card, 'damage');
      },
      content() {
        trigger.card.name = 'wugu';
        player.storage.mengzhongya_turn = trigger.card;
      },
      group: ['mengzhongya2', 'mengzhongya_turn'],
      subSkill: {
        turn: {
          init(player) {
            player.storage.mengzhongya_turn;
          },
          trigger: {
            player: 'useCardAfter',
          },
          charlotte: true,
          filter(event, player) {
            if (!player.storage.mengzhongya2 || !player.storage.mengzhongya2.length) return false;
            return event.card && event.card.name == 'wugu' && player.storage.mengzhongya_turn == event.card;
          },
          forced: true,
          async content(event, trigger, player) {
            const { targets } = await player
              .chooseTarget('众雅:令任意名本轮使用过伤害单体牌的角色翻面', [1, player.storage.mengzhongya2.length], (card, player, target) => {
                return player.storage.mengzhongya2.includes(target);
              })
              .set('ai', (target) => -get.attitude(player, target))
              .forResult();
            if (targets) {
              targets.forEach((i) => {
                i.turnOver();
              });
            }
          },
        },
      },
    },
    mengzhongya2: {
      init(player) {
        player.storage.mengzhongya2 = [];
      },
      trigger: {
        global: 'useCardAfter',
      },
      charlotte: true,
      forced: true,
      filter(event, player) {
        return event.card && event.targets.length == 1 && get.tag(event.card, 'damage') && event.player != player;
      },
      content() {
        player.storage.mengzhongya2.add(trigger.player);
        player
          .when({
            global: 'roundStart',
          })
          .then(() => {
            player.storage.mengzhongya2 = [];
          });
      },
    },
    mengduyun: {
      trigger: {
        player: 'dying',
      },
      round: 1,
      content() {
        player.recover();
      },
      group: 'mengduyun_dying',
      subSkill: {
        dying: {
          trigger: {
            player: 'recoverAfter',
          },
          filter(event, player) {
            return event.parent.name == 'mengduyun' && !_status.dying.includes(player);
          },
          charlotte: true,
          forced: true,
          async content(event, map) {
            const player = map.player,
              cards = player.getCards('h');
            if (player.countCards('h')) {
              let result;
              if (cards.length == 1) {
                result = { bool: true, moved: [cards] };
              } else {
                result = await player
                  .chooseToMove('渡陨:将牌按顺序置于牌堆顶', true)
                  .set('list', [['牌堆顶', cards]])
                  .set('reverse', _status.currentPhase && _status.currentPhase.next ? get.attitude(player, _status.currentPhase.next) > 0 : false)
                  .set('processAI', function (list) {
                    var cards = list[0][1].slice(0);
                    cards.sort(function (a, b) {
                      return (_status.event.reverse ? 1 : -1) * (get.value(b) - get.value(a));
                    });
                    return [cards];
                  });
              }
              if (result.bool) {
                let cards2 = result.moved[0];
                cards2.reverse();
                game.cardsGotoPile(cards2, 'insert');
                game.log(player, '将', cards2, '置于了牌堆顶');
              }
            }
            let cards3 = [];
            while (cards3.length < 2) {
              let card = get.discardPile((card) => {
                if (cards3.includes(card)) return false;
                if (cards3.length) {
                  return get.type2(card, false) != get.type2(cards3[0], false) && card.suit != cards3[0].suit;
                }
                return true;
              });
              if (card) cards3.push(card);
            }
            player.gain(cards3, 'gain2');
          },
        },
      },
    },
    //流萤
    mengliuguangzhuhuo: {
      nobracket: true,
      trigger: {
        player: ['phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin'],
      },
      forced: true,
      async content(event, trigger, player) {
        await player.draw();
        if (
          player.countCards('hes', (card) => {
            return player.hasUseTarget({ name: 'huogong' }, [card]);
          }) > 0
        ) {
          const { targets, cards } = await player
            .chooseCardTarget({
              prompt: '流光逐火:将一张牌当【火攻】使用',
              position: 'hes',
              forced: true,
              filterCard(card) {
                return player.hasUseTarget({ name: 'huogong' }, [card]);
              },
              filterTarget(card, player, target) {
                if (ui.selected.cards.length) {
                  return player.canUse({ name: 'huogong' }, target);
                }
              },
              ai1(card) {
                return 8 - get.value(card);
              },
              ai2(target) {
                var player = _status.event.player,
                  att = get.attitude(player, target);
                return -att;
              },
            })
            .forResult();
          if (targets && cards) {
            player.line(targets[0], 'fire');
            let card = {
              name: 'huogong',
              storage: {
                mengliuguangzhuhuo: true,
              },
            };
            player
              .when('useCardAfter')
              .filter((event, player) => {
                return event.card && event.card.storage && event.card.storage.mengliuguangzhuhuo;
              })
              .then(() => {
                if (
                  !player.getHistory('sourceDamage', (evt) => {
                    return evt && evt.card && evt.card == trigger.card;
                  }).length
                ) {
                  player.loseHp();
                  player.draw(2);
                }
              });
            player.useCard(card, cards, targets);
          }
        }
      },
    },
    mengranquyingshen: {
      nobracket: true,
      trigger: {
        source: 'damageBegin1',
      },
      filter(event, player) {
        if (!event.card) return false;
        return true;
      },
      forced: true,
      content() {
        let suits = [];
        game.countPlayer((current) => {
          current.getHistory('sourceDamage', (evt) => {
            if (evt.card) {
              suits.add(evt.card.suit);
            }
          });
        });
        if (!suits.includes(trigger.card.suit)) player.recover();
        else trigger.num++;
      },
    },
    mengmengguihechu: {
      nobracket: true,
      trigger: {
        player: 'dying',
      },
      filter(event, player) {
        var skills = player.getSkills(null, false, false).filter((skill) => {
          var info = get.info(skill);
          if (!info || info.charlotte || !get.is.locked(skill) || get.skillInfoTranslation(skill, player).length == 0 || (info.inherit && info.inherit == 'mengcanshi')) return false;
          return true;
        });
        return skills.length;
      },
      forced: true,
      content() {
        player.recover(1 - player.hp);
        let skills = player.getSkills(null, false, false).filter((skill) => {
          var info = get.info(skill);
          if (!info || info.charlotte || !get.is.locked(skill) || get.skillInfoTranslation(skill, player).length == 0 || (info.inherit && info.inherit == 'mengcanshi')) return false;
          return true;
        });
        const name = skills[0] + '_canshi';
        lib.skill[name] = {};
        Object.assign(lib.skill[name], lib.skill.mengcanshi);
        lib.translate[name] = lib.translate.mengcanshi;
        lib.translate[`${name}_info`] = lib.translate.mengcanshi_info;
        player.removeSkill(skills[0]);
        player.addSkill(name);
      },
    },
    mengcanshi: {
      trigger: {
        player: 'phaseDrawBegin1',
      },
      check(event, player) {
        var num = game.countPlayer(function (current) {
          return current.isDamaged();
        });
        return num > 3;
      },
      prompt(event, player) {
        var num = game.countPlayer(function (current) {
          return current.isDamaged();
        });
        return `残蚀:是否改为摸${get.cnNumber(num)}张牌？`;
      },
      filter(event, player) {
        return !event.numFixed;
      },
      content() {
        trigger.changeToZero();
        var num = game.countPlayer(function (current) {
          return current.isDamaged();
        });
        if (num > 0) {
          player.draw(num);
        }
        player.addTempSkill('mengcanshi_1');
      },
      subSkill: {
        1: {
          trigger: {
            player: 'useCard',
          },
          forced: true,
          filter(event, player) {
            if (player.countCards('he') == 0) return false;
            var type = get.type(event.card, 'trick');
            return type == 'basic' || type == 'trick';
          },
          autodelay: true,
          content() {
            player.chooseToDiscard(true, 'he');
          },
        },
      },
    },
  };
  hyyzYm.characterFilter = {}; //禁用,武将使用条件
  hyyzYm.translate = {
    Ym_yingjie: '骊歌の英桀们!',
    //没有对应投稿的武将
    Ym_woganyunadedanshoujian: '我甘雨拿的单手剑',
    Ym_qi: '屺',
    Ym_qixiyueming: '七夕月、明',
    Ym_zhouwang: '纣王',
    Ym_muci: '慕辞し',
    Ym_shiyi: '拾壹',
    Ym_sanyueqidegou: '三月七的狗',
    Ym_xianyi: '纤衣',
    Ym_sabalujiang: '萨巴鲁酱',
    Ym_yiqingmeng: '忆-轻梦',
    Ym_benzhibeilun: '本质悖论',
    Ym_653linzhiyekong: '635林之夜空',
    ////////////////////////
    Ym_zilinggudelige: '紫灵谷的骊歌',
    Ym_jiulipu: '就离谱',
    Ym_sp_jiulipu: '就离谱',
    Ym_canghaiyisu: '沧海依酥',
    Ym_re_canghaiyisu: '沧海依酥',
    Ym_menghailishang: '梦海离殇',
    Ym_sp_menghailishang: '梦海离殇',
    Ym_miealiei: '咩阿栗诶',
    Ym_miemennayou: '',
    Ym_youyi: '柚衣',
    Ym_sp_youyi: '柚衣',
    Ym_aizazadi: '爱咋咋地', //未投稿武将
    Ym_yanfeng: '焰枫', //魈//未投稿武将
    Ym_fushengyi: '浮生亦',
    Ym_lalalala: '啦啦啦啦', //未投稿武将
    Ym_rijiuyangqichongsanguan: '日玖阳气冲三关',
    Ym_xilin: '西琳', //未投稿武将
    Ym_zhongshiweiyu: '终世微雨',
    Ym_daowuji: '道无吉', //未投稿武将
    Ym_sp_daowuji: '道无吉',
    Ym_lengruohan: '冷若寒',
    Ym_mushancai: '木善才', //未投稿武将
    Ym_xinzhisuoxiangxingzhisuoxiang: '心之所向_星之所向',
    Ym_zuoriliuying: '昨日流萤',
    //紫灵谷的骊歌
    menggengxin: '更新',
    menggengxin_info: '出牌阶段,你可以将不同花色的牌置于武将牌上,称为<视频>,摸等量的牌.',
    mengshiping: '视频',
    mengshiping_info: '',
    mengsanlian: '三连',
    mengsanlian_info: '其他角色的出牌阶段限一次,其可以获得一张<视频>并交给你至多三张牌.',
    mengzhenggao: '征稿',
    mengzhenggao_info: '使命技,你获得其他角色的牌后回复1点体力.</br><span class=greentext>成功</span>:当你累计获得其他角色五张牌后,你减1点体力上限并获得〖圆梦〗.</br><span class=firetext>失败</span>:第四轮开始时,你失去所有技能并获得〖断更〗.',
    mengyuanmeng: '圆梦',
    mengyuanmeng_info: '锁定技,你使用因<三连>获得的牌无距离限制且不能被响应,令交出此牌的角色摸一张牌.',
    mengduangeng: '断更',
    mengduangeng_info: '结束阶段,你可以弃置一张<视频>,回复1点体力并摸两张牌.',
    //就离谱
    mengzhuxin: '诛心',
    mengzhuxin_info: '锁定技,你使用【杀】指定目标后,改为令目标角色弃置一张牌.除非该角色因此法弃置了一张【闪】,否则其失去一点体力.',
    mengyingping: '应评',
    mengyingping_info: "回合技.你于回合<span class='bluetext'>内</span>/<span class='legendtext'>外</span>获得牌后,可以对任一合法目标角色<span class='bluetext'>视为使用其中一张即时牌</span>/<span class='legendtext'>使用其中一张牌</span>.",
    mengzhuojian: '灼见',
    mengzhuojian_info: '锁定技,虚拟牌和转化牌对你无效;此牌结算后你获得一张本回合未使用过的牌.',
    //沧海依酥
    mengmoyu: '摸鱼',
    mengxingmeng: '醒梦',
    mengmoyu_info: '锁定技,你跳过出牌阶段;其他角色的出牌阶段开始时,你摸一张牌,可以使用一张牌.',
    mengxingmeng_info: '其他角色的回合结束后,若你于此回合内造成过伤害,你执行一个额外的回合且此回合内〖摸鱼〗失效.',
    //梦海离殇
    mengyingji: '影寂',
    mengyingji_info: '出牌阶段限一次,你可以弃置一张黑色牌,视为使用一张无距离限制且不计入次数上限的【杀】.',
    menganxing: '黯星',
    menganxing_info: '一名角色受到伤害后,你可以进行一次判定.若结果为黑色,你对伤害来源造成1点伤害;否则,受伤角色摸一张牌.',
    //咩阿栗诶
    mengxunshi: '寻师',
    mengxunshi_info: '锁定技,游戏开始时,你令一名其他角色获得<师>;该角色的体力值改变后,你摸等量的牌,可以将一张牌置于武将牌上,称为<灵感>.',
    mengzaobing: '造兵',
    mengzaobing_info: '出牌阶段限两次,你可以重铸一张牌.若拥有<师>的角色上一回合内使用过此牌的花色,你摸一张牌(不计入手牌上限),否则,你将重铸的牌加入<灵感>.',
    mengpanli: '叛离',
    mengpanli_info: '觉醒技,准备阶段,若<灵感>数大于存活角色数,你摸与装备区内牌数等量的牌,失去〖寻师〗,修改〖造兵〗,并获得〖精修〗.',
    mengzaobing_rewrite: '造兵',
    mengzaobing_rewrite_info: '出牌阶段每种花色限一次,你可以重铸一张牌.若此牌花色与<灵感>中的一张牌花色相同,你选择一项:1.弃置一张灵感,摸两张牌.2.视为使用一张本回合未以次法使用过的锦囊牌.否则,将一张手牌加入<灵感>.',
    mengjingxiu: '精修',
    mengjingxiu_info: '当你使用〖造兵〗牌时,可以弃置至多三张<灵感>,令此牌额外指定等量的目标或摸等量的牌.',
    //柚衣
    mengzhumeng: '逐梦',
    mengzhumeng_info: '出牌阶段限一次.你可以将一张牌当上次使用的基本牌或普通锦囊牌使用(无次数和距离限制).',
    menggongmian: '共勉',
    menggongmian_info: '每回合限一次.当一名角色于回合内使用了两次同名的牌后,你可以将第二张同名牌交给除使用者外的一名角色(以此法交出的牌无次数和距离限制).',
    //爱咋咋地
    menglijian: '砺剑',
    menglijian_info: '当你使用【杀】被【闪】抵消后,或使用【闪】抵消【杀】后,你摸一张牌.',
    mengyinxia: '隐侠',
    mengyinxia_info: '锁定技,若你的装备区内有牌,你不能成为【过河拆桥】和延时类锦囊牌的目标.',
    //焰枫
    mengbianma: '编码',
    mengbianma_info: '锁定技,你使用牌无次数限制.',
    mengxianpo: '仙魄',
    mengxianpo_info: '准备阶段你选择并获得一项:</br>1.摸牌阶段多摸一张牌.</br>2.判定阶段多摸一张牌并弃置判定区内的牌.</br>3.你的手牌上限+1.',
    //浮生亦
    mengdaiduo: '怠惰',
    mengdaiduo_info: '锁定技.回合开始时,你随机跳过X+1个阶段(X为此技能发动的次数).若你因此跳过所有阶段,回合结束后你翻面井清空此技能发动的次数.',
    mengcunzhi: '存志',
    mengcunzhi_info: '锁定技,当你跳过一个阶段后:</br>1.准备阶段,令一名角色将手牌置于武将牌上直到其回合开始.</br>2.摸牌阶段,观看并获得一名其他角色数量最多的花色的手牌.</br>3.出牌阶段,失去1点体力并对至多X名角色造成1点伤害.</br>4.弃牌阶段,将花色不同的任意手牌交给一名其他角色.</br>5.结束阶段,回复1点体力,观看并将牌堆底的X张牌以任意顺序置于牌堆顶.</br>',
    mengcunzhi2: '存志',
    //啦啦啦啦
    menganli: '安利',
    menganli_info: '使命技,其他角色的出牌阶段开始时,你可以将一张手牌交给一名其他角色并标记为<游戏>.该角色使用<游戏>时你选择一项:</br>1.将手牌摸至体力上限.</br>2.回复1点体力.该角色弃置<游戏>时你失去1点体力.</br><span class=greentext>成功</span>:若你对所有其他角色发动过此技,你加1点体力上限并回复一点体力,获得〖永乐〗.</br><span class=firetext>失败</span>:当你进入濒死状态时,将体力上限和体力值调整至2,并获得〖孤立〗.',
    mengyouxi: '游戏',
    mengyongle: '永乐',
    mengyongle_info: '回合结束后,你将手牌摸至体力上限并回复1点体力.',
    mengguli: '孤立',
    mengguli_info: '锁定技,回合结束后,你与一名其他角色各失去1点体力.',
    //日玖阳气冲三关
    mengxuanxiang: '绚想',
    mengxuanxiang_info: '每回合开始时,你可以失去1点体力,令当前回合角色视为使用至多X张未移出游戏的即时牌,随机将牌堆中同名的一张牌移出游戏.(X为你的体力值)',
    menghuanying: '还因',
    menghuanying_info: '当一张牌被使用时,若游戏外有同名的牌,你不能响应此牌,将游戏外的同名牌插入牌堆.',
    mengxiaoxing: '晓心',
    mengxiaoxing_info: '当有牌移出游戏时,你摸一张牌.当有牌加入游戏时,你可以失去1点体力获得之,或回复1点体力.',
    //西琳
    mengbailan: '摆烂',
    mengbailan_info: '锁定技.出牌阶段结束时,若你本回合使用的牌小于体力上限,你跳过下个弃牌阶段.若你的手牌数量大于体力上限,你不能成为【过河拆桥】和【顺手牵羊】的目标.',
    mengle: '乐',
    mengle_info: '出牌阶段限一次,你可以将一张牌当【乐不思蜀】使用,可以弃置一张牌并选择一名判定区有【乐不思蜀】的其他角色.若如此做,你声明一种花色,该角色进行延时类锦囊牌的判定时,此花色的判定结果反转.',
    mengdiaotu: '吊图',
    mengdiaotu_info: '结束阶段,你可以弃置一张牌视为使用【万箭齐发】或【桃园结义】.',
    //终世微雨
    mengxudu: '虚度',
    mengxudu_info: '锁定技,本回合进入弃牌堆的牌数首次超过你的体力上限后,你加一点体力上限,本回合你不能使用牌且不计入座次和距离的计算.',
    mengfenxin: '奋心',
    mengfenxin_info: '①每回合每种类型的牌限一次.当一张牌被使用时, 你可以减1点体力上限并获得此牌;若使用者为你,此牌不计入次数限制.②若你本回合获得且失去所有类别的牌,此技能视为未发动.',
    //道无吉
    mengfenji: '分极',
    mengfenji_info: '①每轮开始时,你可以减少任意体力上限并获得等量<人格>牌.</br>②回合开始时,你可以重新展示两张<人格>牌(剩余人格牌不足则全展示),视为拥有其中含<仁义礼智信暴妒狂怒疑>的技能(人格牌:技能中含<仁义礼智信暴妒狂怒疑>的武将牌).',
    mengduofa: '躲罚',
    mengduofa_info: '锁定技,你受到致命伤害时,可以减1点体力上限或弃置一张未展示的人格牌,防止此伤害并回复等量体力.',
    mengdaogui: '道诡',
    mengdaogui_info: '窥天技,你可以令一名角色加/减1点体力上限;判定者可以将此操作改为终止判定.结算后,你获得并展示一张人格牌.',
    mengdaogui_append: '<span class="text" style="font-family: yuanli">窥天技:一名角色判定前,若你未⌈窥天⌋,你猜测判定结果的花色和点数.判定结果确定后,若至少猜对一项,则视为窥天成功并触发窥天技.</span>',
    mengkuitian: '窥天技',
    mengkuitian_info: '一名角色判定前,若你未⌈窥天⌋,你猜测判定结果的花色和点数.判定结果确定后,若至少猜对一项,则⌈窥天⌋成功并触发⌈窥天⌋技.',
    //冷若寒
    mengguxing: '孤行',
    mengguxing_info: '每回合开始时,你可以将一张手牌当【调虎离山】对其他非当前回合角色使用,令当前回合角色摸与目标数等量的牌.',
    mengqisi: '绮思',
    mengqisi_info: "限定技,出牌阶段,你可以视为使用X张无距离限制的即时牌,若此牌为<span class='bluetext'>多</span>/<span class='legendtext'>单</span>目标牌,则目标数为随机<span class='bluetext'>多个</span>/<span class='legendtext'>单个</span>(X为本局游戏你使用即时牌的次数).",
    //就离谱
    JLPjingsi: '镜思',
    JLPjingsi_info: '锁定技,当你使用或被使用牌时,重铸与之同花色的手牌,否则蓄谋牌堆一张同花色的牌.',
    JLPqiuxin: '求心',
    JLPqiuxin_info: '锁定技,当你指定/被指定为即时牌的唯一目标后,展示目标的手牌.若其中没有/有与之同花色的牌,此牌不能被响应/无效.',
    //心之所向_星之所向
    mengjingjin: '精进',
    mengjingjin_info: '锁定技,当你对一名角色造成或受到伤害时,你观看牌堆顶4张牌并以任意顺序放回,你弃置受伤角色2张牌、令其摸3张牌并令伤害来源将手牌数调整至1.历战:你与该角色中手牌数较小者交换〖精进〗中的任意个阿拉伯数字.',
    //梦海离殇",
    Ym_sp_prefix: 'sp',
    mengspxingmeng: '星梦',
    mengspxingmeng_info: '每回合限一次,当你对一名角色造成伤害后,若其当前手牌数:多于你,你可以弃置其一张牌;少于你,你可以摸一张牌;等于你,你可以对其造成1点伤害.',
    menglangu: '兰谷',
    menglangu_info: '一名角色的结束阶段,若其本回合造成过伤害,你可以令其摸×张牌(×为其本回合造成的总伤害值).',
    //咩门那由",
    mengkunlu: '困虑',
    mengkunlu_info: '锁定技,回合开始时,若你手中花色数不小于你的体力值,则你将手牌向一名体力值不大于你的角色调整2.若调整方向与上次:不同,则本回合内你获得〖司凌〗;相同,你回合结束后你获得一个摸牌阶段.',
    mengsiyan: '思焰',
    mengsiyan_info: '你的手牌因〖困虑〗调整后,你可重铸手中一种颜色的所有牌.若你因此获得至少两种类别不同的牌,则你可从中央区内获得一张未因此获得的类别牌.',
    mengsiling: '司凌',
    mengsiling_info: '出牌阶段每名其他角色限一次,你可摸一张牌并与一名手牌数不大于你的角色拼点,若你赢,则视为对其使用一张【知已知彼】弃置其一张牌/造成一点伤害.',
    //柚衣",
    mengtihan: '体寒',
    mengtihan_info: '每名角色每项限一次.每名角色每回合累计造成了大于1点的伤害/获得了至少四张牌后,若其本回合发动过技能,你回复/其失去1点体力.你可以交给其一张牌并令其本回合技能失效.',
    mengwennuan: '问暖',
    mengwennuan_info: '出牌阶段限一次,你可以选择至多三名角色,这些角色按照手牌数由多到少传递一张牌,因此获得牌的角色可以使用此牌.执行结束后,其中手牌最少的角色摸一张牌.',
    //"沧海依酥",
    mengremoyu: '摸鱼',
    mengremoyu_info: '锁定技,你始终跳过出牌阶段.其他角色的出牌阶段开始时,你摸一张牌你可以使用一张手牌;若此牌不为装备牌,则记录此牌的牌名.',
    mengrexingmeng: '醒梦',
    mengrexingmeng_info: '觉醒技,回合开始时,若你记录的牌名数不小于当前存活人数,则你失去技能〖摸鱼〗,获得技能〖忆梦〗.',
    mengyimeng: '忆梦',
    mengyimeng_info: '每回合每种牌名限一次,你可以将一张牌当做已记录牌名的牌使用或打出.',
    ///木善才",
    mengjiejian: '借鉴',
    mengjiejian_info: '出牌阶段,你可与一名其他角色进行拼点,若你赢,则你与其各摸一张牌或各回复一个装备栏,你可视为使用一张牌名字数为X的基本牌或普通锦囊牌.X为本次拼点牌牌名之和的一半(向下取整).若你本回合发动此技的次数达到X,此技能本回合失效.',
    mengyingbian: '应变',
    mengyingbian_info: '当你没有手牌且需要拼点时,你可以废除一个装备栏并使用牌堆中一张对应副类别装备牌进行拼点.',
    //道无吉",
    spgualun: '卦论',
    spgualun_info: '其他角色使用牌指定目标后,你可以交给其一张牌并与其进行拼点牌回收且赢者摸一张牌的拼点.若你赢,则你将此牌名加入<博箓>;你收回武将牌上没有该花色的拼点牌置于武将上且你可以用这些牌发动【鬼才】.',
    spbolu: '博箓',
    spbolu_info: '锁定技,当你需要使用或打出【闪】时,你可以进行一次判定,若判定结果与你需要使用牌的牌名字数相同,你视为使用之,若于你回合内则改为将一张牌当作此牌使用或打出.',
    spxiuyao: '修爻',
    spxiuyao_info: '锁定技,你的拼点牌点数+X,X为【卦论】的牌数.〖博箓〗判定失败后,你可以摸一张牌并移除此牌名;将判定牌与【卦论】的一张牌交换.',
    meng_sushang: '素裳',
    mengshanqing: '山倾',
    mengshanqing_info: '当你使用非虚拟【杀】指定目标时,若其装备区内有牌,你获得其装备区的一张牌,否则获得其一张手牌.',
    mengyouren: '游刃',
    mengyouren_info: '你使用的非虚拟【杀】结算结束后,展示牌堆顶一张牌;每满足一项便多展示一张牌:</br> 1.目标角色装备区内没有牌.</br> 2.目标角色手牌区内没有牌.</br> 3.此【杀】造成过伤害.</br> 若目标角色存活,你可以弃置展示牌中一种颜色的所有牌,视为对其使用相同数量的【杀】;获得剩余的牌.',
    mengwuji: '武继',
    mengwuji_info: '锁定技,你的延时类锦囊牌视为【杀】.',
    meng_yukong: '驭空',
    mengtianque: '天阙',
    mengtianque_info: '准备阶段,若你没有<鸣弦号令>,你获得两层<鸣弦号令>.当一名角色造成伤害时,你可以令此伤害+1;若如此做,当前回合结束时,你移除一层<鸣弦号令>.',
    mengguanyun: '贯云',
    mengguanyun_info: '当你于出牌阶段对一名角色造成伤害后,若你有<鸣弦号令>,你弃置其一张牌,摸一张牌.',
    meng_xier: '希儿',
    mengluandie: '乱蝶',
    mengluandie_info: '出牌阶段限一次,你可以选择至多X项(X为你当前的体力值):</br>1.本回合使用【杀】造成的伤害+1.</br>2.本回合使用的【杀】不能被响应.</br>3.摸三张牌.</br>4.本回合可以多使用X张杀.',
    mengzaixian: '再现',
    mengzaixian_info: '每轮限一次,每回合结束后,若你于本回合内击杀过角色,则你可以进行一个额外的回合并[增幅]至回合结束.',
    mengzaixian_buff: '增幅',
    mengzaixian_buff_info: '效果:获得此效果时回复一点体力并摸X张牌(X为你的体力值);你使用的【杀】无视防具.',
    meng_ren: '刃',
    mengwansi: '万死',
    mengwansi_info: '锁定技,每轮开始时,对一名角色造成1点伤害,将体力值调整(回复或对自己造成伤害)至体力上限的一半(向上取整).',
    mengdibian: '地变',
    mengdibian_info: '出牌阶段限一次,你可以对自己造成1点伤害,摸X张牌,且本回合使用【杀】或普通锦囊牌可以额外指定两个目标.X为你已损失的体力值.',
    mengenci: '恩赐',
    mengenci_info: '①当你受到伤害后,获得一枚<赐>(至多为5).若<赐>的数量大于你的体力值,你可以对伤害来源造成1点伤害并回复1点体力.</br>②你对其他角色造成伤害时,将伤害值改为<赐>的数量并移去所有的<赐>.',
    meng_bronya: '布洛妮娅',
    mengzhenjun: '整军',
    mengzhenjun_info: '出牌阶段结束时,你可以弃置一张牌,令一名其他角色[净化]并其执行一个出牌阶段.若其未[净化],其摸两张牌.',
    mengzhenqu: '阵曲',
    mengzhenqu_info: '每轮限一次.一名其他角色的出牌阶段开始时,你可以交给其至少两张牌,将手牌摸至体力上限.该角色使用以此法获得的牌不能被响应;这些牌包含两种颜色,该角色本回合首次造成的伤害+1.',
    mengjunzhen: '军阵',
    mengjunzhen_info: '主公技.其他星铁势力的角色造成伤害时,你可以重铸一张牌;若此牌与造成伤害的牌的点数和颜色相同,此伤害+1.',
    meng_jiepade: '杰帕德',
    mengyuhan: '余寒',
    mengyuhan_info: '锁定技,当你造成伤害后,令目标角色进行判定.若结果为黑色,你摸一张牌且目标角色[冻结].',
    mengjianyi: '坚毅',
    mengjianyi_info: '出牌阶段限一次,你可以弃置任意张花色不同的牌,令等量的角色将护甲补充到X(X为你体力上限的一半向上取整)并获得[坚毅].',
    mengjueyi: '决意',
    mengjueyi_info: '限定技,当你进入濒死状态后,你可以将体力值回复至1并获得2点护甲,获得〖坚毅〗,从牌堆获得四张花色不同的牌.',
    mengjianyi_buff: '坚毅',
    mengjianyi_buff_info: '效果:获得/失去此效果时,你废除/回复装备区和判定区.<br>1.摸牌阶段,你多摸一张牌.</br>2.你的手牌上限+1,使用【杀】的次数上限+1,攻击范围+1.</br>3.当你受到伤害时,此伤害改为1.</br>4.当你受到伤害后,若你没有护甲,失去此效果.',
    meng_xierde: '希尔德',
    menghengyue: '横跃',
    menghengyue_info: '锁定技,若你的武器栏内有牌,你的攻击范围视为2.当你于出牌阶段内首次使用一种花色的牌后,你获得距离为1的其他角色的一张牌,摸一张牌并交给其一张牌;若如此做,本回合你计算与其他角色的距离-1.',
    mengguanyang: '贯杨',
    mengguanyang_info: '出牌阶段限一次,你可以将X张牌当一张无距离和次数限制的【杀】对一名其他角色使用(X为本回合发动<横跃>的次数).若该角色的体力值不小于你,其须使用两张【闪】响应此【杀】;此【杀】造成伤害后,若你与该角色的距离为1,你令其[减速].',
    meng_tingyun: '停云',
    mengfuyao: '扶摇',
    mengfuyao_info: '每回合限两次,当你或<赐福>角色受到或造成伤害后,你与<赐福>角色各摸一张牌(若均为你则只摸一张牌).',
    mengcifu: '赐福',
    mengcifu_info: '游戏开始时或出牌阶段开始时,你将<赐福>角色改为场上的一名角色.当<赐福>角色使用牌指定唯一目标后,你可以弃置一张牌并令其选择一项: 1.令此牌不能被响应.2.令此牌造成的伤害值与回复值+1.',
    mengyidao: '仪祷',
    mengyidao_info: '结束阶段,你可以弃置一张牌并令一名角色摸一张牌;若该角色为其他<赐福>角色,则改为摸三张.',
    meng_kelala: '克拉拉',
    mengdaijia: '代价',
    mengdaijia_info: '一名角色的准备阶段,你可以与其拼点.若你赢,其本回合只能对你使用牌,且你本轮不能再发动此技;若你没赢,其获得<警告>并对你造成1点伤害.',
    mengweijia: '为家',
    mengweijia_info: '锁定技,你的手牌上限+X(X为场上拥有<警告>的角色数).当你受到伤害后,你对伤害来源造成1点伤害,并令其获得<警告>.',
    mengruyue: '如约',
    mengruyue_info: '有<警告>的角色手牌上限-1且视为在你的攻击范围内.当你造成伤害时,若目标角色有<警告>,你选择一项:</br>1.移去<警告>并令此伤害+1,摸一张牌.</br>2.回复1点体力.',
    xtjinggao: '警告',
    xtjinggao_info: '',
    meng_shen_tingyun: '停云',
    shenfuyao: '神扶摇',
    shenfuyao_info: '每回合限一次,一名角色受到伤害后,你可以弃一张牌视为对其使用一张雷【杀】;若伤害来源有<赐福>标记,此杀伤害+1. ',
    shencifu: '神赐福',
    shencifu_info: '出牌阶段开始时,你将<赐福>标记转移给一名角色并令其获得三枚<祝愿>.</br>有<赐福>标记的角色使用基本牌或普通锦囊时,其可以弃置一枚<祝愿>并选择一项:</br>1.为此牌额外指定一个目标.</br>2.令此牌的伤害值与回复值+1.</br>若如此做,此牌造成伤害后,你与有<赐福>标记的角色各摸一张牌.',
    shenyidao: '神仪祷',
    shenyidao_info: '出牌阶段限一次,你可以弃置一张手牌并选择一名角色.你翻面并令其获得三张【杀】或伤害类普通锦囊牌.该角色使用以此法获得的牌无距离和次数限制、不能被响应且该角色不能对此牌执行<赐福>②.',
    meng_sanyueqi: '三月七',
    mengchunjie: '纯洁',
    mengchunjie_info: '出牌阶段开始时,你可以令一名角色[净化]并获得2枚护甲和〖可爱〗(以此法获得的护甲至多为5).',
    menghuyou: '护佑',
    menghuyou_info: '当一名有护甲的角色受到伤害后,你可以重铸一张牌,视为对伤害来源使用一张无视防具的冰【杀】.若此【杀】造成伤害,目标角色[冻结];否则你摸一张牌.',
    mengkeai: '可爱',
    mengkeai_info: '没有〖可爱〗的其他角色受到伤害时,你可以将此伤害转移给自己并失去此技.',
    meng_sb_xier: '希儿',
    mengshuangsheng: '双生',
    mengshuangsheng_info: '转换技.</br>阳:当你受到伤害时,你可以弃置两张颜色不同的牌,防止此伤害并加1点体力上限.</br>阴:当你使用牌指定其他角色后,你可以失去1点体力并摸一张牌,令其本回合非锁定技失效,对其造成一点伤害并获得一枚护甲.',
    mengbian: '彼岸',
    mengbian_info: '限定技,出牌阶段,你可以减至多5点体力上限,对等量的其他角色各造成1点伤害并获得等量的护甲,获得〖眷顾〗.',
    mengjuangu: '眷顾',
    mengjuangu_info: '锁定技.①每轮开始时,若你已受伤且有护甲,你失去x枚护甲,回复等量体力并摸等量牌(X为你已损失的体力和护甲数的较小值).</br>②你因弃置而失去牌后,获得1枚护甲.',
    meng_alan: '阿兰',
    mengshinu: '释怒',
    mengshinu_info: '出牌阶段限一次,当你使用【杀】指定目标后,你可以失去1点体力(若体力值为1,则跳过这一步),执行前X项效果(X为你已损失的体力值):</br>1.此【杀】改为雷【杀】.2.此【杀】不能被响应.3.此【杀】的伤害+X.',
    mengjianren: '坚忍',
    mengjianren_info: '锁定技.</br>①每轮限一次,当你进入濒死状态时,将体力值回复至1点.</br>②你的手牌上限视为x.</br>③结束阶段,你摸X张牌.',
    meng_naxida: '纳西妲',
    mengxukong: '虚空',
    mengxukong_info: '当一张基本牌或普通锦囊牌使用后,若<虚空>中未记录此牌名,你可以记录此牌名.回合开始时,你可以在<虚空>中增加或移除一种牌名.',
    menghuanmeng: '唤梦',
    menghuanmeng_info: '每回合限一次,一名角色使用<虚空>中记录的牌指定目标前,你可以摸一张牌并交换此牌的使用者和首个目标角色.',
    mengmoye: '摩耶',
    mengmoye_info: '锁定技,每回合限一次.当你成为其他角色使用基本牌或普通锦囊牌的目标时,若<虚空>中未记录此牌名,你记录此牌名并取消之.',
    meng_kiana: '琪亚娜',
    mengyuehua: '月华',
    mengyuehua_info: '当你执行以下一项后,你可以选择一项执行(每回合每项只能触发和执行一次):</br>1.对一名角色造成1点火焰伤害;</br>2.回复1点体力;</br>3.摸一张牌;</br>4.对一名角色造成1点冰冻伤害;</br>5.弃置一名角色区域内的一张牌;</br>6.获得一名其他角色的一张牌;</br>7.对一名角色造成1点雷电伤害.',
    mengliushang: '流裳',
    mengliushang_info: '当你响应其他角色的牌后,你可以执行并移除〖月华〗中的一项.',
    meng_jizi: '姬子',
    mengnuwu: '女武',
    mengnuwu_info: '每回合限一次.当你造成或受到伤害后,你可以摸等同于伤害值两倍的牌,若对方体力大于你,其失去1点体力.',
    mengjiezhan: '竭战',
    mengjiezhan_info: '当你使用【酒】【杀】或普通锦囊牌时,你可以失去1点体力或减1点体力上限,令此牌不能被响应且不计入使用次数,令一名角色获得一张红色牌.',
    mengxinhuo: '薪火',
    mengxinhuo_info: '当你进入濒死状态时,你可以将所有牌交给一名其他角色,并令其获得〖薪炎〗,你死亡.',
    mengxinyan: '薪炎',
    mengxinyan_info: '锁定技,你的红色手牌不计入手牌上限;你使用红色牌不能被响应;你使用红色牌造成伤害时,你摸一张牌并令此伤害+1.',
    meng_shenlilingren: '神里绫人',
    mengwenmou: '稳谋',
    mengwenmou_info: '当你使用或打出牌时,若你手牌中有此牌的花色,此牌不计入使用次数;否则,获得一张手牌中没有的花色的牌.',
    menggutu: '固图',
    menggutu_info: '锁定技,当你响应其他角色的牌时,你选择一项:1.获得当前回合角色的一张牌.2.令当前回合角色失去1点体力.3.回复1点体力.4.摸两张牌.',
    meng_sb_jizi: '姬子',
    mengezhan: '恶战',
    mengezhan_info: '回合外,其他角色对你使用牌后,若你为此牌的唯一目标,你可以将一张手牌当无距离限制的【杀】对其使用;</br>出牌阶段,你对其他角色使用牌后,若此牌的目标唯一,目标角色可以将一张手牌当【杀】对你使用.',
    mengzhuoshi: '灼蚀',
    mengzhuoshi_info: '锁定技,当你受到伤害时,改为减少X点的体力上限并摸X张牌(X为伤害值).',
    mengjiyi: '疾疫',
    mengjiyi_info: '锁定技,你的手牌上限等于体力上限.你使用的【杀】改为火【杀】,其他角色响应你的【杀】后须弃置一张手牌.',
    mengzhicheng: '志承',
    mengzhicheng_info: '当你死亡时,你可以令一名其他角色增加一点体力上限并回复1点体力,令其获得技能〖疾疫〗和你区域内的所有牌.',
    meng_fuxuan: '符玄',
    mengqiongguan: '穷观',
    mengqiongguan_info: '游戏开始时,或出牌阶段限一次,你可以选择一名没有[穷观阵]的角色,与其获得[穷观阵]和〖鉴知〗.当你死亡后,移去场上的〖穷观阵〗和〖鉴知〗.',
    mengqiongguan_buff: '穷观阵',
    mengqiongguan_buff_info: '锁定技,若你不是符玄,当你受到本回合第2点或更多的伤害时,将多余的伤害转移给符玄.',
    mengjianzhi: '鉴知',
    mengjianzhi_info: '锁定技,获得此技时加1点体力上限并回复1点体力,失去此技时减1点体力上限.你每回合首次使用【杀】造成伤害时,此伤害+1.',
    mengbie: '避厄',
    mengbie_info: '锁定技,每轮限一次,当你的体力值变化后,若体力值小于体力上限的一半,你回复X点体力(X为你本回合受到的伤害数).',
    meng_lizhiluzhe: '理之律者',
    mengsheyuan: '涉渊',
    mengsheyuan_info: '其他角色的回合结束后,你随机展示一张本回合进入弃牌堆的非装备牌,重新记录此牌.若如此做,此后你每失去1/2张与〖涉渊〗最后一张记录的牌类型相同/不同的牌后,可以废除一个装备栏(若装备栏均被废除,则不进行失去牌的记录).若本回合未以此法废除过装备栏,你获得牌堆中两张与〖涉渊〗最后一张记录的牌类型不同的非装备牌.',
    mengkanming: '堪名',
    mengkanming_info: '每回合限一次,若你的装备栏均已被废除,你可以将一张牌当〖涉渊〗记录的牌使用.此牌结算结束后,若没有角色因此牌改变体力值,你复原至少一个装备栏.每以此法复原两个装备栏,你回复1点体力或摸一张牌.',
    meng_lisushang: '李素裳',
    mengzhejian: '折剑',
    mengzhejian_info: '锁定技,当有牌进入或离开一名角色的武器栏后,你摸一张牌.你计算与武器栏内有牌的其他角色的距离为1.',
    mengtaixu: '太虚',
    mengtaixu_info: '当你使用一张非虚拟牌指定唯一目标后,若目标角色的武器栏为空,你将此牌置入其武器栏(若此牌不为武器,则变形为同花色同点数【太虚剑气】);</br>否则,你令此牌无效并获得其武器栏内的牌,其本回合不能使用或打出牌.',
    mengjianxin: '剑心',
    mengjianxin_info: '锁定技,你没有武器栏.你的武器牌视为无次数限制的【杀】;若此牌的牌名包含<剑>,则此牌无距离限制且改为冰【杀】.',
    meng_zhongyanzhiluzhe: '终焉之律者',
    mengpingji: '平寂',
    mengpingji_info: '一名角色造成伤害后,若你没有记录,你可以弃置一张牌并记录此伤害的属性、数值、伤害来源和受伤角色;否则,你摸X张牌(X为此伤害与记录相同的项目数)并清除记录.',
    mengzhaoxi: '朝夕',
    mengzhaoxi_info: '你不于当前回合内获得的牌均视为【火攻】.其他角色于其回合内首次使用目标唯一的牌后,你可以对同一目标使用一张【火攻】.',
    mengcifan: '赐繁',
    mengcifan_info: '当你使用牌造成伤害后,你可以将此牌置于牌堆顶.一名角色脱离濒死后,你可以视为使用一张【五谷丰登】.',
    meng_shenlilinghua: '神里绫华',
    menglinren: '凛刃',
    menglinren_info: '当你使用目标唯一的牌时1,你可以与目标角色交换手牌中可用于响应此牌的所有同类型的牌.若如此做,本回合你们无法使用、打出或弃置这些牌,你令一名角色加入此牌的目标.',
    mengqingzi: '倾姿',
    mengqingzi_info: '锁定技,当一名角色使用目标不唯一的牌时2,若你为此牌目标,将你从目标中移除;若你为使用者,此牌额外结算一次.你可以取消此牌的一个目标,或令其中一个目标摸一张牌.',
    meng_kuisangti: '奎桑提',
    mengxuexing: '血性',
    mengxuexing_info: '锁定技,当你对一名角色造成伤害后,你令该角色本回合获得<奎>标记.当你使用牌对有<奎>标记的角色造成伤害时,此伤害+1并移除其<奎>标记.</br><span class=firetext>全盛姿态:拥有<奎>标记的角色不能响应你使用的牌.</span>',
    mengkui: '奎',
    mengkui_info: '',
    mengpijing: '辟径',
    mengpijing_info: '出牌阶段限一次,若你没有护甲,你失去一点体力并获得X点护甲(X为当前体力值的一半且向下取整);否则,失去所有护甲并摸等量的牌.</br><span class=firetext>全盛姿态:此技能改为出牌阶段限两次;x改为当前体力值.</span>',
    mengaoan: '傲岸',
    mengaoan_info: '出牌阶段限一次,你可以失去体力上限的一半(向上取整)的体力值,并对一名角色造成一点伤害.若如此做,你进入全盛姿态直到你的下个准备阶段.</br><span class=firetext>全盛姿态:你使用【杀】造成伤害后回复一点体力,你受到的伤害+1.</span>',
    mengquansheng: '',
    mengquansheng_info: '',
    meng_kaiyin: '凯隐',
    menganyi: '暗裔',
    menganyi_info: '锁定技,你始终装备着【拉亚斯特】.',
    mengduoshe: '夺舍',
    mengduoshe_info: '使命技.你造成伤害后获得一枚<影>,受到伤害后获得一枚<裔>.<span class=greentext>成功</span>:准备阶段,若你至少拥有三枚<裔>,你加1点体力上限并回复所有体力,修改<暗裔>.<span class=firetext>失败</span>:准备阶段,若你至少拥有三枚<影>,你减1点体力上限并回复所有体力,失去<暗裔>并获得<影流>.若两项均满足,则选择一项执行.',
    menganyi_rewrite: '暗裔',
    menganyi_rewrite_info: '锁定技,你始终装备着【拉亚斯特】.你造成1点伤害后回复1点体力;你受到伤害后摸两张牌.',
    mengyingliu: '影流',
    mengyingliu_info: '锁定技,你始终装备着【拉亚斯特】.你每回合使用的第一张【杀】不能被响应且伤害+1.你对体力值为1的角色造成的伤害+1.',
    meng_re_shalangbaizi: '砂狼白子',
    mengrejipo: '击破',
    mengrejipo_info: '当你对没有[弱点]的其他角色造成伤害时,你可以摸一张牌并令此伤害-1.若如此做,你亮出牌堆顶两张牌,若这两张牌类别相同/不同,目标角色获得[减攻]/[减防].若其有[弱点],移除其的[弱点]并令此伤害+1,执行对应的[弱点击破].</br><span class=firetext>[减攻]</span>=效果:你使用牌指定目标时,除非弃置两张牌(优先弃置手牌),否则此牌无效.</br><span class=firetext>[减攻击破]</span>=效果:本回合其的非锁定技无效.</br><span class=firetext>[减防]</span>=效果:防具无效且手牌上限基数为2.</br><span class=firetext>[减防击破]</span>=效果:此伤害改为随机属性,且你对其造成伤害后,本回合使用【杀】的次数上限+1.',
    mengzhiru_buff1: '',
    mengzhiru_buff1_info: '',
    mengzhiru_buff2: '',
    mengzhiru_buff2_info: '',
    mengzhilei: '掷雷',
    mengzhilei_info: '出牌阶段开始时,你展示牌堆顶的三张牌.若其中有类别相同的牌,你选择至多两名角色,并令这些角色各选择一项:</br>1.受到1点无来源的火焰伤害,弃置装备区内的所有牌.</br>2.弃置两张牌(优先弃置手牌).</br>若你选择的角色有[弱点],则该角色改为由你替其选择一项.',
    mengkongxi: '空袭',
    mengkongxi_info: '出牌阶段限一次,你可以将两张类别相同的牌当做无视防具的【万箭齐发】使用,且此牌造成的伤害+1.此牌结算结束后,你摸X张牌,X为此牌造成的伤害数.',
    meng_shalangbaizi: '砂狼白子',
    mengjipo: '击破',
    mengjipo_info: '你对其他角色造成伤害时,若其有[弱点],令其[击破];否则,可以令此伤害-1并令目标随机获得减攻/减防[弱点].</br><span class=firetext>[减攻]</span>你使用牌时随机弃置一张牌.</br><span class=firetext>[减防]</span>你的防具和护甲失效;且每失效一项,手牌上限-1.</br><span class=firetext>[击破]</span>白子摸一张牌,且白子下次对该角色造成的伤害+1.',
    mengruodian: '弱点',
    mengruodian_info: '',
    mengjiecai: '劫财',
    mengjiecai_info: '出牌阶段限一次,你可以弃置任意张伤害类牌并令等量其他角色选择一项:</br>1.将等量的牌交给你.</br>2.对其造成1点火焰伤害.</br>若其有[弱点］,改为两项同时执行.',
    mengyouji: '游击',
    mengyouji_info: '出牌阶段限一次,你可以视为对没有坐骑牌的其他角色使用【万箭齐发】,有[弱点]的角色不能响应此牌.',
    meng_sp_shenlilinghua: '神里绫华',
    mengyaohua: '夭华',
    mengyaohua_info: '转换技,当你对一名其他角色造成伤害时,你可以防止此伤害,:</br>阳:你与其翻面.</br>阴:你弃置自己与其各两张牌.',
    mengshuangyi: '霜溢',
    mengshuangyi_info: '韵律技,锁定技.</br>①若你的武将牌正面朝上,其他角色弃置牌后你获得之.每回合限一次,若你未以此法获得过牌,防止你受到的伤害.</br>②若你的武将牌背面朝上,你使用牌无法被响应,且你无法响应其他角色使用的牌.</br>转韵:当你受到或造成伤害后.',
    meng_luocharen: '罗刹人',
    mengnishang: '匿商',
    mengnishang_info: '①锁定技,你不能成为【顺手牵羊】【过河拆桥】的目标.②其他角色的出牌阶段限一次,其可以交给你两张牌,令你交给其除这两张牌外的一张牌.',
    mengshouwang: '守望',
    mengshouwang_info: '当一名角色使用【杀】指定其上一张【杀】包含的目标后,你可以弃置一张锦囊牌,对其攻击范围内的一名角色造成1点伤害.',
    mengwenrun: '温润',
    mengwenrun_info: '出牌阶段限一次.你可以弃置一张装备区内的牌,令一名角色回复1点体力且下回合使用【杀】的次数上限+1.若其武器栏内没有牌,其摸一张牌.',
    meng_sp_kafuka: '卡芙卡',
    menglaixin: '来信',
    menglaixin_info: '其他角色的回合开始时,你可以交给其一张牌,其选择一项:</br>1.将此牌交给你,与你各失去1点体力.</br>2.令你摸两张牌并移动场上一张牌.</br>3.与你各摸一张牌,本回合不能对你使用牌.',
    mengyueluo: '悦落',
    mengyueluo_info: '当你于摸牌阶段外不因此技获得牌后,你可以将其中一张红/黑色牌当【乐不思蜀】/【兵粮寸断】置入其他角色的判定区内.若此牌来源不为其他角色,你回复1点体力或摸一张牌;否则,视为对所有其他角色使用一张雷【杀】,你翻面并减1点体力上限.',
    meng_yanqing: '彦卿',
    mengjiaoqi: '骄麒',
    mengjiaoqi_info: '摸牌阶段结束时,你可以将任意张手牌当无距离限制的【杀】使用.此【杀】造成伤害时,你选择一个非空项:</br>1.失去1点体力并将手牌摸至唯一最多(至少摸两张,至多摸五张);2.{}.',
    mengduanao: '断傲',
    mengduanao_info: '每轮限一次.其他角色于你的回合内受到来自你的伤害后,或其他角色于你的回合外造成伤害后,你可以摸一张牌,与该角色拼点.若你赢,其[冻结];若你没赢,你可以弃置一种花色的所有牌,将<回复1点体力并摸两张牌>填入{}中,直到你发动〖骄麒〗造成伤害后.',
    meng_chiyuan: '赤鸢',
    mengshuyun: '疏云',
    mengshuyun_info: '一名角色受到伤害时,你可以令其进行判定,你可以弃置一张与判定结果花色相同的牌.若此牌为:</br>①红色:防止此伤害并对伤害来源造成一点伤害.</br>②黑色:其获得伤害来源一张牌,若此伤害大于1,此伤害-1.',
    mengcaixin: '裁心',
    mengcaixin_info: '当有伤害被防止时,或伤害值发生过减少的伤害事件结算结束后,你加一点体力上限.</br>你使用【酒】或【杀】后,若你的体力上限大于1,你可以减一点体力上限令此牌不计入次数限制.</br>当其他角色于你的回合使用牌时,你可以减一点体力上限,令此牌取消之并获得其一张牌.',
    meng_laiyila: '莱依拉',
    mengfanqi: '繁期',
    mengfanqi_info: '摸牌阶段,你可以多摸至多四张牌.若你以此法多摸的牌数:不为1,当你于出牌阶段使用牌时,此阶段不能再对其他角色使用牌;为4,下次发动此技至多多摸两张牌.',
    mengfanqi2: '',
    mengfanqi2_info: '',
    mengmiansi: '眠思',
    mengmiansi_info: '弃牌阶段开始时,你可以将武将牌翻至背面,并令本回合内获得的牌不计入手牌上限.</br>当你翻面后,你可以弃置至多两张牌并选择等量的选项:</br>1.将弃置的牌当无视防具的【杀】使用.</br>2.弃置至多三名其他角色共计三张牌(每名角色至多两张).</br>3.回复1点体力并摸一张牌.',
    mengmiansi2: '',
    mengmiansi2_info: '',
    meng_aierhaisen: '艾尔海森',
    mengtuiyan: '推演',
    mengtuiyan_info: '出牌阶段限一次,你可以与一名其他角色进行<推演>.该角色选择一张手牌并选择两项对此牌进行描述:1.此时是否有此牌的合法目标.</br>2.此牌是否是基本牌.</br>3.此牌的颜色.</br>你观看并选择该角色的一张手牌,若你与其选择的手牌相同,你摸X张牌(X为其的手牌数);否则,你失去1点体力并获得其选择的牌.',
    mengrishen: '日神',
    mengrishen_info: '锁定技,你于摸牌阶段外获得的牌明置;你使用明置的牌时,其他角色不可响应之.',
    meng_xiercanghai: '希儿·芙乐艾',
    meng_xiercanghaiblack: 'Vollerei',
    meng_xiercanghaiwhite: 'Seele',
    mengshuanghun: '双魂',
    mengshuanghun_info: '锁定技,游戏开始时,你从两张<人格>牌中选择一张置于武将牌上,你视为拥有武将牌上<人格>牌的所有技能.',
    mengsisheng: '死生',
    mengsisheng_info: '准备阶段,或你翻面后,你可以更换<人格>牌并复原武将牌,此技能无效直到你的下个回合结束.',
    mengbaizhou: '白昼',
    mengbaizhou_info: '出牌阶段限一次,你可以弃置任意张牌,令一名角色回复1点体力并摸等量的牌.',
    mengmingguang: '明光',
    mengmingguang_info: '每回合限一次,当一名角色回复体力后,你可以令其下次受到的伤害-1,你将手牌摸至体力上限.',
    mengheiye: '黑夜',
    mengheiye_info: '当你使用黑色牌造成伤害后,你可以令目标角色失去1点体力,你摸X张牌,X为其已损失的体力值.',
    menganying: '暗影',
    menganying_info: '每回合限一次,当一名角色失去体力后,你可以令其下次受到的伤害+1,你令其将手牌摸至/弃置至当前体力值.',
    meng_saixiliya: '塞西莉亚',
    mengxieheng1: '血痕1',
    mengxieheng1_info: '锁定技,转换技.阳: 你使用【杀】时,令所有角色加入此牌目标.阴: 你使用【桃】时,令所有角色加入此牌目标.',
    mengxieheng2: '血痕2',
    mengxieheng2_info: '锁定技,转换技.阳:你使用牌时,若目标包含其他角色,将其他角色移出目标.阴: 你使用牌时,若目标包含自己,将自己移出目标.',
    mengxieheng3: '血痕3',
    mengxieheng3_info: '锁定技,转换技.阳: 你使用的牌结算后,若没有角色因此牌受到伤害或回复体力,你将手牌摸至或弃置至已损失体力值,本回合你使用同类型的牌额外结算一次.阴: 你使用的牌结算后,若有角色因此牌受到伤害或回复体力,你失去一点体力并获得此牌,且此牌不计入使用次数.',
    meng_wu_xiaogong: '宵宫',
    mengyanshang: '炎上',
    mengyanshang_info: '锁定技,你使用本回合获得的牌无距离和次数限制.',
    menghuahuo: '花火',
    menghuahuo_info: '当你使用基本牌或普通锦囊牌后,你可以将与此牌同名的两张牌加入牌堆并标记为<花火>.当一张<花火>牌被使用后,你弃置牌堆中所有与之同名的牌.当一张<花火>牌不因使用而进入弃牌堆后,你摸一张牌.',
    mengxiaji: '夏祭',
    mengxiaji_info: '限定技,出牌阶段,你可以令所有角色的手牌视为【火攻】,直到你的回合开始或死亡.',
    meng_kalilu: '卡莉露',
    menglinting: '聆听',
    menglinting_info: '每回合限一次.①其他角色使用【桃】或非伤害类锦囊牌时,若你不是此牌目标,你可以交给其一张牌并加入此牌目标.②你使用【桃】或非伤害类锦囊牌时,你可以获得一名不为此牌目标的其他角色区域内一张牌并令其加入此牌目标.',
    mengquanxin: '泉心',
    mengquanxin_info: '每回合限一次,你可以将一张牌当非伤害类普通锦囊牌使用.',
    meng_funinna: '芙宁娜',
    mengduanming: '断明',
    mengduanming_info: '出牌阶段开始前,你可以猜测一名有手牌的其他角色手牌中的花色,其展示所有手牌.若你猜对的花色数:</br>1.小于1,你和该角色跳过下个出牌阶段.</br>2.不小于1,摸一张牌并弃置其一张牌.</br>3.不小于2,本回合对其使用牌无距离和次数限制.</br>4.不小于3,对其造成一点伤害.</br>5.大于3: 令其本回合非锁定技失效.',
    meng_naweilaite: '那维莱特',
    menglonglei: '龙泪',
    menglonglei_info: '锁定技,每轮开始时随机切换一种[天气].回合开始时,你可以重铸一张牌,将天气更改为【雷雨】.',
    menglonglei_append: '<span class="text" style="font-family: yuanli">【晴天】:无</br>【大雾】:计算与其他角色的距离+1.</br>【烈日】:准备阶段,除非弃置一张红色手牌,否则受到1点火焰伤害.</br>【雷雨】:使用或打出基本牌时,须弃置一张手牌.</br>【雷暴】:准备阶段,弃置一张装备牌,否则横置.</br>【狂风】:准备阶段,随机弃置当前角色场上的一张牌.</span>',
    menglonglei_faq: '天气',
    menglonglei_faq_info: '【晴天】:无</br>【大雾】:计算与其他角色的距离+1.</br>【烈日】:准备阶段,除非弃置一张红色手牌,否则受到1点火焰伤害.</br>【雷雨】:使用或打出基本牌时,须弃置一张牌.</br>【雷暴】:准备阶段,弃置一张装备牌,否则横置.</br>【狂风】:准备阶段,随机弃置当前角色场上的一张牌.',
    mengshuilong: '水龙',
    mengshuilong_info: '锁定技,【雷雨】对你无效.你将其他角色因【雷雨】弃置的牌置于武将牌上;一名角色受到【烈日】伤害后,你可以弃置一张〖水龙〗牌并令其回复1点体力.出牌阶段限一次,你可以将三张〖水龙〗牌置于牌堆顶,视为对一名角色使用无距离限制的【杀】并回复1点体力.',
    meng_wendi: '温迪',
    mengliufeng: '流风',
    mengliufeng_info: '每轮开始时,你令手牌上限+1/-1,其他角色计算与你的距离-1/+1.',
    menggexian: '歌仙',
    menggexian_info: '回合结束后,令所有与你距离为1的其他角色依次交给你一张牌,你依次执行前X个阶段:准备、判定、摸牌、出牌、弃牌、结束、任意.X为你以此法获得的牌数.',
    mengbaizhan: '百盏',
    mengbaizhan_info: '锁定技,你获得每回合第y张进入弃牌堆的牌;你每回合使用第y张牌时无距离和次数限制.y为你的手牌上限.',
    meng_abeiduo: '阿贝多',
    mengsucheng: '塑成',
    mengsucheng_info: '出牌阶段,你可以观看牌堆顶的一张牌.若记录中没有此牌的花色,你记录之;否则,视为对至多X名角色使用一张普通锦囊牌且本回合不能再发动此技,X为本回合此技的发动次数.',
    mengchuangsheng: '创生',
    mengchuangsheng_info: '当你使用或打出牌后,你可以声明一种花色并展示牌堆顶的牌.若牌堆顶的牌与你声明的花色相同,你获得之并令当前使用的牌不计入使用次数;否则,本回合不能再发动此技.',
    mengbaie: '白垩',
    mengbaie_info: '你每回合首次获得一种花色的牌后,你重置〖塑成〗或〖创生〗并清除记录.',
    meng_tuopa: '托帕',
    mengzhaiquan: '债权',
    mengzhaiquan_info: '其他角色获得你的牌后获得等量的<债>.当你需要使用或打出一张牌时,你可以令一名有<债>的角色选择一项:1.交给你一张可以响应的牌并移去一枚<债>.2.移去所有<债>并受到等量的火焰伤害.',
    mengshougou: '收购',
    mengshougou_info: '锁定技,有<债>的角色摸牌阶段结束时,你观看其的手牌并获得其中至多与该角色的<债>等量的牌,其移去等量的<债>.',
    mengshicha: '市察',
    mengshicha_info: '出牌阶段限一次,你可以选择一名角色.你摸X张牌并交给其等量的牌.X为其的体力上限与手牌数的差.',
    meng_yelianna: '叶莲娜',
    mengdonghen: '冬痕',
    mengdonghen_info: '转换技,当你成为其他角色使用牌的目标后,阳:令此牌对你无效.阴:你失去1点体力并获得此牌.',
    mengjiannu: '缄怒',
    mengjiannu_info: '①出牌阶段限一次,你可以重铸一种花色的所有手牌,摸一张牌或视为使用一张不计入使用次数的冰【杀】.②当你累计失去过每种花色的所有手牌后,重置此项并对一名角色造成1点冰属性伤害.',
    mengrongyu: '融语',
    mengrongyu_info: '你的手牌上限+1.当你死亡时,可以令一名角色失去所有体力并回复等量体力.若如此做,其本局游戏摸牌阶段多摸一张牌,出牌阶段可以多使用一张【杀】.',
    meng_aiyi: '爱衣',
    mengmiaobu: '瞄捕',
    mengmiaobu_info: '每轮开始时,你可以弃置任意张牌并记录等量的非装备牌的牌名(其他角色不可见且至多为3).有角色使用〖瞄捕①〗牌时,你选择一项并移除此牌名:</br>1.令此牌无效.</br>2.为此牌增加或减少一个目标.</br>3.摸两张牌并弃置当前回合角色区域内的一张牌.',
    mengyansuan: '演算',
    mengyansuan_info: '回合开始时,你依次执行以下X项:</br>1.摸X张牌.</br>2.本回合使用牌无距离和次数限制且手牌上限+X.</br>3.弃置至多X名其他角色各一张牌并令其本回合受到的火焰伤害+1.</br>X为本轮〖瞄捕②〗的发动次数.',
    meng_zhaoxing: '赵信',
    mengdianci: '电刺',
    mengdianci_info: '出牌阶段限一次,你可以将所有手牌当【杀】对距离为1的角色使用.若此【杀】造成伤害,你根据其实体牌包含的牌型,每有一张:</br>1.基本牌,你视为对其使用一张【杀】.</br>2.锦囊牌,摸一张牌.</br>3.武器牌,获得1点护甲.',
    mengdianci_buff: '',
    mengdianci_buff_info: '',
    mengwuwei: '无畏',
    mengwuwei_info: '锁定技,游戏开始时,你选择一个⌈决斗⌋目标且你计算与其的距离为1.当你造成或受到伤害后,若对方为⌈决斗⌋目标,你摸一张牌,否则,将⌈决斗⌋目标转移给对方.',
    meng_wodanheng: '我丹恒',
    menggufeng: '古枫',
    menggufeng_info: '①转换技,</br>阳:将一半(向下取整)的手牌当等量数值的【酒】使用.</br>阴:将X张手牌当等量数值的风【杀】使用,X为上次发动〖古枫①阳〗时使用的手牌数.</br>②每回合限一次,当你第二次发动〖古枫①〗后,你的手牌只能当一张上次使用过的单目标普通锦囊牌或〖古枫①〗的牌使用.',
    mengqinghua: '清化',
    mengqinghua_info: '锁定技,当一名角色连续使用两张转化牌后,若其中有一张牌造成过伤害,你与因此受到伤害的角色各摸一张牌且这两张转化牌均不计入使用次数.',
    meng_aisida: '艾丝妲',
    menglisi: '璃思',
    menglisi_info: '你每失去两张牌,失去武将牌上的最后一个技能.回合结束时,你回复武将牌上的技能并摸等量的牌.',
    menglisi_buff: '',
    menglisi_buff_info: '',
    mengshanzhi: '缮治',
    mengshanzhi_info: '出牌阶段,你可以弃置两张牌,令一名角色获得并使用(若可以使用)一张你声明类别与检索方向的随机牌.',
    mengchuxin: '雏心',
    mengchuxin_info: '你每回合首次使用一种类别的牌后,摸一张牌,可以将此牌交给一名其他角色.',
    meng_xinyanzhiluzhe: '薪炎之律者',
    mengliaohuang: '燎荒',
    mengliaohuang_info: '回合技(3),一名角色受到火焰/雷电/传导伤害后,你可以将两张点数为A的♦️️【火攻】/♠️️【浮雷】/♣️️【铁索连环】插入牌堆或交给伤害来源.',
    mengjingmang: '旌芒',
    mengjingmang_info: '限定技,否极技.出牌阶段,你可以令所有手牌数不小于你的角色将至少一张手牌当做等量项对其他所有被选择的角色使用:</br>1.【铁索连环】或【过河拆桥】.</br>2.火【杀】或雷【杀】.</br>3.【决斗】或【五谷丰登】.</br>泰来:重置<燎荒>.',
    meng_sb_jingyuan: '景元',
    menglaoshen: '劳神',
    menglaoshen_info: '锁定技,当你因使用或打出失去牌后,你与一名其他角色各失去一点体力.当你因弃置失去牌后,摸一张牌',
    mengguiqu: '归去',
    mengguiqu_info: '每回合限X次,X为你已损失的体力值.你可以弃置两张类型相同的牌并视为使用或打出任意一张此类型的牌(无距离限制且不计入次数上限),其他角色本回合计算与你的距离+1.若弃置的牌为装备牌,改为将其中一张置入装备区.若你因此失去所有牌,你将手牌摸至体力上限并失去一点体力,本回合你所有技能失效.',
    mengguiqu2: '归去',
    meng_maisha: '麦莎',
    mengyanhu: '掩护',
    mengyanhu_info: '每回合限一次.一名角色受到其他角色造成的伤害时,你可以将此伤害转移给你,视为对伤害来源使用【杀】.',
    mengguanghuan: '光环',
    mengguanghuan_info: '结束阶段,你可以令一名体力值最低的角色回复1点体力并摸一张牌.',
    meng_lita: '丽塔',
    mengsishou: '死守',
    mengsishou_info: '其他角色的准备阶段,你可以与该角色拼点.若你赢,其本回合只能对你使用牌;若你没赢,你摸一张牌且本回合不能响应该角色使用的牌.',
    mengyanjue: '延决',
    mengyanjue_info: '你拼点后可以令一名角色摸一张牌.若该角色不为你,你摸一张牌.',
    mengsizhi: '死志',
    mengsizhi_info: '你受到伤害后,可以弃置伤害来源的一张牌.若此牌为红色,你回复一点体力;否则,你弃置一张牌,该角色摸一张牌.',
    meng_ruanmei: '阮·梅',
    mengtansheng: '探生',
    mengtansheng_info: '出牌阶段每种花色限一次.你可以弃置一张牌并获得一张随机【生命】牌.若这两张牌:</br>1.颜色相同,本回合使用【生命】牌不能被响应且可以多选择一个目标.</br>2.颜色不同,本回合不能再发动此技.</br>3.点数和花色均相同,你亮出牌堆顶20张牌并可以依次使用之.',
    mengzidian: '渍点',
    mengzidian_info: '一名角色的回合结束后,若你于此回合改变过体力或手牌,你获得一张随机【生命】牌.',
    meng_jingyuan: '景元',
    mengchoumou: '绸缪',
    mengchoumou_info: '①你可以将两张类型相同的牌当作任意一张普通锦囊牌使用.</br>②若以此法使用的牌为:</br>黑色,摸一张牌且额外对一名角色使用一次此牌;</br>红色,摸一张牌并获得当前回合角色一张手牌;</br>🃏,本回合不能发动①.</br>③每回合结束后,摸x张牌.x为此技发动的次数.',
    meng_hutao: '胡桃',
    mengxifeng: '希逢',
    mengxifeng_info: '锁定技,你将初始手牌标记为<逢>.你失去一张<逢>后,摸一张牌.',
    mengxifeng_bg: '逢',
    mengliaoshi: '了逝',
    mengliaoshi_info: '觉醒技,每回合结束阶段,若你没有<逢>,你加一点体力上限并重铸区域内所有牌,修改<万生>.',
    mengwansheng: '万生',
    mengwansheng_info: '锁定技,一张单体牌被抵消后,你将此牌置于武将牌上,称为<枢>.若<枢>数大于你的体力上限,你弃一张牌.',
    mengjiu: '柩',
    mengwansheng_rewrite: '万生',
    mengwansheng_rewrite_info: '①一张单体牌被抵消后,且<枢>数小于你的体力上限,你将此牌置于武将牌上,称为<枢>.②一张基本牌或普通锦囊牌被使用时,你可将一张同类型的<枢>置入弃牌堆并摸一张牌,令此牌额外结算一次.',
    meng_qingqizhe: '倾奇者',
    mengsanpan: '三叛',
    mengsanpan_info: '锁定技,回合开始时,你每满足一项,可以获得其他角色区域内的一张牌:</br>1.上一轮你于回合外体力值减少过.</br>2.上一轮你于回合外失去过牌.</br>3.你的判定区有牌.</br>若均不满足,你可以弃置一张牌,令一名角色回复1点体力或摸两张牌.',
    mengnixin: '匿心',
    mengnixin_info: '锁定技,你的手牌上限+1.你于回合外对其他角色造成伤害时,或其他角色于其回合外对你造成伤害时,防止之.',
    menggulu: '孤履',
    menggulu_info: '当你于回合内获得其他角色的牌后,你可以选择一项:</br>1.重铸其装备区内的一张牌.若此牌为武器牌,则其额外摸一张牌.</br>2.你弃置一张装备牌并对其造成1点雷电伤害.若此牌为武器牌,则你回复1点体力.',
    meng_kafuka: '卡芙卡',
    mengyuemian: '月绵',
    mengyuemian_info: '锁定技,你不能被横置.当有角色受到[触电]伤害后,你摸一张牌或回复1点体力.',
    mengyexuan: '夜喧',
    mengyexuan_info: '出牌阶段限一次,你可以将至多三张牌置于牌堆顶,令等量的其他角色依次进行判定,若结果为:</br>1.红色,你观看并选择其的一张手牌,指定另一名角色.若其可以对指定的角色使用此牌,其使用之;否则,你获得此牌并视为其对你指定的角色使用【杀】.</br>2.黑色,令该角色[触电],引爆其的所有dot效果.',
    meng_nuoaier: '诺艾尔',
    mengchawei: '察微',
    mengchawei_info: '准备阶段或你受到伤害后,你可以摸一张牌并观看一名角色的手牌.若如此做,你弃置其一张牌,或令其摸一张牌.',
    mengkuangzhu: '匡助',
    mengkuangzhu_info: '每回合限一次,当一名其他角色于回合外需要使用或打出一张基本牌时,你可以受到1点伤害并视为其使用或打出此牌.若如此做,其可以令你摸一张牌.',
    mengjianshou: '缄守',
    mengjianshou_info: '锁定技.①你不能成为【顺手牵羊】的目标.</br>②你于回合外获得的牌均置于武将牌上,称为<言>;若此为本回合首次获得<言>,你获得一枚护甲.</br>③当你死亡后,令一名角色获得所有<言>并回复1点体力.',
    meng_shuoyeguanxing: '朔夜观星',
    mengtianfu: '天覆',
    mengtianfu_info: '锁定技,每当有角色体力值发生变化时,你获得与变化数等量的<星>(至多为5).准备阶段,你移除所有<星>标记并观看牌堆顶等量的牌,你可以用手牌交换这些牌并将这些牌置于牌堆顶和牌堆底.',
    mengdizai: '地载',
    mengdizai_info: '出牌阶段限一次,你可以弃置一张牌,令选择两名其他角色从牌堆底各摸一张牌,并进行拼点.赢的角色弃置两张牌并对没赢的角色造成一点伤害;若均没赢,则你获得两张拼点牌(不计入手牌上限).',
    mengfengyang: '风扬',
    mengfengyang_info: '你不能成为其他角色拼点的目标.一名角色发动拼点后,你可以依次观看并用任意张手牌交换此次拼点中没赢的角色的手牌.',
    meng_sp_fuxuan: '符玄',
    mengchitong: '斥痛',
    mengchitong_info: '准备阶段,你失去一点体力.每名角色限一次,当一名角色受到伤害时,你可以防止之;若该角色不是你,你失去一点体力并摸两张牌.',
    mengxizhi: '悉知',
    mengxizhi_info: '锁定技,当你失去体力后,观看并调整牌堆顶等同于体力值数量的牌.当你一次性获得至少两张牌时,若这些牌:均为红色,令一名角色回复一点体力;均为黑色,你弃置任意角色共计两张牌.',
    meng_wangxiayitong: '王下一桶',
    mengmoli: '磨砺',
    mengmoli_info: '出牌阶段限一次,你可以视为使用【决斗】.若你因此受到伤害,你重铸所有伤害类牌并视为对同一目标使用【决斗】;若你因此造成伤害,你回复一点体力并获得受伤角色区域内一张牌.',
    meng_re_zhongyanzhiluzhe: '终焉之律者',
    mengrezhaoxi: '朝夕',
    mengrezhaoxi_info: '锁定技,转换技.你于①当前回合②非当前回合获得的手牌只能当做【火攻】使用.',
    mengrepingji: '平寂',
    mengrepingji_info: '你于出牌阶段使用第x张牌后,可以摸x张牌(x为中央区牌数的一半).',
    mengrecifan: '赐繁',
    mengrecifan_info: '一名角色脱离濒死时,你可以令每名角色获得中央区的一张牌.',
    meng_baizhu: '白术',
    mengzhenyao: '诊要',
    mengzhenyao_info: '出牌阶段限一次,你可以与一名其他角色交换手牌.你们同时选择一项,依次执行:1.将一张手牌替换为【毒】.2.创造一张【无中生有】.3.与对方交换手牌.',
    mengwenji: '问疾',
    mengwenji_info: '当你对其他角色造成伤害后,或受到其他角色造成的伤害后,你可以视为对其使用一张【推心置腹】.',
    meng_luka: '卢卡',
    menghanxin: '含辛',
    menghanxin_info: '①出牌阶段限一次,你可以进行一次对方点数+2的拼点.赢的角色对另一方造成1点伤害.②你造成或受到伤害后,可以重铸至多两张牌.',
    mengquanzhi: '拳志',
    mengquanzhi_info: '①你使用点数小于X的牌无次数限制(X为本回合其他角色失去的牌的最大点数).②一名角色造成伤害后,你可以令手牌数或体力值较小的一方摸一张牌.若伤害来源的体力值较大,本回合〖拳志〗②失效.',
    meng_guinaifen: '桂乃芬',
    mengzhuyi: '诸艺',
    mengzhuyi_info: '出牌阶段开始时,你可以重铸所有基本牌或锦囊牌,且本回合不能使用或打出此类牌,本回合使用以下类型的牌时:</br>基本牌,无距离限制且不能被响应.</br>锦囊牌,可以增加或减少一个目标.</br>装备牌,摸一张牌.',
    menghenhuo: '狠活',
    menghenhuo_info: '出牌阶段限一次,你可以对自己造成1点伤害,本回合令你的一种类型的牌视为另一种类型.',
    mengtangcai: '堂彩',
    mengtangcai_info: '当你受到伤害后,你可以展示区域内所有牌并摸X张牌(X为其中包含的类型数).',
    meng_sp_naxida: '纳西妲',
    mengxushi: '虚识',
    mengxushi_info: '锁定技.你使用或打出手牌时,若你本回合使用或打出过此花色,弃一张牌;否则,摸一张牌.',
    mengnanke: '南柯',
    mengnanke_info: '每回合限一次.你的牌被弃置后、你受到伤害后、出牌阶段,你可以删除本回合所有角色使用或打出牌的记录和计入次数上限的用牌记录.',
    mengzhezhi: '折枝',
    mengzhezhi_info: '一名角色的回合结束阶段,若你或其本回合没有使用或打出过牌的记录,你可以将一张红/黑色牌当任意基本/锦囊牌对其使用.',
    meng_zhipeizhiluzhe: '支配之律者',
    mengzongou: '纵偶',
    mengzongou_info: '出牌阶段限一次,你可以弃置一张普通锦囊牌,并亮出牌顶X张牌(X为此牌名字数+你的已损失体力值),将其中包含的花色分配给任意其他角色,称为<梦游>.其他角色使用即时牌指定唯一目标时,你可以移去同花色的<梦游>,并修改此牌目标.',
    mengkuixi: '傀戏',
    mengkuixi_info: '每回合限一次.当一名角色使用即时牌时,若此牌的描述中含有<伤害>、<回复>、<弃置>,则你可以选择一项:</br>1.为此牌增加/减少1个目标.</br>2.令此牌无法被响应.</br>3.此牌结算完毕后,你将此牌花色称为<梦游>并分配给一名其他角色.',
    meng_zhenliyisheng: '真理医生',
    mengsigu: '思故',
    mengsigu_info: '每回合限一次,一名角色获得负面效果后,你可以进行一次判定.若结果为:红色,你摸一张牌;黑色,你对其造成1点伤害.',
    mengbeilun: '悖论',
    mengbeilun_info: '每轮限一次,你对一名角色造成伤害后,你令其获得[智者的短见].',
    hyyzBuff_duanjian: '智者的短见',
    mengzhenli: '真理',
    mengzhenli_info: '每轮限三次.有[智者的短见]的角色受到其他角色造成的伤害后,你可以对其造成1点伤害.',
    meng_jiutiao: '九条裟罗',
    mengyayu: '鸦羽',
    mengyayu_info: '锁定技.游戏开始时,你令一名其他角色获得〖羽〗.你对〖羽〗记录的角色造成伤害后,拥有〖羽〗的角色与你各摸一张牌.',
    mengyu: '羽',
    mengyu_info: '锁定技.①其他角色的回合开始时,你记录一名其他角色.②你的回合开始时:1.若九条裟罗未对你选择的角色造成过伤害,其失去1点体力.2.重置〖羽〗.',
    mengwuyan: '乌眼',
    mengwuyan_info: '锁定技.拥有〖羽〗的角色受到致命伤害时,此伤害转移给你.拥有〖羽〗的角色攻击范围内的角色视为在你的攻击范围内.',
    mengchezheng: '彻证',
    mengchezheng_info: '限定技.出牌阶段,你可以减1点体力上限,清除场上的〖羽〗,令一名角色获得〖羽〗.',
    meng_pink: '颦客',
    mengyingzhu: '荧逐',
    mengyingzhu_info: "锁定技,每轮开始时,你<先辅>一名其他角色并塑其为<span class='firetext'><偶></span>;当你受到伤害后,你与一名<span class='firetext'><偶></span>依次遗计X(X为你<先辅>其的次数且至多为3).",
    mengqiongpi: '茕辟',
    mengqiongpi_info: "<span class='firetext'>使命技</span>,当你或<span class='firetext'><偶></span>获得另一名角色的牌后或对另一名角色造成伤害后,你将该角色的一张牌置为<逆>.失败:当你成为<span class='firetext'><偶></span>使用虚拟牌的目标时,其获得你的所有牌与所有<逆>.",
    meng_heitiane: '黑天鹅',
    mengshuijing: '水镜',
    mengshuijing_info: "出牌阶段限一次,你可以暗选一名角色.该角色的回合结束时,若其本轮执行过:①造成<span class='thundertext'>1</span>点伤害.②弃置<span class='thundertext'>1</span>张牌.其对自己执行满足项的效果,你对自己执行其未满足项的效果,重置此技.",
    mengliuguang: '流光',
    mengliuguang_info: "每回合首次有牌被弃置后,你可以获得其中X张牌,或令下回合〖水镜〗中的数字<span class='greentext'>+1</span>/<span class='firetext'>-1</span>(X为〖水镜〗中的数字).",
    mengzhenzhao: '朕兆',
    mengzhenzhao_info: '当你受到一点伤害后,你可以令一名角色弃置X张牌,可以视为该角色对一名除你外的角色造成X点伤害.',
    meng_jingliu: '镜流',
    mengzuanyue: '攥月',
    mengzuanyue_info: '每轮每种牌名限一次.若你的牌中红/黑色牌居多,你可以将差值数量的红/黑色牌当一张伤害/非伤害类单体即时牌使用或打出.',
    mengshishui: '逝水',
    mengshishui_info: '转换技,锁定技,当一张装备牌非依此法进入弃牌堆后,若你场上有与此牌颜色相同的牌,阳:你弃置这些牌并获得等量的其他角色各一张牌.阴:你失去1点体力并将这些牌当做一张无法被响应的冰【杀】使用.',
    meng_sangbo: '桑博',
    mengdahun: '打诨',
    mengdahun_info: '每回合限一次,当你受到有来源的伤害时,你可以防止此伤害.直到本回合结束,若伤害来源再次对你使用牌,则下回合开始时,你受到等量的伤害且其获得一层[风化],否则其摸等量的牌.',
    mengzishu: '自熟',
    mengzishu_info: '每名角色的回合限X次(X为体力值小于你的角色数),你攻击范围内的角色不因此技获得牌后,你可以摸一张牌.若你的手牌数、装备区的牌数、体力值中有一项大于其,则你交给其一张牌.',
    meng_shiwaluo: '史瓦罗',
    mengshouhu: '守护',
    mengshouhu_info: '①每回合限一次.当其他角色受到大于1点的伤害时,你可以将此伤害转移给你,并发动〖刚烈〗.②准备阶段,令X名没有护甲的角色获得一点护甲(X为你已损失的体力值).',
    mengbushu: '部署',
    mengbushu_info: '结束阶段,若你本回合使用过牌的花色数不小于当前体力值,你可以令至多两名角色选择并从游戏外获得一张火【杀】、【万箭齐发】或【调虎离山】.',
    meng_leidianzhen: '雷电真',
    mengjiaohui: '教诲',
    mengjiaohui_info: '出牌阶段限一次,你可以弃置一张牌并令一名角色摸一张牌.若如此做,直到该角色的回合结束,其使用【杀】的次数上限+1.',
    mengzhufu: '祝福',
    mengzhufu_info: '每回合限一次,一名角色受到伤害后,你可以弃置一张红色牌,令其回复1点体力.',
    mengxvyu: '须臾',
    mengxvyu_info: '主公技,每回合限一次,原神势力角色于回合外获得牌后,你可以令其摸一张牌.',
    meng_sp_xier: '希儿',
    meng_shoupan: '守盼',
    meng_shoupan_info: '①你拥有界<不屈※>;②每轮限两次,一名角色的回合结束时,你可以失去1点体力或弃置一张红色牌并视为使用一张【杀】,此【杀】结算后其进行一次X为此【杀】造成伤害值的<恢拓>判定.',
    meng_xingan: '行暗',
    meng_xingan_info: '每名角色每种牌名限一次,你使用伤害类牌指定目标时,你可以取消之并声明1~3的一个数字,该角色须弃置等量张不同类型的手牌,否则翻面并摸等量的牌.',
    //感谢为群扩提供代码支持的魈、就离谱
    //以下为粉丝提供的代码(含粉丝修改的代码)
    meng_kaiya: '凯亚',
    mengxuanse: '玄色',
    mengxuanse_info: '你可以将牌堆顶、牌堆底、弃牌堆顶、弃牌堆底的非装备牌使用或打出.',
    menglinwei: '临危',
    menglinwei_info: '当你受到或造成伤害后,你可以弃置你与对方手牌较多的角色的一张牌,获得一张<玄色>牌.',
    menganzhi: '暗志',
    menganzhi_info: '锁定技,你使用或打出的非装备牌进入弃牌堆后,将之随机插入牌堆.',
    meng_shaoxia: '少侠',
    mengweie: '伪恶',
    mengweie_info: '每轮开始时,令有〖曙光〗的角色摸两张牌;你可以令一名角色获得〖曙光〗并视为对其造成过1点伤害.',
    mengshuguang: '曙光',
    mengshuguang_info: '你的手牌上限+2.其他角色的基本牌因弃置进入弃牌堆后,其可以将这些牌交给你.',
    mengmushou: '幕手',
    mengmushou_info: '使命技.锁定技,你不能成为黑色锦囊牌的目标.</br><span class=greentext>成功</span>:有〖曙光〗的角色获得二十八张牌后,你加两点体力上限并回复2点体力.</br><span class=firetext>失败</span>:有〖曙光〗的角色进入濒死状态时,你减2点体力上限并令其回复2点体力.</br><hr><span class=thundertext>〖幕手〗失效后,你获得〖身退〗.</span>',
    mengshentui: '身退',
    mengshentui_info: '你对/被其他角色使用单体即时牌时,体力上限较小的一方不能响应此牌.',
    JLP_furina: '芙宁娜',
    visible_JLPjuxing: '罪行',
    JLPjuxing: '踽行',
    JLPjuxing_info: '使命技,锁定技.每轮开始时,废除最后一个装备栏,并令场上牌数最少的一名角色明置并弃置一张手牌.</br><hr><font color =#00FF00>成功</font>:洗牌后,你回复所有体力,交换〖神仪〗中的<<font color=#0fa7ff>回复</font>>和<font color=#ff0dac>废除</font>>,将未废除的装备栏转移给一名其他角色并随机置入装备牌.</br><hr><font color=#FF4500>失败</font>:若你的装备栏均被废除,你失去〖神仪〗,并令其他角色各失去1点体力.</br><hr><font color=#48D1CC>〖踽行〗失效后,你获得〖人生〗</font>',
    JLPshenyi: '神仪',
    JLPshenyi_info: '锁定技,你的手牌数至少为装备栏数.你于出牌阶段外失去<font color=#0fa7ff>〖神仪〗</font>/<font color=#ff0dac>非〖神仪〗</font>牌后,<font color=#0fa7ff>回复</font>/<font color=#ff0dac>废除</font>最后一个装备栏.',
    JLPrensheng: '人生',
    JLPrensheng_info: '锁定技,你的准备阶段和结束阶段随机改为摸牌阶段和弃牌阶段.',
    JLPshenyi_rewrite: '神仪',
    JLPshenyi_rewrite_info: '锁定技,你的手牌数至少为装备栏数.你于出牌阶段外失去<font color=#0fa7ff>〖神仪〗</font>/<font color=#ff0dac>非〖神仪〗</font>牌后,<font color=#ff0dac>废除</font>/<font color=#0fa7ff>回复</font>最后一个装备栏.',
    JLP_zhongli: '钟离',
    JLPqiyue: '契约',
    JLPqiyue_info: '每名角色的出牌阶段限一次.该角色可以展示一张牌,并邀请其他角色展示一张其指定类型的牌,该角色可以用自己的展示牌交换一名其他角色的展示牌.',
    JLPqiyue2: '契约',
    JLPqiyue2_info: '',
    JLPluheng: '律衡',
    JLPluheng_info: '锁定技,当一名角色的牌进入其他角色的区域后,你选择一项:</br>1. 为前者的 空装备栏 随机置入一张装备牌;否则摸一张牌.</br>2.令后者将一张装备牌当【杀】对自己使用;否则弃一张牌.',
    JLPminhui: '暝晖',
    JLPminhui_info: '主公技,限定技.一名其他角色造成击杀后,你可以将所有装备牌依次对其使用.',
    JLP_nahida: '纳西妲',
    JLPkunchu: '困雏',
    JLPkunchu_info: '否极技,锁定技.你不能对未对你使用过牌的其他角色使用牌;其他角色对你使用牌时,你转移给其一个⟬装备栏⟭.</br>泰来:你回复所有体力且本巡调离.',
    JLPxukong: '虚空',
    JLPxukong_info: '锁定技,你或有扩展装备栏的角色受到伤害后,观看并交换牌堆顶的两张牌和其的手牌.若其因此获得描述含有牌名的牌,你废除一个装备栏,其移除所有扩展装备栏并失去1点体力.',
    JLPzhuguang: '逐光',
    JLPzhuguang_info: '锁定技,你使用单体牌前,重新指定使用者和使用目标.',
    meng_sp_ren: '刃',
    mengkunsheng: '困生',
    mengkunsheng_info: '锁定技,每回合结束时,交换你的体力值和已损失体力值.',
    mengyetu: '业途',
    mengyetu_info: '锁定技,你使用【杀】时,失去1点体力并附魔<风>与〖誓仇〗.',
    mengenciJLP: '恩赐',
    mengenciJLP_info: '锁定技,当你进入濒死时,回复1点体力并重新获得一个含有<死>字的技能.',
    JLP_leidianying: '雷电影',
    JLPwuwang: '无妄',
    JLPwuwang_info: '锁定技,你的初始牌为【影】.你受到伤害时,或一名角色的判定结果确定为黑色时,你改为将一个{<span class="thundertext" style="font-family: yuanli">首项</span>}当雷【杀】使用,结算中目标角色与{<span class="thundertext" style="font-family: yuanli">此项</span>}类型相同的事物失效.<span class="thundertext" style="font-family: yuanli"><li>①【影】<li>②护甲<li>③普通技能</span>',
    JLPwuwang_append: '',
    JLPwuxiang: '无想',
    JLPwuxiang_info: '锁定技.每回合开始时,若〖无妄〗:没有项目,你装备【梦想一心】;有项目但你没有{<span class="thundertext" style="font-family: yuanli">首项</span>}的事物,你删除此项并获得{<span class="firetext" style="font-family: yuanli">同序号的技能</span>}.<span class="firetext" style="font-family: yuanli"><li>①〖无念〗<li>②〖无梦〗<li>③〖无我〗</span>',
    JLPwuxiang_append: '',
    JLPwunian: '无念',
    JLPwunian_info: '每回合结束后,若本回合没有角色对你使用过牌,你可以废除一个非武器栏,获得一枚护甲.',
    JLPwumeng: '无梦',
    JLPwumeng_info: '你使用【杀】指定目标后,可以获得目标角色一个失效的普通技能;若其有未失效的技能,你失去一个普通技能.',
    JLPwuwo: '无我',
    JLPwuwo_info: '锁定技,你使用【杀】后,若目标角色未改变体力值,你重铸一张牌且此【杀】不计入次数上限;否则,你将其的一张牌移至你的合法区域.',
    meng_luocha: '罗刹',
    mengxingmou: '行谋',
    mengxingmou_info: '锁定技,当你于回合内/外使用一张非转化非虚拟的牌后,你需将一张牌当做【铁索连环】(可重铸) / 【火攻】使用.',
    mengzhangtu: '张图',
    mengzhangtu_info: '转换技,当你使用①阳:伤害类锦囊牌时,你可以摸x张牌;②阴:非伤害类锦囊牌时,你可以令一名角色回复一点体力并弃置每个区域一张牌(x为场上横置的角色数)',
    meng_natasha: '娜塔莎',
    mengjiuhu: '救护',
    mengjiuhu_info: '出牌阶段限一次,你可以弃置一张红色牌,令一名已受伤的角色回复1点体力,并令其获得<护>;回合开始时,你令有<护>的角色回复1点体力或摸一张牌,并移除<护>.',
    mengyizhe: '医者',
    mengyizhe_info: '一名角色回复体力时,你可以弃置一张牌, 令此回复值+1并移除其所有负面效果,你摸一张牌.',
    meng_wu_jingyuan: '景元',
    mengkanxing: '勘行',
    mengkanxing_info: '①当你不因〖遣将〗或此法而失去一张牌后,你可以摸一张牌,将一张牌置于武将牌上,称为<神君>;②每轮结束,你须弃置所有<神君>,视为使用等同于<神君>数的雷【杀】',
    mengqianjiang: '遣将',
    mengqianjiang_info: '锁定技,当你受到伤害后,若你有<神君>,你须弃置一张<神君>,回复一点体力;否则你摸一张牌.',
    meng_tuoma: '托马',
    mengjingzheng: '精政',
    mengjingzheng_info: '当一张字母牌不因使用、打出或重铸而进入弃牌堆后,你获得之.你可以将从场上移动一张你判定区没有的牌置于你的判定区.',
    menghuchi: '护持',
    menghuchi_info: '当你或你攻击范围内的角色被牌指定为唯一目标后,你可以与牌的使用者拼点.若你赢,本回合此牌与〖护持〗失效;否则,本回合〖精政〗失效.',
    meng_diluke: '迪卢克',
    mengniyan: '逆焰',
    mengniyan_info: '出牌阶段限一次,你可以弃置一张红色牌,视为对一名角色使用三张不计入次数的火【杀】.',
    mengliming: '黎明',
    mengliming_info: '每两轮限一次,出牌阶段,你可以对你攻击范围内的角色造成2点火焰伤害.',
    JLP_huohuo: '藿藿',
    JLPweiqie: '畏怯',
    JLPweiqie_info: '当你成为【杀】的唯一目标时,你可以将此牌改为【乐不思蜀】(须合法).',
    JLPxvxing: '煦心',
    JLPxvxing_info: '准备阶段,你可以令一名角色将一个区域内的所有牌当任意一张普通锦囊牌使用.结算后若此牌的目标包含你,其回复1点体力;目标数大于其体力值,其对你造成1点伤害.',
    meng_kalian: '卡莲',
    mengguaili: '怪力',
    mengguaili_info: '当你造成1点伤害后,你可以令目标失去1点体力.',
    mengshengnv: '圣女',
    mengshengnv_info: '当一名其他角色脱离濒死状态后,你可以令其摸一张牌,你回复1点体力,若你的身份为主公,则你增加1点体力上限.',
    mengxinsheng: '新生',
    mengxinsheng_info: '主公技,限定技.当你的濒死状态结算完毕且你未脱离濒死状态时,你可以回复3点体力.',
    meng_shanhugongxinhai: '珊瑚宫心海',
    mengchengxin: '澄心',
    mengchengxin_info: '每轮每个区域限一次,你可以将一个区域的所有牌当做任意一张智囊牌或蓄谋牌使用.此牌结算完成后,若你区域内的牌数不小于此牌的实体牌数,你可以用此牌的实体牌蓄谋.',
    mengshouyuan: '守愿',
    mengshouyuan_info: '当你失去一个区域的最后一张牌后,你可以废除该区域,为剩余区域置入等同于本轮<澄心>发动次数的牌.当你的体力值变化后,你回复一个区域或重置<澄心>.',
    meng_huahuo: '花火',
    mengpogui: '破规',
    mengpogui_info: '锁定技,全场手牌上限+2.摸牌阶段,你将手牌补至手牌上限.',
    mengzhiyv: '纸鱼',
    mengzhiyv_info: '回合开始时,你获得2个<纸鱼>标记,出牌阶段,你可以将一枚标记转移至其他角色.当其他角色回合开始时,若其有纸鱼标记则判定,若为红,其受到一点无来源的火焰伤害,若为黑,其扣置所有手牌直到出牌阶段开始.',
    mengzhiyv2: '纸鱼',
    mengzhiyv2_info: '',
    mengqianmian: '千面',
    mengqianmian_info: '当场上有纸鱼标记判定时,你获得一点充能.当一名角色出牌阶段开始前,你可以失去4点充能,令其将手牌摸至上限.',
    meng_sb_ren: '刃',
    mengshuhu: '疏忽',
    mengshuhu_info: '锁定技,你每造成和受到4次伤害,对一名其他角色造成1点伤害,你回复1点体力.',
    mengdapi: '大辟',
    mengdapi_info: '两轮限一次,出牌阶段,你可以弃置一张黑色基本牌,将体力值调整至体力上限的一半(向上取整),你对一名其他角色造成2点伤害.',
    meng_danhengbailu: '丹恒&白露',
    mengwugui: '无归',
    mengwugui_info: '每回合每项限一次,你使用牌时,选择一项</br>①受到1点雷电伤害.</br>②弃置两张牌.</br>③横置.</br>之后令一名角色抉择:选择另一项或进行【闪电】判定.',
    menggushen: '顾神',
    menggushen_info: '出牌阶段限一次,你可选择一项</br>①回复1点体力.</br>②摸两张牌.</br>③复原武将牌.</br>之后进行【闪电】判定或令一名其他角色执行相同项',
    mengjuefeng: '绝峰',
    mengjuefeng_info: '回合技,你受到或造成伤害后,摸两张牌.之后造成伤害的角色可交换<无归><顾神>中的一项或令你将一张牌置于牌堆顶.',
    JLP_wendy: '温迪',
    JLPjulan: '聚岚',
    JLPjulan_info: '每个轮次开始时,令所有角色抉择:</br>横置并摸一张牌;复原并重铸手牌;</br>将一张牌交给你,你可令其恢拓 1 .</br>你因此获得的杀,不计入所有上限、</br>默认指定与你横置状态不同的角色.',
    JLPgongdan: '弓胆',
    JLPgongdan_info: '转换技,锁定技,你使用【杀】时,</br>阳:所有目标替换为其中一个目标.</br>阴:重置琴心并令此牌不能被响应.</br>交换与琴心同名的一对选项.',
    JLPqinxin: '琴心',
    JLPqinxin_info: '转换技,限定技,你使用锦囊牌时,</br>阳:醉酒并切换此牌的可响应状态.</br>阴:将此牌名改为铁索连环或决斗.</br>此牌造成伤害后,摸与之等量的牌,</br>若手牌唯一最多,分配你超出的牌.',
    meng_huangquan: '黄泉',
    mengkuque: '枯榷',
    mengkuque_info: '准备阶段,你可以废除一个装备栏并摸x张牌(x为你已废除的装备栏数量).若你废除了你最后一个装备栏,则本回合你计算与其他角色距离均为一',
    mengnailuo: '奈落',
    mengnailuo_info: '锁定技,若你已废除装备栏数量为1/3/5时,你获得以下前等量个效果:摸牌阶段多摸x张牌/使用【杀】次数+x/每回合使用的前x张【杀】伤害+1(x为你已废除的装备栏数量).结束阶段,若你装备栏均处于废除状态,则你死亡.',
    meng_re_xinyanzhiluzhe: '薪炎之律者',
    mengweizhu: '危烛',
    mengweizhu_info: '锁定技,你参与牌结算后,展示所有红色手牌并重铸其中任意张与此牌类型相同的牌,若你展示/重铸了所有手牌,对使用者/目标造成一点火焰伤害.',
    mengbinye: '秉烨',
    mengbinye_info: '锁定技,你失去最后的黑色/红色手牌后,下一次获得的此颜色的牌将尽可能为能对自己使用的牌.',
    meng_leidianyayi: '雷电芽衣',
    mengwanzui: '挽罪',
    mengwanzui_info: '当一名其他角色成为一张牌的唯一目标时,若你本轮未成为过同名牌的目标,你可以弃置一张同类型牌,将此牌目标改为你.',
    mengchangci: '长辞',
    mengchangci_info: '当你于一个回合首次弃置牌时,你可以视为对本回合成为过牌的目标的所有角色使用一张【决斗】,你依次与这些角色各摸一张牌且本轮你与其计算与对方的距离+1.',
    mengguxing2: '孤行',
    mengguxing2_info: '锁定技,当你成为一张牌的目标时,你令此牌改为无来源.',
    meng_shajin: '砂金',
    mengyanglu: '徉露',
    mengyanglu_info: '锁定技.当其他角色摸取你的牌时,改为你交给其一张牌,你观看牌堆顶两张牌并获得其中一张牌',
    mengtuipan: '推磐',
    mengtuipan_info: '出牌阶段每名角色限一次.你可以弃置其他角色一张牌并视为其对你使用一张无视距离的【顺手牵羊】,你亮出牌堆顶的一张牌当作【出其不意】对其使用.',
    meng_lingke: '玲可',
    mengjuejing: '绝景',
    mengjuejing_info: '锁定技,当你失去体力时,改为对自己造成等量的无视护甲的伤害.当你脱离濒死状态时,伤害来源选择你的{体力值,护甲值,体力上限}中的两项交换其值.若此时存在两项相同目不为零,你使剩余一项数值+1,并将手牌摸至与最大项相同.',
    mengxueyuan: '雪原',
    mengxueyuan_info: '当你不因<绝景>造成或受到伤害后,你可以失去1点体力.若你因此进入了濒死状态,则你脱离濒死状态后获得2点护甲.',
    mengqiusheng: '求生',
    mengqiusheng_info: '当你进入濒死状态后,你可以减少1点体力上限或护甲,回复体力至1点.',
    meng_luotianyi: '洛天依',
    meng_luotianyi_prefix: '梦',
    mengzhongya: '众雅',
    mengzhongya_info: '锁定技,你于出牌阶段使用的首张非伤害牌视为【五谷丰登】,结算结束后,本轮使用过单体伤害牌的其他角色翻面.',
    mengduyun: '渡陨',
    mengduyun_info: '你每轮首次进入濒死状态后,可以回复1点体力.若因此脱离濒死状态,你将手牌置于牌堆顶,获得弃牌堆中两张花色与类别不同的牌.',
    meng_liuying: '流萤',
    mengliuguangzhuhuo: '流火逐光',
    mengliuguangzhuhuo_info: '锁定技,主要阶段开始时,你摸一张牌并将一张牌当做【火攻】使用,若此牌未造成伤害,你失去1点体力并摸两张牌.',
    mengranquyingshen: '燃躯萤身',
    mengranquyingshen_info: '锁定技,当你造成渠道为牌的伤害时,若之花色与本回合内其他造成过伤害的牌均不同,你回复1点体力,否则令此伤害值+1.',
    mengmengguihechu: '梦归何处',
    mengmengguihechu_info: '锁定技,当你进入濒死状态时,回复体力值至1点并将武将牌上的首个锁定技替换为<残蚀>.',
    mengcanshi: '残蚀',
    mengcanshi_info: '摸牌阶段开始时,你可以改为摸X张牌(X为已受伤的角色数),若如此做,当你于此回合内使用基本牌或锦囊牌时,你弃置一张牌.',
  };
  hyyzYm.dynamicTranslate = {
    mengshuijing(player) {
      let num;
      if (player.storage.mengshuijing_num < 1) num = `<span class="firetext">${player.storage.mengshuijing_num}</span>`;
      else if (player.storage.mengshuijing_num == 1) num = `<span class="thundertext">${player.storage.mengshuijing_num}</span>`;
      else if (player.storage.mengshuijing_num > 1) num = `<span class="greentext">${player.storage.mengshuijing_num}</span>`;
      return `出牌阶段限一次,你可以暗选一名角色.该角色的回合结束时,若其本轮执行过:①造成${num}点伤害.②弃置${num}张牌.其对自己执行满足项的效果,你对自己执行其未满足项的效果,重置此技.`;
    },
    JLPgongdan(player) {
      const key = lib.skill.JLPgongdan.key;
      return `转换技,锁定技,你使用【杀】时,</br>阳:${key[0]}.</br>阴:${key[1]}.</br>交换与琴心同名的一对选项.`;
    },
    JLPqinxin(player) {
      const key = lib.skill.JLPqinxin.key;
      return `转换技,限定技,你使用锦囊牌时,</br>阳:${key[0]}.</br>阴:${key[1]}.</br>此牌造成伤害后,摸与之等量的牌,</br>若手牌唯一最多,分配你超出的牌.`;
    },
    mengjingjin(player) {
      var info = lib.skill.mengjingjin.getInfo(player);
      return `锁定技,当你对一名角色造成或受到伤害时,你观看牌堆顶<span class=thundertext>${info[0]}</span>张牌并以任意顺序放回,你弃置受伤角色<span class=firetext>${info[1]}</span>张牌、令其摸<span class=greentext>${info[2]}</span>张牌并令伤害来源将手牌数调整至<span class=yellowtext>${info[3]}</span>.历战:你与该角色中手牌数较小者交换〖精进〗中的任意个阿拉伯数字.`;
    },
  };
  hyyzYm.perfectPair = {};
  hyyzYm.characterTitle = {};
  for (var i in author) {
    //将作者的名字,写到武将名下
    for (let name of author[i]) {
      hyyzYm.characterTitle[name] = name == 'Ym_zilinggudelige' ? `<img src=${'extension/忽悠宇宙/image/lige.png'} width="50" height="50"></br>` : '#g' + hyyzYm.translate[i];
    }
  }
  for (var i in hyyzYm.character) {
    //统一加立绘、阵亡语音、<梦>前缀
    hyyzYm.character[i][4].push(`ext:忽悠宇宙/image/character/${i}.jpg`); //加立绘
    if (hyyzYm.character[i][4].length && !hyyzYm.character[i][4].some((str) => str.length > 4 && str.slice(0, 4) == 'die:')) {
      hyyzYm.character[i][4].push(`die:ext:忽悠宇宙/audio/skill/${i}.mp3`); //加一般武将的阵亡语音
    }
    if (i.includes('meng_re_')) {
      if (hyyzYm.translate[i]) hyyzYm.translate[i] = '梦界' + hyyzYm.translate[i];
      hyyzYm.translate[`${i}_prefix`] = '梦界';
    } else if (i.includes('meng_shen_')) {
      if (hyyzYm.translate[i]) hyyzYm.translate[i] = '梦神' + hyyzYm.translate[i];
      hyyzYm.translate[`${i}_prefix`] = '梦神';
    } else if (i.includes('meng_sp_')) {
      if (hyyzYm.translate[i]) hyyzYm.translate[i] = '梦SP' + hyyzYm.translate[i];
      hyyzYm.translate[`${i}_prefix`] = '梦SP';
    } else if (i.includes('meng_sb_')) {
      if (hyyzYm.translate[i]) hyyzYm.translate[i] = '梦谋' + hyyzYm.translate[i];
      hyyzYm.translate[`${i}_prefix`] = '梦谋';
    } else if (i.includes('meng_wu_')) {
      if (hyyzYm.translate[i]) hyyzYm.translate[i] = '梦武' + hyyzYm.translate[i];
      hyyzYm.translate[`${i}_prefix`] = '梦武';
    } else if (i.includes('meng_')) {
      //名字前两位是meng_的加前缀//就离谱同学,你前缀改成JLP绝对是故意的吧
      if (hyyzYm.translate[i]) hyyzYm.translate[i] = '梦' + hyyzYm.translate[i];
      hyyzYm.translate[`${i}_prefix`] = '梦';
    } else if (i.includes('Ym_sp_')) {
      //圆梦sp将
      if (hyyzYm.translate[i]) hyyzYm.translate[i] = 'SP' + hyyzYm.translate[i];
      hyyzYm.translate[`${i}_prefix`] = 'SP';
    }
  }
  lib.config.characters.add('hyyzYm');
  lib.config.all.characters.add('hyyzYm');
  lib.translate['hyyzYm_character_config'] = `<img src="extension/忽悠宇宙/image/hyyzYm.png" width="76" height="22">`;
  return hyyzYm;
});
