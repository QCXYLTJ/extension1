import { lib, game, ui, get, ai, _status } from '../../../noname.js'
import { mrfzfuc as MRFZFUC } from "./SJZXfuc.js";
export let CONTENT = function (config, pack) {
	// 加载语音提示
	if (_status.SJZXAudioloadInfo) {
		console.group('SJZXAudioLoadInfo');
		for (var key in _status.SJZXAudioloadInfo) {
			let info = _status.SJZXAudioloadInfo[key];
			console.log(`Successfully loaded ${info[0]} audios, loadTime ${info[1]} ms! ${info[2]} file is loaded correctly (${info[3]} file in total), ${info[4].length} audios are missing the corresponding file!`)
		}//QQQ
		console.groupEnd('SJZXAudioLoadInfo');
	}
	//加载css
	var fileList = ["extension", "rougelike", "saamis", "general"];
	for (var i of fileList)
		lib.init.css(`extension/驶舰之向/css`, i);
	//背景设置
	MRFZFUC.setBgI();
	//异格武将设置//
	if (config.isBanSp) {
		var repChar = {
			sikadimrfz: ["sikadimrfz", "spsikadimrfz"],
			chenmrfz: ["spzzxpmrfz", "chenmrfz"],
			amiyamrfz: ["amiyamrfz", "spamiyamrfz", "medical_amiyamrfz"],
			shuiyuemrfz: ["shuiyuemrfz", "yizumikemrfz"],
			xiaoyangmrfz: ["spxiaoyanmrfz", "xiaoyangmrfz"],
			dekesasimrfz: ["spdegoumrfz", "dekesasimrfz"],
			linguangmrfz: ["linguangmrfz", "splinguangmrfz"],
			wmrfz: ["wmrfz", "weishidaiermrfz", "talaidingzhenmrfz"],
			teleixiyamrfz: ["teleixiyamrfz", "mowangmrfz"],
		};
		for (var key in repChar) {
			if (repChar.hasOwn(key)) {
				lib.characterReplace[key] = repChar[key];
			}
		}
	}
	//红蒂禁将设置//
	if (config.isNoLimted) {
		lib.config.isNoLimted_mrfz = true;
		lib.translate["qianximrfz_ban"] = "禁止复制武将(当前无限制)";
		lib.translate["qianximrfz_ban_info"] =
			"可在设置中开启或关闭禁用武将</br>无";
	} else {
		lib.config.isNoLimted_mrfz = false;
	}
	//武将前缀设置//
	let list = [
		"缄默",
		"浊心",
		"耀骑士",
		"归溟",
		"百炼",
		"淬羽",
		"琳琅",
		"圣约",
		"假日威龙",
		"涤火",
		"纯烬",
		"历阵锐枪",
	];
	for (var i of list) {
		if (typeof i === "string") {
			lib.namePrefix.set(i, {
				color: "#00FFFF",
				nature: "woodmm",
			});
		}
	}
	let amiyaPrefix = ["近卫", "医疗"];
	for (var i of amiyaPrefix)
		lib.namePrefix.set(i, {
			color: "#191970",
			nature: "woodmm",
		});
	lib.namePrefix.set("斗士", {
		color: "#FF1111",
		nature: "woodmm",
	});
	//---成就模式---//
	//成就检测
	if (config.isAchMode && _status.connectMode == false) {
		//游戏结束成就检测
		var mrfz_over = game.over;
		game.over = function (result) {
			mrfz_over(result);
			if (lib.config.mode == "identity") {
				//---胜利成就---//
				//获得身份局一百局胜利
				if (
					mrfzfuc.GameDataTotal("win", "identity") &&
					lib.config.AchList_mrfz.win100mrfz == false
				)
					mrfzfuc.ShowGetAch("win100mrfz");
				//身份局失败120场
				if (
					mrfzfuc.GameDataTotal("lose", "identity") &&
					lib.config.AchList_mrfz.lose120mrfz == false
				)
					mrfzfuc.ShowGetAch("lose120mrfz");
				//---干员专属成就---//
				//缪尔赛思 无根之雨 内奸获胜
				if (
					game.me.name == "miumiumrfz" &&
					result == true &&
					game.me.identity == "nei" &&
					lib.config.AchList_mrfz.wugenzhiyumrfz == false
				) {
					//game.saveConfig('wugenzhiyumrfz',true);
					//lib.config.AchList_mrfz.wugenzhiyumrfz=true;
					mrfzfuc.ShowGetAch("wugenzhiyumrfz");
				}
				//涤火杰西卡 徽章:没有队友阵亡 获胜 内奸除外
				if (
					game.me.name == "spjiexikamrfz" &&
					result == true &&
					game.me.identity != "nei" &&
					lib.config.AchList_mrfz.huizhangmrfz == false
				) {
					var tmp_bool = true;
					for (var i = 0; i < game.dead.length; i++) {
						if (game.dead[i].identity == game.me.identity) {
							tmp_bool = false;
							break;
						}
					}
					if (tmp_bool) {
						//game.saveConfig('huizhangmrfz',true);
						//lib.config.AchList_mrfz.huizhangmrfz=true;
						mrfzfuc.ShowGetAch("huizhangmrfz");
					}
				}
				//号角 胜利时本阵营只有自己存活
				if (
					game.me.name == "haojiaomrfz" &&
					result == true &&
					lib.config.AchList_mrfz.duzouqumrfz == false &&
					game.me.identity != "nei"
				) {
					var tmp_bool = true;
					for (var i = 0; i < game.players.length; i++) {
						if (game.dead[i].identity == game.me.identity) {
							tmp_bool = false;
							break;
						}
					}
					if (tmp_bool) {
						mrfzfuc.ShowGetAch("duzouqumrfz");
					}
				}
				//克丽斯腾 主公开局,死亡后获胜
				if (
					game.me.name == "kelisitengmrfz" &&
					lib.config.AchList_mrfz.zongxiazhiyuanmrfz == false &&
					result == true
				) {
					var tmp_bool = false;
					for (var i = 0; i < game.dead.length; i++) {
						if (game.dead[i] == game.me) {
							tmp_bool = true;
							break;
						}
					}
					if (
						mrfzfuc.AchData_tmp["_sjzxAch_zongxiazhiyuanmrfz"] ==
						true &&
						tmp_bool == true
					)
						mrfzfuc.ShowGetAch("zongxiazhiyuanmrfz");
				}
			}
		};
		//全局技能成就检测
		let keys = Object.keys(lib.skill);
		let result = keys.filter((key) => key.endsWith("mrfz"));
		result.forEach((key) => {
			if (
				lib.skill[key].Ach_mrfz != undefined &&
				lib.skill[key].Ach_mrfz == true
			) {
				lib.skill[key].forced = true;
				lib.skill[key].charlotte = true;
				lib.skill[key].lastDo = true;
				lib.skill[key].popup = false;
			}
		});
	}
	//————本体修改————//
	/*
  对【酒】进行修改
  应用于羽毛笔
  */
	lib.skill["jiu"] = {
		trigger: {
			player: "useCard1",
		},
		filter(event, player) {
			if (player.hasSkill("tiaojiumrfz")) {
				return (
					event.card &&
					(get.type(event.card) == "trick" ||
						get.type(event.card) == "basic") &&
					event.card.name != "jiu"
				);
			}
			return event.card && event.card.name == "sha";
		},
		forced: true,
		charlotte: true,
		firstDo: true,
		content() {
			if (!player.hasSkill("tiaojiumrfz")) {
				if (!trigger.baseDamage) trigger.baseDamage = 1;
				trigger.baseDamage += player.storage.jiu;
			} else {
				trigger.effectCount += player.storage.jiu;
			}
			trigger.jiu = true;
			trigger.jiu_add = player.storage.jiu;
			game.addVideo("jiuNode", player, false);
			game.broadcastAll(function (player) {
				player.removeSkill("jiu");
			}, player);
		},
		temp: true,
		silent: true,
		popup: false,
		nopop: true,
		onremove(player) {
			if (player.node.jiu) {
				player.node.jiu.delete();
				player.node.jiu2.delete();
				delete player.node.jiu;
				delete player.node.jiu2;
			}
			delete player.storage.jiu;
		},
		ai: {
			damageBonus: true,
			skillTagFilter(player, tag, arg) {
				if (tag === "damageBonus")
					return (
						arg &&
						arg.card &&
						arg.card.name === "sha" &&
						!player.hasSkill("tiaojiumrfz")
					);
			},
		},
		group: "jiu2",
	};
	lib.skill["jiu2"].filter = function (event, player) {
		if (player.hasSkillTag("jiuSustain", null, event.name)) return false;
		if (event.name == "useCard") {
			if (player.hasSkill("tiaojiumrfz")) {
				return (
					event.card &&
					(get.type(event.card) == "trick" ||
						get.type(event.card) == "basic") &&
					event.card.name != "jiu"
				);
			}
			return event.card && event.card.name == "sha";
		}
		return true;
	};
	// 将兵临城下模式的【兵临城下】添加到lib.card中
	if (!lib.card.binglinchengxia) {
		lib.card["binglinchengxia"] = {
			fullskin: true,
			image: "ext:驶舰之向/image/card/binglinchengxia.webp",
			type: "delay",
			filterTarget(card, player, target) {
				return (
					lib.filter.judge(card, player, target) && player != target
				);
			},
			judge(card) {
				if (card.suit == "diamond") return 0;
				return -3;
			},
			effect() {
				"step 0";
				if (result.bool == false) {
					if (
						!player.countCards("e", function (card) {
							return lib.filter.cardDiscardable(
								card,
								player,
								"shuiyanqijuny"
							);
						})
					) {
						player.damage("nosource");
						event.finish();
						return;
					} else
						player.chooseControl(
							"discard_card",
							"take_damage",
							function (event, player) {
								if (
									get.damageEffect(
										player,
										event.player,
										player
									) >= 0
								) {
									return "take_damage";
								}
								if (
									player.hp >= 3 &&
									player.countCards("e") >= 2
								) {
									return "take_damage";
								}
								return "discard_card";
							}
						);
				} else event.finish();
				("step 1");
				if (result.control == "discard_card") {
					player.discard(
						player.getCards("e", function (card) {
							return lib.filter.cardDiscardable(
								card,
								player,
								"shuiyanqijuny"
							);
						})
					);
				} else player.damage("nosource");
			},
			ai: {
				order: 1,
				value: 3,
				useful: 2,
				tag: {
					damage: 1,
					loseCard: 1,
				},
				result: {
					target(player, target, card, isLink) {
						var es = target.getCards("e");
						if (!es.length) return -1.5;
						var val = 0;
						for (var i of es) val += get.value(i, target);
						return -Math.min(1.5, val / 5);
					},
				},
			},
		};
		lib.translate["binglinchengxia"] = "兵临城下";
		lib.translate["binglinchengxia_info"] =
			"出牌阶段,对一名其他角色使用.将此牌横置于目标角色的判定区内.目标角色于判定阶段进行判定,若判定结果不为♦️️,则其弃置装备区内的所有牌或受到1点伤害.";
	}
};
