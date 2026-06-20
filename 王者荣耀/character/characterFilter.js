import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
const characterFilters = {
  hokzhaoyun(mode) {
    return true;
  },
  hokdaji(mode) {
    return true;
  },
  hokgaojianli(mode) {
    return true;
  },
  hokbaiqi(mode) {
    return true;
  },
  hokwuzetian(mode) {
    return true;
  },
  hokluna(mode) {
    return true;
  },
  hoklianpo(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokyingzheng(mode) {
    return true;
  },
  hokake(mode) {
    return true;
  },
  hokzhenji(mode) {
    return true;
  },
  hoklaofuzi(mode) {
    return true;
  },
  hokjiangziya(mode) {
    return true;
  },
  hokxiaoqiao(mode) {
    return true;
  },
  hoklubanqihao(mode) {
    return true;
  },
  hokzhongwuyan(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokdirenjie(mode) {
    return true;
  },
  hokzhangliang(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokmozi(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokzhuangzhou(mode) {
    return true;
  },
  hoksunbin(mode) {
    return true;
  },
  hokdianwei(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokdamo(mode) {
    return true;
  },
  hokhanxin(mode) {
    return true;
  },
  hokyase(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hoksunshangxiang(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokliushan(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokbianque(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokgongbenwuzang(mode) {
    return true;
  },
  hokxiangyu(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokchengyaojin(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokwangzhaojun(mode) {
    return true;
  },
  hokanqila(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokcaocao(mode) {
    return true;
  },
  hokzhouyu(mode) {
    return true;
  },
  hokniumo(mode) {
    return true;
  },
  hoksunwukong(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokmiyue(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokdiaochan(mode) {
    return true;
  },
  hoklvbu(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokhuamulan(mode) {
    return true;
  },
  hokhouyi(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokzhangfei(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokliubei(mode) {
    return true;
  },
  hoklanlingwang(mode) {
    return true;
  },
  hoknakelulu(mode) {
    return true;
  },
  hoklibai(mode) {
    return true;
  },
  hokzhongkui(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokliyuanfang(mode) {
    return true;
  },
  hokliubang(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokbuzhihuowu(mode) {
    return true;
  },
  hokyuji(mode) {
    return true;
  },
  hokguanyu(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokcaiwenji(mode) {
    return true;
  },
  hokxiahoudun(mode) {
    return true;
  },
  hokyadianna(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokmakeboluo(mode) {
    return true;
  },
  hokjuyoujing(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokchengjisihan(mode) {
    return true;
  },
  hokyangjian(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hoktaiyizhenren(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hoknezha(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokzhugeliang(mode) {
    return true;
  },
  hokhuangzhong(mode) {
    return true;
  },
  hokdaqiao(mode) {
    return true;
  },
  hokdonghuangtaiyi(mode) {
    return true;
  },
  hokganjiangmoye(mode) {
    return true;
  },
  hokguiguzi(mode) {
    return true;
  },
  hokkai(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokbailishouyue(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokbailixuance(mode) {
    return true;
  },
  hoksulie(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokmengqi(mode) {
    return true;
  },
  hoknvwa(mode) {
    return true;
  },
  hokmingshiyin(mode) {
    return true;
  },
  hokgongsunli(mode) {
    return true;
  },
  hokyangyuhuan(mode) {
    return true;
  },
  hokpeiqinhu(mode) {
    return true;
  },
  hokyixing(mode) {
    return true;
  },
  hokkuangtie(mode) {
    return true;
  },
  hokmilaidi(mode) {
    return true;
  },
  hokyuange(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hoksunce(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hoksimayi(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokdunshan(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokjialuo(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokshenmengxi(mode) {
    return true;
  },
  hoklixin(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokshangguanwaner(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokchange(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokzhubajie(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokyao(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokyunzhongjun(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokdongfangyao(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokmachao(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokxishi(mode) {
    return true;
  },
  hoklubandashi(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokmengya(mode) {
    return true;
  },
  hokdongfangjing(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokmengtian(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokaguduo(mode) {
    return true;
  },
  hokxialuote(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hoklan(mode) {
    return true;
  },
  hoksikongzhen(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokailin(mode) {
    return true;
  },
  hokyunying(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokjinchan(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokfei(mode) {
    return true;
  },
  hoksangqi(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokgeya(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokhaiyue(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokzhaohuaizhen(mode) {
    return true;
  },
  hoklaixiao(mode) {
    return true;
  },
  hokjixiaoman(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokyalian(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokduoliya(mode) {
    return true;
  },
  hokhainuo(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokaoyin(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  },
  hokdasiming(mode) {
    if (["connect"].includes(mode)) return false;
    return true;
  }
};
export default characterFilters;