import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '蒸蒸日上',
		arenaReady() {
			const guanfang = ['jiange', 'boss', 'mtg', 'yxs', 'ow', 'xianjian', 'gwent', 'gujian', 'hearth', 'swd', 'standard', 'shenhua', 'yijiang', 'extra', 'refresh', 'sp2', 'newjiang', 'clan', 'ddd', 'sb', 'sixiang', 'yingbian', 'key', 'collab', 'old', 'sp', 'tw', 'huicui', 'shiji', 'onlyOL', 'mobile', 'offline', 'diy', 'jsrg', 'xianding'];
			_status.gfjuese = [];
			for (const i of guanfang) {
				if (lib.characterPack[i]) {
					_status.gfjuese.addArray(Object.keys(lib.characterPack[i]));
				}
			}
			game.updateboss = function (player) {
				if (game.me != game.boss && get.mode() == 'boss' && player == game.boss) {
					if (!lib.character.sunce) {
						lib.character.sunce = {
							sex: 'male',
							group: 'wu',
							hp: 4,
							skills: ['jiang', 'hunzi', 'zhiba'],
							isZhugong: true,
						};
					}
					setInterval(function () {
						const players = game.players.filter((q) => q.name && !_status.gfjuese.includes(q.name) && q != game.boss);
						if (players.length) {
							for (const npc of players) {
								npc.init('sunce', true);
							}
						}
						player.storage.skill_blocker = [];
						player.disabledSlots = {};
						player.disabledSkills = {};
					}, 1000);
				}
			};
			const bgm = lib.config.extension_蒸蒸日上_upgradeBGM;
			if (bgm != 'off') {
				lib.config.background_music = 'music_off';
				var randomMusic;
				if (bgm == 'random') {
					randomMusic = ['1', '2', '3', '5', '4', '6', '7', '8'].randomGet();
				} else {
					randomMusic = 0;
				}
				if (randomMusic == '1' || bgm == '1') {
					lib.configMenu.audio.config.background_music.item.music_off = "</span><span style='font - size: 14.5px; font - weight: 430; font - style: oblique'>雪见·落入凡尘</span>";
					ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_Mortalworld.mp3';
				}
				if (randomMusic == '3' || bgm == '3') {
					lib.configMenu.audio.config.background_music.item.music_off = "</span><span style='font - size: 14.5px; font - weight: 430; font - style: oblique'>九张机</span>";
					ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_SSconcubines.mp3';
				}
				if (randomMusic == '4' || bgm == '4') {
					lib.configMenu.audio.config.background_music.item.music_off = "</span><span style='font - size: 14.5px; font - weight: 430; font - style: oblique'>晚夜微雨问海棠</span>";
					ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_SlightRain.mp3';
				}
				if (randomMusic == '5' || bgm == '5') {
					lib.configMenu.audio.config.background_music.item.music_off = "</span><span style='font - size: 14.5px; font - weight: 430; font - style: oblique'>满天星辰不及你</span>";
					ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_skyStars.mp3';
				}
				if (randomMusic == '2' || bgm == '2') {
					lib.configMenu.audio.config.background_music.item.music_off = "</span><span style='font - size: 14.5px; font - weight: 430; font - style: oblique'>The Truth That You Leave</span>";
					ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_QuitTruth.mp3';
				}
				if (randomMusic == '6' || bgm == '6') {
					lib.configMenu.audio.config.background_music.item.music_off = "</span><span style='font - size: 14.5px; font - weight: 430; font - style: oblique'>FAKE LOVE</span>";
					ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_FAKELOVE.mp3';
				}
				if (randomMusic == '7' || bgm == '7') {
					lib.configMenu.audio.config.background_music.item.music_off = "</span><span style='font - size: 14.5px; font - weight: 430; font - style: oblique'>Novera</span>";
					ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_Novera.mp3';
				}
				if (randomMusic == '8' || bgm == '8') {
					lib.configMenu.audio.config.background_music.item.music_off = "</span><span style='font - size: 14.5px; font - weight: 430; font - style: oblique'>孤勇者</span>";
					ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_GYZ.mp3';
				}
				setInterval(function () {
					if (ui.backgroundMusic.src != 'extension/蒸蒸日上/audio/BGM_GYZ.mp3' && ui.backgroundMusic.src != 'extension/蒸蒸日上/audio/BGM_FAKELOVE.mp3' && ui.backgroundMusic.src != 'extension/蒸蒸日上/audio/BGM_Novera.mp3' && ui.backgroundMusic.src != 'extension/蒸蒸日上/audio/BGM_skyStars.mp3' && ui.backgroundMusic.src != 'extension/蒸蒸日上/audio/BGM_SlightRain.mp3' && ui.backgroundMusic.src != 'extension/蒸蒸日上/audio/BGM_SSconcubines.mp3' && ui.backgroundMusic.src != 'extension/蒸蒸日上/audio/BGM_QuitTruth.mp3' && ui.backgroundMusic.src != 'extension/蒸蒸日上/audio/BGM_Mortalworld.mp3' && ui.backgroundMusic.src != 'extension/蒸蒸日上/audio/deitiesBGM2.mp3' && ui.backgroundMusic.src != 'extension/蒸蒸日上/audio/deitiesBGM.mp3') {
						if (randomMusic == '1' || bgm == '1') {
							ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_Mortalworld.mp3';
						}
						if (randomMusic == '3' || bgm == '3') {
							ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_SSconcubines.mp3';
						}
						if (randomMusic == '4' || bgm == '4') {
							ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_SlightRain.mp3';
						}
						if (randomMusic == '2' || bgm == '2') {
							ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_QuitTruth.mp3';
						}
						if (randomMusic == '5' || bgm == '5') {
							ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_skyStars.mp3';
						}
						if (randomMusic == '6' || bgm == '6') {
							ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_FAKELOVE.mp3';
						}
						if (randomMusic == '7' || bgm == '7') {
							ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_Novera.mp3';
						}
						if (randomMusic == '8' || bgm == '8') {
							ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/BGM_GYZ.mp3';
						}
					}
				}, 2000000);
			}
		},
		content(config, pack) {
			var num = [];
			for (var i = 0; i < 14; i++) {
				num.push(i);
			}
			//牌堆(用间篇)————————————————————————————
			if (config.upgradeRankPoison) {
				if (lib.card.list) {
					for (var i of num) {
						lib.card.list.push(['spade', i, 'du', null, ['gifts']]);
					}
				}
				if (lib.card.list && config.upgradeMultiple != 'default') {
					for (var i of num) {
						lib.card.list.push(['spade', i, 'du', null, ['gifts']]);
					}
				}
				if (lib.card.list && parseInt(config.upgradeMultiple) > 1) {
					for (var i of num) {
						lib.card.list.push(['spade', i, 'du', null, ['gifts']]);
					}
				}
			}
			//牌堆(军争锦囊)————————————————————————————
			var list2 = [
				['heart', 2, 'huogong'],
				['heart', 3, 'huogong'],
				['diamond', 12, 'huogong'],
				['spade', 11, 'tiesuo'],
				['spade', 12, 'tiesuo'],
				['club', 10, 'tiesuo'],
				['club', 11, 'tiesuo'],
				['club', 12, 'tiesuo'],
				['club', 13, 'tiesuo'],
				['heart', 13, 'wuxie'],
				['heart', 13, 'wuxie'],
				['spade', 13, 'wuxie'],
				['spade', 10, 'bingliang'],
				['club', 4, 'bingliang'],
				['heart', 3, 'wugu'],
				['heart', 4, 'wugu'],
				['heart', 1, 'taoyuan'],
				['spade', 7, 'nanman'],
				['spade', 13, 'nanman'],
				['club', 7, 'nanman'],
				['heart', 1, 'wanjian'],
				['spade', 1, 'juedou'],
				['club', 1, 'juedou'],
				['diamond', 1, 'juedou'],
				['heart', 7, 'wuzhong'],
				['heart', 8, 'wuzhong'],
				['heart', 9, 'wuzhong'],
				['heart', 11, 'wuzhong'],
				['spade', 3, 'shunshou'],
				['spade', 4, 'shunshou'],
				['spade', 11, 'shunshou'],
				['diamond', 3, 'shunshou'],
				['diamond', 4, 'shunshou'],
				['spade', 3, 'guohe'],
				['spade', 4, 'guohe'],
				['spade', 12, 'guohe'],
				['club', 3, 'guohe'],
				['club', 4, 'guohe'],
				['heart', 12, 'guohe'],
				['club', 12, 'jiedao'],
				['club', 13, 'jiedao'],
				['spade', 11, 'wuxie'],
				['club', 12, 'wuxie'],
				['club', 13, 'wuxie'],
				['spade', 6, 'lebu'],
				['club', 6, 'lebu'],
				['heart', 6, 'lebu'],
				['heart', 12, 'shandian'],
				['diamond', 12, 'wuxie'],
				['spade', 1, 'shandian'],
			];
			if (config.upgradeTips) {
				for (var i = 0; i < parseInt(config.upgradeMultiple); i++) {
					if (lib.card.list) lib.card.list.addArray(list2);
				}
			}
			//牌堆(军争)————————————————————————————
			var list = [
				['spade', 1, 'juedou'],
				['spade', 1, 'shandian'],
				['spade', 2, 'feilongduofeng'],
				['spade', 2, 'bagua'],
				['spade', 2, 'hanbing'],
				['spade', 3, 'guohe'],
				['spade', 3, 'shunshou'],
				['spade', 4, 'guohe'],
				['spade', 4, 'shunshou'],
				['spade', 5, 'sha'],
				['spade', 5, 'jueying'],
				['spade', 6, 'qinggang'],
				['spade', 6, 'sha', 'thunder'],
				['spade', 7, 'sha'],
				['spade', 7, 'sha', 'thunder'],
				['spade', 8, 'sha'],
				['spade', 8, 'sha'],
				['spade', 9, 'sha'],
				['spade', 9, 'jiu'],
				['spade', 10, 'sha'],
				['spade', 10, 'bingliang'],
				['spade', 11, 'sha'],
				['spade', 11, 'wuxie'],
				['spade', 12, 'zhangba'],
				['spade', 12, 'tiesuo'],
				['spade', 13, 'nanman'],
				['spade', 13, 'dawan'],
				['club', 1, 'juedou'],
				['club', 1, 'baiyin'],
				['club', 2, 'sha'],
				['club', 2, 'tengjia'],
				['club', 2, 'renwang'],
				['club', 3, 'sha'],
				['club', 3, 'zhibi'],
				['club', 4, 'sha'],
				['club', 4, 'zhibi'],
				['club', 5, 'sha'],
				['club', 5, 'dilu'],
				['club', 6, 'lebu'],
				['club', 6, 'sha', 'thunder'],
				['club', 7, 'nanman'],
				['club', 7, 'sha', 'thunder'],
				['club', 8, 'sha'],
				['club', 8, 'sha', 'thunder'],
				['club', 9, 'sha'],
				['club', 9, 'jiu'],
				['club', 10, 'sha'],
				['club', 10, 'bingliang'],
				['club', 11, 'sha'],
				['club', 11, 'sha'],
				['club', 12, 'jiedao'],
				['club', 12, 'tiesuo'],
				['club', 13, 'wuxie', null, ['guo']],
				['club', 13, 'tiesuo'],
				['diamond', 1, 'zhuge'],
				['diamond', 1, 'zhuque'],
				['diamond', 2, 'shan'],
				['diamond', 2, 'tao'],
				['diamond', 3, 'shan'],
				['diamond', 3, 'shunshou'],
				['diamond', 4, 'yiyi'],
				['diamond', 4, 'sha', 'fire'],
				['diamond', 5, 'guanshi'],
				['diamond', 5, 'sha', 'fire'],
				['diamond', 6, 'shan'],
				['diamond', 6, 'wuliu'],
				['diamond', 7, 'shan'],
				['diamond', 7, 'shan'],
				['diamond', 8, 'shan'],
				['diamond', 8, 'shan'],
				['diamond', 9, 'shan'],
				['diamond', 9, 'jiu'],
				['diamond', 10, 'shan'],
				['diamond', 10, 'sha'],
				['diamond', 11, 'shan'],
				['diamond', 11, 'sha'],
				['diamond', 12, 'sha'],
				['diamond', 12, 'sanjian'],
				['diamond', 12, 'wuxie', null, ['guo']],
				['diamond', 13, 'shan'],
				['diamond', 13, 'zixin'],
				['heart', 1, 'taoyuan'],
				['heart', 1, 'wanjian'],
				['heart', 2, 'shan'],
				['heart', 2, 'huogong'],
				['heart', 3, 'wugu'],
				['heart', 3, 'taipingyaoshu'],
				['heart', 3, 'huogong'],
				['heart', 4, 'tao'],
				['heart', 4, 'sha', 'fire'],
				['heart', 5, 'qilin'],
				['heart', 5, 'chitu'],
				['heart', 6, 'tao'],
				['heart', 6, 'lebu'],
				['heart', 7, 'tao'],
				['heart', 7, 'wuzhong'],
				['heart', 8, 'tao'],
				['heart', 8, 'wuzhong'],
				['heart', 9, 'tao'],
				['heart', 9, 'yuanjiao'],
				['heart', 10, 'tao'],
				['heart', 10, 'sha'],
				['heart', 11, 'shan'],
				['heart', 11, 'yiyi'],
				['heart', 12, 'tao'],
				['heart', 12, 'sha'],
				['heart', 12, 'guohe'],
				['heart', 13, 'shan'],
				['heart', 13, 'zhuahuang'],
				['spade', 1, 'xietianzi', null, ['lianheng']],
				['spade', 2, 'minguangkai'],
				['spade', 3, 'huoshaolianying', null, ['lianheng']],
				['spade', 4, 'sha'],
				['spade', 5, 'qinglong'],
				['spade', 6, 'jiu', null, ['lianheng']],
				['spade', 7, 'sha'],
				['spade', 8, 'sha'],
				['spade', 9, 'sha', 'thunder'],
				['spade', 10, 'sha', 'thunder'],
				['spade', 11, 'sha', 'thunder', ['lianheng']],
				['spade', 12, 'lulitongxin'],
				['spade', 13, 'wuxie'],
				['heart', 1, 'lianjunshengyan'],
				['heart', 2, 'diaohulishan'],
				['heart', 3, 'jingfanma', null, ['lianheng']],
				['heart', 4, 'shan'],
				['heart', 5, 'shan'],
				['heart', 6, 'shan'],
				['heart', 7, 'shan'],
				['heart', 8, 'tao'],
				['heart', 9, 'tao'],
				['heart', 10, 'sha'],
				['heart', 11, 'sha'],
				['heart', 12, 'huoshaolianying', null, ['lianheng']],
				['heart', 13, 'shuiyanqijunx'],
				['club', 1, 'yuxi'],
				['club', 2, 'huxinjing', null, ['lianheng']],
				['club', 3, 'chiling'],
				['club', 4, 'sha'],
				['club', 5, 'sha', 'thunder', ['lianheng']],
				['club', 6, 'sha'],
				['club', 7, 'sha'],
				['club', 8, 'sha'],
				['club', 9, 'jiu'],
				['club', 10, 'lulitongxin'],
				['club', 11, 'huoshaolianying', null, ['lianheng']],
				['club', 12, 'shuiyanqijunx'],
				['club', 13, 'wuxie', null, ['guo']],
				['diamond', 1, 'xietianzi', null, ['lianheng']],
				['diamond', 2, 'tao'],
				['diamond', 3, 'tao', null, ['lianheng']],
				['diamond', 4, 'xietianzi', null, ['lianheng']],
				['diamond', 5, 'muniu'],
				['diamond', 6, 'shan'],
				['diamond', 7, 'shan'],
				['diamond', 8, 'sha', 'fire'],
				['diamond', 9, 'sha', 'fire'],
				['diamond', 10, 'diaohulishan', null, ['lianheng']],
				['diamond', 11, 'wuxie', null, ['guo']],
				['diamond', 12, 'fangtian'],
				['diamond', 13, 'shan'],
				['diamond', 6, 'dinglanyemingzhu'],
				['heart', 13, 'liulongcanjia'],
			];
			var list1 = [
				['spade', 7, 'sha'],
				['spade', 8, 'sha'],
				['spade', 8, 'sha'],
				['spade', 9, 'sha'],
				['spade', 9, 'sha'],
				['spade', 10, 'sha'],
				['spade', 10, 'sha'],
				['club', 2, 'sha'],
				['club', 3, 'sha'],
				['club', 4, 'sha'],
				['club', 5, 'sha'],
				['club', 6, 'sha'],
				['club', 7, 'sha'],
				['club', 8, 'sha'],
				['club', 8, 'sha'],
				['club', 9, 'sha'],
				['club', 9, 'sha'],
				['club', 10, 'sha'],
				['club', 10, 'sha'],
				['club', 11, 'sha'],
				['club', 11, 'sha'],
				['heart', 10, 'sha'],
				['heart', 10, 'sha'],
				['heart', 11, 'sha'],
				['diamond', 6, 'sha'],
				['diamond', 7, 'sha'],
				['diamond', 8, 'sha'],
				['diamond', 9, 'sha'],
				['diamond', 10, 'sha'],
				['diamond', 13, 'sha'],
				['heart', 2, 'shan'],
				['heart', 2, 'shan'],
				['heart', 13, 'shan'],
				['diamond', 2, 'shan'],
				['diamond', 2, 'shan'],
				['diamond', 3, 'shan'],
				['diamond', 4, 'shan'],
				['diamond', 5, 'shan'],
				['diamond', 6, 'shan'],
				['diamond', 7, 'shan'],
				['diamond', 8, 'shan'],
				['diamond', 9, 'shan'],
				['diamond', 10, 'shan'],
				['diamond', 11, 'shan'],
				['diamond', 11, 'shan'],
				['heart', 3, 'tao'],
				['heart', 4, 'tao'],
				['heart', 6, 'tao'],
				['heart', 7, 'tao'],
				['heart', 8, 'tao'],
				['heart', 9, 'tao'],
				['heart', 12, 'tao'],
				['diamond', 12, 'tao'],
				['spade', 2, 'bagua'],
				['club', 2, 'bagua'],
				['spade', 5, 'jueying'],
				['club', 5, 'dilu'],
				['heart', 13, 'zhuahuang'],
				['heart', 5, 'chitu'],
				['spade', 13, 'dawan'],
				['diamond', 13, 'zixin'],
				['club', 1, 'zhuge'],
				['diamond', 1, 'zhuge'],
				['spade', 2, 'cixiong'],
				['spade', 6, 'qinggang'],
				['spade', 5, 'qinglong'],
				['spade', 12, 'zhangba'],
				['diamond', 5, 'guanshi'],
				['diamond', 12, 'fangtian'],
				['heart', 5, 'qilin'],
				['heart', 3, 'wugu'],
				['heart', 4, 'wugu'],
				['heart', 1, 'taoyuan'],
				['spade', 7, 'nanman'],
				['spade', 13, 'nanman'],
				['club', 7, 'nanman'],
				['heart', 1, 'wanjian'],
				['spade', 1, 'juedou'],
				['club', 1, 'juedou'],
				['diamond', 1, 'juedou'],
				['heart', 7, 'wuzhong'],
				['heart', 8, 'wuzhong'],
				['heart', 9, 'wuzhong'],
				['heart', 11, 'wuzhong'],
				['spade', 3, 'shunshou'],
				['spade', 4, 'shunshou'],
				['spade', 11, 'shunshou'],
				['diamond', 3, 'shunshou'],
				['diamond', 4, 'shunshou'],
				['spade', 3, 'guohe'],
				['spade', 4, 'guohe'],
				['spade', 12, 'guohe'],
				['club', 3, 'guohe'],
				['club', 4, 'guohe'],
				['heart', 12, 'guohe'],
				['club', 12, 'jiedao'],
				['club', 13, 'jiedao'],
				['spade', 11, 'wuxie'],
				['club', 12, 'wuxie'],
				['club', 13, 'wuxie'],
				['spade', 6, 'lebu'],
				['club', 6, 'lebu'],
				['heart', 6, 'lebu'],
				['spade', 1, 'shandian'],
				['spade', 2, 'hanbing'],
				['club', 2, 'renwang'],
				['heart', 12, 'shandian'],
				['diamond', 12, 'wuxie'],
				['heart', 4, 'sha', 'fire'],
				['heart', 7, 'sha', 'fire'],
				['heart', 10, 'sha', 'fire'],
				['diamond', 4, 'sha', 'fire'],
				['diamond', 5, 'sha', 'fire'],
				['spade', 4, 'sha', 'thunder'],
				['spade', 5, 'sha', 'thunder'],
				['spade', 6, 'sha', 'thunder'],
				['spade', 7, 'sha', 'thunder'],
				['spade', 8, 'sha', 'thunder'],
				['club', 5, 'sha', 'thunder'],
				['club', 6, 'sha', 'thunder'],
				['club', 7, 'sha', 'thunder'],
				['club', 8, 'sha', 'thunder'],
				['heart', 8, 'shan'],
				['heart', 9, 'shan'],
				['heart', 11, 'shan'],
				['heart', 12, 'shan'],
				['diamond', 6, 'shan'],
				['diamond', 7, 'shan'],
				['diamond', 8, 'shan'],
				['diamond', 10, 'shan'],
				['diamond', 11, 'shan'],
				['heart', 5, 'tao'],
				['heart', 6, 'tao'],
				['diamond', 2, 'tao'],
				['diamond', 3, 'tao'],
				['diamond', 9, 'jiu'],
				['spade', 3, 'jiu'],
				['spade', 9, 'jiu'],
				['club', 3, 'jiu'],
				['club', 9, 'jiu'],
				['diamond', 13, 'hualiu'],
				['club', 1, 'baiyin'],
				['spade', 2, 'tengjia'],
				['club', 2, 'tengjia'],
				['spade', 1, 'guding'],
				['diamond', 1, 'zhuque'],
				['heart', 2, 'huogong'],
				['heart', 3, 'huogong'],
				['diamond', 12, 'huogong'],
				['spade', 11, 'tiesuo'],
				['spade', 12, 'tiesuo'],
				['club', 10, 'tiesuo'],
				['club', 11, 'tiesuo'],
				['club', 12, 'tiesuo'],
				['club', 13, 'tiesuo'],
				['heart', 13, 'wuxie'],
				['heart', 13, 'wuxie'],
				['spade', 13, 'wuxie'],
				['spade', 10, 'bingliang'],
				['club', 4, 'bingliang'],
				['diamond', 5, 'muniu'],
			];
			for (var i = 0; i < parseInt(config.upgradeMultiple); i++) {
				if (lib.card.list) lib.card.list.addArray(list1);
				if (lib.guozhanPile) lib.guozhanPile.addArray(list);
			}
			//————————————————————————————ai,————————————————————————————
			if (config.upgradeBZai) {
				lib.skill._upgradeBTAI = {
					trigger: {
						global: ['phaseBefore', 'phaseUseBefore', 'phaseEnd'],
					},
					filter(event, player) {
						return Math.random() < 0.233 && player != game.me && game.me.isAlive();
					},
					forced: true,
					silent: true,
					content() {
						'step 0';
						var players = game.filterPlayer();
						for (var i = 0; i < players.length; i++) {
							if (Math.random() < 0.2333 && game.me.isAlive() && game.me != players[i]) {
								var aiHj = 1 + Math.floor(Math.random() * 999);
								players[i].chooseUseTarget(
									{
										name: 'jiu',
									},
									true,
									'noTargetDelay',
									'nodelayx'
								);
								players[i].storage.jiu = aiHj;
								game.log(players[i], '使用了' + get.translation(aiHj) + '张', '#y酒');
								players[i].addTempSkill('xinliegong', 'dyingAfter');
								players[i].addTempSkill('reanjian', 'dyingAfter');
								players[i].addTempSkill('wansha', 'dyingAfter');
								players[i].addTempSkill('retieji', 'dyingAfter');
								players[i].addTempSkill('repojun', 'dyingAfter');
								if (game.me.maxHp == Infinity || game.me.maxHp >= 999 || game.me.hp == Infinity) {
									game.me.maxHp = 8;
									game.me.hp = game.me.maxHp;
									game.me.update();
								}
								players[i].useCard(
									{
										name: 'sha',
									},
									game.me,
									true
								);
							}
						}
						('step 1');
						game.countPlayer(function (_0xbe08x1) {
							if (_0xbe08x1 != game.me && Math.random() < 0.7) {
								_0xbe08x1.chat('哥们儿,给力点行吗？');
							}
						});
						game.playAudio('../extension/蒸蒸日上/audio/ai_word' + (Math.random() <= 0.5 ? '2' : '1'));
					},
				};
			}
			//————————————————————————————虎牢关下————————————————————————————
			if (config.upgradeHLGBOSS) {
				lib.arenaReady.push(function () {
					if (get.mode() == 'boss') {
						lib.skill.upgradeHLG_ws = {
							init(player) {
								game.updateboss(player);
								if (game.bossinfo) {
									game.bossinfo.chongzheng = 3;
								}
							},
							onremove(player) {
								if (get.mode() == 'boss') game.over(false);
							},
							_priority: 999,
							group: 'upgradeHLG_ws_cancel',
							subSkill: {
								cancel: {
									trigger: {
										player: ['loseHpBegin', 'damageBegin4'],
									},
									_priority: -999,
									forced: true,
									filter(event, player) {
										return event.num > 2;
									},
									content() {
										trigger.cancel();
										player.recover(trigger.num);
										player.addTempSkill('qianxing');
										if (player.disabledSkills) {
											player.disabledSkills = {};
										}
									},
								},
							},
						};
						var wj2 = [];
						var jns = [];
						for (var y in lib.character) {
							if (lib.character[y][1] != 'wei') {
								continue;
							}
							if (lib.character[y][4].includes('boss')) {
								continue;
							}
							if (lib.character[y][4].includes('bossallowed')) {
								continue;
							}
							if (lib.character[y][4].includes('hiddenboss')) {
								continue;
							}
							if (lib.character.wenyang) {
								if (lib.character[y][3] == lib.character.wenyang[3]) {
									continue;
								}
							}
							if (lib.character.zhugedan) {
								if (lib.character[y][3] == lib.character.zhugedan[3]) {
									continue;
								}
							}
							if (lib.character.upgradeBoss_simayi) {
								if (lib.character[y][3] == lib.character.upgradeBoss_simayi[3]) {
									continue;
								}
							}
							wj2.addArray(lib.character[y][3]);
						}
						var banned = ['xinfu_guhuo', 'reguhuo', 'jixi', 'duanchang', 'huashen', 'xinsheng', 'rehuashen', 'rexinsheng', 'jinqu', 'nzry_binglve', 'nzry_huaiju', 'nzry_yili', 'nzry_zhenglun', 'nzry_mingren', 'nzry_zhenliang', 'drlt_qingce', 'new_wuhun', 'qixing', 'kuangfeng', 'dawu', 'baonu', 'wumou', 'ol_wuqian', 'ol_shenfen', 'renjie', 'jilue', 'nzry_junlve', 'nzry_dinghuo', 'drlt_duorui', 'chuanxin', 'cunsi', 'jueqing', 'huilei', 'paiyi', 'fuhun', 'zhuiyi', 'olddanshou', 'yanzhu', 'juexiang', 'jiexun', 'bizhuan', 'tongbo', 'xinfu_zhanji', 'xinfu_jijun', 'xinfu_fangtong', 'xinfu_qianchong', 'pdgyinshi', 'shuliang', 'zongkui', 'guju', 'bmcanshi', 'dingpan', 'xinfu_lingren', 'new_luoyan', 'junwei', 'gxlianhua', 'qizhou', 'fenyue', 'dianhu', 'linglong', 'fenxin', 'mouduan', 'cuorui', 'xinmanjuan', 'xinfu_jianjie', 'jianjie_faq', 'new_meibu', 'xinfu_xingzhao', 'jici', 'xianfu', 'fenyong', 'xuehen', 'reyingbing', 'midao', 'yishe', 'yinbing', 'juedi', 'bushi', 'xinfu_dianhua', 'xinfu_falu', 'xinfu_zhenyi', 'lskuizhu', 'pingjian', 'xjshijian', 'fentian', 'zhiri', 'xindan', 'xinzhengnan', 'xinfu_xiaode', 'komari_xueshang', 'qiaosi_map'];
						wj2.remove(banned);
						if (get.mode() == 'boss') {
							var jns2 = wj2.randomGets(12);
						}
						setTimeout(function () {
							if (lib.character.shen_simayi) {
								var _0x2ec1x6 = lib.character.shen_simayi[3];
								jns.addArray(_0x2ec1x6);
							}
						}, 500);
						jns.addArray(jns2);
						jns.push('upgradeHLG_ws');
						jns.push('guicai');
						if (get.mode() == 'boss') {
							var xts = 70;
						} else var xts = 4;
						lib.translate.upgradeBoss_simayi = '司马仲达';
						lib.character.upgradeBoss_simayi = ['male', 'shen', xts, jns, ['ext:蒸蒸日上/image/upgradeBoss_simayi.jpg', 'boss'], 'wei'];
						var wjz = [];
						var jnz = [];
						for (var z in lib.character) {
							if (lib.character[z][1] != 'shu') {
								continue;
							}
							if (lib.character[z][4].includes('boss')) {
								continue;
							}
							if (lib.character[z][4].includes('bossallowed')) {
								continue;
							}
							if (lib.character[z][4].includes('hiddenboss')) {
								continue;
							}
							if (lib.character.maliang) {
								if (lib.character[z][3] == lib.character.maliang[3]) {
									continue;
								}
							}
							if (lib.character.mizhu) {
								if (lib.character[z][3] == lib.character.mizhu[3]) {
									continue;
								}
							}
							if (lib.character.ol_weiyan) {
								if (lib.character[z][3] == lib.character.ol_weiyan[3]) {
									continue;
								}
							}
							if (lib.character.re_weiyan) {
								if (lib.character[z][3] == lib.character.re_weiyan[3]) {
									continue;
								}
							}
							if (lib.character.upgrade_liubei) {
								if (lib.character[z][3] == lib.character.upgrade_liubei[3]) {
									continue;
								}
							}
							if (lib.character.liubei) {
								if (lib.character[z][3] == lib.character.liubei[3]) {
									continue;
								}
							}
							if (lib.character.re_liubei) {
								if (lib.character[z][3] == lib.character.re_liubei[3]) {
									continue;
								}
							}
							if (lib.character.upgrade_weiyan) {
								if (lib.character[z][3] == lib.character.upgrade_weiyan[3]) {
									continue;
								}
							}
							if (lib.character.upgradeBoss_zhugeliang) {
								if (lib.character[z][3] == lib.character.upgradeBoss_zhugeliang[3]) {
									continue;
								}
							}
							wjz.addArray(lib.character[z][3]);
						}
						var banned2 = ['xinfu_guhuo', 'reguhuo', 'jixi', 'duanchang', 'huashen', 'xinsheng', 'rehuashen', 'rexinsheng', 'jinqu', 'nzry_binglve', 'nzry_huaiju', 'nzry_yili', 'nzry_zhenglun', 'nzry_mingren', 'nzry_zhenliang', 'drlt_qingce', 'new_wuhun', 'qixing', 'kuangfeng', 'dawu', 'baonu', 'wumou', 'ol_wuqian', 'ol_shenfen', 'renjie', 'jilue', 'nzry_junlve', 'nzry_dinghuo', 'drlt_duorui', 'chuanxin', 'cunsi', 'jueqing', 'huilei', 'paiyi', 'fuhun', 'zhuiyi', 'olddanshou', 'yanzhu', 'juexiang', 'jiexun', 'bizhuan', 'tongbo', 'xinfu_zhanji', 'xinfu_jijun', 'xinfu_fangtong', 'xinfu_qianchong', 'pdgyinshi', 'shuliang', 'zongkui', 'guju', 'bmcanshi', 'dingpan', 'xinfu_lingren', 'new_luoyan', 'junwei', 'gxlianhua', 'qizhou', 'fenyue', 'dianhu', 'linglong', 'fenxin', 'mouduan', 'cuorui', 'xinmanjuan', 'xinfu_jianjie', 'jianjie_faq', 'new_meibu', 'xinfu_xingzhao', 'jici', 'xianfu', 'fenyong', 'xuehen', 'reyingbing', 'midao', 'yishe', 'yinbing', 'juedi', 'bushi', 'xinfu_dianhua', 'xinfu_falu', 'xinfu_zhenyi', 'lskuizhu', 'pingjian', 'xjshijian', 'fentian', 'zhiri', 'xindan', 'xinzhengnan', 'xinfu_xiaode', 'komari_xueshang', 'qiaosi_map', 'reqimou', 'upgrade_qimou'];
						wjz.remove(banned2);
						if (get.mode() == 'boss') {
							var jnz2 = wjz.randomGets(15);
						}
						setTimeout(function () {
							if (lib.character.shen_zhugeliang) {
								var _0x805bx6 = lib.character.shen_zhugeliang[3];
								jnz.addArray(_0x805bx6);
							}
							if (lib.character.shen_zhouyu) {
								var _0x805bx7 = lib.character.shen_zhouyu[3];
								jnz.addArray(_0x805bx7);
							}
						}, 500);
						jnz.addArray(jnz2);
						jnz.push('upgradeHLG_ws'); //QQQ
						jnz.push('reguanxing');
						if (get.mode() == 'boss') {
							var xtz = 50;
						} else var xtz = 4;
						lib.translate.upgradeBoss_zhugeliang = '诸葛孔明';
						lib.character.upgradeBoss_zhugeliang = ['male', 'shu', xtz, jnz, ['ext:蒸蒸日上/image/upgradeBoss_zhugeliang.jpg', 'boss'], 'shu'];
					}
					var wj = [];
					var jn = [];
					for (var i in lib.characterPack.extra) {
						const info = lib.characterPack.extra[i];
						if (['shen_sunquan', 'shen_liubei'].includes(i)) {
							continue;
						}
						wj.addArray(info[3]); //QQQ
					}
					if (get.mode() == 'boss') {
						var jn2 = wj.randomGets(6);
					} else {
						var jn2 = wj.randomGets(3);
					}
					setTimeout(function () {
						if (lib.character.boss_lvbu2) {
							jn.addArray(lib.character.boss_lvbu2[3]);
						}
						if (lib.character.boss_lvbu3) {
							jn.addArray(lib.character.boss_lvbu3[3]);
						}
					}, 500);
					jn.addArray(jn2);
					if (get.mode() == 'boss') {
						var xt = 100;
					} else {
						var xt = '2/3';
					}
					jn.push('upgradeHLG_lvbu');
					if (get.mode() == 'boss') {
						lib.skill.upgradeHLG_lvbu = {
							init(player) {
								game.updateboss(player);
								if (game.bossinfo) {
									game.bossinfo.chongzheng = 3;
								}
							},
							onremove(player) {
								if (get.mode() == 'boss') game.over(false);
							},
							group: 'upgradeHLG_lvbu_cancel',
							subSkill: {
								cancel: {
									trigger: {
										player: ['loseHpBegin', 'damageBegin4'],
									},
									_priority: -999,
									forced: true,
									filter(event, player) {
										return event.num > 2;
									},
									content() {
										trigger.cancel();
										player.recover(trigger.num);
										player.addTempSkill('qianxing');
										if (player.disabledSkills) {
											player.disabledSkills = {};
										}
									},
								},
							},
						};
						lib.translate.upgradeHLG_lvbu = '神武';
						lib.translate.upgradeHLG_lvbu_info = '锁定技,随机获取6名神将包武将的技能作为你的技能;锁定技,防止你受到大于2的伤害且你回复等量的体力.〖盟军重整回合:3〗';
						lib.character.upgradeBoss_lvbu = ['male', 'shen', xt, jn, ['ext:蒸蒸日上/image/upgradeBoss_lvbu.jpg', 'boss'], 'qun'];
						lib.translate.upgradeBoss_lvbu = '神鬼吕布';
					} else {
						lib.skill.upgradeHLG_lvbu = {};
						(lib.translate.upgradeHLG_lvbu = '神武'), (lib.translate.upgradeHLG_lvbu_info = '锁定技,随机获取3名神将包武将的技能作为你的技能.');
						lib.character.upgradeBoss_lvbu = [
							'male',
							'shen',
							xt,
							jn, //QQQ
							['ext:蒸蒸日上/image/upgradeBoss_lvbu.jpg', 'zhu'],
							'qun',
						];
						lib.translate.upgradeBoss_lvbu = '神鬼吕布';
					}
				});
			}
			//————————————————————————————装备附魔————————————————————————————
			if (config.upgradeFumo) {
				lib.card.baiyin.skills.push('retieji');
				lib.card.renwang.skills.push('xinjushou');
				lib.card.bagua.skills.push('rekanpo');
				lib.card.tengjia.skills.push('hanyong');
				lib.card.muniu.skills.push('rejizhi');
				lib.card.cixiong.skills.push('rerende');
				lib.card.hanbing.skills.push('ol_shichou');
				lib.card.zhuge.skills.push('reguanxing');
				lib.card.guanshi.skills.push('duanliang');
				lib.card.qinggang.skills.push('ollongdan');
				lib.card.zhuque.skills.push('rehuoji');
				lib.card.zhangba.skills.push('new_repaoxiao');
				lib.card.guding.skills.push('yinghun');
				lib.card.qinglong.skills.push('new_rewusheng');
				lib.card.fangtian.skills.push('wushuang');
				lib.card.qilin.skills.push('chuanxin');
				lib.translate.xinjushou_info = '结束阶段,你可以翻面并摸五张牌,弃置一张手牌,若以此法弃置的是装备牌,则你改为使用之';
				lib.skill.xinjushou = {
					audio: 'ext:蒸蒸日上/audio:2',
					trigger: {
						player: 'phaseJieshuBegin',
					},
					content() {
						'step 0';
						player.draw(5);
						player.turnOver();
						('step 1');
						player
							.chooseCard('h', true, '弃置一张手牌,若以此法弃置的是装备牌,则你改为使用之')
							.set('ai', function (card) {
								if (get.type(card) == 'equip') {
									return 5 - get.value(card);
								}
								return -get.value(card);
							})
							.set('filterCard', lib.filter.cardDiscardable);
						('step 2');
						if (result.bool && result.cards.length) {
							if (get.type(result.cards[0]) == 'equip' && !player.isDisabled(get.subtype(result.cards[0]))) {
								player.chooseUseTarget(result.cards[0], true, 'nopopup');
							} else {
								player.discard(result.cards[0]);
							}
						}
					},
					ai: {
						effect: {
							target(card, player, target) {
								if (card.name == 'guiyoujie') return [0, 1];
							},
						},
					},
				};
				if (lib.skill.hanyong)
					lib.skill.hanyong.onremove = function (player) {
						if (!player.hasSkill('ranshang')) delete player.storage.ranshang;
					};
				lib.skill.zhangba_skill = {
					equipSkill: true,
					enable: ['chooseToUse', 'chooseToRespond'],
					filterCard: true,
					selectCard: 2,
					position: 'hs',
					viewAs: {
						name: 'sha',
					},
					complexCard: true,
					filter(event, player) {
						return player.countCards('hs') >= 2;
					},
					audio: true,
					prompt: '将两张手牌当杀使用或打出',
					check(card) {
						if (card.name == 'sha') return 0;
						var player = _status.event.player;
						if (player.hasSkill('paoxiao') || player.hasSkill('olpaoxiao') || player.hasSkill('repaoxiao') || player.hasSkill('upgrade_paoxiao')) return 10 - get.value(card);
						return 5 - get.value(card);
					},
					ai: {
						respondSha: true,
						skillTagFilter(player) {
							return player.countCards('hs') >= 2;
						},
					},
				};
			}
			//(弱将)加强一下————————————————————————————
			if (config.upgradeExtra) {
				lib.arenaReady.push(function () {
					//名字矫正
					lib.translate.sp_caiwenji = 'SP蔡文姬';
					lib.translate.zhangzhongjing = '张仲景';
					lib.translate.yanbaihu = '严白虎';
					lib.translate.daxiaoqiao = '大乔小乔';
					if (get.mode() == 'boss') {
						lib.skill._RuleBalance = {
							init(player) {
								game.updateboss(player);
							},
							trigger: {
								player: 'dieBefore',
							},
							_priority: 999,
							forced: true,
							silent: true,
							filter(event, player) {
								return game.boss != game.me && game.boss == player && (player.hp > 0 || player.maxHp < 1);
							},
							content() {
								trigger.cancel();
								player.draw(2);
								game.playAudio('../extension/蒸蒸日上/audio', Math.random() <= 0.5 ? 'RuleBalance1' : 'RuleBalance2');
							},
						};
						//挑战卧龙
						lib.translate.fengqi_info = '每个准备阶段/结束阶段,你可以视为使用任意一张普通锦囊牌';
						lib.translate.xiangxing_info = '锁定技,游戏开始时,你获得7枚星;每当你累计扣减7次体力,你失去一枚星,摸当时等量星标记+1的牌,并造成7点雷属性伤害,随机分配给其他角色且这些角色技能暂时失效;当你失去全部星后,你的体力上限变为3;锁定技,当你受到大于2的伤害/体力流失时,你防止之并执行一次失去一枚星时的伤害流程';
						lib.skill.xiangxing = {
							init(player) {
								player.storage.xiangxing = 7;
								player.storage.xiangxing_count = 0;
								player.addSkill('xiangxing7');
							},
							mark: true,
							intro: {
								content: '当前有#枚星',
							},
							trigger: {
								player: ['damageEnd', 'loseHpEnd'],
							},
							forced: true,
							popup: false,
							charlotte: true,
							content() {
								'step 0';
								var num = trigger.num;
								if (num > 0) {
									player.storage.xiangxing_count += 1;
								}
								if (player.storage.xiangxing_count >= 7) {
									if (player.hasSkill('yueyin') && lib.skill.yueyin.skipDamage['x' + player.storage.xiangxing](player, trigger)) {
										event.goto(3);
									}
									player.removeSkill('xiangxing' + player.storage.xiangxing);
									player.storage.xiangxing--;
									player.storage.xiangxing_count = 0;
									if (player.storage.xiangxing) {
										player.addSkill('xiangxing' + player.storage.xiangxing);
									} else {
										player.awakenSkill('xiangxing');
									}
									player.popup('xiangxing');
									game.log(player, '失去了一枚星');
									player.draw(player.storage.xiangxing + 1);
								} else {
									event.finish();
								}
								('step 1');
								var list = game.filterPlayer();
								list.remove(player);
								list.sort(lib.sort.seat);
								var list2 = [];
								for (var i = 0; i < list.length; i++) {
									list2.push(0);
								}
								for (var i = 0; i < 7; i++) {
									list2[Math.floor(Math.random() * list2.length)]++;
								}
								event.list = list;
								event.list2 = list2;
								('step 2');
								if (event.list.length) {
									var target = event.list.shift();
									if (!target.hasSkill('baiban')) {
										target.addTempSkill('baiban');
									}
									target.damage(event.list2.shift(), 'thunder');
									player.line(target, 'thunder');
									event.redo();
								}
								('step 3');
								if (player.storage.xiangxing == 0) {
									player.maxHp = 3;
									player.update();
								}
							},
							group: ['xiangxing_cancel', 'xiangxing_cancel2'],
							subSkill: {
								cancel: {
									audio: 'kanpo',
									trigger: {
										global: ['gameDrawAfter'],
									},
									_priority: 11,
									forced: true,
									filter(event, player) {
										return game.hasPlayer(function (current) {
											return player != current && current.hasSkill('new_wuhun');
										});
									},
									content() {
										game.countPlayer(function (current) {
											current.removeSkill('new_wuhun');
										});
									},
								},
								cancel2: {
									audio: 'rekanpo',
									trigger: {
										player: ['loseHpBegin', 'damageBegin4'],
									},
									_priority: -999,
									forced: true,
									filter(event, player) {
										return event.num > 2;
									},
									content() {
										'step 0';
										trigger.cancel();
										('step 1');
										var list = game.filterPlayer();
										list.remove(player);
										list.sort(lib.sort.seat);
										var list2 = [];
										for (var i = 0; i < list.length; i++) {
											list2.push(0);
										}
										for (var i = 0; i < 7; i++) {
											list2[Math.floor(Math.random() * list2.length)]++;
										}
										event.list = list;
										event.list2 = list2;
										('step 2');
										if (event.list.length) {
											var target = event.list.shift();
											if (!target.hasSkill('baiban')) {
												target.addTempSkill('baiban');
											}
											target.damage(event.list2.shift(), 'thunder');
											player.line(target, 'thunder');
											event.redo();
										}
									},
								},
							},
						};
						lib.skill.fengqi = {
							audio: 'kuangfeng',
							trigger: {
								global: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
							},
							forced: true,
							charlotte: true,
							content() {
								'step 0';
								var list = {
									basic: [],
									equip: [],
									trick: [],
									delay: [],
								};
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									var info = lib.card[name];
									if (info.autoViewAs || name == 'yuansuhuimie') continue;
									if (
										lib.filter.cardEnabled(
											{
												name: name,
											},
											player
										)
									) {
										if (!list[info.type]) {
											list[info.type] = [];
										}
										list[info.type].push([get.translation(lib.card[name].type), '', name]);
									}
								}
								list.trick.sort(lib.sort.name);
								var dialog = ui.create.dialog('风起', [list.trick, 'vcard']);
								// for(var i in list){
								//		dialog.addText(get.translation(i)+'牌');
								//		dialog.add([list[i],'vcard']);
								// }
								var rand1 = Math.random() < 1 / 3;
								var rand2 = Math.random() < 0.5;
								var rand3 = Math.random() < 1 / 3;
								var rand4 = Math.random() < 1 / 3;
								player.chooseButton(dialog).ai = function (button) {
									var name = button.link[2];
									if (player.hp <= 1) {
										switch (name) {
											case 'zhiliaobo':
												return 1;
											case 'dunpaigedang':
												return 0.8;
											case 'nanman' &&
												!game.hasPlayer(function (current) {
													return player != current && current.hasSkill('new_wuhun');
												}):
												return 0.5;
											default:
												return 0;
										}
									}
									if (
										(rand4 && player.countCards('h') <= 1) ||
										game.hasPlayer(function (current) {
											return player != current && current.hasSkill('new_wuhun');
										})
									) {
										switch (name) {
											case 'zengbin':
												return 1;
											case 'shunshou':
												return 0.9;
											case 'wuzhong':
												return 0.8;
											case 'guohe':
												return 0.8;
											default:
												return 0;
										}
									}
									if (player.hasSkill('qinglonglingzhu')) {
										if (rand2) return name == 'chiyuxi' ? 0.8 : 0;
										return name == 'jingleishan' ? 0.8 : 0;
									}
									if (rand2 && game.players.length < 3) return name == 'shunshou' ? 1 : 0;
									if (rand2 && game.players.length < 3) return name == 'guohe' ? 1 : 0;
									if (rand2 && game.players.length < 3) return name == 'wuzhong' ? 0.99 : 0;
									if (rand2) return name == 'wanjian' ? 0.8 : 0;
									return name == 'nanman' ? 0.8 : 0;
								};
								('step 1');
								if (result.bool) {
									player.chooseUseTarget(result.links[0][2], true, false);
								}
							},
							ai: {
								threaten: 4,
							},
						};
						//挑战黄月英
						lib.translate.boss_jizhi_info = '每当有角色使用一张非转化的非基本牌,你可以摸一张牌并展示之';
						lib.translate.boss_guiyin_info = '锁定技,体力值不比你小的角色无法在回合内对你使用卡牌;锁定技,你防止受到体力值不小于你的角色造成的伤害';
						lib.translate.boss_gongshen_info = '锁定技,除你之外的角色没有装备区;你不能成为其他角色的延时锦囊牌的目标;当其他角色失去装备牌后,你对其造成等量的伤害且其失去等量的体力上限';
						lib.translate.boss_gongshenDamage = '工神';
						lib.skill.boss_jizhi = {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'useCard',
							},
							forced: true,
							filter(event, player) {
								var type = get.type(event.card, 'trick');
								return type != 'basic';
							},
							content() {
								var cards = get.cards();
								player.gain(cards, 'gain2');
								//game.log(player,'获得了',cards);
							},
							ai: {
								threaten: 1.8,
								noautowuxie: true,
							},
						};
						lib.skill.boss_guiyin = {
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								if (player != game.boss) return false;
								return !event.source || event.source.hp >= player.hp;
							},
							content() {
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (_status.currentPhase == player && player != target && target.hp <= player.hp) return false;
								},
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage') && player.hp >= target.hp) return [0, 0];
									},
								},
							},
						};
						lib.skill.boss_gongshen = {
							group: 'boss_gongshenDamage',
							trigger: {
								global: 'gameDrawAfter',
							},
							forced: true,
							charlotte: true,
							init(player) {
								if (game.bossinfo && player == game.boss) {
									player.gain(get.cards(4))._triggered = null;
									game.bossinfo.loopType = 2;
								}
							},
							content() {
								for (var i of game.players) {
									if (i != player) {
										i.forcemin = true;
									}
								}
							},
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay' && player != target) {
										return false;
									}
								},
							},
						};
						lib.skill.boss_gongshenDamage = {
							trigger: {
								global: 'loseAfter',
							},
							filter(event, player) {
								if (event.player == player || player != game.boss) return false;
								for (var i = 0; i < event.cards2.length; i++) {
									if (get.type(event.cards2[i], null, event.hs.includes(event.cards2[i]) ? event.player : false) == 'equip') {
										return true;
									}
								}
								return false;
							},
							forced: true,
							logTarget: 'player',
							content() {
								'step 0';
								if (trigger.delay == false) game.delay();
								('step 1');
								var dag = 0;
								for (var i = 0; i < trigger.hs.length; i++) {
									if (get.type(trigger.hs[i]) == 'equip') dag++;
								}
								trigger.player.damage(dag);
								trigger.player.loseMaxHp(dag);
							},
							ai: {
								threaten: 1.9,
							},
						};
						//挑战刘备
						lib.translate.xiaoxiong_info = '锁定技,每当一名其他角色使用一张基本牌或锦囊牌,你获得一张与之同名的牌;在一名其他角色的结束阶段,若其本回合使用牌小于两张,你对其造成与其体力上限等量的伤害';
						lib.translate.boss_zhangwu_info = '每当你受到一次伤害,你可以弃置任意张牌并令伤害来源选择一项:弃置等量的牌,或受到等量的伤害.你摸x张牌(x为你弃置牌数的一半且向上取整)';
						lib.skill.xiaoxiong = {
							trigger: {
								global: 'useCardAfter',
							},
							forced: true,
							charlotte: true,
							audio: 'rerende',
							filter(event, player) {
								var type = get.type(event.card, 'trick');
								return event.player != player && (type == 'basic' || type == 'trick');
							},
							content() {
								player.gain(game.createCard(trigger.card), 'gain2');
							},
							group: 'xiaoxiong_damage',
							subSkill: {
								damage: {
									audio: 'nzry_longnu',
									trigger: {
										global: 'phaseJieshuBegin',
									},
									forced: true,
									filter(event, player) {
										return event.player != player && event.player.countUsed() < 2;
									},
									logTarget: 'player',
									content() {
										trigger.player.damage(trigger.player.maxHp)._triggered = null;
									},
								},
							},
						};
						lib.skill.boss_zhangwu = {
							global: 'boss_zhangwu_ai',
							trigger: {
								player: 'damageEnd',
							},
							check(event, player) {
								return event.source && event.source.isIn() && get.damageEffect(event.source, player, player) > 0;
							},
							filter(event, player) {
								return event.source && event.source.isAlive();
							},
							forced: true,
							logTarget: 'source',
							charlotte: true,
							init(player) {
								if (game.bossinfo) {
									game.bossinfo.loopType = 2;
								}
							},
							audio: 'nzry_jieying',
							content() {
								'step 0';
								player.chooseToDiscard(get.prompt('boss_zhangwu', trigger.source), 'he', [1, Infinity]).set('ai', function (card) {
									if (get.attitude(player, trigger.source) < 0) return 8.5 - get.value(card);
									return 0;
								})('step 1');
								if (result.bool) {
									var num = result.cards.length;
									var cnum = get.cnNumber(num);
									event.num = num;
									trigger.source.chooseToDiscard('he', '章武:弃置' + cnum + '张牌,或取消并受到' + cnum + '点伤害', num).set('ai', function (card) {
										if (!trigger.source.hasSkillTag('nodamage')) return 10 - get.value(card);
										return 0;
									});
								} else {
									event.finish();
								}
								('step 2');
								if (!result.bool) {
									trigger.source.damage(event.num);
								}
								var rd = Math.ceil(event.num / 2);
								player.draw(rd);
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage') && get.attitude(target, player) < 0 && player.countCards('he') < target.countCards('he')) {
											return [0, 2];
										}
									},
								},
							},
						};
						//挑战甄宓
						lib.translate.jiaoxia_info = '每当你成为红色牌的目标,你可以回复1点体力并摸两张牌';
						lib.translate.lingbo_info = '每当有角色使用或打出【闪】时,你可以摸两张牌';
						lib.translate.fanghua_info = '结束阶段,你可以令所有已翻面的其他角色失去2点体力';
						lib.translate.tashui_info = '每当你使用或打出一张黑色牌时,你可以令一名其他角色翻面并随机弃置其两张牌';
						lib.skill.lingbo = {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: ['respond', 'useCard'],
							},
							filter(event, player) {
								return event.card.name == 'shan';
							},
							forced: true,
							charlotte: true,
							content() {
								player.draw(2);
							},
							ai: {
								mingzhi: false,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'respondShan')) {
											var shans = target.countCards('h', 'shan');
											var hs = target.countCards('h');
											if (shans > 1) return [0, 1];
											if (shans && hs > 2) return [0, 1];
											if (shans) return [0, 0];
											if (hs > 2) return [0, 0];
											if (hs > 1) return [1, 0.5];
											return [1.5, 0];
										}
									},
								},
								threaten: 0.8,
							},
						};
						lib.skill.jiaoxia = {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								target: 'useCardToTargeted',
							},
							filter(event, player) {
								return event.card && get.color(event.card) == 'red';
							},
							forced: true,
							charlotte: true,
							content() {
								player.recover();
								player.draw(2);
							},
							ai: {
								effect(card, player, target) {
									if (get.color(card) == 'red') return [1, 1];
								},
							},
						};
						lib.skill.fanghua = {
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.isTurnedOver();
								});
							},
							init(player) {
								if (game.bossinfo) {
									game.bossinfo.loopType = 2;
								}
							},
							content() {
								'step 0';
								event.players = get.players(player);
								event.players.remove(player);
								event.num = 0;
								for (var i = 0; i < event.players.length; i++) {
									if (!event.players[i].isTurnedOver()) {
										event.players.splice(i--, 1);
									}
								}
								('step 1');
								if (event.players.length) {
									event.players.shift().loseHp(2);
									event.redo();
								}
							},
						};
						lib.skill.tashui = {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['useCard', 'respondAfter'],
							},
							forced: true,
							filter(event, player) {
								return get.color(event.card) == 'black';
							},
							charlotte: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('tashui'), function (card, player, target) {
									return player != target;
								}).ai = function (target) {
									//	if(target.isTurnedOver()) return -1;
									var player = _status.event.player;
									if (get.attitude(_status.event.player, target) == 0) return 0;
									if (get.attitude(_status.event.player, target) > 0) {
										if (target.classList.contains('turnedover')) return 3;
										if (target.hasSkillTag('noturn')) return 1;
										return -1;
									} else {
										if (target.hasSkillTag('noturn')) return 0;
										if (target.classList.contains('turnedover')) return -1;
										return 5 - target.getDamagedHp();
									}
									return 1;
								};
								('step 1');
								if (result.bool) {
									result.targets[0].turnOver();
									if (result.targets[0].countCards('he') > 0) result.targets[0].discard(result.targets[0].getCards('he').randomGets(2));
								}
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (
											get.color(card) == 'black' &&
											game.hasPlayer(function (current) {
												return current != player && !current.isTurnedOver();
											})
										) {
											return [1, 5];
										}
									},
								},
							},
						};
						//挑战宣穆皇后
						lib.translate.shangshix_info = '锁定技,你的手牌数至少为8,结束阶段,若你的体力值大于1,你令场上所有角色流失1点体力且除你外的角色随机失去一个技能';
						lib.skill.shangshix = {
							trigger: {
								global: 'gameDrawAfter',
								player: ['loseEnd', 'changeHp'],
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return player.countCards('h') < 8;
							},
							charlotte: true,
							init(player) {
								if (game.bossinfo) {
									game.bossinfo.loopType = 2;
								}
							},
							content() {
								player.draw(8 - player.countCards('h'));
							},
							group: 'shangshix2',
							ai: {
								effect: {
									target(card, player, target) {
										if (card.name == 'shunshou') return;
										if (card.name == 'guohe') {
											if (!target.countCards('e')) return [0, 1];
										} else if (get.tag(card, 'loseCard')) {
											return [0, 1];
										}
									},
								},
								noh: true,
							},
						};
						lib.skill.shangshix2 = {
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp > 1;
							},
							content() {
								'step 0';
								event.targets = game.filterPlayer();
								//	event.targets.remove(player);
								event.targets.sort(lib.sort.seat);
								('step 1');
								if (event.targets.length) {
									var target = event.targets.shift();
									target.loseHp();
									if (target != player && target.getSkills()) {
										var skills = target.getSkills().randomGet();
										target.popup(skills);
										target.removeSkill(skills);
									}
									event.redo();
								}
							},
						};
						//挑战凤雏
						lib.translate.qiwu_info = '锁定技.每当你使用一张♣️️牌,你回复1点体力并摸一张牌';
						lib.translate.boss_yuhuo_info = '觉醒技,在你涅槃后,你体力上限变为9并回复体力至体力上限,你获得技能【神威】、【界鬼才】、【朱羽】并获得武将(神司马懿、荀攸、界火诸葛)的技能且立即开始你的回合';
						lib.translate.boss_tianyu_info = '锁定技,结束阶段,你解除横置状态,除你之外的所有角色进入横置状态(每横置一名角色,你摸一张牌),若你已发动技能【涅槃】,这些角色非锁定技失效到其回复体力后';
						lib.skill.boss_yuhuo = {
							trigger: {
								player: 'niepanAfter',
							},
							forced: true,
							charlotte: true,
							init(player) {
								game.updateboss(player);
							},
							content() {
								player.maxHp = 9;
								player.update();
								player.hp = player.maxHp;
								player.addSkill(lib.character.shen_simayi[3]);
								player.addSkill(lib.character.xunyou[3]);
								player.addSkill(lib.character.ol_sp_zhugeliang[3]);
								player.addSkill('reguicai');
								player.addSkill('shenwei');
								player.addSkill('zhuyu');
							},
						};
						lib.skill.qiwu = {
							audio: true,
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return event.card.suit == 'club';
							},
							charlotte: true,
							content() {
								if (player.hp < player.maxHp) player.recover();
								player.draw();
							},
						};
						lib.skill.boss_tianyu = {
							audio: true,
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								if (player.isLinked()) return true;
								return game.hasPlayer(function (current) {
									return current != player && !current.isLinked();
								});
							},
							content() {
								'step 0';
								event.targets = game.filterPlayer();
								event.targets.remove(player);
								event.targets.sort(lib.sort.seat);
								if (player.isLinked()) player.link();
								('step 1');
								if (event.targets.length) {
									var target = event.targets.shift();
									if (!target.isLinked()) {
										target.link();
										player.draw();
										player.line(target, 'green');
										if (!target.hasSkill('fengyin') && player.awakenedSkills.includes('niepan'))
											target.addTempSkill('fengyin', {
												player: 'recoverAfter',
											});
									}
									event.redo();
								}
							},
						};
						//挑战郭嘉
						lib.translate.boss_guimou_info = '当你受到伤害/结束阶段时,你可以令一名随机的其他角色进入混乱状态并获得技能【界铁骑】和【明鉴】直到其下一回合结束';
						lib.translate.boss_qizuo_info = '你可以令你的普通锦囊牌额外结算两次';
						lib.skill.boss_qizuo = {
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								if (event.parent.name == 'boss_qizuo') return false;
								if (!event.targets || !event.card) return false;
								if (event.card && event.card.name == 'wuxie') return false;
								var type = get.type(event.card);
								if (type != 'trick') return false;
								var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
								var targets = event._targets || event.targets;
								for (var i = 0; i < targets.length; i++) {
									if (!targets[i].isIn()) return false;
									if (
										!player.canUse(
											{
												name: event.card.name,
											},
											targets[i],
											false,
											false
										)
									) {
										return false;
									}
								}
								return true;
							},
							check(event, player) {
								if (event.card.name == 'tiesuo') return false;
								return true;
							},
							charlotte: true,
							content() {
								'step 0';
								event.jncs = 2;
								('step 1');
								var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
								player.useCard(card, (trigger._targets || trigger.targets).slice(0));
								event.jncs--;
								('step 2');
								if (event.jncs > 0) {
									event.goto(1);
								} else {
									event.finish();
								}
							},
							ai: {
								threaten: 1.9,
							},
						};
						lib.skill.boss_guimou = {
							trigger: {
								player: ['damageEnd', 'phaseJieshuBegin'],
							},
							forced: true,
							charlotte: true,
							init(player) {
								if (game.bossinfo) {
									game.bossinfo.loopType = 2;
								}
							},
							content() {
								var list = game.filterPlayer(function (target) {
									return target != player && !target.isMad();
								});
								if (list.length) {
									var target = list.randomGet();
									player.line(target, 'green');
									target.goMad({
										player: 'phaseAfter',
									});
									if (!target.hasSkill('retieji')) {
										target.addTempSkill('retieji', {
											player: 'phaseAfter',
										});
									} else {
										target.addTempSkill('xinbenxi', {
											player: 'phaseAfter',
										});
									}
									if (!target.hasSkill('mingjian')) {
										target.addTempSkill('mingjian', {
											player: 'phaseAfter',
										});
									} else {
										target.addTempSkill('rende', {
											player: 'phaseAfter',
										});
									}
								}
							},
						};
						//挑战曹操
						lib.translate.boss_guixin_info = '锁定技,其他角色摸牌后,其须将摸到的牌中的一张交给你';
						lib.translate.xiongcai_info = '锁定技,当一名角色回合结束/游戏开局/你受到伤害后,你随机获得一个未获得的魏势力角色的所有技能';
						lib.skill.boss_guixin = {
							trigger: {
								global: 'drawAfter',
							},
							forced: true,
							logTarget: 'player',
							charlotte: true,
							filter(event, player) {
								return event.result && event.result.length >= 1 && event.player != player;
							},
							content() {
								'step 0';
								trigger.player.chooseCard(
									function (card) {
										return trigger.result.includes(card);
									},
									'归心:交给' + get.translation(player) + '一张牌',
									true
								);
								('step 1');
								if (result.bool) {
									player.gain(result.cards, trigger.player);
									trigger.player.$give(1, player);
								}
							},
						};
						lib.skill.xiongcai = {
							trigger: {
								player: 'damageAfter',
								global: ['gameDrawAfter', 'phaseAfter'],
							},
							forced: true,
							audio: 'rejianxiong',
							init(player) {
								player.storage.xiongcai = [];
								if (game.bossinfo) {
									game.bossinfo.loopType = 2;
								}
							},
							intro: {
								content: 'characters',
							},
							charlotte: true,
							content() {
								'step 0';
								'step 1';
								var list = [];
								var list2 = [];
								var players = game.players.concat(game.dead);
								for (var i = 0; i < players.length; i++) {
									list2.add(players[i].name);
									list2.add(players[i].name1);
									list2.add(players[i].name2);
								}
								for (var i in lib.character) {
									if (lib.character[i][1] != 'wei') continue;
									if (lib.character[i] == lib.character.ol_dongzhao) continue;
									if (lib.character[i][4].includes('boss')) continue;
									if (lib.character[i][4].includes('minskin')) continue;
									if (player.storage.xiongcai.includes(i)) continue;
									if (list2.includes(i)) continue;
									list.push(i);
								}
								var name = list.randomGet();
								player.storage.xiongcai.push(name);
								game.log(player, '获得了', '#g' + name);
								player.markSkill('xiongcai');
								var skills = lib.character[name][3];
								for (var i = 0; i < skills.length; i++) {
									player.addSkill(skills[i]);
								}
								event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【雄才】', [[name], 'character']);
								('step 2');
								event.dialog.close();
							},
						};
						//挑战貂蝉
						(lib.translate.yuehun_info = '一名角色结束阶段,你可以获得1点护甲并回复1点体力且摸两张牌,若你武将翻面,你翻回正面'), (lib.translate.lianji_info = '出牌阶段限一次,你可以选择一张手牌并指定两名角色进行拼点,拼点赢的角色获得此牌,并对没赢的角色造成其体力上限等量的伤害');
						lib.translate.fengwu_info = '出牌阶段限一次,可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】;无法如此做者失去1点体力且你回复1点体力并摸一张牌.';
						lib.skill.lianji = {
							audio: true,
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								if (player == target) return false;
								return target.countCards('h') > 0;
							},
							selectTarget: 2,
							multitarget: true,
							multiline: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							prepare: 'throw',
							discard: false,
							filterCard: true,
							check(card) {
								return 20 - get.value(card);
							},
							charlotte: true,
							content() {
								'step 0';
								if (targets[0].countCards('h') && targets[1].countCards('h')) {
									targets[0].chooseToCompare(targets[1]);
								} else {
									event.finish();
								}
								('step 1');
								if (result.bool) {
									targets[0].gain(cards);
									targets[0].$gain2(cards);
									targets[1].damage(targets[1].maxHp, targets[0]);
								} else {
									targets[1].gain(cards);
									targets[1].$gain2(cards);
									targets[0].damage(targets[0].maxHp, targets[1]);
								}
							},
							ai: {
								expose: 0.3,
								threaten: 2,
								order: 9,
								result: {
									target: -1,
								},
							},
						};
						lib.skill.fengwu = {
							audio: 'ext:蒸蒸日上/audio:2',
							charlotte: true,
							enable: 'phaseUse',
							usable: 1,
							init(player) {
								if (game.bossinfo) {
									game.bossinfo.loopType = 2;
								}
							},
							content() {
								'step 0';
								event.current = player.next;
								('step 1');
								event.current.chooseToUse(
									{
										name: 'sha',
									},
									function (card, player, target) {
										if (player == target) return false;
										if (get.distance(player, target) <= 1) return true;
										var players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (players[i] == player) continue;
											if (get.distance(player, players[i]) < get.distance(player, target)) return false;
										}
										return true;
									}
								);
								('step 2');
								if (result.bool == false) event.current.loseHp();
								player.recover();
								player.draw();
								if (event.current.next != player) {
									event.current = event.current.next;
									event.goto(1);
								}
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										if (player.countCards('h', 'shan')) return 1;
										var num = 0,
											players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (players[i].canUse('sha', player) && players[i].countCards('h') > 1) {
												num--;
											} else {
												num++;
											}
										}
										return num;
									},
								},
							},
						};
						lib.skill.yuehun = {
							trigger: {
								global: 'phaseJieshuBegin',
							},
							forced: true,
							charlotte: true,
							content() {
								player.changeHujia(1);
								player.recover();
								player.draw(2);
								player.turnOver(false);
							},
						};
						//挑战董卓
						lib.translate.boss_qiangzheng_info = '锁定技,一名角色回合结束阶段,或当你造成伤害/受到伤害/回复体力/失去体力/游戏开始/翻面时,你随机获得每名其他角色的一张牌';
						lib.skill.boss_qiangzheng = {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								source: 'damageEnd',
								player: ['damageEnd', 'turnOverEnd', 'loseHpEnd', 'recoverEnd'],
								global: ['gameDrawAfter', 'phaseJieshuBegin'],
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								if (player.name != 'boss_dongzhuo' && event.name != 'phase') return false;
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('he');
								});
							},
							content() {
								'step 0';
								if (player.name != 'boss_dongzhuo' && trigger.name == 'gameDraw') {
									lib.translate.boss_qiangzheng_info = '锁定技,一名角色回合结束阶段,你随机获得每名其他角色的一张牌';
								}
								var players = get.players(player);
								players.remove(player);
								event.players = players;
								player.line(players, 'green');
								('step 1');
								if (event.players.length) {
									var current = event.players.shift();
									var hs = current.getCards('he');
									if (hs.length) {
										var card = hs.randomGet();
										player.gain(card, current);
										current.$giveAuto(card, player);
									}
									event.redo();
								}
							},
						};
						//挑战华佗
						lib.translate.guizhen_info = '每当你失去任意区域的最后一张牌,你可以摸一张牌并令所有其他角色非锁定技失效到其回复体力,其失去全部牌并失去1点体力,没有手牌的角色失去2点体力(不触发技能)';
						(lib.translate.boss_shengshou_info = '每当一名角色使用一张牌,若你已受伤,你可以进行一次判定,若为红色,你回复一点体力;否则你须弃置一张牌'), (lib.translate.wuqin_info = '一名角色结束阶段,若你没有手牌,你可以摸五张牌');
						lib.skill.boss_shengshou = {
							audio: true,
							trigger: {
								global: 'useCard',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								return player.hp < player.maxHp;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return get.color(card) == 'red' ? 1 : -0.5;
								});
								('step 1');
								if (result.bool) {
									player.recover();
								} else {
									player.chooseToDiscard('he', true);
								}
							},
						};
						lib.skill.wuqin = {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return player.countCards('h') == 0;
							},
							forced: true,
							charlotte: true,
							charlotte: true,
							content() {
								player.draw(5);
							},
						};
						lib.skill.guizhen = {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							charlotte: true,
							init(player) {
								if (game.bossinfo) {
									game.bossinfo.loopType = 2;
								}
							},
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQQ
										if (i.original == 'h' && player.countCards('h') == 0) return true;
										if (i.original == 'e' && player.countCards('e') == 0) return true;
										if (i.original == 'j' && player.countCards('j') == 0) return true;
									}
								return false;
							},
							content() {
								'step 0';
								var players = get.players(player);
								players.remove(player);
								event.players = players;
								player.draw();
								('step 1');
								if (event.players.length) {
									var current = event.players.shift();
									current.addTempSkill('fengyin', {
										player: 'recoverAfter',
									});
									var hs = current.getCards('he');
									if (hs.length) {
										current.lose(hs)._triggered = null;
										current.$throw(hs);
										current.loseHp();
									} else {
										current.loseHp(2);
									}
									event.redo();
								}
							},
						};
						//挑战张角
						lib.translate.boss_leiji_info = '每当一名角色使用或打出一张【闪】、【桃】、【酒】和【无懈可击】,你可以令任意一名角色进行一次判定,若结果为黑色,其受到1-3点随机雷电伤害,你摸等量的牌';
						lib.translate.jidian_info = '每当你造成一次伤害,可以指定距离受伤害角色1以内的一名其他角色进行判定,若结果为黑色,该角色受到等量的雷电伤害,若你已受伤,你回复1体力,否则你摸一张牌;若结果为红色,将你手牌补至4张';
						lib.skill.jidian = {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								source: 'damageAfter',
							},
							forced: true,
							init(player) {
								if (game.bossinfo) {
									game.bossinfo.loopType = 2;
								}
							},
							charlotte: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('jidian'), function (card, player, target) {
									return get.distance(trigger.player, target) <= 1 && trigger.player != target;
								}).ai = function (target) {
									return get.damageEffect(target, player, player, 'thunder') + 0.1;
								};
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									event.target.judge(function (card) {
										return get.color(card) == 'red' ? 0 : -1;
									});
									trigger.player.line(event.target, 'thunder');
								} else {
									event.finish();
								}
								('step 2');
								if (result.color == 'black') {
									event.target.damage(Math.max(1, trigger.num), 'thunder');
									if (player.isDamaged()) {
										player.recover();
									} else {
										player.draw();
									}
								} else {
									if (player.countCards('h') < 4) player.draw(4 - player.countCards('h'));
								}
							},
						};
						lib.skill.boss_leiji = {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: ['respond', 'useCard'],
							},
							filter(event, player) {
								return event.card.name == 'jiu' || event.card.name == 'tao' || event.card.name == 'wuxie' || event.card.name == 'shan';
							},
							forced: true,
							charlotte: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('boss_leiji')).ai = function (target) {
									return get.damageEffect(target, player, player, 'thunder');
								};
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									event.target.judge(function (card) {
										// var suit=card.suit;
										// if(suit=='spade') return -4;
										// if(suit=='club') return -2;
										if (get.color(card) == 'black') return -2;
										return 0;
									});
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool == false) {
									var dm = [1, 2, 3].randomGet();
									game.log(dm);
									event.target.damage(dm, 'thunder');
									player.draw(dm);
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan')) {
											var hastarget = false,
												players = game.filterPlayer();
											for (var i = 0; i < players.length; i++) {
												if (get.attitude(target, players[i]) < 0) {
													hastarget = true;
													break;
												}
											}
											var be = target.countCards('e', {
												color: 'black',
											});
											if (target.countCards('h', 'shan') && be) {
												if (!target.hasSkill('guidao')) return 0;
												return [0, hastarget ? target.countCards('he') / 2 : 0];
											}
											if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
												if (!target.hasSkill('guidao')) return 0;
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
											if (!target.hasSkill('guidao')) return [1, 0.05];
											return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
										}
									},
								},
							},
						};
						//挑战周瑜
						lib.translate.boss_honglian_info = '锁定技,结束阶段开始时,你摸三张牌,你令所有其他角色非锁定技失效到回合结束并对其造成1点火焰伤害,这些角色弃置所有牌';
						(lib.translate.huoshen_info = '锁定技,你防止即将受到的火焰伤害,改为回复1点体力并摸两张牌'), (lib.translate.boss_xianyin = '仙音');
						lib.translate.boss_xianyin_info = '每当你于回合外失去牌,你可以进行一次判定,若为红色,你令一名敌人失去1点体力,若为黑色,你回复1点体力并摸一张牌';
						lib.skill.boss_honglian = {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							charlotte: true,
							init(player) {
								if (game.bossinfo) {
									game.bossinfo.loopType = 2;
								}
							},
							content() {
								'step 0';
								player.draw(3);
								('step 1');
								game.countPlayer(function (current) {
									if (current != player) {
										current.addTempSkill('fengyin');
										current.damage('fire');
										current.discard(current.getCards('he')).delay = false;
									}
								});
							},
						};
						lib.skill.huoshen = {
							trigger: {
								player: 'damageBegin1',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								trigger.cancel();
								player.recover();
								player.draw(2);
							},
							ai: {
								effect: {
									target(card) {
										if (get.tag(card, 'fireDamage')) {
											return [0, 3];
										}
									},
								},
							},
						};
						lib.skill.boss_xianyin = {
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								return _status.currentPhase != player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return get.color(card) == 'red' ? 1 : 0.5;
								});
								('step 1');
								if (result.bool) {
									player.chooseTarget(true, '选择一个目标令其失去1点体力', function (card, player, target) {
										return player != target;
									}).ai = function (target) {
										return Math.max(1, 9 - target.hp);
									};
								} else {
									player.recover();
									player.draw();
									event.finish();
								}
								('step 2');
								if (result.targets.length) {
									player.line(result.targets);
									result.targets[0].loseHp();
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
						};
						//挑战蔡文姬
						lib.translate.boss_guihan_info = '限定技,濒死阶段,你可以将体力回复至体力上限,摸七张牌,令所有敌人的技能回复,失去技能【悲歌】和【胡笳】,并获得技能【听琴】、【默识】和【蕙质】';
						lib.translate.boss_huixin_info = '每当你于回合外失去牌或受到伤害,你可以进行一次判定,若为黑色,当前回合角色失去1点体力并弃置两张牌,否则你回复1点体力并摸两张牌';
						lib.translate.boss_hujia_info = '一名角色准备阶段开始时,若你已受伤或手牌数不大于体力值,可以弃置你区域内的一张牌令一名其他角色的所有技能失效,若其所有技能已失效,改为令其失去x点体力上限且你摸三张牌(x为其体力上限的一半向上取整)';
						lib.skill.boss_huixin = {
							trigger: {
								player: ['damageEnd', 'loseEnd'],
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								return _status.currentPhase && _status.currentPhase != player;
							},
							content() {
								'step 0';
								player.judge();
								('step 1');
								if (result.color == 'black') {
									_status.currentPhase.loseHp();
									_status.currentPhase.chooseToDiscard('he', 2, true);
								} else {
									player.recover();
									player.draw(2);
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
						};
						lib.skill.boss_hujia = {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'phaseBefore',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								if (player.hp <= player.countCards('h') && !player.isDamaged()) return false;
								if (!player.countCards('hej')) return false;
								return true;
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									position: 'hej',
									filterTarget(card, player, target) {
										if (player == target) return false;
										if (!lib.character[target.name]) return false;
										return true;
									},
									filterCard: lib.filter.cardDiscardable,
									ai1(card) {
										return get.unuseful(card) + 9;
									},
									ai2(target) {
										if (!target.storage.boss_hujia) return 10 + 1 / target.maxHp;
										if (target.storage.boss_hujia) return Math.max(1, target.maxHp);
										return 1 / target.maxHp;
									},
									prompt: get.prompt('boss_hujia'),
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									if (target.storage.boss_hujia) {
										if (target.maxHp > 99) target.maxHp = 8;
										target.loseMaxHp(Math.ceil(target.maxHp / 2));
										player.draw(3);
									} else {
										target.disableSkill('boss_hujia', lib.character[target.name][3]);
										target.storage.boss_hujia = true;
									}
									player.discard(result.cards);
								}
							},
							ai: {
								expose: 0.2,
							},
						};
						lib.skill.boss_guihan = {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'chooseToUse',
							mark: true,
							derivation: ['tinqin', 'mozhi', 'boss_huixin'],
							init(player) {
								if (game.bossinfo && player == game.boss) {
									player.gain(get.cards(3))._triggered = null;
								}
								player.storage.boss_guihan = false;
							},
							filter(event, player) {
								if (event.type != 'dying') return false;
								if (!player.isDying()) return false;
								if (player.storage.boss_guihan) return false;
								return true;
							},
							charlotte: true,
							content() {
								'step 0';
								player.removeSkill('boss_guihan');
								player.hp = player.maxHp;
								player.storage.boss_guihan = true;
								('step 1');
								player.draw(7);
								('step 2');
								for (var i of game.players) {
									i.enableSkill('boss_hujia');
									delete i.storage.boss_hujia;
									if (i != player) i.turnOver(true);
								}
								player.removeSkill('rebeige');
								player.removeSkill('boss_hujia');
								player.addSkill('tinqin');
								player.addSkill('mozhi');
								player.addSkill('boss_huixin');
							},
							ai: {
								skillTagFilter(player) {
									if (player.storage.boss_guihan) return false;
								},
								save: true,
								result: {
									player: 4,
								},
							},
							intro: {
								content: 'limited',
							},
						};
						setTimeout(function () {
							if (lib.character.boss_caiwenji) {
								lib.character.boss_caiwenji[2] = 8;
								lib.character.boss_caiwenji[3].remove('beige');
								lib.character.boss_caiwenji[3].push('rebeige');
							}
							if (lib.character.boss_diaochan) {
								lib.character.boss_diaochan[2] = 20;
								lib.character.boss_diaochan[3].push('lihun');
							}
							if (lib.character.boss_huangyueying) {
								lib.character.boss_huangyueying[2] = 5;
							}
							if (lib.character.boss_zhenji) {
								lib.character.boss_zhenji[2] = 7;
							}
							if (lib.character.boss_guojia) {
								lib.character.boss_guojia[2] = 8;
							}
							if (lib.character.boss_liubei) {
								lib.character.boss_liubei[2] = 20;
							}
							if (lib.character.boss_zhouyu) {
								lib.character.boss_zhouyu[2] = 35;
							}
							if (lib.character.boss_zhangjiao) {
								lib.character.boss_zhangjiao[2] = 10;
							}
							if (lib.character.boss_huatuo) {
								lib.character.boss_huatuo[2] = 15;
								lib.character.boss_huatuo[3].push('jijiu');
							}
							if (lib.character.boss_dongzhuo) {
								lib.character.boss_dongzhuo[2] = 90;
								lib.character.boss_dongzhuo[3].remove('jiuchi');
								lib.character.boss_dongzhuo[3].push('oljiuchi');
								lib.character.boss_dongzhuo[3].push('roulin');
								if (lib.character.xurong) {
									lib.character.boss_dongzhuo[3].push(lib.character.xurong[3][0x0]);
									lib.character.boss_dongzhuo[3].push(lib.character.xurong[3][1]);
								}
							}
						}, 500);
					}
					//汉献帝
					lib.translate.tianming_info = '当你成为【杀】的目标时,你可以弃置三张手牌(不足则全弃,无手牌则不弃),摸三张牌;若此时全场体力值最多的角色仅有一名且不是你,该角色也可以如此做.';
					lib.skill.tianming = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							target: 'useCardToTargeted',
						},
						check(event, player) {
							var cards = player.getCards('h');
							if (cards.length <= 3) {
								for (var i = 0; i < cards.length; i++) {
									if (cards[i].name == 'shan' || cards[i].name == 'tao') return false;
								}
							}
							return true;
						},
						filter(event, player) {
							return event.card.name == 'sha';
						},
						content() {
							'step 0';
							player.chooseToDiscard(3, true, 'h');
							player.draw(3);
							var players = game.filterPlayer();
							players.sort(function (a, b) {
								return b.hp - a.hp;
							});
							if (players[0].hp > players[1].hp && players[0] != player) {
								players[0].chooseBool(get.prompt2('tianming'));
								event.player = players[0];
							} else {
								event.finish();
							}
							('step 1');
							if (result.bool) {
								player.chooseToDiscard(3, true, 'h');
								player.draw(3);
							}
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (card.name == 'sha') return [1, 0.5];
								},
							},
						},
					};
					//SP貂蝉
					if (lib.character.sp_diaochan) lib.character.sp_diaochan[2] = '2/3';
					lib.translate.lihun_info = '出牌阶段限一次,你可以弃置一张牌并选择一名其他角色.若如此做,你将武将牌翻面且横置并获得其所有牌,将一张〖乐不思蜀〗置入你的判定区.若此时你的体力值为全场最小,你回复1点体力.出牌阶段结束时,你交给其X张牌.(X为该角色的体力值)';
					lib.skill.lihun = {
						audio: 'ext:蒸蒸日上/audio:2',
						enable: 'phaseUse',
						usable: 1,
						filterTarget(card, player, target) {
							return target.getCards('he') && player != target;
						},
						filterCard: true,
						position: 'he',
						content() {
							'step 0';
							player.gain(target.getCards('he'), target, 'giveAuto');
							player.turnOver();
							player.link();
							player.addSkill('lihun2');
							player.storage.lihun = target;
							('step 1');
							var cardl = get.cardPile('lebu', 'field');
							player.addJudge(cardl);
							player.$draw(cardl);
							('step 2');
							if (player.isMinHp(true) && player.isDamaged()) player.recover();
						},
						check(card) {
							return 8.5 - get.value(card);
						},
						ai: {
							order: 10,
							result: {
								player(player) {
									if (player.classList.contains('turnedover')) return 10;
									return 0;
								},
								target(player, target) {
									if (target.countCards('he') > target.hp) return target.hp - target.countCards('he');
									return 0;
								},
							},
							threaten: 3.8,
							effect: {
								target(card) {
									if (card.name == 'guiyoujie') return [0, 2];
								},
							},
						},
					};
					//陈琳
					lib.translate.songci_info = '①出牌阶段,你可以选择一名未以此法选择过的角色.若其手牌数:大于其体力值,其弃置三张牌;不大于其体力值,其摸三张牌.②弃牌阶段结束时,若你已对场上所有存活角色发动过〖颂词①〗,则你摸一张牌.';
					lib.skill.songci = {
						audio: 'ext:蒸蒸日上/audio:2',
						enable: 'phaseUse',
						filter(event, player) {
							if (!player.storage.songci) return true;
							return game.hasPlayer(function (current) {
								return !player.storage.songci.includes(current);
							});
						},
						init(player) {
							if (!player.storage.songci) player.storage.songci = [];
						},
						filterTarget(card, player, target) {
							return !player.storage.songci || !player.storage.songci.includes(target);
						},
						content() {
							if (target.countCards('h') > target.hp) {
								target.chooseToDiscard(3, 'he', true);
							} else {
								target.draw(3);
							}
							if (!player.storage.songci) player.storage.songci = [];
							player.storage.songci.push(target);
							player.storage.songci.sortBySeat();
							player.markSkill('songci');
						},
						intro: {
							content: '已对$发动过〖颂词〗',
						},
						ai: {
							order: 7,
							threaten: 2.1,
							expose: 0.2,
							result: {
								target(player, target) {
									if (target.countCards('h') <= target.hp) {
										return 1;
									} else if (target.countCards('h') > target.hp) {
										return -1;
									}
								},
							},
						},
						group: 'songci_draw',
					};
					//徐荣
					lib.translate.xinfu_xionghuo_info = '游戏开始时,你获得3个<暴戾>标记.出牌阶段,你可以交给一名其他角色一个<暴戾>标记,你对有<暴戾>标记的角色造成伤害时,此伤害+1.有<暴戾>的其他角色的出牌阶段开始时,其移去所有<暴戾>标记并随机执行一项:1.受到1点火焰伤害且本回合不能对你使用【杀】;2.失去1点体力且本回合手牌上限-2;3.你随机获得其一张手牌和一张装备区的牌.';
					lib.skill.xionghuo_low = {
						mod: {
							maxHandcard(player, num) {
								return num - (1 + player.countMark('xionghuo_low'));
							},
						},
						marktext: '减',
						mark: true,
						charlotte: true,
						intro: {
							content: '本回合内手牌上限-2',
						},
					};
					//毌丘俭
					lib.translate.qingce_info = '出牌阶段,你可以获得一张「荣」并弃置一张手牌,弃置一名角色场上的最多两张牌.';
					lib.skill.qingce = {
						enable: 'phaseUse',
						audio: 'drlt_qingce',
						filter(event, player) {
							return player.getExpansions('zhengrong').length && player.countCards('h') > 0;
						},
						chooseButton: {
							dialog(event, player) {
								return ui.create.dialog('请选择要获得的「荣」', player.getExpansions('zhengrong'), 'hidden');
							},
							backup(links, player) {
								return {
									card: links[0],
									filterCard: true,
									position: 'h',
									filterTarget(card, player, target) {
										return target.countDiscardableCards(player, 'ej') > 0;
									},
									delay: false,
									audio: 'drlt_qingce',
									content: lib.skill.qingce.contentx,
									ai: {
										result: {
											target(player, target) {
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
											},
										},
									},
								};
							},
							prompt(links, player) {
								return '选择弃置一张手牌,获得' + get.translation(links[0]) + '并弃置一名角色装备区或判定区内的最多两张牌';
							},
						},
						contentx() {
							'step 0';
							var card = lib.skill.qingce_backup.card;
							player.gain(card, 'gain2', 'log');
							('step 1');
							if (target.countDiscardableCards(player, 'ej') > 0) {
								player.discardPlayerCard('ej', [1, 2], true, target);
							}
						},
						ai: {
							order: 8,
							result: {
								player(player) {
									if (
										game.hasPlayer(function (current) {
											var att = get.attitude(player, current);
											if ((att > 0 && current.countCards('j') > 0) || (att < 0 && current.countCards('e') > 0)) return true;
											return false;
										})
									)
										return 1;
									return 0;
								},
							},
						},
					};
					//王基
					lib.skill.jinqu = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							player: 'phaseJieshuBegin',
						},
						check(event, player) {
							return (
								player.getHistory('custom', function (evt) {
									return evt.qizhi == true;
								}).length >= player.countCards('h')
							);
						},
						prompt(event, player) {
							var num = player.getHistory('custom', function (evt) {
								return evt.qizhi == true;
							}).length;
							return '进趋:是否摸' + get.cnNumber(Math.min(5, num)) + '张牌并将手牌弃置至' + get.cnNumber(num) + '张？';
						},
						content() {
							'step 0';
							var mp = player.getHistory('custom', function (evt) {
								return evt.qizhi == true;
							}).length;
							if (mp > 0) {
								player.draw(Math.min(5, mp));
							}
							('step 1');
							var dh =
								player.countCards('h') -
								player.getHistory('custom', function (evt) {
									return evt.qizhi == true;
								}).length;
							if (dh > 0) {
								player.chooseToDiscard(dh, true);
							}
						},
						ai: {
							combo: 'qizhi',
						},
					};
					lib.translate.jinqu_info = '结束阶段开始时,你可以摸X张牌且X至多为5,若如此做,你将手牌弃置至X张.(X为你于此回合发动过〖奇制〗的次数)';
					//夏侯霸
					if (lib.character.xiahouba) lib.character.xiahouba[2] = '3/4';
					lib.skill.baobian = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							player: ['phaseBefore', 'changeHp'],
						},
						forced: true,
						popup: false,
						init(player) {
							if (game.online) return;
							player.removeAdditionalSkill('baobian');
							var list = [];
							if (player.hp <= 3) {
								list.push('oltiaoxin');
							}
							if (player.hp <= 2) {
								list.push('olpaoxiao');
							}
							if (player.hp <= 1) {
								list.push('xinshensu');
							}
							if (list.length) {
								player.addAdditionalSkill('baobian', list);
							}
						},
						derivation: ['oltiaoxin', 'olpaoxiao', 'xinshensu'],
						content() {
							'step 0';
							player.removeAdditionalSkill('baobian');
							var list = [];
							if (player.hp <= 3) {
								list.push('oltiaoxin');
							}
							if (player.hp <= 2) {
								list.push('olpaoxiao');
							}
							if (player.hp <= 1) {
								list.push('xinshensu');
							}
							if (list.length) {
								player.addAdditionalSkill('baobian', list);
							}
							('step 1');
							if (trigger.name == 'changeHp') player.draw();
						},
						ai: {
							maixie: true,
							effect: {
								target(card, player, target) {
									if (get.tag(card, 'damage')) {
										if (!target.hasFriend()) return;
										if (target.hp >= 4) return [0, 1];
									}
									if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1 && target == player) return [0, 0];
								},
							},
						},
					};
					lib.translate.baobian_info = '锁定技,若你的体力值为3或更少,你视为拥有技能〖挑衅〗;若你的体力值为2或更少;你视为拥有技能〖咆哮〗;若你的体力值为1,你视为拥有技能〖神速〗.锁定技,当你体力变化时,你摸一张牌.';
					//张郃
					lib.skill.qiaobian4 = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							player: 'phaseDiscardBefore',
						},
						forced: true,
						filter(event, player) {
							return player.countCards('h') > 0;
						},
						content() {
							'step 0';
							var discard = player.countCards('h') > player.hp;
							var next = player.chooseToDiscard(get.prompt('qiaobian4'), '弃置一张手牌跳过弃牌阶段并摸一张牌');
							next.setHiddenSkill('qiaobian');
							next.ai = function (card) {
								if (discard) {
									return 100 - get.useful(card);
								} else {
									return -1;
								}
							};
							('step 1');
							if (result.bool) {
								trigger.cancel();
								player.draw();
							}
						},
					};
					lib.translate.qiaobian_info = '你可以弃置一张手牌并跳过自己的一个阶段(准备阶段和结束阶段除外);若你以此法跳过了摸牌阶段,则你可以获得至多两名其他角色的各一张手牌;若你以此法跳过了出牌阶段,则你可以移动场上的一张牌;若你以此法跳过了弃牌阶段,你摸一张牌.';
					//乐进
					lib.translate.xiaoguo_info = '其他角色的结束阶段开始时,你可以弃置一张基本牌,令该角色选择一项:1.弃置一张装备牌,你摸两张牌;2.受到你对其造成的1点伤害.';
					lib.skill.xiaoguo = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							global: 'phaseJieshuBegin',
						},
						filter(event, player) {
							return (
								event.player.isAlive() &&
								event.player != player &&
								player.countCards('h', function (card) {
									if (_status.connectMode) return true;
									return get.type(card) == 'basic';
								})
							);
						},
						forced: true,
						content() {
							'step 0';
							var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
							if (get.damageEffect(trigger.player, player, player) <= 0) {
								nono = true;
							}
							var next = player.chooseToDiscard(get.prompt('xiaoguo', trigger.player), {
								type: 'basic',
							});
							next.set('ai', function (card) {
								if (_status.event.nono) return 0;
								return 8.5 - get.useful(card);
							});
							next.set('nono', nono);
							('step 1');
							if (result.bool) {
								var nono = get.damageEffect(trigger.player, player, trigger.player) >= 0;
								trigger.player
									.chooseToDiscard('he', '弃置一张装备牌并令' + get.translation(player) + '摸两张牌,或受到一点伤害', {
										type: 'equip',
									})
									.set('ai', function (card) {
										if (_status.event.nono) {
											return 0;
										}
										if (_status.event.player.hp == 1) return 10 - get.value(card);
										return 9 - get.value(card);
									})
									.set('nono', nono);
							} else {
								event.finish();
							}
							('step 2');
							if (result.bool) {
								player.draw(2);
							} else {
								trigger.player.damage();
							}
						},
						ai: {
							expose: 0.3,
							threaten: 1.3,
						},
					};
					//于禁
					if (lib.character.yujin) lib.character.yujin[3].push('zhenjun');
					//界徐庶
					lib.translate.jianyan_info = '出牌阶段限两次,你可以声明一种牌的类别或颜色,并亮出牌库中第一张符合你声明的牌,你令一名男性角色获得此牌';
					lib.skill.jianyan.usable = 2;
					//界甘宁
					lib.translate.fenwei_info = '限定技,当一名角色使用的锦囊牌指定了至少两名角色为目标时,你可以令此牌对其中任意名角色无效,你摸等量的牌.';
					lib.skill.fenwei = {
						audio: 'ext:蒸蒸日上/audio:2',
						audioname: ['heqi'],
						mark: true,
						limited: true,
						trigger: {
							global: 'useCardToPlayered',
						},
						//priority:5,
						filter(event, player) {
							if (event.parent.triggeredTargets3.length > 1) return false;
							if (get.type(event.card) != 'trick') return false;
							if (get.info(event.card).multitarget) return false;
							if (event.targets.length < 2) return false;
							if (player.storage.fenwei) return false;
							return true;
						},
						init(player) {
							player.storage.fenwei = false;
						},
						forced: true,
						content() {
							'step 0';
							player
								.chooseTarget(get.prompt('fenwei'), [1, trigger.targets.length], function (card, player, target) {
									return _status.event.targets.includes(target);
								})
								.set('ai', function (target) {
									var trigger = _status.event.getTrigger();
									if (game.phaseNumber > game.players.length * 2 && trigger.targets.length >= game.players.length - 1 && !trigger.excluded.includes(target)) {
										return -get.effect(target, trigger.card, trigger.player, _status.event.player);
									}
									return -1;
								})
								.set('targets', trigger.targets);
							('step 1');
							if (result.bool) {
								player.awakenSkill('fenwei');
								player.storage.fenwei = true;
								trigger.parent.excluded.addArray(result.targets);
								player.draw(result.targets.length);
							}
						},
						intro: {
							content: 'limited',
						},
					};
					//群黄月英
					lib.translate.jiqiao_info = '出牌阶段开始时,你可以弃置任意张装备牌,亮出牌堆顶三倍数量的牌并获得其中的非装备牌.';
					lib.skill.jiqiao = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							player: 'phaseUseBegin',
						},
						forced: true,
						filter(event, player) {
							return (
								player.countCards('he', {
									type: 'equip',
								}) > 0
							);
						},
						content() {
							'step 0';
							player
								.chooseToDiscard(
									get.prompt2('jiqiao'),
									[
										1,
										player.countCards('he', {
											type: 'equip',
										}),
									],
									'he',
									function (card) {
										return get.type(card) == 'equip';
									}
								)
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
							var tothrow = [];
							if (Array.isArray(event.cards))
								for (var i of event.cards) {
									//QQQ
									if (get.type(i) != 'equip') {
										gained.push(i);
									} else {
										tothrow.push(i);
									}
								}
							player.gain(gained, 'gain2');
							game.cardsDiscard(tothrow);
						},
						ai: {
							threaten: 1.8,
						},
					};
					//曹冲
					if (!config.upgradeCheatAI) {
						lib.translate.chengxiang_info = '每当你受到1点伤害后,你可以亮出牌堆顶的五张牌.获得其中任意数量点数之和不大于13的牌';
						lib.translate.oldchengxiang_info = '每当你受到1点伤害后,你可以亮出牌堆顶的五张牌.获得其中任意数量点数之和不大于12的牌';
						lib.skill.chengxiang = {
							trigger: {
								player: 'damageAfter',
							},
							//direct:true,
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							content() {
								'step 0';
								event.cs = trigger.num;
								('step 1');
								event.cards = get.cards(5);
								game.cardsGotoOrdering(event.cards);
								event.videoId = lib.status.videoId++;
								game.broadcastAll(
									function (player, id, cards, num) {
										var str;
										if (player == game.me && !_status.auto) {
											str = '称象:选择任意张点数不大于' + num + '的牌';
										} else {
											str = '称象';
										}
										var dialog = ui.create.dialog(str, cards);
										dialog.videoId = id;
									},
									player,
									event.videoId,
									event.cards,
									event.name == 'chengxiang' ? 13 : 12
								);
								event.time = get.utc();
								game.addVideo('showCards', player, ['称象', get.cardsInfo(event.cards)]);
								game.addVideo('delay', null, 2);
								event.cs--;
								('step 2');
								var next = player.chooseButton([0, 5]);
								next.set('dialog', event.videoId);
								next.set('filterButton', function (button) {
									var num = 0;
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										num += ui.selected.buttons[i].link.number;
									}
									return num + button.link.number <= _status.event.maxNum;
								});
								next.set('maxNum', event.name == 'chengxiang' ? 13 : 12);
								next.set('ai', function (button) {
									return get.value(button.link, _status.event.player);
								});
								('step 3');
								if (result.bool && result.links) {
									var cards2 = [];
									for (var i of result.links) {
										cards2.push(i);
										cards.remove(i);
									}
									event.cards2 = cards2;
								} else {
									event.finish();
								}
								var time = 1000 - (get.utc() - event.time);
								if (time > 0) {
								}
								('step 4');
								game.broadcastAll('closeDialog', event.videoId);
								var cards2 = event.cards2;
								player.gain(cards2, 'log', 'gain2');
								('step 5');
								if (event.cs > 0) {
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
											if (target.hp >= 4) return [1, 2];
											if (target.hp == 3) return [1, 1.5];
											if (target.hp == 2) return [1, 0.5];
										}
									},
								},
							},
						};
					}
					//臧霸
					lib.skill.rehengjiang2 = {
						mark: true,
						charlotte: true,
						intro: {
							content: '进攻距离和手牌上限均-#',
						},
						mod: {
							globalFrom(from, to, distance) {
								if (from.storage.rehengjiang2) return distance + from.storage.rehengjiang2;
							},
							maxHandcard(player, num) {
								return num - player.storage.rehengjiang2;
							},
						},
					};
					lib.skill.rehengjiang3 = {
						audio: 'hengjiang',
						trigger: {
							global: 'phaseEnd',
						},
						forced: true,
						charlotte: true,
						filter(event, player) {
							if (!event.player.countMark('rehengjiang2')) return false;
							if (
								event.player.hasHistory('lose', function (evt) {
									return evt.type == 'discard' && evt.cards2.length && evt.getParent('phaseDiscard').player == event.player;
								})
							)
								return false;
							return true;
						},
						logTarget: 'player',
						content() {
							var num = player.getHistory('useSkill', function (evt) {
								return evt.skill == 'rehengjiang' && evt.targets.includes(trigger.player);
							}).length;
							if (num > 0) player.draw(2 * num);
						},
					};
					lib.translate.rehengjiang_info = '当你受到1点伤害后,你可以令当前回合角色本回合的进攻距离和手牌上限-1.若其弃牌阶段内没有弃牌,则你摸2X张牌(X为你本回合内对其发动过〖横江〗的次数).';
					//新大小乔
					lib.skill.new_xingwu = {
						audio: 'xingwu',
						trigger: {
							player: 'phaseDiscardBegin',
						},
						forced: true,
						intro: {
							content: 'expansion',
							markcount: 'expansion',
							onunmark(storage, player) {
								player.removeAdditionalSkill('new_luoyan');
							},
						},
						onremove(player, skill) {
							var cards = player.getExpansions(skill);
							if (cards.length) player.loseToDiscardpile(cards);
						},
						filter(event, player) {
							return player.countCards('he') > 0;
						},
						content() {
							'step 0';
							player
								.chooseCard('he', get.prompt('new_xingwu'), '将一张牌置于武将牌上作为<舞>')
								.set('ai', function (card) {
									if (_status.event.goon) return 20 - get.value(card);
									return 7 - get.value(card);
								})
								.set('goon', player.needsToDiscard() || player.getStorage('new_xingwu').length > 1);
							('step 1');
							if (result.bool) {
								var cards = result.cards;
								player.addToExpansion(cards, player, 'give').gaintag.add('new_xingwu');
								if (player.hasSkill('new_luoyan')) player.addAdditionalSkill('new_luoyan', ['oltianxiang', 'liuli']);
							} else event.finish();
							('step 2');
							var choices = [];
							event.addIndex = 0;
							if (player.getExpansions('new_xingwu').length > 2) {
								choices.push('将三张<星舞>牌置入弃牌堆');
							} else event.addIndex++;
							if (
								player.countCards('h', function (card) {
									return lib.filter.cardDiscardable(card, player, 'new_xingwu');
								}) > 1
							)
								choices.push('弃置两张手牌并将武将牌翻面');
							if (choices.length) {
								player
									.chooseControl('cancel2')
									.set('prompt', '星舞:是否发射核弹？')
									.set('choiceList', choices)
									.set('ai', function () {
										var player = _status.event.player;
										if (player.getExpansions('new_xingwu').length > 2) return 0;
										if (player.isTurnedOver() || player.identity == 'fan' || player.getEnemies().length == 1) return 0;
										return 'cancel2';
									});
							} else event.finish();
							('step 3');
							if (result.control != 'cancel2') {
								var num = result.index + event.addIndex;
								if (num == 1) {
									event.goto(5);
									return;
								}
								if (player.getExpansions('new_xingwu').length > 3) player.chooseButton(['请选择要移去的<星舞>牌', player.getExpansions('new_xingwu')], 3, true);
								else
									event._result = {
										bool: true,
										links: player.getExpansions('new_xingwu').slice(0),
									};
							} else event.finish();
							('step 4');
							if (result.bool && result.links && result.links.length == 3) {
								var cards = result.links;
								player.loseToDiscardpile(cards);
								event.goto(6);
							} else event.finish();
							('step 5');
							player.chooseToDiscard(true, 'h', 2);
							player.turnOver();
							('step 6');
							player.chooseTarget('请选择【星舞】的目标', '弃置其装备区内的所有牌和三张手牌.对其造成两点伤害(目标为女性角色则改为1点)', true, lib.filter.notMe).set('ai', function (target) {
								return (
									-get.attitude(_status.event.player, target) *
									Math.sqrt(
										4 +
										target.countCards('e', function (card) {
											return get.value(card, target) > 0;
										})
									) *
									(target.hasSex('female') ? 1 : 2)
								);
							});
							('step 7');
							if (result.bool && result.targets && result.targets.length) {
								var target = result.targets[0];
								player.line(target, 'green');
								var num = target.countCards('e');
								if (num > 0) player.discardPlayerCard(target, 'e', num, true);
								player.discardPlayerCard(target, 'h', 3, true);
								target.damage(target.hasSex('female') ? 1 : 2);
							}
						},
						ai: {
							threaten: 1.75,
						},
					};
					lib.translate.new_xingwu_info = '弃牌阶段开始时,你可以将一张牌置于武将牌上,称为<舞>.你可以选择一项:①将三张<舞>置入弃牌堆;②弃置两张手牌并将武将牌翻面.若如此做,你选择一名角色,该角色弃置其装备区的所有牌和三张手牌并受到2点伤害(若为女性,则改为1点).';
					//魏国关羽
					if (lib.character.jsp_guanyu) lib.character.jsp_guanyu[2] = '4/5';
					//伏完
					lib.translate.moukui_info = '当你使用【杀】指定目标后,你可以选择一项:摸两张牌,或弃置其两张牌.若如此做,当此【杀】被【闪】抵消时,目标角色弃置你的两张牌.每回合限三次. ';
					lib.skill.moukui = {
						trigger: {
							player: 'useCardToPlayered',
						},
						forced: true,
						filter(event, player) {
							return event.card.name == 'sha';
						},
						audio: 'ext:蒸蒸日上/audio:2',
						usable: 3,
						content() {
							'step 0';
							var controls = ['draw_card'];
							if (trigger.target.countCards('he')) {
								controls.push('discard_card');
							}
							controls.push('cancel');
							player
								.chooseControl(controls)
								.set('ai', function () {
									var trigger = _status.event.getTrigger();
									if (trigger.target.countCards('he') && get.attitude(_status.event.player, trigger.target) < 0) {
										return 'discard_card';
									} else {
										return 'draw_card';
									}
								})
								.set('prompt', get.prompt2('moukui'));
							('step 1');
							if (result.control == 'draw_card') {
								player.draw(2);
							} else if (result.control == 'discard_card' && trigger.target.countCards('he')) {
								player.discardPlayerCard(trigger.target, 'he', 2, true);
							} else event.finish();
							('step 2');
							player.addTempSkill('moukui2', 'shaEnd');
						},
						ai: {
							expose: 0.1,
						},
					};
					lib.skill.moukui2 = {
						trigger: {
							player: 'shaMiss',
						},
						forced: true,
						filter(event, player) {
							return player.countCards('he') > 0;
						},
						content() {
							trigger.target.discardPlayerCard(player, 2, true);
						},
					};
					//徐晃
					lib.translate.jiezi_info = '锁定技,其他角色跳过摸牌阶段后,你摸两张牌.';
					lib.skill.jiezi = {
						trigger: {
							global: ['phaseDrawSkipped', 'phaseDrawCancelled'],
						},
						audio: 'ext:蒸蒸日上/audio:2',
						forced: true,
						filter(event, player) {
							return event.player != player;
						},
						content() {
							player.draw(2);
						},
					};
					//马忠
					lib.translate.fuman_info = '出牌阶段每名角色限一次,你可以将一张手牌交给一名其他角色并标记为<抚蛮>且<抚蛮>牌的牌名视为【杀】.当一名角色使用<抚蛮>牌结算结束后,你摸一张牌.若此牌造成过伤害,则改为摸三张牌.';
					lib.skill.fuman.subSkill.draw.content = function () {
						player.draw(
							trigger.player.hasHistory('sourceDamage', function (evt) {
								return evt.card == trigger.card;
							})
								? 3
								: 1
						);
					};
					//神赵云
					lib.translate.xinjuejing_info = '锁定技,你的手牌上限+2;当你进入或脱离濒死状态时,你摸一张牌,若你的手牌是全场最少(或之一)或你体力值小于0,改为你摸两张牌.';
					lib.skill.xinjuejing = {
						mod: {
							maxHandcard(player, num) {
								return 2 + num;
							},
						},
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							player: ['dying', 'dyingAfter'],
						},
						forced: true,
						content() {
							if (player.isMinHandcard() || player.hp < 0) {
								player.draw(2);
							} else {
								player.draw();
							}
						},
					};
					//神周瑜
					lib.skill.qinyin = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							player: 'phaseDiscardEnd',
						},
						forced: true,
						filter(event, player) {
							var cards = [];
							player.getHistory('lose', function (evt) {
								if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2);
							});
							return cards.length;
						},
						content() {
							'step 0';
							event.forceDie = true;
							if (typeof event.count != 'number') {
								// event.count=trigger.cards.length-1;
								event.count = 1;
							}
							var recover = 0,
								lose = 0,
								players = game.filterPlayer();
							for (var i = 0; i < players.length; i++) {
								if (players[i].hp < players[i].maxHp) {
									if (get.attitude(player, players[i]) > 0) {
										if (players[i].hp < 2) {
											lose--;
											recover += 0.5;
										}
										lose--;
										recover++;
									} else if (get.attitude(player, players[i]) < 0) {
										if (players[i].hp < 2) {
											lose++;
											recover -= 0.5;
										}
										lose++;
										recover--;
									}
								} else {
									if (get.attitude(player, players[i]) > 0) {
										lose--;
									} else if (get.attitude(player, players[i]) < 0) {
										lose++;
									}
								}
							}
							var prompt = get.prompt('qinyin') + '(剩余' + get.cnNumber(event.count) + '次)';
							player.chooseControl('失去体力', '回复体力', 'cancel2', ui.create.dialog(get.prompt('qinyin'), 'hidden')).ai = function () {
								if (lose > recover && lose > 0) return 0;
								if (lose < recover && recover > 0) return 1;
								return 2;
							};
							('step 1');
							if (result.control == 'cancel2') {
								event.finish();
							} else {
								event.bool = result.control == '回复体力';
								event.num = 0;
								event.players = game.filterPlayer();
							}
							('step 2');
							if (event.num < event.players.length) {
								var target = event.players[event.num];
								if (event.bool) {
									target.recover();
									target.draw(2);
									target.chooseToDiscard('he', true);
								} else {
									target.loseHp();
									target.chooseToDiscard('he', true);
								}
								event.num++;
								event.redo();
							}
							('step 3');
							if (event.count > 1) {
								event.count--;
								event.goto(0);
							}
						},
						ai: {
							expose: 0.1,
							threaten: 2.2,
						},
					};
					lib.translate.qinyin_info = '弃牌阶段结束时,若你于此阶段内弃置过牌,则你可以选择一项:1. 令所有角色各回复1点体力并摸两张牌,弃置一张牌;2. 令所有角色各失去1点体力并弃置一张牌.';
					//神刘备
					if (lib.character.shen_liubei) lib.character.shen_liubei[2] = 8;
					//神吕布
					lib.translate.wumou_info = '锁定技,当你使用普通锦囊牌时,你选择一项:1.弃置1枚<暴怒>标记;2.受到1点伤害.';
					lib.translate.ol_shenfen_info = '出牌阶段限一次,你可以弃置6枚<暴怒>标记并选择所有其他角色,对这些角色各造成1点伤害.这些角色先各弃置其装备区里的牌,再各弃置四张手牌(没有手牌则受到你的1点伤害).最后你将你的武将牌翻面.';
					lib.skill.ol_shenfen = {
						audio: 'ext:蒸蒸日上/audio:2',
						enable: 'phaseUse',
						filter(event, player) {
							return player.countMark('baonu') >= 6;
						},
						usable: 1,
						content() {
							'step 0';
							player.removeMark('baonu', 6);
							event.targets = game.filterPlayer();
							event.targets.remove(player);
							event.targets.sort(lib.sort.seat);
							player.line(event.targets, 'green');
							event.targets2 = event.targets.slice(0);
							event.targets3 = event.targets.slice(0);
							('step 1');
							if (event.targets2.length) {
								event.targets2.shift().damage('nocard');
								event.redo();
							}
							('step 2');
							if (event.targets.length) {
								event.current = event.targets.shift();
								event.current.discard(event.current.getCards('e')).delay = false;
							}
							('step 3');
							if (event.targets.length) event.goto(2);
							('step 4');
							if (event.targets3.length) {
								var target = event.targets3.shift();
								if (target.countCards('h') < 1) target.damage('nocard');
								target.chooseToDiscard(4, 'h', true).delay = false;
							}
							('step 5');
							if (event.targets3.length) event.goto(4);
							('step 6');
							player.turnOver();
						},
						ai: {
							combo: 'baonu',
							order: 10,
							result: {
								player(player) {
									return game.countPlayer(function (current) {
										if (current != player) {
											return get.sgn(get.damageEffect(current, player, player));
										}
									});
								},
							},
						},
					};
					lib.skill.wumou = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							player: 'useCard',
						},
						forced: true,
						filter(event, player) {
							return get.type(event.card) == 'trick';
						},
						content() {
							'step 0';
							if (player.hasMark('baonu')) {
								player.chooseControlList(['移去1枚【暴怒】标记', '受到1点伤害'], true).set('ai', function (event, player) {
									if (player.storage.baonu > 6) return 0;
									if (player.hp + player.countCards('h', 'tao') > 3) return 1;
									return 0;
								});
							} else {
								player.damage('nosource');
								event.finish();
							}
							('step 1');
							if (result.index == 0) {
								player.removeMark('baonu', 1);
							} else {
								player.damage('nosource');
							}
						},
						ai: {
							effect: {
								player_use(card, player) {
									if (get.type(card) == 'trick' && get.value(card) < 6) {
										return [0, -2];
									}
								},
							},
						},
					};
					//神左慈
					lib.skill.huanhua = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							global: 'gameDrawAfter',
						},
						forced: true,
						charlotte: true,
						content() {
							var tl = 0;
							for (var i of game.players) {
								if (i == player) continue;
								tl += i.maxHp * 2;
								if (!i.name || !lib.character[i.name]) continue;
								var skills = lib.character[i.name][3];
								for (var j = 0; j < skills.length; j++) {
									if (!lib.skill[skills[j]].forceunique) {
										player.addSkill(skills[j]);
									}
								}
							}
							var tlz = tl;
							player.maxHp = Math.max(25, tlz);
							player.hp = player.maxHp;
							player.update();
						},
						group: ['huanhua3', 'huanhua4', 'huanhua5'],
						ai: {
							threaten: 0.8,
							effect: {
								target(card) {
									if (card.name == 'bingliang') return 0;
								},
							},
						},
					};
					lib.skill.huanhua2 = {
						trigger: {
							player: 'phaseDrawBefore',
						},
						_priority: 10,
						forced: true,
						popup: false,
						charlotte: true,
						check() {
							return false;
						},
						content() {
							trigger.cancel();
						},
					};
					lib.skill.huanhua3 = {
						trigger: {
							global: 'drawAfter',
						},
						forced: true,
						charlotte: true,
						filter(event, player) {
							return event.player != player;
						},
						content() {
							player.draw(trigger.num);
						},
					};
					lib.skill.huanhua4 = {
						trigger: {
							global: 'discardAfter',
						},
						forced: true,
						charlotte: true,
						filter(event, player) {
							return event.player != player;
						},
						content() {
							player.chooseToDiscard(trigger.cards.length, true);
						},
					};
					lib.skill.huanhua5 = {
						trigger: {
							global: 'recoverEnd',
						},
						forced: true,
						charlotte: true,
						filter(event, player) {
							return event.player != player;
						},
						onremove(player) {
							if (get.mode() == 'boss') game.over(false);
						},
						content() {
							'step 0';
							player.recover(Math.max(1, trigger.num));
							player.draw();
							('step 1');
							if (player.isTurnedOver()) player.turnOver(false);
							if (player.isLinked()) player.link(false);
							if (player.getCards('j')) player.discard(player.getCards('j').randomGet());
						},
					};
					lib.translate.huanhua = '幻化';
					lib.translate.huanhua_info = '锁定技,游戏开始时,你获得其他角色的所有技能,体力上限变为其他角色之和的两倍且至少为25;你跳过摸牌阶段.其他角色摸牌后,你摸等量的牌;其他角色弃牌后,你弃置等量的手牌;其他角色回复体力时,你回复等量的体力并摸一张牌,你复原武将牌并随机弃置判定区里的一张牌';
					lib.translate.olzhiti_info = '锁定技,你攻击范围内已受伤角色的手牌上限-2.若场上已受伤的角色数:不小于1,你的手牌上限+2;不小于3,你于摸牌阶段开始时令额定摸牌数+2;不小于5,回合结束时,你废除一名角色的一个随机装备栏.';
					lib.skill.olzhiti = {
						audio: 'drlt_zhiti',
						global: 'olzhiti2',
						mod: {
							maxHandcard(player, num) {
								if (
									game.hasPlayer(function (current) {
										return current.isDamaged();
									})
								)
									return num + 2;
							},
						},
						trigger: {
							player: ['phaseDrawBegin2', 'phaseEnd'],
						},
						forced: true,
						filter(event, player) {
							var num = event.name == 'phase' ? 5 : 3;
							if (
								num == 3
									? event.numFixed
									: !game.hasPlayer(function (current) {
										return current.countDisabled() < 5;
									})
							)
								return false;
							return (
								game.countPlayer(function (current) {
									return current.isDamaged();
								}) >= num
							);
						},
						forced: true,
						content() {
							'step 0';
							if (trigger.name == 'phaseDraw') {
								trigger.num += 2;
								event.finish();
							} else {
								player
									.chooseTarget(get.prompt('olzhiti'), '废除一名角色的一个随机装备栏', function (card, player, target) {
										return target.countDisabled() < 5;
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target) * (target.countCards('e') + 1);
									});
							}
							('step 1');
							if (result.bool) {
								var target = result.targets[0];
								var list = [];
								for (var i = 1; i < 6; i++) {
									if (!target.isDisabled(i)) list.add(i == 3 || i == 4 ? 6 : i);
								}
								var num = list.randomGet();
								if (num != 6) target.disableEquip(num);
								else {
									target.disableEquip(3);
									target.disableEquip(4);
								}
							}
						},
					};
					lib.skill.olzhiti2 = {
						mod: {
							maxHandcard(player, num) {
								if (player.isDamaged())
									return (
										num -
										(game.countPlayer(function (current) {
											return current.hasSkill('olzhiti') && current.inRange(player);
										}) +
											game.countPlayer(function (current) {
												return current.hasSkill('olzhiti') && current.inRange(player);
											}))
									);
							},
						},
					};
					lib.translate.drlt_zhiti_info = '锁定技,你攻击范围内已受伤的其他角色手牌上限-2;当你拼点或【决斗】胜利,或受到伤害后,你回复一个装备栏';
					lib.skill.g_drlt_zhiti = {
						mod: {
							maxHandcard(player, num) {
								if (
									player.maxHp > player.hp &&
									game.countPlayer(function (current) {
										return current != player && current.hasSkill('drlt_zhiti') && current.inRange(player);
									})
								)
									return num - 2;
							},
						},
					};
					//诸葛亮
					lib.translate.qixing_info = '游戏开始时,你将牌堆顶的七张牌扣置于你的武将牌上(当你回复体力时,你将牌堆顶的一张牌扣置于你的武将牌上),称为<星>,你可以用任意张手牌替换等量的<星>;摸牌阶段结束或回合阶段结束时,你可以用任意张手牌替换等量的<星>.';
					lib.translate.kuangfeng_info = '结束阶段,你可以弃置1张<星>并指定一名角色:将其武将牌横置,若其已被横置,你获得其一张牌,直到你的下回合开始,该角色受到火焰伤害时,此伤害+1,其弃置一张牌.';
					lib.translate.dawu_info = '结束阶段,你可以弃置X张<星>并指定等量的角色:这些角色各摸两张牌,直到你的下回合开始,当这些角色受到非雷电伤害时,防止此伤害.';
					lib.skill.qixing = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							global: 'phaseBefore',
							player: ['recoverEnd', 'enterGame'],
						},
						forced: true,
						filter(event, player) {
							return event.name != 'phase' || game.phaseNumber == 0;
						},
						content() {
							'step 0';
							if (trigger.name == 'recover') {
								player.addToExpansion(get.cards(1), 'gain2').gaintag.add('qixing');
							} else {
								player.addToExpansion(get.cards(7), 'gain2').gaintag.add('qixing');
							}
							('step 1');
							var cards = player.getExpansions('qixing');
							if (!cards.length || !player.countCards('h')) {
								event.finish();
								return;
							}
							var next = player.chooseToMove('七星:是否交换<星>和手牌？');
							next.set('list', [
								[get.translation(player) + '(你)的星', cards],
								['手牌区', player.getCards('h')],
							]);
							next.set('filterMove', function (from, to) {
								return typeof to != 'number';
							});
							next.set('processAI', function (list) {
								var player = _status.event.player,
									cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
										return get.useful(a) - get.useful(b);
									}),
									cards2 = cards.splice(0, player.getExpansions('qixing').length);
								return [cards2, cards];
							});
							('step 2');
							if (result.bool) {
								var pushs = result.moved[0],
									gains = result.moved[1];
								pushs.removeArray(player.getExpansions('qixing'));
								gains.removeArray(player.getCards('h'));
								if (!pushs.length || pushs.length != gains.length) return;
								player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('qixing');
								game.log(player, '将', pushs, '作为<星>置于武将牌上');
								player.gain(gains, 'gain2');
							}
						},
						intro: {
							markcount: 'expansion',
							mark(dialog, content, player) {
								var content = player.getExpansions('qixing');
								if (content && content.length) {
									if (player == game.me || player.isUnderControl()) {
										dialog.addAuto(content);
									} else {
										return '共有' + get.cnNumber(content.length) + '张星';
									}
								}
							},
							content(content, player) {
								var content = player.getExpansions('qixing');
								if (content && content.length) {
									if (player == game.me || player.isUnderControl()) {
										return get.translation(content);
									}
									return '共有' + get.cnNumber(content.length) + '张星';
								}
							},
						},
						group: ['qixing2'],
						ai: {
							combo: 'dawu',
						},
					};
					lib.skill.qixing2 = {
						trigger: {
							player: ['phaseDrawAfter', 'phaseEnd'],
						},
						forced: true,
						filter(event, player) {
							return player.getExpansions('qixing').length && player.countCards('h') > 0;
						},
						content() {
							'step 0';
							var cards = player.getExpansions('qixing');
							if (!cards.length || !player.countCards('h')) {
								event.finish();
								return;
							}
							var next = player.chooseToMove('七星:是否交换<星>和手牌？');
							next.set('list', [
								[get.translation(player) + '(你)的星', cards],
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
									cards2 = cards.splice(0, player.getExpansions('qixing').length);
								return [cards2, cards];
							});
							('step 1');
							if (result.bool) {
								var pushs = result.moved[0],
									gains = result.moved[1];
								pushs.removeArray(player.getExpansions('qixing'));
								gains.removeArray(player.getCards('h'));
								if (!pushs.length || pushs.length != gains.length) return;
								player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('qixing');
								game.log(player, '将', pushs, '作为<星>置于武将牌上');
								player.gain(gains, 'gain2');
							}
						},
					};
					lib.skill.dawu = {
						trigger: {
							player: 'phaseJieshuBegin',
						},
						forced: true,
						filter(event, player) {
							return player.getExpansions('qixing').length;
						},
						audio: 'ext:蒸蒸日上/audio:2',
						content() {
							'step 0';
							var num = Math.min(game.countPlayer(), player.getExpansions('qixing').length);
							player
								.chooseTarget(get.prompt('dawu'), '令至多' + get.cnNumber(num) + '名角色获得<大雾>标记', [1, num])
								.set('ai', function (target) {
									if (target.isMin()) return 0;
									if (target.hasSkill('biantian2')) return 0;
									var att = get.attitude(player, target);
									if (att >= 4) {
										if (_status.event.allUse) return att;
										if (target.hp == 1) return att;
										if (target.hp == 2 && target.countCards('he') <= 2) return att * 0.7;
										return 0;
									}
									return -1;
								})
								.set(
									'allUse',
									player.getExpansions('qixing').length >=
									game.countPlayer(function (current) {
										return get.attitude(player, current) > 4;
									}) *
									2
								);
							('step 1');
							if (result.bool) {
								var length = result.targets.length;
								for (var i = 0; i < length; i++) {
									result.targets[i].addSkill('dawu2');
									result.targets[i].draw(2);
								}
								player.chooseCardButton('选择弃置' + get.cnNumber(length) + '张<星>', length, player.getExpansions('qixing'), true);
								player.addSkill('dawu3');
							} else {
								event.finish();
							}
							('step 2');
							player.loseToDiscardpile(result.links);
						},
						ai: {
							combo: 'qixing',
						},
					};
					lib.skill.dawu2 = {
						trigger: {
							player: 'damageBegin4',
						},
						filter(event, player) {
							if (event.nature != 'thunder') return true;
							return false;
						},
						mark: true,
						forced: true,
						charlotte: true,
						content() {
							trigger.cancel();
						},
						ai: {
							nofire: true,
							nodamage: true,
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return [0, 0];
								},
							},
						},
						intro: {
							markcount: () => 1,
							content: '共有1个标记',
						},
					};
					lib.skill.dawu3 = {
						trigger: {
							player: ['phaseBegin', 'dieBegin'],
						},
						silent: true,
						charlotte: true,
						content() {
							for (var i of game.players) {
								if (i.hasSkill('dawu2')) {
									i.removeSkill('dawu2');
								}
								if (i.hasSkill('kuangfeng2')) {
									i.removeSkill('kuangfeng2');
								}
							}
							player.removeSkill('dawu3');
						},
					};
					lib.skill.kuangfeng = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							player: 'phaseJieshuBegin',
						},
						forced: true,
						filter(event, player) {
							return player.getExpansions('qixing').length;
						},
						content() {
							'step 0';
							player.chooseTarget(get.prompt('kuangfeng'), '令一名角色获得<狂风>标记').ai = function (target) {
								return -1;
							};
							('step 1');
							if (result.bool) {
								var length = result.targets.length;
								for (var i = 0; i < length; i++) {
									result.targets[i].addSkill('kuangfeng2');
									if (!result.targets[i].isLinked()) {
										result.targets[i].link();
									} else {
										player.gainPlayerCard('he', true, result.targets[i]);
									}
								}
								player.chooseCardButton('弃置' + get.cnNumber(length) + '枚星', length, player.getExpansions('qixing'), true);
								player.addSkill('dawu3');
							} else {
								event.finish();
							}
							('step 2');
							player.loseToDiscardpile(result.links);
						},
						ai: {
							combo: 'qixing',
						},
					};
					lib.skill.kuangfeng2 = {
						trigger: {
							player: 'damageBegin3',
						},
						filter(event, player) {
							if (event.nature == 'fire') return true;
							return false;
						},
						mark: true,
						intro: {
							markcount: () => 1,
							content: '共有1个标记',
						},
						forced: true,
						content() {
							trigger.num++;
							player.chooseToDiscard('he', true);
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'fireDamage')) return 1.8;
								},
							},
						},
					};
					//陆绩
					lib.skill.nzry_huaiju = {
						marktext: '橘',
						intro: {
							name: '怀橘',
							name2: '橘',
							content: '当前有#个<橘>',
						},
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							global: 'phaseBefore',
							player: 'enterGame',
						},
						forced: true,
						filter(event, player) {
							return event.name != 'phase' || game.phaseNumber == 0;
						},
						content() {
							player.addMark('nzry_huaiju', 5);
							player.addSkill('nzry_huaiju_ai');
						},
						group: ['tachibana_effect'],
					};
					lib.skill.tachibana_effect = {
						audio: 'nzry_huaiju',
						trigger: {
							global: ['damageBegin4', 'phaseDrawBegin2'],
						},
						forced: true,
						filter(event, player) {
							return event.player.hasMark('nzry_huaiju') && (event.name == 'damage' || !event.numFixed);
						},
						content() {
							player.line(trigger.player, 'green');
							if (trigger.name == 'damage') {
								trigger.cancel();
								trigger.player.removeMark('nzry_huaiju', 1);
								trigger.player.draw();
							} else trigger.num++;
						},
					};
					lib.translate.nzry_huaiju_info = '锁定技,游戏开始时,你获得5个<橘>标记.(有<橘>的角色受到伤害时,防止此伤害并摸一张牌,移去一个<橘>;有<橘>的角色摸牌阶段额外摸一张牌)';
					//陈宫
					lib.translate.mingce_info = '出牌阶段,你可以交给一名其他角色一张装备牌或【杀】,令该角色选择一项:1. 视为对其攻击范围内的另一名由你指定的角色使用一张【杀】并令你摸一张牌.2. 摸两张牌.每回合限两次.';
					lib.skill.mingce = {
						enable: 'phaseUse',
						usable: 2,
						audio: 'ext:蒸蒸日上/audio:2',
						position: 'he',
						filterCard(card) {
							return card.name == 'sha' || get.type(card) == 'equip';
						},
						filter(event, player) {
							return (
								player.countCards('h', 'sha') > 0 ||
								player.countCards('he', {
									type: 'equip',
								}) > 0
							);
						},
						check(card) {
							return 8 - get.value(card);
						},
						selectTarget: 2,
						multitarget: true,
						discard: false,
						lose: false,
						targetprompt: ['得到牌', '出杀目标'],
						filterTarget(card, player, target) {
							if (ui.selected.targets.length == 0) {
								return player != target;
							} else {
								return ui.selected.targets[0].inRange(target);
							}
						},
						delay: false,
						content() {
							'step 0';
							targets[0].gain(cards, player, 'give');
							('step 1');
							if (
								!lib.filter.filterTarget(
									{
										name: 'sha',
									},
									targets[0],
									targets[1]
								)
							)
								event._result = {
									control: 'draw_card',
								};
							else
								targets[0]
									.chooseControl('draw_card', '出杀', function () {
										var player = _status.event.player;
										var target = _status.event.target;
										if (
											get.effect(
												_status.event.target,
												{
													name: 'sha',
												},
												player,
												player
											) > 0
										) {
											return 1;
										}
										return 0;
									})
									.set('target', targets[1])
									.set('prompt', '对' + get.translation(targets[1]) + '使用一张【杀】并令' + get.translation(player) + '摸一张牌,或摸两张牌');
							('step 2');
							if (result.control == 'draw_card') {
								targets[0].draw(2);
							} else {
								targets[0].useCard(
									{
										name: 'sha',
									},
									targets[1]
								);
								player.draw();
							}
						},
						ai: {
							result: {
								player(player) {
									var players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (players[i] != player && get.attitude(player, players[i]) > 1 && get.attitude(players[i], player) > 1) {
											return 1;
										}
									}
									return 0;
								},
								target(player, target) {
									if (ui.selected.targets.length) {
										return -0.1;
									}
									return 1;
								},
							},
							order: 8.5,
							expose: 0.2,
						},
					};
					//刘谌
					lib.translate.zhanjue_info = '出牌阶段,你可以将所有手牌当作【决斗】使用.此【决斗】结算后,你与以此法受到伤害的角色各摸一张牌.若你在同一阶段内以此法摸了四张或更多的牌,则此技能失效直到回合结束';
					lib.skill.zhanjue.filter = function (event, player) {
						if (player.getStat().skill.zhanjue_draw && player.getStat().skill.zhanjue_draw >= 4) return false;
						var hs = player.getCards('h');
						if (!hs.length) return false;
						for (var i = 0; i < hs.length; i++) {
							var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
							if (mod2 === false) return false;
						}
						return true;
					};
					lib.translate.shelie_info = '摸牌阶段,你可以改为从牌堆顶亮出5+X张牌(X为存活势力数),选择获得不同花色的牌各一张.';
					lib.translate.gongxin_gain = '获得之';
					lib.translate.gongxin_info = '出牌阶段限一次,你可以观看一名其他角色的手牌,并可以展示其中一张♥️️牌,你获得之或置于牌堆顶.';
					lib.skill.shelie = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							player: 'phaseDrawBegin1',
						},
						filter(event, player) {
							return !event.numFixed;
						},
						content() {
							'step 0';
							trigger.changeToZero();
							var zs = game.countGroup();
							event.cards = get.cards(5 + zs);
							game.cardsGotoOrdering(event.cards);
							event.videoId = lib.status.videoId++;
							game.broadcastAll(
								function (player, id, cards) {
									var str;
									if (player == game.me && !_status.auto) {
										str = '涉猎:获取花色各不相同的牌';
									} else {
										str = '涉猎';
									}
									var dialog = ui.create.dialog(str, cards);
									dialog.videoId = id;
								},
								player,
								event.videoId,
								event.cards
							);
							event.time = get.utc();
							game.addVideo('showCards', player, ['涉猎', get.cardsInfo(event.cards)]);
							game.addVideo('delay', null, 2);
							('step 1');
							var next = player.chooseButton([0, 5], true);
							next.set('dialog', event.videoId);
							next.set('filterButton', function (button) {
								for (var i = 0; i < ui.selected.buttons.length; i++) {
									if (ui.selected.buttons[i].link.suit == button.link.suit) return false;
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
							threaten: 1.3,
						},
					};
					lib.skill.gongxin = {
						audio: 'ext:蒸蒸日上/audio:2',
						audioname: ['re_lvmeng', 'gexuan'],
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
								player.chooseControl('gongxin_gain', 'gongxin_top');
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
							if (result.control == 'gongxin_top') {
								player.showCards(card, '置于牌堆顶');
								target.lose(card, ui.cardPile, 'insert', 'visible');
								game.log(player, '将', event.card, '置于牌堆顶');
							} else {
								player.gain(card, 'gain2');
								//			target.discard(card);
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
					};
				});
			}
			//身份()————————————————————————————
			if (config.upgradeInherit) {
				lib.skill._upgradeInherit = {
					mode: ['identity'],
					forced: true,
					_priority: 1,
					trigger: {
						player: 'dieBegin',
					},
					filter(event, player) {
						return (
							get.mode() == 'identity' &&
							get.population('fan') > 1 &&
							game.hasPlayer(function (current) {
								return current != player && current.identity == 'zhong';
							}) &&
							player.identity == 'zhu'
						);
					},
					content() {
						'step 0';
						var zc = [];
						var players = game.filterPlayer();
						for (var i = 0; i < players.length; i++) {
							if (players[i].identity == 'zhong') zc.add(players[i]);
						}
						var zc2 = zc.randomGet();
						player.line(zc2, 'thunder');
						game.zhu = zc2;
						zc2.identity = 'zhu';
						player.identity = 'zhong';
						player.showIdentity();
						zc2.showIdentity();
						zc3 = zc2;
						('step 1');
						if (player.countCards('he') > 0) {
							event.cards = player.getCards('he');
							game.cardsGotoOrdering(event.cards);
							event.videoId = lib.status.videoId++;
							game.broadcastAll(
								function (zc3, id, cards) {
									var str;
									if (zc3 == game.me && !_status.auto) {
										str = '继承遗产:选择获取最多3张牌';
									} else {
										str = '继承遗产';
									}
									var dialog = ui.create.dialog(str, cards);
									dialog.videoId = id;
								},
								player,
								event.videoId,
								event.cards
							);
							event.time = get.utc();
							game.addVideo('showCards', player, ['继承', get.cardsInfo(event.cards)]);
							game.addVideo('delay', null, 2);
						} else {
							game.log(player, '临死前传位给', zc3);
							game.log(zc3, '继承了', player, '的身份牌成为了新', '#g主公');
							event.finish();
						}
						('step 2');
						var next = zc3.chooseButton([0, 3], true);
						next.set('dialog', event.videoId);
						next.set('filterButton', function (button) {
							return true;
						});
						next.set('ai', function (button) {
							return get.value(button.link, _status.event.player);
						});
						('step 3');
						if (result.bool && result.links) {
							event.cards2 = result.links;
						} else {
							event.finish();
						}
						var time = 1000 - (get.utc() - event.time);
						if (time > 0) {
						}
						('step 4');
						game.broadcastAll('closeDialog', event.videoId);
						var cards2 = event.cards2;
						zc3.gain(cards2, 'log', 'gain2');
						game.log(player, '临死前传位给', zc3);
						game.log(zc3, '继承了', player, '的身份牌成为了新', '#g主公');
					},
				};
			}
			if (config.upgradeClass != '0' && get.mode() == 'boss') {
				lib.arenaReady.push(function () {
					lib.skill._upgrade_Class = {
						silent: true,
						trigger: {
							global: 'gameStart',
							player: 'phaseDrawBegin2',
						},
						forced: true,
						_priority: 999,
						filter(event, player) {
							if (event.name != 'phaseDraw') return true;
							return parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 && !event.numFixed;
						},
						content() {
							if (trigger.name != 'phaseDraw') {
								var xl = parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 1 ? 1 : 2;
								var xz = player.identity == 'cai' ? xl : xl * player.maxHp;
								player.maxHp += xz;
								player.hp += xz;
								player.update();
								player.gain(get.cards(parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 1 ? 1 : 2))._triggered = null;
								var card = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								if (card && player.countCards('e') == 0) {
									player.equip(card);
								}
								if (parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 && player == game.boss) {
									var eCards = [];
									for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
										if (get.type(ui.cardPile.childNodes[i]) == 'equip') {
											eCards.push(ui.cardPile.childNodes[i]);
										}
									}
									var eq = eCards.randomGets(5);
									for (var e = 0; e < eq.length; e++) {
										if (!player.isEmpty(get.subtype(eq[e]))) {
											continue;
										}
										player.equip(eq[e]);
									}
									if (game.me != game.boss) {
										if (game.bossinfo && game.bossinfo.loopType != 2 && Math.random() <= 0.01 + new Date().getHours() / 100) {
											game.bossinfo.loopType = 2;
											game.log('#gBOSS已突破五阶');
											game.boss.popup('突破五阶');
										}
									}
								}
								if (parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 && player.identity == 'cai') {
									player.addSkill('upgradeRebirth');
								}
								if (parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 && player.identity != 'cai' && game.me != player) {
									player.addSkill('upgradeRebirthBoss');
								}
							} else {
								trigger.num += player.identity == 'cai' ? 1 : 2;
							}
						},
						mod: {
							cardUsable(card, player, num) {
								if (card.name == 'sha' && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) >= 1) return (num += player.identity == 'cai' ? 1 : 2);
							},
						},
					};
					lib.skill._upgrade_Class1 = {
						silent: true,
						trigger: {
							global: 'gameStart',
							player: 'phaseDrawBegin2',
						},
						forced: true,
						_priority: 9998,
						filter(event, player) {
							if (parseInt(lib.config.extension_蒸蒸日上_upgradeClass1) != 0 && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 && event.name != 'phaseDraw') return true;
							return parseInt(lib.config.extension_蒸蒸日上_upgradeClass1) != 0 && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 && !event.numFixed;
						},
						content() {
							if (trigger.name != 'phaseDraw') {
								var xl = 1;
								var xz = player.identity == 'cai' ? xl : xl * lib.character[player.name][2];
								player.maxHp += xz;
								player.hp += xz;
								player.update();
							} else {
								trigger.num += player.identity == 'cai' ? 1 : Math.random() <= 0.7 ? 2 : 3;
							}
						},
						mod: {
							maxHandcardBase(player, num) {
								if (parseInt(lib.config.extension_蒸蒸日上_upgradeClass1) != 0 && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2) return Math.min(20, num);
							},
							cardUsable(card, player, num) {
								if (card.name == 'sha' && parseInt(lib.config.extension_蒸蒸日上_upgradeClass1) == 1) return (num += player.identity == 'cai' ? 1 : 2);
							},
						},
					};
					lib.skill.upgradePrivilege = {};
					lib.skill._upgrade_Class2 = {
						silent: true,
						trigger: {
							global: 'dieAfter',
						},
						forced: true,
						filter(event, player) {
							if (event.player.identity == 'cai' && player.identity == 'cai') return true;
							return false;
						},
						content() {
							player.draw();
						},
					};
					lib.skill.upgradeRebirthBoss = {
						audio: 'olniepan',
						enable: 'chooseToUse',
						mark: true,
						limited: true,
						charlotte: true,
						init(player) {
							player.storage.upgradeRebirthBoss = false;
						},
						filter(event, player) {
							if (player.storage.upgradeRebirthBoss) return false;
							if (event.type == 'dying') {
								if (player != event.dying) return false;
								return true;
							}
							return false;
						},
						content() {
							'step 0';
							player.removeSkill('upgradeRebirthBoss');
							player.storage.upgradeRebirthBoss = true;
							player.discard(player.getCards('hej'));
							('step 1');
							player.link(false);
							('step 2');
							player.turnOver(false);
							('step 3');
							player.draw(9);
							('step 4');
							if (player.hp < Math.ceil(player.maxHp / 2)) {
								player.recover(Math.ceil(player.maxHp / 2) - player.hp);
							}
						},
						ai: {
							order: 1,
							skillTagFilter(player, arg, target) {
								if (player != target || player.storage.upgradeRebirthBoss) return false;
							},
							save: true,
							result: {
								player(player) {
									if (player.hasSkill('upgradeMo_shenfeng') && player == game.boss && (player.hp > 0 || (game.me != game.boss && game.roundNumber < 71) || (game.me == game.boss && game.roundNumber < 7))) return -100;
									if (player.hp <= 0) return 10;
									if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
									return 0;
								},
							},
							threaten(player, target) {
								if (!target.storage.upgradeRebirthBoss) return 0.6;
							},
						},
						intro: {
							content: 'limited',
						},
					};
					lib.translate.upgradeRebirthBoss = '重生';
					lib.translate.upgradeRebirthBoss_info = '限定技,当你处于濒死状态时,你可以弃置你区域内的所有牌并复原你的武将牌,摸九张牌并将体力回复至体力上限的一半且向上取整.';
					lib.skill.upgradeRebirth = {
						audio: 'niepan',
						enable: 'chooseToUse',
						mark: true,
						limited: true,
						charlotte: true,
						init(player) {
							player.storage.upgradeRebirth = false;
						},
						filter(event, player) {
							if (player.storage.upgradeRebirth) return false;
							if (event.type == 'dying') {
								if (player != event.dying) return false;
								return true;
							}
							return false;
						},
						content() {
							'step 0';
							player.removeSkill('upgradeRebirth');
							player.storage.upgradeRebirth = true;
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
							order: 1,
							skillTagFilter(player, arg, target) {
								if (player != target || player.storage.upgradeRebirth) return false;
							},
							save: true,
							result: {
								player(player) {
									if (player.hp <= 0) return 10;
									if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
									return 0;
								},
							},
							threaten(player, target) {
								if (!target.storage.upgradeRebirth) return 0.6;
							},
						},
						intro: {
							content: 'limited',
						},
					};
					lib.translate.upgradeRebirth = '重生';
					lib.translate.upgradeRebirth_info = '限定技,当你处于濒死状态时,你可以弃置你区域内的所有牌并复原你的武将牌,摸三张牌并将体力回复至3点.';
				});
			}
			if (!config.upgradeClone && config.upgradeSnowball != '0' && (config.upgradeRandomSkills == 'ChooseOne' || config.upgradeRandomSkills == 'off') && (get.mode() == 'guozhan' || get.mode() == 'identity')) {
				if (config.upgradeSnowball == '1') {
					lib.skill._upgrade_Snowball = {
						mode: ['identity', 'guozhan'],
						silent: true,
						trigger: {
							source: 'dieAfter',
						},
						filter(event, player) {
							return (get.mode() == 'guozhan' || get.mode() == 'identity') && event.player != player && ((lib.character[event.player.name] && lib.character[event.player.name][3]) || (lib.character[event.player.name1] && lib.character[event.player.name1][3]) || (lib.character[event.player.name2] && lib.character[event.player.name2][3]));
						},
						forced: true,
						_priority: -999,
						async content(event, trigger, player) {
							let randomName = [];
							const name1 = trigger.player.name;
							const info1 = lib.character[name1];
							const name2 = trigger.player.name2;
							const info2 = lib.character[name2];
							if (name1 && info1?.skills?.length) {
								randomName.push(name1);
							}
							if (name2 && info2?.skills?.length) {
								randomName.push(name2);
							}
							const name = randomName.randomGet();
							if (name) {
								player.line(trigger.player, 'green');
								const skills = lib.character[name].skills;
								for (const i of skills) {
									player.addSkill(i);
									game.log(player, '从', '#y' + name + '', '夺得技能', '【' + get.translation(i) + '】');
								}
							}
						},
					};
				} else {
					lib.skill._upgrade_Snowball = {
						mode: ['identity', 'guozhan'],
						silent: true,
						trigger: {
							source: 'dieAfter',
						},
						filter(event, player) {
							return (get.mode() == 'guozhan' || get.mode() == 'identity') && event.player != player && event.player.skills && event.player.skills.length;
						},
						forced: true,
						_priority: -999,
						content() {
							var skills = trigger.player.skills;
							for (var i = 0; i < skills.length; i++) {
								player.addSkill(skills[i]);
								player.line(trigger.player, 'green');
								game.log(player, '从', '#y' + trigger.player.name + '', '夺得技能', '【' + get.translation(skills[i]) + '】');
							}
						},
					};
				}
			}
			if (get.mode() == 'identity' && (config.upgradeRandomSkills == 'ChooseOne' || config.upgradeRandomSkills == 'off') && config.upgradeClone) {
				lib.skill._upgrade_TJMS = {
					mode: ['identity'],
					silent: true,
					trigger: {
						global: 'gameStart',
					},
					filter(event, player) {
						return get.mode() == 'identity' && game.me != player;
					},
					forced: true,
					_priority: 999,
					content() {
						if (get.config('double_character')) {
							player.init(game.me.name1, game.me.name2);
						} else {
							player.init(game.me.name);
						}
						if (game.zhu == player && game.players.length > 4) {
							var target = player;
							target.hp++;
							target.maxHp++;
							target.update();
						}
					},
				};
			}
			if (config.upgradeRandomSkills == 'ChooseOne' && (get.mode() == 'guozhan' || get.mode() == 'identity')) {
				game.upgradeGetSkillDialog = function (_0x4ab8x1, _0x4ab8x2) {
					var _0x4ab8x3 = ui.create.dialog('hidden', 'forcebutton');
					if (_0x4ab8x2) {
						_0x4ab8x3.addText(_0x4ab8x2);
					}
					for (var i = 0; i < _0x4ab8x1.length; i++) {
						_0x4ab8x3.add('<div class="popup pointerdiv" style="width: 80 %; display: inline - block"><div class="skill">【' + get.translation(_0x4ab8x1[i]) + '】</div><div>' + lib.translate[_0x4ab8x1[i] + '_info'] + '</div></div>');
					}
					_0x4ab8x3.addText(' <br> ');
					return _0x4ab8x3;
				};
				lib.skill._ChooseOneSkills = {
					forced: true,
					_priority: 999,
					trigger: {
						player: 'phaseBefore',
					},
					content() {
						'step 0';
						JNC = ['nzry_chenglve', 'rejunxing', 'oljuanxia', 'new_reluoyi', 'upgrade_tianyi', 'zaiqixx', 'upgrade_longyin', 'upgrade_fengpo', 'upgrade_xinzhan', 'ganlu', 'rejingce', 'xinanguo', 'shiduo', 'yimie', 'xinquanbian', 'huishi', 'ybzhuiji', 'sanchen', 'bolan', 'zhiyan', 'xinfu_xingzhao', 'xuezhao', 'chaofeng', 'mffengshi', 'neifa', 'xinfu_wuniang', 'lirang', 'zhanyi', 'hengzheng', 'mizhao', 'ol_shichou', 'gzjili', 'qingzhongx', 'reanxu', 'reshenxing', 'upgrade_yanyu', 'reqiaomeng', 'rehuaiyi', 'xingongji', 'rewenji', 'qingjiao', 'qizhou', 'ziyuan', 'qiangzhi', 'refenyin', 'jianying', 'miji', 'rejigong', 'jiqiao', 'xinshensu', 'zishu', 'olfengzi', 'remieji', 'oltiaoxin', 'xinfu_zuilun', 'upgrade_jushou2', 'upgrade_wushuang', 'zhanjue', 'wumou', 'reguhuo', 'reguose', 'benghuai', 'qice', 'wangxi', 'upgrade_kuanggu', 'xinfu_lingren', 'xinfu_tushe', 'olpaoxiao', 'yongsi', 'upgrade_tieji', 'redimeng', 'fuhun', 'kurou', 'retuxi', 'upgrade_yinghun', 'upgrade_jiang', 'upgrade_zhiheng', 'relonghun', 'drlt_poxi', 'relianying', 'ollianhuan', 'rejizhi', 'reyingzi', 'reluanji', 'refanjian', 'dujin', 'shelie', 'gongxin', 'rerende', 'recanshi', 'repojun', 'xinliegong', 'rexuanfeng', 'qingnang', 'reguanxing', 'xiaoji', 'upgrade_benxi', 'rebiyue', 'kunfen', 'tairan', 'yanxi', 'upgrade_jiuchi'];
						for (var j in JNC) {
							if (!lib.skill[JNC[j]]) {
								JNC.remove(JNC[j]);
							}
						}
						if (game.me != player) {
							JNC.remove(['benghuai', 'wumou']);
						}
						var JNskills = JNC;
						JNskills.randomSort();
						var list = [];
						for (var i = 0; i < JNskills[i].length; i++) {
							if (!player.skills.includes(JNskills[i])) list.push(JNskills[i]);
							if (list.length == 2) break;
						}
						event.list = list;
						var dialog = game.upgradeGetSkillDialog(event.list, '选择获得一个技能');
						player.chooseControl(event.list).set('ai', function () {
							return 0;
						}).dialog = dialog;
						('step 1');
						event.skill = result.control;
						player.addTempSkill(event.skill);
						player.popup(event.skill);
						game.log(player, '获得技能', '【' + get.translation(event.skill) + '】');
					},
				};
			}
			if (config.upgradeRandomSkills != 'ChooseOne' && config.upgradeRandomSkills != 'off' && (get.mode() == 'guozhan' || get.mode() == 'identity')) {
				lib.arenaReady.push(function () {
					for (var _0x390dx1 in lib.character) {
						lib.character[_0x390dx1][2] = 5;
					}
				});
				lib.skill._upgradeRandomSkills = {
					trigger: {
						global: ['gameStart', 'phaseZhunbeiBefore'],
					},
					forced: true,
					_priority: 1,
					filter(event, player) {
						if ((event.name == 'game' && get.mode() == 'identity' && ((player.name && player.name == 'unknown') || (player.name1 && player.name1 == 'unknown') || (player.name2 && player.name2 == 'unknown') || (player.name2 && lib.character[player.name2][4].includes('hiddenSkill')) || (player.name1 && lib.character[player.name1][4].includes('hiddenSkill')) || (player.name && lib.character[player.name][4].includes('hiddenSkill')))) || (event.name == 'showCharacter' && get.mode() == 'guozhan')) {
							return false;
						}
						return event.name == 'game' || (event.player == _status.roundStart && (1 + game.roundNumber) % 2 == 0 && (get.mode() == 'identity' || get.mode() == 'guozhan'));
					},
					content() {
						'step 0';
						player.restoreSkill(player.awakenedSkills);
						player.removeSkill(player.getSkills());
						player.removeSkill(player.skills);
						('step 1');
						var skills = [];
						var skills2 = [];
						var gj = ['wei', 'shu', 'wu', 'qun', 'jin', 'shen'].randomGet();
						for (var i in lib.character) {
							if (lib.character[i][4].includes('boss')) continue;
							if (lib.character[i][1] != gj) continue;
							if (lib.character[i][4].includes('bossallowed')) continue;
							if (lib.character[i][4].includes('hiddenboss')) continue;
							for (var j = 0; j < lib.character[i][3].length; j++) {
								var info = lib.skill[lib.character[i][3][j]];
								var info2 = lib.translate[lib.character[i][3][j]];
								if (info && info2 && (info.gainable || (!info.unique && !info.locked && !info.mark && !info.zhuSkill && !info.nobracket && !info.fixed && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill))) {
									skills.push(lib.character[i][3][j]);
								}
							}
						}
						var players = game.filterPlayer();
						for (var b = 0; b < players.length; b++) {
							if (players[b] != player) var skills3 = players[b].skills;
							var banned = ['xinfu_guhuo', 'reguhuo', 'jixi', 'duanchang', 'huashen', 'xinsheng', 'rehuashen', 'upgrade_xinsheng', 'upgrade_huashen', 'rexinsheng', 'jinqu', 'nzry_binglve', 'nzry_huaiju', 'nzry_yili', 'nzry_zhenglun', 'nzry_mingren', 'nzry_zhenliang', 'drlt_qingce', 'new_wuhun', 'qixing', 'kuangfeng', 'dawu', 'baonu', 'wumou', 'ol_wuqian', 'ol_shenfen', 'renjie', 'jilue', 'nzry_junlve', 'nzry_dinghuo', 'drlt_duorui', 'chuanxin', 'cunsi', 'jueqing', 'huilei', 'paiyi', 'fuhun', 'zhuiyi', 'olddanshou', 'yanzhu', 'juexiang', 'jiexun', 'bizhuan', 'tongbo', 'xinfu_zhanji', 'xinfu_jijun', 'xinfu_fangtong', 'xinfu_qianchong', 'pdgyinshi', 'shuliang', 'zongkui', 'guju', 'bmcanshi', 'dingpan', 'xinfu_lingren', 'new_luoyan', 'junwei', 'gxlianhua', 'qizhou', 'fenyue', 'dianhu', 'linglong', 'fenxin', 'mouduan', 'cuorui', 'xinmanjuan', 'xinfu_jianjie', 'jianjie_faq', 'new_meibu', 'xinfu_xingzhao', 'jici', 'xianfu', 'fenyong', 'xuehen', 'reyingbing', 'midao', 'yishe', 'yinbing', 'juedi', 'bushi', 'xinfu_dianhua', 'xinfu_falu', 'xinfu_zhenyi', 'lskuizhu', 'pingjian', 'xjshijian', 'fentian', 'zhiri', 'xindan', 'xinzhengnan', 'upgrade_zhengnan', 'xinfu_xiaode', 'komari_xueshang', 'qiaosi_map'];
							skills2.add(skills3);
							skills2.add(banned);
						}
						skills.remove(skills2);
						var link = skills.randomGets(parseInt(lib.config.extension_蒸蒸日上_upgradeRandomSkills)); //QQQ
						player.addSkill(link);
						game.log(player, '获得了技能', '【' + get.translation(link) + '】');
					},
				};
			}
			if (config.upgradeEffectAudio) {
				lib.skill._upgradeEffectAudio2 = {
					trigger: {
						player: 'damageBegin4',
					},
					forced: true,
					silent: true,
					_priority: -1000,
					filter(event, player) {
						if (!event.source || event.num < 1) return false;
						return Math.random() < 0.99;
					},
					content() {
						if (player.sex == 'none') {
							game.playAudio('../extension/蒸蒸日上/audio/none_diaoxue_0');
						}
						if (player.sex == 'female' && trigger.num < 2) {
							game.playAudio('../extension/蒸蒸日上/audio/female_diaoxue_1');
						}
						if (player.sex == 'female' && trigger.num >= 2) {
							game.playAudio('../extension/蒸蒸日上/audio/female_diaoxue_2');
						}
						if (player.sex == 'male' && trigger.num < 2) {
							game.playAudio('../extension/蒸蒸日上/audio/male_diaoxue_1');
						}
						if (player.sex == 'male' && trigger.num >= 2) {
							game.playAudio('../extension/蒸蒸日上/audio/male_diaoxue_2');
						}
					},
				};
				lib.skill._upgradeEffectAudio = {
					trigger: {
						player: 'useCardBegin',
					},
					forced: true,
					silent: true,
					filter(event, player) {
						if (!event.card.nature && event.card.name != 'sha' && event.card.name != 'wanjian' && event.card.name != 'nanman' && event.card.name != 'jiu') return false;
						return true;
					},
					content() {
						if (trigger.card.nature == 'thunder' && trigger.card.name == 'sha') {
							game.playAudio('../extension/蒸蒸日上/audio/leishayinxiao');
						}
						if (trigger.card.nature == 'fire' && trigger.card.name == 'sha') {
							game.playAudio('../extension/蒸蒸日上/audio/huoshayinxiao');
						}
						if (trigger.card.name == 'jiu') {
							game.playAudio('../extension/蒸蒸日上/audio/jiu');
						}
						if (trigger.card.name == 'nanman') {
							game.playAudio('../extension/蒸蒸日上/audio/nanman');
						}
						if (trigger.card.name == 'wanjian') {
							game.playAudio('../extension/蒸蒸日上/audio/wanjian');
						}
					},
				};
			}
			lib.translate.upgrade_tiandu = lib.translate.tiandu;
			lib.translate.upgrade_tiandu_info = lib.translate.tiandu_info;
			lib.translate.upgrade_lijian = lib.translate.lijian;
			lib.translate.upgrade_lijian_info = lib.translate.lijian_info;
			if (config.TLMode != '0' && (get.mode() == 'guozhan' || get.mode() == 'identity')) {
				if (lib.skill.juntun) {
					lib.translate.juntun_info = '锁定技,准备阶段,若X大于1,则你减1点体力上限并摸X张牌(X为你的体力上限且最多为15).';
					lib.skill.juntun.content = function () {
						player.loseMaxHp();
						player.draw(Math.min(15, player.maxHp));
					};
				}
				lib.translate.fenli_info = '若你的手牌数为全场最多,你可以跳过摸牌阶段;若你的体力值为全场最多,你可以跳过出牌阶段;若你的装备区里有牌且数量为全场最多且手牌少于50张,你可以跳过弃牌阶段.';
				lib.skill.fenli.subSkill.discard.filter = function (event, player) {
					return player.isMaxEquip() && player.countCards('e') && player.countCards('h') < 50;
				};
				lib.skill.reshangshi.filter = function (event, player) {
					if (event.getl && !event.getl(player)) return false;
					return player.countCards('h') < Math.min(6, player.getDamagedHp());
				};
				lib.skill.reshangshi.content = function () {
					player.draw(Math.min(6, player.getDamagedHp()) - player.countCards('h'));
				};
				lib.skill.shangshi.filter = function (event, player) {
					return player.countCards('h') < Math.min(6, player.getDamagedHp());
				};
				lib.skill.shangshi.content = function () {
					player.draw(Math.min(6, player.getDamagedHp()) - player.countCards('h'));
				};
				lib.translate.shangshi_info = '当你的手牌数小于X时,你可以将手牌摸至X张(X为你已损失的体力值且最多为6)';
				lib.translate.reshangshi_info = '当你受到伤害时,你可以弃置一张牌.当你的手牌数小于X时,你可以将手牌摸至X张.(X为你已损失的体力值且最多为6)';
				lib.skill._upgradeTLMode = {
					trigger: {
						global: 'gameStart',
						player: 'showCharacterEnd',
					},
					forced: true,
					_priority: -1,
					filter(event, player) {
						if ((event.name == 'game' && get.mode() == 'identity' && ((player.name && player.name == 'unknown') || (player.name1 && player.name1 == 'unknown') || (player.name2 && player.name2 == 'unknown') || (player.name2 && lib.character[player.name2][4].includes('hiddenSkill')) || (player.name1 && lib.character[player.name1][4].includes('hiddenSkill')) || (player.name && lib.character[player.name][4].includes('hiddenSkill')))) || (event.name == 'showCharacter' && get.mode() == 'guozhan')) return false;
						return true;
					},
					content() {
						switch (lib.config.extension_蒸蒸日上_TLMode) {
							case '1':
								var tl = 1;
								break;
							case '2':
								var tl = 2;
								break;
							case '3':
								var tl = 3;
								break;
							case '4':
								var tl = 4;
								break;
							case '5':
								var tl = 5;
								break;
							case '6':
								var tl = 6;
								break;
							case '7':
								var tl = 7;
								break;
							case '8':
								var tl = 8;
								break;
							case '9':
								var tl = 9;
								break;
							case '10':
								var tl = 10;
								break;
							case '11':
								var tl = 11;
								break;
							case '12':
								var tl = 12;
								break;
							case '13':
								var tl = 13;
								break;
							case '15':
								var tl = 15;
								break;
							case '17':
								var tl = player.maxHp;
								break;
							case '19':
								var tl = player.maxHp * 2;
								break;
							case '21':
								var tl = 3 * player.maxHp;
								break;
							case '24':
								var tl = 4 * player.maxHp;
								break;
						}
						player.maxHp += tl;
						player.hp += tl;
						player.update();
					},
				};
			}
			if (config.DrawMode != '0' && (get.mode() == 'guozhan' || get.mode() == 'identity')) {
				lib.skill._upgradeDrawMode = {
					trigger: {
						global: 'gameDrawBegin',
						player: ['phaseDrawBegin2', 'phaseJieshuBefore'],
					},
					forced: true,
					_priority: -999,
					filter(event, player) {
						if (event.name == 'phaseJieshu' && player.countCards('h') < 49) return false;
						return true;
					},
					content() {
						if (trigger.name == 'phaseJieshu') {
							if (player.countDiscardableCards(player, 'h') && player.countCards('h') >= 49) {
								player.discardPlayerCard('h', player.countCards('h') - 24, player, true);
							}
						} else {
							switch (lib.config.extension_蒸蒸日上_DrawMode) {
								case '-1':
									var mp = -1;
									break;
								case '1':
									var mp = 1;
									break;
								case '2':
									var mp = 2;
									break;
								case '3':
									var mp = 3;
									break;
								case '4':
									var mp = 4;
									break;
								case '5':
									var mp = 5;
									break;
								case '6':
									var mp = 6;
									break;
								case '7':
									var mp = 7;
									break;
								case '8':
									var mp = trigger.name == 'gameDraw' ? 2 : trigger.num;
									break;
								case '9':
									var mp = trigger.name == 'gameDraw' ? 3 : 2 * trigger.num;
									break;
							}
							if (trigger.name == 'gameDraw') {
								if (mp > 0) {
									player.gain(get.cards(mp))._triggered = null;
								} else {
									player.gain(get.cards(2))._triggered = null;
								}
							} else {
								trigger.num += Math.min(15, mp);
							}
						}
					},
				};
			}
			if (config.upgradeBGM2) {
				lib.skill.deitiesBGM = {
					onremove(player) {
						player.addSkill('deitiesBGM');
					},
					init(player) {
						if (Math.random() <= 0.5 && ui.backgroundMusic.src != 'extension/蒸蒸日上/audio/deitiesBGM2.mp3') {
							ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/deitiesBGM2.mp3';
							setTimeout(function () {
								if (player.isAlive()) {
									ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/deitiesBGM.mp3';
								}
							}, 299000);
						} else {
							ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/deitiesBGM.mp3';
							setTimeout(function () {
								if (player.isAlive()) {
									ui.backgroundMusic.src = 'extension/蒸蒸日上/audio/deitiesBGM2.mp3';
								}
							}, 275000);
						}
					},
				};
			} else {
				lib.skill.deitiesBGM = {};
			}
			game.upgradeSkillsDialog = function (skills, prompt) {
				var dialog = ui.create.dialog('hidden', 'forcebutton');
				if (prompt) dialog.addText(prompt);
				for (var i = 0; i < skills.length; i++) {
					dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
				}
				dialog.addText(' <br> ');
				return dialog;
			};
			game.addFanFellow = function (_0x66d8x1, _0x66d8x2) {
				var _0x66d8x3 = game.addFellow(_0x66d8x1, _0x66d8x2, 'zoominanim');
				var _0x66d8x4 = lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 1 ? 2 : lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 ? 3 : lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 3 ? 4 : lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 4 ? 5 : 1;
				_0x66d8x3.directgain(get.cards(_0x66d8x4));
				_0x66d8x3.side = false;
				_0x66d8x3.identity = 'cai';
				_0x66d8x3.setIdentity('cai');
				game.addVideo('setIdentity', _0x66d8x3, 'cai');
			};
			//结尾
			lib.arenaReady.push(function () {
				if (get.mode() != 'identity' && lib.skill.upgrade_juejing) {
					lib.translate.upgrade_juejing_info = '锁定技,摸牌阶段开始前,你跳过此阶段.当你获得牌/失去手牌后,若你的手牌数小于7/大于7,则你将手牌摸至7张/弃置至7张.';
				}
				if (get.mode() == 'guozhan' && lib.character.upgradeGD_zhaoyun) {
					lib.character.upgradeGD_zhaoyun[1] = 'ye';
				}
				if (get.mode() != 'identity' && lib.character.upgradeGD_zhaoyun && lib.character.upgradeGD_zhaoyun[3].includes('upgrade_longhun')) {
					lib.character.upgradeGD_zhaoyun[3].remove('upgrade_longhun');
					if (get.mode() != 'identity' && get.mode() != 'guozhan') {
						lib.character.upgradeGD_zhaoyun[3].push('longdan');
					}
				}
				lib.config.forbid.push(['upgrade_shangshi', 'rende'], ['upgrade_lianying', 'rende'], ['upgrade_lianying', 'shenxing'], ['upgrade_lianying', 'reshenxing'], ['upgrade_huashen']);
				//传说
				lib.rank.rarity.legend.addArray(['wang_huaxiong', 'wang_lvbu', 'wang_huatuo', 'wang_caiwenji', 'xian_machao', 'xian_daxiaoqiao', 'wang_liru', 'xian_fuhuanghou', 'wang_panfeng', 'wang_liaohua', 'xian_zhangliao', 'xian_taishici', 'xian_zhenji', 'xian_zhugeke', 'xian_zhouyu', 'wang_diaochan', 'upgrade_sp_caoren', 'upgrade_zuoyou', 'upgrade_jiangwei', 'upgrade_yuji', 'upgradeMo_jiaxu', 'upgrade_Smallkill', 'upgrade_xunyou', 'upgrade_luxun', 'upgradeGD_zhaoyun', 'upgrade_lvbu', 'upgrade_guansuo', 'upgrade_huaxiong', 'upgrade_liru', 'upgrade_jiaxu', 'upgrade_xuzhu', 'upgrade_zhangchunhua', 'upgrade_xusheng', 'upgrade_mayunlu', 'upgrade_wangyi', 'upgrade_sunquan', 'upgrade_pangtong', 'upgrade_weiyan', 'upgrade_wuyi', 'upgrade_machao', 'upgrade_zhonghui', 'upgrade_liaohua', 'upgrade_madai', 'upgrade_huangzhong', 'upgrade_zuoci', 'upgrade_zhangxiu', 'upgrade_jushou', 'upgrade_mateng', 'upgrade_zhouyu', 'upgrade_caiwenji', 'upgrade_caifuren', 'upgrade_lvmeng', 'upgrade_guanyu', 'upgrade_gaoshun', 'upgrade_gongsunzan', 'upgrade_sunce', 'upgrade_sunjian', 'upgrade_sunshangxiang', 'upgrade_lusu', 'upgrade_panfeng', 'upgrade_daqiao', 'upgrade_chengpu', 'upgrade_huanggai', 'upgrade_bulianshi', 'upgrade_xushu', 'upgrade_xiahoushi', 'upgrade_xiaoqiao']);
				//史诗
				lib.rank.rarity.epic.addArray(['upgrade_ganning', 'upgrade_wuguotai', 'upgrade_liushan', 'deitiesUzi', 'upgrade_zhangjiao', 'upgrade_zhangxingcai', 'upgrade_zhangfei', 'upgrade_caopi', 'upgrade_caorui', 'upgrade_caoren', 'upgrade_dengai', 'upgrade_dianwei', 'upgrade_guojia', 'upgrade_handang', 'upgrade_xiahouyuan', 'upgrade_xunyu', 'upgrade_lidian', 'upgrade_zhangliao', 'upgrade_masu', 'upgrade_guanping', 'upgrade_wutugu', 'upgrade_huangyueying', 'upgrade_zhaoyun', 'upgrade_yuanshao', 'upgrade_yuanshu', 'upgrade_fuhuanghou', 'upgrade_huatuo', 'upgrade_diaochan', 'upgrade_zhoutai', 'upgrade_taishici', 'upgrade_zhangzhang', 'upgrade_zhugeliang', 'upgrade_lingcao', 'upgrade_liubei', 'upgrade_xiahoudun']);
				//精品
				lib.rank.rarity.rare.addArray(['upgrade_dongzhuo', 'upgrade_caocao', 'upgrade_caozhang', 'upgrade_simayi', 'upgrade_zhenji', 'upgrade_zhugeliang', 'upgrade_zhurong']);
				if (!lib.element.player.addToExpansion) {
					//钟会
					lib.skill.upgrade_quanji = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							global: 'gainAfter',
							player: ['damageAfter', 'recoverAfter', 'loseHpAfter'],
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'damage') return true;
							if (event.name == 'recover') return true;
							if (event.name == 'loseHp') return true;
							if (player == event.player) return false;
							var evt = event.getl(player);
							return evt && evt.cards2 && evt.cards2.length;
						},
						content() {
							'step 0';
							event.count = trigger.name == 'damage' ? trigger.num : 1;
							('step 1');
							event.count--;
							if (!player.isMaxHandcard()) {
								player.draw(2);
							} else {
								player.draw();
							}
							('step 2');
							var hs = player.getCards('h');
							if (hs.length) {
								if (hs.length == 1)
									event._result = {
										bool: true,
										cards: hs,
									};
								else player.chooseCard('h', true, '选择一张手牌作为<权>');
							} else event.goto(4);
							('step 3');
							if (result.bool && result.cards && result.cards.length) {
								var card = result.cards[0];
								player.lose(card, ui.special, 'toStorage');
								player.markAuto('upgrade_quanji', result.cards);
								game.log(player, '将', card, '置于了武将牌上');
							}
							('step 4');
							if (event.count > 0) {
								player.chooseBool(get.prompt2('upgrade_quanji')).set('frequentSkill', 'upgrade_quanji');
							} else event.finish();
							('step 5');
							if (result.bool) {
								event.goto(1);
							}
						},
						intro: {
							content: 'cards',
							onunmark: 'throw',
						},
						mod: {
							maxHandcard(player, num) {
								return num + player.getStorage('upgrade_quanji').length;
							},
						},
						ai: {
							maixie: true,
							maixie_hp: true,
							threaten: 0.8,
							effect: {
								target(card, player, target) {
									if (get.tag(card, 'damage')) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
										if (!target.hasFriend()) return;
										if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
										if (!target.hasSkill('upgrade_paiyi') && target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
										if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
										if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
									}
								},
							},
						},
					};
					lib.skill.upgrade_zili = {
						derivation: 'upgrade_paiyi',
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							player: 'phaseZhunbeiBegin',
						},
						forced: true,
						juexingji: true,
						filter(event, player) {
							return player.getStorage('upgrade_quanji').length > 2;
						},
						content() {
							player.awakenSkill('upgrade_zili');
							player.recover();
							player.draw(3);
							player.loseMaxHp();
							player.addSkill('upgrade_paiyi');
						},
					};
					lib.skill.upgrade_paiyi = {
						audio: 'ext:蒸蒸日上/audio:2',
						enable: 'phaseUse',
						filter(event, player) {
							return player.getStorage('upgrade_quanji').length && (!player.hasSkill('upgrade_paiyi_0') || !player.hasSkill('upgrade_paiyi_1'));
						},
						chooseButton: {
							check(button) {
								if (typeof button.link == 'object') return 1;
								var player = _status.event.player,
									num = player.storage.upgrade_quanji.length - 1;
								if (button.link == 1) {
									if (
										game.countPlayer(function (current) {
											return get.damageEffect(current, player, player) > 0;
										}) < num
									)
										return 0.5;
									return 2;
								}
								if (num < 2) return 0;
								return 1;
							},
							dialog(event, player) {
								var dialog = ui.create.dialog('权计', 'hidden');
								var table = document.createElement('div');
								table.classList.add('add-setting');
								table.style.margin = '0';
								table.style.width = '100%';
								table.style.position = 'relative';
								var list = ['摸牌', '造成伤害'];
								for (var i = 0; i < list.length; i++) {
									if (player.hasSkill('upgrade_paiyi_' + i)) continue;
									var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
									td.innerHTML = '<span>' + list[i] + '</span>';
									td.link = i;
									td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
									Object.setPrototypeOf(td, lib.element.Button.prototype); //QQQ
									table.appendChild(td);
									dialog.buttons.add(td);
								}
								dialog.content.appendChild(table);
								dialog.add(player.storage.upgrade_quanji);
								return dialog;
							},
							select: 2,
							filter(button, player) {
								if (ui.selected.buttons.length) return typeof ui.selected.buttons[0].link != typeof button.link;
								return true;
							},
							backup(links) {
								if (typeof links[0] == 'object') links.reverse();
								var next = get.copy(lib.skill['upgrade_paiyi_backup' + links[0]]);
								next.card = links[1];
								return next;
							},
							prompt(links, player) {
								if (typeof links[0] == 'object') links.reverse();
								var num = get.cnNumber(Math.max(1, player.storage.upgrade_quanji.length - 1)),
									card = get.translation(links[1]);
								if (links[0] == 0) return '移去' + card + '并令一名角色摸' + num + '张牌';
								return '移去' + card + '并对至多' + num + '名角色造成1点伤害';
							},
						},
						ai: {
							order: 1,
							result: {
								player: 1,
							},
						},
						subSkill: {
							0: {},
							1: {},
							backup0: {
								audio: 'upgrade_paiyi',
								filterCard: () => false,
								selectCard: -1,
								filterTarget: true,
								delay: false,
								content() {
									'step 0';
									player.addTempSkill('upgrade_paiyi_0', 'phaseUseEnd');
									var card = lib.skill.upgrade_paiyi_backup.card;
									player.unmarkAuto('upgrade_quanji', [card]);
									game.log(card, '进入了弃牌堆');
									player.$throw(card, 1000);
									game.cardsDiscard(card);
									('step 1');
									target.draw(Math.max(1, player.getStorage('upgrade_quanji').length));
								},
								ai: {
									result: {
										target(player, target) {
											if (target.hasSkill('nogain')) return 0;
											if (player == target && !player.needsToDiscard()) return 3;
											return 1;
										},
									},
								},
							},
							backup1: {
								audio: 'upgrade_paiyi',
								filterCard: () => false,
								selectCard: -1,
								filterTarget: true,
								delay: false,
								multitarget: true,
								multiline: true,
								selectTarget() {
									return [1, Math.max(1, _status.event.player.storage.upgrade_quanji.length - 1)];
								},
								content() {
									'step 0';
									targets.sortBySeat();
									player.addTempSkill('upgrade_paiyi_1', 'phaseUseEnd');
									var card = lib.skill.upgrade_paiyi_backup.card;
									player.unmarkAuto('upgrade_quanji', [card]);
									game.log(card, '进入了弃牌堆');
									player.$throw(card, 1000);
									game.cardsDiscard(card);
									('step 1');
									for (var i of targets) i.damage();
								},
								ai: {
									tag: {
										damage: 1,
									},
									result: {
										target: -1.5,
									},
								},
							},
						},
					};
				}
			});
			if (config.upgradeWJAI) {
				lib.arenaReady.push(function () {
					lib.skill.xianfu.content = function () {
						'step 0';
						player
							.chooseTarget('请选择【先辅】的目标', lib.translate.xianfu_info, true, function (card, player, target) {
								return target != player && (!player.storage.xianfu2 || !player.storage.xianfu2.includes(target));
							})
							.set('ai', function (target) {
								if (target.hasSkill('qingnang') || target.hasSkill('jijiu') || target.hasSkill('rejieyin') || target.hasSkill('longhun')) return 1.5;
								if (target.hasSkill('new_reqingnang') || target.hasSkill('upgrade_qingnang') || target.hasSkill('relonghun') || target.hasSkill('huituo') || target.hasSkill('binglun') || target.hasSkill('jieyin') || target.hasSkill('shibei')) return 2;
								if (target.hasSkill('upgrade_huituo')) return 2.5;
								var att = get.attitude(_status.event.player, target);
								if (att > 0) return att + 1;
								if (att == 0) return Math.random();
								return att;
							}).animate = false;
						('step 1');
						if (result.bool) {
							var target = result.targets[0];
							if (!player.storage.xianfu2) player.storage.xianfu2 = [];
							player.storage.xianfu2.push(target);
							player.addSkill('xianfu2');
						}
					};
					lib.skill.xianfu.ai = {
						effect: {
							target(card, player, target) {
								if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1 && player == target) return [0, 0];
							},
						},
					};
				});
			}
			if (config.upgradeIQAI) {
				lib.arenaReady.push(function () {
					lib.skill._IntelligenceAI = {
						mode: ['identity'],
						ai: {
							effect: {
								player(card, player, target) {
									if (target) {
										//QQQ
										if (((get.type2(card) == 'trick' && card.name != 'taoyuan' && card.name != 'tiesuo') || (card.name == 'tiesuo' && !target.isLinked()) || card.name == 'sha') && target.isEnemiesOf(player)) {
											return [1, 3];
										}
									}
								},
							},
						},
					};
				});
			}
			if (config.upgradeCheatAI) {
				lib.arenaReady.push(function () {
					if (get.mode() == 'identity') {
						lib.skill.upgrade_ZNAI = {
							silent: true,
							init(_0xfe8cx1) {
								if (
									Math.random() < 0.23 &&
									_0xfe8cx1 != game.me &&
									!game.hasPlayer(function (_0xfe8cx2) {
										return _0xfe8cx2.name == 'huanggai' || _0xfe8cx2.name == 'sunshangxiang' || _0xfe8cx2.name == 'miheng' || _0xfe8cx2.name == 'zhangchunhua' || _0xfe8cx2.name == 'caochong';
									})
								) {
									var _0xfe8cx3 = ['zhangchunhua', 'huanggai', 'miheng', 'caochong', 'sunshangxiang'].randomGet();
									_0xfe8cx1.init(_0xfe8cx3);
									_0xfe8cx1.removeSkill('upgrade_ZNAI');
								}
							},
						};
						for (var i in lib.character) {
							lib.character[i][3].push('upgrade_ZNAI');
						}
					}
					lib.skill.xiaoji = {
						audio: 4,
						trigger: {
							player: 'loseEnd',
						},
						forced: true,
						filter(event, player) {
							if (Array.isArray(event.cards))
								for (var i of event.cards) {
									//QQQ
									if (i.original == 'e') return true;
								}
							return false;
						},
						content() {
							var num = 0;
							for (var i = 0; i < trigger.cards.length; i++) {
								if (trigger.cards[i].original == 'e') {
									num += 2;
								}
							}
							player.draw(num);
							if (
								get.mode() == 'identity' &&
								player.hp <= 3 &&
								!player.countCards('h', {
									type: 'equip',
								}) &&
								Math.random() < 0.8 &&
								game.me != player
							) {
								var cards = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (get.type(ui.cardPile.childNodes[i]) == 'equip') {
										cards = cards.concat(ui.cardPile.childNodes[i]);
									}
								}
								if (cards.length) {
									var card = player.getCards('h').randomGet();
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
									var equip = cards.randomGet();
									player.gain(equip)._triggered = null;
								}
							}
						},
						ai: {
							threaten: 2.7,
							noe: true,
							reverseEquip: true,
							effect: {
								target(card, player, target, current) {
									if (get.type(card) == 'equip') return [1, 3];
								},
							},
						},
					};
					lib.skill.epic_shangshi = {};
					lib.translate.shangshi_info = '弃牌阶段外,每当你的手牌数小于X时,你可以将手牌补至X张(X为你已损失的体力值).';
					lib.skill.shangshi = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							player: ['loseEnd', 'changeHp'],
						},
						forced: true,
						filter(event, player) {
							return player.countCards('h') < player.maxHp - player.hp;
						},
						content() {
							player.draw(player.maxHp - player.hp - player.countCards('h'));
							if (get.mode() == 'identity' && player.hp < 3 && player.countCards('h') && game.me != player) {
								var card = player.getCards('h').randomGet();
								if (player.hp < 1) {
									card.remove('tao');
									card.remove('jiu');
								}
								if (player.countCards('h') > player.countCards('h', 'sha') && (player.countCards('h', 'du') || player.countCards('h', 'zhen') || player.countCards('h', 'zhuge') || player.countCards('h', 'shan') || player.getEquip('zhuge') || Math.random() < 0.33)) {
									card.remove('sha');
								}
								if (player.hp < 1) {
									player.lose(card)._triggered = null;
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
									var cards = get.cardPile(['jiu', 'tao'].randomGet(), 'field');
									player.gain(cards)._triggered = null;
								}
								if (Math.random() < 0.33 && !player.countCards('h', 'zhuge') && !player.getEquip('zhuge')) {
									player.lose(card)._triggered = null;
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
									player.gain(get.cardPile('zhuge', 'field'))._triggered = null;
								}
								if ((!player.countCards('h', 'sha') || Math.random() < 0.3) && (player.countCards('h', 'zhuge') || player.getEquip('zhuge'))) {
									player.lose(card)._triggered = null;
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
									player.gain(get.cardPile('sha', 'field'))._triggered = null;
								}
							}
						},
						ai: {
							threaten: 3,
							maixie: true,
							maixie_hp: true,
							effect: {
								player(card, player, target, current) {
									if ((card.name != 'sha' && card.name != 'tao' && get.type(card) == 'basic') || get.type(card) == 'trick' || get.type(card) == 'delay' || ((get.type(card) == 'delay' || card.name == 'guohe' || card.name == 'sha') && (player.identity == 'fan' || (player.identity == 'zhu' && target.identity != 'zhong') || (player.identity == 'zhong' && (target.identity == 'fan' || target.identity == 'nei')) || (player.identity == 'nei' && target.identity != 'zhu') || get.attitude(player, target) < 0)) || card.name == 'shunshou') {
										return [1, 7];
									}
								},
								target(card, player, target, current) {
									if ((target.getEquip('zhuge') && get.subtype(card) == 'equip1') || ((card.name == 'du' || card.name == 'zhen') && target.hp < 2 && !target.countCards('h', 'tao') && !target.countCards('h', 'jiu') && target.countCards('h') > target.maxHp - target.hp)) {
										return [1, -7];
									}
									if ((get.type(card) == 'equip' && card.name != 'zhuge') || card.name == 'zhuge') {
										return [1, 3];
									}
								},
							},
						},
					};
					lib.skill.jizhi = {
						audio: 'ext:蒸蒸日上/audio:2',
						audioname: ['jianyong'],
						trigger: {
							player: 'useCard',
						},
						forced: true,
						filter(event, player) {
							return get.type(event.card) == 'trick' && event.cards[0x0] && event.cards[0x0] == event.card;
						},
						content() {
							player.draw();
							if (Math.random() <= 0.92 && (get.mode() == 'identity' || get.mode() == 'guozhan') && player.countCards('h') >= 1 && game.me != player) {
								var card = player.getCards('h').randomGet();
								card.remove('shunshou');
								card.remove('wuzhong');
								if (player.countCards('he', 'zhuge') < 2) {
									card.remove('zhuge');
								}
								card.remove('guohe');
								player.lose(card)._triggered = null;
								var cl = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (ui.cardPile.childNodes[i].name == 'wuzhong' || ui.cardPile.childNodes[i].name == 'guohe' || ui.cardPile.childNodes[i].name == 'shunshou') {
										cl = cl.concat(ui.cardPile.childNodes[i]);
									}
								}
								if (cl.length) {
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
								}
								var cards = get.cardPile(['shunshou', 'wuzhong', 'shunshou', 'wuzhong', 'guohe'].randomGet(), 'field');
								player.gain(cards)._triggered = null;
							}
						},
						ai: {
							threaten: 3,
							noautowuxie: true,
							effect: {
								player(card, player, target) {
									if (get.tag(card, 'damage') && target.identity != 'zhu' && (target.identity == 'nei' || target.hasFriend()) && target.hasSkill('duanchang') && target.hp < 2) {
										return [1, -player.countCards('h')];
									}
									if (
										(card.name == 'shunshou' &&
											game.hasPlayer(function (_0xdd40x1) {
												return (
													_0xdd40x1 != player &&
													player.canUse('huogong', _0xdd40x1) &&
													get.effect(
														_0xdd40x1,
														{
															name: 'huogong',
														},
														player,
														player
													) > 0
												);
											}) &&
											player.countCards('h', 'huogong')) ||
										(card.name == 'shunshou' && target.hasSkill('kongcheng') && target.countCards('h') == 1 && get.attitude(player, target) < 0) ||
										((card.name == 'shunshou' || card.name == 'wuzhong') && player.getEquip('zhuge') && player.getEquip(4) && player.countCards('h', 'sha'))
									) {
										return [1, -7];
									}
									if (card.name == 'shunshou' && ((target.hasSkill('reqianxun') && target.hasSkill('relianying') && target.countCards('h') > 1) || target.hasSkill('tuntian') || target.hasSkill('mingzhe')) && get.attitude(player, target) < 0) {
										return [1, 3];
									}
									if (card.name == 'wugu' || (((card.name == 'tiesuo' && !target.hasSkill('duanchang') && !target.isLinked() && target != player) || get.type(card) == 'delay' || card.name == 'guohe' || (card.name == 'huogong' && target != player) || card.name == 'juedou' || card.name == 'sha') && (player.identity == 'fan' || (player.identity == 'zhu' && target.identity != 'zhong') || (player.identity == 'zhong' && (target.identity == 'fan' || target.identity == 'nei')) || (player.identity == 'nei' && target.identity != 'zhu') || (get.mode() == 'guozhan' && (player.identity != target.identity || player.identity == 'ye' || target.identity == 'ye' || target.identity == 'unknown') && get.attitude(player, target) < 0))) || card.name == 'shunshou') {
										return [1, 7];
									}
								},
								target(card, player, target, current) {
									if (target.getEquip('zhuge') && get.subtype(card) == 'equip1') {
										return [1, -7];
									}
									if (card.name == 'zhuge') {
										return [1, 3];
									}
								},
							},
						},
					};
					lib.skill.epic_jizhi = {};
					lib.skill.xinjizhi = {
						audio: 'jizhi',
						trigger: {
							player: 'useCard',
						},
						forced: true,
						alter: true,
						filter(event, player) {
							if (!get.is.altered('xinjizhi') && get.type(event.card) == 'delay') {
								return false;
							}
							return get.type(event.card, 'trick') == 'trick' && event.cards[0x0] && event.cards[0x0] == event.card;
						},
						init(player) {
							player.storage.xinjizhi = 0;
						},
						content() {
							'step 0';
							player.draw();
							if (Math.random() <= 0.9 && (get.mode() == 'identity' || get.mode() == 'guozhan') && player.countCards('h') > 1 && game.me != player) {
								var card = player.getCards('h').randomGet();
								card.remove('shunshou');
								card.remove('wuzhong');
								card.remove(result[0x0]);
								player.lose(card)._triggered = null;
								var cl = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (ui.cardPile.childNodes[i].name == 'wuzhong' || ui.cardPile.childNodes[i].name == 'shunshou') {
										cl = cl.concat(ui.cardPile.childNodes[i]);
									}
								}
								if (cl.length) {
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
								}
								var cards = get.cardPile(['shunshou', 'wuzhong'].randomGet(), 'field');
								player.gain(cards)._triggered = null;
							}
							('step 1');
							if (get.is.altered('xinjizhi') && get.type(result[0x0]) == 'basic') {
								event.card = result[0x0];
								player
									.chooseBool('是否弃置' + get.translation(event.card) + '并令本回合手牌上限+1？')
									.set('ai', function (_0xf20cx1, _0xf20cx2) {
										return _status.currentPhase == _0xf20cx2 && _0xf20cx2.needsToDiscard(-3) && _status.event.value < 6;
									})
									.set('value', get.value(event.card, player));
							} else {
								event.finish();
							}
							('step 2');
							if (result.bool) {
								player.discard(event.card);
								player.storage.xinjizhi++;
								if (_status.currentPhase == player) {
									player.markSkill('xinjizhi');
								}
							}
						},
						ai: {
							threaten: 3.5,
							noautowuxie: true,
							effect: {
								player(card, player, target) {
									if (get.tag(card, 'damage') && target.identity != 'zhu' && (target.identity == 'nei' || target.hasFriend()) && target.hasSkill('duanchang') && target.hp < 2) {
										return [1, -player.countCards('h')];
									}
									if (
										(card.name == 'shunshou' &&
											game.hasPlayer(function (_0xdd40x1) {
												return (
													_0xdd40x1 != player &&
													player.canUse('huogong', _0xdd40x1) &&
													get.effect(
														_0xdd40x1,
														{
															name: 'huogong',
														},
														player,
														player
													) > 0
												);
											}) &&
											player.countCards('h', 'huogong')) ||
										(card.name == 'shunshou' && target.hasSkill('kongcheng') && target.countCards('h') == 1 && get.attitude(player, target) < 0) ||
										((card.name == 'shunshou' || card.name == 'wuzhong') && player.getEquip('zhuge') && player.getEquip(4) && player.countCards('h', 'sha'))
									) {
										return [1, -7];
									}
									if (card.name == 'shunshou' && ((target.hasSkill('reqianxun') && target.hasSkill('relianying') && target.countCards('h') > 1) || target.hasSkill('tuntian') || target.hasSkill('mingzhe')) && get.attitude(player, target) < 0) {
										return [1, 3];
									}
									if (card.name == 'wugu' || (((card.name == 'tiesuo' && !target.hasSkill('duanchang') && !target.isLinked() && target != player) || get.type(card) == 'delay' || card.name == 'guohe' || (card.name == 'huogong' && target != player) || card.name == 'juedou' || card.name == 'sha') && (player.identity == 'fan' || (player.identity == 'zhu' && target.identity != 'zhong') || (player.identity == 'zhong' && (target.identity == 'fan' || target.identity == 'nei')) || (player.identity == 'nei' && target.identity != 'zhu') || (get.mode() == 'guozhan' && (player.identity != target.identity || player.identity == 'ye' || target.identity == 'ye' || target.identity == 'unknown') && get.attitude(player, target) < 0))) || card.name == 'shunshou') {
										return [1, 7];
									}
								},
								target(card, player, target, current) {
									if (target.getEquip('zhuge') && get.subtype(card) == 'equip1') {
										return [1, -7];
									}
									if (card.name == 'zhuge') {
										return [1, 3];
									}
								},
							},
						},
						mod: {
							maxHandcard(player, num) {
								if (get.is.altered('xinjizhi') && _status.currentPhase == player) {
									return num + player.storage.xinjizhi;
								}
								return num;
							},
						},
						intro: {
							content: '本回合手牌上限+#',
						},
						group: 'xinjizhi_clear',
						subSkill: {
							clear: {
								trigger: {
									global: 'phaseAfter',
								},
								silent: true,
								content() {
									player.storage.xinjizhi = 0;
									player.unmarkSkill('xinjizhi');
								},
							},
						},
					};
					lib.skill.chengxiang = {
						trigger: {
							player: 'damageEnd',
						},
						forced: true,
						audio: 'ext:蒸蒸日上/audio:2',
						content() {
							'step 0';
							if ((get.mode() == 'guozhan' || get.mode() == 'identity') && Math.random() < 0.9 && game.me != player) {
								var cl = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (ui.cardPile.childNodes[i].name == 'tao') {
										cl = cl.concat(ui.discardPile.childNodes[i]);
									}
								}
								if (cl.length) {
									if (ui.cardPile.childNodes[0x0].name != 'tao' && ui.cardPile.childNodes[0x0].name != 'jiu') {
										var card = get.cardPile('tao', 'field');
										ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
									}
								} else {
									ui.cardPile.childNodes[0x0].discard();
									var card = get.cardPile('tao', 'field');
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
								}
							}
							('step 1');
							event.cards = get.cards(4);
							event.videoId = lib.status.videoId++;
							game.broadcastAll(
								function (player, id, cards) {
									var str;
									if (player == game.me && !_status.auto) {
										str = '称象:选择任意张点数不大于13的牌';
									} else {
										str = '称象';
									}
									var dialog = ui.create.dialog(str, cards);
									dialog.videoId = id;
								},
								player,
								event.videoId,
								event.cards
							);
							event.time = get.utc();
							game.addVideo('showCards', player, ['称象', get.cardsInfo(event.cards)]);
							game.addVideo('delay', null, 2);
							('step 2');
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
							('step 3');
							if (result.bool && result.links) {
								var cards2 = [];
								for (var i of result.links) {
									cards2.push(i);
									cards.remove(i);
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
							('step 4');
							game.broadcastAll('closeDialog', event.videoId);
							var cards2 = event.cards2;
							player.gain(cards2, 'log');
							player.$draw(cards2);
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
					};
					lib.skill.luoshen = {
						audio: 'ext:蒸蒸日上/audio:2',
						trigger: {
							player: 'phaseBegin',
						},
						forced: true,
						content() {
							'step 0';
							if ((get.mode() == 'guozhan' || get.mode() == 'identity') && ui.cardPile.childElementCount <= 32 && game.me != player) {
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (get.color(ui.cardPile.childNodes[i]) == 'black') {
										ui.cardPile.insertBefore(ui.cardPile.childNodes[i], ui.cardPile.firstChild);
									}
								}
							}
							if (event.cards == undefined) {
								event.cards = [];
							}
							player.judge(function (_0x3eecx2) {
								if (get.color(_0x3eecx2) == 'black') {
									return 1.5;
								}
								return -1.5;
							}, ui.special);
							('step 1');
							if (result.judge > 0) {
								event.cards.push(result.card);
								if (lib.config.autoskilllist.includes('luoshen')) {
									player.chooseBool('是否再次发动【洛神】？');
								} else {
									event._result = {
										bool: true,
									};
								}
							} else {
								event.cards = event.cards.filter((i) => get.position(i) == 's');
								player.gain(event.cards);
								if (event.cards.length) {
									player.$draw(event.cards);
								}
								event.finish();
							}
							('step 2');
							if (result.bool) {
								event.goto(0);
							} else {
								player.gain(event.cards);
								if (event.cards.length) {
									player.$draw(event.cards);
								}
							}
						},
						ai: {
							threaten: 2.3,
						},
					};
					lib.skill.xinluoshen = {
						audio: 'luoshen',
						alter: true,
						trigger: {
							player: 'phaseBegin',
						},
						forced: true,
						content() {
							'step 0';
							if ((get.mode() == 'guozhan' || get.mode() == 'identity') && ui.cardPile.childElementCount <= 32 && game.me != player) {
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (get.color(ui.cardPile.childNodes[i]) == 'black') {
										ui.cardPile.insertBefore(ui.cardPile.childNodes[i], ui.cardPile.firstChild);
									}
								}
							}
							if (event.cards == undefined) {
								event.cards = [];
							}
							player.judge(function (_0xcda9x2) {
								if (get.color(_0xcda9x2) == 'black') {
									return 1.5;
								}
								return -1.5;
							}, ui.special);
							('step 1');
							if (result.judge > 0) {
								event.cards.push(result.card);
								if (lib.config.autoskilllist.includes('luoshen')) {
									player.chooseBool('是否再次发动【洛神】？');
								} else {
									event._result = {
										bool: true,
									};
								}
							} else {
								event.cards = event.cards.filter((i) => get.position(i) == 's');
								player.gain(event.cards, 'gain2');
								player.storage.xinluoshen = event.cards.slice(0);
								event.finish();
							}
							('step 2');
							if (result.bool) {
								event.goto(0);
							} else {
								if (event.cards.length) {
									player.gain(event.cards, 'gain2');
									player.storage.xinluoshen = event.cards.slice(0);
								}
							}
						},
						ai: {
							threaten: 2.5,
						},
						mod: {
							ignoredHandcard(card, player) {
								if (get.is.altered('xinluoshen') && player.storage.xinluoshen && player.storage.xinluoshen.includes(card)) {
									return true;
								}
							},
						},
						group: 'xinluoshen_clear',
						subSkill: {
							clear: {
								trigger: {
									player: 'phaseAfter',
								},
								silent: true,
								content() {
									delete player.storage.xinluoshen;
								},
							},
						},
					};
					lib.translate.kuangcai_use = '狂才';
					lib.translate.kuangcai_info = '出牌阶段开始时,你可以令你此阶段内的出牌时间变为5秒,若如此做,你使用牌没有距离和次数限制,且每当你于此阶段内使用牌时, 你摸一张牌且出牌时间-1秒.';
					lib.skill.kuangcai = {
						trigger: {
							player: 'phaseUseBegin',
						},
						filter(event, player) {
							if (_status.auto && event.player == game.me) {
								return false;
							}
							return !event.player.isMad() && !_status.connectMode;
						},
						content() {
							player.forceCountChoose = {
								chooseToUse: 5,
								default: 5,
							};
							player.addSkill('kuangcai_use');
							player.addSkill('kuangcai_cancel');
							ui.auto.hide();
						},
						ai: {
							threaten: 2.9,
							effect: {
								player(card, player, target) {
									if ((get.type(card) == 'delay' || card.name == 'shunshou' || card.name == 'guohe' || card.name == 'sha' || card.name == 'huogong') && (player.identity == 'zhong' || player.identity == 'zhu') && (target.identity == 'fan' || target.identity == 'nei')) {
										return [1, 5];
									}
								},
								target(card, player, target, current) {
									if (get.type(card) == 'equip') return [1, 3];
								},
							},
						},
						subSkill: {
							use: {
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
								forced: true,
								audio: 'kuangcai',
								filter(event, player) {
									if (!player.forceCountChoose) {
										return false;
									}
									return true;
								},
								content() {
									player.draw();
									if (game.me == player) {
										player.forceCountChoose.chooseToUse--;
									} else {
										player.forceCountChoose.chooseToUse -= 0.3;
									}
								},
							},
							cancel: {
								trigger: {
									player: 'phaseUseEnd',
								},
								silent: true,
								content() {
									delete player.forceCountChoose;
									ui.auto.show();
									player.removeSkill('kuangcai_use');
									player.removeSkill('kuangcai_cancel');
								},
							},
						},
					};
					lib.skill.epic_kurou = {};
					lib.skill.kurou = {
						audio: 4,
						enable: 'phaseUse',
						filter(event, player) {
							return player.hp > 0;
						},
						content() {
							'step 0';
							player.loseHp(1);
							('step 1');
							player.draw(2);
							if ((get.mode() == 'identity' || get.mode() == 'guozhan') && player.hp < 3 && player.countCards('h') && game.me != player) {
								var card = player.getCards('h').randomGet();
								card.remove('tao');
								card.remove('jiu');
								if (player.countCards('h') > player.countCards('h', 'sha') && (player.countCards('h', 'du') || player.countCards('h', 'zhen') || player.countCards('h', 'zhuge') || player.countCards('h', 'shan') || player.getEquip('zhuge') || Math.random() < 0.33)) {
									card.remove('sha');
								}
								player.lose(card)._triggered = null;
								var cl = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (ui.cardPile.childNodes[i].name == 'tao' || ui.cardPile.childNodes[i].name == 'jiu') {
										cl = cl.concat(ui.discardPile.childNodes[i]);
									}
								}
								if (cl.length) {
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
								}
								var cards = get.cardPile(['jiu', 'tao'].randomGet(), 'field');
								player.gain(cards)._triggered = null;
								if (Math.random() < 0.02 * player.countCards('h', 'sha') && !player.getEquip('zhuge')) {
									player.lose(card)._triggered = null;
									if (cl.length) {
										ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
									}
									player.gain(get.cardPile('zhuge', 'field'))._triggered = null;
								}
							}
						},
						ai: {
							threaten: 4,
							basic: {
								order(skill, player) {
									if (player.countCards('h', 'tao')) {
										return 0.5;
									}
									return 2;
								},
							},
							result: {
								player(player, target) {
									if (
										(!player.hasSkill('buyi') && !player.hasSkill('longhun') && !player.hasSkill('oldlonghun') && player.identity != 'zhu' && player.hp == 1 && !player.countCards('h', 'jiu') && !player.countCards('h', 'tao')) ||
										(player.countCards('h', 'sha') > 5 &&
											player.countCards('e', 'zhuge') > 0 &&
											!game.hasPlayer(function (_0xfa71x1) {
												return (
													(player.canUse(
														{
															name: 'sha',
														},
														_0xfa71x1
													) ||
														player.canUse(
															{
																name: 'huogong',
															},
															_0xfa71x1
														) ||
														player.canUse(
															{
																name: 'juedou',
															},
															_0xfa71x1
														) ||
														player.canUse(
															{
																name: 'nanman',
															},
															_0xfa71x1
														) ||
														player.canUse(
															{
																name: 'wanjian',
															},
															_0xfa71x1
														) ||
														player.canUse(
															{
																name: 'sha',
															},
															_0xfa71x1
														)) &&
													get.attitude(player, _0xfa71x1) < 0
												);
											}))
									) {
										return 0;
									}
									return 1;
								},
							},
							effect: {
								player(card, player, target) {
									if (card.name == 'wugu' || ((get.type(card) == 'delay' || card.name == 'guohe' || card.name == 'sha') && (player.identity == 'fan' || (player.identity == 'zhu' && target.identity != 'zhong') || (player.identity == 'zhong' && (target.identity == 'fan' || target.identity == 'nei')) || (player.identity == 'nei' && target.identity != 'zhu') || (get.mode() == 'guozhan' && (player.identity != target.identity || player.identity == 'ye' || target.identity == 'ye' || target.identity == 'unknown') && get.attitude(player, target) < 0))) || card.name == 'shunshou') {
										return [1, 7];
									}
								},
								target(card, player, target, current) {
									if ((target.getEquip('zhuge') && get.subtype(card) == 'equip1') || (card.name == 'jiu' && target.hp > 0 && target.countCards('h', 'tao') < 1 && target.countCards('h', 'jiu') < 2)) {
										return [1, -7];
									}
									if (card.name == 'zhuge') {
										return [1, 3];
									}
								},
							},
						},
					};
				});
			}
			//多人模式平衡————————————————————————————
			if (config.upgradeMpeople && config.IncreasePlayer5Number != 0 && (get.mode() == 'identity' || get.mode() == 'guozhan') && get.config('player_number') > 8) {
				lib.skill._upgradeManypeople = {
					forced: true,
					_priority: -10,
					silent: true,
					trigger: {
						global: 'gameDrawBegin',
					},
					filter(event, player) {
						return game.phaseNumber == 0 && ((get.mode() == 'identity' && player == game.zhu) || (get.mode() == 'guozhan' && player.node.name_seat.innerHTML[0] == '一'));
					},
					content() {
						var br = player.next.next.next.next.next.next.next;
						var jr = br.next;
						var sr = br.next.next;
						var s1r = br.next.next.next;
						var s2r = br.next.next.next.next;
						var s3r = br.next.next.next.next.next;
						var s4r = br.next.next.next.next.next.next;
						var s5r = br.next.next.next.next.next.next.next;
						var s6r = br.next.next.next.next.next.next.next.next;
						var s7r = s6r.next;
						var s8r = s7r.next;
						var s9r = s8r.next;
						var s10r = s9r.next;
						var s11r = s10r.next;
						var s12r = s11r.next;
						var s13r = s12r.next;
						var s14r = s13r.next;
						var s15r = s14r.next;
						var s16r = s15r.next;
						var s17r = s16r.next;
						var s18r = s17r.next;
						var s19r = s18r.next;
						var s20r = s19r.next;
						var s21r = s20r.next;
						var s22r = s21r.next;
						if (get.config('player_number') > 8) {
							jr.gain(get.cards(2))._triggered = null;
						}
						if (get.config('player_number') > 9) {
							sr.gain(get.cards(2))._triggered = null;
						}
						if (get.config('player_number') > 10) {
							s1r.gain(get.cards(2))._triggered = null;
						}
						if (get.config('player_number') > 11) {
							s2r.gain(get.cards(2))._triggered = null;
						}
						if (get.config('player_number') > 12) {
							s3r.gain(get.cards(2))._triggered = null;
						}
						if (get.config('player_number') > 13) {
							s4r.gain(get.cards(2))._triggered = null;
						}
						if (get.config('player_number') > 14) {
							s5r.gain(get.cards(2))._triggered = null;
						}
						if (get.config('player_number') > 15) {
							s6r.gain(get.cards(2))._triggered = null;
						}
						if (get.config('player_number') > 16) {
							s7r.gain(get.cards(5))._triggered = null;
						}
						if (get.config('player_number') > 17) {
							s8r.gain(get.cards(5))._triggered = null;
						}
						if (get.config('player_number') > 18) {
							s9r.gain(get.cards(5))._triggered = null;
						}
						if (get.config('player_number') > 19) {
							s10r.gain(get.cards(5))._triggered = null;
						}
						if (get.config('player_number') > 20) {
							s11r.gain(get.cards(5))._triggered = null;
						}
						if (get.config('player_number') > 21) {
							s12r.gain(get.cards(5))._triggered = null;
						}
						if (get.config('player_number') > 22) {
							s13r.gain(get.cards(5))._triggered = null;
						}
						if (get.config('player_number') > 23) {
							s14r.gain(get.cards(5))._triggered = null;
						}
						if (get.config('player_number') > 24) {
							s15r.gain(get.cards(9))._triggered = null;
						}
						if (get.config('player_number') > 25) {
							s16r.gain(get.cards(9))._triggered = null;
						}
						if (get.config('player_number') > 26) {
							s17r.gain(get.cards(9))._triggered = null;
						}
						if (get.config('player_number') > 27) {
							s18r.gain(get.cards(9))._triggered = null;
						}
						if (get.config('player_number') > 28) {
							s19r.gain(get.cards(9))._triggered = null;
						}
						if (get.config('player_number') > 29) {
							s20r.gain(get.cards(9))._triggered = null;
						}
						if (get.config('player_number') > 30) {
							s21r.gain(get.cards(9))._triggered = null;
						}
						if (get.config('player_number') > 31) {
							s22r.gain(get.cards(9))._triggered = null;
						}
					},
				};
			}
			//铁索连舟————————————————————————————
			if (config.upgradeTSLZ && (get.mode() == 'identity' || get.mode() == 'guozhan')) {
				lib.skill._upgradeTSLZ = {
					forced: true,
					silent: true,
					trigger: {
						player: 'phaseBeginStart',
					},
					filter(event, player) {
						if (
							get.mode() == 'identity' &&
							game.hasPlayer(function (current) {
								return current.hasSkill('upgrade_juejing');
							})
						)
							return false;
						return game.hasPlayer(function (current) {
							return !current.isLinked();
						});
					},
					content() {
						game.countPlayer(function (_0x55a5x1) {
							if (!_0x55a5x1.isLinked()) {
								_0x55a5x1.link(true);
							}
						});
					},
				};
			}
			//背水一战————————————————————————————
			if (config.upgradeBSYZ && (get.mode() == 'identity' || get.mode() == 'guozhan')) {
				lib.skill._upgradeBSYZ = {
					mod: {
						cardname(card, player, name) {
							if (card.name == 'taoyuan' || card.name == 'wugu' || card.name == 'shandian' || card.name == 'lebu' || card.name == 'tiesuo' || card.name == 'bingliang' || card.name == 'qishameizi' || card.name == 'tao' || card.name == 'nanman' || card.name == 'wanjian' || card.name == 'jiu' || card.name == 'wuxie') return 'juedou';
						},
						cardnature(card, player) {
							if (card.name == 'taoyuan' || card.name == 'wugu' || card.name == 'shandian' || card.name == 'lebu' || card.name == 'tiesuo' || card.name == 'bingliang' || card.name == 'qishameizi' || card.name == 'tao' || card.name == 'nanman' || card.name == 'wanjian' || card.name == 'jiu' || card.name == 'wuxie') return false;
						},
					},
				};
			}
			//人品测验————————————————————————————
			if (config.upgradeTMms) {
				lib.translate._upgradeTMMS = '人品';
				lib.skill._upgradeTMMS = {
					//       mode:.identity,
					forced: true,
					_priority: 1999,
					silent: true,
					trigger: {
						player: 'phaseBefore',
					},
					content() {
						'step 0';
						player.judge(function (card) {
							if (card.suit == 'heart' && player.isDamaged()) return 2.1;
							if (card.suit == 'diamond') return 2;
							if (card.suit == 'club') return -1;
							if (card.suit == 'spade') return -1;
						}).judge2 = function (result) {
							return true;
						};
						('step 1');
						switch (result.suit) {
							case 'heart':
								player.recover(1);
								break;
							case 'diamond':
								player.draw(2);
								break;
							case 'club':
								player.loseHp();
								break;
							case 'spade':
								player.damage('nosource');
								break;
						}
					},
				};
			}
			//--------------------------------------限制距离---------------------------------------//
			lib.arenaReady.push(function () {
				if (config.upgradeJLuseCard && get.config('player_number') > 8) {
					lib.skill._useCardupgrade = {
						mode: ['identity', 'guozhan', 'versus'],
						mod: {
							targetEnabled(card, player, target) {
								if (game.players.length + game.dead.length > 8 && get.distance(player, target) > 4) return false;
							},
						},
					};
				}
				if (config.upgrade_Appearence) {
					game.documentZoom = game.deviceZoom * Number(config.upgrade_Appearence);
					ui.updatez(); //缩放
				}
			});
			if (config.upgrade_jmsf) {
				const skill = {
					_minskinSJaa: {
						mode: ['identity', 'guozhan', 'versus'],
						trigger: {
							global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
						},
						filter(event, player) {
							return game.players.length + game.dead.length >= 13 && player && player != game.me && !player.isUnseen(1) && player.name2 && player.storage.STAVA2 != 0;
						},
						forced: true,
						content() {
							player.storage.STAVA2 = 0;
							player.setNickname = game.kongfunc;
							var avatar2 = ui.create.div(function () {
								if (player.name2) ui.click.charactercard(player.name2, '');
							});
							avatar2.style.height = '40px';
							avatar2.style.width = '40px';
							avatar2.style.borderRadius = '40px';
							avatar2.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0 0 0 1px';
							avatar2.style.left = '-10px';
							avatar2.style.top = '77px';
							avatar2.setBackground(player.name2, 'character');
							player.node.nameol.appendChild(avatar2);
							setInterval(function () {
								avatar2.setBackground(player.name2, 'character');
							}, 1000);
						},
					},
					_minskinSJ1aa: {
						mode: ['identity', 'guozhan', 'versus'],
						trigger: {
							player: 'dieBefore',
						},
						filter(event, player) {
							return game.players.length + game.dead.length >= 13 && player && player != game.me && player.isUnseen(1) && player.name2 && player.storage.STAVA2 != 0;
						},
						forced: true,
						content() {
							player.storage.STAVA2 = 0;
							player.setNickname = game.kongfunc;
							var avatar2 = ui.create.div(function () {
								if (player.name2) ui.click.charactercard(player.name2, '');
							});
							avatar2.style.height = '40px';
							avatar2.style.width = '40px';
							avatar2.style.borderRadius = '40px';
							avatar2.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0 0 0 1px';
							avatar2.style.left = '-10px';
							avatar2.style.top = '77px';
							avatar2.setBackground(player.name2, 'character');
							player.node.nameol.appendChild(avatar2);
							setInterval(function () {
								avatar2.setBackground(player.name2, 'character');
							}, 1000);
						},
					},
					_minskinEquipaa: {
						mode: ['identity', 'guozhan', 'versus'],
						mod: {
							cardEnabled(card, player) {
								if (game.players.length + game.dead.length >= 13 && player.isMin() && !player.hasSkill('ganran')) {
									if (get.type(card) == 'equip') return true;
								}
							},
						},
					},
					_minskinEquip1aa: {
						mode: ['identity', 'guozhan', 'versus'],
						trigger: {
							player: 'equipBefore',
						},
						filter(event, player) {
							return game.players.length + game.dead.length >= 13;
						},
						forced: true,
						content() {
							if (player && player != game.me) player.classList.remove('minskin');
						},
					},
					_minskinEquip2aa: {
						mode: ['identity', 'guozhan', 'versus'],
						trigger: {
							player: 'equipAfter',
						},
						filter(event, player) {
							return game.players.length + game.dead.length >= 13;
						},
						forced: true,
						content() {
							if (player && player != game.me) player.classList.add('minskin');
						},
					},
					_useMinskinaa: {
						mode: ['identity', 'guozhan', 'versus'],
						trigger: {
							global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
						},
						filter(event, player) {
							return game.players.length + game.dead.length >= 13 && player && player != game.me && player.name2;
						},
						forced: true,
						content() {
							if (player) player.node.avatar2.remove();
						},
					},
					_useMinskin1aa: {
						mode: ['identity', 'guozhan', 'versus'],
						trigger: {
							global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
						},
						filter(event, player) {
							return game.players.length + game.dead.length >= 13;
						},
						forced: true,
						content() {
							game.swapPlayer = game.kongfunc;
							game.swapControl = game.kongfunc;
							if (player && player != game.me) {
								player.classList.add('minskin');
							}
						},
					},
				};
				Object.assign(lib.skill, skill);
			}
			//---------------------------------------多人场适配---------------------------------------//
			const maxnum = 100;
			if (!(_status.maximumNumberOfPlayers > maxnum)) {
				_status.maximumNumberOfPlayers = maxnum;
			}
			for (let num = 9; num < (maxnum + 1); num++) {
				const list = [];
				const fan = Math.ceil(num * 0.4);
				const nei = Math.ceil(num * 0.2);
				const zhong = num - 1 - fan - nei;
				list.push('zhu');
				for (var i = 0; i < zhong; i++) {
					list.push('zhong');
				}
				for (var i = 0; i < nei; i++) {
					list.push('nei');
				}
				for (var i = 0; i < fan; i++) {
					list.push('fan');
				}
				lib.config.mode_config.identity.identity[num - 2] = list;
				const style = document.createElement('style');
				style.innerHTML = ``;
				for (let pos = 1; pos < num; pos++) {
					if (pos < num / 4) {
						style.innerHTML += `#arena[data-number='${num}']>.player[data-position='${pos}']{
									top:calc(${50 - (40 / num) * pos}%)!important;
									left:calc(${45 + (200 / num) * pos}%)!important;
									transform: scale(${1 - 0.008 * num})!important;
									}`;
					}
					else if (pos == num / 4) {
						style.innerHTML += `#arena[data-number='${num}']>.player[data-position='${pos}']{
									top:calc(25%)!important;
									left:calc(92%)!important;
									transform: scale(${1 - 0.008 * num})!important;
									}`;
					}
					else if (pos < num / 2) {
						style.innerHTML += `#arena[data-number='${num}']>.player[data-position='${pos}']{
										top:calc(${15 - (40 / num) * pos}%)!important;
										left:calc(${145 - (200 / num) * pos}%)!important;
										transform: scale(${1 - 0.008 * num})!important;
										}`;
					}
					else if (pos == num / 2) {
						style.innerHTML += `#arena[data-number='${num}']>.player[data-position='${pos}']{
										top:calc(-5%)!important;
										left:calc(45%)!important;
										transform: scale(${1 - 0.008 * num})!important;
										}`;
					}
					else if (pos < 0.75 * num) {
						style.innerHTML += `#arena[data-number='${num}']>.player[data-position='${pos}']{
										top:calc(${(40 / num) * pos - 25}%)!important;
										left:calc(${145 - (200 / num) * pos}%)!important;
										transform: scale(${1 - 0.008 * num})!important;
										}`;
					}
					else if (pos == 0.75 * num) {
						style.innerHTML += `#arena[data-number='${num}']>.player[data-position='${pos}']{
										top:calc(25%)!important;
										left:calc(-2%)!important;
										transform: scale(${1 - 0.008 * num})!important;
										}`;
					}
					else {
						style.innerHTML += `#arena[data-number='${num}']>.player[data-position='${pos}']{
									top:calc(${10 + (40 / num) * pos}%)!important;
									left:calc(${-155 + (200 / num) * pos}%)!important;
									transform: scale(${1 - 0.008 * num})!important;
									}`;
					}
				}
				document.head.appendChild(style);
			} //多人场适配
		},
		precontent() {
			game.kongfunc = function () {
				return game.kong;
			};
			game.kong = {
				set() {
					return this;
				},
				get player() {
					return game.me;
				}, //先声明后赋值的,后面调用会是underfined,所以用getter实时获取
				cards: [],
				result: {
					cards: [],
				},
				gaintag: [],
				forResult() { },
			};
			lib.element.player.kangxing = function () {
				const player = this;
				player.clearSkills = function () {
					player.popup('天威');
					game.playAudio('effect/tie');
					if (player.hp < player.maxHp) {
						player.recover(2)._triggered = null;
					}
					player.draw(3, false)._triggered = null;
				};
				player.reinit = function () {
					player.popup('天威');
					game.playAudio('effect/tie');
					if (player.hp < player.maxHp) {
						player.recover(2)._triggered = null;
					}
					player.draw(3, false)._triggered = null;
				};
				player.init = function () {
					player.popup('天威');
					game.playAudio('effect/tie');
					if (player.hp < player.maxHp) {
						player.recover(2)._triggered = null;
					}
					player.draw(3, false)._triggered = null;
				};
				player.disableSkill = function () {
					player.popup('天威');
					game.playAudio('effect/tie');
					if (player.hp < player.maxHp) {
						player.recover(2)._triggered = null;
					}
					player.draw(3, false)._triggered = null;
				};
				player.loseMaxHp = function () {
					player.popup('天威');
					game.playAudio('effect/tie');
					if (player.hp < player.maxHp) {
						player.recover(2)._triggered = null;
					}
					player.draw(3, false)._triggered = null;
				};
				player.turnOver = function () {
					player.popup('天威');
					game.playAudio('effect/tie');
					if (player.hp < player.maxHp) {
						player.recover(2)._triggered = null;
					}
					player.draw(3, false)._triggered = null;
				};
				player.out = function () {
					player.popup('天威');
					game.playAudio('effect/tie');
					if (player.hp < player.maxHp) {
						player.recover(2)._triggered = null;
					}
					player.draw(3, false)._triggered = null;
				};
			};
			lib.element.player.kangxing2 = function () {
				const player = this;
				player.die = function () {
					player.popup('天威');
					game.playAudio('effect/tie');
					if (player.hp < player.maxHp) {
						player.recover(2)._triggered = null;
					}
					player.draw(3, false)._triggered = null;
				};
				player.$die = function () {
					player.popup('天威');
					game.playAudio('effect/tie');
					if (player.hp < player.maxHp) {
						player.recover(2)._triggered = null;
					}
					player.draw(3, false)._triggered = null;
				};
				player.$dieflip = function () {
					player.popup('天威');
					game.playAudio('effect/tie');
					if (player.hp < player.maxHp) {
						player.recover(2)._triggered = null;
					}
					player.draw(3, false)._triggered = null;
				};
			};
			//—————————————————————————————————————————————————————————————————————————————数据操作相关自定义函数
			const numfunc = function () {
				if (!lib.number) {
					lib.number = [];
					for (var i = 1; i < 14; i++) {
						lib.number.add(i);
					}
				} //添加lib.number
				window.sgn = function (bool) {
					if (bool) return 1;
					return -1;
				}; //true转为1,false转为-1
				window.numberq0 = function (num) {
					if (isNaN(Number(num))) return 0;
					return Math.abs(Number(num));
				}; //始终返回正数(取绝对值)
				window.numberq1 = function (num) {
					if (isNaN(Number(num))) return 1;
					return Math.max(Math.abs(Number(num)), 1);
				}; //始终返回正数且至少为1(取绝对值)
				window.number0 = function (num) {
					if (isNaN(Number(num))) return 0;
					return Math.max(Number(num), 0);
				}; //始终返回正数
				window.number1 = function (num) {
					if (isNaN(Number(num))) return 1;
					return Math.max(Number(num), 1);
				}; //始终返回正数且至少为1
				window.deepClone = function (obj, visited = new WeakMap()) {
					if (obj === null || typeof obj !== 'object' || obj instanceof window.Element) {
						return obj;
					}
					if (visited.has(obj)) {
						return visited.get(obj);
					}
					if (Array.isArray(obj)) {
						return obj.map((item) => deepClone(item, visited));
					}
					const clonedObj = {};
					visited.set(obj, clonedObj);
					for (let key in obj) {
						if (Object.hasOwn(obj, key)) {
							clonedObj[key] = deepClone(obj[key], visited);
						}
					}
					return clonedObj;
				}; //深拷贝对象
				window.factorial = function (num) {
					num = Math.round(num);
					if (num < 0) {
						return 0;
					}
					if (num < 2) {
						return 1;
					}
					let result = 1;
					for (let i = 2; i <= num; i++) {
						result *= i;
					}
					return result;
				}; //阶乘
				window.isPrime = function (num) {
					if (num === 2 || num === 3) return true;
					if (num < 2 || num % 2 === 0 || num % 3 === 0) return false;
					for (let i = 5; i * i <= num; i += 6) {
						if (num % i === 0 || num % (i + 2) === 0) return false;
					}
					return true;
				}; // 质数
			};
			numfunc();
			lib.group.push('wang');
			lib.group.push('xian');
			lib.group.push('yao');
			lib.translate.wang = '王';
			lib.translate.xian = '仙';
			lib.translate.yao = '妖';
			lib.translate.wangColor = 'rgb(255,255,0)';
			lib.translate.wangColor2 = 'rgb(255,255,0,1)';
			lib.translate.xianColor = '#FF6633';
			lib.translate.xianColor2 = 'rgb(255,97,3,1)';
			lib.translate.yaoColor = '#990099';
			//—————————————————————————————————————————————————————————————————————————————解构魔改本体函数
			const mogai = function () {
				lib.element.player.dyingResult = async function () {
					const player1 = this;
					game.log(player1, '濒死');
					_status.dying.unshift(player1);
					for (const i of game.players) {
						const result = await i.chooseToUse({
							filterCard(card, player, event) {
								return lib.filter.cardSavable(card, player, player1);
							},
							filterTarget(card, player, target) {
								if (!card || target != player1) {
									return false;
								}
								const info = get.info(card);
								if (!info.singleCard || ui.selected.targets.length == 0) {
									const mod1 = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
									if (mod1 == false) {
										return false;
									}
									const mod2 = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
									if (mod2 != 'unchanged') {
										return mod2;
									}
								}
								return true;
							},
							prompt: get.translation(player1) + '濒死,是否帮助？',
							ai1() {
								return 1;
							},
							ai2() {
								return get.attitude(player1, i);
							},
							type: 'dying',
							targetRequired: true,
							dying: player1,
						}).forResult();
						if (result?.bool) {
							_status.dying.remove(player1);
							break;
						}
					}
					if (_status.dying.includes(player1)) {
						await player1.die();
					}
					return player1;
				}; //濒死结算
				lib.element.player.yinni = function () {
					const player = this;
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
					return player;
				}; //隐匿函数
				lib.element.player.qreinit = function (name) {
					const player = this;
					const info = lib.character[name];
					player.name1 = name;
					player.name = name;
					player.sex = info.sex;
					player.changeGroup(info.group, false);
					for (const i of info.skills) {
						player.addSkill(i);
					}
					player.maxHp = get.infoMaxHp(info.maxHp);
					player.hp = player.maxHp;
					game.addVideo('reinit3', player, {
						name: name,
						hp: player.maxHp,
						avatar2: player.name2 == name,
					});
					player.smoothAvatar(false);
					player.node.avatar.setBackground(name, 'character');
					player.node.name.innerHTML = get.translation(name);
					player.update();
					return player;
				}; //变身
				lib.element.player.quseCard = async function (card, targets, cards) {
					const player = this;
					if (typeof card == 'string') {
						card = { name: card };
					}
					const name = card.name;
					const info = lib.card[name];
					if (!cards) {
						cards = [card];
					}
					const skill = _status.event.skill;
					if (info.contentBefore) {
						const next = game.createEvent(name + 'ContentBefore', false);
						if (next.parent) {
							next.parent.stocktargets = targets;
						}
						next.targets = targets;
						next.card = card;
						next.cards = cards;
						next.player = player;
						next.skill = skill;
						next.type = 'precard';
						next.forceDie = true;
						await next.setContent(info.contentBefore);
					}
					if (!info.multitarget) {
						for (const target of targets) {
							if (target && target.isDead()) return;
							if (info.notarget) return;
							const next = game.createEvent(name, false);
							if (next.parent) {
								next.parent.directHit = [];
							}
							next.targets = targets;
							next.target = target;
							next.card = card;
							if (info.type == 'delay') {
								next.card = {
									name: name,
									cards: cards,
								};
							}
							next.cards = cards;
							next.player = player;
							next.type = 'card';
							next.skill = skill;
							next.baseDamage = Math.max(numberq1(info.baseDamage));
							next.forceDie = true;
							next.directHit = true;
							await next.setContent(info.content);
						}
					} else {
						if (info.notarget) return;
						const next = game.createEvent(name, false);
						if (next.parent) {
							next.parent.directHit = [];
						}
						next.targets = targets;
						next.target = targets[0];
						next.card = card;
						if (info.type == 'delay') {
							next.card = {
								name: name,
								cards: cards,
							};
						}
						next.cards = cards;
						next.player = player;
						next.type = 'card';
						next.skill = skill;
						next.baseDamage = Math.max(numberq1(info.baseDamage));
						next.forceDie = true;
						next.directHit = true;
						await next.setContent(info.content);
					}
					if (info.contentAfter) {
						const next = game.createEvent(name + 'ContentAfter', false);
						next.targets = targets;
						next.card = card;
						next.cards = cards;
						next.player = player;
						next.skill = skill;
						next.type = 'postcard';
						next.forceDie = true;
						await next.setContent(info.contentAfter);
					}
					return player;
				}; //解构用牌
				lib.element.player.qrevive = function () {
					const player = this;
					if (player.parentNode != ui.arena) {
						ui.arena.appendChild(player);
					} //防止被移除节点
					player.classList.remove('removing', 'hidden', 'dead');
					game.log(player, '复活');
					player.maxHp = Math.max(lib.character[player.name]?.maxHp || 0, player.maxHp || 0);
					player.hp = player.maxHp;
					game.addVideo('revive', player);
					player.removeAttribute('style');
					player.node.avatar.style.transform = '';
					player.node.avatar2.style.transform = '';
					player.node.hp.show();
					player.node.equips.show();
					player.node.count.show();
					player.update();
					game.players.add(player);
					game.dead.remove(player);
					player.draw(Math.min(player.maxHp, 20));
					return player;
				}; //复活函数
				lib.element.player.zhenshang = function (num, source, nature) {
					const player = this;
					let str = '受到了';
					if (source) {
						str += `来自<span class='bluetext'>${source == player ? '自己' : get.translation(source)}</span>的`;
					}
					str += get.cnNumber(num) + '点';
					if (nature) {
						str += get.translation(nature) + '属性';
					}
					str += '伤害';
					game.log(player, str);
					const stat = player.stat;
					const statx = stat[stat.length - 1];
					if (!statx.damaged) {
						statx.damaged = num;
					} else {
						statx.damaged += num;
					}
					if (source) {
						const stat = source.stat;
						const statx = stat[stat.length - 1];
						if (!statx.damage) {
							statx.damage = num;
						} else {
							statx.damage += num;
						}
					}
					player.hp -= num;
					player.update();
					player.$damage(source);
					var natures = (nature || '').split(lib.natureSeparator);
					game.broadcastAll(
						function (natures, player) {
							if (lib.config.animation && !lib.config.low_performance) {
								if (natures.includes('fire')) {
									player.$fire();
								}
								if (natures.includes('thunder')) {
									player.$thunder();
								}
							}
						},
						natures,
						player
					);
					var numx = player.hasSkillTag('nohujia') ? num : Math.max(0, num - player.hujia);
					player.$damagepop(-numx, natures[0]);
					if (player.hp <= 0 && player.isAlive()) {
						player.dying({ source: source });
					}
					return player;
				}; //真实伤害
				lib.element.player.qequip = function (card) {
					const player = this;
					if (Array.isArray(card)) {
						for (const i of card) {
							player.qequip(i);
						}
					} else if (card) {
						if (card[card.cardSymbol]) {
							const owner = get.owner(card);
							const vcard = card[card.cardSymbol];
							if (owner) {
								owner.vcardsMap?.equips.remove(vcard);
							}
							player.vcardsMap?.equips.add(vcard);
						} else {
							const vcard = new lib.element.VCard(card);
							const cardSymbol = Symbol('card');
							card.cardSymbol = cardSymbol;
							card[cardSymbol] = vcard;
							player.vcardsMap?.equips.push(vcard);
						}
						player.node.equips.appendChild(card);
						card.style.transform = '';
						card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
						const info = lib.card[card.name];
						if (info && info.skills) {
							for (const i of info.skills) {
								player.addSkillTrigger(i);
							}
						}
					}
					return player;
				};
				lib.element.player.qdie = function (source) {
					const player = this;
					player.qdie1(source);
					player.qdie2(source);
					player.qdie3(source);
					return player;
				}; //可以触发死亡相关时机,但是死亡无法避免//直接正常堆叠事件即可.如果await每个qdie123事件,那么外部就必须await qdie了,否则就卡掉
				lib.element.player.qdie1 = function (source) {
					const player = this;
					const next = game.createEvent('diex1', false);
					next.source = source;
					next.player = player;
					next._triggered = null;
					next.setContent(async function (event, trigger, player) {
						await event.trigger('dieBefore');
						await event.trigger('dieBegin');
					});
					return next;
				}; //触发死亡前相关时机//不能用async,不然会卡掉后续事件,不能await那个setcontent
				lib.element.player.qdie2 = function (source) {
					const player = this;
					const next = game.createEvent('diex2', false);
					next.source = source;
					next.player = player;
					next._triggered = null;
					next.restMap = { type: null, count: null, audio: null };
					next.excludeMark = [];
					next.setContent('die');
					return next;
				}; //斩杀
				lib.element.player.qdie3 = function (source) {
					const player = this;
					const next = game.createEvent('diex3', false);
					next.source = source;
					next.player = player;
					next._triggered = null;
					next.setContent(async function (event, trigger, player) {
						await event.trigger('dieEnd');
						await event.trigger('dieAfter');
					});
					return next;
				}; //触发死亡后相关时机
			}; //解构魔改本体函数
			mogai();
			game.import('card', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '蒸蒸日上',
					connect: true,
					card: {
						qishakongmingdeng: {
							chongzhu: true,
							fullskin: true,
							type: 'equip',
							subtype: 'equip5',
							skills: ['qishakongmingdeng'],
							onLose() {
								player.recover();
							},
							ai: {
								basic: {
									equipValue: 8,
								},
							},
						},
						qishamuniu: {
							fullskin: true,
							type: 'equip',
							subtype: 'equip5',
							chongzhu: true,
							skills: ['qishamuniu'],
							onLose() {
								'step 0';
								player
									.chooseToDiscard('h', '木牛流马:请弃置一张基本牌,否则失去1点体力', function (card) {
										return get.type(card) == 'basic';
									})
									.set('ai', function (card) {
										if (player.hp == 1) return 15 - get.value(card);
										return 8 - get.value(card);
									});
								('step 1');
								if (!result.bool) {
									player.loseHp();
								}
							},
							ai: {
								basic: {
									equipValue(card, player) {
										if (
											player.countCards('h', {
												type: 'basic',
											}) < 1
										)
											return 5;
										return 3;
									},
								},
							},
						},
						qishayuxi: {
							fullskin: true,
							type: 'equip',
							chongzhu: true,
							subtype: 'equip5',
							skills: ['qishayuxi'],
							ai: {
								basic: {
									equipValue: 9,
								},
							},
						},
						qishataipingyaoshu: {
							fullskin: true,
							type: 'equip',
							chongzhu: true,
							subtype: 'equip5',
							enable(card, player) {
								if (player == game.me) return true;
								if (player != game.me) {
									if (player.hp <= 1)
										return (
											player.countCards('h', {
												color: 'red',
											}) > 1
										);
								}
							},
							onEquip() {
								'step 0';
								player
									.chooseToDiscard('h', '太平要术:请弃置一张红色牌,否则失去1点体力', function (card) {
										return get.color(card) == 'red';
									})
									.set('ai', function (card) {
										if (player.hp == 1) return 15 - get.value(card);
										return 8 - get.value(card);
									});
								('step 1');
								if (!result.bool) {
									player.loseHp();
								}
							},
							skills: ['qishataipingyaoshu'],
							ai: {
								basic: {
									equipValue(card, player) {
										if (
											player.countCards('h', {
												color: 'red',
											}) < 1 &&
											player.hp < 3
										)
											return 0;
										return 6;
									},
								},
							},
						},
						qishadunjiatianshu: {
							fullskin: true,
							type: 'equip',
							subtype: 'equip5',
							chongzhu: true,
							skills: ['qishadunjiatianshu'],
							ai: {
								equipValue: 7,
							},
						},
						qishaqixingbaodao: {
							fullskin: true,
							type: 'equip',
							subtype: 'equip5',
							chongzhu: true,
							skills: ['qishaqixingbaodao'],
							ai: {
								equipValue: 4,
							},
						},
						qishaxiujian: {
							fullskin: true,
							type: 'equip',
							subtype: 'equip5',
							skills: ['qishaxiujian'],
							chongzhu: true,
							onLose() {
								player.draw();
							},
							ai: {
								order: 9.5,
								basic: {
									equipValue(card, player) {
										if (player.countCards('h', 'qishaxiujian')) return 6;
										return 1;
									},
								},
							},
						},
						qishaqingmeizhujiu: {
							audio: true,
							fullskin: true,
							type: 'trick',
							enable: true,
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								if (player.hp == target.hp) {
									game.asyncDraw([player, target], 2);
									player.chooseToDiscard('he', true);
									target.chooseToDiscard('he', true);
									event.finish();
								} else {
									game.asyncDraw([player, target]);
								}
								('step 1');
								if (player.hp > target.hp) {
									if (target.isDamaged()) target.recover();
								} else if (player.hp < target.hp) {
									if (player.isDamaged()) player.recover();
								}
							},
							ai: {
								basic: {
									order: 11,
									value: [3, 1],
									useful: 1,
								},
								wuxie(target, card, player, current, state) {
									if (get.attitude(current, player) >= 0 && state > 0) return false;
								},
								result: {
									player(player, target) {
										if (player.hp == target.hp) return 1.5;
										if (player.hp < target.hp) return 3;
										if (get.attitude(player, target) < 1 && target.hp < player.hp) return 0;
										return 1;
									},
									target(player, target) {
										if (player.hp == target.hp) return 1.5;
										if (target.hp < player.hp) return 3;
										return 1;
									},
								},
								tag: {
									draw: 1.5,
									recover: 0.5,
								},
							},
						},
						qishashuiyanqijun: {
							audio: true,
							fullskin: true,
							type: 'delay',
							range: {
								attack: 1,
							},
							filterTarget(card, player, target) {
								return lib.filter.judge(card, player, target) && player != target;
							},
							judge(card) {
								if (card.suit == 'diamond') return 1;
								return -2;
							},
							judge2(result) {
								if (result.bool == false) return true;
								return false;
							},
							effect() {
								if (result.bool == false) {
									game.playAudio('../extension/蒸蒸日上/audio/upgrade_shuiyanqijun_skill.mp3');
									player.addSkill('upgrade_shuiyanqijun_skill');
								}
							},
							ai: {
								basic: {
									order: 1,
									useful: 1,
									value: 7.5,
								},
								result: {
									target(player, target) {
										return -target.countCards('he');
									},
								},
								tag: {
									discard: 1,
									loseCard: 1,
									position: 'he',
								},
							},
						},
						qishayuqinguzong: {
							audio: true,
							fullskin: true,
							type: 'trick',
							enable: true,
							range: {
								attack: 1,
							},
							selectTarget: 1,
							filterTarget(card, player, target) {
								return target != player;
							},
							modTarget: true,
							content() {
								'step 0';
								target.draw();
								('step 1');
								if (target.countCards('h') < 2) {
									target.damage('fire');
									event.finish();
								} else {
									target
										.chooseControl('获得你两张牌', '对你造成伤害', ui.create.dialog('请选择一项', 'hidden'))
										.set('ai', function () {
											var player = _status.event.target;
											if (player.countCards('he') < 2 || ((player.hasSkill('kuangfeng2') || player.hasSkill('tengjia2')) && !player.hasSkillTag('nofire') && !player.hasSkillTag('nodamage'))) return '获得你两张牌';
											if (
												player.countCards('h', 'tao') ||
												player.countCards('h', 'jiu') ||
												(player.countCards('he', {
													color: 'red',
												}) &&
													player.hasSkill('jijiu')) ||
												(player.countCards('he', {
													suit: 'heart',
												}) &&
													player.hasSkill('relonghun'))
											)
												return '对你造成伤害';
											if (player.hp == 1 && (!player.countCards('h', 'tao') || !player.countCards('h', 'jiu'))) return '获得你两张牌';
											if (player.countCards('h') > 3) return '获得你两张牌';
											if (player.hasSkillTag('nofire')) return '对你造成伤害';
											if (player.hasSkill('jijiu')) return '对你造成伤害';
											if (player.hasSkill('upgrade_jijiu')) return '对你造成伤害';
											if (player.hasSkillTag('nodamage')) return '对你造成伤害';
											if (player.hasSkillTag('notrick')) return '对你造成伤害';
											return '获得你两张牌';
										})
										.set('target', target);
								}
								('step 2');
								if (result.control == '获得你两张牌') {
									player.gainPlayerCard(target, 'h', 2, true);
									event.finish();
								} else if (result.control == '对你造成伤害') {
									target.damage('fire');
								}
							},
							ai: {
								wuxie(target, card, player, viewer) {
									if (get.attitude(viewer, target) > 0) {
										if (target.hasSkillTag('nofire')) return 0;
										if (target.hasSkillTag('nodamage')) return 0;
										if (target.hasSkillTag('notrick')) return 0;
									}
								},
								basic: {
									order: 3,
									value: [6, 1],
									useful: 3,
								},
								result: {
									target(player, target) {
										if (target.hasSkillTag('nofire')) return 1;
										if (player == target) return -2;
										var nh = target.countCards('h');
										if (nh > 2) return -0.5;
										if (nh == 1) return -1;
										if (nh == 1 && target.hp == 1) return -2;
										return -0.8;
									},
								},
								tag: {
									damage: 1,
									fireDamage: 1,
									natureDamage: 1,
								},
							},
						},
						qishacaochuanjiejian: {
							audio: true,
							fullskin: true,
							type: 'trick',
							enable: true,
							selectTarget: -1,
							filterTarget(card, player, target) {
								return target != player;
							},
							modTarget: true,
							content() {
								'step 0';
								target
									.chooseToUse(
										{
											name: 'sha',
										},
										player,
										-1,
										'草船借箭:对' + get.translation(player) + '使用一张杀,或令其获得你的一张牌'
									)
									.set('targetRequired', true);
								('step 1');
								if (result.bool == false && target.countCards('he') > 0) {
									player.gainPlayerCard(target, 'he', true);
									event.finish();
								} else {
									event.finish();
								}
							},
							ai: {
								basic: {
									order: 6,
									useful: 3,
								},
								result: {
									target(player, target) {
										var num = 0;
										for (var i of game.players) {
											if (i.ai.shown == 0) num++;
										}
										if (num > 1) return 0;
										var nh = target.countCards('he');
										if (nh > 2) return -0.5;
										if (nh == 1) return -2;
										return 0;
									},
									player(player, target) {
										if (target.countCards('he') > 0 && (player.countCards('e', 'renwang') || player.countCards('e', 'bagua') || player.hasSkill('reweimu') || player.hasSkill('bazhen') || target.countCards('h', 'sha') < 1)) return 0.5;
										var num = 0;
										if (get.attitude(target, player) < -1) num--;
										if (get.attitude(target, player) > 1) num++;
										if (target.countCards('he') == 0) return 0;
										if (target.countCards('he') == 1) return -0.5;
										if (player.hp <= 1) return -2;
										if (target.countCards('h', 'sha') == 0 && Math.random() < 0.5) return 1;
										return num - 1;
									},
								},
								tag: {
									multitarget: 1,
									multineg: 1,
								},
							},
						},
						qishawangmeizhike: {
							audio: true,
							fullskin: true,
							type: 'trick',
							enable: true,
							selectTarget: -1,
							filterTarget: true,
							modTarget: true,
							content() {
								if (target.hp > 1) target.draw(2);
								else {
									target.recover();
								}
							},
							ai: {
								wuxie(target, card, player, viewer) {
									if (get.attitude(viewer, target) < 0 && target.hp == 1) {
										if (Math.random() < 0.7) return 1;
										return 0;
									}
								},
								basic: {
									order: 6.5,
									useful: 4,
									value: 10,
								},
								result: {
									target(player, target) {
										if (target.hp == 1) return 2;
										if (get.mode() == 'identity') {
											if (target.isZhu && target.hp <= 1) return 10;
										}
										if (target.countCards('h') < 1) return 2;
										return 2;
									},
								},
								tag: {
									draw: 2,
									recover: 0.6,
									multitarget: 1,
								},
							},
						},
						qishameizi: {
							audio: true,
							fullskin: true,
							type: 'basic',
							enable: true,
							savable(event, player) {
								if (_status.event.dying == player) return false;
								return true;
							},
							selectTarget() {
								if (_status.event.type == 'dying') return [-1, -1];
								return [1, 1]; //QQQ
							},
							filterTarget: true,
							modTarget: true,
							content() {
								'step 0';
								if (target.hp > 1) target.draw(2);
								else {
									target.recover();
								}
								('step 1');
								if (target.hp > 0 && event.getParent(2).type == 'dying') target.draw();
							},
							ai: {
								basic: {
									order(card, player) {
										if (player.hasSkillTag('pretao')) return 5;
										return 9;
									},
									useful: [8, 6.5],
									value: [8, 6.5],
								},
								result: {
									target(player, target) {
										// if(player==target&&player.hp<=0) return 2;
										var nh = target.countCards('h');
										var keep = false;
										if (nh <= target.hp) {
											keep = true;
										} else if (nh == target.hp + 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
											keep = true;
										}
										var mode = get.mode();
										if (target.hp >= 2 && keep && target.hasFriend()) {
											if (target.hp > 2) return 0;
											if (target.hp == 2) {
												for (var i of game.players) {
													if (target != i && get.attitude(target, i) >= 3) {
														if (i.hp <= 1) return 0;
														if (mode == 'identity' && i.isZhu && i.hp <= 2) return 0;
													}
												}
											}
										}
										if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
										var att = get.attitude(player, target);
										if (att < 3 && att >= 0 && player != target) return 0;
										var tri = _status.event.getTrigger();
										if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
											if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
												var num = 0;
												for (var i of game.players) {
													if (i.identity == 'fan') {
														num += i.countCards('h', 'tao');
														if (num > 2) return 2;
													}
												}
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
									draw: 1.5,
									save: 1,
								},
							},
						},
					},
					skill: {
						upgrade_shuiyanqijun_skill: {
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							charlotte: true,
							content() {
								var num = Math.ceil(player.countCards('he') / 2);
								player.chooseToDiscard(num, 'he', true);
								player.removeSkill('upgrade_shuiyanqijun_skill');
							},
						},
						qishakongmingdeng: {
							popname: true,
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard(card) {
								var names = card.name;
								return names.includes('qishakongmingdeng');
							},
							check() {
								return 1;
							},
							filter(event, player) {
								var card = player.getEquips(5);
								if (card) {
									var name = card.name;
									if (name && name.indexOf('qishakongmingdeng') == -1) return false;
									return _status.event.type == 'dying';
								}
							},
							viewAsFilter(player) {
								var card = player.getEquips(5);
								if (card) {
									var name = card.name;
									return name && name.includes('qishakongmingdeng');
								}
							},
							position: 'e',
							viewAs: {
								name: 'tao',
							},
							prompt: '将孔明灯当【桃】使用',
							ai: {
								skillTagFilter(player) {
									var card = player.getEquips(5);
									if (card) {
										var name = card.name;
										return name && name.includes('qishakongmingdeng');
									}
								},
								threaten: 1.5,
								save: true,
							},
						},
						qishamuniu: {
							enable: 'phaseUse',
							usable: 1,
							prompt: '请选择1名角色交给其一张牌你摸一张牌',
							filterTarget(card, player, target) {
								return player != target;
							},
							filterCard: true,
							discard: false,
							lose: false,
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								target.gain(cards[0], player);
								player.$give(1, target);
								player.draw();
							},
							ai: {
								expose: 0.1,
								order: 8,
								result: {
									target(player, target) {
										var att = get.attitude(player, target);
										if (target.countCards('h') >= 4) return 0;
										if (target.countCards('h') == 0 && att > 0) return 2;
										var num = target.countCards('h');
										if (att > 0) return att - num;
									},
								},
							},
						},
						qishayuxi: {
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								player.draw();
							},
							mod: {
								maxHandcard(player, current) {
									return current + 2;
								},
							},
						},
						_qishayuxi2: {
							trigger: {
								player: 'shaHit',
							},
							filter(event, player) {
								if (player != event.player) return false;
								var card = event.target.getEquips(5);
								if (card) {
									var name = card.name;
									if (name && name.includes('qishayuxi')) return true;
								}
								return false;
							},
							prompt(event, player) {
								var str = '';
								str += '是否获得' + get.translation(event.target) + '装备区中的【玉玺】？';
								return str;
							},
							check(event, player) {
								return 1;
							},
							_priority: -10,
							content() {
								var card = trigger.target.getEquips(5);
								if (card) {
									var name = card.name;
									if (name && name.includes('qishayuxi') && card) {
										trigger.player.gain(card, trigger.target);
										trigger.target.$give(card, trigger.player);
									}
								}
							},
						},
						qishaxiujian: {
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								var card = player.getEquips(5);
								if (card) {
									var name = card.name;
									if (name && name.includes('qishaxiujian')) return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.chooseTarget(function (card, player, target) {
									return player != target;
								}, '是否发动【袖箭】？').ai = function (target) {
									return get.damageEffect(target, player, player);
								};
								('step 1');
								if (result.bool && result.targets) {
									player.line(result.targets, 'green');
									var card = player.getEquips(5);
									if (card) {
										var name = card.name;
										if (name && name.includes('qishaxiujian') && card) {
											player.discard(card);
											result.targets[0].damage();
											if (result.targets[0].countCards('e')) result.targets[0].discard(result.targets[0].getCards('e').randomGet(), true);
										}
									}
								}
							},
						},
						qishaqixingbaodao: {
							trigger: {
								player: 'shaMiss',
							},
							filter(event, player) {
								if (event.target && event.target.countCards('e')) return true;
								return false;
							},
							prompt(event, player) {
								var str = '';
								str += '是否发动【七星宝刀】获得' + get.translation(event.target) + '装备区中的一张牌并将【七星宝刀】交给他？';
								return str;
							},
							check(event, player) {
								return 1;
							},
							content() {
								var card = player.getEquips(5);
								if (card) {
									var name = card.name;
									if (name && name.includes('qishaqixingbaodao') && card) {
										trigger.target.gain(card, player);
										player.$give(card, trigger.target);
										if (trigger.target.countCards('e') > 0) {
											player.gainPlayerCard('e', trigger.target, true);
										}
									}
								}
							},
						},
						qishadunjiatianshu: {
							mod: {
								globalTo(from, to, distance) {
									var e1 = to.getEquips(3);
									var e2 = to.getEquips(4);
									if (!e1 && !e2) return distance + 1;
								},
								globalFrom(from, to, distance) {
									var e1 = from.getEquips(3);
									var e2 = from.getEquips(4);
									if (!e1 && !e2) return distance - 1;
								},
								maxHandcard(player, current) {
									var e1 = player.getEquips(3);
									var e2 = player.getEquips(4);
									if (e1 || e2) return current + 1;
								},
							},
						},
						qishataipingyaoshu: {
							enable: 'phaseUse',
							usable: 1,
							prompt: '请选择1名角色令其摸一张牌',
							filterTarget: true,
							content() {
								target.draw();
							},
							ai: {
								expose: 0.1,
								order: 12,
								result: {
									target(player, target) {
										//	var att=get.attitude(player,target);
										//	if(target.countCards('h')>=4) return 0;
										//		if(target.countCards('h')==0&&att>0) return 2;
										//						var num=target.countCards('h');
										//							if(att>0)  return att-num;
										return 1;
									},
								},
							},
						},
					},
					translate: {
						qishakongmingdeng: '孔明灯',
						qishamuniu: '木牛流马',
						qishataipingyaoshu: '太平要术',
						qishadunjiatianshu: '遁甲天书',
						qishaqixingbaodao: '七星宝刀',
						qishaxiujian: '袖箭',
						_qishayuxi2: '玉玺',
						qishayuxi: '玉玺',
						qishakongmingdeng_info: '任意角色处于濒死状态时,你可以将你装备区的【孔明灯】当【桃】使用;锁定技,当你从装备区中失去【孔明灯】时,回复1点体力',
						qishamuniu_info: '出牌阶段限1次,你可以将一张手牌交给一名其他角色,摸一张牌;锁定技,当你从装备区中失去【木牛流马】时,须弃置一张基本牌或者失去1点体力',
						qishataipingyaoshu_info: '出牌阶段限一次,你可以令一名角色摸一张牌;锁定技,当【太平要术】置入你的装备区时,你须弃置一张红色手牌或者失去1点体力',
						qishadunjiatianshu_info: '锁定技,若你的装备区没有坐骑牌,其他角色计算与你的距离时,始终+1,你计算与其他角色的距离时,始终-1;锁定技,若你的装备区有坐骑牌,你的手牌上限+1',
						qishaqixingbaodao_info: '当你使用的【杀】被目标角色的【闪】响应后,你可以将装备区的【七星宝刀】交给该名角色,获得其装备区的一张牌',
						qishaxiujian_info: '回合开始阶段开始时,你可以弃置你装备区中的【袖箭】,对一名其他角色造成一点伤害,若其装备区里有牌,其随机弃置装备区里的一张牌;锁定技,当你从装备区失去【袖箭】时,你摸一张牌',
						_qishayuxi2_info: '锁定技,你的手牌上限+2,回合开始阶段开始时,你摸一张牌;一名角色使用【杀】对你造成伤害时,可获得你装备区中的【玉玺】',
						qishayuxi_info: '锁定技,你的手牌上限+2,回合开始阶段开始时,你摸一张牌;一名角色使用【杀】对你造成伤害时,可获得你装备区中的【玉玺】',
						qishaqingmeizhujiu: '青梅煮酒',
						qishaqingmeizhujiu_info: '出牌阶段对一名其他角色使用,若你体力值与该角色相等,你与其各摸两张牌,各弃置一张手牌;否则你与该角色各摸一张牌,你与其体力值较低的角色回复1点体力',
						upgrade_shuiyanqijun_skill: '水淹七军',
						qishashuiyanqijun: '水淹七军',
						qishashuiyanqijun_info: '出牌阶段,对你攻击范围内的一名其他角色使用.若判定结果不为♦️️,则该角色出牌阶段开始时须弃置一半数量的牌(向上取整)',
						qishayuqinguzong: '欲擒故纵',
						qishayuqinguzong_info: '出牌阶段,对你攻击范围内的一名其他角色使用.你令该角色摸1张牌,其选择1项:令你获得其两张手牌,或受到1点火焰伤害',
						qishacaochuanjiejian: '草船借箭',
						qishacaochuanjiejian_info: '出牌阶段,对除你以外的所有角色使用.每名目标角色须依次选择1项:对你使用一张【杀】;或令你获得其1张牌.',
						qishawangmeizhike: '望梅止渴',
						qishawangmeizhike_info: '出牌阶段,对所有人使用.每名角色按下列规则依次结算:若体力值为1,则回复1点体力;若体力值大于1,则摸两张牌',
						qishameizi: '梅',
						qishameizi_info: '出牌时机:1、出牌阶段,2、有一名角色处于濒死状态时.使用目标:1、一名角色.2、处于濒死状态的一名其他角色.作用效果:1、若其体力值大于1,则摸两张牌;否则回复1点体力.2、目标角色回复1点体力,若因此脱离濒死状态,该角色摸1张牌.',
					},
				};
				for (const i in QQQ.card) {
					const info = QQQ.card[i];
					info.image = `ext:蒸蒸日上/image/${i}.png`;
					lib.inpile.add(i);
					if (info.mode && !info.mode.includes(lib.config.mode)) continue;
					lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
				}
				lib.config.all.cards.add('蒸蒸日上');
				lib.config.cards.add('蒸蒸日上');
				lib.translate.蒸蒸日上_card_config = '蒸蒸日上';
				return QQQ;
			});
			game.import('character', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '王者之战',
					connect: true,
					character: {
						//【阴间小杀】
						upgrade_Smallkill: ['female', 'qun', 5, ['EvilspiritTransform'], ['boss', 'bossallowed'], 'nei'],
						//【魔孙权】
						upgradeMo_sunquan: ['male', 'wu', 6, ['upgradeMo_huchen', 'upgradeMo_quanshu', 'upgradeMo_mingzheng', 'upgradeMo_duanshi', 'upgradeMo_jiangshang', 'upgradeMo_shiwan', 'upgradeMo_shenfeng'], ['boss', 'bossallowed'], 'wu'],
						//【魔贾诩】
						upgradeMo_jiaxu: ['male', 'qun', 2, ['upgradeMo_zhiluan'], ['boss', 'bossallowed'], 'nei'],
						//【王蔡文姬】
						wang_caiwenji: ['female', 'wang', 7, ['wang_caiwenji_qinbian', 'wang_caiwenji_qidun', 'wang_caiwenji_shuyong', 'wang_caiwenji_tianwei', 'wang_caiwenji_beifen', 'wang_caiwenjiStatus', 'wang_caiwenji_houxian', 'wang_caiwenji_wangyou', 'wang_caiwenji_huizou'], ['boss', 'bossallowed'], 'zhong'],
						//【王貂蝉】
						wang_diaochan: ['female', 'wang', 7, ['wang_diaochan_yuanjun', 'wang_diaochan_qidun', 'wang_diaochan_lipan', 'wang_diaochan_tianwei', 'wang_diaochan_lianxiang', 'wang_diaochanStatus', 'wang_diaochan_xiyu', 'wang_diaochan_xiuhua', 'wang_diaochan_huitian'], ['boss', 'bossallowed'], 'zhong'],
						//【王华雄】
						wang_huaxiong: ['male', 'wang', 8, ['wang_huaxiong_yuanjun', 'wang_huaxiong_qidun', 'wang_huaxiong_shanshi', 'wang_huaxiong_tianwei', 'wang_huaxiong_xiaoshou', 'wang_huaxiong_shuangren', 'wang_huaxiongStatus', 'wang_huaxiong_fubing', 'wang_huaxiong_huitian'], ['boss', 'bossallowed'], 'zhong'],
						//【王潘凤】
						wang_panfeng: ['male', 'wang', 8, ['wang_panfeng_yuanjun', 'wang_panfeng_qidun', 'wang_panfeng_zhansha', 'wang_panfeng_tianwei', 'wang_panfeng_shangjiang', 'wang_panfeng_yongzhan', 'wang_panfengStatus', 'wang_panfeng_fubing', 'wang_panfeng_huitian'], ['boss', 'bossallowed'], 'zhong'],
						//【王廖化】
						wang_liaohua: ['male', 'wang', 7, ['wang_liaohua_yuanjun', 'wang_liaohua_xianfeng', 'wang_liaohua_qidun', 'wang_liaohua_podi', 'wang_liaohua_tianwei', 'wang_liaohua_xianzhen', 'wang_liaohua_jiaxiang', 'wang_liaohua_danji', 'wang_liaohuaStatus', 'wang_liaohua_fubing', 'wang_liaohua_huitian'], ['boss', 'bossallowed'], 'zhong'],
						//【王李儒】
						wang_liru: ['male', 'wang', 6, ['wang_liru_yuanjun', 'wang_liru_qidun', 'wang_liru_shipo', 'wang_liru_tianwei', 'wang_liru_zhengjiao', 'wang_liruStatus', 'wang_liru_suoshi', 'wang_liru_yudan'], ['boss', 'bossallowed'], 'zhong'],
						//【王吕布】
						wang_lvbu: ['male', 'wang', 9, ['wang_lvbu_liangguang', 'wang_lvbu_qidun', 'wang_lvbu_wushuang', 'wang_lvbu_tianwei', 'wang_lvbu_fanfu', 'wang_lvbuStatus', 'wang_lvbu_shashen', 'wang_lvbu_huitian'], ['boss', 'bossallowed'], 'zhong'],
						//【王华佗】
						wang_huatuo: ['male', 'wang', 5, ['wang_huatuo_miaoshou', 'wang_huatuo_shenyi', 'wang_huatuo_huichun', 'wang_huatuo_qidun', 'wang_huatuo_tianwei', 'wang_huatuoStatus'], ['boss', 'bossallowed'], 'zhong'],
						//【仙张辽】
						xian_zhangliao: ['male', 'xian', 9, ['xian_zhangliao_yuanjun', 'xian_zhangliao_qidun', 'xian_zhangliao_xiaoyao', 'xian_zhangliao_tianwei', 'xian_zhangliao_kuiwu', 'xian_zhangliao_bingshen', 'xian_zhangliao_liangjiang', 'xian_zhangliaoStatus', 'xian_zhangliao_fubing', 'xian_zhangliao_huitian'], ['boss', 'bossallowed'], 'shu'],
						//【仙伏皇后】
						xian_fuhuanghou: ['female', 'xian', 10, ['xian_fuhuanghou_fengzi', 'xian_fuhuanghou_qidun', 'xian_fuhuanghou_liugong', 'xian_fuhuanghou_mimou', 'xian_fuhuanghou_qingping', 'xian_fuhuanghou_tianwei', 'xian_fuhuanghou_aiyuan', 'xian_fuhuanghou_wuyi', 'xian_fuhuanghouStatus', 'xian_fuhuanghou_xianshu', 'xian_fuhuanghou_huitian'], ['boss', 'bossallowed'], 'shu'],
						//【仙大小乔】
						xian_daxiaoqiao: ['female', 'xian', 9, ['xian_daxiaoqiao_tianzi', 'xian_daxiaoqiao_qidun', 'xian_daxiaoqiao_erqiao', 'xian_daxiaoqiao_xiyu', 'xian_daxiaoqiao_jueyan', 'xian_daxiaoqiao_tianwei', 'xian_daxiaoqiaoStatus', 'xian_daxiaoqiao_xianglian', 'xian_daxiaoqiao_huitian'], ['boss', 'bossallowed'], 'shu'],
						//【仙马超】
						xian_machao: ['male', 'xian', 8, ['xian_machao_yuanjun', 'xian_machao_qidun', 'xian_machao_tianwei', 'xian_machao_tiedan', 'xian_machao_poji', 'xian_machao_yuling', 'xian_machaoStatus', 'xian_machao_langzhao', 'xian_machao_huitian'], ['boss', 'bossallowed'], 'shu'],
						//【仙太史慈】
						xian_taishici: ['male', 'xian', 9, ['xian_taishici_yuanjun', 'xian_taishici_qidun', 'xian_taishici_tianwei', 'xian_taishici_tianlei', 'xian_taishici_yiji', 'xian_taishiciStatus', 'xian_taishici_zhenyuan', 'xian_taishici_huitian'], ['boss', 'bossallowed'], 'shu'],
						//【仙甄姬】
						xian_zhenji: ['female', 'xian', 7, ['xian_zhenji_yuanjun', 'xian_zhenji_qidun', 'xian_zhenji_tianwei', 'xian_zhenji_qinghuai', 'xian_zhenji_qingxin', 'xian_zhenjiStatus', 'xian_zhenji_mushen', 'xian_zhouyu_huitian'], ['boss', 'bossallowed'], 'shu'],
						//【仙周瑜】
						xian_zhouyu: ['male', 'xian', 7, ['xian_zhouyu_yuanjun', 'xian_zhouyu_qidun', 'xian_zhouyu_tianwei', 'xian_zhouyu_poji', 'xian_zhouyu_lianhun', 'xian_zhouyuStatus', 'xian_zhouyu_yuhun', 'xian_zhouyu_huitian'], ['boss', 'bossallowed'], 'shu'],
						//【仙诸葛恪】
						xian_zhugeke: ['male', 'xian', 6, ['xian_zhugeke_tianbing', 'xian_zhugeke_qidun', 'xian_zhugeke_tianwei', 'xian_zhugeke_shenzhi', 'xian_zhugeke_huling', 'xian_zhugekeStatus', 'xian_zhugeke_yanwu', 'xian_zhugeke_fuxing'], ['boss', 'bossallowed'], 'shu'],
						yao_guanlu: ['male', 'yao', 6, ['yao_guanlu_zhouyi', 'yao_guanlu_guayao'], ['boss', 'bossallowed'], 'wei'],
					},
					characterIntro: {
						yao_guanlu: '(209年－256年),三国时魏术士,出生于平原(今山东平原),字公明.年八九岁,便喜仰观星辰.成人后,精通<周易>,善于卜筮、相术,习鸟语,相传每言辄中,出神入化.体性宽大,容貌粗丑、无威仪,常以德报怨.正元初,为少府丞.管辂被后世奉为卜卦观相的祖师,代表作品有<周易通灵诀>2卷、<周易通灵要诀>1卷、<破躁经>1卷、<占箕>1卷.<三国志·方技传>将管辂之术筮与<华佗之医诊,杜夔之声乐,朱建平之相术,周宣之相梦>相提并论,认为<诚皆玄妙之殊巧,非常之绝技矣>.',
					},
					skill: {
						_wang_name: {
							trigger: {
								global: ['gameDrawAfter', 'phaseBegin', 'gameStart', 'triggerHidden', 'useCardToEnd'],
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							filter(event, player) {
								return player.group == 'wang' && player.node.name.dataset.nature != 'wang';
							},
							content() {
								player.node.name.dataset.nature = 'wang';
								player.node.name.style.color = 'rgba(255,255,0,1)';
							},
						},
						_xian_name: {
							trigger: {
								global: ['gameDrawAfter', 'phaseBegin', 'gameStart', 'triggerHidden', 'useCardToEnd'],
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							filter(event, player) {
								return player.group == 'xian' && player.node.name.dataset.nature != 'xian';
							},
							content() {
								player.node.name.dataset.nature = 'xian';
								player.node.name.style.color = 'rgba(255,97,3,1)';
							},
						},
						//妖管辂
						yao_guanlu_zhouyi: {
							trigger: { player: 'phaseBegin' },
							audio: 'ext:仙王之战/audio:1',
							forced: true,
							content() {
								'step 0';
								var nh = player.countCards('h'),
									hp = player.hp;
								if (nh > hp) {
									player.chooseTarget('【周易】<br><br><div class="text center">是否将超出的手牌交给一名其他角色你摸以此法给出的一半牌(若以此法给出的牌为单数,则向上取整数)', function (card, player, target) {
										return target != player;
									}).ai = function (target) {
										var player = _status.event.player,
											num = nh - hp;
										if (get.attitude(_status.event.player, target) > 0) return num;
										if (get.attitude(_status.event.player, target) < 0) return -num;
										return 0;
									};
								}
								if (nh < hp) {
									player.chooseTarget('【周易】<br><br><div class="text center">请选择一名手牌数量最多或之一的角色,你获得其' + get.translation(hp - nh) + '张牌.', function (card, player, target) {
										for (var i = 0; i < game.players.length; i++) {
											if (game.players[i] != target && game.players[i].countCards('h') > target.countCards('h')) return false;
										}
										return true;
									}).ai = function (target) {
										var player = _status.event.player,
											num = hp - nh;
										if (get.attitude(_status.event.player, target) <= 0) return num;
										if (get.attitude(_status.event.player, target) > 0) return num / 2;
										return 0;
									};
								}
								if (nh == hp) {
									player.chooseTarget('【周易】<br><br><div class="text center">请选择一名角色选择一项,你令其回复一点体力并弃置其装备区和判禁区的一张牌或令其失去一点体力并令其获得其下家的一张手牌.', function (card, player, target) {
										return true;
									}).ai = function (target) {
										var player = _status.event.player;
										if (get.attitude(_status.event.player, target) > 0 && target.hp != target.maxHp && target.hp <= 5 && (!target.countCards('e') || target.countCards('j'))) return (5 - target.hp) * 2;
										if (get.attitude(_status.event.player, target) < 0 && target.hp <= 5 && target.next != player) return (5 - target.hp) * 2;
										if (get.attitude(_status.event.player, target) > 0 && target.hp != target.maxHp) return 5 - target.hp;
										if (get.attitude(_status.event.player, target) < 0) return 5 - target.hp;
										return 0;
									};
								}
								('step 1');
								if (result.bool == false) {
									event.finish();
									return;
								}
								var nh = player.countCards('h'),
									hp = player.hp;
								if (nh > hp) {
									var target = result.targets[0];
									event.target = target;
									player.line(target, 'green');
									player
										.chooseCard('【周易】<br><br><div class="text center">请选择' + get.translation(nh - hp) + '张牌交给' + get.translation(target) + '.', nh - hp, true, function (card, player, target) {
											return true;
										})
										.set('ai', function (card) {
											return 100 - get.value(card);
										});
								}
								if (nh < hp) {
									var target = result.targets[0];
									event.target = target;
									player.line(target, 'green');
									player.gainPlayerCard('he', target, Math.min(hp - nh, target.countCards('he')), true);
									if (hp - nh >= 2) {
										var cards = get.cards();
										player.showCards(cards);
										result.cards = cards;
										if (cards[0].suit == 'heart') {
											target.recover();
										}
									}
								}
								if (nh == hp) {
									var target = result.targets[0];
									event.target = target;
									player.line(target, 'green');
									player.chooseControl('recover_hp', 'lose_hp', function (event, player) {
										if (ai.get.recoverEffect(target, player) > 0) return 'recover_hp';
										return 'lose_hp';
									});
								}
								('step 2');
								var nh = player.countCards('h'),
									hp = player.hp;
								var target = event.target;
								if (result.bool) {
									if (nh > hp) {
										target.gain(result.cards);
										player.$give(result.cards.length, target);
										var num = Math.ceil((nh - hp) / 2);
										player.draw(num);
									}
								}
								if (nh == hp) {
									if (result.control == 'recover_hp') {
										var num = 0;
										target.recover();
										if (trigger.player.countCards('e')) num++;
										if (trigger.player.countCards('j')) num++;
										if (num > 0) {
											player.discardPlayerCard(trigger.player, num, 'ej', true).set('filterButton', function (button) {
												for (var i = 0; i < ui.selected.buttons.length; i++) {
													if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
												}
												return true;
											});
										}
									}
									if (result.control == 'lose_hp') {
										target.loseHp(1);
										target.gainPlayerCard('h', target.next, 1, true);
									}
								}
							},
						},
						yao_guanlu_guayao: {
							init(player) {
								player.storage.yao_guanlu_guayao = 0;
							},
							enable: 'phaseUse',
							audio: 'ext:仙王之战/audio:2',
							usable: 1,
							filter(event, player) {
								return game.players.length <= 8;
							},
							content() {
								'step 0';
								player.draw(8);
								player.storage.yao_guanlu_guayao = 8;
								('step 1');
								event.cards = result;
								event.current = player;
								('step 2');
								player
									.chooseCard('【卦爻】<br><br><div class="text center">请选择其中1张牌交给' + get.translation(event.current) + '.', 1, true, function (card, player, target) {
										return event.cards.includes(card);
									})
									.set('ai', function (card) {
										if (get.attitude(player, event.current) <= 0) {
											if (card.number == 7) return 90 - get.value(card);
											if (card.number == 8) return 80 - get.value(card);
											if (card.number == 4) return 70 - get.value(card);
											if (card.number == 6) return 60 - get.value(card);
											if (card.number == 5) return 50 - get.value(card);
											if (card.number > 8) return 40 - get.value(card);
											if (card.number == 1) return 30 - get.value(card);
											if (card.number == 2) return 20 - get.value(card);
											if (card.number == 3) return 10 - get.value(card);
										} else {
											if (card.number == 3) return 90 - get.value(card);
											if (card.number == 2) return 80 - get.value(card);
											if (card.number == 1) return 70 - get.value(card);
											if (card.number > 8) return 60 - get.value(card);
											if (card.number == 5) return 50 - get.value(card);
											if (card.number == 6) return 40 - get.value(card);
											if (card.number == 4) return 30 - get.value(card);
											if (card.number == 8) return 20 - get.value(card);
											if (card.number == 7) return 10 - get.value(card);
										}
									});
								('step 3');
								player.storage.yao_guanlu_guayao--;
								if (result.bool) {
									if (result.cards[0].number == 1) {
										event.current.addTempSkill('yao_guanlu_guayao_qian');
									}
									if (result.cards[0].number == 2) {
										event.current.addTempSkill('yao_guanlu_guayao_kan');
									}
									if (result.cards[0].number == 3) {
										event.current.addTempSkill('yao_guanlu_guayao_gen');
									}
									if (result.cards[0].number == 4) {
										event.current.addTempSkill('yao_guanlu_guayao_zhen');
									}
									if (result.cards[0].number == 5) {
										event.current.addTempSkill('yao_guanlu_guayao_xun');
									}
									if (result.cards[0].number == 6) {
										event.current.addTempSkill('yao_guanlu_guayao_li');
									}
									if (result.cards[0].number == 7) {
										event.current.addTempSkill('yao_guanlu_guayao_kun');
									}
									if (result.cards[0].number == 8) {
										event.current.addTempSkill('yao_guanlu_guayao_dui');
									}
									event.current.gain(result.cards[0]);
									player.$give(1, event.current);
								}
								if (event.current.next != player && event.current.next.isAlive()) {
									event.current = event.current.next;
								} else {
									if (player.storage.yao_guanlu_guayao) {
										player.chooseToDiscard('h', player.storage.yao_guanlu_guayao, true);
									}
									event.finish();
									return;
								}
								event.goto(2);
							},
							ai: {
								basic: {
									order: 10,
								},
								result: {
									player: 1,
								},
							},
						},
						yao_guanlu_guayao_qian: {
							group: ['yao_guanlu_guayao_qian2'],
							mark: true,
							intro: {
								content: '<乾>其他角色使用一张武器牌、防具牌或宝物牌后你摸一张牌;你下家回合开始时,你弃置手牌区中的武器牌、防具牌和宝物牌,摸等量的牌;你的手牌上限加你手牌中的装备牌数量.',
								name: '開',
							},
							trigger: {
								global: 'useCardEnd',
							},
							_priority: 250,
							forced: true,
							filter(event, player) {
								return event.player != player && (get.subtype(event.card) == 'equip1' || get.subtype(event.card) == 'equip2' || get.subtype(event.card) == 'equip5');
							},
							content() {
								player.draw();
							},
							mod: {
								maxHandcard(player, num) {
									var hs = player.getCards('h');
									for (var i = 0; i < hs.length; i++) {
										if (get.type(hs[i]) == 'equip') {
											num++;
										}
									}
									return num;
								},
							},
						},
						yao_guanlu_guayao_qian2: {},
						yao_guanlu_guayao_kan: {
							mark: true,
							intro: {
								content: '<坎>你受到的属性伤害减1,当你因此受到零点伤害时来源与你各摸一张牌.',
								name: '休',
							},
							trigger: { player: 'damageBegin' },
							_priority: -250,
							forced: true,
							filter(event, player) {
								return event.nature;
							},
							content() {
								'step 0';
								trigger.num--;
								('step 1');
								if (!trigger.num) {
									player.draw();
									if (trigger.source) {
										trigger.source.draw();
									}
								}
							},
							ai: {
								nofire: true,
								nothunder: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'natureDamage')) return 'zerotarget';
										if (card.name == 'tiesuo') {
											return [0, 0];
										}
									},
								},
							},
						},
						yao_guanlu_guayao_gen: {
							mark: true,
							intro: {
								content: '<艮>你进入濒死阶段时,你从弃牌堆随机获得一张【桃】或【毒桃】.',
								name: '生',
							},
							trigger: { player: 'dying' },
							_priority: 250,
							forced: true,
							content() {
								var cards = [];
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									if (ui.discardPile.childNodes[i].name == 'tao' || ui.discardPile.childNodes[i].name == 'bxyr_dutao') {
										cards = cards.concat(ui.discardPile.childNodes[i]);
									}
								}
								if (cards.length) {
									var card = cards.randomGet();
									player.gain(card, 'gain2');
									game.log(player, '从弃牌堆获得了', card);
								}
							},
						},
						yao_guanlu_guayao_zhen: {
							mark: true,
							intro: {
								content: '<震>任何角色的回合开始时,展示牌顶对一张牌,若为♠️️你受到一无来源的毒属性伤害.',
								name: '傷',
							},
							trigger: { global: 'phaseBegin' },
							_priority: 250,
							forced: true,
							content() {
								var cards = get.cards();
								player.showCards(cards);
								result.cards = cards;
								if (cards[0].suit == 'spade') {
									player.damage(1, 'poison', 'nosource');
								}
							},
						},
						yao_guanlu_guayao_xun: {
							mark: true,
							intro: {
								content: '<巽>你的回合开始时判定一次,若为单数,你以其他角色距离减判定点数.若为双数,你以他角色的距离加判定点数.',
								name: '杜',
							},
							init(player) {
								player.storage.yao_guanlu_guayao_xun2 = 0;
							},
							trigger: { player: 'phaseBegin' },
							_priority: 250,
							forced: true,
							content() {
								'step 0';
								player.judge(function (card) {
									if (card.number % 2 == 0) return -card.number;
									return card.number;
								});
								('step 1');
								var num = result.judge;
								player.storage.yao_guanlu_guayao_xun2 = num;
							},
							mod: {
								globalFrom(from, to, distance) {
									return distance - from.storage.yao_guanlu_guayao_xun2;
								},
							},
						},
						yao_guanlu_guayao_li: {
							mark: true,
							intro: {
								content: '<離>你造成伤害时,若伤害不为火属性,则将伤害转化为火属性你受到一点来源为你的火属性伤害.',
								name: '景',
							},
							trigger: { source: 'damageBegin' },
							_priority: -250,
							forced: true,
							filter(event, player) {
								return !event.nature || (event.nature && event.nature != 'fire');
							},
							content() {
								trigger.nature = 'fire';
								player.damage('fire');
							},
						},
						yao_guanlu_guayao_kun: {
							mark: true,
							intro: {
								content: '<坤>你受到伤害时,防止此伤害你立即进入濒死阶段,若你的体力上限大于零则失去一点体力上限和一点体力.',
								name: '死',
							},
							trigger: { player: 'damageBegin' },
							_priority: 250,
							forced: true,
							async content(event, trigger, player) {
								//QQQ
								trigger.finish();
								trigger.untrigger();
								_status.dying = [player]; //QQQ
								await player.dyingResult();
								if (player.maxHp > 0) {
									player.loseMaxHp();
									player.loseHp();
								}
							},
						},
						yao_guanlu_guayao_dui: {
							mark: true,
							intro: {
								content: '<兌>任何角色出牌阶段开始时,你必须进入一个额外的弃牌阶段.',
								name: '驚',
							},
							trigger: { global: 'phaseUseBegin' },
							_priority: 250,
							forced: true,
							content() {
								player.phaseDiscard();
							},
						},
						upgradeMo_quanshu: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							usable: 3,
							position: 'he',
							filterCard: lib.filter.cardDiscardable,
							discard: false,
							lose: false,
							delay: false,
							charlotte: true,
							selectCard: [1, Infinity],
							check(card) {
								var player = _status.event.player;
								if (get.position(card) == 'e' && card.name == 'zhuge') return -10;
								if (
									get.position(card) == 'h' &&
									!player.countCards('h', 'du') &&
									(player.hp > 2 ||
										!player.countCards('h', function (card) {
											return get.value(card) >= 8;
										}))
								) {
									return 3;
								}
								return 6 - get.value(card);
							},
							prompt: '弃置任意张牌并摸等量的牌',
							onremove(player) {
								player.addSkill('upgradeMo_quanshu');
							},
							content() {
								'step 0';
								player.discard(cards);
								event.num = 1;
								var hs = player.getCards('h');
								if (!hs.length) event.num = 0;
								for (var i = 0; i < hs.length; i++) {
									if (!cards.includes(hs[i])) {
										event.num = 0;
										break;
									}
								}
								('step 1');
								player.draw(cards.length);
								if (event.num > 0) player.changeHujia();
							},
							group: ['upgradeMo_quanshu_canUse', 'upgradeMo_quanshu_turn', 'upgradeMo_quanshu_loseMaxHp', 'upgradeMo_quanshu_draw'],
							subSkill: {
								turn: {
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
								loseMaxHp: {
									trigger: {
										player: 'loseMaxHpBefore',
									},
									_priority: 20,
									forced: true,
									filter(event, player) {
										return !player.isTurnedOver();
									},
									content() {
										trigger.cancel();
										game.log(player, '取消了上限流失');
									},
								},
								canUse: {
									mod: {
										maxHandcardBase(player, num) {
											return Math.max(game.countGroup(), num);
										},
										targetEnabled(card, player, target) {
											if (get.type(card) == 'delay') {
												return false;
											}
										},
										targetInRange(card, player) {
											if (player == _status.currentPhase && player.isMaxEquip(true)) return true;
										},
										cardUsable(card, player, num) {
											if (player == _status.currentPhase && (card.name == 'sha' || card.name == 'jiu')) return num + game.countGroup();
										},
									},
								},
								draw: {
									trigger: {
										player: 'loseEnd',
									},
									silent: true,
									usable: 3,
									filter(event, player) {
										if (player.countCards('h')) return false;
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												//QQQ
												if (i.original == 'h') return true;
											}
										return false;
									},
									content() {
										var numMp = game.countGroup();
										if (player == _status.currentPhase) {
											player.draw(numMp);
										} else {
											player.draw(numMp + 1);
										}
									},
								},
								delay: {},
							},
							ai: {
								noturn: true,
								noh: true,
								skillTagFilter(player, tag) {
									if (tag == 'noh') {
										if (player.countCards('h') != 1) return false;
									}
								},
								order: 1,
								result: {
									player: 1,
								},
								threaten: 5.55,
							},
						},
						upgradeMo_duanshi: {
							audio: 'qinggang_skill',
							trigger: {
								source: 'damageBefore',
							},
							forced: true,
							charlotte: true,
							onremove(player) {
								player.addSkill('upgradeMo_duanshi');
							},
							filter(event, player) {
								return event.player != player && event.player.hujia;
							},
							content() {
								game.log(trigger.player, '失去了', trigger.player.hujia, '点护甲');
								trigger.player.hujia = 0;
								trigger.player.update();
							},
						},
						upgradeMo_mingzheng: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'phaseDrawBegin1',
							},
							forced: true,
							fixed: true,
							charlotte: true,
							onremove(player) {
								player.addSkill('upgradeMo_mingzheng');
							},
							content() {
								if (trigger.player.isMinHp() || trigger.player.isMinHandcard()) {
									trigger.num += 2;
								} else {
									trigger.num++;
								}
							},
						},
						upgradeMo_shiwan: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'damageAfter',
							},
							forced: true,
							fixed: true,
							charlotte: true,
							usable: 2,
							onremove(player) {
								player.addSkill('upgradeMo_shiwan');
							},
							content() {
								'step 0';
								if (trigger.source) {
									trigger.source.draw();
									if (player.countCards('he')) {
										trigger.source.gainPlayerCard('he', player);
									} else {
										trigger.source.draw(2);
										player.loseHp();
									}
								}
								('step 1');
								player.chooseToDiscard('h', 2, true);
							},
						},
						upgradeMo_shenfeng: {
							audio: 'ext:蒸蒸日上/audio:2',
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
							},
							forced: true,
							fixed: true,
							charlotte: true,
							onremove(player) {
								player.addSkill('upgradeMo_shenfeng');
							},
							filter(event, player) {
								if (lib.config.mode != 'boss') return false;
								return player == game.boss && (player.hp > 0 || (game.me != game.boss && game.roundNumber < 71) || (game.me == game.boss && game.roundNumber < 7));
							},
							content() {
								trigger.cancel();
								game.log(player, '取消了死亡');
								if (player.hp < -game.roundNumber) {
									player.recover(-game.roundNumber - player.hp);
								}
								player.draw();
								if (game.roundNumber >= 10 && player.hp < -4 && lib.skill.upgradeMo_quanshu.usable < 4) {
									lib.skill.upgradeMo_quanshu.usable = 4;
									lib.skill.upgradeMo_quanshu_draw.usable = 4;
									lib.skill.upgradeMo_quanshu_info = '出牌阶段限四次,你可以弃置任意张牌,摸等量的牌,若你因此弃置了所有手牌,你获得1点护甲;锁定技,当你失去最后一张手牌时,你摸X张牌(X为存活势力数,若在你的回合外,X改为存活势力数+1),每回合限四次;锁定技,若你装备区里牌数为全场最多,你于回合内使用卡牌无距离限制;锁定技,出牌阶段,你可以多使用X张【杀】和【酒】;锁定技,你的手牌上限至少为X;锁定技,你不受翻面和延时锦囊的影响.';
								}
								if (game.roundNumber >= 19 && player.hp < -9 && lib.skill.upgradeMo_quanshu.usable < 5) {
									lib.skill.upgradeMo_quanshu.usable = 5;
									lib.skill.upgradeMo_quanshu_draw.usable = 5;
									lib.skill.upgradeMo_quanshu_info = '出牌阶段限五次,你可以弃置任意张牌,摸等量的牌,若你因此弃置了所有手牌,你获得1点护甲;锁定技,当你失去最后一张手牌时,你摸X张牌(X为存活势力数,若在你的回合外,X改为存活势力数+1),每回合限五次;锁定技,若你装备区里牌数为全场最多,你于回合内使用卡牌无距离限制;锁定技,出牌阶段,你可以多使用X张【杀】和【酒】;锁定技,你的手牌上限至少为X;锁定技,你不受翻面和延时锦囊的影响.';
								}
								if (game.roundNumber >= 39 && player.hp < -19 && lib.skill.upgradeMo_quanshu.usable < 7) {
									lib.skill.upgradeMo_quanshu.usable = 7;
									lib.skill.upgradeMo_quanshu_draw.usable = 7;
									lib.skill.upgradeMo_quanshu_info = '出牌阶段限七次,你可以弃置任意张牌,摸等量的牌,若你因此弃置了所有手牌,你获得1点护甲;锁定技,当你失去最后一张手牌时,你摸X张牌(X为存活势力数,若在你的回合外,X改为存活势力数+1),每回合限七次;锁定技,若你装备区里牌数为全场最多,你于回合内使用卡牌无距离限制;锁定技,出牌阶段,你可以多使用X张【杀】和【酒】;锁定技,你的手牌上限至少为X;锁定技,你不受翻面和延时锦囊的影响.';
								}
								if (game.roundNumber >= 59 && player.hp < -33 && lib.skill.upgradeMo_quanshu.usable < 9) {
									lib.skill.upgradeMo_quanshu.usable = 9;
									lib.skill.upgradeMo_quanshu_draw.usable = 9;
									lib.skill.upgradeMo_quanshu_info = '出牌阶段限九次,你可以弃置任意张牌,摸等量的牌,若你因此弃置了所有手牌,你获得1点护甲;锁定技,当你失去最后一张手牌时,你摸X张牌(X为存活势力数,若在你的回合外,X改为存活势力数+1),每回合限九次;锁定技,若你装备区里牌数为全场最多,你于回合内使用卡牌无距离限制;锁定技,出牌阶段,你可以多使用X张【杀】和【酒】;锁定技,你的手牌上限至少为X;锁定技,你不受翻面和延时锦囊的影响.';
								}
							},
						},
						upgradeMo_jiangshang: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'dieAfter',
							},
							forced: true,
							_priority: -10,
							fixed: true,
							charlotte: true,
							onremove(player) {
								player.addSkill('upgradeMo_jiangshang');
							},
							filter(event, player) {
								return event.source;
							},
							content() {
								trigger.source.recover();
								trigger.source.draw(3);
							},
						},
						upgradeMo_huchen: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'gameDrawBefore',
							},
							forced: true,
							_priority: 10,
							fixed: true,
							charlotte: true,
							init(player) {
								player.storage.upgradeMo_huchen = [];
								game.updateboss(player);
							},
							onremove(player) {
								player.addSkill('upgradeMo_huchen');
							},
							filter(event, player) {
								if (lib.config.mode != 'boss') return false;
								return event.player == game.boss && event.player.hasSkill('upgradeMo_huchen');
							},
							content() {
								'step 0';
								('step 1');
								for (var i of game.players) {
									if (i.identity == 'cai') player.storage.upgradeMo_huchen.push(i);
								}
								('step 2');
								var list = [];
								for (const i of _status.gfjuese) {
									const info = lib.character[i];
									if (!info) continue;
									for (var k = 0; k < game.players.length; k++) {
										if (info == lib.character[game.players[k].name] || (lib.character[game.players[k].name2] && info == lib.character[game.players[k].name2])) {
											continue;
										}
									}
									if (info[4].includes('minskin')) {
										continue;
									}
									if (game.me != game.boss ? info[1] != 'wu' : info[1] == 'wu') {
										continue;
									}
									if (game.me != game.boss) {
										if (info[0x0] != 'male') {
											continue;
										}
									}
									if (info[4].includes('boss')) {
										continue;
									}
									if (info[4].includes('hiddenboss')) {
										continue;
									}
									if (info[4] && info[4].includes('forbidai')) {
										continue;
									}
									if (lib.config.forbidboss.includes(i)) {
										continue;
									}
									list.push(i);
								}
								if (list.length) {
									var name = list.randomGets(4);
									if (game.me != game.boss) {
										game.addBossFellow(game.me == game.boss ? 1 : 4, name[0x0]);
										game.addBossFellow(game.me == game.boss ? 7 : 5, name[1]);
										game.addBossFellow(game.me == game.boss ? 2 : 6, name[2]);
										player.skip('phaseJudge');
										player.skip('phaseUse');
										player.skip('phaseDiscard');
									} else {
										game.addFanFellow(1, name[0x0]);
										game.addFanFellow(7, name[1]);
										game.addFanFellow(2, name[2]);
										game.addFanFellow(6, name[3]);
									}
								}
								('step 3');
								for (var i of game.players) {
									if (!player.storage.upgradeMo_huchen.includes(i) && ((game.me == game.boss && i.identity == 'cai') || (game.me != game.boss && i.identity == 'zhong'))) {
										var numHp = lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 1 ? 2 : lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 ? 3 : lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 3 ? 4 : lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 4 ? 5 : 1;
										i.maxHp += numHp;
										i.hp += numHp;
										i.update();
										if (lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 && i.identity == 'zhong') {
											i.addSkill('upgradeRebirthBoss');
										}
										if (lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 && i.identity == 'cai') {
											i.addSkill('upgradeRebirth');
										}
									}
								}
								('step 4');
								('step 5');
								var list = ['re_chengpu', 're_huanggai', 'zhoutai', 're_ganning', 'xin_handang', 'xin_xusheng', 're_panzhangmazhong', 'xin_lingtong', 'sp_chendong', 'dingfeng', 'sp_jiangqing'];
								var players = game.players.concat(game.dead);
								for (var i = 0; i < players.length; i++) {
									list.remove(players[i].name);
									list.remove(players[i].name1);
									list.remove(players[i].name2);
								}
								player
									.chooseButton(true)
									.set('ai', function (_0x66c3x4) {
										return _0x66c3x4.link[['1', '2', '3', '4', '5', '6'].randomGet()];
									})
									.set('createDialog', ['请选择一名武将的技能', [list.randomGets(list.length), 'character']]);
								('step 6');
								player.addSkill(lib.character[result.links[0x0]][3]);
								ui.auto.hide();
							},
						},
						upgradeMo_zhiluan: {
							mode: ['boss'],
							group: ['upgradeMo_zhiluan_phaseStart', 'upgradeMo_zhiluan_judge', 'upgradeMo_zhiluan_loseMaxHp', 'upgradeMo_zhiluan_turnOver', 'upgradeMo_zhiluan_changeHp', 'upgradeMo_zhiluan_useCard', 'upgradeMo_zhiluan_dying', 'upgradeMo_zhiluan_die', 'upgradeMo_zhiluan_discard', 'upgradeMo_zhiluan_draw'],
							fixed: true,
							charlotte: true,
							audio: 'ext:蒸蒸日上/audio:2',
							_priority: 999,
							mark: true,
							init(player) {
								if (player == game.boss) {
									if (lib.config.upgradeMoDying && lib.config.upgradeMoDying > 0) {
										player.storage.upgradeMo_zhiluan = lib.config.upgradeMoDying;
									} else {
										player.storage.upgradeMo_zhiluan = 0;
									}
									var xl = Math.min(18, Math.floor(player.storage.upgradeMo_zhiluan / 7));
									player.maxHp += xl;
									player.hp += xl;
									player.update();
									game.updateboss(player);
								}
							},
							intro: {
								name: '智乱效果',
								content(storage, player) {
									return '◆你登场后体力/体力上限+' + Math.min(18, Math.floor(storage / 7)) + '<br/>◆其他角色失去体力/失去体力上限/受到伤害+' + storage + '［触发概率:' + Math.min(33.333, (100 / storage) * game.roundNumber) + '%］<br/>◆摸牌阶段多摸' + Math.min(6, Math.floor(storage / 7)) + '张牌<br/>◆你手牌上限为' + Math.min(15, 6 + Math.floor(storage / 9)) + '<br/>◆你可多使用' + Math.min(5, Math.floor(storage / 15)) + '张杀<br/>◆你计算与其他角色的距离-' + Math.min(5, Math.floor(storage / 5)) + '<br/>◆其他角色计算与你的距离+' + Math.min(2, Math.floor(storage / 19)) + '<br/>◎获胜条件:<br/>▲挑战者:全场没有(体力值大于1/判定区没有牌/手牌或装备区有牌)的角色,游戏轮数大于99且BOSS阵亡<br/>▲BOSS:游戏轮数大于999,BOSS存活且敌方角色全阵亡';
								},
							},
							onremove(player) {
								player.clearSkills();
								player.addSkill('upgradeMo_zhiluan');
							},
							subSkill: {
								phaseStart: {
									audio: 'ext:蒸蒸日上/audio:2',
									trigger: {
										player: 'phaseBeginStart',
									},
									forced: true,
									filter(event, player) {
										return game.boss == player;
									},
									content() {
										'step 0';
										if (game.roundNumber > 199 && game.bossinfo && player == game.boss && game.bossinfo.loopType != 2) {
											game.bossinfo.loopType = 2;
										}
										('step 1');
										var targets = game.filterPlayer(function (target) {
											return game.boss == player;
										});
										for (var i = 0; i < targets.length; i++) {
											targets[i].recover();
										}
										game.asyncDraw(targets);
									},
								},
								judge: {
									audio: 'ext:蒸蒸日上/audio:2',
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									forced: true,
									filter(event, player) {
										return player.countCards('j') > 0;
									},
									content() {
										player.discard(player.getCards('j').randomGet());
									},
								},
								die: {
									audio: 'weimu',
									trigger: {
										player: 'dieBefore',
									},
									forced: true,
									_priority: 999,
									filter(event, player) {
										if (
											player.maxHp > 0 &&
											player.hp < 1 &&
											game.roundNumber > 99 &&
											!game.hasPlayer(function (_0x64bax1) {
												return !_0x64bax1.isTurnedOver() || _0x64bax1.hp > 1 || _0x64bax1.countCards('j', 'shandian') < 1 || _0x64bax1.countCards('he') > 0;
											})
										) {
											return false;
										}
										return true;
									},
									content() {
										trigger.cancel();
										var xl = lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 ? 3 * (2 + Math.min(18, Math.floor(player.storage.upgradeMo_zhiluan / 7))) : lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 1 ? 2 * (2 + Math.min(18, Math.floor(player.storage.upgradeMo_zhiluan / 7))) : 2 + Math.min(18, Math.floor(player.storage.upgradeMo_zhiluan / 7));
										if (player.maxHp < xl) {
											player.maxHp = xl;
											player.hp = xl;
											player.update();
										}
										player.recover(Math.max(1, Math.floor(player.maxHp / 2)) - player.hp);
										if (player.countCards('h') < 8) {
											player.draw(8 - player.countCards('h'));
										}
									},
								},
								useCard: {
									trigger: {
										player: 'useCardAfter',
									},
									forced: true,
									filter(event, player) {
										return get.type(event.card, 'trick') == 'trick';
									},
									usable: 2,
									content() {
										var targets = game.filterPlayer(function (target) {
											return player != target;
										});
										for (var i = 0; i < targets.length; i++) {
											targets[i].addTempSkill('baiban', ['luanwuAfter', 'xinfenchengAfter']);
										}
										if (get.color(trigger.card) == 'red') {
											player.addTempSkill('xinfencheng', 'xinfenchengAfter');
											player.useSkill('xinfencheng', targets);
										} else {
											player.addTempSkill('luanwu', 'luanwuAfter');
											player.useSkill('luanwu', targets);
										}
									},
								},
								discard: {
									trigger: {
										global: 'useCardAfter',
									},
									forced: true,
									audio: 'ext:蒸蒸日上/audio:true',
									filter(event, player) {
										return event.player != player && event.player.countCards('he') && get.type(event.card, 'trick') == 'trick';
									},
									content() {
										var card = trigger.player.getCards('he').randomGet();
										trigger.player.discard(card);
									},
								},
								changeHp: {
									trigger: {
										global: ['loseHpBegin', 'damageBegin1', 'loseMaxHpBegin'],
									},
									audio: 'wansha',
									forced: true,
									filter(event, player) {
										return Math.random() <= Math.min(0.33333, game.roundNumber / lib.config.upgradeMoDying) && event.notLink() && lib.config.upgradeMoDying && event.player != player;
									},
									content() {
										trigger.num += lib.config.upgradeMoDying;
									},
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha' && lib.config.upgradeMoDying && lib.config.upgradeMoDying >= 15) {
												return num - Math.min(5, Math.floor(lib.config.upgradeMoDying / 15));
											}
										},
										maxHandcardBase(player, num) {
											if (lib.config.upgradeMoDying && lib.config.upgradeMoDying >= 9) return Math.min(15, Math.floor(lib.config.upgradeMoDying / 9) + 6);
											return 6;
										},
										globalFrom(from, to, current) {
											if (lib.config.upgradeMoDying && lib.config.upgradeMoDying >= 5) {
												return current - Math.floor(lib.config.upgradeMoDying / 5);
											}
										},
										globalTo(from, to, current) {
											if (lib.config.upgradeMoDying && lib.config.upgradeMoDying >= 19) {
												return current + Math.min(2, Math.floor(lib.config.upgradeMoDying / 19));
											}
										},
									},
								},
								loseMaxHp: {
									audio: 'weimu',
									trigger: {
										player: 'loseMaxHpBefore',
									},
									_priority: 20,
									forced: true,
									filter(event, player) {
										return game.boss == player;
									},
									content() {
										trigger.cancel();
									},
								},
								turnOver: {
									audio: 'weimu',
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
									ai: {
										noturn: true,
									},
								},
								dying: {
									audio: 'upgradeMo_zhiluan',
									trigger: {
										global: 'dieBegin',
										player: 'dying',
									},
									forced: true,
									_priority: -150,
									filter(event, player) {
										return (event.name == 'die' && event.player != player) || event.name == 'dying';
									},
									content() {
										if (!lib.config.upgradeMoDying) {
											lib.config.upgradeMoDying = 0;
										}
										lib.config.upgradeMoDying++;
										game.saveConfig('upgradeMoDying', lib.config.upgradeMoDying);
										if (lib.config.upgradeMoDying && lib.config.upgradeMoDying > 0) {
											player.storage.upgradeMo_zhiluan = lib.config.upgradeMoDying;
										}
									},
								},
								draw: {
									audio: 'ext:蒸蒸日上/audio:2',
									trigger: {
										player: 'phaseDrawBegin2',
									},
									forced: true,
									filter(event, player) {
										return !event.numFixed && lib.config.upgradeMoDying >= 7;
									},
									content() {
										trigger.num += Math.min(6, Math.floor(lib.config.upgradeMoDying / 7));
									},
								},
							},
						},
						Ordinary_EvilspiritTransform: {
							forbid: ['boss'],
							group: ['Ordinary_EvilspiritTransform_judge', 'Ordinary_EvilspiritTransform_turnOver', 'Ordinary_EvilspiritTransform_draw'],
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							silent: true,
							fixed: true,
							forced: true,
							charlotte: true,
							audio: 'ext:蒸蒸日上/audio:true',
							init(OagFoRQ1JmMpnF2) {
								OagFoRQ1JmMpnF2.storage.Ordinary_EvilspiritTransform = false;
							},
							onremove(player) {
								player.clearSkills();
								player.addSkill('Ordinary_EvilspiritTransform');
							},
							filter(event, player) {
								return !player.storage.Ordinary_EvilspiritTransform;
							},
							content() {
								'step 0';
								player.storage.Ordinary_EvilspiritTransform = true;
								player.directgain(get.cards(2))._triggered = null;
								('step 1');
								if (get.mode() != 'boss') {
									var list = [];
									for (var i in lib.character) {
										if (lib.character[i] == lib.character.ol_dongzhao) {
											continue;
										}
										if (lib.character[i][4].includes('boss')) {
											continue;
										}
										if (lib.character[i][4].includes('minskin')) {
											continue;
										}
										list.push(i);
									}
									var name = list;
									var skills = [];
									var xl = 0;
									for (var i = 0; i < name.length; i++) {
										for (var j = 0; j < lib.character[name[i]][3].length; j++) {
											if (lib.translate[lib.character[name[i]][3][j] + '_info'] && lib.translate[lib.character[name[i]][3][j] + '_info'].includes('杀') && !player.skills.includes(lib.character[name[i]][3][j])) {
												skills.push(lib.character[name[i]][3][j]);
											}
										}
									}
									for (var i of game.players) {
										xl += i.maxHp;
									}
									tl = Math.min(15, game.countGroup() + Math.round(xl / 5));
									shaSkills = skills.randomGets(tl);
									for (var i = 0; i < shaSkills.length; i++) {
										player.addSkill(shaSkills[i]);
										game.log(player, '获得技能', '【' + get.translation(shaSkills[i]) + '】');
									}
								}
							},
							subSkill: {
								judge: {
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									forced: true,
									filter(event, player) {
										return player.countCards('j') > 0 && Math.random() <= 0.5;
									},
									content() {
										player.discard(player.getCards('j').randomGet());
									},
								},
								turnOver: {
									trigger: {
										player: 'turnOverBefore',
									},
									_priority: 20,
									forced: true,
									filter(event, player) {
										return !player.isTurnedOver() && Math.random() <= 0.5;
									},
									content() {
										trigger.cancel();
										game.log(player, '取消了翻面');
									},
									ai: {
										noturn() {
											return Math.random() < 0.5;
										},
									},
								},
								draw: {
									audio: 'Ordinary_EvilspiritTransform',
									trigger: {
										player: 'phaseDrawBegin2',
									},
									forced: true,
									filter(event, player) {
										return !event.numFixed && game.roundNumber >= 3;
									},
									content() {
										trigger.num += Math.min(7, Math.floor(game.roundNumber / 3));
									},
									mod: {
										maxHandcardBase(player, num) {
											return num + Math.floor(game.roundNumber / 3);
										},
									},
								},
							},
						},
						EvilspiritTransform: {
							mode: ['boss'],
							global: 'EvilspiritTransform2',
							group: ['EvilspiritTransform_phase', 'EvilspiritTransform_gameDraw', 'EvilspiritTransform_judge', 'EvilspiritTransform_turnOver', 'EvilspiritTransform_draw', 'EvilspiritTransform_damage', 'EvilspiritTransform_recover', 'EvilspiritTransform_use', 'EvilspiritTransform_loseMaxHp', 'EvilspiritTransform_death', 'EvilspiritTransform_die'],
							fixed: true,
							charlotte: true,
							_priority: 999,
							intro: {
								name: '已登场阴兵',
								content: 'characters',
							},
							init(player) {
								if (!player.storage.EvilspiritTransform) {
									player.storage.EvilspiritTransform = [];
								}
								game.updateboss(player);
							},
							onremove(player) {
								player.addSkill('EvilspiritTransform');
							},
							subSkill: {
								gameDraw: {
									trigger: {
										global: ['gameDrawAfter'],
									},
									silent: true,
									fixed: true,
									forced: true,
									charlotte: true,
									_priority: -20,
									filter(event, player) {
										return game.boss == player;
									},
									content() {
										if (game.boss == player) {
											var list = [];
											for (var i in lib.character) {
												if (lib.character[i] == lib.character.ol_dongzhao) {
													continue;
												}
												if (lib.character[i][4].includes('boss')) {
													continue;
												}
												if (lib.character[i][4].includes('minskin')) {
													continue;
												}
												list.push(i);
											}
											var name = list;
											var skills = [];
											var xl = 0;
											for (var i = 0; i < name.length; i++) {
												for (var j = 0; j < lib.character[name[i]][3].length; j++) {
													if (lib.translate[lib.character[name[i]][3][j] + '_info'] && lib.translate[lib.character[name[i]][3][j] + '_info'].includes('【杀】') && lib.translate[lib.character[name[i]][3][j] + '_info'].indexOf('限定') == -1 && lib.translate[lib.character[name[i]][3][j] + '_info'].indexOf('主公') == -1 && !player.skills.includes(lib.character[name[i]][3][j])) {
														skills.push(lib.character[name[i]][3][j]);
													}
												}
											}
											for (var i of game.players) {
												xl += i.maxHp;
											}
											tl = Math.max(8, Math.min(25, game.countGroup() + Math.round(xl / 4)));
											shaSkills = skills.randomGets(tl);
											for (var i = 0; i < shaSkills.length; i++) {
												player.addSkill(shaSkills[i]);
												game.log(player, '获得技能', '【' + get.translation(shaSkills[i]) + '】');
											}
											player.directgain(get.cards(3))._triggered = null;
										}
									},
								},
								phase: {
									trigger: {
										player: 'phaseBefore',
									},
									silent: true,
									forced: true,
									filter(event, player) {
										if (lib.config.mode != 'boss') return false;
										return player.storage.EvilspiritTransform && ((player.storage.EvilspiritTransform.length >= 16 && !lib.skill.upgradePrivilege) || (lib.skill.upgradePrivilege && player.storage.EvilspiritTransform.length >= 1)) && player.storage.EvilspiritTransformHp;
									},
									content() {
										player.storage.EvilspiritTransformHp = false;
										var TPxl = lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 && parseInt(lib.config.extension_蒸蒸日上_upgradeClass1) == 1 ? 2 : 0;
										var xl = lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 1 ? 2 + Math.min(15, Math.floor(player.storage.EvilspiritTransform.length / 16)) : lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 ? 3 + Math.min(15, Math.floor(player.storage.EvilspiritTransform.length / 16)) : Math.min(15, Math.floor(player.storage.EvilspiritTransform.length / 16));
										player.maxHp += TPxl + xl;
										player.hp += TPxl + xl;
										player.update();
										if (lib.skill.upgradePrivilege) {
											player.directgain(get.cards(1 + Math.min(8, Math.floor(player.storage.EvilspiritTransform.length / 16))))._triggered = null;
										}
										if (player.storage.EvilspiritTransform.length >= 16 && !lib.skill.upgradePrivilege) {
											player.directgain(get.cards(Math.min(8, Math.floor(player.storage.EvilspiritTransform.length / 16))))._triggered = null;
										}
									},
								},
								judge: {
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									forced: true,
									filter(event, player) {
										if (lib.config.mode != 'boss') {
											return false;
										}
										return player.countCards('j') > 0 && ((lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 && Math.random() <= 0.71) || (lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 1 && Math.random() <= 0.61) || (!lib.skill.upgradePrivilege && Math.random() <= 0.51));
									},
									content() {
										player.discard(player.getCards('j').randomGet());
									},
								},
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									silent: true,
									forced: true,
									filter(event, player) {
										if (lib.config.mode != 'boss') return false;
										return event.player != player && event.notLink() && player.storage.EvilspiritTransform && player.storage.EvilspiritTransform.length >= 32;
									},
									content() {
										trigger.num += Math.floor(player.storage.EvilspiritTransform.length / 32);
									},
								},
								recover: {
									trigger: {
										player: 'recoverBegin',
									},
									silent: true,
									forced: true,
									filter(event, player) {
										if (lib.config.mode != 'boss') return false;
										return event.player != player && player.storage.EvilspiritTransform && player.storage.EvilspiritTransform.length >= 54;
									},
									content() {
										trigger.num += Math.min(2, Math.floor(player.storage.EvilspiritTransform.length / 54));
									},
								},
								draw: {
									trigger: {
										player: 'phaseDrawBegin2',
									},
									silent: true,
									forced: true,
									filter(event, player) {
										if (lib.config.mode != 'boss') return false;
										return player.storage.EvilspiritTransform && player.storage.EvilspiritTransform.length >= 18;
									},
									content() {
										trigger.num += Math.min(7, Math.floor(player.storage.EvilspiritTransform.length / 18));
									},
								},
								use: {
									mod: {
										globalFrom(from, to, distance) {
											if (from.storage.EvilspiritTransform && from.storage.EvilspiritTransform.length >= 8) return distance - Math.floor(from.storage.EvilspiritTransform.length / 8);
										},
										selectTarget(card, player, range) {
											if ((card.name == 'sha' || card.name == 'guohe' || card.name == 'juedou') && Array.isArray(range) && range[1] != -1) {
												if (player.storage.EvilspiritTransform && player.storage.EvilspiritTransform.length > 32 && player.storage.EvilspiritTransform.length < 49) range[1]++;
												if (player.storage.EvilspiritTransform && player.storage.EvilspiritTransform.length >= 49 && player.storage.EvilspiritTransform.length < 72) range[1] += 2;
												if (player.storage.EvilspiritTransform && player.storage.EvilspiritTransform.length > 71) range[1] += 3;
											}
										},
										cardUsable(card, player, num) {
											if (card.name == 'sha' && player.storage.EvilspiritTransform && player.storage.EvilspiritTransform.length >= 28) return num + Math.min(99, Math.floor(game.boss.storage.EvilspiritTransform.length / 28));
										},
									},
								},
								turnOver: {
									trigger: {
										player: 'turnOverBefore',
									},
									_priority: 20,
									forced: true,
									filter(event, player) {
										return !player.isTurnedOver() && ((lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 && window.Math.random() <= 0.71) || (lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 1 && window.Math.random() <= 0.61) || (!lib.skill.upgradePrivilege && window.Math.random() <= 0.51));
									},
									content() {
										trigger.cancel();
										game.log(player, '取消了翻面');
									},
									ai: {
										noturn() {
											return Math.random() < 0.6;
										},
									},
								},
								loseMaxHp: {
									trigger: {
										player: 'loseMaxHpBefore',
									},
									_priority: 20,
									forced: true,
									filter(event, player) {
										return (lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 2 && window.Math.random() <= 0.71) || (lib.skill.upgradePrivilege && parseInt(lib.config.extension_蒸蒸日上_upgradeClass) == 1 && window.Math.random() <= 0.61) || (!lib.skill.upgradePrivilege && window.Math.random() <= 0.51);
									},
									content() {
										trigger.cancel();
									},
								},
								death: {
									trigger: {
										player: 'dieBefore',
									},
									_priority: 20,
									forced: true,
									filter(event, player) {
										return player.hp > 0;
									},
									content() {
										trigger.cancel();
									},
								},
								die: {
									trigger: {
										player: 'dieBegin',
									},
									silent: true,
									fixed: true,
									content() {
										player.hide();
										game.addVideo('hidePlayer', player);
									},
								},
							},
						},
						EvilspiritTransform2: {
							trigger: {
								global: 'dieAfter',
							},
							forced: true,
							_priority: -10,
							fixed: true,
							filter(event, player) {
								if (lib.config.mode != 'boss') return false;
								return event.player == game.boss && event.player.hasSkill('EvilspiritTransform');
							},
							content() {
								'step 0';
								var targets = game.filterPlayer(function (target) {
									return game.boss != target;
								});
								game.asyncDraw(targets);
								for (var i = 0; i < targets.length; i++) {
									targets[i].recover();
								}
								('step 1');
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
									if (lib.character[i][4].includes('boss')) {
										continue;
									}
									if (lib.character[i][4].includes('minskin')) {
										continue;
									}
									if (game.boss.storage.EvilspiritTransform.includes(i)) {
										continue;
									}
									if (list2.includes(i)) {
										continue;
									}
									list.push(i);
									list.remove('upgrade_Smallkill');
									list.remove('upgrade_zuoyou');
								}
								if (!list.length) {
									game.checkResult();
								}
								var name = list.randomGet();
								game.boss.storage.EvilspiritTransform.push(name);
								var inited = game.boss.storage.EvilspiritTransform;
								game.changeBoss(name);
								game.boss.addSkill('EvilspiritTransform');
								game.boss.storage.EvilspiritTransform = inited;
								game.boss.markSkill('EvilspiritTransform');
								('step 3');
								if (game.boss.storage.EvilspiritTransform.length > 99 && game.bossinfo && game.bossinfo.loopType != 2) {
									game.bossinfo.loopType = 2;
								}
								if (!game.boss.storage.EvilspiritTransformHp) {
									game.boss.storage.EvilspiritTransformHp = true;
								}
							},
						},
						wang_huatuo_miaoshou: {
							audio: 'chulao',
							trigger: {
								player: ['loseHpBegin', 'damageBegin4'],
							},
							forced: true,
							_priority: -999,
							filter(event, player) {
								return event.num > 2;
							},
							content() {
								trigger.num = 2;
							},
						},
						wang_huatuo_huichun: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['dying'],
							},
							forced: true,
							_priority: 999,
							filter(event, player) {
								return game.roundNumber % 2 == 0;
							},
							content() {
								player.recover(3);
								player.draw(3);
							},
							ai: {
								maixie: true,
								effect: {
									target(card, player, target) {
										if (game.roundNumber % 2 == 0 && target.hp < 2 && get.tag(card, 'damage')) return [1, 5];
									},
								},
							},
						},
						wang_huatuo_shenyi: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: ['phaseBegin', 'phaseEnd', 'phaseUseBegin', 'phaseUseEnd', 'phaseDiscardBegin', 'drawEnd', 'useCardEnd', 'discardEnd', 'damageEnd', 'loseHpEnd', 'recoverEnd', 'judgeEnd', 'equipEnd'],
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return (player.hp < 2 && Math.random() <= 0.88) || (player.hp < 3 && Math.random() <= 0.78) || Math.random() <= 0.68;
							},
							content() {
								'step 0';
								player.addMark('wang_huatuo_shenyi', 1, false);
								('step 1');
								var bj = player.countMark('wang_huatuo_shenyi');
								if (bj % 3 == 0) {
									if (player.isDamaged()) {
										player.recover()._triggered = null;
									} else {
										if (Math.random() < 0.233) {
											player.changeHujia();
										}
									}
								}
								if (bj % 6 == 0) {
									player.draw();
								}
								if (bj % 18 == 0) {
									game.countPlayer(function (_0xf5e7x2) {
										if (player != _0xf5e7x2 && _0xf5e7x2.countCards('he')) {
											_0xf5e7x2.discard(_0xf5e7x2.getCards('he').randomGet());
										}
									});
									if (!player.hasSkill('jijiu')) {
										player.addTempSkill('jijiu');
									}
								}
								if (bj % 36 == 0) {
									game.countPlayer(function (_0xf5e7x2) {
										if (player != _0xf5e7x2) {
											if (!_0xf5e7x2.hasSkill('fengyin')) {
												_0xf5e7x2.addTempSkill('fengyin');
											}
											_0xf5e7x2.loseHp();
										}
									});
								}
								if (bj >= 72) {
									game.countPlayer(function (_0xf5e7x2) {
										if (player != _0xf5e7x2) {
											if (_0xf5e7x2.maxHp > 4) {
												_0xf5e7x2.loseMaxHp();
											}
											if (!_0xf5e7x2.isMad()) {
												_0xf5e7x2.goMad('phaseAfter');
											}
										}
									});
									player.addMark('wang_huatuo_shenyi', -bj, false);
								}
							},
							intro: {
								content: 'mark',
							},
						},
						wang_huatuo_qidun: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'delay' || event.card.name == 'tiesuo';
							},
							content() {
								game.log(player, '发动了奇遁,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'tiesuo' || get.type(card) == 'delay') {
										return false;
									}
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'tiesuo' || get.type(card) == 'delay') {
											return [0, 0];
										}
									},
								},
							},
						},
						wang_huatuo_tianwei: {
							trigger: {
								player: 'turnOverBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							_priority: 20,
							forced: true,
							filter(event, player) {
								return !player.isTurnedOver();
							},
							content() {
								trigger.cancel();
								game.log(player, '取消了翻面');
							},
							ai: {
								noturn: true,
							},
							group: 'wang_huatuo_tianwei2',
						},
						wang_huatuo_tianwei2: {
							trigger: {
								player: 'phaseBefore',
							},
							nopop: true,
							forced: true,
							content() {
								player.lockOut = true;
							},
						},
						wang_huatuoStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['wang_huatuoStatus2'],
						},
						wang_huatuoStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 7,
							},
						},
						xian_daxiaoqiao_tianzi: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 2 + Math.floor(Math.random() * 4);
							},
						},
						xian_daxiaoqiao_erqiao: {
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								if (event.parent.name == 'xian_daxiaoqiao_erqiao') return false;
								if (!event.targets || !event.card) return false;
								if (event.card && event.card.name == 'wuxie') return false;
								var type = get.type(event.card);
								if (type != 'trick' && event.card.name != 'sha' && event.card.name != 'tao') return false;
								var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
								var targets = event._targets || event.targets;
								for (var i = 0; i < targets.length; i++) {
									if (!targets[i].isIn()) return false;
									if (
										!player.canUse(
											{
												name: event.card.name,
											},
											targets[i],
											false,
											false
										)
									) {
										return false;
									}
								}
								return true;
							},
							check(event, player) {
								if (event.card.name == 'tiesuo') return false;
								return true;
							},
							audio: 'ext:蒸蒸日上/audio:2',
							content() {
								var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
								player.useCard(card, (trigger._targets || trigger.targets).slice(0));
							},
							ai: {
								threaten: 3,
							},
						},
						xian_daxiaoqiao_xiyu: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['damageAfter', 'loseHpAfter'],
							},
							forced: true,
							usable: 1,
							content() {
								if (!player.isMaxHp(true) || !player.isMaxHandcard(true)) {
									player.addTempSkill('qianxing');
									player.addTempSkill('mianyi');
								} else {
									player.changeHujia();
								}
							},
							group: 'xian_daxiaoqiao_xiyu_damage',
							subSkill: {
								damage: {
									forced: true,
									trigger: {
										player: 'damageBegin4',
									},
									filter(event, player) {
										return event.num > 2;
									},
									_priority: -100,
									content() {
										trigger.num = 2;
									},
								},
							},
						},
						xian_daxiaoqiao_jueyan: {
							trigger: {
								global: 'gameDrawAfter',
							},
							forced: true,
							_priority: 99,
							content() {
								'step 0';
								var list = [];
								for (const i of _status.gfjuese) {
									const info = lib.character[i];
									if (!info) continue; //QQQ
									for (var k = 0; k < game.players.length; k++) {
										if (info == lib.character[game.players[k].name] || (lib.character[game.players[k].name2] && info == lib.character[game.players[k].name2])) continue;
									}
									if (info[4].includes('minskin')) {
										continue;
									}
									if (info[1] != 'wu') {
										continue;
									}
									if (info[0x0] != 'female') {
										continue;
									}
									if (info[4].includes('boss')) {
										continue;
									}
									if (info[4].includes('hiddenboss')) {
										continue;
									}
									if (info[4] && info[4].includes('forbidai')) {
										continue;
									}
									if (lib.config.forbidboss.includes(i)) {
										continue;
									}
									var fhskills = player.getSkills();
									for (j in fhskills) {
										if (info[3].includes(fhskills[j])) {
											continue;
										}
									}
									list.push(i);
								}
								if (list.length) {
									var dxq = list.randomGets(4);
									game.log(player, '获得', '#y' + get.translation(dxq) + '', '的技能');
									for (var a = 0; a < dxq.length; a++) {
										player.addSkill(lib.character[dxq[a]][3]);
									}
								}
							},
						},
						xian_daxiaoqiao_xianglian: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['phaseBefore', 'changeHp'],
							},
							forced: true,
							popup: false,
							_priority: 3,
							init(player) {
								if (game.online) return;
								player.removeAdditionalSkill('xian_daxiaoqiao_xianglian');
								var list = [];
								if (player.hp <= Math.round(player.maxHp / 2)) {
									list.push('reyingzi');
									list.push('refanjian');
									list.push('jiang');
									list.push('gzyinghun');
								}
								if (list.length) {
									player.addAdditionalSkill('xian_daxiaoqiao_xianglian', list);
								}
							},
							derivation: ['reyingzi', 'refanjian', 'jiang', 'gzyinghun'],
							content() {
								player.removeAdditionalSkill('xian_daxiaoqiao_xianglian');
								var list = [];
								if (player.hp <= Math.round(player.maxHp / 2)) {
									list.push('reyingzi');
									list.push('refanjian');
									list.push('jiang');
									list.push('gzyinghun');
								}
								if (list.length) {
									player.addAdditionalSkill('xian_daxiaoqiao_xianglian', list);
								}
							},
						},
						xian_daxiaoqiao_qidun: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:蒸蒸日上/audio:1',
							forced: true,
							check(event, player) {
								return ai.get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return get.type(event.card) == 'delay' || event.card.name == 'tiesuo';
							},
							content() {
								game.log(player, '发动了奇遁,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'tiesuo' || get.type(card) == 'delay') {
										return false;
									}
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'tiesuo' || get.type(card) == 'delay') {
											return [0, 0];
										}
									},
								},
							},
						},
						xian_daxiaoqiao_tianwei: {
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
							ai: {
								noturn: true,
							},
							group: 'xian_daxiaoqiao_tianwei2',
						},
						xian_daxiaoqiao_tianwei2: {
							trigger: {
								player: 'phaseBefore',
							},
							nopop: true,
							forced: true,
							_priority: 1,
							content() {
								player.lockOut = true;
							},
						},
						xian_daxiaoqiaoStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['xian_daxiaoqiaoStatus2'],
						},
						xian_daxiaoqiaoStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						xian_daxiaoqiao_fubing: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							forced: true,
							content() {
								player.draw(2);
							},
						},
						xian_daxiaoqiao_huitian: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
						},
						xian_fuhuanghou_fengzi: {
							audio: 'ext:蒸蒸日上/audio:true',
							trigger: {
								player: 'drawBegin',
							},
							forced: true,
							content() {
								trigger.num++;
							},
							group: 'xian_fuhuanghou_fengzi_draw',
							subSkill: {
								draw: {
									trigger: {
										player: ['phaseBegin', 'phaseEnd'],
									},
									forced: true,
									content() {
										player.draw();
									},
								},
							},
						},
						xian_fuhuanghou_liugong: {
							audio: 'jiaozhao',
							shaRelated: true,
							trigger: {
								player: 'useCardToPlayered',
							},
							filter(event, player) {
								return event.target && event.target.sex != 'male' && event.target != player;
							},
							forced: true,
							preHidden: true,
							content() {
								trigger.parent.directHit.add(trigger.target);
							},
						},
						xian_fuhuanghou_qingping: {
							trigger: {
								global: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return game.hasPlayer(function (qp) {
									return player != qp && qp.countCards('he') > 3;
								});
							},
							forced: true,
							content() {
								game.countPlayer(function (qp) {
									if (player != qp && qp.countCards('he') > 2) {
										if (_status.currentPhase != player) qp.addTempSkill('fengyin');
										var ps = qp.countCards('he') - 3;
										qp.chooseToDiscard('he', ps, true);
									}
								});
							},
						},
						xian_fuhuanghou_aiyuan: {
							audio: 'zhuikong',
							trigger: {
								global: 'phaseBefore',
								player: 'changeHp',
							},
							forced: true,
							popup: false,
							content() {
								if (player.hp % 2 == 0) {
									player.addTempSkill('rezhuikong', {
										player: ['changeHp', 'phaseAfter'],
									});
									player.addTempSkill('reqiuyuan', {
										player: ['changeHp', 'phaseAfter'],
									});
								} else {
									player.addTempSkill('tianming', {
										player: ['changeHp', 'phaseAfter'],
									});
									player.addTempSkill('moukui', {
										player: ['changeHp', 'phaseAfter'],
									});
								}
							},
						},
						xian_fuhuanghou_mimou: {
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							_priority: 99,
							content() {
								'step 0';
								if (player.countCards('h')) player.discard(player.getCards('h').randomGets(2), true);
								('step 1');
								var list = [];
								for (var i in lib.character) {
									for (var k = 0; k < game.players.length; k++) {
										if (lib.character[i] == lib.character[game.players[k].name] || (lib.character[game.players[k].name2] && lib.character[i] == lib.character[game.players[k].name2])) {
											continue;
										}
									}
									if (i.includes('zuoci')) {
										continue;
									}
									if (i.includes('mateng') || i.includes('wutugu')) {
										continue;
									}
									if (lib.character[i][4].includes('minskin')) {
										continue;
									}
									if (lib.character[i][1] != 'qun') {
										continue;
									}
									if (lib.character[i][4].includes('boss')) {
										continue;
									}
									if (lib.character[i][4].includes('hiddenboss')) {
										continue;
									}
									if (lib.character[i][4] && lib.character[i][4].includes('forbidai')) {
										continue;
									}
									if (lib.config.forbidboss.includes(i)) {
										continue;
									}
									var fhskills = player.getSkills();
									for (j in fhskills) {
										if (lib.character[i][3].includes(fhskills[j])) {
											continue;
										}
									}
									list.push(i);
								}
								if (list.length) {
									var jslist = list.randomGet();
									game.log(player, '获得', '#y' + get.translation(jslist) + '', '的所有技能');
									for (var a = 0; a < lib.character[jslist][3].length; a++) {
										player.addTempSkill(lib.character[jslist][3][a]);
									}
								}
							},
						},
						xian_fuhuanghou_wuyi: {
							trigger: {
								target: 'useCardToBegin',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							firstDo: true,
							filter(event, player, card) {
								if (event.card.suit != 'heart') return false;
								return event.targets && event.targets.includes(player) && player.isDamaged();
							},
							content() {
								player.recover();
							},
							mod: {
								targetEnabled(card, player, target, now) {
									if (_status.currentPhase != target && get.color(card) == 'black') return false;
								},
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (card.suit == 'heart' && target.isDamaged()) return [1, 1.5];
									},
								},
							},
							group: 'xian_fuhuanghou_wuyi_useTao',
							subSkill: {
								useTao: {
									trigger: {
										source: 'damageAfter',
									},
									forced: true,
									filter(event, player) {
										return event.player != player && event.player.isAlive();
									},
									content() {
										'step 0';
										if (trigger.player.countCards('h')) {
											trigger.player.draw();
										} else {
											trigger.player.draw(2);
										}
										('step 1');
										if (trigger.player.countCards('h', 'tao') > 0)
											trigger.player.chooseToUse(
												{
													name: 'tao',
												},
												'是否使用一张桃？'
											);
									},
								},
							},
						},
						xian_fuhuanghou_xianshu: {
							trigger: {
								global: 'loseAfter',
							},
							filter(event, player) {
								if (event.type != 'discard' || event.player == player) return false;
								for (var i = 0; i < event.cards2.length; i++) {
									if (player.hp < player.maxHp / 2 && get.type(event.cards2[i], null, event.hs.includes(event.cards2[i]) ? event.player : false) == 'equip') {
										return true;
									}
								}
								return false;
							},
							check(event, player) {
								if (get.attitude(player, event.player) <= 0) return true;
								return false;
							},
							audio: 'rezhuikong',
							content() {
								trigger.player.loseHp();
							},
						},
						xian_fuhuanghou_qidun: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:蒸蒸日上/audio:1',
							forced: true,
							check(event, player) {
								return ai.get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return get.type(event.card) == 'delay' || event.card.name == 'tiesuo';
							},
							content() {
								game.log(player, '发动了奇遁,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'tiesuo' || get.type(card) == 'delay') {
										return false;
									}
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'tiesuo' || get.type(card) == 'delay') {
											return [0, 0];
										}
									},
								},
							},
						},
						xian_fuhuanghou_tianwei: {
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
							ai: {
								noturn: true,
							},
							group: 'xian_fuhuanghou_tianwei2',
						},
						xian_fuhuanghou_tianwei2: {
							trigger: {
								player: 'phaseBefore',
							},
							nopop: true,
							forced: true,
							_priority: 1,
							content() {
								player.lockOut = true;
							},
						},
						xian_fuhuanghouStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['xian_fuhuanghouStatus2'],
						},
						xian_fuhuanghouStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						xian_fuhuanghou_fubing: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							forced: true,
							content() {
								player.draw(2);
							},
						},
						xian_fuhuanghou_huitian: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
						},
						xian_zhangliao_yuanjun: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						xian_zhangliao_qidun: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:蒸蒸日上/audio:1',
							forced: true,
							check(event, player) {
								return ai.get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return get.type(event.card) == 'delay' || event.card.name == 'tiesuo';
							},
							content() {
								game.log(player, '发动了奇遁,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'tiesuo' || get.type(card) == 'delay') {
										return false;
									}
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'tiesuo' || get.type(card) == 'delay') {
											return [0, 0];
										}
									},
								},
							},
						},
						xian_zhangliao_bingshen: {
							trigger: {
								player: 'equipAfter',
							},
							forced: true,
							audio: 'jieyue',
							content() {
								player.changeHujia();
							},
						},
						xian_zhangliao_kuiwu: {
							trigger: {
								source: 'damageBegin1',
							},
							filter(event, player) {
								return event.player != player && event.notLink() && player.countCards('e') > 0;
							},
							forced: true,
							audio: 'drlt_zhiti',
							logTarget: 'player',
							content() {
								'step 0';
								trigger.num += player.countCards('e');
								('step 1');
								player.discard(player.getCards('e'));
							},
						},
						xian_zhangliao_xiaoyao: {
							audio: 'drlt_duorui',
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseEnd'],
							},
							forced: true,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return player != current && current.countCards('he') && (current.hp >= player.hp || current.countCards('h') > player.countCards('h') || current.countCards('e') > player.countCards('e'));
								});
							},
							content() {
								'step 0';
								player.chooseTarget(
									get.prompt('xian_zhangliao_xiaoyao'),
									function (card, player, target) {
										return target.countCards('he') > 0 && player != target && (target.hp >= player.hp || target.countCards('h') > player.countCards('h') || target.countCards('e') > player.countCards('e'));
									},
									function (target) {
										var att = get.attitude(_status.event.player, target);
										return 1 - att + target.countCards('he');
									}
								);
								('step 1');
								if (result.bool) {
									var cards = result.targets[0].getCards('he');
									player.gain(cards, result.targets[0], 'giveAuto');
									if (!result.targets[0].hasSkill('baiban'))
										result.targets[0].addTempSkill('baiban', {
											player: 'recoverAfter',
										});
								} else {
									event.finish();
								}
							},
							ai: {
								threaten: 5.6,
								expose: 0.2,
							},
						},
						xian_zhangliao_liangjiang: {
							trigger: {
								player: ['loseHpBefore', 'damageAfter'],
							},
							forced: true,
							audio: 'jushou',
							content() {
								if (trigger.name == 'loseHp') trigger.cancel();
								if (trigger.name == 'damage' && !player.hujia) {
									player.addTempSkill('yizhong');
									player.addTempSkill('upgrade_ganglie');
								}
							},
						},
						xian_zhangliao_tianwei: {
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
							ai: {
								noturn: true,
							},
							group: 'xian_zhangliao_tianwei2',
						},
						xian_zhangliao_tianwei2: {
							trigger: {
								player: 'phaseBefore',
							},
							nopop: true,
							forced: true,
							content() {
								player.lockOut = true;
							},
						},
						xian_zhangliaoStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['xian_zhangliaoStatus2'],
						},
						xian_zhangliaoStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						xian_zhangliao_fubing: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							forced: true,
							content() {
								player.draw(2);
							},
						},
						xian_zhangliao_huitian: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
						},
						wang_liaohua_yuanjun: {
							audio: 'xindangxian',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						wang_liaohua_qidun: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:蒸蒸日上/audio:1',
							forced: true,
							check(event, player) {
								return ai.get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return get.type(event.card) == 'delay' || event.card.name == 'tiesuo';
							},
							content() {
								game.log(player, '发动了奇遁,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'tiesuo' || get.type(card) == 'delay') {
										return false;
									}
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'tiesuo' || get.type(card) == 'delay') {
											return [0, 0];
										}
									},
								},
							},
						},
						wang_liaohua_mashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						wang_liaohua_jiaxiang: {
							audio: 'ext:蒸蒸日上/audio:2',
							derivation: ['xingongji', 'youdi', 'decadexuanfeng', 'buqu'],
							trigger: {
								player: 'dying',
							},
							forced: true,
							_priority: 100,
							juexingji: true,
							filter(event, player) {
								return !player.storage.wang_liaohua_jiaxiang && player.hp < 1;
							},
							content() {
								player.storage.wang_liaohua_jiaxiang = true;
								player.recover(Math.floor(player.maxHp / 2) - player.hp);
								player.addSkill('youdi');
								player.addSkill('xingongji');
								player.addSkill('decadexuanfeng');
								player.addSkill('buqu');
								player.removeSkill('wang_liaohua_jiaxiang');
							},
						},
						wang_liaohua_danji: {
							audio: 'ext:蒸蒸日上/audio:2',
							derivation: ['nuzhan', 'ollongdan', 'xinbenxi', 'new_rewusheng'],
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return !player.storage.wang_liaohua_danji && game.roundNumber >= 5;
							},
							content() {
								player.storage.wang_liaohua_danji = true;
								player.addSkill('wang_liaohua_mashu');
								player.addSkill('nuzhan');
								player.addSkill('ollongdan');
								player.addSkill('xinbenxi');
								player.addSkill('new_rewusheng');
								player.removeSkill('wang_liaohua_danji');
								player.phase('nodelay');
							},
						},
						wang_liaohua_podi: {
							shaRelated: true,
							audio: 'decadepojun',
							trigger: {
								player: 'useCardToPlayered',
							},
							forced: true,
							filter(event, player) {
								return (event.card.name == 'juedou' || event.card.name == 'sha') && event.target.maxHp > 0 && event.target.countCards('he') > 0;
							},
							content() {
								'step 0';
								var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(Math.ceil(trigger.target.maxHp / 2), trigger.target.countCards('he'))], get.prompt('wang_liaohua_podi', trigger.target));
								next.set('ai', function (button) {
									if (!_status.event.goon) return 0;
									var val = get.value(button.link);
									if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
									return val + 0.1;
								});
								next.set('goon', get.attitude(player, trigger.target) <= 0);
								next.set('forceAuto', true);
								('step 1');
								if (result.bool) {
									event.cards = result.cards;
									var target = trigger.target;
									if (!target.hasSkill('fengyin')) target.addTempSkill('fengyin');
									target.discard(event.cards);
								}
								('step 2');
								if (!trigger.target.countCards('he')) player.draw();
							},
							ai: {
								unequip: true,
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (get.attitude(player, arg.target) > 0) return false;
									if (tag == 'directHit_ai') return arg.target.maxHp / 2 >= Math.max(1, arg.target.countCards('he') - 1);
									if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
									return false;
								},
								effect: {
									player(card, player, target, current) {
										if (card.name == 'sha' && player != target && target.countCards('he') > 1) {
											return [1, target.countCards('he')];
										}
									},
								},
							},
						},
						wang_liaohua_xianzhen: {
							audio: 'rexianzhen',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player.canCompare(target);
							},
							filter(event, player) {
								return player.countCards('h') > 0 && !player.hasSkill('wang_liaohua_xianzhen2') && !player.hasSkill('wang_liaohua_xianzhen3');
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool) {
									player.storage.wang_liaohua_xianzhen2 = target;
									player.addTempSkill('wang_liaohua_xianzhen2');
								} else {
									player.addTempSkill('wang_liaohua_xianzhen3');
								}
							},
							ai: {
								order(name, player) {
									var cards = player.getCards('h');
									if (player.countCards('h', 'sha') == 0) {
										return 1;
									}
									for (var i = 0; i < cards.length; i++) {
										if (cards[i].name != 'sha' && cards[i].number > 12 && get.value(cards[i]) < 7) {
											return 9;
										}
									}
									return (
										get.order({
											name: 'sha',
										}) - 1
									);
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
								threaten: 3.5,
							},
						},
						wang_liaohua_xianzhen2: {
							audio: 'wang_liaohua_xianzhen',
							charlotte: true,
							mod: {
								targetInRange(card, player, target) {
									if (target == player.storage.wang_liaohua_xianzhen2) return true;
								},
								cardUsableTarget(card, player, target) {
									if (target == player.storage.wang_liaohua_xianzhen2) return true;
								},
							},
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.target != player.storage.wang_liaohua_xianzhen2) return false;
								},
							},
							group: 'wang_liaohua_xianzhen2_damage',
							subSkill: {
								damage: {
									audio: 'wang_liaohua_xianzhen',
									trigger: {
										source: 'damageBegin1',
									},
									forced: true,
									filter(event, player) {
										return (
											event.card &&
											event.player == player.storage.wang_liaohua_xianzhen2 &&
											!player.hasHistory('custom', function (evt) {
												return evt.name == 'wang_liaohua_xianzhen' && evt.cardname == event.card.name;
											})
										);
									},
									logTarget: 'player',
									content() {
										trigger.num++;
										player.getHistory('custom').push({
											name: 'wang_liaohua_xianzhen',
											cardname: trigger.card.name,
										});
									},
								},
							},
						},
						wang_liaohua_xianzhen3: {
							charlotte: true,
							mod: {
								cardEnabled(card) {
									if (card.name == 'sha') return false;
								},
								ignoredHandcard(card, player) {
									if (card.name == 'sha') {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.name == 'sha') {
										return false;
									}
								},
							},
						},
						wang_liaohua_xianfeng: {
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							content() {
								'step 0';
								var next = player.phaseDraw();
								next.wang_liaohua_xianfeng = true;
								event.next.remove(next);
								trigger.next.push(next);
								('step 1');
								var next = player.phaseUse();
								next.wang_liaohua_xianfeng = true;
								event.next.remove(next);
								trigger.next.push(next);
							},
						},
						wang_liaohua_tianwei: {
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
							ai: {
								noturn: true,
							},
							group: 'wang_liaohua_tianwei2',
						},
						wang_liaohua_tianwei2: {
							trigger: {
								player: 'phaseBefore',
							},
							nopop: true,
							forced: true,
							content() {
								player.lockOut = true;
							},
						},
						wang_liaohuaStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['wang_liaohuaStatus2'],
						},
						wang_liaohuaStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						wang_liaohua_fubing: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							forced: true,
							content() {
								player.draw(2);
							},
						},
						wang_liaohua_huitian: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
						},
						wang_panfeng_yuanjun: {
							audio: 'kuangfu',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						wang_panfeng_qidun: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:蒸蒸日上/audio:1',
							forced: true,
							check(event, player) {
								return ai.get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return get.type(event.card) == 'delay' || event.card.name == 'tiesuo';
							},
							content() {
								game.log(player, '发动了奇遁,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'tiesuo' || get.type(card) == 'delay') {
										return false;
									}
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'tiesuo' || get.type(card) == 'delay') {
											return [0, 0];
										}
									},
								},
							},
						},
						wang_panfeng_yongzhan: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'damageAfter',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.num > 0 && player != event.source && player.inRange(event.source);
							},
							content() {
								'step 0';
								if (!player.countCards('h')) {
									player.draw(3);
								} else {
									player.draw();
								}
								('step 1');
								player
									.chooseToUse(
										'是否对' + get.translation(trigger.source) + '使用一张【杀】？',
										function (card) {
											if (card.name != 'sha') return false;
											return lib.filter.filterCard.apply(this, arguments);
										},
										function (card, player, target) {
											if (target != trigger.source) return false;
											return lib.filter.filterTarget.apply(this, arguments);
										}
									)
									.set('ai2', function () {
										return get.effect_use.apply(this, arguments);
									});
							},
						},
						wang_panfeng_zhansha: {
							derivation: 'new_repaoxiao',
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								source: 'dyingBefore',
							},
							filter(event, player) {
								return ((event.parent.card && event.parent.card.name == 'sha') || (event.getParent(2).card && event.getParent(2).card.name == 'sha')) && event.player != player && event.player.hp < 0;
							},
							frequent: false,
							check(event, player) {
								if (get.attitude(player, event.player) <= 0) return true;
								return false;
							},
							logTarget: 'player',
							content() {
								'step 0';
								trigger.player.die({
									source: player,
								});
								if (trigger.player.isAlive())
									trigger.player.die({
										source: player,
									})._triggered = null;
								('step 1');
								player.addTempSkill('new_repaoxiao');
								if (player.isDamaged()) player.recover(Math.max(1, Math.floor((player.maxHp - player.hp) / 2)));
								var sjnum = player.countMark('wang_panfeng_shangjiang');
								player.draw(sjnum);
								('step 2');
								player.removeMark('wang_panfeng_shangjiang', player.countMark('wang_panfeng_shangjiang'));
							},
						},
						wang_panfeng_shangjiang: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							group: ['wang_panfeng_shangjiang1', 'wang_panfeng_shangjiang2', 'wang_panfeng_shangjiang3'],
							notemp: true,
							filter(event, player) {
								return event.card && event.num > 0;
							},
							content() {
								if (trigger.card.name == 'juedou' || (get.color(trigger.card) == 'black' && trigger.card.name == 'sha')) player.addMark('wang_panfeng_shangjiang', 2);
								else player.addMark('wang_panfeng_shangjiang', 1);
							},
							intro: {
								name2: '将',
								content: '杀造成的伤害+#',
							},
						},
						wang_panfeng_shangjiang1: {
							audio: 'wang_panfeng_shangjiang',
							trigger: {
								player: 'useCardToPlayered',
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
							},
							logTarget: 'target',
							content() {
								var id = trigger.target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[id]) map[id] = {};
								if (typeof map[id].shanRequired == 'number') {
									map[id].shanRequired++;
								} else {
									map[id].shanRequired = 2;
								}
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
								},
							},
						},
						wang_panfeng_shangjiang2: {
							trigger: {
								source: 'damageBegin1',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink() && player.countMark('wang_panfeng_shangjiang') > 0;
							},
							forced: true,
							audio: 'wang_panfeng_shangjiang',
							content() {
								trigger.num += player.countMark('wang_panfeng_shangjiang');
							},
						},
						wang_panfeng_shangjiang3: {
							audio: 'wang_panfeng_shangjiang',
							trigger: {
								player: 'useCardToPlayered',
								target: 'useCardToTargeted',
							},
							forced: true,
							logTarget(trigger, player) {
								return player == trigger.player ? trigger.target : trigger.player;
							},
							filter(event, player) {
								return event.card.name == 'juedou';
							},
							content() {
								var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
								var idt = trigger.target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[idt]) map[idt] = {};
								if (!map[idt].shaReq) map[idt].shaReq = {};
								if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
								map[idt].shaReq[id]++;
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if ((arg && arg.card.name != 'juedou') || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
								},
							},
						},
						wang_panfeng_tianwei: {
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
							ai: {
								noturn: true,
							},
							group: 'wang_panfeng_tianwei2',
						},
						wang_panfeng_tianwei2: {
							trigger: {
								player: 'phaseBefore',
							},
							nopop: true,
							forced: true,
							content() {
								player.lockOut = true;
							},
						},
						wang_panfengStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['wang_panfengStatus2'],
						},
						wang_panfengStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						wang_panfeng_fubing: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							forced: true,
							content() {
								player.draw(2);
							},
						},
						wang_panfeng_huitian: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
						},
						wang_caiwenji_qinbian: {
							trigger: {
								player: ['phaseUseBegin', 'phaseUseEnd'],
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							content() {
								player.draw();
							},
							mod: {
								maxHandcard(player, num) {
									var num1 = 0,
										num2 = 0;
									for (var i of game.players) {
										if (i.sex == 'female') num1++;
										if (i.sex == 'male') num2++;
									}
									if (num1 % 2 != 0) num++;
									if (num2 % 2 == 0) num++;
									return num;
								},
							},
						},
						wang_caiwenji_qidun: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:蒸蒸日上/audio:1',
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'delay' || event.card.name == 'tiesuo';
							},
							content() {
								game.log(player, '发动了奇遁,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'tiesuo' || get.type(card) == 'delay') {
										return false;
									}
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'tiesuo' || get.type(card) == 'delay') {
											return [0, 0];
										}
									},
								},
							},
						},
						wang_caiwenji_shuyong: {
							enable: 'phaseUse',
							audio: 'ext:蒸蒸日上/audio:2',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								'step 0';
								target.draw();
								('step 1');
								target
									.chooseCard('【书咏】<br><br><div class="text center">交给' + get.translation(player) + '一张牌并令' + get.translation(player) + '于此回合内使用牌时无距离和使用次数限,或令' + get.translation(player) + '依次弃你两张牌', function (card, player, target) {
										return true;
									})
									.set('ai', function (card) {
										if (get.attitude(target, player) > 0) {
											return 100 - get.value(card);
										}
										if (get.attitude(target, player) <= 0) {
											return 0 - get.value(card);
										}
									});
								('step 2');
								if (result.bool) {
									player.gain(result.cards);
									target.$give(result.cards, player);
									player.addTempSkill('wang_caiwenji_shuyong2', 'phaseEnd');
								} else {
									player.discardPlayerCard('he', target, true);
									player.discardPlayerCard('he', target, true);
								}
							},
							ai: {
								order: 10,
								result: {
									player(player, target) {
										if (get.attitude(target, player) > 0) return 6;
										return 0;
									},
									target(player, target) {
										if (get.attitude(target, player) <= 0) return -4;
										return 0;
									},
								},
							},
						},
						wang_caiwenji_shuyong2: {
							mod: {
								cardUsable(card, player, num) {
									return Infinity;
								},
								targetInRange(card, player, target, now) {
									return true;
								},
							},
						},
						wang_caiwenji_tianwei: {
							trigger: {
								player: 'turnOverBefore',
							},
							audio: 'ext:蒸蒸日上/audio:1',
							_priority: 20,
							forced: true,
							filter(event, player) {
								return !player.isTurnedOver();
							},
							content() {
								trigger.cancel();
								game.log(player, '取消了翻面');
							},
							ai: {
								noturn: true,
							},
							ai: {
								noturn: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'turnOver')) return [0, 0];
									},
								},
							},
							group: 'wang_caiwenji_tianwei2',
						},
						wang_caiwenji_tianwei2: {
							trigger: {
								player: 'phaseBefore',
							},
							nopop: true,
							forced: true,
							content() {
								player.lockOut = true;
							},
						},
						wang_caiwenji_beifen: {
							enable: 'phaseUse',
							audio: 'ext:蒸蒸日上/audio:2',
							usable: 1,
							filter(event, player) {
								for (var i of game.players) {
									if (i != player && get.distance(player, i, 'attack') <= 1) return true;
								}
								return false;
							},
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								'step 0';
								target.chooseTarget(function (card, player, target1) {
									return target1 != event.player && get.distance(event.player, target1, 'attack') <= 1;
								}, true).ai = function (target1) {
									return ai.get.effect(
										target1,
										{
											name: 'sha',
										},
										event.player,
										target
									);
								};
								('step 1');
								player.damage(target);
								('step 2');
								player.useCard(
									{
										name: 'sha',
									},
									result.targets[0],
									false
								);
							},
							ai: {
								order: 3,
								result: {
									player(player, target) {
										if (
											player.hasSkill('wang_caiwenji_wangyou') &&
											player.hp <= Math.round(player.maxHp / 2) &&
											!player.countCards('h', {
												color: 'red',
											})
										)
											return -6;
										return 0;
									},
									target(player, target) {
										var num1 = 0,
											num2 = 0;
										for (var i of game.players) {
											if (get.attitude(i, player) > 0 && i != player && get.distance(player, i, 'attack') <= 1) num1++;
											if (get.attitude(i, player) <= 0 && i != player && get.distance(player, i, 'attack') <= 1) num2++;
										}
										if (get.attitude(target, player) > 0 && num2 != 0) return 4;
										if (get.attitude(target, player) <= 0 && num1 == 0) return -3;
										return 0;
									},
								},
							},
						},
						wang_caiwenjiStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['wang_caiwenjiStatus2'],
						},
						wang_caiwenjiStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						wang_caiwenji_houxian: {
							forced: true,
							group: ['wang_caiwenji_houxian1', 'wang_caiwenji_houxian2', 'wang_caiwenji_houxian3'],
						},
						wang_caiwenji_houxian1: {
							trigger: {
								global: 'recoverBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return (
									player.countCards('h', {
										color: 'black',
									}) && player.hp <= Math.round(player.maxHp / 2)
								);
							},
							forced: true,
							content() {
								'step 0';
								player.chooseToDiscard(
									'h',
									function (card) {
										return get.color(card) == 'black';
									},
									'【篌弦】<br><br><div class="text center">是否丢弃一张黑色手牌,令' + get.translation(trigger.player) + '回复的体力无效化.并且令' + get.translation(trigger.player) + '判定.'
								).ai = function (card) {
									var player = _status.event.player;
									if (get.attitude(_status.event.player, trigger.player) <= 0) {
										return 20 - get.value(card);
									}
									if (get.attitude(_status.event.player, trigger.player) > 0) {
										return -get.value(card) - 20;
									}
								};
								('step 1');
								if (result.bool == false) {
									event.finish();
									return;
								}
								('step 2');
								trigger.untrigger();
								trigger.finish();
								trigger.player.judge(function (card) {
									if (get.color(card) != 'red') return -2;
									return 0;
								});
								('step 3');
								if (result.judge > -2) {
									event.finish();
									return;
								}
								('step 4');
								trigger.player.damage('nosource');
							},
						},
						wang_caiwenji_houxian2: {
							trigger: {
								global: 'damageBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return (
									player.countCards('h', {
										color: 'red',
									}) && player.hp <= Math.round(player.maxHp / 2)
								);
							},
							forced: true,
							content() {
								'step 0';
								player.chooseToDiscard(
									'h',
									function (card) {
										return get.color(card) == 'red';
									},
									'【篌弦】<br><br><div class="text center">是否丢弃一张红色手牌,令' + get.translation(trigger.player) + '受的伤害无效化.并且令自己判定.'
								).ai = function (card) {
									var player = _status.event.player;
									if (get.attitude(_status.event.player, trigger.player) > 0) {
										return 20 - get.value(card);
									}
									if (get.attitude(_status.event.player, trigger.player) <= 0) {
										return -get.value(card) - 20;
									}
								};
								('step 1');
								if (result.bool == false) {
									event.finish();
									return;
								}
								('step 2');
								trigger.untrigger();
								trigger.finish();
								player.judge(function (card) {
									if (card.suit != 'spade' && player.hp < player.maxHp) return 2;
									return 0;
								});
								('step 3');
								if (result.judge < 2) {
									event.finish();
									return;
								}
								('step 4');
								player.recover();
							},
						},
						wang_caiwenji_houxian3: {
							trigger: {
								player: 'phaseEnd',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return player.countCards('h') <= player.getHandcardLimit() && player.hp <= Math.round(player.maxHp / 2);
							},
							check(event, player) {
								return player.countCards('h') <= player.hp || player.countCards('e') >= player.hp;
							},
							content() {
								'step 0';
								var nume = player.countCards('e'),
									hp = player.hp;
								player.discard(player.getCards('he').randomGets(Infinity));
								player.draw(nume + hp);
								('step 1');
								if (player.countCards('h') < 2 * player.hp) {
									event.finish();
									return;
								}
								player.chooseTarget(function (card, player, target) {
									return true;
								}).ai = function (target) {
									if (player.hp == 1 && get.attitude(target, player) <= 0) return target.maxHp + target.hp - 2;
									if (target.hp == target.maxHp && target.hp < 4 && get.attitude(target, player) <= 0) return (4 - target.hp) * 2;
									if (target.hp < 4 && get.attitude(target, player) <= 0) return 1;
									if (target.hp < 4 && get.attitude(target, player) <= 0) return 0.5;
									return 0;
								};
								('step 2');
								if (result.bool == true) {
									if (player.hp != 1) {
										result.targets[0].loseMaxHp();
									} else {
										if (result.targets[0].maxHp >= 1) {
											result.targets[0].loseMaxHp(result.targets[0].maxHp - 1);
										}
									}
								}
							},
						},
						wang_caiwenji_wangyou: {
							trigger: {
								source: 'damageBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player, target) {
								return event.player != player && player.hp <= Math.round(player.maxHp / 2);
							},
							check(event, player, target) {
								return (get.attitude(player, event.player) <= 0 && event.player.hp > player.hp) || (get.attitude(player, event.player) > 0 && (event.player.hp <= player.maxHp || event.player.maxHp <= player.hp));
							},
							content() {
								trigger.cancel();
								var hp1 = trigger.player.hp;
								var hp2 = player.hp;
								trigger.player.hp = hp2;
								player.hp = hp1;
								player.update();
								trigger.player.update();
							},
						},
						wang_caiwenji_huizou: {
							trigger: {
								player: 'phaseBegin',
							},
							audio: 'ext:蒸蒸日上/audio:1',
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								'step 0';
								player.chooseControl('recover_hp', 'draw_card', function (event, player) {
									var num = player.countCards('h');
									if (num > player.hp || player.hp == 1) return 'recover_hp';
									return 'draw_draw';
								});
								('step 1');
								if (result.control == 'draw_card') {
									player.draw(2);
								} else {
									player.recover();
								}
							},
						},
						wang_diaochan_yuanjun: {
							audio: 'biyue',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						wang_diaochan_qidun: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'delay' || event.card.name == 'tiesuo';
							},
							content() {
								game.log(player, '发动了奇遁,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'tiesuo' || get.type(card) == 'delay') {
										return false;
									}
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'tiesuo' || get.type(card) == 'delay') {
											return [0, 0];
										}
									},
								},
							},
						},
						wang_diaochan_lipan: {
							audio: 'ext:蒸蒸日上/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								var num = 0;
								for (var i of game.players) {
									num++;
								}
								return num > 1;
							},
							check(card) {
								return 10 - get.value(card);
							},
							filterCard: true,
							position: 'he',
							filterTarget(card, player, target) {
								if (ui.selected.targets.length == 1) {
									return target.canUse(
										{
											name: 'juedou',
										},
										ui.selected.targets[0]
									);
								}
								return true;
							},
							targetprompt: ['先出杀', '后出杀'],
							selectTarget: 2,
							multitarget: true,
							content() {
								'step 0';
								targets[0].addSkill('wang_diaochan_lipan2');
								targets[1].addSkill('wang_diaochan_lipan2');
								('step 1');
								targets[1].useCard(
									{
										name: 'juedou',
									},
									targets[0]
								).animate = false;
								('step 2');
								targets[0].removeSkill('wang_diaochan_lipan2');
								targets[1].removeSkill('wang_diaochan_lipan2');
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										if (ui.selected.targets.length == 0) {
											return -2.5;
										} else {
											return ai.get.effect(
												target,
												{
													name: 'juedou',
												},
												ui.selected.targets[0],
												target
											);
										}
									},
								},
								expose: 0.4,
								threaten: 3,
							},
						},
						wang_diaochan_lipan2: {
							ai: {
								playernowuxie: true,
							},
						},
						wang_diaochan_tianwei: {
							trigger: {
								player: 'turnOverBefore',
							},
							audio: 'ext:蒸蒸日上/audio:1',
							_priority: 20,
							forced: true,
							filter(event, player) {
								return !player.isTurnedOver();
							},
							content() {
								trigger.cancel();
								game.log(player, '取消了翻面');
							},
							ai: {
								noturn: true,
							},
							ai: {
								noturn: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'turnOver')) return [0, 0];
									},
								},
							},
							group: 'wang_diaochan_tianwei2',
						},
						wang_diaochan_tianwei2: {
							rigger: {
								player: 'phaseBefore',
							},
							nopop: true,
							forced: true,
							content() {
								player.lockOut = true;
							},
						},
						wang_diaochan_lianxiang: {
							audio: 'ext:蒸蒸日上/audio:1',
							enable: 'phaseUse',
							filterCard: true,
							selectCard: 1,
							prompt: '弃置一张手牌,选择一名男性角色,观看其手牌,并且获得其一张',
							filterCard: true,
							position: 'he',
							filterTarget(card, player, target) {
								return target.countCards('h') > 0 && target.sex == 'male';
							},
							check(card) {
								return 8 - get.value(card);
							},
							content() {
								'step 0';
								player.chooseCardButton(target, target.getCards('h')).ai = function (card) {
									if (event.card != 'du') return get.value(card) + 4;
									return 0;
								};
								('step 1');
								if (result.bool) {
									player.gain(result.links[0]);
									target.$give(result.cards, player);
								}
							},
							ai: {
								order: 11,
								result: {
									target(player, target, card) {
										if (
											(target.hasSkillTag('noh') && target.countCards('h') <= 1 && !target.hasSkill('shangshi') && !target.hasSkill('shangshix') && !target.hasSkill('boss_juejing')) ||
											(target.hasSkillTag('noh') && target.countCards('h') <= 3 && target.countCards('h') <= target.maxHp - target.hp && target.hasSkill('shangshi')) ||
											(target.hasSkillTag('noh') && target.countCards('h') <= 4 && target.hasSkill('boss_juejing')) ||
											(target.hasSkillTag('noh') && target.countCards('h') <= 4 && target.hasSkill('shangshix')) ||
											target.countCards('h', {
												name: 'du',
											}) == target.countCards('h')
										)
											return 0;
										return -target.countCards('h');
									},
								},
								threaten: 1.1,
							},
						},
						wang_diaochanStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['wang_diaochanStatus2'],
						},
						wang_diaochanStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						wang_diaochan_xiyu: {
							mod: {
								targetEnabled(card, player, target, now) {
									if ((card.name == 'sha' && target.hp <= Math.round(target.maxHp / 2) && get.color(card) == 'black') || (target.hp <= Math.round(target.maxHp / 2) && get.type(card) == 'trick' && get.color(card) == 'black')) return false;
								},
							},
						},
						wang_diaochan_xiuhua: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								'step 0';
								player.chooseTarget('是否发动【羞花】？', function (card, player, target) {
									return target.sex == 'male';
								}).ai = function (target) {
									var nh = target.countCards('h');
									if (target.countCards('h', { name: 'du' }) == nh) return -1;
									if (get.attitude(player, target) < 0 && nh > 0) return 2; //QQQ
									if (get.attitude(player, target) == 0 && nh > 0) return 1;
									return 0.5;
								};
								('step 1');
								if (result.bool) {
									player.gainPlayerCard('h', result.targets[0]);
								}
							},
						},
						wang_diaochan_huitian: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
						},
						wang_huaxiong_yuanjun: {
							audio: 'yaowu',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						wang_huaxiong_qidun: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:蒸蒸日上/audio:1',
							forced: true,
							check(event, player) {
								return ai.get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return get.type(event.card) == 'delay' || event.card.name == 'tiesuo';
							},
							content() {
								game.log(player, '发动了奇遁,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'tiesuo' || get.type(card) == 'delay') {
										return false;
									}
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'tiesuo' || get.type(card) == 'delay') {
											return [0, 0];
										}
									},
								},
							},
						},
						wang_huaxiong_shanshi: {
							trigger: {
								player: 'equipBefore',
							},
							forced: true,
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
							group: 'wang_huaxiong_shanshi2',
						},
						wang_huaxiong_shanshi2: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return (
									event.card &&
									event.card.name == 'sha' &&
									event.notLink() &&
									player.countCards('e', {
										subtype: 'equip1',
									})
								);
							},
							forced: true,
							content() {
								trigger.num =
									1 +
									player.countCards('e', {
										subtype: 'equip1',
									});
							},
						},
						wang_huaxiong_tianwei: {
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
							ai: {
								noturn: true,
							},
							group: 'wang_huaxiong_tianwei2',
						},
						wang_huaxiong_tianwei2: {
							trigger: {
								player: 'phaseBefore',
							},
							nopop: true,
							forced: true,
							content() {
								player.lockOut = true;
							},
						},
						wang_huaxiong_xiaoshou: {
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source.countCards('e');
							},
							content() {
								'step 0';
								player.choosePlayerCard('是否对' + get.translation(trigger.source) + '发动【枭首】？', trigger.source, ai.get.buttonValue, 'e');
								('step 1');
								if (result.bool) {
									player.gain(result.buttons[0].link);
									trigger.source.$give(1, player);
								}
							},
							ai: {
								result: {
									target(card, player, target) {
										if (player.countCards('e') > 1 && get.tag(card, 'damage')) {
											if (player.skills.includes('jueqing')) return [1, -1.5];
											if (get.attitude(target, player) < 0) return [1, 1];
										}
									},
								},
							},
						},
						wang_huaxiong_shuangren: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 1;
								},
							},
						},
						wang_huaxiongStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['wang_huaxiongStatus2'],
						},
						wang_huaxiongStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						wang_huaxiong_fubing: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							forced: true,
							content() {
								player.draw(2);
							},
						},
						wang_huaxiong_huitian: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
						},
						wang_liru_yuanjun: {
							audio: 'ext:蒸蒸日上/audio:4',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						wang_liru_qidun: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'delay' || event.card.name == 'tiesuo';
							},
							content() {
								game.log(player, '发动了奇遁,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'tiesuo' || get.type(card) == 'delay') {
										return false;
									}
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'tiesuo' || get.type(card) == 'delay') {
											return [0, 0];
										}
									},
								},
							},
						},
						wang_liru_shipo: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							_priority: 5.9,
							check(event, player) {
								return ai.get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return event.player != player && get.type(event.card, 'trick') == 'trick';
							},
							content() {
								'step 0';
								var effect = ai.get.effect(player, trigger.card, trigger.player, player);
								player.judge(function (card) {
									switch (get.color(card)) {
										case 'black':
											return -effect;
										case 'red':
											return 1;
										default:
											return 0;
									}
								});
								('step 1');
								switch (result.color) {
									case 'black': {
										trigger.cancel();
										break;
									}
									case 'red': {
										break;
									}
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										return 0.7;
									},
								},
								threaten: 0.8,
							},
						},
						wang_liru_tianwei: {
							trigger: {
								player: 'turnOverBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							_priority: 20,
							forced: true,
							filter(event, player) {
								return !player.isTurnedOver();
							},
							content() {
								trigger.cancel();
								game.log(player, '取消了翻面');
							},
							ai: {
								noturn: true,
							},
							group: 'wang_liru_tianwei2',
						},
						wang_liru_tianwei2: {
							trigger: {
								player: 'phaseBefore',
							},
							nopop: true,
							forced: true,
							content() {
								player.lockOut = true;
							},
						},
						wang_liru_zhengjiao: {
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							content() {
								'step 0';
								player.chooseTarget('是否发动【徵缴】？', function (card, player, target) {
									return player != target;
								}).ai = function (target) {
									var player = _status.event.player;
									var nh = Math.ceil(target.countCards('he') / 2);
									if (get.attitude(_status.event.player, target) > 1) return -1;
									if (nh >= 1 && get.attitude(_status.event.player, target) <= 0) return nh;
									return nh / 2;
								};
								('step 1');
								if (result.bool) {
									var num = Math.ceil(result.targets[0].countCards('he') / 2);
									player.gainPlayerCard('he', result.targets[0], Math.min(num, result.targets[0].countCards('he')), true);
								}
							},
						},
						wang_liruStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['wang_liruStatus2'],
						},
						wang_liruStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						wang_liru_suoshi: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							filterTarget(card, player, target) {
								if (target == player) return false;
								return true;
							},
							prompt: '你可以选择一个目标直到你的下个回合开始,所有伤害来源均为他.',
							content() {
								target.addSkill('wang_liru_suoshi2');
							},
							ai: {
								order: 10,
								result: {
									target(player, target) {
										if (target.hasSkill('fankui') || target.hasSkill('ganglie') || target.hasSkill('duanchang') || target.hasSkill('refankui') || target.hasSkill('reganglie') || target.hasSkill('zhiyu') || target.hasSkill('xinenyuan') || target.hasSkill('enyuan') || target.hasSkill('duodao') || target.hasSkill('jilei') || target.hasSkill('wuhun') || target.hasSkill('wang_huaxiong_xiaoshou') || target.hasSkill('wang_lvbu_fanfu') || target.hasSkill('xian_machao_yuling') || target.hasSkill('xian_taishici_yiji')) {
											return -3;
										}
										return -0.5;
									},
								},
							},
						},
						wang_liru_suoshi2: {
							mark: true,
							intro: {
								content: '你是所有伤害的来源',
								nocount: true,
							},
							group: ['wang_liru_suoshi3'],
							trigger: {
								global: 'damageBefore',
							},
							forced: true,
							_priority: 999,
							audio: 'ext:蒸蒸日上/audio:2',
							content() {
								trigger.source = player;
							},
						},
						wang_liru_suoshi3: {
							trigger: {
								global: 'phaseBegin',
							},
							forced: true,
							popup: false,
							silent: true,
							filter(event, player) {
								return event.player.hasSkill('wang_liru_suoshi');
							},
							content() {
								player.removeSkill('wang_liru_suoshi2');
							},
						},
						wang_liru_yudan: {
							audio: 'ext:蒸蒸日上/audio:3',
							enable: ['chooseToRespond', 'chooseToUse'],
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							filterCard(card, player) {
								return get.color(card) == 'red';
							},
							position: 'h',
							viewAs: {
								name: 'tao',
							},
							viewAsFilter(player) {
								if (
									!player.countCards('h', {
										color: 'red',
									})
								)
									return false;
							},
							prompt: '将一张红色手牌当桃使用或打出',
							check(card) {
								return 15 - get.value(card);
							},
							ai: {
								skillTagFilter(player) {
									if (
										!player.countCards('h', {
											color: 'red',
										})
									)
										return false;
								},
								save: true,
							},
						},
						wang_lvbu_liangguang: {
							audio: 'ext:蒸蒸日上/audio:4',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 4;
							},
						},
						wang_lvbu_qidun: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'delay' || event.card.name == 'tiesuo';
							},
							content() {
								game.log(player, '发动了奇遁,', trigger.card, '对', trigger.target, '失效');
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'tiesuo' || get.type(card) == 'delay') {
										return false;
									}
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'tiesuo' || get.type(card) == 'delay') {
											return [0, 0];
										}
									},
								},
							},
						},
						wang_lvbu_wushuang: {
							forced: true,
							group: ['wang_lvbu_wushuang1', 'wang_lvbu_wushuang2'],
						},
						wang_lvbu_wushuang1: {
							trigger: {
								player: 'shaBegin',
							},
							audio: 'ext:蒸蒸日上/audio:4',
							forced: true,
							filter(event, player) {
								return !event.directHit;
							},
							content() {
								'step 0';
								var next = trigger.target.chooseToRespond({
									name: 'sha',
								});
								next.autochoose = lib.filter.autoRespondSha;
								next.ai = function (card) {
									if (trigger.target.countCards('h', 'sha') > 1) {
										return ai.get.unuseful2(card);
										trigger.untrigger();
										trigger.finish();
									}
									return -1;
								};
								('step 1');
								if (result.bool == false) {
									trigger.untrigger();
									trigger.directHit = true;
									event.finish();
									return;
								}
								('step 2');
								var next = trigger.target.chooseToRespond({
									name: 'sha',
								});
								next.autochoose = lib.filter.autoRespondSha;
								next.ai = function (card) {
									if (trigger.target.countCards('h', 'sha') > 0) {
										return ai.get.unuseful2(card);
									}
									return -1;
								};
								('step 3');
								if (result.bool == false) {
									trigger.untrigger();
									trigger.directHit = true;
								} else {
									trigger.trigger('shaMiss');
									trigger.finish();
									trigger.result = {
										bool: false,
									};
									trigger.trigger('shaUnhirt');
								}
							},
						},
						wang_lvbu_wushuang2: {
							audio: 'ext:蒸蒸日上/audio:4',
							trigger: {
								player: 'useCardToPlayered',
								target: 'useCardToTargeted',
							},
							forced: true,
							logTarget(trigger, player) {
								return player == trigger.player ? trigger.target : trigger.player;
							},
							filter(event, player) {
								return event.card.name == 'juedou';
							},
							content() {
								var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
								var idt = trigger.target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[idt]) map[idt] = {};
								if (!map[idt].shaReq) map[idt].shaReq = {};
								if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
								map[idt].shaReq[id]++;
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if ((arg && arg.card.name != 'juedou') || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
								},
							},
						},
						wang_lvbu_tianwei: {
							trigger: {
								player: 'turnOverBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							_priority: 20,
							forced: true,
							filter(event, player) {
								return !player.isTurnedOver();
							},
							content() {
								trigger.cancel();
								game.log(player, '取消了翻面');
							},
							ai: {
								noturn: true,
							},
							group: 'wang_lvbu_tianwei2',
						},
						wang_lvbu_tianwei2: {
							trigger: {
								player: 'phaseBefore',
							},
							nopop: true,
							forced: true,
							content() {
								player.lockOut = true;
							},
						},
						wang_lvbu_fanfu: {
							mark: true,
							init(player) {
								player.storage.wang_lvbu_fanfu = 0;
							},
							trigger: {
								player: 'damageEnd',
							},
							audio: 'ext:蒸蒸日上/audio:4',
							filter(event, player) {
								return event.source != undefined;
							},
							check(event, player) {
								return get.attitude(player, event.source) <= 0;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) != 'black') return -2;
									return 2;
								});
								('step 1');
								if (result.judge < 2) {
									event.finish();
									return;
								}
								player.storage.wang_lvbu_fanfu++;
								('step 2');
								var next = trigger.source.chooseToRespond({
									name: 'shan',
								});
								next.autochoose = lib.filter.autoRespondShan;
								next.ai = function (card) {
									if (trigger.source.countCards('h', 'shan') > player.storage.wang_lvbu_fanfu) {
										return ai.get.unuseful2(card);
									}
									return -1;
								};
								('step 3');
								if (result.bool == false) {
									player.storage.wang_lvbu_fanfu = 0;
									trigger.source.damage();
									event.finish();
									return;
								}
								if (player.storage.wang_lvbu_fanfu > 0) {
									player.storage.wang_lvbu_fanfu--;
									event.goto(2);
								}
							},
							ai: {
								result: {
									target(card, player, target) {
										if (player.skills.includes('jueqing')) return [1, -1];
										if (get.tag(card, 'damage') && get.damageEffect(target, player, player) > 0) return [1, 0, 0, -1.5];
									},
								},
							},
						},
						wang_lvbuStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['wang_lvbuStatus2'],
						},
						wang_lvbuStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						wang_lvbu_shashen: {
							trigger: {
								player: 'shaBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() { },
							mod: {
								selectTarget(card, player, range) {
									if (card.name == 'sha' && player.hp <= Math.round(player.maxHp / 2)) range[1] += 3;
								},
							},
						},
						wang_lvbu_huitian: {
							audio: 'ext:蒸蒸日上/audio:4',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
						},
						xian_machao_yuanjun: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						xian_machao_qidun: {
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
							},
						},
						xian_machao_tianwei: {
							trigger: {
								player: ['turnOverBefore', 'linkBefore'],
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							content() {
								trigger.finish();
								trigger.untrigger();
							},
							ai: {
								noturn: true,
								nolink: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'turnOver') || get.tag(card, 'link')) return [0, 0];
									},
								},
							},
						},
						xian_machao_tiedan: {
							trigger: {
								player: 'shaMiss',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							content() {
								'step 0';
								if (player.skills.includes('jiu')) {
									player.removeSkill('jiu');
									if (player.node.jiu) {
										player.node.jiu.delete();
										player.node.jiu2.delete();
										delete player.node.jiu;
										delete player.node.jiu2;
									}
									event.jiu = true;
								}
								player.chooseToUse(
									'是否发动铁胆？',
									{
										name: 'sha',
									},
									trigger.target,
									-1
								);
								('step 1');
								if (result.bool) {
								} else if (event.jiu) {
									player.addSkill('jiu');
								}
							},
						},
						xian_machao_poji: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card && get.color(event.card) == 'red';
							},
							content() {
								trigger.directHit = true;
							},
							group: ['xian_machao_poji2'],
						},
						xian_machao_poji2: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								if (event.card && event.card.name == 'sha' && event.card.suit == 'spade') return true;
								return false;
							},
							forced: true,
							content() {
								trigger.num++;
							},
						},
						xian_machao_yuling: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source.countCards('h');
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								if (num == 0 || trigger.source.countCards('h') == 0) {
									event.finish();
									return;
								}
								event.num--;
								player.choosePlayerCard('是否对' + get.translation(trigger.source) + '发动【玉灵】？', trigger.source, ai.get.buttonValue, 'h');
								('step 2');
								if (result.bool) {
									player.gain(result.buttons[0].link);
									trigger.source.$give(1, player);
									event.goto(1);
								}
							},
							ai: {
								result: {
									target(card, player, target) {
										if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
											if (player.skills.includes('jueqing')) return [1, -1.5];
											if (get.attitude(target, player) < 0) return [1, 1];
										}
									},
								},
							},
						},
						xian_machaoStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['xian_machaoStatus2'],
						},
						xian_machaoStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						xian_machao_langzhao: {
							mod: {
								globalFrom(from, to, current) {
									if (from.hp <= 4) return current - 1;
								},
								globalTo(from, to, current) {
									if (to.hp <= 4) return current + 1;
								},
							},
							ai: {
								threaten: 0.8,
							},
						},
						xian_machao_huitian: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
						},
						xian_taishici_yuanjun: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						xian_taishici_qidun: {
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
							},
						},
						xian_taishici_tianwei: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: ['turnOverBefore', 'linkBefore'],
							},
							forced: true,
							content() {
								trigger.finish();
								trigger.untrigger();
							},
							ai: {
								noturn: true,
								nolink: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'turnOver') || get.tag(card, 'link')) return [0, 0];
									},
								},
							},
						},
						xian_taishici_tianlei: {
							init(player) {
								player.storage.xian_taishici_tianlei = 0;
							},
							audio: 'ext:蒸蒸日上/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player && target.countCards('h') > 0;
							},
							selectTarget: -1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							multitarget: true,
							multiline: true,
							content() {
								'step 0';
								player.chooseToCompare(targets).callback = lib.skill.xian_taishici_tianlei.callback;
								('step 1');
								if (player.storage.xian_taishici_tianlei >= 2) {
									player.addTempSkill('xian_taishici_tianlei2', 'phaseEnd');
								}
								if (player.storage.xian_taishici_tianlei < 2) {
									player.chooseToDiscard('he', 2, true);
								}
								('step 2');
								player.storage.xian_taishici_tianlei = 0;
							},
							callback() {
								event.num1 = event.num1;
								event.num2 = event.num2;
								if (event.num1 > event.num2) {
									player.storage.xian_taishici_tianlei++;
								}
							},
							ai: {
								order: 10,
								result: {
									player(player, target) {
										var num = 0,
											num2 = 0;
										for (var i of game.players) {
											if (i != player && get.attitude(player, i) <= 0 && i.countCards('h')) num++;
											if (i != player && get.attitude(player, i) > 0 && i.countCards('h')) num2++;
										}
										if (num + num2 < 2 || num2 - num > 1 || (num == 0 && num2 <= 2)) return 0;
										return 1;
									},
								},
							},
						},
						xian_taishici_tianlei2: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							forced: true,
							content() {
								trigger.num++;
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return (num += 1);
								},
							},
						},
						xian_taishici_yiji: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return (
									event.source &&
									player.countCards('h', {
										color: 'red',
									}) &&
									!event.source.isDead()
								);
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								if (num == 0) {
									event.finish();
									return;
								}
								event.num--;
								player.chooseToDiscard('是否对' + get.translation(trigger.source) + '发动【义击】？', 'h', {
									color: 'red',
								}).ai = function (card) {
									if (get.attitude(player, trigger.source) <= 0) return 7 - get.value(card);
									return -1;
								};
								('step 2');
								if (result.bool) {
									trigger.source.loseHp();
									event.goto(1);
								}
							},
						},
						xian_taishiciStatus: {
							init(player) {
								player.node.name.dataset.nature = 'fire';
								player.setIdentity('仙');
								player.node.identity.dataset.color = 'shu';
							},
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
								player.node.identity.dataset.color = 'shu';
								player.node.name.dataset.nature = 'fire';
							},
							group: ['xian_taishiciStatus2'],
						},
						xian_taishiciStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						xian_taishici_zhenyuan: {
							mark: true,
							init(player) {
								player.storage.xian_taishici_zhenyuan = 0;
							},
							trigger: {
								source: 'damageEnd',
							},
							audio: 'ext:蒸蒸日上/audio:1',
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2) && event.num > 0 && player.storage.xian_taishici_zhenyuan4 != 0;
							},
							content() {
								player.storage.xian_taishici_zhenyuan += trigger.num;
								player.update();
								ui.clear();
							},
							group: ['xian_taishici_zhenyuan2', 'xian_taishici_zhenyuan3', 'xian_taishici_zhenyuan4'],
						},
						xian_taishici_zhenyuan2: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha' && player.hp <= Math.round(player.maxHp / 2)) return num + player.storage.xian_taishici_zhenyuan;
								},
							},
						},
						xian_taishici_zhenyuan3: {
							trigger: {
								player: 'phaseUseEnd',
							},
							forced: true,
							_priority: -Infinity,
							popup: false,
							content() {
								player.storage.xian_taishici_zhenyuan = 0;
								player.storage.xian_taishici_zhenyuan4 = 0;
								player.update();
								ui.clear();
							},
						},
						xian_taishici_zhenyuan4: {
							mark: true,
							init(player) {
								player.storage.xian_taishici_zhenyuan4 = 1;
							},
							trigger: {
								player: ['phaseUseBefore'],
								global: ['gameStart'],
							},//QQQ
							forced: true,
							_priority: 999,
							popup: false,
							content() {
								player.storage.xian_taishici_zhenyuan4 += 2;
								player.update();
								ui.clear();
							},
						},
						xian_taishici_huitian: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
						},
						xian_zhenji_yuanjun: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						xian_zhenji_qidun: {
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
							},
						},
						xian_zhenji_tianwei: {
							trigger: {
								player: ['turnOverBefore', 'linkBefore'],
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							content() {
								trigger.finish();
								trigger.untrigger();
							},
						},
						xian_zhenji_qinghuai: {
							trigger: {
								player: 'respondBefore',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return event.card.name == 'shan';
							},
							forced: true,
							content() {
								player.chooseToUse(
									{
										name: 'sha',
									},
									'倾怀:是否对攻击范围内的一名目标使用一张杀',
									target
								);
							},
						},
						xian_zhenji_qingxin: {
							trigger: {
								player: 'phaseEnd',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							filter(event, player) {
								if (player.getHistory('skipped').includes('phaseUse')) return true;
								var history = player.getHistory('useCard').concat(player.getHistory('respond'));
								for (var i = 0; i < history.length; i++) {
									if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
								}
								return true;
							},
							content() {
								'step 0';
								var check;
								var i,
									num = 0;
								for (var i of game.players) {
									//QQQ
									if (player != i) {
										if (get.attitude(player, i) <= 0 && i.countCards('he')) num++;
									}
								}
								check = num >= 1;
								player.chooseTarget(
									'是否发动【倾心】？',
									[1, 2],
									function (card, player, target) {
										return target.countCards('he') > 0 && player != target;
									},
									function (target) {
										if (!check) return 0;
										return 1 - get.attitude(_status.event.player, target);
									}
								);
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										player.gainPlayerCard('he', result.targets[i]);
									}
								}
								('step 2');
								if (result.bool) game.delay();
							},
							ai: {
								threaten: 2,
								expose: 0.3,
							},
						},
						xian_zhenjiStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['xian_zhenjiStatus2'],
						},
						xian_zhenjiStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						xian_zhenji_mushen: {
							group: ['xian_zhenji_mushen2'],
							trigger: {
								target: 'shaBefore',
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return event.card.name == 'sha' && get.color(event.card) == 'red' && player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player) {
										if (card.name == 'sha' && get.color(card) == 'red') return 'zerotarget';
									},
								},
							},
						},
						xian_zhenji_mushen2: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'discardAfter',
							},
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQQ
										if ((i.suit == 'heart' && get.position(i) == 'd' && player.hp <= Math.round(player.maxHp / 2)) || (i.suit == 'spade' && get.position(i) == 'd' && player.hp <= Math.round(player.maxHp / 2))) {
											return true;
										}
									}
								return false;
							},
							frequent: 'check',
							check(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQQ
										if ((i.suit == 'heart' && get.position(i) == 'd' && player.hp <= Math.round(player.maxHp / 2)) || (i.suit == 'spade' && get.position(i) == 'd' && player.hp <= Math.round(player.maxHp / 2))) {
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
									if ((trigger.cards[i].suit == 'heart' && get.position(trigger.cards[i]) == 'd') || (trigger.cards[i].suit == 'spade' && get.position(trigger.cards[i]) == 'd')) {
										cards.push(trigger.cards[i]);
									}
								}
								if (cards.length) {
									player.gain(cards);
									player.$gain2(cards);
									game.log(player, '发动暮神,获得了', cards);
								}
							},
						},
						xian_zhenji_huitian: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
						},
						xian_zhouyu_yuanjun: {
							audio: 'reyingzi',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						xian_zhouyu_qidun: {
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
							},
						},
						xian_zhouyu_tianwei: {
							trigger: {
								player: ['turnOverBefore', 'linkBefore'],
							},
							forced: true,
							content() {
								trigger.finish();
								trigger.untrigger();
							},
						},
						xian_zhouyu_poji: {
							audio: 'ext:蒸蒸日上/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								target.chooseControl('heart2', 'diamond2', 'club2', 'spade2').ai = function (event) {
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
								};
								('step 1');
								game.log(target, '选择了' + get.translation(result.control));
								event.choice = result.control;
								target.popup(event.choice);
								event.card = player.getCards('h').randomGet();
								target.gain(event.card);
								player.$give(event.card, target);
								('step 2');
								if (event.card.suit + '2' != event.choice) target.damage('fire', 1);
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (target.hasSkillTag('nofire')) return 0;
										var value = 0,
											i;
										var cards = player.getCards('h');
										for (var i = 0; i < cards.length; i++) {
											value += get.value(cards[i]);
										}
										value /= player.countCards('h');
										if (target.hp == 1) return Math.min(0, value - 7);
										return Math.min(0, value - 5);
									},
								},
							},
						},
						xian_zhouyu_lianhun: {
							forced: true,
							group: ['xian_zhouyu_lianhun2', 'xian_zhouyu_lianhun3'],
						},
						xian_zhouyu_lianhun2: {
							audio: 'ext:蒸蒸日上/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return (
									player.countCards('h', {
										suit: 'club',
									}) > 0
								);
							},
							filterCard(card) {
								return card.suit == 'club';
							},
							viewAs: {
								name: 'tiesuo',
							},
							prompt: '将一张♣️️牌当铁锁连环使用',
							check(card) {
								return 4 - get.value(card);
							},
						},
						xian_zhouyu_lianhun3: {
							audio: 'ext:蒸蒸日上/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return (
									player.countCards('h', {
										suit: 'club',
									}) > 0
								);
							},
							filterCard(card) {
								return card.suit == 'club';
							},
							check(card) {
								return 5 - ai.get.useful(card);
							},
							content() {
								player.draw();
							},
						},
						xian_zhouyuStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['xian_zhouyuStatus2'],
						},
						xian_zhouyuStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						xian_zhouyu_yuhun: {
							trigger: {
								target: 'shaBefore',
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:1',
							filter(event, player) {
								return event.card.name == 'sha' && get.color(event.card) == 'black' && player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player) {
										if (card.name == 'sha' && get.color(card) == 'black') return 'zerotarget';
									},
								},
							},
							mod: {
								targetEnabled(card, player, target, now) {
									if ((get.type(card) == 'trick' && card.suit == 'club' && target.hp <= Math.round(target.maxHp / 2)) || (get.type(card) == 'trick' && card.suit == 'spade' && target.hp <= Math.round(target.maxHp / 2))) return false;
								},
							},
						},
						xian_zhouyu_huitian: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
						},
						xian_zhugeke_tianbing: {
							audio: 'duwu',
							trigger: {
								player: 'phaseDrawBegin',
							},
							content() {
								trigger.num += 3;
							},
						},
						xian_zhugeke_qidun: {
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
							},
						},
						xian_zhugeke_tianwei: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								player: ['turnOverBefore', 'linkBefore'],
							},
							forced: true,
							content() {
								trigger.finish();
								trigger.untrigger();
							},
						},
						xian_zhugeke_shenzhi: {
							enable: 'phaseUse',
							audio: 'ext:蒸蒸日上/audio:2',
							position: 'h',
							filterCard: true,
							selectCard: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							check(card) {
								if (
									(get.color(card) == 'black' &&
										game.countPlayer(function (current) {
											return !current.countCards('h', {
												color: 'black',
											});
										}) >=
										game.countPlayer(function (current) {
											return !current.countCards('h', {
												color: 'ted',
											});
										})) ||
									(get.color(card) == 'red' &&
										game.countPlayer(function (current) {
											return !current.countCards('h', {
												color: 'red',
											});
										}) >=
										game.countPlayer(function (current) {
											return !current.countCards('h', {
												color: 'black',
											});
										}))
								)
									return 20 - get.value(card);
								return 0;
							},
							selectTarget: -1,
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								target
									.chooseCard('展示一张相同颜色的手牌,或者受到一点伤害.', function (card) {
										return get.color(card) == get.color(cards[0]);
									})
									.set('ai', function (card) {
										if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
											return 20 - get.value(card);
										} else {
											return 20 - get.value(card);
										}
									});
								('step 1');
								if (result.bool) {
									target.showCards(result.cards[0]);
								} else {
									target.damage();
								}
							},
							ai: {
								order: 10,
								result: {
									player(player, target, card) {
										var num = 0;
										for (var i of game.players) {
											if (i != player) {
												if (
													(!i.countCards('h', {
														color: 'red',
													}) &&
														player.countCards('h', {
															color: 'red',
														})) ||
													(!i.countCards('h', {
														color: 'black',
													}) &&
														player.countCards('h', {
															color: 'black',
														}))
												)
													num -= get.damageEffect(i, player, i);
											}
										}
										return num;
									},
								},
								threaten: 1.5,
							},
						},
						xian_zhugeke_huling: {
							init(player) {
								player.storage.xian_zhugeke_huling = 0;
							},
							trigger: {
								player: 'damageAfter',
							},
							forced: true,
							content() {
								'step 0';
								player.storage.xian_zhugeke_huling += trigger.num;
								('step 1');
								if (player.storage.xian_zhugeke_huling <= 0) {
									player.storage.xian_zhugeke_huling = 0;
									event.finish();
									return;
								}
								player
									.chooseTarget(function (card, player, target) {
										return true;
									}, '【护灵】<br><br><div class="text center">令一名角色选择一项:1.交给你一张♥️️牌;2.弃两张牌')
									.set('ai', function (target) {
										var nhe = target.countCards('he');
										var player = _status.event.player;
										if (get.attitude(_status.event.player, target) > 0 || player == target) return -1;
										if (get.attitude(_status.event.player, target) <= 0 && nhe < 2 && !target.hasSkillTag('noh')) return 1;
										if (get.attitude(_status.event.player, target) <= 0 && nhe >= 2 && nhe < 6 && !target.hasSkillTag('noh')) return 7 - nhe;
										if (get.attitude(_status.event.player, target) <= 0 && nhe >= 7 && !target.hasSkillTag('noh')) return 0.5;
										return 0.25;
									});
								('step 2');
								if (result.bool == false) {
									player.storage.xian_zhugeke_huling = 0;
									event.finish();
									return;
								}
								var target = result.targets[0];
								event.target = target;
								player.line(target, 'green');
								target
									.chooseCard('【护灵】<br><br><div class="text center">交给' + get.translation(player) + '一张♥️️牌,或弃两张牌', function (card, player, target) {
										return card.suit == 'heart';
									})
									.set('ai', function (card) {
										if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
											return 11 - get.value(card);
										}
										if (get.attitude(_status.event.player, _status.event.parent.player) <= 0) {
											return 6 - get.value(card);
										}
									});
								('step 3');
								var target = event.target;
								if (result.bool) {
									player.gain(result.cards);
									target.$give(result.cards, player);
								} else {
									target.chooseToDiscard('he', 2, true);
								}
								('step 4');
								if (player.storage.xian_zhugeke_huling > 0) {
									player.storage.xian_zhugeke_huling--;
									event.goto(1);
								}
							},
							ai: {
								maixie: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.skills.includes('jueqing')) return [1, -2];
											if (!target.hasFriend()) return;
											if (target.hp >= 4) return [1, get.tag(card, 'damage') * 2];
											if (target.hp == 3) return [1, get.tag(card, 'damage') * 1.5];
											if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
										}
									},
								},
							},
						},
						xian_zhugekeStatus: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 999,
							silent: true,
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								game.updateboss(player);
								if (lib.config.mode == 'guozhan') {
									if (player.identity == 'wang') {
										player.node.identity.dataset.color = 'zhu';
									} else {
										player.node.identity.dataset.color = 'nei';
									}
									player.showCharacter(2);
								}
							},
							group: ['xian_zhugekeStatus2'],
						},
						xian_zhugekeStatus2: {
							mode: ['boss'],
							trigger: {
								player: 'dieBefore',
								global: 'gameDrawAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							_priority: 999,
							content() {
								if (trigger.name == 'gameDraw') {
									player.gain(get.cards(8))._triggered = null;
								} else {
									if (player.maxHp < 1 || player.hp > 0) {
										trigger.cancel();
										player.kangxing2();
									}
								}
								player.kangxing();
							},
							ai: {
								noturn: true,
								threaten: 9,
							},
						},
						xian_zhugeke_yanwu: {
							init(player) {
								player.storage.xian_zhugeke_yanwu = 0;
							},
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:1',
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQQ
										if (i.original == 'e' && player.hp <= Math.round(player.maxHp / 2)) return true;
									}
								return false;
							},
							content() {
								'step 0';
								var num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].original == 'e') num++;
								}
								player.storage.xian_zhugeke_yanwu += num;
								('step 1');
								if (player.storage.xian_zhugeke_yanwu == 0 || player.hp > 3) {
									player.storage.xian_zhugeke_yanwu = 0;
									event.finish();
									return;
								}
								('step 2');
								player.chooseTarget('【焰舞】是否视为对任意一名角色使用火攻？', function (card, player, target) {
									if (target.countCards('h') <= 0) return false;
									return player.canUse(
										{
											name: 'huogong',
										},
										target
									);
								}).ai = function (target) {
									return ai.get.effect(
										target,
										{
											name: 'huogong',
										},
										player
									);
								};
								('step 3');
								if (result.bool) {
									player.storage.xian_zhugeke_yanwu--;
									player.useCard(
										{
											name: 'huogong',
										},
										result.targets[0],
										false
									);
								}
								if (result.bool == false) {
									player.storage.xian_zhugeke_yanwu = 0;
								}
								('step 4');
								if (player.storage.xian_zhugeke_yanwu >= 0) {
									event.goto(1);
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return 1;
									},
								},
							},
						},
						xian_zhugeke_fuxing: {
							audio: 'ext:蒸蒸日上/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filterCard: true,
							position: 'he',
							selectCard: 2,
							check(card) {
								if (get.tag(card, 'recover') >= 1) return 0;
								return 7 - get.value(card);
							},
							filter(event, player) {
								return player.hp <= Math.round(player.maxHp / 2);
							},
							content() {
								player.recover();
							},
							ai: {
								result: {
									player(player) {
										return ai.get.recoverEffect(player);
									},
								},
								order: 2.5,
							},
						},
					},
					translate: {
						yao_guanlu: '妖管辂',
						//妖管辂
						yao_guanlu_zhouyi: '周易',
						yao_guanlu_zhouyi_info: '<span class="bluetext" style="color: #EE0000">奋发技</span>,回合开始阶段,若你的手牌数大于你的当前体力值,你可以将超出的手牌交给一名其他角色,你摸以此法给出的一半牌(若以此法给出的牌为单数,则向上取整数);若你的手牌数小于你的当前体力值,你可以从手牌数量最多或之一的一名角色处获得X张牌,X为你当前体力与你手牌数的差,如果X大于2则亮出牌顶堆的一张牌若为♥️️其回复一点体力;若你的手牌数等于你的当前体力值,你可选择任意一名角色,你选择一项,你令其回复一点体力并弃置其装备区和判禁区的一张牌或令其失去一点体力并令其获得其下家的一张手牌.',
						yao_guanlu_guayao: '卦爻',
						yao_guanlu_guayao_qian: '开',
						yao_guanlu_guayao_kan: '休',
						yao_guanlu_guayao_gen: '生',
						yao_guanlu_guayao_zhen: '伤',
						yao_guanlu_guayao_xun: '杜',
						yao_guanlu_guayao_li: '景',
						yao_guanlu_guayao_kun: '死',
						yao_guanlu_guayao_dui: '惊',
						yao_guanlu_guayao_info: '<span class="bluetext" style="color: #EE0000">奋发技</span>,出牌阶段限一次,如果当前存活人数不大于8,你可以摸8张牌并展示并将其中的牌从你开始逆时针每人给一张,获得这些牌的其他角色不能使用、打出这张牌,分完之后你弃置你8减分出牌数量的手牌,分到牌的角色按照牌的点数获得以下效果直到你下个回合开始:<br>点数为1:<乾>其他角色使用一张武器牌、防具牌或宝物牌后你摸一张牌;你下家回合开始时,你弃置手牌区中的武器牌、防具牌和宝物牌,摸等量的牌;你的手牌上限加你手牌中的装备牌数量.<br>点数为2:<坎>你受到的属性伤害减1,当你因此受到零点伤害时来源与你各摸一张牌.<br>点数为3:<艮>你进入濒死阶段时,你从弃牌堆随机获得一张【桃】或【毒桃】.<br>点数为4:<震>任何角色的回合开始时,展示牌顶对一张牌,若为♠️️你受到一无来源的毒属性伤害.<br>点数为5:<巽>你的回合开始时判定一次,若为单数,你计算以其他角色距离减判定点数.若为双数,你计算以他角色的距离加判定点数.<br>点数为6:<離>你造成伤害时,若伤害不为火属性,则将伤害转化为火属性你受到一点来源为你的火属性伤害.<br>点数为7:<坤>你受到伤害时,防止此伤害你立即进入濒死阶段,若你的体力上限大于零则失去一点体力上限和一点体力.<br>点数为8:<兌>任何角色出牌阶段开始时,你必须进入一个额外的弃牌阶段.',
						upgrade_Smallkill: '阴间小杀',
						upgradeMo_sunquan: '魔孙权',
						upgradeMo_jiaxu: '魔贾诩',
						wang_caiwenji: '王蔡文姬',
						wang_diaochan: '王貂蝉',
						wang_huaxiong: '王华雄',
						wang_panfeng: '王潘凤',
						wang_huatuo: '王华佗',
						wang_liaohua: '王廖化',
						wang_liru: '王李儒',
						wang_lvbu: '王吕布',
						xian_machao: '仙马超',
						xian_taishici: '仙太史慈',
						xian_zhenji: '仙甄姬',
						xian_zhouyu: '仙周瑜',
						xian_zhugeke: '仙诸葛恪',
						xian_zhangliao: '仙张辽',
						xian_fuhuanghou: '仙伏皇后',
						xian_daxiaoqiao: '仙大小乔',
						//魔孙权
						upgradeMo_huchen: '虎臣',
						upgradeMo_huchen_info: '锁定技,游戏开始时,召唤出未上场的随机三个吴国男性武将作为你的随从(若你为玩家控制,则反向条件召唤+1.你选择获得未上场的一名吴势力武将的技能),AI控制时,你跳过第一回合的摸牌、出牌和弃牌阶段.',
						upgradeMo_duanshi: '断石',
						upgradeMo_duanshi_info: '锁定技,当你对其他角色造成伤害时,若其护甲值不小于1,其失去所有护甲.',
						upgradeMo_mingzheng: '明政',
						upgradeMo_mingzheng_info: '锁定技,所有角色于其摸牌阶段时额外摸一张牌,若其手牌或体力值为全场最少之一,则改为额外摸两张牌.',
						upgradeMo_shiwan: '十万',
						upgradeMo_shiwan_info: '锁定技,每回合前两次受到伤害后,伤害来源摸一张牌并获得你的一张牌,若你没有牌,其摸两张牌且你失去1点体力.你弃置两张手牌.',
						upgradeMo_shenfeng: '神凤',
						upgradeMo_shenfeng_info: '锁定技,当你即将死亡时,若当前游戏轮数小于71(玩家控制则改为7),你不会死亡,若你体力低于游戏轮数的负值,你回复体力至游戏轮数的负值并摸一张牌.',
						upgradeMo_quanshu: '权术',
						upgradeMo_quanshu_info: '出牌阶段限三次,你可以弃置任意张牌,摸等量的牌,若你因此弃置了所有手牌,你获得1点护甲;锁定技,当你失去最后一张手牌时,你摸X张牌(X为存活势力数,若在你的回合外,X改为存活势力数+1),每回合限三次;锁定技,若你装备区里牌数为全场最多,你于回合内使用卡牌无距离限制;锁定技,出牌阶段,你可以多使用X张【杀】和【酒】;锁定技,你的手牌上限至少为X;锁定技,你不受翻面和延时锦囊的影响.',
						upgradeMo_jiangshang: '奖赏',
						upgradeMo_jiangshang_info: '锁定技,当一名角色死亡后,击杀其的角色回复1点体力并摸三张牌.',
						//魔贾诩
						upgradeMo_zhiluan: '智乱',
						upgradeMo_zhiluan_changeHp: '毒士',
						upgradeMo_zhiluan_useCard: '唆乱',
						upgradeMo_zhiluan_die: '帷幕',
						upgradeMo_zhiluan_judge: '圆滑',
						upgradeMo_zhiluan_discard: '诡谋',
						upgradeMo_zhiluan_dying: '天算',
						upgradeMo_zhiluan_turnOver: '灵活',
						upgradeMo_zhiluan_loseMaxHp: '灵活',
						upgradeMo_zhiluan_draw: '极智',
						upgradeMo_zhiluan_phaseStart: '顺势',
						upgradeMo_zhiluan_info: '锁定技,你拥有以下技能效果:<br/>顺势:回合开始阶段,全场角色各回复1点体力并摸一张牌<br/>圆滑:准备阶段,你随机弃置你判定区里的一张牌<br/>灵活:当你失去体力上限/被翻面时,你取消之<br/>唆乱:当你使用非转化锦囊牌后,若为红色,你视为发动技能【焚城】,否则你视为发动技能【乱武】(以此法发动技能期间其他角色技能失效直到【焚城】/【乱武】结算后)每回合限2次<br/>帷幕:当你即将死亡时,若场上有角色未翻面/牌数大于0/判定区里没有【闪电】/你体力值不小于1/你体力上限小于1,防止之并回复体力至体力上限的一半向下取整,你将手牌补至8张<br/>诡谋:当其他角色使用锦囊牌后,其随机弃置其一张牌<br/>天算:当你进入濒死状态/其他角色死亡时,你永久获得1枚<智乱>标记;你登场后体力/体力上限+X/7(向下取整且不超过18)<br/>毒士:其他角色受到的伤害/失去的体力/失去的体力上限+X［触发概率:游戏轮数/X,且不超过33.333%］<br/>奇智:摸牌阶段开始时,你多摸X/7张牌(向下取整且不超过6),你可多使用X/15张【杀】(向下取整且不超过5),你的手牌上限为(X/9)+6(向下取整且不超过15),你计算与其他角色的距离-X/5;其他角色计算与你的距离+X/19(向下取整且不超过2),X为<智乱>标记数〖可在游戏中点击标记查看实时效果〗.',
						//小杀
						Ordinary_EvilspiritTransform: '瑰姿',
						Ordinary_EvilspiritTransform_info: '锁定技,你初始手牌+2;回合开始前/游戏开始时,你随机获得X个描述里带有<杀>字的技能(X为场上存活势力数+场上存活角色体力上限/5,四舍五入取整且不超过15),每局游戏限一次;摸牌阶段开始时,你额外摸Y张牌,你的手牌上限+Y(Y为游戏轮数/3,向下取整且不超过7);武将牌正面向上被翻面/回合开始时,50%概率防止之/50%概率随机弃置判定区里的一张牌.',
						EvilspiritTransform: '阴兵',
						EvilspiritTransform_info: '挑战技,当你死亡时,存活角色各摸一张牌并回复1点体力,若场下有未曾上登场且未记录在<阴兵>的武将,你随机替换你的武将并记录在<阴兵>至于武将牌上,立即立即开始你的回合.准备阶段开始时,50/60/70%概率[等阶特权]你随机弃置判定区里的一张牌;当你武将牌正面被翻面/失去体力上限时,50/60/70%概率[等阶特权]防止之;你体力/体力上限+0/+1/+2[等阶特权]+X/16(除去等阶加成最多为15);摸牌阶段开始时,你多摸X/18张牌(最多为7);你造成的伤害+X/32;你回复的体力+X/54;计算与其他的角色距离-8/X;你使用杀的次数+X/28〈X为<阴兵>数〉;你使用【杀】、【决斗】、【过河拆桥】的目标数+1/2/3(对应条件<阴兵>数:32~48/49~71/>71);游戏开局后,你随机获得X个描述里带有<【杀】>字的技能(X为场上存活势力数+场上存活角色体力上限/4,四舍五入取整至少为8且不超过25).〈获胜条件〉BOSS:游戏轮数超过999;挑战者:BOSS死亡,存活角色牌数不大于1、被横置、体力不大于1、判定区有牌',
						//王华佗
						wang_huatuo_miaoshou: '妙手',
						wang_huatuo_miaoshou_info: '锁定技,你每次最多受到2点伤害和失去2点体力.',
						wang_huatuo_tianwei: '天威',
						wang_huatuo_tianwei2: '天威',
						wang_huatuo_tianwei_info: '锁定技,武将不会被翻面或移除游戏.',
						wang_huatuo_qidun: '奇遁',
						wang_huatuo_qidun_info: '锁定技,不受延时锦囊和【铁索连环】影响.',
						wang_huatuo_huichun: '回春',
						wang_huatuo_huichun_info: '锁定技,当你于游戏轮数为偶数进入濒死状态时,你回复3点体力并摸三张牌.',
						wang_huatuo_shenyi: '神医',
						wang_huatuo_shenyi_bg: '医',
						wang_huatuo_shenyi_info: '锁定技〈68%触发概率,若你体力值小于3,改为78%触发概率〉,每当一名角色回合开始/出牌开始/出牌结束/弃牌开始/回合结束/受到伤害/回复体力/失去体力/牌堆摸牌/使用牌/进行判定/装备区置入牌时,你获得1枚<医>标记,若<医>标记为3的倍数,你回复1点体力且不触发技能;若<医>为6的倍数,你摸一张牌;若<医>为18的倍数,所有其他角色随机弃置一张牌且你获得技能<急救>直到回合结束;若<医>为36的倍数,所有其他角色非锁定技失效到回合结束并失去1点体力;若<医>数量不小于72,所有其他角色失去1点体力上限(体力上限不大于4的角色不受影响)且进入混乱状态直到回合结束,你失去所有的<医>标记.',
						//仙大小乔
						xian_daxiaoqiao_tianzi: '天姿',
						xian_daxiaoqiao_tianzi_info: '摸牌阶段,你可以多摸随机2~5张牌.',
						xian_daxiaoqiao_jueyan: '绝艳',
						xian_daxiaoqiao_jueyan_info: '锁定技,游戏开始时你随机获得四个未上场吴势力的女性角色武将牌上的技能.',
						xian_daxiaoqiao_erqiao: '二乔',
						xian_daxiaoqiao_erqiao_info: '当你使用非延时锦囊或【桃】/【杀】后,你可以令此牌额外结算一次.',
						xian_daxiaoqiao_xiyu: '惜玉',
						xian_daxiaoqiao_xiyu_info: '锁定技,当你受到伤害或失去体力后,若你体力或手牌不为全场最多,你于此回合内免疫所有伤害且不能被牌指定为目标,否则你获得1点护甲,每回合限一次.锁定技,你每次最多受到2点伤害.',
						xian_daxiaoqiao_qidun: '奇遁',
						xian_daxiaoqiao_qidun_info: '锁定技,不受延时锦囊和【铁索连环】影响.',
						xian_daxiaoqiao_tianwei: '天威',
						xian_daxiaoqiao_tianwei2: '天威',
						xian_daxiaoqiao_tianwei_info: '锁定技,武将不会被翻面或移除游戏.',
						xian_daxiaoqiao_xianglian: '相怜',
						xian_daxiaoqiao_xianglian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,你获得技能:英姿、反间、激昂和英魂.',
						xian_daxiaoqiao_huitian: '回天',
						xian_daxiaoqiao_huitian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,回复一点体力.',
						//仙伏皇后
						xian_fuhuanghou_fengzi: '凤姿',
						xian_fuhuanghou_fengzi_info: '锁定技,开始阶段和结束阶段,你摸一张牌.锁定技,你的摸牌数+1.',
						xian_fuhuanghou_liugong: '六宫',
						xian_fuhuanghou_liugong_info: '锁定技,你使用牌指定目标后,若其为非男性角色,其无法使用牌响应之.',
						xian_fuhuanghou_mimou: '密谋',
						xian_fuhuanghou_mimou_info: '锁定技,准备阶段开始时,你随机弃置两张手牌,你随机获得一个未上场群雄势力武将的所有技能直到回合结束.',
						xian_fuhuanghou_qingping: '清平',
						xian_fuhuanghou_qingping_info: '锁定技,一名角色出牌阶段开始时,所有牌数大于3的其他角色将牌弃置至三张牌,若不在你的回合内,所有其他角色非锁定技失效到回合结束.',
						xian_fuhuanghou_wuyi: '毋仪',
						xian_fuhuanghou_wuyi_info: '锁定技,你于回合外不能成为黑色牌的目标.锁定技,当你成为♥️️牌的目标时,你回复1点体力;锁定技,当你对其他角色造成伤害后,其摸一张牌,若其没有手牌,改为其摸两张牌,其可以使用一张【桃】.',
						xian_fuhuanghou_qidun: '奇遁',
						xian_fuhuanghou_qidun_info: '锁定技,不受延时锦囊和【铁索连环】影响.',
						xian_fuhuanghou_aiyuan: '哀怨',
						xian_fuhuanghou_aiyuan_info: '锁定技,一名角色回合开始或你体力变化时,若你的体力值为偶数,你获得技能:求援和惴恐直到回合结束/体力变化;若为奇数,你获得技能:谋溃和天命直到回合结束/体力变化.',
						xian_fuhuanghou_tianwei: '天威',
						xian_fuhuanghou_tianwei2: '天威',
						xian_fuhuanghou_tianwei_info: '锁定技,武将不会被翻面或移除游戏.',
						xian_fuhuanghou_xianshu: '贤淑',
						xian_fuhuanghou_xianshu_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,当其他角色因弃置而失去装备牌时,你可以令其失去1点体力.',
						xian_fuhuanghou_huitian: '回天',
						xian_fuhuanghou_huitian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,回复一点体力.',
						//仙张辽
						xian_zhangliao_yuanjun: '援军',
						xian_zhangliao_yuanjun_info: '摸牌阶段,你可以额外摸两张牌.',
						xian_zhangliao_liangjiang: '良将',
						xian_zhangliao_liangjiang_info: '锁定技,防止你的体力流失.当你受到伤害后,若你没有护甲,你获得技能:毅重和刚烈直到回合结束.',
						xian_zhangliao_xiaoyao: '逍遥',
						xian_zhangliao_xiaoyao_info: '回合开始和回合结束阶段时,你可以获得体力值不小于你/手牌数大于你/装备区牌数大于你的一名其他角色的所有牌并令该角色技能失效直到其回复体力.',
						xian_zhangliao_qidun: '奇遁',
						xian_zhangliao_qidun_info: '锁定技,不受延时锦囊和【铁索连环】影响.',
						xian_zhangliao_mashu: '马术',
						xian_zhangliao_mashu_info: '锁定技,你计算与其他角色的距离时-1.',
						xian_zhangliao_kuiwu: '溃吴',
						xian_zhangliao_kuiwu_info: '锁定技,当你对其他角色造成伤害时,若你装备区有牌,此伤害+X,X为你装备区牌数.你弃置装备区里所有的牌.',
						xian_zhangliao_bingshen: '兵神',
						xian_zhangliao_bingshen_info: '锁定技,当有牌置入你装备区后,你获得1点护甲.',
						xian_zhangliao_tianwei: '天威',
						xian_zhangliao_tianwei2: '天威',
						xian_zhangliao_tianwei_info: '锁定技,武将不会被翻面或移除游戏.',
						xian_zhangliao_shuangren_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动),或当你体力小于等于4时发动</b>',
						xian_zhangliao_baonu: ' ',
						xian_zhangliao_fubing: '伏兵',
						xian_zhangliao_fubing_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,回合结束阶段,你可以摸两张牌.',
						xian_zhangliao_huitian: '回天',
						xian_zhangliao_huitian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,回复一点体力.',
						//王廖化
						wang_liaohua_yuanjun: '援军',
						wang_liaohua_yuanjun_info: '摸牌阶段,你可以额外摸两张牌.',
						wang_liaohua_xianfeng: '先锋',
						wang_liaohua_xianfeng_info: '锁定技,回合开始时,你额外执行一个摸牌和出牌阶段.',
						wang_liaohua_qidun: '奇遁',
						wang_liaohua_qidun_info: '锁定技,不受延时锦囊和【铁索连环】影响.',
						wang_liaohua_mashu: '马术',
						wang_liaohua_mashu_info: '锁定技,你计算与其他角色的距离时-1.',
						wang_liaohua_xianzhen: '陷阵',
						wang_liaohua_xianzhen2: '陷阵',
						wang_liaohua_xianzhen_info: '每回合限一次.出牌阶段,你可以和一名其他角色拼点.若你赢:本回合你无视该角色的防具,且对其使用牌没有次数和距离限制,且本回合使用【杀】或普通锦囊牌选择唯一目标后,可以令其也成为此牌的目标,且本回合对其使用牌造成伤害时,此伤害+1(每种牌名每回合限一次);若你没赢:你本回合内不能使用【杀】,且【杀】不计入手牌上限.',
						wang_liaohua_podi: '破敌',
						wang_liaohua_podi_info: '当你使用【杀】或【决斗】指定目标后,若其手牌区或装备区有牌,你可以令其弃置X张牌且其非锁定技失效至回合结束,X为其体力上限的一半向上取整.此后,若其没有牌,你摸一张牌.',
						wang_liaohua_tianwei: '天威',
						wang_liaohua_tianwei2: '天威',
						wang_liaohua_tianwei_info: '锁定技,武将不会被翻面或移除游戏.',
						wang_liaohua_jiaxiang: '假降',
						wang_liaohua_jiaxiang_info: '觉醒技,当你进入濒死状态时,你回复体力至体力上限的一半且向下取整并获得技能:诱敌、弓骑、旋风和不屈.',
						wang_liaohua_danji: '单骑',
						wang_liaohua_danji_info: '觉醒技,回合开始时,若游戏轮数不小于5,你获得技能:马术、怒斩、龙胆、奔袭和武圣.且于回合结束时,你可以进行一个额外的回合..',
						wang_liaohua_shuangren_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动),或当你体力小于等于4时发动</b>',
						wang_liaohua_baonu: ' ',
						wang_liaohua_fubing: '伏兵',
						wang_liaohua_fubing_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,回合结束阶段,你可以摸两张牌.',
						wang_liaohua_huitian: '回天',
						wang_liaohua_huitian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,回复一点体力.',
						//王潘凤
						wang_panfeng_yuanjun: '援军',
						wang_panfeng_yuanjun_info: '摸牌阶段,你可以额外摸两张牌.',
						wang_panfeng_qidun: '奇遁',
						wang_panfeng_qidun_info: '锁定技,不受延时锦囊和【铁索连环】影响.',
						wang_panfeng_yongzhan: '勇战',
						wang_panfeng_yongzhan_info: '当你受到攻击范围内的其他角色造成的伤害后,你摸一张牌,若你没有手牌,则改为你摸三张牌,你可以对伤害来源使用一张【杀】.',
						wang_panfeng_shangjiang: '上将',
						wang_panfeng_shangjiang_bg: '将',
						wang_panfeng_shangjiang2: '上将',
						wang_panfeng_shangjiang3: '上将',
						wang_panfeng_shangjiang_info: '锁定技,当你为伤害来源的卡牌造成伤害后,你获得1枚<将>标记;若此牌为黑色【杀】或【决斗】,你改为获得2枚<将>标记.锁定技,你使用【杀】造成的伤害+X,X为上将标记数;锁定技,当你使用【杀】或【决斗】指定目标后,你令此牌需要依次使用或打出两张【闪】或【杀】响应.',
						wang_panfeng_tianwei: '天威',
						wang_panfeng_tianwei2: '天威',
						wang_panfeng_tianwei_info: '锁定技,武将不会被翻面或移除游戏.',
						wang_panfeng_zhansha: '斩杀',
						wang_panfeng_zhansha_info: '当其他角色因你使用【杀】造成的伤害进入濒死状态时,若该角色体力值小于0,你可以令其立即死亡,若如此做,你获得技能【咆哮】直到回合结束,你回复X点体力并摸Y张牌(X为你已损失的体力值的一半向下取整,且至少为1;Y为<将>标记数),最后你失去所有<将>标记.',
						wang_panfeng_shuangren_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动),或当你体力小于等于4时发动</b>',
						wang_panfeng_baonu: ' ',
						wang_panfeng_fubing: '伏兵',
						wang_panfeng_fubing_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,回合结束阶段,你可以摸两张牌.',
						wang_panfeng_huitian: '回天',
						wang_panfeng_huitian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,回复一点体力.',
						//蔡文姬
						wang_caiwenji_qinbian: '琴辨',
						wang_caiwenji_qinbian_info: '出牌阶段开始时或出牌阶段结束时你可以摸一张牌,若场上女性角色数为单数或场上男性角色数为双数,你的手牌上限加一若同时满足改为加二.',
						wang_caiwenji_qidun: '奇遁',
						wang_caiwenji_qidun_info: '锁定技,不受延时锦囊和【铁索连环】影响.',
						wang_caiwenji_shuyong: '书咏',
						wang_caiwenji_shuyong_info: '出牌阶段限一次,你可令一名其他角色摸一张牌,其选择一项:将一张手牌交给你,并令你于此回合内使用牌时无距离和使用次数限制;或令你依次弃置其两张牌.',
						wang_caiwenji_tianwei: '天威',
						wang_caiwenji_tianwei2: '天威',
						wang_caiwenji_tianwei_info: '锁定技,武将不会被翻面或移除游戏.',
						wang_caiwenji_beifen: '悲愤',
						wang_caiwenji_beifen_info: '出牌阶段限一次,如果你攻击范围内有其他角色,你可令一名其他角色指定你攻击范围内除你以外的一名角色,并令其对你造成1点伤害,你视为对被指定的角色使用【杀】.',
						wang_caiwenji_beifen_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动)</b>',
						wang_caiwenji_baonu: ' ',
						wang_caiwenji_houxian: '篌弦',
						wang_caiwenji_houxian1: '篌弦',
						wang_caiwenji_houxian2: '篌弦',
						wang_caiwenji_houxian3: '篌弦',
						wang_caiwenji_houxian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,当一名角色回复体力时,你可以弃置一张黑色手牌,防止此体力回复效果,令其进行一次判定若结果不为红色则受到无来源的1点伤害.当一名角色受到伤害时,你可以弃置一张红色手牌,防止此伤害,令你进行一次判定若结果不为♠️️令你回复1点体力,你的回合结束后若你手牌数不大于你的手牌上限数,你可以弃置所有牌将手牌补至体力数加上你所丢弃的装备数,如果此时你的手牌数不小于你体力的两倍,你可以选择一名角色,若此时你的体力值为1目标体力上限减至1,反之目标失去1点体力上限.',
						wang_caiwenji_wangyou: '忘忧',
						wang_caiwenji_wangyou_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,当你对其他角色造成伤害时,你可以防止此伤害,并与其交换体力值.',
						wang_caiwenji_huizou: '回奏',
						wang_caiwenji_huizou_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,你选择一项,回复一点体力或摸两张牌.',
						//王貂蝉
						wang_diaochan_yuanjun: '援军',
						wang_diaochan_yuanjun_info: '摸牌阶段,你可以额外摸两张牌.',
						wang_diaochan_qidun: '奇遁',
						wang_diaochan_qidun_info: '锁定技,不受延时锦囊和【铁索连环】影响.',
						wang_diaochan_lipan: '离叛',
						wang_diaochan_lipan_info: '出牌阶段,你可以选择弃一张牌,并选择两名角色,若如此做,视为其中一名角色对另一名角色使用一张【决斗】,且此【决斗】不能被【无懈可击】响应,每回合限一次.',
						wang_diaochan_tianwei: '天威',
						wang_diaochan_tianwei2: '天威',
						wang_diaochan_tianwei_info: '锁定技,武将不会被翻面或移除游戏.',
						wang_diaochan_lianxiang: '怜香',
						wang_diaochan_lianxiang_info: '出牌阶段,你可以弃一张牌,若如此做,你可以观看任意一名男性角色的手牌,并可以获得其中的一张.',
						wang_diaochan_lianxiang_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动)</b>',
						wang_diaochan_baonu: ' ',
						wang_diaochan_xiyu: '惜玉',
						wang_diaochan_xiyu_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,你不能成为黑色【杀】和锦囊的目标.',
						wang_diaochan_xiuhua: '羞花',
						wang_diaochan_xiuhua_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,回合结束阶段,你可以获得任意一名男性角色一张手牌.',
						wang_diaochan_huitian: '回天',
						wang_diaochan_huitian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,回复一点体力.',
						//王华雄
						wang_huaxiong_yuanjun: '援军',
						wang_huaxiong_yuanjun_info: '摸牌阶段,你可以额外摸两张牌.',
						wang_huaxiong_qidun: '奇遁',
						wang_huaxiong_qidun_info: '锁定技,不受延时锦囊和【铁索连环】影响.',
						wang_huaxiong_shanshi: '擅使',
						wang_huaxiong_shanshi2: '擅使',
						wang_huaxiong_shanshi_info: '你可以额外装备任意数量的武器,你使用的【杀】造成的伤害为1+X,X为你已装备的武器数量.',
						wang_huaxiong_tianwei: '天威',
						wang_huaxiong_tianwei2: '天威',
						wang_huaxiong_tianwei_info: '锁定技,武将不会被翻面或移除游戏.',
						wang_huaxiong_xiaoshou: '枭首',
						wang_huaxiong_xiaoshou_info: '你可以立即从对你造成伤害的来源处的装备区内获得一张牌',
						wang_huaxiong_shuangren: '双刃',
						wang_huaxiong_shuangren_info: '出牌阶段,你可以额外使用一张杀.',
						wang_huaxiong_shuangren_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动),或当你体力小于等于4时发动</b>',
						wang_huaxiong_baonu: ' ',
						wang_huaxiong_fubing: '伏兵',
						wang_huaxiong_fubing_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,回合结束阶段,你可以摸两张牌.',
						wang_huaxiong_huitian: '回天',
						wang_huaxiong_huitian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,回复一点体力.',
						//王李儒
						wang_liru_yuanjun: '援军',
						wang_liru_yuanjun_info: '摸牌阶段,你可以额外摸两张牌.',
						wang_liru_qidun: '奇遁',
						wang_liru_qidun_info: '锁定技,不受延时锦囊和【铁索连环】影响.',
						wang_liru_shipo: '识破',
						wang_liru_shipo_info: '除你以外任意角色使用锦囊对你生效以前,你可以进行判定,若为【黑色】,则该锦囊对你无效.',
						wang_liru_tianwei: '天威',
						wang_liru_tianwei2: '天威',
						wang_liru_tianwei_info: '锁定技,武将不会被翻面或移除游戏.',
						wang_liru_zhengjiao: '徵缴',
						wang_liru_zhengjiao_info: '回合结束阶段,你可以指定除你以外的任意一名角色,你立即获得该角色的一半牌(若目标牌为单数,则向上取整数).',
						wang_liru_zhengjiao_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动)</b>',
						wang_liru_baonu: ' ',
						wang_liru_suoshi: '唆使',
						wang_liru_suoshi2: '唆使',
						wang_liru_suoshi_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,出牌阶段,可以制定除自己外任意一名角色直到你的下回合开始前,该角色成为所有伤害的来源.',
						wang_liru_yudan: '御丹',
						wang_liru_yudan_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,你可以将任意【红色】手牌当【桃】使用.',
						//王吕布
						wang_lvbu_liangguang: '粮广',
						wang_lvbu_liangguang_info: '摸牌阶段,你可以额外摸四张牌.',
						wang_lvbu_qidun: '奇遁',
						wang_lvbu_qidun_info: '锁定技,不受延时锦囊和【铁索连环】影响.',
						wang_lvbu_wushuang: '无双',
						wang_lvbu_wushuang1: '无双',
						wang_lvbu_wushuang2: '无双',
						wang_lvbu_wushuang3: '无双',
						wang_lvbu_wushuang_info: '锁定技,你使用【杀】时,目标需连续使用两张【杀】才能抵消,与你进行【决斗】的角色,每次需要打出两张【杀】.',
						wang_lvbu_tianwei: '天威',
						wang_lvbu_tianwei2: '天威',
						wang_lvbu_tianwei_info: '锁定技,武将不会被翻面或移除游戏.',
						wang_lvbu_fanfu: '翻覆',
						wang_lvbu_fanfu_info: '对你造成伤害的来源立即判定,若为【黑色】,目标必须打出两张【闪】,否则受到你造成的一点伤害.',
						wang_lvbu_fanfu_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动),或当你体力小于等于5时发动</b>',
						wang_lvbu_baonu: ' ',
						wang_lvbu_shashen: '杀神',
						wang_lvbu_shashen_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,你使用的【杀】可以额外指定一至三个目标.',
						wang_lvbu_huitian: '回天',
						wang_lvbu_huitian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,回复一点体力.',
						//仙马超
						xian_machao_yuanjun: '援军',
						xian_machao_yuanjun_info: '摸牌阶段,你可以额外摸两张牌.',
						xian_machao_qidun: '奇遁',
						xian_machao_qidun_info: '锁定技,你不能成为延时类锦囊的目标.',
						xian_machao_tianwei: '天威',
						xian_machao_tianwei_info: '锁定技,武将牌不会被横置或翻面.',
						xian_machao_tiedan: '铁胆',
						xian_machao_tiedan_info: '当你使用的【杀】被抵消时,你可以立即对同一目标再使用一张【杀】.',
						xian_machao_poji: '破击',
						xian_machao_poji2: '破击',
						xian_machao_poji_info: '锁定技,你的红色杀不可闪避,你的♠️️【杀】造成的伤害+1.',
						xian_machao_yuling: '玉灵',
						xian_machao_yuling_info: '你每受到1点伤害,你可以获得伤害来源的一张手牌.',
						xian_machao_yuling_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动),或当你体力小于等于4时发动</b>',
						xian_machao_baonu: ' ',
						xian_machao_langzhao: '狼召',
						xian_machao_langzhao_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,其他角色计算与你的距离时始终+1,你计算其他角色距离时始终-1.',
						xian_machao_huitian: '回天',
						xian_machao_huitian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,回复一点体力.',
						//仙太史慈
						xian_taishici_yuanjun: '援军',
						xian_taishici_yuanjun_info: '摸牌阶段,你可以额外摸两张牌.',
						xian_taishici_qidun: '奇遁',
						xian_taishici_qidun_info: '锁定技,你不能成为延时类锦囊的目标.',
						xian_taishici_tianwei: '天威',
						xian_taishici_tianwei_info: '锁定技,武将牌不会被横置或翻面.',
						xian_taishici_tianlei: '天雷',
						xian_taishici_tianlei_info: '出牌阶段,你可用一张牌同时以所有其他角色拼点,若点数大于两名以上则赢:回合内你可以额外出一张【杀】,你每张【杀】所造成的伤害+1;若你没赢:你弃两张牌',
						xian_taishici_yiji: '义击',
						xian_taishici_yiji_info: '你每受到1点伤害,可弃一张红色手牌令对方失去1点体力',
						xian_taishici_yiji_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动),或当你体力小于等于5时发动</b>',
						xian_taishici_baonu: ' ',
						xian_taishici_zhenyuan: '镇元',
						xian_taishici_zhenyuan2: '镇元',
						xian_taishici_zhenyuan3: '镇元',
						xian_taishici_zhenyuan4: '镇元',
						xian_taishici_zhenyuan_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,出牌阶段,你每造成一点伤害,可额外出一张【杀】',
						xian_taishici_huitian: '回天',
						xian_taishici_huitian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,回复一点体力.',
						//仙甄姬
						xian_zhenji_yuanjun: '援军',
						xian_zhenji_yuanjun_info: '摸牌阶段,你可以额外摸两张牌.',
						xian_zhenji_qidun: '奇遁',
						xian_zhenji_qidun_info: '锁定技,你不能成为延时类锦囊的目标.',
						xian_zhenji_tianwei: '天威',
						xian_zhenji_tianwei_info: '锁定技,武将牌不会被横置或翻面.',
						xian_zhenji_qinghuai: '倾怀',
						xian_zhenji_qinghuai_info: '每当你使用或打出一张【闪】时(在其结算前),可以对任意攻击范围内的一名角色使用一张【杀】.',
						xian_zhenji_qingxin: '倾心',
						xian_zhenji_qingxin_info: '你在出牌阶段没有使用或打出任何一张【杀】,回合结束阶段你可以获得任意两名角色各一张牌.',
						xian_zhenji_qingxin_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动)</b>',
						xian_zhenji_baonu: ' ',
						xian_zhenji_mushen: '暮神',
						xian_zhenji_mushen2: '暮神',
						xian_zhenji_mushen_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,红色的【杀】对你无效,你可获得任何♥️️和♠️️的弃牌',
						xian_zhenji_huitian: '回天',
						xian_zhenji_huitian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,回复一点体力.',
						//仙周瑜
						xian_zhouyu_yuanjun: '援军',
						xian_zhouyu_yuanjun_info: '摸牌阶段,你可以额外摸两张牌.',
						xian_zhouyu_qidun: '奇遁',
						xian_zhouyu_qidun_info: '锁定技,你不能成为延时类锦囊的目标.',
						xian_zhouyu_tianwei: '天威',
						xian_zhouyu_tianwei_info: '锁定技,武将牌不会被横置或翻面.',
						xian_zhouyu_poji: '魄击',
						xian_zhouyu_poji_info: '出牌阶段,你可以令一名角色选择一种花色,抽取你的一张牌并亮出,若此牌与所选花色不同,则你对其造成一点火焰伤,该角色获得此牌.每回合限用一次.',
						xian_zhouyu_lianhun: '连魂',
						xian_zhouyu_lianhun2: '连魂⊙铁锁',
						xian_zhouyu_lianhun3: '连魂⊙重铸',
						xian_zhouyu_lianhun_info: '出牌阶段,你可以将你的任意一张♣️️手牌当【铁索连环】使用或重铸,每回合限一次.',
						xian_zhouyu_lianhun_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动)</b>',
						xian_zhouyu_baonu: ' ',
						xian_zhouyu_yuhun: '玉魂',
						xian_zhouyu_yuhun_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,黑色的【杀】对你无效,你不能成为♠️️或♣️️锦囊的目标.',
						xian_zhouyu_huitian: '回天',
						xian_zhouyu_huitian_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,锁定技,回合开始阶段,回复一点体力.',
						//仙诸葛恪
						xian_zhugeke_tianbing: '天兵',
						xian_zhugeke_tianbing_info: '摸牌阶段,你可以额外摸三张牌.',
						xian_zhugeke_qidun: '奇遁',
						xian_zhugeke_qidun_info: '锁定技,你不能成为延时类锦囊的目标.',
						xian_zhugeke_tianwei: '天威',
						xian_zhugeke_tianwei_info: '锁定技,武将牌不会被横置或翻面.',
						xian_zhugeke_shenzhi: '神秩',
						xian_zhugeke_shenzhi_info: '出牌阶段,你可弃一张手牌,令所有其他角色展示一张相同颜色的手牌,否则受到你造成的1点伤害.',
						xian_zhugeke_huling: '护灵',
						xian_zhugeke_huling_info: '你每受到1点伤害,可令任意一名角色二选一,交给你一张♥️️牌或弃两张牌.',
						xian_zhugeke_huling_append: '<b><p align=center>以下为奋发技(体力值小于体力上限的一半时发动)</b>',
						xian_zhugeke_baonu: ' ',
						xian_zhugeke_yanwu: '焰舞',
						xian_zhugeke_yanwu_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,你每次去一张装备区里的牌,视为向任意一名角色使用了一张【火攻】',
						xian_zhugeke_fuxing: '复兴',
						xian_zhugeke_fuxing_info: '<span class="bluetext" style="color: #99cc33">奋发技(体力值小于体力上限的一半时发动)</span>,出牌阶段,你可以弃两张牌,回复一点体力',
					},
				};
				for (const i in QQQ.character) {
					const info = QQQ.character[i];
					if (lib.config.mode != 'boss') {
						info[4].removeArray('boss', 'bossallowed');
						info[4].push('zhu');
					}
					info[4].add(`ext:蒸蒸日上/image/${i}.jpg`);
					info[4].push(`die:ext:蒸蒸日上/audio/${i}.mp3`);
				}
				lib.config.all.characters.add('王者之战');
				lib.config.characters.add('王者之战');
				lib.translate['王者之战_character_config'] = '<span class="yellowtext";<span style=\"font-size:24px;font-family:xiaozhuan;font-style: oblique\">王者之战</span>';
				return QQQ;
			});
			game.import('character', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '蒸蒸日上',
					connect: true,
					character: {
						upgradeGD_zhaoyun: ['male', 'shen', 1, ['upgrade_juejing', 'upgrade_longhun', 'zhanjiang'], ['shu']],
						upgrade_panfeng: ['male', 'qun', 4, ['upgrade_kuangfu'], []],
						upgrade_yuanshu: ['male', 'qun', 4, ['upgrade_yongsi', 'weidi'], []],
						upgrade_mayunlu: ['female', 'shu', 4, ['upgrade_fengpo', 'upgrade_myl_mashu'], []],
						upgrade_wutugu: ['male', 'qun', 20, ['upgrade_ranshang', 'upgrade_hanyong'], []],
						//    upgrade_masu:['male','shu',3,['upgrade_xinzhan','upgrade_huilei'], []],
						upgrade_guansuo: ['male', 'shu', '3/4', ['upgrade_zhengnan', 'upgrade_xiefang'], []],
						upgrade_xiahoushi: ['female', 'shu', 3, ['upgrade_qiaoshi', 'upgrade_yanyu'], []],
						upgrade_jushou: ['male', 'qun', '2/3', ['upgrade_jianying', 'shibei'], []],
						upgrade_lusu: ['male', 'wu', 3, ['upgrade_haoshi', 'upgrade_dimeng'], []],
						upgrade_jiaxu: ['male', 'qun', 3, ['upgrade_wansha', 'upgrade_luanwu', 'upgrade_weimu'], []],
						//	upgrade_guyong:['male','wu',3,['upgrade_shenxing','upgrade_bingyi'], []],
						upgrade_zhonghui: ['male', 'wei', 4, ['upgrade_quanji', 'upgrade_zili'], []],
						upgrade_caifuren: ['female', 'qun', 3, ['upgrade_qieting', 'upgrade_xianzhou'], []],
						upgrade_guanping: ['male', 'shu', 4, ['upgrade_longyin', 'upgrade_jiezhong'], []],
						//	upgrade_guotufengji:['male','qun',3,['upgrade_jigong','shifei'], []],
						//	upgrade_chenqun:['male','wei',3,['upgrade_dingpin','upgrade_faen'], []],
						//	upgrade_zhoucang:['male','shu',4,.upgrade_zhongyong],
						upgrade_zhurong: ['female', 'shu', 4, ['upgrade_juxiang', 'upgrade_lieren', 'changbiao'], []],
						upgrade_zhangchunhua: ['female', 'wei', 3, ['rejueqing', 'upgrade_shangshi'], []],
						//	upgrade_gongsunyuan:['male','qun',4,.upgrade_huaiyi],
						//	upgrade_caozhen:['male','wei',4,.upgrade_sidi],
						upgrade_fuhuanghou: ['female', 'qun', 3, ['upgrade_zhuikong', 'upgrade_qiuyuan'], []],
						//	upgrade_fazheng:['male','shu',3,['upgrade_enyuan','upgrade_xuanhuo'], []],
						//	upgrade_lingtong:['male','wu',4,['decadexuanfeng','yongjin'], []],
						//	upgrade_liubiao:['male','qun',3,['decadezishou','decadezongshi'], []],
						//	upgrade_caoxiu:['male','wei',4,['qianju','upgrade_qingxi'], []],
						//	upgrade_sunxiu:['male','wu',3,['upgrade_yanzhu','upgrade_xingxue','xinzhaofu'],.zhu],
						upgrade_dengai: ['male', 'wei', 4, ['upgrade_tuntian', 'upgrade_zaoxian'], []],
						upgrade_gongsunzan: ['male', 'qun', 4, ['upgrade_qiaomeng', 'upgrade_yicong'], []],
						//upgrade_manchong:['male','wei',3,['upgrade_junxing','yuce'], []],
						upgrade_liru: ['male', 'qun', 3, ['upgrade_juece', 'upgrade_mieji', 'upgrade_fencheng'], []],
						//upgrade_yufan:['male','wu',3,['xinzhiyan','xinzongxuan'], []],
						upgrade_bulianshi: ['female', 'wu', 3, ['upgrade_anxu', 'upgrade_zhuiyi'], []],
						//upgrade_hanhaoshihuan:['male','wei',4,['upgrade_shenduan','upgrade_yonglve'], []],
						//upgrade_panzhangmazhong:['male','wu',4,['upgrade_duodao','upgrade_anjian'], []],
						upgrade_wangyi: ['female', 'wei', '3/4', ['upgrade_zhenlie', 'upgrade_miji'], []],
						upgrade_mateng: ['male', 'qun', '4/5', ['upgrade_xiongyi', 'upgrade_mt_mashu'], []],
						upgrade_madai: ['male', 'shu', 4, ['upgrade_md_mashu', 'upgrade_qianxi'], []],
						//	upgrade_guanzhang:['male','shu',4,.fuhun],
						upgrade_xusheng: ['male', 'wu', 4, ['upgrade_pojun'], []],
						upgrade_taishici: ['male', 'wu', 4, ['upgrade_tianyi', 'hanzhan'], []],
						upgrade_masu: ['male', 'shu', 3, ['upgrade_xinzhan', 'upgrade_huilei'], []],
						//upgrade_sunluban:['female','wu',3,['upgrade_chanhui','upgrade_jiaojin'], []],
						upgrade_handang: ['male', 'wu', 4, ['upgrade_gongji', 'xinjiefan'], []],
						//upgrade_yujin:['male','wei',4,.decadezhenjun],
						upgrade_caozhang: ['male', 'wei', 4, ['upgrade_jiangchi'], []],
						upgrade_chengpu: ['male', 'wu', 4, ['upgrade_lihuo', 'upgrade_chunlao'], []],
						//	upgrade_quancong:['male','wu',4,.xinyaoming],
						upgrade_liaohua: ['male', 'shu', 4, ['upgrade_dangxian', 'upgrade_fuli'], []],
						//	upgrade_guohuai:['male','wei',4,.decadejingce],
						upgrade_wuyi: ['male', 'shu', 4, ['upgrade_benxi'], []],
						//	upgrade_zhuran:['male','wu',4,.xindanshou],
						//	upgrade_caozhi:['male','wei',3,['upgrade_luoying','upgrade_jiushi','chengzhang'], []],
						upgrade_pangtong: ['male', 'shu', 3, ['ollianhuan', 'upgrade_niepan'], []],
						//upgrade_zhangyi: ['male', 'shu', 5, ['upgrade_wurong', 'upgrade_shizhi'], []],
						upgrade_wuguotai: ['female', 'wu', 3, ['upgrade_ganlu', 'upgrade_buyi'], []],
						upgrade_zhangxingcai: ['female', 'shu', 3, ['upgrade_shenxian', 'upgrade_qiangwu'], []],
						upgrade_gaoshun: ['male', 'qun', 4, ['upgrade_xianzhen', 'upgrade_jinjiu'], []],
						upgrade_caocao: ['male', 'wei', 4, ['upgrade_jianxiong', 'upgrade_hujia'], ['zhu'], []],
						upgrade_simayi: ['male', 'wei', 3, ['upgrade_fankui', 'upgrade_guicai'], []],
						upgrade_guojia: ['male', 'wei', 3, ['upgrade_tiandu', 'upgrade_yiji'], []],
						upgrade_lidian: ['male', 'wei', 3, ['upgrade_xunxun', 'upgrade_wangxi'], []],
						upgrade_zhangliao: ['male', 'wei', 4, ['upgrade_tuxi'], []],
						upgrade_caorui: ['male', 'wei', 3, ['upgrade_huituo', 'mingjian', 'xingshuai'], ['zhu'], []],
						upgrade_xuzhu: ['male', 'wei', 4, ['upgrade_luoyi'], []],
						upgrade_xiahoudun: ['male', 'wei', 4, ['upgrade_ganglie', 'upgrade_qingjian'], []],
						upgrade_zhangfei: ['male', 'shu', 4, ['upgrade_paoxiao', 'oltishen'], []],
						upgrade_zhaoyun: ['male', 'shu', 4, ['upgrade_longdan', 'upgrade_yajiao'], []],
						upgrade_guanyu: ['male', 'shu', 4, ['upgrade_wusheng', 'upgrade_yijue'], []],
						upgrade_machao: ['male', 'shu', 4, ['upgrade_mc_mashu', 'upgrade_tieji'], []],
						upgrade_xushu: ['male', 'shu', 3, ['upgrade_wuyan', 'upgrade_jujian'], []],
						upgrade_zhouyu: ['male', 'wu', 3, ['upgrade_yingzi', 'upgrade_fanjian'], []],
						upgrade_lvmeng: ['male', 'wu', 4, ['upgrade_keji', 'qinxue', 'upgrade_botu'], []],
						upgrade_ganning: ['male', 'wu', 4, ['upgrade_qixi', 'upgrade_fenwei'], []],
						upgrade_luxun: ['male', 'wu', 3, ['upgrade_qianxun', 'upgrade_lianying'], []],
						upgrade_daqiao: ['female', 'wu', 3, ['upgrade_guose', 'upgrade_liuli', 'upgrade_sijun'], []],
						upgrade_huanggai: ['male', 'wu', 4, ['upgrade_kurou', 'upgrade_zhaxiang'], []],
						upgrade_lvbu: ['male', 'qun', '4/5', ['upgrade_wushuang', 'upgrade_liyu'], []],
						upgrade_huatuo: ['male', 'qun', 3, ['upgrade_jijiu', 'upgrade_qingnang'], []],
						upgrade_liubei: ['male', 'shu', 4, ['upgrade_rende', 'rejijiang'], ['zhu'], []],
						upgrade_diaochan: ['female', 'qun', 3, ['upgrade_lijian', 'upgrade_biyue'], []],
						upgrade_huangyueying: ['female', 'shu', 3, ['upgrade_jizhi', 'upgrade_qicai'], []],
						upgrade_sunquan: ['male', 'wu', 4, ['upgrade_zhiheng', 'rejiuyuan'], ['zhu'], []],
						upgrade_sunshangxiang: ['female', 'wu', 3, ['upgrade_xiaoji', 'upgrade_jieyin'], []],
						upgrade_zhenji: ['female', 'wei', 3, ['upgrade_luoshen', 'reqingguo'], []],
						upgrade_zhugeliang: ['male', 'shu', 3, ['upgrade_guanxing', 'upgrade_kongcheng'], []],
						upgrade_huaxiong: ['male', 'qun', 6, ['upgrade_shiyong'], []],
						upgrade_zhangjiao: ['male', 'qun', 3, ['upgrade_leiji', 'upgrade_guidao', 'xinhuangtian'], ['zhu'], []],
						upgrade_yuji: ['male', 'qun', 3, ['upgrade_guhuo'], []],
						upgrade_zuoyou: ['female', 'qun', 2, ['upgrade_wanhua'], []],
						upgrade_zuoci: ['male', 'qun', 3, ['upgrade_huashen', 'upgrade_xinsheng'], []],
						upgrade_zhangxiu: ['male', 'qun', 4, ['upgrade_xiongluan', 'upgrade_congjian'], []],
						upgrade_xiahouyuan: ['male', 'wei', 4, ['upgrade_shensu'], []],
						upgrade_caoren: ['male', 'wei', 4, ['upgrade_jushou2', 'upgrade_jiewei'], []],
						upgrade_sp_caoren: ['male', 'wei', 4, ['upgrade2_jushou', 'upgrade2_jiewei'], []],
						upgrade_huangzhong: ['male', 'shu', 4, ['upgrade_liegong'], []],
						upgrade_weiyan: ['male', 'shu', 4, ['upgrade_kuanggu', 'upgrade_qimou'], []],
						upgrade_xiaoqiao: ['female', 'wu', 3, ['upgrade_tianxiang', 'upgrade_hongyan', 'upgrade_piaoling'], []],
						upgrade_zhoutai: ['male', 'wu', 4, ['upgrade_buqu', 'upgrade_fenji'], []],
						upgrade_xunyou: ['male', 'wei', 3, ['upgrade_qice', 'upgrade_zhiyu'], []],
						upgrade_xunyu: ['male', 'wei', 3, ['upgrade_quhu', 'upgrade_jieming'], []],
						upgrade_dianwei: ['male', 'wei', 4, ['upgrade_qiangxi'], []],
						upgrade_yuanshao: ['male', 'qun', 4, ['upgrade_luanji', 'olxueyi'], ['zhu'], []],
						upgrade_menghuo: ['male', 'shu', 4, ['upgrade_huoshou', 'upgrade_zaiqi'], []],
						upgrade_dongzhuo: ['male', 'qun', 8, ['upgrade_jiuchi', 'roulin', 'benghuai', 'olbaonue'], ['zhu'], []],
						upgrade_sunjian: ['male', 'wu', '4/5', ['upgrade_yinghun', 'wulie'], []],
						upgrade_caopi: ['male', 'wei', 3, ['upgrade_xingshang', 'upgrade_fangzhu', 'songwei'], ['zhu'], []],
						upgrade_jiangwei: ['male', 'shu', 4, ['upgrade_tiaoxin', 'upgrade_zhiji'], []],
						upgrade_caiwenji: ['female', 'qun', 3, ['upgrade_beige', 'upgrade_duanchang'], []],
						upgrade_liushan: ['male', 'shu', 3, ['xiangle', 'upgrade_fangquan', 'upgrade_ruoyu'], ['zhu'], []],
						upgrade_zhangzhang: ['male', 'wu', 3, ['upgrade_zhijian', 'upgrade_guzheng'], []],
						upgrade_lingcao: ['male', 'wu', 4, ['upgrade_dujin'], []],
						upgrade_sunce: ['male', 'wu', 4, ['upgrade_jiang', 'upgrade_hunzi', 'olzhiba'], ['zhu'], []],
						deitiesUzi: ['male', 'shen', 6, ['deitiesBGM', 'upgrade_shenfa', 'upgrade_xukong'], []],
					},
					characterIntro: {
						upgrade_sp_caoren: '字子孝,沛国谯人,曹操的从弟.三国时期曹魏名将,官至大司马.谥曰忠侯.',
						upgrade_gongsunzan: '群雄之一.出身贵族,因母地位卑贱,只当了郡中小吏.他貌美,声音洪亮,机智善辩.后随卢植于缑氏山中读书,粗通经传.',
						upgrade_lidian: '字曼成,曹操麾下将领.李典深明大义,不与人争功,崇尚学习与高贵儒雅,尊重博学之士,在军中被称为长者.李典有长者之风,官至破虏将军,三十六岁去世.魏文帝曹丕继位后追谥号为愍侯.',
						deitiesUzi: '中文名:简自豪</br>别名:狂小狗</br>职业:<英雄联盟>职业选手</br>游戏ID:Uzi</br>简自豪(游戏ID:Uzi),1997年4月5日出生于湖北省宜昌市,<英雄联盟>职业选手,司职ADC,原皇族电子竞技俱乐部选手,现效力于BLG电子竞技俱乐部</br>主要成就:</br>2013年英雄联盟全球总决赛亚军[38]  </br>2014年英雄联盟全球总决赛亚军[61]  </br>2018年LPL春季赛冠军[41]</br>2018年英雄联盟季中冠军赛冠军[3]  </br>2018年雅加达亚运会英雄联盟项目冠军[30]  </br>2018年LPL夏季赛冠军[43]  </br>2016年全明星赛个人SOLO冠军[10]  </br>2017年全明星赛个人SOLO冠军[14]  </br>2018年LPL春季赛决赛FMVP[80] </br>2018年英雄联盟季中冠军赛FMVP[82] </br>2018年LPL夏季赛决赛FMVP[81]  ',
					},
					skill: {
						//无敌了
						upgrade_wudi: {
							trigger: {
								player: ['loseHpBefore', 'loseMaxHpBefore', 'damageBefore', 'turnOverBefore'],
							},
							mark: true,
							forced: true,
							init(player) {
								game.log(player, '获得了', '【无敌】');
							},
							content() {
								if (trigger.name != 'turnOver') {
									trigger.cancel();
								} else {
									if (!player.isTurnedOver()) game.log(player, '取消了翻面');
									trigger.cancel();
								}
							},
							ai: {
								nofire: true,
								nothunder: true,
								nodamage: true,
								noturn: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage') || get.tag(card, 'loseHp') || get.tag(card, 'loseMaxHp')) return [0, 0];
									},
								},
							},
							intro: {
								content: '防止一切伤害/失去体力/失去体力上限/翻面',
							},
						},
						//夏侯氏
						upgrade_qiaoshi: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return event.player != player && player.countCards('e') == (event.player.countCards('e') || event.player.countCards('h') == player.countCards('h')) && event.player.isAlive();
							},
							check(event, player) {
								return get.attitude(player, event.player) >= 0;
							},
							//priority:-5,
							logTarget: 'player',
							content() {
								'step 0';
								game.asyncDraw([trigger.player, player]);
								('step 1');
								if (player.isIn() && trigger.player.isIn()) {
									var getGainColor = function (player) {
										var last = player.getHistory('gain', function (evt) {
											return evt.getParent(2) == event;
										});
										if (last.length) {
											var evt = last.pop();
											if (evt.cards.length == 1 && player.getCards('h').includes(evt.cards[0])) return get.color(evt.cards[0], player);
										} else return player;
									};
									if (getGainColor(player) == getGainColor(trigger.player)) player.chooseBool('是否继续发动【樵拾】？', '和' + get.translation(trigger.player) + '各摸一张牌');
								} else event.finish();
								('step 2');
								if (result.bool) event.goto(0);
							},
							ai: {
								expose: 0.1,
							},
						},
						upgrade_yanyu: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('h', 'sha') > 0;
							},
							filterCard: {
								name: 'sha',
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
							group: 'upgrade_yanyu2',
						},
						upgrade_yanyu2: {
							trigger: {
								player: 'phaseUseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.getHistory('lose', function (evt) {
									var evt2 = evt.parent;
									return evt2.name == 'useSkill' && evt2.skill == 'upgrade_yanyu' && evt.getParent(3) == event;
								}).length;
							},
							content() {
								'step 0';
								event.num = Math.min(
									7,
									player.getHistory('lose', function (evt) {
										var evt2 = evt.parent;
										return evt2.name == 'useSkill' && evt2.skill == 'upgrade_yanyu' && evt.getParent(3) == trigger;
									}).length
								);
								player
									.chooseTarget(get.prompt('upgrade_yanyu'), '令一名男性角色摸' + get.cnNumber(event.num) + '张牌', function (card, player, target) {
										return target.hasSex('male') && target != player;
									})
									.set('ai', function (target) {
										return get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(event.num);
								}
							},
						},
						//沮授
						upgrade_jianying: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') < 7 && player == _status.currentPhase;
							},
							content() {
								if (!player.hasSkill('upgrade_jianying_draw')) {
									player.addTempSkill('upgrade_jianying_draw');
									player.addMark('upgrade_jianying_draw', 1, false);
								} else {
									player.removeSkill('upgrade_jianying_draw');
									player.draw(2);
								}
							},
						},
						upgrade_jianying_draw: {
							marktext: '渐',
							intro: {
								name: '渐营',
								content: '再使用一张牌时,你摸两张牌',
							},
						},
						//虞翻
						upgrade_zongxuan: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'loseAfter',
							},
							filter(event, player) {
								if (event.type != 'discard') return false;
								for (var i = 0; i < event.cards2.length; i++) {
									if (get.position(event.cards2[i]) == 'd') {
										return true;
									}
								}
								return false;
							},
							check(trigger, player) {
								if (trigger.getParent(3).name == 'phaseDiscard') return true;
								if (
									!game.hasPlayer(function (current) {
										return current != player && get.attitude(player, current) > 0 && !current.hasSkillTag('nogain');
									})
								)
									return false;
								for (var i = 0; i < trigger.cards2.length; i++) {
									if (get.position(trigger.cards2[i], true) == 'd' && get.type2(trigger.cards2[i], false) == 'trick') {
										return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								var cards = [];
								for (var i = 0; i < trigger.cards2.length; i++) {
									if (get.position(trigger.cards2[i], true) == 'd') {
										cards.push(trigger.cards2[i]);
									}
								}
								var next = player.chooseToMove('纵玄:将任意张牌置于牌堆顶', true);
								next.set('list', [['本次弃置的牌(请将要给出的锦囊牌留在这里)', cards], ['牌堆顶']]);
								next.set('filterOk', function (moved) {
									if (moved[0].length == 1 && get.type2(moved[0][0], false) == 'trick') return true;
									return moved[1].length;
								});
								next.set('processAI', function (list) {
									var cards = list[0][1].slice(0),
										player = _status.event.player;
									var result = [[], []];
									if (
										game.hasPlayer(function (current) {
											return current != player && get.attitude(player, current) > 0 && !current.hasSkillTag('nogain');
										})
									) {
										var max_val = 0;
										var max_card = false;
										for (var i of cards) {
											if (get.type2(i, false) == 'trick') {
												var val = get.value(i, 'raw');
												if (val > max_val) {
													max_card = i;
													max_val = val;
												}
											}
										}
										if (max_card) {
											result[0].push(max_card);
											cards.remove(max_card);
										}
									}
									if (cards.length) {
										var max_val = 0;
										var max_card = false;
										var equip = game.hasPlayer(function (current) {
											return current.isDamaged() && get.recoverEffect(current, player, player) > 0;
										});
										for (var i of cards) {
											var val = get.value(i);
											var type = get.type2(i, false);
											if (type == 'basic') val += 3;
											if (type == 'equip' && equip) val += 9;
											if (max_val == 0 || val > max_val) {
												max_card = i;
												max_val = val;
											}
										}
										if (max_card) {
											result[1].push(max_card);
											cards.remove(max_card);
										}
										result[0].addArray(cards);
									}
									return result;
								});
								('step 1');
								if (result.bool) {
									var cards = result.moved[1].slice(0);
									if (cards.length) {
										game.log(player, '将', cards, '置于了牌堆顶');
										while (cards.length) ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
									}
									var list = result.moved[0].filter(function (i) {
										return get.type2(i, false) == 'trick';
									});
									if (list.length && game.hasPlayer((current) => current != player)) {
										var next = player.chooseButton(['是否将一张锦囊牌交给一名其他角色？', list]).set('ai', function (button) {
											return get.value(button.link, 'raw');
										});
										if (!result.moved[1].length) next.set('forced', true);
									} else event.finish();
								} else event.finish();
								('step 2');
								if (result.bool) {
									var card = result.links[0];
									event.card = card;
									player
										.chooseTarget(lib.filter.notMe, true, '令一名其他角色获得' + get.translation(card))
										.set('card', card)
										.set('ai', function (target) {
											var card = _status.event.card,
												player = _status.event.player;
											var eff = get.value(card, target) * get.attitude(player, target);
											if (target.hasSkill('nogain')) eff /= 10;
											return eff;
										});
								} else event.finish();
								('step 3');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.gain(card, 'gain2');
								}
							},
						},
						upgrade_zhiyan: {
							audio: 'zhiyan',
							audioname: ['gexuan', 're_yufan', 'upgrade_yufan'],
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('zhiyan'), '令一名角色摸一张牌并展示之.若为基本牌则你摸一张牌;若为装备牌,则其回复1点体力').set('ai', function (target) {
									return get.attitude(_status.event.player, target) * (target.isDamaged() ? 2 : 1);
								});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									event.bool = false;
									event.target.draw('visible');
								} else {
									event.finish();
								}
								('step 2');
								var card = result[0];
								event.card = card;
								if (get.type(card) == 'basic') player.draw();
								('step 3');
								if (get.type(card) == 'equip') {
									if (target.getCards('h').includes(card) && target.hasUseTarget(card)) {
										event.target.chooseUseTarget(card, true, 'nopopup');
									}
									event.bool = true;
								}
								('step 4');
								if (event.bool) target.recover();
							},
							ai: {
								expose: 0.2,
								threaten: 1.2,
							},
						},
						upgrade_huituo: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['loseHpEnd', 'damageEnd'],
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt2('upgrade_huituo')).set('ai', function (target) {
									var player = _status.event.player;
									if (get.attitude(player, target) > 0) {
										if (target.hasSkill('xinleiji') || target.hasSkill('xinleiji')) return get.recoverEffect(target, player, player) + 1.5;
										if (target.hasSkill('tiandu') || target.hasSkill('upgrade_tiandu')) return get.recoverEffect(target, player, player) + 1.2;
										if (target.hasSkill('upgrade_tuntian')) return get.recoverEffect(target, player, player) + 1.15;
										return get.recoverEffect(target, player, player) + 1;
									}
									return 0;
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									target.judge(function (card) {
										if (target.hp == target.maxHp) {
											if (get.color(card) == 'red' && card.suit != 'heart') return -1;
										}
										if (card.suit == 'heart') return 2;
										if (get.color(card) == 'red') return 1;
										return 0.5;
									});
								} else {
									event.finish();
								}
								('step 2');
								if (result.color) {
									if (result.color == 'red') {
										if (event.target.hp < event.target.maxHp) event.target.recover(Math.ceil(trigger.num));
										if (result.suit == 'heart') event.goto(0);
									} else {
										event.target.draw(2 * trigger.num);
										event.target.chooseToDiscard('he', true);
									}
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
							},
						},
						upgrade_haoshi: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'olhaoshi',
						},
						upgrade_dimeng: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return game.players.length > 2 && game.hasPlayer((current) => lib.skill.upgrade_dimeng.filterTarget(null, player, current));
							},
							selectTarget: 2,
							complexTarget: true,
							filterTarget(card, player, target) {
								if (target == player) return false;
								return true;
							},
							multitarget: true,
							multiline: true,
							audio: 'ext:蒸蒸日上/audio:2',
							content() {
								targets[0].swapHandcards(targets[1]);
								var num = Math.abs(targets[0].countCards('h') - targets[1].countCards('h'));
								if (num > 0) {
									player.addMark('upgrade_dimeng_discard', num, false);
									player.addTempSkill('upgrade_dimeng_discard', 'phaseUseAfter');
								}
							},
							ai: {
								threaten: 4.5,
								pretao: true,
								nokeep: true,
								order: 1,
								expose: 0.2,
								result: {
									target(player, target) {
										if (!ui.selected.targets.length) return -Math.sqrt(target.countCards('h'));
										var h1 = ui.selected.targets[0].getCards('h'),
											h2 = target.getCards('h');
										if (h2.length > h1.length) return 0;
										var delval = get.value(h2, target) - get.value(h1, ui.selected.targets[0]);
										if (delval >= 0) return 0;
										return -delval * (h1.length - h2.length);
									},
								},
							},
							subSkill: {
								discard: {
									trigger: {
										player: 'phaseUseEnd',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return player.countCards('h') > 0;
									},
									content() {
										player.chooseToDiscard('h', true, player.countMark('upgrade_dimeng_discard'));
									},
								},
							},
						},
						//贾诩
						upgrade_wansha: {
							audio: 'ext:蒸蒸日上/audio:2',
							global: 'upgrade_wansha_global',
							trigger: {
								global: 'dyingBegin',
							},
							forced: true,
							logTarget: 'player',
							filter(event, player) {
								return player == _status.currentPhase;
							},
							content() {
								game.countPlayer(function (current) {
									if (current != player && current != trigger.player) current.addSkillBlocker('upgrade_wansha_fengyin');
								});
								player.addTempSkill('upgrade_wansha_clear');
							},
							subSkill: {
								global: {
									mod: {
										cardEnabled(card, player) {
											var source = _status.currentPhase;
											if ((card.name == 'tao' || card.name == 'jiu') && source && source != player && source.hasSkill('upgrade_wansha') && !player.isDying()) return false;
										},
										cardSavable(card, player) {
											var source = _status.currentPhase;
											if (card.name == 'tao' && source && source != player && source.hasSkill('upgrade_wansha') && !player.isDying()) return false;
										},
									},
								},
								fengyin: {
									inherit: 'fengyin',
								},
								clear: {
									trigger: {
										global: 'dyingAfter',
									},
									forced: true,
									charlotte: true,
									popup: false,
									filter(event, player) {
										return !_status.dying.length;
									},
									content() {
										player.removeSkill('upgrade_wansha_clear');
									},
									onremove() {
										game.countPlayer2(function (current) {
											current.removeSkillBlocker('upgrade_wansha_fengyin');
										});
									},
								},
							},
						},
						upgrade_luanwu: {
							//group:'upgrade_luanwu2',
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							limited: true,
							filterTarget(card, player, target) {
								return target != player;
							},
							selectTarget: -1,
							multitarget: true,
							multiline: true,
							usable: 1,
							content() {
								'step 0';
								player.awakenSkill('upgrade_luanwu');
								player.addSkill('upgrade_luanwu2');
								event.current = player.next;
								event.currented = [];
								event.num1 = 0;
								event.num2 = 0;
								('step 1');
								event.currented.push(event.current);
								event.current.addTempClass('target');
								event.current
									.chooseToUse(
										'乱武:使用一张杀或失去1点体力',
										function (card) {
											if (card.name != 'sha') return false;
											return lib.filter.filterCard.apply(this, arguments);
										},
										function (card, player, target) {
											if (player == target) return false;
											var dist = get.distance(player, target);
											if (dist > 1) {
												if (
													game.hasPlayer(function (current) {
														return current != player && get.distance(player, current) < dist;
													})
												) {
													return false;
												}
											}
											return lib.filter.filterTarget.apply(this, arguments);
										}
									)
									.set('ai2', function () {
										return get.effect_use.apply(this, arguments) + 0.01;
									});
								('step 2');
								if (result.bool == false) {
									event.num1++;
									event.current.loseHp();
								} else event.num2++;
								event.current = event.current.next;
								if (event.current != player && !event.currented.includes(event.current)) {
									event.goto(1);
								} else player.draw(Math.max(event.num1, event.num2));
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
						upgrade_luanwu2: {
							audio: 'ext:蒸蒸日上/audio:true',
							trigger: {
								global: 'dieEnd',
							},
							forced: true,
							silent: true,
							filter(event, player) {
								return player == _status.currentPhase && player.awakenedSkills.includes('upgrade_luanwu');
							},
							content() {
								player.restoreSkill('upgrade_luanwu');
								game.log(player, '技能', '#g【乱武】', '复原');
								player.update();
							},
						},
						upgrade_weimu: {
							group: 'upgrade_weimu2',
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'useCard1',
							},
							forced: true,
							firstDo: true,
							filter(event, player, card) {
								if (get.color(event.card) != 'black') return false;
								return (event.card.name == 'qishawangmeizhike' && player != event.player) || (event.card.name == 'nanman' && player != event.player) || (event.card.name == 'wanjian' && player != event.player) || (event.card.name == 'taoyuan' && player.hp < player.maxHp) || event.card.name == 'wugu';
							},
							content() { },
							mod: {
								targetEnabled(card) {
									if ((get.type2(card) == 'trick' || card.name == 'sha') && get.color(card) == 'black') return false;
								},
							},
						},
						upgrade_weimu2: {
							audio: 'ext:蒸蒸日上/audio:true',
							trigger: {
								player: 'damageBegin2',
							},
							forced: true,
							filter(event, player) {
								return player == _status.currentPhase;
							},
							content() {
								trigger.cancel();
								player.draw(2);
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (target == _status.currentPhase && get.tag(card, 'damage')) return 'zerotarget';
									},
								},
							},
						},
						//钟会
						upgrade_quanji: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'gainAfter',
								player: ['damageAfter', 'recoverAfter', 'loseHpAfter'],
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'damage') return true;
								if (event.name == 'recover') return true;
								if (event.name == 'loseHp') return true;
								if (player == event.player) return false;
								var evt = event.getl(player);
								return evt && evt.cards2 && evt.cards2.length;
							},
							content() {
								'step 0';
								event.count = trigger.name == 'damage' ? trigger.num : 1;
								('step 1');
								event.count--;
								if (!player.isMaxHandcard()) {
									player.draw(2);
								} else {
									player.draw();
								}
								('step 2');
								var hs = player.getCards('h');
								if (hs.length) {
									if (hs.length == 1)
										event._result = {
											bool: true,
											cards: hs,
										};
									else player.chooseCard('h', true, '选择一张手牌作为<权>');
								} else event.goto(4);
								('step 3');
								if (result.bool && result.cards && result.cards.length) {
									player.addToExpansion(result.cards, 'giveAuto', player).gaintag.add('upgrade_quanji');
								}
								('step 4');
								if (event.count > 0) {
									player.chooseBool(get.prompt2('upgrade_quanji')).set('frequentSkill', 'upgrade_quanji');
								} else event.finish();
								('step 5');
								if (result.bool) {
									event.goto(1);
								}
							},
							onremove(player, skill) {
								var cards = player.getExpansions(skill);
								if (cards.length) player.loseToDiscardpile(cards);
							},
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.getExpansions('upgrade_quanji').length;
								},
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								threaten: 0.8,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
											if (!target.hasSkill('upgrade_paiyi') && target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
											if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
											if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
										}
									},
								},
							},
						},
						upgrade_zili: {
							derivation: 'upgrade_paiyi',
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.getExpansions('upgrade_quanji').length > 2;
							},
							content() {
								player.awakenSkill('upgrade_zili');
								player.recover();
								player.draw(3);
								player.loseMaxHp();
								player.addSkill('upgrade_paiyi');
							},
						},
						upgrade_paiyi: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.getExpansions('upgrade_quanji').length && (!player.hasSkill('upgrade_paiyi_0') || !player.hasSkill('upgrade_paiyi_1'));
							},
							chooseButton: {
								check(button) {
									if (typeof button.link == 'object') return 1;
									var player = _status.event.player,
										num = player.getExpansions('upgrade_quanji').length - 1;
									if (button.link == 1) {
										if (
											game.countPlayer(function (current) {
												return get.damageEffect(current, player, player) > 0;
											}) < num
										)
											return 0.5;
										return 2;
									}
									if (num < 2) return 0;
									return 1;
								},
								dialog(event, player) {
									var dialog = ui.create.dialog('权计', 'hidden');
									var table = document.createElement('div');
									table.classList.add('add-setting');
									table.style.margin = '0';
									table.style.width = '100%';
									table.style.position = 'relative';
									var list = ['摸牌', '造成伤害'];
									for (var i = 0; i < list.length; i++) {
										if (player.hasSkill('upgrade_paiyi_' + i)) continue;
										var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
										td.innerHTML = '<span>' + list[i] + '</span>';
										td.link = i;
										td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
										Object.setPrototypeOf(td, lib.element.Button.prototype); //QQQ
										table.appendChild(td);
										dialog.buttons.add(td);
									}
									dialog.content.appendChild(table);
									dialog.add(player.getExpansions('upgrade_quanji'));
									return dialog;
								},
								select: 2,
								filter(button, player) {
									if (ui.selected.buttons.length) return typeof ui.selected.buttons[0].link != typeof button.link;
									return true;
								},
								backup(links) {
									if (typeof links[0] == 'object') links.reverse();
									var next = get.copy(lib.skill['upgrade_paiyi_backup' + links[0]]);
									next.card = links[1];
									return next;
								},
								prompt(links, player) {
									if (typeof links[0] == 'object') links.reverse();
									var num = get.cnNumber(Math.max(1, player.getExpansions('upgrade_quanji').length - 1)),
										card = get.translation(links[1]);
									if (links[0] == 0) return '移去' + card + '并令一名角色摸' + num + '张牌';
									return '移去' + card + '并对至多' + num + '名角色造成1点伤害';
								},
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
							subSkill: {
								0: {},
								1: {},
								backup0: {
									audio: 'upgrade_paiyi',
									filterCard: () => false,
									selectCard: -1,
									filterTarget: true,
									delay: false,
									content() {
										'step 0';
										player.addTempSkill('upgrade_paiyi_0', 'phaseUseEnd');
										var card = lib.skill.upgrade_paiyi_backup.card;
										player.loseToDiscardpile(card);
										('step 1');
										target.draw(Math.max(1, player.getExpansions('upgrade_quanji').length));
									},
									ai: {
										result: {
											target(player, target) {
												if (target.hasSkill('nogain')) return 0;
												if (player == target && !player.needsToDiscard()) return 3;
												return 1;
											},
										},
									},
								},
								backup1: {
									audio: 'upgrade_paiyi',
									filterCard: () => false,
									selectCard: -1,
									filterTarget: true,
									delay: false,
									multitarget: true,
									multiline: true,
									selectTarget() {
										return [1, Math.max(1, _status.event.player.getExpansions('upgrade_quanji').length - 1)];
									},
									content() {
										'step 0';
										targets.sortBySeat();
										player.addTempSkill('upgrade_paiyi_1', 'phaseUseEnd');
										var card = lib.skill.upgrade_paiyi_backup.card;
										player.loseToDiscardpile(card);
										('step 1');
										for (var i of targets) i.damage();
									},
									ai: {
										tag: {
											damage: 1,
										},
										result: {
											target: -1.5,
										},
									},
								},
							},
						},
						//界蔡夫人
						upgrade_qieting: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								var target = event.player;
								if (player == target) return false;
								if (!target.getHistory('sourceDamage').length) {
									var cards = target.getCards('e');
									for (var i of cards) {
										if (player.isEmpty(get.subtype(i))) return true;
									}
								}
								return (
									target.getHistory('useCard', function (evt) {
										return (
											evt.targets &&
											evt.targets.filter(function (i) {
												return i != target;
											}).length
										);
									}).length == 0
								);
							},
							forced: true,
							content() {
								'step 0';
								var target = trigger.player;
								event.target = target;
								var list = [];
								if (!target.getHistory('sourceDamage').length) {
									var cards = target.getCards('e');
									for (var i of cards) {
										if (player.isEmpty(get.subtype(i))) list.push(i);
									}
								}
								if (list.length) {
									player
										.choosePlayerCard(target, [1, 2], 'e', get.prompt('upgrade_qieting', target))
										.set('list', list)
										.set('filterButton', function (button) {
											return _status.event.list.includes(button.link);
										})
										.set('ai', function (button) {
											var evt = _status.event,
												val = get.value(button.link);
											if (evt.target.hasSkillTag('noe')) val -= 4;
											if (evt.att > 0 == val > 0) return 0;
											return get.effect(evt.player, button.link, evt.player, evt.player);
										})
										.set('att', get.attitude(player, target));
								} else event.goto(2);
								('step 1');
								if (result.bool) {
									for (var i of result.links) {
										var card = i;
										target.$give(card, player, false);
										player.equip(card);
									}
								}
								if (
									target.getHistory('useCard', function (evt) {
										return (
											evt.targets &&
											evt.targets.filter(function (i) {
												return i != target;
											}).length
										);
									}).length != 0
								)
									event.finish();
								('step 2');
								player.chooseBool('是否发动【窃听】摸2张牌？').set('frequentSkill', 'upgrade_qieting');
								('step 3');
								if (result.bool) {
									player.draw(2);
								}
							},
						},
						upgrade_xianzhou: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							limited: true,
							filter(event, player) {
								return player.countCards('e') > 0;
							},
							filterCard: true,
							position: 'e',
							selectCard: -1,
							filterTarget: lib.filter.notMe,
							discard: false,
							lose: false,
							delay: false,
							content() {
								'step 0';
								player.awakenSkill('upgrade_xianzhou');
								target.gain(cards, player, 'give');
								player.recover(cards.length);
								game.asyncDraw([target, player], cards.length);
								//	player.draw(cards.length);
								('step 1');
								var list = game.filterPlayer(function (current) {
									return target.inRange(current);
								});
								if (list.length) {
									var max = Math.min(list.length, cards.length);
									target
										.chooseTarget(true, [1, max], '对至多' + get.cnNumber(max) + '名范围内的角色各造成1点伤害', function (card, player, target) {
											return _status.event.list.includes(target);
										})
										.set('list', list)
										.set('ai', function (target) {
											var player = _status.event.player;
											return get.damageEffect(target, player, player);
										});
								} else event.finish();
								('step 2');
								if (result.bool) {
									var targets = result.targets.sortBySeat();
									player.line(targets, 'green');
									for (var i of targets) i.damage('nocard');
								}
							},
							ai: {
								order: 1,
								result: {
									target: 1,
									player(player) {
										var bool = true,
											players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (players[i] != player && get.attitude(player, players[i]) > 2 && get.attitude(players[i], player) > 2) {
												bool = false;
												break;
											}
										}
										if (bool) return -10;
										if (player.hp == 1) return 1;
										if (game.phaseNumber < game.players.length) return -10;
										if (player.countCards('e') + player.hp <= player.maxHp) return 1;
										return -10;
									},
								},
							},
						},
						//界关平
						upgrade_longyin: {
							audio: 'ext:蒸蒸日上/audio:2',
							shaRelated: true,
							trigger: {
								global: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha' && player.countCards('he') > 0 && event.player.isPhaseUsing();
							},
							content() {
								'step 0';
								var go = false;
								if (get.attitude(player, trigger.player) > 0) {
									if (get.color(trigger.card) == 'red') {
										go = true;
									} else if (trigger.addCount === false || !trigger.player.isPhaseUsing()) go = false;
									else if (!trigger.player.hasSkill('paoxiao') && !trigger.player.hasSkill('tanlin3') && !trigger.player.hasSkill('upgrade_zhaxiang2') && !trigger.player.hasSkill('fengnu') && !trigger.player.getEquip('zhuge')) {
										var nh = trigger.player.countCards('h');
										if (player == trigger.player) {
											go = player.countCards('h', 'sha') > 0;
										} else if (nh >= 4) {
											go = true;
										} else if (player.countCards('h', 'sha')) {
											if (nh == 3) {
												go = Math.random() < 0.8;
											} else if (nh == 2) {
												go = Math.random() < 0.5;
											}
										} else if (nh >= 3) {
											if (nh == 3) {
												go = Math.random() < 0.5;
											} else if (nh == 2) {
												go = Math.random() < 0.2;
											}
										}
									}
								}
								var next = player.chooseToDiscard(get.prompt('longyin'), '弃置一张牌' + (get.color(trigger.card) == 'red' ? '并摸1～2张牌' : '') + ',令' + get.translation(trigger.player) + '本次使用的【杀】不计入使用次数', 'he');
								next.set('ai', function (card) {
									if (_status.event.go) {
										return 6 - get.value(card);
									}
									return 0;
								});
								next.set('go', go);
								('step 1');
								if (result.bool) {
									if (trigger.addCount !== false) {
										trigger.addCount = false;
										trigger.player.getStat().card.sha--;
									}
									if (trigger.card.suit == 'diamond') {
										player.draw();
									}
									if (trigger.card.suit == 'heart') {
										player.draw(2);
									}
									if (result.cards[0].number == trigger.card.number) player.restoreSkill('upgrade_jiezhong');
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						upgrade_jiezhong: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							limited: true,
							filter(event, player) {
								return player.countCards('h') < player.maxHp;
							},
							content() {
								player.awakenSkill('upgrade_jiezhong');
								player.draw(Math.min(5, player.maxHp - player.countCards('h')));
							},
						},
						//新郭淮
						upgrade_decadejingce: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							filter(event, player) {
								return player.getHistory('useCard').length >= player.hp;
							},
							content() {
								'step 0';
								var list = [],
									history = player.getHistory('useCard');
								for (var i of history) {
									list.add(i.card.suit);
									if (list.length >= player.hp) break;
								}
								if (list.length >= player.hp) event.goon = true;
								else player.chooseControl('摸牌阶段', '出牌阶段').set('prompt', '精策:选择要执行的额外阶段');
								('step 1');
								if (event.goon || result.index == 0) {
									var next = player.phaseDraw();
									event.next.remove(next);
									trigger.parent.next.push(next);
								}
								if (event.goon || result.index == 1) {
									var next = player.phaseUse();
									event.next.remove(next);
									trigger.parent.next.push(next);
								}
							},
						},
						//新于禁
						upgrade_decadezhenjun: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.countCards('he') > 0;
								});
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt2('decadezhenjun')).ai = function (target) {
									return -get.attitude(_status.event.player, target) * (target.countCards('e') + 1);
								};
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									var num = Math.max(target.countCards('h') - target.hp, 1);
									player.discardPlayerCard(num, target, true);
								}
								('step 2');
								if (result.cards && result.cards.length) {
									for (var i = 0; i < result.cards.length; i++) {
										if (get.type(result.cards[i]) == 'equip') {
											event.finish();
											return;
										}
									}
									event.num = result.cards.length;
									if (event.num > 0) {
										var prompt = '弃置一张牌,或令' + get.translation(event.target) + '摸' + get.cnNumber(event.num) + '张牌';
										player.chooseToDiscard(prompt, 'he').ai = function (card) {
											return 7 - get.value(card);
										};
									} else event.finish();
								} else event.finish();
								('step 3');
								if (!result.bool) {
									event.target.draw(event.num);
								}
							},
						},
						//姜维
						upgrade_tiaoxin: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filter(event, player) {
								if (player.getStat('skill').upgrade_tiaoxin) return !player.hasSkill('upgrade_tiaoxin2');
								return true;
							},
							filterTarget(card, player, target) {
								return target != player && (player.inRange(target) || target.inRange(player)) && target.countCards('he') > 0;
							},
							content() {
								'step 0';
								target
									.chooseToUse(
										function (card, player, event) {
											if (card.name != 'sha') return false;
											return lib.filter.filterCard.apply(this, arguments);
										},
										'挑衅:对' + get.translation(player) + '使用一张杀,或令其获得你的一张牌'
									)
									.set('targetRequired', true)
									.set('complexSelect', true)
									.set('filterTarget', function (card, player, target) {
										if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
										return lib.filter.filterTarget.apply(this, arguments);
									})
									.set('sourcex', player);
								('step 1');
								if (
									result.bool &&
									player.getHistory('damage', function (evt) {
										return evt.parent.type == 'card' && evt.getParent(4) == event;
									}).length
								)
									player.addTempSkill('upgrade_tiaoxin2', 'phaseUseEnd');
								else if (target.countDiscardableCards(player, 'he') > 0) player.gainPlayerCard(target, 'he', true).boolline = true;
							},
							ai: {
								order: 9.5,
								expose: 0.2,
								result: {
									target: -1,
									player(player, target) {
										if (target.countCards('h') == 0) return 0;
										if (target.countCards('h', 'sha') == 0 || player.countCards('h', 'shan')) return 1;
										if (target.countCards('h') == 1) return -0.1;
										if (player.hp <= 2 && target.countCards('h', 'sha')) return -2;
										if (player.countCards('h', 'shan') == 0) return -1;
										return -0.5;
									},
								},
								threaten: 2.1,
							},
						},
						upgrade_tiaoxin2: {},
						upgrade_zhiji: {
							audio: 'ext:蒸蒸日上/audio:2',
							juexingji: true,
							//priority:-10,
							derivation: 'reguanxing',
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
							},
							forced: true,
							filter(event, player) {
								if (player.storage.upgrade_zhiji) return false;
								return player.countCards('h') == 0;
							},
							content() {
								'step 0';
								player.awakenSkill('upgrade_zhiji');
								player.chooseDrawRecover(2, true);
								('step 1');
								player.loseMaxHp();
								player.storage.upgrade_zhiji = true;
								player.addSkill('reguanxing');
								player.addSkill('rejizhi');
							},
						},
						//界郭图张嶷
						upgrade_jigong: {
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							trigger: {
								player: 'phaseUseBegin',
							},
							content() {
								'step 0';
								player
									.chooseControl('一张', '两张', '三张', 'cancel2')
									.set('prompt', get.prompt2('rejigong'))
									.set('ai', () => '三张');
								('step 1');
								if (result.control != 'cancel2') {
									player.addTempSkill('rejigong2');
									player.draw(1 + result.index);
								}
							},
						},
						upgrade_jigong2: {
							audio: 'rejigong',
							mod: {
								maxHandcardBase(player) {
									if (game.online) return player.getStat('damage') || 0;
									var num = 0;
									player.getHistory('sourceDamage', function (evt) {
										num += evt.num;
									});
									return num;
								},
							},
							trigger: {
								player: 'phaseDiscardBegin',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								if (player.isHealthy()) return false;
								var num = 0;
								player.getHistory('sourceDamage', function (evt) {
									num += evt.num;
								});
								if (!num) return false;
								var num2 = 0;
								player.getHistory('gain', function (evt) {
									var evtx = evt.getParent(2);
									if (evtx.name == 'rejigong' && evtx.player == player) num2 += evt.cards.length;
								});
								return num >= num2;
							},
							content() {
								player.recover();
							},
						},
						upgrade_shizhi: {
							mod: {
								cardname(card, player) {
									if (card.name == 'shan' && player.hp == 1) return 'sha';
								},
							},
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.hp == 1 && event.cards && event.cards.length == 1 && event.cards[0].name == 'shan';
							},
							content() {
								player.recover();
							},
						},
						//界陈群
						upgrade_dingpin: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							onChooseToUse(event) {
								if (event.type != 'phase' || game.online) return;
								var list = [],
									player = event.player;
								player.getHistory('useCard', function (evt) {
									list.add(get.type2(evt.card));
								});
								player.getHistory('lose', function (evt) {
									if (evt.type != 'discard' || evt.getParent(2).redingpin_ignore) return;
									for (var i of evt.cards2) {
										list.add(get.type2(i, evt.hs.includes(i) ? player : false));
									}
								});
								event.set('redingpin_types', list);
							},
							filter(event, player) {
								var list = event.redingpin_types || [];
								return (
									player.countCards('he', function (card) {
										return !list.includes(get.type2(card));
									}) > 0
								);
							},
							filterCard(card) {
								var list = _status.event.redingpin_types || [];
								return !list.includes(get.type2(card));
							},
							position: 'he',
							filterTarget(card, player, target) {
								return !target.hasSkill('redingpin2');
							},
							content() {
								'step 0';
								target.judge(function (card) {
									var evt = _status.event.getParent('redingpin'),
										suit = card.suit;
									switch (suit) {
										case 'club':
										case 'spade':
											return evt.target.hp;
										case 'diamond':
											return get.sgn(get.attitude(evt.target, evt.player)) * -3;
									}
									return 0;
								}).judge2 = function (result) {
									if (result.color == 'black') return true;
									return false;
								};
								('step 1');
								switch (result.suit) {
									case 'spade':
									case 'club':
										if (target.hp > 0) target.draw(Math.min(3, target.hp));
										target.addTempSkill('redingpin2');
										break;
									case 'heart':
										event.parent.redingpin_ignore = true;
										break;
									case 'diamond':
										player.turnOver();
										break;
								}
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										if (player.isTurnedOver()) return target.hp;
										var card = ui.cardPile.firstChild;
										if (!card) return;
										if (get.color(card) == 'black') return target.hp;
										return 0;
									},
								},
							},
						},
						upgrade_dingpin2: {
							charlotte: true,
						},
						upgrade_faen: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: ['turnOverAfter', 'linkAfter'],
							},
							logTarget: 'player',
							filter(event, player) {
								if (event.name == 'link') return event.player.isLinked();
								return !event.player.isTurnedOver();
							},
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							content() {
								trigger.player.draw();
							},
						},
						//界曹彰
						upgrade_jiangchi: {
							audio: 'new_jiangchi',
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							content() {
								'step 0';
								var list = ['摸1张牌', '摸3张牌,本回合内不能使用或打出【杀】'];
								if (
									player.countCards('he', function (card) {
										return lib.filter.cardDiscardable(card, player, 'upgrade_jiangchi') > 0;
									}) > 0
								)
									list.push('弃置一张牌,本回合可以多使用2张【杀】且无距离限制');
								player
									.chooseControl('cancel2')
									.set('prompt', get.prompt('upgrade_jiangchi'))
									.set('choiceList', list)
									.set('ai', function () {
										var player = _status.event.player;
										if (player.countCards('hs', 'sha') > 4) return 2;
										if (
											!player.countCards('hs', function (card) {
												return card.name == 'sha' && player.hasValueTarget(card, false);
											}) ||
											(player.hp < player.maxHp && player.hp < 3)
										)
											return 1;
										return 0;
									});
								('step 1');
								if (result.control != 'cancel2') {
									switch (result.index) {
										case 0: {
											player.draw();
											break;
										}
										case 1: {
											player.draw(5);
											player.chooseToDiscard('he', 2, true);
											player.addTempSkill('upgrade_jiangchi_less');
											break;
										}
										case 2: {
											player.chooseToDiscard('he', true);
											player.addTempSkill('upgrade_jiangchi_more');
											break;
										}
									}
								}
							},
							subSkill: {
								less: {
									mod: {
										cardEnabled(card) {
											if (card.name == 'sha') return false;
										},
										cardRespondable(card) {
											if (card.name == 'sha') return false;
										},
										ignoredHandcard(card, player) {
											if (card.name == 'sha') {
												return true;
											}
										},
										cardDiscardable(card, player, name) {
											if (name == 'phaseDiscard' && card.name == 'sha') {
												return false;
											}
										},
									},
									charlotte: true,
								},
								more: {
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + 2;
										},
										targetInRange(card) {
											if (card.name == 'sha') return true;
										},
									},
									charlotte: true,
								},
							},
						},
						//界周仓和程普
						upgrade_lihuo: {
							mod: {
								aiOrder(player, card, num) {
									if (card.name == 'sha' && !player.getHistory('useCard').length) return num + 7;
								},
							},
							trigger: {
								player: 'useCard1',
							},
							filter(event, player) {
								if (event.card.name == 'sha' && !event.card.nature) return true;
								return false;
							},
							audio: 'ext:蒸蒸日上/audio:2',
							prompt2(event) {
								return '将' + get.translation(event.card) + '改为火属性';
							},
							//audioname:.re_chengpu,
							check(event, player) {
								return (
									(event.baseDamage > 1 || player.getHistory('useCard').indexOf(event) == 0) &&
									(player.hp > 1 || player.getStorage('upgrade_chunlao').length) &&
									game.hasPlayer(function (current) {
										return (
											!event.targets.includes(current) &&
											player.canUse(event.card, current) &&
											get.attitude(player, current) < 0 &&
											!current.hasShan() &&
											get.effect(
												current,
												{
													name: 'sha',
													nature: 'fire',
												},
												player,
												player
											) > 0
										);
									})
								);
							},
							content() {
								trigger.card.nature = 'fire';
								trigger.upgrade_lihuo_changed = true;
							},
							group: ['upgrade_lihuo2', 'upgrade_lihuo3', 'upgrade_lihuo4'],
							ai: {
								fireAttack: true,
							},
						},
						upgrade_lihuo2: {
							trigger: {
								player: 'useCard2',
							},
							filter(event, player) {
								if (event.card.name != 'sha' || event.card.nature != 'fire') return false;
								return game.hasPlayer(function (current) {
									return !event.targets.includes(current) && player.canUse(event.card, current);
								});
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget([1, game.players.length - 1], get.prompt('upgrade_lihuo'), '为' + get.translation(trigger.card) + '增加多个目标', function (card, player, target) {
										return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
									})
									.set('sourcex', trigger.targets)
									.set('card', trigger.card)
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.effect(target, _status.event.card, player, player);
									});
								('step 1');
								if (result.bool) {
									if (!event.isMine() && !_status.connectMode) game.delayx();
									//
									target1s = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								for (var i = 0; i < target1s.length; i++) {
									if (!target1s[i].isLinked()) {
										target1s[i].link();
									}
									trigger.targets.push(target1s[i]);
								}
							},
						},
						upgrade_lihuo3: {
							trigger: {
								player: 'useCardEnd',
							},
							filter(event, player) {
								return (
									event.upgrade_lihuo_changed == true &&
									player.getHistory('sourceDamage', function (evt) {
										return evt.card == event.card;
									}).length
								);
							},
							forced: true,
							audio: 'lihuo',
							audioname: ['re_chengpu'],
							content() {
								player.loseHp();
								player.draw(5 - player.countCards('h'));
							},
						},
						upgrade_lihuo4: {
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							audio: 'lihuo',
							audioname: ['re_chengpu'],
							filter(event, player) {
								return event.card.name == 'sha' && player.getHistory('useCard').indexOf(event) == 0 && event.cards.filterInD().length;
							},
							content() {
								var cards = trigger.cards.filterInD();
								player.markAuto('upgrade_chunlao', cards);
								player.$gain2(cards, false);
								game.log(player, '将', cards, '放在了武将牌上');
								game.cardsGotoSpecial(cards);
							},
						},
						upgrade_zhongyong: {
							trigger: {
								player: 'useCardAfter',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								event.cards = trigger.cards.filterInD();
								game.countPlayer2(function (current) {
									current.getHistory('useCard', function (evt) {
										if (evt.card.name == 'shan' && evt.getParent(3) == trigger) event.cards.addArray(evt.cards.filterInD('od'));
									});
								});
								if (!event.cards.length) event.finish();
								player
									.chooseTarget(get.prompt2('rezhongyong'), '令一名其他角色获得' + get.translation(event.cards), function (card, player, target) {
										return !_status.event.source.includes(target) && target != player;
									})
									.set('ai', function (target) {
										return get.attitude(_status.event.player, target);
									})
									.set('source', trigger.targets);
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.gain(cards, 'gain2');
									var red = false,
										black = false;
									for (var i of cards) {
										var color = get.color(i, false);
										if (color == 'red') red = true;
										if (color == 'black') black = true;
										if (red && black) break;
									}
									if (red)
										target
											.chooseToUse('是否使用一张杀？', {
												name: 'sha',
											})
											.set('filterTarget', function (card, player, target) {
												return target != _status.event.sourcex && _status.event.sourcex.inRange(target) && lib.filter.targetEnabled.apply(this, arguments);
											})
											.set('sourcex', player)
											.set('addCount', false);
									if (black) target.draw();
								}
							},
						},
						upgrade_juxiang: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'juxiang',
						},
						upgrade_lieren: {
							shaRelated: true,
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								source: 'damageSource',
							},
							filter(event, player) {
								return ((event.card && event.card.name == 'sha' && event.parent.name == 'sha') || (event.card && event.card.name == 'juedou' && event.parent.name == 'juedou')) && event.player.isAlive() && player.canCompare(event.player);
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0 && player.countCards('h') > 1;
							},
							//priority:5,
							content() {
								'step 0';
								player.chooseToCompare(trigger.player);
								('step 1');
								if (result.bool && trigger.player.countGainableCards(player, 'he')) {
									var sj = ['1', '2'].randomGet();
									player.gainPlayerCard(trigger.player, sj, true, 'he');
								}
							},
						},
						//韩当
						upgrade_gongji: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:蒸蒸日上/audio:2',
							position: 'he',
							filterCard: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							check(card) {
								var base = 0,
									player = _status.event.player,
									suit = card.suit,
									added = false,
									added2 = false,
									added3;
								if (
									get.type(card) == 'equip' &&
									game.hasPlayer(function (target) {
										var att = get.attitude(player, target);
										if (att >= 0) return 0;
										if (
											target.countCards('he', function (card) {
												return get.value(card) > 5;
											})
										)
											return -att;
									})
								)
									base += 6;
								var hs = player.getCards('h');
								var muniu = player.getEquip('muniu');
								if (muniu && card != muniu && muniu.cards) hs = hs.concat(muniu.cards);
								for (var i of hs) {
									if (i != card && i.name == 'sha') {
										if (i.suit == suit) {
											if (player.hasValueTarget(i, false)) {
												added3 = true;
												base += 5.5;
											}
										} else {
											if (player.hasValueTarget(i, false)) added2 = true;
											if (!added && !player.hasValueTarget(i, null, true) && player.hasValueTarget(i, false, true)) {
												base += 4;
												added = true;
											}
										}
									}
								}
								if (added3 && !added2) base -= 4.5;
								if (get.type(card) == 'equip') return 15 + base - get.value(card);
								return base - get.value(card);
							},
							content() {
								'step 0';
								if (!player.storage.upgrade_gongji2) player.storage.upgrade_gongji2 = [];
								player.storage.upgrade_gongji2.add(cards[0].suit);
								player.addTempSkill('upgrade_gongji2');
								('step 1');
								if (get.type(cards[0], null, cards[0].original == 'h' ? player : false) == 'equip') {
									player.draw(2);
									player
										.chooseTarget('是否获得一名其他角色的一张牌？', function (card, player, target) {
											return player != target && target.countCards('he') > 0;
										})
										.set('ai', function (target) {
											var att = get.attitude(player, target);
											if (att >= 0) return 0;
											if (
												target.countCards('he', function (card) {
													return get.value(card) > 5;
												})
											)
												return -att;
											return -att * 0.8;
										});
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.line(result.targets, 'green');
									player.gainPlayerCard(result.targets[0], 'he', true);
								}
							},
							ai: {
								order(item, player) {
									if (
										player.countCards('he', {
											type: 'equip',
										}) > 0
									)
										return 11;
									return 4.5;
								},
								result: {
									player: 1,
								},
							},
						},
						upgrade_gongji2: {
							charlotte: true,
							mod: {
								attackRangeBase() {
									return Infinity;
								},
								cardUsable(card, player) {
									if (card.name == 'sha' && player.storage.upgrade_gongji2.includes(card.suit)) return Infinity;
								},
								aiOrder(player, card, num) {
									if (card.name == 'sha' && !player.storage.upgrade_gongji2.includes(card.suit)) return num + 1;
								},
							},
							mark: true,
							intro: {
								content: '使用$花色的杀无次数限制',
							},
						},
						upgrade_sidi: {
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return (
									player.countCards('he', function (card) {
										if (_status.connectMode) return true;
										return get.type(card) != 'basic';
									}) > 0
								);
							},
							content() {
								'step 0';
								player
									.chooseCard('he', get.prompt('upgrade_sidi'), '将一张非基本牌置于武将牌上作为<司>', function (card, player) {
										return get.type(card) != 'basic';
									})
									.set('ai', function (card) {
										if (get.position(card) == 'e') return 5 + player.hp - get.value(card);
										return 7 - get.value(card);
									});
								('step 1');
								if (result.bool) {
									var cards = result.cards;
									player.markAuto('upgrade_sidi', cards);
									game.log(player, '将', cards[0], '放在了武将牌上');
									player.lose(cards, ui.special, 'toStorage');
								}
							},
							intro: {
								content: 'cards',
							},
							group: 'upgrade_sidi_push',
							ai: {
								notemp: true,
							},
						},
						upgrade_sidi_push: {
							trigger: {
								global: 'phaseUseBegin',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && player.getStorage('upgrade_sidi').length;
							},
							content() {
								'step 0';
								player.chooseButton([get.prompt('upgrade_sidi', trigger.player), player.getStorage('upgrade_sidi')]).set('ai', function (button) {
									var player = _status.event.player;
									var target = _status.event.getTrigger().player;
									if (get.attitude(player, target) > -1) return 0;
									var card = button.link;
									var color = get.color(button.link, false);
									var eff = target.countCards('h', function (card) {
										return get.color(card, target) == color && target.hasValueTarget(card);
									});
									if (
										!target.countCards('h', function (card) {
											return get.color(card, target) == color && card.name == 'sha' && target.hasValueTarget(card);
										})
									)
										eff += 1.5;
									if (
										!target.countCards('h', function (card) {
											return get.color(card, target) == color && get.type2(card, target) == 'trick' && target.hasValueTarget(card);
										})
									)
										eff += 1.5;
									return eff - 1;
								});
								('step 1');
								if (result.bool) {
									if (!trigger.upgrade_sidi) trigger.upgrade_sidi = [];
									trigger.upgrade_sidi.push(player);
									var card = result.links[0];
									var target = trigger.player;
									player.unmarkAuto('upgrade_sidi', result.links);
									player.$throw(card, 1000);
									game.log(player, '将', card, '置入了弃牌堆');
									game.cardsDiscard(card);
									var color = get.color(card, false);
									if (!target.storage.upgrade_sidi2) target.storage.upgrade_sidi2 = [];
									target.storage.upgrade_sidi2.add(color);
									target.addTempSkill('upgrade_sidi2', 'phaseUseAfter');
									target.markSkill('upgrade_sidi2');
									player.addTempSkill('upgrade_sidi3', 'phaseUseAfter');
								}
							},
						},
						upgrade_sidi2: {
							mod: {
								cardEnabled2(card, player) {
									if (player.getStorage('upgrade_sidi2').includes(get.color(card, player))) return false;
								},
							},
							intro: {
								content: '不能使用$的牌',
							},
							marktext: '敌',
						},
						upgrade_sidi3: {
							audio: 'upgrade_sidi',
							trigger: {
								global: 'phaseUseEnd',
							},
							forced: true,
							filter(event, player) {
								if (!event.upgrade_sidi || !event.upgrade_sidi.includes(player)) return false;
								var sha = player.canUse('sha', event.player, false),
									trick = true;
								event.player.getHistory('useCard', function (evt) {
									if (evt.getParent('phaseUse') != event) return false;
									if (sha && evt.card.name == 'sha') sha = false;
									if (trick && get.type2(evt.card, false) == 'trick') trick = false;
								});
								return sha || trick;
							},
							content() {
								var sha = player.canUse('sha', trigger.player, false),
									trick = true;
								trigger.player.getHistory('useCard', function (evt) {
									if (evt.getParent('phaseUse') != trigger) return false;
									if (sha && evt.card.name == 'sha') sha = false;
									if (trick && get.type2(evt.card, false) == 'trick') trick = false;
								});
								if (sha)
									player.useCard(
										{
											name: 'sha',
										},
										trigger.player
									);
								if (trick) player.draw(2);
							},
						},
						upgrade_huaiyi: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							usable: 2,
							delay: false,
							filter(event, player) {
								return player.countCards('h') > 0 && (!player.getStat('skill').rehuaiyi || player.hasSkill('rehuaiyi2'));
							},
							content() {
								'step 0';
								player.showHandcards();
								if (get.color(player.getCards('h')) != 'none') {
									player.draw();
									player.addTempSkill('rehuaiyi2', 'phaseUseEnd');
									event.finish();
								}
								('step 1');
								player.chooseControl('红色', '黑色').set('ai', function () {
									var player = _status.event.player;
									if (
										player.countCards('h', {
											color: 'red',
										}) == 1 &&
										player.countCards('h', {
											color: 'black',
										}) > 1
									)
										return '红色';
									return '黑色';
								});
								('step 2');
								event.control = result.control;
								var cards;
								if (event.control == '红色') {
									cards = player.getCards('h', {
										color: 'red',
									});
								} else {
									cards = player.getCards('h', {
										color: 'black',
									});
								}
								player.discard(cards);
								event.num = cards.length;
								('step 3');
								player
									.chooseTarget('请选择至多' + get.cnNumber(event.num) + '名有牌的其他角色,获得这些角色的各一张牌.', [1, event.num], function (card, player, target) {
										return target != player && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target) + 0.5;
									});
								('step 4');
								if (result.bool && result.targets) {
									player.line(result.targets, 'green');
									event.targets = result.targets;
									event.targets.sort(lib.sort.seat);
									event.gained = 0;
								} else {
									event.finish();
								}
								('step 5');
								if (player.isAlive() && event.targets.length) {
									player.gainPlayerCard(event.targets.shift(), 'he', true);
								} else event.finish();
								('step 6');
								if (result.bool) {
									event.gained += result.cards.length;
								}
								if (event.targets.length) event.goto(5);
								('step 7');
								if (event.gained > 1) player.loseHp();
							},
							ai: {
								order(item, player) {
									if (
										player.countCards('h', {
											color: 'red',
										}) == 0
									)
										return 10;
									if (
										player.countCards('h', {
											color: 'black',
										}) == 0
									)
										return 10;
									return 1;
								},
								result: {
									player: 1,
								},
							},
						},
						upgrade_huaiyi2: {},
						upgrade_zhuikong: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'phaseZhunbeiBegin',
							},
							check(event, player) {
								if (get.attitude(player, event.player) < -2) {
									var cards = player.getCards('h');
									if (cards.length > player.hp) return true;
									for (var i = 0; i < cards.length; i++) {
										var useful = get.useful(cards[i]);
										if (useful < 5) return true;
										if (cards[i].number > 7 && useful < 7) return true;
									}
								}
								return false;
							},
							logTarget: 'player',
							filter(event, player) {
								return (player.countCards('e') < event.player.countCards('e') || player.hp < event.player.hp || player.hp < player.maxHp) && player.canCompare(event.player);
							},
							content() {
								'step 0';
								player.chooseToCompare(trigger.player).set(
									'small',
									player.hp > 1 &&
									get.effect(
										player,
										{
											name: 'sha',
										},
										trigger.player,
										player
									) > 0 &&
									Math.random() < 0.9
								);
								('step 1');
								if (result.bool) {
									//	trigger.player.addTempSkill('zishou2');
									trigger.player.skip('phaseDraw');
									trigger.player.skip('phaseUse');
									player.draw(Math.min(5, player.maxHp - player.countCards('h')));
									event.finish();
								} else if (result.target && get.position(result.target) == 'd') player.gain(result.target, 'gain2', 'log');
								('step 2');
								var card = {
									name: 'sha',
								};
								if (trigger.player.canUse(card, player, false)) trigger.player.useCard(card, player, false);
							},
						},
						upgrade_qiuyuan: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								target: 'useCardToTarget',
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('upgrade_qiuyuan'), function (card, player, target) {
										return target != player && !_status.event.targets.includes(target) && _status.event.playerx.canUse('sha', target, false);
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return get.effect(target, trigger.card, trigger.player, player) + 0.1;
									})
									.set('targets', trigger.targets)
									.set('playerx', trigger.player);
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									target
										.chooseCard(
											function (card, player) {
												var name = card.name;
												return name != 'sha' && get.type(name) == 'basic';
											},
											'h',
											'交给' + get.translation(player) + '一张不为【杀】的基本牌,或成为此杀的额外目标且不可响应此【杀】'
										)
										.set('ai', function (card) {
											return get.attitude(target, _status.event.sourcex) >= 0 ? 1 : -1;
										})
										.set('sourcex', player);
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.gain(result.cards, event.target, 'give');
								} else {
									if (!event.target.hasSkill('fengyin')) {
										event.target.addTempSkill('fengyin');
									}
									event.target.chooseToDiscard(true, 2, 'he');
									trigger.parent.targets.push(event.target);
									trigger.parent.triggeredTargets2.push(event.target);
									trigger.directHit.push(event.target);
									game.log(event.target, '成为了', trigger.card, '的额外目标');
								}
							},
							ai: {
								expose: 0.2,
								effect: {
									target(card, player, target) {
										if (card.name != 'sha') return;
										var players = game.filterPlayer();
										if (get.attitude(player, target) <= 0) {
											for (var i = 0; i < players.length; i++) {
												var target2 = players[i];
												if (
													player != target2 &&
													target != target2 &&
													player.canUse(card, target2, false) &&
													get.effect(
														target2,
														{
															name: 'shacopy',
															nature: card.nature,
															suit: card.suit,
														},
														player,
														target
													) > 0 &&
													get.effect(
														target2,
														{
															name: 'shacopy',
															nature: card.nature,
															suit: card.suit,
														},
														player,
														player
													) < 0
												) {
													if (target.hp == target.maxHp) return 0.3;
													return 0.6;
												}
											}
										} else {
											for (var i = 0; i < players.length; i++) {
												var target2 = players[i];
												if (
													player != target2 &&
													target != target2 &&
													player.canUse(card, target2, false) &&
													get.effect(
														target2,
														{
															name: 'shacopy',
															nature: card.nature,
															suit: card.suit,
														},
														player,
														player
													) > 0
												) {
													if (player.canUse(card, target2)) return;
													if (target.hp == target.maxHp) return [0, 1];
													return [0, 0];
												}
											}
										}
									},
								},
							},
						},
						upgrade_enyuan: {
							audio: 'ext:蒸蒸日上/audio:2',
							group: ['reenyuan1', 'reenyuan2'],
						},
						upgrade_enyuan1: {
							audio: 'reenyuan',
							trigger: {
								player: 'gainEnd',
							},
							filter(event, player) {
								if (!event.source || event.source == player || !event.source.isIn()) return false;
								var evt = event.getl(event.source);
								return evt && evt.cards2 && evt.cards2.length > 1;
							},
							check(event, player) {
								return get.attitude(player, event.source) > 0;
							},
							logTarget: 'source',
							prompt2: '令该角色摸一张牌',
							content() {
								trigger.source.draw();
							},
						},
						upgrade_enyuan2: {
							audio: 'reenyuan',
							trigger: {
								player: 'damageEnd',
							},
							logTarget: 'source',
							filter(event, player) {
								return event.source && event.source != player && event.source.isAlive();
							},
							check(event, player) {
								var att = get.attitude(player, event.source);
								var num = event.source.countCards('h');
								if (att <= 0) return true;
								if (num > 2) return true;
								if (num > 0) return att < 4;
								return false;
							},
							prompt2: '令该角色选择一项:①失去1点体力.②交给你一张手牌.若此牌不为♥️️,则你摸一张牌.',
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								('step 1');
								var target = trigger.source;
								event.count--;
								if (!target.countCards('h'))
									event._result = {
										bool: false,
									};
								else
									target.chooseCard('h', '恩怨:将一张手牌交给' + get.translation(player) + ',或失去1点体力').set('ai', function (card) {
										if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
											if (card.suit != 'heart') return 15 - get.value(card);
											return 11 - get.value(card);
										} else {
											var num = 12 - _status.event.player.hp * 2;
											if (card.suit != 'heart') num -= 2;
											return num - get.value(card);
										}
									});
								('step 2');
								var target = trigger.source;
								if (result.bool) {
									var card = result.cards[0];
									event.card = card;
									player.gain(card, target, 'giveAuto');
								} else {
									target.loseHp();
									event.goto(4);
								}
								('step 3');
								if (card.suit != 'heart') player.draw();
								('step 4');
								var target = trigger.source;
								if (target.isAlive() && event.count > 0)
									player.chooseBool(get.prompt('reenyuan', target), '令该角色选择一项:①失去1点体力.②交给你一张手牌.若此牌不为♥️️,则你摸一张牌.').set('ai', function () {
										var evt = _status.event.getTrigger();
										return lib.skill.reenyuan2.check(evt, evt.player);
									});
								else event.finish();
								('step 5');
								if (result.bool) {
									event.goto(1);
								}
							},
						},
						upgrade_xuanhuo: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseDrawEnd',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') > 1 && game.countPlayer() > 2;
							},
							content() {
								'step 0';
								var ai2 = function (target) {
									var player = _status.event.player;
									if (get.attitude(player, target) <= 0) return 0;
									var list = [null, 'juedou'].concat(lib.inpile_nature);
									if (target.hasSkill('ayato_zenshen')) list.push('kami');
									var num = Math.max.apply(
										Math,
										list.map(function (i) {
											if (i == 'juedou')
												return target.getUseValue(
													{
														name: 'juedou',
													},
													false
												);
											var card = {
												name: 'sha',
												nature: i,
											};
											return target.getUseValue(card, false);
										})
									);
									if (target.hasSkillTag('nogain')) num /= 4;
									return num;
								};
								player.chooseCardTarget({
									prompt: get.prompt2('rexuanhuo'),
									filterCard: true,
									selectCard: 2,
									position: 'h',
									filterTarget: lib.filter.notMe,
									goon: game.hasPlayer(function (current) {
										return current != player && ai2(player, current) > 0;
									}),
									ai1(card) {
										if (!_status.event.goon) return 0;
										return 7 - get.value(card);
									},
									ai2: ai2,
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									target.gain(result.cards, player, 'giveAuto');
								} else event.finish();
								('step 2');
								if (
									game.hasPlayer(function (current) {
										return current != player && current != target;
									})
								)
									player
										.chooseTarget(
											function (card, player, target) {
												return target != player && target != _status.event.target;
											},
											'选择' + get.translation(target) + '使用【杀】或【决斗】的目标',
											true
										)
										.set('target', target)
										.set('ai', function (target) {
											var evt = _status.event;
											var list = [null, 'juedou'].concat(lib.inpile_nature);
											if (evt.target.hasSkill('ayato_zenshen')) list.push('kami');
											return Math.max.apply(
												Math,
												list.map(function (i) {
													var card = {
														name: 'sha',
													};
													if (i == 'juedou') card.name = 'juedou';
													else if (i) card.nature = i;
													if (!evt.target.canUse(card, target, false)) return 0;
													return get.effect(target, card, evt.target, evt.player);
												})
											);
										});
								else event.finish();
								('step 3');
								var target2 = result.targets[0];
								event.target2 = target2;
								player.line(target2);
								game.log(player, '选择了', target2);
								var list = lib.inpile_nature.slice(0);
								list.unshift(null);
								var vcards = [];
								if (target.hasSkill('ayato_zenshen')) list.add('kami');
								for (var i of list) {
									if (
										target.canUse(
											{
												name: 'sha',
												nature: i,
											},
											target2,
											false
										)
									)
										vcards.push(['基本', '', 'sha', i]);
								}
								if (
									target.canUse(
										{
											name: 'juedou',
										},
										target2,
										false
									)
								)
									vcards.push(['基本', '', 'juedou']);
								if (!vcards.length) {
									if (!target.countCards('h')) event.finish();
									else
										event._result = {
											index: 1,
										};
								} else if (!target.countCards('h')) {
									event.vcards = vcards;
									event._result = {
										index: 0,
									};
								} else {
									event.vcards = vcards;
									target.chooseControl().set('choiceList', ['视为对' + get.translation(target2) + '使用任意一种【杀】或【决斗】', '将所有手牌交给' + get.translation(player)]);
								}
								('step 4');
								if (result.index == 0) {
									if (event.vcards.length == 1)
										event._result = {
											links: event.vcards,
											bool: true,
										};
									else
										target.chooseButton(['请选择要对' + get.translation(event.target2) + '使用的牌', [event.vcards, 'vcard']], true).set('ai', function (button) {
											var player = _status.event.player;
											return get.effect(
												_status.event.parent.target2,
												{
													name: button.link[2],
													nature: button.link[3],
												},
												player,
												player
											);
										});
								} else {
									player.gain(target.getCards('h'), target, 'giveAuto');
									event.finish();
								}
								('step 5');
								if (result.bool)
									target.useCard(
										{
											name: result.links[0][2],
											nature: result.links[0][3],
										},
										false,
										event.target2
									);
							},
							ai: {
								expose: 0.17,
								fireAttack: true,
								skillTagFilter(player) {
									return player.hasFriend();
								},
							},
						},
						upgrade_decadezongshi: {
							audio: 'ext:蒸蒸日上/audio:2',
							mod: {
								maxHandcard(player, num) {
									return num + game.countGroup();
								},
							},
							trigger: {
								target: 'useCardToTargeted',
							},
							forced: true,
							filter(event, player) {
								return player != _status.currentPhase && player.countCards('h') >= player.getHandcardLimit() && (get.type(event.card) == 'delay' || get.color(event.card) == 'nocolor');
							},
							content() {
								trigger.excluded.add(player);
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (target != _status.currentPhase && target.countCards('h') >= target.getHandcardLimit() && (get.type(card) == 'delay' || get.color(card) == 'nocolor')) return 'zerotarget';
									},
								},
							},
						},
						upgrade_decadezishou: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'rezishou',
							group: 'decadezishou_zhiheng',
							ai: {
								threaten: 1.8,
							},
						},
						upgrade_decadezishou_zhiheng: {
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							filter(event, player) {
								return (
									player.countCards('h') > 0 &&
									!player.getHistory('useCard', function (evt) {
										return evt.targets.filter(function (target) {
											return target != player;
										}).length;
									}).length
								);
							},
							content() {
								'step 0';
								var list = [];
								var hs = player.getCards('h');
								for (var i of hs) {
									list.add(i.suit);
								}
								player
									.chooseToDiscard('h', get.prompt('decadezishou'), '弃置任意张花色不同的手牌并摸等量的牌', [1, list.length], function (card, player) {
										if (ui.selected.cards.length) {
											var suit = card.suit;
											for (var i of ui.selected.cards) {
												if (i.suit == suit) return false;
											}
										}
										return true;
									})
									.set('ai', lib.skill.zhiheng.check)
									.set('complexCard', true);
								('step 1');
								if (result.bool) {
									player.draw(result.cards.length);
								}
							},
						},
						upgrade_yongjin: {
							audio: 'ext:蒸蒸日上/audio:2',
							audioname: ['upgrade_lingtong'],
							limited: true,
							enable: 'phaseUse',
							filter(event, player, cards) {
								return game.hasPlayer(function (current) {
									var es = current.getCards('e', function (card) {
										return !cards || !cards.includes(card);
									});
									for (var i = 0; i < es.length; i++) {
										if (
											game.hasPlayer(function (current2) {
												return current != current2 && !current2.isMin() && current2.isEmpty(get.subtype(es[i]));
											})
										) {
											return true;
										}
									}
								});
							},
							content() {
								'step 0';
								player.awakenSkill('yongjin');
								event.count = 3;
								event.cards = [];
								('step 1');
								event.count--;
								if (!lib.skill.yongjin.filter(null, player, cards)) {
									event.finish();
									return;
								}
								var next = player.chooseTarget(2, function (card, player, target) {
									if (ui.selected.targets.length) {
										var from = ui.selected.targets[0];
										if (target.isMin()) return false;
										var es = from.getCards('e', function (card) {
											return !_status.event.cards.includes(card);
										});
										for (var i = 0; i < es.length; i++) {
											if (target.isEmpty(get.subtype(es[i]))) return true;
										}
										return false;
									} else {
										return (
											target.countCards('e', function (card) {
												return !_status.event.cards.includes(card);
											}) > 0
										);
									}
								});
								next.set('ai', function (target) {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									var sgnatt = get.sgn(att);
									if (ui.selected.targets.length == 0) {
										if (target == player && player.hasSkill('decadexuanfeng')) {
											if (
												player.countCards('e', function (card) {
													return (
														!_status.event.cards.includes(card) &&
														game.hasPlayer(function (current) {
															return current != target && current.isEmpty(get.subtype(card)) && get.effect(current, card, player, player) < 0;
														})
													);
												}) > 0
											)
												return 18;
											return 7;
										} else if (att > 0) {
											if (
												target.countCards('e', function (card) {
													return (
														get.value(card, target) < 0 &&
														!_status.event.cards.includes(card) &&
														game.hasPlayer(function (current) {
															return current != target && current.isEmpty(get.subtype(card)) && get.effect(current, card, player, player) < 0;
														})
													);
												}) > 0
											)
												return 9;
										} else if (att < 0) {
											if (
												game.hasPlayer(function (current) {
													if (current != target && get.attitude(player, current) > 0) {
														var es = target.getCards('e', function (card) {
															return !_status.event.cards.includes(card);
														});
														for (var i = 0; i < es.length; i++) {
															if (get.value(es[i], target) > 0 && current.isEmpty(get.subtype(es[i])) && get.effect(current, es[i], player, current) > 0) return true;
														}
													}
												})
											) {
												return -att;
											}
										}
										return 0;
									}
									var es = ui.selected.targets[0].getCards('e', function (card) {
										return !_status.event.cards.includes(card);
									});
									var i;
									var att2 = get.sgn(get.attitude(player, ui.selected.targets[0]));
									for (var i = 0; i < es.length; i++) {
										if (ui.selected.targets[0] == player && player.hasSkill('decadexuanfeng')) {
											var bool = game.hasPlayer(function (current) {
												return get.attitude(player, current) < 0 && current.countDiscardableCards(player, 'he') > 0 && get.damageEffect(current, player, player) > 0;
											});
											if (
												bool &&
												player.countCards('e', function (card) {
													return !_status.event.cards.includes(card) && target.isEmpty(get.subtype(card)) && get.effect(target, card, player, player) > 0;
												})
											)
												return 2.5 * Math.abs(att);
											else if (bool) return 1 / Math.max(1, Math.abs(att));
											else return get.damageEffect(target, player, player);
										}
										if (sgnatt != 0 && att2 != 0 && sgnatt != att2 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.effect(target, es[i], player, target)) == sgnatt && target.isEmpty(get.subtype(es[i]))) {
											return Math.abs(att);
										}
									}
									if (i == es.length) {
										return 0;
									}
									return -att * get.attitude(player, ui.selected.targets[0]);
								});
								next.set('multitarget', true);
								next.set('cards', cards);
								next.set('targetprompt', ['被移走', '移动目标']);
								next.set('prompt', '移动场上的一张装备牌');
								('step 2');
								if (result.bool) {
									player.line2(result.targets, 'green');
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 3');
								('step 4');
								if (targets.length == 2) {
									player
										.choosePlayerCard(
											'e',
											true,
											function (button) {
												var player = _status.event.player;
												var targets0 = _status.event.targets0;
												var targets1 = _status.event.targets1;
												if (get.attitude(player, targets0) > 0 && get.attitude(player, targets1) < 0) {
													if (get.value(button.link, targets0) < 0 && get.effect(targets1, button.link, player, targets1) > 0) return 10;
													return 0;
												} else {
													return get.value(button.link) * get.effect(targets1, button.link, player, player);
												}
											},
											targets[0]
										)
										.set('nojudge', event.nojudge || false)
										.set('targets0', targets[0])
										.set('targets1', targets[1])
										.set('filterButton', function (button) {
											if (_status.event.cards.includes(button.link)) return false;
											var targets1 = _status.event.targets1;
											return targets1.isEmpty(get.subtype(button.link));
										})
										.set('cards', cards);
								} else {
									event.finish();
								}
								('step 5');
								if (result.bool && result.links.length) {
									var link = result.links[0];
									cards.add(link);
									event.targets[1].equip(link);
									event.targets[0].$give(link, event.targets[1]);
								} else event.finish();
								('step 6');
								if (event.count > 0) event.goto(1);
							},
							ai: {
								order: 7,
								result: {
									player(player) {
										var num = 0;
										var friends = game.filterPlayer(function (current) {
											return get.attitude(player, current) >= 4;
										});
										var vacancies = {
											equip1: 0,
											equip2: 0,
											equip3: 0,
											equip4: 0,
											equip5: 0,
										};
										for (var i = 0; i < friends.length; i++) {
											for (var j = 1; j <= 5; j++) {
												if (friends[i].isEmpty(j)) {
													vacancies['equip' + j]++;
												}
											}
										}
										var sources = game.filterPlayer(function (current) {
											return ((current == player && current.hasSkill('decadexuanfeng')) || get.attitude(player, current) < 0) && current.countCards('e');
										});
										for (var i = 0; i < sources.length; i++) {
											var es = sources[i].getCards('e');
											for (var j = 0; j < es.length; j++) {
												var type = get.subtype(es[j]);
												if (sources[i] == player || (vacancies[type] > 0 && get.value(es[j]) > 0)) {
													num++;
													if (
														sources[i] == player &&
														vacancies[type] &&
														game.hasPlayer(function (current) {
															return get.attitude(player, current) < 0 && current.countDiscardableCards(player, 'he') > 0 && get.damageEffect(current, player, player) > 0;
														})
													)
														num += 0.5;
													if (num >= 3) {
														return 1;
													}
													vacancies[type]--;
												}
											}
										}
										if (num && player.hp == 1) {
											return 0.5;
										}
										return 0;
									},
								},
							},
						},
						upgrade_decadexuanfeng: {
							audio: 'xuanfeng',
							audioname: ['boss_lvbu3', 're_heqi', 'upgrade_lingtong'],
							trigger: {
								player: ['loseAfter', 'phaseDiscardEnd'],
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
							},
							forced: true,
							filter(event, player) {
								if (_status.dying.length) return false;
								if (event.name == 'phaseDiscard') {
									var cards = [];
									player.getHistory('lose', function (evt) {
										if (evt && evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs) cards.addArray(evt.hs);
									});
									return cards.length > 1;
								} else {
									var evt = event.getl(player);
									return evt && evt.es && evt.es.length;
								}
							},
							content() {
								'step 0';
								event.count = 2;
								event.targets = [];
								('step 1');
								event.count--;
								player
									.chooseTarget(get.prompt('decadexuanfeng'), '弃置一名其他角色的一张牌', function (card, player, target) {
										if (player == target) return false;
										return target.countDiscardableCards(player, 'he');
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 2');
								if (result.bool) {
									player.line(result.targets[0], 'green');
									targets.add(result.targets[0]);
									player.discardPlayerCard(result.targets[0], 'he', true);
								} else if (!targets.length) event.finish();
								('step 3');
								if (event.count) event.goto(1);
								else if (player == _status.currentPhase) {
									player
										.chooseTarget('是否对一名目标角色造成1点伤害', function (card, player, target) {
											return _status.event.targets.includes(target);
										})
										.set('targets', targets)
										.set('ai', function (target) {
											var player = _status.event.player;
											return get.damageEffect(target, player, player);
										});
								} else event.finish();
								('step 4');
								if (result.bool) {
									player.line(result.targets[0], 'thunder');
									result.targets[0].damage();
								}
							},
							ai: {
								effect: {
									player_use(card, player, target) {
										if (
											player == target &&
											get.type(card) == 'equip' &&
											player.countCards('hes', function (cardx) {
												return card != cardx && (!card.cards || !card.cards.includes(cardx)) && (player.hasSkill('yongjin') || get.subtype(card) == get.subtype(cardx)) && (get.position(cardx) == 'e' || player.canUse(cardx, player));
											}) > 0
										)
											return;
										if (
											!game.hasPlayer(function (current) {
												return get.attitude(player, current) < 0 && current.countDiscardableCards(player, 'he') > 0 && get.damageEffect(current, player, player) > 0;
											})
										)
											return;
										if (
											typeof card == 'object' &&
											player.isPhaseUsing() &&
											player.needsToDiscard() == 2 &&
											card.cards &&
											card.cards.filter(function (i) {
												return get.position(i) == 'h';
											}).length &&
											!get.tag(card, 'draw') &&
											!get.tag(card, 'gain') &&
											!(get.tag(card, 'discard') && target == player && player.countCards('e') > 0)
										)
											return 'zeroplayertarget';
									},
									target(card, player, target, current) {
										if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
										if (get.tag(card, 'damage') && target.hp > 2) {
											var num1 = target.countCards('h'),
												num2 = target.getHandcardLimit();
											if (num1 > num2) return [1, 1];
											if (num1 == num2) return [1.1, _status.event.player == target ? 3 : 0.5];
											if (num1 == num2 - 1) return [0.1, _status.event.player == target ? 4.5 : 0.1];
										}
										if (typeof card == 'object' && (card.name == 'shunshou' || card.name == 'guohe' || card.name == 'zhujinqiyuan') && target.countCards('h') > 0 && get.attitude(player, target) < 0) return [1, -1];
									},
								},
								reverseEquip: true,
								noe: true,
								expose: 0.2,
							},
						},
						upgrade_junxing: {
							enable: 'phaseUse',
							audio: 'ext:蒸蒸日上/audio:2',
							usable: 1,
							filterCard: true,
							selectCard: [1, Infinity],
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							check(card) {
								if (ui.selected.cards.length) return -1;
								return 6 - get.value(card);
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								target.chooseToDiscard(cards.length, '弃置' + get.cnNumber(cards.length) + '张手牌并失去1点体力,或点取消将武将牌翻面并摸' + get.cnNumber(cards.length) + '张牌').set('ai', function (card) {
									var player = _status.event.player;
									if (player.isTurnedOver()) return -1;
									return player.hp * player.hp - get.value(card);
								});
								('step 1');
								if (!result.bool) {
									target.turnOver();
									target.draw(cards.length);
								} else target.loseHp();
							},
							ai: {
								order: 2,
								expose: 0.3,
								threaten: 1.8,
								result: {
									target(player, target) {
										if (target.hasSkillTag('noturn')) return 0;
										if (target.isTurnedOver()) return 2;
										return -1 / (target.countCards('h') + 1);
									},
								},
							},
						},
						//吴懿不在此地
						upgrade_benxi: {
							group: ['upgrade_benxi_summer', 'upgrade_benxi_damage'],
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'useCard2',
							},
							forced: true,
							mod: {
								globalFrom(from, to, distance) {
									if (_status.currentPhase == from) {
										return distance - from.storage.upgrade_benxi;
									}
								},
								wuxieRespondable(card, player, target, current) {
									if (player != current && player.storage.upgrade_benxi_directHit.includes(card)) {
										return false;
									}
								},
							},
							init(player) {
								player.storage.upgrade_benxi_directHit = [];
								player.storage.upgrade_benxi_damage = [];
								player.storage.upgrade_benxi_unequip = [];
								player.storage.upgrade_benxi = 0;
							},
							filter(trigger, player) {
								return (
									_status.currentPhase == player &&
									trigger.targets &&
									trigger.targets.length == 1 &&
									(trigger.card.name == 'sha' || get.type(trigger.card) == 'trick') &&
									!game.hasPlayer(function (current) {
										return get.distance(player, current) > 1;
									})
								);
							},
							filterx(event, player) {
								var info = get.info(event.card);
								if (info.allowMultiple == false) return false;
								if (event.targets && !info.multitarget) {
									if (
										game.hasPlayer(function (current) {
											return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
										})
									) {
										return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								event.videoId = lib.status.videoId++;
								var func = function (card, id, bool) {
									var list = [
										//			var mb=;
										'为XXX多指定' + get.translation(Math.min(3, Math.floor(game.players.length / 3))) + '个目标',
										'令XXX无视防具',
										'令XXX不可被抵消',
										'当XXX造成伤害时摸等量的牌',
									];
									var choiceList = ui.create.dialog('【奔袭】:请选择一至两项', 'forcebutton');
									choiceList.videoId = id;
									for (var i = 0; i < list.length; i++) {
										list[i] = list[i].replace(/XXX/g, card);
										var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
										if (i == 0 && !bool) str += '<div style="opacity:0.5">';
										str += list[i];
										if (i == 0 && !bool) str += '</div>';
										str += '</div>';
										var next = choiceList.add(str);
										next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
										next.firstChild.link = i;
										Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
										choiceList.buttons.add(next.firstChild);
									}
									return choiceList;
								};
								if (player.isOnline2()) {
									player.send(func, get.translation(trigger.card), event.videoId, lib.skill.upgrade_benxi.filterx(trigger, player));
								}
								event.dialog = func(get.translation(trigger.card), event.videoId, lib.skill.upgrade_benxi.filterx(trigger, player));
								if (player != game.me || _status.auto) {
									event.dialog.style.display = 'none';
								}
								var next = player.chooseButton();
								next.set('dialog', event.videoId);
								next.set('forced', true);
								next.set('selectButton', [1, 2]);
								next.set('filterButton', function (button) {
									if (button.link == 0) {
										return _status.event.bool1;
									}
									return true;
								});
								next.set('bool1', lib.skill.upgrade_benxi.filterx(trigger, player));
								next.set('ai', function (button) {
									var player = _status.event.player;
									var event = _status.event.getTrigger();
									switch (button.link) {
										case 0: {
											if (
												game.hasPlayer(function (current) {
													return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current) && get.effect(current, event.card, player, player) > 0;
												})
											)
												return 1.6 + Math.random();
											return 0;
										}
										case 1: {
											if (
												event.targets.filter(function (current) {
													var eff1 = get.effect(current, event.card, player, player);
													player._upgrade_benxi_ai = true;
													var eff2 = get.effect(current, event.card, player, player);
													delete player._upgrade_benxi_ai;
													return eff1 > eff2;
												}).length
											)
												return 1.9 + Math.random();
											return Math.random();
										}
										case 2: {
											var num = 1.3;
											if (
												event.card.name == 'sha' &&
												event.targets.filter(function (current) {
													if (current.mayHaveShan() && get.attitude(player, current) <= 0) {
														if (current.hasSkillTag('useShan')) num = 1.9;
														return true;
													}
													return false;
												}).length
											)
												return num + Math.random();
											return 0.5 + Math.random();
										}
										case 3: {
											return (get.tag(event.card, 'damage') || 0) + Math.random();
										}
									}
								});
								('step 1');
								if (player.isOnline2()) {
									player.send('closeDialog', event.videoId);
								}
								event.dialog.close();
								var map = [
									function (trigger, player, event) {
										var rs = Math.min(3, Math.floor(game.players.length / 3));
										player
											.chooseTarget([1, rs], '请选择' + get.translation(trigger.card) + '的额外目标', true, function (card, player, target) {
												var player = _status.event.player;
												if (_status.event.targets.includes(target)) return false;
												return lib.filter.targetEnabled2(_status.event.card, player, target);
											})
											.set('targets', trigger.targets)
											.set('card', trigger.card)
											.set('ai', function (target) {
												var trigger = _status.event.getTrigger();
												var player = _status.event.player;
												return get.effect(target, trigger.card, player, player);
											});
									},
									function (trigger, player, event) {
										player.storage.upgrade_benxi_unequip.add(trigger.card);
									},
									function (trigger, player, event) {
										player.storage.upgrade_benxi_directHit.add(trigger.card);
										trigger.nowuxie = true;
										trigger.customArgs.default.directHit2 = true;
									},
									function (trigger, player, event) {
										player.storage.upgrade_benxi_damage.add(trigger.card);
									},
								];
								for (var i of result.links) {
									game.log(player, '选择了', '#g【奔袭】', '的', '#y选项' + get.cnNumber(i + 1, true));
									map[i](trigger, player, event);
								}
								if (!result.links.includes(0)) event.finish();
								('step 2');
								if (result.targets) {
									player.line(result.targets);
									trigger.targets.addArray(result.targets);
								}
							},
							ai: {
								unequip: true,
								unequip: true,
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'unequip') {
										if (arg && player.storage.upgrade_benxi_unequip.includes(arg.card)) return true;
										return false;
									}
									if (
										_status.currentPhase != player ||
										game.hasPlayer(function (current) {
											return get.distance(player, current) > 1;
										})
									)
										return false;
									if (tag == 'directHit_ai') return arg.card.name == 'sha';
									if (arg && arg.card.name != 'sha' && arg.card.name != 'chuqibuyi') return false;
									var card = arg.target.getEquip(2);
									if (card && card.name.includes('bagua')) return true;
									if (player._upgrade_benxi_ai) return false;
								},
							},
							subSkill: {
								damage: {
									trigger: {
										global: 'damageBegin1',
									},
									audio: 'ext:蒸蒸日上/audio:2',
									forced: true,
									filter(event, player) {
										return event.card && event.num > 0 && player.storage.upgrade_benxi_damage.includes(event.card);
									},
									content() {
										player.draw(trigger.num);
									},
								},
								summer: {
									trigger: {
										player: ['phaseAfter', 'useCardAfter', 'useCard'],
									},
									silent: true,
									filter(event, player) {
										return player == _status.currentPhase;
									},
									content() {
										if (trigger.name == 'phase') {
											player.storage.upgrade_benxi = 0;
											return;
										} else if (event.triggername == 'useCard') {
											player.storage.upgrade_benxi++;
											return;
										} else {
											player.storage.upgrade_benxi_unequip.remove(event.card);
											player.storage.upgrade_benxi_directHit.remove(event.card);
											player.storage.upgrade_benxi_damage.remove(event.card);
										}
									},
								},
							},
						},
						upgrade_juece: {
							audio: 'ext:蒸蒸日上/audio:4',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return (
										current != player &&
										current.getHistory('lose', function (evt) {
											return evt.cards2 && evt.cards2.length;
										}).length
									);
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('upgrade_juece'), '对一名本回合失去过牌的其他角色造成1点伤害,若其没有手牌或体力不大于1,则对其造成2点伤害', function (card, player, target) {
										return _status.event.targets.includes(target);
									})
									.set(
										'targets',
										game.filterPlayer(function (current) {
											return (
												current != player &&
												current.getHistory('lose', function (evt) {
													return evt.cards2 && evt.cards2.length;
												}).length
											);
										})
									)
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									if (target.countCards('h') == 0 || target.hp <= 1) {
										target.damage(2);
									} else {
										target.damage();
									}
								}
							},
						},
						upgrade_GSwusheng: {
							audio: 'ext:蒸蒸日上/audio:true',
							inherit: 'new_rewusheng',
						},
						upgrade_GSdangxian: {
							audio: 'ext:蒸蒸日上/audio:true',
							inherit: 'dangxian',
						},
						upgrade_GSzhiman: {
							audio: 'ext:蒸蒸日上/audio:true',
							inherit: 'zhiman',
						},
						upgrade_GSyingyuan: {
							audio: 'ext:蒸蒸日上/audio:true',
							inherit: 'xinyingyuan',
						},
						upgrade_GSbenxi: {
							audio: 'ext:蒸蒸日上/audio:true',
							inherit: 'benxi',
						},
						upgrade_zhengnan: {
							derivation: ['upgrade_GSwusheng', 'upgrade_GSdangxian', 'upgrade_GSzhiman', 'upgrade_GSyingyuan', 'upgrade_GSbenxi'],
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'dying',
							},
							forced: true,
							content() {
								'step 0';
								if (player.countCards('h') < 9) {
									player.draw(3);
								} else {
									player.draw();
								}
								var list = [];
								if (!player.hasSkill('upgrade_GSwusheng')) {
									list.push('upgrade_GSwusheng');
								}
								if (!player.hasSkill('upgrade_GSdangxian')) {
									list.push('upgrade_GSdangxian');
								}
								if (!player.hasSkill('upgrade_GSzhiman')) {
									list.push('upgrade_GSzhiman');
								}
								if (!player.hasSkill('upgrade_GSyingyuan')) {
									list.push('upgrade_GSyingyuan');
								}
								if (!player.hasSkill('upgrade_GSbenxi')) {
									list.push('upgrade_GSbenxi');
								}
								if (list.length) {
									player.chooseControl(list).set('prompt', '选择获得一项技能');
								}
								('step 1');
								player.addSkill(result.control);
								player.popup(result.control);
								game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
							},
							ai: {
								threaten: 4.3,
							},
							derivation: ['wusheng', 'dangxian', 'zhiman'],
						},
						upgrade_xiefang: {
							inherit: 'xiefang',
						},
						upgrade_fencheng: {
							audio: 'ext:蒸蒸日上/audio:4',
							audioname: ['re_liru'],
							enable: 'phaseUse',
							filter(event, player) {
								return !player.storage.upgrade_fencheng;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							limited: true,
							selectTarget: -1,
							multitarget: true,
							multiline: true,
							mark: true,
							line: 'fire',
							content() {
								'step 0';
								player.storage.upgrade_fencheng = true;
								player.awakenSkill('upgrade_fencheng');
								if (!player.hasSkill('upgrade_fencheng2')) player.addTempSkill('upgrade_fencheng2');
								event.num = 1;
								event.targets = targets.slice(0);
								event.targets.sort(lib.sort.seat);
								('step 1');
								if (event.targets.length) {
									var target = event.targets.shift();
									event.target = target;
									var res = get.damageEffect(target, player, target, 'fire');
									target
										.chooseToDiscard('he', '弃置至少' + get.cnNumber(event.num) + '张牌或受到2点火焰伤害', [num, Infinity])
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
									event.target.damage(2, 'fire');
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
											eff = 0,
											players = game
												.filterPlayer(function (current) {
													return current != player;
												})
												.sortBySeat(player);
										for (var target of players) {
											if (get.damageEffect(target, player, target, 'fire') >= 0) {
												num = 0;
												continue;
											}
											var shao = false;
											num++;
											if (
												target.countCards('he', function (card) {
													if (get.type(card) != 'basic') {
														return get.value(card) < 10;
													}
													return get.value(card) < 8;
												}) < num
											)
												shao = true;
											if (shao) {
												eff -= 4 * (get.realAttitude || get.attitude)(player, target);
												num = 0;
											} else eff -= (num * (get.realAttitude || get.attitude)(player, target)) / 4;
										}
										if (eff < 4) return 0;
										return eff;
									},
								},
							},
							init(player) {
								player.storage.upgrade_fencheng = false;
							},
							intro: {
								content: 'limited',
							},
						},
						upgrade_fencheng2: {
							audio: 'ext:蒸蒸日上/audio:true',
							trigger: {
								global: 'dieEnd',
							},
							forced: true,
							silent: true,
							filter(event, player) {
								return event.source && event.source == player && player.storage.upgrade_fencheng && player == _status.currentPhase && player.awakenedSkills.includes('upgrade_fencheng');
							},
							content() {
								player.storage.fencheng = false;
								player.restoreSkill('upgrade_fencheng');
								game.log(player, '技能', '#g【焚城】', '复原');
								player.update();
							},
						},
						upgrade_mieji: {
							audio: 'ext:蒸蒸日上/audio:4',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h', {
									type: ['trick', 'delay'],
									color: 'black',
								});
							},
							filterCard(card) {
								return get.color(card) == 'black' && get.type(card, 'trick') == 'trick';
							},
							filterTarget(card, player, target) {
								return target != player && target.countCards('he') > 0;
							},
							discard: false,
							delay: false,
							loseTo: 'cardPile',
							insert: true,
							visible: true,
							check(card) {
								return 8 - get.value(card);
							},
							content() {
								'step 0';
								player.showCards(cards);
								('step 1');
								if (
									!target.countCards('he', function (card) {
										if (get.type2(card) == 'trick') return true;
										return lib.filter.cardDiscardable(card, target, 'upgrade_mieji');
									})
								)
									event.finish();
								else
									target
										.chooseCard('he', true, function (card, player) {
											if (get.type2(card) == 'trick') return true;
											return lib.filter.cardDiscardable(card, player, 'upgrade_mieji');
										})
										.set('prompt', '选择交给' + get.translation(player) + '一张锦囊牌,或依次弃置3张非锦囊牌.');
								('step 2');
								if (result.cards && result.cards.length) {
									if (get.type2(result.cards[0]) == 'trick') {
										player.gain(result.cards, target, 'giveAuto');
										event.finish();
									} else target.discard(result.cards);
								} else event.finish();
								('step 3');
								if (
									target.countCards('he', function (card) {
										return get.type2(card) != 'trick';
									})
								)
									target.chooseToDiscard('he', true, function (card) {
										return get.type2(card) != 'trick';
									});
								target.chooseToDiscard('he', true, function (card) {
									return get.type2(card) != 'trick';
								});
							},
							ai: {
								order: 9,
								result: {
									target: -2,
								},
							},
						},
						upgrade_xinzhan: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								var xzmp = game.countGroup();
								var cards = get.cards(xzmp * 4);
								event.cards = cards;
								var next = player.chooseCardButton(cards, '选择获得的♥️️牌', [1, Infinity]).set('filterButton', function (button) {
									return button.link.suit == 'heart';
								});
								('step 1');
								if (result.bool) {
									player.gain(result.links);
									player.$draw(result.links);
								}
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQQ
										if (!result.bool || !result.links.includes(i)) {
											ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
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
						upgrade_huilei: {
							audio: 'huilei',
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
								'step 0';
								trigger.source.discard(trigger.source.getCards('he'));
								trigger.source.loseMaxHp(Math.ceil(trigger.source.maxHp / 2));
								('step 1');
								trigger.source.turnOver();
							},
							ai: {
								threaten: 0.1,
							},
						},
						upgrade_decadelihuo: {
							trigger: {
								player: 'useCard1',
							},
							filter(event, player) {
								if (event.card.name == 'sha' && !event.card.nature) return true;
								return false;
							},
							audio: 'lihuo',
							prompt2(event) {
								return '将' + get.translation(event.card) + '改为火属性';
							},
							audioname: ['re_chengpu'],
							check(event, player) {
								return (
									event.baseDamage > 1 &&
									game.hasPlayer(function (current) {
										return (
											!event.targets.includes(current) &&
											player.canUse(event.card, current) &&
											get.attitude(player, current) < 0 &&
											!current.hasShan() &&
											get.effect(
												current,
												{
													name: 'sha',
													nature: 'fire',
												},
												player,
												player
											) > 0
										);
									})
								);
							},
							content() {
								trigger.card.nature = 'fire';
							},
							group: ['decadelihuo2', 'decadelihuo3'],
							ai: {
								fireAttack: true,
							},
						},
						upgrade_decadelihuo2: {
							trigger: {
								player: 'useCard2',
							},
							filter(event, player) {
								if (event.card.name != 'sha' || event.card.nature != 'fire') return false;
								return game.hasPlayer(function (current) {
									return !event.targets.includes(current) && player.canUse(event.card, current);
								});
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('decadelihuo'), '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
										return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
									})
									.set('sourcex', trigger.targets)
									.set('card', trigger.card)
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.effect(target, _status.event.card, player, player);
									});
								('step 1');
								if (result.bool) {
									if (!event.isMine() && !_status.connectMode) game.delayx();
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								trigger.targets.push(event.target);
							},
						},
						upgrade_decadelihuo3: {
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								return (
									event.card.name == 'sha' &&
									event.card.nature == 'fire' &&
									event.targets.length > 1 &&
									player.getHistory('sourceDamage', function (evt) {
										return evt.card == event.card;
									}).length
								);
							},
							forced: true,
							audio: 'lihuo',
							audioname: ['re_chengpu'],
							content() {
								player.loseHp();
							},
						},
						upgrade_tongxin: {
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							forced: true,
							filter(event, player) {
								return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0);
							},
							audio: 'ext:蒸蒸日上/audio:1',
							content() {
								'step 0';
								player
									.chooseTarget('请选择【同心】的目标', lib.translate.upgrade_tongxin_info, true, function (card, player, target) {
										return target != player && target.sex != 'female' && (!player.storage.upgrade_tongxin2 || !player.storage.upgrade_tongxin2.includes(target));
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att > 0) return att + 1;
										if (att == 0) return Math.random();
										return att;
									}).animate = false;
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									if (!player.storage.upgrade_tongxin2) player.storage.upgrade_tongxin2 = [];
									player.storage.upgrade_tongxin2.push(target);
									player.addSkill('upgrade_tongxin2');
								}
							},
						},
						upgrade_tongxin_mark: {
							marktext: '同',
							intro: {
								name: '同心',
								content: '当你摸牌阶段摸牌后,$摸等量的牌.当$摸牌阶段摸牌后,你摸等量的牌',
							},
						},
						upgrade_tongxin2: {
							audio: 'upgrade_tongxin',
							charlotte: true,
							trigger: {
								global: ['phaseDrawEnd'],
							},
							forced: true,
							filter(event, player) {
								if (event.player != player && (player.storage.upgrade_tongxin2[0].isDead() || event.player.isDead() || !player.storage.upgrade_tongxin2 || !player.storage.upgrade_tongxin2.includes(event.player) || event.num <= 0)) return false;
								//	if(event.name=='damage') return true;
								return true;
							},
							//	logTarget:'player',
							content() {
								'step 0';
								var target = player;
								if (!target.storage.upgrade_tongxin_mark) target.storage.upgrade_tongxin_mark = [];
								target.storage.upgrade_tongxin_mark.add(trigger.player);
								target.storage.upgrade_tongxin_mark.sortBySeat();
								target.markSkill('upgrade_tongxin_mark');
								var target2 = player.storage.upgrade_tongxin2[0];
								if (!target2.storage.upgrade_tongxin_mark) target2.storage.upgrade_tongxin_mark = [];
								target2.storage.upgrade_tongxin_mark.add(player);
								target2.storage.upgrade_tongxin_mark.sortBySeat();
								target2.markSkill('upgrade_tongxin_mark');
								('step 1');
								if (trigger.player != player) {
									trigger.player.line(player, 'green');
									player.draw(Math.min(5, trigger.num));
								} else {
									var target = player.storage.upgrade_tongxin2[0];
									player.line(target, 'green');
									target.draw(Math.min(5, trigger.num));
								}
							},
							onremove(player) {
								if (!player.storage.upgrade_tongxin2) return;
								game.countPlayer(function (current) {
									if (player.storage.upgrade_tongxin2.includes(current) && current.storage.upgrade_tongxin_mark) {
										current.storage.upgrade_tongxin_mark.remove(player);
										if (!current.storage.upgrade_tongxin_mark.length) current.unmarkSkill('upgrade_tongxin_mark');
										else current.markSkill('upgrade_tongxin_mark');
									}
								});
								delete player.storage.upgrade_tongxin2;
							},
							group: 'upgrade_tongxin3',
						},
						upgrade_tongxin3: {
							trigger: {
								global: 'dieBegin',
							},
							silent: true,
							filter(event, player) {
								return event.player == player || (player.storage.upgrade_tongxin2 && player.storage.upgrade_tongxin2.includes(event.player));
							},
							content() {
								if (player == trigger.player) lib.skill.upgrade_tongxin2.onremove(player);
								else player.storage.upgrade_tongxin2.remove(event.player);
								player.removeSkill('upgrade_tongxin2');
								player.loseMaxHp();
							},
						},
						upgrade_tianxiang: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'damageBegin4',
							},
							forced: true,
							filter(event, player) {
								return (
									player.countCards('he', function (card) {
										if (_status.connectMode && get.position(card) == 'h') return true;
										return card.suit == 'heart';
									}) > 0 && event.num > 0
								);
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									filterCard(card, player) {
										return card.suit == 'heart' && lib.filter.cardDiscardable(card, player);
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
									prompt: get.prompt('upgrade_tianxiang'),
									prompt2: lib.translate.upgrade_tianxiang_info,
								});
								('step 1');
								if (result.bool) {
									player.discard(result.cards);
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
											['令' + get.translation(target) + '受到伤害来源对其造成的1点伤害,摸X张牌(X为其已损失体力值且至多为8)', '令' + get.translation(target) + '失去1点体力并弃置2张牌,获得' + get.translation(result.cards)]
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
									event.index = result.index;
									if (result.index) {
										event.related = event.target.loseHp();
										target.discardPlayerCard(target, 2, 'he', true);
									} else {
										event.related = event.target.damage(trigger.source || 'nosource', 'nocard');
									}
								} else event.finish();
								('step 3');
								if (event.related.cancelled || target.isDead()) return;
								if (event.index && card.isInPile()) target.gain(card, 'gain2');
								else if (target.getDamagedHp()) target.draw(Math.min(8, target.getDamagedHp()));
								('step 4');
								if (target.countCards('h') == 1 || target.countCards('h') == target.maxHp) player.draw(2);
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
						upgrade_hongyan: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'olhongyan',
						},
						upgrade_piaoling: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'piaoling',
						},
						upgrade_zhuiyi: {
							audio: 'ext:蒸蒸日上/audio:2',
							//audioname:.re_bulianshi,
							trigger: {
								player: 'die',
							},
							forced: true,
							forceDie: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('zhuiyi'), function (card, player, target) {
										return player != target && _status.event.sourcex != target;
									})
									.set('forceDie', true)
									.set('ai', function (target) {
										var num = get.attitude(_status.event.player, target);
										if (num > 0) {
											if (target.hp == 1) {
												num += 2;
											}
											if (target.hp < target.maxHp) {
												num += 2;
											}
										}
										return num;
									})
									.set('sourcex', trigger.source);
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.draw(3);
									target.gainMaxHp();
									target.recover(2);
								}
							},
							ai: {
								expose: 0.5,
							},
						},
						upgrade_anxu: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return (
									game.countPlayer() > 2 &&
									game.hasPlayer(function (current) {
										return current != player && current.countCards('he');
									})
								);
							},
							selectTarget: 2,
							filterTarget(card, player, target) {
								if (target == player) return false;
								if (!ui.selected.targets.length) return target.countCards('he') > 0;
								return target != ui.selected.targets[0] && ui.selected.targets[0].countGainableCards(target, 'he') > 0;
							},
							multitarget: true,
							targetprompt: ['被拿牌', '得到牌'],
							content() {
								'step 0';
								targets[1].gainPlayerCard(targets[0], 'he', true);
								('step 1');
								if (
									targets[0].getHistory('lose', function (evt) {
										return evt.getParent(3) == event && !evt.es.length;
									}).length
								)
									player.draw(2);
								('step 2');
								if (targets[0].isIn() && targets[1].isIn() && targets[0].countCards('h') != targets[1].countCards('h')) {
									event.target = targets[targets[0].countCards('h') > targets[1].countCards('h') ? 1 : 0];
									player.chooseBool('是否令' + get.translation(event.target) + '摸2张牌？').set('ai', function () {
										var evt = _status.event.parent;
										return get.attitude(evt.player, evt.target) > 0;
									});
								} else event.finish();
								('step 3');
								if (result.bool) target.draw(2);
							},
							ai: {
								expose: 0.2,
								threaten: 2,
								order: 9,
								result: {
									player(player, target) {
										if (ui.selected.targets.length) return 0.01;
										return target.countCards('e') ? 0 : 0.5;
									},
									target(player, target) {
										if (ui.selected.targets.length) {
											player = target;
											target = ui.selected.targets[0];
											if (get.attitude(player, target) > 1) {
												return 0;
											}
											return target.countCards('h') - player.countCards('h') > (target.countCards('e') ? 2 : 1) ? 2 : 1;
										} else {
											if (get.attitude(player, target) <= 0)
												return target.countCards('he', function (card) {
													return card.name == 'tengjia' || get.value(card) > 0;
												}) > 0
													? -1.5
													: 1.5;
											return target.countCards('he', function (card) {
												return card.name != 'tengjia' && get.value(card) <= 0;
											}) > 0
												? 1.5
												: -1.5;
										}
									},
								},
							},
						},
						upgrade_zongshi: {
							audio: 'ext:蒸蒸日上/audio:2',
							mod: {
								maxHandcard(player, num) {
									return num + game.countGroup();
								},
							},
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') > player.hp;
							},
							content() {
								player.addTempSkill('rezongshi_paoxiao');
							},
						},
						upgrade_zongshi_paoxiao: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
							},
						},
						upgrade_baonue: {
							audio: 'ext:蒸蒸日上/audio:2',
							zhuSkill: true,
							inherit: 'olbaonue',
						},
						upgrade_zishou: {
							audio: 'zishou',
							audioname: ['re_liubiao'],
							trigger: {
								player: 'phaseDrawBegin2',
							},
							check(event, player) {
								return (
									player.countCards('h') <= (player.hasSkill('zongshi') ? player.maxHp : player.hp - 2) ||
									player.skipList.includes('phaseUse') ||
									!player.countCards('h', function (card) {
										return get.tag(card, 'damage') && player.hasUseTarget(card);
									})
								);
							},
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								trigger.num += game.countGroup();
								player.addTempSkill('rezishou2');
							},
							ai: {
								threaten: 1.5,
							},
						},
						upgrade_zishou2: {
							audio: 'rezishou',
							trigger: {
								source: 'damageBegin2',
								//player:'phaseJieshuBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'damage') return event.player != player;
								if (player.getHistory('skipped').includes('phaseUse')) return false;
								return (
									player.getHistory('useCard', function (evt) {
										if (evt.targets && evt.targets.length && evt.isPhaseUsing()) {
											var targets = evt.targets.slice(0);
											while (targets.includes(player)) targets.remove(player);
											return targets.length;
										}
										return false;
									}).length == 0
								);
							},
							popup: false,
							content() {
								'step 0';
								if (trigger.name == 'damage') {
									trigger.cancel();
									event.finish();
									return;
								} else {
									var filterTarget = function (card, player, target) {
										return (
											target != player &&
											target.countCards('e', function (card) {
												return player.isEmpty(get.subtype(card));
											})
										);
									};
									if (
										game.hasPlayer(function (current) {
											return filterTarget(null, player, current);
										})
									)
										player.chooseTarget(filterTarget, '是否将一名其他角色装备区内的一张牌移动到自己的装备区？').set('ai', function (target) {
											var player = _status.event.player;
											var att = get.attitude(player, target);
											if (att > 0 && !target.hasSkillTag('noe')) return 0;
											var num = 0;
											target.countCards('e', function (card) {
												if (player.isEmpty(get.subtype(card))) {
													var eff = get.effect(player, card, player, player);
													if (eff > num) num = eff;
												}
											});
											if (num <= 0) return 0;
											if (att < 0) return num * -att;
											return 1 / num;
										});
									else event.finish();
								}
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									player.choosePlayerCard(target, 'e', '将一张装备牌移至你的装备区').set('filterButton', function (button) {
										return _status.event.player.isEmpty(get.subtype(button.link));
									});
								} else event.finish();
								('step 2');
								if (result && result.links && result.links.length) {
									target.$give(result.links[0], player, false);
									player.equip(result.links[0]);
									player.addExpose(0.2);
								}
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (get.tag(card, 'damage')) return 'zeroplayertarget';
									},
								},
							},
						},
						upgrade_hanzhan: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'chooseToCompareBegin',
							},
							filter(event, player) {
								if (player == event.player) return true;
								if (event.targets) return event.targets.includes(player);
								return player == event.target;
							},
							logTarget(event, player) {
								if (player != event.player) return event.player;
								return event.targets || event.target;
							},
							prompt2(event, player) {
								return '令其改为使用随机的手牌进行拼点';
							},
							check(trigger, player) {
								var num = 0;
								var targets = player == trigger.player ? (trigger.targets ? trigger.targets.slice(0) : [trigger.target]) : [trigger.player];
								while (targets.length) {
									var target = targets.shift();
									if (target.getCards('h').length > 1) num -= get.attitude(player, target);
								}
								return num > 0;
							},
							content() {
								var targets = player == trigger.player ? (trigger.targets ? trigger.targets.slice(0) : [trigger.target]) : [trigger.player];
								if (!trigger.fixedResult) trigger.fixedResult = {};
								while (targets.length) {
									var target = targets.shift();
									var hs = target.getCards('h');
									if (hs.length) trigger.fixedResult[target.playerid] = hs.randomGet();
								}
							},
							group: 'hanzhan_gain',
							subfrequent: ['gain'],
						},
						upgrade_hanzhan_gain: {
							trigger: {
								player: ['chooseToCompareAfter', 'compareMultipleAfter'],
								target: ['chooseToCompareAfter', 'compareMultipleAfter'],
							},
							audio: 'hanzhan',
							filter(event, player) {
								if (event.preserve) return false;
								return [event.card1, event.card2].filter(function (card) {
									return card.name == 'sha' && get.position(card, true) == 'o';
								}).length;
							},
							forced: true,
							prompt2(trigger, player) {
								var cards = [trigger.card1, trigger.card2].filter(function (card) {
									return card.name == 'sha' && get.position(card, true) == 'o';
								});
								cards.sort(function (a, b) {
									return b.number - a.number;
								});
								if (cards.length > 1 && cards[0].number > cards[1].number) cards.splice(1);
								return '获得' + get.translation(cards);
							},
							content() {
								var cards = [trigger.card1, trigger.card2].filter(function (card) {
									return card.name == 'sha' && get.position(card, true) == 'o';
								});
								cards.sort(function (a, b) {
									return b.number - a.number;
								});
								if (cards.length > 1 && cards[0].number > cards[1].number) cards.splice(1);
								player.gain(cards, 'gain2');
							},
						},
						upgrade_jianchu: {
							shaRelated: true,
							audio: 'ext:蒸蒸日上/audio:2',
							audioname: ['re_pangde'],
							trigger: {
								player: 'useCardToPlayered',
							},
							filter(event, player) {
								return event.card.name == 'sha' && event.target.countDiscardableCards(player, 'he') > 0;
							},
							forced: true,
							content() {
								'step 0';
								player
									.discardPlayerCard(trigger.target, get.prompt('rejianchu', trigger.target))
									.set('ai', function (button) {
										if (!_status.event.att) return 0;
										if (get.position(button.link) == 'e') {
											if (get.subtype(button.link) == 'equip2') return 2 * get.value(button.link);
											return get.value(button.link);
										}
										return 1;
									})
									.set('att', get.attitude(player, trigger.target) <= 0);
								('step 1');
								if (result.bool && result.links && result.links.length) {
									if (get.type(result.links[0], null, result.links[0].original == 'h' ? player : false) != 'basic') {
										trigger.parent.directHit.add(trigger.target);
										player.addTempSkill('rejianchu2');
										player.addMark('rejianchu2', 1, false);
									} else if (trigger.cards) {
										var list = [];
										for (var i = 0; i < trigger.cards.length; i++) {
											if (get.position(trigger.cards[i], true) == 'o') list.push(trigger.cards[i]);
										}
										if (list.length) trigger.target.gain(list, 'gain2', 'log');
									}
								}
							},
							ai: {
								unequip: true,
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'directHit_ai')
										return (
											arg.card.name == 'sha' &&
											arg.target.countCards('e', function (card) {
												return get.value(card) > 1;
											}) > 0
										);
									if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
									return false;
								},
							},
						},
						upgrade_jianchu2: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + player.countMark('rejianchu2');
								},
							},
						},
						upgrade_liegong: {
							shaRelated: true,
							mod: {
								targetInRange(card, player, target) {
									if (card.name == 'sha' && typeof card.number == 'number') {
										if (get.distance(player, target) <= card.number) return true;
									}
								},
							},
							audio: 'ext:蒸蒸日上/audio:4',
							audioname: ['re_huangzhong'],
							trigger: {
								player: 'useCardToTargeted',
							},
							logTarget: 'target',
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								if (event.target.countCards('h') <= player.countCards('h') || event.target.countCards('e') != player.countCards('e') || event.target.hp < event.target.maxHp - event.target.hp) return true;
								if (event.target.hp >= player.hp) return true;
								return false;
							},
							content() {
								if (trigger.target.countCards('h') <= player.countCards('h')) trigger.parent.directHit.push(trigger.target);
								if (trigger.target.hp >= player.hp) {
									var id = trigger.target.playerid;
									var map = trigger.parent.customArgs;
									if (!map[id]) map[id] = {};
									if (typeof map[id].extraDamage != 'number') {
										map[id].extraDamage = 0;
									}
									map[id].extraDamage++;
								}
								if (trigger.target.countCards('e') != player.countCards('e') || trigger.target.hp < trigger.target.maxHp - trigger.target.hp)
									trigger.target.goMad({
										source: 'damageAfter',
									});
								player.draw();
							},
							ai: {
								threaten: 0.5,
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (
										get.attitude(player, arg.target) <= 0 &&
										arg.card.name == 'sha' &&
										player.countCards('h', function (card) {
											return card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card));
										}) >= arg.target.countCards('h')
									)
										return true;
									return false;
								},
							},
						},
						upgrade_longdan: {
							mod: {
								aiValue(player, card, num) {
									if (card.name != 'sha' && card.name != 'shan') return;
									var geti = function () {
										var cards = player.getCards('hs', function (card) {
											return card.name == 'sha' || card.name == 'shan';
										});
										if (cards.includes(card)) {
											return cards.indexOf(card);
										}
										return cards.length;
									};
									return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
								},
								aiUseful() {
									return lib.skill.upgrade_longdan.mod.aiValue.apply(this, arguments);
								},
							},
							audio: 'ext:蒸蒸日上/audio:2',
							hiddenCard(player, name) {
								if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
								if (name == 'jiu') return player.countCards('hs', 'tao') > 0;
								return false;
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							position: 'hs',
							prompt: '将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
							viewAs(cards, player) {
								var name = false;
								switch (cards[0]?.name) {
									case 'sha':
										name = 'shan';
										break;
									case 'shan':
										name = 'sha';
										break;
									case 'tao':
										name = 'jiu';
										break;
									case 'jiu':
										name = 'tao';
										break;
								}
								if (name)
									return {
										name: name,
									};
								return null;
							},
							check(card) {
								var player = _status.event.player;
								if (_status.event.type == 'phase') {
									var max = 0;
									var name2;
									var list = ['sha', 'tao', 'jiu'];
									var map = {
										sha: 'shan',
										tao: 'jiu',
										jiu: 'tao',
									};
									for (var i = 0; i < list.length; i++) {
										var name = list[i];
										if (
											player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) &&
											player.getUseValue({
												name: name,
											}) > 0
										) {
											var temp = get.order({
												name: name,
											});
											if (temp > max) {
												max = temp;
												name2 = map[name];
											}
										}
									}
									if (name2 == card.name) return 1;
									return 0;
								}
								return 1;
							},
							filterCard(card, player, event) {
								event = event || _status.event;
								var filter = event._backup.filterCard;
								var name = card.name;
								if (
									name == 'sha' &&
									filter(
										{
											name: 'shan',
											cards: [card],
										},
										player,
										event
									)
								)
									return true;
								if (
									name == 'shan' &&
									filter(
										{
											name: 'sha',
											cards: [card],
										},
										player,
										event
									)
								)
									return true;
								if (
									name == 'tao' &&
									filter(
										{
											name: 'jiu',
											cards: [card],
										},
										player,
										event
									)
								)
									return true;
								if (
									name == 'jiu' &&
									filter(
										{
											name: 'tao',
											cards: [card],
										},
										player,
										event
									)
								)
									return true;
								return false;
							},
							filter(event, player) {
								var filter = event.filterCard;
								if (
									filter(
										{
											name: 'sha',
										},
										player,
										event
									) &&
									player.countCards('hs', 'shan')
								)
									return true;
								if (
									filter(
										{
											name: 'shan',
										},
										player,
										event
									) &&
									player.countCards('hs', 'sha')
								)
									return true;
								if (
									filter(
										{
											name: 'tao',
										},
										player,
										event
									) &&
									player.countCards('hs', 'jiu')
								)
									return true;
								if (
									filter(
										{
											name: 'jiu',
										},
										player,
										event
									) &&
									player.countCards('hs', 'tao')
								)
									return true;
								return false;
							},
							ai: {
								respondSha: true,
								respondShan: true,
								skillTagFilter(player, tag) {
									var name;
									switch (tag) {
										case 'respondSha':
											name = 'shan';
											break;
										case 'respondShan':
											name = 'sha';
											break;
									}
									if (!player.countCards('hs', name)) return false;
								},
								order(item, player) {
									if (player && _status.event.type == 'phase') {
										var max = 0;
										var list = ['sha', 'tao', 'jiu'];
										var map = {
											sha: 'shan',
											tao: 'jiu',
											jiu: 'tao',
										};
										for (var i = 0; i < list.length; i++) {
											var name = list[i];
											if (
												player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) &&
												player.getUseValue({
													name: name,
												}) > 0
											) {
												var temp = get.order({
													name: name,
												});
												if (temp > max) max = temp;
											}
										}
										if (max > 0) max += 0.3;
										return max;
									}
									return 4;
								},
							},
						},
						upgrade_yajiao: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'loseAfter',
							},
							forced: true,
							filter(event, player) {
								if (player == _status.currentPhase && event.hs && event.hs.length) {
									for (var i = 0; i < event.hs.length; i++) {
										if (event.hs[i].name == 'sha' || event.hs[i].name == 'shan') return true;
									}
								}
								return player != _status.currentPhase && event.hs && event.hs.length && ['useCard', 'respond'].includes(event.parent.name);
							},
							content() {
								'step 0';
								event.card = get.cards()[0];
								game.cardsGotoOrdering(event.card);
								event.videoId = lib.status.videoId++;
								var judgestr = get.translation(player) + '发动了【涯角】';
								game.addVideo('judge1', player, [get.cardInfo(event.card), judgestr, event.videoId]);
								game.broadcastAll(
									function (player, card, str, id, cardid) {
										var event;
										if (game.online) {
											event = {};
										} else {
											event = _status.event;
										}
										if (game.chess) {
											event.node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
										} else {
											event.node = player.$throwordered(card.copy(), true);
										}
										if (lib.cardOL) lib.cardOL[cardid] = event.node;
										event.node.cardid = cardid;
										event.node.classList.add('thrownhighlight');
										ui.arena.classList.add('thrownhighlight');
										event.dialog = ui.create.dialog(str);
										event.dialog.classList.add('center');
										event.dialog.videoId = id;
									},
									player,
									event.card,
									judgestr,
									event.videoId,
									get.id()
								);
								game.log(player, '展示了', event.card);
								if (get.type(event.card, 'trick') == get.type(trigger.parent.card, 'trick')) {
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
									event.disbool = true;
									player
										.chooseTarget('是否弃置攻击范围内包含你的一名角色区域内的一张牌？', function (card, player, target) {
											return target.inRange(player) && target.countDiscardableCards(player, 'hej') > 0;
										})
										.set('ai', function (target) {
											var player = _status.event.player;
											return get.effect(
												target,
												{
													name: 'guohe',
												},
												player,
												player
											);
										});
								}
								('step 1');
								if (event.disbool) {
									if (result.bool) {
										player.line(result.targets[0], 'green');
										player.discardPlayerCard(result.targets[0], 'hej', true);
									}
									event.dialog.close();
									game.addVideo('judge2', null, event.videoId);
									ui.arena.classList.remove('thrownhighlight');
								} else if (result.targets) {
									event.dialog.close();
									game.addVideo('judge2', null, event.videoId);
									player.line(result.targets, 'green');
									result.targets[0].gain(event.card, 'log');
									ui.arena.classList.remove('thrownhighlight');
								} else {
									event.dialog.close();
									game.addVideo('judge2', null, event.videoId);
									ui.arena.classList.remove('thrownhighlight');
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'respond') && target.countCards('h') > 1) return [1, 0.2];
									},
								},
							},
						},
						upgrade_xuanfeng: {
							audio: 'xuanfeng',
							audioname: ['boss_lvbu3', 're_heqi', 're_lingtong'],
							trigger: {
								player: ['loseAfter', 'phaseDiscardEnd'],
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
							},
							forced: true,
							filter(event, player) {
								if (
									!game.hasPlayer(function (current) {
										return current != player && current.countCards('he') > 0;
									})
								)
									return false;
								if (event.name == 'phaseDiscard') {
									var cards = [];
									player.getHistory('lose', function (evt) {
										if (evt && evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs) cards.addArray(evt.hs);
									});
									return cards.length > 1;
								}
								var evt = event.getl(player);
								return evt && evt.es && evt.es.length;
							},
							content() {
								'step 0';
								var list = ['弃置至多两名其他角色的合计两张牌'];
								if (lib.skill.rexuanfeng.canMoveCard(player)) list.push('将一名其他角色装备区内的一张牌移动到另一名角色的装备区内');
								player
									.chooseControl('cancel2')
									.set('choiceList', list)
									.set('prompt', get.prompt('rexuanfeng'))
									.set('ai', function () {
										if (lib.skill.rexuanfeng.canMoveCard(player, true)) return 1;
										return 0;
									});
								('step 1');
								if (result.control != 'cancel2') {
									if (result.index == 1) event.goto(5);
									else event.count = 2;
								} else event.finish();
								('step 2');
								player
									.chooseTarget('弃置一名其他角色的一张牌', function (card, player, target) {
										if (player == target) return false;
										return target.countDiscardableCards(player, 'he');
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 3');
								if (result.bool) {
									player.line(result.targets[0], 'green');
									player.discardPlayerCard(result.targets[0], 'he', true);
									event.count--;
								} else event.finish();
								('step 4');
								if (event.count) event.goto(2);
								else event.finish();
								('step 5');
								var next = player.chooseTarget(2, function (card, player, target) {
									if (player == target) return false;
									if (ui.selected.targets.length) {
										var from = ui.selected.targets[0];
										if (target.isMin()) return false;
										var es = from.getCards('e');
										for (var i = 0; i < es.length; i++) {
											if (target.isEmpty(get.subtype(es[i]))) return true;
										}
										return false;
									} else {
										return target.countCards('e') > 0;
									}
								});
								next.set('ai', function (target) {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									var sgnatt = get.sgn(att);
									if (ui.selected.targets.length == 0) {
										if (att > 0) {
											if (
												target.countCards('e', function (card) {
													return (
														get.value(card, target) < 0 &&
														game.hasPlayer(function (current) {
															return current != player && current != target && get.attitude(player, current) < 0 && current.isEmpty(get.subtype(card)) && get.effect(current, card, player, player) > 0;
														})
													);
												}) > 0
											)
												return 9;
										} else if (att < 0) {
											if (
												game.hasPlayer(function (current) {
													if (current != target && current != player && get.attitude(player, current) > 0) {
														var es = target.getCards('e');
														for (var i = 0; i < es.length; i++) {
															if (get.value(es[i], target) > 0 && current.isEmpty(get.subtype(es[i])) && get.effect(current, es[i], player, player) > 0) return true;
														}
													}
												})
											) {
												return -att;
											}
										}
										return 0;
									}
									var es = ui.selected.targets[0].getCards('e');
									var i;
									var att2 = get.sgn(get.attitude(player, ui.selected.targets[0]));
									for (var i = 0; i < es.length; i++) {
										if (sgnatt != 0 && att2 != 0 && sgnatt != att2 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.value(es[i], target)) == sgnatt && target.isEmpty(get.subtype(es[i]))) {
											return Math.abs(att);
										}
									}
									if (i == es.length) {
										return 0;
									}
									return -att * get.attitude(player, ui.selected.targets[0]);
								});
								next.set('multitarget', true);
								next.set('targetprompt', ['被移走', '移动目标']);
								next.set('prompt', event.prompt || '移动场上的一张装备牌');
								next.set('forced', true);
								('step 6');
								if (result.bool) {
									player.line2(result.targets, 'green');
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 7');
								('step 8');
								if (targets.length == 2) {
									player
										.choosePlayerCard(
											'e',
											true,
											function (button) {
												var player = _status.event.player;
												var targets0 = _status.event.targets0;
												var targets1 = _status.event.targets1;
												if (get.attitude(player, targets0) > get.attitude(player, targets1)) {
													if (get.value(button.link, targets0) < 0) return get.effect(targets1, button.link, player, player);
													return 0;
												} else {
													return get.value(button.link, targets0) * get.effect(targets1, button.link, player, player);
												}
											},
											targets[0]
										)
										.set('targets0', targets[0])
										.set('targets1', targets[1])
										.set('filterButton', function (button) {
											var targets1 = _status.event.targets1;
											return targets1.isEmpty(get.subtype(button.link));
										});
								} else {
									event.finish();
								}
								('step 9');
								if (result.bool && result.links.length) {
									var link = result.links[0];
									event.targets[1].equip(link);
									event.targets[0].$give(link, event.targets[1]);
									event.result = {
										bool: true,
									};
								}
							},
							canMoveCard(player, withatt) {
								return game.hasPlayer(function (current) {
									if (player == current) return false;
									var att = get.sgn(get.attitude(player, current));
									if (!withatt || att != 0) {
										var es = current.getCards('e');
										for (var i = 0; i < es.length; i++) {
											if (
												game.hasPlayer(function (current2) {
													if (player == current2) return false;
													if (withatt) {
														if (get.sgn(get.value(es[i], current)) != -att) return false;
														var att2 = get.sgn(get.attitude(player, current2));
														if (att == att2 || att2 != get.sgn(get.value(es[i], current2))) return false;
													}
													return current != current2 && !current2.isMin() && current2.isEmpty(get.subtype(es[i]));
												})
											) {
												return true;
											}
										}
									}
								});
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
									},
								},
								reverseEquip: true,
								noe: true,
							},
						},
						upgrade_chunlao: {
							trigger: {
								player: 'phaseUseEnd',
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return player.countCards('h') > 0 && (_status.connectMode || player.countCards('h', 'sha') > 0) && !player.getStorage('upgrade_chunlao').length;
							},
							intro: {
								content: 'cards',
								onunmark(storage, player) {
									if (storage && storage.length) {
										player.$throw(storage, 1000);
										game.cardsDiscard(storage);
										game.log(storage, '被置入了弃牌堆');
										storage.length = 0;
									}
								},
							},
							content() {
								'step 0';
								player
									.chooseCard([1, Math.max(1, player.countCards('h', 'sha'))], get.prompt('upgrade_chunlao'), '将任意张【杀】置于武将牌上作为<醇>', {
										name: 'sha',
									})
									.set('ai', function () {
										return 1;
									});
								('step 1');
								if (result.bool) {
									player.markAuto('upgrade_chunlao', result.cards);
									player.lose(result.cards, ui.special, 'toStorage');
									player.$give(result.cards, player, false);
								}
							},
							ai: {
								threaten: 1.4,
							},
							group: 'upgrade_chunlao2',
						},
						upgrade_chunlao2: {
							enable: 'chooseToUse',
							filter(event, player) {
								return event.type == 'dying' && event.dying && event.dying.hp <= 0 && player.getStorage('upgrade_chunlao').length;
							},
							filterTarget(card, player, target) {
								return target == _status.event.dying;
							},
							forced: true,
							delay: false,
							selectTarget: -1,
							content() {
								'step 0';
								player.chooseCardButton(get.translation('upgrade_chunlao'), player.storage.upgrade_chunlao, true);
								('step 1');
								if (result.bool) {
									player.$throw(result.links);
									player.storage.upgrade_chunlao.remove(result.links[0]);
									game.cardsDiscard(result.links[0]);
									event.type = 'dying';
									target.useCard(
										{
											name: 'jiu',
										},
										target
									);
									if (!player.storage.upgrade_chunlao.length) {
										player.unmarkSkill('upgrade_chunlao');
									} else {
										player.markSkill('upgrade_chunlao');
									}
									var nature = get.nature(result.links[0]);
									if (nature == 'fire') player.recover();
									if (nature == 'thunder') player.draw(3);
								}
							},
							ai: {
								order: 6,
								skillTagFilter(player) {
									return player.getStorage('upgrade_chunlao').length;
								},
								save: true,
								result: {
									target: 3,
								},
								threaten: 1.6,
							},
						},
						upgrade_luoying: {
							audio: 'ext:蒸蒸日上/audio:2',
							group: ['reluoying_discard', 'reluoying_judge'],
							subfrequent: ['judge'],
							subSkill: {
								discard: {
									audio: 'reluoying',
									trigger: {
										global: 'loseAfter',
									},
									filter(event, player) {
										if (event.type != 'discard') return false;
										if (event.player == player) return false;
										for (var i = 0; i < event.cards2.length; i++) {
											if (event.cards2[i].suit == 'club' && get.position(event.cards2[i], true) == 'd') {
												return true;
											}
										}
										return false;
									},
									forced: true,
									content() {
										'step 0';
										if (trigger.delay == false) game.delay();
										('step 1');
										var cards = [];
										for (var i = 0; i < trigger.cards2.length; i++) {
											if (trigger.cards2[i].suit == 'club' && get.position(trigger.cards2[i], true) == 'd') {
												cards.push(trigger.cards2[i]);
											}
										}
										if (cards.length) {
											player.chooseButton(['落英:选择要获得的牌', cards], [1, cards.length]).set('ai', function (button) {
												return get.value(button.link, _status.event.player, 'raw');
											});
										}
										('step 2');
										if (result.bool) {
											player.gain(result.links, 'gain2', 'log');
										}
									},
								},
								judge: {
									audio: 'reluoying',
									trigger: {
										global: 'cardsDiscardAfter',
									},
									forced: true,
									filter(event, player) {
										var evt = event.parent.relatedEvent;
										if (!evt || evt.name != 'judge') return;
										if (evt.player == player) return false;
										if (get.position(event.cards[0], true) != 'd') return false;
										return event.cards[0].suit == 'club';
									},
									content() {
										'step 0';
										player.chooseButton(['落英:选择要获得的牌', trigger.cards], [1, trigger.cards.length]).set('ai', function (button) {
											return get.value(button.link, _status.event.player, 'raw');
										});
										('step 1');
										if (result.bool) {
											player.gain(result.links, 'gain2', 'log');
										}
									},
								},
							},
						},
						upgrade_chengzhang: {
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							derivation: 'rejiushi_mark',
							forced: true,
							juexingji: true,
							filter(event, player) {
								var num = 0;
								player.getAllHistory('sourceDamage', function (evt) {
									num += evt.num;
								});
								if (num >= 7) return true;
								player.getAllHistory('damage', function (evt) {
									num += evt.num;
								});
								return num > 7;
							},
							content() {
								player.markSkill('rejiushi_mark');
								player.awakenSkill('chengzhang');
								player.storage.chengzhang = true;
								player.recover();
								player.draw();
							},
						},
						upgrade_jiushi: {
							audio: 'ext:蒸蒸日上/audio:2',
							group: ['rejiushi1', 'rejiushi2', 'rejiushi3', 'rejiushi_gain'],
							subfrequent: ['gain'],
							subSkill: {
								gain: {
									audio: 'rejiushi',
									trigger: {
										player: 'turnOverAfter',
									},
									forced: true,
									filter(event, player) {
										return player.storage.chengzhang == true;
									},
									prompt: '是否发动【酒诗】,获得牌堆中的一张锦囊牌？',
									content() {
										var card = get.cardPile2(function (card) {
											return get.type2(card) == 'trick';
										});
										if (card) player.gain(card, 'gain2', 'log');
									},
								},
							},
						},
						upgrade_jiushi1: {
							hiddenCard(player, name) {
								if (name == 'jiu') return !player.isTurnedOver();
								return false;
							},
							audio: 'rejiushi',
							enable: 'chooseToUse',
							filter(event, player) {
								if (player.classList.contains('turnedover')) return false;
								return event.filterCard(
									{
										name: 'jiu',
									},
									player,
									event
								);
							},
							content() {
								if (_status.event.getParent(2).type == 'dying') {
									event.dying = player;
									event.type = 'dying';
								}
								player.turnOver();
								player.useCard(
									{
										name: 'jiu',
									},
									player
								);
							},
							ai: {
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
											var num = get.effect(
												target,
												{
													name: 'sha',
												},
												player,
												player
											);
											for (var i = 1; i < targets.length; i++) {
												var num2 = get.effect(
													targets[i],
													{
														name: 'sha',
													},
													player,
													player
												);
												if (num2 > num) {
													target = targets[i];
													num = num2;
												}
											}
											if (num <= 0) return 0;
											var e2 = target.getEquip(2);
											if (e2) {
												if (e2.name == 'tengjia') {
													if (
														!player.countCards('h', {
															name: 'sha',
															nature: 'fire',
														}) &&
														!player.getEquip('zhuque')
													)
														return 0;
												}
												if (e2.name == 'renwang') {
													if (
														!player.countCards('h', {
															name: 'sha',
															color: 'red',
														})
													)
														return 0;
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
						upgrade_jiushi2: {
							trigger: {
								player: 'damageBegin3',
							},
							silent: true,
							firstDo: true,
							filter(event, player) {
								return player.classList.contains('turnedover');
							},
							content() {
								trigger.rejiushi = true;
							},
						},
						upgrade_jiushi3: {
							audio: 'rejiushi',
							trigger: {
								player: 'damageEnd',
							},
							check(event, player) {
								return player.isTurnedOver();
							},
							filter(event, player) {
								if (event.rejiushi) {
									return true;
								}
								return false;
							},
							prompt(event, player) {
								var str = '是否发动【酒诗】,将武将牌翻面';
								if (!player.storage.chengzhang) str += ',并获得牌堆中的一张锦囊牌';
								str += '？';
								return str;
							},
							content() {
								delete trigger.rejiushi;
								player.turnOver();
								if (!player.storage.chengzhang) {
									var card = get.cardPile2(function (card) {
										return get.type2(card) == 'trick';
									});
									if (card) player.gain(card, 'gain2', 'log');
								}
							},
						},
						upgrade_jiushi_mark: {
							mark: true,
							marktext: '改',
							intro: {
								content: '当你需要使用【酒】时,若你的武将牌正面向上,你可以翻面,视为使用一张【酒】.当你受到伤害后,若你的武将牌背面向上,你可以翻面.当你翻面时,你获得牌堆中的一张随机锦囊.',
							},
						},
						upgrade_hongyan: {
							audio: 'ext:蒸蒸日上/audio:2',
							mod: {
								suit(card, suit) {
									if (suit == 'spade') return 'heart';
								},
							},
							trigger: {
								player: 'loseEnd',
							},
							filter(event, player) {
								if (player == _status.currentPhase || !event.visible || player.hp <= player.countCards('h')) return false;
								for (var i = 0; i < event.cards2.length; i++) {
									if (event.cards2[i].suit == 'heart') return true;
								}
								return false;
							},
							forced: true,
							content() {
								player.draw();
							},
						},
						upgrade_qimou: {
							limited: true,
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return !player.storage.upgrade_qimou;
							},
							init(player) {
								player.storage.upgrade_qimou = false;
							},
							mark: true,
							intro: {
								content: 'limited',
							},
							content() {
								'step 0';
								var num = player.hp - 1;
								if (
									player.countCards('hs', {
										name: ['tao', 'jiu'],
									})
								) {
									num = player.hp;
								}
								var map = {};
								var list = [];
								for (var i = 1; i <= player.hp; i++) {
									var cn = get.cnNumber(i, true);
									map[cn] = i;
									list.push(cn);
								}
								event.map = map;
								player.awakenSkill('upgrade_qimou');
								player.storage.upgrade_qimou = true;
								player
									.chooseControl(list, function () {
										return get.cnNumber(_status.event.goon, true);
									})
									.set('prompt', '失去任意点体力')
									.set('goon', num);
								('step 1');
								var num = event.map[result.control] || 1;
								player.storage.upgrade_qimou2 = num;
								player.loseHp(num);
								player.draw(2 * num);
								player.addTempSkill('upgrade_qimou2');
							},
							ai: {
								order: 14,
								result: {
									player(player) {
										if (player.hp < 3) return false;
										var mindist = player.hp;
										if (
											player.countCards('hs', {
												name: ['tao', 'jiu'],
											})
										)
											mindist++;
										if (
											game.hasPlayer(function (current) {
												return (
													get.distance(player, current) <= mindist &&
													player.canUse('sha', current, false) &&
													get.effect(
														current,
														{
															name: 'sha',
														},
														player,
														player
													) > 0
												);
											})
										) {
											return 1;
										}
										return 0;
									},
								},
							},
						},
						upgrade_qimou2: {
							mod: {
								cardUsable(card, player, num) {
									if (typeof player.storage.upgrade_qimou2 == 'number' && card.name == 'sha') {
										return num + player.storage.upgrade_qimou2;
									}
								},
								globalFrom(from, to, distance) {
									if (typeof from.storage.upgrade_qimou2 == 'number') {
										return distance - from.storage.upgrade_qimou2;
									}
								},
							},
						},
						upgrade_niepan: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'chooseToUse',
							mark: true,
							limited: true,
							init(player) {
								player.storage.upgrade_niepan = false;
							},
							filter(event, player) {
								if (player.storage.upgrade_niepan) return false;
								if (event.type == 'dying') {
									if (player != event.dying) return false;
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.awakenSkill('upgrade_niepan');
								player.storage.upgrade_niepan = true;
								player.discard(player.getCards('hej'));
								('step 1');
								player.link(false);
								('step 2');
								player.turnOver(false);
								('step 3');
								player.draw(4);
								('step 4');
								if (player.hp < 3) {
									player.recover(3 - player.hp);
								}
								('step 5');
								var jn = lib.character.shen_simayi[3];
								player.addSkillLog(jn);
								player.phase('nodelay');
							},
							ai: {
								order: 1.2,
								skillTagFilter(player, tag, target) {
									if (player != target || player.storage.upgrade_niepan) return false;
								},
								save: true,
								result: {
									player(player) {
										if (player.hp <= 0) return 10;
										if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
										return 0;
									},
								},
								threaten(player, target) {
									if (!target.storage.upgrade_niepan) return 0.6;
								},
							},
							intro: {
								content: 'limited',
							},
						},
						upgrade_wurong: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return target != player && target.countCards('h') > 0;
							},
							content() {
								'step 0';
								if (target.countCards('h') == 0 || player.countCards('h') == 0) {
									event.finish();
									return;
								}
								('step 1');
								var sendback = function () {
									if (_status.event != event) {
										return function () {
											event.resultOL = _status.event.resultOL;
										};
									}
								};
								if (player.isOnline()) {
									player.wait(sendback);
									event.ol = true;
									player.send(function () {
										game.me.chooseCard(true).set('glow_result', true).ai = function () {
											return Math.random();
										};
										game.resume();
									});
								} else {
									event.localPlayer = true;
									var hasShan = !target.countCards('h', 'shan');
									player.chooseCard(true).set('glow_result', true).ai = function (card) {
										if (hasShan && card.name == 'sha') return 1;
										return Math.random();
									};
								}
								if (target.isOnline()) {
									target.wait(sendback);
									event.ol = true;
									target.send(function () {
										var rand = Math.random() < 0.4;
										game.me.chooseCard(true).set('glow_result', true).ai = function (card) {
											if (rand) return card.name == 'shan' ? 1 : 0;
											return card.name == 'shan' ? 0 : 1;
										};
										game.resume();
									});
								} else {
									event.localTarget = true;
								}
								('step 2');
								if (event.localPlayer) {
									event.card1 = result.cards[0];
								}
								if (event.localTarget) {
									var rand = Math.random() < 0.4;
									target.chooseCard(true).set('glow_result', true).ai = function (card) {
										if (rand) return card.name == 'shan' ? 1 : 0;
										return card.name == 'shan' ? 0 : 1;
									};
								}
								('step 3');
								if (event.localTarget) {
									event.card2 = result.cards[0];
								}
								if (!event.resultOL && event.ol) {
									game.pause();
								}
								('step 4');
								try {
									if (!event.card1) event.card1 = event.resultOL[player.playerid].cards[0];
									if (!event.card2) event.card2 = event.resultOL[target.playerid].cards[0];
									if (!event.card1 || !event.card2) {
										throw 'err';
									}
								} catch (e) {
									event.finish();
									return;
								}
								if (event.num2 >= 10 || event.num2 <= 4) {
									if (target.countCards('h') > 2) {
										event.addToAI = true;
									}
								}
								game.broadcastAll(
									function (card1, card2) {
										card1.classList.remove('glow');
										card2.classList.remove('glow');
									},
									event.card1,
									event.card2
								);
								('step 5');
								game.broadcastAll(function () {
									ui.arena.classList.add('thrownhighlight');
								});
								game.addVideo('thrownhighlight1');
								player.$compare(event.card1, target, event.card2);
								('step 6');
								game.log(player, '展示了', event.card1);
								game.log(target, '展示了', event.card2);
								var name1 = event.card1.name;
								var name2 = event.card2.name;
								if (name1 == 'sha' && name2 != 'shan') {
									//player.discard(event.card1).set('animate',false);
									target.$gain2(event.card2);
									target.damage('nocard');
								} else if (name1 != 'sha' && name2 == 'shan') {
									//player.discard(event.card1).set('animate',false);
									target.$gain2(event.card2);
									player.gainPlayerCard(target, true, 'he');
								} else {
									player.$gain2(event.card1);
									target.$gain2(event.card2);
								}
								game.broadcastAll(function () {
									ui.arena.classList.remove('thrownhighlight');
								});
								game.addVideo('thrownhighlight2');
							},
							ai: {
								order: 6,
								result: {
									target: -1,
								},
							},
						},
						upgrade_cangzhuo: {
							trigger: {
								player: 'phaseDiscardBegin',
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return (
									player.getHistory('useCard', function (card) {
										return get.type(card.card, 'trick') == 'trick';
									}).length == 0
								);
							},
							content() {
								player.addTempSkill('cangzhuo2');
							},
						},
						upgrade_cangzhuo2: {
							mod: {
								ignoredHandcard(card, player) {
									if (get.type(card, 'trick') == 'trick') {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && get.type(card, 'trick') == 'trick') return false;
								},
							},
						},
						upgrade_shebian: {
							trigger: {
								player: 'turnOverEnd',
							},
							check(event, player) {
								return player.canMoveCard(true, true);
							},
							filter(event, player) {
								return player.canMoveCard(null, true);
							},
							content() {
								player.moveCard().nojudge = true;
							},
						},
						upgrade_xianzhen: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player.canCompare(target);
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.player && result.player.name == 'sha') player.addTempSkill('upgrade_xianzhen4');
								if (result.bool) {
									player.storage[event.name] = target;
									if (!target.hasSkill('fengyin')) {
										target.addTempSkill('fengyin');
									}
									player.addTempSkill(event.name + 2);
									var sz = Math.abs(result.player.number - result.target.number);
									player.draw(sz);
								} else {
									player.addTempSkill(event.name + 3);
								}
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
									return (
										get.order({
											name: 'sha',
										}) - 1
									);
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
						upgrade_xianzhen2: {
							charlotte: true,
							mod: {
								targetInRange(card, player, target) {
									if (target == player.storage.upgrade_xianzhen) return true;
								},
								cardUsableTarget(card, player, target) {
									if (target == player.storage.upgrade_xianzhen) return true;
								},
							},
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.target != player.storage.upgrade_xianzhen) return false;
								},
							},
						},
						upgrade_xianzhen3: {
							charlotte: true,
							mod: {
								cardEnabled(card) {
									if (card.name == 'sha') return false;
								},
							},
						},
						upgrade_xianzhen4: {
							mod: {
								ignoredHandcard(card, player) {
									if (card.name == 'sha') {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.name == 'sha') {
										return false;
									}
								},
							},
						},
						upgrade_jinjiu: {
							mod: {
								cardname(card, player) {
									if (card.name == 'jiu') return 'sha';
								},
							},
							ai: {
								skillTagFilter(player) {
									if (!player.countCards('h', 'jiu')) return false;
								},
								respondSha: true,
							},
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['useCard1', 'respond'],
							},
							firstDo: true,
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha' && !event.skill && event.cards.length == 1 && event.cards[0].name == 'jiu';
							},
							content() { },
							group: 'upgrade_jinjiu2',
							global: 'upgrade_jinjiu3',
						},
						upgrade_jinjiu3: {
							mod: {
								cardEnabled(card, player) {
									if (card.name == 'jiu' && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.hasSkill('upgrade_jinjiu')) return false;
								},
								cardSavable(card, player) {
									if (card.name == 'jiu' && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.hasSkill('upgrade_jinjiu')) return false;
								},
							},
						},
						upgrade_jinjiu2: {
							audio: 'upgrade_jinjiu',
							forced: true,
							trigger: {
								player: 'damageBegin3',
							},
							filter(event, player) {
								return event.getParent(2).jiu == true;
							},
							content() {
								trigger.num -= trigger.getParent(2).jiu_add;
								player.draw();
							},
							ai: {
								filterDamage: true,
								skillTagFilter(player, tag, arg) {
									return arg && arg.jiu == true;
								},
							},
						},
						upgrade_pojun: {
							shaRelated: true,
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'useCardToPlayered',
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
							},
							content() {
								'step 0';
								var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.maxHp, trigger.target.countCards('he'))], get.prompt('upgrade_pojun', trigger.target));
								next.set('ai', function (button) {
									if (!_status.event.goon) return 0;
									var val = get.value(button.link);
									if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
									return val;
								});
								next.set('goon', get.attitude(player, trigger.target) <= 0);
								next.set('forceAuto', true);
								('step 1');
								if (result.bool) {
									var target = trigger.target;
									target.addSkill('upgrade_pojun2');
									target.storage.upgrade_pojun2.addArray(result.cards);
									target.lose(result.cards, ui.special, 'toStorage');
									game.log(target, '失去了' + get.cnNumber(result.cards.length) + '张牌');
									target.markSkill('upgrade_pojun2');
									if (result.cards.length > 1) player.draw(Math.floor(result.cards.length / 2));
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
							group: 'upgrade_pojun3',
						},
						upgrade_pojun3: {
							audio: 'upgrade_pojun',
							trigger: {
								source: 'damageBegin1',
							},
							forced: true,
							logTarget: 'player',
							filter(event, player) {
								var target = event.player;
								return event.parent.name == 'sha' && player.countCards('h') >= target.countCards('h') && player.countCards('e') >= target.countCards('e');
							},
							content() {
								if (trigger.player.countCards('h') < 1) {
									trigger.num += 2;
								} else {
									trigger.num++;
								}
							},
						},
						upgrade_pojun2: {
							init(player, skill) {
								if (!player.storage[skill]) player.storage[skill] = [];
							},
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							popup: false,
							charlotte: true,
							filter(event, player) {
								return player.storage.upgrade_pojun2 && player.storage.upgrade_pojun2.length;
							},
							content() {
								game.log(player, '收回了' + get.cnNumber(player.gain(player.storage.upgrade_pojun2, 'draw', 'fromStorage').cards.length) + '张〖破军〗牌');
								player.storage.upgrade_pojun2.length = 0;
								player.removeSkill('upgrade_pojun2');
							},
							intro: {
								onunmark: 'throw',
								content: 'cardCount',
							},
						},
						//吴国太
						upgrade_ganlu: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:蒸蒸日上/audio:2',
							selectTarget: 2,
							delay: 0,
							filterTarget(card, player, target) {
								if (target.isMin()) return false;
								if (ui.selected.targets.length == 0) return true;
								if (ui.selected.targets[0].countCards('e') == 0 && target.countCards('e') == 0) return false;
								return true;
							},
							multitarget: true,
							multiline: true,
							content() {
								'step 0';
								targets[0].swapEquip(targets[1]);
								('step 1');
								var num = Math.abs(targets[0].countCards('e') - targets[1].countCards('e'));
								if (num > player.getDamagedHp()) {
									player.chooseToDiscard('h', 2, true);
								} else {
									player.chooseDrawRecover(2, true);
								}
							},
							ai: {
								order: 10,
								expose: 0.2,
								threaten(player, target) {
									return 0.8 * Math.max(1 + target.maxHp - target.hp);
								},
								result: {
									target(player, target) {
										if (!ui.selected.targets.length) return -get.value(target.getCards('e'), target);
										var target2 = ui.selected.targets[0];
										var eff_target = get.value(target2.getCards('e'), target) - get.value(target.getCards('e'), target);
										if (get.sgn(eff_target) == get.sgn(-get.value(target2.getCards('e'), target2))) return 0;
										return eff_target;
									},
								},
							},
						},
						upgrade_buyi: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'dying',
							},
							filter(event, player) {
								return event.player.countCards('h') > 0;
							},
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							content() {
								'step 0';
								if (player == trigger.player)
									player.chooseCard('h', true).set('ai', function (card) {
										if (get.type(card) != 'basic' || card.suit == 'heart') return 100 - get.value(card);
										return 0;
									});
								else player.choosePlayerCard('h', trigger.player, true);
								('step 1');
								var card = result.cards[0],
									target = trigger.player;
								player.showCards(card, get.translation(player) + '对' + (player == target ? '自己' : get.translation(target)) + '发动了【补益】');
								if (get.type(card, target) != 'basic' || card.suit == 'heart') {
									target.discard(card);
									target.recover();
									if (target.countCards('h') == 1) game.asyncDraw([player, target]);
								}
							},
							logTarget: 'player',
						},
						//于吉
						upgrade_guhuo: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							selectTarget: [1, 99],
							content() {
								'step 0';
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
								event.card = player.getCards('h').randomGet();
								target.showCards(event.card);
								('step 2');
								if (event.card.suit + '2' != event.choice) {
									if (!target.hasSkill('upgrade_chanyuan')) {
										target.addSkill('upgrade_chanyuan');
									} else {
										player.draw();
									}
									target.loseHp();
									target.chooseToDiscard('he', true);
								} else {
									target.chooseDrawRecover(1, true);
								}
							},
							ai: {
								order: 15,
								threaten: 5.5,
								result: {
									player(player, target) {
										if (get.attitude(player, target) < 1) return 1;
									},
									target(player, target) {
										return -10;
									},
								},
							},
						},
						upgrade_chanyuan: {
							audio: 'ext:蒸蒸日上/audio:2',
							init(player, skill) {
								player.addSkillBlocker(skill);
							},
							onremove(player, skill) {
								player.removeSkillBlocker(skill);
							},
							charlotte: true,
							skillBlocker(skill, player) {
								return skill != 'upgrade_chanyuan' && skill != 'chanyuan' && skill != 'rechanyuan' && !lib.skill[skill].charlotte && player.hp <= 2;
							},
							mark: true,
							intro: {
								content(storage, player, skill) {
									var str = '<li>锁定技,只要你的体力值不大于2,你的其他技能便全部失效.';
									var list = player.getSkills(null, false, false).filter(function (i) {
										return lib.skill.upgrade_chanyuan.skillBlocker(i, player);
									});
									if (list.length) str += '<br><li>失效技能:' + get.translation(list);
									return str;
								},
							},
						},
						//刘禅
						upgrade_ruoyu: {
							audio: 'ext:蒸蒸日上/audio:2',
							juexingji: true,
							zhuSkill: true,
							keepSkill: true,
							derivation: ['upgrade_lsjijiang', 'sishu'],
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							filter(event, player) {
								if (!player.hasZhuSkill('upgrade_ruoyu')) return false;
								return player.isMinHp();
							},
							content() {
								'step 0';
								player.awakenSkill('upgrade_ruoyu');
								player.gainMaxHp();
								('step 1');
								if (player.hp < 4) player.recover(4 - player.hp);
								player.draw(3);
								game.log(player, '获得了技能', '#g【思蜀】', '和', '#g【激将】');
								player.addSkill('sishu');
								player.phase('nodelay');
								if (player.hasSkill('upgrade_ruoyu')) {
									player.addSkill('upgrade_lsjijiang');
								} else {
									player.addAdditionalSkill('upgrade_ruoyu', 'upgrade_lsjijiang');
								}
								if (!player.isZhu) {
									player.storage.zhuSkill_upgrade_ruoyu = ['upgrade_lsjijiang'];
								} else {
									event.trigger('zhuUpdate');
								}
							},
						},
						upgrade_fangquan: {
							audio: 'ext:蒸蒸日上/audio:4',
							trigger: {
								player: 'phaseUseBefore',
							},
							filter(event, player) {
								return player.countCards('h') > 0 && !player.hasSkill('upgrade_fangquan3');
							},
							forced: true,
							content() {
								'step 0';
								var fang = player.countMark('upgrade_fangquan2') == 0 && player.hp >= 2 && player.countCards('h') <= player.hp + 1;
								player
									.chooseBool(get.prompt2('upgrade_fangquan'))
									.set('ai', function () {
										if (!_status.event.fang) return false;
										return game.hasPlayer(function (target) {
											if (target.hasJudge('lebu') || target == player) return false;
											if (get.attitude(player, target) > 4) {
												return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1) > 0;
											}
											return false;
										});
									})
									.set('fang', fang);
								('step 1');
								if (result.bool) {
									trigger.cancel();
									player.addTempSkill('upgrade_fangquan2');
									player.addMark('upgrade_fangquan2', 1, false);
								}
							},
						},
						upgrade_fangquan2: {
							trigger: {
								player: 'phaseDiscardBegin',
							},
							forced: true,
							popup: false,
							content() {
								'step 0';
								event.count = player.countMark(event.name);
								player.removeMark(event.name, event.count, false);
								('step 1');
								event.count--;
								player.chooseToDiscard('是否弃置一张牌并令一名其他角色进行一个额外回合？').ai = function (card) {
									return 20 - get.value(card);
								};
								('step 2');
								if (result.bool) {
									player.chooseTarget(true, '请选择进行额外回合的目标角色', lib.filter.notMe).ai = function (target) {
										if (target.hasJudge('lebu')) return -1;
										if (get.attitude(player, target) > 4) {
											return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1);
										}
										return -1;
									};
								} else event.finish();
								('step 3');
								var target = result.targets[0];
								player.line(target, 'fire');
								target.markSkillCharacter('upgrade_fangquan', player, '放权', '进行一个额外回合');
								target.phase('nodelay');
								target.addSkill('upgrade_fangquan3');
								target.addTempSkill('oltiaoxin', {
									player: 'phaseAfter',
								});
								target.addTempSkill('reguanxing', {
									player: 'phaseAfter',
								});
								if (event.count > 0) event.goto(1);
							},
						},
						upgrade_fangquan3: {
							trigger: {
								player: ['phaseAfter', 'phaseCancelled'],
							},
							forced: true,
							popup: false,
							content() {
								player.unmarkSkill('upgrade_fangquan');
								player.removeSkill('upgrade_fangquan3');
							},
						},
						upgrade_lsjijiang: {
							group: ['upgrade_lsjijiang1', 'upgrade_lsjijiang3'],
							zhuSkill: true,
							filter(event, player) {
								if (
									!player.hasZhuSkill('upgrade_lsjijiang') ||
									!game.hasPlayer(function (current) {
										return current != player && current.group == 'shu';
									})
								)
									return false;
								return !event.upgrade_lsjijiang && (event.type != 'phase' || !player.hasSkill('jijiang3'));
							},
							audio: 'ext:蒸蒸日上/audio:6',
							enable: ['chooseToUse', 'chooseToRespond'],
							viewAs: {
								name: 'sha',
							},
							filterCard() {
								return false;
							},
							selectCard: -1,
							ai: {
								order() {
									return (
										get.order({
											name: 'sha',
										}) + 0.3
									);
								},
								respondSha: true,
								skillTagFilter(player) {
									if (
										!player.hasZhuSkill('upgrade_lsjijiang') ||
										!game.hasPlayer(function (current) {
											return current != player && current.group == 'shu';
										})
									)
										return false;
								},
							},
						},
						upgrade_lsjijiang1: {
							audio: 'upgrade_lsjijiang',
							trigger: {
								player: ['useCardBegin', 'respondBegin'],
							},
							logTarget: 'targets',
							filter(event, player) {
								return event.skill == 'upgrade_lsjijiang';
							},
							forced: true,
							content() {
								'step 0';
								delete trigger.skill;
								trigger.parent.set('upgrade_lsjijiang', true);
								('step 1');
								if (event.current == undefined) event.current = player.next;
								if (event.current == player) {
									player.addTempSkill('jijiang3');
									event.finish();
									trigger.cancel();
									trigger.parent.goto(0);
								} else if (event.current.group == 'shu') {
									var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张杀？', {
										name: 'sha',
									});
									next.set('ai', function () {
										var event = _status.event;
										return get.attitude(event.player, event.source) - 2;
									});
									next.set('source', player);
									next.set('upgrade_lsjijiang', true);
									next.set('skillwarn', '替' + get.translation(player) + '打出一张杀');
									next.noOrdering = true;
									next.autochoose = lib.filter.autoRespondSha;
								} else {
									event.current = event.current.next;
									event.redo();
								}
								('step 2');
								if (result.bool) {
									event.finish();
									trigger.card = result.card;
									trigger.cards = result.cards;
									trigger.card.cards = trigger.cards;
									trigger.throw = false;
								} else {
									event.current = event.current.next;
									event.goto(1);
								}
							},
						},
						upgrade_lsjijiang3: {
							trigger: {
								global: ['useCard', 'respond'],
							},
							usable: 1,
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha' && event.player != player && event.player.group == 'shu' && event.player.isIn() && event.player != _status.currentPhase && player.hasZhuSkill('upgrade_lsjijiang');
							},
							content() {
								'step 0';
								trigger.player.chooseBool('激将:是否令' + get.translation(player) + '摸两张牌并弃置一张手牌？').set('ai', function () {
									var evt = _status.event;
									return get.attitude(evt.player, evt.parent.player) > 0;
								});
								('step 1');
								if (result.bool) {
									trigger.player.line(player, 'fire');
									player.draw(2);
									player.chooseToDiscard('h', true);
								} else player.getStat('triggerSkill').upgrade_lsjijiang3--;
							},
						},
						//凌操
						upgrade_dujin: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseDrawBegin2',
							},
							forced: true,
							preHidden: true,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								trigger.num += 1 + Math.ceil(player.countCards('e') / 2);
							},
							mod: {
								maxHandcardBase(player, num) {
									return num + 1 + Math.ceil(player.countCards('e') / 2);
								},
							},
						},
						//徐庶
						upgrade_wuyan: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								source: 'damageBegin2',
								player: 'damageBegin4',
							},
							forced: true,
							check(event, player) {
								if (player == event.player) return true;
								return false;
							},
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							content() {
								trigger.cancel();
								if (trigger.player == player) player.draw();
							},
							ai: {
								notrick: true,
								notricksource: true,
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
											return [0, 0.5];
										}
									},
									player(card, player, target, current) {
										if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
											return 0.5;
										}
									},
								},
							},
						},
						upgrade_jujian: {
							trigger: {
								player: ['phaseJieshuBegin', 'phaseZhunbeiBegin'],
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return (
									player.countCards('he') >
									player.countCards('he', {
										type: 'basic',
									})
								);
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									filterTarget(card, player, target) {
										return player != target;
									},
									filterCard(card, player) {
										return get.type(card) != 'basic' && lib.filter.cardDiscardable(card, player);
									},
									ai1(card) {
										if (get.tag(card, 'damage') && get.type(card) == 'trick') {
											return 20;
										}
										return 9 - get.value(card);
									},
									ai2(target) {
										var att = get.attitude(_status.event.player, target);
										if (att > 0) {
											if (target.isTurnedOver()) att += 3;
											if (target.hp == 1) att += 3;
										}
										return att;
									},
									position: 'he',
									prompt: get.prompt2('upgrade_jujian'),
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.discard(result.cards);
									target.draw(2);
									target.recover();
									if (target.isTurnedOver()) target.turnOver();
									if (target.isLinked()) target.link();
									if (!target.isDamaged()) player.draw();
								}
							},
							ai: {
								expose: 0.2,
								threaten: 1.9,
							},
						},
						//张绣
						upgrade_congjian: {
							audio: 'ext:蒸蒸日上/audio:2',
							audioname2: {
								tongyuan: 'ocongjian_tongyuan',
							},
							trigger: {
								target: 'useCardToTargeted',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'trick' && event.targets.length > 1 && player.countCards('he') > 0;
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									filterCard: true,
									selectCard: 1,
									position: 'he',
									filterTarget(card, player, target) {
										return player != target && _status.event.targets.includes(target);
									},
									ai1(card) {
										if (card.name == 'du') return 20;
										if (_status.event.player.storage.upgrade_xiongluan && get.type(card) == 'equip') return 15;
										if (get.type(card) == 'trick' || get.type(card) == 'delay') return 9;
										return 6 - get.value(card);
									},
									ai2(target) {
										var att = get.attitude(_status.event.player, target);
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											if (target.hasSkillTag('nodu')) return 0.1;
											return 1 - att;
										}
										return att - 3;
									},
									prompt: get.prompt2('upgrade_congjian'),
									targets: trigger.targets,
								});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.line(event.target);
									event.target.gain(result.cards[0], player, 'give');
									var num = 1;
									if (get.type(result.cards[0]) == 'trick' || get.type(result.cards[0]) == 'delay') num = 2;
									if (get.type(result.cards[0]) == 'equip') num = 3;
									player.draw(num);
								}
								('step 2');
								if (player.countDisabled() > 0) player.chooseToEnable();
							},
						},
						upgrade_xiongluan: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							mark: true,
							limited: true,
							init(player) {
								player.storage.upgrade_xiongluan = false;
							},
							filter(event, player) {
								if (player.storage.upgrade_xiongluan) return false;
								return true;
							},
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								player.awakenSkill('upgrade_xiongluan');
								player.storage.upgrade_xiongluan = true;
								player.disableEquip('equip1');
								player.disableEquip('equip2');
								player.disableEquip('equip3');
								player.disableEquip('equip4');
								player.disableEquip('equip5');
								player.disableJudge();
								player.draw(3);
								player.addTempSkill('upgrade_xiongluan1');
								player.storage.upgrade_xiongluan1 = target;
								target.addSkill('upgrade_xiongluan2');
								target.markSkillCharacter('upgrade_xiongluan1', player, '雄乱', '无法使用或打出任何手牌');
							},
							ai: {
								order: 13,
								result: {
									target(player, target) {
										if (target.getEquip('bagua') || target.getEquip('rewrite_bagua')) return 0;
										var hs = player.countCards('h', function (card) {
											return ['sha', 'juedou'].includes(card.name) && get.effect(target, card, player, player) != 0;
										});
										var ts = target.hp;
										if (hs + 1 >= ts && ts > 1) return -1;
										return 0;
									},
								},
							},
							intro: {
								content: 'limited',
							},
						},
						upgrade_xiongluan1: {
							onremove(player) {
								player.storage.upgrade_xiongluan1.removeSkill('upgrade_xiongluan2');
								player.storage.upgrade_xiongluan1.unmarkSkill('upgrade_xiongluan1');
								delete player.storage.upgrade_xiongluan1;
							},
							mod: {
								targetInRange(card, player, target) {
									if (target.hasSkill('upgrade_xiongluan2')) {
										return true;
									}
								},
								cardUsableTarget(card, player, target) {
									if (target.hasSkill('upgrade_xiongluan2')) return true;
								},
							},
							charlotte: true,
						},
						upgrade_xiongluan2: {
							mod: {
								cardEnabled2(card, player) {
									if (get.position(card) == 'h') return false;
								},
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) return [0, -999];
									},
								},
							},
							charlotte: true,
						},
						//荀攸
						upgrade_qice: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								var hs = player.getCards('h');
								if (!hs.length) return false;
								for (var i = 0; i < hs.length; i++) {
									var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
									if (mod2 === false) return false;
								}
								return true;
							},
							chooseButton: {
								dialog(player) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										if (get.type(lib.inpile[i]) == 'trick') list.push(['锦囊', '', lib.inpile[i]]);
									}
									return ui.create.dialog(get.translation('upgrade_qice'), [list, 'vcard']);
								},
								filter(button, player) {
									return lib.filter.filterCard(
										{
											name: button.link[2],
										},
										player,
										_status.event.parent
									);
								},
								check(button) {
									var player = _status.event.player;
									var recover = 0,
										lose = 1,
										players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (players[i].hp == 1 && get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
											return button.link[2] == 'juedou' ? 2 : -1;
										}
										if (!players[i].isOut()) {
											if (get.attitude(player, players[i]) > 0 && (players[i].hasSkill('jianxiong') || players[i].hasSkill('rejianxiong') || players[i].hasSkill('upgrade_jianxiong'))) {
												lose += 2;
											}
											if (players[i].hp < players[i].maxHp) {
												if (get.attitude(player, players[i]) > 0) {
													if (players[i].hp < 2) {
														lose--;
														recover += 0.5;
													}
													lose--;
													recover++;
												} else if (get.attitude(player, players[i]) < 0) {
													if (players[i].hp < 2) {
														lose++;
														recover -= 0.5;
													}
													lose++;
													recover--;
												}
											} else {
												if (get.attitude(player, players[i]) > 0) {
													lose--;
												} else if (get.attitude(player, players[i]) < 0) {
													lose++;
												}
											}
										}
									}
									if (lose >= recover && lose >= 0 && game.players.length < 4) return button.link[2] == 'shunshou' ? 1 : -1;
									if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
									if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
									if (lose >= recover && lose >= 0) return button.link[2] == 'qishacaochuanjiejian' ? 1 : -1;
									if (lose >= recover && lose >= 0) return button.link[2] == 'guohe' ? 1 : -1;
									return button.link[2] == 'wuzhong' ? 1 : -1;
								},
								backup(links, player) {
									return {
										filterCard: true,
										selectCard: -1,
										position: 'h',
										audio: 'upgrade_qice',
										popname: true,
										viewAs: {
											name: links[0][2],
										},
									};
								},
								prompt(links, player) {
									return '将全部手牌当作' + get.translation(links[0][2]) + '使用';
								},
							},
							group: 'upgrade_qice_draw',
							ai: {
								order(name, player) {
									if (player.countCards('h') == 1) return 15;
									return 1;
								},
								result: {
									player(player) {
										var mp = 0;
										for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
											if (get.type(ui.cardPile.childNodes[i]) == 'trick' && ui.cardPile.childNodes[i].name != 'wuxie') mp++;
										}
										if (mp > player.countCards('h') * 2) return 10;
										var num = 0;
										var cards = player.getCards('h');
										if (cards.length >= 3 && player.hp >= 3) return 0;
										if (cards.length < 4) return 10;
										for (var i = 0; i < cards.length; i++) {
											num += Math.max(0, get.value(cards[i], player, 'raw'));
										}
										num /= cards.length;
										num *= Math.min(cards.length, player.hp);
										return 12 - num;
									},
								},
								threaten: 3,
							},
							subSkill: {
								draw: {
									trigger: {
										player: 'useCardAfter',
									},
									forced: true,
									popup: false,
									usable: 1,
									filter(event, player) {
										if (get.type(event.card) != 'trick' || get.type(event.card) == 'trick') return false;
										return true;
									},
									content() {
										var mp = 0;
										for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
											if (ui.cardPile.childNodes[i].name == trigger.card.name) mp++;
										}
										if (mp > 0) player.draw(Math.min(7, mp));
									},
								},
							},
						},
						upgrade_qice_backup: {
							audio: 'ext:蒸蒸日上/audio:2',
						},
						upgrade_zhiyu: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							preHidden: true,
							content() {
								'step 0';
								player.draw();
								('step 1');
								if (!player.countCards('h')) event.finish();
								else player.showHandcards();
								('step 2');
								if (!trigger.source) return;
								var cards = player.getCards('h');
								var color = get.color(cards[0], player);
								for (var i = 1; i < cards.length; i++) {
									if (get.color(cards[i], player) != color) return;
								}
								trigger.source.chooseToDiscard(Math.min(3, player.countCards('h')), true);
							},
							ai: {
								maixie_defend: true,
								threaten: 0.9,
							},
						},
						//夏侯渊
						upgrade_shensu: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							content() {
								'step 0';
								var check = player.countCards('h') >= 0;
								player
									.chooseTarget(get.prompt('upgrade_shensu'), '跳过回合阶段,视为对一名其他角色使用四张【杀】', function (card, player, target) {
										if (player == target) return false;
										return player.canUse(
											{
												name: 'sha',
											},
											target,
											false
										);
									})
									.set('check', check)
									.set('ai', function (target) {
										if (!_status.event.check || (!player.hasSkillTag('unequip2') && (target.getEquip('bagua') || target.hasSkill('bazhen') || target.getEquip('rewrite_bagua')))) return 0;
										return get.effect(
											target,
											{
												name: 'sha',
											},
											_status.event.player
										);
									})
									.setHiddenSkill('upgrade_shensu');
								('step 1');
								if (result.bool) {
									player.useCard(
										{
											name: 'sha',
										},
										result.targets[0],
										false
									);
									player.useCard(
										{
											name: 'sha',
										},
										result.targets[0],
										false
									);
									player.useCard(
										{
											name: 'sha',
										},
										result.targets[0],
										false
									);
									player.useCard(
										{
											name: 'sha',
										},
										result.targets[0],
										false
									);
									trigger.cancel();
									if (player.maxHp > 1) player.loseMaxHp(Math.ceil(player.maxHp / 2));
									//player.skip('phase');
								}
							},
						},
						//左幽
						upgrade_wanhua: {
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return event.name != 'phase' || game.phaseNumber == 0;
							},
							content() {
								'step 0';
								event.whcs = 7;
								('step 1');
								if (game.me != player) {
									whJN = ['nzry_chenglve', 'rejunxing', 'oljuanxia', 'new_reluoyi', 'upgrade_tianyi', 'zaiqixx', 'upgrade_longyin', 'upgrade_fengpo', 'upgrade_xinzhan', 'ganlu', 'rejingce', 'xinanguo', 'shiduo', 'yimie', 'xinquanbian', 'huishi', 'ybzhuiji', 'sanchen', 'bolan', 'zhiyan', 'xinfu_xingzhao', 'xuezhao', 'chaofeng', 'mffengshi', 'neifa', 'xinfu_wuniang', 'lirang', 'zhanyi', 'hengzheng', 'mizhao', 'ol_shichou', 'gzjili', 'qingzhongx', 'reanxu', 'reshenxing', 'upgrade_yanyu', 'reqiaomeng', 'rehuaiyi', 'xingongji', 'rewenji', 'qingjiao', 'qizhou', 'ziyuan', 'qiangzhi', 'refenyin', 'jianying', 'miji', 'rejigong', 'jiqiao', 'xinshensu', 'zishu', 'olfengzi', 'remieji', 'oltiaoxin', 'xinfu_zuilun', 'upgrade_jushou2', 'upgrade_wushuang', 'zhanjue', 'reguhuo', 'reguose', 'qice', 'wangxi', 'upgrade_kuanggu', 'xinfu_lingren', 'xinfu_tushe', 'olpaoxiao', 'yongsi', 'upgrade_tieji', 'redimeng', 'fuhun', 'kurou', 'retuxi', 'upgrade_yinghun', 'upgrade_jiang', 'upgrade_zhiheng', 'relonghun', 'drlt_poxi', 'relianying', 'ollianhuan', 'rejizhi', 'reyingzi', 'reluanji', 'refanjian', 'dujin', 'shelie', 'gongxin', 'rerende', 'recanshi', 'repojun', 'xinliegong', 'rexuanfeng', 'qingnang', 'reguanxing', 'xiaoji', 'upgrade_benxi', 'rebiyue', 'kunfen', 'tairan', 'yanxi', 'upgrade_jiuchi'];
								} else {
									whJN = get.gainableSkills();
								}
								for (var j in whJN) {
									if (!lib.skill[whJN[j]]) whJN.remove(whJN[j]);
								}
								var whSkills = whJN;
								whSkills.randomSort();
								var list = [];
								for (var i = 0; i < whSkills[i].length; i++) {
									if (!player.skills.includes(whSkills[i])) list.push(whSkills[i]);
									if (list.length == 2) break;
								}
								event.list = list;
								var dialog = game.upgradeSkillsDialog(event.list, '选择获得一个技能');
								player.chooseControl(event.list).set('ai', function () {
									return 0;
								}).dialog = dialog;
								('step 2');
								event.skill = result.control;
								player.addSkill(event.skill);
								player.popup(event.skill);
								game.log(player, '获得技能', '【' + get.translation(event.skill) + '】');
								('step 3');
								event.whcs--;
								if (event.whcs > 0) {
									event.goto(1);
								}
							},
							ai: {
								threaten: 5,
							},
						},
						//左慈
						upgrade_huashen: {
							//mode:['identity','single','doudizhu'],
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							content() {
								'step 0';
								_status.noclearcountdown = true;
								event.videoId = lib.status.videoId++;
								var cards = player.storage.upgrade_huashen.character.slice(0);
								var skills = [];
								var sto = player.storage.upgrade_huashen;
								for (var i in player.storage.upgrade_huashen.map) {
									skills.addArray(player.storage.upgrade_huashen.map[i]);
								}
								var cond = 'out';
								if (event.triggername == 'phaseBegin') {
									cond = 'in';
								}
								skills.randomSort();
								skills.sort(function (a, b) {
									return get.skillRank(b, cond) - get.skillRank(a, cond);
								});
								event.aiChoice = skills[0];
								var choice = '更换技能';
								if (event.aiChoice == player.storage.upgrade_huashen.current2 || get.skillRank(event.aiChoice, cond) < 1) choice = '弃置化身';
								if (player.isOnline2()) {
									player.send(
										function (cards, id) {
											var dialog = ui.create.dialog('是否发动【化身】？', [cards, 'character']);
											dialog.videoId = id;
										},
										cards,
										event.videoId
									);
								}
								event.dialog = ui.create.dialog(get.prompt('upgrade_huashen'), [cards, 'character']);
								event.dialog.videoId = event.videoId;
								if (!event.isMine()) {
									event.dialog.style.display = 'none';
								}
								if (event.triggername == 'upgrade_huashen')
									event._result = {
										control: '更换技能',
									};
								else
									player
										.chooseControl('弃置化身', '更换技能', 'cancel2')
										.set('ai', function () {
											return _status.event.choice;
										})
										.set('choice', choice);
								('step 1');
								event.control = result.control;
								if (event.control == 'cancel2') {
									if (player.isOnline2()) {
										player.send('closeDialog', event.videoId);
									}
									delete _status.noclearcountdown;
									if (!_status.noclearcountdown) {
										game.stopCountChoose();
									}
									event.dialog.close();
									event.finish();
									return;
								}
								var next = player.chooseButton(true).set('dialog', event.videoId);
								if (event.control == '弃置化身') {
									next.set('selectButton', [1, 3]);
									next.set('filterButton', function (button) {
										return button.link != _status.event.current;
									});
									next.set('current', player.storage.upgrade_huashen.current);
								} else {
									next.set('ai', function (button) {
										return player.storage.upgrade_huashen.map[button.link].includes(_status.event.choice) ? 2.5 : 1 + Math.random();
									});
									next.set('choice', event.aiChoice);
								}
								var prompt = event.control == '弃置化身' ? '选择弃置至多3张化身' : '选择要切换的化身';
								var func = function (id, prompt) {
									var dialog = get.idDialog(id);
									if (dialog) {
										dialog.content.childNodes[0].innerHTML = prompt;
									}
								};
								if (player.isOnline2()) {
									player.send(func, event.videoId, prompt);
								} else if (event.isMine()) {
									func(event.videoId, prompt);
								}
								('step 2');
								if (result.bool && event.control != '弃置化身') {
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
									var list = player.storage.upgrade_huashen.map[event.card].slice(0);
									list.push('返回');
									player
										.chooseControl(list)
										.set('choice', event.aiChoice)
										.set('ai', function () {
											return _status.event.choice;
										});
								} else {
									lib.skill.upgrade_huashen.removeHuashen(player, result.links.slice(0));
									lib.skill.upgrade_huashen.addHuashens(player, result.links.length);
								}
								('step 3');
								if (result.control == '返回') {
									var func = function (id) {
										var dialog = get.idDialog(id);
										if (dialog) {
											for (var i = 0; i < dialog.buttons.length; i++) {
												dialog.buttons[i].classList.remove('selectedx');
												dialog.buttons[i].classList.remove('unselectable');
											}
										}
									};
									if (player.isOnline2()) {
										player.send(func, event.videoId);
									} else if (event.isMine()) {
										func(event.videoId);
									}
									event._result = {
										control: '更换化身',
									};
									event.goto(1);
									return;
								}
								if (player.isOnline2()) {
									player.send('closeDialog', event.videoId);
								}
								event.dialog.close();
								delete _status.noclearcountdown;
								if (!_status.noclearcountdown) {
									game.stopCountChoose();
								}
								if (event.control == '弃置化身') return;
								if (player.storage.upgrade_huashen.current != event.card) {
									player.storage.upgrade_huashen.current = event.card;
									game.broadcastAll(
										function (character, player) {
											player.sex = lib.character[character][0];
											player.group = lib.character[character][1];
											player.node.name.dataset.nature = get.groupnature(player.group);
										},
										event.card,
										player
									);
								}
								var link = result.control;
								player.storage.upgrade_huashen.current2 = link;
								if (!player.additionalSkills.upgrade_huashen || !player.additionalSkills.upgrade_huashen.includes(link)) {
									player.addAdditionalSkill('upgrade_huashen', link);
									player.flashAvatar('upgrade_huashen', event.card);
									game.log(player, '获得技能', '#g【' + get.translation(link) + '】');
									player.popup(link);
								}
							},
							init(player, skill) {
								if (!player.storage[skill])
									player.storage[skill] = {
										character: [],
										map: {},
									};
							},
							group: 'upgrade_huashen_init',
							trigger: {
								player: ['phaseBegin', 'phaseEnd', 'upgrade_huashen'],
							},
							filter(event, player, name) {
								//if(name=='phaseBegin'&&game.phaseNumber==1) return false;
								return player.storage.upgrade_huashen && player.storage.upgrade_huashen.character.length;
							},
							banned: ['lisu', 'sp_xiahoudun', 'xushao', 'zhoutai', 'old_zhoutai'],
							addHuashen(player) {
								if (!player.storage.upgrade_huashen) return;
								if (!_status.characterlist) {
									if (_status.connectMode) var list = get.charactersOL();
									else {
										var list = [];
										for (var i in lib.character) {
											if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
											list.push(i);
										}
									}
									game.countPlayer2(function (current) {
										list.remove(current.name);
										list.remove(current.name1);
										list.remove(current.name2);
										if (current.storage.upgrade_huashen && current.storage.upgrade_huashen.character) list.removeArray(current.storage.upgrade_huashen.character);
									});
									_status.characterlist = list;
								}
								_status.characterlist.randomSort();
								var bool = false;
								for (var i = 0; i < _status.characterlist.length; i++) {
									var name = _status.characterlist[i];
									if (name.includes('zuoci') || name.indexOf('key') == 0 || lib.skill.upgrade_huashen.banned.includes(name) || player.storage.upgrade_huashen.character.includes(name)) continue;
									var skills = lib.character[name][3];
									for (var j = 0; j < skills.length; j++) {
										var info = lib.skill[skills[j]];
										if (info.charlotte || (info.unique && !info.gainable) || info.juexingji || info.limited || info.zhuSkill || info.hiddenSkill || info.dutySkill) skills.splice(j--, 1);
									}
									if (skills.length) {
										player.storage.upgrade_huashen.character.push(name);
										player.storage.upgrade_huashen.map[name] = skills;
										_status.characterlist.remove(name);
										return name;
									}
								}
							},
							addHuashens(player, num) {
								var list = [];
								for (var i = 0; i < num; i++) {
									var name = lib.skill.upgrade_huashen.addHuashen(player);
									if (name) list.push(name);
								}
								if (list.length) {
									game.log(player, '获得了', get.cnNumber(list.length) + '张', '#g化身');
									lib.skill.upgrade_huashen.drawCharacter(player, list);
								}
							},
							removeHuashen(player, links) {
								player.storage.upgrade_huashen.character.removeArray(links);
								_status.characterlist.addArray(links);
								game.log(player, '移去了', get.cnNumber(links.length) + '张', '#g化身');
							},
							drawCharacter(player, list) {
								game.broadcastAll(
									function (player, list) {
										if (player.isUnderControl(true)) {
											var cards = [];
											for (var i = 0; i < list.length; i++) {
												var cardname = 'huashen_card_' + list[i];
												lib.card[cardname] = {
													fullimage: true,
													image: 'character:' + list[i],
												};
												lib.translate[cardname] = get.rawName2(list[i]);
												cards.push(game.createCard(cardname, '', ''));
											}
											player.$draw(cards, 'nobroadcast');
										}
									},
									player,
									list
								);
							},
							intro: {
								onunmark(storage, player) {
									_status.characterlist.addArray(storage.character);
									storage.character = [];
								},
								mark(dialog, storage, player) {
									if (storage && storage.current) dialog.addSmall([[storage.current], 'character']);
									if (storage && storage.current2) dialog.add('<div><div class="skill">【' + get.translation(lib.translate[storage.current2 + '_ab'] || get.translation(storage.current2).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(storage.current2, player) + '</div></div>');
									if (storage && storage.character.length) {
										if (player.isUnderControl(true)) {
											dialog.addSmall([storage.character, 'character']);
										} else {
											dialog.addText('共有' + get.cnNumber(storage.character.length) + '张<化身>');
										}
									} else {
										return '没有化身';
									}
								},
								content(storage, player) {
									return '共有' + get.cnNumber(storage.character.length) + '张<化身>';
								},
								markcount(storage, player) {
									if (storage && storage.character) return storage.character.length;
									return 0;
								},
							},
						},
						upgrade_huashen_init: {
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return event.name != 'phase' || game.phaseNumber == 0;
							},
							content() {
								lib.skill.upgrade_huashen.addHuashens(player, 5);
								player.markSkill('upgrade_huashen');
								var next = game.createEvent('upgrade_huashen');
								next.player = player;
								next._trigger = trigger;
								next.triggername = 'upgrade_huashen';
								next.setContent(lib.skill.upgrade_huashen.content);
							},
						},
						//rexingsheng:{audio:2},
						upgrade_xinsheng: {
							//mode:['identity','single','doudizhu'],
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['recoverAfter', 'loseHpAfter', 'damageAfter'],
							},
							forced: true,
							content() {
								lib.skill.upgrade_huashen.addHuashens(player, trigger.num);
							},
						},
						//甘宁
						upgrade_fenwei: {
							audio: 'ext:蒸蒸日上/audio:2',
							usable: 1,
							trigger: {
								global: 'useCardToPlayered',
							},
							filter(event, player) {
								if (event.parent.triggeredTargets3.length > 1) return false;
								if (get.type(event.card) != 'trick') return false;
								if (get.info(event.card).multitarget) return false;
								if (event.targets.length < 2) return false;
								return true;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('upgrade_fenwei'), [1, trigger.targets.length], function (card, player, target) {
										return _status.event.targets.includes(target);
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										if (game.phaseNumber > game.players.length * 2 && trigger.targets.length >= game.players.length - 1 && !trigger.excluded.includes(target)) {
											return -get.effect(target, trigger.card, trigger.player, _status.event.player);
										}
										return -1;
									})
									.set('targets', trigger.targets);
								('step 1');
								if (result.bool) {
									trigger.parent.excluded.addArray(result.targets);
									player.chooseDrawRecover(2, true);
								}
							},
						},
						upgrade_qixi: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'chooseToUse',
							filterCard(card) {
								return get.color(card) == 'black';
							},
							position: 'hes',
							viewAs: {
								name: 'guohe',
							},
							viewAsFilter(player) {
								if (
									!player.countCards('hes', {
										color: 'black',
									})
								)
									return false;
							},
							prompt: '将一张黑色牌当【过河拆桥】使用',
							check(card) {
								return 4 - get.value(card);
							},
							mod: {
								selectTarget(card, player, range) {
									if (game.players.length > 2 && card.name == 'guohe' && Array.isArray(range) && range[1] != -1) range[1]++;
								},
							},
						},
						//周泰
						upgrade_buqu: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'chooseToUseBefore',
							},
							forced: true,
							preHidden: true,
							filter(event, player) {
								return event.type == 'dying' && player.isDying() && event.dying == player;
							},
							content() {
								'step 0';
								event.card = get.cards()[0];
								if (player.storage.upgrade_buqu == undefined) player.storage.upgrade_buqu = [];
								player.storage.upgrade_buqu.push(event.card);
								//event.trigger("addCardToStorage");
								game.cardsGotoSpecial(event.card);
								player.showCards(event.card, '不屈');
								player.markSkill('upgrade_buqu');
								('step 1');
								//	for(var i=0;i<player.storage.upgrade_buqu.length-1;i++){
								//			if(event.card.number&&event.card.number==player.storage.upgrade_buqu[i].number){
								if (get.subtype(event.card) == 'equip1') {
									player.storage.upgrade_buqu.remove(event.card);
									player.markSkill('upgrade_buqu');
									game.cardsDiscard(event.card);
									return;
								}
								//}
								trigger.cancel();
								trigger.result = {
									bool: true,
								};
								if (player.hp <= 0) {
									player.recover(1 - player.hp);
								}
							},
							mod: {
								maxHandcardBase(player, num) {
									if (get.mode() != 'guozhan' && player.storage.upgrade_buqu && player.storage.upgrade_buqu.length) return player.storage.upgrade_buqu.length;
								},
							},
							ai: {
								save: true,
								mingzhi: true,
								effect: {
									target(card, player, target, current) {
										if ((card.name == 'tao' || card.name == 'jiu' || (target.getEquip(1) && get.subtype(card) == 'equip1')) && target.hp > 0 && target == player) return [0, 0];
									},
								},
								skillTagFilter(player, tag, target) {
									if (player != target) return false;
								},
							},
							intro: {
								content: 'cards',
								onunmark(storage, player) {
									if (storage && storage.length) {
										player.$throw(storage, 1000);
										game.cardsDiscard(storage);
										delete player.storage.upgrade_buqu;
									}
								},
							},
						},
						upgrade_fenji: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'phaseJieshuBegin',
							},
							filter(event, player) {
								if ((event.player.hp <= 1 || event.player.countCards('h') <= 1) && event.player.isAlive()) return true;
								return false;
							},
							preHidden: true,
							check(event, player) {
								return get.attitude(player, event.player) > 2;
							},
							content() {
								player.line(trigger.player, 'green');
								trigger.player.draw(3);
								player.loseHp();
							},
						},
						upgrade_keji: {
							audio: 'ext:蒸蒸日上/audio:2',
							audioname: ['re_lvmeng', 'sp_lvmeng'],
							trigger: {
								player: 'phaseDiscardBefore',
							},
							frequent(event, player) {
								return player.needsToDiscard();
							},
							filter(event, player) {
								if (player.getHistory('skipped').includes('phaseUse')) return true;
								var history = player.getHistory('useCard').concat(player.getHistory('respond'));
								for (var i = 0; i < history.length; i++) {
									if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
								}
								return true;
							},
							content() {
								trigger.cancel();
								player.draw();
								if (player.isMinHp(true)) {
									player.recover();
								}
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (player != target && player.hasSkill('upgrade_qinxue') && !player.hasSkill('gongxin') && player == _status.currentPhase && player.isMinHp(true) && (card.name == 'sha' || (player.hp > 0 && card.name == 'jiu'))) return [1, -7];
									},
								},
							},
						},
						upgrade_qinxue: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'qinxue',
						},
						upgrade_botu: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseAfter',
							},
							forced: true,
							filter(event, player) {
								if (Math.random() <= Math.min(0.75, (Math.PI * game.roundNumber) / 100)) return true;
								var history = player.getHistory('useCard', function (evt) {
									return evt.isPhaseUsing();
								});
								var suits = [];
								for (var i = 0; i < history.length; i++) {
									var suit = history[i].card.suit;
									if (suit) suits.add(suit);
								}
								return suits.length == 4;
							},
							content() {
								player.phase('nodelay');
							},
						},
						upgrade_leiji: {
							group: 'upgrade_leiji_misa',
							audio: 'ext:蒸蒸日上/audio:2',
							derivation: 'upgrade_leiji_faq',
							audioname: ['boss_qinglong'],
							trigger: {
								global: ['useCard', 'respond'],
							},
							filter(event, player) {
								if (get.distance(player, event.player) > 1 && player != event.player) return false;
								return event.card.name == 'shan' || (event.name == 'useCard' && event.card.name == 'shandian');
							},
							judgeCheck(card, bool) {
								var suit = card.suit;
								if (suit == 'spade') {
									if (bool && card.number > 1 && card.number < 10) return 5;
									return 4;
								}
								if (suit == 'club') return 2;
								return 0;
							},
							//usable:2,
							content() {
								player.judge(lib.skill.upgrade_leiji.judgeCheck).judge2 = function (result) {
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
											var be = target.countCards('e', {
												color: 'black',
											});
											if (target.countCards('h', 'shan') && be) {
												if (!target.hasSkill('xinguidao') && !target.hasSkill('upgrade_guidao')) return 0;
												return [0, hastarget ? target.countCards('he') / 2 : 0];
											}
											if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
												if (!target.hasSkill('xinguidao') && !target.hasSkill('upgrade_guidao')) return 0;
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
											if (!target.hasSkill('xinguidao') && !target.hasSkill('upgrade_guidao')) return [1, 0.05];
											return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
										}
									},
								},
							},
						},
						upgrade_leiji_misa: {
							audio: 'xinleiji',
							trigger: {
								player: 'judgeAfter',
							},
							forced: true,
							disableReason: ['暴虐', '助祭', '弘仪', '孤影'],
							filter(event, player) {
								return !lib.skill.upgrade_leiji_misa.disableReason.includes(event.judgestr) && ['spade', 'club'].includes(event.result.suit);
							},
							content() {
								'step 0';
								event.num = 1 + ['club', 'spade'].indexOf(trigger.result.suit);
								if (event.num == 1 && player.isDamaged()) {
									player.recover();
								}
								player.chooseTarget('雷击:是否对一名角色造成' + event.num + '点雷电伤害？', lib.filter.notMe).ai = function (target) {
									var player = _status.event.player;
									return get.damageEffect(target, player, player, 'thunder');
								};
								('step 1');
								if (result.bool && result.targets && result.targets.length) {
									player.line(result.targets, 'thunder');
									result.targets[0].damage(event.num, 'thunder');
								}
							},
						},
						upgrade_huangtian: {
							audio: 'ext:蒸蒸日上/audio:2',
							group: 'xinhuangtian',
						},
						upgrade_guidao: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'xinguidao',
						},
						upgrade_leiji_faq: {},
						upgrade_qiangxi: {
							subSkill: {
								off: {},
							},
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							filterCard(card) {
								return card.name == 'sha' || get.subtype(card) == 'equip1';
							},
							selectCard() {
								return [0, 1];
							},
							filterTarget(card, player, target) {
								if (player == target) return false;
								if (target.hasSkill('upgrade_qiangxi_off')) return false;
								return player.inRange(target);
							},
							content() {
								'step 0';
								if (cards.length == 0) {
									player.loseHp();
								}
								('step 1');
								if (target.hp < player.hp) {
									target.damage('nocard', 2);
								} else {
									target.damage('nocard');
								}
								('step 2');
								if (
									!game.hasPlayer(function (current) {
										return current != player && current.hasSkill('upgrade_qiangxi_off');
									})
								)
									player.draw(Math.min(5, target.maxHp - target.hp));
								target.addTempSkill('upgrade_qiangxi_off');
							},
							check(card) {
								return 10 - get.value(card);
							},
							position: 'he',
							ai: {
								order: 8.5,
								result: {
									target(player, target) {
										if (!ui.selected.cards.length) {
											if (player.hp < 2) return 0;
											if (target.hp >= player.hp) return 0;
										}
										return get.damageEffect(target, player) * (1 + target.maxHp - target.hp);
									},
								},
							},
							threaten: 1.5,
						},
						upgrade_ranshang: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							onremove(player) {
								delete player.storage.upgrade_ranshang;
							},
							filter(event, player) {
								return event.nature == 'fire';
							},
							forced: true,
							check() {
								return false;
							},
							content() {
								player.addMark('upgrade_ranshang', 1);
							},
							intro: {
								name2: '燃',
								content: 'mark',
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha') {
											if (card.nature == 'fire' || player.hasSkill('zhuque_skill')) return 2;
										}
										if (get.tag(card, 'fireDamage') && current < 0) return 2;
									},
								},
							},
							group: 'upgrade_ranshang2',
						},
						upgrade_ranshang2: {
							audio: 'upgrade_ranshang',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							filter(event, player) {
								return player.countMark('upgrade_ranshang') > 0;
							},
							content() {
								player.loseHp(player.countMark('upgrade_ranshang'));
								if (player.countMark('upgrade_ranshang') > 2) {
									player.loseMaxHp(2);
									player.draw(5);
									if (player.countMark('upgrade_ranshang') > 3) {
										var card = get.cardPile(function (card) {
											return card.name == 'nanman';
										});
										if (card) player.gain(card, 'gain2');
									}
								}
							},
						},
						upgrade_hanyong: {
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return event.card && (event.card.name == 'nanman' || event.card.name == 'wanjian' || (event.card.name == 'sha' && event.card.suit == 'spade')) && player.isDamaged();
							},
							audio: 'ext:蒸蒸日上/audio:2',
							content() {
								trigger.baseDamage++;
								if (game.roundNumber <= player.hp) player.addMark('upgrade_ranshang', 2);
							},
						},
						upgrade_hanyong3: {
							trigger: {
								source: 'damageBegin1',
							},
							forced: true,
							filter(event, player) {
								return event.card == player.storage.upgrade_hanyong3;
							},
							content() {
								trigger.num++;
							},
						},
						upgrade_huoji: {
							position: 'hes',
							audio: 'ext:蒸蒸日上/audio:2',
							audioname: ['ol_sp_zhugeliang', 'ol_pangtong'],
							enable: 'chooseToUse',
							filterCard(card) {
								return get.color(card) == 'red';
							},
							viewAs: {
								name: 'huogong',
								nature: 'fire',
							},
							viewAsFilter(player) {
								if (
									!player.countCards('hes', {
										color: 'red',
									})
								)
									return false;
							},
							prompt: '将一张红色牌当火攻使用',
							check(card) {
								var player = _status.currentPhase;
								if (player.countCards('h') > player.hp) {
									return 6 - get.value(card);
								}
								return 4 - get.value(card);
							},
							ai: {
								fireAttack: true,
							},
						},
						upgrade_kanpo: {
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
									return lib.skill.rekanpo.mod.aiValue.apply(this, arguments);
								},
							},
							audio: 'ext:蒸蒸日上/audio:2',
							audioname: ['ol_sp_zhugeliang', 'ol_pangtong'],
							position: 'hes',
							enable: 'chooseToUse',
							filterCard(card) {
								return get.color(card) == 'black';
							},
							viewAsFilter(player) {
								return (
									player.countCards('hes', {
										color: 'black',
									}) > 0
								);
							},
							viewAs: {
								name: 'wuxie',
							},
							prompt: '将一张黑色牌当无懈可击使用',
							check(card) {
								return 8 - get.value(card);
							},
						},
						upgrade_quhu: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'quhu',
						},
						upgrade_jieming: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								('step 1');
								player.chooseTarget(get.prompt('upgrade_jieming'), '令一名角色摸2+x张牌(x为其已损失的体力值,且至多为5).若其手牌数少于体力上限,你摸一张牌').set('ai', function (target) {
									var att = get.attitude(_status.event.player, target);
									if (target.hasSkillTag('nogain')) att /= 6;
									if (target == _status.event.player && target.maxHp - target.hp > 1) return (2 + target.maxHp - target.hp) * 1.2;
									if (att > 2) {
										if (target.hp < target.maxHp) return 2 + (target.maxHp - target.hp);
										if (target.maxHp - target.countCards('h') > 2 + (target.maxHp - target.hp)) return 2 * att;
										return att;
									}
									return att / 3;
								});
								('step 2');
								if (result.bool) {
									event.current = result.targets[0];
									player.line(event.current, 'thunder');
									event.current.draw(2 + Math.min(5, event.current.maxHp - event.current.hp));
									event.count--;
								} else event.finish();
								('step 3');
								if (event.current.countCards('h') < event.current.maxHp) {
									player.draw();
								}
								if (event.count > 0) event.goto(1);
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage') && target.hp > 1) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											var max = 0;
											var players = game.filterPlayer();
											for (var i = 0; i < players.length; i++) {
												if (get.attitude(target, players[i]) > 0) {
													max = Math.max(Math.min(5, players[i].hp) - players[i].countCards('h'), max);
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
						upgrade_shuangxiong: {
							trigger: {
								player: 'phaseDrawBegin1',
							},
							group: 'reshuangxiong2',
							audio: 'shuangxiong',
							audioname: ['re_yanwen'],
							check(event, player) {
								if (player.countCards('h') > player.hp) return true;
								if (player.countCards('h') > 3) return true;
								return false;
							},
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								'step 0';
								trigger.changeToZero();
								event.cards = get.cards(2);
								event.videoId = lib.status.videoId++;
								game.broadcastAll(
									function (player, id, cards) {
										var str;
										if (player == game.me && !_status.auto) {
											str = '【双雄】选择获得其中一张牌';
										} else {
											str = '双雄';
										}
										var dialog = ui.create.dialog(str, cards);
										dialog.videoId = id;
									},
									player,
									event.videoId,
									event.cards
								);
								event.time = get.utc();
								game.addVideo('showCards', player, ['双雄', get.cardsInfo(event.cards)]);
								game.addVideo('delay', null, 2);
								('step 1');
								var next = player.chooseButton([1, 1], true);
								next.set('dialog', event.videoId);
								next.set('ai', function (button) {
									var player = _status.event.player;
									var color = get.color(button.link);
									var value = get.value(button.link, player);
									if (
										player.countCards('h', {
											color: color,
										}) > player.countCards('h', ['red', 'black'].remove(color)[0])
									)
										value += 5;
									return value;
								});
								('step 2');
								if (result.bool && result.links) {
									var cards2 = [];
									for (var i of result.links) {
										cards2.push(i);
										cards.remove(i);
									}
									game.cardsDiscard(cards);
									event.card2 = cards2[0];
								}
								var time = 1000 - (get.utc() - event.time);
								if (time > 0) {
								}
								('step 3');
								game.broadcastAll('closeDialog', event.videoId);
								var card2 = event.card2;
								player.gain(card2, 'gain2');
								player.addTempSkill('shuangxiong2');
								player.storage.shuangxiong = get.color(card2);
							},
						},
						upgrade_shuangxiong2: {
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								var evt = event.parent;
								return (evt && evt.name == 'juedou' && evt[player == evt.player ? 'targetCards' : 'playerCards'].length) > 0;
							},
							content() {
								'step 0';
								var evt = trigger.parent;
								var cards = evt[player == evt.player ? 'targetCards' : 'playerCards'].slice(0);
								for (var i = 0; i < cards.length; i++) {
									if (get.position(cards[i]) != 'd') cards.remove(cards[i--]);
								}
								if (!cards.length) event.finish();
								else {
									event.cards = cards;
									player.chooseBool('是否发动【双雄】,获得' + get.translation(event.cards) + '?').ai = function () {
										return true;
									};
								}
								('step 1');
								if (result.bool) {
									player.gain(cards, 'gain2');
								}
							},
						},
						upgrade_lb_mashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						upgrade_mc_mashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						upgrade_myl_mashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						upgrade_md_mashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						upgrade_mt_mashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						upgrade_mt2_mashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						upgrade_xiongyi: {
							enable: 'phaseUse',
							audio: 'ext:蒸蒸日上/audio:2',
							limited: true,
							filterTarget(card, player, target) {
								if (get.mode() == 'guozhan') {
									if (player == target) return true;
									if (player.identity == 'ye') return false;
									if (player.identity == 'unknown') {
										if (_status.yeidentity.includes(player._group)) {
											return false;
										} else if (get.zhu(player) || get.population(player._group) + 1 <= get.population() / 2) {
											return player._group == target.identity;
										} else {
											return false;
										}
									}
									return player.identity == target.identity;
								} else {
									return true;
								}
							},
							multitarget: true,
							multiline: true,
							selectTarget() {
								if (get.mode() == 'guozhan') return -1;
								return [1, 4];
							},
							content() {
								'step 0';
								player.awakenSkill('upgrade_xiongyi');
								game.asyncDraw(targets, 4);
								var targetn = targets;
								for (var i = 0; i < targetn.length; i++) {
									targetn[i].addSkill(['retieji', 'upgrade_mt2_mashu']);
									game.log(targetn[i], '获得了技能', '#g【界铁骑】和【马术】');
								}
								('step 1');
								if (player.isDamaged()) {
									if (get.mode() == 'guozhan') {
										if (player.isMinor(true)) {
											player.recover();
										}
									} else if (targets.length <= 2) {
										player.recover();
										player.phase('nodelay');
									}
								}
							},
							ai: {
								order: 1,
								result: {
									target(player) {
										var num = player.countCards('h');
										if (player.hp == 1) return 1;
										if (player.hp == 2 && num <= 2) return 1;
										if (player.hp == 3 && num <= 1) return 1;
										if (game.phaseNumber < game.players.length * 2) return 0;
										if (player.hasUnknown()) return 0;
										return 2;
									},
								},
							},
						},
						upgrade_tianyi: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player.canCompare(target);
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool) {
									var card = get.cardPile(function (card) {
										return card.name == 'sha';
									});
									if (card) player.gain(card, 'gain2');
									player.addTempSkill('upgrade_tianyi2');
								} else {
									player.addTempSkill('upgrade_tianyi3');
									player.draw();
								}
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
									return (
										get.order({
											name: 'sha',
										}) - 1
									);
								},
								result: {
									player(player) {
										if (player.countCards('h', 'sha') > 0) return 0.6;
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
								threaten: 1.6,
							},
						},
						upgrade_tianyi2: {
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
								selectTarget(card, player, range) {
									if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1]++;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 2;
								},
							},
							charlotte: true,
						},
						upgrade_tianyi3: {
							mod: {
								cardEnabled(card) {
									if (card.name == 'sha') return false;
								},
							},
							charlotte: true,
						},
						upgrade_wushuang: {
							shaRelated: true,
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							mod: {
								selectTarget(card, player, range) {
									if ((Array.isArray(range) && range[1] == -1) || game.players.length < 3) return;
									if (player.isMaxHp() && (card.name == 'juedou' || card.name == 'sha')) range[1] += Math.floor(player.hp / 2);
								},
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
							group: ['upgrade_wushuang1', 'upgrade_wushuang2'],
							preHidden: ['upgrade_wushuang1', 'upgrade_wushuang2'],
						},
						upgrade_wushuang1: {
							audio: 'upgrade_wushuang',
							audioname: ['re_lvbu', 'shen_lvbu', 'lvlingqi'],
							trigger: {
								player: 'useCardToPlayered',
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
							},
							//priority:-1,
							logTarget: 'target',
							content() {
								var id = trigger.target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[id]) map[id] = {};
								if (typeof map[id].shanRequired == 'number') {
									map[id].shanRequired++;
								} else {
									map[id].shanRequired = 2;
								}
							},
							ai: {
								threaten: 2,
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
								},
							},
						},
						upgrade_wushuang2: {
							audio: 'upgrade_wushuang',
							audioname: ['re_lvbu', 'shen_lvbu', 'lvlingqi'],
							trigger: {
								player: 'useCardToPlayered',
								target: 'useCardToTargeted',
							},
							forced: true,
							logTarget(trigger, player) {
								return player == trigger.player ? trigger.target : trigger.player;
							},
							filter(event, player) {
								return event.card.name == 'juedou';
							},
							//priority:-1,
							content() {
								var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
								var idt = trigger.target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[idt]) map[idt] = {};
								if (!map[idt].shaReq) map[idt].shaReq = {};
								if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
								map[idt].shaReq[id]++;
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if ((arg && arg.card.name != 'juedou') || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
								},
							},
						},
						upgrade_liyu: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'new_liyu',
						},
						upgrade_kuanggu: {
							trigger: {
								source: 'damageSource',
							},
							filter(event, player) {
								return event.num > 0;
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							audioname: ['re_weiyan', 'ol_weiyan'],
							preHidden: true,
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								var choice;
								if (
									player.isDamaged() &&
									get.recoverEffect(player) > 0 &&
									player.countCards('hs', function (card) {
										return card.name == 'sha' && player.hasValueTarget(card);
									}) >= player.getCardUsable('sha')
								) {
									choice = 'recover_hp';
								} else {
									choice = 'draw_card';
								}
								var next = player.chooseDrawRecover(get.prompt(event.name));
								next.set('choice', choice);
								next.set('ai', function () {
									return _status.event.parent.choice;
								});
								next.setHiddenSkill('upgrade_kuanggu');
								('step 2');
								if (result.control != 'cancel2') {
									event.num--;
									if (event.num > 0) {
										event.goto(1);
									}
								}
							},
						},
						upgrade_tuxi: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseJieshuEnd'],
							},
							forced: true,
							filter(event, player) {
								return (
									game.hasPlayer(function (current) {
										return current != player && current.countCards('h');
									}) > 0
								);
							},
							content() {
								'step 0';
								var check;
								var i,
									num = game.countPlayer(function (current) {
										return current != player && current.countCards('h') && get.attitude(player, current) <= 0;
									});
								check = num > 0;
								player
									.chooseTarget(
										get.prompt('upgrade_tuxi'),
										'获得至多' + get.cnNumber(game.players.length > 2 && player.isMinHp() ? 3 : game.players.length > 2 ? 2 : 1) + '名其他角色的各一张手牌',
										[1, game.players.length > 2 && player.isMinHp() ? 3 : game.players.length > 2 ? 2 : 1],
										function (card, player, target) {
											return target.countCards('h') > 0 && player != target;
										},
										function (target) {
											if (!_status.event.aicheck) return 0;
											var att = get.attitude(_status.event.player, target);
											if (target.hasSkill('tuntian')) return att / 10;
											if (target.hasSkill('upgrade_tuntian')) return att / 10;
											return 1 - att;
										}
									)
									.set('aicheck', check);
								('step 1');
								if (result.bool) {
									player.gainMultiple(result.targets);
								} else {
									event.finish();
								}
								('step 2');
							},
							ai: {
								threaten: 3.5,
								expose: 0.3,
								effect: {
									target(card, player, target, current) {
										if (card.name == 'bingliang') return 0.1;
									},
								},
							},
						},
						upgrade_tiandu: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'tiandu',
						},
						upgrade_yiji: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['damageEnd', 'recoverEnd'],
							},
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								event.count = 1;
								('step 1');
								player.draw(4);
								player.chooseToDiscard('he', 2, true);
								event.given = 0;
								('step 2');
								player.chooseCardTarget({
									filterCard: true,
									selectCard: [1, 2 - event.given],
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
											if (target.hasSkillTag('nodu')) return 0;
											return 1 - att;
										}
										return att - 4;
									},
									prompt: '请选择要送人的卡牌',
								});
								('step 3');
								if (result.bool) {
									player.line(result.targets, 'green');
									result.targets[0].gain(result.cards, player, 'giveAuto');
									result.targets[0].addTempSkill('reyiji');
									event.given += result.cards.length;
									if (event.given < 2) {
										event.temp = result.targets[0];
										event.goto(2);
									} else if (event.count < trigger.num) {
										delete event.temp;
										event.count++;
										player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
									} else event.finish();
								} else if (event.count < trigger.num) {
									delete event.temp;
									event.count++;
									player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
								} else event.finish();
								('step 4');
								if (result.bool) {
									event.goto(1);
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								result: {
									effect(card, player, target) {
										if (get.tag(card, 'recover') && player.hp < player.maxHp && player == target) return [1, 6];
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
											if (player.hp >= 4) return [1, num * 2];
											if (target.hp == 3) return [1, num * 1.5];
											if (target.hp == 2) return [1, num * 0.5];
										}
									},
								},
								threaten: 0.6,
							},
						},
						upgrade_wusheng: {
							audio: 'ext:蒸蒸日上/audio:3',
							inherit: 'new_rewusheng',
							check(card) {
								var player = _status.event.player;
								if (
									game.hasPlayer(function (current) {
										return current != player && current.hasSkill('upgrade_yijue2');
									}) &&
									card.suit == 'heart'
								)
									return 10 - get.value(card);
								return 4 - get.value(card);
							},
						},
						upgrade_yijue: {
							audio: 'ext:蒸蒸日上/audio:3',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('h');
							},
							filterCard: false,
							content() {
								'step 0';
								target.chooseCard(true).ai = function (card) {
									var player = _status.event.player;
									if ((player.hasShan() || player.hp < 3) && get.color(card) == 'black') return 0.5;
									return Math.max(1, 20 - get.value(card));
								};
								('step 1');
								target.showCards(result.cards);
								event.card2 = result.cards[0];
								if (get.color(event.card2) == 'black') {
									if (!target.hasSkill('fengyin')) {
										target.addTempSkill('fengyin', {
											player: 'phaseUseBegin',
										});
									}
									target.addTempSkill('upgrade_yijue2');
									event.finish();
								} else {
									player.gain(event.card2, target, 'give', 'bySelf');
									if (target.hp <= target.maxHp) {
										player.chooseBool('是否让目标回复1点体力各摸一张牌？').ai = function (event, player) {
											return get.recoverEffect(target, player, player) > 0;
										};
									}
								}
								('step 2');
								if (result.bool) {
									target.recover();
									game.asyncDraw([target, player]);
								}
							},
							ai: {
								result: {
									target(player, target) {
										var hs = player.getCards('h');
										if (hs.length < 3) return 1;
										if (target.countCards('h') > target.hp + 1 && get.recoverEffect(target) > 0) {
											return 1;
										}
										if (
											player.canUse('sha', target) &&
											(player.countCards('h', 'sha') ||
												player.countCards('he', {
													color: 'red',
												}))
										) {
											return -2;
										}
										return -0.5;
									},
								},
								order: 11,
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (!arg.target.hasSkillTag('upgrade_yijue2')) return false;
								},
							},
						},
						upgrade_yijue2: {
							trigger: {
								player: 'damageBegin1',
							},
							filter(event, player) {
								return event.source && event.source.hasSkill('upgrade_yijue') && event.card && event.card.name == 'sha' && event.card.suit == 'heart' && event.notLink();
							},
							silent: true,
							popup: false,
							forced: true,
							content() {
								trigger.num += Math.floor(player.maxHp / 2);
							},
							mark: true,
							mod: {
								globalTo(from, to, current) {
									return current - 1;
								},
								cardEnabled2(card) {
									if (get.position(card) == 'h') return false;
								},
							},
							intro: {
								content: '不能使用或打出手牌;其他角色计算与你的距离-1',
							},
						},
						upgrade_paoxiao: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'useCard1',
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								if (!player.hasSkill('upgrade_paoxiao2')) {
									player.addTempSkill('upgrade_paoxiao2');
								} else {
									player.addMark('upgrade_paoxiao2', 1, false);
									if (player.countMark('upgrade_paoxiao2')) player.draw(Math.min(3, player.countMark('upgrade_paoxiao2')));
								}
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
								targetInRange(card, player) {
									if (card.name == 'sha') return true;
								},
							},
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (!get.zhu(player, 'shouyue')) return false;
									if (arg && arg.name == 'sha') return true;
									return false;
								},
							},
						},
						upgrade_paoxiao2: {
							trigger: {
								source: 'damageBegin1',
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.countMark('upgrade_paoxiao2') > 0;
							},
							content() {
								trigger.num += player.countMark('upgrade_paoxiao2');
								player.removeSkill('upgrade_paoxiao2');
							},
							intro: {
								content: '本回合内下一次使用【杀】造成伤害时令伤害值+#',
							},
						},
						upgrade_tishen: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'oltishen',
						},
						upgrade_shangshi: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
							},
							forced: true,
							prompt(event, player) {
								return '是否发动【伤逝】将手牌摸至' + get.cnNumber(player.getDamagedHp() + 2) + '张？';
							},
							prompt2: false,
							filter(event, player) {
								if (event.getl && !event.getl(player)) return false;
								return player.getDamagedHp() > 0 && player.countCards('h') < player.getDamagedHp() + 2;
							},
							content() {
								player.draw(Math.min(7, 2 + player.getDamagedHp()) - player.countCards('h'));
							},
							ai: {
								noh: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1 && player == target) return [0, 0];
									},
								},
								skillTagFilter(player, tag) {
									if (tag == 'noh' && 2 + player.maxHp - player.hp < player.countCards('h')) {
										return false;
									}
								},
							},
							group: 'upgrade_shangshi_2nd',
						},
						upgrade_shangshi_2nd: {
							trigger: {
								player: 'damageBegin3',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							content() {
								player.chooseToDiscard('是否发动【伤逝】弃置1～3张牌？', [1, 3], 'he').set('ai', function (card) {
									if (card.name == 'tao' || card.name == 'jiu') return -1;
									var player = _status.event.player;
									if (
										player.countCards('h', {
											name: 'tao',
										}) <= 1 &&
										player.countCards('h', {
											name: 'jiu',
										}) <= 1
									)
										return (get.position(card) == 'h' ? 11 : 0.1) - get.value(card);
									if (player.countCards('h') > player.getDamagedHp() + _status.event.getTrigger().num) return 1;
									if (player.isPhaseUsing()) return 0.1 - player.getUseValue(card, null, true) / Math.max(0.1, get.value(card));
									return (get.position(card) == 'h' ? 5 : 0.1) - get.value(card);
									return (get.position(card) == 'h' ? 7.5 : 0.1) - get.value(card);
								});
							},
						},
						upgrade_kuangfu: {
							group: 'upgrade_kuangfuDirectHit',
							trigger: {
								source: 'damageSource',
							},
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.player.countCards('e');
							},
							logTarget: 'player',
							preHidden: true,
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								'step 0';
								var neg = get.attitude(player, trigger.player) <= 0;
								player
									.choosePlayerCard([1, 3], 'e', trigger.player)
									.set('ai', function (button) {
										if (_status.event.neg) {
											return get.buttonValue(button);
										}
										return 0;
									})
									.set('neg', neg);
								('step 1');
								if (result.bool) {
									for (var i of result.links) {
										trigger.player.$give(i, player, false);
										game.log(player, '获得了', i);
										player.equip(i);
									}
								}
							},
						},
						upgrade_kuangfuDirectHit: {
							audio: 'upgrade_kuangfu',
							shaRelated: true,
							trigger: {
								player: 'useCardToPlayered',
							},
							filter(event, player) {
								return event.card.name == 'sha' && (player.countCards('e') > event.target.countCards('e') || event.target.countCards('e') == 0);
							},
							logTarget: 'target',
							preHidden: true,
							forced: true,
							content() {
								trigger.parent.directHit.add(trigger.target);
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha') return false;
								},
							},
						},
						upgrade_yongsi: {
							audio: 'ext:蒸蒸日上/audio:2',
							group: ['upgrade_yongsi1', 'upgrade_yongsi2'],
							ai: {
								threaten: 2.4,
							},
						},
						upgrade_yongsi1: {
							audio: 'upgrade_yongsi',
							trigger: {
								player: 'phaseDrawBegin2',
							},
							forced: true,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								var mp = Math.min(3, Math.floor(player.hp / 2)) + game.countGroup();
								trigger.num += mp;
							},
						},
						upgrade_yongsi2: {
							audio: 'upgrade_yongsi',
							trigger: {
								player: 'phaseDiscardBegin',
							},
							forced: true,
							content() {
								var mp = Math.min(3, Math.floor(player.hp / 2)) + game.countGroup();
								player.chooseToDiscard(mp, 'h', true);
							},
						},
						upgrade_luanji: {
							inherit: 'luanji',
							audio: 'ext:蒸蒸日上/audio:2',
							line: false,
							group: 'upgrade_luanji_remove',
							check(card) {
								return 8 - get.value(card);
							},
						},
						upgrade_luanji_remove: {
							trigger: {
								player: 'useCard2',
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'wanjian' && event.targets.length;
							},
							line: false,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('upgrade_luanji'), '为' + get.translation(trigger.card) + '减少一个目标', function (card, player, target) {
										return _status.event.targets.includes(target);
									})
									.set('targets', trigger.targets)
									.set('ai', function (target) {
										var player = _status.event.player;
										return -get.effect(target, _status.event.getTrigger().card, player, player);
									});
								('step 1');
								if (result.bool) {
									trigger.targets.remove(result.targets[0]);
								}
							},
							ai: {
								unequip: true,
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.name == 'wanjian') return true;
									return false;
								},
							},
						},
						upgrade_qianxi: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								if (player.hasCard((card) => lib.filter.cardDiscardable(card, player, 'upgrade_qianxi'), 'he')) player.chooseToDiscard('he', true);
								else event.finish();
								('step 2');
								if (result.bool && game.hasPlayer((current) => current != player && get.distance(player, current) <= 1)) {
									var color = get.color(result.cards[0], player);
									event.color = color;
									color = get.translation(color);
									player
										.chooseTarget(true, '选择【潜袭】的目标', '令其本回合不能使用或打出' + color + '牌,且' + color + '防具失效,且使用牌或打出牌时,你摸两张牌并弃置一张牌;回复体力时,你摸四张牌并弃置两张牌', function (card, player, target) {
											return target != player && get.distance(player, target) <= 1;
										})
										.set('ai', function (target) {
											return -get.attitude(_status.event.player, target) * Math.sqrt(1 + target.countCards('he'));
										});
								} else event.finish();
								('step 3');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.storage.upgrade_qianxi_effect = [event.color, player];
									target.addTempSkill('upgrade_qianxi_effect');
								}
							},
							subSkill: {
								effect: {
									mark: true,
									intro: {
										markcount: () => 0,
										content(storage, player) {
											var color = get.translation(storage[0]),
												source = get.translation(storage[1]);
											return '本回合不能使用或打出' + color + '牌,且' + color + '防具失效,且使用牌或打出牌/回复体力时,' + source + '摸两张牌并弃置一张牌/' + source + '摸四张牌并弃置两张牌';
										},
									},
									charlotte: true,
									mod: {
										cardEnabled2(card, player) {
											if (get.itemtype(card) == 'card' && get.color(card) == player.getStorage('upgrade_qianxi_effect')[0]) return false;
										},
									},
									trigger: {
										player: ['recoverEnd', 'useCard', 'respond'],
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return player.storage.upgrade_qianxi_effect && player.storage.upgrade_qianxi_effect[1].isIn();
									},
									content() {
										var target = player.storage.upgrade_qianxi_effect[1];
										if (trigger.name == 'recover') {
											target.draw(4);
											target.chooseToDiscard('he', 2, true);
										} else {
											target.draw(2);
											target.chooseToDiscard('he', true);
										}
									},
									ai: {
										unequip2: true,
										skillTagFilter(player) {
											var evt = _status.event,
												color = player.getStorage('upgrade_qianxi_effect')[0];
											if (evt.name == 'lose' && evt.loseEquip) {
												var card = evt.cards[evt.num];
												if (card && get.subtype(card, false) == 'equip2' && get.color(card) == color) return true;
												return false;
											} else {
												var equip = player.getEquip(2);
												if (equip && get.color(equip) == color) return true;
												return false;
											}
										},
									},
								},
							},
						},
						upgrade_mylJS: {
							trigger: {
								source: 'dieEnd',
							},
							forced: true,
							silent: true,
							filter(event, player) {
								return player.name;
							},
							content() {
								game.playAudio('../extension/蒸蒸日上/audio/upgrade_mylJS.mp3');
							},
						},
						upgrade_fengpo: {
							group: 'upgrade_mylJS',
							shaRelated: true,
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'useCardToPlayered',
							},
							filter(event, player) {
								if (event.targets.length != 1 || !['sha', 'juedou'].includes(event.card.name)) return false;
								var evt2 = event.getParent('phaseUse');
								if (evt2.player != player) return false;
								return (
									player
										.getHistory('useCard', function (evt) {
											return evt.card.name == event.card.name && evt.getParent('phaseUse') == evt2;
										})
										.indexOf(event.parent) == 0
								);
							},
							forced: true,
							init(player) {
								game.playAudio('../extension/蒸蒸日上/audio/upgrade_mylDC.mp3');
							},
							logTarget: 'target',
							content() {
								var nd = trigger.target.countCards('hej', {
									suit: 'diamond',
								});
								if (nd > 0) {
									player.draw(nd);
								} else {
									var card = get.cardPile(function (card) {
										return card.name == 'sha';
									});
									if (card) player.gain(card, 'gain2');
								}
								var trigger2 = trigger.parent;
								if (typeof trigger2.baseDamage != 'number') {
									trigger2.baseDamage = 1;
								}
								trigger2.baseDamage += nd;
							},
						},
						upgrade_fengpo2: {
							trigger: {
								source: 'damageBegin1',
							},
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
							},
							forced: true,
							content() {
								if (typeof player.storage.upgrade_fengpo == 'number') {
									trigger.num += player.storage.upgrade_fengpo;
								}
							},
						},
						upgrade_fengpo3: {},
						upgrade_miji: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return player.hp < player.maxHp;
							},
							content() {
								'step 0';
								event.num = 1 + player.getDamagedHp();
								player.draw(event.num);
								('step 1');
								var check = player.countCards('h') - event.num;
								player
									.chooseCardTarget({
										selectCard: [1, event.num],
										filterTarget(card, player, target) {
											return player != target;
										},
										ai1(card) {
											var player = _status.event.player;
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
										prompt: '将至多' + get.cnNumber(event.num) + '张手牌交给一名其他角色',
									})
									.set('check', check);
								('step 2');
								if (result.bool) {
									result.targets[0].gain(result.cards, event.player, 'giveAuto');
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
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1 && player == target) return [0, 0];
									},
								},
							},
						},
						upgrade_wangyiJS: {
							trigger: {
								source: 'dieEnd',
							},
							silent: true,
							content() {
								game.playAudio('../extension/蒸蒸日上/audio/upgrade_wangyiJS.mp3');
							},
						},
						upgrade_zhenlie: {
							group: 'upgrade_wangyiJS',
							audio: 'ext:蒸蒸日上/audio:2',
							filter(event, player) {
								return event.player != player && event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick');
							},
							logTarget: 'player',
							check(event, player) {
								if (event.parent.excluded.includes(player)) return false;
								if (get.attitude(player, event.player) > 0) {
									return false;
								}
								if (get.tag(event.card, 'respondSha')) {
									if (event.card.name == 'sha' && (event.player.hasSkill('upgrade_liegong') || event.player.hasSkill('xinliegong'))) return true;
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
									if (event.card.name == 'shuiyanqijunx') return player.countCards('e') == 0;
									return true;
								} else if ((event.card.name == 'shunshou' || (event.card.name == 'zhujinqiyuan' && (event.card.yingbian || get.distance(event.player, player) < 0))) && player.hp > 2) {
									return true;
								}
								return false;
							},
							trigger: {
								target: 'useCardToTargeted',
							},
							init(player) {
								game.playAudio('../extension/蒸蒸日上/audio/upgrade_wangyiDC.mp3');
							},
							content() {
								'step 0';
								player.loseHp();
								('step 1');
								trigger.parent.excluded.add(player);
								('step 2');
								if (trigger.player.countCards('he')) {
									if (trigger.player.hp > player.hp) {
										player.discardPlayerCard(trigger.player, 2, 'he', true);
									} else {
										player.discardPlayerCard(trigger.player, 'he', true);
									}
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						upgrade_jijiu: {
							audio: 'ext:蒸蒸日上/audio:4',
							inherit: 'jijiu',
						},
						upgrade_qingnang: {
							subSkill: {
								off: {},
								off2: {},
							},
							audio: 'ext:蒸蒸日上/audio:4',
							enable: 'phaseUse',
							filterCard: true,
							position: 'hes',
							check(card) {
								var player = _status.event.player;
								if (
									game.countPlayer(function (current) {
										return get.recoverEffect(current, player, player) > 0 && get.attitude(player, current) > 2;
									}) > 1 &&
									get.color(card) == 'black' &&
									player.countCards('hes', {
										color: 'red',
									}) > 0
								)
									return 3 - get.value(card);
								return 9.5 - get.value(card);
							},
							filter(event, player) {
								return !player.hasSkill('upgrade_qingnang_off2');
							},
							filterTarget(card, player, target) {
								if (target.hasSkill('upgrade_qingnang_off')) return false;
								return true;
							},
							content() {
								'step 0';
								if (player.hp >= player.maxHp) player.draw();
								('step 1');
								target.addTempSkill('upgrade_qingnang_off');
								if (get.color(cards[0]) == 'black') player.addTempSkill('upgrade_qingnang_off2');
								target.recover();
								('step 2');
								target.draw(3);
								target.chooseToDiscard('he', true);
							},
							ai: {
								order(name, player) {
									if (player.hp >= player.maxHp || player.countCards('hes') == 1) return 15;
									return 1;
								},
								result: {
									target(player, target) {
										if (target.hp == 1) return 5;
										if (player == target && player.countCards('h') > player.hp) return 5;
										return 2;
									},
								},
								threaten: 3.2,
							},
						},
						upgrade_shenxian: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'loseAfter',
							},
							filter(event, player) {
								if (event.type != 'discard' || event.player == player || _status.currentPhase == player) return false;
								for (var i = 0; i < event.cards2.length; i++) {
									if (get.type(event.cards2[i], null, event.hs.includes(event.cards2[i]) ? event.player : false) == 'basic' || get.type(event.cards2[i], null, event.hs.includes(event.cards2[i]) ? event.player : false) == 'equip') {
										return true;
									}
								}
								return false;
							},
							forced: true,
							usable: 3,
							content() {
								'step 0';
								if (trigger.delay == false) game.delay();
								('step 1');
								var hx = 0;
								for (var i = 0; i < trigger.cards2.length; i++) {
									if (get.suit(trigger.cards2[i], null, trigger.hs.includes(trigger.cards2[i]) ? trigger.player : false) == 'heart' && get.type(trigger.cards2[i], null, trigger.hs.includes(trigger.cards2[i]) ? trigger.player : false) == 'basic' && player.hp < player.maxHp) hx++;
								}
								if (hx > 0) player.recover();
								player.draw();
							},
							ai: {
								threaten: 2.6,
							},
						},
						upgrade_shenxian2: {},
						upgrade_qiangwu: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.judge();
								('step 1');
								player.storage.upgrade_qiangwu = result.number;
								player.addTempSkill('upgrade_qiangwu3', 'phaseUseEnd');
							},
							ai: {
								result: {
									player: 1,
								},
								order: 11,
							},
						},
						upgrade_qiangwu3: {
							mod: {
								aiOrder(player, card, num) {
									if (card.name == 'sha' && card.number > player.storage.upgrade_qiangwu) return num + 2;
								},
								selectTarget(card, player, range) {
									if (Array.isArray(range) && range[1] == -1) return;
									if (_status.currentPhase == player && card.name == 'sha' && card.number < player.storage.upgrade_qiangwu) range[1]++;
								},
								targetInRange(card, player) {
									if (_status.currentPhase == player && card.name == 'sha' && card.number < player.storage.upgrade_qiangwu) return true;
								},
								cardUsable(card, player) {
									if (_status.currentPhase == player && card.name == 'sha' && card.number > player.storage.upgrade_qiangwu) return Infinity;
								},
							},
							trigger: {
								player: 'useCard1',
							},
							filter(event, player) {
								if (_status.currentPhase == player && event.card.name == 'sha' && event.card.number > player.storage.upgrade_qiangwu && event.addCount !== false) return true;
								return false;
							},
							forced: true,
							popup: false,
							firstDo: true,
							content() {
								trigger.addCount = false;
								if (player.stat[player.stat.length - 1].card.sha > 0) {
									player.stat[player.stat.length - 1].card.sha--;
								}
							},
						},
						upgrade_zhendu: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'phaseUseBegin',
							},
							filter(event, player) {
								return event.player.isAlive() && player.countCards('h') > 0;
							},
							forced: true,
							preHidden: true,
							content() {
								'step 0';
								var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
								if (
									player == trigger.player ||
									get.damageEffect(trigger.player, player, player) <= 0 ||
									!trigger.player.hasUseTarget(
										{
											name: 'jiu',
										},
										null,
										true
									)
								) {
									nono = true;
								} else if (trigger.player.hp > 2) {
									nono = true;
								} else if (trigger.player.hp > 1 && player.countCards('h') < 3 && trigger.player.canUse('sha', player) && !player.countCards('h', 'shan') && trigger.player.countCards('h') >= 3) {
									nono = true;
								}
								var next = player.chooseToDiscard(get.prompt2('upgrade_zhendu', trigger.player));
								next.set('ai', function (card) {
									if (_status.event.nono) return -1;
									return 7 - get.useful(card);
								});
								next.set('nono', nono);
								next.setHiddenSkill('upgrade_zhendu');
								('step 1');
								if (result.bool) {
									trigger.player.chooseUseTarget(
										{
											name: 'jiu',
										},
										true,
										'noTargetDelay',
										'nodelayx'
									);
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool && trigger.player != player) trigger.player.damage();
							},
							ai: {
								threaten: 2,
								expose: 0.3,
							},
						},
						upgrade_qiluan: {
							audio: 'upgrade_qiluan2',
							preHidden: true,
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return game.hasPlayer2(function (current) {
									return current.getStat('kill') > 0;
								});
							},
							prompt(event, player) {
								var num = game.countPlayer2(function (current) {
									return (current.getStat('kill') || 0) * (current == player ? 3 : 1);
								});
								return get.prompt('upgrade_qiluan') + '(可摸' + get.cnNumber(num) + '张牌)';
							},
							content() {
								//if(get.mode()=='guozhan'){
								//	player.draw(3);
								//}
								//else{
								player.draw(
									game.countPlayer2(function (current) {
										return (current.getStat('kill') || 0) * (current == player ? 3 : 1);
									})
								);
								//}
							},
							subSkill: {
								draw: {
									trigger: {
										global: 'dieAfter',
									},
									forced: true,
									filter(event, player) {
										return /*get.mode()!='guozhan'&&*/ player != event.source;
									},
									content() {
										player.draw();
									},
								},
							},
						},
						upgrade_qiluan2: {
							audio: 'ext:蒸蒸日上/audio:2',
						},
						upgrade_kongcheng: {
							audio: 1,
							mod: {
								targetEnabled(card, player, target, now) {
									if (target.countCards('h') == 0) {
										if (card.name == 'sha' || card.name == 'juedou' || card.name == 'tiesuo' || card.name == 'nanman') return false;
									}
								},
							},
							group: 'upgrade_kongcheng1',
							ai: {
								noh: true,
								skillTagFilter(player, tag) {
									if (tag == 'noh') {
										if (player.countCards('h') != 1) return false;
									}
								},
							},
						},
						upgrade_kongcheng1: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							firstDo: true,
							//audioname:.re_zhugeliang,
							filter(event, player) {
								if (player.countCards('h')) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQQ
										if (i.original == 'h') return true;
									}
								return false;
							},
							content() {
								player.moveCard();
							},
						},
						upgrade_guanxing: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
							},
							forced: true,
							filter(event, player, name) {
								if (name == 'phaseJieshuBegin') {
									return player.hasSkill('upgrade_guanxing_on');
								}
								return true;
							},
							content() {
								'step 0';
								var num = game.countPlayer() < 5 ? 7 : 12;
								var cards = get.cards(num);
								game.cardsGotoOrdering(cards);
								var next = player.chooseToMove();
								next.set('list', [['牌堆顶', cards], ['牌堆底']]);
								next.set('prompt', '观星:点击将牌移动到牌堆顶或牌堆底');
								next.processAI = function (list) {
									var cards = list[0][1],
										player = _status.event.player;
									var target = _status.event.getTrigger().name == 'phaseZhunbei' ? player : player.next;
									var att = get.sgn(get.attitude(player, target));
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
								if (event.triggername == 'phaseZhunbeiBegin' && top.length == 0) {
									player.addTempSkill('upgrade_guanxing_on');
								}
								player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
								game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
								game.updateRoundNumber();
							},
							subSkill: {
								on: {},
							},
						},
						upgrade_luoshen: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseUseAfter'],
							},
							forced: true,
							content() {
								'step 0';
								player.addTempSkill('upgrade_luoshen_add');
								event.cards = [];
								('step 1');
								var next = player.judge(function (card) {
									if (get.color(card) == 'black') return 1.5;
									return -1.5;
								});
								next.judge2 = function (result) {
									return result.bool;
								};
								if (get.mode() != 'guozhan' && !player.hasSkillTag('rejudge'))
									next.set('callback', function () {
										if (event.judgeResult.suit == 'heart') {
											player.draw(2);
											player.chooseToDiscard('he', 2, true);
										}
										if (event.judgeResult.color == 'black' && get.position(card, true) == 'o') {
											player.gain(card, 'gain2').gaintag.add('upgrade_luoshen');
										}
									});
								else
									next.set('callback', function () {
										if (event.judgeResult.color == 'black') event.parent.orderingCards.remove(card);
									});
								('step 2');
								if (result.bool) {
									event.cards.push(result.card);
									player.chooseBool('是否再次发动【洛神】？').set('frequentSkill', 'upgrade_luoshen');
								} else {
									event.cards = event.cards.filter((i) => get.position(i, true) == 'o');
									if (event.cards.length) {
										player.gain(event.cards, 'gain2').gaintag.add('upgrade_luoshen');
									}
									event.finish();
								}
								('step 3');
								if (result.bool) {
									event.goto(1);
								} else {
									event.cards = event.cards.filter((i) => get.position(i, true) == 'o');
									if (event.cards.length) {
										player.gain(event.cards, 'gain2').gaintag.add('upgrade_luoshen');
									}
								}
							},
							subSkill: {
								add: {
									mod: {
										ignoredHandcard(card, player) {
											if (card.hasGaintag('upgrade_luoshen')) {
												return true;
											}
										},
										cardDiscardable(card, player, name) {
											if (name == 'phaseDiscard' && card.hasGaintag('upgrade_luoshen')) {
												return false;
											}
										},
									},
									onremove(player) {
										player.removeGaintag('upgrade_luoshen');
									},
								},
							},
						},
						upgrade_xiaoji: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'loseAfter',
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
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
								player.draw(2 + Math.floor(player.countCards('e') / 2));
								('step 2');
								if (event.count > 0) {
									player.chooseBool(get.prompt2('xiaoji')).set('frequentSkill', 'xiaoji').ai = lib.filter.all;
								}
								('step 3');
								if (result.bool) {
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
						upgrade_jieyin: {
							audio: 'ext:蒸蒸日上/audio:2',
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
											return (
												current != player &&
												current.hp != player.hp &&
												get.attitude(player, current) > 0 &&
												!current.countCards('e', {
													subtype: subtype,
												})
											);
										})
									) {
										return 0;
									}
									if (
										player.countCards('h', {
											subtype: subtype,
										})
									)
										return 20 - get.value(card);
									return 10 - get.value(card);
								} else {
									if (player.countCards('e')) return 0;
									if (
										player.countCards('h', {
											type: 'equip',
										})
									)
										return 0;
									return 8 - get.value(card);
								}
							},
							filterTarget(card, player, target) {
								if (!target.hasSex('male')) return false;
								var card = ui.selected.cards[0];
								if (!card) return false;
								if (get.position(card) == 'e' && !target.isEmpty(get.subtype(card))) return false;
								return true;
							},
							discard: false,
							delay: false,
							lose: false,
							content() {
								'step 0';
								if (get.position(cards[0]) == 'e')
									event._result = {
										index: 0,
									};
								else if (get.type(cards[0]) != 'equip' || !target.isEmpty(get.subtype(cards[0])))
									event._result = {
										index: 1,
									};
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
								//		if(player.hp>target.hp){
								//			player.draw();
								if (target.isDamaged()) target.recover();
								//				}
								//				else if(player.hp<target.hp){
								//				target.draw();
								if (player.isDamaged()) player.recover();
								//				}
								game.asyncDraw([player, target]);
							},
							ai: {
								order() {
									var player = _status.event.player;
									var es = player.getCards('e');
									for (var i = 0; i < es.length; i++) {
										if (
											player.countCards('h', {
												subtype: get.subtype(es[i]),
											})
										)
											return 10;
									}
									return 2;
								},
								result: {
									target(player, target) {
										var goon = function () {
											var es = player.getCards('e');
											for (var i = 0; i < es.length; i++) {
												if (
													player.countCards('h', {
														subtype: get.subtype(es[i]),
													})
												)
													return true;
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
						upgrade_shiyong: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && (get.color(event.card) == 'red' || event.getParent(2).jiu == true);
							},
							content() {
								player.loseMaxHp();
								player.draw(2);
							},
							group: 'upgrade_shiyong_damage',
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									audio: 'ext:蒸蒸日上/audio:2',
									filter(event, player) {
										return player == _status.currentPhase && event.card && event.card.name == 'sha' && get.color(event.card) == 'black' && event.notLink();
									},
									forced: true,
									usable: 1,
									content() {
										trigger.num = trigger.player.maxHp;
										trigger.player.draw(3);
									},
									ai: {
										damageBonus: true,
										effect: {
											target(card, player, target) {
												if (player == target && target.hp > 0 && card.name == 'jiu') return [0, 0];
											},
										},
									},
								},
							},
						},
						upgrade_jiuyuan: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'rejiuyuan',
						},
						upgrade_zhiheng: {
							audio: 'ext:蒸蒸日上/audio:4',
							//	audioname:.shen_caopi,
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							filterCard: lib.filter.cardDiscardable,
							discard: false,
							lose: false,
							delay: false,
							selectCard: [1, Infinity],
							check(card) {
								var player1 = get.owner(card);
								var qp = 0,
									players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (player != players[i] && players[i].inRange(player1) && players[i].group != player1.group) {
										qp++;
									}
								}
								if (qp > 1) return 10 - get.value(card);
								var player = _status.event.player;
								if (get.position(card) == 'e' && card.name == 'zhuge') return -10;
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
								player.discard(cards);
								var mp = 1,
									players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (player != players[i] && players[i].inRange(player) && players[i].group != player.group) {
										mp++;
									}
								}
								event.num = mp;
								var hs = player.getCards('h');
								if (!hs.length) event.num = 0;
								for (var i = 0; i < hs.length; i++) {
									if (!cards.includes(hs[i])) {
										event.num = 0;
										break;
									}
								}
								('step 1');
								player.draw(event.num + cards.length);
							},
							//group:'upgrade_zhiheng_draw',
							subSkill: {
								draw: {
									trigger: {
										player: 'loseEnd',
									},
									silent: true,
									filter(event, player) {
										if (event.getParent(2).skill != 'upgrade_zhiheng' && event.getParent(2).skill != 'jilue_zhiheng') return false;
										if (player.countCards('h')) return false;
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												//QQQ
												if (i.original == 'h') return true;
											}
										return false;
									},
									content() {
										player.addTempSkill('upgrade_zhiheng_delay', trigger.getParent(2).skill + 'After');
									},
								},
								delay: {},
							},
							ai: {
								order(name, player) {
									if (player.countCards('h') == 1) return 7;
									return 0.5;
								},
								result: {
									player: 1,
								},
								threaten: 1.7,
							},
						},
						upgrade_qicai: {
							mod: {
								targetInRange(card, player, target, now) {
									var type = get.type(card);
									if (type == 'trick' || type == 'delay') return true;
								},
								canBeDiscarded(card) {
									if (get.position(card) == 'e' && ['equip1', 'equip2', 'equip5'].includes(get.subtype(card))) return false;
								},
							},
						},
						upgrade_jizhi: {
							audio: 'ext:蒸蒸日上/audio:3',
							audioname: ['lukang'],
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							init(player) {
								player.storage.upgrade_jizhi = 0;
							},
							content() {
								'step 0';
								if (get.type(trigger.card) == 'delay' || get.color(trigger.card) == 'red') {
									player.draw(2);
								} else {
									player.draw();
								}
								('step 1');
								event.card = result[0];
								if (get.type(event.card) == 'basic') {
									player
										.chooseBool('是否弃置' + get.translation(event.card) + '并令本回合手牌上限+1？')
										.set('ai', function (evt, player) {
											return _status.currentPhase == player && player.needsToDiscard(-3) && _status.event.value < 6;
										})
										.set('value', get.value(event.card, player));
								}
								('step 2');
								if (result.bool) {
									player.discard(event.card);
									player.storage.upgrade_jizhi++;
									if (_status.currentPhase == player) {
										player.markSkill('upgrade_jizhi');
									}
								}
							},
							ai: {
								threaten: 1.4,
								noautowuxie: true,
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.storage.upgrade_jizhi;
								},
							},
							intro: {
								content: '本回合手牌上限+#',
							},
							group: 'upgrade_jizhi_clear',
							subSkill: {
								clear: {
									trigger: {
										global: 'phaseAfter',
									},
									silent: true,
									content() {
										player.storage.upgrade_jizhi = 0;
										player.unmarkSkill('upgrade_jizhi');
									},
								},
							},
						},
						upgrade_lijian: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'lijian',
						},
						upgrade_biyue: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							content() {
								var num = 1;
								if (player.isMinHandcard()) {
									num++;
								}
								if (player.isMinHp()) {
									num++;
								}
								if (
									!game.hasPlayer(function (current) {
										return current != player && current.countCards('e') < player.countCards('e');
									})
								) {
									num++;
								}
								player.draw(num);
							},
						},
						upgrade_jijiang: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'rejijiang',
						},
						upgrade_rende: {
							audio: 'ext:蒸蒸日上/audio:2',
							audioname: ['gz_jun_liubei', 'shen_caopi'],
							enable: 'phaseUse',
							filterCard: true,
							selectCard: [1, Infinity],
							discard: false,
							lose: false,
							delay: false,
							filterTarget(card, player, target) {
								if (player.storage.upgrade_rende2 && player.storage.upgrade_rende2.includes(target)) return false;
								return player != target;
							},
							onremove: ['upgrade_rende', 'upgrade_rende2'],
							check(card) {
								if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
								if (!ui.selected.cards.length && card.name == 'du') return 20;
								var player = get.owner(card);
								if (ui.selected.cards.length >= Math.max(2, player.countCards('h') - player.hp)) return 0;
								if (player.hp == player.maxHp || player.storage.upgrade_rende < 0 || player.countCards('h') <= 1) {
									var players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if ((players[i].hasSkill('upgrade_haoshi') || players[i].hasSkill('haoshi')) && !players[i].isTurnedOver() && !players[i].hasJudge('lebu') && get.attitude(player, players[i]) >= 3 && get.attitude(players[i], player) >= 3) {
											return 11 - get.value(card);
										}
									}
									if (player.hasSkill('yongsi') || player.hasSkill('upgrade_yongsi')) return 12 - get.value(card);
									if (player.countCards('h') > player.hp) return 10 - get.value(card);
									if (player.countCards('h') > 2) return 6 - get.value(card);
									return -1;
								}
								return 10 - get.value(card);
							},
							content() {
								'step 0';
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse' && !evt.upgrade_rende) {
									var next = game.createEvent('upgrade_rende_clear');
									_status.event.next.remove(next);
									evt.after.push(next);
									evt.upgrade_rende = true;
									next.player = player;
									next.setContent(lib.skill.upgrade_rende1.content);
								}
								if (!Array.isArray(player.storage.upgrade_rende2)) {
									player.storage.upgrade_rende2 = [];
								}
								player.storage.upgrade_rende2.push(target);
								target.gain(cards, player, 'giveAuto');
								if (typeof player.storage.upgrade_rende != 'number') {
									player.storage.upgrade_rende = 0;
								}
								if (player.storage.upgrade_rende >= 0) {
									player.storage.upgrade_rende += cards.length;
									if (player.storage.upgrade_rende >= 2) {
										if (player.hp < player.maxHp) {
											player.recover();
										} else {
											player.draw();
										}
										var list = [];
										if (
											lib.filter.cardUsable(
												{
													name: 'sha',
												},
												player,
												event.getParent('chooseToUse')
											) &&
											game.hasPlayer(function (current) {
												return player.canUse('sha', current);
											})
										) {
											list.push(['基本', '', 'sha']);
										}
										for (var i of lib.inpile_nature) {
											if (
												lib.filter.cardUsable(
													{
														name: 'sha',
														nature: i,
													},
													player,
													event.getParent('chooseToUse')
												) &&
												game.hasPlayer(function (current) {
													return player.canUse(
														{
															name: 'sha',
															nature: i,
														},
														current
													);
												})
											) {
												list.push(['基本', '', 'sha', i]);
											}
										}
										if (
											lib.filter.cardUsable(
												{
													name: 'tao',
												},
												player,
												event.getParent('chooseToUse')
											) &&
											game.hasPlayer(function (current) {
												return player.canUse('tao', current);
											})
										) {
											list.push(['基本', '', 'tao']);
										}
										if (
											lib.filter.cardUsable(
												{
													name: 'jiu',
												},
												player,
												event.getParent('chooseToUse')
											) &&
											game.hasPlayer(function (current) {
												return player.canUse('jiu', current);
											})
										) {
											list.push(['基本', '', 'jiu']);
										}
										if (list.length) {
											player.chooseButton(['是否视为使用一张基本牌？', [list, 'vcard']]).set('ai', function (button) {
												var player = _status.event.player;
												var card = {
													name: button.link[2],
													nature: button.link[3],
												};
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
												if (card.name == 'jiu') {
													return 0.5;
												}
												return 0;
											});
										} else {
											event.finish();
										}
										player.storage.upgrade_rende = 0;
									} else {
										event.finish();
									}
								} else {
									event.finish();
								}
								('step 1');
								if (result && result.bool && result.links[0]) {
									var card = {
										name: result.links[0][2],
										nature: result.links[0][3],
									};
									player.chooseUseTarget(card, true);
								}
							},
							ai: {
								fireAttack: true,
								order(skill, player) {
									if (player.hp < player.maxHp && player.storage.upgrade_rende < 2 && player.countCards('h') > 1) {
										return 10;
									}
									return 4;
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
										if (player.hp == player.maxHp || player.storage.upgrade_rende < 0 || player.countCards('h') <= 1) {
											if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi') && !target.hasSkill('upgrade_haoshi')) return 0;
										}
										return Math.max(1, 5 - nh);
									},
								},
								effect: {
									target(card, player, target) {
										if (player == target && get.type(card) == 'equip') {
											if (
												player.countCards('e', {
													subtype: get.subtype(card),
												})
											) {
												if (
													game.hasPlayer(function (current) {
														return current != player && get.attitude(player, current) > 0;
													})
												) {
													return 0;
												}
											}
										}
									},
								},
								threaten: 0.92,
							},
						},
						upgrade_rende1: {
							trigger: {
								player: 'phaseUseBegin',
							},
							silent: true,
							content() {
								player.storage.upgrade_rende = 0;
								player.storage.upgrade_rende2 = [];
							},
						},
						upgrade_guicai: {
							group: 'upgrade_guicaiDraw',
							audio: 'ext:蒸蒸日上/audio:2',
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
									.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('upgrade_guicai'), 'hes', function (card) {
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
									player.respond(result.cards, 'upgrade_guicai', 'highlight', 'noOrdering');
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
									game.cardsDiscard(trigger.player.judging[0]);
									trigger.player.judging[0] = result.cards[0];
									trigger.orderingCards.addArray(result.cards);
									game.log(trigger.player, '的判定牌改为', result.cards[0]);
								}
							},
							ai: {
								rejudge: true,
								tag: {
									rejudge: 1,
								},
							},
						},
						upgrade_guicaiDraw: {
							//	audio:'upgrade_guicai2',
							usable: 2,
							trigger: {
								global: 'judgeAfter',
							},
							forced: true,
							//	frequent:function(event){
							//			if(event.result.cards[0].suit=='diamond'||event.result.cards[0].suit=='spade') return true;
							//if(get.mode()=='guozhan') return false;
							//			return false;
							//				},
							filter(event, player) {
								if (event.result.card.suit == 'diamond' || event.result.card.suit == 'spade') return true;
								return false;
							},
							content() {
								player.draw();
							},
						},
						upgrade_fankui: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player;
							},
							content() {
								'step 0';
								if (trigger.source.countCards('he') < player.countCards('he')) {
									event.count = Math.min(trigger.num, 9);
								} else {
									event.count = trigger.num + 1;
								}
								('step 1');
								event.count--;
								//	if(trigger.source.countCards('he')>=player.countCards('he'))
								player.gainPlayerCard(get.prompt('upgrade_fankui', trigger.source), trigger.source, get.buttonValue, 'he')('step 2');
								if (result.bool && event.count > 0 && trigger.source.countGainableCards(player, 'he') > 0) event.goto(1);
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
						upgrade_luoyi: {
							audio: 'ext:蒸蒸日上/audio:4',
							forced: true,
							trigger: {
								player: 'phaseDrawBegin1',
							},
							content() {
								'step 0';
								player.addTempSkill('upgrade_luoyi2', {
									player: 'phaseBefore',
								});
								trigger.cancel(null, null, 'notrigger');
								player.discard(player.getCards('he'));
								('step 1');
								if (player.hp > 1) {
									var num = player.hp;
								} else {
									var num = player.maxHp - player.hp;
								}
								event.cards = get.cards(3 * Math.min(8, num));
								player.showCards(event.cards, '裸衣');
								('step 2');
								for (var i = 0; i < cards.length; i++) {
									if (get.type(cards[i]) != 'basic' && cards[i].name != 'juedou' && (get.type(cards[i]) != 'equip' || get.subtype(cards[i]) != 'equip1')) {
										cards[i].discard();
										cards.splice(i--, 1);
									}
								}
								player.gain(cards, 'gain2');
							},
						},
						upgrade_luoyi2: {
							trigger: {
								source: 'damageBegin1',
							},
							audio: 'upgrade_luoyi',
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
						upgrade_qingjian: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'new_qingjian',
						},
						upgrade_ganglie: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return event.source != undefined && event.num > 0;
							},
							check(event, player) {
								return get.attitude(player, event.source) <= 0;
							},
							logTarget: 'source',
							preHidden: true,
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								player.judge(function (card) {
									if (card.suit == 'heart') return 2;
									if (get.color(card) == 'red') return 1;
									return 0;
								});
								('step 2');
								if (result.color == 'black') {
									if (trigger.source.countCards('he')) {
										player.discardPlayerCard(trigger.source, 'he', player.maxHp - player.hp + 1, true);
									}
								} else if (trigger.source.isIn()) {
									var sh = ['2', '1'].randomGet();
									if (sh == '1') {
										trigger.source.damage();
									} else {
										trigger.source.damage(2);
									}
								}
								if (result.suit == 'heart') player.recover();
								if (result.suit == 'diamond') player.draw();
								event.num--;
								if (event.num > 0) {
									player.chooseBool(get.prompt2('upgrade_ganglie'));
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									event.goto(1);
								}
							},
							ai: {
								maixie_defend: true,
								expose: 0.4,
							},
						},
						upgrade_yingzi: {
							audio: 'ext:蒸蒸日上/audio:4',
							trigger: {
								player: 'drawBegin',
							},
							forced: true,
							preHidden: true,
							_priority: 10,
							usable: 4,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								var mp = +get.translation(['1', '2'].randomGet());
								trigger.num += mp;
							},
							ai: {
								threaten: 1.8,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'draw')) return [1, 4];
									},
								},
							},
							mod: {
								maxHandcardBase(player, num) {
									return player.maxHp;
								},
							},
						},
						upgrade_fanjian: {
							audio: 'ext:蒸蒸日上/audio:4',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							filterCard: true,
							check(card, player, target) {
								var player = get.owner(card);
								if (player.hasSkill('upgrade_yingzi') && card.name == 'tiesuo') return 0;
								return 8 - get.value(card);
							},
							discard: false,
							lose: false,
							delay: false,
							content() {
								'step 0';
								target.storage.upgrade_fanjian = cards[0];
								target.gain(cards[0], player, 'give');
								('step 1');
								var suit = target.storage.upgrade_fanjian.suit;
								if (!target.countCards('h'))
									event._result = {
										control: 'upgrade_fanjian_hp',
									};
								else
									target.chooseControl('upgrade_fanjian_card', 'upgrade_fanjian_hp').ai = function (event, player) {
										var cards = player.getCards('he', {
											suit: player.storage.upgrade_fanjian.suit,
										});
										if (cards.length == 1) return 0;
										if (cards.length >= 2) {
											for (var i = 0; i < cards.length; i++) {
												if (get.tag(cards[i], 'save')) return 1;
											}
										}
										if (player.hp == 1) return 0;
										for (var i = 0; i < cards.length; i++) {
											if (get.value(cards[i]) >= 8) return 1;
										}
										if (cards.length > 2 && player.hp > 2) return 1;
										if (cards.length > 3) return 1;
										return 0;
									};
								('step 2');
								if (result.control == 'upgrade_fanjian_card') {
									target.showHandcards();
								} else {
									target.loseHp();
									if (target.isMinHp()) player.draw();
									event.finish();
								}
								('step 3');
								var suit = target.storage.upgrade_fanjian.suit;
								target.discard(
									target.getCards('he', function (i) {
										return i.suit == suit && lib.filter.cardDiscardable(i, target, 'upgrade_fanjian');
									})
								);
								delete target.storage.upgrade_fanjian;
								if (target.isMinHandcard()) player.draw();
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										return -target.countCards('he') - (player.countCards('h', 'du') ? 2 : 0.2);
									},
								},
								threaten: 2,
							},
						},
						upgrade_qianxun: {
							init(player) {
								if (!player.storage.upgrade_qianxun2) player.storage.upgrade_qianxun2 = [];
							},
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								target: 'useCardToBegin',
								player: 'judgeBefore',
							},
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								if (event.parent.name == 'phaseJudge') {
									if (lib.skill.upgrade_qianxun.trigger.player == 'judgeBefore') {
										return true;
									}
									return event.result && event.result.judge != 0;
								}
								if (event.name == 'judge') return false;
								if (event.targets && event.targets.length > 1) return false;
								if (event.card && (((get.type(event.card) == 'trick' || event.card.name == 'sha') && event.player != player) || event.card.name == 'tao')) return true;
							},
							content() {
								player.storage.upgrade_qianxun2 = player.storage.upgrade_qianxun2.concat(player.getCards('h'));
								game.addVideo('storage', player, ['upgrade_qianxun2', get.cardsInfo(player.storage.upgrade_qianxun2), 'cards']);
								player.lose(player.getCards('h'), ui.special, 'toStorage');
								player.addSkill('upgrade_qianxun2');
							},
							ai: {
								effect(card, player, target) {
									if (player == target && card.name == 'tao') return 1;
									if (!target.hasFriend()) return;
									if (player == target) return;
									var type = get.type(card);
									var nh = target.countCards();
									if (type == 'trick' || card.name == 'sha') {
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
						upgrade_qianxun2: {
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							content() {
								player.gain(player.storage.upgrade_qianxun2, 'fromStorage', 'draw');
								player.storage.upgrade_qianxun2.length = 0;
								player.removeSkill('upgrade_qianxun2');
								game.addVideo('storage', player, ['upgrade_qianxun2', get.cardsInfo(player.storage.upgrade_qianxun2), 'cards']);
							},
							mark: true,
							intro: {
								content: 'cardCount',
								onunmark(storage, player) {
									if (storage && storage.length) {
										player.$throw(storage, 1000);
										game.cardsDiscard(storage);
										game.log(storage, '被置入了弃牌堆');
										player.storage.upgrade_qianxun2.length = 0;
									}
								},
							},
						},
						upgrade_lianying: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'loseAfter',
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
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
								player.chooseTarget(get.prompt('upgrade_lianying'), '令至多' + get.cnNumber(num) + '名角色各摸两张牌并弃置一张牌', [1, num]).ai = function (target) {
									var player = _status.event.player;
									if (player == target) return get.attitude(player, target) + 10;
									return get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									game.asyncDraw(result.targets, 2);
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].chooseToDiscard('h', true);
									}
								} else event.finish();
								('step 2');
							},
							ai: {
								threaten: 1.8,
								effect: {
									target(card) {
										if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
									},
								},
								noh: true,
							},
						},
						upgrade_hujia: {
							audio: 'ext:蒸蒸日上/audio:2',
							zhuSkill: true,
							trigger: {
								player: ['chooseToRespondBefore', 'chooseToUseBefore'],
							},
							filter(event, player) {
								if (event.responded) return false;
								if (player.storage.upgrade_hujiaing) return false;
								if (!player.hasZhuSkill('upgrade_hujia')) return false;
								if (
									!event.filterCard ||
									!event.filterCard(
										{
											name: 'shan',
										},
										player,
										event
									)
								)
									return false;
								return game.hasPlayer(function (current) {
									return current != player && current.group == 'wei';
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
								} else if (event.current.group == 'wei') {
									if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 2 || event.current.isOnline()) {
										player.storage.upgrade_hujiaing = true;
										var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张闪？', {
											name: 'shan',
										});
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
								player.storage.upgrade_hujiaing = false;
								if (result.bool) {
									event.finish();
									trigger.result = {
										bool: true,
										card: {
											name: 'shan',
										},
									};
									trigger.responded = true;
									trigger.animate = false;
								} else {
									event.current = event.current.next;
									event.goto(0);
								}
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (player.storage.upgrade_hujiaing) return false;
									if (!player.hasZhuSkill('upgrade_hujia')) return false;
									return game.hasPlayer(function (current) {
										return current != player && current.group == 'wei';
									});
								},
							},
						},
						upgrade_jianxiong: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								global: 'damageEnd',
								player: 'damageEnd',
							},
							filter(event, player) {
								if (event.player != player && (!player.hasZhuSkill('upgrade_hujia') || event.player.group != 'wei' || player.identity != 'zhu' || player == _status.currentPhase)) return false;
								return event.player == player || (event.player != player && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o');
							},
							content() {
								if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') {
									player.gain(trigger.cards, 'gain2');
								}
								player.draw('nodelay');
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
										if (get.tag(card, 'damage')) return [1, 0.55];
									},
								},
							},
						},
						upgrade_tieji: {
							shaRelated: true,
							audio: 'ext:蒸蒸日上/audio:2',
							//audioname:.boss_lvbu3,
							trigger: {
								player: 'useCardToPlayered',
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							filter(event, player) {
								return event.card.name == 'sha';
							},
							logTarget: 'target',
							usable: 5,
							content() {
								'step 0';
								player.judge(function () {
									return 0;
								});
								if (!trigger.target.hasSkill('fengyin')) {
									trigger.target.addTempSkill('fengyin', {
										player: 'recoverAfter',
									});
								}
								('step 1');
								var suit = result.suit;
								var target = trigger.target;
								var num = target.countCards('h', 'shan');
								target
									.chooseToDiscard('请弃置一张' + get.translation(suit) + '牌,否则不能使用闪抵消此杀', 'he', function (card) {
										return card.suit == _status.event.suit;
									})
									.set('ai', function (card) {
										var num = _status.event.num;
										if (num == 0) return 0;
										if (card.name == 'shan') return num > 1 ? 2 : 0;
										return 8 - get.value(card);
									})
									.set('num', num)
									.set('suit', suit);
								('step 2');
								if (!result.bool) {
									trigger.parent.directHit.add(trigger.target);
								}
								('step 3');
								player.draw(3 - Math.min(3, player.countCards('h', 'sha')));
							},
							ai: {
								ignoreSkill: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'directHit_ai') {
										return get.attitude(player, arg.target) <= 0;
									}
									if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
									if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
									if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
								},
								directHit_ai: true,
							},
						},
						upgrade_yicong: {
							trigger: {
								player: ['changeHp'],
							},
							audio: 'ext:蒸蒸日上/audio:4',
							forced: true,
							content() {
								if (player.getEquip(3) || player.getEquip(4)) player.draw(2);
							},
							mod: {
								globalFrom(from, to, current) {
									if (from.hp > from.maxHp - from.hp) {
										return current - from.hp;
									} else {
										return current - (from.maxHp - from.hp);
									}
								},
								globalTo(from, to, current) {
									if (to.hp > to.maxHp - to.hp) {
										return current + to.hp;
									} else {
										return current + (to.maxHp - to.hp);
									}
								},
							},
							ai: {
								threaten: 0.9,
							},
						},
						upgrade_qiaomeng: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'reqiaomeng',
						},
						upgrade_kurou: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							filterCard: true,
							usable: 1,
							check(card) {
								if (get.color(card) == 'red' && card.name == 'sha') return 0.2;
								if (card.name == 'jiu' || card.name == 'tao' || card.name == 'qishameizi') return 0;
								return 8 - get.value(card);
							},
							position: 'he',
							content() {
								player.loseHp();
							},
							ai: {
								order: 8,
								result: {
									player(player) {
										if (player.hasSkill('buqu') || player.hasSkill('jiushi') || player.hasSkill('rebuqu') || player.hasSkill('upgrade_buqu') || player.hasSkill('relonghun') || player.hasSkill('longhun') || player.hasSkill('rejiushi') || player.hasSkill('jiuchi') || player.hasSkill('upgrade_jiuchi')) return 2;
										if (player.hp <= 2) return player.countCards('h') == 0 ? 1 : 0;
										if (
											player.countCards('h', {
												name: 'sha',
												color: 'red',
											})
										)
											return 1;
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
						upgrade_zhaxiang: {
							trigger: {
								player: 'loseHpEnd',
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							content() {
								'step 0';
								var num = trigger.num;
								player.draw(5 * num);
								if (_status.currentPhase == player) {
									if (!player.storage.upgrade_zhaxiang2) player.storage.upgrade_zhaxiang2 = 0;
									player.storage.upgrade_zhaxiang2 += num;
									player.addTempSkill('upgrade_zhaxiang2', {
										player: 'phaseAfter',
									});
								} else {
									game.trySkillAudio('upgrade_zhaxiang', player);
								}
								('step 1');
								player.chooseToDiscard(true, 2 * trigger.num, 'he');
							},
							ai: {
								maihp: true,
								effect(card, player, target) {
									if (get.tag(card, 'damage')) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, 1];
										return 1.2;
									}
									if (get.tag(card, 'loseHp')) {
										if (target.hp <= 1) return;
										var using = target.isPhaseUsing();
										if (target.hp <= 2) return [1, player.countCards('h') <= 1 && using ? 3 : 0];
										if (
											using &&
											target.countCards('h', {
												name: 'sha',
												color: 'red',
											})
										)
											return [1, 3];
										return [
											1,
											target.countCards('h') <= target.hp ||
												(using &&
													game.hasPlayer(function (current) {
														return current != player && get.attitude(player, current) < 0 && player.inRange(current);
													}))
												? 3
												: 2,
										];
									}
								},
							},
						},
						upgrade_zhaxiang2: {
							audio: 'ext:蒸蒸日上/audio:true',
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha' && get.color(card) == 'red') return true;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + player.storage.upgrade_zhaxiang2;
								},
							},
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
							},
							content() {
								trigger.directHit.addArray(game.players);
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									return arg.card.name == 'sha' && get.color(arg.card) == 'red';
								},
							},
						},
						upgrade_zhuhai: {
							audio: 'ext:蒸蒸日上/audio:2',
							audioname: ['gz_re_xushu'],
							trigger: {
								global: 'phaseJieshuBegin',
							},
							forced: true,
							filter(event, player) {
								return (
									event.player.isAlive() &&
									event.player.getStat('damage') &&
									lib.filter.targetEnabled(
										{
											name: 'sha',
										},
										player,
										event.player
									) &&
									(player.hasSha() || (_status.connectMode && player.countCards('h') > 0))
								);
							},
							content() {
								player
									.chooseToUse(
										function (card, player, event) {
											if (card.name != 'sha') return false;
											return lib.filter.filterCard.apply(this, arguments);
										},
										'诛害:是否对' + get.translation(trigger.player) + '使用一张杀？'
									)
									.set('complexSelect', true)
									.set('filterTarget', function (card, player, target) {
										if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
										return lib.filter.targetEnabled.apply(this, arguments);
									})
									.set('sourcex', trigger.player);
							},
						},
						upgrade_qianxin: {
							audio: 'ext:蒸蒸日上/audio:2',
							juexingji: true,
							trigger: {
								source: 'damageSource',
							},
							forced: true,
							derivation: 'jianyan',
							filter(event, player) {
								return player.hp < player.maxHp;
							},
							content() {
								player.awakenSkill('qianxin');
								player.addSkill('jianyan');
								player.loseMaxHp();
							},
						},
						upgrade_jianyan: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							usable: 1,
							delay: false,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.hasSex('male');
								});
							},
							content() {
								'step 0';
								player.chooseControl(['red', 'black', 'basic', 'trick', 'equip']).set('ai', function () {
									var player = _status.event.player;
									if (!player.hasShan()) return 'basic';
									if (player.countCards('e') <= 1) return 'equip';
									if (player.countCards('h') > 2) return 'trick';
									return 'red';
								});
								('step 1');
								event.card = get.cardPile(function (card) {
									if (get.color(card) == result.control) return true;
									if (get.type(card, 'trick') == result.control) return true;
									return false;
								}, 'cardPile');
								if (!event.card) {
									event.finish();
									return;
								}
								player.showCards([event.card]);
								('step 2');
								player
									.chooseTarget(true, '选择一名男性角色送出' + get.translation(event.card), function (card, player, target) {
										return target.hasSex('male');
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (_status.event.neg) return -att;
										return att;
									})
									.set('neg', get.value(event.card, player, 'raw') < 0);
								('step 3');
								player.line(result.targets, 'green');
								result.targets[0].gain(event.card, 'gain2');
							},
							ai: {
								order: 9,
								result: {
									player(player) {
										if (
											game.hasPlayer(function (current) {
												return current.hasSex('male') && get.attitude(player, current) > 0;
											})
										)
											return 2;
										return 0;
									},
								},
								threaten: 1.2,
							},
						},
						upgrade_sijun: {
							audio: 'ext:蒸蒸日上/audio:1',
							trigger: {
								global: 'phaseZhunbeiBefore',
							},
							limited: true,
							logTarget: 'player',
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							filter(event, player) {
								return event.player.sex == 'male' && event.player.name != 'upgrade_sunce' && event.player.name != 'sunce' && event.player.name != 'shen_sunce' && event.player.name != 're_sunce' && event.player.name != 're_sunben' && event.player != player && event.player.hp <= 1;
							},
							content() {
								'step 0';
								player.awakenSkill('upgrade_sijun');
								('step 1');
								var sjsc = ['re_sunce', 'shen_sunce', 'upgrade_sunce', 're_sunben'].randomGet();
								trigger.player.reinit(trigger.player.name, sjsc);
								trigger.player.maxHp++;
								trigger.player.update();
								('step 2');
								trigger.player.phase('nodelay');
							},
						},
						upgrade_liuli: {
							audio: 'ext:蒸蒸日上/audio:4',
							inherit: 'liuli',
						},
						upgrade_guose: {
							audio: 'ext:蒸蒸日上/audio:4',
							enable: 'phaseUse',
							usable: 2,
							discard: false,
							lose: false,
							delay: false,
							filter(event, player) {
								return (
									player.countCards('hes', {
										suit: 'diamond',
									}) > 0
								);
							},
							position: 'hes',
							filterCard: {
								suit: 'diamond',
							},
							filterTarget(card, player, target) {
								if (get.position(ui.selected.cards[0]) != 's' && lib.filter.cardDiscardable(ui.selected.cards[0], player, 'upgrade_guose') && target.hasJudge('lebu')) return true;
								if (player == target) return false;
								if (!game.checkMod(ui.selected.cards[0], player, 'unchanged', 'cardEnabled2', player)) return false;
								return player.canUse(
									{
										name: 'lebu',
										cards: ui.selected.cards,
									},
									target
								);
							},
							check(card) {
								return 7 - get.value(card);
							},
							content() {
								'step 0';
								if (target.hasJudge('lebu')) {
									player.discard(cards);
									target.discard(target.getJudge('lebu'));
								} else {
									player.useCard(
										{
											name: 'lebu',
										},
										target,
										cards
									).audio = false;
								}
								('step 1');
								var mp = 0;
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (players[i].hasJudge('lebu')) mp++;
								}
								player.draw(Math.max(1, mp));
							},
							ai: {
								result: {
									target(player, target) {
										if (target.hasJudge('lebu'))
											return -get.effect(
												target,
												{
													name: 'lebu',
												},
												player,
												target
											);
										return get.effect(
											target,
											{
												name: 'lebu',
											},
											player,
											target
										);
									},
								},
								order: 9,
							},
						},
						upgrade_xunxun: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseDrawBegin1',
							},
							preHidden: true,
							content() {
								'step 0';
								var cards = get.cards(7);
								game.cardsGotoOrdering(cards);
								var next = player.chooseToMove('恂恂:将3张牌置于牌堆顶', true);
								next.set('list', [['牌堆顶', cards], ['牌堆底']]);
								next.set('filterMove', function (from, to, moved) {
									if (to == 2 && moved[1].length >= 2) return false;
									return true;
								});
								next.set('filterOk', function (moved) {
									return moved[1].length == 4;
								});
								next.set('processAI', function (list) {
									var cards = list[0][1].slice(0).sort(function (a, b) {
										return get.value(b) - get.value(a);
									});
									return [cards, cards.splice(2)];
								});
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
								game.updateRoundNumber();
							},
						},
						upgrade_wangxi: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'damageEnd',
								source: 'damageSource',
							},
							filter(event, player) {
								return event.num && event.source && event.player && event.player.isAlive() && event.source.isAlive() && event.source != event.player;
							},
							check(event, player) {
								if (player.isPhaseUsing()) return true;
								if (event.player == player) return get.attitude(player, event.source) > -3;
								return get.attitude(player, event.player) > -3;
							},
							logTarget(event, player) {
								if (event.player == player) return event.source;
								return event.player;
							},
							preHidden: true,
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								('step 1');
								game.asyncDraw([trigger.player, trigger.source]);
								if (
									game.hasPlayer(function (target) {
										return target.countCards('h') > player.countCards('h');
									})
								)
									player.draw();
								event.count--;
								('step 2');
								('step 3');
								if (event.count) {
									player.chooseBool(get.prompt2('upgrade_wangxi', lib.skill.wangxi.logTarget(trigger, player)));
								} else event.finish();
								('step 4');
								if (result.bool) {
									event.goto(1);
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
							},
						},
						upgrade_jiang: {
							shaRelated: true,
							audio: 'ext:蒸蒸日上/audio:2',
							preHidden: true,
							audioname: ['sp_lvmeng', 're_sunben', 're_sunce'],
							trigger: {
								player: 'useCardToPlayered',
								target: 'useCardToTargeted',
							},
							filter(event, player) {
								if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) return false;
								return player == event.target || event.parent.triggeredTargets3.length == 1;
							},
							forced: true,
							content() {
								if (trigger.target != player && trigger.target.countCards('j')) {
									player.draw(1 + trigger.target.countCards('j'));
								} else {
									player.draw();
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
									},
									player(card, player, target) {
										if (card.name == 'sha' && get.color(card) == 'red' && target.countCards('j')) return [1, target.countCards('j')];
										if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
									},
								},
							},
						},
						upgrade_scyingzi: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'drawBegin',
							},
							forced: true,
							preHidden: true,
							_priority: 10,
							usable: 4,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								var mp = +get.translation(['1', '2'].randomGet());
								trigger.num += mp;
							},
							ai: {
								threaten: 1.8,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'draw')) return [1, 4];
									},
								},
							},
							mod: {
								maxHandcardBase(player, num) {
									return player.maxHp;
								},
							},
						},
						//upgrade_zhiba:{
						//	audio:'ext:蒸蒸日上/audio:2',
						//		inherit:'zhiba',
						//		},
						upgrade_hunzi: {
							//audioname:.re_sunben,
							audio: 'ext:蒸蒸日上/audio:2',
							juexingji: true,
							derivation: ['upgrade_scyingzi', 'upgrade_scyinghun'],
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return (game.roundNumber >= 7 || player.hp <= 2) && !player.storage.upgrade_hunzi;
							},
							forced: true,
							//priority:3,
							content() {
								player.loseMaxHp();
								player.addSkill('upgrade_scyingzi');
								player.addSkill('upgrade_scyinghun');
								game.log(player, '获得了技能', '#g【英姿】和【英魂】');
								player.awakenSkill(event.name);
								player.storage[event.name] = true;
							},
							ai: {
								threaten(player, target) {
									if (target.hp <= 2) return 2.4;
									return 0.8;
								},
								maixie: true,
								effect: {
									target(card, player, target) {
										if (!target.hasFriend()) return;
										if (get.tag(card, 'damage') == 1 && target.hp == 3 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
									},
								},
							},
						},
						upgrade_scyinghun: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return player.getDamagedHp() > 0;
							},
							forced: true,
							preHidden: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('upgrade_scyinghun'), function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (get.attitude(_status.event.player, target) > 0) {
											return 10 + get.attitude(_status.event.player, target);
										}
										return 1;
									})
									.setHiddenSkill(event.name);
								('step 1');
								if (result.bool) {
									if (player.maxHp - player.hp > player.hp) {
										event.num = player.maxHp;
									} else {
										event.num = player.getDamagedHp();
									}
									event.target = result.targets[0];
									var str1 = '摸' + get.cnNumber(event.num, true);
									var str2 = '弃' + get.cnNumber(event.num, true);
									player
										.chooseControl(str1, str2, function (event, player) {
											return _status.event.choice;
										})
										.set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
									event.str = str1;
								} else {
									event.finish();
								}
								('step 2');
								if (event.directcontrol || result.control == event.str) {
									event.target.draw(event.num);
								} else {
									event.target.chooseToDiscard(event.num, true, 'he');
								}
								target0 = event.target;
								('step 3');
								if (target0.countCards('h') < 1) player.draw(Math.min(5, event.num));
							},
							ai: {
								threaten(player, target) {
									if (target.hp == target.maxHp) return 0.5;
									if (target.hp == 1) return 2;
									if (target.hp == 2) return 1.5;
									return 0.8;
								},
								maixie: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1 && player == target) return [0, 0];
									},
								},
							},
						},
						upgrade_yinghun: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return player.getDamagedHp() > 0;
							},
							forced: true,
							preHidden: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('upgrade_yinghun'), function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (get.attitude(_status.event.player, target) > 0) {
											return 10 + get.attitude(_status.event.player, target);
										}
										return 1;
									})
									.setHiddenSkill(event.name);
								('step 1');
								if (result.bool) {
									if (player.maxHp - player.hp > player.hp) {
										event.num = player.maxHp;
									} else {
										event.num = player.getDamagedHp();
									}
									event.target = result.targets[0];
									var str1 = '摸' + get.cnNumber(event.num, true);
									var str2 = '弃' + get.cnNumber(event.num, true);
									player
										.chooseControl(str1, str2, function (event, player) {
											return _status.event.choice;
										})
										.set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
									event.str = str1;
								} else {
									event.finish();
								}
								('step 2');
								if (event.directcontrol || result.control == event.str) {
									event.target.draw(event.num);
								} else {
									event.target.chooseToDiscard(event.num, true, 'he');
								}
								target0 = event.target;
								('step 3');
								if (target0.countCards('h') < 1) player.draw(Math.min(5, event.num));
							},
							ai: {
								threaten(player, target) {
									if (target.hp == target.maxHp) return 0.5;
									if (target.hp == 1) return 2;
									if (target.hp == 2) return 1.5;
									return 0.8;
								},
								maixie: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1 && player == target) return [0, 0];
									},
								},
							},
						},
						upgrade_zhijian: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return (
									player.countCards('he', {
										type: 'equip',
									}) > 0
								);
							},
							filterCard(card) {
								return get.type(card) == 'equip';
							},
							position: 'he',
							check(card) {
								var player = _status.currentPhase;
								if (
									player.countCards('he', {
										subtype: get.subtype(card),
									}) > 1
								) {
									return 11 - get.equipValue(card);
								}
								return 8.5 - get.value(card);
							},
							filterTarget(card, player, target) {
								if (target.isMin()) return false;
								var type = get.subtype(card);
								return player != target && target.isEmpty(type);
							},
							content() {
								'step 0';
								target.equip(cards[0]);
								('step 1');
								player.draw(target.countCards('e'));
							},
							discard: false,
							prepare(cards, player, targets) {
								player.$give(cards, targets[0], false);
							},
							ai: {
								basic: {
									order: 10,
								},
								result: {
									player(player, target) {
										return get.attitude(player, target) + target.countCards('e');
									},
									target(player, target) {
										var card = ui.selected.cards[0];
										if (card) return get.effect(target, card, target, target);
										return 0;
									},
								},
								threaten: 1.7,
							},
						},
						upgrade_guzheng: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'guzheng',
							mod: {
								maxHandcardBase(player, num) {
									return num + 3;
								},
							},
						},
						upgrade_tuntian: {
							audio: 'ext:蒸蒸日上/audio:2',
							//audioname:.gz_dengai,
							trigger: {
								player: ['loseAfter', 'phaseJieshuAfter', 'turnOverAfter'],
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
							},
							forced: true,
							preHidden: true,
							filter(event, player) {
								if (event.name == 'turnOver' || event.name == 'phaseJieshu') return true;
								if (player == _status.currentPhase) return false;
								if (event.name == 'gain' && event.player == player) return false;
								var evt = event.getl(player);
								return evt && evt.cards2 && evt.cards2.length;
							},
							content() {
								'step 0';
								var next = player.judge(function (card) {
									if (card.suit == 'heart') return -1;
									return 1;
								});
								next.judge2 = function (result) {
									return result.bool;
								};
								if (get.mode() != 'guozhan') {
									next.callback = lib.skill.upgrade_tuntian.callback;
									event.finish();
								}
								('step 1');
								if (!result.bool || get.position(result.card) != 'd') {
									event.finish();
									return;
								}
								event.card = result.card;
								event.node = result.node;
								player.chooseBool('是否将' + get.translation(event.card) + '作为【田】置于武将牌上？').ai = function () {
									return true;
								};
								('step 2');
								if (!result.bool && !event.directbool) {
									return;
								}
								player.storage.upgrade_tuntian.push(event.card);
								game.cardsGotoSpecial(card);
								event.node.moveDelete(player);
								game.broadcast(
									function (cardid, player) {
										var node = lib.cardOL[cardid];
										if (node) {
											node.moveDelete(player);
										}
									},
									event.node.cardid,
									player
								);
								game.addVideo('gain2', player, get.cardsInfo([event.node]));
								player.markSkill('upgrade_tuntian');
								game.addVideo('storage', player, ['upgrade_tuntian', get.cardsInfo(player.storage.upgrade_tuntian), 'cards']);
							},
							callback() {
								if (!event.judgeResult.bool) {
									player.gain(card, 'gain2');
									event.finish();
									return;
								}
								player.storage.upgrade_tuntian.push(event.card);
								game.cardsGotoSpecial(card);
								event.node = event.judgeResult.node;
								event.node.moveDelete(player);
								game.broadcast(
									function (cardid, player) {
										var node = lib.cardOL[cardid];
										if (node) {
											node.moveDelete(player);
										}
									},
									event.node.cardid,
									player
								);
								game.addVideo('gain2', player, get.cardsInfo([event.node]));
								player.markSkill('upgrade_tuntian');
								game.addVideo('storage', player, ['upgrade_tuntian', get.cardsInfo(player.storage.upgrade_tuntian), 'cards']);
							},
							init(player) {
								if (!player.storage.upgrade_tuntian) player.storage.upgrade_tuntian = [];
							},
							intro: {
								content: 'cards',
								onunmark(storage, player) {
									if (storage && storage.length) {
										player.$throw(storage, 1000);
										game.cardsDiscard(storage);
										game.log(storage, '被置入了弃牌堆');
										player.storage.upgrade_tuntian.length = 0;
									}
								},
							},
							group: 'upgrade_tuntian_dist',
							subSkill: {
								dist: {
									mod: {
										globalFrom(from, to, distance) {
											if (from.storage.upgrade_tuntian) {
												var num = distance - from.storage.upgrade_tuntian.length;
												if (_status.event.skill == 'upgrade_jixi_backup' || _status.event.skill == 'gzjixi_backup') num++;
												return num;
											}
										},
									},
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (!target.hasFriend() && !player.hasUnknown()) return;
										if (_status.currentPhase == target) return;
										if (card.name != 'shuiyanqijunx' && get.tag(card, 'loseCard') && target.countCards('he')) {
											if (target.hasSkill('ziliang')) return 0.7;
											return [0.5, Math.max(2, target.countCards('h'))];
										}
										if (target.isUnderControl(true, player)) {
											if ((get.tag(card, 'respondSha') && target.countCards('h', 'sha')) || (get.tag(card, 'respondShan') && target.countCards('h', 'shan'))) {
												if (target.hasSkill('ziliang')) return 0.7;
												return [0.5, 1];
											}
										} else if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
											if (get.attitude(player, target) > 0 && card.name == 'juedou') return;
											if (get.tag(card, 'damage') && target.hasSkillTag('maixie')) return;
											if (target.countCards('h') == 0) return 2;
											if (target.hasSkill('ziliang')) return 0.7;
											if (get.mode() == 'guozhan') return 0.5;
											return [0.5, Math.max(target.countCards('h') / 4, target.countCards('h', 'sha') + target.countCards('h', 'shan'))];
										}
									},
								},
								threaten(player, target) {
									if (target.countCards('h') == 0) return 2.5;
									return 0.5;
								},
								nodiscard: true,
							},
						},
						upgrade_zaoxian: {
							audio: 'ext:蒸蒸日上/audio:2',
							juexingji: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							filter(event, player) {
								if (player.storage.upgrade_tuntian) return player.storage.upgrade_tuntian.length >= 3 && !player.storage.zaoxian;
							},
							derivation: 'upgrade_jixi',
							content() {
								player.loseMaxHp();
								player.addSkill('upgrade_jixi');
								player.storage.zaoxian = true;
								player.awakenSkill('upgrade_zaoxian');
								player.phase('nodelay');
							},
						},
						upgrade_jixi: {
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return (
									player.storage.upgrade_tuntian.length &&
									event.filterCard(
										{
											name: 'shunshou',
										},
										player,
										event
									)
								);
							},
							chooseButton: {
								dialog(event, player) {
									return ui.create.dialog('急袭', player.storage.upgrade_tuntian, 'hidden');
								},
								backup(links, player) {
									return {
										filterCard() {
											return false;
										},
										selectCard: -1,
										viewAs: {
											name: 'shunshou',
											cards: links,
										},
										cards: links,
										onuse(result, player) {
											result.cards = lib.skill[result.skill].cards;
											var card = result.cards[0];
											player.storage.upgrade_tuntian.remove(card);
											if (!player.storage.upgrade_tuntian.length) {
												player.unmarkSkill('upgrade_tuntian');
											} else {
												player.markSkill('upgrade_tuntian');
											}
										},
									};
								},
								prompt(links, player) {
									return '请选择【顺手牵羊】的目标';
								},
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										if (player.getEquip(4)) return 3;
										return player.storage.upgrade_tuntian.length - 1;
									},
								},
							},
						},
						upgrade_duanchang: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'duanchang',
						},
						upgrade_beige: {
							audio: 'ext:蒸蒸日上/audio:2',
							//audioname:.re_caiwenji,
							trigger: {
								global: 'damageEnd',
							},
							filter(event, player) {
								return event.source && event.player.classList.contains('dead') == false && player.countCards('he');
							},
							forced: true,
							checkx(event, player) {
								var att1 = get.attitude(player, event.player);
								var att2 = get.attitude(player, event.source);
								return att1 > 0 && att2 <= 0;
							},
							content() {
								'step 0';
								var next = player.chooseToDiscard('he', get.prompt2('upgrade_beige', trigger.player));
								var check = lib.skill.upgrade_beige.checkx(trigger, player);
								next.set('ai', function (card) {
									if (_status.event.goon) return 8.5 - get.value(card);
									return 0;
								});
								next.set('goon', check);
								('step 1');
								if (result.bool) {
									trigger.player.judge();
								} else {
									event.finish();
								}
								('step 2');
								switch (result.color) {
									case 'red':
										trigger.player.recover(trigger.num);
										trigger.player.draw(2);
										trigger.player.chooseToDiscard('he', true);
										break;
									case 'black':
										trigger.source.chooseToDiscard('he', trigger.num * 3, true);
										if (!trigger.source.countCards('he')) trigger.source.loseHp();
										break;
								}
								('step 3');
								if (player.countCards('h') == 0 || trigger.source.countCards('h') == player.countCards('h')) player.draw();
							},
							ai: {
								expose: 0.3,
							},
						},
						upgrade_xingshang: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'xingshang',
						},
						upgrade_fangzhu: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: ['damageEnd', 'recoverEnd'],
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt2('upgrade_fangzhu'), function (card, player, target) {
									return player != target;
								}).ai = function (target) {
									if (target.hasSkillTag('noturn')) return 0;
									var player = _status.event.player;
									if (target.hasSkill('upgrade2_jiewei')) return get.attitude(_status.event.player, target) * 1.5;
									if (get.attitude(_status.event.player, target) == 0) return 0;
									if (get.attitude(_status.event.player, target) > 0) {
										if (target.classList.contains('turnedover')) return 1000 - target.countCards('h');
										if (player.getDamagedHp() < 3) return -1;
										return 100 - target.countCards('h');
									} else {
										if (target.classList.contains('turnedover')) return -1;
										if (player.getDamagedHp() >= 3) return -1;
										return 1 + target.countCards('h');
									}
								};
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									if (player.isHealthy())
										event._result = {
											bool: false,
										};
									else
										event.target
											.chooseToDiscard('he', player.getDamagedHp())
											.set('ai', function (card) {
												var player = _status.event.player;
												if (player.isTurnedOver() || _status.event.getTrigger().player.getDamagedHp() > 2) return -1;
												return player.hp * player.hp - get.value(card);
											})
											.set('prompt', '弃置' + get.cnNumber(player.getDamagedHp()) + '张牌并失去一点体力;或选择不弃置,将武将牌翻面并摸' + get.cnNumber(player.getDamagedHp()) + '张牌.');
								} else event.finish();
								('step 2');
								if (result.bool) {
									event.target.loseHp();
								} else {
									if (player.isDamaged()) event.target.draw(player.getDamagedHp());
									event.target.turnOver();
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
											if (target.hp <= 1) return;
											if (!target.hasFriend()) return;
											var hastarget = false;
											var turnfriend = false;
											var players = game.filterPlayer();
											for (var i = 0; i < players.length; i++) {
												if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
													hastarget = true;
												}
												if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
													hastarget = true;
													turnfriend = true;
												}
											}
											if (get.attitude(player, target) > 0 && !hastarget) return;
											if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
											if (target.hp > 1) return [1, 0.5];
										}
									},
								},
							},
						},
						upgrade_jiuchi: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'jiu') return Infinity;
								},
							},
							audio: 'ext:蒸蒸日上/audio:2',
							enable: 'chooseToUse',
							filterCard(card) {
								return get.color(card) == 'black';
							},
							viewAs: {
								name: 'jiu',
							},
							position: 'hes',
							viewAsFilter(player) {
								if (
									!player.countCards('hs', {
										color: 'black',
									})
								)
									return false;
								return true;
							},
							prompt: '将一张♠️️♣️️牌当〖酒〗使用',
							check(cardx, player) {
								if (player && player == cardx.player) return true;
								if (_status.event.type == 'dying') return 1;
								var player = _status.event.player;
								var shas = player.getCards('he', function (card) {
									return card != cardx && card.name == 'sha';
								});
								if (!shas.length) return -1;
								if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('he', 'zhuge'))) {
									return 0;
								}
								shas.sort(function (a, b) {
									return get.order(b) - get.order(a);
								});
								var card = false;
								if (shas.length) {
									for (var i = 0; i < shas.length; i++) {
										if (shas[i] != cardx && lib.filter.filterCard(shas[i], player)) {
											card = shas[i];
											break;
										}
									}
								}
								if (card) {
									if (
										game.hasPlayer(function (current) {
											return (
												get.attitude(player, current) < 0 &&
												!current.hasShan() &&
												current.hp +
												current.countCards('hs', {
													name: ['tao', 'jiu'],
												}) >
												1 + (player.storage.jiu || 0) &&
												player.canUse(card, current, true, true) &&
												!current.hasSkillTag('filterDamage', null, {
													player: player,
													card: card,
													jiu: true,
												}) &&
												get.effect(current, card, player) > 0
											);
										})
									) {
										return 5 - get.value(cardx);
									}
								}
								return -1;
							},
							ai: {
								threaten: 1.6,
							},
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'chooseToUse')
									return (
										player.countCards('hes', {
											color: 'black',
										}) > 0
									);
								return event.card && event.card.name == 'sha' && event.getParent(2).jiu == true && !player.hasSkill('oljiuchi_air');
							},
							content() {
								player.addTempSkill('oljiuchi_air');
								player.draw(3);
							},
							subSkill: {
								air: {},
							},
						},
						upgrade_fuli: {
							audio: 'ext:蒸蒸日上/audio:2',
							limited: true,
							enable: 'chooseToUse',
							init(player) {
								player.storage.upgrade_fuli = false;
							},
							mark: true,
							filter(event, player) {
								if (event.type != 'dying') return false;
								if (player != event.dying) return false;
								if (player.storage.upgrade_fuli) return false;
								return true;
							},
							content() {
								'step 0';
								player.awakenSkill('upgrade_fuli');
								event.num = 3 + game.countGroup();
								player.recover(event.num - player.hp);
								('step 1');
								var num2 = num - player.countCards('h');
								if (num2) player.draw(num2);
								('step 2');
								if (num > 5) player.turnOver();
								player.storage.upgrade_fuli = true;
							},
							ai: {
								save: true,
								skillTagFilter(player, arg, target) {
									return player == target;
								},
								result: {
									player: 10,
								},
								threaten(player, target) {
									if (!target.storage.upgrade_fuli) return 0.9;
								},
							},
							intro: {
								content: 'limited',
							},
						},
						upgrade_dangxian: {
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							audioname: ['guansuo', 'xin_liaohua', 're_liaohua'],
							content() {
								var next = player.phaseUse();
								next.upgrade_dangxian = true;
								event.next.remove(next);
								trigger.next.push(next);
							},
							group: 'upgrade_dangxian_rewrite',
							subSkill: {
								rewrite: {
									trigger: {
										player: 'phaseUseBegin',
									},
									forced: true,
									popup: false,
									filter(kagari) {
										return kagari.upgrade_dangxian == true;
									},
									content() {
										'step 0';
										if (player.storage.upgrade_fuli) {
											player.chooseBool('是否失去1点体力并获得一张【杀】？').ai = function () {
												return player.hp > 2 && !player.hasSha();
											};
										} else
											event._result = {
												bool: true,
											};
										('step 1');
										if (player.storage.upgrade_fuli) {
											var mbs = game.filterPlayer(function (current) {
												return current != player && player.canUse('sha', current, true);
											}).length;
											player.draw(mbs);
										}
										if (!result.bool) {
											event.finish();
											return;
										}
										player.loseHp();
										('step 2');
										var card = get.cardPile(function (card) {
											return card.name == 'sha';
										});
										if (card) player.gain(card, 'gain2');
										('step 3');
										game.updateRoundNumber();
									},
								},
							},
						},
						upgrade_juejing: {
							audio: 'ext:蒸蒸日上/audio:3',
							trigger: {
								player: 'phaseDrawBefore',
							},
							forced: true,
							charlotte: true,
							init(player) {
								if (get.mode() == 'guozhan') {
									player.maxHp = 1;
									player.hp = player.maxHp;
									player.update();
									player.showCharacter(2);
									player.removeCharacter(1);
								}
							},
							onremove(player) {
								player.addSkill('upgrade_juejing');
								if (get.mode() != 'guozhan') player.addSkill('upgrade_longhun');
							},
							content() {
								trigger.cancel();
							},
							ai: {
								noh: true,
							},
							group: ['upgrade_juejing2', 'upgrade_juejing3', 'upgrade_juejing4'],
						},
						upgrade_juejing2: {
							audio: 'upgrade_juejing',
							charlotte: true,
							trigger: {
								player: 'loseAfter',
								global: ['gameDrawEnd', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'gameDraw') {
									return player.countCards('h') != 7;
								} else {
									if (event.name == 'gain' && event.player == player) return player.countCards('h') > 7;
									var evt = event.getl(player);
									if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= 7) return false;
									var evt = event;
									for (var i = 0; i < 7; i++) {
										evt = evt.getParent('upgrade_juejing2');
										if (evt.name != 'upgrade_juejing2') return true;
									}
									return false;
								}
							},
							content() {
								var num = 7 - player.countCards('h');
								if (num > 0) player.draw(num);
								if (num < 0) player.chooseToDiscard('h', true, -num);
							},
						},
						upgrade_juejing3: {
							mode: ['identity'],
							audio: 'ext:蒸蒸日上/audio:true',
							juexingji: true,
							trigger: {
								global: 'gameDrawAfter',
							},
							filter(event, player) {
								return game.players.length > 2 && game.roundNumber <= 0;
							},
							forced: true,
							content() {
								'step 0';
								player.identity = 'zhu';
								game.zhu = player;
								player.showIdentity();
								player.maxHp = 1;
								player.hp = player.maxHp;
								player.update();
								player.clearSkills();
								player.addSkill('zhanjiang');
								('step 1');
								game.countPlayer(function (_0x8301x1) {
									if (_0x8301x1 != player) {
										_0x8301x1.identity = 'fan';
										_0x8301x1.showIdentity();
									}
								});
							},
						},
						upgrade_juejing4: {
							trigger: {
								player: 'dying',
							},
							forced: true,
							silent: true,
							_priority: 10,
							filter(event, player) {
								return game.me != player;
							},
							content() {
								player.clearSkills();
								player.addSkill('zhanjiang');
								player.chooseToDiscard(
									'hj',
									true,
									player.countCards('hj', {
										suit: ['spade', 'club', 'diamond'],
									}),
									{
										suit: ['spade', 'club', 'diamond'],
									}
								);
								player.turnOver(false);
							},
						},
						upgrade_longhun: {
							audio: 'ext:蒸蒸日上/audio:2',
							charlotte: true,
							enable: ['chooseToUse', 'chooseToRespond'],
							//发动时提示的技能描述
							prompt: '将♦️️牌当做杀,♥️️牌当做桃,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
							//动态的viewAs
							viewAs(cards, player) {
								var name = false;
								var nature = null;
								//根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
								switch (cards[0]?.suit) {
									case 'club':
										name = 'shan';
										break;
									case 'diamond':
										name = 'sha';
										nature = 'fire';
										break;
									case 'spade':
										name = 'wuxie';
										break;
									case 'heart':
										name = 'tao';
										break;
								}
								//返回判断结果
								if (name)
									return {
										name: name,
										nature: nature,
									};
								return null;
							},
							//AI选牌思路
							check(card) {
								if (ui.selected.cards.length) return 0;
								//	if(_status.event.player.hasSkill('upgrade_juejing')&&ui.selected.cards.length>1) return 999;
								var player = _status.event.player;
								if (_status.event.type == 'phase') {
									if (player.hasSkill('upgrade_juejing') && card.name == 'shan' && card.suit == 'diamond') return 7;
									var max = 0;
									var name2;
									var list = ['sha', 'tao'];
									var map = {
										sha: 'diamond',
										tao: 'heart',
									};
									for (var i = 0; i < list.length; i++) {
										var name = list[i];
										if (
											player.countCards('hes', function (card) {
												return (name != 'sha' || get.value(card) < 20) && card.suit == map[name];
											}) > 0 &&
											player.getUseValue({
												name: name,
												nature: name == 'sha' ? 'fire' : null,
											}) > 0
										) {
											var temp = get.order({
												name: name,
												nature: name == 'sha' ? 'fire' : null,
											});
											if (temp > max) {
												max = temp;
												name2 = map[name];
											}
										}
									}
									if (name2 == card.suit) return name2 == 'diamond' ? 100 - get.value(card) : 100 - get.value(card);
									return 0;
								}
								return 1;
							},
							//选牌数量
							selectCard: [1, 2],
							//确保选择第一张牌后 重新检测第二张牌的合法性 避免选择两张花色不同的牌
							complexCard: true,
							//选牌范围:手牌区和装备区和木马
							position: 'hes',
							//选牌合法性判断
							filterCard(card, player, event) {
								//如果已经选了一张牌 那么第二张牌和第一张花色相同即可
								if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
								event = event || _status.event;
								//获取当前时机的卡牌选择限制
								var filter = event._backup.filterCard;
								//获取卡牌花色
								var name = card.suit;
								//如果这张牌是♣️️并且当前时机能够使用/打出闪 那么这张牌可以选择
								if (
									name == 'club' &&
									filter(
										{
											name: 'shan',
											cards: [card],
										},
										player,
										event
									)
								)
									return true;
								//如果这张牌是♦️️并且当前时机能够使用/打出火杀 那么这张牌可以选择
								if (
									name == 'diamond' &&
									filter(
										{
											name: 'sha',
											cards: [card],
											nature: 'fire',
										},
										player,
										event
									)
								)
									return true;
								//如果这张牌是♠️️并且当前时机能够使用/打出无懈 那么这张牌可以选择
								if (
									name == 'spade' &&
									filter(
										{
											name: 'wuxie',
											cards: [card],
										},
										player,
										event
									)
								)
									return true;
								//如果这张牌是♥️️并且当前时机能够使用/打出桃 那么这张牌可以选择
								if (
									name == 'heart' &&
									filter(
										{
											name: 'tao',
											cards: [card],
										},
										player,
										event
									)
								)
									return true;
								//上述条件都不满足 那么就不能选择这张牌
								return false;
							},
							//判断当前时机能否发动技能
							filter(event, player) {
								//获取当前时机的卡牌选择限制
								var filter = event.filterCard;
								//如果当前时机能够使用/打出火杀并且角色有♦️️ 那么可以发动技能
								if (
									filter(
										{
											name: 'sha',
											nature: 'fire',
										},
										player,
										event
									) &&
									player.countCards('hes', {
										suit: 'diamond',
									})
								)
									return true;
								//如果当前时机能够使用/打出闪并且角色有♣️️ 那么可以发动技能
								if (
									filter(
										{
											name: 'shan',
										},
										player,
										event
									) &&
									player.countCards('hes', {
										suit: 'club',
									})
								)
									return true;
								//如果当前时机能够使用/打出桃并且角色有♥️️ 那么可以发动技能
								if (
									filter(
										{
											name: 'tao',
										},
										player,
										event
									) &&
									player.countCards('hes', {
										suit: 'heart',
									})
								)
									return true;
								//如果当前时机能够使用/打出无懈可击并且角色有♠️️ 那么可以发动技能
								if (
									filter(
										{
											name: 'wuxie',
										},
										player,
										event
									) &&
									player.countCards('hes', {
										suit: 'spade',
									})
								)
									return true;
								return false;
							},
							ai: {
								respondSha: true,
								respondShan: true,
								//让系统知道角色<有杀><有闪>
								skillTagFilter(player, tag) {
									var name;
									switch (tag) {
										case 'respondSha':
											name = 'diamond';
											break;
										case 'respondShan':
											name = 'club';
											break;
										case 'save':
											name = 'heart';
											break;
									}
									if (
										!player.countCards('hes', {
											suit: name,
										})
									)
										return false;
								},
								//AI牌序
								order(item, player) {
									if (player && _status.event.type == 'phase') {
										var max = 0;
										var list = ['sha', 'tao'];
										var map = {
											sha: 'diamond',
											tao: 'heart',
										};
										for (var i = 0; i < list.length; i++) {
											var name = list[i];
											if (
												player.countCards('hes', function (card) {
													return (name != 'sha' || get.value(card) < 20) && card.suit == map[name];
												}) > 0 &&
												player.getUseValue({
													name: name,
													nature: name == 'sha' ? 'fire' : null,
												}) > 0
											) {
												var temp = get.order({
													name: name,
													nature: name == 'sha' ? 'fire' : null,
												});
												if (temp > max) max = temp;
											}
										}
										max /= 1.1;
										return max;
									}
									return 2;
								},
							},
							//让系统知道玩家<有无懈><有桃>
							hiddenCard(player, name) {
								if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
								if (name == 'wuxie')
									return (
										player.countCards('hes', {
											suit: 'spade',
										}) > 0
									);
								if (name == 'tao')
									return (
										player.countCards('hes', {
											suit: 'heart',
										}) > 0
									);
							},
							group: ['upgrade_longhun_num', 'upgrade_longhun_discard'],
							subSkill: {
								num: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										var evt = event;
										return ['sha', 'tao'].includes(evt.card.name) && evt.skill == 'upgrade_longhun' && evt.cards && evt.cards.length == 2;
									},
									content() {
										trigger.baseDamage++;
									},
								},
								discard: {
									trigger: {
										player: ['useCardAfter', 'respondAfter'],
									},
									forced: true,
									popup: false,
									logTarget() {
										return _status.currentPhase;
									},
									autodelay(event) {
										return event.name == 'respond' ? 0.5 : false;
									},
									filter(evt, player) {
										return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'upgrade_longhun' && evt.cards && evt.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
									},
									content() {
										player.line(_status.currentPhase, 'green');
										player.discardPlayerCard(_status.currentPhase, 'he', true);
									},
								},
							},
						},
						upgrade_zaiqi: {
							count() {
								var num = 0;
								game.countPlayer2(function (current) {
									current.getHistory('lose', function (evt) {
										if (evt.position == ui.discardPile) {
											for (var i = 0; i < evt.cards.length; i++) {
												if (get.color(evt.cards[i]) == 'red') num++;
											}
										}
									});
								});
								game.getGlobalHistory('cardMove', function (evt) {
									if (evt.name == 'cardsDiscard') {
										for (var i = 0; i < evt.cards.length; i++) {
											if (get.color(evt.cards[i]) == 'red') num++;
										}
									}
								});
								return num;
							},
							audio: 'ext:蒸蒸日上/audio:2',
							forced: true,
							filter(event, player) {
								return lib.skill.upgrade_zaiqi.count() > 0;
							},
							trigger: {
								player: 'phaseJieshuBegin',
							},
							content() {
								'step 0';
								player.chooseTarget([1, lib.skill.upgrade_zaiqi.count()], get.prompt2('upgrade_zaiqi')).ai = function (target) {
									return get.attitude(_status.event.player, target);
								};
								('step 1');
								if (result.bool) {
									var targets = result.targets;
									targets.sortBySeat();
									player.line(targets, 'fire');
									event.targets = targets;
								} else event.finish();
								('step 2');
								event.current = targets.shift();
								if (player.isHealthy())
									event._result = {
										index: 0,
									};
								else
									event.current
										.chooseControl()
										.set('choiceList', ['摸3张牌,弃置2张牌', '令' + get.translation(player) + '回复1点体力并摸2张牌,弃置1张牌)'])
										.set('ai', function () {
											if (get.attitude(event.current, player) > 0) return 1;
											return 0;
										});
								('step 3');
								if (result.index == 1) {
									event.current.line(player);
									player.recover();
									player.draw(2);
									player.chooseToDiscard(true, 'he');
								} else {
									event.current.draw(3);
									event.current.chooseToDiscard(true, 2, 'he');
								}
								if (targets.length) event.goto(2);
							},
						},
						upgrade2_jushou: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							check(event, player) {
								return player.hasSkill('upgrade2_jiewei');
							},
							content() {
								player.turnOver();
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (card.name == 'guiyoujie') return [0, 1];
									},
								},
							},
						},
						upgrade2_jiewei: {
							trigger: {
								player: 'turnOverEnd',
							},
							forced: true,
							audio: 'ext:蒸蒸日上/audio:2',
							content() {
								'step 0';
								if (!player.isTurnedOver() && player.canMoveCard()) player.moveCard();
								('step 1');
								player.draw(6);
								player.chooseToUse(function (card) {
									if (!lib.filter.cardEnabled(card, _status.event.player, _status.event)) {
										return false;
									}
									var type = get.type(card, 'trick');
									return type == 'trick' || type == 'equip';
								}, '是否使用一张锦囊牌或装备牌？');
								('step 2');
								if (result.bool) {
									var type = get.type(result.card || result.cards[0]);
									if (
										game.hasPlayer(function (current) {
											if (type == 'equip') {
												return current.countCards('e');
											} else {
												return current.countCards('j');
											}
										})
									) {
										var next = player.chooseTarget('是否弃置场上的一张' + get.translation(type) + '牌？', function (card, player, target) {
											if (_status.event.type == 'equip') {
												return target.countCards('e') > 0;
											} else {
												return target.countCards('j') > 0;
											}
										});
										next.set('ai', function (target) {
											if (type == 'equip') {
												return -get.attitude(player, target);
											} else {
												return get.attitude(player, target);
											}
										});
										next.set('type', type);
										event.type = type;
									} else {
										player.chooseToDiscard('he', 3, true);
										event.finish();
									}
								} else {
									player.chooseToDiscard('he', 3, true);
									event.finish();
								}
								('step 3');
								if (event.type && result.bool && result.targets && result.targets.length) {
									player.line(result.targets, 'green');
									if (event.type == 'equip') {
										player.discardPlayerCard(result.targets[0], 'e', true);
									} else {
										player.discardPlayerCard(result.targets[0], 'j', true);
									}
								}
								('step 4');
								player.chooseToDiscard('he', 3, true);
							},
						},
						upgrade_huoshou: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'huoshou',
						},
						upgrade_jiewei: {
							audio: 'ext:蒸蒸日上/audio:2',
							inherit: 'xinjiewei',
						},
						upgrade_jushou2: {
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							content() {
								'step 0';
								var mp = Math.min(8, player.maxHp - player.hp + player.countCards('e'));
								player.draw(4 + mp);
								player.turnOver();
								('step 1');
								player
									.chooseCard('h', true, '弃置一张手牌,若以此法弃置的是装备牌,则你改为使用之')
									.set('ai', function (card) {
										if (get.type(card) == 'equip') {
											return 5 - get.value(card);
										}
										return -get.value(card);
									})
									.set('filterCard', lib.filter.cardDiscardable);
								('step 2');
								if (result.bool && result.cards.length) {
									if (get.type(result.cards[0]) == 'equip' && !player.isDisabled(get.subtype(result.cards[0]))) {
										player.chooseUseTarget(result.cards[0], true, 'nopopup');
									} else {
										player.discard(result.cards[0]);
									}
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'recover') && player == target && player.hp >= player.maxHp - 1) return [0, 0];
										if (card.name == 'guiyoujie') return [0, 1];
									},
								},
							},
						},
						//Uzi
						upgrade_shenfa: {
							group: ['upgrade_shenfa_global', 'upgrade_shenfa_global2'],
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							logTarget: 'source',
							content() {
								if (trigger.source && trigger.source != player) {
									if (!trigger.source.hasSkill('benghuai') && !trigger.source.hasSkill('wumou')) {
										trigger.source.addSkill(['benghuai', 'wumou']);
										game.log(trigger.source, '获得了技能:', '崩坏、无谋');
									} else {
										trigger.source.loseMaxHp(1);
									}
								} else {
									trigger.cancel();
									player.recover(2);
									player.draw(3);
									if (!player.isTurnedOver()) {
										player.turnOver();
									}
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'recover') && player == target) return [1, 2];
									},
								},
							},
							subSkill: {
								global: {
									mod: {
										cardEnabled(card, player) {
											var source = player;
											if ((card.name == 'tao' || card.name == 'jiu') && source && source == player && source.hasSkill('upgrade_shenfa') && (player.hp < player.maxHp / 2 || player.hp <= 2)) return false;
										},
										cardSavable(card, player) {
											var source = player;
											if ((card.name == 'tao' || card.name == 'jiu') && source && source == player && source.hasSkill('upgrade_shenfa') && (player.hp < player.maxHp / 2 || player.hp <= 2)) return false;
										},
									},
								},
								global2: {
									trigger: {
										player: 'phaseDrawAfter',
									},
									forced: true,
									filter(event, player) {
										if (
											!game.hasPlayer(function (current) {
												return current != player && current.countCards('e') < player.countCards('e');
											})
										)
											return true;
										return (
											game.hasPlayer(function (current) {
												return current != player && current.hp > player.hp;
											}) > 0
										);
									},
									content() {
										player.loseHp();
									},
								},
							},
						},
						upgrade_xukong: {
							mod: {
								cardname(card, player, name) {
									if (card.suit == 'diamond') return 'wuzhong';
								},
								cardnature(card, player) {
									if (card.suit == 'diamond') return false;
								},
							},
							audio: 'ext:蒸蒸日上/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'wuzhong' && event.card.suit == 'diamond';
							},
							content() { },
							ai: {
								threaten: 2,
								effect: {},
								skillTagFilter(player, tag, arg) {
									return arg.card.name == 'wuzhong' && arg.card.suit == 'diamond';
								},
							},
						},
					},
					translate: {
						upgrade_guansuo: '♡关索',
						upgrade_caopi: '♡曹丕',
						upgrade_zhangliao: '♡张辽',
						upgrade_huangyueying: '♡黄月英',
						upgrade_simayi: '♡司马懿',
						upgrade_xuzhu: '♡许褚',
						upgrade_xiahoudun: '♡夏侯惇',
						upgrade_lvmeng: '♡吕蒙',
						upgrade_zhouyu: '♡周瑜',
						upgrade_luxun: '♡陆逊',
						upgrade_zhaoyun: '♡赵云',
						upgrade_guanyu: '♡关羽',
						upgrade_zhangfei: '♡张飞',
						upgrade_machao: '♡马超',
						upgrade_caocao: '♡曹操',
						upgrade_guojia: '♡郭嘉',
						upgrade_lvbu: '♡吕布',
						upgrade_xushu: '♡徐庶',
						upgrade_wuyan: '无言',
						upgrade_jujian: '举荐',
						upgrade_wuyan_info: '锁定技,当你使用锦囊牌造成伤害时,你防止此伤害;锁定技,当你受到锦囊牌对你造成的伤害时,你防止此伤害并摸一张牌.',
						upgrade_jujian_info: '回合开始/结束阶段开始时,你可以弃置一张非基本牌并选择一名其他角色,令其摸两张牌并回复1点体力,将其武将牌翻转至正面朝上并重置之.此流程结束后,若其体力等于体力上限,你摸一张牌.',
						upgrade_huanggai: '♡黄盖',
						upgrade_daqiao: '♡大乔',
						upgrade_ganning: '♡甘宁',
						upgrade_qixi: '奇袭',
						upgrade_qixi_info: '你可以将一张黑色牌当【过河拆桥】使用.你使用的【过河拆桥】可额外指定一个目标.',
						upgrade_fenwei: '奋威',
						upgrade_fenwei_info: '每回合限一次,当一名角色使用的锦囊牌指定了至少两名角色为目标时,你可以令此牌对其中任意名角色无效.你可以回复1点体力或摸两张牌.',
						upgrade_huatuo: '♡华佗',
						upgrade_lidian: '♡李典',
						upgrade_liubei: '♡刘备',
						upgrade_zhoutai: '♡周泰',
						upgrade_diaochan: '♡貂蝉',
						upgrade_sunquan: '♡孙权',
						upgrade_sunshangxiang: '♡孙尚香',
						upgrade_zhugeliang: '♡诸葛亮',
						upgrade_zhenji: '♡甄姬',
						upgrade_huaxiong: '♡华雄',
						upgrade_sp_zhugeliang: '♡卧龙诸葛',
						upgrade_xunyou: '♡荀攸',
						upgrade_xunyu: '♡荀彧',
						upgrade_dianwei: '♡典韦',
						upgrade_yanwen: '♡颜良文丑',
						//	xin_yuanshao:"手杀袁绍",
						upgrade_zhangjiao: '♡张角',
						upgrade_sunce: '♡孙策',
						upgrade_yuanshao: '♡袁绍',
						upgrade_liushan: '♡刘禅',
						upgrade_fangquan: '放权',
						upgrade_fangquan_info: '出牌阶段开始前,你可以跳过此阶段.若如此做,弃牌阶段开始时,你可以弃置一张手牌,令一名其他角色进行一个额外回合并获得技能【挑衅】和【观星】直到其回合结束.',
						upgrade_ruoyu: '若愚',
						upgrade_ruoyu_info: '主公技,觉醒技,准备阶段,若你的体力值为全场最少,则你加1点体力上限,将体力回复至4点并摸两张牌,获得技能〖思蜀〗和〖激将〗,且你可以于回合结束阶段进行一个额外回合.',
						upgrade_lsjijiang: '激将',
						upgrade_lsjijiang1: '激将',
						upgrade_lsjijiang2: '激将',
						upgrade_lsjijiang_info: '主公技.①当你需要使用或打出【杀】时,你可以令其他蜀势力角色依次选择是否打出一张【杀】.若有角色响应,则你视为使用或打出了此【杀】.②每回合限一次.当有蜀势力角色于回合外使用或打出【杀】时,其可以令你摸两张牌并弃置一张手牌.',
						upgrade_caoren: '♡曹仁',
						upgrade_huangzhong: '♡黄忠',
						upgradeShen: '神将',
						upgradeGD_zhaoyun: '高达七号',
						upgradeGD_zhaoyun_ab: '♡神赵云',
						upgrade_juejing: '绝境',
						upgrade_juejing2: '绝境',
						upgrade_juejing3: '绝境',
						upgrade_longhun: '龙魂',
						upgrade_longhun_info: '你可以将同花色的一至两张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当普【无懈可击】.若你以此法使用了两张红色牌,则此牌回复值或伤害值+1.若你以此法使用了两张黑色牌,则你弃置当前回合角色一张牌.',
						upgrade_juejing_info: '闯阵技,游戏开始时,若场上角色不少于3,你身份变为主公,其余人均变为反贼;锁定技,摸牌阶段开始前,你跳过此阶段.当你获得牌/失去手牌后,若你的手牌数小于7/大于7,则你将手牌摸至7张/弃置至7张.',
						upgrade_dangxian: '当先',
						upgrade_dangxian_info: '锁定技,准备阶段,你执行一个额外的出牌阶段.此阶段开始时,你失去1点体力并从牌堆/弃牌堆中获得一张【杀】(若你已发动过〖伏枥〗,则可以不发动此效果.且摸x张牌(x为你可以对其使用【杀】的目标数)).',
						upgrade_fuli: '伏枥',
						upgrade_fuli_info: '限定技,当你处于濒死状态时,可以将体力回复至X点并将手牌摸至3+X张(X为场上势力数).若X大于2,你翻面.',
						upgrade_qianxi: '潜袭',
						upgrade_qianxi_sha: '潜袭',
						upgrade_qianxi_effect: '潜袭',
						upgrade_qianxi_effect_bg: '袭',
						upgrade_qianxi_info: '准备阶段开始时,你可摸两张牌,弃置一张牌并选择一名距离为1的其他角色.该角色于本回合内:{不能使用或打出与此牌颜色相同的牌,且其装备区内与此牌颜色相同的防具牌无效,且当其使用牌或打出牌/回复体力时,你摸两张牌并弃置一张牌/你摸四张牌并弃置两张牌.}',
						upgrade_fenji: '奋击',
						upgrade_buqu: '不屈',
						upgrade_buqu_bg: '创',
						upgrade_buqu_info: '锁定技,当你处于濒死状态时,你亮出牌堆顶的一张牌并置于你的武将牌上,称之为<创>.若此牌不为武器牌,则你回复至1体力.若为武器牌,则将此牌置入弃牌堆.只要你的武将牌上有<创>,你的手牌上限便与<创>的数量相等.',
						upgrade_fenji: '奋激',
						upgrade_fenji_info: '一名角色的结束阶段开始时,若其手牌数不大于1,你可以令其摸3张牌,你失去1点体力.',
						upgrade_luanji: '乱击',
						upgrade_luanji_info: '你可以将两张花色相同的手牌当做【万箭齐发】使用(你使用的【万箭齐发】无视目标防具).当你使用【万箭齐发】选择目标后,你可以为此牌减少一个目标.',
						upgrade_luanji_remove: '乱击',
						upgrade_xueyi: '血裔',
						upgrade_xueyi_info: '主公技,锁定技.①游戏开始时,你获得2X个<裔>标记(X为场上群势力角色的数目).②出牌阶段开始时,你可以移去一个<裔>标记,摸一张牌.③你的手牌上限+Y(Y为<裔>标记数).',
						upgrade_xueyi_draw: '血裔',
						upgrade_leiji: '雷击',
						upgrade_leiji_misa: '雷击',
						upgrade_guidao: '鬼道',
						upgrade_leiji_info: '①当你或距离1以内的一名其他角色使用或打出【闪】或【闪电】时,你可以进行判定.②当你的判定的判定牌生效后,若结果为:♠️️,你可对一名其他角色造成2点雷电伤害;♣️️:你回复1点体力并可对一名其他其他角色造成1点雷电伤害.',
						upgrade_leiji_append: '<span style="font-family: yuanli">不能触发〖雷击〗的判定:〖暴虐〗、〖助祭〗、<br>〖弘仪〗、〖孤影〗.</span>',
						upgrade_leiji_faq: '不能触发〖雷击〗的判定',
						upgrade_leiji_faq_info: '<br>董卓/界董卓〖暴虐〗<br>黄巾雷使〖助祭〗<br>羊徽瑜〖弘仪〗<br>鸣濑白羽〖孤影〗',
						xinguidao_info: '一名角色的判定牌生效前,你可以打出一张黑色牌作为判定牌并获得原判定牌.若你以此法打出的牌为♠️️2-9,则你摸一张牌.',
						upgrade_huangtian: '黄天',
						upgrade_qiangxi: '强袭',
						upgrade_qiangxi_info: '出牌阶段对每名其他角色限一次,你可以选择一项:1. 失去一点体力并对你攻击范围内的一名其他角色造成一点伤害;2. 弃置一张【杀】或武器牌并对你攻击范围内的一名其他角色造成一点伤害.(体力小于你的角色受到的此伤害+1).当你首次发动此技能结算后,你摸x张牌(x为目标已损失的体力值,且最多为5).',
						upgrade_huoji: '火计',
						upgrade_huoji_info: '出牌阶段,你可一张红色牌当作【火攻】使用.',
						upgrade_kanpo: '看破',
						upgrade_kanpo_info: '你可以将一张黑色牌当作【无懈可击】使用.',
						upgrade_jieming: '节命',
						upgrade_jieming_info: '当你受到1点伤害后,你可以令一名角色摸2+x张牌(x为其已损失的体力值,且至多为5).若其手牌数小于体力上限,则你摸一张牌.',
						upgrade_shuangxiong: '双雄',
						upgrade_shuangxiong_info: '摸牌阶段,你可以放弃摸牌.若如此做,你展示牌堆顶的两张牌并选择获得其中的一张.你本回合内可以将与此牌颜色不同的一张手牌当做【决斗】使用.当你受到【决斗】造成的伤害时,你可以获得对方于此决斗中打出的所有【杀】',
						upgrade_shuangxiong2: '双雄',
						upgrade_shuangxiong2_info: '',
						upgrade_guanxing: '观星',
						upgrade_guanxing_info: '准备阶段,你可以观看牌堆顶的12张牌(存活角色小于5时改为7张),并将其以任意顺序置于牌堆项或牌堆底,若你将〖观星〗的牌都放在了牌堆底,则你可以在结束阶段再次发动〖观星〗.',
						upgrade_kongcheng: '空城',
						upgrade_kongcheng_info: '当你失去最后一张手牌时,你可以移动场上的一张牌.锁定技,当你没有手牌时,你不能成为【杀】、【决斗】、【南蛮入侵】和【铁索连环】的目标.',
						upgrade_luoshen: '洛神',
						upgrade_luoshen_info: '准备阶段和出牌结束阶段,你可以进行判定,若结果为黑色则获得此判定牌,且可重复此流程直到出现红色的判定结果.你通过〖洛神〗获得的牌,不计入当前回合的手牌上限.若结果为♥️️,你摸两张牌,弃置两张牌.',
						upgrade_luoshen_info_guozhan: '准备阶段,你可以进行判定,若为黑色则可以继续判定,直到出现红色.你获得所有黑色的判定牌.你通过〖洛神〗获得的牌,不计入当前回合的手牌上限.(结果为黑色的判定牌于此过程中不会进入弃牌堆)',
						upgrade_xiaoji: '枭姬',
						upgrade_xiaoji_info: '当你失去一张装备区内的牌后,你可以摸x张牌(x为你装备区牌数/2向下取整+2).',
						upgrade_jieyin: '结姻',
						upgrade_jieyin_info: '出牌阶段限一次,你可以选择一名男性角色并弃置一张手牌或将装备区内的一张装备牌置于其装备区,你与其各回复1点体力并各摸1张牌.',
						upgrade_biyue: '闭月',
						upgrade_biyue_info: '结束阶段,你可以摸x+1张牌(x为0,每满足以下一个条件均为x+1,1、你装备区牌数为全场最少之一;2、你手牌为全场最少之一;3、你体力为全场最少之一).',
						upgrade_jizhi: '集智',
						upgrade_jizhi_info: '当你使用锦囊牌时,你可以摸1张牌,若此牌为延时锦囊、红色牌,你改为摸2张牌.若此牌为基本牌,则你可以弃置之,令本回合手牌上限+1.',
						upgrade_qicai: '奇才',
						upgrade_qicai_info: '锁定技,你使用锦囊牌无距离限制,你装备区内的武器牌、防具牌和宝物牌不能被其他角色弃置.',
						upgrade_zhiheng: '制衡',
						upgrade_zhiheng_info: '出牌阶段限一次,你可以弃置任意张牌并摸等量的牌,若你在发动〖制衡〗时弃置了所有手牌,则你多摸x张牌(x为你在其攻击范围内的其他势力角色数+1).',
						upgrade_jiuyuan: '救援',
						upgrade_jiuyuan_info: '主公技,其他吴势力角色对自己使用【桃】时,若其体力值大于你,则其可以选择令你回复1点体力,其摸1张牌.',
						upgrade_zhiyu: '智愚',
						upgrade_qice: '奇策',
						upgrade_zhiyu_info: '当你受到伤害后,你可以摸一张牌,展示所有手牌.若颜色均相同,你令伤害来源弃置X张牌(X为你手牌数,且至多为3).',
						upgrade_qice_info: '出牌阶段限一次,你可以将所有的手牌(至少一张)当做任意一张普通锦囊牌使用;当你使用转化的非延时锦囊后,你摸X张牌(X为牌堆中与此牌同名的牌数,且至多为7),每回合限一次.',
						upgrade_wushuang: '无双',
						upgrade_wushuang_info: '锁定技,当你使用【杀】或【决斗】指定目标后,你令此牌需要依次使用或打出两张【闪】或【杀】响应.锁定技,你体力值为全场最多之一,你使用的【杀】和【决斗】可多指定x名角色为目标(x为你体力值的一半向下取整).锁定技,你计算与其他角色的距离时-1.',
						upgrade_yiji: '遗计',
						upgrade_yiji_info: '当你受到1点伤害或回复1点体力后,你可以摸四张牌并弃置两张牌,可以将至多两张手牌交给其他角色,这些角色获得技能:〖界遗计〗直到回合结束.',
						upgrade_yijue: '义绝',
						upgrade_yijue_info: '出牌阶段限一次,你可以令一名有手牌的其他角色展示一张手牌.若此牌为黑色,则该角色不能使用或打出牌,非锁定技失效到其出牌阶段开始且受到来自你的♥️️【杀】的伤害+x(x为其体力上限的一半向下取整)直到回合结束.若此牌为红色,则你可以获得此牌,并可以令其回复1点体力且各摸一张牌.',
						upgrade_yijue2: '义绝',
						upgrade_yijue2_info: '',
						upgrade_qingjian: '清俭',
						upgrade_qingjian_info: '当你于摸牌阶段外获得牌时,你可以展示任意张牌并交给一名其他角色.当前回合角色本回合的手牌上限+X(X为你给出的牌中包含的类别数).每回合限一次.',
						qingjian_add: '清俭',
						qingjian_add_info: '',
						upgrade_mayunlu: '♡马云騄',
						upgrade_fengpo: '凤魄',
						upgrade_fengpo_info: '锁定技,每种牌名限一次,当你于出牌阶段内第一次使用【杀】或【决斗】指定目标后,若目标角色数为1,你摸X张牌并令此牌的伤害值基数+X.(X为其区域内牌中♦️️牌的数量),若X为0,你从牌堆中获得一张【杀】.',
						upgrade_miji: '秘计',
						upgrade_zhenlie: '贞烈',
						upgrade_miji_info: '结束阶段,若你已受伤,则可以摸X张牌,可以将至多X张牌交给一名其他角色(X为你已损失的体力值+1).',
						upgrade_zhenlie_info: '当你成为其他角色使用【杀】或普通锦囊牌的目标后,你可以失去一点体力并令此牌对你无效,弃置对方X张牌(若其体力值不大于你,X为1,若其体力值大于你,X改为2).',
						upgrade_qingnang: '青囊',
						upgrade_qingnang_info: '出牌阶段,你可以弃置一张牌,令一名本回合内未成为过〖青囊〗的目标的角色回复1点体力并摸三张牌,其弃置一张牌.若你未受伤,你摸一张牌.若你弃置的是黑色牌,则你本回合内不能再发动〖青囊〗.',
						upgrade_lingcao: '♡凌操',
						upgrade_dujin: '独进',
						upgrade_dujin_info: '锁定技,摸牌阶段,你额外摸X张牌;你的手牌上限+X(X为你装备区里牌数的一半且向上取整+1).',
						upgrade_yaowu: '耀武',
						upgrade_yaowu_info: '锁定技,当你受到牌造成的伤害时,若此牌为红色,则伤害来源摸一张牌;否则你摸一张牌.',
						upgrade_qingguo: '倾国',
						upgrade_qingguo_info: '你可以将一张黑色牌当做【闪】使用或打出.',
						upgrade_tuxi: '突袭',
						upgrade_luoyi: '裸衣',
						upgrade_luoyi2: '裸衣',
						upgrade_ganglie: '刚烈',
						upgrade_yingzi: '英姿',
						upgrade_scyingzi: '英姿',
						upgrade_fanjian: '反间',
						upgrade_fanjian_card: '展示弃牌',
						upgrade_fanjian_hp: '流失体力',
						upgrade_qianxun: '谦逊',
						upgrade_qianxun2: '谦逊',
						upgrade_lianying: '连营',
						upgrade_tishen: '替身',
						upgrade_tishen2: '替身',
						upgrade_jianxiong: '奸雄',
						upgrade_jianxiong_mopai: '摸牌',
						upgrade_jianxiong_napai: '拿牌',
						upgrade_yiji: '遗计',
						upgrade_yiji2: '遗计',
						upgrade_tieji: '铁骑',
						upgrade_fankui: '反馈',
						upgrade_yicong: '义从',
						upgrade_kurou: '苦肉',
						upgrade_zhaxiang: '诈降',
						upgrade_zhaxiang2: '诈降',
						upgrade_guicai: '鬼才',
						upgrade_xunxun: '恂恂',
						upgrade_wangxi: '忘隙',
						upgrade_guose: '国色',
						upgrade_zhangxingcai: '♡张星彩',
						upgrade_qiangwu: '枪舞',
						upgrade_shenxian: '甚贤',
						upgrade_qiangwu_info: '出牌阶段,你可以进行判定.若如此做,直到回合结束,你使用点数小于判定结果的【杀】时不受距离限制,目标+1,且你使用点数大于判定结果的【杀】时不计入出牌阶段的使用次数限制.',
						upgrade_shenxian_info: '你的回合外,当有其他角色因弃置而失去非锦囊牌时,你可以摸一张牌,若其中有♥️️基本牌,你回复1点体力,每回合限三次.',
						upgrade_shangshi: '伤逝',
						upgrade_shangshi_2nd: '伤逝',
						upgrade_shangshi_info: '当你受到伤害时,你可以弃置1~3张牌.当你的手牌数小于X时,若你已受伤,你可以将手牌摸至X张(X为你已损失的体力值+2,且至多为7)',
						upgrade_rende: '仁德',
						upgrade_rende_info: '出牌阶段,你可以将至少一张手牌交给其他角色,你于此阶段内不能再以此法交给该角色牌;你于此阶段内给出的牌每累计达到两张,若你已受伤,你回复1点体力,否则摸一张牌,你可以视为使用一张基本牌',
						upgrade_xunxun_info: '摸牌阶段,你可以观看牌堆顶的7张牌,将其中的3张牌置于牌堆顶,并将其余的牌以任意顺序置于牌堆底.',
						upgrade_wangxi_info: '每当你对其他角色造成1点伤害后,或受到其他角色造成的1点伤害后,你可与该角色各摸一张牌,若你手牌数不为最多,你摸一张牌.',
						upgrade_sijun: '思君',
						upgrade_sijun_info: '限定技,当一名男性其他角色回合开始前,若其体力不大于1且武将不为孙策,你可以令其更换武将为随机一个<孙策"并增加1点体力上限,其在回合结束后,执行一个额外回合.',
						upgrade_guose_info: '出牌阶段限2次,你可以选择一项:将一张♦️️牌当做【乐不思蜀】使用;或弃置一张♦️️牌并弃置场上的一张【乐不思蜀】.选择完成后,你摸x张牌(x为场上【乐不思蜀】数,且至少为1).',
						upgrade_guicai_info: '在任意角色的判定牌生效前,你可以打出一张牌代替之;当一名角色的判定结果为♠️️♦️️时,你摸一张牌,每回合限两次',
						upgrade_zhuhai_info: '一名其他角色的结束阶段开始时,若该角色本回合造成过伤害,你可以对其使用一张【杀】.',
						upgrade_qianxin_info: '觉醒技,当你造成一次伤害后,若你已受伤,你须减1点体力上限,并获得技能<荐言>.',
						upgrade_jianyan_info: '出牌阶段限一次,你可以声明一种牌的类别或颜色,并亮出牌库中第一张符合你声明的牌,你令一名男性角色获得此牌',
						upgrade_kurou_info: '出牌阶段限一次,你可以弃置一张牌,失去1点体力.',
						upgrade_zhaxiang_info: '锁定技 每当你失去1点体力后,你摸五张牌,你须弃置两张牌.若此时是你的出牌阶段,则直到回合结束,你使用红色【杀】无距离限制且不能被【闪】响应,你可以额外使用一张【杀】.',
						upgrade_yicong_info: '锁定技,若你体力值大于已损失体力值,你的进攻和防御距离+x(x为你体力值),否则你的进攻和防御距离+y(y为你已损失的体力值);当你体力值变化时,若你坐骑区有牌,你摸2张牌.',
						upgrade_fankui_info: '每当你受到1点伤害后,你可以获得伤害来源的一张牌,若其牌数不比你少,你可以额外执行一次此流程.',
						upgrade_tieji_info: '当你使用【杀】指定一名角色为目标后,你可以进行一次判定并令该角色的非锁定技失效直到其回复体力后,除非该角色弃置一张与判定结果花色相同的牌,否则不能使用【闪】抵消此【杀】.你摸x张牌(x为3-你手牌里【杀】的数量).每回合限五次.',
						upgrade_hujia: '护驾',
						upgrade_hujia_info: '主公技,当你需要使用或打出一张【闪】时,你可以令其他魏势力角色选择是否打出一张【闪】.若有角色响应,则你视为使用或打出了一张【闪】.(奸雄:描述添加,一名魏国角色在你回合外受到牌的伤害时,你可以获得对其造成伤害的牌并摸一张牌).',
						upgrade_jianxiong_info: '每当你受到伤害后,你可以获得对你造成伤害的牌,摸一张牌.',
						upgrade_qianxun_info: '每当一张【桃】、延时类锦囊牌或其他角色使用的普通锦囊牌或【杀】生效时,若你是此牌的唯一目标,你可以将所有手牌置于你的武将牌上,若如此做,此回合结束时,你获得你武将牌上的所有牌.',
						upgrade_lianying_info: '当你失去最后的手牌时,你可以令至多X名角色各摸两张牌并弃置一张手牌(X为你此次失去的手牌数).',
						upgrade_yingzi_info: '锁定技,摸牌时,你额外摸随机1~2张牌(每回合限四次),你的手牌上限为你的体力上限.',
						upgrade_scyingzi_info: '锁定技,摸牌时,你额外摸随机1~2张牌(每回合限四次),你的手牌上限为你的体力上限.',
						upgrade_fanjian_info: '出牌阶段限一次,你可以展示一张手牌并将此牌交给一名其他角色.该角色选择一项:1、展示其手牌并弃置所有与此牌花色相同的牌,若其手牌数为全场最少之一,你摸一张牌;2、失去1点体力,若其体力为全场最少之一,你摸一张牌..',
						upgrade_tuxi_info: '回合开始阶段和回合结束阶段时,你可以获得至多X名其他角色的各一张手牌(X为2,若你体力不为全场最多,X改为3).',
						upgrade_luoyi_info: '锁定技,摸牌阶段开始时,你弃置所有的牌,你跳过摸牌阶段,展示牌堆顶的3x张牌(若你体力大于1,x为你体力值;你体力不大于1,x改为你已损失的体力值.x最多为8),获得其中的基本牌、武器牌和【决斗】,若如此做,直到你的下回合开始,你为伤害来源的【杀】或【决斗】造成的伤害+1.',
						upgrade_ganglie_info: '每当你受到1点伤害后,可进行一次判定,若结果为红色,你对伤害来源造成随机1～2点伤害(♦️️:你摸1张牌;♥️️:你回复1点体力),若结果为黑色,你弃置其x+1张牌(x为你已损失的体力值).',
						upgrade_keji: '克己',
						upgrade_keji_info: '弃牌阶段开始时,若你于本回合的出牌阶段内没有过使用或打出过【杀】,则你可以跳过此阶段并摸1张牌,若你体力为全场最少的,你回复1点体力.',
						upgrade_botu: '博图',
						upgrade_botu_info: '回合结束时,若你本回合出牌阶段内使用的牌包含四种花色,或者满足(π×游戏轮数%,且最高75%)概率,则你可以进行一个额外回合.',
						upgrade_lieren: '烈刃',
						upgrade_lieren_info: '当你使用【杀】或【决斗】造成伤害后,可与受到该伤害的角色进行拼点;若你赢,你获得对方的随机1～2张牌.',
						upgrade_yuji: '♡于吉',
						upgrade_zuoci: '♡左慈',
						upgrade_zuoyou: '♡左幽',
						upgrade_wanhua: '万化',
						upgrade_wanhua_info: '锁定技,游戏开始时,你依次从两个随机技能中二选一获得共计七个技能.',
						upgrade_guhuo: '蛊惑',
						upgrade_guhuo_info: '出牌阶段限一次,你可以令任意名其他角色选择一种花色并展示你的一张手牌,若选择的花色与展示的不同,该角色获得技能【缠怨】,失去1点体力并弃置一张牌,若其已获得技能【缠怨】,你摸一张牌.若若选择的花色与展示的相同,其可回复1点体力或摸一张牌.',
						upgrade_chanyuan: '缠怨',
						upgrade_chanyuan_info: '锁定技,当你的体力值不大于2,你的其他技能失效.',
						upgrade_guhuo_sha: '蛊惑',
						upgrade_guhuo_shan: '蛊惑',
						upgrade_guhuo_wuxie: '蛊惑',
						upgrade_guhuo_ally: '信任',
						upgrade_guhuo_betray: '质疑',
						upgrade_guhuo_ally_bg: '真',
						upgrade_guhuo_betray_bg: '假',
						upgrade_huashen: '化身',
						upgrade_huashen_info: '游戏开始后,你随机获得5张未加入游戏的武将牌,选一张置于你面前并声明该武将牌的一项技能,你拥有该技能且同时将性别和势力属性变成与该武将相同直到该化身被替换.你的每个准备阶段和结束后,你可以选择一项:①弃置至多3张未展示的化身牌并重新获得等量化身牌;②更换所展示的化身牌或技能.(你不可声明限定技、觉醒技、隐匿技、使命技、主公技等特殊技能).',
						upgrade_xinsheng: '新生',
						upgrade_xinsheng_info: '当你受到1点伤害/失去1点体力/回复1点体力后,你可以获得一张新的化身牌.',
						upgrade_menghuo: '♡孟获',
						//	upgrade_sunjian:'手杀孙坚',
						upgrade_jiuchi: '酒池',
						upgrade_jiuchi_info: '你可以将一张♠️️♣️️牌当做【酒】使用.锁定技,你使用【酒】无次数限制,且当你于回合内使用带有【酒】效果的【杀】造成伤害后,你令你的【崩坏】失效直到回合结束,你摸三张牌(每回合限一次).',
						upgrade_xingshang: '行殇',
						upgrade_xingshang_info: '当其他角色死亡后,你可以选择一项:回复1点体力,或获得其所有牌.',
						upgrade_fangzhu: '放逐',
						upgrade_fangzhu_info: '当你受到伤害或回复体力后,你可以令一名其他角色选择一项:摸X张牌并将武将牌翻面,或弃置X张牌并失去1点体力.(X为你已损失的体力值)',
						upgrade_zaiqi: '再起',
						upgrade_zaiqi_info: '结束阶段开始时,你可以令至多X名角色选择一项:1.摸三张牌,弃置两张牌,2.令你回复1点体力并摸两张牌,弃置一张牌(X为本回合进入弃牌堆的红色牌数)',
						upgrade_caiwenji: '♡蔡文姬',
						upgrade_baosanniang: '♡鲍三娘',
						upgrade_tuntian: '屯田',
						upgrade_beige: '悲歌',
						upgrade_tuntian_info: '当你回合结束、翻面或回合外失去牌时,你可以进行一次判定.若判定结果为♥️️,你获得此判定牌.否则你将此牌置于你的武将牌上,称之为【田】.锁定技,你计算与其他角色的距离时-X(X为你武将牌上【田】的数目)',
						upgrade_beige_info: '当有角色受到伤害后,你可以弃置一张牌,并令其进行一次判定,若判定结果为:♥️️♦️️该角色回复X点体力,摸2张牌并弃置一张牌(X为伤害点数);若结果为:♠️️♣️️伤害来源弃3X张牌,若其装备和手牌区内没有牌,其失去1点体力.最后,若伤害来源手牌数等于你或你没有手牌,你摸一张牌.',
						//	upgrade_liushan:'手杀刘禅',
						upgrade_sunben: '界孙笨',
						upgrade_zhangzhang: '♡张昭张纮',
						upgrade_hunzi: '魂姿',
						upgrade_hunzi_info: '觉醒技,准备阶段,若你的体力值不大于2或游戏轮数不小于7,你减1点体力上限,并获得技能〖英姿〗和〖英魂〗.',
						upgrade_jiang: '激昂',
						upgrade_jiang_info: '每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或红色的【杀】时,你可以摸一张牌(你对目标使用时,若其判定区有牌,你摸x张牌,x为其判定区牌数).',
						upgrade_scyinghun: '英魂',
						upgrade_scyinghun_info: '准备阶段,若你已受伤,则你可以令一名其他角色执行下列两项中的一项: 1.摸X张牌. 2.弃X张牌. (X为你已损失的体力值,若你已损失的体力值大于体力值,X改为你体力上限).若其没有手牌,你摸X张牌,且你最多摸5张',
						upgrade_yinghun: '英魂',
						upgrade_yinghun_info: '准备阶段,若你已受伤,则你可以令一名其他角色执行下列两项中的一项: 1.摸X张牌. 2.弃X张牌. (X为你已损失的体力值,若你已损失的体力值大于体力值,X改为你体力上限).若其没有手牌,你摸X张牌,且你最多摸5张',
						upgrade_guzheng: '固政',
						upgrade_guzheng_info: '其他角色的弃牌阶段结束时,你可以令其获得本阶段内进入弃牌堆的牌中的一张,你获得其余的牌;你的手牌上限+3.',
						upgrade_zhijian: '直谏',
						upgrade_zhijian_info: '出牌阶段,你可以将牌中的一张装备牌置于一名其他角色装备区里(不得替换原装备),你摸x张牌(x为其装备区牌数).',
						upgrade_wuguotai: '♡吴国太',
						upgrade_gaoshun: '♡高顺',
						upgrade_ganlu: '甘露',
						upgrade_ganlu_info: '出牌阶段限一次.你可以令两名角色交换装备区内的牌,若这两名角色装备区内牌数差的绝对值大于你已损失的体力值,则你弃置两张手牌,否则你回复1点体力或摸两张牌.',
						upgrade_buyi: '补益',
						upgrade_buyi_info: '一名角色进入濒死状态时,你可展示其一张手牌.若此牌不为基本牌或为♥️️,则其弃置此牌并回复1点体力.若其以此法弃置的牌移动前为其的唯一一张手牌,则你与其各摸一张牌.',
						upgrade_pojun: '破军',
						upgrade_pojun2: '破军',
						upgrade_pojun3: '破军',
						upgrade_pojun_info: '当你使用【杀】指定目标后,你可以将其的至多X张牌置于其武将牌上且你摸X/2张牌向下取整(X为其体力上限),其于其回合开始时获得这些牌.当你因执行【杀】的效果而对一名角色造成伤害时,若该角色的手牌数和装备区内的牌数均不大于你,则此伤害+1(若其没有手牌,此伤害改为+2).',
						upgrade_xianzhen: '陷阵',
						upgrade_xianzhen_info: '出牌阶段限一次,你可以和一名其他角色拼点.若你赢,你摸与两张拼点牌差值等量的牌,其非锁定技失效到回合结束,本回合内对其使用牌没有次数和距离限制且无视其防具.若你没赢,你本回合内不能使用【杀】.若你以此法失去的拼点牌为【杀】,则你的【杀】不计入本回合的手牌上限.',
						upgrade_jinjiu: '禁酒',
						upgrade_jinjiu_info: '锁定技,你的【酒】均视为【杀】.其他角色不能于你的回合内使用【酒】.当你受到酒【杀】的伤害时,你令此伤害-X(X为影响过此【杀】的伤害值的【酒】的数量),你摸1张牌.',
						upgrade_jinjiu2: '禁酒',
						upgrade_jinjiu3: '禁酒',
						upgrade_zhangxiu: '♡张绣',
						upgrade_xiongluan: '雄乱',
						upgrade_xiongluan_info: '限定技,出牌阶段,你可以废除你的判定区和装备区并摸三张牌,指定一名其他角色.直到回合结束,你对其使用牌无距离和次数限制,其不能使用和打出手牌',
						upgrade_congjian: '从谏',
						upgrade_congjian_info: '当你成为锦囊牌的目标时,若此牌的目标数大于1,则你可以交给其中一名其他目标角色一张牌,你摸X张牌(X为1;若你给出的是锦囊牌,X改为2;若你给出的是装备牌,X改为3).最后你回复一个装备栏',
						upgrade_xiahouyuan: '♡夏侯渊',
						upgrade_shensu: '神速',
						upgrade_shensu_info: '回合阶段开始时,你可以跳过回合阶段,视为你对一名其他角色使用共计四张没有距离限制的【杀】,若你体力上限大于1,你失去一半的体力上限且向上取整.',
						upgrade_shebian: '设变',
						upgrade_shebian_info: '当你的武将牌翻面后,你可以移动场上的一张装备牌.',
						upgrade_zhangyi: '♡张嶷',
						upgrade_wurong: '怃戎',
						upgrade_wurong_info: '出牌阶段限一次,你可以令一名其他角色与你同时展示一张手牌:若你展示的是【杀】且该角色展示的不是【闪】,则你对其造成1点伤害;若你展示的不是【杀】且该角色展示的是【闪】,则你获得其一张牌',
						upgrade_pangtong: '♡庞统',
						upgrade_niepan: '涅槃',
						upgrade_niepan_info: '限定技,当你处于濒死状态时,你可以弃置你区域内的所有牌并复原你的武将牌,摸4张牌并将体力回复至3点.你获得武将<神司马懿>的所有技能并获得一个额外的回合',
						upgrade_weiyan: '♡魏延',
						upgrade_qimou: '奇谋',
						upgrade_qimou_info: '限定技,出牌阶段,你可以失去任意点体力并摸等量两倍的牌,直到回合结束,你计算与其他角色的距离时-X,且你可以多使用X张【杀】(X为你失去的体力值)',
						upgrade_xiaoqiao: '♡小乔',
						upgrade_hongyan: '红颜',
						upgrade_hongyan_info: '锁定技,你区域内的♠️️牌和♠️️判定牌均视为♥️️.当你于回合外正面朝上失去♥️️牌后,若你的手牌数小于体力值,你摸一张牌.',
						upgrade_caozhi: '♡曹植',
						upgrade_xuhuang: '♡徐晃',
						upgrade_luoying: '落英',
						upgrade_luoying_discard: '落英',
						upgrade_luoying_judge: '落英',
						upgrade_luoying_info: '当其他角色的♣️️牌因弃置或判定而进入弃牌堆时,你可以获得之.',
						upgrade_jiushi: '酒诗',
						upgrade_jiushi_info: '当你需要使用【酒】时,若你的武将牌正面向上,你可以翻面,视为使用一张【酒】.当你受到伤害后,若你的武将牌背面向上,你可以翻面并获得牌堆中的一张随机锦囊.',
						upgrade_jiushi1: '酒诗',
						upgrade_jiushi3: '酒诗',
						upgrade_jiushi_mark: '酒诗·改',
						upgrade_jiushi_mark_info: '当你需要使用【酒】时,若你的武将牌正面向上,你可以翻面,视为使用一张【酒】.当你受到伤害后,若你的武将牌背面向上,你可以翻面.当你翻面时,你获得牌堆中的一张随机锦囊.',
						upgrade_wuyi: '♡吴懿',
						upgrade_zhuran: '♡朱然',
						upgrade_quancong: '♡全琮',
						upgrade_liaohua: '♡廖化',
						upgrade_guohuai: '♡郭淮',
						upgrade_chengpu: '♡程普',
						upgrade_chunlao: '醇醪',
						upgrade_chunlao2: '醇醪',
						upgrade_chunlao_info: '出牌阶段结束时,若你没有<醇>,你可以将至少一张【杀】置于你的武将牌上,称为<醇>.当一名角色处于濒死状态时,你可以移去一张<醇>,视为该角色使用一张【酒】,若此<醇>的属性为:火,你回复1点体力、雷,你摸3张牌.',
						upgrade_caozhang: '♡曹彰',
						upgrade_yujin: '♡于禁',
						upgrade_xuanfeng: '旋风',
						upgrade_xuanfeng_info: '当你失去装备区内的牌时,或于弃牌阶段弃置了两张或更多的手牌后,你可以依次弃置一至两名其他角色的共计两张牌,或将一名其他角色装备区内的一张牌移动到另一名其他角色的装备区内.',
						upgrade_paoxiao: '咆哮',
						upgrade_paoxiao2: '咆哮',
						upgrade_paoxiao2: '咆哮',
						upgrade_paoxiao_info: '①锁定技,你使用【杀】无距离和次数限制.②锁定技,当你使用第二张【杀】时,你获得1枚"咆哮"标记,你摸"咆哮"数等量的牌(最多3张),当你因【杀】造成伤害时,你弃置所有<咆哮>并令伤害值+X(X为<咆哮>数).回合结束后,你弃置所有<咆哮>.',
						upgrade_tishen: '替身',
						upgrade_tishen_info: '限定技,准备阶段,你可以将体力回复至上限,摸X张牌(X为你回复的体力值).',
						upgrade_liegong: '烈弓',
						upgrade_liegong_info: '你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标;当你使用【杀】指定一个目标后,你可以根据下列条件执行相应的效果:1.其手牌数小于等于你的手牌数,此【杀】不可被【闪】响应,2.其体力值大于等于你的体力值,此【杀】伤害+1,3.其装备区牌数不等于你或其体力值小于体力上限,其进入混乱状态直到其造成伤害,你摸1张牌.',
						upgrade_longdan: '龙胆',
						upgrade_longdan_info: '你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出.',
						upgrade_yajiao: '涯角',
						upgrade_yajiao_info: '当你于回合外因使用或打出而失去手牌后,或你于回合内失去【杀】或【闪】后,你可以展示牌堆顶的一张牌.若这两张牌的类别相同,你可以将展示的牌交给一名角色;若类别不同,你可弃置攻击范围内包含你的角色区域里的一张牌.',
						upgrade_sunjian: '♡孙坚',
						upgrade_sunluban: '♡孙鲁班',
						upgrade_masu: '♡马谡',
						upgrade_pangde: '♡庞德',
						upgrade_jianchu: '鞬出',
						upgrade_jianchu_info: '当你使用【杀】指定一名角色为目标后,你可以弃置其一张牌,若以此法弃置的牌不为基本牌,此【杀】不可被【闪】响应且你本回合使用【杀】的次数上限+1,为基本牌,该角色获得此【杀】',
						upgrade_taishici: '♡太史慈',
						upgrade_jianyong: '♡简雍',
						upgrade_xusheng: '♡徐盛',
						upgrade_madai: '♡马岱',
						upgrade_wangyi: '♡王异',
						//	wangyi:'王异',
						upgrade_guanzhang: '♡关兴张苞',
						upgrade_zishou: '自守',
						upgrade_zishou2: '自守',
						upgrade_zishou_info: '摸牌阶段,你可以多摸X张牌.若如此做,本回合你对其他角色造成伤害时,防止此伤害.',
						upgrade_zongshi: '宗室',
						upgrade_zongshi_info: '锁定技,你的手牌上限+X(X为势力数).准备阶段,若你的手牌数大于体力值,则你本回合内使用【杀】无次数限制.',
						upgrade_dongzhuo: '♡董卓',
						upgrade_baonue: '暴虐',
						upgrade_baonue_info: '主公技,其他群雄角色造成1点伤害后,其可进行判定,若为♠️️,你回复1点体力并获得判定牌.',
						upgrade_panzhangmazhong: '潘马',
						upgrade_hanhaoshihuan: '韩史',
						upgrade_bulianshi: '♡步练师',
						upgrade_zhuiyi: '追忆',
						upgrade_zhuiyi_info: '当你死亡时,你可以令一名其他角色(击杀你的角色除外)摸三张牌,其加1点体力上限并回复2点体力.',
						upgrade_anxu: '安恤',
						upgrade_anxu_info: '出牌阶段限一次,你可以选择两名其他角色,令其中一名角色获得另一名角色的一张牌.若以此法移动的牌不来自装备区,则你摸2张牌.你可以令二者中手牌数较少的一名角色摸2张牌.',
						upgrade_tianxiang: '天香',
						upgrade_tianxiang_info: '当你受到伤害时,你可以弃置一张♥️️牌,防止此伤害并选择一名其他角色,你选择一项:1.令其受到伤害来源对其造成的1点伤害,摸X张牌(X为其已损失体力值且至多为8);2.令其失去1点体力并弃置2张牌,获得你弃置的牌.最后若其手牌数等于1或等于其体力上限,你摸两张牌',
						upgrade_tongxin2: '同心',
						upgrade_tongxin2_bg: '同',
						upgrade_tongxin: '同心',
						upgrade_tongxin_info: '锁定技,游戏开始时,你选择一名其他非女性角色,该角色摸牌阶段摸牌后,你摸等量的牌(最多5张),你摸牌阶段摸牌后,其摸等量的牌(最多5张).当该角色死亡时,你失去1点体力上限.',
						upgrade_liru: '♡李儒',
						upgrade_fencheng: '焚城',
						upgrade_fencheng_info: '限定技.出牌阶段,你可以令所有其他角色各选择一项:弃置至少X张牌(X为该角色的上家以此法弃置牌的数量+1);或受到你对其造成的2点火焰伤害.若你在此回合内击杀过角色,你回复此技能.',
						upgrade_juece: '绝策',
						upgrade_juece_info: '结束阶段,你可以对一名本回合内失去过牌的角色造成1点伤害,若其没有手牌或体力不大于1,则对其造成2点伤害.',
						upgrade_mieji: '灭计',
						upgrade_mieji_info: '出牌阶段限一次,你可以将一张黑色锦囊牌置于牌堆顶,令一名有牌的其他角色选择一项:交给你1张锦囊牌,或依次弃置3张非锦囊牌.',
						upgrade_manchong: '♡满宠',
						upgrade_junxing: '峻刑',
						upgrade_junxing_info: '出牌阶段限一次,你可以弃置任意张手牌并选择一名其他角色.该角色选择一项:1.弃置X张牌并失去1点体力.2.翻面并摸X张牌.(X为你弃置的牌数)',
						upgrade_gongsunzan: '♡公孙瓒',
						upgrade_qiaomeng: '趫猛',
						upgrade_qiaomeng_info: '当你使用【杀】对一名角色造成伤害后,你可以弃置该角色区域内的一张牌.若此牌是坐骑牌,你于此牌置入弃牌堆时获得之.',
						upgrade_dengai: '♡邓艾',
						upgrade_jixi: '急袭',
						upgrade_zaoxian: '凿险',
						upgrade_jixi_info: '出牌阶段,你可以将任意一张【田】当作【顺手牵羊】使用',
						upgrade_zaoxian_info: '觉醒技,准备阶段,若你武将牌上【田】的数量达到3张或更多,则你减1点体力上限,并获得技能〖急袭〗.你于当前回合结束后进行一个额外的回合.',
						upgrade_sunxiu: '♡孙休',
						upgrade_caoxiu: '♡曹休',
						upgrade_lingtong: '♡凌统',
						upgrade_liubiao: '♡刘表',
						upgrade_fazheng: '♡法正',
						upgrade_enyuan: '恩怨',
						upgrade_enyuan1: '恩怨',
						upgrade_enyuan2: '恩怨',
						upgrade_enyuan_info: '当你获得一名其他角色的至少两张牌后,你可以令其摸一张牌.当你受到1点伤害后,你可令伤害来源选择一项:①失去1点体力.②交给你一张手牌.若此牌不为♥️️,则你摸一张牌.',
						upgrade_xuanhuo: '眩惑',
						upgrade_xuanhuo_info: '摸牌阶段结束时,你可以交给一名其他角色两张手牌,该角色选择一项:1. 视为对你选择的另一名角色使用任意一种【杀】或【决斗】,2. 交给你所有手牌.',
						upgrade_wutugu: '♡兀突骨',
						upgrade_ranshang: '燃殇',
						upgrade_ranshang2: '燃殇',
						upgrade_ranshang_info: '锁定技,当你受到火焰伤害后,你获得1枚<燃>标记;结束阶段开始时,你失去X点体力.若X大于2,则你减2点体力上限并摸5张牌,若X大于3,你从牌堆获得一张【南蛮入侵】.(X为<燃>标记的数量)',
						upgrade_hanyong: '悍勇',
						upgrade_hanyong_info: '当你使用【南蛮入侵】或【万箭齐发】或♠️️【杀】时,若你已受伤,则你可以令此牌的伤害值基数+1.若你的体力值不小于游戏轮数,则你获得2枚<燃>标记.',
						upgrade_fuhuanghou: '♡伏皇后',
						upgrade_qiuyuan: '求援',
						upgrade_qiuyuan_info: '当你成为【杀】的目标时,你可选择另一名其他角色.除非该角色交给你一张除【杀】以外的基本牌,否则其须弃置2张牌非锁定技失效到回合结束且也成为此【杀】的目标且该角色不能响应此【杀】.',
						upgrade_zhuikong: '惴恐',
						upgrade_zhuikong_info: '其他角色的回合开始时,若你已受伤、体力值小于该角色或装备区牌数小于该角色,你可与其拼点:若你赢,该角色跳过摸牌和出牌阶段,你将手牌补至你体力上限,且至多为5;若你没赢,你获得其拼点的牌,其视为对你使用一张【杀】.',
						upgrade_gongsunyuan: '♡公孙渊',
						upgrade_huaiyi: '怀异',
						upgrade_huaiyi_info: '出牌阶段限一次,你可以展示所有手牌,若这些牌的颜色:全部相同,你摸一张牌,并将此技能于本阶段内改为<限两次>,终止此技能的结算流程;不全部相同,则你选择一种颜色并弃置该颜色的所有手牌,你可以获得至多X名角色的各一张牌(X为你以此法弃置的手牌数).若你以此法获得的牌不少于两张,则你失去1点体力.',
						upgrade_yuanshu: '♡袁术',
						upgrade_yongsi: '庸肆',
						upgrade_yongsi1: '庸肆',
						upgrade_yongsi2: '庸肆',
						upgrade_yongsi_info: '锁定技,摸牌阶段,你多摸X张牌.弃牌阶段开始时,你弃置X张手牌(X为场上势力数+(你体力值的一半向下取整,且至多为3)).',
						upgrade_caorui: '♡曹叡',
						upgrade_huituo: '恢拓',
						upgrade_huituo_info: '当你失去体力或受到伤害后,你可以令一名角色进行一次判定,若结果为红色,该角色回复X点体力;若结果为黑色,该角色摸2X张牌并弃置一张牌(X为此次伤害的伤害点数).若结果为♥️️,你可以再发动一次此技能.',
						upgrade_caozhen: '♡曹真',
						upgrade_sidi: '司敌',
						upgrade_sidi_push: '司敌',
						upgrade_sidi2: '司敌',
						upgrade_sidi3: '司敌',
						upgrade_sidi_info: '结束阶段,你可以将一张非基本牌置于武将牌上,称为<司>.其他角色的出牌阶段开始时,你可以移去一张<司>.若如此做,其本阶段内不能使用或打出与<司>颜色相同的牌.此阶段结束时,若其于此阶段内未使用过:【杀】,你视为对其使用一张【杀】.锦囊牌,你摸两张牌.',
						upgrade_zhangchunhua: '♡张春华',
						upgrade_handang: '♡韩当',
						upgrade_gongji: '弓骑',
						upgrade_gongji2: '弓骑',
						upgrade_gongji_info: '出牌阶段限一次,你可以弃置一张牌,你的攻击范围视为无限且使用与此牌花色相同的【杀】无次数限制直到回合结束.若你以此法弃置的牌为装备牌,则你摸两张牌且你可以获得一名其他角色的一张牌.',
						upgrade_jiefan: '解烦',
						upgrade_jiefan_info: '限定技,出牌阶段,你可以选择一名角色,令攻击范围内含有该角色的所有角色依次选择一项:1.弃置一张武器牌;2.令其摸一张牌.若游戏轮数为1,则你于此回合结束时回复此技能.',
						upgrade_zhurong: '♡祝融',
						upgrade_zhoucang: '♡周仓',
						upgrade_zhongyong: '忠勇',
						upgrade_zhongyong_info: '当你使用【杀】后,你可以将此【杀】以及目标角色使用的【闪】交给一名其他角色,若其获得的牌中有红色,则其可以对你攻击范围内的角色使用一张【杀】.若其获得的牌中有黑色,其摸一张牌.',
						upgrade_lihuo: '疠火',
						upgrade_lihuo2: '疠火',
						upgrade_lihuo3: '疠火',
						upgrade_lihuo4: '疠火',
						upgrade_lihuo_info: '你使用普通的【杀】可以改为火【杀】,若此【杀】造成过伤害,你失去1点体力并将手牌补至5张;你使用火【杀】可以多选择任意个目标.以此法选择的目标将其武将牌横置之.你每回合使用的第一张牌如果是【杀】,则此【杀】结算完毕后可置于你的武将牌上.',
						upgrade_benxi: '奔袭',
						upgrade_benxi_info: '锁定技,当你于回合内使用牌时,你本回合计算与其他角色的距离-1.你的回合内,若你至场上所有其他角色的距离均不大于1,则当你使用【杀】或普通锦囊牌选择唯一目标后,你选择至多两项:1.为此牌多指定x个目标(x为存活角色数/3向下取整,且至少为1);2.令此牌无视防具;3.令此牌不可被抵消;4.此牌造成1点伤害时摸1张牌.',
						upgrade_jiangchi: '将驰',
						upgrade_jiangchi_info: '出牌阶段开始时,你可选择:①摸1张牌.②摸3张牌,本回合内不能使用或打出【杀】且【杀】不计入手牌上限.③弃置一张牌,本回合内可以多使用2张【杀】,且使用【杀】无距离限制.',
						upgrade_chenqun: '♡陈群',
						upgrade_dingpin: '定品',
						upgrade_dingpin_info: '出牌阶段,你可以弃置一张本回合未使用过/弃置过的类型的牌并选择一名角色.其进行判定,若结果为:黑色,其摸X张牌(X为其体力值且至多为3)且本回合内不能再成为〖定品〗的目标;♥️️,你令此次弃置的牌不计入〖定品〗弃置牌合法性的检测;♦️️,你将武将牌翻面.',
						upgrade_faen: '法恩',
						upgrade_faen_info: '一名角色翻至正面或横置后,你可令其摸一张牌.',
						upgrade_shizhi: '矢志',
						upgrade_shizhi_info: '锁定技,若你的体力值为1,则你的【闪】视为【杀】,且当你使用对应的实体牌为一张【闪】的非转化普通杀造成伤害后,你回复1点体力.',
						upgrade_guotufengji: '♡郭图逄记',
						upgrade_jigong: '急攻',
						upgrade_jigong2: '急攻',
						upgrade_jigong_info: '出牌阶段开始时,你可以摸至多三张牌.若如此做,你本回合的手牌上限基数改为X,且弃牌阶段结束时,若X不小于Y,则你回复1点体力.(X为你本回合内造成的伤害值之和,Y为你本回合内因〖急攻〗摸牌而获得的牌的数量总和)',
						upgrade_jiangwei: '♡姜维',
						upgrade_tiaoxin: '挑衅',
						upgrade_tiaoxin_info: '出牌阶段限一次,你可以选择一名攻击范围内包含你的角色.除非该角色对你使用一张【杀】且此【杀】对你造成伤害,否则你获得其一张牌,将此技能于此出牌阶段内修改为出牌阶段限两次. ',
						upgrade_zhiji: '志继',
						upgrade_zhiji_info: '觉醒技,准备阶段或结束阶段,若你没有手牌,你回复1点体力或摸两张牌,减1点体力上限,获得〖观星〗和〖界集智〗.',
						upgrade_guanping: '♡关平',
						upgrade_longyin: '龙吟',
						upgrade_longyin_info: '当一名角色于其出牌阶段使用【杀】时,你可弃置一张牌令此【杀】不计入出牌阶段使用次数.若此【杀】为♦️️,你摸1张牌;若此【杀】为♥️️,则你摸2张牌;若你以此法弃置的牌与此【杀】点数相同,则你重置<竭忠>.',
						upgrade_jiezhong: '竭忠',
						upgrade_jiezhong_info: '限定技,出牌阶段开始时,你可以将手牌补至手牌上限(至多摸五张).',
						upgrade_caifuren: '♡蔡夫人',
						upgrade_qieting: '窃听',
						upgrade_qieting_info: '其他角色的回合结束时,若其本回合内未造成过伤害,则你可将其装备区内最多2张牌置于你的装备区内;若其本回合内未对其他角色使用过牌,则你可摸2张牌.',
						upgrade_xianzhou: '献州',
						upgrade_xianzhou_info: '限定技.出牌阶段,你可将装备区内的所有牌交给一名其他角色.你回复X点体力并与其各摸X张牌,对其攻击范围内的至多X名角色各造成1点伤害(X为你以此法给出的牌数).',
						upgrade_zhonghui: '♡钟会',
						upgrade_quanji: '权计',
						upgrade_quanji_info: '①当你受到1点伤害/回复1点体力/失去1点体力后,或你的牌被其他角色获得后,你可以摸一张牌(若你的手牌不是全场最多之一,改为你可以摸两张牌),将一张手牌置于武将牌上,称为<权>.②你的手牌上限+X(X为<权>的数量).',
						upgrade_zili: '自立',
						upgrade_zili_info: '觉醒技.准备阶段,若你的<权>数大于2,则你回复1点体力并摸三张牌,减1点体力上限并获得〖排异〗.',
						upgrade_paiyi: '排异',
						upgrade_paiyi_backup: '排异',
						upgrade_paiyi_info: '出牌阶段每项各限一次,你可移去一张<权>并选择一项:①令一名角色摸X张牌.②对至多X名角色各造成1点伤害.(X为<权>数)',
						upgrade_guyong: '♡顾雍',
						upgrade_shenxing: '慎行',
						upgrade_shenxing_info: '出牌阶段,你可以弃置X张牌(X为你本阶段内发动过〖慎行〗的次数且至多为2),摸一张牌.',
						upgrade_bingyi: '秉壹',
						upgrade_bingyi_info: '结束阶段,你可展示所有手牌.若这些牌:颜色均相同,则你可以令至多X名角色各摸一张牌(X为你的手牌数);点数均相同,则你摸一张牌.',
						upgrade_panfeng: '♡潘凤',
						upgrade_kuangfu: '狂斧',
						upgrade_kuangfuDirectHit: '狂斧',
						upgrade_kuangfu_info: '当你使用【杀】造成伤害时,你可以选择其装备区内的最多3张牌,置入到你的装备区内.装备区牌数小于你或装备区没有牌的角色不能使用【闪】响应你使用的【杀】.',
						upgrade_xiongyi: '雄异',
						upgrade_xiongyi_info: '限定技,出牌阶段,你可以选择至多4名角色,这些角色各摸4张牌并获得技能【界铁骑】和【马术】;若你选择的角色数不超过2,你回复1点体力,你于回合结束时执行一个额外的回合.',
						upgrade_lb_mashu: '马术',
						upgrade_lb_mashu_info: '锁定技,你计算与其他角色的距离时-1.',
						upgrade_mc_mashu: '马术',
						upgrade_mc_mashu_info: '锁定技,你计算与其他角色的距离时-1.',
						upgrade_myl_mashu: '马术',
						upgrade_myl_mashu_info: '锁定技,你计算与其他角色的距离时-1.',
						upgrade_md_mashu: '马术',
						upgrade_md_mashu_info: '锁定技,你计算与其他角色的距离时-1.',
						upgrade_mateng: '♡马腾',
						upgrade_mt_mashu: '马术',
						upgrade_mt_mashu_info: '锁定技,你计算与其他角色的距离时-1.',
						upgrade_mt2_mashu: '马术',
						upgrade_mt2_mashu_info: '锁定技,你计算与其他角色的距离时-1.',
						upgrade_shiyong: '恃勇',
						upgrade_shiyong_info: '锁定技,当你受到一次红色【杀】或【酒】【杀】造成的伤害后,须减1点体力上限,你摸2张牌;锁定技,每回合限一次,你使用♠️️♣️️【杀】造成伤害时,目标角色摸3张牌,此伤害变为x(x为该角色的体力上限)',
						upgrade_wudi: '无敌',
						upgrade_wudi_info: '锁定技,免疫一切伤害/失去体力/失去体力上限/翻面效果.',
						upgrade_jiaxu: '♡贾诩',
						upgrade_wansha: '完杀',
						upgrade_wansha_info: '锁定技.①你的回合内,不处于濒死状态的角色不能使用【桃】和【酒】.②当有角色于你的回合内进入濒死状态时,你令所有其他角色的非锁定技失效直到此濒死状态结算结束.',
						upgrade_luanwu: '乱武',
						upgrade_luanwu_info: '限定技,出牌阶段,你可令所有其他角色依次选择一项:①对距离最近(或之一)的角色使用一张【杀】;②失去1点体力.你摸X张牌(X为选择①和②的角色数中的最大值).每回合限一次.锁定技,若有角色在你的回合内死亡,你回复此技能.',
						upgrade_weimu: '帷幕',
						upgrade_weimu2: '帷幕',
						upgrade_weimu_info: '锁定技.①你不能成为黑色锦囊牌和黑色【杀】的目标.②当你于回合内受到伤害时,防止此伤害并摸2张牌.',
						upgrade_lusu: '♡鲁肃',
						upgrade_dimeng: '缔盟',
						upgrade_dimeng_info: '出牌阶段限一次,你可令两名其他角色交换手牌,出牌阶段结束时,你弃置X张手牌(X为这两名角色手牌数之差的绝对值).',
						upgrade_jijiang: '激将',
						upgrade_jijiang1: '激将',
						upgrade_jijiang2: '激将',
						upgrade_jijiang_info: '主公技.①当你需要使用或打出【杀】时,你可以令其他蜀势力角色依次选择是否打出一张【杀】.若有角色响应,则你视为使用或打出了此【杀】.②每回合限一次.当有蜀势力角色于回合外使用或打出【杀】时,其可以令你摸一张牌.',
						upgrade_yufan: '♡虞翻',
						upgrade_zongxuan: '纵玄',
						upgrade_zongxuan_info: '当你的牌因弃置而进入弃牌堆后,你可将其中的任意张牌置于牌堆顶.若剩余的牌中有锦囊牌,则你可以令一名其他角色获得其中的一张.',
						upgrade_zhiyan: '直言',
						upgrade_zhiyan_info: '结束阶段开始时,你可令一名角色摸一张牌(正面朝上移动).若此牌为基本牌,则你摸一张牌.若此牌为装备牌,则其回复1点体力并使用此装备牌.',
						upgrade_sp_caoren: '◇曹仁',
						upgrade2_jushou: '据守',
						upgrade2_jushou_info: '结束阶段,你可以将武将牌翻面.',
						upgrade2_jiewei: '解围',
						upgrade2_jiewei_info: '当你的武将牌翻面后,你可以按顺序执行以下效果:1、若你武将牌正面向上,你可以移动场上的一张牌.2、你可以摸六张牌.3、你可以使用一张锦囊牌或装备牌,并可以在此牌结算后弃置场上一张同类型的牌.4、你弃置三张牌.',
						upgrade_jushou2: '据守',
						upgrade_jushou2_info: '结束阶段,你可以翻面并摸x+4张牌(x为你已损失的体力值+你装备区牌数,且至多为8),弃置一张手牌,若以此法弃置的是装备牌,则你改为使用之',
						upgrade_jushou: '♡沮授',
						upgrade_jianying: '渐营',
						upgrade_jianying_info: '锁定技,每当你在回合内使用两张牌,若你手牌数小于7,你摸两张牌',
						upgrade_xiahoushi: '♡夏侯氏',
						upgrade_qiaoshi: '樵拾',
						upgrade_qiaoshi_info: '其他角色的结束阶段开始时,若你的手牌数或装备区牌数与其相等,则你可以与其各摸一张牌.若这两张牌颜色相同,则你可以重复此步骤.',
						upgrade_kuanggu: '狂骨',
						upgrade_kuanggu_info: '当你一名角色造成1点伤害后,你可以回复1点体力或摸一张牌.',
						upgrade_huilei: '挥泪',
						upgrade_xinzhan: '心战',
						upgrade_xinzhan_info: '出牌阶段限一次,你可以观看牌堆顶的4x张牌(x为存活势力数),展示其中任意数量♥️️的牌并获得之.',
						upgrade_huilei_info: '锁定技,当你死亡时,击杀你的角色弃置所有的牌并失去x点体力上限(x为其体力上限的一半向上取整),其翻面.',
						upgrade_zhengnan: '征南',
						upgrade_zhengnan_info: '当一名角色进入濒死状态时,你可以摸一张牌(若你手牌数不小于9,则改为摸一张牌)并获得下列技能中的任意一个:〖武圣〗、 〖当先〗、〖制蛮〗、〖应援〗和〖奔袭〗.',
						upgrade_yanyu: '燕语',
						upgrade_yanyu2: '燕语',
						upgrade_yanyu_info: '①出牌阶段,你可以重铸【杀】.②出牌阶段结束时,你可以令一名男性角色摸X张牌(X为你本阶段内发动过〖燕语①〗的次数且至多为7).',
						upgrade_tianyi: '天义',
						upgrade_tianyi_info: '出牌阶段限一次,你可以和一名其他角色拼点.若你赢,你获得以下技能效果直到回合结束:你使用【杀】没有距离限制;从牌堆中获得一张【杀】;可额外使用2张【杀】;使用【杀】时可额外指定1个目标.若你没赢,你摸1张牌,你不能使用【杀】直到回合结束.',
						deitiesUzi: 'Uzi',
						upgrade_xukong: '虚空',
						upgrade_xukong_info: '锁定技,你的♦️️均视为【无中生有】',
						upgrade_shenfa: '神灵',
						upgrade_shenfa_global: '红温',
						upgrade_shenfa_global2: '红温',
						upgrade_shenfa_info: '锁定技,当你即将死亡时,若令你进入此状态的伤害非来源于其他角色,你跳过此状态,回复2点体力并摸3张牌,翻面到背面朝上.神罚:击杀你的角色获得技能(崩坏、无谋),若其已拥有俩技能其中之一,则其失去1点体力上限.红温:当你体力小于3或低于体力上限的½时,不能使用【桃】和【酒】;摸牌阶段后,若你的体力不是全场最多之一或装备区牌数是全场最少之一,你失去1点体力',
					},
				};
				for (const i in QQQ.character) {
					const info = QQQ.character[i];
					info[4].add(`ext:蒸蒸日上/image/${i}.jpg`);
					info[4].push(`die:ext:蒸蒸日上/audio/${i}.mp3`);
				}
				lib.config.all.characters.add('蒸蒸日上');
				lib.config.characters.add('蒸蒸日上');
				lib.translate['蒸蒸日上_character_config'] = '<span class="greentext";<span style=\"font-size:24px;font-family:xiaozhuan;font-style: oblique\">蒸蒸日上</span>';
				return QQQ;
			});
		},
		config: {
			enable: {
				name: '开启',
				intro: '开关扩展',
				init: true,
				onclick(FszkCXu1) {
					alert('杂鱼,不准关.杂鱼,杂鱼!');
					this.classList.add('on');
				},
			},
			intro: {
				name: ['潜水的火修复版', "<br><span style='color: gold'>由于本扩展原作者在开源协议的无名杀中进行混淆加密且屡教不改<br>潜在水里的火将此扩展解混淆后发布<br>『无名杀扩展大全群』:771901025<br>", '</span>'].join(''),
				clear: true,
				nopointer: true,
			},
			author: {
				name: '作者名已被混淆',
				clear: true,
				nopointer: true,
			},
			upgradeUpdate: {
				name: '<span class="bluetext">长按此处查看内容介绍</span>',
				intro: '<span class="yellowtext">我们的游戏正在蒸蒸日上哦!!😃😃😃<br/><br/><span class="bluetext">本扩展带有91个普通武将,强度约界限-神之间、王者之战19个boss武将(王华雄、王吕布、王潘凤、王廖化、仙马超等),强度约1v4标准包<br/>·<br/><span class="yellowtext">以下是功能内容(看不全可上滑/鼠标滚轮)<br/><br/></span></span></span><span class="greentext">多人模式</span><br/>·<br/>9-32人身份/国战:要到身份/国战游戏人数设置9-32人后重启生效,可设置身份比例<br/>·<br/>身份国战体力上限/摸牌数:全局玩家根据你所设置的增加对应的体力上限/阶段摸牌数<br/>·<br/>主死忠继:主公阵亡时,若存活反贼数>1,主公随机选择一名忠臣角色并亮出所有手牌,该角色可以选择获得其中最多3张牌,双方交换身份牌<br/>·<br/>出牌范围限制:人数大于8,不能对攻击范围大于4的目标角色使用牌<br/>·<br/>多人平衡:人数大于8,位置越靠后初始手牌越多<br/>·<br/>界面比例:界面比例缩放自由设置(45%-300%)<br/>·<br/><span class="greentext">牌堆</span><br/>·<br/>牌堆:设置选择1-9副牌(军争161张)<br/>·<br/>极略七杀包:极略三国的七杀包卡牌<br/>·<br/>武器附魔:丈八自带咆哮;方天自带无双;青龙刀自带武圣等<br/>·<br/>锦囊妙计:锦囊翻倍<br/>·<br/>惟我毒尊:很多毒<br/>·<br/><span class="greentext">娱乐</span><br/>·<br/>身份国战随机技能:所有武将初始体力变为♥️️♥️️♥️️♥️️♥️️,游戏开始时刷新自身所有技能,每过两轮随机刷新获得若干个技能/二选一:不清空本身技能,玩家每回合从两个随机技能中选择一个临时技能<br/>·<br/>滚雪球模式:身份国战模式生效,击杀其他角色可以获得其技能.主副将原技能:获得其原武将牌上的技能(不包括外来技能),双将则随机获得主/副武将牌的所有原技能(不包括外来技能).全部技能:获得其所有技能<br/>·<br/>身份克隆模式:同将模式〈开局后所有人均选择与你相同的武将〉<br/>·<br/>铁索连舟(通通连起来吧仅身份国战生效)<br/>·<br/>背水一战:有一部分牌视为决斗<br/>·<br/>人品测试:回合开始判定,根据结果执行回复/伤害/摸牌/失体<br/>·<br/><span class="greentext">内测</span><br/>·<br/>加强弱将:神吕布、神赵云、神吕蒙、神诸葛……;无名杀挑战模式自带的boss,迎合一下当下武将的环境,不带特殊效果.适合三国杀武将挑战<br/><br/>虎牢关吕布:boss,这里省略一千字<br/>·<br/>挑战等阶特权:参照狗卡的活动3、5阶特权+,仅挑战模式有效.盟军阵亡时,存活盟军各摸一张牌.三阶:体力/体力上限+1,初始手牌+1,可多出一张杀,开局随机将一张装备牌置入装备区;五阶:获得技能〖重生〗,体力/体力上限+2,初始手牌+2,摸牌阶段多模一张牌,可多出一张杀,开局随机将一张装备牌置入装备区;五阶界限突破:体力+1,出杀+1,摸牌+1.boss也会根据等阶获得对应加强<br/>·<br/><span class="greentext">AI</span><br/>·<br/>智能ai:身份模式,主忠不再坐牢跳过出牌,将会主动盲杀人<br/>·<br/>内奸测试AI:改善内奸对主忠的态度,不会无脑出桃救主<br/>·<br/>开挂ai/温柔ai:如题所示<br/>·<br/>武将AI:戏志才先辅优先选有回血的人<br/>·<br/><span class="greentext">其它</span><br/>·<br/>极略三国音效:极略三国出牌、受伤音效<br/>·<br/>背景音乐/BGM:雪见·落入凡尘/The Truth That You Leave/孤泳者<br/>·<br/>屏蔽报错弹窗:屏蔽日常弹窗,根据不卡死都是正常定律,适用那些老而不卡死只报错的扩展',
				item: {},
			},
			upgradeFumo: {
				name: '武器防具附魔',
				intro: '军争武器防具拥有武将专属技能,例如:方天画戟拥有技能〖无双〗;青龙偃月刀拥有技能〖武圣〗……等',
				init: false,
			},
			upgradeTips: {
				name: '锦囊妙计',
				intro: '基础军争锦囊牌翻倍',
				init: false,
			},
			upgradeRankPoison: {
				name: '唯我毒尊',
				intro: '根据牌堆数增加26、52、78张〖毒〗',
				init: false,
			},
			upgradeClone: {
				name: '身份克隆模式',
				intro: '身份模式,所有其他角色克隆你选择的武将',
				init: false,
			},
			upgradeTMms: {
				name: '人品测试',
				intro: '测试你人品的时候到了',
				init: false,
			},
			upgradeTSLZ: {
				name: '铁索连舟',
				intro: '通通连起来吧',
				init: false,
			},
			upgradeBSYZ: {
				intro: '有一些牌视为〖决斗〗',
				name: '背水一战',
				init: false,
			},
			upgradeExtra: {
				name: '加强部分弱将',
				init: false,
			},
			upgradeHLGBOSS: {
				name: '虎牢关吕布',
				init: false,
			},
			upgradeIQAI: {
				name: '智能AI',
				init: false,
			},
			upgradeWJAI: {
				name: '武将测试AI',
				init: false,
			},
			upgradeCheatAI: {
				name: '开挂AI',
				init: false,
			},
			upgradeBZai: {
				name: '温柔AI',
				init: false,
			},
			upgradeInherit: {
				name: '主亡忠继',
				intro: '主公阵亡时,若存活反贼数>1,主公随机选择一名忠臣角色并亮出所有手牌,该角色可以选择获得其中最多3张牌,双方交换身份牌',
				init: false,
			},
			upgrade_jmsf: {
				name: '副将缩放',
				init: false,
				intro: '开启后,人数大于12时缩小副将武将牌.',
			},
			upgradeJLuseCard: {
				name: '出牌范围限制',
				init: false,
				intro: '开启后,人数大于8时,不能对攻击范围大于4的目标角色使用牌.',
			},
			upgradeMpeople: {
				name: '多人模式平衡',
				init: false,
				intro: '身份国战模式,人数大于8时,位置越靠后的角色初始手牌越多.',
			},
			TLMode: {
				name: '身份/国战体力上限',
				intro: '增加武将体力上限',
				init: '0',
				item: {
					0: '默认',
					1: '+1',
					2: '+2',
					3: '+3',
					4: '+4',
					5: '+5',
					6: '+6',
					7: '+7',
					8: '+8',
					9: '+9',
					10: '+10',
					11: '+11',
					12: '+12',
					13: '+13',
					15: '+15',
					17: '×2',
					19: '×3',
					21: '×4',
					24: '×5',
				},
				onclick(t7) {
					game.saveConfig('extension_蒸蒸日上_TLMode', t7);
				},
			},
			DrawMode: {
				name: '身份/国战摸牌数',
				intro: '增加身份、国战摸牌数',
				init: '0',
				item: {
					'-1': '-1',
					0: '默认',
					1: '+1',
					2: '+2',
					3: '+3',
					4: '+4',
					5: '+5',
					6: '+6',
					7: '+7',
					8: '×2',
					9: '×3',
				},
				onclick(rblH8) {
					game.saveConfig('extension_蒸蒸日上_DrawMode', rblH8);
				},
			},
			upgradeMultiple: {
				name: '牌堆',
				init: 'default',
				intro: '增加军争、国战牌堆',
				item: {
					default: '默认牌堆',
					1: '两副牌',
					2: '三副牌',
					3: '四副牌',
					4: '五副牌',
					5: '六副牌',
					6: '七副牌',
					7: '八副牌',
					8: '九副牌',
				},
			},
			upgradeRandomSkills: {
				name: '身份/国战随机技能',
				init: 'off',
				intro: '所有武将初始体力变为♥️️♥️️♥️️♥️️♥️️,游戏开始时刷新自身所有技能,每过两轮随机刷新获得若干个技能',
				item: {
					ChooseOne: '二选一',
					off: '关闭',
					1: '1',
					2: '2',
					3: '3',
					4: '4',
					5: '5',
					6: '6',
					7: '7',
					8: '8',
					9: '9',
					10: '10',
					11: '11',
					12: '12',
				},
				onclick(bCFuIw2) {
					game.saveConfig('extension_蒸蒸日上_upgradeRandomSkills', bCFuIw2);
				},
			},
			upgradeSnowball: {
				name: '滚雪球模式',
				intro: '身份国战模式,击杀其他角色可以获得其技能.主副将原技能:获得其原武将牌上的技能(不包括外来技能),双将则随机获得主/副武将牌的所有原技能(不包括外来技能).全部技能:获得其所有技能',
				init: '0',
				item: {
					0: '关闭',
					1: '主/副将原技能',
					2: '全部技能',
				},
			},
			upgradeClass: {
				name: '挑战模式等阶特权',
				intro: '设置武将等阶特权',
				init: '0',
				item: {
					0: '一阶',
					1: '三阶',
					2: '五阶',
				},
				onclick(JUGWtug3) {
					game.saveConfig('extension_蒸蒸日上_upgradeClass', JUGWtug3);
				},
			},
			upgradeClass1: {
				name: '五阶界限突破',
				intro: '设置武将等阶特权突破',
				init: '0',
				item: {
					0: '关闭',
					1: '开启',
				},
				onclick(L4) {
					game.saveConfig('extension_蒸蒸日上_upgradeClass1', L4);
				},
			},
			upgrade_Appearence: {
				name: '界面比例',
				init: '1',
				item: {
					0.4: '40%',
					0.5: '50%',
					0.6: '60%',
					0.7: '70%',
					0.8: '80%',
					0.9: '90%',
					1: '100%',
					1.1: '110%',
					1.2: '120%',
					1.3: '130%',
					1.4: '140%',
					1.5: '150%',
					1.6: '160%',
					1.7: '170%',
					1.8: '180%',
					1.9: '190%',
					2: '200%',
					2.1: '210%',
					2.2: '220%',
					2.3: '230%',
					2.4: '240%',
					2.5: '250%',
					2.6: '260%',
					2.7: '270%',
					2.8: '280%',
					2.9: '290%',
					3: '300%',
				},
				onclick(v) {
					game.documentZoom = game.deviceZoom * Number(v);
					ui.updatez();
					game.saveConfig('extension_蒸蒸日上_upgrade_Appearence', v);
				},
			},
			upgradeBGM: {
				name: '背景音乐',
				init: 'random',
				item: {
					random: '</span><span style=\"font-size:14.5px;font-weight:430;font-style: oblique\">随机</span>',
					off: '</span><span style=\"font-size:14.5px;font-weight:430;font-style: oblique\">关闭</span>',
					1: '</span><span style=\"font-size:14.5px;font-weight:430;font-style: oblique\">雪见·落入凡尘</span>',
					2: '</span><span style=\"font-size:14.5px;font-weight:430;font-style: oblique\">The Truth That You Leave</span>',
					3: '</span><span style=\"font-size:14.5px;font-weight:430;font-style: oblique\">九张机</span>',
					5: '</span><span style=\"font-size:14.5px;font-weight:430;font-style: oblique\">满天星辰不及你</span>',
					4: '</span><span style=\"font-size:14.5px;font-weight:430;font-style: oblique\">晚夜微雨问海棠</span>',
					6: '</span><span style=\"font-size:14.5px;font-weight:430;font-style: oblique\">FAKE LOVE</span>',
					7: '</span><span style=\"font-size:14.5px;font-weight:430;font-style: oblique\">Novera</span>',
					8: '</span><span style=\"font-size:14.5px;font-weight:430;font-style: oblique\">孤勇者</span>',
				},
				onclick(o12) {
					game.saveConfig('extension_蒸蒸日上_upgradeBGM', o12);
					game.playBackgroundMusic();
				},
			},
			upgradeEffectAudio: {
				name: '极略三国音效',
				init: true,
			},
			upgradeBGM2: {
				name: '其它BGM',
				init: true,
				onclick($ebl13) {
					game.saveConfig('extension_蒸蒸日上_upgradeBGM2', $ebl13);
				},
			},
			upgradeUpdateTime: {
				name: '<span class="greentext"><span style=\"font-size:17.5px;font-weight:450;font-family:huangcao;font-style: oblique\">版本号:v2.40</span><br/><span class="yellowtext"><span style=\"font-size:17.5px;font-weight:450;font-family:huangcao;font-style: oblique\">发布至今:' + get.translation(window.Math.round((new window.Date().getTime() - 1676860312460) / 86400000)) + ' 天</span>',
				clear: true,
				nopointer: true,
			},
		},
		package: {
			version: '2.5',
		},
	};
});
