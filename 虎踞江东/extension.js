import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '虎踞江东',
		content(config, pack) {
			lib.arenaReady.push(function () {
				// s>ap>a>am>bp>b>bm>c>d
				lib.rank.bp.push('rel_zhugeke');
			});
			lib.element.player.linergbl = function (target, config) {
				if (get.itemtype(target) == 'players') {
					for (var i = 0; i < target.length; i++) {
						this.linergbl(target[i], config);
					}
				} else if (get.itemtype(target) == 'player') {
					if (target == this) return;
					game.broadcast(
						function (player, target, config) {
							player.linergbl(target, config);
						},
						this,
						target,
						config
					);
					game.addVideo('line', this, [target.dataset.position, config]);
					game.linexyrgbl([this.offsetLeft + this.offsetWidth / 2, this.offsetTop + this.offsetHeight / 2, target.offsetLeft + target.offsetWidth / 2, target.offsetTop + target.offsetHeight / 2], config, true);
				}
			};
		},
		precontent() {
			game.linexyrgbl = function (path, options = {}) {
				var from = [path[0], path[1]];
				var to = [path[2], path[3]];
				var total = options.duration || lib.config.duration * 2;
				var opacity = options.opacity || 1;
				var color = options.color || [255, 255, 255];
				var dashed = options.dashed || false;
				var drag = options.drag || false;
				var brightness = options.brightness || 1;
				if (color == 'fire') {
					color = [255, 146, 68];
				} else if (color == 'thunder') {
					color = [141, 216, 255];
				} else if (color == 'green') {
					color = [141, 255, 216];
				}
				var node;
				if (drag) {
					color = [236, 201, 71];
					if (options.node) {
						node = options.node;
					} else {
						node = ui.create.div('.linexy.drag');
						node.style.left = from[0] + 'px';
						node.style.top = from[1] + 'px';
						node.style.background = `linear-gradient(transparent,rgba(${color},${opacity}),rgba(${color},${opacity})) `;
						node.style.filter = `brightness(${brightness})`;
						if (game.chess) {
							ui.chess.appendChild(node);
						} else {
							ui.arena.appendChild(node);
						}
					}
				} else {
					node = ui.create.div('.linexy.hidden');
					node.style.left = from[0] + 'px';
					node.style.top = from[1] + 'px';
					node.style.background = `linear-gradient(transparent,rgba(${color},${opacity}),rgba(${color},${opacity})) `;
					node.style.filter = `brightness(${brightness})`;
					node.style.transitionDuration = total / 3000 + 's';
				}
				var dy = to[1] - from[1];
				var dx = to[0] - from[0];
				var deg = (Math.atan(Math.abs(dy) / Math.abs(dx)) / Math.PI) * 180;
				if (dx >= 0) {
					if (dy <= 0) {
						deg += 90;
					} else {
						deg = 90 - deg;
					}
				} else {
					if (dy <= 0) {
						deg = 270 - deg;
					} else {
						deg += 270;
					}
				}
				if (drag) {
					node.style.transform = `rotate(${-deg}deg)`;
					node.style.height = get.xyDistance(from, to) + 'px';
				} else {
					node.style.transform = `rotate(${-deg}deg) scaleY(0)`;
					node.style.height = get.xyDistance(from, to) + 'px';
					if (game.chess) {
						ui.chess.appendChild(node);
					} else {
						ui.arena.appendChild(node);
					}
					ui.refresh(node);
					node.show();
					node.style.transform = `rotate(${-deg}deg) scaleY(1)`;
					node.listenTransition(function () {
						setTimeout(function () {
							if (node.classList.contains('removing')) return;
							node.delete();
						}, total / 3);
					});
				}
				return node;
			};
			game.JPG0 = function (Q, time) {
				const url = 'extension/虎踞江东/image/' + Q + '.jpg';
				var img = document.createElement('img');
				img.src = url;
				img.style.height = '100%';
				img.style.width = '100%';
				img.style.left = '0';
				img.style.right = '0';
				img.style.zIndex = '999';
				img.style.position = 'fixed';
				img.style.objectFit = 'cover';
				document.body.appendChild(img);
				var timeout = setTimeout(function () {
					img.remove();
				}, time);
				img.addEventListener('error', function () {
					clearTimeout(timeout);
					img.remove();
				});
				return img;
			};
			game.mp40 = async function (Q) {
				return new Promise((resolve) => {
					const video = document.createElement('video');
					video.src = `extension/虎踞江东/mp4/${Q}.mp4`;
					video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; pointer-events: none;';
					video.autoplay = true;
					video.loop = false;
					const backButton = document.createElement('div');
					backButton.innerHTML = '返回游戏'; //文字内容
					backButton.style.cssText = 'z-index: 999; position: absolute; bottom: 10px; right: 10px; color: red; font-size: 16px; padding: 5px 10px; background: rgba(0, 0, 0, 0.3);';
					backButton.onclick = function () {
						backButton.remove();
						video.remove();
						resolve();
					}; //设置返回按钮的点击事件
					document.body.appendChild(video);
					document.body.appendChild(backButton);
					video.addEventListener('error', function () {
						backButton.remove();
						video.remove();
						resolve();
					});
					video.addEventListener('ended', function () {
						backButton.remove();
						video.remove();
						resolve();
					});
				});
			}; //播放mp4
			game.import('character', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '虎踞江东',
					connect: true,
					character: {
						liubeiwuyi: ['male', 'shu', 8, ['re_rende', '奔袭'], []],
						sp_heqi: ['male', 'wu', 4, ['hq_qizhou', 'hq_shanxi'], []],
						xuezongpf: ['male', 'wu', 6, ['结训', '复难', '戒训'], []],
						lingcao破军校尉: ['male', 'wu', 7, ['独进'], []],
						buzhi平叛交州: ['male', 'wu', 7, ['定叛', '弘德'], []],
						zhuhuan平剿贼寇: ['male', 'wu', 8, ['奋励', '平寇'], []],
						luji知天之才: ['male', 'wu', 7, ['怀橘', '整论', '遗礼'], []],
						lukang毁堰破晋: ['male', 'wu', 7, ['决堰', '破势', '谦节'], []],
						heqi津南救援: ['male', 'wu', 8, ['qqwz锐樾', '闪贺袭齐', '短贺兵齐'], []],
						zhuran镇守江陵: ['male', 'wu', 8, ['胆守'], []],
						jiangqing从平江东: ['male', 'wu', 8, ['尚义', '鸟翔'], []],
						lvdai山林除寇: ['male', 'wu', 8, ['勤国'], []],
						sunhao翠琉金阙: ['male', 'wu', 8, ['残蚀', '仇海', '归命'], []],
						sunshangxiang星流霆击: ['female', 'wu', 7, ['姻缘亲', '枭武姬'], []],
						xushi冰心玉质: ['female', 'wu', 7, ['问卦', '伏诛'], []],
						lusu联盟抗魏: ['male', 'wu', 7, ['好施', '缔盟'], []],
						panshu繁囿引芳: ['female', 'wu', 7, ['wei威yi仪', 'jin锦zhi织'], []],
						bulianshi清神畅情: ['female', 'wu', 7, ['定心', '追忆', '心忆'], []],
						qilufurongtuan: ['female', 'wu', 4, ['qilu泣露'], []],
						fumiantaohuadui: ['female', 'wu', 4, ['fumian拂面'], []],
						panshu江东锦绣: ['female', 'wu', 7, ['weiyi威仪', 'jinzhi锦织', '召府'], []],
						wanchengfubing皖城府兵: ['male', 'wu', 4, ['府兵', '府兵2', '府兵3'], []],
						liuzan高歌猛进: ['male', 'wu', 8, ['力激', 'lz奋音'], []],
						huanggai炙链困敌: ['male', 'wu', 8, ['苦肉rekrhg', '诈降zxhg'], []],
						sunluban沅茝香兰: ['female', 'wu', 7, ['谮毁ch', '骄矜jj'], []],
						xusheng百里疑城: ['male', 'wu', 8, ['魄軍', '魄軍1'], []],
						panjun怀公忘私: ['male', ['wu', 'shu'].randomGet(), 7, ['聪察', '公清', '潘濬不臣'], []],
						zhouyi剑舞浏漓: ['female', 'wu', 7, ['逐寇', '氓情'], []],
						chengpu疠火燃战: ['male', 'wu', 8, ['醇醪', '疠火'], []],
						lingtong长风破浪: ['male', 'wu', 8, ['旋浪', '勇破', '风略'], []],
						taishici义信天武: ['male', 'wu', 8, ['义笃'], []], //义天烈笃
						weilan妫览: ['male', 'wu', 8, ['篡肆', '祸卜'], []],
						xuyang: ['male', 'wu', 8, ['阳军'], []],
						panzhangmazhong手足破敌: ['male', 'wu', 8, ['夺刀', '暗箭'], []],
						ganying甘瑛: ['female', 'wu', 12, ['若袭', '兰兴'], []],
						zhugejin文墨为箭: ['male', 'wu', 7, ['zhugejin弘援', 'zhugejin缓释', 'zhugejin明哲'], []],
						lukang父志秉承: ['male', 'wu', 7, ['秉柔', '决堰jy', '破势ps', '谦节qj'], []],
						xielingyu幽鸾皎月: ['female', 'wu', 7, ['元嫡', '心幽'], []],
						xuezong笔生万物: ['male', 'wu', 7, ['funan复难', 'jiexun诫训'], []],
						quanhuijie全惠解: ['female', 'wu', 7, ['慧淑', '易数', '离宫'], []],
						sunshangxiang演武试刀: ['female', 'wu', 7, ['结姻ywsd', '枭姬ywsd', '姻礼ywsd'], []],
						zhouyu天纵奇才: ['male', 'wu', 7, ['yingzi天纵奇才', 'fanjian天纵奇才'], []],
						chengbing五经弼国: ['male', 'wu', 7, ['经造', '恩遇'], []],
						zhugeke白浪掀天: ['male', 'wu', 7, ['才黩', '傲武', '兵黩'], []],
						shiyi是仪: ['male', 'wu', 7, ['榱椽', '正序', '佐谏'], []],
						sunhuan威凛沙场: ['male', 'wu', 8, ['逆击'], []],
						bulianshi鸾飞凤舞: ['female', 'wu', 7, ['鸾飞凤舞安恤', '鸾飞凤舞追忆'], []],
						zhugekepi: ['male', 'wu', 4, ['tianaopi', 're_qiongbing', 're_tianao', 'aocai'], []],
						sundengpi: ['male', 'wu', 5, ['kuangbipi', 'kuangbipf'], []],
						liuzanjie: ['male', 'wu', 5, ['歌亢', 'lz奋音'], []],
						pangtong送丧归且: ['male', 'wu', 3, ['过论', '送丧'], ['des:庞统,字士元,襄阳(治今湖北襄阳)人.三国时刘备帐下谋士,官拜军师中郎将.才智与诸葛亮齐名,人称<凤雏>.在进围雒县时,统率众攻城,不幸被流矢击中去世,时年三十六岁.追赐统为关内侯,谥曰靖侯.庞统死后,葬于落凤庞统墓坡'], []],
						chendong如损如篪: ['male', 'wu', 8, ['qqwz索舟', 'qqwz锋戮'], []],
						panjun摆宴欲诛: ['male', 'wu', 6, ['qqwz微审', 'qqwz斥公'], []],
						yanjun思国前路: ['male', 'wu', 6, ['观潮', '逊贤'], ['des:严畯(生卒年不详),字曼才,彭城(治今江苏徐州)人,三国时期孙吴官员、学者.性情忠厚,待人以诚.少好学,精通<诗>、<书>、<三礼>,又好<说文>.避乱江东,与诸葛瑾、步骘是好朋友,被张昭推荐给孙权作骑都尉、从事中郎.建安二十二年(217年),横江将军鲁肃去世,孙权打算让严畯接替其位.严畯很有自知之明,知道自己没有能力对抗在荆州的关羽和北面的曹魏,便坚决不接受此任命.后来担任尚书令.严畯享年七十八岁.著有<孝经传>、<潮水论>'], []],
						sunliang谋诛孙綝: ['male', 'wu', 6, ['困渊', '请征', '立军'], ['zhu', 'des:孙亮于赤乌六年(243年)出生,相传母亲潘淑有孕时时曾梦见有人将龙头授于自己,不久就在建业宫内殿生下孙亮.大帝年岁大了,而孙亮年又最幼,故此特别疼爱这个孩子. 起初,大帝以三子孙和为皇太子,然而其母王夫人与孙亮的长姐全公主积怨已久,导致孙和最终被废去太子之位.赤乌十三年(250年)十月,大帝将孙亮改立为皇太子.不久又册立其母为皇后,孙亮由此成为孙权诸子中唯一的一位嫡子.孙亮聪明颖悟,虽然年幼却有成人的判断能力,与傅相会面举止合乎礼节,大臣由是看重他. 当年冬天,大帝孙权重病卧床,征召大将军诸葛恪为太子太傅,会稽太守滕胤为太常,一道受诏辅佐太子'], []],
						qun_sufei: ['male', 'qun', 4, ['连翩'], []],
						wuguotai淑逸闲华: ['female', 'wu', 6, ['ji_ganlu', 'ji_buyi'], ['des:雍容华步'], []],
						zhoufang笺书诱敌: ['male', 'wu', 6, ['断发', '诱敌'], []],
						gexuan结丹飞升: ['male', 'wu', 7, ['炼化', '札符'], []],
						panshu潘淑: ['female', 'wu', 3, ['威仪', '锦织'], []],
						liuzan阵前亢歌: ['male', 'wu', 8, ['战歌'], []],
						lvfan定军先时: ['male', 'wu', 7, ['gz典财', 'gz调度'], []],
						sunchen孙綝: ['male', 'wu', 8, ['戮嗜', '凶虐'], []],
						guyong匡弼辅正: ['male', 'wu', 7, ['慎行', '秉壹'], []],
						qiaojiashinv乔家侍女: ['female', 'wu', 4, ['乔侍'], []],
						daqiao清萧清丽: ['female', 'wu', 7, ['国色芳华', '辗转流离', '丽质'], []],
						zhugeke干略盖世: ['male', 'wu', 7, ['黷武', '傲世'], []],
						luyusheng陆郁生: ['female', 'wu', 7, ['贞特', '至微'], []],
						fengxi冯熙: ['male', 'wu', 7, ['碎玉', '驳言'], []],
						sufei临岸拜别: ['male', ['qun', 'wu', 'wu', 'wu'].randomGet(), 8, ['连翩lp', '苏飞不臣'], []],
						panjun聪察对问: ['male', ['shu', 'wu', 'wu', 'wu'].randomGet(), 7, ['聪察pj', '公清pj', '潘濬不臣'], []],
						zhuzhi征讨夷越: ['male', 'wu', 8, ['安国zz'], []],
						wuli污吏: ['male', 'wu', 8, ['贪敛'], []],
						zhaoyan彩绘芳菲: ['female', 'wu', 7, ['轻幔', '锦绘'], []],
						daxiaoqiao双花并倚: ['female', 'wu', 7, ['星舞xwdxq', '天香xwdxq', '流离xwdxq'], []],
						tengfanglan滕芳兰: ['female', 'wu', 7, ['幸宠', '落宠', '哀尘', '尘世'], []],
						sunhanhua挣绽青莲: ['female', 'wu', 7, ['冲虚', '妙灵hh', '莲华'], []],
						wuyan吾彦: ['male', 'wu', 8, ['澜疆'], []],
						luotong辨如悬河: ['male', 'wu', 8, ['勤政qz'], []],
						tengyin滕胤: ['male', 'wu', 7, ['陈见', '皙秀'], []],
						ruiji芮姬: ['female', 'wu', 7, ['巧芮', '清靓'], []],
						fengxi不辱君命: ['male', 'wu', 7, ['s碎y玉', 'b驳y言'], []],
						zhangxuan张璇: ['female', 'wu', 7, ['同礼', '奢葬'], []],
						zhangyao张媱: ['female', 'wu', 7, ['怨咽', '夕颜'], []],
						zhouchu英情天逸: ['male', 'wu', 8, ['善逸', '彰名', '除害'], []],
						wujing助吴征战: ['male', 'wu', 8, ['合击'], []],
						luji璇霄寰宇: ['male', 'wu', 7, ['怀h橘j', '遗y礼l', '整z论l'], []],
						sunshao清庙之器: ['male', 'wu', 7, ['弼政', '佚典'], []],
						qiaoguolao龙虎佳婿: ['male', 'wu', 7, ['遗珠', '鸾梼', '共患'], []],
						zhoutaigong周太公: ['male', 'wu', 8, ['太音'], []],
						zhanghong张纮: ['male', 'wu', 7, ['安政', '说谏'], []],
						zhangzhao神张昭: ['male', 'wu', 7, ['稳政', '固谏'], []],
						huanggai勇力精锐: ['male', 'wu', 8, ['苦肉勇力精锐', '诈降勇力精锐'], []],
						zhoutai血战不屈: ['male', 'wu', 8, ['不屈mzt', '奋激mzt'], []],
						luxun烈火炽天: ['male', 'wu', 7, ['谦逊烈火炽天', '连营烈火炽天'], []],
						tengfanglan脂车香姝: ['female', 'wu', 7, ['幸宠', '落宠lc', '哀尘ac', '尘世'], []],
						lusu周济万民: ['male', 'wu', 7, ['好施周济万民', '缔盟周济万民'], []],
						lukai陆凯: ['male', 'wu', 7, ['卜筮', '忠壮'], []],
						ruiji玉芮花意: ['female', 'wu', 7, ['qiao巧rui芮', 'qing清liang靓'], []],
						zhangyao姝姿绰约: ['female', 'wu', 7, ['y怨y咽', 'x夕y颜'], []],
						zhangxuan姝颜绰约: ['female', 'wu', 7, ['t同l礼', 's奢z葬'], []],
						liuzan留略: ['male', 'wu', 8, ['奋略'], []],
						zhuran临沮截击: ['male', 'wu', 8, ['胆然'], []],
						xusheng馈粽袍泽: ['male', 'wu', 8, ['破军mxs', '疑城mxs', '钰铸'], []],
						yuanji袁姬: ['female', 'wu', 7, ['蒙斥', '节行'], []],
						sunlingluan孙翎鸾: ['female', 'wu', 7, ['聆乐', '盻睇'], []],
						sufei遏浪惊涛: ['male', ['qun', 'wu', 'wu', 'wu'].randomGet(), 8, ['数谏', '苏飞不臣'], []],
						dagongche大攻车: ['none', 'qun', 4, ['攻車'], []],
						zhangfen天工神机: ['male', 'wu', 8, ['望橹', '陷筑', '拆械'], []],
						lingtong血涕津渚: ['male', 'wu', 8, ['旋渚'], []],
						jxz_hansui: ['male', 'qun', 4, ['jxz_niluan', 'mashu'], []],
						//huaxiongwang:["male","qun",8,["king_yuanjun","king_qidun","king_tianwei","king_xiaoshou","king_shuangren","king_huaxiong_fenfa","king_shanshi"],["boss","bossallowed"]],
						lijueguosi: ['male', 'qun', 6, ['mangchou', 'xiangcan'], []],
						wangjisp: ['male', 'wei', 3, ['qizhi', 'jinqu', 'qishipi', 'jinqupi'], []],
						diaochanyuhun: ['female', 'qun', 8, ['nsqiyue', 'rel_lijian', 'lijian', 'biyue'], []],
						xushujiuxin: ['male', 'shu', 3, ['wuyan', 'jujian', 'xinwuyan', 'xinjujian'], []],
						liruxinjiu: ['male', 'qun', 3, ['juece', 'mieji', 'fencheng', 'xinjuece', 'xinmieji', 'xinfencheng'], []],
						caiwenjixinjiu: ['female', 'wei', 3, ['mozhi', 'beige', 'duanchang'], []],
						huangyueyingpi: ['female', 'shu', 4, ['jizhi', 'qicai', '集智lkjz', 'jiqiao', 'linglong', 'linglongpi'], []],
						sunshangxiangjie: ['female', 'shu', 4, ['liangzhupi', 'xiaojipi', 'liangyuanpi', 'xianzhupi'], []],
						caopijie: ['male', 'wei', 4, ['fangzhu', 'songwei', 'xingshangpi', 'fangzhupi', 'songweipi', 'xingshangpf'], []],
						ganningjie: ['male', 'wu', 5, ['yinling', 'junwei', 'qixi'], []],
						panfengpi: ['male', 'qun', 7, ['kuangfu', 'kuangfupi'], []],
						zhugejinpi: ['male', 'wu', 4, ['hongyuan', 'huanshi', 'mingzhe', 'hongyuanpi', 'huanshipi', 'mingzhepi', 'huanbing'], []],
						liuyepi: ['male', 'wei', 3, ['jinkui', 'xidipi'], []],
						zhugeliangpi: ['male', 'shu', 4, ['guanxing', 'kanpopi'], []],//QQQ
						niujin: ['male', 'wei', 4, ['cuorui', 'liewei'], []],
						madaipi: ['male', 'shu', 5, ['mashu', 'qianxipi', 'qianxitupo', 'qianxi', 'qianxigaopei'], []],
						fuhuanghoujiu: ['female', 'qun', 3, ['zuikongjiuz', 'qiuyuanjiu'], []],
						jiangweisp: ['male', 'wei', 4, ['kunfen', 'fengliangpi'], []],
						pangdepi: ['male', 'wei', 5, ['mashu', 'mengjin', 'juesipi'], []],
						zhangchunhua1: ['female', 'wei', 8, ['shangshijiu', 'jueqingjiu'], []],
						zhonghuipi: ['male', 'wei', 5, ['zhenggongpi', 'quanjipi', 'baijiangpi', 'quanjipif', 'zilipif'], []],
						sunhaopi: ['male', 'wu', 6, ['canshipi', 'baolipi', 'huangyinpi'], []],
						xiliangjingbing: ['male', 'qun', 4, ['mashu', '骑勇'], []],
						jiangwei护战天水: ['male', 'wei', 8, ['困奋', '逢亮'], []],
						panfeng阵前威豪: ['male', 'qun', 8, ['狂斧'], []],
						jiling仲家武锐: ['male', 'qun', 8, ['双刃纪灵'], []],
						guonvwang郭女王: ['female', 'wei', 7, ['偏宠', '尊位'], []],
						huangyueying青云鸢飞: ['female', 'shu', 7, ['jizhi', 'qicai', '集智lkjz', 'jiqiao', 'linglong', 'linglongpi', 'jizhi青云鸢飞', 'cangji青云鸢飞'], []],
						caiwenji抚弦绘黛: ['female', 'wei', 7, ['默识', '陈情'], []],
						duanwei凉国之英: ['male', 'qun', 8, ['狼灭'], []],
						xuchu咆虎熔兵: ['male', 'wei', 8, ['裸衣许褚'], []],
						huangyueying智心巧手: ['female', 'shu', 7, ['jizhizxqs', 'qicai', '集智lkjz', 'linglong', 'linglongpi'], []],
						xiahoujie夏侯杰: ['male', 'wei', 8, ['壮胆', '裂胆'], []],
						zhaozhong掷金拒人: ['male', 'qun', 8, ['殃众zz', '惶恐zz'], []],
						xiahouen夏侯恩: ['male', 'wei', 8, ['佩剑xhe', '掠财xhe'], []],
						guanyuzhangfei关羽张飞: ['male', 'shu', 8, ['武圣gyzf', '咆哮gyzf'], []],
						mamidi马日磾: ['male', 'qun', 8, ['续典', '正订'], []],
						kongxiu孔秀: ['male', 'wei', 8, ['马战', '施礼', '诱施'], []],
						hanfu韩福: ['male', 'wei', 8, ['马战', '暗伤'], []],
						wangzhi王植: ['male', 'wei', 8, ['纵火', '假义'], []],
						huban胡班: ['male', 'wei', 8, ['家书', '密访'], []],
						qinqi秦琪: ['male', 'wei', 8, ['奉令', '仗势'], []],
						mengtan孟坦: ['male', 'wei', 8, ['马战', '佯败'], []],
						niujin轻骑饵敌: ['male', 'wei', 8, ['锐裂', '碎围'], []],
						zangba横行江陵: ['male', 'wei', 8, ['横江'], []],
						caimaozhangyun乘雷潜狡: ['male', 'wei', 8, ['惊澜', '连诬'], []],
						simafu司马孚: ['male', 'wei', 7, ['勋德', '臣节'], []],
						xiahoumao夏侯楙: ['male', 'wei', 8, ['资庸', '平乐'], []], //驸马
						caimao蔡瑁: ['male', 'qun', 8, ['反诗', '害仁'], []],
						mateng马足龙沙: ['male', 'qun', 8, ['雄异xy', 'mashu'], []],
						niufu牛辅: ['male', 'qun', 8, ['宵袭', '熊扰'], []],
						zhaorong赵融: ['male', 'qun', 8, ['资战'], []],
						duanwei执剑昆吾: ['male', 'qun', 8, ['狼灭执剑昆吾'], []],
						caozhi玉露清辉: ['male', 'wei', 7, ['落英玉露清辉', '酒诗玉露清辉', '七章玉露清辉'], []],
						longyufei龙羽飞: ['female', 'shu', 8, ['戍绝', '龙戍', '阵弈'], []],
						zhanghua张华: ['male', 'wei', 7, ['剑合', '弼昏', '穿屋'], []],
						jinlong金龙: ['male', 'qun', 8, ['金龙贺收'], []],
						lijue枭魔乱世: ['male', 'qun', 8, ['狼枭', '算袭'], []],
						luoxian罗宪: ['male', 'shu', 8, ['带砺'], []],
						yanghu公直规行: ['male', 'wei', 8, ['借兵', '扞难'], []],
						guanyu冠绝武义: ['male', 'shu', 8, ['wushengguanjueguanyu', 'weizhenguanjueguanyu'], []],
						wanglang骧龙御宇: ['male', 'wei', 8, ['gushe鼓舌', 'jici激词'], []],
						dongzhuo洛阳一炬: ['male', 'qun', 18, ['酒池董卓', '肉林董卓', '崩坏董卓', '暴虐董卓', '横征董卓', '暴凌董卓', '暴征董卓'], []],
						zhoushan周善: ['male', 'wu', 8, ['密运', '胆迎'], []],
						qifudeng祈福灯: ['male', 'qun', 8, ['祈福'], []],
						fulong福龙: ['male', 'qun', 8, ['福龙'], []],
						shuilong水龙: ['male', 'qun', 8, ['水龙'], []],
						huolong火龙: ['male', 'qun', 8, ['火龙'], []],
						rel_xunyu: ['male', 'wei', 3, ['re_tunlang', 're_jieming'], []],
						rel_zhugeke: ['male', 'wu', 3, ['re_tianao', 're_qiongbing'], []],
						rel_guojia: ['male', 'wei', 3, ['tiandu', 're_jiyi'], []],
						rel_wangji: ['male', 'wei', 3, ['re_jinqu', 'qiss'], []],
						rel_chenlin: ['male', 'wei', 3, ['bifa', 're_songci'], []],
						rel_diaochan: ['female', 'qun', 3, ['rel_lijian', 'biyue'], []],
						simashi: ['male', 'wei', 4, ['caoshi', 'moquan'], []],
						zhangxingcai凯旋星花: ['female', 'shu', 7, ['甚贤星彩', '新甚贤星彩', '枪舞星彩'], []],
						zhangwei: ['female', 'shu', 4, ['nsqiyue', 'nsxuezhu'], []],
						masu马谡: ['male', 'shu', 7, ['sanyaosy', 'rezhimanzm', 'xinzhanxz', 'huileihl'], []],
						guohuai郭淮: ['male', 'wei', 8, ['精策郭淮'], []],
						xiaoqiao花纤涟漪: ['female', 'wu', 7, ['天颜', 'hongyan'], []],
						jianggan千帆征战: ['male', 'wei', 7, ['盗书', '伪诚'], []],
						feiyi费祎: ['male', 'shu', 7, ['息生', '谏喻'], []],
						qinmi冠绝天下: ['male', 'shu', 7, ['qmjz谏征', 'qmzd专对', 'qmtb天辩'], []],
						liushan宴请享乐: ['male', 'shu', 7, ['享乐', '交权', '若愚'], ['zhu'], []],
						simazhao温情良缘: ['male', 'wei', 7, ['推弑', '筹伐', '昭然', '成务'], ['zhu'], []],
						wuyi燎原流火: ['male', 'shu', 8, ['奔袭'], []],
						lvkai铁心司南: ['male', 'shu', 7, ['图南', '闭境', '拒南'], []],
						wangyuanji昭苏元心: ['female', 'wei', 7, ['宴戏', '识人'], []],
						caoying魏缨凤鸣: ['female', 'wei', 7, ['曹婴凌人', '曹婴伏间', '曹婴凤鸣'], []],
						simalang着手成春: ['male', 'wei', 7, ['去疾', '郡兵'], []],
						simashi摧坚荡异: ['male', 'wei', 7, ['mocuan謀篡', '景略jl', '荡异'], []],
						yanghuiyu景献皇后: ['female', 'wei', 7, ['弘仪hy', '劝封qf'], []],
						sishi死士: ['male', 'wei', 4, ['死士'], []],
						simashiyanghuiyu司马师羊徽瑜: ['male', 'wei', 7, ['mocuan謀篡', '景略jl', '荡异', '弘仪hy', '劝封qf'], []],
						qinghegongzhu馨香清欢: ['female', 'wei', 7, ['谮构', '长姬'], []],
						zhanghu击艮援懿: ['male', 'wei', 8, ['摧坚cj', '同援'], []],
						yangyan妍芷艳质: ['female', 'wei', 7, ['选备', '娴婉'], []],
						yangzhi人娇如花: ['female', 'wei', 7, ['婉嫕', '埋祸'], []],
						xiangchong奋勇当先: ['male', 'shu', 8, ['固营', '睦阵'], []],
						yuanhuan随车致雨: ['male', 'wei', 7, ['请决', '奉节'], []],
						xiahoulingnv夏侯令女: ['female', 'wei', 7, ['浮萍', '炜烈'], []],
						huzhao胡昭: ['male', 'qun', 7, ['弥笃', '贤望'], []],
						guohuai郭槐: ['female', 'wei', 7, ['哲妇', '遗毒'], []],
						yangyi驭雷伏乱: ['male', 'shu', 7, ['狷狭', '定措'], []],
						zhaozhi赵直: ['male', 'shu', 7, ['占梦', '解卜'], []],
						dengzhong邓忠: ['male', 'wei', 8, ['勘破', '更战'], []],
						xinxianying挥彩辨心: ['female', 'wei', 7, ['z忠j鉴', 'c才s识'], []],
						simayi通达权变: ['male', 'wei', 7, ['鹰视', '雄志', '非臣', '通权'], []],
						xinchang辛敞: ['male', 'wei', 7, ['参鉴', '鉴从'], []],
						liufeng焰魂锁身: ['male', 'shu', 8, ['陷嗣焰魂锁身'], []],
						wangchang王昶: ['male', 'wei', 7, ['开济', '慑叛'], []],
						wuxian设宴留胡: ['female', 'shu', 7, ['移荣', '贵相', '穆荫'], []],
						qinghegongzhu瑞雪芳梅: ['female', 'wei', 7, ['谮构瑞雪芳梅', '长姬瑞雪芳梅'], []],
						zhoucang青龙化力: ['male', 'shu', 8, ['忠勇qlhl'], []],
						xuelingyun缀霞朱颜: ['female', 'wei', 7, ['霞泪', '暗织'], []],
						wangyi为夫守城: ['female', 'wei', 7, ['秘计为夫守城', '贞烈为夫守城'], []],
						zhuling弄潮惊澜: ['male', 'wei', 8, ['急陷', 'zy战意', '决意'], []],
						sunlang慕羽成城: ['male', 'shu', 8, ['铤险', '奔矢'], []],
						caochun虎啸龙渊: ['male', 'wei', 8, ['缮甲厉兵', '虎豹袭术'], []],
						caochun虎啸龙渊zz: ['male', 'wei', 8, ['缮甲厉兵zz', '虎豹袭术zz'], []],
						caoxiu骁勇倾袭: ['male', 'wei', 8, ['倾袭cx', 'qianju'], []],
					},
					translate: {
						liubeiwuyi: '刘备&吴懿',
						sp_heqi: '贺齐',
						xuezongpf: '薛综',
						lingcao破军校尉: '破军校尉',
						buzhi平叛交州: '平叛交州',
						zhuhuan平剿贼寇: '平剿贼寇',
						luji知天之才: '知天之才',
						lukang毁堰破晋: '毁堰破晋',
						heqi津南救援: '津南救援',
						zhuran镇守江陵: '镇守江陵',
						jiangqing从平江东: '从平江东',
						lvdai山林除寇: '山林除寇',
						sunhao翠琉金阙: '翠琉金阙',
						sunshangxiang星流霆击: '星流霆击',
						xushi冰心玉质: '冰心玉质',
						lusu联盟抗魏: '联盟抗魏',
						panshu繁囿引芳: '繁囿引芳',
						bulianshi清神畅情: '清神畅情',
						qilufurongtuan: '泣露芙蓉团',
						fumiantaohuadui: '拂面桃花队',
						panshu江东锦绣: '江东锦绣',
						wanchengfubing皖城府兵: '皖城府兵',
						liuzan高歌猛进: '高歌猛进',
						huanggai炙链困敌: '炙链困敌',
						sunluban沅茝香兰: '沅茝香兰',
						xusheng百里疑城: '百里疑城',
						panjun怀公忘私: '怀公忘私',
						zhouyi剑舞浏漓: '剑舞浏漓',
						chengpu疠火燃战: '疠火燃战',
						lingtong长风破浪: '长风破浪',
						taishici义信天武: '义信天武',
						weilan妫览: '妫览',
						xuyang: '徐阳',
						panzhangmazhong手足破敌: '手足破敌',
						ganying甘瑛: '甘瑛',
						zhugejin文墨为箭: '文墨为箭',
						lukang父志秉承: '父志秉承',
						xielingyu幽鸾皎月: '幽鸾皎月',
						xuezong笔生万物: '笔生万物',
						quanhuijie全惠解: '全惠解',
						sunshangxiang演武试刀: '演武试刀',
						zhouyu天纵奇才: '天纵奇才',
						chengbing五经弼国: '五经弼国',
						zhugeke白浪掀天: '白浪掀天',
						shiyi是仪: '是仪',
						sunhuan威凛沙场: '威凛沙场',
						bulianshi鸾飞凤舞: '鸾飞凤舞',
						zhugekepi: '兴家赤族',
						sundengpi: '少年才俊',
						liuzanjie: '大地主流',
						pangtong送丧归且: '送丧归且',
						chendong如损如篪: '如损如篪',
						panjun摆宴欲诛: '摆宴欲诛',
						yanjun思国前路: '思国前路',
						sunliang谋诛孙綝: '谋诛孙綝',
						qun_sufei: '苏飞',
						wuguotai淑逸闲华: '淑逸闲华',
						zhoufang笺书诱敌: '笺书诱敌',
						gexuan结丹飞升: '结丹飞升',
						panshu潘淑: '潘淑',
						liuzan阵前亢歌: '阵前亢歌',
						lvfan定军先时: '定军先时',
						sunchen孙綝: '孙綝',
						guyong匡弼辅正: '匡弼辅正',
						qiaojiashinv乔家侍女: '乔家侍女',
						daqiao清萧清丽: '清萧清丽',
						zhugeke干略盖世: '干略盖世',
						luyusheng陆郁生: '楚楚菁华',
						fengxi冯熙: '冯熙',
						sufei临岸拜别: '临岸拜别',
						panjun聪察对问: '聪察对问',
						zhuzhi征讨夷越: '征讨夷越',
						wuli污吏: '污吏',
						zhaoyan彩绘芳菲: '彩绘芳菲',
						daxiaoqiao双花并倚: '双花并倚',
						tengfanglan滕芳兰: '滕芳兰',
						sunhanhua挣绽青莲: '挣绽青莲',
						wuyan吾彦: '吾彦',
						luotong辨如悬河: '辨如悬河',
						tengyin滕胤: '滕胤',
						ruiji芮姬: '芮姬',
						fengxi不辱君命: '不辱君命',
						zhangxuan张璇: '张璇',
						zhangyao张媱: '张媱',
						zhouchu英情天逸: '英情天逸',
						wujing助吴征战: '助吴征战',
						luji璇霄寰宇: '璇霄寰宇',
						sunshao清庙之器: '清庙之器',
						qiaoguolao龙虎佳婿: '龙虎佳婿',
						zhoutaigong周太公: '周太公',
						zhanghong张纮: '张纮',
						zhangzhao神张昭: '神张昭',
						huanggai勇力精锐: '勇力精锐',
						zhoutai血战不屈: '血战不屈',
						luxun烈火炽天: '烈火炽天',
						tengfanglan脂车香姝: '脂车香姝',
						lusu周济万民: '周济万民',
						lukai陆凯: '陆凯',
						ruiji玉芮花意: '玉芮花意',
						zhangyao姝姿绰约: '姝姿绰约',
						zhangxuan姝颜绰约: '姝颜绰约',
						liuzan留略: '留略',
						zhuran临沮截击: '临沮截击',
						xusheng馈粽袍泽: '馈粽袍泽',
						yuanji袁姬: '袁姬',
						sunlingluan孙翎鸾: '孙翎鸾',
						sufei遏浪惊涛: '遏浪惊涛',
						dagongche大攻车: '大攻车',
						zhangfen天工神机: '天工神机',
						lingtong血涕津渚: '血涕津渚',
						jxz_hansui: '韩遂',
						huaxiongwang: '王华雄',
						lijueguosi: '李傕郭汜',
						穷兵黩武: '穷兵黩武',
						wangjisp: 'sp王基',
						diaochanyuhun: '驭魂千机',
						xushujiuxin: '徐庶',
						liruxinjiu: '李儒',
						caiwenjixinjiu: '蔡文姬',
						huangyueyingpi: '神黄月英',
						sunshangxiangjie: '孙尚香',
						caopijie: '魏王称帝',
						ganningjie: '锦帆游侠',
						panfengpi: '潘风',
						zhugejinpi: '谋定全局',
						liuyepi: '刘晔',
						zhugeliangpi: '匡扶蜀汉',
						niujin: '牛金',
						madaipi: '临危受命',
						fuhuanghoujiu: '伏皇后',
						jiangweisp: '姜维',
						pangdepi: '尽忠殉节',
						zhangchunhua1: '瑶台花容',
						zhonghuipi: '傲睨一世',
						sunhaopi: '孙皓',
						xiliangjingbing: '西凉精兵',
						jiangwei护战天水: '护战天水',
						panfeng阵前威豪: '阵前威豪',
						jiling仲家武锐: '仲家武锐',
						guonvwang郭女王: '雍容尊雅',
						huangyueying青云鸢飞: '青云鸢飞',
						caiwenji抚弦绘黛: '抚弦绘黛',
						duanwei凉国之英: '凉国之英',
						xuchu咆虎熔兵: '咆虎熔兵',
						huangyueying智心巧手: '智心巧手',
						xiahoujie夏侯杰: '夏侯杰',
						zhaozhong掷金拒人: '掷金拒人',
						xiahouen夏侯恩: '夏侯恩',
						guanyuzhangfei关羽张飞: '关羽张飞',
						mamidi马日磾: '马日磾',
						kongxiu孔秀: '孔秀',
						hanfu韩福: '韩福',
						wangzhi王植: '王植',
						huban胡班: '胡班',
						qinqi秦琪: '秦琪',
						mengtan孟坦: '孟坦',
						niujin轻骑饵敌: '轻骑饵敌',
						zangba横行江陵: '横行江陵',
						caimaozhangyun乘雷潜狡: '乘雷潜狡',
						simafu司马孚: '司马孚',
						xiahoumao夏侯楙: '夏侯楙',
						caimao蔡瑁: '蔡瑁',
						mateng马足龙沙: '马足龙沙',
						niufu牛辅: '牛辅',
						zhaorong赵融: '赵融',
						duanwei执剑昆吾: '执剑昆吾',
						caozhi玉露清辉: '玉露清辉',
						longyufei龙羽飞: '龙羽飞',
						zhanghua张华: '张华',
						jinlong金龙: '金龙',
						lijue枭魔乱世: '枭魔乱世',
						luoxian罗宪: '罗宪',
						yanghu公直规行: '公直规行',
						guanyu冠绝武义: '冠绝武义',
						wanglang骧龙御宇: '骧龙御宇',
						dongzhuo洛阳一炬: '洛阳一炬',
						zhoushan周善: '周善',
						qifudeng祈福灯: '祈福灯',
						fulong福龙: '福龙',
						shuilong水龙: '水龙',
						huolong火龙: '火龙',
						rel_xunyu: 'RE荀彧',
						rel_zhugeke: 'RE诸葛恪',
						rel_guojia: 'RE郭嘉',
						rel_wangji: '著立功勋',
						rel_chenlin: 'RE陈琳',
						rel_diaochan: 'RE貂蝉',
						simashi: '司马师',
						zhangxingcai凯旋星花: '凯旋星花',
						zhangwei: '张葳',
						masu马谡: '才器过人',
						guohuai郭淮: '见盔心伤',
						xiaoqiao花纤涟漪: '花纤涟漪',
						jianggan千帆征战: '千帆征战',
						feiyi费祎: '费祎',
						qinmi冠绝天下: '冠绝天下',
						liushan宴请享乐: '宴请享乐',
						simazhao温情良缘: '温情良缘',
						wuyi燎原流火: '燎原流火',
						lvkai铁心司南: '铁心司南',
						wangyuanji昭苏元心: '昭苏元心',
						caoying魏缨凤鸣: '魏缨凤鸣',
						simalang着手成春: '着手成春',
						simashi摧坚荡异: '摧坚荡异',
						yanghuiyu景献皇后: '景献皇后',
						sishi死士: '死士',
						simashiyanghuiyu司马师羊徽瑜: '司马师羊徽瑜',
						qinghegongzhu馨香清欢: '馨香清欢',
						zhanghu击艮援懿: '击艮援懿',
						yangyan妍芷艳质: '妍芷艳质',
						yangzhi人娇如花: '人娇如花',
						xiangchong奋勇当先: '奋勇当先',
						yuanhuan随车致雨: '随车致雨',
						xiahoulingnv夏侯令女: '夏侯令女',
						huzhao胡昭: '胡昭',
						guohuai郭槐: '郭槐',
						yangyi驭雷伏乱: '驭雷伏乱',
						zhaozhi赵直: '赵直',
						dengzhong邓忠: '邓忠',
						xinxianying挥彩辨心: '挥彩辨心',
						simayi通达权变: '通达权变',
						xinchang辛敞: '辛敞',
						liufeng焰魂锁身: '焰魂锁身',
						wangchang王昶: '王昶',
						wuxian设宴留胡: '设宴留胡',
						qinghegongzhu瑞雪芳梅: '瑞雪芳梅',
						zhoucang青龙化力: '青龙化力',
						xuelingyun缀霞朱颜: '缀霞朱颜',
						wangyi为夫守城: '为夫守城',
						zhuling弄潮惊澜: '弄潮惊澜',
						sunlang慕羽成城: '慕羽成城',
						caochun虎啸龙渊: '虎啸龙渊',
						caochun虎啸龙渊zz: '虎啸龙渊',
						caoxiu骁勇倾袭: '骁勇倾袭',
						zr_fanghun: '芳魂',
						zr_fanghun_info: '当你使用【杀】造成伤害后,你获得1个<梅影>标记;你可以移去1个<梅影>标记来发动<龙胆>并摸一张牌',
						zr_fanghun2: '芳魂',
						zr_fanghun2_info: '',
						zr_fanghun3: '芳魂',
						zr_fanghun3_info: '',
						zr_longdan: '龙胆',
						zr_longdan_info: '',
						zr_fuhan: '扶汉',
						zr_fuhan_info: '限定技,回合开始时,你可以移去所有<梅影>标记,随机观看五名未登场的蜀势力角色,将武将牌替换为其中一名角色,并将体力上限数调整为本局游戏中移去<梅影>标记的数量,若你是体力值最低的角色,你回复1点体力',
						hq_qizhou: '绮胄',
						hq_qizhou_info: '锁定技,若你装备区里牌的花色数不少于:1,你获得技能<马术>;2,你获得技能<英姿>; 3,你获得技能<短兵>; 4,你获得技能<奋威>',
						hq_qizhou2: '绮胄',
						hq_qizhou2_info: '',
						hq_shanxi: '闪袭',
						hq_shanxi_info: '出牌阶段,你可以弃置攻击距离内一名角色一张牌,如果弃置的牌是【闪】,你观看目标的手牌,否则目标观看你的手牌,每回合限一次',
						yingzihq: '英姿',
						yingzihq_info: '摸牌阶段,你可以额外摸一张牌',
						kz_xiashu: '下书',
						kz_xiashu_info: '出牌阶段开始时,你可以将所有手牌交给一名其他角色,该角色亮出任意数量的手牌(至少一张),令你选择一项:1.获得其亮出的手牌;2.获得其未亮出的手牌',
						kz_kuanshi: '宽释',
						kz_kuanshi_info: '结束阶段,你可以选择一名角色.直到你的下回合开始,该角色下一次受到超过1点的伤害时,防止此伤害,你跳过下个回合的摸牌阶段',
						kz_kuanshi2: '宽释',
						kz_kuanshi2_info: '',
						kz_kuanshi3: '宽释',
						kz_kuanshi3_info: '',
						kz_kuanshi4: '宽释',
						kz_kuanshi4_info: '',
						kz_kuanshi5: '宽释',
						kz_kuanshi5_info: '',
						mz_fuman: '抚蛮',
						mz_fuman_info: '出牌阶段,你可以将一张【杀】交给一名本回合未获得过<抚蛮>牌的其他角色,其于下个回合结束之前使用<抚蛮>牌时,你摸一张牌',
						mz_fuman2: '抚蛮',
						mz_fuman2_info: '',
						dy_bingzheng: '秉正',
						dy_bingzheng_info: '出牌阶段结束时,你可以令手牌数不等于体力值的一名角色弃置一张手牌或摸一张牌.若其手牌数等于体力值,你摸一张牌,且可以交给该角色一张牌',
						dy_sheyan: '舍宴',
						dy_sheyan_info: '当你成为一张普通锦囊牌(【借刀杀人】除外)的目标时,你可以令一名其他角色也成为此牌的目标',
						hq_duanbing: '短兵',
						hq_duanbing_info: '你的杀可以额外指定一个距离为1的目标',
						hq_duanbing2: '短兵',
						hq_duanbing2_info: '',
						结训: '结训',
						结训_info: '结束阶段令一名角色弃置等同于轮数的牌',
						复难: '复难',
						复难_info: '复难强化版加摸两张牌',
						戒训: '戒训',
						戒训_info: '结束阶段,你可令一名其他角色摸等同于场上红色牌数的牌,弃置X张牌(X为此前该技能发动过的次数).若有角色因此法弃置了所有牌,则你失去<诫训>,你发动<复难>时,无须令其获得你使用的牌',
						独进: '独进',
						独进_info: '回合开始,摸牌,回合结束阶段,你可以额外摸X+1张牌(X为你装备区里牌数的两倍)',
						定叛: '定叛',
						定叛_info: '国战限制四次,你可以令一名装备区里有牌的角色摸一张牌,其选择一项:1.令你弃置其装备区里的一张牌;2.获得其装备区里的所有牌,若如此做,你对其造成1点伤害',
						弘德: '弘德',
						弘德_info: '当你一次获得或失去至少两张牌后,你可以摸一张牌令一名其他角色摸一张牌',
						奋励: '奋励',
						奋励_info: '若你的手牌数为全场最多,你可以跳过摸牌阶段并摸一张牌;若你的体力值为全场最多,你可以跳过出牌阶段并摸一张牌;若你的装备区里有牌且数量为全场最多,你可以跳过弃牌阶段并摸一张牌',
						平寇: '平寇',
						平寇_info: '回合结束时,你可以对至多X名其他角色各造成1点伤害(X为你本回合跳过的阶段数)',
						怀橘: '怀橘',
						怀橘_info: '锁定技,游戏开始时,你获得6个<橘>标记.(有<橘>的角色受到伤害时,防止此伤害,移去一个<橘>;有<橘>的角色摸牌阶段额外摸2张牌)',
						_怀橘: '怀橘',
						_怀橘_info: '有<橘>的角色受到伤害时,防止此伤害,移去一个<橘>',
						_怀橘1: '怀橘',
						_怀橘1_info: '有<橘>的角色摸牌阶段额外摸2张牌',
						遗礼: '遗礼',
						遗礼_info: '出牌阶段开始时,你可以回复一点体力或移去一个<橘>,令一名其他角色获得一个<橘>',
						整论: '整论',
						整论_info: '你可以跳过判定阶段获得一个<橘>',
						决堰: '决堰',
						决堰_info: '你可以摸两张牌回复一点体力,执行对应一项:建武,本回合内你可以多使用三张【杀】;忠勤,摸三张牌,本回合手牌上限+3;驻陵,本回合你使用的牌无距离限制;谋策,本回合获得技能集智',
						jzlk: '集智',
						jzlk_info: '当你使用锦囊牌时,你可以摸一张牌',
						破势: '破势',
						破势_info: '准备阶段开始时,你增加一点体力上限并获得技能<怀柔>',
						破势_append: '怀柔:出牌阶段,你可以重铸装备牌',
						怀柔: '怀柔',
						怀柔_info: '出牌阶段,你可以重铸装备牌(摸两张牌)',
						谦节: '谦节',
						谦节_info: '锁定技,你不能被横置,且不能成为延时类锦囊或其他角色拼点的目标,并摸一张牌',
						qqwz锐樾: '锐樾',
						qqwz锐樾_info: '你每使用一张装备牌,你随机装备一件装备(每回合限3次),你的手牌上限,摸牌数量,使用杀的次数+x(x=你装备区的牌数)',
						闪贺袭齐: '闪袭',
						闪贺袭齐_info: '出牌阶段,你可以弃置攻击距离内一名角色一张牌,如果弃置的牌是【闪】,你观看目标的手牌,否则目标观看你的手牌,每回合限一次',
						短贺兵齐: '短兵',
						短贺兵齐_info: '你使用【杀】可以多选择1名距离为1的角色为目标,触发此效果你可以摸2张牌回复一点体力',
						胆守: '胆守',
						胆守_info: '当一名角色成为牌的目标或受到伤害时你可摸一张牌并终止所有结算结束当前回合',
						尚义: '尚义',
						尚义_info: '一名角色出牌阶段限开始时,你可以令一名其他角色观看你的手牌.若如此做,你可以观看其手牌并可以弃置其中的一张黑色牌并使其失去一点体力',
						鸟翔: '鸟翔',
						鸟翔_info: '出牌阶段限一次,你可以观看一名其他角色的手牌.若其中有【杀】,你弃置其一张手牌,否则,你视为对其使用了一张雷【杀】',
						勤国: '勤国',
						勤国_use: '勤国',
						勤国_lose: '勤国',
						勤国_info: '一名角色使用装备牌后可视为对一名角色使用一张杀且可回复一点体力',
						仇海: '仇海',
						仇海_info: '锁定技,当你每次造成伤害时,若你手牌数大于体力值,此伤害+1',
						归命: '归命',
						归命_info: '锁定技,你将残蚀描述中的<已受伤角色>改为<已受伤角色或其他吴势力角色>',
						残蚀: '残蚀',
						残蚀2: '残蚀',
						残蚀_info: '摸牌阶段开始时,你可以改为摸2加x张牌(x为已受伤的角色数),若如此做,当你与此回合内使用基本牌或锦囊牌时,你可令一名角色弃置一张牌',
						枭武姬: '枭武姬',
						姻缘亲: '姻缘亲',
						枭武姬_info: '每当你失去装备区的一张牌后,你可以摸3张牌',
						姻缘亲_info: '出牌阶段限一次,你摸两张手牌并选择一名角色,你与其各回复一点体力',
						问卦: '问卦',
						问卦_info: '一名角色的回合开始前,你可令当前角色获得一名角色一张牌,其与你各摸一张牌',
						伏诛: '伏诛',
						伏诛_info: '一名角色的结束阶段,你可以视为使用等同于牌堆数量的【杀】除非该角色阵亡',
						好施: '好施',
						好施_info: '一名角色摸牌阶段,你可以令其额外摸两张牌,其必须将一半(向上取整)的手牌交给手牌数最少的一名角色',
						缔盟: '缔盟',
						缔盟_info: '出牌阶段,你可以选择两名角色,交换他们的手牌,每回合限一次',
						wei威yi仪: '威仪',
						wei威yi仪_info: '当有角色受到伤害后,你可选择:①其失去1点体力.②其回复1点体力',
						jin锦zhi织: '锦织',
						jin锦zhi织2: '锦织',
						jin锦zhi织_info: '回合开始和结束阶段你可弃置一张基本牌视为你对一名角色使用一张无距离限制的顺手牵羊',
						定心: '定心',
						定心_info: '出牌阶段,你可令一名手牌数少的角色获得另一名手牌数多的角色所有手牌,你摸三张牌回复一点体力',
						追忆: '追忆',
						追忆_info: '你死亡时或回合开始时,可以令一名角色摸三张牌,令其回复1点体力',
						qilu泣露: '泣露',
						qilu泣露_info: '出牌阶段限一次,你可令一名手牌数少的角色获得另一名手牌数多的角色一张牌,若此牌颜色为黑色你摸一张牌视为对所有敌方角色使用一张万箭齐发',
						fumian拂面: '拂面',
						fumian拂面_info: '出牌阶段限一次,你可令一名手牌数少的角色获得另一名手牌数多的角色一张牌,若此牌颜色为红色你摸一张牌视为对所有敌方角色使用一张杀(不计入出牌阶段限制)',
						心忆: '心忆',
						心忆_info: '回合开始阶段,召唤士兵泣露芙蓉团和拂面桃花队与你协同作战,失去此技能',
						weiyi威仪: '威仪',
						weiyi威仪_info: '当有角色受到伤害后,你可选择:①其失去1点体力并选择弃置两张牌.②其回复1点体力并摸两张牌',
						jinzhi锦织: '锦织',
						jinzhi锦织2: '锦织',
						jinzhi锦织_info: '回合开始和结束阶段你可弃置一张基本牌视为你对一名角色使用一张无距离限制的顺手牵羊并摸两张牌',
						府兵: '府兵(杀)',
						府兵2: '府兵(酒)',
						府兵3: '府兵(桃)',
						府兵_info: '出牌阶段各限一次可一张牌当做杀/酒/桃使用并摸一张牌(杀)',
						府兵2_info: '出牌阶段各限一次可一张牌当做杀/酒/桃使用并摸一张牌(酒)',
						府兵3_info: '出牌阶段各限一次可一张牌当做杀/酒/桃使用并摸一张牌(桃)',
						召府: '召府',
						召府_info: '回合开始阶段,召唤两名皖城府兵与你协同作战,失去此技能',
						力激: '力激',
						力激_info: '一名角色失去区域内牌后若进入过弃牌堆,你获得等量<力>标记,你可发动力标记数除以四向下取整次力激(选择一名角色对其造成一点伤害)',
						lz奋音: '奋音',
						lz奋音_info: '在你的回合,当你失去一次性失去一张牌时(多于1张不触发),若此牌颜色与你上一次失去牌的颜色不同你可摸一张牌,对一名角色造成一点伤害',
						苦肉rekrhg: '苦肉',
						诈降zxhg: '诈降',
						诈降zxhg2: '诈降',
						苦肉rekrhg_info: '出牌阶段限2次,你可以弃置一名角色一张牌,令一名角色失去1点体力',
						诈降zxhg_info: '锁定技 每当一名角色失去体力后,你摸三倍该角色流失体力数张牌.若此时是你的出牌阶段,则直到回合结束,你使用【杀】无距离限制且不能被【闪】响应,你可以额外使用任意张【杀】',
						谮毁ch: '谮毁',
						谮毁ch_info: '当你使用【杀】或锦囊牌或黑色牌指定唯一目标时,你可令可以成为此牌目标的另一名其他角色交给你一张牌并成为此牌的使用者并成为此牌的额外目标',
						骄矜jj: '骄矜',
						骄矜jj_info: '每当你受到一名角色造成的伤害时,你可以弃置该角色一张牌,若为装备牌该角色选择弃置等量牌失去等量体力,无论该牌为何种类型均防止此次伤害',
						魄軍: '魄軍',
						魄軍1_info: '当你的【杀】造成伤害后,可以令其将武将牌翻面',
						魄軍1: '魄軍',
						魄軍_info: '破军弃牌加伤害',
						魄軍13: '魄軍',
						聪察: '聪察',
						聪察_info: '一名角色回合结束阶段你可令其摸两张牌执行一个额外的出牌阶段',
						公清: '公清',
						公清_info: '锁定技.当你受到伤害时,若伤害来源的攻击范围:<3,则你令此伤害的数值减为0.>3,你令此伤害+1,并令伤害来源受到等量伤害',
						潘濬不臣: '不臣',
						潘濬不臣2: '不臣',
						潘濬不臣_info: '选将阶段随机势力范围(蜀,吴)的一个势力,回合开始或有其他角色濒死时可变更势力(非国战模式改为变更身份)',
						逐寇: '逐寇',
						逐寇_info: '当出牌阶段限一次你可以对一到两名其他角色各造成一点伤害,选择完成后你摸X张牌(X为你体力上限)',
						氓情: '氓情',
						氓情_info: '回合开始前,你加3点体力上限并回复3点体力,获得<玉殒>',
						玉殒: '玉殒',
						玉殒_info: '出牌阶段开始时你可执行1.摸两张牌;2.对一到三名其他角色造成1点伤害;3.本回合手牌上限加体力上限数;4.获得一到两名其他角色区域里的一张牌;5.令一到两名角色摸其体力上限数的牌',
						醇醪: '醇醪',
						醇醪_info: '一名角色结束阶段开始时,你可以将至少一张手牌置于你的武将牌上,称为<醇醪>.当一名角色处于濒死状态时,你可以移去一张<醇醪>,视为该角色使用一张【酒】',
						醇醪2: '醇醪',
						醇醪2_info: '',
						疠火: '疠火',
						疠火_info: '你受到伤害后可对其反弹2点神圣火焰伤害并摸该角色对你造成伤害时的体力值的牌,你免疫受到的火焰伤害',
						疠火2: '疠火',
						旋浪: '旋浪',
						旋浪_info: '当你失去装备区里的牌时,或于弃牌阶段弃置了两张或更多的手牌后,你可以依次弃置一至两名其他角色的共计两张牌,并可摸两张牌对一名角色造成一点伤害',
						勇破: '勇破',
						勇破_info: '出牌阶段,你可以摸两张牌并依次移动场上至多三张装备牌',
						风略: '风略',
						风略_info: '回合开始阶段,召唤士兵珞虎摧阵营和磐兕威义军与你协同作战,失去此技能',
						义笃: '义笃',
						义笃1: '义笃',
						义笃_info: '出牌阶段限一次,你可令所有其他角色与最近距离的一名角色拼点,若其赢你可选择一到两名角色视为对其使用一张杀,若其没赢可令其失去一点体力,若其不能与之拼点执行赢的效果.每当一名角色使用基本牌发起拼点时,你获得双方拼点的牌',
						篡肆: '篡肆',
						篡肆_info: '一名角色的回合结束阶段,你可令其失去一点体力,你进行一次判定若为黑色你摸两张牌,否则你失去一点体力',
						祸卜: '祸卜',
						祸卜_info: '每名角色回合限一次,你攻击范围内的一名其他角色受到伤害后,你可令其展示手牌,你选择其中的一张牌弃置,视为对其使用一张杀',
						阳军: '阳军',
						阳军_info: '出牌阶段限一次,你可弃置一名角色其体力上限数的牌,对其造成两点伤害,令其翻面',
						夺刀: '夺刀',
						夺刀_info: '你受到伤害后可摸一张牌,获得牌堆内有的两张同名武器牌,若此伤害为杀造成的伤害且有伤害来源且伤害来源有武器牌你可获得之',
						暗箭: '暗箭',
						暗箭_info: '锁定技,当造成伤害时,若你不在目标角色攻击范围内,其受到此杀造成的伤害+1,你可视为对其使用一张万箭齐发(每回合限一次),可再弃置一张武器牌令此伤害加该武器牌攻击范围数',
						若袭: '若袭',
						若袭_info: '出牌阶段限一次,你可观看并弃置一名角色四张牌,增加一点体力上限,回复一点体力摸4张牌',
						兰兴: '兰兴',
						兰兴2: '兰兴',
						兰兴_info: '每轮限一次,一名角色出牌阶段开始时,你可令其摸2张牌,获得其全部牌',
						zhugejin弘援: '弘援',
						zhugejin弘援_info: '一名角色摸牌阶段可令其额外摸一张牌,若如此做,所有友方角色摸一张牌',
						zhugejin缓释: '缓释',
						zhugejin缓释_info: '一名角色判定时,你可选择一名角色令判定角色观看并选择其的一张牌代替之',
						zhugejin明哲: '明哲',
						zhugejin明哲_info: '每当你失去一张红色牌你摸两张牌,回合内限四次,回合外不限次数',
						决堰jy: '决堰',
						决堰jy_info: '你可以摸两张牌回复一点体力,执行对应一项:建武,本回合内你可以多使用四张【杀】;忠勤,摸四张牌,本回合手牌上限+4;驻陵,本回合你使用的牌无距离限制;谋策,本回合获得技能集智',
						集智lkjz: '集智',
						集智lkjz_info: '当你使用锦囊牌时,你可以摸一张牌',
						破势ps: '破势',
						破势ps_info: '准备阶段开始时,你增加一点体力上限并获得技能<怀柔>',
						破势ps_append: '怀柔:出牌阶段,你可以重铸装备牌',
						怀柔hr: '怀柔',
						怀柔hr_info: '出牌阶段,你可以重铸装备牌(摸两张牌)',
						谦节qj: '谦节',
						谦节qj_info: '锁定技,你不能被横置,且不能成为延时类锦囊或其他角色拼点的目标,并摸2张牌',
						秉柔: '秉柔',
						秉柔_info: '回合开始阶段,召唤陆逊×2与你协同作战,失去此技能',
						元嫡: '元嫡',
						元嫡_info: '一名角色使用牌后,你可观看并弃置一名角色一张牌,并可令一名角色与你各摸一张牌',
						心幽: '心幽',
						心幽_info: '出牌阶段限一次,你可将体力回复至体力上限,摸你体力上限数的牌,选择一名角色,令其弃置两张牌失去一点体力',
						funan复难: '复难',
						funan复难_info: '每名角色回合限3次,一名角色使用牌时,你可选择一名角色,令其获得一张与你使用牌同名的牌,其摸一张牌你摸一张牌,可再选择一名角色,令其弃置一张与你使用牌类别相同的牌',
						jiexun诫训: '诫训',
						jiexun诫训_info: '回合结束阶段,你可选择一名角色,令其摸场上全部角色红色牌和判定区红色牌数之和的牌,并可再选择一名角色,令其弃置你发动此技能次数的牌',
						慧淑: '慧淑',
						慧淑2: '慧淑',
						慧淑_info: '摸牌阶段结束时,你可以摸3张牌.若如此做,你于本回合使用牌后有0.5概率从游戏外获得一张牌堆或弃牌堆已有的随机牌名的锦囊牌',
						易数: '易数',
						易数3: '易数',
						易数_info: '锁定技,当你于回合外失去牌结束后,下个回合额外摸牌数+2,并从游戏外获得一张牌堆或弃牌堆已有的随机牌名的基本牌',
						离宫: '离宫',
						离宫_info: '准备阶段,你加1点体力上限并回复1点体力,摸两张牌,随机四个吴国女性武将作为你的随从召唤之,失去此技能,你可从全部东吴女武将中选择两名武将组成双将来替换你的武将牌(随从和替换的武将牌全惠解除外)',
						结姻ywsd: '结姻',
						结姻ywsd_info: '<span style="color: #98FB98">出牌阶段限两次,你可以选择一名角色,你与该角色各摸两张牌,从游戏外随机获得两张装备牌,最后分别回复1点体力.</span>',
						枭姬ywsd: '枭姬',
						枭姬ywsd_info: '<span style="color: #98FB98">每当你使用或失去一张装备牌后,你摸三张牌.</span>',
						姻礼ywsd: '姻礼',
						姻礼ywsd_info: '<span style="color: #98FB98">每当一名角色失去牌后若其中包含装备牌,你可以从游戏外随机获得2×其失去的牌中包含的装备牌数张装备牌.</span>',
						yingzi天纵奇才: '英姿',
						yingzi天纵奇才_info: '<span style="color: #darkgreen">摸牌阶段你可额外摸5+当前游戏轮数的牌,你增加等量手牌上限</span>',
						fanjian天纵奇才: '反間',
						fanjian天纵奇才_info: '出牌阶段限两次,你可选择一名其他角色,从黑色或红色选择一项,摸其的你选择颜色的牌数+1张牌,增加等量护甲,其弃置你选择颜色的全部牌,并失去一点体力',
						经造: '经造',
						经造_info: '出牌阶段限3次,你可展示3+敌方角色数张牌,可选择牌名各不相同的牌获得之,可选择一名角色其弃置一张与所展示牌同名的牌',
						恩遇: '恩遇',
						恩遇2: '恩遇',
						恩遇_info: '锁定技,当一名角色使用指定你为目标的基本牌后,你免疫你下次受到的伤害',
						才黩: '才黩',
						才黩2: '才黩',
						才黩_info: '当你需要使用或打出一张基本牌时,你可以摸一张牌观看牌堆顶的八张牌.若你观看的牌中有此牌,你可以使用打出之',
						傲武: '傲武',
						傲武_info: '出牌阶段,你可对一名其他角色造成1点伤害(X为该角色的体力值),并令该角色弃置X张牌,其有0.1+其损失体力值*0.1概率失去一点体力',
						兵黩: '兵黩',
						兵黩_info: '出牌阶段限一次,你可选择一项军法对所有敌方角色执行,你摸敌方角色数两倍的牌',
						榱椽: '榱椽',
						榱椽_info: '出牌阶段限一次,你可令一名角色装备牌堆内的一张牌,摸6-其装备区牌数张牌',
						正序: '正序',
						正序_info: '每名角色回合限一次,你失去牌后,摸2+你失去牌数张牌,并进入潜行状态直到该回合结束后',
						佐谏: '佐谏',
						佐谏_info: '出牌阶段后,你可令所有友方有装备牌的角色摸一张牌获得一张基本牌,所有敌方装备区牌数少于你的角色弃置一张牌失去一点体力',
						逆击: '逆击',
						逆击2: '逆击',
						逆击_info: '当你成为基本牌或锦囊牌的目标结束后,你可摸2张牌.结束阶段,你可选择一名有牌的角色,获得其随机一张牌的复制,并可使用一张牌',
						鸾飞凤舞安恤: '鸾恤',
						鸾飞凤舞安恤_info: '出牌阶段限3次,你可选择两名角色,令一名角色获得另一名角色一张牌,根据被获得牌的颜色执行不同效果:若被获得牌为红色,你增加1点体力上限,并回复1点体力,你摸1+你点数为6的牌数张牌,若被获得牌为黑色,你摸一张牌,后选择的目标角色失去1点体力',
						鸾飞凤舞追忆: '鸾忆',
						鸾飞凤舞追忆_info: '你的回合开始时或你死亡时,你可令一名角色摸3张牌回复一点体力',
						kuangbipi: '匡弼',
						kuangbipi_info: '出牌阶段限一次,你可以选择一名有牌的其他角色,该角色将其一至三张牌置于你的武将牌上.若如此做,你的下回合开始时,你获得武将牌上的所有牌,其摸等量的牌',
						kuangbipf: '匡弼',
						kuangbipf_info: '出牌阶段限一次,你可以选择一名有牌的其他角色,该角色将其一至三张牌置于你的武将牌上.若如此做,你的下回合开始时,你获得武将牌上的所有牌,其摸等量的牌',
						tianaopi: '天傲',
						tianaopi_info: '当你需要使用或打出一张基本牌时,你可以观看牌堆顶的四张牌.若你观看的牌中有此牌,你可以使用打出之',
						qiongbingpif: '穷兵',
						qiongbingpif_info: '出牌阶段,你可以弃置X张牌对你攻击范围内的一名其他角色造成1点伤害(X为该角色的体力值).若你以此法令该角色进入濒死状态,则濒死状态结算后你于本回合不能再发动穷兵',
						歌亢: '歌亢',
						歌亢_info: '你的回合内,当你使用牌时,若此牌与你于此回合内使用的上一张牌颜色不同,则你可以摸一张牌,每回合最多发动3次',
						过论: '过论',
						过论_info: '出牌阶段限两次,你可以展示一名其他角色的手牌,展示你的一张牌.你与其交换这两张牌,展示的牌点数更小的角色摸两张牌',
						展骥: '展骥',
						展骥_info: '锁定技,你的出牌阶段内,当你因摸牌且不是因为此技能效果获得牌时,你额外摸2张牌',
						送丧: '送丧',
						送丧_info: '当一名角色回合结束时,你可以增加一点体力上限并回复一点体力;获得技能〖展骥〗',
						qqwz索舟: '索舟',
						qqwz索舟_info: '你的回合开始时,若你处于连环状态你回复1点体力摸一张牌,你处于连环状态时免疫物理伤害且受到的属性伤害+1',
						qqwz锋戮: '锋戮',
						qqwz锋戮_info: '你的回合结束时你令全场敌方进入连环状态,当敌方武将受伤时若其处于连环状态其额外流失2点体力',
						qqwz微审: '微审',
						qqwz微审_info: '当你造成伤害后,若你已受伤且没有手牌则你进行一个额外回合,当你成为杀得目标时你流失1点体力对目标造成1点真实伤害',
						qqwz斥公: '斥公',
						qqwz斥公_info: '其他友方角色出牌阶段结束时,若其体力值不等于你或其拥有手牌,你与其一起摸2张牌回复1点体力',
						观潮: '观潮',
						观潮_info: '出牌阶段开始时,你可以选择一项直到回合结束:1.当你使用牌时,若你此阶段使用过的所有牌的点数为递增,你摸一张牌;2.当你使用牌时,若你此阶段使用过的所有牌的点数为递减,你摸一张牌',
						逊贤: '逊贤',
						逊贤_info: '每名角色的回合限2次,当你使用或打出的牌结算完成,即将置入弃牌堆时,你可以将之交给一名角色',
						困渊: '困渊',
						困渊_info: '出牌阶段开始时,你可以获得攻击范围内所有角色的各一张牌',
						请征: '请征',
						请征_info: '出牌阶段限一次,你可以弃置一名其他角色的一张牌,若此牌为非装备牌,你可以将一张手牌当此牌使用;否则你弃置一张牌',
						连翩: '连翩',
						连翩_info: '当你使用牌时,你可以摸一张牌,若目标不为你,你可以将此牌交给一名其他角色并摸一张牌.(每回合限制4次)',
						立军: '立军',
						立军_info: '当你成为牌的效果目标时,你可以弃置一张牌令此效果无效',
						sl: '立军',
						sl_info: '',
						ji_ganlu: '甘露',
						ji_ganlu_info: '出牌阶段限2次,你可以选择两名角色,交换这两名角色装备区内的牌',
						ji_buyi: '补益',
						ji_buyi_info: '当有角色进入濒死状态时,你可以展示该角色区域内的一张牌:若此牌不为【桃园结义】,则该角色回复体力至体力上限,你与其摸X张牌.(X为其以此法回复的体力值)',
						断发: '断发',
						断发_info: '出牌阶段,你可以弃置任意张黑色牌,摸双倍数量的牌.(每回合内限X张,X为你的体力上限.)',
						诱敌: '诱敌',
						诱敌_info: '结束阶段开始时,你可以弃置一名其他角色的一张手牌,你摸一张牌,并你获得该角色的一张牌',
						炼化: '炼化',
						炼化_info: '你的回合外,每当有其他角色受到伤害后,你获得一个<丹血>标记(该角色与你阵营一致时为红色,不一致为黑色)直到你的准备阶段开始.准备阶段,根据你获得的<丹血>标记的数量和颜色,你获得相应的牌(随机花色点数)以及相应技能直到回合结束.〖英姿〗和【桃】,〖观星〗和【无中生有】;〖直言〗和【顺手牵羊】;【杀】、【决斗】和〖攻心〗',
						札符: '札符',
						札符_info: '	出牌阶段,你可以选择一名其他角色,令其获得一枚「札」.有「札」的角色弃牌阶段开始时,若其手牌数大于1,其移去「札」并选择保留一张手牌,将其余的手牌交给你',
						guangxxing: '观星',
						guangxxing_info: '回合开始阶段你可将牌堆顶x张牌置于牌堆顶或牌堆底(x为场上角色数)',
						gonggxxin: '攻心',
						gonggxxin_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,你可以展示其中一张♥️️牌,选择一项:1.弃置此牌;2.将此牌置于牌堆顶',
						gonggxxin_discard: '弃置',
						gonggxxin_top: '牌堆顶',
						zhigxyan: '直言',
						zhigxyan_info: '结束阶段,你可以令一名角色摸一张牌并展示之,若此牌为装备牌,则该角色使用此牌,其回复1点体力',
						reyinggxzi: '英姿',
						reyinggxzi_info: '锁定技,摸牌阶段,你额外摸一张牌;你的手牌上限为X(X为你的体力上限)',
						威仪: '威仪',
						威仪_info: '当有角色受到伤害后,你可选择:①若其体力值不小于你,则其失去1点体力.②若其体力值不大于你且其已受伤,则其回复1点体力',
						锦织: '锦织',
						锦织2: '锦织',
						锦织_info: '回合开始阶段你可弃置一张基本牌视为你对一名角色使用一张无距离限制的顺手牵羊',
						战歌: '战歌',
						战歌_info: '一名角色出牌阶段结束可对一名角色造成x点伤害,x为该角色该回合置入弃牌堆牌堆数量,一名角色于出牌使用牌置入弃牌堆后若此牌与上一张置入弃牌堆的牌不同你可摸一张牌回复一点体力,使用技能后随机播放战歌<傲视群雄><天堂><长歌一曲>',
						gz典财: '典财',
						gz典财_info: '一名角色的出牌阶段结束时,若你手牌数不等于体力上限,则你可以摸等于你体力上限张数的牌',
						gz调度: '调度',
						gz调度_info: '友方角色使用装备牌时,其可以令其摸两张牌回复一点体力;出牌阶段开始时,你可以获得一名角色的一张牌,你可以将此牌交给另一名其他角色',
						戮嗜: '戮嗜',
						戮嗜_info: '开局得7个戮标记,你可于出牌阶段用戮标记标记一名角色,除你之外有戮标记的角色回合开始对该角色造成一点火焰伤害该角色本回合造成伤害始终减一,你摸戮标记数量的牌该角色本回合手牌上限减二,你获得该角色手牌装备区牌各一张,你对有戮标记的造成伤害加一且造成伤害后可获得一名角色一张牌并可使你本回合使用牌无距离次数限制',
						sunchenlushi: '戮嗜',
						sunchenlushi_info: '',
						sunchenlushi_disable: '戮嗜',
						sunchenlushi_disable_info: '',
						sunchenlushi_low: '戮嗜',
						sunchenlushi_low_info: '',
						凶虐: '凶虐',
						凶虐_info: '一名角色濒死时你获得该角色体力上限数的戮标记',
						慎行: '慎行',
						慎行_info: '出牌阶段你可令一名角色弃置两张牌你摸一张牌',
						秉壹: '秉壹',
						秉壹_info: '回合结束阶段可展示手牌并可令至多等量角色摸其中红色牌数量的牌',
						乔侍: '乔侍',
						乔侍_info: '每名角色回合限一次,一名角色使用/打出/弃置♦️️牌后你可令该角色摸一张牌回复一点体力',
						辗转流离: '流离',
						辗转流离_info: '当你成为其他角色使用牌的目标时,你可以令1名与你距离为1的其他角色成为此牌目标,若如此做,你可以摸两张牌弃置1张牌令此牌对你无效',
						国色芳华: '国色',
						国色芳华_info: '你可以将一张♥️️或♦️️牌当【乐不思蜀】使用,选定目标后,你摸一张牌获得该角色一张手牌',
						丽质: '丽质',
						丽质_info: '回合开始阶段,召唤士兵两名乔家侍女与你协同作战,失去此技能',
						傲世: '傲世',
						傲世2: '傲世',
						傲世_info: '当你需要使用或打出一张基本牌时,你可以观看牌堆顶的八张牌.若你观看的牌中有此牌,你可以使用打出之',
						黷武: '黷武',
						黷武_info: '出牌阶段,你可对一名其他角色造成1点伤害(X为该角色的体力值),并令该角色弃置X张牌',
						贞特: '贞特',
						贞特1: '贞特',
						贞特_info: '当一名角色于其回合内使用了黑色基本牌或黑色普通锦囊牌,你可令一名角色于当前回合不能再使用牌直到当前回合结束后,且此牌无效',
						至微: '至微',
						至微2: '至微',
						至微2_bg: '微',
						至微_info: '锁定技,游戏开始之后或你回合开始时,你选择一名其他角色,当其受到伤害或造成伤害后,你摸等量牌弃置该角色等量牌',
						碎玉: '碎玉',
						碎玉_info: '你成为其他角色使用杀或非延时锦囊目标时你可令该角色失去一点体力,弃置该角色体力上限张数的牌',
						驳言: '驳言',
						驳言1: '驳言',
						驳言_info: '回合结束阶段或进入濒死后你可令一名角色摸该角色体力上限数的牌并可令一名角色不能使用打出牌直到该角色回合结束后',
						连翩lp: '连翩',
						连翩lp_info: '当你使用牌时,你可以摸一张牌,若目标不为你,你可以将此牌交给一名其他角色并摸2张牌.(每回合限制5次)',
						苏飞不臣: '不臣',
						苏飞不臣2: '不臣',
						苏飞不臣_info: '选将阶段随机势力范围(群,吴)的一个势力,回合开始或有其他角色濒死时可变更势力(非国战模式改为变更身份)',
						聪察pj: '聪察',
						聪察pj_info: '一名角色回合开始阶段你可令一名角色摸一张牌,并可令当前回合角色摸两张牌额外执行一个出牌阶段',
						公清pj: '公清',
						公清pj_info: '锁定技.当你受到伤害时,若伤害来源的攻击范围:<3,则你令此伤害的数值减为0.>3,你令此伤害+1,并令伤害来源受到等量伤害你摸等量牌',
						安国zz: '安国',
						安国zz_info: '出牌阶段限两次,你可指定一名角色,若如此做,该角色摸3张牌回复一点体力随机使用一张装备,你摸2张牌回复一点体力随机使用一张装备',
						贪敛: '贪敛',
						贪敛_info: '回合开始时,你可获得三张桃与顺手牵羊(随机花色点数)',
						锦绘: '锦绘',
						锦绘_info: '一名角色回合开始时,你可令一名角色获得牌堆内共三张伤害类卡牌(依次进行,牌堆无则跳过)',
						轻幔: '轻幔',
						轻幔_info: '锁定技,每个回合结束时,你摸x张牌(x为当前回合角色装备区内的空位数且至少为1)',
						流离xwdxq: '流离',
						流离xwdxq_info: '当你成为[杀]的目标时,可以摸一张牌并弃置一张牌将其转移给一名其他角色',
						天香xwdxq: '天香',
						天香xwdxq_info: '当你受到伤害时,你可以摸一张牌,防止此次伤害并选择一名其他角色,你选择一项:1.令其受到伤害来源对其造成的1点伤害,弃X张牌(X为其已损失体力值);2.令其失去1点体力.之后可令一名角色摸其已损失体力值的牌',
						星舞xwdxq: '星舞',
						星舞xwdxq_info: '弃牌阶段开始时,你可以将一张牌置于武将牌上:若你有至少三张<星舞>牌,你移去<星舞>牌并选择一名其他角色,该角色受到3点伤害并弃置其所有牌,若其武将牌正面朝上则将其武将牌翻面',
						幸宠: '幸宠',
						幸宠_at: '幸宠',
						幸宠_info: '回合开始时,你可选择1到7的数字,若如此做,直到你下个回合开始前,每当你失去牌后其中有点数不大于此数字的牌,你摸两张牌,',
						尘世: '尘世',
						尘世2: '尘世',
						尘世_info: '出牌阶段开始时,你可令一名角色增加一点体力上限,手牌上限加10,直到其回合结束后',
						落宠: '落宠',
						落宠_info: '准备阶段或当你受到伤害后,你可选择一项:1. 令一名角色回复1点体力;2. 令一名角色失去一点体力;3. 弃置一名角色至多两张牌;4. 令一名角色摸两张牌',
						哀尘: '哀尘',
						哀尘_info: '锁定技,当你进入濒死状态时,你回复体力值至1点,将武将牌替换为孙皓(主将:翠琉金阙;副将:溺酒残戮)',
						妙灵hh: '妙灵',
						妙灵hh_info: '出牌阶段限2次,孙寒华可以视为使用了一张杀或雷杀或火杀或视为使用一张【无中生有】,以此法使用视为牌时可令一名角色视为使用一张【无中生有】',
						莲华: '莲华',
						莲华_info: '孙寒华成为其他角色【杀】的目标时,孙寒华摸一张牌,进行一次判定,若判定结果不为♠️️,则取消之并弃置该角色一张牌',
						冲虚: '冲虚',
						冲虚_info: '出牌阶段限一次,孙寒华可以选择发动妙灵中视为效果或无视条件选择发动莲华效果',
						澜疆: '澜疆',
						澜疆_info: '结束阶段,你摸友方角色数张牌.选择完成后,你可以对所有敌方角色造成1点伤害,令一名其他角色摸一张牌',
						勤政qz: '勤政',
						勤政qz_info: '你每使用或打出牌时,你可选择随机获得一张【杀】或【闪】或随机获得一张【桃】或【酒】或随机获得一张【无中生有】或【决斗】',
						陈见: '陈见',
						陈见_info: '准备阶段,你可以摸一张牌展示一张牌,亮出牌堆顶的5张牌,获得其中与该牌颜色相同的牌弃置其余的牌,并可令一名角色选择使用一张牌,你可重铸任意张牌',
						皙秀: '皙秀',
						皙秀1: '皙秀',
						皙秀_info: '你成为其他角色使用杀或非延时锦囊牌的目标时,可展示一张牌若此牌与其使用牌颜色相同你摸一张牌,每当你失去牌结束后,若其中有装备牌你可依次使用相同牌名装备牌',
						清靓: '清靓',
						清靓_info: '每名角色回合限1次,当你成为其他角色使用牌指定的目标时,你可摸一张牌,选择一项:1:令其弃置所有红色牌;2:令其弃置所有黑色牌.并令该牌对你无效',
						巧芮: '巧芮',
						巧芮2: '巧芮',
						巧芮3: '巧芮',
						巧芮_info: '出牌阶段限5次,你可弃置一张牌若该牌为装备牌你可观看牌堆顶的5张牌将这些牌分配给任意角色,且以此法使用的决斗不可被响应,结束阶段你随机获得一张牌堆内有的装备牌(不从牌堆内获得)',
						s碎y玉: '碎玉',
						s碎y玉_info: '你成为其他角色使用杀或非延时锦囊目标时你可令该角色失去2点体力,弃置该角色体力上限张数的牌',
						b驳y言: '驳言',
						b驳y言1: '驳言',
						b驳y言_info: '回合结束阶段或进入濒死后你可令一名角色摸该角色体力上限数的牌并可令一名角色不能使用打出牌直到该角色回合结束后并失去一点体力',
						同礼: '同礼',
						同礼_info: '你使用实体牌时,可展示手牌令此牌效果额外执行你红色牌数次',
						奢葬: '奢葬',
						奢葬_info: '当一名角色进入濒死状态时,你可以获得与牌堆内一张牌牌名相同且不同花色的牌各一张',
						怨咽: '怨咽',
						怨咽2: '怨咽',
						怨咽_info: '出牌阶段限一次,你可以摸2张牌并将1张牌置于武将牌上,称为<怨>,一名角色造成1点伤害后,你可获得其一张牌并可将一张牌置入<怨>中.<怨>包含的数量达到4种时,你获得全部<怨>',
						夕颜: '夕颜',
						夕颜2: '夕颜',
						夕颜3: '夕颜',
						夕颜4: '夕颜',
						夕颜_info: '你的回合开始时,你可令一名角色手牌上限+4,使用牌无次数限制直到其回合结束后;结束阶段,你可令一名角色手牌上限-4,且不能使用牌直到其回合结束后',
						善逸: '善逸',
						善逸1: '善逸',
						善逸2: '善逸',
						善逸3: '善逸',
						善逸4: '善逸',
						善逸5: '善逸',
						善逸_info: '回合开始时,你将本回合摸牌阶段摸牌数攻击范围、使用【杀】的限制次数、手牌上限的默认值分配数值4(可叠加分配).当你受到伤害后,你本局游戏以此法分配数值+1',
						彰名: '彰名',
						彰名_info: '每名角色回合限一次,当你使用【杀】或伤害类锦囊牌指定其他角色为目标后,你可以令其中一个目标展示手牌,你摸其手牌中牌的类型数两倍数张牌',
						除害: '除害',
						除害_info: '出牌阶段限一次,你可摸一张牌,令一名其他角色弃置一张牌,你获得不同类型的牌各一张',
						合击: '合击',
						合击_info: '每名角色回合限一次,若一名角色使用【决斗】或【杀】时,你随机获得一张红色牌,你视为对目标使用一张无次数和距离限制的【杀】或【决斗】',
						怀h橘j: '怀橘',
						怀h橘j_info: '锁定技,游戏开始时,所有友方角色获得6个<橘>标记.(有<橘>的角色受到伤害时,防止此伤害,移去一个<橘>;有<橘>的角色摸牌阶段额外摸2张牌)',
						_怀h橘j: '怀橘',
						_怀h橘j_info: '有<橘>的角色受到伤害时,防止此伤害,移去一个<橘>',
						_怀h橘j1: '怀橘',
						_怀h橘j1_info: '有<橘>的角色摸牌阶段额外摸2张牌',
						遗y礼l: '遗礼',
						遗y礼l_info: '出牌阶段开始时,你可以回复一点体力或移去一个<橘>,令一名其他角色获得一个<橘>',
						整z论l: '整论',
						整z论l_info: '你可以跳过判定阶段获得2个<橘>',
						弼政: '弼政',
						弼政_info: '摸牌阶段结束后,你可令一名角色摸两张牌,并可令一名角色选择弃置两张牌',
						佚典: '佚典',
						佚典_info: '你使用基本牌时,你获得无中生有、过河拆桥、无懈可击各一张',
						遗珠: '遗珠',
						遗珠_info: '每名角色回合限一次,一名角色使用除延时类锦囊和装备牌的牌指定目标时,你可以令之无效,你可选择一名角色,视为对其使用该牌并摸两张牌',
						鸾梼: '鸾梼',
						鸾梼_info: '出牌阶段限一次,你可选择[2,2+你已损失体力值]名角色,令这些角色各摸两张牌弃置一张牌,若弃置的牌为伤害标签牌则其回复一点体力',
						共患: '共患',
						共患_info: '每名角色回合限一次,一名角色受到伤害时你可防止此伤害,选择一名敌方角色对其造成等量伤害并令其选择弃置等量牌',
						太音: '太音',
						太音_info: '每名角色回合限一次,你受到伤害时/你的判定阶段,你可防止此伤害/跳过此阶段,令全体敌方角色失去一点体力,须选择弃置不同花色的牌各一张(没有该花色的牌则不弃)',
						安政: '安政',
						安政_info: '你的手牌上限始终+1,一名角色弃置牌结束后,你可将其一张手牌置于判定区(红色为乐不思蜀,黑色为兵粮寸断,延时锦囊不变),摸其所弃置牌数的牌',
						说谏1: '说谏',
						说谏: '说谏',
						说谏_info: '出牌阶段,你可将手牌中一张装备牌置于一名其他角色装备区,你可弃置一名其他角色一张牌',
						稳政: '稳政',
						稳政_info: '你的手牌上限始终+1,一名角色弃置牌结束后,你可将其一张手牌置于判定区(红色为乐不思蜀,黑色为兵粮寸断,延时锦囊不变),摸其所弃置牌中点数最大数张牌',
						固谏: '固谏',
						固谏_info: '一名角色出牌阶段开始时,你可令其展示手牌,若其中有装备牌,你依次令其装备之,你摸其中装备牌数的牌',
						苦肉勇力精锐: '苦肉',
						诈降勇力精锐: '诈降',
						诈降勇力精锐2: '诈降',
						诈降勇力精锐3: '诈降',
						苦肉勇力精锐_info: '出牌阶段限2次,你可以弃置一名角色一张牌,令一名角色失去2点体力',
						诈降勇力精锐_info: '锁定技,你造成的火焰伤害始终加一,每当一名角色失去体力后,你摸三倍该角色流失体力数张牌.若此时是你的出牌阶段,则直到回合结束,你使用【杀】无距离限制且不能被【闪】响应,你可以额外使用任意张【杀】',
						不屈mzt: '不屈',
						不屈mzt_info: '体力或上限扣减时由改为可选择一名其他角色进行相应事件扣减(无来源),你的手牌上限始终+13+你的不屈数,并将一张牌置于你的武将牌上,每当你武将牌上任意一张牌有与之点数相同的牌时你可令一名角色立即阵亡',
						奋激mzt: '奋激',
						奋激mzt_info: '一名角色于回合外失去手牌后,你可失去一点体力令其摸两倍失去牌数量的牌',
						谦逊烈火炽天: '谦逊',
						谦逊烈火炽天2: '谦逊',
						谦逊烈火炽天_info: '当你成为唯一锦囊牌目标或延时锦囊牌判定生效后,可将全部牌扣置于武将牌上,此回合结束时,可令至多武将牌上牌数的角色受到一点伤害,你获得武将牌上的所有牌',
						连营烈火炽天: '连营',
						连营烈火炽天_info: '当你失去手牌后,若你没有手牌,若失去手牌数量为奇数,你可以对一名角色造成1点火焰伤害;若失去手牌数量为偶数,你可以横置一名角色并弃置其区域里的一张牌,你可以令至多X名角色各摸2张牌(X为你此次失去的手牌数)',
						落宠lc: '落宠',
						落宠lc_info: '准备阶段或当你受到伤害后,你可选择一项:1. 令一名角色回复2点体力;2. 令一名角色失去2点体力;3. 弃置一名角色至多4张牌;4. 令一名角色摸4张牌',
						哀尘ac: '哀尘',
						哀尘ac_info: '锁定技,当你进入濒死状态时,你回复体力值至1点,你摸回复体力值的牌,将武将牌替换为孙皓(主将:翠琉金阙;副将:溺酒残戮)',
						好施周济万民: '好施',
						好施周济万民_info: '一名角色摸牌阶段令之额外摸两张牌若如此做该角色须将一半手牌(向上取整)交给你,视为对所有敌方角色使用该角色交给你牌数的万箭齐发',
						缔盟周济万民: '缔盟',
						缔盟周济万民_info: '出牌阶段交换两名角色手牌之后你摸两者手牌数之和的手牌至少为二',
						卜筮: '卜筮',
						卜筮_info: '出牌阶段限四次,你可将卜筮①,卜筮②,卜筮③,卜筮④分配给一名角色',
						卜筮1: '卜筮①',
						卜筮1_info: '你使用黑色牌时可摸一张牌',
						卜筮2: '卜筮②',
						卜筮2_info: '你使用黑色牌无次数限制',
						卜筮3: '卜筮③',
						卜筮3_info: '一名其他角色使用黑色牌指定你为目标时,若你有牌可弃置一张牌,令该牌对你无效',
						卜筮4: '卜筮④',
						卜筮4_info: '回合结束阶段,若牌堆内有红色牌,你获得牌堆内的一张红色牌',
						忠壮: '忠壮',
						忠壮_info: '若你造成伤害时,你的体力值小于3,你可令此伤害加2,否则且你已受伤可令此伤害加一',
						qing清liang靓: '清靓',
						qing清liang靓_info: '每名角色回合限1次,当你成为其他角色使用牌指定的目标时,你可摸一张牌,回复一点体力,选择一项:1:令其弃置所有红色牌;2:令其弃置所有黑色牌.并令该牌对你无效',
						qiao巧rui芮: '巧芮',
						qiao巧rui芮2: '巧芮',
						qiao巧rui芮3: '巧芮',
						qiao巧rui芮_info: '出牌阶段限5次,你可弃置一张牌若该牌为装备牌你可观看牌堆顶的5张牌将这些牌分配给任意角色,且以此法使用的决斗不可被响应,结束阶段你摸两张牌并随机获得一张牌堆内有的装备牌(不从牌堆内获得)',
						y怨y咽: '怨咽',
						y怨y咽2: '怨咽',
						y怨y咽_info: '出牌阶段限一次,你可以摸3张牌并将1张牌置于武将牌上,称为<怨>,一名角色造成1点伤害后,你可获得其一张牌并可将一张牌置入<怨>中.<怨>包含的数量达到4种时,你获得全部<怨>',
						x夕y颜: '夕颜',
						x夕y颜2: '夕颜',
						x夕y颜3: '夕颜',
						x夕y颜4: '夕颜',
						x夕y颜_info: '你的回合开始时,你可令一名角色手牌上限+4,其摸4张牌,使用牌无次数限制直到其回合结束后;结束阶段,你可令一名角色手牌上限-4,且不能使用牌直到其回合结束后',
						t同l礼: '同礼',
						t同l礼_info: '你使用实体牌时,可展示手牌令此牌效果额外1+执行你红色牌数次',
						s奢z葬: '奢葬',
						s奢z葬_info: '当一名角色进入濒死状态时,你可以获得与牌堆内一张牌牌名相同且不同花色的牌各2张',
						奋略: '奋略',
						奋略_info: '每名角色回合限4次,你使用牌时,可令一名角色随机弃置一种花色的一张牌,并对其造成一点伤害',
						胆然: '胆然',
						胆然_info: '出牌阶段限6次,你可以选择一名其他角色,摸X张牌(X为你此前于此阶段内发动过此技能的次数+1).若X:为1,你弃置其一张牌;为2,令其交给你一张牌;为3,你对其造成1点伤害;不小于4,你与其各摸两张牌',
						钰铸: '钰铸',
						钰铸_info: '<span style="color: green;filter: brightness(400%);">锁定技,回合开始或结束时,你使用【古钰刀*♠️️️️A】,并摸两张牌</span>',
						破军mxs: '破军•谋',
						破军mxs2: '破军•谋',
						破军mxs3: '破军•谋',
						破军mxs4: '破军•谋',
						破军mxs5: '破军•谋',
						破军mxs_info: '<span style="color: green;filter: brightness(400%);">回合开始或你使用杀时可将一名角色全部牌置于你的武将牌上,若如此做其于本回合受到的伤害始终+1,你于当前回合结束时获得这些牌,并可对一名随机敌方角色造成你于出牌阶段造成过的伤害数</span>',
						疑城mxs: '疑城•谋',
						疑城mxs_info: '<span style="color: green;filter: brightness(400%);">一名角色其他使用杀时,若吴势力角色成为此杀的目标,你可令该吴势力目标角色摸两张牌,使用杀的角色随机弃置一张牌,若其弃置了牌且此牌为伤害标签牌,此杀对该吴势力角色无效,你对使用杀的角色造成两点火焰伤害</span>',
						节行: `<span style="color: limegreen;
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">节行</span>`,
						节行_info: `<span style="color: limegreen;
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">当你的体力值变化后,你可以摸一张牌,并令你的手牌上限永久+1,你有0.5概率额外执行一次该技能.</span>`,
						//当你的体力值变化后,你可以摸一张牌,并令你的手牌上限永久+1,若该牌为红色你额外执行一次该技能.
						蒙斥: `<span style="color: limegreen;
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">蒙斥</span>`,
						蒙斥2: `<span style="color: limegreen;
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">蒙斥</span>`,
						蒙斥_info: `<span style="color: limegreen;
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">锁定技,每回合各限一次,你需要弃牌时取消之改为摸等量的牌.受到伤害后,回复1点体力.</span>`,
						聆乐: '聆乐',
						聆乐_info: '一名角色造成伤害后你增加一点体力上限,每名角色回合限一次,与此同时若你的体力上限大于7你可将体力上限调整为7,并摸1+调整体力上限数的牌',
						盻睇: '盻睇',
						盻睇_info: '你使用牌后,可选择一名其他角色,令其视为对目标角色结算一次该牌的使用',
						数谏: '数谏',
						数谏_info: '出牌阶段限三次,你可令一名角色获得一张过河拆桥,你摸3张牌弃置两张牌,令其对你选择的一名角色使用3张过河拆桥',
						攻車: '攻車',
						攻車_info: '回合开始时你可选择一到两名角色,依次弃置其一张牌视为对其使用一张杀并对其使用一张随机花色与点数的草木皆兵的印卡',
						望橹: '望橹',
						望橹_info: '锁定技,回合开始阶段,若场上没有大攻车,召唤大攻车×2与你协同作战,你执行一个额外的出牌阶段',
						陷筑: '陷筑',
						陷筑_info: '你使用杀时,摸场上吴势力角色数+你装备区牌数张牌',
						拆械: '拆械',
						拆械_info: '锁定技,当【大攻车】受到伤害后,你摸X张牌(X为2*【大攻车】数量)',
						旋渚: '旋渚',
						旋渚_info: '当你失去至少两张牌或失去一张装备牌,你可选择一名角色弃置其两张牌,视为对其使用一张万箭齐发',
						jxz_yichu: '移除',
						jxz_yichu_info: '',
						jxz_songci: '颂词',
						jxz_songci_info: '出牌阶段,你可以选择一项:令一名手牌数小于其体力值的角色摸两张牌;或令一名手牌数大于其体力值的角色弃置两张牌.此效果对同一个角色一回合只生效一次',
						jxz_jianshu: '间书',
						jxz_jianshu_info: '出牌阶段限一次,你可以将一张黑色手牌交给一名其他角色,并选择一名攻击范围内含有其的另一名其他角色,令这两名角色拼点,赢的角色弃置两张牌,没赢的角色失去一点体力',
						jxz_luanni: '乱逆',
						jxz_luanni_info: '其他角色回合结束阶段,若其生命值高于你或者其于此回合内打出或使用过杀,你可以弃置一张黑色的手牌,视为对其使用一张杀',
						jxz_niluan2: '逆乱',
						jxz_niluan2_info: '',
						jxz_yichu2: '移除',
						jxz_yichu2_info: '',
						jxz_niluan: '逆乱',
						jxz_niluan_info: '其他角色回合结束阶段,你可以弃置该角色的一张牌,若此牌为黑色,视为对其使用一张杀',
						mangchou: '盟仇',
						mangchou_info: '每当你使用杀造成伤害,你可以弃置对方一张牌',
						xiangcan: '相残',
						xiangcan_info: '当你失去最后一手手牌,或在回合开始阶段时,你可以指定一名角色视为对其使用一张雷杀',
						azzocai: '界傲才',
						azzocai_info: '当你于回合外需要使用或打出一张基本牌时,你可以观看牌堆顶的两张牌.若你观看的牌中有此牌,你可以使用打出之',
						qishipi: '奇制',
						qishipi_info: '当你于回合内使用基本牌或锦囊牌指定目标后,你可以弃置不是此牌目标的一名角色的一张牌.若如此做,其摸一张牌',
						jinqupi: '进趋',
						jinqupi_info: '结束阶段开始时,你可以摸两张牌,若如此做,你将手牌弃置至X张(X为你于此回合发动过<奇制>的次数)',
						linglongpi: '玲珑',
						linglongpi_info: '锁定技,若你的装备区没有防具牌,视为你装备着【八卦阵】;若你的装备区没有坐骑牌,你的手牌上限+1;若你的装备区没有宝物牌,你使用锦囊牌无距离限制',
						liangzhupi: '良助',
						liangzhupi_info: '其他角色在其回合内回复体力时,你可以与其各摸一张牌 ',
						xiaojipi: '枭姬',
						xiaojipi_info: '每当你失去一张装备牌,可以摸两张牌',
						xianzhupi: '贤助',
						xianzhupi_info: '当一名角色回复体力后,或失去装备区里的牌后,你可以令其摸两张牌',
						liangyuanpi: '良缘',
						liangyuanpi_info: '限定技,出牌阶段,你可以选择一名其他男性角色,则于本局游戏中,你的自然回合结束时,该角色进行一个额外的回合',
						xingshangpi: '行觞',
						xingshangpi_info: '你可以立即获得死亡角色的所有牌',
						fangzhupi: '放逐',
						fangzhupi_info: '你每受到一次伤害,可令除你以外的任一角色补X张牌,X为你已损失的体力值,该角色将其武将牌翻面',
						songweipi: '颂威',
						songweipi_info: '主公技,其他魏势力的角色的判定牌结果为♠️️或♣️️且生效后,可以让你摸一张牌',
						xingshangpf: '行觞',
						xingshangpf_info: '每当其他角色死亡后你摸两张牌回复两点体力',
						kuangfupi: '狂斧',
						kuangfupi_info: '每当你使用杀造成伤害,可以将对方的一张装备牌移到你的装备区',
						hongyuanpi: '弘缘',
						hongyuanpi_info: '摸牌阶段摸牌时,你可以少摸一张牌,指定至多两名其他角色各摸一张牌',
						huanshipi: '缓势',
						huanshipi_info: '一名角色的判定牌生效前,你可令其观看你的手牌.若如此做,该角色选择你的一张牌,令你打出此牌代替之',
						mingzhepi: '明辄',
						mingzhepi_info: '你的回合外,每当你因使用、打出或弃置而失去一张红色牌时,你可以摸一张牌',
						huanbing: '缓兵',
						huanbing_info: '锁定技,当你成为【杀】的目标时,终止此【杀】的结算,改为将之置于你的武将牌上.回合开始阶段开始时,你须为你武将牌上的每一张【杀】进行一次判定:若结果为红色,你摸一张牌;若结果为黑色,你须失去一点体力.将【杀】收入手牌',
						jinkui: '进溃',
						jinkui2: '进溃',
						jinkui_info: '锁定技,你的锦囊牌造成的伤害+1;出牌阶段开始时,你观看随机3张锦囊牌,并将其中一张加入你的手牌',
						xidipi: '悉敌',
						xidipi_info: '出牌阶段限一次,你可以弃置任意张牌,观看牌堆顶的等同于弃牌数四倍的牌,获得其中的一张牌',
						kanpopi: '看破',
						kanpopi_info: '你可以将你的任意一张♠️️或♣️️手牌当【无懈可击】使用',
						cuorui: '挫锐',
						cuorui_info: '出牌阶段限一次,你可以令一名角色增加一点体力上限,回复一点体力,并摸两张牌(每名角色限发动一次)',
						liewei: '裂围',
						liewei_info: '出牌阶段限一次,你可以令场上所有角色各弃置一张手牌',
						qianxipi: '潜袭',
						qianxipi_info: '准备阶段开始时,你可以摸2张牌弃置一张牌.若如此做,你选择距离为1的一名其他角色,直到回合结束,该角色不能使用或打出与你以此法弃置的牌颜色相同的手牌',
						qianxitupo: '浅袭',
						qianxitupo_info: '每当你使用杀对距离为1的目标角色造成伤害时,你可以进行一次判定,若结果不为♥️️,令其减一点体力上限',
						qianxigaopei: '浅悉',
						qianxigaopei_info: '每当你使用杀对距离为1的目标角色造成伤害时,你可以进行一次判定,若结果不为♥️️,令其减一点体力上限',
						zuikongjiuz: '惴恐',
						zuikongjiuz_info: '一名其他角色的回合开始时,若你已受伤,你可以与该角色拼点,若你赢,该角色跳过其出牌阶段;若你没赢,其与你距离为一直到回合结束',
						qiuyuanjiu: '求援',
						qiuyuanjiu_info: '当你成为【杀】的目标时,你可以获得一名其他角色的一张牌,令该角色也成为此【杀】的目标',
						fengliangpi: '逢亮',
						fengliangpi_info: '觉醒技,当你进入濒死状态时,你减１点体力上限并将体力值回复至２点,获得技能挑衅,将困奋改为非锁定技',
						tiaoxinpi: '挑衅',
						tiaoxinpi_info: '出牌阶段,你可以指定一名使用【杀】能攻击到你的角色,该角色需对你使用一张【杀】,若该角色不如此做,你弃掉他的一张牌,每回合限一次',
						juesipi: '决死',
						juesipi_info: '出牌阶段,你可以弃置一张杀并选择你攻击范围内的一名有牌的其他角色,该角色弃置一张牌,若弃置的牌不是杀且你的体力值不大于该角色,你视为对其使用决斗,你摸一张牌',
						shangshijiu: '伤势',
						shangshijiu_info: '锁定技,当你的手牌数小于X时,你立即将手牌补至X张(X为你已损失的体力值且最多为3)',
						jueqingjiu: '绝情',
						jueqingjiu_info: '锁定技,你即将造成的伤害均视为失去体力',
						zhenggongpi: '争功',
						zhenggongpi_info: '你每受到一次伤害,可以获得伤害来源装备区中的一张牌并立即放入你的装备区',
						quanjipi: '权计',
						quanjipi_info: '其他角色的回合即将开始时,你可以与该角色进行一次拼点.若你赢,该角色跳过回合开始阶段及判定阶段',
						baijiangpi: '拜将',
						baijiangpi_info: '觉醒技,回合开始阶段若你的装备区的装备牌为两张或更多时,你必须增加1点体力上限,失去技能【权计】和【争功】并获得技能【野心】和【自立】',
						quanjipif: '权计',
						quanjipif_info: '每当你受到1点伤害后,你可以可摸一张牌,将一张手牌置于武将牌上,称为<权>;你的手牌上限+X(X为<权>的数量)',
						zilipif: '自立',
						zilipif_info: '觉醒技,准备阶段开始时,若<权>的数量不小于3,你减1点体力上限,选择一项:1、回复1点体力;2、摸两张牌.你获得<排异>',
						qianxipjiaqiang: '界潜袭',
						qianxipjiaqiang_info: '每次使用杀造成伤害时,防止次伤害对其体力上限-1',
						canshipi: '残蚀',
						canshipi_info: '摸牌阶段开始时,你可以放弃摸牌,改为摸x张牌(x为已受伤的角色数),若如此做,当你与此回合内使用基本牌或锦囊牌时,你弃置一张牌',
						baolipi: '暴戾',
						baolipi_info: '出牌阶段限一次,你可以对一名装备区没有牌或判定区有牌的其他角色造成1点伤害',
						huangyinpi: '荒归',
						huangyinpi_info: '出牌阶段限1次,你可以展示所有手牌,若黑色牌不少于红色牌,则视为你使用了一张【酒】',
						困奋: '困奋',
						困奋_info: '结束阶段开始时,你可令一名角色失去１点体力,你摸两张牌',
						逢亮: '逢亮',
						逢亮_info: '当你进入濒死状态时,你将体力值回复至２点,获得技能挑衅,将困奋改为非锁定技',
						tiaoxinjspjw: '挑衅',
						tiaoxinjspjw_info: '出牌阶段限2次,你可以指定一名有牌的角色,该角色需对你使用一张【杀】,无论该角色是否如此做,你都弃掉他的一张牌',
						狂斧: '狂斧',
						狂斧_info: '出牌阶段限一次,你可弃置一张牌选择至多两名角色有牌的角色,其选择弃置2张牌,视为对其使用一张杀,你摸两张牌',
						双刃纪灵: '双刃',
						双刃纪灵_info: '出牌阶段开始时,你可与一名角色拼点若你赢你可视为对一名与该角色势力相同的角色使用一张杀,若你没赢你对该角色造成一点伤害',
						双刃纪灵_info_guozhan: '出牌阶段开始时,你可以与一名角色拼点.若你赢,你视为对其或与其势力相同的另一名角色使用一张【杀】(此【杀】不计入限制的次数);若你没赢,你对该角色造成一点伤害',
						尊位: '尊位',
						尊位_info: '出牌阶段三次你可选择一名其他角色,摸与该角色手牌与装备区内牌等量的牌,增加等同于该角色体力上限的体力上限并回复等量体力',
						偏宠: '偏宠',
						偏宠_info: '所有角色每失去一张红色牌或♣️️牌后全体友方角色便摸一张牌',
						jizhi青云鸢飞: '鸢智',
						jizhi青云鸢飞_info: '每当一名角色使用一张锦囊牌你可摸一张牌',
						cangji青云鸢飞: '藏機',
						cangji青云鸢飞_info: '一名角色出牌阶段开始时你可令该角色弃置任意张基本牌,展示牌堆顶3倍数量的牌,你获得其中的锦囊牌',
						默识: '默识',
						默识1: '默识',
						默识_info: '出牌阶段/回合结束限四次,可视为使用或打出一张可使用的基本牌或锦囊牌,若如此做,你摸4张牌回复一点体力,若处于回合结束阶段则只能依次将一张牌当做出牌阶段内前四张牌使用',
						陈情: '陈情',
						陈情_info: '当一名角色濒死时,你可令一名角色摸4张牌回复一点体力并可令一名角色弃置四张牌失去一点体力',
						狼灭: '狼灭',
						狼灭_info: '一名角色回合结束阶段你可摸一张牌并可对一名其他角色造成一点伤害',
						裸衣许褚: '裸衣',
						裸衣许褚2: '裸衣',
						裸衣许褚_info: '一名角色摸牌阶段开始时,该角色可展示牌堆顶的5张牌,获得其中的基本牌、武器牌和【决斗】,若如此做,直到你的下回合开始,该角色为伤害来源的【杀】或【决斗】造成的伤害+1',
						jizhizxqs: '巧智',
						jizhizxqs_info: '每当一名角色使用一张锦囊牌你可摸2张牌回复一点体力',
						裂胆: '裂胆',
						裂胆_info: '一名角色回合开始时,你的手牌数、体力值和装备区里的牌数每有一项大于等于该角色,便摸一张牌增加一点体力上限回复一点体力,否则其获得1枚<胆>标记',
						壮胆: '壮胆',
						壮胆_info: '一名角色回合结束阶段,若其<胆>数不小于5,你可选择令其死亡或者令其回复<胆>数的体力',
						殃众zz: '殃众',
						殃众zz_info: '当你造成伤害或受到伤害后,你可以令一到四名角色弃置两张牌失去1点体力',
						惶恐zz: '惶恐',
						惶恐zz_info: '当你于回合外成为【杀】或伤害类锦囊牌的唯一目标后,你摸两张牌并可无视条件对一到四名角色发动魔殃众效果',
						掠财xhe: '掠财',
						掠财xhe_info: "<span style='color: #E3CF57'>出牌阶段</span>限一次,你可以将两张<span style='color: #FF00FF'>手牌</span>当做【顺手牵羊】使用并摸一张牌",
						佩剑xhe: '佩剑',
						佩剑xhe_info: "<span style='color: #40E0D0'>锁定技</span>,游戏开始与<span style='color: #E3CF57'>准备阶段</span>开始时,若你的<span style='color: #9933FA'>装备区</span>里没有【青釭剑】,你装备之;击杀你的角色获得【青釭剑】.<span style='color: #E3CF57'>出牌阶段</span>限一次,你可以将自己<span style='color: #9933FA'>装备区</span>里的【青釭剑】置于一名其他角色的<span style='color: #9933FA'>装备区</span>,你与其各摸一张牌",
						武圣gyzf: '武圣',
						武圣gyzf_info: "你可以将一张<span style='color: #FF0000'>红色</span>牌当做【杀】使用或打出.你使用的<span style='color: #FF0000'>♥️️</span>【杀】<span style='color: #FF7D40'>伤害</span>+1,你使用的<span style='color: #FF0000'>♦️️</span>【杀】没有<span style='color: #FFFF00'>距离</span>限制",
						咆哮gyzf: '咆哮',
						咆哮gyzf2: '咆哮',
						咆哮gyzf_info: "①<span style='color: #40E0D0'>锁定技</span>,你使用【杀】无<span style='color: #FFFF00'>次数</span>限制.②<span style='color: #40E0D0'>锁定技</span>,当你使用的【杀】被【闪】抵消时,你获得一枚「咆」,当你因【杀】造成<span style='color: #FF7D40'>伤害</span>时,你弃置所有「咆」并令<span style='color: #FF7D40'>伤害</span>值+X(X为「咆」的数量).<span style='color: #E3CF57'>回合结束</span>后,你弃置所有「咆」",
						续典: '续典',
						续典2: '续典',
						续典_info: '一名其他角色使用牌后,你获得一枚典标记,回合开始时,若你有典,你摸典标记数量的牌移除所有典并从弃牌堆获得等量黑色牌(不足则跳过)',
						正订: '正订',
						正订_info: '回合开始前,你可增加一点体力上限令所有敌方角色选择弃置一张牌',
						马战: '马战',
						马战_info: '你受到伤害时,若伤害来源装备区无坐骑牌则此伤害改为0',
						施礼: '施礼',
						施礼_info: '出牌阶段开始时与弃牌阶段开始时,你可弃置一张牌所有敌方角色展示手牌并弃掉所有与之花色相同的牌',
						诱施: '诱施',
						诱施_info: '你弃置牌结束后,你从牌堆获得本次弃牌没有的花色的牌各一张',
						暗伤: '暗伤',
						暗伤1: '暗伤',
						暗伤_info: '你使用杀时可令目标视为对目标角色使用万箭齐发,以此法使用的万箭齐发伤害+1且造成伤害时须弃置一张牌',
						纵火: '纵火',
						纵火2: '纵火',
						纵火_info: '你于回合内每失去一张红色牌后你获得一枚纵标记,你红色牌造成的伤害始终加你的纵标记数,并于造成伤害时摸两张牌并弃置所有纵标记',
						假义: '假义',
						假义_info: '回合开始时你弃置所有黑色牌,获取等量的红色牌(其他属性值为随机),所有敌方角色分别弃置所有黑色牌',
						密访: '密访',
						密访_info: '摸牌阶段开始时你令此阶段摸牌数减一,并选择弃置一张牌,令一名其他角色展示手牌,你获得该角色x张牌,x为该角色手牌中拥有与你以此法弃置牌花色相同的牌数',
						家书: '家书',
						家书_info: '锁定技,当你在摸牌阶段外获得牌后,每获得一张牌则获得1个>家书"标记,当你拥有的>家书<标记大于等于4时,移除所有>家书<标记,并将身份变为蜀阵营.失去<家书>,获得<敬义>',
						敬义: '敬义',
						敬义1: '敬义',
						敬义2: '敬义',
						敬义_info: '友方角色使用红色牌无距离和次数限制,且受到红色牌伤害时你可令之伤害-1,敌方角色受到红色牌伤害时可令之伤害+1',
						佯败: '佯败',
						佯败_cancel: '佯败',
						佯败_info: '锁定技,当你受到伤害时,你获得一枚佯标记,其他角色计算与你的距离+你的佯标记数.你回合结束时,可对一名角色造成X点伤害并弃置其武器牌,X为你的佯标记数',
						奉令: '奉令',
						奉令_mark: '奉令',
						奉令_b: '奉令',
						奉令_c: '奉令',
						奉令_info: '锁定技,每轮开始或你回合开始时你获得一个<令>,至多拥有三个<令>.当你拥有大于等于:一个<令"时,你手牌无上限且摸牌阶段多摸五张牌;两个>令<时,你受到伤害后摸一张牌;三个>令"时,你使用牌无距离和次数限制且造成的伤害+1',
						仗势: '仗势',
						仗势_info: '锁定技,当你在摸牌阶段外获得牌后,进行一次判定,若结果为:红色,若你有奉标记则弃置一枚奉标记,否则失去一点体力,对所有敌方角色造成1点伤害;黑色,所有敌方角色各选择弃置一张牌',
						锐裂: '锐裂',
						锐裂2: '锐裂',
						锐裂_info: '锁定技,游戏开始时,你摸X张牌并获得等量角色各一张牌(X为你的手牌数)',
						碎围: '碎围',
						碎围_info: '一名角色濒死时,将改为回合开始时重置锐裂,发动锐裂后移出锐裂',
						横江: '横江',
						横江2: '横江',
						横江_info: '当你回合开始时/受到伤害后,你可以令一名角色于其下个回合的手牌上限于此回合内-1/当前伤害数值且至少为1,其回合结束时,你摸一张牌',
						惊澜: '惊澜',
						惊澜_info: '锁定技,当你造成伤害后,你弃三张手牌并回复一点体力全体友方角色受到一点火焰伤害并摸四张牌',
						连诬: '连诬',
						连诬_info: '出牌阶段限一次,你可获得所有敌方角色各一张牌,展示你的手牌,并失去一点体力,并弃置你的所有x色牌,x为黑或红的随机一项',
						勋德: '勋德',
						勋德_info: '一名角色受到伤害后,可令当前角色进行一次判定,若判定牌点数不大于6伤害来源选择弃置一张牌,否则你获得判定牌',
						臣节: '臣节',
						臣节_info: '在任意角色的判定牌生效前,你可以打出一张与该判定牌相同颜色手牌代替之并摸两张牌',
						资庸: '资庸',
						资庸_info: '摸牌阶段开始时,你可令一名其他角色执行视为对你使用两张杀效果的结算,再视为你对其使用一张杀,若如此做你于摸牌阶段额外摸一张牌',
						平乐: '平乐',
						平乐_info: '锁定技,当其他玩家使用非红色牌指定你为目标时,需额外弃掉一张黑色牌,否则该牌对你无效',
						雄异xy: '雄异',
						雄异xy_info: '出牌阶段限一次,若你没有召唤过韩遂与庞德则召唤之为你的随从,可令一到四名角色摸4张牌回复一点体力',
						宵袭: '宵袭',
						宵袭_info: '出牌阶段开始时,你增加2点体力上限,获得一名其他角色的2张牌,视为你对其使用2张【杀】',
						熊扰: '熊扰',
						熊扰_info: '回合开始时,你可选择1到4名角色,若如此做这些角色非锁定技失效直到你回合结束后,你将体力上限调整为7,你摸调整体力上限数张牌',
						反诗: '反诗',
						反诗_info: '回合开始时,你可随机播放数年徒守困,空对旧山川.龙岂池中物,乘雷欲上天的文字,你摸所播放反诗文字数伤害标签的牌(获得各伤害牌名概率与该伤害牌名的牌所占当前全部牌堆中伤害牌名的牌相同)',
						害仁: '害仁',
						害仁_info: '每名角色回合限一次,一名其他角色获得牌后,你可随机播放反诗中的一个文字,你获得该角色该文字笔画数的牌,其获得该文字笔画数的的卢马,并获得技能卢越直到当前回合结束后',
						卢越: '卢越',
						卢越_info: '你可以将手牌或装备区的的卢马当【闪】使用或打出',
						资战: '资战',
						资战_info: '每名角色回合限一次,当一名角色回复体力后,你可对其造成一点伤害,所有友方角色获得一张桃',
						狼灭执剑昆吾: '狼灭',
						狼灭执剑昆吾_info: '一名角色回合结束阶段你可摸2张牌,并可令一名其他角色选择弃置一张牌,对其造成一点伤害',
						落英玉露清辉: '落英',
						落英玉露清辉_info: '一名角色弃置牌结束后,你可从游戏外获得弃牌堆内的和牌堆内的全部♣️️️牌',
						酒诗玉露清辉: '酒诗',
						酒诗玉露清辉1: '酒诗',
						酒诗玉露清辉3: '酒诗',
						酒诗玉露清辉_info: '每当你需要使用酒可翻面视为使用一张酒,每当一名角色武将牌翻面时你可弃置一张♣️️️牌防止之',
						七章玉露清辉: '七章',
						七章玉露清辉_info: '每当你造成大于1点的伤害后,你从牌堆或弃牌堆获得7张不同牌名的锦囊牌',
						骑勇: '骑勇',
						骑勇_info: '锁定技,你使用杀时,若你有牌,须弃置一张牌,视为对所有敌方角色使用一张杀,若该牌为黑色,所有敌方角色依次弃置一张牌,你获得一点护甲;若为红色,所有敌方角色依次弃置一张牌,你摸敌方角色数的牌',
						戍绝: '戍绝',
						戍绝2: '戍绝',
						戍绝_info: '每名角色回合各限2次,且濒死阶段除外,每当你需要使用或打出一张基本牌时,你可选择一名有牌的角色,观看并弃置其的一张牌,若该牌为锦囊牌你摸一张牌,若为装备牌你回复一点体力,若为使用,则视为你使用一张酒一张杀,并可选择一名角色视为使用桃,若为打出则直接视为打出过',
						//戍绝_info:'每名角色回合各限2次,每当你需要使用或打出一张基本牌时,你可选择一名有牌的角色的一张牌将之当做你需要使用或打出的基本牌使用或打出之,若该牌为锦囊牌你摸一张牌,若为装备牌你回复一点体力',
						龙戍: '龙戍',
						龙戍_info: '一名角色回合结束时,若其手牌数大于你,你可令其弃置一张牌,不大于你,你摸一张牌',
						阵弈: '阵弈',
						阵弈_info: '回合开始阶段,召唤夏侯岚、关银屏、张星彩与你协同作战,失去此技能',
						剑合: '剑合',
						剑合_info: '出牌阶段限7次,你可令一名角色弃置两张牌对其造成一点雷电伤害,你摸两张牌',
						穿屋: '穿屋',
						穿屋skill: '穿屋',
						穿屋_info: '每名角色回合限3次,当你造成或受到伤害后,你摸X张牌(X为你的攻击范围+你的技能数),并可令一名角色随机失去一个技能直到其回合结束后',
						弼昏: '弼昏',
						弼昏2: '弼昏',
						弼昏_info: '当你使用牌指定其他角色为目标时,你可取消此牌对其的结算,可选择一名角色令其获得之;每名角色回合限一次,一名其他角色使用牌指定目标后,可取消此牌的结算,你获得之',
						金龙贺收: '金龙贺收',
						金龙贺收_info: '回合开始时随机展示牌堆顶的5到12张牌,你可重复展示直到以此法所获得的牌价值总数大于66到666的一个随机值,获得以此法所展示的全部牌',
						狼枭: '狼枭',
						狼枭_info: '<span style="color: #563432;">狼之枭袭,</span><span style="color: #a17b74;">回合开始时,你可进行一次幸运儿转盘抽奖,根据幸运儿抽奖值与随机跨越值执行以下效果:</span><span style="color: #aea7b1;">选择一名角色</span><span style="color: #836877;">1,对其造成一点火焰伤害;</span><span style="color: #aa94aa;">2,对其造成一点火焰伤害,你摸两张牌;</span><span style="color: #8d8d8d;">3,令其体力上限扣减至体力值,再扣减一点体力上限,你摸两张牌;</span><span style="color: #ff6ea5;">4,令其体力上限扣减至体力值,再扣减2点体力上限;</span><span style="color: #cc6600;">5,对其造成一点火焰伤害,获得两张伤害标签牌,增加一点护甲;</span><span style="color: #363636;">6,对其造成一点火焰伤害,获得2张伤害标签牌,执行一个额外的回合开始和结束阶段;</span><span style="color: #696969;">7,对其造成2点火焰伤害,获得3张伤害标签牌,增加两点护甲,执行一个额外的回合开始和结束阶段;</span><span style="color: #ab3328;">8,令其体力上限扣减至体力值,再扣减2点体力上限,获得3张伤害标签牌,增加两点护甲,执行一个额外的回合开始和结束阶段</span>',
						算袭: '算袭',
						算袭_info: '每回合限一次,你使用基本牌或非延时锦囊额外结算等量随机1到2次,令一名角色减少等量的体力上限,你摸等量的牌',
						带砺: '带砺',
						带砺_info: '一名角色回合结束时,若你的手牌数为奇数你可摸3张牌令一名角色翻面,为偶数可选择视为对一名角色使用你手牌中非伤害标签牌数张杀',
						扞难: '扞难',
						扞难_info: '出牌阶段限2次,你可以与一名其他角色拼点,若你赢对其造成2点伤害,没赢对其造成1点伤害',
						借兵: '借兵',
						借兵_info: '你受到伤害后,可获得两张随机伤害标签牌,视为你对伤害来源使用一张随机花色点数牌名的伤害标签牌',
						wushengguanjueguanyu: '武圣',
						wushengguanjueguanyu2: '武圣',
						wushengguanjueguanyu_info: '每当你需要使用打出一张杀时可选择一名角色一张牌于其展示后获得之,并令其非锁定技失效无法使用打出牌直到该回合结束,并视为对其使用一张杀.你造成伤害时可弃置一张闪电或水淹七军或洪水,令此杀伤害增加该牌点数',
						// wushengguanjueguanyu_info:'每当你需要使用打出一张杀时可选择一名角色一张牌于其展示后获得之,并令其非锁定技失效无法使用打出牌直到该回合结束,并视为对其使用一张杀.你使用杀造成伤害时可弃置一张闪电或水淹七军或洪水,令此杀伤害增加该牌点数',
						wushengguanjueguanyu2_info: '你使用杀造成伤害时可弃置一张闪电或水淹七军或洪水,令此杀伤害增加该牌点数',
						weizhenguanjueguanyu: '威震',
						weizhenguanjueguanyu3: '威震',
						weizhenguanjueguanyu2: '威震',
						weizhenguanjueguanyu4: '威震',
						weizhenguanjueguanyu_info: '出牌阶段限一次,你可选择1到7名角色,令其弃置手牌区和装备区内所有的装备牌,你摸2+所选择角色以此法弃置牌数之和的牌,并可将一张洪水和闪电置入其判定区,你获得7张水淹七军,闪电,洪水,你使用水淹七军可增加至至多7名角色为目标,你可令敌方角色洪水或闪电判定效果反转并增加混乱效果',
						gushe鼓舌: '鼓舌',
						gushe鼓舌_info: '出牌阶段限三次,你可进行一次判定,选择1到3名角色,其依次选择弃置一张牌,全部弃置完成后你再依次摸1+判定牌点数与其手牌数差值绝对值张牌',
						jici激词: '激词',
						jici激词_info: '一名角色失去牌后,若其黑色牌数比你少或点数小于8的牌数比你少,其失去一点体力',
						酒池董卓: '酒池',
						酒池董卓2: '酒池',
						酒池董卓_info: '你使用杀造成伤害时可令此伤害+你♠️️️花色牌数,你濒死时可回复你♠️️️花色牌数的体力',
						肉林董卓: '肉林',
						肉林董卓_info: '你对女性角色使用的杀需要额外使用你♠️️️花色牌数+1的闪才能抵消,女性角色对你使用杀时须弃置一张闪此杀使用闪的数量减一',
						暴虐董卓: '暴虐',
						暴虐董卓_info: '一名群雄势力角色造成或受到伤害后其可进行当前伤害值+你♠️️️牌数次判定,若判定结果为♠️️️你增加你♠️️️牌数的体力上限回复1+你♠️️️牌数的体力(判定前的♠️️牌数)',
						横征董卓: '横征',
						横征董卓_info: '摸牌阶段开始时,你可展示你的手牌若其中没有♠️️️牌,你获得每名其他角色区域内一张牌',
						暴凌董卓: '暴凌',
						暴凌董卓_info: '出牌阶段结束时,你可增加3+你♠️️️牌数的体力上限并回复等量体力并令一名角色选择失去等量体力上限,若其有副将则移除其副将',
						崩坏董卓: '崩坏',
						崩坏董卓_info: '回合结束阶段你可选择场上一名体力值大于你的角色该角色失去1+你♠️️️花色牌数的体力上限并失去等量体力',
						暴征董卓: '暴征',
						暴征董卓_info: '回合开始阶段,召唤董卓军华雄、捡漏兵×2、李傕、郭汜、张济、樊稠、董越、徐荣、牛辅、董翓、李肃、吕布、李儒与你协同作战,失去此技能',
						密运: '密运',
						密运_info: '每轮游戏开始时,你可获得一名角色一张牌,回合结束阶段,你摸你体力上限数的牌,令一名角色获得你全部牌的复制',
						密运2: '密运',
						胆迎: '胆迎',
						胆迎_info: '每回合限一次,你受到伤害时,防止此伤害,本回合成为牌的目标结束后使用者与你各弃置一张牌',
						胆迎2_info: '锁定技,一名角色使用牌后,该角色弃置一张牌,你弃置一张牌',
						胆迎2: '胆迎',
						祈福: '祈福',
						祈福2: '祈福',
						祈福_info: '准备阶段,你可获得4张杀随机的2张锦囊2装备牌.结束阶段,你可获得4张闪2张桃2无懈可击',
						福龙: '福龙',
						福龙_info: '出牌阶段限一次,你可选择至多4名角色.每名角色选择你的2张牌,其从游戏外获得所选择牌名相同的牌.若该角色拥有2张或更多红色牌,该角色增加1点体力上限,回复1点体力,并获得1点护甲',
						水龙: '水龙',
						水龙_info: '回合开始时,你可以选择1到4名角色,并依次进行以下操作:弃置每个目标角色弃置2张牌.若目标角色♣️️牌数量少于你,该角色失去1点体力值,并获得一张水攻.若目标角色没有♣️️装备牌,你摸2张牌',
						火龙: '火龙',
						火龙_info: '回合开始时,你可以选择1至4名角色,这些角色各获得一张【火杀】、一张【火攻】和一张【火烧连营】.并可从〔弃置两张红色牌〕、〔受到一点火焰伤害中选择一项〕,令1到4名角色执行之',
						re_rende: '宏德',
						re_rende_info: '出牌阶段,你可以将至少一张手牌交给其他角色,若你给予的牌达到两张以上,你可以视为使用一张基本牌',
						re_tunlang: '吞狼',
						re_tunlang_info: '出牌阶段,你可以与一名角色拼点,若你赢,则该角色对另一名由你指定的角色造成1点伤害.若你没赢,他/她对你造成一点伤害.每回合限用一次',
						re_jieming: '命节',
						re_jieming_info: '你每受到1点伤害,可令任意一名角色摸等同于其体力上限的张数的牌(不能超过五张)',
						re_tianao: '天傲',
						re_tianao_info: '当你需要使用或打出一张基本牌时,你可以观看牌堆顶的四张牌.若你观看的牌中有此牌,你可以使用打出之',
						re_tianao2: '天傲',
						re_tianao2_info: '',
						re_qiongbing: '穷兵',
						re_qiongbing_info: '出牌阶段,你可以对一名角色造成1点伤害,弃之与其体力相等的手牌',
						re_jiyi: '计遗',
						re_jiyi_info: '每当你受到1点伤害后,你可以摸两张牌.你将你的手牌交给任意1~2名角色(交给一名角色的牌一次最多两张)',
						re_jinqu: '趋近',
						re_jinqu_info: '结束阶段开始时,你可以摸X张牌,若如此做,你将手牌弃置至X张(X为你于此回合发动过<奇制>的次数)',
						re_songci: '词颂',
						re_songci_info: '出牌阶段,你可以选择一项:令一名手牌数小于其体力值的角色摸两张牌;或令一名手牌数大于其体力值的角色弃置两张牌.此技能对每名角色一回合只能使用一次',
						rel_lijian: '间离',
						rel_lijian_info: '出牌阶段,你可以弃一张牌,视为一名角色对另一名角色使用一张[决斗],每阶段限一次',
						moquan: '谋权',
						moquan_info: '出牌阶段限一次,你可以弃置两张花色不同的手牌,指定一名其他角色使其体力值与你相同',
						caoshi: '槽食',
						caoshi_info: '你可以将一张♣️️手牌当顺手牵羊使用(每回合最多发动1次);你的顺手牵羊无距离限制',
						qiss: '奇制',
						qiss_info: '当你于回合内使用基本牌或锦囊牌指定目标后,你可以弃置不是此牌目标的一名角色的一张牌.若如此做,其摸一张牌',
						qiss2: '奇制',
						qiss2_info: '',
						甚贤星彩: '甚贤',
						甚贤星彩_info: '锁定技,每当一名其他角色于你的回合外失去牌后,若其中含有基本牌,你摸2张牌',
						枪舞星彩: '枪舞',
						枪舞星彩_info: '出牌阶段你可以进行判定,若为黑色则摸3张杀并获得技能咆哮直到回合结束;若为红色则摸3张牌,并将体力回复至体力上限',
						新甚贤星彩: '甚贤',
						新甚贤星彩_info: '当有其他角色因弃置而失去牌时,其中每有一张基本牌,你可以摸一张牌',
						nsqiyue: '骑钺',
						nsqiyue_info: '锁定技,当有角色的武将牌状态改变后,你摸一张牌',
						nsxuezhu: '血逐',
						nsxuezhu_info: '当你受到伤害或造成伤害后,你可以令受到伤害的角色摸两张牌并翻面',
						xinzhanxz: '心战',
						xinzhanxz_info: '出牌阶段限两次,你可观看牌堆顶的六张牌获得其中的红色牌',
						rezhimanzm: '制蛮',
						rezhimanzm_info: '对一名其他角色造成伤害时可防止之改为获得其一张牌',
						sanyaosy: '散谣',
						sanyaosy_info: '出牌阶段限两次,你可指定一名角色对其造成一点伤害',
						huileihl: '挥泪',
						huileihl_info: '一名角色濒死时你可令一名角色弃置所有牌',
						精策郭淮: '精策',
						精策郭淮_info: '一名角色回合结束阶段你可摸该角色于该回合使用牌数量的牌且至多为五',
						天颜: '天颜',
						天颜_info: '一名角色受到伤害前你可摸一张牌弃置一张牌可二选一:选项一,防止此伤害改为令一名角色受到一点伤害你摸五张牌;选项二:防止此伤害改为令一名角色失去一点体力并可弃置该角色三张牌',
						盗书: '盗书',
						盗书_info: '出牌阶段你可获得一名角色全部牌对该角色造成等量伤害',
						伪诚: '伪诚',
						伪诚_info: '每名角色回合限一次,一名角色失去牌后你可摸一张牌',
						息生: '息生',
						息生_info: '一名角色回合结束阶段,若你没有造成伤害你可摸两张牌',
						谏喻: '谏喻',
						谏喻_info: '一名角色成为牌目标后你可令该牌使用者摸一张牌',
						qmjz谏征: '谏征',
						qmjz谏征_info: '当一名其他角色使用【杀】指定目标时,你可以将一张手牌置于牌堆顶,取消所有目标,若此【杀】不为黑色,你成为目标并摸两张牌回复一点体力',
						qmzd专对: '专对',
						qmzd专对_info: '当一名角色使用【杀】指定目标/成为【杀】的目标后,你可以摸一张牌与目标角色/此【杀】使用者拼点,若你赢,此杀不能被【闪】响应/对该角色无效',
						qmzd专对_use_info: '当一名角色使用【杀】指定目标后,你可以摸一张牌与目标角色拼点,若你赢,此杀不能被【闪】响应',
						qmzd专对_respond_info: '当一名角色【杀】的目标后,你可以摸一张牌与此【杀】使用者拼点,若你赢,此杀对你无效',
						qmtb天辩: '天辩',
						qmtb天辩_info: '你拼点时,可以改为用牌堆顶的一张牌进行拼点;当你拼点的牌亮出后,若此牌颜色为红色,则点数视为K',
						享乐: '享乐',
						交权: '交权',
						若愚: '若愚',
						享乐_info: '当其他玩家使用【杀】指定目标时,你可令其额外弃掉一张基本牌,否则该【杀】对其无效',
						交权_info: '一名角色出牌阶段你可令其跳过其的出牌阶段,若如此做,在其回合结束时可该角色弃一张手牌你令一名其他角色进行一个额外的回合',
						若愚_info: '准备阶段,你须增加1点体力上限,回复1点体力,并永久获得技能<激将>',
						激将刘禅: '激将',
						激将刘禅1: '激将',
						激将刘禅2: '激将',
						激将刘禅_info: '蜀势力角色可以帮你使用或打出[杀]',
						推弑: '推弑',
						推弑_info: '一名角色回合结束时可选择一名角色.该角色对其使用一张【杀】.你对该角色造成1点伤害',
						筹伐: '筹伐',
						筹伐2: '筹伐',
						筹伐_info: '出牌阶段限二次且每名角色一次,你可展示一名其他角色的一张手牌获得之.你令其不能使用或打出除杀以外的牌,直到其回合结束',
						昭然: '昭然',
						昭然_info: '每回合限四次,使用牌后摸两张牌弃置一名角色一张牌',
						成务: '成务',
						成务_info: '一名其他角色回合开始时你可展示该角色两张手牌并可弃置该角色两张牌,你将手牌数翻倍',
						奔袭: '奔袭',
						奔袭_info: '锁定技<br>距离你为1的角色受到伤害时<br>你回复一点体力<br>摸一张牌',
						图南: '图南',
						图南_info: '出牌阶段限五次,你可以展示牌堆顶的一张牌并选择一名角色,该角色选择一项:使用此牌(无距离限制);或将此牌当普通【杀】使用',
						闭境: '闭境',
						闭境_info: '结束阶段,你可以展示一张手牌并标记为<闭境>.若你于回合外失去<闭境>牌,则当前回合角色的弃牌阶段开始时其需弃置两张牌并失去一点体力.你的准备阶段,弃置手牌中的<闭境>牌',
						拒南: '拒南',
						拒南_info: '回合开始阶段,召唤两名士兵青城山剑侠与你协同作战,失去此技能',
						宴戏: '宴戏',
						宴戏2: '宴戏',
						宴戏_info: '出牌阶段限两次,你可获得一名角色一张牌并摸两张牌,你本回合手牌上限加二(不可累积)',
						宴戏2_info: '本回合手牌上限加二',
						识人: '识人',
						识人_info: '你的回合外每当一名其他角色使用一张基本或非延时锦囊牌指定目标时,你可以打出与该牌花色相同的手牌取消之;之后你获得该角色一张牌摸2张牌',
						曹婴凌人: '凌人',
						奸雄cy: '奸雄',
						行殇cy: '行殇',
						曹婴伏间: '伏间',
						曹婴凌人_info: '你使用【杀】或伤害类锦囊牌指定目标后,你选择其中一个目标是此牌对其伤害+1你摸2张牌,并且你获得<奸雄>、<行殇>直到你下回合开始.(每回合限触发4次)',
						奸雄cy_info: '每当你受到伤害后,你可以获得对你造成伤害的牌并摸一张牌',
						行殇cy_info: '你可以立即获得死亡角色的所有牌',
						曹婴伏间_info: '一名角色的回合开始时或结束时,你可以观看一名其他角色的手牌,你可以获得其中至多两张牌,并对其造成一点伤害',
						曹婴凤鸣: '凤鸣',
						曹婴凤鸣_info: '回合开始阶段,召唤士兵2×文德武卫与你协同作战,失去此技能',
						郡兵: '郡兵',
						郡兵2: '郡兵',
						去疾: '去疾',
						郡兵_info: '一名角色回合结束阶段其可摸两张牌若其为友方角色交给你全部手牌你交给其等量的牌若不为友方角色该角色受到一点伤害',
						去疾_info: '出牌阶段你可弃置不超过你体力上限数的牌令至多等量角色回复一点体力,若其中有黑色牌你摸两张牌',
						mocuan謀篡: '謀篡',
						mocuan謀篡_info: '出牌阶段限一次,你可摸与一名其他角色体力值差值的牌,使该角色体力值与你相同',
						景略jl: '景略',
						景略jl2: '景略',
						景略jl2_bg: '景',
						景略jl_info: '出牌阶段限2次,你可观看一名角色手牌获得其一张牌,且限每名角色回合限三次,该角色使用牌时令其无效',
						荡异: '荡异',
						荡异_info: '回合开始阶段,召唤死士×3,失去此技能',
						弘仪hy: '弘仪',
						弘仪hy2: '弘仪',
						弘仪hy_info: '出牌阶段限一次,你可以选择一名其他角色.你的下回合开始前,该角色造成伤害时进行判定,若结果为:黑色,此伤害-1,该角色失去一点体力.红色,受到伤害的角色摸一张牌',
						劝封qf: '劝封',
						劝封qf_info: '摸牌阶段开始时,若你手牌中没有桃,所有友方角色获得一张桃增加两点体力上限摸两张牌,在此之后你再次执行一次此效果(仅对你执行)',
						死士: '死士',
						死士_info: '每名角色回合限一次,当一名角色使用牌时你可令之无效,并观看其手牌获得其一张牌',
						长姬: '长姬',
						长姬1: '长姬',
						长姬2: '长姬',
						长姬x: '长姬',
						长姬y: '长姬',
						长姬_info: '一名角色回合结束后,若有角色于当前角色回合受到过伤害,你可增加一点体力上限回复一点体力摸三张牌获得一张杀,弃置一名角色两张牌',
						谮构: '谮构',
						谮构_info: '每名角色回合限一次,每当一名角色使用非装备牌后,若置入牌堆,你可获得之,并摸一张牌选择令该牌目标角色失去一点体力或使用该牌角色失去一点体力或令你摸一张牌',
						摧坚cj: '摧坚',
						摧坚cj_info: '出牌阶段限一次,你可获得一名角色所有牌,交给其获得其手牌中闪的数量的牌',
						同援: '同援',
						同援_info: '当你受到伤害后,你可令一名角色摸其手牌中基本牌数量的牌',
						选备: '选备',
						选备_info: '出牌阶段限一次,你可令一名角色对一名角色视为对其使用一张杀.若此被杀的角色选择弃置两张牌,你摸两张牌',
						娴婉: '娴婉',
						娴婉_info: '当你需要使用【闪】时,你可横置摸一张牌,视为使用一张【闪】;当你需要使用【杀】时,你可重置摸一张牌,视为使用一张【杀】',
						婉嫕: '婉嫕',
						婉嫕_info: '当你使用不为无懈可击的非装备牌指定唯一角色为目标时,你可获得其一张牌置于你的武将牌上.结束阶段或当你受到伤害后,你可获得一张你武将牌上的牌',
						埋祸: '埋祸',
						埋祸_info: '每名角色回合限一次,其他角色使用【杀】仅指定你为目标后,若其武将牌上没有牌,你可令此牌对你无效并获得其一张牌将一张牌置于你的婉嫕',
						固营: '固营',
						固营2: '固营',
						固营_info: '每名角色回合限2次,当你失去仅一张牌后,你可获得与此牌名点数花色相同的一张牌,并可使用一张牌并可获得一名角色一张牌.准备阶段,你可弃置一名角色X张牌(X为此前此技能发动过的次数),并重置此技能发动次数',
						睦阵: '睦阵',
						睦阵_info: '出牌阶段限2次,你可摸一张牌,获得一名角色一张牌,并可交给一名角色一张牌若为装备牌其可使用之',
						请决: '请决',
						请决_info: '当一名其他角色使用非装备牌指定角色为目标时,你可与其拼点若你赢,终止此牌后续结算',
						奉节: '奉节',
						奉节_info: '每名角色回合结束阶段或你回合开始,你可摸当前回合角色体力值数的牌,并可令一名角色弃置当前回合角色体力值数量的牌',
						浮萍: '浮萍',
						浮萍_info: '当其他角色对你使用牌时,你可以废除一名角色的一项装备栏,并可选择一名角色你选择一项:视为该角色对其使用一张杀、视为该角色使用桃、视为该角色使用酒、视为该角色对其使用一张过河拆桥、视为该角色对其使用一张顺手牵羊',
						炜烈: '炜烈',
						炜烈_info: '出牌阶段限两次,你可以令一名角色增加一点体力上限回复1点体力,摸两张牌选择弃置一张牌,你摸两张牌选择弃置一张牌',
						弥笃: '弥笃',
						弥笃_info: '出牌阶段限2次,你可以选择一项: 1,增加1到4点体力上限,令一名角色摸等量的牌; 2,减少1到4点体力上限,你可令等量角色获得『泼墨』直到你的下个回合开始',
						泼墨: '泼墨',
						泼墨_use: '泼墨',
						泼墨_use_backup: '泼墨',
						泼墨_info: '每当你需要使用一张本回合内未使用过的基本牌时,你可以将一张红色手牌或基本牌置于牌堆顶,视为你使用了此基本牌',
						泼墨_use_info: '每当你需要使用一张本回合内未使用过的基本牌时,你可以将一张红色手牌或基本牌置于牌堆顶,视为你使用了此基本牌',
						贤望: '贤望',
						贤望_info: '若你已受伤,其他角色计算与你的距离始终+2+你已损失体力值',
						哲妇: '哲妇',
						哲妇_info: '你于回合外失去牌结束后,你可以选择一项: 1,获得一张你选择的基本牌(花色点数为随机),对一名角色造成一点伤害; 2,对一名角色造成一点伤害,令其弃置你选择的基本牌名的所有手牌',
						遗毒: '遗毒',
						遗毒_info: '出牌阶段限一次,当你使用【杀】或伤害类锦囊牌指定其他角色为目标后,你可令选择其中一个目标令其弃置全部基本牌或锦囊牌,你摸两张牌',
						定措: '定措',
						定措_info: '每回合限一次,当你造成或受到伤害后,你可以摸两张牌,你令一名角色选择弃置其一张牌',
						狷狭: '狷狭',
						狷狭_info: '回合结束时,共可执行两次以下效果:你可选择一名其他角色,获得其区域内的一张牌,弃置其区域内的一张牌,对其造成一点伤害,视为对其使用一张【杀】',
						占梦: '占梦',
						占梦_info: '使用牌时,你可获得一名角色一张牌,将一张牌置于牌堆顶,令其进行判定,若为判定牌为黑色其失去一点体力,否则其回复一点体力',
						解卜: '解卜',
						解卜_info: '结束阶段,你可获得一名角色一张牌,将一张牌置于牌堆顶',
						勘破: '勘破',
						勘破2: '勘破',
						勘破_info: '你使用杀时或回合开始时,你可选择一名角色,观看并获得其一张牌,如果获得的牌为普通锦囊牌,你可选择一名角色,交给其一张牌,你获得一张顺手牵羊;每回合限一次,你可视为使用一张杀',
						更战: '更战',
						更战2: '更战',
						更战_info: '一名其他角色使用杀后,你获得一枚更标记,你可额外使用更标记数量的杀,结束阶段你可移除所有更标记摸等量的杀',
						z忠j鉴: '忠鉴',
						z忠j鉴_info: '出牌阶段限两次,你可弃置一名角色3张牌并摸2张牌',
						c才s识: '才识',
						c才s识2: '才识',
						c才s识3: '才识',
						c才s识4: '才识',
						c才s识_info: '出牌阶段开始你可①令一名其他角色手牌上限永久减2直到游戏结束②令该角色无法使用牌直到你回合结束③手牌上限永久加2④回复一点体力',
						非臣: '非臣',
						非臣2: '非臣',
						非臣_info: '一名角色回合结束阶段,若你受到过伤害或被使用牌指定过目标,你可获得其一张牌',
						鹰视: '鹰视',
						鹰视_info: '出牌阶段你可观看牌堆顶体力上限数的牌,并可以任意顺序置于牌堆顶',
						雄志: '雄志',
						雄志_info: '出牌阶段限一次,你可展示牌堆顶的你体力上限数的牌,依次获得其中伤害标签的牌并可选择使用一张带伤害标签的牌,弃置其余的牌',
						通权: '通权',
						通权_info: '你的回合限四次,你使用牌时可观看牌堆顶体力上限数的牌,并可以任意顺序置于牌堆顶,你摸一张牌',
						参鉴: '参鉴',
						参鉴_info: '每名角色回合限一次,一名角色使用普通锦囊牌结算结束后,你可弃置其一张牌若为黑色你可视为对一名角色使用该牌,否则你获得其一张牌',
						鉴从: '鉴从',
						鉴从_info: '每名角色回合限一次,一名角色从牌堆摸牌后,你可摸两张牌',
						陷嗣焰魂锁身: '陷嗣',
						陷嗣焰魂锁身2: '陷嗣',
						陷嗣焰魂锁身_info: '回合开始时,受到伤害时,濒死时,你可以将至多4名角色的各一张牌置于武将牌上,称为<逆>;出牌阶段,你可选择1到4名角色,令其横置,并对选中的第一名角色造成1点火焰伤害',
						开济: '开济',
						开济_info: '回合开始时或受到伤害后,你可令1到4名角色各摸一张牌,若此时是你的回合开始时所有友方角色获得一张杀,否则获得一张桃',
						慑叛: '慑叛',
						慑叛_info: '每回合限2次,当你成为其他角色使用牌的目标时,你可摸一张牌弃置其一张牌视为对其使用一张杀',
						移荣: '移荣',
						移荣_info: '出牌阶段限两次,你可令你手牌上限+1,并摸手牌上限张数的牌',
						贵相: '贵相',
						贵相_info: '回合结束时,你额外执行4个出牌阶段',
						穆荫: '穆荫',
						穆荫2: '穆荫',
						穆荫_info: '弃牌阶段开始时,你可选择一名角色令其手牌上限乘二,直到其回合结束后',
						长姬瑞雪芳梅: '长姬',
						长姬瑞雪芳梅1: '长姬',
						长姬瑞雪芳梅2: '长姬',
						长姬瑞雪芳梅x: '长姬',
						长姬瑞雪芳梅y: '长姬',
						长姬瑞雪芳梅_info: '一名角色回合结束后,若有角色于当前角色回合受到过伤害,你可增加一点体力上限回复一点体力摸三张牌,获得一张杀,弃置一名角色三张牌',
						谮构瑞雪芳梅: '谮构',
						谮构瑞雪芳梅_info: '每名角色回合限2次,每当一名角色使用非装备牌后,若置入牌堆,你可获得之,并摸一张牌选择令该牌目标角色失去一点体力或使用该牌角色失去一点体力或令你摸2张牌',
						忠勇qlhl: '忠勇',
						忠勇qlhl_info: '每名角色回合限两次,一名角色于回合内失去红色牌后,你可令一名角色获得杀闪桃各一张,并摸3张牌,随机获得1到3点护甲,并可将游戏外一张青龙偃月刀(♠️️5)置于其装备区,并可令其视为对一名角色使用一张杀',
						霞泪: '霞泪',
						霞泪_info: '每回合限3次,当你失去牌后,你可摸3张牌,你可令一名角色获得一张你牌中随机一张的复制,并可选择一名角色令其弃置一张红色牌',
						暗织: '暗织',
						暗织_info: '每回合限3次,当一名角色弃置牌之后或你受到伤害后,你可摸一张牌,选择一名有牌的角色你获得其随机一张牌的复制',
						秘计为夫守城: '秘计',
						秘计为夫守城_info: '回合开始或结束阶段,你可以选择一名其他角色,你摸至多X张牌(X为你已损失的体力值+其已损失体力值),你可以将等量的手牌交给其他角色',
						贞烈为夫守城: '贞烈',
						贞烈为夫守城_info: '当你成为其他角色使用【杀】或普通锦囊牌的目标后,你可令一名失去1点体力使此牌对你无效,你弃置其你已损失体力值+其已损失体力值张牌,你摸其已损失体力值+你体力上限的牌并可交给一名角色至多等量的手牌',
						急陷: '急陷',
						急陷_info: '出牌阶段开始时,你可选择一名角色视为对其使用一张杀,其手牌数、装备区内牌数、手牌数与装备区内牌数之和,每有一项比你少你便摸一张牌',
						zy战意: '战意',
						zy战意_basic_sha: '战杀',
						zy战意_basic_jiu: '战酒',
						zy战意_basic_tao: '战桃',
						zy战意_info: '出牌阶段限一次,你可以令一名角色弃置一张牌并失去1点体力,获得以下效果直到回合结束:一、你可以将一张基本牌当作杀、酒或桃使用;二、摸两张牌且你使用的牌无距离限制;三、你使用【杀】指定目标角色后,其弃置两张牌',
						决意: '决意',
						决意_info: '弃牌阶段后,你可令所有敌方角色弃置你于弃牌阶段弃牌数的牌,并对其造成一点神圣伤害',
						铤险: `<span style="color: #FF4500; font-size: 20px; font-weight: bold;">铤险</span>`,
						铤险_info: `<span style="color: #FF4500; font-size: 20px; font-weight: bold;">你使用杀指定目标时,摸你装备牌数的牌,若使用的杀为红色你获得1~3点护甲.目标角色须弃置一张闪,并有0.5概率其失去一点体力本回合非锁定技失效</span>`,
						奔矢: `<span style="color: #FF4500; font-size: 20px; font-weight: bold;">奔矢</span>`,
						奔矢_info: `<span style="color: #FF4500; font-size: 20px; font-weight: bold;">你的攻击范围+1,你使用的杀可令攻击范围内的任意名角色成为额外目标</span>`,
						虎豹袭术2: '虎豹袭术',
						虎豹袭术2_info: '锁定技,你计算与其他角色的距离-3',
						缮甲厉兵: '缮甲厉兵',
						缮甲厉兵_info: '你出牌阶段开始时可摸随机3～7张牌,你可选择一名角色视为对其使用等量张杀',
						虎豹袭术: '虎豹袭术',
						虎豹袭术_info: '每当你失去装备牌后,可摸随机1到3张牌,对一名角色造成随机1到3点伤害,本回合计算与其他角色距离-3',
						虎豹袭术zz2: '虎豹袭术',
						虎豹袭术zz2_info: '锁定技,你计算与其他角色的距离-3',
						缮甲厉兵zz: '缮甲厉兵',
						缮甲厉兵zz_info: '你出牌阶段开始时可摸随机3～7张牌,你可选择一名角色视为对其使用等量张杀',
						虎豹袭术zz: '虎豹袭术',
						虎豹袭术zz_info: '每当你失去装备牌后,可摸随机1到3张牌,对一名角色造成随机1到3点伤害,本回合计算与其他角色距离-3',
						倾袭cx: '倾袭',
						倾袭cx2: '倾袭',
						倾袭cx_info: '<span style="color: #007bff"><span >你使用杀或决斗指定目标时,可令目标角色弃置你攻击范围张牌,视为对其使用三张万箭齐发,你下次使用牌造成的伤害对其+等量值</span></span>',
					},
					skill: {
						zr_fanghun: {
							audio: 'ext:虎踞江东/audio:2',
							group: ['zr_fanghun2', 'zr_fanghun3'],
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							mark: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							init(player) {
								player.storage.zr_fanghun = 0;
								game.addVideo('storage', player, ['zr_fanghun', player.storage.zr_fanghun]);
								player.storage.zr_fanghun2 = 0;
							},
							content() {
								player.storage.zr_fanghun++;
								game.addVideo('storage', player, ['zr_fanghun', player.storage.zr_fanghun]);
								player.storage.zr_fanghun2++;
							},
							intro: {
								content: 'mark',
							},
							marktext: '梅',
						},
						zr_fanghun2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'shaBefore',
							},
							forced: true,
							filter(event, player) {
								if (event.skill != 'zr_longdan_sha') return false;
								return true;
							},
							content() {
								player.draw();
								player.storage.zr_fanghun--;
							},
						},
						zr_fanghun3: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'respond',
							},
							forced: true,
							filter(event, player) {
								if (event.skill != 'zr_longdan_shan' && event.skill != 'zr_longdan_sha') return false;
								return true;
							},
							content() {
								player.draw();
								player.storage.zr_fanghun--;
							},
						},
						zr_longdan: {
							group: ['zr_longdan_sha', 'zr_longdan_shan'],
							subSkill: {
								sha: {
									audio: 'ext:虎踞江东/audio:2',
									enable: ['chooseToUse', 'chooseToRespond'],
									filterCard: {
										name: 'shan',
									},
									viewAs: {
										name: 'sha',
										suit: 'diamond',
										number: 11,
									},
									viewAsFilter(player) {
										if (!player.num('h', 'shan')) return false;
										if (player.storage.zr_fanghun < 1) return false;
										return true;
									},
									prompt: '将一张闪当杀使用或打出',
									check() {
										return 1;
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'respondSha') && current < 0) return 0.6;
											},
										},
										respondSha: true,
										skillTagFilter(player) {
											if (!player.num('h', 'shan')) return false;
										},
										order: 4,
										useful: -1,
										value: -1,
										basic: {
											useful: [5, 1],
											value: [5, 1],
										},
										result: {
											target(player, target) {
												if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
													if (get.attitude(player, target) > 0) {
														return -6;
													} else {
														return -3;
													}
												}
												return -1.5;
											},
										},
										tag: {
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
								},
								shan: {
									audio: 'ext:虎踞江东/audio:2',
									enable: ['chooseToRespond'],
									filterCard: {
										name: 'sha',
									},
									viewAs: {
										name: 'shan',
										suit: 'spade',
										number: 10,
									},
									viewAsFilter(player) {
										if (!player.num('h', 'sha')) return false;
										if (player.storage.zr_fanghun < 1) return false;
										return true;
									},
									prompt: '将一张杀当闪打出',
									check() {
										return 1;
									},
									ai: {
										respondShan: true,
										skillTagFilter(player) {
											if (!player.num('h', 'sha')) return false;
											if (player.storage.zr_fanghun < 1) return false;
											return true;
										},
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'respondShan') && current < 0) return 0.6;
											},
										},
										order: 4,
										useful: -1,
										value: -1,
										basic: {
											useful: [7, 2],
											value: [7, 2],
										},
									},
								},
							},
						},
						zr_fuhan: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.storage.zr_fanghun2 > 0;
							},
							check(event, player) {
								return player.storage.zr_fanghun2 > 3;
							},
							content() {
								'step 0';
								var list = [];
								for (var i in lib.character) {
									if (lib.character[i].mode && lib.character[i].mode.includes(lib.config.mode) == false) continue;
									if (lib.character[i][1] != player.group) continue;
									if (i != 'list') list.push(i);
								}
								for (var j = 0; j < game.players.length; j++) {
									list.remove([game.players[j].name]);
									list.remove([game.players[j].name2]);
								}
								var slist = list.randomRemove(5);
								player.chooseButton(ui.create.dialog([slist, 'character']), true, function (button) {
									var i = Math.floor(Math.random() * slist.length);
									return slist[i];
								});
								('step 1');
								var num = player.hp;
								var num2 = player.storage.zr_fanghun2;
								player.uninit();
								player.init(result.buttons[0].link, 'shibing');
								player.identity = player.identity;
								player._group = player.identity;
								player.setIdentity(player.identity);
								player.hp = num;
								player.maxHp = num2;
								player.update();
								('step 2');
								var num3 = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i] != player && game.players[i].hp < player.hp) {
										num3++;
									}
								}
								if (num3 == 0) {
									player.recover();
								}
							},
						},
						yingzihq: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								threaten: 1.3,
							},
						},
						hq_qizhou: {
							trigger: {
								player: 'equipEnd',
							},
							forced: true,
							popup: false,
							content() {
								var list = [];
								var hs = player.getCards('e');
								for (var i = 0; i < hs.length; i++) {
									if (!list.includes(hs[i].suit)) {
										list.push(hs[i].suit);
									}
								}
								if (!player.storage.hq_qizhou) {
									player.storage.hq_qizhou = [];
									if (player.hasSkill('mashu')) {
										player.storage.hq_qizhou.push('mashu');
									}
									if (player.hasSkill('yingzihq')) {
										player.storage.hq_qizhou.push('yingzihq');
									}
									if (player.hasSkill('hq_duanbing')) {
										player.storage.hq_qizhou.push('hq_duanbing');
									}
									if (player.hasSkill('fenwei')) {
										player.storage.hq_qizhou.push('fenwei');
									}
								}
								if (player.storage.hq_qizhou.includes('mashu') == false) {
									player.removeSkill('mashu');
								}
								if (player.storage.hq_qizhou.includes('yingzihq') == false) {
									player.removeSkill('yingzihq');
								}
								if (player.storage.hq_qizhou.includes('hq_duanbing') == false) {
									player.removeSkill('hq_duanbing');
									if (player.storage.hq_qizhou.includes('fenwei') == false) {
										player.removeSkill('fenwei');
									}
									if (list.length >= 1) {
										player.addSkill('mashu');
									}
									if (list.length >= 2) {
										player.addSkill('yingzihq');
									}
									if (list.length >= 3) {
										player.addSkill('hq_duanbing');
									}
									if (list.length == 4) {
										player.addSkill('fenwei');
									}
								}
							},
							group: 'hq_qizhou2',
						},
						hq_qizhou2: {
							audio: 'ext:虎踞江东/audio:4',
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.original == 'e') return true;
									}
								return false;
							},
							content() {
								var list = [];
								var hs = player.getCards('e');
								for (var i = 0; i < hs.length; i++) {
									if (!list.includes(hs[i].suit)) {
										list.push(hs[i].suit);
									}
								}
								if (!player.storage.hq_qizhou) {
									player.storage.hq_qizhou = [];
									if (player.hasSkill('mashu')) {
										player.storage.hq_qizhou.push('mashu');
									}
									if (player.hasSkill('yingzihq')) {
										player.storage.hq_qizhou.push('yingzihq');
									}
									if (player.hasSkill('hq_duanbing')) {
										player.storage.hq_qizhou.push('hq_duanbing');
									}
									if (player.hasSkill('fenwei')) {
										player.storage.hq_qizhou.push('fenwei');
									}
								}
								if (player.storage.hq_qizhou.includes('mashu') == false) {
									player.removeSkill('mashu');
								}
								if (player.storage.hq_qizhou.includes('yingzihq') == false) {
									player.removeSkill('yingzihq');
								}
								if (player.storage.hq_qizhou.includes('hq_duanbing') == false) {
									player.removeSkill('hq_duanbing');
									if (player.storage.hq_qizhou.includes('fenwei') == false) {
										player.removeSkill('fenwei');
									}
									if (list.length >= 1) {
										player.addSkill('mashu');
									}
									if (list.length >= 2) {
										player.addSkill('yingzihq');
									}
									if (list.length >= 3) {
										player.addSkill('hq_duanbing');
									}
									if (list.length == 4) {
										player.addSkill('fenwei');
									}
								}
							},
						},
						hq_shanxi: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('he') > 0 && player.canUse({ name: 'sha' }, target);
							},
							content() {
								'step 0';
								player.discardPlayerCard(target, 'he', true);
								('step 1');
								if (result.links[0].name == 'shan' && event.target.countCards('h')) {
									player.viewCards('闪袭', target.getCards('h'));
								}
								if (result.links[0].name != 'shan' && player.countCards('h')) {
									event.target.viewCards('闪袭', player.getCards('h'));
								} else {
									event.finish();
								}
							},
							ai: {
								order: 7,
								result: {
									target: -1,
								},
								effect: {
									target(card, player, target) {
										if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
											if (player.hasSkill('jueqing')) return [1, -1.5];
											if (get.attitude(target, player) < 0) return [1, 1];
										}
									},
								},
								threaten: 1.1,
							},
						},
						kz_xiashu: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('kz_xiashu'), function (card, player, target) {
									return player != target;
								}).ai = function (target) {
									if (get.attitude(_status.event.player, target) > 0) {
										if (target.hasSkill('tuntian')) return 18;
										if (target.hasSkillTag('noe')) return 22;
										return get.attitude(_status.event.player, target);
									}
									if (get.attitude(_status.event.player, target) < 0 && player.countCards('h') > 1) {
										if (target.countCards('h') <= 1) return 0;
										if (target.hasSkillTag('noe')) return 0.001;
										return -get.attitude(_status.event.player, target);
									}
									return 1;
								};
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									var cards = player.getCards('h');
									event.target.gain(cards);
									player.$give(cards, event.target);
								} else {
									event.finish();
								}
								('step 2');
								event.target.chooseCard('选择展示的牌', 'h', [1, event.target.countCards('h')], true).ai = function (card) {
									if (get.attitude(target, player) >= 3) {
										return 5 - get.value(card);
									}
									if (get.attitude(target, player) <= 0) {
										return 4 - get.value(card);
									}
									return 4 - get.value(card);
								};
								('step 3');
								event.target.storage.kz_xiashu = result.cards;
								event.target.showCards(result.cards);
								player.chooseControl('获得展示的牌', '获得未展示的牌').ai = function () {
									if (Math.random() < 0.5) return '获得展示的牌';
									return '获得未展示的牌';
								};
								('step 4');
								var card = event.target.getCards('h');
								var card1 = event.target.storage.kz_xiashu;
								var card2 = [];
								for (var j = 0; j < card.length; j++) {
									if (!event.target.storage.kz_xiashu.includes(card[j])) card2.push(card[j]);
								}
								if (result.control == '获得未展示的牌') {
									player.gain(card2);
									event.target.$give(card2, player);
								} else {
									player.gain(card1);
									event.target.$give(card1, player);
								}
							},
							ai: {
								threaten: 2,
							},
						},
						kz_kuanshi: {
							trigger: {
								player: 'phaseEnd',
							},
							silent: true,
							popup: false,
							forced: true,
							audio: 'ext:虎踞江东/audio:2',
							content() {
								'step 0';
								player.chooseTarget(get.prompt('kz_kuanshi')).ai = function (target) {
									if (target.isMin()) return 0;
									var att = get.attitude(player, target);
									if (att >= 4) {
										if (target.hp == 1 && target.maxHp > 2) return att;
										if (target.hp == 2 && target.maxHp > 3 && target.countCards('he') == 0) return att * 0.7;
										return 0;
									}
									return -1;
								};
								('step 1');
								if (result.bool) {
									result.targets[0].addSkill('kz_kuanshi2');
								} else {
									event.finish();
								}
							},
							group: ['kz_kuanshi4', 'kz_kuanshi5'],
							ai: {
								expose: 0.2,
								threaten: 1.4,
							},
							forced: true,
						},
						kz_kuanshi2: {
							trigger: {
								player: 'damageBefore',
							},
							filter(event, player) {
								if (event.num > 1) return true;
								return false;
							},
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
								player.addSkill('kz_kuanshi3');
							},
						},
						kz_kuanshi3: {},
						kz_kuanshi4: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							filter(event, player) {
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].hasSkill('kz_kuanshi3')) return true;
								}
								return false;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						kz_kuanshi5: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: ['phaseUseBegin', 'dieBegin'],
							},
							forced: true,
							popup: false,
							silent: true,
							content() {
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].hasSkill('kz_kuanshi2')) {
										game.players[i].removeSkill('kz_kuanshi2');
									}
								}
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].hasSkill('kz_kuanshi3')) {
										game.players[i].removeSkill('kz_kuanshi3');
									}
								}
							},
						},
						mz_fuman: {
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								if (target.hasSkill('mz_fuman2')) return false;
								return player != target;
							},
							filter(event, player) {
								return player.num('h', 'sha') > 0;
							},
							filterCard: {
								name: 'sha',
							},
							check(event, player) {
								return player.num('h', 'sha') > 0;
							},
							discard: false,
							lose: true,
							content() {
								player.$give(cards, target);
								target.gain(cards, player);
								target.addTempSkill('mz_fuman2', { player: 'phaseAfter' });
								target.storage.mz_fuman2_card = cards;
								target.storage.mz_fuman2 = player;
							},
							ai: {
								result: {
									target(player, target, card) {
										if (player.hp <= 1 && player.num('h', 'shan') && player.countCards('h') <= 2) return 0;
										if (get.attitude(player, target) < 3) return 0;
										if (target.hasSkill('shuangxiong')) return player.countCards('h') * 5.5;
										if (target.hasSkill('reluoyi')) return 15;
										if (target.hasSkill('rekurou')) return 13;
										return get.attitude(player, target);
									},
								},
							},
						},
						mz_fuman2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return player.storage.mz_fuman2_card.includes(event.card);
							},
							content() {
								var target = player.storage.mz_fuman2;
								if (target && target.isAlive()) {
									target.draw();
								}
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (player.storage.mz_fuman2_card.includes(card)) return [1, 1];
									},
								},
							},
						},
						dy_bingzheng: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseUseEnd',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget('是否发动【秉正】？', function (card, player, target) {
									return target.countCards('h') != target.hp;
								}).ai = function (target) {
									if (get.attitude(_status.event.player, target) > 0) {
										if (target.hp - target.countCards('h') == 1) return 22;
										if (target.hasSkillTag('noe')) return 18;
										return get.attitude(_status.event.player, target);
									}
									if (get.attitude(_status.event.player, target) < 0) {
										if (target.countCards('h') - target.hp == 1) return 21;
										if (target.hasSkillTag('noe')) return 0.001;
										return -get.attitude(_status.event.player, target);
									}
									return 1;
								};
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									var controls = ['draw_card'];
									if (event.target.countCards('h')) {
										controls.push('discard_card');
									}
									player.chooseControl(controls, function (event, player) {
										if (get.attitude(player, event.target) > 0) return 'draw_card';
										return 'discard_card';
									});
								} else {
									event.finish();
								}
								('step 2');
								if (result.control == 'draw_card') {
									event.target.draw();
								} else {
									event.target.chooseToDiscard(true);
								}
								('step 3');
								if (event.target.hp == event.target.countCards('h')) {
									player.draw();
									player.chooseCard('请交给' + get.translation(event.target) + '一张牌').ai = function (card) {
										return 10 - get.value(card);
									};
								} else {
									event.finish();
								}
								('step 4');
								if (result.bool) {
									event.target.gain(result.cards);
									player.$give(result.cards, event.target);
								}
							},
							ai: {
								threaten: 1.5,
							},
						},
						dy_sheyan: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								target: 'useCardToBegin',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'trick' && event.cards[0] && event.cards[0] == event.card && event.card.name != 'jiedao';
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('dy_sheyan'), function (card, player, target) {
										if (player == target) return false;
										var trigger = _status.event.getTrigger();
										if (trigger.card.name == 'wuzhong') return trigger.targets.includes(target) == false;
										return trigger.player.canUse(trigger.card, target) && trigger.targets.includes(target) == false;
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return ai.get.effect(target, trigger.card, player, player) + 1;
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								game.log(event.target, '成为了', trigger.card, '的额外目标');
								trigger.targets.push(event.target);
							},
						},
						hq_duanbing: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'shaBefore',
							},
							forced: true,
							filter(event, player) {
								return !player.hasSkill('hq_duanbing2');
							},
							content() {
								'step 0';
								player.chooseTarget('是否发动短兵？', function (card, player, target) {
									return player.canUse('sha', target) && get.distance(player, target) <= 1 && !trigger.targets.includes(target);
								}).ai = function (target) {
									return ai.get.effect(target, { name: 'sha' }, player);
								};
								('step 1');
								if (result.bool) {
									trigger.targets.push(result.targets[0]);
									player.addTempSkill('hq_duanbing2', 'useCardAfter');
								}
							},
						},
						hq_duanbing2: {},
						结训: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							init(player) {
								player.storage.结训 = 0;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('结训'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return _status.event.coeff * get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									var num = game.roundNumber;
									event.target.chooseToDiscard(num, true, 'he');
								} else {
									event.finish();
								}
							},
						},
						复难: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: ['respondAfter', 'useCardAfter'],
							},
							filter(event, player) {
								if (!event.respondTo) return false;
								if (event.player == player) return false;
								if (player != event.respondTo[0]) return false;
								if (get.itemtype(event.cards) != 'cards') return false;
								if (['h', 'e', 'j'].includes(get.position(event.cards[0]))) return false;
								if (get.itemtype(event.respondTo[1]) != 'card') return false;
								if (['h', 'e', 'j'].includes(get.position(event.respondTo[1]))) return false;
								return true;
							},
							logTarget: 'player',
							check(event, player) {
								if (get.attitude(player, event.player) >= 0) return true;
								if (player.hasSkill('复难_jiexun') && player.storage.复难_jiexun == event.player) return true;
								if (event.cards.length > 1) return true;
								return get.value(event.cards[0]) > get.value(event.respondTo[1]);
							},
							content() {
								'step 0';
								if (!player.hasSkill('复难_jiexun') || player.storage.复难_jiexun != trigger.player) {
									trigger.player.gain(trigger.respondTo[1], 'gain2');
									trigger.player.addTempSkill('复难_use');
									if (!trigger.player.storage.复难_use) {
										trigger.player.storage.复难_use = [];
									}
									trigger.player.storage.复难_use.add(trigger.respondTo[1]);
								}
								('step 1');
								player.gain(trigger.cards, 'gain2');
							},
							subSkill: {
								jiexun: {
									intro: {
										content: '你发动<复难>时,无须令$获得你使用的牌',
									},
									trigger: {
										global: 'dieAfter',
									},
									silent: true,
									filter(event, player) {
										return player.storage.复难_jiexun == event.player;
									},
									content() {
										player.removeSkill('复难_jiexun');
									},
									forced: true,
									popup: false,
								},
								use: {
									mod: {
										cardEnabled(card, player) {
											if (player.storage.复难_use && player.storage.复难_use.includes(card)) {
												return false;
											}
										},
									},
								},
							},
						},
						戒训: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.countCards('ej', { color: 'red' });
								});
							},
							init(player) {
								player.storage.戒训 = 0;
							},
							forced: true,
							content() {
								'step 0';
								var num1 = game.countPlayer(function (current) {
									return current.countCards('ej', { color: 'red' });
								});
								var num2 = player.storage.戒训;
								event.num1 = num1;
								event.num2 = num2;
								var str = '令目标摸' + get.cnNumber(num1) + '张牌';
								if (num2) {
									str += ',弃置' + get.cnNumber(num2) + '张牌;若目标因此法弃置了所有牌,则你失去<诫训>,你发动<复难>时,无须令其获得你使用的牌';
								}
								player
									.chooseTarget(get.prompt('戒训'))
									.set('ai', function (target) {
										return _status.event.coeff * get.attitude(_status.event.player, target);
									})
									.set('coeff', num1 >= num2 ? 1 : -1)
									.set('prompt2', str);
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									target.draw(event.num1);
									player.storage.戒训++;
								} else {
									event.finish();
								}
								('step 2');
								if (event.num2) {
									event.target.chooseToDiscard(event.num2, true, 'he');
								} else {
									event.finish();
								}
								('step 3');
								if (!event.target.countCards('he')) {
									player.removeSkill('戒训');
									player.storage.复难_jiexun = event.target;
									player.addSkill('复难_jiexun');
								}
							},
						},
						独进: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: ['phaseEnd', 'phaseBegin', 'phaseDrawBegin'],
							},
							forced: true,
							content() {
								player.draw(1 + player.countCards('e') * 2);
							},
						},
						定叛: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								var num;
								if (get.mode() == 'identity') {
									num = get.population('fan');
								} else {
									num = 4;
								}
								if (player.getStat().skill.定叛 >= num) return false;
								return true;
							},
							filterTarget(card, player, target) {
								return target.countCards('e') > 0;
							},
							content() {
								'step 0';
								target.draw();
								('step 1');
								var goon = get.damageEffect(target, player, target) >= 0;
								if (!goon && target.hp >= 4 && get.attitude(player, target) < 0) {
									var es = target.getCards('e');
									for (var i = 0; i < es.length; i++) {
										if (get.equipValue(es[i], target) >= 8) {
											goon = true;
											break;
										}
									}
								}
								target
									.chooseControl(function () {
										if (_status.event.goon) return '选项二';
										return '选项一';
									})
									.set('goon', goon)
									.set('prompt', '定叛')
									.set('choiceList', ['令' + get.translation(player) + '弃置你装备区里的一张牌', '获得你装备区内的所有牌并受到一点伤害']);
								('step 2');
								if (result.control == '选项一') {
									player.discardPlayerCard(target, true, 'e');
									event.finish();
								} else {
									target.gain(target.getCards('e'), 'gain2');
								}
								('step 3');
								target.damage();
							},
							ai: {
								order: 7,
								result: {
									target(player, target) {
										if (get.damageEffect(target, player, target) >= 0) return 2;
										var att = get.attitude(player, target);
										if (att == 0) return 0;
										var es = target.getCards('e');
										if (att > 0 && (target.countCards('h') > 2 || target.needsToDiscard(1))) return 0;
										if (es.length == 1 && att > 0) return 0;
										for (var i = 0; i < es.length; i++) {
											var val = get.equipValue(es[i], target);
											if (val <= 4) {
												if (att > 0) {
													return 1;
												}
											} else if (val >= 7) {
												if (att < 0) {
													return -1;
												}
											}
										}
										return 0;
									},
								},
							},
						},
						弘德: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: ['gainEnd', 'loseEnd'],
							},
							forced: true,
							filter(event, player) {
								return event.cards && event.cards.length > 1;
							},
							content() {
								'step 0';
								player.draw();
								player
									.chooseTarget(get.prompt('弘德'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].draw();
								}
							},
						},
						奋励: {
							group: ['奋励_draw', '奋励_use', '奋励_discard'],
							subSkill: {
								draw: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										player: 'phaseDrawBefore',
									},
									prompt: '是否发动【奋励】跳过摸牌阶段？',
									filter(event, player) {
										return player.isMaxHandcard();
									},
									check(event, player) {
										if (player.storage.平寇) return false;
										return game.hasPlayer(function (current) {
											return get.attitude(player, current) < 0 && current.hp == 1 && get.damageEffect(current, player, player) > 0;
										});
									},
									content() {
										trigger.cancel();
										player.draw();
									},
								},
								use: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										player: 'phaseUseBefore',
									},
									prompt: '是否发动【奋励】跳过出牌阶段？',
									filter(event, player) {
										return player.isMaxHp();
									},
									check(event, player) {
										if (!player.needsToDiscard() || (player.countCards('e') && player.isMaxEquip())) return true;
										if (player.storage.平寇) return false;
										return game.hasPlayer(function (current) {
											return get.attitude(player, current) < 0 && current.hp == 1 && get.damageEffect(current, player, player) > 0;
										});
									},
									content() {
										trigger.cancel();
										player.draw();
									},
								},
								discard: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										player: 'phaseDiscardBefore',
									},
									prompt: '是否发动【奋励】跳过弃牌阶段？',
									filter(event, player) {
										return player.isMaxEquip() && player.countCards('e');
									},
									content() {
										trigger.cancel();
										player.draw();
									},
								},
							},
							ai: {
								combo: '平寇',
							},
						},
						平寇: {
							group: ['平寇_init', '平寇_count'],
							subSkill: {
								init: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										player: 'phaseBegin',
									},
									silent: true,
									content() {
										player.storage.平寇 = 0;
									},
									forced: true,
									popup: false,
								},
								count: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										player: ['phaseJudgeCancelled', 'phaseJudgeSkipped', 'phaseDrawCancelled', 'phaseDrawSkipped', 'phaseUseCancelled', 'phaseUseSkipped', 'phaseDiscardCancelled', 'phaseDiscardSkipped'],
									},
									silent: true,
									content() {
										player.storage.平寇++;
									},
									forced: true,
									popup: false,
								},
							},
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.storage.平寇 > 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget([1, player.storage.平寇], get.prompt2('平寇'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets.slice(0).sortBySeat();
								} else {
									event.finish();
								}
								('step 2');
								if (event.targets && event.targets.length) {
									event.targets.shift().damage();
									event.redo();
								}
							},
							ai: {
								combo: '奋励',
								effect: {
									target(card) {
										if (card.name == 'lebu' || card.name == 'bingliang') return 0.5;
									},
								},
							},
						},
						怀橘: {
							marktext: '橘',
							init(player) {
								player.storage.怀橘 = 0;
							},
							intro: {
								content(storage) {
									return '当前有' + storage + '个<橘>';
								},
							},
							mark: true,
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							content() {
								player.storage.怀橘 += 6;
								game.log(player, '获得了6个<橘>');
							},
						},
						_怀橘: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return player.storage.怀橘 > 0;
							},
							content() {
								trigger.cancel();
								player.storage.怀橘--;
								if (player.storage.怀橘 <= 0) player.unmarkSkill('怀橘');
								game.log(player, '移去了1个<橘>');
							},
						},
						_怀橘1: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							filter(event, player) {
								return player.storage.怀橘 > 0;
							},
							content() {
								trigger.num += 2;
							},
						},
						遗礼: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('遗礼'), function (card, player, target) {
									return target != player;
								}).ai = function (target) {
									if (player.storage.怀橘 > 1) return get.attitude(player, target);
									return -1;
								};
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									var list = ['回复一点体力'];
									if (player.storage.怀橘 > 0) list.push('移去一个<橘>');
									player.chooseControl(list).set('ai', function () {
										if (player.storage.怀橘 > 0) return '移去一个<橘>';
										return '回复一点体力';
									});
								} else {
									event.finish();
								}
								('step 2');
								if (result.control == '移去一个<橘>') {
									player.storage.怀橘--;
									if (player.storage.怀橘 <= 0) player.unmarkSkill('怀橘');
									game.log(player, '移去了1个<橘>');
								} else {
									player.recover();
								}
								player.line(event.target);
								if (event.target.storage.怀橘 == undefined) event.target.storage.怀橘 = 0;
								event.target.markSkill('怀橘');
								event.target.storage.怀橘++;
								game.log(event.target, '获得了1个<橘>');
							},
						},
						整论: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseJudgeBefore',
							},
							check(event, player) {
								return player.countCards('h') >= 2 || player.skipList.includes('phaseUse');
							},
							content() {
								trigger.cancel();
								if (player.storage.怀橘 == undefined) player.storage.怀橘 = 0;
								player.markSkill('怀橘');
								player.storage.怀橘++;
								game.log(player, '获得了1个<橘>');
							},
						},
						决堰: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 4,
							content() {
								'step 0';
								player.draw(2);
								player.recover();
								player.chooseControl('建武', '忠勤', '驻陵', '谋策');
								('step 1');
								if (result.control == '建武') {
									player.addTempSkill('决堰1', { player: 'phaseAfter' });
								}
								if (result.control == '忠勤') {
									player.draw(3);
									player.addTempSkill('决堰3', { player: 'phaseAfter' });
								}
								if (result.control == '驻陵') {
									player.addTempSkill('决堰2', { player: 'phaseAfter' });
								}
								if (result.control == '谋策') {
									player.addTempSkill('jzlk', { player: 'phaseAfter' });
								}
							},
							ai: {
								order: 13,
								result: {
									player(player) {
										if (!player.isDisabled('防具')) return 1;
										if (
											!player.isDisabled('武器') &&
											player.countCards('h', function (card) {
												return card.name == 'sha' && player.hasUseTarget(card);
											}) -
											player.getCardUsable('sha') >
											1
										)
											return 1;
										if (
											!player.isDisabled('宝物') &&
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
						决堰1: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 3;
								},
							},
						},
						决堰2: {
							mod: {
								targetInRange(card, player, target, now) {
									return true;
								},
							},
						},
						决堰3: {
							mod: {
								maxHandcard(player, num) {
									return num + 3;
								},
							},
						},
						谦节: {
							group: ['谦节_1', '谦节_2', '谦节_3'],
							subSkill: {
								1: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										player: 'linkBegin',
									},
									forced: true,
									content() {
										trigger.cancel();
										player.draw();
									},
								},
								2: {
									mod: {
										targetEnabled(card, player, target) {
											if (get.type(card) == 'delay') return false;
										},
									},
								},
								3: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										global: 'chooseToCompareBegin',
									},
									forced: true,
									filter(event, player) {
										return event.target == player;
									},
									content() {
										trigger.cancel();
										player.draw();
									},
								},
							},
						},
						破势: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							derivation: ['怀柔'],
							content() {
								player.gainMaxHp();
								var num = player.maxHp - player.countCards('h');
								if (num > 0) player.draw(num);
								player.addSkill('怀柔');
							},
						},
						怀柔: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('h', { type: 'equip' }) > 0;
							},
							filterCard(card) {
								return get.type(card) == 'equip';
							},
							check(card) {
								return 1;
							},
							content() {
								player.draw(2);
							},
							discard: false,
							prompt: '将一张装备牌置入弃牌堆并摸2张牌',
							delay: 0.5,
							prepare(cards, player) {
								player.$throw(cards, 1000);
							},
						},
						jzlk: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick' || get.type(event.card, 'delay') == 'delay';
							},
							content() {
								player.draw();
							},
							ai: {
								threaten: 1.4,
								noautowuxie: true,
							},
						},
						qqwz锐樾: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'equip';
							},
							content() {
								'step 0';
								var card = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								event.card = card;
								('step 1');
								if (event.card) {
									player.equip(event.card);
								}
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return (num += player.countCards('e'));
								},
								maxHandcard(player, num) {
									if (player.hp < player.maxHp) return (num += player.countCards('e'));
								},
							},
							group: 'qqwz锐樾_1',
							subSkill: {
								1: {
									trigger: {
										player: 'phaseDrawBegin',
									},
									forced: true,
									audio: 'ext:虎踞江东/audio:2',
									content() {
										trigger.num += player.countCards('e');
									},
								},
							},
						},
						闪贺袭齐: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('he') > 0 && player.canUse({ name: 'sha' }, target);
							},
							content() {
								'step 0';
								player.discardPlayerCard(target, 'he', true);
								('step 1');
								if (result.links[0].name == 'shan' && event.target.countCards('h')) {
									player.viewCards('闪贺袭齐', target.getCards('h'));
								}
								if (result.links[0].name != 'shan' && player.countCards('h')) {
									event.target.viewCards('闪贺袭齐', player.getCards('h'));
								} else {
									event.finish();
								}
							},
							ai: {
								order: 7,
								result: {
									target: -1,
								},
								effect: {
									target(card, player, target) {
										if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
											if (player.hasSkill('jueqing')) return [1, -1.5];
											if (get.attitude(target, player) < 0) return [1, 1];
										}
									},
								},
								threaten: 1.1,
							},
						},
						短贺兵齐: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								return game.hasPlayer(function (current) {
									return !event.targets.includes(current) && get.distance(player, current) <= 1 && player.canUse('sha', current);
								});
							},
							forced: true,
							content() {
								'step 0';
								player.draw(2);
								player.recover();
								player
									.chooseTarget(get.prompt('短贺兵齐'), function (card, player, target) {
										return !_status.event.source.includes(target) && get.distance(player, target) <= 1 && player.canUse('sha', target);
									})
									.set('source', trigger.targets)
									.set('ai', function (target) {
										var player = _status.event.player;
										return ai.get.effect(target, { name: 'sha' }, player, player);
									});
								('step 1');
								if (result.bool) {
									if (!event.isMine() && !_status.connectMode) game.delay(0.5);
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								trigger.targets.push(event.target);
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (card.name == 'sha') {
											if (player._duanbingtmp) return;
											player._duanbingtmp = true;
											if (ai.get.effect(target, { name: 'sha' }, player, player) <= 0) {
												delete player._duanbingtmp;
												return;
											}
											if (
												game.hasPlayer(function (current) {
													return current != target && get.distance(player, current) <= 1 && player.canUse('sha', current) && ai.get.effect(current, { name: 'sha' }, player, player) > 0;
												})
											) {
												delete player._duanbingtmp;
												return [1, 1];
											}
											delete player._duanbingtmp;
										}
									},
								},
							},
						},
						胆守: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								//global:["damageEnd","useCardToBegin"],
								global: 'damageEnd',
							},
							_priority: 9,
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								var evt = _status.event.getParent('phase');
								if (evt && evt.name) {
									evt.finish();
								}
							},
							ai: {
								jueqing: true,
							},
						},
						尚义: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 5, //QQQ
							filter: (event, player) => game.countPlayer((Q) => Q.countCards('h') && player != Q),
							filterTarget(card, player, target) {
								return player != target && target.countCards('h');
							},
							content() {
								'step 0';
								player.chooseCardButton(target, target.getCards('h')).set('filterButton', function (button) {
									return get.color(button.link) == 'black';
								});
								('step 1');
								if (result.bool) {
									target.discard(result.links[0]);
									target.loseHp();
								}
							},
							ai: {
								order: 11,
								result: {
									target(player, target) {
										return -target.countCards('h');
									},
								},
								threaten: 1.1,
							},
						},
						鸟翔: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('h');
							},
							content() {
								'step 0';
								player.viewHandcards(target);
								('step 1');
								if (target.countCards('h', 'sha') > 0) {
									player.discardPlayerCard(target, 'h', true).set('visible', true);
								} else {
									if (player.canUse({ name: 'sha', nature: 'thunder' }, target, false)) {
										player.useCard({ name: 'sha', nature: 'thunder' }, target, false);
									}
								}
							},
							ai: {
								order: 11,
								result: {
									target(player, target) {
										return -1;
									},
								},
								threaten: 1.1,
							},
						},
						勤国_use: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'equipEnd',
							},
							filter(event, player) {
								return true;
							},
							forced: true,
							content() {
								player.recover();
							},
							ai: {
								reverseEquip: true,
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip' && player == target && player == _status.currentPhase) return [1, 3];
									},
								},
							},
						},
						勤国: {
							group: ['勤国_use', '勤国_lose'],
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'useCardAfter',
							},
							filter(event, player) {
								return get.type(event.card) == 'equip';
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('勤国'), function (card, player, target) {
										if (player == target) return false;
										return player.canUse({ name: 'sha' }, target);
									})
									.set('ai', function (target) {
										return get.effect(target, { name: 'sha' }, _status.event.player);
									});
								('step 1');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						勤国_lose: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'loseEnd',
							},
							filter(event, player) {
								if (event.parent.name == 'equip') return false;
								return true;
							},
							forced: true,
							content() {
								player.recover();
							},
						},
						归命: {},
						残蚀: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseDrawBefore' },
							check(event, player) {
								var num =
									2 +
									game.countPlayer(function (current) {
										if (player.hasSkill('归命') && current.group == 'wu') return true;
										return current.isDamaged();
									});
								return num > 3;
							},
							prompt(event, player) {
								var num =
									2 +
									game.countPlayer(function (current) {
										if (player.hasSkill('归命') && current.group == 'wu' && current != player) return true;
										return current.isDamaged();
									});
								return '残蚀:是否改为摸' + get.cnNumber(num) + '张牌？';
							},
							content() {
								trigger.cancel();
								var num =
									2 +
									game.countPlayer(function (current) {
										if (player.hasSkill('归命') && current.group == 'wu' && current != player) return true;
										return current.isDamaged();
									});
								if (num > 0) {
									player.draw(num);
								}
								player.addTempSkill('残蚀2');
							},
						},
						残蚀2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCard' },
							forced: true,
							filter(event, player) {
								if (player.countCards('he') == 0) return false;
								var type = get.type(event.card, 'trick');
								return type == 'basic' || type == 'trick';
							},
							content() {
								'step 0';
								if (!event.isMine() || _status.connectMode) game.delay(0.5);
								player
									.chooseTarget(get.prompt('残蚀2'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard(true, 'he');
								}
							},
						},
						仇海: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { source: 'damageBegin' },
							forced: true,
							check() {
								return false;
							},
							filter(event, player) {
								return player.countCards('h') > player.hp;
							},
							content() {
								trigger.num++;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage') && target.countCards('h') == 0) return [1, -2];
									},
								},
							},
						},
						枭武姬: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'loseEnd',
							},
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.original == 'e') return true;
									}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								event.num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].original == 'e') event.num++;
								}
								('step 1');
								event.num--;
								player
									.chooseControl('确定', '取消', function (event, player) {
										return '确定';
									})
									.set('prompt', get.prompt('枭武姬'));
								('step 2');
								if (result.control == '确定') {
									if (ui.But && game.me == player && lib.config.But_sunshangxiang == false) {
										if (lib.storage.枭武姬 == undefined) {
											lib.storage.枭武姬 = 0;
										}
										lib.storage.枭武姬++;
									}
									player.draw(3);
								}
								if (event.num == 0) {
									event.finish();
								} else {
									event.goto(1);
								}
							},
							ai: {
								noe: true,
								reverseEquip: true,
								useEquip: true,
								loseEquip: true,
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return [1, 3];
										if (card.name == 'jiedao') return [1, 2];
									},
								},
							},
						},
						姻缘亲: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							selectTarget: 1,
							filter(event, player) {
								return true;
							},
							filterTarget(card, player, target) {
								return true;
							},
							check(card) {
								var player = get.owner(card);
								if (player.countCards('h') > player.hp) return 8 - get.value(card);
								if (player.hp < player.maxHp) return 6 - get.value(card);
								return 4 - get.value(card);
							},
							content() {
								player.draw(2);
								player.recover();
								target.recover();
							},
							ai: {
								order: 5.5,
								result: {
									player(player) {
										if (player.hp < player.maxHp) return 4;
										if (player.countCards('h') > player.hp) return 0;
										return -1;
									},
									target: 4,
								},
								threaten: 2,
							},
						},
						伏诛: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseEnd' },
							filter(event, player) {
								return event.player != player;
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0 && get.effect(event.player, { name: 'sha' }, player, player) > 0;
							},
							logTarget: 'player',
							content() {
								'step 0';
								event.num = 0;
								('step 1');
								if (event.num < ui.cardPile.childElementCount && trigger.player.isAlive()) {
									event.num++;
									player.useCard({ name: 'sha' }, trigger.player, false);
									event.redo();
								}
							},
							ai: {
								threaten: 1.5,
							},
						},
						问卦: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseBefore' },
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								trigger.player.chooseTarget(get.prompt('问卦')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									trigger.player.gainPlayerCard(result.targets[0], 'he', true);
									trigger.player.draw();
									player.draw();
								}
							},
						},
						好施: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseDrawBegin' },
							threaten: 1.4,
							check(event, player) {
								if (player.countCards('h') <= 1) return true;
								return game.hasPlayer(function (current) {
									return current != player && current.isMinHandcard() && get.attitude(player, current) > 0;
								});
							},
							content() {
								trigger.num += 2;
								trigger.player.addSkill('好施2');
							},
							ai: {
								threaten: 2,
								noh: true,
								skillTagFilter(player, tag) {
									if (tag == 'noh') {
										if (player.countCards('h') != 2) return false;
									}
								},//QQQ
							},
						},
						好施2: {
							trigger: { player: 'phaseDrawEnd' },
							forced: true,
							popup: false,
							audio: 'ext:虎踞江东/audio:2',
							content() {
								'step 0';
								player.removeSkill('好施2');
								player.chooseCardTarget({
									selectCard: Math.ceil(player.countCards('h') / 2),
									filterTarget(card, player, target) {
										return target.isMinHandcard();
									},
									forced: true,
									ai2(target) {
										return get.attitude(_status.event.player, target);
									},
								});
								('step 1');
								if (result.targets && result.targets[0]) {
									result.targets[0].gain(result.cards, player);
									player.$give(result.cards.length, result.targets[0]);
								}
							},
						},
						缔盟: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							selectTarget: 2,
							complexCard: true,
							filterTarget(card, player, target) {
								return true;
							},
							multitarget: true,
							multiline: true,
							complexSelect: true,
							content() {
								targets[0].swapHandcards(targets[1]);
							},
						},
						wei威yi仪: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return true;
							},
							forced: true,
							content() {
								'step 0';
								var list = [];
								list.push('失去体力');
								list.push('回复体力');
								list.push('cancel2');
								player.chooseControl(list).set('prompt', get.prompt2('wei威yi仪', trigger.player));
								('step 1');
								if (result.control != 'cancel2') {
									var target = trigger.player;
									//player.markAuto('wei威yi仪',[target]);
									target[result.control == '失去体力' ? 'loseHp' : 'recover']();
								}
							},
							/*onremove:true,
							intro:{
								content:'已令$对汝威服',
							},*/
						},
						jin锦zhi织: {
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return player.countCards('h', { type: 'basic' }) > 0;
							},
							trigger: {
								player: ['phaseEnd', 'phaseBegin'],
							},
							content() {
								'step 0';
								player.chooseToDiscard(get.prompt('弃置一张基本牌视为使用了一张无视距离的【顺手牵羊】'), 1, 'h', function (card, player, target) {
									return get.type(card) == 'basic';
								}).ai = function (card) {
									return 1;
								};
								('step 1');
								if (result.bool) {
									player
										.chooseTarget('选择【顺手牵羊】的目标', 1, function (card, player, target) {
											return player.canUse('shunshou', target, false);
										})
										.set('ai', function (target) {
											return get.effect(target, { name: 'shunshou' }, _status.event.player);
										});
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.useCard({ name: 'shunshou' }, result.targets, false);
								}
							},
						},
						定心: {
							enable: 'phaseUse',
							usable: null,
							multitarget: true,
							audio: 'ext:虎踞江东/audio:2',
							filterTarget(card, player, target) {
								var num = target.countCards('h');
								if (ui.selected.targets.length) {
									return num < ui.selected.targets[0].countCards('h');
								}
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (num > players[i].countCards('h')) return true;
								}
								return false;
							},
							selectTarget: 2,
							content() {
								'step 0';
								var gainner, giver;
								if (targets[0].countCards('h') < targets[1].countCards('h')) {
									gainner = targets[0];
									giver = targets[1];
								} else {
									gainner = targets[1];
									giver = targets[0];
								}
								var num = giver.countCards('h');
								gainner.gainPlayerCard(giver, num, true, 'h', 'visibleMove');
								event.gainner = gainner;
								event.giver = giver;
								('step 1');
								if (result.cards) {
									event.bool = false;
									var card = result.cards[0];
									if (card.suit != 'luelue') event.bool = true;
								}
								('step 2');
								if (event.bool) {
									player.draw(3);
									player.recover();
								}
							},
							ai: {
								order: 10.5,
								threaten: 2.3,
								result: {
									target(player, target) {
										var num = target.countCards('h');
										var att = get.attitude(player, target);
										if (ui.selected.targets.length == 0) {
											if (att > 0) return -1;
											var players = game.filterPlayer();
											for (var i = 0; i < players.length; i++) {
												var num2 = players[i].countCards('h');
												var att2 = get.attitude(player, players[i]);
												if (num2 < num) {
													if (att2 > 0) return -3;
													return -1;
												}
											}
											return 0;
										} else {
											return 1;
										}
									},
									player: 1,
								},
							},
						},
						追忆: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: ['dieBegin', 'phaseBegin'],
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('追忆'));
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.recover();
									target.draw(3);
								}
							},
							ai: {
								expose: 0.5,
							},
						},
						qilu泣露: {
							enable: 'phaseUse',
							usable: 1,
							multitarget: true,
							audio: 'ext:虎踞江东/audio:2',
							filterTarget(card, player, target) {
								var num = target.countCards('h');
								if (ui.selected.targets.length) {
									return num < ui.selected.targets[0].countCards('h');
								}
								for (var i = 0; i < game.players.length; i++) {
									if (num > game.players[i].countCards('h')) return true;
								}
								return false;
							},
							selectTarget: 2,
							content() {
								'step 0';
								var gainner, giver;
								if (targets[0].countCards('h') < targets[1].countCards('h')) {
									gainner = targets[0];
									giver = targets[1];
								} else {
									gainner = targets[1];
									giver = targets[0];
								}
								event.gainner = gainner;
								event.giver = giver;
								var card = giver.getCards('h').randomGet();
								event.gainner.gain(card, event.giver);
								event.giver.$give(1, event.gainner);
								if (get.color(card) == 'black') player.draw();
								var list = game.filterPlayer(function (current) {
									return player.canUse('wanjian', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'wanjian' }, list);
							},
							ai: {
								order: 10.5,
								threaten: 2,
								result: {
									target(player, target) {
										var num = target.countCards('h');
										var att = get.attitude(player, target);
										if (ui.selected.targets.length == 0) {
											if (att > 0) return -1;
											for (var i = 0; i < game.players.length; i++) {
												var num2 = game.players[i].countCards('h');
												var att2 = get.attitude(player, game.players[i]);
												if (att2 >= 0 && num2 < num) return -1;
											}
											return 0;
										} else {
											return 1;
										}
									},
									player: 0.1,
								},
							},
						},
						fumian拂面: {
							enable: 'phaseUse',
							usable: 1,
							multitarget: true,
							audio: 'ext:虎踞江东/audio:2',
							filterTarget(card, player, target) {
								var num = target.countCards('h');
								if (ui.selected.targets.length) {
									return num < ui.selected.targets[0].countCards('h');
								}
								for (var i = 0; i < game.players.length; i++) {
									if (num > game.players[i].countCards('h')) return true;
								}
								return false;
							},
							selectTarget: 2,
							content() {
								'step 0';
								var gainner, giver;
								if (targets[0].countCards('h') < targets[1].countCards('h')) {
									gainner = targets[0];
									giver = targets[1];
								} else {
									gainner = targets[1];
									giver = targets[0];
								}
								event.gainner = gainner;
								event.giver = giver;
								var card = giver.getCards('h').randomGet();
								event.gainner.gain(card, event.giver);
								event.giver.$give(1, event.gainner);
								if (get.color(card) == 'red') player.draw();
								var list = game.filterPlayer(function (current) {
									return player.canUse('sha', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'sha' }, list, false);
							},
							ai: {
								order: 10.5,
								threaten: 2,
								result: {
									target(player, target) {
										var num = target.countCards('h');
										var att = get.attitude(player, target);
										if (ui.selected.targets.length == 0) {
											if (att > 0) return -1;
											for (var i = 0; i < game.players.length; i++) {
												var num2 = game.players[i].countCards('h');
												var att2 = get.attitude(player, game.players[i]);
												if (att2 >= 0 && num2 < num) return -1;
											}
											return 0;
										} else {
											return 1;
										}
									},
									player: 0.1,
								},
							},
						},
						心忆: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'qilufurongtuan');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'fumiantaohuadui');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('心忆');
							},
						},
						weiyi威仪: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return true;
							},
							forced: true,
							content() {
								'step 0';
								var list = [];
								list.push('失去体力并弃置2张牌');
								list.push('回复体力并摸2张牌');
								list.push('cancel2');
								player.chooseControl(list).set('prompt', get.prompt2('weiyi威仪', trigger.player));
								('step 1');
								if (result.control != 'cancel2') {
									var target = trigger.player;
									//player.markAuto('weiyi威仪',[target]);
									target[result.control == '失去体力并弃置2张牌' ? 'loseHp' : 'recover']();
									if (result.control == '失去体力并弃置2张牌') {
										target.chooseToDiscard('he', true, 2);
									}
									if (result.control == '回复体力并摸2张牌') {
										target.draw(2);
									}
								}
							},
							/*onremove:true,
							intro:{
								content:'已令$对汝威服',
							},*/
						},
						jinzhi锦织: {
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return player.countCards('h', { type: 'basic' }) > 0;
							},
							trigger: {
								player: ['phaseEnd', 'phaseBegin'],
							},
							content() {
								'step 0';
								player.chooseToDiscard(get.prompt('弃置一张基本牌视为使用了一张无视距离的【顺手牵羊】'), 1, 'h', function (card, player, target) {
									return get.type(card) == 'basic';
								}).ai = function (card) {
									return 1;
								};
								('step 1');
								if (result.bool) {
									player
										.chooseTarget('选择【顺手牵羊】的目标', 1, function (card, player, target) {
											return player.canUse('shunshou', target, false);
										})
										.set('ai', function (target) {
											return get.effect(target, { name: 'shunshou' }, _status.event.player);
										});
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.useCard({ name: 'shunshou' }, result.targets, false);
									player.draw(2);
								}
							},
						},
						府兵: {
							enable: 'phaseUse',
							usable: 1,
							viewAs: { name: 'sha' },
							filterCard: true,
							selectCard: 1,
							ai: {
								basic: {
									order: 10,
								},
							},
						},
						府兵2: {
							enable: 'phaseUse',
							usable: 1,
							viewAs: { name: 'jiu' },
							filterCard: true,
							selectCard: 1,
							ai: {
								basic: {
									order: 10,
								},
							},
						},
						府兵3: {
							enable: 'phaseUse',
							usable: 1,
							viewAs: { name: 'tao' },
							filterCard: true,
							selectCard: 1,
							ai: {
								basic: {
									order: 10,
								},
							},
							group: '府兵摸牌',
						},
						府兵摸牌: {
							trigger: {
								player: 'useCardEnd',
							},
							filter(event, player) {
								return event.skill == '府兵' || event.skill == '府兵2' || event.skill == '府兵3';
							},
							popup: false,
							forced: true,
							_priority: 15,
							content() {
								player.draw();
							},
						},
						召府: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'wanchengfubing皖城府兵');
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'wanchengfubing皖城府兵');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('召府');
							},
						},
						力激: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'loseEnd' },
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i) == 'd') {
											return true;
										}
									}
								return false;
							},
							mark: true,
							intro: {
								content(storage) {
									return '已累积' + storage + '张牌置入过弃牌堆';
								},
							},
							init(player) {
								player.storage.力激 = 0;
							},
							content() {
								'step 0';
								if (typeof player.storage.力激 == 'number') {
									player.storage.力激 += trigger.cards.length;
								} else {
									player.storage.力激 = trigger.cards.length;
								}
								player.markSkill('力激');
								event.num = Math.floor(player.storage.力激 / 4);
								('step 1');
								if (event.num--) {
									player.chooseTarget(get.prompt2(event.name)).set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								} else {
									event.finish(); //QQQ
									return;
								}
								('step 2');
								if (result.targets) {
									result.targets[0].damage();
								}
								if (event.num > 0) event.goto(1);
							},
						},
						lz奋音: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'loseBegin' },
							forced: true,
							filter(event, player) {
								if (!event.cards || event.cards.length != 1) return false;
								if (_status.currentPhase != player) return false;
								if (!player.storage.lz奋音) return false;
								return get.color(player.storage.lz奋音) != get.color(event.cards[0]);
							},
							content() {
								'step 0';
								player.draw();
								player
									.chooseTarget(get.prompt('lz奋音'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].damage();
								}
							},
							intro: {
								content: 'card',
							},
							group: ['lz奋音2', 'lz奋音3'],
						},
						lz奋音3: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'loseBegin' },
							_priority: -1,
							silent: true,
							filter(event, player) {
								if (!event.cards || event.cards.length != 1) return false;
								if (_status.currentPhase != player) return false;
								return true;
							},
							content() {
								player.storage.lz奋音 = trigger.cards[0];
							},
						},
						lz奋音2: {
							trigger: { player: 'phaseBefore' },
							silent: true,
							_priority: 10,
							content() {
								player.storage.lz奋音 = null;
							},
						},
						苦肉rekrhg: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('苦肉rekrhg')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(1, result.targets[0], 'he', true);
								}
								('step 2');
								player.chooseTarget(get.prompt('苦肉rekrhg')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].loseHp();
								}
							},
							ai: {
								order: 8,
								result: {
									player(player) {
										if (player.hp <= 2) return player.countCards('h') == 0 ? 1 : 0;
										if (player.countCards('h', { name: 'sha', color: 'red' })) return 1;
										return player.countCards('h') <= player.hp ? 1 : 0;
									},
								},
								effect(card, player, target) {
									if (get.tag(card, 'damage')) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, 1];
										return 1.2;
									}
									if (get.tag(card, 'loseHp')) {
										if (player.hp <= 1) return;
										return [0, 0];
									}
								},
							},
						},
						诈降zxhg: {
							trigger: { global: 'loseHpEnd' },
							forced: true,
							audio: 'ext:虎踞江东/audio:2',
							content() {
								player.draw(3 * trigger.num);
								if (_status.currentPhase == player) {
									player.addTempSkill('诈降zxhg2', { player: 'phaseAfter' });
								} else {
									game.trySkillAudio('诈降zxhg', player);
								}
							},
							ai: {
								maihp: true,
							},
						},
						诈降zxhg2: {
							audio: 'ext:虎踞江东/audio:2',
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + Infinity;
								},
							},
							trigger: { player: 'shaBegin' },
							forced: true,
							filter(event, player) {
								return event.card;
							},
							content() {
								trigger.directHit = true;
							},
						},
						骄矜jj: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'damageBegin' },
							filter(event, player) {
								return event.source;
							},
							forced: true,
							content() {
								'step 0';
								var next = player.discardPlayerCard(get.prompt('骄矜', trigger.source), trigger.source, 'he', false);
								next.set('ai', function (card) {
									var player = _status.event.player;
									if (player.hp == 1 || _status.event.getTrigger().num > 1) {
										return 9 - get.value(card);
									}
									if (player.hp == 2) {
										return 8 - get.value(card);
									}
									return 7 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									if (get.type(result.cards[0], result.cards[0].original == 'h' ? player : false) == 'equip') {
										trigger.source.chooseToDiscard('he', true, trigger.num);
										trigger.source.loseHp(trigger.num);
									}
								}
								('step 2');
								trigger.untrigger();
								trigger.finish();
							},
						},
						谮毁ch: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCard' },
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								var card = event.card;
								if (card.name == 'sha') return true;
								if (get.color(card) == 'black' || get.type(card) == 'trick') return true;
								return false;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('谮毁ch'), function (card, player, target) {
										if (player == target) return false;
										var trigger = _status.event.getTrigger();
										return trigger.targets.includes(target) == false;
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return get.effect(target, trigger.card, player, player) + 0.01;
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								//QQQ
								event.target.chooseCard('交给' + get.translation(player) + '一张手牌,或成为' + get.translation(trigger.card) + '的额外目标', true).set('ai', function (card) {
									return 5 - get.value(card);
								});
								('step 3');
								player.gain(result.cards, event.target);
								event.target.$give(1, player);
								trigger.untrigger();
								trigger.player = event.target;
								trigger.trigger('useCard');
								game.log(event.target, '成为了', trigger.card, '的使用者');
								game.log(event.target, '成为了', trigger.card, '的额外目标');
								trigger.targets.push(event.target);
							},
						},
						魄軍: {
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return event.target.hp > 0 && event.target.countCards('he') > 0;
							},
							audio: 'ext:虎踞江东/audio:2',
							logTarget: 'target',
							content() {
								'step 0';
								player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.countCards('he'), trigger.target.hp)], get.prompt('魄軍', trigger.target));
								('step 1');
								if (result.bool && result.links.length) {
									trigger.target.discard(result.links);
								}
							},
							ai: {
								unequip: true,
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (get.attitude(player, arg.target) > 0) return false;
									if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
									if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
									return false;
								},
							},
							group: '魄軍13',
						},
						魄軍13: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							logTarget: 'player',
							filter(event, player) {
								var target = event.player;
								return event.parent.name == 'sha' && player.countCards('h') >= target.countCards('h') && player.countCards('e') >= target.countCards('e');
							},
							content() {
								trigger.num++;
							},
						},
						魄軍1: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							check(event, player) {
								if (event.player.isTurnedOver()) return get.attitude(player, event.player) > 0;
								if (event.player.hp < 3) {
									return get.attitude(player, event.player) < 0;
								}
								return get.attitude(player, event.player) > 0;
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.player.isAlive();
							},
							content() {
								trigger.player.turnOver();
							},
						},
						聪察: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseEnd' },
							content() {
								'step 0';
								trigger.player.draw(2);
								('step 1');
								trigger.player.phaseUse();
								('step 2');
								player.getStat().card = {};
							},
						},
						公清: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								if (!event.source) return false;
								if (event.source.getAttackRange() == 3) return false;
								if (event.source.getAttackRange() < 3 && event.num <= 1) return false;
								return true;
							},
							_priority: -9.5,
							content() {
								trigger.num = trigger.source.getAttackRange() < 3 ? 0 : trigger.num + 1;
								trigger.source.damage(trigger.num);
							},
						},
						潘濬不臣: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
								global: 'dyingBegin',
							},
							content() {
								'step 0';
								player.chooseTarget('选择一名蜀或吴势力角色,你与其势力相同', function (card, player, target) {
									return target.group == 'shu' || (target.group == 'wu' && target != player);
								});
								('step 1');
								if (result.bool) {
									var pl = result.targets[0];
									player.storage.ll = pl;
									pl.markSkill('潘濬不臣');
									if (player.identity != 'zhu') player.identity = pl.identity;
									player.setIdentity(pl.identity);
									player.node.identity.dataset.color = pl.identity;
									if (lib.config.mode == 'guozhan') {
										player.identity = player.storage.ll.identity;
										player.setIdentity();
										player._group = pl.identity;
										player.identityShown = true;
										lib.character[player.name][1] = pl.identity;
									}
								}
							},
							marktext: '臣',
							intro: {
								content: '已对你臣服',
							},
							group: '潘濬不臣2',
						},
						潘濬不臣2: {
							trigger: { player: 'phaseBefore' },
							forced: true,
							popup: false,
							silent: true,
							content() {
								for (var i = 0; i < game.players.length; i++) {
									delete game.players[i].storage.ll;
									game.players[i].unmarkSkill('潘濬不臣');
								}
								player.unmarkSkill('潘濬不臣');
							},
						},
						逐寇: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('逐寇'), [1, 2], function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].damage();
									}
								}
								('step 2');
								player.draw(Math.min(player.maxHp, 20));
							},
						},
						氓情: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBefore' },
							forced: true,
							content() {
								player.gainMaxHp(3);
								player.recover(3);
								player.addSkill('玉殒');
							},
						},
						玉殒: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseUseBegin' },
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								player
									.chooseTarget(get.prompt('玉殒'), [1, 3], function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].damage();
									}
								}
								('step 3');
								player.addTempSkill('玉殒1', { player: 'phaseAfter' });
								('step 4');
								player
									.chooseTarget(get.prompt('玉殒'), [1, 2], function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 5');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										player.gainPlayerCard(result.targets[i], 'hej', true);
									}
								}
								('step 6');
								player.chooseTarget(get.prompt('玉殒'), [1, 2]).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 7');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].draw(result.targets[i].maxHp);
									}
								}
							},
						},
						玉殒1: {
							mod: {
								maxHandcard(player, num) {
									return num + player.maxHp;
								},
							},
						},
						醇醪: {
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							init(player) {
								player.storage.醇醪 = [];
							},
							intro: {
								content: 'cards',
							},
							content() {
								'step 0';
								player.chooseCard([1, player.countCards('h')], get.prompt('醇醪')).set('ai', function () {
									return 1;
								});
								('step 1');
								if (result.bool) {
									player.storage.醇醪 = player.storage.醇醪.concat(result.cards);
									player.markSkill('醇醪');
									player.lose(result.cards, ui.special);
									player.$give(result.cards, player);
								}
							},
							ai: {
								effect: {
									player(card, player) {
										if (player.countCards('h') <= player.hp && !player.storage.醇醪.length) {
											return [0, 0, 0, 0];
										}
									},
								},
								threaten: 1.4,
							},
							group: '醇醪2',
						},
						醇醪2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'dying',
							},
							_priority: 6,
							filter(event, player) {
								return event.player.hp <= 0 && player.storage.醇醪.length;
							},
							forced: true,
							content() {
								'step 0';
								var att = get.attitude(player, trigger.player);
								player
									.chooseCardButton(get.prompt('醇醪', trigger.player), player.storage.醇醪)
									.set('ai', function (button) {
										if (_status.event.att > 0) return 1;
										return 0;
									})
									.set('att', att);
								('step 1');
								if (result.bool) {
									player.$throw(result.links);
									player.storage.醇醪.remove(result.links[0]);
									ui.discardPile.appendChild(result.links[0]);
									trigger.player.useCard({ name: 'jiu' }, trigger.player);
									trigger.player.hp + 1;
									if (!player.storage.醇醪.length) {
										player.unmarkSkill('醇醪');
									} else {
										player.markSkill('醇醪');
									}
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						疠火: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							ai: {
								effect: {
									target(card) {
										if (get.tag(card, 'fireDamage')) {
											return [0, 2];
										}
									},
								},
							},
							group: '疠火2',
						},
						疠火2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							content() {
								if (trigger.source) trigger.source.damage(2, 'fire')._triggered = null;
								player.draw(trigger.source.hp);
							},
						},
						旋浪: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: ['loseEnd', 'phaseDiscardEnd'],
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'phaseDiscard') {
									return event.cards && event.cards.length > 1;
								} else {
									if (Array.isArray(event.cards))
										for (var i of event.cards) {
											if (i.original == 'e') return true;
										}
								}
								return false;
							},
							content() {
								'step 0';
								game.JPG0('旋浪dhtx', 3000);
								player
									.chooseTarget([1, 2], get.prompt('旋浪'), function (card, player, target) {
										if (player == target) return false;
										return target.countCards('he');
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
									if (result.targets.length == 1) {
										player.discardPlayerCard(event.targets[0], 'he', [1, 2], true);
									} else {
										player.discardPlayerCard(event.targets[0], 'he', true);
									}
								} else {
									event.finish();
								}
								('step 2');
								if (targets.length == 2) {
									player.discardPlayerCard(targets[1], 'he', true);
								}
								('step 3');
								player.draw(2);
								player
									.chooseTarget(get.prompt('旋浪'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 4');
								if (result.bool) {
									result.targets[0].damage();
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return [1, 3];
									},
								},
								reverseEquip: true,
								noe: true,
							},
						},
						勇破: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1, //QQQ
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								if (!event.num) event.num = 4;
								var check = game.hasPlayer(function (current) {
									return get.attitude(player, current) < 0 && current.countCards('e');
								});
								player
									.chooseTarget(2, function (card, player, target) {
										if (ui.selected.targets.length) {
											if (target.isMin()) return false;
											return true;
										} else {
											return target.countCards('e') > 0;
										}
									})
									.set('check', check)
									.set('ai', function (target) {
										if (!_status.event.check) return 0;
										var player = _status.event.player;
										if (ui.selected.targets.length == 0) {
											if (get.attitude(player, target) < 0) {
												var players = game.filterPlayer();
												for (var i = 0; i < players.length; i++) {
													if (get.attitude(player, players[i]) > 0) {
														if ((target.getEquips(1) && !players[i].getEquips(1)) || (target.getEquips(2) && !players[i].getEquips(2)) || (target.getEquips(3) && !players[i].getEquips(3)) || (target.getEquips(4) && !players[i].getEquips(4)) || (target.getEquips(5) && !players[i].getEquips(5))) return -get.attitude(player, target);
													}
												}
											}
											return 0;
										}
										return -get.attitude(player, target) * get.attitude(player, ui.selected.targets[0]);
									});
								('step 2');
								if (!result.bool) {
									event.finish();
								} else {
									player.line2(result.targets);
									event.targets = result.targets;
								}
								('step 3');
								('step 4');
								if (targets.length == 2) {
									player
										.choosePlayerCard(
											'e',
											function (button) {
												return ai.get.equipValue(button.link);
											},
											targets[0]
										)
										.set('targets0', targets[0])
										.set('targets1', targets[1])
										.set('filterButton', function (button) {
											var targets1 = _status.event.targets1;
											return !targets1.num('e', { subtype: get.subtype(button.link) });
										});
								} else {
									event.finish();
								}
								('step 5');
								if (result.bool && result.links.length) {
									var link = result.links[0];
									event.targets[1].equip(link);
									event.targets[0].$give(link, event.targets[1]);
									event.num--;
									if (event.num) event.goto(1);
								}
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										if (game.phaseNumber < 6) return -1;
										var num = 0;
										for (var i = 0; i < game.players.length; i++) {
											var target = game.players[i];
											if (target.countCards('e') && get.attitude(player, target) < 3) {
												num += target.countCards('e');
											}
										}
										if (player.hp >= 3) return num - 2;
										else return num - 1;
									},
								},
							},
						},
						风略: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'luohucuizhenying珞虎摧阵营');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'pansiweiyijun磐兕威义军');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('风略');
							},
						},
						义笃: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return target != player;
							},
							selectTarget: -1,
							multitarget: true,
							multiline: true,
							usable: 1,
							content() {
								'step 0';
								event.current = player.next;
								('step 1');
								// event.current.addTempClass('target');
								event.current.chooseTarget(true, function (card, player, target) {
									if (player == target) return false;
									if (
										game.hasPlayer(function (current) {
											return current != player && get.distance(player, current) < get.distance(player, target);
										})
									) {
										return false;
									}
									return true;
								});
								('step 2');
								var target = result.targets[0];
								if (event.current.countCards('h') && target.countCards('h')) event.current.chooseToCompare(/*'义笃:与最近距离角色拼点或流失一点体力',*/ target);
								('step 3');
								if (result.bool) {
									player
										.chooseTarget(get.prompt('义笃'), [1, 2], function (card, player, target) {
											return target != player;
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								}
								//else event.current.loseHp();
								//if(result.bool==false)
								else event.goto(5);
								('step 4');
								if (result.bool /*&&result.targets&&result.targets.length*/) {
									player.useCard({ name: 'sha' }, result.targets, false);
									event.goto(7);
								} else event.goto(7);
								('step 5');
								player.chooseBool('是否令其失去一点体力？');
								('step 6');
								if (result.bool) {
									event.current.loseHp();
									event.goto(7);
								} else event.goto(7);
								('step 7');
								if (event.current.next != player) {
									event.current = event.current.next;
									event.goto(1);
								}
							},
							group: '义笃1',
						},
						义笃1: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'compare' },
							filter(event, player) {
								return event.card1 && event.card2 && get.type(event.card1) == 'basic';
							},
							content() {
								var cards = [trigger.card1, trigger.card2];
								if (cards.length) {
									player.gain(cards, 'log');
									player.$gain2(cards);
								}
							},
						},
						篡肆: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseEnd' },
							content() {
								'step 0';
								trigger.player.loseHp();
								player.judge(function (card) {
									if (get.color(card) == 'black') return 2;
									return -0.5;
								});
								('step 1');
								if (result.bool) {
									player.draw(2);
								} else player.loseHp();
							},
						},
						祸卜: {
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.player != player && get.distance(player, event.player, 'attack') <= 1;
							},
							usable: 1,
							content() {
								trigger.player.showHandcards();
								player.discardPlayerCard('h', trigger.player, 'visible');
								player.useCard({ name: 'sha' }, trigger.player, false);
							},
						},
						阳军: {
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('阳军'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0].maxHp, result.targets[0], 'he', true);
									result.targets[0].damage(2);
									result.targets[0].turnOver();
								}
							},
						},
						夺刀: {
							trigger: { player: 'damageEnd' },
							forced: true,
							_priority: 5,
							audio: 'ext:虎踞江东/audio:2',
							content() {
								'step 0';
								player.draw();
								('step 1');
								var card0 = get.cardPile(function (card) {
									return get.subtype(card) == 'equip1';
								});
								var card3;
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									var current = ui.discardPile.childNodes[i];
									if (get.subtype(current) != 'equip1') continue;
									else {
										card3 = current;
										break;
									}
								}
								event.card0 = card0;
								event.card3 = card3;
								('step 2');
								if (event.card0) {
									player.gain(game.createCard(event.card0), 'gain2');
									player.gain(game.createCard(event.card0), 'gain2');
								} else {
									player.gain(game.createCard(event.card3), 'gain2');
									player.gain(game.createCard(event.card3), 'gain2');
								}
								('step 3');
								if (trigger.source && trigger.source.getEquip(1) != undefined && trigger.card && trigger.card.name == 'sha') {
									trigger.source.$give(trigger.source.getEquip(1), player);
									player.gain(trigger.source.getEquip(1), trigger.source);
								}
							},
							ai: {
								maixie_defend: true,
							},
						},
						暗箭: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { source: 'damageBegin' },
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							forced: true,
							filter(event, player) {
								return get.distance(event.player, player, 'attack') > 1 && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
							},
							content() {
								'step 0';
								trigger.num++;
								if (!player.hasSkill('暗箭1') && trigger.target != player) {
									player.useCard({ name: 'wanjian' }, trigger.target, false);
									player.addTempSkill('暗箭1', 'phaseAfter');
								}
								var goon = get.attitude(player, trigger.player) < 0;
								var next = player.chooseToDiscard(get.prompt('暗箭', trigger.player), 'he', function (card) {
									return get.subtype(card) == 'equip1';
								});
								next.set('prompt2', '弃置一张武器牌令伤害+该武器牌攻击范围数');
								next.set('ai', function (card) {
									if (_status.event.goon) {
										return 8 - get.value(card);
									}
									return 0;
								});
								next.set('goon', goon);
								('step 1');
								if (result.bool) {
									trigger.num += 1 - lib.card[result.cards[0].name].distance.attackFrom;
								}
							},
						},
						暗箭1: {},
						若袭: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('若袭')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard('he', result.targets[0], 4, 'visible');
									player.gainMaxHp();
									player.recover();
									player.draw(4);
								}
							},
						},
						兰兴: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseUseBegin' },
							check(event, player) {
								var att = get.attitude(player, event.player);
								return !game.hasPlayer(function (current) {
									return get.attitude(player, current) < att;
								});
							},
							filter(event, player) {
								return event.player != player && !player.storage.兰兴;
							},
							logTarget: 'player',
							content() {
								'step 0';
								trigger.player.draw(2);
								('step 1');
								player.gain(trigger.player.getCards('he'));
								trigger.player.$give(trigger.player.countCards('he'), player);
								player.storage.兰兴 = true;
							},
							ai: {
								expose: 0.2,
							},
							intro: {
								content: 'player',
							},
							group: '兰兴2',
						},
						兰兴2: {
							trigger: { player: 'phaseBegin' },
							silent: true,
							content() {
								player.unmarkSkill('兰兴');
								player.storage.兰兴 = false;
							},
						},
						zhugejin弘援: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseDrawBegin' },
							content() {
								'step 0';
								trigger.num++;
								('step 1');
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.draw();
								});
							},
						},
						zhugejin缓释: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'judge' },
							filter(event, player) {
								return game.filterPlayer(function (current) {
									return current.countCards('he') > 0;
								}).length;
							},
							check(event, player) {
								if (get.attitude(player, event.player) <= 0) return false;
								var cards = player.getCards('he');
								var judge = event.judge(event.player.judging[0]);
								for (var i = 0; i < cards.length; i++) {
									var judge2 = event.judge(cards[i]);
									if (_status.currentPhase != player && judge2 == judge && get.color(cards[i]) == 'red' && get.useful(cards[i]) < 5) return true;
									if (judge2 > judge) return true;
								}
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('zhugejin缓释'), function (card, player, target) {
										return target.countCards('he');
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								var target = trigger.player;
								event.target.line(target, 'green');
								var judge = trigger.judge(target.judging[0]);
								var attitude = get.attitude(target, event.target);
								target
									.choosePlayerCard('请选择代替判定的牌', 'he', 'visible', true, event.target)
									.set('ai', function (button) {
										var card = button.link;
										var judge = _status.event.judge;
										var attitude = _status.event.attitude;
										var result = trigger.judge(card) - judge;
										var player = _status.event.player;
										if (result > 0) {
											return 20 + result;
										}
										if (result == 0) {
											if (attitude >= 0) {
												return get.color(card) == 'red' ? 7 : 0 - get.value(card);
											} else {
												return get.color(card) == 'black' ? 10 : 0 + get.value(card);
											}
										}
										if (attitude >= 0) {
											return get.color(card) == 'red' ? 0 : -10 + result;
										} else {
											return get.color(card) == 'black' ? 0 : -10 + result;
										}
									})
									.set('judge', judge)
									.set('attitude', attitude);
								('step 3');
								if (result.bool) {
									event.card = result.links[0];
									event.target.respond(event.card, 'highlight');
								} else {
									event.finish();
								}
								('step 4');
								if (result.bool) {
									if (trigger.player.judging[0].clone) {
										trigger.player.judging[0].clone.classList.remove('thrownhighlight');
										game.broadcast(function (card) {
											if (card.clone) {
												card.clone.classList.remove('thrownhighlight');
											}
										}, trigger.player.judging[0]);
										game.addVideo('deletenode', event.target, get.cardsInfo([trigger.player.judging[0].clone]));
									}
									trigger.player.judging[0].discard();
									trigger.player.judging[0] = event.card;
									if (!get.owner(event.card, 'judge')) {
										trigger.position.appendChild(event.card);
									}
									game.log(trigger.player, '的判定牌改为', event.card);
								}
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						zhugejin明哲: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'loseAfter' },
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.color(i) == 'red' && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								player.draw(2);
								if (player == _status.currentPhase) lib.skill.zhugejin明哲.usable = 3;
								else if (lib.skill.zhugejin明哲.usable) delete lib.skill.zhugejin明哲.usable;
							},
							ai: {
								threaten: 0.7,
							},
						},
						决堰jy: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 4,
							content() {
								'step 0';
								player.draw(2);
								player.recover();
								player.chooseControl('建武', '忠勤', '驻陵', '谋策');
								('step 1');
								if (result.control == '建武') {
									player.addTempSkill('决堰jy1', { player: 'phaseAfter' });
								}
								if (result.control == '忠勤') {
									player.draw(4);
									player.addTempSkill('决堰jy3', { player: 'phaseAfter' });
								}
								if (result.control == '驻陵') {
									player.addTempSkill('决堰jy2', { player: 'phaseAfter' });
								}
								if (result.control == '谋策') {
									player.addTempSkill('集智lkjz', { player: 'phaseAfter' });
								}
							},
							ai: {
								order: 13,
								result: {
									player(player) {
										if (!player.isDisabled('防具')) return 1;
										if (
											!player.isDisabled('武器') &&
											player.countCards('h', function (card) {
												return card.name == 'sha' && player.hasUseTarget(card);
											}) -
											player.getCardUsable('sha') >
											1
										)
											return 1;
										if (
											!player.isDisabled('宝物') &&
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
						决堰jy1: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 4;
								},
							},
						},
						决堰jy2: {
							mod: {
								targetInRange(card, player, target, now) {
									return true;
								},
							},
						},
						决堰jy3: {
							mod: {
								maxHandcard(player, num) {
									return num + 4;
								},
							},
						},
						谦节qj: {
							group: ['谦节qj_1', '谦节qj_2', '谦节qj_3'],
							subSkill: {
								1: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										player: 'linkBegin',
									},
									forced: true,
									content() {
										trigger.cancel();
										player.draw(2);
									},
								},
								2: {
									mod: {
										targetEnabled(card, player, target) {
											if (get.type(card) == 'delay') return false;
										},
									},
								},
								3: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										global: 'chooseToCompareBegin',
									},
									forced: true,
									filter(event, player) {
										return event.target == player;
									},
									content() {
										trigger.cancel();
										player.draw(2);
									},
								},
							},
						},
						破势ps: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							derivation: ['怀柔hr'],
							content() {
								player.gainMaxHp();
								var num = player.maxHp - player.countCards('h');
								if (num > 0) player.draw(num);
								player.addSkill('怀柔hr');
							},
						},
						怀柔hr: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('h', { type: 'equip' }) > 0;
							},
							filterCard(card) {
								return get.type(card) == 'equip';
							},
							check(card) {
								return 1;
							},
							content() {
								player.draw(2);
							},
							discard: false,
							prompt: '将一张装备牌置入弃牌堆并摸2张牌',
							delay: 0.5,
							prepare(cards, player) {
								player.$throw(cards, 1000);
							},
						},
						集智lkjz: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick' || get.type(event.card, 'delay') == 'delay';
							},
							content() {
								player.draw();
							},
							ai: {
								threaten: 1.4,
								noautowuxie: true,
							},
						},
						秉柔: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'luxun陆逊');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 're_luxun');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('秉柔');
							},
						},
						元嫡: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCardEnd' },
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('元嫡')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard('he', result.targets[0], 'visible');
								}
								('step 2');
								player.chooseTarget(get.prompt('元嫡')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].draw();
									player.draw();
								}
							},
						},
						心幽: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.hp = player.maxHp;
								player.draw(Math.min(player.maxHp, 20));
								player.chooseTarget(get.prompt('心幽')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, 2);
									result.targets[0].loseHp();
								}
							},
						},
						funan复难: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'useCardBegin' },
							usable: 3,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('funan复难')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].gain(game.createCard(trigger.card.name), 'gain2');
									result.targets[0].draw();
									player.draw();
								}
								('step 2');
								player.chooseTarget(get.prompt('funan复难')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, (card) => {
										return get.type(card) == get.type(trigger.card);
									});
								}
							},
						},
						jiexun诫训: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							init(player) {
								player.storage.jiexun诫训 = 0;
							},
							forced: true,
							content() {
								'step 0';
								var num1 = game.countPlayer(function (current) {
									return current.countCards('hej', { color: 'red' });
								});
								var num2 = player.storage.jiexun诫训;
								event.num1 = num1;
								event.num2 = num2;
								var str = '令目标摸' + get.cnNumber(num1) + '张牌';
								if (num2) {
									var str1 = '弃置' + get.cnNumber(num2) + '张牌;';
								}
								event.str1 = str1;
								player
									.chooseTarget(get.prompt('jiexun诫训'))
									.set('ai', function (target) {
										return _status.event.coeff * get.attitude(_status.event.player, target);
									})
									.set('coeff', num1 >= num2 ? 1 : -1)
									.set('prompt2', str);
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.draw(event.num1);
									player.storage.jiexun诫训++;
								} else {
									event.finish();
								}
								('step 2');
								if (event.num2) {
									player
										.chooseTarget(get.prompt('jiexun诫训'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										})
										.set('prompt2', event.str1);
								}
								('step 3');
								if (result.bool) {
									var target = result.targets[0];
									target.chooseToDiscard(event.num2, true, 'he');
								}
							},
						},
						慧淑: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseDrawEnd',
							},
							content() {
								player.draw(3);
								player.addTempSkill('慧淑2');
							},
						},
						慧淑2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCardEnd' },
							filter(event, player) {
								return Math.random() < 0.5;
							},
							forced: true,
							content() {
								var gaincard = Array.from(new Set([...ui.cardPile.childNodes, ...ui.discardPile.childNodes].filter((card) => get.type(card, 'trick') == 'trick').map((card) => card.name)));
								player.gain(game.createCard(gaincard.randomGet()));
								player.$draw();
							},
						},
						易数: {
							group: '易数3',
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'loseAfter',
							},
							forced: true,
							filter(event, player) {
								return _status.currentPhase != player;
							},
							content() {
								player.storage.易数 = (player.storage.易数 || 0) + 2;
								var gaincard = Array.from(new Set([...ui.cardPile.childNodes, ...ui.discardPile.childNodes].filter((card) => get.type(card) == 'basic').map((card) => card.name)));
								player.gain(game.createCard(gaincard.randomGet()));
								player.$draw();
							},
						},
						易数3: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							filter(event, player) {
								return player.storage.易数;
							},
							content() {
								trigger.num += player.storage.易数;
								player.storage.易数 = 0;
							},
						},
						离宫: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								player.gainMaxHp();
								player.recover();
								player.draw(2);
								var femaleGenerals = [];
								var femalenames = [];
								for (let key in lib.character) {
									let character = lib.character[key];
									if (lib.filter.characterDisabled2(key)) continue;
									if (character[1] == 'wu' && character[0] == 'female' && key != 'quanhuijie全惠解') {
										femaleGenerals.push(character);
										femalenames.push(key);
									}
								}
								var list = femalenames.randomGets(4);
								function addFellows(num, namesArr, identityObj = { content: '忠臣', color: '#000000' }, spacing = 120) {
									for (var i = 0; i < num; i++) {
										const fellow = game.addFellow(num, namesArr[i]);
										fellow.side = player.side;
										fellow.identity = player.identity !== 'zhu' ? player.identity : 'zhong';
										if (lib.config.mode === 'guozhan') fellow._group = player.identity;
										fellow.setIdentity(`<font color="${identityObj.color}">${identityObj.content}</font>`);
										fellow.draw(fellow.maxHp);
									}
								}
								addFellows(4, list, { content: '侍从', color: '#00FF00' }, 180);
								player.removeSkill('离宫');
								player.chooseButton(ui.create.dialog('请选择你要进行替换的两名武将', [femalenames, 'character']), 2);
								('step 1');
								if (result.bool) player.init(result.links[0], result.links[1]);
							},
							ai: {
								maixie_defend: true,
								expose: 0.2,
								threaten: 1.5,
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						结姻ywsd: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filter(event, player) {
								return true;
							},
							filterTarget(card, player, target) {
								return true;
							},
							selectTarget: 1,
							content() {
								player.draw(2);
								target.draw(2);
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.type({ name: lib.inpile[i] }) == 'equip') list.push(lib.inpile[i]);
								}
								player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'gain2');
								target.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'gain2');
								player.recover();
								target.recover();
							},
							ai: {
								order: 5.5,
								result: {
									player(player) {
										if (player.hp < player.maxHp) return 4;
										if (player.countCards('h') > player.hp) return 0;
										return -1;
									},
									target: 4,
								},
								threaten: 2,
							},
						},
						枭姬ywsd: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: ['useCardEnd', 'loseEnd'] },
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'equip') return true;
									}
								return false;
							},
							content() {
								var n = trigger.cards.filter((card) => get.type(card) == 'equip').length;
								player.draw(3 * n);
							},
						},
						姻礼ywsd: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'loseEnd' },
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'equip') return true;
									}
								return false;
							},
							content() {
								var num = trigger.cards.filter((card) => get.type(card) == 'equip').length;
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.type({ name: lib.inpile[i] }) == 'equip') list.push(lib.inpile[i]);
								}
								for (var i = 0; i < num; i++) {
									player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'gain2');
								}
							},
						},
						yingzi天纵奇才: {
							audio: 'ext:虎踞江东/audio:2',
							mod: {
								maxHandcard(player, num) {
									return num + 5 + game.roundNumber;
								},
							},
							forced: true,
							trigger: { player: 'phaseDrawBegin' },
							content() {
								lib.init.css(`extension/虎踞江东/`, 'zhouyuwzbfdh');
								const textContainer = ui.create.div('#textcontainer');
								const text = '英才盖世辅佐明主渴求统一大业确属鲲鹏之志忠心耿耿报国家决死效忠保太平临危受命立战功聪明智慧悟天机谋略高超定乾坤'; // 修改为你想要播放的文字
								const fragment = document.createDocumentFragment();
								for (var i = 0; i < text.length; i++) {
									const span = document.createElement('span');
									span.textContent = text[i];
									// 随机生成七彩色字体
									const randomColor = Math.floor(Math.random() * 16777215).toString(16);
									span.style.color = '#' + randomColor;
									fragment.appendChild(span);
								}
								textContainer.appendChild(fragment);
								ui.window.appendChild(textContainer);
								setTimeout(() => {
									game.pause();
								}, 30000);
								setTimeout(() => {
									ui.window.style.transition = '';
									ui.window.removeChild(textContainer);
									game.resume();
								}, 30000);
								trigger.num += 5 + game.roundNumber;
							},
						},
						fanjian天纵奇才: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								lib.init.css(`extension/虎踞江东/`, 'zhouyuwzbfdh');
								const textContainer = ui.create.div('#textcontainer');
								const text = '君以赤诚之心,为东吴太平谋福祉,立下卓越战功,载入史册,君守公理、以国事为重、恪守忠诚,彪炳千秋,成就一番霸业'; // 修改为你想要播放的文字
								const fragment = document.createDocumentFragment();
								for (var i = 0; i < text.length; i++) {
									const span = document.createElement('span');
									span.textContent = text[i];
									const randomColor = Math.floor(Math.random() * 16777215).toString(16);
									span.style.color = '#' + randomColor;
									fragment.appendChild(span);
								}
								textContainer.appendChild(fragment);
								ui.window.appendChild(textContainer);
								setTimeout(() => {
									game.pause();
								}, 30000);
								setTimeout(() => {
									ui.window.style.transition = '';
									ui.window.removeChild(textContainer);
									game.resume();
								}, 30000);
								player.chooseControl('<span style="color:black">黑色</span>', '<span style="color:red">红色</span>');
								('step 1');
								target.showHandcards();
								if (result.control == '<span style="color:black">黑色</span>') {
									player.draw(
										1 +
										target.getCards('he', {
											color: 'black',
										}).length
									);
									player.changeHujia(
										1 +
										target.getCards('he', {
											color: 'black',
										}).length
									);
									target.discard(
										target.getCards('he', {
											color: 'black',
										})
									);
								} else {
									player.draw(
										1 +
										target.getCards('he', {
											color: 'red',
										}).length
									);
									player.changeHujia(
										1 +
										target.getCards('he', {
											color: 'red',
										}).length
									);
									target.discard(
										target.getCards('he', {
											color: 'red',
										})
									);
								}
								target.loseHp();
							},
						},
						经造: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return true;
							},
							usable: 3,
							content() {
								'step 0';
								var num =
									3 +
									game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									}).length;
								var cards = get.cards(num);
								event.cards = cards;
								event.cs = event.cards.slice(0);
								player.showCards(event.cards);
								var next = player.chooseCardButton(cards, '选择获得牌名各不相同的牌', [1, Infinity]).set('filterButton', function (button) {
									var names = ui.selected.buttons.map((button) => button.name);
									return !names.includes(button.link.name);
								});
								('step 1');
								if (result.bool) {
									player.gain(result.links);
									player.$draw(result.links);
								}
								for (var i = event.cards.length - 1; i >= 0; i--) {
									if (!result.bool || !result.links.includes(event.cards[i])) {
										ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
									}
								}
								('step 2');
								player.chooseTarget(get.prompt('经造')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									var str = '请选择弃置一张与';
									event.cards.forEach((i) => {
										str += get.translation(i.name) + '、';
									});
									str += '牌名相同的牌';
									var names = event.cs.map((i) => i.name);
									result.targets[0].chooseToDiscard(str, true, 'he', (c) => names.includes(c.name));
								}
							},
							ai: {
								order: 11,
								result: {
									player: 1,
								},
							},
						},
						恩遇: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'useCardEnd' },
							filter(event, player) {
								return get.type(event.card) == 'basic';
							},
							forced: true,
							content() {
								player.addSkill('恩遇2');
							},
						},
						恩遇2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'damageBegin' },
							forced: true,
							content() {
								trigger.cancel();
								player.removeSkill('恩遇2');
							},
						},
						才黩: {
							group: ['才黩2'],
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'chooseToRespondBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.responded) return false;
								return true;
							},
							content() {
								'step 0';
								player.draw();
								var cards = [];
								if (ui.cardPile.childNodes.length < 8) {
									var discardcards = get.cards(8);
									for (var i = 0; i < discardcards.length; i++) {
										ui.discardPile.appendChild(discardcards[i]);
									}
								}
								for (var i = 0; i < 8; i++) {
									cards.push(ui.cardPile.childNodes[i]);
								}
								player.chooseCardButton('才黩:选择一张卡牌打出', cards).set('filterButton', function (button) {
									return get.type(button.link) == 'basic' && _status.event.getTrigger().filterCard(button.link);
								});
								('step 1');
								if (result.bool) {
									game.log(player, '才黩发动成功');
									trigger.untrigger();
									trigger.responded = true;
									result.links[0].remove();
									trigger.result = { bool: true, card: result.links[0] };
								}
							},
							ai: {
								effect: {
									target(card, player, target, effect) {
										if (get.tag(card, 'respondShan')) return 0.7;
										if (get.tag(card, 'respondSha')) return 0.7;
									},
								},
							},
						},
						才黩2: {
							enable: 'chooseToUse',
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return _status.currentPhase == player || _status.event.dying;
							},
							onChooseToUse(event, player) {
								if (!game.online) {
									var cards = [];
									if (ui.cardPile.childNodes.length < 8) {
										var discardcards = get.cards(8);
										for (var i = 0; i < discardcards.length; i++) {
											ui.discardPile.appendChild(discardcards[i]);
										}
									}
									for (var i = 0; i < 8; i++) {
										cards.push(ui.cardPile.childNodes[i]);
									}
									event.set('才黩cards', cards);
								}
							},
							chooseButton: {
								dialog(event, player) {
									return ui.create.dialog('才黩:选择一张卡牌使用', event.才黩cards);
								},
								filter(button, player) {
									var evt = _status.event.parent;
									if (evt && evt.filterCard) {
										return get.type(button.link) == 'basic' && evt.filterCard(button.link, player, evt);
									}
									return false;
								},
								check(button) {
									return 1;
								},
								backup(links, player) {
									return {
										filterCard() {
											return false;
										},
										selectCard: -1,
										viewAs: links[0],
										precontent() {
											player.draw();
										},
									};
								},
								prompt(links, player) {
									return '选择' + get.translation(links) + '的目标';
								},
							},
							ai: {
								order: 11,
								save: true,
								result: {
									player(player) {
										if (player.tempSkills.才黩8) return 0;
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
						},
						傲武: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								target.damage();
								('step 1');
								target.chooseToDiscard(target.hp, 'he', true);
								if (Math.random() < 0.1 * (1 + target.maxHp - target.hp)) target.loseHp();
							},
						},
						兵黩: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								game.playAudio('../extension/虎踞江东/audio/zhugeke白浪掀天txyy.mp3');
								var enemys = game.filterPlayer((i) => i.isEnemiesOf(player)).sort(lib.sort.seat);
								player.chooseJunfaFor(enemys[0]).set('prompt', '<span style="color:red">选择一项军法对其执行</span>');
								event.targets = enemys;
								('step 1');
								event.junfa = result.junfa;
								event.targets.map((i) => i.carryOutJunfa(player, event.junfa, [i]));
								player.draw(2 * event.targets.length);
							},
						},
						榱椽: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('榱椽')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									event.equip = get.cardPile(function (card) {
										return get.type(card) == 'equip';
									});
									result.targets[0].equip(event.equip || game.createCard(get.inpilefull('equip').randomGet()), true);
									player.draw(6 - result.targets[0].countCards('e'));
								}
							},
						},
						正序: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'loseEnd' },
							usable: 1,
							content() {
								player.draw(2 + trigger.cards.length);
								player.addTempSkill('qianxing');
							},
						},
						佐谏: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseUseEnd' },
							usable: 1,
							content() {
								var yelist = game.filterPlayer(function (current) {
									return current.isFriendsOf(player) && current.countCards('e');
								});
								if (yelist)
									yelist.map((i) => {
										i.draw();
										i.gain(game.createCard(get.inpile2('basic').randomGet()), 'gain2');
									});
								var delist = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player) && current.countCards('e') < player.countCards('e');
								});
								if (delist)
									delist.map((i) => {
										i.chooseToDiscard('he', true);
										i.loseHp();
									});
							},
						},
						逆击: {
							audio: 'ext:虎踞江东/audio:2',
							group: '逆击2',
							trigger: { target: 'useCardToAfter' },
							filter(event, player) {
								return get.type(event.card) != 'equip';
							},
							content() {
								player.draw(2);
							},
						},
						逆击2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('逆击'), function (card, player, target) {
										return target.countCards('he');
									})
									.set('ai', function (target) {
										return target.countCards('he');
									});
								('step 1');
								if (result.bool) {
									var t = result.targets[0];
									var card = game.createCard(t.getCards('he').randomGet());
									player.gain(card, 'draw');
									player.chooseToUse();
								}
							},
						},
						鸾飞凤舞安恤: {
							enable: 'phaseUse',
							usable: 3,
							multitarget: true,
							audio: 'ext:虎踞江东/audio:2',
							selectTarget: 2,
							filterTarget: true,
							content() {
								'step 0';
								game.mp40('bulianshi鸾飞凤舞Sptx');
								targets[0].gainPlayerCard(targets[1], 'he', true);
								('step 1');
								var card = result.cards[0];
								if (get.color(result.cards[0]) == 'red') {
									player.gainMaxHp();
									player.recover();
									player.draw(1 + player.countCards('he', (c) => c.number == 6));
								}
								if (get.color(result.cards[0]) == 'black') {
									player.draw();
									targets[1].loseHp();
								}
							},
						},
						鸾飞凤舞追忆: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: ['phaseBegin', 'dieBegin'] },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('鸾飞凤舞追忆')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(3);
									result.targets[0].recover();
								}
							},
						},
						kuangbipi: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:虎踞江东/audio:2',
							filterTarget(card, player, target) {
								return target != player && target.countCards('he') > 0;
							},
							content() {
								'step 0';
								target.chooseCard('he', [1, 3], '匡弼:将1〜3张牌置于' + get.translation(player) + '的武将牌上', true).set('ai', function (card) {
									if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
										return 7 - get.value(card);
									}
									return -get.value(card);
								});
								('step 1');
								if (result.bool) {
									target.$give(result.cards, player);
									target.lose(result.cards, ui.special);
									player.storage.kuangbi_draw = result.cards;
									player.storage.kuangbi_draw_source = target;
									player.addSkill('kuangbi_draw');
								}
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (get.attitude(player, target) > 0) {
											return Math.sqrt(target.countCards('he'));
										}
										return 0;
									},
									player: 1,
								},
							},
							subSkill: {
								draw: {
									trigger: {
										player: 'phaseBegin',
									},
									forced: true,
									mark: true,
									intro: {
										content: 'cards',
									},
									content() {
										var cards = player.storage.kuangbi_draw;
										if (cards) {
											player.gain(cards, 'gain2');
											var target = player.storage.kuangbi_draw_source;
											if (target && target.isAlive()) {
												target.draw(cards.length);
											}
										}
										delete player.storage.kuangbi_draw;
										delete player.storage.kuangbi_draw_source;
										player.removeSkill('kuangbi_draw');
									},
								},
							},
						},
						kuangbipf: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:虎踞江东/audio:2',
							filterTarget(card, player, target) {
								return target != player && target.countCards('he') > 0;
							},
							content() {
								'step 0';
								target.chooseCard('he', [1, 3], '匡弼:将1〜3张牌置于' + get.translation(player) + '的武将牌上', true).set('ai', function (card) {
									if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
										return 7 - get.value(card);
									}
									return -get.value(card);
								});
								('step 1');
								if (result.bool) {
									target.$give(result.cards, player);
									target.lose(result.cards, ui.special);
									player.storage.kuangbi_draw = result.cards;
									player.storage.kuangbi_draw_source = target;
									player.addSkill('kuangbi_draw');
								}
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (get.attitude(player, target) > 0) {
											return Math.sqrt(target.countCards('he'));
										}
										return 0;
									},
									player: 1,
								},
							},
							subSkill: {
								draw: {
									trigger: {
										player: 'phaseBegin',
									},
									forced: true,
									mark: true,
									intro: {
										content: 'cards',
									},
									content() {
										var cards = player.storage.kuangbi_draw;
										if (cards) {
											player.gain(cards, 'gain2');
											var target = player.storage.kuangbi_draw_source;
											if (target && target.isAlive()) {
												target.draw(cards.length);
											}
										}
										delete player.storage.kuangbi_draw;
										delete player.storage.kuangbi_draw_source;
										player.removeSkill('kuangbi_draw');
									},
								},
							},
						},
						tianaopi: {
							group: ['re_tianao2'],
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'chooseToRespondBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.responded) return false;
								return true;
							},
							content() {
								'step 0';
								var cards = [];
								if (ui.cardPile.childNodes.length < 4) {
									var discardcards = get.cards(4);
									for (var i = 0; i < discardcards.length; i++) {
										ui.discardPile.appendChild(discardcards[i]);
									}
								}
								for (var i = 0; i < 4; i++) {
									cards.push(ui.cardPile.childNodes[i]);
								}
								player.chooseCardButton('天傲:选择一张卡牌打出', cards).set('filterButton', function (button) {
									return get.type(button.link) == 'basic' && _status.event.getTrigger().filterCard(button.link);
								});
								('step 1');
								if (result.bool) {
									game.log(player, '天傲发动成功');
									trigger.untrigger();
									trigger.responded = true;
									result.links[0].remove();
									trigger.result = { bool: true, card: result.links[0] };
								}
							},
							ai: {
								effect: {
									target(card, player, target, effect) {
										if (get.tag(card, 'respondShan')) return 0.7;
										if (get.tag(card, 'respondSha')) return 0.7;
									},
								},
							},
						},
						qiongbingpif: {
							enable: 'phaseUse',
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return player.hasSkill('duwu2') == false;
							},
							filterCard() {
								if (ui.selected.targets.length) return false;
								return true;
							},
							position: 'he',
							selectCard: [1, null],
							complexSelect: true,
							filterTarget(card, player, target) {
								return target != player && get.distance(player, target, 'attack') <= 1 && ui.selected.cards.length == target.hp;
							},
							check(card) {
								switch (ui.selected.cards.length) {
									case 0:
										return 7 - get.value(card);
									case 1:
										return 6 - get.value(card);
									case 2:
										return 3 - get.value(card);
									default:
										return 0;
								}
							},
							content() {
								'step 0';
								target.damage();
								if (target.hp > 1) {
									event.finish();
								}
								('step 1');
								player.addSkill('duwu2');
							},
							ai: {
								order: 2,
								result: {
									target(player, target) {
										return get.damageEffect(target, player);
									},
								},
								threaten: 1.5,
								expose: 0.3,
							},
						},
						歌亢: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (!event.cards || event.cards.length != 1) return false;
								if (_status.currentPhase != player) return false;
								if (!player.storage.fenyin) return false;
								return get.color(player.storage.fenyin) != get.color(event.cards[0]);
							},
							content() {
								player.draw();
							},
							intro: {
								content: 'card',
							},
							group: ['fenyin2', 'fenyin3'],
						},
						过论: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return target != player && target.countCards('h');
							},
							content() {
								'step 0';
								event.cardt = target.getCards('h').randomGet();
								target.showCards(event.cardt);
								player.chooseCard('he', true).ai = function (card) {
									var numt = event.cardt.number;
									if (card.number < numt) return 20 - get.value(card);
									else if (card.number == numt) return 15 - get.value(card);
									return 12 - get.value(card);
								};
								('step 1');
								player.showCards(result.cards);
								event.cardp = result.cards;
								('step 2');
								player.give(event.cardp, target);
								target.give(event.cardt, player);
								('step 3');
								var nump = event.cardp[0].number;
								var numt = event.cardt.number;
								if (nump < numt) {
									player.draw(2);
								} else if (nump > numt) {
									target.draw(2);
								}
							},
							ai: {
								order: 8,
								result: {
									player(player, target) {
										if (get.attitude(player, target) > 0) return 1.5;
										return 0.5;
									},
								},
							},
						},
						展骥: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'gainAfter',
							},
							forced: true,
							filter(event, player) {
								if (_status.currentPhase != player || event.parent.parent.name == 'phaseDraw') return false;
								return event.parent.name == 'draw' && event.getParent(2).name != '展骥';
							},
							content() {
								player.draw(2);
							},
						},
						送丧: {
							audio: 'ext:虎踞江东/audio:2',
							derivation: '展骥',
							trigger: {
								global: 'phaseEnd',
							},
							content() {
								player.gainMaxHp();
								player.recover();
								player.addSkill('展骥');
							},
						},
						qqwz锋戮: {
							trigger: {
								player: 'phaseEnd',
							},
							audio: 'ext:虎踞江东/audio:2',
							forced: true,
							content() {
								'step 0';
								event.list = player.getEnemies().sortBySeat();
								('step 1');
								if (event.list.length) {
									var target = event.list.shift();
									player.line(target, 'green');
									target.link();
									event.redo();
								}
							},
							ai: {
								threaten: 1.2,
							},
							group: 'qqwz锋戮_1',
							subSkill: {
								1: {
									trigger: {
										global: 'damageEnd',
									},
									filter(event, player) {
										return player.getEnemies().includes(event.player) && event.player.isLinked();
									},
									audio: 'ext:虎踞江东/audio:2',
									content() {
										trigger.player.loseHp(2);
									},
								},
							},
						},
						qqwz索舟: {
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.isLinked();
							},
							audio: 'ext:虎踞江东/audio:2',
							content() {
								player.recover();
								player.draw();
							},
							group: ['qqwz索舟_1', 'qqwz索舟_2'],
							subSkill: {
								1: {
									trigger: {
										player: 'damageBegin',
									},
									filter(event, player) {
										return event.nature && player.isLinked();
									},
									audio: 'ext:虎踞江东/audio:2',
									content() {
										trigger.num++;
									},
								},
								2: {
									trigger: {
										player: 'damageBegin',
									},
									filter(event, player) {
										return !event.nature && player.isLinked();
									},
									audio: 'ext:虎踞江东/audio:2',
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
							},
						},
						qqwz斥公: {
							trigger: {
								global: 'phaseEnd',
							},
							audio: 'ext:虎踞江东/audio:2',
							forced: true,
							filter(event, player) {
								return player.getFriends().includes(event.player) && event.player.hp != player.hp;
							},
							content() {
								trigger.player.draw(2);
								trigger.player.recover();
								player.draw(2);
								player.recover();
							},
							group: 'qqwz斥公_1',
							subSkill: {
								1: {
									trigger: {
										global: 'phaseEnd',
									},
									audio: 'ext:虎踞江东/audio:2',
									forced: true,
									filter(event, player) {
										return player.getFriends().includes(event.player) && event.player.countCards('h') > 0;
									},
									content() {
										trigger.player.draw(2);
										trigger.player.recover();
										player.draw(2);
										player.recover();
									},
								},
							},
						},
						qqwz微审: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								target: 'shaBegin',
							},
							filter(event, player) {
								return event.player != player;
							},
							content() {
								player.loseHp();
								trigger.player.damage()._triggered = null;
							},
							group: 'qqwz微审_1',
							subSkill: {
								1: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										source: 'damageEnd',
									},
									forced: true,
									filter(event, player) {
										return player.countCards('h') == 0 && player.hp < player.maxHp;
									},
									content() {
										player.phase('nodelay');
									},
								},
							},
						},
						观潮: {
							subSkill: {
								dizeng: {
									mark: true,
									marktext: '增',
									intro: {
										content: '单调递增',
									},
									init(player) {
										player.storage.guanchao = 0;
									},
									onremove(player) {
										delete player.storage.guanchao;
									},
									trigger: {
										player: 'useCard',
									},
									silent: true,
									forced: true,
									popup: false,
									filter(event, player) {
										return event.card.number && player.storage.guanchao != 14;
									},
									content() {
										var num1 = trigger.card.number;
										var num2 = player.storage.guanchao;
										if (num2 != 0 && num1 > num2) {
											player.draw(2);
											player.storage.guanchao = num1;
										} else if (num2 == 0) {
											player.storage.guanchao = num1;
										} else player.storage.guanchao = 14;
									},
								},
								dijian: {
									mark: true,
									marktext: '减',
									intro: {
										content: '单调递减',
									},
									init(player) {
										player.storage.guanchao = 0;
									},
									onremove(player) {
										delete player.storage.guanchao;
									},
									trigger: {
										player: 'useCard',
									},
									silent: true,
									forced: true,
									popup: false,
									filter(event, player) {
										return event.card.number && player.storage.guanchao != 14;
									},
									content() {
										var num1 = trigger.card.number;
										var num2 = player.storage.guanchao;
										if (num2 != 0 && num1 < num2) {
											player.draw(2);
											player.storage.guanchao = num1;
										} else if (num2 == 0) {
											player.storage.guanchao = num1;
										} else player.storage.guanchao = 14;
									},
								},
							},
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							content() {
								'step 0';
								var list = ['递增', '递减', '取消'];
								player
									.chooseControl(list)
									.set('prompt', get.prompt('观潮'))
									.set('ai', function () {
										var listx = [0, 1, 2];
										return list[[0, 1].randomGet()];
									});
								('step 1');
								switch (result.control) {
									case '递增': {
										player.addTempSkill('观潮_dizeng');
										break;
									}
									case '递减': {
										player.addTempSkill('观潮_dijian');
										break;
									}
									case '取消': {
										break;
									}
								}
							},
						},
						逊贤: {
							usable: 2,
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: ['useCardAfter', 'respond'],
							},
							filter(event, player) {
								if (get.itemtype(event.cards) != 'cards') return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.isInPile()) {
											return true;
										}
									}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('逊贤'))
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att < 3) return 0;
										if (target.hasJudge('lebu')) {
											att /= 5;
										}
										if (target.hasSha() && _status.event.sha) {
											att /= 5;
										}
										if (_status.event.wuxie && target.needsToDiscard(1)) {
											att /= 5;
										}
										return att / (1 + get.distance(player, target, 'absolute'));
									})
									.set('sha', trigger.cards[0].name == 'sha')
									.set('wuxie', trigger.cards[0].name == 'wuxie');
								('step 1');
								if (result.bool) {
									var list = [];
									for (var i = 0; i < trigger.cards.length; i++) {
										if (trigger.cards[i].isInPile()) {
											list.push(trigger.cards[i]);
										}
									}
									result.targets[0].gain(list, 'gain2');
								}
							},
						},
						困渊: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && get.distance(player, current, 'attack') <= 1;
								});
							},
							check(event, player) {
								var num = game.countPlayer(function (current) {
									if (current.countCards('he') && current != player && get.distance(player, current, 'attack') <= 1 && get.attitude(player, current) <= 0) {
										return true;
									}
								});
								return num;
							},
							content() {
								'step 0';
								var targets = game.filterPlayer(function (current) {
									var player = _status.event.player;
									return current != player && get.distance(player, current, 'attack') <= 1;
								});
								targets.sort(lib.sort.seat);
								event.targets = targets;
								event.num = 0;
								player.line(targets, 'green');
								('step 1');
								if (num < event.targets.length) {
									if (event.targets[num].countCards('he')) {
										player.gainPlayerCard(event.targets[num], 'he', true);
									}
									event.num++;
									event.redo();
								}
							},
							ai: {
								threaten(player, target) {
									return get.distance(target, player, 'attack') <= 1 ? 2 : 1;
								},
							},
						},
						请征: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player && target.countCards('he') > 0;
							},
							content() {
								'step 0';
								player.discardPlayerCard(target, true);
								('step 1');
								if (result.bool) {
									var type = get.type(result.cards[0]);
									if (type != 'basic' && type != 'trick') {
										player.chooseToDiscard('he', true);
										event.finish();
									} else {
										event.card = result.cards[0];
									}
								} else {
									event.finish();
								}
								('step 2');
								target.damage();
							},
							ai: {
								order: 9,
								result: {
									target: -1,
								},
							},
						},
						立军: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								target: 'useCardToBefore',
							},
							filter(event, player) {
								return get.type(event.card) != 'equip' && player.countCards('he') > 0;
							},
							content() {
								player.chooseToDiscard(1, 'he', true);
								game.log(player, '发动了立军,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
						},
						sl: {
							audio: 'ext:虎踞江东/audio:2',
							forced: true,
							content() { },
						},
						连翩: {
							usable: 4,
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCardToBegin',
							},
							forced: true,
							filter(event, player) {
								if (!event.targets || !event.targets.length) return false;
								return true;
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								event.card = result[0];
								player.chooseTarget('是否将' + get.translation(event.card) + '交给其他角色？', function (card, player, target) {
									return target != player;
								});
								('step 2');
								if (result.bool) {
									player.give(event.card, result.targets[0], true);
									player.draw();
								}
							},
						},
						ji_ganlu: {
							enable: 'phaseUse',
							usable: 2,
							audio: 'ext:虎踞江东/audio:2',
							selectTarget: 2,
							filterTarget(card, player, target) {
								if (target.isMin()) return false;
								if (ui.selected.targets.length == 0) return true;
								if (ui.selected.targets[0].countCards('e') == 0 && target.countCards('e') == 0) return false;
								return true;
							},
							multitarget: true,
							content() {
								'step 0';
								event.cards = [targets[0].getCards('e'), targets[1].getCards('e')];
								targets[0].lose(event.cards[0], ui.special);
								targets[1].lose(event.cards[1], ui.special);
								if (event.cards[0].length) targets[0].$give(event.cards[0], targets[1]);
								if (event.cards[1].length) targets[1].$give(event.cards[1], targets[0]);
								('step 1');
								for (var i = 0; i < event.cards[1].length; i++) {
									targets[0].equip(event.cards[1][i]);
								}
								for (var i = 0; i < event.cards[0].length; i++) {
									targets[1].equip(event.cards[0][i]);
								}
							},
							ai: {
								order: 10,
								threaten(player, target) {
									return 0.8 * Math.max(1 + target.maxHp - target.hp);
								},
								result: {
									target(player, target) {
										var list1 = [];
										var list2 = [];
										var num = player.maxHp - player.hp;
										var players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (get.attitude(player, players[i]) > 0) list1.push(players[i]);
											else if (get.attitude(player, players[i]) < 0) list2.push(players[i]);
										}
										list1.sort(function (a, b) {
											return a.countCards('e') - b.countCards('e');
										});
										list2.sort(function (a, b) {
											return b.countCards('e') - a.countCards('e');
										});
										var delta;
										for (var i = 0; i < list1.length; i++) {
											for (var j = 0; j < list2.length; j++) {
												delta = list2[j].countCards('e') - list1[i].countCards('e');
												if (delta <= 0) continue;
												if (delta <= num) {
													if (target == list1[i] || target == list2[j]) {
														return get.attitude(player, target);
													}
													return 0;
												}
											}
										}
										return 0;
									},
								},
								effect: {
									target(card, player, target) {
										if (target.hp == target.maxHp && get.tag(card, 'damage')) return 0.2;
									},
								},
							},
						},
						ji_buyi: {
							trigger: {
								global: 'dying',
							},
							_priority: 6,
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return event.player.hp <= 0 && event.player.countCards('h') > 0;
							},
							check(event, player) {
								if (event.player.isUnderControl(true, player)) {
									return event.playe.getCards('h', function (card) {
										return get.type(card) != 'food';
									}).length;
								}
								return get.attitude(player, event.player) > 0;
							},
							forced: true,
							content() {
								'step 0';
								var check = false;
								if (trigger.player == player) {
									if (
										player.num('h', function (card) {
											return get.type(card) != 'food';
										})
									) {
										check = true;
									}
								} else {
									if (get.attitude(player, trigger.player) > 0) {
										check = true;
									}
								}
								player
									.choosePlayerCard(trigger.player, get.prompt('ji_buyi', trigger.player), 'h')
									.set('ai', function (button) {
										if (!_status.event.check) return 0;
										if (_status.event.target.isUnderControl(true, _status.event.player)) {
											if (get.type(button.link) != 'food') {
												return 10 - get.value(button.link);
											}
											return 0;
										} else {
											return Math.random();
										}
									})
									.set('check', check)
									.set('filterButton', function (button) {
										if (_status.event.player == _status.event.target) {
											return lib.filter.cardDiscardable(button.link, _status.event.player);
										}
										return true;
									});
								('step 1');
								if (result.bool) {
									event.card = result.links[0];
									player.showCards([event.card], get.translation(player) + '展示的手牌');
								} else {
									event.finish();
								}
								('step 2');
								if (get.type(event.card) != 'food') {
									var num = trigger.player.maxHp - trigger.player.hp;
									trigger.player.recover(num);
									trigger.player.draw(num);
									player.draw(num);
								}
							},
							ai: {
								threaten: 1.4,
							},
						},
						断发: {
							init(player) {
								player.storage.断发 = 0;
							},
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							position: 'he',
							filter(card, player) {
								return player.storage.断发 < player.maxHp;
							},
							filterCard(card) {
								return get.color(card) == 'black';
							},
							selectCard() {
								var player = _status.event.player;
								return [1, player.maxHp - player.storage.断发];
							},
							check(card) {
								return 6 - get.value(card);
							},
							delay: 0,
							content() {
								player.draw(2 * cards.length);
								player.storage.断发 += cards.length;
							},
							group: '断发_clear',
							subSkill: {
								clear: {
									trigger: {
										player: 'phaseBefore',
									},
									forced: true,
									silent: true,
									popup: false,
									content() {
										player.storage.断发 = 0;
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
						诱敌: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('诱敌'), function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (player.countCards('h', 'sha') > player.countCards('h') / 3 && player.countCards('h', { color: red }) > player.countCards('h') / 2) return 0;
										if (target.countCards('he') == 0) return 0.1;
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.discardPlayerCard(event.target, 'h', true);
								} else {
									event.finish();
								}
								('step 2');
								player.draw();
								player.gainPlayerCard('he', event.target, true);
							},
							ai: {
								expose: 0.2,
								threaten: 1.4,
							},
						},
						炼化: {
							derivation: ['reyingzi', 'guanxing', 'zhiyan', 'gongxin'],
							audio: 'ext:虎踞江东/audio:2',
							init(player, skill) {
								if (!player.storage[skill])
									player.storage[skill] = {
										red: 0,
										black: 0,
									};
							},
							marktext: '丹',
							intro: {
								name: '丹血',
								markcount(storage) {
									return storage.red + storage.black;
								},
								content(storage) {
									return '共有' + (storage.red + storage.black) + '个标记其中' + storage.red + '红色标记其中' + storage.black + '黑色标记';
								},
							},
							trigger: { global: 'damageEnd' },
							forced: true,
							filter(event, player) {
								return event.player != player && event.player.isAlive() && _status.currentPhase != player;
							},
							content() {
								player.storage.炼化[player.getFriends().includes(trigger.player) ? 'red' : 'black']++;
								player.markSkill('炼化');
							},
							group: '炼化_harmonia',
							subSkill: {
								harmonia: {
									forced: true,
									audio: 'ext:虎踞江东/audio:2',
									trigger: { player: 'phaseBefore' },
									//filter:function(event,player){
									//	return player.storage.炼化&&player.storage.炼化.red+player.storage.炼化.black>0;
									//},
									forced: true,
									content() {
										var red = player.storage.炼化.red;
										var black = player.storage.炼化.black;
										player.storage.炼化 = { red: 0, black: 0 };
										player.unmarkSkill('炼化');
										//if(red+black<4){
										var cards = ['tao'];
										player.addTempSkill('reyinggxzi', 'phaseAfter');
										//}
										//else if(red>black){
										var cards = ['wuzhong'];
										player.addTempSkill('zhigxyan', 'phaseAfter');
										//}
										//else if(red<black){
										var cards = ['shunshou'];
										player.addTempSkill('guangxxing', 'phaseAfter');
										//}
										//else{
										var cards = ['sha', 'juedou'];
										player.addTempSkill('gonggxxin', 'phaseAfter');
										//}
										var list = ['sha'];
										player.gain(game.createCard(list.randomGet()));
										player.$draw();
										var list = ['shan'];
										player.gain(game.createCard(list.randomGet()));
										player.$draw();
										var list = ['tao'];
										player.gain(game.createCard(list.randomGet()));
										player.$draw();
										var list = ['wuzhong'];
										player.gain(game.createCard(list.randomGet()));
										player.$draw();
										var list = ['juedou'];
										player.gain(game.createCard(list.randomGet()));
										player.$draw();
										var list = ['shunshou'];
										player.gain(game.createCard(list.randomGet()));
										player.$draw();
										//player.addTempSkill(skill);
										//player.gain(cards2,'gain2','log');
									},
								},
							},
						},
						札符: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filterTarget: true,
							content() {
								target.addSkill('札符_hf');
								target.storage.札符_hf = player;
							},
							subSkill: {
								hf: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										player: 'phaseDiscardBegin',
									},
									forced: true,
									popup: false,
									charlotte: true,
									content() {
										'step 0';
										if (player.countCards('h') <= 1 || player.storage.札符_hf.isDead()) event.finish();
										('step 1');
										player.chooseCard('h', true, '选择保留一张手牌,将其余的手牌交给' + get.translation(player.storage.札符_hf)).ai = get.value;
										('step 2');
										var cards = player.getCards('h');
										cards.remove(result.cards[0]);
										player.storage.札符_hf.gain(cards, player, 'giveAuto');
										('step 3');
										player.removeSkill('札符_hf');
									},
								},
							},
						},
						guangxxing: {
							audio: 1,
							audioname: ['jiangwei'],
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								event.num = Math.min(5, game.countPlayer());
								event.cards = get.cards(event.num);
								event.chosen = [];
								('step 1');
								var js = player.getCards('j');
								var pos;
								var choice = -1;
								var getval = function (card, pos) {
									if (js[pos]) {
										return get.judge(js[pos])(card);
									} else {
										return get.value(card);
									}
								};
								for (pos = 0; pos < Math.min(event.cards.length, js.length + 2); pos++) {
									var max = getval(event.cards[pos], pos);
									for (var j = pos + 1; j < event.cards.length; j++) {
										var current = getval(event.cards[j], pos);
										if (current > max) {
											choice = j;
											max = current;
										}
									}
									if (choice != -1) {
										break;
									}
								}
								player
									.chooseCardButton('观星:选择要移动的牌', event.cards)
									.set('filterButton', function (button) {
										return !_status.event.chosen.includes(button.link);
									})
									.set('chosen', event.chosen)
									.set('ai', function (button) {
										return button.link == _status.event.choice ? 1 : 0;
									})
									.set('choice', event.cards[choice]);
								event.pos = pos;
								('step 2');
								if (result.bool) {
									var card = result.links[0];
									var index = event.cards.indexOf(card);
									event.card = card;
									event.chosen.push(card);
									event.cards.remove(event.card);
									var buttons = event.cards.slice(0);
									player
										.chooseControl(function () {
											return _status.event.controlai;
										})
										.set('controlai', event.pos || 0)
										.set('sortcard', buttons)
										.set('tosort', card);
								} else {
									event.goto(4);
								}
								('step 3');
								if (typeof result.index == 'number') {
									if (result.index > event.cards.length) {
										ui.cardPile.appendChild(event.card);
									} else {
										event.cards.splice(result.index, 0, event.card);
									}
									event.num--;
									if (event.num > 0) {
										event.goto(1);
									}
								}
								('step 4');
								while (event.cards.length) {
									ui.cardPile.insertBefore(event.cards.pop(), ui.cardPile.firstChild);
								}
								var js = player.getCards('j');
								if (js.length == 1) {
									if (get.judge(js[0])(ui.cardPile.firstChild) < 0) {
										player.addTempSkill('guanxing_fail');
									}
								}
							},
							ai: {
								guanxing: true,
							},
						},
						gonggxxin: {
							audio: 1,
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player && target.countCards('h');
							},
							content() {
								'step 0';
								event.videoId = lib.status.videoId++;
								var cards = target.getCards('h');
								if (player.isOnline2()) {
									player.send(
										function (cards, id) {
											ui.create.dialog('攻心', cards).videoId = id;
										},
										cards,
										event.videoId
									);
								}
								event.dialog = ui.create.dialog('攻心', cards);
								event.dialog.videoId = event.videoId;
								if (!event.isMine()) {
									event.dialog.style.display = 'none';
								}
								player
									.chooseButton()
									.set('filterButton', function (button) {
										return button.link.suit == 'heart';
									})
									.set('dialog', event.videoId);
								('step 1');
								if (result.bool) {
									event.card = result.links[0];
									var func = function (card, id) {
										var dialog = get.idDialog(id);
										if (dialog) {
											for (var i = 0; i < dialog.buttons.length; i++) {
												if (dialog.buttons[i].link == card) {
													dialog.buttons[i].classList.add('selectedx');
												} else {
													dialog.buttons[i].classList.add('unselectable');
												}
											}
										}
									};
									if (player.isOnline2()) {
										player.send(func, event.card, event.videoId);
									} else if (event.isMine()) {
										func(event.card, event.videoId);
									}
									player.chooseControl('弃置', '牌堆顶');
								} else {
									if (player.isOnline2()) {
										player.send('closeDialog', event.videoId);
									}
									event.dialog.close();
									event.finish();
								}
								('step 2');
								if (player.isOnline2()) {
									player.send('closeDialog', event.videoId);
								}
								event.dialog.close();
								var card = event.card;
								if (result.control == '牌堆顶') {
									target.lose(card);
									player.showCards(card, '置于牌堆顶');
								} else {
									target.discard(card);
									event.finish();
								}
								('step 3');
								event.card.fix();
								ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
								game.log(player, '将', event.card, '置于牌堆顶');
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
						zhigxyan: {
							audio: 1,
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('zhigxyan')).set('ai', function (target) {
									return get.attitude(_status.event.player, target);
								});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								var cards = get.cards();
								var card = cards[0];
								switch (get.type(card, 'trick')) {
									case 'basic':
										event.effect = '';
										break;
									case 'trick':
										event.effect = '';
										break;
									case 'equip':
										event.effect = 'recover';
										break;
								}
								if (get.type(card) == 'equip') {
									event.target.equip(card);
									event.target.$draw(card);
								} else {
									event.target.gain(cards, 'gain2', 'log');
								}
								('step 3');
								switch (event.effect) {
									case 'recover':
										event.target.recover();
										break;
								}
							},
							ai: {
								expose: 0.2,
								threaten: 1.2,
							},
						},
						reyinggxzi: {
							audio: 1,
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								threaten: 1.5,
							},
							mod: {
								maxHandcard(player, num) {
									if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
								},
							},
						},
						威仪: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return true;
							},
							forced: true,
							content() {
								'step 0';
								var list = [];
								if (trigger.player.hp >= player.hp) list.push('失去体力');
								if (trigger.player.hp <= player.hp && trigger.player.isDamaged()) list.push('回复体力');
								list.push('cancel2');
								player
									.chooseControl(list)
									.set('prompt', get.prompt2('威仪', trigger.player))
									.set('ai', function () {
										var player = _status.event.player,
											target = _status.event.getTrigger().player;
										var att = get.attitude(player, target),
											eff = get.recoverEffect(target, player, player);
										if (target.hp <= player.hp && target.isDamaged() && att > 2 && eff > 0) {
											if (player == target) {
												var storage = player.getStorage('威仪');
												if (
													player.hp >= 2 &&
													game.hasPlayer(function (current) {
														return current.hp == player.hp + 1 && !storage.includes(current) && get.attitude(player, current) < 0;
													})
												)
													return 'cancel2';
											}
											return '回复体力';
										}
										if (target.hp >= player.hp && att < -2 && eff < 0) return '失去体力';
										return 'cancel2';
									});
								('step 1');
								if (result.control != 'cancel2') {
									var target = trigger.player;
									//player.markAuto('威仪',[target]);
									target[result.control == '失去体力' ? 'loseHp' : 'recover']();
								}
							},
							/*onremove:true,
							intro:{
								content:'已令$对汝威服',
							},*/
						},
						锦织: {
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return player.countCards('h', { type: 'basic' }) > 0;
							},
							trigger: {
								player: 'phaseBefore',
							},
							content() {
								'step 0';
								player.chooseToDiscard(get.prompt('弃置一张基本牌视为使用了一张无视距离的【顺手牵羊】'), 1, 'h', function (card, player, target) {
									return get.type(card) == 'basic';
								}).ai = function (card) {
									return 1;
								};
								('step 1');
								if (result.bool) {
									player
										.chooseTarget('选择【顺手牵羊】的目标', 1, function (card, player, target) {
											return player.canUse('shunshou', target, false);
										})
										.set('ai', function (target) {
											return get.effect(target, { name: 'shunshou' }, _status.event.player);
										});
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.useCard({ name: 'shunshou' }, result.targets, false);
								}
							},
						},
						战歌: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCard' },
							forced: true,
							filter(event, player) {
								if (!event.cards || event.cards.length != 1) return false;
								if (_status.currentPhase != player) return false;
								if (!player.storage.战歌) return false;
								return get.color(player.storage.战歌) != get.color(event.cards[0]);
							},
							content() {
								'step 0';
								player.draw();
								player
									.chooseTarget(get.prompt('战歌'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].damage();
								}
							},
							intro: {
								content: 'card',
							},
							group: ['战歌2', '战歌3'],
						},
						战歌3: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCard' },
							_priority: -1,
							silent: true,
							filter(event, player) {
								if (!event.cards || event.cards.length != 1) return false;
								if (_status.currentPhase != player) return false;
								return true;
							},
							content() {
								player.storage.战歌 = trigger.cards[0];
							},
						},
						战歌2: {
							trigger: { player: 'phaseBefore' },
							silent: true,
							_priority: 10,
							content() {
								player.storage.战歌 = null;
							},
						},
						gz典财: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseUseEnd' },
							filter(event, player) {
								return player.maxHp != player.countCards('h');
							},
							content() {
								var num = player.maxHp;
								player.draw(num);
							},
						},
						gz调度: {
							audio: 'ext:虎踞江东/audio:2',
							group: 'gz调度_use',
							forced: true,
							subSkill: {
								use: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										global: 'useCardBegin',
									},
									filter(event, player) {
										return get.type(event.card) == 'equip' && event.player.isAlive() && event.player.isFriendsOf(player) && (player == event.player || player.hasSkill('gz调度'));
									},
									forced: true,
									content() {
										'step 0';
										var next = trigger.player.chooseBool('是否发动【调度】摸两张牌回复一点体力？');
										if (player.hasSkill('gz调度')) next.set('frequentSkill', 'gz调度');
										('step 1');
										if (result.bool) {
											trigger.player.draw(2);
											trigger.player.recover();
										}
									},
								},
							},
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return true;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt2('gz调度'), function (card, player, current) {
									return current.countCards('he') > 0;
								}).ai = function (target) {
									var num = 1;
									if (target.hasSkill('gzxiaoji')) num += 2.5;
									if (target.isDamaged() && target.getEquip('baiyin')) num += 2.5;
									if (target.hasSkill('xuanlve')) num += 2;
									return num;
								};
								('step 1');
								if (result.bool) {
									event.target1 = result.targets[0];
									player.line(event.target1, 'gz调度');
									player.gainPlayerCard(event.target1, 'he', true);
								} else event.finish();
								('step 2');
								if (result.bool && player.getCards('he').includes(result.cards[0])) {
									event.card = result.cards[0];
									player
										.chooseTarget('是否将' + get.translation(event.card) + '交给一名其他角色？', function (card, player, current) {
											return current != player && current != _status.event.target1;
										})
										.set('target1', event.target1);
								} else event.finish();
								('step 3');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.gain(card, player, 'give');
								}
							},
						},
						戮嗜: {
							group: ['戮嗜_damage', '戮嗜_gain', '戮嗜_begin'],
							subSkill: {
								begin: {
									silent: true,
									popup: false,
									forced: true,
									trigger: {
										global: 'phaseUseBegin',
									},
									filter(event, player) {
										return event.player.hasSkill('sunchenlushi') && event.player != player;
									},
									content() {
										'step 0';
										if (trigger.player.storage.sunchenlushi > 1) trigger.player.storage.sunchenlushi--;
										else {
											delete trigger.player.storage.sunchenlushi;
											trigger.player.removeSkill('sunchenlushi');
										}
										('step 1');
										player.line(trigger.player, 'fire');
										trigger.player.damage('fire');
										trigger.player.addTempSkill('sunchenlushi_disable', 'phaseAfter');
										event.goto(2);
										('step 2');
										player.draw(player.storage.戮嗜);
										trigger.player.addTempSkill('sunchenlushi_low', 'phaseAfter');
										event.goto(3);
										('step 3');
										player.line(trigger.player, 'green');
										var card1 = trigger.player.getCards('h').randomGet();
										var card2 = trigger.player.getCards('e').randomGet();
										var list = [];
										if (card1) list.push(card1);
										if (card2) list.push(card2);
										if (list.length) {
											trigger.player.$giveAuto(list, player);
											player.gain(list);
										}
									},
								},
								damage: {
									audio: 'ext:虎踞江东/audio:2',
									forced: true,
									trigger: {
										source: 'damageBegin',
									},
									filter(event, player) {
										return event.player.hasSkill('sunchenlushi');
									},
									content() {
										trigger.num++;
										player.addTempSkill('戮嗜无次数距离限制', 'phaseAfter');
									},
								},
								gain: {
									audio: 'ext:虎踞江东/audio:2',
									forced: true,
									trigger: {
										source: 'damageBegin',
									},
									filter(event, player) {
										return event.player.hasSkill('sunchenlushi');
									},
									content() {
										'step 0';
										player
											.chooseTarget(get.prompt('戮嗜'), function (card, player, target) {
												return target != player;
											})
											.set('ai', function (target) {
												return -get.attitude(player, target);
											});
										('step 1');
										if (result.bool) {
											player.gainPlayerCard(result.targets[0], 'he', true);
										}
									},
								},
							},
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: null,
							init(player) {
								if (player.storage.戮嗜 == undefined) player.storage.戮嗜 = 7;
							},
							mark: true,
							marktext: '戮',
							intro: {
								content: 'mark',
							},
							filter(event, player) {
								return player.storage.戮嗜 > 0;
							},
							filterTarget(card, player, target) {
								if (target.storage.sunchenlushi != undefined && target.storage.sunchenlushi > 0) return false;
								return player != target && player.storage.戮嗜 > 0;
							},
							content() {
								if (target.storage.sunchenlushi == undefined || target.storage.sunchenlushi == 0) {
									target.addSkill('sunchenlushi');
									target.storage.sunchenlushi = 0;
								}
								target.storage.sunchenlushi++;
								player.storage.戮嗜--;
								if (player.storage.戮嗜 == 0) player.unmarkSkill('戮嗜');
							},
							ai: {
								order: 11,
								result: {
									target(player, target) {
										return Math.min(-(1 + player.storage.戮嗜 - target.hp), 0);
									},
								},
								threaten: 1.1,
							},
						},
						sunchenlushi: {
							marktext: '戮',
							mark: true,
							intro: {
								content: 'mark',
							},
						},
						sunchenlushi_disable: {
							audio: 'ext:虎踞江东/audio:2',
							forced: true,
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return true;
							},
							content() {
								trigger.num--;
							},
							mark: true,
							marktext: '免',
							intro: {
								content: '本回合内造成伤害始终减一',
							},
						},
						sunchenlushi_low: {
							mod: {
								maxHandcard(player, num) {
									return num - 2;
								},
							},
							marktext: '减',
							mark: true,
							intro: {
								content: '本回合内手牌上限-2',
							},
						},
						戮嗜无次数距离限制: {
							mod: {
								targetInRange(card, player, target, now) {
									return true;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
							},
							ai: {
								unequip: true,
							},
						},
						凶虐: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'dying',
							},
							filter(event, player) {
								return true;
							},
							forced: true,
							_priority: 7,
							content() {
								var num = trigger.player.maxHp;
								player.storage.戮嗜 += num;
								player.markSkill('戮嗜');
							},
						},
						慎行: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							content() {
								'step 0';
								player.chooseTarget(get.prompt('慎行')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, 2);
									player.draw();
								}
							},
						},
						秉壹: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseDiscardEnd' },
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('秉壹'), [1, player.countCards('h')]).set('ai', function (target) {
									return get.attitude(_status.event.player, target);
								});
								('step 1');
								if (result.bool) {
									player.showHandcards(get.translation(player) + '发动了【秉壹】');
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (targets && targets.length) {
									player.line(targets, 'green');
									var X = player.countCards('h', { color: 'red' });
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].draw(X);
									}
								}
							},
							ai: {
								expose: 0.1,
							},
						},
						乔侍: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: ['useCardAfter', 'respondAfter', 'discardAfter'] },
							usable: 1,
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.suit == 'diamond' && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								trigger.player.draw();
								trigger.player.recover();
							},
							ai: {
								threaten: 0.7,
							},
						},
						辗转流离: {
							nobracket: true,
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								if (!event.targets.includes(player)) return false;
								return true;
							},
							content() {
								'step 0';
								var card = trigger.card;
								var players = trigger.player;
								player
									.chooseTarget('<span style=\"color: red\">流离</span>:是否将' + get.translation(trigger.card) + '的目标转移给1名与你距离为1的<span style=\"color: red\">其他角色</span>,若如此做,你须摸两张牌<span style=\"color: red\">弃</span>1张牌', function (card, player, target) {
										return target != player && get.distance(player, target) <= 1;
									})
									.set('ai', function (target) {
										return get.effect(target, card, player, player);
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets[0];
									var target = event.targets;
									trigger.targets.push(target);
									player.line(target, 'green');
								} else {
									event.finish();
								}
								('step 2');
								event.cards = trigger.card;
								var eff = get.sgn(get.effect(player, event.cards, player, player));
								player.draw(2);
								player
									.chooseCard('是否弃1张牌', 'he', function (card) {
										return true;
									})
									.set('ai', function (card) {
										if (eff > 0) return false;
										return 8 - get.value(card);
									});
								('step 3');
								if (result.bool) {
									var card = result.cards[0];
									var target = event.targets;
									player.discard(card);
									trigger.targets.remove(player);
								}
							},
							ai: {
								threaten: 2,
								effect(card, player, target) {
									if (!target.hasFriend()) return;
									if (player == target) return;
									var name = card.name;
									var type = get.type(card);
									var nh = target.countCards();
									if (type == 'trick' && name != 'shunshou' && name != 'guohe' && name != 'huogong') {
										if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
											if (get.tag(card, 'damage')) {
												return 0;
											}
											return 5;
										}
									}
								},
							},
						},
						国色芳华: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							discard: false,
							filter(event, player) {
								return player.countCards('he', { color: 'red' }) > 0;
							},
							prepare: 'throw',
							position: 'he',
							filterCard: { color: 'red' },
							filterTarget(card, player, target) {
								if (player == target) return false;
								if (target.hasJudge('lebu')) return false;
								return lib.filter.targetEnabled({ name: 'lebu' }, player, target);
							},
							check(card) {
								return 9 - get.value(card);
							},
							content() {
								if (target.hasJudge('lebu')) {
									target.discard(target.getJudge('lebu'));
								} else {
									var next = player.useCard({ name: 'lebu' }, target, cards);
									next.animate = false;
									next.audio = false;
								}
								player.draw();
								player.gainPlayerCard(true, target, 'h');
							},
							ai: {
								threaten: 1.6,
								result: {
									target(player, target) {
										if (target.hasJudge('lebu')) return -ai.get.effect(target, { name: 'lebu' }, player, target);
										return ai.get.effect(target, { name: 'lebu' }, player, target);
									},
								},
								order: 6.9,
							},
						},
						丽质: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'qiaojiashinv乔家侍女');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'qiaojiashinv乔家侍女');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('丽质');
							},
						},
						傲世: {
							group: ['傲世2'],
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'chooseToRespondBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.responded) return false;
								return true;
							},
							content() {
								'step 0';
								var cards = [];
								if (ui.cardPile.childNodes.length < 8) {
									var discardcards = get.cards(8);
									for (var i = 0; i < discardcards.length; i++) {
										ui.discardPile.appendChild(discardcards[i]);
									}
								}
								for (var i = 0; i < 8; i++) {
									cards.push(ui.cardPile.childNodes[i]);
								}
								player.chooseCardButton('傲世:选择一张卡牌打出', cards).set('filterButton', function (button) {
									return get.type(button.link) == 'basic' && _status.event.getTrigger().filterCard(button.link);
								});
								('step 1');
								if (result.bool) {
									game.log(player, '傲世发动成功');
									trigger.untrigger();
									trigger.responded = true;
									result.links[0].remove();
									trigger.result = { bool: true, card: result.links[0] };
								}
							},
							ai: {
								effect: {
									target(card, player, target, effect) {
										if (get.tag(card, 'respondShan')) return 0.7;
										if (get.tag(card, 'respondSha')) return 0.7;
									},
								},
							},
						},
						傲世2: {
							enable: 'chooseToUse',
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return _status.currentPhase == player || _status.event.dying;
							},
							onChooseToUse(event) {
								if (!game.online) {
									var cards = [];
									if (ui.cardPile.childNodes.length < 8) {
										var discardcards = get.cards(8);
										for (var i = 0; i < discardcards.length; i++) {
											ui.discardPile.appendChild(discardcards[i]);
										}
									}
									for (var i = 0; i < 8; i++) {
										cards.push(ui.cardPile.childNodes[i]);
									}
									event.set('傲世cards', cards);
								}
							},
							chooseButton: {
								dialog(event, player) {
									return ui.create.dialog('傲世:选择一张卡牌使用', event.傲世cards);
								},
								filter(button, player) {
									var evt = _status.event.parent;
									if (evt && evt.filterCard) {
										return get.type(button.link) == 'basic' && evt.filterCard(button.link, player, evt);
									}
									return false;
								},
								check(button) {
									return 1;
								},
								backup(links, player) {
									return {
										filterCard() {
											return false;
										},
										selectCard: -1,
										viewAs: links[0],
									};
								},
								prompt(links, player) {
									return '选择' + get.translation(links) + '的目标';
								},
							},
							ai: {
								order: 11,
								save: true,
								result: {
									player(player) {
										if (player.tempSkills.傲世8) return 0;
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
						},
						黷武: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								target.damage();
								('step 1');
								target.chooseToDiscard(target.hp, 'he', true);
							},
						},
						贞特: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'useCard' },
							filter(event, player) {
								return get.color(event.card) == 'black' && _status.currentPhase == event.player && event.targets && event.targets.length;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('贞特'));
								('step 1');
								if (result.bool) {
									result.targets[0].addTempSkill('贞特1', 'phaseAfter');
									trigger.untrigger();
									trigger.finish();
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						贞特1: {
							mod: {
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
							intro: {
								content: '不能使用或打出牌',
							},
						},
						至微: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'gameDrawAfter',
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return game.players.length > 1;
							},
							content() {
								'step 0';
								player
									.chooseTarget('选择【至微】的目标', lib.translate.至微_info, true, function (card, player, target) {
										return target != player && !target.hasSkill('至微2');
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att > 0) return att + 1;
										if (att == 0) return Math.random();
										return att;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									game.log(target, '成为了', '【至微】', '的目标');
									target.storage.至微2 = player;
									target.addSkill('至微2');
								}
							},
						},
						至微2: {
							audio: 'ext:虎踞江东/audio:2',
							intro: {
								content: '当你受到或造成伤害后,$摸等量的牌,$弃置你等量的牌',
							},
							nopop: true,
							trigger: { player: 'damageEnd', source: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return player.storage.至微2 && player.storage.至微2.isIn() && event.num > 0;
							},
							content() {
								'step 0';
								'step 1';
								var target = player.storage.至微2;
								player.line(target, 'green');
								target.draw(trigger.num);
								target.discardPlayerCard(trigger.num, player, 'he', true);
							},
							group: '至微3',
						},
						至微3: {
							trigger: { global: 'dieAfter' },
							silent: true,
							filter(event, player) {
								return event.player == player.storage.至微2;
							},
							content() {
								player.removeSkill('至微2');
							},
						},
						碎玉: {
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return event.player != player && event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick');
							},
							logTarget: 'player',
							check(event, player) {
								if (get.attitude(player, event.player) > 0) {
									return false;
								}
								if (get.tag(event.card, 'respondSha')) {
									if (player.countCards('h', { name: 'sha' }) == 0) {
										return true;
									}
								} else if (get.tag(event.card, 'respondShan')) {
									if (player.countCards('h', { name: 'shan' }) == 0) {
										return true;
									}
								} else if (get.tag(event.card, 'damage')) {
									if (player.countCards('h') < 2) return true;
								} else if (event.card.name == 'shunshou' && player.hp > 2) {
									return true;
								}
								return false;
							},
							_priority: 10,
							trigger: { target: 'useCardToBefore' },
							content() {
								'step 0';
								trigger.player.loseHp();
								('step 1');
								if (trigger.player.countCards('he')) {
									var x = trigger.player.maxHp;
									player.discardPlayerCard(trigger.player, 'he', true, x);
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						驳言: {
							trigger: { player: ['phaseEnd', 'dyingEnd'] },
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('驳言')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(trigger.player.maxHp);
								}
								('step 2');
								player
									.chooseTarget(get.prompt('驳言'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 3');
								if (result.bool) {
									result.targets[0].addTempSkill('驳言1', { player: 'phaseAfter' });
								}
							},
						},
						驳言1: {
							mark: true,
							mod: {
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
							intro: {
								content: '不能使用或打出牌',
							},
						},
						连翩lp: {
							usable: 5,
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCardToBegin',
							},
							forced: true,
							filter(event, player) {
								if (!event.targets || !event.targets.length) return false;
								return true;
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								event.card = result[0];
								player.chooseTarget('是否将' + get.translation(event.card) + '交给其他角色？', function (card, player, target) {
									return target != player;
								});
								('step 2');
								if (result.bool) {
									player.give(event.card, result.targets[0], true);
									player.draw(2);
								}
							},
						},
						苏飞不臣: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
								global: 'dyingBegin',
							},
							content() {
								'step 0';
								player.chooseTarget('选择一名魏或吴势力角色,你与其势力相同', function (card, player, target) {
									return target.group == 'qun' || (target.group == 'wu' && target != player);
								});
								('step 1');
								if (result.bool) {
									var pl = result.targets[0];
									player.storage.ll = pl;
									pl.markSkill('苏飞不臣');
									if (player.identity != 'zhu') player.identity = pl.identity;
									player.setIdentity(pl.identity);
									player.node.identity.dataset.color = pl.identity;
									if (lib.config.mode == 'guozhan') {
										player.identity = player.storage.ll.identity;
										player.setIdentity();
										player._group = pl.identity;
										player.identityShown = true;
										lib.character[player.name][1] = pl.identity;
									}
								}
							},
							marktext: '臣',
							intro: {
								content: '已对你臣服',
							},
							group: '苏飞不臣2',
						},
						苏飞不臣2: {
							trigger: { player: 'phaseBefore' },
							forced: true,
							popup: false,
							silent: true,
							content() {
								for (var i = 0; i < game.players.length; i++) {
									delete game.players[i].storage.ll;
									game.players[i].unmarkSkill('苏飞不臣');
								}
								player.unmarkSkill('苏飞不臣');
							},
						},
						聪察pj: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('聪察pj')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw();
								}
								('step 2');
								trigger.player.draw(2);
								trigger.player.phaseUse();
								('step 3');
								player.getStat().card = {};
							},
						},
						公清pj: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								if (!event.source) return false;
								if (event.source.getAttackRange() == 3) return false;
								if (event.source.getAttackRange() < 3 && event.num <= 1) return false;
								return true;
							},
							_priority: -9.5,
							content() {
								trigger.num = trigger.source.getAttackRange() < 3 ? 0 : trigger.num + 1;
								trigger.source.damage(trigger.num);
								player.draw(trigger.num);
							},
						},
						安国zz: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filterTarget(card, player, target) {
								return true;
							},
							content() {
								'step 0';
								target.draw(3);
								target.recover();
								event.equip = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								target.equip(event.equip || game.createCard(get.inpilefull('equip').randomGet()), true);
								('step 1');
								player.draw(2);
								player.recover();
								event.equip = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								player.equip(event.equip || game.createCard(get.inpilefull('equip').randomGet()), true);
							},
							ai: {
								threaten: 1.6,
								order: 9,
								result: {
									player(player, target) {
										if (get.attitude(player, target) <= 0) {
											if (target.isMinHandcard() || target.isMinEquip() || target.isMinHp()) return -1;
										}
										var num = 0;
										if (player.isMinHandcard() || target.isMinHandcard()) num++;
										if (player.isMinEquip() || target.isMinEquip()) num++;
										if ((player.isMinHp() && player.isDamaged()) || (target.isMinHp() && target.isDamaged())) num += 2.1;
										return num;
									},
								},
							},
						},
						贪敛: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								player.gain(game.createCard('tao'));
								player.gain(game.createCard('tao'));
								player.gain(game.createCard('tao'));
								player.gain(game.createCard('shunshou'));
								player.gain(game.createCard('shunshou'));
								player.gain(game.createCard('shunshou'));
							},
						},
						轻幔: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseEnd' },
							forced: true,
							content() {
								player.draw(Math.max(1, 5 - trigger.player.countCards('e')));
							},
						},
						锦绘: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseBegin' },
							delay: 0,
							content() {
								'step 0';
								event.card = get.cardPile(function (card) {
									if (get.tag(card, 'damage')) return true;
									return false;
								}, 'cardPile');
								if (!event.card) {
									event.finish();
									return;
								}
								player.showCards([event.card]);
								('step 1');
								player
									.chooseTarget(true, '选择一名角色送出' + get.translation(event.card))
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (_status.event.neg) return -att;
										return att;
									})
									.set('neg', get.value(event.card, player, 'raw') < 0);
								('step 2');
								player.line(result.targets, 'green');
								result.targets[0].gain(event.card, 'gain2');
								('step 3');
								event.card1 = get.cardPile(function (card) {
									if (get.tag(card, 'damage')) return true;
									return false;
								}, 'cardPile');
								if (!event.card1) {
									event.finish();
									return;
								}
								player.showCards([event.card1]);
								('step 4');
								player
									.chooseTarget(true, '选择一名角色送出' + get.translation(event.card1))
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (_status.event.neg) return -att;
										return att;
									})
									.set('neg', get.value(event.card1, player, 'raw') < 0);
								('step 5');
								player.line(result.targets, 'green');
								result.targets[0].gain(event.card1, 'gain2');
								('step 6');
								event.card2 = get.cardPile(function (card) {
									if (get.tag(card, 'damage')) return true;
									return false;
								}, 'cardPile');
								if (!event.card2) {
									event.finish();
									return;
								}
								player.showCards([event.card2]);
								('step 7');
								player
									.chooseTarget(true, '选择一名角色送出' + get.translation(event.card2))
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (_status.event.neg) return -att;
										return att;
									})
									.set('neg', get.value(event.card2, player, 'raw') < 0);
								('step 8');
								player.line(result.targets, 'green');
								result.targets[0].gain(event.card2, 'gain2');
							},
							ai: {
								order: 9,
								result: {
									player: 2,
								},
								threaten: 1.2,
							},
						},
						流离xwdxq: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { target: 'shaBefore' },
							forced: true,
							_priority: 5,
							filter(event, player) {
								if (player.countCards('he') == 0) return false;
								return game.hasPlayer(function (current) {
									return current != player && lib.filter.targetEnabled(event.card, event.player, current);
								});
							},
							content() {
								'step 0';
								player.draw();
								var next = player.chooseCardTarget({
									position: 'he',
									filterCard: lib.filter.cardDiscardable,
									filterTarget(card, player, target) {
										var trigger = _status.event.getTrigger();
										if (target != player) {
											return true;
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
									prompt: get.prompt('流离xwdxq'),
								});
								('step 1');
								if (result.bool) {
									player.discard(result.cards);
									trigger.target = result.targets[0];
									trigger.targets.remove(player);
									trigger.targets.push(result.targets[0]);
								} else {
									event.finish();
								}
								('step 2');
								trigger.untrigger();
								trigger.trigger('useCardToBefore');
								trigger.trigger('shaBefore');
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (target.countCards('he') == 0) return;
										if (card.name != 'sha') return;
										var min = 1;
										var friend = get.attitude(player, target) > 0;
										var vcard = { name: 'shacopy', nature: card.nature, suit: card.suit };
										var players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (player != players[i] && get.attitude(target, players[i]) < 0 && target.canUse(card, players[i])) {
												if (!friend) return 0;
												if (get.effect(players[i], vcard, player, player) > 0) {
													if (!player.canUse(card, players[0])) {
														return [0, 0.1];
													}
													min = 0;
												}
											}
										}
										return min;
									},
								},
							},
						},
						天香xwdxq: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'damageBefore' },
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player.draw();
								player.chooseTarget({
									filterTarget(card, player, target) {
										return player != target;
									},
									ai(target) {
										var att = get.attitude(_status.event.player, target);
										var trigger = _status.event.getTrigger();
										var da = 0;
										if (_status.event.player.hp == 1) {
											da = 10;
										}
										var eff = get.damageEffect(target, trigger.source, target);
										if (att == 0) return 0.1 + da;
										if (eff >= 0 && att > 0) {
											return att + da;
										}
										if (att > 0 && target.hp > 1) {
											if (target.maxHp - target.hp >= 3) return att * 1.1 + da;
											if (target.maxHp - target.hp >= 2) return att * 0.9 + da;
										}
										return -att + da;
									},
									prompt: get.prompt('天香xwdxq'),
									prompt2: lib.translate.天香xwdxq_info,
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player
										.chooseControlList(
											true,
											function (event, player) {
												var target = _status.event.target;
												var att = get.attitude(player, target);
												if (target.hasSkillTag('maihp')) att = -att;
												if (att > 0) {
													return 0;
												} else {
													return 1;
												}
											},
											['令' + get.translation(target) + '受到伤害来源对其造成的1点伤害,令其选择弃置X张牌(X为其已损失体力值且至多为5)', '令' + get.translation(target) + '失去1点体力']
										)
										.set('target', target);
									trigger.cancel();
									event.target = target;
								} else {
									event.finish();
								}
								('step 2');
								if (typeof result.index == 'number') {
									if (result.index) {
										event.target.loseHp().type = '天香xwdxq';
									} else {
										event.target.damage(trigger.source).type = '天香xwdxq';
										event.target.addSkill('天香xwdxq2');
									}
								}
								('step 3');
								player.chooseTarget(get.prompt('天香xwdxq')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 4');
								if (result.bool) {
									result.targets[0].draw(result.targets[0].maxHp - result.targets[0].hp);
								}
							},
							ai: {
								maixie_defend: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return;
										if (get.tag(card, 'damage') && target.countCards('he') > 1) return 0.7;
									},
								},
							},
						},
						天香xwdxq2: {
							trigger: { player: 'damageAfter' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.type == '天香xwdxq';
							},
							content() {
								if (player.isDamaged()) {
									var X = player.maxHp - player.hp;
									player.chooseToDiscard('he', true, X);
								}
								player.removeSkill('天香xwdxq2');
							},
						},
						星舞xwdxq: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseDiscardBegin' },
							forced: true,
							intro: {
								content: 'cards',
							},
							init(player) {
								player.storage.星舞xwdxq = [];
							},
							content() {
								'step 0';
								player.chooseCard(get.prompt('星舞xwdxq')).set('ai', function (card) {
									var player = _status.event.player;
									if (player.storage.星舞xwdxq.length == 2) {
										if (
											!game.hasPlayer(function (current) {
												return current != player && get.damageEffect(current, player, player) > 0 && get.attitude(player, current) < 0;
											})
										)
											return 0;
									}
									return 7 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									if (player.storage.星舞xwdxq.length < 2) {
										player.$give(result.cards, player);
									}
									player.lose(result.cards, ui.special);
									player.storage.星舞xwdxq = player.storage.星舞xwdxq.concat(result.cards);
									player.markSkill('星舞xwdxq');
								} else {
									event.finish();
								}
								('step 2');
								if (player.storage.星舞xwdxq.length == 3) {
									player.$throw(player.storage.星舞xwdxq);
									while (player.storage.星舞xwdxq.length) {
										ui.discardPile.appendChild(player.storage.星舞xwdxq.shift());
									}
									player.unmarkSkill('星舞xwdxq');
									player
										.chooseTarget(function (card, player, target) {
											return target != player;
										}, '对一名其他角色造成3点伤害并弃置其所有牌;若其武将牌正面朝上则将武将牌翻面并失去一点体力')
										.set('ai', function (target) {
											var player = _status.event.player;
											if (get.attitude(player, target) > 0) return -1;
											return get.damageEffect(target, player, player) + target.countCards('e') / 2;
										});
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									var target = result.targets[0];
									target.damage(3);
									if (!target.isTurnedOver()) {
										target.turnOver();
										target.loseHp();
									}
									event.target = target;
									player.line(target, 'green');
								} else {
									event.finish();
								}
								('step 4');
								if (event.target && event.target.isAlive()) {
									var es = event.target.getCards('he');
									if (es.length) {
										event.target.discard(es);
									}
								}
							},
							ai: {
								threaten: 1.7,
							},
						},
						幸宠: {
							nobracket: true,
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var num;
								delete player.storage.幸宠1;
								player
									.chooseControl('一', '二', '三', '四', '五', '六', '七', function () {
										return get.cnNumber(_status.event.goon, true);
									})
									.set('prompt', '声明1到7的数值')
									.set('goon', num);
								('step 1');
								var num;
								switch (result.control) {
									case '一':
										num = 1;
										break;
									case '二':
										num = 2;
										break;
									case '三':
										num = 3;
										break;
									case '四':
										num = 4;
										break;
									case '五':
										num = 5;
										break;
									case '六':
										num = 6;
										break;
									case '七':
										num = 7;
										break;
								}
								player.storage.幸宠1 = num;
								player.draw(num);
								player.addTempSkill('幸宠_at', { player: 'phaseBefore' });
							},
							group: '幸宠_at',
							subSkill: {
								at: {
									onremove(player) {
										delete player.storage.幸宠1;
									},
									audio: 'ext:虎踞江东/audio:2',
									trigger: { player: 'loseAfter' },
									filter(event, player) {
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												if (i.number <= player.storage.幸宠1 && i.original != 'j') return true;
											}
										return false;
									},
									content() {
										player.draw(2);
									},
								},
							},
						},
						尘世: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseUseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('尘世')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].gainMaxHp();
									result.targets[0].addTempSkill('尘世2', { player: 'phaseAfter' });
								}
							},
						},
						尘世2: {
							mod: {
								maxHandcard(player, num) {
									return num + 10;
								},
							},
						},
						落宠: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: ['phaseBegin', 'damageEnd'] },
							forced: true,
							content() {
								'step 0';
								var list = [];
								var choiceList = ['令一名角色回复1点体力', '令一名其他角色失去1点体力', '弃置一名其他角色的至多两张牌', '令一名角色摸两张牌'];
								list.push('cancel2');
								player.chooseControl(list).set('prompt', get.prompt('落宠')).set('choiceList', choiceList);
								('step 1');
								if (result.control != 'cancel2') {
									var index = ['选项一', '选项二', '选项三', '选项四'].indexOf(result.control);
									event.index = index;
									var list = [['选择一名角色,令其回复1点体力'], ['选择一名角色,令其失去1点体力'], ['选择一名角色,弃置其至多两张牌'], ['选择一名角色,令其摸两张牌']][index];
									player.chooseTarget(list[0], true);
								} else event.finish();
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									switch (event.index) {
										case 0:
											target.recover();
											break;
										case 1:
											target.loseHp();
											break;
										case 2:
											player.discardPlayerCard(target, true, 'he', [1, 2]);
											break;
										case 3:
											target.draw(2);
											break;
									}
								}
							},
						},
						哀尘: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'dying' },
							_priority: 10,
							forced: true,
							content() {
								'step 0';
								if (player.hp < 1) {
									player.recover(1 - player.hp);
								}
								('step 1');
								player.init('sunhao翠琉金阙', 'sunhaoqqwz溺酒残戮');
							},
						},
						妙灵hh: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							// filter:function (event,player){
							// var list=['sha','wuzhong'];
							// for(var i=0;i<list.length;i++){
							// if(event.filterCard && event.filterCard({name:list[i]},player)) return true;
							// }
							// return false;
							// },
							chooseButton: {
								dialog() {
									var list = [];
									list.push(['基本', '', 'sha']);
									list.push(['基本', '', 'sha', 'fire']);
									list.push(['基本', '', 'sha', 'thunder']);
									list.push(['锦囊', '', 'wuzhong']);
									return ui.create.dialog('妙灵', [list, 'vcard']);
								},
								backup(links, player) {
									return {
										filterCard: false,
										selectCard: 0,
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
											'step 0';
											player
												.chooseTarget(get.prompt('妙灵hh'), function (card, player, target) {
													return true;
												})
												.set('ai', function (target) {
													return get.attitude(player, target);
												});
											('step 1');
											if (result.bool) {
												result.targets[0].useCard({ name: 'wuzhong' }, result.targets[0]);
											}
										},
									};
								},
								prompt(links, player) {
									return '视为使用' + get.translation(links[0][2]);
								},
							},
						},
						莲华: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { target: 'shaBegin' },
							check(event, player) {
								return get.effect(player, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return event.player != player;
							},
							logTarget: 'player',
							content() {
								'step 0';
								player.draw();
								player.judge(function (card) {
									if (card.suit == 'spade') return -0.5;
									return 2;
								});
								('step 1');
								if (result.bool) {
									trigger.cancel();
									player.discardPlayerCard(trigger.player, 'he', true);
								}
							},
						},
						冲虚: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:虎踞江东/audio:2',
							content() {
								'step 0';
								player.chooseControl('选择发动妙灵中视为效果', '无视条件选择发动莲华效果');
								('step 1');
								if (result.control == '选择发动妙灵中视为效果') {
									player.chooseControl('视为使用杀', '视为使用雷杀', '视为使用火杀', '视为使用无中生有');
									event.goto(2);
								} else {
									event.goto(5);
								}
								('step 2');
								event.control = result.control;
								('step 3');
								player.chooseTarget(get.prompt('冲虚')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 4');
								if (result.bool) {
									if (event.control == '视为使用杀') {
										player.useCard({ name: 'sha' }, result.targets[0], false);
									}
									if (event.control == '视为使用雷杀') {
										player.useCard({ name: 'sha', nature: 'thunder' }, result.targets[0], false);
									}
									if (event.control == '视为使用火杀') {
										player.useCard({ name: 'sha', nature: 'fire' }, result.targets[0], false);
									}
									if (event.control == '视为使用无中生有') {
										result.targets[0].useCard({ name: 'wuzhong' }, result.targets[0]);
									}
									event.finish();
								}
								('step 5');
								player.draw();
								player.judge(function (card) {
									if (card.suit == 'spade') return -0.5;
									return 2;
								});
								('step 6');
								if (result.bool) {
									player.discardPlayerCard(trigger.player, 'he', true);
								}
							},
						},
						澜疆: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.draw(list.length);
								}
								var list1 = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list1.sort(lib.sort.seat);
								for (var i = 0; i < list1.length; i++) {
									list1[i].damage();
								}
								player
									.chooseTarget(get.prompt('澜疆'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].draw();
								}
							},
						},
						勤政qz: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: ['useCardBegin', 'respondBegin'] },
							forced: true,
							content() {
								'step 0';
								player.chooseControl('随机一张【杀】或【闪】', '随机一张【桃】或【酒】', '随机一张【无中】或【决斗】');
								('step 1');
								if (result.control == '随机一张【杀】或【闪】') {
									var listcard = ['sha', 'shan'];
									player.gain(game.createCard(listcard.randomGet()));
									player.$draw();
								}
								if (result.control == '随机一张【桃】或【酒】') {
									var listcard = ['tao', 'jiu'];
									player.gain(game.createCard(listcard.randomGet()));
									player.$draw();
								}
								if (result.control == '随机一张【无中】或【决斗】') {
									var listcard = ['wuzhong', 'juedou'];
									player.gain(game.createCard(listcard.randomGet()));
									player.$draw();
								}
							},
							ai: {
								threaten: 0.7,
							},
						},
						陈见: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.draw();
								player.chooseCard(get.prompt('陈见'), 'he', function (card) {
									return true;
								});
								('step 1');
								if (result.bool) {
									player.showCards(result.cards);
									event.cards = get.cards(5);
									player.showCards(event.cards);
									event.card0 = result.cards[0];
								} else {
									event.finish();
								}
								('step 2');
								var gained = [];
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.color(i) == get.color(event.card0)) {
											gained.push(i);
										}
									}
								player.gain(gained, 'gain2');
								('step 3');
								player.chooseTarget(get.prompt('陈见')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 4');
								if (result.bool) {
									result.targets[0].chooseToUse();
								}
								('step 5');
								player.chooseToDiscard('he', true, [1, player.countCards('he')]);
								('step 6');
								player.draw(result.cards.length);
							},
							ai: {
								threaten: 1.5,
							},
						},
						皙秀: {
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return event.player != player && event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick');
							},
							logTarget: 'player',
							trigger: { target: 'useCardToBegin' },
							content() {
								'step 0';
								player.chooseCard(get.prompt('皙秀'), 'he', function (card) {
									return true;
								});
								('step 1');
								if (result.bool) {
									player.showCards(result.cards[0]);
									event.color = get.color(result.cards[0]);
								} else {
									event.finish();
								}
								('step 2');
								if (get.color(trigger.card) == event.color) {
									player.draw();
								}
							},
							group: '皙秀1',
						},
						皙秀1: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'loseAfter' },
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'equip' && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								for (var i = 0; i < trigger.cards.length; i++) {
									if (get.type(trigger.cards[i]) == 'equip' && trigger.cards[i].original != 'j') player.useCard(game.createCard(trigger.cards[i].name), player);
								}
							},
						},
						清靓: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { target: 'useCardToBegin' },
							filter(event, player) {
								return event.player != player;
							},
							check(event, player) {
								return true;
							},
							usable: 1,
							logTarget: 'player',
							content() {
								'step 0';
								player.line(trigger.player, 'green');
								player.draw();
								player.chooseControl('其弃置红色牌', '其弃置黑色牌', true);
								('step 1');
								if (result.control == '其弃置红色牌') {
									trigger.player.discard(trigger.player.getCards('he', { color: 'red' }));
								}
								if (result.control == '其弃置黑色牌') {
									trigger.player.discard(trigger.player.getCards('he', { color: 'black' }));
								}
								trigger.untrigger();
								trigger.finish();
							},
						},
						巧芮: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 5,
							content() {
								'step 0';
								player.chooseToDiscard('he', true);
								('step 1');
								var type = get.type(result.cards[0]);
								if (type == 'equip') {
									event.cards = get.cards(5);
								} else {
									event.goto(5);
								}
								('step 2');
								if (event.cards.length > 1) {
									player.chooseCardButton('将<巧芮>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
										if (ui.selected.buttons.length == 0) return 1;
										return 0;
									});
								} else if (event.cards.length == 1) {
									event._result = { links: event.cards.slice(0), bool: true };
								} else {
									event.goto(5);
								}
								('step 3');
								if (result.bool) {
									for (var i = 0; i < result.links.length; i++) {
										event.cards.remove(result.links[i]);
									}
									event.togive = result.links.slice(0);
									player
										.chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
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
										.set('enemy', get.value(event.togive[0]) < 0);
								}
								('step 4');
								if (result.targets.length) {
									result.targets[0].gain(event.togive, 'draw');
									player.line(result.targets[0], 'green');
									game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
									event.goto(2);
								}
								('step 5');
								player
									.chooseTarget(get.prompt('巧芮'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 6');
								if (result.bool) {
									player.addTempSkill('巧芮2', 'juedouAfter');
									player.useCard({ name: 'juedou' }, result.targets[0], false);
								}
							},
							group: '巧芮3',
						},
						巧芮2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'juedouBegin' },
							forced: true,
							content() {
								trigger.directHit = true;
							},
						},
						巧芮3: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								'step 0';
								var card = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								event.card = card;
								('step 1');
								if (event.card) {
									player.gain(game.createCard(event.card), 'gain2');
								}
							},
						},
						s碎y玉: {
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return event.player != player && event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick');
							},
							logTarget: 'player',
							check(event, player) {
								if (get.attitude(player, event.player) > 0) {
									return false;
								}
								if (get.tag(event.card, 'respondSha')) {
									if (player.countCards('h', { name: 'sha' }) == 0) {
										return true;
									}
								} else if (get.tag(event.card, 'respondShan')) {
									if (player.countCards('h', { name: 'shan' }) == 0) {
										return true;
									}
								} else if (get.tag(event.card, 'damage')) {
									if (player.countCards('h') < 2) return true;
								} else if (event.card.name == 'shunshou' && player.hp > 2) {
									return true;
								}
								return false;
							},
							_priority: 10,
							trigger: { target: 'useCardToBefore' },
							content() {
								'step 0';
								trigger.player.loseHp(2);
								('step 1');
								if (trigger.player.countCards('he')) {
									var x = trigger.player.maxHp;
									player.discardPlayerCard(trigger.player, 'he', true, x);
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						b驳y言: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: ['phaseEnd', 'dyingEnd'] },
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('b驳y言')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(result.targets[0].maxHp);
								}
								('step 2');
								player
									.chooseTarget(get.prompt('b驳y言'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 3');
								if (result.bool) {
									result.targets[0].addTempSkill('b驳y言1', { player: 'phaseAfter' });
									result.targets[0].loseHp();
								}
							},
						},
						b驳y言1: {
							mark: true,
							mod: {
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
							intro: {
								content: '不能使用或打出牌',
							},
						},
						同礼: {
							audio: 'ext:虎踞江东/audio:2',
							usable: 1, //QQQ
							trigger: { player: 'useCardBegin' },
							filter(event, player) {
								if (event.parent.name == '同礼') return false;
								if (!event.targets || !event.card) return false;
								var type = get.type(event.card);
								if (type != 'basic' && type != 'trick') return false;
								var card = game.createCard(event.card.name, event.card.suit, event.card.number);
								for (var i = 0; i < event.targets.length; i++) {
									if (!event.targets[i].isAlive()) return false;
									if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
										return false;
									}
								}
								return true;
							},
							content() {
								player.showHandcards();
								var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
								var x = player.countCards('he', { color: 'red' });
								for (var i = 0; i < x; i++) {
									player.useCard(card, trigger.targets);
								}
							},
							ai: {
								threaten: 2,
							},
						},
						奢葬: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'dyingBegin' },
							content() {
								'step 0';
								var card = get.cardPile(function (card) {
									return true;
								});
								event.card = card;
								('step 1');
								if (event.card) {
									player.gain(game.createCard({ name: event.card.name, suit: 'club' }));
									player.gain(game.createCard({ name: event.card.name, suit: 'spade' }));
									player.gain(game.createCard({ name: event.card.name, suit: 'heart' }));
									player.gain(game.createCard({ name: event.card.name, suit: 'diamond' }));
								}
							},
						},
						怨咽: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							notemp: true,
							init(player) {
								player.storage.怨咽 = [];
							},
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								if (player.countCards('he')) {
									player.chooseCard('he', '将1张牌置于武将牌上作为<怨咽>', true);
								} else {
									event.finish();
								}
								('step 2');
								if (result.cards && result.cards.length) {
									player.lose(result.cards, ui.special);
									player.storage.怨咽 = player.storage.怨咽.concat(result.cards);
									player.markSkill('怨咽');
									game.log(player, '将', result.cards, '置于武将牌上作为<怨咽>');
									if (player.storage.怨咽.length > 3) {
										event.num = player.storage.怨咽.length;
										player.chooseCardButton(player.storage.怨咽, '选择' + event.num + '张牌作为手牌', event.num, true);
									} else event.finish();
								} else event.finish();
								('step 3');
								player.gain(result.links)._triggered = null;
								for (var i = 0; i < result.links.length; i++) {
									player.storage.怨咽.remove(result.links[i]);
								}
								if (player == game.me && _status.auto) {
								}
							},
							intro: {
								content: 'cards',
							},
							group: '怨咽2',
						},
						怨咽2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.source && event.source.isEnemiesOf(player);
							},
							content() {
								'step 0';
								player.gainPlayerCard(trigger.source, 'he', true);
								('step 1');
								if (player.countCards('he')) {
									player.chooseCard('he', '将1张牌置于武将牌上作为<怨咽>', true);
								} else {
									event.finish();
								}
								('step 2');
								if (result.cards && result.cards.length) {
									player.lose(result.cards, ui.special);
									player.storage.怨咽 = player.storage.怨咽.concat(result.cards);
									player.markSkill('怨咽');
									game.log(player, '将', result.cards, '置于武将牌上作为<怨咽>');
									if (player.storage.怨咽.length > 3) {
										event.num = player.storage.怨咽.length;
										player.chooseCardButton(player.storage.怨咽, '选择' + event.num + '张牌作为手牌', event.num, true);
									} else event.finish();
								} else event.finish();
								('step 3');
								player.gain(result.links)._triggered = null;
								for (var i = 0; i < result.links.length; i++) {
									player.storage.怨咽.remove(result.links[i]);
								}
								if (player == game.me && _status.auto) {
								}
							},
						},
						夕颜: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(function (card, player, target) {
										return true;
									})
									.set('prompt', '夕颜<br><br><div class="text" style="color: green">令一名角色手牌上限+4,使用牌无次数限制直到其回合结束后</div>')
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].addTempSkill('夕颜2', { player: 'phaseAfter' });
								}
							},
							group: '夕颜4',
						},
						夕颜4: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(function (card, player, target) {
										return true;
									})
									.set('prompt', '夕颜<br><br><div class="text" style="color: green">令一名角色手牌上限-4,且不能使用牌直到其回合结束后</div>')
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].addTempSkill('夕颜3', { player: 'phaseAfter' });
								}
							},
						},
						夕颜2: {
							mod: {
								cardUsable(card, player, num) {
									return Infinity;
								},
								maxHandcard(player, num) {
									return num + 4;
								},
							},
						},
						夕颜3: {
							mod: {
								maxHandcard(player, num) {
									return num - 4;
								},
								cardEnabled(card, player) {
									return false;
								},
								cardUsable(card, player) {
									return false;
								},
								cardSavable(card, player) {
									return false;
								},
							},
						},
						善逸: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							mark: true,
							intro: {
								content(storage) {
									return '可叠加数值:' + storage;
								},
							},
							init(player) {
								if (!player.storage.善逸) player.storage.善逸 = 4;
							},
							content() {
								'step 0';
								event.num = 4;
								('step 1');
								var list = [];
								var choiceList = ['分配增加摸牌阶段摸牌数', '分配增加攻击范围', '分配增加杀的限制次数', '分配增加手牌上限'];
								list.push('cancel2');
								player.chooseControl(list).set('prompt', get.prompt('善逸')).set('choiceList', choiceList);
								('step 2');
								if (result.control != 'cancel2') {
									var index = ['选项一', '选项二', '选项三', '选项四'].indexOf(result.control);
									event.index = index;
									var list = [['增加摸牌阶段摸牌数'], ['增加攻击范围'], ['增加杀的限制次数'], ['增加手牌上限']][index];
								} else event.finish();
								('step 3');
								if (event.index == 0) {
									player.addSkill('善逸1');
									if (typeof player.storage.善逸1 == 'number') {
										player.storage.善逸1 += player.storage.善逸;
									} else {
										player.storage.善逸1 = player.storage.善逸;
									}
									player.markSkill('善逸1');
								}
								if (event.index == 1) {
									player.addSkill('善逸2');
									if (typeof player.storage.善逸2 == 'number') {
										player.storage.善逸2 += player.storage.善逸;
									} else {
										player.storage.善逸2 = player.storage.善逸;
									}
									player.markSkill('善逸2');
								}
								if (event.index == 2) {
									player.addSkill('善逸3');
									if (typeof player.storage.善逸3 == 'number') {
										player.storage.善逸3 += player.storage.善逸;
									} else {
										player.storage.善逸3 = player.storage.善逸;
									}
									player.markSkill('善逸3');
								}
								if (event.index == 3) {
									player.addSkill('善逸4');
									if (typeof player.storage.善逸4 == 'number') {
										player.storage.善逸4 += player.storage.善逸;
									} else {
										player.storage.善逸4 = player.storage.善逸;
									}
									player.markSkill('善逸4');
								}
								('step 4');
								if (--event.num > 0) {
									player.chooseBool('是否再次分配【善逸】？');
								} else {
									event.finish();
								}
								('step 5');
								if (result.bool) {
									event.goto(1);
								}
							},
							group: ['善逸_add', '善逸5'],
							subSkill: {
								add: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: { player: 'damageEnd' },
									forced: true,
									content() {
										player.storage.善逸++;
										player.markSkill('善逸1');
									},
								},
							},
						},
						善逸5: {
							silent: true,
							forced: true,
							popup: false,
							trigger: { player: 'phaseAfter' },
							content() {
								player.removeSkill('善逸1');
								player.removeSkill('善逸2');
								player.removeSkill('善逸3');
								player.removeSkill('善逸4');
								player.storage.善逸1 = 0;
								player.markSkill('善逸1');
								player.storage.善逸2 = 0;
								player.markSkill('善逸2');
								player.storage.善逸3 = 0;
								player.markSkill('善逸3');
								player.storage.善逸4 = 0;
								player.markSkill('善逸4');
							},
						},
						善逸1: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							mark: true,
							init(player) {
								if (!player.storage.善逸1) player.storage.善逸1 = 0;
							},
							content() {
								if (typeof player.storage.善逸1 == 'number') trigger.num += player.storage.善逸1;
							},
							ai: {
								threaten: 1.5,
							},
						},
						善逸2: {
							mark: true,
							init(player) {
								if (!player.storage.善逸2) player.storage.善逸2 = 0;
							},
							mod: {
								attackFrom(from, to, distance) {
									if (typeof from.storage.善逸2 == 'number') return distance - from.storage.善逸2;
								},
							},
						},
						善逸3: {
							mark: true,
							init(player) {
								if (!player.storage.善逸3) player.storage.善逸3 = 0;
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha' && typeof player.storage.善逸3 == 'number') return num + player.storage.善逸3;
								},
							},
						},
						善逸4: {
							mark: true,
							init(player) {
								if (!player.storage.善逸4) player.storage.善逸4 = 0;
							},
							mod: {
								maxHandcard(player, num) {
									if (typeof player.storage.善逸4 == 'number') return num + player.storage.善逸4;
								},
							},
						},
						彰名: {
							usable: 1,
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (!['basic', 'trick'].includes(get.type(event.card))) return false;
								if (get.tag(event.card, 'damage')) return true;
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('彰名'), function (card, player, target) {
										return trigger.targets.includes(target);
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									var cards = result.targets[0].getCards('h');
									result.targets[0].showCards(cards);
									var list = [];
									for (var i = 0; i < cards.length; i++) {
										if (!list.includes(get.type(cards[i]))) list.push(get.type(cards[i]));
									}
									player.draw(2 * list.length);
								}
							},
							ai: {
								threaten: 1.4,
							},
						},
						除害: {
							audio: 3,
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.draw();
								player
									.chooseTarget(get.prompt('除害'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true);
									// var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman','lebu','bingliang'];
									// if(get.mode()=='guozhan'){
									// list=list.concat(['xietianzi','shuiyanqijunx','lulitongxin','lianjunshengyan','chiling','diaohulishan','yuanjiao','huoshaolianying']);
									// var list0=['sha','shan','tao','jiu'];
									var card0 = get.cardPile(function (card) {
										return get.type(card) == 'basic';
									});
									var card1 = get.cardPile(function (card) {
										return get.type(card, 'trick') == 'trick';
									});
									var card2 = get.cardPile(function (card) {
										return get.type(card) == 'equip';
									});
									var card3;
									var card4;
									var card5;
									for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
										var current = ui.discardPile.childNodes[i];
										if (get.type(current) != 'basic') continue;
										else {
											card3 = current;
											break;
										}
									}
									for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
										var current = ui.discardPile.childNodes[i];
										if (get.type(current, 'trick') != 'trick') continue;
										else {
											card4 = current;
											break;
										}
									}
									for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
										var current = ui.discardPile.childNodes[i];
										if (get.type(current) != 'equip') continue;
										else {
											card5 = current;
											break;
										}
									}
									event.card0 = card0;
									event.card1 = card1;
									event.card2 = card2;
									event.card3 = card3;
									event.card4 = card4;
									event.card5 = card5;
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									if (event.card0) player.gain(game.createCard(event.card0), 'gain2');
									else player.gain(game.createCard(event.card3), 'gain2');
									if (event.card1) player.gain(game.createCard(event.card1), 'gain2');
									else player.gain(game.createCard(event.card4), 'gain2');
									if (event.card2) player.gain(game.createCard(event.card2), 'gain2');
									else player.gain(game.createCard(event.card5), 'gain2');
								}
							},
						},
						合击: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: ['shaBegin', 'juedouBegin'] },
							usable: 1,
							content() {
								'step 0';
								var card0 = get.cardPile(function (card) {
									return get.color(card) == 'red';
								});
								var card1;
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									var current = ui.discardPile.childNodes[i];
									if (get.color(current) != 'red') continue;
									else {
										card1 = current;
										break;
									}
								}
								event.card0 = card0;
								event.card1 = card1;
								('step 1');
								if (event.card0) player.gain(game.createCard(event.card0), 'gain2');
								else player.gain(game.createCard(event.card1), 'gain2');
								('step 2');
								player.chooseControl('视为对其使用杀', '视为对其使用决斗');
								('step 3');
								if (result.control == '视为对其使用杀') {
									player.useCard({ name: 'sha' }, trigger.targets, false);
								} else {
									player.useCard({ name: 'juedou' }, trigger.targets);
								}
							},
						},
						怀h橘j: {
							marktext: '橘',
							init(player) {
								player.storage.怀h橘j = 0;
							},
							intro: {
								content(storage) {
									return '当前有' + storage + '个<橘>';
								},
							},
							mark: true,
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].storage.怀h橘j += 6;
										game.log(list[i], '获得了6个<橘>');
									}
								}
							},
						},
						_怀h橘j: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return player.storage.怀h橘j > 0;
							},
							content() {
								trigger.cancel();
								player.storage.怀h橘j--;
								if (player.storage.怀h橘j <= 0) player.unmarkSkill('怀h橘j');
								game.log(player, '移去了1个<橘>');
							},
						},
						_怀h橘j1: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							filter(event, player) {
								return player.storage.怀h橘j > 0;
							},
							content() {
								trigger.num += 2;
							},
						},
						遗y礼l: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('遗y礼l'), function (card, player, target) {
									return target != player;
								}).ai = function (target) {
									if (player.storage.怀h橘j > 1) return get.attitude(player, target);
									return -1;
								};
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									var list = ['回复一点体力'];
									if (player.storage.怀h橘j > 0) list.push('移去一个<橘>');
									player.chooseControl(list).set('ai', function () {
										if (player.storage.怀h橘j > 0) return '移去一个<橘>';
										return '回复一点体力';
									});
								} else {
									event.finish();
								}
								('step 2');
								if (result.control == '移去一个<橘>') {
									player.storage.怀h橘j--;
									if (player.storage.怀h橘j <= 0) player.unmarkSkill('怀h橘j');
									game.log(player, '移去了1个<橘>');
								} else {
									player.recover();
								}
								player.line(event.target);
								if (event.target.storage.怀h橘j == undefined) event.target.storage.怀h橘j = 0;
								event.target.markSkill('怀h橘j');
								event.target.storage.怀h橘j++;
								game.log(event.target, '获得了1个<橘>');
							},
						},
						整z论l: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseJudgeBefore',
							},
							check(event, player) {
								return player.countCards('h') >= 2 || player.skipList.includes('phaseUse');
							},
							content() {
								trigger.cancel();
								if (player.storage.怀h橘j == undefined) player.storage.怀h橘j = 0;
								player.markSkill('怀h橘j');
								player.storage.怀h橘j += 2;
								game.log(player, '获得了2个<橘>');
							},
						},
						弼政: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseDrawEnd' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('弼政')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(2);
								}
								('step 2');
								player.chooseTarget(get.prompt('弼政')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, 2);
								}
							},
							ai: {
								threaten: 1.3,
							},
						},
						佚典: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCardBegin' },
							filter(event, player) {
								return get.type(event.card) == 'basic';
							},
							content() {
								player.gain(game.createCard('wuzhong'));
								player.gain(game.createCard('guohe'));
								player.gain(game.createCard('wuxie'));
								player.$draw(3);
							},
						},
						遗珠: {
							audio: 'ext:虎踞江东/audio:2',
							usable: 1,
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return get.type(event.card) == 'basic' || get.type(event.card) == 'trick';
							},
							check: (event, player) => event.player.isEnemiesOf(player), //QQQ
							content() {
								'step 0';
								trigger.cancel();
								player.chooseTarget(get.prompt('遗珠')).ai = function (target) {
									if (trigger.card.name == 'wuzhong') return get.attitude(player, target);
									return -get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									player.useCard(game.createCard(trigger.card), result.targets[0]);
									player.draw(2);
								} else {
									event.finish();
								}
							},
						},
						鸾梼: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget: true,
							selectTarget() {
								var pl = _status.event.player;
								return [2, pl.maxHp - pl.hp + 2];
							},
							content() {
								'step 0';
								target.draw(2);
								target.chooseToDiscard(1, 'he', true);
								('step 1');
								if (get.tag(result.cards[0], 'damage')) target.recover();
							},
							ai: {
								order: 13,
								result: {
									target: 1,
								},
							},
						},
						共患: {
							audio: 'ext:虎踞江东/audio:2',
							usable: 1,
							trigger: { global: 'damageBegin' },
							content() {
								'step 0';
								trigger.cancel();
								player
									.chooseTarget(get.prompt('共患'), function (card, player, target) {
										return target.isEnemiesOf(player);
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].damage(trigger.num);
									result.targets[0].chooseToDiscard('he', true, trigger.num);
								}
							},
						},
						太音: {
							audio: 'ext:虎踞江东/audio:2',
							usable: 1,
							trigger: { player: ['damageBegin', 'phaseJudgeBegin'] },
							content() {
								trigger.cancel();
								var list1 = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list1.sort(lib.sort.seat);
								for (var i = 0; i < list1.length; i++) {
									list1[i].loseHp();
									list1[i].chooseToDiscard(
										'he',
										function (card) {
											return card.suit == 'club';
										},
										true
									);
									list1[i].chooseToDiscard(
										'he',
										function (card) {
											return card.suit == 'spade';
										},
										true
									);
									list1[i].chooseToDiscard(
										'he',
										function (card) {
											return card.suit == 'diamond';
										},
										true
									);
									list1[i].chooseToDiscard(
										'he',
										function (card) {
											return card.suit == 'heart';
										},
										true
									);
								}
							},
						},
						安政: {
							audio: 'ext:虎踞江东/audio:2',
							gainable: true,
							trigger: {
								global: 'discardAfter',
							},
							forced: true,
							content() {
								'step 0';
								player.choosePlayerCard(trigger.player, 'he', get.prompt('安政', trigger.player)).set('ai', function (button) {
									if (get.attitude(_status.event.player, _status.event.target) >= 0) return 0;
									return get.value(button.link);
								}); //QQQ
								('step 1');
								if (result.bool) {
									var card = result.cards[0];
									trigger.player.$throw(card);
									if (get.type(card, false) == 'delay') trigger.player.addJudge(card);
									else trigger.player.addJudge({ name: get.color(card, false) == 'red' ? 'lebu' : 'bingliang' }, result.cards);
								}
								player.draw(trigger.cards.length);
							},
							mod: {
								maxHandcard(player, num) {
									return num + 1;
								},
							},
							ai: {
								threaten: 1.4,
								expose: 0.2,
							},
						},
						说谏: {
							enable: 'phaseUse',
							filter(event, player) {
								return player.num('h', { type: 'equip' }) > 0;
							},
							filterCard(card) {
								return get.type(card) == 'equip';
							},
							filterTarget(card, player, target) {
								if (target.isMin()) return false;
								return player != target;
							},
							content() {
								'step 0';
								target.addTempSkill('说谏1');
								target.equip(cards[0]);
								player
									.chooseTarget(get.prompt('说谏'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.discardPlayerCard(1, target, 'he', true);
								}
							},
							ai: {
								basic: {
									order: 10,
								},
								result: {
									target: 3,
								},
								threaten: 1.3,
							},
						},
						说谏1: {
							trigger: {
								player: 'equipBegin',
							},
							forced: true,
							filter(event, player) {
								return player.num('e', { type: 'equip' }) && get.type(event.card) == 'equip';
							},
							async content(event, trigger, player) {
								trigger.cancel();
								const card = trigger.cards[0];
								if (card) {
									const vcard = new lib.element.VCard(card);
									const cardSymbol = Symbol('card');
									card.cardSymbol = cardSymbol;
									card[cardSymbol] = vcard;
									player.vcardsMap?.equips.push(vcard);
									player.node.equips.appendChild(card);
									card.style.transform = '';
									card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
								}
								const info = get.info(card, false);
								if (info.skills) {
									for (const i of info.skills) {
										player.addSkillTrigger(i);
									}
								}
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (get.type(card) == 'equip') return [1, 10];
									},
								},
							},
						},
						稳政: {
							audio: 'ext:虎踞江东/audio:2',
							gainable: true,
							trigger: {
								global: 'discardAfter',
							},
							forced: true,
							content() {
								'step 0';
								player.choosePlayerCard(trigger.player, 'he', get.prompt('稳政', trigger.player)).set('ai', function (button) {
									if (get.attitude(_status.event.player, _status.event.target) >= 0) return 0;
									return get.value(button.link);
								});
								('step 1');
								if (result.bool) {
									var card = result.cards[0];
									trigger.player.$throw(card);
									if (get.type(card, false) == 'delay') trigger.player.addJudge(card);
									else trigger.player.addJudge({ name: get.color(card, false) == 'red' ? 'lebu' : 'bingliang' }, result.cards);
								}
								var arr = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									arr.push(trigger.cards[i].number);
								}
								player.draw(Math.max(...arr));
							},
							mod: {
								maxHandcard(player, num) {
									return num + 1;
								},
							},
							ai: {
								threaten: 1.4,
								expose: 0.2,
							},
						},
						固谏: {
							trigger: {
								global: 'phaseUseBegin',
							},
							content() {
								'step 0';
								event.target = trigger.player;
								event.target.showHandcards();
								('step 1');
								var num = event.target.num('h', function (card) {
									return get.type(card) == 'equip';
								});
								var cards = event.targe.getCards('h', function (card) {
									return get.type(card) == 'equip';
								});
								if (num > 0) {
									for (var i = 0; i < cards.length; i++) {
										event.target.equip(cards[i]);
									}
									player.draw(num);
								}
							},
							ai: {
								basic: {
									order: 10,
								},
								result: {
									target: 3,
								},
								threaten: 1.3,
							},
						},
						苦肉勇力精锐: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('苦肉勇力精锐')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(1, result.targets[0], 'he', true);
								}
								('step 2');
								player.chooseTarget(get.prompt('苦肉勇力精锐')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].loseHp(2);
								}
							},
							ai: {
								order: 8,
								result: {
									player(player) {
										if (player.hp <= 2) return player.countCards('h') == 0 ? 1 : 0;
										if (player.countCards('h', { name: 'sha', color: 'red' })) return 1;
										return player.countCards('h') <= player.hp ? 1 : 0;
									},
								},
								effect(card, player, target) {
									if (get.tag(card, 'damage')) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, 1];
										return 1.2;
									}
									if (get.tag(card, 'loseHp')) {
										if (player.hp <= 1) return;
										return [0, 0];
									}
								},
							},
						},
						诈降勇力精锐: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'loseHpEnd' },
							group: '诈降勇力精锐3',
							forced: true,
							content() {
								player.draw(3 * trigger.num);
								if (_status.currentPhase == player) {
									player.addTempSkill('诈降勇力精锐2', { player: 'phaseAfter' });
								} else {
									game.trySkillAudio('诈降勇力精锐', player);
								}
							},
							ai: {
								maihp: true,
							},
						},
						诈降勇力精锐2: {
							audio: 'ext:虎踞江东/audio:2',
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + Infinity;
								},
							},
							trigger: { player: 'shaBegin' },
							forced: true,
							filter(event, player) {
								return event.card;
							},
							content() {
								trigger.directHit = true;
							},
						},
						诈降勇力精锐3: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { source: 'damageBegin' },
							forced: true,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								trigger.num++;
							},
						},
						不屈mzt: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: ['loseHpBegin', 'damageBegin', 'loseMaxHpBegin'],
							},
							forced: true,
							content() {
								'step 0';
								trigger.cancel();
								('step 1');
								player
									.chooseTarget(get.prompt('不屈mzt'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									result.targets[0][trigger.name](trigger.num, 'nosource');
								}
								('step 3');
								event.card = get.cards()[0];
								if (player.storage.不屈mzt == undefined) player.storage.不屈mzt = [];
								player.storage.不屈mzt.push(event.card);
								player.showCards(player.storage.不屈mzt, '不屈');
								player.markSkill('不屈mzt');
								('step 4');
								for (var i = 0; i < player.storage.不屈mzt.length - 1; i++) {
									if (event.card.number && event.card.number == player.storage.不屈mzt[i].number) return;
									else event.finish();
								}
								if (player.storage.不屈mzt.length == 1) event.finish();
								('step 5');
								player
									.chooseTarget(get.prompt('不屈mzt'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 6');
								if (result.bool) {
									result.targets[0].die();
								}
							},
							mod: {
								maxHandcard(player, num) {
									if (player.storage.不屈mzt && player.storage.不屈mzt.length) return num + 13 + player.storage.不屈mzt.length;
								},
							},
							intro: {
								content: 'cards',
								onunmark(storage, player) {
									if (storage && storage.length) {
										player.$throw(storage);
										for (var i = 0; i < storage.length; i++) {
											storage[i].discard();
										}
										delete player.storage.不屈mzt;
									}
								},
							},
						},
						奋激mzt: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'loseAfter' },
							filter(event, player) {
								if (_status.currentPhase != event.player) {
									if (Array.isArray(event.cards))
										for (var i of event.cards) {
											if (i.original == 'h') return true;
										}
								}
								return false;
							},
							check(event, player) {
								return get.attitude(player, event.player) > 2;
							},
							content() {
								'step 0';
								player.line(trigger.player, 'green');
								player.loseHp();
								('step 1');
								trigger.player.draw(2 * trigger.cards.length);
							},
						},
						谦逊烈火炽天: {
							init(player) {
								player.storage.谦逊烈火炽天2 = [];
							},
							audio: 'ext:虎踞江东/audio:2',
							trigger: { target: 'useCardToBegin', player: 'judgeBefore' },
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								if (event.parent.name == 'phaseJudge') {
									if (lib.skill.谦逊烈火炽天.trigger.player == 'judgeBefore') {
										return true;
									}
									return event.result && event.result.judge != 0;
								}
								if (event.name == 'judge') return false;
								if (event.targets && event.targets.length > 1) return false;
								if (event.card && get.type(event.card) == 'trick') return true;
							},
							content() {
								player.storage.谦逊烈火炽天2 = player.storage.谦逊烈火炽天2.concat(player.getCards('h'));
								game.addVideo('storage', player, ['谦逊烈火炽天2', get.cardsInfo(player.storage.谦逊烈火炽天2), 'cards']);
								player.lose(player.getCards('h'), ui.special);
								player.addSkill('谦逊烈火炽天2');
							},
							ai: {
								effect(card, player, target) {
									if (!target.hasFriend()) return;
									if (player == target) return;
									var type = get.type(card);
									var nh = target.countCards();
									if (type == 'trick') {
										if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
											if (get.tag(card, 'damage')) {
												if (nh < 3 || target.hp <= 2) return 0.8;
											}
											return [1, nh];
										}
									} else if (type == 'delay') {
										return [0.5, 0.5];
									}
								},
							},
						},
						谦逊烈火炽天2: {
							trigger: { global: 'phaseAfter' },
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('谦逊烈火炽天'), [1, player.storage.谦逊烈火炽天2.length]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].damage();
									}
								}
								player.gain(player.storage.谦逊烈火炽天2);
								player.removeSkill('谦逊烈火炽天2');
								player.storage.谦逊烈火炽天2 = [];
								game.addVideo('storage', player, ['谦逊烈火炽天2', get.cardsInfo(player.storage.谦逊烈火炽天2), 'cards']);
							},
							mark: true,
							intro: {
								content: 'cardCount',
							},
						},
						连营烈火炽天: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'loseEnd' },
							forced: true,
							filter(event, player) {
								if (player.countCards('h')) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.original == 'h') return true;
									}
								return false;
							},
							content() {
								'step 0';
								var num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].original == 'h') num++;
								}
								event.num = num;
								('step 1');
								if (event.num % 2 == 1) {
									player.chooseTarget('是否发动【连营】来对一名角色造成一点火焰伤害？').ai = function (target) {
										return -get.attitude(player, target);
									};
								} else if (event.num % 2 == 0) {
									player.chooseTarget('是否发动【连营】来横置一名角色并弃置其区域内的一张牌？').ai = function (target) {
										return -get.attitude(player, target);
									};
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.line(result.targets);
									if (event.num % 2 == 1) {
										result.targets[0].damage('fire');
									} else {
										result.targets[0].link();
										player.discardPlayerCard(result.targets[0], 1, 'hej');
									}
								}
								player.chooseTarget('选择发动连营的目标', [1, event.num]).ai = function (target) {
									var player = _status.event.player;
									if (player == target) return get.attitude(player, target) + 10;
									return get.attitude(player, target);
								};
								('step 3');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].draw(2);
									}
								}
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
						落宠lc: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: ['phaseBegin', 'damageEnd'] },
							forced: true,
							content() {
								'step 0';
								var list = [];
								var choiceList = ['令一名角色回复2点体力', '令一名其他角色失去2点体力', '弃置一名其他角色的至多4张牌', '令一名角色摸4张牌'];
								list.push('cancel2');
								player.chooseControl(list).set('prompt', get.prompt('落宠lc')).set('choiceList', choiceList);
								('step 1');
								if (result.control != 'cancel2') {
									var index = ['选项一', '选项二', '选项三', '选项四'].indexOf(result.control);
									event.index = index;
									var list = [['选择一名角色,令其回复2点体力'], ['选择一名角色,令其失去2点体力'], ['选择一名角色,弃置其至多4张牌'], ['选择一名角色,令其摸4张牌']][index];
									player.chooseTarget(list[0], true);
								} else event.finish();
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									switch (event.index) {
										case 0:
											target.recover(2);
											break;
										case 1:
											target.loseHp(2);
											break;
										case 2:
											player.discardPlayerCard(target, true, 'he', [1, 4]);
											break;
										case 3:
											target.draw(4);
											break;
									}
								}
							},
						},
						哀尘ac: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'dying' },
							_priority: 10,
							forced: true,
							content() {
								'step 0';
								if (player.hp < 1) {
									player.recover(1 - player.hp);
									player.draw(1 - player.hp);
								}
								('step 1');
								player.init('sunhao翠琉金阙', 'sunhaoqqwz溺酒残戮');
							},
						},
						好施周济万民: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseDrawBegin' },
							threaten: 1.4,
							check(event, player) {
								if (player.countCards('h') <= 1) return true;
								return game.hasPlayer(function (current) {
									return current != player && current.isMinHandcard() && get.attitude(player, current) > 0;
								});
							},
							content() {
								trigger.num += 2;
								trigger.player.addSkill('好施周济万民2');
							},
							ai: {
								threaten: 2,
								noh: true,
								skillTagFilter(player, tag) {
									if (tag == 'noh') {
										if (player.countCards('h') != 2) return false;
									}
								},
							},//QQQ
						},
						好施周济万民2: {
							trigger: { player: 'phaseDrawEnd' },
							forced: true,
							popup: false,
							audio: 'ext:虎踞江东/audio:2',
							content() {
								'step 0';
								player.removeSkill('好施周济万民2');
								player.chooseCardTarget({
									selectCard: Math.ceil(player.countCards('h') / 2),
									filterTarget(card, player, target) {
										return target.hasSkill('好施周济万民');
									},
									forced: true,
									ai2(target) {
										return get.attitude(_status.event.player, target);
									},
								});
								('step 1');
								if (result.targets && result.targets[0]) {
									result.targets[0].gain(result.cards, player);
									player.$give(result.cards.length, result.targets[0]);
									var list = game.filterPlayer(function (current) {
										return result.targets[0].canUse('wanjian', current) && current.isEnemiesOf(result.targets[0]);
									});
									list.sort(lib.sort.seat);
									for (var i = 0; i < result.cards.length; i++) {
										result.targets[0].useCard({ name: 'wanjian' }, list);
									}
								}
							},
						},
						缔盟周济万民: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							selectTarget: 2,
							complexCard: true,
							filterTarget(card, player, target) {
								return true;
							},
							multitarget: true,
							multiline: true,
							complexSelect: true,
							content() {
								var numhe = targets[0].countCards('h') + targets[1].countCards('h');
								targets[0].swapHandcards(targets[1]);
								player.draw(Math.max(2, numhe));
							},
						},
						卜筮: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 4,
							derivation: ['卜筮1', '卜筮2', '卜筮3', '卜筮4'],
							content() {
								'step 0';
								var list = [];
								var choiceList = ['令一名角色获得<卜筮①>', '令一名角色获得<卜筮②>', '令一名角色获得<卜筮③>', '令一名角色获得<卜筮④>'];
								list.push('cancel2');
								player
									.chooseControl(list)
									.set('prompt', '卜筮<br><br><div class="text" style="color: green; text-align:center;">选项一:令一名角色获得<卜筮①><br><br>选项二:令一名角色获得<卜筮②><br><br>选项三:令一名角色获得<卜筮③><br><br>选项四:令一名角色获得<卜筮④></div>')
									.set('ai', function (target) {
										return -get.attitude(player, target);
									})
									.set('choiceList', choiceList);
								('step 1');
								if (result.control != 'cancel2') {
									var index = ['选项一', '选项二', '选项三', '选项四'].indexOf(result.control);
									event.index = index;
									var list = [['令一名角色获得<卜筮①>'], ['令一名角色获得<卜筮②>'], ['令一名角色获得<卜筮③>'], ['令一名角色获得<卜筮④>']][index];
									player.chooseTarget(list[0], true);
								} else event.finish();
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									switch (event.index) {
										case 0:
											target.addSkill('卜筮1');
											break;
										case 1:
											target.addSkill('卜筮2');
											break;
										case 2:
											target.addSkill('卜筮3');
											break;
										case 3:
											target.addSkill('卜筮4');
											break;
									}
								}
							},
						},
						卜筮1: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							trigger: { player: 'useCardBegin' },
							filter(event, player) {
								return get.color(event.card) && get.color(event.card) == 'black';
							},
							content() {
								player.draw();
							},
						},
						卜筮2: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							forced: true,
							trigger: { player: 'useCardBegin' },
							filter(event, player) {
								return get.color(event.card) == 'black';
							},
							content() { },
							mod: {
								cardUsable(card, player, num) {
									if (get.color(card) == 'black') return Infinity;
								},
							},
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (arg && get.color(arg) == 'black') return true;
									return false;
								},
							},
						},
						卜筮3: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return player.countCards('he') && event.player != player && event.target == player && get.color(event.card) && get.color(event.card) == 'black';
							},
							content() {
								player.chooseToDiscard('he', true);
								trigger.cancel();
							},
						},
						卜筮4: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								'step 0';
								event.card = get.cardPile(function (card) {
									return get.color(card) == 'red';
								}, 'cardPile');
								if (!event.card) {
									event.finish();
									return;
								}
								player.showCards([event.card]);
								('step 1');
								player.gain(event.card, 'gain2');
							},
						},
						忠壮: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return player.maxHp - player.hp;
							},
							content() {
								if (player.hp < 3) trigger.num += 2;
								else if (player.maxHp - player.hp) trigger.num++;
							},
						},
						qing清liang靓: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { target: 'useCardToBegin' },
							filter(event, player) {
								return event.player != player;
							},
							check(event, player) {
								return true;
							},
							usable: 1,
							logTarget: 'player',
							content() {
								'step 0';
								player.line(trigger.player, 'green');
								player.draw();
								player.recover();
								player.chooseControl('其弃置红色牌', '其弃置黑色牌', true);
								('step 1');
								if (result.control == '其弃置红色牌') {
									trigger.player.discard(trigger.player.getCards('he', { color: 'red' }));
								}
								if (result.control == '其弃置黑色牌') {
									trigger.player.discard(trigger.player.getCards('he', { color: 'black' }));
								}
								trigger.untrigger();
								trigger.finish();
							},
						},
						qiao巧rui芮: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 5,
							content() {
								'step 0';
								player.chooseToDiscard('he', true);
								('step 1');
								var type = get.type(result.cards[0]);
								if (type == 'equip') {
									event.cards = get.cards(5);
								} else {
									event.goto(5);
								}
								('step 2');
								if (event.cards.length > 1) {
									player.chooseCardButton('将<巧芮>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
										if (ui.selected.buttons.length == 0) return 1;
										return 0;
									});
								} else if (event.cards.length == 1) {
									event._result = { links: event.cards.slice(0), bool: true };
								} else {
									event.goto(5);
								}
								('step 3');
								if (result.bool) {
									for (var i = 0; i < result.links.length; i++) {
										event.cards.remove(result.links[i]);
									}
									event.togive = result.links.slice(0);
									player
										.chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
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
										.set('enemy', get.value(event.togive[0]) < 0);
								}
								('step 4');
								if (result.targets.length) {
									result.targets[0].gain(event.togive, 'draw');
									player.line(result.targets[0], 'green');
									game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
									event.goto(2);
								}
								('step 5');
								player
									.chooseTarget(get.prompt('qiao巧rui芮'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 6');
								if (result.bool) {
									player.addTempSkill('qiao巧rui芮2', 'juedouAfter');
									player.useCard({ name: 'juedou' }, result.targets[0], false);
								}
							},
							group: 'qiao巧rui芮3',
						},
						qiao巧rui芮2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'juedouBegin' },
							forced: true,
							content() {
								trigger.directHit = true;
							},
						},
						qiao巧rui芮3: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								'step 0';
								player.draw(2);
								var card = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								event.card = card;
								('step 1');
								if (event.card) {
									player.gain(game.createCard(event.card), 'gain2');
								}
							},
						},
						y怨y咽: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							notemp: true,
							init(player) {
								player.storage.y怨y咽 = [];
							},
							content() {
								'step 0';
								player.draw(3);
								('step 1');
								if (player.countCards('he')) {
									player.chooseCard('he', '将1张牌置于武将牌上作为<怨咽>', true);
								} else {
									event.finish();
								}
								('step 2');
								if (result.cards && result.cards.length) {
									player.lose(result.cards, ui.special);
									player.storage.y怨y咽 = player.storage.y怨y咽.concat(result.cards);
									player.markSkill('y怨y咽');
									game.log(player, '将', result.cards, '置于武将牌上作为<怨咽>');
									if (player.storage.y怨y咽.length > 3) {
										event.num = player.storage.y怨y咽.length;
										player.chooseCardButton(player.storage.y怨y咽, '选择' + event.num + '张牌作为手牌', event.num, true);
									} else event.finish();
								} else event.finish();
								('step 3');
								player.gain(result.links)._triggered = null;
								for (var i = 0; i < result.links.length; i++) {
									player.storage.y怨y咽.remove(result.links[i]);
								}
								if (player == game.me && _status.auto) {
								}
							},
							intro: {
								content: 'cards',
							},
							group: 'y怨y咽2',
						},
						y怨y咽2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.source && event.source.isEnemiesOf(player);
							},
							content() {
								'step 0';
								player.gainPlayerCard(trigger.source, 'he', true);
								('step 1');
								if (player.countCards('he')) {
									player.chooseCard('he', '将1张牌置于武将牌上作为<怨咽>', true);
								} else {
									event.finish();
								}
								('step 2');
								if (result.cards && result.cards.length) {
									player.lose(result.cards, ui.special);
									player.storage.y怨y咽 = player.storage.y怨y咽.concat(result.cards);
									player.markSkill('y怨y咽');
									game.log(player, '将', result.cards, '置于武将牌上作为<怨咽>');
									if (player.storage.y怨y咽.length > 3) {
										event.num = player.storage.y怨y咽.length;
										player.chooseCardButton(player.storage.y怨y咽, '选择' + event.num + '张牌作为手牌', event.num, true);
									} else event.finish();
								} else event.finish();
								('step 3');
								player.gain(result.links)._triggered = null;
								for (var i = 0; i < result.links.length; i++) {
									player.storage.y怨y咽.remove(result.links[i]);
								}
								if (player == game.me && _status.auto) {
								}
							},
						},
						x夕y颜: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(function (card, player, target) {
										return true;
									})
									.set('prompt', '夕颜<br><br><div class="text" style="color: green">令一名角色手牌上限+4,其摸4张牌,使用牌无次数限制直到其回合结束后</div>')
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].addTempSkill('x夕y颜2', { player: 'phaseAfter' });
									result.targets[0].draw(4);
								}
							},
							group: 'x夕y颜4',
						},
						x夕y颜4: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(function (card, player, target) {
										return true;
									})
									.set('prompt', '夕颜<br><br><div class="text" style="color: green">令一名角色手牌上限-4,且不能使用牌直到其回合结束后</div>')
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].addTempSkill('x夕y颜3', { player: 'phaseAfter' });
								}
							},
						},
						x夕y颜2: {
							mod: {
								cardUsable(card, player, num) {
									return Infinity;
								},
								maxHandcard(player, num) {
									return num + 4;
								},
							},
						},
						x夕y颜3: {
							mod: {
								maxHandcard(player, num) {
									return num - 4;
								},
								cardEnabled(card, player) {
									return false;
								},
								cardUsable(card, player) {
									return false;
								},
								cardSavable(card, player) {
									return false;
								},
							},
						},
						t同l礼: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCardBegin' },
							filter(event, player) {
								if (event.parent.name == 't同l礼') return false;
								if (!event.targets || !event.card) return false;
								var type = get.type(event.card);
								if (type != 'basic' && type != 'trick') return false;
								var card = game.createCard(event.card.name, event.card.suit, event.card.number);
								for (var i = 0; i < event.targets.length; i++) {
									if (!event.targets[i].isAlive()) return false;
									if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
										return false;
									}
								}
								return true;
							},
							content() {
								player.showHandcards();
								var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
								var x = player.countCards('he', { color: 'red' }) + 1;
								for (var i = 0; i < x; i++) {
									player.useCard(card, trigger.targets);
								}
							},
							ai: {
								threaten: 2,
							},
						},
						s奢z葬: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'dyingBegin' },
							content() {
								'step 0';
								var card = get.cardPile(function (card) {
									return true;
								});
								event.card = card;
								('step 1');
								if (event.card) {
									player.gain(game.createCard({ name: event.card.name, suit: 'club' }));
									player.gain(game.createCard({ name: event.card.name, suit: 'club' }));
									player.gain(game.createCard({ name: event.card.name, suit: 'spade' }));
									player.gain(game.createCard({ name: event.card.name, suit: 'spade' }));
									player.gain(game.createCard({ name: event.card.name, suit: 'heart' }));
									player.gain(game.createCard({ name: event.card.name, suit: 'heart' }));
									player.gain(game.createCard({ name: event.card.name, suit: 'diamond' }));
									player.gain(game.createCard({ name: event.card.name, suit: 'diamond' }));
								}
							},
						},
						奋略: {
							audio: 'ext:虎踞江东/audio:2',
							usable: 4,
							trigger: { player: 'useCardBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('奋略')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, (card) => {
										return card.suit == ['heart', 'spade', 'diamond', 'club'].randomGet();
									});
									result.targets[0].damage();
								}
							},
						},
						胆然: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 6,
							filterTarget: () => true,
							content() {
								'step 0';
								var num = player.getStat().skill.胆然;
								player.draw(num);
								switch (num) {
									case 1:
										player.discardPlayerCard(target, true);
										break;
									case 2:
										target.chooseCard('选择一张牌交给' + get.translation(player), 'he', true);
										break;
									case 3:
										target.damage();
										break;
									default:
										game.asyncDraw([player, target], 2);
								}
								if (num != 2) event.finish();
								('step 1');
								if (result.cards) {
									player.gain(result.cards, target);
									target.$give(result.cards.length, player);
								}
							},
							ai: {
								order: 8.6,
								result: {
									target(player, target) {
										var num = player.getStat().skill.胆然;
										if (num > 0) {
											num++;
										} else {
											num = 1;
										}
										if (num > 3) return 0;
										if (num == 3) return get.damageEffect(target, player, target);
										return -1;
									},
								},
							},
						},
						guyudao古钰刀: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return (event.card && event.card.name == 'sha') || event.nature == 'fire';
							},
							content() {
								var n = 1;
								//['basic','trick','equip'].map(i=>{if(trigger.player.getCards('he',(card)=>get.type(card,'trick')==i)<player.getCards('he',(card)=>get.type(card,'trick')==i))n++;});
								// ['basic', 'trick', 'equip'].forEach(i => {
								// if (trigger.player.countCards('he', card => get.type(card, 'trick') == i) < player.countCards('he', card => get.type(card, 'trick') == i)) {
								// n++;
								// }
								// });
								var types = ['basic', 'trick', 'equip'];
								for (var i = 0; i < types.length; i++) {
									var type = types[i];
									if (trigger.player.countCards('he', (card) => get.type(card, 'trick') == type) < player.countCards('he', (card) => get.type(card, 'trick') == type)) {
										n++;
									}
								}
								trigger.num += n;
							},
						},
						钰铸: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							forced: true,
							content() {
								player.useCard(game.createCard('guyudao古钰刀', 'spade', 1), player);
								player.draw(2);
							},
						},
						破军mxs: {
							audio: 'ext:虎踞江东/audio:2',
							group: ['破军mxs4', '破军mxs5', '破军mxs6'],
							nobracket: true,
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								game.JPG0('xushengPoJun', 2000);
								player.chooseTarget(get.prompt('破军mxs')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.choosePlayerCard(result.targets[0], 'he', [1, result.targets[0].countCards('he')], get.prompt('破军mxs', result.targets[0]));
									event.target = result.targets[0];
									result.targets[0].addTempSkill('破军mxs7', { player: 'phaseAfter' });
								}
								('step 2');
								if (result.bool && result.links.length) {
									if (player.storage.破军mxs2) {
										player.storage.破军mxs2 = player.storage.破军mxs2.concat(result.links);
									} else {
										player.storage.破军mxs2 = result.links;
									}
									game.addVideo('storage', event.target, ['破军mxs2', get.cardsInfo(player.storage.破军mxs2), 'cards']);
									if (!player.hasSkill('破军mxs2')) player.addSkill('破军mxs2');
									event.target.lose(result.links, ui.special);
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						破军mxs4: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return event.target.hp > 0 && event.target.countCards('he') > 0;
							},
							logTarget: 'target',
							content() {
								'step 0';
								game.JPG0('xushengPoJun', 2000);
								player.choosePlayerCard(trigger.target, 'he', [1, trigger.target.countCards('he')], get.prompt('破军mxs4', trigger.target));
								('step 1');
								if (result.bool && result.links.length) {
									trigger.target.addTempSkill('破军mxs7', { player: 'phaseAfter' });
									if (player.storage.破军mxs2) {
										player.storage.破军mxs2 = player.storage.破军mxs2.concat(result.links);
									} else {
										player.storage.破军mxs2 = result.links;
									}
									game.addVideo('storage', trigger.target, ['破军mxs2', get.cardsInfo(player.storage.破军mxs2), 'cards']);
									if (!player.hasSkill('破军mxs2')) player.addSkill('破军mxs2');
									trigger.target.lose(result.links, ui.special);
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						破军mxs2: {
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							mark: true,
							intro: {
								content: 'cardCount',
							},
							content() {
								if (player.storage.破军mxs2) {
									player.gain(player.storage.破军mxs2);
									delete player.storage.破军mxs2;
								}
								if (player.storage.破军mxs5) {
									game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									})
										.randomGet()
										.damage(player.storage.破军mxs5);
								}
								player.removeSkill('破军mxs2');
							},
							group: '破军mxs3',
						},
						破军mxs3: {
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							popup: false,
							content() {
								player.$throw(player.storage.破军mxs2, 1000);
								for (var i = 0; i < player.storage.破军mxs2.length; i++) {
									player.storage.破军mxs2[i].discard();
								}
								game.log(player, '弃置了', player.storage.破军mxs2);
								delete player.storage.破军mxs2;
								player.removeSkill('破军mxs2');
							},
						},
						破军mxs5: {
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return player == _status.currentPhase;
							},
							init(player) {
								player.storage.破军mxs5 = 0;
							},
							forced: true,
							content() {
								player.storage.破军mxs5 += trigger.num;
							},
						},
						破军mxs6: {
							trigger: {
								player: 'phaseBefore',
							},
							silent: true,
							_priority: 10,
							content() {
								player.storage.破军mxs5 = 0;
							},
						},
						破军mxs7: {
							trigger: {
								player: 'damageBegin',
							},
							silent: true,
							_priority: 10,
							content() {
								trigger.num++;
							},
						},
						疑城mxs: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return event.target.group == 'wu' && event.player != player;
							},
							content() {
								'step 0';
								trigger.target.draw(2);
								trigger.player.discard(trigger.player.getCards('he').randomGet());
								('step 1');
								if (result.bool) {
									var card = result.cards[0];
									if (get.tag(card, 'damage')) {
										trigger.cancel();
										trigger.player.damage(2, 'fire');
									}
								}
							},
						},
						蒙斥: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							usable: 1,
							trigger: { player: 'damageEnd' },
							forced: true,
							content() {
								player.recover();
							},
							group: '蒙斥2',
						},
						蒙斥2: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							usable: 1,
							trigger: { player: 'discardBegin' },
							forced: true,
							content() {
								trigger.cancel();
								player.draw(trigger.cards.length);
							},
						},
						节行: {
							audio: 4,
							nobracket: true,
							trigger: {
								player: 'changeHp',
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								if (typeof player.storage.节行 == 'number') {
									player.storage.节行++;
								} else {
									player.storage.节行 = 1;
								}
								('step 2');
								if (Math.random() < 0.5) event.goto(0);
							},
							check(event, player) {
								return true;
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.storage.节行 || 0;
								},
							},
							// prompt(event, player) {
							// var cards = player.getCards('h');
							// var redCards = [];
							// for (var i = 0; i < cards.length; i++) {
							// if (get.color(cards[i]) == 'red') {
							// redCards.push(cards[i]);
							// }
							// }
							// if (redCards.length) {
							// return '你可以选择执行 "节行" 技能一次(该牌为红色)';
							// } else {
							// return '你可以选择执行 "节行" 技能一次(该牌无需为红色)';
							// }
							// },
							ai: {
								maixie: true,
							},
						},
						聆乐: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'damageEnd' },
							forced: true,
							_priority: 9,
							content() {
								player.gainMaxHp(trigger.num);
							},
						},
						聆乐2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return player.maxHp > 7;
							},
							content() {
								var num = player.maxHp;
								player.maxHp = 7;
								player.draw(1 + num - 7);
							},
						},
						盻睇: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCardAfter' },
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('盻睇'), function (card, player, target) {
									return player != target;
								}).ai = function (target) {
									if (trigger.card.name == 'wuzhong') return get.attitude(player, target);
									return -get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									result.targets[0].useCard(game.createCard(trigger.card), trigger.target);
								} else {
									event.finish();
								}
							},
						},
						数谏: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 3,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('数谏')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].gain(game.createCard('guohe'), 'draw');
									player.draw(3);
									player.chooseToDiscard('he', true, 3);
									event.t = result.targets[0];
									player
										.chooseTarget(get.prompt('数谏'), true, function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								}
								('step 2');
								if (result.bool) {
									for (var i = 0; i < 3; i++) {
										player.useCard({ name: 'guohe' }, result.targets[0]);
									}
								}
							},
						},
						攻車: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('攻車'), [1, 2]).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var card = game.createCard('caomu');
									result.targets.map((i) => {
										i.chooseToDiscard('he', true);
										if (player.canUse('sha', i)) player.useCard({ name: 'sha' }, i);
										if (player.canUse(card, i)) player.useCard(card, i);
									});
								}
							},
						},
						望橹: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								game.JPG0('zhangfen天工神机dhtx', 2500);
								if (
									!game.hasPlayer(function (current) {
										return current != player && current.name == 'dagongche大攻车';
									})
								) {
									function addFellows(num, namesArr, identityObj = { content: '忠臣', color: '#000000' }, spacing = 120) {
										for (var i = 0; i < num; i++) {
											const fellow = game.addFellow(num, namesArr[i]);
											fellow.side = player.side;
											fellow.identity = player.identity !== 'zhu' ? player.identity : 'zhong';
											if (lib.config.mode === 'guozhan') fellow._group = player.identity;
											fellow.setIdentity(`<font color="${identityObj.color}">${identityObj.content}</font>`);
											fellow.draw(fellow.maxHp);
										}
									}
									addFellows(2, ['dagongche大攻车', 'dagongche大攻车'], { content: '忠臣', color: '#000000' }, 480);
								}
								player.phaseUse();
							},
						},
						陷筑: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								player.draw(
									game.countPlayer(function (current) {
										return current.group == 'wu';
									}) + player.num('e', { type: 'equip' })
								);
							},
						},
						拆械: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.player.name == 'dagongche大攻车';
							},
							forced: true,
							content() {
								var x =
									2 *
									game.countPlayer(function (current) {
										return current != player && current.name == 'dagongche大攻车';
									});
								player.draw(x);
							},
						},
						旋渚: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'loseEnd' },
							filter(event, player) {
								return event.num > 1 || event.cards.some((i) => get.type(i) === 'equip');
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								player.chooseTarget(get.prompt('旋渚')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									player.discardPlayerCard(2, result.targets[0], 'he', true);
									player.useCard({ name: 'wanjian' }, result.targets[0]);
								}
								if (--event.num > 0) event.goto(1);
							},
						},
						jxz_yichu: {
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							popup: false,
							content() {
								player.storage.jxz_songci = false;
								player.unmarkSkill('jxz_songci');
								player.removeSkill('jxz_yichu');
							},
						},
						jxz_songci: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								for (var i = 0; i < game.players.length; i++) {
									if (!game.players[i].storage.jxz_songci) return true;
								}
								return false;
							},
							init(player) {
								player.storage.jxz_songci = false;
							},
							filterTarget(card, player, target) {
								return !target.storage.jxz_songci && target.countCards('h') != target.hp;
							},
							content() {
								if (target.countCards('h') > target.hp) {
									target.chooseToDiscard(2, 'he', true);
								} else {
									target.draw(2);
								}
								target.storage.jxz_songci = true;
								target.markSkill('jxz_songci');
								target.addSkill('jxz_yichu');
							},
							intro: {
								content: '已发动',
							},
							ai: {
								order: 7,
								threaten: 1.5,
								expose: 0.2,
								result: {
									target(player, target) {
										if (target.countCards('h') < target.hp) {
											if (target.countCards('h') <= 2) return 1;
										} else if (target.countCards('h') > target.hp) {
											if (target.countCards('h') <= 3) return -1;
										}
									},
								},
							},
						},
						jxz_jianshu: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.num('h', { color: 'black' }) > 0;
							},
							filterTarget(card, player, target) {
								if (ui.selected.targets.length) {
									return target.countCards('h') > 0 && target.distanceTo(ui.selected.targets[0]) <= 1;
								}
								return true;
							},
							filterCard: {
								color: 'black',
							},
							discard: false,
							prepare(cards, player, targets) {
								player.$give(cards, targets[0]);
							},
							check(card) {
								return 6 - get.value(card);
							},
							selectTarget: 2,
							multitarget: true,
							content() {
								'step 0';
								targets[0].gain(cards);
								('step 1');
								targets[0].chooseToCompare(targets[1]);
								('step 2');
								if (result.bool) {
									targets[0].chooseToDiscard('he', 2, true);
									targets[1].loseHp();
								} else {
									targets[1].chooseToDiscard('he', 2, true);
									targets[0].loseHp();
								}
							},
							ai: {
								expose: 0.4,
								order: 4,
								result: {
									target(player, target) {
										if (player.hasUnknown()) return 0;
										if (ui.selected.targets.length) return -1;
										return -0.5;
									},
								},
							},
						},
						jxz_luanni: {
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								if (!player.num('h', { color: 'black' })) return false;
								return (event.player.hp >= player.hp && event.player.isAlive() && event.player != player) || (event.player.isAlive() && event.player != player && get.cardCount({ name: 'sha' }, event.player) > 0);
							},
							content() {
								'step 0';
								var goon = get.attitude(player, trigger.player) < 0;
								var next = player.chooseToDiscard(get.prompt('乱逆', trigger.player), { color: 'black' });
								next.set('ai', function (card) {
									var player = _status.event.player;
									if (player.hp == 1 || _status.event.getTrigger().num > 1) {
										return 9 - get.value(card);
									}
									if (player.hp == 2) {
										return 8 - get.value(card);
									}
									return 7 - get.value(card);
								});
								next.set('goon', goon);
								('step 1');
								if (result.bool) {
									player.addTempSkill('unequip', 'shaEnd');
									player.useCard({ name: 'sha' }, _status.currentPhase, false);
								}
							},
						},
						jxz_niluan2: {
							trigger: {
								target: 'shaBefore',
							},
							forced: true,
							popup: false,
							init(player) {
								player.storage.jxz_niluan = false;
							},
							_priority: null,
							content() {
								player.storage.jxz_niluan = true;
								player.addSkill('jxz_yichu2');
							},
						},
						jxz_yichu2: {
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							popup: false,
							content() {
								player.storage.jxz_niluan = false;
								player.removeSkill('jxz_yichu2');
							},
						},
						jxz_niluan: {
							audio: 'ext:虎踞江东/audio:2',
							group: ['jxz_niluan2'],
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return event.player.isAlive() && event.player != player && event.player.countCards('he') > 0;
							},
							content() {
								'step 0';
								var goon = get.attitude(player, _status.currentPhase) < 0;
								var next = player.discardPlayerCard(get.prompt('逆乱', _status.currentPhase), _status.currentPhase, 'he', false);
								next.set('ai', function (card) {
									var player = _status.event.player;
									if (player.hp == 1 || _status.event.getTrigger().num > 1) {
										return 9 - get.value(card);
									}
									if (player.hp == 2) {
										return 8 - get.value(card);
									}
									return 7 - get.value(card);
								});
								next.set('goon', goon);
								('step 1');
								if (result.bool) {
									player.addTempSkill('unequip', 'shaEnd');
									if (get.color(result.cards[0], result.cards[0].original == 'h' ? player : false) == 'black') {
										player.useCard({ name: 'sha' }, _status.currentPhase, false);
									}
								}
							},
						},
						mangchou: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.player.countCards('he');
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							content() {
								player.discardPlayerCard(trigger.player);
							},
							ai: {
								expose: 0.2,
							},
						},
						xiangcan: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: ['loseEnd', 'phaseBegin'],
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'phase') return true;
								if (player.countCards('h')) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.original == 'h') return true;
									}
								return false;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('xiangcan'), function (card, player, target) {
									return lib.filter.targetEnabled({ name: 'sha', nature: 'thunder' }, player, target);
								}).ai = function (target) {
									return ai.get.effect(target, { name: 'sha', nature: 'thunder' }, player);
								};
								('step 1');
								if (result.bool) {
									player.useCard({ name: 'sha', nature: 'thunder' }, result.targets, false);
								}
							},
							ai: {
								threaten(player, target) {
									if (target.countCards('h')) return 0.8;
									return 2;
								},
							},
						},
						azzocai: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'chooseToRespondBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.responded) return false;
								return _status.currentPhase !== player;
							},
							content() {
								'step 0';
								var cards = [];
								if (ui.cardPile.childNodes.length < 6) {
									var discardcards = get.cards(5);
									for (var i = 0; i < discardcards.length; i++) {
										ui.discardPile.appendChild(discardcards[i]);
									}
								}
								for (var i = 0; i < 6; i++) {
									cards.push(ui.cardPile.childNodes[i]);
								}
								player.chooseCardButton('傲才:选择一张卡牌打出', cards).set('filterButton', function (button) {
									return get.type(button.link) == 'basic' && _status.event.getTrigger().filterCard(button.link);
								});
								('step 1');
								if (result.bool) {
									game.log(player, '傲才发动成功');
									trigger.untrigger();
									trigger.responded = true;
									result.links[0].remove();
									trigger.result = { bool: true, card: result.links[0] };
								}
							},
							ai: {
								effect: {
									target(card, player, target, effect) {
										if (get.tag(card, 'respondShan')) return 0.7;
										if (get.tag(card, 'respondSha')) return 0.7;
									},
								},
							},
							group: 'aocai2',
						},
						qishipi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (!event.targets) return false;
								if (_status.currentPhase != player) return false;
								var type = get.type(event.card, 'trick');
								if (type != 'basic' && type != 'trick') return false;
								return game.hasPlayer(function (target) {
									return !event.targets.includes(target) && target.countCards('he') > 0;
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('qizhi'), function (card, player, target) {
										return !_status.event.getTrigger().targets.includes(target) && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (target == player) return 2;
										if (get.attitude(player, target) <= 0) {
											return 1;
										}
										return 0.5;
									});
								('step 1');
								if (result.bool) {
									player.storage.qizhi++;
									if (!event.isMine()) game.delay();
									player.discardPlayerCard(result.targets[0], true, 'he');
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								event.target.draw();
							},
							group: 'qizhi2',
						},
						jinqupi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							check(event, player) {
								return player.storage.qizhi >= player.countCards('h');
							},
							prompt(event, player) {
								if (typeof player.storage.qizhi != 'number') {
									'进趋:是否摸两张牌并将手牌弃置至' + get.cnNumber(0) + '张？';
								}
								return '进趋:是否摸两张牌并将手牌弃置至' + get.cnNumber(player.storage.qizhi) + '张？';
							},
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								if (typeof player.storage.qizhi != 'number') {
									player.storage.qizhi = 0;
								}
								var dh = player.countCards('h') - player.storage.qizhi;
								if (dh > 0) {
									player.chooseToDiscard(dh, true);
								}
							},
						},
						linglongpi: {
							audio: 'ext:虎踞江东/audio:2',
							inherit: 'bagua_skill',
							filter(event, player) {
								if (!event.filterCard || !event.filterCard({ name: 'shan' }, player)) return false;
								if (event.parent.player.num('s', 'unequip')) return false;
								if (player.getEquips(2)) return false;
								return true;
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (player == target && get.subtype(card) == 'equip2') {
											if (ai.get.equipValue(card) <= 8) return 0;
										}
										if (target.getEquips(2)) return;
										if (player.hasSkill('unequip')) return;
										if (get.tag(card, 'respondShan')) return [0.5, 0];
									},
								},
							},
							mod: {
								maxHandcard(player, num) {
									if (player.getEquips(3) || player.getEquips(4)) return;
									return num + 1;
								},
								targetInRange(card, player, target, now) {
									if (player.getEquips(5)) return;
									var type = get.type(card);
									if (type == 'trick' || type == 'delay') return true;
								},
							},
							trigger: {
								player: 'chooseToRespondBegin',
							},
							check(event, player) {
								if (get.damageEffect(player, event.player, player) >= 0) return false;
								return true;
							},
							content() {
								'step 0';
								player.judge('bagua', function (card) {
									return get.color(card) == 'red' ? 1.5 : -0.5;
								});
								('step 1');
								if (result.judge > 0) {
									trigger.untrigger();
									trigger.responded = true;
									trigger.result = { bool: true, card: { name: 'shan' } };
								}
							},
							equipSkill: true,
						},
						liangzhupi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'recoverAfter',
							},
							check(event, player) {
								return get.attitude(player, event.player) >= 0;
							},
							filter(event, player) {
								return event.player != player && _status.currentPhase == event.player;
							},
							content() {
								game.asyncDraw([trigger.player, player]);
							},
							ai: {
								expose: 0.2,
							},
						},
						xiaojipi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.original == 'e') return true;
									}
								return false;
							},
							content() {
								var num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].original == 'e') num += 2;
								}
								player.draw(num);
							},
							ai: {
								noe: true,
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return [1, 3];
									},
								},
							},
						},
						xianzhupi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'recoverAfter',
							},
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							logTarget: 'player',
							content() {
								trigger.player.draw(2);
							},
							group: 'sgk_xianzhu2',
						},
						liangyuanpi: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							init(player) {
								player.storage.sgk_liangyuan = false;
							},
							filter(event, player) {
								return !player.storage.sgk_liangyuan;
							},
							filterTarget(card, player, target) {
								return player != target && target.sex == 'male';
							},
							content() {
								player.storage.sgk_liangyuan = true;
								target.addSkill('sgk_liangyuan2');
							},
							ai: {
								order: 6,
								result: {
									target: 3,
								},
								threaten(player, target) {
									if (
										game.hasPlayer(function (target1) {
											return target.hasSkill('sgk_liangyuan2');
										})
									)
										return 3;
								},
							},
						},
						xingshangpi: {
							audio: 'ext:虎踞江东/audio:2',
							gainable: true,
							trigger: {
								global: 'dieEnd',
							},
							_priority: 5,
							filter(event, player) {
								return event.playerCards && event.playerCards.length;
							},
							check(event) {
								for (var i = 0; i < event.playerCards.length; i++) {
									if (event.playerCards[i].name == 'du') return false;
								}
								return true;
							},
							content() {
								'step 0';
								player.gain(trigger.playerCards);
								player.$draw(trigger.playerCards);
								('step 1');
								for (var i = 0; i < trigger.playerCards.length; i++) {
									trigger.cards.remove(trigger.playerCards[i]);
								}
								trigger.playerCards.length = 0;
							},
						},
						fangzhupi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('fangzhupi'), function (card, player, target) {
									return player != target;
								}).ai = function (target) {
									var player = _status.event.player;
									if (get.attitude(_status.event.player, target) == 0) return 0;
									if (get.attitude(_status.event.player, target) > 0) {
										if (target.classList.contains('turnedover')) return 1000 - target.countCards('h');
										if (player.maxHp - player.hp < 3) return -1;
										return 100 - target.countCards('h');
									} else {
										if (target.classList.contains('turnedover')) return -1;
										if (player.maxHp - player.hp >= 3) return -1;
										return 1 + target.countCards('h');
									}
								};
								('step 1');
								if (result.bool) {
									result.targets[0].draw(player.maxHp - player.hp);
									result.targets[0].turnOver();
								}
							},
							ai: {
								maixie: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkill('jueqing')) return [1, -2];
											if (target.hp <= 1) return;
											var hastarget = false;
											var hasfriend = false;
											var turnfriend = false;
											for (var i = 0; i < game.players.length; i++) {
												if (get.attitude(target, game.players[i]) < 0 && !game.players[i].isTurnedOver()) {
													hastarget = true;
												}
												if (get.attitude(target, game.players[i]) > 0 && game.players[i].isTurnedOver()) {
													hastarget = true;
													turnfriend = true;
												}
												if (game.players[i] != target && get.attitude(game.players[i], target) >= 0) {
													hasfriend = true;
												}
											}
											if (get.attitude(player, target) > 0 && !hastarget) return;
											if (!hasfriend) return;
											if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
											if (target.hp > 1) return [1, 1];
										}
									},
								},
							},
						},
						songweipi: {
							audio: 'ext:虎踞江东/audio:2',
							global: 'songwei2',
							zhuSkill: true,
						},
						xingshangpf: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'dieAfter',
							},
							forced: true,
							content() {
								player.draw(2);
								player.recover(2);
							},
						},
						kuangfupi: {
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.player.countCards('e');
							},
							content() {
								'step 0';
								var neg = get.attitude(player, trigger.player) <= 0;
								player
									.choosePlayerCard('e', trigger.player)
									.set('ai', function (button) {
										if (_status.event.neg) {
											return ai.get.buttonValue(button);
										}
										return 0;
									})
									.set('neg', neg);
								('step 1');
								if (result.bool) {
									trigger.player.$give(result.links, player);
									player.equip(result.links[0]);
								}
							},
						},
						hongyuanpi: {
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							audio: 'ext:虎踞江东/audio:2',
							content() {
								'step 0';
								var check;
								if (player.countCards('h') == 0) {
									check = false;
								} else {
									var i,
										num = 0;
									for (var i = 0; i < game.players.length; i++) {
										if (player != game.players[i]) {
											if (get.attitude(player, game.players[i]) > 1) {
												num++;
											}
										}
									}
									check = num >= 2;
								}
								player
									.chooseTarget(
										get.prompt('hongyuan'),
										[1, 2],
										function (card, player, target) {
											return player != target;
										},
										function (target) {
											if (!_status.event.check) return 0;
											return get.attitude(_status.event.player, target);
										}
									)
									.set('check', check);
								('step 1');
								if (result.bool) {
									// for(var i=0;i<result.targets.length;i++){
									//     result.targets[i].draw();
									// }
									game.asyncDraw(result.targets);
									trigger.num--;
								}
							},
						},
						huanshipi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'judge',
							},
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							check(event, player) {
								if (get.attitude(player, event.player) <= 0) return false;
								var cards = player.getCards('he');
								var judge = event.judge(event.player.judging[0]);
								for (var i = 0; i < cards.length; i++) {
									var judge2 = event.judge(cards[i]);
									if (_status.currentPhase != player && judge2 == judge && get.color(cards[i]) == 'red' && ai.get.useful(cards[i]) < 5) return true;
									if (judge2 > judge) return true;
								}
								return false;
							},
							content() {
								'step 0';
								var target = trigger.player;
								player.line(target, 'green');
								var judge = trigger.judge(target.judging[0]);
								var attitude = get.attitude(target, player);
								target
									.choosePlayerCard('请选择代替判定的牌', 'he', 'visible', true, player)
									.set('ai', function (button) {
										var card = button.link;
										var judge = _status.event.judge;
										var attitude = _status.event.attitude;
										var result = trigger.judge(card) - judge;
										var player = _status.event.player;
										if (result > 0) {
											return 20 + result;
										}
										if (result == 0) {
											if (_status.currentPhase == player) return 0;
											if (attitude >= 0) {
												return get.color(card) == 'red' ? 7 : 0 - get.value(card);
											} else {
												return get.color(card) == 'black' ? 10 : 0 + get.value(card);
											}
										}
										if (attitude >= 0) {
											return get.color(card) == 'red' ? 0 : -10 + result;
										} else {
											return get.color(card) == 'black' ? 0 : -10 + result;
										}
									})
									.set('judge', judge)
									.set('attitude', attitude);
								('step 1');
								if (result.bool) {
									event.card = result.links[0];
									player.respond(event.card, 'highlight');
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
									ui.discardPile.appendChild(trigger.player.judging[0]);
									trigger.player.judging[0] = event.card;
									if (!get.owner(event.card, 'judge')) {
										trigger.position.appendChild(event.card);
									}
									game.log(trigger.player, '的判定牌改为', event.card);
								}
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						mingzhepi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: ['useCardAfter', 'respondAfter', 'discardAfter'],
							},
							forced: true,
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.color(i) == 'red' && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								player.draw();
							},
							ai: {
								threaten: 0.7,
							},
						},
						huanbing: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								target: 'shaBegin',
							},
							filter(event, player) {
								if (get.itemtype(event.card) != 'card') return false;
								return event.card && event.card.name == 'sha';
							},
							forced: true,
							init(player) {
								player.storage.sgk_huanbing = [];
							},
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								player.lose(trigger.card, ui.special);
								player.$gain2(trigger.card);
								player.storage.sgk_huanbing = player.storage.sgk_huanbing.concat(trigger.card);
								player.markSkill('sgk_huanbing');
							},
							intro: {
								content: 'cards',
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (card.name == 'sha') return [1, 0.5];
									},
								},
							},
							group: 'sgk_huanbing2',
						},
						jinkui: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card && get.type(event.card) == 'trick' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
							},
							content() {
								trigger.num++;
							},
							group: 'jinkui2',
							ai: {
								threaten: 1.8,
							},
						},
						jinkui2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseUseBegin' },
							forced: true,
							content() {
								'step 0';
								if (get.is.altered('jinkui')) {
									player.gain(game.createCard(get.inpile('trick').randomGet()), 'draw');
									event.finish();
									return;
								}
								var list = get.inpile('trick');
								list = list.randomGets(3);
								for (var i = 0; i < list.length; i++) {
									list[i] = ['锦囊', '', list[i]];
								}
								var dialog = ui.create.dialog('选择一张锦囊牌加入你的手牌', [list, 'vcard'], 'hidden');
								player.chooseButton(dialog, true).ai = function (button) {
									var card = { name: button.link[2] };
									var value = get.value(card);
									if (get.tag(card, 'damage')) value++;
									return value;
								};
								('step 1');
								if (result.bool) {
									player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
								}
							},
						},
						xidipi: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterCard: true,
							position: 'he',
							selectCard: [1, null],
							check(card) {
								if (ui.selected.cards.length) return 0;
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								event.cards = get.cards(4 * cards.length);
								player.chooseCardButton('获得其中的一张牌', true, event.cards, true);
								('step 1');
								player.gain(result.links, 'draw');
								event.cards.remove(result.links[0]);
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										ui.discardPile.appendChild(i);
									}
							},
							ai: {
								order: 8,
								result: {
									player: 1,
								},
							},
						},
						kanpopi: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'chooseToUse',
							filterCard(card) {
								return get.color(card) == 'black';
							},
							viewAsFilter(player) {
								return player.num('h', { color: 'black' }) > 0;
							},
							viewAs: {
								name: 'wuxie',
							},
							prompt: '将一张黑色手牌当无懈可击使用',
							check(card) {
								return 8 - get.value(card);
							},
							threaten: 1.2,
							ai: {
								basic: {
									useful: [6, 4],
									value: [6, 4],
								},
								result: {
									player: 1,
								},
								expose: 0.2,
							},
						},
						cuorui: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return !target.storage.huanwu;
							},
							content() {
								target.gainMaxHp();
								target.recover();
								target.draw(2);
								target.storage.huanwu = true;
								target.mark('huanwu', {
									name: '挫锐',
									content: '已发动',
								});
								game.addVideo('mark', target, {
									name: '挫锐',
									content: '已发动',
									id: 'cuorui',
								});
							},
							ai: {
								threaten: 1.2,
								result: {
									target(player, target) {
										return 1 / target.hp;
									},
								},
								order: 10,
								expose: 0.3,
							},
						},
						liewei: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target.countCards('h') > 0;
							},
							selectTarget: -1,
							content() {
								target.chooseToDiscard(true);
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										var nh = target.countCards('h');
										switch (nh) {
											case 0:
												return 0;
											case 1:
												return -1.5;
											case 2:
												return -1.3;
											case 3:
												return -1;
											default:
												return -0.8;
										}
									},
								},
							},
						},
						qianxipi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							check() {
								return 1;
							},
							content() {
								'step 0';
								player.draw(2);
								player.chooseToDiscard(true, 'he');
								('step 1');
								event.color = get.color(result.cards[0]);
								player.chooseTarget(function (card, player, target) {
									return player != target && get.distance(player, target) <= 1;
								}, true).ai = function (target) {
									return -get.attitude(player, target);
								};
								('step 2');
								if (result.bool && result.targets.length) {
									result.targets[0].storage.qianxi2 = event.color; //QQQ
									result.targets[0].addSkill('qianxi2');
									player.line(result.targets, 'green');
									game.addVideo('storage', result.targets[0], ['qianxi2', event.color]);
								}
							},
						},
						qianxitupo: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								source: 'damageBefore',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && get.distance(player, event.player) <= 1 && event.notLink();
							},
							check(event, player) {
								if (event.num > 1) return 0;
								if (get.attitude(player, event.player) < 0) return 1;
								return 0;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (card.suit == 'heart') return -1;
									return 1;
								});
								('step 1');
								if (result.bool) {
									//trigger.untrigger();
									trigger.finish();
									trigger.player.loseMaxHp();
								}
							},
						},
						qianxigaopei: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								source: 'damageBefore',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && get.distance(player, event.player) <= 1 && event.notLink();
							},
							check(event, player) {
								if (event.num > 1) return 0;
								if (get.attitude(player, event.player) < 0) return 1;
								return 1;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (card.suit == 'heart') return -1;
									return 1;
								});
								('step 1');
								if (result.bool) {
									//trigger.untrigger();
									trigger.finish();
									trigger.player.loseMaxHp();
								}
							},
						},
						zuikongjiuz: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							check(event, player) {
								if (event.player.num('j', 'lebu')) return 0;
								if (get.attitude(player, event.player) < -2) {
									var cards = player.getCards('h');
									if (cards.length > player.hp) return true;
									for (var i = 0; i < cards.length; i++) {
										var useful = ai.get.useful(cards[i]);
										if (useful < 5) return true;
										if (cards[i].number > 9 && useful < 7) return true;
									}
								}
								return false;
							},
							logTarget: 'player',
							filter(event, player) {
								return player.hp < player.maxHp && event.player != player && player.countCards('h') > 0 && event.player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(trigger.player);
								('step 1');
								if (result.bool) {
									trigger.player.skip('phaseUse');
								} else {
									trigger.player.addTempSkill('old_zhuikong2', 'phaseEnd');
									trigger.player.storage.zuikongjiuz = player;
								}
							},
						},
						old_zhuikong2: {
							mod: {
								targetInRange(card, player, target, now) {
									if (player.storage.zuikongjiuz == target) return true;
								},
							},
						},
						qiuyuanjiu: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								target: 'shaBegin',
							},
							forced: true,
							_priority: 11,
							content() {
								'step 0';
								player
									.chooseTarget('是否发动【求援】？', function (card, player, target) {
										return target != player && _status.event.getTrigger().player.canUse('sha', target, false) && target.countCards('h');
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return ai.get.effect(target, trigger.card, trigger.player, player) + 0.1;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									target.chooseCard('请交给' + get.translation(player) + '一张牌', true).set('ai', function (card) {
										return ai.get.unuseful(card);
									});
								} else {
									event.finish();
								}
								('step 2');
								player.gain(result.cards);
								event.target.$give(result.cards, player);
								if (result.cards[0].name != 'shan') {
									trigger.targets.push(event.target);
									game.log(event.target, '成为了额外目标');
								}
							},
							ai: {
								expose: 0.2,
								effect: {
									target(card, player, target) {
										if (card.name != 'sha') return;
										for (var i = 0; i < game.players.length; i++) {
											var target2 = game.players[i];
											if (player != target2 && target != target2 && player.canUse(card, target2, false) && ai.get.effect(target2, { name: 'shacopy', nature: card.nature, suit: card.suit }, player, target) < 0) {
												if (target.hp == target.maxHp) return [0, 1];
												return [0, 0];
											}
										}
									},
								},
							},
						},
						fengliangpi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'dying',
							},
							_priority: 10,
							forced: true,
							filter(event, player) {
								return !player.storage.kunfen;
							},
							content() {
								'step 0';
								player.loseMaxHp();
								('step 1');
								if (player.hp < 2) {
									player.recover(2 - player.hp);
								}
								('step 2');
								player.addSkill('tiaoxinpi');
								player.storage.kunfen = true;
							},
						},
						tiaoxinpi: {
							audio: 'ext:虎踞江东/audio:2',
							audioname: ['xiahouba'],
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target.canUse({ name: 'sha' }, player) && target.countCards('he');
							},
							content() {
								'step 0';
								target.chooseToUse({ name: 'sha' }, player, -1, '挑衅:对' + get.translation(player) + '使用一张杀,或令其弃置你的一张牌').set('targetRequired', true);
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
										if (target.countCards('h') == 0) return 0;
										if (target.countCards('h') == 1) return -0.1;
										if (player.hp <= 2) return -2;
										if (player.num('h', 'shan') == 0) return -1;
										return -0.5;
									},
								},
								threaten: 1.1,
							},
						},
						juesipi: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.num('h', 'sha') > 0;
							},
							filterTarget(card, player, target) {
								return target != player && target.countCards('he') > 0;
							},
							filterCard: {
								name: 'sha',
							},
							content() {
								'step 0';
								target.chooseToDiscard('he', true);
								player.draw();
								('step 1');
								if (target.hp >= player.hp && result.bool && result.cards[0].name != 'sha') {
									player.useCard({ name: 'juedou' }, target);
								}
							},
							ai: {
								order: 2,
								result: {
									target(player, target) {
										if (ai.get.effect(target, { name: 'juedou' }, player, player) <= 0) {
											return 0;
										}
										if (target.hp < player.hp) {
											if (player.countCards('h') > player.hp) return -0.1;
											return 0;
										}
										var hs1 = targe.getCards('h', 'sha');
										var hs2 = playe.getCards('h', 'sha');
										if (hs1.length > hs2.length) {
											return 0;
										}
										var hsx = target.getCards('h');
										if (hsx.length > 2 && hs2.length <= 1 && hsx[0].number < 6) {
											return 0;
										}
										if (hsx.length > 3 && hs2.length <= 1) {
											return 0;
										}
										if (hs1.length > hs2.length - 1 && hs1.length && (hs2.length <= 1 || hs1[0].number > hs2[0].number)) {
											return 0;
										}
										return -1;
									},
								},
							},
						},
						shangshijiu: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: ['loseEnd', 'changeHp'],
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') < player.maxHp - player.hp;
							},
							content() {
								player.draw(player.maxHp - player.hp - player.countCards('h'));
							},
							ai: {
								noh: true,
								skillTagFilter(player, tag) {
									if (tag == 'noh' && player.maxHp - player.hp < player.countCards('h')) {
										return false;
									}
								},
							},
						},
						jueqingjiu: {
							trigger: {
								source: 'damageBefore',
							},
							forced: true,
							audio: 'ext:虎踞江东/audio:2',
							_priority: 16,
							check() {
								return false;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
								var ex = 0;
								if (trigger.card && trigger.card.name == 'sha') {
									if (player.hasSkill('jiu')) ex++;
									if (player.hasSkill('luoyi2')) ex++;
									if (player.hasSkill('reluoyi2')) ex++;
								}
								trigger.player.loseHp(trigger.num + ex);
							},
						},
						zhenggongpi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source.countCards('e') > 0;
							},
							content() {
								'step 0';
								var att = get.attitude(player, trigger.source);
								player.choosePlayerCard('e', get.prompt('zzhenggong'), trigger.source).ai = function (button) {
									if (att <= 0) {
										return ai.get.equipValue(button.link);
									}
									return 0;
								};
								('step 1');
								if (result.bool) {
									player.equip(result.links[0]);
									trigger.source.$give(result.links[0], player);
								}
							},
						},
						quanjipi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							_priority: 15,
							check(event, player) {
								var att = get.attitude(player, event.player);
								if (att < 0) {
									var nh1 = event.player.countCards('h');
									var nh2 = player.countCards('h');
									return nh1 <= 2 && nh2 > nh1 + 1;
								}
								if (att > 0 && event.player.num('j', 'lebu') && event.player.countCards('h') > event.player.hp + 1) return true;
								return false;
							},
							logTarget: 'player',
							filter(event, player) {
								return event.player != player && event.player.countCards('h') > 0 && player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(trigger.player);
								('step 1');
								if (result.bool) {
									trigger.player.skip('phaseJudge');
									trigger.untrigger();
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						baijiangpi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							init(player) {
								player.storage.zbaijiang = false;
							},
							filter(event, player) {
								return !player.storage.zbaijiang && player.countCards('e') >= 2;
							},
							content() {
								player.storage.zbaijiang = true;
								player.removeSkill('zzhenggong');
								player.removeSkill('zquanji');
								player.removeSkill('zbaijiang');
								player.addSkill('zyexin');
								player.addSkill('zzili');
								player.gainMaxHp();
							},
						},
						quanjipif: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							init(player) {
								player.storage.quanji = [];
							},
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player.draw(trigger.num);
								('step 1');
								if (player.countCards('he')) {
									player.chooseCard('将' + get.cnNumber(trigger.num) + '张手牌置于武将牌上作为<权>', trigger.num, true);
								} else {
									event.finish();
								}
								('step 2');
								if (result.cards && result.cards.length) {
									player.lose(result.cards, ui.special);
									player.storage.quanji = player.storage.quanji.concat(result.cards);
									player.markSkill('quanji');
									game.log(player, '将', result.cards, '置于武将牌上作为<权>');
								}
							},
							intro: {
								content: 'cards',
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.storage.quanji.length;
								},
							},
							ai: {
								maixie: true,
								threaten: 0.8,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkill('jueqing')) return [1, -2];
											var hasfriend = false;
											for (var i = 0; i < game.players.length; i++) {
												if (game.players[i] != target && get.attitude(game.players[i], target) >= 0) {
													hasfriend = true;
													break;
												}
											}
											if (!hasfriend) return;
											if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
											if (!target.hasSkill('paiyi') && target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
											if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
											if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
										}
									},
								},
							},
						},
						zilipif: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return !player.hasSkill('paiyi') && player.storage.quanji && player.storage.quanji.length >= 3;
							},
							content() {
								'step 0';
								player.chooseControl('recover_hp', 'draw_card', function (event, player) {
									if (player.hp >= 2) return 'draw_card';
									return 'recover_hp';
								});
								('step 1');
								if (result.control == 'draw_card') {
									player.draw(2);
								} else {
									player.recover();
								}
								('step 2');
								player.loseMaxHp();
								player.addSkill('paiyi');
							},
						},
						qianxipjiaqiang: {
							audio: 'ext:虎踞江东/audio:2',
							inherit: 'bxyr_chuanyunjian',
							trigger: {
								source: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								trigger.untrigger();
								trigger.finish();
								trigger.player.loseMaxHp();
							},
						},
						canshipi: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseDrawBefore',
							},
							check(event, player) {
								var num = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].hp < game.players[i].maxHp) {
										num++;
										if (num > 3) return true;
									}
								}
								return false;
							},
							prompt() {
								var num = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].hp < game.players[i].maxHp) {
										num++;
									}
								}
								return '残蚀:是否放弃摸牌,改为摸' + get.cnNumber(num) + '张牌？';
							},
							content() {
								trigger.untrigger();
								trigger.finish();
								var num = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].hp < game.players[i].maxHp) {
										num++;
									}
								}
								if (num > 0) {
									player.draw(num);
								}
								player.addTempSkill('canshi2', 'phaseAfter');
							},
						},
						baolipi: {
							audio: 'ext:虎踞江东/audio:2',
							usable: 1,
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return (!target.countCards('e') || target.countCards('j')) && player != target;
							},
							content() {
								target.damage();
							},
							ai: {
								order: 4,
								result: {
									target: -1,
								},
							},
						},
						huangyinpi: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							delay: 0,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.showHandcards();
								('step 1');
								if (player.num('h', { color: 'black' }) >= player.num('h', { color: 'red' })) player.useCard({ name: 'jiu' }, player);
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										if (player.getStat().card.sha > 0) return 0;
										if (player.num('h', 'jiu')) return 0;
										if (player.hasSkill('jiu')) return 0;
										if (!player.num('h', 'sha')) return 0;
										if (player.num('h', { color: 'black' }) >= player.num('h', { color: 'red' })) return 3;
										return 0;
									},
								},
							},
						},
						困奋: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('困奋')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].loseHp();
									player.draw(2);
								}
							},
						},
						逢亮: {
							audio: 'ext:虎踞江东/audio:2',
							derivation: 'tiaoxinjspjw',
							trigger: { player: 'dying' },
							_priority: 10,
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								if (player.hp < 2) {
									player.recover(2 - player.hp);
								}
								('step 1');
								player.addSkill('tiaoxinjspjw');
							},
						},
						tiaoxinjspjw: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filterTarget(card, player, target) {
								return target.countCards('he');
							},
							content() {
								'step 0';
								target.chooseToUse({ name: 'sha' }, player, -1, '挑衅:对' + get.translation(player) + '使用一张杀,或令其弃置你的一张牌').set('targetRequired', true);
								('step 1');
								if (result.bool == false && target.countCards('he') > 0) {
									player.discardPlayerCard(target, 'he', true);
								} else {
									player.discardPlayerCard(target, 'he', true);
								}
							},
							ai: {
								order: 4,
								expose: 0.2,
								result: {
									target: -1,
									player(player, target) {
										if (target.countCards('h') == 0) return 0;
										if (target.countCards('h') == 1) return -0.1;
										if (player.hp <= 2) return -2;
										if (player.num('h', 'shan') == 0) return -1;
										return -0.5;
									},
								},
								threaten: 1.1,
							},
						},
						狂斧: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							filterCard: true,
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('狂斧'), [1, 2], function (card, player, target) {
									return target.countCards('he') > 0 && player != target;
								});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].chooseToDiscard('he', true, 2);
									}
									player.useCard({ name: 'sha' }, result.targets, false);
									player.draw(2);
								}
							},
						},
						双刃纪灵: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseUseBegin' },
							forced: true,
							_priority: 15,
							content() {
								'step 0';
								var goon;
								if (player.needsToDiscard() > 1) {
									goon = player.hasCard(function (card) {
										return card.number > 10 && get.value(card) <= 5;
									});
								} else {
									goon = player.hasCard(function (card) {
										return (card.number >= 9 && get.value(card) <= 5) || get.value(card) <= 3;
									});
								}
								player
									.chooseTarget(get.prompt('双刃纪灵'), function (card, player, target) {
										return target != player && target.countCards('h');
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (_status.event.goon && get.attitude(player, target) < 0) {
											return get.effect(target, { name: 'sha' }, player, player);
										}
										return 0;
									})
									.set('goon', goon);
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									player.chooseToCompare(target);
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									var target = event.target;
									if (
										target.identity != 'ye' &&
										target.identity != 'unknown' &&
										game.hasPlayer(function (current) {
											if (!player.canUse('sha', current, false)) return false;
											if (target == current) return false;
											if (get.mode() == 'guozhan') {
												return target.identity == current.identity;
											}
											return true;
										})
									) {
										var str = '对一名';
										if (get.mode() == 'guozhan') {
											str += get.translation(target.identity) + '势力的';
										}
										player
											.chooseTarget(str + '角色使用一张杀', true, function (card, player, target) {
												if (!player.canUse('sha', target, false)) return false;
												if (get.mode() == 'guozhan') {
													return target.identity == _status.event.identity;
												}
												return true;
											})
											.set('ai', function (target) {
												var player = _status.event.player;
												return get.effect(target, { name: 'sha' }, player, player);
											})
											.set('identity', target.identity);
									} else {
										player.useCard({ name: 'sha' }, target, false);
										event.finish();
									}
								} else {
									event.target.damage();
									event.finish();
								}
								('step 3');
								if (result.bool && result.targets && result.targets.length) {
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						偏宠: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'loseEnd' },
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.color(i) == 'red' || (i.suit == 'club' && i.original != 'j')) return true;
									}
								return false;
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									game.asyncDraw(list, trigger.num);
								}
							},
							ai: {
								threaten: 1.4,
							},
						},
						尊位: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 3,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('尊位'), function (card, player, target) {
									return target != player;
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.draw(target.countCards('he'));
									player.gainMaxHp(target.maxHp);
									player.recover(target.maxHp);
								}
							},
						},
						jizhi青云鸢飞: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'useCard' },
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								player.draw();
							},
							ai: {
								threaten: 1.4,
								noautowuxie: true,
							},
						},
						cangji青云鸢飞: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'phaseUseBegin',
							},
							forced: true,
							filter(event, player) {
								return event.player.num('h', { type: 'basic' }) > 0;
							},
							content() {
								'step 0';
								trigger.player
									.chooseToDiscard('是否发动【藏机】？', [1, trigger.player.num('h', { type: 'basic' })], 'h', function (card) {
										return get.type(card) == 'basic';
									})
									.set('ai', function (card) {
										if (card.name == 'bagua') return 10;
										return 7 - get.value(card);
									});
								('step 1');
								if (result.bool) {
									event.cards = get.cards(3 * result.cards.length);
									player.showCards(event.cards);
								} else {
									event.finish();
								}
								('step 2');
								var gained = [];
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i, 'trick') == 'trick') {
											gained.push(i);
										} else {
											ui.discardPile.appendChild(i);
										}
									}
								player.gain(gained, 'gain2');
							},
							ai: {
								threaten: 1.5,
							},
						},
						默识: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 4,
							filter(event, player) {
								var list = ['sha', 'tao', 'jiu', 'taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
								if (get.mode() == 'guozhan') {
									list = list.concat(['xietianzi', 'shuiyanqijunx', 'lulitongxin', 'lianjunshengyan', 'chiling', 'diaohulishan', 'yuanjiao', 'huoshaolianying']);
								}
								for (var i = 0; i < list.length; i++) {
									if (event.filterCard && event.filterCard({ name: list[i] }, player)) return true;
								}
								return false;
							},
							chooseButton: {
								dialog() {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (name == 'wuxie') continue;
										if (name == 'sha') {
											list.push(['基本', '', 'sha']);
											list.push(['基本', '', 'sha', 'fire']);
											list.push(['基本', '', 'sha', 'thunder']);
										} else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
										else if (get.type(name) == 'basic') list.push(['基本', '', name]);
										else if (get.type(name) == 'delay') list.push(['延时锦囊', '', name]);
									}
									return ui.create.dialog('默识', [list, 'vcard']);
								},
								filter(button, player) {
									var evt = _status.event.parent;
									if (evt && evt.filterCard) {
										return evt.filterCard({ name: button.link[2] }, player, evt);
									}
									return true;
								},
								backup(links, player) {
									return {
										filterCard: false,
										selectCard: 0,
										viewAs: { name: links[0][2], nature: links[0][3] },
									};
								},
								prompt(links, player) {
									return '将一张手牌做当' + get.translation(links[0][2]) + '使用';
								},
							},
							group: ['默识语音', '默识1'],
						},
						默识语音: {
							trigger: {
								player: 'useCardBefore',
							},
							filter(event, player) {
								return event.skill == '默识_backup';
							},
							forced: true,
							_priority: 15,
							content() { },
						},
						默识1: {
							audio: 'ext:虎踞江东/audio:2',
							intro: {
								content: 'cards',
							},
							init(player) {
								player.storage.默识1 = [];
							},
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.storage.默识1.length && player.countCards('h') > 0;
							},
							content() {
								if (player.storage.默识1.length && player.countCards('h')) {
									var card = player.storage.默识1.shift();
									card = { name: card.name, nature: card.nature, suit: card.suit, number: card.number };
									if (lib.filter.cardEnabled(card)) {
										if (
											game.hasPlayer(function (current) {
												return player.canUse(card, current);
											})
										) {
											lib.skill.默识1_3.viewAs = card;
											var next = player.chooseToUse();
											if (next.isOnline()) {
												player.send(function (card) {
													lib.skill.默识1_3.viewAs = card;
												}, card);
											}
											next.set('openskilldialog', '默识:将一张手牌当' + get.translation(card) + '使用');
											next.set('norestore', true);
											next.set('_backupevent', '默识1_3');
											next.backup('默识1_3');
											player.draw(4);
											player.recover();
										}
									}
									event.redo();
								}
							},
							group: ['默识1_1', '默识1_2'],
							subSkill: {
								1: {
									trigger: {
										player: 'phaseAfter',
									},
									silent: true,
									content() {
										player.storage.默识1.length = 0;
										player.unmarkSkill('默识1');
									},
									forced: true,
									popup: false,
								},
								2: {
									trigger: {
										player: 'useCard',
									},
									silent: true,
									filter(event, player) {
										if (_status.currentPhase != player) return false;
										if (event.parent.parent.name != 'phaseUse') return false;
										var type = get.type(event.card);
										return player.storage.默识1.length < 5 && (type == 'basic' || type == 'trick');
									},
									content() {
										player.storage.默识1.add(trigger.card);
										if (player.hasSkill('默识1')) player.markSkill('默识1');
									},
									forced: true,
									popup: false,
								},
								3: {
									filterCard: true,
									selectCard: 1,
									popname: true,
								},
							},
						},
						陈情: {
							audio: 4,
							trigger: { global: 'dyingBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('陈情')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(4);
									result.targets[0].recover();
								}
								('step 2');
								player.chooseTarget(get.prompt('陈情')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, 4);
									result.targets[0].loseHp();
								}
							},
						},
						狼灭: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseEnd' },
							content() {
								'step 0';
								player.draw();
								('step 1');
								player
									.chooseTarget(get.prompt('狼灭'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									result.targets[0].damage();
								}
							},
						},
						裸衣许褚: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseDrawBegin' },
							check(event, player) {
								if (player.countCards('h', 'sha')) return true;
								return Math.random() < 0.5;
							},
							content() {
								'step 0';
								trigger.player.addTempSkill('裸衣许褚2', { player: 'phaseBefore' });
								('step 1');
								event.cards = get.cards(5);
								trigger.player.showCards(event.cards, '裸衣');
								('step 2');
								for (var i = 0; i < cards.length; i++) {
									if (get.type(cards[i]) != 'basic' && cards[i].name != 'juedou' && (get.type(cards[i]) != 'equip' || get.subtype(cards[i]) != 'equip1')) {
										cards[i].discard();
										cards.splice(i--, 1);
									}
								}
								trigger.player.gain(cards, 'gain2');
							},
						},
						裸衣许褚2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
							},
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								damageBonus: true,
							},
						},
						jizhizxqs: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'useCard' },
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								player.draw(2);
								player.recover();
							},
							ai: {
								threaten: 1.4,
								noautowuxie: true,
							},
						},
						裂胆: {
							audio: 'ext:虎踞江东/audio:2',
							marktext: '胆',
							init(player) {
								player.storage.裂胆 = 0;
							},
							intro: {
								content(storage) {
									return '当前有' + storage + '个<裂胆>';
								},
							},
							mark: true,
							trigger: { global: 'phaseBegin' },
							content() {
								if (player.hp >= trigger.player.hp) {
									player.draw();
									player.gainMaxHp();
									player.recover();
								} else {
									event.target = trigger.player;
									player.line(event.target);
									if (event.target.storage.裂胆 == undefined) event.target.storage.裂胆 = 0;
									event.target.markSkill('裂胆');
									event.target.storage.裂胆++;
								}
								if (player.countCards('h') >= trigger.player.countCards('h')) {
									player.draw();
									player.gainMaxHp();
									player.recover();
								} else {
									event.target = trigger.player;
									player.line(event.target);
									if (event.target.storage.裂胆 == undefined) event.target.storage.裂胆 = 0;
									event.target.markSkill('裂胆');
									event.target.storage.裂胆++;
								}
								if (player.countCards('e') >= trigger.player.countCards('e')) {
									player.draw();
									player.gainMaxHp();
									player.recover();
								} else {
									event.target = trigger.player;
									player.line(event.target);
									if (event.target.storage.裂胆 == undefined) event.target.storage.裂胆 = 0;
									event.target.markSkill('裂胆');
									event.target.storage.裂胆++;
								}
							},
						},
						壮胆: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseEnd' },
							content() {
								'step 0';
								if (typeof trigger.player.storage.裂胆 == 'number' && trigger.player.storage.裂胆 >= 5) player.chooseControl('死亡', '回血');
								('step 1');
								if (result.control == '死亡') {
									trigger.player.die();
								} else {
									trigger.player.recover(trigger.player.storage.裂胆);
								}
							},
						},
						殃众zz: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'damageEnd', source: 'damageEnd' },
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('殃众zz'), [1, 4], function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].chooseToDiscard('he', true, 2);
										result.targets[i].loseHp();
									}
								}
							},
						},
						惶恐zz: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { target: 'useCardToBegin' },
							forced: true,
							filter(event, player) {
								if (player == _status.currentPhase || event.targets.length != 1) return false;
								var type = get.type(event.card);
								return (type == 'basic' || type == 'trick') && get.tag(event.card, 'damage') > 0;
							},
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								player
									.chooseTarget(get.prompt('殃众zz'), [1, 4], function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].chooseToDiscard('he', true, 2);
										result.targets[i].loseHp();
									}
								}
							},
						},
						佩剑xhe: {
							group: ['佩剑xhe_huode', '佩剑xhe_zengdao', '佩剑xhe_die'],
							subSkill: {
								huode: {
									trigger: {
										global: 'gameDrawAfter',
										player: 'phaseBegin',
									},
									forced: true,
									filter(event, player) {
										return !player.getEquip('qinggang');
									},
									content() {
										var card = get.cardPile('qinggang', 'field');
										if (card) {
											player.equip(card);
										}
									},
								},
								zengdao: {
									audio: '佩剑xhe',
									enable: 'phaseUse',
									usable: 1,
									filter(event, player) {
										return player.getEquip('qinggang');
									},
									filterTarget(card, player, target) {
										return player != target;
									},
									content() {
										var card = get.cardPile('qinggang', 'field');
										if (card) {
											var mpdr = [player, target];
											target.equip(card);
											game.asyncDraw(mpdr);
										}
									},
									ai: {
										order() {
											return get.order({ name: 'sha' }) - 1;
										},
										result: {
											target(player, target) {
												return 1;
											},
										},
									},
								},
								die: {
									trigger: {
										player: 'die',
									},
									forced: true,
									forceDie: true,
									filter(event, player) {
										return event.source && event.source.isIn();
									},
									logTarget: 'source',
									content() {
										var card = get.cardPile('qinggang', 'field');
										if (card) {
											trigger.source.gain(card, 'gain2', 'log');
										}
									},
								},
							},
						},
						掠财xhe1: {
							trigger: {
								player: 'useCard',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return event.skill == '掠财xhe';
							},
							content() {
								player.draw();
							},
						},
						掠财xhe: {
							enable: 'phaseUse',
							usable: 1,
							viewAs: {
								name: 'shunshou',
							},
							filterCard(card, player) {
								return true;
							},
							selectCard: 2,
							check(card) {
								return 8 - get.value(card);
							},
							complexCard: true,
							ai: {
								wuxie(target, card, player, viewer) {
									if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
										return 0;
									}
								},
								basic: {
									order: 7.5,
									useful: 4,
									value: 9,
								},
								result: {
									target(player, target) {
										if (get.attitude(player, target) <= 0)
											return target.countCards('he', function (card) {
												return card.name == 'tengjia' || get.value(card) > 0;
											}) > 0
												? -1.5
												: 1.5;
										var js = target.getCards('j');
										if (js.length) {
											var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
											if (jj.name == 'shunshou') return 3;
											if (js.length == 1 && get.effect(target, jj, target, player) >= 0) {
												return -1.5;
											}
											return 3;
										}
										return -1.5;
									},
									player(player, target) {
										if (get.attitude(player, target) < 0 && !target.countCards('he')) {
											return 0;
										}
										if (get.attitude(player, target) > 1) {
											var js = target.getCards('j');
											if (js.length) {
												var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
												if (jj.name == 'shunshou') return 1;
												if (js.length == 1 && get.effect(target, jj, target, player) >= 0) {
													return 0;
												}
												return 1;
											}
											return 0;
										}
										return 1;
									},
								},
								tag: {
									loseCard: 1,
									gain: 1,
								},
							},
							group: '掠财xhe1',
						},
						武圣gyzf: {
							audio: 'ext:虎踞江东/audio:2',
							group: '武圣gyzf_damage',
							mod: {
								targetInRange(card) {
									if (card.suit == 'diamond' && card.name == 'sha') return true;
								},
							},
							subSkill: {
								damage: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: {
										source: 'damageBegin',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.card.suit == 'heart';
									},
									forced: true,
									content() {
										trigger.num++;
									},
								},
							},
							enable: ['chooseToRespond', 'chooseToUse'],
							filterCard(card, player) {
								if (get.zhu(player, 'shouyue')) return true;
								return get.color(card) == 'red';
							},
							position: 'he',
							viewAs: {
								name: 'sha',
							},
							viewAsFilter(player) {
								if (get.zhu(player, 'shouyue')) {
									if (!player.countCards('he')) return false;
								} else {
									if (!player.countCards('he', { color: 'red' })) return false;
								}
							},
							prompt: '将一张红牌当【杀】使用或打出',
							check(card) {
								return 4 - get.value(card);
							},
							ai: {
								respondSha: true,
								skillTagFilter(player) {
									if (get.zhu(player, 'shouyue')) {
										if (!player.countCards('he')) return false;
									} else {
										if (!player.countCards('he', { color: 'red' })) return false;
									}
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
									if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
									return true;
								},
								basic: {
									useful: [5, 1],
									value: [5, 1],
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
								tag: {
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
						},
						咆哮gyzf: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'shaMiss',
							},
							forced: true,
							content() {
								player.addTempSkill('咆哮gyzf2');
								player.storage.咆哮gyzf2++;
								player.markSkill('咆哮gyzf2');
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
							},
						},
						咆哮gyzf2: {
							trigger: { source: 'damageBegin' },
							forced: true,
							mark: true,
							audio: '咆哮gyzf',
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.storage.咆哮gyzf2 > 0;
							},
							content() {
								trigger.num += player.storage.咆哮gyzf2;
								player.removeSkill('咆哮gyzf2');
							},
							init(player) {
								player.storage.咆哮gyzf2 = 0;
							},
							intro: { content: '本回合内下一次使用【杀】造成伤害时令伤害值+#' },
						},
						续典: {
							audio: 'ext:虎踞江东/audio:2',
							forced: true,
							mark: true,
							marktext: '典',
							init(player) {
								player.storage.续典 = 0;
							},
							intro: {
								content(storage) {
									return '共有' + storage + '个典';
								},
							},
							trigger: { global: 'useCardAfter' },
							filter(event, player) {
								if (event.player == player) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.color(i) == 'black') {
											return true;
										}
									}
								return false;
							},
							content() {
								if (typeof player.storage.续典 == 'number') {
									player.storage.续典++;
								} else {
									player.storage.续典 = 1;
								}
								player.markSkill('续典');
							},
							group: '续典2',
						},
						续典2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							filter(event, player) {
								if (player.storage.续典) return true;
								return false;
							},
							content() {
								'step 0';
								player.draw(player.storage.续典);
								('step 1');
								event.togain = [];
								event.num = Math.min(ui.discardPile.childNodes.length, player.storage.续典);
								if (event.num) {
									for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
										var current = ui.discardPile.childNodes[i];
										if (get.color(current) == 'black') event.togain.push(current);
										if (event.togain.length == event.num) {
											break;
										}
									}
								}
								if (event.togain.length) player.gain(event.togain, 'gain2');
								('step 2');
								player.storage.续典 = 0;
								player.unmarkSkill('续典');
								// event.card=get.ui.discardPile(function(card){
								// if(get.color(card)=='black') return true;
								// return false;
								// },'ui.discardPile');
								// if(!event.card){
								// event.finish();
								// return;
								// }
								// player.showCards([event.card]);
								// "step 2"
								// player.gain(event.card,'gain2');
								// 'step 3'
								// if(--event.num>0){
								// event.goto(1);
								// }
								// else{
								// player.storage.续典=0;
								// player.unmarkSkill('续典');
								// event.finish();
								// }
							},
							ai: {
								order: 9,
								result: {
									player: 2,
								},
								threaten: 1.2,
							},
						},
						正订: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBefore' },
							content() {
								player.gainMaxHp();
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].chooseToDiscard('he', true, 1);
									}
								}
							},
						},
						马战: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'damageBegin' },
							filter(event, player) {
								if (
									event.source &&
									event.source.countCards('e', function (card) {
										return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4';
									})
								)
									return false;
								return true;
							},
							forced: true,
							content() {
								trigger.num = 0;
							},
						},
						施礼: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: ['phaseDiscardBegin', 'phaseUseBegin'],
							},
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							content() {
								'step 0';
								player.chooseToDiscard('he', true);
								('step 1');
								if (result.bool) {
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									for (var i = 0; i < list.length; i++) {
										list[i].storage.施礼 = result.cards[0];
										list[i].showHandcards();
										list[i].discard(list[i].getCards('he', { suit: list[i].storage.施礼.suit }));
										delete list[i].storage.施礼;
									}
								}
							},
						},
						诱施: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'discardAfter' },
							filter(event, player) {
								var suitre = [];
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (!suitre.includes(i.suit)) suitre.push(i.suit);
									}
								if (suitre.length >= 4) return false;
								return true;
							},
							content() {
								var wrsuit = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									wrsuit.push(trigger.cards[i].suit);
								}
								var suits = ['heart', 'diamond', 'spade', 'club'];
								var suitc = [];
								for (var i = 0; i < suits.length; i++) {
									if (!wrsuit.includes(suits[i])) suitc.push(suits[i]);
								}
								for (var i = 0; i < suitc.length; i++) {
									if (
										get.cardPile(function (card) {
											return card.suit == suitc[i];
										})
									) {
										player.gain(
											get.cardPile(function (card) {
												return card.suit == suitc[i];
											}),
											'draw'
										);
										game.log(player, '从牌堆摸了一张' + get.translation(suitc[i]) + '牌');
									}
								}
							},
						},
						暗伤1: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { source: 'damageBegin' },
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'wanjian';
							},
							content() {
								trigger.num++;
								player.chooseToDiscard('he', true);
							},
						},
						暗伤: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'shaBegin' },
							logTarget: 'target',
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								player.useCard({ name: 'wanjian' }, trigger.target);
								player.addTempSkill('暗伤1', 'damageAfter');
							},
							ai: {
								threaten: 0.5,
							},
						},
						纵火: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && get.color(event.card) == 'red';
							},
							content() {
								player.draw(2);
								trigger.num += player.storage.纵火2;
								player.storage.纵火2 = 0;
								player.unmarkSkill('纵火2');
							},
							group: '纵火2',
						},
						纵火2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'loseAfter' },
							forced: true,
							filter(event, player) {
								if (player != _status.currentPhase) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.color(i) == 'red') return true;
									}
								return false;
							},
							mark: true,
							intro: {
								content(storage) {
									return '已于回合内失去过' + storage + '张红色牌';
								},
							},
							init(player) {
								player.storage.纵火2 = 0;
							},
							content() {
								var redcardnum = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									if (get.color(trigger.cards[i]) == 'red') redcardnum.push(trigger.cards[i]);
								}
								if (typeof player.storage.纵火2 == 'number') {
									player.storage.纵火2 += redcardnum.length;
								} else {
									player.storage.纵火2 = redcardnum.length;
								}
								player.markSkill('纵火2');
							},
						},
						假义: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.countCards('he', { color: 'black' }) > 0;
							},
							content() {
								'step 0';
								var num = player.countCards('he', { color: 'black' });
								var cards = player.getCards('he', { color: 'black' });
								player.discard(cards);
								for (var i = 0; i < num; i++) {
									var list = ['trick', 'basic', 'equip'].randomGet();
									player.gain(game.createCard(get.inpile(list).randomGet(), 'red'));
									player.$draw();
								}
								('step 1');
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								for (var i = 0; i < list.length; i++) {
									list[i].showHandcards();
									list[i].discard(list[i].getCards('he', { color: 'black' }));
								}
							},
						},
						密访: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('密访'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (get.attitude(player, target) > 0) return 0;
										return get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool) {
									trigger.num--;
									player.chooseToDiscard('he', true);
									event.target = result.targets[0];
								}
								('step 2');
								if (result.bool) {
									target.storage.密访 = result.cards[0];
									target.showHandcards();
								}
								('step 3');
								if (target.countCards('he', { suit: target.storage.密访.suit })) player.gainPlayerCard(target, target.countCards('he', { suit: target.storage.密访.suit }));
								delete target.storage.密访;
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										return -target.countCards('he') - (player.countCards('h', 'du') ? 1 : 0);
									},
								},
								threaten: 2,
							},
						},
						家书: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'gainAfter' },
							forced: true,
							filter(event, player) {
								if (event.parent.parent.name == 'phaseDraw') return false;
								return event.cards && event.cards.length;
							},
							mark: true,
							intro: {
								content(storage) {
									return '共有' + storage + '枚<书>';
								},
							},
							init(player) {
								player.storage.家书 = 0;
							},
							content() {
								if (typeof player.storage.家书 == 'number') {
									player.storage.家书 += trigger.cards.length;
								} else {
									player.storage.家书 = trigger.cards.length;
								}
								player.markSkill('家书');
								if (typeof player.storage.家书 == 'number' && player.storage.家书 >= 4) {
									player.storage.家书 = 0;
									player.unmarkSkill('家书');
									player.removeSkill('家书');
									player.addSkill('敬义');
									player.addSkill('敬义1');
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].addSkill('敬义2');
										}
									}
									player.node.avatar.setBackgroundImage('extension/虎踞江东/image/huban2.jpg');
									if (player.identity != 'zhu') player.identity = 'zhong';
									player.setIdentity('zhong');
									player.node.identity.dataset.color = 'zhong';
									if (lib.config.mode == 'guozhan') {
										player.identity = 'shu';
										player.setIdentity();
										player._group = 'shu';
										player.identityShown = true;
										lib.character[player.name][1] = 'shu';
									}
								}
							},
						},
						敬义: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'damageBegin' },
							filter(event, player) {
								return event.player.isFriendsOf(player) && event.card && get.color(event.card) == 'red';
							},
							content() {
								trigger.num--;
							},
						},
						敬义1: {
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return event.player.isEnemiesOf(player) && event.card && get.color(event.card) == 'red';
							},
							trigger: { global: 'damageBegin' },
							content() {
								trigger.num++;
							},
						},
						敬义2: {
							mod: {
								cardUsable(card, player, num) {
									if (get.color(card) == 'red') return Infinity;
								},
								targetInRange(card, player, target, now) {
									var color = get.color(card);
									if (color == 'red') return true;
								},
							},
						},
						佯败: {
							audio: 'ext:虎踞江东/audio:2',
							mod: {
								globalTo(from, to, distance) {
									return distance + to.storage.佯败;
								},
							},
							trigger: { player: 'damageBegin' },
							mark: true,
							intro: {
								content(storage) {
									return '其他角色与你计算距离加' + storage;
								},
							},
							init(player) {
								player.storage.佯败 = 0;
							},
							content() {
								if (typeof player.storage.佯败 == 'number') {
									player.storage.佯败++;
								} else {
									player.storage.佯败 = 1;
								}
								player.markSkill('佯败');
							},
							group: '佯败_cancel',
							subSkill: {
								cancel: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: { player: 'phaseEnd' },
									filter(event, player) {
										return typeof player.storage.佯败 == 'number' && player.storage.佯败 > 0;
									},
									content() {
										'step 0';
										player
											.chooseTarget(get.prompt('佯败'), function (card, player, target) {
												return target != player;
											})
											.set('ai', function (target) {
												return -get.attitude(player, target);
											});
										('step 1');
										if (result.bool) {
											result.targets[0].damage(player.storage.佯败);
											player.storage.佯败 = 0;
										}
									},
								},
							},
						},
						奉令: {
							group: ['奉令_mark', '奉令_b', '奉令_c'],
							trigger: { player: 'phaseBegin', global: 'roundStart' },
							forced: true,
							mark: true,
							intro: {
								content(storage) {
									return '共有' + storage + '个令';
								},
							},
							init(player) {
								player.storage.奉令 = 0;
							},
							filter(event, player) {
								return typeof player.storage.奉令 == 'number' && player.storage.奉令 < 3;
							},
							content() {
								player.storage.奉令++;
								player.markSkill('奉令');
							},
							subSkill: {
								mark: {
									mod: {
										maxHandcard(player, num) {
											return Infinity;
										},
									},
									trigger: { player: 'phaseDrawBegin' },
									filter(event, player) {
										return typeof player.storage.奉令 == 'number' && player.storage.奉令 >= 1;
									},
									content() {
										trigger.num += 5;
									},
								},
								b: {
									trigger: { player: 'damageEnd' },
									filter(event, player) {
										return typeof player.storage.奉令 == 'number' && player.storage.奉令 >= 2;
									},
									content() {
										player.draw();
									},
								},
								c: {
									trigger: { source: 'damageBegin' },
									mod: {
										cardUsable(card, player, num) {
											return Infinity;
										},
										targetInRange(card, player, target, now) {
											return true;
										},
									},
									filter(event, player) {
										return typeof player.storage.奉令 == 'number' && player.storage.奉令 == 3;
									},
									content() {
										trigger.num++;
									},
								},
							},
						},
						仗势: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'gainAfter' },
							forced: true,
							filter(event, player) {
								if (event.parent.parent.name == 'phaseDraw') return false;
								return event.cards && event.cards.length;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'red') return 2;
									return -0.5;
								});
								('step 1');
								if (result.bool) {
									if (typeof player.storage.奉令 == 'number' && player.storage.奉令 >= 1) {
										player.storage.奉令--;
										player.markSkill('奉令');
									} else {
										player.loseHp();
									}
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].damage();
										}
									}
								} else {
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].chooseToDiscard('he', true);
										}
									}
								}
							},
						},
						锐裂: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'gameStart', player: 'enterGame' },
							forced: true,
							content() {
								'step 0';
								var x = player.countCards('he');
								player.draw(x, false);
								player.$draw(x);
								player.chooseTarget(get.prompt('锐裂'), [1, x], true).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										player.gainPlayerCard(result.targets[i], 'he', true);
									}
								}
							},
						},
						碎围: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'dyingBegin' },
							content() {
								player.removeSkill('锐裂');
								player.addSkill('锐裂2');
							},
						},
						锐裂2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								var x = player.countCards('he');
								player.draw(x, false);
								player.$draw(x);
								player.chooseTarget(get.prompt('锐裂2'), [1, x], true).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										player.gainPlayerCard(result.targets[i], 'he', true);
									}
									player.removeSkill('锐裂2');
								}
							},
						},
						横江: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: ['phaseBegin', 'damageEnd'] },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('横江')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var source = result.targets[0];
									var x;
									if (trigger.num) {
										x = trigger.num;
									} else {
										x = 1;
									}
									if (source.hasSkill('横江2')) {
										source.storage.横江2 += x;
									} else {
										source.storage.横江3 = player;
										source.storage.横江2 = x;
										source.addTempSkill('横江2', { player: 'phaseAfter' });
									}
								}
							},
							ai: {
								maixie_defend: true,
							},
						},
						横江2: {
							audio: 'ext:虎踞江东/audio:2',
							mark: true,
							intro: {
								content: '手牌上限-#',
							},
							mod: {
								maxHandcard(player, num) {
									return num - player.storage.横江2;
								},
							},
							onremove(player) {
								delete player.storage.横江2;
								delete player.storage.横江3;
							},
							trigger: { player: 'phaseEnd' },
							filter(event, player) {
								return player.storage.横江3.isIn();
							},
							forced: true,
							content() {
								player.storage.横江3.draw();
							},
						},
						惊澜: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							content() {
								player.chooseToDiscard('he', true, 3);
								player.recover();
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].damage('nosource', 'fire');
										list[i].draw(4);
									}
								}
							},
						},
						连诬: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									for (var i = 0; i < list.length; i++) {
										player.gainPlayerCard(list[i], 'he', true);
									}
								}
								player.storage.连诬 = ['black', 'red'].randomGet();
								player.showHandcards();
								player.loseHp();
								player.discard(player.getCards('he', { color: player.storage.连诬 }));
								delete player.storage.连诬;
							},
						},
						勋德: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'damageEnd' },
							content() {
								'step 0';
								trigger.player.judge(function (card) {
									if (card.number <= 6) return 2;
									return -0.5;
								});
								('step 1');
								if (result.bool) {
									if (trigger.source != undefined) trigger.source.chooseToDiscard('he', true);
								} else {
									trigger.player.gain(result.card);
									trigger.player.$gain2(result.card);
								}
							},
						},
						臣节: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'judge' },
							forced: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player
									.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('臣节'), function (card) {
										return get.color(card) == get.color(trigger.player.judging[0]);
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
									player.respond(result.cards, 'highlight');
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
									trigger.player.judging[0].discard();
									trigger.player.judging[0] = result.cards[0];
									if (!get.owner(result.cards[0], 'judge')) {
										trigger.position.appendChild(result.cards[0]);
									}
									game.log(trigger.player, '的判定牌改为', result.cards[0]);
									player.draw(2);
								}
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						资庸: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseDrawBegin' },
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('资庸'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].useCard({ name: 'sha' }, player, false);
									result.targets[0].useCard({ name: 'sha' }, player, false);
									player.useCard({ name: 'sha' }, result.targets[0], false);
									trigger.num++;
								}
							},
							ai: {
								threaten: 1.3,
							},
						},
						平乐: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { target: 'useCardToBegin' },
							forced: true,
							filter(event, player) {
								return get.color(event.card) != 'red' && event.player != player;
							},
							content() {
								'step 0';
								var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
								trigger.player
									.chooseToDiscard('平乐:弃置一张黑色牌,否则该牌对' + get.translation(player) + '无效', function (card) {
										return get.color(card) == 'black';
									})
									.set('ai', function (card) {
										if (_status.event.eff > 0) {
											return 10 - get.value(card);
										}
										return 0;
									})
									.set('eff', eff);
								('step 1');
								if (result.bool == false) {
									trigger.cancel();
								}
							},
						},
						雄异xy: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								if (!player.storage.雄异xy) {
									var pos = 2;
									var fellow = game.addFellow(pos, 'jxz_hansui');
									fellow.side = player.side;
									if (player.identity != 'zhu') fellow.identity = player.identity;
									else fellow.identity = 'zhong';
									if (lib.config.mode == 'guozhan') fellow._group = player.identity;
									fellow.setIdentity('忠臣');
									fellow.draw(fellow.maxHp);
									fellow.node.identity.dataset.color = fellow.identity;
									//------------------------------------------------------------------
									var fellow1 = game.addFellow(pos, 'pangde');
									fellow1.side = player.side;
									if (player.identity != 'zhu') fellow1.identity = player.identity;
									else fellow1.identity = 'zhong';
									if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
									fellow1.setIdentity('忠臣');
									fellow1.draw(fellow1.maxHp);
									fellow1.node.identity.dataset.color = fellow1.identity;
									player.storage.雄异xy = true;
								}
								('step 1');
								player.chooseTarget(get.prompt('雄异xy'), [1, 4]);
								('step 2');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].draw(4);
										result.targets[i].recover();
									}
								}
							},
						},
						宵袭: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseUseBegin' },
							forced: true,
							content() {
								'step 0';
								player.gainMaxHp(2);
								player
									.chooseTarget(get.prompt('宵袭'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', Math.min(2, player.countCards('he')));
									player.useCard({ name: 'sha' }, result.targets[0], false);
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						熊扰: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								event.X = player.maxHp;
								player
									.chooseTarget(get.prompt('熊扰'), [1, 4], function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										if (!result.targets[i].hasSkill('fengyin')) {
											result.targets[i].addTempSkill('fengyin');
										}
									}
									player.maxHp = 7;
									player.draw(Math.abs(event.X - 7));
								}
							},
						},
						反诗: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var num = Math.floor(1 + Math.random() * 19);
								event.num = num;
								event.x = num + 1;
								('step 1');
								game.JPG0('蔡瑁的反诗1', 1000);
								('step 2');
								if (--event.num > 0) {
									event.goto(1);
								}
								('step 3');
								var card0 = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									var current = ui.cardPile.childNodes[i];
									if (get.tag(current, 'damage')) card0.push(current);
								}
								for (var j = 0; j < ui.discardPile.childNodes.length; j++) {
									var curr = ui.discardPile.childNodes[j];
									if (get.tag(curr, 'damage')) card0.push(curr);
								}
								event.card0 = card0;
								('step 4');
								for (var i = 0; i < event.x; i++) {
									player.gain(game.createCard(event.card0.randomGet()));
									player.$draw();
								}
							},
						},
						//ui.appendChild('<img border="0px solid" style="width:'+num*10+'px" src="蔡瑁的反诗'+num+'.gif">');
						害仁: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'gainEnd' },
							filter(event, player) {
								return event.player != player;
							},
							usable: 1,
							content() {
								game.JPG0('蔡瑁的反诗1', 1000);
								var arr = [13, 6, 10, 6, 7, 8, 5, 5, 3, 3, 5, 6, 6, 4, 8]; //数组
								var x = num - 1;
								player.gainPlayerCard(trigger.player, arr[x], 'he', true);
								for (var i = 0; i < arr[x]; i++) {
									trigger.player.gain(game.createCard('dilu'));
								}
								trigger.player.$draw(arr[x]);
								trigger.player.addTempSkill('卢越');
							},
						},
						卢越: {
							audio: 'ext:虎踞江东/audio:2',
							enable: ['chooseToRespond'],
							filterCard(card) {
								return card.name == 'dilu';
							},
							viewAs: { name: 'shan' },
							viewAsFilter(player) {
								if (!player.countCards('he', { name: 'dilu' })) return false;
							},
							prompt: '将一张的卢当闪使用或打出',
							check() {
								return 1;
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('h', { color: 'black' })) return false;
								},
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan') && current < 0) return 0.6;
									},
								},
							},
						},
						资战: {
							audio: 'ext:虎踞江东/audio:2',
							usable: 1,
							trigger: { global: 'recoverEnd' },
							content() {
								trigger.player.damage();
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('tao'));
										list[i].$draw();
									}
								}
							},
						},
						狼灭执剑昆吾: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseEnd' },
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								player
									.chooseTarget(get.prompt('狼灭执剑昆吾'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true);
									result.targets[0].damage();
								}
							},
						},
						落英玉露清辉: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'discardAfter' },
							content() {
								//QQQ
								var list = [];
								for (var i of Array.from(ui.cardPile.childNodes)) {
									if (i.suit == 'club') list.push(i);
								}
								player.gain(list, 'gain2');
							},
						},
						酒诗玉露清辉: {
							group: ['酒诗玉露清辉1', '酒诗玉露清辉3'],
						},
						酒诗玉露清辉1: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'chooseToUse',
							filter(event, player) {
								if (event.parent.name == 'phaseUse') {
									return lib.filter.filterCard({ name: 'jiu' }, player, event);
								}
								if (event.type != 'dying') return false;
								if (player != event.dying) return false;
								return true;
							},
							content() {
								if (_status.event.getParent(2).type == 'dying') {
									event.dying = player;
								}
								player.turnOver();
								player.useCard({ name: 'jiu' }, player);
							},
							ai: {
								save: true,
								skillTagFilter(player) {
									return player.hp <= 0 && !player.isTurnedOver();
								},
								order: 5,
								result: {
									player(player) {
										if (_status.event.parent.name == 'phaseUse') {
											if (player.countCards('h', 'jiu') > 0) return 0;
											if (player.getEquip('zhuge') && player.countCards('h', 'sha') > 1) return 0;
											if (!player.countCards('h', 'sha')) return 0;
											var targets = [];
											var target;
											var players = game.filterPlayer();
											for (var i = 0; i < players.length; i++) {
												if (get.attitude(player, players[i]) < 0) {
													if (player.canUse('sha', players[i], true, true)) {
														targets.push(players[i]);
													}
												}
											}
											if (targets.length) {
												target = targets[0];
											} else {
												return 0;
											}
											var num = get.effect(target, { name: 'sha' }, player, player);
											for (var i = 1; i < targets.length; i++) {
												var num2 = get.effect(targets[i], { name: 'sha' }, player, player);
												if (num2 > num) {
													target = targets[i];
													num = num2;
												}
											}
											if (num <= 0) return 0;
											var e2 = target.getEquip(2);
											if (e2) {
												if (e2.name == 'tengjia') {
													if (!player.countCards('h', { name: 'sha', nature: 'fire' }) && !player.getEquip('zhuque')) return 0;
												}
												if (e2.name == 'renwang') {
													if (!player.countCards('h', { name: 'sha', color: 'red' })) return 0;
												}
												if (e2.name == 'baiyin') return 0;
											}
											if (player.getEquip('guanshi') && player.countCards('he') > 2) return 1;
											return target.countCards('h') > 3 ? 0 : 1;
										}
										if (player == _status.event.dying || player.isTurnedOver()) return 3;
									},
								},
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
						},
						酒诗玉露清辉3: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'turnOverBegin' },
							check(event, player) {
								return player.isTurnedOver();
							},
							filter(event, player) {
								return player.num('he', (card) => {
									return card.suit == 'club';
								});
							},
							content() {
								player.chooseToDiscard(
									'酒诗:请弃置一张♣️️️牌',
									'he',
									(card) => {
										return card.suit == 'club';
									},
									true
								);
								trigger.cancel();
							},
						},
						七章玉露清辉: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { source: 'damageEnd' },
							filter(event, player) {
								return event.num > 1;
							},
							content() {
								var list = [];
								var namelist = [];
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									var namex = node.name;
									if (!namelist.includes(namex) && get.type(node, 'trick') == 'trick') {
										list.push(node);
										namelist.push(namex);
										if (list.length >= 7) break;
									}
								}
								if (list.length < 7) {
									for (var i = 0; i < ui.discardPile.childElementCount; i++) {
										var node = ui.discardPile.childNodes[i];
										var namex = node.name;
										if (!namelist.includes(namex) && get.type(node, 'trick') == 'trick') {
											list.push(node);
											namelist.push(namex);
											if (list.length >= 7) break;
										}
									}
								}
								player.gain(list, 'gain2');
							},
						},
						骑勇: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'shaBegin' },
							forced: true,
							usable: 1,
							filter: (event, player) => player.countCards('he') > 0,
							content() {
								'step 0';
								player.chooseToDiscard('he', true);
								('step 1');
								var list = game.filterPlayer((current) => current.isEnemiesOf(player));
								list.sort(lib.sort.seat);
								player.useCard({ name: 'sha' }, list, false);
								if (get.color(result.cards[0]) == 'black') {
									list.map((enemy) => enemy.chooseToDiscard('he', true));
									player.changeHujia();
								}
								if (get.color(result.cards[0]) == 'red') {
									list.map((enemy) => enemy.chooseToDiscard('he', true));
									player.draw(list.length);
								}
								//西凉铁骑 list.map(enemy => enemy.chooseToDiscard(enemy.countCards('e'),'he', true)); list.map(enemy => enemy.damage(enemy.countCards('e')));
							},
						},
						戍绝: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'chooseToRespondBegin' },
							filter(event, player) {
								return !event.responded;
							},
							usable: 2,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('戍绝'), function (card, player, target) {
										return target.countCards('he');
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
								} else event.finish();
								('step 2');
								player.discardPlayerCard('he', event.target, 'visible', '请选择其一张牌当做你需要使用的牌使用或打出');
								('step 3');
								if (result.bool) {
									game.log(player, '戍绝发动成功');
									const card = result.cards[0];
									if (get.type(card, 'trick') == 'trick') player.draw();
									if (get.type(card) == 'equip') player.recover();
									trigger.untrigger();
									trigger.responded = true;
									trigger.result = { bool: true };
								}
							},
							ai: {
								effect: {
									target(card, player, target, effect) {
										if (get.tag(card, 'respondShan')) return 0.7;
										if (get.tag(card, 'respondSha')) return 0.7;
									},
								},
							},
							group: '戍绝2',
						},
						戍绝2: {
							enable: 'chooseToUse',
							filter(event, player) {
								return event.type != 'wuxie' && event.type != 'trickuse';
							},
							usable: 2,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('戍绝'), function (card, player, target) {
										return target.countCards('he');
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
								} else event.finish();
								('step 2');
								player.discardPlayerCard('he', event.target, 'visible', '请选择其一张牌当做你需要使用的牌使用或打出');
								('step 3');
								const card = result.cards[0];
								if (get.type(card, 'trick') == 'trick') player.draw();
								if (get.type(card) == 'equip') player.recover();
								player.chooseUseTarget('jiu', true);
								player.chooseUseTarget('sha', true);
								('step 4');
								player.chooseTarget(get.prompt('戍绝')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 5');
								if (result.bool) {
									result.targets[0].chooseUseTarget('tao', true);
								}
							},
						},
						// 戍绝: {
						// enable: ['chooseToUse', 'chooseToRespond'],
						// usable:2,
						// filterCard: event => get.type(event.card) == 'basic',
						// viewAs: (event) => ({
						// name: event.card.name
						// }),
						// prompt: '请选择一名有牌的角色的一张牌将之当做你需要使用或打出的基本牌使用或打出之',
						// check: card => 8 - get.value(card),
						// selectTarget: 1,
						// filterTarget: (target) => target.countCards('he') > 0,
						// content(){
						// 'step 0'
						// player.chooseCardButton(target.getCards('he'), true, `请选择其一张牌当做${get.translation(trigger.card)}使用或打出`);
						// 'step 1'
						// const card = result.links[0];
						// if(get.type(card,'trick')=='trick') player.draw();
						// if(get.type(card)=='equip') player.recover();
						// player.chooseUseTarget(card, true, target);
						// },
						// ai: {
						// order: 4,
						// skillTagFilter: player => player.hasSkill('戍绝'),
						// save: true,
						// basic: {
						// useful: 1,
						// value: 4.5
						// },
						// result: {
						// player: player => 1
						// }
						// },
						// },
						龙戍: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseEnd' },
							content() {
								trigger.player.countCards('h') > player.countCards('h') ? trigger.player.chooseToDiscard('he', true) : player.draw();
							},
						},
						阵弈: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								function addFellows(num, namesArr, identityObj = { content: '忠臣', color: '#000000' }, spacing = 120) {
									for (var i = 0; i < num; i++) {
										const fellow = game.addFellow(num, namesArr[i]);
										fellow.side = player.side;
										fellow.identity = player.identity !== 'zhu' ? player.identity : 'zhong';
										if (lib.config.mode === 'guozhan') fellow._group = player.identity;
										fellow.setIdentity(`<font color="${identityObj.color}">${identityObj.content}</font>`);
										fellow.draw(fellow.maxHp);
									}
								}
								addFellows(3, ['xiahoulan夏侯岚', 'guanyinping', 'zhangxingcai'], { content: '阵弈', color: 'ff3366' }, 240);
								player.removeSkill('阵弈');
							},
						},
						剑合: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 7,
							filterTarget: true,
							selectTarget: 1,
							content() {
								target.chooseToDiscard('he', true, 2, '你选择弃置两张牌' + get.translation(player) + '对你造成一点雷电伤害并摸两张牌');
								target.damage('thunder');
								player.draw(2);
							},
							ai: {
								order: 4.5,
								result: {
									target(player, target) {
										return get.damageEffect(target, player, player, 'thunder');
									},
								},
							},
						},
						穿屋: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								source: 'damageEnd',
								player: 'damageEnd',
							},
							usable: 3,
							forced: true,
							content() {
								'step 0';
								var range = player.getAttackRange();
								var num = range + player.getSkills().length;
								player.draw(num);
								('step 1');
								player.chooseTarget(get.prompt('穿屋')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									result.targets[0].addTempSkill('穿屋skill', { player: 'phaseAfter' });
								}
							},
							ai: {
								order: 4,
								result: {
									player(player) {
										return 1;
									},
								},
							},
						},
						穿屋skill: {
							init(player, skill) {
								let targetSkill = player.getSkills(true, false).randomGet();
								player.disableSkill(skill, targetSkill);
							},
							onremove(player, skill) {
								player.enableSkill(skill);
							},
							mark: true,
							intro: {
								content(storage, player, skill) {
									let list = Object.keys(player.disabledSkills);
									if (list.length) {
										var str = '失效技能:';
										for (var i = 0; i < list.length; i++) {
											if (lib.translate[list[i] + '_info']) {
												str += get.translation(list[i]) + '、';
											}
										}
										return str.slice(0, str.length - 1);
									}
								},
							},
						},
						弼昏: {
							audio: 'ext:虎踞江东/audio:2',
							group: '弼昏2',
							trigger: { player: 'useCardToBegin' },
							filter(event, player) {
								return event.target != player;
							},
							content() {
								'step 0';
								trigger.cancel();
								player.popup('<span  style="color: #9400D3">取消</span>');
								player.chooseTarget(get.prompt('弼昏')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.linergbl(result.targets[0], { color: [84, 0, 129] });
									result.targets[0].gain(trigger.card, 'gain2');
								}
							},
						},
						弼昏2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'useCardToBegin' },
							usable: 1,
							filter(event, player) {
								return event.player != player;
							},
							content() {
								trigger.cancel();
								player.popup('<span  style="color: #9400D3">取消</span>');
								player.linergbl(trigger.player, { color: [84, 0, 129] });
								player.gain(trigger.card, 'gain2');
							},
						},
						金龙贺收: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							nobracket: true,
							async content(event, trigger, player) {
								//QQQ
								game.playAudio('../extension/虎踞江东/audio/jinlong金龙音效.mp3');
								game.mp40('zhaoyun百战金甲Sptx2');
								var value = [66, 666].randomGet();
								var num = 0;
								var card = [];
								for (var i of Array.from(ui.cardPile.childNodes)) {
									num += get.value(i);
									card.push(i);
									if (num > value) break;
								}
								player.gain(card, 'draw');
							},
						},
						狼枭: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							async content(event, trigger, player) {
								//QQQ
								var num = [];
								for (var i = 0; i < 9; i++) {
									num.push(i);
								}
								var { result } = await player.chooseTarget(get.prompt('狼枭')).set('ai', (target) => -get.attitude(player, target));
								if (result.targets && result.targets[0]) {
									var t = result.targets[0];
									switch (num.randomGet()) {
										case 1: {
											player.popup(`<span style="color: #db7093;">发动①!</span>`);
											t.damage(2, 'fire');
											break;
										}
										case 2: {
											player.popup(`<span style="color: #20b2aa;">发动②!</span>`);
											t.damage(1, 'fire');
											player.draw(2);
											break;
										}
										case 3: {
											player.popup(`<span style="color: #d63e92;">发动③!</span>`);
											var num = t.maxHp - t.hp;
											if (num > 0) t.loseMaxHp(num);
											t.loseMaxHp(1);
											player.draw(2);
											break;
										}
										case 4: {
											player.popup(`<span style="color: #daa520;">发动④!</span>`);
											var num = t.maxHp - t.hp;
											if (num > 0) t.loseMaxHp(num);
											t.loseMaxHp(2);
											break;
										}
										case 5: {
											player.popup(`<span style="color: #dd340f;">发动⑤!</span>`);
											t.damage(1, 'fire');
											var list = [];
											for (var i = 0; i < lib.inpile.length; i++) {
												if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
											}
											player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
											player.changeHujia();
											break;
										}
										case 6: {
											player.popup(`<span style="color: #ff7f50;">发动⑥!</span>`);
											t.damage(1, 'fire');
											var list = [];
											for (var i = 0; i < lib.inpile.length; i++) {
												if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
											}
											player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
											player.phase('nodelay');
											player.skip('phaseJudge');
											player.skip('phaseDraw');
											player.skip('phaseUse');
											player.skip('phaseDiscard');
											break;
										}
										case 7: {
											player.popup(`<span style="color: #3cb371;">发动⑦!</span>`);
											t.damage(2, 'fire');
											var list = [];
											for (var i = 0; i < lib.inpile.length; i++) {
												if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
											}
											player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
											player.changeHujia(2);
											player.phase('nodelay');
											player.skip('phaseJudge');
											player.skip('phaseDraw');
											player.skip('phaseUse');
											player.skip('phaseDiscard');
											break;
										}
										case 8: {
											player.popup(`<span style="color: #4169e1;">发动⑧!</span>`);
											var num = t.maxHp - t.hp;
											if (num > 0) t.loseMaxHp(num);
											t.loseMaxHp(2);
											var list = [];
											for (var i = 0; i < lib.inpile.length; i++) {
												if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
											}
											player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
											player.changeHujia(2);
											player.phase('nodelay');
											player.skip('phaseJudge');
											player.skip('phaseDraw');
											player.skip('phaseUse');
											player.skip('phaseDiscard');
											break;
										}
										default: {
											event.finish();
											break;
										}
									}
								}
							},
						},
						算袭: {
							usable: 1,
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCardAfter' },
							filter(event, player) {
								if (event.parent.name == '算袭') return false;
								if (player.storage.算袭 >= 1) return false;
								if (_status.currentPhase != player) return false;
								if (event.parent.parent.name != 'phaseUse') return false;
								if (!event.targets || !event.card) return false;
								if (get.info(event.card).complexTarget) return false;
								if (!lib.filter.cardEnabled(event.card, player, event.parent)) return false;
								var type = get.type(event.card);
								if (type != 'basic' && type != 'trick') return false;
								var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
								var targets = event._targets || event.targets;
								for (var i = 0; i < targets.length; i++) {
									if (!targets[i].isIn()) return false;
									if (!player.canUse({ name: event.card.name }, targets[i], false, false)) {
										return false;
									}
								}
								return true;
							},
							check(event, player) {
								if (get.tag({ name: event.card.name }, 'norepeat')) return false;
								return true;
							},
							content() {
								'step 0';
								player.storage.算袭++;
								var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
								var n = [1, 2].randomGet();
								for (var i = 0; i < n; i++) {
									player.useCard(card, (trigger._targets || trigger.targets).slice(0));
								}
								event.n = n;
								player.chooseTarget(get.prompt('算袭')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].loseMaxHp(event.n);
								}
								player.draw(event.n);
							},
							ai: {
								threaten: 1.3,
							},
							group: '算袭_clear',
							subSkill: {
								clear: {
									trigger: { player: 'phaseBefore' },
									silent: true,
									content() {
										player.storage.算袭 = 0;
									},
								},
							},
						},
						带砺: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								'step 0';
								if (player.countCards('h') % 2 === 1) {
									event.ny = 1;
									player.draw(3);
									player.chooseTarget(1, '请选择一名角色令其翻面').set('ai', (target) => -get.attitude(player, target)); //QQQ
								} else {
									event.ny = 0;
									var noDamageCardsNum = player.getCards('h').filter(function (card) {
										return !get.tag(card, 'damage');
									}).length;
									event.n = noDamageCardsNum;
									player.chooseTarget('请选择一名角色对其使用你手牌中非伤害标签牌数张杀');
								}
								('step 1');
								if (result.bool && event.ny == 1) {
									result.targets[0].turnOver();
								}
								if (result.bool && event.ny == 0) {
									for (var i = 0; i < event.n; i++) {
										player.useCard(result.targets[0], { name: 'sha' }, false);
									}
								}
							},
						},
						扞难: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filterTarget(card, player, target) {
								return player != target && target.countCards('h') > 0;
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool) {
									target.damage(2);
								} else {
									target.damage();
								}
							},
						},
						借兵: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'damageEnd' },
							content() {
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
								}
								player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
								if (trigger.source != undefined) player.useCard(trigger.source, game.createCard(list.randomGet()), false);
							},
						},
						wushengguanjueguanyu: {
							audio: 4,
							group: 'wushengguanjueguanyu2',
							enable: ['chooseToUse', 'chooseToRespond'],
							viewAs: { name: 'sha' },
							filterCard() {
								return false;
							},
							viewAsFilter(player) {
								return true;
							},
							selectCard: -1,
							mark: false,
							precontent() {
								'step 0';
								player.chooseTarget(get.prompt('wushengguanjueguanyu')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.choosePlayerCard(result.targets[0], true, 'he');
									event.target = result.targets[0];
								} else event.finish();
								('step 2');
								if (result.bool) {
									var target = event.target;
									target.showCards(result.cards);
									event.card2 = result.cards[0];
									if (!target.hasSkill('fengyin')) target.addTempSkill('fengyin');
									target.addTempSkill('yijue2');
									player.gain(event.card2, target, 'give');
									player.recover();
								}
								player.useCard(event.target, { name: 'sha' }, false);
							},
							prompt: '<span style="color:red">视为使用或打出一张杀</span>',
						},
						wushengguanjueguanyu2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return player.num('he', (card) => card.name == 'shandian' || card.name == 'shuiyanqijunx' || card.name == 'hongshui');
							},
							content() {
								'step 0';
								player.chooseCard('<span class="redtext" style="color:red">选择展示一张闪电或水淹七军或洪水</span>', (card) => card.name == 'shandian' || card.name == 'shuiyanqijunx' || card.name == 'hongshui');
								('step 1');
								if (result.bool) {
									player.showCards(result.cards);
									trigger.num += result.cards[0].number;
								}
							},
						},
						weizhenguanjueguanyu: {
							group: ['weizhenguanjueguanyu3', 'weizhenguanjueguanyu4'],
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('weizhenguanjueguanyu'), [1, 7]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var Enum = 0;
									result.targets.map((target) => {
										var num = target.countCards('he', {
											type: 'equip',
										});
										Enum += num;
										target.discard(
											target.getCards('he', {
												type: 'equip',
											})
										);
									});
									player.draw(2 + Enum);
									result.targets.map((target) => {
										player.useCard(target, game.createCard('shandian'));
										player.useCard(target, game.createCard('hongshui'));
									});
								}
								('step 2');
								//const cards = [...new Array(7).fill(game.createCard('shuiyanqijunx')), ...new Array(7).fill(game.createCard("shandian")), ...new Array(7).fill(game.createCard("hongshui"))];
								var cards = [];
								for (var i = 0; i < 7; i++) {
									cards.push(game.createCard('shuiyanqijunx'));
									cards.push(game.createCard('shandian'));
									cards.push(game.createCard('hongshui'));
								}
								player.gain(cards, 'draw');
							},
						},
						weizhenguanjueguanyu3: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'judgeBegin' },
							filter(event, player) {
								return event.card && (event.card.name == 'shandian' || event.card.name == 'hongshui');
							},
							content() {
								trigger.player.addTempSkill('weizhenguanjueguanyu2', 'judgeAfter');
								trigger.player.goMad({ player: 'phaseAfter' });
							},
						},
						weizhenguanjueguanyu2: {
							mod: {
								judge(player, result) {
									if (_status.event.type == 'phase') {
										if (result.bool == false) {
											result.bool = null;
										} else {
											result.bool = false;
										}
									}
								},
							},
						},
						weizhenguanjueguanyu4: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCardBegin' },
							filter(event, player) {
								return event.card.name == 'shuiyanqijunx';
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('weizhenguanjueguanyu'), [1, 7], function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									trigger.targets = [...new Set([...trigger.targets, ...result.targets])];
								}
							},
						},
						gushe鼓舌: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 3,
							content() {
								'step 0';
								game.JPG0('wanglang骧龙御宇dhtx', 2500);
								player.judge();
								('step 1');
								event.x = result.number;
								('step 2');
								player.chooseTarget(get.prompt('gushe鼓舌'), [1, 3]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets.forEach((i) => {
										i.chooseToDiscard('he', true);
									});
									result.targets.forEach((i) => {
										var num = event.x - i.countCards('h');
										player.draw(1 + Math.abs(num));
									});
								}
							},
						},
						jici激词: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'loseEnd' },
							filter(event, player) {
								return player.countCards('he', { color: 'black' }) > event.player.countCards('he', { color: 'black' }) || player.countCards('he', (c) => c.number < 8) > event.player.countCards('he', (c) => c.number < 8);
							},
							content() {
								game.JPG0('wanglang骧龙御宇dhtx', 2500);
								trigger.player.loseHp();
							},
						},
						酒池董卓: {
							audio: 'ext:虎踞江东/audio:2',
							group: '酒池董卓2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								trigger.num += player.countCards('he', (c) => c.suit == 'spade');
							},
						},
						酒池董卓2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'dyingBegin' },
							content() {
								player.recover(player.countCards('he', (c) => c.suit == 'spade'));
							},
						},
						肉林董卓: {
							audio: 4,
							trigger: { player: 'shaBegin', target: 'shaBegin' },
							forced: true,
							filter(event, player) {
								if (event.directHit) return false;
								if (player == event.player) {
									return event.target.sex == 'female';
								}
								return event.player.sex == 'female' && player.countCards('he', (c) => c.suit == 'spade');
							},
							check(event, player) {
								return player == event.player;
							},
							_priority: -1,
							content() {
								if (event.player == player) {
									var n = player.countCards('he', (c) => c.suit == 'spade');
									if (typeof trigger.shanRequired == 'number') {
										trigger.shanRequired += n;
									} else trigger.shanRequired = 1 + n;
								} else trigger.shanRequired--;
							},
						},
						崩坏董卓: {
							audio: 4,
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('崩坏董卓'), function (card, player, target) {
										return target.hp > player.hp;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									var n = player.countCards('he', (c) => c.suit == 'spade');
									result.targets[0].loseMaxHp(Math.min(player.maxHp, n));
									result.targets[0].loseHp(n);
								}
							},
						},
						暴虐董卓: {
							audio: 4,
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return (event.source && event.source.group == 'qun') || event.player.group == 'qun';
							},
							content() {
								'step 0';
								event.n = player.countCards('he', (c) => c.suit == 'spade');
								var m = trigger.num + player.countCards('he', (c) => c.suit == 'spade');
								event.m = m;
								event.dzms = game.filterPlayer(function (target) {
									return target.hasSkill('暴虐董卓');
								});
								('step 1');
								player.judge(function (card) {
									if (card.suit == 'spade') return 4;
									return 0;
								});
								('step 2');
								if (result.suit == 'spade')
									event.dzms.map((i) => {
										i.gainMaxHp(event.n);
										i.recover(event.n + 1);
									});
								('step 4');
								if (--event.m > 0) event.goto(1);
							},
						},
						//摸牌阶段开始时,你可展示你的手牌若其中没有♠️️️牌,你获得每名其他角色区域内一张牌
						横征董卓: {
							audio: 4,
							trigger: { player: 'phaseDrawBegin' },
							async content(event, trigger, player) {
								//QQQ
								player.showCards(player.getCards('h'));
								if (!player.countCards('h', { suit: 'spade' })) {
									for (var i of game.players.filter((Q) => Q != player && Q.countCards('hej'))) {
										player.gainPlayerCard(i, 'hej', true);
									}
								}
							},
						},
						暴凌董卓: {
							audio: 3,
							trigger: { player: 'phaseUseEnd' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('暴凌董卓')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var m = 3 + player.countCards('he', (c) => c.suit == 'spade');
									player.gainMaxHp(m);
									player.recover(m);
									result.targets[0].loseMaxHp(Math.min(result.targets[0].maxHp, m));
									if (result.targets[0].isAlive() && result.targets[0].name2) result.targets[0].removeCharacter(1);
								}
							},
						},
						暴征董卓: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 14;
								var fellow = game.addFellow(pos, 'boss_lvbu1');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'lisu');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								//------------------------------------------------------------------
								var fellow2 = game.addFellow(pos, 'jianloubing');
								fellow2.side = player.side;
								if (player.identity != 'zhu') fellow2.identity = player.identity;
								else fellow2.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow2._group = player.identity;
								fellow2.setIdentity('忠臣');
								fellow2.draw(fellow2.maxHp);
								fellow2.node.identity.dataset.color = fellow2.identity;
								//------------------------------------------------------------------
								var fellow3 = game.addFellow(pos, 'dongxia月辉映荼');
								fellow3.side = player.side;
								if (player.identity != 'zhu') fellow3.identity = player.identity;
								else fellow3.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow3._group = player.identity;
								fellow3.setIdentity('忠臣');
								fellow3.draw(fellow3.maxHp);
								fellow3.node.identity.dataset.color = fellow3.identity;
								//------------------------------------------------------------------
								var fellow4 = game.addFellow(pos, 'huaxiong');
								fellow4.side = player.side;
								if (player.identity != 'zhu') fellow4.identity = player.identity;
								else fellow4.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow4._group = player.identity;
								fellow4.setIdentity('忠臣');
								fellow4.draw(fellow4.maxHp);
								fellow4.node.identity.dataset.color = fellow4.identity;
								//------------------------------------------------------------------
								var fellow5 = game.addFellow(pos, 'niufu牛辅');
								fellow5.side = player.side;
								if (player.identity != 'zhu') fellow5.identity = player.identity;
								else fellow5.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow5._group = player.identity;
								fellow5.setIdentity('忠臣');
								fellow5.draw(fellow5.maxHp);
								fellow5.node.identity.dataset.color = fellow5.identity;
								//------------------------------------------------------------------
								var fellow6 = game.addFellow(pos, 'jianloubing');
								fellow6.side = player.side;
								if (player.identity != 'zhu') fellow6.identity = player.identity;
								else fellow6.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow6._group = player.identity;
								fellow6.setIdentity('忠臣');
								fellow6.draw(fellow6.maxHp);
								fellow6.node.identity.dataset.color = fellow6.identity;
								//------------------------------------------------------------------
								var fellow7 = game.addFellow(pos, 'xurong');
								fellow7.side = player.side;
								if (player.identity != 'zhu') fellow7.identity = player.identity;
								else fellow7.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow7._group = player.identity;
								fellow7.setIdentity('忠臣');
								fellow7.draw(fellow7.maxHp);
								fellow7.node.identity.dataset.color = fellow7.identity;
								//------------------------------------------------------------------
								var fellow8 = game.addFellow(pos, 'fanchou');
								fellow8.side = player.side;
								if (player.identity != 'zhu') fellow8.identity = player.identity;
								else fellow8.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow8._group = player.identity;
								fellow8.setIdentity('忠臣');
								fellow8.draw(fellow8.maxHp);
								fellow8.node.identity.dataset.color = fellow8.identity;
								//------------------------------------------------------------------
								var fellow9 = game.addFellow(pos, 'zhangji');
								fellow9.side = player.side;
								if (player.identity != 'zhu') fellow9.identity = player.identity;
								else fellow9.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow9._group = player.identity;
								fellow9.setIdentity('忠臣');
								fellow9.draw(fellow9.maxHp);
								fellow9.node.identity.dataset.color = fellow9.identity;
								//------------------------------------------------------------------
								var fellow10 = game.addFellow(pos, 'guosi');
								fellow10.side = player.side;
								if (player.identity != 'zhu') fellow10.identity = player.identity;
								else fellow10.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow10._group = player.identity;
								fellow10.setIdentity('忠臣');
								fellow10.draw(fellow10.maxHp);
								fellow10.node.identity.dataset.color = fellow10.identity;
								//------------------------------------------------------------------
								var fellow11 = game.addFellow(pos, 'lijue');
								fellow11.side = player.side;
								if (player.identity != 'zhu') fellow11.identity = player.identity;
								else fellow11.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow11._group = player.identity;
								fellow11.setIdentity('忠臣');
								fellow11.draw(fellow11.maxHp);
								fellow11.node.identity.dataset.color = fellow11.identity;
								//------------------------------------------------------------------
								var fellow12 = game.addFellow(pos, 'FD_DongYue');
								fellow12.side = player.side;
								if (player.identity != 'zhu') fellow12.identity = player.identity;
								else fellow12.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow12._group = player.identity;
								fellow12.setIdentity('忠臣');
								fellow12.draw(fellow12.maxHp);
								fellow12.node.identity.dataset.color = fellow12.identity;
								//------------------------------------------------------------------
								var fellow13 = game.addFellow(pos, 'xin_liru');
								fellow13.side = player.side;
								if (player.identity != 'zhu') fellow13.identity = player.identity;
								else fellow13.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow13._group = player.identity;
								fellow13.setIdentity('忠臣');
								fellow13.draw(fellow13.maxHp);
								fellow13.node.identity.dataset.color = fellow13.identity;
								('step 1');
								player.removeSkill('暴征董卓');
							},
						},
						密运: {
							audio: 'ext:虎踞江东/audio:2',
							group: '密运2',
							trigger: { player: 'roundStart' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('密运')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
								}
							},
						},
						密运2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								'step 0';
								player.draw(Math.min(player.maxHp, 20));
								player
									.chooseTarget(get.prompt('密运'), true, function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								var hs = player.getCards('he');
								var hs2 = hs.map((card) => game.createCard(card));
								if (hs2.length) result.targets[0].gain(hs2, 'draw');
							},
						},
						胆迎: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'damageBegin' },
							usable: 1,
							content() {
								trigger.cancel();
								player.addTempSkill('胆迎2');
							},
						},
						胆迎2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { target: 'useCardAfter' },
							forced: true,
							content() {
								trigger.player.chooseToDiscard('he', true);
								player.chooseToDiscard('he', true);
							},
						},
						//准备阶段,你可获得4张杀随机的2张锦囊2装备牌.结束阶段,你可获得4张闪2张桃2无懈可击
						祈福: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							group: '祈福2',
							forced: true,
							async content(event, trigger, player) {
								//QQQ
								var gainCardsName = ['sha', 'sha', 'sha', 'sha'];
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.type({ name: lib.inpile[i] }, 'trick') == 'trick') list.push(lib.inpile[i]);
								}
								gainCardsName.push(list.randomGet());
								gainCardsName.push(list.randomGet());
								var liste = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.type({ name: lib.inpile[i] }) == 'equip') liste.push(lib.inpile[i]);
								}
								gainCardsName.push(liste.randomGet());
								gainCardsName.push(liste.randomGet());
								var gainCards = gainCardsName.map((i) => game.createCard(i));
								player.gain(gainCards, 'draw');
							},
						},
						祈福2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								var gainCardsName = ['shan', 'shan', 'shan', 'shan', 'tao', 'tao', 'wuxie', 'wuxie'];
								var gainCards = gainCardsName.map((i) => game.createCard(i));
								player.gain(gainCards, 'draw');
							},
						},
						//出牌阶段限一次,你可选择至多4名角色.每名角色选择你的2张牌,其从游戏外获得所选择牌名相同的牌.若该角色拥有2张或更多红色牌,该角色增加1点体力上限,回复1点体力,并获得1点护甲
						福龙: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							async content(event, trigger, player) {
								//QQQ
								await game.mp40('fulong福龙');
								var { result } = await player.chooseTarget(get.prompt('福龙'), [1, 4], true).set('ai', (target) => get.attitude(player, target));
								var Q = result.targets.slice();
								for (var i of Q) {
									var { result } = await i.chooseButton(['从游戏外获得所选择牌名相同的牌', player.getCards('he')], [0, 2]).set('ai', (button) => get.value(button.link));
									if (result.links && result.links[0]) {
										for (var i of result.links) {
											await i.gain(game.createCard(i));
										}
										if (i.countCards('he', { color: 'red' }) > 1) {
											i.gainMaxHp();
											i.recover();
											i.changeHujia(1);
										}
									}
								}
							},
						},
						//回合开始时,你可以选择1到4名角色,并依次进行以下操作:弃置每个目标角色2张牌.若目标角色♣️️牌数量少于你,该角色失去1点体力值\
						//,并获得一张水攻.若目标角色没有♣️️装备牌,你摸2张牌
						水龙: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							async content(event, trigger, player) {
								//QQQ
								await game.mp40('shuilong水龙');
								var { result } = await player.chooseTarget(get.prompt('水龙'), [1, 4], true).set('ai', (target) => -get.attitude(player, target));
								if (result.targets && result.targets[0]) {
									for (var i of result.targets) {
										if (i.countCards('he')) await player.discardPlayerCard(i, 'he', true);
										if (i.countCards('he', { suit: 'club' }) < player.countCards('he', { suit: 'club' })) {
											i.loseHp();
											i.gain(game.createCard('shuiyanqijun'), 'draw');
										}
										if (!i.countCards('e', { suit: 'club' })) player.draw(2);
									}
								}
							},
						},
						//回合开始时,你可以选择1至4名角色,这些角色各获得一张【火杀】、一张【火攻】和一张【火烧连营】.并可从〔弃置两张红色牌〕、〔受到一点火焰伤害中选择一项〕,令1到4名角色执行之
						火龙: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							async content(event, trigger, player) {
								//QQQ
								await game.mp40('huolong火龙');
								var { result } = await player.chooseTarget(get.prompt('火龙'), [1, 4], true).set('ai', (target) => get.attitude(player, target));
								if (result.targets && result.targets[0]) {
									await result.targets.forEach((i) => i.gain([game.createCard({ name: 'sha', nature: 'fire' }), game.createCard('huogong'), game.createCard('huoshaolianying')], 'draw'));
									var { result } = await player.chooseControl('弃两张红色牌', '受到你的一点火焰伤害');
									var { result: result1 } = await player.chooseTarget(get.prompt('火龙'), [1, 4], true).set('ai', (target) => -get.attitude(player, target));
									if (result.control == '弃两张红色牌') {
										await result1.targets.forEach((i) => i.chooseToDiscard('he', 2, true, { color: 'red' }, '请弃置两张红色牌'));
									} else {
										await result1.targets.forEach((i) => i.damage('fire'));
									}
								}
							},
						},
						re_rende: {
							enable: 'phaseUse',
							audio: 'ext:虎踞江东/audio:2',
							filterCard: true,
							selectCard: [1, null],
							discard: false,
							prepare(cards, player, targets) {
								player.$give(cards.length, targets[0]);
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							onremove(player) {
								delete player.storage.rerende;
							},
							check(card) {
								if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
								if (!ui.selected.cards.length && card.name == 'du') return 20;
								var player = get.owner(card);
								if (ui.selected.cards.length >= Math.max(2, player.countCards('h') - player.hp)) return 0;
								if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
									for (var i = 0; i < game.players.length; i++) {
										if (game.players[i].getCards('s').includes('haoshi') && !game.players[i].isTurnedOver() && !game.players[i].num('j', 'lebu') && get.attitude(player, game.players[i]) >= 3 && get.attitude(game.players[i], player) >= 3) {
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
								target.gain(cards);
								player.storage.rerende = 0;
								if (player.storage.rerende >= 0) {
									player.storage.rerende += cards.length;
									if (player.storage.rerende >= 2) {
										var list = [];
										for (var i = 0; i < game.players.length; i++) {
											if (player.canUse('sha', game.players[i], true, true)) {
												list.push('sha');
												break;
											}
										}
										if (player.canUse('tao', player, true, true)) {
											list.push('tao');
										}
										if (player.canUse('jiu', player, true, true)) {
											list.push('jiu');
										}
										if (list.length) {
											list.push('cancel');
											player
												.chooseControl(list, function () {
													var controls = _status.event.controls;
													var player = _status.event.player;
													if (controls.includes('tao')) return 'tao';
													if (controls.includes('sha')) {
														for (var i = 0; i < game.players.length; i++) {
															if (player.canUse('sha', game.players[i], true, true)) {
																if (ai.get.effect(game.players[i], { name: 'sha' }, player, player) > 0) {
																	return 'sha';
																}
															}
														}
													}
													return 'cancel';
												})
												.set('prompt', '是否视为使用一张基本牌？');
										} else {
											event.finish();
										}
										player.storage.rerende = -1;
									} else {
										event.finish();
									}
								} else {
									event.finish();
								}
								('step 1');
								if (result && result.control && result.control != 'cancel') {
									if (result.control == 'sha') {
										player
											.chooseTarget(
												function (card, player, target) {
													return player.canUse({ name: 'sha' }, target, true, true);
												},
												true,
												'选择出杀目标'
											)
											.set('ai', function (target) {
												var player = _status.event.player;
												return ai.get.effect(target, { name: 'sha' }, player, player);
											});
									} else {
										player.useCard({ name: result.control }, player);
										event.finish();
									}
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool && result.targets && result.targets.length) {
									player.useCard({ name: 'sha' }, result.targets);
								}
							},
							ai: {
								order(skill, player) {
									if (player.hp < player.maxHp && player.storage.rerende < 2 && player.countCards('h') > 1) {
										return 10;
									}
									return 4;
								},
								result: {
									target(player, target) {
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											return -10;
										}
										if (target.num('j', 'lebu')) return 0;
										var nh = target.countCards('h');
										var np = player.countCards('h');
										if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
											if (nh >= np - 1 && np <= player.hp && !target.getCards('s').includes('haoshi')) return 0;
										}
										return Math.max(1, 5 - nh);
									},
								},
								effect: {
									target(card, player, target) {
										if (player == target && get.type(card) == 'equip') {
											if (player.num('e', { subtype: get.subtype(card) })) {
												for (var i = 0; i < game.players.length; i++) {
													if (game.players[i] != player && get.attitude(player, game.players[i]) > 0) {
														return 0;
													}
												}
											}
										}
									},
								},
								threaten: 0.8,
							},
						},
						re_tunlang: {
							enable: 'phaseUse',
							audio: 'ext:虎踞江东/audio:2',
							usable: 1,
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].countCards('h')) return true;
								}
								return false;
							},
							filterTarget(card, player, target) {
								return target.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool) {
									if (
										game.hasPlayer(function (player) {
											return player != target;
										})
									) {
										player
											.chooseTarget(function (card, player, target) {
												var source = _status.event.source;
												return target != source;
											}, true)
											.set('ai', function (target) {
												return get.damageEffect(target, _status.event.source, player);
											})
											.set('source', target);
									} else {
										event.finish();
									}
								} else {
									player.damage(target);
									event.finish();
								}
								('step 2');
								if (result.bool && result.targets && result.targets.length) {
									target.line(result.targets[0], 'green');
									result.targets[0].damage(target);
								}
							},
							ai: {
								order: 0.5,
								result: {
									target(player, target) {
										var att = get.attitude(player, target);
										var oc = target.countCards('h') == 1;
										if (att > 0 && oc) return 0;
										for (var i = 0; i < game.players.length; i++) {
											if (game.players[i] != target && game.players[i] != player && get.distance(target, game.players[i], 'attack') <= 1) {
												if (get.damageEffect(game.players[i], target, player) > 0) {
													return att > 0 ? att / 2 : att - (oc ? 5 : 0);
												}
											}
										}
										return 0;
									},
									player(player, target) {
										if (target.hasSkill('jueqing')) return -10;
										var mn = 1;
										var hs = player.getCards('h');
										for (var i = 0; i < hs.length; i++) {
											mn = Math.max(mn, hs[i].number);
										}
										if (mn <= 11 && player.hp < 2) return -20;
										var max = player.maxHp - hs.length;
										for (var i = 0; i < game.players.length; i++) {
											if (get.attitude(player, game.players[i]) > 2) {
												max = Math.max(Math.min(5, game.players[i].hp) - game.players[i].countCards('h'), max);
											}
										}
										switch (max) {
											case 0:
												return mn == 13 ? 0 : -20;
											case 1:
												return mn >= 12 ? 0 : -15;
											case 2:
												return 0;
											case 3:
												return 1;
											default:
												return max;
										}
									},
								},
								expose: 0.2,
							},
						},
						re_jieming: {
							trigger: {
								player: 'damageEnd',
							},
							audio: 'ext:虎踞江东/audio:2',
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('jieming'), [1, trigger.num], function (card, player, target) {
										return target.countCards('h') >= 0;
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att > 2) {
											return Math.min(5, target.maxHp);
										}
										return att / 3;
									});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].draw(Math.min(5, result.targets[i].maxHp));
									}
								}
							},
							ai: {
								maixie: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage') && target.hp > 1) {
											if (player.hasSkill('jueqing')) return [1, -2];
											var max = 0;
											for (var i = 0; i < game.players.length; i++) {
												if (get.attitude(target, game.players[i]) > 0) {
													max = Math.max(Math.min(5, game.players[i].hp), max);
												}
											}
											switch (max) {
												case 0:
													return 2;
												case 1:
													return 1.5;
												case 2:
													return [1, 2];
												default:
													return [0, max];
											}
										}
										if ((card.name == 'tao' || card.name == 'caoyao') && target.hp > 1 && target.countCards('h') <= target.hp) return [0, 0];
									},
								},
							},
						},
						re_tianao: {
							group: ['re_tianao2'],
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'chooseToRespondBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.responded) return false;
								return true;
							},
							content() {
								'step 0';
								var cards = [];
								if (ui.cardPile.childNodes.length < 4) {
									var discardcards = get.cards(4);
									for (var i = 0; i < discardcards.length; i++) {
										ui.discardPile.appendChild(discardcards[i]);
									}
								}
								for (var i = 0; i < 4; i++) {
									cards.push(ui.cardPile.childNodes[i]);
								}
								player.chooseCardButton('天傲:选择一张卡牌打出', cards).set('filterButton', function (button) {
									return get.type(button.link) == 'basic' && _status.event.getTrigger().filterCard(button.link);
								});
								('step 1');
								if (result.bool) {
									game.log(player, '天傲发动成功');
									trigger.untrigger();
									trigger.responded = true;
									result.links[0].remove();
									trigger.result = { bool: true, card: result.links[0] };
								}
							},
							ai: {
								effect: {
									target(card, player, target, effect) {
										if (get.tag(card, 'respondShan')) return 0.7;
										if (get.tag(card, 'respondSha')) return 0.7;
									},
								},
							},
						},
						re_tianao2: {
							enable: 'chooseToUse',
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return _status.currentPhase == player || _status.event.dying;
							},
							onChooseToUse(event) {
								if (!game.online) {
									var cards = [];
									if (ui.cardPile.childNodes.length < 4) {
										var discardcards = get.cards(4);
										for (var i = 0; i < discardcards.length; i++) {
											ui.discardPile.appendChild(discardcards[i]);
										}
									}
									for (var i = 0; i < 4; i++) {
										cards.push(ui.cardPile.childNodes[i]);
									}
									event.set('tianaocards', cards);
								}
							},
							chooseButton: {
								dialog(event, player) {
									return ui.create.dialog('天傲:选择一张卡牌使用', event.tianaocards);
								},
								filter(button, player) {
									var evt = _status.event.parent;
									if (evt && evt.filterCard) {
										return get.type(button.link) == 'basic' && evt.filterCard(button.link, player, evt);
									}
									return false;
								},
								check(button) {
									return 1;
								},
								backup(links, player) {
									return {
										filterCard() {
											return false;
										},
										selectCard: -1,
										viewAs: links[0],
									};
								},
								prompt(links, player) {
									return '选择' + get.translation(links) + '的目标';
								},
							},
							ai: {
								order: 11,
								save: true,
								result: {
									player(player) {
										if (player.tempSkills.re_tianao4) return 0;
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
						},
						re_qiongbing: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return player != target && get.distance(player, target, 'attack') <= 1;
							},
							position: 'he',
							content() {
								'step 0';
								target.damage();
								('step 1');
								player.chooseToDiscard(target.hp, 'he', true);
							},
						},
						re_jiyi: {
							trigger: {
								player: 'damageEnd',
							},
							audio: 'ext:虎踞江东/audio:2',
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								event.num = 1;
								event.count = 1;
								('step 1');
								player.gain(get.cards(2));
								player.$draw(2);
								('step 2');
								player.chooseCardTarget({
									filterCard: true,
									selectCard: [1, 2],
									filterTarget(card, player, target) {
										return player != target && target != event.temp;
									},
									ai1(card) {
										if (ui.selected.cards.length) return -1;
										if (card.name == 'du') return 20;
										return _status.event.player.countCards('h') - _status.event.player.hp;
									},
									ai2(target) {
										var att = get.attitude(_status.event.player, target);
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											return 1 - att;
										}
										return att - 4;
									},
									prompt: '请选择要送人的卡牌',
								});
								('step 3');
								if (result.bool) {
									player.lose(result.cards, ui.special);
									result.targets[0].gain(result.cards);
									player.$give(result.cards.length, result.targets[0]);
									player.line(result.targets, 'green');
									if (num == 1) {
										event.temp = result.targets[0];
										event.num++;
										event.goto(2);
									} else if (event.count < trigger.num) {
										delete event.temp;
										event.num = 1;
										event.count++;
										event.goto(1);
									}
								} else if (event.count < trigger.num) {
									delete event.temp;
									event.num = 1;
									event.count++;
									event.goto(1);
								}
							},
							ai: {
								maixie: true,
								result: {
									effect(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkill('jueqing')) return [1, -2];
											if (player.hp >= 4) return [1, get.tag(card, 'damage') * 2];
											if (target.hp == 3) return [1, get.tag(card, 'damage') * 1.5];
											if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
										}
									},
								},
								threaten: 0.6,
							},
						},
						re_yichu: {
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							popup: false,
							content() {
								player.storage.re_songci = false;
								player.unmarkSkill('re_songci');
								player.removeSkill('re_yichu');
							},
						},
						re_songci: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								for (var i = 0; i < game.players.length; i++) {
									if (!game.players[i].storage.re_songci) return true;
								}
								return false;
							},
							init(player) {
								player.storage.re_songci = false;
							},
							filterTarget(card, player, target) {
								return !target.storage.re_songci && target.countCards('h') != target.hp;
							},
							content() {
								if (target.countCards('h') > target.hp) {
									target.chooseToDiscard(2, 'he', true);
								} else {
									target.draw(2);
								}
								target.storage.re_songci = true;
								target.markSkill('re_songci');
								target.addSkill('re_yichu');
							},
							intro: {
								content: '已发动',
							},
							ai: {
								order: 7,
								threaten: 1.5,
								expose: 0.2,
								result: {
									target(player, target) {
										if (target.countCards('h') < target.hp) {
											if (target.countCards('h') <= 2) return 1;
										} else if (target.countCards('h') > target.hp) {
											if (target.countCards('h') <= 3) return -1;
										}
									},
								},
							},
						},
						re_jinqu: {
							trigger: {
								player: 'phaseEnd',
							},
							audio: 'ext:虎踞江东/audio:2',
							check(event, player) {
								return player.storage.qiss >= player.countCards('h');
							},
							prompt(event, player) {
								if (typeof player.storage.qiss != 'number') {
									'趋近:是否摸' + get.cnNumber(0) + '张牌并将手牌弃置至' + get.cnNumber(0) + '张？';
								}
								return '趋近:是否摸' + get.cnNumber(player.storage.qiss) + '张牌并将手牌弃置至' + get.cnNumber(player.storage.qiss) + '张？';
							},
							content() {
								'step 0';
								player.draw(player.storage.qiss);
								('step 1');
								if (typeof player.storage.qiss != 'number') {
									player.storage.qiss = 0;
								}
								var dh = player.countCards('h') - player.storage.qiss;
								if (dh > 0) {
									player.chooseToDiscard(dh, true);
								}
							},
						},
						rel_lijian: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								var num = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i] != player) num++;
								}
								return num > 1;
							},
							check(card) {
								return 10 - get.value(card);
							},
							filterCard: true,
							position: 'he',
							filterTarget(card, player, target) {
								if (player == target) return false;
								if (ui.selected.targets.length == 1) {
									return target.canUse({ name: 'juedou' }, ui.selected.targets[0]);
								}
								return true;
							},
							targetprompt: ['先出杀', '后出杀'],
							selectTarget: 2,
							multitarget: true,
							content() {
								targets[1].useCard({ name: 'juedou' }, targets[0]).animate = false;
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										if (ui.selected.targets.length == 0) {
											return -3;
										} else {
											return ai.get.effect(target, { name: 'juedou' }, ui.selected.targets[0], target);
										}
									},
								},
								expose: 0.4,
								threaten: 3,
							},
						},
						moquan: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterCard(card) {
								if (ui.selected.cards.length) {
									return card.suit != ui.selected.cards[0].suit;
								}
								return true;
							},
							selectCard: 2,
							check(card) {
								return 8 - get.value(card);
							},
							filterTarget(card, player, target) {
								if (target.hp == Infinity) return false;
								if (target.hp > player.hp) return true;
								if (target.hp < player.hp && target.hp < target.maxHp) return true;
								return false;
							},
							content() {
								var num = target.hp - player.hp;
								if (num > 0) {
									target.damage(num);
								} else if (num < 0 && target.hp < target.maxHp) {
									target.recover(-num);
								}
							},
							ai: {
								order: 8.5,
								result: {
									target(player, target) {
										var num;
										if (player.hp > target.maxHp) {
											num = player.hp - target.maxHp;
										} else {
											num = player.hp - target.hp;
										}
										if (target.hp == 1 && num) {
											return num + 1;
										}
										return num;
									},
								},
							},
						},
						caoshi: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'chooseToUse',
							usable: 1,
							filterCard(card) {
								return card.suit == 'club';
							},
							filter(event, player) {
								return player.num('h', { suit: 'club' });
							},
							viewAs: {
								name: 'shunshou',
							},
							viewAsFilter(player) {
								if (!player.num('h', { suit: 'club' })) return false;
							},
							prompt: '将一张装备牌当顺手牵羊使用',
							check(card) {
								var player = _status.currentPhase;
								if (player.num('h', { subtype: get.subtype(card) }) > 1) {
									return 11 - ai.get.equipValue(card);
								}
								if (player.countCards('h') < player.hp) {
									return 6 - get.value(card);
								}
								return 2 - ai.get.equipValue(card);
							},
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'shunshou') return true;
								},
							},
							ai: {
								order: 9.5,
								threaten: 1.5,
								wuxie(target, card, player, viewer) {
									if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
										return 0;
									}
								},
								basic: {
									order: 7.5,
									useful: 4,
									value: 9,
								},
								result: {
									target(player, target) {
										if (get.attitude(player, target) <= 0) return target.countCards('he') > 0 ? -1.5 : 1.5;
										var js = target.getCards('j');
										if (js.length) {
											var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
											if (jj.name == 'shunshou') return 3;
											if (js.length == 1 && ai.get.effect(target, jj, target, player) >= 0) {
												return -1.5;
											}
											return 3;
										}
										return -1.5;
									},
									player(player, target) {
										if (get.attitude(player, target) < 0 && !target.countCards('he')) {
											return 0;
										}
										if (get.attitude(player, target) > 1) {
											var js = target.getCards('j');
											if (js.length) {
												var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
												if (jj.name == 'shunshou') return 1;
												if (js.length == 1 && ai.get.effect(target, jj, target, player) >= 0) {
													return 0;
												}
												return 1;
											}
											return 0;
										}
										return 1;
									},
								},
								tag: {
									loseCard: 1,
									gain: 1,
								},
							},
						},
						qiss: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (!event.targets) return false;
								if (_status.currentPhase != player) return false;
								var type = get.type(event.card, 'trick');
								if (type != 'basic' && type != 'trick') return false;
								return game.hasPlayer(function (target) {
									return !event.targets.includes(target) && target.countCards('he') > 0;
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('qiss'), function (card, player, target) {
										return !_status.event.getTrigger().targets.includes(target) && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (target == player) return 2;
										if (get.attitude(player, target) <= 0) {
											return 1;
										}
										return 0.5;
									});
								('step 1');
								if (result.bool) {
									player.storage.qiss++;
									if (!event.isMine()) game.delay();
									player.discardPlayerCard(result.targets[0], true, 'he');
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								event.target.draw();
							},
							group: 'qiss2',
						},
						qiss2: {
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							popup: false,
							silent: true,
							content() {
								player.storage.qiss = 0;
							},
						},
						甚贤星彩: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'loseAfter',
							},
							filter(event, player) {
								if (event.player == player || _status.currentPhase == player) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'basic') {
											return true;
										}
									}
								return false;
							},
							_priority: -1,
							forced: true,
							content() {
								player.draw(2);
							},
							ai: {
								threaten: 1.5,
							},
						},
						枪舞星彩: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'red') return 2;
									return 1;
								});
								('step 1');
								if (result.judge == 1) {
									var list = ['sha'];
									player.gain(game.createCard(list.randomGet()));
									player.$draw();
									player.gain(game.createCard(list.randomGet()));
									player.$draw();
									player.gain(game.createCard(list.randomGet()));
									player.$draw();
									player.addTempSkill('paoxiao', 'phaseAfter');
								} else {
									if (result.judge == 2) {
										player.recover(10);
										player.draw(3);
									}
								}
							},
							ai: {
								result: {
									player: 1,
								},
								order: 11,
							},
						},
						新甚贤星彩: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'discardAfter',
							},
							filter(event, player) {
								if (event.player == player || _status.currentPhase == player) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'basic') {
											return true;
										}
									}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								('step 1');
								var num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (get.type(trigger.cards[i]) == 'basic') num += 1;
								}
								player.draw(num);
							},
							ai: {
								threaten: 1.6,
							},
						},
						nsqiyue: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: ['turnOverEnd', 'linkEnd'] },
							forced: true,
							content() {
								player.draw();
							},
						},
						nsxuezhu: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'damageEnd', source: 'damageEnd' },
							filter(event, player) {
								return event.player.isAlive();
							},
							logTarget: 'player',
							content() {
								trigger.player.draw(2);
								trigger.player.turnOver();
							},
							check(event, player) {
								return !event.player.isTurnedOver() || get.attitude(player, event.player) > 0;
							},
						},
						xinzhanxz: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return true; //player.countCards('h')>player.maxHp;
							},
							usable: 2,
							content() {
								'step 0';
								var cards = get.cards(6);
								event.cards = cards;
								var next = player.chooseCardButton(cards, '选择获得的红色牌', [1, Infinity]).set('filterButton', function (button) {
									return get.color(button.link) == 'red';
								});
								('step 1');
								if (result.bool) {
									player.gain(result.links);
									player.$draw(result.links);
								}
								for (var i = event.cards.length - 1; i >= 0; i--) {
									if (!result.bool || !result.links.includes(event.cards[i])) {
										ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
									}
								}
							},
							ai: {
								order: 11,
								result: {
									player: 1,
								},
							},
						},
						rezhimanzm: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return player != event.player;
							},
							check(event, player) {
								if (get.damageEffect(event.player, player, player) < 0) return true;
								var att = get.attitude(player, event.player);
								if (att > 0 && event.player.countCards('j')) return true;
								if (event.num > 1) {
									if (att < 0) return false;
									if (att > 0) return true;
								}
								var cards = event.player.getGainableCards(player, 'he');
								for (var i = 0; i < cards.length; i++) {
									if (get.equipValue(cards[i]) >= 6) return true;
								}
								return false;
							},
							logTarget: 'player',
							content() {
								player.gainPlayerCard(trigger.player, 'hej', true);
								trigger.cancel();
							},
						},
						sanyaosy: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								target.damage();
							},
							ai: {
								result: {
									target(player, target) {
										return get.damageEffect(target, player);
									},
								},
								order: 3.9,
							},
						},
						huileihl: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'dyingBegin' },
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('huileihl'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].discard(result.targets[0].getCards('he'));
								}
							},
							ai: {
								threaten: 0.7,
							},
						},
						精策郭淮: {
							ai: {
								moreDraw: true,
							},
							trigger: {
								global: 'phaseEnd',
							},
							nobracket: true,
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return true;
							},
							content() {
								player.draw(Math.min(5, trigger.player.countUsed()));
							},
						},
						天颜: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'damageBefore' },
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player.draw();
								player.chooseCardTarget({
									filterCard(card, player) {
										return lib.filter.cardDiscardable(card, player);
									},
									filterTarget(card, player, target) {
										return player != target;
									},
									position: 'he',
									ai1(card) {
										return 10 - get.value(card);
									},
									ai2(target) {
										var att = get.attitude(_status.event.player, target);
										var trigger = _status.event.getTrigger();
										var da = 0;
										if (_status.event.player.hp == 1) {
											da = 10;
										}
										var eff = get.damageEffect(target, trigger.source, target);
										if (att == 0) return 0.1 + da;
										if (eff >= 0 && att > 0) {
											return att + da;
										}
										if (att > 0 && target.hp > 1) {
											if (target.maxHp - target.hp >= 3) return att * 1.1 + da;
											if (target.maxHp - target.hp >= 2) return att * 0.9 + da;
										}
										return -att + da;
									},
									prompt: get.prompt('天颜'),
									prompt2: lib.translate.天颜_info,
								});
								('step 1');
								if (result.bool) {
									player.discard(result.cards, ui.special);
									var target = result.targets[0];
									player
										.chooseControlList(
											true,
											function (event, player) {
												var target = _status.event.target;
												var att = get.attitude(player, target);
												if (target.hasSkillTag('maihp')) att = -att;
												if (att > 0) {
													return 0;
												} else {
													return 1;
												}
											},
											['令' + get.translation(target) + '受到1点伤害,你摸5张牌', '令' + get.translation(target) + '失去1点体力,弃置其三张牌']
										)
										.set('target', target);
									trigger.cancel();
									event.target = target;
									event.card = result.cards[0];
								} else {
									event.finish();
								}
								('step 2');
								if (typeof result.index == 'number') {
									if (result.index) {
										event.target.loseHp();
										player.discardPlayerCard(3, event.target, 'he', true);
									} else {
										event.target.damage();
										player.draw(5);
									}
								}
							},
							ai: {
								maixie_defend: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return;
										if (get.tag(card, 'damage') && target.countCards('he') > 1) return 0.7;
									},
								},
							},
						},
						盗书: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 5, //QQQ
							filterTarget(card, player, target) {
								return player != target && target.countCards('he') > 0;
							},
							content() {
								var num = target.countCards('he');
								player.gain(target.getCards('he'));
								target.$give(target.countCards('he'), player);
								target.damage(num);
							},
							ai: {
								threaten: 4.8,
								order: 1,
								result: {
									target(player, target) {
										if (target.countCards('h') > target.hp) return -100;
										return -2;
									},
								},
							},
						},
						伪诚: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'loseAfter',
							},
							usable: 1,
							forced: true,
							content() {
								player.draw();
							},
							ai: {
								threaten: 1.5,
							},
						},
						息生: {
							trigger: { global: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return !player.getStat('damage');
							},
							content() {
								player.draw(2);
							},
							audio: 'ext:虎踞江东/audio:2',
						},
						谏喻: {
							trigger: { global: 'useCardToBegin' },
							audio: 'ext:虎踞江东/audio:2',
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							filter(event, player) {
								return true;
							},
							logTarget: 'player',
							content() {
								trigger.player.draw();
							},
							ai: {
								threaten: 1.3,
								expose: 0.2,
								noh: true,
							},
						},
						qmzd专对: {
							group: ['qmzd专对_respond', 'qmzd专对_use'],
							subSkill: {
								use: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: { global: 'shaBegin' },
									check(event, player) {
										return get.attitude(player, event.target) < 0;
									},
									filter(event, player) {
										return event.target.countCards('h') > 0 && event.target != player;
									},
									logTarget: 'target',
									content() {
										'step 0';
										player.draw();
										player.chooseToCompare(trigger.target);
										('step 1');
										if (result.bool) {
											trigger.directHit = true;
										}
									},
								},
								respond: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: { global: 'shaBegin' },
									check(event, player) {
										return get.effect(player, event.card, event.player, player) < 0;
									},
									filter(event, player) {
										return event.player.countCards('h') > 0 && event.player != player;
									},
									logTarget: 'player',
									content() {
										'step 0';
										player.draw();
										player.chooseToCompare(trigger.player);
										('step 1');
										if (result.bool) {
											trigger.skipShan = true;
										}
									},
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha' && current < 0) return 0.7;
									},
								},
							},
						},
						qmtb天辩: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'chooseCardBegin' },
							check(event, player) {
								return player.hasCard(function (card) {
									var val = get.value(card);
									return val < 0 || (val <= 4 && card.number >= 11);
								});
							},
							filter(event, player) {
								return event.type == 'compare' && !event.directresult;
							},
							content() {
								var cards = get.cards();
								cards[0].discard();
								cards[0].vanishtag.add('qmtb天辩');
								trigger.directresult = cards;
								trigger.untrigger();
							},
							group: 'qmtb天辩_number',
							subSkill: {
								number: {
									audio: 'ext:虎踞江东/audio:2',
									trigger: { player: 'compare', target: 'compare' },
									filter(event, player) {
										if (event.iwhile) return false;
										if (event.player == player) {
											return get.color(event.card1) == 'red'; //&&event.card1.vanishtag.includes('qmtb天辩');
										} else {
											return get.color(event.card2) == 'red'; //&&event.card2.vanishtag.includes('qmtb天辩');
										}
									},
									silent: true,
									content() {
										game.log(player, '拼点牌点数视为', '#y13');
										if (player == trigger.player) {
											trigger.num1 = 13;
										} else {
											trigger.num2 = 13;
										}
									},
								},
							},
						},
						qmjz谏征: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'useCard' },
							filter(event, player) {
								if (!player.countCards('h')) return false;
								return event.player != player && event.card.name == 'sha';
							},
							forced: true,
							content() {
								'step 0';
								var effect = 0;
								for (var i = 0; i < trigger.targets.length; i++) {
									effect -= get.effect(trigger.targets[i], trigger.card, trigger.player, player);
								}
								if (effect > 0) {
									if (get.color(trigger.card) != 'black') {
										effect = 0;
									} else {
										effect = 1;
									}
									if (trigger.targets.length == 1) {
										if (trigger.targets[0].hp == 1) {
											effect++;
										}
										if (effect > 0 && trigger.targets[0].countCards('h') < player.countCards('h')) {
											effect++;
										}
									}
									if (effect > 0) {
										effect += 6;
									}
								}
								player
									.chooseCard('h', get.prompt2('qmjz谏征', trigger.player))
									.set('ai', function (card) {
										if (_status.event.effect >= 0) {
											var val = get.value(card);
											if (val < 0) return 10 - val;
											return _status.event.effect - val;
										}
										return 0;
									})
									.set('effect', effect)
									('step 1');
								if (result.bool && result.cards) {
									event.card = result.cards[0];
									trigger.targets.length = 0;
									trigger.untrigger();
								} else {
									event.finish();
								}
								('step 2');
								if (!event.isMine()) game.delayx();
								('step 3');
								if (event.card) {
									player.lose(result.cards, ui.special);
									game.broadcastAll(function (player) {
										var cardx = ui.create.card();
										cardx.classList.add('infohidden');
										cardx.classList.add('infoflip');
										player.$throw(cardx, 1000, 'nobroadcast');
									}, player);
								}
								('step 4');
								if (event.card) {
									event.card.fix();
									ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
								}
								('step 5');
								if (get.color(trigger.card) != 'black') {
									trigger.targets.push(player);
									trigger.player.line(player);
									trigger.trigger('useCard');
									player.draw(2);
									player.recover();
								}
							},
						},
						享乐: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'useCardToBefore' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
								trigger.player
									.chooseToDiscard('享乐:弃置一张基本牌,否则杀对其无效', function (card) {
										return get.type(card) == 'basic';
									})
									.set('ai', function (card) {
										if (_status.event.eff > 0) {
											return 10 - get.value(card);
										}
										return 0;
									})
									.set('eff', eff);
								('step 1');
								if (result.bool == false) {
									trigger.cancel();
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha' && get.attitude(player, target) < 0) {
											if (_status.event.name == '享乐') return;
											var bs = player.getCards('h', { type: 'basic' });
											if (bs.length < 2) return 0;
											if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
											if (bs.length <= 3 && player.countCards('h', 'sha') <= 1) {
												for (var i = 0; i < bs.length; i++) {
													if (bs[i].name != 'sha' && get.value(bs[i]) < 7) {
														return [1, 0, 1, -0.5];
													}
												}
												return 0;
											}
											return [1, 0, 1, -0.5];
										}
									},
								},
							},
						},
						交权: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseUseBefore' },
							filter(event, player) {
								return player.countCards('h') > 0 && !player.hasSkill('交权3');
							},
							forced: true,
							content() {
								'step 0';
								var fang = player.hp >= 2 && player.countCards('h') <= player.hp + 1;
								player
									.chooseTarget(get.prompt('交权'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										if (!_status.event.fang) return -1;
										if (target.hasJudge('lebu')) return -1;
										return get.attitude(player, target) - 4;
									})
									.set('fang', fang);
								('step 1');
								if (result.bool) {
									trigger.cancel();
									player.addSkill('交权2');
									player.storage.交权 = result.targets[0];
								}
							},
						},
						交权2: {
							trigger: { global: 'phaseAfter' },
							forced: true,
							popup: false,
							_priority: -50,
							content() {
								'step 0';
								trigger.player.chooseToDiscard(true);
								('step 1');
								var target = player.storage.交权;
								target.markSkillCharacter('交权', player, '交权', '进行一个额外回合');
								target.phase('nodelay');
								target.addSkill('交权3');
								player.removeSkill('交权2');
								delete player.storage.交权;
							},
						},
						交权3: {
							trigger: { player: ['phaseAfter', 'phaseCancelled'] },
							forced: true,
							popup: false,
							content() {
								player.unmarkSkill('交权');
								player.removeSkill('交权3');
							},
						},
						若愚: {
							audio: 'ext:虎踞江东/audio:2',
							derivation: '激将刘禅',
							trigger: { player: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								player.maxHp++;
								player.recover();
								player.addSkill('激将刘禅');
							},
						},
						激将刘禅: {
							group: ['激将刘禅1', '激将刘禅2'],
						},
						激将刘禅1: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'chooseToRespondBegin' },
							filter(event, player) {
								if (event.responded) return false;
								if (player.storage.激将刘禅ing) return false;
								if (!player.hasSkill('激将刘禅')) return false;
								if (event.filterCard && event.filterCard({ name: 'sha' }, player, event) == false) return false;
								return game.hasPlayer(function (current) {
									return current != player && current.group == 'shu';
								});
							},
							content() {
								'step 0';
								if (event.current == undefined) event.current = player.next;
								if (event.current == player) {
									event.finish();
								} else if (event.current.group == 'shu') {
									player.storage.激将刘禅ing = true;
									var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张杀？', { name: 'sha' });
									next.set('ai', function () {
										var event = _status.event;
										return get.attitude(event.player, event.source) - 2;
									});
									next.set('source', player);
									next.autochoose = lib.filter.autoRespondSha;
								} else {
									event.current = event.current.next;
									event.redo();
								}
								('step 1');
								player.storage.激将刘禅ing = false;
								if (result.bool) {
									event.finish();
									trigger.result = result;
									trigger.responded = true;
									trigger.animate = false;
								} else {
									event.current = event.current.next;
									event.goto(0);
								}
							},
						},
						激将刘禅2: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'chooseToUse',
							filter(event, player) {
								if (event.filterCard && !event.filterCard({ name: 'sha' }, player, event)) return false;
								if (!player.hasSkill('激将刘禅')) return false;
								if (player.hasSkill('激将刘禅3')) return false;
								if (!lib.filter.cardUsable({ name: 'sha' }, player)) return false;
								return game.hasPlayer(function (current) {
									return current != player && current.group == 'shu';
								});
							},
							filterTarget(card, player, target) {
								if (_status.event._backup && typeof _status.event._backup.filterTarget == 'function' && !_status.event._backup.filterTarget({ name: 'sha' }, player, target)) {
									return false;
								}
								return player.canUse({ name: 'sha' }, target);
							},
							content() {
								'step 0';
								if (event.current == undefined) event.current = player.next;
								if (event.current == player) {
									player.addSkill('激将刘禅3');
									event.getParent(2).step = 0;
									event.finish();
								} else if (event.current.group == 'shu') {
									var next = event.current.chooseToRespond('是否替' + get.translation(player) + '对' + get.translation(target) + '使用一张杀', function (card, player, event) {
										event = event || _status.event;
										return card.name == 'sha' && event.source.canUse(card, event.target);
									});
									next.set('ai', function (card) {
										var event = _status.event;
										return get.effect(event.target, card, event.source, event.player);
									});
									next.set('source', player);
									next.set('target', target);
									next.autochoose = lib.filter.autoRespondSha;
								} else {
									event.current = event.current.next;
									event.redo();
								}
								('step 1');
								if (result.bool) {
									event.finish();
									if (result.cards && result.cards.length == 1 && result.cards[0].name == 'sha') {
										player.useCard(result.cards[0], target).animate = false;
									} else {
										player.useCard({ name: 'sha' }, target).animate = false;
									}
								} else {
									event.current = event.current.next;
									event.goto(0);
								}
							},
							ai: {
								result: {
									target(player, target) {
										if (player.hasSkill('激将刘禅3')) return 0;
										return get.effect(target, { name: 'sha' }, player, target);
									},
								},
								order() {
									return get.order({ name: 'sha' }) - 0.1;
								},
							},
						},
						激将刘禅3: {
							trigger: { global: ['useCardAfter', 'useSkillAfter', 'phaseAfter'] },
							silent: true,
							filter(event, player) {
								return event.skill != '激将刘禅2' && event.skill != 'qinwang2';
							},
							content() {
								player.removeSkill('激将刘禅3');
							},
						},
						昭然: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCardBegin',
							},
							usable: 4,
							filter(event, player) {
								return true;
							},
							forced: true,
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								player.chooseTarget('昭然:选择发动对象', function (card, player, target) {
									return target != player && target.countCards('hej');
								}).ai = function (target) {
									return -get.attitude(player, target);
								};
								('step 2');
								if (result.bool) {
									player.discardPlayerCard('hej', result.targets[0], 'hej', true);
								} else {
									event.finish();
								}
							},
							ai: {
								expose: 0.5,
								noe: true,
								reverseEquip: true,
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return [1, 3];
									},
								},
							},
						},
						推弑: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								var target = _status.currentPhase;
								event.target = target;
								player
									.chooseTarget(get.prompt('推弑', event.target), function (card, player, target) {
										var source = _status.event.source;
										return true;
									})
									.set('source', target)
									.set('goon', get.damageEffect(target, player, player) > 0)
									.set('ai', function (target) {
										if (!_status.event.goon) return 0;
										var evt = _status.event;
										return get.effect(target, { name: 'sha' }, evt.source, evt.player);
									});
								('step 1');
								if (result.bool) {
									event.target2 = result.targets[0];
									player.line2([target, event.target2]);
								} else event.finish();
								('step 2');
								target.useCard({ name: 'sha' }, event.target2, false);
								('step 3');
								target.damage();
							},
						},
						筹伐: {
							enable: 'phaseUse',
							audio: 'ext:虎踞江东/audio:2',
							usable: 2,
							filter(event, player) {
								return true;
							},
							filterTarget(card, player, target) {
								return target != player && !target.hasSkill('筹伐2') && target.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.choosePlayerCard(target, 'h', true);
								player.gainPlayerCard(target, 'he', true);
								('step 1');
								player.showCards(result.cards);
								target.addTempSkill('筹伐2', { player: 'phaseAfter' });
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										return -target.countCards('h');
									},
								},
							},
						},
						筹伐2: {
							charlotte: true,
							mark: true,
							intro: { content: '不能使用或打出除杀以外的牌' },
							mod: {
								cardEnabled(card, player) {
									if (card.name != 'sha') return false;
								},
								cardUsable(card, player) {
									if (card.name != 'sha') return false;
								},
								cardRespondable(card, player) {
									if (card.name != 'sha') return false;
								},
								cardSavable(card, player) {
									if (card.name != 'sha') return false;
								},
							},
						},
						成务: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('成务'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].showHandcards();
									player.discardPlayerCard(2, result.targets[0], 'he', true);
									player.draw(player.countCards('h'));
								}
							},
						},
						奔袭: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'damageAfter',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && get.distance(player, event.player) <= 1;
							},
							content() {
								player.recover();
								player.draw();
							},
						},
						图南: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 5,
							filterTarget(card, player, target) {
								return true;
							},
							content() {
								'step 0';
								event.cards = get.cards(1);
								player.showCards(get.translation(player) + '对' + get.translation(target) + '发动了【图南】', event.cards);
								('step 1');
								var card = cards[0];
								var bool1 = game.hasPlayer(function (current) {
									return target.canUse(card, current, false);
								});
								var bool2 = game.hasPlayer(function (current) {
									return target.canUse({ name: 'sha' }, current);
								});
								if (bool1 && bool2) {
									target
										.chooseControl(function () {
											return 0;
										})
										.set('choiceList', ['使用' + get.translation(cards) + '.(没有距离限制)', '将' + get.translation(cards) + '当做【杀】使用'])
										.set('ai', function () {
											var list = [0, 1];
											return list.randomGet();
										});
								} else if (bool1) {
									event.directindex = 0;
								} else if (bool2) {
									event.directindex = 1;
								} else {
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
									event.finish();
								}
								('step 2');
								var card = cards[0];
								if (result && typeof event.directindex != 'number') {
									event.directindex = result.index;
								}
								if (event.directindex == 1) {
									event.insert(lib.skill.图南.content_sha, {
										player: target,
										targets: game.filterPlayer(),
										cards: cards,
									});
								} else {
									event.insert(lib.skill.图南.content_use, {
										player: target,
										card: card,
										targets: game.filterPlayer(),
									});
								}
							},
							content_sha() {
								'step 0';
								var select = get.select(get.info({ name: 'sha' }).selectTarget);
								if (select[1] == -1) {
									for (var i = 0; i < targets.length; i++) {
										if (!player.canUse({ name: 'sha' }, targets[i])) {
											targets.splice(i--, 1);
										}
									}
									if (targets.length) {
										player.useCard({ name: 'sha' }, cards, targets);
										event.finish();
									}
								} else {
									player
										.chooseTarget(select, '选择杀的目标', true, function (cardx, player, target) {
											var card = { name: 'sha' };
											return _status.event.targets.includes(target) && player.canUse(card, target, false);
										})
										.set('ai', function (target) {
											var card = { name: 'sha' };
											var player = _status.event.player;
											return get.effect(target, card, player, player);
										})
										.set('targets', targets)
										.set('card', card);
								}
								('step 1');
								if (result.bool) {
									player.useCard({ name: 'sha' }, cards, result.targets);
								}
							},
							content_use() {
								'step 0';
								var select = get.select(get.info(card).selectTarget);
								if (select[1] == -1) {
									for (var i = 0; i < targets.length; i++) {
										if (!player.canUse(card, targets[i], false)) {
											targets.splice(i--, 1);
										}
									}
									if (targets.length) {
										player.useCard(card, targets);
									}
									event.finish();
								} else {
									player
										.chooseTarget(select, '选择' + get.translation(card) + '的目标', true, function (cardx, player, target) {
											var card = _status.event.card;
											return _status.event.targets.includes(target) && player.canUse(card, target, false);
										})
										.set('ai', function (target) {
											var card = _status.event.card;
											var player = _status.event.player;
											return get.effect(target, card, player, player);
										})
										.set('targets', targets)
										.set('card', card);
								}
								('step 1');
								if (result.bool) {
									player.useCard(card, result.targets);
								}
							},
							ai: {
								order: 7,
								result: {
									target: 1,
								},
							},
						},
						闭境: {
							audio: 'ext:虎踞江东/audio:2',
							group: ['闭境_lose', '闭境_discard'],
							subSkill: {
								lose: {
									trigger: {
										player: 'loseEnd',
									},
									filter(event, player) {
										if (!player.storage.闭境 || !_status.currentPhase) return false; //QQQ
										if (_status.currentPhase == player) return false;
										return event.cards && event.cards.includes(player.storage.闭境);
									},
									forced: true,
									silent: true,
									popup: false,
									content() {
										_status.currentPhase.storage.bijing = player;
										_status.currentPhase.addTempSkill('闭境_effect');
									},
								},
								discard: {
									trigger: {
										player: 'phaseBegin',
									},
									forced: true,
									filter(event, player) {
										if (!player.storage.闭境) return false;
										return get.owner(player.storage.闭境) == player;
									},
									content() {
										player.discard(player.storage.闭境);
										delete player.storage.闭境;
									},
								},
								effect: {
									trigger: {
										player: 'phaseDiscardBegin',
									},
									forced: true,
									silent: true,
									popup: false,
									content() {
										player.storage.bijing.line(player, 'green');
										player.chooseToDiscard(2, 'he', true);
									},
								},
							},
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(player, event) {
								return event.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseCard(get.prompt('闭境'), 'h').set('ai', function (card) {
									if (card.name == 'shan') return 6;
									return 6 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									player.showCards(result.cards);
									player.storage.闭境 = result.cards[0];
								}
							},
						},
						拒南: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'qingchengshanjianxia青城山剑侠');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'qingchengshanjianxia青城山剑侠');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('拒南');
							},
						},
						宴戏: {
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('宴戏'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
									player.draw(2);
									player.addTempSkill('宴戏2', 'phaseAfter');
								}
							},
						},
						宴戏2: {
							mod: {
								maxHandcard(player, num) {
									return num + 2;
								},
							},
						},
						识人: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'useCard' },
							filter(event, player) {
								var type = get.type(event.card);
								var suitx = event.card.suit;
								if (suitx != 'heart' && suitx != 'diamond' && suitx != 'club' && suitx != 'spade') return false;
								if (type != 'basic' && type != 'trick') return false;
								if (!event.card.suit) return false;
								if (suitx && player.num('h', { suit: suitx })) {
									return event.player && event.player != player && _status.currentPhase != player && event.targets && event.targets.length;
								}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								var eff = 0;
								for (var i = 0; i < trigger.targets.length; i++) {
									eff += ai.get.effect(trigger.targets[i], trigger.card, trigger.player, player);
								}
								var str = '是否打出同花色的牌令' + get.translation(trigger.player);
								if (trigger.targets && trigger.targets.length) {
									str += '对' + get.translation(trigger.targets);
								}
								str += '的' + get.translation(trigger.card) + '失效？';
								var next = player.chooseCard(function (card) {
									return card.suit == trigger.card.suit;
								}, str);
								next.set('effect', eff);
								next.set('ai', function (card) {
									var effect = _status.event.effect;
									if (effect < 0) {
										var val = 9 - get.value(card);
										var nme = trigger.card.name;
										if (nme == 'tao') return val;
										if (nme == 'shunshou' && player == trigger.targets[0]) return val;
										if (nme == 'liuxinghuoyu') return val;
										if (nme == 'nanman') return val;
										if (nme == 'wanjian') return val;
										if (nme == 'jingleishan') return val;
										if (nme == 'chiyuxi') return val;
										if (nme == 'juedou' && (player == trigger.targets[0] || trigger.targets[0].hp == 1)) return val;
										if (nme == 'chenhuodajie') return val;
										if (nme == 'lebu' && trigger.targets[0].countCards('h') > trigger.targets[0].hp) return val;
										if (nme == 'sha' && trigger.targets[0].hp == 1 && !trigger.targets[0].num('h', 'shan')) return val;
										if (nme == 'jiedao' && trigger.targets[0] == player) return val;
										if (nme == 'yihuajiemu' && trigger.targets[0] == player) return val;
										if (nme == 'shuiyanqijun' && trigger.targets.includes(player)) return val;
										return 0;
									}
									return -1;
								});
								('step 1');
								if (result.bool) {
									player.discard(result.cards);
									trigger.untrigger();
									trigger.finish();
								} else {
									event.finish();
								}
								('step 2');
								player.gainPlayerCard(trigger.player, 'he', true);
								player.draw(2);
								ui.clear();
							},
							ai: {
								threaten: 2,
								expose: 0.3,
							},
						},
						曹婴凌人: {
							audio: 'ext:虎踞江东/audio:2',
							usable: 4,
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								if (!['basic', 'trick'].includes(get.type(event.card))) return false;
								if (get.tag(event.card, 'damage')) return true;
								return false;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt2('是否发动<凌人>【选择一个目标是此牌对其伤害+1你摸2张牌,并且你获得<奸雄>、<行殇>直到你下回合开始.】'), '请选择一名角色', function (card, player, target) {
									return player != target;
								});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									event.target.addTempSkill('曹婴凌人1', { global: '曹婴凌人End' });
								}
								('step 2');
								player.draw(2);
								player.addTempSkill('奸雄cy', { player: 'phaseBegin' });
								player.addTempSkill('行殇cy', { player: 'phaseBegin' });
							},
						},
						曹婴凌人1: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							content() {
								trigger.num += 1;
								player.removeSkill('曹婴凌人1');
							},
						},
						奸雄cy: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							content() {
								'step 0';
								if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0]) == 'd') {
									player.gain(trigger.cards, 'gain2');
								}
								player.draw();
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
										if (get.tag(card, 'damage') && player != target) return [1, 0.6];
									},
								},
							},
						},
						行殇cy: {
							audio: 'ext:虎踞江东/audio:2',
							gainable: true,
							trigger: {
								global: 'dieEnd',
							},
							_priority: 5,
							filter(event, player) {
								return event.playerCards && event.playerCards.length;
							},
							check(event) {
								for (var i = 0; i < event.playerCards.length; i++) {
									if (event.playerCards[i].name == 'du') return false;
								}
								return true;
							},
							content() {
								'step 0';
								player.gain(trigger.playerCards);
								player.$draw(trigger.playerCards);
								('step 1');
								for (var i = 0; i < trigger.playerCards.length; i++) {
									trigger.cards.remove(trigger.playerCards[i]);
								}
								trigger.playerCards.length = 0;
							},
						},
						//一名角色的回合开始时或结束时,你可以观看一名其他角色的手牌,你可以获得其中至多两张牌,并对其造成一点伤害
						曹婴伏间: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: ['phaseBegin', 'phaseEnd'],
							},
							filterTarget(card, player, target) {
								return player != target && target.countCards('h');
							},
							async content(event, trigger, player) {
								//QQQ
								var { result } = await player.chooseTarget('观看一名其他角色的手牌,你可以获得其中至多两张牌,并对其造成一点伤害', (card, player, target) => player != target).set('ai', (target) => target.isEnemiesOf(player));
								if (result.targets && result.targets[0]) {
									var Q = result.targets[0];
									if (Q.countCards('h')) {
										var { result } = await player.chooseButton(['获得其中至多两张牌', Q.getCards('h')], [1, 2]).set('ai', (button) => get.value(button.link));
										if (result.links && result.links[0]) {
											player.gain(result.links, 'gain2');
										}
									}
									Q.damage();
								}
							},
						},
						曹婴凤鸣: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'wendewuwei');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'wendewuwei');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('曹婴凤鸣');
							},
						},
						去疾: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							filterCard: true,
							selectCard() {
								var player = _status.event.player;
								var num = game.countPlayer(function (current) {
									return current.isDamaged();
								});
								return [1, Math.min(num, player.maxHp)];
							},
							filterTarget(card, player, target) {
								return target.hp < target.maxHp;
							},
							filter(event, player) {
								return true;
							},
							selectTarget() {
								return ui.selected.cards.length;
							},
							check(card) {
								var player = _status.event.player;
								if (
									ui.selected.cards.length >=
									game.countPlayer(function (current) {
										return get.attitude(player, current) > 0 && current.isDamaged();
									})
								) {
									return -1;
								}
								if (get.color(card) == 'black') return -1;
								return 9 - get.value(card);
							},
							content() {
								'step 0';
								target.recover();
								('step 1');
								for (var i = 0; i < cards.length; i++) {
									if (get.color(cards[i]) == 'black') {
										player.draw(2);
										break;
									}
								}
							},
							ai: {
								result: {
									target: 1,
								},
								order: 6,
							},
						},
						郡兵2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.hasSkill('郡兵');
								});
							},
							check(event, player) {
								var target = game.findPlayer(function (current) {
									return current.hasSkill('郡兵');
								});
								if (target) {
									var num = target.countCards('h');
									var att = get.attitude(player, target);
									if (num == 0) return true;
									if (num == 1) return att > -1;
									if (num == 2) return att > 0;
									return att > 1;
								}
								return false;
							},
							content() {
								'step 0';
								player.draw(2);
								if (player.hasSkill('郡兵')) {
									event.finish();
								} else {
									event.target = game.findPlayer(function (current) {
										return current.hasSkill('郡兵');
									});
								}
								('step 1');
								var cards = player.getCards('h');
								target.gain(cards, player);
								event.num = cards.length;
								player.$give(event.num, target);
								('step 2');
								if (player.isFriendsOf(target)) {
									target.chooseCard('选择还给' + get.translation(player) + '的牌', true, event.num);
								}
								('step 3');
								if (result.bool) {
									player.gain(result.cards, target);
									target.$give(result.cards.length, player);
								} else player.damage('nosource');
							},
						},
						郡兵: {
							audio: 'ext:虎踞江东/audio:2',
							global: '郡兵2',
						},
						mocuan謀篡: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							check(card) {
								return 8 - get.value(card);
							},
							filterTarget(card, player, target) {
								if (target.hp == Infinity) return false;
								if (target.hp > player.hp) return true;
								if (target.hp < player.hp && target.hp < target.maxHp) return true;
								return false;
							},
							content() {
								var num = target.hp - player.hp;
								player.draw(num);
								if (num > 0) {
									target.damage(num);
								} else if (num < 0 && target.hp < target.maxHp) {
									target.recover(-num);
								}
							},
							ai: {
								order: 8.5,
								result: {
									target(player, target) {
										var num;
										if (player.hp > target.maxHp) {
											num = player.hp - target.maxHp;
										} else {
											num = player.hp - target.hp;
										}
										if (target.hp == 1 && num) {
											return num + 1;
										}
										return num;
									},
								},
							},
						},
						景略jl: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('景略jl')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true, 'visible');
									var target = result.targets[0];
									player.line(target, 'green');
									game.log(target, '成为了', '【景略】', '的目标');
									target.storage.景略jl2 = player;
									target.addSkill('景略jl2');
								}
							},
						},
						景略jl2: {
							intro: {
								content: '使用牌时失效每回合触发3次',
							},
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCardToBegin' },
							forced: true,
							usable: 3,
							filter(event, player) {
								return player.storage.景略jl2 && player.storage.景略jl2.isIn();
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							group: '景略jl3',
						},
						景略jl3: {
							trigger: { global: 'dieAfter' },
							silent: true,
							filter(event, player) {
								return event.player == player.storage.景略jl2;
							},
							content() {
								player.removeSkill('景略jl2');
							},
						},
						荡异: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 3;
								var fellow = game.addFellow(pos, 'sishi死士');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('<font color=#778899>死士</font>');
								fellow.draw(fellow.maxHp);
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'sishi死士');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('<font color=#778899>死士</font>');
								fellow1.draw(fellow1.maxHp);
								//------------------------------------------------------------------
								var fellow2 = game.addFellow(pos, 'sishi死士');
								fellow2.side = player.side;
								if (player.identity != 'zhu') fellow2.identity = player.identity;
								else fellow2.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow2._group = player.identity;
								fellow2.setIdentity('<font color=#778899>死士</font>');
								fellow2.draw(fellow2.maxHp);
								('step 1');
								player.removeSkill('荡异');
							},
						},
						弘仪hy: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								var num = Math.min(2, game.dead.length);
								if (!num) return 1;
								if (num == 1) return 7 - get.value(card);
								return 5 - get.value(card);
							},
							content() {
								player.addTempSkill('弘仪hy2', { player: 'phaseBeginStart' });
								player.storage.弘仪hy2.add(target);
								player.markSkill('弘仪hy2');
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (target.hasJudge('lebu')) return -0.5;
										return -1 - target.countCards('h');
									},
								},
							},
						},
						弘仪hy2: {
							audio: '弘仪hy',
							trigger: {
								global: 'damageBegin',
							},
							charlotte: true,
							forced: true,
							logTarget: 'source',
							filter(event, player) {
								return player.storage.弘仪hy2.includes(event.source);
							},
							content() {
								'step 0';
								trigger.source.judge();
								('step 1');
								if (result.color == 'black') {
									trigger.num--;
									trigger.source.loseHp();
								} else trigger.player.draw();
							},
							intro: {
								content: '已选中$为技能目标',
							},
							init(player, skill) {
								if (!player.storage[skill]) player.storage[skill] = [];
							},
						},
						劝封qf: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							filter(event, player) {
								return player.countCards('h', 'tao') <= 0;
							},
							forced: true,
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('tao'));
										list[i].$draw();
										list[i].gainMaxHp(2);
										list[i].draw(2);
									}
								}
								player.gain(game.createCard('tao'));
								player.gainMaxHp(2);
								player.draw(2);
							},
						},
						死士: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'useCardToBegin' },
							usable: 1,
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								('step 1');
								player.gainPlayerCard(trigger.player, 'he', true, 'visible');
							},
						},
						长姬: {
							group: ['长姬1', '长姬2'],
						},
						长姬1: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseAfter' },
							forced: true,
							filter(event, player) {
								return player.hasSkill('长姬y');
							},
							content() {
								'step 0';
								player.gainMaxHp();
								('step 1');
								player.recover();
								player.draw(3);
								player.removeSkill('长姬y');
								('step 2');
								var card = get.cardPile('sha', 'field');
								if (card) {
									player.gain(card, 'gain2', 'log');
								}
								('step 3');
								player.chooseTarget(get.prompt('长姬')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 4');
								if (result.bool) {
									player.discardPlayerCard(2, result.targets[0], 'he', true);
								}
							},
							ai: {
								effect: {
									target(card) {
										if (get.tag(card, 'damage')) {
											return [0, -2];
										}
									},
								},
							},
						},
						长姬2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								return !player.hasSkill('长姬x');
								return false;
							},
							content() {
								player.addTempSkill('长姬x', 'damageAfter');
							},
							ai: {
								threaten: 2.2,
							},
						},
						长姬x: {
							audio: 'ext:虎踞江东/audio:2',
							forced: true,
							trigger: { global: 'damageEnd' },
							content() {
								player.addSkill('长姬y');
							},
						},
						长姬y: {},
						谮构: {
							audio: 4,
							trigger: { global: 'useCardAfter' },
							usable: 1,
							filter(event, player) {
								return get.type(event.card) != 'equip';
							},
							content() {
								'step 0';
								var list = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].isInPile()) {
										list.push(trigger.cards[i]);
									}
								}
								player.gain(list, 'gain2', 'log');
								player.draw();
								player.chooseControl('选项一', '选项二', '选项三').set('prompt', '谮构<br><br><div class="text">选项一:令' + get.translation(trigger.player) + '失去一点体力</div><br><div class="text">选项二:令' + get.translation(trigger.player) + '回复一点体力</div><br><div class="text">选项三:你摸一张牌</div></br>');
								('step 1');
								if (result.control == '选项一') {
									trigger.player.loseHp();
								}
								if (result.control == '选项二') {
									trigger.player.recover();
								} else {
									player.draw();
								}
							},
						},
						摧坚cj: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('he') > 0;
							},
							content() {
								'step 0';
								event.num = target.countCards('h', 'shan');
								event.target = target;
								player.gain(target.getCards('he'));
								target.$give(target.countCards('he'), player);
								if (event.num) player.chooseCard(true, num, 'he', '交给其' + get.translation(num) + '张牌');
								('step 1');
								if (result.bool) {
									target.gain(result.cards, player);
									player.$give(result.cards, target);
								}
							},
							ai: {
								threaten: 4.8,
								order: 1,
								result: {
									target(player, target) {
										if (target.countCards('h') > target.hp) return -100;
										return -2;
									},
								},
							},
						},
						同援: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'damageEnd' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('同援')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(
										result.targets[0].countCards('h', function (card) {
											return get.type(card) == 'basic';
										})
									);
								}
							},
						},
						选备: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('选备'));
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									player
										.chooseTarget(get.prompt('选备', event.target), function (card, player, target) {
											var source = _status.event.source;
											return true;
										})
										.set('source', target)
										.set('goon', get.damageEffect(target, player, player) > 0)
										.set('ai', function (target) {
											if (!_status.event.goon) return 0;
											var evt = _status.event;
											return get.effect(target, { name: 'sha' }, evt.source, evt.player);
										});
								} else event.finish();
								('step 2');
								if (result.bool) {
									event.target2 = result.targets[0];
									player.line2([target, event.target2]);
								} else event.finish();
								('step 3');
								target.useCard({ name: 'sha' }, event.target2, false);
								('step 4');
								event.target2.chooseToDiscard('he', true, 2);
								player.draw(2);
							},
						},
						娴婉: {
							audio: 'ext:虎踞江东/audio:2',
							srlose: true,
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: { name: 'sha' },
							viewAsFilter(player) {
								return player.isLinked();
							},
							prompt: '重置你的武将牌,视为打出一张杀',
							check() {
								return 1;
							},
							onuse(result, player) {
								if (player.isLinked()) player.link();
							},
							onrespond(result, player) {
								if (player.isLinked()) player.link();
							},
							precontent() {
								player.draw();
							},
							ai: {
								skillTagFilter(player) {
									return player.isLinked();
								},
								respondSha: true,
							},
							group: ['娴婉2'],
						},
						娴婉2: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'chooseToRespond',
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: { name: 'shan' },
							viewAsFilter(player) {
								return !player.isLinked();
							},
							prompt: '横置你的武将牌,视为打出一张闪',
							check() {
								return 1;
							},
							onrespond(result, player) {
								player.link();
							},
							precontent() {
								player.draw();
							},
							ai: {
								skillTagFilter(player) {
									return !player.isLinked();
								},
								respondShan: true,
							},
						},
						婉嫕: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCardToBegin' },
							filter(event, player) {
								var card = event.card;
								if (get.type(card) == 'basic' || (get.type(card) == 'trick' && card.name != 'wuxie')) return event.target; //QQQ
								return false;
							},
							content() {
								'step 0';
								player.gainPlayerCard(trigger.target, 'he', true);
								('step 1');
								if (player == game.me) {
									game.addVideo('delay', null);
								}
								player.chooseCard('选择1张牌作为婉嫕', 1, true).ai = function (card) {
									return get.value(card);
								};
								('step 2');
								player.lose(result.cards, ui.special)._triggered = null;
								if (!player.storage.婉嫕) player.storage.婉嫕 = [];
								player.storage.婉嫕 = player.storage.婉嫕.concat(result.cards);
								game.addVideo('storage', player, ['婉嫕', get.cardsInfo(player.storage.婉嫕), 'cards']);
							},
							mark: true,
							intro: {
								mark(dialog, content, player) {
									if (content && content.length) {
										if (player == game.me || player.isUnderControl()) {
											dialog.addAuto(content);
										} else {
											return '共有' + get.cnNumber(content.length) + '张婉嫕';
										}
									}
								},
								content(content, player) {
									if (content && content.length) {
										if (player == game.me || player.isUnderControl()) {
											return get.translation(content);
										}
										return '共有' + get.cnNumber(content.length) + '张婉嫕';
									}
								},
							},
							group: '婉嫕2',
						},
						婉嫕2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: ['phaseEnd', 'damageEnd'] },
							forced: true,
							filter(event, player) {
								return player.storage.婉嫕 && player.storage.婉嫕.length;
							},
							content() {
								for (var i = 0; i < player.storage.婉嫕.length; i++) {
									player.gain(player.storage.婉嫕[i]);
									player.storage.婉嫕.splice(i--, 1);
								}
							},
						},
						埋祸: {
							audio: 'ext:虎踞江东/audio:2',
							usable: 1,
							trigger: { target: 'shaBegin' },
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								player.gainPlayerCard(trigger.player, 'he', true);
								('step 1');
								if (player == game.me) {
									game.addVideo('delay', null);
								}
								player.chooseCard('选择1张牌作为婉嫕', 1, true).ai = function (card) {
									return get.value(card);
								};
								('step 2');
								player.lose(result.cards, ui.special)._triggered = null;
								if (!player.storage.婉嫕) player.storage.婉嫕 = [];
								player.storage.婉嫕 = player.storage.婉嫕.concat(result.cards);
								game.addVideo('storage', player, ['婉嫕', get.cardsInfo(player.storage.婉嫕), 'cards']);
							},
							ai: {
								expose: 1,
								result: {
									target: -3,
								},
							},
						},
						固营: {
							audio: 'ext:虎踞江东/audio:2',
							usable: 2,
							group: '固营2',
							trigger: { player: 'loseAfter' },
							filter(event, player) {
								return event.cards && event.cards.length < 2;
							},
							content() {
								'step 0';
								var card = game.createCard(trigger.cards[0].name, trigger.cards[0].suit, trigger.cards[0].number, trigger.cards[0].nature);
								player.gain(card);
								player.chooseToUse();
								if (typeof player.storage.固营 != 'number') {
									player.storage.固营 = 1;
								}
								player.storage.固营++;
								('step 1');
								player.chooseTarget(get.prompt('固营')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
								}
							},
						},
						固营2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseBegin' },
							filter(event, player) {
								return player.storage.固营;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('固营')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(player.storage.固营, result.targets[0], 'he', true);
									player.storage.固营 = 0;
								}
							},
						},
						睦阵: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player.draw();
								player.chooseTarget(get.prompt('睦阵')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
								}
								('step 2');
								player.chooseTarget().set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								event.target = result.targets[0];
								player.chooseCard(true, 'he', '交给' + get.translation(event.target) + '一张牌').set('ai', function (card) {
									if (get.position(card) == 'e') return -1;
									if (card.name == 'shan') return 1;
									if (get.type(card) == 'equip') return 0.5;
									return 0;
								});
								('step 4');
								event.target.gain(result.cards, player);
								player.$give(result.cards, event.target);
								event.card = result.cards[0];
								if (get.type(event.card) != 'equip') event.finish();
								('step 5');
								if (!event.target.isMin()) {
									event.target
										.chooseBool('是否装备' + get.translation(event.card) + '？')
										.set('ai', function () {
											var current = _status.event.player.getCards('e', { subtype: get.subtype(_status.event.card) });
											if (current && current.length) {
												return get.equipValue(event.card) > get.equipValue(current[0]);
											}
											return true;
										})
										.set('card', event.card);
								} else {
									event.finish();
								}
								('step 6');
								if (result.bool) {
									event.target.equip(event.card);
								}
							},
						},
						请决: {
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								var card = event.card;
								if (get.type(card) != 'equip' && event.player != player) return true;
								return false;
							},
							trigger: { global: 'useCardToBegin' },
							content() {
								'step 0';
								player.chooseToCompare(trigger.player);
								('step 1');
								if (result.bool) {
									trigger.cancel();
								}
							},
						},
						奉节: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'phaseEnd',
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								player.draw(trigger.player.hp);
								('step 1');
								player.chooseTarget(get.prompt('奉节')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, trigger.player.hp);
								}
							},
						},
						//当其他角色对你使用牌时,你可以废除一名角色的一项装备栏,并可选择一名角色你选择一项:视为该角色对其使用一张杀、视为该角色使用桃、视为该角色使用酒、视为该角色对其使用一张过河拆桥、视为该角色对其使用一张顺手牵羊
						浮萍: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { target: 'useCardToBegin' },
							filter(event, player) {
								if (!event.target) return false;
								if (event.player == player) return false;
								return true;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('浮萍')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									player.chooseControl('废除其武器栏', '废除其防具栏', '废除其+1坐骑栏', '废除其-1坐骑栏', '废除其宝物栏');
								} else {
									event.goto(3);
								}
								('step 2');
								if (result.control == '废除其武器栏') {
									target.disableEquip('equip1');
								} //QQQ
								if (result.control == '废除其防具栏') {
									target.disableEquip('equip2');
								}
								if (result.control == '废除其+1坐骑栏') {
									target.disableEquip('equip3');
								}
								if (result.control == '废除其-1坐骑栏') {
									target.disableEquip('equip4');
								}
								if (result.control == '废除其宝物栏') {
									target.disableEquip('equip5');
								}
								('step 3');
								player.chooseTarget(get.prompt('浮萍')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 4');
								if (result.bool) {
									player.chooseControl('视为使用杀', '视为使用桃', '视为使用酒', '视为使用过河拆桥', '视为使用顺手牵羊');
									player.storage.浮萍 = result.targets[0];
								} else {
									event.finish();
								}
								('step 5');
								if (result.control == '视为使用杀') {
									player.storage.浮萍.useCard({ name: 'sha' }, trigger.player, false);
								}
								if (result.control == '视为使用桃') {
									player.storage.浮萍.useCard({ name: 'tao' }, player.storage.浮萍);
								}
								if (result.control == '视为使用酒') {
									player.storage.浮萍.useCard({ name: 'jiu' }, player.storage.浮萍);
								}
								if (result.control == '视为使用过河拆桥') {
									player.storage.浮萍.useCard({ name: 'guohe' }, trigger.player);
								}
								if (result.control == '视为使用顺手牵羊') {
									player.storage.浮萍.useCard({ name: 'shunshou' }, trigger.player);
								}
								delete player.storage.浮萍;
							},
						},
						炜烈: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('炜烈')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].gainMaxHp();
									result.targets[0].recover();
									result.targets[0].draw(2);
									result.targets[0].chooseToDiscard('he', true);
									player.draw(2);
									player.chooseToDiscard('he', true);
								}
							},
						},
						弥笃: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player
									.chooseControl('选项一', '选项二')
									.set('prompt', '弥笃<br><br><div class="text" style="color: DarkGray">选项一:增加1到4点体力上限,令一名角色摸等量牌<br><br>选项二:减少1到4点体力上限,令等量角色获得泼墨</div>')
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.control == '选项一') {
									player.chooseControl('1', '2', '3', '4');
									event.goto(2);
								} else {
									player.chooseControl('1', '2', '3', '4');
									event.goto(4);
								}
								('step 2');
								var num;
								switch (result.control) {
									case '1':
										num = 1;
										break;
									case '2':
										num = 2;
										break;
									case '3':
										num = 3;
										break;
									case '4':
										num = 4;
										break;
								}
								player.gainMaxHp(num);
								event.num = num;
								player.chooseTarget(get.prompt('弥笃')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].draw(event.num);
								}
								event.finish();
								('step 4');
								var num;
								switch (result.control) {
									case '1':
										num = 1;
										break;
									case '2':
										num = 2;
										break;
									case '3':
										num = 3;
										break;
									case '4':
										num = 4;
										break;
								}
								player.loseMaxHp(num);
								event.num = num;
								player.chooseTarget(get.prompt('弥笃'), [1, num]).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 5');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].addTempSkill('泼墨', { player: 'phaseBegin' });
									}
								}
							},
						},
						泼墨: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'chooseToRespondBegin' },
							filter(event, player) {
								if (event.responded) return false;
								if (!event.filterCard || !event.filterCard({ name: 'shan' }, player)) return false;
								if (player.hasSkill('泼墨2')) return false;
								if (event.parent.name != 'sha') return false;
								var hs = player.countCards('h', { color: 'red' });
								var hm = player.countCards('h', { type: 'basic' });
								if (hs < 1 && hm < 1) return false;
								return true;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseCard(get.prompt('泼墨'), 'h', function (card) {
										return get.type(card) == 'basic' || get.color(card) == 'red';
									})
									.set('ai', function (card) {
										if (!_status.event.player.countCards('h', 'shan')) {
											return 8 - get.value(card);
										}
										return 6 - get.value(card);
									});
								('step 1');
								if (result.bool) {
									trigger.untrigger();
									trigger.responded = true;
									trigger.result = { bool: true, card: { name: 'shan' } };
									player.lose(result.cards, ui.special);
									player.$throw(result.cards);
									event.card = result.cards[0];
									player.addTempSkill('泼墨2');
								} else {
									event.finish();
								}
								('step 2');
								if (player == game.me && event.card) {
								}
								('step 3');
								if (event.card) {
									ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
								}
							},
							group: ['泼墨_count', '泼墨_count2', '泼墨_use'],
						},
						泼墨2: {},
						泼墨_count: {
							init(player) {
								player.storage.泼墨 = {};
							},
							trigger: { global: 'phaseBegin' },
							silent: true,
							content() {
								player.storage.泼墨 = {};
							},
						},
						泼墨_count2: {
							trigger: { player: 'useCard' },
							silent: true,
							content() {
								if (!player.storage.泼墨) player.storage.泼墨 = {};
								switch (trigger.card.name) {
									case 'sha':
										player.storage.泼墨.sha = true;
										break;
									case 'tao':
										player.storage.泼墨.tao = true;
										break;
									case 'jiu':
										player.storage.泼墨.jiu = true;
										break;
								}
							},
						},
						泼墨_use: {
							enable: 'chooseToUse',
							filter(event, player) {
								if (!player.storage.泼墨) player.storage.泼墨 = {};
								if ((!player.storage.泼墨.sha && event.filterCard({ name: 'sha' }, player, event)) || (!player.storage.泼墨.jiu && event.filterCard({ name: 'jiu' }, player, event)) || (!player.storage.泼墨.tao && event.filterCard({ name: 'tao' }, player, event))) {
									return player.hasCard(function (card) {
										return get.type(card) == 'basic' || get.color(card) == 'red';
									}, 'h');
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									if (!player.storage.泼墨.sha && event.filterCard({ name: 'sha' }, player, event)) {
										list.push(['基本', '', 'sha']);
										list.push(['基本', '', 'sha', 'fire']);
										list.push(['基本', '', 'sha', 'thunder']);
									}
									if (!player.storage.泼墨.tao && event.filterCard({ name: 'tao' }, player, event)) {
										list.push(['基本', '', 'tao']);
									}
									if (!player.storage.泼墨.jiu && event.filterCard({ name: 'jiu' }, player, event)) {
										list.push(['基本', '', 'jiu']);
									}
									return ui.create.dialog('泼墨', [list, 'vcard'], 'hidden');
								},
								check(button) {
									var player = _status.event.player;
									var card = { name: button.link[2], nature: button.link[3] };
									if (
										game.hasPlayer(function (current) {
											return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
										})
									) {
										switch (button.link[2]) {
											case 'tao':
												return 5;
											case 'jiu':
												return 3.01;
											case 'sha':
												if (button.link[3] == 'fire') return 2.95;
												else if (button.link[3] == 'fire') return 2.92;
												else return 2.9;
										}
									}
									return 0;
								},
								backup(links, player) {
									return {
										filterCard(card) {
											return get.type(card) == 'basic' || get.color(card) == 'red';
										},
										viewAs: { name: links[0][2], nature: links[0][3] },
										position: 'h',
										popname: true,
										precontent() {
											'step 0';
											var card = event.result.cards[0];
											event.card = card;
											player.$throw(card, 1000);
											game.log(player, '将', card, '置于牌堆顶');
											event.result.cards.length = 0;
											player.lose(card);
											('step 1');
											('step 2');
											ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
										},
									};
								},
								prompt(links, player) {
									return '将一张基本牌或红色牌置于牌堆顶并视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
								},
							},
							ai: {
								order() {
									var player = _status.event.player;
									var event = _status.event;
									if (!player.storage.泼墨.jiu && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
										return 3.1;
									}
									return 2.9;
								},
								save: true,
								respondSha: true,
								skillTagFilter(player, tag, arg) {
									if (
										player.hasCard(function (card) {
											return get.color(card) == 'black' && get.type(card) != 'basic';
										}, 'h')
									) {
										if (!player.storage.泼墨) player.storage.泼墨 = {};
										if (tag == 'respondSha') {
											if (arg != 'use') return false;
											if (player.storage.泼墨.sha) return false;
										} else {
											if (player.storage.泼墨.tao && player.storage.泼墨.jiu) return false;
										}
									} else {
										return false;
									}
								},
								result: {
									player: 1,
								},
							},
						},
						贤望: {
							mod: {
								globalTo(from, to, current) {
									if (to.maxHp - to.hp > 0) return current + 2 + to.maxHp - to.hp;
								},
							},
							ai: {
								threaten: 0.8,
							},
						},
						//你于回合外失去牌结束后, 你可以选择一项: 1, 获得一张你选择的基本牌(花色点数为随机), 对一名角色造成一点伤害; 2, 对一名角色造成一点伤害, 令其弃置你选择的基本牌名的所有手牌
						哲妇: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'loseAfter' },
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								return true;
							},
							content() {
								'step 0';
								player
									.chooseControl('选项一', '选项二')
									.set('prompt', '哲妇<br><br><div class="text" style="color: #800080">选项一:获得一张你选择的基本牌(花色点数为随机),对一名角色造成一点伤害<br><br>选项二:对一名角色造成一点伤害,令其弃置你选择的基本牌名的所有手牌</div>')
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.control == '选项一') {
									player.chooseControl('杀', '闪', '桃', '酒');
									event.goto(2);
								} else {
									player.chooseControl('杀', '闪', '桃', '酒');
									event.goto(4);
								}
								('step 2');
								var name;
								switch (result.control) {
									case '杀':
										name = 'sha';
										break;
									case '闪':
										name = 'shan';
										break;
									case '桃':
										name = 'tao';
										break;
									case '酒':
										name = 'jiu';
										break;
								}
								event.name = name;
								player.gain(game.createCard(name));
								player.$draw();
								player.chooseTarget(get.prompt('哲妇')).set('ai', (target) => -get.attitude(player, target));
								('step 3');
								if (result.bool) {
									result.targets[0].damage();
								}
								event.finish();
								('step 4');
								var name;
								switch (result.control) {
									case '杀':
										name = 'sha';
										break;
									case '闪':
										name = 'shan';
										break;
									case '桃':
										name = 'tao';
										break;
									case '酒':
										name = 'jiu';
										break;
								}
								event.name = name;
								player.chooseTarget(get.prompt('哲妇')).set('ai', (target) => -get.attitude(player, target)); //QQQ
								('step 5');
								if (result.bool) {
									result.targets[0].damage();
									var card = result.targets[0].getCards('h', function (card) {
										return card.name == event.name;
									});
									result.targets[0].discard(card);
								}
							},
						},
						遗毒: {
							usable: 1,
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								if (!['basic', 'trick'].includes(get.type(event.card))) return false;
								if (get.tag(event.card, 'damage')) return true;
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('遗毒'), function (card, player, target) {
										return trigger.targets.includes(target);
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									event.X = result.targets[0];
									player
										.chooseControl('基本牌', '锦囊牌')
										.set('prompt', '哲妇<br><br><div class="text" style="color: #800080; text-align:center">令其弃置全部基本牌或锦囊牌</div>')
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								} else event.finish();
								('step 2');
								if (result.control == '基本牌') {
									var card = event.X.getCards('h', function (card) {
										return get.type(card) == 'basic';
									});
									event.X.discard(card);
								} else {
									var card = event.X.getCards('h', function (card) {
										return get.type(card, 'trick') == 'trick';
									});
									event.X.discard(card);
								}
								player.draw(2);
							},
							ai: {
								threaten: 1.4,
							},
						},
						定措: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'damageEnd', source: 'damageEnd' },
							usable: 1,
							content() {
								'step 0';
								player.draw(2);
								player.chooseTarget(get.prompt('定措')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true);
								}
							},
						},
						狷狭: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								event.num = 2;
								('step 1');
								player
									.chooseTarget(get.prompt('狷狭'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'hej', true);
									player.discardPlayerCard(result.targets[0], 'hej', true);
									result.targets[0].damage();
									player.useCard({ name: 'sha' }, result.targets[0], false);
								} else {
									event.finish();
								}
								('step 3');
								if (--event.num > 0) {
									player.chooseBool('是否再次发动【狷狭】？');
								} else {
									event.finish();
								}
								('step 4');
								if (result.bool) {
									event.goto(1);
								}
							},
						},
						占梦: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'chooseToUse',
							usable: 2,
							async content(event, trigger, player) {
								//QQQ
								var { result } = await player.chooseTarget(get.prompt('占梦')).set('ai', (target) => -get.attitude(player, target));
								if (result.targets && result.targets[0]) {
									var Q = result.targets[0];
									if (Q.countCards('he')) await player.gainPlayerCard(Q, 'he', true);
									if (player.countCards('he')) {
										var { result } = await player.chooseCard('选择1张牌置于牌堆顶', 1, true, 'he');
										if (result.cards && result.cards[0]) {
											ui.cardPile.insertBefore(result.cards[0], ui.cardPile.firstChild);
											game.log(player, '将', result.cards[0], '置于牌堆顶');
										}
									}
									var { result } = await Q.judge();
									if (result.color == 'black') Q.loseHp();
									else Q.recover();
								}
							},
						},
						解卜: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							async content(event, trigger, player) {
								//QQQ
								var { result } = await player.chooseTarget(get.prompt('解卜')).set('ai', (target) => -get.attitude(player, target));
								if (result.targets && result.targets[0]) {
									var Q = result.targets[0];
									if (Q.countCards('he')) await player.gainPlayerCard(Q, 'he', true);
									if (player.countCards('he')) {
										var { result } = await player.chooseCard('选择1张牌置于牌堆顶', 1, true, 'he');
										if (result.cards && result.cards[0]) {
											ui.cardPile.insertBefore(result.cards[0], ui.cardPile.firstChild);
											game.log(player, '将', result.cards[0], '置于牌堆顶');
										}
									}
								}
							},
						},
						勘破2: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'chooseToUse',
							usable: 1,
							viewAs: { name: 'sha' },
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAsFilter(player) {
								return true;
							},
							prompt: '视为使用杀',
							precontent() {
								player.draw(2);
							},
						},
						勘破: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: ['phaseBegin', 'shaBegin'] },
							content() {
								'step 0';
								player.chooseTarget().set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) player.gainPlayerCard('he', result.targets[0], 1, 'visible');
								else event.finish();
								('step 2');
								if (result.bool) {
									if (get.type(result.cards[0]) == 'trick') {
										player.chooseTarget().set('ai', function (target) {
											return get.attitude(player, target);
										});
									} else event.finish();
								} else event.finish();
								('step 3');
								if (result.bool) {
									event.target = result.targets[0];
									player.chooseCard(true, 'he', '交给' + get.translation(event.target) + '一张牌').set('ai', function (card) {
										if (get.position(card) == 'e') return -1;
										if (card.name == 'shan') return 1;
										if (get.type(card) == 'equip') return 0.5;
										return 0;
									});
								} else event.finish();
								('step 4');
								event.target.gain(result.cards, player);
								player.$give(result.cards, event.target);
								player.gain(game.createCard('shunshou'));
								player.$draw();
							},
							group: '勘破2',
						},
						更战: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + player.storage.更战;
								},
							},
							audio: 'ext:虎踞江东/audio:2',
							marktext: '更',
							trigger: {
								global: 'shaEnd',
							},
							filter(event, player) {
								return event.player != player;
							},
							forced: true,
							content() {
								player.draw(trigger.num);
								if (typeof player.storage.更战 == 'number') {
									player.storage.更战++;
								} else {
									player.storage.更战 = 1;
								}
								player.markSkill('更战');
							},
							intro: {
								name: '更战',
								content: 'mark',
							},
							init(player) {
								player.storage.更战 = 0;
							},
							onremove(player) {
								player.unmarkSkill('更战');
								delete player.storage.更战;
							},
							group: '更战2',
						},
						更战2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							filter(event, player) {
								return player.storage.更战;
							},
							content() {
								'step 0';
								event.num = player.storage.更战;
								('step 1');
								player.storage.更战 = 0;
								player.unmarkSkill('更战');
								for (var i = 0; i < event.num; i++) {
									player.gain(game.createCard('sha'));
									player.$draw();
								}
							},
						},
						z忠j鉴: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('z忠j鉴')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(3, result.targets[0], 'he', true);
									player.draw(2);
								}
							},
						},
						c才s识: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseUseBegin' },
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('c才s识'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.addSkill('c才s识2');
									target.storage.c才s识2 += 2;
									target.markSkill('c才s识2');
									target.addTempSkill('c才s识4', 'phaseAfter');
									player.addSkill('c才s识3');
									player.storage.c才s识3 += 2;
									player.markSkill('c才s识3');
									player.recover();
								}
							},
						},
						c才s识2: {
							silent: true,
							mark: true,
							intro: { content: '手牌上限-#' },
							init(player) {
								player.storage.c才s识2 = 0;
							},
							mod: {
								maxHandcard(player, num) {
									return num - player.storage.c才s识2;
								},
							},
						},
						c才s识3: {
							silent: true,
							mark: true,
							intro: { content: '手牌上限+#' },
							init(player) {
								player.storage.c才s识3 = 0;
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.storage.c才s识3;
								},
							},
						},
						c才s识4: {
							mark: true,
							mod: {
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
							intro: {
								content: '不能使用或打出牌',
							},
						},
						非臣: {
							audio: 'ext:虎踞江东/audio:2',
							forced: true,
							trigger: { player: 'damageBegin', target: 'useCardToBegin' },
							content() {
								player.addTempSkill('非臣2', 'phaseAfter');
							},
						},
						非臣2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								player.gainPlayerCard(trigger.player, 'he', true);
							},
						},
						鹰视: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							content() {
								'step 0';
								var num = player.maxHp;
								player.chooseCardButton(num, true, get.cards(num), '按顺序将卡牌置于牌堆顶(先选择的在上)').set('ai', function (button) {
									return get.value(button.link);
								});
								('step 1');
								if (result.bool) {
									var list = result.links.slice(0);
									while (list.length) {
										ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
									}
								}
							},
						},
						雄志: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								event.cards = get.cards(player.maxHp);
								player.showCards(event.cards);
								('step 1');
								event.cards = event.cards.filter((i) => {
									if (get.tag(i, 'damage')) {
										player.gain(i);
										player.chooseToUse({
											prompt: '雄志:是否使用一张带伤害标签的牌', //'雄志:是否使用一张与该伤害牌同名的牌',
											filterCard(card) {
												return get.tag(card, 'damage');
											},
										});
										return false;
									}
									return true;
								});
							},
						},
						通权: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCardBegin' },
							filter(event, player) {
								return player == _status.currentPhase;
							},
							usable: 4,
							content() {
								'step 0';
								var num = player.maxHp;
								player.chooseCardButton(num, true, get.cards(num), '按顺序将卡牌置于牌堆顶(先选择的在上)').set('ai', function (button) {
									return get.value(button.link);
								});
								('step 1');
								if (result.bool) {
									var list = result.links.slice(0);
									while (list.length) {
										ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
									}
								}
								player.draw();
							},
						},
						参鉴: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'useCardAfter',
							},
							usable: 1,
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								'step 0';
								player.discardPlayerCard(get.prompt('参鉴', trigger.player), trigger.player, 'he', false);
								('step 1');
								if (result.bool) {
									if (get.color(result.cards[0]) == 'black') {
										event.goto(2);
									} else event.goto(4);
								}
								('step 2');
								player.chooseTarget(get.prompt('参鉴'));
								('step 3');
								if (result.bool) {
									player.useCard(game.createCard(trigger.card), result.targets[0]);
								} else {
									event.finish();
								}
								('step 4');
								player.gainPlayerCard(trigger.player, 'he', true);
							},
						},
						鉴从: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								global: 'drawEnd',
							},
							usable: 1,
							content() {
								player.draw(2);
							},
						},
						陷嗣焰魂锁身: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: ['phaseBegin', 'damageBegin', 'dyingBegin'] },
							forced: true,
							init(player) {
								player.storage.陷嗣焰魂锁身 = [];
							},
							content() {
								'step 0';
								player.chooseTarget(
									get.prompt('陷嗣焰魂锁身'),
									[1, 4],
									function (card, player, target) {
										return target.countCards('he') > 0;
									},
									function (target) {
										return -get.attitude(_status.event.player, target);
									}
								);
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (event.targets.length) {
									var target = event.targets.shift();
									event.current = target;
									player.choosePlayerCard(target, true);
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									player.storage.陷嗣焰魂锁身 = player.storage.陷嗣焰魂锁身.concat(result.links);
									player.markSkill('陷嗣焰魂锁身');
									event.current.lose(result.links, ui.special);
									event.current.$give(result.links, player);
									event.goto(2);
								}
							},
							intro: {
								content: 'cards',
								onunmark(storage, player) {
									if (storage && storage.length) {
										for (var i = 0; i < storage.length; i++) {
											storage[i].discard();
										}
										player.$throw(storage);
										player.storage.陷嗣焰魂锁身.length = 0;
									}
								},
							},
							ai: {
								threaten: 2,
							},
							group: '陷嗣焰魂锁身2',
						},
						陷嗣焰魂锁身2: {
							enable: 'phaseUse',
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return player.storage.陷嗣焰魂锁身.length;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('陷嗣焰魂锁身2'), [1, 4]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										if (!result.targets[i].isLinked()) {
											result.targets[i].link(true);
										}
									}
									result.targets[0].damage('fire');
									player.draw(player.storage.陷嗣焰魂锁身.length);
									player.$throw(player.storage.陷嗣焰魂锁身.slice(0), 1000);
									while (player.storage.陷嗣焰魂锁身.length) {
										player.storage.陷嗣焰魂锁身.shift().discard();
									}
									player.unmarkSkill('陷嗣焰魂锁身');
								}
							},
						},
						开济: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: ['phaseBegin', 'damageEnd'] },
							content() {
								'step 0';
								player.chooseTarget(
									get.prompt('开济'),
									[1, 4],
									function (card, player, target) {
										return target.countCards('he') > 0;
									},
									function (target) {
										return -get.attitude(_status.event.player, target);
									}
								);
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
								}
								('step 2');
								if (trigger.name == 'phase') {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].gain(game.createCard('sha'));
										}
									}
								}
								if (trigger.name == 'damage') {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].gain(game.createCard('tao'));
										}
									}
								}
							},
						},
						慑叛: {
							audio: 'ext:虎踞江东/audio:2',
							usable: 2,
							trigger: { target: 'useCardToBegin' },
							content() {
								player.draw();
								player.discardPlayerCard(trigger.player, 'he', true);
								player.useCard({ name: 'sha' }, trigger.player, false);
							},
						},
						移荣: {
							audio: 'ext:虎踞江东/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.getHandcardLimit() > 0;
							},
							init(player) {
								player.storage.移荣 = 0;
							},
							usable: 2,
							content() {
								player.storage.移荣++;
								player.draw(player.getHandcardLimit());
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.storage.移荣;
								},
							},
						},
						贵相: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								player.phaseUse();
								('step 1');
								player.getStat().card = {};
								('step 2');
								player.phaseUse();
								('step 3');
								player.getStat().card = {};
								('step 4');
								player.phaseUse();
								('step 5');
								player.getStat().card = {};
								('step 6');
								player.phaseUse();
								('step 7');
								player.getStat().card = {};
							},
							ai: {
								expose: 0.2,
							},
						},
						穆荫: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseDiscardBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('穆荫')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].addTempSkill('穆荫2', { player: 'phaseAfter' });
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						穆荫2: {
							mod: {
								maxHandcard(player, num) {
									return num * 2;
								},
							},
						},
						长姬瑞雪芳梅: {
							group: ['长姬瑞雪芳梅1', '长姬瑞雪芳梅2'],
						},
						长姬瑞雪芳梅1: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseAfter' },
							forced: true,
							filter(event, player) {
								return player.hasSkill('长姬瑞雪芳梅y');
							},
							content() {
								'step 0';
								player.gainMaxHp();
								('step 1');
								player.recover();
								player.draw(3);
								player.removeSkill('长姬瑞雪芳梅y');
								('step 2');
								var card = get.cardPile('sha', 'field');
								if (card) {
									player.gain(card, 'gain2', 'log');
								}
								('step 3');
								player.chooseTarget(get.prompt('长姬瑞雪芳梅')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 4');
								if (result.bool) {
									player.discardPlayerCard(3, result.targets[0], 'he', true);
								}
							},
							ai: {
								effect: {
									target(card) {
										if (get.tag(card, 'damage')) {
											return [0, -2];
										}
									},
								},
							},
						},
						长姬瑞雪芳梅2: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								return !player.hasSkill('长姬瑞雪芳梅x');
								return false;
							},
							content() {
								player.addTempSkill('长姬瑞雪芳梅x', 'damageAfter');
							},
							ai: {
								threaten: 2.2,
							},
						},
						长姬瑞雪芳梅x: {
							audio: 'ext:虎踞江东/audio:2',
							forced: true,
							trigger: { global: 'damageEnd' },
							content() {
								player.addSkill('长姬瑞雪芳梅y');
							},
						},
						长姬瑞雪芳梅y: {},
						谮构瑞雪芳梅: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'useCardAfter' },
							usable: 2,
							filter(event, player) {
								return get.type(event.card) != 'equip';
							},
							content() {
								'step 0';
								var list = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].isInPile()) {
										list.push(trigger.cards[i]);
									}
								}
								player.gain(list, 'gain2', 'log');
								player.draw();
								player.chooseControl('选项一', '选项二', '选项三').set('prompt', '谮构<br><br><div class="text">选项一:令' + get.translation(trigger.player) + '失去一点体力</div><br><div class="text">选项二:令' + get.translation(trigger.player) + '回复一点体力</div><br><div class="text">选项三:你摸2张牌</div></br>');
								('step 1');
								if (result.control == '选项一') {
									trigger.player.loseHp();
								}
								if (result.control == '选项二') {
									trigger.player.recover();
								} else {
									player.draw(2);
								}
							},
						},
						忠勇qlhl: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'loseEnd' },
							filter(event, player) {
								if (event.player != _status.currentPhase) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.color(i) == 'red' && i.original != 'j') return true;
									}
								return false;
							},
							usable: 2,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('忠勇qlhl')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.gain(game.createCard('sha'));
									target.gain(game.createCard('shan'));
									target.gain(game.createCard('tao'));
									target.$draw(3);
									target.draw(3);
									target.changeHujia([1, 3].randomGet());
									target.equip(game.createCard('qinglong', 'spade', 5));
									event.target = target;
								}
								('step 2');
								player.chooseTarget(get.prompt('忠勇qlhl')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									event.target.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						霞泪: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'loseEnd' },
							usable: 3,
							content() {
								'step 0';
								player.draw(3);
								if (player.getCards('he').length) {
									player
										.chooseTarget(get.prompt('霞泪'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return get.attitude(player, target);
										});
								}
								('step 1');
								if (result.bool) {
									result.targets[0].gain(game.createCard(player.getCards('he').randomGet()));
									result.targets[0].$draw();
								}
								('step 2');
								player.chooseTarget(get.prompt('霞泪')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, (card) => {
										return get.color(card) == 'red';
									});
								}
							},
						},
						暗织: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { global: 'discardAfter', player: 'damageEnd' },
							usable: 3,
							content() {
								'step 0';
								player.draw();
								player
									.chooseTarget(get.prompt('暗织'), function (card, player, target) {
										return target.countCards('he');
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.gain(game.createCard(result.targets[0].getCards('he').randomGet()));
									player.$draw();
								}
							},
						},
						秘计为夫守城: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: {
								player: ['phaseBegin', 'phaseEnd'],
							},
							filter(event, player) {
								return player.hp < player.maxHp;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('秘计为夫守城')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									event.num = player.maxHp - player.hp + result.targets[0].maxHp - result.targets[0].hp;
									player.draw(event.num);
								} else event.finish();
								('step 2');
								var check = player.countCards('h') - event.num;
								player
									.chooseCardTarget({
										selectCard: event.num,
										filterTarget(card, player, target) {
											return player != target;
										},
										ai1(card) {
											var player = _status.event.player;
											var target = _status.event.target;
											if (player.maxHp - player.hp == 1 && card.name == 'du') return 30;
											var check = _status.event.check;
											if (check < 1) return 0;
											if (player.hp > 1 && check < 2) return 0;
											return get.unuseful(card) + 9;
										},
										ai2(target) {
											var att = get.attitude(_status.event.player, target);
											if (ui.selected.cards.length == 1 && ui.selected.cards[0].name == 'du') return 1 - att;
											return att - 2;
										},
										prompt: '将' + get.cnNumber(event.num) + '张手牌交给一名其他角色',
									})
									.set('check', check);
								('step 3');
								if (result.bool) {
									result.targets[0].gain(result.cards, event.player);
									event.player.$give(result.cards.length, result.targets[0]);
									player.line(result.targets, 'green');
								}
							},
							ai: {
								threaten(player, target) {
									if (target.hp == 1) return 3;
									if (target.hp == 2) return 1.5;
									return 0.5;
								},
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
									},
								},
							},
						},
						贞烈为夫守城: {
							audio: 'ext:虎踞江东/audio:2',
							filter(event, player) {
								return event.player != player && event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick');
							},
							logTarget: 'player',
							check(event, player) {
								if (get.attitude(player, event.player) > 0) {
									return false;
								}
								if (get.tag(event.card, 'respondSha')) {
									if (
										player.countCards('h', {
											name: 'sha',
										}) == 0
									) {
										return true;
									}
								} else if (get.tag(event.card, 'respondShan')) {
									if (
										player.countCards('h', {
											name: 'shan',
										}) == 0
									) {
										return true;
									}
								} else if (get.tag(event.card, 'damage')) {
									if (player.countCards('h') < 2) return true;
								} else if (event.card.name == 'shunshou' && player.hp > 2) {
									return true;
								}
								return false;
							},
							_priority: 10,
							trigger: {
								target: 'useCardToBefore',
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('贞烈为夫守城'), true).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].loseHp();
									event.mubiaojuese = result.targets[0];
								}
								('step 2');
								trigger.cancel();
								('step 3');
								var num = event.mubiaojuese.maxHp - event.mubiaojuese.hp;
								player.discardPlayerCard(num, event.mubiaojuese, 'he', true);
								player.draw(num + player.maxHp);
								event.num = num + player.maxHp;
								('step 4');
								var check = player.countCards('h') - event.num;
								player
									.chooseCardTarget({
										selectCard: event.num,
										filterTarget(card, player, target) {
											return player != target;
										},
										ai1(card) {
											var player = _status.event.player;
											var target = _status.event.target;
											if (player.maxHp - player.hp == 1 && card.name == 'du') return 30;
											var check = _status.event.check;
											if (check < 1) return 0;
											if (player.hp > 1 && check < 2) return 0;
											return get.unuseful(card) + 9;
										},
										ai2(target) {
											var att = get.attitude(_status.event.player, target);
											if (ui.selected.cards.length == 1 && ui.selected.cards[0].name == 'du') return 1 - att;
											return att - 2;
										},
										prompt: '将' + get.cnNumber(event.num) + '张手牌交给一名其他角色',
									})
									.set('check', check);
								('step 5');
								if (result.bool) {
									result.targets[0].gain(result.cards, event.player);
									event.player.$give(result.cards.length, result.targets[0]);
									player.line(result.targets, 'green');
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						急陷: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseUseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('急陷')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets[0], false);
									var t = result.targets[0];
									if (player.countCards('h') > t.countCards('h')) player.draw();
									if (player.countCards('e') > t.countCards('e')) player.draw();
									if (player.countCards('he') > t.countCards('he')) player.draw();
								}
							},
						},
						zy战意: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:虎踞江东/audio:2',
							content() {
								'step 0';
								game.mp40('zhuling弄潮惊澜dhtx');
								player.chooseTarget(get.prompt('zy战意')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true);
									result.targets[0].loseHp();
									player.addTempSkill('zy战意_basic');
									player.addTempSkill('zy战意_equip');
									player.addTempSkill('zy战意_trick');
									player.draw(3);
								}
							},
							ai: {
								order: 9.1,
								result: {
									player: 1,
								},
							},
						},
						zy战意_basic: {
							group: ['zy战意_basic_sha', 'zy战意_basic_jiu', 'zy战意_basic_tao'],
						},
						zy战意_basic_tao: {
							enable: 'chooseToUse',
							filterCard: { type: 'basic' },
							viewAs: { name: 'tao' },
							viewAsFilter(player) {
								if (!player.countCards('h', { type: 'basic' })) return false;
							},
							prompt: '将一张基本牌当桃使用',
							check(card) {
								return 8 - get.value(card);
							},
							ai: {
								skillTagFilter(player) {
									if (!player.countCards('h', { type: 'basic' })) return false;
								},
								save: true,
							},
						},
						zy战意_basic_sha: {
							enable: 'chooseToUse',
							filterCard: { type: 'basic' },
							viewAs: { name: 'sha' },
							viewAsFilter(player) {
								if (!player.countCards('h', { type: 'basic' })) return false;
							},
							prompt: '将一张基本牌当杀使用',
							check(card) {
								return 4 - get.value(card);
							},
							ai: {
								skillTagFilter(player) {
									if (!player.countCards('h', { type: 'basic' })) return false;
								},
								respondSha: true,
							},
						},
						zy战意_basic_jiu: {
							enable: 'chooseToUse',
							filterCard: { type: 'basic' },
							viewAs: { name: 'jiu' },
							viewAsFilter(player) {
								if (!player.countCards('h', { type: 'basic' })) return false;
							},
							prompt: '将一张基本牌当酒使用',
							check(card) {
								if (_status.event.type == 'dying') return 1;
								return 4 - get.value(card);
							},
							ai: {
								skillTagFilter(player) {
									return player.countCards('h', { type: 'basic' }) > 0 && player.hp <= 0;
								},
								save: true,
							},
						},
						zy战意_equip: {
							trigger: { player: 'shaBegin' },
							forced: true,
							filter(event, player) {
								return event.target.countCards('he') > 0;
							},
							check(event, player) {
								return get.attitude(player, event.target) < 0;
							},
							content() {
								trigger.target.chooseToDiscard('he', true, 2);
							},
						},
						zy战意_trick: {
							mod: {
								targetInRange() {
									return true;
								},
							},
						},
						决意: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'phaseDiscardEnd' },
							filter: (event, player) => event.cards && event.cards[0], //QQQ
							content() {
								var num = trigger.cards.length;
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.chooseToDiscard('he', true, num);
									item.damage()._triggered = null;
								});
							},
						},
						铤险: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player.draw(player.countCards('he', { type: 'equip' }));
								if (get.color(trigger.card) == 'red') player.changeHujia([1, 3].randomGet());
								trigger.target.chooseToDiscard('请弃置一张闪', 'h', true, (card) => {
									return card.name == 'shan';
								});
								('step 1');
								if (Math.random < 0.5) {
									trigger.target.loseHp();
									trigger.target.addTempSkill('fengyin');
								}
							},
						},
						奔矢: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							trigger: { player: 'useCardBegin' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('奔矢'), [1, game.players.length], function (card, player, target) {
										return ![player, ...trigger.targets].includes(target) && get.distance(player, target, 'attack') <= 1;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									trigger.targets = [...trigger.targets, ...result.targets];
								}
							},
							mod: {
								attackFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						缮甲厉兵: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								game.playAudio('../extension/虎踞江东/audio/caochunBaodhtx.mp3');
								game.JPG0('caochunBao', 10000);
								('step 1');
								game.JPG0('caochun虎啸龙渊dhtx', 2000);
								player.chooseTarget(get.prompt('缮甲厉兵')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									var num = [3, 7].randomGet();
									player.draw(num);
									for (var i = 0; i < num; i++) {
										player.useCard({ name: 'sha' }, result.targets[0], false);
									}
								}
							},
						},
						虎豹袭术: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							trigger: { player: 'loseEnd' },
							filter(event, player) {
								return event.cards && event.cards.map((i) => get.type(i)).includes('equip');
							},
							content() {
								'step 0';
								game.playAudio('../extension/虎踞江东/audio/caochunHudhtx.mp3');
								lib.init.css(`extension/虎踞江东/`, 'caochunhubaqislide');
								game.JPG0('caochunhubaqislide', 3000);
								var num = [1, 3].randomGet();
								player.chooseTarget(get.prompt('虎豹袭术')).set('ai', (target) => -get.attitude(player, target)); //QQQ
								('step 1');
								if (result.bool) {
									result.targets[0].damage([1, 3].randomGet());
									player.addTempSkill('虎豹袭术2');
								}
							},
						},
						虎豹袭术2: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 3;
								},
							},
						},
						缮甲厉兵zz: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								game.playAudio('../extension/虎踞江东/audio/caochunBaodhtx.mp3');
								game.JPG0('caochunBao', 10000);
								('step 1');
								game.JPG0('caochun虎啸龙渊zzdhtx', 2000);
								player.chooseTarget(get.prompt('缮甲厉兵zz')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									var num = [3, 7].randomGet();
									player.draw(num);
									for (var i = 0; i < num; i++) {
										player.useCard({ name: 'sha' }, result.targets[0], false);
									}
								}
							},
						},
						虎豹袭术zz: {
							audio: 'ext:虎踞江东/audio:2',
							nobracket: true,
							trigger: { player: 'loseEnd' },
							filter(event, player) {
								return event.cards && event.cards.map((i) => get.type(i)).includes('equip');
							},
							content() {
								'step 0';
								game.playAudio('../extension/虎踞江东/audio/caochunHudhtx.mp3');
								lib.init.css(`extension/虎踞江东/`, 'caochunhubaqislide');
								game.JPG0('caochunhubaqislide', 3000);
								var num = [1, 3].randomGet();
								player.chooseTarget(get.prompt('虎豹袭术')).set('ai', (target) => -get.attitude(player, target)); //QQQ
								('step 1');
								if (result.bool) {
									result.targets[0].damage([1, 3].randomGet());
									player.addTempSkill('虎豹袭术zz2');
								}
							},
						},
						虎豹袭术zz2: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 3;
								},
							},
						},
						倾袭cx: {
							audio: 'ext:虎踞江东/audio:2',
							trigger: { player: 'useCardToBegin' },
							filter(event, player) {
								return ['sha', 'juedou'].some((i) => i == event.card.name) && event.target != player; //QQQ
							},
							usable: 5, //QQQ
							content() {
								'step 0';
								game.JPG0('caoxiu骁勇倾袭dhtx', 2000);
								var x = player.getAttackRange();
								trigger.target.chooseToDiscard('he', true, x);
								for (var i = 0; i < 3; i++) {
									player.useCard({ name: 'wanjian' }, trigger.target);
								}
								('step 1');
								player.addTempSkill('倾袭cx2', { player: 'useCardAfter' });
							},
						},
						倾袭cx2: {
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && ['sha', 'juedou'].some((i) => i == event.card.name) && event.notLink();
							},
							forced: true,
							audio: 'ext:虎踞江东/audio:2',
							content() {
								var x = player.getAttackRange();
								trigger.num += x;
							},
						},
					},
				};
				lib.config.all.characters.add('虎踞江东');
				lib.config.characters.add('虎踞江东');
				for (var i in QQQ.character) {
					QQQ.character[i][4].add(`ext:虎踞江东/image/${i}.jpg`)
				}
				lib.translate['虎踞江东_character_config'] = `虎踞江东`;
				return QQQ;
			});
		},
		package: {
			card: {
				card: {
					guyudao古钰刀: {
						fullskin: true,
						distance: { attackFrom: -1 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['guyudao古钰刀'],
					},
				},
				translate: {
					guyudao古钰刀: '古钰刀',
					guyudao古钰刀_info: '你可令你使用杀造成的伤害或造成的火焰伤害+1+受伤角色牌类型数少于你的牌类型数的项数',
				},
			},
			intro: "素材提供:平西镇北征南破东定中拢左揽右震天憾地司马<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
			author: '作者苏婆玛丽奥弃坑,素材提供者大司马代更',
		},
	};
});
