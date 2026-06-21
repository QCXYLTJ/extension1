import { lib, get, _status, ui, game, ai, rootURL } from '../../../../../noname.js';
lib.init.css('extension/仙家之魂/css', 'rune');
//初始化
if (lib.config.xjzh_qishuyaojians && !game.getExtensionConfig('仙家之魂', 'xjzh_runesInit')) {
  let config = lib.config.xjzh_qishuyaojians;
  config.fuwen = {};
  config.fuwenEquip = {};
  function saveConfig() {
    game.saveConfig('xjzh_qishuyaojians', lib.config.xjzh_qishuyaojians);
    var list = JSON.stringify(lib.config.xjzh_qishuyaojians);
    var data = '奇术要件存档备份：' + list.slice(0);
    game.writeFile(lib.init.encode(data), 'extension/仙家之魂/save', '奇术要件存档备份.json', function (err) { });
  }
  saveConfig();
  game.saveExtensionConfig('仙家之魂', 'xjzh_runesInit', true);
}
const runes = {
  //仪式符文
  ritual: {
    xjzh_fuwen_tamu: {
      trigger: { player: 'useCard' },
      names: 'xjzh_fuwen_tamu',
      gain: 25,
      tpye: 'ritual',
      translate: '塔姆符文',
      filter: (event, player) => true,
      translateInfo() {
        return `当你使用牌时，获得${this.gain}个贡品。`;
      },
    },
    xjzh_fuwen_lieyan: {
      trigger: { source: 'damageAfter' },
      names: 'xjzh_fuwen_lieyan',
      gain: 60,
      tpye: 'ritual',
      translate: '烈焰符文',
      filter: (event, player) => game.hasNature(event, 'fire'),
      translateInfo() {
        return `当你造成火属性伤害后，获得${this.gain}个贡品。`;
      },
    },
    xjzh_fuwen_hanshuang: {
      trigger: { source: 'damageAfter' },
      names: 'xjzh_fuwen_hanshuang',
      gain: 75,
      tpye: 'ritual',
      translate: '寒霜符文',
      filter: (event, player) => game.hasNature(event, 'ice'),
      translateInfo() {
        return `当你造成冰属性伤害后，获得${this.gain}个贡品。`;
      },
    },
    xjzh_fuwen_benlei: {
      trigger: { source: 'damageAfter' },
      names: 'xjzh_fuwen_benlei',
      gain: 55,
      tpye: 'ritual',
      translate: '奔雷符文',
      filter: (event, player) => game.hasNature(event, 'thunder'),
      translateInfo() {
        return `当你造成雷属性伤害后，获得${this.gain}个贡品。`;
      },
    },
    xjzh_fuwen_cuidu: {
      trigger: { source: 'damageAfter' },
      names: 'xjzh_fuwen_cuidu',
      gain: 80,
      tpye: 'ritual',
      translate: '淬毒符文',
      filter: (event, player) => game.hasNature(event, 'posion'),
      translateInfo() {
        return `当你造成毒属性伤害后，获得${this.gain}个贡品。`;
      },
    },
    xjzh_fuwen_jinren: {
      trigger: { source: 'damageAfter' },
      names: 'xjzh_fuwen_cuidu',
      gain: 40,
      tpye: 'ritual',
      translate: '金刃符文',
      filter: (event, player) => true,
      translateInfo() {
        return `当你造成毒属性伤害后，获得${this.gain}个贡品。`;
      },
    },
  },
  //祷告符文
  pray: {
    xjzh_fuwen_zhaer: {
      xiaohao: 250,
      names: 'xjzh_fuwen_zhaer',
      type: 'pray',
      async content(event, trigger, player) {
        player.gainMaxHp(1);
      },
      translate: '扎尔符文',
      translateInfo() {
        return `消耗${this.xiaohao}个贡品，获得1点体力上限。`;
      },
    },
    xjzh_fuwen_qiyuan: {
      xiaohao: 150,
      names: 'xjzh_fuwen_qiyuan',
      type: 'pray',
      async content(event, trigger, player) {
        player.draw(2);
      },
      translate: '祈愿符文',
      translateInfo() {
        return `消耗${this.xiaohao}个贡品，摸2张牌。`;
      },
    },
    xjzh_fuwen_baofeng: {
      xiaohao: 200,
      names: 'xjzh_fuwen_baofeng',
      type: 'pray',
      async content(event, trigger, player) {
        const { targets } = await player
          .chooseTarget(`〖${get.translation(event.name)}〗：选择一名其他角色对其造成1点雷属性伤害`, lib.filter.notMe)
          .set('ai', (target) => get.damageEffect(target, player, player, 'thunder'))
          .forResult();

        if (targets) {
          targets[0].damage('thunder', 1, player, 'nocard');
        }
      },
      translate: '暴风符文',
      translateInfo() {
        return `消耗${this.xiaohao}个贡品，对一名其他角色造成一点雷属性伤害。`;
      },
    },
    xjzh_fuwen_xinling: {
      xiaohao: 300,
      names: 'xjzh_fuwen_xinling',
      type: 'pray',
      async content(event, trigger, player) {
        let list = [];
        game.xjzh_wujiangpai().forEach((item) => {
          if (lib.character[item].skills) {
            list.addArray(
              lib.character[item].skills.filter((skill) => {
                if (!get.skillInfoTranslation(skill)) return false;
                if (lib.skill.global.includes(skill)) return false;
                return !get.skillCategoriesOf(skill, player).some((type) => ['Charlotte', '主公技', '觉醒技', '限定技', '隐匿技', '使命技', '持恒技'].includes(type));
              })
            );
          }
        });
        let skill = list.randomGet();
        player.addSkills(skill);
      },
      translate: '心灵符文',
      translateInfo() {
        return `消耗${this.xiaohao}个贡品，获得一个随机技能。`;
      },
    },
  },
};
lib.xjzh_runes = runes;
const fuwenuGet = {
  //获取符文翻译
  xjzh_runeTranslate(arg, type) {
    if (!arg || !type) return '';
    let obj = runes;
    return obj[type][arg].translate;
  },
  //获取符文信息
  xjzh_runeTranslateInfo(arg, type) {
    if (!arg || !type) return '';
    let obj = runes;
    return obj[type][arg].translateInfo() || '';
  },
  //获取符文类型翻译
  xjzh_runeTypeTranslate(arg) {
    if (!arg) return '';
    let type = this.xjzh_runeType(arg);
    return type == 'ritual' ? '仪式符文' : '祷告符文';
  },
  //获取符文类型
  xjzh_runeType(arg) {
    if (!arg) return '';
    let obj = runes,
      objects = Object.keys(obj),
      type;
    objects.forEach((item) => {
      let list = Object.keys(obj[item]);
      if (list.includes(arg)) type = item;
    });
    return type;
  },
  //获取符文列表
  xjzh_runeList(type) {
    let list = [];
    if (!type) {
      for (let i in runes) {
        list.addArray(Object.keys(runes[i]));
      }
      return list.slice(0);
    } else {
      return Object.keys(runes[type]);
    }
    return [];
  },
  //获取当前奇术要件已装备的符文列表
  xjzh_runeQishuList(item) {
    if (!item) return [];
    return lib.config.xjzh_qishuyaojians.fuwenEquip[item] || [];
  },
  //获取已有符文数量
  xjzh_runeListNumber(name) {
    if (!name || !lib.config.xjzh_qishuyaojians.fuwen[name]) return 0;
    return lib.config.xjzh_qishuyaojians.fuwen[name];
  },
  //获取已有符文列表
  xjzh_runeListName(type) {
    if (!type || !lib.config.xjzh_qishuyaojians.fuwen) return [];
    let list = Object.keys(lib.config.xjzh_qishuyaojians.fuwen);
    return list.filter((item) => {
      return this.xjzh_runeType(item) == type && this.xjzh_runeListNumber(item) > 0;
    });
  },
};
Object.assign(get, fuwenuGet);
const fuwenuGame = {
  //获得符文
  xjzh_gainRune(name, num) {
    if (!name) return;
    if (!game.xjzh_filterAddqishu()) return;
    if (!lib.config.xjzh_qishuyaojians.fuwen[name] || Number.isNaN(lib.config.xjzh_qishuyaojians.fuwen[name])) lib.config.xjzh_qishuyaojians.fuwen[name] = 0;
    lib.config.xjzh_qishuyaojians.fuwen[name] += num;
    if (lib.config.xjzh_qishuyaojians.fuwen[name] < 0 || Number.isNaN(lib.config.xjzh_qishuyaojians.fuwen[name])) lib.config.xjzh_qishuyaojians.fuwen[name] = 0;
    game.xjzhQishu_saveConfig();
    return name;
  },
  //失去符文
  xjzh_loseRune(name, num) {
    if (!name) return;
    num = Math.abs(num) || 1;
    if (!lib.config.xjzh_qishuyaojians.fuwen[name] || Number.isNaN(lib.config.xjzh_qishuyaojians.fuwen[name])) {
      lib.config.xjzh_qishuyaojians.fuwen[name] = 0;
    }
    lib.config.xjzh_qishuyaojians.fuwen[name] -= num;
    if (lib.config.xjzh_qishuyaojians.fuwen[name] <= 0) delete lib.config.xjzh_qishuyaojians.fuwen[name];
    game.xjzhQishu_saveConfig();
  },
  //装备符文
  xjzh_equipRune(equipItem, rune) {
    if (!equipItem || !rune) return;
    if (this.xjzh_hasEquipRune(equipItem, rune, true)) {
      window.xjzhOpenLoading('你已经装备了该类型的符文！');
      return false;
    }
    if (!lib.config.xjzh_qishuyaojians.fuwenEquip[equipItem]) lib.config.xjzh_qishuyaojians.fuwenEquip[equipItem] = [];
    lib.config.xjzh_qishuyaojians.fuwenEquip[equipItem].push(rune);
    this.xjzh_gainRune(rune, -1);
    game.xjzhQishu_saveConfig();
    return true;
  },
  //卸下符文
  xjzh_unEquipRune(equipItem, rune) {
    if (!equipItem || !rune) return;
    if (this.xjzh_hasEquipRune(equipItem, rune, true)) {
      if (lib.config.xjzh_qishuyaojians.fuwenEquip[equipItem].includes(rune)) {
        lib.config.xjzh_qishuyaojians.fuwenEquip[equipItem].remove(rune);
        this.xjzh_gainRune(rune, 1);
        window.xjzhOpenLoading(`你已卸下${get.xjzh_runeTranslate(rune, get.xjzh_runeType(rune))}！`);
      }
    } else {
      window.xjzhOpenLoading(`你未装备${xjzh_runeTypeTranslate(rune)}！`);
    }
    game.xjzhQishu_saveConfig();
  },
  //获取某一个奇术要件是否装备该符文或该类型的符文
  xjzh_hasEquipRune(equipItem, rune, bool) {
    if (!equipItem || !rune) return;
    if (!lib.config.xjzh_qishuyaojians.fuwenEquip[equipItem]) return false;
    if (!bool) return lib.config.xjzh_qishuyaojians.fuwenEquip[equipItem].includes(rune);
    else {
      let type = get.xjzh_runeType(rune),
        list = lib.config.xjzh_qishuyaojians.fuwenEquip[equipItem];
      if (!list.length) return false;
      else {
        return list.some((item) => {
          return get.xjzh_runeType(item) == type;
        });
      }
    }
  },
  //获取某一个奇术要件是否装备某一类型的符文
  xjzh_hasEquipRunes(equipItem, type) {
    if (!equipItem || !type) return;
    if (!get.xjzh_runeQishuList(equipItem)) return false;
    let runesEquips = get.xjzh_runeQishuList(equipItem);
    return runesEquips.some((item) => {
      return get.xjzh_runeType(item) == type;
    });
  },
  //获取某个奇术要件是否装备了相同组合的符文
  xjzh_hasAllEquipRunes(equipItem, arg) {
    if (!arg) return;
    if (!get.xjzh_runeQishuList(equipItem).length) return false;
    let runesList = get.xjzh_runeQishuList(equipItem),
      runesEquips = lib.config.xjzh_qishuyaojians.fuwenEquip,
      bool = false;
    for (let i in runesEquips) {
      if (!get.xjzh_runeQishuList(i).length) continue;
      if (i === equipItem) continue;
      if (runesList.some((item) => runesEquips[i].includes(item) && runesEquips[i].includes(arg))) bool = true;
    }
    return bool;
  },
};
Object.assign(game, fuwenuGame);
//符文生效
lib.translate._xjzh_fuwen_effect = '符文';
lib.skill._xjzh_fuwen_effect = {
  trigger: {
    global: 'gameStart',
  },
  silent: true,
  lastDo: true,
  priority: Infinity,
  filter(event, player) {
    if (get.nameList(player).length == 0) return false;
    if (!player.isUnderControl(true)) return false;
    if (!get.isXHwujiang(player)) return false;
    if (!['identity', 'doudizhu', 'boss'].includes(get.mode())) return false;
    if (!game.getExtensionConfig('仙家之魂', 'xjzh_qishuyaojianOptions') || game.getExtensionConfig('仙家之魂', 'xjzh_qishuyaojianOptions') === 'close') return false;
    if (!get.nameList(player).some((item) => get.xjzh_equiped(item).length)) return false;
    return true;
  },
  async content(event, trigger, player) {
    let names = get.nameList(player),
      qishuList = {},
      runesList = {};
    if (!names.length) return;
    for await (let name of names) {
      let list = get.xjzh_equiped(name);
      if (list.length) qishuList[name] = list;
    }
    let equipList = Object.keys(qishuList);
    for await (let equip of equipList) {
      let list = qishuList[equip];
      list.forEach((item) => {
        if (get.xjzh_runeQishuList(item).length) runesList[item] = get.xjzh_runeQishuList(item);
      });
    }
    function getSkill(arg) {
      let sikllsList = [];
      for (let item in arg) {
        let list = arg[item];
        if (!list.length || list.length <= 1) continue;
        let ritualSkill = runes.ritual[list.find((item) => get.xjzh_runeType(item) == 'ritual')];
        let praySkill = runes.pray[list.find((item) => get.xjzh_runeType(item) == 'pray')];
        let originSkillId = get.xjzh_randomEnglishString(get.rand(5, 10));
        if (!lib.skill[originSkillId]) {
          let skill = {
            trigger,
            filter(event, player) {
              if (this.extraFilter && !this.extraFilter(event, player)) {
                return false;
              }
              return true;
            },
            mark: true,
            marktext: null,
            intro: {
              content: '#',
            },
            direct: true,
            lastDo: true,
            priority: Infinity,
            charlotte: true,
            superCharlotte: true,
            fixed: true,
            runeSkills: true,
            targetFilter: (player) => [player],
            effect: async (event, trigger, player) => null,
            content: async (event, trigger, player) => null,
          };
          skill.trigger = ritualSkill.trigger;
          skill.extraFilter = ritualSkill.filter;
          skill.effect = praySkill.content;
          let contents = async function (event, trigger, player) {
            await player.addMark(originSkillId, ritualSkill.gain);
            if (player.countMark(originSkillId) >= praySkill.xiaohao) {
              let targets = lib.skill[event.name].targetFilter(player).sortBySeat();
              while (targets.length) {
                let target = targets.shift();
                await lib.skill[event.name].effect(event, trigger, target);
              }
              player.clearMark(originSkillId);
            }
          };
          skill.content = contents;
          let translate = get.xjzh_randomChineseString(2);
          ((skill.marktext = translate.slice(1)), (lib.skill[originSkillId] = skill));
          lib.translate[originSkillId] = get.xjzh_randomChineseString(2);
          lib.translate[originSkillId + '_info'] = ''; //`锁定技，${ritualSkill.translateInfo().slice(0, -1)}；${praySkill.translateInfo()}`;
          sikllsList.push(originSkillId);
        }
      }
      return sikllsList;
    }
    let sikllsList = getSkill(runesList);
    player.addSkills(sikllsList);
  },
};
