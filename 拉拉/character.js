'use strict';
window.lala_import(function (lib, game, ui, get, ai, _status) {
    game.import('character', function () {
        var lovelive = {
            name: 'lovelive',
            connect: true,
            connectBanned: [],
            characterSort: {
                lovelive: {
                    miusi: ['llbz_gaobansuinaiguo', 'llbz_yuantianhaiwei', 'llbz_nanxiaoniao', 'llbz_xingkonglin', 'llbz_shizenike', 'llbz_xiaoquanhuayang', 'llbz_ximuyezhenji', 'llbz_xunlaihuili_wu', 'llbz_xunlaihuili_ge', 'llbz_dongtiaoxi'],
                    punv: ['llbz_gaohaiqiange', 'llbz_yingneilizi', 'llbz_heizelubi', 'llbz_jindaoshanzi', 'llbz_heizedaiya', 'llbz_songpuguonan', 'llbz_dubianyao', 'llbz_guomutianhuawan', 'llbz_xiaoyuanjuli'],
                    hongxiao: ['llbz_shangyuanbumeng', 'llbz_youmuxuecai', 'llbz_yingbanna', 'llbz_zhongxuxia', 'llbz_zhaoxiangguolin', 'llbz_aimaweierde', 'llbz_gongxiaai', 'llbz_jinjiangbifang', 'llbz_miyataile', 'llbz_zhonglanzhu', 'llbz_sanchuanyanzi', 'llbz_tianwangsilinai'],
                    liella: ['llbz_seguxiangyin', 'llbz_lanqianshadu', 'llbz_yeyuelian', 'llbz_pinanmingjin', 'llbz_tangkeke', 'llbz_yingxiaoluxinaizi', 'llbz_minvyayi', 'llbz_ruocaisiji', 'llbz_guizhongxiamei', 'llbz_guizhongdongqiu', 'llbz_weien', 'llbz_weienmagelite'],
                    lianzhikong: ['llbz_riyexiahuafan', 'llbz_cunyeshayexiang', 'llbz_xiwuzhuili', 'llbz_yizongshao', 'llbz_tengdaoci', 'llbz_dazeliulinai', 'llbz_baishengyinzi', 'llbz_tudingxiaoling', 'llbz_anyangsijiya'],
                    huanye: ['llbz_yeyu', 'llbz_chika', 'llbz_lizi', 'llbz_juli', 'llbz_you', 'llbz_guonan', 'llbz_daiya', 'llbz_lubi', 'llbz_huawan', 'llbz_hupo'],
                    wudou: ['llsp_wu_gaohaiqiange', 'llsp_wu_yingneilizi', 'llsp_wu_guomutianhuawan'],
                    yigou: ['llsp_yingneilizi', 'llsp_ximuyezhenji', 'llsp_shangyuanbumeng', 'llspyg_yingneilizi', 'llbz_meng_youmuxuecai'],
                },
            },
            character: {
                llbz_gaohaiqiange: ['female', 'shui', 4, ['llbz_shanyao', 'llbz_tianzhen', 'llbz_feixiao'], ['zhu', 'rare']],
                llbz_yingneilizi: ['female', 'shui', '2/6', ['llbz_qinyin', 'llbz_yinghua', 'llbz_zhanfang'], ['rare']],
                llbz_seguxiangyin: ['female', 'xing', '4/5', ['llbz_jixing', 'llbz_gongming', 'llbz_paiyi', 'llbz_niepan'], ['zhu', 'legend']],
                llbz_shangyuanbumeng: ['female', 'hong', 4, ['llbz_weiya', 'llbz_bochi', 'llbz_zhenxin'], ['zhu', 'rare']],
                llbz_gaobansuinaiguo: ['female', 'miu', 4, ['llbz_qingre', 'llbz_huisu', 'llbz_lide'], ['zhu', 'epic']],
                llbz_youmuxuecai: ['female', 'hong', '4/6', ['llbz_honglian', 'llbz_lieyan', 'llbz_ranjin'], ['legend']],
                llbz_yingbanna: ['female', 'hong', 4, ['llbz_shuangmian', 'llbz_hengshi', 'llbz_yanyi'], ['legend']],
                llbz_zhongxuxia: ['female', 'hong', '3/4', ['llbz_tanfan', 'llbz_xinao', 'llbz_qinjin'], ['rare']],
                llbz_heizelubi: ['female', 'shui', 5, ['llbz_tangguo', 'llbz_tianmi'], ['junk']],
                llbz_zhaoxiangguolin: ['female', 'hong', 4, ['llbz_mizi', 'llbz_laichuang', 'llbz_meili'], ['legend']],
                llbz_aimaweierde: ['female', 'hong', 3, ['llbz_meihuo', 'llbz_huanxing', 'llbz_mili'], ['legend']],
                llbz_gongxiaai: ['female', 'hong', 4, ['llbz_jiqing', 'llbz_xiaohua', 'llbz_liantong'], ['epic']],
                llbz_jinjiangbifang: ['female', 'hong', '4/6', ['llbz_rumeng', 'llbz_huanmeng'], ['epic']],
                llbz_miyataile: ['female', 'hong', '3/5', ['llbz_miyatiancai', 'llbz_zaoshu', 'llbz_yuren'], ['epic']],
                llbz_zhonglanzhu: ['female', 'hong', 3, ['llbz_dute', 'llbz_nvwang', 'llbz_duchang'], ['epic']],
                llbz_jindaoshanzi: ['female', 'shui', 3, ['llbz_duotianshi', 'llbz_jianglin', 'llbz_duotian'], ['epic']],
                llbz_heizedaiya: ['female', 'shui', 3, ['llbz_zhaoshui', 'llbz_zhiyuan', 'llbz_jueyi'], ['epic']],
                llbz_yuantianhaiwei: ['female', 'miu', 4, ['llbz_qianggong', 'llbz_guipai', 'llbz_kuanshu'], ['epic']],
                llbz_nanxiaoniao: ['female', 'miu', 3, ['llbz_chunjie', 'llbz_fuhei', 'llbz_jinghua', 'llbz_paolu'], ['legend']],
                llbz_xingkonglin: ['female', 'miu', 4, ['llbz_zhiyan', 'llbz_fanxing', 'llbz_maopu', 'llbz_doumao'], ['rare']],
                llbz_shizenike: ['female', 'miu', '2/5', ['llbz_weixiao', 'llbz_rixiang', 'llbz_xihun', 'llbz_maimeng'], ['epic']],
                llbz_xiaoquanhuayang: ['female', 'miu', 3, ['llbz_mifan', 'llbz_lianren', 'llbz_qiuyuan'], ['epic']],
                llbz_ximuyezhenji: ['female', 'miu', 3, ['llbz_puqu', 'llbz_cainv', 'llbz_zhijue'], ['rare']],
                llbz_xunlaihuili_wu: ['female', 'miu', '4/6', ['llbz_gewu', 'llbz_yingwu', 'llbz_manmiao'], ['epic']],
                llbz_xunlaihuili_ge: ['female', 'miu', '4/6', ['llbz_gewu', 'llbz_gaoyin', 'llbz_tianlai'], []],
                llbz_dongtiaoxi: ['female', 'miu', 3, ['llbz_zhanxing', 'llbz_mingshu', 'llbz_fuchu'], ['legend']],
                llbz_songpuguonan: ['female', 'shui', 4, ['llbz_qianyong', 'llbz_shuijian', 'llbz_fanteng'], ['rare']],
                llbz_dubianyao: ['female', 'shui', 4, ['llbz_chaoxi', 'llbz_fachuan', 'llbz_yongdong'], ['rare']],
                llbz_lanqianshadu: ['female', 'xing', '3/4/1', ['llbz_dagong', 'llbz_kuozhan', 'llbz_zili'], ['epic']],
                llbz_yeyuelian: ['female', 'xing', '4/4/1', ['llbz_beiguo', 'llbz_tanwan'], ['rare']],
                llbz_pinanmingjin: ['female', 'xing', 3, ['llbz_shenshe', 'llbz_tonghua'], ['epic']],
                llbz_dawangjuzuchong: ['female', 'xing', 4, ['llbz_piaofu', 'llbz_huanjin', 'llbz_huiyi', 'llbz_tongyuan'], []],
                llbz_tangkeke: ['female', 'xing', 4, ['llbz_banyan', 'llbz_mofang', 'llbz_xuexi', 'llbz_quanjin'], ['legend']],
                llbz_guomutianhuawan: ['female', 'shui', 3, ['llbz_tanchi', 'llbz_zhengshu'], ['legend']],
                llbz_sanchuanyanzi: ['female', 'hong', 3, ['llbz_jiantao', 'llbz_guzhi', 'llbz_enyuan'], ['epic']],
                llbz_tianwangsilinai: ['female', 'hong', 3, ['llbz_keji', 'llbz_daiban', 'llbz_tianshi'], ['rare']],
                llbz_xiaoyuanjuli: ['female', 'shui', 3, ['llbz_yingzi', 'llbz_reqing', 'llbz_mashu'], ['epic']],
                llbz_yingxiaoluxinaizi: ['female', 'xing', 3, ['llbz_biaoyan', 'llbz_yanchu'], ['rare']],
                llbz_minvyayi: ['female', 'xing', 3, ['llbz_chongni', 'llbz_xiaoji'], ['rare']],
                llbz_ruocaisiji: ['female', 'xing', 3, ['llbz_keyan', 'llbz_ceshi', 'llbz_shouji'], ['epic']],
                llbz_guizhongxiamei: ['female', 'xing', 4, ['llbz_jinmi', 'llbz_gouwu', 'llbz_zhuanqian'], ['epic']],
                llbz_guizhongdongqiu: ['female', 'xing', 4, ['llbz_jiekong', 'llbz_lixing'], ['rare']],
                llbz_weien: ['female', 'dui', 5, ['llbz_chuxin', 'llbz_haosheng', 'llbz_douzheng', 'llbz_denggao', 'llbz_gusha'], ['legend']],
                llbz_weienmagelite: ['female', 'xing', 3, ['llbz_chuxin', 'llbz_haosheng', 'llbz_denggao'], ['rare']],
                llbz_riyexiahuafan: ['female', 'lian', 3, ['llbz_danchun', 'llbz_kaihua', 'llbz_hanbao', 'llbz_xieli'], ['zhu', 'legend']],
                llbz_cunyeshayexiang: ['female', 'lian', 3, ['llbz_lianjie', 'llbz_tongxin', 'llbz_zhaogu', 'llbz_xieli'], ['rare']],
                llbz_xiwuzhuili: ['female', 'lian', 3, ['llbz_sanwu', 'llbz_dianbo', 'llbz_zhiqiu', 'llbz_xieli'], ['epic']],
                llbz_yizongshao: ['female', 'lian', 4, ['llbz_jianshen', 'llbz_chongjing', 'llbz_chongjing_hidden', 'llbz_buzhang', 'llbz_xieli'], ['rare']],
                llbz_tengdaoci: ['female', 'lian', 2, ['llbz_huanhua', 'llbz_miegu', 'llbz_zhimian', 'llbz_xieli'], ['epic']],
                llbz_dazeliulinai: ['female', 'lian', 3, ['llbz_diaoyu', 'llbz_liuli', 'llbz_xieli'], ['rare']],
                llbz_baishengyinzi: ['female', 'lian', 3, ['llbz_caiyi', 'llbz_tongdao', 'llbz_xieli'], ['rare']],
                llbz_tudingxiaoling: ['female', 'lian', 3, ['llbz_fenghun', 'llbz_xieli'], ['rare']],
                llbz_anyangsijiya: ['female', 'lian', 3, ['llbz_lingyu', 'llbz_gaoshou', 'llbz_xieli'], ['legend']],
                llbz_yeyu: ['female', 'huan', 3, ['llbz_zhaohuan', 'llbz_zhanbu', 'llbz_xinling'], ['zhu', 'rare']],
                llbz_lizi: ['female', 'huan', 3, ['llbz_hymashu', 'llbz_hyqushi', 'llbz_hymofa'], ['epic']],
                llbz_chika: ['female', 'huan', 4, ['llbz_renshu', 'llbz_kaidi', 'llbz_shoulie'], ['hiddenSkill', 'epic']],
                llbz_juli: ['female', 'huan', 3, ['llbz_mowang', 'llbz_qichang', 'llbz_jingling'], ['epic']],
                llbz_you: ['female', 'huan', 4, ['llbz_xinshi', 'llbz_dapao', 'llbz_feiyue'], ['epic']],
                llbz_guonan: ['female', 'huan', 4, ['llbz_jixie'], ['rare']],
                llbz_lubi: ['female', 'huan', 2, ['llbz_bianhuan', 'llbz_fushen'], ['rare']],
                llbz_daiya: ['female', 'huan', 4, ['llbz_fushou', 'llbz_henshin', 'llbz_supporter', 'llbz_chuangshi'], ['rare']],
                llbz_huawan: ['female', 'huan', 3, ['llbz_mianbao', 'llbz_guwu'], ['junk']],
                llbz_hupo: ['female', 'huan', 4, ['llbz_fuzuo'], []],
                llsp_wu_gaohaiqiange: ['female', 'shui', 5, ['llsp_wu_wudao', 'llsp_wu_jidang', 'llsp_wu_zhanjue'], []],
                llsp_wu_yingneilizi: ['female', 'shui', 4, ['llsp_wu_guimei', 'llsp_wu_gantian', 'llsp_wu_keren', 'llsp_wu_tianxie'], []],
                llsp_wu_guomutianhuawan: ['female', 'shui', 4, ['llsp_wu_qiangshi', 'llsp_wu_songwen', 'llsp_wu_shenghua'], []],
                llsp_yingneilizi: ['female', 'miu', 3, ['llsp_qinyin', 'llsp_qiangwei', 'llsp_fenfei', 'llsp_zhuanxiao'], ['doublegroup:miu:shui']],
                llsp_ximuyezhenji: ['female', 'miu', 3, ['llsp_yuepu', 'llsp_jiepai'], []],
                llspyg_yingneilizi: ['female', 'shui', 3, ['llsp_luanyin', 'llsp_shengfang'], []],
                llsp_shangyuanbumeng: ['female', 'qun', 4, ['llsp_huoxing', 'llsp_guilai', 'llsp_nuquan'], []],
                llbz_meng_youmuxuecai: ['female', 'hong', 7, ['llbz_zhuoqing', 'llbz_yuhuo', 'llbz_chuanzhu', 'llbz_liaoyuan'], []],
            },
            characterIntro: {
                llbz_gaohaiqiange: '浦之星女学院二年级生,Aqours的发起人.三姐妹的老幺,家里经营旅馆.讨厌败给别人,开朗蛮干的天性总是一次又一次地把周围的人卷进麻烦.<初次见面!我是这间位于静冈县骏河湾内浦的浦之星女学院的高中2年生、高海千歌!成为偶像什么的,我最初认为这对住在乡下的我们是没可能到达的遥远世界、未开始干便会放弃吧.但是——只要不放弃梦想便会实现——憧憬的那个学园偶像组合μ’s告诉了我.虽然大家都在取笑,但我是认真的.只要是稍微也想接近那闪闪发亮、最喜爱的μ’s多一点.虽然我也明白这是有勇无谋的挑战,但——就算失败只要去做就行.就如穗乃果酱所说:不尝试的话就什么都不会开始——所以我们现在下定决心踏出第一步!>',
                llbz_yingneilizi: '由东京秋叶原国立音乃木坂学院转学到高海千歌班上的二年级生,是一个有气质的美人.虽然看起来像大人一样沉着冷静,但实际上是个慌慌张张的人,也会过早地做出错误的判断.<我是浦之星女学院高中2年的樱内梨子.我只是由城市到来的转校生——其实是个性格土气的普通女高中生.虽然已经说了很多遍——但还是被完全不相信我说的、强硬的千歌酱拉进来,不知何时开始就成为School Idol了.所以我完全没有作为School Idol的自信——但为了拜托了这样的我的大家,希望也能献出我微少的力量吧.最初由秋叶原来这间竟然是在蜜柑山里面学校时,不断被吓到了,但现在已经是我最喜爱的地方.给了我这个特别的地方——实现大家的梦想便是我的梦想.竟然还有这样的做法、这是我来到这里、人生中初次知道的呢————>',
                llbz_heizelubi: '浦之星女学院的1年级学生.和花丸关系很好,总是在一起.虽然爱哭又胆小,但不愧是名门闺秀,内心有主见.一直憧憬着偶像.唯一擅长的是缝纫.<各位,初初初初,初次见面!我,我叫黑泽露比,对不起,这次说话太用力了,我不知道该怎么办,我已经不知道了.我从来没有和爸爸以外的男人说过话,所以我一直很怕男人.我一直很喜欢偶像,想成为偶像.虽然我没有想过这样的露比会成为偶像,但是我下定决心绝对不会放过这个机会.所以今天虽然很紧张,但我会闭上眼睛,尽力而为.虽然现在露比很害怕,但是我最喜欢大家,请支持这样的露比!>',
                llbz_gaobansuinaiguo: '音乃木坂学院二年级生.μ’s的发起人.她的优点是总是面带笑容,充满活力.凭直觉和想法行动,一旦决定了就勇往直前.即使遇到一些困难,也会凭借天生的超积极思考不断突破.μ’s的引擎,也是牵引者.家中经营日式传统甜点的老店<穗村>.',
                llbz_shangyuanbumeng: '虹咲学园的2年级学生.是无论做什么事都孜孜不倦的努力家.以某件事为契机开始成为学校偶像.<初次见面,我是上原步梦.那个,像这样像大家传递信息还是第一次,有点紧张到心跳加速了.不过,成为学园偶像是我和重要的朋友一同找到的重要的梦想,因此我会和自己的名字一样,朝向梦想一步一步努力前进!虽然唱歌和跳舞都还不熟练,外表也……大概普通？但是,那个,只有努力我是很擅长的,所以请支持我吧!请多多指教!>',
                llbz_seguxiangyin: '结丘女子高等学校第一届学生.非常喜欢唱歌,以前是合唱部的成员,但是不擅长在别人面前歌唱.虽然很腼腆,但是拥有一颗纯粹的热爱歌曲的心,以及能够为他人着想的温柔,逐渐成长为引领着Liella!前进的存在.<初次见面,我叫涩谷香音.啊,对不起,我真的不太擅长这个.那个,自我介绍对吧,自我介绍.名字是香音,生日是5月1日.在家里的咖啡店里帮忙并且住在那里,是非常普通的高中生.没有什么特别擅长的……诶？唱歌？不行不行不行!…虽然说很紧张,但是真的很喜欢唱歌,想让大家都打起精神.没有什么特别的理想,也没有什么擅长的学科……啊,真是太没有特点了!但是呢,虽然我是个这么普通的人,不,应该是正因为是这样普通的我,才会有只有我能做到的事情,所以决定开始做学园偶像.>',
                llbz_yingbanna: '虹咲学园的1年级学生.是个稳重的优等生,同时也是戏剧部和学校偶像同好会的成员.<各位,你们好.我是樱坂雫.我很喜欢戏剧,在学校里是演剧部的一员.戏服之类的是自己制作,也会定期举行公演活动喔.还有就是,因为觉得对演戏有帮助所以在进行学园偶像的活动,这次我被尊敬的前辈邀请说‘作为学园偶像,试着把更高层次的舞台目标吧’于是我便注意到了.无论戏剧还是学园偶像,都是为了让来观看的人快乐、感动,让他们露出笑容的表演,两者都是相同的事.所以,我想试着更积极地挑战学园偶像的活动!把在演剧部锻炼回来的表演力为武器,我会为了让各位能够露出笑而更加用心的.虽然我还是个不够格的人,但如果有人来看我尽全力的表演的话我很高兴的!还请多多指教!>',
                llbz_zhongxuxia: '虹咲学园的1年级学生.非常喜欢可爱的事物,对校园偶像的憧憬也比别人强一倍.她性格好强,只要别人叫她<かすかす>,她就会生气.<大～家好～!我是大家的偶像小霞霞喔—!我以世界第一的偶像为目标,每天都在努力地做唱歌跳舞之类的训练!当然,为了变得更加～加可爱,也有在秘密地努力着喔～.还有啊～寄诡异的信给对手们,在对手的鞋子里偷偷放热狗面包之类的事情也准备得万无一失——不对,哇哇,这个是秘密才对!咳咳!总、总之,大家要支持小霞霞喔!>',
                llbz_youmuxuecai: '虹咲学园的2年级学生.是充满活力的笑容和强有力的表演的学校偶像.可能是因为忙于校园偶像活动,有传言说<校内没有人见过她>.<大家,你们好吗？我是优木雪菜!我啊,其实有个很大的野心!那就是成为能让‘喜欢’充满全世界的学园偶像!现在这世上,对喜欢的事率直地说喜欢,不是有点难吗.因为觉得不好意思,或者会被人戏弄,有各种各样的理由.但是啊,学园偶像的世界没有这回事,正在当的人也好,支持着的人也好,大家都很喜欢学园偶像,能率直地说出喜欢.是个闪闪发光,又很快乐,十分温柔的世界.因为,这里充满着喜欢.我想要更进一步扩大这个谁都能说出喜欢的世界!虽然可能是个没有结果的梦想,不过我相信只要和大家一起的话总有一天就会实现.和我一起创造一个充满喜欢的世界吧!请多多指教!>',
                llbz_zhaoxiangguolin: '虹咲学园的3年级学生.她拥有着和高中生不符的容貌和身材,是杂志的模特.与成熟的外表相反,意外地也有纯情的一面.<嗨!我是朝香果林哦.请多指教♪呐,你喜欢怎样的学园偶像？想看怎样的演唱会？充满活力那种？还是说,十分可爱的？难道是冷酷帅气那种？虽然哪种都挺好的,不过我想让你看的是……只有我能做到的非常刺激的演唱会哦.你问那是怎样的刺激？那·就·是,看了我这身体就懂了吧？唔哼哼.就以我这有自信能吸引人的身体,表现出性感、热情、像梦一样的,那种大人的演唱会来让大家兴奋♪绝对不会让你后悔的,所以如果能十分热烈地支持我的话我也会很高兴.我会等著大家热情的声援的哦.唔哼哼♪>',
                llbz_aimaweierde: '虹咲学园的3年级学生.向往学校偶像,从瑞士来的留学生.是一个落落大方,我行我素,热爱故乡的山和自然,心地善良的女孩子.<你好,我是艾玛.我来自充满着大自然的瑞士.所以,我最喜欢山啊森林啊这类自然的东西了.空闲的时候也会出去感受森林啊、在河边玩水之类的.喜欢的东西是——啊,面包边也很喜欢!日本的面包边,松松软软的非常buo～no♪吃一口心情就会很高兴!学园偶像也一样,光是看着就会感觉心情雀跃对吧？那就是,我想试着开始学园偶像活动的理由.看着我就能让很多人心情雀跃,露出笑容的话,就是最幸福的了!大家,请和我一起享受吧!>',
                llbz_gongxiaai: '虹咲学园二年级生.运动神经超群,活跃游走于各社团作帮手.乐于助兴、热心助人的性格带来了很多朋友.<早上好.我是宫下爱.收到了学校的朋友邀请,于是就开始当学园偶像了!大家请多关照哦,爱你!因为我是爱!就是这样,接下来就是爱姐擅长的冷笑话100连发的时间开――诶,不能开始？……啊,嗯,抱歉.要认真对吧,要认真.那个,别看我这样,爱姐其实还蛮算是个什么都会的优等生啊.看不出来？不不不,是真的啊!学习和运动都还相当不错的,打扮也是……你瞧瞧？对这样的爱姐,刚才的朋友对我说了,‘我想学园偶像的世界是和爱迄今所见的世界截然不同的哦.所以,要不要挑战一下？’之类的啊.真的是,我好兴奋啊!爱姐可是被那么说的话就会燃起来的那种人呢.所以!就决定目标是在学园偶像的世界当Number One了!想看一下,爱姐没有见过的世界!也想让大家瞧瞧那样的景色!所以,和我一起兴致勃勃地上吧!>',
                llbz_jinjiangbifang: '虹咲学园的3年级学生.虽然总是睡眼惺忪,但对于做饭和疼爱妹妹的事情却充满热情.<各位,早～上好……我是小彼方喔～.哼哼,今天的小彼方,几乎是前所未有地充满着干劲……我要在学园偶像的活动上成为第一,让最喜欢的妹妹小遥夸奖我……被她尊敬…….所以说,自我介绍的文章,已经好好地考虑过了……只要念出来的话……毫无疑问地……就是小彼方的胜利………………zzz…………………………啊.没、没在睡哦……只是,果然要转换方向…….从今以后就专门把小彼方最棒的魅力……睡相让你看个够…….所以,支持,就拜托了哦………………zzz>',
                llbz_miyataile: '虹咲学园的3年级学生.来自NYC的留学生.她是世界著名的音乐世家泰勒家的女儿,14岁就跳级进入了3年级.<Hi,我是米娅·泰勒.我算是半个作曲家,懂了吗？啊,这也行吧.我本来对学园偶像没什么兴趣,却被岚珠强行带到了日本,那时觉得挺麻烦的.但是,来到这里,和学园偶像们相遇,我又一次遇到了自己想做的事情.那是我小时候放弃了的一个梦想——我想唱歌.我不讨厌作曲,也觉得很适合自己,但我一直想唱歌.我想用我最喜欢的歌来表达我的感受、我的世界、我的感情.但是,我没有信心,所以我逃避了.说实话,我现在还不太自信.但是,璃奈、小宝和大家都告诉我,<如果是喜欢的东西,那我肯定能做到.>所以我要勇敢唱出声.从小的舞台开始,努力把自己的歌唱出去.所以,很高兴你能看着我.我开始做学园偶像了,对吧!>',
                llbz_sanchuanyanzi: '虹咲学园的1年级学生.性格认真,能<为了大家>行动.和岚珠是青梅竹马.<诸位,初次见面.我是三船栞子.我曾对学园偶像抱有不好的印象.然而,给我洗刷掉这个不好印象的正是同好会的…….诶？语气太生硬了？不是在演讲啊……？是呢,这里不是那样的场合.那啥……我觉得我不太能清晰地表达出我的想法,也经常被人说不懂得变通,可我还是想说:希望你能得到真正的幸福,这就是我的想法!我的学园偶像之路才刚刚起步,虽然还不太成熟……但是通过同好会大家的教导,让我每天都能得到许多新的发现.从而不断成长.所以,请聆听我的歌曲,请让我传达予你.为了能获得真正的幸福,你能和我一起改变吗？我必全心全意拿出成果,敬请多多指教!>',
                llbz_zhonglanzhu: '虹咲学园的2年级学生.来自香港的留学生.大小姐做派,所有事都追求尽善尽美.喜欢的食物是肉.<你好!我是钟岚珠!别人总是说,<岚珠和我们不一样啦,你是生在闪闪发光的世界里的人>;<你与众不同,什么都做得到,好厉害>.其实,我根本没有那么闪闪发光.所以,在找到真正闪闪发光的东西的时候,我特别兴奋.我绝不会忘记那时的学园偶像祭,那时我所见到的虹学会的学园偶像们!她们是那样充满魅力、闪闪发光,岚珠我一眼就深深爱上了!我就马上从香港赶过来了.我想和大家一起做学园偶像!学园偶像,还有虹学会的大家,都教给了岚珠许多不知道的东西.将我引入了那梦想中的世界!所以,以后岚珠想向大家传递那梦幻般的世界.虽然不知道能不能好好实现,但我想和大家一起期待!来和岚珠一起玩吧,好不好嘛!>',
                llbz_jindaoshanzi: '浦之星女学院一年级生,身穿小恶魔风格的时装,自称为<堕天使夜羽>,来自都市沼津.开朗、不胆怯,机灵又聪明,但是运气非常差,所到之处都会遇到意料之外的麻烦.<只要看到这双像夜羽的黑瞳——你就一定会坠入爱河♪我是令你落在这永远燃烧的恋爱地狱的堕天使偶像津岛善子夜羽.呐,知不知道？夜羽其实就是——恶魔♡我在远足时绝对会下雨、下雪时绝对会滑倒、也没有试过抽中便利店的抽奖、还在期末考试前患上流感——这种霉运一定不是盖的♪我一定是因为可爱而惹怒天神的堕天使呢♡怎样？和夜羽一起堕落吧？绝对十分愉悦的♪>',
                llbz_heizedaiya: '浦之星女学院3年级学生.家中经营渔业,是当地的名门望族的女儿.在校担任学生会长.有一个名叫黑泽露比的妹妹.是自尊心很强的完美主义者,绝对不允许半途而废和歪曲的事情.<要说的话,学园偶像这种破廉耻的活动竟然跟自己扯上关系,以前的我一定认为是不可能的事——就算尽了全力最后还是输了也是没办法的事.不过既然年幼的妹妹当了人质——就参加了以LoveLive!为目标的活动.不过现在有我参加的话——绝对不会容许优胜这2个字以外的东西哦？黑泽家的女儿绝不相配第二次的败阵.让我成为成员之一——我会让你后悔哦？做好觉悟吧,千歌桑？呵呵……>',
                llbz_yuantianhaiwei: '16岁.高中二年级.认真努力的大和抚子.出身于日本舞传统世家,散发着凛然的气息.自幼修行弓道,礼节法度周到完备的女孩子.严以律己,严以待人的典型.最讨厌做坏事和懒惰.和穗乃果、小鸟是青梅竹马.',
                llbz_nanxiaoniao: '16岁.高中二年级.穗乃果最好的朋友.两人从小一起长大,从幼儿园开始就一直在一起玩.与穗乃果形成鲜明对比的是,她的性格沉稳柔和,学习也很顺利,是优等生.虽然为人温文尔雅,但内心坚强,不胆怯.',
                llbz_shizenike: '17岁.高中三年级.以偶像为目标日夜刻苦钻研,真真正正的偶像宅.作为以偶像为目标的前辈,经常以专横的态度对待穗乃果等人.因此,她经历了很多失败,并且显得异常笨拙.<にっこにっこにー> 是口癖.',
                llbz_xiaoquanhuayang: '15岁.高中一年级.在班里也不怎么引人注目的乖乖女.没什么自信,做什么都很容易放弃.憧憬μ’s,与凛、真姬一起加入.和凛关系很好.总是在一起.最喜欢白米饭.',
                llbz_ximuyezhenji: '15岁.高中一年级.双亲经营着大医院的大小姐.歌唱出类拔萃,作曲一流,钢琴也备受期待.是个不擅长表达真实感情和想法,言行不一的傲娇冰美人.凭着与生俱来的气魄甚至敢于强硬地与高年级生争论,其实也有着很怕寂寞的一面.',
                llbz_xunlaihuili_wu: '17岁.高中三年级.四分之一俄罗斯血统.头脑清晰,运动神经超群,无论做什么都能顺利完成.在学校也人气出众,有很强的贵任感,担任过学生会会长.',
                llbz_xunlaihuili_ge: '17岁.高中三年级.四分之一俄罗斯血统.头脑清晰,运动神经超群,无论做什么都能顺利完成.在学校也人气出众,有很强的贵任感,担任过学生会会长.',
                llbz_dongtiaoxi: '17岁.高中三年级.17岁.高中三年级学生.与绘里不同的是,她性格开朗,有着混合着关西腔的独特的说话方式.绘里和她那酷酷的气氛是绝配.性格开朗大方,在全体成员中也被认为是精神年龄最成熟者.温柔的治愈系大姐姐,有一些神秘感.',
                llbz_xingkonglin: '15岁.高中一年级.运动系少女,总是很开朗.比起闷闷不乐更喜欢活动身体的类型.因为是体育系出身,所以很照顾人,总是照顾着幼时的玩伴花阳.不管被说什么,回答都很大声.麻利地练习.',
                llbz_dubianyao: '高中二年级的学生,同时也是高海千歌的同学.高台跳水的能力非常好,是国家级别的运动员.性格是行动先于考虑的类型.父亲是船长,因此认为自己将来也同样会当船长.<我是浦之星女学院高中2年级1班,学号28号的渡边曜!擅长跳水和天气预报!得意技能是向前飞身翻腾三周半抱膝!!以上!!!……呃不对,感觉好像没什么可说的了啊——怎么办啊,果然我,不太适合做偶像呢.这个,还有就是肌肉锻炼和跑步是每天的功课,希望有一天将来有一天能继承父亲的工作,成为渡轮的船长!嗯…这样真的就可以了吗？偶像的自我介绍——完全不应该是这样的吧,嘛无所谓啦! 试着唱歌和跳舞之后,感觉很意外地发现了自己喜欢做的事情呢.这种团体活动也很有趣呢♪那么渡边曜,现在要向着LoveLive!启航!出发!!敬礼!!!>',
                llbz_songpuguonan: '浦之星女学院三年级生.看起来很有大人的感觉,性格爽朗、不拘小节.行事冷静,微微散发着冰冷的气质.<我,松浦果南是帮忙在内浦海经营浮潜用品店家业的高中3年生.内浦自豪的是,翠绿的山和蔚蓝的海,还有广阔的天空上眩目的太阳和飘浮的白云——只要每天看着这样的景色,我便觉得很幸福了.啊,不过这里不加上长年友好的知心青梅竹马的存在的话——千歌会发怒吧？嘻嘻.我的青梅竹马千歌,有点令人担心和幼稚,但是个充满精力和拥有超乎常人的想像力的孩子——最近又好像在想什么奇怪的计划.不过像这样让波浪摇拂着身体,什么都不想地尽情游泳,便会把脑里的烦乱一扫而空.嘛总觉得不能不帮助可爱的青梅竹马的计划这种感觉很奇妙呢.>',
                llbz_lanqianshadu: '结丘女子高等学校第一届学生.是香音青梅竹马的好朋友.很早以前就开始学习舞蹈,在各种大赛上也取得了很多好成绩.努力家和忘我的性格非常招人喜欢,作为舞蹈担当,为Liella!水平的进化做出了很大的贡献.最喜欢圆圆的东西.<初次见面,早啊早啊早啊!我是岚千砂都.其实我啊,虽然是因为想跳舞才进了这所学校,但因一次偶然的机会成为了学园偶像.虽然有过<自己真的可以做得来吗？>的念头,但是只要想着能和大家一起享受自己最拿手的舞蹈就没什么问题了.对了,可以的话,下次一起跳舞吧!？性格开朗,很好相处哦,被人说过生气起来会很可怕,但是我觉得都是他们心理作用啦!我喜欢和大家一起去购物,还喜欢跟朋友聊天.对了,我还很擅长做饭哦!平时在表参道里的章鱼烧店里打工,有时间的话欢迎来玩哦.来了.一碗章鱼烧盖饭,让您久等啦!>',
                llbz_yeyuelian: '结丘女子高等学校第一届学生.在学校附近的大豪宅里长大的大小姐.结丘女子高等学校创办人的女儿,从小就擅长钢琴和花样滑冰,是Liella!中的王牌.凭借稳重端庄的举止在学生中别具人气,但同时也有不谙世事的一面.<初次见面.我叫叶月恋.谢谢你对结丘女子高校感兴趣.我呢,打小就生活在这座城市里,为了将母亲缔造的这座学校打造成一所优秀的学校而努力着.学习方面肯定不用说,还有礼仪和行为举止,为了建立能给全部高中生做模范的学校,我每天都端正态度坚持不懈地努力着.一定要达成增加学生,成为这座城市里最好的高中的目标.这不是什么期望,而是必须要完成的义务.喜欢的食物是草莓,倒是没有什么特别的讲究.>',
                llbz_pinanmingjin: '结丘女子高等学校第一届学生.小时候作为童星出演过广告节目的女孩子.虽然有傲慢、好胜的地方,但本性上还是个能够理解他人悲伤的温柔的好孩子.能在紧要关头发挥出令人意外的能力,是Liella!中(Joker)谐星般的存在.老家是学校附近的神社.<哼哼,终于轮到我出场了吗.没关系.不用担心,女主角总是在后面才登场的.名字的话想必大家都已经知道了吧,平安名堇.没错,就是那个堇.为了优先考虑个人隐私和学业,一度保留了演艺圈的活动,但进入高中之后,终于作为学园偶像回到了大众面前.至于梦想,当然是成为全国,不,是全宇宙都名声大振的超凡魅力银河学园偶像.啊,我在做主播,如果可以的话还请点个关注哦!Galaxy!>',
                llbz_dawangjuzuchong: '大王具足虫',
                llbz_tangkeke: '结丘女子高等学校第一届学生.由上海转入结丘女子高中的女孩.非常喜欢学园偶像,邀请香音开始做学园偶像.是一位爱笑又爱哭、热情洋溢的女孩子,对于喜欢的事物会直率地表现出来.很喜欢可爱的东西,是Liella!中小太阳一般的存在.<初次见面,米纳桑,我是唐可可哟.请叫我可可.不是瞌瞌睡睡的那个瞌瞌哟!快起来!Wake up!可可一直憧憬着学园偶像,从上海来到了日本!喜欢的东西是巧克力香蕉和那不勒斯意面,还有学园——偶像!在妈妈的故乡日本,我会努力成为学园偶像!米娜桑也和我一起作为学园偶像油加(加油)吧!大声回答我!再来一次!要上了哦!没错!就是这样!>',
                llbz_guomutianhuawan: '浦之星女学院一年级学生,是当地代代传承的寺庙女儿.喜欢读书,特别喜欢日本文学的文学少女.因为擅长唱歌而加入了圣歌队.体贴周围人的温柔性格.<真的想不到咱竟然会成为学园偶像──但又不能放下挚友的露比酱不顾——咱会当这是宿命来努力的!这样做的话一定能为今世积德,下世转生时或许又能跟露比酱一起开心地度过了——会这样想大概是听得在寺里的爷爷的话太多吧？嘻嘻♡咱虽然是出身于寺庙家的女儿,但看最喜欢的小说时也一直这样想:在哪里也好是谁也好,到最后还是只有自己一人的.如果有明白咱的心情的人,咱会很高兴呐♪>',
                llbz_tianwangsilinai: '虹咲学园的1年级学生.因为不擅长把感情表现在脸上,所以很容易被认为是冷漠的人,但其实是个内心丰富的女孩子,很和蔼可亲.<我,天王寺璃奈.是个非常可爱的女孩子.真的哦？不过,因为不擅长把感情表现在脸上,总是被觉得是个冷淡的女孩子.在此我想到了.为了向大家传达感情而造的秘密道具.其名为‘小璃奈板’.在这白板上画上表情,来传达我的感受.嗯,这样就完美了.在演唱会上理应也能和大家共享同样的感情.诶？想看我本来的脸？唔～,那么,要是大家给予很多支持的话,就展露真面目.到那时候,我会加油让你们看到笑容的,就算有点奇怪也能接受的话我会很高兴的.>',
                llbz_xiaoyuanjuli: '浦之星女学院3年级学生.父亲是经营连锁酒店的意大利裔美国人,混血儿.性格开朗,经常单独行动.无论遇到什么事都绝对不会气馁的性格,是无所畏惧的挑战者.<耶耶耶!？我成为偶像？这不就是大家聚集一起穿上蓬蓬感觉的制服,跳一些在幼稚园的游戏会时的舞步、变成那些很有趣的女孩子们!？!？.....呀,对不起.不是想说什么坏话的.日本的偶像们真的非常可爱呢!我也这样觉得,虽然是这样觉得,可是,对我来说好似有点难,So Hard~嗯,感觉有点不合适呢.呀哈哈哈哈♪而且我啊,喜欢的音乐可是工业金属呢.所以对不起呢.所以、对不起呢.大家一起成为偶像的话我会从远方支援的♥️️嘛、现在将要开始骑马练习所以要回家了？Ciao~♪♪>',
                llbz_yingxiaoluxinaizi: '结丘女子高等学校第二届学生.落落大方、豁达开朗,待人接物也很温柔、成熟稳重,是个很适合用这些来形容的女孩子.她下定决心到东京的高中来,入学了结丘女子.她从小就不擅长运动和学习,但自从遇到了学园偶像之后,她开始为了改变自己而努力着.<初…初次见面嘞.我叫樱小路希奈子嘞.我从北方大地——北海道来到东京,进入结丘女高嘞.之前我觉得,学园偶像这般华丽的事物,对希奈子说不太可能嘞,但看着前辈们在舞台上闪闪放光的样子,就觉得自己也得努力一把嘞.没啥特长.不太擅长运动,学习方面也特一般…啊,不过大家都说我和动物能够心意相通很厉害.大概就这样吧.第一次来到大都市,什么都不懂嘞,希奈子特不安,但是希奈子会朝着成为憧憬已久的像前辈们一般的学园偶像而努力的嘞.请多指教.>',
                llbz_minvyayi: '结丘女子高等学校第二届学生.喜欢斜着身子,乍一看是个难以接近的不良少女.也许是因为这个原因,周围的人经常会对她感到害怕.她和若菜四季(交际方面)都是同样笨拙的家伙,两人一直维持着若即若离的关系.同时她也有正义感强烈、对错误的事会以毅然的态度去对抗的一面.<大、大家好.我叫米女芽衣.请别一直盯着我看.可…可爱？那怎么可能啊？小时候开始我的眼神就很凶,朋友们都挺怕我.总之,我不是很喜欢像这样子介绍自己.所以,一开始我完全没有做学园偶像的想法.我觉得自己不是那块料.当、当然我是很喜欢学园偶像的.不仅闪闪发光,而且舞台上的学园偶像们都笑容满面,都有自己的梦想…所以我也……虽、虽然我也知道自己肯定不适合,但是……既然站上舞台了我会拼命努力的……请为我加油吧.可以吗？>',
                llbz_ruocaisiji: '结丘女子高等学校第二届学生.从小沉默寡言,不怎么与他人接触,喜欢独自一人玩耍.性格沉着冷静.虽然在神秘的气氛里很少吐露真情,但对其他成员的感情却比他人强上一倍.她在看到芽衣憧憬学园偶像的模样后产生了兴趣,便和她一起开始了学园偶像之路.<我叫若菜四季…………没了.诶？实在是太短了？还需要更多关于我的数据？喜欢的东西？芽衣.还有……锹形虫、蝴蝶.大概就这些.以上,结束.诶？还不够？擅长的事？没什么擅长的.只是芽衣总是说我很擅长发明和实验什么的.除了学园偶像部之外我还加入了科学部.和一个人呆在科学部的时候相比,学园偶像部真的是热闹非凡,完全不同.本以为我不喜欢这种热热闹闹的场合,但和大家一起唱歌、沐浴在大家的喝彩中,也不是那么地讨厌,吧…….如果可以的话,就来看看我的表演吧.>',
                llbz_guizhongxiamei: '结丘女子高等学校第二届学生.性格开朗、积极向上,对流行非常敏感,富有行动力、是一位什么事情都愿意去挑战的这样类型的女孩子.她也有为达目的不择手段的一面,会经常考虑在背后耍小动作的作战方案.因为是新设的学校这一点,拥有方便前往原宿等流行发源地的好处,所以决定入学结丘女子.<鬼夏来啦——.消解你日常中的各种烦恼,我就是你心灵的鬼营养品,昵称鬼夏的鬼塚夏美哦……!此前一直以LTuber身份活动的我,这次决定作为学园偶像出道了哦.真是梦幻联动啊,这样就能疯狂涨粉了.香气,没错,我闻到了Money的香气——.我最喜欢的特调思慕雪是绝不会缺席哒!每天一边喝着,一边从各种角度考虑让Liella!更加大红大紫的秘策.如果对这样的夏美感兴趣的话,三连关注不迷路哦～.>',
                llbz_guizhongdongqiu: '结丘女子高等学校第三届学生.鬼塚夏美的妹妹.总是努力高效行事,最讨厌无用的事情.常常会毫不留情地去分析事物,对梦想和希望等难以实现的事物也会以冷眼相待.另一方面,却非常喜欢姐姐夏美,对夏美热衷的学园偶像活动也表现出了兴趣.<因为不擅长说没用的话,所以就简单说下吧.大家好,初次见面,我叫鬼塚冬毬,是Liella!的新成员.擅长效率化,对没有证据支持的东西很头疼.成为Liella!成员后,我一定不会辜负大家对我作为学园偶像的期待,和其他成员还有姐姐一起共同成长,相互提升.所以别那样看着我啦……>',
                llbz_weien: '出身于音乐世家,有一个在维也纳就读维也纳国立音乐学校的姐姐.报考维也纳国立音乐学校时落榜,为了获得作为推荐生录取的资格而参加LoveLive!.刚接触LoveLive!时并不喜欢LoveLive!本身,只认为LoveLive!是低水平比赛.',
                llbz_weienmagelite: '结丘女子高等学校第三届学生.从遥远的奥地利来到日本留学的女孩.9月进入日本的国际学校,参加了LoveLive!大赛.以此次舞台为契机,从4月开始进入了结丘女子高等学校.虽然乐感出众、有着美丽的歌喉,但也有争强好胜的一面,容易和周围的人发生冲突.<为什么我非得在这种地方做自我介绍.算了,那就特别告诉你吧.我的名字是薇恩·玛格丽特.对于从小就被称作歌唱天才的我来说,不管是Liella!还是LoveLive!都只不过是一条必经之路罢了.但是,既然要作为学园偶像活动下去,我就要让听众们为我感到感动.所以,大家如果有被感动到的话一定要让我知道哦.当,当然,我觉得你们一定会深受感动的!>',
                llbz_riyexiahuafan: '莲之空女学院的一年级学生.脸上永远挂着微笑的元气女孩.以<绽放>为目标,怀着巨大期待进入了这所学校.会全力去做看起来很有意思的事情,又是也会向错误的方向横冲直撞.老家是在长野经营花卉的农家,家里有一对比她小很多的双胞胎妹妹.',
                llbz_cunyeshayexiang: '莲之空女学院的一年级学生.虽然有些笨拙但始终纯粹地努力着.从小练习花样滑冰,取得了不错的成绩,但也有自己的烦恼……由于性格使然,不会放着别人不管,不知不觉中照顾了别人,但这或许也是天然的一面？',
                llbz_xiwuzhuili: '莲之空女学院的二年级学生.总是呆呆的样子,说话给人的感觉非常独特,在舞台上却能带来卓越的表演.因此被身边人称作天才,虽然被认为是难以接近的存在,但其实很容易感到寂寞,也很好相处.',
                llbz_yizongshao: '莲之空女学院的二年级学生.文武双全,眉清目秀,是学院里谁都会敬佩的存在,但却又不是骄傲自大的优等生.出身于音乐世家,从小就学习了各种各样的东西,所有事情都会尽最大努力去做.虽然不擅长操控机器设备,但坚称自己在逐渐变得熟练.',
                llbz_tengdaoci: '莲之空女学院的二年级学生.小时候就开始从事演艺工作,深知自己十分可爱,致力于让大家都看到自己的可爱之处.但绝不会做自己不感兴趣的事,因此学习成绩不佳,被送进这所学校.如今由于某些原因停止了学园偶像活动.',
                llbz_dazeliulinai: '从加利福尼亚留学归国,作为莲之空女学院的一年级新生入学.乍一看是与任何人都能处好关系的Happy又Party的女孩――但是,由于过于操心,在体力用尽后就会进入自称的<断电>状态.和慈是从小学开始的儿时玩伴.',
                llbz_anyangsijiya: '安养寺姬芽',
                llbz_tudingxiaoling: '徒町小铃',
                llbz_baishengyinzi: '百生吟子',
                llbz_yeyu: '在努玛梓经营占卜店的少女.很固执,性情有些特殊,但心地善良,不会拒绝别人的请求.',
                llbz_lizi: '从努玛梓外来的动物学者.性格平和,但充满好奇心,有着自命不凡的一面.',
                llbz_chika: '乌奇拉地区历史悠久的旅馆的老板娘三姐妹中的老幺.不怕生,讨厌失败.',
                llbz_juli: '洼西麻岛的城堡里居住的魔王末裔.不怎么在人前展露身姿.',
                llbz_you: '在努玛梓从事信使的少女.总是很开朗、精力充沛,运动神经拔群.',
                llbz_lubi: '妖精族的末裔.有些内向,通常生活在人们无法找到的地方.',
                llbz_guonan: '乌奇拉地区经营着工房的机械师.使用从海里捡回的垃圾从事修理工作.',
                llbz_huawan: '夜羽的儿时玩伴.喜欢好吃的东西,靠在摊位上售卖自己做的点心生活.',
                llbz_daiya: '努玛梓行政局的执务长官.聪明美丽,绝不允许歪风邪气的完美主义者.',
                llspyg_yingneilizi: '由东京秋叶原国立音乃木坂学院转学到高海千歌班上的二年级生,是一个有气质的美人.虽然看起来像大人一样沉着冷静,但实际上是个慌慌张张的人,也会过早地做出错误的判断.<我是浦之星女学院高中2年的樱内梨子.我只是由城市到来的转校生——其实是个性格土气的普通女高中生.虽然已经说了很多遍——但还是被完全不相信我说的、强硬的千歌酱拉进来,不知何时开始就成为School Idol了.所以我完全没有作为School Idol的自信——但为了拜托了这样的我的大家,希望也能献出我微少的力量吧.最初由秋叶原来这间竟然是在蜜柑山里面学校时,不断被吓到了,但现在已经是我最喜爱的地方.给了我这个特别的地方——实现大家的梦想便是我的梦想.竟然还有这样的做法、这是我来到这里、人生中初次知道的呢————>',
                llsp_shangyuanbumeng: '在官方四格漫画里人设大崩坏,脾气暴躁.在漫画25集被政府告知必须去火星,结果在下一集真的和大家一起去了;然而刚上火星步梦就被龙卷风给吹跑了,爱和璃为了寻找步梦也乘上龙卷风,最后找到了在火星文明(误)大火而不想回家的步梦.<地球的各位,我回来了!>',
            },
            characterReplace: {},
            perfectPair: {},
            characterFilter: {},
            characterTitle: {},
            skill: {
                llbz_shanyao: {
                    group: 'llbz_shanyao_misa',
                    audio: 'ext:拉拉:2',
                    derivation: 'llbz_shanyao_faq',
                    trigger: { player: ['useCard', 'respond'] },
                    filter(event, player) {
                        return event.card.name == 'shan' || (event.name == 'useCard' && event.card.name == 'shandian');
                    },
                    judgeCheck(card, bool) {
                        var suit = card.suit;
                        if (suit == ' diamond') {
                            if (bool && card.number > 1 && card.number < 10) return 5;
                            return 4;
                        }
                        if (suit == 'heart') return 2;
                        return 0;
                    },
                    content() {
                        player.judge(lib.skill.llbz_shanyao.judgeCheck).judge2 = function (result) {
                            return result.bool ? true : false;
                        };
                    },
                    ai: {
                        useShan: true,
                        effect: {
                            target(card, player, target, current) {
                                if (
                                    get.tag(card, 'respondShan') &&
                                    !player.hasSkillTag(
                                        'directHit_ai',
                                        true,
                                        {
                                            target: target,
                                            card: card,
                                        },
                                        true
                                    )
                                ) {
                                    var hastarget = game.hasPlayer(function (current) {
                                        return get.attitude(target, current) < 0;
                                    });
                                    var be = target.countCards('e', { color: 'red' });
                                    if (target.countCards('h', 'shan') && be) {
                                        if (!target.hasSkill('llbz_tianzhen')) return 0;
                                        return [0, hastarget ? target.countCards('he') / 2 : 0];
                                    }
                                    if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                        if (!target.hasSkill('llbz_tianzhen')) return 0;
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
                                    if (!target.hasSkill('llbz_tianzhen')) return [1, 0.05];
                                    return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                }
                            },
                        },
                    },
                },
                llbz_shanyao_misa: {
                    audio: 'llbz_shanyao',
                    trigger: { player: 'judgeAfter' },
                    forced: true,
                    disableReason: ['暴虐', '助祭', '弘仪', '孤影'],
                    filter(event, player) {
                        return !lib.skill.llbz_shanyao_misa.disableReason.includes(event.judgestr) && ['diamond', 'heart'].includes(event.result.suit);
                    },
                    content() {
                        'step 0';
                        event.num = 1 + ['heart', 'diamond'].indexOf(trigger.result.suit);
                        event.logged = false;
                        if (event.num == 1 && player.isDamaged()) {
                            event.logged = true;
                            player.recover();
                        }
                        player.chooseTarget('闪耀:是否对一名角色造成' + event.num + '点伤害？', lib.filter.notMe).ai = function (target) {
                            var player = _status.event.player;
                            return get.damageEffect(target, player, player);
                        };
                        ('step 1');
                        if (result.targets?.length) {
                            player.line(result.targets);
                            result.targets[0].damage(event.num);
                        }
                    },
                },
                llbz_tianzhen: {
                    group: 'llbz_tianzhen_misa',
                    audio: 'ext:拉拉:1',
                    trigger: { global: 'judge' },
                    filter(event, player) {
                        return player.countCards('hes', { color: 'red' }) > 0;
                    },
                    cost() {
                        'step 0';
                        player
                            .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('llbz_tianzhen'), 'hes', function (card) {
                                if (get.color(card) != 'red') return false;
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
                                    if (trigger.player != player) return 0;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return get.attitude(player, current) < 0;
                                        })
                                    ) {
                                        var checkx = lib.skill.llbz_shanyao.judgeCheck(card, true) - lib.skill.llbz_shanyao.judgeCheck(judging);
                                        if (checkx > 0) return checkx;
                                    }
                                    return 0;
                                }
                                if (attitude > 0) {
                                    return result;
                                } else {
                                    return -result;
                                }
                            })
                            .set('judging', trigger.player.judging[0]);
                        ('step 1');
                        if (result.bool) {
                            event.result = {
                                bool: true,
                                cards: result.cards,
                            };
                        }
                    },
                    content() {
                        'step 0';
                        player.respond(event.cards, 'highlight', 'llbz_tianzhen', 'noOrdering');
                        ('step 1');
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        trigger.player.judging[0] = event.cards[0];
                        trigger.orderingCards.addArray(event.cards);
                        game.log(trigger.player, '的判定牌改为', event.cards[0]);
                        ('step 2');
                    },
                    ai: {
                        rejudge: true,
                        tag: {
                            rejudge: 1,
                        },
                    },
                },
                llbz_tianzhen_misa: {
                    audio: 'ext:拉拉:2',
                    trigger: { global: 'judgeEnd' },
                    filter(event, player) {
                        return event.result && event.result.suit == 'spade';
                    },
                    check(event, player) {
                        return event.result.judge * get.attitude(player, event.player) <= 0;
                    },
                    content() {
                        'step 0';
                        var evt = trigger.parent;
                        if (evt.name == 'phaseJudge') {
                            evt.excluded = true;
                        }
                        else {
                            evt.cancel();
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
                        game.log(player, '终止该判定,触发天真摸牌');
                        player.draw();
                    },
                },
                llbz_shanyao_faq: {},
                llbz_feixiao: {
                    audio: 'ext:拉拉:1',
                    juexingji: true,
                    zhuSkill: true,
                    keepSkill: true,
                    derivation: 'llbz_juewu',
                    trigger: { player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'] },
                    forced: true,
                    filter(event, player) {
                        if (!player.hasZhuSkill('llbz_feixiao')) return false;
                        if (player.storage.llbz_feixiao) return false;
                        return player.isMinHp();
                    },
                    content() {
                        'step 0';
                        player.storage.llbz_feixiao = true;
                        player.gainMaxHp();
                        ('step 1');
                        player.recover();
                        if (player.hasSkill('llbz_feixiao')) {
                            player.addSkills('llbz_juewu');
                            player.removeSkills('llbz_tianzhen');
                        } else {
                            player.addAdditionalSkills('llbz_feixiao', 'llbz_juewu');
                        }
                        if (!player.isZhu) {
                            player.storage.zhuSkill_llbz_feixiao = ['llbz_juewu'];
                        } else {
                            event.trigger('zhuUpdate');
                        }
                        player.awakenSkill('llbz_feixiao');
                    },
                },
                llbz_juewu: {
                    audio: 'ext:拉拉:2',
                    trigger: { global: 'phaseZhunbeiBegin' },
                    forced: true,
                    logTarget: 'player',
                    content() {
                        'step 0';
                        var player = _status.event.player,
                            target = _status.event.getTrigger().player;
                        var list = [];
                        list.push('选项一');
                        list.push('选项二');
                        player
                            .chooseControl(list)
                            .set('choiceList', ['令' + get.translation(trigger.player) + '摸两张牌,你回复一点体力', '你摸两张牌'])
                            .set('prompt', get.prompt('llbz_juewu', target))
                            .set('ai', function () {
                                if (_status.currentPhase == player) return '选项一';
                                else if (get.attitude(player, _status.currentPhase) > 0) return '选项一';
                                else if (player.hp < 3) return '选项一';
                                else return '选项二';
                            });
                        ('step 1');
                        var target = _status.event.getTrigger().player;
                        if (result.control == '选项二') {
                            if (player.countCards('h') > 8) {
                                player.loseHp(), player.draw(2);
                            } else {
                                player.draw(2);
                            }
                        } else {
                            target.draw(2), player.recover();
                        }
                    },
                },
                llbz_qinyin: {
                    audio: 'ext:拉拉:2',
                    enable: 'phaseUse',
                    usable: 1,
                    multitarget: true,
                    filter(event, player) {
                        return player.maxHp > player.hp;
                    },
                    content() {
                        'step 0';
                        event.num = player.getDamagedHp();
                        player.chooseTarget(get.prompt('llbz_qinyin'), '展示其' + get.translation(event.num) + '张手牌', [1, event.num], function (card, player, target) {
                            return target.countCards('h') > 0;
                        });
                        ('step 1');
                        if (result.bool) {
                            event.targets = result.targets;
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (event.targets.length) {
                            event.target = event.targets[0];
                            player.choosePlayerCard(event.target, 'h', num, '展示' + get.translation(event.target) + get.translation(event.num) + '张牌', true);
                        } else {
                            event.finish();
                        }
                        ('step 3');
                        if (result.bool) {
                            event.target.showCards(result.cards);
                            var suit = [];
                            for (var i of result.cards) {
                                suit.add(i.suit);
                            }
                            if (suit.includes('club')) {
                                player
                                    .chooseControl(['选项一', '选项二'])
                                    .set('choiceList', ['令' + get.translation(event.target) + '回复体力', '令' + get.translation(event.target) + '失去体力'])
                                    .set('ai', function () {
                                        if (get.attitude(_status.event.player, event.target) > 0) {
                                            return '选项一';
                                        }
                                        return '选项二';
                                    });
                            } else {
                                player.draw();
                                event.goto(5);
                            }
                        } else {
                            event.finish();
                        }
                        ('step 4');
                        if (result.control) {
                            if (result.control == '选项一') {
                                event.target.recover();
                            } else {
                                event.target.loseHp();
                            }
                        }
                        ('step 5');
                        event.targets.shift();
                        event.goto(2);
                    },
                    ai: {
                        order: 1,
                        result: {
                            player(player) {
                                return 1;
                            },
                        },
                    },
                },
                llbz_yinghua: {
                    audio: 'ext:拉拉:2',
                    mod: {
                        maxHandcardBase(player) {
                            return player.maxHp;
                        },
                    },
                    trigger: { player: 'damageBegin2' },
                    forced: true,
                    filter(event, player) {
                        return player.maxHp > 1;
                    },
                    content() {
                        'step 0';
                        player.judge(function (card) {
                            if (card.suit == 'heart' || card.suit == 'diamond' || card.suit == 'spade') {
                                return -4;
                            }
                            return 0;
                        }).judge2 = function (result) {
                            return result.bool == false ? true : false;
                        };
                        ('step 1');
                        if (result.bool == false) {
                            trigger.cancel();
                            player.loseMaxHp();
                        } else {
                            event.finish();
                        }
                    },
                },
                llbz_zhanfang: {
                    audio: 'ext:拉拉:1',
                    enable: 'chooseToUse',
                    mark: true,
                    limited: true,
                    init(player) {
                        player.storage.llbz_zhanfang = false;
                    },
                    filter(event, player) {
                        if (player.storage.llbz_zhanfang) return false;
                        if (event.type == 'dying') {
                            if (player != event.dying) return false;
                            return true;
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('llbz_zhanfang');
                        player.storage.llbz_zhanfang = true;
                        ('step 1');
                        player.link(false);
                        ('step 2');
                        player.turnOver(false);
                        ('step 3');
                        if (player.maxHp < 6) {
                            player.gainMaxHp(6 - player.maxHp);
                        }
                        ('step 4');
                        player.recover(2 - player.hp);
                    },
                    ai: {
                        save: true,
                        skillTagFilter(player, tag, arg) {
                            return player == arg;
                        },
                        order: 10,
                        result: {
                            player: 1,
                        },
                    },
                },
                llbz_jixing: {
                    audio: 'ext:拉拉:2',
                    trigger: { player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'] },
                    filter(event, player) {
                        return player.maxHp < 11;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player.gainMaxHp();
                        ('step 1');
                        if (player.isMinHp()) {
                            player.recover();
                            event.finish();
                        }
                        ('step 2');
                        if (player.isMaxHp()) {
                            player.loseHp();
                            event.finish();
                        }
                    },
                },
                llbz_gongming: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: ['damageAfter', 'recoverAfter', 'loseHpAfter'] },
                    filter(event, player) {
                        return game.hasPlayer(function (current) {
                            return event.num > 0 && current.hp == player.hp && current != player;
                        });
                    },
                    content() {
                        'step 0';
                        player.draw();
                        ('step 1');
                        player.chooseTarget('选择一名血量相同的其他角色摸一张牌', 1, function (card, player, target) {
                            return target.hp == player.hp && target != player;
                        });
                        ('step 2');
                        if (result.targets?.length) {
                            var target = result.targets[0];
                            target.draw();
                        }
                    },
                },
                llbz_paiyi: {
                    enable: ['chooseToUse', 'chooseToRespond'],
                    filter(event, player) {
                        if (!player.countCards('hes') || player.hasSkill('llbz_paiyi_used')) return false;
                        for (var i of lib.inpile) {
                            var type = get.type2(i);
                            if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) return true;
                        }
                        return false;
                    },
                    chooseButton: {
                        dialog(event, player) {
                            var list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                if (name == 'sha') {
                                    if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                    for (var j of lib.inpile_nature) {
                                        if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                    }
                                } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                            }
                            return ui.create.dialog('排异', [list, 'vcard']);
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
                                precontent() {
                                    player.addTempSkill('llbz_paiyi_used');
                                },
                            };
                        },
                        prompt(links, player) {
                            return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                        },
                    },
                    hiddenCard(player, name) {
                        var type = get.type2(name);
                        return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0 && !player.hasSkill('llbz_paiyi_used');
                    },
                    ai: {
                        combo: 'llbz_paiyi',
                        fireAttack: true,
                        respondSha: true,
                        respondShan: true,
                        skillTagFilter(player) {
                            if (!player.countCards('hes') || !player.hasSkill('llbz_paiyi_used')) return false;
                        },
                        order: 1,
                        result: {
                            player(player) {
                                if (player.maxHp == 1) return -2.5;
                                if (player.maxHp <= 4) return -1;
                                if (player.maxHp == player.hp) return -0.25;
                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                return 1;
                            },
                        },
                    },
                },
                llbz_paiyi_used: {
                    trigger: { player: ['useCardAfter', 'respondAfter'] },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    filter(event, player) {
                        return event.skill == 'llbz_paiyi_backup';
                    },
                    content() {
                        player.draw(), player.loseMaxHp();
                    },
                },
                llbz_paiyi_backup: { audio: 'ext:拉拉:2' },
                llbz_niepan: {
                    audio: 'ext:拉拉:1',
                    enable: 'chooseToUse',
                    mark: true,
                    limited: true,
                    zhuSkill: true,
                    init(player) {
                        player.storage.llbz_niepan = false;
                    },
                    filter(event, player) {
                        if (!player.hasZhuSkill('llbz_niepan')) return false;
                        if (player.storage.llbz_niepan) return false;
                        if (event.type == 'dying') {
                            if (player != event.dying) return false;
                            return true;
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('llbz_niepan');
                        player.storage.llbz_niepan = true;
                        ('step 1');
                        player.link(false);
                        ('step 2');
                        player.turnOver(false);
                        ('step 3');
                        player.loseMaxHp();
                        ('step 4');
                        player.removeSkill('llbz_jixing');
                        ('step 5');
                        player.recover();
                        ('step 6');
                        if (player.maxHp > player.hp) {
                            event.goto(5);
                        }
                    },
                    ai: {
                        save: true,
                        skillTagFilter(player, tag, arg) {
                            return player == arg;
                        },
                        order: 10,
                        result: {
                            player: 1,
                        },
                    },
                },
                llbz_weiya: {
                    audio: 'ext:拉拉:2',
                    global: ['llbz_weiya_a', 'llbz_weiya_b', 'llbz_weiya_c'],
                },
                llbz_weiya_a: {
                    forced: true,
                    mod: {
                        maxHandcard(player, num) {
                            return (
                                num -
                                game.countPlayer(function (current) {
                                    return current != player && current.hasSkill('llbz_weiya');
                                })
                            );
                        },
                    },
                },
                llbz_weiya_b: {
                    forced: true,
                    mod: {
                        maxHandcard(player, num) {
                            return (
                                num -
                                game.countPlayer(function (current) {
                                    return current != player && current.hasSkill('llbz_weiya') && player.isDamaged();
                                })
                            );
                        },
                    },
                },
                llbz_weiya_c: {
                    forced: true,
                    mod: {
                        maxHandcard(player, num) {
                            return (
                                num -
                                game.countPlayer(function (current) {
                                    return current != player && current.hasSkill('llbz_weiya') && current.inRange(player);
                                })
                            );
                        },
                    },
                },
                llbz_bochi: {
                    trigger: { player: 'damageEnd' },
                    audio: 'ext:拉拉:1',
                    preHidden: true,
                    check(event, player) {
                        return get.attitude(player, _status.currentPhase) < 0 || !_status.currentPhase.needsToDiscard(2);
                    },
                    filter(event, player) {
                        return _status.currentPhase && _status.currentPhase.isIn() && event.num > 0;
                    },
                    logTarget() {
                        return _status.currentPhase;
                    },
                    content() {
                        'step 0';
                        var source = _status.currentPhase;
                        var list = [];
                        list.push('选项一');
                        list.push('选项二');
                        source
                            .chooseControl(list)
                            .set('choiceList', ['令' + get.translation(player) + '摸两张牌', '你的手牌上限额外-1'])
                            .set('prompt', get.prompt('llbz_bochi', target));
                        ('step 1');
                        var source = _status.currentPhase;
                        if (result.control == '选项二') {
                            if (source.hasSkill('llbz_bochi2')) {
                                source.storage.llbz_bochi2 += trigger.num;
                                source.storage.llbz_bochi3.add(player);
                            } else {
                                source.storage.llbz_bochi3 = [player];
                                source.storage.llbz_bochi2 = trigger.num;
                                source.addTempSkill('llbz_bochi2');
                            }
                        } else {
                            player.draw(2 * trigger.num);
                        }
                        ('step 2');
                        player.addTempSkill('llbz_bochi_jieshu');
                    },
                },
                llbz_bochi2: {
                    mark: true,
                    charlotte: true,
                    intro: {
                        content: '手牌上限-#',
                    },
                    mod: {
                        maxHandcard(player, num) {
                            return num - player.storage.llbz_bochi2;
                        },
                    },
                    onremove(player) {
                        delete player.storage.llbz_bochi2;
                        delete player.storage.llbz_bochi3;
                    },
                    trigger: { player: 'phaseDiscardEnd' },
                    filter(event, player) {
                        if (event.cards && event.cards.length) return false;
                        var players = player.storage.llbz_bochi3;
                        for (var i = 0; i < players.length; i++) {
                            if (players[i].isIn()) return true;
                        }
                        return false;
                    },
                    forced: true,
                    popup: false,
                    content() {
                        var players = player.storage.llbz_bochi3;
                        for (var i = 0; i < players.length; i++) {
                            if (players[i].isIn()) {
                                players[i].line(player, 'green');
                            }
                        }
                        game.asyncDraw(player.storage.llbz_bochi3);
                    },
                },
                llbz_bochi_jieshu: {
                    audio: 'ext:拉拉:1',
                    trigger: { global: 'phaseDiscardAfter' },
                    forced: true,
                    preHidden: true,
                    content() {
                        'step 0';
                        var cards = [];
                        var cards2 = [];
                        game.getGlobalHistory('cardMove', function (evt) {
                            if (evt.name == 'cardsDiscard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards.filterInD('d'));
                        });
                        game.countPlayer2(function (current) {
                            current.getHistory('lose', function (evt) {
                                if (evt.type != 'discard' || evt.getParent('phaseDiscard') != trigger) return;
                                cards.addArray(evt.cards.filterInD('d'));
                                if (current == trigger.player) cards2.addArray(evt.hs.filterInD('d'));
                            });
                        });
                        event.cards = cards;
                        ('step 1');
                        player.gain(event.cards);
                        player.$gain2(event.cards);
                        game.log(player, '收回了', event.cards);
                    },
                },
                llbz_zhenxin: {
                    audio: 'ext:拉拉:1',
                    zhuSkill: true,
                    trigger: { global: 'damageSource' },
                    filter(event, player) {
                        if (player == event.source || !event.source || event.source.group != 'hong') return false;
                        return player.hasZhuSkill('llbz_zhenxin', event.source);
                    },
                    getIndex(event, player, triggername) {
                        return Math.min(event.num, 9) || 1;
                    },
                    cost() {
                        'step 0';
                        player.chooseBool('是否发动【真心】？').set('choice', get.attitude(player, player) > 0);
                        ('step 1');
                        if (result.bool) {
                            event.result = {
                                bool: true,
                            };
                        }
                    },
                    content() {
                        'step 0';
                        player.judge(function (card) {
                            if (card.suit == 'heart') return 4;
                            return 0;
                        }).judge2 = function (result) {
                            return result.bool ? true : false;
                        };
                        ('step 1');
                        if (result.suit == 'heart') {
                            player.recover();
                            if (get.position(result.card) == 'd') player.gain(result.card, 'gain2', 'log');
                        }
                    },
                },
                llbz_honglian: {
                    mod: {
                        cardnature(card, player) {
                            if (card.name == 'sha') return 'fire';
                        },
                        maxHandcardBase(player) {
                            return player.maxHp;
                        },
                        targetInRange(card) {
                            if (card.name == 'sha') return true;
                        },
                    },
                    group: ['llbz_honglian_damage'],
                    trigger: { source: 'damageBegin1' },
                    audio: 'ext:拉拉:1',
                    forced: true,
                    firstDo: true,
                    filter(event, player) {
                        return event.nature == 'fire';
                    },
                    content() {
                        player.loseHp();
                    },
                },
                llbz_honglian_damage: {
                    trigger: { player: 'damageBefore' },
                    audio: 'ext:拉拉:1',
                    forced: true,
                    filter(event, player) {
                        if (event.nature == 'fire') {
                            return true;
                        }
                        return false;
                    },
                    content() {
                        trigger.cancel();
                    },
                },
                llbz_lieyan: {
                    audio: 'ext:拉拉:1',
                    group: 'llbz_lieyan_jiesuan',
                    trigger: { source: 'damageBegin1' },
                    forceDie: true,
                    filter(event, player) {
                        if (event.nature == 'fire') {
                            return true;
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        var i = player.getDamagedHp();
                        trigger.num += i;
                        ('step 1');
                        trigger['llbz_lieyan' + player.playerid] = true;
                    },
                    subSkill: {
                        jiesuan: {
                            audio: 'ext:拉拉:1',
                            trigger: { source: 'damageSource' },
                            forced: true,
                            filter(event, player) {
                                return event['llbz_lieyan' + player.playerid];
                            },
                            content() {
                                player.loseMaxHp();
                            },
                        },
                    },
                },
                llbz_ranjin: {
                    trigger: {
                        player: 'dieBegin',
                    },
                    audio: 'ext:拉拉:1',
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        return game.hasPlayer(function (current) {
                            return (current != player && !current.hasSkill('honglian')) || (current != player && !current.hasSkill('llbz_lieyan'));
                        });
                    },
                    content() {
                        'step 0';
                        player.chooseTarget('选择一名其他角色获得<红莲>、<烈焰>,并增加一点体力上限', 1, function (card, player, target) {
                            return target != player;
                        });
                        ('step 1');
                        if (result.targets?.length) {
                            var target = result.targets[0];
                            event.target = target;
                        } else event.finish();
                        ('step 2');
                        target.addSkills('llbz_honglian');
                        target.addSkills('llbz_lieyan');
                        target.gainMaxHp();
                        game.log(target, '增加了一点体力上限');
                    },
                },
                llbz_qingre: {
                    audio: 'ext:拉拉:2',
                    group: ['llbz_qingre_damage'],
                    filter(event, player) {
                        if (player.hasSkill('llbz_qingre_block')) {
                            return false;
                        } else {
                            return true;
                        }
                    },
                    enable: 'phaseUse',
                    viewAs: {
                        name: 'huogong',
                        storage: {
                            llbz_qingre: true,
                        },
                    },
                    filterCard: () => false,
                    selectCard: -1,
                    prompt: '视为使用一张【火攻】',
                    precontent() {
                        player.addTempSkill('llbz_qingre_block');
                    },
                },
                llbz_qingre_damage: {
                    audio: 'ext:拉拉:2',
                    trigger: { source: 'damageSource' },
                    forced: true,
                    filter(event, player) {
                        return event.card && event.card.name == 'huogong';
                    },
                    content() {
                        player.addTempSkill('llbz_qingre_choice');
                        player.removeSkill('llbz_qingre_block');
                    },
                },
                llbz_qingre_choice: {
                    trigger: { source: 'damageBegin1' },
                    filter(event, player) {
                        if (event.card && event.card.name == 'huogong' && event.parent.type == 'card') return true;
                    },
                    content() {
                        'step 0';
                        var list = [];
                        list.push('选项一');
                        list.push('选项二');
                        list.push('背水!');
                        player.chooseControl(list).set('choiceList', ['令此伤害+1', '你摸两张牌', '背水!本回合无法再次使用<情热>,触发以上两种效果']).set('prompt', get.prompt('llbz_qingre_choice', target));
                        ('step 1');
                        event.control = result.control;
                        if (event.control == '背水!') {
                            player.removeSkill('llbz_qingre_damage');
                            player.addTempSkill('llbz_qingre_block');
                        }
                        ('step 2');
                        if (event.control == '选项一' || event.control == '背水!') {
                            trigger.num++;
                        }
                        ('step 3');
                        if (event.control == '选项二' || event.control == '背水!') {
                            player.draw(2);
                        } else event.finish();
                    },
                },
                llbz_qingre_block: {
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    content() {
                        player.addSkill('llbz_qingre_damage');
                    },
                },
                llbz_huisu: {
                    audio: 'ext:拉拉:1',
                    limited: true,
                    enable: 'chooseToUse',
                    mark: true,
                    _priority: 9,
                    init(player) {
                        player.storage.llbz_huisu = false;
                    },
                    filter(event, player) {
                        if (player.storage.llbz_huisu) return false;
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
                        player.awakenSkill('llbz_huisu');
                        ('step 1');
                        if (player.hp < player.storage.llbz_huisu2) {
                            player.draw(player.storage.llbz_huisu2 - player.hp);
                        } else {
                            player.draw(player.hp - player.storage.llbz_huisu2);
                        }
                        ('step 2');
                        if (player.hp < player.storage.llbz_huisu2) {
                            player.recover(player.storage.llbz_huisu2 - player.hp);
                        } else {
                            player.loseHp(player.hp - player.storage.llbz_huisu2);
                        }
                        ('step 3');
                        player.storage.llbz_huisu = true;
                    },
                    ai: {
                        order: 0.5,
                        skillTagFilter(player, tag, target) {
                            if (player != target || player.storage.llbz_huisu) return false;
                        },
                        save: true,
                        result: {
                            player(player) {
                                if (player.hp <= 0) return 10;
                                if (player.hp < player.storage.llbz_huisu2) return 10;
                                return 0;
                            },
                        },
                        threaten(player, target) {
                            if (!target.storage.llbz_huisu) return 0.6;
                        },
                    },
                    intro: {
                        mark(dialog, content, player) {
                            if (player.storage.llbz_huisu) return;
                            if (typeof player.storage.llbz_huisu2 != 'number') {
                                return '上回合体力:无';
                            }
                            return '上回合体力:' + player.storage.llbz_huisu2;
                        },
                        content: 'limited',
                    },
                    group: ['llbz_huisu2'],
                },
                llbz_huisu2: {
                    trigger: {
                        player: 'phaseJieshuBegin',
                    },
                    _priority: -10,
                    silent: true,
                    content() {
                        player.storage.llbz_huisu2 = player.hp;
                        game.broadcast(function (player) {
                            player.storage.llbz_huisu = player.hp;
                        }, player);
                        game.addVideo('storage', player, ['llbz_huisu2', player.storage.llbz_huisu2]);
                    },
                    intro: {
                        content(storage, player) {
                            if (player.storage.llbz_huisu) return;
                            return '上回合体力:' + storage;
                        },
                    },
                },
                llbz_lide: {
                    audio: 'ext:拉拉:1',
                    zhuSkill: true,
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        return (
                            player.hasZhuSkill('llbz_lide', event.player) &&
                            game.hasPlayer(function (current) {
                                return current != player && current.group == 'miu';
                            })
                        );
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt('llbz_lide'), '选择一名缪势力其他角色,造成1点火焰伤害', 1, function (card, player, target) {
                                return target.group == 'miu' && target != player;
                            })
                            .set('ai', (target) => get.attitude(_status.event.player, target));
                        ('step 1');
                        if (result.bool) {
                            event.targets = result.targets;
                            event.target = event.targets[0];
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        target.damage(1, 'fire');
                        ('step 3');
                        target.draw();
                        player.chooseDrawRecover();
                    },
                    ai: { order: 1, result: { player: 1 } },
                },
                llbz_shuangmian: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'phaseUseBegin' },
                    forced: true,
                    zhuanhuanji: true,
                    mark: true,
                    marktext: '☯',
                    intro: {
                        content(storage, player, skill) {
                            if (player.storage.llbz_shuangmian == true) return '锁定技,出牌阶段开始时,你失去1点体力并摸一张牌,至下个准备阶段前,你的黑杀不可响应,你不可响应红杀.';
                            return '锁定技,出牌阶段开始时,你回复1点体力并摸一张牌,至下个准备阶段前,你的红杀不可响应,你不可响应黑杀.';
                        },
                    },
                    content() {
                        'step 0';
                        player.changeZhuanhuanji('llbz_shuangmian');
                        if (player.storage.llbz_shuangmian != true) {
                            player.recover();
                        } else {
                            player.loseHp();
                        }
                        player.draw();
                        ('step 1');
                        if (player.storage.llbz_shuangmian != true) {
                            player.addTempSkill('llbz_shuangmian_1', { player: 'phaseZhunbeiBegin' });
                            player.addTempSkill('llbz_shuangmian_2', { player: 'phaseZhunbeiBegin' });
                        } else {
                            player.addTempSkill('llbz_shuangmian_3', { player: 'phaseZhunbeiBegin' });
                            player.addTempSkill('llbz_shuangmian_4', { player: 'phaseZhunbeiBegin' });
                        }
                    },
                    subSkill: {
                        3: {
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && get.color(event.card, false) == 'black';
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                            },
                        },
                        1: {
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && get.color(event.card, false) == 'red';
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                            },
                        },
                        4: {
                            trigger: { target: 'useCardToTargeted' },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.card.name == 'sha' && get.color(event.card, false) == 'red';
                            },
                            content() {
                                trigger.directHit.add(player);
                            },
                        },
                        2: {
                            trigger: { target: 'useCardToTargeted' },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.card.name == 'sha' && get.color(event.card, false) == 'black';
                            },
                            content() {
                                trigger.directHit.add(player);
                            },
                        },
                    },
                },
                llbz_hengshi: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'] },
                    forced: true,
                    zhuanhuanji: 'number',
                    filter(event, player) {
                        return player.countMark('llbz_hengshi') % 2 == ['phaseJieshu', 'phaseZhunbei'].indexOf(event.name);
                    },
                    content() {
                        player.changeZhuanhuanji('llbz_hengshi');
                    },
                    mod: {
                        globalFrom(from, to, distance) {
                            if (from.countMark('llbz_hengshi') % 2 == 0) return (distance -= game.countGroup());
                        },
                        globalTo(from, to, distance) {
                            if (to.countMark('llbz_hengshi') % 2 == 1) return (distance += game.countGroup());
                        },
                    },
                    mark: true,
                    marktext: '☯',
                    intro: {
                        content(storage, player) {
                            return '已转换过' + (storage || 0) + '次';
                        },
                    },
                },
                llbz_yanyi: {
                    audio: 'ext:拉拉:1',
                    trigger: { source: 'damageBegin1' },
                    group: 'llbz_yanyi_duorui_stop',
                    filter(event, player) {
                        return player != event.player && _status.currentPhase == player;
                    },
                    content() {
                        'step 0';
                        var list = [];
                        list.push('选项一');
                        if (!player.hasSkill('llbz_yanyi_duorui')) list.push('选项二');
                        if (!player.hasSkill('llbz_yanyi_duorui')) list.push('背水!');
                        player.chooseControl(list).set('choiceList', ['令此伤害+1', '获得〖夺锐〗直到下一个出牌阶段开始时', '背水!你减少1点体力上限']).set('prompt', get.prompt('llbz_yanyi', target));
                        ('step 1');
                        event.control = result.control;
                        if (event.control == '背水!') {
                            player.loseMaxHp();
                        }
                        ('step 2');
                        if (event.control == '选项一' || event.control == '背水!') {
                            trigger.num++;
                            player.draw();
                        }
                        ('step 3');
                        if (event.control == '选项二' || event.control == '背水!') {
                            player.addSkill('llbz_yanyi_duorui');
                        } else event.finish();
                    },
                },
                llbz_yanyi_duorui: {
                    audio: 'ext:拉拉:2',
                    forced: true,
                    init(player, skill) {
                        if (!player.storage.llbz_yanyi_duorui) player.storage.llbz_yanyi_duorui = [];
                    },
                    trigger: {
                        source: 'damageSource',
                    },
                    filter(event, player) {
                        if (player.storage.llbz_yanyi_duorui.length) return false;
                        return player != event.player && event.player.isAlive() && _status.currentPhase == player;
                    },
                    check(event, player) {
                        if (player.countDisabled() < 5 && player.isDisabled(5)) return false;
                        return true;
                    },
                    bannedList: ['bifa', 'buqu', 'gzbuqu', 'songci', 'funan', 'xinfu_guhuo', 'reguhuo', 'huashen', 'rehuashen', 'old_guhuo', 'shouxi', 'xinpojun', 'taoluan', 'xintaoluan', 'yinbing', 'xinfu_yingshi', 'zhenwei', 'zhoufu'],
                    content() {
                        'step 0';
                        var list = [];
                        var listm = [];
                        var listv = [];
                        if (trigger.player.name1 != undefined) listm = lib.character[trigger.player.name1][3];
                        else listm = lib.character[trigger.player.name][3];
                        if (trigger.player.name2 != undefined) listv = lib.character[trigger.player.name2][3];
                        listm = listm.concat(listv);
                        var func = function (skill) {
                            var info = get.info(skill);
                            if (!info || info.charlotte || info.hiddenSkill || info.zhuSkill || info.juexingji || info.limited || info.dutySkill || (info.unique && !info.gainable) || lib.skill.llbz_yanyi_duorui.bannedList.includes(skill)) return false;
                            return true;
                        };
                        for (var i = 0; i < listm.length; i++) {
                            if (func(listm[i])) list.add(listm[i]);
                        }
                        event.skills = list;
                        ('step 1');
                        if (event.skills.length) {
                            player
                                .chooseControl(event.skills)
                                .set('prompt', '请选择要获得的技能')
                                .set('ai', function () {
                                    return event.skills.randomGet();
                                });
                        } else event.finish();
                        ('step 2');
                        player.addTempSkill(result.control, { player: 'dieAfter' });
                        player.popup(result.control, 'thunder');
                        player.storage.llbz_yanyi_duorui = [result.control];
                        player.storage.llbz_yanyi_duorui_player = trigger.player;
                        trigger.player.storage.llbz_yanyi_duorui = [result.control];
                        trigger.player.addTempSkill('llbz_yanyi_duorui1', { player: 'phaseAfter' });
                        game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                    },
                    group: 'llbz_duorui_clear',
                },
                llbz_duorui_clear: {
                    trigger: { global: ['phaseAfter', 'dieAfter'] },
                    filter(event, player) {
                        if (!player.storage.llbz_yanyi_duorui_player || !player.storage.llbz_yanyi_duorui) return false;
                        return player.storage.llbz_yanyi_duorui_player == event.player && player.storage.llbz_yanyi_duorui.length;
                    },
                    silent: true,
                    forced: true,
                    popup: false,
                    content() {
                        player.removeSkill(player.storage.llbz_yanyi_duorui[0]);
                        delete player.storage.llbz_yanyi_duorui_player;
                        player.storage.llbz_yanyi_duorui = [];
                    },
                },
                llbz_yanyi_duorui1: {
                    init(player, skill) {
                        player.disableSkill(skill, player.storage.llbz_yanyi_duorui);
                    },
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
                llbz_yanyi_duorui_stop: {
                    trigger: { player: 'phaseUseBegin' },
                    forced: true,
                    filter(event, player) {
                        if (player.hasSkill('llbz_yanyi_duorui')) return true;
                        return false;
                    },
                    content() {
                        player.removeSkill('llbz_yanyi_duorui');
                    },
                },
                llbz_chaoxi: {
                    audio: 'ext:拉拉:1',
                    forced: true,
                    trigger: { global: 'roundStart' },
                    zhuanhuanji: true,
                    mark: true,
                    marktext: '☯',
                    intro: {
                        content(storage, player, skill) {
                            if (player.storage.llbz_chaoxi == true) return '潮起';
                            else return '潮落';
                        },
                    },
                    content() {
                        'step 0';
                        player.changeZhuanhuanji('llbz_chaoxi');
                        ('step 1');
                        if (player.storage.llbz_chaoxi != true) {
                            player.addSkill('llbz_chaoluo');
                            player.removeSkill('llbz_chaoqi');
                        } else {
                            player.addSkill('llbz_chaoqi');
                            player.removeSkill('llbz_chaoluo');
                        }
                    },
                },
                llbz_fachuan: {
                    audio: 'ext:拉拉:1',
                    enable: 'phaseUse',
                    usable: 1,
                    round: 2,
                    filterTarget(card, player, target) {
                        return player != target;
                    },
                    selectTarget: -1,
                    multitarget: true,
                    multiline: true,
                    content() {
                        'step 0';
                        event.num = 1;
                        event.targets = targets.slice(0);
                        event.targets.sort(lib.sort.seat);
                        player.addTempSkill('llbz_fachuan_end');
                        ('step 1');
                        if (event.targets.length) {
                            var target = event.targets.shift();
                            event.target = target;
                            var res = get.damageEffect(target, player, target);
                            target
                                .chooseToDiscard('he', '弃置至少' + get.cnNumber(event.num) + '张牌或受到2点伤害', [num, Infinity])
                                .set('ai', function (card) {
                                    if (ui.selected.cards.length >= _status.event.parent.num) return -1;
                                    if (_status.event.player.hasSkillTag('nofire')) return -1;
                                    if (_status.event.res >= 0) return 6 - get.value(card);
                                    if (get.type(card) != 'basic') {
                                        return 10 - get.value(card);
                                    }
                                    return 8 - get.value(card);
                                })
                                .set('res', res);
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (!result.bool) {
                            event.target.damage(2);
                            event.target.addMark('llbz_yunchuan', 2, false);
                            event.num = 1;
                        } else {
                            event.num = result.cards.length + 1;
                        }
                        event.goto(1);
                    },
                    ai: {
                        order: 1,
                        result: {
                            player(player) {
                                var num = 0,
                                    players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (player != players[i] && get.damageEffect(players[i], player, players[i], 'fire') < 0) {
                                        var att = get.attitude(player, players[i]);
                                        if (att > 0) {
                                            num -= Math.max(1, players[i].countCards('e'));
                                        } else if (att < 0) {
                                            num += Math.max(1, players[i].countCards('e'));
                                        }
                                    }
                                }
                                if (players.length < 5) {
                                    return num - 1;
                                } else {
                                    return num - 2;
                                }
                            },
                        },
                    },
                },
                llbz_fachuan_end: {
                    trigger: { player: 'phaseJieshuBegin' },
                    audio: 'ext:拉拉:2',
                    forced: true,
                    content() {
                        'step 0';
                        player.chooseControl('潮起摸牌数+1', '潮落弃牌数+1', '潮落体力流失+1', true).set('ai', function () {
                            return '潮落弃牌数+1';
                        });
                        ('step 1');
                        if (result.control == '潮起摸牌数+1') {
                            player.addMark('llbz_chaoqi', 1, false);
                        }
                        if (result.control == '潮落弃牌数+1') {
                            player.addMark('llbz_chaoluo1', 1, false);
                        }
                        if (result.control == '潮落体力流失+1') {
                            player.addMark('llbz_chaoluo2', 1, false);
                        }
                        ('step 2');
                        player.loseHp();
                    },
                },
                llbz_chaoqi: {
                    audio: 'ext:拉拉:2',
                    trigger: { global: 'phaseZhunbeiBegin' },
                    forced: true,
                    content() {
                        'step 0';
                        var target = _status.currentPhase;
                        if (target.countMark('llbz_yunchuan') > 0) {
                            target.removeMark('llbz_yunchuan', 1, false);
                            event.finish();
                        }
                        ('step 1');
                        var target = _status.currentPhase;
                        var num = 1 + player.countMark('llbz_chaoqi');
                        target.draw(num);
                    },
                },
                llbz_chaoluo: {
                    audio: 'ext:拉拉:1',
                    trigger: { global: 'phaseZhunbeiBegin' },
                    forced: true,
                    filter(event, player) {
                        return event.player != player;
                    },
                    content() {
                        'step 0';
                        var target = _status.currentPhase;
                        if (target.countMark('llbz_yunchuan') > 0) {
                            target.removeMark('llbz_yunchuan', 1, false);
                            event.finish();
                        }
                        ('step 1');
                        var target = _status.currentPhase;
                        var num1 = 1 + player.countMark('llbz_chaoluo1');
                        var num2 = 0 + player.countMark('llbz_chaoluo2');
                        target.loseHp(num2);
                        target.chooseToDiscard(num1, '弃置' + num1 + '张牌', true);
                    },
                },
                llbz_yongdong: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'dieBegin' },
                    content() {
                        'step 0';
                        player.chooseTarget('选择一名其他角色获得<潮汐>', 1, function (player, target) {
                            return target != player;
                        });
                        ('step 1');
                        if (result.targets?.length) {
                            var target = result.targets[0];
                            event.target = target;
                        } else event.finish();
                        ('step 2');
                        var num1 = player.countMark('llbz_chaoqi');
                        var num2 = player.countMark('llbz_chaoluo1');
                        var num3 = player.countMark('llbz_chaoluo2');
                        target.addSkills('llbz_chaoxi');
                        target.addMark('llbz_chaoqi', num1, false);
                        target.addMark('llbz_chaoluo1', num2, false);
                        target.addMark('llbz_chaoluo2', num3, false);
                        player.chooseControl('潮起摸牌数+2', '潮落弃牌数+2', '潮落体力流失+2', true).set('ai', function () {
                            return '潮落体力流失+2';
                        });
                        ('step 3');
                        if (result.control == '潮起摸牌数+2') {
                            target.addMark('llbz_chaoqi', 2, false);
                        }
                        if (result.control == '潮落弃牌数+2') {
                            target.addMark('llbz_chaoluo1', 2, false);
                        }
                        if (result.control == '潮落体力流失+2') {
                            target.addMark('llbz_chaoluo2', 2, false);
                        }
                    },
                },
                llbz_tanfan: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'damageEnd' },
                    filter(event, player) {
                        return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.source && event.source.isIn() && player != event.source && event.cards.filterInD().length && get.distance(player, event.source) <= 1;
                    },
                    check(event, player) {
                        var card = {
                            name: 'sha',
                            cards: event.cards.filterInD(),
                        },
                            target = event.source;
                        return !player.canUse(card, target, false) || get.effect(target, card, player, player) > 0;
                    },
                    content() {
                        'step 0';
                        event.cards = trigger.cards.filterInD();
                        player.gain(event.cards, 'gain2');
                        player.addTempSkill('llbz_tanfan_qiangzhong');
                        ('step 1');
                        var target = trigger.source,
                            hs = player.getCards('h');
                        if (
                            target &&
                            target.isIn() &&
                            hs.length >= cards.length &&
                            cards.filter(function (i) {
                                return hs.includes(i);
                            }).length == cards.length &&
                            player.canUse({ name: 'sha', cards: cards }, target, false)
                        ) {
                            var next = player.useCard({ name: 'sha' }, cards, target, false);
                            next.baseDamage = 2;
                        }
                    },
                },
                llbz_tanfan_qiangzhong: {
                    trigger: { player: 'useCard' },
                    forced: true,
                    filter(event, player) {
                        return event.card.name == 'sha' && player.getEquip(1);
                    },
                    content() {
                        trigger.directHit.addArray(game.players);
                    },
                },
                llbz_xinao: {
                    audio: 'ext:拉拉:2',
                    enable: 'phaseUse',
                    usable: 1,
                    content() {
                        'step 0';
                        player.chooseToDiscard(get.prompt('llbz_xinao'), '弃置一张手牌,可以移动场上的一张牌', lib.filter.cardDiscardable);
                        ('step 1');
                        if (result.bool) {
                            if (result.cards.length) {
                                if (get.type(result.cards[0]) == 'equip' && !player.isDisabled(get.subtype(result.cards[0]))) {
                                    player.chooseUseTarget(result.cards[0], true, 'nopopup');
                                }
                            }
                            player.moveCard('移动场上一张牌');
                        } else event.finish();
                    },
                },
                llbz_qinjin: {
                    mod: {
                        globalFrom(from, to, distance) {
                            return (
                                distance -
                                game.countPlayer(function (current) {
                                    return current.hasSex('female');
                                })
                            );
                        },
                    },
                },
                llbz_mizi: {
                    audio: 'ext:拉拉:2',
                    init(player, name) {
                        var a = player.hp;
                        var b = player.getAttackRange();
                        player.storage[name] = [1, 2, b, a];
                    },
                    trigger: { player: 'phaseBegin' },
                    forced: true,
                    popup: false,
                    content() {
                        'step 0';
                        var a = player.hp;
                        var b = player.getAttackRange();
                        player.storage.llbz_mizi = [1, 2, b, a];
                        ('step 1');
                        trigger._llbz_mizi = (player.storage.llbz_mizi || [1, 2, b, a]).slice(0);
                    },
                    group: ['llbz_mizi_draw', 'llbz_mizi_use', 'llbz_mizi_discard'],
                    ai: {
                        notemp: true,
                        threaten: 3.6,
                    },
                    subSkill: {
                        draw: {
                            audio: 'ext:拉拉:2',
                            trigger: { player: 'phaseDrawBegin' },
                            forced: true,
                            filter(event, player) {
                                var list = event.parent._llbz_mizi;
                                return list && list.length;
                            },
                            content() {
                                'step 0';
                                var list = trigger.parent._llbz_mizi;
                                if (list.length == 1) event._result = { index: 0 };
                                else
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '迷子:为摸牌阶段的摸牌数分配一个数值')
                                        .set('choice', list.indexOf(Math.max.apply(Math, list)))
                                        .set('ai', () => _status.event.choice);
                                ('step 1');
                                var list = trigger.parent._llbz_mizi;
                                var num = list[result.index];
                                trigger.num = num;
                                list.remove(num);
                                game.log(player, '给', '#g摸牌阶段的摸牌数', '分配的数值是', '#y' + num);
                            },
                        },
                        use: {
                            audio: 'ext:拉拉:2',
                            trigger: { player: 'phaseUseBegin' },
                            forced: true,
                            filter(event, player) {
                                var list = event.parent._llbz_mizi;
                                return list && list.length;
                            },
                            content() {
                                'step 0';
                                var list = trigger.parent._llbz_mizi;
                                if (list.length == 1) event._result = { index: 0 };
                                else
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '迷子:为攻击范围基数分配一个数值')
                                        .set('list', list)
                                        .set('ai', function () {
                                            var player = _status.event.player,
                                                list = _status.event.list,
                                                card = { name: 'sha' };
                                            if (player.hasSha() && player.hasValueTarget(card, false, true) && !player.hasValueTarget(card, null, true)) {
                                                var range = 1;
                                                var equips = player.getCards('e');
                                                for (var i = 0; i < equips.length; i++) {
                                                    var info = get.info(equips[i], false).distance;
                                                    if (!info) continue;
                                                    if (info.attackFrom) {
                                                        range -= info.attackFrom;
                                                    }
                                                }
                                                var listx = list.slice(0).sort();
                                                for (var i of listx) {
                                                    if (i <= range) continue;
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            var distance = get.distance(player, current, 'attack');
                                                            if (distance > 1 && distance <= i - range) return true;
                                                            return false;
                                                        })
                                                    )
                                                        return list.indexOf(i);
                                                }
                                            }
                                            return list.indexOf(Math.min.apply(Math, list));
                                        });
                                ('step 1');
                                var list = trigger.parent._llbz_mizi;
                                var num = list[result.index];
                                if (!player.storage.llbz_mizi_effect) player.storage.llbz_mizi_effect = {};
                                player.storage.llbz_mizi_effect.range = num;
                                player.addTempSkill('llbz_mizi_effect');
                                list.remove(num);
                                game.log(player, '给', '#g攻击范围的基数', '分配的数值是', '#y' + num);
                                if (list.length == 0) event.finish();
                                else if (list.length == 1) event._result = { index: 0 };
                                else
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '为使用【杀】的次数上限分配一个数值')
                                        .set('list', list)
                                        .set('ai', function () {
                                            var player = _status.event.player,
                                                list = _status.event.list;
                                            var sha = player.countCards('hs', function (card) {
                                                return card.name == 'sha' && player.hasValueTarget(card, null, true);
                                            });
                                            var max = player.getCardUsable('sha');
                                            if (sha <= max) {
                                                var listx = list.slice(0).sort();
                                                for (var i of listx) {
                                                    if (max + i >= sha) return list.indexOf(i);
                                                }
                                                return list.indexOf(Math.max.apply(Math, list));
                                            }
                                            return list.indexOf(Math.min.apply(Math, list));
                                        });
                                ('step 2');
                                var list = trigger.parent._llbz_mizi;
                                var num = list[result.index];
                                if (!player.storage.llbz_mizi_effect) player.storage.llbz_mizi_effect = {};
                                player.storage.llbz_mizi_effect.sha = num;
                                game.log(player, '给', '#g使用【杀】的次数上限', '分配的数值是', '#y' + num);
                                list.remove(num);
                            },
                        },
                        discard: {
                            audio: 'ext:拉拉:2',
                            trigger: { player: 'phaseDiscardBegin' },
                            forced: true,
                            filter(event, player) {
                                var list = event.parent._llbz_mizi;
                                return list && list.length;
                            },
                            content() {
                                'step 0';
                                var list = trigger.parent._llbz_mizi;
                                if (list.length == 1) event._result = { index: 0 };
                                else
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '迷子:为手牌上限基数分配一个数值')
                                        .set('choice', list.indexOf(Math.max.apply(Math, list)))
                                        .set('ai', () => _status.event.choice);
                                ('step 1');
                                var list = trigger.parent._llbz_mizi;
                                var num = list[result.index];
                                if (!player.storage.llbz_mizi_effect) player.storage.llbz_mizi_effect = {};
                                player.storage.llbz_mizi_effect.limit = num;
                                player.addTempSkill('llbz_mizi_effect');
                                list.remove(num);
                                game.log(player, '给', '#g手牌上限的基数', '分配的数值是', '#y' + num);
                            },
                        },
                        effect: {
                            charlotte: true,
                            mod: {
                                attackRangeBase(player) {
                                    var map = player.storage.llbz_mizi_effect;
                                    if (typeof map.range != 'number') return;
                                    var range = 1;
                                    var equips = player.getCards('e', function (card) {
                                        return !ui.selected.cards || !ui.selected.cards.includes(card);
                                    });
                                    for (var i = 0; i < equips.length; i++) {
                                        var info = get.info(equips[i], false).distance;
                                        if (!info) continue;
                                        if (info.attackFrom) {
                                            range -= info.attackFrom;
                                        }
                                    }
                                    return Math.max(range, map.range);
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') {
                                        var map = player.storage.llbz_mizi_effect;
                                        if (typeof map.sha != 'number') return;
                                        return num - 1 + map.sha;
                                    }
                                },
                                maxHandcardBase(player, num) {
                                    var map = player.storage.llbz_mizi_effect;
                                    if (typeof map.limit != 'number') return;
                                    return map.limit;
                                },
                            },
                        },
                    },
                },
                llbz_laichuang: {
                    audio: 'ext:拉拉:2',
                    group: 'llbz_laichuang_extra',
                    audio: 'ext:拉拉:2',
                    enable: 'phaseUse',
                    discard: false,
                    filter(event, player) {
                        if (player.hasJudge('lebu')) return false;
                        return player.countCards('hes', { suit: 'diamond' }) > 0;
                    },
                    viewAs: { name: 'lebu' },
                    //prepare:"throw",
                    position: 'hes',
                    filterCard(card, player, event) {
                        return card.suit == 'diamond' && player.canAddJudge({ name: 'lebu', cards: [card] });
                    },
                    selectTarget: -1,
                    filterTarget(card, player, target) {
                        return player == target;
                    },
                    check(card) {
                        var player = _status.event.player;
                        if (!player.getEquip('zhangba') && player.countCards('hs', 'sha') < 2) {
                            if (
                                player.countCards('h', function (cardx) {
                                    return cardx != card && cardx.name == 'shan';
                                }) > 0
                            )
                                return 0;
                            var damaged = player.maxHp - player.hp - 1;
                            var ts = player.countCards('h', function (cardx) {
                                return cardx != card && cardx.name == 'tao';
                            });
                            if (ts > 0 && ts > damaged) return 0;
                        }
                        if (card.name == 'shan') return 15;
                        if (card.name == 'tao') return 10;
                        return 9 - get.value(card);
                    },
                    onuse(links, player) {
                        var next = game.createEvent('llbz_laichuang_recover', false, _status.event.parent);
                        next.player = player;
                        next.setContent(function () {
                            player.recover();
                        });
                    },
                },
                llbz_laichuang_extra: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'phaseJudgeBegin' },
                    forced: true,
                    filter(event, player) {
                        return player.countCards('j');
                    },
                    content() {
                        var next = player.phaseUse();
                        event.next.remove(next);
                        trigger.next.push(next);
                    },
                },
                llbz_meili: {
                    audio: 'ext:拉拉:1',
                    group: 'llbz_meili_tushe',
                    trigger: {
                        player: 'useCard2',
                    },
                    filter(event, player, name) {
                        if (name == 'useCardToTarget' && player == event.player) return false;
                        if (event.card.name == 'jiu' || event.card.name == 'wuxie' || event.card.name == 'shan') return false;
                        return ['basic', 'trick'].includes(get.type(event.card));
                    },
                    content() {
                        'step 0';
                        var bool1 = trigger.targets.length > 1;
                        var bool2 = game.hasPlayer(function (current) {
                            return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, trigger.player, current);
                        });
                        if (bool1 && bool2) {
                            player
                                .chooseControlList(get.prompt('llbz_meili'), ['为' + get.translation(trigger.card) + '增加一个目标', '为' + get.translation(trigger.card) + '减少一个目标'], function (event, player) {
                                    if (_status.event.add) return 0;
                                    return 1;
                                })
                                .set('add', get.effect(player, trigger.card, trigger.player, player) >= 0);
                        } else if (bool2) {
                            event.type = 'add';
                            event.goto(2);
                            event.unchosen = true;
                        } else if (bool1) {
                            event.type = 'remove';
                            event.goto(2);
                            event.unchosen = true;
                        } else event.finish();
                        ('step 1');
                        if (result.control == 'cancel2') {
                            event.finish();
                        } else if (result.index == 1) {
                            event.type = 'remove';
                        } else {
                            event.type = 'add';
                        }
                        ('step 2');
                        if (event.type == 'add') {
                            player
                                .chooseTarget(event.unchosen ? get.prompt('llbz_meili') : null, '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
                                    var trigger = _status.event.getTrigger();
                                    return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                                })
                                .set('ai', function (target) {
                                    var trigger = _status.event.getTrigger();
                                    return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                });
                        } else {
                            player
                                .chooseTarget(event.unchosen ? get.prompt('llbz_meili') : null, '为' + get.translation(trigger.card) + '减少一个目标', function (card, player, target) {
                                    return _status.event.targets.includes(target);
                                })
                                .set('ai', function (target) {
                                    var trigger = _status.event.getTrigger();
                                    return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                })
                                .set('targets', trigger.targets);
                        }
                        ('step 3');
                        if (result.bool) {
                            if (!event.isMine() && !event.isOnline()) game.delayx();
                            event.target = result.targets[0];
                        } else {
                            event.finish();
                        }
                        ('step 4');
                        if (event.type == 'add') {
                            trigger.targets.push(event.target);
                        } else {
                            trigger.excluded.add(event.target);
                        }
                    },
                    ai: {
                        expose: 0.2,
                    },
                },
                llbz_meili_tushe: {
                    audio: 'ext:拉拉:2',
                    trigger: {
                        player: 'useCardToPlayered',
                    },
                    usable: 3,
                    filter(event, player) {
                        if (get.type(event.card) == 'equip') return false;
                        if (event.parent.triggeredTargets3.length > 1) return false;
                        return event.targets.length;
                    },
                    content() {
                        player.draw(trigger.targets.length);
                    },
                },
                llbz_meihuo: {
                    audio: 'ext:拉拉:2',
                    enable: 'phaseUse',
                    usable: 3,
                    discard: false,
                    lose: false,
                    delay: false,
                    filter(event, player) {
                        return player.countCards('hes', { color: 'red' }) > 0;
                    },
                    position: 'hes',
                    filterCard: { color: 'red' },
                    selectCard: [0, 1],
                    filterTarget(card, player, target) {
                        if (!ui.selected.cards.length) {
                            if (target.hasJudge('lebu')) return true;
                            return false;
                        }
                        if (player == target) return false;
                        var mod = game.checkMod(ui.selected.cards[0], player, 'unchanged', 'cardEnabled2', player);
                        if (!mod) return false;
                        return player.canUse({ name: 'lebu', cards: ui.selected.cards }, target);
                    },
                    check(card) {
                        return 7 - get.value(card);
                    },
                    content() {
                        'step 0';
                        if (target.hasJudge('lebu')) {
                            target.discard(target.getJudge('lebu'));
                        } else {
                            player.useCard({ name: 'lebu' }, target, cards).audio = false;
                        }
                        ('step 1');
                        player.draw(2);
                        player.chooseToDiscard(true, 'he', '迷离:请弃置一张牌');
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
                },
                llbz_huanxing: {
                    audio: 'ext:拉拉:1',
                    trigger: { global: 'phaseJudgeBegin' },
                    filter(event, player) {
                        return event.player != player && event.player.countCards('j') > 0;
                    },
                    async cost(event, trigger, player) {
                        var att = get.attitude(player, trigger.player);
                        var nh = trigger.player.countCards('h');
                        var eff = get.effect(trigger.player, { name: 'sha' }, player, player);
                        if (player.inRange(trigger.player) || !player.canUse({ name: 'sha' }, trigger.player, false)) eff = 0;
                        event.result = await player
                            .discardPlayerCard(get.prompt('llbz_huanxing', trigger.player), trigger.player, 'j')
                            .set('ai', function (button) {
                                var name = button.link.viewAs || button.link.name;
                                var att = _status.event.att;
                                var nh = _status.event.nh;
                                var eff = _status.event.eff;
                                var trigger = _status.event.getTrigger();
                                if (att > 0 && eff >= 0) return 1;
                                if (att >= 0 && eff > 0) return 1;
                                if (att > 0 && (trigger.player.hp >= 3 || trigger.player.getEquip('bagua') || trigger.player.countCards('h', 'shan'))) {
                                    if (name == 'lebu' && nh > trigger.player.hp) return 1;
                                    if (name == 'bingliang' && nh < trigger.player.hp) return 1;
                                }
                                return 0;
                            })
                            .set('att', att)
                            .set('nh', nh)
                            .set('eff', eff)
                            .forResult();
                    },
                    content() {
                        'step 0';
                        if (player.canUse({ name: 'sha' }, trigger.player, false)) {
                            var next = player.useCard({ name: 'sha' }, trigger.player);
                            next.baseDamage = 2;
                            event.related = next;
                        }
                        ('step 1');
                        if (
                            !event.related ||
                            !game.hasPlayer2(function (current) {
                                return current.getHistory('damage', function (evt) {
                                    return evt.getParent(2) == event.related;
                                }).length;
                            })
                        ) {
                            player.draw();
                        }
                    },
                },
                llbz_mili: {
                    audio: 'ext:拉拉:1',
                    trigger: { target: 'useCardToTarget' },
                    preHidden: true,
                    filter(event, player) {
                        if (event.card.name != 'sha') return false;
                        if (player.countCards('he') == 0) return false;
                        return game.hasPlayer(function (current) {
                            return ((player.inRange(current) || current.countCards('j') > 0) && current != event.player && current != player && lib.filter.targetEnabled(event.card, event.player, current)) || current.countCards('j') > 0;
                        });
                    },
                    async cost(event, trigger, player) {
                        event.result = await player
                            .chooseCardTarget({
                                position: 'he',
                                filterCard: lib.filter.cardDiscardable,
                                filterTarget(card, player, target) {
                                    var trigger = _status.event;
                                    if (target != trigger.source && (player.inRange(target) || target.countCards('j') > 0)) {
                                        if (lib.filter.targetEnabled(trigger.card, trigger.source, target)) return true;
                                    }
                                    return false;
                                },
                                ai1(card) {
                                    return get.unuseful(card) + 9;
                                },
                                ai2(target) {
                                    if (_status.event.player.countCards('h', 'shan')) {
                                        return -get.attitude(_status.event.player, target);
                                    }
                                    if (get.attitude(_status.event.player, target) < 5) {
                                        return 6 - get.attitude(_status.event.player, target);
                                    }
                                    if (_status.event.player.hp == 1 && player.countCards('h', 'shan') == 0) {
                                        return 10 - get.attitude(_status.event.player, target);
                                    }
                                    if (_status.event.player.hp == 2 && player.countCards('h', 'shan') == 0) {
                                        return 8 - get.attitude(_status.event.player, target);
                                    }
                                    return -1;
                                },
                                prompt: get.prompt('llbz_mili'),
                                prompt2: '弃置一张牌,将此【杀】转移给攻击范围内或判定区有牌的一名其他角色',
                                source: trigger.player,
                                card: trigger.card,
                            })
                            .setHiddenSkill(event.name)
                            .forResult();
                    },
                    content() {
                        var target = event.targets[0];
                        player.discard(event.cards);
                        var evt = trigger.parent;
                        evt.triggeredTargets2.remove(player);
                        evt.targets.remove(player);
                        evt.targets.push(target);
                    },
                },
                llbz_jiqing: {
                    audio: 'ext:拉拉:1',
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
                    content() {
                        player.draw();
                    },
                },
                llbz_xiaohua: {
                    audio: 'ext:拉拉:1',
                    enable: 'phaseUse',
                    usable: 1,
                    selectTarget: 1,
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    content() {
                        'step 0';
                        event.cards = get.cards();
                        game.cardsGotoOrdering(event.cards);
                        player.showCards(event.cards);
                        ('step 1');
                        if (get.color(event.cards[0]) == 'red') {
                            player.useCard({ name: 'juedou' }, target, cards);
                        }
                        ('step 2');
                        if (get.color(event.cards[0]) == 'black' && target.canAddJudge({ name: 'bingliang' })) {
                            if (target.hasJudge('bingliang')) {
                                player.gainPlayerCard(target, 'he', true);
                            } else {
                                player.useCard({ name: 'bingliang' }, target, cards);
                            }
                        }
                    },
                    ai: {
                        order: 8,
                        result: { target: -1 },
                    },
                },
                llbz_liantong: {
                    audio: 'ext:拉拉:1',
                    group: ['llbz_liantong_effect', 'llbz_liantong_chongzhu'],
                    hiddenCard(player, name) {
                        if (
                            (name == 'sha' || name == 'jiu') &&
                            player.hasCard(function (card) {
                                return get.type(card) == 'equip';
                            }, 'hes')
                        )
                            return true;
                        return false;
                    },
                    enable: 'chooseToUse',
                    filter(event, player) {
                        return (
                            player.hasCard(function (card) {
                                return get.type(card) == 'equip';
                            }, 'hes') &&
                            ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || event.filterCard({ name: 'jiu' }, player, event))
                        );
                    },
                    mod: {
                        targetInRange(card) {
                            if (card.storage && card.storage.llbz_liantong) return true;
                        },
                    },
                    chooseButton: {
                        dialog() {
                            var list = [];
                            list.push(['基本', '', 'sha']);
                            for (var i of lib.inpile_nature) list.push(['基本', '', 'sha', i]);
                            list.push(['基本', '', 'jiu']);
                            return ui.create.dialog('炼铜', [list, 'vcard']);
                        },
                        filter(button, player) {
                            var evt = _status.event.parent;
                            return evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
                        },
                        check(button) {
                            if (_status.event.parent.type != 'phase') return 1;
                            var player = _status.event.player;
                            if (
                                button.link[2] == 'jiu' &&
                                (player.hasCard(function (card) {
                                    return card.name == 'sha';
                                }, 'hs') ||
                                    player.countCards('hes', function (card) {
                                        if (get.type(card) != 'equip') return false;
                                        if (get.position(card) == 'e') {
                                            if (player.hasSkillTag('noe')) return 10 - get.value(card) > 0;
                                            var sub = get.subtype(card);
                                            if (
                                                player.hasCard(function (card) {
                                                    return get.subtype(card) == sub && player.canUse(card, player) && get.effect(player, card, player, player) > 0;
                                                }, 'hs')
                                            )
                                                return 10 - get.value(card) > 0;
                                        }
                                        return 5 - get.value(card) > 0;
                                    }) > 1)
                            )
                                return player.getUseValue({ name: 'jiu' }) * 4;
                            return player.getUseValue({ name: button.link[2], nature: button.link[3] }, false);
                        },
                        backup(links, player) {
                            return {
                                audio: 'ext:拉拉:2',
                                viewAs: {
                                    name: links[0][2],
                                    nature: links[0][3],
                                    storage: { llbz_liantong: true },
                                },
                                filterCard: { type: 'equip' },
                                position: 'hes',
                                popname: true,
                                precontent() {
                                    player.addTempSkill('llbz_liantong_effect');
                                },
                                check(card) {
                                    var player = _status.event.player;
                                    if (get.position(card) == 'e') {
                                        if (player.hasSkillTag('noe')) return 10 - get.value(card);
                                        var sub = get.subtype(card);
                                        if (
                                            player.hasCard(function (card) {
                                                return get.subtype(card) == sub && player.canUse(card, player) && get.effect(player, card, player, player) > 0;
                                            }, 'hs')
                                        )
                                            return 10 - get.value(card);
                                    }
                                    return 5 - get.value(card);
                                },
                            };
                        },
                        prompt(links) {
                            return '将一张装备牌当做' + (links[0][3] ? get.translation(links[0][3]) : '') + '【' + get.translation(links[0][2]) + '】使用';
                        },
                    },
                    ai: {
                        unequip: true,
                        respondSha: true,
                        skillTagFilter(player, tag, arg) {
                            if (tag == 'unequip') {
                                if (!arg || !arg.card || !arg.card.storage || !arg.card.storage.llbz_liantong) return false;
                                return true;
                            }
                            return (
                                player.group == 'wu' &&
                                arg == 'use' &&
                                player.hasCard(function (card) {
                                    return get.type(card) == 'equip';
                                }, 'hes')
                            );
                        },
                        order(item, player) {
                            if (_status.event.type != 'phase') return 1;
                            var player = _status.event.player;
                            if (
                                player.hasCard(function (card) {
                                    if (get.value(card, player) < 0) return true;
                                    var sub = get.subtype(card);
                                    return (
                                        player.hasCard(function (card) {
                                            return get.subtype(card) == sub && player.canUse(card, player) && get.effect(player, card, player, player) > 0;
                                        }, 'hs') > 0
                                    );
                                }, 'e')
                            )
                                return 10;
                            if (
                                player.countCards('hs', 'sha') ||
                                player.countCards('he', function (card) {
                                    return get.type(card) == 'equip' && get.value(card, player) < 5;
                                }) > 1
                            )
                                return get.order({ name: 'jiu' }) - 0.1;
                            return get.order({ name: 'sha' }) - 0.1;
                        },
                        result: { player: 1 },
                    },
                    subSkill: {
                        effect: {
                            charlotte: true,
                            mod: {
                                targetInRange(card) {
                                    if (card.storage && card.storage.llbz_liantong) return true;
                                },
                            },
                            trigger: { source: 'damageSource' },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                return event.parent.skill == 'llbz_liantong_backup' && event.card.name == 'sha' && event.parent.name == 'sha' && event.player.countGainableCards(player, 'e') > 0;
                            },
                            content() {
                                player.gainPlayerCard(trigger.player, 'e', true, trigger.num);
                            },
                        },
                        chongzhu: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('hes', { type: 'equip' }) > 0;
                            },
                            filterCard: (card, player) => get.type(card) == 'equip' && player.canRecast(card),
                            discard: false,
                            lose: false,
                            delay: false,
                            prompt: '将一张装备牌置入弃牌堆并摸一张牌,从牌堆获取一张【决斗】',
                            content() {
                                'step 0';
                                player.recast(cards);
                                ('step 1');
                                var cards = [];
                                var card = get.cardPile2(function (card) {
                                    return ['juedou'].includes(card.name);
                                });
                                if (card) cards.push(card);
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                        },
                    },
                },
                llbz_keji: {
                    trigger: { target: 'shaBefore' },
                    forced: true,
                    group: 'bazhen_bagua',
                    audio: 'ext:拉拉:2',
                    filter(event, player) {
                        return event.card.name == 'sha' && get.color(event.card) == 'black';
                    },
                    content() {
                        trigger.cancel();
                    },
                },
                llbz_daiban: {
                    audio: 'ext:拉拉:1',
                    enable: 'phaseUse',
                    usable: 1,
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    content() {
                        var skills = target.getSkills(null, false, false).filter(function (i) {
                            if (i == 'llbz_keji') return;
                            var info = get.info(i);
                            return info && !get.is.locked(i) && !info.limited && !info.juexingji && !info.zhuSkill && !info.charlotte;
                        });
                        target.addAdditionalSkills('llbz_daiban_blocker', 'llbz_keji');
                        target.addSkill('llbz_daiban_blocker');
                        target.markAuto('llbz_daiban_blocker', skills);
                        player.addSkill('llbz_daiban_clear');
                        player.markAuto('llbz_daiban_clear', [target]);
                        player.removeSkills('llbz_keji');
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                var skills = target.getSkills(null, false, false).filter(function (i) {
                                    if (i == 'llbz_keji') return;
                                    var info = get.info(i);
                                    return info && !get.is.locked(i) && !info.limited && !info.juexingji && !info.zhuSkill && !info.charlotte;
                                });
                                if (!skills.length && target.isEmpty(2)) return 1;
                                return -0.5 * skills.length;
                            },
                        },
                    },
                    subSkill: {
                        blocker: {
                            charlotte: true,
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                                player.removeAdditionalSkill(skill);
                                delete player.storage.llbz_daiban_blocker;
                            },
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return skill != 'llbz_keji' && skill != 'llbz_daiban_blocker' && !lib.skill[skill].charlotte && player.getStorage('llbz_daiban_blocker').includes(skill);
                            },
                            mark: true,
                            marktext: '板',
                            intro: {
                                content(storage, player, skill) {
                                    if (storage.length) return '失效技能:' + get.translation(storage);
                                    return '无失效技能';
                                },
                            },
                        },
                        clear: {
                            audio: 'llbz_daiban',
                            charlotte: true,
                            trigger: {
                                global: ['judgeAfter', 'die'],
                                player: 'phaseBegin',
                            },
                            forced: true,
                            forceDie: true,
                            filter(event, player) {
                                if (event.name == 'die') {
                                    return player == event.player || player.getStorage('llbz_daiban_clear').includes(event.player);
                                } else if (event.name == 'judge') {
                                    return event.skill == 'bagua' && player.getStorage('llbz_daiban_clear').includes(event.player);
                                }
                                return player.getStorage('llbz_daiban_clear').length;
                            },
                            logTarget(event, player) {
                                if (event.name != 'phase') return event.player;
                                return player.getStorage('llbz_daiban_clear');
                            },
                            content() {
                                'step 0';
                                var targets = player.getStorage('llbz_daiban_clear');
                                if (trigger.name == 'die' && player == trigger.player) {
                                    for (var target of targets) {
                                        target.removeSkill('llbz_daiban_blocker');
                                    }
                                    player.removeSkill('llbz_daiban_clear');
                                    player.addSkills('llbz_keji');
                                    event.finish();
                                    return;
                                }
                                if (trigger.name == 'phase') event.targets = targets.slice(0).sortBySeat();
                                else event.targets = [trigger.player];
                                ('step 1');
                                var target = targets.shift();
                                var storage = player.getStorage('llbz_daiban_clear');
                                if (storage.includes(target)) {
                                    storage.remove(target);
                                    target.removeSkill('llbz_daiban_blocker');
                                    if (target.isIn() && target.countGainableCards(player, 'hej') > 0) player.gainPlayerCard(target, 'hej', true);
                                }
                                if (targets.length) {
                                    event.redo();
                                } else {
                                    player.removeSkill('llbz_daiban_clear');
                                    player.addSkills('llbz_keji');
                                }
                            },
                        },
                    },
                    derivation: 'llbz_keji',
                },
                llbz_tianshi: {
                    audio: 'ext:拉拉:2',
                    trigger: { player: 'damageBegin' },
                    usable: 1,
                    filter(event, player) {
                        return !event.card || get.color(event.card) == 'none';
                    },
                    forced: true,
                    content() {
                        trigger.cancel();
                    },
                    group: 'llbz_tianshi_effect',
                },
                llbz_tianshi_effect: {
                    trigger: { player: 'damageBegin' },
                    forced: true,
                    filter(event, player) {
                        if (player.hasSkill('llbz_keji')) return false;
                        return get.type(event.card, 'trick') == 'trick';
                    },
                    content() {
                        trigger.cancel();
                    },
                },
                llbz_huanmeng: {
                    audio: 'ext:拉拉:3',
                    trigger: { player: 'phaseUseBegin' },
                    group: ['llbz_huanmeng_upstart', 'llbz_huanmeng_die'],
                    filter(event, player) {
                        if (!game.hasPlayer((current) => current != player && !lib.skill.llbz_huanmeng.getKane(current).length)) return false;
                        return lib.skill.llbz_huanmeng.getKane(player).length;
                    },
                    getKane(player) {
                        var list = lib.skill.llbz_huanmeng.derivation;
                        return list.filter((mark) => player.hasMark(mark));
                    },
                    derivation: ['llbz_huanmeng_qiangda', 'llbz_huanmeng_meimeng', 'llbz_huanmeng_emeng', 'llbz_huanmeng_jie', 'llbz_huanmeng_huifu'],
                    getValue(player, mark, target) {
                        var att = get.attitude(player, target);
                        var dis = Math.sqrt(get.distance(player, target, 'absolute'));
                        switch (mark.slice(6)) {
                            case 'qiangda':
                                return (get.effect(target, { name: 'wuzhong' }, player, player) * 2.5) / dis;
                            case 'meimeng':
                                if (target.hasJudge('lebu') && !target.hasCard({ name: 'wuxie' }, 'hs')) return 1;
                                return get.effect(target, { name: 'lebu' }, player, player) / dis;
                            case 'emeng':
                                return (get.effect(target, { name: 'losehp' }, player, player) * 2) / dis;
                            case 'tongshen':
                                if (target.isMin()) return 0;
                                var eff = get.damageEffect(target, player, target);
                                if (eff >= 0) return 0;
                                if (att >= 4) {
                                    if (target.hp == 1) return (att * 5) / Math.max(0.1, 5 - dis);
                                    if (target.hp == 2 && target.countCards('he') <= 2) return (att * 3) / Math.max(0.1, 5 - dis);
                                }
                                if (att > 0) return 0;
                                return (-eff / 5) * dis;
                            case 'jie':
                                return get.effect(target, { name: 'bingliang' }, player, player) * 2;
                            case 'huifu':
                                return get.recoverEffect(target, player, player) / dis;
                        }
                    },
                    async cost(event, trigger, player) {
                        event.result = await player
                            .chooseTarget('幻梦:令一名其他角色获得1枚<梦>', true, function (card, player, target) {
                                return player != target && !lib.skill.llbz_huanmeng.getKane(target).length;
                            })
                            .set('ai', (target) => {
                                var player = _status.event.player,
                                    kane = lib.skill.llbz_huanmeng.getKane(player);
                                return Math.abs(
                                    Math.max.apply(
                                        Math.max,
                                        kane.map((i) => lib.skill.llbz_huanmeng.getValue(player, i, target))
                                    )
                                );
                            })
                            .forResult();
                    },
                    content() {
                        'step 0';
                        event.target = event.targets[0];
                        var kane = lib.skill.llbz_huanmeng.getKane(player);
                        var choiceList = kane.map((i) => {
                            return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div>' + '<div>' + get.skillInfoTranslation(i, player) + '</div>';
                        });
                        player
                            .chooseControl(kane)
                            .set('choiceList', choiceList)
                            .set('displayIndex', false)
                            .set('prompt', '选择令' + get.translation(target) + '获得的<梦>')
                            .set('ai', () => {
                                var controls = _status.event.controls,
                                    player = _status.event.player,
                                    target = _status.event.parent.target;
                                var list = controls.map((i) => [i, lib.skill.llbz_huanmeng.getValue(player, i, target)]); //.filter(i=>i[1]>=0);
                                list.sort((a, b) => b[1] - a[1]);
                                if (list.length) return list[0][0];
                                return controls.randomGet();
                            });
                        ('step 1');
                        var kane = result.control;
                        player.removeMark(kane, 1);
                        player.popup(kane, 'metal');
                        player.addSkill('llbz_huanmeng_clear');
                        target.addMark(kane, 1);
                        target.addAdditionalSkill('llbz_huanmeng_' + player.playerid, kane);
                    },
                    subSkill: {
                        mark: {
                            mark: true,
                            marktext: '梦',
                            intro: {
                                name: '梦',
                                name2: '梦',
                                markcount(storage, player) {
                                    return lib.skill.llbz_huanmeng.getKane(player).length;
                                },
                                content(storage, player) {
                                    return '剩余梦:' + get.translation(lib.skill.llbz_huanmeng.getKane(player));
                                },
                            },
                        },
                        upstart: {
                            audio: 'llbz_huanmeng',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var kane = lib.skill.llbz_huanmeng.derivation;
                                for (var mark of kane) {
                                    player.addMark(mark, 1, false);
                                    player.unmarkSkill(mark);
                                }
                                player.addSkill('llbz_huanmeng_mark');
                            },
                        },
                        die: {
                            audio: 'llbz_huanmeng',
                            trigger: { player: 'phaseBegin' },
                            forced: true,
                            check: () => false,
                            filter(event, player) {
                                return !lib.skill.llbz_huanmeng.getKane(player).length;
                            },
                            content() {
                                player.die();
                            },
                        },
                        clear: {
                            trigger: {
                                global: 'phaseAfter',
                                player: 'die',
                            },
                            charlotte: true,
                            forced: true,
                            popup: false,
                            forceDie: true,
                            filter(event, player) {
                                if (event.name == 'die') return true;
                                if (!lib.skill.llbz_huanmeng.getKane(event.player).length) return false;
                                if (event.player.additionalSkills['llbz_huanmeng_' + player.playerid]) {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (trigger.name == 'die') {
                                    game.countPlayer((current) => {
                                        var skills = current.additionalSkills['llbz_huanmeng_' + player.playerid];
                                        if (skills && skills.length) {
                                            current.removeAdditionalSkill('llbz_huanmeng_' + player.playerid);
                                            for (var i of skills) {
                                                trigger.player.removeSkill(i);
                                            }
                                        }
                                    });
                                    event.finish();
                                    return;
                                } else {
                                    const skills = trigger.player.additionalSkills['llbz_huanmeng_' + player.playerid];
                                    for (const mark of skills) trigger.player.removeMark(mark, 1);
                                }
                                ('step 1');
                                trigger.player.removeAdditionalSkill('llbz_huanmeng_' + player.playerid);
                            },
                        },
                        qiangda: {
                            charlotte: true,
                            forced: true,
                            trigger: { player: 'phaseDrawBegin2' },
                            content() {
                                trigger.num += 4;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            marktext: '梦',
                            intro: {
                                name: '梦(强大)',
                                name2: '梦(强大)',
                                content: '摸牌阶段多摸四张牌;使用【杀】的次数上限+1',
                            },
                        },
                        meimeng: {
                            charlotte: true,
                            forced: true,
                            trigger: { player: 'phaseBegin' },
                            content() {
                                player.skip('phaseUse');
                                player.skip('phaseDiscard');
                            },
                            marktext: '梦',
                            intro: {
                                name: '梦(美梦)',
                                name2: '梦(美梦)',
                                content: '回合开始时,跳过下一个出牌阶段和弃牌阶段',
                            },
                        },
                        emeng: {
                            charlotte: true,
                            forced: true,
                            trigger: { player: 'phaseUseBegin' },
                            content() {
                                player.loseHp();
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 3;
                                },
                            },
                            marktext: '梦',
                            intro: {
                                name: '梦(噩梦)',
                                name2: '梦(噩梦)',
                                content: '出牌阶段开始时,失去1点体力;手牌上限-3',
                            },
                        },
                        jie: {
                            charlotte: true,
                            forced: true,
                            trigger: { player: 'phaseZhunbeiBegin' },
                            content() {
                                player.skip('phaseDraw');
                            },
                            marktext: '梦',
                            intro: {
                                name: '梦(饥饿)',
                                name2: '梦(饥饿)',
                                content: '准备阶段,跳过下一个摸牌阶段',
                            },
                        },
                        huifu: {
                            charlotte: true,
                            forced: true,
                            trigger: { player: 'phaseEnd' },
                            content() {
                                player.recover(3);
                            },
                            marktext: '梦',
                            intro: {
                                name: '梦(回复)',
                                name2: '梦(回复)',
                                content: '回合结束时,回复3点体力',
                            },
                        },
                    },
                },
                llbz_rumeng: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'dying' },
                    forced: true,
                    group: 'llbz_rumeng_nogain',
                    content() {
                        'step 0';
                        player.loseMaxHp();
                        ('step 1');
                        var num = player.maxHp - player.hp;
                        if (num > 0) player.recover(num);
                    },
                    ai: { halfneg: true },
                    subSkill: {
                        nogain: {
                            audio: 'llbz_rumeng',
                            trigger: { player: 'gainMaxHpBegin' },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                    },
                },
                llbz_miyatiancai: {
                    audio: 'ext:拉拉:1',
                    mod: {
                        targetInRange(card, player, target) {
                            if (player == _status.currentPhase && (get.type2(card) == 'trick' || card.name == 'sha')) return true;
                        },
                    },
                    forced: true,
                    group: ['llbz_miyatiancai_jiben', 'llbz_miyatiancai_draw'],
                    preHidden: ['llbz_miyatiancai_jiben', 'llbz_miyatiancai_draw'],
                    subSkill: {
                        jiben: {
                            audio: 'ext:拉拉:2',
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                return player == _status.currentPhase && event.card.name == 'sha';
                            },
                            content() {
                                if (trigger.addCount !== false) {
                                    trigger.addCount = false;
                                    trigger.player.getStat().card.sha--;
                                }
                            },
                        },
                        draw: {
                            audio: 'ext:拉拉:2',
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                return player == _status.currentPhase && get.type2(event.card) == 'trick';
                            },
                            content() {
                                player.draw();
                            },
                        },
                    },
                },
                llbz_zaoshu: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'phaseEnd' },
                    forced: true,
                    preHidden: true,
                    filter(event, player) {
                        return player.hp < player.maxHp || player.countCards('h') < player.maxHp;
                    },
                    content() {
                        'step 0';
                        player.addSkill('llbz_zaoshu2');
                        if (!player.storage.llbz_zaoshu2) player.storage.llbz_zaoshu2 = 0;
                        var num = player.maxHp - player.hp;
                        if (num > 0) {
                            player.storage.llbz_zaoshu2 = num;
                            player.recover(num);
                        }
                        ('step 1');
                        if (player.countCards('h') < player.maxHp) player.drawTo(Math.min(player.maxHp, 5 + player.countCards('h'))).gaintag = ['llbz_zaoshu'];
                    },
                },
                llbz_zaoshu2: {
                    mod: {
                        aiValue(player, card, num) {
                            if (card.hasGaintag && card.hasGaintag('llbz_zaoshu')) return num / 10;
                        },
                    },
                    audio: 'ext:拉拉:2',
                    trigger: { player: 'phaseUseBegin' },
                    charlotte: true,
                    forced: true,
                    content() {
                        var map = player.storage.llbz_zaoshu2;
                        if (map > 0) player.loseHp(map);
                        var hs = player.getCards('h', function (card) {
                            return card.hasGaintag('llbz_zaoshu');
                        });
                        if (hs.length) player.discard(hs);
                        player.removeSkill('llbz_zaoshu2');
                    },
                },
                llbz_yuren: {
                    audio: 'ext:拉拉:1',
                    enable: 'phaseUse',
                    limited: true,
                    async cost(event, trigger, player) {
                        event.result = await player.chooseTarget('选择一名角色获得【集智】、【武圣】', 1, false).forResult();
                    },
                    content() {
                        player.awakenSkill('llbz_yuren');
                        player.loseMaxHp(3);
                        var target = event.targets[0];
                        target.addAdditionalSkills('llbz_yuren', 'rejizhi', true);
                        target.addAdditionalSkills('llbz_yuren', 'new_rewusheng', true);
                        target.addSkill('llbz_yuren_effect');
                        game.log(target, '获得了【集智】、【武圣】');
                    },
                    derivation: ['rejizhi', 'rewusheng'],
                    subSkill: {
                        effect: {
                            charlotte: true,
                            mark: true,
                            marktext: '育',
                            intro: {
                                markcount: () => null,
                                content: '已拥有技能〖集智〗、〖武圣〗',
                            },
                        },
                    },
                },
                llbz_jiantao: {
                    audio: 'ext:拉拉:1',
                    enable: 'phaseUse',
                    usable: 1,
                    group: 'llbz_jiantao_rob',
                    filterTarget(card, player, target) {
                        return !target.hasMark('llbz_jiantao_mark') && player != target;
                    },
                    filterCard: true,
                    position: 'he',
                    discard: false,
                    lose: false,
                    delay: false,
                    onremove(player) {
                        delete player.storage.llbz_jiantao;
                        player.unmarkSkill('llbz_jiantao');
                    },
                    check(card) {
                        return 6.5 - get.value(card);
                    },
                    content() {
                        'step 0';
                        player.give(cards, target);
                        if (player.storage.llbz_jiantao && player.storage.llbz_jiantao[target.playerid]) delete player.storage.llbz_jiantao[target.playerid];
                        ('step 1');
                        target.addMark('llbz_jiantao_mark');
                        var history = target.getAllHistory('lose');
                        if (history.length) {
                            history[history.length - 1].llbz_jiantao_mark = true;
                        }
                    },
                    getNum(current, skill) {
                        var num = 0;
                        var history = current.getAllHistory('lose');
                        if (history.length) {
                            for (var i = history.length - 1; i >= 0; i--) {
                                var evt = history[i];
                                if (evt.llbz_jiantao_mark) break;
                                if (typeof skill == 'string') {
                                    if (evt.getParent(2).name == skill) num += evt.cards2.length;
                                } else {
                                    var evtx = evt.parent,
                                        player = skill;
                                    if (evtx.name == 'gain') {
                                        var cards = evtx.cards;
                                        if (evtx.player == player && cards.length) num += cards.length;
                                    } else if (evtx.name == 'loseAsync') {
                                        if (evtx.type != 'gain' || evtx.giver) return false;
                                        var cards = evtx.getl(current).cards2;
                                        var cardsx = evtx.getg(player);
                                        if (cardsx.length) num += cardsx.length;
                                    }
                                }
                            }
                        }
                        return num;
                    },
                    ai: {
                        order: 9,
                        result: {
                            target(player, target) {
                                return -Math.sqrt(Math.max(target.hp, 1));
                            },
                        },
                    },
                    marktext: '检',
                    intro: {
                        content(storage, player) {
                            if (!storage || get.is.empty(storage)) return '未获得过牌';
                            var map = _status.connectMode ? lib.playerOL : game.playerMap;
                            var str = '已获得过';
                            for (var i in storage) {
                                str += get.translation(map[i]) + '的' + get.cnNumber(storage[i]) + '张牌、';
                            }
                            return str.slice(0, -1);
                        },
                    },
                    subSkill: {
                        mark: {
                            marktext: '讨',
                            intro: {
                                name: '检讨',
                                name2: '讨',
                                markcount: () => 0,
                                content: '已获得<讨>标记',
                            },
                        },
                        rob: {
                            audio: 'ext:拉拉:2',
                            trigger: {
                                global: ['gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.getParent('phaseDraw');
                                if (evt && evt.name == 'phaseDraw') return false;
                                return game.hasPlayer((current) => {
                                    if (!event.getg(current).length || !current.hasMark('llbz_jiantao_mark')) return false;
                                    if (evt && evt.player == current) return false;
                                    if (lib.skill.llbz_jiantao.getNum(current, 'llbz_jiantao_rob') >= 5) return false;
                                    return current.hasCard((card) => lib.filter.canBeGained(card, current, player), 'he');
                                });
                            },
                            content() {
                                'step 0';
                                var evt = trigger.getParent('phaseDraw');
                                var targets = game.filterPlayer((current) => {
                                    if (!trigger.getg(current).length || !current.hasMark('llbz_jiantao_mark')) return false;
                                    if (evt && evt.player == current) return false;
                                    if (lib.skill.llbz_jiantao.getNum(current, 'llbz_jiantao_rob') >= 5) return false;
                                    return current.hasCard((card) => lib.filter.canBeGained(card, current, player), 'he');
                                });
                                event.targets = targets;
                                ('step 1');
                                var target = targets.shift();
                                var hs = target.getCards('h', (card) => lib.filter.canBeGained(card, target, player));
                                if (hs.length) {
                                    player.gain(hs.randomGet(), target, 'giveAuto');
                                    if (!player.storage.llbz_jiantao) player.storage.llbz_jiantao = {};
                                    player.storage.llbz_jiantao[target.playerid] = lib.skill.llbz_jiantao.getNum(target, 'llbz_jiantao_rob') + 1;
                                    player.markSkill('llbz_jiantao');
                                }
                                if (targets.length) event.redo();
                            },
                        },
                    },
                },
                llbz_enyuan: {
                    audio: 'ext:拉拉:1',
                    forced: true,
                    trigger: { player: 'phaseZhunbeiBegin' },
                    filter(event, player) {
                        return game.hasPlayer((current) => current.hasMark('llbz_jiantao_mark'));
                    },
                    content() {
                        'step 0';
                        var targets = game.filterPlayer((current) => current.hasMark('llbz_jiantao_mark'));
                        event.targets = targets;
                        ('step 1');
                        var target = targets.shift();
                        event.target = target;
                        target.removeMark('llbz_jiantao_mark', target.countMark('llbz_jiantao_mark'));
                        game.players.forEach((current) => {
                            var storage = current.storage.llbz_jiantao;
                            if (storage && storage[target.playerid]) delete storage[target.playerid];
                            if (storage && get.is.empty(storage)) {
                                delete current.storage.llbz_jiantao;
                                current.unmarkSkill('llbz_jiantao');
                            }
                        });
                        var num = lib.skill.llbz_jiantao.getNum(target, player);
                        if (num >= 3) {
                            var cards = player.getCards('he');
                            if (!cards.length) event._result = { bool: false };
                            else if (cards.length <= 2) event._result = { bool: true, cards: cards };
                            else player.chooseCard('恩怨:交给' + get.translation(target) + '两张牌', true, 2, 'he');
                        } else {
                            target.loseHp();
                            player.recover();
                            event.goto(3);
                        }
                        ('step 2');
                        if (result.bool) player.give(result.cards, target);
                        ('step 3');
                        if (targets.length) event.goto(1);
                    },
                },
                llbz_guzhi: {
                    trigger: { global: 'phaseDiscardAfter' },
                    audio: 'ext:拉拉:1',
                    filter(event, player) {
                        if (event.player != player && event.player.isIn()) {
                            return event.player.getHistory('lose', function (evt) {
                                return evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs.filterInD('d').length;
                            }).length;
                        }
                        return false;
                    },
                    check(event, player) {
                        if (get.attitude(player, event.player) < 0) return true;
                        return false;
                    },
                    content() {
                        'step 0';
                        var cards = [];
                        var cards2 = [];
                        game.getGlobalHistory('cardMove', function (evt) {
                            if (evt.name == 'cardsDiscard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards.filterInD('d'));
                        });
                        game.countPlayer2(function (current) {
                            current.getHistory('lose', function (evt) {
                                if (evt.type != 'discard' || evt.getParent('phaseDiscard') != trigger) return;
                                cards.addArray(evt.cards.filterInD('d'));
                                if (current == trigger.player) cards2.addArray(evt.hs.filterInD('d'));
                            });
                        });
                        event.cards = cards;
                        event.num = 0;
                        ('step 1');
                        if (event.cards.length) {
                            var hs = event.cards[0];
                            var target = _status.currentPhase;
                            if (player.canUse({ name: 'sha', cards: cards }, target, false)) {
                                player.useCard({ name: 'sha' }, [hs], target, false);
                                event.num++;
                            }
                        } else event.finish();
                        ('step 2');
                        if (event.num <= 2) {
                            event.cards.shift();
                            event.goto(1);
                        }
                    },
                    ai: {
                        threaten: 1.3,
                        expose: 0.2,
                    },
                },
                llbz_dute: {
                    audio: 'ext:拉拉:2',
                    trigger: {
                        player: 'useCardAfter',
                        target: 'useCardToTargeted',
                    },
                    filter(event, player, name) {
                        if (name == 'useCardToTargeted' && ('equip' != get.type(event.card) || event.player != player)) return false;
                        if (name == 'useCardAfter' && ['equip', 'delay'].includes(get.type(event.card))) return false;
                        if (event.cards.filterInD().length <= 0) return false;
                        var history = player.getHistory('useCard');
                        var evt = name == 'useCardAfter' ? event : event.parent;
                        for (var i = 0; i < history.length; i++) {
                            if (history[i] != evt && get.type2(history[i].card) == get.type2(event.card)) return false;
                            else if (history[i] == evt) return true;
                        }
                        return false;
                    },
                    content() {
                        player.draw();
                    },
                },
                llbz_nvwang: {
                    audio: 'ext:拉拉:1',
                    subSkill: {
                        effect: {
                            charlotte: true,
                            mod: {
                                cardUsable(card, player) {
                                    var type = get.type2(card);
                                    if (player.getStorage('llbz_nvwang_effect').includes(type)) return Infinity;
                                },
                                targetInRange(card, player) {
                                    var type = get.type2(card);
                                    if (player.getStorage('llbz_nvwang_effect').includes(type)) return true;
                                },
                            },
                        },
                    },
                    trigger: {
                        player: 'phaseUseBegin',
                    },
                    async cost(event, trigger, player) {
                        let list = ['basic', 'trick', 'equip', 'cancel2'];
                        list.removeArray(player.getStorage('llbz_nvwang_effect'));
                        if (list.length > 1) {
                            const { control } = await player
                                .chooseControl(list)
                                .set('ai', function () {
                                    return list[0];
                                })
                                .set('prompt', get.prompt('llbz_nvwang'))
                                .set('prompt2', '你可以选择一种类别的牌,你本回合内使用该类别的牌时没有次数和距离限制.').forResult();
                            event.result = {
                                bool: control != 'cancel2',
                                cost_data: control,
                            };
                        }
                    },
                    content() {
                        var type = event.cost_data;
                        player.addTempSkill('llbz_nvwang_effect');
                        player.markAuto('llbz_nvwang_effect', [type]);
                        var str = get.translation(type) + '牌';
                        game.log(player, '声明了', '#y' + str);
                        player.popup(str, 'thunder');
                    },
                },
                llbz_duchang: {
                    trigger: { global: 'phaseJieshuBegin' },
                    audio: 'ext:拉拉:1',
                    filter(event, player) {
                        if (player == event.player) return false;
                        var num = event.player.getHistory('useCard', function (evt) {
                            return evt.targets.includes(player);
                        }).length;
                        return num == 0 || (event.player.isIn() && num <= player.countCards('he'));
                    },
                    async cost(event, trigger, player) {
                        let num = trigger.player.getHistory('useCard', function (evt) {
                            return evt.targets.includes(player);
                        }).length;
                        event.num = num;
                        if (num == 0) {
                            const {
                                result: { bool },
                            } = player.hasSkill('llbz_duchang') ? { result: { bool: true } } : await player.chooseBool('是否发动【独唱】摸一张牌？', lib.translate.llbz_duchang_info);
                        }
                    },
                    content() {
                        player.draw(1);
                    },
                },
                llbz_duotianshi: {
                    audio: 'ext:拉拉:3',
                    group: ['llbz_duotianshi_draw', 'llbz_duotianshi_damage'],
                    trigger: { player: 'phaseZhunbeiBegin' },
                    forced: true,
                    notemp: true,
                    filter(event, player) {
                        return player.countCards('h') > 0;
                    },
                    content() {
                        'step 0';
                        player.chooseCard('将至多3张手牌置于武将牌上作为<天使>', [1, 3], true);
                        ('step 1');
                        if (result.cards?.length) {
                            player.addToExpansion(result.cards, player, 'give').gaintag.add('llbz_duotianshi');
                            ('step 2');
                            if (event.count > 0 && player.hasSkill('llbz_duotianshi')) {
                                player.chooseBool(get.prompt2('llbz_duotianshi')).set('frequentSkill', 'llbz_duotianshi');
                            } else event.finish();
                        }
                    },
                    intro: {
                        content: 'expansion',
                        markcount: 'expansion',
                    },
                    onremove(player, skill) {
                        var cards = player.getExpansions('llbz_duotianshi');
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                    mod: {
                        maxHandcard(player, num) {
                            return num + player.getExpansions('llbz_duotianshi').length;
                        },
                    },
                    subSkill: {
                        draw: {
                            trigger: {
                                global: ['loseAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'lose') {
                                    for (var i in event.gaintag_map) {
                                        if (event.gaintag_map[i].includes('llbz_duotianshi')) return true;
                                    }
                                    return false;
                                }
                                return player.hasHistory('lose', function (evt) {
                                    if (event != evt.parent) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('llbz_duotianshi')) return true;
                                    }
                                    return false;
                                });
                            },
                            content() {
                                player.draw();
                            },
                        },
                        damage: {
                            trigger: { player: 'damageBefore' },
                            filter(event, player) {
                                return player.getExpansions('llbz_duotianshi').length >= 2;
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton(player.getExpansions('llbz_duotianshi'), 2, true);
                                ('step 1');
                                if (result.bool) {
                                    player.loseToDiscardpile(result.links);
                                }
                                ('step 2');
                                trigger.cancel();
                            },
                        },
                    },
                },
                llbz_jianglin: {
                    mark: true,
                    zhuanhuanji: true,
                    marktext: '☯',
                    intro: {
                        content(storage, player, skill) {
                            if (player.storage.llbz_jianglin == true) return '阴:你移去一张<天使>,交给一名角色一张牌,对其造成1点无来源的伤害.';
                            else return '阳:你移去一张<天使>,令一名角色交给你一张牌,其回复一点体力.';
                        },
                    },
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:拉拉:3',
                    filter(event, player) {
                        return player.getExpansions('llbz_duotianshi').length;
                    },
                    content() {
                        'step 0';
                        if (player.storage.llbz_jianglin == true) {
                            player.chooseCardButton(player.getExpansions('llbz_duotianshi'), true);
                        } else {
                            player.chooseCardButton(player.getExpansions('llbz_duotianshi'), true);
                        }
                        ('step 1');
                        if (result.bool) {
                            player.loseToDiscardpile(result.links);
                            player.chooseTarget('选择一名角色', 1, true);
                        }
                        ('step 2');
                        if (result.targets?.length) {
                            var target = result.targets[0];
                            event.target = target;
                            if (player.storage.llbz_jianglin == true) {
                                player.chooseCard('将一张牌交给' + get.translation(target), 1, 'hes', true);
                                event.goto(3);
                            } else {
                                target.chooseCard('将一张牌交给' + get.translation(player), 1, 'hes', true);
                                event.goto(4);
                            }
                        }
                        ('step 3');
                        if (result.bool) {
                            player.give(result.cards, event.target);
                            target.damage(1, 'nosource');
                            event.goto(5);
                        }
                        ('step 4');
                        if (result.bool) {
                            target.give(result.cards, player);
                            target.recover();
                            event.goto(5);
                        }
                        ('step 5');
                        player.changeZhuanhuanji('llbz_jianglin');
                    },
                },
                llbz_duotian: {
                    audio: 'ext:拉拉:2',
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        return player.getExpansions('llbz_duotianshi').length;
                    },
                    chooseButton: {
                        dialog(event, player) {
                            return ui.create.dialog('堕天', player.getExpansions('llbz_duotianshi'), 'hidden');
                        },
                        backup(links, player) {
                            lib.translate['llbz_duotian_backup'] = '堕天';
                            return {
                                audio: 'ext:拉拉:2',
                                filterTarget: true,
                                filterCard() {
                                    return false;
                                },
                                selectCard: -1,
                                card: links[0],
                                delay: false,
                                content: lib.skill.llbz_duotian.contentx,
                                ai: {
                                    order: 10,
                                    result: {
                                        target(player, target) {
                                            if (target != player) return 0;
                                            if (player.getExpansions('llbz_duotianshi').length <= 1 || (player.needsToDiscard() && !player.getEquip('zllbz_huge') && !player.hasSkill('new_paoxiao'))) return 0;
                                            return 1;
                                        },
                                    },
                                },
                            };
                        },
                        prompt() {
                            return '请选择【堕天】的目标';
                        },
                    },
                    contentx() {
                        'step 0';
                        var card = lib.skill.llbz_duotian_backup.card;
                        player.loseToDiscardpile(card);
                        ('step 1');
                        var num = player.getExpansions('llbz_duotianshi').length;
                        if (num > 0) target.draw(Math.min(4, num));
                        ('step 2');
                        if (target.countCards('h') > player.countCards('h')) {
                            target.damage();
                        }
                    },
                    ai: {
                        order: 1,
                        combo: 'llbz_duotianshi',
                        result: {
                            player: 1,
                        },
                    },
                },
                llbz_yingzi: {
                    audio: 'ext:拉拉:2',
                    trigger: { player: 'phaseDrawBegin2' },
                    forced: true,
                    getNum(player) {
                        return (player.countCards('h') >= player.hp) + (player.hp == player.maxHp) + (player.countCards('e') >= 1);
                    },
                    filter(event, player) {
                        return !event.numFixed && lib.skill.llbz_yingzi.getNum(player) > 0;
                    },
                    content() {
                        var num = lib.skill.llbz_yingzi.getNum(player);
                        trigger.num += num;
                    },
                    ai: {
                        threaten: 2,
                    },
                },
                llbz_reqing: {
                    audio: 'ext:拉拉:2',
                    trigger: { player: 'phaseUseBegin' },
                    forced: true,
                    content() {
                        'step 0';
                        var list = [];
                        list.push('选项一');
                        list.push('选项二');
                        player.chooseControl(list).set('choiceList', ['本回合你的基本牌无距离无次数限制,每造成1点伤害,手牌上限减1.', '你只能使用x张牌(x为你的体力值),回合结束时,摸两张牌.']).set('prompt', get.prompt('llbz_reqing', target));
                        ('step 1');
                        if (result.control == '选项一') {
                            player.addTempSkill('llbz_reqing_attack');
                        } else {
                            player.addTempSkill('llbz_reqing_defend');
                            player.addTempSkill('llbz_reqing_biyue');
                            player.markSkillCharacter('llbz_reqing', player, '激情', '锁定技,出牌阶段,你至多可使用X张牌,(X为你的体力值).');
                        }
                    },
                },
                llbz_reqing_attack: {
                    forced: true,
                    mod: {
                        cardUsable(card, player) {
                            if (get.type(card) == 'basic') return Infinity;
                        },
                        targetInRange(card, player) {
                            if (get.type(card) == 'basic') return true;
                        },
                        maxHandcardBase(player, num) {
                            var damage = player.getStat().damage;
                            if (typeof damage == 'number') return num - damage;
                            return num;
                        },
                    },
                },
                llbz_reqing_defend: {
                    mod: {
                        cardEnabled(card, player) {
                            if (player.storage.llbz_reqing_defend2 || player.countMark('llbz_reqing_defend') >= player.hp) return false;
                        },
                        cardUsable(card, player) {
                            if (player.storage.llbz_reqing_defend2 || player.countMark('llbz_reqing_defend') >= player.hp) return false;
                        },
                        cardRespondable(card, player) {
                            if (player.storage.llbz_reqing_defend2 || player.countMark('llbz_reqing_defend') >= player.hp) return false;
                        },
                        cardSavable(card, player) {
                            if (player.storage.llbz_reqing_defend2 || player.countMark('llbz_reqing_defend') >= player.hp) return false;
                        },
                    },
                    trigger: {
                        player: 'useCard1',
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    init(player, skill) {
                        player.storage[skill] = 0;
                        var evt = _status.event.getParent('phaseUse');
                        if (evt && evt.player == player) {
                            player.getHistory('useCard', function (evtx) {
                                if (evtx.getParent('phaseUse') == evt) {
                                    player.storage[skill]++;
                                }
                            });
                        }
                    },
                    onremove(player) {
                        player.unmarkSkill('llbz_reqing');
                        delete player.storage.llbz_reqing_defend;
                        delete player.storage.llbz_reqing_defend2;
                    },
                    content() {
                        player.addMark('llbz_reqing_defend', 1, false);
                    },
                    ai: { presha: true, pretao: true, nokeep: true },
                },
                llbz_reqing_biyue: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    preHidden: true,
                    content() {
                        player.draw(2);
                    },
                },
                llbz_mashu: {
                    mod: {
                        globalTo(from, to, distance) {
                            return distance + 1;
                        },
                        globalFrom(from, to, distance) {
                            return distance - 1;
                        },
                    },
                    trigger: { player: 'damageEnd' },
                    forced: true,
                    audio: 'ext:拉拉:2',
                    check(event, player) {
                        return player.getHistory('damage').indexOf(event) == 0;
                    },
                    content() {
                        if (player.getHistory('damage').indexOf(trigger) > 0) {
                            player.draw();
                        } else {
                            player.recover();
                        }
                    },
                    subSkill: {
                        damaged: {},
                    },
                },
                llbz_tanchi: {
                    audio: 'ext:拉拉:3',
                    trigger: { global: 'gainAfter' },
                    usable: 3,
                    forced: true,
                    filter(event, player) {
                        var evt = event.getParent('phaseDraw');
                        if (_status.currentPhase == player) return false;
                        if (evt && evt.name == 'phaseDraw') return false;
                        return game.hasPlayer((current) => {
                            if (!event.getg(current).length) return false;
                            if (evt && evt.player == current) return false;
                            return current != player;
                        });
                    },
                    logTarget: 'player',
                    content() {
                        'step 0';
                        player.draw();
                        ('step 1');
                        event.card = result.cards[0];
                        if (player.hp < player.maxHp && player.canUse({ name: 'tao', cards: cards }, player, false)) {
                            var next = player.useCard({ name: 'tao' }, player, [event.card], true);
                        }
                    },
                },
                llbz_zhengshu: {
                    audio: 'ext:拉拉:1',
                    trigger: { global: 'washCard' },
                    derivation: ['llbz_zhengshu_draw', 'llbz_zhengshu_give'],
                    forced: true,
                    filter(event, player) {
                        return game.shuffleNumber <= 2;
                    },
                    content() {
                        if (game.shuffleNumber == 1) player.addTempSkill('llbz_zhengshu_shuffle1');
                        else player.addTempSkill('llbz_zhengshu_shuffle2');
                    },
                    subSkill: {
                        shuffle1: {
                            charlotte: true,
                            forced: true,
                            trigger: { global: 'phaseEnd' },
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                ('step 1');
                                player.addSkills('llbz_zhengshu_draw');
                                player.addSkills('llbz_zhengshu_give');
                            },
                        },
                        shuffle2: {
                            charlotte: true,
                            forced: true,
                            trigger: { global: 'phaseEnd' },
                            content() {
                                'step 0';
                                player.recover();
                                ('step 1');
                                player.addSkill('llbz_zhengshu_effect');
                                player.addMark('llbz_zhengshu_effect', 10, false);
                            },
                        },
                        effect: {
                            charlotte: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.countMark('llbz_zhengshu_effect');
                                },
                            },
                            marktext: '书',
                            intro: {
                                content: '手牌上限+#',
                            },
                        },
                    },
                },
                llbz_zhengshu_draw: {
                    trigger: {
                        player: 'gainAfter',
                    },
                    audio: 'ext:拉拉:2',
                    forced: true,
                    filter(event, player) {
                        if (_status.currentPhase != player || event.getg(player).length == 0) return false;
                        return event.getParent(2).name != 'llbz_zhengshu_draw';
                    },
                    content() {
                        player.draw('nodelay');
                    },
                },
                llbz_zhengshu_give: {
                    audio: 'ext:拉拉:2',
                    trigger: { player: 'useCardAfter' },
                    filter(event, player) {
                        if (_status.currentPhase != player) return false;
                        if (
                            player.getHistory('custom', function (evt) {
                                return evt.give_name == event.card.name;
                            }).length
                        )
                            return false;
                        return event.cards.filterInD().length;
                    },
                    async cost(event, trigger, player) {
                        event.result = await player
                            .chooseTarget(get.prompt('llbz_zhengshu_give'), '将' + get.translation(trigger.cards) + '交给一名其他角色', function (card, player, target) {
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
                            .set('wuxie', trigger.cards[0].name == 'wuxie')
                            .forResult();
                    },
                    content() {
                        event.targets[0].gain(trigger.cards.filterInD(), 'gain2');
                        player.getHistory('custom').push({ give_name: trigger.card.name });
                    },
                },
                llbz_zhaoshui: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'phaseZhunbeiBegin' },
                    forced: true,
                    filter(event, player) {
                        return player.phaseNumber < 9;
                    },
                    check(event, player) {
                        return player.phaseNumber < 3;
                    },
                    content() {
                        if (player.phaseNumber < 5) {
                            player.gainMaxHp();
                            player.recover();
                        } else player.loseMaxHp();
                    },
                },
                llbz_jueyi: {
                    audio: 'ext:拉拉:1',
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        return game.hasPlayer(function (current) {
                            return current.getSkills(null, false, false).filter(function (i) {
                                var info = get.info(i);
                                return info && info.zhuanhuanji;
                            }).length;
                        });
                    },
                    filterTarget(card, player, target) {
                        return target.getSkills(null, false, false).filter(function (i) {
                            var info = get.info(i);
                            return info && info.zhuanhuanji;
                        }).length;
                    },
                    content() {
                        'step 0';
                        var list = target.getSkills(null, false, false).filter(function (i) {
                            var info = get.info(i);
                            return info && info.zhuanhuanji;
                        });
                        if (list.length == 1) {
                            event._result = { control: list[0] };
                        } else
                            player
                                .chooseControl(list)
                                .set('prompt', '选择变更' + get.translation(target) + '一个技能的状态')
                                .set('choice', list.includes('llbz_llbz_huiyi') ? 'llbz_llbz_huiyi' : 0)
                                .set('ai', () => _status.event.choice);
                        ('step 1');
                        var skill = result.control;
                        target.changeZhuanhuanji(skill);
                        target.popup(skill, 'wood');
                        game.log(target, '的', '#g【' + get.translation(skill) + '】', '发生了状态变更');
                    },
                    ai: {
                        order: 8,
                        result: {
                            target(player, target) {
                                if (!target.hasSkill('llbz_llbz_huiyi')) return 0;
                                return target.storage.llbz_llbz_huiyi ? -1 : 1;
                            },
                        },
                    },
                    group: 'llbz_jueyi_damage',
                    subSkill: {
                        damage: {
                            audio: 'llbz_jueyi',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.getSkills(null, false, false).filter(function (i) {
                                        var info = get.info(i);
                                        return info && info.zhuanhuanji;
                                    }).length;
                                });
                            },
                            async cost(event, trigger, player) {
                                event.result = await player
                                    .chooseTarget(lib.skill.llbz_jueyi.filterTarget, get.prompt('llbz_jueyi'), '变更一名角色的一个转换技的状态')
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.effect(target, 'llbz_jueyi', player, player);
                                    })
                                    .forResult();
                            },
                            content() {
                                var target = event.targets[0];
                                var next = game.createEvent('llbz_jueyi');
                                next.player = player;
                                next.target = target;
                                next.setContent(lib.skill.llbz_jueyi.content);
                            },
                        },
                    },
                },
                llbz_zhiyuan: {
                    audio: 'ext:拉拉:1',
                    group: 'llbz_zhiyuan_use',
                    trigger: {
                        global: 'phaseBefore',
                        player: 'enterGame',
                    },
                    forced: true,
                    filter(event, player) {
                        return event.name != 'phase' || game.phaseNumber == 0;
                    },
                    logTarget: () => game.filterPlayer().sortBySeat(),
                    content() {
                        'step 0';
                        game.countPlayer(function (current) {
                            current.addSkills('llbz_llbz_huiyi');
                        });
                        game.log(player, '令所有其他角色获得了技能', '#g【会议】');
                    },
                    derivation: 'llbz_llbz_huiyi',
                    subSkill: {
                        use: {
                            audio: 'ext:拉拉:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.chooseTarget('是否减1点体力上限,并令一名其他角色获得技能【决议】？', lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (player.hasUnknown() && !target.isZhu) return 0;
                                    if (player.getEnemies().includes(target)) return 0;
                                    return get.attitude(player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.loseMaxHp();
                                    var target = result.targets[0];
                                    player.line(target, 'fire');
                                    target.addSkills('llbz_jueyi');
                                }
                            },
                        },
                    },
                },
                llbz_llbz_huiyi: {
                    audio: 'ext:拉拉:1',
                    trigger: {
                        player: 'useCardToPlayered',
                        target: 'useCardToTargeted',
                    },
                    zhuanhuanji: true,
                    forced: true,
                    mark: true,
                    marktext: '☯',
                    intro: {
                        content(storage, player) {
                            return (storage ? '当你使用【杀】或锦囊牌指定唯一目标后' : '当你成为【杀】或锦囊牌的唯一目标后') + '目标角色须交给使用者一张牌.若此牌为装备牌,则使用者可使用此牌.';
                        },
                    },
                    filter(event, player, name) {
                        return (event.card.name == 'sha' || 'trick' == get.type(event.card)) && event.targets.length == 1 && event.player.isIn() && event.target.countCards('he') > 0 && event.player != event.target && (name == 'useCardToPlayered') == Boolean(player.storage.llbz_llbz_huiyi);
                    },
                    logTarget(event, player) {
                        return player.storage.llbz_llbz_huiyi ? event.target : event.player;
                    },
                    content() {
                        'step 0';
                        player.changeZhuanhuanji('llbz_llbz_huiyi');
                        trigger.target.chooseCard('he', true, '会议:交给' + get.translation(trigger.player) + '一张牌', '若选择装备牌,则其可以使用此牌');
                        ('step 1');
                        if (result.cards?.length) {
                            var card = result.cards[0];
                            event.card = card;
                            trigger.target.give(card, trigger.player);
                        } else event.finish();
                        ('step 2');
                        var target = trigger.player;
                        if (target.getCards('h').includes(card) && get.type(card, target) == 'equip' && target.hasUseTarget(card)) target.chooseUseTarget(card, 'nopopup');
                    },
                },
                llbz_guipai: {
                    audio: 'ext:拉拉:2',
                    enable: 'phaseUse',
                    usable: 1,
                    selectTarget: 1,
                    filterTarget(player, target) {
                        return target != player;
                    },
                    filter(event, player) {
                        return player.countCards('h') > 2;
                    },
                    content() {
                        'step 0';
                        target.gainPlayerCard(1, 'h', player, true);
                        ('step 1');
                        player.showHandcards('<鬼牌>展示手牌');
                        ('step 2');
                        var cards = player.getCards('h');
                        var suit = [];
                        for (var i of cards) {
                            if (!suit.includes(i.suit)) {
                                suit.add(i.suit);
                            } else event.thissuitbool = true;
                        }
                        ('step 3');
                        if (!event.thissuitbool) {
                            event.finish();
                        }
                        ('step 4');
                        if (!target.hasSkill('fengyin')) {
                            target.addTempSkill('fengyin');
                        }
                        ('step 5');
                        player.storage[event.name] = target;
                        player.addTempSkill(event.name + 2);
                    },
                    ai: {
                        order(name, player) {
                            var cards = player.getCards('h');
                            var suit = [];
                            if (player.countCards('h', 'sha') == 0) {
                                return 1;
                            }
                            for (var i = 0; i < cards.length; i++) {
                                if (cards[i].name != 'sha') {
                                    return 9;
                                }
                            }
                            return get.order({ name: 'sha' }) - 1;
                        },
                        result: {
                            player(player) {
                                if (player.countCards('h', 'sha') > 0) return 0;
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
                llbz_guipai2: {
                    charlotte: true,
                    mod: {
                        targetInRange(card, player, target) {
                            if (target == player.storage.llbz_guipai) return true;
                        },
                        cardUsableTarget(card, player, target) {
                            if (target == player.storage.llbz_guipai) return true;
                        },
                    },
                },
                llbz_qianggong: {
                    audio: 'ext:拉拉:2',
                    group: 'llbz_qianggong_liegong',
                    trigger: { player: 'useCardToPlayered' },
                    check(event, player) {
                        return get.attitude(player, event.target) <= 0;
                    },
                    filter(event, player) {
                        return event.card.name == 'sha';
                    },
                    logTarget: 'target',
                    preHidden: true,
                    content() {
                        'step 0';
                        player.judge();
                        ('step 1');
                        var evt = trigger.parent;
                        switch (result.suit) {
                            case 'heart':
                                evt.baseDamage++;
                                break;
                            case 'diamond':
                                evt.baseDamage += 2;
                                break;
                            case 'club':
                                break;
                            case 'spade':
                                break;
                        }
                    },
                    subSkill: {
                        liegong: {
                            audio: 'ext:拉拉:2',
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && get.color(event.card, false) == 'red';
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                            },
                        },
                    },
                },
                llbz_kuanshu: {
                    audio: 'ext:拉拉:1',
                    trigger: { source: 'damageBegin2' },
                    filter(event, player) {
                        return player != event.player && !event.player.hasSkill('llbz_kuanshu_marked');
                    },
                    content() {
                        'step 0';
                        event.x = trigger.num;
                        trigger.num -= event.x;
                        ('step 1');
                        var target = trigger.player;
                        var list = [];
                        list.push('选项一');
                        list.push('选项二');
                        player
                            .chooseControl(list)
                            .set('choiceList', ['摸' + 2 * event.x + '张牌', '获得' + get.translation(target) + event.x + '张牌'])
                            .set('prompt', get.prompt('llbz_kuanshu', target));
                        ('step 2');
                        event.control = result.control;
                        var target = trigger.target;
                        if (event.control == '选项一') {
                            player.draw(2 * event.x).gaintag = ['llbz_kuanshu'];
                        } else player.gainPlayerCard(event.x, 'h', trigger.player, true).gaintag = ['llbz_kuanshu'];
                        ('step 3');
                        var target = trigger.player;
                        player.addTempSkill('llbz_kuanshu_mark');
                        target.addTempSkill('llbz_kuanshu_marked');
                    },
                    ai: {
                        threaten: 4.5,
                    },
                    subSkill: {
                        mark: {
                            charlotte: true,
                            onremove(player) {
                                player.removeGaintag('llbz_kuanshu');
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('llbz_kuanshu')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('llbz_kuanshu')) {
                                        return false;
                                    }
                                },
                            },
                        },
                        marked: {
                            charlotte: true,
                            mark: true,
                            intro: {
                                markcount: () => null,
                                content: 'expansion',
                                content() {
                                    return '已被宽恕';
                                },
                            },
                        },
                    },
                },
                llbz_chunjie: {
                    audio: 'ext:拉拉:2',
                    forced: true,
                    mod: {
                        suit(card) {
                            if (['h', 's'].includes(get.position(card)) && (get.type(card) == 'basic' || get.type(card) == 'trick')) return 'none';
                        },
                    },
                },
                llbz_fuhei: {
                    audio: 'ext:拉拉:3',
                    trigger: { player: ['useCard', 'respond'] },
                    filter(event, card, player) {
                        return get.color(event.card) == 'none';
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget('腹黑:选择一名角色', true, function (card, player, target) {
                                return !target.hasSkill('llbz_fuhei2');
                            })
                            .set('ai', (target) => {
                                var player = _status.event.player;
                                return get.damageEffect(target, player, player);
                            });
                        ('step 1');
                        if (result.targets?.length) {
                            var target = result.targets[0];
                            event.target = target;
                            target.addTempSkill('llbz_fuhei2');
                            if (!target.hasSkill('fengyin')) {
                                target.addTempSkill('fengyin');
                            }
                        }
                        ('step 1');
                        var list = [];
                        list.push('造成伤害');
                        list.push('回复体力');
                        player
                            .chooseControl(list)
                            .set('choiceList', ['对' + get.translation(target) + '造成1点伤害', '令' + get.translation(target) + '回复1点体力'])
                            .set('prompt', get.prompt('llbz_fuhei', target));
                        ('step 2');
                        if (result.control == '造成伤害') {
                            target.damage();
                        } else {
                            target.recover();
                        }
                    },
                },
                llbz_fuhei2: { charlotte: true },
                llbz_jinghua: {
                    audio: 'ext:拉拉:2',
                    trigger: {
                        player: 'damageEnd',
                        source: 'damageSource',
                    },
                    filter(event, player) {
                        return event.parent.name != 'llbz_jinghua';
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var target = _status.currentPhase;
                        event.target = target;
                        player.draw();
                        ('step 1');
                        var list = [];
                        list.push('确定');
                        list.push('取消');
                        player
                            .chooseControl(list)
                            .set('choiceList', ['令' + get.translation(target) + '的非锁定技失效,若已失效则造成1点伤害', '取消'])
                            .set('prompt', get.prompt('llbz_jinghua', target))
                            .set('ai', () => _status.event.choice)
                            .set(
                                'choice',
                                (() => {
                                    if (_status.currentPhase == player) {
                                        return '取消';
                                    } else {
                                        return '确定';
                                    }
                                })()
                            );
                        ('step 2');
                        if (result.control == '确定') {
                            if (!target.hasSkill('fengyin')) {
                                target.addTempSkill('fengyin');
                                event.finish();
                            } else {
                                target.damage();
                            }
                        } else event.finish();
                    },
                },
                llbz_paolu: {
                    mod: {
                        globalTo(from, to, distance) {
                            if (to.getHistory('useSkill', (evt) => evt.skill == 'llbz_fuhei').length) return distance + 1;
                        },
                    },
                },
                llbz_zhiyan: {
                    audio: 'ext:拉拉:1',
                    group: 'llbz_zhiyan_damage',
                    trigger: {
                        player: 'useCard',
                    },
                    usable: 1,
                    forced: true,
                    filter(event, player) {
                        return player.isPhaseUsing() && (get.type(event.card) == 'basic' || get.type(event.card) == 'trick');
                    },
                    preHidden: true,
                    content() {
                        trigger.nowuxie = true;
                        trigger.directHit.addArray(game.players);
                    },
                    subSkill: {
                        damage: {
                            audio: 'ext:拉拉:2',
                            trigger: { source: 'damageBefore' },
                            filter(event, player) {
                                if (!player.hasSkill('llbz_doumao')) return true;
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num);
                            },
                        },
                    },
                },
                llbz_fanxing: {
                    audio: 'ext:拉拉:2',
                    trigger: { player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'] },
                    forced: true,
                    filter(event, player, name) {
                        if (name == 'phaseJieshuBegin') {
                            return player.hasSkill('llbz_doumao');
                        }
                        return true;
                    },
                    content() {
                        'step 0';
                        var num = game.countPlayer() < 4 ? 3 : 5;
                        if (player.hasSkill('llbz_doumao')) {
                            num = 5;
                        }
                        var cards = get.cards(num);
                        game.cardsGotoOrdering(cards);
                        var next = player.chooseToMove();
                        next.set('list', [['牌堆顶', cards], ['牌堆底']]);
                        next.set('prompt', '繁星:点击将牌移动到牌堆顶或牌堆底');
                        next.processAI = function (list) {
                            var cards = list[0][1],
                                player = _status.event.player;
                            const target = trigger.name == 'phaseZhunbei' ? player : player.next;
                            const att = get.attitude(player, target);
                            const top = [], bottom = cards;
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
                            return [top, bottom];
                        };
                        ('step 1');
                        var top = result.moved[0];
                        var bottom = result.moved[1];
                        top.reverse();
                        for (var i = 0; i < top.length; i++) {
                            ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                        }
                        for (var i = 0; i < bottom.length; i++) {
                            ui.cardPile.appendChild(bottom[i]);
                        }
                        player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                        game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                        game.updateRoundNumber();
                    },
                },
                llbz_maopu: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'damageEnd' },
                    filter(event, player) {
                        if (!player.hasSkill('llbz_doumao')) return true;
                    },
                    logTarget: 'source',
                    content() {
                        'step 0';
                        if (player.countCards('h') < player.maxHp) {
                            player.draw(player.maxHp - player.countCards('h'));
                        }
                        ('step 1');
                        if (trigger.source && trigger.source.hasSkill('llbz_doumao')) {
                            trigger.source.addTempSkill('llbz_maopu_use');
                        }
                    },
                    subSkill: {
                        use: {
                            forced: true,
                            mod: {
                                cardEnabled(card, player) {
                                    return false;
                                },
                            },
                        },
                    },
                },
                llbz_doumao: {
                    audio: 'ext:拉拉:1',
                    group: 'llbz_doumao_discard',
                    trigger: { player: 'phaseZhunbeiBegin' },
                    filter(event, player) {
                        return player.countCards('he');
                    },
                    async cost(event, trigger, player) {
                        event.result = await player
                            .chooseCardTarget({
                                prompt: get.prompt('llbz_doumao'),
                                prompt2: '弃置一张牌,失去【逗猫】并令一名其他角色获得【逗猫】,其摸一张牌',
                                //filterTarget:function(card,player,target){
                                //return !target.hasSkill('llbz_doumao');
                                //},
                                filterTarget: lib.filter.notMe,
                                filterCard: lib.filter.cardDiscardable,
                                position: 'he',
                            })
                            .forResult();
                    },
                    content() {
                        var target = event.targets[0];
                        player.discard(event.cards);
                        target.addSkills('llbz_doumao');
                        target.draw();
                        game.log(target, '获得了<逗猫>');
                        player.removeSkills('llbz_doumao');
                        game.log(player, '失去了<逗猫>');
                    },
                    mark: true,
                    marktext: '猫',
                    intro: { content: '嘿!有只猫在你身边欸!' },
                    ai: {
                        result: {
                            target(player, target) {
                                var hs = player.getCards('h');
                                if (hs.length < 1) return 0;
                                if (target.countCards('h') > target.hp) {
                                    return 2;
                                }
                                return -0.5;
                            },
                        },
                        order: 9,
                    },
                    subSkill: {
                        discard: {
                            audio: 'ext:拉拉:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                player.chooseToDiscard(1, '弃置一张牌', true);
                            },
                        },
                    },
                },
                llbz_rixiang: {
                    forced: true,
                    mod: {
                        maxHandcardBase(player) {
                            return player.maxHp;
                        },
                    },
                    group: ['llbz_rixiang_recover', 'llbz_rixiang_damage'],
                    subSkill: {
                        recover: {
                            audio: 'ext:拉拉:1',
                            forced: true,
                            trigger: { player: 'recoverBefore' },
                            filter(event, player) {
                                return player.hp > 1;
                            },
                            content() {
                                trigger.cancel();
                                player.draw(2);
                            },
                        },
                        damage: {
                            audio: 'ext:拉拉:1',
                            forced: true,
                            trigger: { player: 'damageBefore' },
                            filter(event, player) {
                                return player.countCards('h') > 1 && player.hp < 3;
                            },
                            content() {
                                player.chooseToDiscard(2, '弃置2张手牌', true);
                                trigger.cancel();
                            },
                        },
                    },
                },
                llbz_weixiao: {
                    audio: 'ext:拉拉:1',
                    group: ['llbz_weixiao_draw', 'llbz_weixiao_skip'],
                    trigger: { player: 'phaseZhunbeiBegin' },
                    forced: true,
                    filter(event, player) {
                        if ((player.maxHp = 5)) return false;
                    },
                    content() {
                        if (player.maxHp > 5) {
                            player.loseMaxHp(player.maxHp - 5);
                        } else player.gainMaxHp(5 - player.maxHp);
                    },
                    subSkill: {
                        draw: {
                            forced: true,
                            trigger: { player: ['phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBefore', 'phaseUseBegin', 'phaseDiscardEnd'] },
                            content() {
                                player.draw().gaintag = ['llbz_weixiao'];
                                player.addTempSkill('llbz_weixiao_mark');
                            },
                        },
                        skip: {
                            forced: true,
                            trigger: { player: 'phaseDrawBefore' },
                            lastDo: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        mark: {
                            charlotte: true,
                            onremove(player) {
                                player.removeGaintag('llbz_weixiao');
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('llbz_weixiao')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('llbz_weixiao')) {
                                        return false;
                                    }
                                },
                            },
                        },
                    },
                },
                llbz_xihun: {
                    audio: 'ext:拉拉:1',
                    group: 'llbz_xihun_damage',
                    trigger: { source: 'damageSource' },
                    filter(event, player) {
                        return player.isDamaged();
                    },
                    content() {
                        player.recover(trigger.num);
                    },
                    subSkill: {
                        damage: {
                            audio: 'ext:拉拉:2',
                            trigger: { player: 'damageEnd' },
                            filter(event, player) {
                                return event.source && event.source.countGainableCards(player, event.source != player ? 'he' : 'e') && event.num > 0;
                            },
                            getIndex(event, player, triggername) {
                                return Math.min(event.num, 9) || 1;
                            },
                            cost() {
                                player.gainPlayerCard(get.prompt('llbz_xihun_damage', trigger.source), trigger.source, get.buttonValue, trigger.source != player ? 'he' : 'e'); //QQQ
                            },
                            content() { },
                        },
                    },
                },
                llbz_maimeng: {
                    audio: 'ext:拉拉:2',
                    enable: 'phaseUse',
                    filter(event, player) {
                        return game.hasPlayer(function (current) {
                            return current.hp > 0 && current.hp <= player.countCards('he');
                        });
                    },
                    filterCard() {
                        if (ui.selected.targets.length) return false;
                        return true;
                    },
                    position: 'he',
                    selectCard: [1, Infinity],
                    complexSelect: true,
                    complexCard: true,
                    filterTarget(card, player, target) {
                        return target != player && !target.hasSkill('llbz_maimeng2') && target.hp > 0 && ui.selected.cards.length == target.hp;
                    },
                    content() {
                        target.damage('nocard');
                        target.addTempSkill('llbz_maimeng2');
                    },
                },
                llbz_maimeng2: { charlotte: true },
                llbz_mifan: {
                    audio: 'ext:拉拉:3',
                    group: 'llbz_mifan_draw',
                    mod: {
                        maxHandcardBase(player) {
                            return player.maxHp;
                        },
                    },
                    enable: 'chooseToUse',
                    usable: 1,
                    prompt: '将红牌当做桃,黑牌当做酒使用或打出',
                    viewAs(cards, player) {
                        var name = false;
                        var nature = null;
                        switch (get.color(cards[0], player)) {
                            case 'black':
                                name = 'jiu';
                                break;
                            case 'red':
                                name = 'tao';
                                break;
                        }
                        if (name) return { name: name, nature: nature };
                        return null;
                    },
                    selectCard: 1,
                    position: 'hes',
                    filterCard(card, player, event) {
                        event = event || _status.event;
                        var filter = event._backup.filterCard;
                        var name = get.color(card, player);
                        if (name == 'black' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
                        if (name == 'red' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                        return false;
                    },
                    filter(event, player) {
                        var filter = event.filterCard;
                        if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { color: 'red' })) return true;
                        if (filter({ name: 'jiu' }, player, event) && player.countCards('hes', { color: 'black' })) return true;
                        return false;
                    },
                    hiddenCard(player, name) {
                        if (name == 'tao') return player.countCards('hes', { color: 'red' }) > 0;
                        if (name == 'jiu') return player.countCards('hes', { color: 'black' }) > 0;
                    },
                    subSkill: {
                        draw: {
                            audio: 'ext:拉拉:2',
                            trigger: { player: 'useCardAfter' },
                            forced: true,
                            filter(event, player) {
                                var evt = event;
                                return evt.skill == 'llbz_mifan';
                            },
                            content() {
                                var target = _status.currentPhase;
                                if (player.hp <= target.hp) {
                                    player.draw();
                                }
                            },
                        },
                    },
                },
                llbz_lianren: {
                    audio: 'ext:拉拉:2',
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        return game.hasPlayer(function (current) {
                            return current.hp <= player.hp && player.canCompare(current);
                        });
                    },
                    filterTarget(card, player, current) {
                        return current.hp <= player.hp && player.canCompare(current);
                    },
                    content() {
                        'step 0';
                        player.chooseToCompare(target);
                        ('step 1');
                        if (result.bool) {
                            target.skip('phaseDraw');
                            target.addTempSkill('llbz_lianren2', { player: 'phaseDrawSkipped' });
                        } else target.useCard({ name: 'sha' }, cards, player, false);
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                if (target.skipList.includes('phaseDraw') || target.hasSkill('pingkou')) return 0;
                                var hs = player.getCards('h').sort(function (a, b) {
                                    return b.number - a.number;
                                });
                                var ts = target.getCards('h').sort(function (a, b) {
                                    return b.number - a.number;
                                });
                                if (!hs.length || !ts.length) return 0;
                                if (hs[0].number > ts[0].number - 2 && hs[0].number > 5) return -1;
                                return 0;
                            },
                        },
                    },
                },
                llbz_lianren2: {
                    mark: true,
                    intro: { content: '跳过下回合的摸牌阶段' },
                },
                llbz_qiuyuan: {
                    audio: 'ext:拉拉:2',
                    group: 'llbz_qiuyuan_extra',
                    trigger: { target: 'useCardToTarget' },
                    filter(event, player) {
                        return (
                            event.card.name == 'sha' &&
                            game.hasPlayer(function (current) {
                                return current != player && !event.targets.includes(current) && lib.filter.targetEnabled(event.card, event.player, current);
                            })
                        );
                    },
                    async cost(event, trigger, player) {
                        event.result = await player
                            .chooseTarget(get.prompt2('llbz_qiuyuan'), function (card, player, target) {
                                var evt = _status.event.getTrigger();
                                return target != player && !evt.targets.includes(target) && lib.filter.targetEnabled(evt.card, evt.player, target);
                            })
                            .set('ai', function (target) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                return get.effect(target, trigger.card, trigger.player, player) + 0.1;
                            })
                            .forResult();
                    },
                    content() {
                        'step 0';
                        var target = event.targets[0];
                        event.target = target;
                        target
                            .chooseCard(
                                function (card, player) {
                                    var name = card.name;
                                    return name != 'sha' && get.type(name) == 'basic';
                                },
                                'h',
                                '交给' + get.translation(player) + '一张不为【杀】的基本牌,或成为此杀的额外目标'
                            )
                            .set('ai', function (card) {
                                return get.attitude(target, _status.event.sourcex) >= 0 ? 1 : -1;
                            })
                            .set('sourcex', player);
                        ('step 1');
                        if (result.bool) {
                            target.give(result.cards, player);
                        } else {
                            trigger.parent.targets.push(event.target);
                            trigger.parent.triggeredTargets2.push(event.target);
                            game.log(event.target, '成为了', trigger.card, '的额外目标');
                        }
                    },
                    subSkill: {
                        extra: {
                            audio: 'ext:拉拉:2',
                            trigger: { player: 'dyingBegin' },
                            async cost(event, trigger, player) {
                                event.result = await player
                                    .chooseTarget('求援:选择一名目标交给你【桃】或【酒】', function (card, player, target) {
                                        return target != player;
                                    })
                                    .forResult();
                            },
                            content() {
                                'step 0';
                                var target = event.targets[0];
                                event.target = target;
                                target.chooseCard(
                                    function (card, player) {
                                        var name = card.name;
                                        return (name == 'tao' || name == 'jiu') && get.type(name) == 'basic';
                                    },
                                    'h',
                                    '交给' + get.translation(player) + '一张【桃】或【酒】,或流失1点体力'
                                );
                                ('step 1');
                                if (result.bool) {
                                    target.give(result.cards, player);
                                } else {
                                    target.loseHp();
                                }
                            },
                        },
                    },
                },
                llbz_puqu: {
                    audio: 'ext:拉拉:2',
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard(card) {
                        var num = 0;
                        for (var i = 0; i < ui.selected.cards.length; i++) {
                            num += ui.selected.cards[i].number;
                        }
                        return card.number + num <= 9;
                    },
                    complexCard: true,
                    selectCard() {
                        var num = 0;
                        for (var i = 0; i < ui.selected.cards.length; i++) {
                            num += ui.selected.cards[i].number;
                        }
                        if (num == 9) return ui.selected.cards.length;
                        return ui.selected.cards.length + 2;
                    },
                    discard: false,
                    lose: false,
                    delay: false,
                    filterTarget(card, player, target) {
                        return player != target;
                    },
                    check(card) {
                        var num = 0;
                        for (var i = 0; i < ui.selected.cards.length; i++) {
                            num += ui.selected.cards[i].number;
                        }
                        if (num + card.number == 9) return 9 - get.value(card);
                        if (ui.selected.cards.length == 0) {
                            var cards = _status.event.player.getCards('h');
                            for (var i = 0; i < cards.length; i++) {
                                for (var j = i + 1; j < cards.length; j++) {
                                    if (cards[i].number + cards[j].number == 9) {
                                        if (cards[i] == card || cards[j] == card) return 8.5 - get.value(card);
                                    }
                                }
                            }
                        }
                        return 0;
                    },
                    content() {
                        'step 0';
                        player.give(cards, target, 'give');
                        player.chooseControl('摸两张牌', '回复1点体力', true);
                        ('step 1');
                        if (result.control == '摸两张牌') {
                            player.draw(2).gaintag = ['llbz_puqu'];
                            player.addTempSkill('llbz_puqu_mark', 'phaseEnd');
                        } else player.recover();
                    },
                    ai: {
                        order(skill, player) {
                            if (
                                game.hasPlayer(function (current) {
                                    return current.hp < current.maxHp && current != player && get.attitude(player, current) > 0;
                                })
                            ) {
                                return 10;
                            }
                            return 1;
                        },
                        result: {
                            player(player, target) {
                                var eff = get.attitude(player, target);
                                if (eff < 0) return -1;
                                if (eff > 0) {
                                    if (target.countCards('h') == 0) return 3;
                                    return 2;
                                }
                                if (player.needsToDiscard()) return 1;
                                return 0;
                            },
                        },
                        threaten: 1.3,
                    },
                    subSkill: {
                        mark: {
                            charlotte: true,
                            onremove(player) {
                                player.removeGaintag('llbz_puqu');
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('llbz_puqu')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('llbz_puqu')) {
                                        return false;
                                    }
                                },
                            },
                        },
                    },
                },
                llbz_cainv: {
                    audio: 'ext:拉拉:2',
                    mod: {
                        targetInRange(card, player, target) {
                            if (player == _status.currentPhase && get.type2(card) == 'trick') return true;
                        },
                    },
                    forced: true,
                    group: ['llbz_cainv_lose', 'llbz_cainv_draw'],
                    preHidden: ['llbz_cainv_lose', 'llbz_cainv_draw'],
                    subSkill: {
                        lose: {
                            audio: 'ext:拉拉:2',
                            trigger: { player: 'loseAfter' },
                            forced: true,
                            filter(event, player) {
                                return player == _status.currentPhase && event.type != 'respond' && event.type != 'use';
                            },
                            content() {
                                player.draw().gaintag = ['llbz_cainv'];
                                player.addTempSkill('llbz_cainv_mark', 'phaseEnd');
                            },
                        },
                        draw: {
                            audio: 'ext:拉拉:1',
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                return player == _status.currentPhase && get.type2(event.card) == 'trick';
                            },
                            content() {
                                player.draw().gaintag = ['llbz_cainv'];
                                player.addTempSkill('llbz_cainv_mark', 'phaseEnd');
                            },
                        },
                        mark: {
                            charlotte: true,
                            onremove(player) {
                                player.removeGaintag('llbz_cainv');
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('llbz_cainv')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('llbz_cainv')) {
                                        return false;
                                    }
                                },
                            },
                        },
                    },
                },
                llbz_zhijue: {
                    trigger: { player: 'damageEnd' },
                    forced: true,
                    audio: 'ext:拉拉:1',
                    check(event, player) {
                        return player.getHistory('damage').indexOf(event) == 0;
                    },
                    filter(event, player) {
                        var index = player.getHistory('damage').indexOf(event);
                        return index == 0 || index == 1;
                    },
                    content() {
                        if (player.getHistory('damage').indexOf(trigger) > 0) {
                            event.finish();
                        } else {
                            player.recover();
                            player.addTempSkill('llbz_zhijue_2', ['phaseAfter', 'phaseBefore']);
                        }
                    },
                    subSkill: {
                        2: {
                            trigger: { target: 'useCardToBefore' },
                            forced: true,
                            charlotte: true,
                            _priority: 15,
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                game.log(player, '发动了智绝,', trigger.card, '对', trigger.target, '失效');
                                trigger.cancel();
                                player.removeSkill('llbz_zhijue_2');
                            },
                            mark: true,
                            intro: {
                                markcount: () => null,
                                content: '下一个普通锦囊牌对你无效',
                            },
                        }, //QQQ
                    },
                },
                llbz_gewu: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'] },
                    filter(event, player) {
                        return player.name == 'llbz_xunlaihuili_ge' || player.name == 'llbz_xunlaihuili_wu' || player.name2 == 'llbz_xunlaihuili_ge' || player.name2 == 'llbz_xunlaihuili_wu';
                    },
                    content() {
                        'step 0';
                        if (player.name2 != undefined) {
                            if (player.name2 == 'llbz_xunlaihuili_ge' || player.name2 == 'llbz_xunlaihuili_wu') {
                                event._result = { control: player.name2 };
                            } else event._result = { control: player.name1 };
                        } else event._result = { control: player.name1 };
                        ('step 1');
                        if (result.control == 'llbz_xunlaihuili_ge') {
                            player.reinit(result.control, 'llbz_xunlaihuili_wu');
                            if (player.name == 'llbz_xunlaihuili_wu' && player.group != 'miu') player.changeGroup('miu');
                        } else {
                            player.reinit(result.control, 'llbz_xunlaihuili_ge');
                            if (player.name == 'llbz_xunlaihuili_ge' && player.group != 'miu') player.changeGroup('miu');
                        }
                        ('step 2');
                        player.addMark('llbz_gewu_used', 1, true);
                        player.addSkill('llbz_gewu_used');
                        ('step 3');
                        var num = player.countMark('llbz_gewu_used');
                        player.draw(2);
                        player.recover();
                        player.loseMaxHp();
                    },
                    subSkill: {
                        used: {
                            charlotte: true,
                            marktext: '转',
                            intro: {
                                content: '已使用#次歌舞',
                            },
                        },
                    },
                },
                llbz_yingwu: {
                    audio: 'ext:拉拉:2',
                    group: ['llbz_yingwu_trick', 'llbz_yingwu_add'],
                    trigger: { player: 'useCardAfter' },
                    filter(event, player) {
                        return event.card.name == 'sha' && player.countMark('llbz_yingwu') > 1;
                    },
                    content() {
                        'step 0';
                        player.removeMark('llbz_yingwu', 2);
                        player.draw();
                        ('step 1');
                        player.chooseUseTarget('guohe');
                    },
                    marktext: '舞',
                    intro: {
                        name: '舞',
                        name2: '舞',
                        content: 'mark',
                    },
                    subSkill: {
                        add: {
                            trigger: { player: 'useCardToPlayered' },
                            forced: true,
                            filter(event, player) {
                                return (event.card.name == 'sha' || (get.type(event.card) == 'trick' && !get.tag(event.card, 'damage'))) && player.isPhaseUsing();
                            },
                            content() {
                                player.addMark('llbz_yingwu', 1);
                            },
                        },
                        trick: {
                            trigger: { player: 'useCardAfter' },
                            filter(event, player) {
                                return get.type(event.card) == 'trick' && !get.tag(event.card, 'damage') && player.countMark('llbz_yingwu') > 1;
                            },
                            content() {
                                'step 0';
                                player.removeMark('llbz_yingwu', 2);
                                player.draw();
                                ('step 1');
                                player.chooseUseTarget('sha', false);
                            },
                        },
                    },
                },
                llbz_manmiao: {
                    audio: 'ext:拉拉:1',
                    forced: true,
                    trigger: { target: 'useCardToTarget' },
                    filter(event, player) {
                        return event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick') && event.player != event.target;
                    },
                    logTarget: 'player',
                    content() {
                        'step 0';
                        player.judge(function (result) {
                            if (get.color(result) == 'red') return 2;
                            return -1;
                        }).judge2 = function (result) {
                            return result.bool;
                        };
                        ('step 1');
                        if (result.bool) {
                            trigger.targets.remove(player);
                            trigger.parent.triggeredTargets2.remove(player);
                            trigger.untrigger();
                        }
                    },
                },
                llbz_gaoyin: {
                    audio: 'ext:拉拉:1',
                    mod: {
                        selectTarget(card, player, range) {
                            if ((card.name == 'sha' || card.name == 'juedou') && range[1] && range[1] != -1) range[1]++;
                        },
                    },
                    charlotte: true,
                    forced: true,
                },
                llbz_tianlai: {
                    audio: 'ext:拉拉:1',
                    forced: true,
                    trigger: { player: 'useCard' },
                    forced: true,
                    filter(event, player) {
                        return (event.card.name == 'sha' || get.type2(event.card) == 'trick') && get.color(event.card, false) == 'black';
                    },
                    content() {
                        trigger.nowuxie = true;
                        trigger.directHit.addArray(game.players);
                        player.draw();
                    },
                },
                llbz_zhanxing: {
                    audio: 'ext:拉拉:2',
                    trigger: { player: 'useCardToPlayer' },
                    filter(event, player) {
                        if (player != _status.currentPhase || event.target == player) return false;
                        var list = event.parent.triggeredTargets1;
                        if (list.includes(player)) list.remove(player);
                        return list.length == 1;
                    },
                    content() {
                        'step 0';
                        player.chooseTarget('占星:选择一个其他角色进行判定', lib.filter.notMe).set('ai', (target) => {
                            var player = _status.event.player;
                            if (get.attitude(player, target) <= 0) return 1;
                            if (get.attitude(player, target) > 0) return -1;
                            return 0;
                        });
                        ('step 1');
                        if (result.targets?.length) {
                            result.targets[0].judge();
                        } else event.finish();
                    },
                    ai: {
                        order: 8,
                        result: { target: -1 },
                    },
                },
                llbz_mingshu: {
                    audio: 'ext:拉拉:2',
                    trigger: { global: 'judgeFixing' },
                    forced: true,
                    filter(event, player) {
                        return event.player !== player;
                    },
                    content() {
                        'step 0';
                        player.draw();
                        ('step 1');
                        var card = trigger.result.card;
                        var target = trigger.player;
                        target.addToExpansion(card, player, 'give').gaintag.add('llbz_mingshu_count');
                        target.addSkill('llbz_mingshu_count');
                        ('step 2');
                        if (event.count > 0 && target.hasSkill('llbz_mingshu_count')) {
                            player.chooseBool(get.prompt2('llbz_mingshu')).set('frequentSkill', 'llbz_mingshu');
                        } else event.finish();
                    },
                },
                llbz_mingshu_count: {
                    forced: true,
                    trigger: { player: ['useCardBegin', 'responedBegin'] },
                    filter(event, player) {
                        var cards = player.getExpansions('llbz_mingshu_count');
                        if (!cards.length) return false;
                        for (var i of cards) {
                            if (i.suit == event.card.suit) return true;
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        var cards = player.getExpansions('llbz_mingshu_count');
                        for (var i of cards) {
                            if (i.suit == trigger.card.suit) {
                                player.loseToDiscardpile(i);
                                player.loseHp();
                                break;
                            } else event.finish();
                        }
                        ('step 1');
                        var cards = player.getExpansions('llbz_mingshu_count');
                        if (cards.length) {
                            event.goto(0);
                        } else event.finish();
                    },
                    intro: {
                        content: 'expansion',
                        markcount: 'expansion',
                    },
                    onremove(player, skill) {
                        var cards = player.getExpansions('llbz_mingshu_count');
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                },
                llbz_fuchu: {
                    mark: true,
                    intro: {
                        content: 'limited',
                    },
                    audio: 'ext:拉拉:1',
                    trigger: { global: 'phaseJieshuBegin' },
                    derivation: 'llbz_mingdin',
                    filter(event, player) {
                        return event.player.getExpansions('llbz_mingshu_count').length >= event.player.maxHp;
                    },
                    check(event, player) {
                        if (get.attitude(player, event.player) > 0) return false;
                        return true;
                    },
                    content() {
                        var target = trigger.player;
                        player.awakenSkill('llbz_fuchu');
                        target.die();
                        player.addSkill('llbz_mingdin');
                        player.disableJudge();
                        player.gainMaxHp();
                        player.hp = player.maxHp;
                        player.removeSkill('llbz_fuchu');
                    },
                },
                llbz_mingdin: {
                    audio: 'ext:拉拉:1',
                    enable: 'phaseUse',
                    usable: 5,
                    filter(event, player) {
                        var count = player.getStat('skill').llbz_mingdin;
                        if (count && count > player.countMark('llbz_mingdin')) return false;
                        return true;
                    },
                    filterTarget: lib.filter.notMe,
                    prompt: '选择一名其他角色进行命运审判',
                    content() {
                        'step 0';
                        var next = target.judge();
                        ('step 1');
                        if (result.color == 'red') {
                            if (player.countMark('llbz_mingdin') < 4 && player.hasSkill('llbz_mingdin', null, null, false)) player.addMark('llbz_mingdin', 1, false);
                        } else if (result.color == 'black') {
                            target.chooseToDiscard(1, '弃置一张牌', true);
                        }
                    },
                    ai: {
                        order: 8,
                        result: { target: -1 },
                    },
                },
                llbz_qianyong: {
                    audio: 'ext:拉拉:2',
                    mod: {
                        cardname(card) {
                            if (lib.skill.llbz_qianyong.isllbz_qianyong(card)) {
                                if (!card.storage.llbz_qianyong) card.storage.llbz_qianyong = true;
                                return 'sha';
                            }
                        },
                        cardUsable(card, player) {
                            if (card.storage && card.storage.llbz_qianyong) return Infinity;
                        },
                        targetInRange(card) {
                            if (card.name == 'sha') return true;
                        },
                    },
                    isllbz_qianyong(card) {
                        var info = lib.card[card.name];
                        if (!info || info.type != 'equip') return false;
                        if (!info || info.subtype != 'equip1') return false;
                        return true;
                    },
                    group: 'llbz_qianyong_respond',
                    trigger: {
                        global: 'phaseBefore',
                        player: 'enterGame',
                    },
                    forced: true,
                    filter(event, player) {
                        return event.name != 'phase' || game.phaseNumber == 0;
                    },
                    content() {
                        player.disableEquip(1);
                    },
                    subSkill: {
                        respond: {
                            audio: 'ext:拉拉:2',
                            silent: true,
                            trigger: { player: 'useCard' },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.addCount !== false && event.cards && event.cards.length == 1 && get.subtype(event.cards[0]) == 'equip1';
                            },
                            forced: true,
                            content() {
                                trigger.directHit.addArray(game.players);
                            },
                        },
                    },
                },
                llbz_shuijian: {
                    audio: 'ext:拉拉:2',
                    trigger: { source: 'damageSource' },
                    forced: true,
                    filter(event, player) {
                        return event.card && event.card.name == 'sha' && event.num > 0;
                    },
                    content() {
                        'step 0';
                        event.num = Math.min(trigger.num, 9);
                        ('step 1');
                        player.draw();
                        ('step 2');
                        if (player.isDamaged()) {
                            player.recover();
                        }
                        ('step 3');
                        event.num--;
                        if (event.num > 0) {
                            event.goto(1);
                        } else event.finish();
                    },
                },
                llbz_fanteng: {
                    audio: 'ext:拉拉:1',
                    group: ['llbz_fanteng_achieve', 'llbz_fanteng_fail'],
                    derivation: 'llbz_hug',
                    dutySkill: true,
                    enable: 'phaseUse',
                    usable: 1,
                    selectCard: 1,
                    filterCard: true,
                    position: 'he',
                    filter(event, player) {
                        return player.countCards('he') > 1;
                    },
                    content() {
                        var cards = [];
                        var card = get.cardPile2(function (card) {
                            return get.subtype(card) == 'equip1';
                        });
                        if (card) cards.push(card);
                        if (cards.length) player.gain(cards, 'gain2');
                    },
                    subSkill: {
                        achieve: {
                            trigger: { source: 'damageSource' },
                            audio: 'ext:拉拉:1',
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                player.getAllHistory('sourceDamage', function (evt) {
                                    if (evt.card && evt.card.name == 'sha') num += evt.num;
                                });
                                return event.card && event.card.name == 'sha' && num >= 4;
                            },
                            content() {
                                player.awakenSkill('llbz_fanteng');
                                game.log(player, '成功完成使命');
                                player.removeSkills('llbz_fanteng');
                                player.removeSkills('llbz_qianyong');
                                player.enableEquip(1);
                                player.addSkills('llbz_hug');
                            },
                        },
                        fail: {
                            trigger: { player: 'dying' },
                            audio: 'ext:拉拉:1',
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('llbz_fanteng');
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('llbz_fanteng');
                                game.log(player, '使命失败');
                                if (player.isDamaged()) player.hp = player.maxHp;
                                ('step 1');
                                var num = player.countCards('he');
                                if (num > 0) player.chooseToDiscard('he', true, num);
                            },
                        },
                    },
                },
                llbz_hug: {
                    audio: 'ext:拉拉:1',
                    group: 'llbz_fanyong',
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        var hs = player.getCards('h');
                        if (hs.length < 2) return false;
                        var red = 0,
                            black = 0;
                        for (var i of hs) {
                            if (get.color(i, player) == 'red') red++;
                            else black++;
                            if (red > 1 || black > 1) return true;
                        }
                        return false;
                    },
                    complexCard: true,
                    selectCard: 2,
                    filterCard(card, player) {
                        if (ui.selected.cards.length) return get.color(card, player) == get.color(ui.selected.cards[0], player);
                        var color = get.color(card, player);
                        return (
                            player.countCards('h', function (cardx) {
                                return cardx != card && color == get.color(cardx, player);
                            }) > 0
                        );
                    },
                    selectTarget: 1,
                    filterTarget(event, target, player) {
                        return target.hp == player.hp && target != player;
                    },
                    check(card) {
                        return 7 - get.value(card);
                    },
                    position: 'h',
                    content() {
                        target.draw(3);
                        target.recover();
                        player.draw(3);
                        player.recover();
                    },
                    ai: {
                        order: 6,
                        result: { target: 2 },
                    },
                },
                llbz_fanyong: {
                    trigger: { player: 'useCard' },
                    forced: true,
                    filter(event, player) {
                        return event.card.name == 'sha' && player.getEquip(1);
                    },
                    content() {
                        trigger.directHit.addArray(game.players);
                    },
                },
                llbz_kuozhan: {
                    audio: 'ext:拉拉:2',
                    forced: true,
                    trigger: {
                        player: ['damageEnd', 'phaseZhunbeiBegin'],
                    },
                    content() {
                        if (player.countMark('llbz_kuozhan') < 4) {
                            player.addMark('llbz_kuozhan', 1, false);
                        } else player.draw();
                    },
                },
                llbz_dagong: {
                    audio: 'ext:拉拉:2',
                    forced: true,
                    notemp: true,
                    trigger: {
                        global: ['damageEnd', 'recoverEnd', 'loseHpEnd'],
                    },
                    filter(event, player) {
                        var num = player.countMark('llbz_kuozhan');
                        return event.num > 0 && event.player.isIn() && event.player.countCards('he') > 0 && get.distance(player, event.player) <= 0 + num;
                    },
                    content() {
                        'step 0';
                        var target = trigger.player;
                        event.target = target;
                        player.choosePlayerCard(event.target, 'he', 1, true);
                        ('step 1');
                        if (result.bool) {
                            player.addToExpansion(result.cards, player, 'give').gaintag.add('llbz_dagong');
                        } else event.finish();
                        ('step 2');
                        if (event.count > 0 && player.hasSkill('llbz_dagong')) {
                            player.chooseBool(get.prompt2('llbz_dagong')).set('frequentSkill', 'llbz_dagong');
                        } else event.finish();
                    },
                    intro: {
                        content: 'expansion',
                        markcount: 'expansion',
                    },
                    onremove(player, skill) {
                        var cards = player.getExpansions('llbz_dagong');
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                    group: ['llbz_dagong_draw', 'llbz_wanzi'],
                    subSkill: {
                        draw: {
                            audio: 'ext:拉拉:1',
                            trigger: {
                                global: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'lose') {
                                    for (var i in event.gaintag_map) {
                                        if (event.gaintag_map[i].includes('llbz_dagong')) return true;
                                    }
                                    return false;
                                }
                                return player.hasHistory('lose', function (evt) {
                                    if (event != evt.parent) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('llbz_dagong')) return true;
                                    }
                                    return false;
                                });
                            },
                            content() {
                                player.draw();
                            },
                        },
                    },
                },
                llbz_wanzi: {
                    forced: true,
                    trigger: { global: 'addToExpansionAfter' },
                    filter(event, player) {
                        return player.getExpansions('llbz_dagong').length > 4;
                    },
                    content() {
                        var cards = player.getExpansions('llbz_dagong');
                        player.loseToDiscardpile(cards[5]);
                    },
                },
                llbz_zili: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'phaseZhunbeiBegin' },
                    forced: true,
                    juexingji: true,
                    derivation: 'llbz_wuta',
                    filter(event, player) {
                        var zhu = get.zhu(player);
                        if (zhu && zhu.isZhu) {
                            var name = zhu.name;
                            while (name.includes('_')) {
                                name = name.slice(name.indexOf('_') + 1);
                            }
                            if (name.indexOf('seguxiangyin') == 0) return false;
                        }
                        return !player.storage.llbz_zili && player.countCards('h') > player.hp;
                    },
                    content() {
                        player.storage.llbz_zili = true;
                        player.loseMaxHp();
                        player.addSkills('llbz_wuta');
                        player.awakenSkill('llbz_zili');
                    },
                },
                llbz_wuta: {
                    audio: 'ext:拉拉:1',
                    mod: {
                        maxHandcard(player, num) {
                            return num + 1;
                        },
                    },
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        return player.getExpansions('llbz_dagong').length;
                    },
                    content() {
                        'step 0';
                        var num = player.getExpansions('llbz_dagong').length;
                        player.chooseTarget('选择一名角色', 1);
                        ('step 1');
                        if (result.bool) {
                            event.targets = result.targets;
                            event.target = event.targets[0];
                            var target = event.target;
                            var num = target.getDamagedHp();
                            player.chooseCardButton(player.getExpansions('llbz_dagong'), num, true);
                        } else event.finish();
                        ('step 2');
                        if (result.bool) {
                            var target = event.target;
                            var cards = result.links;
                            target.gain(cards, 'draw');
                            target.addSkill('llbz_wuta_recover');
                        } else event.finish();
                    },
                    ai: {
                        order: 1,
                        result: { player: 1 },
                    },
                    subSkill: {
                        recover: {
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            content() {
                                player.recover();
                                player.removeSkill('llbz_wuta_recover');
                            },
                        },
                    },
                },
                llbz_tangguo: {
                    audio: 'ext:拉拉:3',
                    trigger: { global: 'damageEnd' },
                    derivation: 'llbz_tangguo_change',
                    usable: 1,
                    logTarget: 'player',
                    content() {
                        'step 0';
                        trigger.player.draw();
                        ('step 1');
                        if (!trigger.player.countCards('h')) event.finish();
                        else trigger.player.chooseCard('h', true, '选择一张牌置于' + get.translation(player) + '的武将牌上作为「糖」');
                        ('step 2');
                        player.addToExpansion(result.cards, trigger.player, 'give').gaintag.add('llbz_tangguo');
                        ('step 3');
                        trigger.player.recover();
                    },
                    intro: {
                        content: 'expansion',
                        markcount: 'expansion',
                    },
                    onremove(player, skill) {
                        var cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                },
                llbz_tangguo_change: {
                    audio: 'ext:拉拉:3',
                    trigger: { global: 'damageEnd' },
                    logTarget: 'player',
                    content() {
                        'step 0';
                        trigger.player.draw();
                        ('step 1');
                        if (!trigger.player.countCards('h')) event.finish();
                        else trigger.player.chooseCard('h', true, '选择一张牌置于' + get.translation(player) + '的武将牌上作为「糖」');
                        ('step 2');
                        player.addToExpansion(result.cards, trigger.player, 'give').gaintag.add('llbz_tangguo');
                    },
                    intro: {
                        content: 'expansion',
                        markcount: 'expansion',
                    },
                    onremove(player, skill) {
                        var cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                },
                llbz_tianmi: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'phaseZhunbeiBegin' },
                    forced: true,
                    juexingji: true,
                    derivation: ['llbz_chengshu', 'llbz_chengzhang'],
                    filter(event, player) {
                        return player.getExpansions('llbz_tangguo').length >= 3;
                    },
                    content() {
                        'step 0';
                        player.awakenSkill(event.name);
                        player.addSkills('llbz_chengshu');
                        player.loseMaxHp();
                        player.recover();
                        player.gain(player.getExpansions('llbz_tangguo'), 'gain2', 'fromStorage');
                        ('step 1');
                        player.removeSkill('llbz_tangguo');
                        player.addSkill('llbz_tangguo_change');
                    },
                },
                llbz_chengshu: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'phaseZhunbeiBegin' },
                    forced: true,
                    juexingji: true,
                    filter(event, player) {
                        return player.getExpansions('llbz_tangguo').length >= 3;
                    },
                    content() {
                        'step 0';
                        player.awakenSkill(event.name);
                        player.loseMaxHp();
                        player.recover();
                        player.gain(player.getExpansions('llbz_tangguo'), 'gain2', 'fromStorage');
                        ('step 1');
                        player.removeSkill('llbz_tangguo_change');
                        player.addSkill('llbz_chengzhang');
                    },
                },
                llbz_chengzhang: {
                    audio: 'ext:拉拉:1',
                    derivation: ['rerende', 'rezhiheng', 'rejianxiong', 'luanji', 'llbz_qingre', 'llbz_weiya', 'llbz_jixing', 'llbz_shanyao'],
                    trigger: { player: 'phaseZhunbeiBegin' },
                    forced: true,
                    content() {
                        'step 0';
                        var list = [];
                        if (!player.hasSkill('rerende')) {
                            list.push('rerende');
                        }
                        if (!player.hasSkill('rezhiheng')) {
                            list.push('rezhiheng');
                        }
                        if (!player.hasSkill('rejianxiong')) {
                            list.push('rejianxiong');
                        }
                        if (!player.hasSkill('luanji')) {
                            list.push('luanji');
                        }
                        if (!player.hasSkill('llbz_qingre')) {
                            list.push('llbz_qingre');
                        }
                        if (!player.hasSkill('llbz_weiya')) {
                            list.push('llbz_weiya');
                        }
                        if (!player.hasSkill('llbz_jixing')) {
                            list.push('llbz_jixing');
                        }
                        if (!player.hasSkill('llbz_shanyao')) {
                            list.push('llbz_shanyao');
                        }
                        if (list.length) {
                            player.chooseControl(list).set('prompt', '选择获得一项技能');
                        }
                        ('step 1');
                        player.addSkills(result.control);
                        player.addMark('llbz_chengzhang', 1, false);
                        ('step 2');
                        if (player.countMark('llbz_chengzhang') > 2) {
                            player.awakenSkill('llbz_chengzhang');
                        }
                    },
                },
                llbz_beiguo: {
                    audio: 'ext:拉拉:1',
                    trigger: { global: 'phaseBefore', player: 'enterGame' },
                    group: ['llbz_beiguo_move', 'llbz_beiguo_damage1', 'llbz_beiguo_damage2'],
                    filter(event, player) {
                        return game.hasPlayer((current) => current != player) && (event.name != 'phase' || game.phaseNumber == 0);
                    },
                    async cost(event, trigger, player) {
                        event.result = await player
                            .chooseTarget('背锅:令一名其他角色获得<锅>标记', lib.filter.notMe, true)
                            .set('ai', (target) => {
                                return get.attitude(player, target);
                            })
                            .forResult();
                    },
                    content() {
                        var target = event.targets[0];
                        target.addMark('llbz_beiguo_mark', 1, false);
                        target.addAdditionalSkill('llbz_beiguo_' + player.playerid, 'llbz_beiguo_mark');
                        target.addMark('llbz_beiguo_marked', 1, false);
                        target.addSkill('llbz_beiguo_help');
                    },
                    subSkill: {
                        mark: {
                            marktext: '锅',
                            charlotte: true,
                            intro: {
                                markcount: () => null,
                                name: '背锅',
                                name2: '背锅',
                                content: '已拥有<锅>标记',
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                                cardUsable(card, player, num) {
                                    if (player.hasMark('llbz_beiguo_mark') && card.name == 'sha')
                                        return (
                                            num +
                                            game.countPlayer(function (current) {
                                                return current.hasSkill('llbz_beiguo');
                                            })
                                        );
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    !event.numFixed &&
                                    player.hasMark('llbz_beiguo_mark') &&
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('llbz_beiguo');
                                    })
                                );
                            },
                            content() {
                                trigger.num += game.countPlayer(function (current) {
                                    return current.hasSkill('llbz_beiguo');
                                });
                            },
                        },
                        move: {
                            audio: 'ext:拉拉:1',
                            trigger: { global: 'roundStart' },
                            filter(event, player) {
                                return game.hasPlayer((current) => current.hasSkill('llbz_beiguo_mark')) && game.hasPlayer((current) => !current.hasMark('llbz_beiguo_marked') && current != player);
                            },
                            async cost(event, trigger, player) {
                                var targets = game.filterPlayer((current) => current.hasSkill('llbz_beiguo_mark'));
                                var prompt2 = targets.length == 1 ? '将' + get.translation(targets[0]) + '的<锅>交给一名未获得过<锅>的其他角色' : '选择一名有<锅>的角色,将该标记交给一名未获得过<锅>的其他角色';
                                event.result = await player
                                    .chooseTarget(get.prompt('llbz_beiguo'), prompt2, targets.length == 1 ? 1 : 2, (card, player, target) => {
                                        if (ui.selected.targets.length == 0 && _status.event.targets.length > 1) return target.hasSkill('llbz_beiguo_mark');
                                        return !target.hasMark('llbz_beiguo_marked') && target != player;
                                    })
                                    .set('ai', (target) => {
                                        var player = _status.event.player;
                                        if (ui.selected.targets.length == 0 && _status.event.targets.length > 1) return -get.attitude(player, target);
                                        return get.attitude(player, _status.event.targets[0]) < get.attitude(player, target);
                                    })
                                    .set('targets', targets)
                                    .forResult();
                            },
                            content() {
                                var targets = event.targets;
                                if (targets.length == 1) {
                                    var target1 = game.filterPlayer((current) => current.hasSkill('llbz_beiguo_mark'))[0];
                                    var target2 = targets[0];
                                } else {
                                    var target1 = targets[0];
                                    var target2 = targets[1];
                                }
                                player.line2([target1, target2], 'green');
                                var map = target1.additionalSkills;
                                for (var key in map) {
                                    if (key.indexOf('llbz_beiguo_') != 0) continue;
                                    var id = parseInt(key.slice(8));
                                    target1.removeSkill('llbz_beiguo_help');
                                    target1.removeMark('llbz_beiguo_mark');
                                    target1.removeAdditionalSkill('llbz_beiguo_' + id);
                                    target1.removeSkill('llbz_beiguo_mark');
                                    target2.addMark('llbz_beiguo_mark', 1, false);
                                    target2.addAdditionalSkill('llbz_beiguo_' + id, 'llbz_beiguo_mark');
                                    target2.addMark('llbz_beiguo_marked', 1, false);
                                    target2.addSkill('llbz_beiguo_help');
                                }
                            },
                        },
                        damage1: {
                            audio: 'ext:拉拉:1',
                            trigger: { global: 'damageBegin4' },
                            filter(event, player) {
                                return event.player.hasMark('llbz_beiguo_mark') && player.hasSkill('llbz_beiguo') && player.hp > 1;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                trigger.cancel();
                            },
                        },
                        damage2: {
                            audio: 'ext:拉拉:1',
                            trigger: { global: 'damageBegin4' },
                            filter(event, player) {
                                return event.player.hasMark('llbz_beiguo_mark') && player.hasSkill('llbz_beiguo') && player.hp == 1;
                            },
                            content() {
                                'step 0';
                                var num = player.maxHp - 1;
                                player.loseMaxHp(num);
                                player.changeHujia(num, null, true);
                                ('step 1');
                                player.draw(player.hujia);
                                ('step 2');
                                trigger.cancel();
                                ('step 3');
                                var target = trigger.player;
                                target.removeMark('llbz_beiguo');
                                target.removeAdditionalSkill('llbz_beiguo_' + player.playerid, 'llbz_beiguo_mark');
                                target.removeSkill('llbz_beiguo_help');
                                target.removeSkill('llbz_beiguo_mark');
                            },
                        },
                    },
                },
                llbz_beiguo_help: {
                    audio: 'ext:拉拉:1',
                    trigger: { global: 'damageEnd' },
                    forced: true,
                    filter(event, player) {
                        return event.hujia && !event.player.hujia && event.player.isIn() && player.countCards('he') > 0 && event.player.hasSkill('llbz_beiguo');
                    },
                    content() {
                        'step 0';
                        player
                            .chooseToDiscard(1, 'he', '弃置一张手牌,令其获得1点护甲')
                            .set('goon', get.attitude(player, trigger.player) > 0)
                            .set('ai', function (card) {
                                if (!_status.event.goon) return 0;
                                return 5 - get.value(card);
                            });
                        ('step 1');
                        if (result.bool) {
                            var target = trigger.player;
                            target.changeHujia(1, null, true);
                        } else event.finish();
                    },
                },
                llbz_tanwan: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'phaseBegin' },
                    check(event, player) {
                        return player.hp < player.maxHp && player.countCards('h') < player.hp;
                    },
                    content() {
                        var num = player.getDamagedHp();
                        player.draw(num);
                        player.changeHujia(num, null, true);
                        trigger.cancel();
                    },
                },
                llbz_shenshe: {
                    audio: 'ext:拉拉:2',
                    trigger: { global: 'damageBegin3' },
                    usable: 4,
                    filter(event, player) {
                        return get.distance(player, event.player) <= 1 && event.player.isIn();
                    },
                    check(event, player) {
                        return get.attitude(player, event.player) > 0;
                    },
                    content() {
                        'step 0';
                        trigger.player.judge();
                        ('step 1');
                        if (result.color == 'black') trigger.num--;
                        else trigger.player.draw();
                    },
                },
                llbz_tonghua: {
                    audio: 'ext:拉拉:1',
                    trigger: { source: 'damageBegin2' },
                    derivation: ['tiandu'],
                    filter(event, player) {
                        if (_status.currentPhase != player) return false;
                        if (!_status.event.getParent('phaseUse')) return false;
                        return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.num >= event.player.hp + event.player.hujia;
                    },
                    logTarget: 'player',
                    content() {
                        'step 0';
                        trigger.cancel();
                        if (trigger.player.countCards('e')) {
                            trigger.player
                                .chooseControl(function (event, player) {
                                    if (player.hp == 1) return 1;
                                    if (player.hp == 2 && player.countCards('e') >= 2) return 1;
                                    return 0;
                                })
                                .set('choiceList', ['弃置装备区内的所有牌并失去一点体力', '将武将牌替换为大王具足虫']);
                        } else {
                            event._result = { index: 1 };
                        }
                        ('step 1');
                        var target = trigger.player;
                        event.target = target;
                        if (result.index == 1) {
                            if (target.name2 != undefined) {
                                target.chooseControl(target.name1, target.name2).set('prompt', '请选择要更换的武将牌');
                            } else event._result = { control: target.name1 };
                        } else {
                            target.discard(target.getCards('e'));
                            target.loseHp();
                            event.finish();
                        }
                        ('step 2');
                        target.reinit(result.control, 'llbz_dawangjuzuchong');
                        if (target.name == 'llbz_dawangjuzuchong' && target.group != 'xing') target.changeGroup('xing');
                        if (_status.characterlist) {
                            _status.characterlist.add(result.control);
                        }
                        ('step 3');
                        if (target.maxHp > 4) {
                            target.loseMaxHp(target.maxHp - 4);
                        }
                        if (target.maxHp < 4) {
                            target.gainMaxHp(4 - target.maxHp);
                        }
                        ('step 4');
                        target.recover(4);
                        ('step 5');
                        player.awakenSkill('llbz_tonghua');
                        player.addSkills('tiandu');
                        player.addSkill('llbz_tonghua_control');
                    },
                },
                llbz_tonghua_control: {
                    trigger: { global: ['loseHpAfter', 'loseMaxHpAfter', 'damageAfter'] },
                    forced: true,
                    filter(event, player) {
                        return event.player.hasSkill('llbz_huiyi') && player.hasSkill('llbz_tonghua_control');
                    },
                    content() {
                        'step 0';
                        player.chooseTarget('选择一名角色', 1, true);
                        ('step 1');
                        if (result.bool) {
                            event.targets = result.targets;
                            event.target = event.targets[0];
                            player.chooseControl('令其回复1点体力', '令其摸一张牌', true);
                        }
                        ('step 2');
                        if (result.control == '令其回复1点体力') {
                            target.recover();
                        } else target.draw();
                    },
                },
                llbz_piaofu: {
                    audio: 'ext:拉拉:1',
                    group: ['llbz_piaofu_2', 'llbz_piaofu_3', 'llbz_piaofu_4'],
                    trigger: { player: 'phaseJudgeBefore' },
                    forced: true,
                    content() {
                        trigger.cancel();
                    },
                    subSkill: {
                        2: {
                            trigger: { player: 'phaseDrawBefore' },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        3: {
                            trigger: { player: 'phaseUseBefore' },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        4: {
                            trigger: { player: 'phaseDiscardBefore' },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                    },
                },
                llbz_huanjin: {
                    trigger: { player: 'phaseZhunbeiBegin' },
                    forced: true,
                    mark: true,
                    zhuanhuanji: true,
                    marktext: '☯',
                    intro: {
                        content(storage, player, skill) {
                            if (player.storage.llbz_huanjin == true) return '阴:减少1点体力上限.';
                            else return '阳:流失1点体力.';
                        },
                    },
                    content() {
                        'step 0';
                        if (player.storage.llbz_huanjin == true) {
                            player.loseMaxHp();
                        } else player.loseHp();
                        ('step 1');
                        player.changeZhuanhuanji('llbz_huanjin');
                    },
                },
                llbz_huiyi: {},
                llbz_tongyuan: {
                    trigger: { global: 'dieAfter' },
                    forced: true,
                    forceDie: true,
                    filter(event, player) {
                        return event.player.hasSkill('llbz_tonghua_control') && player.hasSkill('llbz_tongyuan');
                    },
                    content() {
                        player.die();
                    },
                },
                llbz_banyan: {
                    audio: 'ext:拉拉:2',
                    trigger: {
                        global: 'phaseBefore',
                        player: 'enterGame',
                    },
                    forced: true,
                    filter(event, player) {
                        return event.name != 'phase' || game.phaseNumber == 0;
                    },
                    content() {
                        if (!_status.characterlist) lib.skill.pingjian.initList();
                        var characters = _status.characterlist.randomRemove(4);
                        lib.skill.llbz_banyan.addVisitors(characters, player);
                    },
                    group: 'llbz_banyan_reload',
                    subSkill: {
                        reload: {
                            trigger: { player: 'phaseBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.getStorage('llbz_banyan').length < 4;
                            },
                            content() {
                                if (!_status.characterlist) lib.skill.pingjian.initList();
                                var characters = _status.characterlist.randomRemove(4 - player.getStorage('llbz_banyan').length);
                                lib.skill.llbz_banyan.addVisitors(characters, player);
                            },
                        },
                    },
                    getSkills(characters, player) {
                        var skills = [];
                        for (var name of characters) {
                            if (Array.isArray(lib.character[name])) {
                                for (var skill of lib.character[name][3]) {
                                    var list = get.skillCategoriesOf(skill, player);
                                    list.remove('锁定技');
                                    if (list.length) continue;
                                    var info = get.info(skill);
                                    if (info && (!info.unique || !info.cost || info.gainable)) skills.add(skill);
                                }
                            }
                        }
                        return skills;
                    },
                    addVisitors(characters, player) {
                        player.addSkillBlocker('llbz_banyan');
                        game.log(player, '将', '#y' + get.translation(characters), '加入了', '#g<扮演>');
                        lib.skill.rehuashen.drawCharacter(player, characters);
                        player.markAuto('llbz_banyan', characters);
                        var storage = player.getStorage('llbz_banyan');
                        var skills = lib.skill.llbz_banyan.getSkills(storage, player);
                        player.addInvisibleSkill(skills);
                    },
                    removeVisitors(characters, player) {
                        var skills = lib.skill.llbz_banyan.getSkills(characters, player);
                        var characters2 = player.getStorage('llbz_banyan').slice(0);
                        characters2.removeArray(characters);
                        skills.removeArray(lib.skill.llbz_banyan.getSkills(characters2, player));
                        player.unmarkAuto('llbz_banyan', characters);
                        _status.characterlist.addArray(characters);
                        player.removeInvisibleSkill(skills);
                    },
                    onremove(player, skill) {
                        lib.skill.llbz_banyan.removeVisitors(player.getSkills('llbz_banyan'), player);
                        player.removeSkillBlocker('llbz_banyan');
                    },
                    skillBlocker(skill, player) {
                        if (!player.invisibleSkills.includes(skill) || skill == 'llbz_mofang' || skill == 'llbz_mofang') return false;
                        return !player.hasSkill('llbz_mofang', false, false, false);
                    },
                    marktext: '扮',
                    intro: {
                        name: '扮演',
                        mark(dialog, storage, player) {
                            if (!storage || !storage.length) return '当前没有<扮演>角色';
                            dialog.addSmall([storage, 'character']);
                            var skills = lib.skill.llbz_banyan.getSkills(storage, player);
                            if (skills.length) dialog.addText('<li>当前可用技能:' + get.translation(skills), false);
                        },
                    },
                },
                llbz_mofang: {
                    audio: 'ext:拉拉:2',
                    trigger: {
                        player: ['useSkill', 'logSkillBegin'],
                    },
                    forced: true,
                    filter(event, player) {
                        var skill = event.sourceSkill || event.skill;
                        return player.invisibleSkills.includes(skill) && lib.skill.llbz_banyan.getSkills(player.getStorage('llbz_banyan'), player).includes(skill);
                    },
                    content() {
                        'step 0';
                        var visitors = player.getStorage('llbz_banyan').slice(0);
                        var drawers = visitors.filter(function (name) {
                            return Array.isArray(lib.character[name]) && lib.character[name][3].includes(trigger.sourceSkill);
                        });
                        event.drawers = drawers;
                        if (visitors.length == 1) event._result = { bool: true, links: visitors };
                        else {
                            var dialog = ['模仿:请选择移去一张<扮演>牌'];
                            if (drawers.length) dialog.push('<div class="text center">如果移去' + get.translation(drawers) + ',则你摸一张牌</div>');
                            dialog.push([visitors, 'character']);
                            player.chooseButton(dialog, true);
                        }
                        ('step 1');
                        if (result.bool) {
                            lib.skill.llbz_banyan.removeVisitors(result.links, player);
                            game.log(player, '移去了', '#y' + get.translation(result.links[0]));
                            if (event.drawers.includes(result.links[0])) {
                                player.addTempSkill('llbz_mofang_draw');
                                player.storage.llbz_mofang_draw.push(trigger.skill);
                            }
                        }
                    },
                    group: 'llbz_mofang_trigger',
                    subSkill: {
                        draw: {
                            charlotte: true,
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: { player: ['useSkillAfter', 'logSkill'] },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return player.getStorage('llbz_mofang_draw').includes(event.skill);
                            },
                            content() {
                                player.storage.llbz_mofang_draw.remove(trigger.skill);
                                player.draw();
                                if (!player.storage.llbz_mofang_draw.length) player.removeSkill('llbz_mofang_draw');
                            },
                        },
                        trigger: {
                            trigger: { player: 'triggerInvisible' },
                            forced: true,
                            forceDie: true,
                            popup: false,
                            charlotte: true,
                            _priority: 10,
                            filter(event, player) {
                                if (event.revealed) return false;
                                var info = get.info(event.skill);
                                if (info.charlotte) return false;
                                var skills = lib.skill.llbz_banyan.getSkills(player.getStorage('llbz_banyan'), player);
                                game.expandSkills(skills);
                                return skills.includes(event.skill);
                            },
                            content() {
                                'step 0';
                                if (get.info(trigger.skill).silent) {
                                    event.finish();
                                } else {
                                    var info = get.info(trigger.skill);
                                    var event = trigger,
                                        trigger = event._trigger;
                                    var str;
                                    var check = info.check;
                                    if (info.prompt) str = info.prompt;
                                    else {
                                        if (typeof info.logTarget == 'string') {
                                            str = get.prompt(event.skill, trigger[info.logTarget], player);
                                        } else if (typeof info.logTarget == 'function') {
                                            var logTarget = info.logTarget(trigger, player);
                                            if (get.itemtype(logTarget).indexOf('player') == 0) str = get.prompt(event.skill, logTarget, player);
                                        } else {
                                            str = get.prompt(event.skill, null, player);
                                        }
                                    }
                                    if (typeof str == 'function') {
                                        str = str(trigger, player);
                                    }
                                    var next = player.chooseBool('模仿:' + str);
                                    next.set('yes', !info.check || info.check(trigger, player));
                                    next.set('hsskill', event.skill);
                                    next.set('forceDie', true);
                                    next.set('ai', function () {
                                        return _status.event.yes;
                                    });
                                    if (typeof info.prompt2 == 'function') {
                                        next.set('prompt2', info.prompt2(trigger, player));
                                    } else if (typeof info.prompt2 == 'string') {
                                        next.set('prompt2', info.prompt2);
                                    } else if (info.prompt2 != false) {
                                        if (lib.dynamicTranslate[event.skill]) next.set('prompt2', lib.dynamicTranslate[event.skill](player, event.skill));
                                        else if (lib.translate[event.skill + '_info']) next.set('prompt2', lib.translate[event.skill + '_info']);
                                    }
                                    if (trigger.skillwarn) {
                                        if (next.prompt2) {
                                            next.set('prompt2', '<span class="thundertext">' + trigger.skillwarn + '.</span>' + next.prompt2);
                                        } else {
                                            next.set('prompt2', trigger.skillwarn);
                                        }
                                    }
                                }
                                ('step 1');
                                if (result.bool) {
                                    trigger.revealed = true;
                                } else {
                                    trigger.untrigger();
                                    trigger.cancelled = true;
                                }
                            },
                        },
                    },
                },
                llbz_xuexi: {
                    audio: 'ext:拉拉:2',
                    enable: 'phaseUse',
                    usable: 1,
                    selectCard: 1,
                    position: 'h',
                    filterCard(card) {
                        return get.color(card) == 'red';
                    },
                    selectTarget: 1,
                    filterTarget(event, player, target) {
                        return player != target && !target.hasMark('llbz_xuexi');
                    },
                    content() {
                        'step 0';
                        player.loseMaxHp();
                        ('step 1');
                        var list = [];
                        if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                        if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                        if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                        player.addSkills(list);
                        ('step 2');
                        target.addMark('llbz_xuexi', 1, false);
                    },
                },
                llbz_quanjin: {
                    audio: 'ext:拉拉:1',
                    enable: 'chooseToUse',
                    limited: true,
                    filter(event, player) {
                        return event.type == 'dying' && player == event.dying;
                    },
                    content() {
                        player.awakenSkill('llbz_quanjin');
                        player.gainMaxHp(2);
                        player.recover(4);
                    },
                    ai: {
                        save: true,
                        skillTagFilter(player, tag, arg) {
                            return player == arg;
                        },
                        order: 10,
                        result: {
                            player: 1,
                        },
                    },
                    group: 'llbz_quanjin_gain',
                },
                llbz_quanjin_gain: {
                    audio: 'ext:拉拉:1',
                    trigger: { global: 'die' },
                    filter(event, player) {
                        return (
                            (player.hasSkill('llbz_banyan') || player.hasSkill('llbz_xuexi')) &&
                            !event.player.hasMark('llbz_xuexi') &&
                            event.player.getStockSkills(true, true).filter(function (skill) {
                                var info = get.info(skill);
                                return info && !info.hiddenSkill && !info.zhuSkill && !info.charlotte;
                            }).length
                        );
                    },
                    logTarget: 'player',
                    prompt2: '(限定技)失去技能【扮演】或【学习】,并获得该角色武将牌上的所有技能,加1点体力上限并回复1点体力',
                    content() {
                        'step 0';
                        player.awakenSkill('llbz_quanjin');
                        var list = [];
                        if (player.hasSkill('llbz_banyan')) {
                            list.push('llbz_banyan');
                        }
                        if (player.hasSkill('llbz_xuexi')) {
                            list.push('llbz_xuexi');
                        }
                        if (list.length) {
                            player.chooseControl(list).set('prompt', '选择失去一项技能');
                        }
                        ('step 1');
                        player.removeSkill(result.control);
                        var skills = trigger.player.getStockSkills(true, true).filter(function (skill) {
                            var info = get.info(skill);
                            return info && !info.hiddenSkill && !info.zhuSkill && !info.charlotte;
                        });
                        if (skills.length) {
                            for (var i of skills) player.addSkills(i);
                            game.broadcastAll(function (list) {
                                game.expandSkills(list);
                                for (var i of list) {
                                    var info = lib.skill[i];
                                    if (!info) continue;
                                }
                            }, skills);
                        }
                        player.gainMaxHp();
                        player.recover();
                        trigger.player.addMark('llbz_xuexi', 1, false);
                        ('step 2');
                        if (player.hasSkill('llbz_xuexi') || player.hasSkill('llbz_banyan')) {
                            player.restoreSkill('llbz_quanjin');
                        }
                    },
                },
                llbz_danchun: {
                    mod: {
                        aiOrder(player, card, num) {
                            if (!player.hasSkill('llbz_danchun_used')) return (num += card.name.length * 2);
                        },
                    },
                    audio: 'ext:拉拉:2',
                    group: 'llbz_danchun_reset',
                    trigger: { player: ['useCard', 'respond'] },
                    forced: true,
                    filter(event, player) {
                        if (player.hasSkill('llbz_danchun_used')) return false;
                        if (!event.card) return false;
                        var num = get.translation(event.card.name).length;
                        return num > 0;
                    },
                    content() {
                        var num = get.translation(trigger.card.name).length;
                        player.draw(num);
                        player.addTempSkill('llbz_danchun_used');
                    },
                },
                llbz_danchun_used: {
                    charlotte: true,
                },
                llbz_danchun_reset: {
                    trigger: {
                        player: 'damageEnd',
                        source: 'damageSource',
                    },
                    forced: true,
                    filter(event, player) {
                        return player.hasSkill('llbz_danchun_used');
                    },
                    content() {
                        player.removeSkill('llbz_danchun_used');
                        game.log(player, '重置了', '#g【单纯】');
                    },
                },
                llbz_kaihua: {
                    audio: 'ext:拉拉:2',
                    trigger: { player: 'phaseUseBegin' },
                    forced: true,
                    content() {
                        'step 0';
                        player.loseMaxHp();
                        ('step 1');
                        if (!player.hasSkill('llbz_kaihua_effect')) {
                            player.addSkill('llbz_kaihua_effect');
                            player.addMark('llbz_kaihua_effect', 1, true);
                        } else player.addMark('llbz_kaihua_effect', 1, true);
                        ('step 2');
                        var num = player.countMark('llbz_kaihua_effect');
                        player.draw(Math.min(2 * num, 10));
                    },
                    subSkill: {
                        effect: {
                            charlotte: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.countMark('llbz_kaihua_effect');
                                },
                            },
                            marktext: '花',
                            intro: {
                                content: '手牌上限+#',
                            },
                        },
                    },
                },
                llbz_hanbao: {
                    audio: 'ext:拉拉:2',
                    trigger: { global: 'phaseJieshuBegin' },
                    mark: true,
                    limited: true,
                    zhuSkill: true,
                    filter(event, player) {
                        if (!player.hasZhuSkill('llbz_hanbao')) return false;
                        return event.player.hasSkill('llbz_xieli_after');
                    },
                    check(event, player) {
                        if (
                            game.hasPlayer(function (current) {
                                return current != player && current.hasSkill('llbz_xieli');
                            })
                        ) {
                            if (event.player == player) return false;
                        }
                        return true;
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('llbz_hanbao');
                        ('step 1');
                        player.gainMaxHp();
                        player.recover();
                        ('step 2');
                        if (trigger.player != player) {
                            player.restoreSkill('llbz_hanbao');
                        }
                    },
                },
                llbz_xieli: {
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'phaseJieshuBegin' },
                    mark: true,
                    limited: true,
                    filter(event, player) {
                        return game.hasPlayer(function (current) {
                            return current.group == 'lian';
                        });
                    },
                    content() {
                        'step 0';
                        player.chooseTarget(
                            get.prompt('llbz_xieli'),
                            '选择一名莲势力角色,回复其武将牌',
                            1,
                            function (card, player, target) {
                                return target.group == 'lian';
                            },
                            true
                        );
                        ('step 1');
                        var target = result.targets[0];
                        event.target = target;
                        player.awakenSkill('llbz_xieli');
                        ('step 2');
                        if (event.target.isTurnedOver()) event.target.turnOver();
                        ('step 3');
                        if (event.target.isLinked()) event.target.link();
                        ('step 4');
                        if (event.target !== player) {
                            event.target.recover();
                            player.recover();
                        }
                        ('step 5');
                        player.addTempSkill('llbz_xieli_after');
                    },
                    subSkill: {
                        after: {
                            charlotte: true,
                        },
                    },
                },
                llbz_lianjie: {
                    audio: 'ext:拉拉:2',
                    group: 'llbz_lianjie_effect',
                    trigger: {
                        player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                    },
                    content() {
                        'step 0';
                        player.chooseTarget(true, '请选择【连结】的目标', 1, false).ai = function (target) {
                            return 1 + Math.random();
                        };
                        ('step 1');
                        if (result.targets?.length) {
                            result.targets[0].link();
                        } else event.finish();
                    },
                    subSkill: {
                        effect: {
                            trigger: { global: ['linkAfter', 'turnOverAfter'] },
                            audio: 'ext:拉拉:2',
                            forced: true,
                            filter(event, player) {
                                return event.player !== player;
                            },
                            content() {
                                'step 0';
                                var target = trigger.player;
                                if (target.isLinked()) {
                                    if (player.isLinked()) {
                                        player.draw();
                                        event.finish();
                                    } else event.goto(1);
                                } else {
                                    if (player.isLinked()) {
                                        event.goto(1);
                                    } else {
                                        player.draw();
                                        event.finish();
                                    }
                                }
                                ('step 1');
                                var target = trigger.player;
                                if (target.isTurnedOver()) {
                                    if (player.isTurnedOver()) {
                                        player.draw();
                                    } else event.finish();
                                } else {
                                    if (player.isTurnedOver()) {
                                        event.finish();
                                    } else player.draw();
                                }
                            },
                        },
                    },
                },
                llbz_tongxin: {
                    forced: true,
                    global: 'llbz_tongxin_linked',
                    subSkill: {
                        linked: {
                            charlotte: true,
                            mod: {
                                targetInRange(card, player, target) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.hasSkill('llbz_tongxin');
                                        })
                                    ) {
                                        if (player.isLinked()) {
                                            if (target.isLinked()) return true;
                                        }
                                    }
                                },
                                globalTo(from, to, distance) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.hasSkill('llbz_tongxin');
                                        })
                                    ) {
                                        if (to.isLinked()) return (distance += 1);
                                    }
                                },
                            },
                        },
                    },
                },
                llbz_zhaogu: {
                    audio: 'ext:拉拉:2',
                    trigger: {
                        global: 'damageEnd',
                    },
                    filter(event, player) {
                        return event.lianhuanable == true && event.player.isIn() && player.isLinked();
                    },
                    content() {
                        'step 0';
                        trigger.player.recover();
                        ('step 1');
                        var num =
                            game.countPlayer(function (current) {
                                return current.isLinked();
                            }) + 1;
                        player.draw(num);
                    },
                },
                llbz_sanwu: {
                    audio: 'ext:拉拉:2',
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        return !player.isTurnedOver();
                    },
                    filterCard: true,
                    selectCard: 1,
                    position: 'he',
                    content() {
                        'step 0';
                        player.turnOver();
                        ('step 1');
                        player.addMark('llbz_zhiqiu_mark', 1, false);
                        player.addTempSkill('llbz_zhiqiu_mark');
                    },
                },
                llbz_dianbo: {
                    audio: 'ext:拉拉:2',
                    group: 'llbz_dianbo_turnover',
                    mod: {
                        cardUsableTarget(card, player, target) {
                            if (player.isTurnedOver()) return true;
                        },
                    },
                    trigger: { player: 'useCard' },
                    forced: true,
                    filter(event, player) {
                        return (
                            event.card &&
                            player.isTurnedOver() &&
                            (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                            game.hasPlayer(function (current) {
                                return current != player;
                            })
                        );
                    },
                    content() {
                        trigger.directHit.addArray(
                            game.filterPlayer(function (current) {
                                return current != player;
                            })
                        );
                    },
                    subSkill: {
                        turnover: {
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                player.turnOver();
                                player.addMark('llbz_zhiqiu_mark', 1, false);
                                player.addTempSkill('llbz_zhiqiu_mark');
                            },
                        },
                    },
                },
                llbz_zhiqiu: {
                    audio: 'ext:拉拉:2',
                    forced: true,
                    trigger: { player: 'turnOverAfter' },
                    filter(event, player) {
                        return player.countMark('llbz_zhiqiu_mark') > 0;
                    },
                    content() {
                        var num = player.countMark('llbz_zhiqiu_mark');
                        player.draw(Math.min(3, num));
                    },
                    subSkill: {
                        mark: {
                            marktext: '无',
                            charlotte: true,
                            intro: {
                                name: '三无',
                                name2: '三无',
                                content: '本回合已翻面次数:#',
                            },
                        },
                    },
                },
                llbz_chongjing: {
                    audio: 'ext:拉拉:2',
                    trigger: { player: 'phaseZhunbeiBegin' },
                    forced: true,
                    juexingji: true,
                    filter(event, player) {
                        var zhu = get.zhu(player);
                        if (zhu && zhu.isZhu) {
                            var name = zhu.name;
                            while (name.includes('_')) {
                                name = name.slice(name.indexOf('_') + 1);
                            }
                            if (name.indexOf('riyexiahuafan') == 0) return false;
                        }
                        return !player.storage.llbz_chongjing;
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('llbz_chongjing');
                        player.storage.llbz_chongjing = true;
                        ('step 1');
                        player.gainMaxHp();
                        player.recover();
                        player.addSkill('llbz_chongjing_effect');
                        var mode = get.mode();
                        if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four') || mode == 'doudizhu') {
                            var list = [];
                            if (lib.character[player.name]) list.addArray(lib.character[player.name][3]);
                            if (lib.character[player.name1]) list.addArray(lib.character[player.name1][3]);
                            if (lib.character[player.name2]) list.addArray(lib.character[player.name2][3]);
                            var skills = list;
                            player.storage.zhuSkill_llbz_chongjing = [];
                            for (var i = 0; i < skills.length; i++) {
                                var info = lib.skill[skills[i]];
                                if (info.zhuSkill) {
                                    player.storage.zhuSkill_llbz_chongjing.push(skills[i]);
                                    if (info.init) {
                                        info.init(player);
                                    }
                                    if (info.init2) {
                                        info.init2(player);
                                    }
                                }
                            }
                        }
                    },
                },
                llbz_jianshen: {
                    audio: 'ext:拉拉:2',
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard: true,
                    check(card) {
                        return 8 - get.value(card);
                    },
                    position: 'he',
                    filter(event, player) {
                        return player.countCards('he') > 0;
                    },
                    content() {
                        'step 0';
                        player.loseHp();
                        player.draw(3);
                        ('step 1');
                        player.addTempSkill('llbz_jianshen2');
                    },
                    ai: {
                        maihp: true,
                        order: 8,
                        result: {
                            player(player) {
                                if (player.hp == 1) return -1;
                                if (player.hp > 3) return 3;
                                return 1;
                            },
                        },
                    },
                },
                llbz_jianshen2: {
                    mod: {
                        forced: true,
                        targetInRange(card, player, target, now) {
                            if (card.name == 'sha') return true;
                        },
                        cardUsable(card, player, num) {
                            if (card.name == 'sha') return num + 1;
                        },
                    },
                },
                llbz_buzhang: {
                    audio: 'ext:拉拉:2',
                    zhuSkill: true,
                    trigger: { global: 'phaseUseBegin' },
                    filter(event, player) {
                        return player.hasZhuSkill('llbz_buzhang') && event.player.group == 'lian' && event.player !== player;
                    },
                    content() {
                        trigger.player.loseHp();
                        trigger.player.draw(3);
                        trigger.player.addTempSkill('llbz_jianshen2');
                    },
                },
                llbz_chongjing_hidden: {
                    trigger: { global: ['gameStart', 'zhuUpdate'] },
                    forced: true,
                    hiddenSkill: true,
                    popup: false,
                    audio: 'ext:拉拉:2',
                    filter(event, player) {
                        var mode = get.mode();
                        return mode == 'identity' || (mode == 'versus' && _status.mode == 'four');
                    },
                    content() {
                        var list = [];
                        var zhu = get.zhu(player);
                        if (zhu && zhu != player && zhu.skills) {
                            for (var i = 0; i < zhu.skills.length; i++) {
                                if (lib.skill[zhu.skills[i]] && lib.skill[zhu.skills[i]].zhuSkill) {
                                    list.push(zhu.skills[i]);
                                }
                            }
                        }
                        player.addAdditionalSkill('llbz_chongjing_hidden', list);
                        player.storage.zhuSkill_llbz_chongjing_hidden = list;
                    },
                },
                llbz_chongjing_effect: {},
                llbz_huanhua: {
                    group: 'llbz_huanhua_init',
                    trigger: { player: ['damageBegin3', 'loseHpBefore'] },
                    forced: true,
                    filter(event, player) {
                        return game.hasPlayer(function (current) {
                            return current.hasMark('llbz_huanhua');
                        });
                    },
                    content() {
                        'step 0';
                        player.chooseTarget('请选择一名目标移去<幻化>标记', true, 1, function (card, player, target) {
                            return target.hasMark('llbz_huanhua');
                        });
                        ('step 1');
                        if (result.targets?.length) {
                            var target = result.targets[0];
                            target.removeMark('llbz_huanhua', false);
                            target.loseMaxHp();
                            if (target != player) {
                                target.addSkill('rechanyuan');
                                target.addSkill('llbz_miegu_marked');
                            }
                        } else event.finish();
                        ('step 2');
                        trigger.cancel();
                        player.draw();
                    },
                    marktext: '慈',
                    intro: {
                        markcount: () => null,
                        name: '幻化',
                        content: '藤岛慈今天也很可爱!',
                    },
                    subSkill: {
                        init: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            logTarget: () => game.filterPlayer(),
                            content() {
                                'step 0';
                                var targets = game.filterPlayer().sortBySeat(player.next);
                                event.targets = targets;
                                event.num = 0;
                                ('step 1');
                                var target = event.targets[num];
                                target.addMark('llbz_huanhua', 1, false);
                                target.gainMaxHp();
                                event.num++;
                                if (event.num < targets.length) event.redo();
                            },
                        },
                    },
                },
                llbz_miegu: {
                    mod: {
                        targetInRange(card, player, target) {
                            if (target.hasSkill('llbz_miegu_marked')) return true;
                        },
                        cardUsableTarget(card, player, target) {
                            if (target.hasSkill('llbz_miegu_marked')) return true;
                        },
                    },
                    trigger: { source: 'damageSource' },
                    filter(event, player) {
                        return event.player.hasSkill('llbz_miegu_marked') && player.maxHp <= 3;
                    },
                    content() {
                        player.gainMaxHp();
                    },
                    subSkill: {
                        marked: {
                            charlotte: true,
                            mark: true,
                            marktext: '咩',
                            intro: {
                                markcount: () => null,
                                name: '咩咕',
                                content: '你已被咩咕标记!',
                            },
                        },
                    },
                },
                llbz_zhimian: {
                    trigger: { player: 'phaseZhunbeiBegin' },
                    forced: true,
                    juexingji: true,
                    filter(event, player) {
                        return !game.hasPlayer(function (current) {
                            return current.hasMark('llbz_huanhua');
                        });
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('llbz_zhimian');
                        player.gainMaxHp();
                        player.recover();
                        ('step 1');
                        var num = game.countPlayer();
                        player.draw(num);
                    },
                },
                llbz_diaoyu: {
                    trigger: {
                        global: 'phaseBefore',
                        player: 'enterGame',
                    },
                    forced: true,
                    filter(event, player) {
                        return (event.name != 'phase' || game.phaseNumber == 0) && player.hasEquipableSlot(1) && !player.getEquips('llbz_diaogan').length;
                    },
                    content() {
                        var card = game.createCard2('llbz_diaogan', 'club', 7);
                        player.$gain2(card, false);
                        player.equip(card);
                    },
                    mod: {
                        canBeGained(card, source, player) {
                            if (player.getEquips('llbz_diaogan').includes(card)) return false;
                        },
                        canBeDiscarded(card, source, player) {
                            if (player.getEquips('llbz_diaogan').includes(card)) return false;
                        },
                        canBeReplaced(card, player) {
                            if (player.getEquips('llbz_diaogan').includes(card)) return false;
                        },
                        cardDiscardable(card, player) {
                            if (player.getEquips('llbz_diaogan').includes(card)) return false;
                        },
                        cardEnabled2(card, player) {
                            if (player.getEquips('llbz_diaogan').includes(card)) return false;
                        },
                    },
                    group: 'llbz_diaoyu_blocker',
                    subSkill: {
                        blocker: {
                            trigger: { player: ['loseBefore', 'disableEquipBefore'] },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'disableEquip') return event.slots.includes('equip1');
                                var cards = player.getEquips('llbz_diaogan');
                                return event.cards.some((card) => cards.includes(card));
                            },
                            content() {
                                if (trigger.name == 'lose') {
                                    trigger.cards.removeArray(player.getEquips('llbz_diaogan'));
                                } else {
                                    while (trigger.slots.includes('equip1')) trigger.slots.remove('equip1');
                                }
                            },
                        },
                    },
                },
                llbz_liuli: {
                    trigger: { global: 'phaseZhunbeiBegin' },
                    forced: true,
                    content() {
                        'step 0';
                        var list = [];
                        if (player.countMark('llbz_liuli') >= 1) {
                            list.push('摸两张牌,减少1点瑠璃点数');
                        }
                        if (player.countCards() > 0) {
                            list.push('弃一张牌,获得1点瑠璃点数');
                        }
                        if (list.length) {
                            player
                                .chooseControl(list)
                                .set('prompt', '选择一项')
                                .set('ai', function () {
                                    if (player.countMark('llbz_liuli') <= 3) return '弃一张牌,获得1点瑠璃点数';
                                    else return '摸两张牌,减少1点瑠璃点数';
                                });
                        }
                        ('step 1');
                        if (result.control == '摸两张牌,减少1点瑠璃点数') {
                            player.draw(2);
                            player.removeMark('llbz_liuli', 1, false);
                        }
                        if (result.control == '弃一张牌,获得1点瑠璃点数') {
                            player.chooseToDiscard(1, '弃置一张牌', true);
                            player.addMark('llbz_liuli', 1, false);
                        }
                    },
                    group: ['llbz_liuli_count', 'llbz_liuli_init'],
                    marktext: '瑠',
                    intro: {
                        name: '瑠璃点数',
                        content(storage, player) {
                            return '已有' + (player.countMark('llbz_liuli') || 0) + '点数';
                        },
                    },
                    subSkill: {
                        count: {
                            trigger: { player: 'phaseUseBefore' },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('llbz_liuli') <= 2;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('llbz_liuli_discard');
                                player.addMark('llbz_liuli', 2, false);
                                ('step 1');
                                trigger.cancel();
                            },
                        },
                        discard: {
                            trigger: { player: 'phaseDiscardBefore' },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        init: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                player.addMark('llbz_liuli', 3);
                            },
                        },
                    },
                },
                llbz_diaogan_skill: {
                    group: ['llbz_diaogan_skill_damage', 'llbz_diaogan_skill_begin'],
                    enable: 'phaseUse',
                    usable: 1,
                    filterTarget(card, player, target) {
                        if (target.hasMark('llbz_diaogan_skill')) return false;
                        return player != target;
                    },
                    content() {
                        target.addMark('llbz_diaogan_skill', 1);
                    },
                    ai: {
                        order: 11,
                        result: {
                            target(player, target) {
                                if (
                                    player.countCards('h', function (card) {
                                        return (
                                            get.tag(card, 'damage') &&
                                            player.canUse(card, target, null, true) &&
                                            player.getUseValue(card) > 0 &&
                                            get.effect_use(target, card, player) > 0 &&
                                            target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                            })
                                        );
                                    })
                                )
                                    return 3 / Math.max(1, target.hp);
                                if (
                                    !player.hasUnknown() &&
                                    game.countPlayer(function (current) {
                                        return get.attitude(player, current) < 0;
                                    }) <= 1
                                ) {
                                    return -1;
                                }
                                return 0;
                            },
                        },
                        effect: {
                            player(card, player, target) {
                                if (
                                    player != target &&
                                    get.tag(card, 'damage') &&
                                    target &&
                                    target.hasMark('llbz_diaogan_skill') &&
                                    !target.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: card,
                                    })
                                )
                                    return [1, 0, 1, -2];
                            },
                        },
                        threaten: 1.6,
                    },
                    marktext: '钓',
                    intro: {
                        markcount: () => null,
                        name: '钓钩',
                        content: '已被瑠璃乃钓上',
                    },
                    subSkill: {
                        damage: {
                            forced: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.player.countMark('llbz_diaogan_skill') > 0;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        begin: {
                            forced: true,
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player.countMark('llbz_diaogan_skill') > 0;
                            },
                            content() {
                                'step 0';
                                trigger.player.removeMark('llbz_diaogan_skill', trigger.player.countMark('llbz_diaogan_skill'));
                                ('step 1');
                                var card1 = trigger.player.getCards('h').randomGet();
                                var card2 = trigger.player.getCards('e').randomGet();
                                var list = [];
                                if (card1) list.push(card1);
                                if (card2) list.push(card2);
                                if (list.length) {
                                    player.gain(list, trigger.player, 'giveAuto', 'bySelf');
                                } else trigger.player.loseHp();
                            },
                        },
                    },
                },
                llbz_diaogan_effect: {
                    mod: {
                        cardname(card) {
                            if (lib.skill.llbz_diaogan_effect.isllbz_diaogan_effect(card)) {
                                if (!card.storage.llbz_diaogan_effect) card.storage.llbz_diaogan_effect = true;
                                return 'sha';
                            }
                        },
                        cardUsable(card, player) {
                            if (card.storage && card.storage.llbz_diaogan_effect) return Infinity;
                        },
                    },
                    isllbz_diaogan_effect(card) {
                        var info = lib.card[card.name];
                        if (!info || info.type != 'equip') return false;
                        if (!info || info.subtype != 'equip1') return false;
                        return true;
                    },
                },
                llbz_zhaohuan: {
                    mod: {
                        cardEnabled2(card) {
                            if (['h', 's'].includes(get.position(card)) && card.name == 'sha') return false;
                        },
                    },
                    trigger: {
                        global: 'phaseBefore',
                        player: 'enterGame',
                    },
                    forced: true,
                    filter(event, player) {
                        return (event.name != 'phase' || game.phaseNumber == 0) && player.hasEquipableSlot(5) && !player.getEquips('lailapusi').length;
                    },
                    content() {
                        var card = game.createCard2('lailapusi', 'heart', 10);
                        player.$gain2(card, false);
                        player.equip(card);
                    },
                    group: ['llbz_zhaohuan_lose', 'llbz_huanhui'],
                    subSkill: {
                        lose: {
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.hasEquipableSlot(5) && !player.getEquips('lailapusi').length) return false;
                                for (var i of event.cards) {
                                    if (i.name == 'lailapusi' && get.position(i, true) == 'd') return true;
                                }
                                return false;
                            },
                            content() {
                                var cards = [];
                                for (var i of trigger.cards) {
                                    if (i.name == 'lailapusi' && get.position(i, true) == 'd') cards.push(i);
                                }
                                var owner = get.owner(cards[0]);
                                if (owner) player.gain(cards, 'give', owner, 'bySelf');
                                else player.$gain(cards, 'log');
                                player.equip(cards[0]);
                            },
                        },
                    },
                },
                llbz_huanhui: {
                    trigger: { global: 'equipAfter' },
                    forced: true,
                    filter(event, player) {
                        if (player.getEquips('lailapusi').length) return false;
                        if (!player.hasEquipableSlot(5)) return false;
                        if (event.player.name == 'llbz_yeyu' || event.player.name == 'llbz_jindaoshanzi' || event.player.name == 'shen_llsp_yohane' || event.player.name == 'shen_llsp_yoshiko') return false;
                        return event.card.name == 'lailapusi';
                    },
                    content() {
                        var list = [];
                        game.countPlayer(function (current) {
                            if (current != player) {
                                var ej = current.getCards('ej', 'lailapusi');
                                if (ej.length) {
                                    list.addArray(ej);
                                }
                            }
                        });
                        if (list.length) {
                            var card = list.randomGet();
                            var owner = get.owner(card);
                            if (owner) {
                                player.line(owner, 'green');
                                owner.$give(card, player);
                            } else player.$gain(card, 'log');
                            player.equip(card);
                        }
                    },
                },
                llbz_zhanbu: {
                    trigger: { global: 'phaseZhunbeiBegin' },
                    filter(event, player) {
                        return player.countCards('h') > 0;
                    },
                    check(event, player) {
                        if (get.attitude(player, _status.currentPhase) <= 0 && !player.countCards('h', { color: 'black' })) return false;
                        if (get.attitude(player, _status.currentPhase) > 0 && !player.countCards('h', { color: 'red' })) return false;
                        if (player != _status.currentPhase && player.countCards('h') <= 2) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        player.chooseToDiscard(1, 'h', '选择一张手牌弃置', true).set('ai', function (card) {
                            var target = _status.currentPhase;
                            var player = _status.event.player;
                            if (get.attitude(player, target) <= 0 && get.color(card) == 'black') return 1;
                            if (get.attitude(player, target) > 0 && get.color(card) == 'red') return 1;
                            return 0;
                        });
                        ('step 1');
                        event.card = result.cards[0];
                        var target = _status.currentPhase;
                        var next = target.judge(function (card) {
                            if (get.color(card) == 'black') return -1;
                            return 1;
                        });
                        ('step 2');
                        var target = _status.currentPhase;
                        if (result.color == 'black') {
                            event.finish();
                        } else {
                            if (get.color(event.card) == 'red') {
                                target.recover();
                                target.draw(2);
                            }
                            if (get.color(event.card) == 'black') {
                                target.loseHp();
                                target.chooseToDiscard(2, 'he', '弃置2张牌', true);
                            }
                        }
                    },
                },
                llbz_xinling: {
                    zhuSkill: true,
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        return player.hasZhuSkill('llbz_xinling', event.player);
                    },
                    content() {
                        'step 0';
                        var list = [];
                        list.push('怒吼');
                        if (
                            game.hasPlayer(function (current) {
                                return current != player && current.group == 'huan';
                            })
                        ) {
                            list.push('共鸣');
                            list.push('爆发');
                        }
                        player.chooseControl(list).set('prompt', '选择一项');
                        ('step 1');
                        event.control = result.control;
                        if (event.control == '怒吼') {
                            event.goto(4);
                        }
                        if (event.control == '共鸣' || event.control == '爆发') {
                            player.chooseTarget('选择一名幻夜势力其他角色', 1, function (card, player, target) {
                                return target.group == 'huan' && target != player;
                            });
                        }
                        ('step 2');
                        event.target1 = result.targets[0];
                        if (event.control == '共鸣') {
                            game.log(player, '发动了<心灵的共鸣>');
                            player.draw();
                            event.target1.draw();
                            event.finish();
                        }
                        if (event.control == '爆发') {
                            player.chooseTarget('选择另一名其他角色', 1, function (card, player, target) {
                                return target != player && target != event.target1;
                            });
                        }
                        ('step 3');
                        event.target2 = result.targets[0];
                        game.log(player, '发动了<心灵的爆发>');
                        event.target2.damage(1, player);
                        event.target2.damage(1, event.target1);
                        event.finish();
                        ('step 4');
                        game.log(player, '发动了<心灵的怒吼>');
                        event.num = 0;
                        event.players = game.filterPlayer();
                        ('step 5');
                        if (event.num < event.players.length) {
                            var target = event.players[event.num];
                            target.loseHp();
                            event.num++;
                            event.redo();
                        }
                    },
                },
                lailapusi_attack: {
                    enable: 'phaseUse',
                    usable: 2,
                    content() {
                        player.chooseUseTarget('###是否发动【攻击】？###视为使用一张没有距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
                    },
                    ai: {
                        order: 1,
                        result: {
                            player(player) {
                                return 1;
                            },
                        },
                    },
                },
                lailapusi_defend: {
                    enable: 'chooseToUse',
                    round: 1,
                    viewAs: { name: 'shan' },
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    prompt: '视为使用一张闪',
                },
                lailapusi_friend: {
                    trigger: { player: 'damageBefore' },
                    forced: true,
                    filter(event, player) {
                        return (event.card && event.card.name == 'juedou') || (event.card && event.card.name == 'nanman');
                    },
                    content() {
                        trigger.cancel();
                    },
                },
                llbz_hymashu: {
                    trigger: { global: 'equipAfter' },
                    forced: true,
                    filter(event, player) {
                        return event.card.name == 'lailapusi' || get.subtype(event.card) == 'equip3' || get.subtype(event.card) == 'equip4';
                    },
                    content() {
                        'step 0';
                        var num =
                            game.countPlayer(function (current) {
                                return current.countCards('e', { subtype: 'equip3' });
                            }) +
                            game.countPlayer(function (current) {
                                return current.countCards('e', { subtype: 'equip4' });
                            });
                        player.draw(num);
                        ('step 1');
                        if (trigger.card.name == 'lailapusi') {
                            event.finish();
                        } else player.addTempSkill('llbz_hymashu_extra');
                    },
                    subSkill: {
                        extra: {
                            trigger: { global: 'phaseJieshuAfter' },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                    },
                },
                llbz_hyqushi: {
                    mod: {
                        targetInRange(card, player, target) {
                            if (target.countCards('e', { subtype: 'equip3' }) + target.countCards('e', { subtype: 'equip4' }) == 0) return true;
                        },
                    },
                    trigger: { player: 'useCardToTargeted' },
                    filter(event, player) {
                        return (
                            (event.card.name == 'sha' &&
                                game.hasPlayer(function (current) {
                                    return current.getCards('e', (card) => get.subtype(card) == 'equip3').length;
                                })) ||
                            (event.card.name == 'sha' &&
                                game.hasPlayer(function (current) {
                                    return current.getCards('e', (card) => get.subtype(card) == 'equip4').length;
                                })) ||
                            (event.card.name == 'sha' &&
                                game.hasPlayer(function (current) {
                                    return current.hasSkill('lailapusi_attack');
                                }))
                        );
                    },
                    content() {
                        'step 0';
                        if (!trigger.target.hasSkill('fengyin')) {
                            trigger.target.addTempSkill('fengyin');
                        }
                        ('step 1');
                        player.chooseTarget(1, function (card, player, target) {
                            return target.countCards('e', { subtype: 'equip3' }) + target.countCards('e', { subtype: 'equip4' }) > 0 || target.hasSkill('lailapusi_attack', true);
                        });
                        ('step 2');
                        if (result.targets?.length) {
                            var target = result.targets[0];
                            player.choosePlayerCard('e', target, 1).set('filterButton', function (button) {
                                return get.subtype(button.link) == 'equip3' || get.subtype(button.link) == 'equip4' || button.link.name == 'lailapusi';
                            });
                        } else event.finish();
                        ('step 3');
                        if (result.bool) {
                            var target = trigger.target;
                            var i = trigger.card.nature;
                            player.useCard({ name: 'sha', nature: i }, result.cards, target, false);
                        } else event.finish();
                    },
                },
                llbz_hymofa: {
                    enable: 'phaseUse',
                    usable: 3,
                    filter(event, player) {
                        return player.countCards('h') > 0;
                    },
                    content() {
                        'step 0';
                        player.chooseToDiscard(1, 'h', '弃置一张手牌,根据花色获得对应的魔法(锦囊牌)', true);
                        ('step 1');
                        event.card = result.cards[0];
                        if (event.card.suit == 'heart') {
                            var card = game.createCard('llbz_recovermagic', 'heart', 2);
                            player.gain(card, false).gaintag = ['llbz_hymofa'];
                        }
                        if (event.card.suit == 'diamond') {
                            var card = game.createCard('llbz_flameattack', 'diamond', 2);
                            player.gain(card, false).gaintag = ['llbz_hymofa'];
                        }
                        if (event.card.suit == 'spade') {
                            var card = game.createCard('llbz_defendmagic', 'spade', 2);
                            player.gain(card, false).gaintag = ['llbz_hymofa'];
                        }
                        if (event.card.suit == 'club') {
                            var card = game.createCard('llbz_magicshield', 'club', 2);
                            player.gain(card, false).gaintag = ['llbz_hymofa'];
                        }
                        ('step 2');
                        player.addTempSkill('llbz_hymofa_mark', 'phaseEnd');
                    },
                    ai: {
                        skillTagFilter(player, tag, arg) {
                            return player.countCards('h') > 0;
                        },
                        order: 10,
                        result: {
                            player: 1,
                        },
                    },
                    subSkill: {
                        mark: {
                            charlotte: true,
                            onremove(player) {
                                player.removeGaintag('llbz_hymofa');
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('llbz_hymofa')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('llbz_hymofa')) {
                                        return false;
                                    }
                                },
                            },
                        },
                    },
                },
                llbz_hykanpo: {
                    group: 'llbz_hykanpo_draw',
                    mod: {
                        aiValue(player, card, num) {
                            if (card.name != 'wuxie' && get.color(card) != 'black') return;
                            var cards = player.getCards('hs', function (card) {
                                return card.name == 'wuxie' || get.color(card) == 'black';
                            });
                            cards.sort(function (a, b) {
                                return (b.name == 'wuxie' ? 1 : 2) - (a.name == 'wuxie' ? 1 : 2);
                            });
                            var geti = function () {
                                if (cards.includes(card)) {
                                    return cards.indexOf(card);
                                }
                                return cards.length;
                            };
                            if (card.name == 'wuxie') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                            return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
                        },
                        aiUseful() {
                            return lib.skill.llbz_hykanpo.mod.aiValue.apply(this, arguments);
                        },
                    },
                    position: 'hes',
                    enable: 'chooseToUse',
                    filterCard(card) {
                        return get.color(card) == 'black';
                    },
                    viewAsFilter(player) {
                        return player.countCards('hes', { color: 'black' }) > 0;
                    },
                    viewAs: {
                        name: 'wuxie',
                    },
                    prompt: '将一张黑色牌当无懈可击使用',
                    check(card) {
                        return 8 - get.value(card);
                    },
                    subSkill: {
                        draw: {
                            trigger: { player: 'useCardAfter' },
                            forced: true,
                            filter(event, player) {
                                var evt = event;
                                return evt.skill == 'llbz_hykanpo';
                            },
                            content() {
                                player.draw(2);
                                player.chooseToDiscard(true, 'he', '看破:请弃置一张牌');
                            },
                        },
                    },
                },
                llbz_renshu: {
                    trigger: { player: 'useCardToTargeted' },
                    forced: true,
                    shaRelated: true,
                    filter(event, player) {
                        return event.isFirstTarget && event.card.name == 'sha' && player.hasEmptySlot(1);
                    },
                    content() {
                        trigger.parent.effectCount++;
                    },
                },
                llbz_kaidi: {
                    mod: {
                        targetInRange(card, player, target) {
                            if (target.hasMark('llbz_kaidi_marked')) return true;
                        },
                        cardUsableTarget(card, player, target) {
                            if (target.hasMark('llbz_kaidi_marked')) return true;
                        },
                    },
                    trigger: { player: 'showCharacterAfter' },
                    hiddenSkill: true,
                    logTarget() {
                        return _status.currentPhase;
                    },
                    filter(event, player) {
                        var target = _status.currentPhase;
                        return target && target != player && target.isAlive();
                    },
                    check(event, player) {
                        return get.attitude(player, _status.currentPhase) < 0;
                    },
                    content() {
                        _status.currentPhase.addTempSkill('llbz_kaidi_marked', { player: 'phaseBegin' });
                        _status.currentPhase.addMark('llbz_kaidi_marked', 1, false);
                    },
                    ai: {
                        expose: 0.2,
                    },
                    subSkill: {
                        marked: {
                            charlotte: true,
                            intro: {
                                markcount: () => null,
                                content: '已被凯蒂标记',
                            },
                        },
                    },
                },
                llbz_shoulie: {
                    group: 'llbz_shoulie_mark',
                    trigger: { global: 'dieAfter' },
                    forced: true,
                    content() {
                        'step 0';
                        player.draw(3).gaintag = ['llbz_shoulie'];
                        player.addTempSkill('llbz_shoulie_effect');
                        if (player == trigger.source) {
                            player.chooseTarget('狩猎:选择一名没有<凯蒂>标记的其他角色获得标记', 1, function (card, target, player) {
                                return target != player && !target.hasMark('llbz_kaidi_marked');
                            });
                        } else event.finish();
                        ('step 1');
                        if (result.targets?.length) {
                            event.target = result.targets[0];
                            var target = event.target;
                            target.addTempSkill('llbz_kaidi_marked', { player: 'phaseBegin' });
                            target.addMark('llbz_kaidi_marked', 1, false);
                        } else event.finish();
                    },
                    subSkill: {
                        effect: {
                            trigger: { global: 'phaseEnd' },
                            forced: true,
                            content() {
                                game.log(player, '已隐匿');
                                lib.skill['llbz_shoulie_effect'].Concealment(player);
                            },
                            Concealment(player) {
                                player.storage.rawHp = player.hp;
                                player.storage.rawMaxHp = player.maxHp;
                                if (player.skills.length) {
                                    if (!player.hiddenSkills) {
                                        player.hiddenSkills = [];
                                    }
                                    for (const i of player.skills.slice()) {
                                        player.removeSkill(i);
                                        player.hiddenSkills.add(i);
                                    }
                                }
                                player.classList.add('unseen');
                                player.name = 'unknown';
                                player.sex = 'male';
                                player.storage.nohp = true;
                                player.node.hp.hide();
                                player.addSkill('g_hidden_ai');
                                player.hp = 1;
                                player.maxHp = 1;
                                player.update();
                            },
                        },
                        mark: {
                            charlotte: true,
                            onremove(player) {
                                player.removeGaintag('llbz_shoulie');
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('llbz_shoulie')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('llbz_shoulie')) {
                                        return false;
                                    }
                                },
                            },
                        },
                    },
                },
                llbz_mowang: {
                    audio: 'ext:拉拉:2',
                    trigger: { player: 'useCardToPlayered' },
                    forced: true,
                    filter(event, player) {
                        return event.card.name != 'tao' && event.target !== player && event.targets.length == 1 && event.cards.length == 1 && event.getParent(2).name != 'llbz_mowang_timeout' && get.position(event.cards[0], true) == 'o' && event.card.name == event.cards[0].name && !player.storage.llbz_mowang;
                    },
                    content() {
                        var target = trigger.target;
                        trigger.targets.remove(target);
                        trigger.parent.triggeredTargets2.remove(target);
                        trigger.untrigger();
                        var card = trigger.cards[0];
                        target.addToExpansion(card, 'gain2').gaintag.add('llbz_mowang');
                        target.addTempSkill('llbz_mowang_timeout', { player: 'phaseEnd' });
                        target.addTempSkill('llbz_mowang_effect', { player: 'phaseEnd' });
                        if (!target.storage.llbz_mowang) target.storage.llbz_mowang = [[], [], []];
                        target.storage.llbz_mowang[0].push(card);
                        target.storage.llbz_mowang[1].push(trigger.player);
                        target.storage.llbz_mowang[2].push(card.name);
                    },
                    onremove(player, skill) {
                        var cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                        delete player.storage[skill];
                    },
                    intro: {
                        markcount(storage) {
                            if (!storage) return 0;
                            return storage[0].length;
                        },
                        mark(dialog, storage, player) {
                            if (!storage) return;
                            dialog.addAuto(storage[0]);
                            dialog.addText(get.translation(storage[1]));
                        },
                        onunmark(storage, player) {
                            player.storage.llbz_mowang = [[], [], []];
                        },
                    },
                    subSkill: {
                        timeout: {
                            audio: 'ext:拉拉:2',
                            charlotte: true,
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.storage.llbz_mowang && player.storage.llbz_mowang[0].length; //=Math.max(1,player.getDamagedHp());
                            },
                            content() {
                                var list = player.storage.llbz_mowang,
                                    card = list[0].shift(),
                                    source = list[1].shift();
                                if (player.getExpansions('llbz_mowang').includes(card)) {
                                    if (source && source.isIn() && source.canUse(card, player, false)) source.useCard(card, player, false);
                                    else player.loseToDiscardpile(card);
                                }
                                if (list[0].length) event.redo();
                            },
                        },
                        effect: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && player.storage.llbz_mowang && player.storage.llbz_mowang[2].includes(event.card.name);
                            },
                            content() {
                                trigger.directHit.add(player);
                            },
                        },
                    },
                },
                llbz_qichang: {
                    mod: {
                        cardUsableTarget(card, player, target) {
                            if (target.inRange(player) || target.hasSkill('llbz_mowang_effect')) return true;
                        },
                    },
                    trigger: {
                        player: ['useCard', 'respond'],
                    },
                    forced: true,
                    filter(event, player) {
                        if (player == _status.currentPhase) return false;
                        if (!_status.currentPhase.inRange(player)) return false;
                        return true;
                    },
                    content() {
                        player.draw();
                    },
                },
                llbz_jingling: {
                    forced: true,
                    mod: {
                        targetInRange(card, player, target) {
                            if (target.countMark('llbz_jingling') > 0) return true;
                        },
                    },
                    trigger: { global: 'roundStart' },
                    filter(event, player) {
                        return player.countMark('llbz_jingling') < 3;
                    },
                    content() {
                        var num = 3 - player.countMark('llbz_jingling');
                        player.addMark('llbz_jingling', num, false);
                    },
                    marktext: '精',
                    intro: {
                        name: '佩拉皮',
                        content: '存在#只精灵',
                    },
                    group: ['llbz_jingling_defend', 'llbz_jingling_attack', 'llbz_jingling_clear', 'llbz_jingling_llbz_heti'],
                    subSkill: {
                        defend: {
                            trigger: { player: 'damageBefore' },
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('llbz_jingling') > 0;
                            },
                            content() {
                                'step 0';
                                player.removeMark('llbz_jingling', 1, false);
                                ('step 1');
                                trigger.cancel();
                            },
                        },
                        attack: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('llbz_jingling') > 0;
                            },
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return !target.hasMark('llbz_jingling') && target != player;
                            },
                            content() {
                                player.removeMark('llbz_jingling', 1, false);
                                target.addMark('llbz_jingling', 1, false);
                            },
                        },
                        clear: {
                            trigger: { global: 'phaseEnd' },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase.hasMark('llbz_jingling') && _status.currentPhase != player;
                            },
                            content() {
                                var target = _status.currentPhase;
                                var num = target.countMark('llbz_jingling');
                                target.removeMark('llbz_jingling', num, false);
                            },
                        },
                        llbz_heti: {
                            trigger: { player: 'phaseUseBegin' },
                            filter(event, player) {
                                return player.countMark('llbz_jingling') >= 3;
                            },
                            content() {
                                'step 0';
                                player.removeMark('llbz_jingling', 3, false);
                                ('step 1');
                                player.recover();
                                ('step 2');
                                player.addTempSkill('llbz_heti_block');
                                player.addTempSkill('llbz_heti_effect');
                            },
                        },
                    },
                },
                llbz_heti_block: {
                    init(player, skill) {
                        player.addSkillBlocker(skill);
                    },
                    onremove(player, skill) {
                        player.removeSkillBlocker(skill);
                    },
                    charlotte: true,
                    skillBlocker(skill, player) {
                        return skill == 'llbz_mowang';
                    },
                    mark: true,
                    marktext: '合',
                    intro: {
                        content(storage, player, skill) {
                            var list = player.getSkills(null, false, false).filter(function (i) {
                                return lib.skill.llbz_heti_block.skillBlocker(i, player);
                            });
                            if (list.length) return '<br><li>失效技能:' + get.translation(list);
                            return '无失效技能';
                        },
                    },
                },
                llbz_heti_effect: {
                    mod: {
                        targetInRange() {
                            return true;
                        },
                        cardUsableTarget() {
                            return true;
                        },
                    },
                    trigger: { player: 'useCard' },
                    forced: true,
                    content() {
                        trigger.directHit.addArray(game.players);
                    },
                },
                llbz_xinshi: {
                    trigger: { global: 'phaseEnd' },
                    round: 2,
                    filter(event, player) {
                        return _status.currentPhase != player;
                    },
                    content() {
                        'step 0';
                        if (game.countPlayer() > 2) {
                            player
                                .chooseTarget(true, '请选择一名要更换座次的角色,将自己移动到该角色的上家位置', function (card, player, target) {
                                    return target != player && target != player.next;
                                })
                                .set('ai', function (target) {
                                    var player = _status.event.player;
                                    var current = _status.currentPhase.next;
                                    var max = 20,
                                        att = 0;
                                    while (max > 0) {
                                        max--;
                                        if (current == target) return att;
                                        att -= get.attitude(player, current);
                                        current = current.next;
                                    }
                                    return att;
                                });
                        } else event.finish();
                        ('step 1');
                        if (result.targets?.length) {
                            var target = result.targets[0];
                            game.broadcastAll(
                                function (target1, target2) {
                                    game.swapSeat(target1, target2, null, true);
                                },
                                player,
                                target
                            );
                        }
                        ('step 2');
                        player.addMark('llbz_xinshi', 1, false);
                        player.phase('nodelay');
                    },
                },
                llbz_dapao: {
                    enable: 'phaseUse',
                    round: 1,
                    selectTarget: 1,
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    content() {
                        player.addMark('llbz_xinshi', 1, false);
                        target.loseHp(2);
                        target.addTempSkill('llbz_dapao_effect', { player: 'phaseBegin' });
                    },
                    subSkill: {
                        effect: {
                            trigger: { global: 'phaseAfter' },
                            forced: true,
                            content() {
                                player.phase('nodelay');
                                player.removeSkill('llbz_dapao_effect');
                            },
                            mark: true,
                            marktext: '炮',
                            intro: {
                                markcount: () => null,
                                content: '即将执行一个回合',
                            },
                        },
                    },
                },
                llbz_feiyue: {
                    trigger: { global: 'phaseBegin' },
                    forced: true,
                    derivation: 'llbz_songxin',
                    juexingji: true,
                    filter(event, player) {
                        return player.countMark('llbz_xinshi') > 2;
                    },
                    content() {
                        player.awakenSkill('llbz_feiyue');
                        player.gainMaxHp();
                        player.recover();
                        player.addSkills('llbz_songxin');
                    },
                },
                llbz_songxin: {
                    trigger: { global: 'phaseUseBegin' },
                    filter(event, player) {
                        return event.player != player;
                    },
                    check(event, player) {
                        if (get.attitude(player, event.player) < 5) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        player.draw(2);
                        ('step 1');
                        var cards = player.getCards('he');
                        if (!cards.length) event.finish();
                        else if (cards.length <= 2) event._result = { cards: cards };
                        else
                            player.chooseCard(2, 'he', true, '交给' + get.translation(trigger.player) + '两张牌').set('ai', function (card) {
                                if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return -1;
                                if (get.tag(card, 'damage')) return 1;
                                if (get.type(card) == 'equip') return 1;
                                return 0;
                            });
                        ('step 2');
                        player.give(result.cards, trigger.player);
                    },
                    ai: {
                        threaten: 1.1,
                        expose: 0.3,
                    },
                },
                llbz_jinmi: {
                    group: 'llbz_jinmi_init',
                    trigger: { global: ['phaseBegin', 'phaseEnd'] },
                    forced: true,
                    filter(event, player) {
                        return player.countMark('llbz_jinmi_mark') >= 500;
                    },
                    content() {
                        var winners = player.getFriends();
                        game.over(player == game.me || winners.includes(game.me));
                    },
                    global: ['llbz_jinmi_mark', 'llbz_jinmi_damage', 'llbz_jinmi_trick'],
                    subSkill: {
                        init: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            logTarget: () => game.filterPlayer(),
                            content() {
                                'step 0';
                                var targets = game.filterPlayer().sortBySeat(player.next);
                                event.targets = targets;
                                event.num = 0;
                                ('step 1');
                                var target = event.targets[num];
                                target.addMark('llbz_jinmi_mark', 150, false);
                                event.num++;
                                if (event.num < targets.length) event.redo();
                            },
                        },
                        mark: {
                            charlotte: true,
                            marktext: '钱',
                            intro: {
                                name: '金币',
                                content: '已有#个金币',
                            },
                        },
                        damage: {
                            trigger: { source: 'damageBegin2' },
                            forced: true,
                            filter(event, player) {
                                if (
                                    game.countPlayer(function (current) {
                                        return current.countMark('llbz_jinmi_mark') > 0;
                                    }) < 1
                                )
                                    return false;
                                return event.target !== player && event.num > 0;
                            },
                            content() {
                                if (player.countMark('llbz_jinmi_mark') < 10 * trigger.num) {
                                    trigger.cancel();
                                } else {
                                    var target = trigger.player;
                                    player.removeMark('llbz_jinmi_mark', 10 * trigger.num, false);
                                    target.addMark('llbz_jinmi_mark', 10 * trigger.num, false);
                                }
                            },
                        },
                        trick: {
                            trigger: { player: 'useCardToTargeted' },
                            forced: true,
                            filter(event, player) {
                                if (
                                    game.countPlayer(function (current) {
                                        return current.countMark('llbz_jinmi_mark') > 0;
                                    }) < 1
                                )
                                    return false;
                                return event.card && event.target !== player && get.type(event.card) == 'trick' && !get.tag(event.card, 'damage') && event.targets.length == 1;
                            },
                            content() {
                                if (player.countMark('llbz_jinmi_mark') < 10) {
                                    trigger.targets.remove(trigger.target);
                                    trigger.parent.triggeredTargets2.remove(trigger.target);
                                    trigger.untrigger();
                                } else {
                                    var target = trigger.target;
                                    player.removeMark('llbz_jinmi_mark', 10, false);
                                    target.addMark('llbz_jinmi_mark', 10, false);
                                }
                            },
                        },
                    },
                },
                llbz_gouwu: {
                    enable: 'phaseUse',
                    usable: 2,
                    filter(event, player) {
                        return player.countMark('llbz_jinmi_mark') > 5;
                    },
                    content() {
                        'step 0';
                        var list = [];
                        if (!player.hasSkill('llbz_gouwu_basic') && player.countMark('llbz_jinmi_mark') > 5) {
                            list.push('基本牌');
                        }
                        if (!player.hasSkill('llbz_gouwu_equip') && player.countMark('llbz_jinmi_mark') > 10) {
                            list.push('装备牌');
                        }
                        if (!player.hasSkill('llbz_gouwu_trick') && player.countMark('llbz_jinmi_mark') > 5) {
                            list.push('锦囊牌');
                        }
                        if (list.length) {
                            player.chooseControl(list).set('prompt', '选择购买一张牌');
                        }
                        ('step 1');
                        if (result.control == '基本牌') {
                            player.addTempSkill('llbz_gouwu_basic');
                            var list = [];
                            for (var name of lib.inpile) {
                                if (get.type(name) != 'basic') continue;
                                list.push(['基本', '', name]);
                                if (name == 'sha') {
                                    for (var nature of lib.inpile_nature) {
                                        list.push(['基本', '', name, nature]);
                                    }
                                }
                            }
                            if (list.length) {
                                player.chooseButton(['选择从牌堆购买的基本牌', [list, 'vcard']]).set('ai', (button) => {
                                    return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                });
                            } else event.finish();
                        } else if (result.control == '装备牌') {
                            event.goto(3);
                        } else if (result.control == '锦囊牌') {
                            player.addTempSkill('llbz_gouwu_trick');
                            var list = [];
                            for (var name of lib.inpile) {
                                if (get.type2(name) == 'trick') list.push(['锦囊', '', name]);
                            }
                            player.chooseButton(['选择从牌堆购买的锦囊牌', [list, 'vcard']]);
                        } else event.finish();
                        ('step 2');
                        if (result.links?.length) {
                            var name = result.links[0][2];
                            var cards = [];
                            var card = get.cardPile2(function (card) {
                                return card.name == name;
                            });
                            if (card) cards.push(card);
                            if (cards.length) player.gain(cards, 'gain2');
                            player.removeMark('llbz_jinmi_mark', 5, false);
                            event.finish();
                        } else event.finish();
                        ('step 3');
                        player.addTempSkill('llbz_gouwu_equip');
                        var list = ['equip1', 'equip2', 'equip3', 'equip4'];
                        player.chooseControl(list).set('prompt', '选择从牌堆购买的装备类型牌');
                        ('step 4');
                        if (result.control) {
                            var cards = [];
                            var card = get.cardPile2(function (card) {
                                return get.subtype(card) == result.control;
                            });
                            if (card) cards.push(card);
                            if (cards.length) player.gain(cards, 'gain2');
                            player.removeMark('llbz_jinmi_mark', 10, false);
                        }
                    },
                },
                llbz_gouwu_basic: {
                    charlotte: true,
                },
                llbz_gouwu_equip: {
                    charlotte: true,
                },
                llbz_gouwu_trick: {
                    charlotte: true,
                },
                llbz_zhuanqian: {
                    group: 'llbz_zhuanqian_skip',
                    enable: 'phaseUse',
                    filter(event, player) {
                        if (player.hasSkill('llbz_zhuanqian_give') && player.hasSkill('llbz_zhuanqian_recover')) return false;
                        return true;
                    },
                    selectTarget: 1,
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    content() {
                        'step 0';
                        var list = [];
                        if (!player.hasSkill('llbz_zhuanqian_give')) {
                            list.push('交给其2张牌');
                        }
                        if (!player.hasSkill('llbz_zhuanqian_recover') && target.isDamaged()) {
                            list.push('令其回复1点体力');
                        }
                        if (list.length) {
                            player.chooseControl(list).set('prompt', '选择一项');
                        }
                        ('step 1');
                        if (result.control == '交给其2张牌') {
                            player.addTempSkill('llbz_zhuanqian_give');
                            player.chooseCard(2, 'he', true, '交给' + get.translation(target) + '两张牌');
                        }
                        if (result.control == '令其回复1点体力') {
                            player.addTempSkill('llbz_zhuanqian_recover');
                            target.recover();
                            player.addMark('llbz_jinmi_mark', 10, false);
                            target.removeMark('llbz_jinmi_mark', 10, false);
                            event.goto(3);
                        }
                        ('step 2');
                        if (result.bool) {
                            player.give(result.cards, target);
                            player.addMark('llbz_jinmi_mark', 10, false);
                            target.removeMark('llbz_jinmi_mark', 10, false);
                        } else event.finish();
                        ('step 3');
                        if (target.group == 'xing') {
                            player.addMark('llbz_jinmi_mark', 10, false);
                        }
                    },
                    subSkill: {
                        skip: {
                            trigger: { player: ['phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore'] },
                            usable: 1,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                if (trigger.name == 'phaseJudge') {
                                    player.addMark('llbz_jinmi_mark', 5, false);
                                }
                                if (trigger.name == 'phaseDraw') {
                                    player.addMark('llbz_jinmi_mark', 10, false);
                                }
                                if (trigger.name == 'phaseUse') {
                                    player.addMark('llbz_jinmi_mark', 15, false);
                                    player.addTempSkill('llbz_zhuanqian_discard');
                                }
                            },
                            prompt(event, player) {
                                if (event.name == 'phaseJudge') {
                                    return '是否跳过判定阶段';
                                }
                                if (event.name == 'phaseDraw') {
                                    return '是否跳过摸牌阶段';
                                }
                                if (event.name == 'phaseUse') {
                                    return '是否跳过出牌和弃牌阶段';
                                }
                            },
                        },
                        discard: {
                            trigger: { player: 'phaseDiscardBefore' },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                    },
                },
                llbz_zhuanqian_give: {
                    charlotte: true,
                },
                llbz_zhuanqian_recover: {
                    charlotte: true,
                },
                llbz_biaoyan: {
                    group: 'llbz_biaoyan_damage',
                    enable: ['chooseToUse', 'chooseToRespond'],
                    filter(event, player) {
                        if (!player.countCards('hes')) return false;
                        if (player.hasSkill('llbz_biaoyan_blocker')) return false;
                        for (var name of lib.inpile) {
                            if (get.type2(name) != 'basic') continue;
                            var card = { name: name };
                            if (event.filterCard(card, player, event)) return true;
                            if (name == 'sha') {
                                for (var nature of lib.inpile_nature) {
                                    card.nature = nature;
                                    if (event.filterCard(card, player, event)) return true;
                                }
                            }
                        }
                        return false;
                    },
                    position: 'hes',
                    prompt: '将任意基本牌当任意基本牌使用或打出',
                    chooseButton: {
                        dialog(event, player) {
                            var list = [];
                            for (var name of lib.inpile) {
                                if (name == 'sha') {
                                    if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                    for (var nature of lib.inpile_nature) {
                                        if (event.filterCard && event.filterCard({ name: name, nature: nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                    }
                                } else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                            }
                            var dialog = ui.create.dialog('表演', [list, 'vcard']);
                            dialog.direct = true;
                            return dialog;
                        },
                        filter(button, player) {
                            return _status.event.parent.filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.parent);
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
                                viewAs: { name: links[0][2], nature: links[0][3], storage: { llbz_biaoyan: true } },
                                precontent() {
                                    player.addMark('llbz_biaoyan', 1, false);
                                    player.draw();
                                    var card = event.result.card;
                                    if (card.name != 'sha' || get.nature(card)) {
                                        player.addTempSkill('llbz_biaoyan_blocker');
                                    }
                                },
                            };
                        },
                        prompt(links, player) {
                            return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                        },
                    },
                    hiddenCard(player, name) {
                        if (!lib.inpile.includes(name)) return false;
                        var type = get.type2(name);
                        return type == 'basic' && player.countCards('hes') > 0;
                    },
                    ai: {
                        fireAttack: true,
                        respondSha: true,
                        respondShan: true,
                        skillTagFilter(player) {
                            if (!player.countCards('hes') || player.hasSkill('llbz_biaoyan_blocker')) return false;
                        },
                        order: 1,
                        result: {
                            player(player) {
                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                return 1;
                            },
                        },
                    },
                    marktext: '演',
                    intro: {
                        name: '表演',
                        content: '已发动#次',
                    },
                    subSkill: {
                        damage: {
                            trigger: { source: 'damageSource' },
                            forced: true,
                            filter(event, player) {
                                return event.card && !event.card.storage && event.card.storage.llbz_biaoyan;
                            },
                            content() {
                                player.addTempSkill('llbz_biaoyan_blocker');
                            },
                        },
                        blocker: {
                            charlotte: true,
                            mark: true,
                            marktext: '演',
                            intro: {
                                markcount: () => null,
                                content: '本回合<表演>失效.',
                            },
                        },
                    },
                },
                llbz_yanchu: {
                    trigger: { player: 'phaseZhunbeiBegin' },
                    limited: true,
                    filter(event, player) {
                        return player.countMark('llbz_biaoyan') > 0;
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('llbz_yanchu');
                        if (player.countMark('llbz_biaoyan') > 0) {
                            var num = player.countMark('llbz_biaoyan');
                            player.draw(num);
                            player.removeMark('llbz_biaoyan', num, false);
                        }
                        ('step 1');
                        var list;
                        if (_status.characterlist) {
                            list = [];
                            for (var i = 0; i < _status.characterlist.length; i++) {
                                var name = _status.characterlist[i];
                                if (lib.character[name][1] == 'miu' || lib.character[name][1] == 'shui' || lib.character[name][1] == 'xing') list.push(name);
                            }
                        } else if (_status.connectMode) {
                            list = get.charactersOL(function (i) {
                                return lib.character[name][1] == 'miu' || lib.character[name][1] == 'shui' || lib.character[name][1] == 'xing';
                            });
                        } else {
                            list = get.gainableCharacters(function (info) {
                                return info[1] == 'miu' || info[1] == 'shui' || info[1] == 'xing';
                            });
                        }
                        var players = game.players.concat(game.dead);
                        for (var i = 0; i < players.length; i++) {
                            list.remove(players[i].name);
                            list.remove(players[i].name1);
                            list.remove(players[i].name2);
                        }
                        list = list.randomGets(Math.max(4, game.countPlayer()));
                        var skills = [];
                        for (var i of list) {
                            skills.addArray(
                                (lib.character[i][3] || []).filter(function (skill) {
                                    if (player.hasSkill(skill)) return false;
                                    var info = get.info(skill);
                                    return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill && !info.unique;
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
                            var dialog = ui.create.dialog('请选择获得至多两个技能', [list, 'character'], 'hidden');
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
                            for (var i of map.skills) player.addSkills(i);
                        }
                        ('step 3');
                        if (player.isMinHp()) {
                            player.recover();
                            player.restoreSkill('llbz_yanchu');
                        }
                    },
                },
                llbz_keyan: {
                    trigger: { global: 'useCard' },
                    filter(event, player) {
                        if (get.type(event.card) != 'equip') return false;
                        return (event.player = _status.currentPhase);
                    },
                    content() {
                        'step 0';
                        player.draw();
                        ('step 1');
                        player.chooseControl('令其摸一张牌', 'cancel', true).set('ai', function () {
                            var target = trigger.player;
                            if (get.attitude(player, target) < 0) return 'cancel';
                            return '令其摸一张牌';
                        });
                        ('step 2');
                        if (result.control == '令其摸一张牌') {
                            trigger.player.draw();
                        } else event.finish();
                    },
                },
                llbz_ceshi: {
                    enable: 'phaseUse',
                    filter(event, player) {
                        return player.countCards('he', { type: 'equip' }) > 0;
                    },
                    filterCard(card) {
                        return get.type(card) == 'equip';
                    },
                    position: 'he',
                    check(card) {
                        var player = _status.currentPhase;
                        if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                            return 11 - get.equipValue(card);
                        }
                        return 6 - get.value(card);
                    },
                    filterTarget(card, player, target) {
                        if (target.isMin()) return false;
                        return player != target && target.canEquip(card, true);
                    },
                    content() {
                        target.equip(cards[0]);
                        player.draw();
                    },
                    discard: false,
                    lose: false,
                    prepare(cards, player, targets) {
                        player.$give(cards, targets[0], false);
                    },
                    ai: {
                        basic: {
                            order: 10,
                        },
                        result: {
                            target(player, target) {
                                var card = ui.selected.cards[0];
                                if (card) return get.effect(target, card, target, target);
                                return 0;
                            },
                        },
                        threaten: 1.35,
                    },
                },
                llbz_shouji: {
                    trigger: {
                        global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
                    },
                    forced: true,
                    filter(event, player) {
                        if (_status.currentPhase == player) return false;
                        if (event.player == player) return false;
                        if (event.type == 'discard') return true;
                        if (!event.cards) return false;
                        var cards = event.cards.filter((i) => get.type(i) == 'equip' && get.position(i, true) == 'd');
                        return cards.length;
                    },
                    content() {
                        var cards = trigger.cards.filter((i) => get.type(i) == 'equip' && get.position(i, true) == 'd');
                        for (var i = 0; i < cards.length; i++) {
                            var owner = get.owner(cards[i]);
                            if (owner) player.gain(cards[i], 'give', owner, 'bySelf');
                            else {
                                player.$gain(cards[i], 'log');
                                player.gain(cards[i], 'give');
                            }
                            if (trigger.player != undefined) {
                                trigger.player.draw();
                            }
                        }
                    },
                },
                llbz_chongni: {
                    enable: 'phaseUse',
                    filterCard: true,
                    usable: 1,
                    position: 'he',
                    filter(event, player) {
                        return player.countCards('he') > 0;
                    },
                    check(card) {
                        var player = _status.event.player;
                        if (get.position(card) == 'e') {
                            var subtype = get.subtype(card);
                            if (
                                !game.hasPlayer(function (current) {
                                    return current != player && current.hp != player.hp && get.attitude(player, current) > 0 && !current.countCards('e', { subtype: subtype });
                                })
                            ) {
                                return 0;
                            }
                            if (player.countCards('h', { subtype: subtype })) return 20 - get.value(card);
                            return 10 - get.value(card);
                        } else {
                            if (player.countCards('e')) return 0;
                            if (player.countCards('h', { type: 'equip' })) return 0;
                            return 8 - get.value(card);
                        }
                    },
                    filterTarget(card, player, target) {
                        var card = ui.selected.cards[0];
                        if (!card) return false;
                        if (get.position(card) == 'e' && !target.canEquip(card)) return false;
                        return target != player;
                    },
                    discard: false,
                    delay: false,
                    lose: false,
                    content() {
                        'step 0';
                        if (get.position(cards[0]) == 'e') event._result = { index: 0 };
                        else if (get.type(cards[0]) != 'equip' || !target.canEquip(cards[0])) event._result = { index: 1 };
                        else
                            player.chooseControl().set('choiceList', ['将' + get.translation(cards[0]) + '置入' + get.translation(target) + '的装备区', '弃置' + get.translation(cards[0])]).ai = function () {
                                return 1;
                            };
                        ('step 1');
                        if (result.index == 0) {
                            player.$give(cards, target, false);
                            target.equip(cards[0]);
                        } else {
                            player.discard(cards);
                        }
                        ('step 2');
                        if (player.hp > target.hp) {
                            player.draw();
                            if (target.isDamaged()) target.recover();
                        } else if (player.hp < target.hp) {
                            target.draw();
                            if (player.isDamaged()) player.recover();
                        }
                        ('step 3');
                        if (target.group == 'xing') {
                            if (target.name == 'ruocaisiji' || target.name2 == 'ruocaisiji') {
                                var cards = [];
                                var card = get.cardPile2(function (card) {
                                    return get.type(card) == 'equip';
                                });
                                if (card) cards.push(card);
                                if (cards.length) target.gain(cards, 'gain2');
                            } else target.draw();
                        }
                    },
                    ai: {
                        order() {
                            var player = _status.event.player;
                            var es = player.getCards('e');
                            for (var i = 0; i < es.length; i++) {
                                if (player.countCards('h', { subtype: get.subtype(es[i]) })) return 10;
                            }
                            return 2;
                        },
                        result: {
                            target(player, target) {
                                var goon = function () {
                                    var es = player.getCards('e');
                                    for (var i = 0; i < es.length; i++) {
                                        if (player.countCards('h', { subtype: get.subtype(es[i]) })) return true;
                                    }
                                    return false;
                                };
                                if (player.hp < target.hp) {
                                    if (player.isHealthy()) {
                                        if (!player.needsToDiscard(1) || goon()) return 0.1;
                                        return 0;
                                    }
                                    return 1.5;
                                }
                                if (player.hp > target.hp) {
                                    if (target.isHealthy()) {
                                        if (!player.needsToDiscard(1) || goon()) return 0.1;
                                        return 0;
                                    }
                                    return 1;
                                }
                                return 0;
                            },
                        },
                    },
                },
                llbz_xiaoji: {
                    trigger: {
                        player: 'loseAfter',
                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                    },
                    forced: true,
                    filter(event, player) {
                        var evt = event.getl(player);
                        return evt && evt.player == player && evt.es && evt.es.length;
                    },
                    content() {
                        'step 0';
                        event.count = trigger.getl(player).es.length;
                        ('step 1');
                        event.count--;
                        player.draw(2);
                        player
                            .chooseTarget('是否弃置场上的一张牌？', (card, player, target) => {
                                return target.countDiscardableCards(player, 'ej');
                            })
                            .set('ai', (target) => {
                                var player = _status.event.player;
                                var att = get.attitude(player, target);
                                if (
                                    att > 0 &&
                                    (target.countCards('j') > 0 ||
                                        target.countCards('e', function (card) {
                                            return get.value(card, target) < 0;
                                        }))
                                )
                                    return 2;
                                if (att < 0 && target.countCards('e') > 0 && !target.hasSkillTag('noe')) return -1;
                                return 0;
                            });
                        ('step 2');
                        if (result.targets?.length) {
                            player.discardPlayerCard(result.targets[0], 'ej', true);
                        }
                        ('step 3');
                        if (_status.dying.length) event.goto(5);
                        else
                            player.chooseTarget('选择一名角色造成1点伤害', 1).ai = function (target) {
                                var player = _status.event.player;
                                return get.damageEffect(target, player, player);
                            };
                        ('step 4');
                        if (result.targets?.length) {
                            result.targets[0].damage();
                        }
                        ('step 5');
                        if (event.count > 0) {
                            event.goto(1);
                        }
                    },
                    ai: {
                        noe: true,
                        reverseEquip: true,
                        effect: {
                            target(card, player, target, current) {
                                if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                            },
                        },
                    },
                },
                llbz_jiekong: {
                    group: 'llbz_jiekong_init',
                    trigger: { global: ['damageEnd', 'recoverEnd'] },
                    forced: true,
                    filter(event, player) {
                        if (!event.player.hasSkill('llbz_jiekong_effect') || event.num <= 0) return false;
                        if (event.name == 'damage') return true;
                        return player.isDamaged();
                    },
                    logTarget: 'player',
                    content() {
                        player[trigger.name](trigger.num, 'nosource');
                    },
                    subSkill: {
                        init: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.name == 'llbz_guizhongxiamei' || current.name2 == 'llbz_guizhongxiamei';
                                    })
                                )
                                    return false;
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            logTarget: () => game.filterPlayer(),
                            content() {
                                'step 0';
                                var targets = game.filterPlayer().sortBySeat(player.next);
                                for (var target of targets) {
                                    if (target.name == 'llbz_guizhongxiamei' || target.name2 == 'llbz_guizhongxiamei') {
                                        target.gainMaxHp();
                                        target.recover();
                                        target.addSkill('llbz_jiekong_effect');
                                    }
                                }
                            },
                        },
                        effect: {
                            charlotte: true,
                            mark: true,
                            marktext: '姐',
                            intro: {
                                markcount: () => null,
                                name: '姐控',
                            },
                        },
                    },
                },
                llbz_lixing: {
                    group: ['llbz_lixing_draw', 'llbz_lixing_recover'],
                    trigger: {
                        player: 'damageBefore',
                        source: 'damageBefore',
                    },
                    forced: true,
                    filter(event, player) {
                        if (event.source == event.player) return false;
                        if (event.player == player) {
                            return event.source && event.source.isIn();
                        }
                        return true;
                    },
                    content() {
                        trigger.cancel();
                        trigger.player.loseHp(trigger.num).set('llbz_lixing' + player.playerid, true);
                    },
                    ai: {
                        jueqing: true,
                    },
                    subSkill: {
                        draw: {
                            trigger: { player: 'loseHpAfter' },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.num > 0 && event['llbz_lixing' + player.playerid];
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                event.num--;
                                var num = player.maxHp - player.hp;
                                player.draw(Math.max(2, num));
                                ('step 2');
                                if (event.num > 0) event.goto(1);
                            },
                        },
                        /*check:{
                            trigger:{global:'loseHpBefore'},
                            forced:true,
                            popup:false,
                            filter:function(event,player){
                                if(event.player==player)return false;
                                return event.getParent(1)=='llbz_lixing';
                            },
                            content:function(){
                                trigger['llbz_lixing_check'+player.playerid]=true;
                            }
                        },*/
                        recover: {
                            trigger: { global: 'loseHpAfter' },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.num > 0 && event['llbz_lixing' + player.playerid];
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                event.num--;
                                if (player.isDamaged()) {
                                    player.recover();
                                } else player.draw();
                                ('step 2');
                                if (event.num > 0) event.goto(1);
                            },
                        },
                    },
                },
                llbz_chuxin: {
                    trigger: {
                        source: 'damageSource',
                    },
                    filter(event, player) {
                        return event.target != player;
                    },
                    forced: true,
                    content() {
                        player.gainMaxHp();
                        player.recover(trigger.num);
                    },
                },
                llbz_haosheng: {
                    trigger: { source: 'damageBegin1' },
                    forced: true,
                    filter(event, player) {
                        return event.player.hp < player.hp;
                    },
                    content() {
                        trigger.num++;
                    },
                },
                llbz_douzheng: {
                    trigger: {
                        global: 'roundStart',
                        player: 'phaseBegin',
                    },
                    content() {
                        'step 0';
                        if (
                            game.hasPlayer(function (current) {
                                return current.group == 'xing';
                            })
                        ) {
                            var num = game.countPlayer(function (current) {
                                return current.group == 'xing';
                            });
                            player.draw(num);
                            player.addMark('llbz_douzheng', num, false);
                        } else {
                            var num = game.countGroup();
                            player.draw(num);
                            player.addMark('llbz_douzheng', num, false);
                        }
                        ('step 1');
                        if (player.countMark('llbz_douzheng') > 5) {
                            player.loseMaxHp();
                            player.removeMark('llbz_douzheng', 5, false);
                        }
                    },
                    marktext: '斗',
                    intro: {
                        name: '斗争',
                        content: '已累计摸#张牌.',
                    },
                },
                llbz_denggao: {
                    mod: {
                        targetInRange(card, player, target) {
                            if (target.hp < player.hp) return true;
                        },
                        cardUsableTarget(card, player, target) {
                            if (target.hp < player.hp) return true;
                        },
                    },
                    trigger: { player: 'useCard' },
                    forced: true,
                    content() {
                        trigger.directHit.addArray(
                            game.filterPlayer(function (current) {
                                return current.seatNum < player.seatNum;
                            })
                        );
                    },
                },
                llbz_gusha: {
                    trigger: { player: 'dying' },
                    limited: true,
                    mark: true,
                    content() {
                        'step 0';
                        player.awakenSkill('llbz_gusha');
                        if (!_status.characterlist) {
                            lib.skill.pingjian.initList();
                        }
                        event.hp = 1 - player.hp;
                        if (player.name1 == 'llbz_weien' || player.name2 == 'llbz_weien') event._result = { control: 'llbz_weien' };
                        else if (player.name2 != undefined) {
                            player.chooseControl(player.name1, player.name2).set('prompt', '请选择要更换的武将牌');
                        } else event._result = { control: player.name1 };
                        ('step 1');
                        if (
                            game.hasPlayer(function (current) {
                                return current.name == 'llbz_gaoxiaoyou' || current.name2 == 'llbz_gaoxiaoyou';
                            })
                        ) {
                            _status.characterlist.remove('lillbz_weien');
                            _status.characterlist.add(result.control);
                            player.reinit(result.control, 'lillbz_weien', false);
                        } else {
                            _status.characterlist.remove('llbz_weienmagelite');
                            _status.characterlist.add(result.control);
                            player.reinit(result.control, 'llbz_weienmagelite', false);
                            if (player.name == 'llbz_weienmagelite' && player.group != 'xing') player.changeGroup('xing');
                        }
                        ('step 2');
                        var hp = event.hp;
                        if (hp > 0) player.recover(hp);
                        ('step 3');
                        if (player.isZhu) {
                            if (player.maxHp > 4) {
                                var num = player.maxHp - 4;
                                player.loseMaxHp(num);
                            }
                        } else {
                            if (player.maxHp > 3) {
                                var num = player.maxHp - 3;
                                player.loseMaxHp(num);
                            }
                        }
                    },
                },
                llbz_bianhuan: {
                    enable: 'phaseUse',
                    usable: 2,
                    content() {
                        'step 0';
                        if (
                            game.countPlayer(function (current) {
                                return current != player && current.maxHp > player.maxHp;
                            }) == 0
                        ) {
                            player.loseMaxHp();
                            player.addMark('llbz_bianhuan', 1, false);
                        } else {
                            player.gainMaxHp();
                            player.recover();
                            player.addMark('llbz_bianhuan', 1, false);
                        }
                        ('step 1');
                        player.draw();
                    },
                    marktext: '变',
                    intro: {
                        name: '变换',
                        content: '已变换#次.',
                    },
                    ai: {
                        order: 1,
                        result: {
                            player(player) {
                                return 1;
                            },
                        },
                    },
                },
                llbz_fushen: {
                    mark: true,
                    intro: {
                        content: 'limited',
                    },
                    trigger: { player: 'phaseEnd' },
                    filter(event, player) {
                        return player.countMark('llbz_bianhuan') > 0 && game.countPlayer(undefined, true) > 2;
                    },
                    check(event, player) {
                        return game.hasPlayer(function (current) {
                            return get.attitude(player, current) > 0;
                        });
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('llbz_fushen');
                        player.chooseTarget('选择一名其他角色附体', 1, lib.filter.notMe, true);
                        ('step 1');
                        if (result.targets?.length) {
                            var target = result.targets[0];
                            var num1 = player.countMark('llbz_bianhuan');
                            var num2 = player.hp;
                            target.draw(num1);
                            player.removeMark('llbz_bianhuan', num1, false);
                            target.gainMaxHp(num2);
                            target.recover();
                            target.addSkill('llbz_fushen_mark');
                            target.addMark('llbz_fushen_marked', num2, false);
                        } else event.finish();
                        ('step 2');
                        player.addSkill('llbz_fushenreset');
                        player.die();
                    },
                    subSkill: {
                        mark: {
                            charlotte: true,
                            mark: true,
                            marktext: '露',
                            intro: {
                                markcount: () => null,
                                name: '露比',
                                name2: '露比',
                                content: '露比在这名角色身上.',
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.hasSkill('llbz_fushen_mark') && card.name == 'sha')
                                        return (
                                            num +
                                            game.countPlayer(function (current) {
                                                return current.hasSkill('llbz_fushen_mark');
                                            })
                                        );
                                },
                            },
                        },
                        marked: {
                            charlotte: true,
                        },
                    },
                },
                llbz_fushenreset: {
                    charlotte: true,
                    audio: 'ext:拉拉:2',
                    trigger: { player: 'dieBefore' },
                    filter(event, player) {
                        return event.parent.name != 'giveup' && player.maxHp > 0;
                    },
                    forced: true,
                    _priority: 15,
                    group: 'llbz_fushenreset_return',
                    content() {
                        if (_status.llbz_fushenreset_return && _status.llbz_fushenreset_return[player.playerid]) {
                            trigger.cancel();
                        } else {
                            game.broadcastAll(function () {
                                if (lib.config.background_speak) game.playAudio('die', trigger.player);
                            });
                            trigger.setContent(lib.skill.llbz_fushenreset.dieContent);
                            trigger.includeOut = true;
                        }
                    },
                    dieContent() {
                        'step 0';
                        event.forceDie = true;
                        if (source) {
                            game.log(player, '被', source, '杀害');
                            if (source.stat[source.stat.length - 1].kill == undefined) {
                                source.stat[source.stat.length - 1].kill = 1;
                            } else {
                                source.stat[source.stat.length - 1].kill++;
                            }
                        } else {
                            game.log(player, '阵亡');
                        }
                        if (player.isIn() && (!_status.llbz_fushenreset_return || !_status.llbz_fushenreset_return[player.playerid])) {
                            event.reserveOut = true;
                            game.log(player, '进入了修整状态');
                            game.log(player, '移出了游戏');
                            //game.addGlobalSkill('llbz_rumeng_return');
                            if (!_status.llbz_fushenreset_return) _status.llbz_fushenreset_return = {};
                            _status.llbz_fushenreset_return[player.playerid] = 1;
                        } else event.finish();
                        if (!game.countPlayer()) game.over();
                        else if (player.hp != 0) {
                            player.changeHp(0 - player.hp, false).forceDie = true;
                        }
                        game.broadcastAll(function (player) {
                            if (player.isLinked()) {
                                if (get.is.linked2(player)) {
                                    player.classList.toggle('linked2');
                                } else {
                                    player.classList.toggle('linked');
                                }
                            }
                            if (player.isTurnedOver()) {
                                player.classList.toggle('turnedover');
                            }
                        }, player);
                        game.addVideo('link', player, player.isLinked());
                        game.addVideo('turnOver', player, player.classList.contains('turnedover'));
                        ('step 1');
                        event.trigger('die');
                        ('step 2');
                        if (event.reserveOut) {
                            if (!game.reserveDead) {
                                for (var mark in player.marks) {
                                    if (mark == 'llbz_bianhuan') continue;
                                    player.unmarkSkill(mark);
                                }
                            }
                            for (var i in player.tempSkills) {
                                player.removeSkill(i);
                            }
                            event.cards = player.getCards('hejsx');
                            if (event.cards.length) {
                                player.discard(event.cards).forceDie = true;
                            }
                        }
                        ('step 3');
                        if (event.reserveOut) {
                            game.broadcastAll(
                                function (player, list) {
                                    player.classList.add('out');
                                    if (list.includes(player.name1) || player.name1 == 'xin_zhoutai') {
                                        player.smoothAvatar(false);
                                        player.node.avatar.setBackground(player.name1 + '_dead', 'character');
                                    }
                                    if (list.includes(player.name2) || player.name2 == 'xin_zhoutai') {
                                        player.smoothAvatar(true);
                                        player.node.avatar2.setBackground(player.name2 + '_dead', 'character');
                                    }
                                },
                                player,
                                lib.skill.mbdanggu.changshi.map((i) => i[0])
                            );
                        }
                        if (source && lib.config.border_style == 'auto' && (lib.config.autoborder_count == 'kill' || lib.config.autoborder_count == 'mix')) {
                            switch (source.node.framebg.dataset.auto) {
                                case 'gold':
                                case 'silver':
                                    source.node.framebg.dataset.auto = 'gold';
                                    break;
                                case 'bronze':
                                    source.node.framebg.dataset.auto = 'silver';
                                    break;
                                default:
                                    source.node.framebg.dataset.auto = lib.config.autoborder_start || 'bronze';
                            }
                            if (lib.config.autoborder_count == 'kill') {
                                source.node.framebg.dataset.decoration = source.node.framebg.dataset.auto;
                            } else {
                                var dnum = 0;
                                for (var j = 0; j < source.stat.length; j++) {
                                    if (source.stat[j].damage != undefined) dnum += source.stat[j].damage;
                                }
                                source.node.framebg.dataset.decoration = '';
                                switch (source.node.framebg.dataset.auto) {
                                    case 'bronze':
                                        if (dnum >= 4) source.node.framebg.dataset.decoration = 'bronze';
                                        break;
                                    case 'silver':
                                        if (dnum >= 8) source.node.framebg.dataset.decoration = 'silver';
                                        break;
                                    case 'gold':
                                        if (dnum >= 12) source.node.framebg.dataset.decoration = 'gold';
                                        break;
                                }
                            }
                            source.classList.add('topcount');
                        }
                    },
                    subSkill: {
                        return: {
                            trigger: { player: 'phaseBefore' },
                            forced: true,
                            charlotte: true,
                            silent: true,
                            forceDie: true,
                            forceOut: true,
                            filter(event, player) {
                                if (game.countPlayer() < 2) return true;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('llbz_fushen_mark');
                                    })
                                )
                                    return false;
                                return !event._llbz_fushenreset_return && event.player.isOut() && _status.llbz_fushenreset_return[event.player.playerid];
                            },
                            content() {
                                'step 0';
                                trigger._llbz_fushenreset_return = true;
                                game.broadcastAll(function (player) {
                                    player.classList.remove('out');
                                }, trigger.player);
                                game.log(trigger.player, '移回了游戏');
                                trigger.player.recover(trigger.player.maxHp);
                                game.broadcastAll(function (player) {
                                    if (player.name1 == 'xin_zhoutai') {
                                        player.smoothAvatar(false);
                                        player.node.avatar.setBackground(player.name1, 'character');
                                    }
                                    if (player.name2 == 'xin_zhoutai') {
                                        player.smoothAvatar(true);
                                        player.node.avatar2.setBackground(player.name2, 'character');
                                    }
                                }, trigger.player);
                                ('step 1');
                                event.trigger('restEnd');
                                ('step 2');
                                var targets = game.filterPlayer().sortBySeat(player.next);
                                event.targets = targets;
                                event.num = 0;
                                ('step 3');
                                var target = event.targets[num];
                                if (target.hasSkill('llbz_fushen_mark')) {
                                    var num = target.countMark('llbz_fushen_marked');
                                    target.loseMaxHp(num);
                                    target.removeSkill('llbz_fushen_mark');
                                    target.removeMark('llbz_fushen_marked', num, false);
                                }
                                event.num++;
                                if (event.num < targets.length) event.redo();
                                ('step 4');
                                player.awakenSkill('llbz_fushenreset');
                            },
                        },
                    },
                },
                llbz_mianbao: {
                    enable: 'phaseUse',
                    usable: 3,
                    filterCard: true,
                    selectCard: 1,
                    discard: false,
                    lose: false,
                    filterTarget: lib.filter.notMe,
                    check(card) {
                        if (ui.selected.cards.length > 1) return 0;
                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                        if (!ui.selected.cards.length && card.name == 'du') return 20;
                        var player = get.owner(card);
                        var num = 0;
                        var evt2 = _status.event.parent;
                        var num = 0;
                        player.getHistory('lose', function (evt) {
                            if (evt.parent.skill == 'rende' && evt.getParent(3) == evt2) num += evt.cards.length;
                        });
                        if (player.hp == player.maxHp || num > 1 || player.countCards('h') <= 1) {
                            if (ui.selected.cards.length) {
                                return -1;
                            }
                            var players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                if (players[i].hasSkill('haoshi') && !players[i].isTurnedOver() && !players[i].hasJudge('lebu') && get.attitude(player, players[i]) >= 3 && get.attitude(players[i], player) >= 3) {
                                    return 11 - get.value(card);
                                }
                            }
                            if (player.countCards('h') > player.hp) return 10 - get.value(card);
                            if (player.countCards('h') > 2) return 6 - get.value(card);
                            return -1;
                        }
                        return 10 - get.value(card);
                    },
                    content() {
                        'step 0';
                        player.give(cards, target).gaintag = ['llbz_mianbao_tag'];
                        target.addSkill('llbz_mianbao_effect');
                        target.addTempSkill('llbz_guwu_effect', { player: 'phaseEnd' });
                        ('step 1');
                        player.draw().gaintag = ['llbz_mianbao'];
                        player.addTempSkill('llbz_mianbao_mark');
                    },
                    ai: {
                        order(skill, player) {
                            if (player.hp < player.maxHp && player.storage.rende < 2 && player.countCards('h') > 1) {
                                return 10;
                            }
                            return 1;
                        },
                        result: {
                            target(player, target) {
                                if (target.hasSkillTag('nogain')) return 0;
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                    if (target.hasSkillTag('nodu')) return 0;
                                    return -10;
                                }
                                if (target.hasJudge('lebu')) return 0;
                                var nh = target.countCards('h');
                                var np = player.countCards('h');
                                if (player.hp == player.maxHp || player.storage.rende < 0 || player.countCards('h') <= 1) {
                                    if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                }
                                return Math.max(1, 5 - nh);
                            },
                        },
                        effect: {
                            target(card, player, target) {
                                if (player == target && get.type(card) == 'equip') {
                                    if (player.countCards('e', { subtype: get.subtype(card) })) {
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i] != player && get.attitude(player, players[i]) > 0) {
                                                return 0;
                                            }
                                        }
                                    }
                                }
                            },
                        },
                        threaten: 0.8,
                    },
                    subSkill: {
                        effect: {
                            charlotte: true,
                            mod: {
                                cardname(card) {
                                    if (card.hasGaintag('llbz_mianbao_tag')) {
                                        return 'tao';
                                    }
                                },
                            },
                        },
                        mark: {
                            charlotte: true,
                            onremove(player) {
                                player.removeGaintag('llbz_mianbao');
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('llbz_mianbao')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('llbz_mianbao')) {
                                        return false;
                                    }
                                },
                            },
                        },
                    },
                },
                llbz_guwu: {},
                llbz_guwu_effect: {
                    charlotte: true,
                    mark: true,
                    marktext: '鼓',
                    charlotte: true,
                    intro: {
                        markcount: () => null,
                        name: '鼓舞',
                        name2: '鼓舞',
                        content: '手牌上限等于体力值上限,出杀次数+1',
                    },
                    mod: {
                        maxHandcardBase(player, num) {
                            return player.maxHp;
                        },
                        cardUsable(card, player, num) {
                            if (player.hasSkill('llbz_guwu_effect') && card.name == 'sha')
                                return (
                                    num +
                                    game.countPlayer(function (current) {
                                        return current.hasSkill('llbz_guwu');
                                    })
                                );
                        },
                    },
                },
                llbz_jixie: {
                    enable: 'phaseUse',
                    usable: 1,
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
                                player.addSkill('llbz_jixie1');
                                break;
                            case 'equip2':
                                player.addSkill('llbz_jixie2');
                                break;
                            case 'equip3_4':
                                player.draw(3);
                                player.addSkill('llbz_jixie3_4');
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
                },
                llbz_jixie1: {
                    charlotte: true,
                    mod: {
                        cardUsable(card, player, num) {
                            if (player.hasSkill('llbz_jixie1') && card.name == 'sha') return (num += 1);
                        },
                        targetInRange(card) {
                            if (card.name == 'sha') return true;
                        },
                    },
                },
                llbz_jixie2: {
                    trigger: { target: 'shaBefore' },
                    forced: true,
                    group: 'llbz_jixie2_draw',
                    filter(event, player) {
                        return event.card.name == 'sha' && get.color(event.card) == 'black';
                    },
                    content() {
                        trigger.cancel();
                    },
                    subSkill: {
                        draw: {
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
                        },
                    },
                },
                llbz_jixie3_4: {
                    charlotte: true,
                    mod: {
                        globalTo(from, to, distance) {
                            return distance + 1;
                        },
                        globalFrom(from, to, distance) {
                            return distance - 1;
                        },
                    },
                },
                llbz_fushou: {
                    trigger: {
                        global: 'phaseBefore',
                        player: 'enterGame',
                    },
                    filter(event, player) {
                        return event.name != 'phase' || game.phaseNumber == 0;
                    },
                    limited: true,
                    mark: true,
                    intro: {
                        content: 'limited',
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('llbz_fushou');
                        ('step 1');
                        if (!_status.characterlist) {
                            lib.skill.pingjian.initList();
                        }
                        if (player.name2 != undefined) {
                            if (player.name2 == 'llbz_daiya') {
                                _status.characterlist.add('llbz_daiya');
                                _status.characterlist.remove('llbz_hupo');
                                player.reinit(player.name2, 'llbz_hupo', false);
                                var list = [];
                                list.addArray(lib.character['llbz_daiya'][3]);
                                player.addSkills(list);
                            } else {
                                _status.characterlist.add(player.name2);
                                _status.characterlist.remove('llbz_hupo');
                                player.reinit(player.name2, 'llbz_hupo', false);
                            }
                        } else {
                            game.broadcastAll(function (player) {
                                player.name2 = 'llbz_hupo';
                                player.classList.add('fullskin2');
                                player.node.avatar2.classList.remove('hidden');
                                player.node.avatar2.setBackground('llbz_hupo', 'character');
                                player.node.name2.innerHTML = get.slimName('llbz_hupo');
                                if (player == game.me && ui.fakeme) {
                                    ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                }
                            }, player);
                            var list = [];
                            list.addArray(lib.character['llbz_hupo'][3]);
                            player.addSkills(list);
                        }
                        ('step 2');
                        if (player.name1 != 'llbz_daiya') event._result = { control: player.name1 };
                        else event.finish();
                        ('step 3');
                        _status.characterlist.add(result.control);
                        _status.characterlist.remove('llbz_daiya');
                        player.reinit(result.control, 'llbz_daiya', false);
                    },
                },
                llbz_henshin: {
                    group: 'llbz_henshin_init',
                    trigger: { player: 'phaseUseBegin' },
                    forced: true,
                    content() {
                        'step 0';
                        var list = [];
                        if (player.hasMark('llbz_henshin_Magnum')) {
                            list.push('Magnum');
                        }
                        if (player.hasMark('llbz_henshin_Zombie')) {
                            list.push('Zombie');
                        }
                        if (player.hasMark('llbz_henshin_Ninja')) {
                            list.push('Ninja');
                        }
                        if (player.hasMark('llbz_henshin_Beat')) {
                            list.push('Beat');
                        }
                        if (list.length) {
                            player.chooseControl(list).set('prompt', '选择使用一个代扣');
                        } else {
                            player.removeSkill('llbz_henshin');
                            event.finish();
                        }
                        ('step 1');
                        player.addTempSkill('llbz_' + result.control, { player: 'phaseBegin' });
                        player.removeMark('llbz_henshin_' + result.control, 1, false);
                        ('step 2');
                        var list = [];
                        if (player.hasMark('llbz_henshin_FeverSlot')) {
                            list.push('FeverSlot');
                        }
                        if (player.hasMark('llbz_henshin_Monster')) {
                            list.push('Monster');
                        }
                        if (player.hasMark('llbz_henshin_Boost')) {
                            list.push('Boost');
                        }
                        if (list.length) {
                            player.chooseControl(list).set('prompt', '选择使用一个代扣');
                        }
                        ('step 3');
                        player.addTempSkill('llbz_' + result.control, { player: 'phaseBegin' });
                        player.removeMark('llbz_henshin_' + result.control, 1, false);
                    },
                    subSkill: {
                        Magnum: {
                            marktext: '马',
                            intro: {
                                name: 'Magnum',
                                content: 'mark',
                            },
                        },
                        Zombie: {
                            marktext: '僵',
                            intro: {
                                name: 'Zombie',
                                content: 'mark',
                            },
                        },
                        Ninja: {
                            marktext: '忍',
                            intro: {
                                name: 'Ninja',
                                content: 'mark',
                            },
                        },
                        Beat: {
                            marktext: '节',
                            intro: {
                                name: 'Beat',
                                content: 'mark',
                            },
                        },
                        FeverSlot: {
                            marktext: '狂',
                            intro: {
                                name: 'FeverSlot',
                                content: 'mark',
                            },
                        },
                        Monster: {
                            marktext: '怪',
                            intro: {
                                name: 'Monster',
                                content: 'mark',
                            },
                        },
                        Boost: {
                            marktext: '推',
                            intro: {
                                name: 'Boost',
                                content: 'mark',
                            },
                        },
                        init: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                player.addMark('llbz_henshin_Magnum', 1, false);
                                player.addMark('llbz_henshin_Zombie', 1, false);
                                player.addMark('llbz_henshin_Ninja', 1, false);
                                player.addMark('llbz_henshin_Beat', 1, false);
                                player.addMark('llbz_henshin_Monster', 1, false);
                                player.addMark('llbz_henshin_FeverSlot', 1, false);
                                player.addMark('llbz_henshin_Boost', 2, false);
                            },
                        },
                    },
                },
                llbz_Magnum: {
                    charlotte: true,
                    mod: {
                        cardUsable(card, player, num) {
                            if (player.hasSkill('llbz_Magnum') && card.name == 'sha') return (num += 2);
                        },
                    },
                    enable: 'phaseUse',
                    content() {
                        player.removeSkill('llbz_Magnum');
                        player.addTempSkill('llbz_Magnum_gun');
                    },
                    subSkill: {
                        gun: {
                            charlotte: true,
                            group: 'llbz_Magnum_shot',
                            enbale: 'phaseUse',
                            content() {
                                player.removeSkill('llbz_Magnum');
                                player.addTempSkill('llbz_Magnum_gun');
                            },
                        },
                        shot: {
                            charlotte: true,
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                            },
                        },
                    },
                },
                llbz_Zombie: {
                    charlotte: true,
                    group: 'llbz_Zombie_die',
                    trigger: { source: 'damageBegin1' },
                    forced: true,
                    content() {
                        'step 0';
                        var i = player.getDamagedHp();
                        trigger.num += i;
                        ('step 1');
                        var target = trigger.player;
                        if (!target.hasSkill('fengyin')) {
                            target.addTempSkill('fengyin');
                        }
                    },
                    subSkill: {
                        die: {
                            charlotte: true,
                            round: 1,
                            trigger: { player: 'damageBefore' },
                            forced: true,
                            filter(event, player) {
                                return event.num >= player.hp;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                    },
                },
                llbz_Ninja: {
                    charlotte: true,
                    trigger: { player: 'damageBefore' },
                    forced: true,
                    usable: 1,
                    content() {
                        trigger.cancel();
                    },
                },
                llbz_Beat: {
                    charlotte: true,
                    trigger: {
                        player: ['useCard', 'respond'],
                    },
                    filter(event, player) {
                        return lib.suit.includes(event.card.suit);
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var targets = game.filterPlayer((current) => current != player);
                        var suit = trigger.card.suit;
                        for (var target of targets) {
                            target.addTempSkill('llbz_Beat_ban');
                            target.markAuto('llbz_Beat_ban', [suit]);
                        }
                    },
                    subSkill: {
                        ban: {
                            charlotte: true,
                            mod: {
                                cardEnabled(card, player) {
                                    if (player.getStorage('llbz_Beat_ban').includes(card.suit)) return false;
                                },
                                cardRespondable(card, player) {
                                    if (player.getStorage('llbz_Beat_ban').includes(card.suit)) return false;
                                },
                                cardSavable(card, player) {
                                    if (player.getStorage('llbz_Beat_ban').includes(card.suit)) return false;
                                },
                            },
                            mark: true,
                            marktext: '节',
                            intro: {
                                markcount: () => null,
                                name: '节拍',
                                content: '本回合内不能使用或打出$的牌',
                            },
                        },
                    },
                },
                llbz_Monster: {
                    charlotte: true,
                    trigger: { source: 'damageBegin1' },
                    forced: true,
                    filter(event, player) {
                        return event.player.hp > player.hp;
                    },
                    content() {
                        trigger.num++;
                    },
                },
                llbz_FeverSlot: {
                    charlotte: true,
                    trigger: { player: 'phaseUseBegin' },
                    forced: true,
                    content() {
                        var list = [];
                        if (player.hasSkill('llbz_Magnum')) {
                            list.push('Zombie');
                            list.push('Ninja');
                            list.push('Beat');
                        }
                        if (player.hasSkill('llbz_Zombie')) {
                            list.push('Magnum');
                            list.push('Ninja');
                            list.push('Beat');
                        }
                        if (player.hasSkill('llbz_Ninja')) {
                            list.push('Magnum');
                            list.push('Zombie');
                            list.push('Beat');
                        }
                        if (player.hasSkill('llbz_Beat')) {
                            list.push('Magnum');
                            list.push('Zombie');
                            list.push('Ninja');
                        }
                        if (list.length) {
                            var skill = list.randomGet();
                            player.addTempSkill('llbz_' + skill, { player: 'phaseBegin' });
                        }
                    },
                },
                llbz_Boost: {
                    charlotte: true,
                    mod: {
                        cardUsable(card, player, num) {
                            if (player.hasSkill('Boost') && card.name == 'sha') return (num += 1);
                        },
                    },
                    trigger: { source: 'damageBegin1' },
                    forced: true,
                    content() {
                        trigger.num++;
                        trigger.nature = 'fire';
                    },
                },
                llbz_supporter: {
                    juexingji: true,
                    forced: true,
                    trigger: { player: ['dying', 'phaseJieshuBegin'] },
                    filter(event, player) {
                        if (event.name == 'dying') return true;
                        return !player.hasSkill('llbz_henshin');
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('llbz_supporter');
                        if (trigger.name == 'dying') {
                            if (player.name2 != undefined) {
                                var num = player.maxHp - player.hp;
                                game.broadcastAll(function (player) {
                                    player.smoothAvatar(true);
                                    player.node.avatar2.classList.add('hidden');
                                    player.classList.remove('fullskin2');
                                    player.node.name2.innerHTML = '';
                                    player.removeSkill(lib.character[player.name2][3]);
                                    player.syncSkills();
                                    game.log(player, '移除了副将<font color=\"#8dbede\">', lib.translate[player.name2], '</font>');
                                    delete player.name2;
                                    if (player == game.me && ui.fakeme) {
                                        ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                    }
                                }, player);
                                player.recover(num);
                                event.finish();
                            }
                        }
                        if (trigger.name == 'phaseJieshu') {
                            var list = [];
                            list.push('LaserRaiseRiserBoostMk2');
                            list.push('BujinSword');
                            list.push('Fantasy');
                            if (list.length) {
                                player.chooseControl(list).set('prompt', '选择使用一个代扣');
                            }
                        }
                        ('step 1');
                        if (result.control) player.addSkill('llbz_' + result.control); //QQQ
                    },
                },
                llbz_chuangshi: {
                    audio: 'ext:拉拉:1',
                    enable: 'phaseUse',
                    limited: true,
                    filter(event, player) {
                        if (player.hasSkill('llbz_LaserRaiseRiserBoostMk2') || player.hasSkill('llbz_BujinSword') || player.hasSkill('llbz_Fantasy') || player.hasSkill('llbz_fushen_mark')) return true;
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('llbz_chuangshi');
                        player.removeSkill('llbz_henshin');
                        player.removeSkill('llbz_supporter');
                        player.removeSkill('llbz_LaserRaiseRiserBoostMk2');
                        player.removeSkill('llbz_BujinSword');
                        player.removeSkill('llbz_Fantasy');
                        ('step 1');
                        player.addSkill('llbz_BoostMkIX');
                    },
                    ai: {
                        order: 10,
                    },
                },
                llbz_LaserRaiseRiserBoostMk2: {
                    charlotte: true,
                    group: 'llbz_LaserRaiseRiserBoostMk2_speed',
                    trigger: { global: 'useCardToTarget' },
                    usable: 1,
                    filter(event, player, target) {
                        if (event.targets.length > 1) return false;
                        return event.player != event.target;
                    },
                    content() {
                        'step 0';
                        player.chooseTarget('选择一个目标成为该牌的新目标', 1, true);
                        ('step 1');
                        if (result.bool) {
                            var target1 = trigger.target;
                            var target2 = result.targets[0];
                            var evt = trigger.parent;
                            evt.triggeredTargets2.remove(target1);
                            evt.targets.remove(target1);
                            evt.targets.push(target2);
                        }
                    },
                    subSkill: {
                        speed: {
                            charlotte: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.hasSkill('llbz_LaserRaiseRiserBoostMk2_speed') && card.name == 'sha') return (num += 2);
                                },
                                targetInRange() {
                                    return true;
                                },
                            },
                            trigger: { player: 'useCard' },
                            forced: true,
                            content() {
                                trigger.directHit.addArray(game.players);
                            },
                        },
                    },
                },
                llbz_BujinSword: {
                    charlotte: true,
                    mod: {
                        cardUsable(card, player, num) {
                            if (player.hasSkill('llbz_BujinSword') && card.name == 'sha') return (num += 1);
                        },
                        targetInRange() {
                            return true;
                        },
                    },
                    trigger: { source: 'damageBegin1' },
                    usable: 1,
                    filter(event, player) {
                        return player != event.player && event.card && event.card.name == 'sha';
                    },
                    logTarget: 'player',
                    content() {
                        if (trigger.num < trigger.player.hp) {
                            trigger.num = trigger.player.hp;
                        }
                    },
                    ai: {
                        unequip: true,
                    },
                },
                llbz_Fantasy: {
                    charlotte: true,
                    group: 'llbz_Fantasy_defend',
                    mod: {
                        targetInRange(card, player, target) {
                            if (player == _status.currentPhase && (get.type2(card) == 'trick' || card.name == 'sha')) return true;
                        },
                    },
                    trigger: { player: 'useCard' },
                    forced: true,
                    filter(event, player) {
                        return get.type2(event.card) == 'trick';
                    },
                    content() {
                        player.draw();
                    },
                    subSkill: {
                        defend: {
                            charlotte: true,
                            trigger: { target: 'useCardToBefore' },
                            forced: true,
                            charlotte: true,
                            usable: 1,
                            filter(event, player) {
                                return event.player != player && get.type(event.card) == 'trick';
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                    },
                },
                llbz_BoostMkIX: {
                    charlotte: true,
                    group: ['llbz_BoostMkIX_init', 'llbz_BoostMkIXVictory', 'llbz_BoostMkIX_speed', 'llbz_BoostMkIX_rule', 'llbz_BoostTacticalVictory'],
                    mod: {
                        cardUsable(card, player, num) {
                            if (player.hasSkill('llbz_BoostMkIX') && card.name == 'sha') return (num += 2);
                        },
                        targetInRange() {
                            return true;
                        },
                    },
                    trigger: {
                        global: 'damageAfter',
                    },
                    filter(event, player) {
                        if (player.hasSkill('llbz_BoostMkIX_stop')) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        trigger.player.recover(trigger.num);
                        ('step 1');
                        if (trigger.player == player || trigger.source != player) {
                            player.addTempSkill('llbz_BoostMkIX_stop');
                        }
                    },
                    subSkill: {
                        speed: {
                            charlotte: true,
                            trigger: { global: 'phaseEnd' },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        rule: {
                            charlotte: true,
                            trigger: { player: 'phaseBegin' },
                            filter(event, player) {
                                return player.canMoveCard();
                            },
                            check(event, player) {
                                return player.canMoveCard(true);
                            },
                            content() {
                                if (player.canMoveCard()) player.moveCard(true);
                            },
                        },
                        init: {
                            charlotte: true,
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.hasEquipableSlot(1) && !player.getEquips('GeatsBusterQB9').length;
                            },
                            content() {
                                var card = game.createCard2('GeatsBusterQB9', 'heart', 1);
                                player.$gain2(card, false);
                                player.equip(card);
                            },
                        },
                    },
                },
                llbz_BoostMkIX_stop: {
                    charlotte: true,
                },
                llbz_BoostMkIXVictory: {
                    enable: 'phaseUse',
                    filter(event, player) {
                        if (player.hasSkill('llbz_BoostMkIXVictory_used')) return false;
                        return true;
                    },
                    selectTarget: 1,
                    filterTarget: lib.filter.notMe,
                    content() {
                        player.addSkill('llbz_BoostMkIXVictory_used');
                        target.damage(3, 'fire');
                    },
                },
                llbz_BoostMkIXVictory_used: {
                    charlotte: true,
                },
                llbz_BoostTacticalVictory: {
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        return player.getEquips('GeatsBusterQB9').length;
                    },
                    selectTarget: 1,
                    filterTarget: true,
                    content() {
                        target.damage(1, 'fire');
                    },
                },
                llbz_fuzuo: {
                    trigger: { player: 'damageAfter' },
                    forced: true,
                    content() {
                        'step 0';
                        event.num = Math.min(trigger.num, 9);
                        ('step 1');
                        event.cards = get.cards();
                        game.cardsGotoOrdering(event.cards);
                        player.showCards(event.cards);
                        game.cardsDiscard(event.cards);
                        ('step 2');
                        if (get.color(event.cards[0]) == 'red') {
                            player.recover();
                        }
                        if (get.color(event.cards[0]) == 'black') {
                            player.draw();
                        }
                        ('step 3');
                        event.num--;
                        if (event.num > 0) event.goto(1);
                    },
                },
                llbz_caiyi: {
                    init(player) {
                        player.storage.llbz_caiyi = [];
                    },
                    audio: 'ext:拉拉:1',
                    trigger: { player: 'useCardAfter' },
                    usable: 1,
                    filter(event, player) {
                        if (!event.cards) return false;
                        return _status.currentPhase == player;
                    },
                    check(event, player) {
                        return true;
                    },
                    async content(event, trigger, player) {
                        let cards = [game.createCard({ name: trigger.card.name, suit: 'heart', number: 'none' }), game.createCard({ name: trigger.card.name, suit: 'spade', number: 'none' })];
                        player.storage.llbz_caiyi.addArray(cards);
                        game.log(player, '将' + get.translation(cards) + '置入了牌堆');
                        game.cardsGotoPile(cards, () => {
                            return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                        });
                    },
                    group: 'llbz_caiyi_draw',
                    subSkill: {
                        draw: {
                            trigger: {
                                global: 'gainAfter',
                            },
                            audio: 'ext:拉拉:1',
                            forced: true,
                            filter(event, player) {
                                if (!player.storage.llbz_caiyi) return false;
                                if (!event.cards) return false;
                                for (var i of event.cards) {
                                    if (player.storage.llbz_caiyi.includes(i)) return true;
                                }
                                return false;
                            },
                            async content(event, trigger, player) {
                                let cards = trigger.cards.filter((card) => player.storage.llbz_caiyi.includes(card));
                                if (cards.length) {
                                    for (var i = 0; i < cards.length; i++) {
                                        trigger.player.showCards(cards[i]);
                                        await trigger.player.draw();
                                        if (cards[i].suit == 'spade') {
                                            await player.draw(2);
                                        } else {
                                            await player.recover();
                                        }
                                    }
                                }
                            },
                        },
                    },
                },
                llbz_tongdao: {
                    enable: 'phaseUse',
                    audio: 'ext:拉拉:1',
                    usable: 1,
                    filter(event, player) {
                        return player.countCards('h') > 0;
                    },
                    async content(event, trigger, player) {
                        let cards = player.getCards('h');
                        await game.cardsGotoSpecial(cards);
                        await player.draw(cards.length);
                        player
                            .when('phaseEnd')
                            .filter((evt) => evt === event.getParent('phase'))
                            .vars({
                                cards,
                            })
                            .then(() => {
                                game.log(player, '将' + get.translation(player.getCards('h')) + '牌置入了牌堆');
                                game.cardsGotoPile(player.getCards('h'), () => {
                                    return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                                });
                            })
                            .then(() => {
                                player.gain(cards, player, 'draw', 'logDraw');
                            });
                    },
                    ai: {
                        order: 1,
                        result: {
                            player: 1,
                        },
                    },
                },
                llbz_fenghun: {
                    enable: ['chooseToUse', 'chooseToRespond'],
                    init(player) {
                        player.storage.llbz_fenghun_tempban = [];
                    },
                    filter(event, player) {
                        if (player.countCards('hes') < player.hp) return false;
                        for (var i of lib.inpile) {
                            var type = get.type2(i);
                            if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event) && !player.storage.llbz_fenghun_tempban.includes(i)) return true;
                        }
                        return false;
                    },
                    chooseButton: {
                        dialog(event, player) {
                            var list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                if (player.storage.llbz_fenghun_tempban.includes(name)) continue;
                                if (name == 'sha') {
                                    if (event.filterCard({ name }, player, event)) list.push(['基本', '', 'sha']);
                                    for (var nature of lib.inpile_nature) {
                                        if (event.filterCard({ name, nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                    }
                                } else if (get.type2(name) == 'trick' && event.filterCard({ name }, player, event)) list.push(['锦囊', '', name]);
                                else if (get.type(name) == 'basic' && event.filterCard({ name }, player, event)) list.push(['基本', '', name]);
                            }
                            return ui.create.dialog('凤魂', [list, 'vcard']);
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
                                audio: 'ext:拉拉:1',
                                selectCard() {
                                    var player = _status.event.player;
                                    return Math.max(0, player.hp);
                                },
                                filterCard: true,
                                popname: true,
                                check(card) {
                                    return 8 - get.value(card);
                                },
                                position: 'hes',
                                viewAs: { name: links[0][2], nature: links[0][3] },
                                precontent() {
                                    player.addTempSkill('llbz_fenghun_clear');
                                    player.storage.llbz_fenghun_tempban.push(event.result.card.name);
                                },
                            };
                        },
                        prompt(links, player) {
                            return '使用' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                        },
                    },
                    hiddenCard(player, name) {
                        if (!lib.inpile.includes(name)) return false;
                        if (player.storage.llbz_fenghun_tempban.includes(name)) return false;
                        var type = get.type2(name);
                        return (type == 'basic' || type == 'trick') && player.countCards('hes') >= player.hp;
                    },
                    ai: {
                        fireAttack: true,
                        respondSha: true,
                        respondShan: true,
                        skillTagFilter(player) {
                            if (player.countCards('hes') < player.hp) return false;
                        },
                        order: 1,
                        result: {
                            player(player) {
                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                return 1;
                            },
                        },
                    },
                    subSkill: {
                        clear: {
                            charlotte: true,
                            onremove(player) {
                                player.storage.llbz_fenghun_tempban.length = 0;
                            },
                        },
                    },
                },
                llbz_lingyu: {
                    trigger: {
                        global: 'phaseBefore',
                        player: 'enterGame',
                    },
                    audio: 'ext:拉拉:1',
                    forced: true,
                    filter(event, player) {
                        return event.name != 'phase' || game.phaseNumber == 0;
                    },
                    content() {
                        var cards = [];
                        for (var i = 1; i < 10; i++) {
                            cards.push(game.createCard2('wanjian', i % 2 ? 'heart' : 'diamond', i));
                            cards.push(game.createCard2('shan', i % 2 ? 'spade' : 'club', i));
                        }
                        game.cardsGotoPile(cards, () => {
                            return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                        });
                    },
                    //group:'llbz_lingyu_heishan',
                    subSkill: {
                        heishan: {
                            trigger: { global: ['useCard', 'respond'] },
                            usable: 1,
                            filter(event, player) {
                                return event.card.name == 'shan' && get.color(event.card) == 'black' && event.player != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            async content(event, trigger, player) {
                                var card = get.cardPile2((card) => {
                                    return card.name == 'wanjian';
                                });
                                if (card) {
                                    cards.push(card);
                                }
                                if (cards.length) {
                                    player.gain(cards, 'draw');
                                }
                            },
                        },
                    },
                },
                llbz_gaoshou: {
                    dutySkill: true,
                    derivation: 'llbz_spzhiheng',
                    group: ['llbz_gaoshou_use', 'llbz_gaoshou_achieve', 'llbz_gaoshou_fail'],
                    subSkill: {
                        use: {
                            trigger: { player: 'useCardToPlayered' },
                            audio: 'ext:拉拉:1',
                            filter(event, player) {
                                return event.isFirstTarget && event.targets.length > 1;
                            },
                            async cost(event, trigger, player) {
                                event.result = await player
                                    .chooseTarget((card, player, target) => {
                                        return get.event().getTrigger().targets.includes(target);
                                    })
                                    .set('ai', (target) => {
                                        return get.damageEffect(target, player, player);
                                    })
                                    .forResult();
                            },
                            async content(event, trigger, player) {
                                const target = event.targets[0];
                                trigger.parent.effectCount += Math.min(3, trigger.targets.length - 1);
                                trigger.parent.excluded.addArray(game.filterPlayer((i) => trigger.targets.includes(i) && target != i));
                            },
                        },
                        achieve: {
                            trigger: { source: 'damageSource' },
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                player.getAllHistory('sourceDamage', function (evt) {
                                    if (evt.card && (evt.card.name == 'sha' || evt.card.name == 'wanjian')) num += evt.num;
                                });
                                return event.card && (event.card.name == 'sha' || event.card.name == 'wanjian') && num >= game.countPlayer2();
                            },
                            async content(event, trigger, player) {
                                game.log(player, '成功完成使命');
                                player.awakenSkill('llbz_gaoshou');
                                player.addSkills('llbz_spzhiheng');
                            },
                        },
                        fail: {
                            trigger: { player: 'dieAfter' },
                            forceDie: true,
                            forced: true,
                            filter(event, player) {
                                //return player.maxHp>1;
                                return true;
                            },
                            async content(event, trigger, player) {
                                if (player.maxHp > 1) {
                                    game.log(player, '使命失败,使用了续关');
                                    await player.loseMaxHp();
                                    player.revive(player.maxHp);
                                } else {
                                    game.log(player, '使命失败');
                                    player.awakenSkill('llbz_gaoshou');
                                }
                            },
                        },
                    },
                },
                llbz_spzhiheng: {
                    mod: {
                        aiOrder(player, card, num) {
                            if (num <= 0 || get.itemtype(card) !== 'card' || get.type(card) !== 'equip') return num;
                            let eq = player.getEquip(get.subtype(card));
                            if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp)) return 0;
                        },
                    },
                    enable: 'phaseUse',
                    audio: 'ext:拉拉:1',
                    usable: 1,
                    position: 'he',
                    filterCard: true,
                    selectCard: [1, Infinity],
                    discard: false,
                    lose: false,
                    delay: false,
                    prompt: '弃置任意张牌并摸等量的牌',
                    check(card) {
                        return 6 - get.value(card);
                    },
                    async content(event, trigger, player) {
                        let num = event.cards.length;
                        let cards = [];
                        let hs = false;
                        var list = ['wuzhong', 'shunshou', 'guohe', 'lebu', 'nanman', 'wanjian', 'tao', 'zhuge', 'sha'];
                        if (player.countCards('h') > 0) {
                            hs = true;
                        } else {
                            hs = false;
                        }
                        await player.discard(event.cards);
                        if (player.countCards('h') == 0 && hs == true) {
                            num++;
                        }
                        while (cards.length < num && list.length) {
                            if (list[0] == 'tao' && player.countCards('he', { name: 'tao' }) >= player.maxHp - player.hp) {
                                list.remove(list[0]);
                                continue;
                            }
                            if (list[0] == 'zhuge' && player.countCards('he', { name: 'zhuge' }) > 0) {
                                list.remove(list[0]);
                                continue;
                            }
                            var card = get.cardPile2((card) => {
                                return card.name == list[0] && !cards.includes(card);
                            });
                            if (card) {
                                cards.push(card);
                            } else {
                                list.remove(list[0]);
                                continue;
                            }
                        }
                        if (cards.length) {
                            player.gain(cards, 'draw');
                        }
                        if (cards.length < num) {
                            player.draw(num - cards.length);
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            player: 1,
                        },
                        threaten: 1.5,
                    },
                    group: 'llbz_spzhiheng_reset',
                    subSkill: {
                        reset: {
                            trigger: { source: 'damageSource' },
                            forced: true,
                            filter(event, player) {
                                if (player.getHistory('useSkill', (evt) => evt.skill == 'llbz_spzhiheng').length == 0) return false;
                                if (player.getHistory('useSkill', (evt) => evt.skill == 'llbz_spzhiheng_reset').length) return false;
                                return event.num > 0;
                            },
                            async content(event, trigger, player) {
                                player.getStat().skill.llbz_spzhiheng--;
                            },
                        },
                    },
                },
                llbz_zhuoqing: {
                    trigger: { player: 'useCardAfter' },
                    forced: true,
                    filter(event, player) {
                        return player.isPhaseUsing();
                    },
                    async content(event, trigger, player) {
                        player.addTempSkill('llbz_zhuoqing_effect', { player: 'useCard' });
                        await player.removeSkills('llbz_zhuoqing');
                        player.damage(1, 'fire');
                    },
                    group: 'llbz_zhuoqing_blocker',
                    subSkill: {
                        blocker: {
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return skill != 'llbz_zhuoqing' && !lib.skill[skill].charlotte && !get.is.locked(skill);
                            },
                            mark: true,
                            marktext: '灼',
                            intro: {
                                content(storage, player, skill) {
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.llbz_zhuoqing_blocker.skillBlocker(i, player);
                                    });
                                    if (list.length) return '<br><li>失效技能:' + get.translation(list);
                                    return '无失效技能';
                                },
                            },
                        },
                        effect: {
                            charlotte: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    return true;
                                },
                            },
                        },
                    },
                },
                llbz_yuhuo: {
                    trigger: { global: 'phaseJieshuBegin' },
                    forced: true,
                    filter(event, player) {
                        return player.getHistory('damage', (evt) => evt.nature == 'fire').length;
                    },
                    async content(event, trigger, player) {
                        let num = 0;
                        player.getHistory('damage', function (evt) {
                            if (evt.nature == 'fire') {
                                num += evt.num;
                            }
                        });
                        player.recover(num);
                    },
                },
                llbz_chuanzhu: {
                    mod: {
                        targetInRange(card, player, target) {
                            if (player.getHistory('useCard').length == 0) {
                                return true;
                            }
                        },
                    },
                    trigger: { source: 'damageBegin1' },
                    forced: true,
                    filter(event, player) {
                        return (
                            event.card &&
                            player.getHistory('useCard', function (evt) {
                                return evt.isPhaseUsing();
                            }).length == 1 &&
                            player.getHistory('useCard', function (evt) {
                                return evt.isPhaseUsing();
                            })[0] == event.card
                        );
                    },
                    async content(event, trigger, player) {
                        game.setNature(trigger, 'fire');
                    },
                    group: 'llbz_chuanzhu_damage',
                    subSkill: {
                        damage: {
                            trigger: { source: 'damageSource' },
                            forced: true,
                            filter(event, trigger) {
                                return event.nature == 'fire' && event.num > 0;
                            },
                            async content(event, trigger, player) {
                                trigger.player.draw();
                                trigger.player.addSkills('llbz_zhuoqing');
                            },
                        },
                    },
                },
                llbz_liaoyuan: {
                    zhuSkill: true,
                    forced: true,
                    trigger: { global: 'damageSource' },
                    filter(event, player) {
                        if (!player.hasZhuSkill('llbz_liaoyuan')) return false;
                        return event.nature == 'fire' && event.source && event.source != player && event.source.group == 'hong';
                    },
                    async content(event, trigger, player) {
                        player.draw();
                    },
                },
                llsp_wu_wudao: {
                    trigger: { source: 'damageBefore' },
                    forced: true,
                    filter(event, player) {
                        return event.player != player && event.num > 0;
                    },
                    content() {
                        if (!trigger.player.hujia) player.draw(trigger.num);
                        else trigger.player.changeHujia(-trigger.player.hujia);
                    },
                },
                llsp_wu_jidang: {
                    trigger: {
                        source: 'damageSource',
                        player: ['useCard', 'damageEnd'],
                    },
                    forced: true,
                    filter(event, player) {
                        if (event.name == 'useCard') return get.tag(event.card, 'damage') && player.countMark('llsp_wu_jidang') >= 5;
                        return event.num > 0;
                    },
                    content() {
                        if (trigger.name == 'useCard') {
                            if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
                            var num = player.countMark('llsp_wu_jidang');
                            if (num >= 5 && num < 15) trigger.baseDamage++;
                            else {
                                trigger.baseDamage++;
                                trigger.baseDamage += Math.trunc((num - 5) / 10);
                            }
                        } else {
                            player.addMark('llsp_wu_jidang', trigger.num);
                        }
                    },
                    marktext: '燃',
                    intro: {
                        name: '燃',
                        content: 'mark',
                    },
                },
                llsp_wu_zhanjue: {
                    trigger: { global: 'dying' },
                    filter(event, player) {
                        const bool1 = player.hasSkill('llsp_wu_jidang');
                        const bool2 = event.player.hp < 0 && get.itemtype(event.parent.cards) == 'cards' && event.parent.cards.some((card) => get.position(card, true) == 'o');
                        return bool1 || bool2;
                    },
                    forced: true,
                    content() {
                        if (player.hasSkill('llsp_wu_jidang')) player.addMark('llsp_wu_jidang', 1);
                        if (trigger.player.hp < 0 && get.itemtype(trigger.parent.cards) == 'cards' && trigger.parent.cards.some((card) => get.position(card, true) == 'o')) {
                            player.gain(
                                trigger.parent.cards.filter((card) => get.position(card, true) == 'o'),
                                'gain2'
                            );
                        }
                    },
                },
                llsp_wu_guimei: {
                    trigger: {
                        global: ['gainAfter', 'loseAsyncAfter'],
                    },
                    filter(event, player) {
                        var evt = event.getParent('phaseDraw');
                        if (evt && evt.name == 'phaseDraw') return false;
                        return game.hasPlayer((current) => {
                            if (!event.getg(current).length) return false;
                            if (evt && evt.player == current) return false;
                            return current != player && !current.hasSkill('llsp_wu_guimei2') && player.inRange(current) && current.countGainableCards(player, 'he') > 0;
                        });
                    },
                    check(event, player) {
                        return get.attitude(event.player, player) < 0;
                    },
                    content() {
                        player.gainPlayerCard(trigger.player, true, 'he');
                        trigger.player.addTempSkill('llsp_wu_guimei2');
                    },
                },
                llsp_wu_guimei2: {},
                llsp_wu_gantian: {
                    mod: {
                        targetInRange(card, player, target) {
                            if (player.storage.llsp_wu_gantian) {
                                if (player.storage.llsp_wu_gantian.includes(target)) return true;
                            }
                        },
                    },
                    trigger: { player: 'useCard' },
                    forced: true,
                    filter(event, player) {
                        if (player.storage.llsp_wu_gantian) return event.card && (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name)));
                        return ['jiu', 'tao'].includes(event.card.name);
                    },
                    content() {
                        if (['jiu', 'tao'].includes(trigger.card.name)) {
                            if (!trigger.baseDamage) trigger.baseDamage = 1;
                            trigger.baseDamage++;
                        }
                        if (player.storage.llsp_wu_gantian) {
                            trigger.directHit.addArray(
                                game.filterPlayer(function (current) {
                                    return current != player && player.storage.llsp_wu_gantian.includes(current);
                                })
                            );
                        }
                    },
                    group: 'llsp_wu_gantian_jiu',
                    subSkill: {
                        jiu: {
                            trigger: {
                                global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer((current) => {
                                    if (current == player || current.countCards('h')) return false;
                                    var evt = event.getl(current);
                                    return evt && evt.hs && evt.hs.length;
                                });
                            },
                            content() {
                                'step 0';
                                if (!player.storage.llsp_wu_gantian) player.storage.llsp_wu_gantian = [];
                                player.addTempSkill('llsp_wu_gantian_clear', { player: 'phaseEnd' });
                                var targets = game.filterPlayer((current) => {
                                    if (current == player || current.countCards('h')) return false;
                                    var evt = trigger.getl(current);
                                    return evt && evt.hs && evt.hs.length;
                                });
                                event.targets = targets;
                                ('step 1');
                                var target = event.targets.shift();
                                event.target = target;
                                player.storage.llsp_wu_gantian.add(target);
                                target.chooseUseTarget('jiu', true);
                                ('step 2');
                                if (targets.length) event.goto(1);
                            },
                        },
                        clear: {
                            charlotte: true,
                            mark: true,
                            marktext: '甘',
                            intro: {
                                markcount: () => null,
                                content(storage, player) {
                                    if (player.storage.llsp_wu_gantian.length == 0) return '无';
                                    return '以下角色无法响应你的牌:' + get.translation(player.storage.llsp_wu_gantian);
                                },
                            },
                            onremove(player) {
                                delete player.storage.llsp_wu_gantian;
                            },
                        },
                    },
                },
                llsp_wu_keren: {
                    trigger: { player: 'damageEnd' },
                    filter(event, player) {
                        return event.source && event.source != player && event.num > 0;
                    },
                    content() {
                        'step 0';
                        if (trigger.source.hp > 3) {
                            player
                                .chooseControl('确认', 'cancel2')
                                .set('prompt', '是否令' + get.translation(trigger.source) + '受到1点无来源伤害')
                                .set('ai', function () {
                                    if (get.attitude(trigger.source, player) < 0) return '确认';
                                    return 'cancel2';
                                });
                        }
                        ('step 1');
                        if (result.control == '确认') {
                            trigger.source.damage('nosource');
                        }
                        var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                        player.chooseButton(['选择一个点数的牌获得之', [number, 'tdnodes']], true);
                        ('step 2');
                        var list = [],
                            shown = [];
                        var piles = ['cardPile', 'discardPile'];
                        for (var pile of piles) {
                            for (var i = 0; i < ui[pile].childNodes.length; i++) {
                                var card = ui[pile].childNodes[i];
                                var number = card.number;
                                if (!list.includes(card) && number == result.links[0]) {
                                    list.push(card);
                                    if (pile == 'discardPile') shown.push(card);
                                    if (list.length >= trigger.num + 1) break;
                                }
                            }
                            if (list.length >= trigger.num + 1) break;
                        }
                        if (list.length) {
                            var next = player.gain(list);
                            next.shown_cards = shown;
                            next.set('animate', function (event) {
                                var player = event.player,
                                    shown = event.shown_cards;
                                if (shown.length < trigger.num + 1) {
                                    var num = trigger.num + 1 - shown.length;
                                    player.$draw(num);
                                    game.log(player, '从牌堆获得了', get.cnNumber(num), '张点数为' + result.links[0] + '的牌');
                                }
                                if (shown.length) {
                                    player.$gain2(shown, false);
                                    game.log(player, '从弃牌堆获得了', shown);
                                }
                                return 500;
                            });
                        }
                    },
                },
                llsp_wu_tianxie: {
                    mod: {
                        maxHandcard(player, num) {
                            var add = game.countPlayer((current) => current.isDamaged()) + game.dead.length;
                            return num + add;
                        },
                    },
                    trigger: { player: 'phaseBegin' },
                    forced: true,
                    filter(event, player) {
                        return game.dead.length > game.countPlayer();
                    },
                    content() {
                        trigger.phaseList.splice(trigger.num, 0, 'phaseUse|llsp_wu_tianxie');
                    },
                },
                llsp_wu_qiangshi: {
                    trigger: { player: 'useCardAfter' },
                    forced: true,
                    filter(event, player) {
                        if (_status.currentPhase != player) return false;
                        if (get.type2(event.card) != 'basic' && get.type2(event.card) != 'trick') return false;
                        return event.cards && event.cards.length == 1;
                    },
                    content() {
                        if (!player.storage.llsp_wu_qiangshi) player.storage.llsp_wu_qiangshi = [[], []];
                        player.storage.llsp_wu_qiangshi[0] = trigger.card.name;
                        player.storage.llsp_wu_qiangshi[1] = trigger.card.nature;
                    },
                    mark: true,
                    marktext: '识',
                    intro: {
                        markcount: () => null,
                        content(storage, player) {
                            if (!player.storage.llsp_wu_qiangshi) return '无';
                            return '当前记录的牌:' + get.translation(player.storage.llsp_wu_qiangshi[0]);
                        },
                    },
                },
                llsp_wu_songwen: {
                    enable: ['chooseToUse', 'chooseToRespond'],
                    filter(event, player) {
                        if (_status.currentPhase != player) return false;
                        if (!player.countCards('hes') || !player.storage.llsp_wu_qiangshi) return false;
                        if (player.storage.llsp_wu_songwen && player.storage.llsp_wu_songwen.includes(player.storage.llsp_wu_qiangshi[0])) return false;
                        if (event.filterCard && event.filterCard({ name: player.storage.llsp_wu_qiangshi[0] }, player, event)) return true;
                        return false;
                    },
                    chooseButton: {
                        dialog(event, player) {
                            var list = [];
                            var type = get.type(player.storage.llsp_wu_qiangshi[0]);
                            if (event.filterCard && event.filterCard({ name: player.storage.llsp_wu_qiangshi[0], nature: player.storage.llsp_wu_qiangshi[1] }, player, event)) list.push([type, '', player.storage.llsp_wu_qiangshi[0], player.storage.llsp_wu_qiangshi[1]]);
                            return ui.create.dialog('颂文', [list, 'vcard']);
                        },
                        filter(button, player) {
                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                        },
                        check(button) {
                            if (_status.event.parent.type != 'phase') return 1;
                            var player = _status.event.player;
                            if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[0])) return 0;
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
                                precontent() {
                                    player.addTempSkill('llsp_wu_songwen2');
                                },
                            };
                        },
                        prompt(links, player) {
                            return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                        },
                    },
                    hiddenCard(player, name) {
                        if (!player.storage.llsp_wu_qiangshi) return false;
                        if (player.storage.llsp_wu_songwen && player.storage.llsp_wu_songwen.includes(name)) return false;
                        return name == player.storage.llsp_wu_qiangshi[0] && player.countCards('hes') > 0;
                    },
                },
                llsp_wu_songwen2: {
                    init(player) {
                        player.storage.llsp_wu_songwen = [];
                    },
                    trigger: { player: 'useCardAfter' },
                    firstDo: true,
                    forced: true,
                    charlotte: true,
                    popup: false,
                    filter(event, player) {
                        return event.skill == 'llsp_wu_songwen_backup';
                    },
                    content() {
                        'step 0';
                        player.chooseControl('移除该记录,摸一张牌', '令此牌名本回合不能再被选择,从牌堆或弃牌堆中获得该牌');
                        ('step 1');
                        if (result.control == '移除该记录,摸一张牌') {
                            delete player.storage.llsp_wu_qiangshi;
                            player.draw();
                        } else {
                            if (!player.storage.llsp_wu_songwen) player.storage.llsp_wu_songwen = [];
                            player.storage.llsp_wu_songwen.add(trigger.card.name);
                            var list = [],
                                shown = [];
                            var piles = ['cardPile', 'discardPile'];
                            for (var pile of piles) {
                                for (var i = 0; i < ui[pile].childNodes.length; i++) {
                                    var card = ui[pile].childNodes[i];
                                    if (!list.includes(card) && card.name == trigger.card.name) {
                                        list.push(card);
                                        if (pile == 'discardPile') shown.push(card);
                                        if (list.length >= 1) break;
                                    }
                                }
                                if (list.length >= 1) break;
                            }
                            if (list.length) {
                                var next = player.gain(list);
                                next.shown_cards = shown;
                                next.set('animate', function (event) {
                                    var player = event.player,
                                        shown = event.shown_cards;
                                    if (shown.length < 1) {
                                        player.$draw(1);
                                    }
                                    if (shown.length) {
                                        player.$gain2(shown, false);
                                    }
                                    return 500;
                                });
                            }
                        }
                    },
                    onremove(player) {
                        delete player.storage.llsp_wu_songwen;
                    },
                },
                llsp_wu_shenghua: {
                    enable: 'phaseUse',
                    limited: true,
                    filter(event, player) {
                        if (!player.hasSkill('llsp_wu_qiangshi')) return false;
                        return player.countCards('h') > 0;
                    },
                    async content(event, trigger, player) {
                        await player.awakenSkill('llsp_wu_shenghua');
                        let list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            let name = lib.inpile[i];
                            if (name == 'sha') {
                                list.push(['基本', '', 'sha']);
                                for (let nature of lib.inpile_nature) {
                                    list.push(['基本', '', 'sha', nature]);
                                }
                            } else if (get.type2(name) == 'trick') list.push(['锦囊', '', name]);
                            else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                        }
                        const { bool, links } = await player.chooseButton(true, ['生花', [list, 'vcard']]).forResult();
                        if (bool) {
                            if (!player.storage.llsp_wu_qiangshi) player.storage.llsp_wu_qiangshi = [[], []];
                            player.storage.llsp_wu_qiangshi[0] = links[0][2];
                            player.storage.llsp_wu_qiangshi[1] = links[0][3];
                            delete player.storage.llsp_wu_songwen;
                        }
                    },
                },
                llsp_qinyin: {
                    trigger: { global: 'phaseDiscardEnd' },
                    filter(event, player) {
                        var cards = [];
                        event.player.getHistory('lose', function (evt) {
                            if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2);
                        });
                        return cards.length > 1;
                    },
                    async cost(event, trigger, player) {
                        var list = [];
                        list.push('选项一');
                        list.push('选项二');
                        list.push('选项三');
                        list.push('cancel2');
                        const { control } = await player.chooseControl(list).set('choiceList', ['令一名角色摸两张牌', '令一名角色失去1点体力', '令一名角色回复1点体力'])
                            .set('prompt', get.prompt('llsp_qinyin')).forResult();
                        event.result = {
                            bool: control != 'cancel2',
                            cost_data: control,
                        };
                    },
                    async content(event, trigger, player) {
                        event.control = event.cost_data;
                        const result = await player
                            .chooseTarget(true)
                            .set('ai', (target) => get.attitude(player, target) > 0)
                            .forResult();
                        if (result.targets?.length) {
                            var target = result.targets[0];
                            switch (event.control) {
                                case '选项一':
                                    target.draw(2);
                                    break;
                                case '选项二':
                                    target.loseHp();
                                    break;
                                case '选项三':
                                    target.recover();
                                    break;
                            }
                        }
                    },
                },
                llsp_qiangwei: {
                    groupSkill: true,
                    trigger: { global: 'useCard' },
                    forced: true,
                    filter(event, player) {
                        return player.group == 'miu' && event.card && event.card.suit == 'club';
                    },
                    content() {
                        'step 0';
                        player.addMark('llsp_qiangwei_mark', 1);
                        player.draw();
                        ('step 1');
                        var target = trigger.player;
                        if (target != player && target.countCards('h')) {
                            if (player.countMark('llsp_qiangwei_mark') % 5 == 0) {
                                player.chooseControl('确认', 'cancel2').set('prompt', '是否观看' + get.translation(target) + '的手牌,弃置其所有非♣️️手牌');
                            }
                        } else event.finish();
                        ('step 2');
                        if (result.control == '确认') {
                            var target = trigger.player;
                            player.viewHandcards(target);
                            var hs = target.getCards('h', function (card) {
                                return card.suit != 'club';
                            });
                            if (hs.length) {
                                target.discard(hs);
                                player.draw(hs.length);
                            }
                        }
                    },
                    subSkill: {
                        mark: {
                            marktest: '蔷',
                            intro: {
                                name: '蔷薇',
                                content: '已有#个标记',
                            },
                        },
                    },
                },
                llsp_fenfei: {
                    groupSkill: true,
                    enable: 'phaseUse',
                    usable: 2,
                    filter(event, player) {
                        return player.group == 'shui' && player.countCards('h');
                    },
                    selectTarget: 1,
                    filterTarget: lib.filter.notMe,
                    content() {
                        'step 0';
                        list = [];
                        if (player.countCards('h', { suit: 'heart' })) list.push('heart');
                        if (player.countCards('h', { suit: 'diamond' })) list.push('diamond');
                        if (player.countCards('h', { suit: 'club' })) list.push('club');
                        if (player.countCards('h', { suit: 'spade' })) list.push('spade');
                        player.viewHandcards(target);
                        player.chooseControl(list).set('prompt', '选择一种花色的手牌,令你与' + get.translation(target) + '弃置');
                        ('step 1');
                        var hs1 = player.getCards('h', { suit: result.control });
                        var hs2 = target.getCards('h', { suit: result.control });
                        if (hs1.length) {
                            player.discard(hs1);
                        }
                        if (hs2.length) {
                            target.discard(hs2);
                        } else target.damage();
                        if (hs1.length && hs2.length) {
                            if (hs1.length >= hs2.length) target.damage();
                        }
                    },
                },
                llsp_zhuanxiao: {
                    trigger: { source: 'damageBegin1' },
                    filter(event, player) {
                        return event.num > 0;
                    },
                    content() {
                        'step 0';
                        trigger.num++;
                        ('step 1');
                        trigger.source = undefined;
                        ('step 2');
                        if (player.group == 'miu') {
                            player.changeGroup('shui');
                        }
                        if (player.group == 'shui') {
                            player.changeGroup('miu');
                        }
                    },
                },
                llsp_luanyin: {
                    trigger: { global: 'roundStart' },
                    forced: true,
                    content() {
                        'step 0';
                        var num = game.countGroup();
                        player.draw(num);
                        event.num2 = num;
                        event.num = 0;
                        ('step 1');
                        event.list = [];
                        for (var i of result) {
                            if (i.suit != 'club') event.list.push(i);
                        }
                        ('step 2');
                        if (event.list) {
                            player.discard(event.list);
                        }
                    },
                },
                llsp_shengfang: {
                    group: ['llsp_shengfang_suit', 'llsp_shengfang_clear'],
                    trigger: { global: 'phaseEnd' },
                    forced: true,
                    round: 1,
                    filter(event, player) {
                        if (!player.storage.llsp_shengfang) player.storage.llsp_shengfang = [];
                        var suits = [];
                        for (var i of player.storage.llsp_shengfang) {
                            if (!suits.includes(i.suit)) {
                                suits.add(i.suit);
                            }
                        }
                        if (suits.length == 4) return true;
                    },
                    content() {
                        'step 0';
                        player.chooseControl('确认', 'cancel2', true).set('prompt', '盛放:是否执行额外回合');
                        ('step 1');
                        if (result.control == '确认') {
                            player.phase('nodelay');
                            player.addTempSkill('llsp_shengfang2', { player: 'phaseJieshuBegin' });
                        }
                    },
                    subSkill: {
                        suit: {
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter'],
                            },
                            filter(event, player) {
                                if (event.name == 'lose') return event.position == ui.discardPile;
                                return true;
                            },
                            popup: false,
                            silent: true,
                            content() {
                                if (!player.storage.llsp_shengfang) player.storage.llsp_shengfang = [];
                                player.storage.llsp_shengfang.addArray(trigger.cards);
                            },
                        },
                        clear: {
                            trigger: { global: 'roundStart' },
                            popup: false,
                            silent: true,
                            _priority: 3,
                            filter(event, player) {
                                return player.storage && player.storage.llsp_shengfang;
                            },
                            content() {
                                delete player.storage.llsp_shengfang;
                            },
                        },
                    },
                },
                llsp_shengfang2: {
                    trigger: { player: 'phaseDiscardAfter' },
                    forced: true,
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        'step 0';
                        var ds = [];
                        game.getGlobalHistory('cardMove', (evt) => {
                            if (evt.name != 'cardsDiscard') {
                                if (evt.name != 'lose' || evt.position != ui.discardPile) return false;
                            }
                            const cards = evt.cards.filter((card) => get.position(card, true) == 'd');
                            ds.addArray(cards);
                        });
                        if (ds.length) {
                            for (var i of ds) {
                                if (i.suit != 'club') {
                                    event.cards = ds;
                                    event.goto(2);
                                }
                            }
                        } else event.finish();
                        ('step 1');
                        player.addTempSkill('llsp_shengfang2_extra');
                        event.finish();
                        ('step 2');
                        player.chooseTarget(1, lib.filter.notMe);
                        ('step 3');
                        if (result.targets?.length) {
                            var target = result.targets[0];
                            target.gain(event.cards, 'gain2');
                        }
                    },
                    subSkill: {
                        extra: {
                            trigger: { player: 'phaseEnd' },
                            forced: true,
                            content() {
                                player.phase('nodelay');
                            },
                        },
                    },
                },
                llsp_yuepu: {
                    init(player) {
                        player.storage.llsp_yuepu = [];
                    },
                    trigger: { global: 'roundStart' },
                    forced: true,
                    content() {
                        'step 0';
                        event.num = 0;
                        if (player.storage.llsp_yuepu.length != 0) player.storage.llsp_yuepu = [];
                        ('step 1');
                        event.num++;
                        var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                        player.chooseButton(['选择一个音符以组成乐谱', [number, 'tdnodes']], true).set('ai', (button) => number.randomGet());
                        ('step 2');
                        if (result.bool) {
                            player.storage.llsp_yuepu.push(result.links);
                        }
                        if (event.num < 5) event.goto(1);
                    },
                    group: 'llsp_yuepu_check',
                    derivation: 'llsp_yuepu_qa',
                    mark: true,
                    marktext: '乐',
                    intro: {
                        markcount(storage, player) {
                            return storage.length;
                        },
                        mark(dialog, content, player) {
                            if (player.isUnderControl(true)) {
                                if (player.storage.llsp_yuepu.length) {
                                    dialog.addText('已记录乐谱:' + player.storage.llsp_yuepu);
                                } else {
                                    dialog.addText('无乐谱');
                                }
                            }
                        },
                    },
                    subSkill: {
                        check: {
                            trigger: { global: ['useCard', 'respond'] },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                if (player.storage.llsp_yuepu.length == 0) return false;
                                if (event.cards.length != 1) return false;
                                return event.card.number == player.storage.llsp_yuepu[0];
                            },
                            content() {
                                'step 0';
                                var num = player.storage.llsp_yuepu[0];
                                var cards = [];
                                var card = get.cardPile2(function (card) {
                                    return card.number == num;
                                });
                                if (card) cards.push(card);
                                if (cards.length) player.gain(cards, 'draw');
                                ('step 1');
                                player.storage.llsp_yuepu.remove(player.storage.llsp_yuepu[0]);
                                ('step 2');
                                if (player.storage.llsp_yuepu.length == 0 && trigger.player == player) {
                                    player.useSkill('llsp_yuepu');
                                }
                            },
                        },
                    },
                },
                llsp_jiepai: {
                    mod: {
                        targetInRange(card, player, target) {
                            var num = game.getAllGlobalHistory('everything', (evt) => evt.name == 'useCard').length;
                            if (player.storage.llsp_jiepai) {
                                num += 7;
                                if (num % 7 == 6) return true;
                            } else {
                                num += 3;
                                if (num % 3 == 2) return true;
                            }
                        },
                        cardUsableTarget(card, player, target) {
                            var num = game.getAllGlobalHistory('everything', (evt) => evt.name == 'useCard').length;
                            if (player.storage.llsp_jiepai) {
                                num += 7;
                                if (num % 7 == 6) return true;
                            } else {
                                num += 3;
                                if (num % 3 == 2) return true;
                            }
                        },
                    },
                    trigger: { global: 'useCard' },
                    zhuanhuanji: true,
                    mark: true,
                    marktext: '☯',
                    intro: {
                        content(storage, player, skill) {
                            var str = player.storage.llsp_jiepai ? '你使用牌时,若本局游戏内使用的牌数和为7的倍数则无次数和距离限制;其他角色使用牌时,若本局游戏内使用过的牌数和为7的倍数则无效之' : '你使用牌时,若本局游戏内使用的牌数和为3的倍数则无次数和距离限制;其他角色使用牌时,若本局游戏内使用过的牌数和为3的倍数则无效之';
                            return str;
                        },
                    },
                    forced: true,
                    filter(event, player) {
                        var num = game.getAllGlobalHistory('everything', (evt) => evt.name == 'useCard').length;
                        if (player.storage.llsp_jiepai) num % 7 == 0;
                        return num % 3 == 0;
                    },
                    content() {
                        'step 0';
                        if (trigger.player != player) {
                            trigger.targets.length = 0;
                            trigger.all_excluded = true;
                        }
                        player.changeZhuanhuanji('llsp_jiepai');
                    },
                    group: 'llsp_jiepai_count',
                    subSkill: {
                        count: {
                            trigger: { global: 'useCard1' },
                            silent: true,
                            firstDo: true,
                            noHidden: true,
                            content() {
                                player.storage.llsp_jiepai_count = game.getAllGlobalHistory('everything', (evt) => evt.name == 'useCard').length;
                                player.markSkill('llsp_jiepai_count');
                            },
                            intro: {
                                content(num) {
                                    return '本局游戏已使用' + num + '张牌';
                                },
                            },
                        },
                    },
                },
                llsp_huoxing: {
                    trigger: {
                        global: 'phaseBefore',
                        player: 'enterGame',
                    },
                    forced: true,
                    filter(event, player) {
                        return event.name != 'phase' || game.phaseNumber == 0;
                    },
                    content() {
                        player.addSkill('llsp_huoxing2');
                    },
                },
                llsp_huoxing2: {
                    init(player, skill) {
                        player.addSkillBlocker(skill);
                    },
                    onremove(player, skill) {
                        player.removeSkillBlocker(skill);
                    },
                    charlotte: true,
                    skillBlocker(skill, player) {
                        return skill != 'llsp_huoxing2' && lib.skill[skill].charlotte;
                    },
                    mark: true,
                    marktext: '火',
                    intro: {
                        name: '火星',
                        content(storage, player, skill) {
                            var list = player.getSkills(null, false, false).filter(function (i) {
                                return lib.skill.llsp_huoxing2.skillBlocker(i, player);
                            });
                            if (list.length) return '<br><li>失效技能:' + get.translation(list);
                            return '无失效技能';
                        },
                    },
                },
                llsp_guilai: {
                    trigger: { player: 'dieBegin' },
                    forced: true,
                    limited: true,
                    forceDie: true,
                    filter(event, player) {
                        return event.source && event.source != player;
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('llsp_guilai');
                        trigger.source.addSkill('llsp_guilai2');
                        ('step 1');
                        var target = trigger.source;
                        if (!target.storage.llsp_guilai2) target.storage.llsp_guilai2 = [];
                        target.storage.llsp_guilai2.push(player);
                        game.log(target.storage.llsp_guilai2);
                    },
                    group: 'llsp_guilai_reset',
                    subSkill: {
                        reset: {
                            trigger: { source: 'die' },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source == player;
                            },
                            content() {
                                player.restoreSkill('llsp_guilai');
                            },
                        },
                    },
                },
                llsp_guilai2: {
                    trigger: { player: 'dieAfter' },
                    forced: true,
                    forceDie: true,
                    charlotte: true,
                    content() {
                        if (player.storage.llsp_guilai2) {
                            for (var i of player.storage.llsp_guilai2) {
                                i.revive(i.maxHp);
                                i.draw(3);
                            }
                        }
                    },
                    mark: true,
                    marktext: '归',
                    intro: {
                        markcount: () => null,
                        name: '归来',
                        content: '该角色死亡后,步梦复活',
                    },
                },
                llsp_nuquan: {
                    group: 'llsp_nuquan_use',
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    content() {
                        player.addMark('llsp_nuquan', trigger.num, false);
                    },
                    marktext: '怒',
                    intro: {
                        name: '怒拳',
                        content: '已有#点愤怒点数.',
                    },
                    subSkill: {
                        use: {
                            trigger: { source: 'damageBegin1' },
                            filter(event, player) {
                                if (!player.countMark('llsp_nuquan')) return false;
                                return event.num > 0 && event.player != player;
                            },
                            content() {
                                var n = player.countMark('llsp_nuquan');
                                trigger.num += n;
                                player.removeMark('llsp_nuquan', n);
                            },
                        },
                    },
                },
            },
            card: {},
            translate: {
                miusi: '缪斯',
                punv: '浦之星',
                hongxiao: '虹之咲',
                liella: '结丘',
                lianzhikong: '莲之空',
                huanye: '幻日的夜羽',
                llbz_gaohaiqiange: '高海千歌',
                llbz_yingneilizi: '樱内梨子',
                llbz_heizelubi: '黑泽露比',
                llbz_gaobansuinaiguo: '高坂穗乃果',
                llbz_shangyuanbumeng: '上原步梦',
                llbz_seguxiangyin: '涩谷香音',
                llbz_yingbanna: '樱阪雫',
                llbz_zhongxuxia: '中须霞',
                llbz_youmuxuecai: '优木雪菜',
                llbz_zhaoxiangguolin: '朝香果林',
                llbz_aimaweierde: '艾玛维尔德',
                llbz_gongxiaai: '宫下爱',
                llbz_jinjiangbifang: '近江彼方',
                llbz_miyataile: '米娅泰勒',
                llbz_sanchuanyanzi: '三船盐子',
                llbz_zhonglanzhu: '钟岚珠',
                llbz_jindaoshanzi: '津岛善子',
                llbz_heizedaiya: '黑泽黛雅',
                llbz_yuantianhaiwei: '园田海未',
                llbz_nanxiaoniao: '南小鸟',
                llbz_shizenike: '矢泽妮可',
                llbz_xiaoquanhuayang: '小泉花阳',
                llbz_ximuyezhenji: '西木野真姬',
                llbz_xunlaihuili_wu: '洵濑绘里',
                llbz_xunlaihuili_ge: '洵濑绘里',
                llbz_dongtiaoxi: '东条希',
                llbz_xingkonglin: '星空凛',
                llbz_dubianyao: '渡边曜',
                llbz_songpuguonan: '松浦果南',
                llbz_lanqianshadu: '岚千纱都',
                llbz_heizelubi: '黑泽露比',
                llbz_yeyuelian: '叶月恋',
                llbz_pinanmingjin: '平安名菫',
                llbz_dawangjuzuchong: '大王具足虫',
                llbz_tangkeke: '唐可可',
                llbz_guomutianhuawan: '国木田花丸',
                llbz_tianwangsilinai: '天王寺璃奈',
                llbz_xiaoyuanjuli: '小原鞠莉',
                llbz_yingxiaoluxinaizi: '樱小路希奈子',
                llbz_minvyayi: '米女芽衣',
                llbz_ruocaisiji: '若菜四季',
                llbz_guizhongxiamei: '鬼塚夏美',
                llbz_guizhongdongqiu: '鬼塚冬逑',
                llbz_weien: '薇恩',
                llbz_weienmagelite: '薇恩玛格丽特',
                llbz_riyexiahuafan: '日野下花帆',
                llbz_cunyeshayexiang: '村野纱耶香',
                llbz_xiwuzhuili: '夕雾缀理',
                llbz_yizongshao: '乙宗梢',
                llbz_tengdaoci: '藤岛慈',
                llbz_dazeliulinai: '大泽瑠璃乃',
                llbz_anyangsijiya: '安养寺姬芽',
                llbz_tudingxiaoling: '徒町小铃',
                llbz_baishengyinzi: '百生吟子',
                llbz_yeyu: '夜羽',
                llbz_lizi: '梨子',
                llbz_chika: '千歌',
                llbz_juli: '魔王鞠莉',
                llbz_you: '曜',
                llbz_lubi: '露比',
                llbz_guonan: '果南',
                llbz_huawan: '花丸',
                llbz_daiya: '黛雅',
                llbz_hupo: '琥珀',
                wudou: '武斗',
                yigou: '异构',
                llsp_wu_gaohaiqiange: '武高海千歌',
                llsp_wu_gaohaiqiange_prefix: '武',
                llsp_wu_yingneilizi: '武樱内梨子',
                llsp_wu_yingneilizi_prefix: '武',
                llsp_wu_guomutianhuawan: '武国木田花丸',
                llsp_wu_guomutianhuawan_prefix: '武',
                llsp_shangyuanbumeng: 'FMT上原步梦',
                llsp_shangyuanbumeng_prefix: 'FMT',
                llsp_yingneilizi: '樱内梨子',
                llsp_ximuyezhenji: '西木野真姬',
                llspyg_yingneilizi: '樱内梨子',
                llbz_meng_youmuxuecai: '优木雪菜',
                llbz_meng_youmuxuecai_prefix: '梦',
                llbz_qingre: '情热',
                llbz_qingre_info: '出牌阶段,你可以视作使用一张【火攻】.若你的【火攻】未造成伤害,则本技能本回合失效.当你在出牌阶段的第二张及其以上的【火攻】造成伤害时,你可以选择一项:1.令此次伤害+1;2.摸两张牌;背水!:本回合无法使用该技能.',
                llbz_huisu: '回溯',
                llbz_huisu_info: '限定技,你可以在以下时间点发动该技能:出牌阶段,进入濒死状态时.调整到你上一个结束阶段时的体力值,摸等同于体力值变化量的牌.',
                llbz_qingre_choice: '情热',
                llbz_lide: '立德',
                llbz_lide_info: '主公技,出牌阶段限一次,你可以选择一名其他缪势力角色,对其造成1点火焰伤害,其摸一张牌,你可以选择摸一张牌或回复一点体力.',
                llbz_tangguo: '糖果',
                llbz_tangguo_info: '每回合限一次,每当一名角色受到伤害后,你可以令其摸一张牌,其选择一张手牌置于你的武将牌上,称为<糖>,你令其回复一点体力.',
                llbz_tangguo_change: '糖果',
                llbz_tangguo_change_info: '每当一名角色受到伤害后,你可以令其摸一张牌,其选择一张手牌置于你的武将牌上,称为<糖>.',
                llbz_tianmi: '甜蜜',
                llbz_tianmi_info: '觉醒技,准备阶段开始时,若你拥有2个以上<糖>,获得全部的<糖>,减少一点体力上限,回复一点体力,修改<糖果>每回合不限一次且不再可以令目标回复体力,获得<成熟>.',
                llbz_chengshu: '成熟',
                llbz_chengshu_info: '觉醒技,准备阶段开始时,若你拥有2个以上<糖>,获得全部的<糖>,减少一点体力上限,回复一点体力,失去<糖果>,获得<成长>',
                llbz_chengzhang: '成长',
                llbz_chengzhang_info: '锁定技,准备阶段开始时,你须从<闪耀>、<威压>、<集星>、<情热>、<界制衡>、<界仁德>、<界奸雄>、<乱击>中获得一个技能.若本技能已发动3次,你失去该技能.',
                llbz_qinyin: '琴音',
                llbz_qinyin_info: '出牌阶段限一次,你可以选择至多x名角色(x为你已损失的生命值),令其展示x张牌,若其中有♣️️,则你可以选择,令其流失一点体力或回复一点体力;若没有♣️️,你摸一张牌.',
                llbz_yinghua: '樱花',
                llbz_yinghua_info: '锁定技,你的手牌上限等于你的体力上限.当你受到伤害时,若你的体力上限大于1,则进行判定,若不为♣️️,你防止此次伤害,你减1点体力上限.',
                llbz_zhanfang: '绽放',
                llbz_zhanfang_info: '限定技,当你进入濒死状态时,你可以回复至6点体力上限,回复至2点体力.',
                llbz_jixing: '集星',
                llbz_jixing_info: '锁定技,准备阶段开始时、结束阶段开始时,若你的体力上限小于11,增加1点体力上限.你以此法增加体力上限后,若你是体力最小的角色之一,回复一点体力;若你是体力最大的角色之一,失去一点体力.',
                llbz_gongming: '共鸣',
                llbz_gongming_info: '你的体力值变化后,若存在一名其他角色体力值与你相同,你可以摸一张牌,可以令其摸一张牌.',
                llbz_paiyi: '排异',
                llbz_paiyi_info: '每回合限一次,你可以将一张牌当做任意基本牌或锦囊牌使用或打出,摸一张牌.若如此做,你须减少1点体力上限.',
                llbz_niepan: '涅槃',
                llbz_niepan_info: '主公技,限定技,进入濒死状态时,你可以减一点体力上限,将体力值回复至上限,失去<集星>.',
                llbz_weiya: '威压',
                llbz_weiya_info: '锁定技,你攻击范围内的其他角色手牌上限-2,攻击范围外的其他角色手牌上限-1.若其角色已受伤,手牌上限额外-1.',
                llbz_bochi: '驳斥',
                llbz_bochi2: '驳斥',
                llbz_bochi3: '驳斥',
                llbz_bochi_jieshu: '驳斥',
                llbz_bochi_info: '当你受到1点伤害后,你可以令当前回合角色选择一项:1.手牌上限于此回合内额外-1;2.你摸两张牌.弃牌阶段结束时,你获得其弃置的牌.',
                llbz_zhenxin: '真心',
                llbz_zhenxin_info: '主公技,当其他虹势力角色造成1点伤害后,你可进行判定,若结果为♥️️,你回复1点体力并获得此判定牌.',
                llbz_honglian: '红莲',
                llbz_honglian_info: '锁定技,你的【杀】均视为火【杀】且无距离限制,你造成火焰伤害前,你失去1点体力.当你受到火焰伤害时,防止此伤害.你的手牌上限始终为体力上限.',
                llbz_honglian_damage: '红莲',
                llbz_lieyan: '烈焰',
                llbz_lieyan_jiesuan: '烈焰',
                llbz_lieyan_info: '你造成火焰伤害时,你可以使其增加X点额外伤害(X为你已损失体力值),若如此做,此伤害结算后你减1点体力上限.',
                llbz_ranjin: '燃尽',
                llbz_ranjin_info: '锁定技,当你死亡时,你须选择一名其他角色获得<红莲>、<烈焰>,并且增加1点体力上限.',
                llbz_shuangmian: '双面',
                llbz_shuangmian_info: '锁定技,转换技,出牌阶段开始时:阳:你失去1点体力并摸一张牌,直到你的下个准备阶段.你使用的黑色的【杀】不可响应,你不可响应其他角色的红色的【杀】;阴:你回复1点体力并摸一张牌,直到你下个准备阶段,你使用的红色的【杀】不可响应,你不可响应其他角色的黑色的【杀】.',
                llbz_hengshi: '衡势',
                llbz_hengshi_info: '锁定技,转换技,准备阶段转换为阳,结束阶段转换为阴.阳:你计算与其他角色的距离-X;阴:其他角色计算与你的距离+X(X为场上势力数).',
                llbz_yanyi: '演绎',
                llbz_yanyi_info: '当你于出牌阶段内对一名其他角色造成伤害时,你可以选择一项:1.此伤害+1,你摸一张牌;2.直到你下个出牌阶段开始时,获得〖夺锐〗且不能发动<演绎>二选项;背水:体力上限减少1点.',
                llbz_yanyi_duorui: '演绎',
                llbz_yanyi_faq: '夺锐',
                llbz_yanyi_faq_info: '当你于出牌阶段内对一名其他角色造成伤害时,你可以选择该角色的武将牌上的一个技能(限定技、觉醒技、主公技除外),令其于其下回合结束之前此技能无效,你于其下回合结束或其死亡之前拥有此技能.若此技能是<可演绎>范围内的技能,则你获得该技能.',
                llbz_yanyi_duorui1: '演绎',
                llbz_yanyi_duorui_player: '演绎',
                llbz_chaoxi: '潮汐',
                llbz_chaoqi: '潮起',
                llbz_chaoluo: '潮落',
                llbz_chaoxi_info: '锁定技,转换技,每轮开始时,产生一次潮汐变化.阳:潮落,每个其他角色的准备阶段,弃1张牌,流失0点体力;阴:潮起,每个角色的准备阶段,摸1张牌.',
                llbz_fachuan: '发船',
                llbz_fachuan_info: '出牌阶段限一次,每两轮限一次,你可以令所有其他角色依次选择一项:1.弃置至少x张牌(若上一名进行选择的角色以此法弃置过牌,x为以此法弃置过的牌数+1,否则x为1);2.受到你造成的2点伤害,接下来两轮<潮汐>对其无效.结束阶段,你流失一点体力,令<潮汐>阴阳状态下其中之一的数字+1.',
                llbz_fachuan_end: '发船',
                llbz_yongdong: '涌动',
                llbz_yongdong_info: '锁定技,当你死亡时,你可以选择一名其他角色获得你当前状态下的<潮汐>,并令阴阳状态下其中之一的数字+2.',
                llbz_tanfan: '弹反',
                llbz_tanfan_info: '当你受到其他角色【杀】或【决斗】造成的伤害后,若你与其距离不大于1,你获得此牌,可以将此牌当做无视距离且伤害+1的【杀】对其使用,若你装备武器则此【杀】不可响应.',
                llbz_xinao: '嬉闹',
                llbz_xinao_info: '出牌阶段限一次,你弃置一张手牌,移动场上一张牌.若弃置的是装备牌,则该为你使用之.',
                llbz_qinjin: '亲近',
                llbz_qinjin_info: '锁定技,你计算与其他角色距离-X(X为全场女性角色数).',
                llbz_mizi: '迷子',
                llbz_mizi_info: '锁定技,摸牌/出牌/弃牌阶段开始时,你将本回合摸牌阶段摸牌数/攻击范围、使用【杀】的限制次数/手牌上限的默认值分配数值1、2、A、B(A为你的攻击范围,B为你的当前体力值).',
                llbz_laichuang: '赖床',
                llbz_laichuang_info: '出牌阶段,你可以将一张♦️️牌当【乐不思蜀】对自己使用,回复1点体力.你的判定阶段开始时,若你的判定区有牌,你执行一个额外的出牌阶段.',
                llbz_laichuang_extra: '赖床',
                llbz_laichuang_extra_info: '执行一个额外出牌阶段.',
                llbz_meili: '魅力',
                llbz_meili_info: '当你指定一名角色成为普通锦囊牌或基本牌的目标时,你可以为此牌增加一个目标或减少一个目标(目标数至少为一).当你使用非装备牌指定目标后,你可以摸Y张牌(Y为此牌指定的目标数),该效果每回合限三次.',
                llbz_meili_tushe: '魅力',
                llbz_meili_tushe_info: '你可以摸Y张牌(Y为此牌指定的目标数).',
                llbz_meihuo: '魅惑',
                llbz_meihuo_info: '出牌阶段限三次,你可以选择一项,1.将一张红色牌当做[乐不思蜀]使用;2.弃置场上一张[乐不思蜀].你摸两张牌并弃置一张牌.',
                llbz_huanxing: '唤醒',
                llbz_huanxing_info: '其他角色的判定阶段开始时,你可以弃置其判定区里的一张牌,视为你对其使用一张伤害+1的【杀】,若此【杀】没有造成过伤害,则你摸一张牌.',
                llbz_mili: '迷离',
                llbz_mili_info: '当你成为【杀】的目标时,你可以弃置一张牌并将此【杀】转移给你攻击范围内或判定区域有牌的一名不为此【杀】使用者的角色.',
                llbz_jiqing: '激情',
                llbz_jiqing_info: '当你使用【决斗】或红色【杀】指定目标后,或成为【决斗】或红色【杀】的目标后,你可以摸一张牌.',
                llbz_xiaohua: '笑话',
                llbz_xiaohua_info: '出牌阶段限一次,你可以展示牌堆顶一张牌对一名其他角色使用,若为红色则当做【决斗】使用;若为黑色则当做无距离限制的［兵粮寸断］使用,若其判定区已有［兵粮寸断］则改为获得其一张牌.',
                llbz_liantong: '炼铜',
                llbz_liantong_info: '你可以将一张装备牌当【酒】或无距离限制且无视目标防具的【杀】使用.当你以此法使用【杀】对一名角色造成伤害后,你获得其装备区里的X张牌(X为伤害值).你可以重铸手牌里的装备牌,若如此做,你可以从弃牌堆里获得一张【决斗】.',
                llbz_liantong_effect: '炼铜',
                llbz_liantong_chongzhu: '炼铜:重铸',
                llbz_keji: '科技',
                llbz_keji_info: '锁定技,黑色的【杀】对你无效.若你的装备区里没有防具牌,你视为装备【八卦阵】.',
                llbz_daiban: '戴板',
                llbz_daiban_info: '出牌阶段限一次,你可令一名其他角色的所有技能替换为<科技>(锁定技,限定技,觉醒技,主公技除外),你失去<科技>,你的下回合开始或当其【八卦阵】判定后,其失去<科技>并获得原技能,你获得其区域里的一张牌,回复你的<科技>.',
                llbz_daiban_blocker: '戴板',
                llbz_tianshi: '天使',
                llbz_tianshi_info: '锁定技,你每回合首次受到🃏牌或非游戏牌造成的伤害时,防止此伤害.当你受到伤害类锦囊牌的伤害时,若你没有<科技>则防止此伤害.',
                llbz_huanmeng: '幻梦',
                llbz_huanmeng_info: '锁定技,出牌阶段开始时,你可以选择一名角色获得一下效果之一,每个效果整场游戏限一次:1.跳过下个摸牌阶段;2.跳过下个出牌阶段、弃牌阶段;3.下个摸牌阶段额外摸4张牌并且出牌阶段出【杀】次数+1;4.出牌阶段开始时,失去1点体力;手牌上限-3;5.其下一个回合结束时回复3点体力.若所有效果均已选择,你死亡.',
                llbz_huanmeng_qiangda: '强大',
                llbz_huanmeng_qiangda_info: '下个摸牌阶段额外摸4张牌并且出牌阶段出【杀】次数+1',
                llbz_huanmeng_emeng: '噩梦',
                llbz_huanmeng_emeng_info: '出牌阶段开始时,失去1点体力;手牌上限-3',
                llbz_huanmeng_meimeng: '美梦',
                llbz_huanmeng_meimeng_info: '跳过下个出牌阶段、弃牌阶段',
                llbz_huanmeng_jie: '饥饿',
                llbz_huanmeng_jie_info: '跳过下个摸牌阶段',
                llbz_huanmeng_huifu: '回复',
                llbz_huanmeng_huifu_info: '其下一个回合结束时回复3点体力',
                llbz_rumeng: '入梦',
                llbz_rumeng_info: '锁定技,你进入濒死状态时,减少1点体力上限,回复体力至上限.你的体力上限不会增加.',
                llbz_miyatiancai: '天才',
                llbz_miyatiancai_info: '锁定技,当你于回合内使用非虚拟的【杀】时,无距离限制且不计入次数;当你使用非虚拟锦囊牌时无距离限制且你摸一张牌.',
                llbz_zaoshu: '早熟',
                llbz_zaoshu_info: '锁定技,回合结束时,你将体力回复至体力上限,将手牌摸至体力上限(上限为5);出牌阶段开始时,你失去上回合以此法回复的体力值,弃置上回合以此法获得的手牌.',
                llbz_yuren: '育人',
                llbz_yuren_info: '限定技,出牌阶段,你可以令一名角色获得<武圣>和<集智>,你的体力上限减少3点.',
                llbz_jiantao: '检讨',
                llbz_jiantao_info: '出牌阶段限一次,你可以交给一名没有<讨>标记的其他角色一张牌令其获得<讨>标记.有<讨>标记的角色于摸牌阶段外获得牌时,你随机获得其一张手牌(每个<讨>标记至多获得五张牌).',
                llbz_enyuan: '恩怨',
                llbz_enyuan_info: '锁定技,准备阶段,你令有<讨>标记的角色执行以下效果:自其获得<讨>标记开始,若你获得其至少三张牌,则你移除其<讨>标记,交给其两张牌;否则其流失1点体力值,你回复1点体力并移除<讨>标记.',
                llbz_guzhi: '固执',
                llbz_guzhi_info: '其他角色的弃牌阶段结束时,你可以以该角色为目标将此阶段弃置的牌均视为【杀】使用,你至多以此法使用三张【杀】.',
                llbz_nvwang: '女王',
                llbz_nvwang_info: '出牌阶段开始时,你可以选择一种类别的牌,你本回合内使用该类别的牌时没有次数和距离限制.',
                llbz_duchang: '独唱',
                llbz_duchang_info: '一名其他角色的结束阶段开始时,若其本回合没有使用牌以你为目标,你摸一张牌.',
                llbz_dute: '独特',
                llbz_dute_info: '当你使用一张牌结算结束后,若此牌与你本回合使用的牌类型均不同,你摸一张牌.',
                llbz_duotianshi: '天使',
                llbz_duotianshi_draw: '天使',
                llbz_duotianshi_damage: '天使',
                llbz_duotianshi_info: '锁定技,准备阶段,你须将x张牌置于武将牌上(x最大为3,最小于1),称为<天使>.每当你受到1点伤害时,你可以移除两张<天使>,防止此伤害.<天使>从武将牌上移除时,你摸一张牌.你的手牌上限+Y(Y为<天使>的数量).',
                llbz_jianglin: '降临',
                llbz_jianglin_info: '转换技,出牌阶段限一次,阳:移去一张<天使>,令一名角色交给你一张牌,其回复一点体力;阴:移去一张<天使>,交给一名角色一张牌,其受到一点无来源的伤害.',
                llbz_duotian: '堕天',
                llbz_duotian_backup: '堕天',
                llbz_duotian_info: '出牌阶段限一次,你可以移去一张<天使>,令一名角色摸Y张牌(Y为天使数且至多为4).若该角色手牌数大于你,你对其造成1点伤害.',
                llbz_llbz_huiyi: '会议',
                llbz_llbz_huiyi_info: '锁定技,转换技,阳:当你成为【杀】或锦囊牌的唯一目标后;阴:当你使用【杀】或锦囊牌指定唯一目标后;目标角色须交给使用者一张牌,若此牌为装备,获得牌的角色可使用之.(目标不能为你自己)',
                llbz_jueyi: '决议',
                llbz_jueyi_info: '你可以于以下时机点选择一名有转换技的角色,调整其拥有的一个转换技的阴阳状态:你对其他角色造成伤害后、受到伤害后、出牌阶段(限一次).',
                llbz_zhiyuan: '支援',
                llbz_zhiyuan_info: '锁定技,游戏开始时,你令所有其他角色获得技能<会议>.出牌阶段限一次,你可以令一名其他角色获得技能<决议>,若如此做,你减1点体力上限.',
                llbz_zhaoshui: '昭水',
                llbz_zhaoshui_info: '锁定技,游戏开始后的前4个准备阶段,你加1点体力上限并回复1点体力.之后的4个准备阶段,你减1点体力上限.',
                llbz_guipai: '鬼牌',
                llbz_guipai_info: '出牌阶段限一次,你可以令一名其他角色获得你一张手牌,你展示你的所有手牌,若存在花色相同的两张及以上牌,则目标本回合失去其非锁定技,你对其使用牌无次数无距离限制.',
                llbz_qianggong: '强弓',
                llbz_qianggong_info: '当你使用【杀】指定一个目标后,可进行判定,若为♦️️则伤害+1,♥️️则伤害+2;你红色的杀不可响应.',
                llbz_kuanshu: '宽恕',
                llbz_kuanshu_info: '每回合每名角色限一次,当你对其他角色造成伤害时,你可以防止此次伤害,选择一项:1.摸2*x张牌;2.获得其x张牌(x为此次伤害数).你以此法获得的牌数不计入本回合手牌上限.',
                llbz_kuanshu_marked: '已被宽恕',
                llbz_chunjie: '纯洁',
                llbz_chunjie_info: '锁定技,于你的手牌内,基本牌和非延时性锦囊牌均视为无色.',
                llbz_fuhei: '腹黑',
                llbz_fuhei_info: '每回合每名角色限一次,当你使用或打出一张🃏牌时,你可以令一名角色本回合所有非锁定技失效,选择对其造成1点伤害或回复其1点体力.',
                llbz_jinghua: '净化',
                llbz_jinghua_info: '锁定技,你受到伤害后或不因此技能造成伤害后,你摸一张牌,你可以选择令当前回合角色本回合所有非锁定技失效,若其所有非锁定技已经失效,你对其造成1点伤害.',
                llbz_paolu: '跑路',
                llbz_paolu_info: '锁定技,当你发动<腹黑>后,本回合其他角色计算与你的距离+1.',
                llbz_zhiyan: '直言',
                llbz_zhiyan_info: '每回合你的第一张基本或锦囊牌不可被响应.你没有<逗猫>时,你即将造成的伤害均视为体力流失.',
                llbz_fanxing: '繁星',
                llbz_fanxing_info: '准备阶段,你可以观看牌堆顶的5张牌(存活角色小于4时改为3张,若你拥有<逗猫>则始终为5),并将其以任意顺序置于牌堆项或牌堆底.若你拥有<逗猫>,则你可以在结束阶段再发动此技能.',
                llbz_maopu: '猫扑',
                llbz_maopu_info: '你受到伤害后,你可以将手牌补至自己的体力上限;若伤害来源拥有<逗猫>,你可以令其本回合无法再使用牌.若你拥有<逗猫>,此技能无效.',
                llbz_doumao: '逗猫',
                llbz_doumao_discard: '逗猫',
                llbz_doumao_info: '准备阶段开始时,你可以弃置一张牌并选择一名其他角色,你失去〖逗猫〗并令其获得〖逗猫〗,其摸一张牌.结束阶段开始时,你弃置一张牌.',
                llbz_gewu: '歌舞',
                llbz_gewu_info: '游戏开始时,你以<舞>状态开始游戏.准备阶段开始时、结束阶段开始时,你可以从<舞>状态与<歌>状态之间切换,减少1点体力上限,回复1点体力,摸两张牌.',
                llbz_yingwu: '莺舞',
                llbz_yingwu_info: '锁定技,出牌阶段你使用【杀】指定一名其他角色为目标时,你使用非伤害类普通锦囊指定一名其他角色为目标时,获得一个<舞>标记.若你的<舞>数大于1:你的【杀】结算后,则你弃置2个<舞>并摸一张牌,可以视为使用一张【过河拆桥】;你的非伤害类普通锦囊结算后,弃置2个<舞>并摸一张牌,视为使用一张【杀】.',
                llbz_manmiao: '曼妙',
                llbz_manmiao_info: '锁定技,当你成为【杀】或任意锦囊牌的目标时,若来源不为你,进行判定,若结果为红色,取消之.',
                llbz_gaoyin: '高音',
                llbz_gaoyin_info: '你于出牌阶段【杀】或【决斗】可以额外选择一名角色.',
                llbz_tianlai: '天籁',
                llbz_tianlai_info: '锁定技,你于出牌阶段使用的黑色牌不可被响应且摸一张牌.',
                llbz_rixiang: '日香',
                llbz_rixiang_info: '锁定技,当你受到伤害时,若你的体力值不大于2,你须弃置两张牌,防止此伤害;当你回复体力时,若你的体力值不小于2,你须摸两张牌,防止此次回复体力.你的手牌上限始终为体力上限.',
                llbz_weixiao: '微笑',
                llbz_weixiao_info: '锁定技,你没有摸牌阶段.你在以下时机摸一张牌并且不计入本回合的手牌上限:准备阶段开始时、判定阶段开始时、摸牌阶段开始前、出牌阶段开始时、弃牌阶段结束时.准备阶段开始时,若你的体力上限不为5,则调整至5.',
                llbz_xihun: '吸魂',
                llbz_xihun_info: '当你对一名角色造成1点伤害后,你可以回复1点体力;当其他角色对你造成1点伤害后,你可以获得其一张牌.',
                llbz_maimeng: '卖萌',
                llbz_maimeng_info: '出牌阶段每名角色限一次,你可以弃置x张牌,对一名其他角色造成1点伤害(x为目标的当前体力).',
                llbz_mifan: '米饭',
                llbz_mifan_info: '每回合限一次,你可以将红色的牌当做【桃】;黑色的牌当做【酒】打出.若你以此法使用牌后,体力不大于当前回合角色,你摸一张牌.你的手牌上限等于体力上限.',
                llbz_qiuyuan: '求援',
                llbz_qiuyuan_info: '当你成为【杀】的目标时,你可以令一名其他角色交给你【闪】、【桃】或【酒】,否则其也成为目标.当你进入濒死状态时,你可以令一名其他角色交给你【桃】或【酒】,否则其流失1点体力.',
                llbz_lianren: '怜人',
                llbz_lianren_info: '出牌阶段限一次,你可以与一名体力不大于你的角色拼点:若你赢,跳过其下一个摸牌阶段;若你没赢,其视为对你使用一张【杀】.',
                llbz_lianren2: '怜人',
                llbz_puqu: '谱曲',
                llbz_puqu_info: '出牌阶段限一次,你可以将任意张点数合为9的手牌交给一名其他角色,你选择:你摸两张牌或回复1点体力.你以此法获得的牌不计入本回合手牌上限.',
                llbz_cainv: '才女',
                llbz_cainv_info: '锁定技,若你于自己的回合内,你获得以下效果:1当你因为并非使用或打出失去牌时,你摸一张牌;2.使用非延时锦囊牌时无距离限制且你摸一张牌.你以此法获得的牌不计入本回合手牌上限.',
                llbz_zhijue: '智绝',
                llbz_zhijue_info: '每回合限一次,当你受到伤害后,回复1点体力,该回合结束前,下一个非延时性锦囊对你无效.',
                llbz_zhijue_2: '智绝',
                llbz_zhanxing: '占星',
                llbz_zhanxing_info: '出牌阶段,当你使用牌指定其他角色为目标后,你可以令一名不为你的角色进行判定.',
                llbz_mingshu: '命数',
                llbz_mingshu_info: '锁定技,其他角色的判定牌生效后,将此牌置于其武将牌上,称为<命>,你摸一张牌.当角色打出或使用的牌与自己武将牌上的<命>记录的花色相同时,弃置对应的一张<命>牌,流失1点体力.',
                llbz_mingshu_count: '命数',
                llbz_fuchu: '祓除',
                llbz_fuchu_info: '限定技,其他角色的回合结束阶段,若该角色拥有不小于其体力上限数量<命>,你可以令其死亡,你增加1点体力上限,回复血量至体力上限,废除你的判定区,获得技能<命定>.',
                llbz_mingdin: '命定',
                llbz_mingdin_info: '出牌阶段限一次,你可以令一名角色进行判定,若判定结果为红色,其摸一张牌,该技能出牌阶段使用次数+1(最高为5);若判定结果为黑色,其弃一张手牌.',
                llbz_qianyong: '潜泳',
                llbz_qianyong_info: '锁定技,你的武器牌均视为【杀】,你的武器牌转化的【杀】不可响应且不计入次数.游戏开始时,废除你的武器栏,你的【杀】无距离限制.',
                llbz_shuijian: '水剑',
                llbz_shuijian_info: '你的【杀】造成1点伤害后,摸一张牌,回复1点体力.若你装备武器,你的【杀】无次数限制且不可响应.',
                llbz_fanteng: '翻腾',
                llbz_fanteng_info: '使命技,出牌阶段限一次,你可以弃置一张牌,从牌堆中获得一张装备牌.成功:准备阶段开始时,若本局游戏你的【杀】造成了4点伤害,失去<潜泳>,回复武器栏,获得<抱抱>;失败:若你于使命达成前进入濒死状态,回复体力至上限,弃置所有牌.',
                llbz_hug: '抱抱',
                llbz_hug_info: '出牌阶段限一次,若场上有血量与你相同的角色,你可以弃置两张颜色相同的牌,令你与其摸三张牌,回复一点体力.',
                llbz_kuozhan: '扩展',
                llbz_kuozhan_info: '你可以在以下时间点发动该技能:准备阶段、收到伤害时,令<打工>的距离+1(最大为4),若已经达到最大则摸一张牌.',
                llbz_dagong: '打工',
                llbz_dagong_info: '锁定技,当与你距离为0的角色体力变动时,你获得其1张牌,置于你的武将牌上,称为<丸>,若<丸>的数量超过4时,最先加入的<丸>将被弃置.当<丸>牌离开武将牌上时,你摸一张牌.',
                llbz_zili: '自立',
                llbz_zili_info: '觉醒技,若你的手牌数大于体力值且本局游戏主公不为涩谷香音,你减1点体力上限,获得<舞踏>.',
                llbz_wuta: '舞踏',
                llbz_wuta_info: '出牌阶段限一次,你可以令一名角色获得x张<丸>(x为其已损失体力,最大为4),其回合结束后,其回复1点体力.你的手牌上限+1.',
                llbz_beiguo: '背锅',
                llbz_beiguo_info: '游戏开始时,你令一名其他角色获得<锅>标记.(拥有此标记的角色手牌上限等于体力上限,摸牌阶段额外摸一张牌,出牌阶段出杀次数+1)<br/>每轮开始时,若场上有拥有<锅>标记的角色,你可以将<锅>标记移动给没有获得过该标记的其他角色;<br/> 当你失去全部护甲时,拥有<锅>标记的角色可以弃1张牌使你获得1点护甲. <br/>拥有<锅>标记的角色受到1次伤害时,若你的体力大于1,你可以流失1点体力,防止该伤害;若你的体力为1,你可以调整体力上限至1,获得失去体力上限的等量护甲,摸等同于当前护甲值的牌,防止此伤害,移除<锅>标记.',
                llbz_beiguo_mark: '背锅',
                llbz_beiguo_damage1: '背锅',
                llbz_beiguo_damage2: '背锅',
                llbz_tanwan: '贪玩',
                llbz_tanwan_info: '回合开始前,你可以摸X张牌,获得X点护甲(X为你已损失的生命值),跳过此回合.',
                llbz_shenshe: '神社',
                llbz_shenshe_info: '每回合限四次,当一名角色受到伤害时,若你与其距离1以内,则你可以进行判定,若结果为:红色,受伤角色摸一张牌;黑色,此伤害-1.',
                llbz_tonghua: '同化',
                llbz_tonghua_info: '当你于出牌阶段内使用【杀】或【决斗】对目标即将造成超过其体力值与护甲值之和的伤害时,可以防止此次伤害,令其选择一项:1.弃置装备区所有装备,若如此做其失去1点体力;2.移除武将牌,用<大王具足虫>代替,回复其全部体力,若如此做,你失去该技能,获得<天妒>.',
                llbz_tonghua_control: '回忆',
                llbz_piaofu: '漂浮',
                llbz_piaofu_info: '锁定技,你始终没有判定阶段、摸牌阶段、出牌阶段、弃牌阶段.',
                llbz_huanjin: '幻景',
                llbz_huanjin_info: '锁定技,转换技,准备阶段,阳:流失1点体力;阴:减少1点体力上限.',
                llbz_huiyi: '回忆',
                llbz_huiyi_info: '锁定技,每当你流失体力后、受到伤害后或减少体力上限后,平安名堇须选择一项:令一名角色回复1点体力或摸一张牌.',
                llbz_tongyuan: '同源',
                llbz_tongyuan_info: '锁定技,平安名堇死亡后,你死亡.',
                llbz_banyan: '扮演',
                llbz_banyan_info: '锁定技,游戏开始时,你从剩余武将牌中随机获得4张武将牌.你的回合开始时,若你的<扮演>牌少于4张则补至4张.',
                llbz_mofang: '模仿',
                llbz_mofang_info: '你于<扮演>牌的无类型标签或仅有锁定技标签的技能发动时机可以发动该技能,你选择一项:1.移去该<扮演>牌,摸一张牌;2.移去另一张<扮演>牌.',
                llbz_xuexi: '学习',
                llbz_xuexi_info: '出牌阶段限一次,你可以弃置一张红色牌,选择一名未被<学习>过的角色,你减少一点体力上限,获得其武将牌上的全部技能.',
                llbz_quanjin: '劝进',
                llbz_quanjin_info: '限定技,当一名其他角色死亡后,你可以选择失去<扮演>或<学习>,增加1点体力上限,回复1点体力,获得其武将牌上所有技能,若如此做,且你至少拥有其一个技能,视为该限定技未发动过.当你进入濒死状态时,你可以增加2点体力上限,回复4点体力.',
                llbz_quanjin_gain: '劝进',
                llbz_tanchi: '贪吃',
                llbz_tanchi_info: '每回合限三次,其他角色于你的回合外于摸牌阶段外获得牌时,你可以摸一张牌,若你的体力值不满,你须将其作为【桃】使用.',
                llbz_zhengshu: '整书',
                llbz_zhengshu_info: '锁定技,牌堆第一次洗牌后,你于回合结束时加1点体力上限,获得<书虫>和<应援>;第二次洗牌后,你于回合结束时回复1点体力,且本局游戏内手牌上限+10.',
                llbz_zhengshu_draw: '书虫',
                llbz_zhengshu_draw_info: '锁定技,你的回合内,当你不因<书虫>获得牌时,你摸一张牌.',
                llbz_zhengshu_give: '应援',
                llbz_zhengshu_give_info: '当你于回合内使用的牌结算完成后,你可以将其交给一名其他角色(相同牌名的牌每回合限一次) .',
                llbz_reqing: '激情',
                llbz_reqing_info: '锁定技,出牌阶段开始时,你须选择一项:出牌阶段基本牌无距离次数限制,造成x点伤害则手牌上限-x;出牌阶段至多使用x张牌,x为你的体力值,若如此做则结束阶段摸两张牌.',
                llbz_reqing_attack: '激情',
                llbz_reqing_attack_info: '本回合使用基本牌无距离次数限制',
                llbz_reqing_biyue: '激情',
                llbz_reqing_defend: '激情',
                llbz_reqing_defend2: '激情',
                llbz_yingzi: '英姿',
                llbz_yingzi_info: '锁定技,摸牌阶段,如果你1.拥有装备,2.体力值满,3.手牌数大于体力上限,每满足一项多摸一张牌.',
                llbz_mashu: '马术',
                llbz_mashu_info: '锁定技,其他角色计算与你的距离+1,你计算与其他角色的距离-1.你受到伤害后,若是本回合第一次受到伤害,回复一点体力;否则摸一张牌.',
                llbz_shanyao: '闪耀',
                llbz_shanyao_misa: '闪耀',
                llbz_shanyao_info: '①当你使用或打出【闪】或【闪电】时,你可以进行判定.②当你的判定的判定牌生效后,若结果为:♦️️,你可对一名其他角色造成2点伤害;♥️️:你回复1点体力并可对一名其他其他角色造成1点伤害.',
                llbz_tianzhen: '天真',
                llbz_tianzhen_misa: '天真',
                llbz_tianzhen_info: '当一名角色的判定牌生效前,你可以打出一张红色牌替换之.当判定牌结果为♠️️时,你可以终止此判定,摸一张牌.',
                llbz_feixiao: '废校',
                llbz_feixiao_info: '主公技,觉醒技,准备阶段或结束阶段,若你是体力值最小的角色,你加一点体力上限,回复一点体力,失去<天真>,获得<觉悟>.',
                llbz_juewu: '觉悟',
                llbz_juewu_info: '锁定技,每个角色准备阶段,你须选择一项:1.其摸两张牌,你回复1点体力;2.你摸两张牌,若你以此法摸牌后手牌数大于8,你失去一点体力.',
                llbz_danchun: '单纯',
                llbz_danchun_info: '锁定技,当你打出或使用一张牌后,摸X张牌(X为此牌牌名数),该技能本回合失效.当你造成或受到伤害后,重置该技能.',
                llbz_danchun_reset: '单纯',
                llbz_kaihua: '开花',
                llbz_kaihua_info: '锁定技,出牌阶段开始时,你减1点体力上限,获得一个<花>标记,摸2*Y张牌(Y为<花>标记数,且至多为5).你的手牌上限始终+Y.',
                llbz_hanbao: '含苞',
                llbz_hanbao_info: '主公技,限定技,任意角色的结束阶段,若该角色本回合发动<协力>,你可以增加1点体力上限,回复1点体力.若该角色不为你,你视为未发动该技能.',
                llbz_xieli: '协力',
                llbz_xieli_info: '团体技,限定技,结束阶段开始时,你可以选择一名莲势力角色,回复其武将牌,若选择的角色不为你自己,你与其回复1点体力值.',
                llbz_lianjie: '连结',
                llbz_lianjie_info: '准备阶段开始时、结束阶段开始时,你可以选择一名角色使其横置或重置武将牌.一名其他角色横置后或重置武将牌后,若你与其存在一种状态相同,你可以摸一张牌.',
                llbz_lianjie_effect_info: '摸一张牌',
                llbz_tongxin: '同心',
                llbz_tongxin_info: '锁定技,其他角色计算与横置状态下的角色距离+1.横置状态下角色相互使用牌无距离限制.',
                llbz_zhaogu: '照顾',
                llbz_zhaogu_info: '当一名角色受到属性伤害后,若其存活且其武将牌横置且是伤害传导的起点且你处于横置状态,则你可以令其回复1点体力,你摸X张牌(X为横置角色的数量并且包括该角色).',
                llbz_sanwu: '三无',
                llbz_sanwu_info: '出牌阶段限一次,若你正面向上,你可以弃置一张牌,翻面.',
                llbz_dianbo: '电波',
                llbz_dianbo_info: '锁定技,若你正面向下,你使用牌无次数限制且不可被响应.你造成或受伤伤害后,你翻面.',
                llbz_zhiqiu: '直球',
                llbz_zhiqiu_info: '你翻面后摸X张牌(X为本回合你翻面的次数且至多为3).',
                llbz_jianshen: '健身',
                llbz_jianshen_info: '出牌阶段限一次,你可以弃置一张牌失去1点体力,摸3张牌,本回合你的出【杀】次数+1,你的【杀】无距离限制.',
                llbz_jianshen2: '健身',
                llbz_chongjing: '憧憬',
                llbz_chongjing_info: '觉醒技,准备阶段开始时,若本局游戏主公不为日野下花帆,你增加1点体力上限,回复1点体力.若你不为主公,你获得你武将牌上的主公技.你始终视为拥有当前主公的主公技.',
                llbz_buzhang: '部长',
                llbz_buzhang_info: '主公技,其他莲势力角色的出牌阶段开始时,你可以令其使用一次<健身>.',
                llbz_chongjing_effect: '憧憬',
                llbz_chongjing_effect_info: '一心憧憬,你视为拥有当前主公的主公技.',
                llbz_huanhua: '幻化',
                llbz_huanhua_info: '锁定技,游戏开始时,你令所有角色增加一点体力上限,获得一个<幻化>标记.你即将受到伤害或流失体力时,若场上存在标记,你取消之并摸一张牌,你须选择一名角色移去‘幻化’标记,其减少一点体力上限,若该角色不为你,其获得<缠怨>和<咩咕>标记.',
                llbz_miegu: '咩咕',
                llbz_miegu_info: '你对拥有<咩咕>标记的角色使用牌无距离和次数限制.你对拥有<咩咕>标记的角色造成伤害后,若你的体力上限不大于三点,你可以增加一点体力上限',
                llbz_zhimian: '直面',
                llbz_zhimian_info: '觉醒技,准备阶段开始时,若场上不存在<幻化>标记,你增加1点体力上限,回复1点体力,摸等同于场上人数的牌.',
                llbz_diaoyu: '钓鱼',
                llbz_diaoyu_info: '锁定技,游戏开始时,你将【钓竿】置入装备区.当你即将失去【钓竿】或即将废除武器栏时,取消之.',
                llbz_liuli: '瑠璃',
                llbz_liuli_info: '锁定技,游戏开始时,你获得2点瑠璃点数.每个准备阶段开始时,你须选择一项:1.摸2张牌,减少1点瑠璃点数;2.弃一张牌,获得1点瑠璃点数.出牌阶段开始时,若你的瑠璃点数低于3点,你跳过你的出牌阶段和弃牌阶段,获得3点瑠璃点数.',
                llbz_diaogan_skill: '钓竿',
                llbz_zhaohuan: '召唤',
                llbz_zhaohuan_info: '锁定技,游戏开始时,你将【莱拉普斯】置入装备区.当【莱拉普斯】进入弃牌堆时,你将其置入装备区.当【莱拉普斯】进入其他角色的装备区时,你装备之.你无法使用或打出手牌区的【杀】.',
                llbz_huanhui: '唤回',
                lailapusi_attack: '莱拉普斯:攻击',
                lailapusi_defend: '莱拉普斯:防御',
                lailapusi_friend: '朋友',
                llbz_zhanbu: '占卜',
                llbz_zhanbu_info: '任意角色的准备阶段开始时,你可以弃置一张手牌,令其进行判定,若判定结果为不为黑色,则根据弃置牌的颜色对其造成如下效果:红色:回复1点体力,摸2张牌;黑色:失去1点体力,弃置两张牌.',
                llbz_xinling: '心灵',
                llbz_xinling_info: '主公技,出牌阶段限一次,你可以发动<心灵的怒吼>,若存在其他幻夜势力角色,你可以发动<心灵的共鸣>、<心灵的爆发>.<心灵的怒吼>:令所有角色各失去1点体力.<心灵的共鸣>:选择一名其他幻夜势力角色,与其各摸一张牌.<心灵的爆发>:选择一名其他幻夜势力角色,对另外一名其他角色分别造成1点伤害.',
                llbz_hymashu: '马术',
                llbz_hymashu_extra: '马术',
                llbz_hymashu_extra_info: '进行一个额外回合.',
                llbz_hymashu_info: '任意角色装备马或【莱拉普斯】时,你可以摸X张牌(X为场上马的数量),若装备的不是【莱拉普斯】,该回合结束时,你可以进行一个额外的回合.',
                llbz_hyqushi: '驱使',
                llbz_hyqushi_info: '你对坐骑区没有牌的角色使用牌无距离限制.当你使用【杀】指定目标后,你可以令该角色的非锁定技失效直到回合结束,你可以选择一个角色装备区的马或【莱拉普斯】,当做同样属性的【杀】对目标使用.',
                llbz_hymofa: '魔法',
                llbz_hymofa_usedskill: '魔法',
                llbz_hymofa_info: '出牌阶段限三次,梨子可以使用书本之中的魔法,只要她提前准备,你可以弃置一张手牌,根据花色获得对应的魔法(锦囊牌)且不计入手牌上限:♥️️:回复魔法,你摸两张牌,目标回复1点体力;♦️️:火焰攻击,对一至三名角色造成1点火焰伤害;♠️️:防御魔法,你令一个目标获得<看破>直到其下个回合开始;♣️️:魔法护盾,你与目标各获得1点护甲.',
                llbz_hykanpo: '看破',
                llbz_hykanpo_info: '你可以将一张黑色牌当作【无懈可击】使用,你摸两张牌弃置一张牌',
                llbz_renshu: '忍术',
                llbz_renshu_info: '锁定技,当你使用【杀】指定目标后,若你的武器栏为空且未废除,你令此【杀】的效果额外结算一次.',
                llbz_kaidi: '凯蒂',
                llbz_kaidi_info: '隐匿技,当你登场后,若当前回合角色存在且不是你,你可令获得<凯蒂>标记直到其下个回合开始.你对有<凯蒂>标记的角色使用牌无次数和距离限制.',
                llbz_shoulie: '狩猎',
                llbz_shoulie_info: '锁定技,当一名角色死亡后,你摸3张牌且不计入手牌上限,该回合结束时重新进入隐匿.若击杀其的角色是你,你可以选择一名未被<凯蒂>标记的其他角色,令其获得<凯蒂>标记,直到其下个回合开始.',
                llbz_shoulie_mark: '狩猎',
                llbz_mowang: '魔王',
                llbz_mowang_info: '锁定技.①当你不因<魔王>使用牌指定唯一的不为自己的目标时,若此牌不为转化牌且对应的实体牌牌数为1且不为【桃】,则你将此牌置于其的武将牌上,称为<魔>,且取消此牌的目标.②回合开始时,若一名角色有<魔>,则你令所有<魔>的原使用者依次对其使用所有<魔>,将无法使用的<魔>置入弃牌堆.',
                llbz_qichang: '气场',
                llbz_qichang_info: '锁定技,你对武将牌上有<魔王>牌的角色或攻击范围内的角色使用牌无次数限制.武将牌上有<魔王>牌的角色不可响应同名的牌.你于回合外使用或打出牌时,你摸一张牌.',
                llbz_jingling: '精灵',
                llbz_jingling_info: '锁定技,每轮开始时,若你的<精灵>数小于3,则补充至3.你对拥有<精灵>的角色使用牌无距离限制.每回合限一次,受到伤害前,你可以失去1个<精灵>取消之.出牌阶段,你可以交给一名其他角色一个<精灵>.出牌阶段开始时,你可以与3个<精灵>合体,回复1点体力,你的<魔王>本回合失效,你使用牌无距离和次数限制且不可响应.',
                llbz_jingling_defend: '精灵',
                llbz_jingling_defend_info: '弃置一个<精灵>,防止此伤害.',
                llbz_jingling_attack: '派遣',
                llbz_jingling_attack_info: '交给一名其他角色一个<精灵>',
                llbz_jingling_llbz_heti: '合体',
                llbz_heti_block: '合体',
                llbz_heti_effect: '合体',
                llbz_xinshi: '信使',
                llbz_xinshi_info: '每两轮限一次,一名角色的回合结束后,你可以将座位移动至一名其他角色的上家之后,执行一个额外回合.',
                llbz_dapao: '大炮',
                llbz_dapao_info: '每轮限一次,你可以选择一名其他角色,令其失去2点体力,该回合结束时,其执行一个额外回合.',
                llbz_dapao_effect: '大炮',
                llbz_feiyue: '飞跃',
                llbz_feiyue_info: '觉醒技,一名角色的回合开始时,若你本局游戏中已发动3次<信使>和<大炮>,则你增加1点体力上限,回复1点体力,获得技能<送信>.',
                llbz_songxin: '送信',
                llbz_songxin_info: '其他角色的出牌阶段开始时,你可以摸两张牌,将两张牌交给该角色.',
                llbz_jinmi: '金迷',
                llbz_jinmi_info: '锁定技,游戏开始时,你令所有玩家各获得150金钱.任何角色对其他角色造成1点伤害时,须交给目标10金钱;使用非伤害类锦囊中唯一目标后,须交给目标10金钱;若金钱不足则取消之.任何角色的回合开始或结束阶段,若你拥有500金币及以上,则以你的阵营获胜结束游戏.',
                llbz_gouwu: '购物',
                llbz_gouwu_info: '出牌阶段限两次,每个选项限一次,你可以花费10金钱购买一张指定类型的随机装备,或花费5金钱购买一张指定的基本牌或锦囊牌.',
                llbz_zhuanqian: '赚钱',
                llbz_zhuanqian_info: '①出牌阶段每个选项各限一次,你可以交给一名其他角色2张牌或令其回复一点体力(目标若未受伤则不能选择此选项),获得其10金钱,若你选择的角色为星势力,你额外获得10金钱.②每回合限一次,你可以跳过判定阶段、摸牌阶段、出牌阶段和弃牌阶段,分别可获得5、10、15金钱.',
                llbz_biaoyan: '表演',
                llbz_biaoyan_info: '你可以将任意牌当做任意基本牌使用或打出,若如此做,你摸一张牌,获得一个<表演>标记.若你以此法使用的牌不为【杀】或以此法使用的牌造成伤害,该技能本回合失效.',
                llbz_yanchu: '演出',
                llbz_yanchu_info: '准备阶段开始时,若你拥有<表演>标记,你可以移去所有标记摸等量的牌,从X张缪、水、星势力武将牌中选择并获得至多2个技能(限定技、觉醒技、隐匿技、使命技、主公技除外),若此时你是体力值最低的角色之一,你回复1点体力该技能视为未发动过(X为场上的角色数且最小为4).',
                llbz_keyan: '科研',
                llbz_keyan_info: '当场上任意角色于自己的回合内使用装备后,你可以摸一张牌,选择是否令其摸一张牌.',
                llbz_ceshi: '测试',
                llbz_ceshi_info: '出牌阶段,你可以将一张装备牌置于其他角色的装备区(可替换原装备),摸一张牌.',
                llbz_shouji: '收集',
                llbz_shouji_info: '当其他角色的装备牌进入弃牌堆时,若此时不为你的回合,你获得之,令其摸一张牌.',
                llbz_chongni: '宠溺',
                llbz_chongni_info: '出牌阶段限一次,你可以选择一名其他角色并弃置一张手牌或将装备区内的一张装备牌置于其装备区,你与其体力较高的角色摸一张牌,体力值较低的角色回复1点体力.若你选择目标为星势力且不为若菜四季,其摸一张牌;若目标为若菜四季则改为从牌堆中随机获得一张装备牌.',
                llbz_xiaoji: '枭姬',
                llbz_xiaoji_info: '当你失去装备区里的一张牌后,你摸两张牌,可以弃置场上的一张牌.若此时场上没有处于濒死状态的角色,你可以选择一名角色造成1点伤害.',
                llbz_jiekong: '姐控',
                llbz_jiekong_info: '锁定技,游戏开始时,若场上有鬼塚夏美,你令其增加一点体力上限,回复1点体力.当其受到伤害后,你受到等量的伤害,当其回复体力后,你回复等量的体力.',
                llbz_lixing: '理性',
                llbz_lixing_info: '锁定技,当你即将受到其他角色造成的伤害时,或即将对其他角色造成伤害时,你防止此伤害,改为受到伤害的角色失去等量的体力.若你以此法每令自己失去体力,你摸X张牌(X为你已损失体力值且最少为2);若你以此法每令其他角色失去1点体力,若你已受伤,你回复1点体力,否则你摸一张牌.',
                llbz_chuxin: '初心',
                llbz_chuxin_info: '锁定技,当你对其他角色造成伤害后,你增加1点体力上限,回复等同于伤害量的体力.',
                llbz_haosheng: '好胜',
                llbz_haosheng_info: '锁定技,当你对体力值小于你的角色造成伤害时,此伤害+1.',
                llbz_douzheng: '斗争',
                llbz_douzheng_info: '每轮开始时、回合开始时,你可以摸X张牌,若你累计获得牌数大于5,你须减少1点体力上限.(若场上存在星势力角色,X为星势力角色数,否则X为场上势力数)',
                llbz_denggao: '登高',
                llbz_denggao_info: '你使用牌时,座次序号小于你的角色不可响应.你对体力值小于你的角色使用牌无次数和距离限制.',
                llbz_gusha: '咕杀',
                llbz_gusha_info: '限定技,当你进入濒死状态时,你可以将体力值回复至1点,将你的武将牌替换为薇恩玛格丽特,将势力变换为星.',
                llbz_bianhuan: '变换',
                llbz_bianhuan_info: '出牌阶段限两次,若你是体力上限最高的角色,你减1点体力上限,否则你增加1点体力上限,回复1点体力,你摸一张牌.',
                llbz_fushen: '附身',
                llbz_fushen_info: '限定技,若你已发动过<变换>,你可以选择一名其他角色附身,其摸X张牌(X为你发动<变换>的次数),并且增加你体力上限值的体力上限,回复1点体力,出牌阶段出杀次数+1,你进入休整.当该角色死亡后或场上剩余玩家不足2名时,你的下一个回合开始时,你复活,移除该技能的全部加成.',
                llbz_mianbao: '面包',
                llbz_mianbao_tag: '面包',
                llbz_mianbao_mark: '面包',
                llbz_mianbao_info: '出牌阶段限三次,你可以交给一名其他角色一张手牌称为<面包>,该牌在其手中视为【桃】,你摸一张牌且不计入本回合的手牌上限.',
                llbz_guwu: '鼓舞',
                llbz_guwu_info: '锁定技,获得<面包>的角色直到下一个回合结束前,手牌上限等于体力上限且出【杀】次数+1.',
                llbz_jixie: '机械',
                llbz_jixie_info: '出牌阶段限一次,你可以废除一种装备栏,执行对应一项:武器栏:你使用【杀】无距离限制且出牌阶段出【杀】次数+1;防具栏:锁定技,黑色的【杀】对你无效,摸牌阶段你额外摸一张牌;坐骑栏,你计算与其他角色的距离-1,其他角色计算与你的距离+1;宝物栏,你获得<集智>.',
                llbz_fushou: '副手',
                llbz_fushou_info: '限定技,游戏开始时,获得副将琥珀;若模式为双将模式,将你的副将替换为琥珀,若你的主角不为黛雅则替换为黛雅.',
                llbz_henshin: '变身',
                llbz_henshin_info: '锁定技,游戏开始时,你获得8个代扣.出牌阶段开始时,你可以使用一个代扣与另一个代扣组成Dual on,若你已使用完全部代扣,你失去该技能.',
                llbz_Magnum: '马格南',
                llbz_Magnum_info: '锁定技,你的【杀】使用次数+2.出牌阶段,可以切换为步枪模式',
                llbz_Magnum_gun: '马格南',
                llbz_Magnum_gun_info: '锁定技,你的【杀】不可被响应.',
                llbz_Zombie: '僵尸',
                llbz_Zombie_info: '锁定技,在你造成伤害时,此伤害增加X(X为你已损失的体力值),目标所有非锁定技失效直到该回合结束.每轮限一次,你即将受到不小于你当前体力值的伤害时,取消之.',
                llbz_Ninja_info: '锁定技,每回合限一次,即将受到伤害时,取消之.',
                llbz_Ninja: '忍者',
                llbz_Beat: '节拍',
                llbz_Beat_info: '锁定技,当你使用或打出有花色的牌时,你令所有其他角色于此回合内不能使用或打出该花色的牌.',
                llbz_Monster: '怪兽',
                llbz_Monster_info: '锁定技,体力值大于你的角色,你对其伤害+1.',
                llbz_FeverSlot: '狂热',
                llbz_FeverSlot_info: '锁定技,随机获得一个你未使用的角色代扣(Magnum/Zombie/Ninja/Beat).',
                llbz_Boost: '推进器',
                llbz_Boost_info: '锁定技,你的【杀】使用次数+1.你造成的伤害均视为火焰伤害并且伤害+1.',
                llbz_LaserRaiseRiserBoostMk2: 'LaserRaiseRiserBoostMk2',
                llbz_LaserRaiseRiserBoostMk2_info: '锁定技,每回合限一次,当一名角色使用牌指定一名不为自己的目标后,你可以改变其目标.你的【杀】使用次数+2,你使用牌无距离限制且不可响应.',
                llbz_BujinSword: 'BujinSword',
                llbz_BujinSword_info: '锁定技,每回合限一次,你使用【杀】造成伤害后,若伤害值低于其体力值,则将伤害值改为其体力值.你的【杀】使用次数+1且无视防具,你使用牌无距离限制.',
                llbz_Fantasy: 'Fantasy',
                llbz_Fantasy_info: '锁定技,于你的回合内,你使用锦囊牌和【杀】无距离限制.你使用锦囊牌后摸一张牌.每回合限一次,当你成为锦囊牌的目标后,取消之.',
                llbz_supporter: '支持',
                llbz_supporter_info: '觉醒技,当你进入濒死状态时,你移去副将,回复体力至体力上限;结束阶段,你失去<变身>后,若你仍有副将,你可以从将军代扣、幻象代扣、激光镭射MK2中选择一项使用.',
                llbz_chuangshi: '创世',
                llbz_chuangshi_info: '限定技,出牌阶段,若你拥有将军代扣、幻象代扣、激光镭射MK2中任何一样或你已被露比附身,你失去所有代扣,变身为MK9.',
                llbz_BoostMkIX: 'BoostMkIX',
                llbz_BoostMkIX_info: '锁定技,回合开始时,将极狐破坏者QB9置入装备区,该装备在离开装备区时被销毁,你装备该装备时,你可以对任意一名角色造成1点火焰伤害,出牌阶段限一次.任何角色受到伤害后,你可以令其回复等同于伤害值的血量,若该角色为你或伤害来源不为你,本回合此效果失效.其他角色的回合结束后,你执行一个回合.回合开始时,若可以移动场上的牌,你可以移动场上的牌.限定技,对一名角色造成3点火焰伤害.',
                llbz_BoostMkIXVictory: 'BoostMkIXVictory',
                llbz_fuzuo: '辅佐',
                llbz_fuzuo_info: '锁定技,当你受到1点伤害后,展示牌堆顶一张牌,若为红色,你回复1点体力;若为黑色,你摸一张牌.',
                llbz_BoostTacticalVictory: 'BoostTacticalVictory',
                llbz_caiyi: '裁衣',
                llbz_caiyi_info: '你的回合限一次,你使用一张非转化实体牌后,你可以将其的两张复制置入牌堆(无点数 花色分别为♥️️和♠️️),该牌洗牌后移除牌堆.任意角色获得该牌后,其展示该牌摸一张牌,若该牌花色为♥️️,你回复1点体力,否则你摸两张牌.',
                llbz_tongdao: '通道',
                llbz_tongdao_info: '出牌阶段限一次,你可以将所有手牌暂时移除游戏,摸等量的牌,回合结束时,你将所有手牌置入牌堆,获得你移除游戏的牌.',
                llbz_fenghun: '凤魂',
                llbz_fenghun_info: '每回合每种牌名限一次,你可以将X张牌当做任意一张非装备牌使用或打出(X为你的体力值且最小为0).',
                llbz_lingyu: '领域',
                llbz_lingyu_info: '锁定技.①游戏开始时,你将9张【万箭齐发】和9张黑色的【闪】加入牌堆.', //②黑色的【闪】使用或打出时,你可以从牌堆中获得一张【万箭齐发】.
                llbz_gaoshou: '糕手',
                llbz_gaoshou_info: '使命技,当你使用牌执行第一个目标后,若此牌指定的目标数大于1,你可以令此牌改为对其中一名目标角色结算X次(X为此牌的其他目标数且至多为3).使命达成:你使用【杀】或【万箭齐发】造成Y点伤害(Y为本局游戏的人数),则你获得技能〖大神〗.失败:你死亡后,若你体力上限大于1,则减少1点体力上限复活;否则你死亡.',
                llbz_spzhiheng: '大神',
                llbz_spzhiheng_info: '①出牌阶段限一次,你可以弃置任意张牌并摸等量的牌,如果在发动该技能时弃置了所有手牌,你额外摸一张牌(尽可能摸好牌).②每回合限一次,你造成伤害后,视为该技能①效果未发动过.',
                llbz_zhuoqing: '灼情',
                llbz_zhuoqing_info: '锁定技,你的非锁定技无效.你于出牌阶段使用牌后,你令你使用的下一张牌无次数限制,失去此技能并对自己造成1点火焰伤害.',
                llbz_yuhuo: '浴火',
                llbz_yuhuo_info: '锁定技,每名角色的结束阶段,你回复X点体力(X为你本回合受到的火焰伤害数).',
                llbz_chuanzhu: '传烛',
                llbz_chuanzhu_info: '锁定技,你于出牌阶段使用的第一张牌无距离限制,且此牌造成的伤害改为火焰伤害;当你对一名角色造成火焰伤害后,你令其摸一张牌并获得〖灼情〗.',
                llbz_liaoyuan: '燎原',
                llbz_liaoyuan_info: '主公技,锁定技,其他虹势力角色造成火焰伤害后,你摸一张牌.',
                llsp_wu_wudao: '武道',
                llsp_wu_wudao_info: '锁定技,你即将对其他角色造成伤害时,若其拥有护甲则全部失去,反之你摸等同于此次伤害值数量的牌.',
                llsp_wu_jidang: '激荡',
                llsp_wu_jidang_info: '锁定技,你造成或受到伤害后获得等同于伤害量的<燃>标记.你获得5个<燃>标记后,使用伤害类牌的基础伤害+1,之后每获得10个<燃>标记+1.',
                llsp_wu_zhanjue: '战绝',
                llsp_wu_zhanjue_info: '任意角色进入濒死状态时,你获得一个<燃>标记.若其体力值小于0,你获得使其进入濒死状态的牌.',
                llsp_wu_guimei: '鬼魅',
                llsp_wu_guimei_info: '每回合每名角色限一次,当一名处于你攻击范围内的其他角色于摸牌阶段外获得牌后,你可以获得其一张牌.',
                llsp_wu_gantian: '甘甜',
                llsp_wu_gantian_info: '锁定技,你使用【酒】或【桃】的基础数值+1.当一名其他角色失去最后的手牌后,其视为使用一张【酒】,其直到你下一个回合结束前其不能使用或打出牌响应你的牌,你对其使用牌无距离限制.',
                llsp_wu_keren: '可人',
                llsp_wu_keren_info: '你受到其他角色造成的伤害后,若其体力值大于3,你可以令其受到1点无来源伤害;你可以从牌堆或弃牌堆中获得X+1张你指定点数的牌(X为此次伤害值).',
                llsp_wu_tianxie: '天邪',
                llsp_wu_tianxie_info: '锁定技,你的手牌上限+X(X为场上受伤或死亡的角色数).回合开始时,若场上死亡人数大于存活人数,你执行一个额外的出牌阶段.',
                llsp_wu_qiangshi: '强识',
                llsp_wu_qiangshi_info: '锁定技,你于回合内使用一张非转化非虚拟的基本或锦囊牌后,记录该牌.',
                llsp_wu_songwen: '颂文',
                llsp_wu_songwen_info: '你于回合内可以将一张牌当做〖强识〗记录的牌使用,你须选择一项:1.移除该记录,摸一张牌;2.令本回合本技能无法再使用此牌名的牌,从牌堆或弃牌堆中获得该牌.',
                llsp_wu_shenghua: '生花',
                llsp_wu_shenghua_info: '限定技,出牌阶段,你可以选择任意一张牌当做〖强识〗记录的牌,移除本回合〖颂文〗已无法使用的牌.',
                llsp_qinyin: '琴音',
                llsp_qinyin_info: '任何角色的弃牌阶段结束时,若其于此阶段弃置过两张或更多的牌,则你可以选择一项:1.令一名角色摸两张牌;2.令一名角色失去1点体力;3.令一名角色回复1点体力.',
                llsp_qiangwei: '蔷薇',
                llsp_qiangwei_info: '锁定技,缪势力技,任何角色使用♣️️牌时,你获得一个标记并摸一张牌,若此时你的标记为5的倍数且该角色不为你,你可以观看其手牌,并弃置其所有花色不为♣️️的手牌,你摸等量的牌.',
                llsp_fenfei: '纷飞',
                llsp_fenfei_info: '水势力技,出牌阶段限两次,你可以选择一名其他角色,观看其手牌并且选择一种花色,你与其弃置所有选择花色的手牌,若你弃置的牌数量不小于其弃置的牌,你对其造成1点伤害.',
                llsp_zhuanxiao: '转校',
                llsp_zhuanxiao_info: '你对其他角色造成伤害时,你可以令此次伤害增加1点且移除此次伤害来源,你变更势力.',
                llsp_luanyin: '乱樱',
                llsp_luanyin_info: '锁定技,每轮游戏开始时,你摸X张牌(X为全场势力数),你须弃置其中所有花色不为♣️️的牌.',
                llsp_shengfang: '盛放',
                llsp_shengfang2: '盛放',
                llsp_shengfang_info: '每轮限一次,当弃牌堆首次进入四种不同花色时,该回合结束后,你可以执行一个额外回合,若该回合弃牌阶段结束时置入弃牌堆的牌的花色只有♣️️,则你可以于该回合结束时执行一个额外回合,否则你将本回合进入弃牌堆的牌交给一名其他角色.',
                llsp_yuepu: '乐谱',
                llsp_yuepu_info: '锁定技,每轮开始时,你清除已有的乐谱,你选择五个音符构成一个乐谱.当乐谱被奏响后,你从牌堆中获得乐谱对应点数的牌,若最后奏响的角色是你,你可以重新设置一个乐谱.',
                llsp_yuepu_qa: '关于乐谱',
                llsp_yuepu_qa_info: '乐谱为五个点数构成,任意角色使用或打出对应乐谱点数的牌时即为奏响乐谱.',
                llsp_jiepai: '节拍',
                llsp_jiepai_info: '锁定技,转换技,当一名角色使用牌时,阳:若本局游戏内被使用的牌次数和为3的倍数;阴:若本局游戏内被使用的牌次数和为7的倍数,且使用者为你/其他角色,你令此牌无距离与次数限制/无效.',
                llsp_huoxing: '火星',
                llsp_huoxing_info: '锁定技,你的其他charlotte技失效.',
                llsp_guilai: '归来',
                llsp_guilai_info: '限定技,当你死亡后,击杀你的角色获得<归来>标记.拥有<归来>标记的角色死亡后,你复活.你击杀其他角色后,重置该技能.',
                llsp_nuquan: '怒拳',
                llsp_nuquan_info: '锁定技,当你受到1点伤害后,你获得1点愤怒值.你造成伤害时,可以消耗所有愤怒值,令此次伤害+X(X为消耗的愤怒值).',
            },
            pinyins: {
                高海千歌: ['Takami', 'Chika'],
                樱内梨子: ['Sakurauchi', 'Riko'],
                黑泽露比: ['Kurosawa', 'Ruby'],
                高坂穗乃果: ['Kosaka', 'Honoka'],
                上原步梦: ['Uehara', 'Ayumu'],
                涩谷香音: ['Shibuya', 'Kanon'],
                樱阪雫: ['Osaka', 'Shizuku'],
                中须霞: ['Nakasu', 'Kasumi'],
                优木雪菜: ['Yuki', 'Setsuna'],
                朝香果林: ['Asaka', 'Karin'],
                艾玛维尔德: ['Emma', 'Verde'],
                宫下爱: ['Miyashita', 'Ai'],
                近江彼方: ['Konoe', 'Kanata'],
                米娅泰勒: ['Mia', 'Taylor'],
                三船盐子: ['Mifune', 'Shioriko'],
                钟岚珠: ['Zhong', 'Lanzhu'],
                津岛善子: ['Tsushima', 'Yoshiko'],
                黑泽黛雅: ['Kurosawa', 'Dia'],
                园田海未: ['Sonoda', 'Umi'],
                南小鸟: ['Minami', 'Kotori'],
                矢泽妮可: ['Yazawa', 'Nico'],
                小泉花阳: ['Koizumi', 'Hanayo'],
                西木野真姬: ['Nishikino', 'Maki'],
                洵濑绘里: ['Ayase', 'Eli'],
                东条希: ['Tojo', 'Nozomi'],
                星空凛: ['Hoshizora', 'Rin'],
                渡边曜: ['Watanabe', 'You'],
                松浦果南: ['Matsuura', 'Kanan'],
                岚千纱都: ['Arashi', 'Chisato'],
                叶月恋: ['Hazuki', 'Ren'],
                平安名菫: ['Heanna', 'Sumire'],
                唐可可: ['tang', 'keke'],
                国木田花丸: ['Kunikida', 'Hanamaru'],
                天王寺璃奈: ['Tennoji', 'Rina'],
                小原鞠莉: ['Ohara', 'Mari'],
                樱小路希奈子: ['Sakurakoji', 'Kinako'],
                米女芽衣: ['Yoneme', 'Mei'],
                若菜四季: ['Wakana', 'Shiki'],
                鬼塚夏美: ['Onitsuka', 'Natsumi'],
                鬼塚冬逑: ['Onitsuka', 'Tomari'],
                薇恩: ['Wien'],
                薇恩玛格丽特: ['Wien', 'Margarete'],
                日野下花帆: ['Hinoshita', 'Kaho'],
                村野纱耶香: ['Murano', 'Sayaka'],
                夕雾缀理: ['Yugiri', 'Tsuzuri'],
                乙宗梢: ['Otomune', 'Kozue'],
                藤岛慈: ['Fujishima', 'Megumi'],
                大泽瑠璃乃: ['Osawa', 'Rurino'],
                夜羽: ['Yohane'],
                梨子: ['Riko'],
                千歌: ['Chika'],
                魔王鞠莉: ['Mari'],
                曜: ['You'],
                露比: ['Ruby'],
                果南: ['Kanon'],
                花丸: ['Hanamaru'],
                黛雅: ['Dia'],
            },
            dynamicTranslate: {},
        };
        lib.config.all.characters.add('lovelive');
        lib.translate['lovelive_character_config'] = "<span style='color: #28e3ce'>拉拉</span>";
        lib.config.characters.add('lovelive');
        for (var i in lovelive.character) {
            lovelive.character[i][4].push('ext:拉拉/image/character/' + i + '.jpg');
        }
        return lovelive;
    });
});
