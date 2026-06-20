import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
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
      if (obj.hasOwnProperty(key)) {
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
game.import('card', function (lib, game, ui, get, ai, _status) {
  const QQQ = {
    name: 'BLEACH',
    connect: true,
    card: {
      zanpakuto_tenken: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_tenken.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -2,
        },
        fullskin: true,
        skills: ['zanpakuto_tenken_skill'],
        ai: {
          basic: {
            equipValue: 6,
          },
        },
      },
      zanpakuto_zabimaru: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_zabimaru.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -3,
        },
        fullskin: true,
        skills: ['zanpakuto_zabimaru_skill'],
        ai: {
          basic: {
            equipValue: 4,
          },
        },
      },
      zanpakuto_wabisuke: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_wabisuke.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        fullskin: true,
        skills: ['zanpakuto_wabisuke_skill'],
        ai: {
          equipValue(card, player) {
            if (player.hasSkill('bleach_chazhu')) return 6;
            return 2;
          },
          basic: {
            equipValue: 2,
          },
        },
      },
      zanpakuto_tobiume: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_tobiume.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        fullskin: true,
        ai: {
          equipValue(card, player) {
            if (player.hasSkill('bleach_feimei')) return 6;
            return 2;
          },
          basic: {
            equipValue: 2,
          },
        },
      },
      zanpakuto_hozukimaru: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_hozukimaru.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -3,
        },
        fullskin: true,
        skills: ['zanpakuto_hozukimaru_skill'],
        ai: {
          basic: {
            equipValue: 4,
          },
        },
      },
      zanpakuto_senbonzakura: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_senbonzakura.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -2,
        },
        fullskin: true,
        global: 'zanpakuto_senbonzakura_skill',
        ai: {
          equipValue(card, player) {
            if (player.hasSkill('bleach_yingren')) return 5;
            return 2;
          },
          basic: {
            equipValue: 2,
          },
        },
      },
      zanpakuto_shinso: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_shinso.png',
        type: 'equip',
        subtype: 'equip1',
        onEquip() {
          if (!card.storage.zanpakuto_shinso_skill) card.storage.zanpakuto_shinso_skill = 1;
          player.storage.zanpakuto_shinso_skill = card.storage.zanpakuto_shinso_skill;
          player.markSkill('zanpakuto_shinso_skill');
        },
        onLose() {
          player.unmarkSkill('zanpakuto_shinso_skill');
        },
        fullskin: true,
        skills: ['zanpakuto_shinso_skill', 'zanpakuto_shinso_skill_effect'],
        ai: {
          basic: {
            equipValue: 3,
          },
        },
      },
      zanpakuto_ashisogijizo: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_ashisogijizo.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        skills: ['zanpakuto_ashisogijizo_skill'],
        fullskin: true,
        ai: {
          basic: {
            equipValue: 4,
          },
        },
      },
      zanpakuto_benihime: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_benihime.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        skills: ['zanpakuto_benihime_skill'],
        fullskin: true,
        ai: {
          basic: {
            equipValue: 3,
          },
        },
      },
      zanpakuto_haineko: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_haineko.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        loseDelay: false,
        onLose() {
          player.addTempSkill('zanpakuto_haineko_skill');
        },
        fullskin: true,
        ai: {
          equipValue(card, player) {
            if (player.hasSkill('bleach_huimao')) return 6;
            return 2;
          },
          basic: {
            equipValue: 2,
          },
        },
      },
      zanpakuto_kyokasuigetsu: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_kyokasuigetsu.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        fullskin: true,
        skills: ['zanpakuto_kyokasuigetsu_skill'],
        ai: {
          basic: {
            equipValue: 7.5,
          },
        },
      },
      zanpakuto_suzumebachi: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_suzumebachi.png',
        type: 'equip',
        subtype: 'equip1',
        fullskin: true,
        skills: ['zanpakuto_suzumebachi_skill'],
        ai: {
          equipValue(card, player) {
            if (player.hasSkill('bleach_fengwen')) return 6;
            return 2;
          },
          basic: {
            equipValue: 2,
          },
        },
      },
      zanpakuto_sogyonokotowari: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_sogyonokotowari.png',
        type: 'equip',
        subtype: 'equip1',
        fullskin: true,
        skills: ['zanpakuto_sogyonokotowari_skill'],
        distance: {
          attackFrom: -2,
        },
        ai: {
          equipValue(card, player) {
            if (player.hasSkill('bleach_shuangli')) return 6;
            return 2;
          },
          basic: {
            equipValue: 2,
          },
        },
      },
      zanpakuto_gegetsuburi: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_gegetsuburi.png',
        type: 'equip',
        subtype: 'equip1',
        fullskin: true,
        distance: {
          attackFrom: -1,
        },
        skills: ['zanpakuto_gegetsuburi_skill'],
        ai: {
          basic: {
            equipValue: 4,
          },
        },
      },
      zanpakuto_katenkyokotsu: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_katenkyokotsu.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -2,
        },
        fullskin: true,
        ai: {
          equipValue(card, player) {
            if (player.hasSkill('bleach_tongxi')) return 6;
            return 2;
          },
          basic: {
            equipValue: 2,
          },
        },
      },
      zanpakuto_kazeshini: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_kazeshini.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -4,
        },
        fullskin: true,
        skills: ['zanpakuto_kazeshini_skill'],
        ai: {
          equipValue(card, player) {
            if (player.hasSkill('bleach_fengsi')) return 6;
            return 2;
          },
          basic: {
            equipValue: 2,
          },
        },
      },
      zanpakuto_ryujinjakka: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_ryujinjakka.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -2,
        },
        fullskin: true,
        skills: ['zanpakuto_ryujinjakka_skill'],
        ai: {
          basic: {
            equipValue: 6,
          },
        },
      },
      zanpakuto_suzumushi: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_suzumushi.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        fullskin: true,
        skills: ['zanpakuto_suzumushi_skill'],
        ai: {
          basic: {
            equipValue: 5.5,
          },
        },
      },
      zanpakuto_nijibana: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_nijibana.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -3,
        },
        fullskin: true,
        skills: ['zanpakuto_nijibana_skill'],
        ai: {
          basic: {
            equipValue: 3,
          },
        },
      },
      zanpakuto_hyorinmaru: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_hyorinmaru.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -2,
        },
        fullskin: true,
        skills: ['zanpakuto_hyorinmaru_skill'],
        ai: {
          basic: {
            equipValue: 6,
          },
        },
      },
      zanpakuto_minazuki: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_minazuki.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        fullskin: true,
        skills: ['zanpakuto_minazuki_skill'],
        ai: {
          basic: {
            equipValue: 3.5,
          },
        },
      },
      zanpakuto_sakanade: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_sakanade.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        fullskin: true,
        skills: ['zanpakuto_sakanade_skill'],
        ai: {
          basic: {
            equipValue: 5,
          },
        },
      },
      zanpakuto_engetsu: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_engetsu.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -2,
        },
        fullskin: true,
        skills: ['zanpakuto_engetsu_skill'],
        ai: {
          basic: {
            equipValue: 6,
          },
        },
      },
      zanpakuto_sodenoshirayuki: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_sodenoshirayuki.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -2,
        },
        fullskin: true,
        skills: ['zanpakuto_sodenoshirayuki_skill'],
        ai: {
          basic: {
            equipValue: 6,
          },
        },
      },
      zanpakuto_nozarasizero: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_nozarasizero.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -2,
        },
        fullskin: true,
        skills: ['zanpakuto_nozarasizero_skill'],
        ai: {
          basic: {
            equipValue: 5,
          },
        },
      },
      zanpakuto_tengumaru: {
        image: 'ext:BLEACH/files/zanpakuto/temporary.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -2,
        },
        fullskin: true,
        skills: ['zanpakuto_tengumaru_skill'],
        ai: {
          basic: {
            equipValue: 6,
          },
        },
      },
      zanpakuto_kinshara: {
        image: 'ext:BLEACH/files/zanpakuto/temporary.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -4,
        },
        fullskin: true,
        skills: ['zanpakuto_kinshara_skill'],
        ai: {
          basic: {
            equipValue: 6,
          },
        },
      },
      zanpakuto_mirokumaru: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_mirokumaru.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -2,
        },
        fullskin: true,
        skills: ['zanpakuto_mirokumaru_skill'],
        ai: {
          basic: {
            equipValue: 6,
          },
        },
      },
      zanpakuto_gonryomaru: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_gonryomaru.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        fullskin: true,
        skills: ['zanpakuto_gonryomaru_skill', 'zanpakuto_gonryomaru_effect'],
        ai: {
          basic: {
            equipValue: 6,
          },
        },
      },
      zanpakuto_tachikaze: {
        image: 'ext:BLEACH/files/zanpakuto/zanpakuto_tachikaze.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        fullskin: true,
        skills: ['zanpakuto_tachikaze_skill'],
        ai: {
          basic: {
            equipValue: 6,
          },
        },
      },
      zanpakuto_sanpokenju: {
        image: 'ext:BLEACH/files/zanpakuto/temporary.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -3,
        },
        fullskin: true,
        skills: ['zanpakuto_sanpokenju_skill'],
        ai: {
          basic: {
            equipValue: 6,
          },
        },
      },
      zanpakuto_nozarashi: {
        image: 'ext:BLEACH/files/zanpakuto/temporary.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -3,
        },
        fullskin: true,
        skills: ['zanpakuto_nozarashi_skill'],
        ai: {
          basic: {
            equipValue: 6,
          },
        },
      },
      Stamina: {
        image: 'ext:BLEACH/files/soultree/Stamina.png',
        fullskin: true,
      },
      Attack: {
        image: 'ext:BLEACH/files/soultree/Attack.png',
        fullskin: true,
      },
      Defense: {
        image: 'ext:BLEACH/files/soultree/Defense.png',
        fullskin: true,
      },
      Focus: {
        image: 'ext:BLEACH/files/soultree/Focus.png',
        fullskin: true,
      },
      SpiriualPressure: {
        image: 'ext:BLEACH/files/soultree/SpiriualPressure.png',
        fullskin: true,
      },
      bleach_zhangui: {
        image: 'ext:BLEACH/card/bleach_skill_zhangui.png',
        fullskin: true,
      },
      bleach_yinggui: {
        image: 'ext:BLEACH/card/bleach_skill_yinggui.png',
        fullskin: true,
      },
      bleach_yangui: {
        image: 'ext:BLEACH/card/bleach_skill_yangui.png',
        fullskin: true,
      },
      bleach_card_cero: {
        image: 'ext:BLEACH/card/bleach_card_cero.png',
        audio: 'ext:BLEACH/card/',
        type: 'basic',
        fullskin: true,
        enable(event, player) {
          return player.isArrancar() || player.isKamen() || player.hasSkillTag('canUseCero');
        },
        usable: 1,
        updateUsable: 'phaseUse',
        global: 'g_bleach_cero',
        cardcolor: 'red',
        filterTarget: lib.filter.notMe,
        content() {
          'step 0';
          if (typeof event.baseDamage != 'number') event.baseDamage = 1;
          if (event.directHit) {
            event._result = { bool: false };
            event.goto(2);
          } else {
            player
              .chooseControl('杀', '闪', () => {
                return get.event('goon');
              })
              .set('goon', ['杀', '闪'].randomGet());
          }
          ('step 1');
          if (result.control == '杀') {
            var next = target.chooseToRespond('打出一张杀响应虚闪', { name: 'sha' });
            next.set('ai', (card) => {
              var evt = _status.event.parent;
              if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
              return get.order(card);
            });
            next.autochoose = lib.filter.autoRespondSha;
          } else {
            var next = target.chooseToRespond('打出一张闪响应虚闪', { name: 'shan' });
            next.set('ai', (card) => {
              var evt = _status.event.parent;
              if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
              if (evt.target.hasSkillTag('noShan')) {
                return -1;
              }
              return get.order(card);
            });
            next.autochoose = lib.filter.autoRespondShan;
          }
          ('step 2');
          if (result.bool == false) target.damage(event.baseDamage);
        },
        ai: {
          order: 5.2,
          basic: {
            useful: [5, 3, 1],
            value: [5, 3, 1],
          },
          result: {
            target: -1.5,
          },
          tag: {
            damage: 1,
            respondShan: 1,
            respondSha: 1,
          },
        },
        selectTarget: 1,
      },
      bleach_card_ramen: {
        image: 'ext:BLEACH/card/bleach_card_ramen.png',
        audio: 'ext:BLEACH/card',
        type: 'basic',
        fullskin: true,
        enable(card, player) {
          return game.hasPlayer((current) => current.isDamaged());
        },
        selectTarget: 1,
        filterTarget(card, player, target) {
          return target.isDamaged();
        },
        modTarget(card, player, target) {
          return target.hp < target.maxHp;
        },
        content() {
          'step 0';
          target.recover(event.baseDamage || 1);
          ('step 1');
          const list = ['bleachMark_leizhe', 'bleachMark_huofen', 'bleachMark_ice', 'bleachMark_weak'].filter((i) => target.hasMark(i));
          if (list.length > 1) {
            player
              .chooseControl(list)
              .set('prompt', '请选择你要移除的异常')
              .set('ai', () => list.randomGet());
          } else if (list.length == 1) event._result = { bool: true, control: list.shift() };
          ('step 2');
          if (result && result.control) {
            target.removeBleachBuff(result.control, 1);
          }
        },
        ai: {
          basic: {
            order: 4,
            useful(card, i) {
              let player = get.player();
              if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return 2 / (1 + i);
              let fs = game.filterPlayer((current) => {
                return get.attitude(player, current) > 0 && current.isDamaged();
              }),
                damaged = 0,
                needs = 0;
              fs.forEach((f) => {
                if (f.hp > 2) damaged++;
                else needs++;
              });
              if (needs && damaged) return 4 * needs + 2 * damaged;
              if (needs + damaged > 1 || player.hasSkillTag('maixie')) return 6;
              if (player.hp / player.maxHp < 0.7) return 5 + Math.abs(player.hp / player.maxHp - 0.5);
              if (needs) return 5;
              if (damaged) return Math.max(3, 5.8 - i);
              return Math.max(1, 5.2 - i);
            },
            value(card, player) {
              let fs = game.filterPlayer((current) => {
                return get.attitude(get.player(), current) > 0;
              }),
                damaged = 0,
                needs = 0;
              fs.forEach((f) => {
                if (!player.canUse('bleach_card_ramen', f)) return;
                if (f.hp == 1 || f.hasMark('bleachMark_fire')) needs++;
                else if (f.hp == 2) damaged++;
              });
              if ((needs && damaged) || player.hasSkillTag('maixie')) return Math.max(7, 3.5 * needs + 1.5 * damaged);
              if (needs || damaged > 1) return 6;
              if (damaged) return 5.5;
              return Math.max(3.5, 7.2 - player.getDamagedHp());
            },
          },
          result: {
            target(player, target) {
              if (target.countMark('bleachMark_fire') > 0 || target.hasSkillTag('maixie')) return 3;
              return 2;
            },
          },
          tag: {
            recover: 1,
          },
        },
      },
      bleach_card_zhengyizhaozhuang: {
        image: 'ext:BLEACH/card/bleach_card_zhengyizhaozhuang.png',
        type: 'trick',
        enable: true,
        selectTarget: 1,
        cardcolor: 'red',
        toself: true,
        filterTarget(card, player, target) {
          return !target.hasMark('bleachMark_shield');
        },
        enable(event, player) {
          return game.hasPlayer((current) => current.hasMark('bleachMark_shield'));
        },
        modTarget: true,
        fullskin: true,
        content() {
          target.addBleachBuff('bleachMark_shield', 1, player);
          if (target.getHp() <= 2) target.chat('看我的正义力量吧 正义装甲justice头巾 着装!');
        },
        ai: {
          basic: {
            order: 7,
            useful: 4.5,
            value: 7.5,
          },
          result: {
            target: 2,
          },
        },
      },
      bleach_card_daorenrongyao: {
        image: 'ext:BLEACH/card/bleach_card_daorenrongyao.png',
        fullskin: true,
        type: 'trick',
        enable: true,
        selectTarget: -1,
        cardcolor: 'red',
        toself: true,
        global: 'g_bleach_daorenrongyao',
        filterTarget(card, player, target) {
          return target == player;
        },
        modTarget: true,
        content() {
          'step 0';
          var list = [];
          for (var i = 0; i < 4; i++) {
            var card = get.cardPile((card) => {
              return get.subtype(card) == 'equip1' && !list.includes(card);
            });
            if (card) {
              list.push(card);
            }
          }
          target.chooseButton(['请选择要获得的武器牌', list], true).set('ai', (button) => _status.event.player.getUseValue(button.link));
          ('step 1');
          if (result.bool) {
            target.gain(result.links, 'draw').gaintag = ['g_bleach_daorenrongyao'];
            var list = [];
            if (target.storage.bleach_daorenrongyao) list = target.storage.bleach_daorenrongyao;
            target.storage.bleach_daorenrongyao = list.concat(result.links.slice(0));
          }
        },
        ai: {
          wuxie(target, card, player, viewer) {
            if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
              return 0;
            }
          },
          basic: {
            order: 5.5,
            useful: 2.5,
            value: 6.5,
          },
          result: {
            target(player, target) {
              if (target.getEquips(1).length) return 0.5;
              return 1;
            },
          },
          tag: {
            draw: 1,
          },
        },
      },
      bleach_card_hougyoku: {
        image: 'ext:BLEACH/card/bleach_card_hougyoku.png',
        type: 'equip',
        subtype: 'equip5',
        fullskin: true,
        skills: ['bleach_card_hougyoku_skill'],
        ai: {
          basic: {
            equipValue: 7,
          },
        },
      },
      bleach_card_qianda: {
        image: 'ext:BLEACH/card/bleach_card_qianda.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        fullskin: true,
        global: ['bleach_card_zanpakutou_lose', 'bleach_card_zanpakutou_gain'],
        skills: ['bleach_card_qianda_skill'],
        ai: {
          equipValue(card, player) {
            if (player.canShiKai() && !player.isShiKai(player)) return 5;
            return 1.5;
          },
          basic: {
            equipValue: 1.5,
          },
        },
      },
      bleach_card_tiantaxuan: {
        image: 'ext:BLEACH/card/bleach_card_tiantaxuan.png',
        fullskin: true,
        type: 'equip',
        subtype: 'equip4',
        distance: {
          globalFrom: -1,
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
        skills: ['bleach_card_tiantaxuan_skill'],
        ai: {
          equipValue(card, player) {
            return 5.5;
          },
          basic: {
            equipValue: 5.5,
          },
        },
      },
      bleach_card_zhengyitoutao: {
        image: 'ext:BLEACH/card/bleach_card_zhengyitoutao.png',
        type: 'equip',
        subtype: 'equip2',
        skills: ['bleach_card_zhengyitoutao_skill'],
        toself: true,
        fullskin: true,
        ai: {
          basic: {
            equipValue: 5.5,
          },
          equipValue(card, player) {
            if (player.needsToDiscard()) return 6.5;
            return 4.5;
          },
        },
      },
      bleach_card_xuzhijiamian: {
        image: 'ext:BLEACH/card/bleach_card_xuzhijiamian.png',
        type: 'equip',
        subtype: 'equip2',
        skills: ['bleach_card_xuzhijiamian_skill'],
        toself: true,
        fullskin: true,
        ai: {
          basic: {
            equipValue: 5.5,
          },
          equipValue(card, player) {
            return Math.max(5, 7.2 - player.getDamagedHp());
          },
        },
      },
      bleach_card_wuweidoupeng: {
        image: 'ext:BLEACH/card/bleach_card_wuweidoupeng.png',
        type: 'equip',
        subtype: 'equip2',
        skills: ['bleach_card_wuweidoupeng_skill'],
        toself: true,
        fullskin: true,
        ai: {
          basic: {
            equipValue: 4.5,
            useful: 2,
          },
        },
      },
      bleach_card_hushenfu: {
        image: 'ext:BLEACH/card/bleach_card_hushenfu.png',
        type: 'equip',
        subtype: 'equip5',
        onLose() {
          player.addTempSkill('bleach_card_hushenfu_skill_lose');
        },
        skills: ['bleach_card_hushenfu_skill'],
        toself: true,
        fullskin: true,
        ai: {
          basic: {
            equipValue: 7.5,
            useful: 2,
            value(card, player, index, method) {
              if (player.isDisabled(5)) return 0.01;
              return Math.max(6.3 - player.hp, 1);
            },
          },
        },
      },
      bleach_sai: {
        image: 'ext:BLEACH/card/bleach_sai.png',
        type: 'bleach_kido',
        subtype: 'bleach_bakudo',
        fullskin: true,
        selectTarget: 1,
        enable: true,
        filterTarget(card, player, target) {
          return player != target && get.distance(player, target) <= 2;
        },
        content() {
          'step 0';
          var num = card.number;
          target
            .chooseToDiscard('请弃置一张点数不小于' + get.strNumber(num) + '的牌,否则不能使用或打出基本牌至你的回合开始.', 'he', (card) => {
              return card.number >= _status.event.num;
            })
            .set('ai', (card) => {
              return 8 - get.value(card);
            })
            .set('num', num);
          ('step 1');
          if (!result.bool) {
            target.addTempSkill('bleach_sai', { player: 'phaseBegin' });
          }
        },
        ai: {
          basic: {
            order: 11,
            useful: 2,
            value: 6,
          },
          result: {
            target(player, target, cardx) {
              return -1.4;
            },
          },
          tag: {
            loseCard: 1,
          },
        },
      },
      bleach_rikujokoro: {
        image: 'ext:BLEACH/card/bleach_rikujokoro.png',
        type: 'bleach_kido',
        subtype: 'bleach_bakudo',
        fullskin: true,
        selectTarget: 1,
        enable: true,
        filterTarget(card, player, target) {
          return player != target && target.countCards('h') < player.countCards('h') && !target.storage.bleach_rikijokoro;
        },
        content() {
          target.storage.bleach_rikujokoro = player;
          target.addTempSkill('bleach_rikujokoro', { player: 'dying' });
        },
        ai: {
          basic: {
            order: 11,
            useful: 2,
            value: 6,
          },
          result: {
            target(player, target, cardx) {
              return -(player.countCards('h') - target.countCards('h'));
            },
          },
        },
      },
      bleach_danku: {
        image: 'ext:BLEACH/card/bleach_danku.png',
        type: 'bleach_kido',
        subtype: 'bleach_bakudo',
        fullskin: true,
        notarget: true,
        finalDelay: false,
        content() {
          var trigger = event.getParent(2)._trigger;
          trigger.neutralize();
          if (player.isOnline()) {
            player.send(function (player) {
              if (ui.tempnowuxie && !player.hasDanku()) {
                ui.tempnowuxie.close();
                delete ui.tempnowuxie;
              }
            }, player);
          } else if (player == game.me) {
            if (ui.tempnowuxie && !player.hasDanku()) {
              ui.tempnowuxie.close();
              delete ui.tempnowuxie;
            }
          }
        },
        ai: {
          basic: {
            useful: [6, 4, 3],
            value: [6, 4, 3],
          },
          result: { player: 1 },
          expose: 0.2,
        },
      },
      bleach_fushibi: {
        image: 'ext:BLEACH/card/bleach_fushibi.png',
        type: 'bleach_kido',
        subtype: 'bleach_hado',
        fullskin: true,
        selectTarget: 1,
        enable: true,
        filterTarget(card, player, target) {
          return player != target && target.countCards('he') > 0;
        },
        content() {
          'step 0';
          target.link(true);
          ('step 1');
          target.chooseToDiscard('he', true);
        },
        ai: {
          basic: {
            order: 7,
            useful: 4,
            value: 4,
          },
          result: {
            target(player, target) {
              return -0.7;
            },
          },
          tag: {
            loseCard: 1,
            multitarget: 1,
            multineg: 1,
            norepeat: 1,
          },
        },
      },
      bleach_shakkaho: {
        image: 'ext:BLEACH/card/bleach_shakkaho.png',
        type: 'bleach_kido',
        subtype: 'bleach_hado',
        fullskin: true,
        selectTarget: 1,
        enable: true,
        filterTarget(card, player, target) {
          return player != target;
        },
        content() {
          'step 0';
          if (typeof event.baseDamage != 'number') event.baseDamage = 1;
          ('step 1');
          if (event.directHit || event.directHit2 || (!_status.connectMode && lib.config.skip_shan && !target.hasShan())) {
            event._result = { bool: false };
          } else if (event.skipShan) {
            event._result = { bool: true, result: 'shaned' };
          } else {
            var next = target.chooseToUse('请使用一张闪响应赤火炮');
            next.set('type', 'respondShan');
            next.set('filterCard', function (card, player) {
              if (card.name != 'shan') return false;
              return lib.filter.cardEnabled(card, player, 'forceEnable');
            });
            next.set('ai1', function (card) {
              var target = _status.event.player;
              var evt = _status.event.parent;
              var bool = true;
              if (_status.event.shanRequired > 1 && !get.is.object(card) && target.countCards('h', 'shan') < _status.event.shanRequired) {
                bool = false;
              } else if (target.hasSkillTag('useShan')) {
                bool = true;
              } else if (target.hasSkillTag('noShan')) {
                bool = false;
              } else if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) bool = false;
              if (bool) {
                return get.order(card);
              }
              return 0;
            });
            next.set('respondTo', [player, card]);
          }
          ('step 2');
          if (!result.bool) {
            target.damage('fire', event.baseDamage || 1);
          }
        },
        ai: {
          basic: {
            order: 5,
            useful: 2,
            value: 3,
          },
          result: {
            target(player, target) {
              return -1.5;
            },
          },
          tag: {
            damage: 1,
            fireDamage: 1,
            natureDamage: 1,
          },
        },
      },
      bleach_miewangzhifu: {
        image: 'ext:BLEACH/card/bleach_miewangzhifu.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        fullskin: true,
        skills: ['bleach_miewangzhifu_skill'],
        ai: {
          basic: {
            equipValue: 4.5,
          },
        },
      },
      soul_card_gangnier: {
        image: 'ext:BLEACH/card/soul_card_gangnier.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -2,
        },
        fullskin: true,
        skills: ['soul_card_gangnier_skill'],
        ai: {
          basic: {
            equipValue: 4,
          },
        },
      },
      soul_card_buertegen: {
        image: 'ext:BLEACH/card/soul_card_buertegen.png',
        type: 'equip',
        subtype: 'equip1',
        distance: {
          attackFrom: -1,
        },
        fullskin: true,
        skills: ['soul_card_buertegen_skill'],
        ai: {
          basic: {
            equipValue: 4,
          },
        },
      },
    },
    skill: {
      g_bleach_cero: {
        trigger: { player: 'discardAfter' },
        forced: true,
        filter(event, player) {
          if (Array.isArray(event.cards))
            for (var i of event.cards) {
              if (i.name == 'bleach_card_cero') return true;
            }
          return false;
        },
        content() {
          var num = 0;
          if (Array.isArray(trigger.cards))
            for (var i of trigger.cards) {
              if (i.name == 'bleach_card_cero') num++;
            }
          if (num > 0) {
            player.draw(num);
          }
        },
      },
      g_bleach_daorenrongyao: {
        trigger: {
          player: 'loseAfter',
          target: 'useCardToTargeted',
          global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
        },
        silent: true,
        filter(event, player, name) {
          if (!player.storage.bleach_daorenrongyao) return false;
          var hs = player.storage.bleach_daorenrongyao;
          if (name == 'useCardToTargeted' || ['useCard'].includes(event.parent.name)) {
            if ('equip' != get.type(event.card) || event.player != player) return false;
            var cards = event.cards;
            if (Array.isArray(cards))
              for (var i of cards) {
                if (hs.includes(i)) return true;
              }
            return false;
          }
          var cards = event.getl(player).cards2;
          if (Array.isArray(cards))
            for (var i of cards) {
              if (hs.includes(i)) return true;
            }
          return false;
        },
        content() {
          if (event.triggername == 'useCardToTargeted') {
            player.markSkill('g_bleach_daorenrongyao');
            game.log(player, '因', '#y【刀刃荣耀】', '使武器栏受到保护');
          } else {
            var cards = trigger.getl(player).cards2;
            var hs = player.storage.bleach_daorenrongyao;
            if (Array.isArray(cards))
              for (var i of cards) {
                if (hs.includes(i)) {
                  if (i.original == 'e' && !player.storage.bleach_daorenrongyao.includes(player.getEquips(1).length)) player.unmarkSkill('g_bleach_daorenrongyao');
                  player.storage.bleach_daorenrongyao.remove(i);
                  game.log('#y【刀刃荣耀】', '将不在为', i, '提供保护');
                }
              }
            if (hs.length == 0) {
              delete player.storage.bleach_daorenrongyao;
            }
          }
        },
        marktext: '荣',
        intro: {
          content: '武器栏内的牌不能被弃置',
        },
        mod: {
          canBeDiscarded(card, player, target) {
            if (get.position(card) == 'e' && target.storage.bleach_daorenrongyao && target.storage.bleach_daorenrongyao.includes(card)) {
              return false;
            }
          },
        },
      },
      bleach_card_hougyoku_skill: {
        equipSkill: true,
        enable: 'phaseUse',
        usable: 1,
        content() {
          'step 0';
          event.list = ['basic', 'trick', 'equip'];
          ('step 1');
          player.chooseControl(event.list).set('prompt', '崩玉:请选择你即将获得的一种类型的牌').ai = () => {
            if (player.hasSkill('bleach_fupo')) return 'equip';
            if (player.countCards('he', { type: 'equip' }) < 2) {
              return 'equip';
            }
            return 'trick';
          };
          ('step 2');
          var card = get.cardPile((card) => get.type(card, 'trick') == result.control);
          if (card) player.gain(card, 'draw');
        },
        group: ['bleach_card_hougyoku_skill_give'],
        ai: {
          order: 13,
          result: {
            player: 1,
          },
        },
        mod: {
          canBeDiscarded(card) {
            if (get.position(card) == 'e' && ['equip5'].includes(get.subtype(card)) && card.name == 'bleach_card_hougyoku') return false;
          },
        },
        subSkill: {
          give: {
            trigger: {
              player: ['dyingBegin'],
            },
            forced: true,
            filter(event, player) {
              return event.source && event.source != player && player.getEquips('bleach_card_hougyoku').length;
            },
            content() {
              trigger.source.gain(player.getEquips('bleach_card_hougyoku'), player, 'give', 'bySelf');
            },
          },
        },
      },
      bleach_card_qianda_skill: {
        equipSkill: true,
        enable: 'phaseUse',
        filter(event, player) {
          return player.canShiKai() && !player.isShiKai();
        },
        content() {
          player.shikai(player.getEquips('bleach_card_qianda'));
        },
        ai: {
          order: 10.5,
          result: {
            player: 1,
          },
        },
      },
      bleach_card_zanpakutou_lose: {
        trigger: {
          player: 'loseAfter',
          global: 'loseAsyncAfter',
        },
        forced: true,
        _priority: Infinity,
        popup: false,
        filter(event, player) {
          const evt = event.getl(player);
          if (!evt || !evt.cards2 || !evt.cards2.length) return false;
          return event.type == 'discard' && evt.cards2.some((i) => i.name.indexOf('zanpakuto_') == 0);
        },
        forceDie: true,
        content() {
          const cards = trigger.getl(player).cards2.filter((i) => i.name.indexOf('zanpakuto_') == 0);
          game.log(cards, '已碎裂');
          for (let card of cards) {
            game.broadcastAll((card) => {
              card.init([card.suit, 1, 'bleach_card_qianda']);
            }, card);
          }
        },
      },
      //出牌阶段,若你有武将可以*始解*,你可以解放斩魄刀.<font color=gray size=2><br><无名的斩魄刀,即斩魄刀未始解时的名称
      bleach_card_zanpakutou_gain: {
        trigger: {
          player: ['gainAfter', 'equipAfter'],
          global: 'loseAsyncAfter',
        },
        forced: true,
        _priority: Infinity,
        filter(event, player) {
          if (event.name == 'equip') {
            return event.card && event.cards?.length && event.card.name.indexOf('zanpakuto_') == 0 && !get.bleachIs.zanpakuto(player, event.card);
          }
          const evt = event.getg(player);
          return evt && evt.length && evt.some((i) => i.name.indexOf('zanpakuto_') == 0 && !get.bleachIs.zanpakuto(player, i));
        },
        forceDie: true,
        content() {
          if (trigger.name == 'equip') {
            //QQQ
            const card = trigger.cards[0];
            game.log(card, '回复为', '#y【浅打】');
            player.removeEquipTrigger(card);
            card.init([card.suit, 1, 'bleach_card_qianda']);
            let info = get.info(card);
            if (info.skills) {
              for (var i = 0; i < info.skills.length; i++) {
                player.addSkillTrigger(info.skills[i]);
              }
            }
          } else {
            const cards = trigger.getg(player).filter((i) => i.name.indexOf('zanpakuto_') == 0 && !get.bleachIs.zanpakuto(player, i));
            game.log(cards, '已复原');
            for (let card of cards) {
              game.broadcastAll((card) => {
                card.init([card.suit, 1, 'bleach_card_qianda']);
              }, card);
            }
          }
        },
      },
      bleach_card_tiantaxuan_skill: {
        equipSkill: true,
        trigger: {
          player: 'phaseZhunbeiBegin',
        },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseTarget(get.prompt('bleach_card_tiantaxuan_skill'), '弃置一名角色区域内一张牌', (card, player, target) => {
              return target.countDiscardableCards(player, 'hej') > 0;
            })
            .set('ai', (target) => {
              const player = get.player();
              let att = get.attitude(player, target);
              if (att > 0 && (target.hasJudge('lebu') || target.hasJudge('bingliang'))) att = Math.sqrt(att);
              else {
                att = 0;
              }
              return att * lib.card.guohe.ai.result.target(player, target);
            })
            .forResult();
        },
        async content(event, trigger, player) {
          await player.loseToDiscardpile(player.getEquip(4));
          player.discardPlayerCard(event.targets[0], 'hej', true);
        },
      },
      bleach_card_zhengyitoutao_skill: {
        equipSkill: true,
        mod: {
          maxHandcard(player, num) {
            return num + 2;
          },
        },
      },
      bleach_card_xuzhijiamian_skill: {
        equipSkill: true,
        trigger: {
          player: 'damageEnd',
        },
        check(event, player) {
          return get.attitude(player, event.source) <= 0;
        },
        filter(event, player) {
          if (player.hasSkillTag('unequip2')) return false;
          if (
            event.source &&
            event.source.hasSkillTag('unequip', false, {
              name: event.card ? event.card.name : null,
              target: player,
              card: event.card,
            })
          )
            return false;
          return event.source && event.source.isIn() && !player.hasSkill('bleach_card_xuzhijiamian_skill_round');
        },
        logTarget: 'source',
        content() {
          trigger.source.damage('nocard');
          player.addTempSkill('bleach_card_xuzhijiamian_skill_round', 'roundStart');
        },
        subSkill: {
          round: {
            charlotte: true,
          },
        },
      },
      bleach_card_wuweidoupeng_skill: {
        equipSkill: true,
        trigger: {
          player: 'addBleachBuffBegin2',
        },
        forced: true,
        filter(event, player) {
          if (player.hasSkillTag('unequip2')) return false;
          if (
            event.player.hasSkillTag('unequip', false, {
              name: event.card ? event.card.name : null,
              target: player,
              card: event.card,
            })
          )
            return false;
          for (var i in event.buff) {
            if (!get.bleachBuffCanAdd(i) && get.bleachBuffIsNegetive(i)) {
              return true;
            }
          }
          return false;
        },
        content() {
          trigger.cancel();
        },
        mod: {
          bleachModBuffEffect(player, buff, num, ret, setToZero) {
            if (!get.bleachBuffCanAdd(buff) && get.bleachBuffIsNegetive(buff)) {
              setToZero.zeroplayer = true;
            }
          },
        },
      },
      bleach_card_hushenfu_skill: {
        equipSkill: true,
        trigger: {
          player: 'damageBegin4',
        },
        forced: true,
        filter(event, player) {
          if (event.num < player.getHp()) return false;
          return true;
        },
        content() {
          trigger.cancel();
          if (player.getEquips('bleach_card_hushenfu').length) {
            const cards = player.getEquips('bleach_card_hushenfu');
            if (cards.length) player.discard(cards);
          }
        },
        subSkill: {
          lose: {
            forced: true,
            charlotte: true,
            equipSkill: true,
            trigger: {
              player: 'loseAfter',
              global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
            },
            filter(event, player) {
              if (player.getHp() > 1) return false;
              var evt = event.getl(player);
              return evt && evt.es.some((card) => card.name == 'bleach_card_hushenfu');
            },
            content() {
              var evt = trigger.getl(player);
              evt.es.forEach((card) => {
                if (card.name == 'bleach_card_hushenfu') {
                  player.draw(2);
                }
              });
            },
            sourceSkill: 'bleach_card_hushenfu_skill',
            _priority: -25,
          },
        },
      },
      bleach_sai: {
        trigger: {
          global: 'dying',
        },
        forced: true,
        popup: false,
        content() {
          player.removeSkill('bleach_sai');
        },
        mark: true,
        marktext: '塞',
        intro: {
          content: '不能使用或打出基本牌',
        },
        charlotte: true,
        mod: {
          cardEnabled2(card) {
            if (get.type(card) == 'basic') return false;
          },
        },
      },
      bleach_rikujokoro: {
        charlotte: true,
        forced: true,
        popup: false,
        trigger: {
          global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'loseAfter', 'gainAfter', 'addToExpansionAfter'],
        },
        filter(event, player) {
          var target = player.storage.bleach_rikujokoro;
          if (!target || !target.isIn()) return false;
          if (player.countCards('h') <= target.countCards('h')) return false;
          var hasChange = function (event, player) {
            var gain = 0,
              lose = 0;
            if (event.getg) gain = event.getg(player).length;
            if (event.getl) lose = event.getl(player).hs.length;
            return gain != lose;
          };
          return hasChange(event, target) || hasChange(event, player);
        },
        content() {
          player.removeSkill('bleach_rikujokoro');
        },
        ai: {
          effect: {
            target(card, player, target) {
              if (get.tag(card, 'damage')) return [0, -999];
            },
          },
        },
        charlotte: true,
        mark: true,
        marktext: '牢',
        intro: {
          content: '不能使用或打出手牌',
        },
        mod: {
          cardEnabled2(card, player) {
            if (get.position(card) == 'h') return false;
          },
        },
      },
      bleach_miewangzhifu_skill: {
        equipSkill: true,
        forced: true,
        trigger: {
          source: 'damageSource',
        },
        filter(event, player) {
          return event.card && event.card.name == 'sha' && event.player.isIn();
        },
        content() {
          trigger.player.addBleachBuff('bleachMark_lieshang', 1, player);
        },
      },
      soul_card_gangnier_skill: {
        equipSkill: true,
        check(event, player) {
          return get.attitude(player, event.player) < 0;
        },
        trigger: {
          player: 'useCardToPlayered',
        },
        logTarget: 'player',
        filter(event, player) {
          const distance = get.distance(player, event.target);
          return (
            event.card &&
            event.card.name == 'sha' &&
            !game.hasPlayer((current) => {
              return current != event.target && player.inRange(current) && get.distance(player, current) > distance;
            })
          );
        },
        content() {
          trigger.target.damage('nocard');
        },
      },
      soul_card_buertegen_skill: {
        equipSkill: true,
        audio: true,
        trigger: {
          player: 'useCardToPlayered',
          source: 'damageEnd',
        },
        filter(event) {
          return event.card && event.card.name == 'sha';
        },
        forced: true,
        logTarget: 'target',
        content() {
          if (trigger.name == 'damage') {
            trigger.player.chooseToDiscard('he', true);
          } else {
            trigger.target.addTempSkill('qinggang2');
            trigger.target.storage.qinggang2.add(trigger.card);
            trigger.target.markSkill('qinggang2');
          }
        },
        ai: {
          unequip: true,
          skillTagFilter(player, tag, arg) {
            if (!arg || arg.name != 'sha') return false;
          },
        },
      },
      zanpakuto_tenken_skill: {
        audio: true,
        equipSkill: true,
        filter(event, player, range) {
          return player.canUse('sha', event.target, false) && event.target.isIn() && event.getParent(2).name != 'zanpakuto_tenken_skill';
        },
        trigger: {
          player: 'shaAfter',
        },
        forced: true,
        content() {
          'step 0';
          var goon = get.attitude(player, trigger.target) < 0;
          var next = player.chooseToDiscard(get.prompt('zanpakuto_tenken', trigger.target), 'he', (card, player) => {
            var cards = player.getEquips('zanpakuto_tenken');
            if (!cards.some((card2) => card2 != card && !ui.selected.cards.includes(card2))) return false;
            return true;
          });
          next.set('prompt2', '弃置一张牌额外结算一次' + get.translation(trigger.card) + '.');
          next.set('ai', (card) => {
            if (_status.event.goon) return 8 - get.value(card);
            return 0;
          });
          next.set('goon', goon);
          ('step 1');
          if (result.bool) {
            game.playShiKai(player.name);
            player.useCard(game.createCard({ name: 'sha', nature: trigger.card.nature, suit: trigger.card.suit, number: trigger.card.number }), trigger.targets, false).throw = false;
          }
        },
      },
      zanpakuto_zabimaru_skill: {
        equipSkill: true,
        forced: true,
        trigger: {
          player: 'shaMiss',
        },
        filter(event, player) {
          return player.countCards('he') > 0;
        },
        forced: true,
        content() {
          'step 0';
          player.chooseCard(get.prompt2('zanpakuto_zabimaru_skill'), 'he', (card, player) => {
            var cards = player.getEquips('zanpakuto_zabimaru');
            if (!cards.some((card2) => card2 != card && !ui.selected.cards.includes(card2))) return false;
            return true;
          }).ai = (card) => {
            if (get.attitude(_status.event.player, trigger.target) < 0) {
              return 1;
            }
            return 0;
          };
          ('step 1');
          if (result.bool) {
            player.useCard({ name: 'sha' }, result.cards, trigger.target, false, false);
          }
        },
      },
      zanpakuto_wabisuke_skill: {
        equipSkill: true,
        trigger: {
          global: 'damageBegin4',
        },
        forced: true,
        filter(event, player) {
          return event.source && event.source == player && event.num >= event.player.hp;
        },
        content() {
          player.chat(['可以的话 希望你不要原谅我', '故名为侘助'].randomGet());
          trigger.player.qdie(player);
          game.log(player, '发动了', '#g【处决】', '使', trigger.player, '死亡');
        },
      },
      zanpakuto_hozukimaru_skill: {
        equipSkill: true,
        trigger: {
          player: 'useCardToPlayered',
        },
        filter(event, player) {
          return event.card && event.card.name == 'sha';
        },
        forced: true,
        group: 'zanpakuto_hozukimaru_skill_recover',
        content() {
          'step 0';
          var next = player.chooseToDiscard(get.prompt2('zanpakuto_hozukimaru_skill'), 'he', (card) => {
            var cards = _status.event.player.getEquips('zanpakuto_hozukimaru');
            if (!cards.some((card2) => card2 != card && !ui.selected.cards.includes(card2))) return false;
            return true;
          });
          next.set('ai', (card) => {
            var evt = _status.event.getTrigger();
            if (get.attitude(evt.player, evt.target) < 0) {
              if (evt.baseDamage + evt.extraDamage >= Math.min(2, evt.target.hp)) {
                return 8 - get.value(card);
              }
              return 6 - get.value(card);
            }
            return -1;
          });
          ('step 1');
          if (result.bool) {
            var suit = result.cards[0].suit;
            var target = trigger.target;
            var num = target.countCards('h', 'shan');
            target
              .chooseToDiscard('请弃置一张' + get.translation(suit) + '牌,否则不能使用闪抵消此杀', 'he', (card) => {
                return card.suit == _status.event.suit;
              })
              .set('ai', (card) => {
                var num = _status.event.num;
                if (num == 0) return 0;
                if (card.name == 'shan') return num > 1 ? 2 : 0;
                return 8 - get.value(card);
              })
              .set('num', num)
              .set('suit', suit);
          } else event.finish();
          ('step 2');
          if (result.bool) {
            if (player.countCards('he')) event.goto(0);
          } else trigger.parent.directHit.add(trigger.target);
        },
        subSkill: {
          recover: {
            enable: 'chooseToUse',
            filter(event, player) {
              return player.getEquips('zanpakuto_hozukimaru').length;
            },
            filterCard(card, player) {
              return card.name == 'zanpakuto_hozukimaru';
            },
            position: 'hes',
            viewAs: {
              name: 'tao',
            },
            prompt: '将【鬼灯丸】当桃使用',
            check(card) {
              return 15 - get.value(card);
            },
          },
        },
      },
      zanpakuto_senbonzakura_skill: {
        trigger: {
          player: 'loseAfter',
          global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
        },
        filter(event, player) {
          var evt = event.getl(player);
          if (!evt || !evt.es || !evt.es.length) return false;
          for (var i of evt.es) {
            if (i.name == 'zanpakuto_senbonzakura') return true;
          }
          return false;
        },
        content() {
          'step 0';
          player.judge((card) => {
            if (get.color(card) == 'red') return 3;
            return 0;
          });
          ('step 1');
          if (result.bool) {
            var evt = trigger.getl(player);
            for (var i = 0; i < evt.es.length; i++) {
              if (evt.es[i].name == 'zanpakuto_senbonzakura') {
                player.equip(game.createCard('zanpakuto_senbonzakura', 'diamond', '6'));
                break;
              }
            }
          } else {
            event.trigger('senbonzakuraJudge');
          }
        },
      },
      zanpakuto_shinso_skill: {
        equipSkill: true,
        enable: 'phaseUse',
        usable: 1,
        chooseButton: {
          dialog() {
            var dialog = ui.create.dialog(
              '神枪:选择变化攻击范围',
              [
                [
                  [1, '　　　⒈【杀】无次数限制　　　'],
                  [2, '　　　⒉【杀】的伤害值+1　　　'],
                ],

                'tdnodes',
              ],

              [
                [
                  [3, '　　　⒊【杀】不可被响应　　　'],
                  [4, '　　　⒋【杀】无视防具牌　　　'],
                  [5, '　　　⒌【杀】可追加下家　　　'],
                ],

                'tdnodes',
              ]
            );
            return dialog;
          },
          filter(button, player) {
            return button.link != player.storage.zanpakuto_shinso_skill;
          },
          check(button) {
            if (button.link == 1 || button.link == 3) return 1;
            return 0;
          },
          backup(links, player) {
            return {
              num: links[0],
              popup: '神枪',
              content() {
                const num = lib.skill.zanpakuto_shinso_skill_backup.num;
                player.storage.zanpakuto_shinso_skill = num;
                let cards = player.getEquips(1);
                for (let card of cards) {
                  if (card && card.name == 'zanpakuto_shinso') {
                    card.storage.zanpakuto_shinso_skill = num;
                    game.log(player, '将', card, '的攻击范围改为' + num);
                  }
                }
                player.markSkill('zanpakuto_shinso_skill');
              },
            };
          },
        },
        mod: {
          attackRange(player, range) {
            if (player.storage.zanpakuto_shinso_skill) return range - 1 + player.storage.zanpakuto_shinso_skill;
          },
          cardUsable(card, player, num) {
            if (player.storage.zanpakuto_shinso_skill == 1 && card.name == 'sha') return Infinity;
          },
        },
        ai: {
          order: 1,
          directHit_ai: true,
          unequip: true,
          unequip: true,
          skillTagFilter(player, tag, arg) {
            if (tag == 'directHit_ai') {
              return player.storage.zanpakuto_shinso_skill == 3;
            } else {
              return player.storage.zanpakuto_shinso_skill == 4;
            }
          },
          result: {
            player(player) {
              if (player.storage.zanpakuto_shinso_skill == 1) {
                if (!player.hasSha()) return 1;
                return 0;
              } else {
                if (player.hasSha() && player.getCardUsable('sha') <= 0) return 1;
                return 0;
              }
            },
          },
        },
        intro: {
          name: '神枪',
          content(storage) {
            if (!storage) storage = 1;
            return '<li>攻击范围:' + storage + '<br><li>' + ['你使用【杀】无次数限制.', '你使用的【杀】伤害+1.', '你使用的【杀】不可被响应.', '你使用【杀】无视防具.', '当你使用的【杀】被抵消时,你可以对其下家使用一张【杀】'][storage - 1];
          },
        },
        subSkill: {
          backup: {},
          effect: {
            equipSkill: true,
            trigger: { player: ['useCard2', 'shaMiss'] },
            forced: true,
            filter(event, player) {
              if (event.card.name != 'sha') return false;
              const num = player.storage.zanpakuto_shinso_skill;
              if (!num || ![2, 3, 5].includes(num)) return false;
              if (event.name == 'useCard') {
                return num == 2 || num == 3;
              }
              if (player.canUse('sha', event.target.next, false) && (player.hasSha() || (_status.connectMode && player.countCards('hs')))) {
                return true;
              }
              return false;
            },
            async content(event, trigger, player) {
              const num = player.storage.zanpakuto_shinso_skill;
              if (num == 5) {
                const target = trigger.target.next;
                player.chooseToUse({
                  preTarget: target,
                  prompt: '是否发动【神枪】,对' + get.translation(target) + '使用一张【杀】？',
                  filterCard(card, player) {
                    return card.name == 'sha' && lib.filter.filterCard.apply(this, arguments);
                  },
                  filterTarget(card, player, target) {
                    return target == get.event('preTarget') && lib.filter.filterTarget.apply(this, arguments);
                  },
                  addCount: false,
                });
              } else {
                if (num == 2) {
                  trigger.baseDamage++;
                  game.log(trigger.card, '的伤害+1');
                } else if (num == 3) {
                  trigger.directHit.addArray(game.players);
                  game.log(trigger.card, '不可被响应');
                }
              }
              game.asyncDelayx();
            },
          },
        },
      },
      zanpakuto_ashisogijizo_skill: {
        equipSkill: true,
        check() {
          return true;
        },
        trigger: {
          source: 'damageSource',
        },
        filter(event, player) {
          return event.card && event.card.name == 'sha' && event.notLink() && event.player.countCards('he') > 0;
        },
        content() {
          'step 0';
          trigger.player.chooseCard('he', true, '选择一张牌交给' + get.translation(player)).set('ai', (card) => {
            return 6 - get.value(card);
          });
          ('step 1');
          if (result.bool) {
            player.gain(result.cards, trigger.player, 'giveAuto');
          }
          ('step 2');
          if (trigger.card.suit == 'spade' && trigger.card.number > 1 && trigger.card.number < 10) {
            player.chat('让被砍到的对象四肢无法动弹 这就是我[疋杀地藏]的能力');
            trigger.player.addBleachBuff('bleachEffect_mabi', 1, player);
          }
        },
      },
      zanpakuto_benihime_skill: {
        equipSkill: true,
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
          return target.countDiscardableCards(player, 'hej') > 0;
        },
        content() {
          player.discardPlayerCard(target, 'hej', true);
        },
        ai: {
          order: 13,
          result: {
            target(player, target) {
              return get.effect(target, { name: 'guohe_copy2' }, player, player);
            },
          }, //QQQ
        },
      },
      zanpakuto_haineko_skill: {
        forced: true,
        charlotte: true,
        equipSkill: true,
        trigger: {
          player: 'loseAfter',
          global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
        },
        filter(event, player) {
          const evt = event.getl(player);
          return evt && evt.es.some((card) => card.name == 'zanpakuto_haineko');
        },
        content() {
          const evt = trigger.getl(player);
          evt.es.forEach((card) => {
            if (card.name == 'zanpakuto_haineko') {
              player.draw(2);
            }
          });
        },
      },
      zanpakuto_kyokasuigetsu_skill: {
        equipSkill: true,
        trigger: {
          player: 'loseAfter',
        },
        forced: true,
        filter(event, player) {
          if (event.type != 'discard') return false;
          for (var i of event.cards2) {
            if (get.position(i, true) == 'd' && player.hasUseTarget(i)) return true;
          }
          return false;
        },
        usable: 1,
        content() {
          'step 0';
          player
            .chooseButton([
              '镜花水月:是否使用其中的一张牌？',
              trigger.cards2.filter((i) => {
                return get.position(i, true) == 'd' && player.hasUseTarget(i);
              }),
            ])
            .set('ai', (button) => {
              return _status.event.player.getUseValue(button.link);
            });
          ('step 1');
          if (result.bool) {
            player.$gain2(result.links[0], false);
            player.chooseUseTarget(true, result.links[0], false);
          } else player.getStat('triggerSkill').zanpakuto_kyokasuigetsu_skill--;
        },
      },
      zanpakuto_suzumebachi_skill: {
        equipSkill: true,
        mod: {
          cardUsableTarget(card, player, target) {
            for (var i of lib.suit) {
              if (target.hasMark('bleach_fengwen_' + i)) return true;
            }
          },
        },
      },
      zanpakuto_sogyonokotowari_skill: {
        equipSkill: true,
        trigger: {
          player: ['useSkillAfter', 'logSkill'],
        },
        forced: true,
        filter(event, player) {
          if (event.type != 'player') return false;
          var skill = event.sourceSkill || event.skill;
          return skill == 'bleach_shuangli' || skill == 'bleach_leiren';
        },
        content() {
          player.draw();
        },
      },
      zanpakuto_gegetsuburi_skill: {
        equipSkill: true,
        check() {
          return true;
        },
        trigger: {
          source: ['damageEnd'],
        },
        filter(event, player) {
          return event.card && event.card.name == 'sha' && event.player.countCards('he');
        },
        content() {
          trigger.player.discard(trigger.player.getCards('he').randomGet());
        },
      },
      zanpakuto_kazeshini_skill: {
        equipSkill: true,
        trigger: {
          player: 'useCardToPlayered',
        },
        filter(event, player) {
          return event.card && event.card.name == 'sha' && event.target.countDiscardableCards(player, 'e') > 0;
        },
        logTarget: 'target',
        check(event, player) {
          return -get.attitude(player, event.target);
        },
        async content(event, trigger, player) {
          player.discardPlayerCard(trigger.target, true, 'e').boolline = true;
        },
      },
      zanpakuto_ryujinjakka_skill: {
        equipSkill: true,
        trigger: {
          player: 'useCard1',
        },
        filter(event, player) {
          if (event.card.name == 'sha' && !game.hasNature(event.card)) return true;
          return false;
        },
        check(event, player) {
          var eff = 0;
          for (var i = 0; i < event.targets.length; i++) {
            var target = event.targets[i];
            var eff1 = get.damageEffect(target, player, player);
            var eff2 = get.damageEffect(target, player, player, 'fire');
            eff += eff2;
            eff -= eff1;
          }
          return eff >= 0;
        },
        group: ['zanpakuto_ryujinjakka_skill_fire'],
        content() {
          game.setNature(trigger.card, 'fire');
          if (get.itemtype(trigger.card) == 'card') {
            var next = game.createEvent('bleach_ryujinjakka_clear');
            next.card = trigger.card;
            event.next.remove(next);
            trigger.after.push(next);
            next.setContent(function () {
              game.setNature(card, []);
            });
          }
        },
        ai: {
          unequip: true,
          unequip: true,
          directHit_ai: true,
          bleachNoIceEffect: true,
          bleachGuardBreak: true,
          skillTagFilter(player, tag, arg) {
            if (tag == 'unequip' || tag == 'bleachGuardBreak' || tag == 'directHit_ai') {
              if (!arg || !arg.card || arg.card.name != 'sha') return false;
            } else if (tag == 'unequip') {
              if (arg && arg.card && arg.card.name == 'sha' && arg.target.getEquip(2)) return true;
              return false;
            }
          },
        },
        mod: {
          canBeDiscarded(card) {
            if (get.position(card) == 'e' && ['equip1'].includes(get.subtype(card))) return false;
          },
        },
        subSkill: {
          fire: {
            trigger: {
              player: 'useCard2',
              source: 'damageSource',
            },
            forced: true,
            filter(event, player) {
              return event.card && event.card.name == 'sha' && game.hasNature(event.card, 'fire');
            },
            content() {
              if (trigger.name == 'useCard') {
                trigger.directHit.addArray(game.players);
              } else {
                trigger.player.addBleachBuff('bleachMark_fire', 2, player);
              }
            },
          },
        },
      },
      zanpakuto_suzumushi_skill: {
        equipSkill: true,
        check(event, player) {
          return get.attitude(player, event.player) <= 0;
        },
        trigger: {
          source: 'damageSource',
        },
        filter(event, player) {
          return event.player.getHistory('damage').indexOf(event) == 1 && !event.player.hasBleachBuff('bleachEffect_hunluan');
        },
        content() {
          trigger.player.addBleachBuff('bleachEffect_hunluan', 1, player);
        },
      },
      zanpakuto_nijibana_skill: {
        equipSkill: true,
        enable: ['chooseToUse', 'chooseToRespond'],
        filterCard: true,
        selectCard: [2, Infinity],
        position: 'hes',
        viewAs: {
          name: 'sha',
        },
        complexCard: true,
        filter(event, player) {
          return player.hasCard((card) => player.hasCard((cardx) => get.type2(cardx) == get.type2(card), 'hes'), 'hes');
        },
        prompt: '将至少两张相同类型的牌当杀使用或打出',
        check(card) {
          let player = get.player();
          if (player.hasCard((card) => card.name == 'sha') && !player.hasSkill('bleach_nijuan')) return 0;
          if (ui.selected.cards.length == 2) return 0;
          if (
            _status.event &&
            _status.event.name == 'chooseToRespond' &&
            player.hp < 3 &&
            !player.countCards('hs', (card) => {
              return card.name != 'tao' && card.name != 'jiu';
            })
          )
            return (player.hp > 1 ? 10 : 8) - get.value(card);
          return Math.max(5, 8 - 0.7 * player.hp) - get.value(card);
        },
        ai: {
          respondSha: true,
          skillTagFilter(player) {
            return player.hasCard((card) => player.hasCard((cardx) => get.type2(cardx) == get.type2(card), 'hes'), 'hes');
          }, //QQQ
          order: 3.2,
        },
      },
      zanpakuto_hyorinmaru_skill: {
        equipSkill: true,
        trigger: {
          player: 'useCard1',
        },
        filter(event, player) {
          return event.card && event.card.name == 'sha' && !game.hasNature(event.card);
        },
        async cost(event, trigger, player) {
          const control = await player
            .chooseControl('cancel2')
            .set('prompt', '是否发动【冰轮丸】？')
            .set('choiceList', ['将' + get.translation(trigger.card) + '改为冰冻属性', '将' + get.translation(trigger.card) + '改为冰属性'])
            .set('ai', () => {
              const player = get.player();
              let eff = 0;
              for (var i = 0; i < event.targets.length; i++) {
                const target = event.targets[i],
                  eff1 = get.damageEffect(target, player, player),
                  eff2 = get.damageEffect(target, player, player, 'bleach_ice');
                eff += eff2;
                eff -= eff1;
              }
              return eff >= 0 ? ['选择一', '选项二'].randomGet() : 'cancel2';
            })
            .forResultControl();
          if (control != 'cancel2')
            event.result = {
              bool: true,
              cost_data: ['选项一', '选项二'].indexOf(control),
            };
        },
        async content(event, trigger, player) {
          game.setNature(trigger.card, `${event.cost_data == 0 ? 'bleach_' : ''}ice`);
          if (get.itemtype(trigger.card) == 'card') {
            let next = game.createEvent('hyorinmaru_clear');
            next.card = trigger.card;
            event.next.remove(next);
            trigger.after.push(next);
            next.setContent(function () {
              game.setNature(trigger.card, []);
            });
          }
        },
      },
      zanpakuto_minazuki_skill: {
        equipSkill: true,
        trigger: {
          global: 'recoverEnd',
        },
        filter(event, player) {
          return event.source && event.source == player && event.player != player;
        },
        content() {
          player.draw(2);
        },
      },
      zanpakuto_sakanade_skill: {
        equipSkill: true,
        trigger: {
          source: 'damageSource',
        },
        filter(event, player) {
          return event.card && ['sha', 'juedou'].includes(event.card.name) && !event.player.hasSkill('zanpakuto_sakanade_skill_ufin');
        },
        check(event, player) {
          return get.attitude(player, event.player) <= 0;
        },
        logTarget: 'player',
        content() {
          trigger.player.addTempSkill('zanpakuto_sakanade_skill_ufin', { player: 'phaseAfter' });
        },
        subSkill: {
          ufin: {
            trigger: {
              player: 'phaseBegin',
            },
            lastDo: true,
            silent: true,
            charlotte: true,
            content() {
              let mark = player.marks.zanpakuto_sakanade_skill_ufin;
              if (mark && !player.storage.zanpakuto_sakanade_skill_ufin) {
                mark.firstChild.style.transform = 'rotate(180deg)';
                player.storage.zanpakuto_sakanade_skill_ufin = true;
              }
              trigger.phaseList = trigger.phaseList.reverse();
            },
            mark: true,
            marktext: '颠',
            intro: {
              name: '欢迎来到颠倒的世界',
              content: '下回合内所有阶段逆序执行',
            },
          },
        },
      },
      zanpakuto_engetsu_skill: {
        equipSkill: true,
        forced: true,
        trigger: {
          player: 'useCard1',
        },
        filter(event, player) {
          return event.card.name == 'sha';
        },
        check(event, player) {
          return player.getHp() > 2 && event.targets.some((target) => !target.countCards('h', 'shan') && get.effect(target, event.card, player, player) > 0);
        },
        content() {
          'step 0';
          player.loseHp();
          ('step 1');
          trigger.baseDamage++;
          if (!trigger.card.storage) trigger.card.storage = {};
          if (!trigger.card.storage.bleachMark_fire) trigger.card.storage.bleachMark_fire = 0;
          trigger.card.storage.bleachMark_fire++;
          game.log(trigger.card, '附加了1层【烧伤】');
        },
      },
      zanpakuto_sodenoshirayuki_skill: {
        equipSkill: true,
        enable: 'chooseToUse',
        filterCard: true,
        position: 'hes',
        viewAs: {
          name: 'sha',
          nature: 'bleach_ice',
        },
        viewAsFilter(player) {
          if (!player.countCards('hes')) return false;
        },
        prompt: '将一张牌当冰冻杀使用',
        check(card) {
          return 7 - get.value(card);
        },
        ai: {
          respondSha: true,
          skillTagFilter(player, tag, arg) {
            if (arg == 'respond') return false;
            if (!player.countCards('hes')) return false;
          },
          order: () => get.order({ name: 'sha' }) + 0.5,
        },
      },
      zanpakuto_nozarasizero_skill: {
        equipSkill: true,
        mod: {
          canBeDiscarded(card) {
            if (get.position(card) == 'e' && ['equip1'].includes(get.subtype(card))) return false;
          },
        },
      },
      zanpakuto_tengumaru_skill: {
        equipSkill: true,
        trigger: {
          player: 'useCard2',
        },
        forced: true,
        filter(event, player) {
          return event.card && event.card.name == 'sha';
        },
        content() {
          var players = game.filterPlayer((current) => {
            return get.distance(trigger.targets[0], current, 'pure') == 1 && !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current);
          });
          if (players.length) {
            trigger.targets.addArray(players);
            game.log(players, '因', '#g【天狗丸】', '效果被追加为目标');
          }
        },
      },
      zanpakuto_kinshara_skill: {
        equipSkill: true,
        trigger: {
          source: 'damageSource',
        }, //QQQ
        filter(event, player) {
          return event.card && event.card.name == 'sha' && event.player.getExpansions('bleach_zongyue').length;
        },
        check(event, player) {
          return Math.random() > 0.5;
        },
        logTarget: 'player',
        content() {
          'step 0';
          const target = trigger.player,
            expansions = target.getExpansions('bleach_zongyue');
          if (target.getExpansions('bleach_zongyue').length == 1) event._result = { bool: true, links: target.getExpansions('bleach_zongyue') };
          else
            player.chooseCardButton('请选择移去的「纵乐」', target.getExpansions('bleach_zongyue'), true).set('ai', (button) => {
              const suits = [],
                suits2 = [];
              expansions.forEach((i) => (suits.add(i.suit), suits2.push(i.suit)));
              if (suits2.length > suits.length) {
                var gett = function (suit) {
                  return expansions.filter((card) => card.suit == suit.suit).length;
                };
                if (expansions.sort((b, a) => gett(a) - gett(b))[0] == card) return val + 20;
              }
              return val;
            });
          ('step 1');
          if (result.bool) {
            trigger.player.loseToDiscardpile(result.links);
            player.draw();
          }
        },
      },
      zanpakuto_mirokumaru_skill: {
        equipSkill: true,
        mod: {
          cardnature(card, player) {
            if (card.name == 'sha' && card.suit == 'spade') return 'thunder';
          },
          targetInRange(card) {
            if (card.name == 'sha' && get.color(card) == 'black') return true;
          },
        },
      },
      zanpakuto_gonryomaru_skill: {
        equipSkill: true,
        trigger: {
          player: 'useCard1',
        },
        filter(event, player) {
          if (event.card.name == 'sha' && !game.hasNature(event.card)) return true;
        },
        audio: true,
        check(event, player) {
          var eff = 0;
          for (var i = 0; i < event.targets.length; i++) {
            var target = event.targets[i];
            var eff1 = get.damageEffect(target, player, player);
            var eff2 = get.damageEffect(target, player, player, 'stab');
            eff += eff2;
            eff -= eff1;
          }
          return eff >= 0;
        },
        prompt2(event, player) {
          return '将' + get.translation(event.card) + '改为刺【杀】';
        },
        content() {
          game.setNature(trigger.card, 'stab');
          if (get.itemtype(trigger.card) == 'card') {
            player
              .when('useCardAfter')
              .filter((evt) => evt == trigger)
              .then(() => {
                game.setNature(trigger.card, []);
              });
          }
        },
        mod: {
          suit(card, suit) {
            if (suit == 'club') return 'spade';
          },
        },
      },
      zanpakuto_gonryomaru_effect: {
        equipSkill: true,
        trigger: {
          player: 'damageBegin4',
        },
        filter(event, player) {
          return event.hasNature('thunder') && !event.source;
        },
        forced: true,
        content() {
          trigger.cancel();
          player.restoreSkill('bleach_ligong');
          game.log(player, '重置了技能', '#g【离宫】');
        },
      },
      zanpakuto_tachikaze_skill: {
        equipSkill: true,
        enable: 'phaseUse',
        usable: 1,
        chooseButton: {
          dialog(event, player) {
            let dialog = ui.create.dialog('断地风:请选择一项', 'hidden');
            dialog.add([
              [
                ['draw', '摸至多两张牌,下次使用牌后弃置等量牌'],
                ['discard', '弃置至多两张牌,下次使用牌后摸等量牌'],
              ],

              'textbutton',
            ]);
            return dialog;
          },
          filter(button, player) {
            if (button.link == 'discard' && !player.countCards('he')) return false;
            return true;
          },
          check(button) {
            const player = get.player();
            if (button.link == 'discard') {
              if (player.countCards('he', (card) => get.value(card) < 6) >= 2 && player.countCards('hs', (card) => player.hasUseTarget(card))) return 0.7 + Math.random(); //QQQ
              return 0.4 + Math.random();
            }
            if (button.link == 'draw') return 1;
          },
          backup(links) {
            return get.copy(lib.skill['zanpakuto_tachikaze_skill_' + links[0]]);
          },
          prompt(links) {
            if (links[0] == 'discard') return '弃置至多两张牌,下次使用牌后摸等量张牌.';
            return '摸至多两张牌,下次使用牌后弃置等量张牌';
          },
        },
        subSkill: {
          backup: {},
          discard: {
            audio: 'zanpakuto_tachikaze_skill',
            filterCard: true,
            selectCard: [1, 2],
            check(card) {
              return 6 - get.value(card);
            },
            content() {
              player
                .when({ player: 'useCardAfter' })
                .then(() => {
                  player.draw(num);
                })
                .vars({ num: cards.length });
            },
            ai: {
              result: {
                player(player) {
                  return 1.1 - Math.floor(player.countCards('h') / 2);
                },
              },
            },
          },
          draw: {
            audio: 'zanpakuto_tachikaze_skill',
            filterCard: () => false,
            selectCard: -1,
            forced: true,
            async content(event, trigger, player) {
              const result = await player
                .chooseControl(['1', '2', 'cancel2'])
                .set('ai', () => {
                  return [1, 2].randomGet();
                })
                .forResult();
              if (result.control == 'cancel2') {
                delete player.getStat('skill').zanpakuto_tachikaze_skill;
              } else {
                const num = result.index + 1;
                player.draw(num);
                player
                  .when({ player: 'useCardAfter' })
                  .then(() => {
                    player.chooseToDiscard('he', true, num);
                  })
                  .vars({ num: num });
              }
            },
            ai: {
              result: {
                player(player) {
                  var fix = 0;
                  var num = player.countCards('h');
                  if (num % 2 == 1 && num >= 5) fix += 1;
                  return Math.ceil(num / 2 - 0.5) + fix;
                },
              },
            },
          },
        },
      },
      zanpakuto_sanpokenju_skill: {
        equipSkill: true,
        trigger: {
          player: ['shaMiss', 'eventNeutralized'],
        },
        forced: true,
        audio: true,
        filter(event, player) {
          if (event.type != 'card' || event.card.name != 'sha' || !event.target.isIn()) return false;
          return player.countCards('h');
        },
        async content(event, trigger, player) {
          let next = player.chooseToDiscard(get.prompt('zanpakuto_sanpokenju'), (card, player) => {
            return card.number > get.event('num');
          });
          next.set('num', trigger.cards[0].number || 0);
          next.set('target', trigger.target);
          next.set('ai', (card) => {
            const player = get.player();
            const target = get.event('target');
            if (get.attitude(player, target) < 0) {
              if (player.needsToDiscard()) return 15 - get.value(card);
              if (evt.baseDamage + evt.extraDamage >= Math.min(2, target.hp)) return 8 - get.value(card);
              return 5 - get.value(card);
            }
            return -1;
          });
          const result = await next.forResult();
          if (result.bool) {
            if (event.triggername == 'shaMiss') {
              trigger.untrigger();
              trigger.trigger('shaHit');
              trigger._result.bool = false;
              trigger._result.result = null;
            } else {
              trigger.unneutralize();
            }
          }
        },
        ai: {
          directHit_ai: true,
          skillTagFilter(player, tag, arg) {
            if (player._zanpakuto_sanpokenju_temp) return;
            player._zanpakuto_sanpokenju_temp = true;
            var bool =
              get.attitude(player, arg.target) < 0 &&
              arg.card &&
              arg.card.name == 'sha' &&
              player.countCards('h', (card) => {
                return card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card)) && get.value(card) < 5;
              }) > 1;
            delete player._zanpakuto_sanpokenju_temp;
            return bool;
          },
        },
      },
      zanpakuto_nozarashi_skill: {
        equipSkill: true,
        trigger: {
          player: 'useCard1',
        },
        forced: true,
        filter(event, player) {
          return (event.card && event.card.name == 'sha') || (get.tag(event.card, 'damage') && event.cards && event.cards.length == 1 && event.cards.some((card) => card.name == 'sha'));
        },
        content() {
          trigger.baseDamage++;
        },
        ai: {
          damageBonus: true,
        },
      },
    },
    translate: {
      bleach_zhangui: '崭鬼',
      bleach_zhangui_info: '发起者与目标同时亮出一张手牌,这两张牌的点数分别+自己攻击范围,点数大的角色对点数小的角色造成1点伤害,若赢家攻击范围大于输家,则改为2点伤害,最后双方将牌置入弃牌堆.',
      bleach_yinggui: '影鬼',
      bleach_yinggui_info: '发起者弃置任意张黑色牌,目标角色弃置任意张其中含有的同类别牌,弃置牌较多的角色对较少的角色造成1点伤害.',
      bleach_yangui: '艳鬼',
      bleach_yangui_info: '发起者选择一种花色,双方同时展示所有牌,若均有此花色的牌,则发起者大于/不大于目标,则对目标造成/视为造成X点伤害(X为发起者的该花色牌数减目标该花色牌数/1).',
      Stamina: '体力',
      Stamina_info: '回合开始时或当你造成1点伤害后,获得1层「体力」,至多5层,受伤状态消耗满层回复1点体力.',
      Attack: '攻击',
      Attack_info: '你每使用的第五张牌若为【杀】或【虚闪】则不计入次数限制且伤害+1.',
      Defense: '防御',
      Defense_info: '每十二回合限一次,当你受到伤害后,冷却完成前下一次受到的伤害-1,大于体力值则改为-2;你的手牌上限在未冷却期间+1.',
      Focus: '会心',
      Focus_info: '你造成的伤害有7%概率翻倍,若未触发则提供2%概率至触发.',
      SpiriualPressure: '灵压',
      SpiriualPressure_info: '每当你获得牌或弃置其他角色牌共计五次后,你下次额定摸牌值+1.',
      bleach_card_cero: '虚闪',
      bleach_card_cero_info: '出牌阶段,对一名其他角色使用.其须打出一张由你指定的【杀】或【闪】,否则受到一点伤害.限「破面」和「假面」使用,当你因弃置失去【虚闪】时,你摸一张牌.',
      bleach_card_ramen: '拉面',
      bleach_card_ramen_info: '出牌阶段,对一名受伤角色使用.目标角色回复1点体力,移去1层雷蛰/火焚/冻伤/虚弱状态.',
      bleach_card_zhengyizhaozhuang: '正义着装',
      bleach_card_zhengyizhaozhuang_info: "出牌阶段,对没有护盾的角色使用.其获得1层<a style='color: #808080' href=\"javascript:window.bleachIntroduceBuff('bleachMark_shield');\">护盾</a>.",
      bleach_card_daorenrongyao: '刀刃荣耀',
      bleach_card_daorenrongyao_info: '出牌阶段,对自己使用.你观看随机四张武器牌并获得其中一张,以此法获得武器牌在装备区时,不能被其他角色弃置.',
      g_bleach_daorenrongyao: '刀刃荣耀',
      bleach_card_hougyoku: '崩玉',
      bleach_card_hougyoku_info: '出牌阶段限一次,你可以获得一张任意类型的牌;此牌在你装备区里时,不能被其他角色弃置,令你进入濒死状态的角色获得此牌.',
      bleach_card_hougyoku_skill: '崩玉',
      bleach_card_hougyoku_skill_info: '出牌阶段限一次,你可以获得一张任意类型的牌;此牌在你装备区里时,不能被其他角色弃置,令你进入濒死状态的角色获得此牌.',
      bleach_card_qianda: '浅打',
      bleach_card_qianda_info: '出牌阶段,若你有武将可以*始解*,你可以解放斩魄刀.<font color=gray size=2><br><无名的斩魄刀,即斩魄刀未始解时的名称.></font>',
      bleach_card_qianda_skill: '始解',
      bleach_card_qianda_skill_info: '出牌阶段,若你的主将为「始解」名单内的武将,你可以解放斩魄刀.<font color=gray size=2><br><无名的斩魄刀,即斩魄刀未始解时的名称.></font>',
      bleach_card_zanpakutou_gain: '复原',
      bleach_card_zanpakutou_lose: '碎裂',
      bleach_card_tiantaxuan: '天踏绚',
      bleach_card_tiantaxuan_info: '准备阶段,你可以将此牌置入弃牌堆,弃置一名角色区域内一张牌.',
      bleach_card_tiantaxuan_skill: '天踏绚',
      bleach_card_tiantaxuan_skill_info: '准备阶段,你可以将此牌置入弃牌堆,弃置一名角色区域内一张牌.',
      bleach_card_zhengyitoutao: '正义头套',
      bleach_card_zhengyitoutao_info: '锁定技,你的手牌上限+2.',
      bleach_card_zhengyitoutao_skill: '正义头套',
      bleach_card_zhengyitoutao_skill_info: '锁定技,你的手牌上限+2.',
      bleach_card_xuzhijiamian: '虚之假面',
      bleach_card_xuzhijiamian_info: '每轮限一次,当你受到伤害后,你可以对伤害来源造成1点伤害.',
      bleach_card_xuzhijiamian_skill: '虚之假面',
      bleach_card_xuzhijiamian_skill_info: '每轮限一次,当你受到伤害后,你可以对伤害来源造成1点伤害.',
      bleach_card_wuweidoupeng: '无畏斗篷',
      bleach_card_wuweidoupeng_info: '锁定技,防止你获得不可叠加异常状态.<font color=\"#77787b\" size=\"2\"><br>我等,现在将前往决战之地,相信吧!我等刀刃将不会碎裂!相信吧!我等决心将不会受挫!就算无法常相左右,钢铁般的心终将同在!立誓吧!我等,就算大地将要崩裂,也会存活下来,并再次来到这个地方!</font></b>',
      bleach_card_wuweidoupeng_skill: '无畏斗篷',
      bleach_card_wuweidoupeng_skill_info: '锁定技,防止你获得不可叠加异常状态.',
      bleach_card_hushenfu: '护身符',
      bleach_card_hushenfu_info: '锁定技,当你受到致命伤害时,弃置此装备并防止该伤害.当你失去装备区内的【护身符】后,若你体力值不大于1,你摸两张牌.',
      bleach_card_hushenfu_skill: '护身符',
      bleach_card_hushenfu_skill_info: '锁定技,当你受到致命伤害时,弃置此装备并防止该伤害.当你失去装备区内的【护身符】后,若你体力值不大于1,你摸两张牌.',
      bleach_kido: '鬼道',
      bleach_bakudo: '缚道',
      bleach_hado: '破道',
      bleach_kaido: '回道',
      bleach_sai: '塞',
      bleach_sai_info: '出牌阶段,对一名距离2以内的其他角色使用.其须弃置一张点数不小于【塞】的牌,否则不能使用或打出基本牌直到其下回合开始或场上有角色进入濒死状态.<font color="#77787b" size="2"><br>缚道之一·塞!</font>',
      bleach_rikujokoro: '六杖光牢',
      bleach_rikujokoro_info: '出牌阶段,对一名手牌数小于你且未处于「六杖光牢」状态的角色使用.其不能使用或打出手牌直到你手牌数小于其或进入濒死状态.<font color="#77787b" size="2"><br>雷鸣的马车、纺车的缝隙、此物有光、一分为六!缚道之六十一·六杖光牢!</font>',
      bleach_danku: '断空',
      bleach_danku_info: '一张鬼道牌生效前,对此牌使用.抵消此牌对一名角色产生的效果.<font color="#77787b" size="2"><br>天之骄子、铁筑的城墙、龙行、狮吼、虎啸、狼奔、在崩塌之前截断天地!缚道之八十一·断空!</font>',
      bleach_fushibi: '伏火',
      bleach_fushibi_info: '出牌阶段,对一名其他角色使用.横置其并令弃置其一张牌.<font color="#77787b" size="2"><br>破道之十二·伏火!</font>',
      bleach_shakkaho: '赤火炮',
      bleach_shakkaho_info: '出牌阶段,对一名其他角色使用.其须使用一张【闪】或受到1点火焰伤害.<font color="#77787b" size="2"><br>君临者啊!血肉的面具、万象、振翅高飞、冠上人类之名的东西!焦热与争乱、隔海逆卷向南、举步前行!破道之三十一·赤火炮!</font>',
      bleach_miewangzhifu: '灭亡之斧',
      bleach_miewangzhifu_info: '锁定技,当你使用【杀】造成伤害后,施加1层<a style="color: #FF6666" href=\'javascript:window.bleachIntroduceBuff("bleachMark_lieshang"");\'>裂伤</a>.',
      bleach_miewangzhifu_skill: '灭亡之斧',
      bleach_miewangzhifu_skill_info: '锁定技,当你使用【杀】造成伤害后,施加1层<a style="color: #FF6666" href=\'javascript:window.bleachIntroduceBuff("bleachMark_lieshang"");\'>裂伤</a>.',
      soul_card_gangnier: '冈尼尔',
      soul_card_gangnier_info: '当你使用【杀】指定距离最远的角色为目标后,你可以对其造成1点伤害.',
      soul_card_gangnier_skill: '冈尼尔',
      soul_card_gangnier_skill_info: '当你使用【杀】指定距离最远的角色为目标后,你可以对其造成1点伤害.',
      soul_card_buertegen: '布尔特根',
      soul_card_buertegen_info: '锁定技,你使用的【杀】无视防具且造成伤害后,令其弃置一张牌.',
      soul_card_buertegen_skill: '布尔特根',
      soul_card_buertegen_skill_info: '锁定技,你使用的【杀】无视防具且造成伤害后,令其弃置一张牌.',
      zanpakuto_tenken: '天谴',
      zanpakuto_tenken_info: '当你使用的【杀】结算完成后,你可以弃置一张牌额外结算一次.',
      zanpakuto_tenken_skill: '天谴',
      zanpakuto_tenken_skill_info: '当你使用的【杀】结算完成后,你可以弃置一张牌额外结算一次.',
      zanpakuto_zabimaru: '蛇尾丸',
      zanpakuto_zabimaru_info: '当你使用的【杀】被抵消后,你可以将一张牌当不计入次数的【杀】对目标使用.',
      zanpakuto_zabimaru_skill: '蛇尾丸',
      zanpakuto_zabimaru_skill_info: '当你使用的【杀】被抵消后,你可以将一张牌当不计入次数的【杀】对目标使用.',
      zanpakuto_wabisuke: '侘助',
      zanpakuto_wabisuke_info: '锁定技,当你造成的伤害不小于其他角色体力值时,其死亡.',
      zanpakuto_wabisuke_skill: '侘助',
      zanpakuto_wabisuke_skill_info: '锁定技,当你造成的伤害不小于其他角色体力值时,其死亡.',
      zanpakuto_tobiume: '飞梅',
      zanpakuto_tobiume_info: '锁定技,当你发动【飞梅】时,令目标角色使用的牌无效.',
      zanpakuto_hozukimaru: '鬼灯丸',
      zanpakuto_hozukimaru_info: '当你使用【杀】指定一名角色为目标后,你可以弃置一张牌,其须弃置一张同花色的牌,否则不能响应此【杀】,若其弃置了牌,你可重复此步骤;你可以将此牌当【桃】使用.',
      zanpakuto_hozukimaru_skill: '鬼灯丸',
      zanpakuto_hozukimaru_skill_info: '当你使用【杀】指定一名角色为目标后,你可以弃置一张牌,其须弃置一张同花色的牌,否则不能响应此【杀】,若其弃置了牌,你可重复此步骤.',
      zanpakuto_hozukimaru_skill_recover: '鬼灯丸',
      zanpakuto_senbonzakura: '千本樱',
      zanpakuto_senbonzakura_info: '当装备区内的此牌进入弃牌堆后时,你可以判定,若为红色,你使用一张【千本樱】.',
      zanpakuto_senbonzakura_skill: '千本樱',
      zanpakuto_senbonzakura_skill_info: '当装备区内的此牌进入弃牌堆后时,你可以判定,若为红色,你使用一张【千本樱】.',
      zanpakuto_shinso: '神枪',
      zanpakuto_shinso_info: '出牌阶段限一次,你可以将此牌的攻击范围调整为1-5.1:你使用【杀】无次数限制;2:你使用的【杀】伤害+1;3:你使用的【杀】不可被响应;4:你使用的【杀】无视防具;5:当你的【杀】被抵消时,你可以对其下家使用一张【杀】.',
      zanpakuto_shinso_skill: '神枪',
      zanpakuto_shinso_skill_info: '出牌阶段限一次,你可以将此牌的攻击范围调整为1-5.1:你使用【杀】无次数限制;2:你使用的【杀】伤害+1;3:你使用的【杀】不可被响应;4:你使用的【杀】无视防具;5:当你的【杀】被抵消时,你可以对其下家使用一张【杀】..',
      zanpakuto_ashisogijizo: '疋杀地藏',
      zanpakuto_ashisogijizo_info: '当你使用【杀】对目标角色造成伤害后,你可以令其交给你一张牌,若该【杀】为♠️️2~9,附加1层<a style="color: #87CEEB" href=\'javascript:window.bleachIntroduceBuff("bleachEffect_mabi");\'>麻痹</a>.',
      zanpakuto_ashisogijizo_skill: '疋杀地藏',
      zanpakuto_ashisogijizo_skill_info: '当你使用【杀】对目标角色造成伤害后,你可以令其交给你一张牌,若该【杀】为♠️️2~9,附加1层<a style="color: #87CEEB" href=\'javascript:window.bleachIntroduceBuff("bleachEffect_mabi");\'>麻痹</a>.',
      zanpakuto_benihime: '红姬',
      zanpakuto_benihime_info: '出牌阶段限一次,你可以弃置一名角色区域内一张牌.',
      zanpakuto_benihime_skill: '红姬',
      zanpakuto_benihime_skill_info: '出牌阶段限一次,你可以弃置一名角色区域内一张牌.',
      zanpakuto_haineko: '灰猫',
      zanpakuto_haineko_info: '当你失去装备区内的【灰猫】后,你摸两张牌.',
      zanpakuto_haineko_skill: '灰猫',
      zanpakuto_haineko_skill_info: '当你失去装备区内的【灰猫】后,你摸两张牌.',
      zanpakuto_kyokasuigetsu: '镜花水月',
      zanpakuto_kyokasuigetsu_info: '每回合限一次,当你的牌因弃置而进入弃牌堆牌后,你可以使用其中的一张.',
      zanpakuto_kyokasuigetsu_skill: '镜花水月',
      zanpakuto_kyokasuigetsu_skill_info: '每回合限一次,当你的牌因弃置而进入弃牌堆牌后,你可以使用其中的一张.',
      zanpakuto_suzumebachi: '雀蜂',
      zanpakuto_suzumebachi_info: '锁定技,你对有「蜂纹华」的角色使用牌没有次数限制.',
      zanpakuto_suzumebachi_skill: '雀蜂',
      zanpakuto_suzumebachi_skill_info: '锁定技,你对有「蜂纹华」的角色使用牌没有次数限制.',
      zanpakuto_sogyonokotowari: '双鱼理',
      zanpakuto_sogyonokotowari_info: '锁定技,当你发动【双鲤】或【雷刃】时,你摸一张牌.',
      zanpakuto_sogyonokotowari_skill: '双鱼理',
      zanpakuto_sogyonokotowari_skill_info: '锁定技,当你发动【双鲤】或【雷刃】时,你摸一张牌.',
      zanpakuto_gegetsuburi: '五形头',
      zanpakuto_gegetsuburi_info: '当你使用【杀】造成伤害后,你可以令其随机弃置一张牌.',
      zanpakuto_gegetsuburi_skill: '五形头',
      zanpakuto_gegetsuburi_skill_info: '当你使用【杀】造成伤害后,你可以令其随机弃置一张牌.',
      zanpakuto_katenkyokotsu: '花天狂骨',
      zanpakuto_katenkyokotsu_info: '锁定技,根据你执行的「花天狂骨的游戏」获得对应效果:影鬼,你选择其一张牌弃置.崭鬼,其结算点数时随机减少1-4点.艳鬼,其技能失效至回合结束.',
      zanpakuto_kazeshini: '风死',
      zanpakuto_kazeshini_info: '当你的【杀】指定目标后,可以弃置其一张装备牌.',
      zanpakuto_kazeshini_skill: '风死',
      zanpakuto_kazeshini_skill_info: '当你的【杀】指定目标后,可以弃置其一张装备牌.',
      zanpakuto_ryujinjakka: '流刃若火',
      zanpakuto_ryujinjakka_info: "你可以将普通【杀】改为火【杀】;锁定技,你使用的火【杀】附带<a style='color: #FFFF00' href=\"javascript:window.bleachIntroduceBuff('bleachEffect_break');\">破防</a>效果且不能被响应,受伤的角色获得两层<a style='color: #FF3333' href=\"javascript:window.bleachIntroduceBuff('bleachMark_fire');\">烧伤</a>状态;你免疫<a style='color: #97CBFF' href=\"javascript:window.bleachIntroduceBuff('bleachEffect_ice');\">冻结</a>状态,此牌不能被其他角色弃置.",
      zanpakuto_ryujinjakka_skill: '流刃若火',
      zanpakuto_ryujinjakka_skill_info: '你可以将普通【杀】改为火【杀】;锁定技,你使用的火【杀】附带<a style="color: #FFFF00" href=\'javascript:window.bleachIntroduceBuff("bleachEffect_break");\'>破防</a>效果且不能被响应,受伤的角色获得两层<a style="color: #FF3333" href=\'javascript:window.bleachIntroduceBuff("bleachMark_fire");\'>烧伤</a>状态;你免疫<a style="color: #97CBFF" href=\'javascript:window.bleachIntroduceBuff("bleachEffect_ice");\'>冻结</a>状态,此牌不能被其他角色弃置.',
      zanpakuto_suzumushi: '清虫',
      zanpakuto_suzumushi_info: '当你于出牌阶段内对一名角色第二次造成伤害后,你可以附加1层<a style="color: #F0E68C" href=\'javascript:window.bleachIntroduceBuff("bleachEffect_hunluan");\'>混乱</a>.',
      zanpakuto_suzumushi_skill: '清虫',
      zanpakuto_suzumushi_skill_info: '当你于出牌阶段内对一名角色第二次造成伤害后,你可以附加1层<a style="color: #F0E68C" href=\'javascript:window.bleachIntroduceBuff("bleachEffect_hunluan");\'>混乱</a>.',
      zanpakuto_nijibana: '捩花',
      zanpakuto_nijibana_info: '你可以将至少两张相同类型的牌当【杀】使用或打出.',
      zanpakuto_nijibana_skill: '捩花',
      zanpakuto_nijibana_skill_info: '你可以将至少两张相同类型的牌当【杀】使用或打出.',
      zanpakuto_hyorinmaru: '冰轮丸',
      zanpakuto_hyorinmaru_info: '当你使用普通【杀】时,你可以将此【杀】改为<a style="color: #97CBFF" href=\'javascript:window.bleachIntroduce("bleachIce");\'>冰</a>或冰【杀】.',
      zanpakuto_hyorinmaru_skill: '冰轮丸',
      zanpakuto_hyorinmaru_skill_info: '当你使用普通【杀】时,你可以将此【杀】改为<a style="color: #97CBFF" href=\'javascript:window.bleachIntroduce("bleachIce");\'>冰</a>或冰【杀】.',
      zanpakuto_minazuki: '肉雫唼',
      zanpakuto_minazuki_info: '当你令一名其他角色回复体力后,你可以摸两张牌.',
      zanpakuto_minazuki_skill: '肉雫唼',
      zanpakuto_minazuki_skill_info: '当你令一名其他角色回复体力后,你可以摸两张牌.',
      zanpakuto_sakanade: '逆抚',
      zanpakuto_sakanade_info: '当你使用【杀】或【决斗】造成伤害后,你可以令其逆序执行下回合.',
      zanpakuto_sakanade_skill: '逆抚',
      zanpakuto_sakanade_skill_info: '当你使用【杀】或【决斗】造成伤害后,你可以令其逆序执行下回合.',
      zanpakuto_engetsu: '剡月',
      zanpakuto_engetsu_info: '当你使用【杀】时,你可以失去1点体力,令此牌附带<a style="color: #FF3333" href=\'javascript:window.bleachIntroduceBuff("bleachMark_fire");\'>烧伤</a>且伤害+1.',
      zanpakuto_engetsu_skill: '剡月',
      zanpakuto_engetsu_skill_info: '当你使用【杀】时,你可以失去1点体力,令此牌附带<a style="color: #FF3333" href=\'javascript:window.bleachIntroduceBuff("bleachMark_fire");\'>烧伤</a>且伤害+1.',
      zanpakuto_sodenoshirayuki: '袖白雪',
      zanpakuto_sodenoshirayuki_info: '你可以将一张牌当<a style="color: #97CBFF" href=\'javascript:window.bleachIntroduce("bleachIce");\'>冰</a>【杀】使用.',
      zanpakuto_sodenoshirayuki_skill: '袖白雪',
      zanpakuto_sodenoshirayuki_skill_info: '你可以将一张牌当<a style="color: #97CBFF" href=\'javascript:window.bleachIntroduce("bleachIce");\'>冰</a>【杀】使用.',
      zanpakuto_nozarasizero: '浅打',
      zanpakuto_nozarasizero_info: '锁定技,其他角色不能弃置装备区的此牌.',
      zanpakuto_nozarasizero_skill: '未解放的野晒',
      zanpakuto_nozarasizero_skill_info: '锁定技,其他角色不能弃置装备区的此牌.',
      zanpakuto_tengumaru: '天狗丸',
      zanpakuto_tengumaru_info: '锁定技,你使用【杀】的目标包含其的合法邻家.',
      zanpakuto_tengumaru_skill: '天狗丸',
      zanpakuto_tengumaru_skill_info: '锁定技,你使用【杀】的目标包含其的合法邻家.',
      zanpakuto_kinshara: '金沙罗',
      zanpakuto_kinshara_info: '当你使用【杀】造成伤害后,可以移去目标角色一张「纵乐」并摸一张牌.',
      zanpakuto_kinshara_skill: '金沙罗',
      zanpakuto_kinshara_skill_info: '当你使用【杀】造成伤害后,可以移去目标角色一张「纵乐」并摸一张牌.',
      zanpakuto_mirokumaru: '弥勒丸',
      zanpakuto_mirokumaru_info: '锁定技,你的♠️️【杀】视为雷【杀】;你使用黑色的【杀】没有距离限制.',
      zanpakuto_mirokumaru_skill: '弥勒丸',
      zanpakuto_mirokumaru_skill_info: '锁定技,你的♠️️【杀】视为雷【杀】;你使用黑色的【杀】没有距离限制.',
      zanpakuto_gonryomaru: '严灵丸',
      zanpakuto_gonryomaru_info: '你可以将你的普通【杀】当刺【杀】来使用.锁定技,你的♣️️牌视为♠️️牌,防止你受到没有伤害来源的雷电伤害并重置【离宫】.',
      zanpakuto_gonryomaru_skill: '严灵丸',
      zanpakuto_gonryomaru_skill_info: '你可以将你的普通【杀】当刺【杀】来使用.锁定技,你的♣️️牌视为♠️️牌,防止你受到没有伤害来源的雷电伤害并重置【离宫】.',
      zanpakuto_tachikaze: '断地风',
      zanpakuto_tachikaze_info: '出牌阶段限一次,你可以摸或弃置至多两张牌,你使用下一张牌后,你执行另一项.',
      zanpakuto_tachikaze_skill: '断地风',
      zanpakuto_tachikaze_skill_info: '出牌阶段限一次,你可以摸或弃置至多两张牌,你使用下一张牌后,你执行另一项.',
      zanpakuto_sanpokenju: '三步剑兽',
      zanpakuto_sanpokenju_info: '当你使用的【杀】被【闪】抵消后,你可以弃置一张点数大于杀的手牌,令此【杀】依然造成伤害.',
      zanpakuto_sanpokenju_skill: '三步剑兽',
      zanpakuto_sanpokenju_skill_info: '当你使用的【杀】被【闪】抵消后,你可以弃置一张点数大于杀的手牌,令此【杀】依然造成伤害.',
      zanpakuto_nozarashi: '野晒',
      zanpakuto_nozarashi_info: '锁定技,你使用的【杀】的伤害+1.',
      zanpakuto_nozarashi_skill: '野晒',
      zanpakuto_nozarashi_skill_info: '锁定技,你使用的【杀】的伤害+1.',
    },
  };
  for (const i in QQQ.card) {
    const info = QQQ.card[i];
    lib.inpile.add(i);
    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
  }
  lib.config.all.cards.add('BLEACH');
  lib.config.cards.add('BLEACH');
  lib.translate.BLEACH_card_config = 'BLEACH';
  return QQQ;
});
