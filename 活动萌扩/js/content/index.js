import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
import bolbingjingliangzu from './bolbingjingliangzu.js';
import bolxingyunsixsixsix from './bolxingyunsixsixsix.js';
import boldecadeDouDiZhu from './boldecadeDouDiZhu.js';
import boldecadeDouDiZhu2 from './boldecadeDouDiZhu2.js';
import OLdoubleThree from './OLdoubleThree.js';
import bol_longzhou from './bol_longzhou.js';
import bol_qingqiu from './bol_qingqiu.js';
import bol_whlw from './bol_whlw.js';
import bol_zhuhou from './bol_zhuhou.js';
import bol_zhugongsha from './bol_zhugongsha.js';
import bol_xuezhan from './bol_xuezhan.js';
import bolPVZ from './bolPVZ.js';
import bolLongZhouRe from './bolLongZhouRe.js';
import bolWechatDouDiZhu from './bolWechatDouDiZhu.js';
import bolWechatDouDiZhu2 from './bolWechatDouDiZhu2.js';
import bol_longzhoux from './bol_longzhoux.js';
import bilibili_wuhuang from './bilibili_wuhuang.js';
import bol_kunyangzhizhan from './bol_kunyangzhizhan.js';
import ol_characterTest from './ol_characterTest.js';
import ol_hezongkangqin from './ol_hezongkangqin.js';
export function content(config, pack) {
	//载入模式
	if (!lib.brawl) return;
	//斗地主
	lib.brawl.boldecadeDouDiZhu = boldecadeDouDiZhu;
	lib.brawl.boldecadeDouDiZhu2 = boldecadeDouDiZhu2;
	lib.brawl.bolWechatDouDiZhu = bolWechatDouDiZhu;
	lib.brawl.bolWechatDouDiZhu2 = bolWechatDouDiZhu2;
	//OL活动场
	lib.brawl.bol_zhuhou = bol_zhuhou;
	lib.brawl.ol_hezongkangqin = ol_hezongkangqin;
	lib.brawl.bol_longzhou = bol_longzhou;
	lib.brawl.bol_longzhoux = bol_longzhoux;
	lib.brawl.bolLongZhouRe = bolLongZhouRe;
	lib.brawl.bol_zhugongsha = bol_zhugongsha;
	lib.brawl.OLdoubleThree = OLdoubleThree;
	lib.brawl.bolbingjingliangzu = bolbingjingliangzu;
	lib.brawl.bolxingyunsixsixsix = bolxingyunsixsixsix;
	lib.brawl.ol_characterTest = ol_characterTest;
	//十周年活动场
	lib.brawl.bol_whlw = bol_whlw;
	lib.brawl.bol_xuezhan = bol_xuezhan;
	//手杀活动场
	lib.brawl.bol_qingqiu = bol_qingqiu;
	lib.brawl.bol_kunyangzhizhan = bol_kunyangzhizhan;
	//其他活动场
	lib.brawl.bolPVZ = bolPVZ;
	lib.brawl.bilibili_wuhuang = bilibili_wuhuang;
}