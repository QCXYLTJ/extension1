import { lib, game, ui, get, ai, _status } from '../../../../../noname.js'
import {
	SaamisSJZX_maps,
	SaamisSJZX_collection as samCol,
	SaamisSJZX_cannotSay,
	SaamisSJZX_cultureBuff,
	SaamisSJZX_team,
} from "./saamis.js";
import { TargetLife } from "../SaamisFuc/TargetLife.js";
import { RougeLikeSJZX } from "../rougelike.js";
import { mrfzfuc } from "../../SJZXfuc.js";
import { SaamisU } from "../SaamisFuc/util.js";
export let SJZX_rougeFunction = {
	game: {
		changeSaamisMusic(name, theme) {
			if (theme === true) {
				name = "Sammis_theme" + name;
			}
			let url = `ext:驶舰之向/audio/BGM/Sammis/${name}.mp3`;
			_status.tempMusic = url;
			game.playBackgroundMusic();
		},
		closeCurrentDomSamiss(current, callback) {
			if (typeof current != "string" && !Array.isArray(current)) {
				game.reload();
				return;
			} else if (typeof current == "string") {
				// 存在则移除对应类名的界面
				document.body.removeChild(
					document.getElementsByClassName(current)[0]
				);
				_status.saamisSJZX.current.closeDom = undefined;
				// 判断是否有函数,有则执行
				if (typeof callback === "function") {
					callback();
					_status.saamisSJZX.current.callback = undefined;
				}
			} else if (Array.isArray(current)) {
				for (var i = 0; i < current.length; i++) {
					game.closeCurrentDomSamiss(
						current[i],
						i == current.length - 1 ? callback : null
					);
				}
			} else throw new Error(`current must be string of Array!`);
		},
		setCloseDomSamiss(dom, callback) {
			if (typeof dom !== "string" && !Array.isArray(dom)) {
				throw new Error(`dom must be string or Array!`);
			} else {
				_status.saamisSJZX.current.closeDom = dom;
				if (typeof callback !== "function")
					console.warn(`callback is not function!`);
				_status.saamisSJZX.current.callback = callback;
			}
			return _status.saamisSJZX.current;
		},
		initSaamis() {
			if (!lib.config.SaamisSave) {
				SaamisU.initSaamissSave();
			}
			var SaamisSave = lib.config.SaamisSave;
			//设置背景
			var bgsjzx = document.createElement("div");
			bgsjzx.classList.add("backgroundSJZX");
			bgsjzx.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/sasmisBackgroud0.png)`;
			document.body.appendChild(bgsjzx);
			// 设置特效
			mrfzfuc.snowSJZX(bgsjzx, 500);
			//图标设置
			var fatherSJZX = document.createElement("div");
			fatherSJZX.classList.add("fatherSJZX");
			document.body.appendChild(fatherSJZX);
			var logoSammisSJZX = document.createElement("div");
			logoSammisSJZX.classList.add("logoSammisSJZX");
			logoSammisSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/logo.png)`;
			fatherSJZX.appendChild(logoSammisSJZX);
			//菜单设置
			var fatherMenuSJZX = document.createElement("div");
			fatherMenuSJZX.classList.add("fatherMenuSJZX");
			document.body.appendChild(fatherMenuSJZX);
			var backbutton = document.createElement("div");
			backbutton.classList.add("back-buttonSJZX");
			backbutton.addEventListener("click", (event) => {
				var current = _status.saamisSJZX.current;
				game.closeCurrentDomSamiss(current.closeDom, current.callback);
			});
			backbutton.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/back.png)`;
			fatherMenuSJZX.appendChild(backbutton);
			var mainMenu = document.createElement("div");
			mainMenu.classList.add("main-menuSJZX");
			mainMenu.addEventListener("click", () => {
				// 对菜单进行设置,使其置于图层之上
				document.getElementsByClassName(
					"menu-container"
				)[0].style.zIndex = 30;
				document.getElementsByClassName(
					"main menu dialog popped static"
				)[0].style.marginTop = "20px";
				ui.click.configMenu();
			});
			mainMenu.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/home.png)`;
			fatherMenuSJZX.appendChild(mainMenu);
			// 声音菜单
			var soundbuttonSJZX = document.createElement("div");
			soundbuttonSJZX.classList.add("sound-buttonSJZX");
			soundbuttonSJZX.addEventListener("click", () => {
				// 对菜单进行设置,使其置于图层之上
				var tmpDomSJZX = document.createElement("div");
				tmpDomSJZX.classList.add("noneSJZX");
				tmpDomSJZX.addEventListener("click", () => {
					document.body.removeChild(
						document.getElementsByClassName("noneSJZX")[0]
					);
				});
				var soundDom = ui.click.volumn();
				soundDom.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/soundBG.png)`;
				soundDom.style.position = "absolute";
				soundDom.style.backgroundSize = "100% 100%";
				soundDom.style.width = "20%";
				soundDom.style.height = "20%";
				soundDom.style.top = "6%";
				soundDom.style.left = "8%";
				tmpDomSJZX.appendChild(soundDom);
				document.body.appendChild(tmpDomSJZX);
			});
			soundbuttonSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/sound.png)`;
			fatherMenuSJZX.appendChild(soundbuttonSJZX);
			//科考等级
			var levelScientificSJZX = document.createElement("div");
			levelScientificSJZX.classList.add("level-ScientificSJZX");
			levelScientificSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/levelbg.png)`;
			document.body.appendChild(levelScientificSJZX);
			var levelexpeditionsRecordsLogo2 = document.createElement("div");
			levelexpeditionsRecordsLogo2.classList.add(
				"level-expeditionsRecordsLogo2"
			);
			levelexpeditionsRecordsLogo2.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/expeditionsRecords.png)`;
			levelexpeditionsRecordsLogo2.addEventListener("click", () => {
				alert(`累计获取的经验为:${SaamisSave.level[1]}`);
			});
			levelScientificSJZX.appendChild(levelexpeditionsRecordsLogo2);
			var levelLVBG = document.createElement("div");
			levelLVBG.classList.add("level-LV-BG");
			levelScientificSJZX.appendChild(levelLVBG);
			var levelLVlogo = document.createElement("div");
			levelLVlogo.classList.add("level-LVlogo");
			levelLVlogo.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/LV.png)`;
			levelLVBG.appendChild(levelLVlogo);
			var levelLVtext = document.createElement("div");
			levelLVtext.classList.add("level-LVtext");
			levelLVtext.innerText = `${SaamisSave.level[0]}`;
			levelLVBG.appendChild(levelLVtext);
			var levelexpeditionsRecordsLogo = document.createElement("div");
			levelexpeditionsRecordsLogo.classList.add(
				"level-expeditionsRecordsLogo"
			);
			levelexpeditionsRecordsLogo.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/levellogo.png)`;
			levelScientificSJZX.appendChild(levelexpeditionsRecordsLogo);
			// 游戏开始按钮
			var gameStartLogoSJZX = document.createElement("div");
			gameStartLogoSJZX.classList.add("gameStartLogoSJZX");
			gameStartLogoSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/gameStart.png)`;
			gameStartLogoSJZX.addEventListener("click", () => {
				game.samissStart();
			});
			fatherSJZX.appendChild(gameStartLogoSJZX);
			//文化比较
			var buffSammisSJZX = document.createElement("div");
			buffSammisSJZX.classList.add("buffSammisSJZX");
			buffSammisSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/buff.png)`;
			buffSammisSJZX.addEventListener("click", () => {
				game.CultureSaamisConfig();
			});
			fatherSJZX.appendChild(buffSammisSJZX);
			var buffSammiscompelet = document.createElement("div");
			buffSammiscompelet.classList.add("buffSammis-compelet");
			buffSammiscompelet.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/finish.png)`;
			buffSammisSJZX.appendChild(buffSammiscompelet);
			var buffSammislevelText = document.createElement("span");
			buffSammislevelText.classList.add("outSystemSamiss-levelText");
			buffSammislevelText.id = "buffSammislevelText";
			buffSammislevelText.innerHTML = `${SaamisSave.buff.point}`;
			buffSammisSJZX.appendChild(buffSammislevelText);
			var buffSammistextSJZX = document.createElement("span");
			buffSammistextSJZX.classList.add("outSystemSamiss-textSJZX");
			buffSammistextSJZX.innerHTML = `文化比较`;
			buffSammisSJZX.appendChild(buffSammistextSJZX);
			if (SaamisSave.buff.usedPoint >= 100) {
				buffSammislevelText.classList.add("display-none");
			} else {
				buffSammiscompelet.classList.add("display-none");
			}
			//前瞻性投资 cannotSammis
			var cannotSammisSJZX = document.createElement("div");
			cannotSammisSJZX.classList.add("cannotSammisSJZX");
			cannotSammisSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/cannot.png)`;
			cannotSammisSJZX.addEventListener("click", () => {
				game.CannotSammisConfig();
			});
			fatherSJZX.appendChild(cannotSammisSJZX);
			var cannotSammislevelText = document.createElement("span");
			cannotSammislevelText.classList.add("outSystemSamiss-levelText");
			cannotSammislevelText.id = "cannotSammislevelText";
			cannotSammislevelText.innerHTML = `${SaamisSave.cannot.point}`;
			cannotSammisSJZX.appendChild(cannotSammislevelText);
			var cannotSammistextSJZX = document.createElement("span");
			cannotSammistextSJZX.classList.add("outSystemSamiss-textSJZX");
			cannotSammistextSJZX.innerHTML = `前瞻性投资`;
			cannotSammisSJZX.appendChild(cannotSammistextSJZX);
			//挑战自然(难度设置) battleNatureSJZX battleNature-textSJZX
			var battleNatureSJZX = document.createElement("div");
			battleNatureSJZX.classList.add("battleNatureSJZX");
			battleNatureSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/battleNature.png)`;
			battleNatureSJZX.addEventListener("click", () => {
				game.BattleNatueConfig();
			});
			fatherSJZX.appendChild(battleNatureSJZX);
			var battleNaturelevelText = document.createElement("span");
			battleNaturelevelText.classList.add("outSystemSamiss-levelText");
			battleNaturelevelText.id = "battleNaturelevelText";
			battleNaturelevelText.innerHTML = `${SaamisSave.difficulty}`;
			battleNatureSJZX.appendChild(battleNaturelevelText);
			var battleNaturetextSJZX = document.createElement("span");
			battleNaturetextSJZX.classList.add("outSystemSamiss-textSJZX");
			battleNaturetextSJZX.innerHTML = `挑战自然`;
			battleNatureSJZX.appendChild(battleNaturetextSJZX);
		},
		BattleNatueConfig() {
			// 获取数据
			if (!lib.config.SaamisSave) {
				console.warn("存档数据不存在!");
			}
			var SammisSave = lib.config.SaamisSave;
			// 界面设置
			// 容器
			var battleNatrueContainSJZX = document.createElement("div");
			battleNatrueContainSJZX.classList.add("battleNatrueContainSJZX");
			var battleNatueContainLeftSJZX = document.createElement("div");
			battleNatueContainLeftSJZX.classList.add(
				"battleNatueContainLeftSJZX"
			);
			battleNatrueContainSJZX.appendChild(battleNatueContainLeftSJZX);
			var battleNatueContainRightSJZX = document.createElement("div");
			battleNatueContainRightSJZX.classList.add(
				"battleNatueContainRightSJZX"
			);
			battleNatrueContainSJZX.appendChild(battleNatueContainRightSJZX);
			document.body.appendChild(battleNatrueContainSJZX);
			// 更新退出按钮设置
			game.setCloseDomSamiss(
				"battleNatrueContainSJZX",
				game.SaamissUpdateAtleftButton
			);
			// 左边信息设置
			// 添加容器
			var battleNatueContainLeftUpSJZX = document.createElement("div");
			battleNatueContainLeftUpSJZX.classList.add(
				"battleNatueContainLeftUpSJZX"
			);
			battleNatueContainLeftSJZX.appendChild(
				battleNatueContainLeftUpSJZX
			);
			// 添加图标
			function addTips(text, path, onlyImage, className) {
				let flag = 0;
				if (typeof className !== "string") {
					className = "battleNatrueTipsLogo";
				} else flag++;
				//设置二级容器
				var battleNatrueTipsContain = document.createElement("div");
				battleNatrueTipsContain.classList.add(
					flag == 1 ? className : "battleNatrueTipsContain"
				);
				if (flag == 1) {
					battleNatrueTipsContain.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/battleNature/${path}.png)`;
				}
				battleNatrueTipsContain.id = path;
				battleNatueContainLeftUpSJZX.appendChild(
					battleNatrueTipsContain
				);
				//往二级容器里添加图片
				if (flag == 1) return;
				var battleNatrueTipsLogo = document.createElement("div");
				battleNatrueTipsLogo.classList.add(className);
				battleNatrueTipsLogo.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/battleNature/${path}.png)`;
				battleNatrueTipsContain.appendChild(battleNatrueTipsLogo);
				if (onlyImage == true) return;
				//往二级容器里添加文字
				var battleNatrueTipsText = document.createElement("span");
				battleNatrueTipsText.classList.add("battleNatrueTipsText");
				battleNatrueTipsText.innerHTML = text;
				battleNatrueTipsContain.appendChild(battleNatrueTipsText);
			}
			var list = [
				[
					`${RougeLikeSJZX.storage.pointChange[SammisSave.difficulty]
					}%`,
					"pointEffective",
					null,
					null,
				],
				[
					`+${RougeLikeSJZX.storage.enemyEnhance[
					SammisSave.difficulty
					]
					}`,
					"enemyBuff",
					null,
					null,
				],
				[null, "boundary", true, "battleNatrueBoundary"],
				[
					`${RougeLikeSJZX.storage.prayerEnhance[
					SammisSave.difficulty
					]
					}%`,
					"prayer",
					null,
					null,
				],
				[
					`${RougeLikeSJZX.storage.gainBuff[SammisSave.difficulty]}`,
					"gainBuff",
					null,
					null,
				],
			];
			for (var i of list) {
				addTips(i[0], i[1], i[2], i[3]);
			}
			// 右侧信息设置
			// 难度描述
			var additional = [
				[
					"挑战自然",
					"麦哲伦将与我们同行<br>干员体力上限增加,获得的坍缩范式大大降低",
				],
				[1, "一段文本"],
				[2, "一段文本"],
				[3, "一段文本"],
				[4, "一段文本"],
				[5, "一段文本"],
				[6, "一段文本"],
				[7, "一段文本"],
				[8, "一段文本"],
				[9, "一段文本"],
				[10, "一段文本"],
				[11, "招募干员时所消耗的希望+1"],
				[12, "所有敌方跳过判定阶段"],
				[13, "所有敌方获得技能【英姿】(标)<br>所有敌方跳过弃牌阶段"],
				[14, "所有敌方获得技能【铁骑】(标)"],
				[15, "所有己方受到的伤害+1"],
			];
			// 修改additional
			for (var i = 0; i < additional.length; i++) {
				if (SammisSave.maxpass >= i) {
					additional[i][2] = true;
				} else additional[i][2] = false;
			}
			// 添加信息
			var setAdditional = function (number, str, unlocked) {
				var SamllBoxSJZX = document.createElement("div");
				SamllBoxSJZX.classList.add(
					"battleNatueContainRightSamllBoxSJZX"
				);
				SamllBoxSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/battleNature/bg1.png)`;
				SamllBoxSJZX.addEventListener("mouseenter", function () {
					if (unlocked == true)
						SamllBoxSJZX.classList.add("highlighted_green");
					else SamllBoxSJZX.classList.add("highlighted_red");
				});
				SamllBoxSJZX.addEventListener("mouseleave", function () {
					SamllBoxSJZX.classList.remove("highlighted_green");
					SamllBoxSJZX.classList.remove("highlighted_red");
				});
				battleNatueContainRightSJZX.appendChild(SamllBoxSJZX);
				var SamllBoxTextSJZX = document.createElement("span");
				SamllBoxTextSJZX.classList.add("battleNatueBoxText");
				SamllBoxTextSJZX.innerHTML = number;
				SamllBoxSJZX.appendChild(SamllBoxTextSJZX);
				var boundarySJZX = document.createElement("div");
				boundarySJZX.classList.add("battleNatrueBoxBoundarySJZX");
				boundarySJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/battleNature/boundary2.png)`;
				SamllBoxSJZX.appendChild(boundarySJZX);
				var boundary2SJZX = document.createElement("div");
				boundary2SJZX.classList.add("battleNatrueBoxBoundarySJZX");
				boundary2SJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/battleNature/boundary2.png)`;
				boundary2SJZX.style.float = "right";
				boundary2SJZX.style.marginTop = "0px";
				boundary2SJZX.style.height = "100%";
				SamllBoxSJZX.appendChild(boundary2SJZX);
				var battleNatueBox2SJZX = document.createElement("div");
				battleNatueBox2SJZX.classList.add("battleNatueBox2SJZX");
				SamllBoxSJZX.appendChild(battleNatueBox2SJZX);
				var battleNatueAdditionSJZX = document.createElement("div");
				battleNatueAdditionSJZX.classList.add(
					"battleNatueAdditionSJZX"
				);
				battleNatueAdditionSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/battleNature/additional.png)`;
				battleNatueBox2SJZX.appendChild(battleNatueAdditionSJZX);
				var battleNatueBox2Text = document.createElement("span");
				battleNatueBox2Text.classList.add("battleNatueBox2Text");
				battleNatueBox2Text.innerHTML = str;
				battleNatueBox2SJZX.appendChild(battleNatueBox2Text);
				if (unlocked == true) {
					var SamllBoxChooseTextSJZX = document.createElement("span");
					SamllBoxChooseTextSJZX.classList.add("battleNatueBoxText");
					SamllBoxChooseTextSJZX.innerHTML = "√ 可选择";
					SamllBoxChooseTextSJZX.style.float = "right";
					SamllBoxChooseTextSJZX.style.width = "20%";
					SamllBoxChooseTextSJZX.style.color = "green";
					SamllBoxSJZX.addEventListener("click", () => {
						SammisSave.difficulty =
							typeof number === "number" ? number : 0;
						game.saveConfig("SaamisSave", SammisSave);
						var current = _status.saamisSJZX.current.closeDom;
						game.closeCurrentDomSamiss(
							current,
							game.SaamissUpdateAtleftButton
						);
					});
					SamllBoxSJZX.appendChild(SamllBoxChooseTextSJZX);
				} else {
					var SamllBoxChooseTextSJZX = document.createElement("span");
					SamllBoxChooseTextSJZX.classList.add("battleNatueBoxText");
					SamllBoxChooseTextSJZX.innerHTML = "✖ 未解锁";
					SamllBoxChooseTextSJZX.style.float = "right";
					SamllBoxChooseTextSJZX.style.width = "20%";
					SamllBoxChooseTextSJZX.style.color = "red";
					SamllBoxSJZX.appendChild(SamllBoxChooseTextSJZX);
				}
			};
			for (var i = 0; i < additional.length; i++) {
				setAdditional(
					additional[i][0],
					additional[i][1],
					additional[i][2]
				);
			}
		},
		CannotSammisConfig() {
			// 获取数据
			if (!lib.config.SaamisSave) {
				console.warn("存档数据不存在!");
			}
			var SaamisSave = lib.config.SaamisSave;
			// 界面设置
			// 容器
			var battleNatrueContainSJZX = document.createElement("div");
			battleNatrueContainSJZX.classList.add("battleNatrueContainSJZX");
			var battleNatueContainLeftSJZX = document.createElement("div");
			battleNatueContainLeftSJZX.classList.add(
				"battleNatueContainLeftSJZX"
			);
			battleNatrueContainSJZX.appendChild(battleNatueContainLeftSJZX);
			var battleNatueContainRightSJZX = document.createElement("div");
			battleNatueContainRightSJZX.classList.add(
				"battleNatueContainRightSJZX"
			);
			battleNatueContainRightSJZX.style.display = "flex";
			battleNatueContainRightSJZX.style.flexWrap = "wrap";
			battleNatrueContainSJZX.appendChild(battleNatueContainRightSJZX);
			document.body.appendChild(battleNatrueContainSJZX);
			// 更新退出按钮设置
			game.setCloseDomSamiss(
				"battleNatrueContainSJZX",
				game.SaamissUpdateAtleftButton
			);
			// 设置左边容器信息
			var cannotImageSJZX = document.createElement("div");
			cannotImageSJZX.classList.add("cannotImageSJZX");
			cannotImageSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/cannot/cannot.png)`;
			// 坎诺特对话框
			// 文本
			var cannotSay =
				RougeLikeSJZX.cannotSay.investment.default.randomGet();
			var cannotDialog = game.createDialogBoxSaamis(
				"古怪商人 坎诺特",
				cannotSay,
				"50% 20%"
			);
			cannotDialog.style.marginTop = "80%";
			cannotDialog.style.marginLeft = "20%";
			cannotImageSJZX.appendChild(cannotDialog);
			battleNatueContainLeftSJZX.appendChild(cannotImageSJZX);
			// 设置右边容器信息
			// 设置大标题
			var cannotIntro = document.createElement("div");
			cannotIntro.classList.add("cannotIntro");
			var title = document.createElement("div");
			title.classList.add("title");
			var logo = document.createElement("div");
			logo.classList.add("logo");
			title.appendChild(logo);
			var text = document.createElement("span");
			text.classList.add("text");
			text.innerHTML = `前瞻性投资`;
			title.appendChild(text);
			cannotIntro.appendChild(title);
			var intro = document.createElement("div");
			intro.classList.add("introBox");
			var text = document.createElement("span");
			text.classList.add("text");
			text.innerHTML =
				"投资系统会概率性的在商店出现,其余额会在每一次探索中继承.养成良好的投资习惯,解锁投资奖励,为后续的探索积攒优势.投资奖赏的解锁状态会在探索后更新.";
			intro.appendChild(text);
			cannotIntro.appendChild(intro);
			battleNatueContainRightSJZX.appendChild(cannotIntro);
			// 投资显示
			var cannotMoney = document.createElement("div");
			cannotMoney.classList.add("cannotMoney");
			var image = document.createElement("div");
			image.classList.add("image");
			cannotMoney.appendChild(image);
			var textBox = document.createElement("div");
			textBox.classList.add("textBox");
			var createDivTemp = (str, value) => {
				var Box = document.createElement("div");
				Box.classList.add("Box");
				var title = document.createElement("span");
				title.classList.add("title");
				title.innerHTML = str;
				Box.appendChild(title);
				var text = document.createElement("span");
				text.classList.add("text");
				text.innerHTML = value;
				Box.appendChild(text);
				return Box;
			};
			var addList = [
				["历史最高", SaamisSave.cannot.max],
				["当前余额", SaamisSave.cannot.point],
			];
			for (var i of addList) {
				var box = createDivTemp(i[0], i[1]);
				textBox.appendChild(box);
			}
			cannotMoney.appendChild(textBox);
			battleNatueContainRightSJZX.appendChild(cannotMoney);
			// 设置进度条
			var cannotPhase = document.createElement("div");
			cannotPhase.classList.add("cannotPhase");
			battleNatueContainRightSJZX.appendChild(cannotPhase);
			// 进度条文本
			var cannotPhaseText = document.createElement("div");
			cannotPhaseText.classList.add("cannotPhaseText");
			var numberList = ["025", "100", "200", "325", "500"];
			for (var i = 0; i < numberList.length; i++) {
				var text = document.createElement("span");
				text.classList.add("text");
				text.id = "phaseNumber" + i;
				text.innerHTML = numberList[i];
				if (SaamisSave.cannot.max < Number(numberList[i])) {
					text.classList.add("unlocked");
				}
				cannotPhaseText.appendChild(text);
			}
			cannotPhase.appendChild(cannotPhaseText);
			var cannotPhaseImage = document.createElement("div");
			cannotPhaseImage.classList.add("cannotPhaseImage");
			// 循环添加组合图形
			for (var i = 0; i < 4; i++) {
				var diamond = document.createElement("div");
				diamond.classList.add("diamond");
				diamond.id = "diamond" + i;
				var line = document.createElement("div");
				line.classList.add("line");
				line.id = "line" + i;
				cannotPhaseImage.appendChild(diamond);
				cannotPhaseImage.appendChild(line);
				if (i == 3) {
					var diamond = document.createElement("div");
					diamond.classList.add("diamond");
					diamond.id = "diamond4";
					cannotPhaseImage.appendChild(diamond);
				}
			}
			cannotPhase.appendChild(cannotPhaseImage);
			for (var i = numberList.length; i >= 0; i--) {
				if (SaamisSave.cannot.max < Number(numberList[i])) {
					var diamond = document.getElementById("diamond" + i),
						line = document.getElementById("line" + (i - 1));
					diamond.classList.add("unlocked");
					if (i > 0) line.classList.add("unlocked");
				}
			}
			// 设置进度文本之间的距离
			var line0 = document.getElementById("line0"),
				rect = line0.getBoundingClientRect(),
				distance = rect.height;
			var diamond0 = document.getElementById("diamond0"),
				rect2 = diamond0.getBoundingClientRect(),
				distance2 = rect2.height;
			for (var i = 0; i < 5; i++) {
				var target = document.getElementById("phaseNumber" + i);
				if (i == 0) {
					target.style.marginTop = Math.abs(distance2 / 4) + "px";
					continue;
				}
				target.style.marginTop = Math.abs(distance) + "px";
			}
			// 奖励展示
			var cannotGainBuff = document.createElement("div");
			cannotGainBuff.classList.add("cannotGainBuff");
			var showList = [
				["<前瞻性投资系统>开放<余额提取>功能"],
				[
					"坎诺特向你展示了货柜？",
					["Tips", "我们似乎可以<说服>坎诺特让它赠予我们商品？"],
				],
				["诡异行商中会额外出售一个商品"],
				["解锁收藏品【坎诺特的印记】"],
				["诡异行商中会额外出售一个商品"],
			];
			for (var i = 0; i < showList.length; i++) {
				var max = SaamisSave.cannot.max,
					need = Number(numberList[i]);
				var showBox = document.createElement("div");
				showBox.classList.add("showBox", "leftSJZX");
				showBox.style.paddingLeft = "1%";
				if (max >= need) {
					showBox.innerHTML = "◇" + showList[i][0];
					if (showList[i][1]) {
						showBox.innerHTML =
							'◇<span style="text-decoration:underline">' +
							showList[i][0] +
							"</span>";
						_status.saamissTmp1 = showList[i][1];
						showBox.addEventListener("click", (event) => {
							var rect = cannotGainBuff.getBoundingClientRect();
							var x = rect.left;
							var y = rect.top;
							var dialogElement = game.createDialogBoxSaamis(
								_status.saamissTmp1[0],
								_status.saamissTmp1[1],
								"20% auto"
							);
							dialogElement.style.left = x + "px";
							dialogElement.style.top = y + "px";
							var none = document.createElement("div");
							none.classList.add("noneSJZX");
							none.addEventListener("click", () => {
								document.body.removeChild(none);
							});
							none.appendChild(dialogElement);
							document.body.appendChild(none);
						});
					}
				} else {
					showBox.innerHTML = "◇" + showList[i][0];
					showBox.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/cannot/cannotShowPhase2.png)`;
				}
				if (i != 0) showBox.style.marginTop = "1%";
				cannotGainBuff.appendChild(showBox);
			}
			battleNatueContainRightSJZX.appendChild(cannotGainBuff);
		},
		CultureSaamisConfig() {
			// 获取数据
			if (!lib.config.SaamisSave) {
				console.warn("存档数据不存在!");
			}
			var SaamisSave = lib.config.SaamisSave;
			// 界面设置
			// 容器
			var cultureContainSJZX = document.createElement("div");
			cultureContainSJZX.classList.add("cultureContainSJZX");
			var cultureLeftSJZX = document.createElement("div");
			cultureLeftSJZX.classList.add("cultureLeftSJZX");
			cultureContainSJZX.appendChild(cultureLeftSJZX);
			var cultureRightSJZX = document.createElement("div");
			cultureRightSJZX.classList.add("cultureRightSJZX");
			cultureContainSJZX.appendChild(cultureRightSJZX);
			document.body.appendChild(cultureContainSJZX);
			// 更新退出按钮设置
			game.setCloseDomSamiss(
				"cultureContainSJZX",
				game.SaamissUpdateAtleftButton
			);
			// 左边界面设置
			var titleBox = document.createElement("div");
			titleBox.classList.add("titleBox");
			cultureLeftSJZX.appendChild(titleBox);
			var image = document.createElement("div");
			image.classList.add("image");
			titleBox.appendChild(image);
			var text = document.createElement("span");
			text.classList.add("text", "centerSJZX");
			text.innerHTML = "生效效果";
			titleBox.appendChild(text);
			var BuffListBox = game.createCultureGetBuffListBox();
			cultureLeftSJZX.appendChild(BuffListBox);
			// 设置右边界面
			var Container = document.createElement("div");
			Container.classList.add("Container");
			cultureRightSJZX.appendChild(Container);
			//	生成分界线的函数
			var createPhaseBox = function (str, cost) {
				var PhaseBox = document.createElement("div");
				PhaseBox.classList.add("PhaseBox");
				var text = document.createElement("span");
				text.classList.add("text", "leftSJZX");
				text.innerHTML = str;
				PhaseBox.appendChild(text);
				var costBox = document.createElement("div");
				costBox.classList.add("costBox");
				var text2 = document.createElement("span");
				text2.classList.add("text", "leftSJZX");
				text2.innerHTML = cost;
				costBox.appendChild(text2);
				var image = document.createElement("div");
				image.classList.add("image");
				costBox.appendChild(image);
				PhaseBox.appendChild(costBox);
				return PhaseBox;
			};
			// 生成buff选择的函数
			var createbuffBox = function (buff, special) {
				var buffBox = document.createElement("div");
				if (special === true) buffBox.classList.add("buffBoxSpecial");
				else buffBox.classList.add("buffBox");
				var image = document.createElement("div");
				image.classList.add("image");
				image.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/culture/pic/${buff[0]}.png)`;
				buffBox.appendChild(image);
				var title = document.createElement("div");
				title.classList.add("title", "centerSJZX");
				title.innerHTML = buff[3][0];
				buffBox.appendChild(title);
				if (special === true) {
					var free = document.createElement("div");
					free.classList.add("free");
					buffBox.appendChild(free);
				}
				var intro = document.createElement("div");
				intro.classList.add("text", "leftSJZX");
				intro.innerHTML = buff[3][1];
				buffBox.appendChild(intro);
				if (buff[2] == false)
					buffBox.classList.add("highlighted_black");
				else title.classList.add("unlocked");
				return buffBox;
			};
			var info = game.getCultureInfo("all").nameList,
				keyword = ["phase1", "phase2", "phase3"];
			let cost = 0;
			for (let i = 0; i < info.length; i++) {
				if (i == 0 || keyword.includes(info[i][0])) {
					cost++;
					var phase = createPhaseBox(
						`第${get.cnNumber(cost, true)}阶段`,
						`各节点消耗${cost}`
					);
					Container.appendChild(phase);
				}
				let dialog = createbuffBox(
					info[i],
					keyword.includes(info[i][0]) == true ? true : false
				);
				if (info[i][2] === false) {
					let lockedBoxSJZX = game.createLockSaamis(i),
						unlocked = info[i][2];
					(function (cost) {
						let lockedFun = function () {
							var saveCost = SaamisSave.buff.point,
								usedPoint = SaamisSave.buff.usedPoint;
							if (dialog.className.includes("buffBoxSpecial")) {
								if (unlocked === false)
									alert(
										`解锁上一阶段所有节点自动解锁此节点!`
									);
								return;
							}
							if (saveCost >= cost) {
								switch (cost) {
									case 1:
										// 第一阶段 没有解锁条件
										dialog.removeChild(lockedBoxSJZX);
										lockedBoxSJZX.removeEventListener(
											"click",
											lockedFun
										);
										dialog
											.querySelector(".title")
											.classList.add("unlocked");
										lib.config.SaamisSave.buff.point -= 1;
										lib.config.SaamisSave.buff.usedPoint += 1;
										game.SaamissUpadteCulture(i);
										break;
									case 2:
										// 第二阶段 累计消耗7
										if (cost == 2 && usedPoint > 6) {
											dialog.removeChild(lockedBoxSJZX);
											lockedBoxSJZX.removeEventListener(
												"click",
												lockedFun
											);
											dialog
												.querySelector(".title")
												.classList.add("unlocked");
											lib.config.SaamisSave.buff.point -= 2;
											lib.config.SaamisSave.buff.usedPoint += 2;
											game.SaamissUpadteCulture(i);
										} else alert(`请先解锁第一阶段!`);
										break;
									case 3:
										// 第三阶段 累计消耗33
										if (usedPoint > 32) {
											dialog.removeChild(lockedBoxSJZX);
											lockedBoxSJZX.removeEventListener(
												"click",
												lockedFun
											);
											dialog
												.querySelector(".title")
												.classList.add("unlocked");
											lib.config.SaamisSave.buff.point -= 3;
											lib.config.SaamisSave.buff.usedPoint += 3;
											game.SaamissUpadteCulture(i);
										} else alert(`请先解锁第二阶段!`);
										break;
									case 4:
										// 第四阶段 累计消耗72
										if (usedPoint > 71) {
											dialog.removeChild(lockedBoxSJZX);
											lockedBoxSJZX.removeEventListener(
												"click",
												lockedFun
											);
											dialog
												.querySelector(".title")
												.classList.add("unlocked");
											lib.config.SaamisSave.buff.point -= 4;
											lib.config.SaamisSave.buff.usedPoint += 4;
											game.SaamissUpadteCulture(i);
										} else alert(`请先解锁第三阶段!`);
										break;
									default:
										// 默认
										dialog.removeChild(lockedBoxSJZX);
										lockedBoxSJZX.removeEventListener(
											"click",
											lockedFun
										);
										dialog
											.querySelector(".title")
											.classList.add("unlocked");
										lib.config.SaamisSave.buff.point -=
											cost;
										lib.config.SaamisSave.buff.usedPoint +=
											cost;
										game.SaamissUpadteCulture(i);
								}
							} else alert(`需要${cost}个理性视域才可解锁!`);
						};
						lockedBoxSJZX.addEventListener("click", lockedFun);
					})(cost);
					dialog.appendChild(lockedBoxSJZX);
				}
				Container.appendChild(dialog);
			}
			var pointShow = document.createElement("div");
			pointShow.classList.add("pointShow");
			var showBox = document.createElement("div");
			showBox.classList.add("showBox");
			var image = document.createElement("div");
			image.classList.add("image");
			showBox.appendChild(image);
			var text = document.createElement("span");
			text.classList.add("text", "centerSJZX");
			text.innerHTML = SaamisSave.buff.point;
			showBox.appendChild(text);
			pointShow.appendChild(showBox);
			cultureRightSJZX.appendChild(pointShow);
			// game.SaamissUpadteCulture();
		},
		createCultureGetBuffListBox() {
			var BuffListBox = document.createElement("div");
			BuffListBox.classList.add("BuffListBox");
			var textBox = document.createElement("div");
			textBox.classList.add("textBox");
			var info = game.getCultureInfo(false).totalInfo;
			for (var key in info) {
				var text = document.createElement("span");
				text.classList.add("text", "leftSJZX");
				text.id = key;
				text.innerHTML = info[key];
				textBox.appendChild(text);
			}
			BuffListBox.appendChild(textBox);
			return BuffListBox;
		},
		SaamissUpadteCulture(index) {
			if (!lib.config.SaamisSave) {
				throw new error("存档数据不存在!");
			}
			let SammisSave = lib.config.SaamisSave;
			// 更新理性视域数
			var text = Array.from(
				document.getElementsByClassName("text centerSJZX")
			).filter((dom) => dom.parentNode.className == "showBox")[0];
			if (text) text.innerHTML = SammisSave.buff.point;
			// 更新免费解锁的节点
			var unlockedBoundary = [6, 32, 71],
				buffBoxSpecial = Array.from(
					document.getElementsByClassName("buffBoxSpecial")
				);
			for (var i = 0; i < buffBoxSpecial.length; i++) {
				if (SammisSave.buff.usedPoint > unlockedBoundary[i]) {
					var lockedBoxSJZX =
						buffBoxSpecial[i].querySelector(".lockedBoxSJZX");
					if (!lockedBoxSJZX) continue;
					game.modifySaamissDataCulture("phase" + (i + 1), 2, true);
					buffBoxSpecial[i]
						.querySelector(".title")
						.classList.add("unlocked");
					buffBoxSpecial[i].removeChild(lockedBoxSJZX);
				}
			}
			// 更新生效效果
			if (typeof index === "number") {
				game.modifySaamissDataCulture(index, 2, true);
				var BuffListBox = game.createCultureGetBuffListBox(),
					old = document.getElementsByClassName("BuffListBox")[0],
					parent = old.parentNode;
				parent.replaceChild(BuffListBox, old);
			}
		},
		modifySaamissDataCulture(
			buff,
			changeIndex,
			changeTo,
			data = lib.config.SaamisSave.buff.enable
		) {
			let dataGroups = [];
			// 收集所有数据组
			for (const phaseKey in data) {
				const content = data[phaseKey].content;
				for (const contentKey in content) {
					for (const groupKey in content[contentKey]) {
						const group = content[contentKey][groupKey];
						if (!Array.isArray(group)) continue;
						dataGroups.push(group);
					}
				}
			}
			if (typeof buff === "number") {
				// 如果 buff 是数字,直接获取对应的数据组
				if (buff >= 0 && buff < dataGroups.length) {
					dataGroups[buff][changeIndex] = changeTo;
				}
			} else if (typeof buff === "string") {
				// 如果 buff 是字符串,获取所有键名与字符串一致的数据组
				for (const phaseKey in data) {
					const content = data[phaseKey].content;
					for (const contentKey in content) {
						if (content[contentKey][buff]) {
							const group = content[contentKey][buff];
							if (
								changeIndex >= 0 &&
								changeIndex < group.length
							) {
								group[changeIndex] = changeTo;
							}
						}
					}
				}
			} else {
			}
			lib.config.SaamisSave.buff.enable = data;
			game.SaamisSave(lib.config.SaamisSave);
		},
		SaamisSave(NewSaamisSave) {
			game.saveConfig("SaamisSave", NewSaamisSave);
		},
		SaamissUpdateAtleftButton() {
			// 获取数据
			if (!lib.config.SaamisSave) {
				throw new error("存档数据不存在!");
			}
			var SammisSave = lib.config.SaamisSave;
			var battleNature = document.getElementById("battleNaturelevelText");
			battleNature.innerHTML = `${SammisSave.difficulty}`;
			var cannotSammis = document.getElementById("cannotSammislevelText");
			cannotSammis.innerHTML = `${SammisSave.cannot.point}`;
			var buffSammiscompelet = document.getElementsByClassName(
				"buffSammis-compelet"
			)[0],
				buffSammislevelText = document.getElementById(
					"buffSammislevelText"
				);
			if (SammisSave.buff.usedPoint >= 100) {
				buffSammislevelText.classList.add("display-none");
				buffSammiscompelet.classList.remove("display-none");
			} else {
				buffSammislevelText.innerHTML = `${SammisSave.buff.point}`;
				buffSammislevelText.classList.remove("display-none");
				buffSammiscompelet.classList.add("display-none");
			}
		},
		createLockSaamis(id) {
			var lockedBoxSJZX = document.createElement("div");
			lockedBoxSJZX.classList.add("lockedBoxSJZX");
			lockedBoxSJZX.id = id;
			var image = document.createElement("div");
			image.classList.add("lockedBoxImage");
			lockedBoxSJZX.appendChild(image);
			return lockedBoxSJZX;
		},
		createDialogBoxSaamis(name, text, size, fontsize) {
			var dialogBox = document.createElement("div");
			dialogBox.classList.add("dialogBox");
			if (typeof size === "string") {
				var width = size.split(" ")[0],
					height = size.split(" ")[1];
				dialogBox.style.width = width;
				dialogBox.style.height = height;
			}
			var dialogBoxName = document.createElement("div");
			dialogBoxName.classList.add("dialogBox-name");
			dialogBoxName.innerHTML = name;
			if (Array.isArray(fontsize) && typeof fontsize[0] === "number")
				dialogBoxName.style.fontSize = fontsize[0] + "px";
			dialogBox.appendChild(dialogBoxName);
			var dialogBoxText = document.createElement("div");
			dialogBoxText.classList.add("dialogBox-text");
			dialogBoxText.innerHTML = text;
			if (Array.isArray(fontsize) && typeof fontsize[1] === "number")
				dialogBoxName.style.fontSize = fontsize[1] + "px";
			dialogBox.appendChild(dialogBoxText);
			return dialogBox;
		},
		getCultureInfo(locked) {
			if (!lib.config.SaamisSave) {
				alert("存档损坏!");
				return;
			}
			if (typeof locked !== "boolean" && locked !== "all") {
				console.warn(
					`locked 应该是 boolean 或 'all' 而不是${typeof locked}`
				);
				return;
			}
			let NameList = [],
				TotalList = {};
			// 获取名字
			var cultureBuff = lib.config.SaamisSave.buff.enable;
			for (var phase in cultureBuff) {
				if (cultureBuff.hasOwn(phase)) {
					var content = cultureBuff[phase].content;
					var cost = cultureBuff[phase].cost;
					for (var key in content) {
						if (content.hasOwn(key)) {
							var obj = content[key];
							Object.values(obj).forEach((item) => {
								if (Array.isArray(item)) {
									if (locked == true && item[2] == false) {
										NameList.push([
											item[0],
											item[1],
											item[2],
											null,
											cost,
										]);
									}
									if (locked == false && item[2] == true) {
										NameList.push([
											item[0],
											item[1],
											item[2],
											null,
											cost,
										]);
									}
									if (locked == "all")
										NameList.push([
											item[0],
											item[1],
											item[2],
											null,
											cost,
										]);
								}
							});
						}
					}
				}
			}
			// 获取介绍
			var info = SaamisSJZX_cultureBuff.buff;
			for (var i = 0; i < NameList.length; i++) {
				var list = NameList[i];
				var name = info[list[0]].name,
					base = info[list[0]].base || 1,
					intro = info[list[0]].intro,
					level = list[1] || 1;
				name = name.replace(/#/g, get.toRoman(level));
				intro = intro.replace(/#/g, level * base);
				NameList[i][3] = [name, intro];
			}
			// 统计
			for (var i of NameList) {
				var key = i[0],
					num = i[1];
				TotalList[key] =
					(typeof TotalList[key] === "number" ? TotalList[key] : 0) +
					num;
			}
			var cultureBuffInfo = SaamisSJZX_cultureBuff.buff;
			for (var key in TotalList) {
				if (cultureBuffInfo.hasOwn(key)) {
					TotalList[key] = cultureBuffInfo[key].intro.replace(
						/#/g,
						cultureBuffInfo[key].base * TotalList[key]
					);
				}
			}
			// 重新排序
			let buffOrder = [
				"yuhan",
				"zhudong",
				"wuzi",
				"wenhua",
				"qihou",
				"tongxun",
				"biandui",
				"yingji",
				"kancha",
				"yanjiu",
				"pinghe",
				"lingxing",
				"zhengxiang",
				"biaoda",
				"ganxing",
				"shiying",
				"jiaowang",
				"yuxian",
				"gongju",
				"phase1",
				"phase2",
				"phase3",
			];
			let sortedBuff = {};
			buffOrder.forEach((key) => {
				if (TotalList.hasOwn(key)) {
					sortedBuff[key] = "◇" + TotalList[key];
				}
			});
			return {
				nameList: NameList,
				totalInfo: sortedBuff,
			};
		},
		async samissStart() {
			if (!lib.config.SaamisSave) {
				alert("存档损坏!");
				return;
			}
			let SaamisSave = lib.config.SaamisSave;
			// 更新退出按钮
			game.setCloseDomSamiss(
				["FatherBottomBox", "chooseTeamBoxSJZX"],
				() => {
					game.SaamisResource(true);
					game.SamissHomePage(false);
					game.setbackgroundSJZXSamiss("sasmisBackgroud0");
				}
			);
			// 隐藏初始页
			game.SamissHomePage();
			// 切换背景
			game.setbackgroundSJZXSamiss("startBGI");
			// 添加希望 源石锭 等级 目标生命显示
			game.SaamisResource();
			// 设置初始希望、源石锭、等级、目标生命
			let match = SaamisSave.MatchSave,
				getBuff = game.getCultureInfo(false).totalInfo;
			wishSJZX.num = 6;
			wishSJZX.maxNum = 6;
			monenySJZX.num = 8 + get.numberInString(getBuff["yanjiu"], true);
			targetLife.hp = 4 + get.numberInString(getBuff["qihou"], true);
			targetLife.maxhp = targetLife.hp;
			SaamisSave.MatchSave = match;
			await game.SaamisSave(SaamisSave);
			await game.SaamisResourceUpdate();
			// 选择分队
			var FatherchooseBox = document.createElement("div");
			FatherchooseBox.classList.add("chooseTeamBoxSJZX");
			FatherchooseBox.addEventListener("wheel", function (event) {
				if (event.deltaY !== 0) {
					event.preventDefault();
					FatherchooseBox.scrollLeft += event.deltaY;
				}
			});
			document.body.appendChild(FatherchooseBox);
			// 创建分队列表
			await game.SaamissTeamUpdate();
			let TeamList = lib.config.SaamisTeamSaves;
			var createTeamBox = function (
				image,
				name,
				intro,
				canUse,
				unlockIntro
			) {
				const teamBox = mrfzfuc.createDomSJZX("teamBox", false, "div");
				teamBox.id = key;
				var icon = mrfzfuc.createDomSJZX("icon", false, "div");
				var iconImage = mrfzfuc.createDomSJZX("image", false, "div");
				icon.appendChild(iconImage);
				iconImage.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/teamIMG/icon/${image}.png)`;
				teamBox.appendChild(icon);
				var teamName = mrfzfuc.createDomSJZX("teamName", false, "span");
				teamName.innerHTML = name;
				teamBox.appendChild(teamName);
				var teamIntro = mrfzfuc.createDomSJZX(
					"teamIntro",
					false,
					"span"
				);
				teamIntro.innerHTML = intro;
				teamBox.appendChild(teamIntro);
				var confirmSJZX = mrfzfuc.createDomSJZX(
					"confirmSJZX",
					false,
					"div"
				);
				confirmSJZX.classList.add("display-none");
				confirmSJZX.style.width = "100%";
				confirmSJZX.style.height = "20%";
				teamBox.appendChild(confirmSJZX);
				if (canUse !== true) {
					var locked = mrfzfuc.createDomSJZX(
						"lockedBoxSJZX",
						false,
						"div"
					);
					var lockedImage = mrfzfuc.createDomSJZX(
						"lockedBoxImage",
						false,
						"div"
					);
					var lockedIntroBox = mrfzfuc.createDomSJZX(
						"introBox",
						false,
						"div"
					);
					lockedIntroBox.innerHTML = unlockIntro;
					locked.appendChild(lockedIntroBox);
					locked.appendChild(lockedImage);
					teamBox.appendChild(locked);
				}
				return teamBox;
			};
			for (var key in TeamList) {
				var teamInformation = TeamList[key].content;
				FatherchooseBox.appendChild(
					createTeamBox(
						key,
						teamInformation[0],
						teamInformation[1],
						TeamList[key].canUse,
						teamInformation[2]
					)
				);
			}
			// 添加事件监听器
			document.body.addEventListener("click", (event) => {
				const teamBox = event.target.closest(".teamBox");
				const selectedBox = document.querySelector(".selectedSJZX");
				if (!teamBox) {
					if (selectedBox) {
						selectedBox.classList.remove("selectedSJZX");
						const confirmSJZX =
							selectedBox.querySelector(".confirmSJZX");
						if (confirmSJZX) {
							confirmSJZX.classList.add("display-none");
						}
					}
					return;
				}
				if (teamBox.classList.contains("selectedSJZX")) {
					let idElement = event.target.closestWithId("teamBox");
					return;
				}
				const lockedBoxSJZX = teamBox.querySelector(".lockedBoxSJZX");
				if (!selectedBox || !teamBox.includes(selectedBox)) {
					const previouslySelected =
						document.querySelector(".selectedSJZX");
					if (previouslySelected) {
						previouslySelected.classList.remove("selectedSJZX");
						const confirmSJZX =
							previouslySelected.querySelector(".confirmSJZX");
						if (confirmSJZX) {
							confirmSJZX.classList.add("display-none");
						}
					}
					if (!lockedBoxSJZX) {
						teamBox.classList.add("selectedSJZX");
						const confirmSJZX =
							teamBox.querySelector(".confirmSJZX");
						if (confirmSJZX) {
							confirmSJZX.classList.remove("display-none");
						}
					} else if (selectedBox) {
						selectedBox.classList.remove("selectedSJZX");
						const confirmSJZX =
							selectedBox.querySelector(".confirmSJZX");
						if (confirmSJZX) {
							confirmSJZX.classList.add("display-none");
						}
					}
				}
			});
			var FatherBottomBox = document.createElement("div");
			FatherBottomBox.classList.add("FatherBottomBox");
			document.body.appendChild(FatherBottomBox);
		},
		SamissHomePage(hidden = true) {
			let domList = [
				"fatherSJZX",
				"level-ScientificSJZX",
				"snow-container",
				"main-menuSJZX",
				"sound-buttonSJZX",
			];
			for (var dom of domList) {
				if (hidden === true)
					document
						.getElementsByClassName(dom)[0]
						.classList.add("display-none");
				else
					document
						.getElementsByClassName(dom)[0]
						.classList.remove("display-none");
			}
		},
		setbackgroundSJZXSamiss(image, url) {
			image = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/${image}.png)`;
			let bg = document.getElementsByClassName("backgroundSJZX")[0];
			bg.style.backgroundImage = typeof url === "string" ? url : image;
		},
		SaamissGainTeamBuff(teamId) {
			if (!lib.config.SaamisSave || !lib.config.SaamisTeamSaves) {
				alert("存档损坏!");
				return;
			}
			let SaamissSave = lib.config.SaamisSave,
				TeamSave = lib.config.SaamisTeamSaves;
			for (var name in TeamSave) {
				if (name !== teamId) continue;
				SaamissSave.MatchSave.team.chooseTeam = name;
				switch (name) {
					case "zhihui":
						targetLifes.change(2, "maxhp");
						if (!SaamissSave.MatchSave.endBattle["recoverTL"])
							SaamissSave.MatchSave.endBattle["recoverTL"] = 0;
						SaamissSave.MatchSave.endBattle["recoverTL"] += 1;
						break;
					case "jiqun":
						SaamissSave.MatchSave.team.Carryable += 2;
						SaamissSave.MatchSave.team.Deployable += 2;
						break;
				}
			}
			game.SaamisSave(SaamissSave);
		},
		async SaamissTeamUpdate() {
			if (!lib.config.SaamisSave) {
				alert("存档损坏!");
				return;
			}
			let SaamisSave = lib.config.SaamisSave;
			// 判断是否有过存档,没有则新建
			if (!lib.config.SaamisTeamSaves) {
				var TeamList = SaamisSJZX_team;
				let result = {};
				for (var key in TeamList) {
					if (TeamList[key][3] == true) {
						result[key] = {
							content: TeamList[key],
							canUse: true,
						};
					} else {
						result[key] = {
							content: TeamList[key],
							canUse: false,
						};
					}
				}
				game.saveConfig("SaamisTeamSaves", result);
				lib.config.SaamisTeamSaves = result;
			}
			// 判断各个分队是否满足解锁条件
			var TeamList = lib.config.SaamisTeamSaves,
				cultureInfo = game.getCultureInfo(false).totalInfo;
			for (var key in TeamList) {
				var content = TeamList[key]["content"];
				if (TeamList[key].canUse === true) continue;
				switch (content[0]) {
					case "集群分队":
						if (SaamisSave.maxpass >= 3)
							TeamList[key].canUse = true;
						break;
					case "后勤分队":
						if (SaamisSave.unlockTeam.houqing >= 200)
							TeamList[key].canUse = true;
						break;
					case "矛头分队":
						if (SaamisSave.unlockTeam.maotou === true)
							TeamList[key].canUse = true;
						break;
					case "高规格分队":
						if (SaamisSave.unlockTeam.gaoguige === true)
							TeamList[key].canUse = true;
						break;
					case "特训分队":
						if (SaamisSave.unlockTeam.texun === true)
							TeamList[key].canUse = true;
						break;
					case "永恒狩猎分队":
						if ("yuxian" in cultureInfo)
							TeamList[key].canUse = true;
						break;
					case "生活至上分队":
						if ("jiaowang" in cultureInfo)
							TeamList[key].canUse = true;
						break;
					case "科学主义分队":
						if ("gongju" in cultureInfo)
							TeamList[key].canUse = true;
						break;
				}
			}
			game.saveConfig("SaamisTeamSaves", TeamList);
			lib.config.SaamisTeamSaves = TeamList;
			return TeamList;
		},
		SaamisResource(hidden = false) {
			if (!lib.config.SaamisSave) {
				alert("存档损坏!");
				return;
			}
			let SaamisSave = lib.config.SaamisSave;
			if (!document.getElementsByClassName("wishSJZXBox").length) {
				// 创建希望的全局实例
				window.wishSJZX = document.createElement("div", {
					is: "wish-sjzx",
				});
				document.body.appendChild(wishSJZX);
				wishSJZX.maxNum = 0;
				wishSJZX.num = 0;
				// 创建源石锭的全局实例
				window.monenySJZX = document.createElement("div", {
					is: "moneny-cannot",
				});
				document.body.appendChild(monenySJZX);
				monenySJZX.num = 0;
				// 创建目标生命的全局实例
				window.targetLife = document.createElement("div", {
					is: "target-life",
				});
				document.body.appendChild(targetLife);
				// 创建指挥等级的全局实例
				window.commandLevel = document.createElement("div", {
					is: "command-level",
				});
				document.body.appendChild(commandLevel);
				var antiInterference = mrfzfuc.createDomSJZX(
					"anti-interference",
					false
				);
				var textBox = mrfzfuc.createDomSJZX("textBox", false);
				textBox.innerHTML = `小镇炉火`;
				antiInterference.appendChild(textBox);
				document.body.appendChild(antiInterference);
			}
			if (typeof hidden !== "boolean") return;
			let list = [
				".wishSJZXBox",
				".CommandLevel",
				".monenySJZXBox",
				".targetLifes",
				".anti-interference",
			];
			for (var i of list) {
				if (hidden === true)
					document.querySelector(i).classList.add("display-none");
				else document.querySelector(i).classList.remove("display-none");
			}
		},
		SaamisResourceUpdate() {
			if (!lib.config.SaamisSave) {
				alert("存档损坏!");
				return;
			}
			let SaamisSave = lib.config.SaamisSave;
			wishSJZX.updataValue();
			commandLevel.updataValue();
			targetLife.updataValue();
			monenySJZX.updataValue();
		},
	},
	get: {
		toRoman(num) {
			if (num > 10 || typeof num !== "number") {
				throw new error("请输入10以内的整数");
			}
			const romanNumerals = {
				1: "I",
				2: "II",
				3: "III",
				4: "IV",
				5: "V",
				6: "VI",
				7: "VII",
				8: "VIII",
				9: "IX",
				10: "X",
			};
			return romanNumerals[num] || "";
		},
		numberInString(str, putZ) {
			if (typeof str !== "string") return putZ === true ? 0 : undefined;
			const regex = /\d+/g;
			let numbers = str.match(regex);
			if (!numbers) return putZ === true ? 0 : undefined;
			numbers = numbers.map(Number);
			return numbers.length == 1 ? numbers[0] : numbers;
		},
	},
};
