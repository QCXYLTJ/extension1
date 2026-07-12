import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '士兵扩展包',
		content(config, pack) {
			lib.element.player.tpline1 = function (target, name, time) {
				if (get.itemtype(target) == 'players') {
					for (var i of target) {
						this.tpline(i, name, time);
					}
				} else if (get.itemtype(target) == 'player') {
					if (target == this) return;
					game.addVideo('line', this, [target.dataset.position, name, time]);
					game.tpline1(target, name, time);
				}
			};
			game.tpline1 = function (target, name, time) {
				var path = [this.offsetLeft + this.offsetWidth / 2, this.offsetTop + this.offsetHeight / 2, target.offsetLeft + target.offsetWidth / 2, target.offsetTop + target.offsetHeight / 2];
				var from = [path[0], path[1]];
				var to = [path[2], path[3]];
				var dy = to[1] - from[1];
				var dx = to[0] - from[0];
				var deg = (Math.atan(Math.abs(dy) / Math.abs(dx)) / Math.PI) * 180 + (43 * Math.PI) / 180;
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
				return game.JPG3(name, time);
			};
			game.playSequenceFrames = function (folderPath, sizeArr, duration, numFrames) {
				var div = document.createElement('div');
				div.style.backgroundSize = '100% 100%';
				div.style.height = sizeArr[1] + 'px';
				div.style.width = sizeArr[0] + 'px';
				div.style.pointerEvents = 'none';
				div.style.position = 'absolute';
				div.style.top = `50%`;
				div.style.left = `50%`;
				div.style.transform = 'translate(-50%, -50%)';
				div.style.zIndex = 999;
				ui.window.appendChild(div);
				const imageUrls = [];
				for (var i = 1; i <= numFrames; i++) {
					imageUrls.push(`${folderPath}/${i}.png`);
				}
				let currentImageIndex = 0;
				let startTime = null;
				function animate(currentTime) {
					if (!startTime) {
						startTime = currentTime;
					}
					const elapsedTime = currentTime - startTime;
					const progress = elapsedTime / duration;
					if (progress > 1) {
						ui.window.style.transition = '';
						ui.window.removeChild(div);
						return game.resume();
					}
					currentImageIndex = Math.floor(progress * numFrames);
					div.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;
					requestAnimationFrame(animate);
				}
				game.pause();
				requestAnimationFrame(animate);
			};
			game.playSequenceFramesYu = function (folderPath, sizeArr, duration, numFrames) {
				var div = document.createElement('div');
				div.style.backgroundSize = '100% 100%';
				div.style.height = sizeArr[1] + 'px';
				div.style.width = sizeArr[0] + 'px';
				div.style.pointerEvents = 'none';
				div.style.position = 'absolute';
				div.style.top = `50%`;
				div.style.left = `50%`;
				div.style.transform = 'translate(-50%, -50%)';
				div.style.zIndex = 999;
				ui.window.appendChild(div);
				const imageElements = [];
				const imagePromises = [];
				for (var i = 1; i <= numFrames; i++) {
					const imageUrl = `${folderPath}/${i}.png`;
					const image = new Image();
					image.src = imageUrl;
					imagePromises.push(
						new Promise((resolve) => {
							image.onload = () => {
								resolve(image);
							};
						})
					);
					imageElements.push(image);
				}
				Promise.all(imagePromises).then((images) => {
					let currentImageIndex = 0;
					let startTime = null;
					function animate(currentTime) {
						if (!startTime) {
							startTime = currentTime;
						}
						const elapsedTime = currentTime - startTime;
						const progress = elapsedTime / duration;
						if (progress > 1) {
							ui.window.style.transition = '';
							ui.window.removeChild(div);
							return game.resume();
						}
						currentImageIndex = Math.floor(progress * numFrames);
						div.style.backgroundImage = `url(${images[currentImageIndex].src})`;
						requestAnimationFrame(animate);
					}
					game.pause();
					requestAnimationFrame(animate);
				});
			};
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
			game.JPG3 = function (Q, time) {
				var img = document.createElement('img');
				img.src = 'extension/士兵扩展包/image/' + Q + '.jpg';
				img.style.height = '100%';
				img.style.width = '100%';
				img.style.zIndex = '999';
				img.style.position = 'fixed'; // 添加固定定位,使视频覆盖全屏
				img.style.objectFit = 'cover'; // 保持视频宽高比并填充容器,可能会裁剪
				img.style.left = '0';
				img.style.right = '0';
				document.body.appendChild(img);
				var timeout = setTimeout(function () {
					img.remove();
				}, time);
				img.addEventListener('error', function () {
					clearTimeout(timeout);
					img.remove();
				});
				return img;
			}; //播放GIF
			game.mp43 = async function (Q) {
				return new Promise((resolve) => {
					const video = document.createElement('video');
					video.src = `extension/士兵扩展包/mp4/${Q}.mp4`;
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
					name: '士兵扩展包',
					connect: true,
					character: {
						liannubing: ['male', 'shu', 4, ['liannu_all'], ['des:诸葛亮死后,姜维得到了诸葛亮尚未使用的「诸葛连弩」的图纸,开始大量制造「诸葛连弩」,大大提升了蜀军的战斗力'], []],
						baibing: ['male', 'wei', 4, ['spm_kuitao'], ['des:战败之后溃逃的士兵.因忙着逃跑而经常顾不上自己的物品'], []],
						jianloubing: ['male', 'qun', 4, ['zhuxiao'], ['des:战役结束后,打扫战场,收集遗留的武器马匹等物的士兵'], []],
						shuibing: ['male', 'wu', 4, ['弄潮'], ['des:东吴随处可见的水兵,游泳技术一流'], []],
						huangjinbubing: ['male', 'qun', 4, ['fulu', '暴动bd'], ['des:跟随张角等人反叛的普通士兵,略通一点妖术'], []],
						manbing: ['male', 'shu', 4, ['spm_manyi3'], ['des:南蛮随处可见的士兵.骁勇善战,但是不善谋略,很容易中敌人的计'], []],
						qibingputong: ['male', 'qun', 4, ['mashu'], ['des:西凉随处可见的普通骑兵.借助马匹,可以很快地移动'], []],
						changgongbing: ['male', 'wu', 4, ['gongbing'], ['des:使用弓箭攻击敌人的士兵.因为有弓箭,所以通常不需要近身战斗'], []],
						feidaobing: ['female', 'wu', 4, ['feidao'], ['des:东吴女武神训练出的行动敏捷的飞刀兵'], []],
						huojianshou: ['male', 'wu', 4, ['huojian'], ['des:火箭具有非凡的攻击效果,为此吴王对此兵种格外重视,并加强训练,组建该兵种的军队'], []],
						saodangbing: ['male', 'qun', 4, ['saodang'], ['des:董卓为了加固自己的地位,首先需要取得一定的资本作为支撑,因此他组建了一批专门扫荡战时战后的极为贵重物品'], []],
						shenjibing: ['male', 'wei', 4, ['shenjishibing'], ['des:曹魏行使特战任务所组建的奇兵'], []],
						jijunbing: ['male', 'wei', 4, ['jijunshibing'], ['des:为专门募集军队所组建起来的兵队'], []],
						mujunbing: ['male', 'qun', 4, ['mujunshibing'], ['des:不惜一切代价得募集军队所组建起来的特训士兵'], []],
						shenbigongwei: ['male', 'wu', 4, ['shengongshibing'], ['des:臂力绝人的士兵可开各种弓弩类兵器极擅长携带重型装备'], []],
						yufuwenguan: ['female', 'wu', 4, ['yufuwenguan'], ['des:文官:御府'], []],
						ceshi: ['male', 'wu', 4, ['ceshi'], ['des:能言善辩有三寸不烂之舌,屡出奇策'], []],
						buguashiwu: ['female', 'wu', 4, ['bugua'], ['des:卜卦师,文官'], []],
						buguashiqun: ['male', 'qun', 4, ['bugua'], ['des:卜卦师,文官'], []],
						guiyi: ['female', 'qun', 4, ['guiyinvguan'], ['des:女官:贵仪'], []],
						daoguan: ['male', 'wu', 4, ['daoguan'], ['des:文官官职:道官'], []],
						guolianbing: ['male', 'shu', 4, ['guolian'], ['des:蜀汉重臣押运粮草所创建的奇兵'], []],
						hubenwei: ['male', 'shu', 4, ['huben', 'weishi'], ['des:精锐士兵,虎贲卫,拥有极强作战能力防卫能力警戒能力'], []],
						hubenwei1: ['male', 'wei', 4, ['huben', 'weishi'], ['des:虎贲卫,精锐之师'], []],
						hubenwei4: ['male', 'qun', 4, ['huben', 'weishi'], ['des:精锐士兵:虎贲卫'], []],
						fubing: ['male', 'wei', 4, ['maifushibing'], ['des:出其不意暗箭伤人以众击寡是埋伏兵的特性'], []],
						fubing3: ['male', 'wu', 4, ['maifushibing'], ['des:伏兵,擅长丛林作战'], []],
						huweibing: ['male', 'wei', 4, ['huweishibing'], ['des:具有极强的防御能力及警戒性,与侍卫相辅相成'], []],
						huweibing3: ['female', 'wu', 4, ['huweishibing'], ['des:护卫'], []],
						huweibing2: ['male', 'shu', 4, ['huweishibing'], ['des:护卫兵,警惕性强'], []],
						shenjiansbing2: ['male', 'shu', 4, ['shenjiansbing', 'chuqiao'], []],
						shenjiansbing3: ['male', 'wu', 4, ['shenjiansbing', 'chuqiao'], []],
						shenjiansbing4: ['female', 'wu', 4, ['shenjiansbing', 'chuqiao'], []],
						yiliaobing: ['male', 'shu', 4, ['yiliao'], ['des:治愈受伤的将士,后方回复能力极强'], []],
						shenjiansbing1: ['male', 'wei', 4, ['shenjiansbing', 'chuqiao'], ['des:s级别士兵,极为擅长使用剑类武器给予敌军重创,非常适合近身作战,骁勇善战适合用来擒拿敌军文官或者高级将领'], []],
						xiaodaoshou: ['male', 'shu', 4, ['daofeng', 'xuerenshibing'], ['des:极强作战能力的刀兵'], []],
						xiaodaoshou1: ['male', 'wei', 4, ['daofeng', 'xuerenshibing'], []],
						xiaodaoshou4: ['male', 'qun', 4, ['xuerenshibing', 'daofeng'], []],
						xiaodaoshou5: ['female', 'qun', 4, ['daofeng', 'xuerenshibing'], []],
						xiaodaoshou6: ['male', 'shu', 4, ['daofeng', 'xuerenshibing'], []],
						xiaodaoshou7: ['female', 'qun', 4, ['daofeng', 'xuerenshibing'], []],
						shenbigongwei4: ['male', 'qun', 4, ['shengongshibing'], []],
						yantangbing: ['male', 'shu', 4, ['yantang'], ['des:手持雁镗,臂力绝人,刺伤程度更高'], []],
						fubing5: ['male', 'wei', 4, ['maifushibing'], []],
						tiezhuabing: ['male', 'shu', 4, ['tiezhua'], ['des:近身作战能力极强,具有极高的伤害能力,作战极为敏捷迅速,攻击力杀伤力爆满,而作战速度不足'], []],
						shenjibing1: ['male', 'wei', 4, ['shenjishibing'], []],
						yunliangbing: ['male', 'shu', 5, ['yunliang'], []],
						yunliangbing1: ['male', 'wei', 5, ['yunliang1'], []],
						yunliangbing2: ['male', 'shu', 5, ['yunliang'], []],
						mengchongdoujian: ['none', 'wu', 5, ['mengchong', 'youjia', 'doujian'], []],
						mengchongdoujian3: ['none', 'wu', 5, ['doujian', 'youjia', 'mengchong'], []],
						mitan: ['male', 'shu', 5, ['tanmishibing'], []],
						huangjinpucong: ['female', 'qun', 4, ['仆从'], []],
						shanzei: ['male', 'qun', 4, ['zeixi'], []],
						shanyuesheji: ['female', 'wu', 4, ['shejishibing'], []],
						yuren: ['female', 'qun', 4, ['yurennvguan'], []],
						shipao: ['male', 'qun', 4, ['投石_', '石料_'], []],
						chenu: ['male', 'qun', 7, ['车弩'], []],
						xugongjiachen: ['male', 'wu', 4, ['chouyeshibing'], []],
						xiahouqinwei: ['male', 'wei', 4, ['卫侯'], []],
						mishijiabing: ['male', 'shu', 4, ['糜资', '贵兵'], []],
						zhongdaermu: ['male', 'wei', 4, ['耳目'], []],
						wudangfeijun: ['male', 'shu', 4, ['無挡', '飛軍'], []],
						hanshengchuanlingdui: ['male', 'shu', 4, ['忠令'], []],
						danyangbing: ['male', 'wu', 4, ['丹阳', '群踞'], []],
						jiefanweigongshou: ['male', 'wu', 4, ['弓卫'], []],
						zhaoliezhongqiangbubing: ['male', 'shu', 4, ['昭卫'], []],
						shuangrendiexuebing双刃喋血兵: ['female', 'shu', 4, ['diexueshibing'], []],
						moshichangdaobing魔仕长刀兵: ['male', 'qun', 4, ['魔刀之威'], []],
						jedbm_jimin: ['male', 'qun', 4, ['jishijimin'], []],
						xiaoshidianxingguan校事典刑官: ['male', 'wei', 4, ['dianxing典刑'], []],
						dading大鼎: ['male', 'qun', 4, ['dinglidading'], []],
						qingchengshanjianxia青城山剑侠: ['male', 'shu', 4, ['chengjianshibing'], []],
						baima白马: ['male', 'qun', 4, ['baima白马', 'maming马鸣'], []],
						baimayicong白马义从: ['male', 'qun', 4, ['招募白马', '随义'], []],
						daofushou刀斧手: ['male', 'wei', 4, ['弄士兵斧', '匿士兵刀'], []],
						chaotingzhenzeibing朝廷镇贼兵: ['male', 'qun', 4, ['镇贼shibing'], []],
						nvcike女刺客: ['female', 'qun', 4, ['行刺'], []],
						wendewuwei: ['female', 'wei', 4, ['凌卫'], []],
						baihaochihou白毦斥候: ['male', 'shu', 4, ['毦烈'], []],
						baihaobing: ['male', 'shu', 4, ['白毦'], []],
						yanhua: ['none', 'qun', 4, ['烟花'], []],
						gengniu耕牛: ['none', 'qun', 4, ['耕耘', '犁地'], []],
						jinfanqibing锦帆奇兵: ['male', 'wu', 4, ['兴令', '帆兵'], []],
						jinfanqinggongdui锦帆轻弓队: ['male', 'wu', 4, ['兴令', '锦弓'], []],
						jinfanchuanlingshi锦帆传令使: ['male', 'wu', 4, ['兴令', '锦使'], []],
						tieshuobing铁槊兵: ['male', 'wei', 4, ['槊阵', '铁槊'], []],
						conglinxiangqun丛林象群: ['none', 'qun', 4, ['象战'], []],
						manzunvbing蛮族女兵: ['female', 'qun', 4, ['蛮女'], []],
						manzulishi蛮族力士: ['male', 'qun', 4, ['蛮力', '霸蛮'], []],
						yinyedongmangu银冶洞蛮姑: ['female', 'qun', 4, ['蛮女', '蛮姑'], []],
						changyaxiangbing长牙象兵: ['male', 'qun', 4, ['蛮牙', '长蛮'], []],
						yongchangbaoman永昌暴蛮: ['male', 'qun', 4, ['蛮牙', '暴蛮'], []],
						manyongzhanhui蛮勇战绘: ['male', 'qun', 4, ['蛮牙', '蛮勇'], []],
						juxiangqun巨象群: ['none', 'qun', 4, ['象袭'], []],
						qingzhoulishuobing: ['male', 'wei', 4, ['槊阵', '利槊'], []],
						jumaci拒马刺: ['none', 'qun', 4, ['拒马'], []],
						putong_huangjinshibing: ['male', 'qun', 4, ['巾兵'], []],
						duandaobing短刀兵: ['male', 'shu', 4, ['短刀'], []],
						huangjinzhihuiguan黄巾指挥官: ['male', 'qun', 4, ['巾令', '挥雷hl'], []],
						huangtianleixiao黄天雷枭: ['male', 'qun', 4, ['落草lc', '枭雷xl'], []],
						xiaozhizhanbing骁志战兵: ['male', 'shu', 4, ['骁志xz'], []],
						huangjinshiba黄巾尸魃: ['male', 'qun', 4, ['落草lc', '尸魃shiba'], []],
						toumaoshou: ['male', 'wu', 4, ['投矛'], []],
						huangjindaotu黄巾盗徒: ['male', 'qun', 4, ['巾令', '盗徒'], []],
						huangjinchuandaozhe黄巾传道者: ['male', 'qun', 4, ['落草lc', '传道cd'], []],
						huangjinlifubing黄巾利斧兵: ['male', 'qun', 4, ['落草lc', '利斧'], []],
						huangjinchangdaobing黄巾长刀兵: ['male', 'qun', 4, ['落草lc', '长刀'], []],
						nanzhongjuxiangbing南中拒象兵: ['male', 'shu', 4, ['拒象'], []],
						huangjinjijiu黄巾祭酒: ['female', 'qun', 4, ['巾酒', '巾祭'], []],
						huangjinqingqibing黄巾轻骑兵: ['male', 'qun', 4, ['巾令', '巾骑'], []],
						huangjinchuandaoguan黄巾传道官: ['male', 'qun', 4, ['落草lc', '赐巾'], []],
						cike: ['male', 'qun', 4, ['夜行', '匿刺'], []],
						fenxunbing奋迅兵: ['male', 'shu', 4, ['迅兵'], []],
						shuzhifuyin蜀之符印: ['none', 'shu', 4, ['蜀印'], []],
						weizhifuyin魏之符印: ['none', 'wei', 4, ['魏印'], []],
						huangjinzhanji黄巾战姬: ['female', 'qun', 4, ['巾令', '巾姬'], []],
						huangjindaoguan黄巾道官: ['male', 'qun', 4, ['巾令', '巾道'], []],
						xinniangzi新娘子: ['female', 'qun', 4, ['同命tm'], []],
						jingqilin荆棘林: ['none', 'qun', 4, ['荆棘'], []],
						huangjinqi黄巾旗: ['none', 'qun', 4, ['巾旗'], []],
						jinweidoushi近卫斗士: ['male', 'shu', 4, ['近斗'], []],
						huxihunling护玺魂灵: ['female', 'qun', 4, ['玺灵'], []],
						huangmenxingxingshou黄门行刑手: ['male', 'qun', 4, ['宦刑'], []],
						huanguanshicong宦官侍从: ['male', 'qun', 4, ['肋贿'], []],
						hougongneishi后宫内侍: ['male', 'qun', 4, ['宫纠'], []],
						taipingdaoxinzhong太平道信众: ['male', 'qun', 4, ['道信'], []],
						taipingdaokuangxintu太平道狂信徒: ['male', 'qun', 4, ['狂信'], []],
						beimindeneishi悲悯的内侍: ['male', 'qun', 4, ['远避'], []],
						houbeihuangmenling后备黄门令: ['male', 'qun', 4, ['备令', '肋贿'], []],
						huangmencaodaoshou黄门操刀手: ['male', 'qun', 4, ['操刀', '肋贿'], []],
						lidaoqingdunbing利刀轻盾兵: ['male', 'shu', 4, ['利刀', '轻盾'], []],
						youlongchangqiangbing: ['male', 'shu', 4, ['涯枪'], []],
						youlonghucong游龙扈从: ['male', 'shu', 4, ['龙扈'], []],
						huweidadaojun虎卫大刀军: ['male', 'wei', 4, ['大刀卫', '虎刀'], []],
						chuihaobing: ['male', 'qun', 4, ['号角', '吹号'], []],
						chengxiangjingrui丞相精锐: ['male', 'wei', 4, ['锐卒'], []],
						yuxi玉玺: ['none', 'qun', 4, ['玉玺'], []],
						juejianglaobing倔强老兵: ['male', 'wei', 4, ['老倔', '疆兵'], []],
						luohucuizhenying珞虎摧阵营: ['male', 'wu', 4, ['珞阵'], []],
						pansiweiyijun磐兕威义军: ['male', 'wu', 4, ['磐义'], []],
						jiefanying解烦营: ['male', 'wu', 4, ['烦营'], []],
						jiefanbenbu解烦本部: ['male', 'wu', 4, ['弓卫', '烦部'], []],
						yunliangdui运粮队: ['male', 'shu', 4, ['粮队'], []],
						huaihe淮河: ['none', 'qun', 4, ['淮河'], []],
						wuwangshiwei吴王侍卫: ['male', 'wu', 4, ['嘉卫', '吴侍'], []],
						qingzhoushaowei青州哨卫: ['male', 'wei', 4, ['哨卫'], []],
						qingzhoutanma青州探马: ['male', 'wei', 4, ['探马'], []],
						jinweijun禁卫军: ['male', 'shu', 4, ['禁卫'], []],
						huangzuyuewei皇族钺卫: ['male', 'shu', 4, ['钺卫'], []],
						tunqiying屯骑营: ['male', 'wei', 4, ['屯营'], []],
						xiaoweijun校尉军: ['male', 'qun', 4, ['校尉'], []],
						hunu狂奔胡奴: ['male', 'qun', 4, ['胡奴2'], []],
						dongzhouchanggoudaobing东州长钩刀兵: ['male', 'qun', 4, ['长钩刀'], []],
						dongzhouhoujun东州后军: ['male', 'qun', 4, ['后备2'], []],
						pojiabing: ['male', 'wei', 4, ['破甲'], []],
						nanzhongzhenmindui南中赈民队: ['male', 'shu', 4, ['赈民'], []],
						bingzhoutiejiashi并州铁甲士: ['male', 'qun', 4, ['铁甲', '并锐'], []],
						elang恶狼: ['male', 'qun', 4, ['恶狼'], []],
						qinjunbubing: ['male', 'qun', 4, ['同袍', '方阵', '长锐'], []],
						tiejilizhen铁蒺藜阵: ['none', 'qun', 4, ['铁蒺藜阵'], []],
						dujiangjun渡江军: ['male', 'wu', 4, ['渡攻'], []],
						qinjunqibing秦军骑兵: ['male', 'qun', 4, ['同袍', '良驹', '长武'], []],
						gongyaojishicong弓腰姬侍从: ['female', 'wu', 4, ['侍结'], []],
						xianzhenying陷阵营: ['male', 'qun', 4, ['陷破'], []],
						liaoyuanzhinv辽原织女: ['female', 'qun', 4, ['织女'], []],
						xipingfenghuotai西平烽火台: ['none', 'qun', 4, ['烽火台'], []],
						jixingjun急行军: ['male', 'qun', 4, ['急行'], []],
						daomazei盗马贼: ['male', 'qun', 4, ['盗马', '影贼'], []],
						weixinbing魏新兵: ['male', 'wei', 4, ['新兵'], []],
						banmasuo绊马索: ['none', 'qun', 4, ['绊马'], []],
						danyangqiangbing丹阳枪兵: ['male', 'wu', 4, ['丹阳', '丹枪'], []],
						yanrenfeijiang燕人飞将: ['male', 'shu', 4, ['燕将'], []],
						wujunqijishou吴郡齐击手: ['male', 'wu', 4, ['齐击'], []],
						yanjingweibing延津卫兵: ['male', 'qun', 4, ['津兵'], []],
						wuqueanshazhe乌鹊暗杀者: ['male', 'qun', 4, ['暗刺', '鹊杀'], []],
						rennubing刃弩兵: ['male', 'wu', 4, ['刃弩'], []],
						dalangtaosha大浪淘沙: ['male', 'qun', 4, ['千古风流人物'], []],
						nianmaicanmou年迈参谋: ['male', 'wu', 4, ['破谋'], []],
						nvshicong: ['female', 'qun', 4, ['侍婢'], []],
						silibubing司隶步兵: ['male', 'wei', 4, ['步隶'], []],
						xiaoqixianfeng骁骑先锋: ['male', 'wei', 4, ['骁锋'], []],
						qingfushuigui青幞水鬼: ['male', 'wu', 4, ['水鬼'], []],
						hubenxinrui虎贲新锐: ['male', 'shu', 4, ['贲锐'], []],
						baidu百姓: ['male', 'qun', 4, ['民心', '民心4'], []],
						yizhouhaojie益州豪杰: ['male', 'qun', 4, ['益州豪杰'], []],
						guilangxuejisi鬼狼血祭司: ['male', 'qun', 4, ['鬼狼血祭'], []],
						caoshijingqi曹氏精骑: ['male', 'wei', 4, ['曹氏精骑'], []],
						yangweiqidui扬威骑队: ['male', 'wei', 4, ['威骑'], []],
						miaocaideqinweidui妙才的亲卫队: ['male', 'wei', 4, ['卫妙'], []],
						qingzhouxiangyong青州乡勇: ['male', 'wei', 4, ['青勇'], []],
						jianmaobing尖矛兵: ['male', 'shu', 4, ['尖矛'], []],
						yizhoulingjun益州领军: ['male', 'qun', 4, ['领益'], []],
						zizhongduyunshi辎重督运使: ['male', 'shu', 4, ['辎运'], []],
						xuelangfujiang血狼斧将: ['male', 'qun', 4, ['血斧'], []],
						silizhongyangjun司隶中央军: ['male', 'wei', 4, ['隶央'], []],
						xiaoshizhencha校事侦察: ['male', 'wei', 4, ['校侦'], []],
						limin黎民: ['male', 'qun', 4, ['黎民'], []],
						yulinweiwei羽林卫尉: ['male', 'qun', 4, ['林尉'], []],
						yulinqingqi羽林轻骑: ['male', 'qun', 4, ['林骑'], []],
						jiashanyuzhuangjun夹山峪壮军: ['male', 'shu', 4, ['峪壮'], []],
						yanganguanjiabing阳安贯甲兵: ['male', 'shu', 4, ['阳安贯甲'], []],
						zhandaoweijun栈道卫军: ['male', 'shu', 4, ['栈卫'], []],
						weisidian魏司典: ['male', 'wei', 4, ['司典'], []],
						weiwujingbing魏武精兵: ['male', 'wei', 4, ['精武'], []],
						wuweibubing武卫步兵: ['male', 'wei', 4, ['武卫'], []],
						changjibing: ['male', 'wei', 4, ['长戟'], []],
						zhangshuigongshi长水弓侍: ['male', 'wu', 4, ['长水弓侍'], []],
						xiaoqitujidui骁骑突击队: ['male', 'wei', 4, ['骁击', 'mashu'], []],
						zidanhucong子丹扈从: ['male', 'wei', 4, ['丹扈'], []],
						shouchuntongjun寿春统军: ['male', 'wu', 4, ['寿统'], []],
						juntuntuohuangbing军屯拓荒兵: ['male', 'wei', 4, ['拓荒'], []],
						duanliangbing断粮兵: ['male', 'qun', 4, ['辎断'], []],
						yunchanghucong云长扈从: ['male', 'shu', 4, ['羽扈'], []],
						changgebing长戈兵: ['male', 'wei', 4, ['长戈'], []],
						zhanying战鹰: ['male', 'qun', 4, ['战鹰'], []],
						dongzhouchangqiangbing东州长枪兵: ['male', 'qun', 4, ['东州长枪'], []],
						dunjiazhen盾甲阵: ['male', 'wei', 4, ['盾甲阵'], []],
						tietijianta铁蹄践踏: ['male', 'qun', 4, ['蹄践'], []],
						sunshijiazhong孙氏家众: ['male', 'wu', 4, ['孙氏家众'], []],
						sunshijiading孙氏家丁: ['male', 'wu', 4, ['孙氏家丁'], []],
						wulietongpao武烈同袍: ['male', 'wu', 4, ['武烈同袍'], []],
						weishijie魏使节: ['male', 'wei', 4, ['魏使节'], []],
						jianduichanggongshou舰队长弓手: ['male', 'wu', 4, ['长弓手'], []],
						lishuozhenbing利槊阵兵: ['male', 'wei', 4, ['利槊阵'], []],
						yiqibingren疫气病人: ['male', 'qun', 4, ['疫病'], []],
						dongwushuijun东吴水军: ['male', 'wu', 4, ['水军'], []],
						haidao海盗: ['male', 'qun', 4, ['盗劫'], []],
						zhongjiandunbing中坚盾兵: ['male', 'wei', 4, ['中坚'], []],
						wuweibingyong武卫兵勇: ['male', 'wei', 4, ['武勇'], []],
						fenwuqibing奋武骑兵: ['male', 'wei', 4, ['奋骑'], []],
						demouliushituan德谋流矢团: ['male', 'wu', 4, ['德矢'], []],
						conglinmitan丛林密探: ['male', 'wu', 4, ['林探'], []],
						dongjuncanjun东郡参军: ['male', 'wei', 4, ['郡参'], []],
						zhongyuanpumengshi中原卜梦师: ['male', 'qun', 4, ['卜梦'], []],
						jianglingwaqugong江陵挖渠工: ['male', 'wu', 4, ['挖渠'], []],
						beiguohanfeng北国寒风: ['male', 'wei', 4, ['北国寒风'], []],
						wuquequzhuzhe乌鹊驱逐者: ['male', 'wei', 4, ['逐刺', '鹊杀'], []],
						shubianfeidi戍边飞镝: ['male', 'qun', 4, ['飞镝'], []],
						mumajiancheng牧马监丞: ['male', 'wei', 4, ['监丞'], []],
						jichengchangdaobing冀城长刀兵: ['male', 'wei', 4, ['冀城长刀'], []],
						baojiajingqi保驾精骑: ['male', 'wei', 4, ['保驾精骑'], []],
						youzhoudunjiabing幽州盾甲兵: ['male', 'wei', 4, ['幽州盾甲'], []],
						qingdunbing轻盾兵: ['male', 'wei', 4, ['擎盾'], []],
						qingdunqibing轻盾骑兵: ['male', 'wei', 4, ['轻盾骑'], []],
						weiwuzhongjunyi魏武中军翼: ['male', 'wei', 4, ['中军翼'], []],
						chenliuyiyongjun陈留义勇军: ['male', 'wei', 4, ['留义'], []],
						zhongjiadun重甲盾: ['none', 'wei', 4, ['重甲盾'], []],
						nongduwei农都尉: ['male', 'wei', 4, ['都农'], []],
						qingzhouhoubeiqi青州后备骑: ['male', 'wei', 4, ['备骑', 'mashu'], []],
						zhongchebing重车兵: ['male', 'wei', 4, ['重车'], []],
						fengmingxianfengqi凤鸣先锋骑: ['male', 'wei', 4, ['鸣锋', 'mashu'], []],
						tongqiangtiebi铜墙铁壁: ['none', 'wei', 4, ['铜墙铁壁'], []],
						jiyinjuntunying济阴军屯营: ['male', 'wei', 4, ['屯积'], []],
						jianrenyijun坚忍义军: ['male', 'wei', 4, ['坚义'], []],
						fenxunjun奋迅军: ['male', 'shu', 4, ['灵迅'], []],
						tuntianling屯田令: ['male', 'wei', 4, ['屯令'], []],
						kongmingdementong孔明的门童: ['male', 'qun', 4, ['门童'], []],
						duanhuyanbing都安护堰兵: ['male', 'shu', 4, ['护堰'], []],
						yangangangqiangbing阳安刚枪兵: ['male', 'shu', 4, ['阳安刚枪'], []],
						xiandengsishi先登死士: ['male', 'qun', 4, ['先登死士'], []],
						xinyebaiqizhang新野百骑长: ['male', 'shu', 4, ['新野百骑'], []],
						yechaxing夜叉行: ['male', 'shu', 4, ['夜叉行'], []],
						yongchangshoujun永昌守军: ['male', 'shu', 4, ['永昌守军'], []],
						zhengfangqiangling正方枪领: ['male', 'shu', 4, ['正方枪领'], []],
						linyuandangkoubing临渊荡寇兵: ['male', 'shu', 4, ['临渊荡寇'], []],
						jiangepozhenbing剑阁破阵兵: ['male', 'shu', 4, ['剑阁破阵'], []],
						xiaozhiaibing骁志哀兵: ['male', 'shu', 4, ['骁志哀兵'], []],
						yadingfenxunbing崖顶奋迅兵: ['male', 'shu', 4, ['崖顶奋迅'], []],
						zhiguizhanjia炙龟占甲: ['male', 'shu', 4, ['炙龟占甲'], []],
						zhengxixianfengjun征西先锋军: ['male', 'shu', 4, ['征西先锋'], []],
						laixiangraodibing庲降扰敌兵: ['male', 'shu', 4, ['庲降扰敌'], []],
						shujunxinshi蜀郡信使: ['male', 'shu', 4, ['蜀郡信使'], []],
						dexinweishi德信卫士: ['male', 'shu', 4, ['德信卫士'], []],
						chuanlingguan传令官: ['male', 'shu', 4, ['令官'], []],
						taonijianbing讨逆尖兵: ['male', 'shu', 4, ['讨逆'], []],
						xinyeminbing新野民兵: ['male', 'shu', 4, ['新野民兵'], []],
						yuebulangqibing越部狼骑兵: ['male', 'qun', 4, ['越部狼骑'], []],
						changshaheidiaojun长沙黑雕军: ['male', 'shu', 4, ['黑雕'], []],
						shanyemangfu山野莽夫: ['male', 'shu', 4, ['山野莽夫'], []],
						nanjiangyanyang南疆艳阳: ['male', 'shu', 4, ['艳阳'], []],
						xinyelongshangdu新野垄上督: ['male', 'shu', 4, ['垄督'], []],
						dongzhouzizhongqi东州辎重骑: ['male', 'shu', 4, ['东州辎重骑'], []],
						dongzhouyijun东州义军: ['male', 'shu', 4, ['东州义军'], []],
						xinyexianyibing新野县役兵: ['male', 'shu', 4, ['新野县役'], []],
						jiandaoyouwei尖刀佑卫: ['male', 'shu', 4, ['尖刀佑卫'], []],
						honglianhuojisi红莲火祭司: ['male', 'wu', 4, ['火祭'], []],
						huangjinshengwu: ['male', 'qun', 4, ['祭雷'], []],
						hangongsuwei汉宫宿卫: ['male', 'qun', 4, ['宫宿'], []],
						xizuo细作: ['male', 'qun', 4, ['暗器', '刺探', '暗伏'], []],
						shinv侍女: ['female', 'qun', 4, ['侍女'], []],
						changshuobing长槊兵: ['male', 'wei', 4, ['长槊'], []],
						siyanduquan四眼毒泉: ['none', 'qun', 4, ['四眼毒泉'], []],
						yizhoumaobing益州矛兵: ['male', 'qun', 4, ['益矛'], []],
						linglingyijun零陵义军: ['male', 'shu', 4, ['陵义'], []],
						darongchizijun大荣赤帻军: ['male', 'wu', 4, ['荣帻'], []],
						guiyangqiangshou桂阳枪守: ['male', 'shu', 4, ['桂枪'], []],
						changbiaogangjianbing长镖刚健兵: ['male', 'shu', 4, ['长镖'], []],
						jingnanjinlv荆南劲旅: ['male', 'shu', 4, ['劲旅'], []],
						shudiqiaofu蜀地樵夫: ['male', 'shu', 4, ['蜀樵'], []],
						cainvmiaobi才女妙婢: ['male', 'shu', 4, ['妙婢'], []],
						xinyezhuangshi新野壮士: ['male', 'shu', 4, ['新野壮士'], []],
						xianminhongjinbing先民红巾兵: ['male', 'shu', 4, ['先民红巾'], []],
						taihangshanshanfei太行山山匪: ['male', 'qun', 4, ['太行山匪'], []],
						qingfuqibing轻斧骑兵: ['male', ['shu', 'shu', 'qun'].randomGet(), 4, ['轻斧', 'mashu'], []],
						lujiangbubing庐江步兵: ['male', 'wu', 4, ['庐步'], []],
						wukutongling武库统领: ['male', 'wu', 4, ['器领'], []],
						gonglushashou公路杀手: ['male', 'qun', 4, ['路刑'], []],
						saimendaoche塞门刀车: ['male', 'qun', 4, ['塞门刀车'], []],
						dongwuzhanjian东吴战舰: ['none', 'wu', 4, ['东吴战舰'], []],
						xiaojizhanchuan枭姬战船: ['none', 'wu', 4, ['枭姬战船'], []],
						danyangsheshou丹阳射手: ['male', 'wu', 4, ['丹射'], []],
						chongche冲车: ['none', 'qun', 4, ['冲车'], []],
						duqiangcibing毒枪刺兵: ['male', 'wu', 4, ['毒枪'], []],
						tanzi探子: ['male', 'qun', 4, ['探子'], []],
						yinyedongmannvshou: ['male', 'qun', 4, ['蛮女', '冶首'], []],
						zonghuobing纵火兵: ['male', 'qun', 4, ['纵燃'], []],
						aodaoyongbing傲刀佣兵: ['female', 'qun', 4, ['傲刀佣兵'], []],
						shudazhaofeng树大招风: ['none', 'qun', 4, ['树大招风'], []],
						nvyongbing女佣兵: ['female', 'qun', 4, ['女佣兵'], []],
						wukushouju武库守军: ['male', 'wu', 4, ['库守'], []],
						pingyuanyijun平原义军: ['male', 'qun', 4, ['平原义军'], []],
						guilangkuangbaozhe鬼狼狂暴者: ['male', 'qun', 4, ['鬼狂'], []],
						hualiutuxizhe骅骝突袭者: ['male', 'qun', 4, ['骅袭'], []],
						xiliangjulun西凉巨轮: ['male', 'qun', 4, ['西凉巨轮'], []],
						zhanchuan战船: ['male', 'wu', 4, ['战船'], []],
						xueqixinbing血骑新兵: ['male', 'qun', 4, ['血新', 'mashu'], []],
						pingronggongling平戎弓领: ['male', 'wu', 4, ['平戎弓领', '戎弓2'], []],
						liuxingshi流星矢: ['male', 'qun', 4, ['流星矢'], []],
						zhumaobing竹矛兵: ['female', 'qun', 4, ['竹矛'], []],
						tieguzhanche铁骨战车: ['none', 'qun', 4, ['铁骨战车'], []],
						longchuanyijun龙川义军: ['male', 'wu', 4, ['龙川'], []],
						wuhuanqibing乌桓骑兵: ['male', 'qun', 4, ['桓骑'], []],
						tianxianhuonubing天险火弩兵: ['male', 'wu', 4, ['火弩'], []],
						liushaxiankeng流沙陷坑: ['none', 'qun', 4, ['流沙'], []],
						ninghuan佞宦: ['male', 'wu', 4, ['佞宦'], []],
						fuhaidachuan浮海大船: ['none', 'wu', 4, ['浮船'], []],
						hanshizongmiao汉室宗庙: ['none', 'qun', 4, ['汉宗'], []],
						xiqiangzhanche西羌战车: ['none', 'qun', 4, ['西羌战车'], []],
						gutongzhenchi古铜镇尺: ['none', 'qun', 4, ['古铜镇尺'], []],
						saiwaimanzu塞外蛮族: ['male', 'qun', 4, ['蛮塞'], []],
						qiangtiexianfeng羌铁先锋: ['male', 'qun', 4, ['羌锋'], []],
						louchuan楼船: ['none', 'wu', 4, ['楼船'], []],
						shuiqishou水旗手: ['male', 'wu', 4, ['水旗'], []],
						dongwujianchuan东吴舰船: ['male', 'wu', 4, ['舰船'], []],
						wuhuanwandaobing乌桓弯刀兵: ['male', 'qun', 4, ['乌桓弯刀'], []],
						tongjiashizhen铜甲士阵: ['male', 'qun', 4, ['铜甲士阵'], []],
						dongwushanggu东吴商贾: ['male', 'wu', 4, ['吴贾'], []],
						gongchengzhanhu攻城战虎: ['none', 'shu', 4, ['攻城战虎'], []],
						changanniquan长安逆犬: ['male', 'qun', 4, ['西逆'], []],
						siluhanfei丝路悍匪: ['male', 'qun', 4, ['绸匪'], []],
						qilieyishi祈猎仪式: ['male', 'qun', 4, ['祈猎'], []],
						tanlanyouqi贪婪游骑: ['male', 'qun', 4, ['婪骑'], []],
						shuqiangbing蜀枪兵: ['male', 'shu', 4, ['蜀枪'], []],
						wugongbing吴弓兵: ['male', 'wu', 4, ['吴弓'], []],
						damohuqizhang大漠胡骑长: ['male', 'qun', 4, ['胡骑', '漠骑'], []],
						damolietoudui大漠猎头队: ['male', 'qun', 4, ['漠猎'], []],
						feiyanyihuo飞燕一伙: ['male', 'qun', 4, ['如燕', '矫轻'], []],
						heishangangtou黑山杠头: ['male', 'qun', 4, ['黑杠'], []],
						hufaguilang护法鬼狼: ['male', 'qun', 4, ['鬼钺'], []],
						honghuangshizhu洪荒石柱: ['none', 'qun', 4, ['洪石'], []],
						heijiao黑蟜: ['male', 'qun', 4, ['黑蟜'], []],
						tianjijushou天机巨兽: ['male', 'qun', 4, ['兽械'], []],
						gaoyuanxuelang高原雪狼: ['male', 'qun', 4, ['雪狼'], []],
						shuaiyiyongshi率义勇士: ['male', 'qun', 4, ['率义'], []],
						duquan毒泉: ['male', 'qun', 4, ['毒泉'], []],
						hutunbing护屯兵: ['male', 'qun', 4, ['护屯'], []],
						longgushuiche龙骨水车: ['none', 'qun', 4, ['骨水'], []],
						nianmaiwuzu年迈武卒: ['male', 'qun', 4, ['年迈武卒'], []],
						duchicaiguan毒齿材官: ['male', 'wu', 4, ['毒箭', '材官'], []],
						ximinyongshi西岷勇士: ['male', 'qun', 4, ['岷勇'], []],
						queyingyouchu雀鹰幼雏: ['male', 'qun', 4, ['雀鹰'], []],
						hongjinbubing红巾步兵: ['male', 'shu', 4, ['红巾步兵'], []],
						dapengniao大鹏鸟: ['male', 'qun', 4, ['大鹏'], []],
						wendizhongzhuangbubing: ['male', 'wei', 4, ['文帝重装步兵', '御盾'], []],
						xunlingxuanhe寻灵玄鹤: ['male', 'qun', 4, ['寻玄'], []],
						ligefubing利戈府兵: ['male', 'qun', 4, ['助戈', '府兵'], []],
						yuzhao御诏: ['male', 'qun', 4, ['御诏'], []],
						feiyanhanyong飞燕悍勇: ['male', 'qun', 4, ['燕悍'], []],
						juemingneishi绝命内侍: ['male', 'qun', 4, ['绝侍'], []],
						tongrenzhen铜人阵: ['male', 'qun', 4, ['铜阵'], []],
						yinyedongmanshou银冶洞蛮首: ['female', 'qun', 4, ['蛮冶', '冶首'], []],
						sanfuluandang三辅乱党: ['male', 'qun', 4, ['三乱'], []],
						tanjiyeying探戟夜莺: ['male', 'qun', 4, ['探戟夜莺'], []],
						posuobendui婆娑本队: ['female', 'qun', 4, ['娑队'], []],
						linggongbing灵弓兵: ['male', 'qun', 4, ['灵弓'], []],
						kongxuansi控弦司: ['male', 'qun', 4, ['控弦'], []],
						hefeibaifuzhang合肥百夫长: ['male', 'wei', 4, ['合突'], []],
						danyangzhonggongying丹阳重弓营: ['male', 'qun', 4, ['煆营'], []],
						damowandaobing大漠弯刀兵: ['male', 'qun', 4, ['大漠弯刀'], []],
						feijianghongchoujun飞将红绸军: ['female', 'shu', 4, ['将绸'], []],
						silidunjiabing司隶盾甲兵: ['male', ['wei', 'qun', 'qun'].randomGet(), 4, ['司甲', '隶青'], []],
						qingzhouzhongjiaying青州重甲营: ['male', ['wei', 'qun', 'qun'].randomGet(), 4, ['甲营'], []],
						zimingqinjun子明亲军: ['male', 'wu', 4, ['子明亲军'], []],
						xiliangtieqi西凉铁骑: ['male', 'qun', 4, ['锐骑', 'mashu', '蹄踏', '凉标'], []],
						tuntianzhubu屯田主薄: ['male', 'wei', 4, ['屯薄'], []],
						huorenbing火刃兵: ['male', 'shu', 4, ['火刃'], []],
						ganshishinv甘氏侍女: ['female', 'shu', 4, ['甘侍'], []],
						binghuozhui冰火锥: ['none', 'shu', 4, ['冰火锥刺'], []],
						huoquanbing火拳兵: ['male', ['shu', 'shu', 'shu', 'qun'].randomGet(), 4, ['火拳', '拾火'], []],
						shibabanbingqi十八般兵器: ['none', ['shu', 'shu', 'shu', 'qun'].randomGet(), 4, ['十八般兵器'], []],
						dao刀: ['none', 'qun', 4, ['刀'], []],
						qiang枪: ['none', 'qun', 4, ['枪'], []],
						jian剑: ['none', 'qun', 4, ['剑'], []],
						ji戟: ['none', 'qun', 4, ['戟'], []],
						fu斧: ['none', 'qun', 4, ['斧'], []],
						yue钺: ['none', 'qun', 4, ['钺'], []],
						gou钩: ['none', 'qun', 4, ['钩'], []],
						cha叉: ['none', 'qun', 4, ['叉'], []],
						bian鞭: ['none', 'qun', 4, ['鞭'], []],
						jian锏: ['none', 'qun', 4, ['锏'], []],
						chui锤: ['none', 'qun', 4, ['锤'], []],
						tang镗: ['none', 'qun', 4, ['镗'], []],
						shuo槊: ['none', 'qun', 4, ['槊'], []],
						zhua抓: ['none', 'qun', 4, ['抓'], []],
						guai拐: ['none', 'qun', 4, ['拐'], []],
						lian镰: ['none', 'qun', 4, ['镰'], []],
						gong弓: ['none', 'qun', 4, ['弓'], []],
						biao镖: ['none', 'qun', 4, ['镖'], []],
						gun棍: ['none', 'qun', 4, ['棍'], []],
						xiongshi雄狮: ['male', 'qun', 4, ['雄狮'], []],
						wulingjieluezhe武陵劫掠者: ['male', 'wu', 4, ['陵劫'], []],
						hongfunv红拂女: ['female', 'qun', 4, ['红拂'], []],
						huanyingbing幻影兵: ['male', 'shu', 4, ['幻影'], []],
						wuhoubazhenbing: ['male', ['shu', 'shu', 'qun'].randomGet(), 4, ['侯布'], []],
						huangmenzhanshashou黄门斩杀手: ['male', 'qun', 4, ['宦斩'], []],
						junyisijiancha军议司监察: ['male', 'qun', 4, ['议监'], []],
						daxianshinv大贤侍女: ['male', 'qun', 4, ['击侍'], []],
						wujunchanggongshou吴郡长弓手: ['male', 'wu', 4, ['弓威'], []],
						sunshigongwei孙氏弓卫: ['male', 'wu', 4, ['孙氏弓卫'], []],
						hanzhongshuwei汉中戍卫: ['male', 'shu', 4, ['汉戍'], []],
						hongyanshouwei红颜守卫: ['female', ['shu', 'shu', 'qun'].randomGet(), 4, ['颜卫'], []],
						yiliaoshengshi: ['female', ['shu', 'shu', 'qun'].randomGet(), 4, ['圣疗'], []],
						xueren雪人: ['male', ['wei', 'wei', 'qun'].randomGet(), 4, ['惧火', '雪驱', '堆雪'], []],
						cangwuzhanshi苍梧战士: ['male', 'shu', 4, ['苍梧'], []],
					},
					translate: {
						liannubing: '连弩兵',
						baibing: '败兵',
						jianloubing: '捡漏兵',
						shuibing: '水兵',
						huangjinbubing: '黄巾步兵',
						manbing: '蛮兵',
						qibingputong: '普通骑兵',
						changgongbing: '长弓兵',
						feidaobing: '飞刀兵',
						huojianshou: '火箭手',
						saodangbing: '扫荡兵',
						shenjibing: '神戟兵',
						jijunbing: '集军兵',
						mujunbing: '募军兵',
						shenbigongwei: '神臂弓卫',
						yufuwenguan: '御府',
						ceshi: '策士',
						buguashiwu: '卜卦师',
						buguashiqun: '卜卦师',
						guiyi: '贵仪',
						daoguan: '道官',
						guolianbing: '钩镰兵',
						hubenwei: '虎贲卫',
						hubenwei1: '虎贲卫',
						hubenwei4: '虎贲卫',
						fubing: '伏兵',
						fubing3: '伏兵',
						huweibing: '护卫兵',
						huweibing3: '护卫兵',
						huweibing2: '护卫兵',
						shenjiansbing2: '神剑兵',
						shenjiansbing3: '神剑兵',
						shenjiansbing4: '神剑兵',
						yiliaobing: '医疗兵',
						shenjiansbing1: '神剑兵',
						xiaodaoshou: '校刀手',
						xiaodaoshou1: '校刀手',
						xiaodaoshou4: '校刀手',
						xiaodaoshou5: '校刀手',
						xiaodaoshou6: '校刀手',
						xiaodaoshou7: '校刀手',
						shenbigongwei4: '神臂弓卫',
						yantangbing: '雁镋兵',
						fubing5: '伏兵',
						tiezhuabing: '铁爪兵',
						shenjibing1: '神戟兵',
						yunliangbing: '运粮兵',
						yunliangbing1: '运粮兵',
						yunliangbing2: '运粮兵',
						mengchongdoujian: '蒙冲斗舰',
						mengchongdoujian3: '蒙冲斗舰',
						mitan: '密探',
						huangjinpucong: '黄巾仆从',
						shanzei: '山贼',
						shanyuesheji: '山越蛇姬',
						yuren: '玉人',
						shipao: '石砲',
						chenu: '车弩',
						xugongjiachen: '许贡家臣',
						xiahouqinwei: '夏侯亲卫',
						mishijiabing: '糜氏家兵',
						zhongdaermu: '仲达耳目',
						wudangfeijun: '无当飞军',
						hanshengchuanlingdui: '汉升传令队',
						danyangbing: '丹阳兵',
						jiefanweigongshou: '解烦卫弓手',
						zhaoliezhongqiangbubing: '昭烈重枪步兵',
						shuangrendiexuebing双刃喋血兵: '双刃喋血兵',
						moshichangdaobing魔仕长刀兵: '魔仕长刀兵',
						jedbm_jimin: '饥民',
						xiaoshidianxingguan校事典刑官: '校事典刑官',
						dading大鼎: '大鼎',
						qingchengshanjianxia青城山剑侠: '青城山剑侠',
						baima白马: '白马',
						baimayicong白马义从: '白马义从',
						daofushou刀斧手: '刀斧手',
						chaotingzhenzeibing朝廷镇贼兵: '朝廷镇贼兵',
						nvcike女刺客: '女刺客',
						wendewuwei: '文德武卫',
						baihaochihou白毦斥候: '白毦斥候',
						baihaobing: '白毦兵',
						yanhua: '烟花',
						gengniu耕牛: '耕牛',
						jinfanqibing锦帆奇兵: '锦帆奇兵',
						jinfanqinggongdui锦帆轻弓队: '锦帆轻弓队',
						jinfanchuanlingshi锦帆传令使: '锦帆传令使',
						tieshuobing铁槊兵: '铁槊兵',
						conglinxiangqun丛林象群: '丛林象群',
						manzunvbing蛮族女兵: '蛮族女兵',
						manzulishi蛮族力士: '蛮族力士',
						yinyedongmangu银冶洞蛮姑: '银冶洞蛮姑',
						changyaxiangbing长牙象兵: '长牙象兵',
						yongchangbaoman永昌暴蛮: '永昌暴蛮',
						manyongzhanhui蛮勇战绘: '蛮勇战绘',
						juxiangqun巨象群: '巨象群',
						qingzhoulishuobing: '青州利槊兵',
						jumaci拒马刺: '拒马刺',
						putong_huangjinshibing: '普通黄巾兵',
						duandaobing短刀兵: '短刀兵',
						huangjinzhihuiguan黄巾指挥官: '黄巾指挥官',
						huangtianleixiao黄天雷枭: '黄天雷枭',
						xiaozhizhanbing骁志战兵: '骁志战兵',
						huangjinshiba黄巾尸魃: '黄巾尸魃',
						toumaoshou: '投矛手',
						huangjindaotu黄巾盗徒: '黄巾盗徒',
						huangjinchuandaozhe黄巾传道者: '黄巾传道者',
						huangjinlifubing黄巾利斧兵: '黄巾利斧兵',
						huangjinchangdaobing黄巾长刀兵: '黄巾长刀兵',
						nanzhongjuxiangbing南中拒象兵: '南中拒象兵',
						huangjinjijiu黄巾祭酒: '黄巾祭酒',
						huangjinqingqibing黄巾轻骑兵: '黄巾轻骑兵',
						huangjinchuandaoguan黄巾传道官: '黄巾传道官',
						cike: '刺客',
						fenxunbing奋迅兵: '奋迅兵',
						shuzhifuyin蜀之符印: '蜀之符印',
						weizhifuyin魏之符印: '魏之符印',
						huangjinzhanji黄巾战姬: '黄巾战姬',
						huangjindaoguan黄巾道官: '黄巾道官',
						xinniangzi新娘子: '新娘子',
						jingqilin荆棘林: '荆棘林',
						huangjinqi黄巾旗: '黄巾旗',
						jinweidoushi近卫斗士: '近卫斗士',
						huxihunling护玺魂灵: '护玺魂灵',
						huangmenxingxingshou黄门行刑手: '黄门行刑手',
						huanguanshicong宦官侍从: '宦官侍从',
						hougongneishi后宫内侍: '后宫内侍',
						taipingdaoxinzhong太平道信众: '太平道信众',
						taipingdaokuangxintu太平道狂信徒: '太平道狂信徒',
						beimindeneishi悲悯的内侍: '悲悯的内侍',
						houbeihuangmenling后备黄门令: '后备黄门令',
						huangmencaodaoshou黄门操刀手: '黄门操刀手',
						lidaoqingdunbing利刀轻盾兵: '利刀轻盾兵',
						youlongchangqiangbing: '游龙长枪兵',
						youlonghucong游龙扈从: '游龙扈从',
						huweidadaojun虎卫大刀军: '虎卫大刀军',
						chuihaobing: '吹号兵',
						chengxiangjingrui丞相精锐: '丞相精锐',
						yuxi玉玺: '玉玺',
						juejianglaobing倔强老兵: '倔强老兵',
						luohucuizhenying珞虎摧阵营: '珞虎摧阵营',
						pansiweiyijun磐兕威义军: '磐兕威义军',
						jiefanying解烦营: '解烦营',
						jiefanbenbu解烦本部: '解烦本部',
						yunliangdui运粮队: '运粮队',
						huaihe淮河: '淮河',
						wuwangshiwei吴王侍卫: '吴王侍卫',
						qingzhoushaowei青州哨卫: '青州哨卫',
						qingzhoutanma青州探马: '青州探马',
						jinweijun禁卫军: '禁卫军',
						huangzuyuewei皇族钺卫: '皇族钺卫',
						tunqiying屯骑营: '屯骑营',
						xiaoweijun校尉军: '校尉军',
						hunu狂奔胡奴: '狂奔胡奴',
						dongzhouchanggoudaobing东州长钩刀兵: '东州长钩刀兵',
						dongzhouhoujun东州后军: '东州后军',
						pojiabing: '破甲兵',
						nanzhongzhenmindui南中赈民队: '南中赈民队',
						bingzhoutiejiashi并州铁甲士: '并州铁甲士',
						elang恶狼: '恶狼',
						qinjunbubing: '秦军步兵',
						tiejilizhen铁蒺藜阵: '铁蒺藜阵',
						dujiangjun渡江军: '渡江军',
						qinjunqibing秦军骑兵: '秦军骑兵',
						gongyaojishicong弓腰姬侍从: '弓腰姬侍从',
						xianzhenying陷阵营: '陷阵营',
						liaoyuanzhinv辽原织女: '辽原织女',
						xipingfenghuotai西平烽火台: '西平烽火台',
						jixingjun急行军: '急行军',
						daomazei盗马贼: '盗马贼',
						weixinbing魏新兵: '魏新兵',
						banmasuo绊马索: '绊马索',
						danyangqiangbing丹阳枪兵: '丹阳枪兵',
						yanrenfeijiang燕人飞将: '燕人飞将',
						wujunqijishou吴郡齐击手: '吴郡齐击手',
						yanjingweibing延津卫兵: '延津卫兵',
						wuqueanshazhe乌鹊暗杀者: '乌鹊暗杀者',
						rennubing刃弩兵: '刃弩兵',
						dalangtaosha大浪淘沙: '大浪淘沙',
						nianmaicanmou年迈参谋: '年迈参谋',
						nvshicong: '女侍从',
						silibubing司隶步兵: '司隶步兵',
						xiaoqixianfeng骁骑先锋: '骁骑先锋',
						qingfushuigui青幞水鬼: '青幞水鬼',
						hubenxinrui虎贲新锐: '虎贲新锐',
						baidu百姓: '百姓',
						yizhouhaojie益州豪杰: '益州豪杰',
						guilangxuejisi鬼狼血祭司: '鬼狼血祭司',
						caoshijingqi曹氏精骑: '曹氏精骑',
						yangweiqidui扬威骑队: '扬威骑队',
						miaocaideqinweidui妙才的亲卫队: '妙才的亲卫队',
						qingzhouxiangyong青州乡勇: '青州乡勇',
						jianmaobing尖矛兵: '尖矛兵',
						yizhoulingjun益州领军: '益州领军',
						zizhongduyunshi辎重督运使: '辎重督运使',
						xuelangfujiang血狼斧将: '血狼斧将',
						silizhongyangjun司隶中央军: '司隶中央军',
						xiaoshizhencha校事侦察: '校事侦察',
						limin黎民: '黎民',
						yulinweiwei羽林卫尉: '羽林卫尉',
						yulinqingqi羽林轻骑: '羽林轻骑',
						jiashanyuzhuangjun夹山峪壮军: '夹山峪壮军',
						yanganguanjiabing阳安贯甲兵: '阳安贯甲兵',
						zhandaoweijun栈道卫军: '栈道卫军',
						weisidian魏司典: '魏司典',
						weiwujingbing魏武精兵: '魏武精兵',
						wuweibubing武卫步兵: '武卫步兵',
						changjibing: '长戟兵',
						zhangshuigongshi长水弓侍: '长水弓侍',
						xiaoqitujidui骁骑突击队: '骁骑突击队',
						zidanhucong子丹扈从: '子丹扈从',
						shouchuntongjun寿春统军: '寿春统军',
						juntuntuohuangbing军屯拓荒兵: '军屯拓荒兵',
						duanliangbing断粮兵: '断粮兵',
						yunchanghucong云长扈从: '云长扈从',
						changgebing长戈兵: '长戈兵',
						zhanying战鹰: '战鹰',
						dongzhouchangqiangbing东州长枪兵: '东州长枪兵',
						dunjiazhen盾甲阵: '盾甲阵',
						tietijianta铁蹄践踏: '铁蹄践踏',
						sunshijiazhong孙氏家众: '孙氏家众',
						sunshijiading孙氏家丁: '孙氏家丁',
						wulietongpao武烈同袍: '武烈同袍',
						weishijie魏使节: '魏使节',
						jianduichanggongshou舰队长弓手: '舰队长弓手',
						lishuozhenbing利槊阵兵: '利槊阵兵',
						yiqibingren疫气病人: '疫气病人',
						dongwushuijun东吴水军: '东吴水军',
						haidao海盗: '海盗',
						zhongjiandunbing中坚盾兵: '中坚盾兵',
						wuweibingyong武卫兵勇: '武卫兵勇',
						fenwuqibing奋武骑兵: '奋武骑兵',
						demouliushituan德谋流矢团: '德谋流矢团',
						conglinmitan丛林密探: '丛林密探',
						dongjuncanjun东郡参军: '东郡参军',
						zhongyuanpumengshi中原卜梦师: '中原卜梦师',
						jianglingwaqugong江陵挖渠工: '江陵挖渠工',
						beiguohanfeng北国寒风: '北国寒风',
						wuquequzhuzhe乌鹊驱逐者: '乌鹊驱逐者',
						shubianfeidi戍边飞镝: '戍边飞镝',
						mumajiancheng牧马监丞: '牧马监丞',
						jichengchangdaobing冀城长刀兵: '冀城长刀兵',
						baojiajingqi保驾精骑: '保驾精骑',
						youzhoudunjiabing幽州盾甲兵: '幽州盾甲兵',
						qingdunbing轻盾兵: '轻盾兵',
						qingdunqibing轻盾骑兵: '轻盾骑兵',
						weiwuzhongjunyi魏武中军翼: '魏武中军翼',
						chenliuyiyongjun陈留义勇军: '陈留义勇军',
						zhongjiadun重甲盾: '重甲盾',
						nongduwei农都尉: '农都尉',
						qingzhouhoubeiqi青州后备骑: '青州后备骑',
						zhongchebing重车兵: '重车兵',
						fengmingxianfengqi凤鸣先锋骑: '凤鸣先锋骑',
						tongqiangtiebi铜墙铁壁: '铜墙铁壁',
						jiyinjuntunying济阴军屯营: '济阴军屯营',
						jianrenyijun坚忍义军: '坚忍义军',
						fenxunjun奋迅军: '奋迅军',
						tuntianling屯田令: '屯田令',
						kongmingdementong孔明的门童: '孔明的门童',
						duanhuyanbing都安护堰兵: '都安护堰兵',
						yangangangqiangbing阳安刚枪兵: '阳安刚枪兵',
						xiandengsishi先登死士: '先登死士',
						xinyebaiqizhang新野百骑长: '新野百骑长',
						yechaxing夜叉行: '夜叉行',
						yongchangshoujun永昌守军: '永昌守军',
						zhengfangqiangling正方枪领: '正方枪领',
						linyuandangkoubing临渊荡寇兵: '临渊荡寇兵',
						jiangepozhenbing剑阁破阵兵: '剑阁破阵兵',
						xiaozhiaibing骁志哀兵: '骁志哀兵',
						yadingfenxunbing崖顶奋迅兵: '崖顶奋迅兵',
						zhiguizhanjia炙龟占甲: '炙龟占甲',
						zhengxixianfengjun征西先锋军: '征西先锋军',
						laixiangraodibing庲降扰敌兵: '庲降扰敌兵',
						shujunxinshi蜀郡信使: '蜀郡信使',
						dexinweishi德信卫士: '德信卫士',
						chuanlingguan传令官: '传令官',
						taonijianbing讨逆尖兵: '讨逆尖兵',
						xinyeminbing新野民兵: '新野民兵',
						yuebulangqibing越部狼骑兵: '越部狼骑兵',
						changshaheidiaojun长沙黑雕军: '长沙黑雕军',
						shanyemangfu山野莽夫: '山野莽夫',
						nanjiangyanyang南疆艳阳: '南疆艳阳',
						xinyelongshangdu新野垄上督: '新野垄上督',
						xiaozhizhanbing骁志哀兵: '骁志哀兵',
						dongzhouzizhongqi东州辎重骑: '东州辎重骑',
						dongzhouyijun东州义军: '东州义军',
						xinyexianyibing新野县役兵: '新野县役兵',
						jiandaoyouwei尖刀佑卫: '尖刀佑卫',
						honglianhuojisi红莲火祭司: '红莲火祭司',
						huangjinshengwu: '黄巾雷巫',
						hangongsuwei汉宫宿卫: '汉宫宿卫',
						xizuo细作: '细作',
						shinv侍女: '侍女',
						changshuobing长槊兵: '长槊兵',
						siyanduquan四眼毒泉: '四眼毒泉',
						yizhoumaobing益州矛兵: '益州矛兵',
						linglingyijun零陵义军: '零陵义军',
						darongchizijun大荣赤帻军: '大荣赤帻军',
						guiyangqiangshou桂阳枪守: '桂阳枪守',
						changbiaogangjianbing长镖刚健兵: '长镖刚健兵',
						jingnanjinlv荆南劲旅: '荆南劲旅',
						shudiqiaofu蜀地樵夫: '蜀地樵夫',
						cainvmiaobi才女妙婢: '才女妙婢',
						xinyezhuangshi新野壮士: '新野壮士',
						xianminhongjinbing先民红巾兵: '先民红巾兵',
						taihangshanshanfei太行山山匪: '太行山山匪',
						qingfuqibing轻斧骑兵: '轻斧骑兵',
						lujiangbubing庐江步兵: '庐江步兵',
						wukutongling武库统领: '武库统领',
						gonglushashou公路杀手: '公路杀手',
						saimendaoche塞门刀车: '塞门刀车',
						dongwuzhanjian东吴战舰: '东吴战舰',
						xiaojizhanchuan枭姬战船: '枭姬战船',
						danyangsheshou丹阳射手: '丹阳射手',
						chongche冲车: '冲车',
						duqiangcibing毒枪刺兵: '毒枪刺兵',
						tanzi探子: '探子',
						yinyedongmannvshou: '银冶洞女蛮首',
						zonghuobing纵火兵: '纵火兵',
						aodaoyongbing傲刀佣兵: '傲刀佣兵',
						shudazhaofeng树大招风: '树大招风',
						nvyongbing女佣兵: '女佣兵',
						wukushouju武库守军: '武库守军',
						pingyuanyijun平原义军: '平原义军',
						guilangkuangbaozhe鬼狼狂暴者: '鬼狼狂暴者',
						hualiutuxizhe骅骝突袭者: '骅骝突袭者',
						xiliangjulun西凉巨轮: '西凉巨轮',
						zhanchuan战船: '战船',
						xueqixinbing血骑新兵: '血骑新兵',
						pingronggongling平戎弓领: '平戎弓领',
						liuxingshi流星矢: '流星矢',
						zhumaobing竹矛兵: '竹矛兵',
						tieguzhanche铁骨战车: '铁骨战车',
						longchuanyijun龙川义军: '龙川义军',
						wuhuanqibing乌桓骑兵: '乌桓骑兵',
						tianxianhuonubing天险火弩兵: '天险火弩兵',
						liushaxiankeng流沙陷坑: '流沙陷坑',
						ninghuan佞宦: '佞宦',
						fuhaidachuan浮海大船: '浮海大船',
						hanshizongmiao汉室宗庙: '汉室宗庙',
						xiqiangzhanche西羌战车: '西羌战车',
						gutongzhenchi古铜镇尺: '古铜镇尺',
						saiwaimanzu塞外蛮族: '塞外蛮族',
						qiangtiexianfeng羌铁先锋: '羌铁先锋',
						louchuan楼船: '楼船',
						shuiqishou水旗手: '水旗手',
						dongwujianchuan东吴舰船: '东吴舰船',
						wuhuanwandaobing乌桓弯刀兵: '乌桓弯刀兵',
						tongjiashizhen铜甲士阵: '铜甲士阵',
						dongwushanggu东吴商贾: '东吴商贾',
						gongchengzhanhu攻城战虎: '攻城战虎',
						changanniquan长安逆犬: '长安逆犬',
						siluhanfei丝路悍匪: '丝路悍匪',
						qilieyishi祈猎仪式: '祈猎仪式',
						tanlanyouqi贪婪游骑: '贪婪游骑',
						shuqiangbing蜀枪兵: '蜀枪兵',
						wugongbing吴弓兵: '吴弓兵',
						damohuqizhang大漠胡骑长: '大漠胡骑长',
						damolietoudui大漠猎头队: '大漠猎头队',
						feiyanyihuo飞燕一伙: '飞燕一伙',
						heishangangtou黑山杠头: '黑山杠头',
						hufaguilang护法鬼狼: '护法鬼狼',
						honghuangshizhu洪荒石柱: '洪荒石柱',
						heijiao黑蟜: '黑蟜',
						tianjijushou天机巨兽: '天机巨兽',
						gaoyuanxuelang高原雪狼: '高原雪狼',
						shuaiyiyongshi率义勇士: '率义勇士',
						duquan毒泉: '毒泉',
						hutunbing护屯兵: '护屯兵',
						longgushuiche龙骨水车: '龙骨水车',
						nianmaiwuzu年迈武卒: '年迈武卒',
						duchicaiguan毒齿材官: '毒齿材官',
						ximinyongshi西岷勇士: '西岷勇士',
						queyingyouchu雀鹰幼雏: '雀鹰幼雏',
						hongjinbubing红巾步兵: '红巾步兵',
						dapengniao大鹏鸟: '大鹏鸟',
						wendizhongzhuangbubing: '文帝重装步兵',
						xunlingxuanhe寻灵玄鹤: '寻灵玄鹤',
						ligefubing利戈府兵: '利戈府兵',
						yuzhao御诏: '御诏',
						feiyanhanyong飞燕悍勇: '飞燕悍勇',
						juemingneishi绝命内侍: '绝命内侍',
						tongrenzhen铜人阵: '铜人阵',
						yinyedongmanshou银冶洞蛮首: '银冶洞蛮首',
						sanfuluandang三辅乱党: '三辅乱党',
						tanjiyeying探戟夜莺: '探戟夜莺',
						posuobendui婆娑本队: '婆娑本队',
						linggongbing灵弓兵: '灵弓兵',
						kongxuansi控弦司: '控弦司',
						hefeibaifuzhang合肥百夫长: '合肥百夫长',
						danyangzhonggongying丹阳重弓营: '丹阳重弓营',
						damowandaobing大漠弯刀兵: '大漠弯刀兵',
						feijianghongchoujun飞将红绸军: '飞将红绸军',
						silidunjiabing司隶盾甲兵: '司隶盾甲兵',
						qingzhouzhongjiaying青州重甲营: '青州重甲营',
						zimingqinjun子明亲军: '子明亲军',
						xiliangtieqi西凉铁骑: '西凉铁骑',
						tuntianzhubu屯田主薄: '屯田主薄',
						huorenbing火刃兵: '火刃兵',
						ganshishinv甘氏侍女: '甘氏侍女',
						binghuozhui冰火锥: '冰火锥',
						huoquanbing火拳兵: '火拳兵',
						shibabanbingqi十八般兵器: '十八般兵器',
						dao刀: '刀',
						qiang枪: '枪',
						jian剑: '剑',
						ji戟: '戟',
						fu斧: '斧',
						yue钺: '钺',
						gou钩: '钩',
						cha叉: '叉',
						bian鞭: '鞭',
						jian锏: '锏',
						chui锤: '锤',
						tang镗: '镗',
						shuo槊: '槊',
						zhua抓: '抓',
						guai拐: '拐',
						lian镰: '镰',
						gong弓: '弓',
						biao镖: '镖',
						gun棍: '棍',
						xiongshi雄狮: '雄狮',
						wulingjieluezhe武陵劫掠者: '武陵劫掠者',
						hongfunv红拂女: '红拂女',
						huanyingbing幻影兵: '幻影兵',
						wuhoubazhenbing: '武侯八阵兵',
						huangmenzhanshashou黄门斩杀手: '黄门斩杀手',
						junyisijiancha军议司监察: '军议司监察',
						daxianshinv大贤侍女: '大贤侍女',
						wujunchanggongshou吴郡长弓手: '吴郡长弓手',
						sunshigongwei孙氏弓卫: '孙氏弓卫',
						hanzhongshuwei汉中戍卫: '汉中戍卫',
						hongyanshouwei红颜守卫: '红颜守卫',
						yiliaoshengshi: '医疗圣使',
						xueren雪人: '雪人',
						cangwuzhanshi苍梧战士: '苍梧战士',
						gongbing: '长弓',
						gongbing_info: '锁定技,你使用的锦囊牌和基本牌没有距离限制',
						spm_kuitao: '溃逃',
						spm_kuitao_info: '锁定技,你的手牌上限始终-1,其他角色计算与你的距离时始终+1',
						spm_manyi1: '蛮夷',
						spm_manyi1_info: '锁定技,当你使用「杀」造成伤害或受到锦囊伤害后,该伤害+1',
						spm_manyi2: '蛮夷',
						spm_manyi2_info: '锁定技,当你使用「杀」造成伤害或受到锦囊伤害后,该伤害+1',
						spm_manyi3: '蛮夷',
						spm_manyi3_info: '锁定技,当你使用「杀」造成伤害或受到锦囊伤害后,该伤害+1',
						spm_kuitao2: '溃逃',
						spm_kuitao2_info: '',
						spm_kuitao1: '溃逃',
						spm_kuitao1_info: '锁定技,1.你的手牌上限+X.2.游戏开始时,你摸X张牌(X为你的体力上限)',
						zhuxiao: '捡漏',
						zhuxiao_info: '当其他角色的装备牌,因弃牌而进入弃牌堆时,你可以获得之',
						弄潮: '弄潮',
						弄潮_info: '锁定技,当你受到火焰伤害后,若该伤害大于一,则该伤害减一',
						liannu: '连弩',
						liannu_info: '锁定技,若你没装备武器,则你本回合内使用杀没有次数限制',
						liannu_all: '连弩总',
						liannu_all_info: '锁定技,若你没装备武器,则你本回合内使用杀没有次数限制',
						liannu_lost: '放下连弩',
						liannu_lost_info: '锁定技,若你没装备武器,则你本回合内使用杀没有次数限制',
						feidao: '飞刀',
						feidao_info: '出牌阶段限1次,你弃置一张手牌,令至多3名目标猜测一种花色,并摸一张牌,如果猜的花色和摸的牌花色不同,你对其造成一点毒属性伤害',
						huojian: '火箭',
						huojian_info: '出牌阶段限制一次,你指定至多2名目标使其受到2点火属性伤害,你每指定一名角色你受到一点火属性伤害',
						saodang: '扫荡',
						saodang_info: '出牌阶段,你可以摸等同于手牌数的牌.若此做你受到一点来伤害',
						shenjishibing: '神戟',
						shenjishibing_info: '你使用的杀可以指定至多2名目标并且无距离限制',
						jijunshibing: '集军',
						jijunshibing_info: '锁定技,其他角色的出牌阶段开始时,若其手牌数不小于你的手牌,必须交给你一张手牌',
						mujunshibing: '募军',
						mujunshibing_info: '摸牌阶段,你可以放弃摸牌,令所有其他角色依次选择一项:1、交给你一张牌;2、令你摸一张牌',
						shengongshibing: '神弓',
						shengongshibing_info: '锁定技,你使用的任何卡牌无数量及距离限制;当你于回合内重复使用同名卡牌时,你摸一张牌(每回合最多以此法摸5张牌)',
						yufuwenguan: '御府',
						yufuwenguan_info: '出牌阶段限2次,你可以将一张牌当作无中生有使用',
						ceshi: '策士',
						ceshi_info: '出牌阶段限2次,你可以弃置一张牌,随机获得2张锦囊牌',
						bugua: '卜卦',
						bugua_info: '出牌阶段限一次,你可以对至多2名角色造成一点雷属性伤害',
						guiyinvguan: '贵仪',
						guiyinvguan_info: '每当你受到一次伤害时,你可以令伤害来源选择一项:展示所有手牌并弃置其中2张;或令此伤害-1',
						daoguan: '道官',
						daoguan_info: '出牌阶段限制一次,你可以弃置全部手牌,指定一名角色,获得其所有牌',
						guolian: '钩镰',
						guolian_info: '出牌阶段,你可以弃置一张武器牌,选择至多3名角色对其造成1点火属性伤害',
						huben: '虎贲',
						huben_info: '出牌阶段限一次,你可以弃置一张牌并选择一名其他角色,获得目标两张手牌,对其造成1点火属性伤害',
						weishi: '卫士',
						weishi_info: '锁定技,当你进入濒死状态时,你进行一次判定,若结果不为♠️️,你将体力回复至1',
						maifushibing: '埋伏',
						maifushibing_info: '锁定技,每当你造成一点伤害时,防止该伤害,你须弃置一张牌,令该名角色翻面;若其已翻面则令其失去一点体力',
						huweishibing: '护卫',
						huweishibing_info: '当一名其他角色使用杀指定目标后,你令其选择一项:1、弃置一张牌.2、令此杀无效',
						shenjiansbing: '神剑',
						shenjiansbing_info: '出牌阶段限一次,你对每名其他角色各造成一点伤害,其他角色弃掉各自装备区里所有的牌,再弃置一张手牌',
						chuqiao: '出鞘',
						chuqiao_info: '每名角色的准备阶段你可以摸2张牌,并且可以使用一张牌,你的杀无距离限制',
						yiliao: '医疗',
						yiliao_info: '每回合限制一次,你选择至多2名已受伤的目标,让其摸一张牌弃置一张牌,使其回复一点体力',
						daofeng: '刀锋',
						daofeng_info: '锁定技,你的杀、决斗、万箭齐发造成伤害+1',
						xuerenshibing: '血刃',
						xuerenshibing_info: '锁定技,每回合限制一次,所有角色打出杀后你摸一张牌',
						yantang: '雁镋',
						yantang_info: '每回合限制一次,指定至多2名有牌的角色,你弃置目标一张牌,其受到一点雷属性伤害',
						tiezhua: '铁爪',
						tiezhua_info: '出牌阶段限制一次,你可以亮出牌堆顶的3张牌,其中每有一张基本牌,你便可视为对一名其他角色使用一张杀(每阶段对每名角色限一次).将这些基本牌置入弃牌堆,其余收入手牌',
						yunliang: '运粮',
						yunliang_info: '判定阶段和结束阶段前,你可以令一名蜀势力角色摸一张牌',
						yunliang1: '运粮',
						yunliang1_info: "判定阶段和结束阶段前,你可以令一名魏势力角色摸一张牌'",
						mengchong: '蒙冲',
						mengchong_info: '当一名角色于出牌阶段使用【杀】指定目标后,你可弃置一张手牌并令该角色可额外指定一名你攻击范围内的角色为目标',
						youjia: '尤甲',
						youjia_info: '锁定技,当你成为【火攻】的目标时,该牌结算后,你弃置一张手牌;【南蛮入侵】对你无效",',
						doujian: '斗舰',
						doujian_info: '弃牌阶段开始时,你可使用一张牌,若如此做,你摸一张牌",',
						tanmishibing: '探密',
						tanmishibing_info: '当你对一名角色造成伤害后,你可以获得其一张牌,若此牌为基本牌你再获得其一张牌',
						仆从: '仆从',
						仆从_info: '锁定技,每当你于回合内使用一张非转化的普通锦囊牌,你摸一张牌(每回合最多发动3次);出牌阶段开始时,你令你与一名随机敌人各获得一张随机普通锦囊牌',
						zeixi: '贼袭',
						zeixi_info: '每名角色回合限2次,当一名角色使用一张武器牌或杀后,你可弃置其攻击范围内的一名其他角色的一张手牌,若这张手牌的颜色为红色,则使用牌的角色视为对被弃置手牌的角色使用一张不计入次数限制的【杀】',
						shejishibing: '蛇姬',
						shejishibing_info: '当一名其他角色翻面或判定牌生效后,你可以选择一项:1、将该角色装备区里的一张牌移动至你装备区里的相应位置(不可替换);2、摸一张牌',
						yurennvguan: '玉人',
						yurennvguan_info: '当你使用装备区的牌时,你可以摸一张牌并弃置其他角色区域内的一张牌',
						投石: '投石',
						投石_info: '',
						投石_dis: '投石',
						投石_dis_info: '',
						投石_: '投石',
						投石_info: '锁定技,每当你受到伤害或造成伤害后,你摸等量的牌并获得等量的"石".锁定技,你使用牌没有距离限制.出牌阶段,你可以弃置一枚"石"并对一名其他角色造成一点伤害',
						石料: '石料',
						石料_draw: '石料摸牌',
						石料_recover: '石料回复',
						石料_info: '',
						石料_: '石料',
						石料_info: '锁定技,每名角色的回合结束后,你获得25石料,有25%的概率额外获得25石料(石料最多可存储9990);出牌阶段,你可以:<br><b>①用25石料摸一张牌.②用175石料回复一点体力',
						车弩: '车弩',
						车弩_info: '锁定技,准备阶段,你视为对所有其他角色使用了一张【杀】,你回复一点体力摸三张牌',
						chouyeshibing: '仇业',
						chouyeshibing_info: '你的回合结束阶段,你可以选择一名已损失体力值大于1的角色.直到其下个回合开始前,每个回合结束时,该角色失去1点体力',
						chouyeshibing2: '仇业',
						chouyeshibing2_info: '',
						卫侯: '卫侯',
						卫侯_info: '一名角色受到伤害后,你可进行判定若为黑色弃置一名角色两张牌若为红色令一名角色受到一点伤害',
						贵兵: '贵兵',
						贵兵_info: '一名角色使用杀时可展示该角色手牌你可获得点数不小于13的牌,你回复一点体力摸两张牌',
						糜资: '糜资',
						糜资_info: '回合开始你可将点数不大于13的任意数量牌交给一名角色并可视为对一名角色使用一张杀',
						耳目: '耳目',
						耳目_info: '有角色受到伤害后你可获得该角色伤害来源等量牌',
						無挡: '無挡',
						無挡_info: '一名角色回合结束时,你令一名角色增加一点体力上限回复一点体力',
						飛軍: '飛軍',
						飛軍_info: '一名角色弃置牌后你可令一名角色失去一点体力并可令一名角色增加一点体力上限',
						忠令: '忠令',
						忠令_info: '你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标;当一名角色使用【杀】指定一个目标后,你可以令其执行相应的效果:1.此【杀】不可被【闪】响应 2.此【杀】伤害+1',
						丹阳: '丹阳',
						丹阳_info: '<span style="color: red">锁定技</span>,<span style="color: gold">你造成伤害后</span>你摸1张牌,你使用"杀"造成的伤害基数永久<span style="color: gold">+1</span>',
						群踞: '群踞',
						群踞_info: '当你成为一名角色使用牌的唯一目标时你可令之对你无效并摸一张牌',
						弓卫: '弓卫',
						弓卫_info: '出牌阶段限一次,你可弃置一张牌选择一名其他角色弃置该角色一张牌你摸两张牌视为对所有敌方角色使用万箭齐发',
						昭卫: '昭卫',
						昭卫_info: '每名角色回合限一次,一名角色使用基本牌后你可令一名角色摸一张牌并视为对所有敌方角色使用杀',
						diexueshibing: '喋血',
						diexueshibing_info: '一名角色回合结束阶段你可令一名角色获得牌堆的一张♥️️牌,当前角色失去一点体力',
						魔刀之威: '魔刀之威',
						魔刀之威_info: '一名角色使用杀后若该角色体力值与你不相等或手牌数或装备区数不大于你,你可选择一名角色对其造成随机1到2点伤害',
						jishijimin: '饥食',
						jishijimin_info: '一名其他角色回合结束阶段,若其手牌数大于你,你获得该角色所有手牌',
						dianxing典刑: '典刑',
						dianxing典刑_info: '其他角色回合结束阶段,你可以弃置该角色的一张牌,若此牌为黑色,该角色翻面失去一点体力',
						dinglidading: '鼎力',
						dinglidading_info: '成为其他角色使用牌的目标可令之无效',
						chengjianshibing: '剑城',
						chengjianshibing_info: '每名角色回合限一次,一名角色使用锦囊牌后你可摸一张牌视为对所有敌方角色使用一张杀',
						baima白马: '白马',
						baima白马_info: '锁定技,己方所有角色的防御距离+2',
						maming马鸣: '马鸣',
						maming马鸣2: '马鸣',
						maming马鸣_info: '回合结束阶段可进行判定若判定结果为红色你摸两张牌你的防御距离加二直到你下个回合开始时',
						maming马鸣2_info: '你的防御距离加二',
						招募白马: '招募白马',
						招募白马_info: '回合开始阶段,召唤白马两匹与你协同作战,失去此技能',
						随义: '随义',
						随义_info: '一名角色使用杀后你可弃置当前角色一张牌若为黑色该角色受到你的1点伤害你摸两张牌',
						弄士兵斧: '弄斧',
						弄士兵斧_info: '一名角色使用杀时你可令一名角色弃置两张牌,对该角色造成一点伤害',
						匿士兵刀: '匿刀',
						匿士兵刀_info: '你使用杀时你可令一名其他角色弃置两张牌,若如此做此杀伤害加一',
						镇贼shibing: '镇贼',
						镇贼shibing_info: '当一名角色使用杀时或判定时,你可以对其使用任意张牌并以其为唯一的目标(无距离限制),你每对其造成1点伤害,你回复1点体力或摸两张牌',
						镇贼shibing2: '镇贼',
						镇贼shibing2_info: '',
						镇贼shibing3: '镇贼',
						镇贼shibing3_info: '',
						镇贼shibing4: '镇贼',
						镇贼shibing4_info: '',
						行刺: '行刺',
						行刺_info: '一名角色使用黑色杀后你可获得一名角色一张牌对其造成一点伤害',
						凌卫: '凌卫',
						凌卫_info: '一名角色使用伤害标签牌时你可获得一名角色一张牌对其造成一点伤害',
						毦烈: '毦烈',
						毦烈_info: '当一名角色使用锦囊牌指定目标后,你可以令其展示所有手牌,弃置其中一种颜色的牌,你摸一张牌',
						白毦: '白毦',
						白毦_info: '当一名角色使用杀指定目标后,你可以令其展示所有手牌,弃置其中一种颜色的牌,你摸一张牌',
						烟花: '烟花',
						烟花_info: '回合结束阶段你可对一名角色造成一点火焰伤害,并令该角色陷入混乱状态直到其回合结束',
						耕耘: '耕耘',
						耕耘_info: '一名角色回合结束阶段,若你装备区内有牌,你可令当前角色摸三张牌回复一点体力',
						犁地: '犁地',
						犁地_info: '出牌阶段限一次,你可令一到两名角色各摸两张牌,若如此做,你每选择一名角色失去一点体力增加两点体力上限',
						兴令: '兴令',
						兴令_info: '回合开始时,你可令全体友方角色获得两张过河拆桥(随机花色点数)',
						帆兵: '帆兵',
						帆兵_more: '帆兵(+1)',
						帆兵_less: '帆兵(-1)',
						帆兵_info: '一名角色受到伤害时你可弃置一张过河拆桥令其伤害加一或减一',
						锦弓: '锦弓',
						锦弓_info: '一名角色使用过河拆桥后,你可视为对所有敌方角色使用一张万箭齐发',
						锦使: '锦使',
						锦使_info: '出牌阶段限一次,你可弃置一张过河拆桥观看牌堆顶的两张牌,若如此做可将其中的牌任意分配',
						槊阵: '槊阵',
						槊阵2: '槊阵',
						铁槊: '铁槊',
						槊阵_info: '回合开始时,你可令全体友方角色获得两张弃甲曳兵(随机花色点数)你可以将一张弃甲曳兵当做杀使用',
						铁槊_info: '一名角色使用杀后,你可视为对所有敌方角色使用一张弃甲曳兵',
						象战: '象战',
						象战_info: '一名角色使用杀或决斗后,你可摸两张牌视为对所有敌方角色使用一张南蛮入侵',
						蛮女: '蛮女',
						蛮女_info: '你可将一张杀当做南蛮入侵使用',
						蛮力: '蛮力',
						蛮力_info: '你可将一张藤甲当做南蛮入侵使用',
						霸蛮: '霸蛮',
						霸蛮_info: '回合开始时,你可令全体友方角色获得一张藤甲(随机花色点数)',
						蛮姑: '蛮姑',
						蛮姑_info: '一名角色回合开始时你可摸一张牌,可视为当前角色对一名角色使用一张决斗,视为对所有敌方角色使用南蛮入侵',
						蛮牙: '蛮牙',
						蛮牙_info: '回合开始时,你可令全体友方角色获得一张南蛮入侵(随机花色点数)',
						长蛮: '长蛮',
						长蛮_info: '你使用南蛮入侵造成伤害后可摸该牌点数的牌至少为1,并可令受伤角色失去一点体力',
						暴蛮: '暴蛮',
						暴蛮_info: '你可令一名角色受到的南蛮入侵伤害加该牌点数至少为1',
						蛮勇: '蛮勇',
						蛮勇_info: '当一名角色获得锦囊牌后,你可弃置一名角色3张牌视为对所有敌方角色使用一张南蛮入侵',
						象袭: '象袭',
						象袭_info: '回合开始时或你受到伤害后你可对一名角色造成随机3到5点伤害,并执行等量次数的摸等量牌对所有敌方角色使用一张南蛮入侵',
						利槊: '利槊',
						利槊_info: '一名角色使用弃甲曳兵后,你可摸一张牌视为对所有敌方角色使用一张杀',
						拒马: '拒马',
						拒马_info: '一名角色使用杀时,你可获得一名角色一张牌若其为坐骑牌你再获得其一张牌该角色受到一点伤害,若不为坐骑牌你获得该牌点数的护甲',
						巾兵: '巾兵',
						巾兵_info: '回合开始时,你可令全体友方角色获得一张雷杀(随机花色点数)',
						短刀: '短刀',
						短刀2: '短刀',
						短刀_info: '一名与你距离不大于2的角色成为杀的目标时,你可摸一张牌获得该角色一张牌对该角色造成一点伤害,你可于出牌阶段额外使用一张杀',
						巾令: '巾令',
						巾令_info: '回合开始时,你可令全体友方角色获得一张雷杀(♠️️随机点数)一张闪(随机花色点数)',
						挥雷hl: '挥雷',
						挥雷hl_info: '一名角色受到雷电伤害后你可令全体友方角色获得一张闪(随机花色与点数)',
						枭雷xl: '枭雷',
						枭雷xl_info: '回合开始时或你受到伤害后你可对一名角色造成随机1到2点雷电伤害,并令其弃置等量牌',
						落草lc: '落草',
						落草lc_info: '一名角色使用杀时你可进行判定若为黑色所有友方角色获得一张闪,若为红色此杀无效',
						骁志xz: '骁志',
						骁志xz_info: '每名角色回合限一次,一名角色使用杀后或你回合开始时你可弃置一名角色一张牌若为伤害标签类牌你可视为对所有敌方角色使用一张杀',
						暴动bd: '暴动',
						暴动bd_info: '<li><span style="color: gold">摸牌阶段结束时</span>,你可以视为使用1张"雷杀"(有距离无次数限制),若此"雷杀"造成过伤害,你摸1张牌获得一点护甲',
						尸魃shiba: '尸魃',
						尸魃shiba2: '尸魃',
						尸魃shiba_info: '<li><span style="color: #595959">一名角色死亡后</span>,<span style="color: #C0C0C0">你可以令一名角色复活,该角色体力为4摸4张牌,该角色阵营改为与你一致,该角色开启一个新的回合,你死亡前可令一名角色变为黄巾尸魃</span>',
						投矛: '投矛',
						投矛2: '投矛',
						投矛3: '投矛',
						投矛_info: '你使用杀时可摸三张牌交给目标角色一张牌若为基本牌对该角色造成该牌点数的伤害,你使用杀指定所有敌方角色为目标你使用杀无距离限制',
						盗徒: '盗徒',
						盗徒_info: '一名角色受到雷电伤害后你可进行一次判定,若为黑色或闪你可获得其一张牌',
						传道cd: '传道',
						传道cd_info: '一名角色使用黑色牌指定目标时你可令一名角色获得牌堆内一张♠️️牌并可令一名角色获得牌堆内一张闪',
						利斧: '利斧',
						利斧_info: '你使用黑色杀指定目标时可令一名角色弃置两张牌对其造成一点伤害',
						长刀: '长刀',
						长刀_info: '你使用黑色杀指定目标时可进行一次判定若为黑色摸一张牌令目标角色受到一点伤害',
						拒象: '拒象',
						拒象2: '拒象',
						拒象_info: '一名角色受到锦囊牌的伤害时可防止之对所有敌方角色造成一点火焰伤害摸两张牌执行额外的回合,你回合结束阶段也可摸两张牌执行一个额外的出牌阶段',
						巾酒: '巾酒',
						巾酒2: '巾酒',
						巾酒_info: '回合开始时,你可令全体友方角色获得一张雷杀(♠️️随机点数)一张闪(随机花色点数)一张酒(♠️️随机点数)一名角色判定时你可用一张酒替换之',
						巾祭: '巾祭',
						巾祭_info: '一名角色失去基本牌后,你可弃置一名角色两张牌视为对所有敌方角色使用一张雷杀不计入出牌阶段限制',
						巾骑: '巾骑',
						巾骑_info: '出牌阶段限一次,你可弃置一张牌令你攻击范围无限,若弃置的牌为闪则可选择一名其他角色弃置该角色一张牌视为你对其使用一张杀',
						赐巾: '赐巾',
						赐巾_info: '一名角色使用黑色牌指定目标时你可令一名角色获得牌堆内一张♠️️牌并可令一名角色获得牌堆内一张闪,你可令全体友方角色获得一张⚡(随机花色与点数)',
						夜行: '夜行',
						夜行_info: '你于回合外失去牌后获得一点护甲',
						匿刺: '匿刺',
						匿刺_info: '与你距离为1以内角色成为杀的目标时你可摸一张牌令此杀无法被闪避',
						迅兵: '迅兵',
						迅兵2: '迅兵',
						迅兵_info: '一名角色出牌阶段开始时,你可摸一张牌交给该角色一张牌,并可视为对令一名角色使用一张杀,当前角色攻击范围无限直到回合结束后',
						蜀印: '蜀印',
						蜀印_info: '回合开始时或你受到伤害后所有非蜀势力角色须选择弃置非蜀势力角色数的牌,所有蜀势力角色增加蜀势力角色数体力上限回复等量体力摸等量杀摸等量牌',
						魏印: '魏印',
						魏印1: '魏印',
						魏印_info: '回合开始时或你受到伤害后所有非魏势力角色须选择弃置非魏势力角色数的牌,所有魏势力角色增加魏势力角色数手牌上限摸等量桃摸等量牌',
						巾姬: '巾姬',
						巾姬_info: '一名角色使用基本牌后,你可观看一名角色手牌获得其一张牌并可对一名角色造成随机1或2点伤害并回复等量体力',
						巾道: '巾道',
						巾道_info: '出牌阶段限制一次,你可以弃置全部手牌,指定一名角色,获得其所有牌,全体友方角色各获得一张闪',
						同命tm: '同命',
						同命tm_info: '锁定技,每回合限一次,当一名友方角色受到伤害后,对随机一名敌方角色造成X点伤害.(X为该技能本局游戏发动的次数)',
						荆棘: '荆棘',
						荆棘_info: '一名角色回合结束阶段你可令其弃置一张杀,若如此做你回复一点体力,否则其受到一点伤害',
						巾旗: '巾旗',
						巾旗_info: '一名角色回合结束阶段你可令其弃置一张闪,若如此做你回复随机一到三点体力,否则其受到随机一到二点雷电伤害',
						近斗: '近斗',
						近斗_info: '一名与你距离不大于1的角色成为杀的目标时,你可摸一张牌全体友方角色获得一张杀和一张决斗(随机花色点数),并视为对所有敌方角色使用一张决斗',
						玺灵: '玺灵',
						玺灵_info: '锁定技,出牌阶段开始时,你获得一张替身牌,此牌对应一名随机敌人的一张随机手牌;每当你使用一张非替身牌,随机更换替身牌对应的牌;当你使用替身牌时,改为使用替身牌对应的牌;当出牌阶段结束,或替身牌离开手牌区,或敌方角色没有手牌时,销毁替身牌',
						宦刑: '宦刑',
						宦刑2: '宦刑',
						宦刑_info: '一名角色使用杀时你可弃置一张黑色锦囊牌令此杀无法被闪避,你使用杀时可获得弃牌堆一张黑色锦囊牌(没有则跳过)',
						肋贿: '肋贿',
						肋贿_info: '出牌阶段限一次,你可选择一名角色令其弃置两张牌若其未能如此做该角色你对该角色造成一点伤害',
						宫纠: '宫纠',
						宫纠_info: '每名角色回合限一次,每当你使用黑色锦囊牌后,所有友方角色获得牌堆内有的一张黑色锦囊牌',
						道信: '道信',
						道信_info: '回合开始时,若你有红色牌,你可弃置一张红色牌令全体友方角色随机获得一张杀或决斗(♠️️随机点数)一张闪(随机花色点数)',
						狂信: '狂信',
						狂信_info: '回合开始时,若你有红色牌,你可弃置一张红色牌令全体友方角色随机获得一张杀或决斗(♠️️随机点数)一张闪(随机花色点数)非友方角色须选择弃置一张黑色牌(没有则跳过)',
						远避: '远避',
						远避_info: '锁定技,当你受到有伤害来源的伤害时,若伤害来源攻击范围小于4伤害改为0,否则伤害改为1',
						备令: '备令',
						备令_info: '你受到伤害时,可展示牌堆顶和你的一张牌,若你的点数比较大,你防止此伤害并摸一张牌',
						操刀: '操刀',
						操刀_info: '你使用杀造成伤害时可弃置一张黑色牌,令此伤害加一,你使用的黑色杀不计入次数限制',
						利刀: '利刀',
						利刀_info: '每名角色回合限一次,一名角色使用杀后,你可摸一张牌并展示牌堆顶的一张牌,若此牌点数不大于5,则对目标角色造成该牌点数的伤害,否则你获得所展示的牌',
						轻盾: '轻盾',
						轻盾_info: '回合结束阶段,你可进行一次判定,若判定结果为红色全体友方角色获得一点护甲',
						涯枪: '涯枪',
						涯枪_info: '一名角色使用杀时,你可发动涯角并增加若能交给牌则摸两张牌回复一点体力和弃置了牌则弃置一名角色一张牌的效果',
						龙扈: '龙扈',
						龙扈_info: '你使用杀时或一名角色受到伤害时,你可发动涯角并增加:<若能交给牌,则摸1张牌回复一点体力;若弃置了牌,则弃置一名角色一张牌,并令其失去一点体力>的效果',
						大刀卫: '大刀卫',
						大刀卫_info: '一名角色使用杀时,你可展示牌堆顶的三张牌,若展示的牌中有基本牌则视为对其使用一张杀,若展示的牌中有锦囊牌则对其造成一点伤害,并令其选择一项,获得其一张牌或令此杀无效',
						虎刀: '虎刀',
						虎刀2: '虎刀',
						虎刀1: '虎刀',
						虎刀_info: '一名角色使用杀时,你可展示牌堆顶的三张牌,获得其中的基本牌和武器牌,若其为友方角色此伤害加一,否则此伤害减一',
						吹号: '吹号',
						吹号_info: '一名角色使用牌结算结束后,你可弃置一张与该牌颜色相同的牌令此牌额外结算一次',
						号角: '号角',
						号角1: '号角',
						号角_info: '回合结束时,你可令所有敌方角色进入混乱状态并造成的伤害加一直到其回合结束后',
						锐卒: '锐卒',
						锐卒_info: '每名角色回合限一次,一名角色使用杀后或一名角色受到伤害后,你可摸一张牌,若此当前时机的牌有进入弃牌堆的牌,你获得该牌',
						玉玺: '玉玺',
						玉玺2: '玉玺',
						玉玺_info: '一名角色摸牌阶段开始时你可令其摸牌阶段摸牌数加一,一名角色出牌阶段开始时你可视为令其使用一张知己知彼',
						老倔: '老倔',
						老倔2: '老倔',
						老倔_info: '一名其他角色回合开始时,你可令其与你距离为1直到其回合结束后,之后你执行一个额外回合',
						疆兵: '疆兵',
						疆兵_info: '锁定技,你受到与你距离为1的其他角色的伤害始终加一',
						珞阵: '珞阵',
						珞阵_info: '当你使用杀时,你可以依次弃置一至两名其他角色的共计两张牌,摸该牌点数的牌对一名角色造成一点伤害',
						磐义: '磐义',
						磐义_info: '当你使用锦囊牌时,你可以依次弃置一至两名其他角色的共计两张牌,摸回复一点体力对一名角色造成一点伤害',
						烦营: '烦营',
						烦营2: '烦营',
						烦营_info: '出牌阶段限一次,你可弃置一张牌选择一名其他角色弃置该角色一张牌你摸两张牌视为对所有敌方角色使用杀,你获得这些角色已损失体力值之和点护甲',
						烦部: '烦部',
						烦部2: '烦部',
						烦部_info: '出牌阶段限一次,你可令所有角色选择是否令你摸两张牌,若其选择是你摸两张牌,选择否其弃置一张牌视为你对其使用一张杀,你使用杀时可获得敌方所有角色已损失体力值之和的护甲',
						粮队: '粮队',
						粮队_info: '出牌阶段限一次,你可观看牌堆顶的你体力上限张数的牌,并可获得牌堆顶的1到你已损失体力值张牌,之后全体友方角色从普通杀、闪、桃、酒、桃园结义、五谷丰登、铁索连环、过河拆桥、顺手牵羊、无中生有、挟天子以令诸侯、戮力同心、联军盛宴、调虎离山、远交近攻各获得两张随机牌名的牌(花色点数均为随机)',
						淮河: '淮河',
						淮河2: '淮河',
						淮河_info: '回合开始时,你可摸一张牌并视为对所有敌方角色使用一张水淹七军,你受到伤害时可令所有友方角色获得一张水淹七军(随机花色点数)',
						嘉卫: '嘉卫',
						嘉卫_info: '每名角色回合限一次,一名角色使用杀时,你可弃置任意张牌摸所弃置牌数加一的牌,目标角色获得弃置牌数加一的护甲',
						吴侍: '吴侍',
						吴侍_info: '每名角色回合限一次,一名角色失去牌后你可视为对所有敌方角色使用一张决斗,所有友方角色增加所有敌方角色已损失体力值之和的护甲',
						哨卫: '哨卫',
						哨卫_info: '一名角色使用杀时,你可摸一张牌,观看该角色手牌并弃置该角色一张牌,若此牌为基本牌此杀无效',
						探马: '探马',
						探马_info: '每名角色回合限一次,你的回合开始时或一名角色使用杀时,你可观看一名角色手牌并选择获得其一张牌,若为基本牌你可交给一名角色一张牌该角色回复一点体力',
						禁卫: '禁卫',
						禁卫_info: '一名角色使用杀时你可摸一张牌,获得该角色一张牌,若此牌为基本牌此杀无效,若此牌为黑色牌所有友方角色获得一点护甲,若此牌点数位于[2,8]视为你对所有敌方角色使用一张杀',
						钺卫: '钺卫',
						钺卫_info: '一名角色使用基本牌后,你可令一名角色摸一张牌,从闪和无懈可击中随机获得一张,视为对所有敌方角色使用一张杀',
						屯营: '屯营',
						屯营2: '屯营',
						屯营3: '屯营',
						屯营3_info: '攻击范围+2直到该回合结束',
						屯营_info: '每名角色回合限二次,每当你失去牌后你可进行一次判定若不为♥️️,️所有友方角色获得一张顺手牵羊,一名角色判定牌生效时,若你手牌中有顺手牵羊,可选择1到2名角色,其攻击范围+2直到其回合结束后,你可用一张顺手牵羊代替之,并可选择1到2名角色,视为该修改判定牌对这些角色结算一次(触发结算的牌必须为基本牌或非延时锦囊牌)',
						校尉: '校尉',
						校尉2: '校尉',
						校尉_info: '出牌阶段限一次,你可令所有敌方角色摸两张牌弃置三张牌,一名角色弃置牌后你可选择发动,若其中包含黑色牌则其失去一点体力,包含红色牌你获得一点护甲',
						胡奴: '胡奴',
						胡奴2: '胡奴',
						胡奴2_info: '出牌阶段限一次,你可令一名角色获得十枚胡标记,若如此做,该角色使用黑色牌结算完成后如果该牌点数小于该角色胡标记数,该角色选择弃置一张牌;如果该牌点数等于该角色胡标记数,该角色选择弃置一张牌受到一点伤害;如果该牌点数大于该角色胡标记数,该角色选择弃置一张牌受到2点伤害',
						长钩刀: '长钩刀',
						长钩刀_info: '你使用黑色杀时,你可进行一次判定若为黑色或为基本牌摸1加该角色体力值张牌,获得目标角色一张牌,令目标角色受到一点伤害',
						后备: '后备',
						后备2: '后备',
						后备2_info: '出牌阶段限一次,你可令一名角色获得十枚储标记,若如此做,该角色使用杀时,其可进行一次判定,如果该判定牌点数小于该角色储标记数,该角色随机从闪酒桃获得一张;如果该牌点数等于该角色胡标记数,该角色随机从闪酒桃获得一张,该角色对被杀指定的角色造成一点伤害;如果该牌点数大于该角色储标记数,该角色随机从闪酒桃依次获得共计两张,该角色对被杀指定的角色造成两点伤害',
						破甲: '破甲',
						破甲2: '破甲',
						破甲3: '破甲',
						破甲_info: '一名角色使用杀时,你可摸一张牌,观看该角色手牌并弃置该角色一张牌,若此牌为基本牌,则可令该角色无视目标角色防具直到其回合结束后,你造成伤害前可令此伤害变为1点神圣伤害',
						赈民: '赈民',
						赈民_info: '出牌阶段限一次,你可展示牌堆顶的你体力上限张数的牌,你选择1到你已损失体力值的牌获得之,所有友方角色获得一张随机基本牌与一张你所获得牌牌名中随机牌名的牌,并视为使用一张桃',
						铁甲: '铁甲',
						铁甲2: '铁甲',
						铁甲_info: '结束阶段,你可以观看并选择获得一名其他角色一张牌,若该牌不为基本牌,你获得该牌点数的护甲;若该牌为基本牌,你护甲数翻倍,一名其他角色使用杀或锦囊牌指定目标时,若你有护甲你可令你护甲减一,使之对目标角色无效',
						并锐: '并锐',
						并锐_info: '每名角色回合限一次,你使用杀时可摸一张牌对该角色造成一点伤害,并观看其手牌,若其中没有杀你弃置其一张牌.最后所有友方角色各获得一张杀(随机花色点数)',
						恶狼: '恶狼',
						恶狼_info: '你使用杀时可对一名角色造成随机1到2点伤害,并摸造成伤害值平方的牌,回复造成伤害值平方的体力',
						同袍: '同袍',
						同袍_info: '你使用装备牌后可令所有友方角色装备同名装备牌(该装备牌为随机点数花色)',
						方阵: '方阵',
						方阵_info: '当友方角色成为【杀】的目标后,若其在你的攻击范围内,你进行判定,若为黑色,则视为你对其使用一张【杀】',
						长锐: '长锐',
						长锐_info: '锁定技,你的攻击范围+2,每名角色回合限一次,你使用杀时你摸你攻击范围数量的牌',
						铁蒺藜阵: '铁蒺藜阵',
						铁蒺藜阵2: '铁蒺藜阵',
						铁蒺藜阵_info: '当一名角色于一回合内使用或打出第X张牌结束后,你可以对其造成其攻击范围数的伤害',
						渡攻: '渡攻',
						渡攻_info: '每名角色回合限一次,你使用杀时可观看目标角色的手牌,你可以展示其中一张红色牌,选择一项:1.弃置此牌;2.将此牌置于牌堆顶.你展示牌堆顶的三张牌可获得不同类型的牌各一张,将其余牌置入弃牌堆',
						长武: '长武',
						长武_info: '锁定技,你的攻击范围+1,你使用【杀】指定目标后,可额外选择一名目标,或令此杀伤害+1',
						良驹: '良驹',
						良驹_info: '锁定技,你使用【杀】指定目标后,令目标进行判定,若不为♠️️则此杀不可被闪避;当你成为【杀】的目标后,你进行判定,若不为♥️️则此杀对你无效',
						侍结: '侍结',
						侍结_info: '一名角色使用装备牌后,你可令所有友方角色获得一张随机基本牌,选择视为对所有敌方角色使用杀或万箭齐发',
						陷破: '陷破',
						陷破2: '陷破',
						陷破_info: '一名角色使用杀时,你可摸一张牌与被杀角色拼点,若你赢本回合其无视被杀角色的防具,且使用牌无距离和次数限制,否则该角色摸一张牌',
						织女: '织女',
						织女_info: '当你成为一名其他角色使用基本牌的目标时,若你有牌,你可重铸一张牌,获得一张随机基本牌',
						烽火台: '烽火台',
						烽火台_info: '当一名友方角色受到伤害后,你可令全体友方角色获得一张杀和一张决斗,你可弃置一张黑色牌,若如此做该角色回复一点体力',
						急行: '急行',
						急行_info: '回合开始和结束阶段各执行两次,你摸一张牌执行一个额外的出牌阶段',
						盗马: '盗马',
						盗马_info: '回合开始时,你可获得两张坐骑牌,全体敌方角色弃置装备区的马',
						影贼: '影贼',
						影贼_info: '友方角色受到伤害时,你可弃置一张坐骑牌防止之',
						新兵: '新兵',
						新兵_info: '当你受到伤害后,你可弃置伤害来源一张牌,若该牌为黑色,则视为你对其使用一张无距离次数限制的杀',
						绊马: '绊马',
						绊马2: '绊马',
						绊马_info: '开局你获得牌堆内的所有坐骑牌名的牌各一张,你的坐骑牌不占用手牌上限,一名角色使用杀或装备指定目标时你可弃置一张坐骑牌使之无效',
						丹枪: '丹枪',
						丹枪_info: '每名角色回合限一次,你的判定阶段开始前或一名角色使用牌指定你为目标前,你可摸一张牌跳过此阶段令所有敌方角色弃置一张杀并失去一点体力',
						燕将: '燕将',
						燕将_info: '你使用杀时可回复体力上限数的体力,摸体力上限数的牌',
						齐击: '齐击',
						齐击2: '齐击',
						齐击3: '齐击',
						齐击_info: '你的万箭齐发始终额外结算一次,你使用杀时可弃置目标角色一张牌若为黑色则视为对所有敌方角色使用一张万箭齐发',
						津兵: '津兵',
						津兵_info: '你使用杀时可进行一次判定你获得该判定牌,若为黑色则视为你对目标角色使用一张决斗',
						暗刺: '暗刺',
						暗刺_info: '每回合限一次,一名角色使用杀结算结束后,你可获得一名角色一张牌并可视为对该角色使用随机一到二张杀',
						鹊杀: '鹊杀',
						鹊杀_info: '当你于回合外失去牌后,你获得一点护甲,并令所有敌方角色弃置一张杀,受到一点伤害',
						刃弩: '刃弩',
						刃弩_info: '你使用杀后,可以观看并选择获得一名其他角色一张牌,若该牌为黑色牌,你视为对其使用该牌点数数量的万箭齐发',
						千古风流人物: '千古风流人物',
						千古风流人物1: '千古风流人物',
						千古风流人物2: '千古风流人物',
						千古风流人物3: '千古风流人物',
						// 千古风流人物_info:'游戏开始时,你可选择一个势力,召唤该势力两名千古风流人物作为你的随从,你的回合开始时你可选择一个势力,用该势力的千古风流人物置换千古风流人物的武将牌',
						千古风流人物_info: '游戏开始或回合开始时,你可选择一个势力,召唤该势力两名千古风流人物作为你的随从,随从持续到你的下个回合开始前', //并移除上个回合以此法召唤的随从
						破谋: '破谋',
						破谋_info: '你受到锦囊造成的伤害时可令此伤害减一,并获得一张锦囊牌',
						侍婢: '侍婢',
						侍婢_info: '每回合一次,你于回合外获得牌后可令所有友方角色回复一点体力',
						步隶: '步隶',
						步隶_info: '每名角色回合限一次,你使用杀时,可选择一名其他角色,令其选择弃置其牌数-1的牌,你增加其牌数的护甲摸等量的牌',
						骁锋: '骁锋',
						骁锋1: '骁锋',
						骁锋_info: '回合开始时,你可对一名其他角色造成一点伤害,并获得其一张牌,并令其跳过下个出牌阶段',
						水鬼: '水鬼',
						水鬼_info: '回合开始时,你可弃置一名角色随机一到四张牌,根据所弃置的牌花色数执行相应效果,1:回复一点体力,2:增加一点体力上限,3:获得一张过河拆桥,4:摸四张牌',
						贲锐: '贲锐',
						贲锐_info: '出牌阶段限一次,你可获得一名其他角色两张牌,视为对其使用你手牌中杀数量的杀,对其造成一点伤害',
						贲锐: '贲锐',
						民心3: '得民心',
						民心2: '得民心',
						民心: '得民心',
						民心4: '失民心',
						民心_info: '一名角色出牌阶段限一次,若该角色牌数大于1,该角色可选择两张牌交给你,若如此做该角色获得两枚得民心标记,得民心标记达到10的所属阵营立即胜利',
						民心4_info: '锁定技,一名角色对你造成伤害后,该角色获得两枚失民心标记,失民心标记达到10的角色立即阵亡',
						益州豪杰: '益州豪杰',
						益州豪杰_info: '出牌阶段若你判定区没有乐不思蜀,你可将一张红色牌当做乐不思蜀置于你的判定区,你可回复随机2到4点的体力,选择一名角色对其使用等量的杀',
						鬼狼血祭: '鬼狼血祭',
						鬼狼血祭_info: '每名角色回合限一次,一名角色使用杀时你可令之无效,令其失去随机2到4点体力',
						曹氏精骑: '曹氏精骑',
						曹氏精骑_info: '你使用杀时可令目标角色选择弃置一张牌失去一点体力将武将牌翻面',
						威骑: '威骑',
						威骑_info: '每名角色回合限一次,你使用杀时可令一名角色弃置全部基本牌或锦囊牌,全体友方角色增加其所弃置牌数的护甲,你摸两张牌',
						卫妙: '卫妙',
						卫妙_info: '每名角色回合限一次,你使用杀时可移动场上一张牌,并可视为对一名其他角色使用一张杀',
						青勇: '青勇',
						青勇_info: '回合结束时,你可令全体友方角色依次摸一张牌观看并获得其一张牌',
						尖矛: '尖矛',
						尖矛2: '尖矛',
						尖矛_info: '你使用杀时,可摸3张牌展示一张牌,若此牌为基本牌你获得该牌点数的护甲,每名角色回合限一次,一名角色获得牌结束后,你可令一名角色摸一张牌,并视为对所有敌方角色使用一张杀',
						领益: '领益',
						领益_info: '每回合限一次,你使用杀时,对其使用一张随机花色与点数的乐不思蜀的印卡,你回复一点体力摸该印卡点数的牌',
						辎运: '辎运',
						辎运2: '辎运',
						辎运_info: '你的回合开始时可令全体友方角色可获得两张木牛流马,一名友方角色出牌阶段开始时,你可弃置一张木牛流马令其摸3张牌',
						血斧: '血斧',
						血斧_info: '每名角色回合限一次,你使用牌结束后,可弃置一名角色随机1到3张牌,令此牌额外结算1到3次',
						隶央: '隶央',
						隶央_info: '你使用杀时,可选择一名角色,如果你的手牌数大于其,你摸其手牌数的牌全场友方角色获得等量护甲,如果你的手牌数小于其,你令其弃置你手牌数的牌全场友方角色获得等量护甲',
						校侦: '校侦',
						校侦_info: '出牌阶段限一次,你可观看并选择获得一名其他角色一张牌,并可令一名角色增加一点体力上限摸该牌点数的牌',
						黎民: '黎民',
						黎民_info: '锁定技,摸牌阶段结束后,你摸摸牌阶段摸到的红色牌数的牌',
						林尉: '林尉',
						林尉_info: '每名角色回合限一次,一名角色使用杀时你可令之无效,令目标角色与你摸随机2到4张牌',
						林骑: '林骑',
						林骑_info: '出牌阶段限一次,你可弃置一张牌令你攻击范围无限,若弃置的牌为黑色牌则可选择一名其他角色弃置该角色一张牌视为你对其使用一张杀,并获得一张锦囊牌',
						峪壮: '峪壮',
						峪壮_info: '每名角色回合限2次,一名角色使用杀时,你可令其摸其体力上限数的牌,你摸等量牌其增加一点体力上限回复一点体力,目标角色失去一点体力上限',
						阳安贯甲: '阳安贯甲',
						阳安贯甲_info: '你使用杀时或受到伤害时,你可摸随机2到4张牌获得一名角色一张牌,令一名角色摸等量牌获得等量护甲',
						栈卫: '栈卫',
						栈卫_info: '每名角色回合限两次,一名角色受到伤害时或你回合开始时,你可视为对全体敌方角色使用随机2到4张杀使用等量万箭齐发,若为受到伤害时有50%概率防止之',
						司典: '司典',
						司典_info: '回合开始时,你可选择一名角色,其须弃置一张锦囊牌(无则不弃),你进行一次判定,将牌堆内该牌点数数量的锦囊牌进行任意分配',
						精武: '精武',
						精武_info: '你使用杀时,可令目标角色弃置一张非基本牌,失去一点体力,你进行一次判定,若为非基本牌,此杀不可被闪避.所有友方角色获得一点护甲',
						武卫: '武卫',
						武卫_info: '一名角色使用杀时,你可展示牌堆顶的三张牌,获得其中的基本牌、决斗和武器牌,其余的牌置入弃牌堆,若你获得的牌数大于你没有获得的牌数,此杀无效对使用该杀的角色造成两点伤害',
						长戟: '长戟',
						长戟2: '长戟',
						长戟_info: '你使用杀时,可令目标角色弃置一张非基本牌,对其造成一点伤害,每名角色回合限一次,一名敌方角色受到伤害后,你对全体敌方角色各造成一点伤害',
						长水弓侍: '长水弓侍',
						长水弓侍_info: '出牌阶段你可摸4张牌,选择手牌数一半(向下取整)交给一名角色,视为对所有敌方角色使用以此法交出的手牌数的万箭齐发',
						骁击: '骁击',
						骁击1: '骁击',
						骁击_info: '你使用杀时,你可对一名其他角色造成一点伤害,并获得其一张牌,并令其跳过下个摸牌阶段',
						丹扈: '丹扈',
						丹扈2: '丹扈',
						丹扈_info: '每名角色回合限一次,你使用杀时可摸两张牌选择弃置一张牌,若如此做,直到其回合结束后其无法使用或打出与你弃置的牌颜色相同的牌,该角色回合结束后视为对其使用一张杀',
						寿统: '寿统',
						寿统_info: '你使用杀前和你成为一名角色使用杀目标前,你可令全体友方角色摸你体力上限数的牌交给你一张牌或令全体敌方角色摸1张牌交给你体力上限数的牌',
						拓荒: '拓荒',
						拓荒_info: '每名角色回合限2次,你使用杀时获得一张顺手牵羊,你使用顺手牵羊时获得一张杀',
						辎断: '辎断',
						辎断_info: '每回合限一次,你使用杀时,对其使用一张随机花色与点数的兵粮寸断的印卡,你回复一点体力摸该印卡点数的牌',
						羽扈: '羽扈',
						羽扈_info: '每回合限一次,一名角色使用杀时,你可摸一张牌该角色摸一张牌,令此杀不计入次数限制,若此杀为红色你再摸两张牌该角色摸两张牌.之后可令一名角色摸其体力上限数的牌',
						长戈: '长戈',
						长戈_info: '回合开始时你可选择一名角色,令其失去一点体力获得其一张牌视为对其使用一张杀',
						战鹰: '战鹰',
						战鹰_info: '每回合限一次,一名角色获得牌后,你观看并获得其一张牌,并观看牌堆顶的5张牌以任意顺序置于牌堆顶或牌堆底',
						东州长枪: '东州长枪',
						东州长枪_info: '你使用杀时,可令所有敌方角色弃置手牌区和装备区内的装备牌并失去一点体力',
						盾甲阵: '盾甲阵',
						盾甲阵_info: '回合结束后或一名角色翻面后,你可令所有友方角色获得一张无懈可击和一张金蝉脱壳,你获得一点护甲',
						蹄践: '蹄践',
						蹄践_info: '你使用杀时可令目标角色弃置其全部基本牌,若其弃置了牌你摸等量的牌,其失去一点体力',
						孙氏家众: '孙氏家众',
						孙氏家众_info: '每回合限一次,一名友方角色使用杀时或受到伤害后,你可令一名角色与你摸一张牌回复一点体力',
						孙氏家丁: '孙氏家丁',
						孙氏家丁_info: '每回合限一次,一名友方角色使用杀时或受到伤害后,你可令一名角色与你获得一张杀回复一点体力',
						武烈同袍: '武烈同袍',
						武烈同袍_info: '你回合开始时,你可令所有友方角色随机装备一件牌堆有的装备,增加一点护甲',
						魏使节: '魏使节',
						魏使节_info: '每名角色回合限2次,回合开始时或你使用杀时,你摸1+与你体力值相同的角色数张牌,你观看并获得一名角色一张牌,你展示一张牌,所有友方角色获得一张与之牌名花色点数均相同的牌,增加一点护甲',
						长弓手: '长弓手',
						长弓手2: '长弓手',
						长弓手_info: '你点数大于6的杀无距离限制,你使用杀时可改为视为对所有敌方角色使用1+该杀点数张万箭齐发,你使用万箭齐发造成伤害后可令受伤角色弃置手牌和装备区内全部的装备牌',
						利槊阵: '利槊阵',
						利槊阵_info: '每名角色回合限一次,一名角色使用杀时,你可令目标角色弃置手牌区和装备区内所有的装备牌,你摸2+等量张牌,对目标角色造成一点伤害,所有友方角色摸其伤害标签牌数的牌,增加其伤害标签牌数的护甲',
						疫病: '疫病',
						疫病_info: '回合开始时或你受到伤害后,可令一名角色弃置点数不大于随机8到12的牌,其失去你已损失体力值的体力,并令其距离为1的角色获得疫病效果,获得疫病效果的角色在其回合开始进行判定,其须弃置大于判定牌点数的全部牌,并进入混乱状态,并令其与其距离为1的角色失去一点体力',
						疫病2: '疫病',
						水军: '水军',
						水军_info: '受到杀的伤害或火焰伤害时,可令之60%概率防止之改为摸等量牌',
						盗劫: '盗劫',
						盗劫_info: '一名角色对你使用杀时或你造成伤害时,你可获得其手牌区和装备区各一张牌',
						中坚: '中坚',
						中坚_info: '一名角色使用牌指定目标为友方角色时,若该牌为黑色伤害标签牌:该角色0.5概率受到你的一点伤害、0.6概率使该牌无效、0.7概率目标角色增加一点护甲,若不为黑色伤害标签牌:目标角色0.5概率获得一张无懈可击、0.6概率获得一张闪、0.7概率增加一点体力上限',
						武勇: '武勇',
						武勇_info: '一名角色使用杀时,你可展示牌堆顶的5张牌,获得其中的基本牌、决斗和武器牌,其余的牌置入弃牌堆,全体友方角色获得一张决斗,若你获得的牌数大于你没有获得的牌数,目标角色回复一点体力对使用该杀的角色造成两点伤害',
						奋骑: '奋骑',
						奋骑_info: '<span  style="color:blue">回合开始时,你可进行一次判定,你从牌堆+弃牌堆获得判定牌点数的牌名各不相同的伤害标签牌,你的奋标记改为判定牌点数,你与其他角色计算距离-奋标记数直到回合结束后</span>',
						德矢: '德矢',
						德矢_info: '<span  style="color:green">你使用杀时,可获得目标角色一张牌,并可将一张牌置于武将牌上称为德矢,视为对所有敌方角色使用一张万箭齐发,有角色濒死时你可移除一张德矢视为其使用一张酒视为对所有敌方角色使用一张万箭齐发</span>',
						林探: '林探',
						林探_info: '<span  style="color:ForestGreen">你回合开始时或一名角色使用乐不思蜀或顺手牵羊时,可摸你非伤害标签牌数的牌,对一名角色使用随机花色与点数的印卡的顺手牵羊与乐不思蜀</span>',
						郡参: '郡参',
						郡参_info: '每回合限一次,你使用锦囊牌时,可展示牌堆顶的3+你手牌中锦囊牌数的牌,获得其中红色牌,所有友方角色摸你获得牌数的牌',
						卜梦: '卜梦',
						卜梦_info: '出牌阶段限两次,你可进行一次判定,若判定牌为♣️️️所有友方角色获得一点护甲,你弃置所有敌方角色各两张牌;若为♠️️️对所有敌方角色造成两点雷电伤害;若为♦️️️所有友方角色增加一点体力上限所有敌方角色受到你手牌中锦囊数的火焰伤害;若为♥️️️所有友方角色回复一点体力摸两张牌',
						挖渠: '挖渠',
						挖渠2: '挖渠',
						挖渠_info: '回合结束阶段,你选择一名角色摸其技能数的牌,其随机1到2个技能失效直到其下个回合结束后',
						北国寒风: '北国寒风',
						北国寒风_info: '回合开始时,你可选择1到x名角色,各弃置x张牌失去x点体力,(x为1到2的随机数)',
						逐刺: '逐刺',
						逐刺_info: '每回合限一次,一名角色使用杀结算结束后,你可获得一名角色一张牌并可视为对该角色使用随机一到二张杀,若其未翻面将其武将牌翻面',
						飞镝: '飞镝',
						飞镝_info: '锁定技,准备阶段,你令所有敌方角色失去2点体力,使用了一张【万箭齐发】,你回复一点体力摸三张牌',
						监丞: '监丞',
						监丞mashu: '马术',
						监丞mashu_info: '锁定技,你计算与其他角色的距离-1',
						监丞_info: '<span style="color:blue">每名角色回合限一次,你使用杀时或回合结束后,你选择一名角色观看并获得其一张牌,弃置其牌数减一的牌,你摸三张牌,选择一到三名角色令其获得马术直到其下个回合结束</span>',
						冀城长刀: '冀城长刀',
						冀城长刀_info: '每名角色回合限2次,你使用杀时可令一名角色随机执行一到两次以下效果:其失去一点体力,你摸其已损失体力值的牌',
						保驾精骑: '保驾精骑',
						保驾精骑mashu: '保驾精骑',
						保驾精骑_info: '一名角色使用杀时,若目标角色为友方角色,你获得一张杀,你获得其一张牌,视为你对其使用决斗,目标角色回复一点体力获得一张闪,你计算与其他角色的距离-2',
						幽州盾甲: '幽州盾甲',
						幽州盾甲_info: '回合结束时,你可选择1到3张牌交给一名角色,其增加x点护甲你摸3x张牌,随机一位敌方角色须选择弃置3x张牌(x为你给出去的牌数)',
						擎盾: '擎盾',
						擎盾_info: '回合结束阶段,你可令全体友方角色装备仁王盾,你摸2张牌,进行一次判定,若判定结果为红色全体友方角色获得一点护甲',
						轻盾骑: '轻盾骑',
						轻盾骑2: '轻盾骑',
						轻盾骑_info: '出牌阶段限一次,你可弃置一张牌令你攻击范围无限,若弃置的牌不为伤害标签牌,则可选择一名其他角色弃置该角色一张牌,令其弃置一张闪失去一点体力,你进行一次判定,若判定结果为红色全体友方角色获得一点护甲,否则全体友方角色获得一张闪',
						中军翼: '中军翼',
						中军翼_info: '你使用杀时,可令目标角色弃置一张非基本牌,受到一点伤害,你进行一次判定,若为非基本牌,此杀不可被闪避,所有友方角色获得1+其已损失体力值张闪,否则其翻面',
						留义: '留义',
						留义_info: '一名角色使用杀时,若目标角色为友方角色,所有友方角色摸两张牌,此杀0.66概率无效,该角色须弃置一张手牌,且视为你对其使用一张杀',
						重甲盾: '重甲盾',
						重甲盾_info: '一名角色使用伤害标签牌指定友方角色为目标时,可令该牌0.6概率无效,0.7概率目标角色获得一点护甲,若该牌为黑色所有友方角色获得一张相同牌名花色点数的印卡,若为红色所有友方角色增加一点体力上限回复一点体力',
						都农: '都农',
						都农_info: '出牌阶段限3次,你可选择一名角色令其弃置x张牌,所有友方角色摸x张牌,(x为1到3的随机数)',
						备骑: '备骑',
						备骑_info: '每名角色回合限一次,你的回合开始时或一名角色使用杀时,你可观看一名角色手牌并选择获得其一张牌,并令一名角色获得1到3张你的手牌复制牌',
						重车: '重车',
						重车_info: '回合结束时,你可选择一名角色,摸1+与该角色距离的牌,与之交换位置,若你的护甲数少于2倍友方角色数,增加2倍友方角色数的护甲,0.5概率额外执行一个回合',
						鸣锋: '鸣锋',
						鸣锋2: '鸣锋',
						鸣锋_info: '你使用杀时,可选择一名角色令其失去一点体力你摸两张牌,友方角色濒死时可令之有0.5概率回复体力至一点',
						铜墙铁壁: '铜墙铁壁',
						铜墙铁壁2: '铜墙铁壁',
						铜墙铁壁_info: '回合结束阶段你可获得全体友方角色数二次方的护甲,友方角色成为牌的目标时若你的护甲值大于0,你可令你的护甲数-1,取消该牌对其的结算',
						屯积: '屯积',
						屯积2: '屯积',
						屯积_info: '你于回合外失去牌后,获得等量的顺手牵羊,你使用顺手牵羊结束后可视为对一名角色使用一张杀',
						坚义: '坚义',
						坚义_info: '每名角色回合限一次,一名角色使用伤害标签牌指定友方角色为目标时,你可令全体友方角色摸一张牌可使用一张牌,且0.66概率此牌对其无效.对使用牌的角色造成随机1到2点伤害',
						灵迅: '灵迅',
						灵迅_info: '一名角色使用杀指定友方角色为目标时,若其有牌你可获得其一张牌,若不为杀,此杀对其无效',
						屯令: '屯令',
						屯令_info: '你于回合外失去牌后可视为对一名角色使用顺手牵羊,你须选择展示一张牌,若不为♥️️️,全体友方角色获得一张杀',
						门童: '门童',
						门童_info: '一名角色使用杀时,你可弃置一张牌,所有友方角色获得一张相同的印卡,进行一次判定,若为红色此杀无效',
						护堰: '护堰',
						护堰_info: '友方角色成为杀的指定目标时,可令使用杀的角色于当前回非锁定技失效,视为你对其使用一张弃甲曳兵和杀,被杀的角色进行一个额外的回合',
						阳安刚枪: '阳安刚枪',
						阳安刚枪2: '阳安刚枪',
						阳安刚枪_info: '你使用杀时可令全体友方角色摸3张牌,获得一张弃甲曳兵,你获得全部敌方角色各一张牌,每名角色回合限2次,友方角色成为伤害标签牌的目标时,可取消之改为视为由你对使用牌的角色使用同名的随机花色与点数的牌',
						先登死士: '先登死士',
						先登死士_info: '一名角色的回合开始时,你可令其跳过该回合,观看并弃置其一张牌,视为你对其使用一张杀和万箭齐发,你获得一点护甲,你进行一次额外的回合',
						新野百骑: '新野百骑',
						新野百骑2: '新野百骑',
						新野百骑_info: '你使用杀时,可弃置目标角色一张牌,若为黑色视为对其使用一张铁索连环与知己知彼,若为红色对其造成一点火焰伤害;回合结束时,你可获得你黑色牌数的伤害标签牌(当前牌堆内有的且不从牌堆内获得),获得你红色牌数的非伤害标签牌(当前牌堆内有的且不从牌堆内获得)',
						夜叉行: '夜叉行',
						夜叉行2: '夜叉行',
						夜叉行_info: '每名角色回合限一次,一名角色使用杀时,你可观看并获得目标角色一张牌,若该牌为黑色牌你获得一张伤害标签牌(当前牌堆内有的且不从牌堆内获得),若该牌为红色牌你获得一张非伤害标签牌(当前牌堆内有的且不从牌堆内获得).你使用非伤害标签牌时可对一名角色造成一点伤害',
						永昌守军: '永昌守军',
						永昌守军2: '永昌守军',
						永昌守军_info: '回合开始时,你可令所有友方角色观看牌堆顶的一张牌,该角色选择一项:1.使用此牌(无距离限制);2.将此牌当普通【杀】使用.每回合限两次,每回合限2次,一名友方角色成为杀或南蛮入侵的目标时,目标角色获得一点护甲,使用牌的角色选择弃置两张牌',
						正方枪领: '正方枪领',
						正方枪领2: '正方枪领',
						正方枪领_info: '回合开始时你可令全体友方角色依次观看牌堆顶的两张牌获得其中的基本牌.你使用杀时可获得目标角色一张手牌,令目标角色下个摸牌阶段摸牌数减一',
						临渊荡寇: '临渊荡寇',
						临渊荡寇2: '临渊荡寇',
						临渊荡寇3: '临渊荡寇',
						临渊荡寇_info: '你使用杀时可令任意两名距离2以内的角色摸其手牌中闪的数量的牌,其选择弃置一张闪,受到你的一点伤害.你受到伤害时,你可与一名角色交换位置,将与该角色距离张牌置于你的武将牌上,防止此伤害,回合开始时你可弃置武将牌上的全部牌获得一名角色等量牌',
						剑阁破阵: '剑阁破阵',
						剑阁破阵2: '剑阁破阵',
						剑阁破阵_info: '回合开始时,可令所有敌方角色弃置一张杀,视为你对所有敌方角色使用一张杀,友方角色成为使用杀的目标时,可令使用杀的角色弃置两张伤害标签牌,若其中包含黑色牌则此杀无效,若其中包含红色牌目标角色摸两张牌',
						骁志哀兵: '骁志哀兵',
						骁志哀兵_info: '每名角色回合限一次,回合开始时或你使用杀时,你选择1到2名角色,弃置其一张牌,其0.5概率失去一点体力,视为你对所有敌方角色使用一张杀',
						崖顶奋迅: '崖顶奋迅',
						崖顶奋迅_info: '一名角色出牌阶段开始时,你可摸一张牌交给该角色一张牌,并可视为对你选择的一到两名角色使用一张杀,当前角色获得两张闪',
						炙龟占甲: '炙龟占甲',
						炙龟占甲_info: '回合开始时可随机执行一项:一、对所有敌方角色造成一点火焰伤害,你增加一点护甲.二、所有敌方角色选择弃置一张杀,受到一点你的火焰伤害,你增加两点护甲.三、所有敌方角色选择弃置两张杀或闪的牌受到一点你的火焰伤害,你增加三点护甲.四、所有敌方角色弃置3张杀或闪或桃,受到一点你的火焰伤害,你增加四点护甲',
						征西先锋: '征西先锋',
						征西先锋_info: '你的回合开始时或你使用杀时,你可选择一名角色,你摸你体力上限的牌,视为对其使用等量张杀,你执行一个额外的出牌阶段,本回合使用杀数+你的体力上限值,与其他角色计算距离-你的体力上限值',
						庲降扰敌: '庲降扰敌',
						庲降扰敌2: '庲降扰敌',
						庲降扰敌3: '庲降扰敌',
						庲降扰敌_info: '回合开始时可令所有友方角色获得一张基本牌,每回合限一次,你使用杀时可令所有友方角色均视为对所有敌方角色依次使用一张杀,全体敌方角色弃置一张闪并弃置一张基本牌;每回合限两次,友方角色成为杀的目标时可防止之改为全部敌方角色受到一点伤害',
						蜀郡信使: '蜀郡信使',
						蜀郡信使_info: '每回合限2次,回合开始时或你使用杀时,你可选择一名角色观看并获得其一张牌,并可选择一名角色令其摸两张牌,所有敌方角色失去一点体力',
						德信卫士: '德信卫士',
						德信卫士2: '德信卫士',
						德信卫士_info: '出牌阶段限一次,你可选择一到两名角色令其摸两张牌获得两张杀,依次令你选择的角色视为对全部敌方角色使用一张杀,一名角色获得牌后若其中包含杀,你可令一名角色获得一点护甲',
						令官: '令官',
						令官2: '令官',
						令官_info: '你使用杀时可令目标角色失去一点体力,失去一点体力上限,翻面随机执行一项.回合开始时你可选择一项:令全体友方角色获得一张指定类型的牌(牌堆内有,不从牌堆内获得),全体友方角色摸两张牌你移动场上一张牌',
						讨逆: '讨逆',
						讨逆2: '讨逆',
						讨逆3: '讨逆',
						讨逆_info: '回合开始时你可依次获得所有敌方角色各x张牌,依次弃置所有敌方角色各x张牌,对所有敌方角色使用x次杀,(x为1到2的随机数).每回合限一次,你使用杀时,可摸全体友方角色数的牌令你本回合手牌上限加全体友方角色数',
						新野民兵: '新野民兵',
						新野民兵_info: '出牌阶段开始时,所有友方角色获得一张杀你从杀闪酒桃中随机获得一张,若获得的牌为黑色,视为你对所有敌方角色使用一张杀',
						越部狼骑: '越部狼骑',
						越部狼骑_info: '回合开始时,你可视为对全部敌方角色使用2到4张杀,并获得等量伤害标签牌(游戏外获得牌堆内包含的)',
						黑雕: '黑雕',
						黑雕2: '黑雕',
						黑雕_info: '回合开始时,你可令所有友方角色获得一张无中生有,视为对所有敌方角色使用杀或过河拆桥的随机一张,一名角色受到伤害时,若你有无中生有可弃置一张无中生有防止此伤害改为对所有敌方角色造成一点伤害',
						山野莽夫: '山野莽夫',
						山野莽夫_info: '一名角色使用杀时,你可获得其手牌中伤害标签牌的复制,使用杀的角色从随机受到你的1到2点伤害;随机失去1到2点体力随机执行一项,你从随机回复1到2点体力;摸1到2张牌随机执行一项',
						艳阳: '艳阳',
						艳阳_info: '一名有红色牌的角色回合结束后,你可摸其红色牌数的牌对其造成等量火焰伤害',
						垄督: '垄督',
						垄督_info: '回合开始时你可令全体友方角色获得两张诱敌深入,一名角色使用伤害标签牌指定友方角色为目标时,你可弃置一张诱敌深入,令该牌对其无效,你获得两张五谷丰登,对所有敌方角色造成一点火焰伤害,一名角色使用五谷丰登时,你可令此牌对其中任意名目标角色无效',
						垄督2: '垄督',
						垄督2_info: '一名角色使用伤害标签牌指定友方角色为目标时,你可弃置一张诱敌深入,令该牌对其无效,你获得两张五谷丰登,对所有敌方角色造成一点火焰伤害',
						垄督3: '垄督',
						垄督3_info: '一名角色使用五谷丰登时,你可令此牌对其中任意名目标角色无效',
						东州辎重骑: '东州辎重骑',
						东州辎重骑2: '东州辎重骑',
						东州辎重骑2_info: '一名角色出牌阶段开始时,你可弃置一张增兵减灶,令其摸3张牌,你增加所弃置牌点数的骑标记,你计算与其他角色距离始终减骑标记数,其也获得该效果,这些效果持续到该回合结束后',
						东州辎重骑3: '东州辎重骑',
						东州辎重骑3_info: '一名角色使用增兵减灶指定目标时你可令所有友方角色也成为目标',
						东州辎重骑_info: '回合开始时你可获得两张增兵减灶.一名角色出牌阶段开始时,你可弃置一张增兵减灶,令其摸3张牌,你增加所弃置牌点数的骑标记,你计算与其他角色距离始终减骑标记数,其也获得该效果,这些效果持续到该回合结束后.一名角色使用增兵减灶指定目标时你可令所有友方角色也成为目标',
						东州义军: '东州义军',
						东州义军_info: '一名友方角色回合开始时,令x等于1到2的随机数,该角色增加x点体力上限,回复x点体力,以下效果执行x次:你展示牌堆顶的一张牌获得之,当前回合角色获得该牌点数的非伤害标签牌(游戏外获得当前牌堆和弃牌堆所包含的)',
						新野县役: '新野县役',
						新野县役_info: '回合开始时或你受到伤害时,你可令全体友方角色展示牌堆顶的两张牌并获得之,若其中颜色相同其增加一点护甲,视为其对随机一名有手牌的敌方角色使用偷梁换柱,否则随机一名敌方角色受到一点火焰伤害',
						尖刀佑卫: '尖刀佑卫',
						尖刀佑卫_info: '每名角色回合限一次,你使用杀或一名敌方角色使用杀时,你可令全体友方角色依次展示牌堆顶的两张牌并获得之,若其中没有♥️️️花色的牌其获得一点护甲,你可选择一名角色,获得其一张牌,令其失去一点体力',
						火祭: '火祭',
						火祭_info: '回合开始时,你可对一名角色造成1到1加其红色牌数的火焰伤害,并令其弃置等量的牌',
						祭雷: '祭雷',
						祭雷_info: '你使用杀或♠️️牌后,你可选择一名角色对其造成随机1到2加其♠️️️牌数的伤害,摸等量牌回复等量体力',
						宫宿: '宫宿',
						宫宿_info: '当一名友方角色成为伤害标签牌的目标时,你可令其摸3张牌,若其黑色牌多于红色牌其获得一点护甲,否则你回复一点体力获得一张闪',
						暗器: '暗器',
						暗器_info: '出牌阶段限一次,你可弃置一名角色一张牌,令其失去一点体力,若此牌为武器牌则在对其造成该牌攻击范围的伤害',
						刺探: '刺探',
						刺探_info: '摸牌阶段观看一名角色手牌,获得每种花色的牌各一张,获得一种花色的全部牌,摸牌阶段额外摸你以此法获得牌数的牌',
						暗伏: '暗伏',
						暗伏_info: '你成为伤害标签牌的目标时,可展示一名角色全部手牌,若其中伤害标签牌数多于非伤害标签牌数,此牌对你无效改为视为对其使用一张同名牌,否则视为你对其使用一张杀',
						侍女: '侍女',
						侍女_info: '一名角色回合开始时,你可选择一名角色令其获得一张桃或酒中的随机一张,并可令一名角色选择弃置一张随机红色或黑色牌',
						长槊: '长槊',
						长槊_info: '你使用杀时,可摸两张牌,弃置目标角色一张牌,若弃置了牌,为黑色你获得一张杀和兵粮寸断,为红色你获得一张闪和桃、酒、过河拆桥中的随机一张',
						四眼毒泉: '四眼毒泉',
						四眼毒泉_info: '一名敌方角色的回合结束时,你可令其选择弃置两张红色牌,失去一点体力,选择弃置一张黑色牌,你回复一点体力摸两张牌增加一点护甲',
						益矛: '益矛',
						益矛_info: '你使用杀时可弃置目标角色一张牌,若弃置了牌,为红色对其使用一张随机花色与点数的乐不思蜀的印卡,令此【杀】不计入出牌阶段的使用次数并摸两张牌;为黑色你获得一张伤害标签牌,增加一点护甲',
						陵义: '陵义',
						陵义2: '陵义',
						陵义_info: '<span style="color:pink">你的回合开始时,你可令所有友方角色摸一张牌,你增加一点体力上限,回复一点体力,摸两张牌.</span><span style="color:red">你失去牌后,其中每有一张伤害标签牌你从游戏外获得两张非伤害标签牌,其中每有一张非伤害标签牌你从游戏外获得两张伤害标签牌.</span>',
						荣帻: '荣帻',
						荣帻2: '荣帻',
						荣帻_info: '你使用杀时可令一名角色摸其体力上限的牌,并回复一点体力获得你全部非基本牌的复制;锁定技,你受到伤害后随机弃置一张基本牌伤害来源随机弃置两张牌',
						桂枪: '桂枪',
						桂枪2: '桂枪',
						桂枪_info: '<span style="color:pink">每回合限2次,你使用杀时,你可以选择一名角色,其获得一张【杀】和一张【闪】.你对所有敌方角色造成1点伤害.</span><span style="color:red">你失去牌后,其中每有一张基本牌你从游戏外获得杀和闪或桃和酒的随机一项,其中每有一张非基本牌你从游戏外获得两张非基本牌.</span>',
						长镖: '长镖',
						长镖2: '长镖',
						长镖_info: '<span style="color:pink">出牌阶段限一次,你可从游戏外获得你的伤害标签牌的复制.你可选择一名角色,该角色弃置等量牌,你对其使用等量的【杀】.</span><span style="color:red">回合结束时,你可以依次获得所有敌方角色各一张牌,如果该牌点数大于6,你对其造成1点伤害,重复此过程直到对所有敌方角色执行一次完毕.</span>',
						劲旅: '劲旅',
						劲旅2: '劲旅',
						劲旅_info: '<span style="color: #8A2BE2">你的回合开始时,你摸2张牌.所有友方角色依次从游戏外获得你的基本牌和伤害标签的复制,</span><span style="color: #FF0000">若其以此法获得的牌颜色数多于1,随机一个敌方角色失去1点体力.</span><span style="color: #8B0000">你使用【杀】时,可以选择一名角色,令其连续使用2+伤害标签的牌数量次的【无中生有】,</span><span style="color: #FF1493">其回复1点体力并从牌堆中获得1张【酒】.</span>',
						蜀樵: '蜀樵',
						蜀樵_info: '一名角色回合结束时,你可令其获得两张杀,你获得两张杀,若其手牌中基本牌数与你相同,其与你依次回复一点体力摸两张牌',
						妙婢: '妙婢',
						妙婢_info: '一名角色回合结束时,你可令其获得两张普通锦囊牌,你获得两张两张普通锦囊牌,若其手牌中锦囊牌数与你相同,其与你依次回复一点体力摸两张牌',
						新野壮士: '新野壮士',
						新野壮士2: '新野壮士',
						新野壮士_info: '回合开始阶段,你可选择一名角色视为对其使用一张火攻,你使用火攻时可观看并弃置目标角色一张红色牌对其造成一点火焰伤害',
						先民红巾: '先民红巾',
						先民红巾_info: '一名角色回合开始时,你可选择1到2张牌,该角色获得你选择牌的复制,你回复一点体力视为对一名角色使用一张杀',
						太行山匪: '太行山匪',
						太行山匪_info: '你使用杀时,可获得目标角色手牌和装备区牌各随机1到2张,并视为对其使用等量的决斗',
						轻斧: '轻斧',
						轻斧_info: '每名角色回合限两次,一名角色使用伤害标签牌时,你可弃置目标角色一张牌你摸一张牌对其造成一点伤害',
						庐步: '庐步',
						庐步2: '庐步',
						庐步_info: '一名角色使用杀使友方角色成为杀的目标时,你可令目标角色获得一点护甲并摸两张牌.若使用【杀】的角色仍存活,目标角色获得该角色一张牌.当你使用【杀】时,可观看并弃置目标角色两张牌并摸一张牌.你展示牌堆顶的你手牌数张牌,随机获得其中的全部黑色或红色牌,并将剩下的牌放回牌堆顶',
						器领: '器领',
						器领2: '器领',
						器领_info: '出牌阶段限一次你可令所有友方角色装备两张武器牌,你对所有敌方角色使用两张杀,一名角色使用武器牌时你可令其额外装备之',
						路刑: '路刑',
						路刑1: '路刑',
						路刑2: '路刑',
						路刑_info: '你使用杀时可摸两张牌,令目标角色失去一点体力,令其下个回合手牌上限减一,一名角色回合开始时,若其手牌上限与体力值不相等其须弃置两张牌失去一点体力',
						塞门刀车: '塞门刀车',
						塞门刀车2: '塞门刀车',
						塞门刀车1: '塞门刀车',
						塞门刀车_info: '回合开始时你获得12张杀,弃牌阶段开始时,你每有一张杀手牌上限加一,你造成伤害时可令你造成伤害加你手牌中杀的张数,你摸你手牌中杀的数量数牌',
						东吴战舰: '东吴战舰',
						东吴战舰_info: '<span style="color: #2E8B57">回合开始时,你可摸1加你伤害标签牌数的牌,并视为对所有敌方角色使用等量的万箭齐发</span>',
						枭姬战船: '枭姬战船',
						枭姬战船_info: '<span style="color: #2E8B57">回合开始时,你可令全体友方角色各摸两张牌回复一点体力,获得场上体力值最大角色数张伤害标签牌</span>',
						丹射: '丹射',
						丹射_info: '<span style="color: red">锁定技</span>,<span style="color: gold">你造成伤害后</span>你摸1张牌,你使用"万箭齐发"造成的伤害基数永久<span style="color: gold">+1,令受伤角色失去一点体力.你使用杀后,可增加体力值最小角色数的护甲,选择一项军法对所有敌方角色执行,视为对可成为万箭齐发目标的敌方角色使用3张万箭齐发</span>',
						丹射2: '丹射',
						冲车: '冲车',
						冲车_info: '回合开始时,你可选择一名角色.若如此做,令其随机弃置2至4张牌.随机执行以下效果之一:1. 摸三张牌;2. 回复两点体力;3. 对选择的角色造成两点伤害;4.获得两张伤害标签牌,获得选择的角色两张牌',
						毒枪: '毒枪',
						毒枪2: '毒枪',
						毒枪_info: '<span style="color: #fff; background-color: #368d61;">你使用杀时,可从游戏外获得目标角色随机两张牌的复制,并令其获得两张毒,其失去一点体力.锁定技,防止你因触发毒的效果而流失的体力,改为回复一点体力</span>',
						探子: '探子',
						探子_info: '回合开始时,你可获得偷梁换柱、过河拆桥、顺手牵羊随机一张.一名角色对你使用杀时,你可令之对你无效改为进入潜行状态直到下个回合开始时',
						冶首: '冶首',
						冶首_info: '一名角色回合开始时你可摸一张牌,可获得一名角色一张牌,若该牌点数大于你的牌数视为当前角色对一名角色使用一张杀和决斗,否则你再获得其一张牌,视为对所有敌方角色使用南蛮入侵',
						纵燃: '纵燃',
						纵燃2: '纵燃',
						纵燃3: '纵燃',
						纵燃_info: '回合开始时,你获得两张火攻.你使用火攻后可对一名角色造成一到两点火焰伤害.一名角色展示牌后你可令其弃置随机一张牌对其造成一点火焰伤害',
						傲刀佣兵: '傲刀佣兵',
						傲刀佣兵2: '傲刀佣兵',
						傲刀佣兵_info: '你使用杀时,可令目标角色弃置一张杀,你摸你全部牌包含的花色数的牌.你使用杀造成伤害时,若受伤角色没有杀此伤害加一,并有0.5概率额外执行一个回合',
						树大招风: '树大招风',
						树大招风2: '树大招风',
						树大招风_info: '结束阶段,你可摸随机2到4张牌,并进行一次判定,若判定牌点数∈[6-以此法摸牌数,6+以此法摸牌数],所有敌方角色依次随机弃置你以此法摸牌数张牌,你可令杀万箭决斗50%概率对你无效',
						女佣兵: '女佣兵',
						女佣兵2: '女佣兵',
						女佣兵_info: '你使用杀时,可令目标角色弃置一张基本牌,你摸你全部牌包含的类型数的牌.你使用杀造成伤害时,若受伤角色牌的类型数少于你,你可令此伤害加一,并有0.5概率回复一点体力',
						库守: '库守',
						库守_info: '一名角色使用杀时你可弃置一张红色牌(无则不弃)全体友方摸两张牌,对所有敌方角色造成一点火焰伤害 ,目标角色有0.5+0.1*你装备牌数的概率增加一点护甲并获得一张闪,有0.3+0.1*你装备牌数的概率令此杀对其无效',
						平原义军: '平原义军',
						平原义军_info: '回合开始时,你摸两张牌并增加一点护甲.若你随机一张牌的牌名首字母序列数大于你的红色牌的数,你可以令所有友方角色依次获得一张【杀】.否则,你令所有敌方角色选择弃置一张黑色牌',
						鬼狂: '鬼狂',
						鬼狂_info: '<span style="transform: skewX(-10deg);text-shadow: 2px 2px 0px #00FF00;">每名角色回合限一次,一名角色使用普通锦囊牌结束后,其选择弃置两张闪,并失去一点体力,你有0.5概率从杀和过河拆桥中随机获得一张,并回复一点体力</span>',
						骅袭: '骅袭',
						骅袭_info: '回合开始时,你使用【骅骝】,并获得所有攻击范围大于1的角色一张牌',
						西凉巨轮: '西凉巨轮',
						西凉巨轮_info: '回合开始时,你可选择一名角色,其非锁定技于本回合失效,其弃置全部非基本牌,视为对其所有友方角色使用一张杀',
						战船: '战船',
						战船_info: '回合开始时,你可获得1+你黑色牌数张伤害标签牌,观看并获得一名角色一张牌,所有友方角色获得一张杀和水淹七军的随机牌',
						血新: '血新',
						血新_info: '你使用杀时,可进行一次判定,若判定牌花色为♠️️,你回复一点体力若你护甲数小于2你增加一点护甲;若不为♠️️对目标角色造成一点伤害,其弃置一张黑色牌',
						平戎弓领: '戎弓',
						平戎弓领_info: '你可跳过摸牌阶段或出牌阶段令一名角色获得一张万箭齐发,若你装备区有装备牌,你可跳过弃牌阶段令一名角色获得一张万箭齐发',
						戎弓2: '戎弓',
						戎弓2_info: '回合结束时,你可以视为对所有敌方角色使用你本回合跳过的阶段数张万箭齐发(回合开始与结束除外)',
						流星矢: '流星矢',
						流星矢2: '流星矢',
						流星矢_info: '回合开始时,你可获得两张万箭齐发,你使用万箭齐发造成伤害后,有0.66概率对受伤角色造成一点火焰伤害.视为其对其友方角色使用一张火烧连营',
						竹矛: '竹矛',
						竹矛_info: '每名角色回合限2次,你使用伤害标签牌后有0.66概率,令所有敌方角色依次弃置一张黑色牌对其造成5-其全部牌花色数点神圣伤害,你摸3-随机一名敌方角色全部牌颜色数张牌',
						铁骨战车: '铁骨战车',
						铁骨战车2: '铁骨战车',
						铁骨战车3: '铁骨战车',
						铁骨战车_info: '一名角色回合结束时,若其手牌数小于其体力上限或你手牌数小于你体力上限,其与你各摸两张牌;若其有黑色牌你可令其弃置两张牌,你增加一点护甲;若其有锦囊牌,你获得其随机一张牌',
						龙川: '龙川',
						龙川_info: '每名角色回合限一次,你使用锦囊牌或黑色牌或点数大于等于6的牌后,可回复一点体力令所有友方角色获得一张过河拆桥,观看并获得随机一名敌方角色的一张牌,若此牌为黑色视为其使用一张毒,为红色你摸两张牌',
						桓骑: '桓骑',
						桓骑2: '桓骑',
						桓骑_info: '你造成伤害后,可视为对受伤角色使用过河拆桥和偷梁换柱中的随机一张,你使用杀有50%概率额外选择一名角色为目标',
						火弩: '火弩',
						火弩_info: '出牌阶段开始时,你可跳过出牌阶段改为展示牌堆顶的6张牌获得之,视为对所有敌方角色使用你伤害标签牌数张火烧连营',
						流沙: '流沙',
						流沙_info: '回合开始时,你可选择一名角色进行一次判定若判定结果为♣️️或伤害标签牌,其弃置两张牌对其造成2点伤害,否则其失去一点体力',
						佞宦: '佞宦',
						佞宦_info: '每名角色回合限一次,当你造成伤害后或一名角色弃置牌后,若其有基本牌,其将随机一张基本牌交给你,若其有牌其随机弃置一张牌否则其失去一点体力',
						浮船: '浮船',
						浮船_info: '<span style="color: #66CD00">回合开始时,你可展示一张牌令所有有牌的角色依次展示一张牌,若其为友方角色,其或你展示的牌中有基本牌你与其摸两张牌,有锦囊牌你与其回复一点体力,有装备牌你与其增加一点护甲;若其为敌方角色,其或你展示的牌中有基本牌其弃置两张牌,有锦囊牌其失去一点一点体力,有装备牌你视为对其使用一张杀</span>',
						汉宗: '汉宗',
						汉宗2: '汉宗',
						汉宗_info: '一名角色友方回合开始时,你可令其获得杀、闪、桃、酒一项中的一张,一名友方角色成为杀的目标时,你可令其摸两张牌若其有基本牌使用杀的角色须弃置两张牌,若其有杀或点数不大于9的牌,此杀对其无效',
						西羌战车: '西羌战车',
						西羌战车2: '西羌战车',
						西羌战车3: '西羌战车',
						西羌战车_info: '你使用伤害标签牌后计算与其他角色距离-3,摸你距离1以内角色数张牌选择其中一名角色视为对其使用随机弃甲曳兵、釜底抽薪中一项的一张牌,对其造成一点伤害.你成为杀的目标时若你有红色牌,可令此杀对你无效改为摸两张牌并进入/解除连环状态', //脱离
						古铜镇尺: '古铜镇尺',
						古铜镇尺_info: '出牌阶段限一次,你可选择一名角色,摸其基本牌和点数不大于9牌数的牌,你获得一张其随机一张牌的复制牌,其随机弃置一张牌,进行一次判定,若判定牌为基本牌或点数不大于9,视为你对其使用一张诱敌深入',
						蛮塞: '蛮塞',
						蛮塞2: '蛮塞',
						蛮塞_info: '摸牌阶段后,你可弃置全部牌,获得1+弃置牌数张杀,本回合可额外使用四张杀与其他角色计算距离-4,造成伤害后获得受伤角色一张牌',
						羌锋: '羌锋',
						羌锋2: '羌锋',
						羌锋_info: '回合开始时,若你有黑色牌,你可摸3+你伤害标签牌数张牌,执行一个额外的出牌阶段.出牌阶段限一次,你可弃置一张杀或黑色牌令一名角色失去一点体力',
						楼船: '楼船',
						楼船2: '楼船',
						楼船_info: '一名友方角色使用杀时你可令其摸一张牌,对目标角色造成一点伤害,你可以令其摸一张牌,终止一切结算,结束当前回合.一名友方角色成为杀的目标时有0.66概率,你可令此杀对其无效改为其对使用杀的角色使用一张万箭齐发,其获得一点护甲',
						水旗: '水旗',
						水旗_info: '出牌阶段限一次,你可选择一名有牌的角色,令其展示手牌,若其有红色牌或闪,你获得两张闪,若其有黑色牌,视为你对其使用一张诱敌深入',
						舰船: '舰船',
						舰船_info: '一名角色使用牌后,<span style="color:green">若其为友方角色,</span><span style="color: #66CD00">并且所使用牌为黑色牌:</span>你获得两张随机伤害标签牌,随机一名敌方角色须选择弃置两张牌;<span style="color:green">若其为友方角色,</span><span style="color: #66CD00">并且所使用的牌为红色牌:</span>你获得两张随机非伤害标签牌;<span style="color:green">若其为敌方角色,</span><span style="color: #66CD00">并且所使用牌为黑色牌:</span>你摸一张牌,并视为你对其使用一张【万箭齐发】;<span style="color:green">若其为敌方角色,</span><span style="color: #66CD00">并且所使用的牌为红色牌:</span>你获得其一张牌,并回复一点体力',
						乌桓弯刀: '乌桓弯刀',
						乌桓弯刀2: '乌桓弯刀',
						乌桓弯刀_info: '你使用杀时,可选择以下效果之一:1. 令目标进入混乱状态,且其使用的【杀】需额外弃置一张杀才能生效,直到其下次回合开始时;2. 令目标弃置两张手牌,摸等同于其已损失体力值的牌.若其黑色牌数少于你,你回复一点体力',
						铜甲士阵: '铜甲士阵',
						铜甲士阵2: '铜甲士阵',
						铜甲士阵_info: '每名角色回合限一次,一名角色使用黑色牌指定目标后,你可以令该牌的目标角色和你各获得1+各自装备牌数点护甲.一名角色受到伤害后,若该伤害值为0,你可对伤害来源造成1点伤害,若其伤害标签牌数少于你则改为2点,并选择一名角色,其与你获得一张随机伤害标签牌',
						吴贾: '吴贾',
						吴贾_info: '出牌阶段限一次,你可以选择一名角色, 目标角色摸两张牌,其获得你一张牌.如果你的黑色牌的数量少于目标角色的黑色牌的数量,你获得一张【杀】和一张【酒】.你获得目标角色一张牌,如果你红色牌的数量少于目标角色的红色牌的数量,你获得一张【闪】和一张【桃】',
						攻城战虎: '攻城战虎',
						攻城战虎_info: '回合开始时,你可摸敌方角色+蜀势力角色数张牌,视为对所有敌方角色使用一张弃甲曳兵,所有敌方角色依次弃置一张牌,并依次受到你的一点火焰伤害,进行一次判定,视为你对体力最小敌方一名随机角色使用你不大于该判定牌点数的牌数张不计入次数限制的杀',
						西逆: '西逆',
						西逆_info: '你使用杀结算结束后,可对一名角色造成1～2点伤害,并可令一名角色摸(1～2)*3张牌',
						绸匪: '绸匪',
						绸匪_info: '回合开始时,你进行一次判定且至多判定3次,若判定牌为伤害标签牌,你可以再次发动【绸匪】.若判定牌不为伤害牌或你不能再次发动【绸匪】,你获得所有判定成功的牌,回复1点体力,并获得两张闪.若X大于0,你可以选择一名角色,获得其X张牌(X为你判定成功的次数)',
						祈猎: '祈猎',
						祈猎_info: '出牌阶段限两次,你进行三次判定,并获得这些牌,若其中黑色牌数更多,你可选择一名角色,其随机执行一个负面效果,你获得一张基本牌,否则你可选择一名角色其随机执行一个正面效果,你获得一张随机普通锦囊牌',
						婪骑: '婪骑',
						婪骑_info: '你计算与其他角色距离始终-2,回合开始时,你可视为对所有距离不大于1的敌方角色使用一张顺手牵羊和一张杀,若你手牌中黑色牌数更多你增加一点护甲,否则你获得一张酒',
						蜀枪: '蜀枪',
						蜀枪_info: '每名角色回合限一次,你失去牌后可选择一名角色其弃置随机一个颜色随机一张牌,你视为对其使用一张杀',
						吴弓: '吴弓',
						吴弓_info: '每名角色回合限一次,你失去牌后可选择一名角色其弃置随机一个类型随机一张牌,你视为对其使用一张万箭齐发',
						胡骑: '胡骑',
						胡骑_info: '你使用牌指定目标时,可进行一次判定,若判定牌为红色,你摸两张牌获得马术直到当前回合结束后,否则目标角色弃置两张牌你获得一张杀和一张釜底抽薪',
						漠骑: '漠骑',
						漠骑_info: '出牌阶段限一次,若你有牌,你可弃置一张牌对一名角色造成一点伤害,若弃置的牌为杀此伤害加一',
						漠猎: '漠猎',
						漠猎_info: '每回合限2次,你使用伤害标签牌结束后,你摸1+场上群势力角色数张牌,进行一次判定:若判定牌的颜色为红色,你获得技能【马术】,对该牌目标角色造成等同于当前场上与你距离为1群势力角色数量+1的伤害;若判定牌的颜色不为红色,你获得两张釜底抽薪',
						矫轻: '矫轻',
						矫轻_info: '一名角色使用杀或决斗指定你为目标时,若你有闪,你可令该牌对你无效改为摸两张牌回复一点体力',
						如燕: '如燕',
						如燕_info: '回合开始时你可选择一名角色,获得1+其杀和闪的牌数个燕标记,摸等量牌,获得等量的闪,增加等量手牌上限直到回合结束后,并可令一名角色摸等量牌获得等量的闪,回合结束后你移除全部燕标记',
						黑杠: '黑杠',
						黑杠_info: '一名角色对你使用杀后或你受到伤害后,你可摸所有有黑色牌的敌方角色数张牌,获得一张杀获得一张决斗,令所有敌方角色失去一点体力',
						鬼钺: '鬼钺',
						鬼钺_info: '你使用【杀】后,你可以选择一名角色.按以下顺序执行:1. 你获得目标角色装备区中基本牌的数量作为护甲,并摸取相同数量的牌.2. 目标角色选择并弃置两张牌,对其造成1+弃牌前【桃】或【酒】的数量点伤害.3. 你可以选择一名角色,令其获得等同于你以此法获得护甲数量的闪',
						洪石: '洪石',
						洪石4: '洪石',
						洪石_info: '回合开始时,你可选择1到4名角色,令其进入潜行状态直到下轮开始,一名其他角色回合结束时,若其于本回合没有使用过指定其他角色为目标的牌,你可令其失去一点体力你摸两张牌,对其使用一张随机花色与点数的草木皆兵的印卡',
						黑蟜: '黑蟜',
						黑蟜_info: '一名角色使用锦囊牌后,你可从游戏外获得一张该牌牌名的牌,可选择一名角色视为对其使用一张杀,其获得一张毒,下次一名角色使用黑色牌时你增加一点护甲',
						兽械: '兽械',
						兽械_info: '回合开始时你可令所有敌方角色其下次使用杀时或摸牌时无效改为弃置两张牌,对其造成一点随机雷电或火焰伤害,其弃置装备区全部牌.你摸4+弃牌堆装备牌数张牌',
						雪狼: '雪狼',
						雪狼_info: '回合开始时你可选择一名角色,令其弃置2～4张牌,然若其手牌数为0,你对其造成两点伤害,其获得两张毒',
						率义: '率义',
						率义_info: '你使用杀后可选择一名角色令其交给你全部杀和伤害锦囊牌,令一名角色获得等量护甲',
						毒泉: '毒泉',
						毒泉_info: '一名角色回合结束时,你可令其︎♣️️︎♠️️♦️️︎︎♥️️︎牌各弃置一张,其失去4-其弃置牌数体力',
						护屯: '护屯',
						护屯_info: '回合开始时你可选择一名角色,令其下次成为杀的目标时无效之改为获得一张顺手牵羊',
						骨水: '骨水',
						骨水2: '骨水',
						骨水_info: '回合开始时你可选择一名角色令其摸2～6张牌,你濒死时可摸2～6张牌若你有装备牌你回复一点体力',
						年迈武卒: '年迈武卒',
						年迈武卒_info: '出牌阶段限一次,若你有牌你可弃置至少一张牌,令一名角色弃置等量+你损失体力值数张杀弃置一张牌,你视为对其使用一张杀',
						毒箭: '毒箭',
						毒箭_info: '你使用杀后,可进行一次判定,若判定牌为基本牌记x为2,否则记x为1,你视为对所有敌方角色使用一张万箭齐发,你可令一名角色失去一点体力其获得x张毒',
						材官: '材官',
						材官_info: '你受到伤害时,若你手牌数小于场上吴势力角色数,你可令此伤害减一,对伤害来源造成一点伤害',
						岷勇: '岷勇',
						岷勇_info: '一名其他角色回合结束时,若其未于本回合使用过杀,你可视为对其使用一张杀和过河拆桥随机中的一张',
						雀鹰: '雀鹰',
						雀鹰_info: '一名角色使用杀或决斗指定目标时,可令一名角色增加一点护甲,可视为对一名角色使用一张顺手牵羊,可使用一张杀',
						红巾步兵: '红巾步兵',
						红巾步兵_info: '回合开始时,你可以摸与场上血量小于你的角色数目加上场上体力上限小于你的角色数目相等的牌.依次弃置每名敌方角色一张牌.若你的体力值大于该角色的体力值并且所弃置的牌为红色,对该角色造成一点伤害.若你的体力值不大于该角色的体力值并且所弃置的牌为黑色,则你可以对该角色使用一张【杀】',
						大鹏: '大鹏',
						大鹏_info: '出牌阶段限一次,你可选择1到4名角色令其减少一点体力上限,你摸体力上限小于3角色数张牌',
						御盾: '御盾',
						御盾_info: '回合开始时,你可选择一名角色,令其与你各摸一张牌,各装备一张金盾',
						文帝重装步兵: '文帝重装步兵',
						文帝重装步兵2: '文帝重装步兵',
						文帝重装步兵_info: '一名角色使用【杀】或【决斗】指定目标时,你可以选择一名角色.该角色获得一点护甲并摸其体力上限数量的牌.你可以选择一名角色观看并获得其一张牌,若选择的角色拥有更多的红色牌,则其失去1点体力上限本回合受到的伤害+1;若选择的角色黑色牌与红色牌数相等或拥有更多的黑色牌,则其翻面并弃置一张基本牌,你摸取4减去其手牌中基本牌的数量的牌',
						寻玄: '寻玄',
						寻玄1: '寻玄',
						寻玄2: '寻玄',
						寻玄_info: '回合开始时,你可获得一名角色一张牌,其随机获得以下一个效果:一名角色对其杀或决斗的结束后受到一点伤害;下次受到伤害时选择弃置一张牌此伤害+1',
						府兵: '府兵',
						府兵_info: '每回合限一次,当一名角色使用伤害标签牌指定目标时.目标角色获得1点护甲,并摸一张牌.目标角色获得使用者随机两张红色牌的复制. 目标角色对使用者使用一张【火攻】使用者弃置一张黑色牌',
						御诏: '御诏',
						御诏_info: '出牌阶段限一次,你可以选择一名角色,你获得其随机两张牌的复制,其摸一张牌.你选择一名角色,令第一次所选角色对其使用一张【釜底抽薪】,对其使用一张【杀】',
						燕悍: '燕悍',
						燕悍_info: '当你使用【杀】后,若你有牌你可以展示一张牌,令该角色弃置该牌点数/6的余数张牌.你可以摸一张牌并增加一点体力上限,你可以选择一名其他角色,令其摸你黑色牌数张牌并获得等量的【闪】',
						绝侍: '绝侍',
						绝侍_info: '你使用杀后,可令弃置目标角色两张牌,若其中有黑色牌,目标角色获得两张毒',
						助戈: '助戈',
						助戈_info: '回合开始时,你可选择一名角色,你摸两张牌其与你装备【利戈*♠️️️6】',
						铜阵: '铜阵',
						铜阵2: '铜阵',
						铜阵_info: '一名角色使用杀时,你可弃置两张牌你摸两张牌,若你有点数小于9的牌,可令此牌无效,令一名角色获得2～3点护甲,一名有护甲的角色回合开始时,你可移除其全部护甲,视为对一名角色使用等量张杀',
						蛮冶: '蛮冶',
						蛮冶2: '蛮冶',
						蛮冶_info: '一名角色弃置牌后,你可视为对所有敌方角色使用一张南蛮入侵,你弃牌阶段开始时可令一名角色弃置你体力值与手牌数差值的绝对值(至少为2)张牌',
						三乱: '三乱',
						三乱2: '三乱',
						三乱_info: '每名角色回合限一次,你回合开始时或一名角色使用伤害标签牌后,你可以令你攻击范围+3直到该回合结束,并摸3张牌可使用3张牌',
						//三乱_info:'每名角色回合限一次,你回合开始时或一名角色使用伤害标签牌后,你可以令你攻击范围+3直到该回合结束,依次使用牌堆顶的3张牌,若无法使用则改为获得',
						探戟夜莺: '探戟夜莺',
						探戟夜莺2: '探戟夜莺',
						探戟夜莺_info: '准备阶段,你可以选择一名角色.若如此做,你摸1+其与你距离张牌.目标角色攻击范围为0直到其回合结束后.你随机执行一项:对目标角色造成1+你武器牌数点伤害,视为对目标角色使用一张杀.你有0.66概率进入<潜行>状态直到你的下个准备阶段',
						娑队: '娑队',
						娑队2: '娑队',
						娑队_info: '回合开始时,你获得两张伤害标签牌和一张万刃齐发,并获得1～3枚娑标记,一名角色使用牌指定目标时,若你有娑标记,你可移除一枚娑标记,令此牌对该目标角色无效,视为你对该牌使用者使用一张万刃齐发',
						灵弓: '灵弓',
						灵弓2: '灵弓',
						灵弓3: '灵弓',
						灵弓_info: '你使用杀可令此杀0.5概率无法被相应,0.6概率伤害+1,0.7概率摸两张牌令其下个回合手牌上限-2,0.8概率视为对其使用一张万箭齐发',
						控弦: '控弦',
						控弦2: '控弦',
						控弦_info: '回合开始时,你可以选择一名角色,并弃置该角色两张牌.视为对该角色使用一张【万箭齐发】.每名角色回合限5次,一名角色使用【杀】时,你可以令此杀对其无效,并视为对其使用一张【万箭齐发】.你获得一张【万箭齐发】',
						合突: '合突',
						合突_info: '摸牌阶段结束后,你可获得1到两名角色各一张牌,摸4-其牌类型数,你选择一个伤害标签牌名,视为你对这些角色使用你牌类型数张该牌',
						煆营: '煆营',
						煆营2: '煆营',
						煆营_info: '回合开始时你随机获得1～3张万箭齐发,一名角色使用了万箭齐发时,可令该牌对任意名角色无效,你摸取消角色数张牌',
						大漠弯刀: '大漠弯刀',
						大漠弯刀_info: '一名角色获得牌后,若其中有黑色牌,你可以弃置该角色两张牌.若其中有装备牌,该角色受到1点伤害并视为你对其使用一张杀;否则从该角色受到1点伤害、视为对其使用一张杀随机执行一项',
						将绸: '将绸',
						将绸_info: '<span style="font-size: 24px; color: red; text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.5), 1px -1px 0 rgba(0, 0, 0, 0.5), -1px 1px 0 rgba(0, 0, 0, 0.5), 1px 1px 0 rgba(0, 0, 0, 0.5); -webkit-text-fill-color: transparent; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: red;">每名角色回合限2次,一名角色使用杀时,你可展示牌堆顶的两张牌获得之,并可令一名角色摸两张牌</span>',
						隶青: '隶青',
						隶青_info: '回合开始时,你可选择一名角色,你摸两张牌其与你装备【隶青铜盾*♣️️️6】',
						司甲: '司甲',
						司甲_info: '每回合限一次,你使用杀时,可令一名角色摸1～3张牌,其增加你基本牌牌名数+其基本牌牌名数点护甲',
						甲营: '甲营',
						甲营_info: '其他角色计算与你的距离+你的护甲数,回合开始时,你可增加随机1～3点护甲,选择一名角色,其获得一张杀和一张弃甲曳兵,其获得此技能直到其回合结束后',
						子明亲军: '子明亲军',
						子明亲军2: '子明亲军',
						子明亲军_info: '<span style="font-size: 24px; background:linear-gradient(to right, lime, white, lime);background-clip: text;-webkit-background-clip: text;color: transparent;">你使用杀时,可弃置目标角色两张牌,若所弃置牌花色均不同或弃置了一张或没有弃置牌,你可执行一个额外的回合.令你的手牌上限+2+场上吴势力角色数(此效果不叠加)</span>',
						锐骑: '锐骑',
						锐骑_info: `<span style="
            font-size: 60px;
            color: white;
            text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.5), 1px -1px 0 rgba(0, 0, 0, 0.5), -1px 1px 0 rgba(0, 0, 0, 0.5), 1px 1px 0 rgba(0, 0, 0, 0.5);
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: white;
            font-weight: 4px;">
            锁定技,己方角色摸牌阶段额外摸1+其距离不大于1角色体力值之和张牌.</span>`,
						蹄踏: '蹄踏',
						蹄踏_info: `<span style="
            font-size: 60px;
            color: white;
            text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.5), 1px -1px 0 rgba(0, 0, 0, 0.5), -1px 1px 0 rgba(0, 0, 0, 0.5), 1px 1px 0 rgba(0, 0, 0, 0.5);
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: white;
            font-weight: 4px;">你使用杀指定目标时,弃置其1～3张牌,若其中包含基本牌你获得一张草木皆兵并装备【标枪*♠️️️7】,包含锦囊牌其失去一点体力,包含装备牌可额外使用一张杀.</span>`,
						凉标: '凉标',
						凉标_info: `<span style="
            font-size: 60px;
            color: white;
            text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.5), 1px -1px 0 rgba(0, 0, 0, 0.5), -1px 1px 0 rgba(0, 0, 0, 0.5), 1px 1px 0 rgba(0, 0, 0, 0.5);
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: white;
            font-weight: 4px;">回合开始时,你可选择一名角色,你摸两张牌其与你装备【标枪*♠️️️7】.</span>`,
						屯薄: '屯薄',
						屯薄_info: '回合开始时,你获得一张顺手牵羊、闪,可令一名角色获得一张顺手牵羊、闪,你展示一张牌,若不为♥️️️牌,视为其使用一张以逸待劳并回复一点体力',
						火刃: '火刃',
						火刃_info: '<span style="font-size:60px;color:transparent;text-shadow: 0 0 5px #FF0200, 0 0 10px #727272;">回合结束时,你可以选择一名角色,弃置该角色两张牌.如果弃置的牌花色各不相同或只弃置了一张或没有弃置,你对其造成一点火焰伤害,并获得一张火攻和两张<伤害>标签牌,摸两张牌并重开一个回合</span>',
						甘侍: '甘侍',
						甘侍_info: '每名角色回合限一次,一名角色使用杀或你回合开始时,你可令一名角色弃置全部牌,并可令一名角色回复一点体力获得一张闪',
						冰火锥刺: '冰火锥刺',
						冰火锥刺_info: '回合开始时,你可弃置一名角色2×(随机1～3)张牌,并受到随机1～3点火焰伤害',
						火拳: '火拳',
						火拳2: '火拳',
						火拳_info: '你受到的普通伤害60%概率转变为火焰伤害,锁定技,始终防止你受到的火焰伤害改为对伤害来源使用等量张火杀',
						拾火: '拾火',
						拾火_info: '<span style="font-size: 25px;color: transparent;background-clip:text;text-shadow: 0 0 3px rgba(255, 0, 0, 1), 0 0 6px rgba(255, 0, 0, 1);">🔥回合开始时,你可选择一名角色,你摸两张牌其与你装备【火把*♥️️️6】🔥</span>',
						十八般兵器: '十八般兵器',
						十八般兵器_info: '<h1 style="text-shadow:6px 2px 2px #333;color:deeppink">回合开始前,1. 显示全屏特效:<十八般兵器,样样精通>.2.在所有十八般兵器中,选择四个,你获得这些兵器技能直到下个回合开始前</h1>',
						刀: '刀',
						刀2: '刀',
						刀_info: '每名角色回合限一次,你使用【杀】造成伤害时,若目标角色♠️️️牌数比你少,伤害＋1+你♠️️牌数(攻击范围3,即攻击范围+2)',
						枪: '枪',
						枪2: '枪',
						枪_info: '每名角色回合限3次,你使用黑色【杀】后,获得一张【杀】和一张弃甲曳兵(攻击范围3,即攻击范围+2)',
						剑: '剑',
						剑2: '剑',
						剑_info: '每回合限一次,你使用杀指定目标时,可令其弃置随机2～2+你♥️️️牌数张牌(攻击范围2,即攻击范围+1)',
						戟: '戟',
						戟2: '戟',
						戟_info: '每回合限一次,你造成伤害时,你可摸你攻击范围与受到伤害角色攻击范围之和张牌',
						斧: '斧',
						斧2: '斧',
						斧_info: '每回合限一次,你使用杀时,你可弃置目标角色随机1～3张牌.若弃置的牌中有伤害标签牌,对该角色造成一点伤害',
						钺: '钺',
						钺2: '钺',
						钺_info: '每名角色回合限2次,你使用杀时,你可弃置目标角色一张牌.如果弃置的牌点数不大于9或颜色为黑色,你摸三张牌(攻击范围3,即攻击范围+2)',
						钩: '钩',
						钩2: '钩',
						钩_info: '回合开始时,你可获得一名角色一张牌,若获得的牌点数不大于9,视为对其使用一张杀(攻击范围3,即攻击范围+2)',
						叉: '叉',
						叉2: '叉',
						叉_info: '你使用杀时,50%的概率令目标角色随机弃置一张牌并翻面(攻击范围3,即攻击范围+2)',
						鞭: '鞭',
						鞭2: '鞭',
						鞭_info: '回合开始时,你可令一名角色交给你一张杀,对其造成一点伤害(攻击范围3,即攻击范围+2)',
						锏: '锏',
						锏2: '锏',
						锏3: '锏',
						锏_info: '回合开始时,你可弃置一名角色一张牌,若弃置的牌为伤害标签牌,你本回合造成的伤害+1(攻击范围3,即攻击范围+2)',
						锤: '锤',
						锤2: '锤',
						锤3: '锤',
						锤_info: '你使用杀时,有50%的概率使目标角色非锁定技失效直到该回合结束后并弃置所有装备区的牌,并有60%的概率令你下次使用杀造成的伤害+1(攻击范围2,即攻击范围+1)',
						镗: '镗',
						镗2: '镗',
						镗3: '镗',
						镗_info: '回合开始时,你可令一名角色,不能使用或打出红色牌直到该回合结束后,并对其造成一点伤害(攻击范围3,即攻击范围+2)',
						槊: '槊',
						槊2: '槊',
						槊_info: '使用杀时可弃置目标角色一张牌若为黑色,视为对其使用一张弃甲曳兵(攻击范围3,即攻击范围+2)',
						抓: '抓',
						抓2: '抓',
						抓_info: '回合开始时,你可以摸两张牌.如果你有牌,你可以展示所有的手牌,选择一名角色,视为对其使用你黑色牌数张杀(攻击范围2,即攻击范围+1)',
						拐: '拐',
						拐2: '拐',
						拐_info: '每名角色回合限一次,一名角色使用杀指定目标时,你可令此杀对目标角色无效,选择一名角色.对其造成一点伤害(攻击范围3,即攻击范围+2)',
						镰: '镰',
						镰2: '镰',
						镰_info: '每名角色回合限3次,一名角色失去牌后,你可以进行一次判定.若判定结果为黑色,令其弃置一张红色牌并受到一点伤害(攻击范围3,即攻击范围+2)',
						弓: '弓',
						弓2: '弓',
						弓_info: '你使用【杀】造成伤害时,可令其随机弃置装备区里的一张牌,若为黑色再弃置其一张牌(攻击范围3,即攻击范围+2)',
						镖: '镖',
						镖2: '镖',
						镖_info: '你使用杀时可令目标角色失去随机1～1+你黑色牌数点体力(攻击范围1)',
						棍: '棍',
						棍2: '棍',
						棍_info: '回合开始时,你可以进行一次判定.若判定结果点数不大于9,你可以对一名角色造成随机2~4点伤害(攻击范围3,即攻击范围+2)',
						雄狮: '雄狮',
						雄狮_info: '<h1 style="text-shadow:6px 2px 2px #333;color:gold">回合开始时你可选择1到4名角色,令其弃置全部装备牌再随机弃置两张牌,受到你伤害标签牌数点伤害.</h1>',
						陵劫: '陵劫',
						陵劫_info: '每回合限一次,你失去牌后若你手牌数小于体力值你获得一名角色区域内各一张牌,对其造成一点火焰伤害',
						红拂: '红拂',
						红拂_info: '回合开始时,你可令一名角色获得一张灵芝,摸3张牌,并可令一名角色弃置一张武器牌,弃置一张杀',
						幻影: '幻影',
						幻影_info: '每名角色回合限2次,<span style="color: #c3ad80;font-size:3em">一</span><span style="color: #600e74;font-size:3.5em">名</span><span style="color: #eade40;font-size:2.5em">角</span><span style="color: #5b9cde;font-size:3.5em">色</span><span style="color: #fe7802;font-size:2em">使</span><span style="color: #9c9a13;font-size:2.5em">用</span><span style="color: #3d90e6;font-size:3em">杀</span><span style="color: #c62200;font-size:2em">指</span><span style="color: #fdaa5;font-size:1.5em">定</span><span style="color: #126006;font-size:3em">目</span><span style="color: #283a45;font-size:1.5em">标</span><span style="color: #f1796b;font-size:1.5em">时</span><span style="color: #1a3d24;font-size:0.5em">,</span><span style="color: #57ef8a;font-size:3em">你</span><span style="color: #763a8d;font-size:2.5em">可</span><span style="color: #292145;font-size:1em">令</span><span style="color: #6bb88c;font-size:1em">此</span><span style="color: #bd0d41;font-size:1.5em">杀</span><span style="color: #d285fe;font-size:3em">0</span><span style="color: #267d46;font-size:1.5em">.</span><span style="color: #69fc4e;font-size:3em">6</span><span style="color: #ac35a0;font-size:3em">概</span><span style="color: #eb9763;font-size:3em">率</span>对目标角色<span style="color: #5310aa;font-size:1.5em">无</span><span style="color: #d015fd;font-size:1em">效</span><span style="color: #fc7806;font-size:0.5em">,</span><span style="color: #33722b;font-size:2em">你</span><span style="color: #4dfb88;font-size:2.5em">获</span><span style="color: #b245e8;font-size:3.5em">得</span><span style="color: #adf4e3;font-size:2em">随</span><span style="color: #e7c02d;font-size:2em">机</span><span style="color: #46c26b;font-size:1.5em">草</span><span style="color: #e5ae75;font-size:2.5em">药</span><span style="color: #383822;font-size:1.5em">、</span><span style="color: #81cf05;font-size:2.5em">毒</span><span style="color: #9c3e75;font-size:1em">桃</span><span style="color: #3d90a7;font-size:3.5em">中</span><span style="color: #ee8fcc;font-size:1.5em">的</span><span style="color: #83529;font-size:2.5em">一</span><span style="color: #8f0f68;font-size:2em">张</span><span style="color: #7191be;font-size:1em">,</span><span style="color: #c2a9f9;font-size:3em">并</span><span style="color: #9e9703;font-size:2em">可</span><span style="color: #8bed76;font-size:0.5em">令</span><span style="color: #6d294f;font-size:3em">一</span><span style="color: #ab2d28;font-size:1.5em">名</span><span style="color: #55579b;font-size:1.5em">角</span><span style="color: #a493c1;font-size:0.5em">色</span><span style="color: #7e8721;font-size:3em">获</span><span style="color: #4d7823;font-size:1.5em">得</span><span style="color: #42a02a;font-size:3em">一</span><span style="color: #8095a8;font-size:2em">张</span><span style="color: #f93a78;font-size:1em">闪</span><span style="color: #652b4d;font-size:3.5em">摸</span><span style="color: #841c5e;font-size:2.5em">两</span><span style="color: #c5a173;font-size:1.5em">张</span><span style="color: #d1209c;font-size:1.5em">牌</span>',
						侯布: '侯布',
						侯布_info: '<h1 style="color: red;letter-spacing: 0;text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135">一名角色使用【杀】指定目标时,你可令此杀0.6概率对目标角色无效,进行一次判定.若判定牌为红色,则你获得一张【蟠桃】;否则,你获得一张【八卦符咒】.</h1>',
						宦斩: '宦斩',
						宦斩_info: '回合开始时,你可令一名角色弃置一张基本牌,你获得一张烈酒',
						议监: '议监',
						议监_info: '<span style="color:red; font-size:60px; font-weight:600; text-shadow:1px 0px yellow, 1px 2px yellow, 3px 1px yellow, 2px 3px yellow, 4px 2px yellow, 4px 4px yellow, 5px 3px yellow, 5px 5px yellow, 7px 4px yellow, 6px 6px yellow, 8px 5px yellow, 7px 7px yellow, 9px 6px yellow, 9px 8px yellow, 11px 7px yellow;">回合开始时你摸两张牌获得一张烈酒和一张冰酒,可选择一个伤害标签牌视为对一名角色使用两次</span>',
						击侍: '击侍',
						击侍_info: '回合开始时,你获得1+你♠️️️牌数张雷杀,对一名角色造成你雷杀数点雷电伤害',
						弓威: '弓威',
						弓威_info: '一名角色使用出了锦囊牌时,0.6概率可令此牌无效,弃置其一张牌,0.3概率弃置其全部牌.最后视为对其使用一张万箭齐发',
						孙氏弓卫: '<h1 style="text-shadow:6px 2px 2px #333;color:green">孙氏弓卫</h1>',
						孙氏弓卫_info: '<h1 style="text-shadow:6px 2px 2px #333;color:green">出牌阶段限一次,你可选择一名角色,摸其黑色牌数张牌,视为对其使用你黑色牌数张万箭齐发,所有友方角色增加一点护甲</h1>',
						汉戍: '汉戍',
						汉戍_info: '每名角色回合限3次,一名角色使用出了牌或打出牌后,你可令此牌无效,令一名角色与你各摸两张牌增加一点护甲获得一张随机食物牌',
						颜卫: '颜卫',
						颜卫2: '颜卫',
						颜卫_info: '出牌阶段限一次,你可令你本回合限三次,使用不大于9或视为牌摸两张牌,令所有有牌的角色各展示一张牌,你获得这些牌的复制',
						圣疗: '圣疗',
						圣疗_info: '出牌阶段限一次,你可令一名角色与你各摸各自红色牌数张牌回复一点体力,获得一张灵芝',
						惧火: '惧火',
						惧火_info: '锁定技,你受到的火焰伤害+2',
						雪驱: '雪驱',
						雪驱_info: '锁定技,防止你受到的冰属性伤害改为回复2点体力',
						堆雪: '堆雪',
						堆雪_info: '锁定技,你的闪始终视为冰杀',
						苍梧: '苍梧',
						苍梧_info: '<h1 style="text-shadow:6px 2px 2px #333;color:red;font-family: huaguangguyunsong;">回合开始时,你可观看并获得一名角色两张牌,并可令一名角色执行3-选择观看牌角色伤害标签牌数次军令</h1>',
					},
					skill: {
						gongbing: {
							mod: {
								targetInRange(card, player, target, now) {
									var type = get.type(card);
									if (type == 'trick' || type == 'delay' || type == 'basic') return true;
								},
							},
						},
						spm_kuitao: {
							group: ['spm_kuitao1', 'spm_kuitao2'],
						},
						spm_manyi1: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							content() {
								trigger.num++;
							},
						},
						spm_manyi2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card, 'basic') == 'basic';
							},
							content() {
								trigger.num++;
							},
						},
						spm_manyi3: {
							group: ['spm_manyi1', 'spm_manyi2'],
						},
						spm_kuitao2: {
							mod: {
								globalTo(from, to, distance) {
									return distance + 1;
								},
							},
						},
						spm_kuitao1: {
							mod: {
								maxHandcard(player, num) {
									return num - 1;
								},
							},
						},
						zhuxiao: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'discardAfter',
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'equip' && get.position(i) == 'd') {
											return true;
										}
									}
								return false;
							},
							frequent: 'check',
							check(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'equip' && get.position(i) == 'd') {
											if (i.name == 'du') return false;
										}
									}
								return true;
							},
							content() {
								'step 0';
								if (trigger.delay == false) game.delay();
								('step 1');
								var cards = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									if (get.type(trigger.cards[i]) == 'equip' && get.position(trigger.cards[i]) == 'd') {
										cards.push(trigger.cards[i]);
									}
								}
								if (cards.length) {
									player.gain(cards, 'log');
									player.$gain2(cards);
								}
							},
						},
						弄潮: {
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							audio: 'ext:士兵扩展包/audio:2',
							filter(event, player) {
								if (event.num <= 1) return false;
								if (event.nature != 'fire') return false;
								if (event.source && event.source.hasSkillTag('unequip', false, event.card)) return false;
								return true;
							},
							_priority: -10,
							content() {
								trigger.num--;
							},
						},
						liannu: {
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							filter(event, player) {
								if (player.getEquip(1)) return false;
								return true;
							},
							content() {
								player.addTempSkill('zhuge_skill', { player: 'phaseAfter' });
							},
						},
						liannu_all: {
							group: ['liannu', 'liannu_lost'],
						},
						liannu_lost: {
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								if (player.getEquip(1)) return true;
							},
							content() {
								player.removeSkill('zhuge_skill');
							},
						},
						feidao: {
							audio: 'ext:士兵扩展包/audio:2',
							srlose: true,
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							selectTarget: [1, 4],
							filterTarget(card, player, target) {
								return player != target;
							},
							filterCard: true,
							check(card) {
								return 6 - get.value(card);
							},
							discard: false,
							content() {
								'step 0';
								var cardx = ui.create.card();
								cardx.classList.add('infohidden');
								cardx.classList.add('infoflip');
								player.$throw(cardx);
								cards[0].fix();
								ui.cardPile.insertBefore(cards[0], ui.cardPile.firstChild);
								target.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
									switch (Math.floor(Math.random() * 6)) {
										case 0:
											return 'heart2';
										case 1:
										case 4:
										case 5:
											return 'diamond2';
										case 2:
											return 'club2';
										case 3:
											return 'spade2';
									}
								});
								('step 1');
								game.log(target, '选择了' + get.translation(result.control));
								event.choice = result.control;
								target.popup(event.choice);
								event.cards = get.cards();
								target.gain(event.cards, 'draw');
								('step 2');
								if (event.cards.suit + '2' != event.choice) target.damage(2, 'poison');
								player.recover();
							},
							ai: {
								threaten: 8,
								expose: 1,
								order: 9,
								result: {
									target(player, target) {
										if (target.hasSkillTag('maixie')) return -50;
										return -3;
									},
									player(player) {
										if (player.hp <= 2) return 10;
										return 0;
									},
								},
							},
						},
						huojian: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							selectTarget: [1, 2],
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								target.damage('fire', 2);
								player.damage('fire');
							},
							ai: {
								order: 6,
								threaten: 2.6,
								result: {
									target(player, target) {
										if (target.hasSkillTag('nofire')) return 0;
										return -1;
									},
									player(player) {
										if (player.hp <= 3) return -3;
									},
								},
							},
						},
						saodang: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							check() {
								return 1;
							},
							content() {
								player.draw(player.countCards('h'));
								player.damage(1);
							},
							ai: {
								order: 15,
								threaten: 2.4,
								result: {
									player(player) {
										if (player.hp > 2) return 2;
										if (player.hp == 2) return -2;
									},
								},
							},
						},
						shenjishibing: {
							forced: true,
							mod: {
								targetInRange(card) {
									if (card.name == 'sha') return true;
								},
								selectTarget(card, player, range) {
									if (card.name == 'sha' && range[1] && range[1] != -1) range[1] = 2;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
							},
						},
						jijunshibing: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'phaseUseBegin',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && event.player.countCards('h') >= player.countCards('h');
							},
							content() {
								'step 0';
								trigger.player.chooseCard('交给' + get.translation(player) + '一张手牌', true).ai = function (card) {
									if (get.attitude(trigger.player, player) > 0) {
										return get.value(card);
									} else {
										return -get.value(card);
									}
								};
								('step 1');
								if (result.bool) {
									player.gain(result.cards[0]);
									trigger.player.$give(1, player);
								}
							},
						},
						mujunshibing: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseDrawBefore',
							},
							check(event, player) {
								if (game.players.length < 3) return 0;
							},
							content() {
								'step 0';
								trigger.finish();
								trigger.untrigger();
								event.current = player.next;
								('step 1');
								event.current.chooseCard('交给' + get.translation(player) + '一张手牌或令其摸一张牌').ai = function (card) {
									if (get.attitude(event.current, player) > 0) {
										return -1;
									} else {
										return 3 - get.value(card);
									}
								};
								('step 2');
								if (result.bool == false) {
									event.current.line(player, 'green');
									game.log(get.translation(event.current) + '让' + get.translation(player) + '摸了一张牌');
									player.draw();
								} else {
									player.gain(result.cards[0]);
									event.current.$give(1, player);
								}
								if (event.current.next != player) {
									event.current = event.current.next;
									event.goto(1);
								}
							},
						},
						shengongshibing: {
							audio: 'ext:士兵扩展包/audio:2',
							mod: {
								cardUsable(card) {
									if (get.info(card) && get.info(card).forceUsable) return;
									return Infinity;
								},
								targetInRange() {
									return true;
								},
							},
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								return get.cardCount(event.card, player) > 1;
							},
							forced: true,
							usable: 5,
							content() {
								player.draw();
							},
						},
						yufuwenguan: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 2,
							position: 'he',
							filterCard: true,
							viewAs: {
								name: 'wuzhong',
								suit: 'diamond',
								number: 1,
								cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 1, name: 'zhuge', cardid: '7707239385', _transform: 'translateX(112px)', clone: { name: 'zhuge', suit: 'diamond', number: 1, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 5658 }, timeout: 5641, original: 'h' }],
							},
							viewAsFilter(player) {
								if (!player.countCards('he')) return false;
							},
							prompt: '将一张手牌当作无中生有使用',
							check(card) {
								return 6 - get.value(card);
							},
							ai: {
								threaten: 1.4,
								order: 15,
								basic: {
									order: 7.2,
									useful: 4,
									value: 9.2,
								},
								result: {
									player(card) {
										if (card.name == 'du') return -2;
										return 2;
									},
									target: 2,
								},
								tag: {
									draw: 2,
								},
							},
						},
						ceshi: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterCard: true,
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								var list = get.inpile('trick', 'trick');
								var list2 = [];
								for (var i = 0; i < 2; i++) {
									list2.push(game.createCard(list.randomGet()));
								}
								player.gain(list2, 'draw');
							},
							ai: {
								order: 16,
								threaten: 1.8,
								result: {
									player: 1,
								},
							},
						},
						bugua: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							selectTarget: [1, 2],
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								target.damage('thunder');
							},
							ai: {
								threaten: 4.6,
								order: 6,
								result: {
									target: -3,
								},
							},
						},
						guiyinvguan: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								return event.source != undefined;
							},
							forced: true,
							content() {
								'step 0';
								trigger.source.chooseToDiscard('弃置2张牌并展示所有手牌,或令此伤害-1', 2).ai = function (card) {
									if (get.attitude(trigger.source, player) < 0) return 7 - get.value(card);
									return false;
								};
								('step 1');
								if (result.bool) {
									trigger.source.showHandcards();
								} else {
									trigger.num--;
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										var bs = player.getCards('h');
										if (bs.length == 0) return 0;
										if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
										return [1, 0, 1, -0.5];
									},
								},
							},
						},
						daoguan: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('he') > 0;
							},
							filterCard: true,
							position: 'he',
							content() {
								player.discard(player.getCards('he'));
								player.gain(target.getCards('he'));
								target.$give(target.countCards('he'), player);
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
						guolian: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							selectTarget: [1, 3],
							filter(event, player) {
								return player.countCards('he', { subtype: 'equip1' });
							},
							filterCard(card) {
								return get.subtype(card) == 'equip1';
							},
							position: 'he',
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								8 - get.value(card);
							},
							content() {
								target.damage('fire');
							},
							ai: {
								threaten: 2.4,
								order: 6,
								result: {
									target: -2,
								},
							},
						},
						huben: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterCard: true,
							position: 'he',
							filterTarget(card, player, target) {
								return player != target && target.countCards('he') > 0;
							},
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								player.gainPlayerCard('he', target, 2, true);
								target.damage('fire');
							},
							ai: {
								threaten: 3,
								order: 15,
								expose: 0.3,
								result: {
									target(player, target) {
										if (target.hasSkillTag('nofire')) return 0;
										return -2;
									},
								},
							},
						},
						weishi: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'dying',
							},
							_priority: 7,
							forced: true,
							filter(event, player) {
								return player.hp <= 0;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return card.suit == 'spade' ? -1 : 1;
								});
								('step 1');
								if (result.bool) {
									player.recover(1 - player.hp);
									if (!player.isTurnedOver());
								}
							},
							ai: {
								threaten: 0.8,
							},
						},
						maifushibing: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							_priority: -10,
							filter(event, player) {
								return event.player && event.player.isAlive();
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								if (trigger.player.isTurnedOver()) {
									trigger.player.loseHp();
								} else {
									player.chooseToDiscard('he', true);
									trigger.player.turnOver();
								}
								('step 2');
								event.num--;
								('step 3');
								if (event.num > 0) event.goto(1);
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (player.hasSkill('jueqing')) return;
										if (get.tag(card, 'damage')) {
											if (target.isTurnedOver()) return [1, 1];
										}
									},
								},
							},
						},
						huweishibing: {
							audio: 'ext:士兵扩展包/audio:2',
							srlose: true,
							trigger: {
								global: 'shaBegin',
							},
							filter(event, player) {
								return event.player != player;
							},
							forced: true, //QQQ
							content() {
								'step 0';
								if (get.distance(player, trigger.player, 'attack') <= 8) {
									player.chooseBool(get.prompt('护卫', trigger.player)).set('ai', () => -get.attitude(player, trigger.player));
								} else {
									player.chooseToDiscard(get.prompt('护卫', trigger.player)).set('ai', () => -get.attitude(player, trigger.player));
								}
								('step 1');
								if (result.bool) {
									if (trigger.player.countCards('h')) {
										trigger.player.chooseControl('选项一', '选项二').set('prompt', '护卫<br><br><div class="text">选项一:令' + get.translation(player) + '获得你一张手牌</div><br><div class="text">选项二:即将对' + get.translation(trigger.target) + '生效的杀无效</div>').ai = function () {
											if (ai.get.effect(trigger.target, { name: 'sha' }, trigger.player) < 0) return '选项二';
											return '选项一';
										};
									} else {
										trigger.untrigger();
										trigger.finish();
										event.finish();
									}
								} else {
									event.finish();
								}
								('step 2');
								if (result.control == '选项一') {
									player.gainPlayerCard('h', trigger.player, true);
								} else {
									trigger.untrigger();
									trigger.finish();
								}
							},
							ai: {
								expose: 1,
								result: {
									target: -3,
								},
							},
						},
						shenjiansbing: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								event.targets = game.players.slice(0);
								event.targets.remove(player);
								event.targets.sort(lib.sort.seat);
								event.targets2 = event.targets.slice(0);
								('step 1');
								if (event.targets.length) {
									event.targets.shift().damage();
									event.redo();
								}
								('step 2');
								if (event.targets2.length) {
									var cur = event.targets2.shift();
									if (cur && cur.countCards('he')) {
										if (cur.countCards('e')) {
											cur.discard(cur.getCards('e'));
										}
										cur.chooseToDiscard('h', true, 1);
									}
									event.redo();
								}
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
											if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
										}
										var num = 0;
										var players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											var att = get.attitude(player, players[i]);
											if (att > 0) att = 1;
											if (att < 0) att = -1;
											if (players[i] != player && players[i].hp <= 3) {
												if (players[i].countCards('h') == 0) num += att / players[i].hp;
												else if (players[i].countCards('h') == 1) num += att / 2 / players[i].hp;
												else if (players[i].countCards('h') == 2) num += att / 4 / players[i].hp;
											}
											if (players[i].hp == 1) num += att * 1.5;
										}
										if (player.hp == 1) {
											return -num;
										}
										if (player.hp == 2) {
											return -game.players.length / 4 - num;
										}
										return -game.players.length / 3 - num;
									},
								},
							},
						},
						chuqiao: {
							audio: 'ext:士兵扩展包/audio:2',
							mod: {
								targetInRange(card) {
									if (card.name == 'sha') return true;
								},
								targetEnabled(card, player, target, now) {
									if (card.name == 'lebu') return false;
								},
							},
							trigger: {
								global: 'phaseBegin',
							},
							filter(event, player) {
								return event.player != player;
							},
							forced: true,
							content() {
								player.draw(2);
								player.chooseToUse('出鞘:是否使用一张卡牌？');
							},
							ai: {
								nodu: true,
								result: {
									player(card) {
										if (card.name == 'jiu') return 0;
									},
								},
							},
						},
						yiliao: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								if (target.hp >= target.maxHp) return false;
								return true;
							},
							selectTarget: [1, 2],
							content() {
								'step 0';
								target.draw();
								('step 1');
								target.chooseToDiscard('he', 1, true);
								('step 2');
								target.recover();
							},
							ai: {
								order: 15,
								useful: 4,
								value: 10,
								tag: {
									draw: 2,
								},
								result: {
									target(player, target) {
										if (target.countCards('j', 'lebu')) return 1;
										return Math.max(1, 2 - target.countCards('h') / 10);
									},
								},
							},
						},
						daofeng: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou' || event.card.name == 'wanjian') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
							},
							forced: true,
							content() {
								trigger.num++;
							},
						},
						xuerenshibing: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaAfter',
							},
							forced: true,
							usable: 1,
							content() {
								player.draw();
							},
							ai: {
								threaten: 4,
								nodu: true,
							},
						},
						yantang: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('he') > 0;
							},
							selectTarget: [1, 2],
							content() {
								player.discardPlayerCard('he', target);
								target.damage('thunder');
							},
							ai: {
								order: 9,
								result: {
									target: -3,
								},
							},
						},
						tiezhua: {
							audio: 'ext:士兵扩展包/audio:2',
							srlose: true,
							trigger: {
								player: 'phaseDrawBegin',
							},
							check(event) {
								return event.num <= 3;
							},
							prompt: '是否发动技能【铁爪】,展示牌中每有一张基本牌便可视为对一名角色使用一张【杀】',
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								event.cards = get.cards(5);
								player.showCards(event.cards);
								('step 1');
								var num = 0;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'basic') {
											num++;
										}
									}
								if (num > 0) {
									var next = player.chooseCardButton('请选择铁爪视为【杀】使用的牌', event.cards);
									next.ai = function (button) {
										if (
											game.hasPlayer(function (target) {
												return player.canUse('sha', target, false) && get.effect(target, { name: 'sha' }, player, player) > 0;
											})
										) {
											return 8 - get.value(button.link);
										}
										return 0;
									};
									next.filterButton = function (button) {
										return get.type(button.link) == 'basic';
									};
								} else {
									player.gain(event.cards, 'gain2');
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.cards1 = result.links[0];
									player
										.chooseTarget('请选择铁爪的目标', function (card, player, target) {
											return player.canUse('sha', target, false);
										})
										.set('ai', function (target) {
											return get.effect(target, { name: 'sha' }, player, player);
										});
								} else {
									player.gain(event.cards, 'gain2');
									event.finish();
								}
								('step 3');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets, [event.cards1], false);
									event.cards.remove(event.cards1);
									event.goto(1);
								} else {
									player.gain(event.cards, 'gain2');
									event.finish();
								}
							},
							ai: {
								threaten: 1.3,
								expose: 0.2,
							},
						},
						yunliang: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								event.cards = get.cards(player.maxHp);
								player.chooseCardButton(event.cards, [1, player.maxHp - player.hp]);
								('step 1');
								var cards2 = [];
								for (var i = 0; i < result.buttons.length; i++) {
									cards.remove(result.buttons[i].link);
									cards2.push(result.buttons[i].link);
								}
								if (cards2.length) {
									player.gain(cards2);
									player.$gain(cards2);
								}
								for (var i = 0; i < cards.length; i++) {
									ui.discardPile.appendChild(cards[i]);
								}
							},
							ai: {
								order: 8,
								result: {
									player: 2,
								},
							},
						},
						yunliang1: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: ['phaseJudgeBefore', 'phaseEnd'],
							},
							forced: true, //QQQ
							filter(event, player, name) {
								var notarget = true;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].group == 'wei') {
										notarget = false;
										break;
									}
								}
								if (notarget) return false;
								if (name == 'phaseJudgeBefore') {
									return player.countCards('j') > 0;
								}
								return true;
							},
							content() {
								'step 0';
								player.chooseTarget('运粮:令一名魏势力角色摸一张牌', function (card, player, target) {
									return target.group == 'wei';
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw();
								}
							},
						},
						mengchong: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaBefore',
							},
							forced: true, //QQQ
							filter(event, player) {
								return (
									_status.currentPhase == event.player &&
									game.countPlayer(function (current) {
										return get.distance(player, current, 'attack') <= 1 && !event.targets.includes(current);
									}) > 0 &&
									player.countCards('h') > 0
								);
							},
							content() {
								'step 0';
								player.chooseCard(1, 'h', get.prompt('mengchong')).set('ai', function (card) {
									if (
										game.countPlayer(function (current) {
											return get.attitude(trigger.player, current) < 0 && get.distance(player, current, 'attack') <= 1 && !trigger.targets.includes(current);
										}) > 0 &&
										player.countCards('h') > 1 &&
										get.attitude(player, trigger.player) > 0
									)
										return 6 - get.value(card);
									return -1;
								});
								('step 1');
								if (result.bool) {
									player.discard(result.cards[0]);
									if (player != trigger.player) player.line(trigger.player);
									trigger.player.chooseTarget('请选择【杀】的额外目标', function (card, player, target) {
										return !trigger.targets.includes(target) && get.distance(player, target, 'attack') <= 1;
									}).ai = function (target) {
										return -get.attitude(trigger.player, target);
									};
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									trigger.player.line(result.targets[0], trigger.nature);
									trigger.targets.push(result.targets[0]);
								} else {
									event.finish();
								}
							},
							ai: {
								expose: 0.9,
							},
						},
						youjia: {
							group: ['youjia_showCards', 'youjia_nanman'],
							subSkill: {
								showCards: {
									trigger: {
										target: 'huogongEnd',
									},
									forced: true,
									filter(event, player) {
										return player.countCards('h') > 0;
									},
									content() {
										player.chooseToDiscard(1, 'h', true);
									},
								},
								nanman: {
									trigger: {
										target: 'useCardToBefore',
									},
									forced: true,
									_priority: 15,
									filter(event, player) {
										return event.card.name == 'nanman';
									},
									content() {
										trigger.cancel();
									},
									ai: {
										effect: {
											target(card, player, target) {
												if (card.name == 'nanman') return 0;
											},
										},
									},
								},
							},
						},
						doujian: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseDiscardBegin',
							},
							forced: true, //QQQ
							content() {
								'step 0';
								player.chooseToUse(get.prompt('doujian'));
								('step 1');
								if (result.bool) player.draw();
							},
						},
						tanmishibing: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								source: 'damageBefore',
							},
							content() {
								'step 0';
								player.gainPlayerCard('he', trigger.player, true);
								('step 1');
								if (result.bool) {
									if (get.type(result.cards[0]) == 'basic') player.gainPlayerCard('he', trigger.player, true);
								}
							},
						},
						仆从: {
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							content() {
								'step 0';
								var list = [];
								var target = player.getEnemies().randomGet();
								for (var i = 0; i < lib.inpile.length; i++) {
									if (lib.card[lib.inpile[i]].type == 'trick') {
										list.push(lib.inpile[i]);
									}
								}
								player.gain(game.createCard(list.randomGet()));
								player.$draw();
								if (target) {
									target.gain(game.createCard(list.randomGet()));
									target.$draw();
									target.addExpose(0.2);
									player.line(target, 'green');
									game.log(player, '和', target, '获得了一张锦囊牌');
								}
								('step 1');
							},
							group: 'shifa_draw',
							subSkill: {
								draw: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									usable: 3,
									filter(event, player) {
										if (_status.currentPhase != player) return false;
										return get.type(event.card) == 'trick';
									},
									content() {
										player.draw();
									},
								},
							},
							ai: {
								threaten: 1.5,
								noautowuxie: true,
							},
						},
						zeixi: {
							trigger: {
								global: ['useCardAfter'],
							},
							usable: 2,
							filter(event, player) {
								return (
									event.card &&
									event.card.isCard &&
									(get.type(event.card) == 'equip' || event.card.name == 'sha') &&
									get.subtype(event.card) == 'equip1' &&
									game.hasPlayer(function (current) {
										return get.distance(event.player, current, 'attack') <= 1;
									})
								);
							},
							forced: true, //QQQ
							content() {
								'step 0';
								player.chooseTarget(
									get.prompt2('zeixi'),
									function (card, player, target) {
										return target != trigger.player && target.countCards('h') && get.distance(trigger.player, target, 'attack') <= 1;
									},
									function (target) {
										return -get.attitude(player, target);
									}
								);
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player
										.discardPlayerCard(result.targets[0], 'h', get.prompt('zeixi'))
										.set('ai', function (button) {
											return Math.random();
										})
										.set('att', get.attitude(player, result.targets[0]) <= 0);
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool && result.links && result.links.length) {
									if (get.color(result.links[0]) == 'red') {
										trigger.player.useCard({ name: 'sha' }, event.target, false);
									} else {
										event.finish();
									}
								} else {
									event.finish();
								}
							},
							ai: {
								order: 5,
							},
						},
						shejishibing: {
							trigger: {
								global: ['turnOverAfter', 'judgeAfter', 'phaseBefore'],
							},
							forced: true,
							filter(event, player) {
								return event.player != player;
							},
							forced: true, //QQQ
							content() {
								'step 0';
								var next;
								if (
									trigger.player.hasCard(function (card) {
										return !player.getEquip(card);
									}, 'e')
								) {
									next = player
										.chooseControl('山越🐍舞', 'draw_card', 'cancel2', function (event, player) {
											var source = _status.event.source;
											var att = get.attitude(player, source);
											if (source.hasSkillTag('noe')) {
												if (att > 0) {
													return '山越🐍舞';
												}
											} else {
												if (att <= 0) {
													return '山越🐍舞';
												}
											}
											return 'draw_card';
										})
										.set('source', trigger.player);
								} else {
									next = player.chooseControl('draw_card', 'cancel2', function () {
										return 'draw_card';
									});
								}
								next.set('prompt', get.prompt('shejishibing', trigger.player));
								('step 1');
								if (result.control == '山越🐍舞') {
									var chat = ['来一起山越🐍舞', '下一次,我希望你能开出永不凋谢的希望之花送给我'].randomGet();
									player.say(chat);
									player.choosePlayerCard(trigger.player, 'e', '获得一张装备区的牌').set('filterButton', function (button) {
										return !_status.event.player.getEquip(button.link);
									});
								} else {
									if (result.control == 'draw_card') {
										player.draw();
									}
									event.finish();
								}
								('step 2');
								if (result && result.links && result.links.length) {
									trigger.player.$give(result.links[0], player);
									player.gain(result.links[0]);
									player.equip(result.links[0]);
									player.addExpose(0.2);
								}
							},
						},
						yurennvguan: {
							trigger: {
								player: 'useCardBegin',
							},
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.original == 'e') return true;
									}
								return true;
							},
							forced: true, //QQQ
							content() {
								'step 0';
								player.draw();
								('step 1');
								player.chooseTarget('玉人:选择发动对象', function (card, player, target) {
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
						投石: {
							mod: {
								// cardUsable:function (card,player,num){
								// if(card.name=='sha') return true;
								// },
								targetInRange() {
									return true;
								},
							},
							audio: 'ext:士兵扩展包/audio:2',
							marktext: '石',
							trigger: {
								source: 'damageEnd',
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								player.draw(trigger.num);
								if (typeof player.storage.投石 == 'number') {
									player.storage.投石 += trigger.num;
								} else {
									player.storage.投石 = trigger.num;
								}
								player.markSkill('投石');
							},
							intro: {
								name: '投石',
								content: 'mark',
							},
							init(player) {
								player.storage.投石 = 0;
							},
						},
						投石_dis: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.isAlive() && player.storage.投石 >= 1;
							},
							filterTarget(card, player, target) {
								if (player == target) return false;
								return true;
							},
							selectTarget: 1,
							content() {
								player.storage.投石 -= 1;
								player.markSkill('投石');
								target.damage();
							},
						},
						投石_: {
							group: ['投石', '投石_dis'],
						},
						石料_: {
							group: ['石料', '石料_recover', '石料_draw', '石料_jiaqiang'],
						},
						石料: {
							audio: 'ext:士兵扩展包/audio:2',
							marktext: '料',
							init(player) {
								player.storage.石料 = 0;
							},
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								return event.player.isAlive() && player.storage.石料 <= 9990;
							},
							forced: true,
							content() {
								player.storage.石料 += 25;
								if (player.storage.石料 > 9990) player.storage.石料 = 9990;
								var n = [1, 2, 0, 3].randomGet();
								if (n == 0) player.storage.石料 += 25;
								else if (player.storage.石料 > 9990) player.storage.石料 = 9990;
								player.markSkill('石料');
							},
							intro: {
								//name:"石料",
								content(storage) {
									return '当前有' + storage + '石料';
								},
							},
						},
						石料_jiaqiang: {
							group: ['石料_jq', '石料_recover', '石料_draw'],
						},
						石料_draw: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.isAlive() && player.storage.石料 >= 100;
							},
							content() {
								player.storage.石料 -= 25;
								player.markSkill('石料');
								player.draw();
							},
						},
						石料_recover: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.isAlive() && player.storage.石料 >= 175 && player.hp < player.maxHp;
							},
							content() {
								player.storage.石料 -= 175;
								player.markSkill('石料');
								player.recover();
							},
						},
						石料_jq: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: ['phaseEnd', 'phaseBegin'],
							},
							filter(event, player) {
								return event.player.isAlive() && player.storage.石料 <= 9990;
							},
							forced: true,
							content() {
								player.storage.石料 += 50;
								if (player.storage.石料 > 9990) player.stronge.石料 = 9990;
								player.markSkill('石料');
							},
							/*intro:{
								//name:"石料",
								content:function(storage){
									return '当前有'+storage+'石料';}
							},*/
						},
						车弩: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i] != player) player.useCard({ name: 'sha' }, game.players[i]);
								}
								player.recover();
								player.draw(3);
							},
						},
						chouyeshibing: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true, //QQQ
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('chouyeshibing'), function (card, player, target) {
										return player != target;
									})
									.set('forceDie', true)
									.set('ai', function (target) {
										var num = get.attitude(_status.event.player, target);
										return -num;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.addTempSkill('chouyeshibing2', { player: 'phaseBegin' });
								}
							},
							ai: {
								expose: 0.5,
							},
						},
						chouyeshibing2: {
							mark: true,
							marktext: '仇',
							intro: {
								content: '每个回合结束时失去1点体力直到回合开始',
							},
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							content() {
								player.loseHp();
							},
						},
						卫侯: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'damageEnd',
							},
							forced: true, //QQQ
							content() {
								'step 0';
								player
									.chooseControl('确定', '取消', function (event, player) {
										return '确定';
									})
									.set('prompt', get.prompt('卫侯'));
								('step 1');
								if (result.control == '确定') {
									player.judge(function (card) {
										return get.color(card) == 'black' ? 1 : 2;
									});
								} else event.goto(4);
								('step 2');
								if (result.judge == 1) {
									event.bool = 1;
									player.chooseTarget('是否弃置一名其他角色的2张牌？', function (card, player, target) {
										return target != player && target.countCards('he');
									}).ai = function (target) {
										var equipValue = 0;
										var cards = target.getCards('e');
										for (var i = 0; i < cards.length; i++) {
											equipValue += get.equipValue(cards[i]);
										}
										if (get.attitude(player, target) > 2) return -1;
										return equipValue - get.attitude(player, target);
									};
								} else {
									event.bool = 2;
									player.chooseTarget('是否对一名其他角色造成一点伤害？', function (card, player, target) {
										return target != player;
									}).ai = function (target) {
										return get.damageEffect(target, player, player);
									};
								}
								('step 3');
								if (result.bool) {
									player.line(result.targets);
									if (event.bool == 1) {
										player.discardPlayerCard(result.targets[0], 2, 'he', true);
										if (game.me == player && lib.config.But_xiahoudun == false) {
											if (lib.storage.卫侯_discard == undefined) {
												lib.storage.卫侯_discard = 0;
											}
											lib.storage.卫侯_discard++;
										}
									} else {
										result.targets[0].damage(player);
										if (game.me == player && lib.config.But_xiahoudun == false) {
											if (lib.storage.卫侯_damage == undefined) {
												lib.storage.卫侯_damage = 0;
											}
											lib.storage.卫侯_damage++;
										}
									}
									if (lib.storage.卫侯_discard >= 3 && lib.storage.卫侯_damage >= 3 && ui.But) {
										game.gainBut('But_xiahoudun', '拔矢啖睛');
										delete lib.storage.卫侯_damage;
										delete lib.storage.卫侯_discard;
									}
								}
							},
							ai: {
								maixie: true,
								expose: 0.4,
							},
						},
						贵兵: {
							trigger: { global: 'shaBegin' },
							forced: true, //QQQ
							audio: 'ext:士兵扩展包/audio:2',
							content() {
								'step 0';
								event.cards = get.cards(4);
								event.videoId = lib.status.videoId++;
								game.broadcastAll(
									function (player, id, cards) {
										var str;
										if (player == game.me && !_status.auto) {
											str = '贵兵:选择任意张点数不大于13的牌';
										} else {
											str = '贵兵';
										}
										var dialog = ui.create.dialog(str, cards);
										dialog.videoId = id;
									},
									player,
									event.videoId,
									event.cards
								);
								event.time = get.utc();
								game.addVideo('showCards', player, ['贵兵', get.cardsInfo(event.cards)]);
								game.addVideo('delay', null, 2);
								('step 1');
								var next = player.chooseButton([0, 4]);
								next.set('dialog', event.videoId);
								next.set('filterButton', function (button) {
									var num = 0;
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										num += ui.selected.buttons[i].link.number;
									}
									return num + button.link.number <= 13;
								});
								next.set('ai', function (button) {
									return get.value(button.link, _status.event.player);
								});
								('step 2');
								if (result.bool && result.links) {
									var cards2 = [];
									for (var i = 0; i < result.links.length; i++) {
										cards2.push(result.links[i]);
										cards.remove(result.links[i]);
									}
									for (var i = 0; i < cards.length; i++) {
										cards[i].discard();
									}
									event.cards2 = cards2;
								} else {
									event.finish();
								}
								var time = 1000 - (get.utc() - event.time);
								if (time > 0) {
								}
								('step 3');
								game.broadcastAll('closeDialog', event.videoId);
								var cards2 = event.cards2;
								player.gain(cards2, 'log');
								player.$draw(cards2);
								('step 4');
								player.recover();
								player.draw(2);
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											if (target.hp >= 4) return [1, 2];
											if (target.hp == 3) return [1, 1.5];
											if (target.hp == 2) return [1, 0.5];
										}
									},
								},
							},
						},
						糜资: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterCard(card) {
								var num = 0;
								for (var i = 0; i < ui.selected.cards.length; i++) {
									num += ui.selected.cards[i].number;
								}
								return card.number + num <= 13;
							},
							complexCard: true,
							selectCard() {
								var num = 0;
								for (var i = 0; i < ui.selected.cards.length; i++) {
									num += ui.selected.cards[i].number;
								}
								if (num == 13) return ui.selected.cards.length;
								return ui.selected.cards.length + 2;
							},
							discard: false,
							prepare: 'give',
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								var num = 0;
								for (var i = 0; i < ui.selected.cards.length; i++) {
									num += ui.selected.cards[i].number;
								}
								if (num + card.number <= 13) return 9 - get.value(card);
								if (ui.selected.cards.length == 0) {
									var cards = _status.event.player.getCards('h');
									for (var i = 0; i < cards.length; i++) {
										for (var j = i + 1; j < cards.length; j++) {
											if (cards[i].number + cards[j].number <= 13) {
												if (cards[i] == card || cards[j] == card) return 8.5 - get.value(card);
											}
										}
									}
								}
								return 0;
							},
							content() {
								'step 0';
								target.gain(cards, player);
								player
									.chooseTarget(get.prompt('糜资'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
							ai: {
								order(skill, player) {
									if (
										game.hasPlayer(function (current) {
											return current.hp < current.maxHp && current != player && get.recoverEffect(current, player, player) > 0;
										})
									) {
										return 10;
									}
									return 1;
								},
								result: {
									player(player, target) {
										if (get.attitude(player, target) < 0) return -1;
										var eff = get.recoverEffect(target, player, player);
										if (eff < 0) return 0;
										if (eff > 0) {
											if (target.hp == 1) return 3;
											return 2;
										}
										if (player.needsToDiscard()) return 1;
										return 0;
									},
								},
								threaten: 1.3,
							},
						},
						耳目: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'damageEnd' },
							forced: true, //QQQ
							filter(event, player) {
								return event.source && event.source.countCards('he') && event.num > 0 && event.source != player;
							},
							content() {
								player.gainPlayerCard([1, trigger.num], get.prompt('耳目', trigger.source), trigger.source, 'he')
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
						無挡: {
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('無挡')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].gainMaxHp();
									result.targets[0].recover();
								}
							},
						},
						飛軍: {
							trigger: { global: 'discardAfter' },
							forced: true, //QQQ
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('飛軍')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].loseHp();
								}
								('step 2');
								player.chooseTarget(get.prompt('飛軍')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].gainMaxHp();
								}
							},
						},
						忠令: {
							mod: {
								targetInRange(card, player, target) {
									if (card.name == 'sha' && card.number) {
										if (get.distance(player, target) <= card.number) return true;
									}
								},
							},
							trigger: { global: 'shaBegin' },
							logTarget: 'target',
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							filter(event, player) {
								return true;
							},
							content() {
								trigger.directHit = true;
								player.addTempSkill('忠令2', 'shaAfter');
							},
							ai: {
								threaten: 0.5,
							},
						},
						忠令2: {
							trigger: { global: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								trigger.num++;
							},
						},
						丹阳: {
							nobracket: true,
							forced: true,
							trigger: {
								source: 'damageEnd',
							},
							mark: true,
							init(player) {
								player.storage.丹阳 = 0;
								player.unmarkSkill('丹阳');
							},
							marktext: '<span style="color: green">丹</span>',
							intro: {
								content: '使用"杀"<span style="color: red">造成伤害值</span>+#',
							},
							content() {
								player.draw();
								player.storage.丹阳 += 1;
								player.markSkill('丹阳');
							},
							group: '丹阳_damage',
							subSkill: {
								damage: {
									popup: false,
									forced: true,
									trigger: {
										source: 'damageBefore',
									},
									filter(event, player) {
										return player.storage.丹阳 > 0 && event.card && event.card.name == 'sha';
									},
									content() {
										var target = trigger.player;
										player.line(target, 'white');
										trigger.num += player.storage.丹阳;
										game.log(player, '<span style="color: red">丹阳技能效果生效,此伤害+</span>', player.storage.丹阳);
									},
								},
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						群踞: {
							trigger: { target: 'useCardToBefore' },
							check(event, player) {
								return get.attitude(event.player, player) < 0 && get.effect(player, event.card, event.player, player) < 0;
							},
							logTarget: 'player',
							filter(event, player) {
								if (!event.targets || event.targets.length != 1) return false;
								return true;
							},
							content() {
								trigger.cancel();
								player.draw();
							},
						},
						弓卫: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:士兵扩展包/audio:2',
							position: 'he',
							filterCard: true,
							content() {
								'step 0';
								player.addTempSkill('弓卫2');
								('step 1');
								player
									.chooseTarget('是否弃置一名角色的一张牌？', function (card, player, target) {
										return player != target && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (get.attitude(player, target) < 0) {
											return Math.max(0.5, get.effect(target, { name: 'sha' }, player, player));
										}
										return 0;
									});
								('step 2');
								if (result.bool) {
									player.line(result.targets, 'green');
									event.target = result.targets[0];
									player.discardPlayerCard(event.target, 'he', true).ai = get.buttonValue;
									player.draw(2);
									var list = game.filterPlayer(function (current) {
										return player.canUse('wanjian', current) && current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									player.useCard({ name: 'wanjian' }, list);
								}
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						弓卫2: {
							mod: {
								attackFrom() {
									return -Infinity;
								},
							},
						},
						昭卫: {
							trigger: {
								global: 'useCardToAfter',
							},
							usable: 1,
							filter(event, player) {
								if (get.type(event.card) == 'basic') return true;
								return false;
							},
							audio: 'ext:士兵扩展包/audio:2',
							content() {
								'step 0';
								player.chooseTarget('是否令一名角色摸一张牌,对视为所有敌方角色使用杀？').set('ai', function (target) {
									var player = _status.event.player;
									if (get.attitude(player, target) < 0) {
										return Math.max(0.5, get.effect(target, { name: 'sha' }, player, player));
									}
									return 0;
								});
								('step 1');
								if (result.bool) {
									player.line(result.targets, 'green');
									event.target = result.targets[0];
									event.target.draw();
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									player.useCard({ name: 'sha' }, list);
								}
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						diexueshibing: {
							trigger: { global: 'phaseEnd' },
							forced: true, //QQQ
							content() {
								'step 0';
								player.chooseTarget(get.prompt('diexueshibing'));
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									var tao = get.cardPile2(function (card) {
										return card.suit == 'heart';
									});
									if (tao) {
										target.gain(tao, 'gain2');
									} else {
										_status.diexueshibing_notao = true;
									}
									trigger.player.loseHp();
								}
							},
							ai: {
								threaten: 1.5,
								expose: 0.2,
							},
						},
						魔刀之威: {
							nobracket: true,
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaEnd',
							},
							forced: true, //QQQ
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.isMinHp() || current.countCards('h') <= player.countCards('h') || current.countCards('e') <= player.countCards('e');
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('魔刀之威'), function (card, player, target) {
										return (target.hp > 0 && target.hp != player.hp) || target.countCards('h') <= player.countCards('h') || target.countCards('e') <= player.countCards('e');
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool) {
									player.line(result.targets[0], 'white');
									var damage = [2, 1, 2];
									result.targets[0].damage(damage.randomGet());
								}
							},
							ai: {
								threaten: 2,
							},
						},
						jishijimin: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (event.player.countCards('h') > player.countCards('h')) return true;
							},
							content() {
								player.gain(trigger.player.getCards('h'));
								trigger.player.$give(trigger.player.countCards('h'), player);
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
						dianxing典刑: {
							trigger: {
								global: 'phaseEnd',
							},
							forced: true, //QQQ
							filter(event, player) {
								return event.player.isAlive() && event.player != player && event.player.countCards('he') > 0;
							},
							content() {
								'step 0';
								var goon = get.attitude(player, _status.currentPhase) < 0;
								var next = player.discardPlayerCard(get.prompt('典刑', _status.currentPhase), _status.currentPhase, 'he', false);
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
									if (get.color(result.cards[0], result.cards[0].original == 'h' ? player : false) == 'black') {
										trigger.player.turnOver();
										trigger.player.loseHp();
									}
								}
							},
						},
						dinglidading: {
							trigger: { target: 'useCardToBefore' },
							_priority: 15,
							filter(event, player) {
								return event.player != player;
							},
							content() {
								game.log(player, '发动了鼎力,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
							mark: true,
							intro: {
								content: '其他角色使用牌可令之对你无效',
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'trick' || card.name == 'sha') return 'zeroplayertarget';
									},
								},
							},
						},
						chengjianshibing: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'useCardToAfter',
							},
							usable: 1,
							filter(event, player) {
								if (get.type(event.card) == 'trick') return true;
								return false;
							},
							content() {
								player.draw();
								var list = game.filterPlayer(function (current) {
									return player.canUse('sha', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'sha' }, list);
							},
							ai: {
								order: 7,
								result: {
									target: 1,
								},
							},
						},
						baima白马: {
							global: 'baima白马2',
						},
						baima白马2: {
							mod: {
								globalTo(from, to, distance) {
									if (to.isFriendsOf(from)) return;
									var players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (players[i].hasSkill('baima白马') && players[i].isFriendsOf(to)) {
											return distance + 2;
										}
									}
								},
							},
						},
						maming马鸣: {
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								player.judge('maming马鸣', function (card) {
									return get.color(card) == 'red' ? 1.5 : -0.5;
								});
								('step 1');
								if (result.judge > 0) {
									player.addTempSkill('maming马鸣2', 'phaseBegin');
								}
							},
						},
						maming马鸣2: {
							mod: {
								globalTo(from, to, distance) {
									return distance + 2;
								},
							},
						},
						招募白马: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'baima白马');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'baima白马');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('招募白马');
							},
						},
						随义: {
							trigger: {
								global: 'shaEnd',
							},
							forced: true, //QQQ
							filter(event, player) {
								return event.player.isAlive() && event.player != player && event.player.countCards('he') > 0;
							},
							content() {
								'step 0';
								var goon = get.attitude(player, trigger.player) < 0;
								var next = player.discardPlayerCard(get.prompt('随义', trigger.player), trigger.player, 'he', false);
								/*next.set('ai',function(card){
								var player=_status.event.player;
									if(player.hp==1||_status.event.getTrigger().num>1){
										return 9-get.value(card);
									}
									if(player.hp==2){
										return 8-get.value(card);
									}
									return 7-get.value(card);
								});*/
								next.set('goon', goon);
								('step 1');
								if (result.bool) {
									if (get.color(result.cards[0], result.cards[0].original == 'h' ? player : false) == 'black') {
										trigger.player.damage();
										player.draw(2);
									}
								}
							},
						},
						弄士兵斧: {
							trigger: { global: 'shaBegin' },
							forced: true, //QQQ
							content() {
								'step 0';
								player.chooseTarget(get.prompt('弄士兵斧')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, 2);
									result.targets[0].damage();
								}
							},
						},
						匿士兵刀: {
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('匿士兵刀'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, 2);
									trigger.player.addTempSkill('匿士兵刀2', 'shaAfter');
								}
							},
							ai: {
								threaten: 0.5,
							},
						},
						匿士兵刀2: {
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								trigger.num++;
							},
						},
						镇贼shibing: {
							trigger: { global: ['shaBegin', 'judge'] },
							_priority: 10,
							filter(event, player) {
								return event.player != player;
							},
							forced: true,
							content() {
								'step 0';
								player.storage.镇贼shibing = trigger.player;
								player.addSkill('镇贼shibing2');
								player.addSkill('镇贼shibing3');
								player.addSkill('镇贼shibing4');
								('step 1');
								player.chooseToUse('镇贼:是否对' + get.translation(trigger.player) + '使用一张牌？', trigger.player, -1).filterCard = function (card, player) {
									return player.canUse(card, trigger.player);
								};
								('step 2');
								if (result.bool) {
									event.goto(1);
								}
							},
						},
						镇贼shibing2: {
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.player == player.storage.镇贼shibing;
							},
							forced: true,
							content() {
								'step 0';
								if (player.hp == player.maxHp) {
									player.draw(2);
									event.finish();
								} else {
									player.chooseControl('draw_card', 'recover_hp', function (event, player) {
										if (player.hp >= 2 || player.hp >= player.maxHp - 1) return 'draw_card';
										if (player.hp == 2 && player.countCards('h') == 0) return 'draw_card';
										return 'recover_hp';
									});
								}
								('step 1');
								if (result.control == 'draw_card') {
									player.draw(2);
								} else {
									player.recover();
								}
							},
							mod: {
								playerEnabled(card, player, target) {
									if (target != player.storage.镇贼shibing) return false;
								},
								targetInRange(card, player, target) {
									if (target == player.storage.镇贼shibing) return true;
								},
							},
						},
						镇贼shibing3: {
							trigger: {
								global: 'recoverAfter',
							},
							filter(event, player) {
								return event.player.hp > 0 && event.player == player.storage.镇贼shibing;
							},
							forced: true,
							content() {
								delete player.storage.镇贼shibing;
								player.removeSkill('镇贼shibing2');
								player.removeSkill('镇贼shibing3');
								player.removeSkill('镇贼shibing4');
							},
						},
						镇贼shibing4: {
							trigger: {
								global: 'dieEnd',
							},
							filter(event, player) {
								return event.player == player.storage.镇贼shibing;
							},
							forced: true,
							content() {
								delete player.storage.镇贼shibing;
								player.removeSkill('镇贼shibing2');
								player.removeSkill('镇贼shibing3');
								player.removeSkill('镇贼shibing4');
							},
						},
						行刺: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaAfter',
							},
							filter(event, player) {
								if (get.color(event.card) == 'black') return true;
								return false;
							},
							forced: true, //QQQ
							content() {
								'step 0';
								player.chooseTarget(get.prompt('行刺')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
									result.targets[0].damage();
								}
							},
						},
						凌卫: {
							trigger: {
								global: 'useCard',
							},
							forced: true, //QQQ
							filter(event, player) {
								if (!['basic', 'trick'].includes(get.type(event.card))) return false;
								if (get.tag(event.card, 'damage')) return true;
								return false;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('凌卫')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
									result.targets[0].damage();
								}
							},
						},
						毦烈: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return get.type(event.card) == 'trick' && event.card.name != 'wuxie' && event.target.countCards('h') > 0;
							},
							check(event, player) {
								return get.attitude(player, event.target) < 0;
							},
							logTarget: 'target',
							content() {
								'step 0';
								trigger.target.showHandcards();
								('step 1');
								var cards = trigger.target.getCards('h');
								var list = [];
								for (var i = 0; i < cards.length; i++) {
									list.add(get.color(cards[i]));
								}
								if (list.length == 1) event._result = { control: list[0] };
								else {
									list.sort();
									trigger.target
										.chooseControl(list)
										.set('prompt', '选择弃置一种颜色的所有手牌')
										.set('ai', function () {
											var player = _status.event.player;
											if (get.value(player.getCards('h', { color: 'red' })) >= get.value(player.getCards('h', { color: 'black' }))) return 'black';
											return 'red';
										});
								}
								('step 2');
								trigger.target.discard(trigger.target.getCards('h', { color: result.control }));
								('step 3');
								player.draw();
							},
						},
						白毦: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha' && event.target.countCards('h') > 0;
							},
							check(event, player) {
								return get.attitude(player, event.target) < 0;
							},
							logTarget: 'target',
							content() {
								'step 0';
								trigger.target.showHandcards();
								('step 1');
								var cards = trigger.target.getCards('h');
								var list = [];
								for (var i = 0; i < cards.length; i++) {
									list.add(get.color(cards[i]));
								}
								if (list.length == 1) event._result = { control: list[0] };
								else {
									list.sort();
									trigger.target
										.chooseControl(list)
										.set('prompt', '选择弃置一种颜色的所有手牌')
										.set('ai', function () {
											var player = _status.event.player;
											if (get.value(player.getCards('h', { color: 'red' })) >= get.value(player.getCards('h', { color: 'black' }))) return 'black';
											return 'red';
										});
								}
								('step 2');
								trigger.target.discard(trigger.target.getCards('h', { color: result.control }));
								('step 3');
								player.draw();
							},
						},
						烟花: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('烟花'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].damage('fire');
									result.targets[0].goMad({ player: 'phaseAfter' });
								}
							},
						},
						耕耘: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'phaseEnd' },
							filter(event, player) {
								return player.countCards('e') > 0;
							},
							content() {
								trigger.player.draw(3);
								trigger.player.recover();
							},
						},
						犁地: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							selectTarget: [1, 2],
							filterTarget(card, player, target) {
								return true;
							},
							content() {
								target.draw(2);
								player.loseHp();
								player.gainMaxHp(2);
							},
						},
						兴令: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('guohe'));
										list[i].gain(game.createCard('guohe'));
										list[i].$draw(2);
									}
								}
							},
						},
						帆兵: {
							group: ['帆兵_more', '帆兵_less'],
							subSkill: {
								more: {
									audio: true,
									trigger: { global: 'damageBegin' },
									forced: true, //QQQ
									filter(event, player) {
										if (!player.countCards('h', { name: 'guohe' })) return false;
										return player != event.player;
									},
									content() {
										'step 0';
										var goon = get.attitude(player, trigger.player) < 0;
										var next = player.chooseToDiscard(get.prompt('帆兵', trigger.player));
										next.set('filterCard', function (card) {
											return card.name == 'guohe';
										});
										next.set('prompt2', '弃置一张过河拆桥令伤害+1');
										next.set('ai', function (card) {
											if (_status.event.goon) {
												return 8 - get.value(card);
											}
											return 0;
										});
										next.set('goon', goon);
										('step 1');
										if (result.bool) {
											trigger.num++;
										}
									},
								},
								less: {
									audio: true,
									trigger: { global: 'damageBegin' },
									filter(event, player) {
										if (!player.countCards('h', { name: 'guohe' })) return false;
										return true;
									},
									forced: true, //QQQ
									content() {
										'step 0';
										var next = player.chooseToDiscard(get.prompt('帆兵'), function (card) {
											return card.name == 'guohe';
										});
										next.set('prompt2', '弃置一张过河拆桥令伤害-1');
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
											trigger.num--;
										}
									},
								},
							},
							ai: {
								expose: 0.2,
								threaten: 1.5,
							},
						},
						锦弓: {
							trigger: { global: 'useCardEnd' },
							filter(event, player) {
								return event.card && event.card.name == 'guohe';
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return player.canUse('wanjian', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'wanjian' }, list);
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						锦使: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h', { name: 'guohe' }) > 0;
							},
							position: 'h',
							filterCard(card) {
								return card.name == 'guohe';
							},
							content() {
								'step 0';
								event.cards = get.cards(2);
								('step 1');
								if (event.cards.length > 1) {
									player.chooseCardButton('将<锦使>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
										if (ui.selected.buttons.length == 0) return 1;
										return 0;
									});
								} else if (event.cards.length == 1) {
									event._result = { links: event.cards.slice(0), bool: true };
								} else {
									event.finish();
								}
								('step 2');
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
								('step 3');
								if (result.targets.length) {
									result.targets[0].gain(event.togive, 'draw');
									player.line(result.targets[0], 'green');
									game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
									event.goto(1);
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
						槊阵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('qijia'));
										list[i].gain(game.createCard('qijia'));
										list[i].$draw(2);
									}
								}
							},
							group: '槊阵2',
						},
						槊阵2: {
							enable: 'chooseToUse',
							filterCard(card, player) {
								return card.name == 'qijia';
							},
							position: 'h',
							viewAs: { name: 'sha' },
							viewAsFilter(player) {
								if (!player.countCards('h', { name: 'qijia' })) return false;
							},
							prompt: '将一张弃甲曳兵当杀使用',
							check(card) {
								return 4 - get.value(card);
							},
						},
						铁槊: {
							trigger: { global: 'useCardEnd' },
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							usable: 5, //QQQ
							content() {
								var list = game.filterPlayer(function (current) {
									return player.canUse('qijia', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'qijia' }, list);
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						象战: {
							trigger: { global: 'useCardEnd' },
							filter(event, player) {
								return (event.card && event.card.name == 'sha') || event.card.name == 'juedou';
							},
							usable: 5, //QQQ
							content() {
								player.draw(2);
								var list = game.filterPlayer(function (current) {
									return player.canUse('nanman', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'nanman' }, list);
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						蛮女: {
							enable: 'chooseToUse',
							filterCard(card, player) {
								return card.name == 'sha';
							},
							position: 'h',
							viewAs: { name: 'nanman' },
							viewAsFilter(player) {
								if (!player.countCards('h', { name: 'sha' })) return false;
							},
							prompt: '将一张杀当南蛮入侵使用',
							check(card) {
								return 4 - get.value(card);
							},
						},
						蛮力: {
							enable: 'chooseToUse',
							filterCard(card, player) {
								return card.name == 'tengjia';
							},
							position: 'he',
							viewAs: { name: 'nanman' },
							viewAsFilter(player) {
								if (!player.countCards('he', { name: 'tengjia' })) return false;
							},
							prompt: '将一张藤甲当南蛮入侵使用',
							check(card) {
								return 4 - get.value(card);
							},
						},
						霸蛮: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('tengjia'));
										list[i].$draw();
									}
								}
							},
						},
						蛮姑: {
							trigger: { global: 'phaseBegin' },
							content() {
								'step 0';
								player.draw();
								('step 1');
								var target = _status.currentPhase;
								event.target = target;
								player
									.chooseTarget(get.prompt('蛮姑', event.target), function (card, player, target) {
										var source = _status.event.source;
										return true;
									})
									.set('source', target)
									.set('goon', get.damageEffect(target, player, player) > 0)
									.set('ai', function (target) {
										if (!_status.event.goon) return 0;
										var evt = _status.event;
										return get.effect(target, { name: 'juedou' }, evt.source, evt.player);
									});
								('step 2');
								if (result.bool) {
									event.target2 = result.targets[0];
									player.line2([target, event.target2]);
								} else event.finish();
								('step 3');
								target.useCard({ name: 'juedou' }, event.target2, false);
								('step 4');
								var list = game.filterPlayer(function (current) {
									return player.canUse('nanman', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'nanman' }, list);
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						蛮牙: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('nanman'));
										list[i].$draw();
									}
								}
							},
						},
						长蛮: {
							trigger: { source: 'damageEnd' },
							filter(event, player) {
								return event.card && event.card.name == 'nanman';
							},
							content() {
								if (typeof trigger.card.number != 'number') {
									player.draw();
								} else {
									player.draw(trigger.card.number);
								}
								trigger.player.loseHp();
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						暴蛮: {
							trigger: { global: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'nanman';
							},
							content() {
								if (typeof trigger.card.number != 'number') {
									trigger.num += 1;
								} else {
									trigger.num += trigger.card.number;
								}
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						蛮勇: {
							trigger: { global: 'gainEnd' },
							audio: 'ext:士兵扩展包/audio:2',
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'trick') return true;
									}
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('蛮勇'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(3, result.targets[0], 'he', true);
								}
								var list = game.filterPlayer(function (current) {
									return player.canUse('nanman', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'nanman' }, list);
							},
						},
						象袭: {
							trigger: {
								player: ['damageEnd', 'phaseBegin'],
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('象袭'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool && result.targets && result.targets.length) {
									var num = [4, 5, 3, 4, 5, 5].randomGet();
									event.num = num;
									event.num1 = num;
									player.line(result.targets[0], 'green');
									result.targets[0].damage(num);
								}
								('step 2');
								player.draw(event.num1);
								var list = game.filterPlayer(function (current) {
									return player.canUse('nanman', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'nanman' }, list);
								('step 3');
								if (--event.num > 0) {
									player.chooseBool('是否再次发动【象袭】？');
								} else {
									event.finish();
								}
								('step 4');
								if (result.bool) {
									event.goto(2);
								}
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						利槊: {
							trigger: { global: 'useCardEnd' },
							filter(event, player) {
								return event.card && event.card.name == 'qijia';
							},
							usable: 5, //QQQ
							content() {
								player.draw();
								var list = game.filterPlayer(function (current) {
									return player.canUse('sha', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'sha' }, list);
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						拒马: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaBegin',
							},
							check(event, player) {
								var q = game.countPlayer(function (current) {
									return get.attitude(player, current) <= 0;
								});
								if (q > 0) return true;
							},
							prompt: '是否发动<拒马>可以获得一名其他角色一张牌,若该牌不为坐骑牌,你获得该牌点数的护甲;若该牌为坐骑牌,你再获得其一张牌对其造成一点伤害',
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('选择一名其他角色获得其一张牌'), 1, function (card, player, target) {
										return target != player && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										return get.attitude(player, target) <= 0;
									});
								('step 1');
								if (result.bool) {
									var t = result.targets[0];
									event.t = t;
									player.gainPlayerCard(event.t, 'he', 1, true);
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									var reca = result.cards[0];
									if (get.subtype(reca) == 'equip3' || get.subtype(reca) == 'equip4') {
										player.gainPlayerCard(event.t, 'he', 1, true);
										event.t.damage();
									} else {
										player.changeHujia(reca.number);
									}
								}
							},
						},
						巾兵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('sha', null, null, 'thunder'));
										list[i].$draw();
									}
								}
							},
						},
						短刀: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return get.distance(player, event.target) <= 2;
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								player.draw();
								player.gainPlayerCard(trigger.target, 'he', true);
								trigger.target.damage();
							},
							ai: {
								threaten: 1.1,
							},
							group: '短刀2',
						},
						短刀2: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 1;
								},
							},
						},
						巾令: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('sha', 'spade', null, 'thunder'));
										list[i].gain(game.createCard('shan'));
										list[i].$draw(2);
									}
								}
							},
						},
						挥雷hl: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.nature == 'thunder';
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('shan'));
										list[i].$draw();
									}
								}
							},
						},
						枭雷xl: {
							trigger: {
								player: ['damageEnd', 'phaseBegin'],
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('枭雷xl'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool && result.targets && result.targets.length) {
									var num = [2, 2, 2, 2, 1, 1].randomGet();
									player.line(result.targets[0], 'green');
									result.targets[0].damage('thunder', num);
									result.targets[0].chooseToDiscard('he', true, num);
								}
							},
						},
						落草lc: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'black') return 2;
									return -0.5;
								});
								('step 1');
								if (result.bool) {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].gain(game.createCard('shan'));
											list[i].$draw();
										}
									}
								} else {
									trigger.cancel();
								}
							},
						},
						骁志xz: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaEnd',
								player: 'phaseBegin',
							},
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('骁志xz')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 'he', true);
									var target = result.targets[0];
									event.target = target;
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									if (get.tag(result.cards[0], 'damage')) {
										var list = game.filterPlayer(function (current) {
											return current.isEnemiesOf(player);
										});
										list.sort(lib.sort.seat);
										player.useCard({ name: 'sha' }, list, false);
									}
								}
							},
						},
						暴动bd: {
							nobracket: true,
							trigger: {
								player: 'phaseDrawAfter',
							},
							forced: true, //QQQ
							mark: true,
							content() {
								'step 0';
								player
									.chooseTarget('<span style="color: red">暴动</span>:是否选择1名其他角色,视为对其使用1张"雷杀"', function (card, player, target) {
										return lib.filter.filterTarget({ name: 'sha', nature: 'thunder' }, player, target);
									})
									.set('ai', function (target) {
										if (player.getEnemies().includes(target)) {
											if (get.mode() == 'identity' && player.identity == 'fan' && target.identity == 'zhu') return 100;
											return true;
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'white');
									player.useCard({ name: 'sha', nature: 'thunder' }, target, false);
									player.addTempSkill('暴动bd_draw', { player: 'useCardEnd' });
								} else event.finish();
							},
							subSkill: {
								draw: {
									trigger: { source: 'damageAfter' },
									forced: true,
									popup: false,
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										player.draw();
										player.changeHujia();
										game.log(player, '<span style="color: red">暴动技能效果生效</span>');
									},
								},
							},
							ai: {
								threaten: 2,
								expose: 0.1,
							},
						},
						尸魃shiba: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'dieAfter' },
							forced: true, //QQQ
							content() {
								'step 0';
								var list = [];
								for (var i = 0; i < game.dead.length; i++) {
									list.push(game.dead[i].name);
								}
								if (list.length == 0) event.finish();
								var dialog = ui.create.dialog('请选择一名角色', [list, 'character']);
								var next = player.chooseButton(dialog);
								next.ai = function (button) {
									for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
									return get.attitude(_status.event.player, game.dead[i]) - 2;
								};
								next.filterButton = function (button) {
									for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
									return true;
								};
								('step 1');
								if (result.bool) {
									for (var i = 0; i < game.dead.length && game.dead[i].name != result.links[0]; i++);
									var dead = game.dead[i];
									dead.revive();
									dead.hp = 4;
									dead.draw(4);
									if (dead.identity != 'zhu') dead.identity = player.identity;
									dead.setIdentity(player.identity);
									dead.node.identity.dataset.color = player.identity;
									if (lib.config.mode == 'guozhan') {
										dead.identity = dead.storage.ll.identity;
										dead.setIdentity();
										dead._group = player.identity;
										dead.identityShown = true;
										lib.character[dead.name][1] = player.identity;
									}
									dead.phase('nodelay');
								}
							},
							group: '尸魃shiba2',
						},
						尸魃shiba2: {
							trigger: { player: 'dieBefore' },
							forced: true, //QQQ
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('尸魃shiba2'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].init('huangjinshiba黄巾尸魃');
								}
							},
						},
						投矛: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player.draw(3);
								player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
									if (get.position(card) == 'e') return -1;
									if (card.name == 'shan') return 1;
									if (get.type(card) == 'equip') return 0.5;
									return 0;
								});
								('step 1');
								trigger.target.gain(result.cards, player);
								player.$give(result.cards, trigger.target);
								event.card = result.cards[0];
								('step 2');
								if (get.type(event.card) == 'basic') trigger.target.damage(event.card.number);
							},
							ai: {
								threaten: 1.1,
							},
							group: ['投矛2', '投矛3'],
						},
						投矛2: {
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
							},
						},
						投矛3: {
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.card.name == 'sha') {
									return game.hasPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
								}
								return false;
							},
							forced: true,
							silent: true,
							popup: false,
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								for (var i = 0; i < list.length; i++) {
									if (!trigger.targets.includes(list[i]) && player.canUse('sha', list[i], false)) {
										player.line(list[i], trigger.card.nature);
										trigger.targets.push(list[i]);
									}
								}
							},
						},
						盗徒: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.nature == 'thunder';
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'black' || card.name == 'shan') return 2;
									return -0.5;
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(trigger.player, 'he', true);
								}
							},
						},
						传道cd: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								if (get.color(event.card) == 'black') return true;
								return false;
							},
							content() {
								'step 0';
								event.card = get.cardPile(function (card) {
									if (card.suit == 'spade') return true;
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
									if (card.name == 'shan') return true;
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
							},
						},
						利斧: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								if (get.color(event.card) == 'black') return true;
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('利斧'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard(2, 'he', true);
									result.targets[0].damage();
								}
							},
						},
						长刀: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								if (get.color(event.card) == 'black') return true;
								return false;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'black' || get.type(card) == 'basic') return 2;
									return -0.5;
								});
								('step 1');
								if (result.bool) {
									player.draw();
									trigger.target.damage();
								}
							},
						},
						拒象: {
							trigger: { global: 'damageBegin' },
							filter(event, player) {
								return event.card && get.type(event.card) == 'trick';
							},
							content() {
								trigger.cancel();
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								for (var i = 0; i < list.length; i++) {
									player.line(list[i], 'fire');
									list[i].damage('fire');
								}
								player.draw(2);
								player.phase('nodelay');
							},
							group: '拒象2',
						},
						拒象2: {
							trigger: { player: 'phaseEnd' },
							content() {
								player.draw(2);
								player.phaseUse();
							},
						},
						巾祭: {
							trigger: { global: 'loseEnd' },
							audio: 'ext:士兵扩展包/audio:2',
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'basic') return true;
									}
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('巾祭'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(2, result.targets[0], 'he', true);
								}
								var list = game.filterPlayer(function (current) {
									return player.canUse('sha', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'sha', nature: 'thunder' }, list, false);
							},
						},
						巾酒: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('sha', 'spade', null, 'thunder'));
										list[i].gain(game.createCard('jiu', 'spade', null));
										list[i].gain(game.createCard('shan'));
										list[i].$draw(3);
									}
								}
							},
							group: '巾酒2',
						},
						巾酒2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'judge' },
							forced: true, //QQQ
							filter(event, player) {
								if (!player.countCards('h', { name: 'jiu' })) return false;
								return true;
							},
							content() {
								'step 0';
								player
									.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('巾酒2'))
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
									}
									trigger.player.judging[0].discard();
									trigger.player.judging[0] = result.cards[0];
									if (!get.owner(result.cards[0], 'judge')) {
										trigger.position.appendChild(result.cards[0]);
									}
									game.log(trigger.player, '的判定牌改为', result.cards[0]);
								}
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						巾骑: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:士兵扩展包/audio:2',
							position: 'he',
							filterCard: true,
							content() {
								'step 0';
								player.addTempSkill('巾骑2');
								('step 1');
								var card = cards[0];
								if (card.name == 'shan') {
									player
										.chooseTarget('是否弃置一名角色的一张牌？', function (card, player, target) {
											return player != target && target.countCards('he') > 0;
										})
										.set('ai', function (target) {
											var player = _status.event.player;
											if (get.attitude(player, target) < 0) {
												return Math.max(0.5, get.effect(target, { name: 'sha' }, player, player));
											}
											return 0;
										});
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.line(result.targets, 'green');
									event.target = result.targets[0];
									player.discardPlayerCard(event.target, 'he', true).ai = get.buttonValue;
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						巾骑2: {
							mod: {
								attackFrom() {
									return -Infinity;
								},
							},
						},
						赐巾: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								if (get.color(event.card) == 'black') return true;
								return false;
							},
							content() {
								'step 0';
								event.card = get.cardPile(function (card) {
									if (card.suit == 'spade') return true;
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
									if (card.name == 'shan') return true;
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
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('shandian'));
										list[i].$draw();
									}
								}
							},
						},
						夜行: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'loseEnd' },
							forced: true,
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								return true;
							},
							content() {
								player.changeHujia();
							},
							ai: {
								threaten: 0.7,
							},
						},
						匿刺: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return get.distance(player, event.target) <= 1;
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								player.draw();
								trigger.directHit = true;
							},
							ai: {
								threaten: 1.1,
							},
						},
						迅兵: {
							audio: 'ext:士兵扩展包/audio:2',
							gainnable: true,
							trigger: { global: 'phaseUseBegin' },
							logTarget: 'player',
							check(event, player) {
								return get.attitude(player, event.player) >= 0;
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								player.chooseCard(1, 'he', true, '交给' + get.translation(trigger.player) + '一张牌').set('ai', function (card) {
									if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return -1;
									if (get.tag(card, 'damage')) return 1;
									if (get.type(card) == 'equip') return 1;
									return 0;
								});
								('step 2');
								trigger.player.gain(result.cards, player);
								if (player == game.me || trigger.player == game.me) player.$give(result.cards, trigger.player);
								else player.$give(1, trigger.player);
								trigger.player.addTempSkill('迅兵2', 'phaseAfter');
								trigger.player.storage.迅兵 = player;
								('step 3');
								player.chooseTarget(get.prompt('迅兵')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 4');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
							ai: {
								threaten: 1.1,
								expose: 0.3,
							},
						},
						迅兵2: {
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
							},
						},
						蜀印: {
							trigger: {
								player: ['damageEnd', 'phaseBegin'],
							},
							audio: 'ext:士兵扩展包/audio:2',
							forced: true,
							popup: false,
							content() {
								var num1 = 0;
								var num2 = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].group != 'shu') num1++;
								}
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].group == 'shu') num2++;
								}
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].group != 'shu') game.players[i].chooseToDiscard('he', true, num1);
								}
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].group == 'shu') {
										game.players[i].gainMaxHp(num2);
										game.players[i].recover(num2);
										for (var h = 0; h < num2; h++) {
											game.players[i].gain(game.createCard('sha'));
											game.players[i].$draw();
										}
										game.players[i].draw(num2);
									}
								}
							},
						},
						魏印: {
							trigger: {
								player: ['damageEnd', 'phaseBegin'],
							},
							audio: 'ext:士兵扩展包/audio:2',
							forced: true,
							popup: false,
							content() {
								var num1 = 0;
								var num2 = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].group != 'wei') num1++;
								}
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].group == 'wei') num2++;
								}
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].group != 'wei') game.players[i].chooseToDiscard('he', true, num1);
								}
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].group == 'wei') {
										game.players[i].addSkill('魏印1');
										for (var h = 0; h < num2; h++) {
											game.players[i].gain(game.createCard('tao'));
											game.players[i].$draw();
										}
										game.players[i].draw(num2);
									}
								}
							},
						},
						魏印1: {
							mod: {
								maxHandcard(player, num) {
									var num2 = 0;
									for (var i = 0; i < game.players.length; i++) {
										if (game.players[i].group == 'wei') num2++;
									}
									return num + num2;
								},
							},
						},
						巾姬: {
							trigger: { global: 'useCardEnd' },
							audio: 'ext:士兵扩展包/audio:2',
							filter(event, player) {
								return get.type(event.card) == 'basic';
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('巾姬')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true, 'visible');
								}
								('step 2');
								player.chooseTarget(get.prompt('巾姬')).set('ai', function (target) {
									var player = _status.event.player;
									return get.damageEffect(target, player, player);
								});
								('step 3');
								if (result.bool && result.targets && result.targets.length) {
									var num = [1, 2].randomGet();
									player.line(result.targets[0], 'green');
									result.targets[0].damage('thunder', num);
									player.recover(num);
								}
							},
						},
						巾道: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('he') > 0;
							},
							// filterCard:true,
							// position:"he",
							content() {
								player.discard(player.getCards('he'));
								player.gain(target.getCards('he'));
								target.$give(target.countCards('he'), player);
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('shan'));
										list[i].$draw();
									}
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
						同命tm: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							forced: true,
							mark: true,
							marktext: '<span style="color: red">同</span>',
							intro: {
								content(storage) {
									return '已使用该技能' + storage + '次';
								},
							},
							init(player) {
								player.storage.同命tm = 0;
							},
							content() {
								if (typeof player.storage.同命tm == 'number') {
									player.storage.同命tm++;
								} else {
									player.storage.同命tm = 1;
								}
								player.markSkill('同命tm');
								var target = player.getEnemies().randomGet();
								target.damage(player.storage.同命tm);
							},
						},
						荆棘: {
							trigger: { global: 'phaseEnd' },
							content() {
								'step 0';
								trigger.player.chooseToDiscard('h', { name: 'sha' }).set('ai', function (card) {
									if (_status.event.player.hp == 1) return 10 - get.value(card);
									return 9 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									player.recover();
								} else {
									trigger.player.damage();
								}
							},
							ai: {
								expose: 0.3,
								threaten: 1.3,
							},
						},
						巾旗: {
							trigger: { global: 'phaseEnd' },
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								'step 0';
								trigger.player.chooseToDiscard('h', { name: 'shan' }).set('ai', function (card) {
									if (_status.event.player.hp == 1) return 10 - get.value(card);
									return 9 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									player.recover([1, 3].randomGet());
								} else {
									trigger.player.damage('thunder', [1, 2].randomGet());
								}
							},
							ai: {
								expose: 0.3,
								threaten: 1.3,
							},
						},
						近斗: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return get.distance(player, event.target) <= 1;
							},
							content() {
								player.draw();
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('sha'));
										list[i].gain(game.createCard('juedou'));
										list[i].$draw(2);
									}
								}
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player) && get.distance(player, current) <= 1;
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'juedou' }, list);
							},
							ai: {
								threaten: 1.1,
							},
						},
						玺灵: {
							trigger: { player: 'phaseUseBegin' },
							forced: true,
							filter(event, player) {
								var enemies = player.getEnemies();
								for (var i = 0; i < enemies.length; i++) {
									if (enemies[i].countCards('h')) return true;
								}
								return false;
							},
							getList(player) {
								var list = [];
								var enemies = player.getEnemies();
								for (var i = 0; i < enemies.length; i++) {
									list.addArray(enemies[i].getCards('h'));
								}
								return list;
							},
							content() {
								var list = lib.skill.玺灵.getList(player);
								if (list.length) {
									var card = list.randomGet();
									var fake = game.createCard(card);
									fake.玺灵_link = card;
									player.gain(fake, 'draw')._triggered = null;
									fake.classList.add('glow');
									fake._destroy = '玺灵';
								}
							},
							group: ['玺灵_change', '玺灵_use', '玺灵_lose'],
							subSkill: {
								change: {
									trigger: { player: 'useCard' },
									silent: true,
									filter(event, player) {
										return player.hasCard(function (card) {
											return card.玺灵_link ? true : false;
										}, 'h');
									},
									content() {
										var list = lib.skill.玺灵.getList(player);
										var hs = player.getCards('h', function (card) {
											return card.玺灵_link ? true : false;
										});
										for (var i = 0; i < hs.length; i++) {
											var current = hs[i].玺灵_link;
											hs[i].玺灵_link = list.randomGet(current);
											if (!hs[i].玺灵_link) {
												hs[i].玺灵_link = current;
											}
											hs[i].init(hs[i].玺灵_link);
										}
									},
								},
								use: {
									trigger: { player: 'useCardBefore' },
									silent: true,
									filter(event, player) {
										return event.card.玺灵_link ? true : false;
									},
									content() {
										var link = trigger.card.玺灵_link;
										var target = get.owner(link);
										if (target && target != player) {
											trigger.cards.add(trigger.card);
											player.lose(trigger.cards, ui.discardPile);
											trigger.card = link;
											trigger.cards = [link];
											trigger.card.cards = trigger.cards;
											target.lose(link, ui.discardPile);
											game.log(target, '失去了', link);
										} else {
											player.lose(trigger.card);
											trigger.cancel();
										}
									},
								},
								lose: {
									trigger: { player: 'phaseUseEnd', global: 'loseEnd' },
									silent: true,
									filter(event, player) {
										if (event.name == 'lose') {
											return lib.skill.玺灵.getList(player).length == 0;
										}
										return true;
									},
									content() {
										var hs = player.getCards('h', function (card) {
											return card.玺灵_link ? true : false;
										});
										if (hs.length) {
											player.lose(hs)._triggered = null;
										}
									},
								},
							},
							ai: {
								threaten: 1.3,
							},
						},
						宦刑2: {
							audio: true,
							trigger: { global: 'shaBegin' },
							forced: true, //QQQ
							filter(event, player) {
								if (!player.countCards('h', { type: 'trick', color: 'black' })) return false;
								return player != event.player;
							},
							content() {
								'step 0';
								var goon = get.attitude(player, trigger.player) < 0;
								var next = player.chooseToDiscard(get.prompt('宦刑2', trigger.player));
								next.set('filterCard', function (card) {
									return get.type(card) == 'trick' && get.color(card) == 'black';
								});
								next.set('prompt2', '弃置一张黑色锦囊令此杀无法被闪避');
								next.set('ai', function (card) {
									if (_status.event.goon) {
										return 8 - get.value(card);
									}
									return 0;
								});
								next.set('goon', goon);
								('step 1');
								if (result.bool) {
									trigger.directHit = true;
								}
							},
						},
						宦刑: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								event.togain = [];
								event.num = Math.min(ui.discardPile.childNodes.length, 1);
								if (event.num) {
									for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
										var current = ui.discardPile.childNodes[i];
										if (get.color(current) == 'black' && get.type(current) == 'trick') event.togain.push(current);
										if (event.togain.length == event.num) {
											break;
										}
									}
								}
								if (event.togain.length) player.gain(event.togain, 'gain2');
							},
							group: '宦刑2',
						},
						肋贿: {
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('肋贿'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									if (result.targets[0].countCards('he') > 1) result.targets[0].chooseCard(2, 'he', '交给' + get.translation(player) + '2张牌');
									event.target = result.targets[0];
								}
								('step 2');
								if (result.cards.length > 1) {
									player.gain(result.cards, event.target);
									event.target.$give(result.cards, player);
								} else {
									event.target.damage();
								}
							},
						},
						宫纠: {
							audio: 'ext:士兵扩展包/audio:2',
							usable: 1,
							trigger: {
								player: 'useCardEnd',
							},
							forced: true,
							filter(event, player) {
								return get.color(event.card) == 'black' && get.type(event.card) == 'trick' && event.cards[0] && event.cards[0] == event.card;
							},
							content() {
								'step 0';
								var card = get.cardPile(function (card) {
									return get.color(card) == 'black' && get.type(card) == 'trick';
								});
								event.card = card;
								('step 1');
								if (event.card) {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].gain(game.createCard(event.card), 'gain2');
										}
									}
								}
							},
							ai: {
								threaten: 1.4,
							},
						},
						道信: {
							trigger: { player: 'phaseBegin' },
							filter(event, player) {
								return player.countCards('he', { color: 'red' }) > 0;
							},
							content() {
								'step 0';
								player.chooseToDiscard('he', true, function (card) {
									return get.color(card) == 'red';
								});
								('step 1');
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									var listcard = ['juedou', 'sha'];
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard(listcard.randomGet(), 'spade', null));
										list[i].gain(game.createCard('shan'));
										list[i].$draw(2);
									}
								}
							},
						},
						狂信: {
							trigger: { player: 'phaseBegin' },
							filter(event, player) {
								return player.countCards('he', { color: 'red' }) > 0;
							},
							content() {
								'step 0';
								player.chooseToDiscard('he', true, function (card) {
									return get.color(card) == 'red';
								});
								('step 1');
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									var listcard = ['juedou', 'sha'];
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard(listcard.randomGet(), 'spade', null));
										list[i].gain(game.createCard('shan'));
										list[i].$draw(2);
									}
								}
								('step 2');
								var listem = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								listem.sort(lib.sort.seat);
								if (listem.length) {
									player.line(listem, 'green');
									for (var i = 0; i < listem.length; i++) {
										listem[i].chooseToDiscard('he', true, function (card) {
											return get.color(card) == 'black';
										});
									}
								}
							},
						},
						远避: {
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								if (!event.source) return false;
								return true;
							},
							_priority: -9.5,
							content() {
								trigger.num = trigger.source.getAttackRange() < 4 ? 0 : 1;
							},
						},
						备令: {
							trigger: {
								player: 'damageBegin',
							},
							content() {
								'step 0';
								var card = get.cards();
								event.card = card;
								player.showCards(event.card);
								('step 1');
								player.chooseCard('是否发动备令？');
								('step 2');
								if (result.bool) {
									player.showCards(result.cards[0]);
									var number1 = result.cards[0].number;
									var number2 = event.card[0].number;
									if (number1 > number2) {
										trigger.cancel();
										player.draw();
									}
								}
							},
						},
						操刀: {
							trigger: { source: 'damageBegin' },
							filter(event, player, card) {
								if (!player.countCards('he', { color: 'black' })) return false;
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								'step 0';
								var goon = get.attitude(player, trigger.player) < 0;
								var next = player.chooseToDiscard(get.prompt('操刀', trigger.player));
								next.set('filterCard', function (card) {
									return get.color(card) == 'black';
								});
								next.set('prompt2', '弃置一张黑色牌令伤害+1');
								next.set('ai', function (card) {
									if (_status.event.goon) {
										return 8 - get.value(card);
									}
									return 0;
								});
								next.set('goon', goon);
								('step 1');
								if (result.bool) {
									trigger.num++;
								}
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha' && get.color(card) == 'black') return Infinity;
								},
							},
						},
						利刀: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaAfter',
							},
							usable: 1,
							content() {
								'step 0';
								player.draw();
								event.card = get.cards()[0];
								player.showCards(event.card);
								('step 1');
								if (event.card.number <= 5) trigger.target.damage(event.card.number);
								else player.gain(event.card, 'log');
							},
							ai: {
								threaten: 4,
								nodu: true,
							},
						},
						轻盾: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true, //QQQ
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'red') return 2;
									return -0.5;
								});
								('step 1');
								if (result.bool) {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].changeHujia();
										}
									}
								}
							},
						},
						涯枪: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaBegin',
							},
							content() {
								'step 0';
								event.card = get.cards()[0];
								game.broadcast(function (card) {
									ui.arena.classList.add('thrownhighlight');
									card.copy('thrown', 'center', 'thrownhighlight', ui.arena).addTempClass('start');
								}, event.card);
								event.node = event.card.copy('thrown', 'center', 'thrownhighlight', ui.arena).addTempClass('start');
								ui.arena.classList.add('thrownhighlight');
								game.addVideo('thrownhighlight1');
								game.addVideo('centernode', null, get.cardInfo(event.card));
								if (get.type(event.card, 'trick') == get.type(trigger.card, 'trick')) {
									player
										.chooseTarget('选择获得此牌的角色')
										.set('ai', function (target) {
											var att = get.attitude(_status.event.player, target);
											if (_status.event.du) {
												if (target.hasSkillTag('nodu')) return 0;
												return -att;
											}
											if (att > 0) {
												return att + Math.max(0, 5 - target.countCards('h'));
											}
											return att;
										})
										.set('du', event.card.name == 'du');
								} else {
									player.chooseBool('是否弃置' + get.translation(event.card) + '？');
									event.disbool = true;
								}
								('step 1');
								if (event.disbool) {
									if (!result.bool) {
										game.log(player, '展示了', event.card);
										ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
									} else {
										game.log(player, '展示并弃掉了', event.card);
										event.card.discard();
									}
									player.chooseTarget('选择一名角色,弃置其一张牌');
								} else if (result.targets) {
									player.line(result.targets, 'green');
									result.targets[0].gain(event.card, 'log');
									result.targets[0].draw(2);
									result.targets[0].recover();
								} else {
									game.log(player, '展示并弃掉了', event.card);
									event.card.discard();
									player.chooseTarget('选择一名角色,弃置其一张牌');
								}
								game.addVideo('thrownhighlight2');
								ui.arena.classList.remove('thrownhighlight');
								('step 2');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 'he', true);
								}
							},
						},
						龙扈: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'shaBegin',
								global: 'damageBegin',
							},
							usable: 5, //QQQ
							content() {
								'step 0';
								event.card = get.cards()[0];
								game.broadcast(function (card) {
									ui.arena.classList.add('thrownhighlight');
									card.copy('thrown', 'center', 'thrownhighlight', ui.arena).addTempClass('start');
								}, event.card);
								event.node = event.card.copy('thrown', 'center', 'thrownhighlight', ui.arena).addTempClass('start');
								ui.arena.classList.add('thrownhighlight');
								game.addVideo('thrownhighlight1');
								game.addVideo('centernode', null, get.cardInfo(event.card));
								if (get.type(event.card, 'trick') == get.type(trigger.card, 'trick')) {
									player
										.chooseTarget('选择获得此牌的角色')
										.set('ai', function (target) {
											var att = get.attitude(_status.event.player, target);
											if (_status.event.du) {
												if (target.hasSkillTag('nodu')) return 0;
												return -att;
											}
											if (att > 0) {
												return att + Math.max(0, 5 - target.countCards('h'));
											}
											return att;
										})
										.set('du', event.card.name == 'du');
								} else {
									player.chooseBool('是否弃置' + get.translation(event.card) + '？');
									event.disbool = true;
								}
								('step 1');
								if (event.disbool) {
									if (!result.bool) {
										game.log(player, '展示了', event.card);
										ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
									} else {
										game.log(player, '展示并弃掉了', event.card);
										event.card.discard();
									}
									player.chooseTarget('选择一名角色,弃置其一张牌');
								} else if (result.targets) {
									player.line(result.targets, 'green');
									result.targets[0].gain(event.card, 'log');
									result.targets[0].draw();
									result.targets[0].recover();
								} else {
									game.log(player, '展示并弃掉了', event.card);
									event.card.discard();
									player.chooseTarget('选择一名角色,弃置其一张牌');
								}
								game.addVideo('thrownhighlight2');
								ui.arena.classList.remove('thrownhighlight');
								('step 2');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 'he', true);
									result.targets[0].loseHp();
								}
							},
						},
						大刀卫: {
							audio: 'ext:士兵扩展包/audio:2',
							srlose: true,
							nobracket: true,
							trigger: {
								global: 'shaBegin',
							},
							filter(event, player) {
								return event.player != player;
							},
							forced: true, //QQQ
							content() {
								'step 0';
								player.chooseBool(get.prompt('大刀卫', trigger.player)).set('ai', () => -get.attitude(player, trigger.player)); //QQQ
								('step 1');
								if (result.bool) {
									event.cards = get.cards(3);
									player.showCards(event.cards, '大刀卫');
								} else {
									event.finish();
								}
								('step 2');
								for (var i = 0; i < cards.length; i++) {
									if (get.type(cards[i]) == 'basic') player.useCard({ name: 'sha' }, trigger.player, false);
									if (get.type(cards[i]) == 'equip') trigger.player.damage();
								}
								if (trigger.player.countCards('he')) {
									trigger.player.chooseControl('选项一', '选项二').set('prompt', '大刀卫<br><br><div class="text">选项一:令' + get.translation(player) + '获得你一张手牌并根据展示牌类型执行相应效果</div><br><div class="text">选项二:即将对' + get.translation(trigger.target) + '生效的杀无效</div>').ai = function () {
										if (ai.get.effect(trigger.target, { name: 'sha' }, trigger.player) < 0) return '选项二';
										return '选项一';
									};
								} else {
									trigger.untrigger();
									trigger.finish();
									event.finish();
								}
								('step 3');
								if (result.control == '选项一') {
									player.gainPlayerCard('he', trigger.player, true);
								} else {
									trigger.untrigger();
									trigger.finish();
								}
							},
							ai: {
								expose: 1,
								result: {
									target: -3,
								},
							},
						},
						虎刀: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								event.cards = get.cards(3);
								player.showCards(event.cards, '虎刀');
								('step 1');
								for (var i = 0; i < cards.length; i++) {
									if (get.type(cards[i]) != 'basic' && cards[i].name != 'juedou' && (get.type(cards[i]) != 'equip' || get.subtype(cards[i]) != 'equip1')) {
										cards[i].discard();
										cards.splice(i--, 1);
									}
								}
								player.gain(cards, 'gain2');
								if (trigger.player.isFriendsOf(player)) player.addTempSkill('虎刀2', { player: 'shaAfter' });
								else player.addTempSkill('虎刀1', { player: 'shaAfter' });
							},
						},
						虎刀2: {
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
						虎刀1: {
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
							},
							forced: true,
							content() {
								trigger.num--;
							},
							ai: {
								damageBonus: true,
							},
						},
						吹号: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardAfter' },
							filter(event, player) {
								if (!player.countCards('he', { color: get.color(event.card) })) return false;
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
							content() {
								player.chooseToDiscard('he', true, function (card) {
									return get.color(card) == get.color(trigger.card);
								});
								var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
								player.useCard(card, (trigger._targets || trigger.targets).slice(0));
							},
						},
						号角: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('号角'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].goMad({ player: 'phaseAfter' });
											list[i].addTempSkill('号角1', { player: 'phaseAfter' });
										}
									}
								}
							},
						},
						号角1: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { source: 'damageBegin' },
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								damageBonus: true,
							},
						},
						锐卒: {
							usable: 1,
							trigger: { global: ['shaEnd', 'damageEnd'] },
							content() {
								player.draw();
								if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0]) == 'd') {
									player.gain(trigger.cards);
									player.$gain2(trigger.cards);
								}
							},
						},
						玉玺: {
							trigger: { global: 'phaseDrawBegin' },
							content() {
								trigger.num++;
							},
							ai: {
								threaten: 1.3,
							},
							group: '玉玺2',
						},
						玉玺2: {
							trigger: { global: 'phaseUseBegin' },
							filter(event, player) {
								if (player.isUnseen()) return false;
								return game.hasPlayer(function (current) {
									return event.player.canUse('zhibi', current);
								});
							},
							content() {
								'step 0';
								trigger.player.chooseTarget(
									'玉玺:选择知己知彼的目标',
									function (card, player, target) {
										return trigger.player.canUse({ name: 'zhibi' }, target);
									},
									true
								);
								('step 1');
								if (result.bool) {
									trigger.player.useCard({ name: 'zhibi' }, result.targets);
								}
							},
						},
						老倔: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'phaseBegin' },
							filter(event, player) {
								return event.player != player;
							},
							content() {
								trigger.player.addTempSkill('老倔2', { player: 'phaseAfter' });
								trigger.player.storage.老倔 = player;
								player.phase('nodelay');
							},
						},
						老倔2: {
							mod: {
								globalFrom(from, to) {
									if (to == from.storage.老倔) {
										return -Infinity;
									}
								},
							},
						},
						疆兵: {
							audio: 'ext:士兵扩展包/audio:2',
							usable: 1,
							trigger: { player: 'damageBegin' },
							forced: true,
							filter(event, player) {
								if (event.source && player != event.source && get.distance(event.source, player) <= 1) return true;
								return false;
							},
							content() {
								trigger.num++;
							},
						},
						珞阵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player
									.chooseTarget([1, 2], get.prompt('珞阵'), function (card, player, target) {
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
								player.draw(trigger.card.number);
								player
									.chooseTarget(get.prompt('珞阵'), function (card, player, target) {
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
						磐义: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardBegin' },
							forced: true,
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							content() {
								'step 0';
								player
									.chooseTarget([1, 2], get.prompt('磐义'), function (card, player, target) {
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
								player.recover();
								player
									.chooseTarget(get.prompt('磐义'), function (card, player, target) {
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
						烦营: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:士兵扩展包/audio:2',
							position: 'he',
							filterCard: true,
							content() {
								'step 0';
								player.addTempSkill('烦营2');
								('step 1');
								player
									.chooseTarget('是否弃置一名角色的一张牌？', function (card, player, target) {
										return player != target && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (get.attitude(player, target) < 0) {
											return Math.max(0.5, get.effect(target, { name: 'sha' }, player, player));
										}
										return 0;
									});
								('step 2');
								if (result.bool) {
									player.line(result.targets, 'green');
									event.target = result.targets[0];
									player.discardPlayerCard(event.target, 'he', true).ai = get.buttonValue;
									player.draw(2);
									var list = game.filterPlayer(function (current) {
										return player.canUse('sha', current) && current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									player.useCard({ name: 'sha' }, list, false);
								}
								('step 3');
								var num = 0;
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								for (var i = 0; i < list.length; i++) {
									num += list[i].maxHp - list[i].hp;
								}
								player.changeHujia(num);
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						烦营2: {
							mod: {
								attackFrom() {
									return -Infinity;
								},
							},
						},
						烦部: {
							group: '烦部2',
							usable: 5, //QQQ
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							filterTarget: true,
							content() {
								'step 0';
								event.players = game.filterPlayer(function (current) {
									return current != target;
								});
								event.players.sortBySeat(target);
								('step 1');
								if (event.players.length) {
									event.current = event.players.shift();
									event.current.addTempClass('target');
									player.line(event.current, 'green');
									if (event.current.countCards('he') && target.isAlive()) {
										event.current
											.chooseToDiscard('he', '弃置一张牌视为其对你使用杀或让' + get.translation(target) + '摸2张牌')
											.set('ai', function (card) {
												if (get.attitude(_status.event.player, _status.event.target) < 0) return 7 - get.value(card);
												return -1;
											})
											.set('target', target);
										event.tempbool = false;
									} else {
										event.tempbool = true;
									}
								} else {
									event.finish();
								}
								('step 2');
								if (event.tempbool || result.bool == false) {
									target.draw(2);
								} else player.useCard({ name: 'sha' }, event.current, false);
								event.goto(1);
							},
							ai: {
								order: 5,
								result: {
									target(player, target) {
										if (player.hp > 2) {
											if (game.phaseNumber < game.players.length * 2) return 0;
										}
										var num = 0,
											players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (players[i] != target && get.distance(players[i], target, 'attack') <= 1) {
												num++;
											}
										}
										return num;
									},
								},
							},
						},
						烦部2: {
							trigger: { player: 'shaBegin' },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								var num = 0;
								for (var i = 0; i < list.length; i++) {
									num += list[i].maxHp - list[i].hp;
								}
								player.changeHujia(num);
							},
						},
						粮队: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								event.cards = get.cards(player.maxHp);
								player.chooseCardButton(event.cards, [1, player.maxHp - player.hp]);
								('step 1');
								var cards2 = [];
								for (var i = 0; i < result.buttons.length; i++) {
									cards.remove(result.buttons[i].link);
									cards2.push(result.buttons[i].link);
								}
								if (cards2.length) {
									player.gain(cards2);
									player.$gain(cards2);
								}
								for (var i = 0; i < cards.length; i++) {
									ui.discardPile.appendChild(cards[i]);
								}
								var list = ['sha', 'shan', 'tao', 'jiu', 'taoyuan', 'wugu', 'juedou', 'tiesuo', 'guohe', 'shunshou', 'wuzhong'];
								if (get.mode() == 'guozhan') {
									list = list.concat(['xietianzi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan', 'yuanjiao']);
								}
								var realname = list.randomGet();
								var yfjs = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (yfjs.length) {
									player.line(yfjs, 'green');
									for (var i = 0; i < yfjs.length; i++) {
										yfjs[i].gain(game.createCard(realname));
										yfjs[i].gain(game.createCard(realname));
										yfjs[i].$draw(2);
									}
								}
							},
							ai: {
								order: 8,
								result: {
									player: 2,
								},
							},
						},
						淮河: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								player.draw();
								var list = game.filterPlayer(function (current) {
									return player.canUse('shuiyanqijunx', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'shuiyanqijunx' }, list);
							},
							ai: {
								order: 7,
								result: {
									target: 1,
								},
							},
							group: '淮河2',
						},
						淮河2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('shuiyanqijunx'));
										list[i].$draw();
									}
								}
							},
						},
						嘉卫: {
							trigger: { global: 'shaBegin' },
							usable: 1,
							content() {
								'step 0';
								player.chooseToDiscard('he', true, [1, player.countCards('he')]);
								('step 1');
								player.draw(result.cards.length + 1);
								trigger.target.changeHujia(result.cards.length + 1);
							},
						},
						吴侍: {
							trigger: { global: 'loseEnd' },
							usable: 1,
							content() {
								var liem = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								liem.sort(lib.sort.seat);
								player.useCard({ name: 'juedou' }, liem);
								var num = 0;
								for (var i = 0; i < liem.length; i++) {
									num += liem[i].maxHp - liem[i].hp;
								}
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].changeHujia(num);
									}
								}
							},
						},
						哨卫: {
							trigger: { global: 'shaBegin' },
							filter: (event, player) => event.player.countCards('he'),
							check: (event, player) => event.player.isEnemiesOf(player),
							async content(event, trigger, player) {
								//QQQ
								player.draw();
								var { result } = await player.discardPlayerCard('he', trigger.player, 1, 'visible');
								if (result.cards && result.cards[0] && get.type(result.cards[0]) == 'basic') trigger.cancel();
							},
						},
						探马: {
							trigger: { global: 'shaBegin', player: 'phaseBegin' },
							usable: 1,
							content() {
								'step 0';
								player.draw();
								player.chooseTarget().set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) player.gainPlayerCard('he', result.targets[0], 1, 'visible');
								else event.finish();
								('step 2');
								if (get.type(result.cards[0]) == 'basic') {
									player.chooseTarget().set('ai', function (target) {
										return get.attitude(player, target);
									});
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
								player.recover();
							},
						},
						禁卫: {
							trigger: { global: 'shaBegin' },
							content() {
								'step 0';
								player.draw();
								player.gainPlayerCard('he', trigger.player, 1, 'visible');
								('step 1');
								if (result.bool) {
									if (get.type(result.cards[0]) == 'basic') trigger.cancel();
									if (get.color(result.cards[0]) == 'black') {
										var list = game.filterPlayer(function (current) {
											return current.isFriendsOf(player);
										});
										list.sort(lib.sort.seat);
										if (list.length) {
											player.line(list, 'green');
											for (var i = 0; i < list.length; i++) {
												list[i].changeHujia();
											}
										}
									}
									if (result.cards[0].number > 1 || result.cards[0].number < 9) {
										var liem = game.filterPlayer(function (current) {
											return current.isEnemiesOf(player);
										});
										liem.sort(lib.sort.seat);
										player.useCard({ name: 'sha' }, liem, false);
									}
								}
							},
						},
						钺卫: {
							trigger: {
								global: 'useCardToAfter',
							},
							usable: 1,
							filter(event, player) {
								if (get.type(event.card) == 'basic') return true;
								return false;
							},
							audio: 'ext:士兵扩展包/audio:2',
							content() {
								'step 0';
								player.chooseTarget('是否令一名角色摸一张牌,随机从闪和无懈可击获得一张,并视为你对所有敌方角色使用一张杀？').set('ai', function (target) {
									var player = _status.event.player;
									if (get.attitude(player, target) < 0) {
										return Math.max(0.5, get.effect(target, { name: 'sha' }, player, player));
									}
									return 0;
								});
								('step 1');
								if (result.bool) {
									player.line(result.targets, 'green');
									event.target = result.targets[0];
									event.target.draw();
									var listcard = ['wuxie', 'shan'].randomGet();
									event.target.gain(game.createCard(listcard));
									event.target.$draw();
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									player.useCard({ name: 'sha' }, list, false);
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].chooseToDiscard('he', true, list[i].countCards('he') - 1);
										}
									}
								}
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						屯营: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'loseEnd' },
							forced: true,
							usable: 2,
							content() {
								'step 0';
								player.judge(function (card) {
									if (card.suit == 'heart') return -1;
									return 1;
								}, ui.special).nogain = function (card) {
									return card.suit != 'heart';
								};
								('step 1');
								if (result.bool) {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									list.sort(lib.sort.seat);
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].gain(game.createCard('shunshou'));
											list[i].$draw();
										}
									}
								}
							},
							group: '屯营2',
						},
						屯营2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'judge' },
							forced: true, //QQQ
							filter(event, player) {
								if (!player.countCards('h', { name: 'shunshou' })) return false;
								return true;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('屯营'), [1, 2]);
								('step 1');
								if (result.bool) {
									result.targets.sort(lib.sort.seat);
									//var card0=game.createCard(trigger.player.judging[0].name,trigger.player.judging[0].suit,trigger.player.judging[0].number,trigger.player.judging[0].nature);
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].addTempSkill('屯营3', { player: 'phaseAfter' });
									}
								}
								('step 2');
								player
									.chooseCard(
										function (card) {
											return card.name == 'shunshou';
										},
										get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('屯营2')
									)
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
								('step 3');
								if (result.bool) {
									player.respond(result.cards, 'highlight');
								} else {
									event.finish();
								}
								('step 4');
								if (result.bool) {
									if (trigger.player.judging[0].clone) {
										trigger.player.judging[0].clone.classList.remove('thrownhighlight');
									}
									trigger.player.judging[0].discard();
									trigger.player.judging[0] = result.cards[0];
									if (!get.owner(result.cards[0], 'judge')) {
										trigger.position.appendChild(result.cards[0]);
									}
									game.log(trigger.player, '的判定牌改为', result.cards[0]);
									event.card = result.cards[0];
									player.chooseTarget(get.prompt('屯营'), [1, 2], function (card, player, target) {
										return true;
									});
								}
								('step 5');
								if (result.bool) {
									var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
									result.targets.sort(lib.sort.seat);
									for (var i = 0; i < result.targets.length; i++) {
										player.useCard(card, result.targets[i]);
									}
								}
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						屯营3: {
							mod: {
								attackFrom() {
									return -2;
								},
							},
						},
						校尉: {
							group: '校尉2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								for (var i = 0; i < list.length; i++) {
									list[i].draw(2);
									list[i].chooseToDiscard('he', true, 3);
								}
							},
						},
						校尉2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'discardEnd' },
							content() {
								var colors = [];
								var cards = trigger.cards;
								for (var i = 0; i < cards.length; i++) {
									colors.push(get.color(cards[i]));
								}
								if (colors.includes('black')) {
									trigger.player.loseHp();
								}
								if (colors.includes('red')) {
									player.changeHujia();
								}
							},
						},
						胡奴2: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('胡奴2'));
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									event.target.addSkill('胡奴');
									player.line(event.target);
									if (event.target.storage.胡奴 == undefined) event.target.storage.胡奴 = 0;
									event.target.markSkill('胡奴');
									event.target.storage.胡奴 += 10;
								}
							},
						},
						胡奴: {
							trigger: {
								player: 'useCardAfter',
							},
							marktext: '胡',
							init(player) {
								player.storage.胡奴 = 0;
								delete player.storage.胡奴;
								player.unmarkSkill('胡奴');
							},
							intro: {
								content(storage) {
									return '当前有' + storage + '个<胡奴>';
								},
							},
							mark: true,
							forced: true,
							filter(event, player) {
								if (get.color(event.card) == 'black' && player.storage.胡奴 != undefined && player.storage.胡奴 > 0) return true;
								return false;
							},
							content() {
								if (trigger.card.number < player.storage.胡奴) player.chooseToDiscard('he', true);
								if (trigger.card.number == player.storage.胡奴) {
									player.chooseToDiscard('he', true);
									player.damage('nosource');
								}
								if (trigger.card.number > player.storage.胡奴) player.damage(2, 'nosource');
								player.storage.胡奴--;
								if (player.storage.胡奴 == 0) {
									delete player.storage.胡奴;
									player.unmarkSkill('胡奴');
								}
							},
						},
						长钩刀: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								if (get.color(event.card) == 'black') return true;
								return false;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'black' || get.type(card) == 'basic') return 2;
									return -0.5;
								});
								('step 1');
								if (result.bool) {
									player.draw(1 + trigger.target.hp);
									player.gainPlayerCard(trigger.target, 'he', true);
									trigger.target.damage();
								}
							},
						},
						后备2: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('后备2'));
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									event.target.addSkill('后备');
									player.line(event.target);
									if (event.target.storage.后备 == undefined) event.target.storage.后备 = 0;
									event.target.markSkill('后备');
									event.target.storage.后备 += 10;
								}
							},
						},
						后备: {
							trigger: { player: 'shaBegin' },
							marktext: '储',
							init(player) {
								player.storage.后备 = 0;
								delete player.storage.后备;
								player.unmarkSkill('后备');
							},
							intro: {
								content(storage) {
									return '当前有' + storage + '个<后备>';
								},
							},
							mark: true,
							filter(event, player) {
								if (player.storage.后备 != undefined && player.storage.后备 > 0) return true;
								return false;
							},
							content() {
								'step 0';
								player.judge();
								('step 1');
								if (result.number < player.storage.后备) {
									var listcard = ['tao', 'shan', 'jiu'].randomGet();
									player.gain(game.createCard(listcard));
									player.$draw();
								}
								if (result.number == player.storage.后备) {
									var listcard = ['tao', 'shan', 'jiu'].randomGet();
									player.gain(game.createCard(listcard));
									player.$draw();
									trigger.target.damage();
								}
								if (result.number > player.storage.后备) {
									var listcard = ['tao', 'shan', 'jiu'].randomGet();
									player.gain(game.createCard(listcard));
									player.$draw(2);
									trigger.target.damage(2);
								}
								player.storage.后备--;
								if (player.storage.后备 == 0) {
									delete player.storage.后备;
									player.unmarkSkill('后备');
								}
							},
						},
						破甲: {
							group: '破甲3',
							trigger: { global: 'shaBefore' },
							filter: (event, player) => event.target && event.target.countCards('he'),
							check: (event, player) => event.target.isEnemiesOf(player),
							async content(event, trigger, player) {
								//QQQ
								player.draw();
								var { result } = await player.discardPlayerCard(trigger.target, 'he', true);
								if (result && result.cards && result.cards[0]) {
									if (get.type(result.cards[0]) == 'basic') {
										trigger.player.addTempSkill('破甲2', 'phaseAfter');
									}
								}
							},
						},
						破甲2: {
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									return true;
								},
							},
						},
						破甲3: {
							trigger: {
								source: 'damageBefore',
							},
							_priority: 16,
							check() {
								return false;
							},
							content() {
								trigger.player.hp--;
								trigger.untrigger();
								trigger.finish();
							},
						},
						赈民: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								event.cards = get.cards(player.maxHp);
								player.chooseCardButton(event.cards, [1, player.maxHp - player.hp], true);
								('step 1');
								var cards2 = [];
								for (var i = 0; i < result.buttons.length; i++) {
									cards.remove(result.buttons[i].link);
									cards2.push(result.buttons[i].link);
								}
								if (cards2.length) {
									player.gain(cards2);
									player.$gain(cards2);
								}
								for (var i = 0; i < cards.length; i++) {
									ui.discardPile.appendChild(cards[i]);
								}
								var cards2name = [];
								for (var i = 0; i < cards2.length; i++) {
									cards2name.push(cards2.name);
								}
								var realcards2name = cards2name.randomGet();
								var list = ['sha', 'shan', 'tao', 'jiu'];
								var realname = list.randomGet();
								var yfjs = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								yfjs.sort(lib.sort.seat);
								if (yfjs.length) {
									player.line(yfjs, 'green');
									for (var i = 0; i < yfjs.length; i++) {
										yfjs[i].gain(game.createCard(realname));
										yfjs[i].$draw();
										yfjs[i].gain(game.createCard(realcards2name));
										yfjs[i].$draw();
										yfjs[i].useCard({ name: 'tao' }, yfjs[i]);
									}
								}
							},
							ai: {
								order: 8,
								result: {
									player: 2,
								},
							},
						},
						铁甲: {
							group: '铁甲2',
							audio: 'ext:士兵扩展包/audio:2',
							filter(event, player) {
								return player.hujia > 0 && event.player != player && event.card && (event.card.name == 'sha' || get.type(event.card, 'trick') == 'trick');
							},
							trigger: { global: 'useCardToBegin' },
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								player.changeHujia(-1);
								trigger.cancel();
							},
						},
						铁甲2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							check(event, player) {
								var q = game.countPlayer(function (current) {
									return get.attitude(player, current) <= 0;
								});
								if (q > 0) return true;
							},
							prompt: '是否发动<铁甲>可以观看并选择获得一名其他角色一张牌,若该牌不为基本牌,你获得该牌点数的护甲;若该牌为基本牌,你护甲数翻倍',
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('选择一名其他角色获得其一张牌'), 1, function (card, player, target) {
										return target != player && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										return get.attitude(player, target) <= 0;
									});
								('step 1');
								if (result.bool) {
									var t = result.targets[0];
									player.gainPlayerCard(t, 'he', 1, true, 'visible');
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									var reca = result.cards[0];
									if (get.type(reca) == 'basic' && player.hujia > 0) {
										player.changeHujia(2 * player.hujia);
									} else {
										player.changeHujia(reca.number);
									}
								}
							},
						},
						并锐: {
							trigger: { player: 'shaBegin' },
							usable: 1,
							content() {
								'step 0';
								player.draw();
								trigger.target.damage();
								event.target = trigger.target;
								player.viewHandcards(event.target);
								('step 1');
								var cards = target.getCards('h', 'sha');
								if (cards.length) {
									event.cards = cards;
								} else player.discardPlayerCard('he', target, true);
								('step 2');
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('sha'));
										list[i].$draw();
									}
								}
							},
						},
						恶狼: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'shaBegin',
							},
							forced: true, //QQQ
							content() {
								'step 0';
								player.chooseTarget(get.prompt('恶狼')).set('ai', function (target) {
									var player = _status.event.player;
									return get.damageEffect(target, player, player);
								});
								('step 1');
								if (result.bool && result.targets && result.targets.length) {
									var num = [1, 2].randomGet();
									player.line(result.targets[0], 'green');
									result.targets[0].damage(num);
									player.draw(num * num);
									player.recover(num * num);
								}
							},
						},
						同袍: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardEnd' },
							filter(event, player) {
								return get.type(event.card) == 'equip';
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player) && current != player;
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].useCard(game.createCard(trigger.card.name), list[i]);
									}
								}
							},
						},
						方阵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToEnd' },
							filter(event, player) {
								return event.card.name == 'sha' && event.target.isFriendsOf(player);
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'black') return 2;
									return -0.5;
								});
								('step 1');
								if (result.bool) {
									player.useCard({ name: 'sha' }, trigger.player, false);
								}
							},
						},
						长锐: {
							trigger: { player: 'shaBegin' },
							usable: 1,
							forced: true,
							content() {
								var num = player.getAttackRange();
								player.draw(num);
							},
							mod: {
								attackFrom() {
									return -2;
								},
							},
						},
						铁蒺藜阵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							nobracket: true,
							forced: true, //QQQ
							filter(event, player) {
								return event.card && event.cards.length;
							},
							content() {
								'step 0';
								trigger.player.storage.铁蒺藜阵++;
								var num = player.getAttackRange();
								event.num = num;
								if (trigger.player.storage.铁蒺藜阵 == num) player.chooseBool('是否发动【铁蒺藜阵】？');
								('step 1');
								if (result.bool) {
									trigger.player.damage(event.num);
								}
							},
							group: '铁蒺藜阵2',
							ai: {
								threaten: 1.3,
							},
						},
						铁蒺藜阵2: {
							trigger: {
								global: 'phaseBefore',
							},
							forced: true,
							silent: true,
							popup: false,
							_priority: 10,
							content() {
								trigger.player.storage.铁蒺藜阵 = 0;
							},
						},
						渡攻: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'shaBegin',
							},
							usable: 1,
							content() {
								'step 0';
								event.videoId = lib.status.videoId++;
								var cards = trigger.target.getCards('h');
								if (player.isOnline2()) {
									player.send(
										function (cards, id) {
											ui.create.dialog('渡攻', cards).videoId = id;
										},
										cards,
										event.videoId
									);
								}
								event.dialog = ui.create.dialog('渡攻', cards);
								event.dialog.videoId = event.videoId;
								if (!event.isMine()) {
									event.dialog.style.display = 'none';
								}
								player
									.chooseButton()
									.set('filterButton', function (button) {
										return get.color(button.link) == 'red';
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
									player.chooseControl('弃置', '置于牌堆顶');
								} else {
									if (player.isOnline2()) {
										player.send('closeDialog', event.videoId);
									}
									event.dialog.close();
									event.goto(4);
								}
								('step 2');
								if (player.isOnline2()) {
									player.send('closeDialog', event.videoId);
								}
								event.dialog.close();
								var card = event.card;
								if (result.control == '置于牌堆顶') {
									trigger.target.lose(card);
									player.showCards(card, '置于牌堆顶');
								} else {
									trigger.target.discard(card);
									event.goto(4);
								}
								('step 3');
								event.card.fix();
								ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
								game.log(player, '将', event.card, '置于牌堆顶');
								('step 4');
								event.cards = get.cards(3);
								if (event.isMine() == false) {
									event.dialog = ui.create.dialog('渡攻', event.cards);
								}
								('step 5');
								if (event.dialog) event.dialog.close();
								var dialog = ui.create.dialog('渡攻', event.cards);
								player.chooseButton([0, 5], dialog, true).set('ai', function (button) {
									return get.value(button.link);
								}).filterButton = function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (get.type(button.link) == get.type(ui.selected.buttons[i].link)) return false;
									}
									return true;
								};
								('step 6');
								var cards2 = [];
								for (var i = 0; i < result.buttons.length; i++) {
									cards2.push(result.buttons[i].link);
									cards.remove(result.buttons[i].link);
								}
								player.gain(cards2, 'log');
								if (cards2.length) player.$gain2(cards2);
								for (var i = 0; i < cards.length; i++) {
									cards[i].discard();
								}
							},
						},
						长武: {
							audio: 'ext:士兵扩展包/audio:2',
							mod: {
								attackFrom(from, to, distance) {
									return distance - 1;
								},
							},
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('长武'), '为' + get.translation(trigger.card) + '增加一个目标,或取消并令' + get.translation(trigger.card) + '伤害＋1', function (card, player, target) {
										return !_status.event.sourcex.includes(target) && player.canUse('sha', target);
									})
									.set('sourcex', trigger.targets)
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.effect(target, { name: 'sha' }, player, player);
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.line(event.target);
									trigger.targets.push(event.target);
								} else {
									player.addTempSkill('长武2', 'shaAfter');
								}
							},
						},
						长武2: {
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								trigger.num++;
							},
						},
						良驹: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'useCardToBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								trigger.target.judge(function (card) {
									return card.suit != 'spade' ? -2 : 0;
								});
								('step 1');
								if (result.judge < 0) {
									trigger.directHit = true;
								}
							},
							group: ['良驹_judge'],
							subSkill: {
								judge: {
									audio: '良驹',
									trigger: {
										target: 'useCardToBegin',
									},
									filter(event, player) {
										if (event.player == player) return false;
										if (event.card.name == 'sha') return true;
										return false;
									},
									forced: true,
									content() {
										'step 0';
										player.judge(function (card) {
											return card.suit != 'heart' ? 2 : -1;
										});
										('step 1');
										if (result.judge > 0) {
											trigger.cancel();
										}
									},
								},
							},
						},
						侍结: {
							trigger: { global: 'useCardEnd' },
							filter(event, player) {
								return event.card && get.type(event.card) == 'equip';
							},
							content() {
								'step 0';
								var listcard = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var info = lib.card[lib.inpile[i]];
									if (info.type == 'basic') {
										listcard.push(lib.inpile[i]);
									}
								}
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard(listcard.randomGet()));
										list[i].$draw();
									}
								}
								player.chooseControl('视为对所有敌方角色使用杀', '视为对所有敌方角色使用万箭齐发');
								('step 1');
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								if (result.control == '视为对所有敌方角色使用杀') {
									player.useCard({ name: 'sha' }, list, false);
								} else {
									player.useCard({ name: 'wanjian' }, list);
								}
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						陷破: {
							trigger: {
								global: 'shaBegin',
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								if (player.countCards('h') > 0) player.chooseToCompare(trigger.target);
								('step 2');
								if (result.bool) {
									trigger.player.addTempSkill('陷破2');
								} else trigger.player.draw();
							},
							ai: {
								order(name, player) {
									var cards = player.getCards('h');
									if (player.countCards('h', 'sha') == 0) {
										return 1;
									}
									for (var i = 0; i < cards.length; i++) {
										if (cards[i].name != 'sha' && cards[i].number > 11 && get.value(cards[i]) < 7) {
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
						陷破2: {
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
						织女: {
							trigger: { target: 'useCardToBegin' },
							filter(event, player) {
								return event.player != player && get.type(event.card) == 'basic' && player.countCards('he');
							},
							content() {
								'step 0';
								player.chooseToDiscard('he', true);
								player.draw();
								var listcard = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var info = lib.card[lib.inpile[i]];
									if (info.type == 'basic') {
										listcard.push(lib.inpile[i]);
									}
								}
								player.gain(game.createCard(listcard.randomGet()));
								player.$draw();
							},
						},
						烽火台: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'damageEnd',
							},
							nobracket: true,
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							content() {
								'step 0';
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('sha'));
										list[i].gain(game.createCard('juedou'));
										list[i].$draw(2);
									}
								}
								('step 1');
								if (
									player.countCards('he', function (card) {
										return get.color(card) == 'black';
									})
								)
									player.chooseToDiscard('he', function (card) {
										return get.color(card) == 'black';
									});
								('step 2');
								if (result.bool) {
									trigger.player.recover();
								}
							},
						},
						急行: {
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							forced: true,
							content() {
								'step 0';
								player.draw();
								player.phaseUse();
								('step 1');
								player.getStat().card = {};
								('step 3');
								player.draw();
								player.phaseUse();
								('step 4');
								player.getStat().card = {};
							},
						},
						盗马: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								var listcard = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var info = lib.card[lib.inpile[i]];
									if (get.subtype(lib.inpile[i]) == 'equip3' || get.subtype(lib.inpile[i]) == 'equip4') {
										listcard.push(lib.inpile[i]);
									}
								}
								player.gain(game.createCard(listcard.randomGet()));
								player.gain(game.createCard(listcard.randomGet()));
								player.$draw(2);
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								event.list = list;
								('step 1');
								if (event.list.length) {
									var target = event.list.shift();
									if (
										target.countCards('e', function (card) {
											return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4';
										})
									) {
										var es = target.getCards('e', function (card) {
											return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4';
										});
										if (es.length) {
											target.discard(es);
										}
									}
									event.redo();
								}
							},
						},
						影贼: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'damageBegin',
							},
							filter(event, player) {
								return (
									event.player.isFriendsOf(player) &&
									player.countCards('he', function (card) {
										return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4';
									}) > 0
								);
							},
							content() {
								'step 0';
								player.chooseToDiscard(get.prompt('影贼'), 'he', function (card) {
									return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4';
								});
								('step 1');
								if (result.bool) {
									trigger.cancel();
								}
							},
						},
						新兵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							content() {
								'step 0';
								player.discardPlayerCard(trigger.source, 'he', true);
								('step 1');
								if (result.bool) {
									if (get.color(result.cards[0]) == 'black') player.useCard({ name: 'sha' }, trigger.source, false);
								}
							},
						},
						绊马: {
							audio: 'ext:士兵扩展包/audio:2',
							mod: {
								maxHandcard(player, num) {
									var hs = player.getCards('h');
									for (var i = 0; i < hs.length; i++) {
										if (get.subtype(hs[i]) == 'equip3' || get.subtype(hs[i])) {
											num++;
										}
									}
									return num;
								},
							},
							trigger: { player: 'phaseBegin' },
							content() {
								var listcard = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var info = lib.card[lib.inpile[i]];
									if (get.subtype(lib.inpile[i]) == 'equip3' || get.subtype(lib.inpile[i]) == 'equip4') {
										listcard.push(lib.inpile[i]);
									}
								}
								for (var i = 0; i < listcard.length; i++) {
									player.gain(game.createCard(listcard[i]));
								}
							},
							group: '绊马2',
						},
						绊马2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'useCardToBegin',
							},
							filter(event, player) {
								return (
									get.type(event.card) == 'equip' ||
									(event.card.name == 'sha' &&
										player.countCards('he', function (card) {
											return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4';
										}) > 0)
								);
							},
							content() {
								'step 0';
								player.chooseToDiscard(get.prompt('绊马'), 'he', function (card) {
									return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4';
								});
								('step 1');
								if (result.bool) {
									trigger.cancel();
								}
							},
						},
						丹枪: {
							trigger: {
								target: 'useCardToBefore',
								player: 'phaseJudgeBefore',
							},
							check(event, player) {
								return get.attitude(event.player, player) < 0 && get.effect(player, event.card, event.player, player) < 0;
							},
							usable: 1,
							content() {
								trigger.cancel();
								player.draw();
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								for (var i = 0; i < list.length; i++) {
									list[i].chooseToDiscard(
										get.prompt('丹枪'),
										'he',
										function (card) {
											return card.name == 'sha';
										},
										true
									);
									list[i].loseHp();
								}
							},
						},
						燕将: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'shaBegin',
							},
							content() {
								player.recover(player.maxHp);
								player.draw(Math.min(player.maxHp, 20));
							},
						},
						齐击: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'shaBegin',
							},
							filter: (event, player) => event.target && event.target.countCards('he'),
							check: (event, player) => event.target.isEnemiesOf(player),
							async content(event, trigger, player) {
								//QQQ
								var { result } = await player.discardPlayerCard(trigger.target, 'he', true);
								if (result && result.cards && result.cards[0]) {
									if (get.color(result.cards[0]) == 'black') {
										var list = game.filterPlayer(function (current) {
											return current.isEnemiesOf(player);
										});
										list.sort(lib.sort.seat);
										player.useCard({ name: 'wanjian' }, list);
									}
								}
							},
							group: ['齐击2', '齐击3'],
						},
						齐击2: {
							trigger: { player: 'useCardAfter' },
							forced: true,
							filter(event, player) {
								if (event.parent.name == '齐击2') return false;
								var card = game.createCard(event.card.name, event.card.suit, event.card.number);
								for (var i = 0; i < event.targets.length; i++) {
									if (!event.targets[i].isAlive()) return false;
									if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
										return false;
									}
								}
								return event.card.name == 'wanjian';
							},
							content() {
								var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number);
								player.useCard(card, trigger.targets);
							},
							ai: {
								threaten: 2,
							},
						},
						齐击3: {
							trigger: { player: 'useCardAfter' },
							forced: true,
							filter(event, player) {
								if (event.parent.name == '齐击3') return false;
								return event.card.name == 'wanjian';
							},
							content() {
								player.useCard({ name: 'wanjian' }, trigger.targets);
							},
							ai: {
								threaten: 2,
							},
						},
						津兵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player.judge(function (card) {
									return get.color(card) == 'black' ? 2 : -1;
								});
								('step 1');
								player.gain(result.card);
								player.$gain2(result.card);
								if (result.judge > 0) {
									player.useCard({ name: 'juedou' }, trigger.target);
								}
							},
						},
						暗刺: {
							audio: 'ext:士兵扩展包/audio:2',
							usable: 1,
							trigger: {
								global: 'shaAfter',
							},
							forced: true, //QQQ
							content() {
								'step 0';
								player.chooseTarget(get.prompt('暗刺')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
									var num = [1, 2].randomGet();
									for (var i = 0; i < num; i++) {
										player.useCard({ name: 'sha' }, result.targets[0], false);
									}
								}
							},
						},
						鹊杀: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'loseEnd' },
							forced: true,
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								return true;
							},
							content() {
								player.changeHujia();
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								for (var i = 0; i < list.length; i++) {
									list[i].chooseToDiscard(
										get.prompt('鹊杀'),
										'he',
										function (card) {
											return card.name == 'sha';
										},
										true
									);
									list[i].damage();
								}
							},
							ai: {
								threaten: 0.7,
							},
						},
						刃弩: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'shaEnd',
							},
							check(event, player) {
								var q = game.countPlayer(function (current) {
									return get.attitude(player, current) <= 0;
								});
								if (q > 0) return true;
							},
							prompt: '是否发动<刃弩>可以观看并选择获得一名其他角色一张牌,若该牌为黑色牌,你视为对其使用该牌点数数量的万箭齐发',
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('选择一名其他角色获得其一张牌'), 1, function (card, player, target) {
										return target != player && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										return get.attitude(player, target) <= 0;
									});
								('step 1');
								if (result.bool) {
									var t = result.targets[0];
									player.gainPlayerCard(t, 'he', 1, true, 'visible');
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									var reca = result.cards[0];
									if (get.color(reca) == 'black') {
										var x = reca.number;
										for (var i = 0; i < x; i++) {
											player.useCard({ name: 'wanjian' }, trigger.target);
										}
									}
								}
							},
						},
						千古风流人物: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: {
								global: 'gameStart',
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								player.chooseControl('魏', '蜀', '吴', '群');
								('step 1');
								game.log(target, '选择了' + get.translation(result.control));
								event.choice = result.control;
								if (result.control == '魏') {
									event.group = 'wei';
								}
								if (result.control == '蜀') {
									event.group = 'shu';
								}
								if (result.control == '吴') {
									event.group = 'wu';
								}
								if (result.control == '群') {
									event.group = 'qun';
								}
								('step 2');
								var list = [];
								var list2 = [];
								var players = game.players.concat(game.dead);
								for (var i = 0; i < players.length; i++) {
									list2.add(players[i].name);
									list2.add(players[i].name1);
									list2.add(players[i].name2);
								}
								for (var i in lib.character) {
									if (lib.character[i][1] != event.group) continue;
									if (lib.character[i][4].includes('minskin')) continue;
									if (list2.includes(i)) continue;
									list.push(i);
								}
								var friends = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								var name = list.randomGet();
								event.name = name;
								var name1 = list.randomGet();
								event.name1 = name1;
								('step 3');
								var pos = 2;
								var fellow = game.addFellow(pos, event.name);
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								fellow.addSkill('千古风流人物1');
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, event.name1);
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								fellow1.addSkill('千古风流人物2');
							},
						},
						千古风流人物1: {
							forced: true,
							trigger: { global: 'phaseBefore' },
							filter(event, player) {
								return event.player.hasSkill('千古风流人物');
							},
							async content(event, trigger, player) {
								//QQQ
								await player.die();
								game.players.remove(player);
								player.remove();
							},
						},
						千古风流人物2: {
							forced: true,
							trigger: { global: 'phaseBefore' },
							filter(event, player) {
								return event.player.hasSkill('千古风流人物');
							},
							async content(event, trigger, player) {
								//QQQ
								await player.die();
								game.players.remove(player);
								player.remove();
							},
						},
						破谋: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								return event.card && get.type(event.card, 'trick') == 'trick';
							},
							content() {
								//trigger.cancel();
								trigger.num--;
								var list = get.inpile('trick', 'trick');
								var list2 = [];
								list2.push(game.createCard(list.randomGet()));
								player.gain(list2, 'draw');
							},
							ai: {
								order: 16,
								threaten: 1.8,
								result: {
									player: 1,
								},
							},
						},
						侍婢: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'gainEnd' },
							forced: true,
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								return true;
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].recover();
									}
								}
							},
							ai: {
								threaten: 0.7,
							},
						},
						步隶: {
							trigger: { player: 'shaBegin' },
							usable: 1,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('步隶'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									var num = result.targets[0].countCards('he') - 1;
									result.targets[0].chooseToDiscard('he', true, num);
									player.changeHujia(1 + num);
									player.draw(1 + num);
								}
							},
							ai: {
								threaten: 0.5,
							},
						},
						骁锋: {
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('骁锋'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].damage();
									player.gainPlayerCard(result.targets[0], 'he', true);
									result.targets[0].addTempSkill('骁锋1', { player: 'phaseAfter' });
								}
							},
						},
						骁锋1: {
							trigger: { player: 'phaseUseBefore' },
							forced: true,
							content() {
								trigger.cancel();
							},
						},
						水鬼: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('水鬼')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var num = [1, 4].randomGet();
									player.discardPlayerCard(num, result.targets[0], 'he', true);
								}
								('step 2');
								if (result.cards) {
									var cards = result.cards;
									var suits = [];
									for (var i = 0; i < cards.length; i++) {
										if (!suits.includes(cards[i].suit)) suits.push(cards[i].suit);
									}
									if (suits.length == 1) player.recover();
									if (suits.length == 2) player.gainMaxHp();
									if (suits.length == 3) {
										player.gain(game.createCard('guohe'));
										player.$draw();
									}
									if (suits.length == 4) player.draw(4);
								}
							},
						},
						贲锐: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								player.gainPlayerCard('he', target, 2, true);
								var num = player.countCards('h', function (card) {
									return card.name == 'sha';
								});
								for (var i = 0; i < num; i++) {
									player.useCard({ name: 'sha' }, target, false);
								}
								target.damage();
							},
						},
						民心: {
							nobracket: true,
							global: '民心2',
						},
						民心2: {
							enable: 'phaseUse',
							filter(event, player) {
								if (player.hasSkill('民心3')) return false;
								return (
									player.countCards('he') >= 2 &&
									game.hasPlayer(function (current) {
										return current.hasSkill('民心');
									})
								);
							},
							nobracket: true,
							forced: true, //QQQ
							delay: 0,
							mark: true,
							marktext: '得',
							intro: {
								content(storage) {
									return '共得' + storage + '民心值';
								},
							},
							init(player) {
								player.storage.民心 = 0;
							},
							prompt() {
								var player = _status.event.player;
								var list = game.filterPlayer(function (current) {
									return current.hasSkill('民心');
								});
								var str = '将2张牌交给' + get.translation(list);
								if (list.length > 1) str += '中的一人';
								return str;
							},
							check(card) {
								if (card.name == 'sha') return 5;
								return 8 - get.value(card);
							},
							content() {
								'step 0';
								player.chooseCard(2, true);
								var targets = game.filterPlayer(function (current) {
									return current.hasSkill('民心');
								});
								if (targets.length == 1) {
									event.target = targets[0];
									event.goto(2);
								} else if (targets.length) {
									player
										.chooseTarget(true, '选择【民心】的目标', function (card, player, target) {
											return _status.event.list.includes(target);
										})
										.set('list', targets)
										.set('ai', function (target) {
											var player = _status.event.player;
											return get.attitude(player, target);
										});
								} else {
									event.finish();
								}
								('step 1');
								if (result.bool && result.targets.length) {
									event.cards = result.cards;
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								if (event.target) {
									player.addTempSkill('民心3');
									if (event.target != player) {
										event.target.gain(result.cards, player);
										player.$give(result.cards, event.target);
									}
									if (typeof player.storage.民心2 == 'number') {
										player.storage.民心2 += 2;
									} else {
										player.storage.民心2 = 2;
									}
									player.markSkill('民心2');
									if (player.storage.民心2 == 10) {
										if (lib.config.mode == 'identity') {
											if (player != game.me && player.identity != game.me.identity) {
												if ((player.identity == 'zhu' && game.me.identity != 'zhong') || (player.identity == 'zhong' && game.me.identity != 'zhu')) game.forceOver(false);
												else game.forceOver(true);
											} else {
												game.forceOver(true);
											}
										} else {
											if (player != game.me && player.identity != game.me.identity) {
												game.forceOver(false);
											} else {
												game.forceOver(true);
											}
										}
									}
								} else {
									event.finish();
								}
							},
							ai: {
								order: 2,
								threaten: 1,
								result: {
									player(player, target) {
										var target = game.findPlayer(function (current) {
											return current.hasSkill('民心');
										});
										if (target) {
											return get.attitude(player, target);
										}
									},
								},
							},
						},
						民心3: {},
						民心4: {
							trigger: { player: 'damageEnd' },
							nobracket: true,
							filter(event, player) {
								return event.source != undefined;
							},
							check(event, player) {
								return get.attitude(player, event.source) <= 0;
							},
							forced: true,
							logTarget: 'source',
							mark: true,
							marktext: '失',
							intro: {
								content(storage) {
									return '共失' + storage + '民心值';
								},
							},
							init(player) {
								player.storage.民心4 = 0;
							},
							content() {
								if (typeof trigger.source.storage.民心4 == 'number') {
									trigger.source.storage.民心4 += 2;
								} else {
									trigger.source.storage.民心4 = 2;
								}
								trigger.source.markSkill('民心4');
								if (trigger.source.storage.民心4 == 10) trigger.source.die();
							},
							ai: {
								maixie_defend: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
										return 0.8;
									},
								},
							},
						},
						益州豪杰: {
							enable: 'phaseUse',
							discard: false,
							nobracket: true,
							filter(event, player) {
								if (player.hasJudge('lebu')) return false;
								return player.countCards('he', { color: 'red' }) > 0;
							},
							prepare: 'throw',
							position: 'he',
							filterCard: {
								color: 'red',
							},
							selectTarget: -1,
							filterTarget(card, player, target) {
								return player == target;
							},
							content() {
								'step 0';
								player.useCard({ name: 'lebu' }, target, cards);
								event.num = [2, 4].randomGet();
								player.recover(event.num);
								player
									.chooseTarget(get.prompt('益州豪杰'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < event.num; i++) {
										player.useCard({ name: 'sha' }, result.targets[0], false);
									}
								}
							},
							ai: {
								result: {
									target: 1,
								},
								order: 9,
							},
						},
						鬼狼血祭: {
							trigger: {
								global: 'shaBegin',
							},
							filter(event, player) {
								return event.player != player;
							},
							nobracket: true,
							usable: 1,
							content() {
								trigger.cancel();
								var num = [2, 4].randomGet();
								trigger.player.loseHp(num);
							},
						},
						曹氏精骑: {
							trigger: {
								player: 'shaBegin',
							},
							nobracket: true,
							content() {
								trigger.target.chooseToDiscard('he', true, 1);
								trigger.target.loseHp();
								trigger.target.turnOver();
							},
						},
						威骑: {
							usable: 1,
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'shaBegin',
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('威骑')).set('ai', function (target) {
									return -get.attitude(_status.event.player, target);
								});
								('step 1');
								if (result.bool) {
									event.X = result.targets[0];
									player
										.chooseControl('基本牌', '锦囊牌')
										.set('prompt', '威骑<br><br><div class="text" style="color: blue; text-align:center">令其弃置全部基本牌或锦囊牌</div>')
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
									if (card.length) {
										var num = card.length;
										var list = game.filterPlayer(function (current) {
											return current.isFriendsOf(player);
										});
										if (list.length) {
											player.line(list, 'green');
											for (var i = 0; i < list.length; i++) {
												list[i].changeHujia(num);
											}
										}
									}
								} else {
									var card = event.X.getCards('h', function (card) {
										return get.type(card, 'trick') == 'trick';
									});
									event.X.discard(card);
									if (card.length) {
										var num = card.length;
										var list = game.filterPlayer(function (current) {
											return current.isFriendsOf(player);
										});
										if (list.length) {
											player.line(list, 'green');
											for (var i = 0; i < list.length; i++) {
												list[i].changeHujia(num);
											}
										}
									}
								}
								player.draw(2);
							},
							ai: {
								threaten: 1.4,
							},
						},
						卫妙: {
							trigger: {
								player: 'shaBegin',
							},
							usable: 1,
							content() {
								'step 0';
								player.moveCard();
								('step 1');
								player
									.chooseTarget(get.prompt('卫妙'), function (card, player, target) {
										return lib.filter.targetEnabled({ name: 'sha' }, player, target);
									})
									.set('ai', function (target) {
										return get.effect(target, { name: 'sha' }, _status.event.player);
									});
								('step 2');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets, false);
								}
							},
						},
						青勇: {
							trigger: { player: 'phaseEnd' },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].draw();
										player.gainPlayerCard('he', list[i], 1, 'visible');
									}
								}
							},
						},
						尖矛: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player.draw(3);
								player.chooseCard(true, 'he', '展示一张牌').set('ai', function (card) {
									if (get.position(card) == 'e') return -1;
									if (card.name == 'shan') return 1;
									if (get.type(card) == 'equip') return 0.5;
									return 0;
								});
								('step 1');
								player.showCards(result.cards[0]);
								event.card = result.cards[0];
								('step 2');
								if (get.type(event.card) == 'basic') player.changeHujia(event.card.number);
							},
							ai: {
								threaten: 1.1,
							},
							group: '尖矛2',
						},
						尖矛2: {
							trigger: {
								global: 'gainAfter',
							},
							usable: 1,
							audio: 'ext:士兵扩展包/audio:2',
							content() {
								'step 0';
								player.chooseTarget('是否令一名角色摸一张牌,对视为所有敌方角色使用杀？').set('ai', function (target) {
									var player = _status.event.player;
									if (get.attitude(player, target) < 0) {
										return Math.max(0.5, get.effect(target, { name: 'sha' }, player, player));
									}
									return 0;
								});
								('step 1');
								if (result.bool) {
									player.line(result.targets, 'green');
									event.target = result.targets[0];
									event.target.draw();
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									player.useCard({ name: 'sha' }, list);
								}
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						领益: {
							audio: 'ext:士兵扩展包/audio:2',
							usable: 1,
							trigger: { player: 'shaBegin' },
							content() {
								var card = game.createCard('lebu');
								player.useCard(card, trigger.target);
								player.recover();
								player.draw(card.number);
							},
						},
						辎运: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('muniu'));
										list[i].gain(game.createCard('muniu'));
										list[i].$draw(2);
									}
								}
							},
							group: '辎运2',
						},
						辎运2: {
							trigger: {
								global: 'phaseUseBegin',
							},
							filter(event, player) {
								return (
									event.player.isFriendsOf(player) &&
									player.countCards('he', function (card) {
										return card.name == 'muniu';
									}) > 0
								);
							},
							content() {
								'step 0';
								player.chooseToDiscard(get.prompt('辎运2'), 'he', function (card) {
									return card.name == 'muniu';
								});
								('step 1');
								if (result.bool) {
									trigger.player.draw(3);
								}
							},
						},
						血斧: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardAfter' },
							usable: 1,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('血斧'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									var num = [1, 3].randomGet();
									player.discardPlayerCard(num, result.targets[0], 'he', true);
									for (var i = 0; i < num; i++) {
										var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
										player.useCard(card, (trigger._targets || trigger.targets).slice(0));
									}
								}
							},
						},
						隶央: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'shaBegin',
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('隶央')).ai = function (target) {
									if (player.countCards('h') > target.countCards('h')) return get.attitude(player, target);
									if (player.countCards('h') < target.countCards('h')) return -get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target);
									if (player.countCards('h') > target.countCards('h')) {
										player.draw(target.countCards('h'));
										var list = game.filterPlayer(function (current) {
											return current.isFriendsOf(player);
										});
										if (list.length) {
											player.line(list, 'green');
											for (var i = 0; i < list.length; i++) {
												list[i].changeHujia(target.countCards('h'));
											}
										}
									}
									if (player.countCards('h') < target.countCards('h')) {
										target.chooseToDiscard('he', true, player.countCards('h'));
										var list = game.filterPlayer(function (current) {
											return current.isFriendsOf(player);
										});
										if (list.length) {
											player.line(list, 'green');
											for (var i = 0; i < list.length; i++) {
												list[i].changeHujia(player.countCards('h'));
											}
										}
									}
								}
							},
						},
						校侦: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							prompt: '是否发动<校侦>可以观看并选择获得一名其他角色一张牌,并可令一名角色增加一点体力上限摸该牌点数的牌',
							content() {
								'step 0';
								player
									.chooseTarget('选择一名其他角色获得其一张牌', 1, function (card, player, target) {
										return target != player && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										return get.attitude(player, target) <= 0;
									});
								('step 1');
								if (result.bool) {
									var t = result.targets[0];
									player.gainPlayerCard(t, 'he', 1, true, 'visible');
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									var reca = result.cards[0];
									event.num = reca.number;
									player
										.chooseTarget('选择一名角色令其增加1点体力上限摸' + event.num + '张牌', 1, function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return get.attitude(player, target) > 0;
										});
								}
								('step 3');
								if (result.bool) {
									var t = result.targets[0];
									t.gainMaxHp();
									t.draw(event.num);
								}
							},
						},
						黎民: {
							trigger: { player: 'phaseDrawEnd' },
							forced: true,
							content() {
								var num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (get.color(trigger.cards[i]) == 'red') num++;
								}
								player.draw(num);
							},
						},
						林尉: {
							audio: 'ext:士兵扩展包/audio:2',
							usable: 1,
							trigger: { global: 'shaBegin' },
							content() {
								trigger.cancel();
								var num = [2, 4].randomGet();
								trigger.target.draw(num);
								player.draw(num);
							},
						},
						林骑: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:士兵扩展包/audio:2',
							position: 'he',
							filterCard: true,
							content() {
								'step 0';
								player.addTempSkill('林骑2');
								('step 1');
								var card = cards[0];
								if (get.color(card) == 'black') {
									player
										.chooseTarget('是否弃置一名角色的一张牌？', function (card, player, target) {
											return player != target && target.countCards('he') > 0;
										})
										.set('ai', function (target) {
											var player = _status.event.player;
											if (get.attitude(player, target) < 0) {
												return Math.max(0.5, get.effect(target, { name: 'sha' }, player, player));
											}
											return 0;
										});
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.line(result.targets, 'green');
									event.target = result.targets[0];
									player.discardPlayerCard(event.target, 'he', true).ai = get.buttonValue;
									player.useCard({ name: 'sha' }, result.targets[0], false);
									var list = get.inpile('trick', 'trick');
									var list2 = [];
									list2.push(game.createCard(list.randomGet()));
									player.gain(list2, 'draw');
								}
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						林骑2: {
							mod: {
								attackFrom() {
									return -Infinity;
								},
							},
						},
						峪壮: {
							audio: 'ext:士兵扩展包/audio:2',
							usable: 2,
							trigger: { global: 'shaBegin' },
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							content() {
								var num = trigger.player.maxHp;
								trigger.player.draw(num);
								player.draw(num);
								trigger.player.gainMaxHp();
								trigger.player.recover();
								trigger.target.loseMaxHp();
							},
						},
						阳安贯甲: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: ['shaBegin', 'damageBegin'] },
							nobracket: true,
							content() {
								'step 0';
								var num = [2, 4].randomGet();
								event.num = num;
								player.draw(event.num);
								('step 1');
								player.chooseTarget(get.prompt('阳安贯甲')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
								}
								('step 3');
								player.chooseTarget(get.prompt('阳安贯甲')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 4');
								if (result.bool) {
									result.targets[0].draw(event.num);
									result.targets[0].changeHujia(event.num);
								}
							},
						},
						栈卫: {
							usable: 2,
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'damageBegin',
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var num = [2, 4].randomGet();
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								for (var i = 0; i < num; i++) {
									player.useCard({ name: 'sha' }, list, false);
									player.useCard({ name: 'wanjian' }, list);
								}
								if (trigger.name == 'damage') {
									if (Math.random() > 0.5) trigger.cancel();
								}
							},
						},
						司典: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('司典')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('h', true, function (card) {
										return get.type(card, 'trick') == 'trick';
									});
								}
								('step 2');
								player.judge();
								('step 3');
								event.num = result.card.number;
								('step 4');
								event.card = get.cardPile(function (card) {
									if (get.type(card, 'trick') == 'trick') return true;
									return false;
								}, 'cardPile');
								if (!event.card) {
									event.finish();
									return;
								}
								player.showCards([event.card]);
								('step 5');
								player
									.chooseTarget(true, '选择一名角色送出' + get.translation(event.card))
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (_status.event.neg) return -att;
										return att;
									})
									.set('neg', get.value(event.card, player, 'raw') < 0);
								('step 6');
								player.line(result.targets, 'green');
								result.targets[0].gain(event.card, 'gain2');
								if (--event.num > 0) {
									event.goto(4);
								}
							},
						},
						精武: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaBegin',
							},
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							content() {
								'step 0';
								trigger.target.chooseToDiscard('he', true, function (card) {
									return get.type(card) != 'basic';
								});
								trigger.target.loseHp();
								('step 1');
								player.judge();
								('step 2');
								if (get.type(result.card) != 'basic') trigger.directHit = true;
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].changeHujia();
									}
								}
							},
						},
						武卫: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							check(event, player) {
								if (player.countCards('h', 'sha')) return true;
								return Math.random() < 0.5;
							},
							content() {
								'step 0';
								event.cards = get.cards(3);
								player.showCards(event.cards, '武卫');
								('step 1');
								var num1 = 0;
								var num2 = 0;
								for (var i = 0; i < cards.length; i++) {
									if (get.type(cards[i]) != 'basic' && cards[i].name != 'juedou' && (get.type(cards[i]) != 'equip' || get.subtype(cards[i]) != 'equip1')) {
										cards[i].discard();
										cards.splice(i--, 1);
										num1++;
									} else num2++;
								}
								player.gain(cards, 'gain2');
								if (num2 > num1) {
									trigger.cancel();
									trigger.player.damage(2);
								}
							},
						},
						长戟: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaBegin',
							},
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							content() {
								'step 0';
								trigger.target.chooseToDiscard('he', true, function (card) {
									return get.subtype(card) == 'equip1';
								});
								trigger.target.damage();
							},
							group: '长戟2',
						},
						长戟2: {
							trigger: {
								global: 'damageEnd',
							},
							usable: 1,
							filter(event, player) {
								return event.player.isEnemiesOf(player);
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								for (var i = 0; i < list.length; i++) {
									list[i].damage();
								}
							},
						},
						长水弓侍: {
							enable: 'phaseUse',
							usable: 1,
							nobracket: true,
							content() {
								'step 0';
								player.draw(4);
								player.chooseCardTarget({
									selectCard: Math.floor(player.countCards('h') / 2),
									filterTarget(card, player, target) {
										return true;
									},
									forced: true,
									ai2(target) {
										return get.attitude(_status.event.player, target);
									},
								});
								('step 1');
								if (result.targets?.length) {
									result.targets[0].gain(result.cards, player);
									player.$give(result.cards.length, result.targets[0]);
									var list = game.filterPlayer(function (current) {
										return player.canUse('wanjian', current) && current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									for (var i = 0; i < result.cards.length; i++) {
										player.useCard(
											{
												name: 'wanjian',
											},
											list
										);
									}
								}
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						骁击: {
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('骁击'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].damage();
									player.gainPlayerCard(result.targets[0], 'he', true);
									result.targets[0].addTempSkill('骁击1', { player: 'phaseAfter' });
								}
							},
						},
						骁击1: {
							trigger: { player: 'phaseDrawBefore' },
							forced: true,
							content() {
								trigger.cancel();
							},
						},
						丹扈: {
							trigger: { player: 'shaBegin' },
							usable: 1,
							content() {
								'step 0';
								player.draw(2);
								if (player.countCards('he')) {
									player
										.chooseToDiscard(get.prompt('丹扈'), 'he')
										.set('ai', function (card) {
											return 6 - get.value(card);
										})
								}
								('step 1');
								if (result.bool) {
									trigger.target.addSkill('丹扈2');
									trigger.target.storage.丹扈2 = get.color(result.cards[0]);
									trigger.target.storage.丹扈4 = player;
								}
							},
							ai: {
								threaten: 1.5,
							},
						},
						丹扈2: {
							mark: true,
							group: ['丹扈2_sha', '丹扈2_end'],
							subSkill: {
								sha: {
									trigger: { player: 'shaBegin' },
									forced: true,
									popup: false,
									content() {
										player.storage.丹扈3 = true;
									},
								},
								end: {
									trigger: { player: 'phaseAfter' },
									forced: true,
									popup: false,
									content() {
										if (!player.storage.丹扈3 && player.storage.丹扈4.isAlive()) {
											player.storage.丹扈4.useCard({ name: 'sha' }, player);
										}
										delete player.storage.丹扈2;
										delete player.storage.丹扈3;
										delete player.storage.丹扈4;
										player.removeSkill('丹扈2');
									},
								},
							},
							mod: {
								cardEnabled(card, player) {
									if (get.color(card) == player.storage.丹扈2) return false;
								},
								cardUsable(card, player) {
									if (get.color(card) == player.storage.丹扈2) return false;
								},
								cardRespondable(card, player) {
									if (get.color(card) == player.storage.丹扈2) return false;
								},
								cardSavable(card, player) {
									if (get.color(card) == player.storage.丹扈2) return false;
								},
							},
							intro: {
								content: '不能使用或打出$的牌',
							},
						},
						寿统: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'shaBefore',
								target: 'shaBefore',
							},
							content() {
								'step 0';
								event.num = player.maxHp;
								var str1 = '令全体友方角色摸' + get.cnNumber(event.num, true) + '交一';
								var str2 = '令全体敌方角色摸一交' + get.cnNumber(event.num, true);
								player.chooseControl(str1, str2).set('choice', get.attitude(player, trigger.target) > 0 ? str1 : str2); //QQQ
								event.str = str1;
								('step 1');
								if (result.control == event.str) {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									list.sort(lib.sort.seat);
									if (list.length) {
										player.line(list, 'green');
									}
									event.cc = 1;
									event.numt = list.length;
									event.list = list;
								} else {
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									if (list.length) {
										player.line(list, 'green');
									}
									event.cc = 2;
									event.numt = list.length;
									event.list = list;
								}
								('step 2');
								if (event.cc && event.cc == 1) {
									event.list[event.list.length - event.numt].draw(event.num);
									event.list[event.list.length - event.numt].chooseCard('he', true, '寿统:将一张牌交给' + get.translation(player));
								}
								if (event.cc && event.cc == 2) {
									event.list[event.list.length - event.numt].draw();
									event.list[event.list.length - event.numt].chooseCard(event.num, 'he', true, '寿统:将' + get.cnNumber(event.num, true) + '张牌交给' + get.translation(player));
								}
								('step 3');
								if (result.bool) {
									event.list[event.list.length - event.numt].give(result.cards, player);
								}
								if (--event.numt > 0) event.goto(2);
							},
						},
						拓荒: {
							trigger: {
								player: 'useCardBegin',
							},
							usable: 2,
							filter(event, player) {
								return event.card.name == 'sha' || event.card.name == 'shunshou';
							},
							content() {
								if (trigger.card.name == 'sha') {
									player.gain(game.createCard('shunshou'));
									player.$draw();
								} else {
									player.gain(game.createCard('sha'));
									player.$draw();
								}
							},
						},
						辎断: {
							audio: 'ext:士兵扩展包/audio:2',
							usable: 1,
							trigger: { player: 'shaBegin' },
							content() {
								var card = game.createCard('bingliang');
								player.useCard(card, trigger.target);
								player.recover();
								player.draw(card.number);
							},
						},
						羽扈: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							usable: 1,
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							content() {
								'step 0';
								player.draw();
								trigger.player.draw();
								('step 1');
								trigger.player.getStat().card.sha--;
								if (get.color(trigger.card) == 'red') {
									player.draw(2);
									trigger.player.draw(2);
								}
								('step 2');
								player.chooseTarget(get.prompt('羽扈')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].draw(result.targets[0].maxHp);
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						长戈: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('长戈')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].loseHp();
									player.gainPlayerCard(result.targets[0], 'he', true);
									player.useCard({ name: 'juedou' }, result.targets[0]);
								}
							},
						},
						战鹰: {
							trigger: {
								global: 'gainEnd',
							},
							audio: 'ext:士兵扩展包/audio:2',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('战鹰')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true, 'visible');
								}
								('step 2');
								if (player.isUnderControl()) {
									game.modeSwapPlayer(player);
								}
								var num = 5;
								var cards = get.cards(num);
								event.cards = cards;
								var switchToAuto = function () {
									_status.imchoosing = false;
									if (event.dialog) event.dialog.close();
									if (event.control) event.control.close();
									const target = _status.currentPhase?.next || player;
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
									top.reverse();
									for (var i = 0; i < top.length; i++) {
										ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
									}
									for (var i = 0; i < bottom.length; i++) {
										ui.cardPile.appendChild(bottom[i]);
									}
									player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
									game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
								};
								var chooseButton = function (online, player, cards) {
									var event = _status.event;
									player = player || event.player;
									cards = cards || event.cards;
									event.top = [];
									event.bottom = [];
									event.status = true;
									event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌(先选择的在上)', cards);
									for (var i = 0; i < event.dialog.buttons.length; i++) {
										event.dialog.buttons[i].classList.add('pointerdiv');
									}
									event.switchToAuto = function () {
										event._result = 'ai';
										event.dialog.close();
										event.control.close();
										_status.imchoosing = false;
									};
									event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function (link) {
										var event = _status.event;
										if (link == 'ok') {
											if (online) {
												event._result = {
													top: [],
													bottom: [],
												};
												for (var i = 0; i < event.top.length; i++) {
													event._result.top.push(event.top[i].link);
												}
												for (var i = 0; i < event.bottom.length; i++) {
													event._result.bottom.push(event.bottom[i].link);
												}
											} else {
												var i;
												for (var i = 0; i < event.top.length; i++) {
													ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
												}
												for (var i = 0; i < event.bottom.length; i++) {
													ui.cardPile.appendChild(event.bottom[i].link);
												}
												for (var i = 0; i < event.dialog.buttons.length; i++) {
													if (event.dialog.buttons[i].classList.contains('glow') == false && event.dialog.buttons[i].classList.contains('target') == false) ui.cardPile.appendChild(event.dialog.buttons[i].link);
												}
												player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
												game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
											}
											event.dialog.close();
											event.control.close();
											game.resume();
											_status.imchoosing = false;
										} else if (link == 'pileTop') {
											event.status = true;
											event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
										} else {
											event.status = false;
											event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
										}
									});
									for (var i = 0; i < event.dialog.buttons.length; i++) {
										event.dialog.buttons[i].classList.add('selectable');
									}
									event.custom.replace.button = function (link) {
										var event = _status.event;
										if (link.classList.contains('target')) {
											link.classList.remove('target');
											event.top.remove(link);
										} else if (link.classList.contains('glow')) {
											link.classList.remove('glow');
											event.bottom.remove(link);
										} else if (event.status) {
											link.classList.add('target');
											event.top.unshift(link);
										} else {
											link.classList.add('glow');
											event.bottom.push(link);
										}
									};
									event.custom.replace.window = function () {
										for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
											_status.event.dialog.buttons[i].classList.remove('target');
											_status.event.dialog.buttons[i].classList.remove('glow');
											_status.event.top.length = 0;
											_status.event.bottom.length = 0;
										}
									};
									game.pause();
									game.countChoose();
								};
								event.switchToAuto = switchToAuto;
								if (event.isMine()) {
									chooseButton();
									event.finish();
								} else if (event.isOnline()) {
									event.player.send(chooseButton, true, event.player, event.cards);
									event.player.wait();
									game.pause();
								} else {
									event.switchToAuto();
									event.finish();
								}
								('step 1');
								if (event.result == 'ai' || !event.result) {
									event.switchToAuto();
								} else {
									var top = event.result.top || [];
									var bottom = event.result.bottom || [];
									for (var i = 0; i < top.length; i++) {
										ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
									}
									for (var i = 0; i < bottom.length; i++) {
										ui.cardPile.appendChild(bottom[i]);
									}
									for (var i = 0; i < event.cards.length; i++) {
										if (!top.includes(event.cards[i]) && !bottom.includes(event.cards[i])) {
											ui.cardPile.appendChild(event.cards[i]);
										}
									}
									player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
									game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
								}
							},
						},
						东州长枪: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							nobracket: true,
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								for (var i = 0; i < list.length; i++) {
									list[i].discard(list[i].getCards('he', { type: 'equip' }));
									list[i].loseHp();
								}
							},
						},
						盾甲阵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseEnd', global: 'turnOverEnd' },
							nobracket: true,
							content() {
								'step 0';
								game.JPG3('盾甲阵dhtx', 2500);
								('step 1');
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('wuxie'));
										list[i].gain(game.createCard('jinchan'));
										list[i].$draw(2);
										list[i].changeHujia();
									}
								}
							},
						},
						蹄践: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								var num = trigger.target.countCards('h', { type: 'basic' });
								trigger.target.discard(trigger.target.getCards('h', { type: 'basic' }));
								if (num > 0) player.draw(num);
								trigger.target.loseHp();
							},
						},
						孙氏家众: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: ['shaBegin', 'damageEnd'] },
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							nobracket: true,
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('孙氏家众')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw();
									player.draw();
									result.targets[0].recover();
									player.recover();
								}
							},
						},
						孙氏家丁: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: ['shaBegin', 'damageEnd'] },
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							nobracket: true,
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('孙氏家丁')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].gain(game.createCard('sha'));
									result.targets[0].$draw();
									player.gain(game.createCard('sha'));
									player.$draw();
									result.targets[0].recover();
									player.recover();
								}
							},
						},
						武烈同袍: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							nobracket: true,
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									var card = get.inpilefull('equip').randomGet();
									for (var i = 0; i < list.length; i++) {
										list[i].equip(game.createCard(card), true);
										list[i].changeHujia();
									}
								}
							},
						},
						魏使节: {
							audio: 'ext:士兵扩展包/audio:2',
							usable: 2,
							trigger: { player: ['phaseBegin', 'shaBegin'] },
							nobracket: true,
							content() {
								'step 0';
								var num =
									game.countPlayer(function (target) {
										return target.hp == player.hp;
									}) + 1;
								player.draw(num);
								('step 1');
								player.chooseTarget(get.prompt('魏使节')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									player.gainPlayerCard('he', result.targets[0], 'visible');
								}
								('step 3');
								if (player.countCards('he')) player.chooseCard(true, 'he', '展示一张牌');
								('step 4');
								if (result.bool) {
									player.showCards(result.cards[0]);
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].gain(game.createCard(result.cards[0]), true);
											list[i].$draw();
											list[i].changeHujia();
										}
									}
								}
							},
						},
						长弓手: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							nobracket: true,
							mod: {
								targetInRange(card, player, target) {
									if (card.name == 'sha' && card.number) {
										if (card.number > 6) return true;
									}
								},
							},
							content() {
								trigger.cancel();
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								var num = 1;
								if (typeof trigger.card.number == 'number') {
									num += trigger.card.number;
								}
								for (var i = 0; i < num; i++) {
									player.useCard({ name: 'wanjian' }, list);
								}
							},
							group: '长弓手2',
						},
						长弓手2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							check(event, player) {
								return get.damageEffect(event.player, player, player) > 0;
							},
							filter(event, player) {
								return event.card && event.card.name == 'wanjian' && event.player.isAlive() && event.player != player;
							},
							content() {
								trigger.player.discard(trigger.player.getCards('he', { type: 'equip' }));
							},
							ai: {
								expose: 0.3,
								threaten: 1.3,
							},
						},
						利槊阵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaBegin',
							},
							usable: 1,
							nobracket: true,
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							content() {
								'step 0';
								var num = trigger.target.countCards('he', {
									type: 'equip',
								});
								trigger.target.discard(
									trigger.target.getCards('he', {
										type: 'equip',
									})
								);
								var numa = 2;
								if (num > 0) numa = 2 + num;
								player.draw(numa);
								trigger.target.damage();
								('step 1');
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								player.line(list, 'green');
								for (var i = 0; i < list.length; i++) {
									list[i].draw(
										list[i].countCards('he', function (card) {
											return get.tag(card, 'damage');
										})
									);
								}
								event.list = list;
								('step 2');
								var i = 0;
								while (i < event.list.length) {
									var numc = event.list[i].countCards('he', function (card) {
										return get.tag(card, 'damage');
									});
									event.list[i].changeHujia(numc);
									i++;
								}
							},
						},
						疫病: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: ['damageEnd', 'phaseBegin'],
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('疫病')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var zongnum = [8, 12].randomGet();
									result.targets[0].discard(
										result.targets[0].getCards('he', function (card) {
											return card.number <= zongnum;
										})
									);
									result.targets[0].loseHp(player.maxHp - player.hp);
									result.targets[0].addSkill('疫病2');
								}
							},
						},
						疫病2: {
							trigger: { player: 'phaseBegin' },
							forced: true,
							mark: true,
							nopop: true,
							temp: true,
							intro: {
								content: '疫病效果的角色在其回合开始进行判定,其须弃置大于判定牌点数的所有牌,并进入混乱状态直到其回合结束,并令其与其距离为1的角色失去一点体力',
							},
							content() {
								'step 0';
								player.judge();
								('step 1');
								player.discard(
									player.getCards('he', function (card) {
										return card.number > result.card.number;
									})
								);
								player.goMad({ player: 'phaseAfter' });
								var mbs = game.filterPlayer(function (x) {
									return get.distance(player, x) <= 1;
								});
								mbs.forEach(function (item) {
									item.loseHp();
								});
							},
						},
						水军: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'damageBegin' },
							filter(event, player) {
								return event.card == 'sha' || event.nature == 'fire';
							},
							content() {
								if (Math.random() < 0.6) trigger.cancel();
								player.draw(trigger.num);
							},
						},
						盗劫: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								target: 'shaBegin',
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.player.isAlive() && event.player.countCards('he') > 0;
							},
							forced: true,
							content() {
								var num = 0;
								if (trigger.player.countCards('h')) num++;
								if (trigger.player.countCards('e')) num++;
								if (num > 0) {
									player.gainPlayerCard(trigger.player, num, 'he', true).set('filterButton', function (button) {
										for (var i = 0; i < ui.selected.buttons.length; i++) {
											if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
										}
										return true;
									});
								}
							},
						},
						中坚: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'useCardToBegin',
							},
							filter(event, player) {
								return event.target?.isFriendsOf(player);
							},
							content() {
								if (get.tag(trigger.card, 'damage') && get.color(trigger.card) == 'black') {
									if (Math.random() < 0.5) {
										trigger.player.damage();
									}
									if (Math.random() < 0.6) {
										trigger.cancel();
									}
									if (Math.random() < 0.7) {
										trigger.target.changeHujia();
									}
								} else {
									if (Math.random() < 0.5) {
										trigger.target.gain(game.createCard('wuxie'));
										player.$draw();
									}
									if (Math.random() < 0.6) {
										trigger.target.gain(game.createCard('shan'));
										player.$draw();
									}
									if (Math.random() < 0.7) {
										trigger.target.gainMaxHp();
									}
								}
							},
						},
						武勇: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							check(event, player) {
								if (player.countCards('h', 'sha')) return true;
								return Math.random() < 0.5;
							},
							content() {
								'step 0';
								event.cards = get.cards(5);
								player.showCards(event.cards, '武勇');
								('step 1');
								var num1 = 0;
								var num2 = 0;
								for (var i = 0; i < cards.length; i++) {
									if (get.type(cards[i]) != 'basic' && cards[i].name != 'juedou' && (get.type(cards[i]) != 'equip' || get.subtype(cards[i]) != 'equip1')) {
										cards[i].discard();
										cards.splice(i--, 1);
										num1++;
									} else num2++;
								}
								player.gain(cards, 'gain2');
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.gain(game.createCard('juedou'));
									item.$draw();
								});
								if (num2 > num1) {
									trigger.target.recover();
									trigger.player.damage(2);
								}
							},
						},
						奋骑: {
							group: '奋骑2',
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							mod: {
								attackFrom(from, to, distance) {
									if (typeof from.storage.奋骑 == 'number') return distance - from.storage.奋骑;
								},
							},
							mark: true,
							marktext: '<span style="color:blue">奋</span>',
							intro: {
								content(storage) {
									return '<span style="color:blue">计算与其他角色距离-' + storage + '</span>';
								},
							},
							init(player) {
								player.storage.奋骑 = 0;
							},
							content() {
								'step 0';
								player.judge();
								('step 1');
								event.num = result.card.number;
								('step 2');
								var list = [];
								var list1 = [];
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									if (!list1.includes(node.name) && get.tag(node, 'damage')) {
										list.push(node);
										list1.push(node.name);
										if (list.length >= event.num) break;
									}
								}
								if (list.length < event.num) {
									for (var i = 0; i < ui.discardPile.childElementCount; i++) {
										var node = ui.discardPile.childNodes[i];
										if (!list1.includes(node.name) && get.tag(node, 'damage')) {
											list.push(node);
											list1.push(node.name);
											if (list.length >= event.num) break;
										}
									}
								}
								player.gain(list, 'gain2');
								if (typeof player.storage.奋骑 == 'number') {
									player.storage.奋骑 += event.num;
								} else {
									player.storage.奋骑 = event.num;
								}
								player.markSkill('奋骑');
							},
						},
						奋骑2: {
							forced: true,
							trigger: { player: 'phaseAfter' },
							content() {
								player.storage.奋骑 = 0;
								player.markSkill('奋骑');
							},
						},
						德矢: {
							trigger: { player: 'shaBegin' },
							audio: 'ext:士兵扩展包/audio:2',
							marktext: '<span  style="color:green;font-size:12px;text-align:center;">德矢</span>',
							init(player) {
								player.storage.德矢 = [];
							},
							intro: {
								content: 'cards',
							},
							content() {
								'step 0';
								player.gainPlayerCard(trigger.target, 'he', true);
								if (player.countCards('he')) {
									player.chooseCard(get.prompt('德矢'), 'he').set('ai', function () {
										return 1;
									});
								}
								('step 1');
								if (result.bool) {
									player.storage.德矢 = player.storage.德矢.concat(result.cards);
									player.markSkill('德矢');
									player.lose(result.cards, ui.special);
									player.$give(result.cards, player);
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									player.useCard({ name: 'wanjian' }, list);
								}
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (_status.currentPhase != player) return;
										if (card.name == 'sha' && !player.needsToDiscard() && !player.storage.德矢.length && target.hp > 1) {
											return 'zeroplayertarget';
										}
									},
								},
								threaten: 1.4,
							},
							group: '德矢2',
						},
						德矢2: {
							enable: 'chooseToUse',
							filter(event, player) {
								return event.type == 'dying' && event.dying && event.dying.hp <= 0 && player.storage.德矢.length;
							},
							filterTarget(card, player, target) {
								return target == _status.event.dying;
							},
							forced: true, //QQQ
							delay: 0,
							selectTarget: -1,
							content() {
								'step 0';
								player.chooseCardButton(get.translation('德矢'), player.storage.德矢, true);
								('step 1');
								if (result.bool) {
									player.$throw(result.links);
									player.storage.德矢.remove(result.links[0]);
									result.links[0].discard();
									target.useCard({ name: 'jiu' }, target);
									if (!player.storage.德矢.length) {
										player.unmarkSkill('德矢');
									} else {
										player.markSkill('德矢');
									}
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									player.useCard({ name: 'wanjian' }, list);
								}
							},
							ai: {
								order: 6,
								skillTagFilter(player) {
									return player.storage.德矢.length;
								},
								save: true,
								result: {
									target: 3,
								},
								threaten: 1.6,
							},
						},
						林探: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin', global: 'useCardBegin' },
							filter(event, player) {
								if (event.name == 'useCard') return event.card.name == 'shunshou' || event.card.name == 'lebu';
							},
							usable: 2,
							content() {
								'step 0';
								player.draw(
									player.countCards('he', function (card) {
										return !get.tag(card, 'damage');
									})
								);
								player.chooseTarget(get.prompt('林探')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var card = game.createCard('shunshou');
									player.useCard(card, result.targets[0]);
									var card1 = game.createCard('lebu');
									player.useCard(card1, result.targets[0]);
								}
							},
						},
						郡参: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardBegin' },
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							usable: 1,
							content() {
								'step 0';
								var num = player.countCards('h', function (card) {
									return get.type(card, 'trick') == 'trick';
								});
								var cards = get.cards(3 + num);
								event.cards = cards;
								var next = player.chooseCardButton(cards, '选择获得的红色牌', [1, Infinity]).set('filterButton', function (button) {
									return get.color(button.link) == 'red';
								});
								('step 1');
								if (result.bool) {
									player.gain(result.links);
									player.$draw(result.links);
									var xn = result.links.length;
								}
								for (var i = event.cards.length - 1; i >= 0; i--) {
									if (!result.bool || !result.links.includes(event.cards[i])) {
										ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
									}
								}
								if (xn) {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									list.sort(lib.sort.seat);
									list.map(function (item) {
										item.draw(xn);
									});
								}
							},
						},
						卜梦: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player.judge();
								('step 1');
								event.suit = result.card.suit;
								('step 2');
								if (event.suit == 'club') {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									list.sort(lib.sort.seat);
									list.map(function (item) {
										item.changeHujia();
									});
									var list1 = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list1.sort(lib.sort.seat);
									list1.map(function (item) {
										player.discardPlayerCard(2, item, 'he', true);
									});
								}
								if (event.suit == 'spade') {
									var list1 = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list1.sort(lib.sort.seat);
									list1.map(function (item) {
										item.damage(2, 'thunder');
									});
								}
								if (event.suit == 'diamond') {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									list.sort(lib.sort.seat);
									list.map(function (item) {
										item.gainMaxHp();
									});
									var x = player.countCards('h', function (card) {
										return get.type(card, 'trick') == 'trick';
									});
									var list1 = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list1.sort(lib.sort.seat);
									list1.map(function (item) {
										item.damage(x, 'fire');
									});
								}
								if (event.suit == 'heart') {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									list.sort(lib.sort.seat);
									list.map(function (item) {
										item.recover();
										item.draw(2);
									});
								}
							},
						},
						挖渠: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('挖渠')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var num = result.targets[0].getSkills(true, false).length;
									player.draw(num);
									result.targets[0].addTempSkill('挖渠2', { player: 'phaseAfter' });
								}
							},
						},
						挖渠2: {
							init(player, skill) {
								var num = [1, 2].randomGet();
								var skills = player.getSkills(true, false).randomGets(num);
								player.disableSkill(skill, skills);
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
						北国寒风: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							nobracket: true,
							content() {
								'step 0';
								event.num = [1, 2].randomGet();
								player.chooseTarget(get.prompt('北国寒风'), [1, event.num]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets.sort(lib.sort.seat);
									result.targets.map(function (item) {
										item.chooseToDiscard('h', true, event.num);
										item.chooseToDiscard('e', true, event.num);
										item.loseHp();
									});
								}
							},
						},
						逐刺: {
							audio: 'ext:士兵扩展包/audio:2',
							usable: 1,
							trigger: {
								global: 'shaAfter',
							},
							forced: true, //QQQ
							content() {
								'step 0';
								player.chooseTarget(get.prompt('逐刺')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
									var num = [1, 2].randomGet();
									for (var i = 0; i < num; i++) {
										player.useCard({ name: 'sha' }, result.targets[0], false);
									}
									if (!result.targets[0].isTurnedOver()) result.targets[0].turnOver();
								}
							},
						},
						飞镝: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i] != player && game.players[i].isEnemiesOf(player)) {
										game.players[i].loseHp(2);
										player.useCard({ name: 'wanjian' }, game.players[i]);
									}
								}
								player.recover();
								player.draw(3);
							},
						},
						监丞: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: ['shaBegin', 'phaseEnd'] },
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('监丞')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard('he', result.targets[0], true, 'visible');
									event.target = result.targets[0];
									event.goto(2);
								}
								event.goto(3);
								('step 2');
								if (target.countCards('he') - 1) {
									var qzsl = target.countCards('he') - 1;
									player.discardPlayerCard('he', target, true, qzsl, 'visible');
								}
								player.draw(3);
								('step 3');
								player.chooseTarget(get.prompt('监丞'), [1, 3]).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 4');
								if (result.bool) {
									result.targets.map(function (item) {
										item.addTempSkill('监丞mashu', { player: 'phaseAfter' });
									});
								}
							},
						},
						监丞mashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						冀城长刀: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							usable: 2,
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('冀城长刀')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var num = [1, 2].randomGet();
									for (var i = 0; i < num; i++) {
										result.targets[0].loseHp();
										player.draw(result.targets[0].maxHp - result.targets[0].hp);
									}
								}
							},
						},
						保驾精骑: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return event.target.isFriendsOf(player);
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('保驾精骑')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gain(game.createCard('sha'));
									player.$draw();
									player.gainPlayerCard(result.targets[0], 'he', true);
									player.useCard({ name: 'juedou' }, result.targets[0]);
									trigger.target.recover();
									trigger.target.gain(game.createCard('shan'));
								}
							},
							group: '保驾精骑mashu',
						},
						保驾精骑mashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						幽州盾甲: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseEnd' },
							nobracket: true,
							filter(event, player) {
								return player.countCards('he');
							},
							content() {
								'step 0';
								player.chooseCard(true, [1, 3], 'he', '交给一名角色1到3张牌').set('ai', function (card) {
									if (get.position(card) == 'e') return -1;
									if (card.name == 'shan') return 1;
									if (get.type(card) == 'equip') return 0.5;
									return 0;
								});
								('step 1');
								event.cards = result.cards;
								player.chooseTarget(true, get.prompt('幽州盾甲')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 2');
								result.targets[0].gain(event.cards, player);
								player.$give(event.cards, result.targets[0]);
								var x = event.cards.length;
								result.targets[0].changeHujia(x);
								player.draw(3 * x);
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								var suijitarget = list.randomGet();
								suijitarget.chooseToDiscard('he', true, 3 * x);
							},
						},
						擎盾: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true, //QQQ
							content() {
								'step 0';
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].useCard(game.createCard('renwang'), list[i]);
									}
								}
								player.draw(2);
								('step 1');
								player.judge(function (card) {
									if (get.color(card) == 'red') return 2;
									return -0.5;
								});
								('step 2');
								if (result.bool) {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].changeHujia();
										}
									}
								}
							},
						},
						轻盾骑: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							filterCard: true,
							nobracket: true,
							content() {
								'step 0';
								game.JPG3('坐骑马', 3600);
								player.addTempSkill('轻盾骑2');
								('step 1');
								var card = cards[0];
								if (!get.tag(card, 'damage')) {
									player
										.chooseTarget('是否弃置一名角色的一张牌？', function (card, player, target) {
											return player != target && target.countCards('he') > 0;
										})
										.set('ai', function (target) {
											var player = _status.event.player;
											if (get.attitude(player, target) < 0) {
												return Math.max(0.5, get.effect(target, { name: 'sha' }, player, player));
											}
											return 0;
										});
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.line(result.targets, 'green');
									event.target = result.targets[0];
									player.discardPlayerCard(event.target, 'he', true).ai = get.buttonValue;
									result.targets[0].chooseToDiscard('h', true, function (card) {
										return card.name == 'shan';
									});
									event.target.loseHp();
								}
								('step 3');
								player.judge(function (card) {
									if (get.color(card) == 'red') return 2;
									return -0.5;
								});
								('step 4');
								if (result.bool) {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].changeHujia();
										}
									}
								} else {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].gain(game.createCard('shan'));
											list[i].$draw();
										}
									}
								}
							},
						},
						轻盾骑2: {
							mod: {
								attackFrom() {
									return -Infinity;
								},
							},
						},
						中军翼: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: {
								global: 'shaBegin',
							},
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							content() {
								'step 0';
								trigger.target.chooseToDiscard('he', true, function (card) {
									return get.type(card) != 'basic';
								});
								trigger.target.damage();
								('step 1');
								event.num = 1 + trigger.target.maxHp - trigger.target.hp;
								player.judge();
								('step 2');
								if (get.type(result.card) != 'basic') {
									trigger.directHit = true;
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											for (var j = 0; j < event.num; j++) {
												list[i].gain(game.createCard('shan'));
												list[i].$draw();
											}
										}
									}
								} else trigger.target.turnOver();
							},
						},
						留义: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaBegin',
							},
							filter(event, player) {
								return event.target.isFriendsOf(player);
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							content() {
								'step 0';
								game.JPG3('留义', 2000);
								('step 1');
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.draw(2);
								});
								if (Math.random() < 0.66) {
									trigger.cancel();
								}
								trigger.player.chooseToDiscard('h', true);
								player.useCard({ name: 'sha' }, trigger.player, false);
							},
						},
						重甲盾: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: {
								global: 'useCardToBegin',
							},
							filter(event, player) {
								return get.tag(event.card, 'damage') && event.target?.isFriendsOf(player);
							},
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							content() {
								'step 0';
								game.JPG3('重甲盾', 2338);
								('step 1');
								if (Math.random() < 0.6) {
									trigger.cancel();
								}
								if (Math.random() < 0.7) {
									trigger.target.changeHujia();
								}
								if (get.color(trigger.card) == 'black') {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									list.sort(lib.sort.seat);
									list.map(function (item) {
										item.gain(game.createCard(trigger.card));
										item.$draw();
									});
								}
								if (get.color(trigger.card) == 'red') {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									list.sort(lib.sort.seat);
									list.map(function (item) {
										item.gainMaxHp();
										item.recover();
									});
								}
							},
						},
						都农: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 3,
							content() {
								'step 0';
								event.num = [1, 3].randomGet();
								player.chooseTarget(get.prompt('都农')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, event.num);
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									list.sort(lib.sort.seat);
									list.map(function (item) {
										item.draw(event.num);
									});
								}
							},
						},
						备骑: {
							trigger: { global: 'shaBegin', player: 'phaseBegin' },
							usable: 1,
							content() {
								'step 0';
								player.draw();
								player.chooseTarget().set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) player.gainPlayerCard('he', result.targets[0], 1, 'visible');
								else event.finish();
								('step 2');
								event.num = [1, 3].randomGet();
								var fzcards0 = [];
								var fzcards = player.getCards('h').randomGets(event.num);
								if (fzcards.length) {
									fzcards.map(function (item) {
										fzcards0.push(game.createCard(item));
									});
									event.fzcards0 = fzcards0;
								} else event.finish();
								('step 3');
								player.chooseTarget(get.prompt('备骑')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 4');
								if (result.bool) {
									result.targets[0].gain(event.fzcards0);
									result.targets[0].$draw(event.fzcards0.length);
								}
							},
						},
						重车: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('重车')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.draw(1 + get.distance(player, result.targets[0]));
									game.swapSeat(player, result.targets[0]);
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									if (player.hujia < 2 * list.length) player.changeHujia(2 * list.length);
									if (Math.random() < 0.5) {
										player.phase('nodelay');
									}
								}
							},
						},
						鸣锋: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('鸣锋')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].loseHp();
									player.draw(2);
								}
							},
							group: '鸣锋2',
						},
						鸣锋2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'dyingBegin' },
							forced: true,
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							content() {
								if (Math.random() < 0.5) player.recover(1 - player.hp);
							},
						},
						铜墙铁壁: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { player: 'phaseEnd' },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								player.changeHujia(list.length * list.length);
							},
							group: '铜墙铁壁2',
						},
						铜墙铁壁2: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.target?.isFriendsOf(player) && player.hujia;
							},
							content() {
								player.changeHujia(-1);
								trigger.cancel();
							},
						},
						屯积: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'loseEnd' },
							forced: true,
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.original && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								for (var i = 0; i < trigger.cards.length; i++) {
									player.gain(game.createCard('shunshou'));
									player.$draw();
								}
							},
							group: '屯积2',
						},
						屯积2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardAfter' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('屯积')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						坚义: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return get.tag(event.card, 'damage') && event.target?.isFriendsOf(player);
							},
							usable: 1,
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.draw();
									item.chooseToUse();
								});
								if (Math.random() < 0.66) trigger.cancel();
								var num = [1, 2].randomGet();
								trigger.player.damage();
							},
						},
						灵迅: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha' && event.target.isFriendsOf(player) && event.player.countCards('he');
							},
							content() {
								'step 0';
								player.gainPlayerCard(trigger.player, 'he', true);
								('step 1');
								if (result.cards[0].name != 'sha') trigger.cancel();
							},
						},
						屯令: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.original && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								'step 0';
								game.JPG3('屯令', 10688);
								player.chooseTarget(get.prompt('屯令')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.useCard(
										{
											name: 'shunshou',
										},
										result.targets[0]
									);
									if (player.countCards('h')) player.chooseCard(true);
								}
								('step 2');
								if (result.bool) {
									player.showCards(result.cards[0]);
									if (result.cards[0].suit != 'heart') {
										var list = game.filterPlayer(function (current) {
											return current.isFriendsOf(player);
										});
										list.sort(lib.sort.seat);
										list.map(function (item) {
											item.gain(game.createCard('sha'));
											item.$draw();
										});
									}
								}
							},
						},
						门童: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return player.countCards('he');
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							content() {
								'step 0';
								player.chooseToDiscard('he', true);
								('step 1');
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.gain(game.createCard(result.cards[0]));
									item.$draw();
								});
								player.judge();
								('step 2');
								if (get.color(result.card) == 'red') trigger.cancel();
							},
						},
						护堰: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha' && event.target.isFriendsOf(player);
							},
							content() {
								var target = trigger.player;
								if (!target.hasSkill('fengyin')) {
									target.addTempSkill('fengyin');
								}
								player.useCard({ name: 'qijia' }, target);
								player.useCard({ name: 'sha' }, target, false);
								trigger.target.phase('nodelay');
							},
						},
						阳安刚枪: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { player: 'shaBegin' },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.draw(3);
									item.gain(game.createCard('qijia'));
									item.$draw();
								});
								var list1 = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list1.sort(lib.sort.seat);
								list1.map(function (item) {
									player.gainPlayerCard(item, 'he', true);
								});
							},
							group: '阳安刚枪2',
						},
						阳安刚枪2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							usable: 2,
							filter(event, player) {
								return get.tag(event.card, 'damage') && event.target?.isFriendsOf(player);
							},
							content() {
								trigger.cancel();
								player.useCard(game.createCard(trigger.card.name), trigger.player);
							},
						},
						先登死士: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							trigger: { global: 'phaseBegin' },
							content() {
								var evt = _status.event.getParent('phase');
								if (evt && evt.name == 'phase') {
									//QQQ
									evt.finish();
								}
								player.discardPlayerCard('he', trigger.player, true, 'visible');
								player.useCard({ name: 'sha' }, trigger.player);
								player.useCard({ name: 'wanjian' }, trigger.player);
								player.changeHujia();
								player.phase('nodelay');
							},
						},
						新野百骑: {
							group: '新野百骑2',
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								var next = player.discardPlayerCard(get.prompt('新野百骑', trigger.target), trigger.target, 'he', false);
								('step 1');
								if (result.bool) {
									if (get.color(result.cards[0]) == 'black') {
										player.useCard({ name: 'tiesuo' }, trigger.target);
										player.useCard({ name: 'zhibi' }, trigger.target);
									}
									if (get.color(result.cards[0]) == 'red') {
										trigger.target.damage('fire');
									}
								}
							},
						},
						新野百骑2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseEnd' },
							nobracket: true,
							content() {
								var gaincard = [];
								var gaincard1 = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (get.tag(ui.cardPile.childNodes[i], 'damage')) {
										gaincard.push(ui.cardPile.childNodes[i].name);
									}
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									if (get.tag(ui.discardPile.childNodes[i], 'damage')) {
										gaincard.push(ui.discardPile.childNodes[i].name);
									}
								}
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (!get.tag(ui.cardPile.childNodes[i], 'damage')) {
										gaincard1.push(ui.cardPile.childNodes[i].name);
									}
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									if (!get.tag(ui.discardPile.childNodes[i], 'damage')) {
										gaincard1.push(ui.discardPile.childNodes[i].name);
									}
								}
								gaincard = [...new Set(gaincard)];
								gaincard1 = [...new Set(gaincard1)];
								var num1 = player.countCards('he', function (card) {
									return get.color(card) == 'black';
								});
								var num2 = player.countCards('he', function (card) {
									return get.color(card) == 'red';
								});
								for (var i = 0; i < num1; i++) {
									player.gain(game.createCard(gaincard.randomGet()));
								}
								for (var i = 0; i < num2; i++) {
									player.gain(game.createCard(gaincard1.randomGet()));
								}
							},
						},
						夜叉行: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							group: '夜叉行2',
							trigger: { global: 'shaBegin' },
							usable: 1,
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								'step 0';
								player.gainPlayerCard('he', trigger.target, true, 'visible');
								('step 1');
								if (result.cards[0]) {
									var gaincard = [];
									var gaincard1 = [];
									for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
										if (get.tag(ui.cardPile.childNodes[i], 'damage')) {
											gaincard.push(ui.cardPile.childNodes[i].name);
										}
									}
									for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
										if (get.tag(ui.discardPile.childNodes[i], 'damage')) {
											gaincard.push(ui.discardPile.childNodes[i].name);
										}
									}
									for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
										if (!get.tag(ui.cardPile.childNodes[i], 'damage')) {
											gaincard1.push(ui.cardPile.childNodes[i].name);
										}
									}
									for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
										if (!get.tag(ui.discardPile.childNodes[i], 'damage')) {
											gaincard1.push(ui.discardPile.childNodes[i].name);
										}
									}
									gaincard = [...new Set(gaincard)];
									gaincard1 = [...new Set(gaincard1)];
									if (get.color(result.cards[0]) == 'black') player.gain(game.createCard(gaincard.randomGet()));
									if (get.color(result.cards[0]) == 'red') player.gain(game.createCard(gaincard1.randomGet()));
								}
							},
						},
						夜叉行2: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { player: 'useCardBegin' },
							filter(event, player) {
								return !get.tag(event.card, 'damage');
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('夜叉行')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].damage();
								}
							},
						},
						永昌守军: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							group: '永昌守军2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								event.list = game
									.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									})
									.sortBySeat();
								('step 1');
								if (event.list.length) {
									event.current = event.list.shift();
									//player.line2(event.current);
								} else {
									event.finish();
								}
								('step 2');
								event.cards = get.cards(1);
								player.showCards(get.translation(player) + '对' + get.translation(event.current) + '发动了【永昌守军】', event.cards);
								('step 3');
								var card = cards[0];
								var bool1 = game.hasPlayer(function (current) {
									return event.current.canUse(card, current, false);
								});
								var bool2 = game.hasPlayer(function (current) {
									return event.current.canUse({ name: 'sha' }, current);
								});
								if (bool1 && bool2) {
									event.current
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
									event.goto(1);
								}
								('step 4');
								var card = cards[0];
								if (result && typeof event.directindex != 'number') {
									event.directindex = result.index;
								}
								if (event.directindex == 1) {
									event.insert(lib.skill.永昌守军.content_sha, {
										player: event.current,
										targets: game.filterPlayer(),
										cards: cards,
									});
								} else {
									event.insert(lib.skill.永昌守军.content_use, {
										player: event.current,
										card: card,
										targets: game.filterPlayer(),
									});
								}
								event.goto(1);
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
						},
						永昌守军2: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { global: 'useCardToBegin' },
							usable: 2,
							filter(event, player) {
								return (event.card.name == 'sha' || event.card.name == 'nanman') && event.target.isFriendsOf(player);
							},
							content() {
								trigger.target.changeHujia();
								trigger.player.chooseToDiscard('he', true, 2);
							},
						},
						正方枪领: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							group: '正方枪领2',
							nobracket: true,
							content() {
								'step 0';
								event.list = game
									.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									})
									.sortBySeat();
								('step 1');
								if (event.list.length) {
									event.current = event.list.shift();
								} else {
									event.finish();
								}
								('step 2');
								var cards = get.cards(2);
								event.current.viewCards('正方枪领', cards);
								event.cards2 = [];
								for (var i = 0; i < cards.length; i++) {
									if (get.type(cards[i]) == 'basic') {
										ui.special.appendChild(cards[i]);
										event.cards2.push(cards[i]);
									} else {
										cards[i].discard();
									}
								}
								('step 3');
								if (event.cards2 && event.cards2.length) {
									event.current.gain(event.cards2, 'draw');
									game.log(event.current, '获得了' + get.cnNumber(event.cards2.length) + '张牌');
								}
								event.goto(1);
							},
						},
						正方枪领2: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								var card = trigger.target.getCards('h').randomGet();
								player.gain(card, trigger.target);
								trigger.target.$giveAuto(card, player);
								('step 1');
								var name = get.translation(trigger.target.name);
								('step 2');
								var cards = get.cards(2);
								player.viewCards('正方枪领', cards);
								event.cards2 = [];
								for (var i = 0; i < cards.length; i++) {
									if (get.type(cards[i]) == 'basic') {
										ui.special.appendChild(cards[i]);
										event.cards2.push(cards[i]);
									} else {
										cards[i].discard();
									}
								}
								trigger.target.addSkill('正方枪领3');
								('step 3');
								if (event.cards2 && event.cards2.length) {
									player.gain(event.cards2, 'draw');
									game.log(player, '获得了' + get.cnNumber(event.cards2.length) + '张牌');
								}
							},
						},
						正方枪领3: {
							nobracket: true,
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							mark: true,
							intro: {
								content: '下个摸牌阶段少摸一张牌',
							},
							content() {
								trigger.num--;
								player.removeSkill('正方枪领3');
							},
						},
						临渊荡寇3: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('临渊荡寇'), [1, 2], function (card, player, target) {
										return get.distance(player, target) <= 2;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets.map(function (item) {
										player.draw(
											item.countCards('h', function (card) {
												return card.name == 'shan';
											})
										);
										item.chooseToDiscard('he', true, 1, function (card) {
											return card.name == 'shan';
										});
										item.damage();
									});
								}
							},
						},
						临渊荡寇: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { player: 'damageBegin' },
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							init(player) {
								player.storage.临渊荡寇 = [];
							},
							content() {
								'step 0';
								player.chooseCard(get.prompt('临渊荡寇'), 'he', true).set('ai', function (card) {
									if (card.name == 'du') return 20;
									return 7 - get.useful(card);
								});
								('step 1');
								if (result.bool) {
									player.lose(result.cards, ui.special);
									player.$give(result.cards, player);
									for (var i = 0; i < result.cards.length; i++) {
										player.storage.临渊荡寇.push(result.cards[i]);
									}
									player.markSkill('临渊荡寇');
									trigger.cancel();
								}
								('step 2');
								player.chooseTarget(get.prompt('临渊荡寇')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									var target = result.targets[0];
									player.draw(get.distance(player, target));
									game.swapSeat(player, target);
								}
							},
							marktext: '临',
							intro: {
								content: 'cards',
							},
							group: ['临渊荡寇2', '临渊荡寇3'],
							ai: {
								threaten: 0.8,
								maixie: true,
								maixie_hp: true,
							},
						},
						临渊荡寇2: {
							trigger: { player: 'phaseBegin' },
							nobracket: true,
							forced: true,
							filter(event, player) {
								return player.storage.临渊荡寇.length;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('临渊荡寇')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 2 * player.storage.临渊荡寇.length, 'he', true);
								}
								player.$throw(player.storage.临渊荡寇.slice(0), 1000);
								while (player.storage.临渊荡寇.length) {
									player.storage.临渊荡寇.shift().discard();
								}
								player.unmarkSkill('临渊荡寇');
							},
						},
						剑阁破阵: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '剑阁破阵2',
							nobracket: true,
							trigger: { player: 'phaseBegin' },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.chooseToDiscard('he', true, 1, function (card) {
										return card.name == 'sha';
									});
								});
								player.useCard({ name: 'sha' }, list, false);
							},
						},
						剑阁破阵2: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha' && event.target.isFriendsOf(player);
							},
							content() {
								'step 0';
								trigger.player.chooseToDiscard('h', true, 2, function (card) {
									return get.tag(card, 'damage');
								});
								('step 1');
								if (result.bool) {
									var rs = [];
									for (var i = 0; i < result.cards.length; i++) {
										rs.push(result.cards[i]);
									}
									var cs = [...new Set(rs)];
									if (cs.includes('black')) trigger.cancel();
									if (cs.includes('red')) trigger.target.draw(2);
								}
							},
						},
						骁志哀兵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaEnd',
								player: 'phaseBegin',
							},
							usable: 1,
							nobracket: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('骁志哀兵'), [1, 2]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets.map(function (item) {
										player.discardPlayerCard(item, 'he', true);
										if (Math.random() < 0.5) item.loseHp();
									});
								}
								('step 2');
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'sha' }, list, false);
							},
						},
						崖顶奋迅: {
							nobracket: true,
							audio: 'ext:士兵扩展包/audio:2',
							gainnable: true,
							trigger: { global: 'phaseUseBegin' },
							logTarget: 'player',
							check(event, player) {
								return get.attitude(player, event.player) >= 0;
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								player.chooseCard(1, 'he', true, '交给' + get.translation(trigger.player) + '一张牌').set('ai', function (card) {
									if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return -1;
									if (get.tag(card, 'damage')) return 1;
									if (get.type(card) == 'equip') return 1;
									return 0;
								});
								('step 2');
								trigger.player.gain(result.cards, player);
								if (player == game.me || trigger.player == game.me) player.$give(result.cards, trigger.player);
								else player.$give(1, trigger.player);
								('step 3');
								player.chooseTarget(get.prompt('崖顶奋迅'), [1, 2]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 4');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets, false);
								}
								('step 5');
								trigger.player.gain([game.createCard('shan'), game.createCard('shan')]);
								trigger.player.$draw(2);
							},
							ai: {
								threaten: 1.1,
								expose: 0.3,
							},
						},
						炙龟占甲: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { player: 'phaseBegin' },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								var num = [1, 2, 3, 4].randomGet();
								switch (num) {
									case 1: {
										list.map(function (item) {
											item.damage('fire');
										});
										player.changeHujia();
									}
									case 2: {
										list.map(function (item) {
											item.chooseToDiscard('h', true, function (card) {
												return card.name == 'sha';
											});
											item.damage('fire');
										});
										player.changeHujia(2);
									}
									case 3: {
										list.map(function (item) {
											item.chooseToDiscard('h', true, 2, function (card) {
												return card.name == 'sha' || card.name == 'shan';
											});
											item.damage('fire');
										});
										player.changeHujia(3);
									}
									case 4: {
										list.map(function (item) {
											item.chooseToDiscard('h', true, 3, function (card) {
												return card.name == 'sha' || card.name == 'shan' || card.name == 'tao';
											});
											item.damage('fire');
										});
										player.changeHujia(4);
									}
								}
							},
						},
						征西先锋: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: ['phaseBegin', 'shaBegin'] },
							nobracket: true,
							usable: 2,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('征西先锋')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.draw(Math.min(player.maxHp, 20));
									for (var i = 0; i < player.maxHp; i++) {
										player.useCard({ name: 'sha' }, result.targets[0], false);
									}
									player.phaseUse();
									player.addTempSkill('征西先锋2');
								}
							},
						},
						征西先锋2: {
							mod: {
								cardUsable(card, player, num) {
									if (typeof player.maxHp == 'number' && card.name == 'sha') {
										return num + player.maxHp;
									}
								},
								globalFrom(from, to, distance) {
									if (typeof from.maxHp == 'number') {
										return distance - from.maxHp;
									}
								},
							},
						},
						庲降扰敌: {
							group: ['庲降扰敌2', '庲降扰敌3'],
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							nobracket: true,
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								var clist = ['sha', 'tao', 'jiu', 'shan'];
								list.map(function (item) {
									var name = clist.randomGet();
									if (name == 'sha') {
										item.gain(game.createCard(name, null, null, ['null', 'fire', 'thunder'].randomGet()));
									} else item.gain(game.createCard(name));
									item.$draw();
								});
							},
						},
						庲降扰敌2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							nobracket: true,
							usable: 1,
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								var list1 = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list1.sort(lib.sort.seat);
								for (var i = 0; i < list.length; i++) {
									for (var j = 0; j < list1.length; j++) {
										list[i].useCard({ name: 'sha' }, list1[j], false);
									}
								}
								list1.map(function (item) {
									item.chooseToDiscard('h', true, function (card) {
										return card.name == 'shan';
									});
								});
								list1.map(function (item) {
									item.chooseToDiscard('h', true, function (card) {
										return get.type(card) == 'basic';
									});
								});
							},
						},
						庲降扰敌3: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							usable: 2,
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha' && event.target.isFriendsOf(player);
							},
							content() {
								trigger.cancel();
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.damage();
								});
							},
						},
						蜀郡信使: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { player: ['phaseBegin', 'shaBegin'] },
							usable: 2,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('蜀郡信使')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard('he', result.targets[0], true, 'visible');
								}
								('step 2');
								player.chooseTarget(get.prompt('蜀郡信使')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].draw(2);
								}
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.loseHp();
								});
							},
						},
						德信卫士: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '德信卫士2',
							nobracket: true,
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('德信卫士'), [1, 2]).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									result.targets.map(function (item) {
										item.draw(2);
										item.gain([game.createCard('sha'), game.createCard('sha')]);
										item.$draw(2);
										item.useCard({ name: 'sha' }, list, false);
									});
								}
							},
						},
						德信卫士2: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { global: 'gainAfter' },
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.name == 'sha' && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('德信卫士')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].changeHujia();
								}
							},
						},
						令官: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '令官2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true, //QQQ
							content() {
								'step 0';
								var choiceList = ['获得一张指定类型的牌'];
								choiceList.push('摸两张牌,你移动场上一张牌');
								player
									.chooseControl('cancel2')
									.set('choiceList', choiceList)
									.set('prompt', get.prompt('令官'))
									.set('ai', function () {
										var player = _status.event.player;
										if (player.canMoveCard(true)) return 1;
										return 0;
									});
								('step 1');
								if (result.control == 'cancel2') event.finish();
								else {
									player.draw();
									if (result.index == 0) {
										player
											.chooseControl('basic', 'trick', 'equip')
											.set('prompt', '选择获得一种类型的牌')
											.set('ai', function () {
												var player = _status.event.player;
												if (player.hp <= 3 && !player.countCards('h', { name: ['shan', 'tao'] })) return 'basic';
												if (player.countCards('he', { type: 'equip' }) < 2) return 'equip';
												return 'trick';
											});
									} else {
										var list = game.filterPlayer(function (current) {
											return current.isFriendsOf(player);
										});
										list.sort(lib.sort.seat);
										list.map(function (item) {
											item.draw(2);
										});
										player.moveCard(true);
									}
								}
								('step 2');
								var card = get.cardPile2(function (card) {
									return get.type(card, 'trick') == result.control;
								});
								if (card) {
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									list.sort(lib.sort.seat);
									list.map(function (item) {
										item.gain(game.createCard(card));
										item.$draw();
									});
								}
							},
						},
						令官2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								trigger.target[['loseHp', 'turnOver', 'loseMaxHp'].randomGet()]();
							},
						},
						讨逆: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								var num = [1, 2].randomGet();
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									player.gainPlayerCard('he', item, true, num);
									player.discardPlayerCard(num, item, 'he', true);
								});
								for (var i = 0; i < 2; i++) {
									player.useCard({ name: 'sha' }, list, false);
								}
							},
						},
						讨逆2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							usable: 1,
							content() {
								var num = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								}).length;
								player.draw(num);
								player.addTempSkill('讨逆3');
							},
						},
						讨逆3: {
							mod: {
								maxHandcard(player, num) {
									return (
										num +
										game.filterPlayer(function (current) {
											return current.isFriendsOf(player);
										}).length
									);
								},
							},
						},
						新野民兵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseUseBegin' },
							nobracket: true,
							content() {
								'step 0';
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.gain(game.createCard('sha'));
									item.$draw();
								});
								('step 1');
								event.card = game.createCard(['sha', 'shan', 'tao', 'jiu'].randomGet());
								player.gain(event.card);
								player.$draw();
								// if(player.countCards('h')){
								// player.showCards(player.getCards('h').randomGet());
								// }
								('step 2');
								if (get.color(event.card) == 'black') {
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									player.useCard({ name: 'sha' }, list, false);
								}
							},
						},
						越部狼骑: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { player: 'phaseBegin' },
							content() {
								var num = [2, 4].randomGet();
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								for (var i = 0; i < num; i++) {
									player.useCard({ name: 'sha' }, list, false);
								}
								var listjnname = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									var current = ui.cardPile.childNodes[i];
									if (get.tag(current, 'damage')) listjnname.push(current.name);
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									var current = ui.discardPile.childNodes[i];
									if (get.tag(current, 'damage')) listjnname.push(current.name);
								}
								var gc = [];
								for (var i = 0; i < num; i++) {
									gc.push(game.createCard(listjnname.randomGet()));
								}
								player.gain(gc);
								player.$draw(num);
							},
						},
						黑雕: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '黑雕2',
							trigger: { player: 'phaseBegin' },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.gain(game.createCard('wuzhong'));
									item.$draw();
								});
								var list1 = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list1.sort(lib.sort.seat);
								player.useCard({ name: ['sha', 'guohe'].randomGet() }, list1, false);
							},
						},
						黑雕2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'damageBegin' },
							forced: true, //QQQ
							filter(event, player) {
								return player.countCards('h', { name: 'wuzhong' });
							},
							content() {
								'step 0';
								var goon = get.attitude(player, trigger.player) < 0;
								var next = player.chooseToDiscard(get.prompt('黑雕', trigger.player));
								next.set('filterCard', function (card) {
									return card.name == 'wuzhong';
								});
								next.set('prompt2', '弃置一张无中生有并防止此伤害,并对所有敌方角色造成一点伤害');
								next.set('ai', function (card) {
									if (_status.event.goon) {
										return 8 - get.value(card);
									}
									return 0;
								});
								next.set('goon', goon);
								('step 1');
								if (result.bool) {
									trigger.cancel();
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									list.map(function (item) {
										item.damage();
									});
								}
							},
						},
						山野莽夫: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { global: 'shaBegin' },
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								var hs = trigger.player.getCards('h');
								if (hs.length) {
									var hs2 = [];
									for (var i = 0; i < hs.length; i++) {
										if (get.tag(hs[i], 'damage')) hs2.push(game.createCard(hs[i].name, hs[i].suit, hs[i].number));
									}
									player.gain(hs2, 'draw');
								}
								trigger.player[['damage', 'loseHp'].randomGet()]([1, 2].randomGet());
								player[['recover', 'draw'].randomGet()]([1, 2].randomGet());
							},
						},
						艳阳: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseEnd' },
							filter(event, player) {
								return event.player.countCards('he', { color: 'red' });
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								var num = trigger.player.countCards('he', { color: 'red' });
								player.draw(num);
								trigger.player.damage('fire', num);
							},
						},
						垄督: {
							audio: 'ext:士兵扩展包/audio:2',
							group: ['垄督2', '垄督3'],
							trigger: { player: 'phaseBegin' },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('youdishenru'));
										list[i].gain(game.createCard('youdishenru'));
										list[i].$draw(2);
									}
								}
							},
						},
						垄督2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return player.countCards('h', { name: 'youdishenru' }) && get.tag(event.card, 'damage') && event.target?.isFriendsOf(player);
							},
							content() {
								'step 0';
								player.chooseToDiscard(get.prompt('垄督', trigger.player), function (card) {
									return card.name == 'youdishenru';
								});
								trigger.cancel();
								('step 1');
								player.gain(game.createCard('wugu'));
								player.gain(game.createCard('wugu'));
								player.$draw(2);
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.damage('fire');
								});
							},
						},
						垄督3: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'useCard',
							},
							_priority: 5,
							filter(event, player) {
								return event.card.name == 'wugu';
							},
							forced: true, //QQQ
							content() {
								'step 0';
								player
									.chooseTarget('选择令' + get.translation(trigger.card) + '无效的目标', [1, trigger.targets.length], function (card, player, target) {
										return _status.event.getTrigger().targets.includes(target);
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										if (game.phaseNumber > game.players.length * 2 && trigger.targets.length >= game.players.length - 1) {
											return -ai.get.effect(target, trigger.card, trigger.player, _status.event.player);
										}
										return -1;
									});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										trigger.targets.remove(result.targets[i]);
									}
								}
							},
						},
						东州辎重骑: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('zengbin'));
										list[i].gain(game.createCard('zengbin'));
										list[i].$draw(2);
									}
								}
							},
							group: ['东州辎重骑2', '东州辎重骑3', '东州辎重骑4'],
						},
						东州辎重骑2: {
							trigger: {
								global: 'phaseUseBegin',
							},
							mod: {
								attackFrom(from, to, distance) {
									if (typeof from.storage.东州辎重骑2 == 'number') return distance - from.storage.东州辎重骑2;
								},
							},
							mark: true,
							marktext: '<span style="color:red">骑</span>',
							intro: {
								content(storage) {
									return '<span style="color:blue">计算与其他角色距离-' + storage + '</span>';
								},
							},
							init(player) {
								player.storage.东州辎重骑2 = 0;
							},
							filter(event, player) {
								return (
									event.player.isFriendsOf(player) &&
									player.countCards('h', function (card) {
										return card.name == 'zengbin';
									}) > 0
								);
							},
							content() {
								'step 0';
								player.chooseToDiscard(get.prompt('东州辎重骑2'), 'he', function (card) {
									return card.name == 'zengbin';
								});
								('step 1');
								if (result.bool) {
									trigger.player.draw(3);
									player.storage.东州辎重骑2 = result.cards[0].number;
									trigger.player.storage.东州辎重骑2 = result.cards[0].number;
									trigger.player.addTempSkill('东州辎重骑2');
								}
							},
						},
						东州辎重骑3: {
							trigger: {
								global: 'useCardToBegin',
							},
							filter(event, player) {
								return event.card.name == 'zengbin';
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list) {
									list.sort(lib.sort.seat);
									for (var i = 0; i < list.length; i++) {
										trigger.targets.push(list[i]);
										game.log(list[i], '成为了额外目标');
										trigger.player.line(trigger.targets);
									}
								}
							},
						},
						东州辎重骑4: {
							trigger: { global: 'phaseAfter' },
							forced: true,
							silent: true,
							popup: false,
							_priority: 10,
							content() {
								player.storage.奋骑 = 0;
								player.unmarkSkill('奋骑');
							},
						},
						东州义军: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'phaseBegin' },
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							content() {
								'step 0';
								var num = [1, 2].randomGet();
								trigger.player.gainMaxHp(num);
								trigger.player.recover(num);
								event.num = num;
								('step 1');
								var card = get.cards();
								event.card = card;
								player.showCards(event.card);
								player.gain(event.card);
								player.$draw(event.card);
								var nm = event.card.number;
								var gaincard1 = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (!get.tag(ui.cardPile.childNodes[i], 'damage')) {
										gaincard1.push(ui.cardPile.childNodes[i].name);
									}
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									if (!get.tag(ui.discardPile.childNodes[i], 'damage')) {
										gaincard1.push(ui.discardPile.childNodes[i].name);
									}
								}
								gaincard1 = [...new Set(gaincard1)];
								for (var i = 0; i < nm; i++) {
									trigger.player.gain(game.createCard(gaincard1.randomGet()));
								}
								('step 2');
								if (--event.num > 0) {
									event.goto(1);
								}
							},
						},
						新野县役: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: ['phaseBegin', 'damageBegin'] },
							content() {
								'step 0';
								event.num = 0;
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								event.list = list;
								('step 1');
								event.cards = get.cards(2);
								event.list[event.num].showCards(event.cards);
								('step 2');
								event.list[event.num].gain(event.cards);
								event.list[event.num].$draw(event.cards);
								if (get.color(event.cards[0]) == get.color(event.cards[1])) {
									event.list[event.num].changeHujia();
									var suijidirens = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player) && current.countCards('h');
									});
									if (suijidirens) player.useCard({ name: 'toulianghuanzhu' }, suijidirens.randomGet());
								} else {
									var suijidiren = game
										.filterPlayer(function (current) {
											return current.isEnemiesOf(player);
										})
										.randomGet();
									if (suijidiren) suijidiren.damage('fire');
								}
								('step 3');
								if (++event.num < event.list.length) {
									event.goto(1);
								}
							},
						},
						尖刀佑卫: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return event.player == player && event.player.isEnemiesOf(player);
							},
							usable: 1,
							nobracket: true,
							content() {
								'step 0';
								event.num = 0;
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								event.list = list;
								('step 1');
								event.cards = get.cards(2);
								event.list[event.num].showCards(event.cards);
								('step 2');
								event.list[event.num].gain(event.cards);
								event.list[event.num].$draw(event.cards);
								if (event.cards[0].suit != 'heart' && event.cards[1].suit != 'heart') {
									event.list[event.num].changeHujia();
									player
										.chooseTarget(get.prompt('尖刀佑卫'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								}
								('step 3');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
									result.targets[0].loseHp();
								}
								('step 4');
								if (++event.num < event.list.length) {
									event.goto(1);
								}
							},
						},
						火祭: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('火祭')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var num = [
										1,
										1 +
										result.targets[0].countCards('h', function (card) {
											return get.color(card) == 'red';
										}),
									].randomGet();
									result.targets[0].damage('fire', num);
									result.targets[0].chooseToDiscard('he', true, num);
								}
							},
						},
						祭雷: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardEnd' },
							filter(event, player) {
								return event.card.suit == 'spade' || event.card.name == 'sha'; //QQQ
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('祭雷')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var num = [
										1,
										2 +
										result.targets[0].countCards('h', function (card) {
											return card.suit == 'spade';
										}),
									].randomGet();
									result.targets[0].damage('thunder', num);
									player.draw(num);
									player.recover(num);
								}
							},
						},
						宫宿: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardToBegin' },
							filter(event, player) {
								return event.target?.isFriendsOf(player) && get.tag(event.card, 'damage');
							},
							content() {
								'step 0';
								trigger.target.draw(3);
								('step 1');
								if (
									trigger.target.countCards('he', (card) => {
										return get.color(card) == 'black';
									}) >
									trigger.target.countCards('he', (card) => {
										return get.color(card) == 'red';
									})
								)
									trigger.target.changeHujia();
								else {
									trigger.target.recover();
									trigger.target.gain(game.createCard('shan'));
									trigger.target.$draw();
								}
							},
						},
						暗器: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('暗器')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 'he', true);
									result.targets[0].loseHp();
									event.target = result.targets[0];
								}
								('step 2');
								if (result.bool) {
									var card = result.cards[0];
									if (get.subtype(card) == 'equip1') event.target.damage(-lib.card[card.name].distance.attackFrom + 1);
								}
							},
						},
						刺探: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							filter: (event, player) => game.countPlayer((q) => q.countCards('h') && q != player),
							async content(event, trigger, player) {
								//QQQ
								var { result } = await player.chooseTarget(get.prompt('刺探'), (card, player, target) => target.countCards('h')).set('ai', (target) => -get.attitude(player, target));
								if (result.targets?.length) {
									var suit = [],
										card = [];
									for (var i of result.targets[0].getCards('h')) {
										if (!suit.includes(i.suit)) {
											suit.push(i.suit);
											card.push(i);
										}
									}
									player.gain(card, 'gain2');
									trigger.num += card.length;
								}
							},
						},
						暗伏: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { target: 'useCardToBegin' },
							filter(event, player) {
								return get.tag(event.card, 'damage');
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('暗伏')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].showCards(result.targets[0].getCards('h'));
									if (
										result.targets[0].countCards('h', function (card) {
											return get.tag(card, 'damage');
										}) >
										result.targets[0].countCards('h', function (card) {
											return !get.tag(card, 'damage');
										})
									) {
										trigger.cancel();
										player.useCard({ name: trigger.card.name }, result.targets[0], false);
									} else player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						侍女: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								game.playSequenceFramesYu('extension/士兵扩展包/序列帧/花朵特效', [435, 369], 2000, 15);
								player.chooseTarget(get.prompt('侍女')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].gain(game.createCard(['tao', 'jiu'].randomGet()));
								}
								('step 2');
								player.chooseTarget(get.prompt('侍女')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, (card) => {
										return get.color(card) == ['red', 'black'].randomGet();
									});
								}
							},
						},
						长槊: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player.draw(2);
								player.discardPlayerCard(trigger.target, 'he', true);
								('step 1');
								if (result.bool) {
									if (get.color(result.cards[0]) == 'black') {
										player.gain(game.createCard('sha'), 'draw');
										player.gain(game.createCard('bingliang'), 'draw');
									}
									if (get.color(result.cards[0]) == 'red') {
										player.gain(game.createCard('shan'), 'draw');
										player.gain(game.createCard(['tao', 'jiu', 'guohe'].randomGet()), 'draw');
									}
								}
							},
						},
						四眼毒泉: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'phaseEnd' },
							filter(event, player) {
								return event.player.isEnemiesOf(player);
							},
							nobracket: true,
							content() {
								'step 0';
								player.$skill('<span style="color: #00FF7F;">瘴气芸香</span>');
								trigger.player.chooseToDiscard('he', 2, true, '请弃置两张红色牌', (card) => {
									return get.color(card) == 'red';
								});
								trigger.player.loseHp();
								trigger.player.chooseToDiscard('he', true, '请弃置一张黑色牌', (card) => {
									return get.color(card) == 'black';
								});
								('step 1');
								player.$skill('<span style="color: #BADA55; text-shadow: -2px -2px 0 #00FFFF, 2px 2px 0 #00FFFF, 2px -2px 0 #00FFFF, -2px 2px 0 #00FFFF;">乐泉藿溪</span>');
								player.recover();
								player.draw(2);
								player.changeHujia();
							},
						},
						益矛: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player.discardPlayerCard(trigger.target, 'he', true);
								('step 1');
								if (result.bool) {
									if (get.color(result.cards[0]) == 'red') {
										var card = game.createCard('lebu');
										player.useCard(card, trigger.target);
										player.getStat().card.sha--;
										player.draw(2);
									}
									if (get.color(result.cards[0]) == 'black') {
										var list = [];
										for (var i = 0; i < lib.inpile.length; i++) {
											if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
										}
										player.gain(game.createCard(list.randomGet()), 'draw');
										player.changeHujia();
									}
								}
							},
						},
						陵义: {
							group: '陵义2',
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								game.filterPlayer((current) => current.isFriendsOf(player))
									.sort(lib.sort.seat)
									.map((i) => i.draw());
								player.gainMaxHp();
								player.recover();
								player.draw(2);
							},
						},
						陵义2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							content() {
								var cards = trigger.cards;
								var list = [];
								var list1 = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
									else list1.push(lib.inpile[i]);
								}
								for (var i = 0; i < cards.length; i++) {
									if (get.tag(cards[i], 'damage')) player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'gain2');
									if (!get.tag(cards[i], 'damage')) player.gain([game.createCard(list1.randomGet()), game.createCard(list1.randomGet())], 'gain2');
								}
							},
						},
						荣帻: {
							group: '荣帻2',
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('荣帻')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(result.targets[0].maxHp);
									result.targets[0].recover();
									var hs = player.getCards('he', (card) => get.type(card) != 'basic');
									var hs2 = hs.map((card) => game.createCard(card));
									if (hs2.length) result.targets[0].gain(hs2, 'draw');
								}
							},
						},
						荣帻2: {
							forced: true,
							trigger: { player: 'damageEnd' },
							content() {
								player.discard(player.getCards('he', (card) => get.type(card) == 'basic').randomGet());
								if (trigger.source) trigger.source.discard(trigger.source.getCards('he').randomGets(2));
							},
						},
						桂枪: {
							group: '桂枪2',
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							usable: 2,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('桂枪')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var cards = [game.createCard('sha'), game.createCard('shan')];
									result.targets[0].gain(cards, 'draw');
								}
								game.filterPlayer((current) => current.isEnemiesOf(player))
									.sort(lib.sort.seat)
									.map((i) => i.damage());
							},
						},
						桂枪2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'loseEnd' },
							forced: true,
							filter(event, player) {
								return player != _status.currentPhase;
							},
							content() {
								var cards = trigger.cards;
								var list = [
									['sha', 'shan'],
									['tao', 'jiu'],
								].randomGet();
								var list1 = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.type({ name: lib.inpile[i] }) != 'basic') list1.push(lib.inpile[i]);
								}
								for (var i = 0; i < cards.length; i++) {
									if (get.type(cards[i]) == 'basic') player.gain([game.createCard(list[0]), game.createCard(list[1])], 'gain2');
									if (get.type(cards[i]) != 'basic') player.gain([game.createCard(list1.randomGet()), game.createCard(list1.randomGet())], 'gain2');
								}
							},
						},
						长镖: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							group: '长镖2',
							content() {
								'step 0';
								var hs = player.getCards('he', (card) => get.tag(card, 'damage'));
								event.num = hs.length;
								var hs2 = hs.map((card) => game.createCard(card));
								if (hs2.length) player.gain(hs2, 'draw');
								player.chooseTarget(get.prompt('长镖')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard(event.num, 'he', true, `请弃置${event.num}张牌`);
									for (var i = 0; i < event.num; i++) {
										player.useCard({ name: 'sha' }, result.targets[0], false);
									}
								}
							},
						},
						//出牌阶段限一次,你可从游戏外获得你的伤害标签牌的复制.你可选择一名角色,该角色弃置等量牌,你对其使用等量的【杀】
						//回合结束时,你可以依次获得所有敌方角色各一张牌,如果该牌点数大于6,你对其造成1点伤害,重复此过程直到对所有敌方角色执行一次完毕
						长镖2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseEnd' },
							async content(event, trigger, player) {
								//QQQ
								for (var i of game.filterPlayer((q) => q.isEnemiesOf(player) && q.countCards('he'))) {
									var { result } = await player.gainPlayerCard(i, 'he', true);
									if (result && result.cards && result.cards[0] && result.cards[0].number > 6) {
										i.damage();
									}
								}
							},
						},
						劲旅: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								event.num = 0;
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								event.list = list;
								var hs = player.getCards('he', (card) => get.type(card) == 'basic' || get.tag(card, 'damage'));
								var hs2 = hs.map((card) => game.createCard(card));
								event.hs2 = hs2;
								('step 2');
								if (event.hs2.length) {
									event.list[event.num].gain(event.hs2, 'draw');
									var gaincards = event.hs2.slice(0);
									if ([...new Set(gaincards.map((i) => get.color(i)))].length > 1)
										game.filterPlayer(function (current) {
											return current.isEnemiesOf(player);
										})
											.randomGet()
											.loseHp();
								}
								('step 3');
								if (++event.num < event.list.length) {
									event.goto(2);
								}
							},
						},
						劲旅2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							usable: 2,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('劲旅')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < 2 + player.countCards('he', (card) => get.tag(card, 'damage')); i++, result.targets[0].useCard({ name: 'wuzhong' }, result.targets[0]));
									result.targets[0].recover();
									result.targets[0].gain(game.createCard('jiu'), 'draw');
								}
							},
						},
						蜀樵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'phaseEnd' },
							check(event, player) {
								return get.attitude(player, event.player) >= 0;
							},
							content() {
								trigger.player.gain([game.createCard('sha'), game.createCard('sha')], 'draw');
								player.gain([game.createCard('sha'), game.createCard('sha')], 'draw');
								if (player.countCards('h', { type: 'basic' }) == trigger.player.countCards('h', { type: 'basic' })) {
									trigger.player.recover();
									trigger.player.draw(2);
									player.recover();
									player.draw(2);
								}
							},
						},
						妙婢: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.type({ name: lib.inpile[i] }) == 'trick') list.push(lib.inpile[i]);
								}
								trigger.player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
								player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
								if (player.countCards('h', { type: 'trick' }) == trigger.player.countCards('h', { type: 'trick' })) {
									trigger.player.recover(); //QQQ
									trigger.player.draw(2);
									player.recover();
									player.draw(2);
								}
							},
						},
						新野壮士: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							group: '新野壮士2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								player.chooseTarget('请选择一名角色视为对其使用一张火攻').ai = function (target) {
									return get.damageEffect(target, player, player);
								};
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.useCard(
										{
											name: 'huogong',
										},
										target
									);
								}
							},
						},
						新野壮士2: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: {
								player: 'useCardBegin',
							},
							filter(event, player) {
								return event.card.name == 'huogong' && event.target && event.target.countCards('h'); //QQQ
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								'step 0';
								event.target = trigger.target;
								player.chooseCardButton(event.target, event.target.getCards('h')).set('filterButton', function (button) {
									return get.color(button.link) == 'red';
								});
								('step 1');
								if (result.bool) {
									event.target.discard(result.links[0]);
								}
								event.target.damage('fire');
							},
						},
						先民红巾: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: {
								global: 'phaseBegin',
							},
							filter(event, player) {
								return player.countCards('h');
							},
							content() {
								'step 0';
								player.chooseCard([1, 2], 'h', `<span style="color:red">${get.prompt('先民红巾')}</span>`);
								('step 1');
								if (result.bool) {
									var hs2 = result.cards.map((card) => game.createCard(card));
									if (hs2.length) trigger.player.gain(hs2, 'draw');
									player.recover();
									player.chooseTarget(`<span style="color:red">${get.prompt('先民红巾')}</span>`).set('ai', function (target) {
										return -get.attitude(player, target);
									});
								}
								('step 2');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
							ai: {
								expose: 0.9,
							},
						},
						太行山匪: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'shaBegin',
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							nobracket: true,
							content() {
								var n = [1, 2].randomGet();
								var num = 0;
								if (trigger.target.countCards('h')) num += n;
								if (trigger.target.countCards('e')) num += n;
								if (num > 0) {
									player.gainPlayerCard(trigger.target, num, 'he', true).set('filterButton', function (button) {
										for (var i = 0; i < ui.selected.buttons.length; i++) {
											if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
										}
										return true;
									});
								}
								for (var i = 0; i < n; i++) {
									player.useCard(
										{
											name: 'juedou',
										},
										trigger.target
									);
								}
							},
						},
						轻斧: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardBegin' },
							usable: 2,
							filter(event, player) {
								return get.tag(event.card, 'damage') && event.target; //QQQ
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								player.discardPlayerCard(trigger.target, 'he', true);
								player.draw();
								trigger.target.damage();
							},
						},
						庐步: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '庐步2',
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return event.target.isFriendsOf(player);
							},
							content() {
								trigger.target.changeHujia();
								trigger.target.draw(2);
								if (trigger.player.isAlive()) trigger.target.gainPlayerCard(trigger.player, 'he', true);
							},
						},
						庐步2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							filter: (event, player) => player.countCards('h'), //QQQ
							content() {
								'step 0';
								player.discardPlayerCard('h', trigger.target, 2, 'visible');
								player.draw();
								('step 1');
								var cards = get.cards(player.countCards('h'));
								event.cards = cards;
								player.showCards(event.cards);
								const gainCards = event.cards.filter((card) => get.color(card) === ['red', 'black'].randomGet());
								player.gain(gainCards);
								player.$draw(gainCards);
								for (var i = event.cards.length - 1; i >= 0; i--) {
									if (!gainCards.includes(event.cards[i])) {
										ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
									}
								}
							},
						},
						器领: {
							audio: 'ext:士兵扩展包/audio:2',
							group: ['器领2', 'xshuangren2'],
							enable: 'phaseUse',
							usable: 1,
							content() {
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.subtype({ name: lib.inpile[i] }) == 'equip1') list.push(lib.inpile[i]);
								}
								var youplayer = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								youplayer.sort(lib.sort.seat);
								youplayer.map(function (item) {
									item.equip(game.createCard(list.randomGet()), true);
									item.equip(game.createCard(list.randomGet()), true);
								});
								var list1 = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list1.sort(lib.sort.seat);
								player.useCard({ name: 'sha' }, list1, false);
								player.useCard({ name: 'sha' }, list1, false);
							},
						},
						器领2: {
							trigger: { global: ['loseEnd'] },
							filter(event, player) {
								if (!event.player.equiping) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.original == 'e' && get.subtype(i) == 'equip1') return true;
									}
								return false;
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0; //QQQ
							},
							content() {
								var card;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].original == 'e' && get.subtype(trigger.cards[i]) == 'equip1') {
										card = trigger.cards[i];
									}
								}
								if (card) {
									if (trigger.player.storage.器领2) {
										trigger.player.unmark(trigger.player.storage.器领2, '器领2');
										trigger.player.discard(trigger.player.storage.器领2);
										game.addVideo('unmarkId', trigger.player, [get.cardInfo(trigger.player.storage.器领2), '器领2']);
									}
									ui.special.appendChild(card);
									trigger.player.storage.器领2 = card;
									var info = get.info(card);
									if (info.skills) {
										trigger.player.addAdditionalSkill('器领2', info.skills);
									} else {
										trigger.player.removeAdditionalSkill('器领2');
									}
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.subtype(card) == 'equip1') return [1, 3];
									},
								},
							},
							intro: {
								content: 'card',
							},
						},
						路刑: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								player.draw(2);
								trigger.target.loseHp();
								trigger.target.addTempSkill('路刑1', { player: 'phaseAfter' });
							},
						},
						路刑1: {
							mod: {
								maxHandcard(player, num) {
									return num - 1;
								},
							},
						},
						路刑2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'phaseBegin' },
							filter(event, player) {
								return event.player.getHandcardLimit() != event.player.hp;
							},
							content() {
								trigger.player.chooseToDiscard('he', true, 2);
								trigger.player.loseHp();
							},
						},
						塞门刀车: {
							nobracket: true,
							audio: 'ext:士兵扩展包/audio:2',
							group: ['塞门刀车1', '塞门刀车2'],
							trigger: { player: 'phaseBegin' },
							content() {
								var list = [];
								for (var i = 0; i < 12; i++) {
									list.push(game.createCard('sha'));
								}
								player.gain(list, 'draw');
							},
						},
						塞门刀车1: {
							nobracket: true,
							trigger: { player: 'phaseDiscardBegin' },
							forced: true,
							audio: 'ext:士兵扩展包/audio:2',
							filter(event, player) {
								return event.parent.name == 'phaseDiscard';
							},
							content() { },
							mod: {
								maxHandcard(player, num) {
									var hs = player.getCards('h');
									for (var i = 0; i < hs.length; i++) {
										if (hs[i].name == 'sha') {
											num++;
										}
									}
									return num;
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.name == 'sha') return false;
								},
							},
						},
						塞门刀车2: {
							nobracket: true,
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { source: 'damageBegin' },
							usable: 1,
							content() {
								trigger.num += player.countCards('h', { name: 'sha' });
								player.draw(player.countCards('h', { name: 'sha' }));
							},
						},
						东吴战舰: {
							nobracket: true,
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								var num = 1 + player.countCards('h', (card) => get.tag(card, 'damage'));
								player.draw(num);
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								for (var i = 0; i < num; i++) {
									player.useCard({ name: 'wanjian' }, list);
								}
							},
						},
						枭姬战船: {
							nobracket: true,
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								var num = game.countPlayer(function (i) {
									return i.isMaxHp();
								});
								list.map(function (item) {
									item.draw(2);
									item.recover();
									var cardlist = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										if (
											get.tag(
												{
													name: lib.inpile[i],
												},
												'damage'
											)
										)
											cardlist.push(lib.inpile[i]);
									}
									var gainCards = [];
									for (var i = 0; i < num; i++) {
										gainCards.push(game.createCard(cardlist.randomGet()));
									}
									item.gain(gainCards, 'draw');
								});
							},
						},
						丹射: {
							nobracket: true,
							forced: true,
							trigger: {
								source: 'damageEnd',
							},
							usable: 1, //QQQ
							mark: true,
							init(player) {
								player.storage.丹射 = 0;
								player.unmarkSkill('丹射');
							},
							marktext: '<span style="color: green">丹</span>',
							intro: {
								content: '使用"万箭齐发"<span style="color: red">造成伤害值</span>+#',
							},
							content() {
								player.draw();
								player.storage.丹射 += 1;
								trigger.player.loseHp();
								player.markSkill('丹射');
							},
							group: ['丹射_damage', '丹射2'],
							subSkill: {
								damage: {
									popup: false,
									forced: true,
									trigger: {
										source: 'damageBefore',
									},
									usable: 1, //QQQ
									filter(event, player) {
										return player.storage.丹射 > 0 && event.card && event.card.name == 'wanjian';
									},
									content() {
										var target = trigger.player;
										player.linergbl(target, { color: [83, 130, 75] });
										trigger.num += player.storage.丹射;
										game.log(player, '<span style="color: red">丹射技能效果生效,此伤害+</span>', player.storage.丹射);
									},
								},
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						丹射2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaEnd' },
							usable: 1,
							content() {
								'step 0';
								var num = game.countPlayer((i) => i.isMinHp());
								player.changeHujia(num);
								var enemys = game.filterPlayer((i) => i.isEnemiesOf(player)).sort(lib.sort.seat);
								player.chooseJunfaFor(enemys[0]).set('prompt', '<span style="color:red">选择一项军法对其执行</span>');
								event.targets = enemys;
								('step 1');
								event.junfa = result.junfa;
								event.targets.map((i) => i.carryOutJunfa(player, event.junfa, [i]));
								for (var i = 0; i < 3; i++) {
									player.useCard({ name: 'wanjian' }, game.filterPlayer((i) => i.isEnemiesOf(player) && player.canUse({ name: 'wanjian' }, i)).sort(lib.sort.seat));
								}
							},
						},
						冲车: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('冲车')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].discard(result.targets[0].getCards('he').randomGets([2, 4].randomGet));
								}
								switch ([1, 4].randomGet()) {
									case 1:
										player.draw(3);
										break;
									case 2:
										player.recover(2);
										break;
									case 3:
										result.targets[0].damage(2);
										break;
									default:
										{
											var list = [];
											for (var i = 0; i < lib.inpile.length; i++) {
												if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
											}
											player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
											player.gainPlayerCard(result.targets[0], 2, 'he', true);
										}
										break;
								}
							},
						},
						毒枪: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							group: '毒枪2',
							content() {
								var hs = trigger.target.getCards('he').randomGets(2);
								var hs2 = hs.map((card) => game.createCard(card));
								if (hs2.length) player.gain(hs2, 'draw');
								trigger.target.gain([game.createCard('du'), game.createCard('du')], 'gain2');
								trigger.target.loseHp();
							},
						},
						毒枪2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'loseHpBegin' },
							forced: true,
							// filter:function(event,player){
							// var evtpp=event.parent;
							// return (evtpp.name=='useCard'||evtpp.name=='respond'||evtpp.name=='discard')&&evtpp.cards&&evtpp.cards.some(i=>i.name=='du');
							// },
							content() {
								trigger.cancel();
								player.popup('<span style="color: #fff; background-color: #368d61;">免疫体力流失</span>');
								player.recover();
							},
						},
						探子: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								game.JPG3('tanzidhtx', 3000);
								('step 1');
								player.gain(game.createCard(['guohe', 'shunshou', 'toulianghuanzhu'].randomGet()), 'draw');
							},
						},
						探子2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { target: 'shaBegin' },
							logTarget: 'player',
							content() {
								'step 0';
								game.JPG3('tanzidhtx', 3000);
								('step 1');
								trigger.cancel();
								player.addTempSkill('qianxing', { player: 'phaseBegin' });
							},
						},
						冶首: {
							trigger: { global: 'phaseBegin' },
							content() {
								'step 0';
								game.JPG3('yinyedongmannvshoudhtx', 10000);
								player.draw();
								('step 1');
								var target = _status.currentPhase;
								event.target = target;
								player
									.chooseTarget(get.prompt('冶首', event.target), function (card, player, target) {
										var source = _status.event.source;
										return true;
									})
									.set('source', target)
									.set('goon', get.damageEffect(target, player, player) > 0)
									.set('ai', function (target) {
										if (!_status.event.goon) return 0;
										var evt = _status.event;
										return get.effect(target, { name: 'juedou' }, evt.source, evt.player);
									});
								('step 2');
								if (result.bool) {
									event.target2 = result.targets[0];
									player.linergbl([target, event.target2], { color: [192, 192, 192] });
									player.gainPlayerCard(event.target2, 1, 'he', true);
								} else event.finish();
								('step 3');
								if (result.cards[0].number > player.countCards('he')) {
									target.useCard({ name: 'sha' }, event.target2, false);
									target.useCard({ name: 'juedou' }, event.target2, false);
								} else {
									player.gainPlayerCard(event.target2, 1, 'he', true);
								}
								('step 4');
								var list = game.filterPlayer(function (current) {
									return player.canUse('nanman', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'nanman' }, list);
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						纵燃: {
							audio: 'ext:士兵扩展包/audio:2',
							group: ['纵燃2', '纵燃3'],
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								game.mp43('zonghuobing纵火兵');
								player.gain(
									['huogong', 'huogong'].map((i) => game.createCard(i)),
									'draw'
								);
							},
						},
						纵燃2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardEnd' },
							filter(event, player) {
								return event.card.name == 'huogong';
							},
							content() {
								'step 0';
								game.mp43('zonghuobing纵火兵');
								player.chooseTarget(`<span style="color: #FF4500">${get.prompt('纵燃')}</span>`).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].damage(2, 'fire');
								}
							},
						},
						纵燃3: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'showCardsEnd' },
							content() {
								trigger.player.discard(trigger.player.getCards('he').randomGet());
								trigger.player.damage('fire');
							},
						},
						傲刀佣兵: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '傲刀佣兵2',
							trigger: { player: 'shaBegin' },
							nobracket: true,
							content() {
								trigger.target.chooseToDiscard('h', '请弃置一张杀', true, { name: 'sha' });
								const suits = new Set(player.getCards('he').map((card) => card.suit));
								player.draw(suits.size);
								//player.draw([...new Set(player.getCards('he').map(card=>card.suit))].length);
							},
						},
						傲刀佣兵2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { source: 'damageBegin' },
							nobracket: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								if (!trigger.player.countCards('h', (c) => c.name == 'sha')) trigger.num++;
								if (Math.random() < 0.5) {
									player.phase('nodelay');
								}
							},
						},
						树大招风: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							group: '树大招风2',
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								event.num = [2, 4].randomGet();
								player.draw(event.num);
								player.judge();
								('step 1');
								var { number } = get;
								if (number(result.card) >= 6 - event.num && number(result.card) <= 6 + event.num) {
									var list = game.filterPlayer((current) => current.isEnemiesOf(player)).sort(lib.sort.seat);
									list.map((item) => item.discard(item.getCards('he').randomGets(event.num)));
								}
							},
						},
						树大招风2: {
							nobracket: true,
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								//return [ 'sha', 'juedou', 'wanjian' ].some(name => event.target == player && event.card.name == name);
								return ['sha', 'juedou', 'wanjian'].includes(event.card.name) && event.target == player;
							},
							content() {
								'step 0';
								event.num = [2, 4].randomGet();
								player.judge();
								('step 1');
								var { number } = get;
								if (number(result.card) >= 6 - event.num && number(result.card) <= 6 + event.num) {
									var list = game.filterPlayer((current) => current.isEnemiesOf(player)).sort(lib.sort.seat);
									list.map((item) => item.discard(item.getCards('he').randomGets(event.num)));
								}
							},
						},
						女佣兵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							nobracket: true,
							content() {
								trigger.target.chooseToDiscard('h', '请弃置一张基本牌', true, { type: 'basic' });
								const types = new Set(player.getCards('he').map((card) => get.type(card)));
								player.draw(types.size);
							},
						},
						女佣兵2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { source: 'damageBegin' },
							nobracket: true,
							filter(event, player) {
								const Mtypes = new Set(event.target.getCards('he').map((card) => get.type(card)));
								const Ptypes = new Set(player.getCards('he').map((card) => get.type(card)));
								return event.card && event.card.name == 'sha' && Ptypes > Mtypes;
							},
							content() {
								trigger.num++;
								if (Math.random() < 0.5) player.recover();
							},
						},
						库守: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								return event.target.isFriendsOf(player);
							},
							content() {
								player.chooseToDiscard('he', '请弃置一张红色牌', true, { color: 'red' });
								game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								})
									.sort(lib.sort.seat)
									.map(function (item) {
										item.draw(2);
									});
								game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								})
									.sort(lib.sort.seat)
									.map(function (item) {
										item.damage('fire');
									});
								if (Math.random() < 0.5 + 0.1 * player.countCards('he', (c) => get.type(c) == 'equip')) {
									trigger.target.changeHujia();
									player.gain(game.createCard('shan'), 'draw');
								}
								if (Math.random() < 0.3 + 0.1 * player.countCards('he', (c) => get.type(c) == 'equip')) trigger.cancel();
							},
						},
						平原义军: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							nobracket: true,
							filter: (event, player) => player.countCards('he'), //QQQ
							content() {
								player.draw(2);
								player.changeHujia();
								function getAlphabetIndex(letter) {
									var upperCaseLetter = letter.toUpperCase();
									var charCode = upperCaseLetter.charCodeAt(0);
									var offset = charCode - 65;
									return offset;
								}
								event.shouzixulie = getAlphabetIndex(player.getCards('he').randomGet().name.charAt(0));
								if (event.shouzixulie > player.countCards('he', { color: 'red' }))
									game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									})
										.sort(lib.sort.seat)
										.map(function (item) {
											item.gain(game.createCard('sha'));
											item.$draw();
										});
								else
									game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									})
										.sort(lib.sort.seat)
										.map(function (item) {
											item.chooseToDiscard('he', '请弃置一张黑色牌', true, { color: 'black' });
										});
							},
						},
						鬼狂: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardAfter' },
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							usable: 1,
							content() {
								game.JPG3('guilangkuangbaozhedhtx', 2000);
								if (trigger.player.countCards('h', { name: 'shan' }) > 1) trigger.player.chooseToDiscard('请弃置两张闪', 'he', true, 2, (card) => card.name == 'shan');
								trigger.player.loseHp();
								if (Math.random() < 0.5) {
									player.gain(game.createCard(['sha', 'guohe'].randomGet()));
									player.$draw();
									player.recover();
								}
							},
						},
						骅袭: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								player.useCard(game.createCard('hualiu'), player);
								var list = game.filterPlayer(function (current) {
									return current.getAttackRange() > 1;
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									player.gainPlayerCard(item, 'he', true);
								});
							},
						},
						西凉巨轮: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('西凉巨轮')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].addTempSkill('fengyin');
									var list = game.filterPlayer((current) => current.isFriendsOf(result.targets[0]));
									result.targets[0].discard(result.targets[0].getCards('he', (c) => get.type(c) != 'basic')); //QQQ
									if (list[0]) player.useCard({ name: 'sha' }, list, false);
								}
							},
						},
						战船: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var num =
									1 +
									player.countCards('he', {
										color: 'balck',
									});
								var cardlist = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (
										get.tag(
											{
												name: lib.inpile[i],
											},
											'damage'
										)
									)
										cardlist.push(lib.inpile[i]);
								}
								var gainCards = [];
								for (var i = 0; i < num; i++) {
									gainCards.push(game.createCard(cardlist.randomGet()));
								}
								player.gain(gainCards, 'draw');
								player.chooseTarget(get.prompt('战船')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard('h', result.targets[0], 'visible');
								}
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.gain(game.createCard(['sha', 'shuiyanqijunx'].randomGet()));
									item.$draw();
								});
							},
						},
						血新: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player.judge();
								('step 1');
								var { suit } = get;
								if (suit(result.card) == 'spade') {
									player.recover();
									if (player.hujia < 2) player.changeHujia();
								} else {
									trigger.target.damage();
									trigger.target.chooseToDiscard('请弃置1张黑色牌', 'he', true, (c) => get.color(c) == 'black');
								}
							},
						},
						平戎弓领: {
							group: ['平戎弓领_draw', '平戎弓领_use', '平戎弓领_discard'],
							subSkill: {
								draw: {
									trigger: { player: 'phaseDrawBefore' },
									prompt: '是否发动【戎弓】跳过摸牌阶段？',
									check(event, player) {
										if (player.storage.戎弓2) return false;
										return game.hasPlayer(function (current) {
											return get.attitude(player, current) < 0 && current.hp == 1 && get.damageEffect(current, player, player) > 0;
										});
									},
									content() {
										'step 0';
										trigger.cancel();
										player
											.chooseTarget(get.prompt('平戎弓领'), function (card, player, target) {
												return true;
											})
											.set('ai', function (target) {
												return get.attitude(player, target);
											});
										('step 1');
										if (result.bool) {
											result.targets[0].gain(game.createCard('wanjian'));
											result.targets[0].$draw();
										}
									},
								},
								use: {
									trigger: { player: 'phaseUseBefore' },
									prompt: '是否发动【戎弓】跳过出牌阶段？',
									check(event, player) {
										if (!player.needsToDiscard() || (player.countCards('e') && player.isMaxEquip())) return true;
										if (player.storage.戎弓2) return false;
										return game.hasPlayer(function (current) {
											return get.attitude(player, current) < 0 && current.hp == 1 && get.damageEffect(current, player, player) > 0;
										});
									},
									content() {
										'step 0';
										trigger.cancel();
										player
											.chooseTarget(get.prompt('平戎弓领'), function (card, player, target) {
												return true;
											})
											.set('ai', function (target) {
												return get.attitude(player, target);
											});
										('step 1');
										if (result.bool) {
											result.targets[0].gain(game.createCard('wanjian'));
											result.targets[0].$draw();
										}
									},
								},
								discard: {
									trigger: { player: 'phaseDiscardBefore' },
									prompt: '是否发动【戎弓】跳过弃牌阶段？',
									filter(event, player) {
										return player.countCards('e');
									},
									content() {
										'step 0';
										trigger.cancel();
										player
											.chooseTarget(get.prompt('平戎弓领'), function (card, player, target) {
												return true;
											})
											.set('ai', function (target) {
												return get.attitude(player, target);
											});
										('step 1');
										if (result.bool) {
											result.targets[0].gain(game.createCard('wanjian'));
											result.targets[0].$draw();
										}
									},
								},
							},
							ai: {
								combo: '戎弓2',
							},
						},
						戎弓2: {
							group: ['戎弓2_init', '戎弓2_count'],
							subSkill: {
								init: {
									trigger: { player: 'phaseBegin' },
									silent: true,
									content() {
										player.storage.戎弓2 = 0;
									},
								},
								count: {
									trigger: {
										player: ['phaseJudgeCancelled', 'phaseJudgeSkipped', 'phaseDrawCancelled', 'phaseDrawSkipped', 'phaseUseCancelled', 'phaseUseSkipped', 'phaseDiscardCancelled', 'phaseDiscardSkipped'],
									},
									silent: true,
									content() {
										player.storage.戎弓2++;
									},
								},
							},
							trigger: { player: 'phaseEnd' },
							forced: true, //QQQ
							filter(event, player) {
								return player.storage.戎弓2 > 0;
							},
							content() {
								var num = player.storage.戎弓2;
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								for (var i = 0; i < num; i++) {
									player.useCard({ name: 'wanjian' }, list, false);
								}
							},
							ai: {
								combo: '平戎弓领',
								effect: {
									target(card) {
										if (card.name == 'lebu' || card.name == 'bingliang') return 0.5;
									},
								},
							},
						},
						流星矢: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							group: '流星矢2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								player.gain([game.createCard('shan'), game.createCard('shan')], 'draw');
							},
						},
						流星矢2: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return event.card && event.card.name == 'wanjian';
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								if (Math.random() < 0.66) trigger.player.damage();
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(trigger.player);
								});
								list.sort(lib.sort.seat);
								trigger.player.useCard(
									{
										name: 'huoshaolianying',
									},
									list,
									false
								);
							},
						},
						竹矛: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardEnd' },
							usable: 2,
							filter(event, player) {
								return get.tag(event.card, 'damage') && Math.random() < 0.66;
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								var sjlist = game
									.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									})
									.randomGet();
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.chooseToDiscard('请弃置1张黑色牌', 'he', true, (c) => get.color(c) == 'black');
									const suits = new Set(item.getCards('he').map((card) => card.suit));
									item.damage(5 - suits.size)._triggered = null;
								});
								const colors = new Set(sjlist.getCards('he').map((card) => get.color(card)));
								player.draw(3 - colors.size);
							},
						},
						铁骨战车: {
							audio: 'ext:士兵扩展包/audio:2',
							group: ['铁骨战车2', '铁骨战车3'],
							trigger: { global: 'phaseEnd' },
							nobracket: true,
							filter(event, player) {
								return event.player.maxHp > event.player.countCards('h') || player.maxHp > player.countCards('h');
							},
							check(event, player) {
								return get.attitude(player, event.player) >= 0;
							},
							content() {
								trigger.player.draw(2);
								player.draw(2);
							},
						},
						铁骨战车2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'phaseEnd' },
							nobracket: true,
							filter(event, player) {
								return event.player.countCards('he', { color: 'black' });
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								trigger.player.chooseToDiscard('he', true, 2);
								player.changeHujia();
							},
						},
						铁骨战车3: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'phaseEnd' },
							nobracket: true,
							filter(event, player) {
								return event.player.countCards('he', (card) => get.type(card, 'trick') == 'trick');
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								var card = trigger.player.getCards('he').randomGet();
								player.gain(card);
								trigger.player.$give(1, player);
							},
						},
						龙川: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardEnd' },
							usable: 1,
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick' || get.color(event.card) == 'black' || event.card.number >= 6;
							},
							content() {
								'step 0';
								player.recover();
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.gain(game.createCard('guohe'));
									item.$draw();
								});
								var eo = game
									.filterPlayer(function (current) {
										return current.isEnemiesOf(player) && current.countCards('he');
									})
									.randomGet();
								if (eo) player.gainPlayerCard('he', eo, 'visible'); //QQQ
								event.eo = eo;
								('step 1');
								if (result.bool) {
									if (get.color(result.cards[0]) == 'black')
										event.eo.useCard(
											{
												name: 'du',
											},
											event.eo
										);
									if (get.color(result.cards[0]) == 'red') player.draw(2);
								}
							},
						},
						桓骑: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '桓骑2',
							trigger: { source: 'damageEnd' },
							content() {
								player.useCard(
									{
										name: ['guohe', 'toulianghuanzhu'].randomGet(),
									},
									trigger.player
								);
							},
						},
						桓骑2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCard' },
							filter(event, player) {
								return event.card.name == 'sha' && Math.random() < 0.5;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('桓骑')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									trigger.targets = [...new Set([...trigger.targets, ...result.targets])];
								}
							},
						},
						火弩: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							check(event, player) {
								return player.countCards('h') + 2 <= player.hp;
							},
							content() {
								'step 0';
								event.cards = get.cards(6);
								trigger.untrigger();
								trigger.finish();
								player.$draw(event.cards.slice(0));
								event.cards = event.cards.filter((q) => {
									if (get.type(q) === 'equip') {
										player.equip(q);
										return false;
									}
									return true;
								});
								player.gain(event.cards);
								('step 1');
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								if (player.countCards('h', (c) => get.tag(c, 'damage'))) {
									for (var i = 0; i < player.countCards('h', (c) => get.tag(c, 'damage')); i++) {
										player.useCard({ name: 'huoshaolianying' }, list, false);
									}
								} else {
									event.finish();
								}
							},
						},
						流沙: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('流沙')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									result.targets[0].judge(function (card) {
										return card.suit == 'club' || get.tag(card, 'damage') ? 1 : -1;
									});
								}
								('step 2');
								if (result.bool) {
									event.target.chooseToDiscard('he', true, 2);
									event.target.damage(2);
								} else if (event.target) {
									event.target.loseHp();
								}
							},
							ai: {
								threaten: 0.8,
							},
						},
						佞宦: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { source: 'damageEnd', global: 'discardEnd' },
							usable: 1,
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								if (trigger.player.countCards('he', (c) => get.type(c) == 'basic')) {
									var giveCard = trigger.player.getCards('he', (c) => get.type(c) == 'basic').randomGet();
									player.gain(giveCard, trigger.player);
									trigger.player.$give(giveCard, player);
								}
								if (trigger.player.countCards('he')) trigger.player.discard(trigger.player.getCards('he').randomGet());
								else trigger.player.loseHp();
							},
						},
						浮船: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								game.playAudio('../extension/士兵扩展包/audio/fuhaidachuan浮海大船txyy1.mp3');
								game.playAudio('../extension/士兵扩展包/audio/fuhaidachuan浮海大船txyy2.mp3');
								lib.init.css(`extension/士兵扩展包/`, 'chuanslide');
								game.JPG3('fuhaidachuan浮海大船', 3000);
								event.list = game.filterPlayer(function (current) {
									return current != player && current.countCards('h');
								});
								event.list.sort(lib.sort.seat);
								('step 1');
								if (event.list.length) {
									event.current = event.list.shift();
								} else {
									event.finish();
								}
								('step 2');
								player.linergbl(event.current, { color: [34, 68, 0], brightness: 3 }); //[102, 205, 0]
								player.chooseCard('请选择要展示的牌', true).set('ai', function () {
									return 1 + Math.random();
								});
								('step 3');
								event.mes = result.cards[0];
								player.showCards(event.mes);
								('step 4');
								event.current.chooseCard('请选择要展示的牌', true).set('ai', function () {
									return 1 + Math.random();
								});
								('step 5');
								event.tes = result.cards[0];
								event.current.showCards(event.tes);
								('step 6');
								var type1 = get.type(event.mes, 'trick');
								var type2 = get.type(event.tes, 'trick');
								if (event.current.isFriendsOf(player)) {
									if ([type1, type2].includes('basic')) [player, event.current].forEach((i) => i.draw(2));
									if ([type1, type2].includes('trick')) [player, event.current].forEach((i) => i.recover());
									if ([type1, type2].includes('equip')) [player, event.current].forEach((i) => i.changeHujia());
								}
								if (event.current.isEnemiesOf(player)) {
									if ([type1, type2].includes('basic')) event.current.chooseToDiscard('he', true, 2);
									if ([type1, type2].includes('trick')) event.current.loseHp();
									if ([type1, type2].includes('equip')) player.useCard({ name: 'wanjian' }, event.current, false);
								}
								('step 7');
								event.goto(1);
							},
						},
						汉宗: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '汉宗2',
							trigger: { global: 'phaseBegin' },
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							content() {
								'step 0';
								game.mp43('hanshizongmiaodhtx');
								('step 1');
								var list = ['杀', '闪', '桃', '酒'];
								player
									.chooseControl(list)
									.set('prompt', get.prompt('汉宗'))
									.set('ai', function () {
										return list[[0, 1, 2, 3].randomGet()];
									});
								('step 2');
								var t = trigger.player;
								switch (result.control) {
									case '杀': {
										t.gain(game.createCard('sha'), 'draw');
										break;
									}
									case '闪': {
										t.gain(game.createCard('shan'), 'draw');
										break;
									}
									case '桃': {
										t.gain(game.createCard('tao'), 'draw');
										break;
									}
									case '酒': {
										t.gain(game.createCard('jiu'), 'draw');
										break;
									}
								}
								t.draw(2);
							},
						},
						汉宗2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return event.target.isFriendsOf(player);
							},
							content() {
								trigger.target.draw(2);
								if (trigger.target.countCards('h', { type: 'basic' })) trigger.player.chooseToDiscard(2, true, 'he');
								if (trigger.target.countCards('he', (c) => c.name == 'sha' || c.number <= 9)) trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha') return [1, 0.5];
									},
								},
							},
						},
						西羌战车: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '西羌战车2',
							trigger: { player: 'useCardEnd' },
							filter(event, player) {
								return get.tag(event.card, 'damage');
							},
							nobracket: true,
							usable: 1,
							content() {
								'step 0';
								player.addTempSkill('西羌战车3');
								('step 1');
								// var m=0;
								// game.players.map(function(current){
								// if(get.distance(player,current)<=1) m++;
								// })
								// player.draw(m);
								player.draw(
									game.countPlayer(function (current) {
										return get.distance(player, current) <= 1;
									})
								);
								('step 2');
								player
									.chooseTarget(get.prompt('西羌战车'), function (card, player, target) {
										return get.distance(player, target) <= 1;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 3');
								if (result.bool) {
									player.useCard({ name: ['qijia', 'fudichouxin'].randomGet() }, result.targets[0], false);
									result.targets[0].damage();
								}
							},
						},
						西羌战车3: {
							mod: {
								globalFrom(from, to, distance) {
									if (_status.currentPhase == from) {
										return distance - 3;
									}
								},
							},
						},
						西羌战车2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { target: 'shaBegin' },
							filter(event, player) {
								return player.countCards('he', (c) => get.color(c) == 'red');
							},
							nobracket: true,
							content() {
								trigger.cancel();
								player.draw(2);
								player.link();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha') return [1, 0.5];
									},
								},
							},
						},
						古铜镇尺: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							nobracket: true,
							content() {
								'step 0';
								game.mp43('gutongzhenchidhtx');
								player.chooseTarget(get.prompt('古铜镇尺')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.draw(result.targets[0].countCards('he', (c) => get.type(c) == 'basic' || c.number <= 9));
									player.gain(game.createCard(result.targets[0].getCards('he').randomGet()), 'draw');
									result.targets[0].discard(result.targets[0].getCards('he').randomGet());
									result.targets[0].judge(function (c) {
										return get.type(c) == 'basic' || c.number <= 9 ? 1 : -1;
									});
									event.t = result.targets[0];
								}
								('step 2');
								if (result.bool) {
									player.useCard({ name: 'youdishenru' }, event.t, false);
								}
							},
						},
						蛮塞: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseDrawEnd' },
							filter(event, player) {
								return player.countCards('he');
							},
							content() {
								'step 0';
								player.discard(player.getCards('he'));
								('step 1');
								var gainCards = [];
								for (var i = 0; i < result.cards.length + 1; i++) {
									gainCards.push(game.createCard('sha'));
								}
								player.gain(gainCards, 'draw');
								player.addTempSkill('蛮塞2');
							},
						},
						蛮塞2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { source: 'damageEnd' },
							content() {
								if (trigger.player.isAlive()) player.gainPlayerCard(trigger.player, 'he', true);
							},
							mod: {
								globalFrom(from, to, distance) {
									if (_status.currentPhase == from) {
										return distance - 4;
									}
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 4;
								},
							},
						},
						羌锋: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							filter(event, player) {
								return player.countCards('he', (c) => get.color(c) == 'black');
							},
							content() {
								player.draw(3 + player.countCards('he', (card) => get.tag(card, 'damage')));
								player.phaseUse();
							},
							group: '羌锋2',
						},
						羌锋2: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('he', (c) => get.color(c) == 'black' || c.name == 'sha');
							},
							content() {
								'step 0';
								player.chooseToDiscard(true, 'he', (c) => get.color(c) == 'black' || c.name == 'sha');
								player.chooseTarget(get.prompt('羌锋')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].loseHp();
								}
							},
						},
						楼船: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								'step 0';
								trigger.player.draw();
								('step 1');
								trigger.target.damage();
								var evt = _status.event.getParent('phase');
								if (evt && evt.name == 'phase') {
									//QQQ
									evt.finish();
								}
							},
							group: '楼船2',
						},
						楼船2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return event.target.isFriendsOf(player) && Math.random() < 0.66;
							},
							content() {
								trigger.cancel();
								trigger.target.useCard({ name: 'wanjian' }, trigger.player, false);
								trigger.target.changeHujia();
							},
						},
						水旗: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('水旗'), function (card, player, target) {
										return target.countCards('he');
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									var cards = result.targets[0].getCards('h');
									if (cards) result.targets[0].showCards(cards);
									if (result.targets[0].countCards('he', (c) => get.color(c) == 'red' || c.name == 'shan')) player.gain([game.createCard('shan'), game.createCard('shan')], 'draw');
									if (result.targets[0].countCards('he', (c) => get.color(c) == 'black')) player.useCard({ name: 'youdishenru' }, result.targets[0], false);
								}
							},
						},
						舰船: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardEnd' },
							content() {
								if (trigger.player.isFriendsOf(player) && get.color(trigger.card) == 'black') {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
									}
									player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
									game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									})
										.randomGet()
										.chooseToDiscard(2, true, 'he');
								}
								if (trigger.player.isFriendsOf(player) && get.color(trigger.card) == 'red') {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										if (!get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
									}
									player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
								}
								if (trigger.player.isEnemiesOf(player) && get.color(trigger.card) == 'black') {
									player.draw();
									player.useCard({ name: 'wanjian' }, trigger.player, false);
								}
								if (trigger.player.isEnemiesOf(player) && get.color(trigger.card) == 'red') {
									player.gainPlayerCard(trigger.player, 'he', true);
									player.recover();
								}
							},
						},
						乌桓弯刀: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							nobracket: true,
							content() {
								'step 0';
								player.chooseControl('选项一', '选项二').set('prompt', '乌桓弯刀<br><br><div class="text">选项一:令目标进入混乱状态,直到其下次回合开始时,其使用的【杀】需额外弃置一张杀才能生效</div><br><div class="text">选项二:令目标弃置两张手牌,摸等同于其已损失体力值的牌.若其黑色牌数少于你,你回复一点体力</div>');
								('step 1');
								if (result.control == '选项一') {
									trigger.target.goMad({ player: 'phaseBegin' });
									trigger.target.addTempSkill('乌桓弯刀2', { player: 'phaseBegin' });
									event.finish();
								} else {
									trigger.target.chooseToDiscard(2, true, 'he');
								}
								('step 2');
								player.draw(trigger.target.maxHp - trigger.target.hp);
								if (player.countCards('he', (c) => get.color(c) == 'black') > trigger.target.countCards('he', (c) => get.color(c) == 'black')) player.recover();
							},
						},
						乌桓弯刀2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardToBefore' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							forced: true,
							nobracket: true,
							content() {
								'step 0';
								player
									.chooseToDiscard('乌桓弯刀:弃置一张杀,否则此杀无效', function (card) {
										return card.name == 'sha';
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
						铜甲士阵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToEnd' },
							nobracket: true,
							group: '铜甲士阵2',
							filter(event, player) {
								return get.color(event.card) == 'black';
							},
							check(event, player) {
								return get.attitude(player, event.target) > 0;
							},
							usable: 1,
							content() {
								[...trigger.targets, player].map((i) => i.changeHujia(1 + i.countCards('he', (c) => get.type(c) == 'equip')));
							},
						},
						铜甲士阵2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'damageEnd' },
							//priority:-1,
							nobracket: true,
							filter(event, player) {
								return event.num == 0;
							},
							content() {
								'step 0';
								if (trigger.source) {
									var n = 1;
									if (trigger.source.countCards('h', (c) => get.tag(c, 'damage')) < player.countCards('h', (c) => get.tag(c, 'damage'))) n++;
									trigger.source.damage(n);
								}
								player.chooseTarget(get.prompt('铜甲士阵')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
									}
									[result.targets[0], player].map((i) => i.gain(game.createCard(list.randomGet()), 'draw'));
								}
							},
						},
						吴贾: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('吴贾')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(2);
									result.targets[0].gainPlayerCard(player, 'he', true);
									if (result.targets[0].countCards('he', (c) => get.color(c) == 'balck') > player.countCards('he', (c) => get.color(c) == 'balck')) player.gain([game.createCard('sha'), game.createCard('jiu')], 'draw');
									player.gainPlayerCard(result.targets[0], 'he', true);
									if (result.targets[0].countCards('he', (c) => get.color(c) == 'red') > player.countCards('he', (c) => get.color(c) == 'red')) player.gain([game.createCard('shan'), game.createCard('tao')], 'draw');
								}
							},
						},
						攻城战虎: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							nobracket: true,
							content() {
								'step 0';
								var num =
									game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									}).length +
									game.filterPlayer(function (current) {
										return (current.group = 'shu');
									}).length;
								player.draw(num);
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								}).length;
								list.sort(lib.sort.seat);
								player.useCard({ name: 'qijia' }, list);
								list.forEach(function (item) {
									item.chooseToDiscard(true, 'he');
								});
								list.forEach(function (item) {
									item.damage('fire');
								});
								player.judge(); //↓体力最小敌方角色
								var tlzxdfsjjs = game
									.filterPlayer(function (current) {
										return current.isEnemiesOf(player) && current.isMinHp();
									})
									.randomGet();
								event.target = tlzxdfsjjs;
								('step 1');
								var x = result.number;
								var n = player.countCards('he', (i) => i.number <= x);
								for (var i = 0; i < n; i++) {
									player.useCard({ name: 'sha' }, event.target, false);
								}
							},
						},
						西逆: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaAfter' },
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('西逆')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].damage([1, 2].randomGet());
								}
								('step 2');
								player.chooseTarget(get.prompt('西逆')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].draw([1, 2].randomGet() * 3);
								}
							},
						},
						绸匪: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								event.num = 3;
								event.gainNum = 0;
								('step 1');
								if (event.cards == undefined) event.cards = [];
								player.judge(function (card) {
									if (get.tag(card, 'damage')) return 1.5;
									return -1.5;
								}, ui.special);
								('step 2');
								if (result.judge > 0 && --event.num > 0) {
									event.gainNum++;
									event.cards.push(result.card);
									if (lib.config.autoskilllist.includes('绸匪')) {
										player.chooseBool('是否再次发动【绸匪】？');
									} else {
										event._result = { bool: true };
									}
								} else {
									event.cards = event.cards.filter((i) => get.position(i, true) == 's');
									player.gain(event.cards);
									if (event.cards.length) {
										player.$draw(event.cards);
									}
									player.recover();
									player.gain([game.createCard('shan'), game.createCard('shan')], 'draw');
									event.goto(4);
								}
								('step 3');
								if (result.bool) {
									event.goto(1);
								} else {
									player.gain(event.cards);
									if (event.cards.length) {
										player.$draw(event.cards);
									}
								}
								('step 4');
								if (event.gainNum) {
									player
										.chooseTarget(get.prompt('绸匪'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								}
								('step 5');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], event.gainNum, 'he', true);
								}
							},
						},
						祈猎: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								event.num = 3;
								event.hNum = 0;
								event.rNum = 0;
								('step 1');
								if (event.cards == undefined) event.cards = [];
								player.judge(function (card) {
									if (get.color(card) == 'red') return 1.5;
									return -1.5;
								}, ui.special);
								('step 2');
								if (result.judge > 0) event.rNum++;
								else event.hNum++;
								event.cards.push(result.card);
								('step 3');
								if (--event.num > 0) {
									event.goto(1);
								} else {
									player.gain(event.cards);
									player.$draw(event.cards);
								}
								('step 4');
								player.chooseTarget(get.prompt('祈猎')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 5');
								if (result.bool) {
									if (event.hNum > event.rNum) {
										result.targets[0].getDebuff();
										var list = [];
										for (var i = 0; i < lib.inpile.length; i++) {
											if (get.type({ name: lib.inpile[i] }) == 'basic') list.push(lib.inpile[i]);
										}
										player.gain(game.createCard(list.randomGet()), 'draw');
									} else {
										result.targets[0].getBuff();
										var list = [];
										for (var i = 0; i < lib.inpile.length; i++) {
											if (get.type({ name: lib.inpile[i] }) == 'trick') list.push(lib.inpile[i]);
										}
										player.gain(game.createCard(list.randomGet()), 'draw');
									}
								}
							},
						},
						婪骑: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							mod: {
								globalFrom(from, to, distance) {
									return distance - 2;
								},
							},
							content() {
								'step 0';
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player) && get.distance(player, current) <= 1;
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.useCard({ name: 'shunshou' }, list);
									player.useCard({ name: 'sha' }, list, false);
								}
								('step 1');
								if (player.countCards('h', { color: 'black' }) > player.countCards('h', { color: 'red' })) player.changeHuajia();
								else player.gain(game.createCard('jiu'), 'draw');
							},
						},
						蜀枪: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'loseEnd' },
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('蜀枪')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].discard(player.getCards('he', (c) => get.color(c) == ['red', 'black'].randomGet()).randomGet());
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						吴弓: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'loseEnd' },
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('吴弓')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].discard(player.getCards('he', (c) => get.type(c, 'trick') == ['equip', 'basic', 'trick'].randomGet()).randomGet());
									player.useCard({ name: 'wanjian' }, result.targets[0], false);
								}
							},
						},
						胡骑: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardToBegin' },
							usable: 2,
							check(event, player) {
								return get.attitude(player, event.target) < 0;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'red') return 1.5;
									return -1.5;
								}, ui.special);
								('step 1');
								if (result.judge > 0) {
									player.draw(2);
									player.addTempSkill('mashu', 'phaseAfter');
								} else {
									trigger.target.chooseToDiscard(2, true, 'he');
									player.gain([game.createCard('sha'), game.createCard('fudichouxin')], 'draw');
								}
							},
						},
						漠骑: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('he');
							},
							content() {
								'step 0';
								event.num = 1;
								player.chooseToDiscard(true, 'he');
								('step 1');
								if (result.bool) {
									if (result.card.name == 'sha') event.num++;
									player
										.chooseTarget(get.prompt('漠骑'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								}
								('step 2');
								if (result.bool) {
									result.targets[0].damage(event.num);
								}
							},
						},
						漠猎: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardAfter' },
							usable: 2,
							filter(event, player) {
								return get.tag(event.card, 'damage');
							},
							content() {
								'step 0';
								player.draw(
									1 +
									game.countPlayer(function (current) {
										return (current.group = 'qun');
									})
								);
								player.judge(function (card) {
									if (get.color(card) == 'red') return 1.5;
									return -1.5;
								}, ui.special);
								('step 1');
								if (result.judge > 0) {
									player.addTempSkill('mashu', 'phaseAfter');
									var n =
										1 +
										game.countPlayer(function (current) {
											return get.distance(player, current) <= 1 && current.group == 'qun';
										});
									trigger.target.damage(n);
								} else {
									player.gain([game.createCard('fudichouxin'), game.createCard('fudichouxin')], 'draw');
								}
							},
						},
						如燕: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							group: '如燕2',
							mod: {
								maxHandcard(player, num) {
									if (typeof player.storage.如燕 == 'number') return num + player.storage.如燕;
								},
							},
							mark: true,
							marktext: '<span style="background-color: #1E90FF;color: #FFFFFF; ">燕</span>',
							intro: {
								content(storage) {
									return '<span style="background-color: #1E90FF;color: #FFFFFF; ">当前有' + storage + '个燕</span>';
								},
							},
							init(player) {
								player.storage.如燕 = 0;
								player.unmarkSkill('如燕');
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('如燕')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var num = 1 + result.targets[0].countCards('he', (i) => i.name == 'sha' || i.name == 'shan');
									if (typeof player.storage.如燕 == 'number') {
										player.storage.如燕 += num;
									} else {
										player.storage.如燕 = num;
									}
									player.markSkill('如燕');
									player.draw(num);
									var gcs = [];
									for (var i = 0; i < num; i++) {
										gcs.push(game.createCard('shan'));
									}
									player.gain(gcs, 'draw');
									player
										.chooseTarget(get.prompt('如燕'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								}
								('step 2');
								if (result.bool) {
									result.targets[0].draw(player.storage.如燕);
									var gcs = [];
									for (var i = 0; i < player.storage.如燕; i++) {
										gcs.push(game.createCard('shan'));
									}
									result.targets[0].gain(gcs, 'draw');
								}
							},
						},
						如燕2: {
							trigger: { global: 'phaseAfter' },
							forced: true,
							silent: true,
							popup: false,
							_priority: 10,
							content() {
								player.storage.如燕 = 0;
								player.unmarkSkill('如燕');
							},
						},
						矫轻: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { target: 'useCardToBegin' },
							forced: true,
							_priority: 15,
							filter(event, player) {
								return ['sha', 'juedou'].includes(event.card.name) && player.countCards('he', (card) => card.name == 'shan');
							},
							content() {
								trigger.cancel();
								player.draw(2);
								player.recover();
							},
						},
						黑杠: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { target: 'shaEnd', player: 'damageEnd' },
							content() {
								var num = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player) && current.countCards('he', (card) => get.color(card) == 'black');
								}).length;
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.draw(num);
								player.gain(game.createCard('sha'));
								player.$draw();
								player.gain(game.createCard('juedou'));
								player.$draw();
								list.map(function (item) {
									item.loseHp();
								});
							},
						},
						鬼钺: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaEnd' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('鬼钺')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var n = 1 + result.targets[0].countCards('he', (c) => get.type(c) == 'basic');
									player.changeHujia(n);
									player.draw(n);
									event.n = n;
									var m = result.targets[0].countCards('he', (c) => c.name == 'tao' || c.name == 'jiu');
									result.targets[0].chooseToDiscard(2, true, 'he');
									result.targets[0].damage(1 + m);
								}
								('step 2');
								player.chooseTarget(get.prompt('鬼钺')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									var gcs = [];
									for (var i = 0; i < event.n; i++) {
										gcs.push(game.createCard('shan'));
									}
									result.targets[0].gain(gcs, 'draw');
								}
							},
						},
						洪石: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('洪石'), [1, 4]).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets.map((i) => i.addTempSkill('qianxing', 'roundStart'));
								}
							},
						},
						洪石4: {
							global: '洪石2',
							globalSilent: true,
							trigger: { global: 'phaseEnd' },
							filter(event, player) {
								return event.player != player && !event.player.tempSkills.洪石3 && event.player.isAlive();
							},
							content() {
								trigger.player.loseHp();
								player.draw(2);
								var card = game.createCard('bingliang');
								player.useCard(card, trigger.player);
							},
						},
						洪石2: {
							trigger: { player: 'useCard' },
							filter(event, player) {
								return _status.currentPhase == player && get.color(event.card) == 'black' && event.targets && (event.targets.length > 1 || event.targets[0] != player);
							},
							forced: true,
							popup: false,
							content() {
								player.addTempSkill('洪石3');
							},
						},
						洪石3: {},
						黑蟜: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardEnd' },
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								'step 0';
								player.gain(game.createCard(trigger.card.name));
								player.$draw();
								player.chooseTarget(get.prompt('黑蟜')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets[0], false);
									var t = result.targets[0];
									t.gain(game.createCard('du'));
									t.$draw();
									player.addSkill('黑蟜2');
								}
							},
						},
						黑蟜2: {
							forced: true,
							popup: false,
							trigger: { global: 'useCardBegin' },
							filter(event, player) {
								return get.color(event.card) == 'black';
							},
							content() {
								player.changeHujia();
								player.removeSkill('黑蟜2');
							},
						},
						兽械: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.addSkill('兽械2');
									item.damage(['fire', 'thunder'].randomGet());
									item.discard(item.getCards('e'));
								});
								('step 1');
								var num = 0;
								ui.discardPile.childNodes.forEach((i) => {
									if (get.type(i) === 'equip') num++;
								});
								player.draw(4 + num);
							},
						},
						兽械2: {
							forced: true,
							silent: true,
							trigger: { player: ['shaBegin', 'drawBegin'] },
							content() {
								player.popup('兽械效果触发');
								trigger.cancel();
								player.chooseToDiscard(2, true, 'he');
								player.removeSkill('兽械2');
							},
						},
						雪狼: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('雪狼')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard([2, 4].randomGet(), true, 'he');
									if (!result.targets[0].countCards('h')) {
										result.targets[0].damage(2);
										result.targets[0].gain([game.createCard('du'), game.createCard('du')]);
										result.targets[0].$draw(2);
									}
								}
							},
						},
						率义: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaEnd' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('率义')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									if (result.targets[0].countCards('he', (c) => c.name == 'sha' || (get.tag(c, 'damage') && get.type(c) == 'trick'))) {
										var giveCard = result.targets[0].getCards('he', (c) => c.name == 'sha' || (get.tag(c, 'damage') && get.type(c) == 'trick'));
										player.gain(giveCard, result.targets[0]);
										result.targets[0].$give(giveCard, player);
										event.num = giveCard.length;
									}
									('step 2');
									player
										.chooseTarget(get.prompt('率义'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return get.attitude(player, target);
										});
									('step 3');
									if (result.bool) {
										result.targets[0].changeHujia(event.num);
									}
								}
							},
						},
						毒泉: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'phaseEnd' },
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							content() {
								'step 0';
								event.n = 0;
								trigger.player.chooseToDiscard(true, 'he', (c) => c.suit == 'club');
								('step 1');
								if (result.cards) event.n++;
								('step 2');
								trigger.player.chooseToDiscard(true, 'he', (c) => c.suit == 'spade');
								('step 3');
								if (result.cards) event.n++;
								('step 4');
								trigger.player.chooseToDiscard(true, 'he', (c) => c.suit == 'diamond');
								('step 5');
								if (result.cards) event.n++;
								('step 6');
								trigger.player.chooseToDiscard(true, 'he', (c) => c.suit == 'heart');
								('step 7');
								if (result.cards) event.n++;
								trigger.player.loseHp(4 - event.n);
							},
						},
						护屯: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('护屯')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].addSkill('护屯2');
								}
							},
						},
						护屯2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { target: 'shaBegin' },
							silent: true,
							popup: false,
							content() {
								trigger.cancel();
								player.gain(game.createCard('du'));
								player.removeSkill('护屯2');
							},
						},
						骨水: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('骨水')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw([2, 6].randomGet());
								}
							},
						},
						骨水2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'dyingBegin' },
							content() {
								player.draw([2, 6].randomGet());
								if (player.countCards('he', (c) => get.type(c) == 'equip')) player.recover(1 - player.hp);
							},
						},
						年迈武卒: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							nobracket: true,
							filter(event, player) {
								return player.countCards('he');
							},
							content() {
								'step 0';
								player.chooseToDiscard(true, 'he', [1, player.countCards('he')]);
								('step 1');
								event.num = result.cards.length;
								player.chooseTarget(get.prompt('年迈武卒')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									result.targets[0].chooseToDiscard(true, 'he', event.num + player.maxHp - player.hp, (c) => c.name == 'sha');
									result.targets[0].chooseToDiscard(true, 'he', 1);
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						毒箭: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaEnd' },
							content() {
								'step 0';
								player.judge();
								('step 1');
								player.gain(result.card);
								event.num = 1;
								if (get.type(result.card) == 'basic') event.num++;
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								player.useCard({ name: 'wanjian' }, list);
								player.chooseTarget(get.prompt('毒箭')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									result.targets[0].loseHp();
									var gainCards = [];
									for (var i = 0; i < event.num; i++) {
										gainCards.push(game.createCard('du'));
									}
									result.targets[0].gain(gainCards, 'draw');
								}
							},
						},
						材官: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'damageBegin' },
							filter(event, player) {
								return (
									player.countCards('h') <
									game.countPlayer(function (current) {
										return current.group == 'wu';
									})
								);
							},
							content() {
								trigger.num--;
								if (trigger.source) trigger.source.damage();
							},
						},
						岷勇: {
							audio: 'ext:士兵扩展包/audio:2',
							global: '岷勇2',
							globalSilent: true,
							trigger: { global: 'phaseEnd' },
							filter(event, player) {
								return event.player != player && !event.player.tempSkills.qieting3 && event.player.isAlive();
							},
							content() {
								player.draw(2);
								player.useCard({ name: ['guohe', 'sha'].randomGet() }, list);
							},
						},
						岷勇2: {
							trigger: { player: 'useCard' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							forced: true,
							popup: false,
							content() {
								player.addTempSkill('岷勇3');
							},
						},
						岷勇3: {},
						雀鹰: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha' || event.card.name == 'juedou';
							},
							usable: 1, //QQQ
							content() {
								'step 0';
								player.chooseTarget(get.prompt('雀鹰')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].changeHujia();
								}
								('step 2');
								player.chooseTarget(get.prompt('雀鹰')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									player.useCard({ name: 'shunshou' }, result.targets[0]);
								}
								player.chooseToUse(get.prompt('雀鹰'), { name: 'sha' });
							},
						},
						红巾步兵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								var X =
									game.filterPlayer(function (current) {
										return current.hp < player.hp;
									}) +
									game.filterPlayer(function (current) {
										return current.maxHp < player.maxHp;
									});
								player.draw(X);
								event.list = game
									.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									})
									.sortBySeat();
								('step 1');
								if (event.list.length) {
									event.current = event.list.shift();
								} else {
									event.finish();
								}
								('step 2');
								player.discardPlayerCard(event.current, 'he', true);
								('step 3');
								if (event.current.hp < player.hp && get.color(result.cards[0]) == 'red') {
									event.current.damage();
								}
								if (event.current.hp >= player.hp && get.color(result.cards[0]) == 'black') player.useCard({ name: 'sha' }, event.current, false);
								event.goto(1);
							},
						},
						大鹏: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								game.mp43('dapengniao大鹏鸟Sptx');
								('step 1');
								player.chooseTarget(get.prompt('大鹏'), [1, 4]).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].loseMaxHp();
									}
								}
								('step 3');
								player.draw(
									game.countPlayer(function (current) {
										return current.maxHp < 3;
									})
								);
							},
						},
						文帝重装步兵2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'damageBegin' },
							forced: true,
							content() {
								trigger.num++;
							},
						},
						文帝重装步兵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardToBegin' },
							nobracket: true,
							filter(event, player) {
								return event.card == 'sha' || event.card == 'juedou';
							},
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('文帝重装步兵')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].changeHujia();
									result.targets[0].draw(result.targets[0].maxHp);
								}
								('step 2');
								player.chooseTarget(get.prompt('文帝重装步兵')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									player.gainPlayerCard('he', result.targets[0], 'visible');
									var numa = result.targets[0].countCards('he', (c) => get.color(c) == 'red');
									var numb = result.targets[0].countCards('he', (c) => get.color(c) == 'black');
									if (numa > numb) {
										result.targets[0].loseMaxHp();
										result.targets[0].addTempSkill('文帝重装步兵2');
									} else {
										result.targets[0].turnOver();
										result.targets[0].chooseToDiscard(true, '请弃置一张基本牌', 'he', (c) => get.type(c) == 'basic');
										player.draw(4 - result.targets[0].countCards('h', (c) => get.type(c) == 'basic'));
									}
								}
							},
						},
						御盾: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('御盾')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw();
									player.draw();
									result.targets[0].equip(game.createCard('jindun', 'spade', 3), result.targets[0]);
									player.equip(game.createCard('jindun', 'spade', 3), player);
								}
							},
						},
						寻玄: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('寻玄')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard('he', true, result.targets[0]);
									var num = [1, 2].randomGet();
									result.targets[0].addTempSkill('寻玄' + num);
								}
							},
						},
						寻玄1: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'damageBegin' },
							forced: true,
							content() {
								player.chooseToDiscard(true, 'he');
								trigger.num++;
								player.removeSkill('寻玄1');
							},
						},
						寻玄2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { target: 'useCardAfter' },
							filter(event, player) {
								return ['sha', 'juedou'].some((i) => i == event.card.name);
							},
							forced: true,
							content() {
								player.damage();
								player.removeSkill('寻玄2');
							},
						},
						助戈: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('助戈')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.draw(2);
									result.targets[0].equip(game.createCard('lige', 'spade', 6), result.targets[0]);
									player.equip(game.createCard('lige', 'spade', 6), player);
								}
							},
						},
						府兵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							usable: 1,
							filter(event, player) {
								return get.tag(event.card, 'damage');
							},
							content() {
								trigger.target.changeHujia();
								trigger.target.draw();
								var hs = trigger.player.getCards('he', (card) => get.color(card) == 'red').randomGets(2);
								var hs2 = hs.map((card) => game.createCard(card));
								if (hs2.length) trigger.target.gain(hs2, 'draw');
								trigger.target.useCard({ name: 'huogong' }, trigger.player, false);
								trigger.player.chooseToDiscard(true, '请弃置一张黑色牌', 'he', (c) => get.color(c) == 'black');
							},
						},
						御诏: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('御诏'), true).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var hs = result.targets[0].getCards('he').randomGets(2);
									var hs2 = hs.map((card) => game.createCard(card));
									if (hs2.length) player.gain(hs2, 'draw');
									result.targets[0].draw();
									event.t = result.targets[0];
								}
								('step 2');
								player.chooseTarget(get.prompt('御诏'), true).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									var t = event.t;
									t.useCard({ name: 'fudichouxin' }, result.targets[0]);
									t.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						燕悍: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaEnd' },
							filter(event, player) {
								return player.countCards('he');
							},
							content() {
								'step 0';
								player.chooseCard(true, 'he', '展示一张牌');
								('step 1');
								player.showCards(result.cards[0]);
								event.num = result.cards[0].number % 6;
								('step 2');
								if (event.num) trigger.target.chooseToDiscard('he', true, event.num);
								player.draw();
								player.gainMaxHp();
								('step 3');
								player.chooseTarget('请选择一名其他角色', function (card, player, target) {
									return target != player;
								});
								('step 4');
								if (result.bool) {
									var otherTarget = result.targets[0];
									var num = 0;
									for (var i = 0; i < player.getCards('he').length; i++) {
										if (get.color(player.getCards('he')[i]) == 'black') {
											num++;
										}
									}
									otherTarget.draw(num);
									var cards = Array(num)
										.fill('shan')
										.map((i) => game.createCards(i));
									otherTarget.gain(cards, player);
								}
							},
						},
						绝侍: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaEnd' },
							content() {
								'step 0';
								player.discardPlayerCard(trigger.target, 2, 'he', true);
								('step 1');
								if (result.cards.some((i) => get.color(i) == 'black')) trigger.target.gain([game.createCard('du'), game.createCard('du')], 'draw');
							},
						},
						铜阵: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: 'shaBegin',
							},
							group: '铜阵2',
							content() {
								'step 0';
								trigger.player.chooseToDiscard(2, true, 'he', '请弃置两张牌').ai = function () {
									return Math.random() < 0.5;
								};
								('step 1');
								player.draw(2);
								('step 2');
								if (
									player.countCards('he', function (card) {
										return card.number < 9;
									})
								) {
									player.chooseTarget('是否令此牌无效并令一名角色增加2～3点护甲？', function (card, player, target) {
										return true;
									}).ai = function (target) {
										return get.attitude(player, target);
									};
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									trigger.cancel();
									result.targets[0].changeHujia([2, 3].randomGet());
								}
							},
						},
						铜阵2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'phaseBegin' },
							filter(event, player) {
								return event.player.hujia;
							},
							content() {
								'step 0';
								event.num = trigger.player.hujia;
								trigger.player.changeHujia(-trigger.player.hujia);
								('step 1');
								player.chooseTarget('视为对一名角色使用' + event.num + '张杀？');
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									for (var i = 0; i < event.num; i++) {
										player.useCard(
											{
												name: 'sha',
											},
											target
										);
									}
								}
							},
						},
						蛮冶: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '蛮冶2',
							trigger: { global: 'discardEnd' },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								player.useCard(
									{
										name: 'nanman',
									},
									list
								);
							},
						},
						蛮冶2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseDiscardBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('蛮冶')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard(Math.max(2, Math.abs(player.hp - player.countCards('h'))), true, 'he');
								}
							},
						},
						三乱2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 3;
								},
							},
						},
						三乱: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin', global: 'useCardEnd' },
							usable: 1,
							filter(event, player) {
								if (event.name == 'useCard') return get.tag(event.card, 'damage');
								return true;
							},
							content() {
								'step 0';
								player.addTempSkill('三乱2');
								event.num = 3;
								player.draw(3);
								for (var i = 0; i < event.num; i++) {
									player.chooseToUse();
								}
							},
						},
						探戟夜莺: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							nobracket: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('探戟夜莺')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.draw(1 + get.distance(result.targets[0], player));
									result.targets[0].addTempSkill('探戟夜莺2', { player: 'phaseAfter' });
									var n = [0, 1].randomGet();
									var m = player.countCards('he', function (card) {
										return get.subtype(card) == 'equip1';
									});
									if (n) result.targets[0].damage(1 + m);
									else player.useCard({ name: 'sha' }, result.targets[0], false);
								}
								if (Math.random() < 0.66) player.addTempSkill('qianxing', { player: 'phaseBegin' });
							},
						},
						探戟夜莺2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance + from.getAttackRange();
								},
							},
						},
						娑队: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '娑队2',
							trigger: { player: 'phaseBegin' },
							mark: true,
							marktext: '<span style="color:pink">娑</span>',
							intro: {
								content(storage) {
									return '<span style="color:pink">娑:' + storage + '</span>';
								},
							},
							init(player) {
								player.storage.娑队 = 0;
							},
							content() {
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
								}
								player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet()), game.createCard('wanjian')], 'draw');
								var url = 'extension/士兵扩展包/image/posuo.jpg';
								player.marks.娑队.setBackgroundImage(url);
								var num = [1, 3].randomGet();
								if (typeof player.storage.娑队 == 'number') player.storage.娑队 += num;
								player.storage.娑队 = num;
								player.markSkill('娑队');
							},
						},
						娑队2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return player.storage.娑队;
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								player.storage.娑队--;
								trigger.cancel();
								player.useCard({ name: 'wanjian' }, trigger.player);
							},
						},
						灵弓: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								if (Math.random() < 0.5) trigger.directHit = true;
								if (Math.random() < 0.6) player.addTempSkill('灵弓3', 'shaAfter');
								if (Math.random() < 0.7) {
									player.draw(2);
									trigger.target.addTempSkill('灵弓2', { player: 'phaseAfter' });
								}
								if (Math.random() < 0.8) player.useCard({ name: 'wanjian' }, trigger.target);
							},
						},
						灵弓2: {
							mod: {
								maxHandcard(player, num) {
									return num - 2;
								},
							},
						},
						灵弓3: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							forced: true,
							content() {
								trigger.num++;
							},
						},
						控弦: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '控弦2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('控弦')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.discardPlayerCard(target, 2, 'he', true);
									for (var i = 0; i < [1, 3].randomGet(); i++) {
										player.useCard({ name: 'wanjian' }, target);
									}
								}
							},
						},
						控弦2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							usable: 5,
							content() {
								trigger.cancel();
								trigger.player.useCard({ name: 'wanjian' }, trigger.target);
								player.gain(game.createCard('wanjian'));
							},
						},
						合突: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseDrawEnd' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('合突'), true, [1, 2]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								event.t = result.targets.slice(0);
								event.list = result.targets;
								('step 2');
								if (event.list.length) {
									event.current = event.list.shift();
								} else {
									event.goto(5);
								}
								('step 3');
								player.gainPlayerCard(event.current, 'he', true);
								('step 4');
								var types = new Set(event.current.getCards('he').map((card) => get.type(card)));
								player.draw(4 - types.size);
								event.goto(2);
								('step 5');
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
								}
								for (var i = 0; i < list.length; i++) {
									var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
									var str = `<span style="color:${randomColor}">${get.translation(list[i])}</span>`;
									list[i] = [str, '', list[i]];
								}
								var dialog = ui.create.dialog('选择视为使用的普通锦囊牌', [list, 'vcard'], 'hidden');
								player.chooseButton(dialog, true).ai = function (button) {
									var card = { name: button.link[2] };
									var value = get.value(card);
									if (get.tag(card, 'damage')) value++;
									return value;
								};
								('step 6');
								if (result.bool) {
									var types = new Set(player.getCards('he').map((card) => get.type(card)));
									for (var i = 0; i < types.size; i++) {
										player.useCard({ name: result.buttons[0].link[2] }, event.t, false);
									}
								}
							},
						},
						煆营: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							group: '煆营2',
							content() {
								var gainCards = [];
								for (var i = 0; i < [1, 3].randomGet(); i++) {
									gainCards.push(game.createCard('wanjian'));
								}
								player.gain(gainCards, 'draw');
							},
						},
						煆营2: {
							trigger: { global: 'useCard' },
							filter(event, player) {
								return event.targets;
							},
							async content(event, trigger, player) {
								//QQQ
								var { result } = await player.chooseTarget(get.prompt('煆营'), [1, trigger.targets.length], (card, player, target) => trigger.targets.includes(target)).set('ai', (target) => -get.attitude(player, target));
								if (result.targets?.length) {
									for (var i of result.targets) {
										trigger.targets.remove(i);
									}
									player.draw(result.targets.length);
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						//一名角色获得牌后,若其中有黑色牌,你可以弃置该角色两张牌.若其中有装备牌,该角色受到1点伤害并视为你对其使用一张杀;否则从该角色受到1点伤害、视为对其使用一张杀随机执行一项
						大漠弯刀: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { global: 'gainEnd' },
							filter(event, player) {
								return event.cards && event.cards.some((i) => get.color(i) == 'black') && event.player != player;
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							usable: 1, //QQQ
							async content(event, trigger, player) {
								//QQQ
								var { result } = await player.discardPlayerCard(trigger.player, 2, 'he', true);
								if (result && result.cards && result.cards[0]) {
									if (result.cards.some((i) => get.type(i) == 'equip')) {
										trigger.player.damage();
										player.useCard({ name: 'sha' }, trigger.player, false);
									} else {
										//QQQ
										var num = [0, 1].randomGet();
										if (num > 0) trigger.player.damage();
										else player.useCard({ name: 'sha' }, trigger.player, false);
									}
								}
							},
						},
						将绸: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'shaBegin' },
							usable: 2,
							content() {
								'step 0';
								game.JPG3('feijianghongchoujun飞将红绸军dhtx', 800);
								event.cards = get.cards(2);
								if (get.color(event.cards[0]) != get.color(event.cards[1])) trigger.player.getStat().card.sha--;
								player.gain(event.cards, 'gain2');
								player.chooseTarget(get.prompt('将绸')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(2);
								}
							},
						},
						隶青: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('隶青')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.draw(2); //QQQ
								}
							},
						},
						司甲: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('司甲')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw([1, 3].randomGet());
									var n = new Set(player.getCards('he', { type: 'basic' }).map((c) => c.name)).size;
									var m = new Set(result.targets[0].getCards('he', { type: 'basic' }).map((c) => c.name)).size;
									player.changeHujia(n + m);
								}
							},
						},
						甲营: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							mod: {
								globalTo(from, to, distance) {
									if (to.hujia) return distance + to.hujia;
								},
							},
							content() {
								'step 0';
								player.changeHujia([1, 3].randomGet());
								player.chooseTarget(get.prompt('甲营')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].gain([game.createCard('sha'), game.createCard('fudichouxin')], 'draw');
									result.targets[0].addTempSkill('甲营', { player: 'phaseAfter' });
								}
							},
						},
						子明亲军: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							nobracket: true,
							content() {
								'step 0';
								player.discardPlayerCard(trigger.target, 2, 'he', true);
								('step 1');
								if (result.bool) {
									arraysuits = result.cards.map((i) => i.suit);
									function checkUniqueVas(arr) {
										var uniqueElements = new Set(arr);
										return uniqueElements.size === arr.length;
									}
									if (checkUniqueVas(arraysuits)) {
										player.phase('nodelay');
									}
								} else {
									player.phase('nodelay');
								}
								player.addTempSkill('子明亲军2', { player: 'phaseAfter' });
							},
						},
						子明亲军2: {
							mod: {
								maxHandcard(player, num) {
									return (
										num +
										2 +
										game.countPlayer(function (current) {
											return current.group == 'wu';
										})
									);
								},
							},
						},
						锐骑: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'phaseDrawBegin' },
							forced: true,
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							content() {
								var num =
									1 +
									game.countPlayer(function (current) {
										if (get.distance(trigger.player, current) <= 1 && current.hp > 0) return current.hp;
									});
								trigger.num += num;
							},
						},
						蹄踏: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								player.discardPlayerCard(trigger.target, [1, 3].randomGet(), 'he', true);
								('step 1');
								if (result.bool) {
									var types = result.cards.map((i) => get.type(i, 'trick'));
									if (types.includes('basic')) {
										player.gain(game.createCard('caomu'), 'draw');
									}
									if (types.includes('trick')) trigger.target.loseHp();
									if (types.includes('equip')) player.getStat().card.sha--;
								}
							},
						},
						凉标: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('凉标')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.draw(2); //QQQ
								}
							},
						},
						屯薄: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '屯薄2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								game.JPG3('tuntianzhubu屯田主薄dhtx2', 3000);
								('step 1');
								game.JPG3('tuntianzhubu屯田主薄dhtx1', 3000);
								('step 2');
								player.gain([game.createCard('shunshou'), game.createCard('shan')], 'draw');
								player.chooseTarget(get.prompt('屯薄')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].gain([game.createCard('shunshou'), game.createCard('shan')], 'draw');
									event.t = result.targets[0];
								}
								if (player.countCards('h')) player.chooseCard(true);
								('step 4');
								if (result.bool) {
									player.showCards(result.cards[0]);
									if (result.cards[0].suit != 'heart') {
										event.t.useCard({ name: 'yiyi' }, event.t);
										event.t.recover();
									}
								}
							},
						},
						屯薄2: {
							trigger: { global: 'gameDrawEnd' },
							silent: true,
							popup: false,
							content() {
								if (!player.storage.屯薄2) {
									player.storage.屯薄2 = true;
									var Tpdiv = ui.create.div(player);
									var tupian = ' ';
									var naka = player.node.avatar.offsetWidth + 6;
									var gaodu = -36;
									if (player.name2) {
										naka *= 2;
									}
									var zuo = 15;
									zuo = naka - 50;
									tupian = tupian + '<img style="position:absolute;width:60px;top:' + gaodu + 'px;left:' + zuo + 'px;" src="extension/士兵扩展包/image/tuntianzhubu屯田主薄dhtx3.jpg">';
									Tpdiv.innerHTML = tupian;
									ui.updatem(player);
									var player1 = player;
									var Tpdiv1 = ui.create.div(player1);
									var tupian1 = ' ';
									var naka1 = player1.node.avatar.offsetWidth + 6;
									var gaodu1 = -36;
									if (player1.name2) {
										naka1 *= 2;
									}
									var zuo1 = 15;
									zuo1 = naka1 / 2 - 60;
									tupian1 = tupian1 + '<img style="position:absolute;width:60px;top:' + gaodu1 + 'px;left:' + zuo1 + 'px;" src="extension/士兵扩展包/image/tuntianzhubu屯田主薄dhtx3.jpg">';
									Tpdiv1.innerHTML = tupian1;
									ui.updatem(player1);
								}
							},
						},
						火刃: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								game.JPG3('huorenbing火刃兵dhtx', 1000);
								player.chooseTarget(get.prompt('火刃')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								player.discardPlayerCard(event.target, 2, 'he', true);
								('step 3');
								if (result.bool) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
									}
									arraysuits = result.cards.map((i) => i.suit);
									function checkUniqueVas(arr) {
										var uniqueElements = new Set(arr);
										return uniqueElements.size === arr.length;
									}
									if (checkUniqueVas(arraysuits)) {
										event.target.damage('fire');
										player.gain([game.createCard('huogong'), game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
										player.draw(2);
										player.phase('nodelay');
									}
								} else {
									event.target.damage('fire');
									player.gain([game.createCard('huogong'), game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
									player.draw(2);
									player.phase('nodelay');
								}
							},
						},
						甘侍: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin', global: 'shaBegin' },
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('甘侍')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].discard(result.targets[0].getCards('he'));
								}
								('step 2');
								player.chooseTarget(get.prompt('甘侍')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].recover();
									result.targets[0].gain(game.createCard('shan'), 'draw');
								}
							},
						},
						冰火锥刺: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							nobracket: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('冰火锥刺')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 2 * [1, 3].randomGet(), 'he', true);
									result.targets[0].damage([1, 3].randomGet(), 'fire');
								}
							},
						},
						火拳: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '火拳2',
							trigger: { player: 'damageBegin' },
							filter(event, player) {
								return !event.nature || Math.random() < 0.6;
							},
							_priority: 24,
							content() {
								trigger.nature == 'fire';
							},
						},
						火拳2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'damageBegin' },
							forced: true,
							usable: 1, //QQQ
							content() {
								var n = trigger.num;
								trigger.cancel();
								if (trigger.source) {
									for (var i = 0; i < n; i++) {
										player.useCard({ name: 'sha', nature: 'fire' }, trigger.source, false);
									}
								}
							},
						},
						拾火: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '拾火2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('拾火')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.draw(2); //QQQ
								}
							},
						},
						拾火2: {
							trigger: { global: 'gameDrawEnd' },
							silent: true,
							popup: false,
							content() {
								if (!player.storage.拾火2) {
									player.storage.拾火2 = true;
									var Tpdiv = ui.create.div(player);
									var tupian = ' ';
									var naka = player.node.avatar.offsetWidth + 6;
									var gaodu = -36;
									if (player.name2) {
										naka *= 2;
									}
									var zuo = 15;
									zuo = naka - 50;
									tupian = tupian + '<img style="mix-blend-mode: difference;position:absolute;width:80px;top:' + gaodu + 'px;left:' + zuo + 'px;" src="extension/士兵扩展包/image/huobaTpzs.jpg">';
									Tpdiv.innerHTML = tupian;
									ui.updatem(player);
								}
							},
						},
						十八般兵器: {
							audio: 'ext:士兵扩展包/audio:2',
							nobracket: true,
							trigger: { player: 'phaseBefore' },
							_priority: 5,
							content() {
								'step 0';
								player.mpscreenpop = function (str, nature, avatar) {
									game.broadcast(
										function (player, str, nature, avatar) {
											player.$fullscreenpop(str, nature, avatar);
										},
										this,
										str,
										nature,
										avatar
									);
									game.addVideo('fullscreenpop', this, [str, nature, avatar]);
									var node = ui.create.div('.damage');
									if (avatar && this.node) {
										if (avatar == 'vice') {
											if (lib.character[this.name2]) {
												avatar = this.node.avatar2;
											}
										} else {
											if (lib.character[this.name]) {
												avatar = this.node.avatar;
											}
										}
										if (!get.is.div(avatar)) {
											avatar = false;
										}
									} else {
										avatar = false;
									}
									if (avatar) {
										node.classList.add('fullscreenavatar');
										ui.create.div('', ui.create.div(node));
										ui.create.div('', '<div>' + str.split('').join('</div><br><div>') + '</div>', ui.create.div('.text', node));
										node.firstChild.firstChild.style.backgroundImage = avatar.style.backgroundImage;
										node.style.color = nature || 'unknown';
										var num = 0;
										var nodes = node.lastChild.firstChild.querySelectorAll('div');
										var interval = setInterval(function () {
											if (num < nodes.length) {
												nodes[num].classList.add('flashtext');
												num++;
											} else {
												clearInterval(interval);
											}
										}, 100);
									} else {
										avatar = false;
										node.innerHTML = str;
										node.style.color = nature || 'soil';
									}
									if (avatar) {
										var rect1 = ui.window.getBoundingClientRect();
										var rect2 = this.getBoundingClientRect();
										var dx = Math.round(2 * rect2.left + rect2.width - rect1.width);
										var dy = Math.round(2 * rect2.top + rect2.height - rect1.height);
										node.style.transform = 'scale(0.5) translate(' + dx + 'px,' + dy + 'px)';
									}
									ui.window.appendChild(node);
									ui.refresh(node);
									if (avatar) {
										node.style.transform = 'scale(1)';
										node.style.opacity = 1;
									} else {
										node.classList.add('damageadded');
									}
									setTimeout(
										function () {
											node.delete();
											node.style.transform = 'scale(1.5)';
										},
										str.length * 0.3 * 1000
									);
								};
								player.mpscreenpop('十八般兵器,样样精通', 'red', player.name2 ? 'vice' : true);
								var bqnames = ['dao刀', 'qiang枪', 'jian剑', 'ji戟', 'fu斧', 'yue钺', 'gou钩', 'cha叉', 'bian鞭', 'jian锏', 'chui锤', 'tang镗', 'shuo槊', 'zhua抓', 'guai拐', 'lian镰', 'gong弓', 'biao镖', 'gun棍'];
								player.chooseButton(ui.create.dialog('请选择四名兵器', [bqnames, 'character']), 4);
								('step 1');
								if (result.bool) {
									var num = 0;
									result.links.forEach((i) => {
										num++;
										player.markSkillCharacter('十八般兵器jn' + num, i, '十八般兵器', '获得技能');
									});
									result.links.map((k) => lib.character[k][3].map((i) => player.addTempSkill(i, { player: 'phaseBefore' })));
									player.addSkill('十八般兵器2');
								}
							},
						},
						十八般兵器jn1: {},
						十八般兵器jn2: {},
						十八般兵器jn3: {},
						十八般兵器jn4: {},
						十八般兵器2: {
							trigger: { player: 'phaseBefore' },
							forced: true,
							popup: false,
							_priority: 50,
							content() {
								for (var i = 0; i < 4; i++) {
									player.unmarkSkill(`十八般兵器jn${i + 1}`);
								}
								player.removeSkill('十八般兵器2');
							},
						},
						刀: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '刀2',
							trigger: { source: 'damageBegin' },
							usable: 1,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.player.countCards('he', (c) => c.suit == 'spade') < player.countCards('he', (c) => c.suit == 'spade');
							},
							content() {
								trigger.num += 1 + player.countCards('he', (c) => c.suit == 'spade');
							},
						},
						刀2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						枪: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '枪2',
							trigger: { player: 'shaEnd' },
							filter(event, player) {
								return get.color(event.card) == 'black';
							},
							usable: 3,
							content() {
								player.gain([game.createCard('shan'), game.createCard('qijia')], 'draw');
							},
						},
						枪2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						剑: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '剑2',
							trigger: { player: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							usable: 1,
							content() {
								var x = [2, 2 + player.countCards('he', (c) => c.suit == 'heart')].randomGet();
								trigger.target.chooseToDiscard(x, true, 'he', '请弃置' + x + '张牌');
							},
						},
						剑2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						戟: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '戟2',
							trigger: { source: 'damageBegin' },
							usable: 1,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								player.draw(player.getAttackRange() + trigger.player.getAttackRange());
							},
						},
						戟2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						斧: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '斧2',
							trigger: { player: 'shaBegin' },
							usable: 1,
							content() {
								'step 0';
								player.discardPlayerCard(trigger.target, [1, 3].randomGet(), 'he', true);
								('step 1');
								if (result.bool) {
									if (result.cards.some((i) => get.tag(i, 'damage'))) trigger.target.damage();
								}
							},
						},
						斧2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						钺: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '钺2',
							trigger: { player: 'shaBegin' },
							usable: 2,
							content() {
								'step 0';
								player.discardPlayerCard(trigger.target, 'he', true);
								('step 1');
								if (result.bool) {
									if (result.cards[0].number <= 9 || get.color(result.cards[0]) == 'black') player.draw(3);
								}
							},
						},
						钺2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						钩: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '钩2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('钩')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									event.x = result.targets[0];
									player.gainPlayerCard(result.targets[0], 'he', true);
								}
								('step 2');
								if (result.bool && result.cards) {
									if (result.cards[0].number <= 9) player.useCard({ name: 'sha' }, event.x, false);
								}
							},
						},
						钩2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						叉: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '叉2',
							trigger: { player: 'shaBegin' },
							content() {
								if (Math.random() < 0.5) {
									trigger.target.discard(trigger.target.getCards('he').randomGet());
									trigger.target.turnOver();
								}
							},
						},
						叉2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						鞭: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '鞭2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('鞭')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var giveCard = result.targets[0].getCards('he', (c) => c.name == 'sha').randomGet();
									if (giveCard) {
										player.gain(giveCard, result.targets[0]);
										result.targets[0].$give(giveCard, player);
									}
									result.targets[0].damage();
								}
							},
						},
						鞭2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						锏: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '锏2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('锏')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 'he', true);
								}
								('step 2');
								if (result.bool) {
									if (get.tag(result.cards[0], 'damage')) player.addTempSkill('锏3');
								}
							},
						},
						锏2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						锏3: {
							trigger: { source: 'damageBegin' },
							content() {
								trigger.num++;
							},
						},
						锤: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '锤2',
							trigger: { player: 'shaBegin' },
							content() {
								if (Math.random() < 0.5) {
									trigger.target.addTempSkill('fengyin');
									trigger.target.discard(trigger.target.getCards('e'));
								}
								if (Math.random() < 0.6) player.addTempSkill('锤3');
							},
						},
						锤2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						锤3: {
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								trigger.num++;
							},
						},
						镗: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '镗2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('镗')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].addTempSkill('镗3');
									result.targets[0].damage();
								}
							},
						},
						镗2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						镗3: {
							mark: true,
							mod: {
								cardEnabled(card, player) {
									if (get.color(card) == 'red') return false;
								},
								cardUsable(card, player) {
									if (get.color(card) == 'red') return false;
								},
								cardRespondable(card, player) {
									if (get.color(card) == 'red') return false;
								},
								cardSavable(card, player) {
									if (get.color(card) == 'red') return false;
								},
							},
							intro: {
								content: '不能使用或打出红色牌',
							},
						},
						槊: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '槊2',
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player.discardPlayerCard(trigger.target, 'he', true);
								('step 1');
								if (result.bool) {
									if (get.color(result.cards[0]) == 'black') player.useCard({ name: 'qijia' }, trigger.target);
								}
							},
						},
						槊2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						抓: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '抓2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.draw(2);
								if (player.getCards('he')) {
									if (player.getCards('h')) player.showCards(player.getCards('h'));
									player
										.chooseTarget(get.prompt('抓'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								}
								('step 1');
								if (result.bool) {
									for (var i = 0; i < player.countCards('he', (c) => get.color(c) == 'black'); i++) {
										player.useCard({ name: 'sha' }, result.targets[0], false);
									}
								}
							},
						},
						抓2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						拐: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '拐2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							usable: 1,
							content() {
								'step 0';
								trigger.cancel();
								player.chooseTarget(get.prompt('拐')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].damage();
								}
							},
						},
						拐2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						镰: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '镰2',
							trigger: { global: 'loseEnd' },
							usable: 3,
							content() {
								'step 0';
								player.judge();
								('step 1');
								if (get.color(result) == 'black') {
									trigger.player.chooseToDiscard('he', true, { color: 'red' }, '请弃置一张红色牌');
									trigger.player.damage();
								}
							},
						},
						镰2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						弓: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '弓2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name && event.player.getCards('e').length;
							},
							content() {
								'step 0';
								trigger.player.discard(trigger.player.getCards('e').randomGet());
								('step 1');
								if (result.bool) {
									if (get.color(result.card[0]) == 'black') player.discardPlayerCard(trigger.player, 'he', true);
								}
							},
						},
						弓2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 4;
								},
							},
						},
						镖: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								trigger.target.loseHp([1, 1 + player.countCards('he', (c) => get.color(c) == 'black')].randomGet());
							},
						},
						棍: {
							audio: 'ext:士兵扩展包/audio:2',
							group: '棍2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.judge();
								('step 1');
								if (result.number <= 9) {
									player
										.chooseTarget(get.prompt('棍'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								}
								('step 2');
								if (result.bool) {
									result.targets[0].damage([2, 4].randomGet());
								}
							},
						},
						棍2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						雄狮: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								game.mp43('xiongshi雄狮sptx');
								player.draw(2);
								player.chooseTarget(get.prompt('雄狮'), [1, 4]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var num = player.countCards('he', (c) => get.tag(c, 'damage'));
									result.targets.forEach((i) => {
										i.discard(i.getCards('he', (c) => get.type(c) == 'equip'));
										i.discard(i.getCards('he').randomGets(2));
										i.damage(num);
									});
								}
							},
						},
						陵劫: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'loseEnd' },
							usable: 1,
							filter(event, player) {
								return player.hp > player.countCards('h');
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('陵劫')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var num = 0;
									if (result.targets[0].countCards('h')) num++;
									if (result.targets[0].countCards('e')) num++;
									if (result.targets[0].countCards('j')) num++;
									if (num > 0) {
										player.gainPlayerCard(result.targets[0], num, 'hej', true).set('filterButton', function (button) {
											for (var i = 0; i < ui.selected.buttons.length; i++) {
												if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
											}
											return true;
										});
									}
									result.targets[0].damage('fire');
								}
							},
						},
						红拂: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('红拂')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].gain(game.createCard('lingzhi灵芝'), 'draw');
									result.targets[0].draw(3);
								}
								('step 2');
								player.chooseTarget(get.prompt('红拂')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, { subtype: 'equip1' }, '请弃置一张红色牌');
									result.targets[0].chooseToDiscard('he', true, { name: 'sha' }, '请弃置一张杀');
								}
							},
						},
						幻影: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							usable: 2,
							content() {
								'step 0';
								if (Math.random() < 0.6) trigger.cancel();
								player.gain(game.createCard(['caoyao', { name: 'dutao', nature: 'poison' }].randomGet()), 'draw');
								player.chooseTarget(get.prompt('幻影')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].gain(game.createCard('shan'), 'draw');
									result.targets[0].draw(2);
								}
							},
						},
						侯布: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								if (Math.random() < 0.6) trigger.cancel();
								player.judge();
								('step 1');
								if (get.color(result) == 'red') player.gain(game.createCard('pantao'), 'draw');
								else player.gain(game.createCard('baguafuzhou'), 'draw');
							},
						},
						宦斩: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('宦斩')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, (c) => get.type(c) == 'basic', '请弃置一张基本牌');
								}
								player.gain(game.createCard('liejiu'), 'draw');
							},
						},
						议监: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.draw(2);
								player.gain([game.createCard('liejiu'), game.createCard('bingjiu')], 'draw');
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
								}
								for (var i = 0; i < list.length; i++) {
									var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
									var str = `<span style="color:${randomColor}">${get.translation(list[i])}</span>`;
									list[i] = [str, '', list[i]];
								}
								var dialog = ui.create.dialog('选择视为使用一张伤害标签牌', [list, 'vcard'], 'hidden');
								player.chooseButton(dialog, true).ai = function (button) {
									var card = { name: button.link[2] };
									var value = get.value(card);
									if (get.tag(card, 'damage')) value++;
									return value;
								};
								('step 1');
								if (result.bool) {
									event.n = result.buttons[0].link[2];
									player
										.chooseTarget(get.prompt('议监'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return get.attitude(player, target);
										});
								}
								('step 2');
								if (result.bool) {
									player.useCard({ name: event.n }, result.targets[0], false);
									player.useCard({ name: event.n }, result.targets[0], false);
								}
							},
						},
						击侍: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								var gainCards = [];
								for (var i = 0; i < 1 + player.countCards('he', (c) => c.suit == 'spade'); i++) {
									gainCards.push(game.createCard({ name: 'sha', nature: 'thunder' }));
								}
								player.gain(gainCards, 'draw');
								player.chooseTarget(get.prompt('击侍')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].damage(
										player.countCards('he', (c) => c.name == 'sha'),
										'thunder'
									);
								}
							},
						},
						弓威: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { global: 'useCard' },
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick' && event.player != player;
							},
							check: (event, player) => event.player.isEnemiesOf(player), //QQQ
							content() {
								player.tpline1(trigger.player, 'lvsejianline', 300);
								if (Math.random() < 0.6) {
									trigger.cancel();
									if (trigger.player.countCards('he')) player.discardPlayerCard(trigger.player, 'he', true);
								}
								if (Math.random() < 0.3 && trigger.player.countCards('he')) trigger.player.discard(trigger.player.getCards('he'));
								player.useCard({ name: 'wanjian' }, trigger.player);
							},
						},
						孙氏弓卫: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							nobracket: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('孙氏弓卫')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									var x = target.offsetLeft + target.offsetWidth / 2;
									var y = target.offsetTop + target.offsetHeight / 2;
									var div = document.createElement('div');
									div.style.cssText = `
						background-image: url(extension/士兵扩展包/image/ssgwchoosedamage.jpg);
						background-size: 100% 100%;
						width: 238px;
						height: 274px;
						pointer-events: none;
						position: absolute;
						z-index: 6;
					`;
									div.style.left = x - 238 / 2 + 'px';
									div.style.top = y - 274 / 2 + 'px';
									if (game.chess) {
										ui.chess.appendChild(div);
									} else {
										ui.arena.appendChild(div);
									}
									setTimeout(function () {
										div.delete();
									}, 2000);
									player.draw(result.targets[0].countCards('he', { color: 'black' }));
									event.t = result.targets[0];
								}
								for (var i = 0; i < player.countCards('he', { color: 'black' }); i++) {
									player.useCard({ name: 'wanjian' }, event.t);
								}
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.changeHujia();
								});
							},
						},
						汉戍: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: {
								global: ['useCard', 'respondEnd'],
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							usable: 3,
							filter: (event, player) => event.player != player, //QQQ
							content() {
								'step 0';
								if (trigger.name == 'respond') {
									if (trigger.parent.result) {
										trigger.parent.result.bool = false;
									}
								} else trigger.cancel();
								player.chooseTarget(get.prompt('汉戍')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									[result.targets[0], player].map((i) => {
										i.draw(2);
										i.changeHujia();
										var listfood = get.typeCard('food');
										i.gain(game.createCard(listfood.randomGet()), 'draw');
									});
								}
							},
						},
						颜卫: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.addTempSkill('颜卫2');
								event.list = game.filterPlayer(function (current) {
									return current.countCards('he');
								});
								event.list.sort(lib.sort.seat);
								player.tpline1(event.list, 'hyswguline', 300);
								('step 1');
								if (event.list.length) {
									event.current = event.list.shift();
								} else {
									event.finish();
								}
								('step 2');
								event.current.chooseCard(true);
								('step 3');
								if (result.bool) {
									event.current.showCards(result.cards[0]);
									player.gain(game.createCard(result.cards[0]), 'draw');
								}
								event.goto(1);
							},
						},
						颜卫2: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'useCardEnd' },
							filter(event, player) {
								return get.itemtype(event.cards) != 'cards' || event.card.number <= 9;
							},
							usable: 3,
							content() {
								player.draw(2);
							},
						},
						圣疗: {
							audio: 'ext:士兵扩展包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								if (!player.圣疗qh) {
									player.圣疗qh = true;
									const backgroundImages = ['yiliaoshengshi.jpg', 'yiliaoshengshi1.jpg'];
									let currentIndex = 0;
									function switchBackground() {
										currentIndex = (currentIndex + 1) % backgroundImages.length;
										player.node.avatar.setBackgroundImage(`extension/士兵扩展包/image/${backgroundImages[currentIndex]}`);
									}
									setInterval(switchBackground, 5000);
								}
								player.chooseTarget(get.prompt('圣疗')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.tpline1(result.targets[0], '圣疗line', 300);
									[result.targets[0], player].map((i) => {
										i.draw(i.countCards('he', { color: 'red' }));
										i.recover();
										i.gain(game.createCard('lingzhi灵芝'), 'draw');
									});
								}
							},
						},
						惧火: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'damageBegin' },
							forced: true,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								trigger.num += 2;
							},
						},
						雪驱: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'damageBegin' },
							forced: true,
							filter(event, player) {
								return event.nature == 'bingsx';
							},
							content() {
								trigger.cancel();
								player.recover(2);
							},
						},
						堆雪: {
							mod: {
								cardRespondable(card, player) {
									if (card.name == 'shan' && _status.event.skill != '堆雪') return false;
								},
							},
							forced: true,
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								return true;
							},
							filterCard: { name: 'shan' },
							viewAs: { name: 'bingsha' },
							viewAsFilter(player) {
								if (!player.countCards('h', 'shan')) return false;
							},
							check() {
								return 1;
							},
							ai: {
								skillTagFilter(player) {
									if (!player.countCards('h', 'shan')) return false;
								},
								respondSha: true,
								order: 4,
								useful: -1,
								value: -1,
							},
						},
						苍梧: {
							audio: 'ext:士兵扩展包/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('苍梧')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.tpline1(result.targets[0], 'cangwuzhanshiline', 300);
									event.ta = result.targets[0];
									player.gainPlayerCard(result.targets[0], 2, 'he', true, 'visible');
								} else event.finish();
								('step 2');
								event.num = 3 - event.ta.countCards('he', (c) => get.tag(c, 'damage'));
								player.chooseTarget(get.prompt('苍梧')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									event.t = result.targets[0];
									event.targets = result.targets;
								} else event.finish();
								('step 4');
								player.chooseJunlingFor(event.t);
								('step 5');
								event.junling = result.junling;
								event.t.carryOutJunling(player, event.junling, event.targets);
								('step 6');
								if (--event.num > 0) event.goto(4);
							},
						},
					},
				};
				lib.config.all.characters.add('士兵扩展包');
				lib.config.characters.add('士兵扩展包');
				for (var i in QQQ.character) {
					QQQ.character[i][4].add(`ext:士兵扩展包/image/${i}.jpg`);
				}
				lib.translate['士兵扩展包_character_config'] = `士兵扩展包`;
				return QQQ;
			});
		},
		package: {
			intro: "素材提供:平西镇北征南破东定中拢左揽右震天憾地司马<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
			author: '作者苏婆玛丽奥弃坑,素材提供者大司马代更',
		},
	};
});
