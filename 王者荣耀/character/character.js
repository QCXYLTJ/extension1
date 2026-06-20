import { game, get, lib, ui, _status, ai } from '../../../../noname.js';
const characters = {
  hoklianpo: {
    sex: 'male',
    hp: 4,
    group: 'qun',
    groupBorder: 'jin',
    skills: ['hokbaoliechongzhuang'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoklianpo.mp3', 'ext:王者荣耀/audio/die/hoklianpo2.mp3', 'ext:王者荣耀/audio/die/hoklianpo3.mp3']
  },
  hokxiaoqiao: {
    sex: 'female',
    hp: 3,
    group: 'wu',
    skills: ['hokzhiyuweixiao', 'hoktianmilianfeng', 'hokxinghualiaoluan'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokxiaoqiao.mp3']
  },
  hokzhaoyun: {
    sex: 'male',
    hp: 3,
    maxHp: 4,
    group: 'shu',
    skills: ['hoktianxiangzhilong', 'hokjingleizhilong', 'hokpoyunzhilong'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokzhaoyun.mp3']
  },
  hokmozi: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'wu',
    skills: ['hokjianaifeigong', 'hokhepingmanbu', 'hokmoshouchenggui'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokmozi.mp3']
  },
  hokdaji: {
    sex: 'female',
    hp: 3,
    group: 'shen',
    skills: ['hoklinghunchongji', 'hokouxiangmeili', 'hoknvwangchongbai'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokdaji.mp3']
  },
  hokyingzheng: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'jin',
    skills: ['hokwangzheshenpan', 'hokwangzheshouyu'],
    trashBin: ['legend'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyingzheng.mp3']
  },
  hoksunshangxiang: {
    sex: 'female',
    hp: 3,
    group: 'wu',
    skills: ['hokhuolibengfa', 'hokfanguntuxi'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoksunshangxiang.mp3']
  },
  hoklubanqihao: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'wu',
    skills: ['hokhuoliyazhi', 'hokkongzhongzhiyuan'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoklubanqihao.mp3']
  },
  hokzhuangzhou: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'wu',
    skills: ['hokziranyizhi', 'hoktianrenheyi'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokzhuangzhou.mp3']
  },
  hokliushan: {
    sex: 'male',
    hp: 4,
    group: 'shu',
    skills: ['hokcilipingzhang', 'hokjiguanmozhua'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokliushan.mp3'],
    isUnseen: true
  },
  hokgaojianli: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'jin',
    skills: ['hokmoyinguaner'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokgaojianli.mp3']
  },
  hokake: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    groupBorder: 'jin',
    skills: ['hoksiwen', 'hokshunhua', 'hokhuanwu'],
    trashBin: ['epic'],
    hasHiddenSkill: true,
    dieAudios: ['ext:王者荣耀/audio/die/hokake.mp3']
  },
  hokzhongwuyan: {
    sex: 'female',
    hp: 2,
    maxHp: 4,
    hujia: 2,
    group: 'qun',
    groupBorder: 'wu',
    skills: ['hokkuangbiaotujin', 'hokzhenshedaji'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokzhongwuyan.mp3'],
    isUnseen: true
  },
  hoksunbin: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'wu',
    skills: ['hokshizhibodong'],
    trashBin: ['epic'],
    clans: ['稷下星之队'],
    dieAudios: ['ext:王者荣耀/audio/die/hoksunbin.mp3']
  },
  hokbianque: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'wu',
    skills: ['hokedeyiliao', 'hokshanezhenduan', 'hokshengmingzhuzai'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokbianque.mp3']
  },
  hokbaiqi: {
    sex: 'male',
    hp: 4,
    group: 'qun',
    groupBorder: 'jin',
    skills: ['hokfanjizhilian', 'hokxuezhihuixiang', 'hokaomanchaofeng'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokbaiqi.mp3', 'ext:王者荣耀/audio/die/hokbaiqi2.mp3', 'ext:王者荣耀/audio/die/hokbaiqi3.mp3']
  },
  hokmiyue: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'jin',
    skills: ['hokyongshengzhixue', 'hokhuanyipucong', 'hokanyingzhiyue'],
    trashBin: ['epic'],
    isUnseen: true,
    dieAudios: ['ext:王者荣耀/audio/die/hokmiyue.mp3']
  },
  hoklvbu: {
    sex: 'male',
    hp: 4,
    group: 'qun',
    skills: ['hoktaotiexuetong', 'hokfangtianhuazhan'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoklvbu.mp3']
  },
  hokzhouyu: {
    sex: 'male',
    hp: 3,
    group: 'wu',
    skills: ['hokliuhuozhishi', 'hokfenghuochibi'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokzhouyu.mp3']
  },
  hokxiahoudun: {
    sex: 'male',
    hp: 3,
    group: 'wei',
    skills: ['hokhaoqizhan', 'hoklongjuanshan'],
    trashBin: ['epic'],
    names: '夏侯|惇',
    dieAudios: ['ext:王者荣耀/audio/die/hokxiahoudun.mp3']
  },
  hokzhenji: {
    sex: 'female',
    hp: 3,
    group: 'wei',
    skills: ['hokningleichengbing', 'hoktanxishuiliu', 'hokluoshenjianglin'],
    trashBin: ['epic'],
    names: '甄|宓',
    dieAudios: ['ext:王者荣耀/audio/die/hokzhenji.mp3']
  },
  hokcaocao: {
    sex: 'male',
    hp: 4,
    group: 'wei',
    skills: ['hokzonghengtianxia', 'hokyuxuexiaoxiong'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokcaocao.mp3']
  },
  hokdianwei: {
    sex: 'male',
    hp: 3,
    group: 'wei',
    skills: ['hokjinu', 'hokhongyan', 'hokshixue'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokdianwei.mp3']
  },
  hokgongbenwuzang: {
    sex: 'male',
    hp: 4,
    group: 'qun',
    skills: ['hokertianyiliu', 'hokyijueshengsi'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokgongbenwuzang.mp3', 'ext:王者荣耀/audio/die/hokgongbenwuzang2.mp3'],
    isUnseen: true
  },
  hoklibai: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    skills: ['hokshenlaizhibi', 'hokqinglianjiange'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoklibai.mp3']
  },
  hokmakeboluo: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    skills: ['hokliansuofanying', 'hokmanyouzhiqiang'],
    trashBin: ['epic'],
    //dieAudios: [],
    isUnseen: true
  },
  hokdirenjie: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokxunjie', 'hoktaotuo'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokdirenjie.mp3']
  },
  hokdamo: {
    sex: 'male',
    hp: 4,
    group: 'qun',
    skills: ['hokzhenyan'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokdamo.mp3'],
    isUnseen: true
  },
  hokxiangyu: {
    sex: 'male',
    hp: 4,
    group: 'qun',
    skills: ['hokxianzhenzhizhi', 'hokpofuchenzhou'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokxiangyu.mp3'],
    isUnseen: true
  },
  hokwuzetian: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    skills: ['hoktianmingzhinv', 'hoknvdiweiyan', 'hokshengshayuduo'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokwuzetian.mp3']
  },
  hoklaofuzi: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'wu',
    skills: ['hokshidaozunyan', 'hokshengrenxunjie', 'hokjuyifansan'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoklaofuzi.mp3']
  },
  hokguanyu: {
    sex: 'male',
    hp: 4,
    group: 'shu',
    skills: ['hokyiqidangqian', 'hokdaofengtieqi'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokguanyu.mp3'],
    isUnseen: true
  },
  hokdiaochan: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    skills: ['hokhuayin'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokdiaochan.mp3'],
    isUnseen: true
  },
  hokanqila: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    skills: ['hokzhoushuhuoyan', 'hokhundunhuozhong'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokanqila.mp3']
  },
  hokchengyaojin: {
    sex: 'male',
    hp: 3,
    maxHp: 4,
    group: 'qun',
    skills: ['hoksheshenwangsi', 'hokzhengyiqianneng'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokchengyaojin.mp3', 'ext:王者荣耀/audio/die/hokchengyaojin2.mp3']
  },
  hokluna: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    skills: ['hokyueguangzhiwu', 'hokxinyuetuji'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokluna.mp3']
  },
  hokjiangziya: {
    sex: 'male',
    hp: 3,
    group: 'shen',
    skills: ['hokfengshen', 'hokdashenzhifa'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokjiangziya.mp3']
  },
  hokliubang: {
    sex: 'male',
    hp: 4,
    group: 'qun',
    skills: ['hokjunzhuyewang', 'hoktongyuzhanchang'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokliubang.mp3']
  },
  hokhanxin: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    skills: ['hokbeishuiyizhan', 'hokguoshiwushuang'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokhanxin.mp3']
  },
  hokwangzhaojun: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    skills: ['hokbingfengzhixin', 'hoklindongyizhi'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokwangzhaojun.mp3']
  },
  hoklanlingwang: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'jin',
    skills: ['hokmijijiyi'],
    trashBin: ['epic'],
    hasHiddenSkill: true,
    names: '高|长恭',
    dieAudios: ['ext:王者荣耀/audio/die/hoklanlingwang.mp3'],
    isUnseen: true
  },
  hokhuamulan: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    groupBorder: 'qun',
    skills: ['hokzhanfangdaofeng'],
    trashBin: ['epic'],
    clans: ['长城守卫军'],
    dieAudios: ['ext:王者荣耀/audio/die/hokhuamulan.mp3']
  },
  hokzhangliang: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    skills: ['hokyanling'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokzhangliang.mp3', 'ext:王者荣耀/audio/die/hokzhangliang2.mp3'],
    isUnseen: true
  },
  hokbuzhihuowu: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    skills: ['hokrenfeng', 'hokhuadieshan'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokbuzhihuowu.mp3', 'ext:王者荣耀/audio/die/hokbuzhihuowu2.mp3', 'ext:王者荣耀/audio/die/hokbuzhihuowu3.mp3', 'ext:王者荣耀/audio/die/hokbuzhihuowu4.mp3']
  },
  hoknakelulu: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    skills: ['hokliudaowushu'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoknakelulu.mp3']
  },
  hokjuyoujing: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    skills: ['hokyanfan', 'hokjuhe', 'hokxixue'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokjuyoujing.mp3', 'ext:王者荣耀/audio/die/hokjuyoujing2.mp3']
  },
  hokyase: {
    sex: 'male',
    hp: 4,
    group: 'qun',
    skills: ['hokshengjiancaijue'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyase.mp3']
  },
  hoksunwukong: {
    sex: 'male',
    hp: 3,
    group: 'shen',
    skills: ['hokruyijingu', 'hokhushenzhoufa', 'hokdouzhanchongfeng'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoksunwukong.mp3'],
    isUnseen: true
  },
  hokniumo: {
    sex: 'male',
    hp: 6,
    group: 'shen',
    skills: ['hokqiangliyuanhu'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokniumo.mp3']
  },
  hokhouyi: {
    sex: 'male',
    hp: 3,
    group: 'shen',
    skills: ['hokchengjiesheji', 'hokzhuorizhishi'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokhouyi.mp3']
  },
  hokliubei: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokshenxianshizu', 'hokyidefuren'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokliubei.mp3']
  },
  hokzhangfei: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokheianqianneng', 'hokhuadiweilao', 'hokkuangshouxuexing'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokzhangfei.mp3']
  },
  hokliyuanfang: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokmitanditing'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokliyuanfang.mp3']
  },
  hokyuji: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    skills: ['hokchugeqi', 'hokdafenglai', 'hokzhenqianwu'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyuji.mp3']
  },
  hokzhongkui: {
    sex: 'male',
    hp: 5,
    group: 'shu',
    groupBorder: 'wei',
    skills: ['hokzhicaiyishi', 'hoklunhuitunshi'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokzhongkui.mp3']
  },
  /*
  hokchengjisihan: {
      sex: "male",
      hp: 3,
      group: "qun",
      skills: ["hokkehankuanglie"],
      trashBin: ["epic"],
      dieAudios: ["ext:王者荣耀/audio/die/hokchengjisihan.mp3"],
      isUnseen: true,
  },
  */
  hokcang: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    skills: ['hokxiangyueweihao', 'hoklingxiuzitai'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokcang.mp3', 'ext:王者荣耀/audio/die/hokcang2.mp3']
  },
  hokyangjian: {
    sex: 'male',
    hp: 4,
    group: 'shen',
    skills: ['hoknizhuanqiankun', 'hokxuwangpomie'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyangjian.mp3'],
    isUnseen: true
  },
  hokyadianna: {
    sex: 'female',
    hp: 4,
    group: 'shen',
    skills: ['hokzhenshenjuexing'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyadianna.mp3', 'ext:王者荣耀/audio/die/hokyadianna2.mp3']
  },
  hokcaiwenji: {
    sex: 'female',
    hp: 3,
    group: 'wei',
    skills: ['hokxianyin'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokcaiwenji.mp3']
  },
  hoktaiyizhenren: {
    sex: 'male',
    hp: 3,
    group: 'shen',
    skills: ['hokhuangjinshanshan', 'hokdabianhuoren'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoktaiyizhenren.mp3', 'ext:王者荣耀/audio/die/hoktaiyizhenren2.mp3', 'ext:王者荣耀/audio/die/hoktaiyizhenren3.mp3']
  },
  hoknezha: {
    sex: 'male',
    hp: 3,
    group: 'shen',
    skills: ['hokjieao'],
    trashBin: ['epic'],
    names: '李|哪吒',
    dieAudios: ['ext:王者荣耀/audio/die/hoknezha.mp3']
  },
  hokzhugeliang: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokcemouzhike', 'hokdongfengpoxi', 'hokshikongchuansuo'],
    trashBin: ['epic'],
    names: '诸葛|亮',
    dieAudios: ['ext:王者荣耀/audio/die/hokzhugeliang.mp3'],
    isUnseen: true
  },
  hokhuangzhong: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokpaoshouranhun', 'hokzhongzhuangpaotai'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokhuangzhong.mp3']
  },
  hokdaqiao: {
    sex: 'female',
    hp: 3,
    group: 'wu',
    skills: ['hokchuanliubuxi'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokdaqiao.mp3']
  },
  hokdonghuangtaiyi: {
    sex: 'male',
    hp: 4,
    group: 'shen',
    skills: ['hokyaolongzhuzhao', 'hokduoshenqiyue'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokdonghuangtaiyi.mp3'],
    isUnseen: true
  },
  hokganjiangmoye: {
    sex: 'double',
    hp: 3,
    group: 'qun',
    skills: ['hokbiyitongxin', 'hokcixiongshuangjian', 'hokjianlai'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokganjiangmoye.mp3']
  },
  hokguiguzi: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    skills: ['hokshenyin', 'hokwuyin'],
    trashBin: ['epic'],
    hasHiddenSkill: true,
    dieAudios: ['ext:王者荣耀/audio/die/hokguiguzi.mp3']
  },
  hokkai: {
    sex: 'male',
    hp: 4,
    group: 'wei',
    skills: ['hokjirenfengbao', 'hokbumiemoqu'],
    trashBin: ['epic'],
    clans: ['长城守卫军'],
    dieAudios: ['ext:王者荣耀/audio/die/hokkai.mp3', 'ext:王者荣耀/audio/die/hokkai2.mp3', 'ext:王者荣耀/audio/die/hokkai3.mp3']
  },
  hokbailishouyue: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokjingmizhiyan', 'hokkuangfengzhixi'],
    trashBin: ['epic'],
    clans: ['长城守卫军'],
    dieAudios: ['ext:王者荣耀/audio/die/hokbailishouyue.mp3']
  },
  hokbailixuance: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokshenhugoulian', 'hokmengyangousuo'],
    trashBin: ['epic'],
    clans: ['长城守卫军'],
    dieAudios: ['ext:王者荣耀/audio/die/hokbailixuance.mp3']
  },
  hoksulie: {
    sex: 'male',
    hp: 4,
    group: 'shu',
    skills: ['hokbuqutiebi'],
    trashBin: ['epic'],
    clans: ['长城守卫军'],
    dieAudios: ['ext:王者荣耀/audio/die/hoksulie.mp3']
  },
  hokmengqi: {
    sex: 'male',
    hp: 4,
    group: 'shen',
    skills: ['hokmengjingyingrao', 'hokmengjinghuanyou'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokmengqi.mp3', 'ext:王者荣耀/audio/die/hokmengqi2.mp3', 'ext:王者荣耀/audio/die/hokmengqi3.mp3', 'ext:王者荣耀/audio/die/hokmengqi4.mp3', 'ext:王者荣耀/audio/die/hokmengqi5.mp3', 'ext:王者荣耀/audio/die/hokmengqi6.mp3', 'ext:王者荣耀/audio/die/hokmengqi7.mp3', 'ext:王者荣耀/audio/die/hokmengqi8.mp3']
  },
  hoknvwa: {
    sex: 'female',
    hp: 3,
    group: 'shen',
    skills: ['hokhuihuangzhiyin', 'hokzhiling'],
    trashBin: ['legend'],
    dieAudios: ['ext:王者荣耀/audio/die/hoknvwa.mp3']
  },
  hokmingshiyin: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hoklinguawuyou', 'hokshiguafeiyi', 'hoktaiguachangsheng'],
    trashBin: ['epic'],
    clans: ['尧天'],
    dieAudios: ['ext:王者荣耀/audio/die/hokmingshiyin.mp3']
  },
  hokgongsunli: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    skills: ['hokwanyunluo', 'hokshuangyewu'],
    trashBin: ['epic'],
    clans: ['尧天'],
    names: '公孙|离',
    dieAudios: ['ext:王者荣耀/audio/die/hokgongsunli.mp3']
  },
  hokyangyuhuan: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    skills: ['hokjinghongdiao', 'hoknichangqu', 'hokchanghenge'],
    trashBin: ['epic'],
    clans: ['尧天'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyangyuhuan.mp3']
  },
  hokpeiqinhu: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokxingyiliuhe'],
    trashBin: ['epic'],
    clans: ['尧天'],
    dieAudios: ['ext:王者荣耀/audio/die/hokpeiqinhu.mp3']
  },
  hokyixing: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokqihe', 'hokfeigong', 'hokzhenshen'],
    trashBin: ['epic'],
    clans: ['尧天'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyixing.mp3', 'ext:王者荣耀/audio/die/hokyixing2.mp3']
  },
  hokkuangtie: {
    sex: 'male',
    hp: 4,
    group: 'qun',
    skills: ['hokwuweizhanche', 'hoklichangyazhi'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokkuangtie.mp3']
  },
  hokmilaidi: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    skills: ['hokjixiepucong', 'hokqiangzhiruqin', 'hokhaojiecichang'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokmilaidi.mp3']
  },
  hokyuange: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokmishucaokong'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyuange.mp3']
  },
  hoksunce: {
    sex: 'male',
    hp: 3,
    group: 'wu',
    skills: ['hokpifengzhanlang', 'hokjingtaohailang', 'hokchangfanpolang'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoksunce.mp3'],
    isUnseen: true
  },
  hoksimayi: {
    sex: 'male',
    hp: 3,
    group: 'wei',
    skills: ['hoksishenjianglin', 'hokhuangwuzhiyu'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoksimayi.mp3'],
    isUnseen: true
  },
  hokdunshan: {
    sex: 'male',
    hp: 4,
    group: 'shu',
    skills: ['hokyifudangguan', 'hokwanfumokai'],
    trashBin: ['epic'],
    clans: ['长城守卫军'],
    dieAudios: ['ext:王者荣耀/audio/die/hokdunshan.mp3'],
    isUnseen: true
  },
  hokjialuo: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    skills: [],
    trashBin: ['epic'],
    clans: ['长城守卫军'],
    dieAudios: ['ext:王者荣耀/audio/die/hokjialuo.mp3'],
    isUnseen: true
  },
  hokshenmengxi: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokmaomizhadan', 'hokzonghebaokuan'],
    trashBin: ['epic'],
    clans: ['长城守卫军'],
    dieAudios: ['ext:王者荣耀/audio/die/hokshenmengxi.mp3']
  },
  hoklixin: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: [],
    trashBin: ['epic'],
    clans: ['长城守卫军'],
    dieAudios: ['ext:王者荣耀/audio/die/hoklixin.mp3'],
    isUnseen: true
  },
  hokshangguanwaner: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    skills: [],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokshangguanwaner.mp3', 'ext:王者荣耀/audio/die/hokshangguanwaner2.mp3'],
    isUnseen: true
  },
  hokchange: {
    sex: 'female',
    hp: 3,
    group: 'shen',
    skills: ['hokguiyue', 'hokbenyue'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokchange.mp3'],
    isUnseen: true
  },
  hokzhubajie: {
    sex: 'male',
    hp: 5,
    group: 'shen',
    skills: ['hokhaofawushang'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokzhubajie.mp3']
  },
  hokyao: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    skills: ['hokruoyourenxi', 'hokfengsamuxiao', 'hokdulixishanzhishang'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyao.mp3'],
    isUnseen: true
  },
  hokyunzhongjun: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    skills: ['hokliaoaoyouxi', 'hoksafengfeiyu', 'hokbiaoyuanxiyunzhong'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyunzhongjun.mp3'],
    isUnseen: true
  },
  hokdongfangyao: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'jin',
    skills: ['hokxingchenzhici', 'hokzhuxing', 'hokguichen'],
    trashBin: ['epic'],
    clans: ['稷下星之队'],
    dieAudios: ['ext:王者荣耀/audio/die/hokdongfangyao.mp3', 'ext:王者荣耀/audio/die/hokdongfangyao2.mp3', 'ext:王者荣耀/audio/die/hokdongfangyao3.mp3']
  },
  hokmachao: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokmoyingtuxi', 'hokriluoguqiang', 'hokwanrenguiqiao'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokmachao.mp3']
  },
  hokxishi: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    groupBorder: 'wu',
    skills: ['hokshafuzhiyin', 'hokhuanshazhiling', 'hokxinwupangwu'],
    trashBin: ['epic'],
    clans: ['稷下星之队'],
    dieAudios: ['ext:王者荣耀/audio/die/hokxishi.mp3']
  },
  hoklubandashi: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokjixiakeji', 'hokzhushouyuanchi', 'hokqianglishouna'],
    trashBin: ['epic'],
    clans: ['稷下星之队'],
    dieAudios: ['ext:王者荣耀/audio/die/hoklubandashi.mp3', 'ext:王者荣耀/audio/die/hoklubandashi2.mp3', 'ext:王者荣耀/audio/die/hoklubandashi3.mp3'],
    isUnseen: true
  },
  hokmengya: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'wu',
    skills: ['hokchirehuntian', 'hokfeidanyuanxi'],
    trashBin: ['epic'],
    clans: ['稷下星之队'],
    dieAudios: ['ext:王者荣耀/audio/die/hokmengya.mp3', 'ext:王者荣耀/audio/die/hokmengya2.mp3', 'ext:王者荣耀/audio/die/hokmengya3.mp3']
  },
  hokdongfangjing: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    groupBorder: 'jin',
    skills: ['hokzhujing', 'hokkaifeng', 'hokliekong'],
    trashBin: ['epic'],
    names: '东方|镜',
    dieAudios: ['ext:王者荣耀/audio/die/hokdongfangjing.mp3', 'ext:王者荣耀/audio/die/hokdongfangjing2.mp3']
  },
  hokmengtian: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: [],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokmengtian.mp3', 'ext:王者荣耀/audio/die/hokmengtian2.mp3', 'ext:王者荣耀/audio/die/hokmengtian3.mp3'],
    isUnseen: true
  },
  hokaguduo: {
    sex: 'female',
    hp: 4,
    group: 'shu',
    groupBorder: 'qun',
    skills: ['hokshanlinqiyuan'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokaguduo.mp3', 'ext:王者荣耀/audio/die/hokaguduo2.mp3'],
    isUnseen: true
  },
  hokxialuote: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    skills: [],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokxialuote.mp3'],
    isUnseen: true
  },
  hoklan: {
    sex: 'male',
    hp: 3,
    group: 'wei',
    skills: ['hokshoulie', 'hokpolang', 'hokchujue'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoklan.mp3', 'ext:王者荣耀/audio/die/hoklan2.mp3', 'ext:王者荣耀/audio/die/hoklan3.mp3', 'ext:王者荣耀/audio/die/hoklan4.mp3', 'ext:王者荣耀/audio/die/hoklan5.mp3']
  },
  hoksikongzhen: {
    sex: 'male',
    hp: 3,
    group: 'wei',
    skills: ['hokleitingwanjun'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoksikongzhen.mp3', 'ext:王者荣耀/audio/die/hoksikongzhen2.mp3', 'ext:王者荣耀/audio/die/hoksikongzhen3.mp3'],
    isUnseen: true
  },
  hokailin: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    skills: ['hokjinglingwubu', 'hokyueguizhiwu'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokailin.mp3', 'ext:王者荣耀/audio/die/hokailin2.mp3']
  },
  hokyunying: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    skills: [],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyunying.mp3', 'ext:王者荣耀/audio/die/hokyunying2.mp3'],
    isUnseen: true
  },
  hokjinchan: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    skills: ['hoklunhuizhiyin'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokjinchan.mp3', 'ext:王者荣耀/audio/die/hokjinchan2.mp3', 'ext:王者荣耀/audio/die/hokjinchan3.mp3', 'ext:王者荣耀/audio/die/hokjinchan4.mp3'],
    isUnseen: true
  },
  hokfei: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    skills: ['hokzhuyufenghui', 'hoktayufeiyan'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokfei.mp3', 'ext:王者荣耀/audio/die/hokfei2.mp3', 'ext:王者荣耀/audio/die/hokfei3.mp3', 'ext:王者荣耀/audio/die/hokfei4.mp3', 'ext:王者荣耀/audio/die/hokfei5.mp3']
  },
  hoksangqi: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'wu',
    skills: ['hokyinghuobihu', 'hokchengfengqicheng', 'hokyinghuoweiguang'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoksangqi.mp3', 'ext:王者荣耀/audio/die/hoksangqi2.mp3', 'ext:王者荣耀/audio/die/hoksangqi3.mp3']
  },
  hokgeya: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    skills: ['hoknizhuansheji', 'hokheishabaodan'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokgeya.mp3']
  },
  hokhaiyue: {
    sex: 'female',
    hp: 3,
    group: 'shen',
    skills: ['hokbieyue', 'hokhuanhaiyingyue'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokhaiyue.mp3', 'ext:王者荣耀/audio/die/hokhaiyue2.mp3']
  },
  hokzhaohuaizhen: {
    sex: 'male',
    hp: 4,
    maxHp: 6,
    group: 'shu',
    skills: ['hokqisuixindong', 'hokyinyangnizhuan'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokzhaohuaizhen.mp3', 'ext:王者荣耀/audio/die/hokzhaohuaizhen2.mp3', 'ext:王者荣耀/audio/die/hokzhaohuaizhen3.mp3']
  },
  hoklaixiao: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'shu',
    skills: ['hokxiandingbanqianghuadan', 'hokchuanqiyingxiongdengchang', 'hokriluohaiyanhuaxiu'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hoklaixiao.mp3', 'ext:王者荣耀/audio/die/hoklaixiao2.mp3', 'ext:王者荣耀/audio/die/hoklaixiao3.mp3', 'ext:王者荣耀/audio/die/hoklaixiao4.mp3', 'ext:王者荣耀/audio/die/hoklaixiao5.mp3', 'ext:王者荣耀/audio/die/hoklaixiao6.mp3']
  },
  hokjixiaoman: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    skills: [],
    trashBin: ['epic'],
    isUnseen: true,
    dieAudios: ['ext:王者荣耀/audio/die/hokjixiaoman.mp3', 'ext:王者荣耀/audio/die/hokjixiaoman2.mp3', 'ext:王者荣耀/audio/die/hokjixiaoman3.mp3']
  },
  hokyalian: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: [],
    trashBin: ['epic'],
    isUnseen: true,
    dieAudios: ['ext:王者荣耀/audio/die/hokyalian.mp3', 'ext:王者荣耀/audio/die/hokyalian2.mp3', 'ext:王者荣耀/audio/die/hokyalian3.mp3']
  },
  hokduoliya: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    groupBorder: 'wei',
    skills: ['hokhuange', 'hokzhulang', 'hoktianlai'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokduoliya.mp3', 'ext:王者荣耀/audio/die/hokduoliya2.mp3', 'ext:王者荣耀/audio/die/hokduoliya3.mp3']
  },
  hokhainuo: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'wei',
    skills: ['hokmingyundongcha', 'hokmingyunxingyou', 'hokmingyunhuisu'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokhainuo.mp3', 'ext:王者荣耀/audio/die/hokhainuo2.mp3', 'ext:王者荣耀/audio/die/hokhainuo3.mp3', 'ext:王者荣耀/audio/die/hokhainuo4.mp3']
  },
  hokaoyin: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    groupBorder: 'wei',
    skills: ['hokyinjiecangxing', 'hokqionghuxuanjian'],
    trashBin: ['legend'],
    dieAudios: ['ext:王者荣耀/audio/die/hokaoyin.mp3', 'ext:王者荣耀/audio/die/hokaoyin2.mp3', 'ext:王者荣耀/audio/die/hokaoyin3.mp3']
  },
  hokdasiming: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokwangshengtu', 'hokjiwuqi', 'hokhunguiwangyou'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokdasiming.mp3'],
    isUnseen: true
  },
  hokyuanliuzhizi_top_male: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokwanwuweiliu'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyuanliuzhizi_male.mp3'],
    isUnseen: true
  },
  hokyuanliuzhizi_top_female: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    skills: ['hokwanwuweiliu'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyuanliuzhizi_female.mp3'],
    isUnseen: true
  },
  hokyuanliuzhizi_mid_male: {
    sex: 'male',
    hp: 3,
    group: 'shu',
    skills: ['hokwanwuweiliu'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyuanliuzhizi_male.mp3'],
    isUnseen: true
  },
  hokyuanliuzhizi_mid_female: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    skills: ['hokwanwuweiliu'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokyuanliuzhizi_female.mp3'],
    isUnseen: true
  },
  hokshaosiyuan: {
    sex: 'female',
    hp: 3,
    group: 'shu',
    skills: ['hokliangtongxin', 'hokyuanbieli', 'hokyinyuanjihui'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokshaosiyuan.mp3'],
    isUnseen: true
  },
  hokying: {
    sex: 'female',
    hp: 3,
    group: 'qun',
    skills: ['hoklingyufengbao', 'hokzuihoudekuangwu'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokying.mp3'],
    isUnseen: true
  },
  hokkongkonger: {
    sex: 'male',
    hp: 3,
    group: 'qun',
    skills: ['hokliangtongxin', 'hokyuanbieli', 'hokyinyuanjihui'],
    trashBin: ['epic'],
    dieAudios: ['ext:王者荣耀/audio/die/hokkongkonger.mp3'],
    isUnseen: true
  }
};
export default characters;