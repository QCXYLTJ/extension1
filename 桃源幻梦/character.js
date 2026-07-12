'use strict';
game.import('character', function (lib, game, ui, get, ai, _status) {
    var tyhm = {
        name: 'tyhm',
        connect: true,
        character: {
            //武将信息
            //G-phone
            caoanghyym: ['male', 'wei', '2/4/1', ['hyym_tishenmu', 'hyym_houche', 'hyym_suishending']],
            //caojiehyym:['female','qun','3/3',['hyym_pianxianyunji']],
            caishenhyym: ['male', 'shen', '4/4', ['hyym_caishenqichang', 'hyym_tongcaixianzhen', 'hyym_yaoqianshu', 'hyym_caishendao']],
            taishicihyym: ['male', 'wu', '2/4/2', ['hyym_sidou', 'hyym_buqvyizhi', 'hyym_hunyin'], ['clan:战鬼猎人族']],
            suncehyym: ['male', 'wu', '3/3', ['hyym_zhenshenlongquan', 'hyym_bawangpaoxiao', 'hyym_hunyin'], ['clan:战鬼猎人族']],
            liushanhyym: ['male', 'shu', '4/4', ['hyym_feihuoliuxing', 'hyym_dujiaoxian', 'hyym_ziyang']],
            moguanfenghyym: ['female', 'mo', '3/3/1', ['hyym_modujiaomengyan', 'hyym_yingxi']],
            bulianshihyym: ['female', 'wu', '3/3', ['hyym_yangchunbaixve', 'hyym_yinren', 'hyym_chenzui']],
            //caiwenjihyym:['female','qun','2/3/1',['hyym_dijianyinbo','hyym_yuyibihu','hyym_meihuodibo']],
            caocaohyym: ['male', 'wei', '4/4', ['hyym_cangyanxianji', 'hyym_dianxve', 'hyym_zhike'], ['zhu']],
            caopihyym: ['male', 'wei', '3/3/1', ['hyym_shuangjianhebi', 'hyym_huabu', 'hyym_fengche']],
            caorenhyym: ['male', 'wei', '4/4', ['hyym_daozhuanqiankun', 'hyym_fenghuolun']],
            //caozhihyym:['male','wei','2/2',['hyym_moyingluanwu','hyym_nongsuo','hyym_wuji','hyym_mengxiang','hyym_taiji','hyym_songzhong','hyym_xingzhejiefang']],
            caocaomahyym: ['none', 'shou', '3/3', ['hyym_zhuangsi', 'hyym_lieyanhongchun', 'hyym_caocaomadajun']],
            //chengonghyym:['male','qun','4/4',['hyym_tianleikongpo','hyym_leiqiu']],
            //chengpuhyym:['male','wu','3/3/1',['hyym_chihunjingtong','hyym_yandun','hyym_hunbao']],
            daqiaohyym: ['female', 'wu', '4/4', ['hyym_shuilaojingu', 'hyym_fengjuanyu', 'hyym_shuimudan', 'hyym_huxianfuti']],
            //diaochanhyym:['female','qun','5/5',['hyym_xvezhizang','hyym_hualuanwu','hyym_yueguangyin']],
            //dongzhuohyym:['male','qun','3/3',['hyym_yujianji','hyym_guishenzhaoling','hyym_shuanghuoguikai','hyym_jinghua'],['clan:战鬼族'],['zhu']],
            fazhenghyym: ['male', 'shu', '3/3/1', ['hyym_cangyingzhinu', 'hyym_bulie', 'hyym_yingji']],
            //fubaohyym:['male','shou','3/3',['hyym_zongzishijian','hyym_fubaomishu']],
            //guanfenghyym:['male','shu','4/4',['hyym_minghuoqiu','hyym_anzhimen','hyym_zhujueguanghuan'],['clan:天命族']],
            //guanpinghyym:['male','shu','3/3',['hyym_zhanlongjue','hyym_shenyan','hyym_xingzhejiefang','hyym_zhujueguanghuan'],['clan:天命族']],
            guanxinghyym: ['male', 'shu', '3/3', ['hyym_xiangmozhichu', 'hyym_bufeng', 'hyym_foguang', 'hyym_xingzhejiefang', 'hyym_zhujueguanghuan'], ['clan:天命族']],
            guanyuhyym: ['male', 'shu', '2/2/1', ['hyym_weizhenhuaxia', 'hyym_guaguliaodu', 'hyym_wushengjianglin', 'hyym_hunyin'], ['clan:战鬼猎人族']],
            //guohuaihyym:['male','wei','3/4/2',['hyym_jilan','hyym_feiyan','hyym_xingzhejiefang','hyym_hunyin'],['clan:战鬼猎人族']],
            //guonvwanghyym:['female','wei','3/3/1',['hyym_cangmingjiansuo','hyym_cangmingjianyin','hyym_yujianxingtai','hyym_cangmingzhilei'],['zhu']],
            //guonvwangyujianhyym:['female','wei','3/3/1',['hyym_cangmingjianfan','hyym_cangmingjianyu','hyym_nvwangxingtai','hyym_cangmingzhilei'],['zhu']],
            //handanghyym:['male','wu','3/3',['hyym_kuaisuzhuangtian','hyym_jianongpao','hyym_lianzhupao','hyym_jiyandiyu']],
            //huamanhyym:['female','shu','2/3/1',['hyym_yiyan','hyym_fengyin','hyym_gujichongshi','hyym_shenjing']],
            //huanglinghyym:['female','qun','3/3',['hyym_zhuanyupan','hyym_lianguangman','hyym_chuilandu','hyym_yuxinfang']],
            huatuohyym: ['male', 'qun', '2/2', ['hyym_qingnangbaodian', 'hyym_kangfenyao', 'hyym_qianggongyao', 'hyym_muzhonghuo']],
            //huaxionghyym:['male','qun','3/3',['hyym_leihuangbaren','hyym_jianpo']],
            huanggaihyym: ['male', 'wu', '4/4', ['hyym_kurouqiangxi', 'hyym_sheshen', 'hyym_zhongmao', 'hyym_bowen']],
            huangyueyinghyym: ['female', 'shu', '3/3/1', ['hyym_jihanlingyu', 'hyym_bingfenglujing', 'hyym_jinzhixveyu', 'hyym_hunyin'], ['clan:战鬼猎人族']],
            //huangzhonghyym:['male','shu','3/3',['hyym_diaogongxveren','hyym_wangongyinyu','hyym_jianmuliaoyuan']],
            //huodouhyym:['male','shou','3/3',['hyym_tiangouxingtai','hyym_yueguang','hyym_xuanya','hyym_tiangouzhinu'],['zhu']],
            //tiangouhyym:['male','shou','3/3',['hyym_huodouxingtai','hyym_lieya','hyym_lingyue','hyym_tiangouzhinu'],['zhu']],
            //jiangweihyym:['male','shu','4/4',['hyym_duanliecangqiong','hyym_lianci','hyym_yuhuang']],
            //jinmachaohyym:['male','qun','3/3/1',['hyym_gedangfanji','hyym_xiuluoanmang','hyym_zhanshenguanghua','hyym_wanjun']],
            //yuejinhyym:['male','wei','4/4',['hyym_mingjingzhishui','hyym_xuanhui','hyym_mengliezhuiji']],
            //lingjvhyym:['female','qun','3/3',['hyym_yirenzhisi','hyym_suyou','hyym_suhui']],
            liubeihyym: ['male', 'shu', '4/4', ['hyym_cixiongjianwu', 'hyym_zhican', 'hyym_hanshizhiyi'], ['zhu']],
            //liuxiehyym:['male','qun','4/5',['hyym_elingqinxi','hyym_guidi'],['zhu']],
            lusuhyym: ['male', 'wu', '3/3', ['hyym_qiannengjifa', 'hyym_cichang', 'hyym_maichong', 'hyym_xisheng', 'hyym_hunyin'], ['clan:战鬼猎人族']],
            //luxunhyym:['male','wu','4/4',['hyym_anyingzhiya','hyym_jianlianzhan','hyym_guizhan','hyym_xingzhejiefang']],
            //lvlingqihyym:['female','qun','4/4',['hyym_xingyunsuolian','hyym_xinlianwu']],
            //mayunluhyym:['female','qun','4/4',['hyym_aishangzhifeng','hyym_zhongpi']],
            menghuohyym: ['male', 'shu', '4/4', ['hyym_nanmanchongji', 'hyym_manwangzhanyi']],
            //mocaocaohyym:['male','mo','2/3/1',['hyym_mohunchaosha','hyym_shayikuanglan','hyym_youmingzhoufa','hyym_mowangningshi','hyym_lianlangboshan']],
            //moyanlianghyym:['male','mo','3/4/1',['hyym_shanjizhinu','hyym_benglieji','hyym_manchongji','hyym_xingzhejiefang']],
            mozhangjiaohyym: ['male', 'mo', '4/4', ['hyym_fenleicedian', 'hyym_yiyuhuangdao', 'hyym_jiazixinggang']],
            nanhuaxianrenhyym: ['male', 'qun', '2/2', ['hyym_zhuangshengmengdie', 'hyym_daofaziran', 'hyym_zhuxingchuixi', 'hyym_wuweizhiwei', 'hyym_baizeenyi']],
            pangdehyym: ['male', 'wei', '4/4', ['hyym_sishenliandao', 'hyym_hunge', 'hyym_feitang', 'hyym_xingzhejiefang']],
            //pangtonghyym:['male','shu','4/4/1',['hyym_gunshishu','hyym_shijiashu']],
            shenhuatuohyym: ['male', 'shen', '4/4', ['hyym_tenglinghuanzhong', 'hyym_hualingruize', 'hyym_lingyunhuisheng']],
            shenzhaoyunhyym: ['male', 'shen', '3/3/1', ['hyym_pojunlongshan', 'hyym_youlongqitanqiang']],
            //shenzhouyuhyym:['male','shen','3/3',['hyym_wuxveshenyou','hyym_shuanghuajianyi','hyym_qianbingduanheng','hyym_shuangtianjuandi']],
            //sunjianhyym:['male','wu','4/4',['hyym_lieyangrongjin','hyym_yangyandaozhen']],
            sunquanhyym: ['male', 'wu', '4/4', ['hyym_honglianshanxian', 'hyym_zhimang', 'hyym_yingkaijue'], ['zhu']],
            //sunruhyym:['female','wu','6/6',['hyym_guanghuiyishan','hyym_zhankong','hyym_haolie','hyym_dicha','hyym_chiyueshiliuye']],
            //sunshangxianghyym:['female','wu','4/4',['hyym_jianwuxidie','hyym_zimujian','hyym_xingzhejiefang']],
            //wangyihyym:['female','wei','3/3',['hyym_qunxingyunluo','hyym_yanmie','hyym_huimadao','hyym_fengjuancanyun']],
            //weiyanhyym:['male','shu','3/3',['hyym_tiandishizi','hyym_fenglai']],
            //wenchouhyym:['male','qun','4/5/1',['hyym_zhaoyang','hyym_pili']],
            xixingcaihyym: ['female', 'shu', '4/4', ['hyym_jingtianjidi', 'hyym_zhujueguanghuan'], ['clan:天命族']],
            //xiahoudunhyym:['male','wei','4/4',['hyym_shixvemoqiang','hyym_xianglong']],
            //xiahouyuanhyym:['male','wei','4/4',['hyym_moguanchongji','hyym_xingluo']],
            xiaoqiaohyym: ['female', 'wu', '4/4', ['hyym_quanlei', 'hyym_wushuang', 'hyym_chongzhen']],
            xingcaihyym: ['female', 'shu', '4/4', ['hyym_anxiang', 'hyym_zhujueguanghuan'], ['clan:天命族']],
            //xiuluomachaohyym:['male','qun','3/3',['hyym_gedangfanji','hyym_chuanxinci','hyym_tieqi','hyym_xiuluolingyu']],
            //xvhuanghyym:['male','wei','3/3',['hyym_xvefuxiling','hyym_xvefulinggou','hyym_fulinghuanxing']],
            xvshenghyym: ['male', 'wu', '3/3', ['hyym_huoliquankai', 'hyym_zhanshufangun']],
            //xunyuhyym:['male','wei','3/3',['hyym_cangqiongjiguang','hyym_shanguang','hyym_shanhui','hyym_fusu']],
            //yanlianghyym:['female','qun','4/4',['hyym_wubu','hyym_lianhong']],
            yangxiuhyym: ['female', 'wei', '3/3', ['hyym_yihesu', 'hyym_jiquanshengtian', 'hyym_dasaochu']],
            yaolvlingqihyym: ['female', 'qun', '3/3', ['hyym_huayingxuan', 'hyym_lingqiangwu', 'hyym_nihuapo', 'hyym_huayinfu']],
            //yujihyym:['male','qun','3/3',['hyym_anheizhousha','hyym_cishexianjing','hyym_miwuxianjing','hyym_yingdun','hyym_yinguizhiqi','hyym_jinghua'],['clan:战鬼族'],['zhu']],
            yuanshaohyym: ['male', 'qun', '4/5', ['hyym_gelie', 'hyym_fenhun', 'hyym_fujianfa'], ['zhu']],
            //zhanshenmachaohyym:['male','qun','3/3',['hyym_gedangfanji','hyym_hanmang','hyym_pojun','hyym_zhanshenlingyu']],
            //zhangbaozihyym:['male','shu','3/3',['hyym_yingdong','hyym_leijia','hyym_leibao','hyym_xingzhejiefang']],
            zhangbaohyym: ['male', 'qun', '4/4', ['hyym_hundunshuangfu', 'hyym_zhanbafang', 'hyym_xingzhejiefang']],
            zhangfeihyym: ['male', 'shu', '4/4', ['hyym_dixian', 'hyym_baonu', 'hyym_hunyin'], ['clan:战鬼猎人族']],
            //zhanghehyym:['male','wei','8/8',['hyym_yingmaomiaozhua','hyym_qidong','hyym_hunyin'],['clan:战鬼猎人族']],
            zhangjiaohyym: ['male', 'qun', '4/4', ['hyym_kuangleitianlao', 'hyym_kuangleilingyu', 'hyym_taipingyaoshu', 'hyym_xingzhejiefang'], ['zhu']],
            //zhanglianghyym:['male','qun','4/4',['hyym_moyingguizhua','hyym_moyingchongji','hyym_guizhuazhinu','hyym_xingzhejiefang']],
            //zhangliaohyym:['male','wei','4/4',['hyym_pojiachongfeng','hyym_douqijinghua']],
            //zhangxiuhyym:['male','qun','4/4',['hyym_chuantouxi','hyym_dianzhang']],
            zhangzhaohyym: ['male', 'wu', '4/4', ['hyym_siwangzhichu', 'hyym_liudaopao']],
            //zhaoyunhyym:['male','shu','4/4',['hyym_shanguanglongya','hyym_saoqianjun']],
            zhenfuhyym: ['female', 'wei', '4/4', ['hyym_huimouyixiao']],
            //zhoutaihyym:['male','wu','4/4',['hyym_longqveanyong','hyym_longqveyuanyue','hyym_longqvebadao']],
            zhouyuhyym: ['male', 'wu', '2/2/1', ['hyym_bingshuangjianwu', 'hyym_jiangbing', 'hyym_bingjie', 'hyym_bingjing']],
            //zhugekehyym:['male','wu','3/3',['hyym_qimenguizhen','hyym_bafangguifu','hyym_wuxingyifa']],
            //zhugelianghyym:['male','shu','3/3',['hyym_kongchengji','hyym_douzhuanxingyi','hyym_kongmingsuo','hyym_hunyin'],['clan:战鬼猎人族']],
            //zhuronghyym:['female','shu','3/3',['hyym_feilaikuangxi','hyym_zaisheng','hyym_iluhuo','hyym_xingzhejiefang','hyym_jingji']],
            //桃源村
            //chunmaomaohyym:['none','shen','3/3',['hyym_duomaomao','hyym_shenyou','hyym_zhujueguanghuan'],['clan:天命族'],['zhu']],
            //nanyouling:['male','gui','4/4',['hyym_yuanling','hyym_jinghua'],['clan:战鬼族']],
            //nvyouling:['female','gui','4/4',['hyym_mingyuan','hyym_jinghua'],['clan:战鬼族']],
            //shenmishangrenhyym:['female','qun','10/10',['hyym_shenmishangdian','hyym_shuaxinjuanzhou','hyym_zhenguishangpin']],
            //tianmingxiaowujiangnan:['male','qun','4/4',['hyym_kaitian','hyym_liehun','hyym_zhujueguanghuan'],['clan:天命族']],
            //tianmingxiaowujiangnv:['female','qun','3/3',['hyym_yingyun','hyym_tianyin','hyym_zhujueguanghuan'],['clan:天命族']],
            //战鬼
            //bulianshizhangui:['female','gui','4/6',['hyym_guixian','hyym_wange','hyym_jinghua'],['clan:战鬼族']],
            //caopizhangui:['male','gui','3/3',['hyym_ranqi','hyym_guibu','hyym_jinghua'],['clan:战鬼族']],
            //guanfengzhangui:['male','gui','4/4',['hyym_dinghun','hyym_zishang','hyym_jinghua'],['clan:战鬼族']],
            //guanpingzhangui:['male','gui','4/4',['hyym_nilin','hyym_jinghua'],['clan:战鬼族']],
            //handangzhangui:['male','gui','3/3',['hyym_pailiu','hyym_baodan','hyym_jinghua'],['clan:战鬼族']],
            //huaxiongzhangui:['male','gui','4/4',['hyym_jvmo','hyym_jinghua'],['clan:战鬼族']],
            //lvlingqizhangui:['female','gui','3/3',['hyym_guiyin','hyym_chebu','hyym_jinghua'],['clan:战鬼族']],
            //menghuozhangui:['male','gui','3/3',['hyym_kuangbei','hyym_pofu','hyym_jinghua'],['clan:战鬼族']],
            //pangdezhangui:['male','gui','3/3',['hyym_cuiling','hyym_guihun','hyym_jinghua'],['clan:战鬼族']],
            //weiyanzhangui:['male','gui','4/4',['hyym_juanli','hyym_jinghua'],['clan:战鬼族']],
            //xiahoudunzhangui:['male','gui','4/9',['hyym_shuangfeng','hyym_xunqing','hyym_jinghua'],['clan:战鬼族']],
            //yanliangzhangui:['male','gui','4/4',['hyym_huyi','hyym_jinghua'],['clan:战鬼族']],
            //zhangbaozizhangui:['male','gui','4/4',['hyym_dianhu','hyym_fangdian','hyym_jinghua'],['clan:战鬼族']],
            //zhangjiaozhangui:['male','gui','3/3',['hyym_mojing','hyym_jinghua','hyym_cangsheng'],['clan:战鬼族'],['zhu']],
            //zhenfuzhangui:['female','gui','3/3',['hyym_meimo','hyym_shehun','hyym_jinghua'],['clan:战鬼族']],
            //zhurongzhangui:['female','gui','4/4',['hyym_zhuliu','hyym_huilu','hyym_jinghua'],['clan:战鬼族']],
            //龙兵
            //biyingtudulong:['none','shou','3/3',['hyym_xveyin','hyym_shuangbao','hyym_longling'],['clan:龙兵族']],
            //lieyanbawanglong:['none','shou','4/4',['hyym_fenji','hyym_longling'],['clan:龙兵族']],
            //qingxuntudulong:['none','shou','3/3',['hyym_cuidu','hyym_yingu','hyym_longling'],['clan:龙兵族']],
            //xuanhuangbawanglong:['none','shou','4/4',['hyym_taixv','hyym_wanxiang','hyym_longling'],['clan:龙兵族']],
            //天命兽
            //basheshou:['none','shou','4/4',['hyym_huanzhen','hyym_ladu','hyym_shenmang'],['clan:天命兽族']],
            //chenxitushou:['none','shou','4/4',['hyym_pushuo','hyym_shenmang'],['clan:天命兽族']],
            //gudiaoshou:['none','shou','4/4',['hyym_xilve','hyym_shunfeng','hyym_shenmang'],['clan:天命兽族']],
            //huoqilinshou:['none','shou','4/4',['hyym_caiyan','hyym_shenghui','hyym_shenmang'],['clan:天命兽族']],
            //jiuweifenghushou:['none','shou','4/4',['hyym_fenlun','hyym_yufeng','hyym_shenmang'],['clan:天命兽族']],
            //kuiniushou:['none','shou','4/6',['hyym_leiming','hyym_jiyao','hyym_shenmang'],['clan:天命兽族']],
            //linglongshou:['none','shou','3/3',['hyym_panti','hyym_zhengzha','hyym_shenmang'],['clan:天命兽族']],
            //qiannianwugongshou:['none','shou','7/7',['hyym_duanzu','hyym_tianlong','hyym_due','hyym_shenmang'],['clan:天命兽族']],
            //shenaoshou:['none','shou','4/4',['hyym_shenqv','hyym_siji2','hyym_xianzong','hyym_shenmang'],['clan:天命兽族']],
            //shenlushou:['none','shou','4/4',['hyym_muchun','hyym_shengzi','hyym_shenmang'],['clan:天命兽族']],
            //tongxinlinglongyushou:['none','shou','3/3/1',['hyym_shuangsheng','hyym_lingyou','hyym_shenmang'],['clan:天命兽族']],
            //xingyuekunshou:['none','shou','3/3',['hyym_jvyuan','hyym_shenmang'],['clan:天命兽族']],
            //神兽
            //baihushou:['none','shou','4/4',['hyym_shangwu','hyym_shenfa','hyym_jixiong'],['clan:神兽族']],
            //qinglongshou:['none','shou',Infinity,['hyym_longwei','hyym_qinglin','hyym_jixiong'],['clan:神兽族']],
            //xuanwushou:['none','shou','6/6',['hyym_guibu2','hyym_taixuan','hyym_jixiong'],['clan:神兽族']],
            //zhuqveshou:['none','shou','4/4',['hyym_fuzuo','hyym_laiyi','hyym_jixiong'],['clan:神兽族']],
            //mengyanshou:['none','shou','4/4',['hyym_shimeng2','hyym_huzu','hyym_diexve','hyym_jixiong'],['clan:神兽族']],
            //taotieshou:['none','shou','4/4',['hyym_tanbi','hyym_jingtun','hyym_jixiong'],['clan:神兽族']],
            //器灵
            //aixinqiling:['none','qun','4/4',['hyym_huanling','hyym_shenzhu'],['clan:器灵族']],
            //hongtaiyangqiling:['none','wu','4/6',['hyym_fenhua','hyym_liaoyuan','hyym_shenzhu'],['clan:器灵族']],
            //kebiqiling:['none','shen','3/3',['hyym_shengyu','hyym_qvhun','hyym_shenzhu'],['clan:器灵族']],
            //leibaobaoqiling:['none','wei','4/4',['hyym_tianfa','hyym_chaoci','hyym_shenzhu'],['clan:器灵族']],
            //maocaoyaoqiling:['none','shu','3/3',['hyym_huanyin','hyym_kuwei','hyym_shenzhu'],['clan:器灵族']],
            //武魂列传
            //xingcaiaojiaoyujie:['female','shu','4/4',['hyym_yuanqi','hyym_zhujueguanghuan'],['clan:天命族']],
            //sunshangxiangbanjuntianya:['female','wu','4/4',['hyym_xianya','hyym_tonggan']],
            //lvlingqichuchukelian:['female','gui','4/4',['hyym_touxin','hyym_bailu','hyym_jinghua'],['clan:战鬼族']],
            //xingcaidingzuitieshe:['female','shu','4/4',['hyym_guibian','hyym_qinfu','hyym_zhujueguanghuan'],['clan:天命族']],
            //caocaomaduduxinshi:['female','shou','3/3',['hyym_mixin','hyym_meiwen']],
            //diaochanguanjiashaonv:['female','qun','3/7',['hyym_qingxin','hyym_sishou']],
            //sunruhunqianmengrao:['female','wu','4/4',['hyym_haishi','hyym_yongjue','hyym_yuanmie']],
            //mayunlukuidaojiee:['female','qun','4/4',['hyym_tanji','hyym_qingshang']],
            //zhangfeimingjieguilai:['male','shu','4/4',['hyym_disha','hyym_zhengyong','hyym_hunyin'],['clan:战鬼猎人族']],
            //liubeiningsibuqv:['male','shu','4/4',['hyym_guzhi','hyym_qingfu']],
            //zhouyuqixixianghui:['male','wu','3/3',['hyym_qiqiao','hyym_lianli']],
            //guanxingsangxiongzhitong:['male','shu','3/3',['hyym_aiwan','hyym_luohun','hyym_zhujueguanghuan'],['clan:天命族']],
            //mayunlushaonvxiangshi:['female','qun','4/5',['hyym_xianggua','hyym_yigua']],
            //xiahouyuanshibaoxiongchou:['male','wei','4/4',['hyym_jiyong']],
            //sunshangxiangxinrusishui:['female','wu','4/4',['hyym_pojing','hyym_jitong']],
            xiaoqiaoyoulinggongzhu: ['female', 'wu', '3/3', ['hyym_xinao', 'hyym_xifa']],
            //yuejinzuishengmengsi:['male','wei','4/4',['hyym_pianpian','hyym_xingmou']],
            //神兵
            //chengongshenbing:['male','wei','4/4',['hyym_yuleicedian','hyym_yunheshenlei','hyym_shenjue'],['clan:神兵族']],
            //yuejinshenbing:['male','wei','5/5',['hyym_nubukedang','hyym_nufutishan','hyym_shenjue'],['clan:神兵族']],
            //luxunshenbing:['male','wu','4/4',['hyym_anyingzhiwu','hyym_siji','hyym_shenjue'],['clan:神兵族']],
            //wangyishenbing:['female','wei','4/4',['hyym_tianweileiyin','hyym_leiyingbu','hyym_shenjue'],['clan:神兵族']],
            //xvshengshenbing:['male','wu','4/4',['hyym_shengyanliandan','hyym_shoumoren','hyym_shenjue'],['clan:神兵族']],
            //zhugekeshenbing:['male','wu','3/4',['hyym_kungenxiangjue','hyym_kungenlvling','hyym_shenjue'],['clan:神兵族']],
            //皮肤
            //lingjvpifu:['female','qun','3/4',['hyym_qianni','hyym_ansuan']],
            //zhurongpifu:['female','shu','4/4',['hyym_fengyue','hyym_youzou']],
            //huangzhongpifu:['male','shu','4/4',['hyym_jueshuo','hyym_keshuai']],
            //sunrupifu:['female','wu','4/4',['hyym_quehuan','hyym_jiuwu']],
            //caiwenjipifu:['female','wei','3/3',['hyym_qianhun','hyym_tiandi']],
            //diaochanpifu:['female','qun','4/4',['hyym_jiaochi','hyym_miyu']],
            //xiaoqiaopifu:['female','wu','4/4',['hyym_xiyu']],
            //zhangbaopifu:['male','qun','8/8',['hyym_xinao2']],
            //nanhuaxianrenpifu:['male','qun','4/5',['hyym_xianjue','hyym_randao','hyym_guizhen']],
            //daqiaopifu:['female','wu','3/3',['hyym_meiyou','hyym_liuyi']],
            //zhugeliangpifu:['male','wu','3/3',['hyym_pojian','hyym_ranjin']],
            //liuxiepifu:['male','qun','3/3',['hyym_shengwu','hyym_longyun']],
            //caojiepifu:['female','qun','3/3',['hyym_jinfeng','hyym_qihuang']],
            //zhangzhaoyushuzhilan:['male','wu','4/4',['hyym_suiren','hyym_jianlan']],
            //塔灵
            //bulianshitaling:['female','ling','4/4',['hyym_lishang']],
            //yuanshaotaling:['male','ling','4/4',['hyym_liancai','hyym_fujia']],
            //caoangtaling:['male','ling','4/4',['hyym_yingsha','hyym_dushi','hyym_angu']],
            //caocaotaling:['male','ling','4/4',['hyym_guiling']],
            //caopitaling:['male','ling','4/4',['hyym_yushi','hyym_qianhui']],
            //caorentaling:['male','ling','4/4',['hyym_fofa','hyym_zhudao']],
            //caozhitaling:['male','ling','1/1/2',['hyym_xvxuan','hyym_huanchen','hyym_mobing','hyym_jianhui']],
            //caocaomataling:['female','ling','3/3',['hyym_shouwu','hyym_michun']],
            //chengongtaling:['male','ling','4/4',['hyym_lingbu','hyym_benlei']],
            //chengputaling:['male','ling','4/4',['hyym_canshuo']],
            //daqiaoxiaoqiaotaling:['female','ling','4/4',['hyym_bingdi','hyym_chuizhen','hyym_lianyan','hyym_xinyin']],
            //diaochantaling:['female','ling','4/4',['hyym_huazang','hyym_yewu']],
            //dongzhuotaling:['male','ling','4/4',['hyym_guiming','hyym_shihun2']],
            //fazhengtaling:['male','ling','4/4',['hyym_huanxi','hyym_kouchou']],
            //guanfengtaling:['female','ling','4/4',['hyym_shanying2','hyym_lingyan']],
            //guanpingguanxingtaling:['male','ling','4/4',['hyym_huyi2','hyym_wujue']],
            //guanyutaling:['male','ling','3/3',['hyym_canyin','hyym_zhonghun']],
            //guohuaitaling:['male','ling','4/4',['hyym_shensuan','hyym_jinchou']],
            //guonvwangtaling:['female','ling','4/4',['hyym_liumai']],
            //handangtaling:['male','ling','4/4',['hyym_mopao2','hyym_sanhuan']],
            //huamantaling:['female','ling','4/4',['hyym_yingzhen']],
            //huatuotaling:['male','ling','4/4',['hyym_shenguang','hyym_linghui']],
            //huaxiongtaling:['male','ling','4/4',['hyym_hunci','hyym_rangu']],
            //huanggaitaling:['male','ling','7/7',['hyym_huagu']],
            //huangyueyingtaling:['female','ling','3/3',['hyym_bingyuan','hyym_yinxve']],
            //huodoutaling:['male','ling','3/3',['hyym_huanyue','hyym_huaying']],
            //jiangweitaling:['male','ling','4/4',['hyym_shushang','hyym_fengong'],['doublegroup:ling:shu']],
            //liubeitaling:['male','ling','4/4',['hyym_tianqi','hyym_hunyuan']],
            //liushantaling:['male','ling','4/4',['hyym_renyi','hyym_qianjun']],
            //liuxietaling:['male','ling','3/3/1',['hyym_dizun','hyym_tiandao']],
            //lusutaling:['male','ling','4/4',['hyym_wumeng','hyym_hunzuo']],
            //luxuntaling:['male','ling','4/4',['hyym_xveying','hyym_jiqi']],
            //lvlingqitaling:['female','ling','3/3',['hyym_chouling','hyym_maohen']],
            //mayunlutaling:['female','ling','4/4',['hyym_yuwu','hyym_yinfeng']],
            //menghuotaling:['male','ling','4/4',['hyym_gaoyu','hyym_sili']],
            //moguanfengtaling:['female','ling','4/4',['hyym_huameng']],
            //moyanliangtaling:['male','ling','4/4',['hyym_jieni','hyym_jibao']],
            //pangdetaling:['male','ling','4/4',['hyym_jiling2']],
            //suncetaling:['male','ling','3/3',['hyym_ziao']],
            //sunquantaling:['male','ling','4/4',['hyym_fenghou','hyym_zixie','hyym_siwei']],
            //wangyitaling:['female','ling','4/4',['hyym_badao','hyym_silve']],
            //sunrutaling:['female','ling','5/5/2',['hyym_yuanfen','hyym_zhenxin','hyym_lingpo']],
            //sunshangxiangtaling:['female','ling','3/3',['hyym_dieling','hyym_jianhun','hyym_wugong']],
            //taishicitaling:['male','ling','3/3/1',['hyym_jiexia','hyym_chongxiao','hyym_linlie']],
            //xixingcaitaling:['female','ling','4/4',['hyym_minghun']],
            //xiahouduntaling:['male','ling','4/4',['hyym_danjing','hyym_gulong']],
            //xiahouyuantaling:['male','ling','4/4',['hyym_ceni']],
            //xingcaitaling:['female','ling','4/4',['hyym_fuling','hyym_suohun']],
            //xunyutaling:['male','ling','3/3',['hyym_kuice','hyym_hunying']],
            //yanliangwenchoutaling:['male','ling','4/4',['hyym_shuangxin','hyym_huikui']],
            //yangxiutaling:['female','ling','4/4',['hyym_lingsu']],
            //yujitaling:['male','ling','4/4',['hyym_zhouyuan','hyym_yuanku','hyym_miedao']],
            //zhangbaotaling:['male','ling','3/3',['hyym_tiaobo','hyym_siwei']],
            //zhanghetaling:['male','ling','4/4',['hyym_fengying']],
            //zhangjiaotaling:['male','ling','4/4',['hyym_leixi','hyym_yingmeng']],
            //zhangliaotaling:['male','ling','4/4',['hyym_hunxi','hyym_xiongbu']],
            //zhangxiutaling:['male','ling','4/4',['hyym_aosi','hyym_gulang']],
            //zhaoyuntaling:['male','ling','3/3/1',['hyym_jinlin']],
            //zhenfutaling:['female','ling','4/4',['hyym_zhuzuo','hyym_guihun2']],
            //zhangzhaotaling:['male','ling','4/4',['hyym_xiangou','hyym_xiuwei']],
            //zhoutaitaling:['male','ling','3/3',['hyym_hualing','hyym_xinpo']],
            //zhouyutaling:['male','ling','4/4',['hyym_huijian','hyym_xvebeng']],
            //zhugeketaling:['male','ling','4/4',['hyym_yuanling2']],
            //zhurongtaling:['female','ling','4/4',['hyym_lianhun','hyym_ranling']],
            //zhangbaozitaling:['male','ling','4/4',['hyym_ninglei','hyym_fuying2']],
            //zhangfeitaling:['male','ling','3/3',['hyym_lincu','hyym_zaojuan']],
            //心魔·贪
            //caopixinmo:['male','mo','5/5',['hyym_yuhai','hyym_jiaokuai','hyym_tanli'],['clan:心魔·贪族']],
            //caishenxinmo:['male','mo','4/4',['hyym_caiyun','hyym_modao','hyym_tanli'],['clan:心魔·贪族']],
            //dongzhuoxinmo:['male','mo','3/3/1',['hyym_mingzhu','hyym_tanli'],['clan:心魔·贪族']],
            //fazhengxinmo:['male','mo','3/3/1',['hyym_miyi','hyym_modao2','hyym_tanli'],['clan:心魔·贪族']],
            //moyanliangxinmo:['male','mo','4/4/1',['hyym_huanyi','hyym_shunying','hyym_tanli'],['clan:心魔·贪族']],
            //moyuanshaoxinmo:['male','mo','3/3',['hyym_modi','hyym_ronghun','hyym_tanli'],['clan:心魔·贪族']],
            //shenmishangrenxinmo:['male','mo','4/4',['hyym_mingshang','hyym_yuxie','hyym_tanli'],['clan:心魔·贪族']],
            //shenzhaoyunxinmo:['male','mo','3/3',['hyym_longwu','hyym_guixin','hyym_tanli'],['clan:心魔·贪族']],
            //xiahuangyueyingxinmo:['female','mo','3/3',['hyym_xianjue','hyym_linyong','hyym_lingye','hyym_tanli'],['clan:心魔·贪族']],
            //yujixinmo:['male','mo','3/3',['hyym_jiuquan','jinzhou','hyym_tanli'],['clan:心魔·贪族']],
            //zhanghexinmo:['male','mo','4/4',['hyym_liance','hyym_tanli'],['clan:心魔·贪族']],
            //zhangliangxinmo:['male','mo','4/4',['hyym_guifu','hyym_mozhao','hyym_tanli'],['clan:心魔·贪族']],
            //zhaoyunxinmo:['male','mo','4/4',['hyym_qvyi','hyym_tanli'],['clan:心魔·贪族']],
            //心魔·嗔
            //caorenxinmo:['male','mo','3/3',['hyym_guifo','hyym_fanpu','hyym_chenhen'],['clan:心魔·嗔族']],
            //chunmaomaoxinmo:['none','mo','4/4',['hyym_yuling','hyym_tuohun','hyym_chenhen'],['clan:心魔·嗔族']],
            //guanpingxinmo:['male','mo','4/4',['hyym_qinmu','hyym_chengwei','hyym_chenhen'],['clan:心魔·嗔族']],
            //huaxiongxinmo:['male','mo','2/2',['hyym_daohun','hyym_chenhen'],['clan:心魔·嗔族']],
            //huanggaixinmo:['male','mo','3/3',['hyym_qianfan','hyym_jilang','hyym_chenhen'],['clan:心魔·嗔族']],
            //jiangweixinmo:['male','mo','3/3',['hyym_suiying','hyym_guimai','hyym_chenhen'],['clan:心魔·嗔族']],
            //machaoxinmo:['male','mo','4/4',['hyym_shenshi','hyym_mozhou','hyym_chenhen'],['clan:心魔·嗔族']],
            //menghuoxinmo:['male','mo','3/3/2',['hyym_shixin','hyym_canli','hyym_chenhen'],['clan:心魔·嗔族']],
            //mozhangjiaoxinmo:['male','mo','4/4',['hyym_moci','hyym_fenlei','hyym_chenhen'],['clan:心魔·嗔族']],
            //pangdexinmo:['male','mo','4/4',['hyym_mingsi','hyym_jiling','hyym_chenhen'],['clan:心魔·嗔族']],
            //xvhuangxinmo:['male','mo','6/6',['hyym_fulong','hyym_chenhen'],['clan:心魔·嗔族']],
            //zhoutaixinmo:['male','mo','3/3',['hyym_wudao','hyym_chenhen'],['clan:心魔·嗔族']],
            //心魔·痴
            //caiwenjixinmo:['female','mo','2/4/2',['hyym_wuluan','hyym_yuchi'],['clan:心魔·痴族']],
            //caoangxinmo:['male','mo','4/4',['hyym_duren','hyym_yuchi'],['clan:心魔·痴族']],
            //caojiexinmo:['female','mo','2/3',['hyym_jinghong','hyym_yuchi'],['clan:心魔·痴族']],
            //chengpuxinmo:['male','mo','3/3',['hyym_qijue','hyym_yuchi'],['clan:心魔·痴族']],
            //diaochanxinmo:['female','mo','4/4',['hyym_moli','hyym_cimei','hyym_yuchi'],['clan:心魔·痴族']],
            //guanxingxinmo:['male','mo','4/4',['hyym_foying','hyym_hunxin','hyym_yuchi'],['clan:心魔·痴族']],
            //huamanxinmo:['female','mo','4/4',['hyym_liangchu','hyym_shimeng','hyym_yuchi'],['clan:心魔·痴族']],
            //lingjvxinmo:['female','mo','3/3/1',['hyym_ranhun','hyym_fenling','hyym_yuchi'],['clan:心魔·痴族']],
            //liushanxinmo:['male','mo','3/3',['hyym_xiongwei','hyym_shouling','hyym_yuchi'],['clan:心魔·痴族']],
            //liuxiexinmo:['male','mo','3/3',['hyym_guilong','hyym_huiyang','hyym_yuchi'],['clan:心魔·痴族']],
            //luxunxinmo:['male','mo','4/4',['hyym_qianying','hyym_juenian','hyym_yuchi'],['clan:心魔·痴族']],
            //lvlingqixinmo:['female','mo','4/4',['hyym_cuimo','hyym_yinling','hyym_guiyu','hyym_yuchi'],['clan:心魔·痴族']],
            //mayunluxinmo:['female','mo','4/6',['hyym_mogua','hyym_yuchi'],['clan:心魔·痴族']],
            //sunruxinmo:['female','mo','4/4',['hyym_shanying','hyym_zhenhun','hyym_yuchi'],['clan:心魔·痴族']],
            //sunshangxiangxinmo:['female','mo','2/2/1',['hyym_huilan','hyym_fengwu','hyym_yuchi'],['clan:心魔·痴族']],
            //xixingcaixinmo:['female','mo','4/4',['hyym_pianwu','hyym_tenglao','hyym_yuchi'],['clan:心魔·痴族']],
            //xiaoqiaoxinmo:['female','mo','4/4',['hyym_sheshen2','hyym_longchui','hyym_yuchi'],['clan:心魔·痴族']],
            //xingcaixinmo:['female','mo','4/4',['hyym_jiwang','hyym_tengbian','hyym_yuchi'],['clan:心魔·痴族']],
            //xunyuxinmo:['male','mo','3/3',['hyym_jianshan','hyym_yingliao','hyym_yuchi'],['clan:心魔·痴族']],
            //yangxiuxinmo:['female','mo','3/3/3',['hyym_ningsu','hyym_miniang','hyym_zhenxiu','hyym_yuchi'],['clan:心魔·痴族']],
            //yuebulianshixinmo:['female','mo','3/3',['hyym_feiyuan','hyym_yuehun','hyym_yuchi',['clan:心魔·痴族']]],
            //zhangjiaoxinmo:['male','mo','4/4',['hyym_miece','hyym_mopao','hyym_yuchi'],['clan:心魔·痴族']],
            //zhurongxinmo:['female','mo','4/4',['hyym_tafa','hyym_zhencang','hyym_yuchi'],['clan:心魔·痴族']],
            //心魔·慢
            //caozhixinmo:['male','mo','2/2',['hyym_hanxun','hyym_moli2','hyym_zuixian','hyym_chixing','hyym_jieman'],['clan:心魔·慢族']],
            //caocaomaxinmo:['female','mo','3/3',['hyym_yaohao','hyym_jieman'],['clan:心魔·慢族']],
            //fubaoxinmo:['male','mo','3/3',['hyym_hongfu','hyym_taiyun','hyym_jieman'],['clan:心魔·慢族']],
            //huangzhongxinmo:['male','mo','4/4',['hyym_jianyu','hyym_hunyi','hyym_jieman'],['clan:心魔·慢族']],
            //moguanfengxinmo:['female','mo','4/4',['hyym_yinglian','hyym_lunhui','hyym_jieman'],['clan:心魔·慢族']],
            //suncexinmo:['male','mo','4/4',['hyym_manbao','hyym_jiaoli','hyym_jieman'],['clan:心魔·慢族']],
            //wangyuanjixinmo:['female','mo','3/3',['hyym_yingwu','hyym_diebu','hyym_jieman'],['clan:心魔·慢族']],
            //weiyanxinmo:['male','mo','4/4',['hyym_yundu','hyym_panmou','hyym_jieman'],['clan:心魔·慢族']],
            //wenchouxinmo:['male','mo','4/4',['hyym_aoni','hyym_xunxin','hyym_gangbi','hyym_jieman'],['clan:心魔·慢族']],
            //xiahouyuanxinmo:['male','mo','3/3',['hyym_jifen','hyym_yinjian','hyym_jieman'],['clan:心魔·慢族']],
            //xvshengxinmo:['male','mo','4/4',['hyym_moqiang','hyym_zhubei','hyym_jieman'],['clan:心魔·慢族']],
            //yanliangxinmo:['male','mo','4/4',['hyym_hujia','hyym_yihui','hyym_jieman'],['clan:心魔·慢族']],
            //zhugekexinmo:['male','mo','3/3',['hyym_suozhen','hyym_faling','hyym_jieman'],['clan:心魔·慢族']],
            //心魔·疑
            //bulianshixinmo:['female','mo','4/4',['hyym_yaoqi','hyym_meihun','hyym_guaiyi'],['clan:心魔·疑族']],
            //guanfengxinmo:['female','mo','4/4',['hyym_huantong','hyym_guaiyi'],['clan:心魔·疑族']],
            //guojiaxinmo:['male','mo','4/4',['hyym_yaoce','hyym_guaiyi'],['clan:心魔·疑族']],
            //huodouxinmo:['male','mo','4/4',['hyym_jvying','hyym_guaiyi'],['clan:心魔·疑族']],
            //mozhenfuxinmo:['female','mo','4/4',['hyym_yisui','hyym_mobian','hyym_liuyin','hyym_guaiyi'],['clan:心魔·疑族']],
            //pangtongxinmo:['male','mo','4/4',['hyym_yanzhen','hyym_shabao','hyym_guaiyi'],['clan:心魔·疑族']],
            //shenliubeixinmo:['male','mo','4/4',['hyym_shuanghun','hyym_jianling','hyym_tianyin','hyym_guaiyi'],['clan:心魔·疑族']],
            //shensunquanxinmo:['male','mo','4/4',['hyym_tongfen','hyym_yinhuo','hyym_cuiyan','hyym_guaiyi'],['clan:心魔·疑族']],
            //shuijingxianshengxinmo:['male','mo','4/4',['hyym_xuanming','hyym_guaiyi'],['clan:心魔·疑族']],
            //sunquanxinmo:['male','mo','4/4',['hyym_juntong','hyym_rangfa','hyym_guaiyi'],['clan:心魔·疑族']],
            //zhangchunhuaxinmo:['female','mo','1/5/2',['hyym_biying','hyym_guaiyi'],['clan:心魔·疑族']],
            //zhangzhaoxinmo:['male','mo','4/4',['hyym_yingzhao','hyym_guaiyi'],['clan:心魔·疑族']],
            //zhenfuxinmo:['female','mo','4/4',['hyym_huanbian','hyym_guaiyi'],['clan:心魔·疑族']],
            //心魔·罪
            //caocaoxinmo:['male','mo','4/4',['hyym_jianxia','hyym_zuiye'],['clan:心魔·罪族']],
            //chengongxinmo:['male','mo','4/4',['hyym_guilei','hyym_wugu','hyym_zuiye'],['clan:心魔·罪族']],
            //daqiaoxinmo:['female','mo','4/4',['hyym_wuling','hyym_zuiye'],['clan:心魔·罪族']],
            //guanyuxinmo:['male','mo','4/4',['hyym_daowu','hyym_shenwu','hyym_zuiye'],['clan:心魔·罪族']],
            //guohuaixinmo:['male','mo','4/4',['hyym_jiying','hyym_zuiye'],['clan:心魔·罪族']],
            //guonvwangxinmo:['female','mo','4/4',['hyym_xunying','hyym_jianwu','hyym_guiqiao','hyym_zuiye'],['clan:心魔·罪族']],
            //handangxinmo:['male','mo','4/4',['hyym_zhanbei','hyym_lvezhen','hyym_zuiye'],['clan:心魔·罪族']],
            //huatuoxinmo:['male','mo','4/6',['hyym_madu','hyym_liezhen','hyym_zuiye'],['clan:心魔·罪族']],
            //huangyueyingxinmo:['female','mo','3/3/1',['hyym_hanchao','hyym_shuangjiang','hyym_zuiye'],['clan:心魔·罪族']],
            //yuejinxinmo:['male','mo','4/4',['hyym_yonglie','hyym_zuiye'],['clan:心魔·罪族']],
            //liubeixinmo:['male','mo','4/4',['hyym_jinlan','hyym_zuiye'],['clan:心魔·罪族']],
            //lusuxinmo:['male','mo','4/4',['hyym_zhenglv','hyym_lizu','hyym_zuiye'],['clan:心魔·罪族']],
            //lvbuxinmo:['male','mo','4/4',['hyym_jiwu','hyym_zuiye'],['clan:心魔·罪族']],
            //mocaocaoxinmo:['male','mo','4/4',['hyym_guzhou','hyym_mojia','hyym_zuiye'],['clan:心魔·罪族']],
            //nanhuaxianrenxinmo:['male','mo','4/4',['hyym_guisuan','hyym_moyun','hyym_zuiye'],['clan:心魔·罪族']],
            //shenzhouyuxinmo:['male','mo','3/3',['hyym_xvebao','hyym_ninghan','hyym_zuiye'],['clan:心魔·罪族']],
            //sunjianxinmo:['male','mo','4/4',['hyym_guihuo','hyym_hanchi','hyym_zuiye'],['clan:心魔·罪族']],
            //taishicixinmo:['male','mo','3/3/1',['hyym_boming','hyym_liexi','hyym_zuiye'],['clan:心魔·罪族']],
            //wangyixinmo:['female','mo','4/4',['hyym_lieji','hyym_guyong','hyym_zuiye'],['clan:心魔·罪族']],
            //xiahoudunxinmo:['male','mo','3/3/1',['hyym_longxi','hyym_juemou','hyym_zuiye'],['clan:心魔·罪族']],
            //yuanshaoxinmo:['male','mo','4/4',['hyym_guijue','hyym_kaojun','hyym_zuiye'],['clan:心魔·罪族']],
            //zhangbaozixinmo:['male','mo','4/4',['hyym_fuying','hyym_shihun','hyym_zuiye'],['clan:心魔·罪族']],
            //zhangbaoxinmo:['male','mo','3/3',['hyym_ezang','hyym_mofu','hyym_jianhua','hyym_zuiye'],['clan:心魔·罪族']],
            //zhangfeixinmo:['male','mo','4/4',['hyym_zaolie','hyym_zhengfeng','hyym_zuiye'],['clan:心魔·罪族']],
            //zhangliaoxinmo:['male','mo','4/4',['hyym_meiying','hyym_fengdu','hyym_zuiye'],['clan:心魔·罪族']],
            //zhangxiuxinmo:['male','mo','4/4',['hyym_huixi','hyym_yinfeng','hyym_zuiye'],['clan:心魔·罪族']],
            //zhouyuxinmo:['male','mo','4/4',['hyym_xvemu','hyym_bingqiao','hyym_zuiye'],['clan:心魔·罪族']],
            //zhugeliangxinmo:['male','mo','1/3',['hyym_qishang','hyym_xingyun','hyym_zuiye'],['clan:心魔·罪族']],
            //彩蛋
            //liubeihei:['male','gui','4/4',['hyym_rendewuliang','hyym_danjian']],
            //taoyuansanying:['male','shu','3/3',['hyym_taomeng','hyym_xiezhan']],
            //hyym_ceshi:['male','shu','4/4',['hyym_fangzhu','hyym_shouhu']],
            hyym_huanyiyouming: ['male', 'key', '3/3', ['byh_xiandeng', 'byh_jixian']],
        },
        characterIntro: {
            //武将简介
            bulianshihyym: '人物关系:<br><br>&emsp;&emsp;孙权(丈夫)<br><br>爱好:琵琶,女红<br><br>&emsp;&emsp;庐江步氏之女,孙权之妻,江湖魔音教最后一位弟子.<br><br>&emsp;&emsp;孔子七十二贤之一步数乘的后人,出生时天边传来悠扬的琴声.因步氏乃一地方大族,步练师自幼爱到良好的培养,尤擅音乐.步练师身边的奶妈是江湖魔音教最后一任传人,为避免门派技艺失传,暗中教导步练师魔音琵琶,这也成为了步练师在乱世中的立身之本.<br>&emsp;&emsp;后步练师意外与孙权相识,在孙权的热烈追求下,成为皇后.但无依无靠的步练师很快遭到东吴宫廷的冷落.于吉入侵东吴宫廷时,步练师使出浑身解数护佑宫人,沾染戾气化为战鬼.结果东吴上下趁孙权在外,将战鬼步练师驱赶出言,致使步练师心灰意冷,决心与孙权相忘江湖.',
            caoanghyym: '人物关系:<br><br>&emsp;&emsp;曹操(父亲)<br>&emsp;&emsp;曹丕、曹植(弟弟)<br><br>爱好:烤火、带娃(兄弟姊妹)<br><br>&emsp;&emsp;字子脩,曹操长子,铁蝎营领袖,郭嘉的弟子.<br><br>&emsp;&emsp;自幼被曹操寄予厚望,受到严格的栽培.曹操在外征战时,身为长子,曹昂常在家中代父职,对上孝敬长辈,对下抚恤弟妹,获得上下充分认可.<br>&emsp;&emsp;性格稳重且孝顺,不惜自身利益照顾他人.成年后随父亲从军,在宛城战役中曹操因急色激怒张绣引发反叛.危机时刻,曹昂让马救父.后曹昂被高抬贵手的张绣放逐至荒漠,却意外落入<万古毒蝎>巢穴.伤重的他利用蝎子毒素麻痹神经处理伤口,最终半身毁容却获得了驭蝎之能.归来后,曹昂不顾曹操挽留,退出朝堂,加入情报司,组建<铁蝎营>.',
            caocaomahyym: '人物关系:<br><br>&emsp;&emsp;福宝(朋友)<br>&emsp;&emsp;杨修(灵魂侧影)<br><br>爱好:吃糖果、亲吻他人脸颊<br><br>&emsp;&emsp;首个以妖兽外形被战魂殿记录的武魂,具有索隐他人灵魂本质的能力,任何地点都能将物品送达的跑腿达人.本为杨修灵魂本质的一部分,后与杨修灵魂分离,升华为名为<童年>的概念集合杨修曾遭受诅咒,变成妖兽<草草马>.后杨修在小武将帮助下回复人身,而杨修变幻的草草马也被战魂殿以杨修<灵魂侧面>记录下来.<br><br>&emsp;&emsp;最初它是陪伴杨修的妖兽玩偶,凝结了杨修孩提时代的梦想、旖思与个性本质.战魂殿将<草草马>记录为武魂肖像后,逐渐萌生自我意识,升华为孩子成人过程中褪去的<童真>集合概念.桃源村的草草马没有肉身本体,仅以武魂体现世,独立在桃源村生活.',
            caojiehyym: '人物关系:<br><br>&emsp;&emsp;曹操(父亲)<br>&emsp;&emsp;曹丕、曹植(兄长)<br><br>爱好:采药行医,为亡灵祈福<br><br>&emsp;&emsp;曹操之女,曹丕与曹植的庶妹,被曹操强制送嫁给汉献帝刘协,如今是刘协名义上的皇后.<br><br>&emsp;&emsp;因出生时宫阙上落下鸩鸟的尾羽被曹操视为不祥.襁褓时即被发配给已逝祖父曹腾守陵.自幼由陵墓的幽灵抚养.<br>&emsp;&emsp;在与幽灵相处中,曹节体会到生离死别的哀痛,时逢战乱,为了避免更多的人在战乱中成为孤野亡魂,她自学成为一名医女,匿名行走在山野林间,救治黎民百姓.<br>&emsp;&emsp;后曹操为获取汉献帝手上的玉玺,试图利用曹节,强制向汉献帝发起联姻.曹节本不愿从命,后有感于刘协的良善与所受伤痛,决定暂时留在刘协身边再做下一步筹划.',
            caopihyym: '人物关系:<br><br>&emsp;&emsp;曹操(父亲)<br>&emsp;&emsp;曹植(弟弟)<br><br>爱好:舞剑(尤善以短兵胜长兵),吃<br><br>&emsp;&emsp;字子桓,知名政治家,曹操次子.<br><br>&emsp;&emsp;出生时宫阙上曾萦绕青色祥云,曹操视为吉兆,一度对曹丕寄予厚望.然曹丕表现平平,令曹操大失所望.在前有长子的曹昂,后有天赋异禀的曹植的前提下,曹丕常常受到曹操的忽视.<br>&emsp;&emsp;曹丕有成为曹操继任者的野心,他深知自己的优势很小,便暗中努力,竭力把握每次机会.宛城事变后,曹昂出走朝堂.曹操需要择选新的继承人,曹丕一边随军观察曹操言行,一边暗中走动.恰逢曹植因与甄宓自由恋爱一事触怒曹操,曹丕趁机在攻打袁绍时表现自己领导力,成功让曹操另眼相待,获得继承人培养.然而如今,曹昂再度回归,继承一事再添变数.',
            caozhihyym: '人物关系:<br><br>&emsp;&emsp;曹操(父亲)<br>&emsp;&emsp;曹昂,曹丕(兄长)<br><br>爱好:词赋,书法,雅乐,赠诗<br><br>&emsp;&emsp;字子建,知名文学家,曹昂与曹丕之弟.<br><br>&emsp;&emsp;曹植少年早慧,三岁能文,十岁诵诗撰词作赋,均信手拈来.他才华之卓越响彻整个神州大陆,为此深受曹操喜爱.在曹昂因宛城事变与曹操疏远后,曹操一度打算将曹植培养成继承人.<br>&emsp;&emsp;但曹植卓越的才华引起曹丕的嫉妒.曹植淡泊名利,得知曹丕对王位有意,为顾及手足,他一度远离宫廷在外游山玩水.正是在那时,他与甄宓在洛水河畔相遇并相爱.可惜世事无常,曹植因甄宓陷入与曹丕的三角纠葛中.曹操对曹植为情爱而不顾大局的处事方法深感失望,转而培养曹丕.曹植也因矛盾纠葛心灰意冷,自我放逐.',
            chengonghyym: '人物关系:<br><br>&emsp;&emsp;吕布(主公)<br>&emsp;&emsp;张角(友人)<br><br>爱好:淋雨,忙里偷闲<br><br>&emsp;&emsp;字公台,东郡东武阳人.曾为曹操座下谋士,后弃曹而去,与群张角结交.现为吕布的谋士.<br><br>&emsp;&emsp;父母自幼以<成功>的谐音为他取名<陈宫>.由于家族过分严苛的鞭策,致使陈宫走向了另一个极端——崇尚慵懒的谋士.<br>&emsp;&emsp;在其他谋士认真<良禽择木而栖>时,陈宫秉持<背靠大树好乘凉>的想法,不假思索直接投靠当时最强大的曹魏集团.后因不喜其霸道行事而离开.在低谷期时,陈宫与理想主义的张角相遇,群阵营以开放态度包容了这位有奇异想法的谋士.后在张角失踪后,陈宫试图以为<吕布>效力作代价,请求吕布支撑群阵营,寻找张角.',
            dengaihyym: '人物关系:<br><br>&emsp;&emsp;王元姬(朋友)<br>&emsp;&emsp;邓艾(朋友)<br><br>爱好:牛背上吹笛,池塘捉鱼<br><br>&emsp;&emsp;出身于贫苦农家的少年,万松书院<经世致用派>的学子,致力于研究农耕与水利的田野实践家.<br><br>&emsp;&emsp;少时经历大饥,十分关注农耕水利的发展.从小希望能学有所成,造福一方.他家境贫寒,无法受教,便利用替富人家抄书的机会习得文字,在农田放牛间隙持麦秸杆在地上默写背诵,自学成才.<br>&emsp;&emsp;后万松书院前任书院长创办私学,邓艾因长期钻研农耕水利之道,对此颇有心得,被选入校学习.在前任书院长指点下,邓艾开发出新型农具——<黄犊机关>.此举大大提升家乡人民的农耕效率.邓艾也因此受到家乡农神的赏识.农神的一缕神识钻入机关牛中,决定陪伴这个孩子成长.',
            fazhenghyym: '人物关系:<br><br>&emsp;&emsp;诸葛亮(上级)<br>&emsp;&emsp;刘备(主公)<br><br>爱好:搜集珠宝,赌博,偷窃<br><br>&emsp;&emsp;字孝直,名士法真之孙,诸葛亮的辅翼,江湖别号<神翼怪盗>的义贼.<br><br>&emsp;&emsp;出身于以<清正>闻名的世家大族,少年时期的法正曾接受极为严格的道德教育.然而当他目睹家族为了护全自己名声,不惜牺牲弱势群体的生命后.他对家族产生质疑,借<游学>名义离家出走.<br>&emsp;&emsp;法正曾在极为困窘之时被小偷所救,阴差阳错被教授偷窃技巧.天下大乱后,法正一度侍奉刘璋为主.然刘璋羸弱,其治下秩序不稳,权贵对平民恃强凌弱是常态.为锄强扶弱,法正选择以<神翼怪盗>身份暗中帮助百姓.刘备入蜀后,法正因其特殊经历与奇谋善断受到器重,成为诸葛亮信任的辅翼.',
            fubaohyym: '人物关系:<br><br>&emsp;&emsp;奶奶<br>&emsp;&emsp;小武将(朋友)<br><br>爱好:吃竹笋,滚泥沙,玩叶子滚成的球<br><br>&emsp;&emsp;本名阿宝,从沉睡封印中苏醒的萌兽因兽人脸与人形身而遭到妖兽与人类的排挤,后被隐善村老奶奶收留.奶奶希望<福>气可赐予这位小朋友,为其新取名<福宝>.<br><br>&emsp;&emsp;原本是拥有<食铁兽>凶名的妖兽,黄帝和蚩尤大战时,蚩尤的左右手.蚩尤战败后,遭到清算.黄帝见它本质善良,未曾伤人,只将它封印起来.<br>&emsp;&emsp;<天命兽>苏醒后,各大区域妖兽活跃频繁,福宝也随之苏醒.由于封印时间过长,福宝实力退化,记忆缺失,身形变回幼惠期.它的外形既非纯粹的四足妖兽,也不是完全的人形,引发了好一阵恐慌.后在小武将帮助下,福宝定居桃源村.',
            ganninghyym: '人物关系:<br><br>&emsp;&emsp;孙权(主公)<br><br>爱好:收集丝绸,击鼓,吃肉<br><br>&emsp;&emsp;字兴霸,本为长江上有名的锦帆贼.现为吴王账下第一斗将,东吴重要贸易口——<博罄埠>的管理者.<br><br>&emsp;&emsp;本出身于益州丝绸富商之家,家族在江湖中颇具名望,对各大运河要道了如指掌.后家族被仇家倾覆.成年后甘宁手刃仇敌,因仇家为朝廷重臣,为躲避官兵通缉,甘宁落草为寇,成为长江上有名的水匪.后经周瑜与吕蒙举荐,加入东吴,为吴王孙权效力.<br>&emsp;&emsp;为人开朗豪爽,生活讲究,因钟情于丝绸,时人称之为<锦帆贼>.他是拥有七次穿越长江风暴的传奇悍匪.遍历江湖世态炎凉,甘宁与一般绿林好汉相比,其内在匪气十足,嗜杀成性.同时,甘宁也不在乎所谓的承诺与荣誉.',
            guanfenghyym: '人物关系:<br><br>&emsp;&emsp;关羽(父亲)<br>&emsp;&emsp;关平、关兴(弟弟)<br><br>爱好:做饭,读书<br><br>&emsp;&emsp;武圣关羽的长女,关平关兴的姐姐.生而拥有地煞之力——魇祷的武将,具有将无形之思化为有形,置换梦境与现实的能力.<br><br>&emsp;&emsp;由于母亲早逝,父亲常年在外主持军务,关凤很早便学会照顾家人,料理府中内外.对关平关兴来说,姐姐无疑是世界上最温柔的人.因为关凤从来会以微笑面对家人,而将委屈留给自己.关羽因担心自己体内煞气伤害到亲人,即便与关家姐弟相聚也十分疏离,被关凤误以为其重视百姓远胜过亲人.为能与父亲并肩同行获得父亲重视,她希望提高自身实力,独自踏上远航的旅程.结果因特殊体质遭到于吉与蚩尤的觊觎,受戾气侵染变为战鬼.',
            guanyuhyym: '人物关系:<br><br>&emsp;&emsp;关凤(女儿)<br>&emsp;&emsp;关平、关兴(儿子)<br><br>爱好:军训、习武、喝酒<br><br>&emsp;&emsp;字云长,蜀国大将军,蜀王刘备义弟.<br><br>&emsp;&emsp;出生于河东郡解县,祖上未有官职.自幼体魄强健,诸武精通.少时曾隐姓埋名帮助过黄巾起义,后家族在起义中受到牵连,遂脱离组织逃亡江湖.流亡中关羽被刘备收留,刘关张结拜为义兄弟.<br>&emsp;&emsp;为人忠义无双,爱护子女.刘备早年颠沛流离,关羽一路跟随毫无怨言,纵曹操以高官厚禄引诱亦不为所动.由于长期身处遍布煞气的战场,关羽体内吸收了过量的煞气,为不使儿女受影响,招致命途不遂,关羽常年远离亲人,驻守边关.不过过量的煞气还是改变了他的身体,导致其情绪不稳,杂念从生,心魔由此而起.',
            guojiahyym: '人物关系:<br><br>&emsp;&emsp;曹操(主公)<br>&emsp;&emsp;乐进(下属)<br><br>爱好:围棋,逗猫,欣赏木槿花<br><br>&emsp;&emsp;字奉孝,出身颍川寒门,曹操账下第一谋士,魏国最高情报机构的执掌者之一.<br><br>&emsp;&emsp;自幼丧父,家道中落,放荡不羁,不流世俗.及冠后,郭嘉受荀彧邀请,拜入曹操摩下,任军师祭酒.因身体羸弱不常出现在人前.但他于帷幕之中制胜千里之外,频频为曹操带来胜利.<br>&emsp;&emsp;官渡一战后,郭嘉大病一场.后他转入幕后,执掌魏国至高情报机构.刘备意图北伐时,天命小武将前往蜀国北境劝阻.然未等刘备宣布回心转意,魏国深埋蜀军的眼线先一步前往<饮江夜宴>船上为他带回情报.小武将一路追踪直至幕后主持人郭嘉面前.在那个夜里,双方展开了一场详谈.',
            huamanhyym: '人物关系:<br><br>&emsp;&emsp;祝融(母亲)<br>&emsp;&emsp;孟获(父亲)<br><br>爱好:吃饭,睡觉,沙画<br><br>&emsp;&emsp;南蛮王孟获与祝融夫人之女,由<蜃兽>化形而来,是为<蜃女>.<br><br>&emsp;&emsp;花鬘刚出生时如米粒般大小,父母为她唤来云雷淬洗,她自深海中化作人形走上河岸.<br>&emsp;&emsp;花鬘心智天真,因祝融夫人与孟获忙碌无暇照顾,四处闯祸.曾闹得夜叉王张辽城堡一片混乱,误导祝融夫人与夜叉世代为敌.后因招惹曹操,遭围攻,张辽及时相救.曹操以她为由逼迫张辽加入魏阵营,张辽应允.花鬘因此深感愧疚,在这之后她常常不顾偷偷去魏国拜访张辽.',
            huanglinghyym: '人物关系:<br><br>&emsp;&emsp;黄忠(兄长)<br>&emsp;&emsp;吴普(师傅)<br>&emsp;&emsp;华佗(师祖)<br><br>爱好:药膳,炼丹,射箭<br><br>&emsp;&emsp;山林猎户之女,黄忠之妹,药谷谷主吴普之徒.<br><br>&emsp;&emsp;自幼失怙,与兄长相依为命.七年前月宫遭变,玉兔族对外求助.因月亮的运转关系地面万千生灵,黄龄选择与兄长分离,只身前往月宫帮助玉免族.日常与兄长仅能凭借特殊弓箭传递音讯.<br>&emsp;&emsp;后于吉夺取<金蟾丸>(长生不老药)之心不死,二度袭来.黄龄为避免其落入歹人手中,甘愿被玉兔族长变为玉兔,好使用玉兔族特有的<屏息藏丹>之术将此药吞入体内,伺机逃出月宫.受化形影响,黄龄一度丢失大部分记忆.纵如此,黄龄仍谨记守护月宫的誓言,一直在月宫周围孤军奋战.直到小武将为调查<月缺>一事到来.',
            huangzhonghyym: '人物关系:<br><br>&emsp;&emsp;小武将(朋友)<br>&emsp;&emsp;南华仙人(尊者)<br><br>爱好:望月、弓箭、狩猎<br><br>&emsp;&emsp;出身山林猎户,自幼与妹妹相依为伴.姑妹因故与玉兔族前往月亮后,使用玉兔所授神弓保持联系.但自天狗吞月事件后,送往月球的传信再无回应后,由此踏上寻找妹妹消息的旅途.<br><br>&emsp;&emsp;未来蜀国五虎上将之一,封征西将军,统领御林军,忠心刘备,与关羽是好友,颇受百姓敬仰.相传其人跟夏侯渊有恩怨,二人作为对立阵营武将,常常相互比武骑射,丝毫不退让.',
            jiangqinhyym: '人物关系:<br><br>&emsp;&emsp;神孙权<br>&emsp;&emsp;诸葛瑾<br>&emsp;&emsp;<br><br>爱好:素食者、冷笑话、吃西瓜<br><br>&emsp;&emsp;字公弈,大陆有名的<荡寇将军>,山越之敌.江东最早开拓部将之一.现长驻南境,是为<南境铁鹰>.<br>&emsp;&emsp;本为良家子,后蒋家自留耕地被豪强土地兼并,成为流民.迁徙中,蒋钦目睹父母被落草为寇的流民生食.他为乱世弱者挥刀至更弱者感到痛心,适逢孙策招募兵马,他投入孙策麾下获得栽培,自此行伍半生.<br>&emsp;&emsp;蒋钦是江东老将之一,久经血与火的考子,祝为根在,目君遥军,本茶而冷,视力极佳,目若鹰售,肃杀而冷峻.他在东吴威望极高,因严正刻板的性格,旁人不敢靠近,年轻人尤为畏惧.殊不知,蒋钦豁达且开明,对青年人富有耐心.',
            liubeihyym: '人物关系:<br><br>&emsp;&emsp;关羽、张飞(兄弟)<br>&emsp;&emsp;刘禅(儿子)<br><br>爱好:修鞋、好华服、马术<br><br>&emsp;&emsp;字玄德,蜀国君主,中山靖王之后,关羽和张飞的义兄长,汉室皇族的后裔,然到其一辈时家道中落.自幼以织鞋贩履维生,拥有强大的察言观色能力.年少时他受宗族资助外出游学,结交各色豪杰,小小年纪展现出强大的交际手腕.<br><br>&emsp;&emsp;灵帝时吏治不胜,乱世风云渐起,他与关羽、张飞桃园结义,决心要还天下一个太平.他奉行仁道,礼贤下士,三顾茅庐终得诸葛孔明的认可.在其治理的区域,他力所育能及推行仁政,然命运不眷,仍是颠婆半生.赤壁一战中,他与吴国联盟抗击曹操南下,后入主巴蜀,抱持着<复兴汉室>的宏愿,成为蜀王.',
            liushanhyym: '人物关系:<br><br>&emsp;&emsp;刘备(父亲)<br>&emsp;&emsp;囍星彩(妻子)<br><br>爱好:蜂蜜,逃跑,和星彩玩<br><br>&emsp;&emsp;字公嗣,小名阿斗,刘备之子,生母是已逝的甘夫人,蜀国未来继承人.<br><br>&emsp;&emsp;早年刘备四处奔波,甘夫人随丈夫流离.刘备屯兵新野时,曾短暂驻扎在附近的乡村.甘夫人在艰苦的环境下生下刘禅并独自抚养.后刘备大败长坂坡,母子二人因此遇难,幸得赵云力挽狂澜才逃过一劫.<br>&emsp;&emsp;刘备之举,令甘夫人此后心有郁结,早早去世.刘禅也因母亲之故与父亲有隔阂.为了逃避父亲管教,刘禅一度逃入森林中与单纯的野兽为伍.他心思单纯,向往自由,因骑一头雪熊而自称<熊大>.看似喜欢要乐且难堪大任,但只有熟悉他的人(如星彩)才清楚,他有答应的事情就要做到的责任感.',
            luxunhyym: '人物关系:<br><br>&emsp;&emsp;孙权(主公)<br>&emsp;&emsp;孙茹(爱人)<br><br>爱好:读书,观察孙茹<br><br>&emsp;&emsp;吴郡陆氏之后,由孙权一手提拔的下属,江东郡主孙茹的爱人.<br><br>&emsp;&emsp;因陆逊的从祖父庐江太守陆康曾命丧孙策之手,在陆逊之前,陆氏一门没有人出任为东吴王室效力.孙策<早逝>后,孙权为缓和与本土士族关系,一手提拔年少的陆逊,并将侄女孙茹的安危交付给他.陆逊感谢孙权信任,尽心尽责.后陆逊与孙茹心生情愫,成为恋人.<br>&emsp;&emsp;陆逊为人沉默寡言,但敢作敢当,陆氏与孙氏有怨,他对喜欢上孙茹深感愧疚,但从不否认自己对孙茹的情感.为了让爱人生活在更好的环境中,<br>&emsp;&emsp;他离开孙茹,执行秘密任务,由此开始了与孙茹漫长的别离与相思.',
            lvbuhyym: '人物关系:<br><br>&emsp;&emsp;貂蝉(梦中人)<br>&emsp;&emsp;董卓(互为克星)<br><br>爱好:武斗,放羊<br><br>&emsp;&emsp;字奉先,天生地煞之体者,生而懂得运用地煞——气禁之术.吕布可以阻挡切鬼魅,拥有极强的身体修复能力,是真正意义上的<悍不惧死>,具有<鬼神>美名.<br><br>&emsp;&emsp;出生于边疆,自小与异族混居,因特殊体质遭到欺辱.后从军习武,晋升为百夫长,又因报私仇被降职为仪仗兵.边疆暴动后,他手持仪仗兵武器<方天画载>杀出重围,向充州刺史丁原求援,自此一战成名.<br>&emsp;&emsp;曾担任丁原的主簿,丁原与宦官集团斗争败亡后,吕布趁水淹洛阳之际,以疏散百姓之义举收拢洛阳城内的驻军,从此走上争霸之路.后为解析自身体质秘密,探索两仪宫,因触发了宫殿机关,陷入沉睡,直到小武将与貂蝉的到来.',
            lvlingqihyym: '人物关系:<br><br>&emsp;&emsp;吕布(父亲)<br>&emsp;&emsp;于吉(师父)<br><br>爱好:甩鞭子,指挥他人干活<br><br>&emsp;&emsp;吕布与发妻严氏之女,自死灵墓穴中获得第二次生命的女孩.现跟随于吉左右,成为战鬼徒弟.<br><br>&emsp;&emsp;自幼坎坷,生活艰辛.父亲吕布为实现远大志向,不计儿女情长,抛妻弃子.后严氏病逝,年幼的吕玲绮为寻找父亲,不幸卷入战场.濒死之际,由于其在于吉面前作为幼童展现的强大意志,受到于吉青睐,成为战鬼.<br>&emsp;&emsp;于吉将整个战场的亡灵集于吕玲绮一人身上.吕玲绮因此活了下来,但也完全失去了成长的可能性.由于身体长期处于孩童阶段,吕玲绮性格也失去成长,为人任性、刁蛮且毫无责任感.但内心深处她一直担心别人会因为她年幼而轻视她,十分渴望成长成人.',
            lvmenghyym: '人物关系:<br><br>&emsp;&emsp;孙权(主公)<br>&emsp;&emsp;周瑜(伯乐)<br><br>爱好:钓鱼,暖和入睡<br><br>&emsp;&emsp;字子明,与陆逊并称吴国双子将星,自衣侠客,江湖救急的<及时雨>,吴王座下鹰犬.<br><br>&emsp;&emsp;家中贫寒,少时行事鲁莽,曾只身<南渡长江>谋生.后吕蒙凭借武艺与谋略在军中冉冉升起,赤壁时他曾跟随在周瑜身边左右.曹操败逃后,吕蒙于东吴夺<江陵>一战中献计献策,最终大获全胜,由此一举成名.<br>&emsp;&emsp;吕蒙个性谦卑,尤擅藏锋一道,在东吴内部,常让出荣耀.然确认目标,出击迅猛.孙权政治垫伏时,曾派遣吕蒙前往民间搜集民情,吕蒙以江湖侠客到访,不仅对民众的不公伸出援手,也在孙权允许的范围内惩治朝堂的奸恶.因其常奔走于风雨中援助他人的义举,江湖人称<及时雨>.',
            machaohyym: '人物关系:<br><br>&emsp;&emsp;马腾(父亲)<br>&emsp;&emsp;马云禄(妹妹)<br><br>爱好:马术,吃羊肉<br><br>&emsp;&emsp;字孟起,蜀国将军,西凉马腾之子,马云禄兄长,有<锦马超>的美名.<br><br>&emsp;&emsp;父亲为大汉成边将军,马少时健勇,深得马腾信任.汉末皇室倾颓,其父马腾为向汉表忠前往曹操控制的许昌,留马超在西凉统军.后马腾在许昌离奇死亡,马超怀疑曹操下手,先率军众怒投张鲁麾下,后又降刘备,成为蜀将.<br>&emsp;&emsp;马超自恃名门之后,相貌俊朗,为人行讲究,自恋自矜自傲.他在军中对待兵以<冷酷>而闻名.实质是马超由身,其行事逻辑常常会与平民百姓不局,容易令人误会他不懂得体恤他人处境.战鬼联盟出现后,马超主动深入冥府,为蜀国观测冥府的异动.',
            moguanfenghyym: '人物关系:<br><br>&emsp;&emsp;关羽(父亲)<br>&emsp;&emsp;关平、关兴(弟弟)<br><br>爱好:做饭,读书,飞翔<br><br>&emsp;&emsp;战鬼关凤接收沉睡上亿年巨兽灵魄后,无意中激活了其魇祷之体的特质,化身魔关凤.<br><br>&emsp;&emsp;关凤化为战鬼后,以其坚韧心智,一直与于吉对抗,试图取回神智.于吉为更好控制她,让甄宓给她施展<杀戮之气>.关凤一路逃到鬼泣林,晕倒在地.林中的鬼帝刘协同情她的遭遇,唤醒沉睡的巨兽——恐龙,凝聚其灵魄,使关凤魔化,摆脱了<杀数之气>的控制.<br>&emsp;&emsp;但魔化不能根除关凤体内的戾气,受戾气气影响,关凤伤害过无辜的百姓.玄冥谷一战中,关凤趁多方对峙,趁机争抢共工元神碎片,在巨大的情绪冲击中,碎片力量释放,根除了体内戾气.现在为弥补自己曾经的过错,关凤再一次踏上旅途.',
            moyuanshaohyym: '人物关系:<br><br>&emsp;&emsp;曹操(损友)<br>&emsp;&emsp;张角(盟友)<br><br>爱好:远游,歌舞,鉴宝<br><br>&emsp;&emsp;继承神造法宝——<天地宝鉴>内在能量的武将,袁绍的魔化发展,矛盾而统一的战士.<br><br>&emsp;&emsp;兵败官渡后,袁绍进退失据,分裂出多重人格逃避现实.因缺乏放弃的勇气,无法放下得失.为东山再起,袁绍探索先祖遗宝,又因害怕在终点直面不堪的内在,停滞不前.直到小武将的到来,本为妾生庶子,一生为获得符合家世的体面而向上攀爬,困囿于自身缺陷,缺乏放弃的勇气,形成不够果决的性格.这似纨绔般痞里痞气的武将形象,是袁绍终其一生都想要逃避的.在小武将帮助下,他最终与自我和解.但在吸收能量取得突破时,为压制法宝中涌现的黑气,坐而炼化,成为魔袁绍.',
            mozhangjiaohyym: '人物关系:<br><br>&emsp;&emsp;张宝(兄弟)<br>&emsp;&emsp;张梁(兄弟)<br><br>爱好:冥想<br><br>&emsp;&emsp;张角的魔化形态,雷霆之怒,不动明王.<br><br>&emsp;&emsp;张角常于梦中见被戾气缠绕的不周山.他是天生的道法奇才,是蚩尤选定的助力,也是于吉的第一个学生,本应作为搅动大陆风云的旗手,不想张角从未屈服他们的引诱.<br><br>&emsp;&emsp;他曾根据<太平经>发明出祛除疫病的节杖,后为了让黄巾军在桃源村休养而暂时封印.疫病重返后,他试图重新举起节杖除疫,不想节杖本就是于吉做的局.为拯救沾染戾气黄巾弟兄,他最终与恶魔做了交易.常人以为他屈服给邪恶,只有周身萦绕的雷霆之力,似乎昭示了一切并没有表面看起来这么简单.',
            mozhenfuhyym: '人物关系:<br><br>&emsp;&emsp;曹植(爱人)<br>&emsp;&emsp;曹丕(名义夫君)<br><br>爱好:吃花蜜,种花<br><br>&emsp;&emsp;吸收<妹喜>凤蝶获得突破的武将,甄宓的魔化发展,自爱中蜕变重生的战士.<br><br>&emsp;&emsp;甄宓为获得自由的力量,拜于吉为师,汲取戾气成为战鬼.因身体承受极限,她隐居洛水河畔.<br>&emsp;&emsp;曹昂为解决曹操因甄宓冷落曹植一事,与小武将来到洛水河畔.不想惊扰了正在休养的甄宓,意外触发甄宓戾气暴动.危急时刻,一位无名山中行者拿出吸取情绪的凤蝶,稳住了甄宓,然而凤蝶也带来了更多的问题.为了拯救心上人,曹植当场在洛水河畔做赋,重新唤醒甄宓沉睡的心.最终,甄宓勇敢走出伤痛,反过来吸收凤蝶妖兽的力量,化为<魔甄宓>.',
            nanhuaxianrenhyym: '人物关系:<br><br>&emsp;&emsp;白泽(恩师,已故)<br><br>爱好:云游、吃糖、随机占卜<br><br>&emsp;&emsp;来历神秘,居于不周山之上,悬圃堂的仙人.因成仙后仍不时隐藏身份远游,故在民间留下许多传说.<br><br>&emsp;&emsp;他自幼与神灵结缘,被妖兽所抚养,生性豁达,爱好自由,又因命运的嘲弄,机缘巧合下成为人间的观测者和记录者.虽并非其本愿,可人界纷争与平息的背后,均有他引导的身影.作为仙人,他拥有悠长的寿命,以及驭使自然的灵力,实力强大.在预感崔尤借妖兽往事要捣毁桃源村时,引导天命小武将成为天命兽与人的联结点.',
            pangdehyym: '人物关系:<br><br>&emsp;&emsp;曹操(主公)<br>&emsp;&emsp;乐进(朋友)<br><br>爱好:下棋,习武<br><br>&emsp;&emsp;字令明,别号<白马将军>曾是马腾部下,立下赫赫战功.马腾去世后,与马超不合,投奔魏国.<br><br>&emsp;&emsp;庞德刚加入魏阵营时,适逢马超投蜀,他被误以为蜀国派来的间谍,深受排挤.曹操秉持<疑人不用,用人不疑>的原则重用他,庞德深受感动,多次授命叱敌,逐渐获得众人信任.<br>&emsp;&emsp;庞德为人诚实,从不掩饰自己的想法,曹操很欣赏他.魏蜀开战前夕,魏国继承人之争浮出水面.他受曹操指示,率领后手武装部队,在洛水以静待变.不料庞德惨遭副将背叛,幸得小武将与乐进及时搭救才脱离险境.现庞德暂时跟随鲁肃,在冥界交界地进行行者修行.',
            pangtonghyym: '人物关系:<br><br>&emsp;&emsp;诸葛亮(师兄)<br>&emsp;&emsp;刘备(主公)<br><br>爱好:读书,苦修,做手工<br><br>&emsp;&emsp;字士元,号凤雏,出身寒微,与卧龙诸寓亮并称蜀汉两翼.<br><br>&emsp;&emsp;庞统生来样貌异于常人,但他认为学识才是人立身之本,遂早早寻访大陆名家,拜入水镜先生门下.后乱世渐起,他见学识凡的谋士被有野心的军阀驭便,毁坏民生福祉,对此十分痛恨.遂与同门师兄诸葛亮约定要成为<为万民谋福祉>的谋士.诸墓亮为呵护这位师弟的心性,用星盘作诱饵,用赌约设计让其在雪域等待天命之人的到来,并赠予其<拂霜>原石,助其打磨心性,由此庞统在雪域避世十年,琢磨出<地灵吟咏>之术.二人因北伐一事闹翻,后在天命小武将入下,庞统了解师兄对自己的爱护,决定相信师兄的决定.',
            shengguanyuhyym: '人物关系:<br><br>&emsp;&emsp;关凤(女儿)<br>&emsp;&emsp;关平、关兴(儿子)<br><br>爱好:做饭,阅读<春秋>,书法<br><br>&emsp;&emsp;不皈依神祇,不附会腐怪,这是纯粹以<人之意志>抵达的破格姿态.这是武者关羽在命定的轨迹上奏响的礼赞.<br><br>&emsp;&emsp;关羽征战沙场多年,受煞气侵染,战斗时气血狂暴、锐不可当,亦使关羽心神不宁,杂念丛生.此乃天道对煞气入体者的制约,人之命轨将因煞气影响,容易招致不遂.<br>&emsp;&emsp;荆州之战前夕,关羽心魔作祟,无法作正常战备.幸得魔关凤、水镜先生与小武将的帮助,暂时封印心魔.在知晓既定轨迹,此战局不利,命途恐将尽下,关羽一面令蜀兵投降以护众,另一面独自挑战吴兵,守护武者骄傲.最终,他战胜死亡的恐惧,于战斗中悟道,突破心魔,置之死地而后生,完成天道之下的破格.',
            shenhuatuohyym: '人物关系:<br><br>&emsp;&emsp;吴普(徒弟)<br>&emsp;&emsp;黄龄(徒孙)<br><br>爱好:解剖、找人试药<br><br>&emsp;&emsp;华佗获得<甘木之种>后的神化姿态.<br><br>&emsp;&emsp;华佗曾为拯救战火中的人,寻求<长生不死>之法.他习得<玄灵解脉术>,意图算夺<不死甘木>的力量,却差点酿制大祸.后其对生死明悟,以有限度的谦卑对待人世,以<医师>身份重新踏上的旅途.<br>&emsp;&emsp;<悬圃>上<不死甘木>复苏,危机重重.华佗受南华仙人之邀登临悬圃解决危机.面对<长生不死>力量的诱惑,还有求索长生而异化的修士,他坚决如初,剔除甘木灵力,并促成甘木自毁,重新进入生命的生长更替.灵木感谢他的成全,轮回<甘木之种>落在他的心.在南华仙人提醒下,华佗明了自己的命途.',
            shenliubeihyym: '人物关系:<br><br>&emsp;&emsp;关羽、张飞(兄弟)<br>&emsp;&emsp;刘禅(儿子)<br><br>爱好:冥想,逗弄白凤<br><br>&emsp;&emsp;于<山河社稷图>中取得心境突破的武将,汉中白帝刘备的神化发展,仁爱而自私的君王.<br>&emsp;&emsp;三国鼎立,神州大陆迎来久违的和平刘备经营巴蜀一带,一边与吴国交好,另一边抵御魏国在小动作,谋求北伐与一统大陆的时机.然而戾气肆意和战鬼的暴动打破了刘备的规划.导致统一计划搁置.<br>&emsp;&emsp;戾气始终无法断绝,而随着时间推移汉室的号召力不断下降.刘备在纠结中,试图冒险进行北伐.为了获得政治支持,他决定搜集象征汉王朝大一统的<山河社稷图>.在小武将帮助下,画卷修复完毕,刘备获得汉高祖曾遗留在其中的讯息.他在与高祖的对话中获得领悟,获得白凤认可,成为神刘备.',
            shensunquanhyym: '人物关系:<br><br>&emsp;&emsp;孙氏兄妹(亲人)<br>&emsp;&emsp;步练师(王妃)<br><br>爱好:清洗<br><br>&emsp;&emsp;于<轮回莲台>回溯中获得突破的武将,孙权的神化发展,清洗一切错误的君主.<br><br>&emsp;&emsp;孙权在吴王宫驱逐步练师一事后心灰意冷,纵情于声色犬马之中,罢免周瑜,任用战鬼韩当,使吴国朝野内外乌烟瘴气,而他似闻所未闻.实则他一直怨恨当初无力,暗中垫伏观察,一朝清洗朝野.<br>&emsp;&emsp;作为被迫承担主君职责的武将,孙权始终怀疑自己的能力,而未能保护爱人步练师一事成为压垮骆驼的最后一根稻章.在坚信自己担任君主对东吴是一种错误情况下,他一边寄希望于莲台力量回溯过去,以期修改孙策的决定.最终在莲台试炼中与孙策解开心结,顿悟获得刹那莲心的力量.',
            shenzhaoyunhyym: '人物关系:<br><br>&emsp;&emsp;无<br><br>爱好:无<br><br>&emsp;&emsp;继承青釭剑<断绝>之意的武将,常胜将军赵云的神化发展,自我牺牲的战士.<br><br>&emsp;&emsp;覆渊潭事件中,他差点溺于杀戮之中,在见证一系列的人间苦难及爱人牺牲后,他最终割舍自我,放弃喜恶,全身心利用自己去拯救他人.<br>&emsp;&emsp;神赵云在割让自己生命力的同时,同时斩断与马云禄的羁绊.他选择接纳一切生灵残留于世的怒火、怨恨和不满,化为已身的力量,最终在战斗中释放,达成实质意义对怨灵的超度.但这种战斗方式会消耗赵云的情绪与记忆,他最终也失去了自己的生活.',
            shenzhugelianghyym: '人物关系:<br><br>&emsp;&emsp;刘备(主公)<br>&emsp;&emsp;黄月英(妻子)<br><br>爱好:观星相,与各国武将通信<br><br>&emsp;&emsp;被爱戴的民众加冕神格,凭借<民塑金身>踏上登神之路的人.此乃登神的诸葛亮暂无法舍去肉身,留在人间的姿存.<br><br>&emsp;&emsp;自幼拥有预测未来的能力,但代价是他的生命力.其拜水镜先生为师后,水镜封印他的能力,他却于封印前窥探到戾气横行乱世即将来临.<br>&emsp;&emsp;虽贵为蜀国重臣,然为解决戾气,诸葛亮不惜冒风险秘密结社,组建战鬼猎人联盟.为使能让桃源村变为戾气净化器的神造法宝——<五色五方旗>现世,不惜以自污之罪,欲让自己成为旗帜现世的<祭首者>.在被小武将阻拦后真相大白,其在民间民望瞬间达到顶峰.民众为其加冕,塑得金身,成为神诸葛亮.',
            shuijingxianshenghyym: '人物关系:<br><br>&emsp;&emsp;南华仙人(半师)<br>&emsp;&emsp;诸葛亮,庞统(徒弟)<br><br>爱好:耕种,记录徒弟成长日常<br><br>&emsp;&emsp;别号<水镜>,化名为<司马徽>在俗世游走的仙人.他不以仙人自居,旁人敬称其<先生>即可.他也是<卧龙>与<凤雏>两位谋士的老师.<br><br>&emsp;&emsp;来历神秘,管理仙人的悬圃堂仅记载其曾为儒生,后为救世攀登不周山.虽为仙人,<水镜>却并不专注于清心修行.他徘徊人间游历多年,并多次不顾禁制试图以各种迁回的方式干预世俗,为此他的身体饱受禁制的侵蚀.<br>&emsp;&emsp;面对乱世征伐,与<天命兽>苏醒导致各区域妖兽活跃化,水镜也暗自下场,以<福宝>作引,操作出<公平竞技场>,平抑人类各方与人兽之间的实力差异.',
            simazhao: '人物关系:<br><br>&emsp;&emsp;司马懿(养父)<br>&emsp;&emsp;司马师(兄长)<br><br>爱好:炼制火药,逃课<br><br>&emsp;&emsp;出身于河内司马世家,权臣司马懿的次子.万松书院的不良少年,火药狂人,前任书院长之徒.<br><br>&emsp;&emsp;司马昭与司马师本系司马氏无名旁支,因战乱失亲,二人被司马懿收养.奉行独身信条的司马懿感念二子存,使其退避婚姻,专注仕途,故对二人厚待非常.如此,司马昭得以培养其炼制火药的昂贵爱好.<br>&emsp;&emsp;司马懿虽收养二人,然专心政务,乃无情的政治机器,不曾履父职.兄弟二人因之在氏族中备受严苛的审视.在高压环境与养父忽视下,司马昭日渐特立独行,叛逆非常.在他敬重的前任书院长因政斗辞职后,司马昭试图在开学季以激进的方式展开<报复>.',
            suncehyym: '人物关系:<br><br>&emsp;&emsp;孙氏兄妹(亲人)<br>&emsp;&emsp;大乔(爱人)<br>&emsp;&emsp;孙茹(女儿)<br><br>爱好:战斗,下棋,听雪<br><br>&emsp;&emsp;字伯符,江东前任主君,孙坚之子,孙权与孙尚香的兄长.<br><br>&emsp;&emsp;孙坚因寻找传国玉玺下落不明后,身为长字的孙策挑起孙家大梁,为躲避仇家曾多次搬家.后与周瑜结交为义兄弟,迁居舒城.孙策英武非凡,以少龄之躯起兵.二人一文一武,驰骋江东,奠定了东吴帝国的版图.孙策为人豁达开朗,知人善任,东吴的虎臣与谋士很多也是孙策时期收入的.<br>&emsp;&emsp;因一统江东过程中曾采用激进手段,后续遭到暗杀.孙策决定假死,传位给孙权好让政权平稳下来.他亲自在病床前为孙权加冠,让他继承祖辈的<红莲英铠>.最后加入战鬼猎人联盟,以另一种方式拯救天下.',
            sunquanhyym: '人物关系:<br><br>&emsp;&emsp;孙氏兄妹(亲人)<br>&emsp;&emsp;步练师(王妃)<br><br>爱好:喝酒,射虎,听阳春白雪<br><br>&emsp;&emsp;字仲谋,吴国王者,孙坚之子,孙策之弟,孙尚香的兄长.<br><br>&emsp;&emsp;汉末军阀混战之际,大将孙坚曾入冥界探寻传国玉玺,后不知所踪.孤儿寡母的孙家在乱世颠沛流离,四处别居,养成孙权谨小慎微的性格.<br>&emsp;&emsp;孙策一统江东后,因曾对当地士族采取激进的手段,对称王亦无兴趣,便假死让位给孙权,加入战鬼猎人联盟.孙权对父兄的选择十分介怀,不过最终还是尊重二人.在张昭与周瑜帮助下,他先后通过两次联姻巩固与士族关系,并通过赤壁力拒曹操奠定个人权威.步练师被逐一事后,因自责自身的无能无力,纵情于酒色之中,导致吴国内外交困.',
            sunruhyym: '人物关系:<br><br>&emsp;&emsp;陆逊(爱人)<br>&emsp;&emsp;孙策(父亲)、大乔(母亲)<br><br>爱好:习武,乔装打扮<br><br>&emsp;&emsp;东吴郡主,孙策与大乔之女.<br><br>&emsp;&emsp;因父亲孙策假死出走东吴,孙茹自幼由叔叔孙权与吴国太后吴夫人抚养长大.为缓和吴国王室与本土士族的矛盾,孙权为孙茹聘请张昭为师,同时委派陆逊暗中保护她.后孙茹与陆逊暗生情愫.孙茹外在刁蛮叛逆,可由于自幼遭父母抛下,她的内心时常缺乏安全感.面对陆逊应主君要求,必须远离自己而执行的的任务,孙茹一度很不理解,并十分埋怨孙权.随着时间流逝,以及自身阅历增长,她体谅了少年与长辈的不易,并决定在二人重聚之前,去江湖进行一番历练.',
            sunshangxianghyym: '人物关系:<br><br>&emsp;&emsp;刘备(丈夫)<br>&emsp;&emsp;孙策、孙权(兄长)<br><br>爱好:射箭,剑舞<br><br>&emsp;&emsp;名尚香,孙坚之女,孙策与孙权同胞妹妹,原吴国公主,自赤壁一战后嫁与刘备为妻.<br><br>&emsp;&emsp;尚香刚出生时,孙坚下落不明.时有孙家仇敌趁机打击,其母吴夫人躲避时,担心刚醒来的尚香哭闹,紧勒尚香的脖颈.幸得孙策骁勇,制止恶徒后及时回归,救下尚香.<br>&emsp;&emsp;孙策受伤假死后,不知情的尚香意志一度十分消沉.曹魏南下时,尚香为守护故土,在孙权身边辅佐.她对当时主动提出联盟的刘备集团颇有好感.故,赤壁一战后,面对孙权的请求,尚香作为吴蜀联盟之证,嫁与刘备为妻.虽为联姻,但幸运的是,尚香与刘备一见钟情,二人感情和睦.',
            taishicihyym: '人物关系:<br><br>&emsp;&emsp;孙策(朋友)<br>&emsp;&emsp;周瑜(朋友)<br><br>爱好:练武,听家长里短<br><br>&emsp;&emsp;孙吴大将,官至建昌都尉,也是孙策与周瑜信任的朋友.<br><br>&emsp;&emsp;原为刘繇部下,后被孙策收降,自此太史慈为孙氏大将,助其扫荡江东.后孙策不恋慕权势,加入战鬼猎人联盟,将东吴事务交给孙权.孙权想要把管理南方的要务委托给他.但太史慈担心孙策安危,决定陪伴孙策左右,也一同加入战鬼猎人联盟,为天下苍生效力.',
            tuicaoanghyym: '人物关系:<br><br>&emsp;&emsp;曹操(父亲)<br>&emsp;&emsp;曹丕、曹植(弟弟)<br><br>爱好:陶笛、带娃(兄弟姊妹)<br><br>&emsp;&emsp;曹昂吞噬上古巨兽<万古毒蝎>力量后蜕变的姿态.<br><br>&emsp;&emsp;宛城事变时,重伤的曹昂意外落入<万古毒蝎>的墓穴.他主动取尸骸残存的毒素麻痹神经,剔骨疗伤.他获得驭蝎之能,却也令其身体饱受跗骨之毒的苦.<br>&emsp;&emsp;上古时,<万古毒蝎>会在作战中释放神经性麻醉毒素,也是巨兽对猎物的标记.纵使战士作战中侥幸逃脱,此后战士也需定期承受<跗骨之毒>的折磨.最终他们不得不重返故地与毒蝎决一死战,直到一方吞噬另一方.最后一只万古毒蝎在一千年前死去,曹昂为摆脱过往的伤痛,利用<青莲宝色旗>的<修复>特性,奇袭广陵,布下一个战争局.最终,曹昂吞噬巨蝎的力量.',
            wangyuanjihyym: '人物关系:<br><br>&emsp;&emsp;王朗(祖父)<br>&emsp;&emsp;司马昭(竹马)<br><br>爱好:调香,刺绣<br><br>&emsp;&emsp;魏国司徒王朗孙女,天刀王越唯一女弟子,曹丕的师妹.<br><br>&emsp;&emsp;出身于世家,王司徒膝下唯一的孙女.元姬自幼父母亡于战乱,由祖父王朗王司徒抚养长大.她聪慧过人,八岁即可口诵诗文,小小年纪即打理家什.元姬礼仪甚佳,处事周全,经常在官场之下帮刚直的祖父王朗缓解与同僚的关系被王朗称为使王家兴盛的希望.<br>&emsp;&emsp;武运会举办前,魏王本想授权德高望重的王司徒主持赛事,不料司徒病重.为了祖父,元姬毅然决然接下魏国主办武运会的事宜.她顶着巨大的异议与歧视,处事公正,解决赛事出现的事端获得众人的认可.',
            xiahuangyueying: '人物关系:<br><br>&emsp;&emsp;诸葛亮(丈夫)<br>&emsp;&emsp;张郃(同事)<br><br>爱好:日光浴,观星,酿酒<br><br>&emsp;&emsp;战鬼猎人联盟先锋调查员,诸葛亮第一助手,本身是三国名士黄承彦之女.枪之祖——<惊夜>的新主人,获得甜品岛土地权能的代行者.<br><br>&emsp;&emsp;自身是对<探索><未知>、不可视之物>抱有可怕兴趣的人物.冒险老手,她深知只有获取足够的信息才能作出正确的判断.为此,她能屏蔽一切未知的孙吓,一路问前.<br>&emsp;&emsp;甜品岛翻转后,月英与小武将深入冰封遗迹寻求线索.在情报不足,面对<士地>的恐吓下,她不顾各种道德压力,毅然拔起长枪,成为千百年来第二个接触<惊夜枪>的人类.她的胆识获得认可,获得当地土地的权能,成为了小岛土地的代行人,暂时蜕变为夏·黄月英.',
            xvshenghyym: '人物关系:<br><br>&emsp;&emsp;孙权(主公)<br><br>爱好:擦拭枪支<br><br>&emsp;&emsp;字文向,机械国的王储,现受孙权邀请,暂时加入其麾下行事.<br><br>&emsp;&emsp;来自禾与铁的国度,由蜉树雕刻而成的人偶——木伽拥有不输于人类的灵智,他们支撑起整个国度的生产.后囿于灵木枝蔓有限和冶铁技术的兴起,铁伽逐渐替代了木伽的存在,而徐家便是这一更替中掌握国家权利的家族.除去这些,机械国不乏禁忌的研究实验.<br>&emsp;&emsp;作为机械国的王储,徐盛自信张扬,对外界十分好奇.本准备前往神州大陆考察新的矿产产地,因不愿受到束缚而自行逃离,意外闯入三国征战当中.由于吴王诚恳的邀请,徐盛暂时加入吴王麾下.',
            yangxiuhyym: '人物关系:<br><br>&emsp;&emsp;曹植(主公)<br>&emsp;&emsp;草草马(玩伴)<br><br>爱好:打扫,书画,猜灯谜<br><br>&emsp;&emsp;字德祖,出身于弘农杨氏,曾为曹丞相主簿,总览内外,被同僚戏称曹府<大管家>.现为曹植的首席幕僚.<br><br>&emsp;&emsp;杨修本应以男子之身降世,却因时空扰乱以女性身份出世,其命途也随之更改.虽为女子,然她恭敬好学,博学多才,曹操破格录用她为丞相府主簿,府中机密均过杨修之手.杨修经此得以对曹操揣摩如意.<br>&emsp;&emsp;杨修自恃其才,然日常因以女子之身涉足政治多遭诋毁与攻击.多情性敏的曹植体察其不易,总竭力在各种场合维护好友并开导她.杨修有感于曹植的人格魅力,入主曹植成为核心幕僚.她力推曹植成为继承人,也希望自己有朝一日能更好施展自己的政治抱负.',
            yaolvlingqihyym: '人物关系:<br><br>&emsp;&emsp;王元姬(笔友)<br>&emsp;&emsp;于吉(师傅)<br><br>爱好:施展拳脚,吃桃子<br><br>&emsp;&emsp;吕布与发妻严氏之女,于吉之徒.历经冒险,有所感悟,吃下<韶华果>后的成长之态.<br><br>&emsp;&emsp;年幼的吕玲绮成为战鬼后,身体一直保在幼童状态,不再成长.随着时间的流逝,吕玲绮渴望成长,她多方寻求长大的办法无果.<br>&emsp;&emsp;有觊觎<烂柯山>每百年才结一颗的永葆青春<韶华果>的巫婆,她以<韶华>会帮助吕玲绮长大为由,诱骗吕玲绮帮她入山.然在找到<韶华果>母树洞六后,吕玲绮不论服用多少韶华果,外表依旧没有改变.历经一番波折后,吕玲绮识破巫婆背后骗局,意识到真正的成长在于心灵的成熟.正当她放下执念,她吃下最后一颗<韶华果>时,戏剧性长大成人.',
            yuanshaohyym: '人物关系:<br><br>&emsp;&emsp;曹操(损友)<br>&emsp;&emsp;张角(盟发)<br><br>爱好:舞剑,读书,品茶<br><br>&emsp;&emsp;出身于汝南袁氏的世家子弟,少有贤名,天资过人.袁氏四世三公,人才辈出,在一众世家中威望极高.<br><br>&emsp;&emsp;东汉末年,宦官乱权,袁绍暗中结交党人和江湖义士,筹备反对宦官的活动.<br>&emsp;&emsp;灵帝逝后,社稷大乱,他多次不顾自身安危,以自身及家世名号汇聚各路英豪,试图进行干预.因其雄厚的世资,才华与魄力,四海莫不争相投之,一时成为北方最强霸主.<br>&emsp;&emsp;为人大方阔气,因生平之故,很是讲究体面,实则内心暗自计较胜负得失.曹操崛起后,多次搓败他向南进取计划,让其进退不能,心有积郁.最后他因御下不力兵败官渡,大受刺激,分裂出多重人格.',
            yuebulianshihyym: '人物关系:<br><br>&emsp;&emsp;神孙权(丈夫)<br><br>爱好:奏箜篌<br><br>&emsp;&emsp;吴国王妃,神孙权之妻,获得月宫土地权能的代行者.<br><br>&emsp;&emsp;平复心灵,疗愈伤痛的奏者.这是其摒弃旧尘,超脱俗世,选择庇护更广阔长久的自然与众生的姿态.<br>&emsp;&emsp;于吉为找到藏在玉兔体内的长生不老药,让战鬼步练师操纵魔音,令玉兔自相残杀,一度在月宫施行恐怖统治.步练师表面顺从,然暗中庇护玉兔一族.在举办<月升圆满>仪式,战鬼方即将取得象征月宫最高权能的<不阙>琴时.战鬼步练师反水将琴交给玉兔黄龄,并为保护玉兔黄龄受伤濒死.此善良之举获得初代月宫之主认可,她将力量暂借给步练师.步练师因此蜕变为<月·步练师>.',
            zhangbaohyym: '人物关系:<br><br>&emsp;&emsp;张角(兄弟)<br>&emsp;&emsp;张梁(兄弟)<br><br>爱好:喝酒,打架<br><br>&emsp;&emsp;农民起义军领袖之一,张角的胞弟,自称<地公将军><br><br>&emsp;&emsp;年幼时因高烧未及时救治,落下病根.做事一根筋,从不多想.张角带领农民起义后,张宝紧随其后,成为张角最信赖的副手.他不清楚张角的自的,但认可张角建立一个人人有饭吃,人人有衣穿的世界的理想.<br>&emsp;&emsp;心性单纯,敢想敢干,乃黄巾军的战场前锋,具有屡战屡败,仍不懈屡败屡战的美德.张角先天命之人一步进入桃源村后,张宝为保护张角在村口守门.这大概就是张宝是小武将第一挑战者的原因吧.',
            zhangchunhuahyym: '人物关系:<br><br>&emsp;&emsp;小武将(朋友)<br><br>爱好:修行,好友赠的雪糕<br><br>&emsp;&emsp;曹魏粟邑县令张汪与河内望族山氏之女.本出身寒微,但自小因母亲所致家教严格,外表端得一派娴静优雅,实质天然呆.<br><br>&emsp;&emsp;师从嵩山佛陀跋陀罗(少林第一代主持)的师叔,乃少林唯一女弟子,一手少林拳法闻名江湖.<br>&emsp;&emsp;专注修行的少女,心性纯净,有时会忽略一般常识,后知后觉发现十分容易害羞.因师父临终前希望寻找海那边的试炼小岛,春华一度误入七夕桃源会场.<br>&emsp;&emsp;后因帮助浮光鲸被带往梦之甜品岛,在凝霜足迹历练和与小武将共处中有所感悟.即将回归时,她成功驯服避水珠,与小武将一起回到桃源村.',
            zhangjiaohyym: '人物关系:<br><br>&emsp;&emsp;张宝(兄弟)<br>&emsp;&emsp;张梁(兄弟)<br><br>爱好:修撰经文,打听小道消息<br><br>&emsp;&emsp;河北充州人,草根出身的农民起义军领油,太平道创始人,自称天公将军,也是南华仙教的教主.<br><br>&emsp;&emsp;出生时曾出现灾祸异象,相传为灾星转世,自幼备受欺凌.后于梦中得<南华仙人>传授,领悟<太平经>要义,自学符篆救治民众,收拢信徒,发动了黄巾起义.<br>&emsp;&emsp;看似嘻嘻哈哈,实则内心颇有谋划.为否定汉主朝的法统,他曾私下调查汉室密辛——白泽事变,并先小武将一步抵达桃源村.面对天命之人,他一路跟随,时常以兜售小道消息的形象出现在小武将身边.',
            zhangzhaohyym: '人物关系:<br><br>&emsp;&emsp;王朗(至交)<br>&emsp;&emsp;孙权(主公)<br><br>爱好:喝茶,养生<br><br>&emsp;&emsp;字子布,出身于节香门第世家暴季相,江东本士士族之表率,孙权之师.家族本在北方,因战乱南下江东.张昭出生时适逢中原动乱,历经亲人死亡一事后,沾染死亡气息工,周身终日被乌鸦萦绕,被视为导类.张昭年轻时既身卑又迷茫,后爱王司徒引导开语,共心造福一方.<br>&emsp;&emsp;他曾被战鬼追杀,又被孙策搭救,孙策性格为人如太阳股耀眼,逐决定侍幸其为主,辅佐孙策开拓江东基业.后孙策假死,托付江东未来给孙权,张昭以影响力平衡士族与吴国王室的关系,一路扶持孙权上马,稳定政局.张昭经历两朝,贵为吴国重臣,也是许多吴国武将信赖的老师.',
            zhaoyunhyym: '人物关系:<br><br>&emsp;&emsp;童渊(师父)<br>&emsp;&emsp;马云禄(恋人)<br><br>爱好:练武、下棋<br><br>&emsp;&emsp;出生于常山的武将,蜀国名将,备受蜀王刘备和诸葛丞相的器重.由于根骨天赋极佳,他受到童渊青睐,收作入室弟子,后成长为护佑一方的人物.<br><br>&emsp;&emsp;相当可靠的将士,使命必达.长坂坡之战中,他斩杀替曹操抱剑的夏侯恩,夺过青红剑,七进七出,怀抱幼主,一骑当千闯过尸山血海.可处在乱世当中,他累积的功勋,也伴随着无数人的血泪,即便意志再坚定的武者也不免陷入迷茫.',
            zhenfuhyym: '人物关系:<br><br>&emsp;&emsp;曹植(爱人)<br>&emsp;&emsp;曹丕(名义夫君)<br><br>爱好:唱歌,看曹植的诗赋<br><br>&emsp;&emsp;出身自官宦世家,汉太保甄邯的后代,父亲是上蔡令甄逸,现已拜于吉为师,成为战鬼.<br><br>&emsp;&emsp;甄宓出生时方圆百里的玫瑰一夜之间变为紫色,散发浓郁的异香,使人陶碎.世人担忧其为<妖姬>转世.<br>&emsp;&emsp;她长大后知书达理,智慧过人,芳名远扬.袁绍曾为次子向甄家下聘求娶.甄宓看不上袁绍一家徒有其表,大胆逃婚.她在洛水隐居,与当时用假名的曹植相恋.后造化弄人,袁绍兵败后,甄宓一家被曹操俘获.曹操却将之许配给曹丕.三人的纠葛爱恨让甄宓大受打击,世俗还赋予她离间兄弟的骂名.为报复曹家,她拜于吉为师,成为战鬼.',
            zhugekehyym: '人物关系:<br><br>&emsp;&emsp;诸葛瑾(父亲)<br>&emsp;&emsp;诸葛亮(叔叔)<br><br>爱好:游历,喜好颇杂,尤爱志怪小说<br><br>&emsp;&emsp;出身于琅琊诸葛氏,诸葛瑾的儿子,诸葛亮的子侄.<br><br>&emsp;&emsp;父子二人在东吴为吴国主君孙权效命,由于诸葛恪的叔伯在各国均担任官职,诸葛悟和各国将领均有交往.诸葛恪心胸开阔,不单纯以一国一势作为交友标准.<br>&emsp;&emsp;琅琊诸葛氏颇具潜力的后生,博闻强识,学识丰富,精研阵法与巫术,可惜杂学涉猎广而专精不足,诸葛对此也很苦恼.为遍览河山,他经常会主动争取外务,是故诸葛悟也熟知大陆各风土人情.为小武将搜寻失遗法宝中,提供了不少帮助.',
            zhugelianghyym: '人物关系:<br><br>&emsp;&emsp;刘备(主公)<br>&emsp;&emsp;黄月英(妻子)<br><br>爱好:吃牛肉,对牛弹琴,唱葬歌<br><br>&emsp;&emsp;字孔明,罗蜀王账下第一谋士,有<卧龙>美名.蜀国永相,战鬼猎人联盟盟主,<水镜先生>的弟子.<br><br>&emsp;&emsp;出身于琅琊诸葛氏,自幼天赋异禀,聪慧过人.少年时拜仙人<水镜先生>为师,因其有不测之智,被师长与同窗赐予<卧龙>之号.学有所成时,因叔父去世而暂时隐居南阳.后被刘备<三顾茅庐>请出.<br>&emsp;&emsp;诸葛亮跟随刘备,亲自为其<复兴汉室>作战略规划,与刘备君臣相得.后其主导与东吴缔结联盟,在赤壁一战中遏制曹操南下阴谋,并帮助刘备入蜀,自此奠定<三分天下>之局.他的另一身份是<战鬼猎人联盟>的领袖,在天命之人未来临前,联合各国武将阻止戾气蔓延.',
            zuocihyym: '人物关系:<br><br>&emsp;&emsp;南华仙人<br>&emsp;&emsp;水镜先生<br><br>爱好:宴饮、烹饪、苦味食物<br><br>&emsp;&emsp;号乌角先生,字元放,暂未完全舍去姓名的仙人.位阶地仙,金丹派创始人.现为不周山<悬圃堂>代理堂主.<br><br>&emsp;&emsp;<悬圃堂>年纪最小的仙人,天赋异禀,仅两百余年即修炼至地仙.道家七神通左慈已掌握有三,颇受南华仙人器重.不过左慈因出世时间较短,较之其他仙人,更留念尘世.<br>&emsp;&emsp;本性嗜乐,沉迷凡间宴饮,好美食.三国宴饮场均流传有左慈的传说.然,前些时日,天命兽再现,堂主南华仙人需紧急下凡处理.恰逢左慈来悬圃堂点卯作答,他由此不幸被南华仙人托付值守之职,成为代理堂主.外出无望下,左慈郁闷坐守悬圃堂中照料花草,决定开炉炼丹,向周边侍奉的草药展开<报复>.',
            hyym_huanyiyouming: '关注b站 -幻翼幽冥- 喵,关注b站 -幻翼幽冥- 谢谢喵~',
            xiaoqiaoyoulinggongzhu: '&emsp;&emsp;万圣节夜晚,小乔兴奋地戴上了俏皮的尖顶小丑帽,化身成活泼又淘气的幽灵公主.她一手紧握心爱的南瓜锤,一手拉着公瑾哥哥,蹦蹦跳跳地闯入黑暗南瓜城,仿佛这座城是她的游乐场.南瓜灯的微光洒在她的小脸上,映出闪亮的大眼睛和红扑扑的脸颊.小乔挥舞着南瓜锤,调皮地向每个暗影挥去,仿佛在对隐藏的<鬼怪>发起挑战.<br><br>&emsp;&emsp;<公瑾哥哥,我们去捉鬼吧!>她仰起小脸,水灵灵的眼睛充满期待,仿佛这个夜晚的每一刻都是冒险.周瑜望着眼前这个爱闹的小丫头,无奈又宠溺地笑了笑.他知道自己本该保持风度,但面对她的淘气模样,他甘愿放下身段,默默陪伴在她身旁.<br><br>&emsp;&emsp;一路上,小乔的笑声像铃铛般清脆回响,给这神秘的平安夜增添了一丝温馨.她在周瑜身旁蹦蹦跳跳,左顾右盼地寻找<鬼怪>,而他始终温柔守护,心中满是宠爱,陪着她度过这奇幻的夜晚.',
        },
        characterTitle: {
            //武将称号
            zhangzhaoyushuzhilan: '#r玉树芝兰·张昭',
            xiaoqiaoyoulinggongzhu: '<span style="color: yellow">幽灵公主·小乔</span>',
        },
        characterSort: {
            //角色分类
            tyhm: {
                cloud_Gphone: ['caoanghyym', 'caojiehyym', 'caishenhyym', 'taishicihyym', 'suncehyym', 'liushanhyym', 'moguanfenghyym', 'bulianshihyym', 'caiwenjihyym', 'caocaohyym', 'caopihyym', 'caorenhyym', 'caozhihyym', 'caocaomahyym', 'chengonghyym', 'chengpuhyym', 'daqiaohyym', 'diaochanhyym', 'dongzhuohyym', 'fazhenghyym', 'fubaohyym', 'guanfenghyym', 'guanpinghyym', 'guanxinghyym', 'guanyuhyym', 'guohuaihyym', 'guonvwanghyym', 'guonvwangyujianhyym', 'tiangouhyym', 'handanghyym', 'huamanhyym', 'huatuohyym', 'huaxionghyym', 'huanglinghyym', 'huanggaihyym', 'huangyueyinghyym', 'huangzhonghyym', 'huodouhyym', 'jiangweihyym', 'jinmachaohyym', 'yuejinhyym', 'lingjvhyym', 'liubeihyym', 'liuxiehyym', 'lusuhyym', 'luxunhyym', 'lvlingqihyym', 'mayunluhyym', 'menghuohyym', 'mocaocaohyym', 'moyanlianghyym', 'mozhangjiaohyym', 'nanhuaxianrenhyym', 'pangdehyym', 'pangtonghyym', 'shenhuatuohyym', 'shenzhaoyunhyym', 'shenzhouyuhyym', 'sunjianhyym', 'sunquanhyym', 'sunruhyym', 'sunshangxianghyym', 'wangyihyym', 'weiyanhyym', 'wenchouhyym', 'xixingcaihyym', 'xiahoudunhyym', 'xiahouyuanhyym', 'xiaoqiaohyym', 'xingcaihyym', 'xiuluomachaohyym', 'xvhuanghyym', 'xvshenghyym', 'xunyuhyym', 'yanlianghyym', 'yangxiuhyym', 'yaolvlingqihyym', 'yujihyym', 'yuanshaohyym', 'zhanshenmachaohyym', 'zhangbaohyym', 'zhangbaozihyym', 'zhangfeihyym', 'zhanghehyym', 'zhangjiaohyym', 'zhanglianghyym', 'zhangliaohyym', 'zhangxiuhyym', 'zhangzhaohyym', 'zhaoyunhyym', 'zhenfuhyym', 'zhoutaihyym', 'zhouyuhyym', 'zhugekehyym', 'zhugelianghyym', 'zhuronghyym'],
                cloud_shenbing: ['yuejinshenbing', 'luxunshenbing', 'wangyishenbing', 'zhugekeshenbing', 'sunceshenbing', 'sunshangxiangshenbing', 'zhangzhaoshenbing', 'xvshengshenbing', 'chengongshenbing'],
                cloud_pifu: ['lingjvpifu', 'zhurongpifu', 'zhangbaopifu', 'zhugeliangpifu', 'daqiaopifu', 'xiaoqiaopifu', 'sunrupifu', 'diaochanpifu', 'huangzhongpifu', 'caiwenjipifu', 'nanhuaxianrenpifu', 'liuxiepifu', 'caojiepifu', 'zhangzhaoyushuzhilan'],
                cloud_taoyuancun: ['shenmishangrenhyym', 'chunmaomaohyym', 'tianmingxiaowujiangnan', 'tianmingxiaowujiangnv', 'nanyouling', 'nvyouling'],
                cloud_zhangui: ['bulianshizhangui', 'caopizhangui', 'guanfengzhangui', 'guanpingzhangui', 'handangzhangui', 'huaxiongzhangui', 'lvlingqizhangui', 'menghuozhangui', 'pangdezhangui', 'weiyanzhangui', 'xiahoudunzhangui', 'yanliangzhangui', 'zhangbaozizhangui', 'zhangjiaozhangui', 'zhenfuzhangui', 'zhurongzhangui'],
                cloud_wuhunliezhuan: ['xingcaiaojiaoyujie', 'sunshangxiangbanjuntianya', 'lvlingqichuchukelian', 'xingcaidingzuitieshe', 'caocaomaduduxinshi', 'diaochanguanjiashaonv', 'sunruhunqianmengrao', 'mayunlukuidaojiee', 'zhangfeimingjieguilai', 'liubeiningsibuqv', 'zhouyuqixixianghui', 'guanxingsangxiongzhitong', 'mayunlushaonvxiangshi', 'xiahouyuanshibaoxiongchou', 'sunshangxiangxinrusishui', 'xiaoqiaoyoulinggongzhu', 'yuejinzuishengmengsi'],
                cloud_tianmingshou: ['basheshou', 'chenxitushou', 'gudiaoshou', 'huoqilinshou', 'jiuweifenghushou', 'kuiniushou', 'linglongshou', 'qiannianwugongshou', 'shenaoshou', 'shenlushou', 'tongxinlinglongyushou', 'xingyuekunshou'],
                cloud_shenshou: ['baihushou', 'xuanwushou', 'zhuqveshou', 'qinglongshou', 'mengyanshou', 'taotieshou'],
                cloud_longbing: ['lieyanbawanglong', 'qingxuntudulong', 'biyingtudulong', 'xuanhuangbawanglong'],
                cloud_qiling: ['kebiqiling', 'maocaoyaoqiling', 'hongtaiyangqiling', 'aixinqiling', 'leibaobaoqiling'],
                cloud_xinmotan: ['caopixinmo', 'caishenxinmo', 'dongzhuoxinmo', 'fazhengxinmo', 'moyanliangxinmo', 'moyuanshaoxinmo', 'shenmishangrenxinmo', 'shenzhaoyunxinmo', 'xiahuangyueyingxinmo', 'yujixinmo', 'zhanghexinmo', 'zhangliangxinmo', 'zhaoyunxinmo'],
                cloud_xinmochen: ['caorenxinmo', 'chunmaomaoxinmo', 'guanpingxinmo', 'huaxiongxinmo', 'huanggaixinmo', 'jiangweixinmo', 'machaoxinmo', 'menghuoxinmo', 'mozhangjiaoxinmo', 'pangdexinmo', 'xvhuangxinmo', 'zhoutaixinmo'],
                cloud_xinmochi: ['caiwenjixinmo', 'caoangxinmo', 'caojiexinmo', 'chengpuxinmo', 'diaochanxinmo', 'guanxingxinmo', 'huamanxinmo', 'lingjvxinmo', 'liushanxinmo', 'liuxiexinmo', 'luxunxinmo', 'lvlingqixinmo', 'mayunluxinmo', 'sunruxinmo', 'sunshangxiangxinmo', 'xixingcaixinmo', 'xingcaixinmo', 'xiaoqiaoxinmo', 'xunyuxinmo', 'yangxiuxinmo', 'yuebulianshixinmo', 'zhangjiaoxinmo', 'zhurongxinmo'],
                cloud_xinmoman: ['caozhixinmo', 'caocaomaxinmo', 'fubaoxinmo', 'huangzhongxinmo', 'moguanfengxinmo', 'suncexinmo', 'wangyuanjixinmo', 'weiyanxinmo', 'wenchouxinmo', 'xiahouyuanxinmo', 'xvshengxinmo', 'yanliangxinmo', 'zhugekexinmo'],
                cloud_xinmoyi: ['bulianshixinmo', 'guanfengxinmo', 'guojiaxinmo', 'huodouxinmo', 'pangtongxinmo', 'mozhenfuxinmo', 'shenliubeixinmo', 'shensunquanxinmo', 'shuijingxianshengxinmo', 'sunquanxinmo', 'zhangchunhuaxinmo', 'zhangzhaoxinmo', 'zhenfuxinmo'],
                cloud_xinmozui: ['caocaoxinmo', 'lusuxinmo', 'zhangbaoxinmo', 'zhangbaozixinmo', 'handangxinmo', 'daqiaoxinmo', 'guohuaixinmo', 'chengongxinmo', 'mocaocaoxinmo', 'shenzhouyuxinmo', 'zhangxiuxinmo', 'huatuoxinmo', 'lvbuxinmo', 'guanyuxinmo', 'zhangfeixinmo', 'guonvwangxinmo', 'huangyueyingxinmo', 'yuejinxinmo', 'liubeixinmo', 'sunjianxinmo', 'nanhuaxianrenxinmo', 'taishicixinmo', 'wangyixinmo', 'yuanshaoxinmo', 'xiahoudunxinmo', 'zhouyuxinmo', 'zhugeliangxinmo', 'zhangliaoxinmo'],
                cloud_taling: ['bulianshitaling', 'yuanshaotaling', 'caoangtaling', 'caocaotaling', 'caopitaling', 'caorentaling', 'caozhitaling', 'caocaomataling', 'chengongtaling', 'chengputaling', 'daqiaoxiaoqiaotaling', 'diaochantaling', 'dongzhuotaling', 'fazhengtaling', 'guanfengtaling', 'guanpingguanxingtaling', 'guanyutaling', 'guohuaitaling', 'guonvwangtaling', 'handangtaling', 'huamantaling', 'huatuotaling', 'huaxiongtaling', 'huanggaitaling', 'huangyueyingtaling', 'huodoutaling', 'jiangweitaling', 'liubeitaling', 'liushantaling', 'liuxietaling', 'lusutaling', 'luxuntaling', 'lvlingqitaling', 'mayunlutaling', 'menghuotaling', 'moguanfengtaling', 'moyanliangtaling', 'pangdetaling', 'suncetaling', 'sunshangxiangtaling', 'taishicitaling', 'xixingcaitaling', 'xiahouduntaling', 'xiahouyuantaling', 'xingcaitaling', 'xunyutaling', 'yanliangwenchoutaling', 'yangxiutaling', 'yujitaling', 'zhangbaozitaling', 'zhangbaotaling', 'zhanghetaling', 'zhangxiutaling', 'zhangliaotaling', 'zhaoyuntaling', 'zhurongtaling', 'zhugeketaling', 'zhouyutaling', 'zhoutaitaling', 'zhenfutaling', 'zhangfeitaling', 'zhangjiaotaling', 'zhangzhaotaling', 'sunquantaling', 'wangyitaling', 'sunrutaling', 'sunshangxiangtaling', 'huatuotaling', 'handangtaling', 'chengongtaling', 'daqiaoxiaoqiaotaling', 'zhangbaozitaling', 'zhangfeitaling'],
                cloud_caidan: ['liubeihei', 'taoyuansanying', 'hyym_ceshi', 'hyym_huanyiyouming'],
            },
        },
        characterReplace: {
            //可切换武将
            guonvwanghyym: ['guonvwanghyym', 'guonvwangyujianhyym'],
            huodouhyym: ['huodouhyym', 'tiangouhyym'],
            zhangzhaohyym: ['zhangzhaohyym', 'zhangzhaoyushuzhilan'],
            xiaoqiaohyym: ['xiaoqiaohyym', 'xiaoqiaoyoulinggongzhu'],
        },
        skill: {
            //技能代码
            hyym_tishenmu: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                check(event, player) {
                    if (player.hp > 2 && !player.hasSkill('hyym_sanjiqixveshangxian') && !player.hasSkill('hyym_sanjiqixveshangxianx')) return true;
                    else if (player.hp > 5 && (player.hasSkill('hyym_sanjiqixveshangxian') || player.hasSkill('hyym_sanjiqixveshangxianx'))) return true;
                    else return (player.hp > 1 && (player.hp == player.maxHp || player.hujia == 0)) || (player.hp == 1 && player.hujia == 0 && player.maxHp > 1 && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs'));
                },
                prompt2: '掉1滴血,叠1层甲,摸一张牌,可重复流程',
                content() {
                    'step 0';
                    event.counter = player.maxHp;
                    ('step 1');
                    game.playAudio('../extension/桃源幻梦/audio/技能配音/曹昂', ['hyym_tishenmu1', 'hyym_tishenmu2'].randomGet());
                    player.loseHp();
                    player.changeHujia();
                    player.draw();
                    if (event.counter > 1)
                        player.chooseBool('是否发动【替身木】？', '掉1滴血,叠1层甲,摸一张牌,可重复流程').set('ai', function () {
                            return (player.hp > 1 && (player.hp == player.maxHp || player.hujia == 0)) || (player.hp == 1 && player.hujia == 0 && player.maxHp > 1 && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) || (player.hp > 2 && !player.hasSkill('hyym_sanjiqixveshangxian') && !player.hasSkill('hyym_sanjiqixveshangxianx')) || (player.hp > 5 && (player.hasSkill('hyym_sanjiqixveshangxian') || player.hasSkill('hyym_sanjiqixveshangxianx')));
                        });
                    ('step 2');
                    if (result.bool) {
                        event.counter--;
                        event.goto(1);
                    }
                },
                group: 'hyym_tishenmu_1',
                subSkill: {
                    1: {
                        audio: 'ext:桃源幻梦/audio/技能配音/曹昂:2',
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        filter(event, player) {
                            return player.hujia > 0;
                        },
                        check(event, player) {
                            if (player.maxHp < 4 && (player.hasSkill('hyym_sanjiqixveshangxian') || player.hasSkill('hyym_sanjiqixveshangxianx'))) return true;
                            else if (player.maxHp < 3 && (player.hasSkill('hyym_banlizongzix') || player.hasSkill('hyym_banlizongziy'))) return true;
                            else if (player.maxHp < 2 && (player.hasSkill('hyym_yijiqixveshangxian') || player.hasSkill('hyym_yijiqixveshangxianx'))) return true;
                            else return player.getHandcardLimit() + player.hujia - player.countCards('h') >= 3;
                        },
                        prompt2: '爆任意层甲,摸两倍牌,获得两次暴击',
                        content() {
                            'step 0';
                            if (player.maxHp < 4 && (player.hasSkill('hyym_sanjiqixveshangxian') || player.hasSkill('hyym_sanjiqixveshangxianx'))) var num = player.hujia;
                            else if (player.maxHp < 3 && (player.hasSkill('hyym_banlizongzix') || player.hasSkill('hyym_banlizongziy'))) var num = player.hujia;
                            else if (player.maxHp < 2 && (player.hasSkill('hyym_yijiqixveshangxian') || player.hasSkill('hyym_yijiqixveshangxianx'))) var num = player.hujia;
                            else var num = Math.floor(((player.getHandcardLimit() + player.hujia - player.countCards('h')) * 1) / 3);
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
                            ('step 1');
                            var num = event.map[result.control] || 1;
                            player.changeHujia(-num);
                            player.draw(num * 2);
                            ('step 2');
                            player.addGaintag(result, 'hyym_tishenmu');
                            player.addSkill('hyym_tishenmux');
                            player.storage.hyym_tishenmu_1 = result;
                            player.addTempSkill('hyym_tishenmu_2');
                        },
                        init(player, skill) {
                            if (!player.storage[skill]) player.storage.hyym_tishenmu_1 = [];
                        },
                    },
                    2: {
                        audio: 'ext:桃源幻梦/audio/技能配音/曹昂:2',
                        usable: 2,
                        forced: true,
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter(event, player) {
                            if (!event.cards) return false;
                            var isC = false;
                            if (Array.isArray(event.cards))
                                for (var i of event.cards) {
                                    if (player.storage.hyym_tishenmu_1.includes(i)) isC = true;
                                }
                            return player == _status.currentPhase && isC;
                        },
                        content() {
                            trigger.num++;
                        },
                        onremove(player, skill) {
                            player.storage.hyym_tishenmu_1 = [];
                        },
                    },
                },
            },
            hyym_tishenmux: {
                forced: true,
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    var h = player.getCards('h');
                    for (var i = 0; i < player.countCards('h'); i++) {
                        if (h[i].hasGaintag('hyym_tishenmu')) return true;
                    }
                },
                content() {
                    player.removeSkill('hyym_tishenmux');
                },
                onremove(player) {
                    player.removeGaintag('hyym_tishenmu');
                },
            },
            hyym_houche: {
                trigger: { player: 'changeHujiaAfter' },
                filter(event, player) {
                    return player.maxHp > 1 && !player.hujia;
                },
                prompt2(event, player) {
                    var k;
                    if (player.maxHp < 5) k = player.maxHp - 1;
                    else k = 3;
                    return `减1点体力上限,叠${k}层甲并弃置${k}张牌(不足则全弃)`;
                },
                audio: 'ext:桃源幻梦/audio/技能配音/曹昂:2',
                check(event, player) {
                    var k;
                    if (player.maxHp < 5) k = player.maxHp - 1;
                    else k = 3;
                    if (
                        player.countCards('hs', function (card) {
                            return (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_nverhong' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_fuhuobi');
                        }) > 0 &&
                        player.countCards('he') <= k &&
                        player.hp <= 0
                    )
                        return false;
                    else if (event.getParent('damage').source) {
                        var source = event.getParent('damage').source;
                        return player.isDamaged() || player.maxHp > 2 || (get.attitude(player, source) < 0 && get.damageEffect(source, player, player) > 0 && source.hp == 1 && source.hujia == 0);
                    } else return player.isDamaged() || player.maxHp > 2;
                },
                ai: {
                    maixie: true,
                    maixie_defend: true,
                },
                content() {
                    'step 0';
                    player.loseMaxHp();
                    ('step 1');
                    var kk;
                    if (player.maxHp < 4) kk = player.maxHp;
                    else kk = 3;
                    player.changeHujia(kk);
                    player.chooseToDiscard(Math.min(kk, player.countCards('he')), 'he', true).set('ai', (card) => {
                        return 10 - get.value(card);
                    });
                    player.addSkill('hyym_houchex');
                    player.markSkill('hyym_houchex');
                    player.storage.hyym_houchex++;
                    ('step 2');
                    if (trigger.type == 'damage' && player.hp > 0 && trigger.getParent('damage').source && trigger.getParent('damage').source.isIn() && player.hp > 0) {
                        player.chooseBool('是否再爆1层甲,反弹' + get.translation(trigger.getParent('damage').source) + '1点伤害？').set('ai', () => get.attitude(player, trigger.getParent('damage').source) < 0 && get.damageEffect(trigger.getParent('damage').source, player, player) > 0 && player != trigger.getParent('damage').source);
                    } else event.finish();
                    ('step 3');
                    if (result.bool) {
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/曹昂', ['hyym_houche11', 'hyym_houche12'].randomGet());
                        player.changeHujia(-1);
                        trigger.getParent('damage').source.damage();
                    }
                },
                init(player, skill) {
                    if (!player.storage.hyym_houchex) player.storage.hyym_houchex = 0;
                },
            },
            hyym_houchex: {
                mark: true,
                marktext: '撤',
                intro: {
                    name: '后撤',
                    content(storage) {
                        if (storage > 0) return '手牌上限+' + storage;
                        if (storage < 0) return '手牌上限' + storage;
                        return '手牌上限无变化';
                    },
                },
                mod: {
                    maxHandcard(player, num) {
                        if (typeof player.storage.hyym_houchex == 'number') return num + player.storage.hyym_houchex;
                    },
                },
            },
            hyym_suishending: {
                enable: 'phaseUse',
                audio: 'ext:桃源幻梦/audio/技能配音/曹昂:2',
                init(player, skill) {
                    if (!player.storage.hyym_suishending) player.storage.hyym_suishending = [];
                },
                check(card) {
                    var player = _status.event.player;
                    //手牌数量小等于手牌上限时,不发动
                    // if (player.countCards('h')<= player.getHandcardLimit()) return false;
                    if (
                        !game.hasPlayer((current) => {
                            return get.attitude(player, current) < 0;
                        })
                    )
                        return false;
                    //获取所有手牌
                    var cards = player.getCards('he');
                    //有手牌价值低于8的手牌时才发动

                    //判定 手牌数大于手牌上限 || 有牌的价值低于8 则发动.
                    return player.countCards('he') > player.getHandcardLimit() || cards.filter((card) => get.value(card) < 8).length;
                },
                filter(event, player) {
                    var dings = 0;
                    game.filterPlayer(function (target) {
                        if (!target.getExpansions('hyym_suishending_1').length) return;
                        dings += target.getExpansions('hyym_suishending_1').length;
                    });
                    return player.hujia >= dings && player.countCards('he') && player.hasCard(lib.skill.hyym_suishending.filterCard, 'he');
                },
                filterTarget(card, player, target) {
                    return player != target && !target.hasSkill('hyym_lvdouzongzix');
                },
                filterCard(card, player, target) {
                    let play = _status.event.player;
                    return !play.storage.hyym_suishending.includes(card.suit);
                },
                mark: true,
                marktext: '随',
                intro: {
                    name: '随身钉',
                    content: '本回合已经撒过$花色的钉子',
                },
                //告诉ai优先选择目标条件
                ai2(target) {
                    var player = _status.event.player;
                    var att = get.attitude(player, target);
                    if (att >= 0) return 0;
                    else return 99 - target.hp + target.hasSkillTag('maixie') * 0.1;
                },
                ai1(card) {
                    return 8 - get.value(card);
                },
                prompt(event, player) {
                    return '撒个毒钉';
                },
                discard: false,
                position: 'he',
                content() {
                    player.storage.hyym_suishending.push(cards[0].suit);
                    target.addToExpansion(cards, player, 'giveAuto').gaintag.add('hyym_suishending_1');
                    target.addSkill('hyym_suishending_1');
                    target.storage.hyym_suishending_1 = player;
                    player.say('<span style="font-family:xingkai">影无刃,血无痕</span>');
                },
                group: ['hyym_suishending_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'phaseUseBegin',
                        },
                        forced: true,
                        mark: true,
                        marktext: '钉',
                        intro: {
                            name: '随身钉',
                            markcount: 'expansion',
                            content: 'expansion',
                        },
                        filter(event, player) {
                            return player.getExpansions('hyym_suishending_1').length;
                        },
                        _priority: 96,
                        content() {
                            'step 0';
                            event.cards = player.getExpansions('hyym_suishending_1');
                            ('step 1');
                            var card = event.cards.pop();
                            player.lose(card);
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/曹昂', ['hyym_suishending11', 'hyym_suishending12'].randomGet());
                            ('step 2');
                            if (player.storage.hyym_suishending_1.isIn()) player.storage.hyym_suishending_1.say('<span style="font-family:xingkai">没有人能逃离自己的影子</span>');
                            player.judge();
                            ('step 3');
                            switch (result.color) {
                                case 'black':
                                    player.loseHp();
                                    break;
                                case 'red':
                                    player.discard(player.getCards('he').randomGet());
                            }
                            ('step 4');
                            if (event.cards.length) event.goto(1);
                            else player.removeSkill('hyym_suishending_1', true);
                        },
                    },
                    2: {
                        forced: true,
                        trigger: { player: 'phaseUseAfter' },
                        filter(event, player) {
                            return true;
                        },
                        silent: true,
                        content() {
                            player.storage.hyym_suishending = [];
                        },
                        sub: true,
                    },
                },
                ai: {
                    order(card, player) {
                        return 0.9;
                    },
                    result: {
                        player(player, target, skill) {
                            if (player.countCards('h') > player.getHandcardLimit()) return 1;
                            return 0;
                        },
                        target(player, target, skill) {
                            if (target.hasSkillTag('maixie')) return -2;
                            return -1.5;
                        },
                    },
                },
            },
            hyym_sidou: {
                trigger: {
                    player: 'dying',
                },
                filter(event, player) {
                    return !player.hasSkill('hyym_sidoux');
                },
                check(event, player) {
                    if (event.getParent(2).name == 'hyym_sidou_1' && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) return false;
                    else return get.attitude(player, event.source) <= 0 || event.parent.name != 'damage' || event.source == undefined || event.source == player;
                },
                prompt2(event, player) {
                    if (event.parent.name == 'damage' && event.source != undefined && event.source != player) return `将体力回复至1点,反弹${get.translation(event.source)}1点伤害`;
                    else return '将体力回复至1点';
                },
                ai: {
                    maixie: true,
                    maixie_defend: true,
                },
                audio: 'ext:桃源幻梦/audio/技能配音/太史慈:2',
                content() {
                    player.addSkill('hyym_sidoux');
                    player.markSkill('hyym_sidoux');
                    player.storage.hyym_sidoux++;
                    player.recover(1 - player.hp);
                    if (trigger.parent.name == 'damage' && trigger.source != undefined && trigger.source != player) trigger.getParent('damage').source.damage();
                    //换一种办法清除
                    trigger.goto(1);
                },
                group: ['hyym_sidou_1', 'hyym_sidou_2', 'hyym_sidou_3', 'hyym_sidouy'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        filter(event, player) {
                            return player.hasSkill('hyym_sidoux');
                        },
                        content() {
                            'step 0';
                            player.removeMark('hyym_sidoux', 1);
                            player.removeSkill('hyym_sidoux');
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/太史慈/hyym_sidou3.mp3');
                            ('step 1');
                            player.loseHp();
                        },
                    },
                    2: {
                        trigger: {
                            global: 'useCardAfter',
                        },
                        filter(event, player) {
                            if (!get.tag(event.card, 'damage') || get.type(event.card) != 'trick') return false;
                            var damage = true;
                            for (var i = 0; i < player.getHistory('damage').length; i++) {
                                const evt = player.getHistory('damage')[i];
                                if (evt.card == event.card) damage = false;
                            }
                            return (
                                !game.filterPlayer2(function (current) {
                                    return current.storage.hyym_sidouy && current.storage.hyym_sidouy.includes(event.card.cardid);
                                }).length && damage
                            );
                        },
                        check(event, player) {
                            if (!lib.filter.filterCard({ name: 'juedou' }, player, event)) return false;
                            if (game.hasPlayer((play) => play.hasSkill('hyym_biwushanghaitongji'))) return true;
                            else if (
                                game.hasPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && (player.hasSha() || current.countCards('h') <= player.countCards('h') + 2) && get.effect(current, { name: 'juedou' }, player, current) <= -2 && player.canUse('juedou', current, false, false);
                                })
                            )
                                return player.hp > 1 || !player.hasSkill('hyym_sidoux') || (player.hp == 1 && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs'));
                            else return false;
                        },
                        prompt2: '失去1点体力并摸一张牌,印一张【决斗】',
                        content() {
                            player.loseHp();
                            player.draw();
                            player.say('<span style="font-family:xingkai">战鬼狩猎开始!</span>');
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/太史慈', ['hyym_sidou4', 'hyym_sidou5'].randomGet());
                            if (game.hasPlayer((play) => player.canUse('juedou', play, false, false)))
                                player.chooseUseTarget(true, '请选择【决斗】的目标', { name: 'juedou' }, false).set('ai', function (target) {
                                    if (get.damageEffect(target, player, player) <= 0) return false;
                                    else {
                                        let player = _status.event.player;
                                        if (get.attitude(player, target) > 0) return false;

                                        var att = -get.attitude(player, target);
                                        return att - target.hp + (player.countCards('h') - target.countCards('h')) * 0.5;
                                    }
                                });
                        },
                    },
                    3: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        filter(event, player) {
                            return event.source != undefined && event.source != player && event.num > 0 && player.countCards('he') > 0 && player.canUse('juedou', event.source, false, false);
                        },

                        forced: true,
                        content() {
                            'step 0';
                            player.chooseToDiscard('he', 1, false, '是否发动【死斗】？', `弃置一张牌,视为对${get.translation(trigger.source)}使用一张【决斗】`).set('ai', (card) => {
                                if (game.hasPlayer((play) => play.hasSkill('hyym_biwushanghaitongji'))) return 99 - get.value(card);
                                else if (get.attitude(player, trigger.source) < 0 && trigger.source.countCards('h') <= player.countCards('h') && get.damageEffect(trigger.source, player, trigger.source) < 0) {
                                    if (card.name == 'sha') return 0.1;
                                    return 99 - get.value(card);
                                } else return 0;
                            });
                            ('step 1');
                            if (result.bool) {
                                game.playAudio('../extension/桃源幻梦/audio/技能配音/太史慈', ['hyym_sidou6', 'hyym_sidou7'].randomGet());
                                player.useCard({ name: 'juedou' }, trigger.source, false);
                            }
                        },
                        ai: { expose: 0.1 },
                    },
                },
            },
            hyym_sidoux: {
                mark: true,
                marktext: '斗',
                intro: {
                    name: '斗',
                },
                onremove(player) {
                    player.removeGaintag('hyym_sidoux');
                },
            },
            hyym_sidouy: {
                silent: true,
                forced: true,
                init(player) {
                    for (var i of game.players) {
                        if (!i.storage.hyym_sidouy) i.storage.hyym_sidouy = [];
                    }
                },
                trigger: { global: 'dying' },
                filter(event, player) {
                    return event.reason.card && get.tag(event.reason.card, 'damage') > 0.5 && get.type(event.reason.card) == 'trick';
                },
                //_priority:99,
                content() {
                    trigger.player.storage.hyym_sidouy.push(trigger.reason.card.cardid);
                },
            },
            hyym_buqvyizhi: {
                trigger: {
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    return event.player != player && player.hp == 1 && !event.parent.excluded.includes(player);
                },
                _priority: 99,
                audio: 'ext:桃源幻梦/audio/技能配音/太史慈:2',
                check(event, player) {
                    return get.effect(player, event.card, event.player, player) < 0;
                },
                content() {
                    'step 0';
                    player.judge(function (card) {
                        return card.number < 8 ? 6 : -6;
                    }).judge2 = function (result) {
                        return result.bool;
                    };
                    ('step 1');
                    if (result.bool === true) trigger.parent.excluded.add(player);
                },
            },

            hyym_zhenshenlongquan: {
                group: ['hyym_zhenshenlongquan_1', 'hyym_zhenshenlongquan_2'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            global: 'phaseBefore',
                            player: ['enterGame', 'useCard', 'respond', 'judgeAfter'],
                        },
                        filter(event, player) {
                            return (event.name != 'phase' || game.phaseNumber == 0) && player.countMark('hyym_zhenshenlongquan_1') < 100; //这个条件是 事件不是回合开始时,或这是游戏第0轮.看这里都能看出来
                        },
                        mark: true,
                        marktext: '龙',
                        intro: {
                            name: '龙',
                            content: '共有$枚<龙>',
                        },
                        audio: 'ext:桃源幻梦/audio/技能配音/孙策:3',
                        content() {
                            var num = 0;
                            if (trigger.name == 'useCard' || trigger.name == 'respond') {
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        num = i.number * 2;
                                    }
                            } else if (trigger.name == 'judge') {
                                num = trigger.result.number * 2;
                            } else num = 50;
                            if (num + player.countMark('hyym_zhenshenlongquan_1') > 100) {
                                num = 100 - player.countMark('hyym_zhenshenlongquan_1');
                            }
                            if (num != 0) {
                                player.addMark('hyym_zhenshenlongquan_1', num);
                            }
                            player.markSkill('hyym_zhenshenlongquan_1');
                        },
                    },
                    2: {
                        enable: 'phaseUse',
                        filter(event, player) {
                            return (
                                player.countMark('hyym_zhenshenlongquan_1') >= 70 &&
                                game.hasPlayer(function (current) {
                                    return get.distance(player, current) == 1;
                                })
                            );
                        },
                        filterTarget(card, player, target) {
                            return player != target && get.distance(player, target) == 1;
                        },
                        prompt(event, player) {
                            return '选个幸运儿,给他来拳狠的';
                        },
                        audio: 'ext:桃源幻梦/audio/技能配音/孙策:2',
                        content() {
                            player.removeMark('hyym_zhenshenlongquan_1', 70);
                            var num = target.countCards('h') - target.hp;
                            if (num > target.maxHp) num = target.maxHp;
                            if (num < 1) num = 1;
                            target.damage(num, 'fire', 'nocard');
                            player.discardPlayerCard(target, 'he', num, true).ai = get.buttonValue;
                        },
                        ai: {
                            order: 17,
                            tag: {
                                damage: 1,
                                fireDamage: 1,
                                natureDamage: 1,
                            },
                            result: {
                                target(player, target, skill) {
                                    if (get.damageEffect(target, player, player, 'fire') <= 0) return 0;
                                    else {
                                        var num = target.countCards('h') - target.hp;
                                        if (num > target.maxHp) num = target.maxHp;
                                        if (num < 1) num = 1;
                                        return -num * 2 - Math.min(num, target.countCards('he'));
                                    }
                                },
                            },
                        },
                    },
                },
            },
            hyym_bawangpaoxiao: {
                audio: 'ext:桃源幻梦/audio/技能配音/孙策:2',
                trigger: {
                    player: 'damageBegin3',
                },
                filter(event, player) {
                    return event.source != undefined && event.source != player && event.num > 0 && player.countCards('he') > 0;
                },

                forced: true,
                content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    ('step 1');
                    player.chooseCard(false, 'he', '是否发动【霸王咆哮】？', `重铸一张牌,对${get.translation(trigger.source)}判定一次debuff`).set('ai', function (card) {
                        let player = _status.event.player;
                        if (get.attitude(player, trigger.source) <= 0) return 99 - get.value(card);
                        else return 0;
                    });
                    ('step 2');
                    if (result.bool) {
                        player.say('<span style="font-family:xingkai">热血沸腾,战个痛快!</span>');
                        var card = result.cards[0];
                        player.recast(card);
                        player.judge(function (card) {
                            if (card.suit == 'spade') {
                                if (player.isTurnedOver()) return 9;
                                else return -9;
                            } else return -6;
                        }).judge2 = function (result) {
                            return result.bool == false;
                        };
                    } else event.finish();
                    ('step 3');
                    switch (result.suit) {
                        case 'spade':
                            if (trigger.source && trigger.source.isIn() && !trigger.source.hasSkill('hyym_lvdouzongxix')) trigger.source.turnOver();
                            break;
                        case 'heart':
                            if (trigger.source && trigger.source.isIn() && !trigger.source.hasSkill('hyym_lvdouzongxix')) {
                                trigger.source.addSkill('hyym_bawangpaoxiaoheart');
                                trigger.source.markSkill('hyym_bawangpaoxiaoheart');
                                trigger.source.storage.hyym_bawangpaoxiaoheart++;
                            }
                            break;
                        case 'club':
                            if (trigger.source && trigger.source.isIn() && !trigger.source.hasSkill('hyym_lvdouzongxix')) {
                                trigger.source.addSkill('hyym_bawangpaoxiaoclub');
                                trigger.source.markSkill('hyym_bawangpaoxiaoclub');
                                trigger.source.storage.hyym_bawangpaoxiaoclub++;
                            }
                            break;
                        case 'diamond':
                            if (trigger.source && trigger.source.isIn() && !trigger.source.hasSkill('hyym_lvdouzongxix')) {
                                trigger.source.addSkill('hyym_bawangpaoxiaodiamond');
                                trigger.source.markSkill('hyym_bawangpaoxiaodiamond');
                                trigger.source.storage.hyym_bawangpaoxiaodiamond--;
                            }
                            break;
                    }
                    event.num--;
                    if (event.num > 0 && player.countCards('he') > 0) {
                        event.goto(1);
                    }
                },
                ai: {
                    expose: 0.1,
                    maixie: true,
                    maixie_defend: true,
                },
            },
            hyym_bawangpaoxiaoheart: {
                forced: true,
                mark: true,
                marktext: '霸',
                init(player) {
                    if (!player.storage.hyym_bawangpaoxiaoheart) player.storage.hyym_bawangpaoxiaoheart = 0;
                },
                intro: {
                    name: '霸王咆哮',
                    content(storage) {
                        return `跳过下${storage}个出牌阶段`;
                    },
                },
                trigger: {
                    player: 'phaseUseBefore',
                },
                content() {
                    'step 0';
                    game.log(player, '因【霸王咆哮】跳过了出牌阶段');
                    trigger.cancel(null, null, 'notrigger');
                    player.storage.hyym_bawangpaoxiaoheart--;
                    ('step 1');
                    if (player.storage.hyym_bawangpaoxiaoheart == 0) player.removeSkill('hyym_bawangpaoxiaoheart');
                },
                onremove(player) {
                    player.storage.hyym_bawangpaoxiaoheart = 0;
                    player.removeMark('hyym_bawangpaoxiaoheart');
                },
            },
            hyym_bawangpaoxiaoclub: {
                forced: true,
                mark: true,
                marktext: '霸',
                init(player) {
                    if (!player.storage.hyym_bawangpaoxiaoclub) player.storage.hyym_bawangpaoxiaoclub = 0;
                },
                intro: {
                    name: '霸王咆哮',
                    content(storage) {
                        return `跳过下${storage}个摸牌阶段`;
                    },
                },
                trigger: {
                    player: 'phaseDrawBefore',
                },
                content() {
                    'step 0';
                    game.log(player, '因【霸王咆哮】跳过了摸牌阶段');
                    trigger.cancel(null, null, 'notrigger');
                    player.storage.hyym_bawangpaoxiaoclub--;
                    ('step 1');
                    if (player.storage.hyym_bawangpaoxiaoclub == 0) player.removeSkill('hyym_bawangpaoxiaoclub');
                },
                onremove(player) {
                    player.storage.hyym_bawangpaoxiaoclub = 0;
                    player.removeMark('hyym_bawangpaoxiaoclub');
                },
            },
            hyym_bawangpaoxiaodiamond: {
                mark: true,
                marktext: '霸',
                init(player) {
                    if (!player.storage.hyym_bawangpaoxiaodiamond) player.storage.hyym_bawangpaoxiaodiamond = 0;
                },
                intro: {
                    name: '霸王咆哮',
                    content(storage) {
                        'step 0';
                        if (storage > 0) return '手牌上限+' + storage;
                        if (storage < 0) return '手牌上限' + storage;
                        ('step 1');
                        return '手牌上限无变化';
                    },
                },
                onremove(player) {
                    player.storage.hyym_bawangpaoxiaodiamond = 0;
                },
                mod: {
                    maxHandcard(player, num) {
                        if (typeof player.storage.hyym_bawangpaoxiaodiamond == 'number') return num + player.storage.hyym_bawangpaoxiaodiamond;
                    },
                },
            },
            hyym_feihuoliuxing: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                audio: 'ext:桃源幻梦/audio/技能配音/刘禅:2',
                filter(event, player) {
                    return player.hasEnabledSlot() && (player.countCards('he', { suit: 'heart' }) > 1 || player.countCards('he', { suit: 'diamond' }) > 1 || player.countCards('he', { suit: 'club' }) > 1 || player.countCards('he', { suit: 'spade' }) > 1);
                },
                forceDie: true,
                prompt2: '弃两张同花色牌,掉上限,废装备栏,灼烧三名连续角色',
                check(event, player) {
                    //优先选三个人里敌人数量最多的情况
                    return (
                        player.hasCard((card) => 6 - get.useful(card)) &&
                        player.isDamaged() &&
                        player.maxHp > 2 &&
                        game.hasPlayer(function (current) {
                            if (current == player) return false;
                            var list = [current.previous, current, current.next].filter(function (item) {
                                return item !== player;
                            });
                            var aa = 0;
                            var bb = 0;
                            for (var i = 0; i < list.length; i++) {
                                if (get.attitude(player, list[i]) > 0 && get.damageEffect(list[i], player, player, 'fire') != 0) aa++;
                                if (get.attitude(player, list[i]) < 0 && get.damageEffect(list[i], player, player, 'fire') != 0) bb++; //满足敌人数量大于友方数量
                            }
                            return bb > aa;
                        })
                    );
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget('选择灼烧目标的中位角色', true, function (card, player, target) {
                            return player != target;
                        })
                        .set('ai', function (target) {
                            if (target == player) return false;
                            var list = [target.previous, target, target.next].filter(function (item) {
                                return item !== player;
                            });
                            var aa = 0;
                            var bb = 0;
                            for (var i = 0; i < list.length; i++) {
                                if (get.attitude(player, list[i]) > 0 && get.damageEffect(list[i], player, player, 'fire') != 0) aa++;
                                if (get.attitude(player, list[i]) < 0 && get.damageEffect(list[i], player, player, 'fire') != 0) bb++; //满足敌人数量大于友方数量
                            }
                            return bb - aa;
                        });
                    ('step 1');
                    if (result.bool) {
                        event.target = result.targets[0];
                        player
                            .chooseToDiscard('he', 2, true, function (card) {
                                if (ui.selected.cards.length) {
                                    return card.suit == ui.selected.cards[0].suit;
                                }
                                var cards = player.getCards('he');
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (card != i) {
                                            if (card.suit == i.suit) return true;
                                        }
                                    }
                            })
                            .set('complexCard', true)
                            .set('ai', (card) => {
                                return 10 - get.value(card);
                            });
                    }
                    ('step 2');
                    player.chooseToDisable().ai = function (event, player, list) {
                        event.list1 = [];
                        event.list2 = [];
                        for (var i = 0; i < list.length; i++) {
                            event.list1.push(list[i]);
                            event.list2.push(list[i]);
                        }
                        if (player.hasCard(null, 'he')) {
                            for (var i = 1; i < 6; i++) {
                                if (player.hasCard({ subtype: 'equip' + i }, 'he')) {
                                    list.remove('equip' + i);
                                }
                                if (player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                    event.list1.remove('equip' + i);
                                }
                            }
                        }
                        if (!!list.length) return list.randomGet();
                        else if (!!event.list1.length) return event.list1.randomGet();
                        else return event.list2.randomGet();
                    };
                    ('step 3');
                    if (event.target) {
                        var target = event.target;
                        player.say('<span style="font-family:xingkai">本熊的小鸟愤怒了!</span>');
                        player.loseMaxHp();
                        var list = [target.previous, target, target.next];
                        for (var i = 0; i < list.length; i++) {
                            if (list[i] != player) list[i].damage(1, 'fire');
                        }
                    }
                },
            },
            hyym_dujiaoxian: {
                enable: 'phaseUse',
                usable: 1,
                audio: 'ext:桃源幻梦/audio/技能配音/刘禅:1',
                check(player, event) {
                    if (!lib.filter.filtercard({ name: 'sha' }, player, event)) return false;
                    return player.hp > 2 || (player.hp == 2 && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && card.name == 'chujiqixveyao', 'hs'));
                },
                //出牌阶段限一次,你可以失去1点体力并选择一名其他角色,亮出牌堆顶九张牌,依次对其使用其中的【雷杀】、【火杀】和【冰杀】(不计入次数且无次数和距离限制).若此技能未造成伤害,则你可以从其余牌中选择并获得一张.结算完毕后将剩余牌置入弃牌堆
                async content(event, trigger, player) {
                    //QQQ
                    player.loseHp();
                    const result = await player
                        .chooseTarget(true, '掉1滴血,来发梦想九连射', (card, player, target) => player != target)
                        .set('ai', (target) => -get.attitude(player, target))
                        .forResult();
                    if (result.targets?.length) {
                        const cards = get.cards(9);
                        const cards1 = cards.filter((q) => q.name == 'sha' && q.nature);
                        const cards2 = cards.filter((q) => !cards1.includes(q));
                        player.showCards(cards, get.translation(player) + '发动了【独角仙】');
                        for (var i of cards1) {
                            await player.useCard(i, result.targets[0], false);
                        }
                        var isDamage = false;
                        if (result.targets[0].getHistory('damage').length) {
                            for (const evt of result.targets[0].getHistory('damage')) {
                                if (evt.getParent('hyym_dujiaoxian') == event) {
                                    isDamage = true;
                                }
                            }
                        }
                        if (!isDamage) {
                            const { result: result1 } = await player.chooseButton(['独角仙', [cards2, 'card']], true);
                            if (result1.links && result1.links[0]) {
                                player.gain(result1.links, 'gain2');
                            }
                        }
                    }
                },
                ai: {
                    result: {
                        player(player, target, skill) {
                            if (player.hp <= 2 || game.filterPlayer((play) => get.attitude(player, play) <= 0 && player.canUse('sha', play, false, false) && get.effect(play, { name: 'sha' }, player, player) > 0).length == 0) return -2;
                            return 0.5;
                        },
                    },
                    order: 6,
                },
            },
            hyym_ziyang: {
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return player.hp <= 2 && player.countCards('h') <= _status.currentPhase.countCards('h');
                },
                prompt2: '摸一张牌',
                audio: 'ext:桃源幻梦/audio/技能配音/刘禅:2',
                check() {
                    return true;
                },
                content() {
                    player.draw();
                },
                _priority: 99,
            },
            hyym_modujiaomengyan: {
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return event.player && event.player.isIn() && event.player != player && !event.player.hasSkill('hyym_modujiaomengyanx') && !event.player.hasSkill('hyym_lvdouzongzix');
                },
                prompt2(event, player) {
                    return `令${get.translation(event.player)}获得<梦魇>`;
                },
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
                audio: 'ext:桃源幻梦/audio/技能配音/魔关凤:2',
                content() {
                    player.say('<span style="font-family:xingkai">沉睡在黑暗的梦魇中吧!</span>');
                    trigger.player.addSkill('hyym_modujiaomengyanx');
                    trigger.player.markSkill('hyym_modujiaomengyanx');
                    trigger.player.storage.hyym_modujiaomengyanx = player;
                },
                ai: {
                    threaten: 4,
                    maixie: true,
                    maixie_defend: true,
                },
                group: ['hyym_modujiaomengyan_1', 'hyym_modujiaomengyan_remove'],
                subSkill: {
                    1: {
                        enable: 'phaseUse',
                        filterCard: true,
                        selectCard: 1,
                        position: 'he',
                        filter(event, player) {
                            return (
                                game.hasPlayer(function (current) {
                                    return current != player && !current.hasSkill('hyym_modujiaomengyanx') && !current.hasSkill('hyym_lvdouzongzix');
                                }) && player.countCards('he') > 0
                            );
                        },
                        filterTarget(card, player, target) {
                            return !target.hasSkill('hyym_modujiaomengyanx') && player != target && !target.hasSkill('hyym_lvdouzongzix');
                        },
                        prompt(event, player) {
                            return '弃一张牌,令一名其他角色获得<梦魇>';
                        },
                        check(card) {
                            return 7 - get.value(card);
                        },

                        ai: {
                            result: {
                                target(player, target, skill) {
                                    if (target.inRange(player)) return -1;
                                    else return -2;
                                },
                            },
                            order: 0.001,
                        },

                        content() {
                            player.say('<span style="font-family:xingkai">沉睡在黑暗的梦魇中吧!</span>');
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/魔关凤', ['hyym_modujiaomengyan3', 'hyym_modujiaomengyan4'].randomGet());
                            target.addSkill('hyym_modujiaomengyanx');
                            target.markSkill('hyym_modujiaomengyanx');
                            target.storage.hyym_modujiaomengyanx = player;
                        },
                    },
                    remove: {
                        forced: true,
                        trigger: {
                            player: 'damageBegin3',
                        },
                        filter(event, player) {
                            return event.source != undefined && event.source != player && event.num > 0 && (event.source.hasSkill('hyym_modujiaomengyanx') || !event.source.hasSkill('hyym_lvdouzongzix'));
                        },
                        content() {
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/魔关凤', ['hyym_modujiaomengyan7', 'hyym_modujiaomengyan8'].randomGet());
                            if (trigger.source.hasSkill('hyym_modujiaomengyanx')) {
                                trigger.source.removeSkill('hyym_modujiaomengyanx');
                                trigger.source.discard(trigger.source.getCards('he').randomGet());
                            } else {
                                trigger.source.addSkill('hyym_modujiaomengyanx');
                                trigger.source.markSkill('hyym_modujiaomengyanx');
                                trigger.source.storage.hyym_modujiaomengyanx = player;
                            }
                        },
                    },
                },
            },
            hyym_modujiaomengyanx: {
                forced: true,
                mark: true,
                marktext: '魇',
                intro: {
                    name: '梦魇',
                },
                filter(event, player) {
                    var source = player.storage.hyym_modujiaomengyanx;
                    return source && source.isIn();
                },
                trigger: {
                    player: 'phaseUseEnd',
                },
                content() {
                    'step 0';
                    if (player.countCards('he') > 0) {
                        player.chooseCard(true, 1, 'he', '魔独角梦魇:将一张牌交给' + get.translation(player.storage[event.name])).set('ai', function (card) {
                            return 10 - get.value(card);
                        });
                    } else event.finish();
                    ('step 1');
                    game.playAudio('../extension/桃源幻梦/audio/技能配音/魔关凤', ['hyym_modujiaomengyan5', 'hyym_modujiaomengyan6'].randomGet());
                    if (result.cards.length) {
                        var source = player.storage[event.name];
                        delete source.storage[event.name];
                        source.gain(result.cards, player, 'give');
                        source.say('<span style="font-family:xingkai">要来了…戾气…</span>');
                    }
                },
            },
            hyym_yingxi: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                //prompt2:'砸个有装备的1滴血,再送ta一次制衡',
                audio: 'ext:桃源幻梦/audio/技能配音/魔关凤:2',
                filter(event, player) {
                    return game.hasPlayer((current) => current.hasCard(null, 'e'));
                },
                forceDie: true,

                forced: true,

                content() {
                    'step 0';
                    player
                        .chooseTarget(false, '影袭:砸个有装备的1滴血,再送ta一次制衡', function (card, player, target) {
                            return target.hasCard(null, 'e');
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            if (get.damageEffect(target, player, player) > 0) return get.damageEffect(target, player, player) - 0.01 * target.hp;
                            else return 0;
                        });
                    ('step 1');
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.line(target, 'fire');
                        target.damage();
                    } else event.finish();
                    ('step 2');
                    target
                        .chooseCard('he', false, [1, event.target.countCards('he')], '你可重铸任意张牌')
                        .set('forceDie', true)
                        .set('ai', function (card) {
                            if (get.position(card) == 'e') return 10 - get.value(card);
                            else return 6 - get.value(card);
                        });
                    ('step 3');
                    if (result.bool && result.cards) {
                        event.target.recast(result.cards);
                    }
                },
            },

            hyym_hunyin: {
                clanSkill: true,
                forced: true,
                trigger: { player: 'die' },
                forceDie: true,
                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget(true, get.prompt2('hyym_hunyin'), function (card, player, target) {
                            return player != target;
                        })
                        .set('forceDie', true)
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            var att = get.attitude(player, target);
                            if (att >= 0) return 0.1 - get.attitude(player, target);
                            else return 99 - target.hp + target.hasSkillTag('maixie') * 0.1;
                        });
                    ('step 1');
                    if (result.bool) {
                        var target = result.targets[0];
                        target.loseHp();
                        if (!target.hasSkill('hyym_hunyinx') && !target.hasSkill('hyym_lvdouzongzix')) {
                            player.line(target, 'fire');
                            target.addSkill('hyym_hunyinx');
                            target.markSkill('hyym_hunyinx');
                            game.addGlobalSkill('hyym_hunyin_y');
                        }
                    }
                },
                subSkill: {
                    y: {
                        forced: true,
                        mark: true,
                        mod: {
                            targetInRange(card, player, target) {
                                if (player.hasClan('战鬼猎人族') && target.hasSkill('hyym_hunyinx')) return true;
                            },
                        },
                    },
                },
            },
            hyym_hunyinx: {
                forced: true,
                mark: true,
                marktext: '印',
                intro: {
                    name: '魂印',
                    content(storage, player) {
                        return `战鬼猎人族角色对${get.translation(player)}使用牌无距离限制`;
                    },
                },
                onremove(player) {
                    player.removeGaintag('hyym_hunyinx');
                },
            },
            hyym_yangchunbaixve: {
                derivation: ['hyym_yingyongzou', 'hyym_juemingpu', 'hyym_huanxingqv', 'hyym_dingshendiao', 'hyym_jianyisong'],
                trigger: { player: ['phaseUseBegin', 'phaseUseEnd'] },
                filter(event, player) {
                    return ((!player.storage.dingshendiao && game.hasPlayer((play) => !play.hasSkill('hyym_dingshendiao'))) || (!player.storage.juemingpu && game.hasPlayer((play) => !play.hasSkill('hyym_juemingpu'))) || (!player.storage.huanxingqv && game.hasPlayer((play) => !play.hasSkill('hyym_huanxingqv') && !play.hasSkill('hyym_lvdouzongzix'))) || (!player.storage.dingshendiao && game.hasPlayer((play) => !play.hasSkill('hyym_dingshendiao'))) || (!player.storage.jianyisong && game.hasPlayer((play) => !play.hasSkill('hyym_jianyisong')))) && player.countCards('he') > 0;
                },
                prompt2(event, player) {
                    var list = [];
                    if (!player.storage.yingyongzou && game.hasPlayer((play) => !play.hasSkill('hyym_yingyongzou'))) list.push('英勇奏');
                    if (!player.storage.juemingpu && game.hasPlayer((play) => !play.hasSkill('hyym_juemingpu'))) list.push('绝命谱');
                    if (!player.storage.huanxingqv && game.hasPlayer((play) => !play.hasSkill('hyym_huanxingqv') && !play.hasSkill('hyym_lvdouzongzix'))) list.push('缓行曲');
                    if (!player.storage.dingshendiao && game.hasPlayer((play) => !play.hasSkill('hyym_dingshendiao'))) list.push('定神调');
                    if (!player.storage.jianyisong && game.hasPlayer((play) => !play.hasSkill('hyym_jianyisong'))) list.push('坚毅颂');
                    return '弃一张牌,选择以下一个技能令至多三名角色获得之:' + list;
                },
                audio: 'ext:桃源幻梦/audio/技能配音/步练师:2',
                check(event, player) {
                    if (event._triggering.triggername == 'phaseUseBegin') {
                        if (!player.hasSkill('hyym_dingshendiao') && player.hasEnabledSlot() && !player.storage.dingshendiao && !(game.filterPlayer((play) => get.attitude(player, play) > 0).length == 1 && player.countCards('hs', (card) => get.tag(card, 'damage') > 0.5 && game.filterPlayer((play) => player.canUse(card, play, true) && get.effect(play, card, player, play) < 0).length) == 0)) return true;
                        else if (game.filterPlayer((play) => get.attitude(player, play) <= 0 && play.hasSkillTag('maixie') && play.name != 'mozhangjiaohyym').length == game.filterPlayer((play) => get.attitude(player, play) <= 0).length && !player.storage.yingyongzou) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_juemingpu') && get.attitude(player, play) > 0).length > 2 && !player.storage.juemingpu) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_huanxingqv') && get.attitude(player, play) < 0).length > 2 && !player.storage.huanxingqv) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_jianyisong') && get.attitude(player, play) > 0).length > 2 && !player.storage.jianyisong) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_yingyongzou') && get.attitude(player, play) > 0).length > 2 && !player.storage.yingyongzou) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_juemingpu') && get.attitude(player, play) > 0).length == 2 && !player.storage.juemingpu) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_huanxingqv') && get.attitude(player, play) < 0).length == 2 && !player.storage.huanxingqv) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_jianyisong') && get.attitude(player, play) > 0).length == 2 && !player.storage.jianyisong) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_yingyongzou') && get.attitude(player, play) > 0).length == 2 && !player.storage.yingyongzou) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_juemingpu') && get.attitude(player, play) > 0).length == 1 && !player.storage.juemingpu) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_huanxingqv') && get.attitude(player, play) < 0).length == 1 && !player.storage.huanxingqv) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_jianyisong') && get.attitude(player, play) > 0).length == 1 && !player.storage.jianyisong) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_yingyongzou') && get.attitude(player, play) > 0).length == 1 && !player.storage.yingyongzou) return true;
                        else return false;
                    } else {
                        if (game.filterPlayer((play) => !play.hasSkill('hyym_juemingpu') && get.attitude(player, play) > 0 && play != player).length > 2 && !player.storage.juemingpu) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_huanxingqv') && get.attitude(player, play) < 0).length > 2 && !player.storage.huanxingqv) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_jianyisong') && get.attitude(player, play) > 0 && play != player).length > 2 && !player.storage.jianyisong) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_yingyongzou') && get.attitude(player, play) > 0 && play != player).length > 2 && !player.storage.yingyongzou) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_juemingpu') && get.attitude(player, play) > 0 && play != player).length == 2 && !player.storage.juemingpu) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_huanxingqv') && get.attitude(player, play) < 0).length == 2 && !player.storage.huanxingqv) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_jianyisong') && get.attitude(player, play) > 0 && play != player).length == 2 && !player.storage.jianyisong) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_yingyongzou') && get.attitude(player, play) > 0 && play != player).length == 2 && !player.storage.yingyongzou) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_juemingpu') && get.attitude(player, play) > 0).length == 1 && player.countCards('hs', (card) => get.tag(card, 'damage') > 0.5 && game.filterPlayer((play) => player.canUse(card, play, true) && get.effect(play, card, player, play) < 0).length) > 0 && !player.storage.juemingpu) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_huanxingqv') && get.attitude(player, play) < 0).length == 1 && !player.storage.huanxingqv) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_jianyisong') && get.attitude(player, play) > 0 && play != player).length == 1 && !player.storage.jianyisong) return true;
                        else if (game.filterPlayer((play) => !play.hasSkill('hyym_yingyongzou') && get.attitude(player, play) > 0 && play != player).length == 1 && !player.storage.yingyongzou) return true;
                        else return false;
                    }
                },
                content() {
                    'step 0';
                    player.chooseToDiscard('he', 1, true).set('ai', (card) => {
                        if (get.tag(card, 'damage') > 0.5) return 5 - get.value(card);
                        else return 10 - get.value(card);
                    });
                    ('step 1');
                    var list = [];
                    if (!player.storage.yingyongzou && game.hasPlayer((play) => !play.hasSkill('hyym_yingyongzou'))) list.push('英勇奏');
                    if (!player.storage.juemingpu && game.hasPlayer((play) => !play.hasSkill('hyym_juemingpu'))) list.push('绝命谱');
                    if (!player.storage.huanxingqv && game.hasPlayer((play) => !play.hasSkill('hyym_huanxingqv') && !play.hasSkill('hyym_lvdouzongzix'))) list.push('缓行曲');
                    if (!player.storage.dingshendiao && game.hasPlayer((play) => !play.hasSkill('hyym_dingshendiao'))) list.push('定神调');
                    if (!player.storage.jianyisong && game.hasPlayer((play) => !play.hasSkill('hyym_jianyisong'))) list.push('坚毅颂');
                    if (list.length)
                        player
                            .chooseControl(list)
                            .set('prompt', '选择一个技能,令至多三名角色获得之')
                            .set('ai', function () {
                                var player = _status.event.player;
                                if (event.getParent(2).triggername == 'phaseUseBegin') {
                                    if (!player.hasSkill('hyym_dingshendiao') && player.hasEnabledSlot() && !player.storage.dingshendiao && !(game.filterPlayer((play) => get.attitude(player, play) > 0).length == 1 && player.countCards('hs', (card) => get.tag(card, 'damage') > 0.5 && game.filterPlayer((play) => player.canUse(card, play, true) && get.effect(play, card, player, play) < 0).length) == 0)) return '定神调';
                                    else if (game.filterPlayer((play) => get.attitude(player, play) <= 0 && play.hasSkillTag('maixie') && play.name != 'mozhangjiaohyym').length == game.filterPlayer((play) => get.attitude(player, play) <= 0).length && !player.storage.yingyongzou) return '英勇奏';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_juemingpu') && get.attitude(player, play) > 0).length > 2 && !player.storage.juemingpu) return '绝命谱';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_huanxingqv') && get.attitude(player, play) < 0).length > 2 && !player.storage.huanxingqv) return '缓行曲';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_jianyisong') && get.attitude(player, play) > 0).length > 2 && !player.storage.jianyisong) return '坚毅颂';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_yingyongzou') && get.attitude(player, play) > 0).length > 2 && !player.storage.yingyongzou) return '英勇奏';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_juemingpu') && get.attitude(player, play) > 0).length == 2 && !player.storage.juemingpu) return '绝命谱';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_huanxingqv') && get.attitude(player, play) < 0).length == 2 && !player.storage.huanxingqv) return '缓行曲';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_jianyisong') && get.attitude(player, play) > 0).length == 2 && !player.storage.jianyisong) return '坚毅颂';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_yingyongzou') && get.attitude(player, play) > 0).length == 2 && !player.storage.yingyongzou) return '英勇奏';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_juemingpu') && get.attitude(player, play) > 0).length == 1 && player.countCards('hs', (card) => get.tag(card, 'damage') > 0.5 && game.filterPlayer((play) => player.canUse(card, play, true) && get.effect(play, card, player, play) < 0).length) > 0 && !player.storage.juemingpu) return '绝命谱';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_huanxingqv') && get.attitude(player, play) < 0).length == 1 && !player.storage.huanxingqv) return '缓行曲';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_jianyisong') && get.attitude(player, play) > 0).length == 1 && !player.storage.jianyisong) return '坚毅颂';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_yingyongzou') && get.attitude(player, play) > 0).length == 1 && !player.storage.yingyongzou) return '英勇奏';
                                } else {
                                    if (game.filterPlayer((play) => !play.hasSkill('hyym_juemingpu') && get.attitude(player, play) > 0 && play != player).length > 2 && !player.storage.juemingpu) return '绝命谱';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_huanxingqv') && get.attitude(player, play) < 0).length > 2 && !player.storage.huanxingqv) return '缓行曲';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_jianyisong') && get.attitude(player, play) > 0 && play != player).length > 2 && !player.storage.jianyisong) return '坚毅颂';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_yingyongzou') && get.attitude(player, play) > 0 && play != player).length > 2 && !player.storage.yingyongzou) return '英勇奏';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_juemingpu') && get.attitude(player, play) > 0 && play != player).length == 2 && !player.storage.juemingpu) return '绝命谱';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_huanxingqv') && get.attitude(player, play) < 0).length == 2 && !player.storage.huanxingqv) return '缓行曲';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_jianyisong') && get.attitude(player, play) > 0 && play != player).length == 2 && !player.storage.jianyisong) return '坚毅颂';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_yingyongzou') && get.attitude(player, play) > 0 && play != player).length == 2 && !player.storage.yingyongzou) return '英勇奏';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_juemingpu') && get.attitude(player, play) > 0 && play != player).length == 1 && !player.storage.juemingpu) return '绝命谱';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_huanxingqv') && get.attitude(player, play) < 0).length == 1 && !player.storage.huanxingqv) return '缓行曲';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_jianyisong') && get.attitude(player, play) > 0 && play != player).length == 1 && !player.storage.jianyisong) return '坚毅颂';
                                    else if (game.filterPlayer((play) => !play.hasSkill('hyym_yingyongzou') && get.attitude(player, play) > 0 && play != player).length == 1 && !player.storage.yingyongzou) return '英勇奏';
                                }
                            });
                    else event.finish();
                    ('step 2');
                    if (result.control == '英勇奏') {
                        event.kk = 1;
                        player
                            .chooseTarget([1, 3], true, '令至多三名角色依次获得' + get.translation('hyym_yingyongzou'), function (card, player, target) {
                                return !target.hasSkill('hyym_yingyongzou');
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                return get.attitude(player, target);
                            });
                    }
                    if (result.control == '绝命谱') {
                        event.kk = 2;
                        player
                            .chooseTarget([1, 3], true, '令至多三名角色依次获得' + get.translation('hyym_juemingpu'), function (card, player, target) {
                                return !target.hasSkill('hyym_juemingpu');
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                return get.attitude(player, target);
                            });
                    }
                    if (result.control == '缓行曲') {
                        event.kk = 3;
                        player
                            .chooseTarget([1, 3], true, '令至多三名角色依次获得' + get.translation('hyym_huanxingqv'), function (card, player, target) {
                                return !target.hasSkill('hyym_huanxingqv');
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                return -get.attitude(player, target);
                            });
                    }
                    if (result.control == '定神调') {
                        event.kk = 4;
                        player
                            .chooseTarget([1, 3], true, '令至多三名角色依次获得' + get.translation('hyym_dingshendiao'), function (card, player, target) {
                                return !target.hasSkill('hyym_dingshendiao');
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                return get.attitude(player, target);
                            });
                    }
                    if (result.control == '坚毅颂') {
                        event.kk = 5;
                        player
                            .chooseTarget([1, 3], true, '令至多三名角色依次获得' + get.translation('hyym_jianyisong'), function (card, player, target) {
                                return !target.hasSkill('hyym_jianyisong');
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                return get.attitude(player, target);
                            });
                    }
                    ('step 3');
                    if (result.targets?.length) {
                        event.target = result.targets.sortBySeat();
                    } else event.finish();
                    ('step 4');
                    for (var i = 0; i < event.target.length; i++) {
                        player.line(event.target[i], 'fire');
                        if (event.kk == 1) {
                            event.target[i].addSkill('hyym_yingyongzou');
                            event.target[i].addSkill('hyym_yingyongzoulinshi');
                            event.target[i].markSkill('hyym_yingyongzoulinshi');
                            event.target[i].storage.hyym_yingyongzoulinshi = player;
                        }
                        if (event.kk == 2) {
                            event.target[i].addSkill('hyym_juemingpu');
                            event.target[i].addSkill('hyym_juemingpulinshi');
                            event.target[i].markSkill('hyym_juemingpulinshi');
                            event.target[i].storage.hyym_juemingpulinshi = player;
                        }
                        if (event.kk == 3) {
                            event.target[i].addSkill('hyym_huanxingqv');
                            event.target[i].addSkill('hyym_huanxingqvlinshi');
                            event.target[i].markSkill('hyym_huanxingqvlinshi');
                            event.target[i].storage.hyym_huanxingqvlinshi = player;
                        }
                        if (event.kk == 4) {
                            event.target[i].addSkill('hyym_dingshendiao');
                            event.target[i].addSkill('hyym_dingshendiaolinshi');
                            event.target[i].markSkill('hyym_dingshendiaolinshi');
                            event.target[i].storage.hyym_dingshendiaolinshi = player;
                        }
                        if (event.kk == 5) {
                            event.target[i].addSkill('hyym_jianyisong');
                            event.target[i].addSkill('hyym_jianyisonglinshi');
                            event.target[i].markSkill('hyym_jianyisonglinshi');
                            event.target[i].storage.hyym_jianyisonglinshi = player;
                        }
                    }
                },
                group: 'hyym_yangchunbaixve_1',
                subSkill: {
                    1: {
                        trigger: { player: ['phaseBefore', 'die'] },
                        filter(event, player) {
                            return true;
                        },
                        forceDie: true,
                        forced: true,
                        nopop: true,
                        silent: true,
                        forced: true,
                        content() {
                            var list1 = game.filterPlayer((play) => play.hasSkill('hyym_yingyongzoulinshi'));
                            var list2 = game.filterPlayer((play) => play.hasSkill('hyym_juemingpulinshi'));
                            var list3 = game.filterPlayer((play) => play.hasSkill('hyym_huanxingqvlinshi'));
                            var list4 = game.filterPlayer((play) => play.hasSkill('hyym_dingshendiaolinshi'));
                            var list5 = game.filterPlayer((play) => play.hasSkill('hyym_jianyisonglinshi'));
                            for (var i = 0; i < list1.length; i++) {
                                list1[i].removeSkill('hyym_yingyongzou');
                                list1[i].removeSkill('hyym_yingyongzoulinshi');
                            }
                            for (var i = 0; i < list2.length; i++) {
                                list2[i].removeSkill('hyym_juemingpu');
                                list2[i].removeSkill('hyym_juemingpulinshi');
                            }
                            for (var i = 0; i < list3.length; i++) {
                                list3[i].removeSkill('hyym_huanxingqv');
                                list3[i].removeSkill('hyym_huanxingqvlinshi');
                            }
                            for (var i = 0; i < list4.length; i++) {
                                list4[i].removeSkill('hyym_dingshendiao');
                                list4[i].removeSkill('hyym_dingshendiaolinshi');
                            }
                            for (var i = 0; i < list5.length; i++) {
                                list5[i].removeSkill('hyym_jianyisong');
                                list5[i].removeSkill('hyym_jianyisonglinshi');
                            }
                        },
                    },
                },
                ai: { expose: 0.1 },
            },
            hyym_yingyongzou: {
                audio: 'ext:桃源幻梦/audio/技能配音/步练师:1',
                trigger: { player: 'useCardToPlayered' },
                check(event, player) {
                    return get.attitude(player, event.target) <= 0;
                },
                prompt2(event, player) {
                    return `令${get.translation(event.target)}本回合防具、护甲和所有非锁定技失效`;
                },
                filter(event, player) {
                    return !event.target.hasSkill('hyym_yingyongzoux') && event.target != player;
                },
                //logTarget:'target',
                content() {
                    trigger.target.addTempSkill('hyym_yingyongzoux');
                    trigger.target.markSkill('hyym_yingyongzoux');
                },
                ai: {
                    unequip: true,
                },
            },
            hyym_yingyongzoux: {
                charlotte: true,
                ai: {
                    unequip2: true,
                    nohujia: true,
                },
                mark: true,
                marktext: '封',
                intro: {
                    name: '英勇奏(封印)',
                    content(storage, player) {
                        return '防具,护甲和所有非锁定技失效直到回合结束';
                    },
                },
                onremove(player) {
                    player.removeMark('hyym_yingyongzoux');
                    player.removeSkill('fengyin');
                },
                group: 'fengyin',
            },
            hyym_yingyongzoulinshi: {
                mark: true,
                marktext: '英',
                intro: {
                    name: '英勇奏',
                    content(storage, player) {
                        return get.translation(player.storage.hyym_yingyongzoulinshi) + '下回合开始时/死亡时,失去此技能';
                    },
                },
                onremove(player) {
                    player.removeMark('hyym_yingyongzoulinshi');
                },
            },
            hyym_juemingpu: {
                audio: 'ext:桃源幻梦/audio/技能配音/步练师:1',
                trigger: {
                    source: 'damageBegin1',
                },
                filter(event, player) {
                    return !player.hasSkill('hyym_juemingpux');
                },
                prompt2(event, player) {
                    return `进行一次判定,若为红,则${get.translation(event.player)}本次受到的伤害+1,且此技能本轮失效`;
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                content() {
                    'step 0';
                    player.judge(function (card) {
                        return get.color(card) == 'red' ? 6 : -6;
                    }).judge2 = function (result) {
                        return result.bool;
                    };
                    ('step 1');
                    if (result.bool === true) {
                        trigger.num++;
                        player.addTempSkill('hyym_juemingpux', 'roundStart');
                        player.markSkill('hyym_juemingpux');
                    }
                },
            },
            hyym_juemingpux: {
                mark: true,
                marktext: '谱',
                intro: {
                    name: '绝命谱',
                    content(storage, player) {
                        return '本轮【绝命谱】失效';
                    },
                },
                onremove(player) {
                    player.removeMark('hyym_juemingpux');
                },
            },
            hyym_juemingpulinshi: {
                mark: true,
                marktext: '绝',
                intro: {
                    name: '绝命谱',
                    content(storage, player) {
                        return get.translation(player.storage.hyym_juemingpulinshi) + '下回合开始时/死亡时,失去此技能';
                    },
                },
                onremove(player) {
                    player.removeMark('hyym_juemingpulinshi');
                },
            },
            hyym_huanxingqv: {
                audio: 'ext:桃源幻梦/audio/技能配音/步练师:2',
                forced: true,
                trigger: { player: 'useCard' },
                filter(event, player) {
                    var evt = event.getParent('phaseUse');
                    if (!evt || evt.player != player) return false;
                    return (
                        player
                            .getHistory('useCard', function (event) {
                                return event.getParent('phaseUse') == evt;
                            })
                            .indexOf(event) == 0 && player.countCards('he') > 0
                    );
                },
                content() {
                    player.chooseToDiscard('he', 1, true).set('ai', (card) => {
                        return 10 - get.value(card);
                    });
                },
            },
            hyym_huanxingqvlinshi: {
                mark: true,
                marktext: '缓',
                intro: {
                    name: '缓行曲',
                    content(storage, player) {
                        return get.translation(player.storage.hyym_huanxingqvlinshi) + '下回合开始时/死亡时,失去此技能';
                    },
                },
                onremove(player) {
                    player.removeMark('hyym_huanxingqvlinshi');
                },
            },
            hyym_dingshendiao: {
                audio: 'ext:桃源幻梦/audio/技能配音/步练师:1',
                trigger: { player: 'useCard' },
                usable: 1,
                filter(event, player) {
                    return player.hasEnabledSlot() && get.tag(event.card, 'damage') > 0.5 && event.card.name != 'hyym_shuaipao' && event.card.name != 'hyym_qingdianyanhua';
                },
                check(event, player) {
                    if (event.targets.length == 1) return (event.targets[0].countCards('h') > 0 || event.targets[0].hasCard((card) => card.name == 'bagua', 'e')) && get.effect(event.targets[0], event.card, player, player) > 0;
                    else {
                        var eff = 0;
                        for (var i of event.targets) {
                            eff += get.effect(i, event.card, player, player);
                        }
                        if (eff > 0) return true;
                    }
                },
                prompt2(event, player) {
                    return `废除一个装备栏,令${get.translation(event.card)}不可被响应`;
                },
                content() {
                    player.chooseToDisable().ai = function (event, player, list) {
                        event.list1 = [];
                        event.list2 = [];
                        for (var i = 0; i < list.length; i++) {
                            event.list1.push(list[i]);
                            event.list2.push(list[i]);
                        }
                        if (player.hasCard(null, 'he')) {
                            for (var i = 1; i < 6; i++) {
                                if (player.hasCard({ subtype: 'equip' + i }, 'he')) {
                                    list.remove('equip' + i);
                                }
                                if (player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                    event.list1.remove('equip' + i);
                                }
                            }
                        }
                        if (!!list.length) return list.randomGet();
                        else if (!!event.list1.length) return event.list1.randomGet();
                        else return event.list2.randomGet();
                    };
                    trigger.directHit.addArray(
                        game.filterPlayer(function (current) {
                            return true;
                        }),
                    );
                },
            },
            hyym_dingshendiaolinshi: {
                mark: true,
                marktext: '定',
                intro: {
                    name: '定神调',
                    content(storage, player) {
                        return get.translation(player.storage.hyym_dingshendiaolinshi) + '下回合开始时/死亡时,失去此技能';
                    },
                },
                onremove(player) {
                    player.removeMark('hyym_dingshendiaolinshi');
                },
            },
            hyym_jianyisong: {
                audio: 'ext:桃源幻梦/audio/技能配音/步练师:1',
                trigger: { player: 'damageBegin4' },
                _priority: 96,
                filter(event, player) {
                    return ((event.card && player.hasCard((card) => get.type(card, 'trick') != get.type(event.card, 'trick'), 'he')) || (!event.card && player.countCards('he') > 0)) && !player.hasSkill('hyym_jianyisongx');
                },

                forced: true,
                content() {
                    'step 0';
                    if (trigger.card)
                        player
                            .chooseToDiscard('是否发动【坚毅颂】？', '弃一张非' + get.translation(get.type(trigger.card, 'trick')) + '牌,防止本次你受到的伤害', 'he', false, function (card) {
                                return get.type(card, 'trick') != get.type(trigger.card, 'trick');
                            })
                            .set('ai', function (card) {
                                let player = _status.event.player;
                                if (get.damageEffect(player, trigger.source, player) < 0) return 99 - get.value(card);
                                else return 0;
                            });
                    else
                        player.chooseToDiscard('是否发动【坚毅颂】？', '弃一张牌,防止本次你受到的伤害', 'he', false).set('ai', function (card) {
                            let player = _status.event.player;
                            if (get.damageEffect(player, trigger.source, player) < 0) return 99 - get.value(card);
                            else return 0;
                        });
                    ('step 1');
                    if (result.bool) {
                        player.addTempSkill('hyym_jianyisongx', 'roundStart');
                        player.markSkill('hyym_jianyisongx', 'roundStart');
                        trigger.cancel();
                    }
                },
            },
            hyym_jianyisongx: {
                mark: true,
                marktext: '颂',
                intro: {
                    name: '坚毅颂',
                    content(storage, player) {
                        return '本轮已发动过【坚毅颂】';
                    },
                },
                onremove(player) {
                    player.removeMark('hyym_jianyisongx');
                },
            },
            hyym_jianyisonglinshi: {
                mark: true,
                marktext: '坚',
                intro: {
                    name: '坚毅颂',
                    content(storage, player) {
                        return get.translation(player.storage.hyym_jianyisonglinshi) + '下回合开始时/死亡时,失去此技能';
                    },
                },
                onremove(player) {
                    player.removeMark('hyym_jianyisonglinshi');
                },
            },

            hyym_yinren: {
                audio: 'ext:桃源幻梦/audio/技能配音/步练师:1',
                trigger: { global: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return (!player.storage.yingyongzou || !player.storage.juemingpu || !player.storage.dingshendiao || !player.storage.huanxingqv || !player.storage.jianyisong) && !player.storage.hyym_yinren.includes(event.player);
                },
                prompt2(event, player) {
                    var list = [];
                    if (!player.storage.yingyongzou) list.push('英勇奏');
                    if (!player.storage.juemingpu) list.push('绝命谱');
                    if (!player.storage.huanxingqv) list.push('缓行曲');
                    if (!player.storage.dingshendiao) list.push('定神调');
                    if (!player.storage.jianyisong) list.push('坚毅颂');
                    return `获得以下一个技能并对${get.translation(event.player)}造成1点伤害:` + list;
                },
                check(event, player) {
                    var kk = 0;
                    if (!player.storage.yingyongzou) kk++;
                    if (!player.storage.juemingpu) kk++;
                    if (!player.storage.dingshendiao) kk++;
                    if (!player.storage.jianyisong) kk++;
                    if (game.filterPlayer((play) => get.attitude(player, play) < 0).length + 1 == game.players.length) return !(event.player == player && (game.filterPlayer((play) => get.attitude(player, play) < 0).length >= kk || player.hp + player.hujia == 1));
                    else return get.attitude(player, event.player) < 0 && (event.player.hp + event.player.hujia == 1 || game.filterPlayer((play) => get.attitude(player, play) > 0).length + 1 == game.players.length) && (kk > 0 || game.filterPlayer((play) => get.attitude(player, play) <= 0).length == 1);
                },
                init(player) {
                    if (!player.storage.hyym_yinren) player.storage.hyym_yinren = [];
                },
                mark: true,
                marktext: '音',
                intro: {
                    name: '音刃',
                    content(storage, player) {
                        return `已对${get.translation(player.storage.hyym_yinren)}发动过此技能`;
                    },
                },
                content() {
                    'step 0';
                    player.say('<span style="font-family:xingkai">相濡以沫,不如相忘于江湖</span>');
                    player.storage.hyym_yinren.push(trigger.player);
                    var list = [];
                    if (!player.storage.yingyongzou) list.push('英勇奏');
                    if (!player.storage.juemingpu) list.push('绝命谱');
                    if (!player.storage.huanxingqv) list.push('缓行曲');
                    if (!player.storage.dingshendiao) list.push('定神调');
                    if (!player.storage.jianyisong) list.push('坚毅颂');
                    if (list.length)
                        player
                            .chooseControl(list)
                            .set('prompt', '选择一个选项并获得对应技能')
                            .set('ai', function () {
                                var player = _status.event.player;
                                if (game.filterPlayer((play) => get.attitude(player, play) <= 0 && play.hasSkillTag('maixie') && play.name != 'mozhangjiaohyym').length == game.filterPlayer((play) => get.attitude(player, play) <= 0).length && !player.storage.yingyongzou) return '英勇奏';
                                else if (game.filterPlayer((play) => get.attitude(player, play) <= 0).length == 1 && game.filterPlayer((play) => get.attitude(player, play) > 0).length > 1 && !player.storage.yingyongzou) return '英勇奏';
                                else if (!player.storage.juemingpu && !player.storage.yingyongzou) return '绝命谱';
                                else if (!player.storage.dingshendiao && player.hasEnabledSlot()) return '定神调';
                                else if (!player.storage.jianyisong) return '坚毅颂';
                                else if (!player.storage.yingyongzou) return '英勇奏';
                                else if (!player.storage.dingshendiao) return '定神调';
                                else if (!player.storage.huanxingqv) return '缓行曲';
                            });
                    else event.finish();
                    ('step 1');
                    if (result.control == '英勇奏') {
                        player.storage.yingyongzou = true;
                        if (player.hasSkill('hyym_yingyongzoulinshi')) {
                            player.removeSkill('hyym_yingyongzoulinshi');
                        } else player.addSkill('hyym_yingyongzou');
                    }
                    if (result.control == '绝命谱') {
                        player.storage.juemingpu = true;
                        if (player.hasSkill('hyym_juemingpulinshi')) {
                            player.removeSkill('hyym_juemingpulinshi');
                        } else player.addSkill('hyym_juemingpu');
                    }
                    if (result.control == '缓行曲') {
                        player.storage.huanxingqv = true;
                        if (player.hasSkill('hyym_huanxingqvlinshi')) {
                            player.removeSkill('hyym_huanxingqvlinshi');
                        } else player.addSkill('hyym_huanxingqv');
                    }
                    if (result.control == '定神调') {
                        player.storage.dingshendiao = true;
                        if (player.hasSkill('hyym_dingshendiaolinshi')) {
                            player.removeSkill('hyym_dingshendiaolinshi');
                        } else player.addSkill('hyym_dingshendiao');
                    }
                    if (result.control == '坚毅颂') {
                        player.storage.jianyisong = true;
                        if (player.hasSkill('hyym_jianyisonglinshi')) {
                            player.removeSkill('hyym_jianyisonglinshi');
                        } else player.addSkill('hyym_jianyisong');
                    }
                    ('step 2');
                    player.line(trigger.player, 'fire');
                    trigger.player.damage();
                },
                ai: { expose: 0.1 },
            },
            hyym_chenzui: {
                audio: 'ext:桃源幻梦/audio/技能配音/步练师:2',
                init(player) {
                    if (!player.storage.hyym_chenzui) player.storage.hyym_chenzui = [];
                    //if(!player.storage.hyym_chenzuix) player.storage.hyym_chenzui2=[]
                },
                mark: true,
                marktext: '沉',
                intro: {
                    name: '沉醉',
                    content(storage, player) {
                        //return `已在对${get.translation(player.storage.hyym_chenzui)}造成伤害后/受到${get.translation(player.storage.hyym_chenzui2)}造成的伤害后发动过此技能`
                        if (!player.storage.hyym_chenzui.includes('1') && !player.storage.hyym_chenzui.includes('2')) return '本回合未发动过此技能';
                        if (player.storage.hyym_chenzui.includes('1') && !player.storage.hyym_chenzui.includes('2')) return '本回合已因受到伤害发动过此技能';
                        if (!player.storage.hyym_chenzui.includes('1') && player.storage.hyym_chenzui.includes('2')) return '本回合已因造成伤害发动过此技能';
                        if (player.storage.hyym_chenzui.includes('1') && player.storage.hyym_chenzui.includes('2')) return '本回合已因造成、受到伤害发动过此技能';
                    },
                },
                ai: {
                    maixie: true,
                    maixie_defend: true,
                },
                trigger: { player: 'damageEnd', source: 'damageSource' },
                filter(event, player) {
                    if (!event.source || !event.player || !event.player.isIn() || !event.source.isIn()) return false;
                    if (event._notrigger.includes(event.player)) return false;
                    if (event.player == player && (player.storage.hyym_chenzui.includes(/* event.source */ '1') || event.source.hasSkill('hyym_lvdouzongzix'))) return false;
                    if (event.player != player && (player.storage.hyym_chenzui.includes(/* event.player */ '2') || event.player.hasSkill('hyym_lvdouzongzix'))) return false;
                    return event.num && event.source != event.player;
                },
                check(event, player) {
                    if (event.player == player) return get.attitude(player, event.source) < 0;
                    else return get.attitude(player, event.player) < 0;
                },
                logTarget(event, player) {
                    if (event.player == player) return event.source;
                    return event.player;
                },
                content() {
                    'step 0';
                    event.target = lib.skill.hyym_chenzui.logTarget(trigger, player);
                    event.kk = [0, 1].randomGet();
                    ('step 1');
                    if (player == trigger.player) {
                        player.storage.hyym_chenzui.push(/* target */ '1');
                        if (event.kk == 0) {
                            if (!target.hasSkill('hyym_chenzuix')) {
                                target.addSkill('hyym_chenzuix');
                                target.markSkill('hyym_chenzuix');
                            }
                            target.storage.hyym_chenzuix++;
                        } else {
                            if (!target.hasSkill('hyym_chenzuiy')) {
                                target.addSkill('hyym_chenzuiy');
                                target.markSkill('hyym_chenzuiy');
                            }
                            target.storage.hyym_chenzuiy++;
                        }
                    } else {
                        player.storage.hyym_chenzui.push(/* target */ '2');
                        if (event.kk == 0) {
                            if (!target.hasSkill('hyym_chenzuix')) {
                                target.addSkill('hyym_chenzuix');
                                target.markSkill('hyym_chenzuix');
                            }
                            target.storage.hyym_chenzuix++;
                        } else {
                            if (!target.hasSkill('hyym_chenzuiy')) {
                                target.addSkill('hyym_chenzuiy');
                                target.markSkill('hyym_chenzuiy');
                            }
                            target.storage.hyym_chenzuiy++;
                        }
                    }
                },
                group: 'hyym_chenzui_1',
                subSkill: {
                    1: {
                        silent: true,
                        nopop: true,
                        forced: true,
                        trigger: { global: 'phaseBefore' },
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            player.storage.hyym_chenzui = [];
                        },
                    },
                },
            },
            hyym_chenzuix: {
                mark: true,
                marktext: '醉',
                init(player) {
                    if (!player.storage.hyym_chenzuix) player.storage.hyym_chenzuix = 0;
                },
                forced: true,
                intro: {
                    name: '沉醉',
                    content(storage, player) {
                        return `使用的下${player.storage.hyym_chenzuix}张牌无效`;
                    },
                },
                trigger: { player: 'useCard' },
                content() {
                    trigger.targets.length = 0;
                    trigger.all_excluded = true;
                    game.log(trigger.card, '被无效了');
                    player.storage.hyym_chenzuix--;
                    if (player.storage.hyym_chenzuix == 0) player.removeSkill('hyym_chenzuix');
                },
                onremove(player) {
                    player.removeMark('hyym_chenzuix');
                    player.storage.hyym_chenzuix = 0;
                },
                mod: {
                    aiOrder(player, card, num) {
                        return 99 - player.getUseValue(card);
                    },
                },
            },
            hyym_chenzuiy: {
                mark: true,
                marktext: '醉',
                init(player) {
                    if (!player.storage.hyym_chenzuiy) player.storage.hyym_chenzuiy = 0;
                },
                forced: true,
                intro: {
                    name: '沉醉',
                    content(storage, player) {
                        return '下次造成的伤害-' + player.storage.hyym_chenzuiy;
                    },
                },
                trigger: {
                    source: 'damageBegin1',
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    game.log(player, '造成的伤害因【沉醉】而-' + Math.min(player.storage.hyym_chenzuiy, trigger.num));
                    trigger.num -= player.storage.hyym_chenzuiy;
                    player.storage.hyym_chenzuiy = 0;
                    player.removeSkill('hyym_chenzuiy');
                },
                onremove(player) {
                    player.removeMark('hyym_chenzuiy');
                    player.storage.hyym_chenzuiy = 0;
                },
            },
            hyym_yujianji: {
                derivation: ['hyym_shuange', 'hyym_chongming', 'hyym_leize', 'hyym_jiwanjianguizong'],
            },
            hyym_guishenzhaoling: {},
            hyym_shuanghuoguikai: {},
            hyym_shuange: {},
            hyym_chongming: {},
            hyym_leize: {},
            hyym_jiwanjianguizong: {},
            hyym_jinghua: {},
            hyym_guifo: {},
            hyym_fanpu: {},
            hyym_fofa: {},
            hyym_zhudao: {},
            hyym_daozhuanqiankun: {
                enable: 'phaseUse',
                usable: 1,
                audio: 'ext:桃源幻梦/audio/技能配音/曹仁:1',
                changeSeat: true,
                filter(event, player) {
                    return game.players.length > 2;
                },
                content() {
                    let arr = [...game.players];
                    let num = Math.floor((arr.length - 1) / 2);
                    let indenx = arr.indexOf(player);
                    if (arr.length % 2 == 0) {
                        if (indenx - num - 1 >= 0) delete arr[indenx - num - 1];
                        else delete arr[indenx + num + 1];
                    }
                    arr = arr.filter((item) => item != undefined);
                    if (indenx - num < 0) {
                        let i = Math.abs(indenx - num);
                        let x = arr.splice(arr.length - i, i);
                        arr = [...x, ...arr];
                    }
                    if (indenx + num > arr.length - 1) {
                        let i = arr.length - 1 - indenx - num;
                        let x = arr.splice(0, i);
                        arr = [...x, ...arr];
                    }
                    for (var i = 0; i < num; i++) {
                        game.broadcastAll(
                            function (target1, target2) {
                                game.swapSeat(target1, target2);
                            },
                            arr[i],
                            arr.at(-i - 1),
                        );
                    }
                },
                ai: {
                    order: 11.9,
                    expose: 0.1,
                    result: {
                        player(player, target, skill) {
                            if (get.attitude(player, player.next) < 0 || get.attitude(player, player.previous) > 0) return 2;
                            else return -2;
                        },
                    },
                },
            },
            hyym_fenghuolun: {
                enable: 'phaseUse',
                audio: 'ext:桃源幻梦/audio/技能配音/曹仁:2',
                filter(event, player) {
                    if (player.hasSkill('hyym_fenghuolun0') && player.hasSkill('hyym_fenghuolun1')) return false;
                    if (!game.hasPlayer((current) => lib.skill.hyym_fenghuolun.filterTarget(null, player, current))) return false;
                    return player.hasCard((card) => player.canRecast(card), 'he');
                },
                filterTarget(card, player, target) {
                    if (player.previous) {
                        var targets = [player.previous, player.previous.previous];
                        if (player.hasSkill('hyym_fenghuolun0')) targets.remove(player.previous);
                        if (player.hasSkill('hyym_fenghuolun1')) targets.remove(player.previous.previous);
                        return targets.includes(target);
                    } else return false;
                },
                filterCard: (card, player) => player.canRecast(card),
                position: 'he',
                check: (card) => 10 - get.value(card),
                discard: false,
                lose: false,
                delay: false,
                ai: {
                    expose: 0.1,
                    order: 12,
                    tag: {
                        damage: 1,
                    },
                    result: {
                        target: (player, target) => get.damageEffect(target, player),
                        player(player, target) {
                            if (get.attitude(player, target) > 0 && player.hasSkill('hyym_chenzuiy')) return 99;
                            else return 0.5;
                        },
                    },
                },
                content() {
                    player.say('<span style="font-family:xingkai">与你同往,醉卧沙场也无妨!</span>');
                    player.recast(cards[0]);
                    player.addTempSkill('hyym_fenghuolun' + (target == player.previous ? 0 : 1), 'phaseUseAfter');
                    target.damage('nocard');
                },
            },
            hyym_fenghuolun0: {},
            hyym_fenghuolun1: {},
            hyym_shuangjianhebi: {
                audio: 'ext:桃源幻梦/audio/技能配音/曹丕:2',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                prompt2: '检索并获得一张指定武器牌',
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                check(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.storage.hyym_shuangjianhebi = false;
                    var list = lib.inpile.filter(function (i) {
                        if (get.subtype(i) == 'equip1') return true;
                        return false;
                    });
                    for (var i = 0; i < list.length; i++) {
                        list[i] = [get.subtype(list[i]), '', list[i]];
                    }
                    player.chooseButton([get.prompt('hyym_shuangjianhebi', trigger.player), [list, 'vcard']], true).set('ai', function (button) {
                        return Math.random();
                    });
                    ('step 1');
                    if (result.bool) {
                        var name = result.links[0][2];
                        event.vcard = result.links;
                        event.cardname = name;
                        player.popup(name);
                        game.log(player, '声明了', '#y' + get.translation(name));
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                        var card = ui.cardPile.childNodes[i];
                        if (card.name == event.cardname) {
                            player.storage.hyym_shuangjianhebi = true;
                        }
                    }
                    if (player.storage.hyym_shuangjianhebi == true) player.gain(get.cardPile2(event.cardname), 'gain2');
                    else player.gain(get.cardPile('sha'), 'gain2');
                },
                mod: {
                    ignoredHandcard(card, player) {
                        if (get.subtype(card) == 'equip1') {
                            return true;
                        }
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && get.subtype(card) == 'equip1') {
                            return false;
                        }
                    },
                },
                group: ['hyym_shuangjianhebi_1', 'hyym_shuangjianhebi_2'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        content() {
                            player.say('<span style="font-family:xingkai">尝尝我双剑的厉害!</span>');
                            player.expandEquip(1);
                        },
                    },
                    2: {
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        prompt2: '检索并获得一张指定武器牌',
                        filter(event, player) {
                            return true;
                        },
                        check(event, player) {
                            return true;
                        },
                        content() {
                            'step 0';
                            player.storage.hyym_shuangjianhebi = false;
                            var list = lib.inpile.filter(function (i) {
                                if (get.subtype(i) == 'equip1') return true;
                                return false;
                            });
                            for (var i = 0; i < list.length; i++) {
                                list[i] = [get.subtype(list[i]), '', list[i]];
                            }
                            player.chooseButton([get.prompt('hyym_shuangjianhebi', trigger.player), [list, 'vcard']], true).set('ai', function (button) {
                                return Math.random();
                            });
                            ('step 1');
                            if (result.bool) {
                                var name = result.links[0][2];
                                event.vcard = result.links;
                                event.cardname = name;
                                player.popup(name);
                                game.log(player, '声明了', '#y' + get.translation(name));
                            } else {
                                event.finish();
                            }
                            ('step 2');
                            player.say('<span style="font-family:xingkai">尔等把甄宓藏于何处？</span>');
                            for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                var card = ui.cardPile.childNodes[i];
                                if (card.name == event.cardname) {
                                    player.storage.hyym_shuangjianhebi = true;
                                }
                            }
                            if (player.storage.hyym_shuangjianhebi == true) player.gain(get.cardPile2(event.cardname), 'gain2');
                            else player.gain(get.cardPile('sha'), 'gain2');
                        },
                    },
                },
            },
            hyym_huabu: {
                audio: 'ext:桃源幻梦/audio/技能配音/曹丕:2',
                enable: 'phaseUse',
                filter(event, player) {
                    if (!player.previous) return false;
                    else if (!player.storage.hyym_huabu.includes(player.next) && !player.storage.hyym_huabu.includes(player.previous) && player.countCards('he') == 0 && player.next.storage.hyym_fengche == false && player.previous.storage.hyym_fengche == false) return false;
                    return player.countMark('hyym_huabucishu') < 6;
                },
                filterTarget(card, player, target) {
                    if (target.storage.hyym_fengche == player) return true;
                    if (player.countCards('he') == 0) return (target == player.next || target == player.previous) && player.storage.hyym_huabu.includes(target);
                    return target == player.next || target == player.previous;
                },
                init(player) {
                    if (!player.storage.hyym_huabu) player.storage.hyym_huabu = [];
                },
                mark: true,
                marktext: '滑',
                intro: {
                    name: '滑步',
                    markcount(event, player) {
                        return player.countMark('hyym_huabucishu');
                    },
                    content(storage, player) {
                        return '本轮剩余发动次数:' + (6 - player.countMark('hyym_huabucishu')) + `次<br>已风车角色:${get.translation(game.filterPlayer((play) => play.storage.hyym_fengche == player))}本回合已另对${get.translation(player.storage.hyym_huabu)}发动过此技能`;
                    },
                },
                changeSeat: true,
                content() {
                    if (!player.storage.hyym_huabu.includes(target) && !target.storage.hyym_fengche) {
                        player.chooseToDiscard('he', 1, true).set('ai', (card) => {
                            return 10 - get.value(card);
                        });
                        player.storage.hyym_huabu.push(target);
                    }
                    player.say('<span style="font-family:xingkai">星汉西流夜未央</span>');
                    game.broadcastAll(
                        function (target1, target2) {
                            game.swapSeat(target1, target2);
                        },
                        player,
                        target,
                    );
                    player.addMark('hyym_huabucishu');
                },
                group: ['hyym_huabu_1', 'hyym_huabu_2'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: { player: 'phaseEnd' },
                        filter(event, player) {
                            return true;
                        },
                        forced: true,
                        content() {
                            player.storage.hyym_huabu = [];
                        },
                    },
                    2: {
                        forced: true,
                        trigger: { global: 'roundStart' },
                        filter(event, player) {
                            return player.countMark('hyym_huabucishu') > 0;
                        },
                        forced: true,
                        content() {
                            player.removeMark('hyym_huabucishu', player.countMark('hyym_huabucishu'));
                        },
                    },
                },
                ai: {
                    order: 2,
                    expose: 0.1,
                    result: {
                        target(player, target, skill) {
                            if (!player.next) return 0;
                            else if (target == player.next && get.attitude(player, target) < 0 && game.hasPlayer((play) => play != player && get.attitude(player, play) > 0)) return -5;
                            else if (target == player.previous && get.attitude(player, target) > 0) return 4;
                            else return 0;
                        },
                    },
                },
            },
            hyym_fengche: {
                audio: 'ext:桃源幻梦/audio/技能配音/曹丕:2',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return event.source != undefined && event.source != player && event.num > 0 && event.source.isIn();
                },
                check(event, player) {
                    return get.attitude(player, event.source) < 0 && get.damageEffect(event.source, player, player) > 0;
                },
                prompt2(event, player) {
                    return `对${get.translation(event.source)}发动大反馈并造成2点伤害,结束回合`;
                },
                limited: true,
                content() {
                    'step 0';
                    player.say('<span style="font-family:xingkai">秋风萧瑟天气凉,草木摇落露为霜</span>');
                    player.awakenSkill('hyym_fengche');
                    trigger.source.storage.hyym_fengche = player;
                    if (trigger.source && trigger.source.isIn())
                        player
                            .chooseToDiscard(true, '弃置任意张武器牌', 'he', { subtype: 'equip1' }, [0, Infinity])
                            .set('ai', (card) => {
                                if (ui.selected.cards.length >= _status.event.num) return 0;
                                return 10 - get.value(card);
                            })
                            .set(
                                'num',
                                (function () {
                                    return Math.min(player.countCards('he', { subtype: 'equip1' }), trigger.source.countCards('he') - 1);
                                })(),
                            );
                    ('step 1');
                    if (trigger.source.countCards('he') > 0)
                        player.gainPlayerCard(true, trigger.source, 'he', Math.min(result.cards.length + 1, trigger.source.countCards('he'))).set('ai', function (button) {
                            return get.value(button.link);
                        });
                    trigger.source.damage(2);
                    ('step 2');
                    var evt = _status.event.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = _status.event.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        evt.finish();
                    }
                },
                ai: {
                    maixie: true,
                    maixie_defend: true,
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage') > 0.5) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                else return [1, 0, 1, -0.5];
                            }
                        },
                    },
                },
            },
            hyym_dijianyinbo: {},
            hyym_yuyibihu: {},
            hyym_meihuodibo: {},
            hyym_cangyanxianji: {
                audio: 'ext:桃源幻梦/audio/技能配音/曹操:2',
                trigger: { global: 'damageEnd' },
                //logTarget:'player',
                filter(event, player) {
                    if (!player.storage.cangyanxianji) return get.distance(player, event.player) <= 1 && event.source != undefined && event.source.isIn() && event.source != player;
                    else return (get.distance(player, event.player) <= 1 || event.player.group == 'wei') && event.source != undefined && event.source.isIn() && event.source != player;
                },
                check(event, player) {
                    if (game.hasPlayer((play) => play.hasSkill('hyym_biwushanghaitongji'))) return true;
                    else if (player.hp == 1 && player.hasCard((card) => card.name == 'shan', 'h') && !player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs') && player.countMark('hyym_cangyanxianji_1') % 3 != 2) return false;
                    else if (player.hp == 1 && player.countCards('h') == 0) return false;
                    else return get.attitude(player, event.source) < 0;
                },
                prompt(event, player) {
                    return `是否对${get.translation(event.source)}发动【苍炎献祭】？`;
                },
                prompt2(event, player) {
                    return `弃置所有手牌/失去1点体力,打${get.translation(event.source)}1滴血`;
                },
                init(player) {
                    if (!player.storage.hyym_cangyanxianji) player.storage.hyym_cangyanxianji = [''];
                },
                getInfo(player) {
                    if (!player.storage.hyym_cangyanxianji) player.storage.hyym_cangyanxianji = [''];
                    return player.storage.hyym_cangyanxianji;
                },
                content() {
                    'step 0';
                    if (player.countCards('h') == 0) {
                        player.loseHp();
                        event.goto(2);
                    } else {
                        var list1 = ['选项一', '选项二'];
                        player
                            .chooseControl(list1)
                            .set('choiceList', ['弃置所有手牌', '失去1点体力'])
                            .set('prompt', '你选择一项执行')
                            .set('ai', function () {
                                if (game.hasPlayer((play) => play.hasSkill('hyym_biwushanghaitongji'))) return '选项二';
                                else {
                                    var evt = _status.event.getTrigger(),
                                        player = evt.player,
                                        source = evt.source,
                                        card = evt.card,
                                        play = _status.event.player;
                                    if (play.hp > 1) {
                                        if (play.countCards('h') > 2) return '选项二';
                                        else return '选项一';
                                    } else {
                                        if (play.hasCard((card) => card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi', 'hs')) return '选项二';
                                        else return '选项一';
                                    }
                                }
                            });
                    }
                    ('step 1');
                    event.control = result.control;
                    if (event.control == '选项一') {
                        var hs = player.getCards('h');
                        if (hs.length) player.discard(hs);
                    }
                    if (event.control == '选项二') player.loseHp();
                    ('step 2');
                    var list2 = ['选项一', '选项二'];
                    player
                        .chooseControl(list2)
                        .set('choiceList', [`对${get.translation(trigger.source)}造成1点火焰伤害`, `令${get.translation(trigger.source)}失去1点体力`])
                        .set('prompt', `给${get.translation(trigger.source)}选一种死法`)
                        .set('ai', function () {
                            if (game.hasPlayer((play) => play.hasSkill('hyym_biwushanghaitongji'))) return '选项一';
                            else {
                                var evt = _status.event.getTrigger(),
                                    player = evt.player,
                                    source = evt.source,
                                    card = evt.card,
                                    play = _status.event.player;
                                var bool1 = !(source.hasSkillTag('maixie') || get.damageEffect(source, play, play) <= 0 || (source.hujia > 0 && source.hp == 1));
                                var bool2 = source.hasSkillTag('maixie') || get.damageEffect(source, play, play) <= 0 || (source.hujia > 0 && source.hp == 1);
                                if (bool1) return '选项一';
                                if (bool2) return '选项二';
                            }
                        });
                    ('step 3');
                    event.control = result.control;
                    if (event.control == '选项一') {
                        trigger.source.damage('fire', 1, 'nocard');
                    }
                    if (event.control == '选项二') trigger.source.loseHp();
                },
                ai: {
                    maixie: true,
                    maixie_defend: true,
                },
                group: ['hyym_cangyanxianji_1'],
                subSkill: {
                    1: {
                        mark: true,
                        marktext: '祭',
                        intro: {
                            name: '苍炎献祭',
                            content: '已累计造成$点伤害',
                        },
                        trigger: { source: 'damageSource' },
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            'step 0';
                            event.num = Math.min(trigger.num, 9);
                            ('step 1');
                            if (event.num > 0) {
                                player.addMark('hyym_cangyanxianji_1', 1);
                                player.markSkill('hyym_cangyanxianji_1');
                                event.num--;
                                if (player.countMark('hyym_cangyanxianji_1') % 3 == 0) event.goto(2);
                                else event.goto(3);
                            } else event.finish();
                            ('step 2');
                            if (!player.storage.cangyanxianji) {
                                player.recover();
                                player.draw(2);
                            } else {
                                player.recover(2);
                                player.draw();
                            }
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/曹操', ['hyym_cangyanxianjix1', 'hyym_cangyanxianjix2'].randomGet());
                            ('step 3');
                            if (event.num > 0) {
                                event.goto(1);
                            }
                        },
                    },
                },
            },
            hyym_dianxve: {
                trigger: { source: 'damageBegin2' },
                check(event, player) {
                    if (event.player.name == 'caocaomahyym') return get.attitude(player, event.player) < 0 ? event.player.isTurnedOver() : !event.player.isTurnedOver();
                    else if (game.hasPlayer((play) => play.storage.hyym_qingnangbaodian_1 && get.attitude(player, play) < 0 && get.distance(play, event.player) <= 1 && !play.storage.hyym_qingnangbaodian_1.includes(event.player)) && get.attitude(player, event.player) < 0) return false;
                    else return ((get.attitude(player, event.player) > 0 && event.player.isTurnedOver()) || (get.attitude(player, event.player) < 0 && !event.player.isTurnedOver())) && !event.player.hasSkill('hyym_zhujueguanghuan');
                },
                audio: 'ext:桃源幻梦/audio/技能配音/曹操:1',
                filter(event, player) {
                    return 5 - player.countDisabledSlot() + player.countCards('he') >= 3;
                },
                prompt(event, player) {
                    return `是否对${get.translation(event.player)}发动【点穴】？`;
                },
                ai: { expose: 0.1 },
                content() {
                    'step 0';
                    var num;
                    var map = {};
                    var list = [];
                    if (player.countMark('hyym_cangyanxianji_1') % 3 == 2) num = Math.max(Math.min(3, player.countCards('he')), Math.max(0, 3 - (5 - player.countDisabledSlot())));
                    else num = Math.max(Math.min(3, player.countCards('he') - 1), Math.max(0, 3 - (5 - player.countDisabledSlot())));
                    for (var i = Math.max(player.countDisabledSlot() - 2, 0); i <= Math.min(3, player.countCards('he')); i++) {
                        var cn = get.cnNumber(i, true);
                        map[cn] = i;
                        list.push(cn);
                    }
                    event.map = map;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '选择弃牌数量')
                        .set('goon', num);
                    ('step 1');
                    var num = event.map[result.control];
                    event.num1 = 3 - num;
                    if (num > 0)
                        player.chooseToDiscard(num, 'he', true).set('ai', (card) => {
                            if (get.position(card) == 'e') return 99 - get.value(card);
                            else return 10 - get.value(card);
                        });
                    ('step 2');
                    if (event.num1 > 0 && player.hasEnabledSlot()) {
                        player.chooseToDisable().ai = function (event, player, list) {
                            event.list1 = [];
                            event.list2 = [];
                            for (var i = 0; i < list.length; i++) {
                                event.list1.push(list[i]);
                                event.list2.push(list[i]);
                            }
                            if (player.hasCard(null, 'he')) {
                                for (var i = 1; i < 6; i++) {
                                    if (player.hasCard({ subtype: 'equip' + i }, 'he')) {
                                        list.remove('equip' + i);
                                    }
                                    if (player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                        event.list1.remove('equip' + i);
                                    }
                                }
                            }
                            if (!!list.length) return list.randomGet();
                            else if (!!event.list1.length) return event.list1.randomGet();
                            else return event.list2.randomGet();
                        };
                        event.num1--;
                    }
                    ('step 3');
                    if (event.num1 > 0) event.goto(2);
                    ('step 4');
                    trigger.player.turnOver();
                },
            },
            hyym_zhike: {
                audio: 'ext:桃源幻梦/audio/技能配音/曹操:2',
                juexingji: true,
                zhuSkill: true,
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                filter(event, player) {
                    return player.hp < 3;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_zhike');
                    player.recover();
                    player.say('<span style="font-family:xingkai">何以解忧？唯有杜康!</span>');
                    ('step 1');
                    var list = lib.skill.hyym_cangyanxianji.getInfo(player);
                    list[0] = '当一名距离不大于1的角色/魏势力角色受到伤害后,若伤害来源不为你,你可弃置所有手牌/失去1点体力,对伤害来源造成1点火焰伤害/令其失去1点体力;你每造成3点伤害后,回复2点体力并摸一张牌.';
                    player.storage.cangyanxianji = true;
                },
            },
            hyym_moyingluanwu: {},
            hyym_nongsuo: {},
            hyym_mengxiang: {
                derivation: 'hyym_hunluanyichang',
            },
            hyym_hunluanyichang: {},
            hyym_taiji: {},
            hyym_songzhong: {},
            hyym_wuji: {},
            hyym_zhuangsi: {
                trigger: { player: 'phaseJieshuBegin' },
                check(event, player) {
                    return !player.hasSkill('hyym_bianhuilai') && !player.hasSkill('hyym_bianhuilaix');
                },
                content() {
                    player.turnOver();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (!target.isTurnedOver()) return;
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                else return [0, 0];
                            }
                        },
                    },
                },
                group: 'hyym_zhuangsi_1',
                subSkill: {
                    1: {
                        trigger: { player: 'damageBegin4' },
                        forced: true,
                        _priority: 99,
                        filter(event, player) {
                            return player.isTurnedOver();
                        },
                        content() {
                            trigger.cancel();
                        },
                    },
                },
            },
            hyym_caocaomadajun: {
                audio: 'ext:桃源幻梦/audio/技能配音/草草马:1',
                trigger: { player: 'turnOverEnd' },
                filter(event, player) {
                    return !player.isTurnedOver();
                },

                forced: true,
                content() {
                    'step 0';
                    var num = Math.min(player.getDamagedHp() || 1, game.players.length - 1);
                    player
                        .chooseTarget(false, [1, num], `草草马大军:可对至多${num}名其他角色造成1点伤害`, function (card, player, target) {
                            return target != player;
                        })
                        .set('ai', function (target) {
                            let player = _status.event.player;
                            if (get.damageEffect(target, player, player) <= 0) return false;
                            else return -get.attitude(player, target) - 0.5 * target.hp;
                        });
                    ('step 1');
                    if (result.bool) {
                        player.say('<span style="font-family:xingkai">有草吃,么么哒~</span>');
                        event.target = result.targets.sortBySeat();
                    } else event.finish();
                    ('step 2');
                    for (var i = 0; i < event.target.length; i++) {
                        player.line(event.target[i], 'fire');
                        event.target[i].damage();
                    }
                },
            },
            hyym_lieyanhongchun: {
                audio: 'ext:桃源幻梦/audio/技能配音/草草马:1',
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return !current.hasSkill('hyym_lieyanhongchunx') && !current.hasSkill('hyym_lieyanhongchuny');
                    });
                },
                filterTarget(card, player, target) {
                    return !target.hasSkill('hyym_lieyanhongchunx') && !target.hasSkill('hyym_lieyanhongchuny');
                },
                prompt(event, player) {
                    return '选择一名角色,mua一口';
                },
                ai: {
                    result: {
                        target(player, target, skill) {
                            if (target == player) return 3;
                            if (get.attitude(player, target) < 0 && !game.hasPlayer((current) => get.attitude(player, current) > 0)) return -2;
                            if (get.attitude(player, target) < 0 && target.hp <= 2 && target.countCards('h') <= target.hp) return -2;
                            if (get.attitude(player, target) > 0 && target.hp > 2 && target.countCards('h') >= target.hp) return 2;
                            return 0;
                        },
                    },
                    order: 20,
                },
                content() {
                    target.addSkill('hyym_lieyanhongchunx');
                    target.markSkill('hyym_lieyanhongchunx');
                    target.storage.lieyanhongchunx++;
                },
            },
            hyym_tianleikongpo: {},
            hyym_leiqiu: {},
            hyym_chihunjingtong: {},
            hyym_yandun: {},
            hyym_hunbao: {},
            hyym_shuilaojingu: {
                audio: 'ext:桃源幻梦/audio/技能配音/大乔:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return true;
                },
                init(player) {
                    if (!player.storage.hyym_shuilaojingu) {
                        player.storage.hyym_shuilaojingu = {};
                        player.storage.shuilaojingu = [];
                    }
                },
                mark: true,
                marktext: '水',
                intro: {
                    name: '水牢禁锢',
                    content(storage, player) {
                        var map = player.storage.hyym_shuilaojingu;
                        var list = player.storage.shuilaojingu;
                        var str = '【水牢禁锢】剩余次数:';
                        for (var i = 0; i < list.length; i++) {
                            str += `<br>${get.translation(list[i])}:${map[list[i].playerid]}次`;
                        }
                        return str;
                    },
                },
                filterTarget(card, player, target) {
                    return target != player && player.storage.shuilaojingu.includes(target);
                },
                content() {
                    player.loseHp(2);
                    target.turnOver();
                    player.storage.hyym_shuilaojingu[target.playerid]--;
                    if (player.storage.hyym_shuilaojingu[target.playerid] == 0) {
                        delete player.storage.hyym_shuilaojingu[target.playerid];
                        player.storage.shuilaojingu.remove(target);
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            if ((game.hasPlayer((play) => play.name == 'huatuohyym') || target.hasSkill('hyym_zhujueguanghuan')) && player.name == 'boss_daqiaoxinmo') return 0;
                            else if (target.isTurnedOver()) return 3;
                            return -3;
                        },
                        player(player, target) {
                            var kk = player.hasSkill('hyym_sanjiqixveshangxian') || player.hasSkill('hyym_sanjiqixveshangxianx');
                            if (player.hp > (kk ? 6 : 3)) return -1;
                            else if (player.hp == (kk ? 4 : 1) && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'hyym_xiaomijiu' || card.name == 'hyym_fuhuobi'), 'hs')) return -0.5;
                            else if (player.hp == (kk ? 6 : 3) && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'tao' || card.name == 'hyym_chujiqixveyao' || card.name == 'hyym_youlingqixvetang'), 'hs')) return -1;
                            else if (player.hp == (kk ? 5 : 2) && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'tao' || card.name == 'jiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_fuhuobi'), 'hs') && (player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && card.name == 'hyym_chujiqixveyao', 'hs') || (game.filterPlayer((play) => get.attitude(player, play) <= 0 && !play.isTurnedOver())[0] == target && game.filterPlayer((play) => get.attitude(player, play) <= 0 && !play.isTurnedOver()).length == 1))) return -2;
                            else if (player.hp > (kk ? 5 : 2) && game.filterPlayer((play) => get.attitude(player, play) <= 0 && !play.isTurnedOver())[0] == target && game.filterPlayer((play) => get.attitude(player, play) <= 0 && !play.isTurnedOver()).length == 1) return -2;
                            else return -99;
                        },
                    },
                },
                group: 'hyym_shuilaojingu_1',
                subSkill: {
                    1: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        forced: true,
                        audio: 'hyym_shuilaojingu',
                        content() {
                            player.awakenSkill('hyym_shuilaojingu_1');
                            player.storage.shuilaojingu = game.filterPlayer((play) => play != player);
                            var num = player.seatNum;
                            if (player.name == 'boss_daqiaoxinmo') num = 5;
                            for (let j = 0; j < game.filterPlayer((play) => play != player).length; j++) {
                                player.storage.hyym_shuilaojingu[game.filterPlayer((play) => play != player)[j].playerid] = num;
                            }
                        },
                    },
                },
            },
            hyym_shuimudan: {
                audio: 'ext:桃源幻梦/audio/技能配音/大乔:2',
                trigger: { global: 'phaseUseBegin' },
                filter(event, player) {
                    return event.player != player && player.countCards('he') > 0;
                },
                mark: true,
                marktext: '幕',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },

                forced: true,
                content() {
                    'step 0';
                    player.chooseCard('he', '是否发动【水幕弹】？', '将一张牌置于武将牌上称为<幕>', false).set('ai', function (card) {
                        let player = _status.event.player;
                        if (player.countCards('h') == 1 && get.position(card) == 'h' && player.name == 'boss_daqiaoxinmo') return 99;
                        else if (get.attitude(player, trigger.player) < 0) {
                            if (get.type(card) == 'basic') return 15 - get.value(card);
                            else if (get.type(card, 'trick') == 'trick') return 11 - get.value(card);
                            else if (player.countCards('he') > 1) return 7.1 - get.value(card);
                        } else return 0;
                    });
                    ('step 1');
                    if (result.cards?.length) {
                        player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('hyym_shuimudan');
                    } else event.finish();
                    ('step 2');
                    if (player.countMark('charge') > 0) player.chooseBool('是否消耗1点蓄力值？').set('ai', () => false);
                    else event.finish();
                    ('step 3');
                    if (result.bool) {
                        player.removeMark('charge', 1);
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/大乔/hyym_shuimudanx.mp3');
                    }
                },
                group: ['hyym_shuimudan_1', 'hyym_shuimudan_2'],
                subSkill: {
                    1: {
                        audio: 'ext:桃源幻梦/audio/技能配音/大乔:1',
                        trigger: { target: 'useCardToTargeted' },
                        filter(event, player) {
                            return event.player == _status.currentPhase && player.getExpansions('hyym_shuimudan').length && event.card && get.type(event.card, 'trick') == get.type(player.getExpansions('hyym_shuimudan')[0], 'trick');
                        },
                        forced: true,
                        content() {
                            trigger.parent.excluded.add(player);
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (player == _status.currentPhase && target.getExpansions('hyym_shuimudan').length && get.type(card, 'trick') == get.type(target.getExpansions('hyym_shuimudan')[0], 'trick')) return 'zeroplayertarget';
                                },
                            },
                        },
                    },
                    2: {
                        trigger: { global: 'phaseUseEnd' },
                        filter(event, player) {
                            return event.player != player && player.getExpansions('hyym_shuimudan').length;
                        },
                        forced: true,
                        content() {
                            'step 0';
                            player.loseToDiscardpile(player.getExpansions('hyym_shuimudan'));
                            ('step 1');
                            if (trigger.player.isIn() && player.countCards('he') > 0 && player.canUse({ name: 'sha' }, trigger.player, false)) {
                                player
                                    .chooseCard(false, 'he', `是否将一张牌当【杀】对${get.translation(trigger.player)}使用?`, function (card) {
                                        return player.canUse({ name: 'sha' }, _status.currentPhase, false);
                                    })
                                    .set('target', trigger.player)
                                    .set('ai', function (card) {
                                        let player = _status.event.player;
                                        if (get.effect(_status.currentPhase, { name: 'sha' }, player, player) <= 0) return 0;
                                        else if (player.hp <= Math.floor(0.5 * player.maxHp) && player.countCards('h') == 1 && player.countCards('e') == 0) return 99;
                                        else return 8 - get.value(card);
                                    })
                                    .setHiddenSkill(event.name);
                            } else event.finish();
                            ('step 2');
                            if (result.bool) {
                                player.useCard({ name: 'sha' }, result.cards, false, trigger.player);
                                game.playAudio('../extension/桃源幻梦/audio/技能配音/大乔/hyym_shuimudan_21.mp3');
                            }
                        },
                    },
                },
            },
            hyym_fengjuanyu: {
                audio: 'ext:桃源幻梦/audio/技能配音/大乔:2',
                chargeSkill: true,
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.countMark('charge') == 0;
                },
                content() {
                    player.addMark('charge', 1);
                },
                ai: {
                    order: 0.1,
                    threaten: 4,
                    result: {
                        player(player, target) {
                            if (game.hasPlayer((play) => get.attitude(player, play) < 0 && get.damageEffect(play, player, player) > 0)) return 1;
                            else return 0;
                        },
                    },
                },
                group: ['hyym_fengjuanyu_1', 'hyym_fengjuanyu_2'],
                subSkill: {
                    1: {
                        audio: 'ext:桃源幻梦/audio/技能配音/大乔:1',
                        trigger: { global: 'roundStart' },
                        forced: true,
                        filter(event, player) {
                            return player.countMark('charge') > 0;
                        },
                        content() {
                            'step 0';
                            player.removeMark('charge', 1);
                            var hs = player.getCards('h');
                            if (hs.length) player.discard(hs);
                            ('step 1');
                            player
                                .chooseTarget(true, [1, game.players.length - 1], '对任意名连续的其他角色各造成1点伤害', '风卷雨蓄力成功!', function (card, player, target) {
                                    if (player == target) return false;
                                    var selected = ui.selected.targets;
                                    if (!selected.length) return true;
                                    for (var i of selected) {
                                        if (i.next == target || i.previous == target) return true;
                                    }
                                    return false;
                                })
                                .set('complexSelect', true)
                                .set('complexTarget', true)
                                .set('multitarget', true)
                                .set('multiline', true)
                                .set('ai', (target) => {
                                    if (get.attitude(player, target) < 0 && ((get.attitude(player, target.next) < 0 && get.attitude(player, target.previous) > 0) || (get.attitude(player, target.previous) < 0 && get.attitude(player, target.next) > 0))) return 2;
                                    else if (get.attitude(player, target) < 0 && get.attitude(player, target.next) < 0 && get.attitude(player, target.previous) < 0) return 1.5;
                                    else if (get.attitude(player, target) < 0 && get.attitude(player, target.next) > 0 && get.attitude(player, target.previous) > 0) return 1;
                                    else return 0;
                                });
                            ('step 2');
                            if (result.bool) {
                                var list = result.targets.sortBySeat();
                                for (var i = 0; i < list.length; i++) {
                                    player.line(list[i], 'thunder');
                                    list[i].damage();
                                }
                            }
                        },
                    },
                    2: {
                        audio: 'ext:桃源幻梦/audio/技能配音/大乔:1',
                        trigger: { player: 'damageEnd' },
                        forced: true,
                        filter(event, player) {
                            return player.getExpansions('hyym_shuimudan').length == 0 && player.countMark('charge') > 0;
                        },
                        content() {
                            player.removeMark('charge', 1);
                        },
                    },
                },
            },
            hyym_huxianfuti: {
                audio: 'ext:桃源幻梦/audio/技能配音/大乔:2',
                trigger: { global: 'phaseBegin' },
                filter(event, player) {
                    return player.hp <= Math.floor(player.maxHp * 0.5) && player.countCards('h') == 0;
                },
                check(event, player) {
                    return true;
                },
                _priority: 99,
                content() {
                    player.recover();
                },
            },
            hyym_xvezhizang: {},
            hyym_hualuanwu: {},
            hyym_yueguangyin: {},
            hyym_cangyingzhinu: {
                audio: 'ext:桃源幻梦/audio/技能配音/法正:2',
                forced: true,
                trigger: {
                    source: 'damageBegin1',
                },
                filter(event, player) {
                    return player.hp == 1 || player.countCards('h') == 0;
                },
                content() {
                    trigger.num++;
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (player.hp > 1 && get.tag(card, 'damage') > 0.5) return 0.01 * num;
                    },
                },
            },
            hyym_bulie: {
                audio: 'ext:桃源幻梦/audio/技能配音/法正:2',
                trigger: { player: ['phaseUseBegin', 'phaseUseEnd'] },
                filter(event, player) {
                    return game.hasPlayer((play) => play != player && play.countCards('h') > 0) && player.countCards('h') > 0;
                },

                enable: true,
                forced: true,
                _priority: 97,
                content() {
                    'step 0';
                    player
                        .chooseTarget(false, [1, game.players.length - 1], '捕猎:选几条小杂鱼~', function (card, player, target) {
                            return target.countCards('h') > 0 && target != player;
                        })
                        .set('targetprompt', (target) => {
                            return `第${ui.selected.targets.length}位`;
                        }).ai = function (target) {
                            return get.attitude(player, target) < 0;
                        };
                    ('step 1');
                    if (result.bool) {
                        event.list = result.targets;
                        event.num = 0;
                    } else event.finish();
                    ('step 2');
                    if (event.list[event.num].countCards('h') == 0 || player.countCards('h') == 0) {
                        event.finish();
                        return;
                    }
                    player
                        .chooseCard('请展示一张手牌', true)
                        .set('ai', function (card) {
                            var num = 0;
                            var rand = _status.event.rand;
                            if (get.cardNameLength(card) == 1) {
                                if (rand) num -= 6;
                            } else {
                                if (!rand) num -= 6;
                            }
                            var value = get.value(card);
                            if (value >= 8) return -100;
                            return num - value;
                        })
                        .set('rand', Math.random() < 0.5).prompt2 = `若与${get.translation(event.list[event.num])}展示的牌的字数的奇偶性相同,你弃置展示的牌,${get.translation(event.list[event.num])}失去1点体力`;
                    ('step 3');
                    event.card1 = result.cards[0];
                    event.list[event.num]
                        .chooseCard('请展示一张手牌', true)
                        .set('ai', function (card) {
                            var num = 0;
                            var rand = _status.event.rand;
                            if (get.cardNameLength(card) == 1) {
                                if (rand) num -= 6;
                            } else {
                                if (!rand) num -= 6;
                            }
                            var value = get.value(card);
                            if (value >= 8) return -100;
                            return num - value;
                        })
                        .set('rand', Math.random() < 0.5).prompt2 = `若与${get.translation(player)}展示的牌的字数的奇偶性相同,${get.translation(player)}弃置展示的牌,你失去1点体力`;
                    ('step 4');
                    event.card2 = result.cards[0];
                    ui.arena.classList.add('thrownhighlight');
                    game.addVideo('thrownhighlight1');
                    player.$compare(event.card1, event.list[event.num], event.card2);
                    ('step 5');
                    game.log(player, '展示了', event.card1);
                    game.log(event.list[event.num], '展示了', event.card2);
                    if (get.cardNameLength(event.card2) % 2 == get.cardNameLength(event.card1) % 2) {
                        player.discard(event.card1).animate = false;
                        event.list[event.num].$gain2(event.card2);
                        event.list[event.num].loseHp();
                        player.addTempSkill('hyym_bulie_inf', 'phaseAfter');
                        player.markAuto('hyym_bulie_inf', event.list[event.num]);
                        event.finish();
                        event.parent.cancelled = true;
                    } else {
                        player.$gain2(event.card1);
                        event.list[event.num].$gain2(event.card2);
                    }
                    ui.arena.classList.remove('thrownhighlight');
                    game.addVideo('thrownhighlight2');
                    ('step 6');
                    if (event.num < event.list.length - 1) {
                        event.num++;
                        event.goto(2);
                    }
                },
                ai: {
                    expose: 0.1,
                },
                subSkill: {
                    inf: {
                        charlotte: true,
                        forced: true,
                        intro: { content: '对$使用牌无次数限制' },
                        mod: {
                            cardUsableTarget(card, player, target) {
                                if (player.getStorage('hyym_bulie_inf').includes(target)) return true;
                            },
                            aiOrder(player, card, num) {
                                if (get.type(card) !== 'basic') return num + 20;
                            },
                        },
                    },
                },
            },
            hyym_yingji: {
                audio: 'ext:桃源幻梦/audio/技能配音/法正:2',
                trigger: { global: ['damageSource', 'loseHpEnd'] },
                forced: true,
                filter(event, player) {
                    return player == _status.currentPhase && event.player.isIn() && (!player.storage.yingji || !player.storage.yingji.includes(event.player)) && event.player != player;
                },
                logTarget: 'player',
                content() {
                    player.addTempSkill('hyym_yingji_inf', 'phaseAfter');
                    player.markSkill('hyym_yingji_inf');
                    player.storage.yingji.push(trigger.player);
                },
                subSkill: {
                    inf: {
                        onremove(player) {
                            player.storage.yingji = [];
                        },
                        intro: {
                            content(storage, player) {
                                return `本回合可将任意基本牌当无距离限制的【杀】对${get.translation(player.storage.yingji)}使用`;
                            },
                        },
                        audio: 'hyym_yingji',
                        enable: 'phaseUse',
                        filterCard(card) {
                            return get.type(card, 'trick') == 'basic';
                        },
                        selectCard: 1,
                        position: 'he',
                        viewAs: {
                            name: 'sha',
                            storage: { hyym_yingji_inf: true },
                        },
                        init(player) {
                            if (!player.storage.yingji) player.storage.yingji = [];
                        },
                        filterTarget(card, player, target) {
                            return player.storage.yingji.includes(target) && player.canUse({ name: 'sha' }, target, true, true);
                        },
                        filter(event, player) {
                            var hs = player.getCards('he');
                            if (!hs.length) return false;
                            for (var card of hs) {
                                var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                if (mod2 === false) return false;
                            }
                            return event.filterCard({ name: 'sha' }, player) && player.hasCard((card) => get.type(card) == 'basic', 'h');
                        },
                        ai1(card) {
                            return 99 - get.value(card);
                        },
                        ai2(target) {
                            let player = _status.event.player;
                            return get.effect(target, { name: 'sha' }, player, player);
                        },
                        mod: {
                            targetInRange(card, player, target) {
                                if (card.storage && card.storage.hyym_yingji_inf) return true;
                            },
                        },
                        ai: {
                            order: 10,
                            result: {
                                player(player, target, skill) {
                                    return -1;
                                },
                                target(player, target, skill) {
                                    if (player.hp == 1 || player.countCards('h') == 1) var kk = -0.8;
                                    else var kk = 0;
                                    return kk - 1;
                                },
                            },
                        },
                    },
                },
            },
            hyym_minghuoqiu: {},
            hyym_anzhimen: {},
            hyym_shenyan: {},
            hyym_zhanlongjue: {},
            hyym_xiangmozhichu: {
                trigger: { player: 'phaseUseBegin' },
                filter(event, player) {
                    return true;
                },
                check(event, player) {
                    return true;
                },
                _priority: 97,
                prompt2(event, player) {
                    var kk = 0;
                    game.filterPlayer(function (target) {
                        if (!target.getExpansions('hyym_xiangmozhichux').length) return;
                        kk += target.getExpansions('hyym_xiangmozhichux').length;
                    });
                    var ll;
                    if (game.players.length > 5) ll = 5;
                    else ll = game.players.length - 1;
                    if (kk == 0) return `令${ll}名其他角色获得<杵>`;
                    else return '获得场上所有<杵>';
                },
                audio: 'ext:桃源幻梦/audio/技能配音/关兴:2',
                content() {
                    'step 0';
                    var kk = 0;
                    game.filterPlayer(function (target) {
                        if (!target.getExpansions('hyym_xiangmozhichux').length) return;
                        kk += target.getExpansions('hyym_xiangmozhichux').length;
                    });
                    if (kk == 0) {
                        player.say('<span style="font-family:xingkai">说好了,替你一棍扫天下,怎样？</span>');
                        if (game.players.length < 7) {
                            event.tar = game.filterPlayer((play) => play != player);
                            event.goto(2);
                        } else {
                            player.chooseTarget(true, 1, '请选择五名目标角色的中位角色', function (card, player, target) {
                                return target != player && target != player.next && target != player.next.next && target != player.previous && target != player.previous.previous;
                            }).ai = function (target) {
                                if (get.attitude(player, target.next.next) < 0 && get.attitude(player, target.next) < 0 && get.attitude(player, target) < 0 && get.attitude(player, target.previous) < 0 && get.attitude(player, target.previous.previous) < 0) return 5;
                                else if ((get.attitude(player, target.next.next) < 0 && get.attitude(player, target.next) < 0 && get.attitude(player, target) < 0 && get.attitude(player, target.previous) < 0) || (get.attitude(player, target.previous.previous) < 0 && get.attitude(player, target.next) < 0 && get.attitude(player, target) < 0 && get.attitude(player, target.previous) < 0)) return 4;
                                else if ((get.attitude(player, target.next.next) < 0 && get.attitude(player, target.next) < 0 && get.attitude(player, target) < 0) || (get.attitude(player, target.next) < 0 && get.attitude(player, target) < 0 && get.attitude(player, target.previous) < 0) || (get.attitude(player, target.next) < 0 && get.attitude(player, target.previous) < 0 && get.attitude(player, target.previous.previous) < 0)) return 3;
                                else if ((get.attitude(player, target.next.next) < 0 && get.attitude(player, target.next) < 0) || (get.attitude(player, target) < 0 && get.attitude(player, target.next) < 0) || (get.attitude(player, target) < 0 && get.attitude(player, target.previous) < 0) || (get.attitude(player, target.previous) < 0 && get.attitude(player, target.previous.previous) < 0)) return 2;
                                else return 1;
                            };
                        }
                    } else {
                        player.say('<span style="font-family:xingkai">我的棍法不打狗,和乞丐也没关系!</span>');
                        for (var i of game.players) {
                            if (i.storage.hyym_xiangmozhichux) {
                                var card = i.storage.hyym_xiangmozhichux;
                                i.$give(card, player);
                                player.gain(card);
                                i.removeSkill('hyym_xiangmozhichux');
                            }
                        }
                        event.finish();
                    }
                    ('step 1');
                    event.tar = [result.targets[0].previous.previous, result.targets[0].previous, result.targets[0], result.targets[0].next, result.targets[0].next.next].sortBySeat();
                    ('step 2');
                    for (var i = 0; i < event.tar.length; i++) {
                        var card = get.cards()[0];
                        event.tar[i].addToExpansion(card, 'gain2').gaintag.add('hyym_xiangmozhichux');
                        event.tar[i].addSkill('hyym_xiangmozhichux');
                        event.tar[i].storage.hyym_xiangmozhichux = card;
                    }
                },
                group: ['hyym_xiangmozhichu_1'],
                subSkill: {
                    1: {
                        trigger: { global: 'die' },
                        forced: true,
                        nopop: true,
                        forced: true,
                        filter(event, player) {
                            return event.player.hasSkill('hyym_xiangmozhichux');
                        },
                        content() {
                            trigger.player.removeSkill('hyym_xiangmozhichux');
                        },
                    },
                },
            },
            hyym_xiangmozhichux: {
                mark: 'card',
                marktext: '杵',
                popup: false,
                content() { },
                intro: {
                    content: 'card',
                },
                onremove(player) {
                    player.storage.hyym_xiangmozhichux.discard();
                    delete player.storage.hyym_xiangmozhichux;
                },
            },
            hyym_bufeng: {
                audio: 'ext:桃源幻梦/audio/技能配音/关兴:1',
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return (event.player.next && event.player.next.hasSkill('hyym_xiangmozhichux')) || (event.player.previous && event.player.previous.hasSkill('hyym_xiangmozhichux'));
                },

                forced: true,
                content() {
                    'step 0';
                    if (trigger.player.previous && trigger.player.previous.hasSkill('hyym_xiangmozhichux')) {
                        player.chooseBool(`是否对${get.translation(trigger.player.previous)}造成1点伤害并移除其的<杵>？`).set('ai', () => get.damageEffect(trigger.player.previous, player, player) > 0);
                    }
                    ('step 1');
                    if (result.bool) {
                        trigger.player.previous.damage();
                        trigger.player.previous.removeSkill('hyym_xiangmozhichux');
                    }
                    ('step 2');
                    if (trigger.player.next && trigger.player.next.hasSkill('hyym_xiangmozhichux')) {
                        player.chooseBool(`是否对${get.translation(trigger.player.next)}造成1点伤害并移除其的<杵>？`).set('ai', () => get.damageEffect(trigger.player.next, player, player) > 0);
                    } else event.finish();
                    ('step 3');
                    if (result.bool) {
                        trigger.player.next.damage();
                        trigger.player.next.removeSkill('hyym_xiangmozhichux');
                    }
                },
            },
            hyym_foguang: {
                mark: true,
                marktext: '佛光',
                intro: {
                    name: '佛光',
                    content(storage, player) {
                        var kk;
                        var ll;
                        if (!player.countMark('hyym_foguang')) kk = 0;
                        else kk = player.countMark('hyym_foguang');
                        var kkk;
                        if (game.players.length > 5) kkk = 5;
                        else kkk = game.players.length - 1;
                        if (kk >= kkk) ll = 0;
                        else ll = kkk - kk;
                        return `距下次发动【佛光】还差${ll}点伤害.`;
                    },
                },
                audio: 'ext:桃源幻梦/audio/技能配音/关兴:2',
                trigger: { player: 'phaseJieshuBegin' },
                forced: true,
                filter(event, player) {
                    var kk;
                    if (game.players.length > 5) kk = 5;
                    else kk = game.players.length - 1;
                    return player.countMark('hyym_foguang') >= kk;
                },
                content() {
                    'step 0';
                    var kk;
                    if (game.players.length > 5) kk = 5;
                    else kk = game.players.length - 1;
                    player.removeMark('hyym_foguang', kk);
                    player.gainMaxHp();
                    player.changeHujia();
                    var skills = player.getSkills(null, false, false);
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
                group: 'hyym_foguang_1',
                subSkill: {
                    1: {
                        trigger: { source: 'damageBegin3' },
                        filter(event, player) {
                            return true;
                        },
                        forced: true,
                        audio: 'hyym_foguang',
                        content() {
                            'step 0';
                            event.num = Math.min(trigger.num, 9);
                            ('step 1');
                            player.addMark('hyym_foguang', 1);
                            event.num--;
                            ('step 2');
                            if (event.num > 0) {
                                event.goto(1);
                            }
                        },
                    },
                },
            },
            hyym_weizhenhuaxia: {
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter(event, player) {
                    return true;
                },
                audio: 'ext:桃源幻梦/audio/技能配音/关羽:2',
                content() {
                    for (var i = 0; i < game.filterPlayer((play) => play != player).length; i++) {
                        game.filterPlayer((play) => play != player)[i].addTempSkill('hyym_weizhenhuaxiax', 'phaseAfter');
                        game.filterPlayer((play) => play != player)[i].markSkill('hyym_weizhenhuaxiax');
                    }
                },
                mod: {
                    aiOrder(player, card, num) {
                        let list = ['tao', 'hyym_chujiqixveyao', 'hyym_zhongjiqixveyao', 'hyym_youlingqixvetang'];
                        if (list.includes(card.name)) return 11.99;
                    },
                },
                group: ['hyym_weizhenhuaxia_1'],
                subSkill: {
                    1: {
                        audio: 'ext:桃源幻梦/audio/技能配音/关羽:2',
                        trigger: { source: 'damageSource' },
                        forced: true,
                        filter(event, player) {
                            return event.player != player && !player.isDamaged();
                        },
                        content() {
                            trigger.player.loseHp();
                        },
                    },
                },
            },
            hyym_weizhenhuaxiax: {
                charlotte: true,
                mod: {
                    cardEnabled(card, player) {
                        if (get.color(card) == 'black') return false;
                    },
                    cardRespondable(card, player) {
                        if (get.color(card) == 'black') return false;
                    },
                    cardSavable(card, player) {
                        if (get.color(card) == 'black') return false;
                    },
                },
                mark: true,
                marktext: '震',
                intro: {
                    name: '威震华夏',
                    content: '本回合内不能使用或打出黑色牌',
                },
            },
            hyym_wushengjianglin: {
                audio: 'ext:桃源幻梦/audio/技能配音/关羽:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return true;
                },
                derivation: ['hyym_qianlidanji'],
                limited: true,
                content() {
                    'step 0';
                    player.awakenSkill('hyym_wushengjianglin');
                    player.say('<span style="font-family:xingkai">战鬼时代,由我来终结!</span>');
                    player.gainMaxHp(2);
                    player.addSkill('hyym_qianlidanji');
                    player
                        .chooseTarget([1, 2], '可对至多两名攻击范围内的其他角色各造成1点伤害', function (card, player, target) {
                            return target != player && player.inRange(target);
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            var att = -get.attitude(player, target);
                            if (get.damageEffect(target, player, player) <= 0) return false;
                            else return att - target.hp;
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets.sortBySeat();
                    } else event.finish();
                    ('step 2');
                    for (var i = 0; i < event.target.length; i++) {
                        player.line(event.target[i], 'fire');
                        event.target[i].damage();
                    }
                },
                ai: {
                    order() {
                        return 2;
                    },
                    tag: {
                        damage: 1,
                    },
                    result: {
                        player(player) {
                            return 3;
                        },
                    },
                },
            },
            hyym_qianlidanji: {
                trigger: { player: 'phaseUseBegin' },
                enable: true,
                audio: 'ext:桃源幻梦/audio/技能配音/关羽:4',
                filter(event, player) {
                    return player.isDamaged();
                },
                _priority: 99,
                prompt2: '减1点体力上限,来刀狠的',
                check(event, player) {
                    return player.countCards('hs', (card) => get.tag(card, 'damage') > 0.5 && game.filterPlayer((play) => player.canUse(card, play, false) && get.effect(play, card, player, play) < 0).length) > 0 && !player.hasSkill('hyym_chenzuiy');
                },
                content() {
                    player.loseMaxHp();
                    player.addTempSkill('hyym_qianlidanjix');
                    player.addMark('hyym_qianlidanjix');
                },
            },
            hyym_qianlidanjix: {
                mod: {
                    targetInRange(card) {
                        if (get.tag(card, 'damage') > 0.5) return true;
                    },
                },
                mark: true,
                marktext: '千',
                intro: {
                    name: '千里单骑',
                    content: '本回合使用的下一张伤害牌获得以下效果:1、无距离限制;2、无视防具;3、伤害基数+1;4、不可被红色牌响应.',
                },
                audio: 'ext:桃源幻梦/audio/技能配音/关羽:2',
                trigger: { player: 'useCard' },
                forced: true,
                filter(event, player) {
                    return get.tag(event.card, 'damage') > 0.5;
                },
                content() {
                    trigger.card.storage.qianlidanji = true;
                    trigger.baseDamage++;
                    for (var i = 0; i < game.filterPlayer().length; i++) {
                        game.filterPlayer()[i].addTempSkill('hyym_qianlidanjiy');
                        game.filterPlayer()[i].addMark('hyym_qianlidanjiy');
                    }
                    player.removeSkill('hyym_qianlidanjix');
                    player.removeMark('hyym_qianlidanjix');
                    player.addTempSkill('hyym_qianlidanjiz');
                },
            },
            hyym_qianlidanjiy: {
                mod: {
                    cardEnabled(card, player) {
                        if (get.color(card) == 'red' && _status.event.parent.card && _status.event.parent.card.storage.qianlidanji) return false;
                    },
                    cardUsable(card, player) {
                        if (get.color(card) == 'red' && _status.event.parent.card && _status.event.parent.card.storage.qianlidanji) return false;
                    },
                    cardRespondable(card, player) {
                        if (get.color(card) == 'red' && _status.event.parent.card && _status.event.parent.card.storage.qianlidanji) return false;
                    },
                },
                nopop: true,
                trigger: {
                    global: ['useCardEnd'],
                },
                mark: true,
                marktext: '封',
                intro: {
                    name: '千里单骑',
                    content: '不可使用红色牌响应此牌',
                },
                forced: true,
                firstDo: true,
                charlotte: true,
                filter(event, player) {
                    return event.card && event.card.storage.qianlidanji;
                },
                content() {
                    for (var i = 0; i < game.filterPlayer().length; i++) {
                        game.filterPlayer()[i].removeMark('hyym_qianlidanjiy');
                        game.filterPlayer()[i].removeSkill('hyym_qianlidanjiy');
                    }
                },
            },
            hyym_qianlidanjiz: {
                trigger: {
                    player: ['useCardEnd'],
                },
                ai: {
                    unequip: true,
                    skillTagFilter(player, tag, arg) {
                        return get.tag(arg.card, 'damage') > 0.5;
                    },
                },
                forced: true,
                firstDo: true,
                charlotte: true,
                filter(event, player) {
                    return event.card && event.card.storage.qianlidanji;
                },
                nopop: true,
                content() {
                    player.removeMark('hyym_qianlidanjiz');
                    player.removeSkill('hyym_qianlidanjiz');
                },
            },
            hyym_guaguliaodu: {
                audio: 'ext:桃源幻梦/audio/技能配音/关羽:2',
                enable: 'chooseToUse',
                hiddenCard(player, name) {
                    if (name == 'jiu') return true;
                },
                filter(event, player) {
                    if (!event.filterCard || !event.filterCard({ name: 'jiu', storage: { hyym_guaguliaodu: true } }, player, event)) return false;
                    return true;
                },
                mod: {
                    cardUsable(card, player) {
                        if (card.storage && card.storage.hyym_guaguliaodu) return Infinity;
                    },
                },
                limited: true,
                content() {
                    player.awakenSkill('hyym_guaguliaodu');
                    player.useCard({ name: 'jiu' }, player);
                    player.addSkill('hyym_guaguliaodux');
                    player.markSkill('hyym_guaguliaodux');
                },
                ai: {
                    order() {
                        return get.order({ name: 'jiu' }) - 0.1;
                    },
                    result: {
                        player(player) {
                            return 4;
                        },
                    },
                },
            },
            hyym_guaguliaodux: {
                forced: true,
                trigger: { global: 'phaseBegin' },
                filter(event, player) {
                    return true;
                },
                mark: true,
                marktext: '疗',
                intro: {
                    name: '刮骨疗毒',
                    content(storage, player) {
                        return `每名角色回合开始时,摸一张牌/回复1点体力,直到${get.translation(player)}于回合内执行此效果`;
                    },
                },
                audio: 'ext:桃源幻梦/audio/技能配音/关羽:2',
                content() {
                    'step 0';
                    game.playAudio('../extension/桃源幻梦/audio/技能配音/关羽', ['hyym_guaguliaodu1', 'hyym_guaguliaodu2'].randomGet());
                    if (!player.isDamaged()) {
                        player.draw();
                        if (player == trigger.player) {
                            player.removeMark('hyym_guaguliaodux');
                            player.removeSkill('hyym_guaguliaodux');
                        }
                        event.finish();
                    } else var choiceList = ['摸一张牌', '回复1点体力'];
                    player
                        .chooseControl(choiceList)
                        .set('prompt', '刮骨疗毒:选择一项执行')
                        .set('ai', function () {
                            var player = _status.event.player;
                            if (player.maxHp - player.hp > 1 || !player.hasSkill('hyym_qianlidanji')) return 1;
                            return 0;
                        });
                    ('step 1');
                    if (result.index == 0) player.draw();
                    else player.recover();
                    ('step 2');
                    if (player == trigger.player) {
                        player.removeMark('hyym_guaguliaodux');
                        player.removeSkill('hyym_guaguliaodux');
                    }
                },
            },
            hyym_jilan: {},
            hyym_feiyan: {},
            hyym_yujianxingtai: {},
            hyym_cangmingjiansuo: {},
            hyym_cangmingjianfan: {},
            hyym_cangmingjianyin: {},
            hyym_cangmingjianyu: {},
            hyym_nvwangxingtai: {},
            hyym_cangmingzhilei: {},
            hyym_fangzhu: {
                trigger: {
                    player: 'damageEnd',
                },
                forceDie: true,
                limited: true,
                filter(event, player) {
                    return event.source != undefined && event.source != player && event.num > 0 && player.countCards('he') > 0 && player.hp <= Math.floor(0.5 * player.maxHp) && get.distance(player, event.source) <= 1 && event.source.isIn() && event.source;
                },
                check(event, player) {
                    return get.damageEffect(event.source, player, player) > 0;
                },
                prompt2(event, player) {
                    return `弃置一张牌,对${get.translation(event.source)}造成1点伤害`;
                },
                content() {
                    'step 0';
                    player.chooseToDiscard('he', 1, true).set('ai', (card) => {
                        return 10 - get.value(card);
                    });
                    ('step 1');
                    trigger.source.damage();
                    player.awakenSkill('hyym_fangzhu');
                },
            },
            hyym_shouhu: {
                limited: true,
                trigger: { player: ['damageEnd', 'loseHpEnd'] },
                filter(event, player) {
                    return player.hp <= Math.floor(0.5 * player.maxHp);
                },
                check(event, player) {
                    return true;
                },
                prompt2(event, player) {
                    return '令自己下回合结束前受到的第一次伤害无效';
                },
                content() {
                    player.addMark('hyym_shouhuzhuangtai');
                    player.addSkill('hyym_shouhuzhuangtai');
                    player.awakenSkill('hyym_shouhu');
                },
            },
            hyym_xingzhejiefang: {
                //derivation:['hyym_fangzhu','hyym_shouhu'],
                trigger: { global: 'phaseBefore', player: 'enterGame' },
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    player.chooseUseTarget(true, { name: 'hyym_huangquanxingshu' });
                },
            },
            hyym_dihun: {},
            hyym_liqi: {},
            hyym_zhujueguanghuan: {
                trigger: { global: 'dying' },
                clanSkill: true,
                filter(event, player) {
                    return event.player.hasClan('天命族');
                },
                check(event, player) {
                    return get.attitude(player, event.player) > 0;
                },
                prompt2(event, player) {
                    return `对${get.translation(event.player)}进行一次苟命判定`;
                },
                content() {
                    'step 0';
                    player.judge(function (card) {
                        var type = get.type(card);
                        return ['hyym_daojv', 'hyym_longbing', 'hyym_yaopin', 'hyym_shiwu'].includes(type) || card.name == 'tao' ? 6 : -6;
                    }).judge2 = function (result) {
                        return result.bool;
                    };
                    ('step 1');
                    if (result.bool === true) {
                        trigger.player.recover(1 - trigger.player.hp);
                    }
                },
                logTarget: 'player',
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (card.name == 'guiyoujie') return [0, 0.5];
                            if (target.isTurnedOver()) {
                                if (get.tag(card, 'damage')) {
                                    if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                    if (target.hp == 1) return;
                                    return [1, target.countCards('h') / 2];
                                }
                            }
                        },
                    },
                },
                group: 'hyym_zhujueguanghuan_1',
                subSkill: {
                    1: {
                        trigger: { global: 'damageEnd' },
                        clanSkill: true,
                        filter(event, player) {
                            return event.player.hasClan('天命族') && event.player.isIn() && (event.player.isTurnedOver() || event.player.isLinked());
                        },
                        check(event, player) {
                            if (get.attitude(player, event.player) > 0) {
                                if (event.parent.name == 'hyym_kuangleitianlao' && event.player.isTurnedOver()) return false;
                                else return true;
                            } else if (event.parent.name == 'hyym_kuangleitianlao' && event.player.isTurnedOver()) return true;
                            else return false;
                        },
                        prompt2(event, player) {
                            return `令${get.translation(event.player)}复原武将牌`;
                        },
                        content() {
                            'step 0';
                            player.line(trigger.player, 'fire');
                            if (trigger.player.isTurnedOver()) trigger.player.turnOver();
                            ('step 1');
                            if (trigger.player.isLinked()) trigger.player.link();
                        },
                    },
                },
            },
            _hyym_hejiu: {
                forced: true,
                silent: true,
                forced: true,
                nopop: true,
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    return true;
                },
                content() {
                    if (player.name == 'zhangbaohyym') {
                        if (trigger.card.name == 'hyym_biandabianxiaorou' || trigger.card.name == 'hyym_xianrouzongzi') player.say('<span style="font-family:xingkai">跟着大哥有肉吃,就是少壶酒</span>');
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">有酒的不是大哥,是大爷~</span>');
                    }
                    if (player.name == 'guanxinghyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">酒,是喝的,包子,是打狗的!</span>');
                    }
                    if (player.name == 'zhangjiaohyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">再来一杯,祭我黄天!</span>');
                    }
                    if (player.name == 'caoanghyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">本帅还没有喝尽兴!</span>');
                    }
                    if (player.name == 'liubeihyym') {
                        if ((get.tag(trigger.card, 'jiu') && trigger.card.name != 'hyym_xiaomijiu' && trigger.card.name != 'hyym_guihuajiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">英雄共饮一杯吧!</span>');
                        if (trigger.card.name == 'hyym_xiaomijiu' || trigger.card.name == 'hyym_guihuajiu') player.say('<span style="font-family:xingkai">缔盟怎么能喝白开水？</span>');
                    }
                    if (player.name == 'caocaohyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">对酒当歌,人生几何!</span>');
                    }
                    if (player.name == 'sunquanhyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">好酒为乐,广纳忠言!</span>');
                    }
                    if (player.name == 'xingcaihyym') {
                        if ((get.tag(trigger.card, 'jiu') && trigger.card.name != 'hyym_xiaomijiu' && trigger.card.name != 'hyym_guihuajiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">就这样被你征服~♪</span>');
                        if (trigger.card.name == 'hyym_xiaomijiu' || trigger.card.name == 'hyym_guihuajiu') player.say('<span style="font-family:xingkai">哼,这点酒,醋溜萝卜都嫌淡!</span>');
                    }
                    if (player.name == 'caorenhyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">大风车转悠悠,美酒应当敬好友~</span>');
                    }
                    if (player.name == 'bulianshihyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">我不喜欢酒,我要天上的月亮</span>');
                    }
                    if (player.name == 'menghuohyym') {
                        if (trigger.card.name == 'hyym_biandabianxiaorou' || trigger.card.name == 'hyym_xianrouzongzi') player.say('<span style="font-family:xingkai">啊啊啊啊啊,鲜肉!</span>');
                    }
                    if (player.name == 'fazhenghyym') {
                        if ((get.tag(trigger.card, 'jiu') && trigger.card.name != 'hyym_xiaomijiu' && trigger.card.name != 'hyym_guihuajiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">人生得意须尽欢!</span>');
                        if (trigger.card.name == 'hyym_xiaomijiu' || trigger.card.name == 'hyym_guihuajiu') player.say('<span style="font-family:xingkai">浊酒？吾不饮!</span>');
                    }
                    if (player.name == 'pangdehyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">回魂酒,再来一瓶!</span>');
                    }
                    if (player.name == 'liushanhyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">未成年不能喝酒,懂？</span>');
                    }
                    if (player.name == 'guanyuhyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">瞧你这点酒量!</span>');
                    }
                    if (player.name == 'huanggaihyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">再来一瓶金鼎酒!</span>');
                    }
                    if (player.name == 'lusuhyym') {
                        if ((get.tag(trigger.card, 'jiu') && trigger.card.name != 'hyym_xiaomijiu' && trigger.card.name != 'hyym_guihuajiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">让我成为你坚强的盟友!</span>');
                        if (trigger.card.name == 'hyym_xiaomijiu' || trigger.card.name == 'hyym_guihuajiu') player.say('<span style="font-family:xingkai">缔盟怎么能喝烂酒？</span>');
                    }
                    if (player.name == 'huatuohyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">喝酒不如喝药,药,药!</span>');
                    }
                    if (player.name == 'xiaoqiaohyym') {
                        if (get.tag(trigger.card, 'jiu') || trigger.card.name == 'jiu') player.say('<span style="font-family:xingkai">哼,我是不会告诉你我叫小乔的!</span>');
                    }
                },
                group: '_hyym_hejiu_1',
                subSkill: {
                    1: {
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            var list = ['hyym_zhengzhan', 'hyym_ceshiyongjiangmingzhong', 'hyym_F5', 'hyym_shenmililiang', 'hyym_biwudahui', 'hyym_jianguotouzi', 'hyym_zhanguilaixi', 'hyym_gphone'];
                            var list1 = ['hyym_yaopin', 'hyym_daojv', 'hyym_shiwu', 'hyym_longbing'];
                            return list.includes(event.card.name) || list1.includes(get.type(event.card));
                        },
                        silent: true,
                        nopop: true,
                        forced: true,
                        content() {
                            game.playAudio('../extension/桃源幻梦/audio/卡牌配音', trigger.card.name);
                        },
                    },
                },
            },
            _hyym_sidong: {
                enable: 'phaseUse',
                filter(event, player) {
                    return player.group == 'shou';
                },
                content() {
                    'step 0';
                    var list = lib.group.slice().remove(player.group);

                    player
                        .chooseControl(list)
                        .set('prompt', '伺动:请选择要变更为的势力')
                        .set('ai', () => {
                            return _status.event.choice;
                        })
                        .set('choice', 'ling');
                    ('step 1');
                    if (_status.connectMode) {
                        game.broadcastAll(function () {
                            delete _status.noclearcountdown;
                            game.stopCountChoose();
                        });
                    }
                    var group = result.control;
                    player.changeGroup(group);
                    player.popup(group + '2', get.groupnature(group, 'raw'));
                },
                ai: {
                    order: 20,
                    result: {
                        player(player, target, skill) {
                            return 1;
                        },
                    },
                },
            },
            _hyym_lingti: {
                filter(event, player) {
                    return player.group == 'ling';
                },
                trigger: {
                    player: 'damageBefore',
                },
                prompt2(event, player) {
                    if (player.hasSkill('hyym_zhuangsi') && player.isTurnedOver()) return '温馨提示:当前您有免伤,若不为防止冰冻下牌,则无须发动';
                    else return '防止此伤害并改为失去等量体力值';
                },
                check(event, player) {
                    if (player.hasSkill('hyym_zhuangsi') && player.isTurnedOver()) return false;
                    if (player.hasSkillTag('maixie')) return false;
                    if (player.hasSkill('hyym_jidanzongzix') && player.hasCard((card) => get.value(card) < 7, 'he')) return false;
                    if (player.name == 'shenhuatuohyym' && event.parent.name == 'hyym_tenglinghuanzhong_2') return false;
                    if (event.parent.name == 'g_hyym_baihuyupei') return false;
                    if (event.num >= player.hp && event.num < player.hp + player.hujia) return false;
                    if (game.hasPlayer((play) => play.hasSkill('hyym_biwushanghaitongji'))) {
                        if (event.source && event.source.isIn() && get.attitude(player, event.source) > 0) return false;
                    }
                    if (get.damageEffect(player, event.source, player) >= 0) return false;
                    return true;
                },
                content() {
                    trigger.cancel();
                    trigger.player.loseHp(trigger.num);
                },
            },
            _hyym_huihai: {
                forced: true,
                forceDie: true,
                logTarget: 'player',
                trigger: {
                    global: ['discardBegin', 'drawBegin'],
                },
                filter(event, player) {
                    return event.parent.name == 'die' && event.parent.source == event.player && event.player != player && event.parent.player == player && player.group == 'gui';
                },
                content() {
                    trigger.cancel();
                },
                group: ['_hyym_huihai_1'],
                subSkill: {
                    1: {
                        trigger: { player: 'dyingAfter' },
                        forced: true,
                        filter(event, player) {
                            return player.isIn() && player.hasEnabledSlot() && player.group == 'gui';
                        },
                        content() {
                            player.chooseToDisable().ai = function (event, player, list) {
                                event.list1 = [];
                                event.list2 = [];
                                for (var i = 0; i < list.length; i++) {
                                    event.list1.push(list[i]);
                                    event.list2.push(list[i]);
                                }
                                if (player.hasCard(null, 'he')) {
                                    for (var i = 1; i < 6; i++) {
                                        if (player.hasCard({ subtype: 'equip' + i }, 'he')) {
                                            list.remove('equip' + i);
                                        }
                                        if (player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                            event.list1.remove('equip' + i);
                                        }
                                    }
                                }
                                if (!!list.length) return list.randomGet();
                                else if (!!event.list1.length) return event.list1.randomGet();
                                else return event.list2.randomGet();
                            };
                            if (player.hasEnabledSlot()) {
                                player.chooseToDisable().ai = function (event, player, list) {
                                    event.list1 = [];
                                    event.list2 = [];
                                    for (var i = 0; i < list.length; i++) {
                                        event.list1.push(list[i]);
                                        event.list2.push(list[i]);
                                    }
                                    if (player.hasCard(null, 'he')) {
                                        for (var i = 1; i < 6; i++) {
                                            if (player.hasCard({ subtype: 'equip' + i }, 'he')) {
                                                list.remove('equip' + i);
                                            }
                                            if (player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                                event.list1.remove('equip' + i);
                                            }
                                        }
                                    }
                                    if (!!list.length) return list.randomGet();
                                    else if (!!event.list1.length) return event.list1.randomGet();
                                    else return event.list2.randomGet();
                                };
                            }
                            player.recover();
                        },
                    },
                },
            },
            hyym_longling: {},
            hyym_jixiong: {},
            hyym_shenmang: {},
            hyym_shenzhu: {},
            hyym_zuiye: {},
            hyym_shenjue: {},
            hyym_tanli: {},
            hyym_chenhen: {},
            hyym_yuchi: {},
            hyym_jieman: {},
            hyym_guaiyi: {},
            hyym_kuaisuzhuangtian: {},
            hyym_lianzhupao: {},
            hyym_jianongpao: {},
            hyym_jiyandiyu: {},
            hyym_gujichongshi: {},
            hyym_yiyan: {},
            hyym_shenjing: {},
            hyym_fengyin: {},
            hyym_qingnangbaodian: {
                mark: true,
                marktext: '青',
                intro: {
                    name: '青囊宝典',
                    content(storage, player) {
                        return `本回合已对${get.translation(player.storage.hyym_qingnangbaodian)}发动回血效果;<br>本回合已对${get.translation(player.storage.hyym_qingnangbaodian_1)}发动印牌效果`;
                    },
                },
                audio: 'ext:桃源幻梦/audio/技能配音/华佗:2',
                init(player) {
                    if (!player.storage.hyym_qingnangbaodian) player.storage.hyym_qingnangbaodian = [];
                },
                trigger: { target: 'useCardToTarget' },
                filter(event, player) {
                    return get.distance(player, event.player) <= 1 && !player.storage.hyym_qingnangbaodian.includes(event.player);
                },
                prompt2(event, player) {
                    return `令${get.translation(event.player)}清除所有异常状态,回复1点体力并摸一张牌`;
                },
                check(event, player) {
                    return get.attitude(player, event.player) > 0;
                },
                content() {
                    'step 0';
                    player.say('<span style="font-family:xingkai">药药,切开脑~♪</span>');
                    player.storage.hyym_qingnangbaodian.push(trigger.player);
                    if (trigger.player.getExpansions('hyym_suishending_1').length) {
                        trigger.player.lose(trigger.player.getExpansions('hyym_suishending_1'));
                        trigger.player.removeSkill('hyym_suishending_1', true);
                    }
                    if (trigger.player.hasSkill('hyym_modujiaomengyanx')) {
                        trigger.player.removeSkill('hyym_modujiaomengyanx');
                    }
                    if (trigger.player.hasSkill('hyym_hunyinx')) {
                        trigger.player.removeSkill('hyym_hunyinx');
                    }
                    if (trigger.player.hasSkill('hyym_sheshenx')) {
                        trigger.player.removeMark('hyym_sheshenx');
                        trigger.player.removeSkill('hyym_sheshenx');
                    }
                    if (trigger.player.hasSkill('hyym_zhongmaox')) {
                        trigger.player.removeMark('hyym_zhongmaox');
                        trigger.player.removeSkill('hyym_zhongmaox');
                    }
                    if (trigger.player.hasSkill('hyym_jihanlingyux') && trigger.player.storage.hyym_jihanlingyux < 0) {
                        trigger.player.removeMark('hyym_jihanlingyux');
                        trigger.player.removeSkill('hyym_jihanlingyux');
                    }
                    if (trigger.player.hasSkill('hyym_zhimangzhuangtai')) {
                        trigger.player.removeMark('hyym_zhimangzhuangtai');
                        trigger.player.removeSkill('hyym_zhimangzhuangtai');
                    }
                    if (trigger.player.hasSkill('hyym_zhimangzhuangtaired')) {
                        trigger.player.removeMark('hyym_zhimangzhuangtaired');
                        trigger.player.removeSkill('hyym_zhimangzhuangtaired');
                    }
                    if (trigger.player.hasSkill('hyym_zhimangzhuangtaiblack')) {
                        trigger.player.removeMark('hyym_zhimangzhuangtaiblack');
                        trigger.player.removeSkill('hyym_zhimangzhuangtaiblack');
                    }
                    if (trigger.player.hasSkill('hyym_bawangpaoxiaoheart')) {
                        trigger.player.removeMark('hyym_bawangpaoxiaoheart');
                        trigger.player.removeSkill('hyym_bawangpaoxiaoheart');
                    }
                    if (trigger.player.hasSkill('hyym_bawangpaoxiaoclub')) {
                        trigger.player.removeMark('hyym_bawangpaoxiaoclub');
                        trigger.player.removeSkill('hyym_bawangpaoxiaoclub');
                    }
                    if (trigger.player.hasSkill('hyym_bawangpaoxiaodiamond')) {
                        trigger.player.removeMark('hyym_bawangpaoxiaodiamond');
                        trigger.player.removeSkill('hyym_bawangpaoxiaodiamond');
                    }
                    if (trigger.player.hasSkill('hyym_anxiangx')) {
                        trigger.player.removeMark('hyym_anxiangx');
                        trigger.player.removeSkill('hyym_anxiangx');
                    }
                    if (trigger.player.hasSkill('hyym_geliezhuangtai')) {
                        trigger.player.removeMark('hyym_geliezhuangtai');
                        trigger.player.removeSkill('hyym_geliezhuangtai');
                    }
                    if (trigger.player.hasSkill('hyym_huimouyixiaoz')) {
                        trigger.player.removeMark('hyym_huimouyixiaoz');
                        trigger.player.removeSkill('hyym_huimouyixiaoz');
                    }
                    if (trigger.player.hasSkill('hyym_bingjiex')) {
                        trigger.player.removeMark('hyym_bingjiex');
                        trigger.player.removeSkill('hyym_bingjiex');
                    }
                    if (trigger.player.hasSkill('hyym_huangtiansuo')) {
                        trigger.player.removeMark('hyym_huangtiansuo');
                        trigger.player.removeSkill('hyym_huangtiansuo');
                    }
                    if (trigger.player.hasSkill('hyym_tianfabiaoji')) {
                        trigger.player.removeMark('hyym_tianfabiaoji');
                        trigger.player.removeSkill('hyym_tianfabiaoji');
                    }
                    if (trigger.player.hasSkill('hyym_huanxingqv')) {
                        trigger.player.removeSkill('hyym_huanxingqv');
                    }
                    if (trigger.player.hasSkill('hyym_huanxingqvlinshi')) {
                        trigger.player.removeSkill('hyym_huanxingqvlinshi');
                    }
                    if (trigger.player.hasSkill('hyym_chenzuix')) {
                        trigger.player.removeMark('hyym_chenzuix');
                        trigger.player.removeSkill('hyym_chenzuix');
                    }
                    if (trigger.player.hasSkill('hyym_chenzuiy')) {
                        trigger.player.removeMark('hyym_chenzuiy');
                        trigger.player.removeSkill('hyym_chenzuiy');
                    }
                    ('step 1');
                    trigger.player.recover();
                    trigger.player.draw();
                    if (trigger.player != player) player.addExpose(0.1);
                },
                ai: {
                    maixie: true,
                    maixie_defend: true,
                    effect: {
                        target(card, player, target) {
                            if (target.storage.hyym_qingnangbaodian.includes(target) || target.storage.hyym_qingnangbaodian_1.includes(target) || !target.hasEnabledSlot() || player.hasSkillTag('jueqing') || player.qingnangbaodian_tmp || _status.event.getParent('useCard', true) || _status.event.getParent('_wuxie', true)) {
                                if (get.attitude(target, player) > 0) {
                                    if (get.tag(card, 'damage') > 0.5 && get.distance(target, player) <= 1 && !target.storage.hyym_qingnangbaodian.includes(player) && !player.isDamaged()) return [1, 0, 1, 1];
                                    else if (get.tag(card, 'damage') > 0.5 && get.distance(target, player) <= 1 && !target.storage.hyym_qingnangbaodian.includes(player) && player.isDamaged()) return [1, 0, 1, 3];
                                    else return;
                                } else return;
                            }
                            if (get.tag(card, 'damage') > 0.5 && target.hasEnabledSlot() && ((target.hp > 1 && target.hujia == 0) || (target.hujia > 0 && target.isDamaged()))) {
                                if (get.attitude(player, target) > 0) {
                                    if (get.attitude(target, player) > 0 && get.tag(card, 'damage') > 0.5 && get.distance(target, player) <= 1 && !target.storage.hyym_qingnangbaodian.includes(player) && !player.isDamaged()) return [1, 1, 1, 1];
                                    else if (get.attitude(target, player) > 0 && get.tag(card, 'damage') > 0.5 && get.distance(target, player) <= 1 && !target.storage.hyym_qingnangbaodian.includes(player) && player.isDamaged()) return [1, 1, 1, 3];
                                    else return [1, 1];
                                }
                                if (get.attitude(player, target) < 0 && !player.hasSkillTag('damageBonus') && !(target.countCards('he') == 0 && player.hasSkill('hyym_qianggongyaox'))) {
                                    var sha = player.getCardUsable({ name: 'sha' });
                                    player.qingnangbaodian_tmp = true;
                                    var num = player.countCards('h', function (card) {
                                        if (card.name == 'sha') {
                                            if (sha == 0) {
                                                return false;
                                            } else {
                                                sha--;
                                            }
                                        }
                                        return get.tag(card, 'damage') > 0.5 && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
                                    });
                                    delete player.qingnangbaodian_tmp;
                                    if (player.hasSkillTag('damage')) {
                                        num++;
                                    }
                                    if (num < 2) {
                                        return [1, 1];
                                    }
                                }
                            } else if (get.attitude(target, player) > 0) {
                                if (get.tag(card, 'damage') > 0.5 && get.distance(target, player) <= 1 && !target.storage.hyym_qingnangbaodian.includes(player) && !player.isDamaged()) return [1, 0, 1, 1];
                                else if (get.tag(card, 'damage') > 0.5 && get.distance(target, player) <= 1 && !target.storage.hyym_qingnangbaodian.includes(player) && player.isDamaged()) return [1, 0, 1, 3];
                                else return;
                            }
                        },
                    },
                },
                group: ['hyym_qingnangbaodian_1', 'hyym_qingnangbaodian_2'],
                subSkill: {
                    1: {
                        init(player) {
                            if (!player.storage.hyym_qingnangbaodian_1) player.storage.hyym_qingnangbaodian_1 = [];
                        },
                        audio: 'ext:桃源幻梦/audio/技能配音/华佗:2',
                        trigger: { global: 'damageEnd' },
                        filter(event, player) {
                            return get.distance(player, event.player) <= 1 && !player.storage.hyym_qingnangbaodian_1.includes(event.player) && event.player.isIn() && event.player.hasEnabledSlot();
                        },
                        prompt2(event, player) {
                            return `令${get.translation(event.player)}废除一个装备栏,复原武将牌并视为使用一张【金葫芦】`;
                        },
                        check(event, player) {
                            return get.attitude(player, event.player) > 0;
                        },
                        content() {
                            'step 0';
                            player.say('<span style="font-family:xingkai">药药,切开脑~♪</span>');
                            player.storage.hyym_qingnangbaodian_1.push(trigger.player);
                            trigger.player.chooseToDisable().ai = function (event, player, list) {
                                event.list1 = [];
                                for (var i = 0; i < list.length; i++) {
                                    event.list1.push(list[i]);
                                }
                                if (trigger.player.hasCard(null, 'e')) {
                                    for (var i = 1; i < 6; i++) {
                                        if (trigger.player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                            list.remove('equip' + i);
                                        }
                                    }
                                }
                                if (!!list.length) return list.randomGet();
                                else return event.list1.randomGet();
                            };
                            ('step 1');
                            if (trigger.player.isTurnedOver()) trigger.player.turnOver();
                            ('step 2');
                            if (trigger.player.isLinked()) trigger.player.link();
                            ('step 3');
                            trigger.player.chooseUseTarget(true, { name: 'hyym_jinhulu' });
                            if (trigger.player != player) player.addExpose(0.1);
                        },
                    },
                    2: {
                        trigger: { global: 'phaseBefore' },
                        forced: true,
                        nopop: true,
                        forced: true,
                        silent: true,
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            player.storage.hyym_qingnangbaodian = [];
                            player.storage.hyym_qingnangbaodian_1 = [];
                        },
                    },
                },
            },
            hyym_qianggongyao: {
                audio: 'ext:桃源幻梦/audio/技能配音/华佗:2',
                trigger: { player: 'phaseUseBegin' },
                filter(event, player) {
                    return true;
                },
                _priority: 97,

                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget([1, Infinity], false, '可选择【强攻药】目标', '令目标获得弃牌数等量次临时加伤Buff', function (card, player, target) {
                            return get.distance(player, target) <= 1 && !target.hasSkill('hyym_qianggongyaox') && target.countCards('he') > 0 && target.hp > 1;
                        })
                        .set('ai', function (target) {
                            let player = _status.event.player;
                            let num = Math.floor(target.hp * 0.5);
                            if (num > player.hp) num = player.hp;
                            if (target == player && (player.countCards('hs', (card) => (get.tag(card, 'damage') > 0.5 && game.filterPlayer((play) => player.canUse(card, play, true) && get.effect(play, card, player, play) < 0).length) || (card.name == 'hyym_biyingtudulongka' && !player.hasSkill('hyym_jinzhixveyu') && !player.storage.hyym_jinzhixveyujilu) || (card.name == 'hyym_zhengzhan' && get.effect(player, card, player, player) > 0)) == 0 || (player.countCards('hs', (card) => (get.tag(card, 'damage') > 0.5 && card.name != 'sha' && game.filterPlayer((play) => player.canUse(card, play, true) && get.effect(play, card, player, play) < 0).length) || (card.name == 'hyym_biyingtudulongka' && !player.hasSkill('hyym_jinzhixveyu') && !player.storage.hyym_jinzhixveyujilu) || (card.name == 'hyym_zhengzhan' && get.effect(player, card, player, player) > 0)).length == 0 && player.hasSha() && player.countCards('he') - num < 2)) && player.countCards('hs', (card) => card.name == 'wuzhong' || card.name == 'hyym_yijijineiliyao' || card.name == 'hyym_erjijineiliyao' || card.name == 'hyym_sanjijineiliyao' || card.name == 'hyym_tanghulubaozhu') == 0 && player.countCards('he') > 0 && num > 0) return 0;
                            else if (target == player && target.countCards('h') >= 2 + num) return 2;
                            if (get.attitude(player, target) > 0 && player != target && !target.hasSkill('hyym_qianggongyaox') && (target.countCards('he') > 2 || num == 1)) return 2;
                            else if (get.attitude(player, target) < 0 && !target.hasSkill('hyym_qianggongyaox') && target.countCards('he') > 0 && num > 0) return 2;
                            else return 0;
                        })
                        .set('targetprompt', (target) => {
                            let player = _status.event.player;
                            let num = Math.floor(target.hp * 0.5);
                            if (num > player.hp) num = player.hp;
                            return `弃${num}张牌`;
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets.sortBySeat();
                    } else event.finish();
                    ('step 2');
                    for (var i = 0; i < event.target.length; i++) {
                        player.line(event.target[i], 'fire');
                        let num = Math.floor(event.target[i].hp * 0.5);
                        if (num > player.hp) num = player.hp;
                        if (event.target[i].countCards('he') > 0 && num > 0)
                            event.target[i].chooseToDiscard('he', Math.min(event.target[i].countCards('he'), num), true).set('ai', (card) => {
                                let player = _status.event.player;
                                if (event.target[i] == player) {
                                    if (get.tag(card, 'damage') > 0.5 || get.subtype(card) == 'equip1' || get.subtype(card) == 'equip4' || card.name == 'hyym_hongzaozongzi') return -get.value(card);
                                    else return 20 - get.value(card);
                                } else return 10 - get.value(card);
                            });
                        event.target[i].addTempSkill('hyym_qianggongyaox', { player: 'phaseAfter' });
                        event.target[i].markSkill('hyym_qianggongyaox');
                        if (!event.target[i].storage.hyym_qianggongyaox) event.target[i].storage.hyym_qianggongyaox = 0;
                        event.target[i].storage.hyym_qianggongyaox += num;
                    }
                },
            },
            hyym_qianggongyaox: {
                mark: true,
                marktext: '强',
                intro: {
                    name: '强攻药',
                    markcount(storage, player) {
                        return player.storage.hyym_qianggongyaox;
                    },
                    content(storage, player) {
                        return `直到${get.translation(player)}下回合结束,${get.translation(player)}的下${player.storage.hyym_qianggongyaox}次造成的伤害+1`;
                    },
                },
                onremove(player) {
                    player.storage.hyym_qianggongyaox = 0;
                    player.removeMark('hyym_qianggongyaox');
                },
                forced: true,
                trigger: {
                    source: 'damageBegin1',
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    game.log(player, '触发了【强攻药】');
                    trigger.num++;
                    player.storage.hyym_qianggongyaox--;
                    if (player.storage.hyym_qianggongyaox == 0) player.removeSkill('hyym_qianggongyaox');
                },
            },
            hyym_kangfenyao: {
                audio: 'ext:桃源幻梦/audio/技能配音/华佗:2',
                enable: 'chooseToUse',
                mark: true,
                limited: true,
                init(player) {
                    player.storage.hyym_kangfenyao = false;
                },
                filter(event, player) {
                    if (player.storage.hyym_kangfenyao) return false;
                    if (event.type == 'dying') {
                        if (player != event.dying) return false;
                        return true;
                    } else if (event.parent.name == 'phaseUse') {
                        return true;
                    }
                    return false;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_kangfenyao');
                    player.storage.hyym_kangfenyao = true;
                    player.removeSkill('hyym_qingnangbaodian');
                    ('step 1');
                    player.enableEquip(['equip1', 'equip2', 'equip3', 'equip4', 'equip5']);
                    player.disableJudge();
                    ('step 2');
                    player.gainMaxHp(3);
                    ('step 3');
                    player.hp = player.maxHp;
                    ('step 4');
                    player.drawTo(player.maxHp);
                    player.addSkill('hyym_kangfenyaox');
                    player.addMark('hyym_kangfenyaox');
                },
                ai: {
                    order: 0.5,
                    skillTagFilter(player, tag, target) {
                        if (player != target || player.storage.hyym_kangfenyao) return false;
                    },
                    save: true,
                    result: {
                        player(player) {
                            if (player.hp <= 0) return 10;
                            if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
                            return 0;
                        },
                    },
                    threaten(player, target) {
                        if (!target.storage.hyym_kangfenyao) return 0.6;
                    },
                },
                intro: {
                    content: 'limited',
                },
            },
            hyym_kangfenyaox: {
                mark: true,
                marktext: '奋',
                intro: {
                    name: '亢奋药',
                    content: '结束阶段,须失去1点体力并弃一张牌',
                },
                forced: true,
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.loseHp();
                    ('step 1');
                    if (player.countCards('he') > 0)
                        player.chooseToDiscard('he', 1, true).set('ai', (card) => {
                            return 10 - get.value(card);
                        });
                },
            },
            hyym_muzhonghuo: {
                audio: 'ext:桃源幻梦/audio/技能配音/华佗:2',
                trigger: { global: 'damageBegin4' },
                filter(event, player) {
                    if (event.num <= 1) return false;
                    //if(!event.source||!event.source.isIn()) return false;
                    if (get.distance(player, event.player) > 1) return false;
                    if (player.countCards('he') < event.num - 1) return false;
                    return true;
                },

                forced: true,
                content() {
                    'step 0';
                    player.chooseToDiscard('he', trigger.num - 1, false, `是否对${get.translation(trigger.player)}发动【木中火】？`, `弃${trigger.num - 1}张牌,令此次${get.translation(trigger.player)}受到的伤害从${trigger.num}改为1`).set('ai', (card) => {
                        if (get.attitude(player, trigger.player) > 0 && !trigger.player.hasCard((card) => card.name == 'baiyin', 'e')) return 99 - get.value(card);
                        else return 0;
                    });
                    ('step 1');
                    if (result.bool) {
                        trigger.num = 1;
                    }
                },
                ai: { expose: 0.1 },
            },
            hyym_leihuangbaren: {},
            hyym_jianpo: {},
            hyym_kurouqiangxi: {
                audio: 'ext:桃源幻梦/audio/技能配音/黄盖:2',
                forced: true,
                trigger: { player: ['damageEnd', 'loseHpEnd'] },
                filter(event, player) {
                    return player.countMark('hyym_kurouqiangxi') < 10;
                },
                mark: true,
                marktext: '苦肉',
                intro: {
                    name: '苦肉强袭',
                    content(storage, player) {
                        return '使用点数不大于' + player.countMark('hyym_kurouqiangxi') + '的牌伤害基数+1且不可被响应.';
                    },
                },
                content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    ('step 1');
                    player.addMark('hyym_kurouqiangxi', 1);
                    event.num--;
                    ('step 2');
                    if (event.num > 0 && player.countMark('hyym_kurouqiangxi') < 10) {
                        event.goto(1);
                    }
                },
                ai: {
                    effect: {
                        player(card, player) {
                            if (typeof card !== 'string' && card.length && card.number <= player.countMark('hyym_kurouqiangxi')) {
                                if (get.tag(card, 'damage') > 0.5) return [1, 3];
                                else if (get.type(card) == 'trick') return [1, 0.5];
                            }
                        },
                    },
                },
                group: ['hyym_kurouqiangxi_1'],
                subSkill: {
                    1: {
                        audio: 'ext:桃源幻梦/audio/技能配音/黄盖:2',
                        forced: true,
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            return event.card && event.cards.length && event.card.number <= player.countMark('hyym_kurouqiangxi');
                        },
                        content() {
                            trigger.directHit.addArray(
                                game.filterPlayer(function (current) {
                                    return true;
                                }),
                            );
                            if (get.tag(trigger.card, 'damage')) trigger.baseDamage++;
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                return arg.card.number <= player.countMark('hyym_kurouqiangxi');
                            },
                        },
                    },
                },
            },
            hyym_sheshen: {
                audio: 'ext:桃源幻梦/audio/技能配音/黄盖:2',
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return game.hasPlayer((play) => play != player && !play.hasSkill('hyym_sheshenx'));
                },
                filterTarget(card, player, target) {
                    return target != player && !target.hasSkill('hyym_sheshenx') && !target.hasSkill('hyym_lvdouzongzix');
                },
                content() {
                    player.loseHp();
                    target.addMark('hyym_sheshenx');
                    target.addSkill('hyym_sheshenx');
                    target.storage.hyym_sheshenx = player;
                },
                group: ['hyym_sheshen_1', 'hyym_sheshen_2'],
                subSkill: {
                    1: {
                        trigger: { player: 'phaseBegin' },
                        forced: true,
                        silent: true,
                        forced: true,
                        nopop: true,
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            var list = game.filterPlayer();
                            for (var i = 0; i < list.length; i++) {
                                list[i].removeMark('hyym_sheshenx');
                                list[i].removeSkill('hyym_sheshenx');
                                delete list[i].storage.hyym_sheshenx;
                            }
                        },
                        sub: true,
                    },
                    2: {
                        silent: true,
                        forced: true,
                        nopop: true,
                        forced: true,
                        trigger: { player: 'useCardAfter' },
                        init(player) {
                            player.storage.hyym_sheshen_1 = [];
                        },
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            player.storage.hyym_sheshen_1 = game.filterPlayer((play) => get.damageEffect(play, player, player) > 0);
                        },
                    },
                },
                ai: {
                    order: 17,
                    result: {
                        player(player, target, skill) {
                            if (player.hp > 1) return -2;
                            else if (player.hp == 2 && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && card.name == 'hyym_chujiqixveyao', 'hs')) return 0;
                            else if (player.hp == 1 && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) return 0;
                            else return -99;
                        },
                        target(player, target, skill) {
                            var num1 = Math.min(
                                player.countCards('hs', function (card) {
                                    return player.canUse(card, target, true, true) && card.name != 'sha' && (get.effect(target, card, player, target) < 0 || card.name == 'wugu' || card.name == 'taoyuan');
                                }) +
                                player.countCards('hs', function (card) {
                                    return player.canUse(card, target, true, true) && (card.name == 'guohe' || card.name == 'shunshou') && get.effect(target, card, player, target) < 0;
                                }),
                                target.countCards('he'),
                            );
                            var num11 = Math.min(
                                player.countCards('hs', function (card) {
                                    return player.canUse(card, target, true, true) && card.name != 'sha' && (get.effect(target, card, player, target) < 0 || card.name == 'wugu' || card.name == 'taoyuan');
                                }),
                                target.countCards('he'),
                            );
                            var num2 = player.countCards('hs', function (card) {
                                return player.canUse(card, target, true, true) && get.effect(target, card, player, target) < 0 && get.tag(card, 'damage') > 0.5 && card.name != 'sha';
                            });
                            var num3 = Math.min(
                                player.countCards('hs', function (card) {
                                    return player.canUse(card, target, true, true) && card.name == 'sha';
                                }),
                                player.getCardUsable('sha'),
                            );
                            var num4 = Math.min(
                                player.countCards('hs', function (card) {
                                    return player.canUse(card, target, true, true) && card.name == 'sha' && get.effect(target, card, player, target) < 0;
                                }),
                                player.getCardUsable('sha'),
                            );
                            if (target.countCards('h') > 0) var num = -num11 - 2 * num2 - num3 - num4;
                            else var num = -num11 - 2 * num2 - num3 - 2 * num4;
                            if ((num1 + num3 >= target.countCards('he') || target.countCards('h') == 0) && get.distance(player, target, 'pure') <= 2) num -= 3;
                            return num + target.hp * 0.01;
                        },
                    },
                },
            },
            hyym_sheshenx: {
                audio: 'ext:桃源幻梦/audio/技能配音/黄盖:1',
                mark: true,
                marktext: '舍',
                intro: {
                    name: '舍身',
                    content(storage, player) {
                        return `直到${get.translation(player.storage.hyym_sheshenx)}下回合开始,${get.translation(player)}每次成为${get.translation(player.storage.hyym_sheshenx)}牌的目标时须弃一张牌,每次受到${get.translation(player.storage.hyym_sheshenx)}的伤害+1且视为火焰伤害`;
                    },
                },
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    return event.player == player.storage.hyym_sheshenx;
                },
                forced: true,
                content() {
                    if (player.countCards('he') > 0)
                        player.chooseToDiscard(1, 'he', true).set('ai', (card) => {
                            if (card.name == 'tengjia' && get.position(card) == 'e') return 99;
                            else return 10 - get.value(card);
                        });
                },
                group: 'hyym_sheshenx_1',
                subSkill: {
                    1: {
                        audio: 'ext:桃源幻梦/audio/技能配音/黄盖:1',
                        trigger: { player: 'damageBegin1' },
                        filter(event, player) {
                            return event.source == player.storage.hyym_sheshenx;
                        },
                        forced: true,
                        content() {
                            game.log(player, '触发了【舍身】');
                            trigger.num++;
                            game.setNature(trigger, 'fire');
                        },
                    },
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (player == target.storage.hyym_sheshenx && card.name != 'tao') {
                                if (get.tag(card, 'damage') > 0.5) {
                                    if (player.storage.hyym_sheshen_1.includes(target)) {
                                        var kk = 0;
                                        if ((target.countCards('h') == 0 && target.countCards('e') > 0) || target.countCards('he') == 1) kk -= 3;
                                        else kk -= 2;
                                        if (target.isLinked() && game.filterPlayer((play) => play.isLinked() && play != target && get.attitude(player, play) < 0).length) kk -= game.filterPlayer((play) => play.isLinked() && play != target && get.attitude(player, play) < 0).length;
                                        return [1, kk];
                                    } else return;
                                } else if (target.countCards('he') > 0) return [1, -1];
                            }
                        },
                    },
                },
            },
            hyym_zhongmao: {
                audio: 'ext:桃源幻梦/audio/技能配音/黄盖:2',
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    if (!event.cards) return false;
                    else {
                        var list1 = [];
                        if (Array.isArray(event.cards))
                            for (var i of event.cards) {
                                if (!list1.includes(i.suit) && (!event.player.storage.zhongmaox || !event.player.storage.zhongmaox.includes(i.suit))) list1.push(i.suit);
                            }
                        var list2 = Array.from(new Set(list1));
                        return event.card && event.cards.length && event.player.isIn() && list2.length && event.player != player && !event.player.hasSkill('hyym_lvdouzongzix');
                    }
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                prompt2(event, player) {
                    var list1 = [];
                    if (Array.isArray(event.cards))
                        for (var i of event.cards) {
                            if (!list1.includes(i.suit) && (!event.player.storage.zhongmaox || !event.player.storage.zhongmaox.includes(i.suit))) list1.push(i.suit);
                        }
                    var list2 = Array.from(new Set(list1));
                    return `令${get.translation(event.player)}不能使用/打出${get.translation(list2)}牌直到其下回合结束`;
                },
                content() {
                    'step 0';
                    event.list = [];
                    if (Array.isArray(trigger.cards))
                        for (var i of trigger.cards) {
                            if (!event.list.includes(i.suit)) event.list.push(i.suit);
                        }
                    ('step 1');
                    if (!trigger.player.hasSkill('hyym_zhongmaox')) {
                        trigger.player.addSkill('hyym_zhongmaox');
                        trigger.player.addMark('hyym_zhongmaox');
                    }
                    ('step 2');
                    var list2 = Array.from(new Set(event.list));
                    for (var i = 0; i < list2.length; i++) {
                        if (!trigger.player.storage.zhongmaox.includes(list2[i])) trigger.player.storage.zhongmaox.push(list2[i]);
                    }
                },
            },
            hyym_zhongmaox: {
                mark: true,
                marktext: '锚',
                intro: {
                    name: '重锚',
                    markcount(storage, player) {
                        if (player.storage.zhongmaox) return player.storage.zhongmaox.length;
                        else return 0;
                    },
                    content(storage, player) {
                        return `不能使用/打出${get.translation(player.storage.zhongmaox)}牌直到回合结束`;
                    },
                },
                init(player) {
                    if (!player.storage.zhongmaox) player.storage.zhongmaox = [];
                },
                mod: {
                    cardEnabled(card, player) {
                        if (player.storage.zhongmaox.includes(card.suit)) return false;
                    },
                    cardRespondable(card, player) {
                        if (player.storage.zhongmaox.includes(card.suit)) return false;
                    },
                    cardSavable(card, player) {
                        if (player.storage.zhongmaox.includes(card.suit)) return false;
                    },
                },
                onremove(player) {
                    player.storage.zhongmaox = [];
                },
                group: 'hyym_zhongmaox_1',
                subSkill: {
                    1: {
                        trigger: { player: 'phaseEnd' },
                        forced: true,
                        silent: true,
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            player.removeMark('hyym_zhongmaox');
                            player.removeSkill('hyym_zhongmaox');
                        },
                    },
                },
            },
            hyym_bowen: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return true;
                },
                prompt2: '来一次炸鱼',
                audio: 'ext:桃源幻梦/audio/技能配音/黄盖:2',
                check(event, player) {
                    var list = Array.from(new Set([player.previous.previous, player.previous, player, player.next, player.next.next]));
                    var aa = 0;
                    var bb = 0;
                    var cc = 0;
                    var dd = 0;
                    var ee = 0;
                    var ff = 0;
                    for (var i = 0; i < list.length; i++) {
                        if (list[i].hasSkill('hyym_sheshenx') && list[i].countCards('h') == 0 && get.damageEffect(list[i], player, player) > 0) ee++;
                        else if (get.attitude(player, list[i]) < 0 && list[i].hp == 1 && list[i].hujia == 0 && get.damageEffect(list[i], player, player) > 0 && list[i].countCards('h') == 0 && player.hp + player.hujia > 1 && player.countCards('h') == 0) ff++;
                        else if (list[i].countCards('h') == 0) {
                            if (get.damageEffect(list[i], player, player) > 0) {
                                bb++;
                                dd++;
                            } else if (get.damageEffect(list[i], player, player) < 0) {
                                aa++;
                                cc++;
                            }
                        } else {
                            if (get.attitude(player, list[i]) > 0) aa++;
                            else if (get.attitude(player, list[i]) < 0) bb++;
                        }
                    }
                    if (player.hp == 1 && player.countCards('h') == 0 && !game.hasPlayer((play) => get.attitude(player, play) > 0)) return false;
                    else return (((bb > aa && dd >= cc) || (bb >= aa && dd > cc)) && (player.countCards('h') > 0 || get.damageEffect(player, player, player) == 0)) || ee > 0 || ff > 0;
                },
                content() {
                    'step 0';
                    event.list = Array.from(new Set([player.previous.previous, player.previous, player, player.next, player.next.next])).sortBySeat();
                    event.num = 0;
                    ('step 1');
                    if (event.list[event.num].isIn()) {
                        if (event.list[event.num].countCards('h') > 0) player.discardPlayerCard(event.list[event.num], 'h', true);
                        else event.list[event.num].damage();
                    }
                    event.num++;
                    ('step 2');
                    if (event.num < event.list.length) event.goto(1);
                },
            },
            hyym_bingfenglujing: {
                audio: 'ext:桃源幻梦/audio/技能配音/黄月英:2',
                trigger: { global: 'damageEnd' },
                filter(event, player) {
                    return event.num > 0 && event.hasNature('ice') && event.player.isIn();
                },
                check(event, player) {
                    if (player.isPhaseUsing() && player.countCards('he') >= 2 && (!event.player.hasSkill('hyym_bingfenglujingx') || event.player.countMark('hyym_bingfenglujingx') == 1)) return true;
                    else if (event.player.countMark('hyym_bingfenglujingx') == 2 && get.attitude(player, event.player) < 0 && event.player.isTurnedOver()) return false;
                    else return get.attitude(player, event.player) < 0;
                },
                prompt2(event, player) {
                    if (!event.player.hasSkill('hyym_bingfenglujingx')) return `令${get.translation(event.player)}获得1枚<冰封>`;
                    else if (event.player.countMark('hyym_bingfenglujingx') == 1) return `令${get.translation(event.player)}获得1枚<冰封>,你弃置${get.translation(event.player)}一张牌`;
                    else return `令${get.translation(event.player)}获得1枚<冰封>,令${get.translation(event.player)}翻面并移除所有<冰封>`;
                },
                content() {
                    'step 0';
                    delete player.getStat().skill.hyym_jihanlingyu;
                    event.num = Math.min(trigger.num, 9);
                    ('step 1');
                    if (!trigger.player.hasSkill('hyym_bingfenglujingx')) trigger.player.addSkill('hyym_bingfenglujingx');
                    trigger.player.addMark('hyym_bingfenglujingx');
                    trigger.player.markSkill('hyym_bingfenglujingx');
                    event.num--;
                    ('step 2');
                    if (trigger.player.countMark('hyym_bingfenglujingx') == 2 && trigger.player.countCards('he') > 0) player.discardPlayerCard(trigger.player, 'he', true).ai = get.buttonValue;
                    if (trigger.player.countMark('hyym_bingfenglujingx') == 3) {
                        trigger.player.turnOver();
                        trigger.player.removeMark('hyym_bingfenglujingx', 3);
                        trigger.player.removeSkill('hyym_bingfenglujingx');
                    }
                    ('step 3');
                    if (event.num > 0) {
                        if (!trigger.player.hasSkill('hyym_bingfenglujingx')) event.ll = `令${get.translation(trigger.player)}获得1枚<冰封>`;
                        else if (trigger.player.countMark('hyym_bingfenglujingx') == 1) event.ll = `令${get.translation(trigger.player)}获得1枚<冰封>,你弃置${get.translation(trigger.player)}一张牌`;
                        else event.ll = `令${get.translation(trigger.player)}获得1枚<冰封>,令${get.translation(trigger.player)}翻面并移除所有<冰封>`;
                        player.chooseBool(get.prompt('hyym_bingfenglujing'), event.ll).set('ai', () => get.attitude(player, trigger.player) < 0);
                    } else {
                        event.finish();
                    }
                    ('step 4');
                    if (result.bool) {
                        event.goto(1);
                    }
                },
                ai: {
                    effect: {
                        player(card, player, target) {
                            if (!target || typeof card === 'string') return;
                            else if (player.getStat().skill.hyym_jihanlingyu && get.tag(card, 'damage') > 0.5 && get.attitude(player, target) <= 0) return [1, 2];
                        },
                    },
                },
            },
            hyym_bingfenglujingx: {
                mark: true,
                marktext: '冰封',
                intro: {
                    name: '冰封',
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage') > 0.5 && (get.tag(card, 'iceDamage') || target.hasSkill('hyym_jihanlingyuz') || player.hasSkill('hyym_jihanlingyuy'))) {
                                if (player.countMark('hyym_bingfenglujingx') == 1) return [1, -1];
                                else return [1, -3];
                            }
                        },
                    },
                },
            },
            hyym_jihanlingyu: {
                enable: 'phaseUse',
                usable: 1,
                audio: 'ext:桃源幻梦/audio/技能配音/黄月英:2',
                filter(event, player) {
                    return player.countCards('he') >= 2;
                },
                prompt: '弃至少两张牌,创造一个对应大小的极寒领域,令己方(你双倍)回蓝,敌方减蓝',
                position: 'he',
                filterCard: true,
                selectCard: [2, Infinity],
                check(card) {
                    if (ui.selected.cards.length >= 2 && (_status.event.player.countCards('h') - ui.selected.cards.length <= _status.event.player.getHandcardLimit() + 1 || ui.selected.cards.length >= game.players.length - 1)) return 0;
                    else return 9 - get.value(card);
                },
                content() {
                    'step 0';
                    player.addSkill('hyym_jihanlingyux');
                    player.markSkill('hyym_jihanlingyux');
                    player.storage.hyym_jihanlingyux += 2;
                    player.addSkill('hyym_jihanlingyuy');
                    player.markSkill('hyym_jihanlingyuy');
                    player.storage.hyym_jihanlingyuy = player;
                    player
                        .chooseTarget(false, [1, Math.min(cards.length, game.players.length - 1)], `令至多${Math.min(cards.length, game.players.length - 1)}名其他角色获得极寒领域Buff/Debuff`, function (card, player, target) {
                            return target != player;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            if (get.attitude(player, target) < 0 && (target.hasSkill('hyym_lvdouzongzix') || (target.storage.hyym_jihanlingyux && target.storage.hyym_jihanlingyux <= -2))) return 0;
                            else if (get.attitude(player, target) < 0 && target.storage.hyym_jihanlingyux && target.storage.hyym_jihanlingyux == -1) return 98 - get.attitude(player, target);
                            else return 99 - get.attitude(player, target);
                        });
                    ('step 1');
                    if (!result.bool) event.finish();
                    else {
                        event.tar = result.targets.sortBySeat();
                        event.num = result.targets.length;
                        event.num1 = 0;
                    }
                    ('step 2');
                    let list = ['选项一', '选项二'];
                    player
                        .chooseControl(list)
                        .set('choiceList', [`令${get.translation(event.tar[event.num1])}下个摸排阶段摸牌数+1,且直到你下回合开始,其造成的伤害均视为冰冻伤害`, `令${get.translation(event.tar[event.num1])}下个摸排阶段摸牌数-1,且直到你下回合开始,其受到的伤害均视为冰冻伤害`])
                        .set('prompt', `令${get.translation(event.tar[event.num1])}进入极寒领域并回蓝/减蓝`)
                        .set('ai', function () {
                            if (get.attitude(player, event.tar[event.num1]) > 0) return '选项一';
                            if (get.attitude(player, event.tar[event.num1]) <= 0) return '选项二';
                        });
                    ('step 3');
                    event.control = result.control;
                    if (event.control == '选项一') {
                        player.line(event.tar[event.num1], 'thunder');
                        event.tar[event.num1].addSkill('hyym_jihanlingyux');
                        event.tar[event.num1].markSkill('hyym_jihanlingyux');
                        event.tar[event.num1].storage.hyym_jihanlingyux++;
                        event.tar[event.num1].addSkill('hyym_jihanlingyuy');
                        event.tar[event.num1].markSkill('hyym_jihanlingyuy');
                        event.tar[event.num1].storage.hyym_jihanlingyuy = player;
                    }
                    if (event.control == '选项二') {
                        player.line(event.tar[event.num1], 'thunder');
                        if (!event.tar[event.num1].hasSkill('hyym_lvdouzongzix')) {
                            event.tar[event.num1].addSkill('hyym_jihanlingyux');
                            event.tar[event.num1].markSkill('hyym_jihanlingyux');
                            event.tar[event.num1].storage.hyym_jihanlingyux--;
                        }
                        event.tar[event.num1].addSkill('hyym_jihanlingyuz');
                        event.tar[event.num1].markSkill('hyym_jihanlingyuz');
                        event.tar[event.num1].storage.hyym_jihanlingyuz = player;
                    }
                    event.num1++;
                    if (event.num1 < event.num) event.goto(2);
                },
                group: 'hyym_jihanlingyu_1',
                subSkill: {
                    1: {
                        forced: true,
                        silent: true,
                        trigger: { player: 'phaseBegin' },
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            for (var i = 0; i < game.filterPlayer().length; i++) {
                                game.filterPlayer()[i].removeMark('hyym_jihanlingyuy');
                                game.filterPlayer()[i].removeSkill('hyym_jihanlingyuy');
                                game.filterPlayer()[i].removeMark('hyym_jihanlingyuz');
                                game.filterPlayer()[i].removeSkill('hyym_jihanlingyuz');
                            }
                        },
                    },
                },
                ai: {
                    order: 15,
                    result: {
                        player(player, target, skill) {
                            return 5;
                        },
                    },
                },
            },
            hyym_jihanlingyux: {
                trigger: { player: 'phaseDrawBegin' },
                forced: true,
                mark: true,
                marktext: '寒',
                charlotte: true,
                init(player, skill) {
                    if (!player.storage[skill]) player.storage[skill] = 0;
                },
                intro: {
                    name: '极寒领域',
                    content(storage, player) {
                        if (player.storage.hyym_jihanlingyux > 0) return '下个摸牌阶段摸牌数+' + player.storage.hyym_jihanlingyux;
                        if (player.storage.hyym_jihanlingyux < 0) return '下个摸牌阶段摸牌数' + player.storage.hyym_jihanlingyux;
                    },
                },
                content() {
                    if (player.storage.hyym_jihanlingyux > 0) game.playAudio('../extension/桃源幻梦/audio/技能配音/黄月英/hyym_jihanlingyux1.mp3');
                    if (player.storage.hyym_jihanlingyux < 0) game.playAudio('../extension/桃源幻梦/audio/技能配音/黄月英/hyym_jihanlingyux2.mp3');
                    trigger.num += player.storage.hyym_jihanlingyux;
                    player.removeSkill('hyym_jihanlingyux');
                },
            },
            hyym_jihanlingyuy: {
                mark: true,
                marktext: '寒',
                intro: {
                    name: '极寒领域',
                    content(storage, player) {
                        return `直到${get.translation(player.storage.hyym_jihanlingyuy)}下回合开始,${get.translation(player)}造成的伤害均视为冰冻伤害`;
                    },
                },
                forced: true,
                trigger: { source: 'damageBegin1' },
                filter(event, player) {
                    return !event.hasNature('ice');
                },
                content() {
                    game.setNature(trigger, 'ice');
                },
            },
            hyym_jihanlingyuz: {
                mark: true,
                marktext: '寒',
                intro: {
                    name: '极寒领域',
                    content(storage, player) {
                        return `直到${get.translation(player.storage.hyym_jihanlingyuz)}下回合开始,${get.translation(player)}受到的伤害均视为冰冻伤害`;
                    },
                },
                forced: true,
                trigger: { player: 'damageBegin1' },
                filter(event, player) {
                    return !event.hasNature('ice');
                },
                content() {
                    game.setNature(trigger, 'ice');
                },
            },
            hyym_jinzhixveyu: {
                audio: 'ext:桃源幻梦/audio/技能配音/黄月英:2',
                forceDie: true,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player;
                },
                limited: true,
                multitarget: true,
                multiline: true,
                selectTarget() {
                    var player = _status.event.player;
                    var info = lib.character[player.name];
                    var skills = player.getSkills();
                    var list = [];
                    for (var i = 0; i < info[3].length; i++) {
                        if (skills.includes(info[3][i])) {
                            list.push(info[3][i]);
                        }
                    }
                    return [1, list.length];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.storage.hyym_jinzhixveyujilu = true;
                    targets.sortBySeat();
                    ('step 1');
                    player.loseHp();
                    player.awakenSkill('hyym_jinzhixveyu');
                    event.num = 0;
                    ('step 2');
                    if (targets[event.num].isIn()) targets[event.num].damage('ice', 1, 'nocard');
                    event.num++;
                    ('step 3');
                    if (event.num < targets.length) event.goto(2);
                },
                ai: {
                    order(item, player) {
                        if (player.hp == 1 && !player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) return 0.1;
                        else if (player.name == 'zhangbaohyym') {
                            if (player.hp > 1) return 0.11;
                            else return 0.09;
                        } else return 10;
                    },
                    tag: {
                        damage: 1,
                        iceDamage: 1,
                        natureDamage: 1,
                    },
                    result: {
                        player(player, target, skill) {
                            if ((game.filterPlayer((play) => play != player && get.attitude(player, play) > 0).length == 0 || player.identity == 'zhu' || player.identity == 'nei' || (get.mode() == '天命之战' && player.side == game.boss.side)) && player.hp == 1 && !player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) return -99;
                            else return -0.5;
                        },
                        target(player, target, skill) {
                            if ((game.filterPlayer((play) => play != player && get.attitude(player, play) > 0).length == 0 || player.identity == 'zhu' || player.identity == 'nei' || (get.mode() == '天命之战' && player.side == game.boss.side)) && player.hp == 1 && !player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) return 0;
                            else {
                                if (get.damageEffect(target, player, target) == 0 && target.countCards('he') == 0) return 0;
                                else if (get.damageEffect(target, player, target) == 0 && target.countCards('he') == 1 && !game.hasPlayer((play) => play != player && play != target && (get.damageEffect(play, player, play) < 0 || play.countCards('he') > 0) && get.attitude(player, play) < 0)) return -0.3;
                                else if (get.damageEffect(target, player, target) == 0 && target.countCards('he') == 1 && game.hasPlayer((play) => play != player && play != target && (get.damageEffect(play, player, play) < 0 || play.countCards('he') > 0) && get.attitude(player, play) < 0)) return -2;
                                else if (get.damageEffect(target, player, target) == 0 && target.countCards('he') >= 2) return -2;
                                else return get.damageEffect(target, player, target);
                            }
                        },
                    },
                },
            },
            hyym_diaogongxveren: {},
            hyym_jianmuliaoyuan: {},
            hyym_wangongyinyu: {},
            hyym_tiangouxingtai: {},
            hyym_yueguang: {},
            hyym_xuanya: {},
            hyym_huodouxingtai: {},
            hyym_lieya: {},
            hyym_tiangouzhinu: {},
            hyym_lingyue: {},
            hyym_duanliecangqiong: {},
            hyym_lianci: {},
            hyym_yuhuang: {},
            hyym_gedangfanji: {},
            hyym_xiuluoanmang: {
                derivation: ['hyym_chuanxinci', 'hyym_tieqi'],
            },
            hyym_zhanshenguanghua: {
                derivation: ['hyym_hanmang', 'hyym_pojun'],
            },
            hyym_wanjun: {},
            hyym_mingjingzhishui: {},
            hyym_xuanhui: {},
            hyym_mengliezhuiji: {},
            hyym_suhui: {
                derivation: 'hyym_muyufenxin',
            },
            hyym_yirenzhisi: {},
            hyym_suyou: {},
            hyym_muyufenxin: {},
            hyym_cixiongjianwu: {
                audio: 'ext:桃源幻梦/audio/技能配音/刘备:1',
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                init(player) {
                    if (!player.storage.hyym_cixiongjianwu) player.storage.hyym_cixiongjianwu = [''];
                },
                getInfo(player) {
                    if (!player.storage.hyym_cixiongjianwu) player.storage.hyym_cixiongjianwu = [''];
                    return player.storage.hyym_cixiongjianwu;
                },
                filter(event, player) {
                    return !player.hasCard((card) => card.name == 'cixiong', 'he');
                },
                content() {
                    var card1 = get.cardPile(function (card) {
                        return card.name == 'cixiong';
                    });
                    if (card1 != null) var card = card1;
                    else {
                        card = game.createCard2('cixiong', lib.suit.randomGet(), Math.floor(Math.random() * 13) + 1);
                        lib.inpile.push('cixiong');
                    }
                    player.gain(card, 'gain2');
                },
                group: ['hyym_cixiongjianwu_1', 'hyym_cixiongjianwu_2'],
                subSkill: {
                    1: {
                        audio: 'ext:桃源幻梦/audio/技能配音/刘备:1',
                        shaRelated: true,
                        trigger: { player: 'useCardToPlayered' },

                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && player.countCards('e', (card) => card.name == 'cixiong') > 0 && event.target.countCards('he') > 0;
                        },

                        ai: {
                            effect: {
                                player(card, player, target) {
                                    if (!target || typeof card === 'string') return;
                                    else if (card.name == 'cixiong') return [1, 2];
                                },
                            },
                        },
                        forced: true,
                        logTarget: 'target',
                        preHidden: true,
                        content() {
                            'step 0';
                            player.chooseToDiscard('he', 1, false, `是否对${get.translation(trigger.target)}发动【雌雄剑舞】？`, `弃一张牌,令${get.translation(trigger.target)}交给你一张牌`).set('ai', (card) => {
                                if (get.attitude(player, trigger.target) > 0) return 0;
                                else {
                                    if (card.name == 'cixiong' && player.getCardUsable('sha') > 0) return 0.1;
                                    else if (card.name == 'cixiong' && player.getCardUsable('sha') == 0) return 15;
                                    else return 10 - get.value(card);
                                }
                            });
                            ('step 1');
                            if (result.bool) {
                                trigger.target.chooseCard('he', true, '雌雄剑舞:将一张牌交给' + get.translation(player)).set('ai', function (card) {
                                    if (card.name == 'sha') return 0.1;
                                    else return 10 - get.value(card);
                                });
                            } else event.finish();
                            ('step 2');
                            trigger.target.give(result.cards[0], player, true);
                            event.card = result.cards[0];
                            ('step 3');
                            if (event.card.name == 'sha' && player.canUse('sha', trigger.target, false) && player.getCards('h').includes(event.card)) {
                                player.useCard(event.card, trigger.target, false);
                                event.finish();
                            } else if (event.card.name != 'sha')
                                player.chooseCard('he', '是否将一张牌重铸为【杀】？').set('ai', function (card) {
                                    let player = _status.event.player;
                                    if (player.getCardUsable('sha') > 0) return 16 - get.value(card);
                                    else if (card.name == 'sha') return 0;
                                    else return 7 - get.value(card);
                                });
                            ('step 4');
                            if (result.bool) {
                                player.lose(result.cards[0], ui.discardPile);
                                player.$throw(result.cards[0]);
                                game.log(player, '将', result.cards[0], '置入了弃牌堆');
                                var list = [];
                                for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                    var card = ui.cardPile.childNodes[i];
                                    if (card.name == 'sha') {
                                        list.push(card);
                                    }
                                }
                                if (list.length == 0) {
                                    for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                        var card = ui.discardPile.childNodes[i];
                                        if (card.name == 'sha') {
                                            list.push(card);
                                        }
                                    }
                                }
                                if (list.length) player.gain(list[0], 'gain2');
                            }
                        },
                    },
                    2: {
                        trigger: {
                            global: 'damageBegin1',
                        },
                        filter(event, player) {
                            var source = event.source;
                            return source && (source.countCards('e', (card) => card.name == 'cixiong') > 0 || source.group == 'shu') && player.storage.cixiongjianwu && player.maxHp > 1;
                        },
                        audio: 'ext:桃源幻梦/audio/技能配音/刘备:1',
                        check(event, player) {
                            if (event.source == player) return player.maxHp - player.hp > 1 || (get.attitude(player, event.player) < 0 && player.isDamaged());
                            else return (get.attitude(player, event.source) > 0 || get.attitude(player, event.player) < 0) && player.isDamaged();
                        },
                        prompt2(event, player) {
                            return `减1点体力上限,令${get.translation(event.source)}回血或${get.translation(event.player)}加伤`;
                        },
                        content() {
                            'step 0';
                            player.loseMaxHp();
                            player.line(trigger.source, 'fire');
                            if (trigger.source != player) player.say('<span style="font-family:xingkai">备与足下,誓同生死!</span>');
                            var list = ['选项一'];
                            if (trigger.source.isDamaged()) list.push('选项二');
                            list.push('背水!');
                            player
                                .chooseControl(list)
                                .set('choiceList', ['令此伤害+1', `令${get.translation(trigger.source)}回复1点体力`, '背水!弃置所有手牌(无牌则不弃)并执行所有选项'])
                                .set('prompt', `令${get.translation(trigger.source)}回血或加伤`)
                                .set('ai', function () {
                                    var evt = _status.event.getTrigger(),
                                        player = evt.player,
                                        source = evt.source,
                                        card = evt.card,
                                        play = _status.event.player;
                                    var bool1 = get.attitude(play, player) < 0;
                                    var bool2 = (source == play && play.maxHp - play.hp > 1) || (source != play && get.attitude(play, source) > 0 && play.isDamaged());
                                    if (bool1 && bool2 && !play.countCards('h', (card) => game.filterPlayer((playe) => play.canUse(card, playe, false)).length) > 0) return '背水!';
                                    if (bool1) return '选项一';
                                    if (bool2) return '选项二';
                                });
                            ('step 1');
                            event.control = result.control;
                            if (event.control == '背水!' && player.countCards('h') > 0) {
                                var hs = player.getCards('h');
                                if (hs.length) player.discard(hs);
                            }
                            if (event.control == '选项一' || event.control == '背水!') trigger.num++;
                            if (event.control == '选项二' || event.control == '背水!') trigger.source.recover();
                        },
                    },
                },
            },
            hyym_zhican: {
                audio: 'ext:桃源幻梦/audio/技能配音/刘备:1',
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return event.player.hasEnabledSlot() && event.player.isIn();
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                prompt2(event, player) {
                    return `令${get.translation(event.player)}随机废除一个装备栏`;
                },
                content() {
                    var target = trigger.player;
                    var list = [];
                    for (var i = 1; i <= 5; i++) {
                        if (target.hasEnabledSlot(i)) list.add(i);
                    }
                    var num = list.randomGet();
                    target.disableEquip(num);
                },
            },
            hyym_hanshizhiyi: {
                audio: 'ext:桃源幻梦/audio/技能配音/刘备:2',
                juexingji: true,
                zhuSkill: true,
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                filter(event, player) {
                    return player.hp < 3;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_hanshizhiyi');
                    player
                        .chooseTarget([1, Infinity], '令任意名角色各摸一张牌', function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return get.attitude(player, target) > 0;
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets.sortBySeat();
                    } else event.finish();
                    ('step 2');
                    for (var i = 0; i < event.target.length; i++) {
                        event.target[i].draw();
                    }
                    var list = lib.skill.hyym_cixiongjianwu.getInfo(player);
                    ((list[0] = '<p>③当一名角色使用【杀】造成伤害时,若其势力为蜀/其装备区内有【雌雄双股剑】,且你的体力上限大于1,则你可减1点体力上限,选择一项发动:1、令此伤害+1;2、令其回复1点体力.背水:弃置所有手牌(无牌则不弃).'), (player.storage.cixiongjianwu = true));
                },
            },
            hyym_elingqinxi: {},
            hyym_guidi: {
                derivation: ['hyym_cangmingzhilei', 'hyym_xvezhan', 'hyym_zhanshenlingyu'],
            },
            hyym_qiannengjifa: {
                audio: 'ext:桃源幻梦/audio/技能配音/鲁肃:2',
                trigger: {
                    global: ['loseAfter', 'loseAsyncAfter'],
                },
                filter(event, player) {
                    if (event.player == player && player.name == 'boss_lusuxinmo' && game.hasPlayer((play) => play.name == 'suncehyym') && player.countCards('h') > player.hp) return false;
                    if (get.distance(player, event.player) > 1) return false;
                    if (event.type != 'discard') return false;
                    if (player.hasSkill('hyym_qiannengjifa_used') && player.storage.hyym_qianneng.includes(event.player)) return false;
                    var phaseName;
                    for (var name of lib.phaseName) {
                        var evt = event.getParent(name);
                        if (!evt || evt.name != name) continue;
                        phaseName = name;
                        break;
                    }
                    if (!phaseName) return false;
                    return game.hasPlayer((current) => {
                        var evt = event.getl(current);
                        if (!evt || !evt.cards2 || evt.cards2.filterInD('d').length < 2) return false;
                        return true;
                    });
                },
                check(event, player) {
                    return get.attitude(player, event.player) > 0;
                },
                preHidden: true,
                content() {
                    'step 0';
                    var targets = [],
                        cardsList = [];
                    var players = game.filterPlayer().sortBySeat(_status.currentPhase);
                    for (var current of players) {
                        var cards = [];
                        var evt = trigger.getl(current);
                        if (!evt || !evt.cards2) continue;
                        var cardsx = evt.cards2.filterInD('d');
                        cards.addArray(cardsx);
                        if (cards.length) {
                            targets.push(current);
                            cardsList.push(cards);
                        }
                    }
                    event.targets = targets;
                    event.cardsList = cardsList;
                    ('step 1');
                    var target = targets.shift();
                    var cards = event.cardsList.shift();
                    event.target = target;
                    event.cards = cards;
                    event.target.chooseButton([`选择并获得其中${Math.floor(event.cards.length / 2)}张牌`, cards], Math.floor(event.cards.length / 2), true).set('ai', (button) => {
                        if (event.target == _status.event.player && button.link.name == 'shan') return 0.1;
                        else return get.value(button.link);
                    });
                    ('step 2');
                    if (result.bool) {
                        player.addTempSkill('hyym_qiannengjifa_used', ['phaseZhunbeiAfter', 'phaseDrawAfter', 'phaseJudgeAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter']);
                        player.addMark('hyym_qiannengjifa_used');
                        player.storage.hyym_qianneng.push(event.target);
                        var cards = result.links;
                        event.target.gain(cards, 'gain2');
                    }
                },
                ai: {
                    threaten: 1.3,
                    expose: 0.2,
                },
                subSkill: {
                    used: {
                        charlotte: true,
                        init(player) {
                            if (!player.storage.hyym_qianneng) player.storage.hyym_qianneng = [];
                        },
                        mark: true,
                        marktext: '潜',
                        intro: {
                            name: '潜能激发',
                            content(storage, player) {
                                return `本阶段已对${get.translation(player.storage.hyym_qianneng)}发动过技能`;
                            },
                        },
                        onremove(player) {
                            player.storage.hyym_qianneng = [];
                            player.removeMark('hyym_qiannengjifa_used', player.countMark('hyym_qiannengjifa_used'));
                        },
                    },
                },
            },
            hyym_cichang: {
                audio: 'ext:桃源幻梦/audio/技能配音/鲁肃:2',
                trigger: { player: 'damageEnd' },
                logTarget: 'source',
                preHidden: true,
                filter(event, player) {
                    return event.source && event.source.countGainableCards(player, 'e') > 0 && event.num > 0 && event.source != player && event.source.isIn();
                },
                check(event, player) {
                    if (player.countCards('h') > 2 && player.hasSkill('hyym_qiannengjifa_used') && event.source.countCards('ej') == 1) return false;
                    else if (Math.ceil(player.countCards('h') * 0.5) > event.source.countCards('ej') * 2) return false;
                    else return get.attitude(player, event.source) < 0;
                },
                content() {
                    'step 0';
                    var hs = player.getCards('h');
                    if (hs.length) player.discard(hs);
                    ('step 1');
                    event.hh = trigger.source.getCards('ej');
                    if (event.hh.length) player.gain(event.hh);
                    ('step 2');
                    event.tt = [];
                    for (var i = 0; i < player.countCards('h'); i++) {
                        if (event.hh.includes(player.getCards('h')[i])) event.tt.push(player.getCards('h')[i]);
                    }
                    if (event.tt.length) {
                        player.chooseButton(['可使用其中一张牌', event.tt], false).set('ai', (button) => {
                            if (player.getUseValue(button.link) > 0) return get.order(button.link);
                            else return 0;
                        });
                    } else event.finish();
                    ('step 3');
                    if (result.bool) {
                        player.chooseUseTarget(result.links[0], true, 'nopopup');
                        event.goto(2);
                    }
                },
                ai: {
                    maixie: true,
                    maixie_defend: true,
                },
            },
            hyym_maichong: {
                audio: 'ext:桃源幻梦/audio/技能配音/鲁肃:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return true;
                },

                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget(1, false, '脉冲:选择目标开冲!', function (card, player, target) {
                            return target != player && player.canUse('sha', target, false);
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            if (get.attitude(player, target) < 0 && get.effect(target, { name: 'sha' }, player, player) <= 0) return 0.1;
                            else return -get.attitude(player, target);
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets[0];
                        event.oo = [1, 2, 3, 4, 5].randomGet();
                        player.draw(event.oo);
                    } else event.finish();
                    ('step 2');
                    event.pp = player
                        .getCards('he')
                        .filter((i) => lib.filter.cardDiscardable(i, player))
                        .randomGets(Math.min(player.getCards('he').filter((i) => lib.filter.cardDiscardable(i, player)).length, event.oo));
                    player.discard(event.pp);
                    ('step 3');
                    var red = [];
                    var black = [];
                    for (var i = 0; i < event.pp.length; i++) {
                        if (get.color(event.pp[i]) == 'red') red.push(event.pp[i]);
                        else black.push(event.pp[i]);
                    }
                    event.num = Math.ceil(Math.abs(red.length - black.length) / 2);
                    ('step 4');
                    if (event.num > 0) {
                        if (player.canUse('sha', event.target, false)) player.useCard({ name: 'sha' }, event.target, false);
                        event.num--;
                    } else event.finish();
                    ('step 5');
                    if (event.num > 0) event.goto(4);
                },
            },
            hyym_xisheng: {
                audio: 'ext:桃源幻梦/audio/技能配音/鲁肃:2',
                enable: 'phaseUse',
                limited: true,
                filter(event, player) {
                    return true;
                },
                filterTarget(card, player, target) {
                    return get.distance(player, target) <= 1;
                },
                selectTarget: 1,
                forceDie: true,
                content() {
                    'step 0';
                    player.awakenSkill('hyym_xisheng');
                    if (player.name == 'boss_lusuxinmo') {
                        var num = player.hp - 1;
                    } else if (player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'hyym_fuhuobi' || card.name == 'hyym_xiaomijiu'), 'hs') && !player.hasSkill('hyym_chenzuiy')) {
                        var num1 = player.maxHp;
                    } else {
                        var num1 = Math.min(
                            player.hp -
                            1 +
                            (player.hasSkill('hyym_chenzuiy')
                                ? 0
                                : player.countCards('hs', function (card) {
                                    return (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_nverhong');
                                })),
                            player.maxHp,
                        );
                    }
                    if (player.name != 'boss_lusuxinmo') {
                        if (!player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'hyym_fuhuobi' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'jiu' || card.name == 'tao'), 'hs') && player.hp == 1 && player != target) var num = player.maxHp;
                        else if (target != player) var num = Math.min(num1, target.maxHp - target.hp);
                        else var num = num1;
                    }
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
                        .set('goon', num);
                    ('step 1');
                    event.num = event.map[result.control] || 1;
                    player.loseHp(event.num);
                    target.recover(event.num);
                    target.draw(event.num);
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (card.name == 'hyym_guihuajiu') return 20;
                        let list = ['tao', 'hyym_chujiqixveyao', 'hyym_zhongjiqixveyao', 'hyym_youlingqixvetang'];
                        if (list.includes(card.name)) return 11.99;
                    },
                },
                ai: {
                    order() {
                        var player = _status.event.player;
                        if (player.name == 'boss_lusuxinmo') return 99;
                        else if (!player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && !player.hasSkill('hyym_chenzuiy') && (card.name == 'hyym_fuhuobi' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'jiu' || card.name == 'tao'), 'hs') && player.hp == 1) return 0.1;
                        else return get.order({ name: 'tao' }) - 0.1;
                    },
                    pretao: true,
                    result: {
                        player(player, target, skill) {
                            if (player.name == 'boss_lusuxinmo' && player.hp == 1) return -99;
                            else {
                                if (player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'hyym_fuhuobi' || card.name == 'hyym_xiaomijiu'), 'hs') && player.name != 'boss_lusuxinmo') var num1 = player.maxHp;
                                else
                                    var num1 = Math.min(
                                        player.hp -
                                        1 +
                                        player.countCards('hs', function (card) {
                                            return card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_nverhong';
                                        }),
                                        player.maxHp,
                                    );
                                if (target != player) var num = Math.min(num1, target.maxHp - target.hp);
                                else var num = num1;
                                if (!player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'hyym_fuhuobi' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'jiu' || card.name == 'tao'), 'hs') && player.hp == 1 && player != target) return -2;
                                else return -num * 2;
                            }
                        },
                        target(player, target) {
                            if (player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'hyym_fuhuobi' || card.name == 'hyym_xiaomijiu'), 'hs') && player.name != 'boss_lusuxinmo') var num1 = player.maxHp;
                            else
                                var num1 = Math.min(
                                    player.hp -
                                    1 +
                                    player.countCards('hs', function (card) {
                                        return card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_nverhong';
                                    }),
                                    player.maxHp,
                                );
                            if (target != player) var num = Math.min(num1, target.maxHp - target.hp) + 0.1;
                            else var num = num1;
                            if (!player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'hyym_fuhuobi' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'jiu' || card.name == 'tao'), 'hs') && player.hp == 1 && player != target) return player.maxHp + Math.min(target.maxHp - target.hp, player.maxHp) * 2;
                            else return num * 3;
                        },
                    },
                },
            },
            hyym_anyingzhiya: {},
            hyym_jianlianzhan: {},
            hyym_guizhan: {},
            hyym_xingyunsuolian: {},
            hyym_xinlianwu: {},
            hyym_aishangzhifeng: {},
            hyym_zhongpi: {},
            hyym_nanmanchongji: {
                audio: 'ext:桃源幻梦/audio/技能配音/孟获:2',
                enable: 'phaseUse',
                init(player) {
                    if (!player.storage.hyym_nanmanchongji) player.storage.hyym_nanmanchongji = [''];
                },
                getInfo(player) {
                    if (!player.storage.hyym_nanmanchongji) player.storage.hyym_nanmanchongji = [''];
                    return player.storage.hyym_nanmanchongji;
                },
                filter(event, player) {
                    return true;
                },
                filterTarget(card, player, target) {
                    return player.canUse('nanman', target, false);
                },
                filterCard(card) {
                    return get.type(card, 'trick') == 'trick';
                },
                selectCard: [0, 1],
                content() {
                    'step 0';
                    if (cards.length == 0) {
                        player.loseHp();
                    }
                    event.num = get.distance(player, targets[0]);
                    ('step 1');
                    if (player.canUse('nanman', target, false)) player.useCard({ name: 'nanman' }, target, false);
                    ('step 2');
                    event.num--;
                    if (event.num > 0 && target.isAlive()) event.goto(1);
                },
                tag: {
                    damage: 1,
                },
                group: ['hyym_nanmanchongji_1', 'hyym_nanmanchongji_2'],
                subSkill: {
                    1: {
                        trigger: { source: 'damageBegin1' },
                        filter(event, player) {
                            return event.card && event.card.name == 'nanman' && player.storage.nanmanchongji && player.hasEnabledSlot();
                        },
                        check(event, player) {
                            return get.attitude(player, event.player) < 0 && get.effect(event.player, { name: 'nanman' }, player, player) > 0;
                        },
                        prompt2: '废除一个装备栏,令伤害值+1',
                        content() {
                            'step 0';
                            player.chooseToDisable().ai = function (event, player, list) {
                                event.list1 = [];
                                event.list2 = [];
                                for (var i = 0; i < list.length; i++) {
                                    event.list1.push(list[i]);
                                    event.list2.push(list[i]);
                                }
                                if (player.hasCard(null, 'he')) {
                                    for (var i = 1; i < 6; i++) {
                                        if (player.hasCard({ subtype: 'equip' + i }, 'he')) {
                                            list.remove('equip' + i);
                                        }
                                        if (player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                            event.list1.remove('equip' + i);
                                        }
                                    }
                                }
                                if (!!list.length) return list.randomGet();
                                else if (!!event.list1.length) return event.list1.randomGet();
                                else return event.list2.randomGet();
                            };
                            ('step 1');
                            game.log(player, '触发了【南蛮冲击】');
                            trigger.num++;
                        },
                    },
                    2: {
                        forced: true,
                        nopop: true,
                        silent: true,
                        trigger: { source: 'damageSource' },
                        filter(event, player) {
                            return event.getParent(3).name == 'hyym_nanmanchongji';
                        },
                        content() {
                            player.tempBanSkill('hyym_nanmanchongji', 'phaseUseAfter');
                        },
                    },
                },
                ai: {
                    order() {
                        return 9.1;
                    },
                    result: {
                        target(player, target) {
                            if (target.hasCard((card) => card.name == 'tengjia', 'e') || get.effect(target, { name: 'nanman' }, player, player) <= 0) return 0;
                            else return -1.5 * get.distance(player, target);
                        },
                        player(player, target, skill) {
                            if (player.hasCard(lib.skill.hyym_nanmanchongji.filterCard, 'he')) return -1;
                            if ((player.hp > 1 || (player.hp == 1 && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs'))) && !player.hasCard(lib.skill.hyym_nanmanchongji.filterCard, 'he')) return -1;
                            if (player.hp == 1 && !player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs') && !player.hasCard(lib.skill.hyym_nanmanchongji.filterCard, 'he')) return get.effect(player, { name: 'losehp' }, player, player);
                        },
                    },
                },
            },
            hyym_manwangzhanyi: {
                juexingji: true,
                audio: 'ext:桃源幻梦/audio/技能配音/孟获:2',
                trigger: {
                    player: [/* 'damageEnd','loseHpEnd' */ 'changeHp'],
                },
                forced: true,
                filter(event, player) {
                    return !player.storage.nanmanchongji && player.hp <= 2;
                },
                content() {
                    'step 0';
                    var list = lib.skill.hyym_nanmanchongji.getInfo(player);
                    ((list[0] = '当你使用【南蛮入侵】造成伤害时,你可废除一个装备栏,令伤害值+1.'), player.addMark('hyym_manwangzhanyix'));
                    player.addSkill('hyym_manwangzhanyix');
                    player.storage.nanmanchongji = true;
                    player.awakenSkill('hyym_manwangzhanyi');
                },
            },
            hyym_mohunchaosha: {},
            hyym_shayikuanglan: {},
            hyym_youmingzhoufa: {},
            hyym_lianlangboshan: {},
            hyym_mowangningshi: {},
            hyym_shanjizhinu: {},
            hyym_benglieji: {},
            hyym_manchongji: {},
            hyym_zhuangshengmengdie: {
                audio: 'ext:桃源幻梦/audio/技能配音/南华仙人:2',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                mark: true,
                marktext: '蝶',
                intro: {
                    name: '蝶',
                },
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    player.addMark('hyym_zhuangshengmengdie', 4);
                },
                ai: {
                    threaten: 4,
                },
                group: ['hyym_zhuangshengmengdie_1', 'hyym_zhuangshengmengdie_2'],
                subSkill: {
                    1: {
                        audio: 'ext:桃源幻梦/audio/技能配音/南华仙人:2',
                        trigger: { player: 'damageBegin4' },
                        _priority: 95,
                        forced: true,
                        filter(event, player) {
                            return event.player.countMark('hyym_zhuangshengmengdie') > 0;
                        },
                        content() {
                            'step 0';
                            trigger.cancel();
                            player.removeMark('hyym_zhuangshengmengdie', trigger.num);
                            ('step 1');
                            if (player.countMark('hyym_zhuangshengmengdie') == 0) player.loseHp();
                        },
                    },
                    2: {
                        audio: 'hyym_zhuangshengmengdie',
                        trigger: { source: 'damageSource' },
                        forced: true,
                        filter(event, player) {
                            return event.player && event.player.isIn() && event.player.hp >= player.countMark('hyym_zhuangshengmengdie') * 2;
                        },
                        content() {
                            player.addMark('hyym_zhuangshengmengdie');
                        },
                    },
                },
            },
            hyym_daofaziran: {
                _priority: 99,
                trigger: {
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    return event.player != player && event.card.suit && event.card.suit != 'none' && !event.parent.excluded.includes(player);
                },
                audio: 'ext:桃源幻梦/audio/技能配音/南华仙人:2',
                check(event, player) {
                    return get.effect(player, event.card, event.player, player) < 0;
                },
                prompt2(event, player) {
                    return `进行一次判定,若为${get.translation(event.card.suit)},取消你成为${get.translation(event.card)}的目标`;
                },
                content() {
                    'step 0';
                    player.judge(function (card) {
                        return card.suit == trigger.card.suit ? 6 : -6;
                    }).judge2 = function (result) {
                        return result.bool;
                    };
                    ('step 1');
                    if (result.bool === true) trigger.parent.excluded.add(player);
                },
                group: 'hyym_daofaziran_1',
                subSkill: {
                    1: {
                        //audio:'hyym_daofaziran',
                        trigger: { global: ['damageEnd', 'loseHpEnd'] },
                        filter(event, player) {
                            return get.distance(player, event.player) <= 1 && event.player.isIn() && player.countCards('he');
                        },
                        forced: true,

                        content() {
                            'step 0';
                            player.chooseToDiscard('he', 1, false, `是否对${get.translation(trigger.player)}发动【道法自然】？`, `弃一张牌,令${get.translation(trigger.player)}随机视为使用一张【1级攻击药】/【龙极酒】/【地老鼠烟花】？`).set('ai', (card) => {
                                if (get.attitude(player, trigger.player) > 0 && !trigger.player.hasSkill('hyym_longjijiu' || (!trigger.player.hasSkill('hyym_dilaoshuyanhuax') && !trigger.player.hasSkill('hyym_dilaoshuyanhuay')))) return 99 - get.value(card);
                                else return 0;
                            });
                            ('step 1');
                            if (result.bool) {
                                var list = ['1级攻击药'];
                                if (!trigger.player.hasSkill('hyym_longjijiux')) list.push('龙极酒');
                                if (!trigger.player.hasSkill('hyym_dilaoshuyanhuax') && !trigger.player.hasSkill('hyym_dilaoshuyanhuay')) list.push('地老鼠烟花');
                                var kk = list.randomGet();
                                if (kk == '1级攻击药') trigger.player.chooseUseTarget(true, { name: 'hyym_yijigongjiyao' });
                                if (kk == '龙极酒') trigger.player.chooseUseTarget(true, { name: 'hyym_longjijiu' });
                                if (kk == '地老鼠烟花') trigger.player.chooseUseTarget(true, { name: 'hyym_dilaoshuyanhua' });
                                if (trigger.player != player) player.addExpose(0.1);
                            }
                        },
                    },
                },
            },
            hyym_zhuxingchuixi: {
                audio: 'ext:桃源幻梦/audio/技能配音/南华仙人:2',
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.countMark('hyym_zhuangshengmengdie') > 0;
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                selectTarget() {
                    var player = _status.event.player;
                    return [1, Math.min(player.countMark('hyym_zhuangshengmengdie'), game.filterPlayer((play) => play != player && play.countCards('he') > 0).length)];
                },
                content() {
                    'step 0';
                    if (target.isIn())
                        target.chooseCard('he', false, `将一张牌交给${get.translation(player)}并摸一张牌,或点击<取消>并横置`).set('ai', function (card) {
                            if (get.attitude(target, player) > 0) {
                                if (get.distance(player, target) <= 1 && target.hasEnabledSlot(1) && target.hasEnabledSlot(2) && target.hasEnabledSlot(3) && target.hasEnabledSlot(4) && target.hasEnabledSlot(5) && get.subtype(card) == 'equip3' && get.position(card) == 'e') return 99;
                                else return 49 - get.value(card);
                            } else if (get.mode() == '天命之战') {
                                if (card.name == 'tiesuo') return 0;
                                else return 99 - get.value(card);
                            } else {
                                if (target.isLinked() || card.name == 'zhuge') return 0;
                                else if (!game.hasPlayer((play) => get.attitude(target, play) > 0 && play.isLinked())) return 3 - get.value(card);
                                else return 5 - get.value(card);
                            }
                        });
                    ('step 1');
                    if (result.cards?.length) {
                        target.give(result.cards[0], player, true);
                        target.draw();
                    } else if (!target.isLinked()) target.link();
                },
                ai: {
                    order: 15,
                    result: {
                        target(player, target) {
                            if (get.attitude(player, target) <= 0) {
                                if (target.isLinked()) return 0;
                                else return -0.5;
                            } else return 1;
                        },
                        player: 0,
                    },
                },
            },
            hyym_wuweizhiwei: {
                audio: 'ext:桃源幻梦/audio/技能配音/南华仙人:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countMark('hyym_zhuangshengmengdie') > 0;
                },
                filterTarget(card, player, target) {
                    return get.distance(player, target) <= 1 && target.hasEnabledSlot(1) && target.hasEnabledSlot(2) && target.hasEnabledSlot(3) && target.hasEnabledSlot(4) && target.hasEnabledSlot(5);
                },
                complexSelect: true,
                selectTarget() {
                    var player = _status.event.player;
                    var info = lib.character[player.name];
                    var skills = player.getSkills();
                    var list = [];
                    for (var i = 0; i < info[3].length; i++) {
                        if (skills.includes(info[3][i])) {
                            list.push(info[3][i]);
                        }
                    }
                    return [1, Math.min(player.countMark('hyym_zhuangshengmengdie'), list.length)];
                },
                limited: true,
                async contentBefore(event, trigger, player) {
                    player.awakenSkill('hyym_wuweizhiwei');
                    const num = event.targets.length;
                    player.removeMark('hyym_zhuangshengmengdie', num);
                    const result = await player
                        .chooseButton([`选择并失去${num}个技能`, [player.getSkills(true, false, false), 'tdnodes']], num)
                        .set('ai', function (button) {
                            if (button.link == 'hyym_zhuxingchuixi') return 5;
                            if (button.link == 'hyym_wuweizhiwei') return 4;
                            if (button.link == 'hyym_baizeenyi') return 3;
                            if (button.link == 'hyym_daofaziran') return 2;
                            return 1;
                        })
                        .forResult();
                    if (result.links?.length) {
                        player.removeSkill(result.links);
                        game.log(player, `失去了【${get.translation(result.links)}】`);
                    }
                }, //QQQ
                //出牌阶段,你可以移除任意枚<蝶>并移除等量武将牌上的技能,选择等量名距离不大于1且无已废除装备栏的角色,你令其各自废除所有装备栏并摸五张牌,获得以下效果直到其各自下回合结束:1、下等量次造成的伤害+1;2、结束阶段,弃置四张牌
                content() {
                    if (target.isIn()) {
                        var disables = [];
                        for (var i = 1; i <= 5; i++) {
                            for (var j = 0; j < target.countEnabledSlot(i); j++) {
                                disables.push(i);
                            }
                        }
                        if (disables.length) target.disableEquip(disables);
                        target.draw(5);
                        target.addSkill('hyym_wuweizhiweix');
                        target.markSkill('hyym_wuweizhiweix');
                        target.storage.wuweizhiweix += targets.length;
                        target.storage.hyym_wuweix++;
                    }
                },
                ai: {
                    order() {
                        var player = _status.event.player;
                        if (player.hp == 1 && !player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) return 0.1;
                        else return 14;
                    },
                    result: {
                        target(player, target) {
                            if (player.hp == 1 && !player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs') && target == player) return -99;
                            else return 7;
                        },
                    },
                },
            },
            hyym_wuweizhiweix: {
                mark: true,
                marktext: '无',
                intro: {
                    name: '无为之为',
                    content(storage, player) {
                        return `直到${get.translation(player)}下回合结束,${get.translation(player)}下${player.storage.wuweizhiweix}次造成的伤害+${player.storage.hyym_wuweix},且结束阶段开始时弃四张牌`;
                    },
                },
                trigger: { player: 'phaseAfter' },
                forced: true,
                filter(event, player) {
                    return true;
                },
                content() {
                    player.removeMark('hyym_wuweizhiweix', player.countMark('hyym_wuweizhiweix'));
                    player.removeSkill('hyym_wuweizhiweix');
                },
                init(player) {
                    if (!player.storage.hyym_wuweix) player.storage.hyym_wuweix = 0;
                    if (!player.storage.wuweizhiweix) player.storage.wuweizhiweix = 0;
                },
                group: ['hyym_wuweizhiweix_1', 'hyym_wuweizhiweix_2'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter(event, player) {
                            return player.storage.wuweizhiweix > 0;
                        },
                        content() {
                            game.log(player, '触发了【无为之为】');
                            trigger.num += player.storage.hyym_wuweix;
                            player.storage.wuweizhiweix--;
                        },
                    },
                    2: {
                        forced: true,
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            if (player.countCards('he') > 0)
                                player.chooseToDiscard('he', Math.min(4, player.countCards('he')), true).set('ai', (card) => {
                                    return 10 - get.value(card);
                                });
                        },
                    },
                },
            },
            hyym_baizeenyi: {
                audio: 'ext:桃源幻梦/audio/技能配音/南华仙人:2',
                trigger: {
                    player: ['damageEnd', 'loseHpEnd'],
                },
                forced: true,
                filter(event, player) {
                    return player.hp <= Math.floor(0.5 * player.maxHp) && !player.hasSkill('hyym_baizeenyix');
                },
                content() {
                    player.addSkill('hyym_baizeenyix');
                    var skills = player.getSkills(null, false, false);
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
                mod: {
                    maxHandcard(player, num) {
                        return num + player.countMark('hyym_zhuangshengmengdie');
                    },
                },
                group: 'hyym_baizeenyi_1',
                subSkill: {
                    1: {
                        trigger: { player: 'phaseDiscardBefore' },
                        audio: 'hyym_baizeenyi',
                        forced: true,
                        firstDo: true,
                        filter(event, player) {
                            return true;
                        },
                        content() { },
                    },
                },
            },
            hyym_baizeenyix: {},
            hyym_sishenliandao: {
                audio: 'ext:桃源幻梦/audio/技能配音/庞德:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    var nums = 0;
                    game.getGlobalHistory('cardMove', function (evt) {
                        if (evt.name == 'lose') {
                            if (evt.position == ui.discardPile) {
                                for (var i of evt.cards) nums += i.number;
                            }
                        } else {
                            if (evt.name == 'cardsDiscard') {
                                for (var i of evt.cards) nums += i.number;
                            }
                        }
                    });
                    return nums <= 13 && player != event.player && event.player.isIn();
                },
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
                content() {
                    player.say('<span style="font-family:xingkai">你们的亡魂会被死神称量</span>');
                    var target = trigger.player;
                    player.line(target, 'thunder');
                    if (target.countGainableCards(player, 'he') > 0)
                        player.gainPlayerCard(target, 'he', true).set('ai', function (button) {
                            return get.value(button.link);
                        });
                    target.loseHp();
                },
                prompt2(event, player) {
                    return `获得${get.translation(event.player)}一张牌,并令其失去1点体力`;
                },
                ai: {
                    expose: 0.1,
                },
                group: 'hyym_sishenliandao_mark',
                subSkill: {
                    mark: {
                        trigger: {
                            global: ['loseAfter', 'cardsDiscardAfter', 'phaseAfter'],
                        },
                        forced: true,
                        firstDo: true,
                        silent: true,
                        filter(event, player) {
                            if (event.name == 'phase') return true;
                            if (player == _status.currentPhase) return false;
                            if (event.name == 'lose') return event.position == ui.discardPile;
                            return true;
                        },
                        mark: true,
                        marktext: '死',
                        content() {
                            if (trigger.name == 'phase') {
                                player.unmarkSkill('hyym_sishenliandao_mark');
                                return;
                            }
                            var nums = 0;
                            game.getGlobalHistory('cardMove', function (evt) {
                                if (evt.name == 'lose') {
                                    if (evt.position == ui.discardPile) {
                                        for (var i of evt.cards) nums += i.number;
                                    }
                                } else {
                                    if (evt.name == 'cardsDiscard') {
                                        for (var i of evt.cards) nums += i.number;
                                    }
                                }
                            });
                            player.storage.hyym_sishenliandao_mark = nums;
                            player.markSkill('hyym_sishenliandao_mark');
                        },
                        intro: {
                            name: '死神镰刀',
                            content(storage, player) {
                                return `本回合已有共计${player.storage.hyym_sishenliandao_mark}点数的牌进入过弃牌堆`;
                            },
                        },
                    },
                },
            },
            hyym_hunge: {
                audio: 'ext:桃源幻梦/audio/技能配音/庞德:1',
                enable: 'phaseUse',
                filter(event, player) {
                    var list = [];
                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                        var card = ui.cardPile.childNodes[i];
                        if (get.subtype(card) == 'equip1') {
                            list.push(card);
                        }
                    }
                    return (game.hasPlayer((current) => lib.skill.hyym_hunge.filterTarget(null, player, current)) || list.length) && player.hasCard((card) => get.tag(card, 'damage') > 0.5, 'hs');
                },
                prompt: '弃一张伤害牌,获得场上一张武器牌,或直接点击"确定"并获得牌堆中一张武器牌',
                filterTarget(card, player, target) {
                    return target.getEquips(1).length;
                },
                filterCard(card) {
                    return get.tag(card, 'damage') > 0.5;
                },
                selectTarget: [0, 1],
                selectCard: 1,
                content() {
                    if (target) player.gain(target.getEquips(1), target, 'give', 'bySelf');
                    else {
                        var list = [];
                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                            var card = ui.cardPile.childNodes[i];
                            if (get.subtype(card) == 'equip1') {
                                list.push(card);
                            }
                        }
                        if (list.length) player.gain(list[0], 'gain2', 'nopopup');
                    }
                },
                ai: {
                    order() {
                        return 9.8;
                    },
                    result: {
                        target(player, target) {
                            return -2;
                        },
                        player(player, target, skill) {
                            return 0.2;
                        },
                    },
                },
            },
            hyym_feitang: {
                audio: 'ext:桃源幻梦/audio/技能配音/庞德:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.hasCard(lib.skill.hyym_feitang.filterCard, 'he');
                },
                filterTarget(card, player, target) {
                    return target != player;
                },

                position: 'he',
                filterCard: { subtype: 'equip1' },
                selectCard: 1,
                discard: false,
                content() {
                    'step 0';
                    player.give(cards[0], target, 'give');
                    ('step 1');
                    if (target.getCards('h').includes(cards[0])) target.chooseUseTarget(cards[0], true, 'nopopup');
                    ('step 2');
                    target.damage();
                    ('step 3');
                    if (/* !player.storage.hyym_feitang.includes(target)&& */ target.getCards('e', (car) => car != cards[0]).length && player.isIn()) player.chooseBool('是否令其弃置装备区内其余牌？').set('ai', () => get.attitude(player, target) <= 0);
                    ('step 4');
                    if (result.bool)
                        target.discard(
                            target.getCards('e', function (i) {
                                return i != cards[0];
                            }),
                        );
                },
                ai: {
                    order() {
                        return 9.9;
                    },
                    tag: {
                        damage: 1,
                    },
                    result: {
                        target(player, target) {
                            if (get.damageEffect(target, player, player) <= 0) return 0;
                            else {
                                var num = 0;
                                var list = [target.getEquips(2).length, target.getEquips(3).length, target.getEquips(4).length, target.getEquips(5).length];
                                for (var i = 0; i < list.length; i++) {
                                    if (list[i] > 0) num++;
                                }
                                return -num - 2;
                            }
                        },
                        player(player, target, skill) {
                            return -0.5;
                        },
                    },
                },
            },
            hyym_gunshishu: {},
            hyym_shijiashu: {},
            hyym_wuxveshenyou: {},
            hyym_shuanghuajianyi: {},
            hyym_shuangtianjuandi: {},
            hyym_qianbingduanheng: {},
            hyym_lieyangrongjin: {},
            hyym_yangyandaozhen: {},
            hyym_honglianshanxian: {
                enable: 'phaseUse',
                audio: 'ext:桃源幻梦/audio/技能配音/孙权:1',
                filter(event, player) {
                    return player.countCards('h', (card) => card.name == 'shan') > 0;
                },
                mark: true,
                marktext: '莲',
                intro: {
                    name: '红莲闪现',
                    markcount: 'expansion',
                    content: 'expansion',
                },
                content() {
                    'step 0';
                    player
                        .chooseCard('h', true, '红莲闪现:可将任意张<闪>置于<莲>中', [1, _status.event.player.countCards('h', (card) => card.name == 'shan')], function (card) {
                            return card.name == 'shan';
                        })
                        .set('ai', function (card) {
                            return 2;
                        })
                        .set('complexCard', true);
                    ('step 1');
                    if (result.bool) {
                        player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('hyym_honglianshanxian');
                    } else event.finish();
                    ('step 2');
                    player.markSkill('hyym_honglianshanxian');
                },
                ai: {
                    order() {
                        return get.order({ name: 'sha' }) + 0.1;
                    },
                    result: {
                        player(player, target, skill) {
                            return 1;
                        },
                    },
                },
                group: ['hyym_honglianshanxian_1', 'hyym_honglianshanxian_2', 'hyym_honglianshanxian_3', 'hyym_honglianshanxian_4'],
                subSkill: {
                    1: {
                        audio: 'ext:桃源幻梦/audio/技能配音/孙权:1',
                        shaRelated: true,
                        trigger: { player: 'useCardToPlayered' },

                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && player.getExpansions('hyym_honglianshanxian').length;
                        },

                        logTarget: 'target',
                        preHidden: true,
                        forced: true,
                        content() {
                            'step 0';
                            player.chooseButton([`是否对${get.translation(trigger.target)}发动【红莲闪现】？`, `移去一张<莲>并摸一张牌,令此【杀】不可被${get.translation(trigger.target)}响应`, player.getExpansions('hyym_honglianshanxian')], false).set('ai', function (button) {
                                let kk = false;
                                let player = _status.event.player;
                                if (trigger.target.countCards('h') > 0 || trigger.target.hasCard((card) => card.name == 'bagua', 'e')) kk = true;
                                if (get.attitude(player, trigger.target) < 0 && (kk || trigger.card.name != 'sha')) return Math.random();
                                else return false;
                            });
                            ('step 1');
                            if (result.bool) {
                                var card = result.links[0];
                                player.loseToDiscardpile(card);
                                player.draw();
                            } else event.finish();
                            ('step 2');
                            trigger.parent.directHit.add(trigger.target);
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha' || !ui.cardPile.firstChild || player.getExpansions('hyym_honglianshanxian').length == 0) return false;
                            },
                        },
                    },
                    2: {
                        audio: 'ext:桃源幻梦/audio/技能配音/孙权:1',
                        trigger: { global: ['chooseToRespondBefore', 'chooseToUseBefore'] },
                        filter(event, player) {
                            if (event.responded) return false;
                            if (!event.filterCard || !event.filterCard({ name: 'shan' }, event.player, event)) return false;
                            return player.getExpansions('hyym_honglianshanxian').length;
                        },

                        forced: true,
                        content() {
                            'step 0';
                            player.chooseButton([`是否对${get.translation(trigger.player)}发动【红莲闪现】？`, `移去一张<莲>并摸一张牌,令${get.translation(trigger.player)}视为使用或打出一张【闪】`, player.getExpansions('hyym_honglianshanxian')], false).set('ai', function (button) {
                                if (get.effect(trigger.player, event.getParent(4).name == 'hyym_dilaoshuyanhuax_1' ? event.getParent(7).card : event.getParent(4).card, event.getParent(4).name == 'hyym_dilaoshuyanhuax_1' ? event.getParent(7).player : event.getParent(4).player, player) < 0) return Math.random();
                                else return false;
                            });
                            ('step 1');
                            if (result.bool) {
                                var card = result.links[0];
                                player.loseToDiscardpile(card);
                                player.draw();
                            } else event.finish();
                            ('step 2');
                            event.finish();
                            trigger.result = { bool: true, card: { name: 'shan' } };
                            trigger.responded = true;
                            trigger.animate = false;
                            trigger.player.addTempSkill('hyym_honglianshanxianx');
                        },
                    },
                    3: {
                        trigger: { global: 'roundStart' },
                        //audio:'hyym_honglianshanxian',
                        filter(event, player) {
                            return player.countCards('h', (card) => card.name == 'shan') > 0;
                        },

                        forced: true,
                        content() {
                            'step 0';
                            player
                                .chooseCard('h', false, '红莲闪现:可将任意张<闪>置于<莲>中', [1, _status.event.player.countCards('h', (card) => card.name == 'shan')], function (card) {
                                    return card.name == 'shan';
                                })
                                .set('ai', function (card) {
                                    return 2;
                                })
                                .set('complexCard', true);
                            ('step 1');
                            if (result.bool) {
                                player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('hyym_honglianshanxian');
                            } else event.finish();
                            ('step 2');
                            player.markSkill('hyym_honglianshanxian');
                        },
                    },
                    4: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        content() {
                            player.gain(get.cardPile('shan'), 'gain2');
                        },
                    },
                },
            },
            hyym_honglianshanxianx: {
                trigger: { player: ['useCard', 'respond'] },
                forced: true,
                content() {
                    player.removeSkill('hyym_honglianshanxianx');
                },
                ai: {
                    respondShan: true,
                    skillTagFilter(player) {
                        return true;
                    },
                },
            },
            hyym_zhimang: {
                derivation: 'hyym_zhimangyichang',
                audio: 'ext:桃源幻梦/audio/技能配音/孙权:1',
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return !event.player.hasSkill('hyym_zhimangzhuangtai') && player.countCards('he') > 0 && event.player != player && event.player.isIn() && !event.player.hasSkill('hyym_lvdouzongzix');
                },

                forced: true,
                content() {
                    'step 0';
                    player.chooseToDiscard('he', 1, false, `是否对${get.translation(trigger.player)}发动【致盲】？`, `弃一张牌,令${get.translation(trigger.player)}进入<致盲>状态`).set('ai', (card) => {
                        if (get.attitude(player, trigger.player) < 0) return 99 - get.value(card);
                        else return 0;
                    });
                    ('step 1');
                    if (result.bool) {
                        trigger.player.addSkill('hyym_zhimangzhuangtai');
                        trigger.player.markSkill('hyym_zhimangzhuangtai');
                    }
                },
                group: ['hyym_zhimang_1'],
                subSkill: {
                    1: {
                        trigger: {
                            global: ['hyym_zhimangzhuangtaiAfter', 'hyym_zhimangzhuangtai_1After'],
                        },
                        prompt2(event, player) {
                            return '从牌堆中检索一张【闪】并置于武将牌上';
                        },
                        forced: true,
                        audio: 'ext:桃源幻梦/audio/技能配音/孙权:1',
                        filter(event, player) {
                            return true;
                        },
                        check(event, player) {
                            return true;
                        },
                        content() {
                            'step 0';
                            var list = [];
                            for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                var card = ui.cardPile.childNodes[i];
                                if (card.name == 'shan') {
                                    list.push(card);
                                }
                            }
                            if (list.length) {
                                player.addToExpansion(list[0], player, 'giveAuto').gaintag.add('hyym_honglianshanxian');
                                player.markSkill('hyym_honglianshanxian');
                            }
                        },
                    },
                },
            },
            hyym_zhimangyichang: {},
            hyym_yingkaijue: {
                audio: 'ext:桃源幻梦/audio/技能配音/孙权:2',
                juexingji: true,
                zhuSkill: true,
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                filter(event, player) {
                    return player.hp < 3;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_yingkaijue');
                    player.say('<span style="font-family:xingkai">能用众力,则无敌于天下!</span>');
                    var targets = game.filterPlayer();
                    event.targets = targets;
                    ('step 1');
                    if (event.targets.length) {
                        var current = event.targets.shift();
                        if (current.group == 'wu') {
                            current
                                .chooseBool(`是否获得1点护甲,并令${get.translation(player)}检索一张【闪】并置于武将牌上？`)
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
                        event.current.changeHujia();
                        event.current.line(player, 'fire');
                        var list = [];
                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                            var card = ui.cardPile.childNodes[i];
                            if (card.name == 'shan') {
                                list.push(card);
                            }
                        }
                        if (list.length) {
                            player.addToExpansion(list[0], player, 'giveAuto').gaintag.add('hyym_honglianshanxian');
                            player.markSkill('hyym_honglianshanxian');
                        }
                    }
                    if (event.targets.length) {
                        event.goto(1);
                    }
                    ('step 3');
                    player
                        .chooseTarget(1, '是否令一名其他势力角色获得<盲>？', function (card, player, target) {
                            return target != player && target.group != player.group && !target.hasSkill('hyym_zhimangzhuangtai') && !target.hasSkill('hyym_lvdouzongzix');
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            var att = -get.attitude(player, target);
                            if (get.attitude(player, target) >= 0 || target.hasSkill('hyym_lvdouzongzix')) return false;
                            else return att + target.countCards('h');
                        });
                    ('step 4');
                    if (result.bool) {
                        if (!result.targets[0].hasSkill('hyym_lvdouzongzix')) {
                            result.targets[0].addSkill('hyym_zhimangzhuangtai');
                            result.targets[0].markSkill('hyym_zhimangzhuangtai');
                        } else game.log(result.targets[0], '因【绿豆粽子】免疫了异常状态');
                    }
                },
            },
            hyym_guanghuiyishan: {},
            hyym_zhankong: {},
            hyym_haolie: {},
            hyym_dicha: {},
            hyym_chiyueshiliuye: {},
            hyym_jianwuxidie: {},
            hyym_zimujian: {},
            hyym_qunxingyunluo: {},
            hyym_huimadao: {},
            hyym_fengjuancanyun: {},
            hyym_yanmie: {},
            hyym_tiandishizi: {},
            hyym_fenglai: {},
            hyym_zhaoyang: {},
            hyym_pili: {},
            hyym_jingtianjidi: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return true;
                },
                //audio:'ext:桃源幻梦/audio/技能配音/囍星彩:2',
                content() {
                    'step 0';
                    var num;
                    var num1 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') && get.attitude(player, play) < 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') && get.attitude(player, play) < 0).length;
                    var num2 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 1 && get.attitude(player, play) < 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 1 && get.attitude(player, play) > 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 1 && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 1 && get.attitude(player, play) < 0).length;
                    var num3 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 2 && get.attitude(player, play) < 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 2 && get.attitude(player, play) > 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 2 && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 2 && get.attitude(player, play) < 0).length;
                    var num4 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.hp == player.hp && get.attitude(player, play) < 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.hp == player.hp && get.attitude(player, play) > 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.hp == player.hp && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.hp == player.hp && get.attitude(player, play) < 0).length;
                    var num5 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && (play == player.next || play == player.previous) && get.attitude(player, play) < 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && (play == player.next || play == player.previous) && get.attitude(player, play) > 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && (play == player.next || play == player.previous) && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && (play == player.next || play == player.previous) && get.attitude(player, play) < 0).length;
                    var num6 = Math.max(num1, num2, num3, num4, num5);
                    if (num6 == num5 || num6 == num4 || num6 == num3 || (player.hasSkill('hyym_jingtianjidix') && player.isTurnedOver())) num = 2;
                    else if (num6 == num2) num = 1;
                    else num = 0;
                    var map = {};
                    var list = [];
                    for (var i = 0; i <= 2; i++) {
                        var cn = get.cnNumber(i, true);
                        map[cn] = i;
                        list.push(cn);
                    }
                    event.map = map;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '选择摸牌数量')
                        .set('goon', num);
                    ('step 1');
                    var num = event.map[result.control];
                    if (num > 0) player.draw(num);
                    player.turnOver();
                },
                ai: {
                    order() {
                        return 4;
                    },
                    result: {
                        player(player, target, skill) {
                            var num1 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') && get.attitude(player, play) < 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') && get.attitude(player, play) < 0).length;
                            var num2 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 1 && get.attitude(player, play) < 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 1 && get.attitude(player, play) > 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 1 && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 1 && get.attitude(player, play) < 0).length;
                            var num3 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 2 && get.attitude(player, play) < 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 2 && get.attitude(player, play) > 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 2 && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.countCards('h') == player.countCards('h') + 2 && get.attitude(player, play) < 0).length;
                            var num4 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.hp == player.hp && get.attitude(player, play) < 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && play.hp == player.hp && get.attitude(player, play) > 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.hp == player.hp && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && play.hp == player.hp && get.attitude(player, play) < 0).length;
                            var num5 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && (play == player.next || play == player.previous) && get.attitude(player, play) < 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != player && (play == player.next || play == player.previous) && get.attitude(player, play) > 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && (play == player.next || play == player.previous) && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != player && (play == player.next || play == player.previous) && get.attitude(player, play) < 0).length;
                            var num6 = Math.max(num1, num2, num3, num4, num5);
                            if (player.hasSkill('hyym_jingtianjidix') && !player.isTurnedOver()) return -5;
                            else if (player.hasSkill('hyym_jingtianjidix') && player.isTurnedOver()) return 5;
                            else if (num6 > 0) return 2;
                            else return -2;
                        },
                    },
                },
                group: 'hyym_jingtianjidi_1',
                subSkill: {
                    1: {
                        round: 1,
                        trigger: { global: 'turnOverEnd' },
                        filter(event, player) {
                            return event.player.isTurnedOver();
                        },
                        prompt2(event, player) {
                            return '本次翻面角色为:' + get.translation(event.player);
                        },
                        //audio:'hyym_jingtianjidi',
                        check(event, player) {
                            var num1 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != event.player && play.countCards('h') == event.player.countCards('h') && get.attitude(player, play) < 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != event.player && play.countCards('h') == event.player.countCards('h') && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != event.player && play.countCards('h') == event.player.countCards('h') && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != event.player && play.countCards('h') == event.player.countCards('h') && get.attitude(player, play) < 0).length;
                            var num2 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != event.player && play.hp == event.player.hp && get.attitude(player, play) < 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != event.player && play.hp == event.player.hp && get.attitude(player, play) > 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != event.player && play.hp == event.player.hp && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != event.player && play.hp == event.player.hp && get.attitude(player, play) < 0).length;
                            var num3 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != event.player && (play == event.player.next || play == event.player.previous) && get.attitude(player, play) < 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != event.player && (play == event.player.next || play == event.player.previous) && get.attitude(player, play) > 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != event.player && (play == event.player.next || play == event.player.previous) && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != event.player && (play == event.player.next || play == event.player.previous) && get.attitude(player, play) < 0).length;
                            var num4 = Math.max(num1, num2, num3);
                            return num4 > 0;
                        },
                        content() {
                            'step 0';

                            player.addTempSkill('hyym_jingtianjidix', 'roundStart');
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/囍星彩', ['hyym_jingtianjidi1', 'hyym_jingtianjidi2'].randomGet());
                            var list = ['手牌数相等', '体力值相等', '相邻'];
                            player
                                .chooseControl()
                                .set('ai', function () {
                                    var num1 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != trigger.player && play.countCards('h') == trigger.player.countCards('h') && get.attitude(player, play) < 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != trigger.player && play.countCards('h') == trigger.player.countCards('h') && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != trigger.player && play.countCards('h') == trigger.player.countCards('h') && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != trigger.player && play.countCards('h') == trigger.player.countCards('h') && get.attitude(player, play) < 0).length;
                                    var num2 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != trigger.player && play.hp == trigger.player.hp && get.attitude(player, play) < 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != trigger.player && play.hp == trigger.player.hp && get.attitude(player, play) > 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != trigger.player && play.hp == trigger.player.hp && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != trigger.player && play.hp == trigger.player.hp && get.attitude(player, play) < 0).length;
                                    var num3 = game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != trigger.player && (play == trigger.player.next || play == trigger.player.previous) && get.attitude(player, play) < 0).length - game.filterPlayer((play) => play != player && !play.isTurnedOver() && play != trigger.player && (play == trigger.player.next || play == trigger.player.previous) && get.attitude(player, play) > 0).length + game.filterPlayer((play) => play != player && play.isTurnedOver() && play != trigger.player && (play == trigger.player.next || play == trigger.player.previous) && get.attitude(player, play) > 0).length - game.filterPlayer((play) => play != player && play.isTurnedOver() && play != trigger.player && (play == trigger.player.next || play == trigger.player.previous) && get.attitude(player, play) < 0).length;
                                    var num4 = Math.max(num1, num2, num3);
                                    if (num4 == num3) return 2;
                                    else if (num4 == num1) return 0;
                                    else return 1;
                                })
                                .set('choiceList', list)
                                .set('prompt', '请选择一类角色,ta们满足与本次翻面角色');
                            ('step 1');
                            event.index = result.index;
                            if (result.index == 0) {
                                var list = game.filterPlayer((play) => play != player && play.countCards('h') == trigger.player.countCards('h') && play != trigger.player);
                                if (list.length == 0) event.finish();
                                else {
                                    player.storage.hyym_jingtianjidi_1 = list.length;
                                    for (var i = 0; i < list.length; i++) {
                                        list[i].turnOver();
                                    }
                                }
                            } else if (result.index == 1) {
                                var list = game.filterPlayer((play) => play != player && play.hp == trigger.player.hp && play != trigger.player);
                                if (list.length == 0) event.finish();
                                else {
                                    player.storage.hyym_jingtianjidi_1 = list.length;
                                    for (var i = 0; i < list.length; i++) {
                                        list[i].turnOver();
                                    }
                                }
                            } else {
                                var list = game.filterPlayer((play) => play != player && (play == trigger.player.next || play == trigger.player.previous) && play != trigger.player);
                                if (list.length == 0) event.finish();
                                else {
                                    player.storage.hyym_jingtianjidi_1 = list.length;
                                    for (var i = 0; i < list.length; i++) {
                                        list[i].turnOver();
                                    }
                                }
                            }
                            ('step 2');
                            player.chooseToDiscard(Math.min(player.storage.hyym_jingtianjidi_1, player.countCards('he')), 'he', true).set('ai', (card) => {
                                return 10 - get.value(card);
                            });
                            player.storage.hyym_jingtianjidi_1 = 0;
                        },
                    },
                },
            },
            hyym_jingtianjidix: {},
            hyym_shixvemoqiang: {},
            hyym_xianglong: {},
            hyym_moguanchongji: {},
            hyym_xingluo: {},
            hyym_chongzhen: {
                audio: 'ext:桃源幻梦/audio/技能配音/小乔:1',
                enable: 'phaseUse',
                changeSeat: true,
                limited: true,
                filter(event, player) {
                    return game.players.length > 2;
                },
                filterTarget(card, player, target) {
                    return target != player && target != player.next;
                },
                selectTarget: 1,
                prompt(event, player) {
                    return '冲阵:将座次移动至一名其他角色的上家';
                },
                content() {
                    player.awakenSkill('hyym_chongzhen');
                    player.say('<span style="font-family:xingkai">留在这里无聊死了,带我出去玩吧!</span>');
                    game.broadcastAll(
                        function (target1, target2) {
                            game.swapSeat(target1, target2, null, true);
                        },
                        player,
                        target,
                    );
                },
                ai: {
                    order: 0.09,
                    expose: 0.1,
                    result: {
                        player(player, target) {
                            var current = player.next;
                            var max = 20,
                                att = 0;
                            while (max > 0) {
                                max--;
                                if (current == target) return att;
                                att -= get.attitude(player, current);
                                current = current.next;
                            }
                            return att;
                        },
                    },
                },
            },
            hyym_quanlei: {
                trigger: { source: 'damageSource' },
                forced: true,
                filter(event, player) {
                    return game.players.length > 2 && !player.storage.hyym_quanlei.includes(event.player);
                },
                changeSeat: true,
                audio: 'ext:桃源幻梦/audio/技能配音/小乔:2',
                init(player) {
                    if (!player.storage.hyym_quanlei) player.storage.hyym_quanlei = [];
                },
                mark: true,
                marktext: '垒',
                intro: {
                    name: '全垒',
                    content(storage, player) {
                        return `已对${get.translation(player.storage.hyym_quanlei)}发动过此技能`;
                    },
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget(false, `全垒:可将${get.translation(trigger.player)}移至一名角色的上家位置`, function (card, player, target) {
                            if (game.players.length % 2 == 1) return game.filterPlayer((tar) => get.distance(trigger.player, tar, 'pure') * 2 + 1 == game.players.length && get.distance(trigger.player, tar, 'pure') == get.distance(trigger.player, tar.previous, 'pure')).includes(target);
                            else return game.filterPlayer((tar) => get.distance(trigger.player, tar, 'pure') * 2 == game.players.length || get.distance(trigger.player, tar.previous, 'pure') * 2 == game.players.length).includes(target);
                        })
                        .set('ai', function (target) {
                            var play = trigger.player;
                            if (_status.currentPhase) var current = _status.currentPhase.next;
                            else var current = game.findPlayer((i) => i.identity == 'zhu');
                            if (get.attitude(_status.event.player, play) > 0) {
                                if (_status.currentPhase && _status.currentPhase == play) {
                                    var max = 20,
                                        att = 0;
                                    while (max > 0) {
                                        max--;
                                        if (current == target) return att;
                                        att -= get.attitude(play, current);
                                        current = current.next;
                                    }
                                    return att;
                                } else {
                                    if (target == current) return 2;
                                    else return 0;
                                }
                            } else {
                                if (_status.currentPhase && _status.currentPhase == play) {
                                    var max = 20,
                                        att = 0;
                                    while (max > 0) {
                                        max--;
                                        if (current == target) return att;
                                        att -= get.attitude(play, current);
                                        current = current.next;
                                    }
                                    return -att;
                                } else {
                                    if (target == current.previous) return 2;
                                    else return 0;
                                }
                            }
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        player.storage.hyym_quanlei.push(trigger.player);
                        game.broadcastAll(
                            function (target1, target2) {
                                game.swapSeat(target1, target2, null, true);
                            },
                            trigger.player,
                            result.targets[0],
                        );
                    }
                },
                ai: { expose: 0.1 },
            },
            hyym_wushuang: {
                mark: true,
                marktext: '无',
                intro: {
                    name: '无双',
                    content(storage, player) {
                        return '本回合剩余发动次数:' + (player.countMark('hyym_wushuang') < player.hp ? player.hp - player.countMark('hyym_wushuang') : 0) + '次';
                    },
                }, //QQQ
                trigger: {
                    player: 'useCardAfter',
                },
                filter(event, player) {
                    return player.countMark('hyym_wushuang') < player.hp && event.targets && event.targets.length == 1;
                },
                forced: true,
                audio: 'ext:桃源幻梦/audio/技能配音/小乔:2',
                content() {
                    'step 0';
                    player
                        .chooseToUse((card) => game.hasPlayer((play) => (play == trigger.targets[0].previous || play == trigger.targets[0].next) && player.canUse(card, play, false, false)), `无双:可对${get.translation(game.filterPlayer((play) => play == trigger.targets[0].previous || play == trigger.targets[0].next))}使用一张牌(无距离和次数限制)并摸一张牌`, 1) //QQQ
                        .set('filterTarget', function (card, player, target) {
                            return game.filterPlayer((play) => (play == trigger.targets[0].previous || play == trigger.targets[0].next) && player.canUse(card, play, false, false)).includes(target);
                        }).oncard = function (card, player) {
                            player.draw();
                            player.addMark('hyym_wushuang', 1);
                        };
                },
                group: 'hyym_wushuang_1',
                subSkill: {
                    1: {
                        forced: true,
                        nopop: true,
                        silent: true,
                        trigger: { global: 'phaseBefore' },
                        filter(event, player) {
                            return player.countMark('hyym_wushuang') > 0;
                        },
                        content() {
                            player.removeMark('hyym_wushuang', player.countMark('hyym_wushuang'));
                        },
                    },
                },
                ai: { threaten: 3 },
            },
            hyym_anxiang: {
                trigger: { player: 'phaseUseBegin' },
                audio: 'ext:桃源幻梦/audio/技能配音/星彩:2',
                filter(event, player) {
                    return game.hasPlayer((play) => play != player && !play.hasSkill('hyym_lvdouzongzix'));
                },
                //prompt2:'来朵带刺的玫瑰~',
                enable: true,
                init(player) {
                    if (!player.storage.anxiang) player.storage.anxiang = [];
                },
                _priority: 97,
                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget(false, '暗香:❤来朵带刺的玫瑰~', function (card, player, target) {
                            return target != player && !target.hasSkill('hyym_lvdouzongzix');
                        })
                        .set('ai', function (target) {
                            return -get.attitude(player, target) - target.hp * 0.2;
                        }).animate = false;
                    ('step 1');
                    if (result.bool) {
                        player.say('<span style="font-family:xingkai">嗯哼？都给我跪下,唱征服!</span>');
                        result.targets[0].addSkill('hyym_anxiangx');
                        result.targets[0].addMark('hyym_anxiangx');
                        if (!player.storage.anxiang.includes(result.targets[0])) player.storage.anxiang.push(result.targets[0]);
                    }
                },
                mark: true,
                marktext: '暗',
                intro: {
                    mark(dialog, content, player) {
                        if (player == game.me || player.isUnderControl()) {
                            var str = '拥有<暗香>的角色及对应数量:';
                            for (var i = 0; i < player.storage.anxiang.length; i++) {
                                str += `<br>${get.translation(player.storage.anxiang[i])}:` + player.storage.anxiang[i].countMark('hyym_anxiangx') + '枚';
                            }
                            return str;
                        }
                    },
                    content(storage, player) {
                        if (player == game.me || player.isUnderControl()) {
                            var str = '拥有<暗香>的角色及对应数量:';
                            for (var i = 0; i < player.storage.anxiang.length; i++) {
                                str += `<br>${get.translation(player.storage.anxiang[i])}:` + player.storage.anxiang[i].countMark('hyym_anxiangx') + '枚';
                            }
                            return str;
                        }
                    },
                },
            },
            hyym_chuanxinci: {},
            hyym_tieqi: {},
            hyym_xiuluolingyu: {},
            hyym_xvefulinggou: {},
            hyym_xvefuxiling: {},
            hyym_fulinghuanxing: {},
            hyym_huoliquankai: {
                audio: 'ext:桃源幻梦/audio/技能配音/徐盛:2',
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return event.player && event.player.isIn() && event.player.countCards('h') <= player.countCards('h');
                },
                check(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.draw();
                    ('step 1');
                    player.chooseToUse({
                        filterTarget(card, player, target) {
                            return game.filterPlayer((play) => player.canUse(card, play, false, false)).includes(target);
                        },
                        prompt: '火力全开:可立即使用一张牌(无距离和次数限制)',
                        ai1(card) {
                            if (card.name == 'sha' && player.getCardUsable('sha') <= 0) return 99;
                            else return get.order(card);
                        },
                    });
                },
            },
            hyym_zhanshufangun: {
                _priority: 100,
                audio: 'ext:桃源幻梦/audio/技能配音/徐盛:2',
                filter(event, player) {
                    if (event.parent.excluded.includes(player)) return false;
                    return event.card && (event.card.suit == 'diamond' || [10, 11, 12, 13].includes(event.card.number));
                },
                logTarget: 'player',
                check(event, player) {
                    return !(['hyym_tanghulubaozhu', 'hyym_zhengzhan', 'zhuge', 'zhangba', 'hyym_chujiqixveyao', 'hyym_biyingtudulongka', 'huogong'].includes(event.card.name) || (event.card.name == 'hyym_caihongfengbaotang' && player.isDamaged()) || (event.card.name == 'hyym_zhongjiqixveyao' && player.maxhp - player.hp > 1) || (event.card.name == 'hyym_maomaoshendezhufu' && game.filterPlayer((play) => player.canUse({ name: 'sha' }, play, false, false) && get.effect(play, { name: 'sha' }, player, player) > 0).length > 1) || (event.card.name == 'jiu' && player.hp <= 0) || (event.card.name == 'tao' && player.hp < 2));
                },
                trigger: { target: 'useCardToTargeted' },
                content() {
                    player.draw(2);
                    trigger.parent.excluded.add(player);
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (((card.suit && card.suit == 'diamond') || (card.number && card.number >= 10)) && player.canUse(card, player, true, true) && get.effect(player, card, player, player) > 0 && !(['hyym_tanghulubaozhu', 'hyym_zhengzhan', 'zhuge', 'zhangba', 'hyym_chujiqixveyao', 'hyym_biyingtudulongka', 'huogong'].includes(card.name) || (card.name == 'hyym_caihongfengbaotang' && player.isDamaged()) || (card.name == 'hyym_zhongjiqixveyao' && player.maxhp - player.hp > 1) || (card.name == 'hyym_maomaoshendezhufu' && game.filterPlayer((play) => player.canUse({ name: 'sha' }, play, false, false) && get.effect(play, { name: 'sha' }, player, player) > 0).length > 1) || (card.name == 'jiu' && player.hp <= 0) || (card.name == 'tao' && player.hp < 2))) return num + 20;
                        else if (get.tag(card, 'damage') > 0.5) {
                            if (!game.hasPlayer((play) => player.canUse({ name: 'sha' }, play, true, true)) && card.name == 'sha') return 99;
                        }
                    },
                    aiValue(player, card, num) {
                        if (player.isPhaseUsing()) {
                            if ((card.suit == 'diamond' || [10, 11, 12, 13].includes(card.number)) && !(['hyym_tanghulubaozhu', 'hyym_zhengzhan', 'zhuge', 'zhangba', 'hyym_chujiqixveyao', 'hyym_biyingtudulongka', 'huogong'].includes(card.name) || (card.name == 'hyym_caihongfengbaotang' && player.isDamaged()) || (card.name == 'hyym_zhongjiqixveyao' && player.maxhp - player.hp > 1) || (card.name == 'hyym_maomaoshendezhufu' && game.filterPlayer((play) => player.canUse({ name: 'sha' }, play, false, false) && get.effect(play, { name: 'sha' }, player, player) > 0).length > 1) || (card.name == 'jiu' && player.hp <= 0) || (card.name == 'tao' && player.hp < 2))) return 99;
                            else if (get.tag(card, 'damage') > 0.5) return num * 0.1 + 30;
                            else if (['hyym_biyingtudulongka', 'hyym_zhengzhan'].includes(card.name)) return num * 0.1 + 29;
                            else if (['zhuge', 'hyym_maomaoshendezhufu', 'zhangba'].includes(card.name)) return num * 0.1 + 28;
                        }
                    },
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if ((card.suit == 'diamond' || [10, 11, 12, 13].includes(card.number)) && !(['hyym_tanghulubaozhu', 'hyym_zhengzhan', 'zhuge', 'zhangba', 'hyym_chujiqixveyao', 'hyym_biyingtudulongka', 'huogong'].includes(card.name) || (card.name == 'hyym_caihongfengbaotang' && player.isDamaged()) || (card.name == 'hyym_zhongjiqixveyao' && player.maxhp - player.hp > 1) || (card.name == 'hyym_maomaoshendezhufu' && game.filterPlayer((play) => player.canUse({ name: 'sha' }, play, false, false) && get.effect(play, { name: 'sha' }, player, player) > 0).length > 1) || (card.name == 'jiu' && player.hp <= 0) || (card.name == 'tao' && player.hp < 2))) return [0, 2, 0, 0];
                        },
                    },
                },
            },
            hyym_cangqiongjiguang: {
                derivation: 'hyym_zhimangyichang',
            },
            hyym_shanguang: {},
            hyym_shanhui: {},
            hyym_fusu: {},
            hyym_wubu: {},
            hyym_lianhong: {},
            hyym_yihesu: {
                enable: 'chooseToUse',
                hiddenCard(player, name) {
                    if ((name == 'hyym_youlingneilitang' || name == 'hyym_caomei' || name == 'hyym_xiaomijiu') && lib.inpile.includes(name) && !player.getStorage('hyym_yihesu_count').includes(name) && player.storage.yihesu.includes(name)) return true;
                },
                mark: true,
                marktext: '酥',
                intro: {
                    name: '一合酥',
                    content(storage, player) {
                        var list = [];
                        if (!player.getStorage('hyym_yihesu_count').includes('hyym_youlingneilitang') && player.storage.yihesu.includes('hyym_youlingneilitang')) list.push('【幽灵内力糖】');
                        if (!player.getStorage('hyym_yihesu_count').includes('hyym_caomei') && player.storage.yihesu.includes('hyym_caomei')) list.push('【草莓】');
                        if (!player.getStorage('hyym_yihesu_count').includes('hyym_xiaomijiu') && player.storage.yihesu.includes('hyym_xiaomijiu')) list.push('【小米酒】');
                        return '本出牌阶段剩余选项为' + list;
                    },
                },
                init(player, skill) {
                    if (!player.storage.yihesu) player.storage.yihesu = ['hyym_youlingneilitang', 'hyym_caomei', 'hyym_xiaomijiu'];
                },
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    var storage = player.storage.hyym_yihesu_count;
                    for (var i of lib.inpile) {
                        if (i != 'hyym_youlingneilitang' && i != 'hyym_caomei' && i != 'hyym_xiaomijiu') continue;
                        if ((i == 'hyym_youlingneilitang' || i == 'hyym_caomei') && !game.hasPlayer((play) => player.canUse(i, play, true, true))) continue;
                        if (!player.storage.yihesu.includes(i)) continue;
                        if (storage && storage.includes(i)) continue;
                        var card = { name: i };
                        if (event.filterCard && event.filterCard(card, player, event)) return true;
                    }
                    return false;
                },
                content() { },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        var storage = player.storage.hyym_yihesu_count;
                        for (var i of lib.inpile) {
                            if (i != 'hyym_youlingneilitang' && i != 'hyym_caomei' && i != 'hyym_xiaomijiu') continue;
                            if ((i == 'hyym_youlingneilitang' || i == 'hyym_caomei') && !game.hasPlayer((play) => player.canUse(i, play, true, true))) continue;
                            if (!player.storage.yihesu.includes(i)) continue;
                            if (storage && storage.includes(i)) continue;
                            var card = { name: i };
                            if (event.filterCard && event.filterCard(card, player, event)) list.push(['', '', i]);
                        }
                        return ui.create.dialog('一合酥', [list, 'vcard'], 'hidden');
                    },
                    check(button) {
                        var player = _status.event.player;
                        if (button.link[2] == 'hyym_xiaomijiu' && _status.event.parent.dying) return get.attitude(player, _status.event.parent.dying);
                        else if (button.link[2] == 'hyym_youlingneilitang') {
                            for (var i = 0; i < game.filterPlayer().length; i++) {
                                if (get.effect(game.filterPlayer()[i], { name: 'hyym_youlingneilitang' }, player, player) > 0) return get.effect(game.filterPlayer()[i], { name: 'hyym_youlingneilitang' }, player, player);
                            }
                            return false;
                        } else return player.getUseValue({ name: button.link[2] }) / 4;
                    },
                    backup(links, player) {
                        return {
                            selectCard: -1,
                            filterCard: () => false,
                            viewAs: {
                                name: links[0][2],
                            },
                            precontent() {
                                var name = event.result.card.name;
                                player.addTempSkill('hyym_yihesu_count', 'phaseUseAfter');
                                player.markAuto('hyym_yihesu_count', [name]);
                            },
                        };
                    },
                    prompt(links, player) {
                        var name = links[0][2];
                        return `请选择${get.translation(name)}的目标`;
                    },
                },
                mod: {
                    aiOrder(player, card, num) {
                        let list = ['tao', 'hyym_chujiqixveyao', 'hyym_zhongjiqixveyao', 'hyym_youlingqixvetang'];
                        if (list.includes(card.name)) return 11.99;
                    },
                },
                ai: {
                    order() {
                        return 11.9;
                    },
                    skillTagFilter(player, tag) {
                        var storage = player.storage.hyym_yihesu_count;
                        if (storage && storage.includes('s' + tag.slice(8))) return false;
                    },
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
                group: ['hyym_yihesu_1', 'hyym_yihesu_2'],
                subSkill: {
                    count: { charlotte: true, onremove: true },
                    1: {
                        trigger: { player: 'useCardAfter' },
                        forced: true,
                        charlotte: true,
                        popup: false,
                        filter(event, player) {
                            return event.skill == 'hyym_yihesu_backup';
                        },
                        content() {
                            if (trigger.card.name == 'hyym_youlingneilitang') {
                                game.playAudio('../extension/桃源幻梦/audio/技能配音/杨修/hyym_yihesu1.mp3');
                                player.say('<span style="font-family:xingkai">我爱吃糖果~</span>');
                            }
                            if (trigger.card.name == 'hyym_caomei') {
                                game.playAudio('../extension/桃源幻梦/audio/技能配音/杨修/hyym_yihesu2.mp3');
                                player.say('<span style="font-family:xingkai">布布巴~</span>');
                            }
                            if (trigger.card.name == 'hyym_xiaomijiu') {
                                game.playAudio('../extension/桃源幻梦/audio/技能配音/杨修/hyym_yihesu3.mp3');
                                player.say('<span style="font-family:xingkai">噗噜噗噜变~</span>');
                            }
                            player.draw();
                        },
                    },
                    2: {
                        audio: 'ext:桃源幻梦/audio/技能配音/杨修:1',
                        forced: true,
                        juexingji: true,
                        trigger: { player: 'phaseBegin' },
                        filter(event, player) {
                            return player.hp == 1 && !player.storage.hyym_yihesu2;
                        },
                        content() {
                            'step 0';
                            player.awakenSkill('hyym_yihesu_2');
                            player.storage.hyym_yihesu2 = true;
                            player
                                .chooseControl(['幽灵内力糖', '草莓', '小米酒'])
                                .set('prompt', '移除一个选项')
                                .set('ai', function () {
                                    if (game.filterPlayer((play) => get.attitude(player, play) > 0 && play != player && player.canUse('hyym_caomei', play, true, true)).length + player.countDisabledSlot() + Math.min(game.countGroup(), 3) >= 2) return '小米酒';
                                    else return '草莓';
                                });
                            ('step 1');
                            event.control = result.control;
                            if (event.control == '幽灵内力糖') {
                                player.storage.yihesu.remove('hyym_youlingneilitang');
                                game.log(player, '移除了【一合酥】①的【幽灵内力糖】选项');
                            }
                            if (event.control == '草莓') {
                                player.storage.yihesu.remove('hyym_caomei');
                                game.log(player, '移除了【一合酥】①的【草莓】选项');
                            }
                            if (event.control == '小米酒') {
                                player.storage.yihesu.remove('hyym_xiaomijiu');
                                game.log(player, '移除了【一合酥】①的【小米酒】选项');
                            }
                            player.gain(game.createCard2('hyym_maomaoshendejuangu', lib.suit.randomGet(), Math.floor(Math.random() * 13) + 1), 'gain2');
                        },
                    },
                },
            },
            hyym_dasaochu: {
                enable: 'phaseUse',
                audio: 'ext:桃源幻梦/audio/技能配音/杨修:2',
                filter(event, player) {
                    return (
                        (player.storage.jiquanshengtian && player.storage.jiquanshengtian.length) ||
                        player.countCards('he', function (card) {
                            return get.type(card) != 'basic';
                        }) >= 2
                    );
                },
                filterTarget(card, player, target) {
                    return target != player && (target.hujia > 0 || target.hasSkill('hyym_gptiyankax') || target.hasSkill('hyym_yijigongji') || target.hasSkill('hyym_yijifangyu') || target.hasSkill('hyym_baozoubingganx') || target.hasSkill('hyym_biandabianxiaoroux') || target.hasSkill('hyym_guihuajiux') || target.hasSkill('hyym_hongzaozongzix') || target.hasSkill('hyym_huoliguox') || target.hasSkill('hyym_jidanzongzix') || target.hasSkill('hyym_jindingjiux') || target.hasSkill('hyym_longjijiux') || target.hasSkill('hyym_lvdouzongzix') || target.hasSkill('hyym_nverhongx') || target.hasSkill('hyym_qianxingbingganx') || target.hasSkill('hyym_xianrouzongzix') || target.hasSkill('hyym_xianroux') || target.hasSkill('hyym_xianrouy') || target.hasSkill('hyym_xianrou') || target.hasSkill('hyym_zhuangyuanhongx') || target.hasSkill('hyym_beibaokuozhanmokax') || target.hasSkill('hyym_dilaoshuyanhuax') || target.hasSkill('hyym_dilaoshuyanhuay') || target.hasSkill('hyym_maomaoshendezhufux'));
                },
                content() {
                    'step 0';
                    if (player.storage.jiquanshengtian.length)
                        player
                            .chooseToDiscard(2, 'he', false, '弃置两张非基本牌,或点<取消>并移除【鸡犬升天】中的一个选项', function (card) {
                                return get.type(card) != 'basic';
                            })
                            .set('ai', (card) => {
                                return 6 - get.value(card);
                            });
                    else
                        player
                            .chooseToDiscard(2, 'he', true, '弃置两张非基本牌', function (card) {
                                return get.type(card) != 'basic';
                            })
                            .set('ai', (card) => {
                                return 6.1 - get.value(card);
                            });
                    ('step 1');
                    if (!result.cards) {
                        player
                            .chooseControl(player.storage.jiquanshengtian)
                            .set('prompt', '移除一个选项')
                            .set('ai', function () {
                                if (player.storage.jiquanshengtian.includes('hyym_shuaipao') && game.players.length == 2) return 'hyym_shuaipao';
                                else if (player.storage.jiquanshengtian.includes('hyym_qingdianyanhua')) return 'hyym_qingdianyanhua';
                                else if (player.storage.jiquanshengtian.includes('hyym_shuaipao')) return 'hyym_shuaipao';
                                else if (player.storage.jiquanshengtian.includes('hyym_tanghulubaozhu')) return 'hyym_tanghulubaozhu';
                            });
                    } else event.goto(3);
                    ('step 2');
                    event.control = result.control;
                    if (event.control == 'hyym_qingdianyanhua') {
                        player.storage.jiquanshengtian.remove('hyym_qingdianyanhua');
                        game.log(player, '移除了【鸡犬升天】的【庆典烟花】选项');
                    }
                    if (event.control == 'hyym_shuaipao') {
                        player.storage.jiquanshengtian.remove('hyym_shuaipao');
                        game.log(player, '移除了【鸡犬升天】的【摔炮】选项');
                    }
                    if (event.control == 'hyym_tanghulubaozhu') {
                        player.storage.jiquanshengtian.remove('hyym_tanghulubaozhu');
                        game.log(player, '移除了【鸡犬升天】的【糖葫芦爆竹】选项');
                    }
                    ('step 3');
                    if (target.hasSkill('hyym_gptiyankax')) {
                        delete target.storage.hyym_gptiyankax;
                        delete target.storage.hyym_gptiyan;
                        delete target.storage.hyym_gptiyankax_markcount;
                        delete target.storage.hyym_gptiyan_markcount;
                        target.removeSkill('hyym_gptiyankax');
                    }
                    if (target.hasSkill('hyym_yijigongji')) {
                        target.storage.hyym_yijigongjiyao = 0;
                        target.removeMark('hyym_yijigongji');
                        target.removeSkill('hyym_yijigongji');
                    }
                    if (target.hasSkill('hyym_yijifangyu')) {
                        target.storage.hyym_yijifangyuyao = 0;
                        target.removeMark('hyym_yijifangyu');
                        target.removeSkill('hyym_yijifangyu');
                    }
                    if (target.hasSkill('hyym_baozoubingganx')) {
                        target.removeMark('hyym_baozoubingganx');
                        target.removeSkill('hyym_baozoubingganx');
                    }
                    if (target.hasSkill('hyym_biandabianxiaoroux')) {
                        delete target.storage.hyym_biandabianxiaoroux;
                        delete target.storage.hyym_biandabianxiaoroux_markcount;
                        target.removeSkill('hyym_biandabianxiaoroux');
                    }
                    if (target.hasSkill('hyym_guihuajiux')) {
                        target.removeSkill('hyym_guihuajiux');
                    }
                    if (target.hasSkill('hyym_hongzaozongzix')) {
                        delete target.storage.hyym_hongzaozongzix;
                        delete target.storage.hyym_hongzaozongzix_markcount;
                        target.removeSkill('hyym_hongzaozongzix');
                    }
                    if (target.hasSkill('hyym_huoliguox')) {
                        delete target.storage.hyym_huoliguox;
                        delete target.storage.hyym_huoliguox_markcount;
                        target.removeSkill('hyym_huoliguox');
                    }
                    if (target.hasSkill('hyym_jidanzongzix')) {
                        delete target.storage.hyym_jidanzongzix;
                        delete target.storage.hyym_jidanzongzix_markcount;
                        target.removeSkill('hyym_jidanzongzix');
                    }
                    if (target.hasSkill('hyym_jindingjiux')) {
                        target.removeMark('hyym_jindingjiux');
                        target.removeSkill('hyym_jindingjiux');
                    }
                    if (target.hasSkill('hyym_longjijiux')) {
                        target.removeMark('hyym_longjijiux');
                        target.removeSkill('hyym_longjijiux');
                    }
                    if (target.hasSkill('hyym_lvdouzongzix')) {
                        delete target.storage.hyym_lvdouzongzix;
                        delete target.storage.hyym_lvdouzongzix_markcount;
                        target.removeSkill('hyym_lvdouzongzix');
                    }
                    if (target.hasSkill('hyym_nverhongx')) {
                        target.removeMark('hyym_nverhongx');
                        target.removeSkill('hyym_nverhongx');
                    }
                    if (target.hasSkill('hyym_qianxingbingganx')) {
                        delete target.storage.hyym_qianxingbingganx;
                        delete target.storage.hyym_qianxingbingganx_markcount;
                        target.removeSkill('hyym_qianxingbingganx');
                    }
                    if (target.hasSkill('hyym_xianrouzongzix')) {
                        target.removeMark('hyym_xianrouzongzix');
                        target.removeSkill('hyym_xianrouzongzix');
                    }
                    if (target.hasSkill('hyym_xianroux')) {
                        target.removeMark('hyym_xianroux');
                        target.removeSkill('hyym_xianroux');
                    }
                    if (target.hasSkill('hyym_xianrouy')) {
                        target.removeMark('hyym_xianrouy');
                        target.removeSkill('hyym_xianrouy');
                    }
                    if (target.hasSkill('hyym_xianrou')) {
                        target.removeMark('hyym_xianrou');
                        target.removeSkill('hyym_xianrou');
                    }
                    if (target.hasSkill('hyym_zhuangyuanhongx')) {
                        target.removeMark('hyym_zhuangyuanhongx');
                        target.removeSkill('hyym_zhuangyuanhongx');
                    }
                    if (target.hasSkill('hyym_beibaokuozhanmokax')) {
                        delete target.storage.hyym_beibaokuozhanmokax;
                        delete target.storage.hyym_moka;
                        delete target.storage.hyym_beibaokuozhanmokax_markcount;
                        delete target.storage.hyym_moka_markcount;
                        target.removeSkill('hyym_beibaokuozhanmokax');
                        target.removeSkill('hyym_beibaokuozhanmokax_use');
                    }
                    if (target.hasSkill('hyym_dilaoshuyanhuax')) {
                        target.removeMark('hyym_dilaoshuyanhuax');
                        target.removeSkill('hyym_dilaoshuyanhuax');
                    }
                    if (target.hasSkill('hyym_dilaoshuyanhuay')) {
                        target.removeMark('hyym_dilaoshuyanhuay');
                        target.removeSkill('hyym_dilaoshuyanhuay');
                    }
                    if (target.hasSkill('hyym_maomaoshendezhufux')) {
                        delete target.storage.hyym_maomaoshendezhufux;
                        delete target.storage.hyym_maomaoshendezhufux_markcount;
                        target.removeSkill('hyym_maomaoshendezhufux');
                    }
                    if (target.hujia > 0) target.changeHujia(-target.hujia);
                },
                ai: {
                    order: 11.8,
                    expose: 0.1,
                    result: {
                        target(player, target) {
                            var num = 0;
                            if (target.hasSkill('hyym_gptiyankax')) num -= 2;
                            if (target.hasSkill('hyym_yijigongji')) num -= 1;
                            if (target.hasSkill('hyym_yijifangyu')) num -= 1;
                            if (target.hasSkill('hyym_baozoubingganx')) num -= 2;
                            if (target.hasSkill('hyym_guihuajiux')) num -= 1;
                            if (target.hasSkill('hyym_hongzaozongzix')) num -= 1;
                            if (target.hasSkill('hyym_huoliguox')) num -= 1;
                            if (target.hasSkill('hyym_jidanzongzix')) num -= 1;
                            if (target.hasSkill('hyym_jindingjiux')) num -= 2;
                            if (target.hasSkill('hyym_longjijiux')) num -= 1;
                            if (target.hasSkill('hyym_nverhongx')) num -= 1;
                            if (target.hasSkill('hyym_qianxingbingganx')) num -= 1;
                            if (target.hasSkill('hyym_xianrouzongzix') || target.hasSkill('hyym_xianroux') || target.hasSkill('hyym_xianrouy') || target.hasSkill('hyym_xianrou')) num -= 1;
                            if (target.hasSkill('hyym_zhuangyuanhongx')) num -= 2;
                            if (target.hasSkill('hyym_beibaokuozhanmokax')) num -= 1;
                            if (target.hasSkill('hyym_maomaoshendezhufux')) num -= 1;
                            return num - target.hujia * 2;
                        },
                        player(player, target) {
                            if (
                                player.countCards('he', function (card) {
                                    return get.type(card) != 'basic' && get.value(card) < 6.1;
                                }) >= 2
                            )
                                return -1.1;
                            else if (player.storage.jiquanshengtian.includes('hyym_qingdianyanhua')) return -1.5;
                            else if (
                                player.countCards('he', function (card) {
                                    return get.type(card) != 'basic';
                                }) >= 2
                            )
                                return -2.1;
                            else return -3.5;
                        },
                    },
                },
            },
            hyym_jiquanshengtian: {
                mark: true,
                marktext: '坤',
                intro: {
                    name: '鸡犬升天',
                    content(storage, player) {
                        var list = [];
                        if (!player.hasSkill('hyym_jiquanshengtian1') && player.storage.jiquanshengtian.includes('hyym_qingdianyanhua')) list.push('【庆典烟花】');
                        if (!player.hasSkill('hyym_jiquanshengtian2') && player.storage.jiquanshengtian.includes('hyym_shuaipao')) list.push('【摔炮】');
                        if (!player.hasSkill('hyym_jiquanshengtian3') && player.storage.jiquanshengtian.includes('hyym_tanghulubaozhu')) list.push('【糖葫芦爆竹】');
                        return '本轮剩余选项为' + list;
                    },
                },
                audio: 'ext:桃源幻梦/audio/技能配音/杨修:2',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return player.countCards('he') > 0 && ((player.storage.jiquanshengtian.includes('hyym_qingdianyanhua') && !player.hasSkill('hyym_jiquanshengtian1') && game.hasPlayer((play) => player.canUse('hyym_qingdianyanhua', play, true, true))) || (player.storage.jiquanshengtian.includes('hyym_shuaipao') && !player.hasSkill('hyym_jiquanshengtian2') && game.hasPlayer((play) => player.canUse('hyym_shuaipao', play, true, true))) || (player.storage.jiquanshengtian.includes('hyym_tanghulubaozhu') && !player.hasSkill('hyym_jiquanshengtian3') && game.hasPlayer((play) => player.canUse('hyym_tanghulubaozhu', play, true, true))));
                },
                init(player, skill) {
                    if (!player.storage.jiquanshengtian) player.storage.jiquanshengtian = ['hyym_qingdianyanhua', 'hyym_shuaipao', 'hyym_tanghulubaozhu'];
                },

                forced: true,
                content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    ('step 1');
                    var listkk = [];
                    if (!player.hasSkill('hyym_jiquanshengtian1') && player.storage.jiquanshengtian.includes('hyym_qingdianyanhua') && game.hasPlayer((play) => player.canUse('hyym_qingdianyanhua', play, true, true))) listkk.push('hyym_qingdianyanhua');
                    if (!player.hasSkill('hyym_jiquanshengtian2') && player.storage.jiquanshengtian.includes('hyym_shuaipao') && game.hasPlayer((play) => player.canUse('hyym_shuaipao', play, true, true))) listkk.push('hyym_shuaipao');
                    if (!player.hasSkill('hyym_jiquanshengtian3') && player.storage.jiquanshengtian.includes('hyym_tanghulubaozhu') && game.hasPlayer((play) => player.canUse('hyym_tanghulubaozhu', play, true, true))) listkk.push('hyym_tanghulubaozhu');
                    player.chooseToDiscard(1, 'he', false, '是否发动【鸡犬升天】？', '弃一张牌,从以下范围印牌:' + get.translation(listkk)).set('ai', (card) => {
                        if ((player.storage.jiquanshengtian.includes('hyym_qingdianyanhua') && !player.hasSkill('hyym_jiquanshengtian1') && game.filterPlayer((play) => play != player && (get.attitude(player, play) > 0 || get.damageEffect(play, player, player) <= 0)).length < (player.getDamagedHp() || 1) && game.hasPlayer((play) => player.canUse('hyym_qingdianyanhua', play, true, true))) || (player.storage.jiquanshengtian.includes('hyym_shuaipao') && !player.hasSkill('hyym_jiquanshengtian2') && game.filterPlayer((play) => get.attitude(player, play) < 0 && player.canUse('hyym_shuaipao', play, true, true) && get.damageEffect(play, player, player) > 0).length) || (player.storage.jiquanshengtian.includes('hyym_tanghulubaozhu') && !player.hasSkill('hyym_jiquanshengtian3') && game.hasPlayer((play) => get.attitude(player, play) > 0 && player.canUse('hyym_tanghulubaozhu', play, true, true)))) return 99 - get.value(card);
                        else return 0;
                    });
                    ('step 2');
                    if (result.bool) {
                        var list = [];
                        if (!player.hasSkill('hyym_jiquanshengtian1') && player.storage.jiquanshengtian.includes('hyym_qingdianyanhua') && game.hasPlayer((play) => player.canUse('hyym_qingdianyanhua', play, true, true))) list.push('庆典烟花');
                        if (!player.hasSkill('hyym_jiquanshengtian2') && player.storage.jiquanshengtian.includes('hyym_shuaipao') && game.hasPlayer((play) => player.canUse('hyym_shuaipao', play, true, true))) list.push('摔炮');
                        if (!player.hasSkill('hyym_jiquanshengtian3') && player.storage.jiquanshengtian.includes('hyym_tanghulubaozhu') && game.hasPlayer((play) => player.canUse('hyym_tanghulubaozhu', play, true, true))) list.push('糖葫芦爆竹');
                        player
                            .chooseControl(list)
                            .set('prompt', '视为使用其中一张牌')
                            .set('ai', function () {
                                var player = _status.event.player;
                                if (list.includes('摔炮') && game.filterPlayer((play) => play.hp == 1 && play.hujia == 0 && get.attitude(player, play) < 0 && player.canUse('hyym_shuaipao', play, true, true) && get.damageEffect(play, player, player) > 0).length && (game.players.length - 1 > (player.getDamagedHp() || 1) || game.filterPlayer((play) => get.damageEffect(play, player, player) > 0).length == 1) && player.countMark('e') < player.countEnabledSlot()) return '摔炮';
                                else if (list.includes('庆典烟花') && game.filterPlayer((play) => play.hp == 1 && play.hujia == 0 && get.attitude(player, play) < 0 && get.damageEffect(play, player, player) > 0).length && game.players.length - 1 <= (player.getDamagedHp() || 1)) return '庆典烟花';
                                else if (list.includes('摔炮') && game.filterPlayer((play) => play.hp == 1 && play.hujia == 0 && get.attitude(player, play) < 0 && player.canUse('hyym_shuaipao', play, true, true) && get.damageEffect(play, player, player) > 0).length) return '摔炮';
                                else if (list.includes('糖葫芦爆竹')) return '糖葫芦爆竹';
                                else if (list.includes('庆典烟花') && game.filterPlayer((play) => get.attitude(player, play) < 0 && get.damageEffect(play, player, player) > 0).length > 1 && game.players.length - 1 <= (player.getDamagedHp() || 1)) return '庆典烟花';
                                else if (list.includes('摔炮') && game.filterPlayer((play) => get.attitude(player, play) < 0 && player.canUse('hyym_shuaipao', play, true, true) && get.damageEffect(play, player, player) > 0).length) return '摔炮';
                                else if (list.includes('庆典烟花')) return '庆典烟花';
                            });
                    } else event.finish();
                    ('step 3');
                    event.control = result.control;
                    if (event.control == '庆典烟花') {
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/杨修/hyym_jiquanshengtian3.mp3');
                        player.chooseUseTarget(true, '请选择【庆典烟花】的目标', { name: 'hyym_qingdianyanhua' });
                        player.addTempSkill('hyym_jiquanshengtian1', 'roundStart');
                    }
                    if (event.control == '摔炮') {
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/杨修/hyym_jiquanshengtian4.mp3');
                        player.chooseUseTarget(true, '请选择【摔炮】的目标', { name: 'hyym_shuaipao' });
                        player.addTempSkill('hyym_jiquanshengtian2', 'roundStart');
                    }
                    if (event.control == '糖葫芦爆竹') {
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/杨修/hyym_jiquanshengtian5.mp3');
                        player.chooseUseTarget(true, '请选择【糖葫芦爆竹】的目标', { name: 'hyym_tanghulubaozhu' });
                        player.addTempSkill('hyym_jiquanshengtian3', 'roundStart');
                    }
                    event.num--;
                    if (event.num > 0 && player.hasSkill('hyym_jiquanshengtian') && player.countCards('h') > 0 && ((player.storage.jiquanshengtian.includes('hyym_qingdianyanhua') && !player.hasSkill('hyym_jiquanshengtian1') && game.hasPlayer((play) => player.canUse('hyym_qingdianyanhua', play, true, true))) || (player.storage.jiquanshengtian.includes('hyym_shuaipao') && !player.hasSkill('hyym_jiquanshengtian2') && game.hasPlayer((play) => player.canUse('hyym_shuaipao', play, true, true))) || (player.storage.jiquanshengtian.includes('hyym_tanghulubaozhu') && !player.hasSkill('hyym_jiquanshengtian3') && game.hasPlayer((play) => player.canUse('hyym_tanghulubaozhu', play, true, true))))) {
                        event.goto(1);
                    }
                },
                ai: {
                    maixie: true,
                    maixie_defend: true,
                },
            },
            hyym_jiquanshengtian1: {},
            hyym_jiquanshengtian2: {},
            hyym_jiquanshengtian3: {},
            hyym_huayingxuan: {
                audio: 'ext:桃源幻梦/audio/技能配音/夭吕玲绮:2',
                trigger: { player: ['phaseZhunbeiBegin', 'hyym_lingqiangwuAfter', 'hyym_nihuapoAfter', 'hyym_huayinfuAfter'] },
                filter(event, player) {
                    return player.countCards('h') > 0 && player.hasCard((card) => !player.getStorage('hyym_huayingxuan').includes(card), 'h') && player.storage.hyym_huayingxuan_1 < 2;
                },
                check(event, player) {
                    return true;
                },
                init(player, skill) {
                    if (!player.storage.hyym_huayingxuan_1) player.storage.hyym_huayingxuan_1 = 0;
                },
                mark: true,
                marktext: '花',
                intro: {
                    name: '花影旋',
                    markcount(storage, player) {
                        return player.storage.hyym_huayingxuan_1;
                    },
                    content(storage, player) {
                        return `本回合剩余发动次数:${2 - player.storage.hyym_huayingxuan_1}次`;
                    },
                },
                prompt2: '你可为一张手牌添加<花影>标记,可令一张手牌视为【刺杀】',
                content() {
                    'step 0';
                    player.addMark('hyym_huayingxuan_1', 1);
                    if (player.hasCard((card) => !player.getStorage('hyym_huayingxuan').includes(card), 'h')) {
                        player
                            .chooseCard('h', true, '为一张手牌添加<花影>标记', 1, function (card) {
                                return !player.getStorage('hyym_huayingxuan').includes(card);
                            })
                            .set('ai', function (card) {
                                var player = _status.event.player;
                                if (player != _status.currentPhase) {
                                    if (game.hasPlayer((play) => player.canUse(card, play, true, true) && get.effect(play, card, player, player) > 0)) return 20 + get.value(card);
                                    else return get.value(card);
                                } else {
                                    if (get.tag(card, 'damage')) return 20 + get.value(card);
                                    else return 20 - get.value(card);
                                }
                            });
                    }
                    ('step 1');
                    if (result.cards?.length) {
                        player.addGaintag(result.cards[0], 'hyym_huayingxuan_tag');
                        player.markAuto('hyym_huayingxuan', result.cards[0]);
                    }
                    player
                        .chooseCard('h', false, '可令一张手牌视为【刺杀】', 1, function (card) {
                            return true;
                        })
                        .set('ai', function (card) {
                            var player = _status.event.player;
                            if (player != _status.currentPhase) return 0;
                            else {
                                if (player.hasCard((card) => player.getStorage('hyym_huayingxuan').includes(card) && card.name == 'sha' && get.nature(card) == 'stab', 'h')) return 0;
                                else if (player.getStorage('hyym_huayingxuan').includes(card) && ((get.value(card) < 7 && !get.tag(card, 'damage')) || !game.hasPlayer((play) => player.canUse(card, play)))) return 100;
                                else if (card.name == 'sha') return 99;
                                else if (get.tag(card, 'damage')) return 0;
                                else return 7 - get.value(card);
                            }
                        });
                    ('step 2');
                    if (result.cards) player.addGaintag(result.cards[0], 'hyym_huayingxuan');
                },
                group: ['hyym_huayingxuan_1', 'hyym_huayingxuan_2', 'hyym_huayingxuan_3', 'hyym_huayingxuan_4'],
                subSkill: {
                    tag: {},
                    1: {
                        trigger: { global: 'gainEnd' },
                        forced: true,
                        silent: true,
                        filter(event, player) {
                            return event.cards && event.cards.length;
                        },
                        silent: true,
                        content() {
                            var cards = [];
                            if (Array.isArray(trigger.cards))
                                for (var i of trigger.cards) {
                                    if (player.getStorage('hyym_huayingxuan').includes(i)) cards.push(i);
                                }
                            trigger.player.addGaintag(cards, 'hyym_huayingxuan_tag');
                        },
                        sub: true,
                    },
                    2: {
                        audio: 'hyym_huayingxuan',
                        trigger: { source: 'damageSource' },
                        filter(event, player) {
                            return event.card && event.cards.length == 1 && event.player.isIn() && event.player != player && player.getStorage('hyym_huayingxuan').includes(event.cards[0]);
                        },
                        check(event, player) {
                            return -get.attitude(player, event.player);
                        },
                        prompt2(event, player) {
                            return `令${get.translation(event.player)}获得1枚<桃华>标记`;
                        },
                        content() {
                            'step 0';
                            event.num = Math.min(trigger.num, 9);
                            ('step 1');
                            if (!trigger.player.hasSkill('hyym_huayingxuanx')) trigger.player.addSkill('hyym_huayingxuanx');
                            trigger.player.addMark('hyym_huayingxuanx', 1);
                            event.num--;
                            ('step 2');
                            if (event.num > 0) {
                                player.chooseBool(get.prompt('hyym_huayingxuan_2'), `令${get.translation(trigger.player)}获得1枚<桃华>标记`).set('ai', () => -get.attitude(player, trigger.player));
                            } else event.finish();
                            ('step 3');
                            if (result.bool) {
                                event.goto(1);
                            }
                        },
                        sub: true,
                    },
                    3: {
                        mod: {
                            cardname(card) {
                                if (get.itemtype(card) == 'card' && card.hasGaintag('hyym_huayingxuan')) return 'sha';
                            },
                            cardnature(card, player) {
                                if (get.itemtype(card) == 'card' && card.hasGaintag('hyym_huayingxuan')) return 'stab';
                            },
                        },
                        charlotte: true,
                    },
                    4: {
                        forced: true,
                        nopop: true,
                        silent: true,
                        trigger: { global: 'phaseBefore' },
                        filter(event, player) {
                            return player.storage.hyym_huayingxuan_1 > 0;
                        },
                        content() {
                            player.storage.hyym_huayingxuan_1 = 0;
                        },
                    },
                },
            },
            hyym_huayingxuanx: {
                mark: true,
                marktext: '桃华',
                intro: {
                    name: '桃华',
                },
            },
            hyym_lingqiangwu: {
                audio: 'ext:桃源幻梦/audio/技能配音/夭吕玲绮:2',
                forced: true,
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return event.card && event.cards.length == 1 && player.getStorage('hyym_huayingxuan').includes(event.cards[0]);
                },
                content() {
                    player.draw();
                    if (get.tag(trigger.card, 'damage')) trigger.baseDamage++;
                },
                mod: {
                    targetInRange(card, player, target) {
                        if (!card.cards) return;
                        for (var i of card.cards) {
                            if (player.getStorage('hyym_huayingxuan').includes(i)) return true;
                        }
                    },
                },
            },
            hyym_nihuapo: {
                audio: 'ext:桃源幻梦/audio/技能配音/夭吕玲绮:2',
                forced: true,
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return true;
                },
                changeSeat: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget(false, '可一名要更换座次的角色,将自己移动到该角色的上家位置', function (card, player, target) {
                            return target != player && target != player.next;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            if (_status.currentPhase) var current = _status.currentPhase.next;
                            else var current = game.findPlayer((i) => i.identity == 'zhu');
                            if (_status.currentPhase && _status.currentPhase == player) {
                                var max = 20,
                                    att = 0;
                                while (max > 0) {
                                    max--;
                                    if (current == target) return att;
                                    att -= get.attitude(player, current);
                                    current = current.next;
                                }
                                return att;
                            } else {
                                if (target == current) return 2;
                                else return 0;
                            }
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        game.broadcastAll(
                            function (target1, target2) {
                                game.swapSeat(target1, target2, null, true);
                            },
                            player,
                            target,
                        );
                    }
                    if (trigger.source && trigger.source.isIn()) player.chooseBool(`是否令${get.translation(trigger.source)}获得2枚<桃华>？`).set('ai', () => get.attitude(player, trigger.source) < 0);
                    ('step 2');
                    if (result.bool && trigger.source && trigger.source.isIn()) {
                        if (!trigger.source.hasSkill('hyym_huayingxuanx')) trigger.source.addSkill('hyym_huayingxuanx');
                        trigger.source.addMark('hyym_huayingxuanx', 2);
                    }
                    if (!player.hasSkill('hyym_nihuapox')) {
                        player.addTempSkill('hyym_nihuapox', { player: 'phaseBefore' });
                        player.markSkill('hyym_nihuapox');
                    }
                },
                ai: { expose: 0.1 },
            },
            hyym_nihuapox: {
                group: 'undist',
                mark: true,
                marktext: '匿',
                intro: {
                    name: '匿花破',
                    content(storage, player) {
                        return `不计入距离和座次的计算直到${get.translation(player)}的下回合开始`;
                    },
                },
            },
            hyym_huayinfu: {
                audio: 'ext:桃源幻梦/audio/技能配音/夭吕玲绮:1',
                trigger: { player: 'phaseUseBegin' },
                filter(event, player) {
                    return game.filterPlayer((play) => play.hasSkill('hyym_huayingxuanx') && play.countMark('hyym_huayingxuanx') > 0).length;
                },
                _priority: 97,
                check(event, player) {
                    var num = 0;
                    game.filterPlayer(function (target) {
                        if (!target.countMark('hyym_huayingxuanx')) return;
                        num += target.countMark('hyym_huayingxuanx');
                    });

                    return true;
                },
                content() {
                    'step 0';
                    var info = lib.character[player.name];
                    var skills = player.getSkills();
                    var list = [];
                    for (var i = 0; i < info[3].length; i++) {
                        if (skills.includes(info[3][i])) {
                            list.push(info[3][i]);
                        }
                    }

                    if (list.length == 1) event._result = { control: list[0] };
                    else
                        player
                            .chooseControl(list)
                            .set('prompt', '选择并失去一个技能')
                            .set('forceDie', true)
                            .set('ai', function () {
                                let player = _status.event.player;
                                if ((player.hasSkill('hyym_nihuapo') && game.players.length - 1 == game.filterPlayer((play) => get.attitude(player, play) < 0).length) || get.mode() == '天命之战') return 'hyym_nihuapo';
                                else return 'hyym_huayinfu';
                            });
                    ('step 1');
                    player.removeSkill(result.control);
                    event.list = game.filterPlayer((play) => play.hasSkill('hyym_huayingxuanx') && play.countMark('hyym_huayingxuanx') > 0).sortBySeat();
                    for (var i = 0; i < event.list.length; i++) {
                        if (event.list[i].isIn()) {
                            let num = event.list[i].countMark('hyym_huayingxuanx');
                            event.list[i].removeMark('hyym_huayingxuanx', num);
                            event.list[i].removeSkill('hyym_huayingxuanx');
                            if (event.list[i].countCards('he') > 0) player.discardPlayerCard(event.list[i], 'he', Math.min(num, event.list[i].countCards('he')), true);
                        }
                    }
                    ('step 2');
                    for (var i = 0; i < event.list.length; i++) {
                        if (event.list[i].isIn()) event.list[i].damage();
                    }
                    ('step 3');
                    player.addTempSkill('hyym_huayinfux', 'phaseUseAfter');
                    player.addMark('hyym_huayinfux');
                    ('step 4');
                    for (var i = 0; i < event.list.length; i++) {
                        if (event.list[i].isIn()) player.storage.huayinfux.push(event.list[i]);
                    }
                },
            },
            hyym_huayinfux: {
                mark: true,
                marktext: '浮',
                init(player, skill) {
                    if (!player.storage.huayinfux) player.storage.huayinfux = [];
                },
                intro: {
                    name: '华隐浮',
                    content(storage, player) {
                        return get.translation(player.storage.huayinfux) + `本阶段不可响应${get.translation(player)}使用的牌`;
                    },
                },
                forced: true,
                trigger: {
                    player: 'useCard',
                },
                onremove(player) {
                    player.storage.huayinfux = [];
                },
                filter(event, player) {
                    return (
                        event.card &&
                        game.hasPlayer(function (current) {
                            return player.storage.huayinfux.includes(current);
                        })
                    );
                },
                content() {
                    trigger.directHit.addArray(
                        game.filterPlayer(function (current) {
                            return player.storage.huayinfux.includes(current);
                        }),
                    );
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return player.storage.huayinfux.includes(arg.target);
                    },
                },
            },
            hyym_anheizhousha: {},
            hyym_cishexianjing: {},
            hyym_miwuxianjing: {},
            hyym_yinguizhiqi: {},
            hyym_yingdun: {},
            hyym_gelie: {
                derivation: 'hyym_gelieyichang',
                audio: 'ext:桃源幻梦/audio/技能配音/袁绍:1',
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return (player.countCards('he', { suit: 'heart' }) > 1 || player.countCards('he', { suit: 'diamond' }) > 1 || player.countCards('he', { suit: 'club' }) > 1 || player.countCards('he', { suit: 'spade' }) > 1) && !event.player.hasSkill('hyym_geliezhuangtai') && !player.storage.hyym_gelie.includes(event.player) && event.player.isIn() && !event.player.hasSkill('hyym_lvdouzongzix');
                },

                init(player, skill) {
                    if (!player.storage.hyym_gelie) player.storage.hyym_gelie = [];
                },
                onremove(player) {
                    player.storage.hyym_gelie = [];
                },

                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseToDiscard('he', 2, false, `是否对${get.translation(trigger.player)}发动【割裂】？`, `弃两张同花色牌,令${get.translation(trigger.player)}获得<裂>`, function (card) {
                            if (ui.selected.cards.length) {
                                return card.suit == ui.selected.cards[0].suit;
                            }
                            var cards = player.getCards('he');
                            if (Array.isArray(cards))
                                for (var i of cards) {
                                    if (card != i) {
                                        if (card.suit == i.suit) return true;
                                    }
                                }
                        })
                        .set('complexCard', true)
                        .set('ai', (card) => {
                            if (get.attitude(player, trigger.player) < 0) {
                                return 10 - get.value(card);
                            } else return 0;
                        });
                    ('step 1');
                    if (result.bool) {
                        trigger.player.addMark('hyym_geliezhuangtai');
                        trigger.player.addSkill('hyym_geliezhuangtai');
                        trigger.player.storage.gelie = player;
                    }
                },
            },
            hyym_gelieyichang: {},
            hyym_fenhun: {
                enable: 'phaseUse',
                audio: 'ext:桃源幻梦/audio/技能配音/袁绍:1',
                filter(event, player) {
                    return game.hasPlayer((play) => play != player && !play.hasSkill('hyym_fenhunx'));
                },
                prompt(event, player) {
                    return '失去1点体力/减1点体力上限,令一名其他角色获得一回合【割裂】';
                },
                prompt2(event, player) {
                    return '失去1点体力/减1点体力上限,令一名其他角色获得一回合【割裂】';
                },
                filterTarget(card, player, target) {
                    return !target.hasSkill('hyym_fenhunx') && !target.hasSkill('hyym_gelie') && player != target;
                },
                content() {
                    'step 0';
                    var list1 = ['选项一', '选项二'];
                    player
                        .chooseControl(list1)
                        .set('choiceList', ['失去1点体力', '减1点体力上限'])
                        .set('prompt', '你选择一项执行')
                        .set('ai', function () {
                            if (_status.event.player.isDamaged()) return '选项二';
                            else return '选项一';
                        });
                    ('step 1');
                    event.control = result.control;
                    if (event.control == '选项一') player.loseHp();
                    if (event.control == '选项二') player.loseMaxHp();
                    target.addMark('hyym_fenhunx');
                    target.addSkill('hyym_fenhunx');
                    target.addSkill('hyym_gelie');
                    target.storage.hyym_gelie.push(player);
                },
                mod: {
                    aiOrder(player, card, num) {
                        let list = ['tao', 'hyym_chujiqixveyao', 'hyym_zhongjiqixveyao', 'hyym_youlingqixvetang'];
                        if (list.includes(card.name)) return 11.99;
                    },
                },
                ai: {
                    order() {
                        return 11.5;
                    },
                    result: {
                        player(player, target) {
                            if (!game.hasPlayer((play) => get.attitude(player, play) < 0 && !play.hasSkill('hyym_geliezhuangtai')) && game.hasPlayer((play) => play != player && get.attitude(player, play) > 0)) return -99;
                            else if (player.hp == 1 && player.maxHp == 1 && !player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) return -5;
                            else return -1;
                        },
                        target(player, target) {
                            if (game.filterPlayer((play) => get.attitude(player, play) < 0).length == game.players.length - 1 && game.players.length < 4) return -3;
                            else if (game.filterPlayer((play) => get.attitude(player, play) < 0).length == game.players.length - 1 && game.players.length > 3) return 0;
                            else if (target.countCards('h') > 2) return 3;
                            else return 0;
                        },
                    },
                    effect: {
                        target(card, player, target) {
                            if (!!!player.storage.hyym_gelie) return;
                            if (!player.storage.hyym_gelie.includes(target)) return;
                            if (get.tag(card, 'damage') > 0.5) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                else return [0, 0];
                            }
                        },
                    },
                },
            },
            hyym_fujianfa: {
                audio: 'ext:桃源幻梦/audio/技能配音/袁绍:1',
                juexingji: true,
                zhuSkill: true,
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                filter(event, player) {
                    return player.hp < 3;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_fujianfa');
                    player.gainMaxHp(2);
                    player
                        .chooseTarget(1, '是否令一名其他势力角色获得<裂>？', function (card, player, target) {
                            return target != player && target.group != player.group && !target.hasSkill('hyym_geliezhuangtai') && !target.hasSkill('hyym_lvdouzongzix');
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            var att = -get.attitude(player, target);
                            if (get.attitude(player, target) >= 0 || target.hasSkill('hyym_lvdouzongzix')) return false;
                            else return att + target.hp;
                        });
                    ('step 1');
                    if (result.bool) {
                        if (!result.targets[0].hasSkill('hyym_lvdouzongzix')) {
                            result.targets[0].addSkill('hyym_geliezhuangtai');
                            result.targets[0].markSkill('hyym_geliezhuangtai');
                        } else game.log(result.targets[0], '因【绿豆粽子】免疫了异常状态');
                    }
                    ('step 2');
                    for (var i = 0; i < game.filterPlayer().length; i++) {
                        if (game.filterPlayer()[i].hasSkill('hyym_geliezhuangtai')) game.filterPlayer()[i].loseHp();
                    }
                },
            },
            hyym_hanmang: {},
            hyym_pojun: {},
            hyym_zhanshenlingyu: {},
            hyym_yingdong: {},
            hyym_leijia: {},
            hyym_leibao: {
                derivation: 'hyym_leibaoyichang',
            },
            hyym_leibaoyichang: {},
            hyym_hundunshuangfu: {
                group: ['hyym_hundunshuangfu_1', 'hyym_hundunshuangfu_2'],
                subSkill: {
                    1: {
                        forced: true,
                        mod: {
                            targetInRange(card, player, target) {
                                if (target.countCards('h') <= target.hp && card.name == 'sha') {
                                    return true;
                                }
                            },
                        },
                    },
                    2: {
                        audio: 'ext:桃源幻梦/audio/技能配音/张宝:2',
                        trigger: { player: 'useCard2' },
                        filter(event, player) {
                            if (event.card.name != 'sha') return false;
                            return game.hasPlayer(function (current) {
                                return !event.targets.includes(current) && current.hasSkill('hyym_zhanbafangx') && player.canUse(event.card, current);
                            });
                        },
                        forced: true,
                        content() {
                            'step 0';
                            player
                                .chooseTarget(get.prompt('hyym_hundunshuangfu_2'), `为${get.translation(trigger.card)}增加一个目标`, function (card, player, target) {
                                    return !_status.event.sourcex.includes(target) && target.hasSkill('hyym_zhanbafangx') && player.canUse(_status.event.card, target);
                                })
                                .set('sourcex', trigger.targets)
                                .set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.effect(target, _status.event.card, player, player);
                                })
                                .set('card', trigger.card);
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
                                player(card, player, target, current, isLink) {
                                    if (typeof card !== 'string' && !isLink && card.name == 'sha') {
                                        if (player._hundunshuangfutmp) return;
                                        player._hundunshuangfutmp = true;
                                        if (get.effect(target, card, player, player) <= 0) {
                                            delete player._hundunshuangfutmp;
                                            return;
                                        }
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != target && current.hasSkill('hyym_zhanbafangx') && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        ) {
                                            delete player._hundunshuangfutmp;
                                            return [1, 1];
                                        }
                                        delete player._hundunshuangfutmp;
                                    }
                                },
                            },
                        },
                    },
                },
            },
            hyym_zhanbafang: {
                audio: 'ext:桃源幻梦/audio/技能配音/张宝:2',
                trigger: { player: 'phaseUseBegin' },
                filter(event, player) {
                    return true;
                },
                check(event, player) {
                    return true;
                },
                _priority: 97,

                prompt2: '摸八张牌并毁灭世界',
                content() {
                    'step 0';
                    player.say('<span style="font-family:xingkai">让你兵败如山倒!</span>');
                    player.draw(8);
                    event.num = 0;
                    ('step 1');
                    if (game.hasPlayer((play) => !play.hasSkill('hyym_zhanbafangx')))
                        player.chooseCardTarget({
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return !target.hasSkill('hyym_zhanbafangx');
                            },
                            ai1(card) {
                                if (card.name == 'shan' && player.hasSkill('hyym_cannianchengxin')) return 0.01;
                                else return get.value(card);
                            },
                            ai2(target) {
                                var player = _status.event.player;
                                return 99 - get.attitude(player, target);
                            },
                            prompt: '可依次将任意张牌当<战>置于等量角色武将牌上',
                        });

                    ('step 2');
                    if (result.targets?.length) {
                        event.tar = result.targets[0];
                        var card = result.cards[0];
                        event.tar.addToExpansion(card, player, 'give').gaintag.add('hyym_zhanbafangx');
                        event.tar.addSkill('hyym_zhanbafangx');
                        event.tar.storage.hyym_zhanbafangx = card;
                        event.num++;
                    } else event.goto(4);
                    //event.tar = result.targets.sortBySeat();
                    //event.num = 0;
                    //event.num1 = 8 - result.targets.length;
                    //if(event.tar.length == 0) event.goto(5);
                    //var card =player.getCards('he').randomGet();

                    ('step 3');
                    if (player.countCards('he') > 0 && game.hasPlayer((play) => !play.hasSkill('hyym_zhanbafangx'))) event.goto(1);
                    ('step 4');
                    event.num1 = 8 - event.num;
                    if (Math.min(player.countCards('he'), event.num1) > 0) player.randomDiscard('he', Math.min(player.countCards('he'), event.num1), true);
                },
                group: ['hyym_zhanbafang_1', 'hyym_zhanbafang_2', 'hyym_zhanbafang_3'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            return game.hasPlayer((play) => play.hasSkill('hyym_zhanbafangx'));
                        },
                        content() {
                            trigger.directHit.addArray(
                                game.filterPlayer(function (current) {
                                    return current.hasSkill('hyym_zhanbafangx');
                                }),
                            );
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                return arg.target.hasSkill('hyym_zhanbafangx');
                            },
                        },
                        mod: {
                            playerEnabled(card, player, target) {
                                if (player.isPhaseUsing() && !target.hasSkill('hyym_zhanbafangx') && get.tag(card, 'damage') > 0.5) return false;
                            },
                        },
                    },
                    2: {
                        audio: 'ext:桃源幻梦/audio/技能配音/张宝:2',
                        forced: true,
                        trigger: { source: 'damageSource' },
                        filter(event, player) {
                            return event.player.hasSkill('hyym_zhanbafangx');
                        },
                        content() {
                            var card = trigger.player.storage.hyym_zhanbafangx;
                            trigger.player.$give(card, player);
                            player.gain(card);
                            trigger.player.removeSkill('hyym_zhanbafangx');
                        },
                    },
                    3: {
                        trigger: { global: 'die' },
                        forced: true,
                        nopop: true,
                        forced: true,
                        filter(event, player) {
                            return event.player.hasSkill('hyym_zhanbafangx');
                        },
                        content() {
                            trigger.player.removeSkill('hyym_zhanbafangx');
                        },
                    },
                },
            },
            hyym_zhanbafangx: {
                mark: 'card',
                marktext: '战',
                popup: false,
                content() { },
                intro: {
                    name: '战',
                    content: 'card',
                },
                onremove(player) {
                    player.storage.hyym_zhanbafangx.discard();
                    delete player.storage.hyym_zhanbafangx;
                },
            },
            hyym_baonu: {
                derivation: 'hyym_xvezhan',
                audio: 'ext:桃源幻梦/audio/技能配音/张飞:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return true;
                },
                limited: true,
                content() {
                    player.say('<span style="font-family:xingkai">我乃燕人张翼德也,谁敢与我决一死战!</span>');
                    player.addSkill('hyym_baonux');
                    player.markSkill('hyym_baonux');
                    player.storage.hyym_baonu = true;
                    player.storage.hyym_baonucishu++;
                    player.awakenSkill('hyym_baonu');
                },
                ai: {
                    order: 16,
                    result: {
                        player(player) {
                            if (player.countCards('he') == 0) return 0;
                            else if (game.filterPlayer((play) => get.attitude(player, play) > 0).length <= 2 && game.hasPlayer((play) => get.attitude(player, play) < 0 && get.damageEffect(play, player, player) > 0)) return 2;
                            else
                                return game.countPlayer(function (current) {
                                    if (current != player) {
                                        return get.sgn(get.damageEffect(current, player, player));
                                    }
                                });
                        },
                    },
                },
            },
            hyym_xvezhan: {
                audio: 'ext:桃源幻梦/audio/技能配音/张飞:1',
                trigger: {
                    source: 'damageBegin1',
                },
                check(event, player) {
                    if ((game.filterPlayer((play) => play != player && get.attitude(player, play) > 0).length == 0 || player.identity == 'zhu' || player.identity == 'nei') && player.hp == 1 && !player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) return false;
                    return get.attitude(player, event.player) < 0 && event.num < event.player.hp;
                },
                filter(event, player) {
                    return true;
                },
                prompt2(event, player) {
                    return `失去1点体力并摸一张牌,令你对${get.translation(event.player)}本次造成的伤害+1`;
                },
                content() {
                    player.say('<span style="font-family:xingkai">我乃燕人张翼德也,谁敢与我决一死战!</span>');
                    player.loseHp();
                    player.draw();
                    trigger.num++;
                },
            },
            hyym_dixian: {
                audio: 'ext:桃源幻梦/audio/技能配音/张飞:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('he') > 0;
                },
                usable: 1,
                check(card) {
                    return 10 - get.value(card);
                },
                filterCard: true,
                position: 'he',
                content() {
                    'step 0';
                    player.loseHp();
                    event.targets = game.filterPlayer();
                    event.targets.remove(player);
                    event.targets.sort(lib.sort.seat);
                    player.line(event.targets, 'fire');
                    if (player.storage.hyym_baonu == true) event.goto(1);
                    else event.goto(3);
                    ('step 1');
                    if (event.targets.length > 1)
                        player
                            .chooseTarget(false, '是否减小一名【地陷】目标？', function (card, player, target) {
                                return player != target;
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                return get.attitude(player, target) - target.hp;
                            });
                    ('step 2');
                    if (result.targets?.length) {
                        event.targets.remove(result.targets[0]);
                        game.log(player, '从【地陷】目标中取消了', result.targets[0]);
                    }
                    ('step 3');
                    for (var i = 0; i < event.targets.length; i++) {
                        event.targets[i].addSkill('hyym_dixianx');
                        event.targets[i].damage('nocard');
                    }
                    ('step 4');
                    for (var i = 0; i < event.targets.length; i++) {
                        event.targets[i].removeSkill('hyym_dixianx');
                    }
                },
                ai: {
                    order() {
                        if (_status.event.player.countCards('he') <= 2) return 15;
                        else return 2;
                    },
                    tag: {
                        damage: 1,
                    },
                    threaten: 3,
                    result: {
                        player(player) {
                            if ((game.filterPlayer((play) => play != player && get.attitude(player, play) > 0).length == 0 || player.identity == 'zhu' || player.identity == 'nei') && player.hp == 1 && !player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) return -5;
                            else if (game.filterPlayer((play) => get.attitude(player, play) > 0).length <= 2 && game.hasPlayer((play) => get.attitude(player, play) < 0 && get.damageEffect(play, player, player) > 0)) return 2;
                            else
                                return game.countPlayer(function (current) {
                                    if (current != player) {
                                        return get.sgn(get.damageEffect(current, player, player));
                                    }
                                });
                        },
                    },
                },
            },
            hyym_qidong: {},
            hyym_yingmaomiaozhua: {},
            hyym_kuangleitianlao: {
                audio: 'ext:桃源幻梦/audio/技能配音/张角:1',
                enable: 'phaseUse',
                position: 'he',
                complexCard: true,
                filterTarget: lib.filter.notMe,
                filterCard(card, player, target) {
                    if (ui.selected.cards.length == 0) return true;
                    if (Array.isArray(ui.selected.cards))
                        for (var i of ui.selected.cards) {
                            if (get.type(i, 'trick') == get.type(card, 'trick')) return false;
                        }
                    return true;
                },
                //usable:1,
                filter(event, player) {
                    var hs = player.getCards('he');
                    var list = [];
                    for (var i = 0; i < hs.length; i++) {
                        list.push(get.type(hs[i], 'trick'));
                    }
                    return Array.from(new Set(list)).length > 2 && !player.hasSkill('hyym_kuangleitianlaoy');
                },
                selectCard() {
                    if (game.players.length == 2) return 4;
                    else return 3;
                },
                check(card) {
                    return 15 - get.value(card);
                },
                content() {
                    player.addTempSkill('hyym_kuangleitianlaox');
                    player.say('<span style="font-family:xingkai">天师符法,蓝色品质,五铜一打!</span>');
                    if (target.isDamaged()) target.damage('thunder', 1, 'nocard');
                    else target.damage('thunder', 2, 'nocard');
                    target.turnOver();
                },
                ai: {
                    order: 13,
                    result: {
                        target(player, target) {
                            let kk = -2;
                            if (!target.isDamaged()) kk -= 2;
                            if (!target.isTurnedOver()) kk -= 3;
                            if (target.isTurnedOver() && !target.hasSkill('hyym_zhujueguanghuan') && get.attitude(player, target) > 0) kk += 3;
                            if (target.isTurnedOver() && get.attitude(player, target) < 0) kk += 5;
                            if (target.isTurnedOver() && get.damageEffect(target, player, player) == 0) kk = 3;
                            if (!target.isTurnedOver() && get.damageEffect(target, player, player) == 0) kk = -3;
                            if (target.isTurnedOver() && get.attitude(player, target) < 0 && target.hp == 1) kk = -1;
                            return kk;
                        },
                    },
                    threaten: 2.5,
                },
            },
            hyym_kuangleitianlaox: {
                trigger: { global: 'dieAfter' },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return event.reason && event.reason.parent.name == 'hyym_kuangleitianlao';
                },
                content() {
                    player.addTempSkill('hyym_kuangleitianlaoy', 'phaseUseAfter');
                },
            },
            hyym_kuangleitianlaoy: {},
            hyym_kuangleilingyu: {
                audio: 'ext:桃源幻梦/audio/技能配音/张角:2',
                trigger: { global: 'damageEnd' },
                filter(event, player) {
                    return event.hasNature('thunder');
                },

                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget(false, [0, game.players.length - 1], '选择摸牌角色并确定(自己不用选)', '是否发动【狂雷领域】？', function (card, player, target) {
                            return target != player && !target.isDamaged();
                        })
                        .set('ai', function (target) {
                            let player = _status.event.player;
                            return get.attitude(player, target) > 0;
                        });
                    ('step 1');
                    if (result.bool) {
                        player.draw();
                        if (result.targets?.length) {
                            event.target = result.targets.sortBySeat();
                        } else event.finish();
                    } else event.finish();
                    ('step 2');
                    for (var i = 0; i < event.target.length; i++) {
                        event.target[i].draw();
                    }
                },
                init(player) {
                    if (!player.storage.hyym_kuangleilingyu) player.storage.hyym_kuangleilingyu = [''];
                },
                getInfo(player) {
                    if (!player.storage.hyym_kuangleilingyu) player.storage.hyym_kuangleilingyu = [''];
                    return player.storage.hyym_kuangleilingyu;
                },
                group: ['hyym_kuangleilingyu_1'],
                subSkill: {
                    1: {
                        trigger: { global: 'damageBegin1' },
                        filter(event, player) {
                            return player.storage.kuangleilingyu && event.player.hasSkill('hyym_kuangleilingyux');
                        },
                        prompt2(event, player) {
                            if (event.hasNature('thunder')) return '防止本次伤害';
                            else return '将本次伤害改为雷电伤害';
                        },
                        check(event, player) {
                            return true;
                        },
                        content() {
                            if (trigger.hasNature('thunder')) {
                                game.playAudio('../extension/桃源幻梦/audio/技能配音/张角/hyym_kuangleilingyu_11.mp3');
                                trigger.cancel();
                            } else {
                                game.playAudio('../extension/桃源幻梦/audio/技能配音/张角/hyym_kuangleilingyu_12.mp3');
                                trigger.nature = 'thunder';
                            }
                        },
                    },
                },
            },
            hyym_kuangleilingyux: {
                mark: true,
                marktext: '天书',
                intro: {
                    name: '天书',
                },
                ai: {
                    nothunder: true,
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'thunderDamage') && game.hasPlayer((play) => play.hasSkill('hyym_kuangleilingyu'))) return 'zerotarget';
                        },
                    },
                },
            },
            hyym_taipingyaoshu: {
                dutySkill: true,
                zhuSkill: true,
                group: ['hyym_taipingyaoshu_achieve', 'hyym_taipingyaoshu_fail', 'hyym_taipingyaoshu_count', 'hyym_taipingyaoshu_use', 'hyym_taipingyaoshu_1'],
                subSkill: {
                    use: {
                        audio: 'ext:桃源幻梦/audio/技能配音/张角:1',
                        trigger: { global: 'dying' },
                        filter(event, player) {
                            return (!player.storage.hyym_taipingyaoshu_use || !player.storage.hyym_taipingyaoshu_use.includes(event.player)) && !player.storage.hyym_taipingyaoshubinsi.includes(event.player);
                        },
                        //prompt2:'令一名群势力角色回复1点体力',
                        forced: true,
                        content() {
                            'step 0';
                            player
                                .chooseTarget(false, 1, '太平要术:可令一名群势力角色回复1点体力', function (card, player, target) {
                                    return target.group == 'qun' && target.isDamaged();
                                })
                                .set('ai', function (target) {
                                    let player = _status.event.player;
                                    if (get.attitude(player, target) > 0 && target != player && target.maxHp - target.hp == 1) return get.attitude(player, target) + 99;
                                    else return get.attitude(player, target);
                                });
                            ('step 1');
                            if (result.targets?.length) {
                                if (!player.storage.hyym_taipingyaoshu_use) player.storage.hyym_taipingyaoshu_use = [];
                                player.storage.hyym_taipingyaoshu_use.add(trigger.player);
                                player.storage.hyym_taipingyaoshu_use.sortBySeat();
                                player.markSkill('hyym_taipingyaoshu_use');
                                result.targets[0].recover();
                            }
                        },
                        intro: {
                            content(storage, player) {
                                return `已因${get.translation(player.storage.hyym_taipingyaoshu_use)}发动过技能`;
                            },
                        },
                    },
                    1: {
                        forced: true,
                        nopop: true,
                        forced: true,
                        silent: true,
                        trigger: { global: 'dyingAfter' },
                        filter(event, player) {
                            return !player.storage.hyym_taipingyaoshubinsi.includes(event.player);
                        },
                        init(player) {
                            if (!player.storage.hyym_taipingyaoshubinsi) player.storage.hyym_taipingyaoshubinsi = [];
                        },
                        content() {
                            player.storage.hyym_taipingyaoshubinsi.push(trigger.player);
                        },
                    },
                    achieve: {
                        audio: 'ext:桃源幻梦/audio/技能配音/张角:1',
                        trigger: {
                            global: 'recoverAfter',
                        },
                        filter(event, player) {
                            if (event.player.isDying()) return false;
                            return event.taipingyaoshu == true && event.player != player;
                        },
                        forced: true,
                        content() {
                            'step 0';
                            game.log(player, '成功完成使命');
                            player.awakenSkill('hyym_taipingyaoshu');
                            var kk = game.countPlayer((current) => current.group == 'qun');
                            player
                                .chooseTarget(true, [1, kk], `令至多${get.translation(kk)}名角色获得<天书>标记`, function (card, player, target) {
                                    return true;
                                })
                                .set('ai', function (target) {
                                    let player = _status.event.player;
                                    if (target == player) return 99;
                                    else return get.attitude(player, target) > 0;
                                });
                            ('step 1');
                            if (result.targets?.length) {
                                for (var i = 0; i < result.targets.length; i++) {
                                    player.line(result.targets[i], 'thunder');
                                    result.targets[i].addSkill('hyym_kuangleilingyux');
                                    result.targets[i].markSkill('hyym_kuangleilingyux');
                                }
                            }
                            player.storage.kuangleilingyu = true;
                            var list = lib.skill.hyym_kuangleilingyu.getInfo(player);
                            list[0] = '当一名有<天书>的角色受到伤害时,若此伤害为:雷电伤害,你可以防止之;非雷电伤害,你可以改为雷电伤害.';
                        },
                    },
                    count: {
                        trigger: {
                            global: 'recoverBegin',
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        filter(event, player) {
                            if (!event.source || event.source != player) return false;
                            if (!event.player.isDying()) return false;
                            return true;
                        },
                        content() {
                            trigger.taipingyaoshu = true;
                        },
                    },
                    fail: {
                        audio: 'ext:桃源幻梦/audio/技能配音/张角:1',
                        trigger: { global: 'die' },
                        forced: true,
                        filter(event, player) {
                            return event.player.identity == 'zhong';
                        },
                        content() {
                            'step 0';
                            game.log(player, '使命失败');
                            player.awakenSkill('hyym_taipingyaoshu');
                            var hs = player.getCards('he');
                            if (hs.length) player.discard(hs);
                            if (_status.characterlist && _status.characterlist.includes('mozhangjiaohyym')) {
                                player.reinit(player.name, 'mozhangjiaohyym', false);
                                _status.characterlist.remove('mozhangjiaohyym');
                                _status.characterlist.add(player.name);
                            }
                            ('step 1');
                            for (var i = 0; i < game.filterPlayer().length; i++) {
                                if (
                                    (game.filterPlayer()[i].hasAllHistory('sourceDamage', function (evt) {
                                        return evt.player == trigger.player;
                                    }) &&
                                        game.filterPlayer()[i] != trigger.player &&
                                        game.filterPlayer()[i] != player) ||
                                    game.filterPlayer()[i] == trigger.source
                                )
                                    game.filterPlayer()[i].damage('thunder', 1, 'nocard');
                            }
                        },
                    },
                },
            },
            hyym_moyingguizhua: {},
            hyym_moyingchongji: {},
            hyym_guizhuazhinu: {},
            hyym_douqijinghua: {},
            hyym_pojiachongfeng: {},
            hyym_chuantouxi: {},
            hyym_dianzhang: {},
            hyym_siwangzhichu: {
                audio: 'ext:桃源幻梦/audio/技能配音/张昭:2',
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                filter(event, player) {
                    return player.hp > 1;
                },
                forced: true,
                content() {
                    player.loseHp();
                    player.addSkill('hyym_siwangzhichux');
                    player.markSkill('hyym_siwangzhichux');
                },
                ai: {
                    threaten: 5,
                },
            },
            hyym_liudaopao: {
                mark: true,
                marktext: '炮',
                forceDie: true,
                intro: {
                    name: '六道炮',
                    content: '已累计失去$张牌',
                },
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
                silent: true,
                content() {
                    'step 0';
                    var evt = trigger.getl(player);
                    event.num = 0;
                    if (evt && evt.cards2 && evt.cards2.length) event.num += evt.cards2.length;
                    else event.finish();
                    ('step 1');
                    if (event.num > 0) {
                        player.addMark('hyym_liudaopao', 1, false);
                        player.markSkill('hyym_liudaopao');
                        event.num--;
                        if (player.countMark('hyym_liudaopao') % 6 == 0 && !player.storage.liudaopao && player.isIn()) event.goto(2);
                        else event.goto(4);
                    } else event.finish();
                    ('step 2');
                    player
                        .chooseTarget(false, '六道炮:可选择目标来一发核弹', function (card, player, target) {
                            return player != target;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            if (player.maxHp == 1 && !game.hasPlayer((play) => play != player && get.attitude(player, play) > 0)) return false;
                            else {
                                var att = -get.attitude(player, target);
                                if (get.damageEffect(target, player, player) <= 0) return false;
                                else return att - 0.5 * target.hp;
                            }
                        });
                    //player.chooseBool('来发核弹？').set('ai',()=>game.filterPlayer(play=>play!=player&&get.attitude(player,play)<0&&get.damageEffect(play,player,player)>0).length>0&&(!(player.maxHp==1&&!game.hasPlayer(play=>play!=player&&get.attitude(player,play)>0))));
                    ('step 3');
                    if (result.bool) {
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/张昭', ['hyym_liudaopao1', 'hyym_liudaopao2'].randomGet());
                        player.storage.liudaopao = true;
                        player.loseMaxHp();
                        player.addExpose(0.1);
                        player.say('<span style="font-family:xingkai">六道轮回,皆是虚无</span>');
                        event.target = result.targets[0];
                        event.target.damage(1, 'nocard');
                        if (event.target.countCards('he') > 0)
                            event.target.chooseToDiscard(Math.min(event.target.countCards('he'), 3), 'he', true).set('ai', (card) => {
                                return 10 - get.value(card);
                            });
                    }
                    ('step 4');
                    if (event.num > 0) {
                        event.goto(1);
                    }
                },
                tag: {
                    damage: 1,
                },
                group: ['hyym_liudaopao_1'],
                subSkill: {
                    1: {
                        trigger: { global: 'roundStart' },
                        forced: true,
                        filter(event, player) {
                            return player.storage.liudaopao;
                        },
                        content() {
                            player.storage.liudaopao = false;
                        },
                    },
                },
            },
            hyym_shanguanglongya: {},
            hyym_saoqianjun: {},
            hyym_huimouyixiao: {
                trigger: { global: 'useCardAfter' },
                audio: 'ext:桃源幻梦/audio/技能配音/甄宓:2',
                filter(event, player) {
                    return event.player != player && event.targets && event.targets.includes(player) && get.type(event.card) != 'equip' && event.player.isIn();
                },
                prompt2(event, player) {
                    return `可依次对${get.translation(event.player)}封印${get.translation(get.type(event.card, 'trick'))}牌,及印一张【${get.translation(event.card.name)}】`;
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0 || get.effect(event.player, event.card, player, player) > 0;
                },
                logTarget: 'player',
                mod: {
                    targetInRange(card, player, target) {
                        if (card.storage && card.storage.hyym_huimoux) return true;
                    },
                },
                content() {
                    'step 0';
                    player.say('<span style="font-family:xingkai">无微情以效爱兮,献江南之明珰</span>');
                    if (!trigger.player.hasSkill('hyym_lvdouzongzix')) player.chooseBool(`是否令${get.translation(trigger.player)}本回合不能再使用` + get.translation(get.type(trigger.card, 'trick')) + '牌？').set('ai', () => get.attitude(player, trigger.player) < 0);
                    ('step 1');
                    if (result.bool) {
                        if (!trigger.player.hasSkill('hyym_lvdouzingzi')) {
                            trigger.player.addSkill('hyym_huimouyixiaoz');
                            trigger.player.markSkill('hyym_huimouyixiaoz');
                            if (!trigger.player.storage.hyym_huimouyixiaoz.includes(get.type(trigger.card, 'trick'))) {
                                trigger.player.storage.hyym_huimouyixiaoz.push(get.type(trigger.card, 'trick'));
                                game.log(trigger.player, '本回合不能再使用', get.translation(get.type(trigger.card, 'trick')), '牌');
                            }
                        } else game.log(trigger.player, '因【绿豆粽子】免疫了异常状态');
                    }
                    player.storage.hyym_huimouyixiao = trigger.card;
                    player.storage.hyym_huimouyixiaonature = trigger.card.nature;
                    player.storage.hyym_huimouyixiaoname = trigger.card.name;
                    player.storage.hyym_huimou = trigger.player;
                    event._result = {};
                    player.say('<span style="font-family:xingkai">凌波微步,罗袜生尘</span>');
                    if (player.countCards('he') > 0 && !(!trigger.player.isDamaged() && ['tao', 'hyym_xiaomijiu', 'hyym_chujiqixveyao', 'hyym_zhongjiqixveyao'].includes(trigger.card.name))) player.chooseBool(`是否对${get.translation(trigger.player)}印一张【${get.translation(trigger.card.name)}】？`).set('ai', () => get.effect(trigger.player, trigger.card, player, player) > 0);
                    ('step 2');
                    if (result.bool && trigger.card && trigger.card.name != 'tao') {
                        var next = player.chooseCardTarget({
                            position: 'he',
                            filterCard(card) {
                                return get.itemtype(card) == 'card';
                            },
                            popname: true,
                            complexTarget: true,
                            complexSelect: true,
                            filterTarget(card, player, target) {
                                return lib.filter.targetEnabled({ name: trigger.card.name, nature: trigger.card.nature }, player, target) && (target == player.storage.hyym_huimou || ui.selected.targets.includes(player.storage.hyym_huimou));
                            },
                            selectTarget() {
                                var player = _status.event.player;
                                var info = lib.card[player.storage.hyym_huimouyixiaoname];
                                var kk;
                                if (Array.isArray(info.selectTarget)) {
                                    if (info.selectTarget[0] < 0) kk = Infinity;
                                    else kk = info.selectTarget[1];
                                } else {
                                    if (info.selectTarget < 0) kk = Infinity;
                                    else kk = info.selectTarget;
                                }
                                return [1, kk];
                            },
                            ai1(card) {
                                var player = _status.event.player;
                                if (get.effect(trigger.player, { name: trigger.card.name, nature: trigger.card.nature }, player, player) > 0) return 99 - get.value(card);
                                else return 0;
                            },
                            ai2(target) {
                                return get.effect(target, { name: trigger.card.name, nature: trigger.card.nature }, player, player);
                            },
                            prompt: '回眸一笑:选择印牌目标',
                        });
                    } else if (result.bool && trigger.card && player.countCards('he') && trigger.card.name == 'tao') {
                        card = { name: trigger.card.name, nature: trigger.card.nature };
                        if (
                            game.hasPlayer(function (current) {
                                return current == trigger.player;
                            })
                        ) {
                            lib.skill.hyym_huimouyixiaoy.viewAs = card;
                            var next = player.chooseToUse();
                            if (next.isOnline()) {
                                player.send(function (card) {
                                    lib.skill.hyym_huimouyixiaoy.viewAs = card;
                                }, card);
                            }
                            next.set('openskilldialog', `对${get.translation(trigger.player)}印一张【${get.translation(trigger.card.name)}】`);
                            next.set('norestore', true);
                            next.set('_backupevent', 'hyym_huimouyixiaoy');
                            next.set('custom', {
                                add: {},
                                replace: { window() { } },
                            });
                            next.backup('hyym_huimouyixiaoy');
                        }
                        event.finish();
                    }
                    ('step 3');
                    if (result.bool) {
                        event.tk = result.targets.sortBySeat(player);
                        player.useCard({ name: player.storage.hyym_huimouyixiaoname, nature: player.storage.hyym_huimouyixiaonature }, result.cards, event.tk, false);
                    }
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if ((target.countCards('he') > 0 || ['hyym_caihongfengbaotang', 'hyym_yijineiliyao', 'hyym_erjineiliyao', 'hyym_jingshenbinggan', 'hyym_youlingneilitang', 'hyym_tanghulubaozhu'].includes(card.name) || (card.name == 'hyym_jianguotuozi' && player.hasCard((car) => car.cardid != card.cardid, 'he'))) && get.attitude(target, player) > 0) return [2, 0];
                            else if (get.attitude(target, player) < 0) return [1, 0, 1, -0.5];
                        },
                    },
                },
            },
            hyym_huimouyixiaox: {
                filterCard(card) {
                    return get.itemtype(card) == 'card';
                },
                filterTarget(card, player, target) {
                    return (target == player.storage.hyym_huimou || ui.selected.targets.includes(player.storage.hyym_huimou)) && lib.filter.filterTarget.apply(this, arguments);
                },
                complexTarget: true,
                complexSelect: true,
                selectCard: 1,
                selectTarget() {
                    var player = _status.event.player;
                    var info = lib.card[player.storage.hyym_huimouyixiaoname];
                    var kk;
                    if (Array.isArray(info.selectTarget)) {
                        if (info.selectTarget[0] < 0) kk = Infinity;
                        else kk = info.selectTarget[1];
                    } else {
                        if (info.selectTarget < 0) kk = Infinity;
                        else kk = info.selectTarget;
                    }
                    return [1, kk];
                },
                position: 'he',
                popname: true,
            },
            hyym_huimouyixiaoy: {
                filterCard(card) {
                    return get.itemtype(card) == 'card';
                },
                filterTarget(card, player, target) {
                    return target == player.storage.hyym_huimou;
                },
                selectCard: 1,
                position: 'he',
                popname: true,
            },
            hyym_huimouyixiaoz: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '魅',
                intro: {
                    name: '魅惑(回眸一笑)',
                    content: '本回合不能再使用$牌',
                },
                init(player, skill) {
                    if (!player.storage.hyym_huimouyixiaoz) player.storage.hyym_huimouyixiaoz = [];
                },
                onremove(player) {
                    player.storage.hyym_huimouyixiaoz = [];
                },
                content() {
                    player.removeMark('hyym_huimouyixiaoz');
                    player.removeSkill('hyym_huimouyixiaoz');
                },
                mod: {
                    cardEnabled(card, player) {
                        if (player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) {
                            return false;
                        }
                    },
                    cardSavable(card, player) {
                        if (player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) {
                            return false;
                        }
                    },
                },
            },
            hyym_longqveanyong: {},
            hyym_longqvebadao: {},
            hyym_longqveyuanyue: {},
            hyym_bingshuangjianwu: {
                audio: 'ext:桃源幻梦/audio/技能配音/周瑜:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                filter(event, player) {
                    return !player.hasCard((card) => card.name == 'hanbing', 'he');
                },
                content() {
                    player.say('<span style="font-family:xingkai">吾将醉兮发狂吟!</span>');
                    var card1 = get.cardPile(function (card) {
                        return card.name == 'hanbing';
                    });
                    if (card1 != null) var card = card1;
                    else {
                        card = game.createCard2('hanbing', lib.suit.randomGet(), Math.floor(Math.random() * 13) + 1);
                        lib.inpile.push('hanbing');
                    }
                    player.gain(card, 'gain2');
                },
                group: ['hyym_bingshuangjianwu_1'],
                subSkill: {
                    1: {
                        audio: 'ext:桃源幻梦/audio/技能配音/周瑜:2',

                        trigger: { global: 'loseAfter' },
                        filter(event, player) {
                            if (event.getParent(3).name != 'icesha_skill' && event.getParent(3).name != 'hanbing_skill') return false;
                            if (player.countCards('he') == 0) return false;
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
                            'step 0';
                            'step 1';
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
                                player.chooseToDiscard('he', false, '是否发动【冰霜剑舞】？', '弃一张牌并获得' + get.translation(trigger.cards[0])).ai = function (card) {
                                    return get.value(trigger.cards[0]) - get.value(card);
                                };
                                event.card = cards;
                            }
                            ('step 2');
                            if (result.bool) {
                                player.say('<span style="font-family:xingkai">离成神还差得远呢!</span>');
                                player.gain(event.card, 'gain2', 'log');
                            }
                        },
                    },
                },
            },
            hyym_bingjie: {
                audio: 'ext:桃源幻梦/audio/技能配音/周瑜:2',
                trigger: { player: 'phaseUseBegin' },
                filter(event, player) {
                    return player.countCards('he') > 0;
                },

                forced: true,
                enable: true,
                _priority: 97,
                content() {
                    'step 0';
                    player.chooseCardTarget({
                        filterCard: true,
                        position: 'he',
                        filterTarget(card, player, target) {
                            return !target.hasSkill('hyym_bingjiex') && target != player && !target.hasSkill('hyym_lvdouzongzix');
                        },
                        ai1(card) {
                            return 99 - get.value(card);
                        },
                        ai2(target) {
                            var player = _status.event.player;
                            return -get.attitude(player, target);
                        },
                        prompt: '是否发动【冰界】？',
                        prompt2: '弃一张牌,拦个人开始折磨',
                    });

                    ('step 1');
                    if (result.bool) {
                        player.discard(result.cards[0]);
                        result.targets[0].addSkill('hyym_bingjiex');
                        result.targets[0].markSkill('hyym_bingjiex');
                        result.targets[0].storage.hyym_bingjie = player;
                    }
                },
                ai: {
                    expose: 0.1,
                    effect: {
                        player(card, player, target) {
                            if (!target || typeof card === 'string') return;
                            else if (get.tag(card, 'damage')) return [1, -0.5];
                        },
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) return [1, -1];
                        },
                    },
                },
            },
            hyym_bengzhan: {
                forced: true,
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                content() {
                    for (var i = 0; i < trigger.targets.length; i++) {
                        trigger.targets[i].addSkill('hyym_bengzhanx');
                        trigger.targets[i].storage.hyym_bengzhan = player;
                    }
                },
                audio: 'ext:桃源幻梦/audio/技能配音/周瑜:2',
            },
            hyym_bengzhanx: {
                trigger: { global: 'useCardAfter' },
                filter(event, player) {
                    return true;
                },
                onremove(player) {
                    player.storage.hyym_bengzhan = false;
                },
                forced: true,
                content() {
                    player.removeSkill('hyym_bengzhanx');
                },
                group: ['hyym_bengzhanx_1'],
                subSkill: {
                    1: {
                        trigger: { player: 'damageEnd' },
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        content() { },
                        ai: {
                            nohujia: true,
                            skillTagFilter(player) {
                                var evt = _status.event;
                                return evt.num != 0 && ((evt.parent.name == 'sha' && evt.parent.player == player.storage.hyym_bengzhan && evt.name == 'damage') || (evt.getParent(2).name == 'sha' && evt.getParent(2).player == player.storage.hyym_bengzhan && evt.name == 'changeHp'));
                            },
                        },
                    },
                },
            },
            hyym_jiangbing: {
                trigger: { player: 'phaseUseEnd' },
                audio: 'ext:桃源幻梦/audio/技能配音/周瑜:2',
                filter(event, player) {
                    return player.countCards('he') > 0 && game.hasPlayer((play) => player.canUse({ name: 'sha', nature: 'ice' }, play, false, true));
                },
                forced: true,

                content() {
                    'step 0';
                    var next = player.chooseCardTarget({
                        position: 'he',
                        filterCard: true,
                        filterTarget(card, player, target) {
                            return lib.filter.targetEnabled({ name: 'sha', nature: 'ice' }, player, target);
                        },
                        selectTarget() {
                            var card = { name: 'sha', nature: 'ice' },
                                player = _status.event.player;
                            var range;
                            var select = get.copy(get.info(card).selectTarget);
                            if (select == undefined) {
                                if (get.info(card).filterTarget == undefined) return [0, 0];
                                range = [1, 1];
                            } else if (typeof select == 'number') range = [select, select];
                            else if (get.itemtype(select) == 'select') range = select;
                            else if (typeof select == 'function') range = select(card, player);
                            game.checkMod(card, player, range, 'selectTarget', player);
                            return [1, range[1]];
                        },
                        ai1(card) {
                            var player = _status.event.player;
                            if (/* (player.countCards('h')>1||player.countCards('e')>0)&& */ game.hasPlayer((play) => get.effect(play, { name: 'sha', nature: 'ice' }, player, player) > 0)) return 99 - get.value(card);
                            else return 0;
                        },
                        ai2(target) {
                            var player = _status.event.player;
                            return get.effect(target, { name: 'sha', nature: 'ice' }, player, player);
                        },
                        prompt: '是否发动【降冰】？',
                        prompt2: '将一张牌当无距离次数限制的【冰杀】使用',
                    });
                    ('step 1');
                    if (result.bool) {
                        player.useCard({ name: 'sha', nature: 'ice' }, result.cards, result.targets, false);
                    }
                },
            },
            hyym_bingjing: {
                audio: 'ext:桃源幻梦/audio/技能配音/周瑜:2',
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    return event.player != player && player.countCards('he') > 0;
                },
                forced: true,
                content() {
                    'step 0';
                    player.chooseToDiscard('he', false, '是否发动【冰镜】？', '弃一张牌,随机使用一张防具牌').ai = function (card) {
                        if (player.getEquips(2).length == 0 || (player.hasCard((card) => card.name == 'baiyin', 'e') && player.isDamaged()) || (player.hasCard((card) => card.name == 'tengjia', 'e') && !!get.tag(trigger.card, 'natureDamage')) || (player.hasCard((card) => card.name == 'renwang', 'e') && get.color(trigger.card) == 'red' && trigger.card.name == 'sha' && !get.nature(trigger.card))) {
                            if (get.subtype(card) == 'equip2') return 20;
                            else if (card.name == 'hanbing') return 19;
                            else return 9 - get.value(card);
                        } else return 0;
                    };
                    ('step 1');
                    if (result.bool) {
                        var list = [];
                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                            var card = ui.cardPile.childNodes[i];
                            if (get.subtype(card) == 'equip2') {
                                list.push(card);
                            }
                        }
                        if (list.length == 0) {
                            for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                var card = ui.discardPile.childNodes[i];
                                if (get.subtype(card) == 'equip2') {
                                    list.push(card);
                                }
                            }
                        }
                        if (list.length) player.chooseUseTarget(list[0], true, 'nopopup');
                    }
                },
            },
            hyym_qimenguizhen: {
                derivation: ['hyym_leidianfu', 'hyym_bingfengqianli', 'hyym_chiyangbaolie', 'hyym_nuyanbaofa'],
            },
            hyym_bafangguifu: {},
            hyym_leidianfu: {},
            hyym_bingfengqianli: {},
            hyym_chiyangbaolie: {},
            hyym_nuyanbaofa: {},
            hyym_wuxingyifa: {},
            hyym_kongmingsuo: {},
            hyym_douzhuanxingyi: {},
            hyym_kongchengji: {},
            hyym_feilaikuangxi: {},
            hyym_liuhuo: {},
            hyym_jingji: {},
            hyym_zaisheng: {},
            hyym_duomaomao: {},
            hyym_shenyou: {},
            hyym_yuanling: {},
            hyym_mingyuan: {},
            hyym_shenmishangdian: {},
            hyym_shuaxinjuanzhou: {},
            hyym_zhenguishangpin: {},
            hyym_kaitian: {},
            hyym_liehun: {},
            hyym_yingyun: {},
            hyym_tianyin: {},
            hyym_xveyin: {},
            hyym_shuangbao: {},
            hyym_fenji: {},
            hyym_cuidu: {},
            hyym_yingu: {},
            hyym_taixv: {},
            hyym_wanxiang: {},
            hyym_qianni: {},
            hyym_ansuan: {},
            hyym_fengyue: {},
            hyym_youzou: {},
            hyym_jueshuo: {},
            hyym_keshuai: {},
            hyym_quehuan: {},
            hyym_jiuwu: {},
            hyym_tiandi: {},
            hyym_qianhun: {},
            hyym_jiaochi: {},
            hyym_miyu: {},
            hyym_xiyu: {},
            hyym_xinao2: {},
            hyym_xianjue: {},
            hyym_randao: {},
            hyym_guizhen: {},
            hyym_meiyou: {},
            hyym_liuyi: {},
            hyym_pojian: {},
            hyym_ranjin: {},
            hyym_huanling: {},
            hyym_fenhua: {},
            hyym_liaoyuan: {},
            hyym_shengyu: {},
            hyym_qvhun: {},
            hyym_tianfa: {},
            hyym_chaoci: {},
            hyym_huanyin: {},
            hyym_kuwei: {},
            hyym_yuleicedian: {},
            hyym_yunheshenlei: {},
            hyym_nufutishan: {},
            hyym_nubukedang: {},
            hyym_anyingzhiwu: {},
            hyym_siji: {},
            hyym_tianweileiyin: {},
            hyym_leiyingbu: {},
            hyym_shengyanliandan: {},
            hyym_shoumoren: {},
            hyym_kungenxiangjue: {
                derivation: ['hyym_jinkai', 'hyym_jinbao', 'hyym_muyi', 'hyym_muliao', 'hyym_shuimo', 'hyym_shuining', 'hyym_huoling', 'hyym_huojin', 'hyym_tudun', 'hyym_tujiu'],
            },
            hyym_kungenlvling: {},
            hyym_jinkai: {},
            hyym_jinbao: {},
            hyym_muyi: {},
            hyym_muliao: {},
            hyym_shuimo: {},
            hyym_shuining: {},
            hyym_huoling: {},
            hyym_huojin: {},
            hyym_tudun: {},
            hyym_tujiu: {},
            hyym_shangwu: {},
            hyym_shenfa: {},
            hyym_longwei: {},
            hyym_qinglin: {},
            hyym_guibu2: {},
            hyym_taixuan: {},
            hyym_fuzuo: {},
            hyym_laiyi: {},
            hyym_huanzhen: {},
            hyym_ladu: {},
            hyym_pushuo: {},
            hyym_xilve: {},
            hyym_shunfeng: {},
            hyym_caiyan: {},
            hyym_shenghui: {},
            hyym_fenlun: {},
            hyym_yufeng: {
                derivation: ['hyym_chongbiao', 'hyym_fuyao', 'hyym_fubiao'],
            },
            hyym_chongbiao: {},
            hyym_fuyao: {},
            hyym_fubiao: {},
            hyym_leiming: {},
            hyym_jiyao: {},
            hyym_panti: {},
            hyym_zhengzha: {},
            hyym_duanzu: {},
            hyym_tianlong: {},
            hyym_due: {},
            hyym_shenqv: {},
            hyym_siji2: {},
            hyym_xianzong: {
                derivation: ['hyym_penglai', 'hyym_fangzhang', 'hyym_yingzhou'],
            },
            hyym_penglai: {},
            hyym_fangzhang: {},
            hyym_yingzhou: {},
            hyym_muchun: {},
            hyym_shengzi: {},
            hyym_shuangsheng: {},
            hyym_lingyou: {},
            hyym_jvyuan: {},
            hyym_yuanqi: {},
            hyym_xianya: {},
            hyym_tonggan: {},
            hyym_touxin: {},
            hyym_bailu: {},
            hyym_guibian: {},
            hyym_qinfu: {},
            hyym_mixin: {},
            hyym_meiwen: {},
            hyym_qingxin: {},
            hyym_sishou: {},
            hyym_haishi: {},
            hyym_yongjue: {},
            hyym_yuanmie: {},
            hyym_tanji: {},
            hyym_qingshang: {},
            hyym_disha: {},
            hyym_zhengyong: {},
            hyym_guzhi: {},
            hyym_qingfu: {
                derivation: 'hyym_yili',
            },
            hyym_yili: {},
            hyym_qiqiao: {},
            hyym_lianli: {},
            hyym_aiwan: {},
            hyym_luohun: {},
            hyym_xianggua: {},
            hyym_yigua: {},
            hyym_jiyong: {},
            hyym_pojing: {},
            hyym_jitong: {},
            hyym_pianpian: {},
            hyym_xingmou: {},
            hyym_guixian: {},
            hyym_wange: {},
            hyym_ranqi: {},
            hyym_guibu: {},
            hyym_dinghun: {},
            hyym_zishang: {},
            hyym_nilin: {},
            hyym_pailiu: {},
            hyym_baodan: {},
            hyym_jvmo: {},
            hyym_guiyin: {},
            hyym_chebu: {},
            hyym_kuangbei: {},
            hyym_pofu: {},
            hyym_cuiling: {},
            hyym_guihun: {},
            hyym_juanli: {},
            hyym_shuangfeng: {},
            hyym_xunqing: {},
            hyym_huyi: {},
            hyym_dianhu: {},
            hyym_fangdian: {},
            hyym_mojing: {
                derivation: ['hyym_shiqi', 'hyym_fanshen', 'hyym_kanyu', 'hyym_bigu'],
            },
            hyym_shiqi: {},
            hyym_fanshen: {},
            hyym_kanyu: {},
            hyym_bigu: {},
            hyym_cangsheng: {
                derivation: 'hyym_jinghua',
            },
            hyym_meimo: {},
            hyym_shehun: {},
            hyym_zhuliu: {},
            hyym_huilu: {},
            hyym_jianxia: {},
            hyym_guilei: {},
            hyym_wugu: {},
            hyym_wuling: {},
            hyym_daowu: {},
            hyym_shenwu: {},
            hyym_jiying: {},
            hyym_xunying: {},
            hyym_jianwu: {},
            hyym_guiqiao: {},
            hyym_zhanbei: {},
            hyym_lvezhen: {},
            hyym_madu: {},
            hyym_liezhen: {},
            hyym_hanchao: {},
            hyym_shuangjiang: {},
            hyym_yonglie: {},
            hyym_jinlan: {},
            hyym_zhenglv: {},
            hyym_lizu: {},
            hyym_jiwu: {},
            hyym_guzhou: {},
            hyym_mojia: {},
            hyym_guisuan: {},
            hyym_moyun: {},
            hyym_xvebao: {},
            hyym_ninghan: {},
            hyym_guihuo: {},
            hyym_hanchi: {},
            hyym_boming: {},
            hyym_liexi: {},
            hyym_lieji: {},
            hyym_guyong: {},
            hyym_longxi: {},
            hyym_juemou: {},
            hyym_guijue: {},
            hyym_kaojun: {},
            hyym_fuying: {},
            hyym_shihun: {},
            hyym_ezang: {},
            hyym_jianhua: {},
            hyym_mofu: {},
            hyym_zaolie: {},
            hyym_zhengfeng: {},
            hyym_meiying: {},
            hyym_fengdu: {},
            hyym_huixi: {},
            hyym_yinfeng: {},
            hyym_xvemu: {},
            hyym_bingqiao: {},
            hyym_qishang: {
                derivation: ['hyym_tianshu', 'hyym_tanlang', 'hyym_tianxuan', 'hyym_jvmen', 'hyym_tianji', 'hyym_lucun', 'hyym_tianquan', 'hyym_wenqv', 'hyym_yuheng', 'hyym_lianzhen', 'hyym_kaiyang', 'hyym_wuqv', 'hyym_yaoguang', 'hyym_pojun2'],
            },
            hyym_xingyun: {},
            hyym_tianshu: {},
            hyym_tanlang: {},
            hyym_tianxuan: {},
            hyym_jvmen: {},
            hyym_tianji: {},
            hyym_lucun: {},
            hyym_tianquan: {},
            hyym_wenqv: {},
            hyym_yuheng: {},
            hyym_lianzhen: {},
            hyym_kaiyang: {},
            hyym_wuqv: {},
            hyym_yaoguang: {},
            hyym_pojun2: {},
            hyym_caiyun: {},
            hyym_modao: {},
            hyym_yuhai: {},
            hyym_jiaokuai: {},
            hyym_mingzhu: {},
            hyym_miyi: {},
            hyym_modao2: {},
            hyym_huanyi: {},
            hyym_shunying: {},
            hyym_modi: {},
            hyym_ronghun: {},
            hyym_mingshang: {},
            hyym_yuxie: {},
            hyym_longwu: {},
            hyym_guixin: {
                derivation: 'hyym_longwugai',
            },
            hyym_longwugai: {},
            hyym_jiuquan: {},
            hyym_jinzhou: {},
            hyym_liance: {},
            hyym_guifu: {},
            hyym_mozhao: {},
            hyym_qvyi: {},
            hyym_yuling: {},
            hyym_tuohun: {},
            hyym_qinmu: {},
            hyym_chengwei: {},
            hyym_daohun: {},
            hyym_qianfan: {},
            hyym_jilang: {
                derivation: ['hyym_fenji2'],
            },
            hyym_fenji2: {},
            hyym_suiying: {},
            hyym_guimai: {},
            hyym_shenshi: {},
            hyym_mozhou: {},
            hyym_shixin: {},
            hyym_canli: {},
            hyym_moci: {},
            hyym_fenlei: {},
            hyym_mingsi: {},
            hyym_jiling: {},
            hyym_fulong: {},
            hyym_wudao: {},
            hyym_wuluan: {},
            hyym_duren: {},
            hyym_jinghong: {},
            hyym_qijue: {},
            hyym_moli: {},
            hyym_cimei: {},
            hyym_foying: {},
            hyym_hunxin: {},
            hyym_liangchu: {},
            hyym_shimeng: {},
            hyym_ranhun: {},
            hyym_fenling: {},
            hyym_xiongwei: {},
            hyym_shouling: {},
            hyym_guilong: {},
            hyym_huiyang: {},
            hyym_qianying: {},
            hyym_juenian: {},
            hyym_cuimo: {},
            hyym_yinling: {},
            hyym_guiyu: {},
            hyym_mogua: {},
            hyym_shanying: {},
            hyym_zhenhun: {},
            hyym_huilan: {},
            hyym_fengwu: {},
            hyym_pianwu: {},
            hyym_tenglao: {},
            hyym_sheshen2: {},
            hyym_longchui: {},
            hyym_jiwang: {},
            hyym_tengbian: {},
            hyym_jianshan: {},
            hyym_yingliao: {},
            hyym_canjie: {},
            hyym_ningsu: {},
            hyym_miniang: {},
            hyym_zhenxiu: {},
            hyym_miece: {},
            hyym_mopao: {},
            hyym_tafa: {},
            hyym_zhencang: {},
            hyym_hanxun: {},
            hyym_moli2: {},
            hyym_zuixian: {},
            hyym_chixing: {},
            hyym_yaohao: {},
            hyym_hongfu: {},
            hyym_taiyun: {},
            hyym_jianyu: {},
            hyym_hunyi: {},
            hyym_yinglian: {},
            hyym_lunhui: {},
            hyym_manbao: {},
            hyym_jiaoli: {},
            hyym_yingwu: {},
            hyym_diebu: {},
            hyym_yundu: {},
            hyym_panmou: {},
            hyym_aoni: {},
            hyym_xunxin: {},
            hyym_gangbi: {},
            hyym_jifen: {},
            hyym_yinjian: {},
            hyym_moqiang: {},
            hyym_zhubei: {},
            hyym_hujia: {},
            hyym_yihui: {},
            hyym_suozhen: {},
            hyym_faling: {},
            hyym_yaoqi: {},
            hyym_meihun: {},
            hyym_huantong: {},
            hyym_yaoce: {},
            hyym_jvying: {},
            hyym_yisui: {},
            hyym_mobian: {},
            hyym_liuyin: {},
            hyym_yanzhen: {},
            hyym_shabao: {},
            hyym_shuanghun: {},
            hyym_jianling: {},
            hyym_tianyin: {},
            hyym_tongfen: {},
            hyym_yinhuo: {},
            hyym_cuiyan: {},
            hyym_xuanming: {},
            hyym_juntong: {},
            hyym_rangfa: {},
            hyym_biying: {},
            hyym_yingzhao: {},
            hyym_huanbian: {},
            hyym_lishang: {},
            hyym_yingsha: {},
            hyym_dushi: {},
            hyym_angu: {},
            hyym_guiling: {},
            hyym_yushi: {},
            hyym_qianhui: {},
            hyym_xvxuan: {},
            hyym_huanchen: {},
            hyym_mobing: {},
            hyym_jianhui: {},
            hyym_shouwu: {},
            hyym_michun: {},
            hyym_lingbu: {},
            hyym_benlei: {},
            hyym_canshuo: {},
            hyym_bingdi: {},
            hyym_chuizhen: {},
            hyym_lianyan: {},
            hyym__xinyin: {},
            hyym_huazang: {},
            hyym_yewu: {},
            hyym_guiming: {},
            hyym_shihun2: {},
            hyym_huanxi: {},
            hyym_kouchou: {},
            hyym_shanying2: {},
            hyym_lingyan: {},
            hyym_huyi2: {},
            hyym_wujue: {},
            hyym_canyin: {},
            hyym_zhonghun: {},
            hyym_shensuan: {},
            hyym_jinchou: {},
            hyym_liumai: {
                derivation: ['hyym_shaoshang', 'hyym_shangyang', 'hyym_zhongchong', 'hyym_guanchong', 'hyym_shaochong', 'hyym_shaoze'],
            },
            hyym_shaoshang: {},
            hyym_shaochong: {},
            hyym_shaoze: {},
            hyym_zhongchong: {},
            hyym_shangyang: {},
            hyym_guanchong: {},
            hyym_mopao2: {},
            hyym_sanhuan: {},
            hyym_yingzhen: {},
            hyym_shenguang: {},
            hyym_linghui: {},
            hyym_hunci: {},
            hyym_rangu: {},
            hyym_huagu: {},
            hyym_bingyuan: {},
            hyym_yinxve: {},
            hyym_huanyue: {},
            hyym_huaying: {},
            hyym_shushang: {},
            hyym_fengong: {},
            hyym_tianqi: {},
            hyym_hunyuan: {},
            hyym_renyi: {},
            hyym_qianjun: {},
            hyym_dizun: {},
            hyym_tiandao: {},
            hyym_hunzuo: {},
            hyym_wumeng: {},
            hyym_xveying: {},
            hyym_jiqi: {},
            hyym_chouling: {},
            hyym_maohen: {},
            hyym_yuwu: {},
            hyym_yinfeng: {},
            hyym_gaoyu: {},
            hyym_sili: {},
            hyym_huameng: {},
            hyym_jieni: {},
            hyym_jibao: {},
            hyym_jiling2: {},
            hyym_ziao: {},
            hyym_badao: {},
            hyym_silve: {},
            hyym_fenghou: {},
            hyym_zixie: {},
            hyym_siwei: {},
            hyym_yuanfen: {},
            hyym_zhenxin: {},
            hyym_lingpo: {},
            hyym_dieling: {},
            hyym_jianhun: {},
            hyym_wugong: {},
            hyym_jiexia: {},
            hyym_chongxiao: {},
            hyym_linlie: {},
            hyym_minghun: {},
            hyym_danjing: {},
            hyym_gulong: {},
            hyym_ceni: {},
            hyym_fuling: {},
            hyym_suohun: {},
            hyym_kuice: {},
            hyym_hunying: {},
            hyym_shuangxin: {},
            hyym_huikui: {},
            hyym_lingsu: {},
            hyym_zhouyuan: {},
            hyym_yuanku: {},
            hyym_miedao: {
                derivation: ['hyym_sibao'],
            },
            hyym_sibao: {},
            hyym_ninglei: {},
            hyym_fuying2: {},
            hyym_tiaobo: {},
            hyym_siwei: {},
            hyym_lincu: {},
            hyym_zaojuan: {},
            hyym_baochi: {},
            hyym_leixi: {},
            hyym_yingmeng: {},
            hyym_hunxi: {},
            hyym_xiongbu: {},
            hyym_aosi: {},
            hyym_gulang: {},
            hyym_jinlin: {},
            hyym_xiangou: {},
            hyym_xiuwei: {},
            hyym_hualing: {},
            hyym_xinpo: {},
            hyym_huijian: {},
            hyym_xvebeng: {},
            hyym_yuanling2: {},
            hyym_lianhun: {},
            hyym_ranling: {},
            hyym_shengwu: {},
            hyym_longyun: {},
            hyym_qihuang: {},
            hyym_jinfeng: {},
            hyym_rendewuliang: {},
            hyym_danjian: {},
            hyym_shimeng2: {},
            hyym_huzu: {},
            hyym_diexve: {
                derivation: ['hyym_xiangbi', 'hyym_ningran', 'hyym_ximu', 'hyym_qinxian', 'hyym_niuwei'],
            },
            hyym_tanbi: {},
            hyym_jingtun: {},
            hyym_xiangbi: {},
            hyym_ningran: {},
            hyym_ximu: {},
            hyym_qinxian: {},
            hyym_niuwei: {},
            hyym_taomeng: {},
            hyym_xiezhan: {},
            hyym_lieyanhongchunx: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '唇',
                intro: {
                    name: '烈焰红唇',
                    content: '造成和受到的伤害均+1',
                },
                content() {
                    player.addSkill('hyym_lieyanhongchuny');
                    player.markSkill('hyym_lieyanhongchuny');
                    player.storage.hyym_lieyanhongchuny++;
                    player.removeMark('hyym_lieyanhongchunx');
                    player.removeSkill('hyym_lieyanhongchunx');
                },
                group: ['hyym_lieyanhongchunx_1'],
                subSkill: {
                    1: {
                        trigger: { player: 'damageBegin3', source: 'damageBegin1' },
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            game.log(player, '触发了【烈焰红唇】');
                            trigger.num++;
                        },
                        ai: { presha: true },
                    },
                },
            },
            hyym_lieyanhongchuny: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '唇',
                intro: {
                    name: '烈焰红唇',
                    content: '造成和受到的伤害均+1',
                },
                content() {
                    player.removeMark('hyym_lieyanhongchuny');
                    player.removeSkill('hyym_lieyanhongchuny');
                },
                group: ['hyym_lieyanhongchuny_1'],
                subSkill: {
                    1: {
                        trigger: { player: 'damageBegin3', source: 'damageBegin1' },
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            game.log(player, '触发了【烈焰红唇】');
                            trigger.num++;
                        },
                        ai: { presha: true },
                    },
                },
            },
            hyym_liuxinghuoyu: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                //forceDie:true,
                enable: 'phaseUse',
                limited: true,
                multitarget: true,
                multiline: true,
                filterTarget(card, player, target) {
                    return target != player;
                },
                filter(event, player) {
                    var aa = game.filterPlayer();
                    var bb = 0;
                    for (var j = 0; j < aa.length; j++) {
                        var cc = aa[j].getSkills().filter(function (i) {
                            var info = get.info(i);
                            return info && info.limited;
                        });
                        if (cc.length) bb++;
                    }
                    return bb > 0;
                },
                selectTarget() {
                    var aa = game.filterPlayer();
                    var bb = 0;
                    for (var j = 0; j < aa.length; j++) {
                        var cc = aa[j].getSkills().filter(function (i) {
                            var info = get.info(i);
                            return info && info.limited;
                        });
                        if (cc.length) bb++;
                    }
                    return [1, bb];
                },
                prompt(event, player) {
                    var aa = game.filterPlayer();
                    var bb = 0;
                    for (var j = 0; j < aa.length; j++) {
                        var cc = aa[j].getSkills().filter(function (i) {
                            var info = get.info(i);
                            return info && info.limited;
                        });
                        if (cc.length) bb++;
                    }
                    return `选择至多${bb}名目标角色`;
                },
                content() {
                    player.storage.hyym_liuxinghuoyujilu = true;
                    for (var i = 0; i < targets.length; i++) {
                        targets[i].addSkill('hyym_liuxinghuoyux');
                        targets[i].markSkill('hyym_liuxinghuoyux');
                        if (!targets[i].storage.hyym_liuxinghuoyux.includes(player)) targets[i].storage.hyym_liuxinghuoyux.push(player);
                    }
                    player.addSkill('hyym_liuxinghuoyuy');
                    if (!player.storage.hyym_liuxinghuoyuy) player.storage.hyym_liuxinghuoyuy = 0;
                    var aa = game.filterPlayer();
                    var bb = 0;
                    for (var j = 0; j < aa.length; j++) {
                        var cc = aa[j].getSkills().filter(function (i) {
                            var info = get.info(i);
                            return info && info.limited;
                        });
                        if (cc.length) bb++;
                    }
                    if (!player.storage.liuxing) player.storage.liuxing = bb;
                    else player.storage.liuxing += bb;
                    player.awakenSkill('hyym_liuxinghuoyu');
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target, skill) {
                            return get.damageEffect(target, player, target, 'fire');
                        },
                    },
                },
            },
            hyym_liuxinghuoyux: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                filter(event, player) {
                    return true;
                },
                init(player) {
                    if (!player.storage.hyym_liuxinghuoyux) player.storage.hyym_liuxinghuoyux = [];
                },
                mark: true,
                marktext: '流',
                intro: {
                    name: '流星火雨',
                    content(storage, player) {
                        var str = '';
                        if (player.storage.hyym_liuxinghuoyux.length == 1) str += `准备阶段,${get.translation(player.storage.hyym_liuxinghuoyux)}进行一次判定,若为♦️️,其对${get.translation(player)}造成1点火焰伤害,直到:<br>`;
                        else str += `准备阶段,${get.translation(player.storage.hyym_liuxinghuoyux)}各自进行一次判定,若为♦️️,其依次对${get.translation(player)}造成1点火焰伤害,直到:<br>`;
                        for (var i = 0; i < player.storage.hyym_liuxinghuoyux.length; i++) {
                            str += get.translation(player.storage.hyym_liuxinghuoyux[i]) + `以此法再造成${player.storage.hyym_liuxinghuoyux[i].storage.liuxing - player.storage.hyym_liuxinghuoyux[i].storage.hyym_liuxinghuoyuy}点伤害<br>`;
                        }
                        return str;
                    },
                },
                content() {
                    'step 0';
                    event.num = 0;
                    ('step 1');
                    if (player.storage.hyym_liuxinghuoyux[event.num].isIn())
                        player.storage.hyym_liuxinghuoyux[event.num].judge(function (card) {
                            return card.suit == 'diamond' ? 2 : 0;
                        }).judge2 = function (result) {
                            return result.bool ? true : false;
                        };
                    ('step 2');
                    if (result.bool === true && player.storage.hyym_liuxinghuoyux[event.num].isIn()) {
                        player.damage(player.storage.hyym_liuxinghuoyux[event.num], 'fire', 1, 'nocard');
                        if (player.storage.hyym_liuxinghuoyux[event.num].isIn()) player.storage.hyym_liuxinghuoyux[event.num].addTempSkill('hyym_liuxinghuoyux_1');
                    }
                    ('step 3');
                    if (player.storage.hyym_liuxinghuoyux[event.num].isIn() && player.storage.hyym_liuxinghuoyux[event.num].hasSkill('hyym_liuxinghuoyux_1')) player.storage.hyym_liuxinghuoyux[event.num].removeSkill('hyym_liuxinghuoyux_1');
                    event.num++;
                    ('step 4');
                    if (event.num < player.storage.hyym_liuxinghuoyux.length) event.goto(1);
                },
                subSkill: {
                    1: {
                        trigger: { global: 'damageEnd' },
                        forced: true,
                        charlotte: true,
                        filter(event, player) {
                            return event.parent.name == 'hyym_liuxinghuoyux' && event.player.storage.hyym_liuxinghuoyux && event.player.storage.hyym_liuxinghuoyux.includes(player);
                        },
                        content() {
                            for (var i = 0; i < trigger.num; i++) {
                                player.storage.hyym_liuxinghuoyuy++;
                            }
                        },
                    },
                },
            },
            hyym_liuxinghuoyuy: {
                trigger: {
                    global: 'phaseZhunbeiEnd',
                    player: 'dieBegin',
                },
                forced: true,
                nopop: true,
                filter(event, player) {
                    if (event.name == 'die') return true;
                    else return player.storage.hyym_liuxinghuoyuy >= player.storage.liuxing;
                },
                content() {
                    var ll = game.filterPlayer((play) => play.storage.hyym_liuxinghuoyux && play.storage.hyym_liuxinghuoyux.includes(player));
                    for (var i = 0; i < ll.length; i++) {
                        ll[i].storage.hyym_liuxinghuoyux.remove(player);
                        if (ll[i].storage.hyym_liuxinghuoyux.length == 0) {
                            ll[i].removeMark('hyym_liuxinghuoyux');
                            ll[i].removeSkill('hyym_liuxinghuoyux');
                        }
                    }
                    player.removeSkill('hyym_liuxinghuoyuy');
                    player.storage.liuxing = 0;
                    player.storage.hyym_liuxinghuoyuy = 0;
                },
            },
            hyym_guduqiubai: {
                forced: true,
                mark: true,
                marktext: '孤',
                onremove(player, skill) {
                    player.removeMark('hyym_guduqiubai');
                },
                _priority: 99,
                intro: {
                    name: '孤独求败',
                    content: '锁定技,出牌阶段开始/结束时,你摸两张牌.',
                },
                trigger: { player: ['phaseUseBegin', 'phaseUseEnd'] },
                filter(event, player) {
                    return true;
                },
                content() {
                    player.draw(2);
                },
            },
            hyym_aoshiqunxiong: {
                forced: true,
                trigger: { player: ['phaseJudgeBefore', 'phaseDiscardBefore'] },
                filter(event, player) {
                    return true;
                },
                onremove(player, skill) {
                    player.removeMark('hyym_aoshiqunxiong');
                },
                mark: true,
                marktext: '傲',
                intro: {
                    name: '傲视群雄',
                    content: '锁定技,你跳过判定阶段和弃牌阶段,你于出牌阶段内首次造成的伤害+1.',
                },
                content() {
                    trigger.cancel();
                },
                group: ['hyym_aoshiqunxiong_1'],
                subSkill: {
                    1: {
                        trigger: { source: 'damageBegin1' },
                        forced: true,
                        filter(event, player) {
                            if (!event.source.isPhaseUsing()) return false;
                            var source = event.source;
                            if (!source) return false;
                            return !source.hasHistory('sourceDamage', function (evt) {
                                return true;
                            });
                        },
                        content() {
                            game.log(player, '触发了【傲视群雄】');
                            trigger.num++;
                        },
                    },
                },
            },
            hyym_hengsaoqianjun: {
                forced: true,
                mod: {
                    targetInRange(card, player, target, now) {
                        if (player.isPhaseUsing()) return true;
                    },
                },
                onremove(player, skill) {
                    player.removeMark('hyym_hengsaoqianjun');
                },
                mark: true,
                marktext: '横',
                intro: {
                    name: '横扫千军',
                    content: '锁定技,你于出牌阶段内使用牌无距离限制且不可被响应.',
                },
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return event.card && (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) && event.player.isPhaseUsing();
                },
                content() {
                    trigger.directHit.addArray(game.players);
                },
                ai: {
                    directHit_ai: true,
                },
            },
            hyym_geliezhuangtai: {
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return true;
                },
                forced: true,
                mark: true,
                marktext: '裂',
                intro: {
                    name: '割裂',
                    content: '每轮游戏开始时,失去1点体力.',
                },
                content() {
                    player.loseHp();
                    if (player.storage.gelie && player.storage.gelie.isIn()) player.storage.gelie.say('<span style="font-family:xingkai">我的剑,你看不见!</span>');
                },
            },
            hyym_zhimangzhuangtai: {
                group: ['hyym_zhimangzhuangtai_xiaoguo', 'hyym_zhimangzhuangtai_1'],
                trigger: { player: 'phaseBegin' },
                check(event, player) {
                    return false;
                },
                filter(event, player) {
                    return true;
                },
                prompt: '是否移除<盲>并进行一次判定？',
                mark: true,
                marktext: '盲',
                intro: {
                    name: '致盲',
                    content: '使用伤害牌时,进行一次判定,若为黑,则此牌无效.回合开始时,可移除<盲>并进行一次判定,根据判定结果执行以下效果:红色:跳过下个出牌阶段;黑色:跳过下个摸牌阶段.回合结束后,移除<盲>.',
                },
                content() {
                    'step 0';
                    player.removeMark('hyym_zhimangzhuangtai');
                    player.removeSkill('hyym_zhimangzhuangtai');
                    player.judge();
                    ('step 1');
                    switch (result.color) {
                        case 'red':
                            if (player && player.isIn()) {
                                player.addSkill('hyym_zhimangzhuangtaired');
                                player.markSkill('hyym_zhimangzhuangtaired');
                                player.storage.hyym_zhimangzhuangtaired++;
                            }
                            break;
                        case 'black':
                            if (player && player.isIn()) {
                                player.addSkill('hyym_zhimangzhuangtaiblack');
                                player.markSkill('hyym_zhimangzhuangtaiblack');
                                player.storage.hyym_zhimangzhuangtaiblack++;
                            }
                            break;
                    }
                },
                subSkill: {
                    xiaoguo: {
                        nopop: true,
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        filter(event, player) {
                            return get.tag(event.card, 'damage') > 0.5;
                        },
                        content() {
                            'step 0';
                            player.judge(function (card) {
                                return get.color(card) == 'red' ? 6 : -6;
                            }).judge2 = function (result) {
                                return result.bool == false;
                            };
                            ('step 1');
                            if (result.bool === false) {
                                var targets = trigger.targets.slice(0);
                                trigger.excluded.addArray(targets);
                            }
                        },
                    },
                    1: {
                        trigger: { player: 'phaseAfter' },
                        forced: true,
                        content() {
                            player.removeMark('hyym_zhimangzhuangtai');
                            player.removeSkill('hyym_zhimangzhuangtai');
                        },
                    },
                },
            },
            hyym_zhimangzhuangtaired: {
                forced: true,
                mark: true,
                marktext: '盲',
                init(player) {
                    if (!player.storage.hyym_zhimangzhuangtaired) player.storage.hyym_zhimangzhuangtaired = 0;
                },
                intro: {
                    name: '致盲',
                    content(storage) {
                        return `跳过下${storage}个出牌阶段`;
                    },
                },
                trigger: {
                    player: 'phaseUseBefore',
                },
                content() {
                    'step 0';
                    trigger.cancel(null, null, 'notrigger');
                    player.storage.hyym_zhimangzhuangtaired--;
                    ('step 1');
                    if (player.storage.hyym_zhimangzhuangtaired == 0) player.removeSkill('hyym_zhimangzhuangtaired');
                },
                onremove(player) {
                    player.storage.hyym_zhimangzhuangtaired = 0;
                    player.removeMark('hyym_zhimangzhuangtaired');
                },
            },
            hyym_zhimangzhuangtaiblack: {
                forced: true,
                mark: true,
                marktext: '盲',
                init(player) {
                    if (!player.storage.hyym_zhimangzhuangtaiblack) player.storage.hyym_zhimangzhuangtaiblack = 0;
                },
                intro: {
                    name: '致盲',
                    content(storage) {
                        return `跳过下${storage}个摸牌阶段`;
                    },
                },
                trigger: {
                    player: 'phaseDrawBefore',
                },
                content() {
                    'step 0';
                    trigger.cancel(null, null, 'notrigger');
                    player.storage.hyym_zhimangzhuangtaiblack--;
                    ('step 1');
                    if (player.storage.hyym_zhimangzhuangtaiblack == 0) player.removeSkill('hyym_zhimangzhuangtaiblack');
                },
                onremove(player) {
                    player.storage.hyym_zhimangzhuangtaiblack = 0;
                    player.removeMark('hyym_zhimangzhuangtaiblack');
                },
            },

            hyym_shouhuzhuangtai: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '守',
                intro: {
                    name: '守护',
                    content: '下回合结束前,防止第一次受到的伤害.',
                },
                group: ['hyym_shouhuzhuangtai_1'],
                content() {
                    player.addSkill('hyym_shouhuzhuangtaix');
                    player.markSkill('hyym_shouhuzhuangtaix');
                    player.storage.hyym_shouhuzhuangtaix++;
                    player.removeMark('hyym_shouhuzhuangtai');
                    player.removeSkill('hyym_shouhuzhuangtai');
                },
                subSkill: {
                    1: {
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        trigger: { player: 'damageBegin4' },
                        _priority: 97,
                        content() {
                            trigger.cancel();
                            player.removeSkill('hyym_shouhuzhuangtai');
                        },
                    },
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (card.number && get.tag(card, 'damage') > 0.5) return [0, -1];
                        },
                    },
                },
            },
            hyym_shouhuzhuangtaix: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '守',
                intro: {
                    name: '守护',
                    content: '下回合结束前,防止第一次受到的伤害.',
                },
                content() {
                    player.removeMark('hyym_shouhuzhuangtaix');
                    player.removeSkill('hyym_shouhuzhuangtaix');
                },
                group: ['hyym_shouhuzhuangtaix_1'],
                subSkill: {
                    1: {
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        _priority: 97,
                        trigger: { player: 'damageBegin4' },
                        content() {
                            trigger.cancel();
                            player.removeSkill('hyym_shouhuzhuangtaix');
                        },
                    },
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (card.number && get.tag(card, 'damage') > 0.5) return [0, -1];
                        },
                    },
                },
            },
            hyym_diaohulishan: {
                group: 'undist',
                mark: true,
                marktext: '调',
                nopop: true,
                intro: {
                    name: '调虎离山',
                    content: '不计入距离和座次的计算,不能使用牌/打出牌/成为牌的目标',
                },
                mod: {
                    targetEnabled(card, player, target) {
                        return false;
                    },
                    cardEnabled(card, player) {
                        return false;
                    },
                    cardUsable(card, player) {
                        return false;
                    },
                    cardRespondable(card, player) {
                        return false;
                    },
                    cardSavable(card, player) {
                        return false;
                    },
                },
            },
            hyym_manwangzhanyix: {
                trigger: { player: 'phaseBegin' },
                forced: true,
                mark: true,
                marktext: '蛮',
                intro: {
                    name: '蛮王战意',
                    content: '防止受到的一切伤害,直到下回合开始.',
                },
                content() {
                    player.removeMark('hyym_manwangzhanyix');
                    player.removeSkill('hyym_manwangzhanyix');
                },
                group: 'hyym_manwangzhanyix_1',
                subSkill: {
                    1: {
                        trigger: { player: 'damageBegin4' },
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        _priority: 99,
                        content() {
                            'step 0';
                            trigger.cancel();
                        },
                    },
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage') > 0.5) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                else return [0, 0];
                            }
                        },
                    },
                },
            },
            hyym_siwangzhichux: {
                trigger: { player: 'phaseBegin' },
                forced: true,
                mark: true,
                marktext: '死',
                intro: {
                    name: '死亡之触',
                    content(storage, player) {
                        return `直到${get.translation(player)}下回合开始:${get.translation(player)}计算与其他角色的距离-1,其他角色计算与${get.translation(player)}的距离+1,${get.translation(player)}下次对${get.translation(game.filterPlayer((play) => !player.storage.hyym_siwangzhichux_1.includes(play)))}造成的伤害+1,跳过判定阶段和弃牌阶段,使用点数属于斐波那契数列的牌不可被响应,使用点数为字母的牌时摸一张牌并弃一张牌.`;
                    },
                },
                content() {
                    player.removeMark('hyym_siwangzhichux');
                    player.removeSkill('hyym_siwangzhichux');
                    player.storage.hyym_siwangzhichux_1 = [];
                },
                mod: {
                    globalFrom(from, to, current) {
                        return current - 1;
                    },
                    globalTo(from, to, current) {
                        return current + 1;
                    },
                    aiOrder(player, card, num) {
                        if ([1, 2, 3, 5, 8, 13].includes(card.number) && (card.name == 'sha' || get.type(card, 'trick') == 'trick')) var kk = 0.01;
                        else var kk = 0;
                        if (get.type(card) === 'equip' && ![1, 11, 12, 13].includes(card.number)) return num + 20 + kk;
                        if (get.type(card) === 'equip' && [1, 11, 12, 13].includes(card.number)) return num + 15 + kk;
                        if (get.type(card) !== 'equip' && [1, 11, 12, 13].includes(card.number)) return num + 10 + kk;
                        if (get.type(card) !== 'equip' && ![1, 11, 12, 13].includes(card.number)) return num + kk;
                    },
                },
                ai: {
                    effect: {
                        player(card, player, target) {
                            if (typeof card !== 'string' && (card.number == 1 || card.number == 11 || card.number == 12 || card.number == 13) && !(card.name == 'tao' && target.hp < 0)) return [1, 0.4];
                        },
                    },
                },
                group: ['hyym_siwangzhichux_1', 'hyym_siwangzhichux_2', 'hyym_siwangzhichux_3', 'hyym_siwangzhichux_4'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            source: 'damageBegin1',
                        },
                        init(player) {
                            if (!player.storage.hyym_siwangzhichux_1) player.storage.hyym_siwangzhichux_1 = [];
                        },
                        filter(event, player) {
                            return !player.storage.hyym_siwangzhichux_1.includes(event.player);
                        },
                        content() {
                            game.log(player, '触发了【死亡之触】');
                            player.storage.hyym_siwangzhichux_1.push(trigger.player);
                            trigger.num++;
                        },
                    },
                    2: {
                        forced: true,
                        trigger: {
                            player: ['phaseDiscardBegin', 'phaseJudgeBegin'],
                        },
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            trigger.cancel(null, null, 'notrigger');
                        },
                    },
                    3: {
                        forced: true,
                        trigger: { player: 'useCard' },
                        forced: true,
                        filter(event, player) {
                            return event.card.number == 1 || event.card.number == 11 || event.card.number == 12 || event.card.number == 13;
                        },
                        content() {
                            'step 0';
                            player.draw();
                            ('step 1');
                            if (player.countCards('he') > 0)
                                player.chooseToDiscard('he', 1, true).set('ai', (card) => {
                                    return 10 - get.value(card);
                                });
                        },
                    },
                    4: {
                        trigger: { player: 'useCard' },
                        forced: true,
                        filter(event, player) {
                            return event.card.number == 1 || event.card.number == 2 || event.card.number == 3 || event.card.number == 5 || event.card.number == 8 || event.card.number == 13;
                        },
                        content() {
                            trigger.directHit.addArray(game.players);
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                return arg && arg.card && arg.card.number && (arg.card.number == 1 || arg.card.number == 2 || arg.card.number == 3 || arg.card.number == 5 || arg.card.number == 8 || arg.card.number == 13);
                            },
                        },
                    },
                },
            },
            hyym_dixianx: {
                trigger: { player: 'damageEnd' },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.parent.name == 'hyym_dixian';
                },
                content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    ('step 1');
                    player.discard(player.getCards('he').randomGet());
                    if (!player.hasSkill('hyym_dixiany')) {
                        player.addSkill('hyym_dixiany');
                        player.markSkill('hyym_dixiany');
                    }
                    player.storage.hyym_dixiany++;
                    ('step 2');
                    event.num--;
                    if (event.num > 0) event.goto(1);
                },
            },
            hyym_dixiany: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '陷',
                intro: {
                    name: '地陷',
                    content(storage, player) {
                        return '直到下回合结束,计算与其他角色的距离+' + player.storage.hyym_dixiany;
                    },
                },
                init(player) {
                    if (!player.storage.hyym_dixiany) player.storage.hyym_dixiany = 0;
                },
                content() {
                    player.removeMark('hyym_dixiany');
                    player.removeSkill('hyym_dixiany');
                },
                mod: {
                    globalFrom(from, to, distance) {
                        return distance + from.storage.hyym_dixiany;
                    },
                },
                onremove(player) {
                    player.storage.hyym_dixiany = 0;
                },
            },
            hyym_baonux: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '怒',
                init(player) {
                    if (!player.storage.hyym_baonucishu) player.storage.hyym_baonucishu = 0;
                },
                intro: {
                    name: '暴怒',
                    content(storage, player) {
                        return `造成的伤害+${player.storage.hyym_baonucishu};回合结束时弃置所有手牌,获得【血战】`;
                    },
                },
                content() {
                    var hs = player.getCards('h');
                    if (hs.length) player.discard(hs);
                    player.removeMark('hyym_baonux');
                    player.removeSkill('hyym_baonux');
                    player.addSkill('hyym_xvezhan');
                    player.storage.hyym_baonucishu = 0;
                },
                group: ['hyym_baonux_1'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            if (player.countCards('he') > 0)
                                player.chooseToDiscard('he', 1, true).set('ai', (card) => {
                                    return 10 - get.value(card);
                                });
                            trigger.num += player.storage.hyym_baonucishu;
                        },
                    },
                },
            },
            hyym_anxiangx: {
                trigger: { player: 'damageBegin3' },
                forced: true,
                filter(event, player) {
                    return true;
                },
                content() {
                    if (player.countCards('he') > 0) player.randomDiscard('he', Math.min(2, player.countCards('he')), true);
                    game.log(player, '被爆炸的暗香袭击了!');
                    game.playAudio('../extension/桃源幻梦/audio/技能配音/星彩', ['hyym_anxiang1', 'hyym_anxiang2'].randomGet());
                    trigger.num++;
                    player.removeMark('hyym_anxiangx', 1);
                    if (player.countMark('hyym_anxiangx') == 0) player.removeSkill('hyym_anxiangx');
                },
            },
            hyym_bingjiex: {
                trigger: {
                    global: ['phaseBegin', 'die'],
                },
                forced: true,
                filter(event, player) {
                    return event.player == player.storage.hyym_bingjie;
                },
                intro: {
                    name: '冰界',
                    content(storage, player) {
                        return '造成/受到伤害后,进行一次判定,若为♠️️,则翻面;若为♣️️,则弃一张牌';
                    },
                },
                mark: true,
                marktext: '界',
                content() {
                    player.removeMark('hyym_bingjiex');
                    player.removeSkill('hyym_bingjiex');
                },
                group: ['hyym_bingjiex_1'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: { player: 'damageEnd', source: 'damageSource' },
                        filter(event, player) {
                            return player.isIn();
                        },
                        forced: true,
                        content() {
                            'step 0';
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/周瑜', ['hyym_bingjiex_11', 'hyym_bingjiex_12'].randomGet());
                            player.judge(function (card) {
                                if (card.suit == 'spade') {
                                    if (player.isTurnedOver()) return 9;
                                    else return -9;
                                } else if (card.suit == 'club' && player.countCards('he') > 0) return -3;
                                else return 3;
                            }).judge2 = function (result) {
                                return result.bool == false;
                            };
                            ('step 1');
                            switch (result.suit) {
                                case 'spade':
                                    player.turnOver();
                                    break;
                                case 'club':
                                    if (player.countCards('he') > 0)
                                        player.chooseToDiscard('he', true).set('ai', (card) => {
                                            return 10 - get.value(card);
                                        });
                                    break;
                            }
                        },
                    },
                },
            },
            hyym_fenhunx: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '魂',
                intro: {
                    name: '分魂',
                    content(storage, player) {
                        return `防止对${get.translation(player.storage.hyym_gelie)}造成的伤害,且回合结束时失去【割裂】.`;
                    },
                },
                content() {
                    player.removeSkill('hyym_gelie');
                    player.removeMark('hyym_fenhunx');
                    player.removeSkill('hyym_fenhunx');
                },
                group: ['hyym_fenhunx_1'],
                subSkill: {
                    1: {
                        trigger: { source: 'damageBegin4' },
                        filter(event, player) {
                            return player.storage.hyym_gelie.includes(event.player);
                        },
                        audio: 'hyym_fenhun',
                        forced: true,
                        content() {
                            trigger.cancel();
                        },
                    },
                },
            },
            hyym_fenleicedian: {
                forced: true,
                trigger: { source: 'damageBegin1' },
                filter(event, player) {
                    return !event.hasNature();
                },
                content() {
                    game.setNature(trigger, 'thunder');
                },
                audio: 'ext:桃源幻梦/audio/技能配音/魔张角:1',
                tag: {
                    damage: 1,
                    thunderDamage: 1,
                    natureDamage: 1,
                },
                group: 'hyym_fenleicedian_1',
                subSkill: {
                    1: {
                        trigger: { source: 'damageSource' },
                        forced: true,
                        filter(event, player) {
                            return event.player && event.player.isIn() && event.player != player && ((!event.player.hasSkill('hyym_huangtiansuo') && !event.player.hasSkill('hyym_lvdouzongzix')) || event.player.hasSkill('hyym_tianfabiaoji') || event.player.countCards('he') > 0) && event.hasNature('thunder');
                        },
                        content() {
                            'step 0';
                            if (trigger.player.countCards('he') > 0)
                                trigger.player.chooseToDiscard('he', true).set('ai', (card) => {
                                    return 10 - get.value(card);
                                });
                            if (trigger.player.countMark('hyym_huangtiansuo') == 0 && !trigger.player.hasSkill('hyym_lvdouzongzix')) {
                                trigger.player.addSkill('hyym_huangtiansuo');
                                trigger.player.markSkill('hyym_huangtiansuo');
                                game.playAudio('../extension/桃源幻梦/audio/技能配音/魔张角', ['hyym_fenleicedian_11', 'hyym_fenleicedian_12', 'hyym_fenleicedian_13'].randomGet());
                            }
                            ('step 1');
                            if (trigger.player.hasSkill('hyym_tianfabiaoji')) {
                                trigger.player.damage('thunder', 1, 'nocard', 'nosource');
                                if (trigger.player.countCards('he') > 0)
                                    trigger.player.chooseToDiscard('he', true).set('ai', (card) => {
                                        return 10 - get.value(card);
                                    });
                                game.playAudio('../extension/桃源幻梦/audio/技能配音/魔张角/hyym_fenleicedian_14.mp3');
                            }
                        },
                    },
                },
            },
            hyym_yiyuhuangdao: {
                forced: true,
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return event.player.hasSkill('hyym_huangtiansuo');
                },
                audio: 'ext:桃源幻梦/audio/技能配音/魔张角:2',
                content() {
                    'step 0';
                    trigger.player.removeMark('hyym_huangtiansuo');
                    trigger.player.removeSkill('hyym_huangtiansuo');
                    ('step 1');
                    if (!trigger.player.hasSkill('hyym_tianfabiaoji') && !trigger.player.hasSkill('hyym_lvdouzongzix')) {
                        trigger.player.addSkill('hyym_tianfabiaoji');
                        trigger.player.markSkill('hyym_tianfabiaoji');
                    }
                },
            },
            hyym_huangtiansuo: {
                mark: true,
                marktext: '锁',
                intro: {
                    name: '黄天锁',
                    content(storage, player) {
                        var list = [];
                        for (
                            var i = 0;
                            i <
                            game.filterPlayer((play) =>
                                game.hasPlayer(function (current) {
                                    return current.hasSkill('hyym_yiyuhuangdao') && get.distance(play, current, 'pure') <= 1;
                                }),
                            ).length;
                            i++
                        ) {
                            if (
                                !list.includes(
                                    game.filterPlayer((play) =>
                                        game.hasPlayer(function (current) {
                                            return current.hasSkill('hyym_yiyuhuangdao') && get.distance(play, current, 'pure') <= 1;
                                        }),
                                    )[i],
                                )
                            )
                                list.push(
                                    game.filterPlayer((play) =>
                                        game.hasPlayer(function (current) {
                                            return current.hasSkill('hyym_yiyuhuangdao') && get.distance(play, current, 'pure') <= 1;
                                        }),
                                    )[i],
                                );
                        }
                        if (
                            game.hasPlayer(function (current) {
                                return current.hasSkill('hyym_yiyuhuangdao') && get.distance(player, current, 'pure') == 1;
                            })
                        )
                            return `使用牌只能指定${get.translation(list)}为目标`;
                        else if (
                            game.hasPlayer(function (current) {
                                return current.hasSkill('hyym_yiyuhuangdao') && get.distance(player, current, 'pure') > 1;
                            })
                        )
                            return `使用牌不能指定${get.translation(list)}为目标`;
                    },
                },
                mod: {
                    playerEnabled(card, player, target) {
                        if (
                            game.hasPlayer(function (current) {
                                return current.hasSkill('hyym_yiyuhuangdao') && get.distance(player, current, 'pure') == 1 && get.distance(target, current, 'pure') > 1;
                            })
                        )
                            return false;
                        else if (
                            game.hasPlayer(function (current) {
                                return current.hasSkill('hyym_yiyuhuangdao') && get.distance(player, current, 'pure') > 1 && get.distance(target, current, 'pure') <= 1;
                            })
                        )
                            return false;
                    },
                    cardSavable(card, player, target) {
                        if (
                            game.hasPlayer(function (current) {
                                return current.hasSkill('hyym_yiyuhuangdao') && get.distance(player, current, 'pure') == 1 && get.distance(target, current, 'pure') > 1;
                            })
                        )
                            return false;
                        else if (
                            game.hasPlayer(function (current) {
                                return current.hasSkill('hyym_yiyuhuangdao') && get.distance(player, current, 'pure') > 1 && get.distance(target, current, 'pure') <= 1;
                            })
                        )
                            return false;
                    },
                },
            },
            hyym_tianfabiaoji: {
                mark: true,
                marktext: '天罚',
                intro: {
                    name: '天罚',
                },
            },
            hyym_jiazixinggang: {
                audio: 'ext:桃源幻梦/audio/技能配音/魔张角:1',
                forced: true,
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return event.num > 0 && player.countMark('hyym_jiazixinggang') < 4;
                },
                mark: true,
                marktext: '甲子',
                intro: {
                    name: '甲子',
                },
                changeSeat: true,
                content() {
                    'step 0';
                    event.count = Math.min(trigger.num, 9);
                    ('step 1');
                    event.count--;
                    player.addMark('hyym_jiazixinggang');
                    player.markSkill('hyym_jiazixinggang');
                    if (trigger.source && trigger.source.isIn()) {
                        if (trigger.source.countMark('hyym_huangtiansuo') == 0 && !trigger.source.hasSkill('hyym_lvdouzongzix')) {
                            trigger.source.addSkill('hyym_huangtiansuo');
                            trigger.source.markSkill('hyym_huangtiansuo');
                        }
                        if (!trigger.source.hasSkill('hyym_tianfabiaoji') && !trigger.source.hasSkill('hyym_lvdouzongzix')) {
                            trigger.source.addSkill('hyym_tianfabiaoji');
                            trigger.source.markSkill('hyym_tianfabiaoji');
                        }
                    }
                    ('step 2');
                    if (event.count > 0 && player.countMark('hyym_jiazixinggang') < 4 && player.hasSkill(event.name) && !get.is.blocked(event.name, player)) {
                        event.goto(1);
                    } else event.finish();
                },
                ai: {
                    maixie: true,
                    maixie_defend: true,
                },
                group: ['hyym_jiazixinggang_1', 'hyym_jiazixinggang_mark'],
                subSkill: {
                    1: {
                        audio: 'ext:桃源幻梦/audio/技能配音/魔张角:1',
                        forced: true,
                        trigger: { player: 'damageBegin4' },
                        _priority: 99,
                        filter(event, player) {
                            if (player.countMark('hyym_jiazixinggang') == 0 || (player.countMark('hyym_jiazixinggang') > 0 && player.countMark('hyym_jiazixinggang') < 4 && player.storage.hyym_jiazixinggang_mark >= player.countMark('hyym_jiazixinggang'))) return false;
                            else return event.source;
                        },
                        content() {
                            if (player.countMark('hyym_jiazixinggang') < 4) trigger.cancel();
                            else {
                                player.removeMark('hyym_jiazixinggang', 4);
                                if (trigger.source.isIn()) {
                                    game.broadcastAll(
                                        function (target1, target2) {
                                            game.swapSeat(target1, target2);
                                        },
                                        player,
                                        trigger.source,
                                    );

                                    trigger.player = trigger.source;
                                }
                            }
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (target.countMark('hyym_jiazixinggang') == 4 && get.tag(card, 'damage') > 0.5) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                        else return [0.1, 0, -1, 0];
                                    } else if (target.countMark('hyym_jiazixinggang') < 4 && target.storage.hyym_jiazixinggang_mark > target.countMark('hyym_jiazixinggang')) return;
                                    else if (get.tag(card, 'damage') > 0.5) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                        else return [0, 0];
                                    }
                                },
                            },
                        },
                    },
                    mark: {
                        trigger: {
                            global: ['loseAfter', 'cardsDiscardAfter', 'phaseAfter'],
                        },
                        forced: true,
                        firstDo: true,
                        silent: true,
                        filter(event, player) {
                            if (event.name == 'phase') return true;
                            if (event.name == 'lose') return event.position == ui.discardPile;
                            return true;
                        },
                        mark: true,
                        marktext: '罡',
                        content() {
                            if (trigger.name == 'phase') {
                                player.unmarkSkill('hyym_jiazixinggang_mark');
                                return;
                            }
                            var nums = 0;
                            game.getGlobalHistory('cardMove', function (evt) {
                                if (evt.name == 'lose') {
                                    if (evt.position == ui.discardPile) {
                                        for (var i of evt.cards) nums++;
                                    }
                                } else {
                                    if (evt.name == 'cardsDiscard') {
                                        for (var i of evt.cards) nums++;
                                    }
                                }
                            });
                            player.storage.hyym_jiazixinggang_mark = nums;
                            player.markSkill('hyym_jiazixinggang_mark');
                        },
                        intro: {
                            name: '甲子星罡',
                            content(storage, player) {
                                return `本回合已有共计${player.storage.hyym_jiazixinggang_mark}张牌进入过弃牌堆`;
                            },
                        },
                    },
                },
            },
            byh_xiandeng: {
                audio: 'ext:桃源幻梦/audio/技能配音/幻翼幽冥:2',
                trigger: { global: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return !player.hasSkill('byh_xiandengx') && event.player.hp >= player.hp;
                },
                check(event, player) {
                    return true;
                },
                init(player) {
                    if (!player.storage.byh_xiandeng) player.storage.byh_xiandeng = [];
                },
                content() {
                    'step 0';
                    player.draw();
                    player.say('<span style="font-family:xingkai">影无刃,血无痕,桃源幻梦再聚魂</span>');
                    ('step 1');
                    if (player.hasCard((card) => game.hasPlayer((play) => player.canUse(card, play, true, true)), 'hs')) {
                        player
                            .chooseCard('hs', true, '使用一张牌', function (card) {
                                //QQQ
                                return game.hasPlayer((play) => player.canUse(card, play, true, true));
                            })
                            .set('ai', function (card) {
                                let player = _status.event.player;
                                if (!_status.currentPhase.next || _status.currentPhase.next != player) {
                                    if (!get.tag(card, 'damage') > 0.5) return player.getUseValue(card) + 99;
                                    return player.getUseValue(card);
                                }
                                return player.getUseValue(card);
                            });
                    } else event.finish();
                    ('step 2');
                    if (result.cards?.length) {
                        player.storage.byh_xiandeng.push(result.cards[0].cardid);
                        player.chooseUseTarget(result.cards[0], true);
                    }
                },
                group: ['byh_xiandeng_1', 'byh_xiandeng_2'],
                subSkill: {
                    1: {
                        trigger: { global: 'damageBegin1' },
                        forced: true,
                        filter(event, player) {
                            return event.card && player.storage.byh_xiandeng.includes(event.card.cardid);
                        },
                        content() {
                            player.addTempSkill('byh_xiandengx', { player: 'phaseBegin' });
                        },
                    },
                    2: {
                        trigger: { player: ['useCardAfter', 'useCard'] },
                        silent: true,
                        forced: true,
                        filter(event, player) {
                            return player == _status.currentPhase;
                        },
                        content() {
                            player.storage.byh_xiandeng.remove(event.card);
                        },
                    },
                },
            },
            byh_xiandengx: {},
            byh_jixian: {
                audio: 'ext:桃源幻梦/audio/技能配音/幻翼幽冥:2',
                trigger: { player: 'useCard' },
                filter(event, player) {
                    return !player.hasCard((card) => get.cardNameLength(card) == get.cardNameLength(event.card), 'h');
                },
                check(event, player) {
                    return true;
                },
                usable: 1,

                content() {
                    'step 0';
                    //player.storage.byh_jixian.push(get.cardNameLength(trigger.card));
                    player.draw(get.cardNameLength(trigger.card));
                    ('step 1');
                    if (player.countCards('he') > 0)
                        player.chooseToDiscard('he', Math.min(get.cardNameLength(trigger.card), player.countCards('he')), true).set('ai', (card) => {
                            var list1 = [];
                            for (var i = 0; i < player.countCards('h'); i++) {
                                list1.push(get.cardNameLength(player.getCards('h')[i]));
                            }
                            var list2 = Array.from(new Set(list1));
                            if (player.countCards('h') - list2.length > get.cardNameLength(trigger.card)) {
                                //if(get.cardNameLength(card)==player.hp&&!player.storage.byh_jixian.includes(get.cardNameLength(card))) return 7-get.value(card)
                                if (/* !player.storage.byh_jixian.includes(get.cardNameLength(card))&& */ game.filterPlayer((play) => player.canUse(card, play, true, true) && get.effect(play, card, player, player) > 0).length) return 10 - get.value(card);
                                else return 13 - get.value(card);
                            } else {
                                if (get.position(card) == 'h' && player.hasCard((car) => !ui.selected.cards.includes(car) && car != card && get.cardNameLength(card) == get.cardNameLength(car), 'h')) return 99 - get.value(card);
                                else {
                                    //if(get.cardNameLength(card)==player.hp&&!player.storage.byh_jixian.includes(get.cardNameLength(card))) return 7-get.value(card)
                                    if (/* !player.storage.byh_jixian.includes(get.cardNameLength(card))&& */ game.filterPlayer((play) => player.canUse(card, play, true, true) && get.effect(play, card, player, player) > 0).length) return 10 - get.value(card);
                                    else return 13 - get.value(card);
                                }
                            }
                        });
                    ('step 2');
                    var list1 = [];
                    for (var i = 0; i < player.countCards('h'); i++) {
                        list1.push(get.cardNameLength(player.getCards('h')[i]));
                    }
                    var list2 = Array.from(new Set(list1));
                    if (list1.length == list2.length) player.draw();
                },
                ai: { threaten: 5 },
            },
            hyym_caishenqichang: {
                audio: 'ext:桃源幻梦/audio/技能配音/财神:2',
                trigger: { global: 'phaseUseEnd' },
                filter(event, player) {
                    return get.distance(player, event.player) <= 1;
                },
                forced: true,
                content() {
                    'step 0';
                    var list = [`令${get.translation(trigger.player)}本回合手牌上限+1`];
                    if (
                        player.getCards('he', function (card) {
                            return lib.filter.cardDiscardable(card, player, 'hyym_caishenqichang');
                        }).length
                    )
                        list.push(`弃一张牌,令${get.translation(trigger.player)}失去1点体力`);
                    list.push('cancel2');
                    player
                        .chooseControl(list)
                        .set('prompt', '财神气场:可选择并执行一项:')
                        .set('ai', function () {
                            var tar = _status.currentPhase,
                                player = _status.event.player;
                            if (
                                get.attitude(player, tar) < 0 &&
                                player.getCards('he', function (card) {
                                    return lib.filter.cardDiscardable(card, player, 'hyym_caishenqichang');
                                }).length
                            )
                                return `弃一张牌,令${get.translation(trigger.player)}失去1点体力`;
                            else if (get.attitude(player, tar) > 0) return `令${get.translation(trigger.player)}本回合手牌上限+1`;
                            else return 'cancel2';
                        });
                    ('step 1');
                    if (result.control != 'cancel2') {
                        event.control = result.control;
                    }
                    if (event.control == `弃一张牌,令${get.translation(trigger.player)}失去1点体力`) {
                        player.addExpose(0.1);
                        player.chooseToDiscard('he', 1, true).set('ai', (card) => {
                            return 10 - get.value(card);
                        });
                        trigger.player.loseHp();
                    }
                    if (event.control == `令${get.translation(trigger.player)}本回合手牌上限+1`) {
                        trigger.player.addTempSkill('hyym_caishenqichang_+');
                        trigger.player.addMark('hyym_caishenqichang_+', 1, false);
                    }
                },
                subSkill: {
                    '+': {
                        charlotte: true,
                        marktext: '+',
                        intro: { content: '手牌上限+#' },
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.countMark('hyym_caishenqichang_+');
                            },
                        },
                    },
                },
            },
            hyym_tongcaixianzhen: {
                audio: 'ext:桃源幻梦/audio/技能配音/财神:2',
                trigger: { global: 'phaseDiscardBegin' },
                filter(event, player) {
                    return get.distance(player, event.player) <= 1;
                },
                prompt2(event, player) {
                    var str;
                    if (!player.storage.caishendao) str = '两';
                    else str = '一';
                    return `弃${str}张牌/失去1点体力,令${get.translation(event.player)}将手牌摸至体力上限(至多摸至五张)`;
                },
                check(event, player) {
                    if (get.attitude(player, event.player) <= 0 || (player.hp == 1 && !player.storage.caishendao && player.countCards('he') < 2) || (player.hp == 1 && player.storage.caishendao && player.countCards('he') < 1)) return false;
                    else if (event.player.hasSkill('hyym_baonux')) return false;
                    else {
                        if (player == event.player) {
                            if (!player.storage.caishendao && player.countCards('he') < 2 && player.hp == 1 && !player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) return false;
                            return player.countCards('h') <= Math.min(player.maxHp, 5) || (player.countCards('h') == Math.min(player.maxHp, 5) + 1 && !player.storage.caishendao && player.countCards('h') > player.getHandcardLimit());
                        } else {
                            if (!player.storage.caishendao) {
                                if (player.countCards('he') < 2 && player.hp == 1 && !player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) return false;
                                return Math.min(event.player.getHandcardLimit(), 5) - event.player.countCards('h') > 2;
                            } else {
                                if (player.countCards('he') == 0) return Math.min(event.player.getHandcardLimit(), 5) - event.player.countCards('h') > 2 && player.hp > 1;
                                else return Math.min(event.player.getHandcardLimit(), 5) - event.player.countCards('h') > 1;
                            }
                        }
                    }
                },
                content() {
                    'step 0';
                    var list = ['失去1点体力'];
                    if (!player.storage.caishendao && player.countCards('he') >= 2) list.push('弃两张牌');
                    if (player.storage.caishendao && player.countCards('he') >= 1) list.push('弃一张牌');
                    if (list.length == 1) {
                        player.loseHp();
                        event.goto(2);
                    } else
                        player
                            .chooseControl(list)
                            .set('prompt', '执行一项')
                            .set('ai', function () {
                                var evt = _status.event.getTrigger(),
                                    play = evt.player,
                                    player = _status.event.player;
                                if (list.includes('弃两张牌') && player.countCards('he') == 2 && player.hp == 1 && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && (card.name == 'jiu' || card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong' || card.name == 'hyym_fuhuobi'), 'hs')) return '失去1点体力';
                                else if (list.includes('弃一张牌') && player.countCards('he') == 1 && player.hp == 1 && player.hasCard((card) => (!player.hasSkill('hyym_huimouyixiaoz') || !player.storage.hyym_huimouyixiaoz.includes(get.type(card, 'trick'))) && card.name == 'hyym_nverhong', 'hs')) return '失去1点体力';
                                else if (list.includes('弃两张牌')) return '弃两张牌';
                                else if (list.includes('弃一张牌')) return '弃一张牌';
                                else return '失去1点体力';
                            });
                    ('step 1');
                    event.control = result.control;
                    if (event.control == '失去1点体力') {
                        player.loseHp();
                    }
                    if (event.control == '弃两张牌') {
                        player.chooseToDiscard('he', 2, true).set('ai', (card) => {
                            if (get.position(card) == 'h') return 15 - get.value(card);
                            else return 10 - get.value(card);
                        });
                    }
                    if (event.control == '弃一张牌') {
                        player.chooseToDiscard('he', 1, true).set('ai', (card) => {
                            if (get.position(card) == 'h') return 15 - get.value(card);
                            else return 10 - get.value(card);
                        });
                    }
                    ('step 2');
                    trigger.player.drawTo(Math.min(trigger.player.maxHp, 5));
                },
            },
            hyym_yaoqianshu: {
                audio: 'ext:桃源幻梦/audio/技能配音/财神:2',
                enable: 'chooseToUse',
                filterCard: true,
                position: 'he',
                usable: 1,
                viewAs: { name: 'hyym_tianjiangbaoxiang' },
                viewAsFilter(player) {
                    if (!player.countCards('he')) return false;
                },
                prompt: '将一张牌当【天降宝箱】使用',
                check(card) {
                    var player = _status.event.player;
                    if ((player.countCards('he') == 1 || !player.hasCard((car) => car != card && get.value(car) < 6, 'he')) && game.filterPlayer((play) => get.attitude(player, play) > 0 && play != player && play.countCards('he') > 0).length == 0) return 0;
                    else return 6 - get.value(card);
                },
                ai: {
                    order() {
                        return get.order({ name: 'hyym_tianjiangbaoxiang' }) - 0.1;
                    },
                    skillTagFilter(player, tag, arg) {
                        if (arg != 'use') return false;
                        if (!player.countCards('he')) return false;
                    },
                },
            },
            hyym_caishendao: {
                derivation: 'hyym_ruyizhiming',
                juexingji: true,
                audio: 'ext:桃源幻梦/audio/技能配音/财神:1',
                trigger: {
                    player: ['damageEnd', 'loseHpEnd'],
                },
                forced: true,
                filter(event, player) {
                    return !player.storage.caishendao && player.hp <= 2;
                },
                content() {
                    player.addSkill('hyym_ruyizhiming');
                    player.storage.caishendao = true;
                    player.awakenSkill('hyym_caishendao');
                },
            },
            hyym_ruyizhiming: {
                audio: 'ext:桃源幻梦/audio/技能配音/财神:1',
                trigger: { global: 'phaseDrawBegin' },
                filter(event, player) {
                    if (get.distance(player, event.player) > 1) return false;
                    if (player.countCards('he') == 0) return false;
                    if (event.player.hasCard((card) => card.name == 'yuruyi', 'he')) return false;

                    return true;
                },

                forced: true,
                content() {
                    'step 0';
                    player.chooseToDiscard('he', 1, false, `是否对${get.translation(trigger.player)}发动【如意徵明】？`, `弃一张牌,令${get.translation(trigger.player)}使用一张【玉如意】`).set('ai', (card) => {
                        if (get.attitude(player, trigger.player) > 0 && (trigger.player != player || player.hasCard((card) => get.value(card) < 6, 'he'))) return 99 - get.value(card);
                        else return 0;
                    });
                    ('step 1');
                    if (result.bool) {
                        var card1 = get.cardPile(function (card) {
                            return card.name == 'yuruyi';
                        });
                        if (card1 != null) var card = card1;
                        else {
                            var card = game.createCard2('yuruyi', 'heart', Math.floor(Math.random() * 13) + 1);
                            //lib.inpile.push('yuruyi');
                        }

                        trigger.player.chooseUseTarget(card, true, 'nopopup');
                    }
                },
            },
            hyym_zongzishijian: {},
            hyym_fubaomishu: {},
            hyym_liancai: {},
            hyym_fujia: {},
            hyym_pianxianyunji: {},
            hyym_pojunlongshan: {
                enable: 'phaseUse',
                usable: 1,
                audio: 'ext:桃源幻梦/audio/技能配音/神赵云:2',
                changeSeat: true,
                filter(event, player) {
                    return game.players.length > 1;
                },
                filterTarget(card, player, target) {
                    if (game.players.length > 2) return target != player && target != player.next;
                },
                selectTarget() {
                    if (game.players.length == 2) return [0, 0];
                    return [1, 1];
                },
                prompt(event, player) {
                    if (game.players.length == 2) return `和${get.translation(game.filterPlayer((play) => play != player)[0])}交换座次,对其造成1点伤害并令其本阶段不能响应你使用的牌`;
                    else return '沿最短路径将座次移动至一名其他角色的上家,对沿途所有角色造成1点伤害,并令其本阶段不能响应你使用的牌';
                },
                content() {
                    'step 0';
                    if (game.players.length == 2) event.tar = game.filterPlayer((play) => play != player)[0];
                    else event.tar = target;
                    event.kkk = game.filterPlayer((play) => play.hasSkill('hyym_nihuapox'));
                    if (event.kkk.length)
                        for (var i = 0; i < event.kkk.length; i++) {
                            event.kkk[i].removeSkill('hyym_nihuapox');
                        }
                    ('step 1');
                    if (game.players.length % 2 == 1 && get.distance(player, event.tar, 'pure') * 2 + 1 == game.players.length && get.distance(player, event.tar, 'pure') == get.distance(player, event.tar.previous, 'pure')) {
                        player
                            .chooseControl(['顺时针', '逆时针'])
                            .set('prompt', '破军龙闪:选择位移方向')
                            .set('ai', function () {
                                let target = event.tar;
                                let left = [],
                                    right = [];
                                let left2 = player.previous,
                                    right2 = player.next;
                                while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
                                    left.push(left2);
                                    right.push(right2);
                                    left2 = left2.previous;
                                    right2 = right2.next;
                                }
                                if (right.length > left.length) return '顺时针';
                                return '逆时针';
                            });
                    }
                    ('step 2');
                    if (game.players.length == 2) {
                        game.broadcastAll(
                            function (target1, target2) {
                                game.swapSeat(target1, target2);
                            },
                            player,
                            event.tar,
                        );
                    } else {
                        var choices = [];
                        let target = event.tar;
                        let left = [],
                            right = [];
                        let left2 = player.previous,
                            right2 = player.next;
                        while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
                            left.push(left2);
                            right.push(right2);
                            left2 = left2.previous;
                            right2 = right2.next;
                        }
                        if (target == left2) {
                            event.tar1 = left;
                        } else {
                            event.tar1 = right;
                        }
                        if (result.control && result.control == '顺时针') event.tar1 = left;
                        if (result.control && result.control == '逆时针') event.tar1 = right;
                        game.broadcastAll(
                            function (target1, target2) {
                                game.swapSeat(target1, target2, null, true);
                            },
                            player,
                            event.tar,
                        );
                        event.goto(5);
                    }
                    ('step 3');
                    if (event.tar.isIn()) {
                        event.tar.damage();
                        player.addTempSkill('hyym_pojunlongshanx', 'phaseUseAfter');
                    }
                    ('step 4');
                    if (event.tar.isIn()) {
                        player.storage.pojunlongshanx.push(event.tar);
                    }
                    player.markSkill('hyym_pojunlongshanx');
                    event.finish();
                    ('step 5');
                    if (event.kkk.length)
                        for (var i = 0; i < event.kkk.length; i++) {
                            event.kkk[i].addTempSkill('hyym_nihuapox', { player: 'phaseBefore' });
                        }
                    for (var i = 0; i < event.tar1.length; i++) {
                        if (event.tar1[i].isIn()) {
                            event.tar1[i].damage();
                        }
                    }
                    player.addTempSkill('hyym_pojunlongshanx', 'phaseUseAfter');
                    ('step 6');
                    for (var i = 0; i < event.tar1.length; i++) {
                        if (event.tar1[i].isIn()) {
                            player.storage.pojunlongshanx.push(event.tar1[i]);
                        }
                    }
                    player.markSkill('hyym_pojunlongshanx');
                },
                ai: {
                    expose: 0.1,
                    order: 12,
                    tag: {
                        damage: 1,
                    },
                    result: {
                        player: 1,
                    },
                },
            },
            hyym_pojunlongshanx: {
                mark: true,
                marktext: '破',
                init(player, skill) {
                    if (!player.storage.pojunlongshanx) player.storage.pojunlongshanx = [];
                },
                intro: {
                    name: '破军龙闪',
                    content(storage, player) {
                        return get.translation(player.storage.pojunlongshanx) + `本阶段不可响应${get.translation(player)}使用的牌`;
                    },
                },
                onremove(player) {
                    player.storage.pojunlongshanx = [];
                },
                forced: true,
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return (
                        event.card &&
                        game.hasPlayer(function (current) {
                            return player.storage.pojunlongshanx.includes(current);
                        })
                    );
                },
                content() {
                    trigger.directHit.addArray(
                        game.filterPlayer(function (current) {
                            return player.storage.pojunlongshanx.includes(current);
                        }),
                    );
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return player.storage.pojunlongshanx.includes(arg.target);
                    },
                },
            },
            hyym_youlongqitanqiang: {
                audio: 'ext:桃源幻梦/audio/技能配音/神赵云:2',
                forced: true,
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return player.countMark('qitanqiangcishu') < 7 && (!event.card || event.card.name != 'sha');
                },
                mark: true,
                marktext: '游',
                intro: {
                    name: '游龙-七探枪',
                    content(storage, player) {
                        return '本轮使用【杀】的次数上限+' + player.countMark('qitanqiang') + '(本回合仍可出' + Math.max(player.getCardUsable({ name: 'sha' }), 0) + '张【杀】)<br><br>本轮剩余摸牌次数:' + (7 - player.countMark('qitanqiangcishu')) + '次';
                    },
                    markcount(storage, player) {
                        return player.countMark('qitanqiang');
                    },
                },
                content() {
                    'step 0';
                    player.draw();
                    ('step 1');
                    player.addMark('qitanqiang');
                    player.addMark('qitanqiangcishu');
                },
                group: ['hyym_youlongqitanqiang_1', 'hyym_youlongqitanqiang_3'],
                subSkill: {
                    1: {
                        forced: true,
                        silent: true,
                        nopop: true,
                        trigger: { global: 'roundStart' },
                        filter(event, player) {
                            return player.countMark('qitanqiangcishu') > 0 || player.countMark('qitanqiang') > 0;
                        },
                        content() {
                            if (player.countMark('qitanqiangcishu') > 0) player.removeMark('qitanqiangcishu', player.countMark('qitanqiangcishu'));
                            if (player.countMark('qitanqiang') > 0) player.removeMark('qitanqiang', player.countMark('qitanqiang'));
                        },
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num + player.countMark('qitanqiang');
                            },
                        },
                    },
                },
            },
            hyym_zhuanyupan: {},
            hyym_lianguangman: {},
            hyym_chuilandu: {},
            hyym_yuxinfang: {},
            hyym_xianjue: {},
            hyym_linyong: {},
            hyym_lingye: {},
            hyym_feiyuan: {},
            hyym_yuehun: {},
            hyym_zhuzuo: {},
            hyym_guihun2: {},
            hyym_fengying: {},
            hyym_shiwanfute: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player;
                },
                limited: true,
                multitarget: true,
                multiline: true,
                selectTarget() {
                    return [1, Infinity];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    targets.sortBySeat();
                    ('step 1');
                    player.awakenSkill('hyym_shiwanfute');
                    for (var i = 0; i < targets.length; i++) {
                        targets[i].damage('thunder', 1, 'nocard');
                    }
                    ('step 2');
                    for (var i = 0; i < targets.length; i++) {
                        if (targets[i].isIn() && !targets[i].hasSkill('hyym_shiwanfutex')) {
                            targets[i].addTempSkill('hyym_shiwanfutex', { player: 'phaseAfter' });
                            targets[i].markSkill('hyym_shiwanfutex');
                        }
                    }
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    tag: {
                        damage: 1,
                        thunderDamage: 1,
                        natureDamage: 1,
                    },
                    result: {
                        target(player, target, skill) {
                            return get.damageEffect(target, player, target, 'thunder');
                        },
                    },
                },
            },
            hyym_shiwanfutex: {
                mark: true,
                marktext: '伏',
                forced: true,
                intro: {
                    name: '定身(十万伏特)',
                    content(storage, player) {
                        return `每回合使用的首张牌无效直到${get.translation(player)}下回合结束`;
                    },
                },
                trigger: { player: 'useCard' },
                filter(event, player) {
                    return true;
                },
                usable: 1,
                content() {
                    trigger.targets.length = 0;
                    trigger.all_excluded = true;
                    game.log(trigger.card, '被无效了');
                },
                group: 'hyym_shiwanfutex',
                subSkill: {
                    1: {
                        trigger: { player: 'phaseAfter' },
                        forced: true,
                        popup: false,
                        nopop: true,
                        content() {
                            player.removeMark('hyym_shiwanfutex');
                            player.removeSkill('hyym_shiwanfutex');
                        },
                    },
                },
            },
            hyym_bingshuangbaosui: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player;
                },
                limited: true,
                selectTarget() {
                    return [1, 1];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_bingshuangbaosui');
                    ('step 1');
                    target.damage('ice', 2, 'nocard');
                    ('step 2');
                    let list = game.filterPlayer((play) => play != player && (play == target.previous || play == target.next));
                    if (list.length)
                        for (var i = 0; i < list.length; i++) {
                            list[i].damage('ice', 1, 'nocard');
                        }
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    tag: {
                        damage: 1,
                        iceDamage: 2,
                        natureDamage: 1,
                    },
                    result: {
                        target(player, target, skill) {
                            let list = game.filterPlayer((play) => play != player && (play == target.previous || play == target.next));
                            let num = 0;
                            for (var i = 0; i < list.length; i++) {
                                if (list[i].isEnemiesOf(player)) num += get.damageEffect(list[i], player, list[i], 'ice');
                                else num -= get.damageEffect(list[i], player, list[i], 'ice');
                            }
                            num += get.damageEffect(target, player, target, 'ice') * 2;
                            return num;
                        },
                    },
                },
            },
            hyym_zhenyanbaofa: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target == player.next || target == player.previous;
                },
                limited: true,
                selectTarget() {
                    return [1, 1];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_zhenyanbaofa');
                    ('step 1');
                    target.damage('fire', 1, 'nocard');
                    ('step 2');
                    if (!player.hasSkill('hyym_zhenyanbaofax')) {
                        player.addTempSkill('hyym_zhenyanbaofax', { global: 'roundStart' });
                        player.markSkill('hyym_zhenyanbaofax');
                    }
                    player.storage.zhenyanbaofax += 4;
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    tag: {
                        damage: 1,
                        fireDamage: 1,
                        natureDamage: 1,
                    },
                    result: {
                        target(player, target, skill) {
                            return -2;
                        },
                        player: 8,
                    },
                },
            },
            hyym_zhenyanbaofax: {
                mark: true,
                marktext: '爆',
                intro: {
                    name: '真炎爆发',
                    content(storage, player) {
                        return `直到下轮开始,${get.translation(player)}的下${player.storage.zhenyanbaofax}次造成的伤害变为1.5倍(向下取整)`;
                    },
                },
                //_priority:0.1,
                onremove(player) {
                    player.storage.zhenyanbaofax = 0;
                    player.removeMark('hyym_zhenyanbaofax');
                },
                init(player) {
                    if (!player.storage.zhenyanbaofax) player.storage.zhenyanbaofax = 0;
                },
                forced: true,
                trigger: {
                    source: 'damageBegin1',
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    //game.log(player,'触发了【真炎爆发】');
                    game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_zhenyanbaofa1', 'hyym_zhenyanbaofa2'].randomGet());
                    trigger.num = Math.floor(trigger.num * 1.5);
                    player.storage.zhenyanbaofax--;
                    if (player.storage.zhenyanbaofax == 0) player.removeSkill('hyym_zhenyanbaofax');
                },
            },
            hyym_tianbingdidong: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                multitarget: true,
                multiline: true,
                filterTarget(card, player, target) {
                    return target == player.next || target == player.previous;
                },
                limited: true,
                selectTarget() {
                    return [1, 1];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    targets.sortBySeat();
                    ('step 1');
                    player.awakenSkill('hyym_tianbingdidong');
                    ('step 2');
                    for (var i = 0; i < targets.length; i++) {
                        targets[i].addTempSkill('hyym_tianbingdidongx');
                        targets[i].markSkill('hyym_tianbingdidongx');
                    }
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    result: {
                        target(player, target, skill) {
                            return -5;
                        },
                    },
                },
            },
            hyym_tianbingdidongx: {
                charlotte: true,
                ai: {
                    unequip2: true,
                    nohujia: true,
                },
                mark: true,
                marktext: '冻',
                intro: {
                    name: '天冰地冻(冰冻)',
                    content(storage, player) {
                        return '防具,护甲和所有非锁定技失效,且不能使用或打出牌/造成伤害,直到回合结束';
                    },
                },
                onremove(player) {
                    player.removeMark('hyym_tianbingdidongx');
                    player.removeSkill('fengyin');
                },
                group: ['fengyin', 'hyym_tianbingdidongx_1'],
                mod: {
                    cardEnabled2(card, player) {
                        return false;
                    },
                },
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            game.log(player, '造成的伤害因【天冰地冻】而被防止');
                            trigger.cancel();
                        },
                        ai: {
                            effect: {
                                player(card, player) {
                                    if (player.hasSkillTag('jueqing')) return;
                                    if (typeof card !== 'string' && get.tag(card, 'damage') > 0.5) return [0, 0, 0, 0];
                                },
                            },
                        },
                    },
                },
            },
            hyym_shengguangqiyu: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                multitarget: true,
                multiline: true,
                filterTarget(card, player, target) {
                    return target.isDamaged();
                },
                limited: true,
                selectTarget() {
                    return [1, 3];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    targets.sortBySeat();
                    ('step 1');
                    player.awakenSkill('hyym_shengguangqiyu');
                    ('step 2');
                    for (var i = 0; i < targets.length; i++) {
                        targets[i].hp = targets[i].maxHp;
                    }
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    result: {
                        target(player, target, skill) {
                            return (target.maxHp - target.hp) * 2;
                        },
                    },
                },
            },
            hyym_anchaotianding: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player;
                },
                limited: true,
                selectTarget() {
                    return [1, 1];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_anchaotianding');
                    ('step 1');
                    target.loseHp();
                    target.addSkill('hyym_anchaotiandingx');
                    target.markSkill('hyym_anchaotiandingx');
                    target.storage.hyym_anchaotiandingx++;
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    result: {
                        target(player, target, skill) {
                            return -5;
                        },
                    },
                },
            },
            hyym_anchaotiandingx: {
                forced: true,
                mark: true,
                marktext: '钉',
                init(player) {
                    if (!player.storage.hyym_anchaotiandingx) player.storage.hyym_anchaotiandingx = 0;
                },
                intro: {
                    name: '暗潮天钉',
                    content(storage) {
                        return `跳过下${storage}个出牌阶段`;
                    },
                },
                trigger: {
                    player: 'phaseUseBefore',
                },
                content() {
                    'step 0';
                    game.log(player, '因【暗潮天钉】跳过了出牌阶段');
                    game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_anchaotianding1', 'hyym_anchaotianding2'].randomGet());
                    trigger.cancel(null, null, 'notrigger');
                    player.storage.hyym_anchaotiandingx--;
                    ('step 1');
                    if (player.storage.hyym_anchaotiandingx == 0) player.removeSkill('hyym_anchaotiandingx');
                },
                onremove(player) {
                    player.removeMark('hyym_anchaotiandingx');
                },
            },
            hyym_yechatiancheng: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    if (player == target) return false;
                    var selected = ui.selected.targets;
                    if (!selected.length) return true;
                    for (var i of selected) {
                        if (i.next == target || i.previous == target) return true;
                    }
                    return false;
                },
                limited: true,
                multitarget: true,
                multiline: true,
                selectTarget() {
                    return [3, 3];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    targets.sortBySeat();
                    ('step 1');
                    player.awakenSkill('hyym_yechatiancheng');
                    var list = ['1', '2', '3'];
                    for (var i = 0; i < targets.length; i++) {
                        if (targets[i].isIn()) {
                            let list1 = list.randomGet();
                            list.remove(list1);
                            if (list1 == '1') {
                                targets[i].damage('thunder', 2, 'nocard', 'nosource');
                            }
                            if (
                                list1 == '2' &&
                                targets[i].getCards('he', function (card) {
                                    return lib.filter.cardDiscardable(card, targets[i], 'hyym_yechatiancheng');
                                }).length
                            )
                                targets[i]
                                    .chooseToDiscard(
                                        'he',
                                        Math.min(
                                            targets[i].getCards('he', function (card) {
                                                return lib.filter.cardDiscardable(card, targets[i], 'hyym_yechatiancheng');
                                            }).length,
                                            4,
                                        ),
                                        true,
                                    )
                                    .set('ai', (card) => {
                                        return 10 - get.value(card);
                                    });
                            if (list1 == '3') {
                                if (
                                    targets[i].getCards('he', function (card) {
                                        return lib.filter.cardDiscardable(card, targets[i], 'hyym_yechatiancheng');
                                    }).length
                                )
                                    targets[i]
                                        .chooseToDiscard(
                                            'he',
                                            Math.min(
                                                targets[i].getCards('he', function (card) {
                                                    return lib.filter.cardDiscardable(card, targets[i], 'hyym_yechatiancheng');
                                                }).length,
                                                2,
                                            ),
                                            true,
                                        )
                                        .set('ai', (card) => {
                                            return 10 - get.value(card);
                                        });
                                targets[i].damage('thunder', 1, 'nocard', 'nosource');
                            }
                        }
                    }
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    tag: {
                        damage: 1,
                        thunderDamage: 1,
                        natureDamage: 1,
                    },
                    result: {
                        target(player, target, skill) {
                            get.damageEffect(target, player, target, 'thunder') * 2;
                        },
                    },
                },
            },
            hyym_jiliuchongji: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player;
                },
                limited: true,
                selectTarget() {
                    return [1, 1];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_jiliuchongji');
                    ('step 1');
                    target.damage(1, 'nocard');
                    if (!target.hasSkill('hyym_jiliuchongjix')) {
                        target.addSkill('hyym_jiliuchongjix');
                        target.markSkill('hyym_jiliuchongjix');
                    }
                    target.storage.hyym_jiliuchongjix += 3;
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    tag: {
                        damage: 1,
                    },
                    result: {
                        target(player, target, skill) {
                            return -5;
                        },
                    },
                },
            },
            hyym_jiliuchongjix: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '激',
                intro: {
                    name: '激流冲击',
                    content(storage, player) {
                        return '直到下回合结束,计算与其他角色的距离+' + player.storage.hyym_jiliuchongjix;
                    },
                },
                init(player) {
                    if (!player.storage.hyym_jiliuchongjix) player.storage.hyym_jiliuchongjix = 0;
                },
                content() {
                    player.removeMark('hyym_jiliuchongjix');
                    player.removeSkill('hyym_jiliuchongjix');
                },
                mod: {
                    globalFrom(from, to, distance) {
                        return distance + from.storage.hyym_jiliuchongjix;
                    },
                },
                onremove(player) {
                    player.storage.hyym_jiliuchongjix = 0;
                },
            },
            hyym_jueduifangyu: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                limited: true,
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return true;
                },
                check(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_jueduifangyu');
                    ('step 1');
                    if (!player.hasSkill('hyym_jueduifangyux')) {
                        player.addSkill('hyym_jueduifangyux');
                        player.markSkill('hyym_jueduifangyux');
                    }
                    player.storage.jueduifangyux_markcount += 8;
                },
            },
            hyym_jueduifangyux: {
                mark: true,
                marktext: '绝',
                trigger: { global: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                init(player) {
                    if (!player.storage.jueduifangyux_markcount) player.storage.jueduifangyux_markcount = 0;
                    if (!player.storage.jueduifangyuy) player.storage.jueduifangyuy = 0;
                },
                intro: {
                    content(storage, player) {
                        var kk;
                        if (player.maxHp <= player.storage.jueduifangyuy) kk = 0;
                        else kk = player.maxHp - player.storage.jueduifangyuy;
                        return player.storage.jueduifangyux_markcount + `回合内,防止每回合前${player.maxHp}次受到的伤害<br>本回合仍可防止${kk}次伤害`;
                    },
                },
                content() {
                    player.storage.jueduifangyuy = 0;
                    player.storage.jueduifangyux_markcount--;
                    if (player.storage.jueduifangyux_markcount == 0) {
                        delete player.storage.jueduifangyux_markcount;
                        player.removeSkill('hyym_jueduifangyux');
                    } else {
                    }
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage') && target.maxHp > target.storage.jueduifangyuy) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                else return [0, 0];
                            }
                        },
                    },
                },
                group: 'hyym_jueduifangyux_1',
                subSkill: {
                    1: {
                        trigger: { player: 'damageBegin4' },
                        _priority: 98,
                        forced: true,
                        filter(event, player) {
                            return player.maxHp > player.storage.jueduifangyuy;
                        },
                        content() {
                            trigger.cancel();
                            player.storage.jueduifangyuy++;
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_jueduifangyu1', 'hyym_jueduifangyu2'].randomGet());
                        },
                    },
                },
            },
            hyym_lingboweibu: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                limited: true,
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return true;
                },
                check(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_lingboweibu');
                    ('step 1');
                    if (!player.hasSkill('hyym_lingboweibux')) {
                        player.addSkill('hyym_lingboweibux');
                        player.markSkill('hyym_lingboweibux');
                    }
                    player.storage.lingboweibux_markcount += 8;
                },
            },
            hyym_lingboweibux: {
                mark: true,
                marktext: '凌',
                trigger: { global: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        var kk;
                        if (player.maxHp <= player.storage.lingboweibuy) kk = 0;
                        else kk = player.maxHp - player.storage.lingboweibuy;
                        return player.storage.lingboweibux_markcount + `回合内,每回合前${player.maxHp}次成为其他角色的牌的目标时取消之<br>本回合仍可取消${kk}次目标`;
                    },
                },
                init(player) {
                    if (!player.storage.lingboweibux_markcount) player.storage.lingboweibux_markcount = 0;
                    if (!player.storage.lingboweibuy) player.storage.lingboweibuy = 0;
                },
                _priority: 98,
                content() {
                    player.storage.lingboweibuy = 0;
                    player.storage.lingboweibux_markcount--;
                    if (player.storage.lingboweibux_markcount == 0) {
                        delete player.storage.lingboweibux_markcount;
                        player.removeSkill('hyym_lingboweibux');
                    } else {
                    }
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (player != target && target.maxHp > target.storage.lingboweibuy) {
                                return [0, 0];
                            }
                        },
                    },
                },
                group: 'hyym_lingboweibux_1',
                subSkill: {
                    1: {
                        trigger: { target: 'useCardToTargeted' },
                        forced: true,
                        filter(event, player) {
                            return player.maxHp > player.storage.lingboweibuy && !event.parent.excluded.includes(player);
                        },
                        content() {
                            trigger.parent.excluded.add(player);
                            player.storage.lingboweibuy++;
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_lingboweibu1', 'hyym_lingboweibu2'].randomGet());
                        },
                    },
                },
            },
            hyym_tianganghuti: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                limited: true,
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return true;
                },
                check(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_tianganghuti');
                    ('step 1');
                    if (!player.hasSkill('hyym_tianganghutix')) {
                        player.addSkill('hyym_tianganghutix');
                        player.markSkill('hyym_tianganghutix');
                    }
                    player.storage.tianganghutix_markcount += 3;
                },
            },
            hyym_tianganghutix: {
                mark: true,
                marktext: '罡',
                trigger: { global: 'roundStart' },
                forced: true,
                popup: false,
                nopop: true,
                init(player) {
                    if (!player.storage.tianganghutix_markcount) player.storage.tianganghutix_markcount = 0;
                    if (!player.storage.tianganghutiy) player.storage.tianganghutiy = 0;
                },
                intro: {
                    content(storage, player) {
                        var kk;
                        if (player.maxHp <= player.storage.tianganghutiy) kk = 0;
                        else kk = player.maxHp - player.storage.tianganghutiy;
                        return player.storage.tianganghutix_markcount + `轮内,摸牌阶段的摸牌基数+2且免疫每轮前${player.maxHp}次体力流失<br>本轮仍可免疫${kk}次体力流失`;
                    },
                },
                filter(event, player) {
                    return game.roundNumber != 1;
                },
                content() {
                    player.storage.tianganghutiy = 0;
                    player.storage.tianganghutix_markcount--;
                    if (player.storage.tianganghutix_markcount == 0) {
                        delete player.storage.tianganghutix_markcount;
                        player.removeSkill('hyym_tianganghutix');
                    } else {
                    }
                },
                group: ['hyym_tianganghutix_1', 'hyym_tianganghutix_2'],
                subSkill: {
                    1: {
                        trigger: { player: 'phaseDrawBegin2' },
                        forced: true,
                        filter(event, player) {
                            if (event.numFixed) return false;
                            return true;
                        },
                        content() {
                            trigger.num += 2;
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_tianganghuti1', 'hyym_tianganghuti2'].randomGet());
                        },
                    },
                    2: {
                        trigger: { player: 'loseHpBefore' },
                        filter(event, player) {
                            return player.maxHp > player.storage.tianganghutiy;
                        },
                        forced: true,
                        content() {
                            trigger.cancel();
                            player.storage.tianganghutiy++;
                            game.log(player, '因【天罡护体】防止了体力流失');
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_tianganghuti1', 'hyym_tianganghuti2'].randomGet());
                        },
                    },
                },
            },
            hyym_shuorihuolei: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player;
                },
                limited: true,
                selectTarget() {
                    return [1, 1];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_shuorihuolei');
                    ('step 1');
                    player.addTempSkill('hyym_shuorihuoleix');
                    player.markSkill('hyym_shuorihuoleix');
                    player.storage.shuori = 5;
                    target.damage('fire', 1, 'nocard');
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    tag: {
                        damage: 1,
                        fireDamage: 1,
                        natureDamage: 1,
                    },
                    result: {
                        target(player, target, skill) {
                            return -2;
                        },
                    },
                },
            },
            hyym_shuorihuoleix: {
                mark: true,
                marktext: '烁',
                init(player) {
                    if (!player.storage.shuori) player.storage.shuori = 5;
                },
                intro: {
                    content(storage, player) {
                        return `本回合剩余${player.storage.shuori}次,造成1点伤害后,摸一张牌`;
                    },
                },
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return event.num > 0;
                },
                forced: true,
                usable: 5,
                content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    ('step 1');
                    player.draw();
                    game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_shuorihuolei1', 'hyym_shuorihuolei2'].randomGet());
                    player.storage.shuori--;
                    ('step 2');
                    event.num--;
                    if (event.num > 0 && player.storage.shuori > 0) {
                        event.goto(1);
                    }
                    if (player.storage.shuori == 0) {
                        player.removeMark('hyym_shuorihuoleix');
                        player.removeSkill('hyym_shuorihuoleix');
                    }
                },
            },
            hyym_zhimingrufeng: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                limited: true,
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return true;
                },
                check(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_zhimingrufeng');
                    ('step 1');
                    player.changeHujia(3);
                    if (!player.hasSkill('hyym_zhimingrufengx')) {
                        player.addSkill('hyym_zhimingrufengx');
                        player.markSkill('hyym_zhimingrufengx');
                    }
                    player.storage.zhimingrufengx_markcount += 6;
                },
            },
            hyym_zhimingrufengx: {
                mark: true,
                marktext: '暝',
                trigger: { global: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                init(player) {
                    if (!player.storage.zhimingrufengx_markcount) player.storage.zhimingrufengx_markcount = 0;
                    if (!player.storage.zhimingrufengy) player.storage.zhimingrufengy = 0;
                },
                intro: {
                    content(storage, player) {
                        var kk;
                        if (player.maxHp <= player.storage.zhimingrufengy) kk = 0;
                        else kk = player.maxHp - player.storage.zhimingrufengy;
                        return player.storage.zhimingrufengx_markcount + `回合内,每回合前${player.maxHp}次受到伤害后回复1点体力<p>本回合仍可回复${kk}次体力`;
                    },
                },
                content() {
                    player.storage.zhimingrufengy = 0;
                    player.storage.zhimingrufengx_markcount--;
                    if (player.storage.zhimingrufengx_markcount == 0) {
                        delete player.storage.zhimingrufengx_markcount;
                        player.removeSkill('hyym_zhimingrufengx');
                    } else {
                    }
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage') && target.maxHp > target.storage.zhimingrufengy) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                else return [1, 2];
                            }
                        },
                    },
                },
                group: 'hyym_zhimingrufengx_1',
                subSkill: {
                    1: {
                        trigger: { player: 'damageEnd' },
                        forced: true,
                        filter(event, player) {
                            return player.maxHp > player.storage.zhimingrufengy;
                        },
                        content() {
                            player.recover();
                            player.storage.zhimingrufengy++;
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_zhimingrufeng1', 'hyym_zhimingrufeng2'].randomGet());
                        },
                    },
                },
            },
            hyym_fengshapanyu: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                limited: true,
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return true;
                },
                check(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_fengshapanyu');
                    ('step 1');
                    if (!player.hasSkill('hyym_fengshapanyux')) {
                        player.addSkill('hyym_fengshapanyux');
                        player.markSkill('hyym_fengshapanyux');
                    }
                    player.storage.fengshapanyux_markcount += 4;
                },
            },
            hyym_fengshapanyux: {
                mark: true,
                marktext: '磐',
                trigger: { global: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        var kk = Math.floor(0.5 * player.hujia);
                        return player.storage.fengshapanyux_markcount + `回合内,每回合开始时,获得1点护甲并摸一张牌,${player.storage.fengshapanyux_markcount}回合后,失去所有护甲,对一名其他角色造成${kk}点伤害并回复${kk}点体力`;
                    },
                },
                init(player) {
                    if (!player.storage.fengshapanyux_markcount) player.storage.fengshapanyux_markcount = 0;
                },
                content() {
                    'step 0';
                    player.storage.fengshapanyux_markcount--;
                    if (player.storage.fengshapanyux_markcount == 0) {
                        delete player.storage.fengshapanyux_markcount;
                        player.removeSkill('hyym_fengshapanyux');
                        event.kk = player.hujia;
                        player.changeHujia(-event.kk);
                        player
                            .chooseTarget(true, `对一名其他角色造成${Math.floor(0.5 * player.hujia)}点伤害并回复${Math.floor(0.5 * player.hujia)}点体力`, function (card, player, target) {
                                return target != player;
                            })
                            .set('ai', function (target) {
                                return -get.attitude(player, target);
                            });
                    } else {
                        event.finish();
                    }
                    ('step 1');
                    if (result.bool) {
                        result.targets[0].damage(Math.floor(0.5 * event.kk));
                        player.recover(Math.floor(0.5 * event.kk));
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_fengshapanyu1', 'hyym_fengshapanyu2'].randomGet());
                    }
                },
                group: 'hyym_fengshapanyux_1',
                subSkill: {
                    1: {
                        trigger: { global: 'phaseBegin' },
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            player.changeHujia();
                            player.draw();
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_fengshapanyu1', 'hyym_fengshapanyu2'].randomGet());
                        },
                    },
                },
            },
            hyym_lingxiaoshuilan: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player;
                },
                limited: true,
                selectTarget() {
                    return [1, 1];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_lingxiaoshuilan');
                    ('step 1');
                    if (target.hasSkill('hyym_gptiyankax')) {
                        delete target.storage.hyym_gptiyankax;
                        delete target.storage.hyym_gptiyan;
                        delete target.storage.hyym_gptiyankax_markcount;
                        delete target.storage.hyym_gptiyan_markcount;
                        target.removeSkill('hyym_gptiyankax');
                    }
                    if (target.hasSkill('hyym_yijigongji')) {
                        target.storage.hyym_yijigongjiyao = 0;
                        target.removeMark('hyym_yijigongji');
                        target.removeSkill('hyym_yijigongji');
                    }
                    if (target.hasSkill('hyym_yijifangyu')) {
                        target.storage.hyym_yijifangyuyao = 0;
                        target.removeMark('hyym_yijifangyu');
                        target.removeSkill('hyym_yijifangyu');
                    }
                    if (target.hasSkill('hyym_baozoubingganx')) {
                        target.removeMark('hyym_baozoubingganx');
                        target.removeSkill('hyym_baozoubingganx');
                    }
                    if (target.hasSkill('hyym_biandabianxiaoroux')) {
                        delete target.storage.hyym_biandabianxiaoroux;
                        delete target.storage.hyym_biandabianxiaoroux_markcount;
                        target.removeSkill('hyym_biandabianxiaoroux');
                    }
                    if (target.hasSkill('hyym_guihuajiux')) {
                        target.removeSkill('hyym_guihuajiux');
                    }
                    if (target.hasSkill('hyym_hongzaozongzix')) {
                        delete target.storage.hyym_hongzaozongzix;
                        delete target.storage.hyym_hongzaozongzix_markcount;
                        target.removeSkill('hyym_hongzaozongzix');
                    }
                    if (target.hasSkill('hyym_huoliguox')) {
                        delete target.storage.hyym_huoliguox;
                        delete target.storage.hyym_huoliguox_markcount;
                        target.removeSkill('hyym_huoliguox');
                    }
                    if (target.hasSkill('hyym_jidanzongzix')) {
                        delete target.storage.hyym_jidanzongzix;
                        delete target.storage.hyym_jidanzongzix_markcount;
                        target.removeSkill('hyym_jidanzongzix');
                    }
                    if (target.hasSkill('hyym_jindingjiux')) {
                        target.removeMark('hyym_jindingjiux');
                        target.removeSkill('hyym_jindingjiux');
                    }
                    if (target.hasSkill('hyym_longjijiux')) {
                        target.removeMark('hyym_longjijiux');
                        target.removeSkill('hyym_longjijiux');
                    }
                    if (target.hasSkill('hyym_lvdouzongzix')) {
                        delete target.storage.hyym_lvdouzongzix;
                        delete target.storage.hyym_lvdouzongzix_markcount;
                        target.removeSkill('hyym_lvdouzongzix');
                    }
                    if (target.hasSkill('hyym_nverhongx')) {
                        target.removeMark('hyym_nverhongx');
                        target.removeSkill('hyym_nverhongx');
                    }
                    if (target.hasSkill('hyym_qianxingbingganx')) {
                        delete target.storage.hyym_qianxingbingganx;
                        delete target.storage.hyym_qianxingbingganx_markcount;
                        target.removeSkill('hyym_qianxingbingganx');
                    }
                    if (target.hasSkill('hyym_xianrouzongzix')) {
                        target.removeMark('hyym_xianrouzongzix');
                        target.removeSkill('hyym_xianrouzongzix');
                    }
                    if (target.hasSkill('hyym_xianroux')) {
                        target.removeMark('hyym_xianroux');
                        target.removeSkill('hyym_xianroux');
                    }
                    if (target.hasSkill('hyym_xianrouy')) {
                        target.removeMark('hyym_xianrouy');
                        target.removeSkill('hyym_xianrouy');
                    }
                    if (target.hasSkill('hyym_xianrou')) {
                        target.removeMark('hyym_xianrou');
                        target.removeSkill('hyym_xianrou');
                    }
                    if (target.hasSkill('hyym_zhuangyuanhongx')) {
                        target.removeMark('hyym_zhuangyuanhongx');
                        target.removeSkill('hyym_zhuangyuanhongx');
                    }
                    if (target.hasSkill('hyym_beibaokuozhanmokax')) {
                        delete target.storage.hyym_beibaokuozhanmokax;
                        delete target.storage.hyym_moka;
                        delete target.storage.hyym_beibaokuozhanmokax_markcount;
                        delete target.storage.hyym_moka_markcount;
                        target.removeSkill('hyym_beibaokuozhanmokax');
                        target.removeSkill('hyym_beibaokuozhanmokax_use');
                    }
                    if (target.hasSkill('hyym_dilaoshuyanhuax')) {
                        target.removeMark('hyym_dilaoshuyanhuax');
                        target.removeSkill('hyym_dilaoshuyanhuax');
                    }
                    if (target.hasSkill('hyym_dilaoshuyanhuay')) {
                        target.removeMark('hyym_dilaoshuyanhuay');
                        target.removeSkill('hyym_dilaoshuyanhuay');
                    }
                    if (target.hasSkill('hyym_maomaoshendezhufux')) {
                        delete target.storage.hyym_maomaoshendezhufux;
                        delete target.storage.hyym_maomaoshendezhufux_markcount;
                        target.removeSkill('hyym_maomaoshendezhufux');
                    }
                    ('step 2');
                    target.damage(1, 'nocard');
                    if (!player.hasSkill('hyym_lingxiaoshuilanx')) {
                        player.addSkill('hyym_lingxiaoshuilanx');
                        player.markSkill('hyym_lingxiaoshuilanx');
                    }
                    player.storage.lingxiaoshuilanx_markcount += 3;
                    player.storage.hyym_lingxiaoshuilany.push(target);
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    tag: {
                        damage: 1,
                    },
                    result: {
                        target(player, target, skill) {
                            return -5;
                        },
                    },
                },
            },
            hyym_lingxiaoshuilanx: {
                mark: true,
                marktext: '澜',
                trigger: { global: 'roundStart' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    name: '凌霄水澜',
                    content(storage, player) {
                        return player.storage.lingxiaoshuilanx_markcount + `轮内,${get.translation(player.storage.hyym_lingxiaoshuilany)}不可响应你使用的牌`;
                    },
                },
                init(player) {
                    if (!player.storage.lingxiaoshuilanx_markcount) player.storage.lingxiaoshuilanx_markcount = 0;
                    if (!player.storage.hyym_lingxiaoshuilany) player.storage.hyym_lingxiaoshuilany = [];
                },
                content() {
                    player.storage.lingxiaoshuilanx_markcount--;
                    if (player.storage.lingxiaoshuilanx_markcount == 0) {
                        delete player.storage.lingxiaoshuilanx_markcount;
                        delete player.storage.hyym_lingxiaoshuilany;
                        player.removeSkill('hyym_lingxiaoshuilanx');
                    } else {
                    }
                },
                group: 'hyym_lingxiaoshuilanx_1',
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            return (
                                event.card &&
                                game.hasPlayer(function (current) {
                                    return player.storage.hyym_lingxiaoshuilany.includes(current);
                                })
                            );
                        },
                        content() {
                            trigger.directHit.addArray(
                                game.filterPlayer(function (current) {
                                    return player.storage.hyym_lingxiaoshuilany.includes(current);
                                }),
                            );
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                return player.storage.hyym_lingxiaoshuilany.includes(arg.target);
                            },
                        },
                    },
                },
            },
            hyym_liangyishuangfeng: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                filter(event, player) {
                    return event.player != player && event.card;
                },
                logTarget: 'player',
                check(event, player) {
                    return -get.attitude(player, event.player);
                },
                trigger: { target: 'useCardToTargeted' },
                limited: true,
                content() {
                    'step 0';
                    player.awakenSkill('hyym_liangyishuangfeng');
                    trigger.parent.excluded.add(player);
                    ('step 1');
                    if (trigger.player.isIn()) {
                        trigger.player.addTempSkill('hyym_liangyishuangfengx');
                        trigger.player.markSkill('hyym_liangyishuangfengx');
                        trigger.player.storage.hyym_liangyishuangfengx.push(player);
                    }
                    ('step 2');
                    if (trigger.player.isIn()) {
                        player.addTempSkill('hyym_liangyishuangfengy', { player: 'phaseAfter' });
                        player.markSkill('hyym_liangyishuangfengy');
                        player.storage.hyym_liangyishuangfengy.push(trigger.player);
                    }
                },
            },
            hyym_liangyishuangfengx: {
                mark: true,
                marktext: '霜',
                intro: {
                    name: '两仪霜风',
                    content(storage, player) {
                        return `本回合不能使用牌指定${get.translation(player.storage.hyym_liangyishuangfengx)}为目标`;
                    },
                },
                init(player) {
                    if (!player.storage.hyym_liangyishuangfengx) player.storage.hyym_liangyishuangfengx = [];
                },
                mod: {
                    playerEnabled(card, player, target) {
                        if (player.storage.hyym_liangyishuangfengx.includes(target)) return false;
                    },
                },
            },
            hyym_liangyishuangfengy: {
                mark: true,
                marktext: '霜',
                intro: {
                    name: '两仪霜风',
                    content(storage, player) {
                        return `对${get.translation(player.storage.hyym_liangyishuangfengy)}使用牌无次数限制直到${get.translation(player)}下回合结束`;
                    },
                },
                init(player) {
                    if (!player.storage.hyym_liangyishuangfengy) player.storage.hyym_liangyishuangfengy = [];
                },
                mod: {
                    cardUsableTarget(card, player, target) {
                        if (player.storage.hyym_liangyishuangfengy.includes(target)) return true;
                    },
                },
            },
            hyym_duimiaoqilei: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player;
                },
                limited: true,
                selectTarget() {
                    return [1, 1];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_duimiaoqilei');
                    ('step 1');
                    target.damage('thunder', 1, 'nocard');
                    ('step 2');
                    if (!player.hasSkill('hyym_duimiaoqileix')) {
                        player.addSkill('hyym_duimiaoqileix');
                        player.markSkill('hyym_duimiaoqileix');
                        player.storage.duimiaoqilei.push(target);
                    }
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    tag: {
                        damage: 1,
                        thunderDamage: 1,
                        natureDamage: 1,
                    },
                    result: {
                        target(player, target, skill) {
                            return -4;
                        },
                    },
                },
            },
            hyym_duimiaoqileix: {
                mark: true,
                marktext: '淼',
                init(player) {
                    if (!player.storage.duimiaoqilei) player.storage.duimiaoqilei = [];
                },
                intro: {
                    name: '兑淼祇雷',
                    content(storage, player) {
                        return `下轮游戏开始时,视为对${get.translation(player.storage.duimiaoqilei)}使用` + (player.countMark('hyym_duimiao') || 0) + '张【雷杀】';
                    },
                },
                trigger: { player: 'useCard' },
                filter(event, player) {
                    return player.countMark('hyym_duimiao') < 6 && get.tag(event.card, 'damage') > 0.5;
                },
                forced: true,
                silent: true,
                nopop: true,
                forced: true,
                content() {
                    player.addMark('hyym_duimiao');
                    game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_duimiaoqilei1', 'hyym_duimiaoqilei2'].randomGet());
                },
                group: 'hyym_duimiaoqileix_1',
                subSkill: {
                    1: {
                        trigger: { global: 'roundStart' },
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            'step 0';
                            player.removeMark('hyym_duimiaoqileix');
                            player.removeSkill('hyym_duimiaoqileix');
                            if (player.countMark('hyym_duimiao') > 0) event.num = player.countMark('hyym_duimiao');
                            else event.finish();
                            ('step 1');
                            for (var i = 0; i < player.storage.duimiaoqilei.length; i++) {
                                if (player.canUse({ name: 'sha', nature: 'thunder' }, player.storage.duimiaoqilei[i], false, false)) {
                                    player.useCard({ name: 'sha', nature: 'thunder' }, player.storage.duimiaoqilei[i]);
                                    game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_duimiaoqilei1', 'hyym_duimiaoqilei2'].randomGet());
                                }
                            }
                            event.num--;
                            ('step 2');
                            if (event.num > 0) event.goto(1);
                            ('step 3');
                            player.removeMark('hyym_duimiao', player.countMark('hyym_duimiao'));
                            player.storage.duimiaoqilei = [];
                        },
                    },
                },
            },
            hyym_jianbingliuhuo: {
                limited: true,
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return event.source && event.source != undefined && event.source.isIn();
                },
                check(event, player) {
                    return event.source && event.source.isEnemiesOf(player);
                },
                logTarget: 'source',
                preHidden: true,
                content() {
                    player.awakenSkill('hyym_jianbingliuhuo');
                    trigger.source.addSkill('hyym_jianbingliuhuox');
                    trigger.source.markSkill('hyym_jianbingliuhuox');
                    trigger.source.storage.hyym_jianbingliuhuox_markcount = 1;
                },
                ai: {
                    maixie_defend: true,
                },
                group: 'hyym_jianbingliuhuo_1',
                subSkill: {
                    1: {
                        audio: 'hyym_jianbingliuhuo',
                        enable: 'phaseUse',
                        filterTarget(card, player, target) {
                            return target != player;
                        },
                        limited: true,
                        selectTarget() {
                            return [1, 1];
                        },
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            'step 0';
                            player.awakenSkill('hyym_jianbingliuhuo');
                            ('step 1');
                            target.addSkill('hyym_jianbingliuhuoy');
                            target.markSkill('hyym_jianbingliuhuoy');
                            target.storage.hyym_jianbingliuhuoy_markcount += 8;
                        },
                        ai: {
                            order(item, player) {
                                return 10;
                            },
                            result: {
                                target(player, target, skill) {
                                    return -12;
                                },
                            },
                        },
                    },
                },
            },
            hyym_jianbingliuhuox: {
                mark: true,
                marktext: '坚冰',
                trigger: { global: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        return '本回合内不能再造成伤害';
                    },
                },
                content() {
                    player.storage.hyym_jianbingliuhuox_markcount--;
                    if (player.storage.hyym_jianbingliuhuox_markcount == 0) {
                        delete player.storage.hyym_jianbingliuhuox;
                        delete player.storage.hyym_jianbingliuhuox_markcount;
                        player.removeSkill('hyym_jianbingliuhuox');
                    } else {
                    }
                },
                group: 'hyym_jianbingliuhuox_1',
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            game.log(player, '造成的伤害因【坚冰流火】而被防止');
                            trigger.cancel();
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_jianbingliuhuo1', 'hyym_jianbingliuhuo2'].randomGet());
                        },
                        ai: {
                            effect: {
                                player(card, player) {
                                    if (player.hasSkillTag('jueqing')) return;
                                    if (typeof card !== 'string' && get.tag(card, 'damage') > 0.5) return [0, 0, 0, 0];
                                },
                            },
                        },
                    },
                },
            },
            hyym_jianbingliuhuoy: {
                mark: true,
                marktext: '流火',
                trigger: { global: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        return player.storage.hyym_jianbingliuhuoy_markcount + '回合内,每回合首次失去牌后,随机弃置一张牌,且每回合首次造成的伤害-1';
                    },
                },
                content() {
                    player.storage.hyym_jianbingliuhuoy_markcount--;
                    if (player.storage.hyym_jianbingliuhuoy_markcount == 0) {
                        delete player.storage.hyym_jianbingliuhuoy_markcount;
                        player.removeSkill('hyym_jianbingliuhuoy');
                    } else {
                    }
                },
                group: ['hyym_jianbingliuhuoy_1', 'hyym_jianbingliuhuoy_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        filter(event, player) {
                            if (event.name == 'gain' && event.player == player) return false;
                            var evt = event.getl(player);
                            return evt && evt.cards2 && evt.cards2.length;
                        },
                        usable: 1,
                        forced: true,
                        content() {
                            var cards = player.getCards('he', function (card) {
                                return lib.filter.cardDiscardable(card, player, 'hyym_jianbingliuhuoy_1');
                            });
                            if (cards.length) {
                                player.discard(cards.randomGet());
                                game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_jianbingliuhuo1', 'hyym_jianbingliuhuo2'].randomGet());
                            }
                        },
                    },
                    2: {
                        forced: true,
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter(event, player) {
                            return true;
                        },
                        usable: 1,
                        content() {
                            game.log(player, '造成的伤害因【坚冰流火】而-1');
                            trigger.num--;
                            game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_jianbingliuhuo1', 'hyym_jianbingliuhuo2'].randomGet());
                        },
                    },
                },
            },
            hyym_ziweixingyuan: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                multitarget: true,
                multiline: true,
                filterTarget(card, player, target) {
                    return !target.hasSkill('hyym_ziweixingyuanx');
                },
                limited: true,
                selectTarget() {
                    return [1, 3];
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    targets.sortBySeat();
                    ('step 1');
                    player.awakenSkill('hyym_ziweixingyuan');
                    ('step 2');
                    for (var i = 0; i < targets.length; i++) {
                        targets[i].addSkill('hyym_ziweixingyuanx');
                        targets[i].markSkill('hyym_ziweixingyuanx');
                    }
                },
                ai: {
                    order(item, player) {
                        return 10;
                    },
                    result: {
                        target(player, target, skill) {
                            return 2;
                        },
                    },
                },
            },
            hyym_ziweixingyuanx: {
                mark: true,
                marktext: '星',
                intro: {
                    name: '紫微星垣',
                    content(storage, player) {
                        return '下次造成的伤害翻倍';
                    },
                },
                //_priority:0.2,
                onremove(player) {
                    player.removeMark('hyym_ziweixingyuanx');
                },
                forced: true,
                trigger: {
                    source: 'damageBegin1',
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    //game.log(player,'触发了【紫微星垣】');
                    trigger.num = trigger.num * 2;
                    game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_ziweixingyuan1', 'hyym_ziweixingyuan2'].randomGet());
                    player.removeSkill('hyym_ziweixingyuanx');
                },
            },
            hyym_huiguangsuliu: {
                audio: 'ext:桃源幻梦/audio/技能配音/星魂技能:2',
                enable: 'phaseUse',
                limited: true,
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_huiguangsuliu');
                    var skills = player.getSkills(null, false, false).remove('hyym_huiguangsuliu');
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
                    ('step 1');
                    var info = lib.character[player.name];
                    var skills = player.getSkills();
                    var list = [];
                    for (var i = 0; i < info[3].length; i++) {
                        if (skills.includes(info[3][i])) {
                            list.push(info[3][i]);
                        }
                    }
                    player.draw(list.length);
                },
                ai: {
                    order(item, player) {
                        return 0.01;
                    },
                    result: {
                        player(player, target, skill) {
                            var info = lib.character[player.name];
                            var skills = player.getSkills();
                            var list = [];
                            for (var i = 0; i < info[3].length; i++) {
                                if (skills.includes(info[3][i])) {
                                    list.push(info[3][i]);
                                }
                            }
                            return list.length;
                        },
                    },
                },
            },
            hyym_tenglinghuanzhong: {
                trigger: { player: 'phaseUseBegin' },
                filter(event, player) {
                    return player.hasEnabledSlot();
                },
                audio: 'ext:桃源幻梦/audio/技能配音/神华佗:2',
                forced: true,
                _priority: 99,
                content() {
                    'step 0';
                    var list = ['选项一', '选项二', 'cancel2'];
                    player
                        .chooseControl(list)
                        .set('choiceList', ['令自己获得3枚<种子>,并令自己本阶段防止受到的伤害且使用牌不可被响应', '令任意名相邻角色各获得1枚<种子>'])
                        .set('prompt', '是否废除一个装备栏并发动【藤灵唤种】？')
                        .set('ai', function () {
                            let player = _status.event.player;
                            if (!player.storage.tenglinghuanzhong) {
                                if (
                                    game.hasPlayer(function (play) {
                                        var sha = player.getCardUsable({ name: 'sha' });
                                        var num = player.countCards('h', function (card) {
                                            if (card.name == 'sha') {
                                                if (sha == 0) {
                                                    return false;
                                                } else {
                                                    sha--;
                                                }
                                            }
                                            return (get.tag(card, 'damage') > 0.5 || card.name == 'hyym_zhanguilaixi') && player.canUse(card, play) && get.effect(play, card, player, player) > 0;
                                        });
                                        num += player.countCards('h', (card) => (card.name == 'jiu' && player.hasSha()) || (card.name == 'hyym_dilaoshuyanhua' && player.hasSha() && player.hasCard((car) => car != card && get.color(car) == 'black' && !(get.tag(car, 'damage') > 0.5))) || card.name == 'hyym_jindingjiu');
                                        if (player.hasSkill('hyym_hualingruizex')) num++;
                                        return num >= play.hp + play.hujia && get.attitude(player, play) < 0;
                                    })
                                )
                                    return '选项一';
                                else if (game.hasPlayer((play) => (play == player.next || play == player.previous) && ((get.attitude(player, play) < 0 && player.hasCard((card) => player.canUse(card, play) && get.effect(play, card, player, player) > 0, 'h')) || (get.attitude(player, play) > 0 && play.isDamaged()))) || game.filterPlayer((play) => (play == player.next || play == player.previous) && get.attitude(player, play) > 0).length == 2) return '选项二';
                                else return '选项一';
                            } else {
                                if (
                                    game.hasPlayer(function (play) {
                                        var sha = player.getCardUsable({ name: 'sha' });
                                        var num = player.countCards('h', function (card) {
                                            if (card.name == 'sha') {
                                                if (sha == 0) {
                                                    return false;
                                                } else {
                                                    sha--;
                                                }
                                            }
                                            return (get.tag(card, 'damage') > 0.5 || card.name == 'hyym_zhanguilaixi') && player.canUse(card, play) && get.effect(play, card, player, player) > 0;
                                        });
                                        num += player.countCards('h', (card) => (card.name == 'jiu' && player.hasSha()) || (card.name == 'hyym_dilaoshuyanhua' && player.hasSha() && player.hasCard((car) => car != card && get.color(car) == 'black' && !(get.tag(car, 'damage') > 0.5))) || card.name == 'hyym_jindingjiu');
                                        if (player.hasSkill('hyym_hualingruizex')) num++;
                                        return num >= play.hp + play.hujia && get.attitude(player, play) < 0 && !((play == player.next || play == player.previous) && (play.hp + play.hujia == 1 || (play.hp + play.hujia <= 2 && player.hasSkill('hyym_hualingruizex'))));
                                    })
                                )
                                    return '选项一';
                                else if (!(game.filterPlayer((play) => get.attitude(player, play) > 0 && (play == player.next || play == player.previous)).length == 0 && !player.hasCard((card) => (player.canUse(card, player.next) && get.effect(player.next, card, player, player) > 0) || (player.canUse(card, player.previous) && get.effect(player.previous, card, player, player) > 0), 'h'))) return '选项二';
                                else if (player.isDamaged() && !player.hasCard((card) => (card.name == 'tao' || !!get.tag(card, 'huixie')) && player.canUse(card, player), 'h') && player.hasCard((card) => (card.name != 'sha' && get.tag(card, 'damage') > 0.5) || (card.name == 'sha' && get.nature(card)), 'h')) return 'cancel2';
                                else if (player.isDamaged() && player.countCards('h', (card) => player.canUse(card, player)) > 1) return '选项一';
                                else if (player.hasSkill('hyym_shenyuqiongfei')) return '选项一';
                                else return 'cancel2';
                            }
                        });
                    ('step 1');
                    event.control = result.control;
                    if (event.control != 'cancel2') {
                        player.addTempSkill('hyym_tenglinghuanzhongfadong', 'phaseUseAfter');
                        player.chooseToDisable().ai = function (event, player, list) {
                            event.list1 = [];
                            event.list2 = [];
                            for (var i = 0; i < list.length; i++) {
                                event.list1.push(list[i]);
                                event.list2.push(list[i]);
                            }
                            if (player.hasCard(null, 'he')) {
                                for (var i = 1; i < 6; i++) {
                                    if (player.hasCard({ subtype: 'equip' + i }, 'he')) {
                                        list.remove('equip' + i);
                                    }
                                    if (player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                        event.list1.remove('equip' + i);
                                    }
                                }
                            }
                            if (!!list.length) return list.randomGet();
                            else if (!!event.list1.length) return event.list1.randomGet();
                            else return event.list2.randomGet();
                        };
                    } else event.finish();
                    ('step 2');
                    if (event.control == '选项一') {
                        if (!player.hasSkill('hyym_tenglinghuanzhongx')) player.addSkill('hyym_tenglinghuanzhongx');
                        player.markSkill('hyym_tenglinghuanzhongx');
                        player.addMark('hyym_tenglinghuanzhongx', 3);
                        player.addTempSkill('hyym_tenglinghuanzhongy', 'phaseUseAfter');
                        player.markSkill('hyym_tenglinghuanzhongy');
                        event.finish();
                    } else if (event.control == '选项二') {
                        if (player.next && player.previous && player.next == player.previous) {
                            if (!player.next.hasSkill('hyym_tenglinghuanzhongx')) player.next.addSkill('hyym_tenglinghuanzhongx');
                            player.next.markSkill('hyym_tenglinghuanzhongx');
                            player.next.addMark('hyym_tenglinghuanzhongx', 1);
                            event.finish();
                        } else
                            player
                                .chooseTarget(true, '令任意名相邻角色各获得1枚种子', [1, 2], function (card, player, target) {
                                    return target == player.next || target == player.previous;
                                })
                                .set('ai', function (target) {
                                    let player = _status.event.player;
                                    if (get.attitude(player, target) > 0) {
                                        if (!player.storage.tenglinghuanzhong || !player.isDamaged()) return 2;
                                        else if (game.filterPlayer((play) => (play == player.next || play == player.previous) && get.attitude(player, play) > 0).length == 1) return 2;
                                        else if (game.filterPlayer((play) => (play == player.next || play == player.previous) && get.attitude(player, play) > 0).length == 2) {
                                            if (game.filterPlayer((play) => (play == player.next || play == player.previous) && get.attitude(player, play) > 0 && !play.isDamaged()).length == 2) return 2;
                                            else if (game.filterPlayer((play) => (play == player.next || play == player.previous) && get.attitude(player, play) > 0 && !play.isDamaged()).length == 1) {
                                                if (target.isDamaged()) return 2;
                                                else return 0;
                                            } else if (ui.selected.targets.length == 1) return 0;
                                            else {
                                                let tar = game.filterPlayer((play) => (play == player.next || play == player.previous) && play != target)[0];
                                                if (target.hp < tar.hp || (target.hp == tar.hp && target.countCards('h') <= tar.countCards('h'))) return 2;
                                                else return 0;
                                            }
                                        }
                                    } else {
                                        if (player.hasCard((card) => player.canUse(card, target) && get.effect(target, card, player, player) > 0, 'hs') && game.filterPlayer((play) => (play == player.next || play == player.previous) && get.attitude(player, play) < 0).length == 1) return 2;
                                        else if (game.filterPlayer((play) => (play == player.next || play == player.previous) && get.attitude(player, play) < 0).length == 2) {
                                            let tar = game.filterPlayer((play) => (play == player.next || play == player.previous) && play != target)[0];
                                            if (
                                                player.hasCard(function (card) {
                                                    let info = lib.card[card.name];
                                                    let kk;
                                                    if (Array.isArray(info.selectTarget)) {
                                                        if (info.selectTarget[0] < 0) kk = Infinity;
                                                        else kk = info.selectTarget[1];
                                                    } else {
                                                        if (info.selectTarget < 0) kk = Infinity;
                                                        else kk = info.selectTarget;
                                                    }
                                                    return player.canUse(card, target) && get.effect(target, card, player, player) > 0 && (player.hasCard((car) => player.canUse(car, tar) && get.effect(tar, car, player, player) > 0 && car != card, 'hs') || ((kk == Infinity || kk >= 2) && player.canUse(card, tar) && get.effect(tar, card, player, player) > 0));
                                                }, 'hs')
                                            )
                                                return 2;
                                            else {
                                                if (ui.selected.targets.length == 1) return 0;
                                                else if (target.hp <= tar.hp && player.hasCard((card) => player.canUse(card, target), 'hs')) return 2;
                                                else return 0;
                                            }
                                        } else return 0;
                                    }
                                });
                    } else event.finish();
                    ('step 3');
                    if (result.targets?.length) {
                        event.target = result.targets.sortBySeat();
                    } else event.finish();
                    ('step 4');
                    for (var i = 0; i < event.target.length; i++) {
                        if (!event.target[i].hasSkill('hyym_tenglinghuanzhongx')) event.target[i].addSkill('hyym_tenglinghuanzhongx');
                        event.target[i].markSkill('hyym_tenglinghuanzhongx');
                        event.target[i].addMark('hyym_tenglinghuanzhongx', 1);
                    }
                },
                group: ['hyym_tenglinghuanzhong_1', 'hyym_tenglinghuanzhong_2', 'hyym_tenglinghuanzhong_3', 'hyym_tenglinghuanzhong_4'],
                subSkill: {
                    1: {
                        forced: true,
                        audio: 'hyym_tenglinghuanzhong',
                        trigger: { player: 'phaseEnd' },
                        filter(event, player) {
                            return player.hasSkill('hyym_tenglinghuanzhongx');
                        },
                        content() {
                            player.removeMark('hyym_tenglinghuanzhongx', player.countMark('hyym_tenglinghuanzhongx'));
                            player.removeMark('hyym_tenglinghuanzhongx');
                            player.removeSkill('hyym_tenglinghuanzhongx');
                        },
                        sub: true,
                    },
                    2: {
                        trigger: { player: 'useCardToPlayer' },
                        audio: 'hyym_tenglinghuanzhong',
                        filter(event, player) {
                            return event.target.hasSkill('hyym_tenglinghuanzhongx');
                        },
                        check(event, player) {
                            if (get.attitude(player, event.target) < 0) return true;
                            else if (event.target == player) {
                                let kk = 0;
                                if (event.card.name == 'tao' || !!get.tag(event.card, 'huixie')) kk++;
                                if (player.hasCard((card) => (card.name == 'tao' || !!get.tag(card, 'huixie')) && player.canUse(card, player), 'hs')) kk++;
                                if (player.isDamaged() && player.maxHp - player.hp > kk) {
                                    if (player.countMark('hyym_tenglinghuanzhongx') == 3) return true;
                                    else if (player.countMark('hyym_tenglinghuanzhongx') == 4 && player.hasCard((card) => player.canUse(card, player), 'hs')) return true;
                                    else return false;
                                } else if (!player.isDamaged() && game.filterPlayer((play) => play != player && get.attitude(player, play) > 0 && play.hasSkill('hym_tenglinghuanzhongx') && play.isDamaged()).length > 1) return true;
                                else return false;
                            } else return false;
                        },
                        prompt2(event, player) {
                            return `移除${get.translation(event.target)}1枚<种子>并对其造成1点伤害`;
                        },
                        content() {
                            'step 0';
                            trigger.target.removeMark('hyym_tenglinghuanzhongx', 1);
                            if (trigger.target.countMark('hyym_tenglinghuanzhongx') == 0) {
                                trigger.target.removeMark('hyym_tenglinghuanzhongx');
                                trigger.target.removeSkill('hyym_tenglinghuanzhongx');
                            }
                            ('step 1');
                            trigger.target.damage();
                        },
                        ai: {
                            effect: {
                                player(card, player, target) {
                                    if (!target || typeof card === 'string') return;
                                    else if (get.attitude(player, target) < 0 && target.hasSkill('hyym_tenglinghuanzhongx')) {
                                        if (!player.hasCard((car) => car != card && player.canUse(car, target))) return [1, 99];
                                        else return [1, 2];
                                    } else if (get.attitude(player, target) < 0 && !target.hasSkill('hyym_tenglinghuanzhongx') && game.hasPlayer((play) => play != target && play.hasSkill('hyym_tenglinghuanzhongx') && get.attitude(player, play) < 0 && player.canUse(card, play) && !player.hasCard((car) => car.cardid != card.cardid && player.canUse(car, play), 'hs'))) return [1, -10];
                                    else if (target == player && player.hasSkill('hyym_tenglinghuanzhongx') && player.isDamaged()) {
                                        let kk = 0;
                                        if (card.name == 'tao' || !!get.tag(card, 'huixie')) kk++;
                                        if (player.hasCard((car) => car.cardid != card.cardid && (car.name == 'tao' || !!get.tag(car, 'huixie')) && player.canUse(car, player), 'hs')) kk++;
                                        if (player.maxHp - player.hp > kk) {
                                            if (player.countMark('hyym_tenglinghuanzhongx') == 3) return [1, 3];
                                            else if (player.countMark('hyym_tenglinghuanzhongx') == 4 && player.hasCard((card) => player.canUse(card, player), 'hs')) return [1, 3];
                                            else return;
                                        } else if (player.maxHp - player.hp == 1 && (card.name == 'tao' || !!get.tag(card, 'huixie')) && player.countMark('hyym_tenglinghuanzhongx') < 3) return [0, -3];
                                        else return;
                                    }
                                },
                            },
                        },
                        sub: true,
                    },
                    3: {
                        trigger: { player: 'hyym_tenglinghuanzhongAfter' },
                        //audio:'hyym_tenglinghuanzhong',
                        filter(event, player) {
                            return player.storage.tenglinghuanzhong && player.hasSkill('hyym_tenglinghuanzhongfadong');
                        },
                        forced: true,
                        content() {
                            if (!player.hasSkill('hyym_tenglinghuanzhongx')) player.addSkill('hyym_tenglinghuanzhongx');
                            player.markSkill('hyym_tenglinghuanzhongx');
                            player.addMark('hyym_tenglinghuanzhongx', 1);
                            //player.draw()
                        },
                        sub: true,
                    },
                    4: {
                        trigger: { player: 'useCard' },
                        audio: 'hyym_tenglinghuanzhong',
                        filter(event, player) {
                            return player.storage.tenglinghuanzhong && !player.hasSkill('hyym_tenglinghuanzhongx') && ((event.card.name != 'sha' && get.tag(event.card, 'damage') > 0.5) || (event.card.name == 'sha' && get.nature(event.card)));
                        },
                        forced: true,
                        content() {
                            player.addSkill('hyym_tenglinghuanzhongx');
                            player.markSkill('hyym_tenglinghuanzhongx');
                            player.addMark('hyym_tenglinghuanzhongx', 1);
                            //player.draw()
                        },
                        ai: {
                            effect: {
                                player(card, player) {
                                    if (typeof card !== 'string' && player.storage.tenglinghuanzhong && !player.hasSkill('hyym_tenglinghuanzhongx') && ((card.name != 'sha' && get.tag(card, 'damage') > 0.5) || (card.name == 'sha' && get.nature(card)))) {
                                        if (player.isDamaged()) return [1, 3];
                                        else return [1, 1];
                                    }
                                },
                            },
                        },
                        sub: true,
                    },
                },
            },
            hyym_tenglinghuanzhongfadong: {},
            hyym_tenglinghuanzhongx: {
                mark: true,
                marktext: '种子',
                intro: {
                    name: '种子',
                    markcount(storage, player) {
                        return player.countMark('hyym_tenglinghuanzhongx');
                    },
                    content(storage, player) {
                        return '共有' + player.countMark('hyym_tenglinghuanzhongx') + '枚种子';
                    },
                },
            },
            hyym_tenglinghuanzhongy: {
                mark: true,
                marktext: '藤',
                intro: {
                    name: '藤灵唤种',
                    content(storage, player) {
                        return '本阶段防止受到的伤害且使用牌不可被响应';
                    },
                },
                _priority: 99,
                trigger: { player: 'damageBegin4' },
                forced: true,
                filter(event, player) {
                    return true;
                },
                content() {
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage') > 0.5) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                else return [0, 0];
                            }
                        },
                    },
                },
                group: 'hyym_tenglinghuanzhongy_1',
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            trigger.directHit.addArray(game.filterPlayer());
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                return true;
                            },
                        },
                    },
                },
            },
            hyym_hualingruize: {
                trigger: { player: 'phaseDiscardBegin' },
                filter(event, player) {
                    return game.hasPlayer((play) => play.hasSkill('hyym_tenglinghuanzhongx'));
                },
                audio: 'ext:桃源幻梦/audio/技能配音/神华佗:2',
                prompt2(event, player) {
                    var kk = 0;
                    game.filterPlayer(function (target) {
                        if (!target.hasSkill('hyym_tenglinghuanzhongx')) return;
                        kk += target.countMark('hyym_tenglinghuanzhongx');
                    });
                    var pp = game.filterPlayer((play) => play.hasSkill('hyym_tenglinghuanzhongx')).sortBySeat();
                    if (kk < 3) return `令${get.translation(pp)}移除所有<种子>,回复1点体力并摸一张牌`;
                    if (kk == 3) return `令${get.translation(pp)}移除所有<种子>且下一次对其他角色造成的伤害+1,直到其下个出牌阶段结束`;
                    if (kk > 3) return `令${get.translation(pp)}移除所有<种子>且下两次对其他角色造成的伤害+1,直到其下个出牌阶段结束`;
                },
                check(event, player) {
                    return true;
                    //return game.filterPlayer(play=>play.hasSkill('hyym_tenglinghuanzhongx')&&get.attitude(player,play)>0).length>game.filterPlayer(play=>play.hasSkill('hyym_tenglinghuanzhongx')&&get.attitude(player,play)<=0).length
                },
                content() {
                    'step 0';
                    event.kk = 0;
                    game.filterPlayer(function (target) {
                        if (!target.hasSkill('hyym_tenglinghuanzhongx')) return;
                        event.kk += target.countMark('hyym_tenglinghuanzhongx');
                    });
                    event.pp = game.filterPlayer((play) => play.hasSkill('hyym_tenglinghuanzhongx')).sortBySeat();
                    for (var i = 0; i < event.pp.length; i++) {
                        event.pp[i].removeMark('hyym_tenglinghuanzhongx', event.pp[i].countMark('hyym_tenglinghuanzhongx'));
                        event.pp[i].removeMark('hyym_tenglinghuanzhongx');
                        event.pp[i].removeSkill('hyym_tenglinghuanzhongx');
                    }
                    ('step 1');
                    if (event.kk < 3) {
                        for (var i = 0; i < event.pp.length; i++) {
                            event.pp[i].recover();
                            event.pp[i].draw();
                        }
                    }
                    if (event.kk == 3) {
                        for (var i = 0; i < event.pp.length; i++) {
                            event.pp[i].addTempSkill('hyym_hualingruizex', { player: 'phaseUseAfter' });
                            event.pp[i].markSkill('hyym_hualingruizex');
                            if (!event.pp[i].storage.hyym_hualingruizex) event.pp[i].storage.hyym_hualingruizex = 0;
                            event.pp[i].storage.hyym_hualingruizex++;
                        }
                    }
                    if (event.kk > 3) {
                        for (var i = 0; i < event.pp.length; i++) {
                            event.pp[i].addTempSkill('hyym_hualingruizex', { player: 'phaseUseAfter' });
                            event.pp[i].markSkill('hyym_hualingruizex');
                            if (!event.pp[i].storage.hyym_hualingruizex) event.pp[i].storage.hyym_hualingruizex = 0;
                            event.pp[i].storage.hyym_hualingruizex += 2;
                        }
                    }
                },
            },
            hyym_hualingruizex: {
                mark: true,
                marktext: '泽',
                intro: {
                    name: '华灵瑞泽',
                    markcount(storage, player) {
                        return player.storage.hyym_hualingruizex;
                    },
                    content(storage, player) {
                        return `直到${get.translation(player)}下个出牌阶段结束,${get.translation(player)}的下${player.storage.hyym_hualingruizex}次对其他角色造成的伤害+1`;
                    },
                },
                onremove(player) {
                    player.storage.hyym_hualingruizex = 0;
                    player.removeMark('hyym_hualingruizex');
                },
                forced: true,
                trigger: {
                    source: 'damageBegin1',
                },
                filter(event, player) {
                    return event.player != player;
                },
                content() {
                    game.log(player, '触发了【华灵瑞泽】');
                    trigger.num++;
                    player.storage.hyym_hualingruizex--;
                    if (player.storage.hyym_hualingruizex == 0) player.removeSkill('hyym_hualingruizex');
                },
            },
            hyym_lingyunhuisheng: {
                derivation: 'hyym_shenyuqiongfei',
                juexingji: true,
                audio: 'ext:桃源幻梦/audio/技能配音/神华佗:1',
                trigger: {
                    player: [/* 'damageEnd','loseHpEnd' */ 'changeHp', 'disableEquipAfter'],
                },
                forced: true,
                filter(event, player) {
                    return !player.storage.tenglinghuanzhong && (event.name == 'disableEquip' ? !player.hasEnabledSlot() : player.hp <= 2);
                },
                content() {
                    'step 0';
                    player.awakenSkill('hyym_lingyunhuisheng');
                    player.loseMaxHp();
                    event.kk = player.countDisabledSlot();
                    ('step 1');
                    player.enableEquip(['equip1', 'equip2', 'equip3', 'equip4', 'equip5']);
                    ('step 2');
                    player.recover(event.kk);
                    //player.draw(event.kk);
                    ('step 3');
                    player.storage.tenglinghuanzhong = true;
                    player.addSkill('hyym_shenyuqiongfei');
                },
                ai: { threaten: 3 },
            },
            hyym_shenyuqiongfei: {
                audio: 'ext:桃源幻梦/audio/技能配音/神华佗:1',
                limited: true,
                trigger: { player: 'phaseUseEnd' },
                filter(event, player) {
                    return game.hasPlayer((play) => play.hasSkill('hyym_tenglinghuanzhongx'));
                },
                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget([1, game.filterPlayer((play) => play.hasSkill('hyym_tenglinghuanzhongx')).length], '是否发动【神宇琼扉】？', '令任意名有<种子>的角色获得不死仙方', false, function (card, player, target) {
                            return target.hasSkill('hyym_tenglinghuanzhongx');
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return get.attitude(player, target) > 0;
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        player.awakenSkill('hyym_shenyuqiongfei');
                        event.target = result.targets.sortBySeat();
                    } else event.finish();
                    ('step 2');
                    for (var i = 0; i < event.target.length; i++) {
                        event.target[i].enableEquip(['equip1', 'equip2', 'equip3', 'equip4', 'equip5']);
                        event.target[i].addSkill('hyym_shenyuqiongfeix');
                        event.target[i].markSkill('hyym_shenyuqiongfeix');
                    }
                },
            },
            hyym_shenyuqiongfeix: {
                trigger: { player: 'dieBefore' },
                forced: true,
                mark: true,
                marktext: '仙方',
                intro: {
                    name: '神宇琼扉',
                    content(storage, player) {
                        return '下次死亡时,获得一张【复活币】且当回合不会再受到任何伤害';
                    },
                },
                _priority: 99,
                filter(event, player) {
                    return true;
                },
                audio: 'hyym_shenyuqiongfei',
                content() {
                    player.gain(game.createCard2('hyym_fuhuobi', lib.suit.randomGet(), Math.floor(Math.random() * 13) + 1), 'gain2');
                    player.addTempSkill('hyym_shenyuqiongfeiy');
                    player.markSkill('hyym_shenyuqiongfeiy');
                    player.removeMark('hyym_shenyuqiongfeix');
                    player.removeSkill('hyym_shenyuqiongfeix');
                },
            },
            hyym_shenyuqiongfeiy: {
                mark: true,
                marktext: '仙方',
                intro: {
                    name: '神宇琼扉',
                    content(storage, player) {
                        return '免疫所有伤害,直到当前回合结束';
                    },
                },
                _priority: 99,
                trigger: { player: 'damageBegin4' },
                forced: true,
                filter(event, player) {
                    return true;
                },
                content() {
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                else return [0, 0];
                            }
                        },
                    },
                },
            },
            hyym_suiren: {
                mark: true,
                marktext: '岁',
                init(player) {
                    if (!player.storage.hyym_suiren) player.storage.hyym_suiren = [];
                },
                intro: {
                    name: '岁稔',
                    content(storage, player) {
                        return `本阶段已用字数为${get.translation(player.storage.hyym_suiren)}的牌印过【五谷丰登】`;
                    },
                },
                audio: 'ext:桃源幻梦/audio/技能配音/玉树芝兰·张昭:2',
                filter(event, player) {
                    return true;
                },
                enable: 'phaseUse',
                viewAs: { name: 'wugu' },
                viewAsFilter(player) {
                    return player.hasCard((card) => !player.storage.hyym_suiren.includes(get.cardNameLength(card)), 'he');
                },
                selectCard() {
                    return 1;
                },
                selectTarget() {
                    if (!ui.selected.cards.length) return 0;
                    var card = get.card(),
                        player = get.player();
                    if (card == undefined) return;
                    var range = [1, Math.max(1, get.cardNameLength(ui.selected.cards[0]))];
                    game.checkMod(card, player, range, 'selectTarget', player);
                    return range;
                },
                filterCard(card) {
                    return !_status.event.player.storage.hyym_suiren.includes(get.cardNameLength(card));
                },
                filterOk() {
                    if (!ui.selected.targets.length) return false;
                    var card = get.card(),
                        player = get.player();
                    if (card == undefined) return;
                    var range = [1, get.cardNameLength(ui.selected.cards[0])];
                    game.checkMod(card, player, range, 'selectTarget', player);
                    if ((range[0] <= get.cardNameLength(ui.selected.cards[0]) && range[1] >= get.cardNameLength(ui.selected.cards[0])) || range[0] == -1) return true;
                    return false;
                },
                check(card) {
                    var player = _status.event.player,
                        card = { name: 'wugu' };
                    return 7 - get.value(card);
                },
                position: 'he',
                onuse(links, player) {
                    player.addTempSkill('hyym_suiren_effect', 'phaseUseAfter');
                },
                ai: {
                    order: 0.29,
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (game.hasPlayer((play) => player.canUse(card, play, true, true) && get.effect(play, card, player, player) > 0 && play.hp == get.cardNameLength(card)) && card.name != 'wugu') return num + 20;
                    },
                },
                group: 'hyym_suiren_1',
                subSkill: {
                    1: {
                        forced: true,
                        nopop: true,
                        silent: true,
                        trigger: { global: 'phaseUseAfter' },
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            player.storage.hyym_suiren = [];
                        },
                    },
                    effect: {
                        trigger: { player: 'useCard' },
                        forced: true,
                        charlotte: true,
                        nopop: true,
                        silent: true,
                        filter(event, player) {
                            return event.skill == 'hyym_suiren';
                        },
                        content() {
                            player.storage.hyym_suiren.push(get.cardNameLength(trigger.card.cards[0]));
                        },
                    },
                },
            },
            hyym_jianlan: {
                mark: true,
                marktext: '剑',
                init(player) {
                    if (!player.storage.hyym_suiren) player.storage.hyym_jianlan = [];
                },
                intro: {
                    name: '剑兰',
                    content(storage, player) {
                        return `本回合已因${get.translation(player.storage.hyym_jianlan)}发动过此技能`;
                    },
                },
                audio: 'ext:桃源幻梦/audio/技能配音/玉树芝兰·张昭:2',
                trigger: { player: 'useCard' },
                filter(event, player) {
                    if (!event.targets) return false;
                    var kk = false;
                    for (var i = 0; i < event.targets.length; i++) {
                        if (event.targets[i].hp == get.cardNameLength(event.card)) kk = true;
                    }
                    return kk && !player.storage.hyym_jianlan.includes(event.card.name);
                },
                forced: true,
                content() {
                    player.draw();
                    player.storage.hyym_jianlan.push(trigger.card.name);
                },
                ai: {
                    effect: {
                        player(card, player, target) {
                            if (!target || typeof card === 'string') return;
                            else if (target.hp == get.cardNameLength(card) && !player.storage.hyym_jianlan.includes(card.name)) return [1, 0.5];
                        },
                    },
                },
                group: 'hyym_jianlan_1',
                subSkill: {
                    1: {
                        forced: true,
                        nopop: true,
                        silent: true,
                        trigger: { global: 'phaseBefore' },
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            player.storage.hyym_jianlan = [];
                        },
                    },
                },
            },
            hyym_xinao: {
                audio: 'ext:桃源幻梦/audio/技能配音/幽灵公主·小乔:2',
                trigger: { player: 'damageEnd', source: 'damageSource' },
                filter(event, player) {
                    if (event._notrigger.includes(event.player)) return false;
                    return event.num && player.countCards('he') > 0;
                },
                check(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    ('step 1');
                    player.judge();
                    ('step 2');
                    if (player.countCards('he') > 0) {
                        player.chooseCard('he', false, [1, Math.min(player.countCards('he'), get.cardNameLength(result.card))], '你可重铸至多' + Math.min(player.countCards('he'), get.cardNameLength(result.card)) + '张牌').set('ai', function (card) {
                            if (player.isPhaseUsing()) {
                                if (get.tag(card, 'damage') > 0.5) {
                                    if (card.name != 'sha') return 0;
                                    else if (
                                        player.countCards('hs', function (card) {
                                            return game.hasPlayer((play) => player.canUse(card, play, true, true) && get.effect(play, card, player, player) > 0) && card.name == 'sha';
                                        }) -
                                        player.countCards('hs', function (card) {
                                            return game.hasPlayer((play) => player.canUse(card, play, true, true) && get.effect(play, card, player, player) > 0) && card.name == 'sha' && ui.selected.cards.includes(card);
                                        }) <=
                                        player.getCardUsable('sha')
                                    )
                                        return 0;
                                    else return 99;
                                } else if (['zhuge', 'hyym_biyingtudulongka', 'hyym_zhengzhan'].includes(card.name)) return 0;
                                else if (card.name == 'tao' && player.hp == 1) return 0;
                                else if (!['hyym_chujineiliiyao', 'hyym_erjineiliyao', 'hyym_sanjineiliyao', 'hyym_jingshenbinggan', 'hyym_youlingneilitang', 'hyym_tanghulubaozhu', 'wuzhong'].includes(card.name)) return 99 - get.value(card);
                                else return 0;
                            }
                            return 6 - get.value(card);
                        });
                    }
                    ('step 3');
                    if (result.bool && result.cards) {
                        player.recast(result.cards);
                    }
                    event.num--;
                    if (event.num > 0 && player.countCards('he') > 0) {
                        player.chooseBool(get.prompt2('hyym_xinao')).set('ai', () => true);
                    } else event.finish();
                    ('step 4');
                    if (result.bool) {
                        event.goto(1);
                    }
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                    effect: {
                        player(card, player, target) {
                            if (!target || typeof card === 'string') return;
                            else if (get.tag(card, 'damage') > 0.5) return [1, 0.5];
                        },
                    },
                },
            },
            hyym_xifa: {
                audio: 'ext:桃源幻梦/audio/技能配音/幽灵公主·小乔:2',
                trigger: { global: 'judge' },
                filter(event, player) {
                    return player.countCards('he') > 0;
                },
                check(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    if (get.config('touzidonghua')) {
                        event.kk = [1, 2, 3, 4, 5, 6].randomGet();
                    } else player.throwDice();
                    ('step 1');
                    if (!get.config('touzidonghua')) event.kk = event.num;
                    player
                        .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + `,可用一张字数不大于${event.kk}的牌替换之(字数为${event.kk}时你摸一张牌)`, 'he', function (card) {
                            if (get.cardNameLength(card) > event.kk) return false;
                            var player = _status.event.player;
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                            if (mod != 'unchanged') return mod;
                            return true;
                        })
                        .set('ai', function (card) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            var judging = _status.event.judging;
                            var result = trigger.judge(card) - trigger.judge(judging);
                            var attitude = get.attitude(player, trigger.player);
                            if (attitude == 0 || result == 0) {
                                if (event.kk == get.cardNameLength(card) || get.value(card) < get.value(judging)) {
                                    if (player.isPhaseUsing()) {
                                        if (get.tag(card, 'damage') > 0.5) {
                                            if (card.name != 'sha') return 0.1;
                                            else if (
                                                player.countCards('hs', function (card) {
                                                    return game.hasPlayer((play) => player.canUse(card, play, true, true) && get.effect(play, card, player, player) > 0) && card.name == 'sha';
                                                }) -
                                                player.countCards('hs', function (card) {
                                                    return game.hasPlayer((play) => player.canUse(card, play, true, true) && get.effect(play, card, player, player) > 0) && card.name == 'sha' && ui.selected.cards.includes(card);
                                                }) <=
                                                player.getCardUsable('sha')
                                            )
                                                return 0.1;
                                            else return 99;
                                        } else if (['zhuge', 'hyym_biyingtudulongka', 'hyym_zhengzhan'].includes(card.name)) return 0.1;
                                        else if (!['hyym_chujineiliiyao', 'hyym_erjineiliyao', 'hyym_sanjineiliyao', 'hyym_jingshenbinggan', 'hyym_youlingneilitang', 'hyym_tanghulubaozhu', 'wuzhong'].includes(card.name)) return 99 - get.value(card);
                                        else return 0;
                                    } else return 99 - get.value(card);
                                } else return 0;
                            }
                            if (attitude > 0) {
                                return result;
                            } else {
                                return -result;
                            }
                        })
                        .set('judging', trigger.player.judging[0]);
                    ('step 2');
                    if (result.bool) {
                        player.respond(result.cards, 'highlight', 'noOrdering');
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (result.bool) {
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        var card = result.cards[0];
                        if (get.cardNameLength(card) == event.kk) player.draw('nodelay');
                        trigger.player.judging[0] = result.cards[0];
                        trigger.orderingCards.addArray(result.cards);
                        game.log(trigger.player, '的判定牌改为', result.cards[0]);
                    }
                    ('step 4');
                },
                ai: {
                    rejudge: true,
                    tag: {
                        rejudge: 1,
                    },
                },
            },
        },
        translate: {
            cloud_Gphone: 'G-phone',
            caoanghyym: '曹昂',
            caojiehyym: '曹节',
            caishenhyym: '财神',
            taishicihyym: '太史慈',
            suncehyym: '孙策',
            liushanhyym: '刘禅',
            moguanfenghyym: '魔关凤',
            bulianshihyym: '步练师',
            caiwenjihyym: '蔡文姬',
            caopihyym: '曹丕',
            caocaohyym: '曹操',
            caozhihyym: '曹植',
            caorenhyym: '曹仁',
            caocaomahyym: '草草马',
            chengonghyym: '陈宫',
            chengpuhyym: '程普',
            daqiaohyym: '大乔',
            diaochanhyym: '貂蝉',
            dongzhuohyym: '董卓',
            fazhenghyym: '法正',
            fubaohyym: '福宝',
            guanfenghyym: '关凤',
            guanxinghyym: '关兴',
            guanpinghyym: '关平',
            guanyuhyym: '关羽',
            guohuaihyym: '郭淮',
            guonvwanghyym: '郭女王',
            handanghyym: '韩当',
            huamanhyym: '花鬘',
            huanglinghyym: '黄龄',
            huatuohyym: '华佗',
            huaxionghyym: '华雄',
            huanggaihyym: '黄盖',
            huangyueyinghyym: '黄月英',
            huangzhonghyym: '黄忠',
            huodouhyym: '祸斗',
            jiangweihyym: '姜维',
            jinmachaohyym: '锦马超',
            yuejinhyym: '乐进',
            lingjvhyym: '灵雎',
            liubeihyym: '刘备',
            liuxiehyym: '刘协',
            lusuhyym: '鲁肃',
            luxunhyym: '陆逊',
            lvlingqihyym: '吕玲绮',
            mayunluhyym: '马云禄',
            menghuohyym: '孟获',
            mocaocaohyym: '魔曹操',
            mozhangjiaohyym: '魔张角',
            moyanlianghyym: '魔颜良',
            nanhuaxianrenhyym: '南华仙人',
            pangdehyym: '庞德',
            pangtonghyym: '庞统',
            shenhuatuohyym: '神华佗',
            shenzhaoyunhyym: '神赵云',
            shenzhouyuhyym: '神周瑜',
            sunjianhyym: '孙坚',
            sunquanhyym: '孙权',
            sunruhyym: '孙茹',
            sunshangxianghyym: '孙尚香',
            wangyihyym: '王异',
            weiyanhyym: '魏延',
            wenchouhyym: '文丑',
            xixingcaihyym: '囍星彩',
            xiahoudunhyym: '夏侯惇',
            xiahouyuanhyym: '夏侯渊',
            xiaoqiaohyym: '小乔',
            xingcaihyym: '星彩',
            xiuluomachaohyym: '修罗马超',
            xvhuanghyym: '徐晃',
            xvshenghyym: '徐盛',
            xunyuhyym: '荀彧',
            yanlianghyym: '颜良',
            yangxiuhyym: '杨修',
            yaolvlingqihyym: '夭吕玲绮',
            yujihyym: '于吉',
            yuanshaohyym: '袁绍',
            zhanshenmachaohyym: '战神马超',
            zhangbaozihyym: '张苞',
            zhangbaohyym: '张宝',
            zhangjiaohyym: '张角',
            zhangfeihyym: '张飞',
            zhanghehyym: '张郃',
            zhanglianghyym: '张梁',
            zhangliaohyym: '张辽',
            zhangxiuhyym: '张绣',
            zhangzhaohyym: '张昭',
            zhouyuhyym: '周瑜',
            zhaoyunhyym: '赵云',
            zhenfuhyym: '甄宓',
            zhoutaihyym: '周泰',
            zhugelianghyym: '诸葛亮',
            zhugekehyym: '诸葛恪',
            zhuronghyym: '祝融',
            guonvwangyujianhyym: '郭女王·御',
            tiangouhyym: '天狗',
            cloud_shenbing: '神兵',
            zhugekeshenbing: '神兵·诸葛恪',
            wangyishenbing: '神兵·王异',
            luxunshenbing: '神兵·陆逊',
            yuejinshenbing: '神兵·乐进',
            chengongshenbing: '神兵·陈宫',
            xvshengshenbing: '神兵·徐盛',
            sunshangxiangshenbing: '神兵·孙尚香',
            sunceshenbing: '神兵·孙策',
            zhangzhaoshenbing: '神兵·张昭',
            cloud_pifu: '皮肤',
            lingjvpifu: '暗夜舞姬·灵雎',
            zhurongpifu: '部落夫人·祝融',
            huangzhongpifu: '后将军·黄忠',
            sunrupifu: '花好月圆·孙茹',
            caiwenjipifu: '青羽霓裳·蔡文姬',
            diaochanpifu: '善气迎人·貂蝉',
            xiaoqiaopifu: '盛夏海滩·小乔',
            zhangbaopifu: '童年时光·张宝',
            daqiaopifu: '泳池派对·大乔',
            zhugeliangpifu: '浴火重生·诸葛亮',
            nanhuaxianrenpifu: '悬圃堂主·南华仙人',
            liuxiepifu: '昔为天子·刘协',
            caojiepifu: '昔为雎鸣·曹节',
            zhangzhaoyushuzhilan: '张昭',
            cloud_taoyuancun: '桃源村',
            tianmingxiaowujiangnan: '天命小武将·男',
            tianmingxiaowujiangnv: '天命小武将·女',
            nanyouling: '男幽灵',
            nvyouling: '女幽灵',
            shenmishangrenhyym: '神秘商人',
            chunmaomaohyym: '纯猫猫',
            cloud_zhangui: '战鬼',
            bulianshizhangui: '战鬼·步练师',
            caopizhangui: '战鬼·曹丕',
            guanfengzhangui: '战鬼·关凤',
            guanpingzhangui: '战鬼·关平',
            handangzhangui: '战鬼·韩当',
            huaxiongzhangui: '战鬼·华雄',
            lvlingqizhangui: '战鬼·吕玲绮',
            menghuozhangui: '战鬼·孟获',
            pangdezhangui: '战鬼·庞德',
            weiyanzhangui: '战鬼·魏延',
            xiahoudunzhangui: '战鬼·夏侯惇',
            yanliangzhangui: '战鬼·颜良',
            zhangbaozizhangui: '战鬼·张苞',
            zhangjiaozhangui: '战鬼·张角',
            zhenfuzhangui: '战鬼·甄宓',
            zhurongzhangui: '战鬼·祝融',
            cloud_wuhunliezhuan: '武魂列传',
            xingcaiaojiaoyujie: '傲娇御姐·星彩',
            sunshangxiangbanjuntianya: '伴君天涯·孙尚香',
            lvlingqichuchukelian: '楚楚可怜·吕玲绮',
            xingcaidingzuitieshe: '钉嘴铁舌·星彩',
            caocaomaduduxinshi: '都督信使·草草马',
            diaochanguanjiashaonv: '管家少女·貂蝉',
            sunruhunqianmengrao: '魂牵梦绕·孙茹',
            mayunlukuidaojiee: '窥道解厄·马云禄',
            zhangfeimingjieguilai: '冥界归来·张飞',
            liubeiningsibuqv: '宁死不屈·刘备',
            zhouyuqixixianghui: '七夕相会·周瑜',
            guanxingsangxiongzhitong: '丧兄之恸·关兴',
            mayunlushaonvxiangshi: '少女相师·马云禄',
            xiahouyuanshibaoxiongchou: '誓报兄仇·夏侯渊',
            sunshangxiangxinrusishui: '心如死水·孙尚香',
            xiaoqiaoyoulinggongzhu: '小乔',
            yuejinzuishengmengsi: '醉生梦死·乐进',
            cloud_tianmingshou: '天命兽',
            basheshou: '巴蛇',
            chenxitushou: '晨曦兔',
            gudiaoshou: '蛊雕',
            huoqilinshou: '火麒麟',
            jiuweifenghushou: '九尾风狐',
            kuiniushou: '夔牛',
            linglongshou: '鲮龙',
            qiannianwugongshou: '千年蜈蚣',
            shenaoshou: '神鳌',
            shenlushou: '神鹿',
            tongxinlinglongyushou: '同心玲珑鱼',
            xingyuekunshou: '星月鲲',
            cloud_shenshou: '神兽',
            baihushou: '白虎',
            qinglongshou: '青龙',
            xuanwushou: '玄武',
            zhuqveshou: '朱雀',
            mengyanshou: '梦魇',
            taotieshou: '饕餮',
            cloud_longbing: '龙兵',
            biyingtudulong: '碧影荼毒龙',
            qingxuntudulong: '青迅荼毒龙',
            lieyanbawanglong: '烈焰霸王龙',
            xuanhuangbawanglong: '玄黄霸王龙',
            cloud_qiling: '器灵',
            kebiqiling: '可比',
            aixinqiling: '艾新',
            hongtaiyangqiling: '红太阳',
            maocaoyaoqiling: '茅草妖',
            leibaobaoqiling: '雷宝宝',
            cloud_xinmotan: '心魔·贪',
            caishenxinmo: '财神心魔',
            caopixinmo: '曹丕心魔',
            dongzhuoxinmo: '董卓心魔',
            fazhengxinmo: '法正心魔',
            moyanliangxinmo: '魔颜良心魔',
            moyuanshaoxinmo: '魔袁绍心魔',
            shenmishangrenxinmo: '神秘商人心魔',
            shenzhaoyunxinmo: '神赵云心魔',
            xiahuangyueyingxinmo: '夏黄月英心魔',
            yujixinmo: '于吉心魔',
            zhanghexinmo: '张郃心魔',
            zhangliangxinmo: '张梁心魔',
            zhaoyunxinmo: '赵云心魔',
            cloud_xinmochen: '心魔·嗔',
            caorenxinmo: '曹仁心魔',
            chunmaomaoxinmo: '纯猫猫心魔',
            guanpingxinmo: '关平心魔',
            huaxiongxinmo: '华雄心魔',
            huanggaixinmo: '黄盖心魔',
            jiangweixinmo: '姜维心魔',
            machaoxinmo: '马超心魔',
            menghuoxinmo: '孟获心魔',
            mozhangjiaoxinmo: '魔张角心魔',
            pangdexinmo: '庞德心魔',
            xvhuangxinmo: '徐晃心魔',
            zhoutaixinmo: '周泰心魔',
            cloud_xinmochi: '心魔·痴',
            caiwenjixinmo: '蔡文姬心魔',
            caoangxinmo: '曹昂心魔',
            chengpuxinmo: '程普心魔',
            caojiexinmo: '曹节心魔',
            guanxingxinmo: '关兴心魔',
            diaochanxinmo: '貂蝉心魔',
            huamanxinmo: '花鬘心魔',
            lingjvxinmo: '灵雎心魔',
            liushanxinmo: '刘禅心魔',
            liuxiexinmo: '刘协心魔',
            luxunxinmo: '陆逊心魔',
            lvlingqixinmo: '吕玲绮心魔',
            mayunluxinmo: '马云禄心魔',
            sunruxinmo: '孙茹心魔',
            sunshangxiangxinmo: '孙尚香心魔',
            xixingcaixinmo: '囍星彩心魔',
            xiaoqiaoxinmo: '小乔心魔',
            xingcaixinmo: '星彩心魔',
            xunyuxinmo: '荀彧心魔',
            yangxiuxinmo: '杨修心魔',
            yuebulianshixinmo: '月步练师心魔',
            zhangjiaoxinmo: '张角心魔',
            zhurongxinmo: '祝融心魔',
            cloud_xinmoman: '心魔·慢',
            caozhixinmo: '曹植心魔',
            caocaomaxinmo: '草草马心魔',
            fubaoxinmo: '福宝心魔',
            huangzhongxinmo: '黄忠心魔',
            moguanfengxinmo: '魔关凤心魔',
            suncexinmo: '孙策心魔',
            wangyuanjixinmo: '王元姬心魔',
            weiyanxinmo: '魏延心魔',
            wenchouxinmo: '文丑心魔',
            xiahouyuanxinmo: '夏侯渊心魔',
            xvshengxinmo: '徐盛心魔',
            yanliangxinmo: '颜良心魔',
            zhugekexinmo: '诸葛恪心魔',
            cloud_xinmoyi: '心魔·疑',
            bulianshixinmo: '步练师心魔',
            guanfengxinmo: '关凤心魔',
            guojiaxinmo: '郭嘉心魔',
            huodouxinmo: '祸斗心魔',
            mozhenfuxinmo: '魔甄宓心魔',
            pangtongxinmo: '庞统心魔',
            shenliubeixinmo: '神刘备心魔',
            shensunquanxinmo: '神孙权心魔',
            shuijingxianshengxinmo: '水镜先生心魔',
            sunquanxinmo: '孙权心魔',
            zhangchunhuaxinmo: '张春华心魔',
            zhangzhaoxinmo: '张昭心魔',
            zhenfuxinmo: '甄宓心魔',
            cloud_xinmozui: '心魔·罪',
            caocaoxinmo: '曹操心魔',
            chengongxinmo: '陈宫心魔',
            daqiaoxinmo: '大乔心魔',
            guanyuxinmo: '关羽心魔',
            guohuaixinmo: '郭淮心魔',
            guonvwangxinmo: '郭女王心魔',
            handangxinmo: '韩当心魔',
            huatuoxinmo: '华佗心魔',
            huangyueyingxinmo: '黄月英心魔',
            yuejinxinmo: '乐进心魔',
            liubeixinmo: '刘备心魔',
            lusuxinmo: '鲁肃心魔',
            lvbuxinmo: '吕布心魔',
            mocaocaoxinmo: '魔曹操心魔',
            nanhuaxianrenxinmo: '南华仙人心魔',
            shenzhouyuxinmo: '神周瑜心魔',
            sunjianxinmo: '孙坚心魔',
            taishicixinmo: '太史慈心魔',
            wangyixinmo: '王异心魔',
            xiahoudunxinmo: '夏侯惇心魔',
            yuanshaoxinmo: '袁绍心魔',
            zhangbaozixinmo: '张苞心魔',
            zhangbaoxinmo: '张宝心魔',
            zhangfeixinmo: '张飞心魔',
            zhangliaoxinmo: '张辽心魔',
            zhangxiuxinmo: '张绣心魔',
            zhouyuxinmo: '周瑜心魔',
            zhugeliangxinmo: '诸葛亮心魔',
            cloud_taling: '塔灵',
            bulianshitaling: '塔灵·步练师',
            caoangtaling: '塔灵·曹昂',
            caocaotaling: '塔灵·曹操',
            caopitaling: '塔灵·曹丕',
            caorentaling: '塔灵·曹仁',
            caozhitaling: '塔灵·曹植',
            caocaomataling: '塔灵·草草马',
            chengputaling: '塔灵·程普',
            diaochantaling: '塔灵·貂蝉',
            dongzhuotaling: '塔灵·董卓',
            fazhengtaling: '塔灵·法正',
            guanfengtaling: '塔灵·关凤',
            guanpingguanxingtaling: '塔灵·关平关兴',
            guanyutaling: '塔灵·关羽',
            guohuaitaling: '塔灵·郭淮',
            guonvwangtaling: '塔灵·郭女王',
            huamantaling: '塔灵·花鬘',
            huaxiongtaling: '塔灵·华雄',
            huanggaitaling: '塔灵·黄盖',
            huangyueyingtaling: '塔灵·黄月英',
            huodoutaling: '塔灵·祸斗',
            jiangweitaling: '塔灵·姜维',
            liubeitaling: '塔灵·刘备',
            liushantaling: '塔灵·刘禅',
            liuxietaling: '塔灵·刘协',
            lusutaling: '塔灵·鲁肃',
            lvlingqitaling: '塔灵·吕玲绮',
            mayunlutaling: '塔灵·马云禄',
            menghuotaling: '塔灵·孟获',
            moguanfengtaling: '塔灵·魔关凤',
            moyanliangtaling: '塔灵·魔颜良',
            pangdetaling: '塔灵·庞德',
            suncetaling: '塔灵·孙策',
            taishicitaling: '塔灵·太史慈',
            xixingcaitaling: '塔灵·囍星彩',
            xiahouduntaling: '塔灵·夏侯惇',
            xiahouyuantaling: '塔灵·夏侯渊',
            xingcaitaling: '塔灵·星彩',
            xunyutaling: '塔灵·荀彧',
            yanliangwenchoutaling: '塔灵·颜良文丑',
            yangxiutaling: '塔灵·杨修',
            yujitaling: '塔灵·于吉',
            yuanshaotaling: '塔灵·袁绍',
            zhangbaotaling: '塔灵·张宝',
            zhanghetaling: '塔灵·张郃',
            zhangjiaotaling: '塔灵·张角',
            zhangliaotaling: '塔灵·张辽',
            zhangxiutaling: '塔灵·张绣',
            zhangzhaotaling: '塔灵·张昭',
            zhaoyuntaling: '塔灵·赵云',
            zhenfutaling: '塔灵·甄宓',
            zhoutaitaling: '塔灵·周泰',
            zhouyutaling: '塔灵·周瑜',
            zhugeketaling: '塔灵·诸葛恪',
            zhurongtaling: '塔灵·祝融',
            luxuntaling: '塔灵·陆逊',
            sunquantaling: '塔灵·孙权',
            wangyitaling: '塔灵·王异',
            sunrutaling: '塔灵·孙茹',
            sunshangxiangtaling: '塔灵·孙尚香',
            zhangbaozitaling: '塔灵·张苞',
            zhangfeitaling: '塔灵·张飞',
            daqiaoxiaoqiaotaling: '塔灵·大乔小乔',
            chengongtaling: '塔灵·陈宫',
            handangtaling: '塔灵·韩当',
            huatuotaling: '塔灵·华佗',
            cloud_caidan: '彩蛋',
            liubeihei: '黑·刘备',
            //taoyuansanying:'桃园三英',
            hyym_ceshi: '测试',
            hyym_huanyiyouming: '幻翼幽冥',
            mo: '魔',
            mo2: '魔',
            shou: '兽',
            shou2: '兽',
            ling: '灵',
            ling2: '灵',
            gui: '鬼',
            gui2: '鬼',
            hyym_fenghuolun_backup: '风火轮',
            hyym_tishenmu: '替身木',
            hyym_tishenmu_info: '结束阶段限x次(x为你的体力上限),你可以失去1点体力,获得1点护甲并摸一张牌;准备阶段,你可以失去任意点护甲并摸两倍数量的牌,本回合你使用这些牌造成的前两次伤害+1.',
            hyym_houche: '后撤',
            hyym_houchex: '后撤',
            hyym_houche_info: '当你失去全部护甲时,若你的体力上限大于1,你可以减1点体力上限,获得x点护甲(x为你的体力上限且至多为3),弃置x张牌(不足则全弃)并令你的手牌上限永久+1.若你未处于濒死状态,你可以失去1点护甲,对不为你的伤害来源(若有)造成1点伤害.',
            hyym_suishending: '随身钉',
            hyym_suishending_info: '出牌阶段每种花色限一次,若场上<钉>的数量不大于你的护甲数,你可以将一张牌置于一名其他角色的武将牌上,称为<钉>(异常状态).有<钉>的角色出牌阶段开始时,其依次移去所有<钉>并判定:红色,其随机弃一张牌;黑色,其失去1点体力.',
            hyym_sidou: '死斗',
            hyym_sidou_info: '①当你进入濒死状态时,若你没有<斗>标记,你可将体力回复至1点并获得之,对不为你的伤害来源(若有)造成1点伤害;结束阶段,若你有<斗>,你移除之并失去1点体力.<p>②当有伤害锦囊牌结算完毕后,若无角色因此牌进入濒死状态,且你未因此牌受到过伤害,你可以失去1点体力并摸一张牌,视为使用一张【决斗】;当你受到一名其他角色造成的伤害后,你可弃一张牌,视为对其使用一张【决斗】.',
            hyym_buqvyizhi: '不屈意志',
            hyym_buqvyizhi_info: '当你成为其他角色使用的牌的目标时,若你的体力值为1,则你可以进行一次判定,若点数小于8,取消之.',
            hyym_zhenshenlongquan: '真神龙拳',
            hyym_zhenshenlongquan_info: '①锁定技,游戏开始时,你获得50枚<龙>标记,当你使用或打出一张牌后/你的判定牌生效后,你获得x枚<龙>(x为此牌点数的两倍),<龙>的数量上限为100.<p>②出牌阶段,你可以移除70枚<龙>,对一名距离为1的其他角色造成x点火焰伤害,并弃置其x张牌(x为其手牌数与体力值的差,且至少为1,至多为其体力上限).',
            hyym_bawangpaoxiao: '霸王咆哮',
            hyym_bawangpaoxiao_info: '当你受到一名其他角色对你造成的1点伤害时,你可以重铸一张牌并进行一次判定:♣️️,其跳过下个摸牌阶段;♠️️,其翻面;♦️️,其手牌上限永久-1;♥️️,其跳过下个出牌阶段(均为异常状态).',
            hyym_feihuoliuxing: '飞火流星',
            hyym_feihuoliuxing_info: '结束阶段,你可以选择一名其他角色,弃置两张同花色牌,废除一个装备栏并减1点体力上限,对其及其相邻的其他角色各造成1点火焰伤害.',
            hyym_dujiaoxian: '独角仙',
            hyym_dujiaoxian_info: '出牌阶段限一次,你可以失去1点体力并选择一名其他角色,亮出牌堆顶九张牌,依次对其使用其中的【雷杀】、【火杀】和【冰杀】(不计入次数且无次数和距离限制).若此技能未造成伤害,则你可以从其余牌中选择并获得一张.结算完毕后将剩余牌置入弃牌堆.',
            hyym_ziyang: '滋养',
            hyym_ziyang_info: '一名角色的结束阶段,若你体力值不大于2,且手牌数不大于其,则你可以摸一张牌.',
            hyym_modujiaomengyan: '魔独角梦魇',
            hyym_modujiaomengyan_info: '①当你对一名没有<梦魇>标记的其他角色造成伤害后,你可令其获得<梦魇>;出牌阶段,你可以弃一张牌,令一名没有<梦魇>的其他角色获得<梦魇>(异常状态).<p>②锁定技,有<梦魇>的角色出牌阶段结束时,须交给你一张牌.<p>③锁定技,当你受到一名其他角色造成的伤害时,若其有/无<梦魇>,其移除<梦魇>并随机弃一张牌/获得<梦魇>.',
            hyym_yingxi: '影袭',
            hyym_yingxi_info: '准备阶段,你可对一名装备区内有牌的角色造成1点伤害,其可重铸任意张牌.',
            hyym_hunyin: '魂印',
            hyym_hunyin_info: '宗族技,锁定技,当你死亡时,你选择一名其他角色,令其失去1点体力并获得<魂印>标记(异常状态).战鬼猎人族角色对有<魂印>的角色使用牌无距离限制.',
            hyym_liuxinghuoyu: '流星火雨',
            hyym_liuxinghuoyu_info: '限定技,出牌阶段,你可以选择至多x名其他角色(x为场上拥有限定技的角色的数量),这些角色接下来的每个准备阶段,你进行一次判定,若为♦️️,你对其造成1点火焰伤害,直到你以此法累计造成至少x点伤害.',
            hyym_yangchunbaixve: '阳春白雪',
            hyym_yangchunbaixve_info: '出牌阶段开始/结束时,你可弃一张牌,从【英勇奏】、【绝命谱】、【缓行曲】、【定神调】、【坚毅颂】中选取一个技能,令至多三名角色依次获得之,直到你下回合开始或死亡.',
            hyym_yingyongzou: '英勇奏',
            hyym_yingyongzou_info: '当你使用牌指定一名其他角色为目标时,你可令其防具、护甲和所有非锁定技失效直到回合结束.',
            hyym_juemingpu: '绝命谱',
            hyym_juemingpu_info: '当你造成伤害时,你可进行一次判定,若为红,此伤害+1且此技能本轮失效.',
            hyym_huanxingqv: '缓行曲',
            hyym_huanxingqv_info: '锁定技,你于出牌阶段内使用第一张牌时,须弃一张牌(异常状态).',
            hyym_dingshendiao: '定神调',
            hyym_dingshendiao_info: '每回合限一次,当你使用伤害牌时,你可废除一个装备栏,令此牌不可被响应.',
            hyym_jianyisong: '坚毅颂',
            hyym_jianyisong_info: '每轮限一次,当你受到伤害时,你可弃一张与造成伤害的牌不同类型的牌并防止之.',
            hyym_yinren: '音刃',
            hyym_yinren_info: '每名角色限一次,一名角色的准备阶段,你可移除【阳春白雪】中的一个选项并获得对应技能,对其造成1点伤害.',
            hyym_chenzui: '沉醉',
            hyym_chenzui_info: '每回合各限一次,当你造成/受到一名其他角色的伤害后,你可随机令其使用的下1张牌无效/下次造成的伤害-1(均为异常状态且数字可叠加).',
            hyym_mihuan: '迷幻',
            hyym_mihuan_info: '锁定技,每名男性角色对你造成的首次非属性伤害无效.',
            hyym_dijianyinbo: '笛剑音波',
            hyym_dijianyinbo_info: '出牌阶段,你可以重铸两张未记录点数的牌并记录对应点数,若场上武将牌正面朝上的其他角色数量大于1,则你可以选择其中一名角色,令其翻面并获得2点护甲.',
            hyym_yuyibihu: '羽翼庇护',
            hyym_yuyibihu_info: '锁定技,当你受到伤害时,若无伤害来源/伤害来源体力值和手牌数均大于你,你防止之并删除【笛剑音波】中的两个已记录点数.',
            hyym_meihuodibo: '魅惑笛波',
            hyym_meihuodibo_info: '限定技,一名其他角色的回合开始时,你可失去1点体力并弃两张牌,令此回合改为由你操控(异常状态).若你此做,你重置【笛剑音波】.',
            hyym_cangyanxianji: '苍炎献祭',
            hyym_cangyanxianji_info: '当一名距离不大于1的角色受到伤害后,若伤害来源不为你,你可弃置所有手牌/失去1点体力,对伤害来源造成1点火焰伤害/令其失去1点体力;你每造成3点伤害后,回复1点体力并摸两张牌.',
            hyym_dianxve: '点穴',
            hyym_dianxve_info: '当你对一名其他角色造成伤害时,你可弃零至三张牌并废除3-x个装备栏(x为弃牌数),令其翻面.',
            hyym_zhike: '止渴',
            hyym_zhike_info: '主公技,觉醒技,准备阶段,若你的体力值不大于2,你回复1点体力,将【苍炎献祭】中的<距离不大于1的角色>修改为<距离不大于1的角色/魏势力角色> ,<回复1点体力并摸两张牌>修改为<回复2点体力并摸一张牌>.',
            hyym_shuangjianhebi: '双剑合璧',
            hyym_shuangjianhebi_info: '①锁定技,游戏开始时,你获得一个额外的武器栏.<p>②游戏开始时/准备阶段,你可从牌堆中检索并获得一张指定牌名的武器牌(若检索失败,则改为随机获得一张【杀】).<p>③锁定技,你的武器牌不占用手牌上限.',
            hyym_huabu: '滑步',
            hyym_huabu_info: '每轮限六次,出牌阶段,你可与上/下家交换座次.当你于一回合内对一名角色首次发动此技能时,你须弃一张牌.',
            hyym_fengche: '风车',
            hyym_fengche_info: '限定技,当你受到一名其他角色造成的伤害后,你可以选择是否弃任意张武器牌,你获得其x张牌(x为你的弃牌数+1)并对其造成2点伤害,结束此回合.本局游戏中,你对其发动【滑步】时,无需再弃置牌.',
            hyym_daozhuanqiankun: '倒转乾坤',
            hyym_daozhuanqiankun_info: '出牌阶段限一次,你可令所有与你等净距角色交换座次.',
            hyym_fenghuolun: '风火轮',
            hyym_fenghuolun_info: '出牌阶段各限一次,你可重铸一张牌,对你的上家/上上家造成1点伤害.',
            hyym_yujianji: '驭剑极',
            hyym_yujianji_info: '锁定技,游戏开始时/有角色受到属性伤害后,你选择并获得【霜娥】/【重明】/【雷泽】中未选择过的一个技能.若均已选择过,则改为获得【极万剑归宗】.',
            hyym_guishenzhaoling: '鬼神诏令',
            hyym_guishenzhaoling_info: '出牌阶段限一次,你可以失去1点体力,令至多x(x为你的体力值)名不同势力的角色依次视为使用一张【战鬼来袭】.你因【战鬼来袭】获得的牌不占用手牌上限,且在一名角色的判定牌生效前,你可以打出其中一张代替之.',
            hyym_shuanghuoguikai: '霜火鬼铠',
            hyym_shuanghuoguikai_info: '主公技,当你受到属性伤害或失去体力后,其他群/鬼势力角色可失去1点体力,令你获得1点护甲.',
            hyym_shuange: '霜娥',
            hyym_shuange_info: '你可以将一张普通【杀】当【冰杀】使用或打出,当你对其他角色造成冰冻伤害后,你可以弃置其两张牌.',
            hyym_chongming: '重明',
            hyym_chongming_info: '出牌阶段,你可以弃两张同花色牌,对一名其他角色造成1点火焰伤害.',
            hyym_leize: '雷泽',
            hyym_leize_info: '你可以将一张♠️️牌当【浮雷】置入一名其他角色判定区.你不能成为【浮雷】的目标.',
            hyym_jiwanjianguizong: '极万剑归宗',
            hyym_jiwanjianguizong_info: '出牌阶段限一次,你可以失去【霜娥】/【重明】/【雷泽】,对一名其他角色造成1点冰冻/火焰/雷电(属性与技能相对应)伤害.',
            hyym_jinghua: '净化',
            hyym_jinghua_info: '宗族技,当你/一名战鬼族其他角色进入濒死状态时,你可失去一个技能,减1点体力上限并弃三张牌(不足则全弃),令其回复1点体力.',
            hyym_moyingluanwu: '墨影乱舞',
            hyym_moyingluanwu_info: '出牌阶段限七次,你可以弃两张牌,展示牌堆顶七张牌并获得其中的♠️️牌,将剩余牌置于弃牌堆(若其中♠️️牌不足两张,则你本回合下次发动此技能时少弃一张牌).',
            hyym_nongsuo: '浓缩',
            hyym_nongsuo_info: '锁定技,你的♠️️牌不占用手牌上限,你使用♠️️牌不可被响应.',
            hyym_mengxiang: '梦乡',
            hyym_mengxiang_info: '出牌阶段结束时,你可弃一张♠️️牌,令一名其他角色获得<乱>标记.',
            hyym_taiji: '太极',
            hyym_taiji_info: '转换技,当你成为其他角色牌的目标时,你可重铸任意张♠️️牌并判定,若为:阳:桃源牌;阴:非桃源牌,则取消之.',
            hyym_wuji: '无极',
            hyym_wuji_info: '出牌阶段限一次,你可以失去一个武将牌上的技能,弃置任意张♠️️牌,对等量名相邻的其他角色各造成1点伤害,并令你本阶段对其使用牌无次数限制.',
            hyym_songzhong: '送钟',
            hyym_songzhong_info: '当你死亡时,你可将所有♠️️牌置于一名其他角色武将牌上,等量轮后,其移去之,受到等量点无来源伤害.',
            hyym_zhuangsi: '装死',
            hyym_zhuangsi_info: '结束阶段,你可以翻面.当你武将牌背面朝上时,防止你受到的一切伤害.',
            hyym_caocaomadajun: '草草马大军',
            hyym_caocaomadajun_info: '当你的武将牌从背面翻至正面时,你可依次对至多x名其他角色各造成1点伤害(x为你已损失的体力值且至少为1).',
            hyym_lieyanhongchun: '烈焰红唇',
            hyym_lieyanhongchun_info: '出牌阶段限一次,你可以选择一名角色,直到其下回合结束,其造成和受到的伤害均+1.',
            hyym_tianleikongpo: '天雷空破',
            hyym_tianleikongpo_info: '准备阶段,你可弃两张牌,对一名角色造成1点雷电伤害.当你对一名没有手牌的角色造成雷电伤害时,你可令伤害+1.',
            hyym_leiqiu: '雷球',
            hyym_leiqiu_info: '出牌阶段,你可重铸一张黑色非基本牌,获得1枚<雷球>标记,<雷球>数量上限为2.当你需要使用/打出【雷杀】时,你可移除1枚<雷球>,视为你使用/打出了一张【雷杀】.当你受到伤害后,若此伤害为:雷电伤害,你回复1点体力并获得1枚<雷球>;非雷电伤害,你可移除1枚<雷球>,对伤害来源造成1点雷电伤害.',
            hyym_chihunjingtong: '炽魂精通',
            hyym_chihunjingtong_info: '你可将基本牌当【火杀】使用或打出,将非基本牌当【火攻】使用.',
            hyym_yandun: '炎遁',
            hyym_yandun_info: '每当你造成1点火焰伤害时,你可弃一张红色牌,获得1点护甲.',
            hyym_hunbao: '魂爆',
            hyym_hunbao_info: '出牌阶段限一次,若你有护甲,你可选择一名其他角色并失去1点体力,你失去全部护甲并对其造成等量火焰伤害.',
            hyym_shuilaojingu: '水牢禁锢',
            hyym_shuilaojingu_info: '每名角色限x次(x为游戏开始时你的座位号),出牌阶段,你可以失去2点体力,令一名其他角色翻面.',
            hyym_shuimudan: '水幕弹',
            hyym_shuimudan_info: '一名其他角色的出牌阶段开始时,你可将一张牌置于武将牌上,称为<幕>,可以消耗1点蓄力值.本阶段内,当你成为其同类型牌的目标时,取消之;此阶段结束时,你移去<幕>,可以将一张牌当【杀】对其使用.',
            hyym_fengjuanyu: '风卷雨',
            hyym_fengjuanyu_info: '蓄力技(0/1).<br>①出牌阶段限一次,你可以获得1点蓄力值.<br>②锁定技,一轮游戏开始时,若你有蓄力值,你须消耗1点蓄力值并弃置所有手牌(无手牌则不弃),对任意名连续的其他角色各造成1点伤害.<br>③锁定技,当你受到伤害后,若你的武将牌上没有<幕>,你消耗1点蓄力值.',
            hyym_huxianfuti: '狐仙附体',
            hyym_huxianfuti_info: '每回合开始时,若你体力值不大于x(x为你的体力上限的一半且向下取整)且没有手牌,你可以回复1点体力.',
            hyym_xvezhizang: '雪之葬',
            hyym_xvezhizang_info: '出牌阶段,你可以弃置x+2张牌,失去1点体力,令一名其他角色翻面(x为此阶段你之前发动过该技能的次数).',
            hyym_hualuanwu: '花乱舞',
            hyym_hualuanwu_info: '限定技,出牌阶段,你可以失去1点体力,指定一名角色,再声明一种势力.若你此做,本局游戏中,每当其使用牌指定该势力角色为目标/成为其他该势力角色使用牌的目标时,其可以重铸一张牌.',
            hyym_yueguangyin: '月光隐',
            hyym_yueguangyin_info: '当你的体力值减小后,你可摸一张牌并声明一种势力,若你此做,直到你下回合结束,当该势力角色对你造成伤害时,你摸一张牌并防止之.',
            hyym_cangyingzhinu: '苍鹰之怒',
            hyym_cangyingzhinu_info: '锁定技,你体力值为1或无手牌时造成的伤害+1.',
            hyym_bulie: '捕猎',
            hyym_bulie_info: '出牌阶段开始/结束时,你可选择任意名其他角色,你依次(按选择顺序)与这些角色同时展示一张手牌,当你与A展示手牌字数的奇偶性相同时,你弃置你展示的牌,令A失去1点体力,且本回合你对A使用牌没有次数限制,结束此技能结算.',
            hyym_yingji: '鹰击',
            hyym_yingji_info: '你的回合内,当一名其他角色的体力值减小后,本回合你可将任意基本牌当无距离限制的【杀】对其使用.',
            hyym_minghuoqiu: '冥火球',
            hyym_minghuoqiu_info: '蓄力技(0/1),出牌阶段限一次.<br>①若你没有蓄力值,你可选择一项发动:1、获得1点蓄力值;2、弃一张黑色非基本牌,令一名其他角色打出一张【杀】,否则其获得<盲>标记(异常状态).<br>②若你有蓄力值,你可消耗1点蓄力值,弃一张黑色基本牌,对一名距离为1的其他角色造成2点伤害.',
            hyym_anzhimen: '暗之门',
            hyym_anzhimen_info: '当一名距离为1的其他角色成为另一名其他角色伤害牌的唯一目标时,你可发现一张同类型的黑色牌,将目标改为你.',
            hyym_shenyan: '神焰',
            hyym_shenyan_info: '出牌阶段每名角色限一次,你可弃一张红色牌,对一名其他角色造成1点火焰伤害;当你对一名其他角色造成火焰伤害后,你可弃一张红色牌,令其跳过下个摸牌阶段.',
            hyym_zhanlongjue: '斩龙诀',
            hyym_zhanlongjue_info: '当你击杀一名角色后,你可以回复所有体力值或将手牌摸至五张.',
            hyym_xiangmozhichu: '降魔之杵',
            hyym_xiangmozhichu_info: '出牌阶段开始时,若场上:没有<杵>,你可选择五名相邻的其他角色(不足则全选),依次将牌堆顶一张牌置于这些角色的武将牌上,称为<杵>;有<杵>,你可获得所有<杵>.',
            hyym_bufeng: '捕风',
            hyym_bufeng_info: '当你对一名角色造成伤害后,你可以依次选择是否对其有<杵>的上/下家A造成1点伤害,移去A的<杵>.',
            hyym_foguang: '佛光',
            hyym_foguang_info: '锁定技,当你造成1点伤害时,你获得1枚<佛光>标记.结束阶段,若你的<佛光>数不小于x(x为存活角色数-1且至多为5),则你移除x枚<佛光>,加1点体力上限,获得1点护甲并重置所有技能.',
            hyym_weizhenhuaxia: '威震华夏',
            hyym_weizhenhuaxia_info: '锁定技,当你对一名其他角色造成伤害后,若你未受伤,则其失去1点体力;你的回合内,其他角色不能使用或打出黑色牌.',
            hyym_wushengjianglin: '武圣降临',
            hyym_wushengjianglin_info: '限定技,出牌阶段,你可以加2点体力上限并获得【千里单骑】,可对至多两名攻击范围内的其他角色各造成1点伤害.',
            hyym_guaguliaodu: '刮骨疗毒',
            hyym_guaguliaodu_info: '限定技,你可于合适的时机视为使用一张无次数限制的【酒】,每名角色回合开始时,你摸一张牌/回复1点体力,直至你于回合内执行此效果.',
            hyym_qianlidanji: '千里单骑',
            hyym_qianlidanji_info: '出牌阶段开始时,若你已受伤,你可以减1点体力上限,令你本回合内使用的下一张伤害牌获得以下效果:1、无距离限制;2、无视防具;3、伤害基数+1;4、不可被红色牌响应.',
            hyym_jilan: '疾岚',
            hyym_jilan_info: '当你使用牌时,若场上没有处于濒死状态的角色,你可以选择一名角色,从以下选项中选择并令其执行一项:1、失去1点体力,此牌结算完毕后回复1点体力;2、回复1点体力(未受伤则不回),此牌结算完毕后失去1点体力.执行完毕后,若其体力值未变化,其弃一张牌.',
            hyym_feiyan: '飞燕',
            hyym_feiyan_info: '锁定技,游戏开始时,你进行一个额外的回合.此回合结束后,你摸x张牌(x为此回合体力值变化过的角色数).',
            hyym_yujianxingtai: '御剑形态',
            hyym_yujianxingtai_info: '锁定技,回合结束时,你令攻击范围永久+1并将武将牌替换为郭女王•御(一切状态继承).',
            hyym_cangmingjiansuo: '苍冥剑•锁',
            hyym_cangmingjiansuo_info: '出牌阶段限一次,你可将任意张牌置于武将牌上(称为<剑气>)并失去1点体力,令一名其他角色本回合不能使用或打出<剑气>包含类型的牌.',
            hyym_cangmingjianfan: '苍冥剑•反',
            hyym_cangmingjianfan_info: '当你于回合外使用牌/其他角色对你使用牌结算完毕后,若无角色处于濒死状态,你可对一名攻击范围内的角色使用一张<剑气>,摸一张牌.',
            hyym_cangmingjianyin: '苍冥剑•引',
            hyym_cangmingjianyin_info: '当你对一名其他角色造成伤害后,你可以随机将其区域内<剑气>中缺少的类型的各一张牌置于<剑气>中,并令你本回合与其距离视为1.',
            hyym_cangmingjianyu: '苍冥剑•御',
            hyym_cangmingjianyu_info: '限定技,当你体力值减小后,你可获得所有<剑气>,将任意张牌置于<剑气>中,并令你不能受到伤害、失去体力及成为其他角色牌的目标,直到你下回合开始.',
            hyym_nvwangxingtai: '女王形态',
            hyym_nvwangxingtai_info: '锁定技,回合开始时,你令手牌上限永久+1并将武将牌替换为郭女王(一切状态继承).',
            hyym_cangmingzhilei: '沧溟之泪',
            hyym_cangmingzhilei_info: '主公技,觉醒技,当你的体力值首次达到2或更低时,你将手牌数摸至手牌上限,令你与任意名战鬼猎人族/拥有【行者解放】的角色视为使用一张【黄泉行书】.',
            hyym_fangzhu: '放逐(行者)',
            hyym_fangzhu_info: '限定技,当你受到一名距离为1的其他角色造成的伤害后,若你的体力值不大于x(x为你体力上限的一半,且向下取整),则你可以弃一张牌,对其造成1点伤害.',
            hyym_shouhu: '守护(行者)',
            hyym_shouhu_info: '限定技,当你的体力值减小后,若你的体力值不大于x(x为你体力上限的一半,且向下取整),则你可以令你下回合结束前受到的第一次伤害无效.',
            hyym_xingzhejiefang: '行者解放',
            hyym_xingzhejiefang_info: '锁定技,游戏开始时,你视为使用一张【黄泉行书】.',
            hyym_jinghua: '净化',
            hyym_jinghua_info: '宗族技,当你/一名战鬼族其他角色进入濒死状态时,你可失去一个武将牌上的技能,减1点体力上限并弃三张牌(不足则全弃),令其回复1点体力.',
            hyym_dihun: '涤魂',
            hyym_dihun_info: '限定技,出牌阶段,若猎盟存活角色数小于鬼盟,你可弃任意张牌并令等量角色获得【净化】.',
            hyym_liqi: '戾气',
            hyym_liqi_info: '限定技,出牌阶段,若鬼盟存活角色数小于猎盟,你可弃任意张牌并选择等量拥有【净化】的角色,你依次对这些角色选择一项发动:1、对其造成1点伤害;2、令其失去【净化】.',
            hyym_zhujueguanghuan: '主角光环',
            hyym_zhujueguanghuan_info: '宗族技,当一名天命族角色受到伤害后/进入濒死状态时,你可令其复原武将牌/进行一次判定,若为【桃】或桃源牌,其将体力回复至1点.',
            _hyym_sidong: '伺动',
            _hyym_sidong_info: '全局技能,兽势力角色的出牌阶段内,其可以更换势力.',
            _hyym_lingti: '灵体',
            _hyym_lingti_info: '全局技能,当一名灵势力角色受到伤害前,其可改为失去等量体力值.',
            _hyym_huihai: '回骸',
            _hyym_huihai_info: '全局技能,锁定技,其他角色击杀鬼势力角色后不执行身份奖惩;当一名鬼势力脱离濒死状态后,若其有未废除的装备栏,其废除两个装备栏并回复1点体力.',
            hyym_longling: '龙灵',
            hyym_longling_info: '宗族技,出牌阶段限一次,你可以失去1点体力并弃两张同花色牌,根据所弃牌花色,令一名龙族角色获得一张对应龙兵牌(♥️️-烈焰霸王龙卡;♦️️:玄黄霸王龙卡;♣️️:青迅荼毒龙卡;♠️️:碧影荼毒龙卡).',
            hyym_jixiong: '吉凶',
            hyym_jixiong_info: '宗族技,转换技,出牌阶段限一次,阳:你可以令任意名神兽族角色摸一张牌;阴:你可以令一名非神兽族角色弃一张牌.',
            hyym_shenmang: '神芒',
            hyym_shenmang_info: '宗族技,当一名天命兽族角色失去最后一张手牌时,你可以弃一张牌,令其摸一张牌.',
            hyym_shenzhu: '神铸',
            hyym_shenzhu_info: '宗族技,当一名器灵族角色受到伤害后,你可以弃两张牌,选择其的一个装备栏并为之随机匹配一件装备.',
            hyym_zuiye: '罪业',
            hyym_zuiye_info: '宗族技,锁定技,游戏开始时,你令一名心魔•罪族角色废除判定区并摸一张牌.',
            hyym_shenjue: '神诀',
            hyym_shenjue_info: '宗族技,锁定技,游戏开始时,你令一名神兵族角色弃一张牌,从游戏外获得一张【G-phone】并使用之.',
            hyym_tanli: '贪戾',
            hyym_tanli_info: '宗族技,准备阶段,你可以失去1点体力,令一名心魔•贪族角色摸两张牌.',
            hyym_chenhen: '嗔恨',
            hyym_chenhen_info: '宗族技,当一名心魔•嗔族角色受到伤害后,你可弃一张牌,令伤害来源废除一个装备栏.',
            hyym_yuchi: '愚痴',
            hyym_yuchi_info: '宗族技,一名心魔•痴族角色弃牌阶段开始时,你可废除一个装备栏,令其本回合手牌上限+2.',
            hyym_jieman: '桀慢',
            hyym_jieman_info: '宗族技,每回合限一次,当一名心魔•慢族角色成为【杀】的目标时,你可以失去1点体力并取消之.',
            hyym_guaiyi: '乖疑',
            hyym_guaiyi_info: '宗族技,一名心魔•疑族角色判定阶段开始时,你可移除武将牌上的一个技能,并将其判定区内所有牌置入弃牌堆.',
            hyym_kuaisuzhuangtian: '快速装填',
            hyym_kuaisuzhuangtian_info: '准备阶段,你可以重铸所有牌,可以消耗1点蓄力值.',
            hyym_lianzhupao: '连珠炮',
            hyym_lianzhupao_info: '出牌阶段限四次,当你使用与你本回合失去的上一张牌类别和花色均不同的牌时,你可以摸一张牌.',
            hyym_jianongpao: '加农炮',
            hyym_jianongpao_info: '蓄力技(0/1),出牌阶段限一次.<br>①若你没有蓄力值,你可选择一项发动:1、获得1点蓄力值;2、弃一张红色基本牌,令攻击范围内一名其他角色打出一张【闪】,否则你观看其手牌,选择并弃置其一种花色的所有手牌.<br>②若你有蓄力值,你可消耗1点蓄力值,弃一张红色非基本牌,对一名其他角色造成2点伤害.',
            hyym_jiyandiyu: '极炎地狱',
            hyym_jiyandiyu_info: '当你对一名没有<炙>标记的其他角色造成伤害时,你可弃一张红色牌并令其获得<炙>(异常状态).',
            hyym_gujichongshi: '故技重施',
            hyym_gujichongshi_info: '出牌阶段限一次,当你使用的基本牌或锦囊牌结算完毕后,你可立即将一张牌当同名牌使用(无次数限制).',
            hyym_yiyan: '遗言',
            hyym_yiyan_info: '当你死亡时,你可选择自己武将牌上的一个技能,令一名其他角色获得之.',
            hyym_shenjing: '蜃景',
            hyym_shenjing_info: '当其他角色使用牌对你造成伤害时,你可重铸一张同花色牌,令伤害值-1.',
            hyym_fengyin: '封印',
            hyym_fengyin_info: '当你使用牌指定体力值大于你的其他角色为目标后,你可以令其不能使用同名牌直到其下回合结束.',
            hyym_qingnangbaodian: '青囊宝典',
            hyym_qingnangbaodian_info: '每回合每名角色各限一次,一名距离不大于1的角色使用牌指定你为目标时/受到伤害后,你可令其清除所有异常状态并回复1点体力并摸一张牌/废除一个装备栏并复原武将牌并视为使用一张【金葫芦】.',
            hyym_qianggongyao: '强攻药',
            hyym_qianggongyao_info: '出牌阶段开始时,你可以令任意名距离不大于1的角色弃置x张牌(x为其体力值的一半且向下取整且不超过你的体力值,不足则全弃),并令其下x次造成的伤害+1直到其各自下回合结束.',
            hyym_kangfenyao: '亢奋药',
            hyym_kangfenyao_info: '限定技,当你处于濒死状态时/出牌阶段,你可以失去【青囊宝典】,回复所有装备栏并废除判定区,加3点体力上限,回复全部体力并将手牌摸至体力上限.若你此做,本局游戏中,你的每个结束阶段,你失去1点体力并弃一张牌.',
            hyym_muzhonghuo: '木中火',
            hyym_muzhonghuo_info: '当有距离不大于1的角色受到超过1点的伤害时,你可弃置等同于超过值的牌,将伤害值改为1.',
            hyym_leihuangbaren: '雷煌霸刃',
            hyym_leihuangbaren_info: '锁定技,准备阶段,若你没有【天雷刃】,你获得一张【天雷刃】.',
            hyym_jianpo: '剑破',
            hyym_jianpo_info: '出牌阶段,你可弃一张武器牌并摸x张牌(x为其字数).',
            hyym_kurouqiangxi: '苦肉强袭',
            hyym_kurouqiangxi_info: '锁定技,当你的体力值减小1点后,你获得1枚<苦肉>标记,<苦肉>的数量上限为10.你使用点数不大于<苦肉>数的牌伤害基数+1且不可被响应.',
            hyym_sheshen: '舍身',
            hyym_sheshen_info: '出牌阶段限一次,你可以失去1点体力并选择一名其他角色,直到你的下回合开始,其每次成为你牌的目标时须弃一张牌,其每次受到你造成的伤害+1且均视为火焰伤害(异常状态).',
            hyym_zhongmao: '重锚',
            hyym_zhongmao_info: '当你使用牌对一名其他角色造成伤害后,你可令其不能使用/打出此牌对应实体牌包含花色的牌直到其下回合结束(异常状态).',
            hyym_bowen: '波纹',
            hyym_bowen_info: '结束阶段,你可以弃置以你为中心的五名连续角色(不足则全选)的各一张手牌(没有手牌则改为你对其造成1点伤害).',
            hyym_bingfenglujing: '冰封路径',
            hyym_bingfenglujing_info: '当一名其他角色受到1点冰冻伤害后,你可以重置【极寒领域】并令其获得1枚<冰封>标记.若你此做,根据其<冰封>数执行以下效果:2,你弃置其一张牌;3,其翻面并移除所有<冰封>.',
            hyym_jihanlingyu: '极寒领域',
            hyym_jihanlingyu_info: '出牌阶段限一次,你可以弃置至少两张牌,令你的下个摸牌阶段摸牌数+2,你可选择至多等量其他角色,依次选择令其下个摸牌阶段摸牌数-1(异常状态)/+1,且摸牌数因此减少的角色/你与摸牌数因此增加的角色,于你下回合开始前受到/造成的伤害均视为冰冻伤害.',
            hyym_jinzhixveyu: '禁制雪域',
            hyym_jinzhixveyu_info: '限定技,出牌阶段,你可失去1点体力,对至多x(x为你武将牌上的技能数)名其他角色各造成1点冰冻伤害.',
            hyym_diaogongxveren: '雕弓雪刃',
            hyym_diaogongxveren_info: '<p>①锁定技,游戏开始时,你获得1枚<矢>标记,<矢>的数量上限为6.当有角色使用武器牌时,你获得1枚<矢>.<p><p>②当你需要使用/打出【火杀】时,你可以移除1枚<矢>,视为你使用/打出了一张【火杀】.<p><p>③锁定技,准备阶段,若你没有【麒麟弓】,你获得一张【麒麟弓】.<p>',
            hyym_jianmuliaoyuan: '箭幕燎原',
            hyym_jianmuliaoyuan_info: '<p>①出牌阶段限一次,你可以将全部手牌当【万箭齐发】使用,获得x枚<矢>(x为此【万箭齐发】造成的伤害值的一半,且向上取整,且至多为3).<p><p>②锁定技,当你使用【万箭齐发】造成伤害时,你将伤害改为火焰伤害.<p>',
            hyym_wangongyinyu: '弯弓饮羽',
            hyym_wangongyinyu_info: '结束阶段,若你已装备【麒麟弓】,你可弃置之并移除2枚<矢>,回复1点体力并摸两张牌.',
            hyym_tiangouxingtai: '天狗形态',
            hyym_tiangouxingtai_info: '准备阶段,你可以弃一张牌,或失去1点体力并摸一张牌,将武将牌替换为天狗(一切状态继承).',
            hyym_yueguang: '月光',
            hyym_yueguang_info: '结束阶段,你可以进行一次判定:黑色,你回复1点体力;红色,你摸一张牌.',
            hyym_xuanya: '旋牙',
            hyym_xuanya_info: '出牌阶段限一次,当你使用【杀】或普通锦囊牌指定单一目标时,你可将目标改为与你净距离最远的所有角色,若此牌未造成伤害,则你再次对与你净距离次之的所有角色使用此牌,你重复此操作,直到此牌造成了伤害/指定了所有合法的其他角色为目标.',
            hyym_huodouxingtai: '祸斗形态',
            hyym_huodouxingtai_info: '准备阶段,你可以弃一张牌,或失去1点体力并摸一张牌,将武将牌替换为祸斗(一切状态继承).',
            hyym_lieya: '裂牙',
            hyym_lieya_info: '出牌阶段每名角色限一次,当你对一名其他角色造成伤害后,你可令其选择一项:1、弃一张装备牌并摸两张牌;2、失去1点体力.',
            hyym_tiangouzhinu: '天狗之怒',
            hyym_tiangouzhinu_info: '主公技,每三轮限一次,当你的体力值变化后,若你的体力值不大于2,你可以发动此技能,直到你下回合开始,当你成为其他势力角色使用牌的目标时,你取消并获得之.',
            hyym_lingyue: '灵跃',
            hyym_lingyue_info: '当你需要使用/打出一张基本牌/【无懈可击】时,若你未记录该牌名,则你可以视为使用/打出之,记录该牌名.若你此做,你下一次使用/打出同名牌时,你清除此牌名并令此牌无效,你可立即再使用/打出一张同名牌.',
            hyym_duanliecangqiong: '断裂苍穹',
            hyym_duanliecangqiong_info: '当你于一回合内使用首张伤害牌指定目标时,你可重铸一张牌,令此牌额外结算一次.',
            hyym_lianci: '连刺',
            hyym_lianci_info: '每当你对同一名角色累计造成2点伤害后,你可以令其失去1点体力.',
            hyym_yuhuang: '驭凰',
            hyym_yuhuang_info: '锁定技,准备阶段,若你没有【铜雀】,你获得一张【铜雀】.',
            hyym_gedangfanji: '格挡反击',
            hyym_gedangfanji_info: '当其他角色对你使用的伤害牌结算完毕后,若此牌未对你造成伤害,你可重铸一张同花色牌,视为对其使用一张【杀】.',
            hyym_xiuluoanmang: '修罗暗芒',
            hyym_xiuluoanmang_info: '准备阶段,你可弃一张黑色牌,选择【穿心刺】或【铁骑】之一获得之,直到你的下回合开始.',
            hyym_zhanshenguanghua: '战神光华',
            hyym_zhanshenguanghua_info: '准备阶段,你可弃一张红色牌,选择【寒芒】或【破军】之一获得之,直到你的下回合开始.',
            hyym_wanjun: '万钧',
            hyym_wanjun_info: '每当你首次发动一个技能后,你可从牌堆中获得一张武器牌/摸一张牌.你以此法获得的牌不占用手牌上限.',
            hyym_mingjingzhishui: '明镜止水',
            hyym_mingjingzhishui_info: '一名体力值大于你的角色回合结束时,你可以回复1点体力并摸一张牌.',
            hyym_xuanhui: '旋回',
            hyym_xuanhui_info: '当与你净距离不大于2的其他角色受到伤害时,你可以摸一张牌并将伤害转移给自己.',
            hyym_mengliezhuiji: '猛烈追击',
            hyym_mengliezhuiji_info: '锁定技,当你不因【旋回】受到一名其他角色造成的伤害后,你令【明镜止水】无效直到你下回合开始,令其获得<追>标记直到你对其造成伤害.你对有<追>的角色使用单目标伤害牌额外结算一次.',
            hyym_suyou: '溯游',
            hyym_suyou_info: '锁定技,你对男性角色使用【杀】没有距离限制;当你指定/成为一张牌的目标时,若此牌点数与目标角色数/你与目标之一的净距离相同,则你从牌堆中获得x张不同类型的牌(x为你的体力值).',
            hyym_suhui: '溯洄',
            hyym_suhui_info: '当你使用/打出一张【闪】/【无懈可击】后,你可令一名角色获得/重置【暮雨焚心】.',
            hyym_yirenzhisi: '伊人之思',
            hyym_yirenzhisi_info: '游戏开始时,你可指定一名男性角色.你的每个回合结束时,若你的体力值大于其且手牌数小于其,则你将手牌数摸至与其相等(最多摸至五张),你可与其交换手牌.',
            hyym_muyufenxin: '暮雨焚心',
            hyym_muyufenxin_info: '限定技,准备阶段,你可弃置所有手牌,对一名其他角色造成1点伤害并弃置其一张牌.)',
            hyym_cixiongjianwu: '雌雄剑舞',
            hyym_cixiongjianwu_1: '雌雄剑舞',
            hyym_cixiongjianwu_info: '①锁定技,准备阶段,若你没有【雌雄双股剑】,你获得一张【雌雄双股剑】.<p>②当你使用【杀】指定一名角色为目标时,若你已装备【雌雄双股剑】,你可以弃一张牌,令其交给你一张牌,若此牌:为【杀】,则你立即对其使用之;不为【杀】,则你可以将一张牌重铸为【杀】.',
            hyym_zhican: '致残',
            hyym_zhican_info: '当你对一名其他角色造成伤害后,你可随机废除其一个装备栏.',
            hyym_hanshizhiyi: '汉室之裔',
            hyym_hanshizhiyi_info: '主公技,觉醒技,准备阶段,若你体力值不大于2,你令任意名角色各摸一张牌,为【雌雄剑舞】添加以下描述:<③当一名角色使用【杀】造成伤害时,若其势力为蜀/其已装备【雌雄双股剑】,且你体力上限大于1,则你可减1点体力上限,选择一项发动:1、令此伤害+1;2、令其回复1点体力.背水:弃置所有手牌(无牌则不弃).>.',
            hyym_elingqinxi: '恶灵侵袭',
            hyym_elingqinxi_info: '出牌阶段,你可失去1点体力并弃置一名其他角色的一张牌,你获得其一个技能并失去上个以此法获得的技能,直到你的下回合开始,本回合你对其造成伤害时回复1点体力.',
            hyym_guidi: '鬼帝',
            hyym_guidi_info: '主公技,锁定技,游戏开始时,你令所有群、灵势力角色选择:是否失去1点体力,令你从【沧溟之泪】/【血战】/【战神领域】中选择并获得一个未选择过的技能.',
            hyym_qiannengjifa: '潜能激发',
            hyym_qiannengjifa_info: '每阶段每名角色限一次,当一名距离不大于1的角色的至少两张牌因弃置而进入弃牌堆后,你可以令其选择并获得其中x张牌(x为弃牌数的一半且向下取整).',
            hyym_cichang: '磁场',
            hyym_cichang_info: '当你受到一名其他角色造成的伤害后,你可以弃置所有手牌(无手牌则不弃),获得其场上所有牌并可依次使用其中任意张.',
            hyym_maichong: '脉冲',
            hyym_maichong_info: '准备阶段,你可以选择一名其他角色,你随机摸一至五张牌并随机弃等量张牌,视为对其使用x张【杀】(x为你所弃红黑牌数之差绝对值的一半,且向上取整).',
            hyym_xisheng: '牺牲',
            hyym_xisheng_info: '限定技,出牌阶段,你可以选择一名距离不大于1的角色并失去任意点(不超过你的体力上限)体力,其回复等量体力并摸等量牌.',
            hyym_anyingzhiya: '暗影之牙',
            hyym_anyingzhiya_info: '限定技,出牌阶段,你可以选择一名体力值为1的其他角色,你失去2点体力,令其死亡.',
            hyym_jianlianzhan: '剑连斩',
            hyym_jianlianzhan_info: '每回合限一次,一名角色死亡后,你可以对任意名与其同势力的其他角色各造成1点伤害.',
            hyym_guizhan: '鬼斩',
            hyym_guizhan_info: '出牌阶段限一次,你可以用一张手牌与任意名不同势力的其他角色同时拼点,拼赢的角色将势力变更至鬼,拼输的其他角色受到由你选择的一名鬼势力角色造成的1点伤害.',
            hyym_xingyunsuolian: '星云锁链',
            hyym_xingyunsuolian_info: '出牌阶段限一次,你可以弃置两张同花色牌,令至多三名角色依次横置或重置,你可令一名横置角色获得另一名横置角色的一张牌;当你受到属性伤害时,若你处于横置状态,你可防止此伤害.',
            hyym_xinlianwu: '心链舞',
            hyym_xinlianwu_info: '当一名角色受到属性伤害时,若其处于横置状态且是伤害传导的起点,则你可以令至多x名角色(x为场上横置的角色数)依次横置或重置.',
            hyym_aishangzhifeng: '哀殇之风',
            hyym_aishangzhifeng_info: '当一名角色死亡时,你可以从以下选项中选择一项发动:1、依次弃置每名其他角色x张牌(x为已阵亡角色数量);2、若死亡的角色不是你,选择一名其他角色,你与其依次弃置所有牌.',
            hyym_zhongpi: '重劈',
            hyym_zhongpi_info: '当你对一名其他角色造成伤害时,你可以令此伤害+x(x为与其同势力的已阵亡角色数,若其没有手牌,则x改为x+1).',
            hyym_nanmanchongji: '南蛮冲击',
            hyym_nanmanchongji_info: '出牌阶段,你可弃置一张锦囊牌/失去1点体力,视为对一名其他角色使用x张仅指定单一目标的【南蛮入侵】(x为你与其的距离).当你以此法造成伤害后,此技能本阶段失效.',
            hyym_manwangzhanyi: '蛮王战意',
            hyym_manwangzhanyi_info: '觉醒技,当你的血量首次到达2或更低时,直到你的下回合开始,防止你受到的一切伤害,为【南蛮冲击】添加以下描述:<当你使用【南蛮入侵】造成伤害时,你可废除一个装备栏,令伤害值+1.>.',
            hyym_mohunchaosha: '魔魂超杀',
            hyym_mohunchaosha_info: '<p>①当你对一名其他角色每使用两张牌时,你可令其获得1枚<惧>标记,每名角色<惧>的数量上限为4.<p><p>②有<惧>的角色使用/打出牌时,你可声明x种花色并进行一次判定,若你声明的花色包含判定结果,则此牌无效(x为其<惧>数).<p><p>③锁定技,准备阶段,你令全场所有拥有<惧>的角色各移除1枚<惧>,你摸等量牌.<p>',
            hyym_shayikuanglan: '杀意狂澜',
            hyym_shayikuanglan_info: '限定技,一名其他角色回合开始时,你可令其获得3枚<惧>.',
            hyym_youmingzhoufa: '幽冥咒法',
            hyym_youmingzhoufa_info: '当一名角色死亡时,你可令一名没有<惧>的其他角色获得2枚<惧>.',
            hyym_lianlangboshan: '连浪剥山',
            hyym_lianlangboshan_info: '回合结束时,若你本回合造成过至少3点伤害,则你可以进行一个额外的回合.',
            hyym_mowangningshi: '魔王凝视',
            hyym_mowangningshi_info: '出牌阶段开始时,你可以选择一名其他角色,你的下个摸牌阶段结束时,你对其造成x点伤害(x为在此期间其受到的伤害数的一半且向下取整).',
            hyym_shanjizhinu: '闪击之怒',
            hyym_shanjizhinu_info: '摸牌阶段结束时,你可以弃置一张【闪】并视为使用一张【杀】,可以发动一次<后跳跃>:即弃一张牌,获得1点护甲,可以失去1点护甲并视为使用一张【杀】.',
            hyym_benglieji: '迸裂击',
            hyym_benglieji_info: '当你对一名其他角色造成不为有花色的牌的伤害后,你可以弃置其一张牌.',
            hyym_manchongji: '蛮冲击',
            hyym_manchongji_info: '限定技,出牌阶段,你可以失去2点护甲,对一名其他角色造成1点伤害并令其翻面,你可以发动一次<后跳跃>.',
            hyym_zhuangshengmengdie: '庄生梦蝶',
            hyym_zhuangshengmengdie_1: '庄生梦蝶',
            hyym_zhuangshengmengdie_info: '锁定技,游戏开始时,你获得4枚<蝶>标记.当你受到伤害时,若你有<蝶>,你防止之并移除等量<蝶>.当你失去全部<蝶>时,你失去1点体力.当你对体力值不小于你两倍<蝶>数的角色造成伤害后,你获得1枚<蝶>.',
            hyym_daofaziran: '道法自然',
            hyym_daofaziran_info: '当你成为其他角色使用牌的目标时,你可进行一次判定,若花色相同,你取消之.当一名距离不大于1的角色体力值减小后,你可弃一张牌,令其随机视为使用一张【1级攻击药】/【龙极酒】/【地老鼠烟花】.',
            hyym_zhuxingchuixi: '诸星吹息',
            hyym_zhuxingchuixi_info: '出牌阶段限一次,你可询问至多x名其他角色是否交给你一张牌(x为你的<蝶>数).选择<是>的角色摸一张牌,选择<否>的角色横置.',
            hyym_wuweizhiwei: '无为之为',
            hyym_wuweizhiwei_info: '限定技,出牌阶段,你可以移除任意枚<蝶>并移除等量武将牌上的技能,选择等量名距离不大于1且无已废除装备栏的角色,你令其各自废除所有装备栏并摸五张牌,获得以下效果直到其各自下回合结束:1、下等量次造成的伤害+1;2、结束阶段,弃置四张牌.',
            hyym_baizeenyi: '白泽恩遗',
            hyym_baizeenyi_info: '锁定技,你的手牌上限+x(x为你的<蝶>数);当你的体力值首次减少至一半或更少时,你重置所有技能.',
            hyym_sishenliandao: '死神镰刀',
            hyym_sishenliandao_info: '一名其他角色回合结束时,若本回合进入弃牌堆的所有牌的点数之和不超过13,则你可获得其一张牌,令其失去1点体力.',
            hyym_hunge: '魂割',
            hyym_hunge_info: '出牌阶段,你可以弃一张伤害牌,获得场上/牌堆中一张武器牌.',
            hyym_feitang: '飞螳',
            hyym_feitang_info: '出牌阶段,你可以交给一名其他角色一张武器牌并令其使用之,对其造成1点伤害,最后你可令其弃置装备区内的其余牌.',
            hyym_gunshishu: '滚石术',
            hyym_gunshishu_info: '<p>①游戏开始时/有<石>标记的角色死亡时/你击杀一名角色后,若场上的<石>数小于4,你可以令一名没有<石>的其他角色获得<石>.<p><p>②出牌阶段开始时,你可弃两张牌/失去1点护甲,对任意名有<石>的角色各造成1点伤害,同时将所有<石>移动至原位置的上/下家(移动至你或有<石>的角色后,立即再同方向移动一次).<p>',
            hyym_shijiashu: '石甲术',
            hyym_shijiashu_info: '出牌阶段每种类别限一次,你可重铸一张桃源牌并获得1点护甲.',
            hyym_wuxveshenyou: '雾雪神游',
            hyym_wuxveshenyou_info: '锁定技,你不能被翻面;当你成为其他角色牌的目标时,取消之,若你:有牌,你弃一张牌;没有牌,你失去1点体力,且直到你下回合开始,你不能再成为其他角色牌的目标.',
            hyym_shuanghuajianyi: '霜华剑意',
            hyym_shuanghuajianyi_info: '锁定技,出牌阶段开始时,你获得三张<剑器>(牌名含<剑>字的武器牌).若场上有<剑器>,则你手牌中的普通【杀】及<剑器>均视为【冰杀】.',
            hyym_shuangtianjuandi: '霜天卷地',
            hyym_shuangtianjuandi_info: '限定技,出牌阶段:你可失去所有体力值,对任意名背面朝上的其他角色各造成等量冰冻伤害;或令任意名其他角色弃置装备区内的所有牌并弃置等量手牌,此回合结束时你弃置所有牌.',
            hyym_qianbingduanheng: '千冰断横',
            hyym_qianbingduanheng_info: '出牌阶段限一次,若你有至少三张【冰杀】,你可将所有【冰杀】依次对同一名合法角色使用(无次数限制),摸x张牌(x为伤害值),若x为0,其翻面.',
            hyym_lieyangrongjin: '烈阳熔金',
            hyym_lieyangrongjin_info: '你可将装备牌当无视距离且不可被响应的【火杀】使用或打出,摸一张牌.',
            hyym_yangyandaozhen: '阳炎刀阵',
            hyym_yangyandaozhen_info: '出牌阶段开始时,你可弃一张牌,直到你下回合开始,当有角色受到火焰伤害时,若其没有<灼>标记,你可令其获得<灼>.',
            hyym_honglianshanxian: '红莲闪现',
            hyym_honglianshanxian_1: '红莲闪现',
            hyym_honglianshanxian_2: '红莲闪现',
            hyym_honglianshanxian_info: '游戏开始时,你从牌堆中获得一张【闪】.每轮开始时/出牌阶段,你可将任意张【闪】置于武将牌上,称为<莲>.当你使用【杀】指定一名角色为目标时/有角色需要使用或打出【闪】时,你可移去一张<莲>并摸一张牌,令其不可响应此牌/视为该角色使用或打出了一张【闪】.',
            hyym_zhimang: '致盲',
            hyym_zhimangyichang: '盲',
            hyym_zhimangyichang_info: '拥有此标记的角色A使用伤害牌时,进行一次判定,若为黑,则此牌无效.A回合开始时,可移除<盲>并进行一次判定:红色,跳过下个出牌阶段;黑色,跳过下个摸牌阶段.A回合结束后,移除<盲>.',
            hyym_zhimang_info: '当你对一名其他角色造成伤害后,你可弃一张牌,令其获得<盲>标记(异常状态).当一名角色移除<盲>后,你从牌堆中检索一张【闪】并置于<莲>中.',
            hyym_yingkaijue: '英铠诀',
            hyym_yingkaijue_info: '主公技,觉醒技,准备阶段,若你的体力值不大于2,你令所有吴势力角色依次选择是否获得1点护甲并令你从牌堆中检索一张【闪】并置于<莲>中,你可令一名其他势力角色获得<盲>(异常状态).',
            hyym_guanghuiyishan: '光辉一闪',
            hyym_guanghuiyishan_info: '当你使用或打出【闪】时,你可以视为对一名其他角色造成过1点伤害.',
            hyym_zhankong: '斩空',
            hyym_zhankong_info: '回合开始时,你可以弃一张牌,令一名未受伤且手牌数不小于体力值,或有护甲的其他角色弃置装备区内的所有牌.',
            hyym_haolie: '豪烈',
            hyym_haolie_info: '出牌阶段开始时,你可以选择一名其他角色,展示牌堆顶五张牌,你获得其中所有的红色牌,将其余牌置入弃牌堆,其视为依次对你使用x张【杀】(x为其中红色牌的数量),你视为依次对其使用5-x张【杀】.',
            hyym_dicha: '地刹',
            hyym_dicha_info: '出牌阶段限一次,当你使用【杀】或普通锦囊牌指定目标时,你可将至多两名本回合受到过伤害的角色追加为目标(无距离限制).',
            hyym_chiyueshiliuye: '赤月十六夜',
            hyym_chiyueshiliuye_info: '限定技,出牌阶段,你可以对任意名本局游戏中对你造成过伤害的角色各造成1点伤害.',
            hyym_jianwuxidie: '箭舞戏蝶',
            hyym_jianwuxidie_info: '<p>①当一名距离为1的角色受到伤害后,你可令其摸一张牌,将一张牌置于你的武将牌上,称为<蝶>.<p><p>②出牌阶段限一次,你可以将x张<蝶>当【万箭齐发】使用(x为存活角色数的一半且向下取整且至少为2).<p>',
            hyym_zimujian: '子母箭',
            hyym_zimujian_info: '当有角色使用的【万箭齐发】结算完毕后,你可于此牌的目标角色中,选择一名未受到此牌伤害的角色,将一张牌当【杀】对其使用.',
            hyym_qunxingyunluo: '群星陨落',
            hyym_qunxingyunluo_info: '每回合限一次,当有角色死亡后,你可令所有角色失去1点体力.',
            hyym_huimadao: '回马刀',
            hyym_huimadao_info: '当你受到其他角色对你造成的1点伤害后,你可随机使用一张进攻马,若其在你攻击范围内,你可将一张牌当【杀】对其使用.',
            hyym_fengjuancanyun: '风卷残云',
            hyym_fengjuancanyun_info: '出牌阶段,你可弃一张牌,若:x为1,你令一名角色下回合中摸牌阶段摸牌数+2且手牌上限-2;x为2,你可令全场所有装备区内有牌的其他角色弃置一张装备区的牌;x大于2,你声明一种普通锦囊牌名,直到你下回合开始,所有角色不能使用同牌名的牌(x为本回合你此前发动此技能的次数+1).',
            hyym_yanmie: '湮灭',
            hyym_yanmie_info: '一名其他角色回合结束时,若本回合所有角色体力值累计减小的和不小于3,你可令其下回合不能对其他角色使用牌.',
            hyym_tiandishizi: '天地十字',
            hyym_tiandishizi_info: '准备阶段/你造成/受到1点伤害后,你可以随机获得一张点数为10的牌,进行一次判定,若点数大于10,则你手牌上限-1,直到你于弃牌阶段弃置了牌.',
            hyym_fenglai: '风来',
            hyym_fenglai_info: '一名角色于弃牌阶段弃置牌后,你可选择任意名连续的角色(须包含其上家或下家),令其依次随机获得其中一张,将剩余牌置入弃牌堆.',
            hyym_zhaoyang: '朝阳',
            hyym_zhaoyang_info: '准备阶段,你可以令一名角色进行一次判定:红色,其获得1点护甲;黑色,其摸一张牌.',
            hyym_pili: '霹雳',
            hyym_pili_info: '当一名角色失去护甲时,若其未处于濒死状态,你可弃一张牌,令其进行一次判定:黑色,则其对其相邻的另一名由你选择的角色造成1点雷电伤害;红色:其使用的下一张【杀】无距离限制(可累计).',
            hyym_jingtianjidi: '荆天棘地',
            hyym_jingtianjidi_info: '出牌阶段限一次,你可以摸零至两张牌并翻面.每轮限一次,当有角色从正面翻至背面时,你可选择满足一种以下条件的,除其外的所有其他角色,令这些角色翻面:1、与其体力值相等;2、与其手牌数相等;3、与其相邻.你弃置x张牌(x为你选择的角色数).',
            hyym_shixvemoqiang: '嗜血魔枪',
            hyym_shixvemoqiang_info: '当你使用伤害牌A指定单一目标时,你可以弃一张牌,令所有其他角色使用的A的同类型牌对你无效直到下回合结束,进行一次判定,若结果为:♣️️,你弃置其一张牌;♠️️,当此牌造成伤害时,伤害值改为其体力值;♦️️,其获得<盲>标记;♥️️,其获得<乱>标记.',
            hyym_xianglong: '降龙',
            hyym_xianglong_info: '当你对一名其他角色造成伤害后,若其没有<降>标记,则你可以令其获得<降>并回复1点体力.有<降>的角色不能使用牌指定你为目标.结束阶段,你令所有拥有<降>的角色移除<降>.',
            hyym_moguanchongji: '魔贯冲击',
            hyym_moguanchongji_info: '出牌阶段限一次,你可以失去1点体力,视为对一名其他角色使用一张无距离和次数限制且无视护甲的【杀】.若此【杀】未造成伤害,则你可弃置其不同区域内各一张牌.',
            hyym_xingluo: '星落',
            hyym_xingluo_info: '当你失去1点体力后,你可以依次获得至多两名其他角色的各一张牌并令其获得1点护甲.',
            hyym_chongzhen: '冲阵',
            hyym_chongzhen_info: '限定技,出牌阶段,你可将座次移至任意位置.',
            hyym_quanlei: '全垒',
            hyym_quanlei_info: '每名角色限一次,当你对一名其他角色造成伤害后,你可将其座次移至距其最远处.',
            hyym_wushuang: '无双',
            hyym_wushuang_info: '每回合限x(x为你的体力值)次,当你使用牌指定单一目标结算完毕后,你可立即对其一名相邻角色使用一张牌(无距离和次数限制)并摸一张牌.',
            hyym_anxiang: '暗香',
            hyym_anxiang_info: '出牌阶段开始时,你可秘密令一名其他角色获得1枚<暗香>标记(异常状态),有<暗香>的角色受到伤害时,其移去1枚<暗香>并随机弃置两张牌,令此伤害+1.',
            hyym_chuanxinci: '穿心刺',
            hyym_chuanxinci_info: '当你使用【杀】指定目标时,你可进行一次判定,若为黑,此【杀】不可闪避且伤害基数+1;若为红,你可弃一张非基本牌,获得此【杀】.当你一次性造成至少2点伤害时,你可以回复1点体力.',
            hyym_tieqi: '铁骑',
            hyym_tieqi_info: '出牌阶段限一次,你可以失去1点体力并从牌堆中随机获得一张【杀】,指定一名其他角色,你依次对其使用手牌中的所有【杀】(无距离和次数限制).最后,若此技能造成了伤害,你摸一张牌.',
            hyym_xiuluolingyu: '修罗领域',
            hyym_xiuluolingyu_info: '觉醒技,准备阶段,若你的体力值为1,你摸两张牌,且本局游戏中,你的攻击范围永久+1.',
            hyym_xvefulinggou: '血斧灵钩',
            hyym_xvefulinggou_info: '出牌阶段,你可以移除1枚<灵>,获得场上的一张牌.',
            hyym_xvefuxiling: '血斧吸灵',
            hyym_xvefuxiling_info: '锁定技,游戏开始时,你获得1枚<灵>标记,当你造成或受到1点伤害后,你获得1枚<灵>,<灵>的数量上限为4.',
            hyym_fulinghuanxing: '斧灵唤醒',
            hyym_fulinghuanxing_info: '准备阶段,你可以失去1点体力,获得1枚<灵>.结束阶段,你可移除2枚<灵>,令一名其他角色进行一个额外的回合.',
            hyym_huoliquankai: '火力全开',
            hyym_huoliquankai_info: '当你对一名手牌数不大于你的角色造成伤害后,你可以摸一张牌,可立即使用一张牌(无距离和次数限制).',
            hyym_zhanshufangun: '战术翻滚',
            hyym_zhanshufangun_info: '当你成为♦️️牌/点数不小于10的牌的目标时,你可以摸两张牌并取消之.',
            hyym_cangqiongjiguang: '苍穹极光',
            hyym_cangqiongjiguang_info: '出牌阶段限一次,你可以选择一名其他角色并展示牌堆顶三张牌.若其中有花色相同的牌,则其获得<盲>标记,否则你依次对其使用其中所有的伤害牌.结算完毕后,你获得其中的【闪】,将剩余牌置入弃牌堆.',
            hyym_shanguang: '闪光',
            hyym_shanguang_info: '出牌阶段结束时,你可以弃置全部手牌,从牌堆中获得一张【闪】并摸一张牌.',
            hyym_shanhui: '闪回',
            hyym_shanhui_info: '每轮限一次,当你使用或打出一张【闪】后,你可以与你的上上家/下下家交换座次.',
            hyym_fusu: '复苏',
            hyym_fusu_info: '准备阶段,你可弃一张【闪】,令一名角色回复1点体力.',
            hyym_wubu: '五步',
            hyym_wubu_info: '锁定技,当你使用/打出牌后,你获得x枚<步>标记(x为此牌对应所有实体牌的字数之和),若你的<步>数不小于5,则你移去5枚<步>并观看牌堆顶五张牌,选择并获得其中点数之和为5的倍数的任意张牌,将其余牌置入弃牌堆,且若你未以此法获得牌,则你摸一张牌.',
            hyym_lianhong: '连轰',
            hyym_lianhong_info: '当你不因此技能对一名其他角色使用【杀】结算完毕后,若此【杀】未造成伤害,则你可以将任意张牌当【杀】(无次数限制)对其使用,你可重复一次此操作.',
            hyym_yihesu: '一合酥',
            hyym_yihesu_info: '①出牌阶段各限一次,当你需要使用【幽灵内力糖】/【草莓】/【小米酒】时,你可以视为使用之并摸一张牌.<p>②觉醒技,回合开始时,若你体力值为1,你移除【一合酥】①的一个选项,从游戏外获得一张【猫猫神的眷顾】.',
            //'hyym_yihesu_info':'【一合酥】牌库:<br>【幽灵内力糖】:出牌阶段,对一名角色使用,令其摸x张牌(x为其体力值且至多为4)并失去1点体力.<br>【草莓】:此牌可被重铸.出牌阶段,对一名角色使用,其选择一项:1、废除判定区;2、回复一个装备栏.<br>【小米酒】:对一名濒死状态的角色使用,令其将体力回复至1点.<br>【猫猫神的眷顾】:出牌阶段开始时,若你的体力值为1,对自己使用,回复x点体力并摸x张牌,废除x个装备栏(x为场上现存势力数且至多为3).',
            hyym_dasaochu: '大扫除',
            hyym_dasaochu_info: '出牌阶段,你可以弃两张非基本牌/移除【鸡犬升天】中的一个选项,令一名其他角色失去所有因桃源牌带来的增益Buff,并失去所有护甲.',
            //'hyym_dasaochu_info':'可被【大扫除】清除的桃源牌增益Buff包括:【Gp体验卡】(及【G-phone】)、【1级攻击药】、【1级防御药】、【暴走饼干】、【变大变小肉】、【桂花酒】、【红枣粽子】、【活力果】、【鸡蛋粽子】、【金鼎酒】、【龙极酒】、【绿豆粽子】、【女儿红】、【潜行饼干】、【鲜肉粽子】(包括后续效果)、【状元红】、【背包扩展魔卡】、【地老鼠烟花】、【猫猫神的祝福】带来的增益Buff效果.',
            hyym_jiquanshengtian: '鸡犬升天',
            hyym_jiquanshengtian_info: '每轮各限一次,当你受到1点伤害后,你可以弃一张牌,视为使用一张【庆典烟花】/【摔炮】/【糖葫芦爆竹】.',
            //'hyym_jiquanshengtian_info':'【鸡犬升天】牌库:<br>【庆典烟花】:出牌阶段,对自己使用,你随机选择x名其他角色(x为你已损失的体力值且至少为1,不足则全选),你可以对其中任意名角色各造成1点伤害.<br>【摔炮】:出牌阶段,对一名距离为1的其他角色使用,你废除一个装备栏,对其造成1点伤害.<br>【糖葫芦爆竹】:出牌阶段,对一名角色使用,令其随机获得三种不同类型的牌,若其手牌数为全场最多,则其弃一张牌.',
            hyym_huayingxuan: '花影旋',
            hyym_huayingxuan_tag: '花影',
            hyym_huayingxuan_info: '每回合限两次,准备阶段/当你发动武将牌上的其他技能后,你可为一张手牌添加<花影>标记,可令一张手牌视为【刺杀】.当你使用<花影>牌对一名其他角色造成1点伤害后,你可令其获得1枚<桃华>标记.',
            hyym_lingqiangwu: '玲枪舞',
            hyym_lingqiangwu_info: '锁定技,你使用<花影>牌无距离限制,你使用<花影>牌时摸一张牌并令此牌伤害基数+1.',
            hyym_nihuapo: '匿花破',
            hyym_nihuapo_info: '锁定技,当你受到伤害后,你依次选择是否将座次移动至任意位置/令伤害来源获得2枚<桃华>,你不计入距离和座次的计算直到你下回合开始.',
            hyym_huayinfu: '华隐浮',
            hyym_huayinfu_info: '出牌阶段开始时,你可以失去一个武将牌上的技能,依次移除所有角色的<桃华>并弃置其等量牌,依次对其造成1点伤害,并令其本阶段不可响应你使用的牌.',
            hyym_anheizhousha: '暗黑咒杀',
            hyym_anheizhousha_info: '每轮限一次,当你对一名非Boss角色造成伤害时,你可令伤害值改为x(x为其体力值的一半且向上取整).',
            hyym_cishexianjing: '刺蛇陷阱',
            hyym_cishexianjing_info: '结束阶段,你可弃一张牌,直到你的下回合开始,每名角色的准备阶段,你对其造成1点伤害.',
            hyym_miwuxianjing: '迷雾陷阱',
            hyym_miwuxianjing_info: '结束阶段,你可弃一张牌,直到你的下回合开始,每名角色的准备阶段,你弃置其一张牌.',
            hyym_yinguizhiqi: '阴鬼之气',
            hyym_yinguizhiqi_info: '主公技,锁定技,当一名非群/鬼势力角色受到你造成的1点伤害后,其获得1枚<阴>标记;当有<阴>的角色使用牌指定你为目标时,其移除1枚 <阴>,取消之.',
            hyym_yingdun: '影遁',
            hyym_yingdun_info: '锁定技,每回合限一次,当你受到伤害时,若你本回合发动过【刺蛇陷阱】或【迷雾陷阱】,且你没有手牌,则你废除一个装备栏并防止之.',
            hyym_gelie: '割裂',
            hyym_gelieyichang: '裂',
            hyym_gelieyichang_info: '拥有此标记的角色于每轮游戏开始时失去1点体力.',
            hyym_gelie_info: '当你对一名没有<裂>标记的其他角色造成伤害后,你可弃两张同花色牌,令其获得<裂>(异常状态).',
            hyym_fenhun: '分魂',
            hyym_fenhun_info: '出牌阶段,你可失去1点体力/减1点体力上限,令一名其他角色不能对你造成伤害且获得【割裂】,直到其下回合结束.',
            hyym_fujianfa: '伏剑法',
            hyym_fujianfa_info: '主公技,觉醒技,准备阶段,若你的体力值不大于2,你加2点体力上限,选择是否令一名没有<裂>的其他势力角色获得<裂>(异常状态),你令所有拥有<裂>的角色失去1点体力.',
            hyym_hanmang: '寒芒',
            hyym_hanmang_info: '当你使用牌对一名其他角色造成伤害后,你可将座次移至其上/下家.若你此做,本局游戏中,你对其使用牌没有距离限制且无视同花色防具.',
            hyym_pojun: '破军',
            hyym_pojun_info: '锁定技,当你于回合内受到伤害时/距离大于1的角色对你造成伤害时,防止之;当你使用【杀】对一名其他角色首次造成伤害时,直到你下回合开始,其他角色计算与你的距离+1.',
            hyym_zhanshenlingyu: '战神领域',
            hyym_zhanshenlingyu_info: '觉醒技,准备阶段,若你的体力值为1,你回复1点体力,本局游戏中,你的手牌上限永久+1.',
            hyym_yingdong: '影动',
            hyym_yingdong_info: '出牌阶段限一次,你可以将所有手牌置于武将牌上,摸x张牌(x为其中不可使用的牌的数量),结束阶段,你依次使用武将牌上的任意张牌(这些牌造成的伤害均视为无来源的雷电伤害),将其余牌置入弃牌堆.',
            hyym_leijia: '雷甲',
            hyym_leijia_info: '当你/【影动】造成1点雷电伤害时/游戏开始时,你可废除一个装备栏,令一名距离不大于1的角色获得1点护甲.',
            hyym_leibao: '雷爆',
            hyym_leibaoyichang: '静电',
            hyym_leibaoyichang_info: '拥有此标记的角色摸牌阶段开始时,须选择一项:1、摸牌阶段少摸一张牌;2、本回合手牌上限-x(x为<静电>数).',
            hyym_leibao_info: '①当一名其他角色受到你/【影动】造成的1点雷电伤害后,你可令其获得1枚<静电>标记.<p>②每名角色限一次,出牌阶段,你可移除一名<静电>数大于1的其他角色的所有<静电>,并对其造成1点雷电伤害.',
            hyym_hundunshuangfu: '混沌双斧',
            hyym_hundunshuangfu_info: '①锁定技,你对手牌数不大于体力值的角色使用【杀】无距离限制.<p>②当你使用【杀】指定目标后,你可追加一名有<战>的合法目标.',
            hyym_zhanbafang: '战八方',
            hyym_zhanbafang_info: '①出牌阶段开始时,你可以摸八张牌并依次将任意张牌置于等量没有<战>的角色武将牌上(称为<战>),随机弃置8-x张牌(x为本次获得<战>的角色数).<p>②锁定技,有<战>的角色不可响应你使用的牌,且当你对其造成伤害后,你获得其的<战>;出牌阶段内,你不能对没有<战>的角色使用伤害牌.',
            hyym_baonu: '暴怒',
            hyym_baonu_info: '限定技,出牌阶段,你可令本回合内你造成的伤害+1,且每次造成伤害时,你弃一张牌.若你此做,回合结束时,你弃置所有手牌,并获得【血战】.',
            hyym_xvezhan: '血战',
            hyym_xvezhan_info: '当你造成伤害时,你可以失去1点体力并摸一张牌,令伤害值+1.',
            hyym_dixian: '地陷',
            hyym_dixian_info: '出牌阶段限一次,你可以弃一张牌并失去1点体力,对所有其他角色(若你已发动过【暴怒】,则你可以少选择一名目标角色)各造成1点伤害.当一名角色因此受到1点伤害后,其随机弃一张牌,且计算与其他角色的距离+1,直到其下回合结束.',
            hyym_qidong: '启动',
            hyym_qidong_info: '锁定技,若你未于本局游戏中造成过伤害/使用过至少两张伤害牌,你不能使用【杀】;当你使用【杀】时,若你的体力上限大于1且已受伤,你减1点体力上限并摸一张牌;当你使用【杀】造成伤害时,你的手牌上限永久+1.',
            hyym_yingmaomiaozhua: '影猫喵爪',
            hyym_yingmaomiaozhua_info: '当你对一名其他角色使用的【杀】结算完毕后,若其手牌数小于你的体力值,你可以失去1点体力,视为对其使用一张无次数限制的【杀】.',
            hyym_kuangleitianlao: '狂雷天牢',
            hyym_kuangleitianlao_info: '出牌阶段,你可以弃三张(存活角色数为2时改为四张)不同类型的牌,对一名其他角色造成1点(若其未受伤则改为2点)雷电伤害,并令其翻面.若其因此死亡,此技能于此阶段失效.',
            hyym_kuangleilingyu: '狂雷领域',
            hyym_kuangleilingyu_info: '当有角色受到雷电伤害后,你可以和任意名未受伤的其他角色各摸一张牌.',
            hyym_taipingyaoshu: '太平要术',
            hyym_taipingyaoshu_info: '主公技,使命技,当一名角色首次进入濒死状态时,你可令一名群势力角色回复1点体力.<p>成功:当你令一名其他角色脱离濒死状态后,你令至多x(x为场上群势力角色数)名角色获得<天书>标记,为【狂雷领域】添加以下描述:<当一名有<天书>的角色受到伤害时,若此伤害为:雷电伤害,你可以防止之;非雷电伤害,你可以改为雷电伤害.>.<p>失败:一名角色死亡后,若其身份为忠臣,你弃置所有牌,(场上无【魔张角】时)将武将牌替换为【魔张角】,对所有对其造成过伤害的其他角色各造成1点雷电伤害.',
            hyym_moyingguizhua: '魔影鬼爪',
            hyym_moyingguizhua_info: '锁定技,游戏开始时,你将牌堆顶的一张牌置于武将牌上,称为<鬼爪>.',
            hyym_moyingchongji: '魔影冲击',
            hyym_moyingchongji_info: '每当与<鬼爪>同点数的牌A进入弃牌堆时,你可从以下牌中选择一张视为使用之,重铸所有牌:1、 <鬼爪>的同名牌;2、A的同名牌;3、无距离和次数限制的【杀】.',
            hyym_guizhuazhinu: '鬼爪之怒',
            hyym_guizhuazhinu_info: '当你受到伤害后,你可以使用或获得<鬼爪>,将一张牌/牌堆顶一张牌置入<鬼爪>.',
            hyym_douqijinghua: '斗气净化',
            hyym_douqijinghua_info: '准备阶段,你可重铸一张装备牌,清除一名角色的所有异常状态,且x个回合内(x为其体力值+2),若其体力值不大于1,防止其受到的所有伤害及体力流失.:若其已受伤,你可令其回复1点体力;若其判定区内有牌,你可弃置其中任意张.',
            hyym_pojiachongfeng: '破甲冲锋',
            hyym_pojiachongfeng_info: '出牌阶段限一次,当你使用伤害牌指定单一目标时,你可以失去1点体力,令其本回合内所有非锁定技失效,:若其装备区内有牌,你可获得其中一张,令其弃置所有装备区内的牌;若其有护甲,你可以令其护甲失效直到其下回合开始.',
            hyym_chuantouxi: '穿透袭',
            hyym_chuantouxi_info: '<p>①锁定技,你使用牌不可被无效/取消目标,你造成的伤害不可被防止,当你对一名其他角色造成伤害后,直到你下回合开始,当其回复体力时,取消之.<p><p>②锁定技,你对有护甲/装备区内有牌的角色使用牌无距离限制且无视防具且无视护甲,且当你对这些角色造成伤害时,你将伤害改为雷电伤害.<p>',
            hyym_dianzhang: '电障',
            hyym_dianzhang_info: '锁定技,当你造成1点雷电伤害后,你获得1枚<障>标记,<障>的数量上限为2.当你受到伤害时,你移除1枚<障>并防止之.',
            hyym_siwangzhichu: '死亡之触',
            hyym_siwangzhichu_info: '锁定技,准备阶段,若你体力值大于1,则你失去1点体力,直到你的下回合开始:你计算与其他角色的距离-1,其他角色计算与你的距离+1,你对每名角色首次造成的伤害+1,你跳过判定阶段和弃牌阶段,你使用点数属于斐波那契数列的牌不可被响应,你使用点数为字母的牌时摸一张牌并弃一张牌.',
            hyym_liudaopao: '六道炮',
            hyym_liudaopao_info: '每轮限一次,当你于一局游戏中失去第6x(x为正整数)张牌时,你可以选择一名其他角色并减1点体力上限,你对其造成1点伤害,并令其弃三张牌.',
            hyym_shanguanglongya: '闪光龙牙',
            hyym_shanguanglongya_info: '出牌阶段,你可以重铸一张【闪】,视为对一名其他角色使用一张仅指定单一目标的伤害牌(每种牌名限两次).',
            hyym_saoqianjun: '扫千军',
            hyym_saoqianjun_info: '当你不因此技能使用指定单一目标的伤害牌结算完毕后,若此牌未造成伤害,你可视为对目标角色的一名相邻角色使用一张同名牌,你可重复一次此流程.',
            hyym_huimouyixiao: '回眸一笑',
            hyym_huimouyixiao_info: '当一名其他角色对你使用的非装备牌结算完毕后,你可选择是否令其本回合不能再使用同类型牌(异常状态),可将一张牌当同名牌对包含其在内的任意名(不超过额定目标数)角色使用.',
            hyym_longqveanyong: '龙雀暗涌',
            hyym_longqveanyong_info: '当你使用牌A时,你可从以下选项中选择一项发动:1、弃置一张不同花色的牌,将A的花色视为此花色;2、失去1点体力,声明一种其他花色,将A的花色视为此花色,获得A并令此选项于本回合失效.',
            hyym_longqvebadao: '龙雀-拔刀',
            hyym_longqvebadao_info: '锁定技,当你使用/打出一张牌结算完毕后,若你武将牌上没有同花色牌,则你将其置于武将牌上,称为<刀>.当你的<刀>数量达到四张时,你依次使用任意张<刀>,移去所有<刀>.',
            hyym_longqveyuanyue: '龙雀-圆月',
            hyym_longqveyuanyue_info: '出牌阶段限一次,当你于此阶段内,对一名其他角色连续使用三张不同花色的牌时,你可令其翻面.',
            hyym_bingshuangjianwu: '冰霜剑舞',
            hyym_bingshuangjianwu_1: '冰霜剑舞',
            hyym_bingshuangjianwu_info: '①锁定技,准备阶段,若你没有【寒冰剑】,你获得一张【寒冰剑】.<p>②当其他角色因【寒冰剑】/冰冻伤害的【冰冻】效果弃置的牌进入弃牌堆时,你可弃一张牌并获得之.',
            hyym_bingjie: '冰界',
            hyym_bingjie_info: '出牌阶段开始时,你可弃一张牌,选择一名其他角色,直到你下回合开始,其造成/受到伤害后,进行一次判定,若为♠️️,其翻面;若为♣️️,其弃一张牌.(异常状态)',
            hyym_bengzhan: '崩斩',
            hyym_bengzhan_info: '锁定技,你使用【杀】无视护甲.',
            hyym_jiangbing: '降冰',
            hyym_jiangbing_info: '出牌阶段结束时,你可将一张牌当无距离次数限制的冰【杀】使用.',
            hyym_bingjing: '冰镜',
            hyym_bingjing_info: '当你成为其他角色牌的目标时,你可弃一张牌,从牌堆及弃牌堆中检索并使用一张防具牌.',
            hyym_qimenguizhen: '奇门诡阵',
            hyym_qimenguizhen_info: '<p>①锁定技,每轮游戏开始时,你选择并获得<天罡符>中未拥有的一个技能,记录你的体力值,若与上次记录不同,则本轮中,若你的装备区里没有防具牌,你视为装备着【奇门八卦】.(<天罡符>:【雷电符】、【冰封千里】、【怒焰爆发】、【赤阳爆裂】.)<p><p>②当你受到伤害时,你可失去<天罡符>中已拥有的两个技能并防止之.<p>',
            hyym_bafangguifu: '八方鬼缚',
            hyym_bafangguifu_info: '<p>①出牌阶段开始时,你可令【奇门诡阵】于本轮失效,获得一张属性【杀】.<p><p>②锁定技,每当你体力上限减小时,你删除【八方鬼缚】①中一种属性.<p><p>③锁定技,每当你的体力值变化时,你选择并获得<天罡符>中未拥有的一个技能.<p>',
            hyym_leidianfu: '雷电符',
            hyym_leidianfu_info: '当你对一名其他角色造成雷电伤害后,你可失去1点体力,对另一名其他角色造成1点雷电伤害.',
            hyym_bingfengqianli: '冰封千里',
            hyym_bingfengqianli_info: '当你对一名其他角色造成冰冻伤害后,你可令其翻面.',
            hyym_chiyangbaolie: '赤阳爆裂',
            hyym_chiyangbaolie_info: '当你对一名其他角色造成火焰伤害时,你可防止之.若你此做,其下回合结束时,若你在此期间对其造成过伤害,你对其造成2点火焰伤害.',
            hyym_nuyanbaofa: '怒焰爆发',
            hyym_nuyanbaofa_info: '一名其他角色的准备阶段,你可减1点体力上限,对其造成1点火焰伤害.若其因此死亡,则你加1点体力上限.',
            hyym_wuxingyifa: '五行易法',
            hyym_wuxingyifa_info: '每种牌名限一次,当一张牌造成属性伤害后,你可获得之.',
            hyym_kongmingsuo: '孔明锁',
            hyym_kongmingsuo_info: '准备阶段,你可以选择一名其他角色,并选择你的上回合和本回合均未选择过的一个阶段(判定/摸牌/出牌/弃牌阶段),你与其跳过下个此阶段.你可以重复此流程.',
            hyym_douzhuanxingyi: '斗转星移',
            hyym_douzhuanxingyi_info: '结束阶段,你可选择两名角色A和B(其他人不可见,A和B不可均与上回合所选相同),直到你下回合开始,当A第一次受到伤害时,将伤害转移给B.',
            hyym_kongchengji: '空城计',
            hyym_kongchengji_info: '当你受到伤害后,你可以弃置所有牌,回复1点体力,若伤害来源未受伤,你对其造成1点伤害.',
            hyym_feilaikuangxi: '飞来狂袭',
            hyym_feilaikuangxi_info: '当你使用【杀】指定单一目标时,你可以弃置所有手牌(无牌则不弃),将任意名其他角色追加为目标(无距离限制).若你此做,当此【杀】造成伤害时,取消所有目标,你摸一张牌.',
            hyym_liuhuo: '硫火',
            hyym_liuhuo_info: '出牌阶段结束时,你可将一张牌当无距离限制的【火杀】使用.',
            hyym_jingji: '荆棘',
            hyym_jingji_info: '回合结束时,你可秘密选择一名其他角色,直到你下回合开始,当一名角色使用牌指定其为目标时,该角色不能使用/打出/弃置同类型牌直到回合结束.',
            hyym_zaisheng: '再生',
            hyym_zaisheng_info: '锁定技,准备阶段,若你已受伤,你回复1点体力并弃一张牌.',
            hyym_duomaomao: '躲猫猫',
            hyym_duomaomao_info: '<p>①出牌阶段开始时,你可以进行一次<躲猫猫>,若你成功,你摸一张牌并重复此流程,直至失败.<p><p>②每回合限一次,当你成为一名其他角色使用牌的目标时,你可以进行一次<躲猫猫>,若你成功,则取消之.<p>',
            hyym_shenyou: '神佑',
            hyym_shenyou_info: '主公技,限定技,出牌阶段,你可以进行一次<躲猫猫>,选择至多x名其他角色(x为你答对的题数),你与这些角色各获得1枚<佑>标记.有<佑>的角色受到伤害时,移除<佑>并防止之.',
            hyym_yuanling: '怨灵',
            hyym_yuanling_info: '出牌阶段限x次(x为你的体力上限),你可以摸一张牌,选择你的一张牌,你销毁游戏内所有与此牌花色点数均相同的牌.',
            hyym_mingyuan: '鸣冤',
            hyym_mingyuan_info: '当你对一名其他角色造成伤害后,若其体力值大于你,你可令其失去x点体力(x为其与你的体力值之差,且至多为你的体力值).',
            hyym_shenmishangdian: '神秘商店',
            hyym_shenmishangdian_info: '<p>①锁定技,游戏开始时,你令所有其他角色各获得50枚<币>标记,你获得100枚<币>.<p><p>②一名角色的出牌阶段限一次,其可以进行一次<兑换>:即令你展示牌堆顶八张牌,可以按照<价格表>移除对应数量的<币>,依次获得其中任意张牌(<价格表>:基本牌:20枚<币>;锦囊牌:25枚<币>;其他:30枚<币>),将剩余牌置于弃牌堆.<p><p>③一名角色的出牌阶段限一次,其可以进行一次<熔铸>:即弃一张牌,获得x+y枚<币>(x为<价格表>对应<币>数,y为此牌点数).<p>',
            hyym_shuaxinjuanzhou: '刷新卷轴',
            hyym_shuaxinjuanzhou_info: '<p>①锁定技,游戏开始时,你令所有其他角色获得3枚<轴>标记,你获得5枚<轴>标记.<p><p>②一名角色于回合内进行一次<兑换>后,可移除10x枚<币>或1枚<轴>,再次进行一次<兑换>(x为其本回合此前进行过<兑换>的次数).<p>',
            hyym_zhenguishangpin: '珍贵商品',
            hyym_zhenguishangpin_info: '锁定技,当一名角色进行<兑换>令你展示牌堆顶八张牌时,你选择其中两张牌(其他角色不可见).若该角色在本次<兑换>中选择了其中的牌,则其可以进行一次判定:♥️️,其回复1点体力;♦️️,其摸一张牌;♣️️:其弃置一名其他角色的随机一张牌;♠️️:复原武将牌.',
            hyym_kaitian: '开天',
            hyym_kaitian_info: '出牌阶段开始时,你可以从<乾>/<兑>/<离>/<震>/<巽>/<坎>/<艮>/<坤>八种标记之中选择至多两枚标记,分别令等量角色获得之,直到你下回合开始.(<乾>/<震>/<艮>/<坎>:当你成为♥️️/♠️️/♣️️/♦️️(依次对应,下同)牌的目标时,你摸一张牌;<坤>/<巽>/<兑>/<离>:当你成为♥️️/♠️️/♣️️/♦️️牌的目标时,你弃一张牌)',
            hyym_liehun: '猎魂',
            hyym_liehun_info: '锁定技,你视为拥有场上你未拥有的描述最长的技能.',
            hyym_yingyun: '应运',
            hyym_yingyun_info: '锁定技,你使用牌获得以下效果:♣️️牌:可指定目标数+1;♠️️牌:使用时你摸一张牌;♦️️牌:无距离和次数限制;♥️️牌:不可被响应.',
            hyym_tianyin: '天印',
            hyym_tianyin_info: '每种牌名限一次,当你需要使用一张基本牌/锦囊牌时,你可以将一张牌名字数相同的牌当此牌使用.',
            hyym_guifo: '鬼佛',
            hyym_guifo_info: '锁定技,你于每阶段使用的第一张牌的伤害基数/回复基数+1;当你的牌A不因使用进入弃牌堆后,若A与上一张被使用的非虚拟牌的花色相同,你获得A.',
            hyym_fanpu: '返璞',
            hyym_fanpu_info: '出牌阶段每种类别限一次,你可以重铸一张非基本牌,视为使用一张不计入次数的基本牌(每回合每种牌名限一次).',
            hyym_fofa: '佛法',
            hyym_fofa_info: '摸牌阶段,你可以多摸至多x(x为你的体力值)张牌.若你此做,回合结束时,你声明y种花色(y为你本回合因此技能多摸的牌数,且至多为4),弃置这些花色的所有牌.',
            hyym_zhudao: '诛道',
            hyym_zhudao_info: '当你受到伤害后,你可以减1点体力上限,令【佛法】中的x值永久+1,y值永久-1.',
            hyym_xveyin: '雪隐',
            hyym_xveyin_info: '锁定技,当一名角色第一次对你造成伤害后,你获得1点护甲;当一名其他角色死亡后,你获得x点护甲(x为你对其造成过的伤害数).',
            hyym_shuangbao: '霜爆',
            hyym_shuangbao_info: '出牌阶段,你可失去x点护甲,对一名其他角色造成1点冰冻伤害(x为其体力值).',
            hyym_fenji: '焚寂',
            hyym_fenji_info: '锁定技,当你受到1点伤害后,你获得1枚<焚>标记;准备阶段,若你有<焚>,你移除所有<焚>,回复1点体力并摸3x(x为你移除的<焚>数)张牌(你以此法获得的牌不占用手牌上限),此回合结束时,你失去x点体力.',
            hyym_cuidu: '淬毒',
            hyym_cuidu_info: '锁定技,当你因【毒】失去体力时,你改为获得等量护甲;每当有角色的体力值变化后/结束阶段,若其体力值为1/你选择一名体力值为1的其他角色,你与其各获得一张【毒】.',
            hyym_yingu: '阴蛊',
            hyym_yingu_info: '限定技,一名角色的弃牌阶段开始时,你可令其获得两张【毒】.',
            hyym_taixv: '太虚',
            hyym_taixv_info: '当你需要使用【无懈可击】时,你可以废除一个装备栏,视为使用一张【无懈可击】,并从牌堆中随机获得两张锦囊牌,弃一张非锦囊牌.',
            hyym_wanxiang: '万象',
            hyym_wanxiang_info: '当你成为基本牌的目标时,你可以摸一张牌.',
            hyym_qianni: '潜匿',
            hyym_qianni_info: '一名角色回合结束后,若你武将牌正面朝上,你可以进行一个额外的回合,若你此做,你的此回合结束后,你翻面.',
            hyym_ansuan: '暗算',
            hyym_ansuan_info: '一名其他角色的准备阶段,若你武将牌背面朝上,你可以将一张牌当【刺杀】对其使用.当其受到此【刺杀】伤害时,你可以改为令其失去1点体力,你摸一张牌.',
            hyym_fengyue: '风月',
            hyym_fengyue_info: '结束阶段,你可选择一张牌并随机交给一名其他角色,你可以获得其两张牌.',
            hyym_youzou: '游走',
            hyym_youzou_info: '转换技,当一名其他角色使用伤害牌指定目标时,若你不是目标,则你可以:阳:摸一张牌;阴:弃一张牌.',
            hyym_jueshuo: '矍铄',
            hyym_jueshuo_info: '锁定技,结束阶段,你令一名其他角视为对你使用一张【决斗】,在此过程中你可将任意牌当【杀】打出.',
            hyym_keshuai: '克衰',
            hyym_keshuai_info: '锁定技,你的回合外:若你的体力值/手牌数为1,防止你受到的一切伤害/你不能成为牌的目标.',
            hyym_quehuan: '鹊欢',
            hyym_quehuan_info: '当你使用一张未被记录类别的牌时,你可以记录此牌类别,并从牌堆中随机获得一张该类别的牌.当你记录所有类别时,清除所有记录.',
            hyym_jiuwu: '鸠舞',
            hyym_jiuwu_info: '当你造成/受到1点伤害后,你可记录一种【鹊欢】中未记录的牌的类别,并从牌堆中随机获得一张该类别的牌.',
            hyym_tiandi: '天笛',
            hyym_tiandi_info: '出牌阶段限一次,你可以选择一项并令一名角色执行:1、摸x张牌并弃x张牌;2、弃x张牌并摸x张牌(x为其牌数).',
            hyym_qianhun: '牵魂',
            hyym_qianhun_info: '每当一名其他角色获得牌后,若其手牌数大于其体力上限的两倍,则你可以弃一张牌,获得其x张牌(x为其手牌数-体力上限的两倍).',
            hyym_jiaochi: '娇痴',
            hyym_jiaochi_info: '每当一名其他角色一次性获得/失去至少三张牌时,你可以获得其中一张;每当你于摸牌阶段外获得牌时,你可以令一名其他角色将手牌摸至体力值(最多摸至五张).',
            hyym_miyu: '蜜语',
            hyym_miyu_info: '当一名角色脱离濒死状态时,你可以获得其区域内一张牌.若为红色牌,你可令其回复1点体力.',
            hyym_xiyu: '戏浴',
            hyym_xiyu_info: '一名其他角色的出牌阶段开始时,你可以猜测其本阶段使用的牌数,是否超过其当前体力值.此阶段结束时,若你猜中:你获得其两张牌,直到你下回合开始,此技能失效;猜错:其回复1点体力,并将手牌摸至体力值数.',
            hyym_xinao2: '嬉闹',
            hyym_xinao2_info: '锁定技,当你不以此法失去一张牌时,若其点数为:奇数,你摸一张牌;偶数,你弃一张牌/失去1点体力/减1点体力上限/废除一个装备栏.',
            hyym_xianjue: '仙诀',
            hyym_xianjue_info: '锁定技,游戏开始时,你选择一名其他角色并与其获得<诀>标记.有<诀>的角色受到1点伤害后,所有其他有<诀>的角色须依次交给其一张牌并摸一张牌.',
            hyym_randao: '燃道',
            hyym_randao_info: '准备阶段,你可以减1点体力上限并令一名没有<诀>的角色获得<诀>.',
            hyym_guizhen: '归真',
            hyym_guizhen_info: '结束阶段,你可以移除一名其他角色的<诀>并回复1点体力,获得其两张牌并视为对其使用一张【决斗】.',
            hyym_meiyou: '魅诱',
            hyym_meiyou_info: '锁定技,其他角色的出牌阶段开始时,若其手牌数不小于你,则须交给你一张牌.若其体力值和手牌数均不大于你,其可以视为对你使用一张任意类型的【杀】.',
            hyym_liuyi: '流溢',
            hyym_liuyi_info: '出牌阶段,当你使用牌指定目标时,若其与你本阶段此前指定的上一个目标不同,则你可以摸一张牌.',
            hyym_pojian: '破茧',
            hyym_pojian_info: '锁定技,结束阶段,你从牌堆中获得一张♦️️牌;准备阶段,若你手牌中没有以此法获得的牌,你回复1点体力.',
            hyym_ranjin: '燃尽',
            hyym_ranjin_info: '限定技,出牌阶段,你可选择一名角色,除其外的所有角色各交给其一张牌,你废除x个装备栏,并对其造成x点火焰伤害(x为其以此法获得牌数的一半,且向下取整,且至少为1).',
            hyym_huanling: '幻灵',
            hyym_huanling_info: '每回合限一次,每种牌名限一次,你可以将一名角色区域内一张牌当一张基本牌/锦囊牌使用/打出.',
            hyym_fenhua: '焚化',
            hyym_fenhua_info: '锁定技,转换技,回合开始时,你令自己本回合的摸牌阶段摸牌基数/手牌上限为:阳:x/y;阴:y/x(x为你的体力值,y为你已损失的体力值).',
            hyym_liaoyuan: '燎原',
            hyym_liaoyuan_info: '结束阶段,你可以失去1点体力,弃置任意名其他角色区域内各一张牌.',
            hyym_shengyu: '圣浴',
            hyym_shengyu_info: '当你受到1点伤害后,你可以从牌堆中随机获得三种不同字数的牌各一张,弃一张牌.此时若你的手牌数为全场唯一最多,则你须选择一名手牌数全场最少的其他角色,令其摸一张牌.',
            hyym_qvhun: '驱魂',
            hyym_qvhun_info: '出牌阶段,你可将非基本牌当【借刀杀人】使用;当你对一名其他角色使用的【借刀杀人】结算完毕后,你可令其视为对另一名由你选择的角色使用一张无距离限制的【杀】.',
            hyym_tianfa: '天罚',
            hyym_tianfa_info: '锁定技,游戏开始时,你为<乾元>声明两个点数.你声明初始点数后,以及你每次使用牌结算完毕后,<乾元>中的最后两个数会依次执行加、减、乘及取余运算(结果取绝对值).当你使用与<乾元>中运算得数相同点数的牌时,你选择一项:1、摸两张牌;2、对一名其他角色造成1点雷电伤害(每名角色限一次).',
            hyym_chaoci: '超磁',
            hyym_chaoci_info: '限定技,出牌阶段,你可选择一名手牌数与你相等的其他角色,你获得其至多三张牌.',
            hyym_huanyin: '幻荫',
            hyym_huanyin_info: '你可将一张牌当【闪】/【酒】使用或打出,选择一项:1、重铸一张同花色牌;2、令此技能于本轮失效.',
            hyym_kuwei: '枯萎',
            hyym_kuwei_info: '每轮限一次,当一名其他角色于回合外使用基本牌时,你可重置【幻荫】并令此牌无效,并将此牌对应的所有实体牌置于其武将牌上,此回合结束时,其获得之.',
            hyym_yuleicedian: '驭雷策电',
            hyym_yuleicedian_info: '出牌阶段每种字数的牌限一次,你可以重铸一张牌,令一名其他角色选择一项:1、受到你对其造成的1点雷电伤害,本回合不能再成为此技能的目标;2、重铸一张同字数牌,令你视为对其使用一张无距离次数限制的【雷杀】.',
            hyym_yunheshenlei: '云壑深雷',
            hyym_yunheshenlei_info: '当有角色使用【雷杀】/武将牌神势力角色使用【杀】时,你可以令一名角色A摸一张牌,若你不是本回合首次发动此技能,你可对A造成1点雷电伤害.',
            hyym_nufutishan: '怒斧提山',
            hyym_nufutishan_info: '出牌阶段限x次(x为你的体力值),每种牌名限一次,你可将一张牌置于牌堆顶,获得手牌数最多的一名角色区域内的一张牌.若你以此法获得了场上的牌,此技能本轮失效.',
            hyym_nubukedang: '怒不可当',
            hyym_nubukedang_info: '锁定技,每轮限一次,你的回合结束后,你失去1点体力并摸一张牌,进行一个额外的回合.',
            hyym_anyingzhiwu: '暗影之舞',
            hyym_anyingzhiwu_info: '<p>①锁定技,每当你对同一字数的牌第x次执行使用/打出/成为目标的效果时(x为8-字数),你加1点手牌上限和体力上限,获得1枚<舞>标记.<p><p>②当你需要使用/打出一张牌时,你可声明一种牌名,从牌堆中检索一张此牌名牌并使用/打出之(若检索失败则取消后续流程,且此技能本回合失效),移除1枚<舞>.<p>',
            hyym_siji: '伺机',
            hyym_siji_info: '蓄力技(0/5),当你使用伤害牌时,你可消耗1点蓄力值,令此牌伤害基数+1.回合结束时,若你本回合未造成过伤害,你获得1点蓄力值.',
            hyym_tianweileiyin: '天威雷引',
            hyym_tianweileiyin_info: '<p>①限定技,出牌阶段,你可以摸四张牌,将任意张不同花色的牌标记为<天雷>,依次展示并交给等量其他角色.本局游戏中,<天雷>不能被拥有者使用/打出/弃置,且其他玩家手牌中的<天雷>对你可见.<p><p>②出牌阶段,你可选择一名手牌中有<天雷>的其他角色,将其一张<天雷>销毁,对其造成1点雷电伤害并弃置其两张牌.<p>',
            hyym_leiyingbu: '雷影步',
            hyym_leiyingbu_info: '出牌阶段限一次,你可以重铸任意张不同花色的牌,你以此法获得的牌不占用手牌上限且于本回合内均视为【雷杀】.',
            hyym_shengyanliandan: '圣焰连弹',
            hyym_shengyanliandan_info: '当你使用伤害牌时,你可以摸一张牌.',
            hyym_shoumoren: '狩魔人',
            hyym_shoumoren_info: '锁定技,你对武将牌魔势力角色造成的伤害+1;当你对这些角色造成伤害/这些角色对你造成伤害时,你摸一张牌.',
            hyym_kungenxiangjue: '坤艮象诀',
            hyym_kungenxiangjue_info: '锁定技,游戏开始时,你选择一种元素,获得该元素对应的技能:金:【金铠】、【金爆】;木:【木易】、【木疗】;水:【水墨】、【水凝】;火:【火灵】、【火烬】;土:【土遁】、【土柩】.',
            hyym_kungenlvling: '坤艮律令',
            hyym_kungenlvling_info: '锁定技,当你的体力值首次达到1/你首次进入濒死状态时,你回复一个装备栏.',
            hyym_jinkai: '金铠',
            hyym_jinkai_info: '锁定技,出牌阶段开始时,若你有未废除的装备栏,你废除一个装备栏,回复全部体力值并获得1点护甲.',
            hyym_jinbao: '金爆',
            hyym_jinbao_info: '出牌阶段限一次,你可以失去至多x点体力(x为你已废除的装备栏数)并选择等量其他角色,你依次获得这些角色区域内的牌各一张.',
            hyym_muyi: '木易',
            hyym_muyi_info: '每当你受到1点伤害时,你可以令两名角色交换手牌,令其中手牌数较多的一名角色将手牌数弃至x张(x为手牌数较少的角色的手牌数+1).',
            hyym_muliao: '木疗',
            hyym_muliao_info: '当你进入濒死状态时,你可以废除一个装备栏,将体力值回复到1点,摸一张牌.',
            hyym_shuimo: '水墨',
            hyym_shuimo_info: '当一名角色判定牌最终生效前,你可以废除一个装备栏,指定该判定牌的花色和点数,并令任意名角色依次(按选择顺序)从牌堆中获得一张满足此花色及点数的牌.',
            hyym_shuining: '水凝',
            hyym_shuining_info: '出牌阶段开始时,若你有已废除的装备栏,你可以减1点体力上限/弃一张装备牌,回复一个装备栏.',
            hyym_huoling: '火灵',
            hyym_huoling_info: '出牌阶段开始时:若你有未废除的装备栏,你可以废除一个装备栏,令一名角色摸一张牌,并令其攻击范围永久+1,若该角色不是你,且其有已废除的装备栏,其回复一个装备栏;若你所有装备栏均已废除,你可以减1点体力上限,与一名其他角色交换座次.',
            hyym_huojin: '火烬',
            hyym_huojin_info: '锁定技,每当场上有座次发生变化/有角色的装备栏被废除时,你摸一张牌.',
            hyym_tudun: '土遁',
            hyym_tudun_info: '锁定技,准备阶段,你须选择一项发动:1、废除你的一个装备栏,加1点体力上限,回复1点体力;2、回复你的一个装备栏并为之随机匹配一件装备,减1点体力上限.',
            hyym_tujiu: '土柩',
            hyym_tujiu_info: '每当有角色体力上限发生变化时,你可令一名角色失去1点体力并获得1点护甲.',
            hyym_shangwu: '尚武',
            hyym_shangwu_info: '当你使用♣️️牌指定一名其他角色为目标时,你可以获得其一张牌;当你成为♣️️牌的目标时,你可以摸一张牌.',
            hyym_shenfa: '神罚',
            hyym_shenfa_info: '限定技,出牌阶段开始时,你可以令你本阶段内使用的【杀】均视为【神杀】,且使用【杀】的次数上限+1.',
            hyym_longwei: '龙威',
            hyym_longwei_info: '锁定技,游戏开始时,你的体力上限改为其他角色的体力上限和;每轮游戏开始时,若游戏轮数是3的倍数,则你减x点体力上限(x为场上存活的其他角色数).',
            hyym_qinglin: '青鳞',
            hyym_qinglin_info: '当一张牌不因使用进入弃牌堆后,你可失去x点体力,令一名角色获得之(x为此牌点数除以3的余数).若x为0,你弃一张牌.',
            hyym_guibu2: '龟卜',
            hyym_guibu2_info: '出牌阶段开始时,你可以失去1点体力并卜算x(x为你的体力值),视为使用一张【调兵遣将】.最后,若你手牌均同色,你摸一张牌.',
            hyym_taixuan: '太玄',
            hyym_taixuan_info: '锁定技,手牌均为红/黑色的角色视为拥有<朱>/<墨>标记.与拥有<朱>/<墨>标记的角色相邻的角色/其他角色的摸牌阶段摸牌基数+1/-1.',
            hyym_fuzuo: '福祚',
            hyym_fuzuo_info: '你可以将♥️️牌当【五谷丰登】使用.当有角色使用【五谷丰登】时,你可以令此牌对一名角色无效.当有【五谷丰登】展示的牌进入弃牌堆时,你可将其分配给任意角色.',
            hyym_laiyi: '来仪',
            hyym_laiyi_info: '每轮各限一次,一名其他角色于其出牌阶段内获得牌后/你的出牌阶段内有其他角色获得牌后,你可交给其一张牌并令其失去/回复1点体力.若你此做,本回合其不能再对你使用牌或响应你的牌.',
            hyym_huanzhen: '幻阵',
            hyym_huanzhen_info: '转换技,结束阶段,阳:你可以将一张♥️️牌当【乐不思蜀】使用;阴:你可以将一张♣️️牌当【兵粮寸断】使用.',
            hyym_ladu: '腊毒',
            hyym_ladu_info: '牌阶段限一次,你可以选择一名已受伤的其他角色,令其回复1点体力,你失去1点体力,获得其x张牌(x为你的体力值+1).',
            hyym_pushuo: '扑朔',
            hyym_pushuo_info: '<p>①锁定技,回合开始时,你从本扩展随机获得x个技能(本技能除外,x为场上其他角色技能数的平均值,且向下取整),回合结束时你失去以此法获得的技能.<p><p>②锁定技,其他角色回合开始时,你从本扩展随机获得y个技能(本技能除外,y为其技能数),此回合结束时你失去以此法获得的技能.<p>',
            hyym_xilve: '袭掠',
            hyym_xilve_info: '出牌阶段开始时,你可以弃x张牌,选择并获得场上x+1个<出牌阶段限一次>的技能直到此阶段结束.',
            hyym_shunfeng: '顺风',
            hyym_shunfeng_info: '出牌阶段限一次,当你使用牌指定目标时,你可以摸x张牌(x为其现拥有的技能个数).',
            hyym_caiyan: '彩焰',
            hyym_caiyan_info: '<p>①锁定技,游戏开始时,你为<圣坛>中四种花色进行排序.你的每回合结束时,<圣坛>中花色会顺次更替.<p><p>②出牌阶段结束时,你可弃一张符合<圣坛>中花色的牌,对一名其他角色造成1点火焰伤害.<p>',
            hyym_shenghui: '圣辉',
            hyym_shenghui_info: '当一名角色受到伤害后,若其体力值为1,你可以令一名角色摸一张牌.',
            hyym_fenlun: '焚轮',
            hyym_fenlun_info: '游戏开始时,你可弃置一名其他角色的至多x张牌(x为其武将牌上的技能数).',
            hyym_yufeng: '驭风',
            hyym_yufeng_info: '锁定技,游戏开始时,你从【冲飚】/【扶摇】/【浮猋】中选择并获得一个技能.',
            hyym_chongbiao: '冲飚',
            hyym_chongbiao_info: '出牌阶段,你可以摸一张牌并随机重铸一张手牌.若你的手牌数不小于体力上限,则你弃置所有同花色手牌,且本回合不能再发动【冲飚】.',
            hyym_fuyao: '扶摇',
            hyym_fuyao_info: '<p>①锁定技,当你使用非基本牌时,你记录此牌名.<p><p>②出牌阶段,你可以重铸已记录牌名的牌.<p>',
            hyym_fubiao: '浮猋',
            hyym_fubiao_info: '每当有角色使用/打出基本牌/【无懈可击】时,你可令任意名角色重铸一张牌.',
            hyym_leiming: '雷鸣',
            hyym_leiming_info: '出牌阶段各限一次,你可以重铸一张桃源牌/带有应变效果的牌,加1点体力上限.',
            hyym_jiyao: '激耀',
            hyym_jiyao_info: '当一名距离为1以内的角色使用【杀】或普通锦囊牌指定目标时,你可以减1点体力上限,令此牌不可被响应.若你不是本轮第一次发动此技能,你获得此牌.',
            hyym_panti: '磐体',
            hyym_panti_info: '<p>①结束阶段,你可以获得至多x点护甲(x为你的体力值).<p><p>②锁定技,准备阶段,你失去所有护甲并选择一项发动:1、弃置等量牌;2:失去1点体力.<p>',
            hyym_zhengzha: '挣扎',
            hyym_zhengzha_info: '当你/一名其他角色因弃置而失去一张红色/♥️️牌时,你可令其摸一张牌.',
            hyym_duanzu: '断足',
            hyym_duanzu_info: '出牌阶段限一次,你可以失去1点体力,洗牌.',
            hyym_tianlong: '天龙',
            hyym_tianlong_info: '当一名距离为1的其他角色成为另一名其他角色使用牌的目标时,若弃牌堆无同名牌,你可以弃一张牌并取消之,若你弃置了同类型牌,你摸一张牌.',
            hyym_due: '毒颚',
            hyym_due_info: '限定技,出牌阶段,你可以令所有其他角色各减1点体力上限,你失去x点体力(x为场上存活的其他角色数量).',
            hyym_shenqv: '神躯',
            hyym_shenqv_info: '当你成为锦囊牌的目标时,你可以摸一张牌.',
            hyym_siji2: '四极',
            hyym_siji2_info: '每当有角色使用牌指定多名角色为目标时,你可以摸一张牌.',
            hyym_xianzong: '仙踪',
            hyym_xianzong_info: '限定技,出牌阶段,你可以选择并获得【蓬莱】/【方丈】/【瀛洲】中的一个技能.',
            hyym_penglai: '蓬莱',
            hyym_penglai_info: '限定技,出牌阶段,你可以选择并移除武将牌上除【仙踪】外的一个技能,选择一名其他角色,令其移除其武将牌上的一个技能.若其因此移除了武将牌上的所有技能,则你令其获得你移除的技能.',
            hyym_fangzhang: '方丈',
            hyym_fangzhang_info: '限定技,出牌阶段,若你的体力值为1,你可选择任意名于本局游戏中对你造成过伤害,且体力值不小于3,且手牌数不小于体力值的其他角色,你获得这些角色的所有牌,并且令其各自失去体力至2点.',
            hyym_yingzhou: '瀛洲',
            hyym_yingzhou_info: '限定技,出牌阶段,若你未受伤,你可令两名角色交换武将牌(一切状态保留).若你此做,你死亡.',
            hyym_muchun: '沐春',
            hyym_muchun_info: '当有角色执行牌的回复体力效果时,你可弃一张红色牌,令其额外回复1点体力.',
            hyym_shengzi: '圣姿',
            hyym_shengzi_info: '当你使用桃源牌时,你可以摸两张牌.',
            hyym_shuangsheng: '双生',
            hyym_shuangsheng_info: '出牌阶段各限一次,你可以失去1点体力,视为使用一张普通锦囊牌,或弃一张锦囊牌,回复1点体力.',
            hyym_lingyou: '灵佑',
            hyym_lingyou_info: '锁定技,当你成为牌的目标/你的体力值发生变化时,若你的手牌数等于游戏轮数的个位数,取消/防止之.',
            hyym_jvyuan: '巨渊',
            hyym_jvyuan_info: '锁定技,出牌阶段,你使用一张牌后,选择一项发动:1、摸两张牌(以此法获得的牌不计入手牌上限),且本回合不能再使用同类型牌;2、弃一张牌.',
            hyym_yuanqi: '元气',
            hyym_yuanqi_info: '<p>①锁定技,游戏开始时,你获得7枚<气>标记.<p><p>②出牌阶段/结束阶段,你可移除1枚<气>,令一名角色将手牌摸至x张(x为其体力上限且至多为5).<p><p>③锁定技,当你移除所有<气>时,你回复所有体力并令你的手牌上限永久+7.<p>',
            hyym_xianya: '娴雅',
            hyym_xianya_info: '锁定技,当你使用/打出一张牌后,若其为:黑色,你加1点体力上限并回复1点体力;红色,你减1点体力上限.每当你以此法失去1点体力,你获得1枚<伴>标记并摸一张牌.',
            hyym_tonggan: '同甘',
            hyym_tonggan_info: '当一名其他角色受到伤害时,你可移除x枚<伴>(x为其体力值)并防止之.',
            hyym_touxin: '偷心',
            hyym_touxin_info: '当你使用伤害类锦囊牌(每种牌名限一次)或【杀】(每种【杀】限一次)指定目标时,你可以获得其中一名目标角色的两张牌.',
            hyym_bailu: '败露',
            hyym_bailu_info: '锁定技,每当你以正面朝上的形式获得其他角色牌后,你须弃置等量牌.',
            hyym_guibian: '诡辩',
            hyym_guibian_info: '锁定技,当你使用一张锦囊牌指定目标后,若你不是此牌目标,则本局游戏中当你指定/成为同牌名牌的目标时,取消之.',
            hyym_qinfu: '钦服',
            hyym_qinfu_info: '锁定技,每当有牌的目标被取消时,你摸两张牌.',
            hyym_mixin: '密信',
            hyym_mixin_info: '<p>①出牌阶段,当你使用一张牌结算完毕后,若此牌与你本回合使用的牌类型均不同,你可以将其置于武将牌上,称为<信>.<p><p>②锁定技,当你成为其他角色使用牌的目标时,你移去一张 <信>并摸两张牌.<p><p>③锁定技,准备阶段,你移去所有<信>并回复等量体力值.<p>',
            hyym_meiwen: '魅吻',
            hyym_meiwen_info: '限定技,出牌阶段,你可获得一张【草草马之吻】.',
            hyym_qingxin: '倾心',
            hyym_qingxin_info: '当一名距离为1的其他角色受到1点伤害后,你可以摸一张牌,交给其任意张牌,若你给出的牌类型不小于三种,则其回复1点体力并摸一张牌.',
            hyym_sishou: '厮守',
            hyym_sishou_info: '出牌阶段开始时/当一名角色进入濒死状态时,你可减1点体力上限,选择一名角色/该角色,与其各回复1点体力.',
            hyym_haishi: '海誓',
            hyym_haishi_info: '出牌阶段限一次,你可以废除一个装备栏,将所有手牌交给一名其他角色,并令其从牌堆中随机使用一张对应装备牌;其失去该装备牌时,你回复对应装备栏.',
            hyym_yongjue: '永诀',
            hyym_yongjue_info: '限定技,出牌阶段,你可以失去【海誓】,废除所有装备栏,令一名其他角色回复x点体力并摸x张牌(x为你以此法废除的装备栏数),若你此做,本局游戏中,其不能再成为你使用牌的目标.',
            hyym_yuanmie: '缘灭',
            hyym_yuanmie_info: '限定技,一名角色进入濒死状态时,你可令其加1点体力上限,回复所有体力并摸等量牌,其失去所有技能.',
            hyym_tanji: '探机',
            hyym_tanji_info: '出牌阶段限x次(x为此技能等级),你可以弃一张牌并卜算5(卜算时,你获得其中与你所弃牌点数相差1以内的所有牌).',
            hyym_qingshang: '情殇',
            hyym_qingshang_info: '当你受到1点伤害后,你可以升级【探机】,或从牌堆中检索并获得一张装备牌(你可立即使用之).',
            hyym_disha: '地煞',
            hyym_disha_info: '锁定技,当你使用牌指定目标后,所有体力上限与体力值的和不小于x的角色不可响应此牌(x为此牌点数).',
            hyym_zhengyong: '争勇',
            hyym_zhengyong_info: '当一名其他角色于其出牌阶段内获得牌时,若其此前于此阶段内已获得过至少x张牌(x为其体力值),则你可获得之.',
            hyym_guzhi: '孤掷',
            hyym_guzhi_info: '锁定技,准备阶段,你将手牌数摸至x张(x为场上存活角色体力值的最高值),结束阶段,你将手牌数弃至y张(y为场上存活角色体力值的最低值).',
            hyym_qingfu: '倾覆',
            hyym_qingfu_info: '限定技,出牌阶段,你可以摸至多x张牌并获得等量<戾>标记(x为存活角色数),可以将任意张牌交给其他角色(每名角色最多y张,y为其已损失的体力值+1).最后,你获得【遗戾】.',
            hyym_yili: '遗戾',
            hyym_yili_info: '锁定技,摸牌阶段开始时,若你有<戾>,则你移除1枚<戾>,少摸一张牌.',
            hyym_qiqiao: '七巧',
            hyym_qiqiao_info: '当你使用x值(x为此牌点数-7的绝对值)比你使用的上一张牌小的牌时,你可以摸一张牌.',
            hyym_lianli: '连理',
            hyym_lianli_info: '每轮限一次,当一名其他角色A受到角色B造成的伤害后,你可以交给A所有手牌,若你此做,直到你下回合开始,当A对B造成伤害时,你获得B的一张牌(若B没有牌则改为你摸一张牌)并可将其交给A.',
            hyym_aiwan: '哀挽',
            hyym_aiwan_info: '每名角色每轮限一次,当有红色牌因弃置进入弃牌堆后,你可以令一名角色进行一次判定,若为红,其回复1点体力,若为黑,其摸x张牌(x为此次进入弃牌堆的红色牌的数量).',
            hyym_luohun: '落魂',
            hyym_luohun_info: '当一名其他角色使用红色牌指定你为目标时,你可以弃置其一张牌.',
            hyym_xianggua: '相卦',
            hyym_xianggua_info: '<p>锁定技,①你的第一个出牌阶段开始时,你声明一个点数,记为<卦>.<p><p>②当你使用/打出牌后,<卦>+1(K之后为A).<p><p>③当你使用/打出点数为<卦>的牌时,你摸一张牌,加1点体力上限并回复1点体力.<p>',
            hyym_yigua: '易卦',
            hyym_yigua_info: '出牌阶段,你可以减2点体力上限,修改<卦>值.',
            hyym_jiyong: '激勇',
            hyym_jiyong_info: '出牌阶段,你可声明一个本回合未以此法声明过的花色并摸一张牌(此牌不计入本回合手牌上限),若你此做,直到你下回合开始,你不能使用/打出你声明花色的牌.',
            hyym_pojing: '破镜',
            hyym_pojing_info: '限定技,出牌阶段,你可选择一名其他角色,本局游戏中,你与其摸牌阶段摸牌基数永久-1.',
            hyym_jitong: '极恸',
            hyym_jitong_info: '<p>①锁定技,结束阶段,你失去1点体力并随机弃一张牌.<p><p>②当你死亡时,你可以令一名其他角色获得【极恸】.<p>',
            hyym_pianpian: '翩翩',
            hyym_pianpian_info: '锁定技,每当有角色使用/打出牌时,若此牌对应的实体牌中有你未记录的花色,你记录对应花色.当你记录的花色达到四种时,你获得本次事件对应的牌并清除所有记录.',
            hyym_xingmou: '星眸',
            hyym_xingmou_info: '当你成为其他角色使用牌的目标时,你可以交给其一张同类型牌并取消之.',
            hyym_guixian: '鬼弦',
            hyym_guixian_info: '准备阶段,你可以失去1点体力,弃置一名其他角色x张牌(x为你已损失的体力值,不足则全弃)并交给其一张牌.',
            hyym_wange: '挽歌',
            hyym_wange_info: '每名角色限一次,当你进入濒死状态时,你可以令一名角色将一张牌当【酒】对你使用,若其未于本局游戏中获得过你的牌,其下次对你造成伤害+1.',
            hyym_ranqi: '燃萁',
            hyym_ranqi_info: '每种字数的牌限一次,当你使用牌指定一名其他角色为目标时,你可以对其造成1点火焰伤害.',
            hyym_guibu: '鬼步',
            hyym_guibu_info: '锁定技,你的回合内,其他角色技能名长为x(x为其体力值)的技能无效.',
            hyym_dinghun: '定魂',
            hyym_dinghun_info: '锁定技,每当你摸一张牌前,你改为从牌堆中检索并获得一张指定花色的牌.',
            hyym_zishang: '紫殇',
            hyym_zishang_info: '出牌阶段,你可弃置两张同点数牌,若所弃牌花色:不同,则你从牌堆中获得每种花色的牌各一张(每回合限四次);相同,则你摸两张牌,令一名其他角色失去2点体力(若其已受伤,则改为减1点体力上限).',
            hyym_nilin: '逆鳞',
            hyym_nilin_info: '当你受到伤害时,你可令伤害来源选择一项:1、受到你对其造成的x点伤害(x为你与其手牌数之差的绝对值和你与其体力值之差的绝对值中较小的一项);2、防止此伤害.',
            hyym_pailiu: '迫榴',
            hyym_pailiu_info: '转换技,当你使用牌时,阳:你可以摸一张牌,弃置一名其他角色的一张牌;阴:你可以弃一张牌,令一名其他角色摸一张牌.若你和技能目标角色手牌数相同,你再进行一次转换.',
            hyym_baodan: '爆弹',
            hyym_baodan_info: '当你弃置/获得一名其他角色的红色牌时,你可对其造成1点伤害.',
            hyym_jvmo: '巨魔',
            hyym_jvmo_info: '<p>①锁定技,游戏开始时,你的手牌上限永久+4.<p><p>②出牌阶段开始时,若你的手牌上限大于0,你可令手牌上限永久-1,从以下选项中选择一项发动:1、获得全场所有姓名最长的其他角色各一张牌;2、令一名其他角色的手牌上限永久+1;3、将手牌摸至手牌上限;4、视为使用一张基本牌/普通锦囊牌.<p>',
            hyym_guiyin: '诡隐',
            hyym_guiyin_info: '锁定技,字数大于x的牌对你无效(x为你的体力值).',
            hyym_chebu: '掣步',
            hyym_chebu_info: '一名角色的准备阶段,你可以选择一项发动:1、失去任意点体力值,获得等量护甲,并令其弃一张同字数的牌;2、失去任意点护甲,回复等量体力值,并令其从牌堆检索并获得一张同字数的牌.',
            hyym_kuangbei: '狂悖',
            hyym_kuangbei_info: '锁定技,你手牌中的基本/锦囊/装备/桃源牌均视为【杀】/【决斗】/【无中生有】/【桃】.',
            hyym_pofu: '破釜',
            hyym_pofu_info: '出牌阶段限一次,你可以拼点:没赢的角色须被对方废除一个装备栏.当你造成/受到伤害后,重置【破釜】.',
            hyym_cuiling: '淬灵',
            hyym_cuiling_info: '准备阶段,你可与场上体力值最小/大的一名角色交换体力值.若你此做,结束阶段,你与场上体力值最大/小的一名角色交换体力值.',
            hyym_guihun: '归魂',
            hyym_guihun_info: '当一名其他角色于其回合内对你使用第x张牌时,你可获得其一张牌(x为你的体力值).',
            hyym_juanli: '狷戾',
            hyym_juanli_info: '当你受到一名其他角色对你造成的伤害后,你可获得其所有牌,其视为对你使用x张无视防具的【杀】(x为你以此法获得的牌数的一半,且向下取整).',
            hyym_shuangfeng: '双锋',
            hyym_shuangfeng_info: '出牌阶段开始时,你可选择一名体力上限大于1且已受伤的其他角色,你与其各自减1点体力上限并从牌堆中获得两张同点数牌.',
            hyym_xunqing: '殉情',
            hyym_xunqing_info: '当一名其他角色的体力上限减小1点后,你可减1点体力上限并摸一张牌,令其加1点体力上限.',
            hyym_huyi: '虎翼',
            hyym_huyi_info: '锁定技,当你使用/打出一张牌时,若其点数为:A,你的攻击范围永久+1;J,你的手牌上限永久+1;Q,你的体力上限+1;K,你的摸牌阶段摸牌基数永久+1.',
            hyym_dianhu: '电弧',
            hyym_dianhu_info: '<p>①出牌阶段开始时,你可选择一项直到此阶段结束:1、当你使用牌时,若此牌字数大于你此阶段使用的上一张牌,你摸一张牌;2、当你使用牌时,若此牌字数小于你此阶段使用的上一张牌,你摸一张牌.<p><p>②出牌阶段结束时,若你于本阶段使用了至少三张牌,且字数严格递增/递减,你可对一名其他角色造成1点雷电伤害.<p>',
            hyym_fangdian: '放电',
            hyym_fangdian_info: '每种牌名限一次,每名角色限一次,当你使用非基本牌时,若你于本局游戏中,已使用过同牌名的牌,则你可对一名其他角色造成2点雷电伤害.',
            hyym_mojing: '魔经',
            hyym_mojing_info: '锁定技,游戏开始时,你从【食气】/【返神】/【堪舆】/【辟谷】中选择并获得一个技能.',
            hyym_shiqi: '食气',
            hyym_shiqi_info: '<p>①锁定技,有未被你记录点数的牌进入弃牌堆时,你摸一张牌(此牌不计入手牌上限)并记录该点数.<p><p>②每种点数限一次,出牌阶段,你可弃一张牌并清除对应点数记录.<p>',
            hyym_fanshen: '返神',
            hyym_fanshen_info: '每种点数限一次,当你使用/打出一张牌时,你可获得之(此牌不计入手牌上限).',
            hyym_kanyu: '堪舆',
            hyym_kanyu_info: '每种点数限一次,当你成为其他角色使用牌的目标时,你可进行一次判定,若花色与此牌不同,你取消并获得之(此牌不计入手牌上限).',
            hyym_bigu: '辟谷',
            hyym_bigu_info: '锁定技,你跳过摸牌阶段;每名角色的准备阶段,你声明一种你未声明过的花色/点数/牌的类别/字数,从牌堆中检索一张满足条件的牌,选择一项:1、使用此牌(目标须合法);2、将此牌置入弃牌堆.)',
            hyym_cangsheng: '苍生',
            hyym_cangsheng_info: '主公技,出牌阶段每名角色限一次,你可以令一名鬼势力角色重铸一张牌.若其没有【净化】,其获得【净化】.',
            hyym_meimo: '魅魔',
            hyym_meimo_info: '锁定技,当你失去体力时,你改为由一名你选择的其他角色失去等量体力值.',
            hyym_shehun: '摄魂',
            hyym_shehun_info: '当你受到1点伤害后,你可与伤害来源拼点,没赢的角色失去1点体力.若双方拼点牌花色/点数相同,你回复1点体力.',
            hyym_zhuliu: '逐流',
            hyym_zhuliu_info: '当你造成/受到伤害后,若受伤角色/伤害来源的势力与你不同,你可将势力更改为与其相同.',
            hyym_huilu: '回禄',
            hyym_huilu_info: '转换技,锁定技,当你使用牌指定目标时,若其中有目标的势力首字母位序:阳:大于你;阴:不大于你,你摸x张牌(x为满足条件的目标数).当且仅当你使用牌结算完毕后,进行一次转换.',
            hyym_jianxia: '奸黠',
            hyym_jianxia_info: '出牌阶段限一次,你可以翻面;当你翻面时,你可以获得至多两名其他角色的各一张牌.',
            hyym_guilei: '诡雷',
            hyym_guilei_info: '出牌阶段开始时,你可令任意名其他角色选择,是否令你对其造成1点雷电伤害.选是的角色依次在伤害结算完毕后与你各摸一张牌(若因此进入濒死状态,则改为各摸两张牌).',
            hyym_wugu: '巫蛊',
            hyym_wugu_info: '锁定技,你的回合内,当你使用一张手牌时,你重铸所有其他花色的手牌.',
            hyym_wuling: '舞灵',
            hyym_wuling_info: '当你失去一张牌后,若其花色为:♠️️,你可令一名其他角色获得之;♣️️,你可弃置一名其他角色的一张牌;♥️️,你可令一名已受伤的其他角色交给你一张牌并回复1点体力;♦️️(每回合限一次),你可令任意名角色重铸一张牌.',
            hyym_daowu: '刀舞',
            hyym_daowu_info: '出牌阶段开始时,你可重铸一张牌,依次选择至多x(x为此牌字数)项发动:1、令一名手牌数不小于你的其他角色交给你一张牌;2:弃置一名手牌数不大于你的其他角色的一张牌;3、对一名手牌数等于你的其他角色造成1点伤害.',
            hyym_shenwu: '神武',
            hyym_shenwu_info: '回合结束时,若你本回合失去过至少三张牌,且花色均不相同,你可以失去1点体力,从牌堆中获得每种花色的牌各一张.',
            hyym_jiying: '疾影',
            hyym_jiying_info: '锁定技,你的回合内,当你使用一张牌时,你摸四张牌并弃四张牌,若你所弃牌均为同一/不同花色,你摸一张牌.',
            hyym_xunying: '迅影',
            hyym_xunying_info: '出牌阶段限一次,当你使用普通锦囊牌指定单一目标时,你可弃任意张牌,为之增加等量目标(无距离限制).',
            hyym_jianwu: '剑舞',
            hyym_jianwu_info: '出牌阶段限一次,当你使用【杀】指定目标时,你可废除一个装备栏,为之增加任意个目标(无距离限制),并令之无视防具.',
            hyym_guiqiao: '归鞘',
            hyym_guiqiao_info: '准备阶段,你可以令你和一名其他角色的各一个武将牌上的技能(锁定技、宗族技、【归鞘】除外)于本回合失效.',
            hyym_zhanbei: '战备',
            hyym_zhanbei_info: '锁定技,一轮游戏开始时,你摸x张牌并弃x张牌(x为游戏轮数的个位数).',
            hyym_lvezhen: '掠阵',
            hyym_lvezhen_info: '其他角色出牌阶段开始时,其可以交给你所有手牌,并令你交给其等量牌.若你交给其的牌中有点数相等的牌,其摸一张牌.',
            hyym_madu: '麻毒',
            hyym_madu_info: '出牌阶段开始时,你可进行一次判定(此判定牌生效前,你可打出一张牌代替之),若为基本牌,你将其置于武将牌上(称为<麻>)并重复此流程.当一名角色A使用基本牌指定与你距离为1的角色为目标时,你可移去三张<麻>,摸一张牌并取消之,令A失去1点体力.',
            hyym_liezhen: '烈鸩',
            hyym_liezhen_info: '每名角色限一次,当你受到一名其他角色对你造成的伤害后,你可减1点体力上限,令其选择一项:1、减1点体力上限;2、弃置所有牌;3、将三张牌当<麻>置于你的武将牌上.',
            hyym_hanchao: '寒潮',
            hyym_hanchao_info: '出牌阶段开始时,你可对一名其他角色造成1点冰冻伤害.若你此做,本阶段中当你首次使用一种花色的牌时,你摸一张牌并交给其一张牌A,令其本阶段不能再使用与A同字数的牌.',
            hyym_shuangjiang: '霜降',
            hyym_shuangjiang_info: '每轮每名角色限一次,当一名其他角色于回合外获得牌后,你可以弃置其每个区域各一张牌.',
            hyym_yonglie: '勇烈',
            hyym_yonglie_info: '<p>①锁定技,当你失去一张牌时,你获得1枚<勇>标记.<p><p>②当你使用一张伤害牌指定目标时,你可移除3枚<勇>,令此牌不可被响应且伤害+1.<p><p>③当你使用一张非伤害类普通锦囊牌结算完毕后,你可移除3枚<勇>,令一名其他角色再次使用此牌(不可被响应).<p>',
            hyym_jinlan: '金兰',
            hyym_jinlan_info: '准备阶段/结束阶段,你可重铸一张牌A,并令所有其他角色重铸一张牌,你获得所有其重铸牌中A的同类型牌并弃置x张牌(x为你获得的牌数-1).',
            hyym_zhenglv: '整旅',
            hyym_zhenglv_info: '限定技,游戏开始时/出牌阶段,你可选择任意个装备牌副类别,并依次令等量名角色从牌堆中检索并使用一张对应类别的牌.',
            hyym_lizu: '厉卒',
            hyym_lizu_info: '一名装备区内有牌的角色出牌阶段开始时,你可令其本阶段内获得以下效果:1、手牌上限大于0时使用【杀】无次数限制;2、造成伤害后,本回合手牌上限-1;3、击杀角色后,令你重置【整旅】且此效果本局游戏中对其失效.',
            hyym_jiwu: '极武',
            hyym_jiwu_info: '出牌阶段限两次,你可以视为使用一张普通锦囊牌并记录牌名(你不能使用手牌中已记录牌名的牌).当你于回合外成为已记录牌名的牌的目标时,清除对应记录.',
            hyym_guzhou: '蛊咒',
            hyym_guzhou_info: '准备阶段/结束阶段,你可选择一项,令所有角色执行:1、摸一张牌;2、由你弃一张牌.执行完毕后,你可选择一名角色,令所有手牌数与其相等的角色再执行一次相同选项.最后,若场上所有角色手牌数相等,你重置【魔甲】.',
            hyym_mojia: '魔甲',
            hyym_mojia_info: '限定技,出牌阶段,你可令任意名手牌数相等的角色获得1点护甲.',
            hyym_guisuan: '诡算',
            hyym_guisuan_info: '准备阶段,你可以卜算x(x为场上红色牌数与黑色牌数中的较小值,且至少为1),并可将其中任意张牌置入弃牌堆.',
            hyym_moyun: '魔运',
            hyym_moyun_info: '锁定技,摸牌阶段,你改为摸x张牌(x为牌堆剩余牌数除以5的余数+1).',
            hyym_xvebao: '雪暴',
            hyym_xvebao_info: '出牌阶段每名角色限x次(x为其体力值),你可以弃置一名其他角色一张牌,并令其摸一张牌,当你以此法弃置一名角色的牌后,若你此阶段已以此法弃置过同点数牌,则你可再弃置其一张牌.',
            hyym_ninghan: '凝寒',
            hyym_ninghan_info: '回合内限x次(x为你的体力值),当有♠️️牌因弃置进入弃牌堆时,你可以获得之.',
            hyym_guihuo: '鬼火',
            hyym_guihuo_info: '出牌阶段,你可将任意牌当【火攻】使用,且当你因【火攻】造成1点伤害时,你摸一张牌;结束阶段,本回合因【鬼火】受到过伤害的角色可对你造成1点火焰伤害.',
            hyym_hanchi: '熯炽',
            hyym_hanchi_info: '每当有角色受到火焰伤害/回复体力后,你可令一名角色弃/摸一张牌.',
            hyym_boming: '搏命',
            hyym_boming_info: '锁定技,出牌阶段开始时,你失去1点体力,摸x张牌;出牌阶段结束时,若你于本阶段使用过至少x张牌,你回复1点体力(x为场上体力值大于你的角色数).',
            hyym_liexi: '烈袭',
            hyym_liexi_info: '出牌阶段限一次,你可以将一张牌当【过河拆桥】使用,获得弃牌堆中你此次弃置的同花色牌.',
            hyym_lieji: '烈姬',
            hyym_lieji_info: '<p>锁定技,①出牌阶段,当你造成伤害时,若你:没有<烈>标记,你获得之;有<烈>,则移除之,且本回合【烈姬】失效.<p><p>②当你使用牌时,若你有<烈>,你摸一张牌.<p><p>③锁定技,结束阶段,若你有<烈>,移除之.<p>',
            hyym_guyong: '孤勇',
            hyym_guyong_info: '当你受到伤害后,若你没有<烈>,你可以废除一个装备栏,获得<烈>.',
            hyym_longxi: '龙息',
            hyym_longxi_info: '出牌阶段每名角色限一次,你可以对一名其他角色造成1点伤害,并令其获得1枚<息>标记.有<息>的角色对你使用牌无距离和次数限制,且这些角色对你造成伤害时,移除所有<息>并令伤害加等量值.',
            hyym_juemou: '绝谋',
            hyym_juemou_info: '结束阶段,你可令一名角色获得2点护甲,若你此做,直到你下回合开始,其每次受到伤害后,失去1点体力.',
            hyym_guijue: '鬼诀',
            hyym_guijue_info: '出牌阶段限一次,你可以将所有手牌交给一名其他角色并摸等量牌,若你此做,回合结束时,你将所有以此法获得的牌置入弃牌堆.',
            hyym_kaojun: '犒军',
            hyym_kaojun_info: '当你于出牌阶段摸牌后,你可以交给一名其他角色一张牌,从牌堆中获得一张同类型牌.',
            hyym_fuying: '附影',
            hyym_fuying_info: '<p>①锁定技,游戏开始时,你选择一名其他角色,令你与其获得<影>标记.有<影>的角色A攻击范围内的角色,均视为在另一名有<影>的角色B的攻击范围内.<p><p>②当A于一回合内对一名角色首次使用非装备牌结算完毕后,B可以视为对目标角色使用一张同名牌.<p>',
            hyym_shihun: '噬魂',
            hyym_shihun_info: '锁定技,另一名有<影>的角色死亡后,你获得其所有技能.',
            hyym_ezang: '恶赃',
            hyym_ezang_info: '锁定技,你的手牌上限+x(x为你手牌中的花色数).',
            hyym_jianhua: '奸猾',
            hyym_jianhua_info: '每当有角色的体力值/护甲数发生变化时,你可以重铸一张牌.若此牌点数不大于其体力值,你摸一张牌.',
            hyym_mofu: '魔符',
            hyym_mofu_info: '出牌阶段,你可将一张点数大于你手牌上限且不可使用的手牌当任意普通锦囊牌(每回合每种牌名限一次)使用.',
            hyym_zaolie: '躁烈',
            hyym_zaolie_info: '锁定技,一轮游戏开始时,你弃置所有手牌/失去1点体力,摸体力值张牌.',
            hyym_zhengfeng: '争锋',
            hyym_zhengfeng_info: '一名其他角色回合结束时,你可与其拼点,赢的角色视为对没赢的角色使用一张【决斗】.',
            hyym_meiying: '魅影',
            hyym_meiying_info: '当你指定/成为锦囊牌的目标时,你可弃一张牌,将牌堆中所有同名牌置入弃牌堆.',
            hyym_fengdu: '酆都',
            hyym_fengdu_info: '当你/一名其他角色使用牌结算完毕后,若牌堆中没有同名牌,你可重铸一张牌,摸两张牌/对其造成1点伤害.',
            hyym_huixi: '回袭',
            hyym_huixi_info: '<p>①锁定技,当一名没有<袭>标记的其他角色对你造成伤害时,其获得<袭>.<p><p>②出牌阶段,你可以令一名有<袭>的其他角色移除<袭>,你获得其一张牌并视为对其使用一张【决斗】.<p>',
            hyym_yinfeng: '银锋',
            hyym_yinfeng_info: '一名其他角色的结束阶段,你可以视为对其使用一张无视防具和距离的【杀】,令其对你造成1点伤害.',
            hyym_xvemu: '雪幕',
            hyym_xvemu_info: '回合结束时,你可令任意名角色获得<雪幕>标记.当一名有<雪幕>的角色受到伤害时,防止之,你令所有拥有<雪幕>的角色中,体力值大于其的失去1点体力,最后移除所有<雪幕>.回合开始时,你移除所有<雪幕>.',
            hyym_bingqiao: '冰桥',
            hyym_bingqiao_info: '有<雪幕>的角色出牌阶段限一次,其可以将一张牌交给另一名有<雪幕>的角色,摸一张牌.',
            hyym_qishang: '七殇',
            hyym_qishang_info: '锁定技,游戏开始时,你获得7枚<殇>标记.游戏开始/回合开始/回合结束时,你选择一枚<殇>,你视为拥有其对应技能直至下次发动【七殇】(<壹>:【天枢】、【贪狼】;<贰>:【天璇】、【巨门】;<叁>:【天玑】、【禄存】;<肆>:【天权】、【文曲】;<伍>:【玉衡】、【廉贞】;<陆>:【开阳】、【武曲】;<柒>:【摇光】、【破军】).',
            hyym_xingyun: '星陨',
            hyym_xingyun_info: '锁定技,当你进入濒死状态时,你移除1枚<殇>,将体力回复至1点并摸一张牌;你的手牌上限等于<殇>数.',
            hyym_tianshu: '天枢',
            hyym_tianshu_info: '出牌阶段结束时,你可获得弃牌堆中任意张于此阶段进入的牌.',
            hyym_tanlang: '贪狼',
            hyym_tanlang_info: '弃牌阶段结束时,若你于此阶段弃置的牌均为同一花色,则你可摸等量牌.',
            hyym_tianxuan: '天璇',
            hyym_tianxuan_info: '一名距离为1的角色使用/打出【闪】响应一张牌时,你可令其摸两张牌.若你此做,其须额外使用/打出一张【闪】响应此牌.',
            hyym_jvmen: '巨门',
            hyym_jvmen_info: '一名距离为1的角色使用【杀】指定目标时,你可令其弃两张牌,并令此牌无视防具且不可被响应.',
            hyym_tianji: '天玑',
            hyym_tianji_info: '一名距离为1的角色于回合外使用/打出基本牌A时,你可以摸一张牌,可以交给其一张牌B.若B为与A不同牌名的基本牌,则其弃置B并摸两张牌.',
            hyym_lucun: '禄存',
            hyym_lucun_info: '你的回合内,当一名角色一次性获得至少两张牌时,你可以选择一项发动:1、摸一张牌;2、交给其一张牌;3、获得其一张牌.',
            hyym_tianquan: '天权',
            hyym_tianquan_info: '出牌阶段开始时,你可以弃置一种颜色的所有手牌,摸等量牌.',
            hyym_wenqv: '文曲',
            hyym_wenqv_info: '当你弃置一张牌时,你可以令一名角色重铸一张牌.',
            hyym_yuheng: '玉衡',
            hyym_yuheng_info: '每阶段限一次,当有牌被抵消时,你可以摸一张牌.',
            hyym_lianzhen: '廉贞',
            hyym_lianzhen_info: '结束阶段,你可将任意张牌当指定等量目标的【万箭齐发】使用.',
            hyym_kaiyang: '开阳',
            hyym_kaiyang_info: '锁定技,你的手牌中字数为2的牌均视为【桃】,字数为3/5的牌均视为【酒】.',
            hyym_wuqv: '武曲',
            hyym_wuqv_info: '当你使用/打出一张基本牌时,若其为【杀】,你可将其置于牌堆顶,并令其不计入本阶段使用次数;若其不为【杀】,你可以令当前回合角色选择一项:1、令你摸x张牌(x为此牌对应实体牌的字数);2、失去1点体力.',
            hyym_yaoguang: '摇光',
            hyym_yaoguang_info: '每回合结束时,若你于本回合造成/受到过伤害,则你可进行一个额外的出牌/摸牌阶段.',
            hyym_pojun2: '破军',
            hyym_pojun2_info: '你的摸牌/出牌阶段开始时,你可以视为对一名手牌数及体力值均大于你的角色使用一张【决斗】.',
            hyym_caiyun: '财运',
            hyym_caiyun_info: '当你使用牌/成为其他角色牌的目标时,若牌堆里的牌数为6的倍数,你从牌堆中检索并获得一张♥️️牌.',
            hyym_modao: '魔道',
            hyym_modao_info: '出牌阶段每名角色限一次,你可以将一张♥️️牌置于牌堆底,令一名其他角色选择一项:1、交给你一张♥️️牌;2、直到你下回合开始,其抵消【杀】时须额外使用两张【闪】.',
            hyym_yuhai: '欲海',
            hyym_yuhai_info: '锁定技,出牌阶段开始时,你的手牌上限永久-1;当一名角色进入濒死状态时,你的手牌上限永久+1.',
            hyym_jiaokuai: '狡狯',
            hyym_jiaokuai_info: '当你弃置的牌进入弃牌堆时,你可使用其中一张,视为使用一张普通锦囊牌.',
            hyym_mingzhu: '冥主',
            hyym_mingzhu_info: '游戏开始时/当你造成伤害后,你可从<冰><雪>、<烈><火>、<雷><电>中选择一组,可从本扩展中随机三个包含你所选组字样的技能中选择一个获得并移除该组.',
            hyym_miyi: '密移',
            hyym_miyi_info: '每回合每种花色限一次,当你使用一张牌A时,你可获得一名其他角色的至多两张牌B(C),并另交给等量牌D(E).若A~E中有点数相同的牌,你摸一张牌.',
            hyym_modao2: '魔盗',
            hyym_modao2_info: '限定技,结束阶段,你可依次获得任意名其他角色的共计至多x张牌(x为本回合你发动过【密移】的次数).',
            hyym_huanyi: '幻移',
            hyym_huanyi_info: '出牌阶段,你可弃一张不为【杀】的基本牌,获得1点护甲.',
            hyym_shunying: '瞬影',
            hyym_shunying_info: '出牌阶段,你可失去1点护甲,视为使用一张无次数限制的【杀】.',
            hyym_modi: '魔帝',
            hyym_modi_info: '出牌阶段限两次,你可以<魔化>一张牌.(<魔化>等级上限为4.<魔化>牌根据其类别获得以下效果:基本牌:此牌进入弃牌堆时,你获得之,此牌<魔化>等级-1;锦囊牌:一名其他角色使用此牌时,其选择弃x张牌/交给你一张牌(x为此牌<魔化>等级,下同);装备牌:一名角色使用此牌时,其摸x张牌并弃x-1张牌;桃源牌:一名角色使用此牌时,其失去x点体力并获得等量护甲.)',
            hyym_ronghun: '融魂',
            hyym_ronghun_info: '出牌阶段每名角色限一次,你可以令一名其他角色交给你一张牌,你交给其一张牌.',
            hyym_mingshang: '冥商',
            hyym_mingshang_info: '<p>①锁定技,游戏开始时,你获得3000枚<冥币>标记.<p><p>②每回合限一次,当一张牌进入弃牌堆时,若你的<冥币>数不小于其点数,你可获得之,令<冥币>数修改为x(x为原<冥币>数除以该点数的商,且向下取整).<p>',
            hyym_yuxie: '鬻邪',
            hyym_yuxie_info: '每回合限一次,当你造成/受到一张牌的伤害时,你可令<冥币>数乘x(x为此牌点数).',
            hyym_longwu: '龙舞',
            hyym_longwu_info: '出牌阶段,若你的手牌数不大于体力值,你可以重铸所有手牌.若你重铸的牌中,有至少两张牌满足花色/类型/点数中有至少两项相同,你摸一张牌,否则你弃一张牌.',
            hyym_guixin: '皈心',
            hyym_guixin_info: '限定技,出牌阶段,你可以从弃牌堆中选择并获得点数和不大于x的任意张不同点数的牌(x为本局游戏中你获得过的牌的牌名数),修改【龙舞】.',
            hyym_longwugai: '龙舞•改',
            hyym_longwugai_info: '出牌阶段,若你的手牌数不大于体力值,你可以重铸所有手牌.若你摸到的牌中,有本局游戏中你此前未获得过的牌名的牌,你摸一张牌,否则你弃一张牌.',
            hyym_jiuquan: '九泉',
            hyym_jiuquan_info: '当你受到1点伤害后,你可废除一个装备栏,从<阴><魔><鬼><魅><魂><灵><幻><暗><影>中选择并移除一项,从本扩展中随机三个含有所选字样的技能中选择一个获得.',
            hyym_jinzhou: '禁咒',
            hyym_jinzhou_info: '回合结束后,你可废除一个装备栏,执行一个额外的回合,且此回合开始时,你可令一名其他角色对你造成1点伤害.',
            hyym_liance: '连策',
            hyym_liance_info: '出牌阶段开始时,你可选择所有自你上回合开始后受到过伤害/对你造成过伤害的其他角色,你依次与这些角色进行一次对策:若你对策成功,你摸两张牌.',
            hyym_guifu: '鬼符',
            hyym_guifu_info: '转换技,阳:当有角色受到火焰伤害后,你可卜算3,摸一张牌,并将一张牌置于武将牌上,称为<符>;阴:当有角色受到雷电伤害后,你可获得<符>及所有其他角色区域内同点数牌.',
            hyym_mozhao: '魔诏',
            hyym_mozhao_info: '当有角色受到非属性伤害时,你可弃一张牌,修改此伤害属性.',
            hyym_qvyi: '取义',
            hyym_qvyi_info: '准备阶段,你可失去1点体力,令你/一名没有<义>标记的角色获得1枚<义>.有<义>的角色摸牌阶段摸牌基数+x(x为其<义>数).',
            hyym_yuling: '驭灵',
            hyym_yuling_info: '每回合限两次,当你需要使用/打出一张基本牌时,你可以废除一名角色的判定区并获得其一张牌,视为你使用/打出此牌.',
            hyym_tuohun: '托魂',
            hyym_tuohun_info: '当有角色进入濒死状态时,你可以回复至多两名角色的判定区.',
            hyym_qinmu: '侵牟',
            hyym_qinmu_info: '当一名角色使用一张牌结算完毕后,你可选择一项发动:1、使用一张同点数牌,摸两张牌;2、弃置一张同点数牌,获得其一张牌/对其造成1点伤害.',
            hyym_chengwei: '赪尾',
            hyym_chengwei_info: '锁定技,一轮游戏开始时/有角色死亡后,你声明一个点数,本局游戏内此点数牌不计入你的手牌上限.',
            hyym_daohun: '刀魂',
            hyym_daohun_info: '<p>锁定技,①游戏开始时,你获得3枚<魂>标记.你的手牌上限+ x(x为<魂>的数量).<p><p>②当你造成1点伤害后,你移除1枚<魂>并摸一张牌.<p><p>③当你受到伤害时,你防止之并获得等量<魂>.<p><p>④当你的<魂>数达到7时,你死亡.<p>',
            hyym_qianfan: '千帆',
            hyym_qianfan_info: '锁定技,每当你造成/受到1点伤害后,你将牌堆顶的一/三张牌置于武将牌上,称为<帆>.',
            hyym_jilang: '激浪',
            hyym_jilang_info: '限定技,你可于合适的时机视为使用一张普通锦囊牌,失去【千帆】,获得【奋楫】,最后你可以发动一次【奋楫】.',
            hyym_fenji2: '奋楫',
            hyym_fenji2_info: '一名其他角色回合开始时/出牌阶段,你可选择并获得任意张<帆>.',
            hyym_suiying: '随影',
            hyym_suiying_info: '锁定技,当你的手牌数小于x时,你将手牌数摸至x(x为你未废除的装备栏数).',
            hyym_guimai: '鬼脉',
            hyym_guimai_info: '锁定技,当你造成伤害后,若你有未废除的装备栏,你废除一个装备栏/失去1点体力.',
            hyym_shenshi: '神使',
            hyym_shenshi_info: '锁定技,当你使用一张牌时,若场上:有同花色牌,你弃置所有场上同花色牌,并令对应角色摸两倍数量的牌;无同花色牌,你选择一名角色,从装备牌/延时锦囊牌中选择其对应区域中无牌的一项,检索一张牌并置入其对应区域.',
            hyym_mozhou: '魔胄',
            hyym_mozhou_info: '出出牌阶段限一次,你可以废除一个有牌的装备栏,令任意名角色摸一张牌,你可获得其中任意名角色场上的所有牌.',
            hyym_shixin: '噬心',
            hyym_shixin_info: '锁定技,当你造成1点伤害后,你获得1点护甲.',
            hyym_canli: '残戾',
            hyym_canli_info: '当你受到1点伤害时,你可以失去1点体力/护甲,摸五张牌.',
            hyym_moci: '魔磁',
            hyym_moci_info: '出牌阶段,你可失去1点体力,弃置任意名角色区域内共计至多两张牌.当你以此法弃置的两张同花色牌进入弃牌堆时,你选择并获得其中一张.',
            hyym_fenlei: '忿雷',
            hyym_fenlei_info: '结束阶段,你可以弃x张牌,对一名其他角色造成x点雷电伤害(x为本回合进入弃牌堆的装备牌数).',
            hyym_mingsi: '冥司',
            hyym_mingsi_info: '出牌阶段开始时,你可以失去1点体力并清除【汲灵】记录,可以令一名没有<冥>标记的其他角色获得<冥>,有<冥>的角色判定牌生效前,你可将其花色按以下组合互换:♠️️～♥️️;♦️️～♣️️.',
            hyym_jiling: '汲灵',
            hyym_jiling_info: '出牌阶段结束时,你可弃任意张牌并令等量其他角色进行一次判定,你依次获得判定结果花色未记录的角色区域内一张牌,并记录其结果花色.',
            hyym_fulong: '斧龙',
            hyym_fulong_info: '当你指定/成为点数不大于你体力值的牌的目标时,你可令此牌不可被响应/取消之.',
            hyym_wudao: '武道',
            hyym_wudao_info: '当你抵消/被抵消牌时,你可以摸两张牌.',
            hyym_wuluan: '舞鸾',
            hyym_wuluan_info: '一轮游戏开始时,你可以减1点体力上限,从本扩展中随机三个含有<舞>字样的技能中选择一个获得.',
            hyym_duren: '毒刃',
            hyym_duren_info: '当你对一名其他角色造成伤害后/你于一回合中首次使用牌指定一名其他角色为目标时,若其<蝎毒>标记数小于10,你可令其获得1枚<蝎毒>.',
            hyym_jinghong: '惊鸿',
            hyym_jinghong_info: '锁定技,游戏开始时,你从本扩展中随机三个描述含有<本扩展>字样的其他技能中选择两个获得.',
            hyym_qijue: '奇诀',
            hyym_qijue_info: '游戏开始时,你可以弃任意张牌,从本扩展中随机等量个含有<策><谋>字样的技能(技能亮出后,你可弃一张牌并刷新技能)中选择一至两个获得.',
            hyym_moli: '茉莉',
            hyym_moli_info: '出牌阶段开始时,你可弃置任意张手牌并摸等量牌,以任意顺序,依次将手牌中一种花色的所有牌(本回合以此技能重铸获得的牌除外)执行以下选项:1、交给任意名其他角色;2、置于武将牌上,并于回合结束时获得之;3、重铸为装备牌;4、重铸为锦囊牌.',
            hyym_cimei: '刺玫',
            hyym_cimei_info: '锁定技,游戏开始时,你令从下家逆时针开始的每一位其他角色依次交替失去1点体力/弃一张牌.',
            hyym_foying: '佛影',
            hyym_foying_info: '准备阶段,你可令一名角色获得1枚<佛影>标记.有<佛影>的角色使用/打出基本牌时,移除1枚<佛影>,若此牌为:杀:无效之,你令其回复1点体力并复原武将牌;闪:其本回合不能使用/打出牌,你获得其一张牌;酒:你令其将手牌摸至体力上限(至多摸五张);桃:你令其弃置所有手牌.若此牌不属于以上牌名,或其此前于本局游戏中未使用/打出过同名牌,你可再令一名角色获得1枚<佛影>.',
            hyym_hunxin: '魂心',
            hyym_hunxin_info: '每回合限一次,你可将一张非基本牌当任意基本牌使用或打出.',
            hyym_liangchu: '粮储',
            hyym_liangchu_info: '出牌阶段开始时,你可将任意张牌置于武将牌上,称为<粮>,你可获得任意张<粮>.',
            hyym_shimeng: '食梦',
            hyym_shimeng_info: '准备阶段,你可移去十张不同点数的<粮>并摸五张牌,依次对每名其他角色执行一项:1、令其摸两张牌并回复1点体力;2、弃置其两张牌(不足则全弃),并令其失去1点体力.',
            hyym_ranhun: '燃魂',
            hyym_ranhun_info: '出牌阶段,当你使用牌时,你可以执行并移除以下一项,摸两张牌:1、令你本回合使用牌可指定目标数-1;2、令你本回合使用牌次数上限-1;3、令你本回合攻击距离-1;4、令你本回合手牌上限-1;5、令你本回合与其他角色距离+1;6、废除一个装备栏,并令本回合手牌上限+1.出牌阶段结束时,回复你已移除的选项.',
            hyym_fenling: '焚灵',
            hyym_fenling_info: '当有角色进入濒死状态时,你可以删除【燃魂】中的一个选项,令一名角色摸两张牌.',
            hyym_xiongwei: '熊威',
            hyym_xiongwei_info: '出牌阶段结束时,你可废除一个装备栏,选择检索一张【兵粮寸断】/【乐不思蜀】并使用之.',
            hyym_shouling: '兽灵',
            hyym_shouling_info: '一名角色回合结束时,若你的手牌数不大于x,你可以摸至多x张牌(x为你未废除的装备栏数-己方阵营存活角色数,且至少为1).',
            hyym_guilong: '鬼龙',
            hyym_guilong_info: '锁定技,游戏开始时,你获得本扩展中所有含有<龙>字样的技能(【龙威】除外),且当你发动以此法获得的技能后,失去之.',
            hyym_huiyang: '回阳',
            hyym_huiyang_info: '当你进入濒死状态时,你可从<神>、<圣>中选择并移除一项,从本扩展中随机三个含有所选字样的技能中选择一个获得,并将体力值回复至1.当你以此法移除所有选项时,你失去所有含有<龙>字样的技能.',
            hyym_qianying: '千影',
            hyym_qianying_info: '出牌阶段开始时,你可依次获得每名其他角色区域内各一张牌,依次交给每名其他角色各一张牌.',
            hyym_juenian: '绝念',
            hyym_juenian_info: '结束阶段,你可弃置任意张牌,若你本回合累积失去过三种类型的牌,你回复1点体力,并将手牌数摸至体力上限.',
            hyym_cuimo: '淬魔',
            hyym_cuimo_info: '出牌阶段开始时,你可以选择任意名其他角色及其所有手牌,直到你下回合开始,被你选择的牌均视为🃏且🃏,且被你选择的角色每次受到伤害时,你弃一张牌,改为令其失去等量体力值.',
            hyym_yinling: '阴灵',
            hyym_yinling_info: '一名其他角色弃牌阶段结束时,若其未于本阶段弃置同花色牌,你可废除一个装备栏,视为对其使用一张【刺杀】.若此【刺杀】未造成伤害,则你于本回合结束后进行一个额外的回合.',
            hyym_guiyu: '鬼狱',
            hyym_guiyu_info: '每名角色限一次,当一名其他角色失去体力后,你可令其于下一个回合开始时执行一个额外的弃牌阶段.',
            hyym_mogua: '魔卦',
            hyym_mogua_info: '一名角色的准备阶段,你可弃一张牌,令其卜算x并摸一张牌(x为其体力上限).若其手牌数大于体力值,你摸一张牌.',
            hyym_shanying: '闪影',
            hyym_shanying_info: '锁定技,你手牌中的【闪】均视为【无懈可击】,你手牌中的【无懈可击】均视为【闪】.你的【无懈可击】和【闪】不占用手牌上限.',
            hyym_zhenhun: '贞魂',
            hyym_zhenhun_info: '当你成为一名其他角色使用【杀】/普通锦囊牌的目标时,你可令此牌不可被响应,若你此做,结算完毕后你视为对其使用任意一张普通锦囊牌/【杀】.',
            hyym_huilan: '蕙兰',
            hyym_huilan_info: '每回合限一次,当你成为其他角色牌的目标时,你可以取消之.',
            hyym_fengwu: '凤舞',
            hyym_fengwu_info: '每回合限一次,当有角色受到伤害后,你可以摸一张牌并回复1点体力.',
            hyym_pianwu: '翩舞',
            hyym_pianwu_info: '锁定技,你的手牌中,字数为3的牌均视为【铁锁连环】,字数为4的牌均视为【无懈可击】,字数大于4的牌均视为【无中生有】.',
            hyym_tenglao: '藤牢',
            hyym_tenglao_info: '锁定技,当你使用【无懈可击】抵消一张牌的效果后,本局游戏中此牌名牌对你无效.',
            hyym_sheshen2: '慑神',
            hyym_sheshen2_info: '锁定技,若一名其他角色进入过濒死状态/因造成伤害而使任何角色进入过濒死状态,则其不能响应你使用的牌.',
            hyym_longchui: '龙锤',
            hyym_longchui_info: '结束阶段,你可以对任意名本回合受到过伤害的其他角色各造成1点伤害,摸等量牌.',
            hyym_jiwang: '棘网',
            hyym_jiwang_info: '每轮每名角色限一次,当一名角色于回合外失去的牌进入弃牌堆时,你可令其获得其中的一张牌,你获得其余牌.',
            hyym_tengbian: '藤鞭',
            hyym_tengbian_info: '回合结束时,你可随机令x名其他角色(x为此回合内进入弃牌堆的牌的花色数,不足则全选)选择一项:1、令你弃置其两张牌;2、受到由你造成的1点伤害.',
            hyym_jianshan: '熸煽',
            hyym_jianshan_info: '一名角色的结束阶段,你可声明一个本回合其指定过你为目标的牌的牌名并摸一张牌,令其视为对你选择的合法目标使用一张同名牌.',
            hyym_yingliao: '影疗',
            hyym_yingliao_info: '当一名角色受到锦囊牌造成的伤害后,你可弃一张牌,令其回复等同于伤害值的体力.',
            hyym_canjie: '残节',
            hyym_canjie_info: '当你进入濒死状态时,你可令一名其他角色回复1点体力并摸一张牌.',
            hyym_ningsu: '凝酥',
            hyym_ningsu_info: '锁定技,准备阶段,你从牌堆中检索并使用至多x(x为你的体力值)张不同副类别的装备牌并失去x点体力.',
            hyym_miniang: '蜜酿',
            hyym_miniang_info: '你的装备牌可于回合内当【酒】,回合外当【桃】使用;当一名角色使用/弃置【桃】/【酒】时,你可摸一张牌.',
            hyym_zhenxiu: '珍馐',
            hyym_zhenxiu_info: '当你脱离濒死状态后,你可视为使用一张普通锦囊牌.',
            hyym_miece: '灭策',
            hyym_miece_info: '出牌阶段,你可选择一名装备区内牌数等于体力值的角色,将其装备区内所有牌当任意普通锦囊牌使用.若你是本回合第一次发动此技能,你令一名角色从牌堆中检索并使用一张装备牌.',
            hyym_mopao: '魔袍',
            hyym_mopao_info: '出牌阶段限一次,你可以失去1点体力,令至多两名角色从牌堆中检索并使用一张装备牌.',
            hyym_tafa: '挞伐',
            hyym_tafa_info: '每种牌名限一次,出牌阶段每名角色限一次,你可视为对一名其他角色使用一张基本牌/普通锦囊牌(仅指定单一目标,下同),其可视为对你使用一张同名牌.',
            hyym_zhencang: '珍藏',
            hyym_zhencang_info: '你的回合内,有角色进入濒死状态时,你可视为使用一张【道具袋】.',
            hyym_hanxun: '酣醺',
            hyym_hanxun_info: '锁定技,每回合限一次,每种类型的牌限一次,当你使用牌指定目标时,你可以视为使用一张无次数限制的【酒】.',
            hyym_moli2: '墨醴',
            hyym_moli2_info: '锁定技,当有角色使用【酒】时,你摸一张牌,且手牌上限+1直到你的下回合结束.',
            hyym_zuixian: '醉仙',
            hyym_zuixian_info: '当你成为伤害牌的目标时,你可重铸任意张牌.',
            hyym_chixing: '痴醒',
            hyym_chixing_info: '觉醒技,当你进入濒死状态时,你失去【醉仙】并重置【酣醺】,加1点体力上限并回复所有体力,令伤害来源翻面.',
            hyym_yaohao: '妖嗥',
            hyym_yaohao_info: '准备阶段,你可以摸两张牌,检索一张延时锦囊并置入判定区;判定阶段,你区域内的延时锦囊生效后,你可以跳过本回合弃牌阶段;弃牌阶段开始前,你可以摸两张牌,可以依次使用任意张手牌,且你以此法使用牌时,弃一张牌;结束阶段,若你本回合跳过了弃牌阶段/未于弃牌阶段弃置牌,你可重铸任意张非基本牌.',
            hyym_hongfu: '鸿福',
            hyym_hongfu_info: '摸牌阶段开始时,你可以少摸任意张牌并获得等量<福>标记.出牌阶段,你可以移去1枚<福>,将一张牌当【无中生有】使用.',
            hyym_taiyun: '泰运',
            hyym_taiyun_info: '锁定技,当你受到伤害/脱离濒死状态后,你的下个摸牌阶段摸牌基数+2.',
            hyym_jianyu: '箭雨',
            hyym_jianyu_info: '出牌阶段开始时,你可以弃至多两张牌,令等量名其他角色依次视为使用一张【万箭齐发】(此【万箭齐发】即将造成的伤害视为失去体力).',
            hyym_hunyi: '魂毅',
            hyym_hunyi_info: '锁定技,你不会失去体力.',
            hyym_yinglian: '影镰',
            hyym_yinglian_info: '出牌阶段开始时,你可废除一个装备栏,对一名其他角色造成1点伤害.若其因此死亡,你令【轮回】中的x值永久+1.',
            hyym_lunhui: '轮回',
            hyym_lunhui_info: '锁定技,结束阶段,你摸x张牌(x为游戏轮数每一位数除以4的余数之和).',
            hyym_manbao: '蛮暴',
            hyym_manbao_info: '锁定技,你使用牌不可被响应;你不能响应其他角色使用的牌.',
            hyym_jiaoli: '狡戾',
            hyym_jiaoli_info: '锁定技,当你受到一名其他角色造成的伤害后,你视为拥有其所有技能直到你下回合结束,且本回合防止你受到的伤害.',
            hyym_yingwu: '影舞',
            hyym_yingwu_info: '出牌阶段开始时,你可以弃一张牌,若你此做,本阶段内每种点数限一次,你可以重铸一张牌.',
            hyym_diebu: '蝶步',
            hyym_diebu_info: '当你使用/打出牌时,若场上有同点数牌,你可以摸一张牌.',
            hyym_yundu: '韫匵',
            hyym_yundu_info: '当其他角色使用的【无懈可击】进入弃牌堆后,你可以获得之.',
            hyym_panmou: '叛谋',
            hyym_panmou_info: '当一名角色A对另一名角色B使用的单一目标牌被【无懈可击】抵消后,你可废除一个装备栏.若你此做,此牌结算完毕后,B视为对A使用一张同名牌.',
            hyym_aoni: '傲睨',
            hyym_aoni_info: '锁定技,准备阶段,你回复所有体力;结束阶段,你将体力值调整为2点.',
            hyym_xunxin: '寻衅',
            hyym_xunxin_info: '出牌阶段限一次,你可以用一张手牌与至多三名其他角色同时拼点,赢的角色视为对没赢的角色使用一张【决斗】.此过程中,其他角色的拼点牌亮出后,点数+x(x为你选择拼点的角色数).',
            hyym_gangbi: '刚愎',
            hyym_gangbi_info: '锁定技,出牌阶段每名角色限一次,当你对一名其他角色造成伤害/拼点赢时,你摸一张牌,且本回合你的手牌上限+1.',
            hyym_jifen: '激忿',
            hyym_jifen_info: '出牌阶段开始时,你可以摸两张牌.若你此做,此阶段结束时,根据这两张牌中位于弃牌堆的牌数,执行以下效果:零张:你本回合跳过弃牌阶段;一张:你获得其中位于弃牌堆的牌,并可使用之;两张:你的下回合使用牌无次数和距离限制.',
            hyym_yinjian: '隐箭',
            hyym_yinjian_info: '锁定技,当你对一名角色造成伤害时,若其未受伤/已受伤,则伤害值+1/至多为1.',
            hyym_moqiang: '魔枪',
            hyym_moqiang_info: '锁定技,你于出牌阶段使用的第二张牌不可被响应且伤害值+1.',
            hyym_zhubei: '逐北',
            hyym_zhubei_info: '当你使用【杀】造成伤害后,你可以摸一张牌.',
            hyym_hujia: '虎甲',
            hyym_hujia_info: '每轮每种花色限一次,当你成为其他角色牌的目标时,你可取消之.',
            hyym_yihui: '熠辉',
            hyym_yihui_info: '每轮每名角色限一次,当你对一名角色发动【虎甲】时,你可以摸一张牌.',
            hyym_suozhen: '锁阵',
            hyym_suozhen_info: '锁定技,当一回合中首次有角色受到属性伤害后,你获得一张【铁锁连环】.你的【铁锁连环】不占用手牌上限且不可被抵消.',
            hyym_faling: '法灵',
            hyym_faling_info: '每回合限一次,当你使用♥️️牌/♠️️牌指定目标时,你可对其中任意名各造成1点任意属性伤害.',
            hyym_yaoqi: '妖泣',
            hyym_yaoqi_info: '当一名角色使用【杀】指定目标时,你可弃一张牌,令此杀不可被响应.当此【杀】造成大于1的伤害时,你可以获得任意名目标角色各一张牌.',
            hyym_meihun: '魅魂',
            hyym_meihun_info: '限定技,当你获得一名其他角色的牌后,你可令其选择一项:1、失去1点体力且本轮所有非锁定技失效;2、不能使用/打出/弃置牌直到其下回合开始.',
            hyym_huantong: '幻瞳',
            hyym_huantong_info: '准备阶段,你可视为使用一张本局游戏中未被使用过的普通锦囊牌(若均已使用过则改为桃源牌).',
            hyym_yaoce: '妖策',
            hyym_yaoce_info: '一轮游戏开始时,你可从本扩展中随机三个描述包含<检索>字样的技能中选择一个,用其替换你上个以此法获得的技能.',
            hyym_jvying: '飓影',
            hyym_jvying_info: '锁定技,每回合各限一次,当你造成/受到伤害后,你获得1枚<飓>标记.',
            hyym_yisui: '易髓',
            hyym_yisui_info: '当你使用/打出♣️️牌时,你可以与一名等手牌数的角色交换手牌,摸一张牌.',
            hyym_mobian: '魔鞭',
            hyym_mobian_info: '一名其他角色出牌阶段结束时,若其本阶段获得过超过x张牌(x为其体力值),你可与其各失去1点体力.',
            hyym_liuyin: '六引',
            hyym_liuyin_info: '当你失去1点体力后,你可令一名其他角色交给你所有牌,你交给其等量牌并摸一张牌.',
            hyym_yanzhen: '岩阵',
            hyym_yanzhen_info: '一名体力值不小于你的角色回合结束时,你可以从牌堆中检索并使用一张装备牌,弃置其一张牌.',
            hyym_shabao: '沙暴',
            hyym_shabao_info: '每轮限一次,一名角色的准备阶段,你可以摸x张牌并弃x张牌(x为场上牌数的一半,且向下取整),可弃置其装备区内与你弃置牌的同花色牌.',
            hyym_shuanghun: '双魂',
            hyym_shuanghun_info: '锁定技,若你上一张使用的牌为黑/红色牌,则你的手牌均视为红/黑色牌.',
            hyym_jianling: '剑灵',
            hyym_jianling_info: '锁定技,你使用红色牌无次数限制且无视防具,你使用黑色牌时摸一张牌.',
            hyym_tianyin: '天引',
            hyym_tianyin_info: '每回合各限一次,当一名角色指定/成为牌A的目标时,若其座位号等于A的点数,则你可以获得A.',
            hyym_tongfen: '同焚',
            hyym_tongfen_info: '锁定技,游戏开始时,你选择一名其他角色,你与其获得<同焚>标记.有<同焚>的角色不因此技能受到伤害后,另一名有<同焚>的角色受到等量伤害.',
            hyym_yinhuo: '引火',
            hyym_yinhuo_info: '每轮限一次,当一名没有<同焚>的角色受到伤害时,其可将此伤害转移给你并改为火焰伤害,你可以对一名除其外的其他角色造成1点火焰伤害.',
            hyym_cuiyan: '淬焰',
            hyym_cuiyan_info: '锁定技,每名角色限一次,有角色受到火焰伤害后,若你已受伤,你回复1点体力.',
            hyym_xuanming: '玄名',
            hyym_xuanming_info: '当你指定/成为【杀】的目标时,你可以令至多x(x为你的体力值)名角色猜测此【杀】能否造成伤害.此【杀】结算完毕后,猜对的角色摸两张牌并弃两张牌,猜错的角色由你弃置其两张牌(不足则全弃)并摸两张牌.',
            hyym_juntong: '君统',
            hyym_juntong_info: '出牌阶段开始时,你可令所有角色依次展示一张手牌,你获得这些牌并依次分配给每名角色各一张.',
            hyym_rangfa: '攘伐',
            hyym_rangfa_info: '当你使用一张普通锦囊牌指定单一目标时,你可追加任意名体力值小于你的角色为目标,弃x张牌(x为你追加的目标数-1).',
            hyym_biying: '碧影',
            hyym_biying_info: '锁定技,游戏开始时,你减任意点体力上限,并从本扩展中随机等量个描述含有<字数>字样的其他技能中选择一至两个获得,若你以此法获得了两个技能,则你再减1点体力上限.',
            hyym_yingzhao: '影诏',
            hyym_yingzhao_info: '出牌阶段开始时,你可以摸一张牌,将一张手牌标记为<诏>.若你此做,本回合你不能使用/打出/弃置与此<诏>颜色相同的牌.你可以将<诏>当任意普通锦囊牌使用.',
            hyym_huanbian: '幻鞭',
            hyym_huanbian_info: '出牌阶段限x次(x为你的体力值),若你的手牌数不为1,你可以将手牌数调整为1,视为使用一张无次数限制的基本牌.',
            hyym_lishang: '离殇',
            hyym_lishang_info: '<p>①锁定技,游戏开始时,你获得<宫><商><角><徵><羽>标记各1枚.<p><p>②一轮游戏开始时,你可以移除1枚标记并选择至多三名角色,令其于本轮获得对应效果:<宫>:判定阶段开始时,你获得判定区内所有牌并摸一张牌;<商>:出牌阶段,你可以弃一张牌,令一名其他角色弃置半数手牌(向下取整);<角>:准备阶段,你可以将一张非基本牌当【桃】对一名与你等体力值的角色使用;<徵>:你对同势力角色造成的伤害+1;<羽>:防止体力值大于你两倍的角色对你造成的伤害.<p><p>③每种标记限一次,出牌阶段,你可以废除一个装备栏,获得1枚标记.<p>',
            hyym_yingsha: '影杀',
            hyym_yingsha_info: '当一名其他角色受到牌造成的伤害后,你可以交给其一张同花色牌,令其失去1点体力.',
            hyym_dushi: '毒噬',
            hyym_dushi_info: '出牌阶段限一次,你可以失去1点体力,声明一种花色,令一名其他角色交给你所有此花色牌.',
            hyym_angu: '暗蛊',
            hyym_angu_info: '当你受到来自牌造成的伤害后,你可以获得一张同花色牌/令伤害来源交给你所有同花色牌.',
            hyym_guiling: '归灵',
            hyym_guiling_info: '出牌阶段限x次(x为此技能等级),你可以展示一张手牌,获得所有其他角色手牌中同点数牌,若你未以此法获得牌,则升级此技能(每回合限一次);当你以此法获得牌后,本回合此技能失效.',
            hyym_yushi: '驭势',
            hyym_yushi_info: '每名其他角色回合限一次,当一张牌进入弃牌堆时,你可以将其置于牌堆顶/底.',
            hyym_qianhui: '潜晦',
            hyym_qianhui_info: '准备阶段,你可摸一张牌并观看牌堆底x(x为你的手牌数)张牌,并可用任意张牌替换其中等量牌.',
            hyym_xvxuan: '虚玄',
            hyym_xvxuan_info: '当一名角色受到伤害后,若其势力与上次受到伤害的角色相同,你可以摸一张牌.',
            hyym_huanchen: '幻尘',
            hyym_huanchen_info: '一轮游戏开始时,你可以弃一张牌,改变一名其他角色的势力,直到本轮结束.',
            hyym_mobing: '墨兵',
            hyym_mobing_info: '当有角色弃置牌后,若此时不处于任何角色回合内,你可以摸一张牌.',
            hyym_jianhui: '熸灰',
            hyym_jianhui_info: '当你于回合外获得牌后,你可以销毁一张牌,令手牌上限永久+1.',
            hyym_shouwu: '兽舞',
            hyym_shouwu_info: '结束阶段,你可以摸x张牌,令一名体力值不大于x的角色回复1点体力(x为本回合你失去的牌的字数数).',
            hyym_michun: '迷唇',
            hyym_michun_info: '锁定技,你的♥️️牌的字数视为7.',
            hyym_lingbu: '灵卜',
            hyym_lingbu_info: '一轮游戏开始时,你可以卜算x并获得其中点数不大于14-x的所有牌(x为游戏轮数除以13的余数+1).',
            hyym_benlei: '奔雷',
            hyym_benlei_info: '锁定技,当一张你未记录点数的牌进入弃牌堆时,你记录其点数.当你记录所有点数后,你清除所有记录,并对任意名其他角色各造成1点雷电伤害.',
            hyym_canshuo: '灿铄',
            hyym_canshuo_info: '出牌阶段开始/结束时,你可视为对任意名角色使用一张【火攻】.',
            hyym_bingdi: '并蒂',
            hyym_bingdi_info: '锁定技,转换技,准备阶段:阳:若你没有【南瓜锤】,你使用一张【南瓜锤】;阴:若你没有【流云】,你使用一张【流云】.',
            hyym_chuizhen: '锤阵',
            hyym_chuizhen_info: '转换技,当你使用一张牌指定一名角色为目标时,你可以:阳:失去1点体力,获得其一张牌,并令其废除一个装备栏;阴:废除一个装备栏,并令此牌无视防具且不可被响应.',
            hyym_lianyan: '潋滟',
            hyym_lianyan_info: '转换技,当你废除装备栏后,你可以:阳:回复1点体力并摸一张牌;阴:回复一个装备栏.',
            hyym_xinyin: '心印',
            hyym_xinyin_info: '转换技,当你成为非装备牌的目标时,你可以移除你的一个转换技的一个选项,:阳:令此牌无效;阴:令你于此牌结算完毕后,视为对使用者使用一张同名牌(仅指定其为目标).',
            hyym_huazang: '花葬',
            hyym_huazang_info: '出牌阶段开始时,你可以失去1点体力并获得场上一张牌.本阶段你可以将此牌当任意普通锦囊牌使用.',
            hyym_yewu: '叶舞',
            hyym_yewu_info: '当你使用牌指定一名角色为目标时,你可以摸x张牌(x为你与其距离-此牌点数+1).',
            hyym_guiming: '鬼冥',
            hyym_guiming_info: '<p>①锁定技,游戏开始时,你获得<霜娥><重明><雷泽>标记各1枚.<p><p>②出牌阶段,你可以废除一个装备栏,选择并获得1枚标记.<p><p>③锁定技,当你移除最后一枚某标记时,你弃置一名角色区域内一张牌;当你移除所有标记时,你回复所有装备栏.<p>',
            hyym_shihun2: '弑魂',
            hyym_shihun2_info: '当你不因此技能造成/受到1点伤害后,你可以令一名其他角色进行一次判定,根据判定结果执行不同效果:若为♦️️,你可以减1点体力上限并再进行两次判定;否则你可移除1枚对应标记,对其造成1点对应属性伤害:♣️️-<霜娥>-冰冻;♥️️-<重明>-火焰;♠️️-<雷泽>-雷电.',
            hyym_huanxi: '幻袭',
            hyym_huanxi_info: '每回合结束时,你可以视为使用一张本回合被使用过的基本牌/普通锦囊牌,弃一张同类型牌(若没有则改为受到1点无来源伤害).',
            hyym_kouchou: '寇雠',
            hyym_kouchou_info: '当你受到1点伤害后,你可以令一名其他角色进行一次判定,获得其点数不大于x的所有牌(x为判定结果点数).你选择并保留其中一张,展示并交给其剩余牌.',
            hyym_shanying2: '闪影',
            hyym_shanying2_info: '一轮游戏开始时,你可以展示任意名其他角色的共计至多x张手牌(x为你的体力值)并可依次用任意牌交换其中任意牌.',
            hyym_lingyan: '灵焰',
            hyym_lingyan_info: '当你使用一张牌时,你可以令一名其他角色明置手牌,直到你下回合开始.',
            hyym_huyi2: '虎裔',
            hyym_huyi2_info: '锁定技,转换技,当你成为牌的目标时:阳:你摸一张牌;阴:你弃一张牌.',
            hyym_wujue: '武诀',
            hyym_wujue_info: '当你的牌因弃置进入弃牌堆时,你可根据其花色,将其当以下牌使用:♣️️:无距离限制的【杀】;♠️️:【决斗】;♦️️:【火攻】;♥️️:【万箭齐发】.',
            hyym_canyin: '残寅',
            hyym_canyin_info: '锁定技,你的判定阶段改为弃牌阶段.',
            hyym_zhonghun: '忠魂',
            hyym_zhonghun_info: '每阶段限一次,当你不因使用/打出失去牌后,你可以摸两张牌.',
            hyym_shensuan: '神算',
            hyym_shensuan_info: '<p>①锁定技,游戏开始时,你摸两张牌,将两张牌置于武将牌上,称为<算子>.<p><p>②当你使用牌结算完毕后,若其点数与<算子>A的点数差(小于0则+13)为3,则你可用此牌替换A.<p>',
            hyym_jinchou: '荩筹',
            hyym_jinchou_info: '当你受到伤害后,你可将牌堆顶的一张牌作为<算子>置于武将牌上,可以用任意张牌与等量<算子>替换.',
            hyym_liumai: '六脉',
            hyym_liumai_info: '锁定技,游戏开始时/每轮游戏结束时,你从【少商】/【商阳】/【中冲】/【关冲】/【少冲】/【少泽】中选择并获得两个技能,直至你下次发动此技能.若你均从【少商】/【中冲】/【少冲】选择,则你弃一张牌;若你均从【商阳】/【关冲】/【少泽】中选择,则你摸两张牌.',
            hyym_shaoshang: '少商',
            hyym_shaoshang_info: '每轮游戏开始时,你可以指定一名角色,其于本轮使用牌时,你可以声明一个本轮未声明过的花色,令其摸一张牌,并弃置此花色所有牌.',
            hyym_shaochong: '少冲',
            hyym_shaochong_info: '一轮游戏开始时,你可以指定两名角色.本轮中其中一名角色A对另一名角色造成伤害后,A失去1点体力.',
            hyym_shaoze: '少泽',
            hyym_shaoze_info: '锁定技,你造成的伤害均视为无伤害来源.',
            hyym_zhongchong: '中冲',
            hyym_zhongchong_info: '一轮游戏开始时,你可以声明一种牌名(不能与上次相同).本轮游戏中首次有此牌名牌进入弃牌堆时,你获得之.',
            hyym_shangyang: '商阳',
            hyym_shangyang_info: '当一名角色一次性失去至少两张同花色牌时,若其没有手牌,你可令其摸等量牌.',
            hyym_guanchong: '关冲',
            hyym_guanchong_info: '一名其他角色出牌阶段开始时,你可以弃一张牌,令其本回合使用牌无距离限制.若你此做,其本回合使用与你所弃牌同名牌时,你摸两张牌.',
            hyym_mopao2: '魔炮',
            hyym_mopao2_info: '锁定技,准备阶段,若你没有【魔炎巨炮】,你使用一张【魔炎巨炮】.',
            hyym_sanhuan: '三幻',
            hyym_sanhuan_info: '<p>①锁定技,游戏开始时,你获得<冰><暗><毒>标记各1枚.<p><p>②当你对一名其他角色造成伤害后,你可以移除1枚标记并执行对应效果:<冰>:其翻面;<暗>:其不能响应【杀】直到你下回合结束;<毒>:其失去1点体力.<p>',
            hyym_yingzhen: '影阵',
            hyym_yingzhen_info: '锁定技,当你使用牌指定一名其他角色为唯一目标时,其所有手牌均视为【无懈可击】直到其使用牌/本回合结束(由你选择).',
            hyym_shenguang: '神光',
            hyym_shenguang_info: '出牌阶段每名角色限一次,你可以失去1点体力,令一名角色回复1点体力.当你于一回合第二次发动此技能后,你回复1点体力.',
            hyym_linghui: '灵辉',
            hyym_linghui_info: '当一名角色回复体力后,若其体力值:大于你:你可令其复原武将牌;等于你:你可以重铸其至多两张牌;小于你:你可令其将手牌摸至体力上限.',
            hyym_hunci: '魂刺',
            hyym_hunci_info: '当你受到一名其他角色造成的伤害时,你可令此伤害+0.若你此做,此伤害结算完毕后,其失去1点体力,【魂刺】中的两项数值+1.',
            hyym_rangu: '燃骨',
            hyym_rangu_info: '当你受到1点伤害时,你可改为减1点体力上限.',
            hyym_huagu: '化骨',
            hyym_huagu_info: '每种牌名限一次,出牌阶段,你可以失去1点体力,视为使用一张基本牌/普通锦囊牌,若你以此法造成了伤害,则本回合此技能失效.',
            hyym_bingyuan: '冰渊',
            hyym_bingyuan_info: '出牌阶段限一次,你可以废除一个装备栏,令一名其他角色选择一项:1、由你废除其两个装备栏;2、其翻面.',
            hyym_yinxve: '饮雪',
            hyym_yinxve_info: '当你废除装备栏后,你可以交给一名其他角色一张牌,对其造成1点冰冻伤害并回复1点体力.',
            hyym_huanyue: '幻月',
            hyym_huanyue_info: '当你于每阶段使用的第一张基本牌/普通锦囊牌指定目标时,你可以为之增加/减少任意个目标(目标数至少为一).',
            hyym_huaying: '化影',
            hyym_huaying_info: '每种牌名限一次,当你受到1点伤害后,你可以视为使用一张基本牌/普通锦囊牌(无距离限制).',
            hyym_shushang: '蜀殇',
            hyym_shushang_info: '锁定技,当你的体力值减小1点时,你摸x+1(若你的体力值不大于x,则改为x+2)张牌并弃x张牌(x为场上蜀势力角色数),获得1枚<殇>标记.当一名其他角色不因此技能对你造成伤害后,其移去你的1枚<殇>,视为对你使用一张【决斗】.',
            hyym_fengong: '焚躬',
            hyym_fengong_info: '当你造成伤害后,你可以视为使用一张【火攻】.',
            hyym_tianqi: '天启',
            hyym_tianqi_info: '锁定技,准备阶段,你摸四张牌,弃置不同花色手牌各一张.',
            hyym_hunyuan: '魂援',
            hyym_hunyuan_info: '当你于一局游戏中首次使用一种点数的牌结算完毕后,你可令一名其他角色选择一项:1、使用此牌;2、将此牌置入弃牌堆.',
            hyym_renyi: '仁谊',
            hyym_renyi_info: '游戏开始时,你可令任意名其他角色选择是否摸一张牌并交给你一张牌.',
            hyym_qianjun: '遣军',
            hyym_qianjun_info: '你的/一名其他角色的结束阶段,你可以获得一名其他角色的一张牌/令其交给你一张牌,你交给其一张牌.',
            hyym_dizun: '帝尊',
            hyym_dizun_info: '每种点数限一次,准备阶段,你可声明一种点数,获得场上所有此点数牌.',
            hyym_tiandao: '天道',
            hyym_tiandao_info: '每种牌名限一次,出牌阶段,你可以重铸一张牌.',
            hyym_hunzuo: '魂佐',
            hyym_hunzuo_info: '每轮限一次,一名其他角色出牌阶段结束时,你可交给其所有手牌,令其跳过弃牌阶段.',
            hyym_wumeng: '武盟',
            hyym_wumeng_info: '一名其他角色的结束阶段,其可以交给你至少两张牌,可以视为使用其中一张基本牌/普通锦囊牌.',
            hyym_xveying: '血影',
            hyym_xveying_info: '转换技,出牌阶段,你可以:阳:失去1点体力,将手牌摸至体力上限;阴:交给一名其他角色一张牌,其可交给你一张牌.',
            hyym_jiqi: '集气',
            hyym_jiqi_info: '当你首次对一名其他角色发动【血影】后,你可以回复1点体力.',
            hyym_chouling: '仇灵',
            hyym_chouling_info: '锁定技,游戏开始时,你令两名角色获得<仇>标记.有<仇>的角色受到伤害后,可以摸两张牌,视为对另一名有<仇>的角色使用一张【决斗】(当你成为此【决斗】目标时,你摸一张牌).',
            hyym_maohen: '媢恨',
            hyym_maohen_info: '当你受到伤害后,你可以重新分配<仇>/从牌堆中检索并获得一张【杀】.',
            hyym_yuwu: '羽舞',
            hyym_yuwu_info: '当你使用一张牌结算完毕后,若此牌目标之一于其成为目标后失去过牌,则你摸一张牌,并令此牌不计入次数.',
            hyym_yinfeng: '隐风',
            hyym_yinfeng_info: '当你使用牌指定一名其他角色为目标后,你可以令其弃置所有同点数牌.',
            hyym_gaoyu: '膏腴',
            hyym_gaoyu_info: '锁定技,你不分发起始手牌.游戏开始时,你从牌堆中检索并获得不同字数的牌各一张.',
            hyym_sili: '肆戾',
            hyym_sili_info: '锁定技,你于出牌阶段使用首张基本牌/普通锦囊牌时,你额外结算x次效果并记录之(x此牌名的记录次数).',
            hyym_huameng: '化梦',
            hyym_huameng_info: '每种牌名限一次,每回合限x次(x为你的体力值),你可视为使用/打出任意一张基本牌/普通锦囊牌.当你以此法造成伤害时,防止之.',
            hyym_jieni: '桀逆',
            hyym_jieni_info: '锁定技,你使用牌时,你的手牌上限-1;弃牌阶段结束时,你摸等同于此阶段弃牌数的牌;结束阶段,你将手牌上限调整至体力上限,并摸调整数绝对值张数的牌.',
            hyym_jibao: '极暴',
            hyym_jibao_info: '出牌阶段,你可失去1点体力/减1点体力上限,令手牌上限+x(x为你的体力上限).',
            hyym_jiling2: '祭灵',
            hyym_jiling2_info: '出牌阶段各限一次,当你造成伤害/回复体力后,你可以回复1点体力/对一名其他角色造成1点伤害.',
            hyym_ziao: '恣骜',
            hyym_ziao_info: '每种牌名限一次,当一张基本牌/普通锦囊牌结算完毕后,你可视为使用一张同名牌.',
            hyym_badao: '霸刀',
            hyym_badao_info: '出牌阶段限一次,你可以将一张牌当不可被响应的【杀】使用.',
            hyym_silve: '肆掠',
            hyym_silve_info: '出牌阶段结束时,你可以获得任意名于此阶段受到过伤害的角色的各一张牌.若你于此阶段造成的伤害数大于1,则你回复1点体力并摸一张牌.',
            hyym_fenghou: '封侯',
            hyym_fenghou_info: '一轮游戏开始时,你可以废除一个装备栏,令一名角色于本轮内使用牌不可被响应.',
            hyym_zixie: '辎械',
            hyym_zixie_info: '锁定技,生效后的判定牌进入弃牌堆后,若其中有装备牌,则你令一名角色获得之,你回复一个装备栏.',
            hyym_siwei: '肆威',
            hyym_siwei_info: '当你使用伤害牌指定目标时,你可以进行一次判定,若类型与此牌相同,则此牌伤害基数+1.',
            hyym_yuanfen: '怨忿',
            hyym_yuanfen_info: '限定技,出牌阶段,你可以减2点体力上限,获得一名其他角色的所有手牌.',
            hyym_zhenxin: '贞心',
            hyym_zhenxin_info: '限定技,出牌阶段,你可以减1点体力上限,从牌堆中检索并获得三种不同牌名的牌各一张,分配给任意角色.',
            hyym_lingpo: '灵魄',
            hyym_lingpo_info: '锁定技,当你于出牌阶段内失去1点体力后,你的摸牌阶段摸牌基数永久+1.',
            hyym_dieling: '蝶灵',
            hyym_dieling_info: '锁定技,准备阶段,你加1点体力上限.',
            hyym_jianhun: '箭魂',
            hyym_jianhun_info: '出牌阶段限一次,你可以用一张手牌同时与至多两名其他角色拼点,根据你拼赢的总次数执行对应效果:两次:你回复1点体力;一次:你卜算x(x为你的体力值);零次:你失去1点体力且本回合手牌上限+3.',
            hyym_wugong: '舞弓',
            hyym_wugong_info: '锁定技,弃牌阶段开始时,你将手牌数摸至体力上限.',
            hyym_jiexia: '桀黠',
            hyym_jiexia_info: '锁定技,当你于一局游戏中首次造成/受到一名角色的伤害后,你摸x张牌并弃x张牌(x为不大于y的质数的数量,y为牌堆各位数之和).',
            hyym_chongxiao: '冲霄',
            hyym_chongxiao_info: '锁定技,结束阶段,若你的所有手牌均为同一花色,则你摸x张牌(x为你的手牌数且至多为4).',
            hyym_linlie: '凛烈',
            hyym_linlie_info: '锁定技,弃牌阶段开始时,若你未受伤,你弃置任意张牌并跳过此阶段.',
            hyym_minghun: '冥婚',
            hyym_minghun_info: '限定技,出牌阶段,你可以选择一名男性其他角色,你与其获得<婚>标记.(当一名有<婚>的角色摸牌/弃牌/受到伤害/回复体力/死亡后,另一名有<婚>的角色摸一张牌/弃一张牌/失去1点体力/获得1点护甲/死亡.)其/你可以将任意张牌置于你/其的武将牌上,称为<礼>/<妆>.(有<礼>/<妆>的角色出牌阶段限一次,其可移去1张<礼>/<妆>,摸两张牌/回复1点体力.)',
            hyym_danjing: '啖睛',
            hyym_danjing_info: '准备阶段,你可废除一个装备栏,跳过本回合的判定阶段和弃牌阶段.',
            hyym_gulong: '孤龙',
            hyym_gulong_info: '锁定技,出牌阶段结束时,若你本阶段未使用牌指定其他角色为目标,则你回复一个装备栏;当有角色回复装备栏时,你摸两张牌.',
            hyym_ceni: '策逆',
            hyym_ceni_info: '出牌阶段每名角色限一次,你可以令一名其他角色摸一张牌并正面向上交给你手牌中点数最大的一张牌,若此牌点数大于你本回合上次以此法获得牌的点数,则此技能本回合失效.',
            hyym_fuling: '缚灵',
            hyym_fuling_info: '出牌阶段限一次,你可以弃置至少三张牌,以任意顺序执行以下操作:1、从牌堆中检索并使用一张装备牌(不替换已有装备);2、将手牌数摸至x张(x为你的装备区中装备牌数和空余装备栏数中的较大值);3、将一张牌当【铁锁连环】使用或重铸.',
            hyym_suohun: '锁魂',
            hyym_suohun_info: '一轮游戏开始时,你可以令任意名座位号不大于x(x为场上横置的角色数且至少为1)的角色随机废除一个装备栏.',
            hyym_kuice: '揆策',
            hyym_kuice_info: '锁定技,你的等体力角色回合开始时,你摸一张牌并弃一张牌.',
            hyym_hunying: '魂婴',
            hyym_hunying_info: '一名距离为1的角色受到1点伤害后,你可废除一个装备栏,摸x张牌(x为你已废除的装备栏数)并交给其等量牌.若其的手牌包含所有花色,你与其各回复1点体力.',
            hyym_shuangxin: '双衅',
            hyym_shuangxin_info: '出牌阶段限两次,你可以令一名其他角色视为对你使用一张【杀】,若此牌未造成伤害,你摸一张牌.',
            hyym_huikui: '豗溃',
            hyym_huikui_info: '每回合限两次,当你成为手牌数不大于你的角色的牌的目标时,你可以与其交换手牌,令此牌伤害基数-1.',
            hyym_lingsu: '灵酥',
            hyym_lingsu_info: '出牌阶段开始时,你可以重铸一张牌,根据其点数执行/于本回合获得相应效果:A:你使用牌无次数限制;2:你使用牌无距离限制;3:你使用牌可以额外指定一名角色为目标:4:你使用牌无视防具且可减少任意个目标;5:你使用牌不可被响应;6:视为使用一张【桃】;7:视为使用一张【决斗】;8:视为使用一张【无中生有】;9:视为使用一张【酒】;10:视为使用一张【过河拆桥】;J:观看一名其他角色的手牌;Q:移动场上一张牌;K:跳过弃牌阶段.若此牌点数不大于5,则你可重复一次此操作.',
            hyym_zhouyuan: '咒怨',
            hyym_zhouyuan_info: '锁定技,当你受到1点伤害后,你获得1枚<怨>标记.你于出牌阶段使用【杀】的次数上限+x(x为<怨>数).',
            hyym_yuanku: '冤酷',
            hyym_yuanku_info: '锁定技,当你死亡时,击杀你的角色受到x点无来源伤害(x为你的<怨>数).',
            hyym_miedao: '灭道',
            hyym_miedao_info: '觉醒技,准备阶段,若你的<怨>数不小于3,则你获得1枚<怨>,失去【冤酷】,获得【肆虣】,可以移除任意枚<怨>并回复等量体力. ',
            hyym_sibao: '肆虣',
            hyym_sibao_info: '出牌阶段限一次,你可以移除1枚<怨>,对一名其他角色造成1点伤害.若其未因此进入濒死状态,此技能此阶段改为限两次.',
            hyym_ninglei: '狞雷',
            hyym_ninglei_info: '出牌阶段,你可以将手牌数摸/弃至与一名角色装备区内牌数相等(每回合每种牌数限一次),对其造成1点雷电伤害.当你因此击杀一名角色后,重置【复影】.',
            hyym_fuying2: '复影',
            hyym_fuying2_info: '限定技,当你使用一张基本牌/普通锦囊牌结算完毕后,你可以令任意名角色从牌堆中检索并获得一张同名牌(检索失败的角色改为摸一张牌).',
            hyym_tiaobo: '挑拨',
            hyym_tiaobo_info: '一轮游戏开始时,你可以令两名角色拼点.你交给没赢的角色各一张牌,并获得赢的角色一张牌,若这两名角色因此技能获得/失去的牌中有同名牌,则你可再次发动【挑拨】.',
            hyym_siwei: '肆威',
            hyym_siwei_info: '当你成为牌的目标时,或获得/交给其他角色牌时,你可以重铸一张牌.',
            hyym_lincu: '躏蹙',
            hyym_lincu_info: '一轮游戏开始时,你可以弃一张牌,令一名其他角色的所有非锁定技失效.其下次造成伤害后,回复因此失效的技能.',
            hyym_zaojuan: '躁狷',
            hyym_zaojuan_info: '每种字数限一次,每回合限一次,当你使用一张牌后,你可以摸x张牌(你以此法获得的牌不计入手牌上限),可以弃x张牌(x为此牌的字数).',
            hyym_baochi: '暴抶',
            hyym_baochi_info: '当你于回合外弃置牌后,你可以令一名其他角色摸一张牌,对其造成1点伤害.',
            hyym_leixi: '儡戏',
            hyym_leixi_info: '锁定技,若一名其他角色使用的上一张非装备牌的唯一目标为你,则其手牌均视为此牌.',
            hyym_yingmeng: '萦梦',
            hyym_yingmeng_info: '一名其他角色于其出牌阶段内使用首张牌结算完毕后,你可以弃一张同花色牌.若你此做,防止其本回合内造成的所有伤害.',
            hyym_hunxi: '魂袭',
            hyym_hunxi_info: '<p>①锁定技,游戏开始时,你将一名角色区域内一张牌置于武将牌上,称为<魂>.<p><p>②当你使用/打出牌时,若其花色与<魂>相同,则你可以弃置一名角色域内一张牌;若不同,则你可以用此牌代替<魂>.<p>',
            hyym_xiongbu: '汹怖',
            hyym_xiongbu_info: '结束阶段,你可以弃置任意名角色区域内的共计一张牌,若所弃牌花色均与<魂>相同,你可令本回合【汹怖】的弃牌数+1并重复此流程.',
            hyym_aosi: '骜肆',
            hyym_aosi_info: '其他角色/你的回合限一/四次,当一张非装备牌A被使用时,你可以弃一张牌并声明一种A的同类型牌名.若你此做,当前回合角色的手牌均视为你声明牌名的牌,直到其下次使用牌.',
            hyym_gulang: '孤狼',
            hyym_gulang_info: '每回合限一次,当你失去最后一张手牌时,你可获得场上点数最小的一张牌.',
            hyym_jinlin: '金鳞',
            hyym_jinlin_info: '每回合限x次(x为你的体力上限),当你使用牌时,你可从以下选项中依次选择一至两项发动:1、令场上手牌数最少的一名角色摸一张牌;2、令场上手牌数最多的一名角色弃一张牌;3、令场上与你手牌数相等的一名角色重铸一张牌.',
            hyym_xiangou: '陷构',
            hyym_xiangou_info: '一名角色回合开始时,你可以废除一个装备栏,视为依次使用至多两张【过河拆桥】.',
            hyym_xiuwei: '脩威',
            hyym_xiuwei_info: '锁定技,当有角色使用非虚拟的【过河拆桥】时,你回复一个装备栏.',
            hyym_hualing: '化灵',
            hyym_hualing_info: '出牌阶段开始时,你可以视为使用一张本回合未被使用过的牌名的基本牌.若此牌造成了伤害,则你获得一张非基本牌,否则你弃一张牌并重复此流程.',
            hyym_xinpo: '心魄',
            hyym_xinpo_info: '每轮限一次,当你使用一张牌结算结束后,你可以摸x张牌(x为你本轮使用过的基本牌名数).',
            hyym_huijian: '毁熸',
            hyym_huijian_info: '出牌阶段每名角色限一次,你可以令一名角色选择一项:1、废除一个装备栏;2、令你弃置其x(x为场上已废除的装备栏数且至少为1)张牌,摸两张牌,并令此技能本回合失效.',
            hyym_xvebeng: '雪崩',
            hyym_xvebeng_info: '限定技,出牌阶段,你可以废除任意个装备栏,对等量其他角色各造成1点冰冻伤害.',
            hyym_yuanling2: '元灵',
            hyym_yuanling2_info: '<p>①锁定技,游戏开始时,你获得 <火><雷><冰><土><爆><鬼>标记各1枚.<p><p>②出牌阶段限一次,你可以移除1枚标记并执行对应效果:<火>:弃置所有牌,对一名其他角色造成2点火焰伤害;<雷>:对任意名其他角色各造成1点雷电伤害,失去等量体力值;<冰>:废除所有装备栏,对一名其他角色造成1点冰冻伤害,并令其翻面;<土>:交给一名其他角色任意张牌,并废除其等量装备栏;<爆>:令任意名其他角色弃置所有红色牌,你减等量体力上限;<鬼>:将一名其他角色的所有技能替换为【元灵】,令其获得你所有标记,你死亡.<p>',
            hyym_lianhun: '炼魂',
            hyym_lianhun_info: '锁定技,准备阶段,你弃置所有手牌,摸四张牌.',
            hyym_ranling: '燃灵',
            hyym_ranling_info: '一名角色进入濒死状态时,若【炼魂】中的数字大于0,你可令其-1,你令该角色将体力值回复至2点.',
            hyym_shengwu: '圣武',
            hyym_shengwu_info: '出牌阶段限两次,你可以弃一张本回合未以此法弃置过的花色的牌,根据所弃牌花色执行以下效果:♦️️:对一名其他角色造成1点伤害;♥️️:令一名角色摸两张牌;♣️️:获得场上一张同花色牌;♠️️:任意调换此技能的弃牌花色与对应执行效果,令此技能本阶段使用次数+2.',
            hyym_longyun: '龙运',
            hyym_longyun_info: '锁定技,若游戏轮数为奇数,你受到的非属性伤害-1;若游戏轮数为偶数,你受到的属性伤害+1.',
            hyym_jinfeng: '锦凤',
            hyym_jinfeng_info: '锁定技,当你使用/打出一张牌时,若其花色为:♦️️:你使用的下一张牌的伤害/回复基数+1;♥️️:你使用下一张牌造成伤害后,你获得受伤角色的一张牌;♠️️:你本回合手牌上限+1;♣️️:你将手牌数摸至手牌上限.',
            hyym_qihuang: '栖凰',
            hyym_qihuang_info: '①锁定技,当你受到1点伤害后,你获得1枚<羽>标记.<p>②当你发动【锦凤】时,你可以移除1枚<羽>,改为以任意顺序依次执行所有效果.',
            hyym_rendewuliang: '仁德无量',
            hyym_rendewuliang_info: '①锁定技,游戏开始时,你为<仁>记录一种牌名.<p>②每回合限一次,一名角色使用<仁>牌名的牌时,你可以视为对其使用一张【建国投资】(若不合法则你重新选定目标),修改<仁>(每种牌名限一次).',
            hyym_danjian: '单剑',
            hyym_danjian_info: '锁定技,准备阶段,若你没有【单剑】,你使用一张【单剑】.',
            hyym_hengsaoqianjun: '横扫千军',
            hyym_hengsaoqianjun_info: '锁定技,你于出牌阶段内使用牌无距离限制且不可被响应.',
            hyym_aoshiqunxiong: '傲视群雄',
            hyym_aoshiqunxiong_info: '锁定技,你跳过判定阶段和弃牌阶段,你于出牌阶段内首次造成的伤害+1.',
            hyym_guduqiubai: '孤独求败',
            hyym_guduqiubai_info: '锁定技,出牌阶段开始/结束时,你摸两张牌.',
            hyym_shimeng2: '噬梦',
            hyym_shimeng2_info: '当你受到1点伤害后,你可以依次弃置任意名角色的共计至多两张牌,且当你以此法弃置一名角色的一张牌后,你可令其摸两张牌.',
            hyym_huzu: '虎足',
            hyym_huzu_info: '锁定技,若你的体力值为:3:你的攻击范围+2;2:你的手牌上限+2;1:你的摸牌阶段摸牌基数+2.',
            hyym_diexve: '喋血',
            hyym_diexve_info: '觉醒技,准备阶段,若你已受伤,你减1点体力上限,获得【象鼻】和【狞髯】.',
            hyym_xiangbi: '象鼻',
            hyym_xiangbi_info: '当一张牌指定多名角色为目标时,你可以获得其中任意名目标角色的各一张牌,若你此做,这些角色依次对你造成1点伤害.',
            hyym_ningran: '狞髯',
            hyym_ningran_info: '觉醒技,准备阶段,若你已受伤,你减1点体力上限,获得【犀目】和【禽狝】.',
            hyym_ximu: '犀目',
            hyym_ximu_info: '当你受到1点伤害后,你可以展示牌堆顶一张牌,令任意名角色选择是否弃一张同点数牌并令你回复1点体力.选否的角色可以用一张牌替换之.',
            hyym_qinxian: '禽狝',
            hyym_qinxian_info: '觉醒技,准备阶段,若你已受伤,你减1点体力上限并获得2点护甲,获得【牛尾】.',
            hyym_niuwei: '牛尾',
            hyym_niuwei_info: '锁定技,当你指定/成为牌的目标后,你对对方角色获得以下效果直到你的下个结束阶段:当你使用牌指定其为目标时,你摸一张牌.',
            hyym_tanbi: '贪愎',
            hyym_tanbi_info: '每种花色限一次,当你使用牌时,你可根据此牌花色执行以下效果:♦️️,令此牌额外结算一次;♠️️,为此牌增加或减少任意个目标(无距离限制);♣️️,摸x张牌(x为此牌字数);♥️️,令此牌的伤害/回复基数+1.',
            hyym_jingtun: '鲸吞',
            hyym_jingtun_info: '结束阶段,你可以减1点体力上限,重置【贪愎】.',
            hyym_fenleicedian: '忿雷策电',
            hyym_fenleicedian_info: '锁定技,当你造成非属性伤害时,改为雷电伤害.当你对一名其他角色造成雷电伤害后,若其:有牌,其弃一张牌;没有<黄天锁>标记,你令其获得<黄天锁>(异常状态);有<天罚>标记,其受到1点无来源雷电伤害并弃一张牌.',
            hyym_yiyuhuangdao: '熠宇黄道',
            hyym_yiyuhuangdao_info: '锁定技,与你相邻/不相邻的有<黄天锁>的角色只能/不能使用牌指定你及与你相邻的角色为目标.其回合结束时,移除<黄天锁>并获得<天罚>(异常状态).',
            hyym_jiazixinggang: '甲子星罡',
            hyym_jiazixinggang_info: '锁定技,①当你受到1点伤害后,你获得1枚<甲子>标记,令伤害来源获得<黄天锁>和<天罚>,<甲子>的数量上限为4.<p>②当你受到一名其他角色造成的伤害时,若你的<甲子>数:小于4,且本回合内进入弃牌堆的牌数小于你的<甲子>数,则防止之;等于4,则你移除所有<甲子>,与其交换座次并将伤害转移给其.',
            byh_xiandeng: '先登',
            byh_xiandeng_info: '体力值不小于你的角色准备阶段开始时,你可以摸一张牌并使用一张牌,若你以此法造成伤害,则此技能失效直到你下回合开始.',
            byh_jixian: '激弦',
            byh_jixian_info: '每回合限一次,当你使用牌时,若你手牌中没有字数为x的牌(x为此牌字数),你可以摸x张牌并弃x张牌,若你手牌中没有字数相同的牌,你摸一张牌.',
            hyym_caishenqichang: '财神气场',
            hyym_caishenqichang_info: '一名距离不大于1的角色出牌阶段结束时,你可以选择一项:1、令其本回合手牌上限+1;2、弃一张牌,令其失去1点体力.',
            hyym_tongcaixianzhen: '通财显阵',
            hyym_tongcaixianzhen_info: '一名距离不大于1的角色弃牌阶段开始时,你可弃两张牌/失去1点体力,令其将手牌摸至体力上限(至多摸至五张).',
            hyym_yaoqianshu: '摇钱树',
            hyym_yaoqianshu_info: '出牌阶段限一次,你可以将一张牌当【天降宝箱】使用.',
            hyym_caishendao: '财神到',
            hyym_caishendao_info: '觉醒技,当你的血量首次到达2或更低时,你将【通财显阵】中的<弃两张牌>改为<弃一张牌>,获得【如意徵明】.',
            hyym_ruyizhiming: '如意徵明',
            hyym_ruyizhiming_info: '一名距离不大于1且没有【玉如意】的角色摸牌阶段开始时,你可以弃一张牌,令其使用一张【玉如意】.',
            hyym_zongzishijian: '粽子时间',
            hyym_zongzishijian_info: '准备阶段/结束阶段,你可以视为使用一张未被记录牌名的<粽子>牌(【红枣粽子】【绿豆粽子】【鸡蛋粽子】【鲜肉粽子】【板栗粽子】).',
            hyym_fubaomishu: '福宝秘术',
            hyym_fubaomishu_info: '<p>锁定技,①当你使用未记录牌名的 <粽子>牌结算完毕后,你记录其牌名,若记录的牌名数:不小于半数,你本回合使用牌无次数限制;达到全部,你清除所有牌名记录,并令本回合造成的伤害+1.<p><p>②当你受到伤害后,若你有已记录牌名,你清除所有牌名记录并摸等量牌,于等量回合内防止所有受到的伤害,最后删除【粽子时间】中的一项牌名.<p>',
            hyym_liancai: '敛财',
            hyym_liancai_info: '每轮限一次,当一名其他角色使用【无中生有】时,你可将目标改为你.',
            hyym_fujia: '富甲',
            hyym_fujia_info: '当有角色的体力值变化后,你可令一名体力值与你相等的角色(每名角色每轮限一次)视为使用一张【无中生有】.',
            hyym_pianxianyunji: '翩跹云霁',
            hyym_pianxianyunji_info: '锁定技,每名角色回合结束时,若你本回合未受到过伤害,你摸一张牌/视为对其使用一张(每名角色每种牌名限一次)其本局游戏内使用过的牌名的普通锦囊牌(此牌伤害基数+1),否则你弃两张牌(存活角色数小于4时改为弃一张牌).',
            hyym_pojunlongshan: '破军龙闪',
            hyym_pojunlongshan_info: '出牌阶段限一次,你可沿最短路径将座次移动至任意位置,依次对所有沿途角色各造成1点伤害,并令其本阶段无法响应你使用的牌.',
            hyym_youlongqitanqiang: '游龙-七探枪',
            hyym_youlongqitanqiang_info: '锁定技,每轮限七次,当你不因【杀】造成伤害后,你摸一张牌,并令你本轮使用【杀】的次数上限+1.',
            hyym_zhuanyupan: '转玉盘',
            hyym_zhuanyupan_info: '出牌阶段开始时,你可以获得x(x为存活角色数)枚<月>标记(拥有<月>的角色于每回合开始时,移除1枚<月>,若其有/没有<月>,其视为对自己使用一张【状元红】/移除<状元红>Buff并视为使用一张【酒】).',
            hyym_lianguangman: '怜光满',
            hyym_lianguangman_info: '每回合限一次,当你造成伤害后,你可令自己或受伤角色摸x张牌(x为你的<月>数且至多为5).',
            hyym_chuilandu: '吹兰杜',
            hyym_chuilandu_info: '当你受到伤害时,你可以令伤害来源获得<盲>和<乱>标记.',
            hyym_yuxinfang: '语芯芳',
            hyym_yuxinfang_info: '限定技,一轮游戏开始时,若你的体力值为1,你可以令一名其他角色获得<盲>和<乱>,你可以获得至多5枚<月>.',
            hyym_xianjue: '先决',
            hyym_xianjue_info: '一名其他角色的出牌阶段开始时,你可以获得/弃置其一张牌.若你此做,本阶段结束时,其获得/弃置你x张牌(x为其本阶段造成的伤害数*2).',
            hyym_linyong: '潾涌',
            hyym_linyong_info: '锁定技,当你进入濒死状态时,你令一名场上手牌数最多的其他角色交给你两张牌,当你脱离濒死状态时,你交给其一张牌.',
            hyym_lingye: '灵液',
            hyym_lingye_info: '你可以将一张本回合进入过弃牌堆的牌名的牌当无次数限制的【酒】使用.',
            hyym_feiyuan: '诽怨',
            hyym_feiyuan_info: '每名角色限一次,出牌阶段,你可以将一张没有<月>标记的手牌增加<月>并交给一名其他角色,并令其选择一项:1、失去2点体力;2、令你的攻击范围和手牌上限永久+1.',
            hyym_yuehun: '月魂',
            hyym_yuehun_info: '每回合结束时,你可以选择并获得弃牌堆中的一张<月>牌.',
            hyym_zhuzuo: '株坐',
            hyym_zhuzuo_info: '当你成为牌的目标时,你可以横置一名角色.',
            hyym_guihun2: '瑰魂',
            hyym_guihun2_info: '结束阶段,你可以摸x张牌(x为场上横置的角色数).',
            hyym_fengying: '风影',
            hyym_fengying_info: '蓄力技(3/3),出牌阶段,你可以消耗1点蓄力值并重铸一张牌,你不能使用同类型牌直到你以此法重铸其他类型的牌.当你使用牌后,你获得3点蓄力值.',
            hyym_fenghuolun_backup: '风火轮',
            hyym_liuxinghuoyux: '流星火雨',
            hyym_guduqiubai: '孤独求败',
            hyym_guduqiubai_info: '锁定技,出牌阶段开始/结束时,你摸两张牌.',
            hyym_aoshiqunxiong: '傲视群雄',
            hyym_aoshiqunxiong_1: '傲视群雄',
            hyym_aoshiqunxiong_info: '锁定技,你跳过判定阶段和弃牌阶段,你于出牌阶段内首次造成的伤害+1.',
            hyym_hengsaoqianjun: '横扫千军',
            hyym_hengsaoqianjun_info: '锁定技,你于出牌阶段内使用牌无距离限制且不可被响应.',
            hyym_zhimangzhuangtai: '致盲',
            hyym_zhimangzhuangtai_xiaoguo: '致盲',
            hyym_shouhuzhuangtai: '守护',
            hyym_shouhuzhuangtaix: '守护',
            hyym_liudaopaox: '六道炮',
            hyym_yingji_inf: '鹰击',
            hyym_jihanlingyux: '极寒领域',
            hyym_jihanlingyuy: '极寒领域',
            hyym_jihanlingyuz: '极寒领域',
            hyym_bingfenglujingx: '冰封路径',
            hyym_bingjiex: '冰界',
            hyym_bingjiex_1: '冰界',
            hyym_guaguliaodux: '刮骨疗毒',
            hyym_qianlidanjix: '千里单骑',
            hyym_xiangmozhichux: '降魔之杵',
            hyym_zhanbafangx: '战八方',
            hyym_baozoubingganx: '暴走饼干',
            hyym_fenhunx: '分魂',
            hyym_hundunshuangfu_2: '混沌双斧',
            hyym_shiwanfute: '十万伏特',
            hyym_shiwanfutex: '十万伏特',
            hyym_shiwanfute_info: '限定技,出牌阶段,你可以对任意名其他角色各造成1点雷电伤害,并令其每回合使用的首张牌无效直到其各自下回合结束.',
            hyym_bingshuangbaosui: '冰霜爆碎',
            hyym_bingshuangbaosui_info: '限定技,出牌阶段,你可以对一名其他角色造成2点冰冻伤害,对其相邻的所有其他角色各造成1点冰冻伤害.',
            hyym_yechatiancheng: '夜叉天惩',
            hyym_yechatiancheng_info: '限定技,出牌阶段,你可以选择三名连续的其他角色,令其依次随机选择一个未被选择过的选项:1、弃四张牌;2、受到2点无来源雷电伤害;3、弃两张牌,受到1点无来源雷电伤害.',
            hyym_jiliuchongji: '激流冲击',
            hyym_jiliuchongjix: '激流冲击',
            hyym_jiliuchongji_info: '限定技,出牌阶段,你可以对一名其他角色造成1点伤害,并令其计算与其他角色距离+3,直到其下回合结束.',
            hyym_tianbingdidong: '天冰地冻',
            hyym_tianbingdidongx: '天冰地冻',
            hyym_tianbingdidong_info: '限定技,出牌阶段,你可以令一名相邻角色的防具、护甲和所有非锁定技失效,且不能使用或打出牌/造成伤害,直到本回合结束.',
            hyym_jueduifangyu: '绝对防御',
            hyym_jueduifangyux: '绝对防御',
            hyym_jueduifangyu_info: '限定技,一轮开始时,你可以令你防止每回合前x次(x为你的体力上限)受到的伤害,持续8回合.',
            hyym_lingboweibu: '凌波微步',
            hyym_lingboweibux: '凌波微步',
            hyym_lingboweibu_info: '限定技,一轮开始时,你可以令你每回合前x次(x为你的体力上限)成为其他角色的牌的目标时取消之,持续8回合.',
            hyym_zhenyanbaofa: '真炎爆发',
            hyym_zhenyanbaofax: '真炎爆发',
            hyym_zhenyanbaofa_info: '限定技,出牌阶段,你可以对一名相邻的其他角色造成1点火焰伤害,令你本轮下4次造成的伤害变为1.5倍(向下取整).',
            hyym_tianganghuti: '天罡护体',
            hyym_tianganghutix: '天罡护体',
            hyym_tianganghuti_info: '限定技,一轮开始时,你可令三轮内,你摸牌阶段的摸牌基数+2且免疫每轮前x(x为你的体力上限)次体力流失.',
            hyym_shuorihuolei: '烁日火雷',
            hyym_shuorihuoleix: '烁日火雷',
            hyym_shuorihuolei_info: '限定技,出牌阶段,你可以获得以下效果:本回合限五次,当你造成1点伤害后,你摸一张牌.你对一名其他角色造成1点火焰伤害.',
            hyym_anchaotianding: '暗潮天钉',
            hyym_anchaotiandingx: '暗潮天钉',
            hyym_anchaotianding_info: '限定技,出牌阶段,你可以令一名其他角色失去1点体力并跳过下个出牌阶段.',
            hyym_shengguangqiyu: '圣光祈愈',
            hyym_shengguangqiyu_info: '限定技,出牌阶段,你可令至多三名角色回复所有体力.',
            hyym_zhimingrufeng: '织暝入风',
            hyym_zhimingrufengx: '织暝入风',
            hyym_zhimingrufeng_info: '限定技,一轮开始时,你可以获得3点护甲,并令6回合内,当你每回合前x(x为你的体力上限)次受到伤害后,你回复1点体力.',
            hyym_liangyishuangfeng: '两仪霜风',
            hyym_liangyishuangfengx: '两仪霜风',
            hyym_liangyishuangfengy: '两仪霜风',
            hyym_liangyishuangfeng_info: '限定技,当你成为一名其他角色牌的目标时,你可以取消之并令其本回合不能再对你使用牌,令你对其使用牌无次数限制直到你下回合结束.',
            hyym_fengshapanyu: '风砂磐御',
            hyym_fengshapanyux: '风砂磐御',
            hyym_fengshapanyu_info: '限定技,一轮开始时,你可令4回合内,每回合开始时,你获得1点护甲并摸一张牌;4回合结束后,你失去所有护甲,对一名其他角色造成x点伤害并回复x点体力(x为你失去护甲数的一半且向下取整).',
            hyym_duimiaoqilei: '兑淼祇雷',
            hyym_duimiaoqileix: '兑淼祇雷',
            hyym_duimiaoqilei_info: '限定技,出牌阶段,你可以对一名其他角色造成1点雷电伤害,于下轮游戏开始时视为对其使用x张【雷杀】(x为在此期间你使用的伤害牌数且至多为6).',
            hyym_jianbingliuhuo: '坚冰流火',
            hyym_jianbingliuhuox: '坚冰流火',
            hyym_jianbingliuhuoy: '坚冰流火',
            hyym_jianbingliuhuo_info: '限定技,当你受到伤害后,你可令伤害来源本回合内不能再造成伤害;出牌阶段,你可以令一名其他角色获得以下效果,持续8回合:每回合首次失去牌后,随机弃置一张牌,且每回合首次造成的伤害-1.',
            hyym_ziweixingyuan: '紫微星垣',
            hyym_ziweixingyuanx: '紫微星垣',
            hyym_ziweixingyuan_info: '限定技,出牌阶段,你可以令至多三名角色下次造成的伤害翻倍(不可叠加).',
            hyym_huiguangsuliu: '回光溯流',
            hyym_huiguangsuliu_info: '限定技,出牌阶段,你可重置所有其他技能,摸x张牌(x为你武将牌上的技能数).',
            hyym_lingxiaoshuilan: '凌霄水澜',
            hyym_lingxiaoshuilanx: '凌霄水澜',
            hyym_lingxiaoshuilan_info: '限定技,出牌阶段,你可以令一名其他角色清除所有桃源Buff,你对其造成1点伤害,并令其三轮内不能响应你使用的牌.',
            hyym_tenglinghuanzhong: '藤灵唤种',
            hyym_tenglinghuanzhongx: '藤灵唤种',
            hyym_tenglinghuanzhongy: '藤灵唤种',
            hyym_tenglinghuanzhong_info: '①出牌阶段开始时,你可以废除一个装备栏,选择一项:1、获得3枚<种子>标记,并令自己本阶段防止受到的伤害且使用牌不可被响应;2、令任意名相邻角色各获得1枚<种子>.<p>②锁定技,回合结束时,你移除自己的所有<种子>.<p>③当你使用牌指定一名有<种子>的角色为目标时,你可以移除其1枚<种子>并对其造成1点伤害.',
            hyym_hualingruize: '华灵瑞泽',
            hyym_hualingruize_info: '弃牌阶段开始时,你可以移除场上所有的<种子>,根据移除的总数,令所有此次移除<种子>的角色执行以下效果:小于3枚,回复1点体力并摸一张牌;等于/大于3枚,下一/两次对其他角色造成的伤害+1直到其下个出牌阶段结束.',
            hyym_lingyunhuisheng: '灵韵回生',
            hyym_lingyunhuisheng_info: '觉醒技,当你废除所有装备栏后/血量首次到达2或更低时,你减1点体力上限,回复所有装备栏并回复等量体力值,为【藤灵唤种】添加以下描述:<④锁定技,当你发动【藤灵唤种】①后/没有‘种子’且使用不为普通【杀】的伤害牌时,你获得1枚‘种子’.>,获得【神宇琼扉】.',
            hyym_shenyuqiongfei: '神宇琼扉',
            hyym_shenyuqiongfeix: '神宇琼扉',
            hyym_shenyuqiongfeiy: '神宇琼扉',
            hyym_shenyuqiongfei_info: '限定技,出牌阶段结束时,你可以令任意名角色有<种子>的角色回复所有装备栏并获得以下效果:下次死亡前,获得一张【复活币】且防止当回合内自己受到的所有伤害.',
            hyym_suiren: '岁稔',
            hyym_suiren_info: '出牌阶段每种字数限一次,你可将一张牌当【五谷丰登】对至多x(x为此牌字数)名角色使用.',
            hyym_jianlan: '剑兰',
            hyym_jianlan_info: '锁定技,每回合每种牌名限一次,当你使用牌时,若有目标的体力值等于此牌字数,你摸一张牌.',
            hyym_xinao: '嬉闹',
            hyym_xinao_info: '当你造成/受到1点伤害后,你可进行一次判定,可重铸至多x张牌(x为判定结果字数).',
            hyym_xifa: '戏法',
            hyym_xifa_info: '当一名角色的判定牌生效前,你可投掷一枚骰子,可打出一张字数不大于投掷点数的牌替换之(相等时你摸一张牌).',
            hyym_hunluanyichang: '乱',
            hyym_hunluanyichang_info: '拥有此标记的角色使用牌指定单一目标时,若此牌有其他合理目标,则随机为此牌重新指定一个其他目标,其移除<乱>.',
        },
        dynamicTranslate: {
            //动态翻译
            hyym_nanmanchongji(player) {
                var info = lib.skill.hyym_nanmanchongji.getInfo(player);
                return '出牌阶段,你可弃置一张锦囊牌/失去1点体力,视为对一名其他角色使用x张仅指定单一目标的【南蛮入侵】(x为你与其的距离).当你以此法造成伤害后,此技能本阶段失效.' + info[0];
            },
            hyym_cixiongjianwu(player) {
                var info = lib.skill.hyym_cixiongjianwu.getInfo(player);
                return '①锁定技,准备阶段,若你没有【雌雄双股剑】,你获得一张【雌雄双股剑】.<p>②当你使用【杀】指定一名角色为目标时,若你已装备【雌雄双股剑】,你可以弃一张牌,令其交给你一张牌,若此牌:为【杀】,则你立即对其使用之;不为【杀】,则你可以将一张牌重铸为【杀】.' + info[0];
            },
            hyym_cangyanxianji(player) {
                var info = lib.skill.hyym_cangyanxianji.getInfo(player);
                if (!player.storage.cangyanxianji) return '当一名距离不大于1的角色受到伤害后,若伤害来源不为你,你可弃置所有手牌/失去1点体力,对伤害来源造成1点火焰伤害/令其失去1点体力;你每造成3点伤害后,回复1点体力并摸两张牌.';
                else return info[0];
            },
            hyym_kuangleilingyu(player) {
                var info = lib.skill.hyym_kuangleilingyu.getInfo(player);
                return '当有角色受到雷电伤害后,你可以和任意名未受伤的其他角色各摸一张牌.' + info[0];
            },
            hyym_yihesu(player) {
                var str1;
                var str2;
                var str3;
                if (player.storage.yihesu.includes('hyym_youlingneilitang')) str1 = '【幽灵内力糖】';
                else str1 = '<span style="text-decoration:line-through">【幽灵内力糖】</span>';
                if (player.storage.yihesu.includes('hyym_caomei')) str2 = '【草莓】';
                else str2 = '<span style="text-decoration:line-through">【草莓】</span>';
                if (player.storage.yihesu.includes('hyym_xiaomijiu')) str3 = '【小米酒】';
                else str3 = '<span style="text-decoration:line-through">【小米酒】</span>';
                return `①出牌阶段各限一次,当你需要使用${str1}/${str2}/${str3}时,你可以视为使用之并摸一张牌.<p>②觉醒技,回合开始时,若你体力值为1,你移除【一合酥】①的一个选项,从游戏外获得一张【猫猫神的眷顾】.`;
            },
            hyym_jiquanshengtian(player) {
                var str1;
                var str2;
                var str3;
                if (player.storage.jiquanshengtian.includes('hyym_qingdianyanhua')) str1 = '【庆典烟花】';
                else str1 = '<span style="text-decoration:line-through">【庆典烟花】</span>';
                if (player.storage.jiquanshengtian.includes('hyym_shuaipao')) str2 = '【摔炮】';
                else str2 = '<span style="text-decoration:line-through">【摔炮】</span>';
                if (player.storage.jiquanshengtian.includes('hyym_tanghulubaozhu')) str3 = '【糖葫芦爆竹】';
                else str3 = '<span style="text-decoration:line-through">【糖葫芦爆竹】</span>';
                return `每轮各限一次,当你受到1点伤害后,你可以弃一张牌,视为使用一张${str1}/${str2}/${str3}.`;
            },
            hyym_tongcaixianzhen(player) {
                var str;
                if (!player.storage.caishendao) str = '两';
                else str = '一';
                return `一名距离不大于1的角色弃牌阶段开始时,你可以弃${str}张牌/失去1点体力,令其将手牌摸至体力上限(至多摸至五张).`;
            },
            hyym_tenglinghuanzhong(player) {
                if (!player.storage.tenglinghuanzhong) return '①出牌阶段开始时,你可以废除一个装备栏,选择一项:1、获得3枚<种子>标记,并令自己本阶段防止受到的伤害且使用牌不可被响应;2、令任意名相邻角色各获得1枚<种子>.<p>②锁定技,回合结束时,你移除自己的所有<种子>.<p>③当你使用牌指定一名有<种子>的角色为目标时,你可以移除其1枚<种子>并对其造成1点伤害.';
                else return '①出牌阶段开始时,你可以废除一个装备栏,选择一项:1、获得3枚<种子>标记,并令自己本阶段防止受到的伤害且使用牌不可被响应;2、令任意名相邻角色各获得1枚<种子>.<p>②锁定技,回合结束时,你移除自己的所有<种子>.<p>③当你使用牌指定一名有<种子>的角色为目标时,你可以移除其1枚<种子>并对其造成1点伤害.<p>④锁定技,当你发动【藤灵唤种】①后/没有<种子>且使用不为普通【杀】的伤害牌时,你获得1枚<种子>.';
            },
        },
        perfectPair: {
            //珠联璧合
        },
    };
    for (var name in tyhm.character) {
        if (!tyhm.character[name][4]) tyhm.character[name][4] = [];
        tyhm.character[name][4].push(`ext:桃源幻梦/image/character/${name}.jpg`);
        tyhm.character[name][4].push(`die:ext:桃源幻梦/audio/阵亡配音/${name}.mp3`);
    }
    lib.config.all.characters.add('tyhm');
    lib.config.characters.add('tyhm');
    lib.translate.tyhm_character_config = '<span style="font-family: xingkai">桃源幻梦</span>';
    return tyhm;
});
