'use strict';
window.Sacredimport(function (lib, game, ui, get, ai, _status) {
	lib.skill._职阶 = {
		trigger: { global: 'gameStart' },
		forced: true,
		popup: false,
		filter(event, player) {
			return !_status.connectMode;
		},
		content() {
			game.broadcastAll(function () {
				if (get.is.phoneLayout()) ui.FGDInfo = ui.create.div('.touchinfo.left', ui.window);
				else ui.FGDInfo = ui.create.div(ui.gameinfo);
				ui.FGDInfo.style.top = 'calc(10%)';
				ui.FGDInfo.innerHTML = '场地:' + get.translation(_status.Fateground) + '';
			});
			var n;
			switch (player.name) {
				case 'Fate_VonHohenheimParacelsus': n = 'Caster'; break;
				case 'Fate_HassanOfSerenity': n = 'Assassin'; break;
				case 'Fate_Emiya': n = 'Archer'; break;
				case 'Fate_Arash': n = 'Archer'; break;
				case 'Fate_Scathach': n = 'Lancer'; break;
				case 'Fate_ScathachAssassin': n = 'Assassin'; break;
				case 'Fate_Jeanne': n = 'Ruler'; break;
				case 'Fate_JeanneAlter': n = 'Avenger'; break;
				case 'Fate_Gorgon': n = 'Avenger'; break;
				case 'Fate_Ishtar': n = 'Archer'; break;
				case 'Fate_IshtarRider': n = 'Rider'; break;
				case 'Fate_IshtarAvenger': n = 'Avenger'; break;
				case 'Fate_Ereshkigal': n = 'Lancer'; break;
				case 'Fate_AbigailWilliams': n = 'Foreigner'; break;
				case 'Fate_AbigailWilliamsSummer': n = 'Foreigner'; break;
				case 'Fate_LiShuwenAssassin': n = 'Assassin'; break;
				case 'Fate_Mordred': n = 'Saber'; break;
				case 'Fate_Atalanta': n = 'Archer'; break;
				case 'Fate_AtalantaAlter': n = 'Berserker'; break;
				case 'Fate_Kiyohime': n = 'Berserker'; break;
				case 'Fate_KiyohimeLancer': n = 'Lancer'; break;
				case 'Fate_OkitaSouji': n = 'Saber'; break;
				case 'Fate_OkitaSoujiAlter': n = 'AlterEgo'; break;
				case 'Fate_HassaniSabbah': n = 'Assassin'; break;
				case 'Fate_Enkidu': n = 'Lancer'; break;
				case 'Fate_Siegfried': n = 'Saber'; break;
				case 'Fate_Qinshihuang': n = 'Ruler'; break;
				case 'Fate_HenryJekyll': n = 'Assassin'; break;
				case 'Fate_AnneBonny': n = 'Rider'; break;
				case 'Fate_Orion': n = 'Archer'; break;
				case 'Fate_NeroClaudius': n = 'Saber'; break;
				case 'Fate_NeroBride': n = 'Saber'; break;
				case 'Fate_NeroCaster': n = 'Caster'; break;
				case 'Fate_AltriaRuler': n = 'Ruler'; break;
				case 'Fate_AltriaLily': n = 'Saber'; break;
				case 'Fate_AltriaAlter': n = 'Saber'; break;
				case 'Fate_Carmilla': n = 'Assassin'; break;
				case 'Fate_CarmillaRider': n = 'Rider'; break;
				case 'Fate_Erzsebet': n = 'Lancer'; break;
				case 'Fate_ErzsebetBrave': n = 'Saber'; break;
				case 'Fate_ErzsebetHalloween': n = 'Caster'; break;
				case 'Fate_JeanneAlterBerserker': n = 'Berserker'; break;
				case 'Fate_JeanneArcher': n = 'Archer'; break;
				case 'Fate_BrynhildBerserker': n = 'Berserker'; break;
				case 'Fate_Brynhild': n = 'Lancer'; break;
				case 'Fate_Siegurd': n = 'Saber'; break;
				case 'Fate_RyougiShikiSaber': n = 'Saber'; break;
				case 'Fate_RyougiShikiAssassin': n = 'Assassin'; break;
				case 'Fate_TamamonoMaeLancer': n = 'Lancer'; break;
				case 'Fate_TamamonoMae': n = 'Caster'; break;
				case 'Fate_SesshouinKiara': n = 'AlterEgo'; break;
				case 'Fate_SesshouinKiaraMoonCancer': n = 'MoonCancer'; break;
				case 'Fate_QinLiangyu': n = 'Lancer'; break;
				case 'Fate_AsagamiFujino': n = 'Archer'; break;
				case 'Fate_MurasakiShikibu': n = 'Caster'; break;
				case 'Fate_Penthesilea': n = 'Berserker'; break;
				case 'Fate_MatthewKyrielite': n = 'Shielder'; break;
				case 'Fate_MatthewAlter': n = 'Berserker'; break;
				case 'Fate_MysteriousHeroineX': n = 'Saber'; break;
				case 'Fate_BB': n = 'MoonCancer'; break;
				case 'Fate_BBSSR': n = 'MoonCancer'; break;
				case 'Fate_SajyouManaka': n = 'Beast'; break;
				case 'Fate_Marie': n = 'Rider'; break;
				case 'Fate_ZhugeLiang': n = 'Caster'; break;
				case 'Fate_SimaYi': n = 'Rider'; break;
				case 'Fate_Morgan': n = 'Berserker'; break;
				case 'Fate_Tesla': n = 'Archer'; break;
				case 'Fate_MarthaRuler': n = 'Ruler'; break;
				case 'Fate_DobrynyaNikitich': n = 'Rider'; break;
				case 'Fate_Tiamat': n = 'Beast'; break;
				case 'Fate_SessyoinKiaraB': n = 'Beast'; break;
				case 'Fate_KamaB': n = 'Beast'; break;
				case 'Fate_GorgonB': n = 'Beast'; break;
				case 'Fate_Goetia': n = 'Beast'; break;
				case 'Fate_CaitCuMikocer': n = 'Pretender'; break;
				case 'Fate_Kama': n = 'Avenger'; break;
				case 'Fate_NeroBeast': n = 'Beast'; break;
				case 'Fate_AltriaPendragonAlter': n = 'Rider'; break;
				case 'Fate_LadyAvalon': n = 'Pretender'; break;
				case 'Fate_KoyanskayaofLight': n = 'Assassin'; break;
				case 'Fate_Gilgamesh': n = 'Archer'; break;
				case 'Fate_GilgameshCaster': n = 'Caster'; break;
				case 'Fate_AltriaPendragonLancer': n = 'Lancer'; break;
				case 'Fate_Illya': n = 'Caster'; break;
				case 'Fate_Illyas': n = 'Archer'; break;
			}
			if (n == undefined) {
				n = ['Saber', 'Archer', 'Lancer', 'Caster', 'Rider', 'Assassin', 'Berserker'].randomGet();
				if (lib.skill[n + 'EX']) player.addSkill(n + 'EX');//QQQ
			}
			var nhp;
			switch (n) {
				case 'Saber': { player.storage.Saber = 1; nhp = 1 }; break;
				case 'Archer': { player.storage.Archer = 1; nhp = 2 }; break;
				case 'Lancer': { player.storage.Lancer = 1; nhp = 1 }; break;
				case 'Caster': { player.storage.Caster = 1; nhp = 2 }; break;
				case 'Rider': { player.storage.Rider = 1; nhp = 1 }; break;
				case 'Assassin': { player.storage.Assassin = 1; nhp = 2 }; break;
				case 'Berserker': { player.storage.Berserker = 1; nhp = 1 }; break;
				case 'Ruler': { player.storage.Ruler = 1; nhp = 2 }; break;
				case 'Shielder': { player.storage.Shielder = 1; nhp = 1 }; break;
				case 'Avenger': { player.storage.Avenger = 1; nhp = 2 }; break;
				case 'Foreigner': { player.storage.Foreigner = 1; nhp = 1 }; break;
				case 'AlterEgo': { player.storage.AlterEgo = 1; nhp = 1 }; break;
				case 'MoonCancer': { player.storage.MoonCancer = 1; nhp = 1 }; break;
				case 'Pretender': { player.storage.Pretender = 1; nhp = 2 }; break;
				case 'Beast': { player.storage.Beast = 1; nhp = player.maxHp }; break;
			}
			player.popup(n);
			if (lib.skill[n]) player.addSkill(n);
			player.markSkill(n);
			player.update()
			for (var i = 0; i < player.node.marks.childNodes.length; i++) {
				if (player.node.marks.childNodes[i].name == 'Saber') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Saber_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Archer') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Archer_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Lancer') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Lancer_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Caster') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Caster_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Rider') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Rider_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Assassin') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Assassin_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Berserker') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Berserker_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Ruler') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Ruler_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Shielder') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Shielder_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Avenger') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Avenger_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Ruler') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Ruler_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'MoonCancer') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/MoonCancer_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'AlterEgo') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/AlterEgo_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Foreigner') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Foreigner_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Pretender') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Pretender_0.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
				if (player.node.marks.childNodes[i].name == 'Beast') {
					player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Beast.png');
					player.node.marks.childNodes[i].innerHTML = '';
				}
			}
			player.storage.FClass = n;
		}
	}
});