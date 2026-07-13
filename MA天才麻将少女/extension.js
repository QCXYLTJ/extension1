import { lib, game, ui, get, ai, _status } from '../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/MA天才麻将少女/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: 'MA天才麻将少女',
        content(config, pack) {
            lib.rank.rarity.legend.addArray(['masaki_piangangyouxi', 'masaki_gongyongxiao', 'masaki_longmenyuantouhua', 'masaki_gaoyawennai', 'masaki_jiazhimuyoumei', 'masaki_gongyongzhao', 'saki_songshiyou', 'masaki_yuanchengsilian', 'saki_aidangyangjia', 'masaki_shendaixiaoshi', 'masaki_shihuxia', 'saki_xiaolaichuanbaiwang', 'masaki_zidaifengyin']);
            lib.rank.rarity.epic.addArray(['masaki_mengnaizhenfan', 'masaki_zhujingjiu', 'masaki_zecunzhiji', 'masaki_tianjiangyi', 'masaki_chituqinghui', 'masaki_fulumeihuizi', 'masaki_puyuanzhimei', 'masaki_hongshijin', 'masaki_yiyechengzi', 'masaki_daxingdan', 'masaki_shiyuanneizhiye', 'masaki_queminghua', 'masaki_ertiaoquan', 'masaki_jiangkouxi', 'masaki_qingshuigulonghua', 'saki_zhenlaiyouzi', 'masaki_bomochumei']);
            lib.rank.rarity.rare.addArray(['masaki_moyuangongzi', 'masaki_ranguzhenzi', 'masaki_yuancunhe', 'masaki_xuhejingtailang', 'masaki_jingshangchun', 'masaki_jiliumochun', 'masaki_wentangxingxia', 'masaki_shengkuchundai', 'masaki_chitianhuacai', 'masaki_guoguangyi', 'masaki_jinshanmuyue', 'masaki_meiweijiazhi', 'masaki_donghengtaozi', 'masaki_songshixuan', 'masaki_xinzichong', 'masaki_lusenzhuo', 'masaki_seguyaosheng', 'masaki_haohuiyu', 'masaki_meigendaiwen', 'masaki_NellyVirsaladze', 'masaki_chuanjiubaohaozi', 'masaki_shangchongman', 'saki_aidangjuanhui', 'masaki_shousuba', 'masaki_longjianchun']);
            lib.rank.rarity.junk.addArray([]);
            var style79 = document.createElement('style');
            style79.innerHTML = ".player .identity[data-color='saki'],";
            style79.innerHTML += "div[data-nature='xiao'],";
            style79.innerHTML += "span[data-nature='saki'] {text-shadow: black 0 0 1px,rgba(255,105,180,1) 0 0 2px,rgba(255,105,180,1) 0 0 5px,rgba(255, 180, 0,1) 0 0 10px,rgba(255,105,180,1) 0 0 10px}";
            style79.innerHTML += "div[data-nature='saki'],";
            style79.innerHTML += "span[data-nature='xiao'] {text-shadow: black 0 0 1px,rgba(255,105,180,1) 0 0 2px,rgba(255,105,180,1) 0 0 5px,rgba(255, 180, 0,1) 0 0 5px,rgba(255,105,180,1) 0 0 5px,black 0 0 1px;}";
            style79.innerHTML += "div[data-nature='saki'],";
            style79.innerHTML += "span[data-nature='saki'] {text-shadow: black 0 0 1px,rgba(255,105,180,1) 0 0 2px,rgba(255,105,180,1) 0 0 2px,rgba(255, 180, 0,1) 0 0 2px,rgba(255,105,180,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style79);
            lib.group.add('saki');
            lib.translate.saki = '咲';
            lib.translate.saki2 = '咲';
            lib.groupnature.saki = 'saki';
            lib.translate.general_qingchenggaoxiao = '清澄高校';
            lib.translate.general_longmenyuan = '龙门渊';
            lib.translate.general_fengyuenvzi = '风越女子';
            lib.translate.general_hehexueyuan = '鹤贺学院';
            lib.translate.general_azhihe = '阿知贺';
            lib.translate.general_baixitai = '白系台';
            lib.translate.general_linhainvzi = '临海女子';
            lib.translate.general_qianlishan = '千里山';
            lib.translate.general_jisonggaozhong = '姬松高中';
            lib.translate.general_yongshuinvzi = '永水女子';
            lib.translate.general_gongshounvzi = '宫守女子';
            lib.translate.general_sakiqitajuese = '其他角色';
        },
        precontent(MAtcmjsn) {
            game.import('character', function () {
                var MAtcmjsn = {
                    name: 'MAtcmjsn',
                    connect: true,
                    characterSort: {
                        MAtcmjsn: {
                            general_qingchenggaoxiao: ['masaki_gongyongxiao', 'masaki_yuancunhe', 'masaki_piangangyouxi', 'masaki_ranguzhenzi', 'masaki_zhujingjiu', 'masaki_xuhejingtailang'],
                            general_longmenyuan: ['masaki_longmenyuantouhua', 'masaki_guoguangyi', 'masaki_zecunzhiji', 'masaki_jingshangchun', 'masaki_tianjiangyi'],
                            general_fengyuenvzi: ['masaki_fulumeihuizi', 'masaki_jiliumochun', 'masaki_wentangxingxia', 'masaki_shengkuchundai', 'masaki_chitianhuacai'],
                            general_hehexueyuan: ['masaki_puyuanzhimei', 'masaki_jinshanmuyue', 'masaki_jiazhimuyoumei', 'masaki_meiweijiazhi', 'masaki_donghengtaozi'],
                            general_azhihe: ['masaki_songshixuan', 'saki_songshiyou', 'masaki_xinzichong', 'masaki_chituqinghui', 'masaki_gaoyawennai', 'masaki_lusenzhuo'],
                            general_baixitai: ['masaki_gongyongzhao', 'masaki_hongshijin', 'masaki_seguyaosheng', 'masaki_yiyechengzi', 'masaki_daxingdan'],
                            general_linhainvzi: ['masaki_shiyuanneizhiye', 'masaki_haohuiyu', 'masaki_queminghua', 'masaki_meigendaiwen', 'masaki_NellyVirsaladze'],
                            general_qianlishan: ['masaki_yuanchengsilian', 'masaki_ertiaoquan', 'masaki_jiangkouxi', 'masaki_chuanjiubaohaozi', 'masaki_qingshuigulonghua'],
                            general_jisonggaozhong: ['masaki_moyuangongzi', 'masaki_shangchongman', 'saki_zhenlaiyouzi', 'saki_aidangjuanhui', 'saki_aidangyangjia'],
                            general_yongshuinvzi: ['masaki_shendaixiaoshi', 'masaki_shousuba', 'masaki_longjianchun', 'masaki_bomochumei', 'masaki_shihuxia'],
                            general_gongshounvzi: ['saki_xiaolaichuanbaiwang', 'masaki_zidaifengyin'],
                            general_sakiqitajuese: ['masaki_mengnaizhenfan'],
                        },
                    },
                    character: {
                        masaki_moyuangongzi: ['female', 'saki', '4/4/2', ['masaki_duangua', 'masaki_xiansheng', 'masaki_suming'], ['des:姬松高中三年级学生,麻将部部长,团体赛的位置为大将,在队伍中是实力仅次于爱宕洋榎的选手.军师型人物,会为了比赛收集分析对手情报,自称是凡人,没有外挂,只能靠思考来追赶,但相信有外挂存在,这一点和完全数据流的原村和不同.  二回战输给宫永咲后与队友回看对局,掌握了咲快摸到杠材时会看一眼牌山的特点.三回战多次利用这点跳过咲摸杠材的机会,有效封印了咲的岭上开花,逼迫咲打起了<普通>的麻将.  此外拥有类似上条当麻的幻想之手,能快速通过鸣牌听牌并自摸,被称为超速攻.经常阻断咲的攻势,也能硬抗狮子原爽的花式外挂,甚至后来跟咲进行纯拼雀力(无挂肉搏)也不落下风,实力可见一斑']],
                        masaki_gongyongxiao: ['female', 'saki', 3, ['masaki_lingshangkaihua', 'masaki_zhengfuling'], ['des:咲自小就开始打麻将,但小时因家里的麻将会赌钱点心,而且咲被教育说「赢钱点心是不好的」,加上咲不想输掉红包钱到嘴巴的点心的缘故,因此在不断磨练的状况下,养成了打±0分的习惯.  目前与父亲同住在长野,于清澄高校就读.分居中的母亲和姐姐住在东京']],
                        masaki_yuancunhe: ['female', 'saki', 4, ['masaki_xinshili', 'masaki_juyou', 'masaki_buwei'], ['des:长野县清澄高校一年生,于麻将大赛团体赛担任清澄代表队的副将.  日本网络麻将的都市传说<小和和>的正体.  曾获得全国初中生麻将大赛个人战冠军, 具有经验的实力派.是完全不靠运气、贯彻到底的理论派和数据派(其实可以在进入状态时变身马猴烧酒/天使/圆环之理),名言有<这种不合常理的东西是不可能的>,同时也拒绝相信一切不符合理论的麻将现象.在竹井久的指点下,能以对电脑麻将的方式无视对手的存在与牌桌上气息的流动,因此也成为迄今唯一一个能完全无视东横桃子的隐身能力的人.擅长打网络麻将,在抱着企鹅玩偶艾托时会发挥意想不到的实力']],
                        masaki_piangangyouxi: ['female', 'saki', 3, ['masaki_dongfeng', 'masaki_juanbing', 'masaki_tianhe'], ['des:在麻将对战中属于速攻型,在前半场(东场)有值得夸耀的胜率,不过后半场(南场)显得美中不足,考试时常不合格特别是数学考试,点数计算能力较差.  最喜欢的东西是墨西哥饼(英文名taco,日语带复数读作タコス),时常在赛前或赛中让麻将部的酱油成员须贺京太郎跑腿去买墨西哥饼以回复精力.实际上除了墨西哥饼以外,只要是タコ开头的食物都能作为自己的精力来源,比如章鱼小香肠(八爪鱼也读作タコ)等等.如果没有吃的话打麻将的斗志会下沉 ']],
                        masaki_mengnaizhenfan: ['female', 'saki', 4, ['masaki_fuzhi'], ['des:高远原中学初中二年级学生,被称为<永远的初学者>的女生.  与青梅竹马的室桥裕子经常一起出现,被称为<室真帆组合>.  非常钦佩自己原来的学姐原村和,经常模仿其打牌风格.会使用ID<超级小真帆>进行线上的麻将游戏,但却玩得很差,rank只有1200多.  明明打了一年多的麻将,但却经常会犯初学者犯的错误,每天总会错和几回']],
                        masaki_ranguzhenzi: ['female', 'saki', 4, ['masaki_yipu'], ['des:家中经营一间名叫<Roof-top>的麻将馆(TV版为可以打麻将的咖啡店),是以让女员工穿着女佣服来代打作为卖点的<女佣麻将馆>.  平时戴着眼镜,在重要的比赛中会摘下眼镜让视线变得模糊不清,从而进行牌谱回忆.擅长做一色牌.最喜欢的役满类型是绿一色']],
                        masaki_zhujingjiu: ['female', 'saki', 4, ['masaki_huaiting', 'masaki_xinzhan', 'masaki_jiudi'], ['zhu', 'des:清澄高校3年级生.  学生议会会长兼麻将部部长.  于队中担任中坚位置,以大会冠军为目标而燃起了沉着的斗志.  有摔牌的习惯.认真打牌的时候会将头发绑成两个小辫子,并挽起袖子.  初中3年级时以<上埜(yě) 久(うえの ひさ)>的名字参加过全国初中生麻将大会,而后因家庭变故改名为竹井']],
                        masaki_xuhejingtailang: ['male', 'saki', 5, ['masaki_lixue', 'masaki_paotui'], ['des:清澄高校一年级学生,麻将部唯一的男子成员.  宫永咲的青梅竹马.  麻将初学者,在作品中更多地作为应援角色出场']],
                        masaki_longmenyuantouhua: ['female', 'saki', 3, ['masaki_zhishui', 'masaki_zhenzhong', 'masaki_zhilan'], ['zhu', 'des:高中2年级.龙门渊高校四天王之一.祖父是龙门渊高校的理事长,是名才色兼备的大小姐.因为非常显眼,因此对受人注目感到无上的高兴,也非常希望自己能够被人注意.与天江衣是表姐妹,曾被父亲告诫<不要接近天江衣,那是你远远无法理解的人>,但她还是认为这只是笑话而对衣亲近亦将其当做姐妹,但对衣的麻将能力感到恐怖,在中学三年级时网罗国广一、井上纯、泽村智纪到她家作为女仆且陪打麻将.对于麻将属于理论派,但对于越是强大的对手就越能激发出另一个透华的个性(治水透华:极其冷酷亦不留缝隙),在全国大赛时拥有很高的和牌率,在比赛前就曾经在网络上与各强者比试,如看过S级职业联赛的职业麻将家牌谱跟自己的打法不同时会思考理由,并通过德国汉诺威的研究所协助得到大量牌谱的统计资料']],
                        masaki_guoguangyi: ['female', 'saki', 4, ['masaki_qianshu', 'masaki_juezhi'], ['des:龙门渊高中四天王之一.  父亲是魔术师但看来难以维持生计,中学三年级暑假被父亲送到龙门渊家成为龙门渊透华的贴身女仆.  透华看出她有麻将的天赋而强迫她编入龙门渊中学部.  脸上贴着星星形状的贴纸,手上系着的锁链是透华为了防止她作弊而让她带上的,取得透华的信任后亦没有将锁链卸下,因为戴着锁链会觉得透华就在身边.  与好出风头的透华不一样,不习惯受注目. ']],
                        masaki_zecunzhiji: ['female', 'saki', 4, ['masaki_shishi', 'masaki_boxue'], ['des:龙门渊高校的四天王之一.  个性冷静、沉默寡言,擅长电脑']],
                        masaki_jingshangchun: ['female', 'saki', 4, ['masaki_duanshi'], ['des:井上纯,高中二年级生,龙门渊高中四天王之一,外表看起来像是个男生,习惯以<俺>自称.在和别人打麻将时,即使是坐在椅子上也要以坐禅的姿势来坐着. 此外她还拥有经常以吃、碰、听牌来让自己能够支配牌局,使自己在对局的时候经常处于优势的能力']],
                        masaki_tianjiangyi: ['female', 'saki', 3, ['masaki_duting', 'masaki_yueman', 'masaki_haidilaoyue', 'masaki_manyue'], ['des:全国大赛的MVP选手.打法看起来像外行人一样,但在全国大赛中一回战击飞两家、二回战击飞三家,是知名的高火力选手.曾和职业雀士藤田靖子一起参加过某个友谊赛,因得点最高而拿下了冠军']],
                        masaki_fulumeihuizi: ['female', 'saki', 4, ['masaki_xianshu', 'masaki_lizhan', 'masaki_kaiyan', 'masaki_qixin'], ['zhu', 'des:风越女子高中麻将部部长,队内统称队长,高中三年级.  温柔又贤惠,为他人着想,包办了部内的一切大小事务如洗衣做饭打扫等,深受部员们的信赖和喜爱.  安慰人的方式是拥抱.  为人随和,待人亲切,在最后一天决赛时担任先锋,在赛前因为清澄的片冈优希被龙门渊的井上纯吃掉了墨西哥饼而温柔地给她便当吃,是个很容易让人喜爱的大姐姐. ']],
                        masaki_jiliumochun: ['female', 'saki', 4, ['masaki_jushou'], ['des:在长野县预选赛决赛中作为次锋与染谷真子,泽村智纪,妹尾佳织同桌竞技,败给了身为初学者的妹尾.在四校合宿时试图报仇却再次被初学者的好运击败,认为妹尾在乳量方面也是敌人.县预选赛的个人战中曾经与宫永咲同桌竞技,并且成功靠和牌破坏掉咲的杠']],
                        masaki_wentangxingxia: ['female', 'saki', 4, ['masaki_susheng', 'masaki_banggu'], ['des:风越女子高校麻将部成员,只用了两个月时间就成为豪强校正选的新人,尽管身高在参赛5人里最高但其实是唯一一位1年级生']],
                        masaki_shengkuchundai: ['female', 'saki', 6, ['masaki_zhugu'], ['des:风越女子高中二年级学生.麻将水平校内排名第三的实力型选手,在团体战中位置为副将.朝臣脸,麻花辫,体型较胖.福路美穗子去东京参加全国大赛个人赛时没有被教练久保贵子安排跟去学习,而是和文堂星夏一起留下来帮助照看池田华菜的三胞胎妹妹']],
                        masaki_chitianhuacai: ['female', 'saki', 4, ['masaki_houyan', 'masaki_jiji', 'masaki_nijing'], ['des:团体赛最后一轮,被天江衣用三连海底捞月和数次直击裱上天赢光点数,变成零点数的濒死状态.天江衣这么做同时也封印了当时二三位的大魔王和勇者的自摸. 之后一局做出了无役听牌,但没有点数无法立直导致理论上只能自摸,但被大魔王故意拿铳牌加杠送分,和到抢杠+宝牌7,解除了濒死状态. 再下一局开回忆杀,并发出怒吼找回了运势,当场再和了个累计役满,分数回到安全的五万.然而之后再没和过,即便有几局做出大牌听牌,但是也被他家截和 最后一局达成了四暗刻(单骑)自摸的牌型,但是分数无法逆一,所以故意拒和准备赌流局']],
                        masaki_puyuanzhimei: ['female', 'saki', 4, ['masaki_feiche', 'masaki_wahaha', 'masaki_hujia'], ['zhu', 'des:3年级.有奇怪的发型,同时能发出奇怪的<哇哈哈>笑声(因此被称为哇哈哈),平时一脸无忧无虑的样子.鹤贺学园麻将部真正的部长,而藤田雀士一直误认为加治木由美是部长.长野预选大赛结束后将部长位置交接给二年级的津山睦月. 妹尾佳织的幼驯染. 跟加治木由美一年级时便相识,在学园祭时开始交往亲密.最初和由美等人玩麻将卡片游戏,让由美迷上了麻将.和由美一起建立麻将部. 曾经鼓励过东横桃子要相信由美.是个很关心部员的好部长.实际上具有很强的组织能力']],
                        masaki_jinshanmuyue: ['female', 'saki', 4, ['masaki_jika', 'masaki_zhiji'], ['zhu', 'des:津山睦月本身没有能力,而且也不能像加治木由美那样变换打法来克制对方.在决赛上也就只和过两次牌.  但是她和的两次牌很关键:第一次和牌是在先锋后半庄东四局,只有发财,1300分,但成功使东风战结束并导致片冈优希进入令她痛苦的南风战.  第二次是在先锋后半庄南四局四本场,终结了福路美穗子的连庄并结束了先锋战,导致后来风越就是一路被婊']],
                        masaki_jiazhimuyoumei: ['female', 'saki', 4, ['masaki_guoshiwushuang', 'masaki_yongzhe'], ['des:加治木由美并没有特殊的能力,但加治木的长处是根据对手的风格变换打法来克制对方.  县决赛时,加治木注意到了魔王的两连岭上开花后,东二局一本场观察到魔王的2s鸣牌碰后,特地做出13s的坎张听牌,阻断魔王的第三次岭上开花.  东三局自亲更是有意做国士无双.牌河有大量中张十分明显,但同时也有字牌,让人以为已经听牌.魔王不敢暗杠手中的西(天麻规则是国士可以抢暗杠),最后只能荒牌流局交罚符.与阿知贺众训练时,也通过分析松实玄的能力做出了直击玄的牌型']],
                        masaki_meiweijiazhi: ['female', 'saki', 4, ['masaki_qiangyun'], ['des:和蒲原智美是幼驯染,对麻将基本是外行,完全是为了凑团体赛的人数而被拉入的.  其乱打一气的打法有时会被对手利用,但有时也会给对手带来很大的麻烦比如擅长牌谱记忆的真子就因为没有特殊初学者的牌谱记忆反而无法应对. 役种都没有背齐,打牌时还需要念叨着<三个一堆、三个一堆>、<两个一组、两个一组>来分牌.  尽管如此却有意外的新手强运,对局时往往会有一局突然和出役满']],
                        masaki_donghengtaozi: ['female', 'saki', 4, ['masaki_jianyin', 'masaki_fujiang'], ['des:从小时候开始存在感就相当薄弱,自称<存在感是负值>.  因为自己的无存在感,桃子认为自己不被需要,也没有人可以发现她,直到被加治木由美大声喊出:<我想要你>,才终于找到属于自己的归宿,并接受邀请加入了麻将部.  由于存在感过低,打牌时会令对手忽视她的存在,对其失去警戒.对手无法发现其立直,即使出铳对方也不能察觉进而造成振听无法和牌对原村和无效.  因此获得<隐身小桃>的绰号. ']],
                        masaki_songshixuan: ['female', 'saki', 3, ['saki_jibao', 'masaki_yibao'], ['des:松实宥的妹妹,阿知贺女子学院二年级学生.初中时在阿知贺儿童麻将部拥有No.1实力称号.  打牌时所有的宝牌都会集中在她的手牌里,被三寻木咏雀士称为「阿知贺的Dragon Lord」.打法属于感性派.但因为母亲的叮嘱,比起手役更加重视宝牌,若将宝牌切出,则一段时间内就无法再摸到宝牌.要找回宝牌必须再打一定的局数.也因为牌谱太集中于宝牌,一来难凑对,二来特征太明显容易被发现,所以经常被对手盯着打而和不了,所以经常烧鸡(当局没和牌)']],
                        saki_songshiyou: ['female', 'saki', 3, ['masaki_nuanse', 'masaki_juhan'], ['des:阿知贺女子学院三年级学生,松实玄的姐姐.非常的怕冷体质,因为错过参加儿童麻将教室的时期,而对参加麻将教室感到羡慕.透过松实玄的介绍加入麻将部.  家中经营旅馆<松实馆>, 母亲在小时候就过世了.两姐妹相依为命.  小时候容易受人欺负,一直被妹妹保护着.  打法属于感性派']],
                        masaki_xinzichong: ['female', 'saki', 4, ['masaki_sugong', 'masaki_kongji'], ['des:奈良县阿知贺女子学院麻将部的一年级成员,担任中坚.从小学时候就是稳乃的挚友.为了进一步锻炼自己的麻将技艺,暂时与稳乃疏远,但当听闻小和在麻将界的活跃表现之后,便跟稳乃一起以全国大赛为目标而努力.有一个姐姐叫新子望']],
                        masaki_chituqinghui: ['female', 'saki', 4, ['masaki_kanpo', 'masaki_chuanqi'], ['zhu', 'des:阿知贺女子学院麻将部教练.  以前毕业于阿知贺,高中时期曾是麻将部的王牌,号称阿知贺的传奇']],
                        masaki_gaoyawennai: ['female', 'saki', 4, ['masaki_paishanzhipei', 'masaki_yinfan', 'masaki_zhendao'], ['des:外传中的主角,个性十分活泼.一年生, 在比赛中担任大将.  据天江衣的描述,稳乃出生在与修验道颇有缘分的土地上,和祖父越过日本的各种山峰,据说是在祖父去世之后才沉迷于麻将']],
                        masaki_lusenzhuo: ['female', 'saki', 4, ['masaki_canju', 'masakichengzhi'], ['zhu', 'des:阿知贺女子中学中最稳重的一位,因而被指导老师赤土晴绘指定为部长.也因为有意模仿赤土晴绘,被评价为牌风复古']],
                        masaki_gongyongzhao: ['female', 'saki', 3, ['masaki_tianti', 'masaki_wangzhedeyuyu', 'masaki_jiulian', 'masaki_shenjing'], ['zhu', 'des:天才麻将少女中大魔王宫永咲的姐姐,被福与恒子称为<站在高中生顶点的人>,拥有目前天才麻将少女之中数一数二的麻将实力.是去年全国高中生麻将大赛以及春季大赛的两冠优胜者,以及今年全国高中生个人赛优胜候补,是<被牌爱着的孩子>的三人之一.全国个人赛第二名的荒川憩,称其不人类']],
                        masaki_hongshijin: ['female', 'saki', 4, ['masaki_juji'], ['des:白糸台高校麻将部部长,高中三年级,与宫永咲的姐姐宫永照同属一所高中,担任次锋.  平时表情冷漠不苟言笑,面对队友和外人都是摆出一副认真的脸.但亦是队中吐槽役的存在']],
                        masaki_seguyaosheng: ['female', 'saki', '3/4/2', ['masaki_fenggeng'], ['des:白糸台高中二年级,喜欢喝茶.  能力是<丰收之时>,每局开头打出的第一张牌绝对会在all last局中回到自己的初始手牌中. 若出现多次连庄,最后一局能回收到更多牌;若出现6次连庄,很大机会出现天和. 如果在北位,所有南圈北局会视为「All Laster」,因此可能会连续役满']],
                        masaki_yiyechengzi: ['female', 'saki', '3/4/2', ['masaki_diaoshi', 'masaki_yuzhe'], ['des:白糸台高校麻将部部员,高中二年级,宫永照的队友,白糸台高校正选队伍虎姬中的一人,白糸台的No.5']],
                        masaki_daxingdan: ['female', 'saki', 3, ['masaki_xianzhi', 'masaki_xingqi', 'masaki_xinghe'], ['des:白糸台高中一年级,与咲的姐姐宫永照同属一个学校.在今年西东京的预选赛中作为大将登场']],
                        masaki_shiyuanneizhiye: ['female', 'saki', 4, ['masaki_zhanji', 'masaki_deli', 'masaki_pojun'], ['zhu', 'des:临海女子先锋,临海女子麻将部部长,去年全国个人战第三名.由于今年规则而担任临海女子先锋,但实际实力也受到认可是ACE,即便规则不改变也会担任先锋']],
                        masaki_haohuiyu: ['female', 'saki', 4, ['masaki_qiaohu', 'masaki_xiansheng'], ['des:临海女子高中一年级留学生,校代表队队次锋,来自香港,也是目前为止唯一一个中国选手.曾在韩国仁川U-15亚洲大会上得到银牌.  小学就拿下了中国国标麻将大赛的全国冠军,本以为在亚洲大会上也会轻松取胜,但是因为采用了不熟悉的日本麻将规则而未能获得金牌,于是想在日本高中全国大赛上学习一下.  说话有总是使用丁宁语的口癖']],
                        masaki_queminghua: ['female', 'saki', '3/4', ['masaki_fengshen', 'masaki_geyong', 'masaki_jifeng'], ['des:临海女子高校二年级留学生,校代表队中坚,来自法国.名字的发音可能是基于韩文']],
                        masaki_meigendaiwen: ['female', 'saki', 3, ['masaki_juedou', 'masaki_ange'], ['des:临海女子高校的高三生,个子很高的留学生.自美国来到日本留学,队伍中唯一一位参加了去年团体战的选手,连续两年担任副将']],
                        masaki_NellyVirsaladze: ['female', 'saki', 5, ['masaki_qunchao', 'masaki_liancai'], ['des:临海女子高中一年级留学生,格鲁吉亚人,校代表队队大将.  雀力很强,在世界青少年大赛里非常活跃的选手,在漫画和动画中很早就出现了其背影,是小林立设计的比较早的最终角色之一.   漫画第20话首次出现背影  动画最后一集ED中的临海合照 极为爱财,三句话不离奖金和钱']],
                        masaki_yuanchengsilian: ['female', 'saki', 3, ['masaki_yuzhi', 'masaki_bingruo', 'masaki_chengneng'], ['des:病弱的弱娇少女,经常住院,所以是麻将部的幽灵部员,以前的实力只有千里山的三军水平,之后生了一场大病,差点被夺去生命,在生与死之间徘徊时获得了<预见未来>的能力,在对局发动中能够看见一巡后的未来,现在虽然病好了但身体依旧很虚弱,一直被清水谷龙华所照顾着,与清水谷龙华和江口夕在中学时代起就是朋友,感情十分深厚,十分重视友情,后来亦在全国大赛先锋战中因3人深厚的羁绊而拼尽全力到达三巡后的世界']],
                        masaki_ertiaoquan: ['female', 'saki', 4, ['masaki_jigong', 'masaki_shouju'], ['des:虽然是低年级却很是爱管事.  在全国中学生大会中的团体战表现活跃;个人战则因为得点上输给了原村和而无缘冠军.  二回战次锋战,从船久保浩子数据分析误以为松实宥擅长是红中和万字的混一色针对其进行打击,最后却激发松实宥斗志反过来利用,最后才发现本质能力是收集暖牌未能取得次锋战TOP']],
                        masaki_jiangkouxi: ['female', 'saki', 4, ['masaki_juesheng', 'masaki_huanzhuang'], ['des:二回战中坚战中,带有一些防守意识进行比赛,也拿下了TOP.  在三回战中坚战完全进入攻击模式,在上半场拿下惊人的+36500,占据压倒性优势,在下半场依然进行猛攻,南二局时,千里山上升到二位.全场下来,虽然ALL LAST被涩谷尧深役满炸庄,也还是拿下了第一位(+37000),千里山位列三位.赛后也提醒了新子憧涩谷尧深坐尾庄的可怕性']],
                        masaki_chuanjiubaohaozi: ['female', 'saki', 4, ['masaki_xipu', 'masaki_duice'], ['des:里山高校二年级生,队伍中的军师,比起麻将更喜欢分析对手的打牌习性,作为队伍中的副将出战.  作为北大阪豪强校千里山的副将,其个人雀力不必多说.是队内监督爱宕雅枝的侄女,因此有时会受到诸如<因为是监督的亲戚而受人关照>的流言骚扰.是其女儿爱宕洋榎的表妹、爱宕绢惠的表姐']],
                        masaki_qingshuigulonghua: ['female', 'saki', 2, ['masaki_wujitian', 'masaki_xianrenzhilu', 'masaki_jiban'], ['des:从二年级起成为全国大赛的正选成员,但惨败于白糸台手下,最后千里山拿到了全国第四的成绩.对于麻将是个理论派,活泼开朗,总是和园城寺怜在一起秀恩爱.  从中学时代起就与怜、江口夕是好友,当时就读千里山中学.和夕、怜一起报考了千里山女子中学.在第一次麻将部内部比赛中就得到了很高的排名,进入了第一梯队']],
                        masaki_shangchongman: ['female', 'saki', 4, ['masaki_baofa', 'masaki_xuli'], ['des:姬松高中麻将部,二年级.  去年是副将,在今年比赛中改担任先锋']],
                        saki_zhenlaiyouzi: ['female', 'saki', 4, ['saki_yizhong'], ['des:姬松五人中路人般的存在,回忆杀和队内联动都很少有.在队内很受信任,二回战次锋战结束后被爱宕绢惠称赞<不愧是由子前辈,够可靠>.五位决定战后仍然保持正分是+3100,是五位战次锋战TOP.并且从战后与泉对话中可知一回战也是正分']],
                        saki_aidangjuanhui: ['female', 'saki', 4, ['saki_menjiang', 'saki_lishou'], ['des:姬松高校二年级学生,校代表队副将.爱宕洋榎的妹妹.  中学时是足球部的守门员,在副将赛开始前踢飞原村和的企鹅.因为仰慕姐姐爱宕洋榎而通过正常考试进入姬松高中就读,加入了麻将部.去年秋季大赛时被末原恭子看中,成为正选队员,但在秋季大赛和今年的春季大赛中的表现都不是很好. ']],
                        saki_aidangyangjia: ['female', 'saki', 4, ['masaki_guozao', 'saki_jiang', 'saki_jiejin'], ['des:姬松高校的主将兼部长、ACE.擅长防守,除非是故意送铳否则完全不会放铳.但进攻也很强,甚至能扣下三家的全部铳牌并兜听和牌. 在全国中学生麻将大赛中大杀四方而作为特招生入学姬松,二年级时就作为正选队员参加了全国大赛.大阪(北大阪赛区+南大阪赛区)中位居前五位之一']],
                        masaki_shendaixiaoshi: ['female', 'saki', 3, ['masaki_rumeng', 'masaki_jiangshen', 'masaki_gongzhu'], ['zhu', 'des:永水女子高中二年级生,曾在去年率队参加全国大赛,几乎凭一己之力带领队伍前进,曾被藤田靖子称为<被牌眷顾的三个人>之一,与宫永照、天江衣并列,实力可见一斑']],
                        masaki_shousuba: ['female', 'saki', 4, ['masaki_qumo', 'masaki_baxie', 'masaki_shendao1'], ['des:永水女子高中二年级学生,在队伍中担任次锋.有祓的能力,在石户霞使用能力后会帮她驱魔.名字来自于日本五大樱中的<狩宿的下马樱>,是永水五人中唯一一个以地名而非樱树名作为姓氏的']],
                        masaki_longjianchun: ['female', 'saki', 4, ['masaki_guozhuang', 'masaki_baxie', 'masaki_shendao2'], ['des:永水女子高中一年级学生,在队伍中担任中坚.永水麻将部里除了公主以外唯一一个一年级,因为通过麻将和前辈们成为好伙伴,所以享受着麻将.中坚战中与鹿仓胡桃合作,以小牌过庄的方式狙击竹井久,不过对于爱宕洋榎似乎不怎么有效果,最后以末位结束中坚战']],
                        masaki_bomochumei: ['female', 'saki', 3, ['masaki_guimen', 'masaki_sixi'], ['des:永水女子高中三年级生,在全国大赛中作为副将登场.其绝技为大小四喜(全风刻).人送外号<四喜妹>.在县预选决赛的副将赛中以一击四喜的役满直击打飞对手,使得永水女子在大将还未出场的情况下直接获胜晋级全国']],
                        masaki_shihuxia: ['female', 'saki', 4, ['masaki_tianni', 'masaki_ranshou', 'masaki_qingse'], ['des:宫守女子高中三年级,麻将部部长,在比赛中担任大将.侍奉神代小莳的巫女.因血缘与公主最为接近,因此从8岁起就成为公主的活天倪(天倪:用来转嫁灾祸、凶难的人偶.将不幸的事转嫁到人偶身上,让人偶代人受灾).依附在公主身上的除了9位女神之外,还降临了极为稀有的凶恶之物,因此需要代替公主承受、驯服']],
                        saki_xiaolaichuanbaiwang: ['female', 'saki', 4, ['masaki_mituzhijia', 'masaki_yonglan', 'masaki_sansi'], ['des:宫守女子高中麻将部成员,三年级.总是说着<好累>的银色短发少女,有着极其怕麻烦的个性.被队友们称作<小白>.在全国大赛中担当前锋.团体战二回战先锋战后以115000分居首位']],
                        masaki_zidaifengyin: ['female', 'saki', 3, ['masaki_liuyao', 'masaki_zhuili'], ['des:身材高大,但性格却非常软萌,构成反差萌.  生活在小孩子很少的村庄中,因为没有电脑,只能一个人摆着牌、看着电视转播学习打麻将,但实力很强.在去年秋天和熊仓敏初次相遇,被她发掘.熊仓敏到宫守女子任教后,将她带到麻将部与小濑川白望、鹿仓胡桃、臼泽塞打麻将,最终转学到宫守女子.(漫画第94局)  在家乡被称为"背后的丰音(背向のトヨネ)".在全国二回战前因为宫守女子其他人的活跃一直隐藏着实力,实际有多种能力,表现出的有追立直直击先立直者、裸单骑等.(漫画第91、92、94局)  喜欢厉害的人,喜欢神代小莳和原村和,尤其是沉睡后的神代小莳.对能见到发动能力的宫永咲感到开心,但随后被爆发的宫永咲的气势吓到.(漫画第98局)']],
                    },
                    characterTitle: {
                        masaki_gongyongxiao: '<div class="text center" style="color: #DC143C">大魔王',
                        masaki_moyuangongzi: '<div class="text center" style="color: #800080">魔法使',
                        masaki_yuancunhe: '<div class="text center" style="color: #DB7093">小和和',
                        masaki_piangangyouxi: '<div class="text center" style="color: #F4A460">东风之神',
                        masaki_mengnaizhenfan: '<div class="text center" style="color: #dcd0ff">小魔王',
                        masaki_ranguzhenzi: '<div class="text center" style="color: #527F76">局中忆谱',
                        masaki_zhujingjiu: '<div class="text center" style="color: #FF2400">久帝',
                        masaki_xuhejingtailang: '<div class="text center" style="color: #A67D3D">跑腿天王',
                        masaki_longmenyuantouhua: '<div class="text center" style="color: #FFFF00">渕龙治水',
                        masaki_guoguangyi: '<div class="text center" style="color: #000000">铁索缚千',
                        masaki_zecunzhiji: '<div class="text center" style="color: #5C4033">识识',
                        masaki_jingshangchun: '<div class="text center" style="color: #00FFFF">纯哥',
                        masaki_tianjiangyi: '<div class="text center" style="color: #FFFF00">满月之衣',
                        masaki_fulumeihuizi: '<div class="text center" style="color: #9C694F">大明湖畔',
                        masaki_jiliumochun: '<div class="text center" style="color: #A8A8A8">越女次锋',
                        masaki_wentangxingxia: '<div class="text center" style="color: #000000">越女中坚',
                        masaki_shengkuchundai: '<div class="text center" style="color: #000000">越女副将',
                        masaki_chitianhuacai: '<div class="text center" style="color: #000000">池田喵',
                        masaki_puyuanzhimei: '<div class="text center" style="color: #5F9F9F">哇哈哈',
                        masaki_jinshanmuyue: '<div class="text center" style="color: #42426F">投牌大师',
                        masaki_jiazhimuyoumei: '<div class="text center" style="color: #871F78">长野勇者',
                        masaki_meiweijiazhi: '<div class="text center" style="color: #FFFF00">乱打妹',
                        masaki_donghengtaozi: '<div class="text center" style="color: #215E21">隐身小桃',
                        masaki_songshixuan: '<div class="text center" style="color: #FF0000">龙王',
                        saki_songshiyou: '<div class="text center" style="color: #FF0000">暖姐',
                        masaki_xinzichong: '<div class="text center" style="color: #A67D3D">速攻之憧',
                        masaki_chituqinghui: '<div class="text center" style="color: #FF0000">阿知贺传奇',
                        masaki_gaoyawennai: '<div class="text center" style="color: #A67D3D">深山老鸭',
                        masaki_lusenzhuo: '<div class="text center" style="color: #130c0e">小林灼',
                        masaki_gongyongzhao: '<div class="text center" style="color: #1d1626">冠军',
                        masaki_hongshijin: '<div class="text center" style="color: #1d1626">老板娘',
                        masaki_seguyaosheng: '<div class="text center" style="color: #A67D3D">农家乐',
                        masaki_yiyechengzi: '<div class="text center" style="color: #238E23">fisher',
                        masaki_daxingdan: '<div class="text center" style="color: #FFFF00">星光璀璨',
                        masaki_shiyuanneizhiye: '<div class="text center" style="color: #42426F">斩神',
                        masaki_haohuiyu: '<div class="text center" style="color: #871F78">临海次锋',
                        masaki_queminghua: '<div class="text center" style="color: #00FFFF">风神',
                        masaki_meigendaiwen: '<div class="text center" style="color: #804000">M哥',
                        masaki_NellyVirsaladze: '<div class="text center" style="color: #00FFFF">小红帽',
                        masaki_yuanchengsilian: '<div class="text center" style="color: #00FFFF">三巡先知',
                        masaki_ertiaoquan: '<div class="text center" style="color: #000000">最强高一',
                        masaki_jiangkouxi: '<div class="text center" style="color: #97694F">夕哥',
                        masaki_chuanjiubaohaozi: '<div class="text center" style="color: #CB865C">船Q',
                        masaki_qingshuigulonghua: '<div class="text center" style="color: #665143">无极',
                        masaki_shangchongman: '<div class="text center" style="color: #000000">爆漫',
                        saki_zhenlaiyouzi: '<div class="text center" style="color: #DBDB70">姬松次锋',
                        saki_aidangjuanhui: '<div class="text center" style="color: #00FFFF">球将',
                        saki_aidangyangjia: '<div class="text center" style="color: #FF0000">话痨',
                        masaki_shendaixiaoshi: '<div class="text center" style="color: #000000">公主',
                        masaki_shousuba: '<div class="text center" style="color: #FF0000">永水次锋',
                        masaki_longjianchun: '<div class="text center" style="color: #2F4F4F">黑糖',
                        masaki_bomochumei: '<div class="text center" style="color: #401c44">四喜妹',
                        masaki_shihuxia: '<div class="text center" style="color: #000000">乳霞',
                        saki_xiaolaichuanbaiwang: '<div class="text center" style="color: #808080">小白',
                        masaki_zidaifengyin: '<div class="text center" style="color: #800080">背后的丰音',
                    },
                    card: {
                        ma_moxigebing: {
                            image: 'ext:MA天才麻将少女/image/card/ma_moxigebing.png',
                            fullskin: true,
                            derivation: 'masaki_piangangyouxi',
                            type: 'basic',
                            toself: true,
                            enable(card, player) {
                                return true;
                            },
                            savable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                if (typeof event.baseDamage != 'number') event.baseDamage = 1;
                                if (target.isDying() || event.getParent(2).type == 'dying') {
                                    target.recover(event.baseDamage || 1);
                                } else {
                                    target.chooseDrawRecover(2, true);
                                }
                            },
                            ai: {
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
                                    useful: [6.5, 4, 3, 2],
                                    value: [6.5, 4, 3, 2],
                                },
                                result: {
                                    target: 2,
                                    target_use(player, target) {
                                        if (player.hasSkillTag('nokeep', true, null, true)) return 2;
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
                                tag: {
                                    recover: 1,
                                    save: 1,
                                },
                            },
                        },
                    },
                    skill: {
                        masaki_duangua: {
                            audio: '2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('baiban')) {
                                        player.line(current, 'green');
                                        current.addTempSkill('baiban');
                                    }
                                });
                            },
                        },
                        masaki_xiansheng: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (_status.currentPhase == from) {
                                        return distance - 1;
                                    }
                                },
                            },
                        },
                        masaki_lingshangkaihua: {
                            nobracket: true,
                            trigger: {
                                player: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('masaki_lingshangkaihua_disable')) return false;
                                if (event.name == 'lose' && event.getlx === false) return false;
                                return player.countCards('h') == 3;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                list.push(['锦囊', '', 'guohe']);
                                if (
                                    lib.filter.cardUsable({ name: 'sha' }, player) &&
                                    game.hasPlayer(function (current) {
                                        return player.canUse('sha', current);
                                    })
                                ) {
                                    list.push(['基本', '', 'sha']);
                                }
                                for (const i of lib.inpile_nature) {
                                    if (
                                        lib.filter.cardUsable({ name: 'sha', nature: i }, player) &&
                                        game.hasPlayer(function (current) {
                                            return player.canUse({ name: 'sha', nature: i }, current);
                                        })
                                    ) {
                                        list.push(['基本', '', 'sha', i]);
                                    }
                                }
                                if (
                                    lib.filter.cardUsable({ name: 'tao' }, player) &&
                                    game.hasPlayer(function (current) {
                                        return player.canUse('tao', current);
                                    })
                                ) {
                                    list.push(['基本', '', 'tao']);
                                }
                                if (
                                    lib.filter.cardUsable({ name: 'jiu' }, player) &&
                                    game.hasPlayer(function (current) {
                                        return player.canUse('jiu', current);
                                    })
                                ) {
                                    list.push(['基本', '', 'jiu']);
                                }
                                if (list.length) {
                                    player.chooseButton(['是否视为使用一张基本牌或【过河拆桥】？', [list, 'vcard']]).set('ai', function (button) {
                                        var player = _status.event.player;
                                        var card = { name: button.link[2], nature: button.link[3] };
                                        if (card.name == 'tao') {
                                            if (player.hp == 1 || (player.hp == 2 && !player.hasShan()) || player.needsToDiscard()) {
                                                return 5;
                                            }
                                            return 1;
                                        }
                                        if (card.name == 'sha') {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                })
                                            ) {
                                                if (card.nature == 'fire') return 2.95;
                                                if (card.nature == 'thunder' || card.nature == 'ice') return 2.92;
                                                return 2.9;
                                            }
                                            return 0;
                                        }
                                        if (card.name == 'guohe') {
                                            return 0.6;
                                        }
                                        if (card.name == 'jiu') {
                                            return 0.5;
                                        }
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result && result.bool && result.links[0]) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.addTempSkill('masaki_lingshangkaihua_disable');
                                    player.chooseUseTarget(card, false, 'nodistance');
                                    player.draw();
                                }
                            },
                            subSkill: {
                                disable: {
                                    mark: true,
                                    intro: {
                                        content: '本回合已发动',
                                    },
                                },
                            },
                        },
                        masaki_zhengfuling: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            frequent(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            usable: 1,
                            prompt2: '当你造成或受到伤害后,你可以摸/弃一张牌',
                            check(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('he', get.prompt('masaki_zhengfuling'), '选择弃置一张牌或取消后摸一张牌', false)
                                    .set('ai', function (card) {
                                        return !player.hasSkill('masaki_lingshangkaihua_disable') && player.countCards('h') == 4 && player.hasSkill('masaki_lingshangkaihua') && 7 - get.value(card);
                                    })
                                    .set('autodelay', 0.5);
                                ('step 1');
                                if (result.bool) {
                                    event.finish();
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        masaki_suming: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            _priority: 20,
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('masaki_suming_disable')) return false;
                                return event.card && event.card.name == 'sha' && player.countCards('hes') > 1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('hes', 2, get.prompt('masaki_suming'), '选择弃置两张牌', false)
                                    .set('ai', function (card) {
                                        return (player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0)) && 8 - get.value(card);
                                    })
                                    .set('autodelay', 0.5);
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('masaki_suming_disable');
                                    player.draw(3);
                                }
                            },
                            subSkill: {
                                disable: {
                                    mark: true,
                                    intro: {
                                        content: '本回合已发动',
                                    },
                                },
                            },
                        },
                        masaki_shili: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 777,
                            content() {
                                'step 0';
                                event.current = player;
                                ('step 1');
                                var name1 = event.current.name;
                                var name2 = event.current.name2;
                                var skills = lib.character[name],
                                    skills1 = lib.character[name1],
                                    skills2 = lib.character[name2];
                                event.skills = [];
                                var skills = event.current.getSkills();
                                for (let i = 0; i < skills.length; i++) {
                                    event.skills.push(skills[i]);
                                }
                                event.skills.remove(skills);
                                event.skills.remove(skills1);
                                event.skills.remove(skills2);
                                if (event.skills.length) {
                                    event.current.removeSkill(event.skills);
                                    game.log(event.current, '移除了', event.skills);
                                }
                                ('step 2');
                                event.current = event.current.next;
                                if (event.current != player) event.goto(1);
                            },
                        },
                        masaki_juyou: {
                            mod: {
                                globalFrom(from, to) {
                                    if (from.hp == to.hp) return -Infinity;
                                },
                            },
                        },
                        masaki_buwei: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if ((get.type(card) == 'trick' || get.type(card) == 'delay') && player != target && player.hp > target.hp) return false;
                                },
                            },
                        },
                        masaki_dongfeng: {
                            trigger: {
                                player: 'useCard',
                            },
                            usable: 4,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.number > game.roundNumber && player.isPhaseUsing();
                            },
                            content() {
                                player.draw();
                            },
                        },
                        masaki_juanbing: {
                            derivation: ['ma_moxigebing'],
                            mod: {
                                cardname(card, player) {
                                    if (card.number == game.roundNumber) {
                                        return 'ma_moxigebing';
                                    }
                                },
                            },
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            filter(event, player) {
                                return player == event.player && event.card.number < game.roundNumber;
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        masaki_tianhe: {
                            init2(player) {
                                if (game.phaseNumber == 0 && Math.random() < 0.01) {
                                    var bool = false;
                                    if (player == game.me || player.isFriendsOf(game.me)) bool = true;
                                    else
                                        switch (get.mode()) {
                                            case 'identity': {
                                                game.showIdentity();
                                                var id1 = player.identity;
                                                var id2 = game.me.identity;
                                                if (['zhu', 'zhong', 'mingzhong'].includes(id1)) {
                                                    if (['zhu', 'zhong', 'mingzhong'].includes(id2)) bool = true;
                                                    break;
                                                } else if (id1 == 'fan') {
                                                    if (id2 == 'fan') bool = true;
                                                    break;
                                                }
                                                break;
                                            }
                                        }
                                    game.over(bool);
                                }
                            },
                        },
                        masaki_fuzhi: {
                            group: ['masaki_fuzhi_1', 'masaki_fuzhi_2'],
                            trigger: {
                                global: ['logSkillBegin', 'useSkillBegin'],
                            },
                            intro: {
                                content: '获得过的技能:$',
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill(event.skill) || event.skill == '_dm_tuqiang' || event.skill == '_dm_feishi' || event.skill == '_dm_yanmobiaoji' || event.skill == '_shzx_update' || event.skill == 'dm_jinxianyicideqiji1_back') return false;
                                var skill = event.skill;
                                var info = get.info(skill);
                                if (!info || info.juexingji || info.limited || info.zhuSkill || info.dutySkill || info.equipSkill) return false;
                                if (event.player == player || player.getStorage('masaki_fuzhi').includes(event.skill)) return false;
                                return true;
                            },
                            content() {
                                player.markAuto('masaki_fuzhi', [trigger.skill]);
                                player.markAuto('masaki_fuzhi_1', [trigger.skill]);
                                player.addTempSkill(trigger.skill, { player: 'dieAfter' });
                                game.log(player, '获得了', '#y' + get.translation(trigger.skill));
                            },
                            subSkill: {
                                1: {
                                    intro: {
                                        content: '被标记的技能:$',
                                    },
                                    trigger: {
                                        player: ['logSkillBegin', 'useSkillBegin'],
                                    },
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        if (event.skill == 'masaki_fuzhi' || event.skill == 'masaki_fuzhi_1' || event.skill == '_ndieaudio') return false;
                                        return player.getStorage('masaki_fuzhi_1').includes(event.skill);
                                    },
                                    content() {
                                        player.unmarkAuto('masaki_fuzhi_1', [trigger.skill]);
                                        player.removeSkill(trigger.skill);
                                        game.log(player, '失去了', '#y' + get.translation(trigger.skill));
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'washCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        for (let i = 0; i < player.getStorage('masaki_fuzhi').length; i++) {
                                            var skill = player.getStorage('masaki_fuzhi');
                                            player.unmarkAuto('masaki_fuzhi', [skill[0]]);
                                        }
                                    },
                                },
                            },
                        },
                        masaki_yipu: {
                            mod: {
                                aiOrder(player, card, num) {
                                    var evt = player.getExpansions('masaki_yipu');
                                    var saki = [];
                                    for (var s = 0; s < player.getExpansions('masaki_yipu'); s++) {
                                        saki.add(evt[s].number);
                                    }
                                    if (!saki.includes(card.number)) {
                                        return num + 10;
                                    }
                                },
                            },
                            group: ['masaki_yipu_1', 'masaki_yipu_2'],
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            marktext: '谱',
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, content, player) {
                                    var content = player.getExpansions('masaki_yipu');
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            dialog.addAuto(content);
                                        } else {
                                            return '共有' + get.cnNumber(content.length) + '张〖谱〗';
                                        }
                                    }
                                },
                                content(content, player) {
                                    var content = player.getExpansions('masaki_yipu');
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            return get.translation(content);
                                        }
                                        return '共有' + get.cnNumber(content.length) + '张〖谱〗';
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            prompt(event, player) {
                                return '忆谱:是否将牌堆中与' + get.translation(event.cards) + '中的点数相同且与所有的〖谱〗点数均不同的牌置入〖谱〗？';
                            },
                            filter(event, player) {
                                if (!player.getExpansions('masaki_yipu')) return true;
                                if (event.name != 'useCard' && event.player == event.target) return false;
                                var storagelist = [];
                                var sakiyipu = player.getExpansions('masaki_yipu');
                                for (var j = 0; j < sakiyipu.length; j++) {
                                    storagelist.push(sakiyipu[j].number);
                                }
                                if (Array.isArray(event.cards)) for (const i of event.cards) {
                                    if (!storagelist.includes(i.number)) {
                                        return true;
                                    }
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                var storagelist = [];
                                var sakiyipu = player.getExpansions('masaki_yipu');
                                for (var j = 0; j < sakiyipu.length; j++) {
                                    storagelist.add(sakiyipu[j].number);
                                }
                                if (Array.isArray(trigger.cards)) for (const i of trigger.cards) {
                                    if (!storagelist.includes(i.number)) {
                                        storagelist.add(i.number);
                                        var card = get.cardPile(function (card) {
                                            return card.number == i.number;
                                        });
                                        if (card) player.addToExpansion(card).gaintag.add('masaki_yipu');
                                    }
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDrawAfter',
                                    },
                                    forced: true,
                                    prompt(event, player) {
                                        return '忆谱:是否用手牌中与〖谱〗点数相同的牌进行交换？';
                                    },
                                    filter(event, player) {
                                        return player.getExpansions('masaki_yipu').length && player.countCards('he') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('masaki_yipu');
                                        if (!cards.length || !player.countCards('he')) {
                                            event.finish();
                                            return;
                                        }
                                        var next = player.chooseToMove('忆谱:是否交换点数相同的〖谱〗和牌？');
                                        next.set('list', [
                                            [get.translation(player) + '(你)的〖谱〗', cards],
                                            ['手牌区', player.getCards('he')],
                                        ]);
                                        next.set('filterMove', function (from, to) {
                                            return typeof to != 'number' && from.number == to.number;
                                        });
                                        next.set('processAI', function (list) {
                                            var player = _status.event.player,
                                                cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                                    return get.value(a) - get.value(b);
                                                }),
                                                cards2 = cards.splice(0, player.getExpansions('masaki_yipu').length);
                                            return [cards2, cards];
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var pushs = result.moved[0],
                                                gains = result.moved[1];
                                            pushs.removeArray(player.getExpansions('masaki_yipu'));
                                            gains.removeArray(player.getCards('he'));
                                            if (!pushs.length || pushs.length != gains.length) return;
                                            player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('masaki_yipu');
                                            game.log(player, '交换了自己的牌和〖谱〗');
                                            player.gain(gains);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0 && player.getExpansions('masaki_yipu').length;
                                    },//QQQ
                                    prompt(event, player) {
                                        return '忆谱:是否选择一张〖谱〗获得？';
                                    },
                                    content() {
                                        'step 0';
                                        event.count = Math.min(trigger.num, 9);
                                        ('step 1');
                                        trigger.player.chooseCardButton('选择获得一张〖谱〗', player.getExpansions('masaki_yipu'));
                                        ('step 2');
                                        if (result.bool) {
                                            event.count--;
                                            player.gain(result.links[0]);
                                        } else event.finish();
                                        ('step 3');
                                        if (event.count > 0 && player.getExpansions('masaki_yipu').length) event.goto(1);
                                    },
                                },
                            },
                        },
                        masaki_huaiting: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                event.cards = player.getCards('h');
                                player.showCards(event.cards);
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        current.addTempSkill('masaki_huaiting_buff');
                                        if (Array.isArray(event.cards)) for (const i of event.cards) {
                                            var name = i.name;
                                            current.markAuto('masaki_huaiting_buff', [name]);
                                        }
                                    }
                                });
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 2;
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                buff: {
                                    charlotte: true,
                                    intro: {
                                        content: '本回合你不能使用或打出:$',
                                    },
                                    mod: {
                                        cardUsable(card, player) {
                                            if (player.getStorage('masaki_huaiting_buff') && player.getStorage('masaki_huaiting_buff').includes(card.name)) {
                                                return false;
                                            }
                                        },
                                        cardSavable(card, player) {
                                            if (player.getStorage('masaki_huaiting_buff') && player.getStorage('masaki_huaiting_buff').includes(card.name)) {
                                                return false;
                                            }
                                        },
                                        cardEnabled(card, player) {
                                            if (player.getStorage('masaki_huaiting_buff') && player.getStorage('masaki_huaiting_buff').includes(card.name)) {
                                                return false;
                                            }
                                        },
                                        cardRespondable(card, player) {
                                            if (player.getStorage('masaki_huaiting_buff') && player.getStorage('masaki_huaiting_buff').includes(card.name)) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        masaki_xinzhan: {
                            enable: 'phaseUse',
                            limited: true,
                            multitarget: true,
                            multiline: true,
                            mark: true,
                            line: 'fire',
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            selectTarget() {
                                var player = _status.event.player;
                                return [1, Math.max(1, player.getDamagedHp() + 1)];
                            },
                            filter(event, player) {
                                return !player.storage.masaki_xinzhan && player.countCards('h') > 0;
                            },
                            content() {
                                player.chooseToCompare(targets).set('callback', function () {
                                    if (event.num1 > event.num2) {
                                        target.addTempSkill('baiban', { player: 'phaseAfter' });
                                        target.damage(player);
                                    } else {
                                        player.discardPlayerCard(target, 'he', 2, true);
                                    }
                                });
                            },
                            contentBefore() {
                                player.awakenSkill('masaki_xinzhan');
                                player.storage.masaki_xinzhan = true;
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 0.1;
                                },
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                    player(player, target) {
                                        if (player.hp > 1) return -1;
                                    },
                                },
                            },
                        },
                        masaki_jiudi: {
                            zhuSkill: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                if (!player.hasZhuSkill('masaki_jiudi')) return false;
                                event.target2s = game
                                    .filterPlayer(function (current) {
                                        return current != player && current.group == 'saki';
                                    })
                                    .sort(lib.sort.seat);
                                return event.target2s.length;
                            },
                            forced: true,
                            logTarget: 'target2s',
                            content() {
                                'step 0';
                                event.now = trigger.target2s.shift();
                                if (event.now) {
                                    event.now.chooseBool('久帝:是否令' + get.translation(player) + '进行判定？').set('ai', function () {
                                        return get.attitude(event.now, player) > 2;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.judge(function (card) {
                                        return card.suit == 'diamond' ? 1 : 0;
                                    });
                                } else {
                                    event.goto(0);
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.draw();
                                    if (!player.hasSkill('masaki_jiudi_buff')) {
                                        player.addTempSkill('masaki_jiudi_buff', { player: 'phaseAfter' });
                                    }
                                    player.storage.masaki_jiudi_buff++;
                                }
                            },
                            subSkill: {
                                buff: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '手牌上限+#',
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = 0;
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.storage.masaki_jiudi_buff;
                                        },
                                    },
                                },
                            },
                        },
                        masaki_lixue: {
                            group: ['masaki_lixue_1'],
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0 && player.maxHp > 3;
                            },
                            content() {
                                var num = player.maxHp - 3;
                                var num1 = trigger.num;
                                var num2 = Math.min(num, num1);
                                player.loseMaxHp(num2);
                                player.draw(num2);
                            },
                            ai: {
                                maixie(event, player) {
                                    if (player.maxHp > 3) return true;
                                    return false;
                                },
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        maxHandcardBase(player, num) {
                                            if (player.maxHp <= 3) return 3;
                                        },
                                    },
                                    trigger: {
                                        player: 'drawBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.maxHp <= 3;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        threaten: 2.5,
                                    },
                                },
                            },
                        },
                        masaki_paotui: {
                            trigger: {
                                player: 'gainAfter',
                            },
                            filter(event, player) {
                                if (event.parent.parent.name == 'phaseDraw') return false;
                                return event.cards && event.cards.length && event.getParent(2).name != 'masaki_paotui';
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                event.cards = trigger.cards;
                                ('step 1');
                                if (event.cards.length > 1) {
                                    player.chooseCardButton('『跑腿』:请选择要分配的牌', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                                        if (ui.selected.buttons.length == 0) return 1;
                                        return 0;
                                    });
                                } else if (event.cards.length == 1) {
                                    event._result = { links: event.cards.slice(0), bool: true };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    for (const i of result.links) {
                                        event.cards.remove(i);
                                    }
                                    event.togive = result.links.slice(0);
                                    player
                                        .chooseTarget('将' + get.translation(result.links) + '分配给一名角色', true)
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
                                        .set('enemy', get.value(event.togive[0], player, 'raw') < 0);
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
                                threaten: 0.7,
                                expose: 0.3,
                            },
                        },
                        masaki_zhishui: {
                            trigger: {
                                player: 'damageEnd',
                                global: ['dying'],
                            },
                            check(event, player) {
                                return (get.attitude(player, event.player) <= 0 && player != event.player) || (player == event.player && player.hp > 0);
                            },
                            filter(event, player) {
                                return (event.name == 'damage' && event.player == player) || (event.name == 'dying' && event.player != player);
                            },
                            prompt(event, player) {
                                var num = Math.min(5, event.player.getDamagedHp());
                                return '治水:是否弃置除' + get.translation(event.player) + '以外的所有角色区域内的一张牌,摸取' + num + '张牌？';
                            },
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    if (current != trigger.player) {
                                        player.line(current, 'green');
                                        player.discardPlayerCard('hej', current, true);
                                    }
                                });
                                ('step 1');
                                var num1 = trigger.player.getDamagedHp();
                                var num = Math.min(5, num1);
                                player.draw(num);
                            },
                        },
                        masaki_zhenzhong: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: ['gainAfter', 'loseAfter'],
                            },
                            usable: 1,
                            filter(event, player) {
                                var evt = event;
                                if (event.name == 'lose') {
                                    if (event.type != 'discard') return false;
                                    evt = event.parent;
                                }
                                var player = evt[event.name == 'gain' ? 'source' : 'player'];
                                if (!player || player.isDead()) return false;
                                if (evt[event.name == 'gain' ? 'bySelf' : 'notBySelf'] != true) return false;
                                if (event.name == 'lose') return event.hs.length;
                                return event.relatedLose && event.relatedLose.hs && event.relatedLose.hs.length;
                            },
                            check(event, player) {
                                return get.attitude(player, event[event.name == 'gain' ? 'source' : 'player']) > 2;
                            },
                            logTarget(event) {
                                return event[event.name == 'gain' ? 'source' : 'player'];
                            },
                            content() {
                                trigger[trigger.name == 'gain' ? 'source' : 'player'].draw(2);
                            },
                        },
                        // 每轮限一次,当一名其他角色触发技能时,你可以弃置一张牌,令该角色选择弃置一张牌或取消此技能的触发,并令该角色所有技能失效直至下个其回合开始.(势力不为『咲』的角色在选择时改为交给你一张牌.)
                        masaki_zhilan: {
                            zhuSkill: true,
                            trigger: {
                                global: ['logSkillBegin', 'useSkillBegin'],
                            },
                            popup: false,
                            filter(event, player, name) {
                                return event.player != player && player.countCards('he') && player.hasZhuSkill('masaki_zhilan') && !player.hasSkill('masaki_zhilan_1');
                            },
                            async cost(event, trigger, player) {
                                event.result = await player.chooseToDiscard(`弃置一张牌终止${get.translation(trigger.skill)}的发动`, 'he')
                                    .set('ai', (c) => -get.attitude(player, trigger.player) - get.value(c)).forResult();
                            },
                            async content(event, trigger, player) {
                                player.addTempSkill('masaki_zhilan_1', 'roundStart');
                                const bool = (trigger.player.group == 'saki');
                                const func = bool ? 'chooseToDiscard' : 'chooseCard';
                                const { cards } = await trigger.player[func]('he', '止澜:选择交出一张牌,或令技能【' + get.translation(trigger.skill) + '】和所有其他技能失效')
                                    .set('ai', function (card) {
                                        return 8 - get.value(card);
                                    }).forResult();
                                if (cards?.length) {
                                    if (!bool) {
                                        player.gain(cards, trigger.player, 'giveAuto');
                                    }
                                }
                                else {
                                    const name = trigger.skill;
                                    const info = lib.skill[name];
                                    if (trigger.name == 'logSkillBegin') {
                                        const arr = trigger.parent.next;
                                        for (let i = arr.length - 1; i >= 0; i--) {
                                            if (arr[i].name === name) {
                                                arr.splice(i, 1);
                                            }
                                        }
                                    } //被终止的触发技也会计入次数
                                    else {
                                        const stat = trigger.player.stat;
                                        const statskill = stat[stat.length - 1].skill;
                                        statskill[name] = numberq0(statskill[name]) + 1;
                                        if (info.sourceSkill) {
                                            statskill[info.sourceSkill] = numberq0(statskill[info.sourceSkill]) + 1;
                                        }
                                        trigger.cancel();
                                    } //被终止的主动技不会计入次数,要手动加一下
                                    game.log(player, `终止${get.translation(name)}的发动`);
                                    if (info.limited || info.juexingji) {
                                        trigger.player.awakenSkill(name);
                                    }
                                    trigger.player.addTempSkill('baiban', { player: 'phaseBegin' });
                                }
                            },//QQQ
                            subSkill: {
                                1: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '本轮已发动',
                                    },
                                },
                            },
                        },
                        masaki_qianshu: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var names = [];
                                var cards = [];
                                while (cards.length < 13) {
                                    var card = get.cardPile2(function (card) {
                                        return !cards.includes(card) && !names.includes(card.name) && (get.type(card) == 'basic' || get.type(card) == 'trick' || get.type(card) == 'delay');
                                    });
                                    if (card) {
                                        cards.push(card);
                                        names.push(card.name);
                                    } else break;
                                }
                                if (cards.length) player.addToExpansion(cards).gaintag.add('masaki_qianshu');
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, content, player) {
                                    var content = player.getExpansions('masaki_qianshu');
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            dialog.addAuto(content);
                                        } else {
                                            return '共有' + get.cnNumber(content.length) + '张〖千〗';
                                        }
                                    }
                                },
                                content(content, player) {
                                    var content = player.getExpansions('masaki_qianshu');
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            return get.translation(content);
                                        }
                                        return '共有' + get.cnNumber(content.length) + '张〖千〗';
                                    }
                                },
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            group: ['masaki_qianshu_1', 'masaki_qianshu_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('masaki_qianshu').length && player.countCards('h') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('masaki_qianshu');
                                        if (!cards.length || !player.countCards('h')) {
                                            event.finish();
                                            return;
                                        }
                                        var next = player.chooseToMove('千术:是否交换『千』和手牌？');
                                        next.set('list', [
                                            [get.translation(player) + '(你)的『千』', cards],
                                            ['手牌区', player.getCards('h')],
                                        ]);
                                        next.set('filterMove', function (from, to) {
                                            return typeof to != 'number';
                                        });
                                        next.set('processAI', function (list) {
                                            var player = _status.event.player,
                                                cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                                    return get.value(a) - get.value(b);
                                                }),
                                                cards2 = cards.splice(0, player.getExpansions('masaki_qianshu').length);
                                            return [cards2, cards];
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var pushs = result.moved[0],
                                                gains = result.moved[1];
                                            pushs.removeArray(player.getExpansions('masaki_qianshu'));
                                            gains.removeArray(player.getCards('h'));
                                            if (!pushs.length || pushs.length != gains.length) return;
                                            player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('masaki_qianshu');
                                            game.log(player, '交换了手牌和『千』');
                                            player.gain(gains);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('masaki_qianshu').length && event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        event.count = Math.min(trigger.num, 9);
                                        ('step 1');
                                        event.count--;
                                        player.chooseCardButton('弃置一张『千』', true, player.getExpansions('masaki_qianshu'));
                                        ('step 2');
                                        if (result.bool) player.loseToDiscardpile(result.links);
                                        if (event.count > 0) {
                                            event.goto(1);
                                        }
                                    },
                                },
                            },
                        },
                        masaki_juezhi: {
                            juexingji: true,
                            audio: 'ext:MA天才麻将少女:2',
                            derivation: 'masaki_suoju',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.storage.masaki_juezhi;
                            },
                            content() {
                                'step 0';
                                if (player.hp < 2) {
                                    player.recover(2 - player.hp);
                                }
                                ('step 1');
                                player.removeSkill('masaki_qianshu');
                                player.addSkill('masaki_suoju');
                                player.storage.masaki_juezhi = true;
                                player.awakenSkill('masaki_juezhi');
                            },
                        },
                        masaki_suoju: {
                            mod: {
                                globalFrom(from, to) {
                                    if (to.isLinked()) {
                                        return -Infinity;
                                    }
                                },
                            },
                            group: ['masaki_suoju_1'],
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !current.isLinked();
                                });
                            },
                            content() {
                                'step 0';
                                var num = game.countPlayer(function (current) {
                                    return !current.isLinked() && current != player;
                                });
                                player
                                    .chooseTarget(get.prompt('masaki_suoju'), '横置自己以及至多' + get.cnNumber(Math.min(num, player.getDamagedHp())) + '名未横置的角色', [1, Math.min(num, player.getDamagedHp())], function (card, player, target) {
                                        return !target.isLinked();
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    event.targets = result.targets;
                                    event.num = 0;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.num < event.targets.length) {
                                    if (!player.isLinked()) player.link();
                                    event.targets[event.num].link();
                                    event.num++;
                                    event.redo();
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    check(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            if (current.isLinked() && current.countCards('he')) {
                                                return get.attitude(player, current);
                                            }
                                        });
                                        return num < 0;
                                    },
                                    prompt(event, player) {
                                        return '锁局:是否弃置所有处于横置状态角色的一张牌？';
                                    },
                                    content() {
                                        'step 0';
                                        event.targets = game.filterPlayer(function (current) {
                                            if (current.isLinked() && current.countCards('he')) {
                                                return true;
                                            }
                                        });
                                        event.num = 0;
                                        event.targets.sort(lib.sort.seat);
                                        ('step 1');
                                        if (event.num < event.targets.length) {
                                            var target = event.targets[event.num];
                                            if (player == target) {
                                                player.chooseToDiscard(true, 'he');
                                            } else {
                                                player.discardPlayerCard(true, 'he', target);
                                            }
                                            event.num++;
                                            event.redo();
                                        }
                                    },
                                },
                            },
                        },
                        masaki_shishi: {
                            trigger: {
                                player: ['phaseUseBegin', 'damageEnd'],
                            },
                            forced: true,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h') > 0;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('masaki_shishi'), function (card, player, target) {
                                        return target != player && target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool && result.targets.length) {
                                    event.target = result.targets[0];
                                    event.card = event.target.getCards('h').randomGet();
                                    event.target.showCards(event.card);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.judge();
                                ('step 3');
                                if (get.color(result.card) == get.color(event.card)) {
                                    target.damage('nocard');
                                } else if (get.color(result.card) != get.color(event.card)) {
                                    player.discardPlayerCard(target, 'he', true);
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        masaki_boxue: {
                            trigger: {
                                player: 'judgeEnd',
                            },
                            preHidden: true,
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                return get.position(event.result.card, true) == 'o';
                            },
                            content() {
                                player.gain(trigger.result.card, 'gain2');
                            },
                        },
                        masaki_duanshi: {
                            group: 'masaki_duanshi_1',
                            marktext: '势',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            forced: true,
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                return event.player != player && (get.type(event.card) == 'trick' || get.type(event.card) == 'delay') && player.countCards('he') >= 2;
                            },
                            content() {
                                'step 0';
                                player.chooseCard('###是否发动〖断势〗？###是否将两张牌放置于武将牌上称为〖势〗,并使' + get.translation(trigger.player) + '使用的【' + get.translation(trigger.card) + '】失效？', 'he', 2).set('ai', function (card) {
                                    if (get.attitude(player, trigger.player) >= 0) return false;
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.addToExpansion(result.cards, 'gain2').gaintag.add('masaki_duanshi');
                                    trigger.cancel();
                                    game.log(player, '令', trigger.player, '使用的【', trigger.card, '】失效了');
                                }
                            },
                            ai: {
                                threaten: 1.4,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        return event.player != player && player.getExpansions('masaki_duanshi').length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (!player.getExpansions('masaki_duanshi')) {
                                            event.finish();
                                        } else
                                            player.chooseCardButton('###是否发动〖断势〗？###弃置一张〖势〗并对' + get.translation(trigger.player) + '造成一点伤害？', player.getExpansions('masaki_duanshi')).set('ai', function (card) {
                                                if (get.attitude(player, trigger.player) >= 0) return false;
                                                return true;
                                            });
                                        ('step 1');
                                        if (result.links?.length) {
                                            player.loseToDiscardpile(result.links);
                                            trigger.player.damage();
                                        } else event.finish();
                                        ('step 2');
                                    },
                                },
                            },
                        },
                        masaki_haidilaoyue: {
                            nobracket: true,
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            _priority: 777,
                            forced: true,
                            filter(event, player) {
                                return ui.cardPile.childElementCount <= 14;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(ui.cardPile.childElementCount);
                                player.showCards(event.cards);
                                ('step 1');
                                var num = 0;
                                if (Array.isArray(event.cards)) for (const i of event.cards) {
                                    if (get.type(i) == 'trick' || get.type(i) == 'delay') {
                                        player.chooseUseTarget(i, false, 'nodistance').set('animate', false, 'nodistance').set('nopopup', true);
                                        event.cards.remove(i);
                                    }
                                }
                                ('step 2');
                                if (event.cards.length) {
                                    player.gain(event.cards, 'gain2');
                                    player.$gain2(event.cards);
                                    game.updateRoundNumber();
                                }
                            },
                        },
                        masaki_yueman: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                                player.chooseToDiscard(true, 'he');
                            },
                        },
                        masaki_duting: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') && event.player != player && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('h', '###是否发动【独听】？###弃置一手张牌对' + get.translation(trigger.player) + '进行限制？').set('ai', function (card) {
                                    if (get.attitude(_status.event.player, trigger.player) < 0) return 8 - get.value(card);
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool && result.cards) {
                                    event.card = get.cards();
                                    player.showCards(event.card);
                                    if (event.card.suit == result.cards[0].suit) {
                                        player.gain(event.card, 'gain2');
                                    }
                                    trigger.player.addTempSkill('masaki_duting_buff');
                                    var saki = event.card.suit;
                                    trigger.player.markAuto('masaki_duting_buff', [saki]);
                                    game.log(trigger.player, '本回合不能使用或打出', saki, '牌');
                                    trigger.player.markSkill('masaki_duting_buff');
                                }
                            },
                            subSkill: {
                                buff: {
                                    charlotte: true,
                                    intro: {
                                        content(storage) {
                                            return '不能使用或打出' + get.translation(storage) + '牌';
                                        },
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
                                            if (player.getStorage('masaki_duting_buff').includes(card.suit)) return false;
                                        },
                                    },
                                },
                            },
                        },
                        masaki_manyue: {
                            trigger: {
                                global: 'roundStart',
                            },
                            _priority: 20,
                            frequent(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            prompt(event, player) {
                                return '〖满月〗:是否观看牌堆顶部的' + game.countPlayer() + '张牌并获得其中的一张牌？';
                            },
                            check(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(game.countPlayer());
                                player.chooseCardButton('〖满月〗:获得其中一张牌', true, event.cards).set('ai', function (button) {
                                    return get.useful(button.link);
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    var card = result.links[0];
                                    player.gain(card, 'draw');
                                }
                            },
                        },
                        masaki_dongcha: {
                            ai: {
                                viewHandcard: true,
                                skillTagFilter(player, tag, arg, card) {
                                    if (player == arg) return false;
                                },
                            },
                        },
                        masaki_xianshu: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: ['gainAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name == 'draw';
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('masaki_xianshu'), '令一名其他角色摸一张牌', function (card, player, target) {
                                        return target != player && !player.getStorage('masaki_xianshu_1').includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('masaki_xianshu_1');
                                    var target = result.targets[0];
                                    player.markAuto('masaki_xianshu_1', [target]);
                                    result.targets[0].draw();
                                }
                            },
                            subSkill: {
                                1: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '贤淑',
                                    intro: {
                                        content: '本回合已令$摸过牌',
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    onremove(player, skill) {
                                        player.storage[skill] = [];
                                    },
                                },
                            },
                        },
                        masaki_lizhan: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            hasHistory(player) {
                                return player.getHistory('damage').length;
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return lib.skill.masaki_lizhan.hasHistory(current);
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('masaki_lizhan'), function (card, player, target) {
                                        return _status.event.yuus.includes(target);
                                    })
                                    .set(
                                        'yuus',
                                        game.filterPlayer(function (current) {
                                            return lib.skill.masaki_lizhan.hasHistory(current);
                                        })
                                    )
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    var num = Math.max(1, target.getDamagedHp());
                                    var num1 = Math.min(5, num);
                                    target.draw(num1);
                                } else event.finish();
                            },
                        },
                        masaki_kaiyan: {
                            audio: 'ext:MA天才麻将少女:2',
                            juexingji: true,
                            derivation: ['masaki_dongcha', 'masaki_xiansheng'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.masaki_kaiyan) return false;
                                return game.roundNumber > player.hp;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('masaki_kaiyan');
                                player.chooseDrawRecover(2, true);
                                ('step 1');
                                player.loseMaxHp();
                                player.storage.masaki_kaiyan = true;
                                if (player.hp > player.maxHp) player.hp = player.maxHp;
                                player.update();
                                player.addSkill('masaki_dongcha');
                                player.addSkill('masaki_xiansheng');
                            },
                        },
                        masaki_qixin: {
                            global: 'masaki_qixin_2',
                            zhuSkill: true,
                            subSkill: {
                                2: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prepare(cards, player, targets) {
                                    },
                                    prompt() {
                                        var player = _status.event.player;
                                        var list = game.filterPlayer(function (target) {
                                            return target != player && target.hasZhuSkill('masaki_qixin', player);
                                        });
                                        var str = '弃置一张牌并令目标摸一张牌,目标为' + get.translation(list);
                                        if (list.length > 1) str += '中的一人';
                                        return str;
                                    },
                                    filter(event, player) {
                                        if (player.group != 'saki') return false;
                                        if (player.countCards('he') <= 0) return false;
                                        return game.hasPlayer(function (target) {
                                            return target != player && target.hasZhuSkill('masaki_qixin', player);
                                        });
                                    },
                                    filterCard: true,
                                    filterTarget(card, player, target) {
                                        return target != player && target.hasZhuSkill('masaki_qixin', player);
                                    },
                                    content() {
                                        target.draw();
                                    },
                                    ai: {
                                        expose: 0.3,
                                        order: 10,
                                        result: {
                                            target: 5,
                                        },
                                    },
                                },
                            },
                        },
                        masaki_jushou: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.getStorage('masaki_jushou_buff').includes(player)) return false;
                                },
                            },
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', '###是否发动【据守】？###弃置一手牌,令' + get.translation(trigger.player) + '本回合内无法再对你使用牌？').set('ai', function (card) {
                                    if (trigger.card.name == 'diaohulishan' || player.getStorage('masaki_jushou_buff').includes(trigger.player)) return false;
                                    if (get.attitude(_status.event.player, trigger.player) < 0) return 8 - get.value(card);
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool && result.cards) {
                                    player.addTempSkill('masaki_jushou_buff');
                                    player.markAuto('masaki_jushou_buff', [trigger.player]);
                                }
                            },
                            subSkill: {
                                buff: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '据守',
                                    intro: {
                                        content: '无法成为$使用牌的目标直至回合结束',
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    onremove(player, skill) {
                                        player.storage[skill] = [];
                                    },
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getHistory('damage').length;
                                    },
                                    content() {
                                        var num = Math.max(1, player.getDamagedHp());
                                        player.draw(num);
                                    },
                                },
                            },
                        },
                        masaki_susheng: {
                            mark: true,
                            intro: {
                                content(storage) {
                                    if (storage >= 0) {
                                        return '受到伤害后摸' + storage + '张牌';
                                    } else if (storage < 0) {
                                        return '受到伤害后弃' + storage * -1 + '张牌';
                                    }
                                },
                            },
                            init(player) {
                                if (typeof player.storage.masaki_susheng != 'number') player.storage.masaki_susheng = -2;
                            },
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                if (player.storage.masaki_susheng > 0) {
                                    var num = player.storage.masaki_susheng;
                                    player.draw(num);
                                    if (player.storage.masaki_susheng < 5) {
                                        player.storage.masaki_susheng++;
                                    }
                                } else if (player.storage.masaki_susheng < 0) {
                                    var num = player.storage.masaki_susheng;
                                    player.chooseToDiscard(num * -1, true, 'he');
                                    player.storage.masaki_susheng++;
                                } else if (player.storage.masaki_susheng == 0) {
                                    player.storage.masaki_susheng++;
                                }
                            },
                        },
                        masaki_banggu: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: 'loseAfter',
                                global: 'loseAsyncAfter',
                            },
                            filter(event, player) {
                                if (event.type != 'discard' || event.getlx === false) return false;
                                var evt = event.getl(player);
                                if (!evt || !evt.cards2) return false;
                                for (let i = 0; i < evt.cards2.length; i++) {
                                    if (get.position(evt.cards2[i]) == 'd') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.cards = [];
                                var cards2 = trigger.getl(player).cards2;
                                for (let i = 0; i < cards2.length; i++) {
                                    if (get.position(cards2[i], true) == 'd') {
                                        event.cards.push(cards2[i]);
                                    }
                                }
                                ('step 1');
                                if (event.cards.length) {
                                    var goon = false;
                                    if (Array.isArray(event.cards)) for (const i of event.cards) {
                                        if (i.name == 'du') {
                                            goon = true;
                                            break;
                                        }
                                    }
                                    if (!goon) {
                                        goon = game.hasPlayer(function (current) {
                                            return player != current && get.attitude(player, current) > 1;
                                        });
                                    }
                                    player
                                        .chooseCardButton(get.prompt('masaki_banggu'), event.cards, [1, event.cards.length])
                                        .set('ai', function (button) {
                                            if (!_status.event.goon || ui.selected.buttons.length) return 0;
                                            if (button.link.name == 'du') return 2;
                                            return 1;
                                        })
                                        .set('goon', goon)
                                        .setHiddenSkill(event.name);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    event.togive = result.links.slice(0);
                                    player
                                        .chooseTarget('将' + get.translation(result.links) + '交给一名角色', true, function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (_status.event.enemy) {
                                                return -att;
                                            } else {
                                                if (att > 2) return att / Math.sqrt(1 + target.countCards('h'));
                                                return att / Math.sqrt(1 + target.countCards('h')) / 5;
                                            }
                                        })
                                        .set('enemy', get.value(event.togive[0], player, 'raw') < 0);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.targets?.length) {
                                    player.line(result.targets, 'green');
                                    for (let i = 0; i < event.togive.length; i++) {
                                        event.cards.remove(event.togive[i]);
                                    }
                                    result.targets[0].gain(event.togive);
                                    result.targets[0].$gain2(event.togive);
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                expose: 0.1,
                                effect: {
                                    target(card, player, target, current) {
                                        if (target.hasFriend() && get.tag(card, 'discard')) {
                                            if (current < 0) return 0;
                                            return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        masaki_zhugu: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: 'loseAfter',
                                global: 'loseAsyncAfter',
                            },
                            filter(event, player) {
                                if (event.type != 'discard' || event.getlx === false) return false;
                                var evt = event.getl(player);
                                if (!evt || !evt.cards2) return false;
                                for (let i = 0; i < evt.cards2.length; i++) {
                                    if (get.position(evt.cards2[i]) == 'd') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('masaki_zhugu'), '令一名其他角色摸一张牌', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].draw();
                                }
                            },
                        },
                        masaki_houyan: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 2 * (player.getDamagedHp() + 1);
                                },
                                targetEnabled(card, player, target) {
                                    if (card.name == 'sha' && card.number < target.getHandcardLimit()) return false;
                                },
                            },
                        },
                        masaki_jiji: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: ['useCard', 'respond', 'loseAfter'],
                                global: 'loseAsyncAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                if (event.name.indexOf('lose') != 0) return get.type(event.card) != 'basic';
                                if (event.type != 'discard') return false;
                                var evt = event.getl(player);
                                if (evt && evt.cards2) {
                                    for (let i = 0; i < evt.cards2.length; i++) {
                                        if (get.type(evt.cards2[i], 'trick') != 'basic') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.count = 1;
                                if (trigger.name.indexOf('lose') == 0) {
                                    event.count = 0;
                                    var evt = trigger.getl(player);
                                    for (let i = 0; i < evt.cards2.length; i++) {
                                        if (get.color(evt.cards2[i], 'trick') != 'basic') event.count++;
                                    }
                                }
                                ('step 1');
                                player.draw();
                                event.count--;
                                ('step 2');
                                if (event.count) {
                                    player.chooseBool(get.prompt2('masaki_jiji')).set('frequentSkill', 'masaki_jiji');
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        masaki_nijing: {
                            trigger: {
                                player: 'useCard',
                            },
                            _priority: 7,
                            frequent(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            prompt(event, player) {
                                return '〖逆境〗:是否摸一张牌并弃一张牌？';
                            },
                            check(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                return event.card.number <= player.getHandcardLimit();
                            },
                            content() {
                                player.draw(1);
                                player.chooseToDiscard('he', true);
                            },
                        },
                        masaki_feiche: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 7;
                                },
                            },
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player != player && event.notLink();
                            },
                            prompt(event, player) {
                                return '〖飞车〗:是否令对' + get.translation(event.player) + '造成的伤害+1？';
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                trigger.num++;
                                player.addTempSkill('masaki_feiche_1');
                                player.storage.masaki_feiche_1++;
                            },
                            subSkill: {
                                1: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '本回合以通过此技能增加了#点伤害',
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = 0;
                                    },
                                    trigger: {
                                        global: 'phaseDiscardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.masaki_feiche_1 > 0;
                                    },
                                    content() {
                                        player.damage('nosource');
                                    },
                                },
                            },
                        },
                        masaki_wahaha: {
                            nobracket: true,
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && player != event.source && !event.source.hasSkill('masaki_feiche') && player.countCards('he') && event.notLink();
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', '###是否发动【哇哈哈】？###弃置一手牌令' + get.translation(trigger.source) + '获得技能〖飞车〗直至回合结束').set('ai', function (card) {
                                    if (get.attitude(_status.event.player, trigger.source) > 0) return 8 - get.value(card);
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) trigger.source.addTempSkill('masaki_feiche');
                            },
                            ai: {
                                expose: 0.25,
                            },
                        },
                        masaki_hujia: {
                            audio: 'ext:MA天才麻将少女:2',
                            zhuSkill: true,
                            trigger: {
                                player: ['chooseToRespondBefore', 'chooseToUseBefore'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (player.storage.masaki_hujia) return false;
                                if (!player.hasZhuSkill('masaki_hujia')) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'saki';
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
                                } else if (event.current.group == 'saki') {
                                    if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 2 || event.current.isOnline()) {
                                        player.storage.masaki_hujia = true;
                                        var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张闪？', { name: 'shan' });
                                        next.set('ai', function () {
                                            var event = _status.event;
                                            return get.attitude(event.player, event.source) - 2;
                                        });
                                        next.set('skillwarn', '替' + get.translation(player) + '打出一张闪');
                                        next.autochoose = lib.filter.autoRespondShan;
                                        next.set('source', player);
                                    }
                                }
                                ('step 1');
                                player.storage.masaki_hujia = false;
                                if (result.bool) {
                                    event.finish();
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                    trigger.responded = true;
                                    trigger.animate = false;
                                    if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
                                        event.current.ai.shown += 0.3;
                                        if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
                                    }
                                    event.current.draw();
                                } else {
                                    event.current = event.current.next;
                                    event.goto(0);
                                }
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.storage.masaki_hujia) return false;
                                    if (!player.hasZhuSkill('masaki_hujia')) return false;
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.group == 'saki';
                                    });
                                },
                            },
                        },
                        masaki_jika: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getStorage('masaki_jika_card').length;
                                },
                            },
                            global: 'masaki_jika_card',
                            group: ['masaki_jika_add', 'masaki_jika_gain'],
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.getStorage('masaki_jika_card').includes(event.player);
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            subSkill: {
                                add: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            current.markAuto('masaki_jika_card', [current]);
                                        });
                                        game.log(player, '令所有角色获得了与自身对应的卡');
                                    },
                                },
                                gain: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source && event.source.isAlive() && event.source != event.player && event.player.getStorage('masaki_jika_card').length;
                                    },
                                    content() {
                                        var card = trigger.player.getStorage('masaki_jika_card').randomGet();
                                        trigger.source.markAuto('masaki_jika_card', [card]);
                                        trigger.player.unmarkAuto('masaki_jika_card', [card]);
                                        game.log(trigger.source, '从', trigger.player, '获得了卡牌【', card, '】');
                                        if (trigger.source == player) {
                                            player.draw();
                                        }
                                    },
                                },
                                card: {
                                    mark: 'player',
                                    intro: {
                                        content: 'player',
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                },
                            },
                        },
                        masaki_zhiji: {
                            audio: 'ext:MA天才麻将少女:2',
                            juexingji: true,
                            zhuSkill: true,
                            keepSkill: true,
                            derivation: 'masaki_hujia',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('masaki_zhiji')) return false;
                                if (player.storage.masaki_zhiji) return false;
                                return player.isMinHp();
                            },
                            content() {
                                'step 0';
                                player.storage.masaki_zhiji = true;
                                player.loseMaxHp();
                                ('step 1');
                                player.chooseDrawRecover(2, true);
                                if (player.hasSkill('masaki_zhiji')) {
                                    player.addSkill('masaki_hujia');
                                } else {
                                    player.addAdditionalSkill('masaki_zhiji', 'masaki_hujia');
                                }
                                if (!player.isZhu) {
                                    player.storage.zhuSkill_masaki_zhiji = ['masaki_hujia'];
                                } else {
                                    event.trigger('zhuUpdate');
                                }
                                player.awakenSkill('masaki_zhiji');
                            },
                        },
                        masaki_guoshiwushuang: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            nobracket: true,
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var names = [];
                                var cards = [];
                                while (cards.length < 13) {
                                    var card = get.cardPile2(function (card) {
                                        return !cards.includes(card) && !names.includes(card.name) && (card.number < 2 || card.number > 8);
                                    });
                                    if (card) {
                                        cards.push(card);
                                        names.push(card.name);
                                    } else break;
                                }
                                if (cards.length) player.addToExpansion(cards).gaintag.add('masaki_guoshiwushuang');
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, content, player) {
                                    var content = player.getExpansions('masaki_guoshiwushuang');
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            dialog.addAuto(content);
                                        } else {
                                            return '共有' + get.cnNumber(content.length) + '张『国士』';
                                        }
                                    }
                                },
                                content(content, player) {
                                    var content = player.getExpansions('masaki_guoshiwushuang');
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            return get.translation(content);
                                        }
                                        return '共有' + get.cnNumber(content.length) + '张『国士』';
                                    }
                                },
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            group: ['masaki_guoshiwushuang_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter', 'discardAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player == event.player || !event.player.isAlive() || player.hasSkill('masaki_guoshiwushuang_2')) return false;
                                        if (event.cards) {
                                            var namelist = [],
                                                numlist = [];
                                            var namedlist = [];
                                            if (Array.isArray(event.cards)) for (const i of event.cards) {
                                                namelist.add(i.name);
                                                numlist.add(i.number);
                                            }
                                            var hs = player.getExpansions('masaki_guoshiwushuang');
                                            for (var j = 0; j < hs.length; j++) {
                                                if (namelist.includes(hs[j].name) || numlist.includes(hs[j].number)) return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var ts = '###是否发动【国士无双】？###是否获得一张『国士』并对' + get.translation(trigger.player) + '造成一点伤害？';
                                        player.chooseCardButton(ts, player.getExpansions('masaki_guoshiwushuang'), false).set('ai', function (card) {
                                            if (get.attitude(player, trigger.player) >= 0) return false;
                                            return true;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.addTempSkill('masaki_guoshiwushuang_2');
                                            player.gain(result.links[0], 'gain2');
                                            trigger.player.damage(player);
                                        }
                                    },
                                },
                                2: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '〖国士无双〗:本回合已发动',
                                    },
                                },
                            },
                        },
                        masaki_yongzhe: {
                            trigger: {
                                global: 'gainAfter',
                            },
                            prompt(event, player) {
                                return '〖勇者〗:是否对' + get.translation(event.player) + '造成一点伤害？';
                            },
                            check(event, player) {
                                return (player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0)) && get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                if (event.parent.parent.name == 'phaseDraw' || event.player == player) return false;
                                return event.player.countCards('h') == 4;
                            },
                            content() {
                                'step 0';
                                trigger.player.damage();
                                ('step 1');
                                if (player.hasSkill('masaki_guoshiwushuang') && player.getExpansions('masaki_guoshiwushuang').length < 13) {
                                    var hs = player.getExpansions('masaki_guoshiwushuang'),
                                        namelist = [];
                                    for (var j = 0; j < hs.length; j++) {
                                        namelist.add(hs[j].name);
                                    }
                                    var card = get.cardPile2(function (card, player) {
                                        return (card.number < 2 || card.number > 8) && !namelist.includes(card.name);
                                    });
                                    if (!card) {
                                        player.chat('没有符合〖国士〗的牌了吗');
                                        game.log('但是牌堆里面已经没有符合〖国士〗标准的牌了!');
                                        event.finish();
                                        return;
                                    }
                                    player.addToExpansion(card).gaintag.add('masaki_guoshiwushuang', 'gain2');
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        masaki_qiangyun: {
                            group: 'masaki_qiangyun_judge',
                            trigger: {
                                player: 'drawBegin',
                            },
                            audio: 'ext:MA天才麻将少女/audio:2',
                            popup: false,
                            forced: true,
                            _priority: -777,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                var names = [];
                                var cards = [];
                                var hs = player.getCards('h');
                                for (var j = 0; j < hs.length; j++) {
                                    names.push(hs[j].name);
                                }
                                while (trigger.num > 0) {
                                    var card = get.cardPile2(function (card) {
                                        return !cards.includes(card) && !names.includes(card.name);
                                    });
                                    if (card) {
                                        trigger.num--;
                                        cards.push(card);
                                        names.push(card.name);
                                    } else break;
                                }
                                if (cards.length && trigger.num == 0) {
                                    player.gain(cards);
                                    game.log(player, '改为从牌堆中获得了', cards.length, '张牌');
                                } else if (cards.length && trigger.num > 0) {
                                    player.gain(cards);
                                    game.log(player, '从牌堆中获得了', cards.length, '张牌并使本次摸牌数-', cards.length, '');
                                } else if (cards.length == 0) {
                                    event.finish;
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            subSkill: {
                                judge: {
                                    trigger: {
                                        player: 'judgeBegin',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    filter(event, player) {
                                        return !event.directresult;
                                    },
                                    content() {
                                        var tempcard = false,
                                            temp = -Infinity;
                                        for (let i = 0; i < ui.cardPile.childElementCount; i++) {
                                            var card = ui.cardPile.childNodes[i];
                                            var temp2 = trigger.judge(card);
                                            if (temp2 > temp) {
                                                tempcard = card;
                                                temp = temp2;
                                            }
                                        }
                                        if (tempcard) trigger.directresult = tempcard;
                                    },
                                    ai: {
                                        luckyStar: true,
                                    },
                                    popup: false,
                                },
                            },
                        },
                        masaki_jianyin: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'gameStart',
                                player: ['damageEnd', 'phaseBegin'],
                            },
                            derivation: 'masaki_yinxing',
                            forced: true,
                            content() {
                                player.addTempSkill('masaki_yinxing', { source: 'damageSource' });
                            },
                        },
                        masaki_yinxing: {
                            charlotte: true,
                            mark: true,
                            nopop: true,
                            init(player) {
                                game.log(player, '进入了【隐形】状态');
                            },
                            onremove(player) {
                                game.log(player, '脱离了【隐形】状态');
                            },
                            intro: {
                                content: '锁定技,你不能成为其他角色【桃】以外卡牌的目标',
                            },
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name != 'tao' && event.player != player;
                            },
                            content() {
                                trigger.excluded.push(player);
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (player != target && card.name != 'tao') return false;
                                },
                            },
                        },
                        masaki_fujiang: {
                            trigger: {
                                global: 'damageBefore',
                            },
                            check(event, player) {
                                return (get.attitude(player, event.player) > 2 && player.identity != 'zhu') || (get.attitude(player, event.player) > 0 && player.hp > event.num);
                            },
                            prompt(event, player) {
                                return '〖副将〗:是否代替' + get.translation(event.player) + '承受' + event.num + '点伤害？';
                            },
                            filter(event, player) {
                                if (player.storage.masaki_fujiang) return false;
                                return event.num >= event.player.hp && event.player != player;
                            },
                            init(player) {
                                player.markSkill('masaki_fujiang');
                                player.storage.masaki_fujiang = false;
                            },
                            intro: {
                                content: 'limited',
                            },
                            limited: true,
                            mark: false,
                            content() {
                                'step 0';
                                player.storage.masaki_fujiang = true;
                                player.awakenSkill('masaki_fujiang');
                                trigger.player.draw(trigger.num * 2);
                                ('step 1');
                                trigger.player = player;
                                game.log(player, '将受伤角色改为了自己');
                            },
                        },
                        saki_jibao: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object') {
                                        if (player.storage.saki_jibao && player.storage.saki_jibao2 && player.storage.saki_jibao.includes(card) && player.storage.saki_jibao2 <= 0) {
                                            return num - 2;
                                        } else if (player.storage.saki_jibao && player.storage.saki_jibao2 && player.storage.saki_jibao.includes(card) && player.storage.saki_jibao2 > 0) {
                                            return num + 2;
                                        }
                                    }
                                },
                            },
                            group: ['saki_jibao_draw', 'saki_jibao_lose', 'saki_bp', 'saki_jibao2', 'saki_jibao_draw2', 'saki_jibao_gain'],
                            marktext: '宝牌',
                            intro: {
                                name: '本局游戏内你的<宝牌>',
                                mark(dialog, content, player) {
                                    if (player == game.me || player.isUnderControl()) dialog.addAuto(content);
                                    else {
                                        var names = [];
                                        for (const i of content) names.add(i.name);
                                        return get.translation(names);
                                    }
                                },
                            },
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                var num = Math.ceil(lib.inpile.length * 0.7);
                                var sakicards = get.cards(num);
                                player.markAuto('saki_jibao', sakicards);
                                player.gain(sakicards);
                                player.discard(sakicards);
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'drawBegin',
                                    },
                                    popup: false,
                                    forced: true,
                                    _priority: -77,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        cards = [];
                                        storages = player.storage.saki_jibao;
                                        num = player.storage.saki_jibao2;
                                        card = get.cardPile(function (card, player) {
                                            return storages.includes(card) && num <= 0;
                                        });
                                        card1 = get.cardPile(function (card, player) {
                                            return !storages.includes(card) && num > 0;
                                        });
                                        if (card || card1) {
                                            trigger.num--;
                                            if (card) {
                                                cards.push(card);
                                            }
                                            if (card1) {
                                                cards.push(card1);
                                            }
                                            if (trigger.num == 0 && player.storage.saki_jibao2 == 0) {
                                                player.gain(cards);
                                                game.log(player, '改为从牌堆/弃牌堆中获得了一张<宝牌>');
                                            } else if (trigger.num > 0 && player.storage.saki_jibao2 == 0) {
                                                player.gain(cards);
                                                game.log(player, '使摸牌数-1,并从牌堆/弃牌堆中获得了一张<宝牌>');
                                            } else if (trigger.num == 0 && player.storage.saki_jibao2 > 0) {
                                                player.gain(cards);
                                                game.log(player, '改为从牌堆/弃牌堆中获得了一张非<宝牌>的牌');
                                            } else if (trigger.num > 0 && player.storage.saki_jibao2 > 0) {
                                                player.gain(cards);
                                                game.log(player, '使摸牌数-1,并从牌堆/弃牌堆中获得了一张非<宝牌>的牌');
                                            }
                                        }
                                    },
                                },
                                lose: {
                                    trigger: {
                                        global: 'gainAfter',
                                        player: ['useCard', 'respond'],
                                    },
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        storages = player.storage.saki_jibao;
                                        var storages = [];
                                        for (let i = 0; i < player.storage.saki_jibao.length; i++) {
                                            storages.push(player.storage.saki_jibao[i]);
                                        }
                                        if (event.cards && (event.name == 'useCard' || event.name == 'respond')) {
                                            if (Array.isArray(event.cards)) for (const i of event.cards) {
                                                if (storages.includes(i)) return true;
                                            }
                                        } else if (event.name == 'gain' && player != event.player) {
                                            var evt = event.getl(player);
                                            if (evt && evt.cards2) {
                                                for (let i = 0; i < evt.cards2.length; i++) {
                                                    if (storages.includes(evt.cards2[i])) return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        player.storage.saki_jibao2 = 2;
                                    },
                                },
                                gain: {
                                    trigger: {
                                        player: 'gainAfter',
                                    },
                                    popup: false,
                                    _priority: 7,
                                    filter(event, player) {
                                        if (!event.cards) {
                                            return false;
                                        }
                                        var cardlist = [];
                                        if (Array.isArray(event.cards)) for (const i of event.cards) {
                                            cardlist.push(i);
                                        }
                                        var storages = player.storage.saki_jibao;
                                        for (var j = 0; j < cardlist.length; j++) {
                                            if (storages.includes(cardlist[j])) return true;
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        var cards = [];
                                        event.cards = trigger.cards;
                                        var storages = player.storage.saki_jibao;
                                        if (Array.isArray(event.cards)) for (const i of event.cards) {
                                            if (storages.includes(i)) {
                                                cards.push(i);
                                            }
                                        }
                                        if (cards) {
                                            player.loseToSpecial(cards, 'saki_bp');
                                            game.log(player, '将', cards.length, '张牌置入了<宝牌>区');
                                        }
                                    },
                                },
                                draw2: {
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        if (event.getParent(2).name == 'saki_jibao_gain' || !event.cards) return false;
                                        var cardlist = [];
                                        if (Array.isArray(event.cards)) for (const i of event.cards) {
                                            cardlist.add(i);
                                        }
                                        var storages = player.storage.saki_jibao;
                                        for (var j = 0; j < cardlist.length; j++) {
                                            if (storages.includes(cardlist[j])) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        saki_bp: {
                            marktext: '宝牌',
                            intro: {
                                mark(dialog, storage, player) {
                                    dialog.addAuto(
                                        player.getCards('s', function (card) {
                                            return card.hasGaintag('saki_bp');
                                        })
                                    );
                                },
                                markcount(storage, player) {
                                    return player.getCards('s', function (card) {
                                        return card.hasGaintag('saki_bp');
                                    }).length;
                                },
                                onunmark(storage, player) {
                                    var cards = player.getCards('s', function (card) {
                                        return card.hasGaintag('saki_bp');
                                    });
                                    if (cards.length) {
                                        player.lose(cards, ui.discardPile);
                                        player.$throw(cards, 1000);
                                        game.log(cards, '进入了弃牌堆');
                                    }
                                },
                            },
                        },
                        saki_jibao2: {
                            mark: true,
                            intro: {
                                content: '#轮次内难以摸到<宝牌>',
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = 0;
                            },
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.saki_jibao2 > 0;
                            },
                            content() {
                                player.storage.saki_jibao2--;
                            },
                        },
                        masaki_yibao: {
                            enable: 'phaseUse',
                            filterCard: true,
                            position: 'hes',
                            filterTarget(card, player, target) {
                                return target != player && !player.getStorage('masaki_yibao_1').includes(target);
                            },
                            check(card) {
                                const player = _status.event.player;//QQQ
                                var num = get.value(card);
                                if (player.storage.saki_jibao.includes(card) && player.storage.saki_jibao2 <= 0) {
                                    num + 2;
                                } else if (player.storage.saki_jibao.includes(card) && player.storage.saki_jibao2 > 0) {
                                    num - 2;
                                }
                                if (num < 6) {
                                    return 7 - num;
                                } else {
                                    if (_status.event.player.needsToDiscard()) {
                                        return 7 - num;
                                    }
                                }
                                return 0;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                'step 0';
                                target.gain(cards, player, 'giveAuto');
                                player.addTempSkill('masaki_yibao_1');
                                player.markAuto('masaki_yibao_1', [target]);
                                ('step 1');
                                if (player.storage.saki_jibao) {
                                    if (player.storage.saki_jibao.includes(cards[0])) {
                                        player.gainPlayerCard(target, 'he', 2, true);
                                    } else {
                                        player.gainPlayerCard(target, 'he', true);
                                    }
                                } else {
                                    player.gainPlayerCard(target, 'he', true);
                                }
                                ('step 2');
                                event.cards = result.cards;
                                if (player.storage.saki_jibao) {
                                    storages = player.storage.saki_jibao;
                                    if (Array.isArray(event.cards)) for (const i of event.cards) {
                                        if (storages.includes(i)) {
                                            target.damage('player');
                                        }
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 20,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '本回合已对$使用过〖易宝〗',
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    onremove(player, skill) {
                                        player.storage[skill] = [];
                                    },
                                },
                            },
                        },
                        masaki_juhan: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.suit == 'heart') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.suit == 'heart') return false;
                                },
                                cardUsable(card, player, num) {
                                    if (card.suit == 'diamond') return Infinity;
                                },
                            },
                            trigger: {
                                target: 'shaBefore',
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he', { color: 'black' }) && (get.color(event.card) == 'black' || event.card.nature == 'ice' || event.card.nature == 'thunder');
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', true, '###是否发动【惧寒】?###弃置一张黑色牌,从牌堆/弃牌堆中获得一张红色牌', function (card) {
                                    return get.color(card) == 'black';
                                });
                                ('step 1');
                                if (result.bool) {
                                    var cards = get.cardPile(function (card) {
                                        return get.color(card) == 'red';
                                    });
                                    if (cards) {
                                        player.gain(cards, 'gain2');
                                    }
                                }
                            },
                        },
                        masaki_nuanse: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object') {
                                        if (get.color(card) == 'red') {
                                            return num + 10;
                                        }
                                    }
                                },
                            },
                            group: 'masaki_nuanse_judge',
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: ['useCard', 'respond', 'loseAfter'],
                                global: 'loseAsyncAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name.indexOf('lose') != 0) return get.color(event.card) == 'red';
                                if (event.type != 'discard' || event.getParent('phaseDiscard').player == player) return false;
                                var evt = event.getl(player);
                                if (evt && evt.cards2) {
                                    for (let i = 0; i < evt.cards2.length; i++) {
                                        if (get.color(evt.cards2[i], player) == 'red') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.count = 1;
                                if (trigger.name.indexOf('lose') == 0) {
                                    event.count = 0;
                                    var evt = trigger.getl(player);
                                    for (let i = 0; i < evt.cards2.length; i++) {
                                        if (get.color(evt.cards2[i], player) == 'red') event.count++;
                                    }
                                }
                                ('step 1');
                                player.draw();
                                event.count--;
                                ('step 2');
                                if (event.count) {
                                    player.chooseBool(get.prompt2('masaki_nuanse')).set('frequentSkill', 'masaki_nuanse');
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                threaten: 0.7,
                            },
                            subSkill: {
                                judge: {
                                    audio: 'saki_nuanse',
                                    trigger: {
                                        player: 'cardsDiscardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.parent.relatedEvent;
                                        if (!evt || evt.name != 'judge') return;
                                        return get.color(event.cards[0]) == 'red';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        masaki_sugong: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (target.hasSkill('masaki_sugong_1')) return true;
                                },
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return (
                                    player.countCards('h') > 0 &&
                                    game.hasPlayer(function (current) {
                                        return current != player && player.canCompare(current);
                                    })
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player.chooseTarget(
                                    function (card, player, target) {
                                        return player != target && player.canCompare(target);
                                    },
                                    get.prompt('masaki_sugong'),
                                    [1, 3],
                                    false
                                ).ai = function (target) {
                                    return get.attitude(player, target) < 0;
                                };
                                ('step 2');
                                if (result.targets?.length) {
                                    var targets = result.targets;
                                    player.chooseToCompare(targets).set('callback', function () {
                                        if (event.num1 > event.num2) {
                                            target.addTempSkill('masaki_sugong_1');
                                        } else {
                                            target.addTempSkill('masaki_sugong_2');
                                        }
                                    });
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                1: {
                                    charlotte: true,
                                    mark: true,
                                    mod: {
                                        cardEnabled2(card) {
                                            if (get.position(card) == 'h') return false;
                                        },
                                    },
                                    intro: {
                                        content: '不能使用或打出手牌',
                                    },
                                },
                                2: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '可以将手牌当【闪】使用或打出',
                                    },
                                    mod: {
                                        aiValue(player, card, num) {
                                            if (card.name != 'shan') return;
                                            var cards = player.getCards('hs', function (card) {
                                                return card.name == 'shan';
                                            });
                                            cards.sort(function (a, b) {
                                                return (b.name == 'shan' ? 1 : 2) - (a.name == 'shan' ? 1 : 2);
                                            });
                                            var geti = function () {
                                                if (cards.includes(card)) {
                                                    return cards.indexOf(card);
                                                }
                                                return cards.length;
                                            };
                                            if (card.name == 'shan') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                            return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
                                        },
                                        aiUseful() {
                                            return lib.skill.qingguo.mod.aiValue.apply(this, arguments);
                                        },
                                    },
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard(card, player) {
                                        return true;
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hs')) return false;
                                    },
                                    position: 'hs',
                                    prompt: '将一张手牌当闪使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        order: 3,
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('hs')) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                            },
                                        },
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [7, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        masaki_kongji: {
                            trigger: {
                                player: ['compareMultipleAfter'],
                                target: ['compareMultipleAfter'],
                            },
                            filter(event, player) {
                                if (event.preserve || player.storage.masaki_kongji_draw > 0) return false;
                                if (player == event.player) {
                                    if (event.num1 > event.num2) {
                                        return true;
                                    }
                                } else {
                                    if (event.num1 < event.num2) {
                                        return true;
                                    }
                                }
                            },
                            forced: true,
                            content() {
                                if (player == trigger.player) {
                                    if (trigger.num1 > trigger.num2) {
                                        player.addTempSkill('masaki_kongji_draw');
                                        player.storage.masaki_kongji_draw++;
                                    }
                                } else if (player != trigger.player) {
                                    if (trigger.num1 < trigger.num2) {
                                        player.addTempSkill('masaki_kongji_draw');
                                        player.storage.masaki_kongji_draw++;
                                    }
                                }
                            },
                            subSkill: {
                                draw: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '本回合弃牌阶段开始时摸#张牌',
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = 0;
                                    },
                                    trigger: {
                                        global: 'phaseDiscardBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.masaki_kongji_draw > 0;
                                    },
                                    content() {
                                        var num = player.storage.masaki_kongji_draw;
                                        player.draw(num);
                                    },
                                },
                            },
                        },
                        masaki_kanpo: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard: true,
                                    selectCard: 1,
                                    position: 'hes',
                                    filterTarget(card, player, target) {
                                        return target != player;
                                    },
                                    selectTarget: 1,
                                    ai1(card) {
                                        return 6 - get.value(card);
                                    },
                                    ai2(target) {
                                        return -get.attitude(player, target);
                                    },
                                    prompt: '是否发动〖看破〗？',
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.discard(result.cards);
                                    result.targets[0].addTempSkill('baiban');
                                    player.addTempSkill('masaki_kanpo_buff');
                                }
                            },
                            subSkill: {
                                buff: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            game.countPlayer2(function (current) {
                                                return current.getHistory('damage').length;
                                            }) > 0
                                        );
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        masaki_chuanqi: {
                            global: ['masaki_chuanqi_1', 'masaki_chuanqi_2'],
                            zhuSkill: true,
                            subSkill: {
                                1: {
                                    enable: 'chooseToUse',
                                    filter(event, player) {
                                        if (player.group != 'saki') return false;
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return current !== player && current.hasZhuSkill('masaki_chuanqi', player);
                                            })
                                        )
                                            return false;
                                        if (player.countCards('h', { name: 'shan' }) === 0) return false;
                                        if (event.filterCard && !event.filterCard({ name: 'sha' }, player, event)) return false;
                                        if (player.hasSkill('masaki_chuanqi_3')) return false;
                                        if (!lib.filter.cardUsable({ name: 'sha' }, player)) return false;
                                        return true;
                                    },
                                    multitarget: true,
                                    selectTarget: 2,
                                    filterTarget(card, player, target) {
                                        if (ui.selected.targets.length) {
                                            var evt = _status.event._backup;
                                            if (evt && typeof evt.filterTarget == 'function' && !evt.filterTarget({ name: 'sha' }, player, target)) {
                                                return false;
                                            }
                                            return player.canUse({ name: 'sha' }, target);
                                        }
                                        return target !== player && target.hasZhuSkill('masaki_chuanqi', player);
                                    },
                                    targetprompt: ['给目标【闪】', '对目标出【杀】'],
                                    filterCard: {
                                        name: 'shan',
                                    },
                                    discard: false,
                                    lose: true,
                                    check(card) {
                                        return 1;
                                    },
                                    content() {
                                        'step 0';
                                        player.$give(cards, targets[0]);
                                        target.gain(cards, player);
                                        ('step 1');
                                        targets[0]
                                            .chooseControl('视为使用【杀】', '取消', function (event, player) {
                                                var att = get.attitude(targets[0], player);
                                                var eff = get.effect(targets[1], { name: 'sha' }, player, targets[0]);
                                                if (att > 2 || eff > 0) return '视为使用【杀】';
                                                return '取消';
                                            })
                                            .set('prompt', '传奇:是否令' + get.translation(player) + '视为对' + get.translation(targets[1]) + '使用一张【杀】');
                                        ('step 2');
                                        if (result.control == '视为使用【杀】') {
                                            player.useCard({ name: 'sha' }, targets[1]);
                                        } else {
                                            player.addTempSkill('masaki_chuanqi_3', {
                                                global: ['useCardAfter', 'useSkillAfter', 'phaseAfter'],
                                            });
                                        }
                                    },
                                    ai: {
                                        order() {
                                            return get.order({ name: 'sha' }) - 0.1;
                                        },
                                        result: {
                                            target(player, target) {
                                                if (ui.selected.targets.length === 0) return 1;
                                                return get.effect(target, { name: 'sha' }, player, target);
                                            },
                                        },
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'chooseToRespondBegin',
                                    },
                                    filter(event, player) {
                                        if (player.group !== 'ma') return false;
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return current !== player && current.hasZhuSkill('masaki_chuanqi', player);
                                            })
                                        )
                                            return false;
                                        if (event.responded) return false;
                                        if (!event.filterCard || !event.filterCard({ name: 'sha' }, player, event)) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseCardTarget({
                                            filterCard: { name: 'shan' },
                                            filterTarget(card, player, target) {
                                                return target !== player && target.hasZhuSkill('masaki_chuanqi', player);
                                            },
                                            ai1(card) {
                                                return 1;
                                            },
                                            ai2(target) {
                                                return get.attitude(player, target);
                                            },
                                            prompt: '是否发动传奇？',
                                        });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            player.$give(result.cards, result.targets[0]);
                                            result.targets[0].gain(result.cards, player);
                                            event.target = result.targets[0];
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        event.target
                                            .chooseControl('视为打出【杀】', '取消', function (event, player) {
                                                var att = get.attitude(event.target, player);
                                                if (att > 2) return '视为打出【杀】';
                                                return '取消';
                                            })
                                            .set('prompt', '传奇:是否令' + get.translation(player) + '视为打出了一张【杀】？');
                                        ('step 3');
                                        if (result.control == '视为打出【杀】') {
                                            trigger.result = { bool: true, card: { name: 'sha' } };
                                            trigger.responded = true;
                                            trigger.untrigger();
                                        }
                                    },
                                    ai: {
                                        respondSha: true,
                                    },
                                },
                                3: {
                                },
                            },
                        },
                        masaki_paishanzhipei: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    var cards = player.storage.masaki_paishanzhipei;
                                    if (Array.isArray(cards)) for (const i of cards) {
                                        if (i == card) return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    var cards = player.storage.masaki_paishanzhipei;
                                    if (Array.isArray(cards)) for (const i of cards) {
                                        if (name == 'phaseDiscard' && i == card) return false;
                                    }
                                },
                                targetInRange(card, player) {
                                    var cards = player.storage.masaki_paishanzhipei;
                                    if (Array.isArray(cards)) for (const i of cards) {
                                        if (i == get.card(card)) return true;
                                    }
                                },
                            },
                            group: ['masaki_paishanzhipei_count', 'masaki_paishanzhipei_draw'],
                            nobracket: true,
                            marktext: '牌山',
                            init(player) {
                                player.storage.masaki_paishanzhipei = [];
                            },
                            intro: {
                                name: '本局游戏内已处于你支配下的<牌山>',
                                mark(dialog, content, player) {
                                    if (player == game.me || player.isUnderControl()) dialog.addAuto(content);
                                    else {
                                        var names = [];
                                        for (const i of content) names.add(i.name);
                                        return get.translation(names);
                                    }
                                },
                            },
                            subSkill: {
                                count: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                        target: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.cards) {
                                            if (Array.isArray(event.cards)) for (const i of event.cards) {
                                                if (!player.storage.masaki_paishanzhipei.includes(i)) return true;
                                            }
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        event.cards = trigger.cards.filterInD();
                                        if (event.cards.length > 1) {
                                            var next = player.chooseToMove('牌山支配:将牌按顺序置于牌堆底');
                                            next.set('list', [['牌堆底', event.cards]]);
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
                                                ui.cardPile.appendChild(card, ui.cardPile.firstChild);
                                                game.log(player, '将', card, '置于牌堆底');
                                            }
                                        }
                                        game.updateRoundNumber();
                                        player.markAuto('masaki_paishanzhipei', trigger.cards);
                                    },
                                },
                                draw: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.cards && event.player != player) {
                                            if (Array.isArray(event.cards)) for (const i of event.cards) {
                                                if (player.storage.masaki_paishanzhipei.includes(i)) return true;
                                            }
                                        }
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        masaki_yinfan: {
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getStorage('masaki_yinfan_2').includes(get.type2(event.card));
                            },
                            content() {
                                player.addTempSkill('masaki_yinfan_2', ['phaseAfter', 'phaseBefore']);
                                player.markAuto('masaki_yinfan_2', [get.type2(trigger.card)]);
                                player.draw();
                            },
                            subSkill: {
                                2: {
                                    charlotte: true,
                                    mark: true,
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    onremove(player, skill) {
                                        player.storage[skill] = [];
                                    },
                                    intro: {
                                        content: '当前已成为过$类型的目标',
                                    },
                                },
                            },
                        },
                        masaki_zhendao: {
                            trigger: {
                                global: 'judge',
                            },
                            frequent(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            prompt2: '当一名角色的判定牌生效前,若此牌在你的支配下,你可以为其重新指定花色和点数',
                            check(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            filter(event, player) {
                                var card = event.player.judging[0];
                                var cards = player.storage.masaki_paishanzhipei;
                                if (Array.isArray(cards)) for (const i of cards) {
                                    if (i == card) return true;
                                }
                                return false;
                            },
                            audio: 'ext:MA天才麻将少女:true',
                            lastDo: true,
                            content() {
                                'step 0';
                                var card = trigger.player.judging[0];
                                var judge0 = trigger.judge(card);
                                var judge1 = 0;
                                var choice = 'cancel2';
                                event.suitchoice = 'cancel2';
                                var attitude = get.attitude(player, trigger.player);
                                var list = [];
                                event.suitx = ['heart', 'diamond', 'club', 'spade'];
                                for (var x = 0; x < 4; x++) {
                                    for (let i = 1; i < 14; i++) {
                                        list.add(i);
                                        var judge2 =
                                            (trigger.judge({
                                                name: card.name,
                                                suit: event.suitx[x],
                                                number: i,
                                                nature: get.nature(card),
                                            }) -
                                                judge0) *
                                            attitude;
                                        if (judge2 > judge1) {
                                            choice = i;
                                            event.suitchoice = event.suitx[x];
                                            judge1 = judge2;
                                        }
                                    }
                                }
                                list.push('cancel2');
                                event.suitx.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('choice', choice).prompt = get.prompt2(event.name);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    game.log(trigger.player, '判定结果点数为', '#g' + result.control);
                                    player.popup(result.control, 'fire');
                                    if (!trigger.fixedResult) trigger.fixedResult = {};
                                    trigger.fixedResult.number = result.control;
                                }
                                player
                                    .chooseControl(event.suitx)
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('choice', event.suitchoice).prompt = get.prompt2(event.name);
                                ('step 2');
                                if (result.control != 'cancel2') {
                                    game.log(trigger.player, '判定结果花色为', '#g' + result.control);
                                    player.popup(result.control, 'fire');
                                    if (!trigger.fixedResult) trigger.fixedResult = {};
                                    trigger.fixedResult.suit = result.control;
                                    if (result.control == 'club' || result.control == 'spade') {
                                        trigger.fixedResult.color = 'black';
                                    } else if (result.control == 'heart' || result.control == 'diamond') {
                                        trigger.fixedResult.color = 'red';
                                    }
                                }
                            },
                        },
                        masaki_canju: {
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card;
                            },//QQQ
                            content() {
                                if (trigger.card.number > 10 || !trigger.cards || !trigger.cards.length || !trigger.card.number) {
                                    var card = get.cardPile(function (card) {
                                        return card.number > 10;
                                    });
                                } else if (trigger.card.number == 1) {
                                    var card = get.cardPile(function (card) {
                                        return card.number == 2 || card.number == 3;
                                    });
                                } else if (trigger.card.number == 2) {
                                    var card = get.cardPile(function (card) {
                                        return card.number == 1 || card.number == 3 || card.number == 4 || card.number == 5;
                                    });
                                } else if (trigger.card.number == 3) {
                                    var card = get.cardPile(function (card) {
                                        return card.number == 1 || card.number == 2 || card.number == 5 || card.number == 6;
                                    });
                                } else if (trigger.card.number == 4) {
                                    var card = get.cardPile(function (card) {
                                        return card.number == 2 || card.number == 5 || card.number == 7 || card.number == 8;
                                    });
                                } else if (trigger.card.number == 5) {
                                    var card = get.cardPile(function (card) {
                                        return card.number == 2 || card.number == 3 || card.number == 4 || card.number == 6 || card.number == 8 || card.number == 9;
                                    });
                                } else if (trigger.card.number == 6) {
                                    var card = get.cardPile(function (card) {
                                        return card.number == 3 || card.number == 5 || card.number == 9 || card.number == 10;
                                    });
                                } else if (trigger.card.number == 7) {
                                    var card = get.cardPile(function (card) {
                                        return card.number == 4 || card.number == 8;
                                    });
                                } else if (trigger.card.number == 8) {
                                    var card = get.cardPile(function (card) {
                                        return card.number == 4 || card.number == 5 || card.number == 7 || card.number == 9;
                                    });
                                } else if (trigger.card.number == 9) {
                                    var card = get.cardPile(function (card) {
                                        return card.number == 5 || card.number == 6 || card.number == 8 || card.number == 10;
                                    });
                                } else if (trigger.card.number == 10) {
                                    var card = get.cardPile(function (card) {
                                        return card.number == 6 || card.number == 9;
                                    });
                                }
                                if (card) player.gain(card, 'gain2');
                            },
                        },
                        masakichengzhi: {
                            audio: 'ext:MA天才麻将少女:2',
                            juexingji: true,
                            zhuSkill: true,
                            keepSkill: true,
                            derivation: 'masaki_chuanqi',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('masakichengzhi')) return false;
                                if (player.storage.masakichengzhi) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.masakichengzhi = true;
                                player.gainMaxHp();
                                ('step 1');
                                player.recover(2 - player.hp);
                                if (player.hasSkill('masakichengzhi')) {
                                    player.addSkill('masaki_chuanqi');
                                } else {
                                    player.addAdditionalSkill('masakichengzhi', 'masaki_chuanqi');
                                }
                                if (!player.isZhu) {
                                    player.storage.zhuSkill_masakichengzhi = ['masaki_chuanqi'];
                                } else {
                                    event.trigger('zhuUpdate');
                                }
                                player.awakenSkill('masakichengzhi');
                            },
                        },
                        masaki_shenjing: {
                            nobracket: true,
                            audio: 'ext:MA天才麻将少女:2',
                            zhuSkill: true,
                            group: ['masaki_shenjing_2'],
                            preHidden: ['masaki_shenjing_2'],
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('masaki_shenjing')) return false;
                                if (player.storage.masaki_shenjing) return false;
                                return game.players.length > 1 && game.phaseNumber == 0;
                            },
                            content() {
                                'step 0';
                                player.storage.masaki_shenjing = true;
                                player
                                    .chooseTarget('选择【照神镜】的目标', lib.translate.masaki_shenjing_info, true, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att < 0) return -att + 3;
                                        return Math.random();
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    game.log(target, '成为了', '【照神镜】', '的目标');
                                    player.markAuto('masaki_shenjing_2', [target]);
                                    player.chooseControl('ok').set('dialog', [get.translation(target) + '的身份是' + get.translation(target.identity), [[target.name], 'character']]);
                                }
                            },
                            subSkill: {
                                2: {
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    audio: 2,
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    intro: {
                                        content: '$对你使用【杀】时你摸一张牌',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && player.storage.masaki_shenjing_2.includes(event.player) && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        masaki_tianti: {
                            init(player) {
                                player.storage.masaki_tianti = 1;
                            },
                            group: ['masaki_tianti_1'],
                            preHidden: ['masaki_tianti_1'],
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.num += player.storage.masaki_tianti;
                                ('step 1');
                                if (player.storage.masaki_tianti < 3) {
                                    player.storage.masaki_tianti++;
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.masaki_tianti = 1;
                                    },
                                },
                            },
                        },
                        masaki_wangzhedeyuyu: {
                            audio: 'ext:MA雀无双:2',
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            check(event, player) {
                                return player.countCards('h') <= 2;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.discard(player.getCards('h'));
                                ('step 1');
                                trigger.num += -1;
                            },
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        masaki_jiulian: {
                            nobracket: true,
                            group: ['masaki_jiulian_9'],
                            preHidden: ['masaki_jiulian_9'],
                            init(player) {
                                player.storage.masaki_jiulian = 0;
                            },
                            mark: true,
                            intro: {
                                content: '已累计造成#次伤害',
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                player.storage.masaki_jiulian++;
                            },
                            subSkill: {
                                9: {
                                    enable: 'phaseUse',
                                    limited: true,
                                    filter(event, player) {
                                        return player.storage.masaki_jiulian >= 9;
                                    },
                                    content() {
                                        'step 0';
                                        player.awakenSkill('masaki_jiulian_9');
                                        player.awakenSkill('masaki_jiulian');
                                        player.storage.masakijiulian = 0;
                                        ('step 1');
                                        player.storage.masakijiulian++;
                                        var card = get.cardPile(function (card) {
                                            return card.number == player.storage.masakijiulian && card.name != 'shan';
                                        });
                                        event.card = card;
                                        player.showCards(card);
                                        if (!player.hasUseTarget(card)) {
                                            card.fix();
                                            ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                            game.updateRoundNumber();
                                            event.finish();
                                        }
                                        ('step 2');
                                        var next = player.chooseUseTarget(card, true);
                                        if (get.info(card).updateUsable == 'phaseUse') next.addCount = false;
                                        ('step 3');
                                        if (result.bool && player.storage.masakijiulian <= 8) {
                                            event.goto(1);
                                        } else {
                                            card.fix();
                                            ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                            game.updateRoundNumber();
                                        }
                                    },
                                    ai: {
                                        order: 1,
                                        result: {
                                            player(player) {
                                                var cards = [];
                                                for (let i = 0; i < Math.min(2, player.maxHp); i++) {
                                                    var card = ui.cardPile.childNodes[i];
                                                    if (card) {
                                                        if (!player.hasValueTarget(card)) return 0;
                                                    } else break;
                                                }
                                                return 1;
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
                            },
                        },
                        masaki_juji: {
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            group: ['masaki_juji_1', 'masaki_juji_2'],
                            preHidden: ['masaki_juji_1', 'masaki_juji_2'],
                            subSkill: {
                                1: {
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        var cards = player.getExpansions('masaki_juji');
                                        if (!cards || !cards.length) return true;
                                        var suitlist = [];
                                        if (Array.isArray(cards)) for (const i of cards) {
                                            suitlist.add(i.suit);
                                        }
                                        var ms = player.getCards('he');
                                        for (var j = 0; j < ms.length; j++) {
                                            if (!suitlist.includes(ms[j].suit)) return true;
                                        }
                                        return false;
                                    },
                                    selectCard: 1,
                                    filterCard(card, player) {
                                        var cards = player.getExpansions('masaki_juji');
                                        var suitlist = [];
                                        if (Array.isArray(cards)) for (const i of cards) {
                                            suitlist.add(i.suit);
                                        }
                                        return !suitlist.includes(card.suit);
                                    },
                                    position: 'he',
                                    discard: false,
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    content() {
                                        player.addToExpansion(cards, player, 'give').gaintag.add('masaki_juji');
                                    },
                                    ai: {
                                        order: 2,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    filter(event, player) {
                                        if (!player.hasSkill('masaki_juji')) return false;
                                        if (player.getExpansions('masaki_juji').length == 0) return false;
                                        if (_status.currentPhase !== event.player) return false;
                                        if (_status.currentPhase == player) return false;
                                        return player.getExpansions('masaki_juji').filter(function (card) {
                                            return card.suit == event.card.suit;
                                        }).length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseCardButton(player.getExpansions('masaki_juji'), '是否对' + get.translation(trigger.player) + '发动狙击？')
                                            .set('filterButton', function (button) {
                                                return button.link.suit === trigger.card.suit;
                                            })
                                            .set('ai', function () {
                                                var att = get.attitude(player, trigger.player);
                                                if (att >= 0) return 0;
                                                return 1;
                                            });
                                        ('step 1');
                                        if (result.links?.length) {
                                            player.loseToDiscardpile(result.links[0]);
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        trigger.player.chooseToRespond({ name: 'shan' });
                                        ('step 3');
                                        if (!result.bool) {
                                            trigger.cancel();
                                            trigger.player.damage(player.trigger);
                                        } else {
                                            player.damage(trigger.player);
                                            player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        masaki_fenggeng: {
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            group: ['masaki_fenggeng_1', 'masaki_fenggeng_2'],
                            preHidden: ['masaki_fenggeng_1', 'masaki_fenggeng_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    filter(event, player) {
                                        return event.cards && event.cards.length;
                                    },
                                    usable: 1,
                                    forced: true,
                                    content() {
                                        player.addToExpansion(trigger.cards, player, 'give').gaintag.add('masaki_fenggeng');
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    filter(event, player) {
                                        return player.getExpansions('masaki_fenggeng') && game.roundNumber * player.getDamagedHp() >= player.getExpansions('masaki_fenggeng').length;
                                    },
                                    forced: true,
                                    content() {
                                        player.gain(player.getExpansions('masaki_fenggeng'), 'gain2', 'fromStorage');
                                    },
                                },
                            },
                        },
                        masaki_diaoshi: {
                            marktext: '渔',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            group: ['masaki_diaoshi_1', 'masaki_diaoshi_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.num = Math.max(1, player.getDamagedHp() + 1);
                                        player.draw(event.num);
                                        ('step 1');
                                        player.chooseCard('【钓师】:将' + get.cnNumber(event.num) + '张手牌作为『渔』', event.num, 'h', true).set('ai', function (card) {
                                            return 12 - get.value(card);
                                        });
                                        ('step 2');
                                        if (result.cards?.length) {
                                            var cs = result.cards;
                                            player.addToExpansion(cs, player, 'give').gaintag.add('masaki_diaoshi');
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase == player) return false;
                                        var number = event.card.number;
                                        var storage = player.getExpansions('masaki_diaoshi');
                                        if (typeof number != 'number') return false;
                                        if (!storage || storage.length < 2) return false;
                                        if (
                                            storage.filter(function (card) {
                                                return card.number == number;
                                            }).length >= 2
                                        )
                                            return true;
                                        var has_l1 = storage.filter(function (card) {
                                            return card.number + 1 == number;
                                        }).length;
                                        var has_l2 = storage.filter(function (card) {
                                            return card.number + 2 == number;
                                        }).length;
                                        var has_g1 = storage.filter(function (card) {
                                            return card.number - 1 == number;
                                        }).length;
                                        var has_g2 = storage.filter(function (card) {
                                            return card.number - 2 == number;
                                        }).length;
                                        var has_g2 = storage.filter(function (card) {
                                            return card.number - 2 == number;
                                        }).length;
                                        if (has_l1 && has_l2) return true;
                                        if (has_g1 && has_g2) return true;
                                        if (has_l1 && has_g1) return true;
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        event.storage = player.getExpansions('masaki_diaoshi');
                                        event.number = trigger.card.number;
                                        player
                                            .chooseCardButton('是否发动【钓师】？', event.storage, 2)
                                            .set('filterButton', function (button) {
                                                var number = button.link.number;
                                                if (ui.selected.buttons.length === 0) {
                                                    if (number == event.number) return true;
                                                    if (number + 1 == event.number) return true;
                                                    if (number - 1 == event.number) return true;
                                                    return false;
                                                }
                                                var number1 = ui.selected.buttons[0].link.number;
                                                if (number1 == event.number) return number == event.number;
                                                if (number1 + 1 == event.number) return number + 1 == number1 || number - 1 == event.number;
                                                if (number1 - 1 == event.number) return number - 1 == number1 || number + 1 == event.number;
                                                return false;
                                            })
                                            .set('ai', function () {
                                                if (get.value(trigger.card, player) < 2) return 0;
                                                return 2 + Math.random();
                                            });
                                        ('step 1');
                                        if (result.links?.length) {
                                            result.links.forEach(function (card) {
                                                player.loseToDiscardpile(card);
                                            });
                                            player.gain(trigger.cards, 'gain2');
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        masaki_yuzhe: {
                            trigger: {
                                player: 'gainAfter',
                                global: 'loseAsyncAfter',
                            },
                            prompt(event, player) {
                                return '渔者:是否令' + get.translation(_status.currentPhase) + '摸一张牌？';
                            },
                            check(event, player) {
                                return get.attitude(player, _status.currentPhase) > 0;
                            },
                            filter(event, player) {
                                return _status.currentPhase && player != _status.currentPhase && event.getg(player).length;
                            },//QQQ
                            content() {
                                _status.currentPhase.draw();
                            },
                        },
                        masaki_xianzhi: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        current.randomDiscard('h', 2);
                                    }
                                });
                            },
                        },
                        masaki_xingqi: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isMaxHandcard(true) && player.countCards('hej');
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('hej', '###是否发动【星起】？###弃置自身区域内一张牌并从牌堆底部将手牌摸至全场唯一最多？').set('ai', function (card) {
                                    if (player.countCards('h') <= 7 || player.countCards('j') > 0) return 10 - get.value(card);
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool && result.cards) {
                                    var num = 0;
                                    for (const i of game.players) {
                                        if (i != player) {
                                            num = Math.max(num, i.countCards('h'));
                                        }
                                    }
                                    var dh = Math.min(7, num - player.countCards('h') + 1);
                                    if (dh > 0) {
                                        player.draw('bottom', dh);
                                    }
                                }
                            },
                        },
                        masaki_xinghe: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            frequent(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            usable: 1,
                            prompt2: '当你失去区域内最后的牌后,你可以摸一张牌',
                            check(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            filter(event, player) {
                                return !player.countCards('hej');
                            },//QQQ
                            content() {
                                player.draw();
                            },
                        },
                        masaki_zhanji: {
                            trigger: {
                                global: ['useCardToBefore'],
                            },
                            filter(event, player) {
                                if (_status.currentPhase == player || player.countCards('he') < 2 || event.targets.length > 1 || event.card.name == 'maxie') return false;
                                if (!event.player || !event.target) return false;
                                var card = event.card;
                                if (event.player != event.target && get.tag(card, 'damage')) return true;
                                if (event.player != event.target && get.type(card) == 'trick' && event.card.name != 'jiedao' && event.card.name != 'wuxie') return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', 2, '###是否发动【斩击】交换' + get.translation(trigger.card) + '的使用者和目标？<br/>使用者:' + get.translation(trigger.player) + '<br/>目标:' + get.translation(trigger.target) + '').set('ai', function (card) {
                                    if (get.attitude(player, trigger.player) < 0 && get.attitude(player, trigger.target) > 0) return 10 - get.value(card);
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool && result.cards) {
                                    var source = trigger.player;
                                    var target = trigger.target;
                                    target.line(source);
                                    game.log(target, '对', source, '使用了', trigger.card);
                                    trigger.untrigger();
                                    trigger.player = target;
                                    trigger.target = source;
                                    trigger.trigger('useCardToBefore');
                                }
                            },
                            ai: {
                                order: 8,
                                threaten: 1.8,
                                respondShan: true,
                                respondmaxie: true,
                                result: {
                                    player: 1,
                                    target: -2,
                                },
                            },
                        },
                        masaki_deli: {
                            trigger: {
                                global: ['damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == event.player;
                            },
                            content() {
                                var num = trigger.num;
                                player.draw(num);
                            },
                        },
                        masaki_pojun: {
                            global: 'masaki_pojun_1',
                            audio: 'ext:MA天才麻将少女:2',
                            zhuSkill: true,
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (event.card.name != 'sha' || player.group != 'saki') return false;
                                        if (
                                            !game.hasPlayer(function (target) {
                                                return player != target && target.hasZhuSkill('masaki_pojun', player);
                                            })
                                        )
                                            return false;
                                        if (Array.isArray(event.cards)) for (const i of event.cards) {
                                            if (get.position(i, true) == 'o') {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = game.filterPlayer(function (target) {
                                            return player != target && target.hasZhuSkill('masaki_pojun', player);
                                        });
                                        player.chooseTarget(get.prompt('masaki_pojun'), '将' + get.translation(trigger.cards) + '交给' + get.translation(list) + (list.length > 1 ? '中的一人' : ''), function (card, player, target) {
                                            return player != target && target.hasZhuSkill('masaki_pojun', player);
                                        }).ai = function (target) {
                                            return get.attitude(_status.event.player, target);
                                        };
                                        ('step 1');
                                        if (!result.bool) event.finish();
                                        else {
                                            var zhu = result.targets[0];
                                            player.line(zhu, 'green');
                                            var list = [];
                                            if (Array.isArray(trigger.cards)) for (const i of trigger.cards) {
                                                if (get.position(i, true) == 'o') {
                                                    list.push(i);
                                                }
                                            }
                                            zhu.gain(list, 'gain2').giver = player;
                                            zhu.chooseBool()
                                                .set('ai', function () {
                                                    if (get.attitude(zhu, player) > 0) return true;
                                                    return false;
                                                })
                                                .set('prompt', '是否令' + get.translation(player) + '摸一张牌？');
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        masaki_qiaohu: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:MA天才麻将少女:2',
                            content() {
                                'step 0';
                                event.cards = get.cards(7);
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = '巧胡:获取点数相连的牌';
                                        } else {
                                            str = '巧胡';
                                        }
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards
                                );
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['巧胡', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                ('step 1');
                                var list = [];
                                for (const i of cards) list.add(i.number);
                                var next = player.chooseButton(list.length, true);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    for (let i = 0; i < ui.selected.buttons.length; i++) {
                                        if (ui.selected.buttons[i].link.number == button.link.number || (ui.selected.buttons[i].link.number - button.link.number != 1 && ui.selected.buttons[i].link.number - button.link.number != -1)) return false;
                                    }
                                    return true;
                                });
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 2');
                                if (result.bool && result.links) {
                                    event.cards2 = result.links;
                                } else {
                                    event.finish();
                                }
                                var time = 1000 - (get.utc() - event.time);
                                if (time > 0) {
                                }
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                var cards2 = event.cards2;
                                player.gain(cards2, 'log', 'gain2');
                            },
                            ai: {
                                basic: {
                                    order: 7,
                                },
                                result: {
                                    player: 1,
                                },
                                threaten: 1.2,
                            },
                        },
                        masaki_fengshen: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将♦️️牌当做火属性【杀】,♥️️牌当做【铁索连环】,♣️️牌当做雷属性【杀】,♠️️牌当做【酒】使用或打出',
                            viewAs(cards, player) {
                                var name = false;
                                var nature = null;
                                switch (cards[0]?.suit) {
                                    case 'club':
                                        name = 'sha';
                                        nature = 'thunder';
                                        break;
                                    case 'diamond':
                                        name = 'sha';
                                        nature = 'fire';
                                        break;
                                    case 'spade':
                                        name = 'jiu';
                                        break;
                                    case 'heart':
                                        name = 'tiesuo';
                                        break;
                                }
                                if (name) return { name: name, nature: nature };
                                return null;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    var max = 0;
                                    var name2;
                                    var list = ['sha', 'tao'];
                                    var map = { sha: 'diamond', sha: 'club', tao: 'heart' };
                                    for (let i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (
                                            player.countCards('hs', function (card) {
                                                return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                            }) > 0 &&
                                            player.getUseValue({ name: name, nature: name == 'sha' ? ['fire', 'thunder'] : null }) > 0
                                        ) {
                                            var temp = get.order({ name: name, nature: name == 'sha' ? ['fire', 'thunder'] : null });
                                            if (temp > max) {
                                                max = temp;
                                                name2 = map[name];
                                            }
                                        }
                                    }
                                    if (name2 == card.suit) return name2 == ('diamond' || 'club') ? 5 - get.value(card) : 20 - get.value(card);
                                    return 0;
                                }
                                return 1;
                            },
                            position: 'hs',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                var filter = event._backup.filterCard;
                                var name = card.suit;
                                if (name == 'club' && filter({ name: 'sha', cards: [card], nature: 'thunder' }, player, event)) return true;
                                if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
                                if (name == 'spade' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
                                if (name == 'heart' && filter({ name: 'tiesuo', cards: [card] }, player, event)) return true;
                                return false;
                            },
                            filter(event, player) {
                                var filter = event.filterCard;
                                if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hs', { suit: 'diamond' })) return true;
                                if (filter({ name: 'sha', nature: 'thunder' }, player, event) && player.countCards('hs', { suit: 'club' })) return true;
                                if (filter({ name: 'tiesuo' }, player, event) && player.countCards('hs', { suit: 'heart' })) return true;
                                if (filter({ name: 'jiu' }, player, event) && player.countCards('hs', { suit: 'spade' })) return true;
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'club' || 'diamond';
                                            break;
                                        case 'save':
                                            name = 'spade';
                                            break;
                                    }
                                    if (!player.countCards('hs', { suit: name })) return false;
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'jiu'];
                                        var map = { sha: ['diamond', 'club'], jiu: 'spade' };
                                        for (let i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (
                                                player.countCards('hs', function (card) {
                                                    return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                                }) > 0 &&
                                                player.getUseValue({ name: name, nature: name == 'sha' ? ['fire', 'thunder'] : null }) > 0
                                            ) {
                                                var temp = get.order({ name: name, nature: name == 'sha' ? ['fire', 'thunder'] : null });
                                                if (temp > max) max = temp;
                                            }
                                        }
                                        max /= 1.1;
                                        return max;
                                    }
                                    return 2;
                                },
                            },
                            hiddenCard(player, name) {
                                if (name == 'jiu') return player.countCards('hs', { suit: 'spade' }) > 0;
                                if (name == 'tiesuo') return player.countCards('hs', { suit: 'heart' }) > 0;
                            },
                        },
                        masaki_geyong: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            check() {
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('diamond', 'club', 'spade', 'heart', function (event, player) {
                                        if (player.countCards('h', 'sha') > 1 || player.hp < 2) return 'spade';
                                        return 'heart';
                                    })
                                    .set('prompt', '【歌咏】:选择一种花色作为你手牌的花色');
                                ('step 1');
                                if (result.control == 'diamond') {
                                    player.addTempSkill('masaki_geyong_diamond');
                                }
                                if (result.control == 'club') {
                                    player.addTempSkill('masaki_geyong_club');
                                }
                                if (result.control == 'spade') {
                                    player.addTempSkill('masaki_geyong_spade');
                                }
                                if (result.control == 'heart') {
                                    player.addTempSkill('masaki_geyong_heart');
                                }
                            },
                            ai: {
                                threaten: 0.5,
                            },
                            subSkill: {
                                diamond: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '【歌咏】:所有手牌均视为♦️️',
                                    },
                                    mod: {
                                        suit(card, suit) {
                                            return 'diamond';
                                        },
                                    },
                                },
                                club: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '【歌咏】:所有手牌均视为♣️️',
                                    },
                                    mod: {
                                        suit(card, suit) {
                                            return 'club';
                                        },
                                    },
                                },
                                spade: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '【歌咏】:所有手牌均视为♠️️',
                                    },
                                    mod: {
                                        suit(card, suit) {
                                            return 'spade';
                                        },
                                    },
                                },
                                heart: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '【歌咏】:所有手牌均视为♥️️',
                                    },
                                    mod: {
                                        suit(card, suit) {
                                            return 'heart';
                                        },
                                    },
                                },
                            },
                        },
                        masaki_jifeng: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.getStat('damage') >= 1;
                            },
                            frequent(event, player) {
                                return player.countCards('h') - player.maxHp <= 0;
                            },
                            check(event, player) {
                                return player.countCards('h') - player.maxHp <= 1;
                            },
                            prompt(event, player) {
                                if (player.getStat().damage + player.countCards('h') > player.maxHp) return '【集风】:是否摸' + player.getStat().damage + '张牌并弃置' + (player.getStat().damage + player.countCards('h') - player.maxHp) + '张牌？';
                                return '【集风】:是否摸' + player.getStat().damage + '张牌？';
                            },
                            content() {
                                'step 0';
                                var num = player.getStat().damage;
                                player.draw(num);
                                ('step 1');
                                var num1 = player.countCards('h') - player.maxHp;
                                if (num1 > 0) player.chooseToDiscard('h', true, num1);
                            },
                        },
                        masaki_ange: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            prompt(event, player) {
                                return '【暗阁】:是否令你的常规类型的手牌对你不可见？';
                            },
                            content() {
                                player.addTempSkill('masaki_ange_buff');
                            },
                            subSkill: {
                                buff: {
                                    charlotte: true,
                                    mod: {
                                        targetInRange(card) {
                                            return true;
                                        },
                                    },
                                    init(player) {
                                        if (!player.node.handcards1.cardMod) {
                                            player.node.handcards1.cardMod = {};
                                        }
                                        if (!player.node.handcards2.cardMod) {
                                            player.node.handcards2.cardMod = {};
                                        }
                                        var cardMod = function (card) {
                                            if (get.info(card).multitarget) return;
                                            if (get.type(card) == 'trick' || get.type(card) == 'delay' || get.type(card) == 'basic' || get.type(card) == 'equip') return ['暗阁', '常规类型的手牌对你不可见'];
                                        };
                                        player.node.handcards1.cardMod.ange = cardMod;
                                        player.node.handcards2.cardMod.ange = cardMod;
                                        player.node.handcards1.classList.add('ange');
                                        player.node.handcards2.classList.add('ange');
                                        if (!ui.css.ange) {
                                            ui.css.ange = lib.init.sheet('.handcards.ange>.card[data-card-type="trick"]:not(*[data-card-multitarget="1"])>*,.handcards.ange>.card[data-card-type="delay"]:not(*[data-card-multitarget="1"])>*,.handcards.ange>.card[data-card-type="basic"]:not(*[data-card-multitarget="1"])>*,.handcards.ange>.card[data-card-type="equip"]:not(*[data-card-multitarget="1"])>*,.handcards.nsanruo>.card[data-card-name="sha"]>*{visibility:hidden !important}');
                                        }
                                    },
                                    onremove(player) {
                                        player.node.handcards1.classList.remove('ange');
                                        player.node.handcards2.classList.remove('ange');
                                        delete player.node.handcards1.cardMod.ange;
                                        delete player.node.handcards2.cardMod.ange;
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) == 'equip';
                                    },
                                    content() {
                                        player.draw('nodelay');
                                    },
                                    ai: {
                                        neg: true,
                                    },
                                },
                            },
                        },
                        masaki_juedou: {
                            usable: 1,
                            mod: {
                                cardname(card, player) {
                                    if (card.name == 'wugu' || card.name == 'taoyuan' || card.name == 'wanjian' || card.name == 'nanman') return 'juedou';
                                },
                            },
                            prompt(event, player) {
                                if (event.player == player) return '〖决斗〗:是否令' + get.translation(event.target) + '和你以外的角色移出游戏？';
                                return '〖决斗〗:是否令' + get.translation(event.player) + '和你以外的角色移出游戏？';
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'juedou')) return false;
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
                            },
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    if (current != trigger.player && current != trigger.target) {
                                        player.markAuto('masaki_juedou_1', [current]);
                                        current.out(1);
                                    }
                                });
                                ('step 1');
                                player.draw(2);
                                player.addTempSkill('masaki_juedou_1');
                            },
                            subSkill: {
                                1: {
                                    charlotte: true,
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    onremove(player, skill) {
                                        player.storage[skill] = [];
                                    },
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    content() {
                                        for (let i = 0; i < player.getStorage('masaki_juedou_1').length; i++) {
                                            player.getStorage('masaki_juedou_1')[i].in(true);
                                        }
                                    },
                                },
                            },
                        },
                        masaki_qunchao: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 3],
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he');
                            },
                            content() {
                                'step 0';
                                target
                                    .chooseToUse(
                                        function (card, player, event) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        '挑衅:对' + get.translation(player) + '使用一张杀,或令其弃置你的一张牌'
                                    )
                                    .set('targetRequired', true)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    })
                                    .set('sourcex', player);
                                ('step 1');
                                if (result.bool == false && target.countCards('he') > 0) {
                                    player.discardPlayerCard(target, 'he', true);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 4,
                                expose: 0.2,
                                result: {
                                    target: -1,
                                    player(player, target) {
                                        if (!target.canUse('sha', player)) return 0;
                                        if (target.countCards('h') == 0) return 0;
                                        if (target.countCards('h') == 1) return -0.1;
                                        if (player.hp <= 2) return -2;
                                        if (player.countCards('h', 'shan') == 0) return -1;
                                        return -0.5;
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                        masaki_liancai: {
                            init(player) {
                                player.storage.masaki_liancai = 0;
                            },
                            trigger: {
                                global: 'phaseEnd',
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event.name === 'damage') return true;
                                return player.storage.masaki_liancai > 0;
                            },
                            forced: true,
                            content() {
                                if (trigger.name === 'damage') {
                                    player.storage.masaki_liancai += trigger.num;
                                } else {
                                    player.draw(player.storage.masaki_liancai);
                                    player.storage.masaki_liancai = 0;
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (_status.currentPhase !== target) return [1, 0];
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, 0];
                                        if (get.tag(card, 'damage')) return [1, 0.2];
                                    },
                                },
                            },
                        },
                        masaki_yuzhi: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                var num = game.countPlayer() * 2;
                                var cards = get.cards(num);
                                game.cardsGotoOrdering(cards);
                                var next = player.chooseToMove();
                                next.set('list', [['牌堆顶', cards], ['牌堆底']]);
                                next.set('prompt', '【预知】:点击将牌移动到牌堆顶或牌堆底');
                                next.processAI = function (list) {
                                    var cards = list[0][1],
                                        player = _status.event.player;
                                    const top = [], bottom = cards;
                                    for (const i of player.getCards('j')) {
                                        const judge = get.judge(i);
                                        bottom.sort((a, b) => (judge(b) - judge(a))); //价值高的牌放前面
                                        if (bottom.length) {
                                            top.push(bottom.shift());
                                        }
                                    }
                                    bottom.sort((a, b) => (get.value(b) - get.value(a))); //把价值高的牌放前面
                                    while (bottom.length) {
                                        top.push(bottom.shift());
                                    }
                                    return [top, bottom];
                                };
                                ('step 1');
                                var top = result.moved[0];
                                var bottom = result.moved[1];
                                top.reverse();
                                for (let i = 0; i < top.length; i++) {
                                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                }
                                for (let i = 0; i < bottom.length; i++) {
                                    ui.cardPile.appendChild(bottom[i]);
                                }
                                player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                game.updateRoundNumber();
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        masaki_bingruo: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                player.draw(1 + player.getDamagedHp());
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        masaki_chengneng: {
                            audio: 'ext:MA天才麻将少女:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', 'shan') > 0;
                            },
                            filterCard: {
                                name: 'shan',
                            },
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                                game.log(player, '将', cards, '置入了弃牌堆');
                            },
                            discard: false,
                            loseTo: 'discardPile',
                            visible: true,
                            delay: 0.5,
                            content() {
                                player.draw();
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        masaki_jigong: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                player.chooseToDiscard(true, 'he').set('ai', function (cardx) {
                                    var player = _status.event.player;
                                    var num = 0;
                                    var hs = player.getCards('h');
                                    var muniu = player.getEquip('muniu');
                                    if (muniu && muniu.cards) hs = hs.concat(muniu.cards);
                                    if (get.type(cardx) == 'basic') {
                                        var shas = hs.filter(function (card) {
                                            return card != cardx && card.name == 'sha' && player.hasValueTarget(card, false);
                                        });
                                        var numx = player.countCards('h', function (card) {
                                            return get.type2(card, player) == 'trick';
                                        });
                                        num += Math.min(numx, Math.max(0, shas.length - player.getCardUsable('sha'))) * 0.65;
                                        num +=
                                            Math.min(
                                                player.getCardUsable('sha') + numx,
                                                shas.filter(function (card) {
                                                    return (
                                                        game.countPlayer(function (current) {
                                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                        }) > 1
                                                    );
                                                }).length
                                            ) * 1.1;
                                        var taos = Math.min(
                                            player.maxHp - player.hp,
                                            hs.filter(function (card) {
                                                return cardx != card && card.name == 'tao';
                                            }).length
                                        );
                                        num += taos * player.getDamagedHp() * 1.2;
                                    } else if (get.type2(cardx) == 'trick') {
                                        var numx = Math.sqrt(
                                            Math.min(
                                                5,
                                                player.countCards('h', function (card) {
                                                    return get.type(card, player) == 'basic';
                                                })
                                            )
                                        );
                                        num +=
                                            hs.filter(function (card) {
                                                return card != cardx && get.type2(card) == 'trick' && player.hasValueTarget(card);
                                            }).length * 0.65;
                                    } else num = 4;
                                    return num * 1.5 + get.value(cardx);
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.addTempSkill('masaki_jigong_buff');
                                    var card = result.cards[0];
                                    player.markAuto('masaki_jigong_buff', [get.type2(card)]);
                                }
                            },
                            subSkill: {
                                buff: {
                                    charlotte: true,
                                    intro: {
                                        content: '本回合无法使用$牌',
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    onremove(player, skill) {
                                        player.storage[skill] = [];
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) == 'equip';
                                    },
                                    prompt: '是否发动【急攻】摸一张牌？',
                                    content() {
                                        player.draw('nodelay');
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
                                            if (player.getStorage('masaki_jigong_buff').includes(get.type2(card))) return false;
                                        },
                                        targetInRange(card, player, target, now) {
                                            var type = get.type(card);
                                            if (type == 'trick' || type == 'delay') return true;
                                        },
                                        cardUsable(card, player, num) {
                                            var type = get.type(card);
                                            if (type == 'basic') return Infinity;
                                        },
                                    },
                                },
                            },
                        },
                        masaki_shouju: {
                            mod: {
                                cardname(card, player) {
                                    if (_status.currentPhase == player) {
                                        if (card.name == 'shan') return 'sha';
                                    } else if (_status.currentPhase != player) {
                                        if (card.name == 'sha') return 'shan';
                                    }
                                },
                            },
                        },
                        masaki_huanzhuang: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                if (!event.player.hasSex('male')) return false;
                                return (
                                    event.player.getStockSkills('仲村由理', '天下第一').filter(function (skill) {
                                        var info = get.info(skill);
                                        return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
                                    }).length
                                );
                            },
                            logTarget: 'player',
                            limited: true,
                            content() {
                                'step 0';
                                player.awakenSkill('masaki_huanzhuang');
                                var list = trigger.player.getStockSkills('仲村由理', '天下第一').filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
                                });
                                if (list.length == 1) event._result = { control: list[0] };
                                else
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '选择获得一个技能')
                                        .set('forceDie', true)
                                        .set('ai', function () {
                                            return list.randomGet();
                                        });
                                ('step 1');
                                player.addSkillLog(result.control);
                                game.broadcastAll(function (skill) {
                                    var list = [skill];
                                    game.expandSkills(list);
                                    for (const i of list) {
                                        var info = lib.skill[i];
                                        if (!info) continue;
                                    }
                                }, result.control);
                                player.draw(Math.min(5, trigger.player.maxHp));
                                ('step 2');
                                if (player.maxHp >= 3) {
                                    player.loseMaxHp();
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        masaki_juesheng: {
                            global: ['masaki_juesheng_1'],
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'ext:MA天才麻将少女:2',
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'juedou';
                            },
                            content() {
                                if (trigger.name == 'useCard') trigger.directHit.addArray(game.players);
                                else trigger.directHit.add(player);
                            },
                            mod: {
                                cardname(card, player) {
                                    var name = card.name;
                                    var info = lib.card[name];
                                    if (info && info.type == 'delay' && get.position(card) == 'h') {
                                        return 'juedou';
                                    }
                                },
                                targetEnabled(card, player, target) {
                                    if (player != target && get.type(card) == 'delay') return false;
                                },
                            },
                        },
                        masaki_xipu: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                var num = player.getDamagedHp();
                                event.cards = game.cardsGotoOrdering(get.cards(num)).cards;
                                if (_status.connectMode)
                                    game.broadcastAll(function () {
                                        _status.noclearcountdown = true;
                                    });
                                event.given_map = {};
                                ('step 1');
                                if (event.cards.length > 1) {
                                    player.chooseCardButton('〖析谱〗:请选择要分配的牌', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                                        if (ui.selected.buttons.length == 0) return 1;
                                        return 0;
                                    });
                                } else if (event.cards.length == 1) {
                                    event._result = { links: event.cards.slice(0), bool: true };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    event.cards.removeArray(result.links);
                                    event.togive = result.links.slice(0);
                                    player
                                        .chooseTarget('选择一名角色获得' + get.translation(result.links), true)
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
                                        .set('enemy', get.value(event.togive[0], player, 'raw') < 0);
                                }
                                ('step 3');
                                if (result.targets.length) {
                                    var id = result.targets[0].playerid,
                                        map = event.given_map;
                                    if (!map[id]) map[id] = [];
                                    map[id].addArray(event.togive);
                                }
                                if (cards.length) event.goto(1);
                                ('step 4');
                                if (_status.connectMode) {
                                    game.broadcastAll(function () {
                                        delete _status.noclearcountdown;
                                        game.stopCountChoose();
                                    });
                                }
                                var list = [];
                                for (var i in event.given_map) {
                                    var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                                    player.line(source, 'green');
                                    list.push([source, event.given_map[i]]);
                                }
                                game.loseAsync({
                                    gain_list: list,
                                    giver: player,
                                    animate: 'draw',
                                }).setContent('gaincardMultiple');
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
                        masaki_kanchapo: {
                            audio: 'ext:MA天才麻将少女:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h');
                            },
                            content() {
                                'step 0';
                                var cards = target.getCards('h');
                                player.chooseButton(2, ['勘破', cards, [['弃置此牌', '置于牌堆顶'], 'tdnodes']]).set('filterButton', function (button) {
                                    var type = typeof button.link;
                                    if (ui.selected.buttons.length && type == typeof ui.selected.buttons[0].link) return false;
                                    return get.type(button.link) != 'basic';
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    if (typeof result.links[0] != 'string') result.links.reverse();
                                    var card = result.links[1],
                                        choice = result.links[0];
                                    if (choice == '弃置此牌') target.discard(card);
                                    else {
                                        player.showCards(card, get.translation(player) + '对' + get.translation(target) + '发动了【勘破】');
                                        target.lose(card, ui.cardPile, 'visible', 'insert');
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.5,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h');
                                    },
                                },
                                order: 10,
                                expose: 0.4,
                            },
                        },
                        masaki_duice: {
                            audio: 'ext:MA天才麻将少女:2',
                            juexingji: true,
                            derivation: ['masaki_kanchapo'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.masaki_duice) return false;
                                return player.getAllHistory('damage').length >= 3;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('masaki_duice');
                                player.chooseDrawRecover(2, true);
                                ('step 1');
                                player.storage.masaki_duice = true;
                                if (player.hp > player.maxHp) player.hp = player.maxHp;
                                player.update();
                                player.addSkill('masaki_kanchapo');
                            },
                        },
                        masaki_wujitian: {
                            mod: {
                                maxHandcardBase(player, num) {
                                    return (num += player.getDamagedHp());
                                },
                            },
                            nobracket: true,
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.targets.length == 1;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        masaki_jiban: {
                            forced: true,
                            zhuSkill: true,
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hasZhuSkill('masaki_jiban')) {
                                        return (
                                            num +
                                            game.countPlayer(function (current) {
                                                if (current.group == 'saki') return 1;
                                            })
                                        );
                                    }
                                    return num;
                                },
                            },
                        },
                        masaki_xianrenzhilu: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            frequent(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },//QQQ
                            prompt2: '将一张牌重铸为字数相同的牌',
                            position: 'he',
                            content() {
                                var card = get.cardPile2(function (card) {
                                    return get.cardNameLength(card) == get.cardNameLength(cards[0]);
                                });
                                if (!card) {
                                    player.chat('我牌呢？');
                                    game.log('牌堆里面已经没有字数相同的牌了!');
                                    event.finish();
                                    return;
                                }
                                player.gain(card);
                                game.log(player, '从牌堆中获得了与', cards[0], '字数相同的牌');
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        masaki_baofa: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return player.isPhaseUsing() && event.card.name == 'sha';
                            },
                            preHidden: true,
                            prompt2(event, player) {
                                return '是否令' + get.translation(event.card) + '伤害+' + player.countCards('h', 'sha') + '点,本阶段不能再使用牌';
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0 && player.countCards('h', 'sha') > 0;
                            },
                            content() {
                                var num = player.countCards('h', 'sha');
                                trigger.parent.baseDamage += num;
                                player.addTempSkill('masaki_baofa_debuff', 'phaseUseAfter');
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha' || !ui.cardPile.firstChild) return false;
                                },
                            },
                            subSkill: {
                                debuff: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '不能使用手牌',
                                    },
                                    mod: {
                                        cardEnabled(card) {
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        masaki_xuli: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.color(card) == 'black') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.color(card) == 'black') return false;
                                },
                                cardname(card, player) {
                                    if (get.color(card) == 'black' && player.countCards('h', { color: 'black' }) > 2) return 'sha';
                                },
                            },
                        },
                        saki_yizhong: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            audio: 'ext:MA天才麻将少女:2',
                            filter(event, player) {
                                return (
                                    (_status.connectMode || player.countCards('h') > 0) &&
                                    !player.getExpansions('saki_yizhong').length &&
                                    player.countCards('h', function (card) {
                                        return get.tag(card, 'damage') > 0;
                                    })
                                );
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard(
                                        [
                                            1,
                                            Math.max(
                                                1,
                                                player.countCards('h', function (card) {
                                                    return get.tag(card, 'damage') > 0;
                                                })
                                            ),
                                        ],
                                        get.prompt('saki_yizhong'),
                                        get.tag(card, 'damage')
                                    )
                                    .set('ai', function () {
                                        return 1;
                                    });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('saki_yizhong');
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (_status.currentPhase != player) return;
                                        if (card.name == 'sha' && !player.needsToDiscard() && !player.getExpansions('saki_yizhong').length && target.hp > 1) {
                                            return 'zeroplayertarget';
                                        }
                                    },
                                },
                                threaten: 1.4,
                            },
                            group: 'saki_yizhong_2',
                            subSkill: {
                                2: {
                                    trigger: {
                                        global: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        return get.tag(event.card, 'damage') && player.getExpansions('saki_yizhong').length;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.target) > 0;
                                    },
                                    forced: true,
                                    logTarget: 'target',
                                    content() {
                                        'step 0';
                                        player.chooseCardButton(get.translation('saki_yizhong'), '是否对' + get.translation(trigger.target) + '发动〖毅重〗？', player.getExpansions('saki_yizhong'), false).set('ai', function (card) {
                                            if (get.attitude(player, trigger.target) > 0) return 8 - get.value(card);
                                            return 0;
                                        });
                                        ('step 1');
                                        if (result.links?.length) {
                                            player.loseToDiscardpile(result.links);
                                            player.draw(2);
                                            if (trigger.target != player) {
                                                player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
                                                    if (get.position(card) == 'e') return -1;
                                                    if (card.name == 'shan') return 1;
                                                    return 0;
                                                });
                                            } else {
                                                event.finish();
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        player.give(result.cards, trigger.target, 'give');
                                    },
                                    ai: {
                                        threaten: 1.1,
                                    },
                                },
                            },
                        },
                        saki_menjiang: {
                            shaRelated: true,
                            group: ['saki_menjiang_sha', 'saki_menjiang_shan'],
                            subSkill: {
                                shan: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard(card, player) {
                                        return get.type(card) != 'basic';
                                    },
                                    filter(event, player) {
                                        return player.hasCard(function (card) {
                                            return get.type(card) != 'basic';
                                        }, 'hes');
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    position: 'he',
                                    prompt: '将一张非基本牌当闪使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (
                                                !player.hasCard(function (card) {
                                                    return get.type(card) != 'basic';
                                                }, 'hes')
                                            )
                                                return false;
                                        },
                                        order: 3,
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [7, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                sha: {
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard(card, player) {
                                        return get.type(card) != 'basic';
                                    },
                                    position: 'hes',
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        if (get.zhu(player, 'shouyue')) {
                                            if (!player.countCards('hes')) return false;
                                        }
                                        return player.hasCard(function (card) {
                                            return get.type(card) != 'basic';
                                        }, 'hes');
                                    },
                                    prompt: '将一张非基本牌当杀使用或打出',
                                    check(card) {
                                        var val = get.value(card);
                                        if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                        return 5 - val;
                                    },
                                    ai: {
                                        skillTagFilter(player) {
                                            return player.hasCard(function (card) {
                                                return get.type(card) != 'basic';
                                            }, 'hes');
                                        },
                                        respondSha: true,
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
                                            if (game.hasNature(item, 'linked')) {
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
                            },
                        },
                        saki_lishou: {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (event.card.isCard) return false;
                                return event.cards && event.cards.length;
                            },
                            content() {
                                'step 0';
                                player.storage.sakired = false;
                                player.storage.sakiblack = false;
                                if (Array.isArray(trigger.cards)) for (const i of trigger.cards) {
                                    if (get.color(i) == 'red') {
                                        player.storage.sakired = true;
                                    } else if (get.color(i) == 'black') {
                                        player.storage.sakiblack = true;
                                    }
                                }
                                ('step 1');
                                if (player.storage.sakired == true) {
                                    player.draw();
                                }
                                if (player.storage.sakiblack == true) {
                                    player
                                        .chooseTarget(get.prompt('saki_lishou'), '弃置一名其他角色的一张牌', function (card, player, target) {
                                            return player != target && target.countCards('he') > 0;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        })
                                        .setHiddenSkill(event.name);
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    player.discardPlayerCard(event.target, true);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        masaki_guozao: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    var str = player.storage.masaki_guozao ? '当你使用一张牌后,你可以摸一张牌,弃置两张牌' : '当你使用一张牌后,你可以摸两张牌,弃置毅张牌';
                                    return str;
                                },
                            },
                            prompt(event, player) {
                                if (player.storage.masaki_guozao != true) {
                                    return '【聒噪】:是否摸两张牌并弃一张牌？';
                                } else if (player.storage.masaki_guozao == true) {
                                    return '【聒噪】:是否摸一张牌并弃两张牌？';
                                }
                            },
                            trigger: {
                                player: 'useCardAfter',
                            },
                            content() {
                                'step 0';
                                if (player.storage.masaki_guozao != true) {
                                    player.draw(2);
                                    player.chooseToDiscard('he', true);
                                    player.changeZhuanhuanji('masaki_guozao');
                                } else {
                                    player.draw();
                                    player.chooseToDiscard('he', 2, true);
                                    player.changeZhuanhuanji('masaki_guozao');
                                }
                            },
                        },
                        saki_jiang: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            group: ['saki_jiang_draw'],
                            filter(event, player) {
                                if (!(get.color(event.card) == 'red')) return false;
                                return true;
                            },
                            marktext: '激昂',
                            intro: {
                                name: '激昂',
                                name2: '激昂',
                                content: 'mark',
                                markcount(storage, player) {
                                    return (storage || 0).toString().slice(-2);
                                },
                            },
                            content() {
                                event.num = player.countMark('saki_jiang');
                                player.addMark('saki_jiang', trigger.card.number);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.color(card) == 'red') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if (get.color(card) == 'red') return [1, 1];
                                    },
                                },
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        global: 'phaseUseBegin',
                                    },
                                    filter(event, player) {
                                        return player.countMark('saki_jiang') > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        drawnum = player.countMark('saki_jiang');
                                        player.removeMark('saki_jiang', player.countMark('saki_jiang'));
                                        ('step 1');
                                        var pile = Array.from(ui.cardPile.childNodes);
                                        if (pile.length < 3) return;
                                        var bool = false,
                                            max = Math.pow(2, Math.min(100, pile.length)),
                                            index;
                                        for (let i = 0; i < max; i++) {
                                            var num = 0;
                                            index = i.toString(2);
                                            while (index.length < pile.length) {
                                                index = '0' + index;
                                            }
                                            for (var k = 0; k < index.length; k++) {
                                                if (index[k] == '1') num += pile[k].number;
                                                if (num > drawnum) break;
                                            }
                                            if (num == drawnum) {
                                                bool = true;
                                                break;
                                            }
                                        }
                                        if (bool) {
                                            var cards = [];
                                            for (var k = 0; k < index.length; k++) {
                                                if (index[k] == '1') cards.push(pile[k]);
                                            }
                                            player.gain(cards, 'gain2');
                                        }
                                    },
                                    ai: {
                                        combo: 'saki_jiang',
                                    },
                                },
                            },
                        },
                        saki_jiejin: {
                            audio: 'ext:MA天才麻将少女/audio:2',
                            global: 'saki_jiejin_2',
                            zhuSkill: true,
                            subSkill: {
                                2: {
                                    enable: 'phaseUse',
                                    discard: false,
                                    audio: 'fg_mowang',
                                    lose: false,
                                    delay: false,
                                    line: true,
                                    forced: true,
                                    clearTime: true,
                                    prepare(cards, player, targets) {
                                    },
                                    prompt() {
                                        var player = _status.event.player;
                                        var list = game.filterPlayer(function (target) {
                                            return target != player && target.hasZhuSkill('saki_jiejin', player);
                                        });
                                        var str = '将一张的牌交给' + get.translation(list);
                                        if (list.length > 1) str += '中的一人';
                                        return str;
                                    },
                                    filter(event, player) {
                                        if (player.group != 'saki') return false;
                                        if (player.countCards('h', lib.skill.saki_jiejin_2.filterCard) == 0) return false;
                                        return game.hasPlayer(function (target) {
                                            return target != player && target.hasZhuSkill('saki_jiejin', player) && !target.hasSkill('saki_jiejin_3');
                                        });
                                    },
                                    filterCard(card, player) {
                                        return true;
                                    },
                                    visible: true,
                                    filterTarget(card, player, target) {
                                        return target != player && target.hasZhuSkill('saki_jiejin', player) && !target.hasSkill('saki_jiejin_3');
                                    },
                                    content() {
                                        'step 0';
                                        target.gain(cards, player, 'giveAuto');
                                        target.addTempSkill('saki_jiejin_3', 'phaseUseEnd');
                                        ('step 1');
                                        target.chooseCard('是否交给' + get.translation(event.player) + '一张牌？', 'he').set('ai', function (card) {
                                            if (get.position(card) != 'h') return 0;
                                            if (_status.event.shan && card.name == 'shan') {
                                                return 11;
                                            }
                                            if (_status.event.goon) {
                                                return 10 - get.value(card);
                                            }
                                            return -get.value(card, _status.event.player, 'raw');
                                        });
                                        if (get.attitude(player, event.target) > 1 && player.countCards('h', 'shan') > 1 && player.countCards('h') > event.target.countCards('h')) {
                                            next.set('shan', true);
                                        }
                                        if (get.attitude(player, event.target) > 0 && player.needsToDiscard()) {
                                            next.set('goon', true);
                                        }
                                        ('step 2');
                                        if (result.cards?.length) {
                                            target.give(result.cards, player);
                                        }
                                    },
                                    ai: {
                                        expose: 0.3,
                                        order: 1,
                                        result: {
                                            target: 5,
                                        },
                                    },
                                },
                                3: {
                                },
                            },
                        },
                        masaki_rumeng: {
                            enable: 'phaseUse',
                            audio: 'ext:MA天才麻将少女:2',
                            usable: 1,
                            filter(event, player) {
                                if (player.isTurnedOver()) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.turnOver();
                                ('step 1');
                                player.draw(3);
                            },
                            ai: {
                                basic: {
                                    order: 8,
                                },
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                                threaten: 1.8,
                            },
                        },
                        masaki_jiangshen: {
                            derivation: ['xinjuejing', 'relonghun', 'nzry_junlve', 'nzry_cuike', 'meihun', 'huoxin', 'drlt_poxi', 'drlt_jieying'],
                            trigger: {
                                player: 'turnOverAfter',
                            },
                            filter(event, player) {
                                return player.isTurnedOver();
                            },
                            group: ['masaki_jiangshen_2', 'masaki_jiangshen_3'],
                            forced: true,
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.addTempSkill('xinjuejing', { player: 'turnOverEnd' }) && player.addTempSkill('relonghun', { player: 'turnOverEnd' });
                                        break;
                                    case 'diamond':
                                        player.addTempSkill('nzry_junlve', { player: 'turnOverEnd' }) && player.addTempSkill('nzry_cuike', { player: 'turnOverEnd' });
                                        break;
                                    case 'club':
                                        player.addTempSkill('meihun', { player: 'turnOverEnd' }) && player.addTempSkill('huoxin', { player: 'turnOverEnd' });
                                        break;
                                    case 'spade':
                                        player.addTempSkill('drlt_poxi', { player: 'turnOverEnd' }) && player.addTempSkill('drlt_jieying', { player: 'turnOverEnd' }) && player.addMark('drlt_jieying_mark', 1);
                                        break;
                                }
                                ('step 2');
                                player.addTempSkill('masaki_jiangshen_1', { player: 'dying' });
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        return player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '改为摸1张牌并执行一个额外的出牌阶段');
                                        player.draw(1);
                                        game.updateRoundNumber();
                                        var next = player.phaseUse();
                                        event.next.remove(next);
                                        trigger.next.push(next);
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: ['dyingAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        'step 0';
                                        player.link(false);
                                        ('step 1');
                                        player.turnOver(false);
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'drawBegin',
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        return player.isLinked() || player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        masaki_gongzhu: {
                            group: 'masaki_gongzhu_2',
                            zhuSkill: true,
                            subSkill: {
                                2: {
                                    trigger: {
                                        global: 'damageSource',
                                    },
                                    filter(event, player) {
                                        if (player == event.source || !event.source || event.source.group != 'saki') return false;
                                        return player.hasZhuSkill('masaki_gongzhu', event.source);
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        trigger.source.chooseBool('是否对' + get.translation(player) + '发动【公主】？').set('choice', get.attitude(trigger.source, player) > 0);
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.source.line(player, 'green');
                                            trigger.source.judge(function (card) {
                                                if (card.suit == 'heart') return 4;
                                                return 0;
                                            }).judge2 = function (result) {
                                                return result.bool ? true : false;
                                            };
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.suit == 'heart') {
                                            player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        masaki_baxie: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                target.draw();
                                ('step 1');
                                if (target.countCards('he')) {
                                    target.chooseToDiscard('he', true).set('ai', function (card) {
                                        var val = 8 - get.value(card);
                                        if (card.suit === 'spade') val += 10;
                                        return val;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    if (result.cards[0].suit === 'spade') {
                                        game.asyncDraw([player, target].sort(lib.sort.seat));
                                        target.turnOver(false);
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: 0.5,
                                    player: 1,
                                },
                            },
                        },
                        masaki_qumo: {
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' || event.card.name == 'juedou';
                            },
                            init(player) {
                                player.storage.masaki_qumo_damage = [];
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                if (trigger.target.countCards('j')) {
                                    player
                                        .chooseControl(1, function (event, player) {
                                            if (get.attitude(player, trigger.target) < 2) return 1;
                                            return 0;
                                        })
                                        .set('choiceList', ['令该角色弃置判定区里的牌', '此牌造成伤害后,你摸一张牌']);
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                if (result.index === 0) {
                                    trigger.target.discard(trigger.target.getCards('j'));
                                    event.finish();
                                }
                                ('step 2');
                                player.storage.masaki_qumo_damage.add(trigger.card);
                            },
                            group: ['masaki_qumo_damage', 'masaki_qumo_summer'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        global: 'damageBegin1',
                                    },
                                    audio: 2,
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && player.storage.masaki_qumo_damage.includes(event.card);
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                summer: {
                                    trigger: {
                                        player: ['useCardAfter'],
                                    },
                                    silent: true,
                                    content() {
                                        player.storage.masaki_qumo_damage.remove(event.card);
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        masaki_shendao1: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('hes', { color: 'red' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('masaki_shendao1'), 'hes', function (card) {
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
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result;
                                        } else {
                                            return -result;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.cards?.length) {
                                    player.respond(result.cards, 'highlight', 'masaki_shendao1', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        masaki_guozhuang: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (event.name != 'useCard' && event.player == event.target) return false;
                                return get.tag(event.card, 'damage');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (player.countCards('h') > 1) {
                                    player.chooseToDiscard(true, 'he');
                                }
                            },
                        },
                        masaki_shendao2: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('hes', { color: 'black' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('masaki_shendao2'), 'hes', function (card) {
                                        if (get.color(card) != 'black') return false;
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
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result;
                                        } else {
                                            return -result;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.cards?.length) {
                                    player.respond(result.cards, 'highlight', 'masaki_shendao2', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        masaki_xinshili: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return !event.cards || !event.cards.length || (event.card && event.cards.length && !event.card.isCard);
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                game.log(player, '防止了即将受到的伤害');
                            },
                        },
                        masaki_guimen: {
                            trigger: {
                                global: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            group: ['masaki_guimen_gain'],
                            forced: true,
                            marktext: '门',
                            filter(event, player) {
                                if (!event.card.suit || event.card.name == 'shan') return false;
                                if (get.type(event.card) != 'equip' && player != event.target) return false;
                                var num = player.getExpansions('masaki_guimen').length;
                                for (let i = 0; i < num; i++) {
                                    if (event.card.suit == get.suit(player.getExpansions('masaki_guimen')[i])) return false;
                                }
                                return true;
                            },
                            content() {
                                var card1 = trigger.card;
                                var po = get.cardPile(function (card) {
                                    return card.suit == card1.suit && card.name == 'sha';
                                });
                                if (po) {
                                    player.addToExpansion(po, 'gain2').gaintag.add('masaki_guimen');
                                }
                            },
                            subSkill: {
                                gain: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin'],
                                    },
                                    prompt(event, player) {
                                        return '〖鬼门〗:是否获得武将牌上所有的『门』？';
                                    },
                                    filter(event, player) {
                                        if (player.getExpansions('masaki_guimen').length <= 0) return false;
                                        var suits2 = ['club', 'spade', 'heart', 'diamond'];
                                        var expansions = player.getExpansions('masaki_guimen');
                                        for (let i = 0; i < expansions.length; i++) {
                                            suits2.remove(expansions[i].suit);
                                        }
                                        if (suits2.length) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        player.gain(player.getExpansions('masaki_guimen'), 'gain2', 'fromStorage');
                                    },
                                },
                            },
                        },
                        masaki_sixi: {
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.card.suit) return false;
                                return true;
                            },
                            content() {
                                player.addTempSkill('masaki_sixi_2');
                                var suit = trigger.card.suit;
                                player.markAuto('masaki_sixi_2', [suit]);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.suit && !player.getStorage('masaki_sixi_2').includes(card.suit)) return Infinity;
                                },
                                targetInRange(card, player) {
                                    if (card.suit && !player.getStorage('masaki_sixi_2').includes(card.suit)) return true;
                                },
                            },
                            subSkill: {
                                2: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '本回合已使用过$花色的牌',
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = 0;
                                    },
                                },
                            },
                        },
                        masaki_tianni: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) > 0;
                            },
                            prompt(event, player) {
                                return '『天倪』:是否代替' + get.translation(event.target) + '成为' + get.translation(event.card) + '的目标？';
                            },
                            filter(event, player) {
                                if (!event.player.canUse(event.card, player, false)) return false;
                                if (player == event.target || player == event.player || event.target == event.player) return false;
                                if (event.targets.length > 1) return false;
                                if (!event.target) return false;
                                if (event.target.hp > player.hp) return false;
                                var card = event.card;
                                if (card.name == 'sha' || card.name == 'juedou') return true;
                                if (get.type(card) == 'delay') return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.parent.targets.remove(trigger.target);
                                trigger.parent.triggeredTargets2.remove(trigger.target);
                                trigger.parent.targets.push(player);
                                trigger.untrigger();
                                trigger.player.line(player);
                                ('step 1');
                                var card = get.cardPile2(function (card) {
                                    return card.suit == 'spade';
                                });
                                if (!card) {
                                    player.chat('我♠️️️呢？!');
                                    game.log('但是牌堆里面已经没有花色为♠️️的牌了!');
                                    event.finish();
                                    return;
                                }
                                player.gain(card, 'gain2');
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'sha') return 1.3;
                                    },
                                },
                            },
                        },
                        masaki_ranshou: {
                            audio: 'ext:MA天才麻将少女:2',
                            audioname: ['sp_lvmeng'],
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h', { color: 'black' }) == player.countCards('h', { color: 'red' })) return false;
                                return !event.numFixed;
                            },
                            async content(event, trigger, player) {
                                'step 0';
                                if (player.countCards('h', { color: 'black' }) > player.countCards('h', { color: 'red' })) {
                                    var card = get.cardPile2(function (card) {
                                        return get.color(card) == 'black';
                                    });
                                } else if (player.countCards('h', { color: 'black' }) < player.countCards('h', { color: 'red' })) {
                                    var card = get.cardPile2(function (card) {
                                        return get.color(card) == 'red';
                                    });
                                }
                                if (!card) {
                                    player.chat('无牌可得了吗');
                                    game.log('但是牌堆里面已经没有对应颜色的牌了!');
                                    event.finish();
                                    return;
                                }
                                player.gain(card, 'gain2');
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        masaki_qingse: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            frequent(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            prompt2: '你可以弃一张牌并从牌堆中获得一张颜色不同的牌',
                            check(event, player) {
                                return player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0);
                            },
                            filter(event, player) {
                                return event.player == player.previous;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('he', get.prompt('masaki_qingse'), '选择弃置一张牌并从牌堆中获得一张颜色不同的牌', false)
                                    .set('ai', function (card) {
                                        return 7 - get.value(card);
                                    })
                                    .set('autodelay', 0.5);
                                ('step 1');
                                if (result.cards?.length) {
                                    var card1 = result.cards[0];
                                    var card = get.cardPile2(function (card) {
                                        return get.color(card) != get.color(card1);
                                    });
                                    if (!card) {
                                        player.chat('无牌可得了吗');
                                        game.log('但是牌堆里面已经没有对应颜色的牌了!');
                                        event.finish();
                                        return;
                                    }
                                    player.gain(card, 'gain2');
                                }
                            },
                        },
                        masaki_mituzhijia: {
                            audio: 'ext:MA天才麻将少女:2',
                            nobracket: true,
                            mod: {
                                aiOrder(player, card, num) {
                                    if (num <= 0 || get.itemtype(card) !== 'card' || get.type(card) !== 'equip') return num;
                                    let eq = player.getEquip(get.subtype(card));
                                    if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp)) return 0;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                if (typeof event != 'string') event = event.parent.name;
                                var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            },
                            selectCard: [1, Infinity],
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    get.position(card) == 'h' &&
                                    !player.countCards('h', 'du') &&
                                    (player.hp > 2 ||
                                        !player.countCards('h', function (card) {
                                            return get.value(card) >= 8;
                                        }))
                                ) {
                                    return 1;
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                num1 = 0;
                                num2 = 0;
                                num3 = 0;
                                if (Array.isArray(event.cards)) for (const i of event.cards) {
                                    if (get.type(i) == 'trick' || get.type(i) == 'delay') {
                                        num1++;
                                    }
                                    if (get.type(i) == 'equip') {
                                        num2++;
                                    }
                                    if (get.type(i) == 'basic') {
                                        num3++;
                                    }
                                }
                                ('step 1');
                                player.draw(num1 + event.cards.length);
                                player.recover(num2);
                                player.addTempSkill('masaki_mituzhijia_2', { player: 'phaseAfter' });
                                player.storage.masaki_mituzhijia_2 += num3;
                            },
                            ai: {
                                order(item, player) {
                                    if (player.hasCard((i) => get.value(i) > Math.max(6, 9 - player.hp), 'he')) return 1;
                                    return 10;
                                },
                                result: {
                                    player: 1,
                                },
                                nokeep: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag === 'nokeep') return (!arg || (arg && arg.card && arg.card.name === 'tao')) && player.isPhaseUsing() && !player.getStat().skill.rezhiheng && player.hasCard((card) => card.name !== 'tao', 'h');
                                },
                                threaten: 1.55,
                            },
                            subSkill: {
                                2: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '手牌上限+#',
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = 0;
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.storage.masaki_mituzhijia_2;
                                        },
                                    },
                                },
                            },
                        },
                        masaki_yonglan: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                                globalFrom(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                        },
                        masaki_sansi: {
                            audio: 'ext:MA天才麻将少女:2',
                            juexingji: true,
                            derivation: ['masaki_lizhi'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.masaki_sansi) return false;
                                return game.roundNumber > player.hp;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('masaki_sansi');
                                player.chooseDrawRecover(2, true);
                                ('step 1');
                                player.loseMaxHp();
                                player.storage.masaki_sansi = true;
                                if (player.hp > player.maxHp) player.hp = player.maxHp;
                                player.update();
                                player.removeSkill('masaki_yonglan');
                                player.addSkill('masaki_lizhi');
                            },
                        },
                        masaki_lizhi: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                var evt = event.getl(player);
                                return evt && evt.hs && evt.hs.length;
                            },
                            content() {
                                'step 0';
                                var num = trigger.getl(player).hs.length;
                                player
                                    .chooseTarget(get.prompt('masaki_lizhi'), '弃置至多' + get.cnNumber(num) + '名角色各一张牌', [1, num], function (card, player, target) {
                                        return target != player && target.countCards('he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player == target) return get.attitude(player, target) + 10;
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    for (let i = 0; i < result.targets.length; i++) {
                                        player.discardPlayerCard(result.targets[i], 'he', true);
                                    }
                                } else event.finish();
                                ('step 2');
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                    },
                                },
                                noh: true,
                            },
                        },
                        masaki_youying: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (!event.hasNature() || !event.player.isIn()) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && get.distance(current, player) <= 1;
                                });
                            },
                            forced: true,
                            content() {
                                var list = game.filterPlayer(function (current) {
                                    return current != player && get.distance(current, player) <= 1;
                                });
                                for (let i = 0; i < list.length; i++) {
                                    list[i].loseHp();
                                }
                            },
                        },
                        masaki_xianfu: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event.source == player && event.player != player) return false;
                                if (event.player != player && !event.source && !player.canUse('sha', event.source, false, false)) return false;
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                if (trigger.player == player) {
                                    player.draw();
                                } else if (trigger.player != player && trigger.source) {
                                    player.chooseToUse({ name: 'sha' }, trigger.source, '先负:是否对' + get.translation(trigger.source) + '使用一张杀？');
                                }
                            },
                        },
                        masaki_fomie: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return event.num > 0 && player.hp < 3;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                player.line(trigger.player, 'green');
                                trigger.num--;
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.4,
                            },
                        },
                        masaki_daan: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed && !player.isDamaged();
                            },
                            logTarget: 'player',
                            content() {
                                player.line(trigger.player, 'red');
                                trigger.num++;
                            },
                        },
                        masaki_chikou: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                player: 'phaseDrawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed && event.num < 2;
                            },
                            async content(event, trigger, player) {
                                player.draw();
                            },
                        },
                        masaki_liuyao: {
                            forced: true,
                            group: ['masaki_xiansheng', 'masaki_youying', 'masaki_xianfu', 'masaki_fomie', 'masaki_daan', 'masaki_chikou'],
                            preHidden: ['masaki_xiansheng', 'masaki_youying', 'masaki_xianfu', 'masaki_fomie', 'masaki_daan', 'masaki_chikou'],
                            derivation: ['masaki_xiansheng', 'masaki_youying', 'masaki_xianfu', 'masaki_fomie', 'masaki_daan', 'masaki_chikou'],
                        },
                        masaki_zhuili: {
                            audio: 'ext:MA天才麻将少女:2',
                            trigger: {
                                global: 'dying',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) < 4) return false;
                                if (player.countCards('hs', (card) => player.canSaveCard(card, event.player)) >= 1 - event.player.hp) return false;
                                if (event.player == player || event.player == get.zhu(player)) return true;
                                if (_status.currentPhase && get.damageEffect(_status.currentPhase, player, player) < 0) return false;
                                return !player.hasUnknown() && (event.player == player || player.identity != 'nei' || (player.identity == 'nei' && get.population('zhong') == 0));
                            },
                            limited: true,
                            filter(event, player) {
                                return event.player.hp <= 0;
                            },
                            prompt(event) {
                                return get.translation(event.source) + '令' + get.translation(event.player) + '进入了濒死状态,是否弃置所有手牌对' + get.translation(event.source) + '造成1点伤害？' + get.prompt('djay_zhaofu');
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.awakenSkill('masaki_zhuili');
                                var hs = player.getCards('h');
                                if (hs.length) player.discard(hs);
                                ('step 1');
                                player.drawTo(Math.min(7, player.maxHp + 1));
                                ('step 2');
                                if (trigger.source && trigger.source.isIn()) {
                                    trigger.source.damage(player);
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                    },
                    translate: {
                        masaki_moyuangongzi: '末原恭子',
                        masaki_gongyongxiao: '宫永咲',
                        masaki_yuancunhe: '原村和',
                        masaki_piangangyouxi: '片冈优希',
                        masaki_mengnaizhenfan: '梦乃真帆',
                        masaki_ranguzhenzi: '染谷真子',
                        masaki_zhujingjiu: '竹井久',
                        masaki_xuhejingtailang: '须贺京太郎',
                        masaki_longmenyuantouhua: '龙门渕透华',
                        masaki_guoguangyi: '国广一',
                        masaki_zecunzhiji: '泽村智纪',
                        masaki_jingshangchun: '井上纯',
                        masaki_tianjiangyi: '天江衣',
                        masaki_fulumeihuizi: '福路美穗子',
                        masaki_jiliumochun: '吉留未春',
                        masaki_wentangxingxia: '文堂星夏',
                        masaki_shengkuchundai: '深堀纯代',
                        masaki_chitianhuacai: '池田华菜',
                        masaki_puyuanzhimei: '蒲原智美',
                        masaki_jinshanmuyue: '津山睦月',
                        masaki_jiazhimuyoumei: '加治木由美',
                        masaki_meiweijiazhi: '妹尾佳织',
                        masaki_donghengtaozi: '东横桃子',
                        masaki_songshixuan: '松实玄',
                        saki_songshiyou: '松实宥',
                        masaki_xinzichong: '新子憧',
                        masaki_chituqinghui: '赤土晴绘',
                        masaki_gaoyawennai: '高鸭稳乃',
                        masaki_lusenzhuo: '鹭森灼',
                        masaki_gongyongzhao: '宫永照',
                        masaki_hongshijin: '弘世堇',
                        masaki_seguyaosheng: '涩谷尧深',
                        masaki_yiyechengzi: '亦野诚子',
                        masaki_daxingdan: '大星淡',
                        masaki_shiyuanneizhiye: '辻垣内智叶',
                        masaki_haohuiyu: '郝慧宇',
                        masaki_queminghua: '雀明华',
                        masaki_meigendaiwen: '梅根戴文',
                        masaki_NellyVirsaladze: '涅莉·薇萨拉兹',
                        masaki_yuanchengsilian: '园城寺怜',
                        masaki_ertiaoquan: '二条泉',
                        masaki_jiangkouxi: '江口夕',
                        masaki_chuanjiubaohaozi: '船久保浩子',
                        masaki_qingshuigulonghua: '清水谷龙华',
                        masaki_shangchongman: '上重漫',
                        saki_zhenlaiyouzi: '真濑由子',
                        saki_aidangjuanhui: '爱宕绢惠',
                        saki_aidangyangjia: '爱宕洋榎',
                        masaki_shendaixiaoshi: '神代小莳',
                        masaki_shousuba: '狩宿巴',
                        masaki_longjianchun: '泷见春',
                        masaki_bomochumei: '薄墨初美',
                        masaki_shihuxia: '石户霞',
                        saki_xiaolaichuanbaiwang: '小濑川白望',
                        masaki_zidaifengyin: '姊带丰音',
                        ma_moxigebing: '墨西哥饼',
                        ma_moxigebing_info: '出牌阶段,对自己使用,选择回复一点体力或摸两张牌;有角色濒死时,对濒死角色使用,令该角色回复一点体力',
                        masaki_duangua: '断挂',
                        masaki_duangua_info: '锁定技,你的回合开始时,你令其他角色所有的技能失效直至当前回合结束',
                        masaki_xiansheng: '先胜',
                        masaki_xiansheng_info: '锁定技,你于你的回合内计算与其他角色的距离时-1',
                        masaki_lingshangkaihua: '岭上开花',
                        masaki_lingshangkaihua_info: '每回合限一次,当你的手牌移动后,若你的手牌数正好为3,你可以视为使用一张基础基本牌或【过河拆桥】(没有距离与次数限制),你摸一张牌',
                        masaki_zhengfuling: '正负零',
                        masaki_zhengfuling_info: '大将技,每回合限一次,当你造成或受到一次伤害后,你可以摸或弃一张牌',
                        masaki_suming: '速鸣',
                        masaki_suming_info: '大将技,每回合限一次,当你成为【杀】的目标时,你可以弃置两张牌并摸三张牌',
                        masaki_shili: '实力',
                        masaki_shili_info: '锁定技,你的回合开始时,你依次移除场上所有角色的临时技能',
                        masaki_juyou: '聚友',
                        masaki_juyou_info: '锁定技,你与体力值等于你的角色距离视为1',
                        masaki_buwei: '不为',
                        masaki_buwei_info: '锁定技,你不能成为体力值大于你的角色使用的锦囊牌的目标',
                        masaki_dongfeng: '東风',
                        masaki_dongfeng_info: '每回合限四次,当你于出牌阶段内使用点数大于当前游戏轮数的牌时,你可以摸一张牌',
                        masaki_juanbing: '卷饼',
                        masaki_juanbing_info: '当你使用点数小于当前游戏轮数的牌指定自己为目标时,你可以摸一张牌.锁定技,你手牌区内点数等于当前游戏轮数的牌被视为【墨西哥饼】',
                        masaki_tianhe: '天和',
                        masaki_tianhe_info: '锁定技,选择武将后,你有1%的概率令你所在的阵营直接获得胜利',
                        masaki_fuzhi: '复制',
                        masaki_fuzhi_info: '锁定技,当其他角色使用技能后,若你未以此法获得过该技能,你标记并获得此技能直至你死亡.你在使用一次被标记的技能后,会失去此技能.当牌堆洗牌后,你移除此技能获得过的其他技能的记录.(无法获得觉醒技,限定技,主公技等)',
                        masaki_yipu: '忆谱',
                        masaki_yipu_info: '当你使用/成为牌的目标时,若你的〖忆〗中没有与这些牌点数相同的牌,你将牌堆/弃牌堆中与这些牌点数相同且与所有的〖忆〗点数均不同的牌置入〖忆〗中.你的摸牌阶段结束后,你可以用手牌/装备区内点数与〖忆〗点数相同的牌进行交换.每当你受到一点伤害后,你可以选择获得一张〖忆〗',
                        masaki_huaiting: '坏听',
                        masaki_huaiting_info: '出牌阶段,你可以展示你的手牌,若如此做,其他角色无法使用或打出与你所展示的牌名称相同的牌直至回合结束',
                        masaki_xinzhan: '心战',
                        masaki_xinzhan_info: '限定技,出牌阶段,你可以用一张牌和至多X名角色进行拼点,你令在此次拼点中输给你的角色所有技能失效直至其下个回合结束并对他们造成一点伤害,随后你依次弃置在此次拼点中没有输给你的角色两张牌.(X为你已损失的体力值+1)',
                        masaki_jiudi: '久帝',
                        masaki_jiudi_info: '主公技,每当你造成一次伤害后,其他『咲』势力角色可以令你进行一次判定,若判定结果为♢,你摸一张牌且你的手牌上限+1直至你的回合结束',
                        masaki_lixue: '砺学',
                        masaki_lixue_info: '锁定技,每当你受到1点伤害/失去1点体力后,你便减少等量的体力上限并摸等量的牌.当你的体力上限不大于3时,你从牌堆摸牌时摸牌数便+1,且你的手牌上限被视为3.(〖砺学〗不会导致你的体力上限小于3点)',
                        masaki_paotui: '跑腿',
                        masaki_paotui_info: '当你于摸牌阶段获得牌后,你可以将这些牌分配给任意角色',
                        masaki_zhishui: '治水',
                        masaki_zhishui_info: '每当你受到一次伤害后/有除你以外的角色进入濒死时,你可以弃置除你/该角色以外的所有角色区域内的一张牌,你摸X张牌.(X为你/该角色已损失的体力值且至多为5)',
                        masaki_zhenzhong: '珍重',
                        masaki_zhenzhong_info: '每回合限一次,当一名角色的手牌被其他角色获得或弃置后,你可以令该角色摸两张牌',
                        masaki_zhilan: '止澜',
                        masaki_zhilan_info: '主公技,每轮限一次,当一名其他角色触发技能时,你可以弃置一张牌,令该角色选择弃置一张牌或取消此技能的触发,并令该角色所有技能失效直至下个其回合开始.(势力不为『咲』的角色在选择时改为交给你一张牌.)',
                        masaki_qianshu: '千术',
                        masaki_qianshu_info: '锁定技,游戏开始时,你将牌堆中至多13张名称各不相同的锦囊或基本牌放置于你的武将牌上称之为『千』,你的出牌阶段开始时,你可以用任意手牌替换等量的『千』.每当你受到1点伤害后,你需要将一张『千』置入弃牌堆',
                        masaki_juezhi: '决志',
                        masaki_juezhi_info: '觉醒技,当你进入濒死状态时,你将体力值回复至2点,失去技能〖千术〗并获得技能〖锁局〗',
                        masaki_suoju: '锁局',
                        masaki_suoju_info: '你的出牌阶段开始时,你可以横置自身和至多X名不处于横置状态的角色.你的回合结束时,你可以弃置所有处于横置状态角色的一张牌.你计算与处于横置状态角色的距离时视为1.(X为你已损失的体力值且至少为1)',
                        masaki_shishi: '识识',
                        masaki_shishi_info: '你的准备阶段开始时/你受到一次伤害后,你可以展示一名其他角色的一张手牌并进行一次判定,若判定结果与此牌颜色相同,你对该角色造成一点伤害,若颜色不同,你弃置该角色一张牌',
                        masaki_boxue: '博学',
                        masaki_boxue_info: '当你的判定牌生效后,你可以获得此牌',
                        masaki_duanshi: '断势',
                        masaki_duanshi_info: '当有一名其他角色使用锦囊时,你可以将两张牌放置于你的武将牌上称之为『势』,若如此做则你令该锦囊牌失效.当一名角色的回合结束时,你可以弃置一张『势』并对该角色造成一点伤害',
                        masaki_haidilaoyue: '海底捞月',
                        masaki_haidilaoyue_info: '当一名角色的回合结束时,若牌堆中剩余的牌不大于14张,你可以展示这些牌,依次使用其中的锦囊牌(无距离限制)并获得其中的非锦囊牌,洗牌',
                        masaki_yueman: '月满',
                        masaki_yueman_info: '你的回合结束阶段开始时,你可以摸两张牌并弃一张牌',
                        masaki_duting: '独听',
                        masaki_duting_info: '当一名角色的回合开始时,你可以弃置一张手牌,展示牌堆顶部的一张牌,若此牌与你弃置的牌花色相同,你获得此牌.你令该角色本回合内无法使用或打出与你所展示的牌花色相同的牌',
                        masaki_manyue: '满月',
                        masaki_manyue_info: '大将技,一轮游戏开始时,你可以观看牌堆顶部的X张牌并获得其中的一张牌.(X为当前场上游戏人数)',
                        masaki_dongcha: '洞察',
                        masaki_dongcha_info: '锁定技,其他角色的手牌对你可见',
                        masaki_xianshu: '贤淑',
                        masaki_xianshu_info: '每当你摸牌后,你可以令一名除你以外且本回合内未因此技能摸过牌的角色摸一张牌',
                        masaki_lizhan: '励战',
                        masaki_lizhan_info: '当一名角色的回合结束时,你可以令一名本回合内受过伤害的角色摸X张牌.(X为该角色已损失的体力,且X最小为1最大为5)',
                        masaki_kaiyan: '开眼',
                        masaki_kaiyan_info: '觉醒技,你的准备阶段开始时,若当前游戏轮数大于你的体力值,你须回复一点体力值或摸两张牌,减少一点体力上限并获得技能〖洞察〗和〖先胜〗',
                        masaki_qixin: '齐心',
                        masaki_qixin_info: '主公技,其他『咲』势力的角色出牌阶段限一次,该角色可以弃置一张牌并令你摸一张牌',
                        masaki_jushou: '据守',
                        masaki_jushou_info: '当你成为其他角色使用牌的目标时,你可以弃置一张牌令该角色本回合内无法再对你使用牌.若如此做,本回合结束时,若你于本回合内受过伤害,你摸X张牌.(X为你已损失的体力值且至少为1)',
                        masaki_susheng: '速升',
                        masaki_susheng_info: '锁定技,当你受到一次伤害后,你弃置两张牌并令下次因此法需要弃置的牌-1,当你因此法需要弃置的牌为负数时,改为摸等量的牌.(每次至多摸5张.)',
                        masaki_banggu: '帮顾',
                        masaki_banggu_info: '当你的牌因弃置进入弃牌堆后,你可以将这些牌任意分配给其他角色',
                        masaki_zhugu: '助顾',
                        masaki_zhugu_info: '当你的牌因弃置进入弃牌堆后,你可以令一名其他角色摸一张牌',
                        masaki_houyan: '厚颜',
                        masaki_houyan_info: '锁定技,你的手牌上限+2X,你不能成为点数小于你手牌上限的【杀】的目标.(X为你已损失的体力值+1并乘以2)',
                        masaki_jiji: '积极',
                        masaki_jiji_info: '当你于回合外因使用/打出或弃置而失去一张非基本牌后,你可以摸一张牌',
                        masaki_nijing: '逆境',
                        masaki_nijing_info: '大将技,当你于回合外使用一张点数不大于你手牌上限的牌时,你可以摸一张牌并弃一张牌',
                        masaki_feiche: '飞车',
                        masaki_feiche_info: '当你即将造成非传导伤害时,你可以令此伤害+1.一名角色的弃牌阶段结束后,若当前回合内你通过此技能增加过伤害,你受到一点无来源的伤害.你计算与其他角色的距离时-7',
                        masaki_wahaha: '哇哈哈',
                        masaki_wahaha_info: '当一名其他角色即将造成非传导伤害时,你可以弃置一张牌,令该角色获得技能〖飞车〗直至当前回合结束',
                        masaki_hujia: '护驾',
                        masaki_hujia_info: '主公技,当你需要使用或打出一张【闪】时,你可以令其他『咲』势力角色选择是否打出一张【闪】.若有玩家响应,则你视为使用或打出了一张闪,且该玩家摸一张牌',
                        masaki_jika: '集卡',
                        masaki_jika_info: '游戏开始时,你令场上所有角色获得与其自身主将相对应的角色卡.当一名角色受到伤害后,伤害来源随机获得其武将牌上的一张角色卡,且若伤害来源为你,你摸一张牌.当一名角色的回合开始时,若你有该角色的角色卡,你摸一张牌.你的手牌上限+X(X为你拥有的角色卡数量)',
                        masaki_zhiji: '志继',
                        masaki_zhiji_info: '主公技,觉醒技,准备阶段,若你的体力值是全场最少的(或之一),你须减少一点体力上限,选择回复一点体力或摸两张牌,获得技能〖护驾〗',
                        masaki_guoshiwushuang: '国士无双',
                        masaki_guoshiwushuang_info: '游戏开始时,你随机将牌堆中至多十三张名称均不相同的幺九牌放置于武将牌上,称为『国士』.每回合限一次,当一名其他角色因使用/打出或弃置失去牌后,若这些牌中有与『国士』点数或名称相同的牌,你可以选择获得一张『国士』并对该角色造成一点伤害',
                        masaki_yongzhe: '勇者',
                        masaki_yongzhe_info: '大将技,当一名其他角色于摸牌阶段外获得牌后,若其手牌数正好为4,你可以对该角色造成一点伤害.若你拥有技能〖国士无双〗且你的『国士』数量少于13,你将牌堆中一张符合『国士』标准的牌置入『国士』之中',
                        masaki_qiangyun: '强运',
                        masaki_qiangyun_info: '锁定技,当你从牌堆摸牌时,你优先改为从牌堆中获得等量与你手牌中所有牌名称均不同的牌并使本次摸牌的数量-X.(X为你本次以此法获得牌的数量);你的判定会向着对你有利的方向倾斜',
                        masaki_jianyin: '渐隐',
                        masaki_jianyin_info: '锁定技,游戏/你的回合开始时或你受到一次伤害后,你进入【隐形】状态直至你造成一次伤害',
                        masaki_yinxing: '隐形',
                        masaki_yinxing_info: '锁定技,你不能成为其他角色使用的【桃】以外牌的目标,当你成为其他角色使用的【桃】以外牌的目标时,此牌对你无效',
                        masaki_fujiang: '副将',
                        masaki_fujiang_info: '限定技,当一名其他角色即将受到不小于其体力值的伤害时,你可以令该角色摸取伤害值*2的牌,你将受到伤害的角色改为自己',
                        saki_jibao: '集宝',
                        saki_jibao_info: '锁定技,<br>①游戏开始时,你获得牌堆中一定数量的牌,你将这些牌记录为你的<宝牌>,将它们置入弃牌堆中.<br>②当你从牌堆摸牌时,若你两轮内未使用/打出/被其他角色获得过你的<宝牌>,则你优先获得一张<宝牌>,否则你优先获得一张非<宝牌>的牌(会使本次摸牌数量-1).<br>③当你获得<宝牌>时,你将它们置入你的<宝牌区>内,你可以如手牌般使用或打出这些宝牌.<br>④每当你失去一次<宝牌>后,你摸一张牌',
                        saki_bp: '宝牌',
                        saki_bp_info: '',
                        saki_jibao2: '集宝',
                        saki_jibao2_info: '',
                        masaki_yibao: '易宝',
                        masaki_yibao_info: '出牌阶段,你可以将一张牌交给一名本回合你未使用〖易宝〗选择过的其他角色,获得该角色的一张牌.(若你拥有技能〖集宝〗且给出的牌为你的『宝牌』,则你改为获得该角色两张牌.每当你以此法从该角色处获得一张你的『宝牌』,你便对该角色造成一点伤害.)',
                        masaki_juhan: '惧寒',
                        masaki_juhan_info: '当你成为黑色/雷属性/冰属性【杀】的目标时,你可以弃置一张黑色牌,从牌堆/弃牌堆中获得一张红色牌.你的♥️️牌不计入手牌上限,你的♦️️牌没有使用次数限制',
                        masaki_nuanse: '暖色',
                        masaki_nuanse_info: '当你使用/打出一张红色牌,或你于你的弃牌阶段外因弃置失去一张红色牌,亦或你的判定结果为红色后,你摸一张牌',
                        masaki_sugong: '速攻',
                        masaki_sugong_info: '你的回合开始时,你可以摸一张牌,你可以用一张牌与至多三名其他角色同时进行一次拼点,在此次拼点中输给你的角色无法使用或打出手牌直至当前回合结束,且你对这些角色使用牌时没有距离限制.在此次拼点中未输给你的角色可以将一张手牌当做【闪】使用或打出直至当前回合结束',
                        masaki_kongji: '控机',
                        masaki_kongji_info: '锁定技,当一名角色的弃牌阶段开始时,若你于本回合内拼点胜利过,你摸一张牌',
                        masaki_kanpo: '看破',
                        masaki_kanpo_info: '当一名角色的回合开始时,你可以弃置一张牌并选择一名除你以外的角色,你令该角色的技能失效直至当前回合结束.若如此做,当前回合结束时,若有角色于此回合内受到过伤害,你摸一张牌',
                        masaki_chuanqi: '传奇',
                        masaki_chuanqi_info: '主公技,当一名『咲』势力的角色需要使用或打出一张【杀】时,其可以交给你一张【闪】,你可以令其视为使用或打出一张【杀】',
                        masaki_paishanzhipei: '牌山支配',
                        masaki_paishanzhipei_info: '锁定技,当你使用/打出/成为牌的目标时,若这些牌中有不处于你支配(标记过)下的牌,你将这些牌放置于牌堆的底部并支配这些牌.当有其他角色使用处于你支配下的牌时,你摸一张牌.你使用被你支配的牌时没有距离限制',
                        masaki_yinfan: '因幡',
                        masaki_yinfan_info: '每回合每种类型的牌限一次,当你成为牌的目标时,你可以摸一张牌',
                        masaki_zhendao: '证道',
                        masaki_zhendao_info: '大将技,一名角色的判定牌生效前,若此牌处于你的支配下,你可以重新指定此判定牌的花色和点数',
                        masaki_canju: '残局',
                        masaki_canju_info: '每当你造成或受到一次伤害后,若伤害牌没有点数/点数大于10,你可以从牌堆/弃牌堆中随机获得一张点数大于10的牌;若伤害牌点数不大于10,你随机从牌堆/弃牌堆中以保龄球的排序方式(三角形)随机获得一张与伤害牌点数相邻的牌',
                        masakichengzhi: '承志',
                        masakichengzhi_info: '主公技,觉醒技,当你进入濒死状态时,你增加一点体力上限,将体力值回复至2点,并获得技能【传奇】',
                        masaki_shenjing: '照魔镜',
                        masaki_shenjing_info: '主公技,锁定技,游戏开始时,你可以观看一名角色的身份,若如此做,本局游戏内该角色对你使用【杀】时你摸一张牌',
                        masaki_tianti: '天梯',
                        masaki_tianti_info: '锁定技,摸牌阶段,你额外摸X张牌,(X为你上次于摸牌阶段摸牌时以此法额外摸取的牌数+1),当你受到一次伤害后,你将X改为1',
                        masaki_wangzhedeyuyu: '王者的余裕',
                        masaki_wangzhedeyuyu_info: '当你受到伤害时,你可以弃置所有手牌令此次伤害-1',
                        masaki_jiulian: '九莲宝灯',
                        masaki_jiulian_info: '限定技,出牌阶段,若你本局内已累计造成过九次伤害,你可以从牌堆和弃牌堆中依点数顺序依次展示并使用一张点数为1至9点的牌(此牌不为闪),直至你无法使用你展示的牌',
                        masaki_juji: '狙击',
                        masaki_juji_info: '出牌阶段,你可以将一张与你所有『狙』花色均不同的牌放置于你的武将牌上,称之为『狙』;当一名角色于其回合内使用一张牌时,你可以弃置一张与此牌花色相同的『狙』,令该角色打出一张【闪】,若该角色没有打出【闪】,则你令此牌失效并对该角色造成一点伤害,否则你受到该角色造成的一点伤害并摸一张牌',
                        masaki_fenggeng: '丰耕',
                        masaki_fenggeng_info: '锁定技,当你于每回合首次使用/打出具有实体的牌时,你将这些牌放置于你的武将牌上称之为『丰』;当一轮游戏开始时,若你武将牌上的『丰』小于X,你获得你武将牌上所有的『丰』.(X为当前游戏轮数乘以你已损失的体力值)',
                        masaki_diaoshi: '钓师',
                        masaki_diaoshi_info: '当你的回合开始时,你可以摸X(X为你已损失的体力值+1)张牌并将等量的牌放置于你的武将牌上称之为『渔』.当一名其他角色使用或打出一张牌后,若此牌的点数可以与你的『渔』进行<吃>或者<碰>,你可以弃置对应的『渔』并获得此牌',
                        masaki_yuzhe: '渔者',
                        masaki_yuzhe_info: '当你于回合外获得一张牌后,你可以令当前回合的角色摸一张牌',
                        masaki_xianzhi: '限制',
                        masaki_xianzhi_info: '锁定技,游戏开始时,你令所有其他角色随机弃置两张手牌',
                        masaki_xingqi: '星起',
                        masaki_xingqi_info: '当一轮游戏开始时,若你的手牌不为全场唯一最多,你可以弃置自身区域内一张牌,从牌堆底部将手牌摸至全场唯一最多(至多摸七张)',
                        masaki_xinghe: '星河',
                        masaki_xinghe_info: '大将技,当你失去区域内最后的牌后,你可以摸一张牌',
                        masaki_zhanji: '斩击',
                        masaki_zhanji_info: '当一名其他角色使用一张具有【伤害】这一标签的牌或非延时类的锦囊牌指定一名除该角色外的角色为唯一目标时,你可以弃置两张牌,令此牌的使用者与被使用者互换',
                        masaki_deli: '得利',
                        masaki_deli_info: '锁定技,每当有角色于自己的回合内受到伤害或失去体力后,你摸等量的牌',
                        masaki_pojun: '破军',
                        masaki_pojun_info: '主公技,当一名『咲』势力的角色使用一张【杀】后,其可以将此【杀】对应的实体牌交给你,你可以令该角色摸一张牌',
                        masaki_qiaohu: '巧胡',
                        masaki_qiaohu_info: '出牌阶段限一次,你可以观看牌堆顶部的7张牌,选择其中至多两张点数相连的牌并获得',
                        masaki_fengshen: '风神',
                        masaki_fengshen_info: '你可以将你的手牌按以下规则使用或打出:<li>将♦️️牌当做火属性【杀】<li>♥️️牌当做【铁索连环】<li>♣️️牌当做雷属性【杀】<li>♠️️牌当做【酒】',
                        masaki_geyong: '歌咏',
                        masaki_geyong_info: '你的准备阶段开始时,你可以令你本回合内所有的手牌均视为某种花色',
                        masaki_jifeng: '集风',
                        masaki_jifeng_info: '当一名角色的回合结束时,你可以摸X张牌(X为你本回合内造成的伤害).若你的手牌数大于Y,你将手牌弃置Y张(Y为你的体力上限)',
                        masaki_ange: '暗阁',
                        masaki_ange_info: '你的出牌阶段开始时,你可以令你手牌中常规类型的牌对你不可见直至你的回合结束,若如此做,本回合内你使用牌时没有距离限制且你使用装备牌时摸一张牌',
                        masaki_juedou: '决斗',
                        masaki_juedou_info: '锁定技,你的【五谷丰登】、【桃园结义】、【万箭齐发】和【南蛮入侵】均被视为【决斗】;每回合限一次,当你使用【决斗】指定目标或成为【决斗】的目标时,你可以令除你与对应角色外的其他角色移出游戏直至本回合结束,你摸两张牌',
                        masaki_qunchao: '群嘲',
                        masaki_qunchao_info: '出牌阶段限一次,你可以选择至多三名有牌的其他角色,这些角色需要对你使用一张【杀】,否则你弃置其一张牌',
                        masaki_liancai: '敛财',
                        masaki_liancai_info: '锁定技,当一名角色的回合结束时你摸X张牌(X为你本回合内受到的伤害数)',
                        masaki_yuzhi: '预知',
                        masaki_yuzhi_info: '你的出牌阶段开始时,你可以观看牌堆顶部2X张牌(X为当前场上的游戏人数),并将这些牌按任意顺序放置于牌堆的顶部或底部',
                        masaki_bingruo: '病弱',
                        masaki_bingruo_info: '锁定技,你的回合结束时,你失去一点体力值并摸X张牌.(X为你已损失的体力值+1)',
                        masaki_chengneng: '逞能',
                        masaki_chengneng_info: '出牌阶段,你可以重铸你的【闪】',
                        masaki_jigong: '急攻',
                        masaki_jigong_info: '出牌阶段开始时,你可以摸两张牌并选择弃置一张牌,若如此做,你本回合无法使用与此牌类别相同的牌且你使用的其他常规类型的牌会获得强化.<li>基本牌:使用时没有次数限制.<li>锦囊牌:使用时没有距离限制.<li>装备牌:使后可以摸一张牌',
                        masaki_shouju: '受狙',
                        masaki_shouju_info: '锁定技,回合内你的【闪】均被视为【杀】,回合外你的【杀】均被视为【闪】',
                        masaki_huanzhuang: '换装',
                        masaki_huanzhuang_info: '限定技,当一名男性角色阵亡时,你可以选择获得该角色武将牌上的一个技能,并摸X张牌(X为该角色的体力上限且至多为5),若你的体力上限不小于3,你失去一点体力上限',
                        masaki_juesheng: '决胜',
                        masaki_juesheng_info: '锁定技,你使用的【决斗】不可被响应,你手牌中的延时类锦囊均被视为【决斗】,且其他角色无法使用延时类锦囊指定你为目标',
                        masaki_xipu: '析谱',
                        masaki_xipu_info: '当你受到一次伤害后,你可以观看牌堆顶部的X张牌(X为你已损失的体力值),将这些牌分配给任意角色',
                        masaki_kanchapo: '勘破',
                        masaki_kanchapo_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,并可以展示其中一张非基本牌,将此牌弃置或放置于牌堆的顶部',
                        masaki_duice: '对策',
                        masaki_duice_info: '觉醒技,你的准备阶段开始时,若你本局内已受过三次伤害,你可以选择摸两张牌或回复一点体力,并获得技能〖勘破〗',
                        masaki_wujitian: '无极天',
                        masaki_wujitian_info: '当你成为一张牌的唯一目标后,你可以摸一张牌.你的手牌上限等于体力上限',
                        masaki_jiban: '羁绊',
                        masaki_jiban_info: '主公技,锁定技,你的手牌上限+X(X为场上<咲>势力的角色数量)',
                        masaki_xianrenzhilu: '仙人指路',
                        masaki_xianrenzhilu_info: '大将技,出牌阶段限一次,你可以将一张牌重铸为一张与此牌字数相同的牌',
                        masaki_baofa: '爆发',
                        masaki_baofa_info: '当你于出牌阶段使用【杀】指定目标时,你可以令此牌伤害+X(X为你手牌中【杀】的数量),若如此做,你本回合内无法再使用手牌',
                        masaki_xuli: '蓄力',
                        masaki_xuli_info: '锁定技,你的黑色手牌不计入手牌上限,当你的黑色手牌数不小于3时,你手牌中的黑色牌均视为【杀】',
                        saki_yizhong: '毅重',
                        saki_yizhong_info: '当一名角色的回合结束时,若你没有〖毅重〗标记,你可以将至多X张牌放置于你的武将牌上称之为〖毅重〗(X为你手牌中具有『伤害』这一标签的牌的数量).当一名角色成为带有『伤害』这一标签的牌的目标时,你可以弃置一张〖毅重〗并摸两张牌,你需要交给该角色一张牌',
                        saki_menjiang: '门将',
                        saki_menjiang_info: '你可以将一张非基本牌当做【杀】或【闪】使用或打出',
                        saki_lishou: '力守',
                        saki_lishou_info: '锁定技,当你使用或打出转化牌时,若此牌包含红色,你摸一张牌;若此牌包含黑色,你可以弃置一名其他角色的一张牌',
                        masaki_guozao: '聒噪',
                        masaki_guozao_info: '转换技,当你使用一张牌后,阴:你可以摸两张牌并弃置一张牌;阳:你可以摸一张牌并弃置两张牌',
                        saki_jiang: '激昂',
                        saki_jiang_info: '锁定技,当你成为红色牌的目标时,你获得与此牌点数相同的〖激昂〗标记,当一名角色的出牌阶段开始时,你移除所有的激昂标记并从牌堆随机获得总点数与本次移除标记点数相同的牌',
                        saki_jiejin: '借金',
                        saki_jiejin_info: '主公技,其他『咲』势力角色的出牌阶段限一次,该角色可以将一张手牌交给你,你可以选择交给该角色一张牌',
                        masaki_rumeng: '入梦',
                        masaki_rumeng_info: '出牌阶段,你可以将你的武将牌翻至背面并摸3张牌',
                        masaki_jiangshen: '降神',
                        masaki_jiangshen_info: '锁定技,①:当你的武将牌翻至背面后,你进行一次判定,根据不同的花色获得不同的技能直至你的武将牌翻回正面:<li>♠️️:〖魄袭〗和〖劫营〗<li>♥️️:〖绝境〗和〖龙魂〗<li>♦️️:〖军略〗和〖摧克〗<li>♣️️:〖魅魂〗和〖惑心〗<br>②:当你的武将牌翻至背面后,直至你进入濒死状态,每当你即将翻回正面时,你取消此次翻面,改为摸1张牌并立即执行一个额外的出牌阶段.<br>③:当你脱离濒死状态后,你重置你的武将牌.<br>④:每回合限一次,当你即将摸牌时,若你处于翻面或横置状态,你令本次摸牌数+1',
                        masaki_gongzhu: '公主',
                        masaki_gongzhu_info: '主公技,其他『咲』势力角色造成一次伤害后,该角色可进行一次判定,若判定结果为♥️️,你摸一张牌',
                        masaki_baxie: '祓楔',
                        masaki_baxie_info: '出牌阶段限一次,你可以令一名其他角色摸一张牌并弃一张牌,若该角色以此法弃置的牌为♠️️,你与该角色各摸一张牌且你令该角色将武将牌翻至正面',
                        masaki_qumo: '驱魔',
                        masaki_qumo_info: '每当你使用【杀】或【决斗】指定角色为目标时,你可以进行一项选择:①令该角色弃置其判定区内所有的牌.②此牌造成伤害后你摸一张牌',
                        masaki_shendao1: '神道',
                        masaki_shendao1_info: '当一名角色的判定牌生效前,你可以打出一张红色牌代替之',
                        masaki_guozhuang: '过庄',
                        masaki_guozhuang_info: '每当你使用一张具有『伤害』这一标签的牌,或成为具有『伤害』这一标签的牌的目标时,你可以摸一张牌,随后,若你的手牌数大于1,你需要弃置一张牌',
                        masaki_shendao2: '神道',
                        masaki_shendao2_info: '当一名角色的判定牌生效前,你可以打出一张黑色牌代替之',
                        masaki_xinshili: '实力',
                        masaki_xinshili_info: '锁定技,当你受到不为非转化牌为来源的伤害时,取消之',
                        masaki_guimen: '鬼门',
                        masaki_guimen_info: '当有角色使用装备/你成为牌的目标时,若你的武将牌上没有与此牌花色相同的『门』,你从牌堆/弃牌堆中将一张对应花色的【杀】放置于你的武将牌上称之『门』.你的准备阶段开始时,若你的『门』包含了四种花色,你可以获得武将牌上所有的『门』',
                        masaki_sixi: '四喜',
                        masaki_sixi_info: '锁定技,当你使用具有花色的牌时,若你本回合没有使用过与之花色相同的牌,则没有距离和次数限制',
                        masaki_tianni: '天倪',
                        masaki_tianni_info: '当一名体力值不大于你的其他角色成为除你外的令一名角色使用【杀】/【决斗】或延时类锦囊的目标时,若你可以成为此牌的目标,你可以将目标转移为你,若如此做,你从牌堆中获得一张♠️️牌',
                        masaki_ranshou: '染手',
                        masaki_ranshou_info: '锁定技,你的摸牌阶段开始时,若你手牌中红色与黑色手牌的数量不同,你从牌堆中获得一张与数量更多的一边的颜色相同的牌',
                        masaki_qingse: '清色',
                        masaki_qingse_info: '大将技,当你上家的回合结束时,你可以弃置一张牌并从牌堆中获得一张与此牌颜色不同的牌',
                        masaki_mituzhijia: '迷途之家',
                        masaki_mituzhijia_info: '出牌阶段限一次,你可以弃置任意张牌并摸等量的牌,若你弃置的牌中有:<li>锦囊牌:你额外摸X张牌.<li>装备牌:你回复Y点体力.<li>基本牌:本回合你的手牌上限+Z.<br>(X为你本次以此法弃置的锦囊牌数,Y为本次以此法弃置的装备牌数,Z为本次以此法弃置的基本牌数.)',
                        masaki_yonglan: '慵懒',
                        masaki_yonglan_info: '锁定技,你与其他角色计算距离时相互+1',
                        masaki_sansi: '三思',
                        masaki_sansi_info: '觉醒技,你的准备阶段开始时,若当前游戏轮数大于你的体力值,你需回复一点体力或摸两张牌,扣减一点体力上限,失去技能〖慵懒〗并获得技能〖立直〗',
                        masaki_lizhi: '立直',
                        masaki_lizhi_info: '当你失去最后的手牌时,你可以弃置至多X名其他角色各一张牌.(X为你此次失去的手牌数)',
                        masaki_youying: '友引',
                        masaki_youying_info: '锁定技,当你受到一次属性伤害后,你令所有计算与你的距离时为1的其他角色失去一点体力',
                        masaki_xianfu: '先负',
                        masaki_xianfu_info: '当一名角色受到由【杀】造成的伤害后,若该角色为你,你可以摸一张牌.否则你可以对伤害来源使用一张【杀】',
                        masaki_fomie: '佛灭',
                        masaki_fomie_info: '锁定技,当你的体力值小于3时,你令所有角色于摸牌阶段的摸牌数量-1',
                        masaki_daan: '大安',
                        masaki_daan_info: '锁定技,当你未损失体力值时,你令所有角色于摸牌阶段的摸牌数量+1',
                        masaki_chikou: '赤口',
                        masaki_chikou_info: '若你于摸牌阶段的摸牌数小于2,你可以再摸一张牌',
                        masaki_liuyao: '六曜',
                        masaki_liuyao_info: '锁定技,你视为拥有技能〖先胜〗、〖友引〗、〖先负〗、〖佛灭〗、〖大安〗和〖赤口〗',
                        masaki_zhuili: '追立',
                        masaki_zhuili_info: '大将技,限定技.当一名角色进入濒死状态时,你可以弃置所有手牌(无牌则不弃)并将手牌摸至X张(X为你的体力上限+1且至多摸至7张),你对伤害来源造成一点伤害',
                    },
                };
                for (var i in MAtcmjsn.character) {
                    MAtcmjsn.character[i][4].push('ext:MA天才麻将少女/image/武将/' + i + '.jpg');
                }
                lib.config.all.characters.add('MAtcmjsn');
                lib.config.characters.add('MAtcmjsn');
                lib.translate.MAtcmjsn_character_config = '<img src="extension/MA天才麻将少女/image/拓展图标/MAtcmjsn.png" width="77" height="25">';
                return MAtcmjsn;
            });
        },
        help: { 麻将少女: '<ul><li>『大将技』:当你没有队友时可以触发此类型的技能,该类型的技能被视为锁定技.<li>『幺九牌』:点数不为2～8的牌.<li>『顺子』:三张牌的点数相连.<li>『刻子』:三张牌点数相同.<li>『吃』:三张牌的点数可以组成【顺子】.<li>『碰』:三张牌的点数可以组成【刻子】' },
        package: extensionInfo,
    };
});
