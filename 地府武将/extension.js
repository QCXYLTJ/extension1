import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '地府武将',
        content(config, pack) { },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '地府武将',
                    connect: true,
                    character: {
                        difu_chi: ['male', 'qun', 3, ['difu_地动', 'difu_山崩', 'difu_鬼魅'], ['des:山魑,传说中山林里害人的妖怪']],
                        difu_mei: ['female', 'qun', 3, ['difu_恩怨', 'difu_挥泪', 'difu_鬼惑'], ['des:木魅,一种老树幻化成的女子,靠着美色诱惑男性并吃掉他们的女妖']],
                        difu_wang: ['male', 'qun', 3, ['difu_落雷', 'difu_挥泪', 'difu_鬼魅'], ['des:水魍,一种赤黑色的水怪']],
                        difu_liang: ['male', 'qun', 3, ['difu_鬼火', 'difu_冥爆', 'difu_鬼魅'], ['des:石魉,一种山川木石之怪']],
                        difu_niutou: ['male', 'qun', 6, ['difu_暴敛', 'difu_蛮甲', 'difu_涅槃', 'difu_界枭首', 'difu_鬼魅'], ['des:牛头来源于佛家.牛头又叫阿傍,其形为牛头人身,手持钢叉,力能排山.据<铁城泥犁经>说:阿傍为人时,因不孝父母,死后在阴间为牛头人身,担任巡逻和搜捕逃跑罪人的衙役']],
                        difu_mamian: ['male', 'qun', 6, ['difu_诡计', 'difu_反馈', 'difu_绝策', 'difu_炼狱', 'difu_鬼魅'], ['des:马面也是冥府著名的勾魂使者.鬼城酆都,及各地城隍庙中,均有difu_牛头马面的形象']],
                        difu_heiwuchang: ['male', 'qun', 9, ['difu_诡计', 'difu_索命', 'difu_太平', 'difu_吸星', 'difu_鬼魅'], ['des:黑无常名为范无救(或称范无赦、范无咎),属阴.面容凶悍,身宽体胖,个小面黑,官帽上写有<天下difu_太平>四字,意为对违抗法令身负罪过者一概无赦,尊之曰<矮爷>或<黑爷>.对女性吸其阳魂,对男性散其阳魄']],
                        difu_baiwuchang: ['male', 'qun', 9, ['difu_绝策', 'difu_醉酒', 'difu_暴敛', 'difu_强征', 'difu_鬼魅'], ['des:白无常名为谢必安,属阳.时常满面笑容,身材高瘦,面色惨白,口吐长舌,其头上官帽写有<一见生财>四字,予感谢并对恭敬神明之人以好运,尊之曰<活无常>,<白爷>等.对男性吸其阴魂,对女性散其阴魄']],
                        difu_yecha: ['male', 'qun', 8, ['difu_魔道', 'difu_魔箭', 'difu_丹术', 'difu_八阵', 'difu_鬼魅'], ['des:佛经中一种形象丑恶的鬼,勇健暴恶,能食人,有的后受 伟大的佛陀 之教化而成为护法之神,列为天龙八部众之一']],
                        difu_luocha: ['female', 'qun', 8, ['difu_魔道', 'difu_驭兽', 'difu_魔炎', 'difu_毅重', 'difu_鬼惑'], ['des:相传原为南亚次大陆土著名称.自雅利安人征服印度后﹐凡遇恶人恶事﹐皆称罗刹﹐遂成恶鬼名']],
                        difu_re_niutou: ['male', 'qun', 8, ['xdifu_蛮击', 'difu_界枭首', 'difu_鬼魅'], ['des:牛头来源于佛家.牛头又叫阿傍,其形为牛头人身,手持钢叉,力能排山.据<铁城泥犁经>说:阿傍为人时,因不孝父母,死后在阴间为牛头人身,担任巡逻和搜捕逃跑罪人的衙役']],
                        difu_re_mamian: ['male', 'qun', 8, ['xdifu_施狱', 'xdifu_诡招', 'difu_鬼魅'], ['des:马面是冥府著名的勾魂使者.鬼城酆都,及各地城隍庙中,均有difu_牛头马面的形象']],
                        difu_re_heiwuchang: ['male', 'qun', 8, ['xdifu_吸星', 'xdifu_太平', 'difu_断魂', 'difu_鬼魅'], ['des:黑无常名为范无救(或称范无赦、范无咎),属阴.面容凶悍,身宽体胖,个小面黑,官帽上写有<天下difu_太平>四字,意为对违抗法令身负罪过者一概无赦,尊之曰<矮爷>或<黑爷>.对女性吸其阳魂,对男性散其阳魄']],
                        difu_re_baiwuchang: ['male', 'qun', 8, ['xdifu_暴敛', 'xdifu_强征', 'xdifu_迷醉', 'difu_鬼魅'], ['des:白无常名为谢必安,属阳.时常满面笑容,身材高瘦,面色惨白,口吐长舌,其头上官帽写有<一见生财>四字,予感谢并对恭敬神明之人以好运,尊之曰<活无常>,<白爷>等.对男性吸其阴魂,对女性散其阴魄']],
                        difu_huangfeng: ['male', 'qun', 3, ['difu_毒针', 'difu_冥虫', 'difu_鬼魅'], ['des:黄蜂是管理地上昆虫动物亡灵的冥帅,和豹尾、鸟嘴、鱼鳃并称<四大阴帅>']],
                        difu_yusai: ['female', 'qun', 3, ['difu_鬼吸', 'difu_暗潮', 'difu_鬼惑'], ['des:鱼鳃是管理水中鱼类动物亡灵的冥帅,和豹尾、鸟嘴、黄蜂并称<四大阴帅']],
                        difu_baowei: ['male', 'qun', 4, ['difu_隐煞', 'difu_恶力', 'difu_鬼魅'], ['des:豹尾是管理兽类动物亡灵的冥帅,和鸟嘴、鱼鳃、黄蜂并称<四大阴帅>']],
                        difu_niaozui: ['male', 'qun', 4, ['difu_病疑', 'difu_索穴', 'difu_鬼魅'], ['des:鸟嘴是管理天上鸟类动物亡灵的冥帅,和豹尾、鱼鳃、黄蜂并称<四大阴帅>']],
                        difu_riyeyoushen: ['male', 'qun', 15, ['difu_昼刹', 'difu_夜冢', 'difu_晦运', 'difu_断恶'], ['des:日夜游神,中国民间信仰的神仙之一.是日游神与夜游神的合称,又叫日夜游巡,原是四处游荡的凶神,后来则演变成东岳大帝、阎罗王、城隍爷等阴间神明的部下,分别于日间、夜间监督人间的善恶,故常被供奉于东岳庙、城隍庙等.或说甘柳将军即为日夜游神']],
                        difu_heibaiwuchang: ['male', 'qun', 18, ['difu_黑白无常difu_吸星', 'difu_黑白无常difu_太平', '黑白无常difu_迷醉', 'difu_黑白无常difu_强征', 'difu_鬼魅'], ['des:黑白无常,亦称无常.是中国传统文化中的一对神祇,也是最有名的鬼差.此二神手执脚镣手铐,专职缉拿鬼魂、协助赏善罚恶,也常为阎罗王、城隍、东岳大帝等冥界神明的部将. 白无常名为谢必安,属阳.时常满面笑容,身材高瘦,面色惨白,口吐长舌,其头上官帽写有<一见生财>四字,予感谢并对恭敬神明之人以好运,尊之曰<活无常>,<白爷>等.对男性吸其阴魂,对女性散其阴魄. 黑无常名为范无救(或称范无赦、范无咎),属阴.面容凶悍,身宽体胖,个小面黑,官帽上写有<天下difu_太平>四字,意为对违抗法令身负罪过者一概无赦,尊之曰<矮爷>或<黑爷>.对女性吸其阳魂,对男性散其阳魄. 因其在城隍麾下地位仅次于文武difu_判官,difu_牛头马面,枷爷,锁爷,故又得名<七爷>,<八爷>']],
                        difu_niutoumamian: ['male', 'qun', 12, ['difu_牛头马面枭首', 'difu_牛头马面difu_蛮击', 'difu_牛头马面difu_施狱', 'difu_牛头马面', 'difu_鬼魅'], ['des:difu_牛头马面并不拥有神位,他们只是民间迷信中次阴曹difu_地府的鬼卒,专门负责那些快要死去的人,但是鬼魂却迟迟不肯出来的魂魄,把魂魄强行勾出来']],
                        difu_guiwang: ['male', 'qun', 30, ['difu_疾咒', 'difu_啖噬', 'difu_赤虎', 'difu_拾忧', 'difu_鬼魅'], ['des:鬼王大帅>中的<王>字并不代表至高无上的身份,鬼王的塑像上身裸露,红发獠牙,手拿镇妖铃,狰狞凶恶,整个一副夜叉鬼模样.他与黑白无常、difu_牛头马面为伍,地位自然不会太高,但因其挂了个<王>字,地位应该高于一般鬼卒,大约是个像山大王那样的头领']],
                        difu_qinguangwang: ['male', 'qun', 4, ['difu_判官', 'difu_拘魂', 'difu_望乡'], ['des:第一殿秦广王蒋歆,东方玉宝皇上天尊化冥府一殿泰素妙广真君秦广大王,神居玄冥宫,二月初一日诞辰,位列震宫,尊居卯位,执掌风雷地狱,权衡霹雳神威,专司人间生死,统管吉凶.行善者作于青篇,作恶者标于黑簿,考察无私.专司大海之底,沃礁石外正黄泉黑路,统管幽冥吉凶、善人寿终,接引超升;功过两半者,送交第十殿发放,仍投入世间,男转为女,女转为男.恶多善少者,押赴殿右高台,名曰孽镜台,令之一望,照见在世之心好坏,随即批解第二殿,发狱受苦']],
                        difu_chujiangwang: ['male', 'qun', 4, ['difu_霜寒', 'difu_冰封', 'difu_肃杀'], ['des:第二殿楚江王历温,南方玄真万福天尊化冥府二殿阴德定休真君楚江大王,神居普明宫,三月初一日诞辰,位列离宫,尊居午位,执掌火医地狱,威专烈焰之权,专司大海之底,正南沃焦石下活大地狱,又名剥衣亭寒冰地狱,另设十六小地狱,凡在阳间伤人肢体、奸盗杀生者,推入此狱,另发入到十六小狱受苦,满期转解第三殿,加刑发狱']],
                        difu_songdiwang: ['male', 'qun', 4, ['difu_黑绳', 'difu_恩仇', 'difu_拔舌'], ['des:第三殿宋帝王余懃,西方太妙至极天尊化冥府三殿洞明昔静真君宋帝大王,神居纣绝宫,二月初八诞辰,位列兑宫,尊居酉位,执掌金刚地狱,威司考掠之权,专司大海之底,东南沃焦石下difu_黑绳大地狱,另设十六小狱,凡阳世忤逆尊长,教唆兴讼者,推入此狱,受倒吊、挖眼、刮骨之刑,刑满转解第四殿']],
                        difu_wuguanwang: ['male', 'qun', 4, ['difu_血池', 'difu_治妄', 'difu_公正'], ['des:第四殿五官王吕岱,北方玄上玉宸天尊化冥府四殿玄德五灵真君五官大王,神居太和宫,二月十八日诞辰,位居坎宫,尊居子位,执掌滨冷地狱,权衡冰雪之威,专司大海之底,正东沃焦石下合大地狱,又名剥剹difu_血池地狱,另设十六小地狱,凡世人抗粮赖租,交易欺诈者,推入此狱,另再判以小狱受苦,满日送解第五殿察核']],
                        difu_yanluowang: ['male', 'qun', 4, ['difu_铡刀', 'difu_铁面', 'difu_诛心'], ['des:第五殿阎罗王包拯,东北方度仙上圣天尊化冥府五殿最胜耀灵真君阎罗大王,神居纠纶宫,阎罗天子包,正月初八日诞辰,位列垦宫,尊居丑位,执掌镬汤地狱,威张煮溃之权,专司大海之底,东北沃焦石下叫唤大地狱,并十六difu_诛心小狱.前本居第一殿,因怜屈死,屡放还阳伸雪,降调此殿.凡解到此殿者,押赴difu_望乡台,令之闻见世上本家,因罪遭殃各事,随即推入此狱,细查曾犯何恶,再发入difu_诛心十六小狱,钩出其心,掷与蛇食,铡其身首(包公即善于用difu_铡刀),受苦满日,另发别殿']],
                        difu_bianchengwang: ['male', 'qun', 5, ['difu_雷咒', 'difu_雷护', 'difu_雷诛'], ['des:第六殿卞城王毕元宾,东南方好生度命天尊化冥府六殿宝肃昭成真君卞城大王,神居明晨宫,三月初八日诞辰,位列巽官,尊居幽府,执掌铜柱地狱,威专足履之刑,专司大海之底,正北沃焦石下大叫唤大地狱,及枉死城,另设十六小地狱.忤逆不孝者,被两小鬼用锯分尸.凡世人怨天尤地,对北溺便涕泣者,发入此狱.查所犯事件,亦要受到铁锥打、火烧舌之刑罚.再发小狱受苦,满日转解第七殿,再查有无别恶']],
                        difu_taishanwang: ['male', 'qun', 5, ['difu_苦酒', 'difu_服毒', 'difu_热恼'], ['des:第七殿泰山王董和,西南方太灵虚皇天尊化冥府七殿等观明理真君泰山大王,神居神华宫,三月二十七日诞辰,位列坤宫,尊居泉曲,执掌屠割地狱,威权刀割之刑,专司大海之底,西北沃焦石下difu_热恼大地狱,又名碓磨肉酱地狱,另设十六小地狱.凡阳世取骸合药、离人至戚者,发入此狱.再发小狱.受苦满日,转解第八殿,收狱查治.凡盗窃、诬告、敲诈、谋财害命者,均将遭受下油锅之刑罚']],
                        difu_zhuanlunwang: ['male', 'qun', 6, ['difu_魔道', 'difu_往生', 'difu_反噬', 'difu_轮回'], ['des:第十殿转轮王薛礼,下方真皇洞神天尊化冥府十殿五华威灵真君轮转大王,神居肃英宫,四月十七日诞辰,位尊幽都,名尊十帝,执掌罗酆之府,专司大海之底,沃礁石外正东直对世界五浊,司掌各殿解到鬼魂,分别善恶,核定等级,发四大部洲投生.男女寿夭,富贵贫贱,逐名详细开载,每月汇知第一殿注册.凡有作孽极恶之鬼,着令更变卵胎湿化,朝生暮死,罪满之后,再复人生,投胎蛮夷之地.凡发往投生者,先令押交孟婆神,醧忘台下,灌饮迷汤,使忘前生之事']],
                        difu_pingdengwang: ['male', 'qun', 5, ['difu_锁足', 'difu_阿鼻', 'difu_平等'], ['des:第九殿difu_平等王陆游,上方玉虚明皇天尊化冥府九殿无上正度真君difu_平等大王,神居七非宫,四月初八日诞辰,敕合乾元,德隆坤域,执掌普掠地狱,专司大海之底,西南沃焦石下酆都城铁网difu_阿鼻大地狱,另设十六小狱.凡阳世杀人放火、斩绞正法者,解到本殿,用空心铜桩,链其手足相抱,煽火焚烧,烫烬心肝,随发difu_阿鼻地狱受刑.直到被害者个个投生,方准提出,解交第十殿发生六道(天道、人道、地道、阿修罗道、地狱道、畜生道)']],
                        difu_dizangwang: ['male', 'qun', 8, ['difu_不佛', 'boss_wuliang', 'difu_大愿', 'difu_谛听'], ['des:地藏王即地藏菩萨.地藏菩萨梵名乞叉底鹐沙.据<地藏十轮经>讲,由于此菩萨<安忍不动如大地,静虑深密如秘藏>,所以称为地藏王']],
                        difu_mengpo: ['female', 'qun', 7, ['difu_熬汤', 'difu_云飓', 'difu_拾忧', 'difu_往事', 'difu_鬼惑', 'difu_忘魂'], ['des:孟婆神孟姜女,常驻在忘川河黄泉路奈何桥旁,醧忘台为了能忘记这些痛苦万分的记忆,熬制了能使人忘记记忆的孟婆汤.她在奈何桥畔熬制孟婆汤,让参与difu_轮回的阴魂们忘记前世的一切.高大如方丈,四周的廊房有一百零八间.有一条通道,通向东方,仅一尺四寸宽.所有奉令押解到的男女鬼魂,在各廊房中,都有杯子,招各鬼饮下此汤,多饮少饮不论']],
                        difu_fengdudadi: ['male', 'qun', 30, ['difu_地府', 'difu_震怒', 'difu_刑判', 'difu_殿威'], ['des:酆都大帝又称酆都北阴大帝.difu_地府冥界的最高神灵,主管冥司.是东岳大帝的部下酆都大帝,又称北阴大帝、北太帝君、酆都北阴天子,属于统归五岳大帝管辖之下的阴间最高神,也是道教尊神中的五方鬼帝和十殿阎罗的上司,他的职责是统管酆都之下的罗酆六天的六天鬼神.他的生日是九月九日.上清派宗师陶弘景<真灵位业图>说其任期是三千年,任期一到即改任. 他所管辖区域是酆都,即地狱,内分有六官,其专责处阴间事物.古语说:十恶不赦及大奸大恶的人及鬼怪魑魅等都要关进此地酆都地狱,永不能超生天界']],
                        difu_dushiwang: ['male', 'qun', 5, ['difu_炙焚', 'difu_热闷', 'difu_火刑'], ['des:第八殿都市王黄中庸,西北方difu_无量太华天尊化冥府八殿飞魔衍庆真君都市大王,神居碧真宫,四月初一日诞辰,位列乾宫,尊居阴府,执掌火车地狱,威司运转之权,专司大海之底,正西沃焦石下大热大恼大地狱,又名恼闷锅地狱,另设十六小地狱.凡在世不孝,使父母翁姑愁闷烦恼者,掷入此狱.再交各小狱加刑,受尽痛苦,解交第十殿,改头换面,永为畜类']],
                        difu_hanba: ['female', 'qun', 12, ['difu_焚世', 'difu_炙日', 'difu_心悸', 'difu_鬼惑'], ['des:旱魃,传说中能引起旱灾的怪物,乡村中认为是死后一百天内的死人所变.变为旱魃的死人尸体不腐烂,坟上不长草,坟头渗水,旱魃鬼会夜间往家里挑水.只有烧了旱魃,天才会下雨']],
                    },
                    skill: {
                        difu_血池: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('difu_血池'), '令一名其他角色失去两点体力,你回复一点体力', function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'loseHp');
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].loseHp(2);
                                    player.recover();
                                }
                            },
                        },
                        difu_恩仇: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.isEnemiesOf(player); //QQQ
                            },
                            logTarget: 'source',
                            content() {
                                trigger.source.loseHp(num);
                            },
                            ai: {
                                maixie_defend: true,
                            },
                        },
                        difu_望乡: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        player.line(current);
                                        current.discard(current.getCards('he'));
                                    }
                                    event.redo();
                                }
                            },
                        },
                        difu_诛心: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【difu_诛心】:请选择一名角色,令其受到5点伤害.', function (card, player, target) {
                                        return (
                                            target.isEnemiesOf(player) != player &&
                                            !game.hasPlayer(function (current) {
                                                return current.isEnemiesOf(player) && current != player && current != target && current.hp < target.hp;
                                            })
                                        );
                                    })
                                    .set('forceDie', true).ai = function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    };
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    target.damage(5);
                                }
                            },
                        },
                        difu_雷诛: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        player.line(current, 'thunder');
                                        current.damage(2, 'thunder');
                                    }
                                    event.redo();
                                }
                            },
                        },
                        difu_火刑: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        player.line(current, 'fire');
                                        current.damage(2, 'fire');
                                    }
                                    event.redo();
                                }
                            },
                        },
                        difu_平等: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                'step 0';
                                var list = game.filterPlayer(function (current) {
                                    return current != player && current.isEnemiesOf(player);
                                    !game.hasPlayer(function (current2) {
                                        return current2.hp > current.hp;
                                    });
                                });
                                if (list.length) {
                                    var target = list.randomGet();
                                    player.line(target);
                                    target.damage(6).nature = lib.linked.randomGet();
                                } else event.finish();
                                ('step 1');
                                var list = game.filterPlayer(function (current) {
                                    return (
                                        current != player &&
                                        !game.hasPlayer(function (current2) {
                                            return current2.hp > current.hp;
                                        })
                                    );
                                });
                                if (list.length) {
                                    var target = list.randomGet();
                                    player.line(target);
                                    target.damage(3).nature = lib.linked.randomGet();
                                }
                            },
                        },
                        difu_忘魂: {
                            audio: 'ext:地府武将/audio:difu_忘魂',
                            forced: true,
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            content() {
                                _status.shidianyanluo_mengpodie = true;
                                var list = player.getEnemies();
                                if (list.length) {
                                    for (var x = 0; x < list.length; x++) {
                                        list[x].removeSkill('boss_wangshi2');
                                    }
                                    var ran1 = list.randomGet(); //第一个角色
                                    list.remove(ran1); //移除
                                    var skills1 = ran1.getSkills(true, false);
                                    if (skills1.length) {
                                        for (var i = 0; i < skills1.length; i++) {
                                            if (get.skills[i] || lib.skill[skills1[i]].charlotte || !lib.translate[skills1[i] + '_info'] || lib.skill[skills1[i]].zhuSkill == true) {
                                                skills1.splice(i--, 1);
                                            }
                                        } //排除技能,随机失去一个可以失去的技能
                                        if (skills1.length) {
                                            skills1 = skills1.randomGet();
                                            ran1.disableSkill('boss_wanghun', skills1);
                                            game.log(ran1, '失去了', skills1);
                                        } else {
                                            game.log(ran1, '没有技能可失去');
                                        }
                                    }
                                    if (list.length) {
                                        var ran2 = list.randomGet(); //第二个角色
                                        list.remove(ran2); //移除
                                        var skills2 = ran2.getSkills(true, false);
                                        if (skills2.length) {
                                            for (var i = 0; i < skills2.length; i++) {
                                                if (get.skills[i] || lib.skill[skills2[i]].charlotte || !lib.translate[skills2[i] + '_info'] || lib.skill[skills2[i]].zhuSkill == true) {
                                                    skills2.splice(i--, 1);
                                                }
                                            } //排除技能,随机失去一个可以失去的技能
                                            if (skills2.length) {
                                                skills2 = skills2.randomGet();
                                                ran2.disableSkill('boss_wanghun', skills2);
                                                game.log(ran2, '失去了', skills2);
                                            } else {
                                                game.log(ran2, '没有技能可失去');
                                            }
                                        }
                                    }
                                    //添加两张回魂
                                    if (get.mode() == 'boss') {
                                        var card1 = game.createCard('boss_mengpohuihun', 'heart', 3, null);
                                        var card2 = game.createCard('boss_mengpohuihun', 'club', 4, null);
                                        var a = [];
                                        if (ui.cardPile.childElementCount < 3) {
                                            game.boss.getCards(4);
                                        }
                                        for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                            a.push(i);
                                        }
                                        ui.cardPile.insertBefore(card1, ui.cardPile.childNodes[a.randomGet()]);
                                        a.push(a.length);
                                        ui.cardPile.insertBefore(card2, ui.cardPile.childNodes[a.randomGet()]);
                                        game.log('牌堆中添加了', card1, card2);
                                        game.updateRoundNumber();
                                    }
                                }
                            },
                        },
                        difu_冥虫: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].isFriendsOf(player)) return true;
                                }
                                return false;
                            },
                            content() {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i] == player) continue;
                                    if (game.players[i].isFriendsOf(player)) {
                                        player.line(game.players[i]);
                                        game.players[i].addSkill('difu_毒针');
                                        game.log(game.players[i], '获得了技能');
                                        break;
                                    }
                                }
                            },
                        },
                        difu_轮回: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    player.hp <= 2 &&
                                    game.hasPlayer(function (current) {
                                        return current != player && current.hp > 2;
                                    })
                                );
                            },
                            content() {
                                var list = game.filterPlayer(function (current) {
                                    return current != player && current.hp > 2;
                                });
                                if (list.length) {
                                    var target = list.randomGet();
                                    player.line(target);
                                    var hp1 = player.hp;
                                    var hp2 = target.hp;
                                    player.hp = Math.min(player.maxHp, hp2);
                                    target.hp = Math.min(target.maxHp, hp1);
                                    player.update();
                                    target.update();
                                    game.log(player, '和', target, '交换了体力值');
                                }
                            },
                        },
                        difu_公正: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('j') > 0;
                            },
                            content() {
                                player.discard(player.getCards('j'), true);
                                player.hp = player.maxHp;
                            },
                        },
                        difu_无量: {
                            audio: 'ext:地府武将/audio:true',
                            forced: true,
                            trigger: {
                                global: 'gameDrawAfter',
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin', 'enterGame'],
                            },
                            filter(event, player, name) {
                                if (name == 'gameDrawAfter' || name == 'enterGame') {
                                    return true;
                                } else if (name == 'phaseZhunbeiBegin') {
                                    return player.hp < 3;
                                }
                                return true;
                            },
                            content() {
                                var name = event.triggername;
                                if (name == 'phaseZhunbeiBegin') {
                                    player.recover(3 - player.hp);
                                    return;
                                } else {
                                    player.draw(name == 'gameDrawAfter' || name == 'enterGame' ? 3 : 2);
                                }
                            },
                        },
                        difu_大愿: {
                            trigger: {
                                global: 'judge',
                            },
                            audio: 'ext:地府武将/audio:true',
                            forced: true,
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
                                    for (var i = 1; i < 14; i++) {
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
                                    if (!event.logged) {
                                        event.logged = true;
                                    }
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
                        difu_炙焚: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('difu_炙焚'), '对一名其他角色造成两点火焰伤害', function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'fire');
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage(2, 'fire');
                                }
                            },
                        },
                        difu_雷咒: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('difu_雷咒'), '对一名其他角色造成两点雷电伤害', function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage(2, 'thunder');
                                }
                            },
                        },
                        difu_霜寒: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('difu_霜寒'), '对一名其他角色造成一点寒冰伤害', function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'ice');
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage('ice');
                                }
                            },
                        },
                        difu_肃杀: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                var list = game.players.slice(0);
                                list.remove(player);
                                if (list.length) {
                                    list.sort(lib.sort.seat);
                                    player.line(list);
                                    for (var i = 0; i < list.length; i++) {
                                        list[i].damage('ice');
                                    }
                                }
                            },
                        },
                        difu_冰封: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            logTarget: 'source',
                            content() {
                                trigger.source.turnOver();
                                trigger.source.chooseToDiscard('he', true, 3);
                            },
                        },
                        difu_拘魂: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('boss_juhun'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].turnOver();
                                    result.targets[0].link();
                                }
                            },
                        },
                        difu_驭兽: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                var list = game.filterPlayer(function (current) {
                                    return player.canUse('nanman', current) && current.isEnemiesOf(player);
                                });
                                list.sort(lib.sort.seat);
                                player.useCard({ name: 'nanman' }, list);
                            },
                        },
                        difu_铡刀: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            logTarget(event) {
                                return event.player;
                            },
                            content() {
                                trigger.num += 2;
                            },
                            ai: {
                                unequip: true,
                            },
                        },
                        difu_醉酒: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.parent.name == 'sha';
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        difu_炼狱: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        player.line(current, 'fire');
                                        current.damage('fire');
                                    }
                                    event.redo();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        difu_不佛: {
                            audio: 'ext:地府武将/audio:true',
                            forced: true,
                            trigger: {
                                player: ['damageBegin4', 'phaseZhunbeiBegin'],
                            },
                            filter(event, player, name) {
                                if (name == 'damageBegin4') {
                                    return event.num && event.num > 1;
                                }
                                return game.hasPlayer(function (target) {
                                    return player != target && get.distance(player, target) <= 1;
                                });
                            },
                            content() {
                                var name = event.triggername;
                                if (name == 'damageBegin4') {
                                    trigger.num--;
                                } else {
                                    game.countPlayer(function (target) {
                                        if (player != target && get.distance(player, target) <= 1) {
                                            target.damage(1, player, 'fire');
                                        }
                                    });
                                }
                            },
                        },
                        difu_判官: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('difu_判官'), 'hes', function (card) {
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
                                            return result - get.value(card) / 2;
                                        } else {
                                            return -result - get.value(card) / 2;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'difu_判官', 'highlight', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (trigger.player.judging[0].clone) {
                                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                        game.broadcast(function (card) {
                                            if (card.clone) {
                                                card.clone.classList.remove('thrownhighlight');
                                            }
                                        }, trigger.player.judging[0]);
                                        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                    }
                                    player.gain(trigger.player.judging[0], 'gain2');
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                            },
                            ai: {
                                rejudge: true,
                                threaten: 1,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        difu_服毒: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'tao' && event.player != player && game.players.length > 2;
                            },
                            content() {
                                var enemies = player.getEnemies();
                                var target = enemies.randomGet();
                                var enemies = player.getEnemies();
                                target.loseHp(2);
                            },
                        },
                        difu_苦酒: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.isEnemiesOf(player);
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.loseHp();
                                ('step 1');
                                trigger.player.useCard({ name: 'jiu' }, trigger.player);
                            },
                        },
                        difu_治妄: {
                            audio: 'ext:地府武将/audio:true',
                            derivation: 'boss_zhiwang_planetarian',
                            trigger: {
                                global: 'gainEnd',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.isEnemiesOf(player);
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                var evt = trigger.getParent('boss_zhiwang');
                                if (evt && evt.name == 'boss_zhiwang') {
                                    trigger.player.uninit();
                                    trigger.player.init('sunce');
                                }
                                var hs = trigger.player.getCards('h');
                                if (hs.length) {
                                    trigger.player.discard(hs.randomGet(), true, 2);
                                }
                            },
                            subSkill: {
                                planetarian: {
                                },
                            },
                        },
                        difu_往生: {
                            audio: 'ext:地府武将/audio:difu_往生',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                var name = ['nanman', 'wanjian'].randomGet();
                                player.useCard(
                                    { name: name },
                                    game.filterPlayer(function (current) {
                                        return player.canUse({ name: name }, current) && current.isEnemiesOf(player);
                                    }),
                                    'noai'
                                );
                            },
                        },
                        difu_反噬: {
                            auduo: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                if (player.hasSkill('boss_zlfanshi_terra')) {
                                    var list = game.players.slice(0);
                                    list.remove(player);
                                    if (list.length) {
                                        var enemies = player.getEnemies();
                                        var target = enemies.randomGet();
                                        var enemies = player.getEnemies();
                                        target.damage(2);
                                    }
                                } else player.addTempSkill('boss_zlfanshi_terra');
                            },
                        },
                        difu_锁足: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        current.link();
                                    }
                                    event.redo();
                                }
                            },
                        },
                        difu_阿鼻: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.num > 0 && event.source.isEnemiesOf(player); //QQQ
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget(event, player) {
                                return event.source;
                            },
                            content() {
                                trigger.source.damage(trigger.num, 'nocard').nature = ['fire', 'thunder'].randomGet();
                            },
                            ai: {
                                maixie_defend: true,
                            },
                        },
                        difu_铁面: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                target: 'useCardToTarget',
                                player: 'addJudgeBefore',
                            },
                            forced: true,
                            _priority: 15,
                            preHidden: true,
                            check(event, player) {
                                return event.name == 'addJudge' || (event.card.name != 'chiling' && get.effect(event.target, event.card, event.player, player) < 0);
                            },
                            filter(event, player) {
                                return get.type(event.card, 'trick', 'sha') == 'trick' && 'sha' && get.color(event.card) == 'black';
                            },
                            content() {
                                if (trigger.name == 'addJudge') {
                                    trigger.cancel();
                                    var owner = get.owner(trigger.card);
                                    if (owner && owner.getCards('hej').includes(trigger.card)) owner.lose(trigger.card, ui.discardPile);
                                    else game.cardsDiscard(trigger.card);
                                    game.log(trigger.card, '进入了弃牌堆');
                                } else trigger.parent.targets.remove(player);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card, 'trick') == 'trick' && get.color(card) == 'black') return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        difu_热闷: {
                            equipSkill: true,
                            trigger: {
                                target: ['useCardToBefore'],
                            },
                            forced: true,
                            _priority: 6,
                            audio: 'ext:地府武将/audio:true',
                            filter(event, player) {
                                if (!player.isEmpty('equip2')) return false;
                                if (event.card.name == 'nanman') return true;
                                if (event.card.name == 'wanjian') return true;
                                return event.card.name == 'sha' && !get.nature(event.card);
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (!target.isEmpty('equip2')) return;
                                        if (card.name == 'nanman' || card.name == 'wanjian') return 'zerotarget';
                                        if (card.name == 'sha') {
                                            var equip1 = player.getEquip(1);
                                            if (equip1 && equip1.name == 'zhuque') return 1.9;
                                            if (!card.nature) return 'zerotarget';
                                        }
                                    },
                                },
                            },
                        },
                        difu_雷护: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                nofire: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'thunderDamage')) return 'zerotarget';
                                    },
                                },
                            },
                        },
                        difu_绝策: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                global: 'loseAfter',
                            },
                            check(event, player) {
                                return get.damageEffect(event.player, player, player) > 0;
                            },
                            filter(event, player) {
                                if (event.player.countCards('h')) return false;
                                if (_status.currentPhase != player) return false;
                                if (event.player == player) return false;
                                return event.hs && event.hs.length;
                            },
                            content() {
                                player.line(trigger.player, 'green');
                                trigger.player.damage();
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        difu_迷醉: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                source: 'damageAfter',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                if (!event.card) return false;
                                if (get.color(event.card) == 'red' && event.card.name == 'sha') return true;
                                if (event.card.nature && event.card.name == 'sha') return true;
                                return false;
                            },
                            content() {
                                player
                                    .discardPlayerCard(trigger.player, 2, 'he', get.prompt('difu_迷醉', trigger.player), true)
                                    .set('ai', function (button) {
                                        if (!_status.event.att) return 0;
                                        if (get.position(button.link) == 'e') {
                                            if (get.subtype(button.link) == 'equip2') return 2 * get.value(button.link);
                                            return get.value(button.link);
                                        }
                                        return 1;
                                    })
                                    .set('att', get.attitude(player, trigger.player) <= 0);
                            },
                        },
                        difu_拔舌: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        player.line(current);
                                        current.loseHp();
                                    }
                                    event.redo();
                                }
                            },
                        },
                        difu_黑绳: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.isEnemiesOf(player) && (current.getEquip(3) || current.getEquip(4) || current.getEquip(6));
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('difu_黑绳'), '对一名装备区有坐骑牌的敌方角色造成1点伤害', function (card, player, target) {
                                        return target.isEnemiesOf(player) && (target.getEquip(3) || target.getEquip(4) || target.getEquip(6));
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.damage();
                                }
                            },
                        },
                        difu_魔道: {
                            audio: 'ext:地府武将/audio:difu_魔道',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(4);
                            },
                        },
                        difu_谛听: {
                            audio: 'ext:地府武将/audio:true',
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                            init(player) {
                                player.$disableEquip('equip3');
                                player.$disableEquip('equip4');
                            },
                            enable: 'phaseUse',
                            position: 'h',
                            filter(event, player) {
                                return player.countCards('he', { subtype: ['equip3', 'equip4', 'equip6'] }) > 0;
                            },
                            filterCard(card) {
                                return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4' || get.subtype(card) == 'equip6';
                            },
                            check(card) {
                                if (_status.event.player.isDisabled(get.subtype(card))) return 5;
                                return 3 - get.value(card);
                            },
                            content() {
                                player.draw();
                            },
                            discard: false,
                            visible: true,
                            loseTo: 'discardPile',
                            prompt: '将一张坐骑牌置入弃牌堆并摸一张牌',
                            delay: 0.5,
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                                game.log(player, '将', cards, '置入了弃牌堆');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        difu_蛮击: {
                            audio: 'ext:地府武将/audio:true',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.targets.length == 1 && event.card.name == 'sha') return true;
                                return false;
                            },
                            content() {
                                var target = trigger.target;
                                ('step 0');
                                player
                                    .discardPlayerCard(target, 1, 'h', get.prompt('difu_蛮击', target), true)
                                    .set('ai', function (button) {
                                        if (!_status.event.att) return 0;
                                        if (get.position(button.link) == 'e') {
                                            if (get.subtype(button.link) == 'equip2') return 2 * get.value(button.link);
                                            return get.value(button.link);
                                        }
                                        return 1;
                                    })
                                    .set('att', get.attitude(player, target) <= 0);
                                ('step 1');
                                if (result.links[0].name == 'sha') {
                                    trigger.parent.baseDamage++;
                                } else {
                                    player.gain(result.links[0], 'gain');
                                }
                            },
                        },
                        difu_施狱: {
                            audio: 'ext:地府武将/audio:true',
                            forced: true,
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                event.cards = [];
                                event.num = 0;
                                ('step 1');
                                var card = get.cardPile(function (card) {
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (card.suit == event.cards[i].suit) return false;
                                    }
                                    return true;
                                });
                                if (card) event.cards.push(card);
                                event.num++;
                                ('step 2');
                                if (event.num < 4) event.goto(1);
                                ('step 3');
                                player.gain(event.cards, 'gain2');
                            },
                        },
                        difu_诡招: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'useCardBegin',
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (_status.currentPhase != player) return false;
                                var type = get.type(event.card, 'trick');
                                return (
                                    player.getHistory('custom', function (evt) {
                                        return evt.Boss_Guizhao_name == type;
                                    }).length == 0
                                );
                            },
                            content() {
                                var type = get.type(trigger.card, 'trick');
                                player.draw();
                                player.getHistory('custom').push({ Boss_Guizhao_name: type });
                            },
                        },
                        xdifu_铁面: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && get.color(event.card) == 'red';
                            },
                            content() {
                                var num = game.numRandom();
                                if (num <= 75) {
                                    game.log('difu_铁面', '生效,取消成为目标.');
                                    trigger.parent.excluded.add(player);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        difu_隐煞: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                global: 'phaseUseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player && event.player.isEnemiesOf(player) && event.player.countCards('h') > event.player.maxHp) return true;
                                return false;
                            },
                            content() {
                                player.addTempSkill('difu_隐煞_1');
                            },
                            subSkill: {
                                1: {
                                    charlotte: true,
                                    mark: true,
                                    intro: { content: '不能成为【杀】的目标' },
                                    mod: {
                                        targetEnabled(card, player, target, now) {
                                            if (card.name == 'sha') return false;
                                        },
                                    },
                                },
                            },
                        },
                        difu_恶力: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                source: 'damageBegin',
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                if (event.player && event.player.isEnemiesOf(player)) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    var color = get.color(card);
                                    if (color == 'red') return 1;
                                    return 0;
                                }).judge2 = function (result) {
                                    var color = get.color(result.card);
                                    if (color != undefined) return (result.bool = true);
                                    return (result.bool = false);
                                };
                                ('step 1');
                                if (get.color(result.card) == 'red') {
                                    trigger.num++;
                                } else {
                                    player.addTempSkill('rewansha'); //QQQ
                                }
                            },
                        },
                        difu_焚世: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h') == player.hp) return false;
                                return true;
                            },
                            content() {
                                player.storage.FenshiName = [];
                                if (player.countCards('h') < player.hp) {
                                    player.draw(player.hp - player.countCards('h'));
                                } else {
                                    var num = player.countCards('h') - player.hp;
                                    if (num > 0) {
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i] == player) continue;
                                            if (game.players[i].isEnemiesOf(player)) {
                                                player.storage.FenshiName.add(game.players[i]);
                                            }
                                        }
                                        var lengthStor = player.storage.FenshiName;
                                        for (var i = 0; i < lengthStor.length; i++) {
                                            if (i == lengthStor.length - 1 && num > 0) {
                                                lengthStor[i].damage('fire', num);
                                                num -= num;
                                            } else {
                                                var randnum = game.randomNum(num, 0);
                                                if (randnum == 0) continue;
                                                lengthStor[i].damage('fire', randnum);
                                                num -= randnum;
                                            }
                                        }
                                    }
                                }
                            },
                        },
                        difu_炙日: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            forced: true,
                            popup: false,
                            multitarget: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick' && get.color(event.card) == 'red' && event.player.isEnemiesOf(player);
                            },
                            content() {
                                player.draw(3);
                            },
                        },
                        difu_心悸: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'loseAfter',
                            },
                            filter(event, player) {
                                if (event.type != 'discard' || _status.currentPhase == player) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                _status.currentPhase.damage();
                            },
                        },
                        difu_毒针: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.targets.length != 1 || event.getParent('phaseUse').player != player || event.target == player || event.target.isFriendsOf(player)) return false;
                                return true;
                            },
                            content() {
                                if (trigger.target.countCards('e') >= 1) {
                                    trigger.target.discard(trigger.target.getCards('e').randomGet());
                                } else {
                                    trigger.target.discard(trigger.target.getCards('h').randomGet());
                                }
                            },
                        },
                        difu_病疑: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (event.name == 'gain' && event.player == player) return false;
                                var evt = event.getl(player);
                                return evt && evt.hs && evt.hs.length;
                            },
                            content() {
                                player.draw(6);
                            },
                        },
                        difu_索穴: {
                            audio: 'ext:地府武将/audio:true',
                            usable: 1,
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.targets.length != 1 || event.card.name == 'sha') return false;
                                return true;
                            },
                            content() {
                                var target = trigger.target;
                                ('step 0');
                                if (target.countCards('h') > player.countCards('h')) {
                                    event.goto(1);
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                player.draw(target.countCards('h') - player.countCards('h'));
                                event.finish();
                                ('step 2');
                                player.chooseToDiscard('h', get.prompt('difu_索穴', trigger.target), '是否弃置一张手牌令其无法响应该杀').set('ai', (card) => -get.attitude(player, trigger.target) - get.value(card)); //QQQ
                                ('step 3');
                                if (result.bool) {
                                    trigger.directHit.addArray(game.players);
                                }
                            },
                        },
                        difu_地府: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player || event.player.isFriendsOf(player)) return false;
                                return event.player.countCards('h') > event.player.maxHp;
                            },
                            content() {
                                var num = trigger.player.countCards('h') - trigger.player.maxHp;
                                trigger.player.chooseToDiscard(num, true, 'h');
                            },
                        },
                        difu_震怒: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.Zhennu == undefined) player.storage.Zhennu = [];
                                return player.storage.Zhennu.length == 0 && player.hp <= 8;
                            },
                            content() {
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse') {
                                    evt.skipped = true;
                                }
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name == 'phase') {
                                    evt.finish();
                                }
                                player.markSkillCharacter('difu_震怒', player, 'difu_震怒', '已经生效'); //QQQ
                                player.storage.Zhennu.push('true');
                                player.draw(4);
                                player.phase('nodelay');
                            },
                        },
                        difu_刑判: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player.judge(function (card) {
                                    if (get.color(card) == 'red') return 2;
                                    return 1;
                                }).forResult();
                                if (get.color(result.card) == 'red') {
                                    var num = -1,
                                        Q;
                                    for (var i of game.players) {
                                        if (i.countCards('h') > num && i != player) {
                                            num = i.countCards('h');
                                            Q = i;
                                        }
                                    }
                                    var num = Math.ceil(Q.countCards('h') / 2);
                                    if (num > 0) {
                                        const result1 = await Q.chooseCard('h', true, '交给' + get.translation(player) + num + '张牌', num)
                                            .set('ai', (card) => -get.value(card))
                                            .forResult();
                                        if (result1.bool) {
                                            player.gain(result1.cards, Q, 'giveAuto');
                                        }
                                    }
                                } else {
                                    var Q = game.players.reduce((Q, E) => (E.hp > Q.hp ? E : Q), { hp: -Infinity }); //QQQ
                                    Q.loseHp();
                                }
                            },
                        },
                        difu_殿威: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    if (i.countCards('e')) {
                                        i.discard(i.getCards('e').randomGet());
                                    } else {
                                        player.useCard({ name: 'sha' }, i);
                                    }
                                }
                            },
                        },
                        difu_鬼吸: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    var suit = card.suit;
                                    if (suit == 'heart') return 2;
                                    return 0;
                                }).judge2 = function (result) {
                                    var suit = result.card.suit;
                                    if (suit == 'heart') {
                                        return (result.bool = true);
                                    } else {
                                        return (result.bool = false);
                                    }
                                };
                                ('step 1');
                                if (result.card.suit == 'heart') {
                                    player.recover();
                                } else {
                                    player.loseHp();
                                }
                            },
                        },
                        difu_暗潮: {
                            audio: 'ext:地府武将/audio:true',
                            marktext: 'difu_暗潮',
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var num = player.countMark('difu_暗潮');
                                    if (num == undefined) num = 0;
                                    return '摸牌阶段多摸' + num + '张牌,造成的伤害增加+' + num + '点';
                                },
                            },
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return true;
                                if (event.player.isEnemiesOf(player)) return false;
                                return true;
                            },
                            content() {
                                var numMark = trigger.player.countMark();
                                if (trigger.player.getStat('damage') && numMark != undefined) {
                                    trigger.player.removeMark('difu_暗潮', numMark);
                                } else {
                                    trigger.player.addMark('difu_暗潮');
                                }
                            },
                            group: ['difu_暗潮_Draw', 'difu_暗潮_Damage'],
                            subSkill: {
                                Draw: {
                                    trigger: {
                                        global: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var numMark = event.player.countMark('difu_暗潮');
                                        if (event.player == player && numMark) return true;
                                        if (event.player.isEnemiesOf(player)) return false;
                                        return numMark;
                                    },
                                    content() {
                                        var numMark = trigger.player.countMark('difu_暗潮');
                                        trigger.num += numMark;
                                    },
                                },
                                Damage: {
                                    trigger: {
                                        global: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        if (event.source == undefined) return false;
                                        if (event.source.isEnemiesOf(player)) return false;
                                        if (event.player.isFriendsOf(player)) return false;
                                        var numMark = event.source.countMark('difu_暗潮');
                                        if (event.source == player && numMark) return true;
                                        return numMark;
                                    },
                                    forced: true,
                                    content() {
                                        var numMark = trigger.source.countMark('difu_暗潮');
                                        trigger.num += numMark;
                                    },
                                    ai: {
                                        damageBonus: true,
                                    },
                                },
                            },
                        },
                        difu_断魂: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                if (player.countCards('h') > 1) return false;
                                return !event.card || event.card.name != 'sha';
                            },
                            forced: true,
                            content() {
                                trigger.num--;
                            },
                        },
                        difu_熬汤: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.isEnemiesOf(player) && current != player;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.target = [];
                                game.countPlayer(function (current) {
                                    if (current.isEnemiesOf(player) && current != player) event.target.push(current);
                                });
                                ('step 1');
                                if (event.target.length) {
                                    event.mubiao = event.target.randomGet();
                                    event.mubiao.storage.snjs_boss_zhuoguimpat = player;
                                    event.mubiao.storage.snjs_boss_zhuoguimpat1 = false;
                                    event.mubiao.addSkill('difu_熬汤_xiaoguo');
                                }
                            },
                            subSkill: {
                                xiaoguo: {
                                    init(player, skill) {
                                        var skills = player.getSkills(true, false);
                                        for (var i = 0; i < skills.length; i++) {
                                            var info = get.info(skills[i]);
                                            if (skills[i] == 'chanyuan' || skills[i] == 'rechanyuan' || skills[i] == 'difu_熬汤_xiaoguo' || skills[i] == 'snjs_boss_zhuogui2' || skills[i] == 'snjs_boss_zhuogui3' || skills[i] == 'snjs_boss_zhuogui3x' || skills[i] == 'snjs_boss_zhuogui4' || info.charlotte) {
                                                skills.splice(i--, 1);
                                            }
                                        }
                                        player.disableSkill(skill, skills);
                                    },
                                    onremove(player, skill) {
                                        player.enableSkill(skill);
                                        delete player.storage.snjs_boss_zhuoguimpat;
                                    },
                                    intro: {
                                        name: '遗忘',
                                        content(storage, player, skill) {
                                            var str = '失效技能:';
                                            let list = Object.keys(player.disabledSkills);
                                            if (list.length) {
                                                str += '';
                                                for (var i = 0; i < list.length; i++) {
                                                    if (lib.translate[list[i] + '_info']) {
                                                        str += get.translation(list[i]) + '、';
                                                    }
                                                }
                                                return str.slice(0, str.length - 1);
                                            } else return str;
                                        },
                                    },
                                    mark: true,
                                    marktext: '遗忘',
                                    silent: true,
                                    forced: true,
                                    _priority: 99,
                                    firstDo: true,
                                    charlotte: true,
                                    trigger: {
                                        global: ['phaseBegin', 'dieBegin'],
                                    },
                                    filter(event, player) {
                                        return event.player == player.storage.snjs_boss_zhuoguimpat;
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'dieBegin') {
                                            player.removeSkill('difu_熬汤_xiaoguo');
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (event.triggername == 'phaseBegin' && player.storage.snjs_boss_zhuoguimpat1 == true) {
                                            player.removeSkill('difu_熬汤_xiaoguo');
                                        } else {
                                            player.storage.snjs_boss_zhuoguimpat1 = true;
                                        }
                                    },
                                    popup: false,
                                },
                            },
                        },
                        difu_云飓: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return event.player.isEnemiesOf(player) && event.player.countCards('h') > 0 && event.player != player;
                            },
                            forced: true,
                            content() {
                                var card = trigger.player.getCards('h').randomGets(1);
                                if (card) {
                                    trigger.player.discard(card);
                                }
                            },
                        },
                        difu_昼刹: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var func = function (result) {
                                    if (get.color(result) == 'red') return 10;
                                    return -10;
                                };
                                player.judge(func);
                                ('step 1');
                                event.color = result.color;
                                event.card = result.card;
                                player.gain(event.card, 'gain2', 'log');
                                ('step 2');
                                if (event.color == 'red') {
                                    player.addTempSkill('difu_昼刹_xiaoguo');
                                    event.finish();
                                }
                            },
                            subSkill: {
                                xiaoguo: {
                                    mark: true,
                                    intro: {
                                        name: 'difu_昼刹',
                                        content: '本回合使用【杀】的次数+2',
                                    },
                                    silent: true,
                                    forced: true,
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + 4;
                                        },
                                    },
                                    popup: false,
                                },
                            },
                        },
                        difu_夜冢: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var func = function (result) {
                                    if (get.color(result) == 'black') return 10;
                                    return -10;
                                };
                                player.judge(func);
                                ('step 1');
                                event.color = result.color;
                                event.card = result.card;
                                player.gain(event.card, 'gain2', 'log');
                                ('step 2');
                                if (event.color == 'black') {
                                    event.mubiao = [];
                                    game.countPlayer(function (current) {
                                        if (current != player && current.isEnemiesOf(player) && current.countCards('h') > 0) event.mubiao.push(current);
                                    });
                                } else event.finish();
                                ('step 3');
                                if (event.mubiao.length) {
                                    player.line(event.mubiao);
                                    for (var i = 0; i < event.mubiao.length; i++) {
                                        var cards = event.mubiao[i].getCards('h');
                                        var card = cards.randomGet();
                                        event.mubiao[i].discard(card);
                                    }
                                }
                            },
                        },
                        difu_断恶: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                global: 'phaseDiscardEnd',
                            },
                            filter(event, player) {
                                if (event.player.isFriendsOf(player) || event.player == player) return false;
                                var cards = [];
                                event.player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) {
                                        cards.addArray(evt.cards.filterInD('d'));
                                    }
                                });
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.color(cards[i]) == 'black') return true;
                                }
                                return false;
                            },
                            forced: true,
                            logTarget(event) {
                                return event.player;
                            },
                            content() {
                                trigger.player.loseHp();
                            },
                        },
                        difu_晦运: {
                            audio: 'ext:地府武将/audio:true',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                target.showHandcards();
                                ('step 1');
                                var chooseButton = player.chooseButton([1, 2], [get.translation(target.name) + '的手牌', target.getCards('h')]);
                                chooseButton.set('target', target);
                                chooseButton.set('ai', function (button) {
                                    return get.value(button.link);
                                });
                                ('step 2');
                                if (result.bool) {
                                    event.cards = result.links;
                                    event.names = [];
                                    for (var i = 0; i < result.links.length; i++) {
                                        event.names.push(result.links[i].name);
                                    }
                                    target.discard(result.links);
                                } else event.finish();
                                ('step 3');
                                if (event.names.length) {
                                    player
                                        .chooseToDiscard('〖difu_晦运〗:是否弃置一张名称与' + get.translation(event.cards) + '之一相同的牌,对' + get.translation(target) + '造成1点伤害？', 'he', function (card) {
                                            return event.names.includes(card.name);
                                        })
                                        .set('ai', function (card) {
                                            return 8 - get.value(card);
                                        });
                                }
                                ('step 4');
                                if (result.bool) {
                                    player.line(target);
                                    if (target.hp > player.hp) target.damage(2, 'nocard');
                                    else target.damage('nocard');
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target, card) {
                                        return -1;
                                    },
                                },
                            },
                        },
                        difu_疾咒: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                global: 'phaseUseEnd',
                            },
                            filter(event, player) {
                                return event.player.isEnemiesOf(player) && event.player != player;
                            },
                            forced: true,
                            logTarget(event) {
                                return event.player;
                            },
                            async content(event, trigger, player) {
                                const { result: { number } } = await player.judge();
                                const { result: { cards } } = await trigger.player.chooseToDiscard('〖difu_疾咒〗:弃置任意张点数之和大于' + number + '的牌,否则失去1点体力', 'he')
                                    .set('filterOk', function () {
                                        var num = 0;
                                        for (const i of ui.selected.cards) {
                                            num += i.number;
                                        }
                                        return num > number;
                                    }).set('ai', function (card) {
                                        return 20 - get.value(card);
                                    });
                                if (cards?.length) {
                                    const shuliang = player.hp > 15 ? 1 : 2;
                                    if (cards.length > shuliang) {
                                        player.addMark('difu_啖噬', 1);
                                    }
                                }
                                else {
                                    trigger.player.loseHp();
                                }
                            },
                        },
                        difu_啖噬: {
                            audio: 'ext:地府武将/audio:true',
                            intro: {
                                name: 'difu_啖噬',
                                content: '下次受到的伤害+#,移除1枚「difu_啖噬」',
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return player.countMark('difu_啖噬') > 0;
                            },
                            forced: true,
                            content() {
                                trigger.num += player.countMark('difu_啖噬');
                                player.removeMark('difu_啖噬', 1);
                            },
                        },
                        difu_赤虎: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseDrawBegin',
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                if (event.triggername == 'damageBegin' && player.hp <= 15) {
                                    trigger.num++;
                                }
                                if (event.triggername == 'phaseDrawBegin' && !player.isMaxHandcard()) {
                                    trigger.num += 2;
                                }
                            },
                        },
                        difu_拾忧: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                global: 'loseEnd',
                            },
                            filter(event, player) {
                                var evt = event.getParent(3);
                                return event.type == 'discard' && evt.name == 'phaseDiscard' && evt.player == event.player && evt.player != player && event.cards2 && event.cards2.filterInD('d').length;
                            },
                            content() {
                                'step 0';
                                event.cards = trigger.cards2.filterInD('d');
                                ('step 1');
                                var next = player
                                    .chooseCardButton(get.prompt('boss_shiyou'), event.cards, [1, event.cards.length])
                                    .set('ai', function (button) {
                                        return get.value(button.link, player);
                                    })
                                    .set('filterButton', function (button) {
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            if (ui.selected.buttons[i].link.suit == button.link.suit) return false;
                                        }
                                        return true;
                                    });
                                ('step 2');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2', 'log');
                                }
                            },
                        },
                        difu_往事: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            audio: 'ext:地府武将/audio:true',
                            filter(event, player) {
                                if (player.getEnemies().includes(event.player)) {
                                    return true;
                                }
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                var list = ['basic', 'trick', 'equip'].randomGet();
                                trigger.player.addTempSkill('boss_wangshi2');
                                trigger.player.storage.boss_wangshi2 = [list];
                                game.log(trigger.player, '本回合不能使用或打出', list, '牌');
                                trigger.player.markSkill('boss_wangshi2');
                            },
                        },
                        difu_诡计: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            forced: true,
                            content() {
                                player.discard(player.getCards('j').randomGet());
                            },
                            filter(event, player) {
                                return player.countCards('j') > 0;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'delay' && target.countCards('j') == 0) return 0.1;
                                    },
                                },
                            },
                        },
                        difu_反馈: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'damageEnd',
                            },
                            logTarget: 'source',
                            preHidden: true,
                            filter(event, player) {
                                return event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player;
                            },
                            content() {
                                player.gainPlayerCard(true, trigger.source, 'he');
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            if (get.attitude(target, player) < 0) return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        difu_蛮甲: {
                            audio: 'ext:地府武将/audio:true',
                            group: ['boss_manjia1', 'boss_manjia2'],
                        },
                        difu_涅槃: {
                            audio: 'ext:地府武将/audio:true',
                            audioname: ['re_pangtong'],
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.niepan = false;
                            },
                            filter(event, player) {
                                if (player.storage.niepan) return false;
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
                                player.awakenSkill('niepan');
                                player.storage.niepan = true;
                                player.discard(player.getCards('hej'));
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                                ('step 3');
                                player.draw(3);
                                ('step 4');
                                if (player.hp < 3) {
                                    player.recover(3 - player.hp);
                                }
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player, tag, target) {
                                    if (player != target || player.storage.niepan) return false;
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
                                    if (!target.storage.niepan) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        difu_索命: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && !current.isLinked();
                                });
                            },
                            content() {
                                'step 0';
                                var num = game.countPlayer(function (current) {
                                    return current != player && !current.isLinked();
                                });
                                player.chooseTarget(get.prompt('boss_suoming'), [1, num], function (card, player, target) {
                                    return !target.isLinked() && player != target;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                    event.num = 0;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.num < event.targets.length) {
                                    event.targets[event.num].link();
                                    event.num++;
                                    event.redo();
                                }
                            },
                        },
                        difu_魔炎: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1 : 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseTarget(true, '选择一个目标对其造成两点火焰伤害', function (card, player, target) {
                                        return player != target;
                                    }).ai = function (target) {
                                        return get.damageEffect(target, player, player, 'fire');
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.targets.length) {
                                    player.line(result.targets, 'fire');
                                    result.targets[0].damage(2, 'fire');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.tag(card, 'loseCard')) {
                                            return [0.5, 1];
                                        }
                                    },
                                },
                            },
                        },
                        difu_魔箭: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                var list = game.filterPlayer(function (current) {
                                    return player.canUse('wanjian', current) && current.isEnemiesOf(player);
                                });
                                list.sort(lib.sort.seat);
                                player.useCard({ name: 'wanjian' }, list);
                            },
                            ai: {
                                threaten: 1.8,
                            },
                        },
                        difu_丹术: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase != player && player.hp < player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1 : 0;
                                });
                                ('step 1');
                                if (result.color == 'red') {
                                    player.recover();
                                }
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.tag(card, 'loseCard')) {
                                            return [0.5, 1];
                                        }
                                    },
                                },
                            },
                        },
                        difu_地动: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('boss_didong'), function (card, player, target) {
                                    return target.isEnemiesOf(player);
                                }).ai = function (target) {
                                    var att = get.attitude(player, target);
                                    if (target.isTurnedOver()) {
                                        if (att > 0) {
                                            return att + 5;
                                        }
                                        return -1;
                                    }
                                    if (player.isTurnedOver()) {
                                        return 5 - att;
                                    }
                                    return -att;
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].turnOver();
                                }
                            },
                            ai: {
                                threaten: 1.7,
                            },
                        },
                        difu_山崩: {
                            audio: 'ext:地府武将/audio:true',
                            global: 'boss_shanbeng2',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            logv: false,
                            content() {
                                var targets = game.filterPlayer(function (current) {
                                    return current.countCards('e');
                                });
                                player.line(targets, 'green');
                                game.logv(player, 'boss_shanbeng', targets, null, true);
                            },
                        },
                        difu_恩怨: {
                            audio: 'ext:地府武将/audio:difu_恩怨',
                            group: ['enyuan1', 'enyuan2'],
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage')) return [1, 0, 0, -1];
                                    },
                                },
                            },
                        },
                        difu_悲鸣: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            content() {
                                trigger.source.discard(trigger.source.getCards('h'));
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        difu_落雷: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('boss_luolei'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage('thunder');
                                }
                            },
                        },
                        difu_挥泪: {
                            audio: 'ext:地府武将/audio:difu_挥泪',
                            trigger: {
                                player: 'die',
                            },
                            forced: true,
                            forceDie: true,
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            logTarget: 'source',
                            content() {
                                trigger.source.discard(trigger.source.getCards('he'));
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        difu_鬼火: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('boss_guihuo'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'fire');
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage('fire');
                                }
                            },
                        },
                        difu_冥爆: {
                            audio: 'ext:地府武将/audio:difu_冥爆',
                            global: 'boss_minbao2',
                        },
                        difu_热恼: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                var enemies = player.getEnemies();
                                var target = enemies.randomGet();
                                target.damage(7, 'fire');
                            },
                        },
                        difu_毅重: {
                            trigger: {
                                target: 'shaBefore',
                            },
                            forced: true,
                            audio: 'ext:地府武将/audio:true',
                            filter(event, player) {
                                if (player.getEquip(2)) return false;
                                return event.card.name == 'sha' && get.color(event.card) == 'black';
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.subtype(card) == 'equip2') {
                                            if (get.equipValue(card) <= 8) return 0;
                                        }
                                        if (target.getEquip(2)) return;
                                        if (card.name == 'sha' && get.color(card) == 'black') return 'zerotarget';
                                    },
                                },
                            },
                        },
                        difu_八阵: {
                            audio: 'ext:地府武将/audio:true',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            group: 'bazhen_bagua',
                        },
                        difu_黑白无常difu_吸星: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].isEnemiesOf(player)) game.players[i].damage(1, 'thunder');
                                }
                            },
                        },
                        difu_黑白无常difu_太平: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.source == undefined) return false;
                                if (event.source == player) return false;
                                if (event.source.isFriendsOf(player)) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                event.Taiping = trigger.num;
                                ('step 1');
                                event.Taiping--;
                                if (trigger.source.countCards() <= 0) {
                                    trigger.source.loseHp();
                                    event.goto(5);
                                }
                                ('step 2');
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards, num) {
                                        str = 'difu_太平:弃置两张花色不同的手牌,取消则失去一点体力';
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    trigger.source,
                                    event.videoId,
                                    trigger.source.getCards()
                                );
                                game.addVideo('delay', null, 2);
                                ('step 3');
                                var next = trigger.source.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        if (ui.selected.buttons[i].link.suit == button.link.suit) return false;
                                    }
                                    return true;
                                });
                                next.set('selectButton', function (button) {
                                    return 2;
                                });
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.source);
                                });
                                ('step 4');
                                if (result.bool && result.links) {
                                    trigger.source.discard(result.links);
                                } else {
                                    trigger.source.loseHp();
                                }
                                game.broadcastAll('closeDialog', event.videoId);
                                ('step 5');
                                if (event.Taiping) {
                                    event.goto(1);
                                }
                            },
                        },
                        黑白无常difu_迷醉: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                source: 'damageAfter',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                if (!event.card) return false;
                                if (get.color(event.card) == 'red' && event.card.name == 'sha') return true;
                                if (event.card.nature && event.card.name == 'sha') return true;
                                return false;
                            },
                            content() {
                                player
                                    .discardPlayerCard(trigger.player, 2, 'he', get.prompt('difu_迷醉', trigger.player), true)
                                    .set('ai', function (button) {
                                        if (!_status.event.att) return 0;
                                        if (get.position(button.link) == 'e') {
                                            if (get.subtype(button.link) == 'equip2') return 2 * get.value(button.link);
                                            return get.value(button.link);
                                        }
                                        return 1;
                                    })
                                    .set('att', get.attitude(player, trigger.player) <= 0);
                            },
                        },
                        difu_黑白无常difu_强征: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i] == player) continue;
                                    if (game.players[i].isFriendsOf(player)) continue;
                                    if (game.players[i].countCards('h') <= 2) return true;
                                }
                                return false;
                            },
                            content() {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i] == player) continue;
                                    if (game.players[i].isFriendsOf(player)) continue;
                                    if (game.players[i].countCards('h') <= 2) {
                                        player.gain(game.players[i].getCards('h'), game.players[i], 'giveAuto');
                                    }
                                }
                            },
                        },
                        difu_牛头马面枭首: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].isEnemiesOf(player)) {
                                        if (game.players[i].hp >= player.hp) return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                var Q = game.players.find((E) => E.hp >= player.hp && E.isEnemiesOf(player));
                                if (Q) Q.damage(2); //QQQ
                            },
                        },
                        difu_牛头马面difu_蛮击: {
                            audio: 'ext:地府武将/audio:true',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.targets.length == 1 && event.card.name == 'sha') return true;
                                return false;
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                if (trigger.target.countCards('h')) {
                                    const result = await player.discardPlayerCard(trigger.target, 1, 'h', get.prompt('difu_蛮击', trigger.target), true).set('ai', (button) => get.value(button.link)).forResult();
                                    if (result.links?.length) {
                                        if (result.links[0].name == 'sha') {
                                            trigger.parent.baseDamage++;
                                        } else {
                                            player.gain(result.links[0], 'gain');
                                        }
                                    }
                                }
                            },
                        },
                        difu_牛头马面difu_施狱: {
                            audio: 'ext:地府武将/audio:true',
                            forced: true,
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                event.cards = [];
                                event.num = 0;
                                ('step 1');
                                var card = get.cardPile(function (card) {
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (card.suit == event.cards[i].suit) return false;
                                    }
                                    return true;
                                });
                                if (card) event.cards.push(card);
                                event.num++;
                                ('step 2');
                                if (event.num < 4) event.goto(1);
                                ('step 3');
                                player.gain(event.cards, 'gain2');
                            },
                        },
                        difu_牛头马面: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'useCardBegin',
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (_status.currentPhase != player) return false;
                                var type = get.type(event.card, 'trick');
                                return (
                                    player.getHistory('custom', function (evt) {
                                        return evt.Boss_Guizhao_name == type;
                                    }).length == 0
                                );
                            },
                            content() {
                                var type = get.type(trigger.card, 'trick');
                                player.draw();
                                player.getHistory('custom').push({ Boss_Guizhao_name: type });
                            },
                        },
                        xdifu_暴敛: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.isEnemiesOf(player) && current != player && current.countCards('he') > 0;
                                });
                            },
                            forced: true,
                            logTarget(event, player) {
                                var ren = [];
                                game.countPlayer(function (current) {
                                    if (current.isEnemiesOf(player) && current != player && current.countCards('he') > 0) ren.push(current);
                                });
                                return ren;
                            },
                            content() {
                                'step 0';
                                event.target = [];
                                game.countPlayer(function (current) {
                                    if (current != player && current.isEnemiesOf(player) && current.countCards('he') > 0) event.target.push(current);
                                });
                                ('step 1');
                                if (event.target.length) {
                                    for (var i = 0; i < event.target.length; i++) {
                                        if (event.target[i].countCards('e') > 0) player.gainPlayerCard('e', event.target[i], true);
                                        else {
                                            if (event.target[i].countCards('h') > 0) {
                                                var cards = event.target[i].getCards('h');
                                                var card = cards.randomGet();
                                                player.gain(card, event.target[i], 'giveAuto', 'bySelf');
                                            }
                                        }
                                    }
                                }
                                ('step 2');
                                if (!player.hasSkill('xdifu_暴敛_draw')) player.addTempSkill('xdifu_暴敛_draw');
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    silent: true,
                                    forced: true,
                                    fixed: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                    popup: false,
                                },
                            },
                        },
                        xdifu_强征: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.isEnemiesOf(player) && current != player && current.countCards('h') == 1;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.target = [];
                                game.countPlayer(function (current) {
                                    if (current != player && current.isEnemiesOf(player) && current.countCards('h') == 1) event.target.push(current);
                                });
                                ('step 1');
                                if (event.target.length) {
                                    for (var i = 0; i < event.target.length; i++) {
                                        var cards = event.target[i].getCards('h');
                                        player.gain(cards, event.target[i], 'giveAuto', 'bySelf');
                                    }
                                }
                            },
                            subSkill: {
                                hbwc: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                                bwc: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                            },
                        },
                        xdifu_迷醉: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (!event.player.isAlive()) return false;
                                if (!event.card) return false;
                                return (event.card.name == 'sha' && get.color(event.card) == 'red') || (event.card.name == 'sha' && (event.nature == 'thunder' || event.nature == 'fire') && event.player.countCards('hej') > 0);
                            },
                            forced: true,
                            content() {
                                player.discardPlayerCard('〖difu_迷醉〗:弃置' + get.translation(trigger.player) + '一张牌', 'hej', trigger.player);
                            },
                            subSkill: {
                                hbwc: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                                bwc: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                            },
                        },
                        xdifu_吸星: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.isEnemiesOf(player) && current != player;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.target = [];
                                game.countPlayer(function (current) {
                                    if (current.isEnemiesOf(player) && current != player) {
                                        event.target.push(current);
                                        event.xueliang = current.hp;
                                    }
                                });
                                ('step 1');
                                if (event.target.length) {
                                    event.mubiao = [];
                                    for (var i = 0; i < event.target.length; i++) {
                                        if (event.xueliang < event.target[i].hp) {
                                            event.mubiao.push(event.target[i]);
                                            event.xueliang = event.target[i].hp;
                                        }
                                    }
                                    for (var i = 0; i < event.target.length; i++) {
                                        if (event.xueliang == event.target[i].hp) event.mubiao.push(event.target[i]);
                                    }
                                }
                                ('step 2');
                                if (event.mubiao.length) {
                                    event.mubiao2 = event.mubiao.randomGet();
                                    event.mubiao2.damage('thunder', 1, 'nocard');
                                    player.recover();
                                }
                            },
                            subSkill: {
                                hwc: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                                hbwc: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                            },
                        },
                        xdifu_太平: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event.source == undefined) return false;
                                return event.source.isEnemiesOf(player) && event.source != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                if (trigger.source.countCards('h') < 2) {
                                    trigger.source.loseHp();
                                    event.goto(4);
                                }
                                ('step 2');
                                if (trigger.source.countCards('h') > 1) {
                                    var chooseButton = trigger.source.chooseButton(2, ['〖difu_太平〗:弃置两张花色不同的手牌,否则失去1点体力', trigger.source.getCards('h')]);
                                } else {
                                    trigger.source.loseHp();
                                    event.goto(4);
                                }
                                chooseButton.set('ai', function (button) {
                                    return get.unuseful(button.link) + 9;
                                });
                                chooseButton.set('filterButton', function (button) {
                                    if (ui.selected.buttons.length) {
                                        return button.link.suit != ui.selected.buttons[0].link.suit;
                                    }
                                    return true;
                                });
                                ('step 3');
                                if (result.bool) {
                                    trigger.source.discard(result.links);
                                } else trigger.source.loseHp();
                                ('step 4');
                                event.num--;
                                ('step 5');
                                if (event.num > 0) event.goto(1);
                            },
                            subSkill: {
                                hbwc: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                                hwc: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                            },
                        },
                        difu_界枭首: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.isEnemiesOf(player) && current != player && current.hp > player.hp;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.target = [];
                                game.countPlayer(function (current) {
                                    if (current.isEnemiesOf(player) && current != player && current.hp > player.hp) {
                                        event.target.push(current);
                                    }
                                });
                                ('step 1');
                                if (event.target.length) {
                                    event.mubiao = event.target.randomGet();
                                    event.mubiao.damage(2, 'nocard');
                                }
                            },
                            subSkill: {
                                ntmm: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                                nt: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                            },
                        },
                        xdifu_蛮击: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.countCards('h') > 0 && event.targets.length == 1 && event.target.isEnemiesOf(player) && event.target != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.discardPlayerCard('h', trigger.target);
                                ('step 1');
                                if (result.bool) {
                                    if (result.cards[0].name != 'sha') player.gain(result.cards[0], 'gain2', 'log');
                                    else {
                                        var id = trigger.target.playerid;
                                        var map = trigger.parent.customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (typeof map[id].extraDamage != 'number') {
                                            map[id].extraDamage = 0;
                                        }
                                        map[id].extraDamage++;
                                    }
                                }
                            },
                            subSkill: {
                                ntmm: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                                nt: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                            },
                        },
                        xdifu_施狱: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var suit = [];
                                var cards = [];
                                while (cards.length < 4) {
                                    var card = get.cardPile2(function (card) {
                                        return !cards.includes(card) && !suit.includes(card.suit);
                                    });
                                    if (card) {
                                        cards.push(card);
                                        suit.push(card.suit);
                                    } else break;
                                }
                                if (cards.length) {
                                    player.gain(cards, 'gain2', 'log');
                                }
                                ('step 1');
                                trigger.cancel();
                            },
                            subSkill: {
                                ntmm: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                                mm: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                            },
                        },
                        xdifu_诡招: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player, name) {
                                if (_status.currentPhase != player) return false;
                                var history = player.getHistory('useCard');
                                var evt = name == 'useCard' ? event : event.parent;
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i] != evt && get.type(history[i].card) == get.type(event.card)) return false;
                                    else if (history[i] == evt) return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            subSkill: {
                                ntmm: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                                mm: {
                                    audio: 'ext:地府武将/audio:1',
                                },
                            },
                        },
                        difu_太平: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += 3;
                            },
                        },
                        difu_吸星: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('boss_xixing'), function (card, player, target) {
                                    return player != target && target.isLinked();
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage('thunder');
                                    player.recover();
                                }
                            },
                        },
                        difu_暴敛: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(3);
                            },
                        },
                        difu_强征: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h');
                                });
                            },
                            content() {
                                'step 0';
                                var players = get.players(player);
                                players.remove(player);
                                event.players = players;
                                player.line(players, 'green');
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    var hs = current.getCards('h');
                                    if (hs.length) {
                                        var card = hs.randomGet();
                                        player.gain(card, current);
                                        current.$giveAuto(card, player);
                                    }
                                    event.redo();
                                }
                            },
                        },
                        difu_鬼魅: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: ['phaseDrawSkipped', 'PhaseDrawCancelled'],
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            group: ['difu_鬼魅_Use', 'difu_鬼魅_Turnover'],
                            subSkill: {
                                Use: {
                                    audio: 'difu_鬼魅',
                                    trigger: {
                                        player: ['phaseUseSkipped', 'PhaseUseCancelled'],
                                    },
                                    forced: true,
                                    content() {
                                        player.addTempSkill('difu_鬼魅_Buff');
                                    },
                                },
                                Turnover: {
                                    audio: 'difu_鬼魅',
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '取消了翻面');
                                    },
                                },
                            },
                        },
                        difu_鬼惑: {
                            audio: 'ext:地府武将/audio:true',
                            trigger: {
                                player: ['phaseDrawSkipped', 'PhaseDrawCancelled'],
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            group: ['difu_鬼魅_Use', 'difu_鬼魅_Turnover'],
                            subSkill: {
                                Use: {
                                    audio: 'difu_鬼魅',
                                    trigger: {
                                        player: ['phaseUseSkipped', 'PhaseUseCancelled'],
                                    },
                                    forced: true,
                                    content() {
                                        player.addTempSkill('difu_鬼魅_Buff');
                                    },
                                },
                                Turnover: {
                                    audio: 'difu_鬼魅',
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '取消了翻面');
                                    },
                                },
                            },
                        },
                    },
                    translate: {
                        difu_chi: '魑',
                        difu_mei: '魅',
                        difu_wang: '魍',
                        difu_liang: '魉',
                        difu_niutou: '牛头',
                        difu_mamian: '马面',
                        difu_heiwuchang: '黑无常',
                        difu_baiwuchang: '白无常',
                        difu_yecha: '夜叉',
                        difu_luocha: '罗刹',
                        difu_re_niutou: '牛头',
                        difu_re_mamian: '马面',
                        difu_re_heiwuchang: '黑无常',
                        difu_re_baiwuchang: '白无常',
                        difu_huangfeng: '黄蜂',
                        difu_yusai: '鱼鳃',
                        difu_baowei: '豹尾',
                        difu_niaozui: '鸟嘴',
                        difu_riyeyoushen: '日夜游神',
                        difu_heibaiwuchang: '黑白无常',
                        difu_niutoumamian: '牛头马面',
                        difu_guiwang: '鬼王',
                        difu_qinguangwang: '秦广王',
                        difu_chujiangwang: '楚江王',
                        difu_songdiwang: '宋帝王',
                        difu_wuguanwang: '五官王',
                        difu_yanluowang: '阎罗王',
                        difu_bianchengwang: '卞城王',
                        difu_taishanwang: '泰山王',
                        difu_zhuanlunwang: '转轮王',
                        difu_pingdengwang: '平等王',
                        difu_dizangwang: '地藏王',
                        difu_mengpo: '孟婆',
                        difu_fengdudadi: '酆都大帝',
                        difu_dushiwang: '都市王',
                        difu_hanba: '旱魃',
                        difu_血池: '血池',
                        difu_血池_info: '你的回合结束时,你选择一名其他角色失去2点体力,你回复1点体力',
                        difu_恩仇: '恩仇',
                        difu_恩仇_info: '当你受到伤害时,你令伤害来源失去等量体力',
                        difu_望乡: '望乡',
                        difu_望乡_info: '锁定技,当你死亡时,你令所有其他敌方角色弃置其所有牌',
                        difu_诛心: '诛心',
                        difu_诛心_info: '锁定技,你死亡时,你令场上血量最少的一名敌方角色受到5点伤害',
                        difu_雷诛: '雷诛',
                        difu_雷诛_info: '锁定技,你死亡时,你对所有敌方角色造成2点雷属性伤害',
                        difu_火刑: '火刑',
                        difu_火刑_info: '锁定技,你死亡时,你对所有敌方角色造成2点火属性伤害',
                        difu_平等: '平等',
                        difu_平等_info: '锁定技,你死亡时,你对体力最多的一名其他角色造成2点随机属性伤害(属性随机),再对一名体力最多的其他角色造成1点随机属性伤害(属性随机)',
                        difu_忘魂: '忘魂',
                        difu_忘魂_info: '锁定技,你死亡时,令随机两名敌方角色各随机失去一个技能(主公技除外),并在牌堆中加入2张回魂.(回魂只能在挑战模式出现)',
                        difu_冥虫: '冥虫',
                        difu_冥虫_info: '锁定技,你死亡时,若有其他己方单位存活,则该角色获得技能<difu_毒针>',
                        difu_轮回: '轮回',
                        difu_轮回_info: '锁定技,准备阶段,若你的体力小于等于2,则你与场上除你以外体力最高且大于2的角色交换体力值',
                        difu_公正: '公正',
                        difu_公正_info: '锁定技,准备阶段,若你判定区有牌,你弃置你判定区的所有牌,回复体力至体力上限',
                        difu_无量: '无量',
                        difu_无量_info: '锁定技,你登场时额外摸3张牌;结束阶段开始时,你摸两张牌;你的回合开始时,若你当前体力小于3,则回复至3',
                        difu_大愿: '大愿',
                        difu_大愿_info: ' 当一名角色判定牌最终生效前,你可以指定该判定牌的点数和花色',
                        difu_炙焚: '炙焚',
                        difu_炙焚_info: '锁定技,准备阶段,你选择一名其他角色,对其造成2点火属性伤害',
                        difu_雷咒: '雷咒',
                        difu_雷咒_info: '锁定技,准备阶段,你对一名其他角色造成2点雷属性伤害',
                        difu_霜寒: '霜寒',
                        difu_霜寒_info: '锁定技,准备阶段,你对一名其他角色造成1点冰属性伤害',
                        difu_肃杀: '肃杀',
                        difu_肃杀_info: '锁定技,你死亡时,你对所有其他角色造成1点冰属性伤害',
                        difu_冰封: '冰封',
                        difu_冰封_info: '锁定技,当你受到伤害后,你可令伤害来源弃置三张牌,该角色将武将牌翻面',
                        difu_拘魂: '拘魂',
                        difu_拘魂_info: '锁定技,结束阶段,你选择一名其他角色,将其武将牌翻面并横置',
                        difu_驭兽: '驭兽',
                        difu_驭兽_info: '出牌阶段开始时,你可以对所有敌方角色使用一张南蛮入侵',
                        difu_铡刀: '铡刀',
                        difu_铡刀_info: '锁定技,你使用牌无视目标角色防具,你使用的【杀】伤害+2',
                        difu_醉酒: '醉酒',
                        difu_醉酒_info: '锁定技,你因【杀】造成伤害时,此伤害+1',
                        difu_炼狱: '炼狱',
                        difu_炼狱_info: '结束阶段,你可以对所有敌方角色造成1点火焰伤害',
                        difu_不佛: '不佛',
                        difu_不佛_info: '锁定技,你的回合开始时,你对所有距离为1的敌方角色造成1点火焰伤害;你受到大于等于2的伤害时,令此伤害-1',
                        difu_判官: '判官',
                        difu_判官_info: '当一名角色的判定牌生效前,你可以打出一张牌替换之',
                        difu_服毒: '服毒',
                        difu_服毒_info: '锁定技,其他角色使用【桃】时,你令随机另一名其他角色失去2点体力',
                        difu_苦酒: '苦酒',
                        difu_苦酒_info: '锁定技,其他角色准备阶段,你令其失去1点体力,该角色视为使用一张【酒】',
                        difu_治妄: '治妄',
                        difu_治妄_info: '锁定技,当敌方角色于摸牌阶段外获得牌时,你随机弃置其两张手牌',
                        difu_往生: '往生',
                        difu_往生_info: '锁定技,你的出牌阶段开始时,视为你对敌方随机使用一张【南蛮入侵】或【万箭齐发】',
                        difu_反噬: '反噬',
                        difu_反噬_info: '锁定技,每个回合你受到第一次伤害后,若再次受到伤害,则对一名敌方角色造成2点伤害',
                        difu_锁足: '锁足',
                        difu_锁足_info: '锁定技,准备阶段,你令所有其他敌方角色横置',
                        difu_阿鼻: '阿鼻',
                        difu_阿鼻_info: '锁定技,你受到一点伤害时,若伤害来源为敌方角色,你对伤害来源造成等量随机属性伤害(雷或火随机)',
                        difu_铁面: '铁面',
                        difu_铁面_info: '锁定技,当你成为黑色锦囊牌或黑色杀的目标时,取消之',
                        difu_热闷: '热闷',
                        difu_热闷_info: '锁定技,若你的装备区内没有防具牌,则【南蛮入侵】、【万箭齐发】和普通【杀】对你无效',
                        difu_雷护: '雷护',
                        difu_雷护_info: '锁定技,当你受到雷电伤害时,防止此伤害',
                        difu_绝策: '绝策',
                        difu_绝策_info: '当其他角色在你回合内失去最后一张手牌时,你可以对其造成一点伤害',
                        difu_迷醉: '迷醉',
                        difu_迷醉_info: '你的红色【杀】或属性【杀】造成伤害后,你可以弃置受伤角色两张牌',
                        difu_拔舌: '拔舌',
                        difu_拔舌_info: '锁定技,你死亡时,你令击杀你的敌方角色失去所有体力',
                        difu_黑绳: '黑绳',
                        difu_黑绳_info: '你的回合结束时,你对一名场上拥有坐骑牌的角色造成一点伤害',
                        difu_魔道: '魔道',
                        difu_魔道_info: '锁定技,准备阶段,你摸四张牌',
                        difu_谛听: '谛听',
                        difu_谛听_info: '锁定技,你的坐骑区被废除,你与别人计算距离时-1,别人与你计算距离时+1;你的坐骑牌均用于重铸',
                        difu_蛮击: '蛮击',
                        difu_蛮击_info: '你使用【杀】指定单一目标后,你可以弃置该角色一张手牌.若此牌是【杀】,你本次【杀】的伤害+1;若此牌不是【杀】,你获得之',
                        difu_施狱: '施狱',
                        difu_施狱_info: '锁定技,摸牌阶段,你放弃摸牌改为随机获得牌堆中每种花色的牌各一张',
                        difu_诡招: '诡招',
                        difu_诡招_info: '锁定技,当你于回合内使用一张牌时,若此牌的类别是你本回合第一次使用,则你摸一张牌',
                        xdifu_铁面: '铁面',
                        xdifu_铁面_info: '锁定技,红色【杀】有75%的概率对你无效',
                        difu_隐煞: '隐煞',
                        difu_隐煞_info: '锁定技,敌方角色的出牌阶段开始时,若其手牌数大于其体力上限,你本回合不能成为【杀】的目标',
                        difu_恶力: '恶力',
                        difu_恶力_info: '锁定技,每回合限一次,你对敌方角色造成伤害时,你进行一次判断:若结果为红色,此伤害+1;若结果为黑色,你获得<完杀>直到回合结束',
                        difu_焚世: '焚世',
                        difu_焚世_info: '锁定技,准备阶段,若你的手牌数小于体力值,则将手牌摸至于体力值相等;若你的手牌数大于体力值,则你对敌方角色造成共计X点火焰伤害,点数随机分配(X为手牌数减体力值)',
                        difu_炙日: '炙日',
                        difu_炙日_info: '锁定技,当敌方角色使用红色锦囊牌指定目标后,你摸三张牌',
                        difu_心悸: '心悸',
                        difu_心悸_info: '锁定技,当你于回合外因弃置而失去手牌时,你对当前回合角色造成1点伤害',
                        difu_毒针: '毒针',
                        difu_毒针_info: '锁定技,你的回合内,当你使用牌指定单一敌方角色为目标后,该角色随机弃置一张牌(优先装备区的牌)',
                        difu_病疑: '病疑',
                        difu_病疑_info: '锁定技,每回合限一次,当你失去最后的手牌时,你摸六张牌',
                        difu_索穴: '索穴',
                        difu_索穴_info: '你使用【杀】指定单一目标后,若其手牌数大于你,你可将手牌摸至与该角色相同;若其手牌数小于你,你可弃置一张手牌令此【杀】不能抵消',
                        difu_地府: '地府',
                        difu_地府_info: '锁定技,敌方角色的出牌阶段开始时,若其手牌数大于体力上限,则将手牌弃置与体力上限相同',
                        difu_震怒: '震怒',
                        difu_震怒_info: '锁定技,当你体力值第一次降至8点或以下,则结束当前角色回合立即开始你的回合并摸四张牌',
                        difu_刑判: '刑判',
                        difu_刑判_info: '锁定技,出牌阶段开始时,你进行一次判定:若结果为红色,敌方手牌最多的角色将一半数量的手牌交给你(向下取整);若为黑色,敌方体力最多的角色失去1点体力',
                        difu_殿威: '殿威',
                        difu_殿威_info: '锁定技,准备阶段,你视为对装备区里没有牌的其他角色使用一张【杀】,装备区里有牌的其他角色随机弃置一张装备区的牌',
                        difu_鬼吸: '鬼吸',
                        difu_鬼吸_info: '锁定技,当你受到伤害后,你进行一次判定,若结果为♥️️,你回复1点体力;若结果不为♥️️,你失去1点体力',
                        difu_暗潮: '暗潮',
                        difu_暗潮_info: '锁定技,己方角色的回合结束时,若此回合该角色没有造成伤害,则获得一个<difu_暗潮>标记,若该角色造成过伤害,则移去所有标记.己方角色的回合开始时,若其有标记,则本回合多摸X张牌且对敌方角色造成的伤害+X(X为<difu_暗潮>的标记数)',
                        difu_断魂: '断魂',
                        difu_断魂_info: '锁定技,若你的手牌数小于等于1,你受到非【杀】的伤害-1',
                        difu_熬汤: '熬汤',
                        difu_熬汤_info: '锁定技,回合开始时,你令随机一名敌方角色遗忘所有武将技能直到你的下回合开始',
                        difu_云飓: '云飓',
                        difu_云飓_info: '锁定技,敌方角色的回合结束时,该角色随机弃置一张手牌',
                        difu_昼刹: '昼刹',
                        difu_昼刹_info: '锁定技,准备阶段,你进行一次判定并获得判定牌,若结果为红色,你本回合使用【杀】的次数+4',
                        difu_夜冢: '夜冢',
                        difu_夜冢_info: '锁定技,结束阶段,你进行一次判定并获得判定牌,若结果为黑色,所有敌方角色每人随机弃置一张手牌',
                        difu_断恶: '断恶',
                        difu_断恶_info: '锁定技,敌方角色的弃牌阶段结束时,若其此阶段弃置了黑色牌,则该角色失去1点体力',
                        difu_晦运: '晦运',
                        difu_晦运_info: '出牌阶段限一次,你可以展示一名敌方角色的手牌,并弃置其中至多两张牌.你可以弃置一张与该角色弃置牌其中一张名称相同的牌,对其造成X点伤害(若该角色体力值大于你的体力值,X=2,否则X=1)',
                        difu_疾咒: '疾咒',
                        difu_疾咒_info: '锁定技,敌方角色的出牌阶段结束时,你进行一次判定,该角色选择一项:①弃置任意张点数之和大于判定结果的牌(若弃置的牌超过X张,你获得一个「difu_啖噬」;你的体力值大于15时X为1,否则X为2)②失去1点体力',
                        difu_啖噬: '啖噬',
                        difu_啖噬_info: '锁定技,当你受到伤害时,此伤害+X(X为你拥有的「difu_啖噬」数量),你移去一个「difu_啖噬」',
                        difu_赤虎: '赤虎',
                        difu_赤虎_info: '锁定技:①若你的手牌数不是全场最多的,摸牌阶段你多摸两张牌;②若你的体力值不大于15,你造成的伤害+1',
                        difu_拾忧: '拾忧',
                        difu_拾忧_info: '其他角色于弃牌阶段弃置的牌进入弃牌堆前,你可以选择其中任意张花色各不相同的牌获得之',
                        difu_往事: '往事',
                        difu_往事_info: '锁定技,你存活时,敌方角色的回合开始时,令其于本回合不能使用或打出随机一种类型的牌(基本、锦囊、装备)',
                        difu_诡计: '诡计',
                        difu_诡计_info: '锁定技,准备阶段结束时,若你的判定区内有牌,你随机弃置其中一张牌',
                        difu_反馈: '反馈',
                        difu_反馈_info: '当你受到伤害后,你可以获得伤害来源的一张牌',
                        difu_蛮甲: '蛮甲',
                        difu_蛮甲_info: '锁定技,若你的装备区内没有防具牌,则你视为装备了[藤甲]',
                        difu_涅槃: '涅槃',
                        difu_涅槃_info: '限定技,出牌阶段或当你处于濒死状态时,你可以弃置你区域内的所有牌并复原你的武将牌,摸三张牌并将体力回复至3点',
                        difu_索命: '索命',
                        difu_索命_info: '结束阶段,你将任意名未被横置的其他角色的武将牌横置',
                        difu_魔炎: '魔炎',
                        difu_魔炎_info: '每当你于回合外失去牌时,你可以进行一次判定,若结果为红色,你对一名其他角色造成2点火焰伤害',
                        difu_魔箭: '魔箭',
                        difu_魔箭_info: '出牌阶段开始时,你可以对所有敌方角色使用一张万箭齐发',
                        difu_丹术: '丹术',
                        difu_丹术_info: '每当你于回合外失去牌时,你可以进行一次判定,若结果为红色,你回复1点体力',
                        difu_地动: '地动',
                        difu_地动_info: '结束阶段,你可以选择一名敌方角色将其武将牌翻面',
                        difu_山崩: '山崩',
                        difu_山崩_info: '锁定技,当你死亡时,你令所有其他角色弃置其装备区内的所有牌',
                        difu_恩怨: '恩怨',
                        difu_恩怨_info: '锁定技,当有其他角色令你回复一点体力后,该角色摸一张牌;其他角色对你造成伤害后,须交给你一张♥️️手牌,否则该角色失去1点体力',
                        difu_悲鸣: '悲鸣',
                        difu_悲鸣_info: '锁定技,当你死亡时,你令击杀你的角色弃置所有手牌',
                        difu_落雷: '落雷',
                        difu_落雷_info: '准备阶段,你可以对一名其他角色造成1点雷电伤害',
                        difu_挥泪: '挥泪',
                        difu_挥泪_info: '锁定技,当你死亡时,击杀你的角色弃置所有的牌',
                        difu_鬼火: '鬼火',
                        difu_鬼火_info: '结束阶段,你可以对一名其他角色造成1点火焰伤害',
                        difu_冥爆: '冥爆',
                        difu_冥爆_info: '锁定技,当你死亡时,对场上所有其他角色造成1点火焰伤害',
                        difu_热恼: '热恼',
                        difu_热恼_info: '锁定技,你死亡时,你令随机一名敌方角色受到7点火属性伤害',
                        difu_毅重: '毅重',
                        difu_毅重_info: '锁定技,当你的防具栏为空时,黑色的杀对你无效',
                        difu_八阵: '八阵',
                        difu_八阵_info: '锁定技,若你的防具栏内没有牌且没有被废除,则你视为装备着【八卦阵】',
                        difu_黑白无常difu_吸星: '吸星',
                        difu_黑白无常difu_吸星_info: '锁定技,准备阶段,你对所有敌方角色的一名角色造成1点雷电伤害,回复1点体力',
                        difu_黑白无常difu_太平: '太平',
                        difu_黑白无常difu_太平_info: '锁定技,当你受到敌方角色造成的1点伤害后,伤害来源需弃置两张花色不同的手牌,否则失去1点体力',
                        黑白无常difu_迷醉: '迷醉',
                        黑白无常difu_迷醉_info: '你的红色【杀】或属性【杀】造成伤害后,你可以弃置受伤角色两张牌',
                        difu_黑白无常difu_强征: '强征',
                        difu_黑白无常difu_强征_info: '锁定技,结束阶段,若敌方有角色的手牌数小于等于2,则你获得其手牌',
                        difu_牛头马面枭首: '枭首',
                        difu_牛头马面枭首_info: '锁定技,准备阶段,你对一名体力值大于等于你的敌方角色造成2点伤害',
                        difu_牛头马面difu_蛮击: '蛮击',
                        difu_牛头马面difu_蛮击_info: '你使用【杀】指定单一目标后,你可以弃置该角色一张手牌.若此牌是【杀】,你本次【杀】的伤害+1;若此牌不是【杀】,你获得之',
                        difu_牛头马面difu_施狱: '施狱',
                        difu_牛头马面difu_施狱_info: '锁定技,摸牌阶段,你放弃摸牌改为随机获得牌堆中每种花色的牌各一张',
                        difu_牛头马面: '诡招',
                        difu_牛头马面_info: '锁定技,当你于回合内使用一张牌时,若此牌的类别是你本回合第一次使用,则你摸一张牌',
                        xdifu_暴敛: '暴敛',
                        xdifu_暴敛_info: '锁定技,准备阶段,你放弃摸牌,改为获得每名敌方角色装备区里各一张牌.若有角色装备区里没有牌,则改为随机获得其一张手牌',
                        xdifu_强征: '强征',
                        xdifu_强征_info: '锁定技,结束阶段,若敌方有角色的手牌数为1,则你获得其手牌',
                        xdifu_迷醉: '迷醉',
                        xdifu_迷醉_info: '锁定技,你的红色【杀】或属性【杀】造成伤害后,你可以弃置受伤角色一张牌',
                        xdifu_吸星: '吸星',
                        xdifu_吸星_info: '锁定技,准备阶段,你对敌方体力最多的一名角色造成1点雷电伤害,你回复1点体力',
                        xdifu_太平: '太平',
                        xdifu_太平_info: '锁定技,每当你受到1点敌方角色造成的伤害后,伤害来源需弃置两张花色不同的手牌,否则失去1点体力',
                        difu_界枭首: '枭首',
                        difu_界枭首_info: '锁定技,准备阶段,你对一名体力值大于你的敌方角色造成2点伤害',
                        xdifu_蛮击: '蛮击',
                        xdifu_蛮击_info: '锁定技,你使用【杀】指定单一目标后,你可以弃置该角色一张手牌:①若此牌是【杀】,你本次【杀】的伤害+1;②若此牌不是【杀】,你获得之',
                        xdifu_施狱: '施狱',
                        xdifu_施狱_info: '锁定技,摸牌阶段,你放弃摸牌改为随机获得牌堆中每种花色的牌各一张',
                        xdifu_诡招: '诡招',
                        xdifu_诡招_info: '锁定技,当你于回合内使用一张牌时,若此牌的类别是你本回合第一次使用,则你摸一张牌',
                        difu_太平: '太平',
                        difu_太平_info: '锁定技,摸牌阶段摸牌时,你的摸牌数量+3',
                        difu_吸星: '吸星',
                        difu_吸星_info: '准备阶段,对任意一名横置的其他角色造成1点雷电伤害,回复1点体力',
                        difu_暴敛: '暴敛',
                        difu_暴敛_info: '锁定技,结束阶段,你摸两张牌',
                        difu_强征: '强征',
                        difu_强征_info: '锁定技,结束阶段,你获得每个敌方角色的一张手牌',
                        difu_鬼魅: '鬼魅',
                        difu_鬼魅_info: '锁定技,你不会被翻面;你跳过摸牌阶段时,你摸一张牌;你跳过出牌阶段时,本回合手牌上限无限制',
                        difu_鬼惑: '鬼惑',
                        difu_鬼惑_info: '锁定技,你不会被翻面;你跳过摸牌阶段时,你摸一张牌;你跳过出牌阶段时,本回合手牌上限无限制',
                    },
                };
                lib.config.all.characters.add('地府武将');
                lib.config.characters.add('地府武将');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:地府武将/image/${i}.jpg`)
                }
                lib.translate['地府武将_character_config'] = `地府武将`;
                return QQQ;
            });
        },
        package: {
            card: {
                card: {
                    暗杀: {
                        image: `ext:地府武将/image/暗杀.jpg`,
                        fullborder: 'gold',
                        type: 'spell',
                        subtype: 'spell_gold',
                        enable(card, player) {
                            var enemies = player.getEnemies();
                            return game.hasPlayer(function (current) {
                                return current.hp == 1 && enemies.includes(current);
                            });
                        },
                        notarget: true,
                        contentBefore() {
                            player.$skill('暗杀', 'legend', 'metal');
                        },
                        content() {
                            var enemies = player.getEnemies();
                            var list = game.filterPlayer(function (current) {
                                return current.hp == 1 && enemies.includes(current);
                            });
                            if (list.length) {
                                var target = list.randomGet();
                                player.line(target);
                                target.die();
                            }
                        },
                        contentAfter() {
                            var evt = _status.event.getParent('phaseUse');
                            if (evt && evt.name == 'phaseUse') {
                                evt.skipped = true;
                            }
                        },
                        ai: {
                            value: 8,
                            useful: [6, 1],
                            result: {
                                player: 1,
                            },
                            order: 0.6,
                        },
                        fullimage: true,
                    },
                },
                translate: {
                    暗杀: '暗杀',
                    暗杀_info: '令一名体力为1的随机敌方角立即死亡,结束出牌阶段',
                },
            },
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '无名玩家',
            version: '2.0',
        },
    };
});
