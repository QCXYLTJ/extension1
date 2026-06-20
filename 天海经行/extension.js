import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    //daice
    return {
        name: '天海经行',
        content(config, pack) {
        },
        precontent(strl) {
            //新增势力函数
            game.strl_addGroup = function (name, mapping, gradient) {
                var n, t;
                if (!name) return;
                if (typeof name == 'string') {
                    n = name;
                    t = name
                } else if (Array.isArray(name) && name.length == 2 && typeof name[0] == 'string') {
                    n = name[0];
                    t = name[1]
                } else return;
                if (!mapping || !Array.isArray(mapping) || mapping.length != 3) mapping = [199, 21, 133];
                var y = `(${mapping[0]},${mapping[1]},` + mapping[2];
                var y1 = y + ',1)', y2 = y + ')';
                var s = document.createElement('style');
                s.innerHTML = `.player .identity[data-color='diy${n}'],`;
                s.innerHTML += `div[data-nature='diy${n}'],`;
                s.innerHTML += `span[data-nature='diy${n}'] {text-shadow: black 0 0 1px,rgba${y1} 0 0 2px,rgba${y1} 0 0 5px,rgba${y1} 0 0 10px,rgba${y1} 0 0 10px}`;
                s.innerHTML += `div[data-nature='diy${n}m'],`;
                s.innerHTML += `span[data-nature='diy${n}m'] {text-shadow: black 0 0 1px,rgba${y1} 0 0 2px,rgba${y1} 0 0 5px,rgba${y1} 0 0 5px,rgba${y1} 0 0 5px,black 0 0 1px;}`;
                s.innerHTML += `div[data-nature='diy${n}mm'],`;
                s.innerHTML += `span[data-nature='diy${n}mm'] {text-shadow: black 0 0 1px,rgba${y1} 0 0 2px,rgba${y1} 0 0 2px,rgba${y1} 0 0 2px,rgba${y1} 0 0 2px,black 0 0 1px;}`;
                document.head.appendChild(s);
                if (gradient && Array.isArray(gradient) && Array.isArray(gradient[0]) && gradient[0].length == 3) {
                    var str = '', st2 = [];
                    for (var i = 0; i < gradient.length; i++) {
                        str += `,rgb(${gradient[i][0]},${gradient[i][1]},${gradient[i][2]})`;
                        if (i < 2) st2[i] = `rgb(${gradient[i][0]},${gradient[i][1]},${gradient[i][2]})`;
                    }
                    var tenUi = document.createElement('style');
                    tenUi.innerHTML = `.player>.camp-wrap[data-camp='${n}']>.camp-back {background: linear-gradient(to bottom${str});}`;
                    tenUi.innerHTML += `.player>.camp-wrap[data-camp='${n}']>.camp-name {text-shadow: 0 0 5px ${st2[0]}, 0 0 10px ${st2[1]};}`;
                    document.head.appendChild(tenUi);
                }
                lib.group.add(n);
                lib.translate[n] = t;
                lib.translate[n + '2'] = t;
                lib.groupnature[n] = 'diy' + n;
            };
            //增加势力
            game.strl_addGroup(['herta', '黑塔站'], [132, 94, 194], [[180, 134, 255], [80, 40, 145]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
            game.strl_addGroup(['starail', '星穹列车'], [0, 49, 182], [[211, 193, 255], [77, 82, 223]]);
            game.strl_addGroup(['belobog', '雅利洛VI'], [0, 225, 228], [[60, 208, 255], [0, 85, 126]]);
            game.strl_addGroup(['luofu', '仙舟罗浮'], [230, 197, 0], [[242, 254, 220], [255, 191, 74]]);
            game.strl_addGroup(['hunter', '星核猎手'], [227, 74, 196], [[255, 168, 255], [94, 0, 77]]);
            game.strl_addGroup(['laris', '行至群星'], [255, 169, 89], [[116, 116, 116], [190, 190, 190]]);
            game.strl_addGroup(['ipc', '公司'], [255, 178, 47], [[255, 178, 47], [255, 217, 153]]);
            game.strl_addGroup(['penacony', '匹诺康尼'], [144, 51, 255], [[200, 32, 144], [106, 20, 209]]);
            //动态描述
            lib.dynamicTranslate.Treasure = function (player) {
                if (!player.storage.Treasure) return '出牌阶段限 1 次,你可以摸 3 张牌,展示手牌并弃置至 2 种类型;你不因此弃置牌后,可以交换两个数字.';
                var num0 = player.storage.Treasure[0];
                var num1 = player.storage.Treasure[1];
                var num2 = player.storage.Treasure[2];
                return `出牌阶段限 ${num0} 次,你可以摸 ${num1} 张牌,展示手牌并弃置至 ${num2} 种类型;你不因此弃置牌后,可以交换两个数字.`
            };
            lib.dynamicTranslate.Limpid = function (player) {
                if (!player.storage.Limpid) return `目标唯一的【杀】结算后,你可以<strl-a text='strl_Search_info'>检索</strl-a>一张<font color=#FFB300>基本牌</font>,选择一项:1.将此牌交给目标并交换黄色部分;2.弃置此牌并对使用者使用一张因此亮出的<font color=#FFB300>锦囊牌</font>.`;
                var typ0 = get.translation(player.storage.Limpid[0]);
                var typ1 = get.translation(player.storage.Limpid[1]);
                return `目标唯一的【杀】结算后,你可以<strl-a text='strl_Search_info'>检索</strl-a>一张<font color=#FFB300>${typ0}牌</font>,选择一项:1.将此牌交给目标并交换黄色部分;2.弃置此牌并对使用者使用一张因此亮出的<font color=#FFB300>${typ1}牌</font>.`
            };
            lib.dynamicTranslate.Chased = function (player) {
                if (player.storage.Chased2) return `每回合限一次,你指定或成为即时牌的唯一目标后,可以<strl-a text='strl_Cover_info'>盖伏</strl-a>目标及使用者与其路径上角色各至多一张牌;本回合的结束阶段,你可以将这些牌移动至多<font color=#00D62A>${player.storage.Chased2}</font>个位次.`;
                return `每回合限一次,你指定或成为即时牌的唯一目标后,可以<strl-a text='strl_Cover_info'>盖伏</strl-a>目标及使用者与其路径上角色各至多一张牌.`
            };
            lib.dynamicTranslate.Solibrave = function (player) {
                if (player.storage.Cracksky) return `你攻击范围内体力值不小于你的角色使用<font color=#C4002E>【${get.translation(player.storage.Cracksky[0])}】</font>时,你可以摸两张牌并令此<font color=#C4002E>【${get.translation(player.storage.Cracksky[0])}】</font>无效.除非你将手牌弃置至与其相同,否则本回合:此技能失效且你不能再使用或打出手牌.`;
                return '你攻击范围内体力值不小于你的角色使用<font color=#C4002E>【闪】</font>时,你可以摸两张牌并令此<font color=#C4002E>【闪】</font>无效.除非你将手牌弃置至与其相同,否则本回合:此技能失效且你不能再使用或打出手牌.'
            };
            lib.dynamicTranslate.Cracksky = function (player) {
                if (player.storage.Cracksky) return `出牌阶段限一次,你可以展示手牌并将其中所有<font color=#C4002E>【${get.translation(player.storage.Cracksky[1])}】</font>当作一张【决斗】使用;你因此造成伤害后,可以交换此技能与【踏擂】中的两个基本牌名.`;
                return '出牌阶段限一次,你可以展示手牌并将其中所有<font color=#C4002E>【杀】</font>当作一张【决斗】使用;你因此造成伤害后,可以交换此技能与【踏擂】中的两个基本牌名.'
            };
            //获得我与目标之间满足条件的所有角色 
            //使用方法:player.pathBetween(终点角色,满足条件),返回值:[较短一边的角色,较长一边的角色,是否相同](若相同左边优先).
            lib.element.player.pathBetween = function (target, filter) {
                var list = [], left = [], right = [], player = this, left2 = this.previous, right2 = this.next;
                while (left2 && ![player, target].includes(left2)) {
                    left.push(left2);
                    left2 = left2.previous;
                }
                while (right2 && ![player, target].includes(right2)) {
                    right.push(right2);
                    right2 = right2.next;
                }
                var retl = [], retr = [];
                for (var i of left) {
                    if (filter(player, i)) retl.push(i);
                }
                for (var i of right) {
                    if (filter(player, i)) retr.push(i);
                }
                if (left.length = right.length) list = [retl, retr, true];
                else if (left.length < right.length) list = [retl, retr, false];
                else list = [retr, retl, false];
                return list;
            }
            lib.element.player.hasPathBetween = function (target, filter) {
                var left = [], right = [], player = this, left2 = this.previous, right2 = this.next;
                while (left2 && ![player, target].includes(left2)) {
                    left.push(left2);
                    left2 = left2.previous;
                }
                while (right2 && ![player, target].includes(right2)) {
                    right.push(right2);
                    right2 = right2.next;
                }
                var retl = [], retr = [];
                for (var i of left) {
                    if (filter(player, i)) retl.push(i);
                }
                for (var i of right) {
                    if (filter(player, i)) retr.push(i);
                }
                if (left.length == right.length) return retl.length || retr.length;
                else if (left.length < right.length) return retl.length;
                else return retr.length;
            }
            lib.element.player.searchCard = function (filter) {
                var next = game.createEvent('searchCard');
                next.player = this;
                next.filter = filter || false;
                next.setContent('searchCard');
                return next;
            }
            lib.element.content.searchCard = function () {
                'step 0'
                //检索ing
                event.lis = [];
                'step 1'
                var cardx = get.cards(1);
                player.showCards(cardx);
                if (event.filter(cardx[0], player)) {
                    event.cardx = cardx[0];
                    event.flag = true;
                    player.gain(cardx, 'gain2');
                }
                else {
                    event.lis.push(cardx[0]);
                    if (event.lis.length <= 4) event.goto(1);
                    else event.flag = false;
                }
                'step 2'
                game.cardsDiscard(event.lis);
                var flag = event.flag;
                var cardx = event.cardx;
                var cards = event.lis;
                event.result = {
                    bool: flag,
                    card: cardx,
                    cards: cards,
                };
                if (!flag) game.log(player, '检索失败');
            }
            lib.init.css('extension/天海经行', 'main');
            if ('customElements' in window) {
                window.customElements.define(
                    'strl-a',
                    class extends HTMLElement {
                        constructor() {
                            super();
                            let str = this.getAttribute('text');
                            this.innerHTML = '<u>'
                                + this.innerHTML
                                + '</u>';
                            this._customintro = dialog => {
                                dialog.addText(get.translation(str));
                            };
                            lib.setIntro(this);
                        }
                    }
                );
            };
            game.import('character', function () {
                var strl = {
                    name: 'strl',
                    connect: true,//允许这个扩展联机使用的语句
                    characterSort: {
                        strl: {
                            Destruction: ['strl_Hook', 'strl_Clara', 'strl_Yinyue', 'strl_Blade', 'strl_Arlan', 'strl_Jingliu', 'strl_Xueyi'],//毁灭
                            Hunter: ['strl_Yanqing', 'strl_Sushang', 'strl_Seele', 'strl_Danheng', 'strl_Ratio', 'strl_Boothill'],//巡猎
                            Erudition: ['strl_Herta', 'strl_Qingque', 'strl_Serval', 'strl_Jingyuan', 'strl_Himeko', 'strl_Argenti'],//智识
                            Harmony: ['strl_Bronya', 'strl_Tingyun', 'strl_Yukong', 'strl_Asta', 'strl_Hanya',/*'strl_Robin'*/],//同谐
                            Nihility: ['strl_Kafka', 'strl_Guinaifen', 'strl_Luka', 'strl_Sampo', 'strl_SilverWolf', 'strl_Pela', 'strl_Acheron'],//虚无
                            Preservation: ['strl_Fuxuan', 'strl_March7th', 'strl_Gepard', 'strl_Aventurine'],//存护
                            Abundance: ['strl_Bailu', 'strl_Luocha', 'strl_Lynx', 'strl_Huohuo'],//丰饶
                        }
                    },//武将分包
                    character: {
                        strl_Herta: ['female', 'herta', '3/3', ['Treasure', 'Contempt'], []],
                        strl_Fuxuan: ['female', 'luofu', '3/3', ['Predict', 'Upstare'], []],
                        strl_Bailu: ['female', 'luofu', '3/3', ['Mistpearl', 'Sangreal'], []],
                        strl_Bronya: ['female', 'belobog', '3/4', ['Iron', 'Sunshine'], ['zhu']],
                        strl_Qingque: ['female', 'luofu', '3/3', ['Mahjong', 'Laze'], []],
                        strl_Yanqing: ['male', 'luofu', '4/4', ['Frocust'], []],
                        'strl_March7th': ['female', 'starail', '3/3', ['Memory', 'Preserve'], []],
                        strl_Hook: ['female', 'belobog', '3/3', ['Lighter', 'Together'], []],
                        strl_Clara: ['female', 'belobog', '3/3', ['Reaching', 'Breaking'], []],
                        strl_Tingyun: ['female', 'luofu', '3/3', ['Trader', 'Prayer'], []],
                        strl_Sushang: ['female', 'luofu', '4/4', ['Limpid'], []],
                        strl_Kafka: ['female', 'hunter', '3/3', ['UseStrings', 'Moonsonata'], []],
                        strl_Luocha: ['male', 'luofu', '2/3', ['Flower', 'Abyss'], []],
                        strl_Seele: ['female', 'belobog', '4/4', ['Shadow', 'Sickle'], ['hiddenSkill']],
                        strl_Gepard: ['male', 'belobog', '4/4', ['Rampart'], []],
                        strl_Guinaifen: ['female', 'luofu', '3/3', ['Troll', 'Shock'], []],
                        strl_Serval: ['female', 'belobog', '3/3', ['Piersky', 'Rocktide'], []],
                        strl_Danheng: ['male', 'starail', '3/4', ['Northwind', 'Awakenning'], []],
                        strl_Yinyue: ['male', 'starail', '3/3', ['Arrogance', 'Homecoming'], []],
                        strl_Yukong: ['female', 'luofu', '3/3', ['Chased', 'Managing'], []],
                        strl_Luka: ['male', 'belobog', '4/4', ['Solibrave', 'Cracksky'], []],
                        strl_Lynx: ['female', 'belobog', '3/3', ['Habitat', 'Explore'], []],
                        strl_Jingyuan: ['male', 'luofu', '4/4', ['Thunerut', 'Dispatch'], ['zhu']],
                        strl_Sampo: ['male', 'belobog', '3/3/1', ['Business', 'Caprices'], []],
                        strl_Asta: ['female', 'herta', '3/3', ['Meteor', 'Milkyway'], []],
                        strl_SilverWolf: ['female', 'hunter', '3/3', ['Axsign', 'Dfault'], []],
                        strl_Huohuo: ['female', 'luofu', '3/3', ['Tailight', 'Pedeter'], []],
                        strl_Himeko: ['female', 'starail', '3/3', ['Tourstar', 'Shooting'], []],
                        strl_Pela: ['female', 'belobog', '3/3', ['Analyse', 'Pursuit'], []],
                        strl_Blade: ['male', 'hunter', '2/4', ['Bloodise', 'Deathmatch'], []],
                        strl_Hanya: ['female', 'luofu', '3/3', ['Miss', 'Quill'], []],
                        strl_Xueyi: ['female', 'luofu', '3/3', ['Live', 'Pierc'], []],
                        strl_Ratio: ['male', 'laris', '4/4', ['Staty', 'Edifall'], []],
                        strl_Argenti: ['male', 'laris', '4/4', ['Poemance', 'Romance'], []],
                        strl_Jingliu: ['female', 'luofu', '2/2', ['Sword', 'Sould'], []],
                        strl_Acheron: ['female', 'laris', '3/3', ['Godelegy', 'Meicry'], []],
                        strl_Aventurine: ['male', 'ipc', '4/4', ['Wheel', 'Allin'], []],
                        strl_Boothill: ['male', 'laris', '5/5', ['Highnoon', 'Timepiec'], []],
                        //'strl_Robin':['female','penacony','3/3',['Frombreaking','Soaringpast'],[]],
                        //'strl_Arlan':['male','herta','4/4',['Lightening'],[]],
                    },//武将属性
                    characterIntro: {
                        strl_Herta: '空间站「黑塔」真正的主人.<br>身为湛蓝星智商最高的人类,只做自己感兴趣的事,一旦失去兴趣就立刻走人——空间站就是最好的例子.<br>平时以远程操纵的人偶形态登场:<跟我小时候比,勉强七分相似吧.>——黑塔本人.',
                        strl_Fuxuan: '仙舟「罗浮」太卜司之首,自信耿直的智者.<br>凭借第三眼与穷观阵为仙舟占算航路,预卜事务吉凶,坚信自己所做的一切便是事情的「最优解」.<br>符玄等待着将军承诺的「退位让贤」,然而这一天的到来…似乎还遥遥无期.',
                        strl_Bailu: '性格活泼的小女孩,持明族的「衔药龙女」,药到病除的名医.<br>经常开出不拘一格的药方,如⌈多喝热水⌋、⌈睡一觉就好了⌋.<br>见不得人受苦,治病时总是闭着眼睛.<br>——总之病好了就行.',
                        strl_Bronya: '贝洛伯格「大守护者」继承人,年轻干练的银鬃铁卫统领.<br>布洛妮娅从小接受着严格的教育,具备一名「继承人」所需的优雅举止与亲和力.<br>但在看到下层区的恶劣环境后,未来的最高决策者逐渐生出了疑惑…「我所受的训练,真的能带领人民过上他们想要的生活么？」',
                        strl_Qingque: '太卜司的普通卜者,在「忙里偷闲」这件事上绝不偷闲.<br>顺应父母的期望考入太卜司,却发现本以为清闲的铁饭碗是高强度的职场苦海.<br>经过数年历练,青雀终于磨砺了一身本领——无论部门流转,她仍旧是最低职级的卜者.<br>没事翻翻书,玩玩古代牌戏…人生如此,夫复何求？',
                        strl_Yanqing: '意气飞扬的云骑骁卫,仙舟「罗浮」最强剑士.<br>为剑生亦为剑痴,当彦卿手中握剑时,无人敢小看这位尚在总角之年的天才.<br>或许能让手中宝剑微微收敛锋芒的,只有时间.',
                        'strl_March7th': '精灵古怪的少女,热衷于这个年纪的女孩子应当「热衷」的所有事.<br>随身不离照相机,坚信只要自己跟着列车,终有一天能拍下与过去有关的照片.<br>被列车发现时,她正被封在一块漂流的恒冰中.<br>少女苏醒后,却发现自己对身世与过往都一无所知.短暂的消沉之后,她决定以重获新生的日期为自己命名.<br>这一天,三月七「诞生」了.',
                        strl_Hook: '冒险集团「鼹鼠党」的头头,自称「漆黑的虎克大人」.<br>不喜欢被人称作小家伙,认为自己不依靠大人也能独挡一面.<br>大人们去裂界里冒险,桑博先生去地面上冒险,病人们冒险接受娜塔莎的治疗…在虎克的带领下,孩子们也要有自己的冒险!',
                        strl_Clara: '被机器人养大的女孩,有着超越年龄的通透和坚持.<br>对克拉拉而言,史瓦罗理性的计算是世界法则,绝不会出错.<br>直到发现「计算」得到的结果,并不一定能带给大家幸福.<br>怯生生的女孩决定勇敢起来.',
                        strl_Tingyun: '八面玲珑的狐人少女,天舶司商团「鸣火」的首席代表.<br>停云天生生得一副慧心妙舌,但凡她开口,人们就免不了想听她多说几句.在她的调度下,仙舟的贸易庆典逐渐声名远扬.<br>能不战斗就尽量不去战斗,能劝为己用就尽量劝为己用——这便是停云的原则.',
                        strl_Sushang: '单纯热心的云骑军新人,执一柄重剑.<br>憧憬着云骑军历史上的传奇,渴望成为响当当的人物.<br>为此,素裳坚决恪守「急人所急,有求必应;日行一善,三省吾身」的信条,过着助人为乐的忙碌日子.',
                        strl_Kafka: '在星际和平公司的通缉档案里,卡芙卡只留下了名字和「爱好收集大衣」的纪录.人们对这位星核猎手所知甚少,只知道她是「命运的奴隶」艾利欧最信任的成员之一.<br>为了到达艾利欧预见的「未来」,卡芙卡开始行动.',
                        strl_Luocha: '金发俊雅的年轻人,背着巨大的棺椁.<br>身为天外行商的他,不幸被卷入仙舟罗浮的星核危机.<br>一手精湛医术莫名有了用武之地.',
                        strl_Seele: '飒爽俊逸的「地火」成员,成长于地底危险混乱的环境,习惯独来独往.<br>作为曾经的弱者,如今的她锲而不舍地追求更强大的力量.为了有朝一日揭示地底的真相,为了给自己的族人正名,希儿可以忍受任何痛苦.<br>保护与被保护,压迫与被压迫,世界向希儿展示的始终是非黑即白的那一面————<br>直至「那名少女」的出现.',
                        strl_Gepard: '高洁正直的银鬃铁卫戍卫官,出身于血脉高贵的朗道家族.<br>在时刻遭受风雪侵凌的贝洛伯格,人们的衣食住行尚能如旧——<br>正是因为杰帕德与他率领的银鬃铁卫在守护这平淡无奇的日常生活.',
                        strl_Guinaifen: '因机缘巧合留在仙舟的化外民,如今是热情烂漫的街头艺人.<br>本名「格妮薇儿」,「桂乃芬」是好友素裳为她起的仙舟名.<br>面对「罗浮」的全新人生,凭着对仙舟文化的热爱,桂乃芬很快学到了安身立命的一技之长——倒立吃面条、胸口碎大石、徒手接子弹等等.',
                        strl_Serval: '穿过商店街,沿着火花塞的香气,就能找到我——希露瓦的「永动」机械屋.<br>你说闻不出来？唔,鼻子不灵光,耳朵还能用吧？<br>找音响声音最大的铺子就对了!',
                        strl_Danheng: '清冷寡言的少年,持有名为「击云」的长枪,于列车漫长的开拓之旅中担任护卫.<br>丹恒对自己的过往始终讳莫如深,他与列车同行正是为了摆脱自己曾亲手造就的一切.<br>然而,列车真的会带着他远离「过去」么？',
                        strl_Yinyue: '罗浮龙尊,掌苍龙之传.行云布雨,膺责守望不死建木.尊号「饮月君」.——<仙舟通鉴 • 五龙远徙>',
                        strl_Yukong: '仙舟「罗浮」天舶司司舵,性情温和,处事老练.<br>年轻时作为飞行士久历战阵,以优秀的战绩成为主司,却因一场惨烈的战争不再飞翔天际.<br>如今虽已褪去锋芒,专心操持公务,但「罗浮」的航向上始终有她的身影.',
                        strl_Luka: '乐观阳光、不拘小节的机械臂自由格斗家,「地火」成员之一.<br>从拳台到战场,从拳击手到战士,卢卡用这份力量去守护下层区的人们.<br>正因为自己曾经体会过绝望,所以他更渴望将希望带给其他人.',
                        strl_Lynx: '朗道家年龄最小的女孩,贝洛伯格首屈一指的极地探险家.<br>看似慵懒,实际上执行力极强.散发生人勿近的气场只是为了避免不必要的社交.<br>至于如何定义不必要的社交——「呃…所有社交不都是没必要的吗？」',
                        strl_Jingyuan: '外表懒散、心思缜密的仙舟「罗浮」云骑将军.拥有长生不老躯体的仙舟人.<br>不以危局中力挽狂澜为智策,因此在常事上十分下功夫,以免节外生枝.<br>因其细心谋划,仙舟承平日久,看似行事慵懒的景元反被送上绰号「闭目将军」.',
                        strl_Sampo: '口若悬河的倒货商人,只要有「利」的地方,就有桑博的身影.<br>桑博手中绝无仅有的情报让人不得不接近他,不过成为他的「客人」并不是什么好事.<br>毕竟只要价钱合适,「客人」也随时可以转化为「商品」.',
                        strl_Asta: '好奇心与精力都很旺盛的少女,空间站「黑塔」的名义站长.<br>无论是管理各抒己见的科员,还是直接又不失礼貌地回复博识学会的种种刁难,对艾丝妲来说都易如反掌.<br>毕竟指挥空间站…总比继承家业简单吧!',
                        strl_SilverWolf: '将宇宙视为游戏的超级骇客.<br>无论怎样棘手的防御系统,银狼都能轻松破解.她与「天才俱乐部」螺丝咕姆的数据攻防战,现已成为骇客界的传说.<br>宇宙中还有多少亟待攻破的关卡？银狼对此十分期待.',
                        strl_Huohuo: '可怜又弱小的狐人小姑娘,也是怕鬼捉鬼的罗浮十王司见习判官.<br>名为「尾巴」的岁阳被十王司的判官封印在她的颀尾上,使她成为了招邪的「贞凶之命」.<br>害怕妖魔邪物,却总是受命捉拿邪祟,完成艰巨的除魔任务;<br>自认能力不足,却无法鼓起勇气辞职,只好默默害怕地继续下去.',
                        strl_Himeko: '充满冒险精神的科学家,少女时代在故乡遭遇了搁浅的星穹列车.<br>若干年后,当姬子终于修复列车驶入群星时,她意识到这只是个开始.在「开拓」新世界的道路上,需要更多的同伴——<br>即使同行的人们面朝不同的方向,他们仍处于同一片星空下.',
                        strl_Pela: '行事周密的银鬃铁卫情报官,年纪不大但头脑出众.<br>无论是部队调动、物资分配还是地形状况,佩拉都能冷静地即问即答,毫无错漏.<br>至于佩拉的手机壳…「这与工作无关,长官.」',
                        strl_Blade: '弃身锋刃的剑客,原名不详.<br>效忠于「命运的奴隶」,拥有可怖的自愈能力.<br>手持古剑作战,剑身遍布破碎裂痕,正如其身,亦如其心.',
                        strl_Hanya: '仙舟「罗浮」的「十王司」判官之一,负责拘、锁、刑、问的四判官中的「问」.<br>专司读取犯人的因果罪愆,而后以「冥谶天笔」书写业报判罚.<br>由于整日使用梦占形式工作,承受着巨量魔阴身因果信息的冲刷,早已对世间万事感到索然无味.<br>只有与同为判官的姐姐雪衣行动时,才会流露片刻的真心.',
                        strl_Xueyi: '仙舟「罗浮」的「十王司」判官之一,负责拘、锁、刑、问的四判官中的「拘」.<br>手持铁索与破魔锥,不知疲倦地寻索重犯,将其勾摄镇伏.',
                        strl_Arlan: '不善言辞的空间站「黑塔」防卫科负责人.<br>虽然不懂科研,但为了保护珍视研究的空间站科员顺利完成他们的研究,阿兰可以拼上性命.他早已习惯疼痛,并将负伤视作勋章.<br>也只有抱着佩佩时,男孩才会放下戒备,露出难得一见的笑容.',
                        strl_Ratio: '直率而自我的博识学会学者,常以奇怪的石膏头雕遮蔽面容.<br>自幼便展露出过人的才智,如今却以「庸人」自居.<br>坚信智慧与创造力并不为天才独有,致力于向全宇宙传播知识,医治名为愚钝的顽疾.',
                        strl_Argenti: '「纯美骑士团」的古典骑士.<br>他为人正直、光明磊落,高贵的天性令人敬佩——一位游走宇宙间的独行者,坚定践行「纯美」.<br>维护「纯美」在宇宙间的名誉,是银枝的职责:履行这一义务,起手需虔诚,落枪时则将要令人心悦诚服.',
                        strl_Jingliu: '传奇「云上五骁」之一,人送尊号「无罅飞光」.<br>超脱了人间的胜负,为了获得斩杀「神」的力量,她选择走上截然不同的道路.<br>至此之后,仙舟的记录中少了一个罗浮「剑首」,多了一个名字被抹去的「叛徒」.',
                        strl_Acheron: '自称「巡海游侠」的旅人,本名不详.身佩一柄长刀,独行银河.淡漠寡言,剑出如紫电般迅猛,却从来只以刀鞘战斗,收而不发.',
                        strl_Aventurine: '星际和平公司「战略投资部」的高级干部,「石心十人」之一,基石为「诡弈砂金」.个性张扬的风险爱好者,时常面带笑容,真心却难以揣测. 靠着同命运的博弈赢得如今的地位,将人生视作一场高风险、高回报的投资,而他向来游刃有余.',
                        strl_Boothill: '浪迹银河的改造人牛仔,极度乐观、放荡不羁.<br>身为「巡海游侠」的一员,为惩奸除恶,可以无所不用其极——<br>高调行事的背后,渴望以此引起复仇对象「星际和平公司」的注意.',
                        strl_Robin: '出生于匹诺康尼,闻名银河的天环族歌者,举止从容优雅的少女.<br>此次受家族宴请回到故乡,在「谐乐大典」为众宾献歌一曲.<br>可以依靠「同谐」的力量传递歌声,在歌迷乃至万界生灵之中展现「共鸣」.',
                    },//武将简介
                    characterTitle: {
                        strl_Herta: '<font color=#845EC2>卓尔不凡的理性</font>',
                        strl_Fuxuan: '<font color=#F090FF>知天观命的太卜</font>',
                        strl_Bailu: '<font color=#90A7FF>悬壶济世的龙女</font>',
                        strl_Bronya: '<font color=#D6D6D6>执握帷旗的银鬃</font>',
                        strl_Qingque: '<font color=#008781>浮生偷闲的弈人</font>',
                        strl_Yanqing: '<font color=#3AB8FF>意气飞扬的剑士</font>',
                        'strl_March7th': '<font color=#FFAAF7>追觅过去的少女</font>',
                        strl_Hook: '<font color=#E9DD00>撕破黑夜的新火</font>',
                        strl_Clara: '<font color=#D60000>释融冰凌的花雨</font>',
                        strl_Tingyun: '<font color=#FF8B00>八面玲珑的瑞狐</font>',
                        strl_Sushang: '<font color=#F6BF3E>行侠执义的云骑</font>',
                        strl_Kafka: '<font color=#7E2B8F>牵引人心的猎手</font>',
                        strl_Luocha: '<font color=#00755F>辞归久远的行医</font>',
                        strl_Seele: '<font color=#BAA1D5>穿梭幻海的蝴蝶</font>',
                        strl_Gepard: '<font color=#5A95FF>高洁正直的戍卫</font>',
                        strl_Guinaifen: '<font color=#FF6E00>热情烂漫的艺人</font>',
                        strl_Serval: '<font color=#FF79FA>震慑世界的强音</font>',
                        strl_Danheng: '<font color=#00B4B7>沉渊远遁的潜龙</font>',
                        strl_Yinyue: '<font color=#00B4B7>盘挈耀跃的真龙</font>',
                        strl_Yukong: '<font color=#00D62A>触及天云的纸鸢</font>',
                        strl_Luka: '<font color=#C4002E>守护他人的决意</font>',
                        strl_Lynx: '<font color=#80F4AB>缀明险地的极光</font>',
                        strl_Jingyuan: '<font color=#FFF416>远略长算的将军</font>',
                        strl_Sampo: '<font color=#2C2A58>利益至上的贾者</font>',
                        strl_Asta: '<font color=#560007>凝望星空的知者</font>',
                        strl_SilverWolf: '<font color=#574FB2>朋克洛德的跃动</font>',
                        strl_Huohuo: '<font color=#00C7A5>贞凶伏颀的幼狐</font>',
                        strl_Himeko: '<font color=#9F0029>求索远星的航者</font>',
                        strl_Pela: '<font color=#009ACE>虑周藻密的远洋</font>',
                        strl_Blade: '<font color=#364E66>弃身碎锋的剑客</font>',
                        strl_Hanya: '<font color=#2F5379>梦占愆罪的判官</font>',
                        strl_Xueyi: '<font color=#2F5379>镇魄勾魔的偃偶</font>',
                        strl_Arlan: '<font color=#9840D3>万死不辞的誓心</font>',
                        strl_Ratio: '<font color=#624A96>通流真理的教授</font>',
                        strl_Argenti: '<font color=#9D000D>誓卫纯美的骑士</font>',
                        strl_Jingliu: '<font color=#7CAACE>誓扫云翳的飞光</font>',
                        strl_Acheron: '<font color=#FF0000>真赤无我的诏刀</font>',
                        strl_Aventurine: '<font color=#FFE65B>策如诡弈的赌徒</font>',
                        strl_Boothill: '<font color=#D1D1D1>尘魔舞者的日落</font>',
                        strl_Robin: '<font color=#84BCD2>齐奏谐乐的诗班</font>',
                    },//武将称号
                    card: {
                        oldliecui: {
                            fullskin: true,
                            cardimage: 'pyzhuren_diamond',
                            derivation: 'strl_Blade',
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            skills: ['oldliecui'],
                            ai: {
                                basic: {
                                    equipValue: 3,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card), current = player.getEquip(info.subtype), value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                    },
                    translate: {
                        //分包
                        Destruction: '毁灭-纳努克',//毁灭
                        Hunter: '巡猎-岚',//巡猎
                        Erudition: '智识-博识尊',//智识
                        Harmony: '同谐-希佩',//同谐
                        Nihility: '虚无-IX',//虚无
                        Preservation: '存护-克里珀',//存护
                        Abundance: '丰饶-药师',//丰饶
                        //人名及其技能
                        strl_Herta: '黑塔',
                        Treasure: '璞阁',
                        Treasure_info: '『星海藏珍』<br><li>出牌阶段限 1 次,你可以摸 3 张牌,展示手牌并弃置至 2 种类型;你不因此弃置牌后,可以交换两个数字.',
                        Contempt: '拙嗤',
                        Contempt_info: `『浮宇藐世』<br><li>你于摸牌阶段外摸牌后,可以<strl-a text='strl_Cover_info'>盖伏</strl-a>之并弃置一名角色的一张牌.若如此做,你选择一项:1.移去所有与此牌同类型的盖伏牌;2.此技能于本回合失效.`,
                        strl_Cover_info: '<li>将所选牌扣置于盖伏目标的武将牌上.<br><li>本回合结束时,其获得武将牌上的盖伏牌.',
                        strl_Fuxuan: '符玄',
                        Predict: '观歙',
                        Predict_info: '『星舟占算』<br><li>轮次开始时,你可以<font color=#FFA9D1>观星3</font>;若如此做,本轮内你使用第X张牌结算后,当前回合角色视为使用【洞烛先机】(X为你因此置于牌堆底牌的数量).',
                        Upstare: '会览',
                        Upstare_info: '『登瞰穷极』<br><li>每轮限一次,你可以摸两张牌或弃置两张牌,视为使用【无懈可击】;若你的手牌数为场上最值,你将之调整为另一最值.',
                        strl_Bailu: '白露',
                        Mistpearl: '鳞泽',
                        Mistpearl_info: '『坠珠吟云』<br><li>每回合限一次,一名角色进入濒死状态时,你可以亮出牌堆一端一张牌并令其选择一项:1.将与之同颜色的一张牌当【桃】使用;2.从牌堆另一端摸两张牌.',
                        Sangreal: '徙渊',
                        Sangreal_info: '『持明百脉』<br><li>你于一回合内使用的第一张即时牌结算后,可以将之置于牌堆底;本回合下一张即时牌结算后,使用者也可以如此做并令你摸两张牌.',
                        strl_Bronya: '布洛妮娅',
                        Iron: '锋染',
                        Iron_info: '『唯铁与血』<br><li>你仅为使用者或目标的黑色牌指定目标后,可弃置你与使用者各一张牌(无牌则不弃),再与其各从弃牌堆获得一张【杀】.这些牌:造成伤害后,你摸一张牌;回合结束时,置入弃牌堆.',
                        Sunshine: '熙袤',
                        Sunshine_info: '『琼筑灿阳』<br><li>觉醒技,准备阶段,若你区域内牌数不大于1,你将手牌摸至体力上限并减1点体力上限,获得『诛害』和无势力限制的『立军』.',
                        strl_lijun: '立军',
                        strl_lijun_info: '主公技,其他角色的出牌阶段限一次,其使用【杀】结算后,可以将之交给你,你可以令其摸一张牌且本阶段内使用【杀】的次数上限+1.',
                        strl_Qingque: '青雀',
                        Mahjong: '垣玉',
                        Mahjong_info: '『帝垣琼玉』<br><li>摸牌阶段,你可以改为从牌堆顶四张牌中随机获得一张并将其余牌扣置为<font color=#008781><琼玉></font>;你失去因此获得的牌后,可以选择一项:1.获得一张<font color=#008781><琼玉></font>;2.从牌堆顶将<font color=#008781><琼玉></font>补至四张.',
                        Laze: '眠畔',
                        Laze_info: '『棋坪作枕』<br><li>结束阶段,若你本回合使用的牌数小于体力上限,你可以观看差值张<font color=#008781><琼玉></font>;若之花色均(相同/不同),你可以移去之并视为使用(【无中生有】/【顺手牵羊】).',
                        strl_Yanqing: '彦卿',
                        Frocust: '砺圭',
                        Frocust_info: '『霜刃凌芒』<br><li>主要阶段开始时,你可将X张牌当冰【杀】使用并跳过此阶段(X为你本回合执行过的阶段数);因此造成伤害后,你将手牌数调整至X,并令此技能此后不能再于此阶段发动.',
                        'strl_March7th': '三月七',
                        Memory: '衷融',
                        Memory_info: '『璨然冰释』<br><li>锁定技,你的初始手牌数+2且你不能使用或打出初始手牌;你失去初始手牌时,可以令一名角色摸两张牌.',
                        Preserve: '忆录',
                        Preserve_info: `『所历珍存』<br><li>每轮限一次,一名角色的回合开始时,你可以将一张牌置于牌堆顶,令本回合视为【<strl-a text='strl_Dream_info'>寤寐</strl-a>】回合;直到本轮结束,你视为拥有『清冷』.`,
                        strl_Dream_info: '<li>回合结束时,将所有角色的体力值调整为回合开始时的数值.',
                        strl_Hook: '虎克',
                        Lighter: '羁翼',
                        Lighter_info: '『无邪光焰』<br><li>锁定技,每回合开始时,你弃置牌堆顶一张牌;若你(能/不能)使用之,你令当前回合角色(摸/弃置)一张牌,你可以使用一张弃置牌并令此技能于本轮失效.',
                        Together: '继谊',
                        Together_info: '『炙轨同行』<br><li>你或你距离1以内的角色受到另一方造成的伤害时,若你本回合失去过手牌,你可以改为与伤害来源各摸一张牌.',
                        strl_Clara: '克拉拉',
                        Reaching: '兰室',
                        Reaching_info: '『庭闱欣歌』<br><li>每回合限一次,你使用基本牌可以额外指定所有受伤状态相同的角色为目标,但因此指定的非法目标改为:与你各摸一张牌并复原你的武将牌.',
                        Breaking: '承纽',
                        Breaking_info: '『安得广厦』<br><li>有角色受到黑色牌的伤害后,你可以横置并令此牌于此后不能再造成伤害.',
                        strl_Tingyun: '停云',
                        Trader: '逢流',
                        Trader_info: '『四方盈泽』<br><li>出牌阶段限一次,你可以将一张牌当作【五谷丰登】使用;若之为(红色 / 黑色),你令亮出牌(加倍 / 减半)(向下取整).',
                        Prayer: '庆云',
                        Prayer_info: '『仪祷宣命』<br><li>结束阶段,你可以将中央区任意张花色不同的牌置于牌堆顶,令一名体力值等于这些牌数的角色回复1点体力并摸一张牌.',
                        strl_Sushang: '素裳',
                        Limpid: '秋波',
                        Limpid_info: `『游刃若水』<br><li>目标唯一的【杀】结算后,你可以<strl-a text='strl_Search_info'>检索</strl-a>一张<font color=#FFB300>基本牌</font>,选择一项:1.将此牌交给目标并交换黄色部分;2.弃置此牌并对使用者使用一张因此亮出的<font color=#FFB300>锦囊牌</font>.`,
                        strl_Search_info: '<li>发起检索者连续亮出牌堆顶的牌,直至亮出满足条件的牌或已经以此法亮出了五张牌为止.<br><li>若为前者,称为检索成功且发起检索者获得此牌,否则称为检索失败.',
                        strl_Kafka: '卡芙卡',
                        UseStrings: '借代',
                        UseStrings_info: '『游丝宣叙』<br><li>你每回合使用的首张即时牌结算后,若目标唯一且此牌在弃牌堆,你可以横置目标并令其获得此牌;若如此做,本回合的结束阶段,你展示其手牌并令其对由你指定的另一名角色使用其中一张.',
                        Moonsonata: '反讽',
                        Moonsonata_info: '『冷月奏鸣』<br><li>每回合限一次,当你成为其他角色使用【杀】或普通锦囊牌的目标时,你可以重铸一张能响应此牌的牌,交换此牌的使用者和其中一个目标.',
                        strl_Luocha: '罗刹',
                        Flower: '素绽',
                        Flower_info: '『空谷幽兰』<br><li>出牌阶段限一次,你可以令一名没有手牌的角色从牌堆底摸至多两张牌;本回合内其下一次失去所有手牌后,你摸其因此摸牌数两倍的牌.',
                        Abyss: '濯荆',
                        Abyss_info: '『祈遂悯愿』<br><li>每回合限一次,你可以将所有手牌当【桃】使用.此牌结算后,若之🃏且此技能在你的武将牌上,你可以令一名其他角色弃置等量的牌并发动你武将牌上一个技能.',
                        strl_Seele: '希儿',
                        Shadow: '掠闪',
                        Shadow_info: '『飒影刺夜』<br><li>隐匿技,你(登场/失去过所有手牌)的回合结束后,(你可以/当前回合角色可以令你)执行一个仅能使用黑色牌且不可响应的回合.',
                        Sickle: '翩析',
                        Sickle_info: '『蛱翼缭锋』<br><li>摸牌阶段,你可以改为亮出牌堆顶两张牌并依次当【杀】使用;你获得未因此造成伤害的牌,且使用即时牌可以额外指定本回合因此受到伤害的角色为目标.',
                        strl_Gepard: '杰帕德',
                        Rampart: '磐意',
                        Rampart_info: '『永屹峻垣』<br><li>【杀】或黑色锦囊牌每回合第一次指定目标时,你可以取消所有有牌的目标并弃置这些角色各一张牌;此牌结算后,弃置牌花色与你相同的角色依次选择:是否视为对使用者使用一张基本牌.',
                        strl_Guinaifen: '桂乃芬',
                        Troll: '肇涌',
                        Troll_info: '『兴澜幕启』<br><li>转换技,出牌阶段限一次,你可翻面并视为对自己使用①【以逸待劳】②【火攻】;若你因此弃置了红色牌,你可以将手牌摸至四张,或令此技能视为未发动过.',
                        Shock: '鼎沸',
                        Shock_info: '『振黯槌音』<br><li>每回合限一次,你受到伤害后,可以展示手牌并令伤害来源弃置任意张手牌;若上述牌花色不足四种,你回复1点体力.',
                        strl_Serval: '希露瓦',
                        Piersky: '穿云',
                        Piersky_info: '『彻贯天穹』<br><li>摸牌阶段开始时,你可以将一张牌当作【兵临城下】使用,本阶段摸牌数+X(X为你本回合造成的伤害数).',
                        Rocktide: '裂石',
                        Rocktide_info: '『灼潮炽阶』<br><li>锁定技,你不从手牌中使用牌结算后,当前回合角色需熔铸任意张牌;若这些牌花色均相同,你摸两张牌并令此技能于本回合失效.',
                        strl_Danheng: '丹恒',
                        Northwind: '朔风',
                        Northwind_info: '『定风波·疾』<br><li>出牌阶段限一次,你可以选择一项:1.将手牌调整至1;2.失去1点体力.若如此做,你视为使用一张不计次数的【杀】,且目标抵消此【杀】后,其需执行你未选择的一项.',
                        Awakenning: '梦觉',
                        Awakenning_info: '『如梦令·幡』<br><li>锁定技,你每轮首次失去最后的手牌或体力后,摸至多三张牌;本回合结束时,你需执行前等量项:1.熔铸你场上所有牌;2.视为使用【决斗】;3.将武将牌替换为<饮月君>.',
                        strl_Yinyue: '饮月君',
                        Arrogance: '龙睨',
                        Arrogance_info: '『浪淘沙·睨』<br><li>每回合限一次,你可以令你使用的单目标即时牌结算三次,但此牌效果依次改为:你将目标的一张牌置于牌堆底/牌堆顶/一名角色的手牌区并对其造成1点伤害.',
                        Homecoming: '龙归',
                        Homecoming_info: '『水龙吟·归』<br><li>你受到伤害结算后,可以依次执行已损失体力值项:1.摸你拥有技能数张牌;2.获得或失去已有的『龙魂』;3.使用一张【杀】.',
                        strl_Yukong: '驭空',
                        Chased: '辉往',
                        Chased_info: `『昔翼逐风』<br><li>每回合限一次,你指定或成为即时牌的唯一目标后,可以<strl-a text='strl_Cover_info'>盖伏</strl-a>目标及使用者与其路径上角色各至多一张牌;本回合的结束阶段,你可以将这些牌移动至多<font color=#00D62A>3</font>个位次.`,
                        Managing: '累牍',
                        Managing_info: '『鸣镝荡令』<br><li>你可以跳过摸牌阶段并移动场上一张装备牌;获得此牌的角色下个出牌阶段结束时,若其本阶段未使用过与之同花色的牌,你令『辉往』中<font color=#00D62A>绿色</font>数字或其本回合手牌上限-1.',
                        strl_Luka: '卢卡',
                        Solibrave: '独我',
                        Solibrave_info: '『孤峰踏擂』<br><li>你攻击范围内体力值不小于你的角色使用<font color=#C4002E>【闪】</font>时,你可以摸两张牌并令此<font color=#C4002E>【闪】</font>无效.除非你将手牌弃置至与其相同,否则本回合:此技能失效且你不能再使用或打出手牌.',
                        Cracksky: '势烈',
                        Cracksky_info: '『载志碎天』<br><li>出牌阶段限一次,你可以展示手牌并将其中所有<font color=#C4002E>【杀】</font>当作一张【决斗】使用;你因此造成伤害后,可以交换此技能与『踏擂』中的两个基本牌名.',
                        strl_Lynx: '玲可',
                        Habitat: '绝续',
                        Habitat_info: '『生境觅逐』<br><li>每名角色限一次,一名角色的准备阶段,若其体力值为 1,你可以亮出牌堆顶三张牌并与其各选择获得其中一张;因此获得♥️️牌的角色回复1点体力.',
                        Explore: '步量',
                        Explore_info: '『袤原勘丈』<br><li>锁定技,你使用牌指定唯一目标后,若:本回合你对你与其之间的所有角色均使用过牌,你摸一张牌;其在你攻击范围边缘且你本回合未对其使用过牌,你弃置其一张牌并重置『逐境』.',
                        strl_Jingyuan: '景元',
                        Thunerut: '百算',
                        Thunerut_info: '『曜霄谋著』<br><li>武将牌状态与你相同的角色的回合结束时,你可以进行至多三次【浮雷】判定并使用判定牌;你因此使用牌结算后,可以横置一名目标.',
                        Dispatch: '承平',
                        Dispatch_info: '『策遣戎戈』<br><li>主公技,准备阶段,若你没有『励战』或『生息』,你可以弃置一张牌并获得其中一个;否则你可以摸一张牌并将之交给一名其他仙舟罗浮角色.',
                        strl_Sampo: '桑博',
                        Business: '贸逆',
                        Business_info: '『待沽居奇』<br><li>一名角色的出牌阶段限一次,其可以将一张牌置于牌堆底并令你摸两张牌;若你的手牌数全场最多,你需将至少两张牌当作【杀】对由其指定的一名角色使用.',
                        'Business2': '贸逆',
                        Caprices: '暮翻',
                        Caprices_info: '『焚轮朝暮』<br><li>你使用【杀】指定唯一目标后,可令其所有邻家成为额外目标;若如此做,首名响应此【杀】的角色获得之.',
                        strl_Asta: '艾丝妲',
                        Meteor: '灿掣',
                        Meteor_info: '『流火祝言』<br><li>出牌阶段限一次,你可用一张红色即时牌对至多三名角色发动『晖云』,可以视为对未因此使用牌的角色使用转化底牌.',
                        Milkyway: '辰繁',
                        Milkyway_info: '『璀海千帆』<br><li>锁定技,当你的手牌数小于3-X时,你将手牌摸至3-X张;<br><li>每回合限一次,你或其他角色于另一方的回合内使用牌结算后,你观星X.(X为你发动②的次数且至多为3)',
                        strl_SilverWolf: '银狼',
                        Axsign: '流载',
                        Axsign_info: '『渺海游刃』<br><li>昂扬技,你可以将一张【影】置为牌堆顶第一至四张牌,视为使用任意即时牌.<br>激昂:有【影】进入弃牌堆的回合结束时.',
                        Dfault: '转储',
                        Dfault_info: '『流数幻方』<br><li>锁定技,你每回合首次指定或成为伤害牌的目标后,使用者选择一项:1.弃置一张基本牌并收回之;2.令此牌无效且你获得之.',
                        strl_Huohuo: '藿藿',
                        Tailight: '遣尾',
                        Tailight_info: `『岁阳从征』<br><li>锁定技,你手牌中点数唯一最小的牌不计入上限,但你使用其中一张后,除非以另一张发动<strl-a text='zhaogujing_info'>『照骨镜』</strl-a>,否则弃置一张牌.`,
                        Pedeter: '煞压',
                        Pedeter_info: '『劾凌斥退』<br><li>每回合限一次,你使用非红色牌时,可令一名非目标角色于本回合内:手牌均视为【闪】,且使用最后一张后失去1点体力.',
                        strl_Himeko: '姬子',
                        Tourstar: '迢间',
                        Tourstar_info: '『银汉经行』<br><li>回合结束时,你可以摸四张牌并明置所有手牌;一名角色使用即时牌结算后,你需用所有同花色的明置牌替换之.',
                        visible_strl: '明置',
                        Shooting: '燎云',
                        Shooting_info: '『明焰天坠』<br><li>出牌阶段限一次,你可以令一名角色进行【火山】判定并使用判定牌;你与因前者受到伤害的角色各摸一张牌,再与因后者受到伤害的角色各弃置一张牌.',
                        strl_Pela: '佩拉',
                        Analyse: '制略',
                        Analyse_info: '『构策析敌』<br><li>你距离其不大于1的角色成为伤害牌的目标后,你可以翻面所有手牌;若你因此明置了与此牌同花色的牌,你获得此牌并令其摸一张牌,此技能于本回合失效.',
                        Pursuit: '追歼',
                        Pursuit_info: '『趋疾乘胜』<br><li>每回合限一次,当你造成伤害结算后,你可以令受伤角色弃置X张牌(X为你本回合使用过牌的花色数).',
                        strl_Blade: '刃',
                        Bloodise: '歧隳',
                        Bloodise_info: `『辟离彼岸』<br><li>你每回合首次使用基本牌结算后,可以从<strl-a text='strl_extraPile_info'>额外牌堆</strl-a>使用一张🃏点数的<strl-a text='oldliecui_info'>【烈淬刀】</strl-a>.此牌不因弃置而进入弃牌堆后,你失去1点体力并检索两张【杀】.`,
                        strl_extraPile_info: '即一套游戏外的牌堆,其中的牌可以通过一些技能进入游戏;额外牌堆的牌进入弃牌堆后,将之移出游戏.',
                        oldliecui: '烈淬刀',
                        oldliecui_info: '你使用【杀】对目标造成伤害时,可以弃置一张【杀】或武器牌,令此伤害+1.',
                        Deathmatch: '万销',
                        Deathmatch_info: '『百骸此间』<br><li>锁定技,你进入濒死状态时,废除一个非武器栏并获得一个额外武器栏,回复体力至1点.',
                        strl_Hanya: '寒鸦',
                        Miss: '棠棣',
                        Miss_info: '『今我来思』<br><li>锁定技,每回合结束时,你展示不因此获得的手牌并重铸其中一张非♥️️牌;若上述操作未均被执行,你可以移动场上一张牌并令此技能于本轮失效.',
                        Quill: '诛毫',
                        Quill_info: '『忘川冥谶』<br><li>出牌阶段,你可以横置以发动『笔伐』,增加选项三:将移出游戏的牌当冰【杀】对你使用,本回合只能使用该花色的牌.',
                        strl_Xueyi: '雪衣',
                        Live: '燕归',
                        Live_info: '『昔我往矣』<br><li>锁定技,你的手牌上限为空装备栏数;你弃置过牌的弃牌阶段结束时,可以重置场上唯一横置的角色并令其摸两张牌.',
                        Pierc: '拘寒',
                        Pierc_info: '『破魍锥锋』<br><li>准备阶段,你可以对自己发动『擅专』,获得场上一张装备牌且之于本回合视为雷【杀】;你的判定牌生效后,你需将之当作【铁索连环】使用或重铸.',
                        strl_Arlan: '阿兰',
                        Lightening: '霆裁',
                        Lightening_info: '『我身为引』<br><li>你每回合首次指定或成为黑色即时牌的目标后,可以将之效果改为【勠力同心】(若你未横置,你成为额外目标);若所有目标均执行了同一分支,你执行一次【闪电】判定.',
                        strl_Ratio: '真理医生',
                        Staty: '雕鉴',
                        Staty_info: '『覆履琢识』<br><li>每回合结束时,若本回合进入弃牌堆的花色不足四种,你可以令当前回合角色重复下述流程直至补齐之或因此弃置【杀】:摸一张牌,弃置半数取下张手牌.',
                        Edifall: '格知',
                        Edifall_info: '『雯云倾厦』<br><li>每回合限一次,有角色于你回合内弃置四字牌后,你可以视为使用【五谷丰登】;牌堆每洗切过一次,因此牌亮出牌数便+4.',
                        strl_Argenti: '银枝',
                        Poemance: '吟芝',
                        Poemance_info: '『倾锋若墨』<br><li>未造成伤害的【杀】不因此进入弃牌堆后,你可以将一张牌当【桃】使用或交出;若你体力值为全场最多,目标摸两张牌.',
                        Romance: '荫祉',
                        Romance_info: '『希世殷声』<br><li>每回合限一次,你使用非装备牌指定手牌唯一最少的角色后,可以令其发动至多判定你体力值次的『洛神』;若其判定次数未达上限,使用牌对其无效.',
                        strl_Jingliu: '镜流',
                        Sword: '吾刃',
                        Sword_info: '『寒尺无罅』<br><li>每回合限一次,你可以将下述一项调整为体力值,以视为使用或打出冰【杀】或【闪】,弃置当前回合角色一张牌:1.手牌数;2.下次受到伤害后摸牌数;3.下次以此法弃牌数.',
                        Sould: '吾心',
                        Sould_info: '『淬魄此身』<br><li>锁定技,你进入濒死状态时,删除『吾刃』中一项并令之于此后始终为2,回复体力至上限.',
                        strl_Acheron: '黄泉',
                        Godelegy: '缭庭',
                        Godelegy_info: `『八方神国,共坠溟海』<br><li>每回合限三次,体力值等于你的角色使用非红色即时牌后,你可以将此牌或其一张手牌置为<strl-a text='strl_death_info'><死></strl-a>;若如此做,你可以消耗此技能剩余发动次数,以使用等量张<死>.`,
                        strl_death_info: '同神张飞的标记.<br><li>你的手牌上限-<死>标记数.<br><li>回合结束时,若你的<死>标记数大于存活人数,你死亡.',
                        Meicry: '梦返',
                        Meicry_info: `『恸锋染血,泣下成川』<br><li>锁定技,你每回合首次使用伤害牌时,以弃牌堆中前四张【杀】为实体牌;若颜色均一,则此牌<strl-a text='strl_die_info'>致命</strl-a>.`,
                        strl_die_info: '造成伤害时,将伤害值改为受伤角色的体力值.',
                        strl_Aventurine: '砂金',
                        Wheel: '命轮',
                        Wheel_info: '『邀饮宴渊』<br><li>你成为♠️️即时牌的目标后,可令此牌改为结算你手牌数次,且你抵消此牌的方式改为:进行一次【闪电】判定,若结果点数大于6,你抵消之并获得判定牌.',
                        Allin: '孤掷',
                        Allin_info: '『踏听滔途』<br><li>每回合限一次,你判定时,可以摸两张牌或对其他角色使用一张牌,此次判定花色视为与本回合最后被使用的牌相同.',
                        strl_Boothill: '波提欧',
                        Highnoon: '绝峙',
                        Highnoon_info: '『<午时已到>』<br><li>锁定技,每第五个回合内,所有角色使用的【杀】不可被响应且伤害+1;首张结算后,你失去1点体力并获得之,可以调离一名不为此牌目标的角色直至轮次结束.',
                        Timepiec: '逆刻',
                        Timepiec_info: '『<应行之途>』<br><li>其他角色死亡后,你可以视为使用其最后使用的即时牌;若此牌为【杀】,你摸四张牌.',
                        strl_Robin: '知更鸟',
                        Frombreaking: '恸免',
                        Frombreaking_info: '『悲哀何从宽解』<br><li>一名角色一次性弃置至少两张牌后,可以令你执行『悲歌』中这些牌所含花色的一项,你可以交给其至多两张牌.',
                        Soaringpast: '笼听',
                        Soaringpast_info: '『湛羽歌唱不休』<br><li>锁定技,弃牌阶段开始时,所有角色依次:令你摸一张牌,并可以明置你一张牌.你的明置牌不能被弃置.'
                    },//文本翻译
                    skill: {
                        Treasure: {
                            audio: 'ext:天海经行/audio:2',
                            enable: 'phaseUse',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [1, 3, 2];
                            },
                            filter(event, player) {
                                if ((player.getStat().skill.Treasure || 0) >= player.storage.Treasure[0]) return false;
                                return true;
                            },
                            content() {
                                'step 0'
                                player.draw(player.storage.Treasure[1]);
                                'step 1'
                                player.showHandcards();
                                var lis = [];
                                for (var i of player.getCards('h')) {
                                    if (!lis.includes(get.type(i, 'trick'))) lis.push(get.type(i, 'trick'));
                                }
                                if (lis.length <= player.storage.Treasure[2]) event.finish();
                                'step 2'
                                var numa = player.storage.Treasure[2];
                                player.chooseCard(numa, true, '选择要保留类型的牌', function (card, player) {
                                    if (!ui.selected.cards.length) return true;
                                    var type = get.type(card, 'trick');
                                    for (var i of ui.selected.cards) {
                                        if (get.type(i, 'trick') == type) return false;
                                    }
                                    return true;
                                }).set('complexCard', true).set('ai', function (card) {
                                    var player = _status.event.player;
                                    var typ1 = player.countCards('h', card => get.type(card, 'trick') == 'basic');
                                    var typ2 = player.countCards('h', card => get.type(card, 'trick') == 'trick');
                                    var typ3 = player.countCards('h', card => get.type(card, 'trick') == 'equip');
                                    var typ = ['basic', 'trick', 'equip'];
                                    var typx = [typ1, typ2, typ3];
                                    for (var i = 3; i > 0; i--) {
                                        for (var j = 0; j < i - 1; j++) {
                                            if (typx[j] < typx[j + 1]) {
                                                var tmp = typ[j];
                                                typ[j] = typ[j + 1];
                                                typ[j + 1] = tmp;
                                                var tmp = typx[j];
                                                typx[j] = typx[j + 1];
                                                typx[j + 1] = tmp;
                                            }
                                        }
                                    }
                                    for (var i = 0; i < 3 - numa; i++) typ.pop();
                                    return typ.includes(get.type(card, 'trick'));
                                });
                                'step 3'
                                var typ = [];
                                for (var i of result.cards) {
                                    typ.push(get.type(i, 'trick'));
                                }
                                player.discard(player.getCards('h', function (card) {
                                    return !typ.includes(get.type(card, 'trick'));
                                }));
                            },
                            mark: true,
                            intro: {
                                content(storage) {
                                    return `出牌阶段限${storage[0]}次,你可以摸${storage[1]}张牌,展示手牌并弃置至${storage[2]}种类型.`;
                                },
                            },
                            ai: {
                                order: 3.5,
                                threaten: 2.5,
                                result: {
                                    player(player) {
                                        if (player.storage.Treasure[2] == 3) return player.storage.Treasure[1];
                                        if (player.storage.Treasure[2] == 2) return player.storage.Treasure[1] - 0.5;
                                        return player.storage.Treasure[1] - 1;
                                    },
                                },
                            },
                            group: 'Treasure_discard',
                            subSkill: {
                                discard: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: 'loseAsyncAfter',
                                    },
                                    filter(event, player) {
                                        if (event.type != 'discard' || event.getlx === false) return false;
                                        if (event.getParent(2).name == 'Treasure') return false;
                                        var evt = event.getl(player);
                                        if (!evt || !evt.cards2) return false;
                                        for (var i = 0; i < evt.cards2.length; i++) {
                                            if (get.position(evt.cards2[i]) == 'd') {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        event.chi1 = '出牌阶段限' + player.storage.Treasure[0] + '次';
                                        event.chi2 = '摸' + player.storage.Treasure[1] + '张牌';
                                        event.chi3 = '弃置手牌至' + player.storage.Treasure[2] + '种类型';
                                        event.lis = [event.chi1, event.chi2, event.chi3];
                                        player.chooseControl([event.chi1, event.chi2, event.chi3, 'cancel2'], function () {
                                            var player = _status.event.player;
                                            var lis = player.storage.Treasure;
                                            if (player != _status.currentPhase) return event.chi3;
                                            else if (player.getStat().skill.Treasure == lis[0] && player.getStat().skill.Treasure < 3) return event.chi3;
                                            else return 'cancel2';
                                        }).set('prompt', '选择要交换的第一个数字');
                                        'step 1'
                                        var res = result.control;
                                        if (res != 'cancel2') {
                                            game.log(player, `发动了【${get.translation('Treasure')}】,交换了两个数字`);
                                            for (var i = 0; i < event.lis.length; i++) {
                                                if (event.lis[i] == res) {
                                                    event.lis.splice(i, 1);
                                                    i--;
                                                }
                                            }
                                            if (res == event.chi1) event.num1 = 0;
                                            if (res == event.chi2) event.num1 = 1;
                                            if (res == event.chi3) event.num1 = 2;
                                        }
                                        else event.finish();
                                        'step 2'
                                        player.chooseControl(event.lis, function () {
                                            return event.lis[0];
                                        }).set('prompt', '选择要交换的第二个数字');
                                        'step 3'
                                        var res = result.control;
                                        if (res == event.chi1) event.num2 = 0;
                                        if (res == event.chi2) event.num2 = 1;
                                        if (res == event.chi3) event.num2 = 2;
                                        var lis1 = player.storage.Treasure[event.num1];
                                        var lis2 = player.storage.Treasure[event.num2];
                                        player.storage.Treasure[event.num1] = lis2;
                                        player.storage.Treasure[event.num2] = lis1;
                                        player.popup('交换数字');
                                    },
                                },
                            },
                        },
                        Contempt: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'gainAfter',
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseDraw');
                                if (evt && evt.player == player) return false;
                                if (player.hasSkill('Contempt_block')) return false;
                                return event.parent.name == 'draw' && event.getg(player).length;
                            },
                            forced: true,
                            content() {
                                'step 0'
                                var cardx = trigger.getg(player);
                                player.chooseTarget('是否发动【藐宇】,盖伏此次获得的牌？', function (event, player, target) {
                                    return target.countCards('he') > 0;
                                }).set('ai', target => {
                                    var player = _status.event.player;
                                    var eff1 = get.effect(target, { name: 'guohe_copy' }, player, player);
                                    var eff2 = 0;
                                    for (var i of player.getExpansions('xinpojun2')) {
                                        if (get.type(i, 'trick') == 'basic') eff2++;
                                    }
                                    var eff3 = 0;
                                    for (var i of cardx) {
                                        if (get.value(i) > 6) eff3++;
                                    }
                                    if ((cardx.length <= 2 && eff2 <= 2) || (player == _status.currentPhase && player.countCards('h') - player.getHandcardLimit() > 3 && eff3 < 2)) return eff1;
                                    else return -1;
                                });
                                'step 1'
                                if (result.bool) {
                                    event.cardx = trigger.getg(player);
                                    player.addToExpansion(event.cardx, 'giveAuto', target).gaintag.add('xinpojun2');
                                    player.addSkill('xinpojun2');
                                    player.discardPlayerCard(result.targets[0], 'he', true).set('ai', function (button) {
                                        return get.value(button.link);
                                    });
                                }
                                else event.finish();
                                'step 2'
                                if (result.bool) {
                                    event.listx = [];
                                    for (var i of player.getExpansions('xinpojun2')) {
                                        if (get.type(i, 'trick') == get.type(result.cards[0], 'trick')) {
                                            event.listx.push(i);
                                        }
                                    }
                                    if (event.listx.length) player.chooseBool(`移去${get.translation(event.listx)},或令此技能于本回合失效`).set('ai', function () {
                                        return event.listx.length <= 2;
                                    });
                                }
                                else event.finish();
                                'step 3'
                                if (result.bool) {
                                    player.loseToDiscardpile(event.listx);
                                    event.finish();
                                }
                                'step 4'
                                player.addTempSkill('Contempt_block');
                            },
                            subSkill: {
                                block: {
                                    charlotte: true,
                                },
                            },
                        },
                        Predict: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                player.storage.Predict = 0;
                            },
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            //轮次开始时,你可以<font color=#FFA9D1>观星3</font>;若如此做,本轮内你使用第X张牌结算后,当前回合角色视为使用【洞烛先机】(X为你因此置于牌堆底牌的数量)
                            async content(event, trigger, player) {//QQQ
                                var num = 7;
                                var cards = get.cards(num);
                                game.cardsGotoOrdering(cards);
                                const result = await player.chooseToMove()
                                    .set('list', [['牌堆顶', cards], ['牌堆底']])
                                    .set('prompt', '将牌移动到牌堆顶或牌堆底')
                                    .set('processAI', function (list) {
                                        var cards = list[0][1];
                                        const target = game.players[0];
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
                                    }).forResult();//给别人观星
                                result.moved[0].reverse();
                                for (var i of result.moved[0]) {
                                    ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                }
                                for (var i of result.moved[1]) {
                                    ui.cardPile.appendChild(i);
                                }
                                player.storage.Predict = result.moved[1].length;
                                player.addTempSkill('Predict_draw', 'roundStart');
                                player.popup(get.cnNumber(result.moved[0].length) + `上${get.cnNumber(result.moved[1].length)}下`);
                                game.log(player, `将${get.cnNumber(result.moved[0].length)}张牌置于牌堆顶`);
                                game.updateRoundNumber();
                            },
                            ai: {
                                threaten: 1.2,
                            },
                            mark: true,
                            intro: {
                                name: '观歙',
                                content(storage) {
                                    if (!storage) return '【观歙】未生效';
                                    return `使用下第${storage}张牌后,当前回合角色视为使用【洞烛先机】`;
                                },
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter: (event, player) => _status.currentPhase,//QQQ
                                    content() {
                                        'step 0'
                                        player.storage.Predict -= 1;
                                        game.updateRoundNumber();
                                        'step 1'
                                        if (!player.storage.Predict) {
                                            var cur = _status.currentPhase;
                                            cur.useCard({ name: 'dongzhuxianji' }, cur);
                                            player.removeSkill('Predict_draw');
                                        }
                                    },
                                    onremove(player, skill) {
                                        player.storage.Predict = 0;
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (player.storage.Predict == 1 && _status.currentPhase) {
                                                    return 2 * get.attitude(player, _status.currentPhase);
                                                }//QQQ
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        Upstare: {
                            audio: 'ext:天海经行/audio:2',
                            enable: 'chooseToUse',
                            selectCard: -1,
                            filterCard(card) {
                                return false;
                            },
                            viewAsFilter(player) {
                                return !player.hasSkill('Upstare_round');
                            },
                            viewAs: {
                                name: 'wuxie',
                                storage: {
                                    Upstare: true,
                                },
                            },
                            precontent() {
                                'step 0'
                                player.addTempSkill('Upstare_round', 'roundStart');
                                if (player.countCards('he') >= 2) player.chooseCard(2, 'he', '弃置两张牌,或点取消摸两张牌').set('ai', function (card) {
                                    var num1 = game.filterPlayer(current => current.isMinHandcard())[0].countCards('h');
                                    var num2 = game.filterPlayer(current => current.isMaxHandcard())[0].countCards('h');
                                    if (player.countCards('h') - 2 <= num1 || player.countCards('h') + 2 >= num2) return 10 - get.value(card);
                                    else return 4 - get.value(card);
                                });
                                'step 1'
                                if (result.cards) player.discard(result.cards);
                                else player.draw(2);
                            },
                            prompt: '发动【观歙】,视为使用【无懈可击】',
                            group: 'Upstare_cards',
                            subSkill: {
                                cards: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        if (event.card.name != 'wuxie' || !event.card.storage || !event.card.storage.Upstare) return false;
                                        if (player.isMaxHandcard() || player.isMinHandcard()) return true;
                                    },
                                    content() {
                                        if (player.isMaxHandcard()) {
                                            var cur = game.filterPlayer(current => current.isMinHandcard());
                                            var num = cur[0].countCards('h');
                                        }
                                        else {
                                            var cur = game.filterPlayer(current => current.isMaxHandcard());
                                            var num = cur[0].countCards('h');
                                        }
                                        var num2 = player.countCards('h');
                                        if (num2 > num) player.chooseToDiscard(num2 - num, 'h', true);
                                        else if (num2 < num) player.draw(num - num2);
                                    },
                                },
                                round: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '登瞰',
                                    intro: {
                                        name: '登瞰',
                                        content: '一轮后技能重置',
                                    },
                                },
                            },
                        },
                        Mistpearl: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return !player.hasSkill('Mistpearl_block');
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.chooseControl('牌堆顶', '牌堆底', 'cancel2', function () {
                                    var player = _status.event.player;
                                    var target = trigger.player;
                                    if (get.attitude(player, target) < 0) return 'cancel2';
                                    if (target.countCards('e', function (card) {
                                        return get.color(card) == get.color(get.cards(1)[0]);
                                    }) > 0 || get.color(get.cards(1)[0]) == 'red') return '牌堆顶';
                                    else return '牌堆底';
                                }).set('prompt', get.prompt('Mistpearl')).set('prompt2', '亮出牌堆一端一张牌');
                                'step 1'
                                if (result.control != 'cancel2') {
                                    player.addTempSkill('Mistpearl_block');
                                    if (result.control == '牌堆顶') {
                                        var cards = get.cards(1);
                                        event.inf = '牌堆底';
                                    }
                                    else if (result.control == '牌堆底') {
                                        var cards = get.bottomCards(1);
                                        event.inf = '牌堆顶';
                                    }
                                    player.showCards(cards, '吟珠');
                                    event.cardx = cards;
                                    trigger.player.chooseCard('he', `将一张与${get.translation(cards[0])}同颜色的牌当作【桃】使用,或从${event.inf}摸两张牌`, function (card) {
                                        return get.color(card) == get.color(cards[0]);
                                    }).set('ai', function (card) {
                                        return 8 - get.value(card);
                                    });
                                }
                                else event.finish();
                                'step 2'
                                if (result.cards) {
                                    trigger.player.useCard({ name: 'tao' }, result.cards, 'Mistpearl', trigger.player, false);
                                }
                                else {
                                    if (event.inf == '牌堆顶') {
                                        trigger.player.draw(2);
                                    }
                                    else if (event.inf == '牌堆底') {
                                        trigger.player.draw(2, 'bottom');
                                    }
                                }
                                game.cardsDiscard(event.cardx);
                            },
                            subSkill: {
                                block: {
                                    charlotte: true,
                                },
                            },
                        },
                        Sangreal: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.cards.length) return false;
                                if (get.type(event.card) != 'basic' && get.type(event.card) != 'trick') return false;
                                return !player.hasSkill('Sangreal_block1');
                            },
                            content() {
                                'step 0'
                                player.chooseBool(`是否发动【百脉】,将${get.translation(trigger.cards)}置于牌堆底？`).set('ai', function () {
                                    return true;
                                });
                                'step 1'
                                player.addTempSkill('Sangreal_block1');
                                if (result.bool) {
                                    event.i = 0;
                                }
                                else event.finish();
                                'step 2'
                                var cards = trigger.cards;
                                ui.cardPile.appendChild(cards[event.i]);
                                game.broadcastAll(function (player) {
                                    player.$throw(cards[event.i], 1000, 'nobroadcast');
                                }, player);
                                game.log(player, `将${get.translation(cards[event.i])}置于牌堆底`);
                                event.i++;
                                if (event.i < cards.length) event.goto(2);
                                else {
                                    player.storage.Sangreal = trigger.cards;
                                    player.addTempSkill('Sangreal_draw');
                                }
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.cards.length) return false;
                                        if (get.type(event.card) != 'basic' && get.type(event.card) != 'trick') return false;
                                        if (event.cards == player.storage.Sangreal) return false;
                                        return !player.hasSkill('Sangreal_block2');
                                    },
                                    content() {
                                        'step 0'
                                        var tar = trigger.player;
                                        var pla = player;
                                        trigger.player.chooseBool(`是否发动【百脉】,将${get.translation(trigger.cards)}置于牌堆底并令${get.translation(player)}摸两张牌？`).set('ai', function () {
                                            return get.attitude(tar, pla) > 0;
                                        });
                                        'step 1'
                                        player.addTempSkill('Sangreal_block2');
                                        if (result.bool) {
                                            event.i = 0;
                                        }
                                        else event.finish();
                                        'step 2'
                                        var cards = trigger.cards;
                                        trigger.player.lose(cards[event.i], ui.cardPile);
                                        var pla = trigger.player;
                                        ui.cardPile.appendChild(cards[event.i]);
                                        game.broadcastAll(function (player) {
                                            pla.$throw(cards[event.i], 1000, 'nobroadcast');
                                        }, pla);
                                        game.log(pla, `将${get.translation(cards[event.i])}置于牌堆底`);
                                        event.i++;
                                        if (event.i < cards.length) event.goto(2);
                                        else player.draw(2);
                                    },
                                },
                                'block1': {
                                    charlotte: true,
                                    onremove(player, skill) {
                                        player.storage[skill] = [];
                                    },
                                },
                                'block2': {
                                    charlotte: true,
                                },
                            },
                        },
                        Iron: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!event.player || ((player == event.player) + (event.targets.includes(player))) != 1 || !event.isFirstTarget) return false;
                                if (event.player.countCards('he') + player.countCards('he') == 0) return false;
                                return get.color(event.card) == 'black';
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0'
                                if (player.countCards('he') > 0) player.chooseToDiscard('he', true);
                                if (trigger.player.countCards('he') > 0) player.discardPlayerCard(trigger.player, 'he', true);
                                'step 1'
                                var card = get.discardPile(function (i) {
                                    return i.name == 'sha';
                                });
                                if (card) player.gain(card, 'gain2').gaintag.add('Iron');
                                'step 2'
                                var card = get.discardPile(function (i) {
                                    return i.name == 'sha';
                                });
                                if (card) trigger.player.gain(card, 'gain2').gaintag.add('Iron');
                            },
                            group: ['Iron_draw', 'Iron_disc'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.player.hasHistory('lose', function (evt) {
                                            if (evt.parent != event) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('Iron')) return true;
                                            }
                                            return false;
                                        })) return false;
                                        var cardx = event.card;
                                        return event.player.hasHistory('sourceDamage', function (evt) {
                                            return evt.card == cardx;
                                        });
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                disc: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    content() {
                                        game.filterPlayer(function (current) {
                                            var card = current.getCards('h', card => card.hasGaintag('Iron'));
                                            if (card.length) current.loseToDiscardpile(card);
                                        });
                                    },
                                },
                            },
                        },
                        Sunshine: {
                            audio: 'ext:天海经行/audio:2',
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.countCards('hej') <= 1;
                            },
                            forced: true,
                            derivation: ['zhuhai', 'strl_lijun'],
                            content() {
                                'step 0'
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                                player.drawTo(player.maxHp);
                                player.loseMaxHp();
                                player.addSkill('zhuhai');
                                player.addSkill('strl_lijun');
                            },
                        },
                        strl_lijun: {
                            global: 'strl_lijun1',
                            zhuSkill: true,
                        },
                        'strl_lijun1': {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                if (player.hasSkill('strl_lijun2')) return false;
                                if (!player.isPhaseUsing()) return false;
                                if (!game.hasPlayer(function (target) {
                                    return player != target && target.hasZhuSkill('strl_lijun', player);
                                })) return false;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (get.position(i, true) == 'o') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0'
                                var list = game.filterPlayer(function (target) {
                                    return player != target && target.hasZhuSkill('strl_lijun', player);
                                });
                                player.chooseTarget(get.prompt('strl_lijun'), `将${get.translation(trigger.cards)}交给` + get.translation(list) + (list.length > 1 ? '中的一人' : ''), function (card, player, target) {
                                    return player != target && target.hasZhuSkill('strl_lijun', player);
                                }).ai = function (target) {
                                    return get.attitude(_status.event.player, target);
                                };
                                'step 1'
                                if (!result.bool) event.finish();
                                else {
                                    player.addTempSkill('strl_lijun2', 'phaseUseEnd');
                                    var zhu = result.targets[0];
                                    player.line(zhu, 'green');
                                    var list = [];
                                    if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                        if (get.position(i, true) == 'o') {
                                            list.push(i);
                                        }
                                    }
                                    zhu.gain(list, 'gain2').giver = player;
                                    zhu.chooseBool().set('ai', function () {
                                        if (get.attitude(zhu, player) > 0) return true;
                                        return false;
                                    }).set('prompt', `是否令${get.translation(player)}摸一张牌？`);
                                }
                                'step 2'
                                if (result.bool) {
                                    player.draw();
                                    player.addMark('strl_lijun2', 1, false);
                                }
                            },
                        },
                        'strl_lijun2': {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.countMark('strl_lijun2');
                                },
                            },
                        },
                        Mahjong: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            check(event, player) {
                                return player.countCards('h') > 1;
                            },
                            content() {
                                trigger.changeToZero();
                                const cards = get.cards(4);
                                const card = cards.randomGet();
                                cards.remove(card);
                                player.gain(card, 'draw').gaintag.add('Mahjong');
                                player.addToExpansion(cards, player, 'giveAuto').gaintag.add('Mahjong_draw');
                                var num = get.cnNumber(cards.length);
                                game.log(player, `将${num}张牌置于了武将牌上`);
                            },//QQQ
                            group: 'Mahjong_draw',
                            subSkill: {
                                draw: {
                                    audio: 'ext:天海经行/audio:2',
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    filter(event, player) {
                                        if (!player.getExpansions('Mahjong_draw')) return false;
                                        var evt = event.getl(player);
                                        if (!evt || !evt.hs || !evt.hs.length) return false;
                                        if (event.name == 'lose') {
                                            for (var i in event.gaintag_map) {
                                                if (event.gaintag_map[i].includes('Mahjong')) return true;
                                            }
                                            return false;
                                        }
                                        return player.hasHistory('lose', function (evt) {
                                            if (event != evt.parent) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('Mahjong')) return true;
                                            }
                                            return false;
                                        });
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        var num = player.getExpansions('Mahjong_draw').length;
                                        var i = Math.floor((Math.random() * num));
                                        event.cardx = player.getExpansions('Mahjong_draw')[i];
                                        var list = [];
                                        if (num > 0) list.push('选项一');
                                        if (num < 4) list.push('选项二');
                                        list.push('cancel2');
                                        player.chooseControl(list, function () {
                                            var player = _status.event.player;
                                            if (player.getExpansions('Mahjong_draw').length < 2 && list.length > 2) return list[1];
                                            else return list[0];
                                        }).set('choiceList', [
                                            '获得一张<琼玉>',
                                            '将<琼玉>补至四张',
                                        ]).set('prompt', '请选择一项');
                                        'step 1'
                                        if (result.control != 'cancel2') {
                                            if (result.control == '选项一') {
                                                player.gain(event.cardx, 'draw').gaintag.add('Mahjong');
                                                game.log(player, '获得了一张<琼玉>');
                                            }
                                            else {
                                                var numx = 4 - player.getExpansions('Mahjong_draw').length;
                                                var cardx = get.cards(numx);
                                                player.addToExpansion(cardx, player, 'giveAuto').gaintag.add('Mahjong_draw');
                                            }
                                        }
                                    },
                                    intro: {
                                        markcount: 'expansion',
                                        mark(dialog, storage, player) {
                                            var cards = player.getExpansions('Mahjong_draw');
                                            if (!cards.length) return '没有卡牌';
                                            return `共有${get.cnNumber(cards.length)}张牌`;
                                        },
                                    },
                                    onremove(player, skill) {
                                        var cards = player.getExpansions(skill);
                                        if (cards.length) player.loseToDiscardpile(cards);
                                    },
                                    forced: true,
                                    popup: false,
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        Laze: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.getExpansions('Mahjong_draw').length) return false;
                                return player.getHistory('useCard').length < player.maxHp;
                            },
                            content() {
                                'step 0'
                                var num1 = player.maxHp - player.getHistory('useCard').length;
                                var num2 = player.getExpansions('Mahjong_draw').length;
                                var num = Math.min(num1, num2);
                                var cardx = [];
                                for (var i = 0; i < num; i++) {
                                    cardx.push(player.getExpansions('Mahjong_draw')[i]);
                                }
                                event.cardx = cardx;
                                var suit = [];
                                var numx = 0;
                                for (var i of cardx) {
                                    if (!suit.includes(i.suit)) {
                                        suit.push(i.suit);
                                        numx += 1;
                                    }
                                }
                                var choice = ['cancel2'];
                                if (numx == 1) choice.unshift('wuzhong');
                                if (numx == cardx.length) choice.unshift('shunshou');
                                if (choice.length > 1) var str = '眠坪:是否移去这些牌,视为使用一张普通锦囊牌？';
                                else var str = '眠坪';
                                var dialog = ui.create.dialog(str, cardx, 'hidden');
                                dialog.classList.add('noselect');
                                player.chooseControl(choice, dialog, function () {
                                    if (cardx.length > 2) return 'cancel2';
                                    if (player.countCards('h') > 1 && game.hasPlayer(current => player.canUse('shunshou', current) && ai.get.effect(current, { name: 'shunshou' }, player, player) > 1)) return 'shunshou';
                                    else return 'wuzhong';
                                });
                                'step 1'
                                if (result.control == 'cancel2') event.finish();
                                else {
                                    var namex = result.control;
                                    player.loseToDiscardpile(event.cardx);
                                    player.chooseUseTarget({ name: namex }, get.prompt('Laze'), '视为使用' + get.translation(namex), false);
                                }
                            },
                        },
                        Frocust: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                player: ['phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore'],
                            },
                            filter(event, player) {
                                if (!player.storage.Frocust2) return false;
                                if (player.countCards('he') < player.storage.Frocust2) return false;
                                if (player.storage.Frocust.includes(event.name)) return false;
                                if (player.hasUseTarget({ name: 'sha' })) return true;
                            },
                            forced: true,
                            content() {
                                'step 0'
                                var name, check;
                                var num = player.storage.Frocust2;
                                switch (trigger.name) {
                                    case 'phaseJudge':
                                        check = player.countCards('j') - num;
                                        name = '判定阶段';
                                        break;
                                    case 'phaseDraw':
                                        check = -num - 2;
                                        name = '摸牌阶段';
                                        break;
                                    case 'phaseUse':
                                        if (player.countCards('h') > player.hp + 1) {
                                            check = false;
                                        }
                                        else if (player.countCards('h', { name: ['wuzhong'] })) {
                                            check = false;
                                        }
                                        else {
                                            check = true;
                                        }
                                        name = '出牌阶段';
                                        break;
                                    case 'phaseDiscard':
                                        check = !player.needsToDiscard();
                                        name = '弃牌阶段';
                                        break;
                                }
                                event.Q = name;//QQQ
                                player.chooseCardTarget({
                                    position: 'he',
                                    selectCard: num,
                                    filterCard: lib.filter.cardUsable,
                                    filterTarget(card, player, target) {
                                        return player.canUse('sha', target);
                                    },
                                    ai1(card) {
                                        return 6 - get.value(card);
                                    },
                                    ai2(target) {
                                        var player = _status.event.player;
                                        return get.effect(target, { name: 'sha', nature: 'ice' }, player, player) - check;
                                    },
                                    prompt: get.prompt('Frocust')
                                }).set('prompt2', `跳过${name}以将${num}张牌当冰【杀】使用`);
                                'step 1'
                                if (result.bool) {
                                    trigger.cancel();
                                    game.log(player, '跳过了', '#y' + event.Q);
                                    player.useCard({ name: 'sha', nature: 'ice' }, result.cards, result.targets[0], false);
                                }
                                'step 2'
                                if (player.hasHistory('sourceDamage', function (evt) {
                                    if (!evt.card) return false;
                                    var evtx = evt.getParent('useCard');
                                    return evtx.card == evt.card && evtx.getParent(1) == event;
                                })) {
                                    var num = player.storage.Frocust2;
                                    if (num != player.countCards('h')) {
                                        player.storage.Frocust.push(trigger.name);
                                        if (num < player.countCards('h')) player.chooseToDiscard(player.countCards('h') - num, true, 'h');
                                        else player.draw(num - player.countCards('h'));
                                    }
                                }
                            },
                            mark: true,
                            marktext: '霜',
                            intro: {
                                name: '砺圭',
                                content(storage) {
                                    if (!storage || !storage.length) return;
                                    var str = '不能再于';
                                    for (var i = 0; i < storage.length; i++) {
                                        if (storage[i] == 'phaseJudge') str += '判定阶段';
                                        else if (storage[i] == 'phaseDraw') str += '摸牌阶段';
                                        else if (storage[i] == 'phaseUse') str += '出牌阶段';
                                        else if (storage[i] == 'phaseDiscard') str += '弃牌阶段';
                                        if (i < storage.length - 1) str += '、';
                                    }
                                    str += '发动此技能';
                                    return str;
                                },
                            },
                            group: ['Frocust_rec', 'Frocust_re'],
                            subSkill: {
                                rec: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    content() {
                                        player.storage.Frocust2++;
                                    },
                                },
                                re: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    content() {
                                        player.storage.Frocust2 = 0;
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        Memory: {
                            mod: {
                                'cardEnabled2'(card, player) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('冰封')) {
                                        return false;
                                    }
                                },
                            },
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                var evt = event.getl(player);
                                if (!evt || !evt.hs || !evt.hs.length) return false;
                                if (event.name == 'lose') {
                                    for (var i in event.gaintag_map) {
                                        if (event.gaintag_map[i].includes('冰封')) return true;
                                    }
                                    return false;
                                }
                                return player.hasHistory('lose', function (evt) {
                                    if (event != evt.parent) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('冰封')) return true;
                                    }
                                    return false;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.chooseTarget('是否发动【璨释】,令一名角色摸两张牌？').set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target);
                                });
                                'step 1'
                                if (result.bool) {
                                    result.targets[0].draw(2);
                                }
                            },
                            group: ['Memory_init', 'Memory_draw'],
                            subSkill: {
                                init: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return (event.name != 'phase' || game.phaseNumber == 0) && player.countCards('h') > 0;
                                    },
                                    content() {
                                        var hs = player.getCards('h');
                                        if (hs.length) player.addGaintag(hs, '冰封');
                                    },
                                },
                                draw: {
                                    trigger: {
                                        global: 'gameDrawBegin',
                                    },
                                    silent: true,
                                    content() {
                                        var me = player;
                                        var numx = trigger.num;
                                        trigger.num = typeof numx == 'function' ? function (player) {
                                            if (player == me) {
                                                return 2 + numx(player);
                                            }
                                            return numx(player);
                                        } : function (player) {//QQQ
                                            if (player == me) {
                                                return 2 + numx;
                                            }
                                            return numx;
                                        }
                                    },
                                },
                            },
                        },
                        Preserve: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0 && !player.hasSkill('Preserve_block');
                            },
                            forced: true,
                            derivation: ['qingleng'],
                            content() {
                                'step 0'
                                player.chooseCard(1, 'he', `是否对${get.translation(trigger.player)}发动【珍存】,将一张牌置于牌堆顶？`, function (card, player) {
                                    return true;
                                }).set('ai', function (card) {
                                    if (get.attitude(_status.event.player, trigger.player) >= 0) return false;
                                    return 5 - get.value(card);
                                });
                                'step 1'
                                if (result.cards) {
                                    player.addSkill('Preserve_block');
                                    player.lose(result.cards, ui.cardPile, 'insert');
                                    game.broadcastAll(function (player) {
                                        var cardxx = ui.create.card();
                                        cardxx.classList.add('infohidden');
                                        cardxx.classList.add('infoflip');
                                        player.$throw(cardxx, 1000, 'nobroadcast');
                                    }, player);
                                    var target = trigger.player;
                                    target.addTempSkill('dcwumei_wake', 'phaseAfter');
                                    var targets = game.filterPlayer();
                                    if (!target.storage.dcwumei_wake) target.storage.dcwumei_wake = [[], []];
                                    for (var targetx of targets) {
                                        target.storage.dcwumei_wake[0].push(targetx);
                                        target.storage.dcwumei_wake[1].push(targetx.hp);
                                    }
                                    target.markSkill('dcwumei_wake');
                                }
                            },
                            subSkill: {
                                block: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    content() {
                                        player.removeSkill('Preserve_block');
                                    },
                                    mark: true,
                                    marktext: '珍',
                                    intro: {
                                        name: '珍存',
                                        content: '本轮内视为拥有【清冷】',
                                    },
                                    group: 'qingleng',
                                },
                            },
                        },
                        Lighter: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('Lighter_block') && event.player;
                            },
                            content() {
                                'step 0'
                                var cardx = get.cards(1)[0];
                                player.$throw(cardx);
                                player.discard(cardx);
                                event.chi = [];
                                if (lib.filter.cardUsable(cardx, player) && game.hasPlayer(function (current) {
                                    return player.canUse(cardx, current);
                                })) {
                                    event.chi.push(cardx);
                                    trigger.player.draw();
                                }
                                else {
                                    var pla = player; var tar = trigger.player;
                                    trigger.player.chooseToDiscard('he', true).set('ai', function (card) {
                                        if (get.attitude(tar, pla) > 0) {
                                            return lib.filter.cardUsable(card, pla) && game.hasPlayer(function (current) {
                                                return pla.canUse(card, current);
                                            })
                                        }
                                    });
                                }
                                'step 1'
                                if (result.cards && result.cards.length) {
                                    var cardx = result.cards[0];
                                    if (lib.filter.cardUsable(cardx, player) && game.hasPlayer(function (current) {
                                        return player.canUse(cardx, current);
                                    })) event.chi.push(cardx);
                                }
                                if (event.chi.length) {
                                    player.chooseButton(['羁翼:使用一张弃置牌', event.chi]).set('filterButton', button => {
                                        return _status.event.player.hasUseTarget(button.link);
                                    }).set('ai', button => {
                                        return _status.event.player.getUseValue(button.link);
                                    });
                                }
                                else event.finish();
                                'step 2'
                                if (result.bool) {
                                    var card = result.links[0];
                                    player.chooseUseTarget(card, true);
                                    player.addTempSkill('Lighter_block', 'roundStart');
                                }
                            },
                            subSkill: {
                                block: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '焰',
                                    intro: {
                                        name: '羁翼',
                                        content: '一轮后技能重置',
                                    },
                                },
                            },
                            ai: {
                                threaten: 2.5,
                            },
                        },
                        Together: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            silent: true,
                            charlotte: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                return evt && evt.hs && evt.hs.length;
                            },
                            content() {
                                player.addTempSkill('Together_damage');
                            },
                            subSkill: {
                                damage: {
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        if (event.source == player) return get.distance(player, event.player) <= 1;
                                        else if (event.player == player) return get.distance(player, event.source) <= 1;
                                        else return false;
                                    },
                                    logTarget(event, player) {
                                        if (event.source == player) return event.player;
                                        else return event.source;
                                    },
                                    'prompt2': '防止此伤害并与伤害来源各摸一张牌',
                                    check(event, player) {
                                        if (player == event.player && player.hp == 1) return true;
                                        else if (get.attitude(player, event.player) > 0) return true;
                                        return event.player.hp > 1 && player.countCards('h') <= 1;
                                    },
                                    content() {
                                        'step 0'
                                        var target = trigger.source;
                                        game.asyncDraw([player, target], 1);
                                        trigger.cancel();
                                    },
                                    mark: true,
                                    marktext: '炙',
                                    intro: {
                                        name: '继谊',
                                        content: '<li>『鼹鼠党』集合!<br><li>本回合已失去过手牌',
                                    },
                                },
                            },
                        },
                        Reaching: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('Reaching_block')) return false;
                                if (get.type(event.card) != 'basic' || !event.targets.length) return false;
                                if (!game.hasPlayer(current => !event.targets.includes(current))) return false;
                                return true;
                            },
                            content() {
                                'step 0'
                                var list = ['cancel2'];
                                event.tar1 = game.filterPlayer(current => current.getDamagedHp() == 0 && !trigger.targets.includes(current));
                                event.tar2 = game.filterPlayer(current => current.getDamagedHp() != 0 && !trigger.targets.includes(current));
                                if (event.tar1.length) list.unshift('选项二');
                                if (event.tar2.length) list.unshift('选项一');
                                player.chooseControl(list, function () {
                                    var player = _status.event.player;
                                    if (player.getExpansions('Mahjong_draw').length < 2 && list.length > 2) return list[1];
                                    else return list[0];
                                }).set('choiceList', [
                                    `额外指定${get.translation(event.tar2)}为目标`,
                                    `额外指定${get.translation(event.tar1)}为目标`,
                                ]).set('prompt', get.prompt('Reaching'));
                                'step 1'
                                if (result.control != 'cancel2') {
                                    player.addTempSkill('Reaching_block');
                                    var draw = [];
                                    if (result.control == '选项一') {
                                        for (var i of event.tar2) {
                                            if (lib.filter.targetEnabled2(trigger.card, player, i) && (
                                                (trigger.card.name == 'sha' && player.inRange(i)) ||
                                                trigger.card.name != 'sha')) {
                                                game.log(i, '也成为了', trigger.card, '的目标');
                                                trigger.targets.addArray([i]);
                                            }
                                            else draw.push(i);
                                        }
                                    }
                                    if (result.control == '选项二') {
                                        for (var i of event.tar1) {
                                            if (lib.filter.targetEnabled2(trigger.card, player, i) && (
                                                (trigger.card.name == 'sha' && player.inRange(i)) ||
                                                trigger.card.name != 'sha')) {
                                                game.log(i, '也成为了', trigger.card, '的目标');
                                                trigger.targets.addArray([i]);
                                            }
                                            else draw.push(i);
                                        }
                                    }
                                    if (draw.length) draw.push(player);
                                    game.asyncDraw(draw);
                                    player.link(false);
                                    player.turnOver(false);
                                }
                            },
                            subSkill: {
                                block: {
                                    charlotte: true,
                                },
                            },
                        },
                        Breaking: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                global: 'damageAfter',
                            },
                            filter(event, player) {
                                if (!event.card || !event.source || !event.player) return false;
                                if (player.isLinked()) return false;
                                var cardx = event.card;
                                if (get.color(cardx) != 'black') return false;
                                if (player.storage.Breaking.includes(cardx)) return false;
                                return true;
                            },
                            logTarget(event) {
                                return event.player;
                            },
                            content() {
                                var target = trigger.player;
                                player.storage.Breaking.push(trigger.card);
                                player.link();
                            },
                            group: ['Breaking_block', 'Breaking_dam'],
                            subSkill: {
                                block: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    charlotte: true,
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.Breaking.includes(event.card);
                                    },
                                    content() {
                                        var lis = player.storage.Breaking;
                                        for (var i = 0; i < lis.length; i++) {
                                            if (lis[i] == trigger.card) {
                                                lis.splice(i, 1);
                                                i--;
                                            }
                                        }
                                        player.storage.Breaking = lis;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                dam: {
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.card || !event.source || !event.player) return false;
                                        if (event.source.hasHistory('sourceDamage', function (evt) {
                                            return player.storage.Breaking.includes(evt.card);
                                        })) return true;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (player.storage.Breaking && player.storage.Breaking.includes(card)) return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        Trader: {
                            audio: 'ext:天海经行/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card, player) {
                                return true;
                            },
                            check(card, player) {
                                var player = _status.event.player;
                                if (game.countPlayer(current => get.effect(current, { name: 'wugu' }, player, player) > 0) >= game.countPlayer() / 2)
                                    return ((get.color(card) == 'red') - 0.5) * 9 - get.value(card);
                                var tar = player;
                                var att = 0;
                                for (var i = 0; i < game.countPlayer() / 2; i++) {
                                    if (get.effect(tar, { name: 'wugu' }, player, player) > 0) att++;
                                    tar = tar.next;
                                }
                                if (att >= i / 2) ((get.color(card) == 'black') - 0.5) * 9 - get.value(card);
                                return 5 - get.value(card);
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'wugu',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes')) return false;
                            },
                            precontent() {
                                var color = get.color(event.result.cards[0]);
                                if (color == 'red') var num = event.result.targets.length;
                                else var num = -Math.ceil(event.result.targets.length / 2);
                                if (!event.result.card.storage) event.result.card.storage = {};
                                event.result.card.storage.extraCardsNum = num;
                            },
                            prompt: '将一张牌当【五谷丰登】使用',
                            ai: {
                                order: 7,
                                result: {
                                    target: 1,
                                },
                                wuxie() {
                                    if (Math.random() < 0.3) return 0;
                                },
                                basic: {
                                    order: 3,
                                    useful: 0.5,
                                },
                                tag: {
                                    draw: 1,
                                    multitarget: 1,
                                },
                            },
                        },
                        Prayer: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var cards = [];
                                game.getGlobalHistory('cardMove', evt => {
                                    if (evt.name == 'lose' && evt.position == ui.discardPile || evt.name == 'cardsDiscard') {
                                        cards.addArray(evt.cards.filterInD('d'));
                                    }
                                });
                                return cards.length;
                            },
                            content() {
                                'step 0'
                                var dis = [];
                                game.getGlobalHistory('cardMove', evt => {
                                    if (evt.name == 'lose' && evt.position == ui.discardPile || evt.name == 'cardsDiscard') {
                                        dis.addArray(evt.cards.filterInD('d'));
                                    }
                                });
                                var next = player.chooseToMove('宣命:将中央区任意张不同花色的牌置于牌堆顶');
                                next.set('list', [
                                    ['中央区的牌', dis],
                                    ['牌堆顶'],
                                ]);
                                next.set('filterOk', function (moved) {
                                    var suit = [];
                                    for (var i of moved[1]) {
                                        if (!suit.includes(i.suit)) suit.push(i.suit);
                                        else return false;
                                    }
                                    return true;
                                });
                                var qpshu = 0, tgshp = game.filterPlayer((current) => current.isDamaged() && get.attitude(player, current) > 0).map(i => i.hp);
                                if (tgshp.length) {
                                    var checkcardsuit = dis.slice(0);
                                    checkcardsuit.reduce((pre, cur) => {
                                        return pre.includes(cur) ? pre : pre.concat(cur);
                                    }, []);
                                    tgshp.sort();
                                    var qpshu = (checkcardsuit.length > tgshp[0] ? tgshp[0] : 0);
                                }
                                next.set('num', qpshu);
                                next.set('processAI', function (list) {
                                    var cards = list[0][1].slice(0), player = _status.event.player, num = _status.event.num;
                                    const target = player.next;
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
                                });
                                'step 1'
                                if (result.bool && result.moved[1] && result.moved[1].length) {
                                    var cardx = result.moved[1];
                                    var num = cardx.length;
                                    game.log(player, '将', cardx, '置于了牌堆顶');
                                    game.cardsGotoPile(cardx, 'insert');
                                    if (game.hasPlayer(function (current) {
                                        return current.hp == num;
                                    })) {
                                        player.chooseTarget(true, '令一名角色回复1点体力并摸一张牌', function (event, player, target) {
                                            return target.hp == num;
                                        }).set('ai', function (target) {
                                            return get.attitude(_status.event.player, target) > 0;
                                        });
                                    }
                                    else event.finish();
                                }
                                else event.finish();
                                'step 2'
                                if (result.targets) {
                                    result.targets[0].recover();
                                    result.targets[0].draw();
                                }
                            },
                        },
                        Limpid: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = ['basic', 'trick'];
                            },
                            trigger: {
                                global: 'useCardToAfter',
                            },
                            filter(event, player) {
                                if (event.card.name == 'sha') {
                                    return event.target.isIn() && event.targets.length == 1;
                                }
                                return false;
                            },
                            check(event, player) {
                                return get.attitude(player, event.targets[0]) > 0;
                            },
                            //目标唯一的【杀】结算后,你可以检索一张基本牌,选择一项:1.将此牌交给目标并交换黄色部分;2.弃置此牌并对使用者使用一张因此亮出的锦囊牌
                            content() {
                                'step 0'
                                player.searchCard(function (card, player) {
                                    return get.type(card, 'trick') == player.storage.Limpid[0];
                                });
                                'step 1'
                                if (result.bool) {
                                    event.cardx = result.card;
                                    var lisx = [];
                                    for (var i of result.cards) {
                                        if (get.type(i, 'trick') == player.storage.Limpid[1]) lisx.push(i);
                                    }
                                    var source = trigger.player;
                                    var target = trigger.targets[0];
                                    for (var i of lisx) {
                                        if (lib.filter.targetEnabled2(i, player, source)) {
                                            var use = true;
                                            break;
                                        }
                                    }
                                    if (use) {
                                        player.chooseCardButton(`对${get.translation(source)}使用一张因此亮出的${get.translation(player.storage.Limpid[1])}牌,或点取消将${get.translation(event.cardx)}交给` + get.translation(target), lisx)
                                            .set('filterButton', function (button) {
                                                return lib.filter.targetEnabled2(button.link, player, source);
                                            })
                                            .set('ai', function (button) {
                                                return get.effect(source, button.link, player, player) - 1;
                                            });//QQQ
                                    }
                                }
                                else event.finish();
                                'step 2'
                                if (result && result.links && result.links[0]) {
                                    player.discard(event.cardx);
                                    player.useCard(result.links[0], false, trigger.player);
                                }
                                else {
                                    if (trigger.targets[0] != player) {
                                        trigger.targets[0].gain(event.cardx, 'give');
                                    }
                                    player.popup('交换描述');
                                    player.storage.Limpid.reverse();
                                }
                            },
                        },
                        UseStrings: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player, name) {
                                if (['equip', 'delay'].includes(get.type(event.card))) return false;
                                if (!event.targets || event.targets.length != 1 || !event.targets[0].isAlive()) return false;
                                if (event.cards.filterInD().length <= 0) return false;
                                var history = player.getHistory('useCard');
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i] != event && (get.type2(history[i].card) == 'basic' || get.type(history[i].card) == 'trick')) return false;
                                    else if (history[i] == event) return true;
                                }
                                return false;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.targets[0]) > 0) return true;
                                return game.hasPlayer(current => get.effect(current, event.card, event.targets[0], player) > 0);
                            },
                            content() {
                                event.cards = trigger.cards.filterInD();
                                event.target = trigger.targets[0];
                                if (!event.target.isLinked()) event.target.link(true);
                                event.target.gain(event.cards, 'gain2');
                                player.storage.UseStrings2 = event.target;
                                player.addTempSkill('UseStrings2');
                            },
                        },
                        'UseStrings2': {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            mark: true,
                            marktext: '丝',
                            intro: {
                                name: '游丝',
                                'name2': '丝',
                                content: '已用言灵术控制了$',
                            },
                            filter(event, player) {
                                return player.storage.UseStrings2;
                            },
                            content() {
                                'step 0'
                                var target = player.storage.UseStrings2;
                                event.target = target;
                                if (!target.isAlive() || !target.countCards('h')) {
                                    event.goto(3);
                                }
                                else {
                                    target.showHandcards();
                                }
                                'step 1'
                                var cards = event.target.getCards('h');
                                if (!game.hasPlayer(function (current) {
                                    if (current == event.target) return false;
                                    if (Array.isArray(cards)) for (var i of cards) {
                                        if (event.target.canUse(i, current)) return true;
                                        else continue;
                                    }
                                    return false;
                                })) event.goto(3);
                                else {
                                    player.chooseTarget(`请选择${get.translation(player.storage.UseStrings2)}使用牌的目标`, true, function (card, player, target) {
                                        if (target == event.target) return false;
                                        if (Array.isArray(cards)) for (var i of cards) {
                                            if (event.target.canUse(i, target)) return true;
                                            else continue;
                                        }
                                        return false;
                                    }).set('ai', function (target) {
                                        var player = _status.event.player;
                                        var source = player.storage.UseStrings2;
                                        var att = 0;
                                        for (var i of source.getCards('h')) {
                                            if (source.canUse(i, target)) att += get.effect(target, i, source, player);
                                        }
                                        return att > 0;
                                    });
                                }
                                'step 2'
                                if (result.bool) {
                                    var target2 = result.targets[0];
                                    event.target.chooseToUse((c) => lib.filter.filterCard(c, event.target, event.getParent(2)), `游丝:对${get.translation(target2)}使用一张牌`)
                                        .set('targetRequired', true)
                                        .set('complexSelect', true)
                                        .set('filterTarget', function (card, player, target) {
                                            if (!_status.event.player.canUse(card, result.targets[0])) return false;
                                            if (target != result.targets[0] && !ui.selected.targets.includes(result.targets[0])) return false;
                                            return lib.filter.filterTarget.apply(this, arguments);
                                        });//QQQ
                                }
                                else event.goto(3);
                                'step 3'
                                delete player.storage.UseStrings2;
                            },
                        },
                        Moonsonata: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('Moonsonata_block')) return false;
                                if (!event.targets || !event.targets.includes(player)) return false;
                                if (get.type(event.card) != 'trick' && event.card.name != 'sha') return false;
                                if (event.player == player) return false;
                                var list = [];
                                if (get.tag(event.card, 'respondSha')) list.push('sha');
                                if (get.tag(event.card, 'respondShan')) list.push('shan');
                                if (get.type(event.card) == 'trick') list.push('wuxie');
                                var cards = player.getCards('hes');
                                if (!list.length || !cards.length) return false;
                                if (Array.isArray(cards)) for (var i of cards) {
                                    if (list.includes(i.name)) return true;
                                    else continue;
                                }
                                return false;
                            },
                            content() {
                                'step 0'
                                var list = [];
                                if (get.tag(trigger.card, 'respondSha')) list.push('sha');
                                if (get.tag(trigger.card, 'respondShan')) list.push('shan');
                                if (get.type(trigger.card) == 'trick') list.push('wuxie');
                                player.chooseCard('hes', get.prompt2('Moonsonata'), function (card) {
                                    return list.includes(card.name);
                                }).set('ai', function (card) {
                                    return 8 - get.value(card);
                                });
                                'step 1'
                                if (result.bool) {
                                    player.addTempSkill('duoduan_im');
                                    var card = result.cards[0];
                                    player.lose(card, ui.discardPile, 'visible');
                                    player.$throw(card, 1000);
                                    game.log(player, '将', card, '置入弃牌堆');
                                    player.draw();
                                }
                                else event.finish();
                                'step 2'
                                if (_status.event.getTrigger().targets.length == 1) {
                                    event._result = {
                                        bool: true,
                                        targets: [player],
                                    };
                                }
                                else {
                                    player.chooseTarget(`请选择${get.translation(trigger.card)}的一个目标,令其由目标变为使用者`, true, function (card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        return trigger.targets.includes(target);
                                    }).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.attitude(player, target);
                                    });
                                }
                                'step 3'
                                if (result.bool) {
                                    event.reversed1 = result.targets[0];
                                    event.reversed2 = trigger.player;
                                }
                                else event.finish();
                                'step 4'
                                player.addTempSkill('Moonsonata_block');
                                var num = get.copy(trigger.parent.targets.length);
                                trigger.untrigger();
                                trigger.parent.player = event.reversed1;
                                trigger.parent.targets.push(event.reversed2);
                                trigger.parent.targets.remove(event.reversed1);
                                trigger.parent.targets.length = num;
                                event.reversed1.actionHistory[event.reversed1.actionHistory.length - 1].useCard.push(trigger.parent);
                                event.reversed2.actionHistory[event.reversed2.actionHistory.length - 1].useCard.remove(trigger.parent);
                                game.log(event.reversed1, '成为了', trigger.card, '的使用者,', event.reversed2, '成为了', trigger.card, '的目标');
                            },
                            subSkill: {
                                block: {
                                    charlotte: true,
                                },
                            },
                        },
                        Flower: {
                            audio: 'ext:天海经行/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(current => current.countCards('h') == 0);
                            },
                            selectTarget: 1,
                            filterTarget(event, player, target) {
                                return target.countCards('h') == 0;
                            },
                            content() {
                                'step 0'
                                player.chooseControl(['一', '二'], function () {
                                    if (get.attitude(player, target) > 0) return '二';
                                    return '一';
                                }).set('prompt', '令' + get.translation(targets[0]) + '摸至多两张牌');
                                'step 1'
                                player.addTempSkill('Flower_draw');
                                if (result.control == '一') {
                                    targets[0].draw('bottom');
                                    player.storage.Flower_draw = [targets[0], 2];
                                }
                                else {
                                    targets[0].draw(2, 'bottom');
                                    player.storage.Flower_draw = [targets[0], 4];
                                }
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var target = player.storage.Flower_draw[0];
                                        if (target.countCards('h')) return false;
                                        var evt = event.getl(target);
                                        return evt && evt.hs && evt.hs.length;
                                    },
                                    content() {
                                        player.draw(player.storage.Flower_draw[1]);
                                        player.removeSkill('Flower_draw');
                                    },
                                    onremove(player, skill) {
                                        player.storage[skill] = [];
                                    },
                                    mark: true,
                                    marktext: '白花',
                                    intro: {
                                        name: '幽兰',
                                        content(storage) {
                                            if (!storage || !storage.length) return '【幽兰】未发动';
                                            return `本回合${get.translation(storage[0])}下一次失去所有手牌后,你摸${get.translation(storage[1])}张牌`;
                                        },
                                    },
                                },
                            },
                        },
                        Abyss: {
                            audio: 'ext:天海经行/audio:2',
                            enable: 'chooseToUse',
                            usable: 1,
                            viewAsFilter(player) {
                                return player.countCards('h') > 0;
                            },
                            selectCard: -1,
                            filterCard(card) {
                                return true;
                            },
                            position: 'h',
                            viewAs: {
                                name: 'tao',
                                storage: {
                                    Abyss: true,
                                },
                            },
                            prompt: '将所有手牌当桃使用',
                            group: 'Abyss_add',
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.hasSkill('Abyss_block')) return false;
                                        if (event.card.name != 'tao' || !event.card.storage || !event.card.storage.Abyss) return false;
                                        if (get.color(event.card) != 'none') return false;
                                        return player.name == 'strl_Luocha';
                                    },
                                    content() {
                                        'step 0'
                                        event.numx = trigger.cards.length;
                                        if (event.numx == 2) var str = '两';
                                        else var str = get.translation(event.numx);
                                        player.chooseTarget(`是否令一名其他角色弃置${str}张牌并发动你武将牌上一个技能？`, function (event, player, target) {
                                            return target != player && target.countCards('he') > 0;
                                        }).set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (event.numx >= 3) return get.attitude(player, target) < 0;
                                            return get.attitude(player, target) >= 0;
                                        });
                                        'step 1'
                                        if (result.bool) {
                                            event.tarx = result.targets[0];
                                            player.line(event.tarx, 'green');
                                            event.tarx.chooseToDiscard(event.numx, 'he', true);
                                        }
                                        else event.finish();
                                        'step 2'
                                        var list = ['cancel2'];
                                        if (event.tarx.countCards('h') > 0 && event.tarx.canUse('tao', event.tarx)) list.unshift('Abyss');
                                        if (game.hasPlayer(current => current.countCards('h') == 0)) list.unshift('Flower');
                                        event.tarx.chooseControl(list, function () {
                                            var choice;
                                            var player = event.tarx;
                                            if (list.length == 1) return list[0];
                                            if (game.hasPlayer(current => get.attitude(player, current) > 0 && current.countCards('h') == 0) || player.countCards('h') > 2) return 'Flower';
                                            return 'Abyss';
                                        }).set('choiceList', [
                                            '素绽:你可以令一名没有手牌的角色从牌堆底摸至多两张牌;本回合内其下一次失去所有手牌后,你摸其因此摸牌数两倍的牌.',
                                            '濯荆:你可以将所有手牌当【桃】使用',
                                        ]).set('prompt', '请选择一项');
                                        'step 3'
                                        if (result.control != 'cancel2') {
                                            if (result.control == 'Flower') {
                                                event.tarx.chooseTarget(true, '选择发动【幽兰】的目标', function (event, player, target) {
                                                    return target.countCards('h') == 0;
                                                }).set('ai', function (target) {
                                                    var player = event.tarx;
                                                    return get.attitude(player, target);
                                                });
                                            }
                                            else {
                                                var cardx = event.tarx.getCards('h');
                                                event.tarx.useCard({ name: 'tao' }, cardx, 'Abyss');
                                                event.finish();
                                            }
                                        }
                                        else event.finish();
                                        'step 4'
                                        if (result.targets[0]) {
                                            var target = result.targets[0];
                                            event.tarx.chooseControl(['一', '二'], function () {
                                                if (get.attitude(player, target) > 0) return '二';
                                                return '一';
                                            }).set('prompt', '令' + get.translation(target) + '摸至多两张牌');
                                            event.tara = target;
                                        }
                                        else event.finish();
                                        'step 5'
                                        event.tarx.addTempSkill('Flower_draw');
                                        var target = event.tara;
                                        if (result.control == '一') {
                                            target.draw('bottom');
                                            event.tarx.storage.Flower_draw = [target, 2];
                                        }
                                        else {
                                            target.draw(2, 'bottom');
                                            event.tarx.storage.Flower_draw = [target, 4];
                                        }
                                    },
                                },
                                block: {
                                    charlotte: true,
                                },
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
                                        // if(player==target&&player.hp<=0) return 2;
                                        if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                        var nd = player.needsToDiscard();
                                        var keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        }
                                        else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                            keep = true;
                                        }
                                        var mode = get.mode();
                                        if (target.hp >= 2 && keep && target.hasFriend()) {
                                            if (target.hp > 2 || nd == 0) return 0;
                                            if (target.hp == 2) {
                                                if (game.hasPlayer(function (current) {
                                                    if (target != current && get.attitude(target, current) >= 3) {
                                                        if (current.hp <= 1) return true;
                                                        if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                    }
                                                })) {
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
                                        if (mode == 'stone' && target.isMin() &&
                                            player != target && tri && tri.name == 'dying' && player.side == target.side &&
                                            tri.source != target.getEnemy()) {
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
                        Shadow: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            forced: true,
                            hiddenSkill: true,
                            filter(event, player) {
                                return event.toShow && event.toShow.includes('strl_Seele');
                            },
                            content() {
                                player.addTempSkill('Shadow_block');
                                player.addMark('Shadow2', 1, false);
                            },
                            group: ['Shadow2', 'Shadow_lose'],
                            subSkill: {
                                lose: {
                                    trigger: {
                                        global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.hasSkill('Shadow_block')) return false;
                                        var cur = _status.currentPhase;
                                        if (!cur || !cur.isAlive()) return false;
                                        var target = player;
                                        if (target.countCards('h')) return false;
                                        var evt = event.getl(target);
                                        return evt && evt.hs && evt.hs.length;
                                    },
                                    content() {
                                        'step 0'
                                        var cur = _status.currentPhase;
                                        var pla = player;
                                        cur.chooseBool(`是否令${get.translation(player)}获得一个回合？`).set('ai', function () {
                                            return get.attitude(cur, pla) > 0;
                                        });
                                        'step 1'
                                        if (result.bool) {
                                            if (_status.currentPhase != player) _status.currentPhase.line(player, 'water');
                                            player.addMark('Shadow2', 1, false);
                                            player.addTempSkill('Shadow_block');
                                        }
                                    },
                                },
                                block: {
                                    charlotte: true,
                                },
                            },
                        },
                        Shadow2: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('Shadow2') > 0;
                            },
                            content() {
                                'step 0'
                                player.addTempSkill('Shadow2_buff', { player: 'phaseEnd' });
                                player.removeMark('Shadow2', 1);
                                player.phase('nodelay');
                                'step 1'
                                if (player.countMark('Shadow2') > 0) event.goto(0);
                            },
                            group: 'Shadow_lose',
                            subSkill: {
                                buff: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (get.color(card) != 'black') return false;
                                        },
                                    },
                                    mark: true,
                                    marktext: '影',
                                    intro: {
                                        name: '飒影',
                                        content: '<li>「地火」出动!<br><li>仅能使用黑色牌且不能被响应',
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player == _status.currentPhase;
                                    },
                                    content() {
                                        trigger.nowuxie = true;
                                        trigger.directHit.addArray(game.players);
                                    },
                                },
                            },
                        },
                        Sickle: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            check(event, player) {
                                if (!game.hasPlayer(current => get.effect(current, { name: 'sha' }, player, player) > 0)) return false;
                                return true;
                            },
                            content() {
                                'step 0'
                                trigger.changeToZero();
                                event.cardx = get.cards(2);
                                player.showCards(event.cardx);
                                event.i = 0;
                                'step 1'
                                event.sha = event.cardx[event.i];
                                player.chooseUseTarget(true, [event.sha], { name: 'sha' });
                                'step 2'
                                player.getStat().card.sha--;
                                var sha = event.sha;
                                if (!player.hasHistory('sourceDamage', evt => evt.cards.includes(sha))) player.gain(event.sha, 'gain2');
                                event.i += 1;
                                if (event.i < event.cardx.length) event.goto(1);
                                else {
                                    var cardx = event.cardx
                                    player.storage.Sickle = game.filterPlayer(function (current) {
                                        return current.hasHistory('damage', function (evt) {
                                            if (evt.cards) {
                                                for (var i of evt.cards) {
                                                    return event.cardx.includes(i);
                                                }
                                            }
                                        });
                                    });
                                }
                            },
                            group: ['Sickle_reset', 'Sickle_damage'],
                            subSkill: {
                                reset: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    content() {
                                        player.storage.Sickle = [];
                                    },
                                },
                                damage: {
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        var type = get.type(event.card, false);
                                        return type == 'basic' || type == 'trick';
                                    },
                                    content() {
                                        'step 0'
                                        var filter = function (event, player) {
                                            var card = event.card, info = get.info(card);
                                            if (info.allowMultiple == false) return false;
                                            if (event.targets && !info.multitarget) {
                                                if (game.hasPlayer(function (current) {
                                                    return !event.targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && player.storage.Sickle.includes(current);
                                                })) {
                                                    return true;
                                                }
                                            }
                                            return false;
                                        }
                                        if (!filter(trigger, player)) event.finish();
                                        else {
                                            var prompt = `为${get.translation(trigger.card)}增加目标？`;
                                            trigger.player.chooseTarget(get.prompt('Sickle'), prompt, [1, Infinity], function (card, player, target) {
                                                var player = _status.event.player;
                                                return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target) && player.storage.Sickle.includes(target);
                                            }).set('ai', function (target) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                return get.effect(target, trigger.card, player, player);
                                            }).set('card', trigger.card).set('targets', trigger.targets);
                                        }
                                        'step 1'
                                        if (result.bool) {
                                            if (!event.isMine() && !event.isOnline()) game.delayx();
                                        }
                                        else event.finish();
                                        'step 2'
                                        game.log(result.targets, '也成为了', trigger.card, '的目标');
                                        trigger.targets.addArray(result.targets);
                                    },
                                },
                            },
                        },
                        Rampart: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            filter(event, player) {
                                if (player.hasSkill('Rampart_block')) return false;
                                return event.card.name == 'sha' || (get.type(event.card, 'trick') == 'trick' && get.color(event.card) == 'black');
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.addTempSkill('Rampart_block');
                                var tar = trigger.targets;
                                event.lis = [];
                                var num = game.countPlayer(current => tar.includes(current) && current.countCards('he') > 0)
                                if (num > 0) player.chooseTarget(num, function (event, player, target) {
                                    return tar.includes(target) && target.countCards('he') > 0;
                                }).set('prompt', get.prompt('Rampart', tar)).set('prompt2', '弃置这些角色各一张牌').set('ai', function (target) {
                                    var player = _status.event.player;
                                    var num = 0;
                                    for (var i of game.filterPlayer(current => tar.includes(current) && current.countCards('he') > 0)) {
                                        num += get.effect(i, trigger.card, trigger.player, player);
                                    }
                                    return num > 0;
                                });
                                'step 1'
                                if (!result.targets) event.finish();
                                else {
                                    event.targetx = result.targets;
                                    event.num = 0;
                                }
                                'step 2'
                                var tarx = event.targetx[event.num];
                                trigger.targets.remove(tarx);
                                trigger.parent.triggeredTargets2.remove(tarx);
                                trigger.untrigger();
                                player.discardPlayerCard(tarx, 'he', true);
                                'step 3'
                                event.lis.push([event.targetx[event.num], result.cards[0].suit]);
                                event.num += 1;
                                if (event.num < event.targetx.length) event.goto(2);
                                'step 4'
                                var lis = [];
                                for (var i of event.lis) {
                                    if (i[0] == player) {
                                        var suix = i[1];
                                        break;
                                    }
                                }
                                if (suix) {
                                    for (var i = 0; i < event.lis.length; i++) {
                                        if (event.lis[i][1] == suix) lis.push(event.lis[i][0]);
                                    }
                                    lis.sort(lib.sort.seat);
                                    player.storage.Rampart_toretort = trigger.card;
                                    player.storage.Rampart = lis;
                                }
                            },
                            group: 'Rampart_toretort',
                            subSkill: {
                                block: {
                                    charlotte: true,
                                    onremove(player) {
                                        player.storage.Rampart = [];
                                        player.storage.Rampart_toretort = 0;
                                    },
                                },
                                toretort: {
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = 0;
                                    },
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (!player.storage.Rampart || !player.storage.Rampart.length) return false;
                                        if (!player.storage.Rampart_toretort || player.storage.Rampart_toretort != event.card) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        event.lis = player.storage.Rampart;
                                        event.num = 0;
                                        'step 1'
                                        var cur = event.lis[event.num];
                                        var source = trigger.player;
                                        var list = [];
                                        for (var name of lib.inpile) {
                                            if (get.type(name) != 'basic') continue;
                                            var card = { name: name };
                                            if (lib.filter.targetEnabled2(card, cur, source)) {
                                                list.push(['基本', '', name]);
                                            }
                                            if (name == 'sha') {
                                                for (var nature of lib.inpile_nature) {
                                                    card.nature = nature;
                                                    if (lib.filter.targetEnabled2(card, cur, source)) {
                                                        list.push(['基本', '', name, nature]);
                                                    }
                                                }
                                            }
                                        }
                                        if (list.length) {
                                            cur.chooseButton([`是否视为对${get.translation(source)}使用一张基本牌？`, [list, 'vcard']]).set('ai', function (button) {
                                                var player = cur;
                                                var card = { name: button.link[2], nature: button.link[3] };
                                                if (card.name == 'tao') {
                                                    if (get.attitude(player, source) > 0 && source.hp <= 2) {
                                                        return 5;
                                                    }
                                                    return -1;
                                                }
                                                if (card.name == 'sha') {
                                                    if (get.attitude(player, source) < 0) {
                                                        if (card.nature == 'fire') return 2.95;
                                                        if (card.nature == 'thunder' || card.nature == 'ice') return 2.92;
                                                        return 2.9;
                                                    }
                                                    return 0;
                                                }
                                                if (card.name == 'jiu') {
                                                    return 0;
                                                }
                                                return 0;
                                            });
                                        }
                                        event.cur = cur;
                                        'step 2'
                                        if (result && result.bool && result.links[0]) {
                                            var card = { name: result.links[0][2], nature: result.links[0][3] };
                                            event.cur.useCard(card, trigger.player);
                                        }
                                        event.num += 1;
                                        if (event.num < event.lis.length) event.goto(1);
                                        else {
                                            player.storage.Rampart = [];
                                            player.storage.Rampart_toretort = 0;
                                        }
                                    },
                                },
                            },
                        },
                        Troll: {
                            audio: 'ext:天海经行/audio:2',
                            enable: 'phaseUse',
                            zhuanhuanji: true,
                            mark: true,
                            marktext: '☯',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = 1;
                            },
                            intro: {
                                content(storage) {
                                    return '转换技,出牌阶段限一次,你可翻面并视为对自己使用' + (storage ? '【以逸待劳】' : '【火攻】') + ';若你因此弃置了红色牌,你可以将手牌摸至四张,或令此技能视为未发动过.';
                                },
                            },
                            filter(event, player) {
                                if (player.hasSkill('Troll_block')) return false;
                                var cardx = player.storage.Troll ? 'yiyi' : 'huogong';
                                return player.canUse({ name: cardx }, player);
                            },
                            check(event, player) {
                                if (player.isTurnedOver()) return true;
                                var cardx = player.storage.Troll ? 'yiyi' : 'huogong';
                                return get.effect(player, { name: cardx }, player, player);
                            },
                            content() {
                                'step 0'
                                player.addTempSkill('Troll_block');
                                player.changeZhuanhuanji('Troll');
                                player.turnOver();
                                'step 1'
                                var cardx = player.storage.Troll ? 'huogong' : 'yiyi';
                                player.useCard({ name: cardx }, player);
                            },
                            group: 'Troll_roll',
                            subSkill: {
                                block: {
                                    charlotte: true,
                                },
                                roll: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return event.parent.name == 'Troll' &&
                                            event.targets.some(target =>
                                                target == player && target.hasHistory('lose', evt =>
                                                    evt && evt.type == 'discard' && evt.getParent(4) == event && evt.cards.some(card =>
                                                        get.color(card) == 'red')));
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        if (player.countCards('h') >= 4) event._result = { bool: false };
                                        else player.chooseBool('将手牌摸至四张,或点<取消>令【肇涌】视为未发动过').set('ai', function () {
                                            var player = _status.event.player;
                                            if (player.countCards('h') > 1 || player.isTurnedOver()) return false;
                                            return true;
                                        });
                                        'step 1'
                                        if (result.bool) {
                                            player.drawTo(4);
                                        }
                                        else {
                                            player.removeSkill('Troll_block');
                                            game.log(player, '重置了', '#g【' + get.translation('Troll') + '】');
                                        }
                                    }
                                },
                            },
                        },
                        Shock: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return player.countCards('h') && event.source;//QQQ
                            },
                            logTarget: 'source',
                            usable: 1,
                            check(event, player) {
                                var suit = [];
                                for (var i of player.getCards('h')) {
                                    if (!suit.includes(i.suit)) suit.push(i.suit);
                                }
                                if (suit.length == 4) return false;
                                return true;
                            },
                            forced: true,
                            //每回合限一次,你受到伤害后,可以展示手牌并令伤害来源弃置任意张手牌;若上述牌花色不足四种,你回复1点体力
                            content() {
                                'step 0'
                                player.showHandcards();
                                'step 1'
                                event.suit = [];
                                for (var i of player.getCards('h')) {
                                    if (!event.suit.includes(i.suit)) event.suit.push(i.suit);
                                }
                                var s = ['heart', 'diamond', 'spade', 'club'];
                                var x = [];
                                for (var i of s) if (!event.suit.includes(i)) x.push(i);
                                trigger.source.chooseToDiscard([1, Infinity], 'h', '弃置任意张手牌')
                                    .set('ai', function (card) {
                                        if (get.attitude(trigger.source, player) > 0) return 0;
                                        var suitx = event.suit;
                                        for (var i of trigger.source.getCards('h')) {
                                            if (!suitx.includes(i.suit)) {
                                                suitx.push(i.suit);
                                            }
                                        }
                                        if (suitx.length < 4) return 0;
                                        var sel = [];
                                        if (ui.selected.cards && ui.selected.cards.length) {
                                            for (var i of ui.selected.cards) {
                                                if (!sel.includes(i.suit)) {
                                                    sel.push(i.suit);
                                                }
                                            }
                                        }
                                        if (!event.suit.includes(card.suit) && !sel.includes(card.suit)) {
                                            return 8 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('prompt2', `推荐弃置${get.translation(x)}牌`);
                                'step 2'
                                if (result.bool) for (var i of result.cards) if (!event.suit.includes(i.suit)) event.suit.push(i.suit);
                                if (event.suit.length < 4) player.recover();
                            },
                            ai: {
                                maixie: true,
                            },
                        },
                        Piersky: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0 && game.hasPlayer(function (current) {
                                    return player.canUse('binglinchengxiax', current);
                                });
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.chooseCardTarget({
                                    position: 'he',
                                    filterCard: lib.filter.cardUsable,
                                    filterTarget(card, player, target) {
                                        return player.canUse('binglinchengxiax', target);
                                    },
                                    ai1(card) {
                                        return 6 - get.value(card);
                                    },
                                    ai2(target) {
                                        var player = _status.event.player;
                                        return get.effect(target, { name: 'binglinchengxiax' }, player, player);
                                    },
                                    prompt: get.prompt('Piersky')
                                }).set('prompt2', '将一张牌当作【兵临城下】使用');
                                'step 1'
                                if (result.bool) {
                                    player.useCard({ name: 'binglinchengxiax' }, result.cards, 'Piersky', result.targets[0], false);
                                }
                                else event.finish();
                                'step 2'
                                if (player.getStat().damage > 0) trigger.num += player.getStat().damage;
                            },
                        },
                        Rocktide: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!_status.currentPhase) return false;//QQQ
                                if (player.hasSkill('Rocktide_block')) return false;
                                if (!event.cards.length) return true;
                                if (!player.hasHistory('lose', (evt) => evt.parent == event)) return true;
                            },
                            //你不从手牌中使用牌结算后,当前回合角色需熔铸任意张牌;若这些牌花色均相同,你摸两张牌并令此技能于本回合失效
                            content() {
                                'step 0'
                                event.cur = _status.currentPhase;
                                if (event.cur.countCards('he') > 0) event.cur.chooseCard('熔铸至少一张牌', [1, Infinity], 'he', true, (card, player) => player.canRecast(card)).set('ai', card => {
                                    var val = get.value(card);
                                    if (get.attitude(event.cur, player) > 0 && ui.selected.cards.length == 1) return false;
                                    else if (get.attitude(event.cur, player) < 0 && ui.selected.cards.length == 2) return false;
                                    return 6 - val;
                                });
                                else event.finish();
                                'step 1'
                                if (result.bool) {
                                    event.cur.loseToDiscardpile(result.cards);
                                    event.cur.draw();
                                    var suit = result.cards[0].suit;
                                    for (var i of result.cards) {
                                        if (i.suit != suit) {
                                            var con = true;
                                            break;
                                        }
                                    }
                                    if (!con) {
                                        player.draw(2);
                                        player.addTempSkill('Rocktide_block');
                                    }
                                }
                            },
                            subSkill: {
                                block: {
                                    charlotte: true,
                                },
                            },
                        },
                        Northwind: {
                            audio: 'ext:天海经行/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > player.getHandcardLimit() || player.hp > 0;
                            },
                            content() {
                                'step 0'
                                var list = [];
                                if (player.countCards('h') != 1) list.push('选项一');
                                if (player.hp > 0) list.push('选项二');
                                player.chooseControl(list, function () {
                                    if (Math.abs(player.countCards('h') - 1) == 1) return '选项一';
                                    if (player.hp > 2) return '选项二';
                                    return list[0];
                                }).set('choiceList', [
                                    '将手牌调整至1',
                                    '失去1点体力',
                                ]).set('prompt', '请选择一项,视为使用一张【杀】');
                                'step 1'
                                if (result.control == '选项一') {
                                    var num = player.countCards('h') - 1;
                                    player.storage.Northwind = '失去1点体力';
                                    if (num > 0) player.chooseToDiscard(num, true);
                                    else player.draw(-num);
                                }
                                else if (result.control == '选项二') {
                                    player.storage.Northwind = '将手牌调整至1';
                                    player.loseHp();
                                }
                                else event.finish();
                                'step 2'
                                player.chooseUseTarget('视为使用一张【杀】', {
                                    name: 'sha', storage: {
                                        Northwind: true,
                                    }
                                }, true);
                                'step 3'
                                player.getStat().card.sha--;
                            },
                            group: 'Northwind_effect',
                            subSkill: {
                                effect: {
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    filter(event, player) {
                                        if (!player.storage.Northwind) return false;
                                        var evt = event.parent;
                                        if (!evt.card || !evt.card.storage || !evt.card.storage.Northwind) return false;
                                        if (player.storage.Northwind == '将手牌调整至1') return event.target.countCards('h') != 1;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        var tar = trigger.target;
                                        if (player.storage.Northwind == '将手牌调整至1') {
                                            var num = tar.countCards('h') - 1;
                                            if (num > 0) tar.chooseToDiscard(num, 'h', true);
                                            else tar.draw(-num);
                                        }
                                        else if (player.storage.Northwind == '失去1点体力') tar.loseHp();
                                    },
                                },
                            },
                        },
                        Awakenning: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: ['loseAfter', 'changeHp'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('Awakenning_block')) return false;
                                if (event.name == 'changeHp') return player.hp <= 0;
                                if (player.countCards('h')) return false;
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.hs && evt.hs.length;
                            },
                            content() {
                                'step 0'
                                player.addTempSkill('Awakenning_block', 'roundStart');
                                player.chooseControl([1, 2, 3], function () {
                                    if (!game.hasPlayer(current => get.effect(current, { name: 'juedou' }, player, player) > 0)) return 1;
                                    return 3;
                                }).set('prompt', '选择摸至多三张牌');
                                'step 1'
                                if (result.control) {
                                    player.draw(result.control);
                                    player.addTempSkill('Awakenning_wake');
                                    player.storage.Awakenning_wake = result.control;
                                }
                            },
                            subSkill: {
                                wake: {
                                    mark: true,
                                    marktext: '觉',
                                    intro: {
                                        name: '梦觉',
                                        content(storage) {
                                            var str = '回合结束时,你需执行:<br>';
                                            if (storage >= 1) str += '<li>熔铸你场上所有牌;<br>';
                                            if (storage >= 2) str += '<li>视为使用【决斗】;<br>';
                                            if (storage >= 3) str += '<li>将武将牌替换为<饮月君>';
                                        },
                                    },
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.storage.Awakenning_wake > 0;
                                    },
                                    content() {
                                        'step 0'
                                        event.num = player.storage.Awakenning_wake;
                                        if (event.num > 0) {
                                            event.num--;
                                            var cardx = player.getCards('ej');
                                            if (cardx && cardx.length) {
                                                player.loseToDiscardpile(cardx);
                                                player.draw();
                                            }
                                        }
                                        'step 1'
                                        if (event.num > 0) {
                                            event.num--;
                                            player.chooseUseTarget({ name: 'juedou' }, true);
                                        }
                                        'step 2'
                                        if (event.num > 0) {
                                            player.reinit(player.name, 'strl_Yinyue');
                                            player.gainMaxHp();
                                            player.update();
                                        }
                                    },
                                    onremove(player, skill) {
                                        player.storage[skill] = 0;
                                    },
                                },
                                block: {
                                    charlotte: true,
                                },
                            },
                        },
                        Arrogance: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = 0;
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (_status.dying.length) return false;
                                if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                if (event.targets.length != 1) return false;
                                if (event.targets[0].countCards('he') == 0) return false;
                                return !player.storage.Arrogance;
                            },
                            usable: 1,
                            logTarget: 'target',
                            check(event, player) {
                                if (get.attitude(player, event.targets[0]) > 0) return false;
                                return get.effect(event.targets[0], event.card, player, player) <= 3;
                            },
                            content() {
                                trigger.effectCount += 2;
                                player.storage.Arrogance = trigger.card;
                                player.addTempSkill('Arrogance_effect');
                            },
                            subSkill: {
                                effect: {
                                    init(player, skill) {
                                        player.storage[skill] = 0;
                                    },
                                    trigger: {
                                        player: 'useCardToBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.Arrogance && get.translation(player.storage.Arrogance) == get.translation(event.card);
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.Arrogance_effect++;
                                        trigger.setContent(lib.skill.Arrogance_effect.cardContent);
                                    },
                                    cardContent() {
                                        'step 0'
                                        if (!target.countCards('he')) event.goto(3);
                                        else player.choosePlayerCard(target, 'he', true, get.prompt('Arrogance', target));
                                        'step 1'
                                        if (result.bool) {
                                            var num = player.storage.Arrogance_effect;
                                            var cardx = result.cards[0];
                                            switch (num) {
                                                case 1: game.log(player, '将', get.translation(cardx), '置于牌堆底');
                                                    ui.cardPile.appendChild(cardx);
                                                    target.$throw(cardx);
                                                    break;
                                                case 2: game.log(player, '将', get.translation(cardx), '置于牌堆顶');
                                                    ui.cardPile.insertBefore(cardx, ui.cardPile.firstChild);
                                                    target.$throw(cardx);
                                                    break;
                                                case 3: event.cardx = cardx;
                                                    tar = target;
                                                    player.chooseTarget('将' + get.translation(cardx) + '置于一名角色的手牌区', function (event, player, target) {
                                                        if (get.position(cardx) == 'h') return target != tar;
                                                        return true;
                                                    }).set('ai', function (target) {
                                                        if (get.attitude(player, target) > 0) var plus = 1;
                                                        else var plus = -1;
                                                        return get.damageEffect(target, player, player) + plus;
                                                    });
                                            }
                                            player.storage.Arrogance_effect2++;
                                        }
                                        else event.goto(3);
                                        'step 2'
                                        if (result.targets && result.targets.length) {
                                            result.targets[0].gain(event.cardx, 'gain2');
                                            result.targets[0].damage();
                                        }
                                        'step 3'
                                        var num = player.storage.Arrogance_effect;
                                        if (num >= 3) {
                                            player.storage.Arrogance = 0;
                                            player.removeSkill('Arrogance_effect');
                                        }
                                    },
                                    onremove(player, skill) {
                                        player.storage.Arrogance = 0;
                                    },
                                },
                            },
                        },
                        Homecoming: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getDamagedHp() > 0;
                            },
                            _priority: 10,
                            derivation: ['relonghun'],
                            //你受到伤害结算后,可以依次执行已损失体力值项:1.摸你拥有技能数张牌;2.获得或失去已有的『龙魂』;3.使用一张【杀】
                            content() {
                                'step 0'
                                event.count = player.getDamagedHp();
                                event.count--;
                                var num = player.getSkills(null, false, false).filter(function (i) {
                                    var info = get.info(i);
                                    if (!info || info.charlotte) return false;
                                    var infox = lib.translate[i + '_info'];
                                    if (!infox) return false;
                                    return true;
                                }).length;
                                player.draw(num);
                                'step 1'
                                if (event.count > 0) {
                                    event.count--;
                                    if (!player.hasSkill('relonghun')) player.addTempSkill('relonghun', { player: 'dieAfter' });
                                    else player.removeSkill('relonghun');
                                }
                                'step 2'
                                if (event.count > 0) {
                                    event.count--;
                                    player.chooseToUse('龙归:是否使用一张【杀】？', (c) => c.name == 'sha' && lib.filter.filterCard(c, player, event.getParent(2))).set('addCount', false);//QQQ
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
                                            var num = 1;
                                            if (target.getDamagedHp() >= 2 && target.hasSkill('relonghun')) var plus = 2.3;
                                            else if (target.getDamagedHp() <= 1) var plus = 2;
                                            else var plus = 2.7;
                                            if (get.attitude(player, target) > 0) {
                                                if (player.needsToDiscard()) {
                                                    num = 0.7;
                                                }
                                                else {
                                                    num = 0.5;
                                                }
                                            }
                                            if (target.hp >= 4) return [1, num * plus];
                                            if (target.hp == 3) return [1, num * (plus - 0.5)];
                                            if (target.hp == 2) return [1, num * (plus - 2)];
                                        }
                                    },
                                },
                            },
                        },
                        Chased: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                                if (!player.storage.Chased2) player.storage.Chased2 = 3;
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('Chased_block')) return false;
                                if (event.targets.length > 1) return false;
                                if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                if (event.player == event.targets[0]) return false;
                                var target = event.target;
                                var left2 = event.player.previous, right2 = event.player.next, left = [left2], right = [left2];
                                while (left2 && right2 && ![event.player, target].includes(left2) && ![event.player, target].includes(right2)) {//QQQ
                                    left.push(left2);
                                    right.push(right2);
                                    left2 = left2.previous;
                                    right2 = right2.next;
                                }
                                if (target == left2) {
                                    for (var i of left) {
                                        if (i.countCards('he') > 0) return true;
                                    }
                                }
                                if (target == right2) {
                                    for (var i of right) {
                                        if (i.countCards('he') > 0) return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0'
                                var choices = [];
                                var target = trigger.target;
                                var left2 = trigger.player.previous, right2 = trigger.player.next, left = [left2], right = [left2];
                                var att1 = 0, att2 = 0, flag1 = false, flag2 = false;
                                while (left2 && right2 && ![trigger.player, target].includes(left2) && ![trigger.player, target].includes(right2)) {//QQQ
                                    left.push(left2);
                                    right.push(right2);
                                    left2 = left2.previous;
                                    right2 = right2.next;
                                }
                                if (target == left2) {
                                    for (var i of left) {
                                        if (i.countCards('he') > 0) {
                                            if (!flag1) {
                                                choices.push('↖顺时针');
                                                flag1 = true;
                                            }
                                            att1 += get.attitude(player, i);
                                        }
                                    }
                                }
                                if (target == right2) {
                                    for (var i of right) {
                                        if (i.countCards('he') > 0) {
                                            if (!flag2) {
                                                choices.push('逆时针↗');
                                                flag2 = true;
                                            }
                                            att2 += get.attitude(player, i);
                                        }
                                    }
                                }
                                choices.push('cancel2');
                                player.chooseControl(choices, function () {
                                    var chi = 'cancel2';
                                    if (att1 > 0) chi = '↖顺时针';
                                    else if (att2 > 0) chi = '逆时针↗';
                                    if (choices.includes(chi)) return chi;
                                    return 'cancel2';
                                }).set('prompt', get.prompt('Chased')).set('prompt2', `盖伏${get.translation(trigger.player)}和${get.translation(trigger.target)}某个方向之间所有角色的各一张牌`).set('choices', choices);
                                'step 1'
                                if (result.control != 'cancel2') {
                                    var targets = [];
                                    player.addTempSkill('Chased_block');
                                    if (result.control == '↖顺时针') {
                                        var current = trigger.player.previous;
                                        while (current && current != trigger.target && current != trigger.player) {//QQQ
                                            if (current.countCards('he') > 0) targets.push(current);
                                            current = current.previous;
                                        }
                                    }
                                    else {
                                        var current = trigger.player.next;
                                        while (current && current != trigger.target && current != trigger.player) {
                                            if (current.countCards('he') > 0) targets.push(current);
                                            current = current.next;
                                        }
                                    }
                                    if (trigger.target.countCards('he') > 0) targets.push(trigger.target);
                                    event.targets = targets;
                                    if (!event.isMine() && !event.isOnline()) game.delayx();
                                }
                                else event.finish();
                                'step 2'
                                if (event.targets.length) {
                                    event.tar = event.targets[0];
                                    player.choosePlayerCard(event.tar, 'he', 1, get.prompt('Chased', event.tar)).set('forceAuto', true);
                                }
                                else event.finish();
                                'step 3'
                                if (result.bool && result.links.length) {
                                    var target = event.tar;
                                    target.addToExpansion(result.cards, 'giveAuto', target).gaintag.add('xinpojun2');
                                    target.addSkill('xinpojun2');
                                    player.storage.Chased.push([target, result.cards]);
                                    event.targets.shift();
                                    event.goto(2);
                                }
                            },
                            group: 'Chased_move',
                            subSkill: {
                                block: {
                                    charlotte: true,
                                    onremove(player) {
                                        player.storage.Chased = [];
                                    },
                                },
                                move: {
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        if (!player.hasSkill('Chased_block')) return false;
                                        if (!player.storage.Chased2) return false;
                                        return game.hasPlayer(function (current) {
                                            for (var i of player.storage.Chased) {
                                                return current == i[0] && current.getExpansions('xinpojun2').length;
                                            }
                                        });
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        var choice = [];
                                        for (var i = 0; i < player.storage.Chased2; i++) {
                                            choice.push(i + 1);
                                        }
                                        choice.push('cancel2');
                                        event.tars = [];
                                        event.cars = [];
                                        for (var i of player.storage.Chased) {
                                            if (i[0].isAlive && i[0].getExpansions('xinpojun2').length) {
                                                event.tars.push(i[0]);
                                                event.cars.push(i[1]);
                                            }
                                        }
                                        if (choice.length > 1) player.chooseControl(choice, function () {
                                            var att = 0;
                                            for (var i = 1; i <= 3; i++) {
                                                for (var i of event.tars) {
                                                    var tar = i.next;
                                                    att += get.attitude(player, tar);
                                                }
                                                if (att > 0) return i;
                                            }
                                            return 'cancel2';
                                        }).set('prompt', get.prompt('Chased', event.tars)).set('prompt2', `将这些牌逆时针移动至多${player.storage.Chased2}个位次`);
                                        else event.finish();
                                        'step 1'
                                        if (result.control != 'cancel2') {
                                            var num = result.control;
                                            event.gais = [];
                                            for (var i = 0; i < event.tars.length; i++) {
                                                var gain = event.tars[i];
                                                for (var j = 0; j < num; j++) gain = gain.next;
                                                event.gais.push(gain);
                                            }
                                            event.numx = 0;
                                        }
                                        else event.finish();
                                        'step 2'
                                        var target = event.gais[event.numx];
                                        target.addToExpansion(event.cars[event.numx], 'giveAuto', event.tars[event.numx]).gaintag.add('xinpojun2');
                                        target.addSkill('xinpojun2');
                                        game.log(event.tars[event.numx], '的盖伏牌被移动给了', target);
                                        event.numx++;
                                        if (event.numx < event.tars.length) event.goto(2);
                                    },
                                },
                            },
                        },
                        Managing: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    var es = current.getCards('e');
                                    for (var i = 0; i < es.length; i++) {
                                        if (game.hasPlayer(function (current2) {
                                            return current != current2 && !current2.isMin() && current2.canEquip(es[i]);
                                        })) {
                                            return true;
                                        }
                                    }
                                });
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.moveCard().nojudge = true;
                                'step 1'
                                if (result.bool) {
                                    trigger.cancel();
                                    result.targets[1].addTempSkill('Managing_mark', { player: 'phaseUseAfter' });
                                    result.targets[1].storage.Managing_mark = result.card.suit;
                                }
                                else event.finish();
                                /*var next=player.chooseTarget(2,function(card,player,target){
                                    if(ui.selected.targets.length){
                                        var from=ui.selected.targets[0];
                                        if(target.isMin()) return false;
                                        var es=from.getCards('e');
                                        for(var i=0;i<es.length;i++){
                                            if(target.canEquip(es[i])) return true;
                                        }
                                        return false;
                                    }
                                    else{
                                        return target.countCards('e')>0;
                                    }
                                });
                                next.set('multitarget',true);
                                next.set('targetprompt',['被移走','移动目标']);
                                next.set('prompt','是否发动【荡镝】,移动场上的一张装备牌？');
                                next.set('ai',function(target){
                                    if(!ui.selected.targets.length){
                                        var player=_status.event.player,es=target.getCards('e');
                                        var att2=get.sgn(get.attitude(player,target));
                                        if(game.hasPlayer(function(current){
                                            var att=get.attitude(player,current);
                                            var sgnatt=get.sgn(att);
                                            if(current==target) return false;
                                            for(i=0;i<es.length;i++){
                                                if(sgnatt!=0&&att2!=0&&sgnatt!=att2&&
                                                    get.sgn(get.value(es[i],target))==-att2&&
                                                    get.sgn(get.effect(current,es[i],player,current))==sgnatt&&
                                                    current.canEquip(es[i])){
                                                    return true;
                                                }
                                            }
                                        })) return get.attitude(player,target);
                                        return 0;
                                    }
                                    var player=_status.event.player;
                                    var att=get.attitude(player,target);
                                    var sgnatt=get.sgn(att);
                                    var from=ui.selected.targets[0];
                                    var es=from.getCards('e');
                                    var i;
                                    var att2=get.sgn(get.attitude(player,from));
                                    for(i=0;i<es.length;i++){
                                        if(sgnatt!=0&&att2!=0&&sgnatt!=att2&&
                                            get.sgn(get.value(es[i],from))==-att2&&
                                            get.sgn(get.effect(target,es[i],player,target))==sgnatt&&
                                            target.canEquip(es[i])){
                                            return Math.abs(att);
                                        }
                                    }
                                    return -att*att2;
                                });
                                'step 1'
                                if(result.bool){
                                    trigger.cancel();
                                    event.targets=result.targets;
                                }
                                else{
                                    event.finish();
                                }
                                'step 2'
                                                                 'step 3'
                                if(event.targets.length==2){
                                    player.choosePlayerCard('e',true,event.targets[0]).set('nojudge',event.nojudge||false).set('filterButton',function(button){
                                        return event.targets[1].canEquip(button.link);
                                    });
                                }
                                else{
                                    event.finish();
                                }
                                'step 4'
                                if(result.bool&&result.links.length){
                                    var link=result.links[0];
                                    event.targets[1].equip(link);
                                    event.targets[1].addTempSkill('Managing_mark',{player:'phaseUseAfter'});
                                    event.targets[1].storage.Managing_mark=link.suit;
                                    event.targets[0].$give(link,event.targets[1])
                                                                     }*/
                            },
                            group: 'Managing_delay',
                            subSkill: {
                                delay: {
                                    trigger: {
                                        global: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.player.storage.Managing_mark) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0'
                                        var list = [];
                                        if (player.storage.Chased2) list.push('选项一');
                                        if (trigger.player.getHandcardLimit() > 0) list.push('选项二');
                                        if (list.length) {
                                            player.chooseControl(list, function () {
                                                var player = _status.event.player;
                                                if (get.attitude(player, trigger.player) < 0) return '选项二';
                                                if (trigger.player.countCards('h') <= trigger.player.getHandcardLimit() || player.storage.Chased2 <= 1) return '选项二';
                                                return '选项一';
                                            }).set('choiceList', [
                                                '令【昔逐】中划线数字-1',
                                                `令${get.translation(trigger.player)}本回合手牌上限-1`,
                                            ]).set('prompt', get.prompt('Managing'));
                                        }
                                        else event.finish();
                                        'step 1'
                                        if (result.control == '选项一') {
                                            player.storage.Chased2--;
                                            player.popup('数字减少');
                                        }
                                        else {
                                            trigger.player.addTempSkill('Managing_fail');
                                        }
                                    }
                                },
                                mark: {
                                    mark: true,
                                    marktext: '令',
                                    intro: {
                                        name: '荡镝',
                                        content: '除非于下个出牌阶段使用$花色的牌,否则接受惩罚',
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        if (!player.isPhaseUsing()) return false;
                                        return event.card.suit == player.storage.Managing_mark;
                                    },
                                    silent: true,
                                    content() {
                                        player.removeSkill('Managing_mark');
                                    },
                                    onremove(player, skill) {
                                        player.storage[skill] = 0;
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player) {
                                                if (card.suit == player.storage.Managing_mark) return [1, 3];
                                            },
                                        },
                                    },
                                },
                                fail: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - 1;
                                        },
                                    },
                                },
                            },
                        },
                        Solibrave: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                if (player.hasSkill('Solibrave_block')) return false;
                                if (player.storage.Cracksky) var name = player.storage.Cracksky[0];
                                else var name = 'shan';
                                return event.card && event.card.name == name && player.inRange(event.player) && player.hp <= event.player.hp;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                                if (get.damageEffect(event.player, event.getParent(3).player, player, get.nature(event.card)) <= 0) return false;
                                if (player.countCards('h') - event.player.countCards('h') < 2) return true;
                                return Math.random() - 0.5;
                            },
                            content() {
                                'step 0'
                                player.draw(2);
                                trigger.all_excluded = true;
                                'step 1'
                                var num = player.countCards('h') - trigger.player.countCards('h');
                                if (num > 0) player.chooseToDiscard(num, 'h', `将手牌弃置至与${get.translation(trigger.player)}相同`).set('prompt2', '或点<取消>令本回合此技能失效且你不能再使用或打出手牌').set('ai', function (card) {
                                    if (num >= 3) return false;
                                });
                                'step 2'
                                if (!result.cards) {
                                    player.addTempSkill('Solibrave_block');
                                }
                            },
                            subSkill: {
                                block: {
                                    mark: true,
                                    marktext: '孤',
                                    intro: {
                                        name: '踏擂',
                                        content: '本回合不能再使用或打出手牌',
                                    },
                                    charlotte: true,
                                    mod: {
                                        'cardEnabled2'(card, player) {
                                            if (get.position(card) == 'h') return false;
                                        },
                                    },
                                },
                            },
                        },
                        Cracksky: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = ['shan', 'sha'];
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (!game.hasPlayer(current => player.canUse('juedou', current))) return false;
                                return player.countCards('h', function (card) {
                                    return card.name == player.storage.Cracksky[1];
                                }) > 0;
                            },
                            selectTarget: 1,
                            filterTarget(event, player, target) {
                                return target != player && player.canUse('juedou', target);
                            },
                            content() {
                                'step 0'
                                player.showHandcards();
                                var sha = player.getCards('h', function (card) {
                                    return card.name == player.storage.Cracksky[1];
                                });
                                player.useCard({ name: 'juedou' }, sha, 'Cracksky', target, false);
                                'step 1'
                                if (player.hasHistory('sourceDamage', function (evt) {
                                    if (!evt.card) return false;
                                    var evtx = evt.getParent('useCard');
                                    return evtx.card == evt.card && evtx.getParent(1) == event;
                                })) player.chooseBool('是否交换技能中的基本牌名？').set('ai', function () {
                                    var player = _status.event.player;
                                    if (player.storage.Cracksky[0] == 'shan') return true;
                                    return Math.random > 0.9;
                                });
                                else event.finish();
                                'step 2'
                                if (result.bool) {
                                    player.popup('交换牌名');
                                    player.storage.Cracksky.reverse();
                                }
                            },
                            ai: {
                                damage: true,
                                order: 1,
                                effect: {
                                    player(card, player, target) {
                                        if (_status.event.skill == 'Cracksky') {
                                            if (player.hasSkillTag('directHit_ai', true, {
                                                target: target,
                                                card: card,
                                            }, true)) return;
                                            if (player.countCards('h', function (card) {
                                                return card.name == player.storage.Cracksky[1];
                                            }) >= 3 || target.countCards('h') >= 3) return 'zeroplayertarget';
                                            if (target.countCards('h', 'sha') > 1) return 'zeroplayertarget';
                                        }
                                    },
                                },
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 3,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target, card) {
                                        if (player.hasSkillTag('directHit_ai', true, {
                                            target: target,
                                            card: card,
                                        }, true)) {
                                            return 0;
                                        }
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        if (player.storage.Cracksky[1] == 'sha') return -1;
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                        },
                        Habitat: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0 || player.countCards('h') <= 1;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (!player.storage.Habitat || player.storage.Habitat.includes(event.player)) return false;
                                return event.player.hp == 1;
                            },
                            content() {
                                'step 0'
                                event.cards = get.cards(3);
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(function (player, id, cards) {
                                    var str = '逐境';
                                    var dialog = ui.create.dialog(str, cards);
                                    dialog.videoId = id;
                                }, player, event.videoId, event.cards);
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['逐境', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                event.tar = [player, trigger.player];
                                event.chd = [];
                                event.num = 0;
                                game.log(player, '亮出了', event.cards);
                                'step 1'
                                var tax = event.tar[event.num];
                                var next = tax.chooseButton(1, true);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    return !event.chd.includes(get.translation(button.link));
                                });
                                next.set('ai', function (button) {
                                    if (tax.hp < tax.maxHp && button.link.suit == 'heart') return 10;
                                    return get.value(button.link, tax);
                                });
                                'step 2'
                                if (result.bool && result.links) {
                                    var cards2 = result.links;
                                    var tax = event.tar[event.num];
                                    tax.gain(cards2, 'log', 'gain2');
                                    if (cards2.suit == 'heart') tax.recover();
                                    event.chd.push(get.translation(cards2));
                                }
                                'step 3'
                                event.num++;
                                if (event.num < event.tar.length) event.goto(1);
                                else {
                                    game.broadcastAll('closeDialog', event.videoId);
                                    player.storage.Habitat.push(trigger.player);
                                }
                            },
                            mark: true,
                            marktext: '生',
                            intro: {
                                name: '逐境',
                                content(storage) {
                                    if (!storage || !storage.length) return '【逐境】未发动';
                                    return `已对${get.translation(storage)}发动过【逐境】`;
                                },
                            },
                        },
                        Explore: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.target || event.targets.length != 1) return false;
                                var tar = event.targets[0];
                                if (player.hasPathBetween(tar, function (player, current) {
                                    return player.hasHistory('useCard', function (evt) {
                                        return evt.targets && evt.targets.includes(current);
                                    });
                                })) return true;
                                var lis = game.filterPlayer(function (current) {
                                    return player.inRange(current);
                                });
                                lis.sort(function (a, b) {
                                    return get.distance(player, b) - get.distance(player, a);
                                });
                                var cardx = event.card;
                                if (get.distance(player, tar) == get.distance(player, lis[0])) {
                                    if (!player.hasHistory('useCard', function (evt) {
                                        return evt.card != cardx && evt.targets && evt.targets.includes(tar);
                                    })) return player.hasSkill('Habitat') || tar.countCards('he') > 0;
                                }
                                return false;
                            },
                            content() {
                                var tar = trigger.targets[0];
                                if (player.hasPathBetween(tar, function (player, current) {
                                    return player.hasHistory('useCard', function (evt) {
                                        return evt.targets && evt.targets.includes(current);
                                    });
                                })) player.draw();
                                else {
                                    player.discardPlayerCard(tar, 'he', true);
                                    player.storage.Habitat = [];
                                    player.popup(get.translation('Habitat'));
                                    game.log(player, '重置了', '#g【逐境】');
                                }
                            },
                            ai: {
                                threaten: 1.5,
                                effect: {
                                    player(card, player, target) {
                                        if (player.hasPathBetween(target, function (player, current) {
                                            return player.hasHistory('useCard', function (evt) {
                                                return evt.targets && evt.targets.includes(current);
                                            });
                                        })) return [1, 1];
                                        var lis = game.filterPlayer(function (current) {
                                            return player.inRange(current);
                                        });
                                        lis.sort(function (a, b) {
                                            return get.distance(player, b) - get.distance(player, a);
                                        });
                                        if (get.distance(player, target) == get.distance(player, lis[0])) {
                                            if (!player.hasHistory('useCard', function (evt) {
                                                return evt.card != card && evt.targets && evt.targets.includes(target);
                                            })) return [1, 0, 1, -1];
                                        }
                                    },
                                },
                            },
                        },
                        Thunerut: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var num1 = player.isLinked() + event.player.isLinked();
                                var num2 = player.classList.contains('turnedover') + event.player.classList.contains('turnedover');
                                return num1 != 1 && num2 != 1;
                            },
                            content() {
                                'step 0'
                                player.chooseControl([1, 2, 3, 'cancel2'], function () {
                                    var player = _status.event.player;
                                    var sgn = _status.event.sgn;
                                    if (sgn > 0) {
                                        var flag = Math.min(player.hp - 1, 3);
                                    }
                                    else if (sgn == 0) {
                                        var flag = Math.min(player.hp - 1, 3) + (get.damageEffect(player, player, player, 'thunder') > 0) - 1;
                                    }
                                    if (flag > 0) return flag;
                                    return 'cancel2';
                                }).set('prompt', get.prompt('Thunerut')).set('prompt2', get.translation('Thunerut_info')).set('sgn', function () {
                                    var sgn = 0;
                                    game.countPlayer(current => {
                                        if (!current.hasSkillTag('rejudge')) return;
                                        sgn = get.sgnAttitude(player, current);
                                    });
                                    return sgn;
                                }());
                                'step 1'
                                if (result.control == 'cancel2') event.finish();
                                else {
                                    event.num = result.control;
                                    event.dam = 1;
                                }
                                'step 2'
                                player.judge(function (card) {
                                    if (card.suit == 'spade') return 4;
                                    return 0;
                                }).judge2 = function (result) {
                                    return result.bool ? true : false;
                                };
                                'step 3'
                                if (result.bool) {
                                    player.damage(event.dam, 'thunder', 'nosource');
                                    event.dam++;
                                }
                                if (result.card && lib.filter.cardUsable(result.card, player) && game.hasPlayer(function (current) {
                                    return player.canUse(result.card, current);
                                })) {
                                    player.chooseUseTarget(result.card, true, false);
                                }
                                event.num--;
                                if (event.num > 0) event.goto(2);
                            },
                            group: 'Thunerut_use',
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (event.targets.length < 1) return false;
                                        return event.getParent(2).name == 'Thunerut';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        var num = game.filterPlayer(current => trigger.targets.includes(current) && !current.isLinked()).length;
                                        if (num > 0) {
                                            player.chooseTarget(`霄算:是否横置一名${get.translation(trigger.card)}的目标？`, function (card, player, target) {
                                                return _status.event.targets.includes(target) && !target.isLinked();
                                            }).set('ai', function (target) {
                                                return player == target || get.attitude(player, target) < 0;
                                            }).set('targets', trigger.targets);
                                        }
                                        else event.finish();
                                        'step 1'
                                        if (result.bool) {
                                            event.targets = result.targets;
                                            if (event.isMine()) {
                                                event.finish();
                                            }
                                            for (var i = 0; i < result.targets.length; i++) {
                                                result.targets[i].link();
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        Dispatch: {
                            audio: 'ext:天海经行/audio:2',
                            zhuSkill: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                if (!player.hasSkill('lizhan') && !player.hasSkill('reshengxi')) return player.countCards('he', function (card) {
                                    return lib.filter.cardDiscardable(card, player, 'Dispatch');
                                }) > 0;
                                return true;
                            },
                            forced: true,
                            derivation: ['lizhan', 'reshengxi'],
                            content() {
                                'step 0'
                                if (!player.hasSkill('lizhan') && !player.hasSkill('reshengxi')) player.chooseCard('he', '是否发动【策遣】,弃置一张牌？', function (card) {
                                    return lib.filter.cardDiscardable(card, player, 'Dispatch');
                                }).set('ai', function (card) {
                                    return 7 - get.value(card);
                                });
                                else player.chooseBool('是否发动【策遣】,摸一张牌？').set('ai', function () {
                                    var player = _status.event.player;
                                    if (game.hasPlayer(function (current) {
                                        if (current.group != 'luofu' || get.attitude(player, current) <= 0) return false;
                                        for (var i of ['lizhan', 'reshengxi']) {
                                            if (player.hasSkill(i) && !current.hasSkill(i)) return true;
                                        }
                                    })) return true;
                                    else if (!game.hasPlayer(function (current) {
                                        if (current.group != 'luofu' || get.attitude(player, current) > 0) return false;
                                        for (var i of ['lizhan', 'reshengxi']) {
                                            if (player.hasSkill(i) && !current.hasSkill(i)) return false;
                                        }
                                    })) return true;
                                    return false;
                                });
                                'step 1'
                                if (result.bool) {
                                    if (result.cards && result.cards.length) {
                                        player.discard(result.cards);
                                        player.chooseControl(['lizhan', 'reshengxi'], function (player) {
                                            var player = _status.event.player;
                                            if (game.countPlayer(current => get.attitude(player, current) > 0 && current.hp < current.maxHp) > 2) return 'lizhan';
                                            return 'reshengxi';
                                        }).set('prompt', '选择获得其中一个技能');
                                        event.goto(2);
                                    }
                                    else {
                                        player.draw();
                                        var list = ['lizhan', 'reshengxi'];
                                        var chi = [];
                                        for (var i of list) {
                                            if (player.hasSkill(i)) chi.push(i);
                                        }
                                        if (!game.hasPlayer(function (current) {
                                            if (current != player && current.group == 'luofu') {
                                                var lis = current.getSkills(null, false, false).filter(function (i) {
                                                    return i.name == 'lizhan' || i.name == 'reshengxi';
                                                });
                                                if (chi.length > lis.length || (chi.length == lis.length && chi != lis)) return true;
                                            }
                                            return false;
                                        })) event.finish();
                                        else {
                                            player.chooseControl(chi).set('prompt', '将其中一个技能交给一名其他仙舟罗浮角色');
                                            event.goto(3);
                                        }
                                    }
                                }
                                else event.finish();
                                'step 2'
                                player.addSkill(result.control);
                                event.finish();
                                'step 3'
                                event.skill = result.control;
                                var skil = event.skill;
                                player.chooseTarget(true, `将【${get.translation(event.skill)}】交给一名其他角色`, function (event, player, target) {
                                    return target != player && target.group == 'luofu' && !target.hasSkill(skil);
                                }).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) > 0;
                                });
                                'step 4'
                                if (result.targets && result.targets.length) {
                                    player.line(result.targets[0], 'purple');
                                    player.removeSkill(event.skill);
                                    result.targets[0].addSkill(event.skill);
                                }
                            },
                        },
                        Business: {
                            global: 'Business2',
                        },
                        Business2: {
                            audio: 'ext:天海经行/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (!player.countCards('he')) return false;
                                return game.hasPlayer(current => current.hasSkill('Business'));
                            },
                            selectTarget: 1,
                            filterTarget(event, player, target) {
                                return target.hasSkill('Business');
                            },
                            selectCard: 1,
                            position: 'he',
                            filterCard: true,
                            discard: false,
                            lose: false,
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                'step 0'
                                ui.cardPile.appendChild(cards[0]);
                                game.broadcastAll(function (player) {
                                    player.$throw(cards[0], 1000, 'nobroadcast');
                                }, player);
                                game.log(player, `将${get.translation(cards[0])}置于牌堆底`);
                                target.draw(2);
                                'step 1'
                                if (target.isMaxHandcard()) {
                                    var tar = target;
                                    if (game.hasPlayer(current => tar.canUse('sha', current)))
                                        player.chooseTarget(true, `选择${get.translation(target)}使用【杀】的目标`, function (event, player, target) {
                                            return tar.canUse('sha', target);
                                        }).set('ai', function (target) {
                                            return get.effect(target, { name: 'sha' }, tar, player) > 0;
                                        });
                                }
                                else event.finish();
                                'step 2'
                                if (result.targets && result.targets.length) {
                                    event.tar = result.targets[0];
                                    target.chooseCard([2, Infinity], true, `将至少两张牌当【杀】对${get.translation(event.tar)}使用`).set('ai', function (card) {
                                        if (ui.selected.cards.length >= 2) return false;
                                        return 8 - get.value(card);
                                    });
                                }
                                else event.finish();
                                'step 3'
                                if (result.cards.length) {
                                    target.useCard({ name: 'sha' }, result.cards, 'Business', event.tar, false);
                                }
                            },
                            ai: {
                                order: 2,
                                threaten: 1.5,
                                result: {
                                    player(player, target) {
                                        var target = game.findPlayer(function (current) {
                                            return current.hasSkill('Business');
                                        });
                                        if (target) {
                                            return get.attitude(player, target);
                                        }
                                    },
                                },
                            },
                            prompt: '贸逆:将一张牌置于牌堆底并令桑博摸两张牌',
                        },
                        Caprices: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.targets.length != 1 || event.card.name != 'sha') return false;
                                var extars = [event.targets[0].previous, event.targets[0].next];
                                for (var i of extars) {
                                    if (i && lib.filter.targetEnabled(event.card, player, i)) return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0'
                                event.extars = [];
                                for (var i of [trigger.targets[0].previous, trigger.targets[0].next]) {
                                    if (i && lib.filter.targetEnabled(trigger.card, player, i) && !event.extars.includes(i)) {
                                        event.extars.push(i);
                                    }//QQQ
                                }
                                var extars = event.extars;
                                player.chooseBool(`是否发动【暮翻】,令${get.translation(event.extars)}成为${get.translation(trigger.card)}的额外目标？`).set('ai', function (player) {
                                    var att = [0, 0];
                                    var player = _status.event.player;
                                    for (var i of extars) {
                                        if (get.effect(i, { name: 'sha' }, player, player) > 0) att[0] += 1;
                                        else att[1] += 1;
                                    }
                                    var vlu = 0;
                                    for (var i of trigger.cards) vlu += get.value(i);
                                    if (vlu > 16) return att[0] > att[1];
                                    return att[0] < att[1];
                                });
                                'step 1'
                                if (result.bool) {
                                    if (trigger.cards.length) player.storage.Caprices = trigger.cards;
                                    for (var i of event.extars) {
                                        trigger.parent.targets.push(i);
                                        trigger.parent.triggeredTargets2.push(i);
                                        game.log(i, '成为了额外目标');
                                    }
                                }
                            },
                            group: 'Caprices_delay',
                            subSkill: {
                                delay: {
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    filter(event, player) {
                                        return player.storage.Caprices && event.cards == player.storage.Caprices && event.cards.someInD();
                                    },
                                    silent: true,
                                    content() {
                                        trigger.target.gain(trigger.cards, 'gain2');
                                        player.storage.Caprices = [];
                                    },
                                },
                            },
                        },
                        Meteor: {
                            audio: 'ext:天海经行/audio:2',
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'huogong' && card.storage && card.storage.olhuiyun) range[1] += 2;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            viewAs: {
                                name: 'huogong',
                                storage: {
                                    olhuiyun: true,
                                },
                            },
                            derivation: 'olhuiyun',
                            filter(event, player) {
                                return player.countCards('h', function (card) {
                                    return get.color(card) == 'red' && ['basic', 'trick'].includes(get.type2(card));
                                });
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'red' && ['basic', 'trick'].includes(get.type2(card));
                            },
                            position: 'hes',
                            onuse(links, player) {
                                player.addTempSkill('olhuiyun_after');
                                player.addTempSkill('olhuiyun_record');
                                player.addTempSkill('Meteor_after');
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (target && get.attitude(player, target) > 0 && card && card.name == 'huogong' && card.storage && card.storage.olhuiyun && !player.hasSkill('olhuiyun_3')) {
                                            return [0, 0.5, 0, 0.5];
                                        }
                                    },
                                },
                                basic: {
                                    order: 4,
                                    value: [3, 1],
                                    useful: 1,
                                },
                                wuxie(target, card, player, viewer, state) {
                                    let att = get.attitude(viewer, target), eff = get.effect(target, card, player, target);
                                    if (status * get.attitude(viewer, player) > 0 && !player.isMad() || status * eff * att >= 0) return 0;
                                    if (get.attitude(viewer, player) >= 0 || _status.event.getRand('huogong_wuxie') * 4 > player.countCards('h')) return 0;
                                },
                                result: {
                                    player(player) {
                                        var nh = player.countCards('h');
                                        if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                            if (typeof _status.event.filterCard == 'function' &&
                                                _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -10;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -10;
                                                if (viewAs && viewAs.name == 'huogong') return -10;
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                                        if (player.countCards('h') <= 1) return 0;
                                        if (target.isAllCardsKnown(player)) {
                                            if (!target.countCards('h', card => {
                                                return player.countCards('h', card2 => {
                                                    return card2.suit == card.suit;
                                                });
                                            })) {
                                                return 0;
                                            }
                                        }
                                        if (target == player) {
                                            if (typeof _status.event.filterCard == 'function' &&
                                                _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -1.15;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -1.15;
                                                if (viewAs && viewAs.name == 'huogong') return -1.15;
                                            }
                                            return 0;
                                        }
                                        return -1.15;
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                    norepeat: 1,
                                },
                            },
                            subSkill: {
                                after: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    _priority: -1,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        for (var i of event.targets) {
                                            if (lib.filter.targetEnabled2(event.cards[0], player, i) && !i.hasHistory('useCard', function (evt) {
                                                return evt.getParent(2).name == 'olhuiyun';
                                            })) var flag = true;
                                        }
                                        return event.card && event.card.name == 'huogong' && event.card.storage && event.card.storage.olhuiyun && flag;
                                    },
                                    content() {
                                        'step 0'
                                        event.tar = [];
                                        for (var i of trigger.targets) {
                                            if (lib.filter.targetEnabled2(trigger.cards[0], player, i) && !i.hasHistory('useCard', function (evt) {
                                                return evt.getParent(2).name == 'olhuiyun_after';
                                            })) event.tar.push(i);
                                        }
                                        var tar = event.tar;
                                        var car = trigger.cards[0];
                                        if (event.tar.length) player.chooseBool(`是否视为对${get.translation(event.tar)}使用` + get.translation(trigger.cards[0])).set('ai', function (player) {
                                            var num = 0; var player = _status.event.player;
                                            for (var i = 0; i < tar.length; i++) {
                                                if (get.effect(tar[i], car, player, player) > 0) num += 1;
                                            }
                                            return num > 1;
                                        });
                                        else event.finish();
                                        'step 1'
                                        if (result.bool) {
                                            var name = trigger.cards[0].name;
                                            var nature = trigger.cards[0].nature;
                                            player.useCard({ name: name, nature: nature }, event.tar);
                                        }
                                        player.removeSkill('Meteor_after');
                                    },
                                },
                            },
                        },
                        Milkyway: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = 0;
                            },
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.getl && !event.getl(player)) return false;
                                var num = 3 - player.storage.Milkyway;
                                if (!num) return false;
                                return player.countCards('h') < num;
                            },
                            content() {
                                var num = 3 - player.storage.Milkyway;
                                player.draw(num - player.countCards('h'));
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    var num = 3 - player.storage.Milkyway;
                                    if (tag == 'noh' && num < player.countCards('h')) {
                                        return false;
                                    }
                                },
                            },
                            mark: true,
                            marktext: '璀',
                            intro: {
                                name: '璀海',
                                content(storage) {
                                    if (!storage) return '未发动';
                                    return `已发动过${storage}次`;
                                },
                            },
                            group: 'Milkyway_idpc',
                            subSkill: {
                                idpc: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    forced: true,
                                    usable: 1,
                                    filter(event, player) {
                                        return (event.player == player) + (_status.currentPhase == player) == 1;
                                    },
                                    content() {
                                        player.chooseToGuanxing(player.storage.Milkyway);
                                        if (player.storage.Milkyway < 3) player.storage.Milkyway += 1;
                                    },
                                },
                            },
                        },
                        Axsign: {
                            audio: 'ext:天海经行/audio:2',
                            enable: 'chooseToUse',
                            sunbenSkill: true,
                            filter(event, player) {
                                if (player.hasSkill('Axsign_dis')) return false;
                                for (var i of lib.inpile) {
                                    var type = get.type(i);
                                    if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
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
                                        }
                                        else if (get.type(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('流载', [list, 'vcard']);
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
                                        selectCard: -1,
                                        filterCard: () => false,
                                        popname: true,
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        //你可以将一张【影】置为牌堆顶第一至四张牌,视为使用任意即时牌
                                        precontent() {
                                            'step 0'
                                            player.addSkill('Axsign_dis');
                                            player.chooseControl([1, 2, 3, 4], function () {
                                                var player = _status.event.player;
                                                var curent = _status.currentPhase;
                                                if (curent && get.attitude(player, curent.next) > 0) {
                                                    return 4;
                                                }//QQQ
                                                return Math.floor(Math.random() * 2) + 1;
                                            }).set('prompt', '流载:将一张【影】置为牌堆顶第一至四张牌');
                                            'step 1'
                                            var card = lib.card.ying.getYing(1)[0];
                                            if (result.control - 1 == 0) var pilx = [card];
                                            else {
                                                var pilx = get.cards(result.control - 1);
                                                pilx.unshift(card);
                                            }
                                            game.cardsGotoPile(pilx, 'insert');
                                            player.$throw(card, 1000, 'nobroadcast');
                                            game.log(player, `将一张【影】置于牌堆顶第${get.translation(result.control)}位`);
                                        },
                                    }
                                },
                                prompt(links, player) {
                                    return '流载:视为使用一张【' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '】';
                                },
                            },
                            hiddenCard(player, name) {
                                if (!lib.inpile.includes(name)) return false;
                                var type = get.type(name);
                                return (type == 'basic' || type == 'trick') && !player.hasSkill('Axsign_dis');
                            },
                            group: 'Axsign_change',
                            subSkill: {
                                dis: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '流',
                                    intro: {
                                        name: '流载',
                                        content: '【流载】失效直至有【影】进入弃牌堆的回合结束',
                                    },
                                },
                                change: {
                                    trigger: {
                                        global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
                                    },
                                    filter(event, player) {
                                        return event.getd().some(i => i.name == 'ying');
                                    },
                                    silent: true,
                                    charlotte: true,
                                    content() {
                                        player.addTempSkill('Axsign_re');
                                    },
                                },
                                re: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    silent: true,
                                    content() {
                                        player.removeSkill('Axsign_dis');
                                        player.popup('流载');
                                        game.log(player, '回复了技能', '#g【流载】');
                                    },
                                },
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.hasSkill('Axsign_dis')) return false;
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
                        Dfault: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                if (!get.tag(event.card, 'damage')) return false;
                                return event.player && event.player.isAlive();
                            },
                            content() {
                                'step 0'
                                event.tar = trigger.player;
                                event.tar.chooseToDiscard(`弃置一张基本牌并收回【${get.translation(trigger.card)}】`, function (card) {
                                    return get.type(card) == 'basic';
                                }).set('prompt2', `或点<取消>令${get.translation(trigger.card)}无效`).set('ai', function (card) {
                                    if (get.attitude(event.tar, player) > 0 && get.effect(player, trigger.card, event.tar, event.tar) < 0) return false;
                                    return 7 - get.value(card);
                                });
                                'step 1'
                                if (result.cards && result.cards.length) {
                                    if (trigger.cards.length && trigger.cards.someInD()) event.tar.gain(trigger.cards, 'gain2');
                                }
                                else {
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                    if (trigger.cards.length && trigger.cards.someInD()) player.gain(trigger.cards, 'gain2');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && !(target.getStat('skill').Dfault || 0)) {
                                            if (player.countCards('he', function (card) {
                                                return get.type(card) == 'basic';
                                            }) > 0) return [1, 0.5];
                                            else return [0, 0, 0, 1];
                                        }
                                    },
                                },
                            }
                        },
                        Tailight: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('Tailight')) return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (card.hasGaintag('Tailight') && name == 'phaseDiscard') return false;
                                },
                            },
                            trigger: {
                                player: ['loseAfter', 'gainAfter'],
                                global: ['gameStart', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            silent: true,
                            _priority: 1000,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                player.removeGaintag('Tailight');
                                var cards = player.getCards('h');
                                var num = cards.length;
                                if (cards.length == 1) player.addGaintag(cards, 'Tailight');
                                else {
                                    cards.sort(function (a, b) {
                                        return a.number - b.number;
                                    });
                                    if (cards[0].number < cards[1].number) player.addGaintag([cards[0]], 'Tailight');
                                    //if(cards[num-1].number>cards[num-2].number) player.addGaintag([cards[num-1]],'Tailight');
                                }
                            },
                            group: 'Tailight_use',
                            subSkill: {
                                use: {
                                    audio: 'ext:天海经行/audio:2',
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.countCards('he')) return false;
                                        if (!player.hasHistory('lose', function (evt) {
                                            if (evt.parent != event) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('Tailight')) return true;
                                            }
                                            return false;
                                        })) return false;
                                        return player.hasCard(function (card) {
                                            return card.hasGaintag('Tailight');
                                        }, 'h');
                                    },
                                    content() {
                                        'step 0'
                                        player.chooseCard('h', function (card) {
                                            if (!['basic', 'trick'].includes(get.type(card))) return false;
                                            return card.hasGaintag('Tailight');
                                        }).set('prompt', '遣尾:用一张点数为最小的牌发动『照骨镜』,否则弃置一张牌').set('ai', function (card) {
                                            return true;
                                        });
                                        'step 1'
                                        if (result.bool) {
                                            player.showCards(result.cards, get.translation(player) + '发动了【照骨镜】');
                                            var card = {
                                                name: result.cards[0].name,
                                                nature: get.nature(result.cards[0], player),
                                            }
                                            player.chooseUseTarget(card, true, false);
                                        }
                                        else {
                                            player.chooseToDiscard('he', true);
                                        }
                                    },
                                },
                            },
                        },
                        Pedeter: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('Pedeter_block')) return false;
                                return get.color(event.card) != 'red';
                            },
                            content() {
                                'step 0'
                                var targets = trigger.targets;
                                player.chooseTarget(function (event, player, target) {
                                    return !targets.includes(target);
                                }).set('prompt', get.prompt('Pedeter')).set('prompt2', '吓跑一名角色!本回合其手牌均视为【闪】').set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) > 0 || !target.countCards('h')) return false;
                                    if (target.countCards('h') == 1) return get.effect(target, { name: 'sha' }, player, player);
                                    return target.countCards('h') > 2;
                                });
                                'step 1'
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.addTempSkill('Pedeter_block');
                                    target.addTempSkill('Pedeter_afraid');
                                }
                            },
                            subSkill: {
                                block: {
                                    charlotte: true,
                                },
                                afraid: {
                                    mod: {
                                        cardname(card, player, name) {
                                            return 'shan';
                                        },
                                    },
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countCards('h')) return false;
                                        if (event.parent.name != 'useCard') return false;
                                        var evt = event.getl(player);
                                        return evt && evt.player == player && evt.hs && evt.hs.length;
                                    },
                                    content() {
                                        player.loseHp();
                                    },
                                    mark: true,
                                    marktext: '煞',
                                    intro: {
                                        name: '煞压',
                                        content: '本回合手牌均视为【闪】,且使用最后一张后失去1点体力'
                                    },
                                    ai: {
                                        useShan: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (card.name == 'sha' && !player.hasSkillTag('directHit_ai', true, {
                                                    target: target,
                                                    card: card
                                                }, true)) {
                                                    if (target.countCards('h') > 1) return 1;
                                                    return [1, 0, 1, -2];
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        Tourstar: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.draw(4);
                                'step 1'
                                if (player.countCards('h') > 0) {
                                    player.addShownCards(player.getCards('h'), 'visible_strl');
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        return 4;
                                    },
                                },
                            },
                            group: 'Tourstar_use',
                            subSkill: {
                                use: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                        if (event.cards.filterInD().length <= 0) return false;
                                        return player.countCards('h', function (card) {
                                            return get.is.shownCard(card) && card.suit == event.card.suit;
                                        }) > 0;
                                    },
                                    content() {
                                        var cards = player.getCards('h', function (card) {
                                            return get.is.shownCard(card) && card.suit == trigger.card.suit;
                                        });
                                        player.loseToDiscardpile(cards);
                                        player.gain(trigger.cards, 'gain2');
                                    },
                                },
                            },
                        },
                        Shooting: {
                            audio: 'ext:天海经行/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            selectTarget: 1,
                            filterTarget: true,
                            content() {
                                'step 0'
                                target.judge('huoshan', lib.card.huoshan.judge).judge2 = lib.card.huoshan.judge2;
                                'step 1'
                                event.card = result.card;
                                var next = game.createEvent('huoshan');
                                next.setContent(lib.card.huoshan.effect);
                                next.player = target;
                                next.card = { name: 'huoshan', expired: true };
                                next.cards = [];
                                next._result = result;
                                'step 2'
                                ui.clear();
                                'step 3'
                                if (get.position(card, true) == 'd' && target.hasUseTarget(card)) {
                                    target.chooseUseTarget(card, true);
                                }
                                'step 4'
                                var target1 = game.filterPlayer(current => current.hasHistory('damage', evt => evt.getParent(2).name == 'Shooting'));
                                if (target1.length) {
                                    if (!target1.includes(player)) target1.unshift(player);
                                    game.asyncDraw(target1);
                                }
                                'step 5'
                                var target2 = game.filterPlayer(current => current.hasHistory('damage', evt => evt.getParent(4).name == 'Shooting'));
                                if (target2.length) {
                                    if (!target2.includes(player)) target2.unshift(player);
                                    for (var i of target2) i.chooseToDiscard('he', true);
                                }
                            },
                            ai: {
                                damage: true,
                                fireAttack: true,
                                threaten: 1.5,
                                order: 7,
                                result: {
                                    target(player, target) {
                                        var eff = get.damageEffect(target, player, target, 'fire');
                                        if (target.isLinked()) {
                                            return eff / 10;
                                        }
                                        else {
                                            return eff;
                                        }
                                    },
                                },
                            },
                        },
                        Analyse: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (player.hasSkill('Analyse_block') || !player.countCards('h')) return false;
                                return get.tag(event.card, 'damage') && get.distance(player, event.target) <= 1 && event.target.isIn();
                            },
                            logTarget: 'target',
                            check(event, player) {
                                var nshown = player.getCards('h', function (card) {
                                    return !get.is.shownCard(card);
                                });
                                for (var i of nshown) {
                                    if (i.suit == event.card.suit) return get.value(event.cards) + 0.5 * get.attitude(player, event.player);
                                }
                                return false;
                            },
                            content() {
                                'step 0'
                                var shown = player.getCards('h', function (card) {
                                    return get.is.shownCard(card);
                                });
                                var nshown = player.getCards('h', function (card) {
                                    return !get.is.shownCard(card);
                                });
                                if (shown.length) player.hideShownCards(shown);
                                if (nshown.length) player.addShownCards(nshown, 'visible_strl');
                                event.nshown = nshown;
                                'step 1'
                                for (var i of event.nshown) {
                                    if (i.suit == trigger.card.suit) {
                                        if (trigger.cards[0] && get.position(trigger.cards[0], true) == 'o') {
                                            player.gain(trigger.cards, 'gain2');
                                        }//QQQ
                                        trigger.target.draw();
                                        player.addTempSkill('Analyse_block');
                                        break;
                                    }
                                }
                            },
                            subSkill: {
                                block: {
                                    charlotte: true,
                                },
                            },
                        },
                        Pursuit: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                source: 'damageAfter',
                            },
                            filter(event, player) {
                                if (player.hasSkill('Pursuit_block') || !event.player.isIn() || !event.player.countCards('he')) return false;
                                return player.getHistory('useCard', function (evt) {
                                    return evt.card.suit && evt.card.suit != 'none';
                                });
                            },
                            forced: true,
                            content() {
                                'step 0'
                                var list = [];
                                player.getHistory('useCard', function (evt) {
                                    if (lib.suit.includes(evt.card.suit) && !list.includes(evt.card.suit)) list.push(evt.card.suit);
                                });
                                event.num = list.length;
                                var str = event.num != 2 ? get.cnNumber(event.num) : '两';
                                if (event.num > 0)
                                    player.chooseBool(get.prompt('Pursuit')).set('prompt2', `令${get.translation(trigger.player)}弃置${str}张牌`).set('ai', function () {
                                        if (get.attitude(player, trigger.player) > 0) return false;
                                        if (!player.getCards('h', function (card) {
                                            return get.tag(card, 'damage') && player.canUse(card, trigger.player);
                                        })) return true;
                                        return event.num > 1;
                                    });
                                else event.finish();
                                'step 1'
                                if (result.bool) {
                                    player.addTempSkill('Pursuit_block');
                                    trigger.player.chooseToDiscard(event.num, 'he', true);
                                }
                            },
                            subSkill: {
                                block: {
                                    charlotte: true,
                                },
                            },
                        },
                        Bloodise: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.type(event.card) != 'basic') return false;
                                if (player.getHistory('useCard', evt => get.type(evt.card) == 'basic').length > 1) return false;
                                return player.canUse({ name: 'oldliecui' }, player);
                            },
                            content() {
                                var cardx = game.createCard({ name: 'oldliecui', suit: '', number: '' });
                                player.chooseUseTarget(cardx, get.prompt('Bloodise')).set('prompt2', '使用一张🃏点数的【烈淬刀】').set('ai', function (target) {
                                    return true;
                                });
                            },
                            group: 'Bloodise_lose',
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    filter(event, player) {
                                        if (event.type == 'discard') return false;
                                        for (var i of event.cards) {
                                            return i.name == 'oldliecui';
                                        }
                                    },
                                    forced: true,
                                    content() {
                                        player.loseHp();
                                        for (var i = 0; i < 2; i++) {
                                            player.searchCard(function (card, player) {
                                                return card.name == 'sha';
                                            });
                                        }
                                    },
                                },
                            },
                        },
                        oldliecui: {
                            audio: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            equipSkill: true,
                            filter(event, player) {
                                if (event.parent.name != 'sha') return false;
                                return player.countCards('he', function (card) {
                                    if (card.name != 'sha' && get.subtype(card) != 'equip1') return false;
                                    return card != player.getEquip('oldliecui');
                                }) > 0;
                            },
                            content() {
                                'step 0'
                                var next = player.chooseToDiscard('he', function (card, player) {
                                    if (card.name != 'sha' && get.subtype(card) != 'equip1') return false;
                                    return card != player.getEquip('oldliecui');
                                }, get.prompt(event.name, trigger.player), '弃置一张【杀】或武器牌,令即将对其造成的伤害+1');
                                next.set('target', trigger.player);
                                next.ai = function (card) {
                                    if (_status.event.goon) return 30 / (1 + _status.event.target.hp) - get.value(card);
                                    return -1;
                                };
                                next.set('goon', get.attitude(player, trigger.player) < 0 && !trigger.player.hasSkillTag('filterDamage', null, {
                                    player: player,
                                    card: trigger.card,
                                }) && get.damageEffect(trigger.player, player, player, get.natureList(trigger)) > 0);
                                'step 1'
                                if (result.bool) trigger.num++;
                            },
                            ai: {
                                expose: 0.25,
                            },
                            _priority: -25,
                        },
                        Deathmatch: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i = 2; i <= 5; i++) {
                                    if (player.hasEnabledSlot(i)) return true;
                                }
                            },
                            content() {
                                'step 0'
                                var list = [];
                                for (var i = 2; i <= 5; i++) {
                                    if (player.hasEnabledSlot(i)) list.push('equip' + i);
                                }
                                if (list.length == 1) event._result = { control: list[0] };
                                else player.chooseControl(list).set('prompt', '选择废除一个非武器栏');
                                'step 1'
                                player.disableEquip(result.control);
                                player.expandEquip(1);
                                player.recover(1 - player.hp);
                            },
                        },
                        Miss: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('Miss_block');
                            },
                            content() {
                                'step 0'
                                var cardx = player.getCards('h', function (card) {
                                    return !card.hasGaintag('Miss');
                                });
                                if (cardx && cardx.length) {
                                    player.showCards(cardx);
                                    if (cardx.some(card => card.suit != 'heart')) player.chooseCard('h', true, '重铸其中一张非♥️️牌', function (card) {
                                        return cardx.includes(card) && card.suit != 'heart';
                                    });
                                }
                                'step 1'
                                if (result.bool && result.cards) {
                                    player.loseToDiscardpile(result.cards);
                                    player.draw().gaintag = ['Miss'];
                                    event.finish();
                                }
                                else if (player.canMoveCard()) {
                                    player.moveCard().set('prompt', '是否移动场上的一张牌,并令【棠棣】于本轮失效？');
                                }
                                else event.finish();
                                'step 2'
                                if (result.bool) {
                                    player.addTempSkill('Miss_block', 'roundStart');
                                }
                            },
                            subSkill: {
                                block: {
                                    chalotte: true,
                                    mark: true,
                                    marktext: '思',
                                    intro: {
                                        name: '棠棣',
                                        content: '本轮【棠棣】失效',
                                    },
                                },
                            },
                        },
                        Quill: {
                            audio: 'ext:天海经行/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (!player.countCards('h')) return false;
                                return !player.isLinked();
                            },
                            content() {
                                player.link();
                                player.useSkill('strl_bifa', false);
                            },
                        },
                        strl_bifa: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            audio: 2,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0'
                                player.chooseCardTarget({
                                    filterCard: true,
                                    filterTarget(card, player, target) {
                                        return player != target && !target.getExpansions('strl_bifa2').length;
                                    },
                                    ai1(card) {
                                        return 7 - get.value(card);
                                    },
                                    ai2(target) {
                                        var num = target.hasSkillTag('maixie') ? 2 : 0;
                                        return -get.attitude(_status.event.player, target) - num;
                                    },
                                    prompt: get.prompt2('bifa'),
                                });
                                'step 1'
                                if (result.bool) {
                                    event.forceDie = true;
                                    var target = result.targets[0];
                                    event.target = target;
                                    event.card = result.cards[0];
                                    target.storage.strl_bifa2 = [result.cards[0], player];
                                    if (!_status.connectMode && player.isUnderControl(true)) player.$giveAuto(result.cards[0], target, false);
                                    else player.$give(1, target, false);
                                    target.addToExpansion(result.cards[0]).gaintag.add('strl_bifa2');
                                }
                                else event.finish();
                                'step 2'
                                if (target.getExpansions('strl_bifa2').includes(card)) {
                                    target.addSkill('strl_bifa2');
                                }
                                else delete target.storage.strl_bifa2;
                            },
                            ai: {
                                threaten: 1.7,
                                expose: 0.3,
                            },
                        },
                        strl_bifa2: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.strl_bifa2 && player.getExpansions('strl_bifa2').includes(player.storage.strl_bifa2[0]);
                            },
                            content() {
                                'step 0'
                                if (player.storage.strl_bifa2[1].isIn() && player.countCards('h')) {
                                    player.chooseCard(get.translation(player.storage.strl_bifa2[1]) + '的笔伐牌为:', function (card) {
                                        return get.type(card, 'trick') == _status.event.type;
                                    }).set('ai', function (card) {
                                        return 8 - get.value(card);
                                    }).set('type', get.type(player.storage.strl_bifa2[0], 'trick')).set('promptx', [[player.storage.strl_bifa2[0]], '请交给其一张与此牌类别相同的手牌,否则选择执行选项三']);
                                }
                                else {
                                    event.directfalse = true;
                                }
                                'step 1'
                                if (result.bool && !event.directfalse) {
                                    player.give(result.cards, player.storage.strl_bifa2[1]);
                                    player.gain(player.storage.strl_bifa2[0], 'draw');
                                    event.goto(3);
                                }
                                else {
                                    if (lib.filter.targetEnabled({ name: 'sha', nature: 'ice' }, player, player.storage.strl_bifa2[1]))
                                        player.chooseBool(`是否将${get.translation(player.storage.strl_bifa2[0])}当冰【杀】使用,本回合只能使用${get.translation(player.storage.strl_bifa2[0].suit)}的牌？`);
                                }
                                'step 2'
                                if (result.bool) {
                                    player.useCard({ name: 'sha', nature: 'ice' }, player.storage.strl_bifa2[0], 'strl_bifa2', player.storage.strl_bifa2[1], false);
                                    player.addTempSkill('strl_bifa2_block');
                                }
                                else player.loseHp();
                                'step 3'
                                player.removeSkill('strl_bifa2');
                            },
                            marktext: '檄',
                            intro: {
                                markcount: () => 1,
                                name: '笔伐',
                                content: '已成为〖笔伐〗的目标',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                                delete player.storage[skill];
                            },
                            subSkill: {
                                block: {
                                    charlotte: true,
                                    mod: {
                                        'cardEnabled2'(card, player) {
                                            if (card.suit != player.storage.strl_bifa2_block) {
                                                return false;
                                            }
                                        },
                                    },
                                    init(player, skill) {
                                        player.storage[skill] = player.storage.strl_bifa2[0].suit;
                                    },
                                    onremove(player, skill) {
                                        player.storage[skill] = 0;
                                    },
                                    marktext(storage) {
                                        return get.translation(storage);
                                    },
                                },
                            },
                        },
                        Live: {
                            audio: 'ext:天海经行/audio:2',
                            mod: {
                                maxHandcardBase(player, num) {
                                    return 5 - player.countCards('e');
                                },
                            },
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            filter(event, player) {
                                var tar = game.filterPlayer(current => current.isLinked());
                                if (!tar || tar.length != 1) return false;
                                var cards = [];
                                player.getHistory('lose', function (evt) {
                                    if (evt && evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs) cards.addArray(evt.hs);
                                });
                                return cards.length;
                            },
                            check(event, player) {
                                var tar = game.filterPlayer(current => current.isLinked())[0];
                                return get.attitude(player, tar);
                            },
                            logTarget(event, player) {
                                return game.filterPlayer(current => current.isLinked())[0];
                            },
                            content() {
                                var tar = game.filterPlayer(current => current.isLinked())[0];
                                tar.link(false);
                                tar.draw(2);
                            },
                        },
                        Pierc: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return !player.isDisabledJudge() && player.countCards('he') && !player.countCards('j');
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.chooseCard('he', get.prompt('Pierc')).set('ai', function (card) {
                                    return (get.color(card) == 'red') ? (4 - get.value(card)) : (7 - get.value(card));
                                }).set('prompt2', '对自己发动【擅专】,再获得场上一张装备牌');
                                'step 1'
                                if (result.bool) {
                                    var card = result.cards[0];
                                    player.$throw(card);
                                    if (get.type(card, false) == 'delay') player.addJudge(card);
                                    else player.addJudge({ name: get.color(card, false) == 'red' ? 'lebu' : 'bingliang' }, result.cards);
                                    if (game.hasPlayer(current => current.countCards('e') > 0))
                                        player.chooseTarget(true, '拘寒:获得场上一张装备牌', (card, player, target) => {
                                            return target.countGainableCards(player, 'e');
                                        }).set('ai', target => {
                                            if (target == _status.event.player) return 10;
                                            if (get.attitude(_status.event.player, target) < 0) {
                                                if (target.hasCard(card => {
                                                    return get.value(card, player) >= 6;
                                                })) return 12;
                                                return 8;
                                            }
                                            return 0;
                                        });
                                    else event.finish();
                                }
                                else event.finish();
                                'step 2'
                                if (result.targets && result.targets[0]) {//QQQ
                                    player.addTempSkill('Pierc_sha');
                                    player.gainPlayerCard('e', result.targets[0], true);
                                }
                                else event.finish();
                                'step 3'
                                player.addGaintag(result.links, 'Pierc');
                            },
                            group: 'Pierc_tiesuo',
                            subSkill: {
                                sha: {
                                    mod: {
                                        cardname(card) {
                                            if (get.itemtype(card) == 'card' && card.hasGaintag('Pierc')) return 'sha';
                                        },
                                        cardnature(card) {
                                            if (get.itemtype(card) == 'card' && card.hasGaintag('Pierc')) return 'thunder';
                                        },
                                    },
                                    onremove(player) {
                                        player.removeGaintag('Pierc');
                                    },
                                },
                                tiesuo: {
                                    trigger: {
                                        player: 'judgeEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.position(event.result.card, true) == 'o';
                                    },
                                    content() {
                                        'step 0'
                                        player.chooseUseTarget({ name: 'tiesuo' }, [trigger.result.card], false, `将${get.translation(trigger.result.card)}当【铁索连环】使用,或点<取消>重铸之`);
                                        'step 1'
                                        if (!result.bool) {
                                            player.loseToDiscardpile(trigger.result.card);
                                            player.draw();
                                        }
                                    },
                                }
                            },
                        },
                        Lightening: {
                        },
                        Staty: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                if (!_status.currentPhase) return false;
                                var cards = [];
                                game.getGlobalHistory('cardMove', evt => {
                                    if (evt.name == 'lose' && evt.position == ui.discardPile || evt.name == 'cardsDiscard') {
                                        cards.addArray(evt.cards.filterInD('d'));
                                    }
                                });
                                var suits = [];
                                for (var i of cards) {
                                    if (!suits.includes(i.suit)) suits.push(i.suit);
                                }
                                if (suits.length < 4) return true;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return event.player.countCards('h') <= 2;
                                return event.player.countCards('h') > 2;
                            },
                            content() {
                                'step 0'
                                trigger.player.draw();
                                'step 1'
                                var num = Math.floor(trigger.player.countCards('h') / 2);
                                if (num > 0) trigger.player.chooseToDiscard(num, 'h', true, `请弃置${num}张牌`);
                                'step 2'
                                if (result.cards && result.cards.some(card => card.name == 'sha')) event.finish();
                                else {
                                    var cards = [];
                                    game.getGlobalHistory('cardMove', evt => {
                                        if (evt.name == 'lose' && evt.position == ui.discardPile || evt.name == 'cardsDiscard') {
                                            cards.addArray(evt.cards.filterInD('d'));
                                        }
                                    });
                                    var suits = [];
                                    for (var i of cards) {
                                        if (!suits.includes(i.suit)) suits.push(i.suit);
                                    }
                                    if (suits.length < 4) {
                                        event.goto(0);
                                    }
                                }
                            },
                            mark: true,
                            intro: {
                                name: '雕鉴',
                                content() {
                                    var cards = [];
                                    game.getGlobalHistory('cardMove', evt => {
                                        if (evt.name == 'lose' && evt.position == ui.discardPile || evt.name == 'cardsDiscard') {
                                            cards.addArray(evt.cards.filterInD('d'));
                                        }
                                    });
                                    var suits = [];
                                    for (var i of cards) {
                                        if (!suits.includes(i.suit)) suits.push(i.suit);
                                    }
                                    return '本回合' + ((suits.length) ? (`有${get.translation(suits)}花色的牌`) : ('没有牌')) + '进入弃牌堆';
                                },
                            },
                        },
                        Edifall: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                global: ['loseAfter', 'loseAsyncAfter'],
                            },
                            filter(event, player) {
                                if (player.hasSkill('Edifall_block')) return false;
                                if (event.type != 'discard' || _status.currentPhase != player || event.getlx === false) return false;
                                var cards = event.cards.slice(0);
                                if (Array.isArray(cards)) for (var i of cards) {
                                    if (get.cardNameLength(i) == 4 && i.original != 'j') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0'
                                var str = '你可以视为使用一张' + (game.shuffleNumber == 0 ? '' : `额外亮出${game.shuffleNumber * 4}张牌的`) + '【五谷丰登】';
                                player.chooseUseTarget({ name: 'wugu' }, false).set('prompt', get.prompt('Edifall')).set('prompt2', str);
                                'step 1'
                                if (result.bool) {
                                    player.addTempSkill('Edifall_block');
                                }
                            },
                            group: 'Edifall_wugu',
                            subSkill: {
                                block: {
                                    chalotte: true,
                                },
                                wugu: {
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        if (game.shuffleNumber == 0 || event.card.name != 'wugu') return false;
                                        return event.getParent(2).name == 'Edifall';
                                    },
                                    content() {
                                        trigger.card.storage.extraCardsNum = game.shuffleNumber * 4;
                                    },
                                },
                            },
                        },
                        Poemance: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter', 'equipAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('he')) return false;
                                if (event.getParent(2).name == 'Poemance') return false;
                                var cards = event.getd();
                                for (var i of cards) {
                                    if (i.name == 'sha' && !game.hasPlayer(current => current.getHistory('sourceDamage', function (event) {
                                        return event.cards && event.cards.includes(i);
                                    }).length)) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0'
                                player.chooseCardTarget({
                                    position: 'he',
                                    selectCard: 1,
                                    filterCard: true,
                                    filterTarget(card, player, target) {
                                        if (!player.canUse('tao', player)) return target != player;
                                        return true;
                                    },
                                    ai1(card) {
                                        return 8 - get.value(card);
                                    },
                                    ai2(target) {
                                        if (!game.hasPlayer(current => get.attitude(player, current) > 0) || get.effect(player, { name: 'tao' }, player, player) > 0) return target == player;
                                        return get.attitude(player, target) > 0;
                                    },
                                    prompt: get.prompt('Poemance')
                                }).set('prompt2', '将一张牌当【桃】使用或交出(选择自己即使用,否则交给目标)');
                                'step 1'
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    if (player == event.target) player.useCard({ name: 'tao' }, result.cards, event.target, false);
                                    else player.give(result.cards, event.target);
                                }
                                else event.finish();
                                'step 2'
                                if (!game.hasPlayer(current => current.hp > player.hp)) event.target.draw(2);
                            },
                        },
                        Romance: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            usable: 1,
                            filter(event, player) {
                                if (get.type(event.card) == 'equip') return false;
                                if (!event.target || event.targets.length != 1) return false;
                                return event.targets[0].isMinHandcard(true);
                            },
                            logTarget: 'target',
                            check(event, player) {
                                return get.attitude(player, event.targets[0]) > 0 && get.effect(player, event.card, event.targets[0], player) < 3;
                            },
                            //每回合限一次,你使用非装备牌指定手牌唯一最少的角色后,可以令其发动至多判定你体力值次的『洛神』;若其判定次数未达上限,使用牌对其无效
                            async content(event, trigger, player) {//QQQ
                                var num = player.hp;
                                while (num-- > 0) {
                                    const result = await trigger.target.judge('『洛神』', (card) => get.color(card) != 'red' ? 2 : 0).forResult();
                                    if (get.color(result.card) == 'red') break;
                                    trigger.target.gain(result.card, 'gain2');
                                }
                                if (num > 0) {
                                    player.popup('使用牌无效');
                                    trigger.parent.excluded.add(trigger.target);
                                }
                            },
                        },
                        Sword: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [0, 1];
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                var lis = player.storage.Sould || [0, 0, 0];
                                if (['sha', 'shan'].includes(name) && lib.inpile.includes(name) &&
                                    ((!lis[0] && player.countCards('h') != player.hp) || (!lis[1] && player.storage.Sword[0] != player.hp) || (!lis[2] && player.storage.Sword[1] != player.hp))) return true;
                            },
                            filter(event, player) {
                                if (event.responded || player.hasSkill('Sword_block')) return false;
                                var lis = player.storage.Sould || [0, 0, 0];
                                var chi1 = !lis[0] && player.countCards('h') != player.hp;
                                var chi2 = !lis[1] && player.storage.Sword[0] != player.hp;
                                var chi3 = !lis[2] && player.storage.Sword[1] != player.hp;
                                if (!chi1 && !chi2 && !chi3) return false;
                                for (var i of lib.inpile) {
                                    if (['sha', 'shan'].includes(i) && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (['sha', 'shan'].includes(i) && event.filterCard({ name: i }, player, event)) {
                                            if (i == 'sha') list.push(['基本', '', 'sha', 'ice']);
                                            else list.push(['基本', '', i]);
                                        }
                                    }
                                    return ui.create.dialog('吾刃', [list, 'vcard'], 'hidden')
                                },
                                check(button) {
                                    if (button.link[2] == 'shan') return 3;
                                    var player = _status.event.player;
                                    return player.getUseValue({ name: button.link[2], nature: button.link[3] }) / 4;
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: -1,
                                        filterCard(card, player) {
                                            return false;
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            suit: 'none',
                                            number: null,
                                        },
                                        ignoreMod: true,
                                        precontent() {
                                            'step 0'
                                            var choice = [];
                                            var card = event.result.card;
                                            var lis = player.storage.Sould || [0, 0, 0];
                                            if (!lis[0] && player.countCards('h') != player.hp) choice.push('选项一');
                                            if (!lis[1] && player.storage.Sword[0] != player.hp) choice.push('选项二');
                                            if (!lis[2] && player.storage.Sword[1] != player.hp) choice.push('选项三');
                                            player.chooseControl(choice, function () {
                                                if (player.countCards('h') < player.hp) return '选项一';
                                                if (player == _status.currentPhase) return '选项三';
                                                return '选项二';
                                            }).set('choiceList', [
                                                '将手牌调整至' + player.hp,
                                                `下次受到伤害后,摸${player.hp}张牌`,
                                                `下次发动此技能改为弃置${player.hp}张牌`,
                                            ]).set('prompt', '请选择一项,视为使用或打出一张' + get.translation(card.name));
                                            'step 1'
                                            player.addTempSkill('Sword_block');
                                            if (result.control == '选项一') {
                                                var num = player.countCards('h') - player.hp;
                                                if (num > 0) player.chooseToDiscard(num, 'h', true);
                                                else player.draw(-num);
                                            }
                                            else if (result.control == '选项二') {
                                                player.storage.Sword[0] = player.hp;
                                            }
                                            event.result.card = {
                                                name: event.result.card.name,
                                                nature: event.result.card.nature,
                                            };
                                            event.result.cards = [];
                                            var tar = _status.currentPhase;
                                            player.discardPlayerCard(tar, player.storage.Sould[1] ? 2 : player.storage.Sword[1], 'he', true);
                                            if (result.control == '选项三') player.storage.Sword[1] = player.hp;
                                            else player.storage.Sword[1] = 1;
                                        },
                                    }
                                },
                                prompt(links, player) {
                                    var name = links[0][2];
                                    var nature = links[0][3];
                                    return '视为使用或打出一张' + (name == 'sha' ? '冰【杀】' : '【闪】');
                                },
                            },
                            group: 'Sword_dam',
                            subSkill: {
                                dam: {
                                    audio: 'ext:天海经行/audio:2',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.Sould && player.storage.Sould[1] > 0 || player.storage.Sword && player.storage.Sword[0] > 0;
                                    },
                                    content() {
                                        player.draw(player.storage.Sould[1] ? 2 : player.storage.Sword[0]);
                                        player.storage.Sword[0] = 0;
                                    },
                                },
                                block: {
                                    charlotte: true,
                                },
                            },
                            mark: true,
                            marktext: '吾',
                            intro: {
                                name: '吾刃',
                                content(storage, player) {
                                    var lis = player.storage.Sould || [0, 0, 0];
                                    if (lis[0] * lis[1] * lis[2] > 0) return '<font color=#FF0000>我心已死.</font>';
                                    var str1 = !lis[1] ? `下次受到伤害后,摸${storage[0]}张牌` : '受到伤害后,摸两张牌';
                                    var str2 = !lis[2] ? `下次发动改为弃置${storage[1]}张牌` : '发动需弃置两张牌';
                                    return str1 + '<br>' + str2;
                                },
                            },
                            ai: {
                                order: 1,
                                respondShan: true,
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (player.countCards('h') == player.hp && player.storage.Sword[0] == player.hp && player.storage.Sword[1] == player.hp) return false;
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        Sould: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [0, 0, 0];
                            },
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                var lis = player.storage.Sould;
                                return lis[0] * lis[1] * lis[2] == 0;
                            },
                            forced: true,
                            content() {
                                'step 0'
                                var lis = player.storage.Sould;
                                var choice = [];
                                if (!lis[0]) choice.push('选项一');
                                if (!lis[1]) choice.push('选项二');
                                if (!lis[2]) choice.push('选项三');
                                player.chooseControl(choice, function () {
                                    if (lis[1] == 0) return '选项二';
                                    else if (lis[0] == 0 && player.countCards('h') < 2) return '选项一';
                                    return '选项三';
                                }).set('choiceList', [
                                    '此后手牌数始终为2',
                                    '此后受到伤害后,摸两张牌',
                                    '此后发动【吾刃】弃置两张牌',
                                ]).set('prompt', '请删除一项');
                                'step 1'
                                if (result.control == '选项一') player.storage.Sould[0] = 2;
                                else if (result.control == '选项二') player.storage.Sould[1] = 2;
                                else player.storage.Sould[2] = 2;
                                player.hp = player.maxHp;
                            },
                            group: 'Sould_card',
                            subSkill: {
                                card: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.Sould || player.storage.Sould[0] != 2) return false;
                                        if (event.name == 'gain' && event.player == player) return player.countCards('h') > 2;
                                        var evt = event.getl(player);
                                        if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= 2) return false;
                                        var evt = event;
                                        for (var i = 0; i < 4; i++) {
                                            evt = evt.getParent('Sould_card');
                                            if (evt.name != 'Sould_card') return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var num = 2 - player.countCards('h');
                                        if (num > 0) player.draw(num);
                                        else player.chooseToDiscard('h', true, -num);
                                    },
                                },
                            },
                        },
                        Godelegy: {
                            audio: 'ext:天海经行/audio:2',
                            init() {
                                if (lib.skill.shencai_death) {
                                    lib.skill.shencai_death.intro = {
                                        name: '神裁 - 死',
                                        name2: '死',
                                        mark(dialog, storage, player) {
                                            let num = 0,
                                                str = () => '锁定技.你的角色手牌上限-#;回合结束时,若场上存活人数小于#,则你死亡.'.replace(/#/g, num);
                                            if (Array.isArray(storage) && storage.length) {
                                                num = storage.length;
                                                dialog.add(str());
                                                dialog.addSmall(storage);
                                            } else dialog.add(str());
                                        },
                                        markcount(storage, player) {
                                            if (Array.isArray(storage))
                                                return storage.length;
                                            return storage;
                                        },
                                        onunmark: 'throw'
                                    };
                                    lib.skill.shencai_death.onremove = (player, skill) => {
                                        let cards = player.getExpansions(skill),
                                            storage = player.getStorage(skill);
                                        if (cards.length)
                                            player.loseToDiscardpile(cards);
                                        if (Array.isArray(storage)) {
                                            storage.remove(cards);
                                            if (storage.length)
                                                player.loseToDiscardpile(storage);
                                        };
                                    };
                                };
                            },
                            trigger: {
                                global: 'useCardAfter'
                            },
                            filter: (event, player) => event.player.hp == player.hp
                                && get.color(event.card) != 'red'
                                && !/equip|delay/.test(get.type(event.card))
                                && (event.cards && event.cards.length || event.player.getCards('h').length),
                            usable: 3,
                            forced: true,
                            async content(event, trigger, player) {
                                let card = trigger.cards, result;
                                const count = player.getStat('triggerSkill'),
                                    name = event.name,
                                    countx = count && count[name],
                                    usable = get.info(name).usable,
                                    target = trigger.player;
                                game.broadcastAll(ui.clear);
                                if (target.getCards('h').length)
                                    result = await player.choosePlayerCard(
                                        `是否发动【缭庭】,将${(card && card.length ? get.translation(card) + '或' : '')}${get.translation(target)}的一张手牌置为<死>？`,
                                        target,
                                        'h',
                                        (card && card.length ? [0, 1] : 1)
                                    ).forResult();
                                else result = await player.chooseBool()
                                    .set('createDialog', [
                                        '是否发动【缭庭】,将此牌置为<死>？',
                                        card
                                    ]).forResult();
                                let { bool, links } = result;
                                if (bool) {
                                    if (links && links[0])
                                        card = links;
                                    player.markAuto('shencai_death', card);
                                    let addToExp = player.addToExpansion('shencai_death', card, 'giveAuto');
                                    addToExp.gaintag.add('shencai_death');
                                    await addToExp;
                                    let num = usable - countx,
                                        cards = game.filterPlayer(true, true, true)
                                            .reduce((pre, cur) => pre.concat(cur.getExpansions('shencai_death')), [])
                                            .flat();
                                    if (countx && num > 0 && cards.length) {
                                        let skillName = get.skillTranslation(name, player),
                                            result = (cards.some(card => game.hasPlayer(current => player.canUse(card, current)))) ? await player.chooseBool()
                                                .set('createDialog', [
                                                    `###${skillName}###是否消耗此技能剩余发动次数以使用${get.cnNumber(num)
                                                    }张<死>？`,
                                                    cards
                                                ]).forResult() : false;
                                        if (result && result.bool) {
                                            let proud = game.parseSkillAudio(name + '_proud'),
                                                filter = player => {
                                                    ui.strlPageFilter = ui.create.div('.strl-page-filter', ui.window);
                                                    requestAnimationFrame(() => {
                                                        requestAnimationFrame(() => ui.strlPageFilter.style.setProperty(
                                                            '--scale',
                                                            30
                                                        ));
                                                    });
                                                    ui.window.classList.add('strl-page-filter-window');
                                                    player.classList.add('strl-nofilter');
                                                }, unfilter = player => {
                                                    ui.strlPageFilter.style.setProperty(
                                                        '--scale',
                                                        0
                                                    );
                                                    ui.strlPageFilter.listenTransition(function () {
                                                        this.remove();
                                                        if (ui.strlPageFilter == this)
                                                            delete ui.strlPageFilter;
                                                    });
                                                    ui.window.classList.remove('strl-page-filter-window');
                                                    player.classList.remove('strl-nofilter');
                                                }, play = audio => {
                                                    game.broadcastAll(audio => {
                                                        game.playAudio(audio);
                                                    }, audio);
                                                }, play2 = next => {
                                                    eval(`
                                            next.oncard = function (){
                                                (${play})('${proud[1]}');
                                            };
                                        `);
                                                }, unmark = cards => game.hasPlayer(player => {
                                                    player.unmarkAuto('shencai_death', cards);
                                                }),
                                                played;
                                            count[name] = usable;
                                            game.broadcastAll(filter, player);
                                            play(proud[0]);
                                            await game.asyncDelay(3, 800);
                                            if (cards.length > 1) {
                                                while (num-- > 0 && cards.length) {
                                                    result = await player.chooseButton([`###${skillName}###请选择要使用的牌`, cards])
                                                        .set('filterButton', function (button) {
                                                            return game.hasPlayer(current => player.canUse(button.link, current));
                                                        })
                                                        .forResult();
                                                    if (result && result.links) {
                                                        let links = result.links;
                                                        cards.remove(...links);
                                                        unmark(links);
                                                        const next = player.chooseUseTarget(links, true, false);
                                                        if (!played && num < 1) {
                                                            play2(next);
                                                            played = true;
                                                        };
                                                        await next;
                                                    };
                                                };
                                                game.broadcastAll(unfilter, player);
                                            } else {
                                                while (cards.some(card => game.hasPlayer(current => player.canUse(card, current)))) {
                                                    const curren = cards.shift(),
                                                        next = player.chooseUseTarget(curren, true, false);
                                                    if (!played && !cards.length) {
                                                        play2(next);
                                                        played = true;
                                                    };
                                                    if (game.hasPlayer(current => player.canUse(curren, current))) unmark([curren]);
                                                    await next;
                                                };
                                                game.broadcastAll(unfilter, player);
                                            };
                                        };
                                    };
                                };
                            },
                            global: 'shencai_death',
                            subSkill: {
                                proud: { audio: 'ext:天海经行/audio:2', }
                            }
                        },
                        Meicry: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'useCardBefore'
                            },
                            filter: (event, player) => get.tag(event.card, 'damage') && ['basic', 'trick'].includes(get.type(event.card)) && !player.hasHistory('useCard', evt => get.tag(evt.card, 'damage') && evt != event),
                            forced: true,
                            content() {
                                let cards = [...ui.discardPile.children]
                                    .reverse()
                                    .filter(card => card.name == 'sha')
                                    .slice(0, 4),
                                    color = get.color(cards[0]);
                                game.cardsGotoOrdering(trigger.cards);
                                player.update();
                                if (player == game.me)
                                    ui.updatehl();
                                trigger.cards.length = 0;
                                trigger.cards.push(...cards);
                                trigger.card.cards.length = 0;
                                trigger.card.cards.push(...cards);
                                if (cards.length && cards.every(card => get.color(card) == color)) {
                                    trigger.deadly = true;
                                    game.log(trigger.card, '#g致命');
                                };
                            },
                            global: 'Meicry_deadly',
                            subSkill: {
                                deadly: {
                                    trigger: {
                                        player: 'damageBegin2'
                                    },
                                    filter: event => event.parent.deadly
                                        || event.getParent(2).deadly,
                                    silent: true,
                                    content() {
                                        trigger.num = player.getHp();
                                    }
                                }
                            },
                            mark: true,
                            marktext: '恸',
                            intro: {
                                name: '梦返',
                                content(storage, player) {
                                    let cards = [...ui.discardPile.children]
                                        .reverse()
                                        .filter(card => card.name == 'sha')
                                        .slice(0, 4),
                                        color = get.color(cards[0]);
                                    if (cards.length && cards.every(card => get.color(card) == color)) {
                                        return '<font color=#FF0000>我为逝者哀哭……</font>';
                                    }
                                    return;
                                }
                            }
                        },
                        Wheel: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                target: 'useCardToTargeted'
                            },
                            filter(event) {
                                return !/equip|delay/.test(get.type(event.card))
                                    && event.card.suit == 'spade';
                            },
                            async content(event, trigger, player) {
                                const name = event.name + '_judge',
                                    info = get.info(name);
                                trigger.parent.effectCount = Math.min(player.countCards('h'), 6);
                                if (info) {
                                    info.trigger.target = Object.keys(lib.card).map(name => name + 'Before');
                                    info.events.add(trigger.parent.id);
                                    info.filter = evt => info.events.includes(evt.parent.id);
                                    if (!player.hasSkill(name))
                                        player.addTempSkill(name, evt => evt == trigger.parent && evt.finished);
                                };
                            },
                            subSkill: {
                                judge: {
                                    audio: 1,
                                    trigger: { target: [] },
                                    events: [],
                                    silent: true,
                                    firstDo: true,
                                    _priority: 500,
                                    async content(event, trigger, player) {
                                        const { _result: { card, bool } } = await player.executeDelayCardEffect('shandian');
                                        if (card.number > 6) {
                                            trigger.cancel();
                                            player.gain(card, 'gain2');
                                            if (bool && Math.random() < .5)
                                                game.trySkillAudio(event.name, player);
                                        };
                                    },
                                },
                            },
                        },
                        Allin: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                player: 'judge',
                            },
                            usable: 1,
                            forced: true,
                            async content(event, trigger, player) {
                                let card = (game.getGlobalHistory('useCard').at(-1) || {}).card || { suit: 'none' },
                                    suit = card && get.translation(card.suit),
                                    ok = trigger.judge({ ...trigger.player.judging[0], suit: card.suit }) + 1 >= trigger.judge(trigger.player.judging[0]);
                                const name = event.name,
                                    count = player.getStat('triggerSkill');
                                let next = player.chooseToUse(`###${get.prompt(name)}${suit ? `［${suit}]` : ''}<br>不选择卡牌点击取消可摸两张牌###${get.skillInfoTranslation(name, player)}`)
                                    .set('selectTarget', function () {
                                        if (!ui.selected.cards.length)
                                            return [0, 1];
                                        return lib.filter.selectTarget.apply(this, arguments);
                                    })
                                    .set('filterTarget', function (_event, player, target) {
                                        return player != target && lib.filter.filterTarget.apply(this, arguments);
                                    })
                                    .set('filterCard', function (card) {
                                        let select = lib.filter.selectTarget(card, get.player()), info = get.info(card);
                                        if (info.toself || !lib.filter.filterCard.apply(this, arguments)) {
                                            return false;
                                        }
                                        if (Array.isArray(select)) {
                                            return select[1] > 0;
                                        }
                                        return select[1];
                                    })
                                    .set('ai1', (card) => {
                                        if (get.event('_replace'))
                                            return 0;
                                        let trigger = get.event().getTrigger(),
                                            player = get.player(),
                                            judging = get.event('judging'),
                                            result = trigger.judge(card) - trigger.judge(judging),//QQQ
                                            att = get.attitude(player, trigger.player);
                                        if (att > 0 && result >= 0 || att < 0 && result < 0)
                                            return (att < 0 ? -result : result) + get.order(card);
                                    })
                                    .set('judging', trigger.player.judging[0])
                                    .set('_replace', ok);
                                let { result: { cards, targets, bool } } = await next;
                                if (bool || !bool && (!cards || !cards.length || !targets || !targets.length)) {
                                    if (!bool) {
                                        let result = await player.chooseBool(
                                            `###${suit ? `将判定牌花色修改为［${suit}]并` : ''
                                            }<br>摸两张牌###${get.skillInfoTranslation(name, player)
                                            }`
                                        ).set('choice', ok)
                                            .forResult();
                                        bool = result.bool;
                                        if (bool)
                                            player.draw(2, 'nodelay');
                                    };
                                    if (bool) {
                                        card = (game.getGlobalHistory('useCard').at(-1) || {}).card || { suit: 'none' };
                                        suit = card.suit;
                                        trigger.fixedResult = {
                                            suit
                                        };
                                    } else if (count && count[name])
                                        count[name]--;
                                } else if (count && count[name])
                                    count[name]--;
                            }
                        },
                        Highnoon: {
                            audio: 'ext:天海经行/audio:2',
                            init(player, skill) {
                                player.storage[skill] = 0;
                            },
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                return player.storage.Highnoon == 5;
                            },
                            content() {
                                'step 0'
                                trigger.baseDamage++;
                                trigger.directHit.addArray(game.filterPlayer());
                            },
                            mark: true,
                            marktext: '午',
                            intro: {
                                name: '午时已到',
                                content(storage) {
                                    var str = (storage == 5) ? `<span class='firetext'>` : '';
                                    return str + storage + '/5</span>';
                                },
                            },
                            group: ['Highnoon_countDown', 'Highnoon_bullet'],
                            subSkill: {
                                countDown: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.isIn() && event.player.isAlive();
                                    },
                                    charlotte: true,
                                    silent: true,
                                    content() {
                                        player.storage.Highnoon++;
                                        if (player.storage.Highnoon == 5) {
                                            game.log(`<span class='firetext'>午时已到……</span>`);
                                        }
                                        if (player.storage.Highnoon > 5) player.storage.Highnoon = 1;
                                    },
                                },
                                check: {
                                    charlotte: true,
                                },
                                out: {
                                    init(player, skill) {
                                        player.out(skill);
                                    },
                                    onremove(player, skill) {
                                        if (player.isOut()) {
                                            player.in(skill);
                                        }
                                    },
                                    charlotte: true,
                                    group: 'undist',
                                },
                                bullet: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (player.hasSkill('Highnoon_check')) return false;
                                        if (event.card.name != 'sha' || !event.cards || !event.cards.length) return false;
                                        return player.storage.Highnoon == 5;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        player.addTempSkill('Highnoon_check');
                                        player.loseHp();
                                        'step 1'
                                        player.gain(trigger.cards);
                                        var targets = game.filterPlayer(current => !trigger.targets.includes(current));
                                        if (targets.length)
                                            player.chooseTarget('调离一名不为此牌目标的角色至轮次结束', (event, player, target) => targets.includes(target)).set('ai', (t) => -get.attitude(t, player));//QQQ
                                        'step 2'
                                        if (result.bool) {
                                            result.targets[0].addTempSkill('Highnoon_out', { global: 'roundStart' });
                                        }
                                    },
                                },
                            },
                        },
                        Timepiec: {
                            audio: 'ext:天海经行/audio:2',
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                var history = event.player.getAllHistory('useCard', (event) => ['basic', 'trick'].includes(get.type(event.card)));
                                if (history.length < 1) return false;
                                var card = history.at(-1).card;
                                return game.hasPlayer(current => player.canUse(card, current));
                            },
                            forced: true,
                            content() {
                                'step 0'
                                var history = trigger.player.getAllHistory('useCard', (event) => ['basic', 'trick'].includes(get.type(event.card)));
                                var name = get.name(history.at(-1).card);
                                event.namex = name;
                                player.chooseUseTarget('###是否发动【逆刻】？###视为使用' + get.translation(name) + ((name == 'sha') ? '并摸四张牌' : ''), { name: name }, false);
                                'step 1'
                                if (result.targets && result.targets.length && event.namex == 'sha') {
                                    player.draw(4);
                                }
                            },
                        },
                        Frombreaking: {
                            trigger: {
                                global: ['loseAfter', 'loseAsyncAfter']
                            },
                            filter(event, player) {
                                if (event.type != 'discard' || event.getlx === false)
                                    return false;
                                let cards = event.cards;
                                return cards.length > 1;
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                let cards = trigger.cards,
                                    target = trigger.player,
                                    name = event.name,
                                    att = get.attitude(target, player),
                                    map = {
                                        club: '弃两张牌',
                                        spade: '翻面',
                                        heart: '回复1点体力',
                                        diamond: '摸两张牌'
                                    };
                                var suit = [];
                                for (var i of cards) {
                                    if (map[i.suit] && !suit.includes(i.suit)) suit.push(i);
                                }
                                const { result: { bool } } = await target.chooseBool(
                                    `###是否令${get.translation(player)}发动【${get.skillTranslation(name, player)
                                    }】？###令${get.translation(player)}${map[suit]}`
                                ).set('choice', (/heart|diamond/).test(suit) ? att > 2 : att < 0);
                                if (bool) {
                                    player.line(target, 'green');
                                    let content = lib.skill.beige.content.toString();
                                    content = content.slice(content.indexOf('switch')).replace(/trigger\.(player|source)/g, '$1');
                                    try {
                                        await eval(`event.insert(async function (event, trigger, player){
                                const source = trigger.source,
                                    target = trigger.player,
                                    result = event._result || event.result;
                                ${content}
                            , {
                                _result: {
                                    suit
                                },
                                _trigger: {
                                    player,
                                    source: player
                                },
                                player                            
                            });`);
                                        if (!(target == player && !player.getCards('e').length) && player.getCards('he').length)
                                            player.chooseToGive(target, [1, 2], 'he');
                                    } catch (e) {
                                        alert(e.stack);
                                    }
                                };
                            }
                        },
                        Soaringpast: {
                        },
                    },//技能
                };
                for (var i in strl.character) {
                    strl.character[i][4].push(`ext:天海经行/image/${i}.jpg`);
                }
                lib.config.all.characters.add('strl');
                lib.config.characters.add('strl');
                lib.translate.strl_character_config = '天海经行';
                return strl;
            });
        },
        package: {
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '秋末',
            version: '1.1.3',
        },
    }
})