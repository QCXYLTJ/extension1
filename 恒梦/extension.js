import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
  const bwjkybytku = {
    NUNA: '你还好吗',
    如果可以: '如果可以',
    无感: '无感',
    没语季节: '没语季节',
    念念相忘: '念念相忘',
    想自由: '想自由',
    小城小爱: '小城小爱',
    爱怎么了: '爱怎么了',
    会呼吸的痛: '会呼吸的痛',
    等十三月: '等十三月',
    连名带姓: '连名带姓',
    0: '关闭',
    1: '系统',
    2: '随机',
  };
  return {
    name: '恒梦',
    connect: true,
    arenaReady() {
      if (lib.config.hgmg_bofhmoui === undefined) {
        lib.config.hgmg_bofhmoui === '2';
        game.saveConfig('extension_恒梦_hgmg_bofhmoui', '2');
        game.saveConfig('hgmg_bofhmoui', '2');
        ui.backgroundMusic.addEventListener('ended', game.bwjkybytx);
      }
      game.bwjkybyt = async function () {
        let item = lib.config.extension_恒梦_hgmg_ybyt;
        const itemsx = lib.extensionMenu.extension_恒梦.hgmg_ybyt.item;
        if (item == '2') {
          let items = Array.from(Object.keys(itemsx)).slice(2);
          item = items.randomGet();
        }
        const mkzi = itemsx[lib.config.extension_恒梦_hgmg_ybyt];
        if (item == '0' || !item) {
          ui.backgroundMusic.pause();
        } else if (item == '1') {
          game.playBackgroundMusic();
          ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic);
        } else {
          ui.backgroundMusic.src = item.startsWith('http') ? item : `extension/恒梦/audio/bwjkybyt/${item}.mp3`;
        }
        if (window.hgmgvois) window.hgmgvois.innerHTML = item === '0' ? null : itemsx[lib.config.extension_恒梦_hgmg_ybyt];
      };
      game.bwjkybytx = async function () {
        let item = lib.config.extension_恒梦_hgmg_ybyt;
        let itemx = lib.config.extension_恒梦_hgmg_bofhmoui;
        let items = Array.from(Object.keys(lib.extensionMenu.extension_恒梦.hgmg_ybyt.item)).slice(3);
        if (itemx == '1') {
          item = items.hzmm(item);
          game.saveConfig('extension_恒梦_hgmg_ybyt', item);
          game.saveConfig('hgmg_ybyt', item);
        } else if (itemx == '2') {
          item = items.randomGet();
          game.saveConfig('extension_恒梦_hgmg_ybyt', item);
          game.saveConfig('hgmg_ybyt', item);
        }
        let itemsx = lib.extensionMenu.extension_恒梦.hgmg_ybyt.item;
        const mkzi = itemsx[lib.config.extension_恒梦_hgmg_ybyt];
        if (item == '0' || !item) {
          ui.backgroundMusic.pause();
        } else if (item == '1') {
          game.playBackgroundMusic();
          ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic);
        } else {
          ui.backgroundMusic.src = item.startsWith('http') ? item : `extension/恒梦/audio/bwjkybyt/${item}.mp3`;
        }
        if (window.hgmgvois) window.hgmgvois.innerHTML = item === '0' ? null : itemsx[lib.config.extension_恒梦_hgmg_ybyt];
      };
      if (lib.config.hgmg_vois) game.hgmgvoiskdgr();
      if (lib.config.hgmg_ybyt) {
        game.bwjkybyt();
        ui.backgroundMusic.addEventListener('ended', game.bwjkybytx);
      }
      const allhgmg = [];
      for (const i in lib.characterPack) {
        if (i.startsWith('hgmg')) {
          allhgmg.push(...Array.from(Object.keys(lib.characterPack[i])));
        }
      }
      const jingkapdku = { ...lib.skill, ...lib.card };
      const obj = Object.keys(jingkapdku);
      const obji = Object.keys(lib.translate);
      const objx = Array.from(obj, (key) => {
        return lib.translate[key + '_info'];
      });
      const objy = Object.values(lib.translate);
      for (const name of obji) {
        if (lib.translate[name + '_info'] && lib.translate[name + '_info'].length) {
          let str = lib.translate[name + '_info'];
          const replacements = {
            业火: `<font color=#FF0000>业火</font>`,
          };
          const indexes = [];
          if (str.includes('bnqm')) {
            for (let index = 0; index < str.length; index++) {
              if (str.slice(index, index + 'bnqm'.length) === 'bnqm') {
                indexes.push(index);
              }
            }
            for (const i of indexes) {
              if (str[i + 5] == '(') {
                const yrui = str.slice(i, str.indexOf(')', i + 5) + 1);
                const skillName = str.slice(i + 4, i + 5);
                const skillInfo = str.slice(i + 5 + 1, str.indexOf(')', i + 5));
                replacements[yrui] = bnqm(skillName, skillInfo);
              } else if (str[i + 6] == '(') {
                const yrui = str.slice(i, str.indexOf(')', i + 6) + 1);
                const skillName = str.slice(i + 4, i + 6);
                const skillInfo = str.slice(i + 6 + 1, str.indexOf(')', i + 6));
                replacements[yrui] = bnqm(skillName, skillInfo);
              } else if (str[i + 7] == '(') {
                const yrui = str.slice(i, str.indexOf(')', i + 7) + 1);
                const skillName = str.slice(i + 4, i + 7);
                const skillInfo = str.slice(i + 7 + 1, str.indexOf(')', i + 7));
                replacements[yrui] = bnqm(skillName, skillInfo);
              } else if (str[i + 8] == '(') {
                const yrui = str.slice(i, str.indexOf(')', i + 8) + 1);
                const skillName = str.slice(i + 4, i + 8);
                const skillInfo = str.slice(i + 9, str.indexOf(')', i + 8));
                replacements[yrui] = bnqm(skillName, skillInfo);
              } else if (objy.includes(str.slice(i + 4, i + 8))) {
                replacements[str.slice(i, i + 8)] = bnqm(str.slice(i + 4, i + 8));
              } else if (objy.includes(str.slice(i + 4, i + 7))) replacements[str.slice(i, i + 7)] = bnqm(str.slice(i + 4, i + 7));
              else if (objy.includes(str.slice(i + 4, i + 6))) replacements[str.slice(i, i + 6)] = bnqm(str.slice(i + 4, i + 6));
              else if (objy.includes(str.slice(i + 4, i + 5))) replacements[str.slice(i, i + 5)] = bnqm(str.slice(i + 4, i + 5));
            }
          }
          for (const key of Object.keys(replacements)) {
            if (str.includes(key)) {
              str = str.replace(new RegExp(key, 'g'), replacements[key]);
            }
          }
          lib.translate[name + '_info'] = str;
        }
      }
      lib.translate.iiig_info = '【出牌阶段】可减1体力上限,摸x张牌(x为已损失生命值),记忆自身位置,进入【' + bnqm('驰骋状态', '横置,造成伤害结束状态,使首个受伤者混乱,持续1回合') + '】,使用牌朝目标前进.';
      const hmfflw = lib.config.hgmg_fflw;
      let wfbf = '',
        yjse = '';
      switch (hmfflw) {
        case 'njdu':
          wfbf = '难度';
          break;
        case 'yyyk':
          wfbf = '运营';
          break;
        case 'cddc':
          wfbf = '菜刀';
          break;
        case 'bche':
          wfbf = '保核';
          break;
        default:
          break;
      }
      for (let i = 1; i < 8; i++) {
        switch (i) {
          case 1:
            break;
          case 2:
            yjse = '<font color=#0BDA51>';
            break;
          case 3:
            yjse = '<font color=#00FFFF>';
            break;
          case 4:
            yjse = '<font color=#FF00FF>';
            break;
          case 5:
            yjse = '<font color=#FFD700>';
            break;
          case 6:
            yjse = '<font color=#FF0000>';
            break;
          case 7:
            yjse = '<font color=#333333>';
            break;
          default:
            break;
        }
        lib.translate[`njdu${i}`] = `${wfbf}${yjse}${'★'.repeat(i)}</font>`;
      }
      for (const bc of ['hgmgi', 'hgmgf', 'hgmgt', 'hgmgm', 'hgmgy']) {
        if (!lib.characterPack[bc]) continue;
        lib.characterSort[bc] = {
          njdu1: [],
          njdu2: [],
          njdu3: [],
          njdu4: [],
          njdu5: [],
          njdu6: [],
          njdu7: [],
        };
        const dgji = lib.characterSort[bc];
        const bcpack = Object.keys(lib.characterPack[bc]),
          bcpacklen = bcpack.length;
        for (let j = 0; j < bcpacklen; j++) {
          const name = bcpack[j],
            hmTitle = lib.characterTitle[name] ? lib.characterTitle[name].toString() : '',
            indexa = hmTitle.indexOf(wfbf) + wfbf.length,
            copy = hmTitle.slice(indexa),
            indexb = copy[0];
          let str = hmTitle;
          const replacements = {
            '1i': '★'.small(),
            '2i': '<font color=#0BDA51>★★</font>'.small(),
            '3i': '<font color=#00FFFF>★★★</font>'.small(),
            '4i': '<font color=#FF00FF>★★★★</font>'.small(),
            '5i': '<font color=#FFD700>★★★★★</font>'.small(),
            '6i': '<font color=#FF0000>★★★★★★</font>'.small(),
            '7i': '<font color=#333333>★★★★★★★</font>'.small(),
            难度: '难度'.small(),
            运营: '运营'.small(),
            菜刀: '菜刀'.small(),
            保核: '保核'.small(),
          };
          Object.keys(replacements).forEach((key) => {
            if (str.includes(key)) {
              str = str.replace(new RegExp(key, 'g'), replacements[key]);
            }
          });
          if (lib.characterTitle[name]) lib.characterTitle[name] = str;
          if (dgji['njdu' + indexb]) {
            dgji['njdu' + indexb].push(name);
          }
        }
        if (lib.rank) {
          for (let j = 1; j <= 7; j++) {
            const xuhctodgji = ['junk', 'rare', 'epic', 'legend'];
            const index = Math.ceil(j / 2 - 1);
            if (!xuhctodgji[index]) continue;
            lib.rank.rarity[xuhctodgji[index]].addArray(Array.from(dgji['njdu' + j]));
          }
        }
      }
      for (const i of allhgmg) {
        if (lib.config.skin[i]) {
          const list = Array.from(lib.character[i][3]);
          game.broadcastAll(
            function (list, name) {
              game.expandSkills(list);
              for (const i of list) {
                var info = lib.skill[i];
                if (!info) continue;
                if (!info.audio) continue;
                if (!info.audioname2) info.audioname2 = { name };
                if (lib.config.skin[name]) {
                  info.audioname2[name] = `${i}_skin${lib.config.skin[name]}`;
                } else {
                  delete info.audioname2;
                }
                game.finishSkill(i);
              }
            },
            list,
            i
          );
        }
      }
      for (const i in lib.characterPack) {
        if (i.startsWith('hgmg')) {
          const dhqmwujl = Array.from(Object.keys(lib.characterPack[i]));
          for (const j of dhqmwujl) {
            game.pifuannq(j, '恒梦', i);
          }
        }
      }
      for (const i in lib.characterPack) {
        if (i.startsWith('hgmg')) {
          for (const j in lib.characterPack[i]) {
            const info = lib.character[j];
            if (info && info[4]) {
              info[4].add('ext:恒梦/image/characters/' + j + '.jpg');
            }
          }
        }
      }
    },
    content(config, pack) { },
    precontent() {
      if (lib.config.hgmg_tzgc === undefined) {
        lib.config.hgmg_tzgc === '1';
        game.saveConfig('extension_恒梦_hgmg_tzgc', '1');
        game.saveConfig('hgmg_tzgc', '1');
      }
      if (lib.config.hgmg_vois === undefined) {
        lib.config.hgmg_vois === true;
        game.saveConfig('extension_恒梦_hgmg_vois', true);
        game.saveConfig('hgmg_vois', true);
      }
      if (lib.config.hgmg_voisgsng === undefined) {
        lib.config.hgmg_voisgsng === '1';
        game.saveConfig('extension_恒梦_hgmg_voisgsng', '1');
        game.saveConfig('hgmg_voisgsng', '1');
      }
      if (lib.config.hgmg_fflw === undefined) {
        lib.config.hgmg_fflw === 'njdu';
        game.saveConfig('extension_恒梦_hgmg_fflw', 'njdu');
        game.saveConfig('hgmg_fflw', 'njdu');
      }
      window.hgmg = {
        js: ['hgmgi', 'card'],
        css: ['seat', 'vois', 'qita'],
        lib,
        game,
        ui,
        get,
        ai,
        _status,
      };
      lib.init.js('extension/恒梦/script', 'function', () => {
        window.hgmg.js.forEach((h) => {
          lib.init.js('extension/恒梦/script', h);
        });
      });
      window.hgmg.css.forEach((h) => {
        lib.init.css('extension/恒梦/style', h);
      });
    },
    config: {
      hgmg_tzgcx: {
        name: "<font size='5' color='pink'>恒梦投稿></font>",
        clear: true,
        nopointer: true,
      },
      hgmg_tzgc: {
        name: '投稿',
        init: '1',
        intro: '点击查看',
        item: {
          1: '<font color= #00FFFF>投稿者及其所设计武将</font>',
          2: '<font color= #EE9A00>ZI:</font><br>　　不知火',
          3: '<font color= #EE9A00>thankyou</font><br>　　金乌',
          4: '<font color= #EE9A00>🐔你太霉</font><br>　　忘川巫女',
        },
        onclick(item) {
          game.saveConfig('extension_恒梦_hgmg_tzgc', '1');
          game.saveConfig('hgmg_tzgc', '1');
        },
      },
      hgmg_voisx: {
        name: "<font size='5' color='pink'>恒梦桌宠></font>",
        clear: true,
        nopointer: true,
      },
      hgmg_vois: {
        name: '桌宠开关',
        intro: '告诉我没语季节,为何不理世界',
        init: lib.config.hgmg_vois === undefined ? true : lib.config.hgmg_vois,
        onclick(item) {
          game.saveConfig('extension_恒梦_hgmg_vois', item);
          game.saveConfig('hgmg_vois', item);
        },
      },
      hgmg_voisgsng: {
        name: '桌宠功能',
        intro: '因为在没语季节,人会听不到哽咽',
        init: lib.config.extension_恒梦_hgmg_voisgsng === undefined ? '1' : lib.config.extension_恒梦_hgmg_voisgsng,
        item: { 0: '无', 1: '音乐' },
        onclick(item) {
          game.saveConfig('extension_恒梦_hgmg_voisgsng', item);
          game.saveConfig('hgmg_voisgsng', item);
        },
      },
      hgmg_bofhybyt: {
        name: "<font size='5' color='pink'>播放音乐></font>",
        clear: true,
        nopointer: true,
      },
      hgmg_ybyt: {
        name: '背景音乐',
        intro: '恒梦音乐',
        init: lib.config.extension_恒梦_hgmg_ybyt === undefined ? '1' : lib.config.extension_恒梦_hgmg_ybyt,
        item: { ...bwjkybytku },
        onclick(item) {
          game.playAudio('../extension/恒梦/audio/ui/bwjkybyt.mp3');
          game.saveConfig('extension_恒梦_hgmg_ybyt', item);
          game.saveConfig('hgmg_ybyt', item);
          game.bwjkybyt();
        },
      },
      hgmg_bofhmoui: {
        name: '播放模式',
        intro: '单曲循环/列表循环/随机播放',
        init: lib.config.extension_恒梦_hgmg_bofhmoui === undefined ? '2' : lib.config.extension_恒梦_hgmg_bofhmoui,
        item: {
          0: '单曲循环',
          1: '列表循环',
          2: '随机播放',
        },
        onclick(item) {
          game.saveConfig('extension_恒梦_hgmg_bofhmoui', item);
          game.saveConfig('hgmg_bofhmoui', item);
          ui.backgroundMusic.addEventListener('ended', game.bwjkybytx);
        },
      },
      hgmg_jtsefflw: {
        name: "<font size='5' color='pink'>角色分类></font>",
        clear: true,
        nopointer: true,
      },
      hgmg_fflw: {
        name: '分类方式',
        intro: '此选项可设置角色包的分类方式',
        init: lib.config.hgmg_fflw === undefined ? 'njdu' : lib.config.hgmg_fflw,
        item: {
          njdu: '难度',
          yyyk: '运营',
          cddc: '菜刀',
          bche: '保核',
        },
        onclick(item) {
          game.saveConfig('extension_恒梦_hgmg_fflw', item);
          game.saveConfig('hgmg_fflw', item);
        },
      },
    },
    package: {
      intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br><div style="color: #EE82EE"><li>上帝操纵棋手,棋手操纵棋子,上帝背后,又是哪位神祇设下的尘埃,时光,梦境和痛苦的羁绊.<li>特别感谢:岁儿、不羡仙的代码支持.<li>感谢:thankyou(银竹离火)对本扩展ai思路的帮助.<li>感谢:投稿者及其所设计武将(具体可在下面查看)</div><br><br>扩展群:996541366<br>投稿武将:武将称号专属id',
      author: '天溢',
      version: '1.0',
    },
  };
});
