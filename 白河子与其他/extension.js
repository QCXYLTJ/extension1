import { lib, game, ui, get, ai, _status } from '../../noname.js'
import './source/init.js'
import { content } from './source/content.js'
import { precontent } from './source/precontent.js'
import { config } from './source/config.js'
import { help } from './source/help.js'
export let type = 'extension';
export default async function () {
    const extensionInfo = await lib.init.promises.json(`extension/白河子与其他/info.json`);
    const extension = {
        name: '白河子与其他',
        arenaReady() {
            //平凡武将
            lib.rank.rarity.junk.addArray(['hhzz_shiona', 'hhzz_kanade', 'hhzz_takaramono1', 'hhzz_takaramono2']);
            //精品武将
            lib.rank.rarity.rare.addArray(['mifuren', 'ssftjxushi_yangyi']);
            //史诗武将
            lib.rank.rarity.epic.addArray(['syr_landa', 'syr_xiaoqiao', 'fhsb_huaxiong', 'hl_caopi', 'Mbaby_dufuren', 'syr_liru', 'syr_alna', 'syr_xiaoxiongxiaochun', 'syr_asha', 'syr_liliou', 'old_baoxin', 'syr_yuanjing', 'syr_42', 'syr_linai', 'syr_junling', 'syr_nuoen', 'syr_wangcai', 'old_gaowang', 'syr_liroushan', 'syr_dangfei']);
            //传说武将
            lib.rank.rarity.legend.addArray(['syr_dongqi', 'syr_menghuanxi', 'bug_zhangsong', 'syr_heqi', 'syr_shen_zhanghe', 'syr_zhenbaiyin', 'syr_xinqijunai', 'syr_aili', 'syr_chuzi', 'syr_ying', 'syr_youzhen', 'fhsb_huangzhong', 'old_tenggongzhu', 'old_zhaoyǎn', 'syr_migan', 'syr_yueshuya', 'fh_wuyi', 'Mbaby_huaman', 'syr_nadeshiko', 'db_syr_puyuanmajun', 'syr_tongzhen', 'syr_yanle', 'syr_tongming', 'syr_aosheng', 'syr_lumusi', 'syr_heijiedao', 'bug_yuanshao', 'syr_zhaoyun', 'db_syr_tangseng', 'syr_feiyezhu', 'syr_xuela', 'syr_shen_caoren', 'syr_shen_xushao', 'syr_shen_guanning', 'old_lukai', 'syr_alefei', 'jlsgsoul_sp_zhugeliang', 'jlsgsoul_sunshangxiang', 'jlsgsk_wuxian', 'full_caochun', 'syr_sunwukong', 'syr_wenshu', 'syr_puxian', 'syr_shamiko', 'db_syr_momo', 'syr_lilisi', 'syr_inglis', 'syr_lani', 'syr_anisu', 'syr_yufi', 'syr_bairuowei', 'syr_qianfen', 'syr_wuyi', 'syr_xizi', 'fh_guohuai', 'syr_simayi', 'Mbaby_guansuo', 'Mbaby_baosanniang', 'syr_nieduoqika', 'syr_kajia', 'syr_wangyi', 'syr_shen_xusheng', 'syr_miko', 'syr_hetianyu', 'syr_miya', 'syr_risa', 'syr_sandao', 'syr_jinai', 'syr_lvhe', 'syr_qinxiu', 'syr_gaotanglong', 'syr_Putnam', 'syr_zhouzhu', 'syr_chibugu', 'syr_mingse', 'syr_xian_guojia', 'syr_xusheng', 'syr_caiwenji', 'syr_wangtianyi', 'syr_Bataille', 'syr_tania', 'syr_machao', 'syr_ang', 'syr_Maria', 'syr_guanyu', 'syr_lvlingqi', 'syr_huayingongzhu', 'syr_sushi', 'syr_yuyouhua', 'syr_laozi', 'syr_nanyue', 'syr_jin_simayi', 'syr_bacon', 'syr_nagel', 'syr_sunluban', 'syr_zhuangzi', 'tgs_aosheng', 'syr_linluhe', 'syr_zhaori', 'syr_rinaizi', 'syr_shenliuba', 'syr_dzgGargantuar', 'syr_студентка', 'syr_boyetaili', 'syr_diaochandongbai']);
            lib.rank.s.addArray(['syr_dongqi', 'syr_yanle', 'syr_lumusi', 'db_syr_tangseng', 'syr_feiyezhu', 'syr_xuela', 'fhsb_huangzhong', 'syr_aili', 'syr_chuzi', 'syr_shen_caoren', 'syr_shen_xushao', 'syr_shen_guanning', 'old_lukai', 'syr_alefei', 'jlsgsoul_sp_zhugeliang', 'jlsgsoul_sunshangxiang', 'jlsgsk_wuxian', 'syr_wuyi', 'syr_wenshu', 'syr_puxian', 'syr_nadeshiko', 'syr_shamiko', 'db_syr_momo', 'syr_lilisi', 'syr_inglis', 'syr_lani', 'syr_bairuowei', 'syr_shen_xusheng', 'syr_kajia', 'syr_hetianyu', 'syr_miya', 'syr_risa', 'syr_sandao', 'syr_jinai', 'syr_lvhe', 'syr_zhouzhu', 'syr_chibugu', 'syr_mingse', 'syr_xian_guojia', 'syr_xusheng', 'syr_Putnam', 'syr_Bataille', 'syr_gaotanglong', 'syr_wangtianyi', 'syr_zhenbaiyin', 'syr_tania', 'syr_machao', 'syr_ang', 'syr_Maria', 'syr_nanyue', 'syr_huayingongzhu', 'syr_guanyu', 'syr_sushi', 'syr_yuyouhua', 'syr_laozi', 'syr_jin_simayi', 'syr_bacon', 'syr_nagel', 'syr_sunluban', 'tgs_aosheng', 'syr_linluhe', 'syr_zhaori', 'syr_rinaizi', 'syr_shenliuba', 'syr_dzgGargantuar', 'syr_студентка', 'syr_boyetaili']);
            lib.rank.ap.addArray(['syr_tongzhen', 'hl_caopi', 'syr_shen_zhanghe', 'bug_zhangsong', 'syr_heqi', 'old_tenggongzhu', 'old_zhaoyǎn', 'syr_migan', 'syr_yueshuya', 'fh_wuyi', 'Mbaby_guansuo', 'Mbaby_baosanniang', 'syr_anisu', 'syr_yufi', 'syr_ying', 'syr_qianfen', 'syr_xizi', 'full_caochun', 'syr_sunwukong', 'fh_guohuai', 'syr_simayi', 'syr_wangyi', 'syr_qinxiu', 'syr_xinqijunai']);
            lib.rank.a.addArray(['syr_liru', 'syr_youzhen', 'Mbaby_huaman', 'syr_asha', 'fhsb_huaxiong', 'syr_alna', 'old_baoxin', 'syr_yuanjing', 'syr_42', 'syr_linai', 'syr_junling', 'syr_nuoen', 'old_gaowang', 'syr_wangcai', 'syr_liroushan']);
            lib.rank.am.addArray(['syr_landa', 'syr_xiaoqiao', 'Mbaby_dufuren', 'syr_xiaoxiongxiaochun', 'syr_liliou']);
            lib.rank.bp.addArray(['ssftjxushi_yangyi']);
            lib.rank.b.addArray(['mifuren']);
            lib.rank.bm.addArray([]);
            lib.rank.c.addArray(['hhzz_shiona', 'hhzz_kanade']);
            lib.rank.d.addArray(['hhzz_takaramono1', 'hhzz_takaramono2']);
        },
        content: content,
        precontent: precontent,
        config: config,
        help: help,
        package: extensionInfo,
    };
    return extension;
}