import { lib, get, _status, ui, game, ai, rootURL } from '../../../../../noname.js';
const qishuyaojians = {
  xjzh_qishu_lianjinshi: {
    translate: '炼金师之力',
    translate_info: '你造成伤害时,若此伤害属性的数量不小于2,你令此伤害溅射至你选择的至多2名额外角色.',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px>——<炼金师苦思冥想,花费数个岁月,终于将各种元素属性融合到了一件物品中.——炼金师密卷</font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:230碎片`,
    noTranslate: true,
    level: 4,
    skill: {
      trigger: {
        source: ['damageBegin1']
      },
      forced: true,
      _priority: 10,
      lastDo: true,
      filter(event, player) {
        if (event.numFixed || event.cancelled) return false;
        if (event.parent.name == 'xjzh_qishu_lianjinshi') return false;
        return get.natureList(event, player).length >= 2;
      },
      async content(event, trigger, player) {
        let list = [trigger.num, trigger.nature, player, 'notrigger'];
        list.push(trigger.card ? trigger.card : 'nocard');
        const targets = await player.
        chooseTarget(`〖炼金师之力〗:请选择至多2角色对其造成${trigger.num}点${get.translation(trigger.nature)}伤害`, (card, target, player) => {
          return target != player;
        }).
        forResultTargets();
        if (targets) {
          for await (let target of targets) target.damage(...list.slice(0));
        }
      }
    }
  },
  xjzh_qishu_tairuier: {
    translate: '泰瑞尔之力',
    translate_info: '你有20%几率防止所有伤害,你有60%几率防止属性伤害,你有15%几率防止体力流失;当你发动技能时,若你未受伤,你可以令一名其他角色获得该技能直到其发动该技能为止.',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px>——<于是,正义的完美化身——泰瑞尔诞生了.没有人能比他更勇猛地对抗地狱之力.吸取教训后,所有恶魔都在正义之力面前颤抖.> ——王公之书,第一卷</font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:230碎片`,
    noTranslate: true,
    level: 4,
    skill: {
      trigger: {
        player: ['damageBegin1', 'loseHpBegin', 'useSkill', 'logSkillBegin']
      },
      forced: true, //QQQ
      popup: false, //用silent不会赋值popup
      _priority: 10,
      lastDo: true,
      filter(event, player) {
        if (event.getParent('xjzh_qishu_tairuier').name) return false;
        if (event.name == 'damage') {
          if (game.hasNature(event)) return Math.random() <= 0.6;
          return Math.random() <= 0.2;
        }
        if (event.name == 'loseHp') return Math.random() <= 0.15;
        if (['useSkill', 'logSkillBegin'].includes(event.name)) {
          let skill = get.sourceSkillFor(event.skill),
            info = get.info(skill);
          if (player.isDamaged()) return false;
          if (!get.skillInfoTranslation(skill, player)) return false;
          if (lib.skill.global.includes(skill)) return false;
          if (!info || info && (info.limited || info.juexingji || info.dutySkill || info.equipSkill || info.cardSkill || info.sub || info.unique || info.runeSkills)) return false;
          if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) return false;
          return game.hasPlayer((current) => !current.hasSkill(skill));
        }
        return false;
      },
      async content(event, trigger, player) {
        if (['damage', 'loseHp'].includes(trigger.name)) {
          trigger.changeToZero();
        } else {
          let skill = get.sourceSkillFor(trigger.skill);
          const targets = await player.
          chooseTarget(1, `〖泰瑞尔之力〗:令一名其他角色获得技能【${get.translation(skill)}】`, (card, player, target) => {
            if (target == player) return false;
            return !target.hasSkill(skill);
          }).
          set('ai', (target) => {
            return get.attitude(player, target);
          }).
          forResultTargets();
          if (targets) {
            targets[0].addTempSkills(skill, { player: `${skill}After` });
          }
        }
      }
    }
  },
  xjzh_qishu_hakankouyu: {
    translate: '哈坎的口谕',
    translate_info: '<li>〖箭雨〗获得42.5%冷却时间缩减;<br>〖箭雨〗有30%几率释放两次;<li>你的〖箭雨〗造成火/毒/冰/雷属性伤害;<li>每使用2张牌,你的〖箭雨〗减少2秒冷却时间.',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px>——<封锁卡尔蒂姆大门.让它引以为傲的高墙提供密不透风的防御.凯基斯坦其他地区可能会遭受这场瘟疫,但我的城市和我的人民不会.> - 哈坎二世的布告</font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:${230 * 5}碎片<br><br>专属角色:卡夏`,
    noTranslate: true,
    level: 4,
    filter: 'xjzh_diablo_kaxia',
    skill: {
      trigger: {
        source: 'damageBegin',
        player: 'useCardAfter'
      },
      forced: true,
      _priority: 10,
      filter(event, player) {
        let evt = event.getParent(3),
          name = event.name;
        if (name == 'useCard') {
          let history = player.getAllHistory('useCard', (evt) => {
            return evt && evt.parent.name != 'xjzh_diablo_jianyu';
          });
          if (!player.storage.xjzh_diablo_jianyu) return false;
          if (event.parent.name == 'xjzh_diablo_jianyu') return false;
          return history.length % 2 == 0;
        }
        return evt.name == 'xjzh_diablo_jianyu';
      },
      async content(event, trigger, player) {
        let name = trigger.name;
        if (name == 'damage') game.setNature(trigger, ['poison', 'fire', 'ice', 'thunder'], true);else
        {
          let storage = player.storage.xjzh_diablo_jianyu,
            remainderTime = storage.get('remainderTime');
          if (remainderTime > 2) {
            clearInterval(xjzh_diablo_jianyuTimer);
            let xjzh_diablo_jianyuTimer,
              cooldown = storage.get('cooldown'),
              elapsedTime = 0,
              startTime = new Date().getTime();
            xjzh_diablo_jianyuTimer = setInterval(() => {
              elapsedTime += 100;
              let remainingTime = cooldown - elapsedTime,
                endTime = new Date().getTime(),
                remainderTime = endTime - startTime;
              player.storage.xjzh_diablo_jianyu = new Map([
              ['cooldown', remainingTime],
              ['remainder', remainderTime]]
              );
              if (remainingTime <= 0) {
                clearInterval(xjzh_diablo_jianyuTimer);
                delete player.storage.xjzh_diablo_jianyu;
              }
            }, 100);
          }
        }
      }
    }
  },
  xjzh_qishu_wuyexinjie: {
    translate: '无夜星空之戒',
    translate_info: '你每使用2张牌,摸1张牌,并使你本回合造成伤害+1;你的会心几率+10%.',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px>——<不要让你的热情全都变成了执着.心中的热忱之火固然不能熄灭,但若是为了讨好一个无情的世界而将自己燃烧殆尽,那就是疯了.> - 塞利格大师的遗言</font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:230碎片`,
    noTranslate: true,
    level: 4,
    async init(player) {
      player.xjzhHuixin ? player.xjzhHuixin += 0.1 : player.xjzhHuixin = 0.2;
    },
    skill: {
      trigger: {
        player: 'useCardAfter',
        source: 'damageBegin'
      },
      forced: true,
      _priority: 10,
      lastDo: true,
      filter(event, player) {
        let name = event.name,
          history = player.getHistory('useCard');
        if (name == 'damage') {
          return history.length >= 2;
        }
        return history.length % 2 == 0;
      },
      async content(event, trigger, player) {
        let name = trigger.name;
        if (name == 'useCard') player.draw();else
        {
          trigger.num++;
        }
      }
    }
  },
  xjzh_qishu_rongjiezhixin: {
    translate: '塞利格的溶解之心',
    translate_info: '<li>当你受到伤害时,你可以弃置x+1张牌防止之;<li>你的手牌上限+y,你摸牌时,你额外摸y张牌(x为你受到的伤害值,y为你的体力值)',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px>——<不要让你的热情全都变成了执着.心中的热忱之火固然不能熄灭,但若是为了讨好一个无情的世界而将自己燃烧殆尽,那就是疯了.> - 塞利格大师的遗言</font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:230碎片`,
    noTranslate: true,
    level: 4,
    dynamicTranslate(player) {
      return `<li>当你受到伤害时,你可以弃置x+1张牌防止之;<li>你的手牌上限+${player.getHp(true)},你摸牌时,你额外摸${player.getHp(true)}张牌(x为你受到的伤害值)`;
    },
    skill: {
      trigger: {
        player: ['damageBegin', 'drawBegin']
      },
      forced: true,
      _priority: 10,
      lastDo: true,
      mod: {
        maxHandcardBase(player, num) {
          return num + player.getHp(true);
        }
      },
      filter(event, player) {
        let name = event.name;
        if (name == 'damage') {
          if (player.countCards('hes') < event.num + 1) return false;
          return !event.numFixed;
        }
        return true;
      },
      async content(event, trigger, player) {
        let name = trigger.name;
        if (name == 'damage') {
          const bool = await player.
          chooseToDiscard('hes', `〖塞利格的溶解之心〗:弃置${trigger.num + 1}张牌防止之`, trigger.num + 1).
          set('ai', (card) => {
            if (_status.event.goon) return 12 - get.value(card);
            return 0;
          }).
          set(
            'goon',
            (() => {
              if (get.damageEffect(player, trigger.source, player) > 0) return true;
              return false;
            })()
          ).
          forResultBool();
          if (bool) trigger.changeToZero();
        } else {
          trigger.num += player.getHp(true);
        }
      }
    }
  },
  xjzh_qishu_lietiangong: {
    translate: '猎天弓',
    translate_info: '<li>替换莫瑞娜的技能〖乱射〗;<li>〖乱射〗使用的牌额外结算一次,且因〖乱射〗造成伤害令目标获得<目盲>',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px>——<莫瑞娜拿起她的弓,瞄准了太阳.阳光灼伤了她的双眼,但箭矢依然没有落空.受伤的太阳隐藏了起来,从而带来了第一个夜晚.> - <猎天传奇></font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:${230 * 5}碎片<br><br>专属角色:莫瑞娜`,
    noTranslate: true,
    level: 4,
    filter: 'xjzh_diablo_moruina',
    replaceSkill: {
      xjzh_diablo_luanshe: {
        trigger: {
          player: 'useCard2'
        },
        forced: true,
        _priority: 3,
        filter(event, player) {
          if (!event.cards || !event.cards.length) return false;
          if (event.cards[0].name != 'sha') return false;
          return game.hasPlayer((current) => current != event.targets[0] && current != player);
        },
        async content(event, trigger, player) {
          trigger.set('xjzh_diablo_luanshe', true);
          let targets = game.filterPlayer((current) => current != trigger.targets[0] && current != player),
            num = get.rand(1, Math.min(3, targets.length));
          targets = targets.randomGets(num);
          for (let target of targets) {
            let obj = lib.skill.xjzh_diablo_luanshe.seatNum(player, target);
          }
          trigger.targets.addArray(targets);
          game.log(targets, '成为此【杀】的额外目标');
          trigger.effectCount++;
          game.log(player, '的技能〖乱射〗额外结算一次');
        },
        ai: {
          order: 8,
          result: {
            player(player, target, card) {
              if (card.name != 'sha') return;
              let targets = game.filterPlayer((current) => current != target && current != player),
                num = 0;
              for (let name of targets) {
                if (player.isFriendsOf(name)) num++;
              }
              if (num > targets - num) return 0.2;
              return 1.5;
            }
          }
        }
      }
    },
    replaceSkillInfo: {
      xjzh_diablo_luanshe_info: '锁定技,当你使用【杀】指定目标时,此【杀】增加1-3个且不为你和初始目标的随机额外目标.'
    },
    skill: {
      trigger: {
        source: 'damageAfter'
      },
      forced: true,
      _priority: 10,
      lastDo: true,
      filter(event, player) {
        let evt = event.getParent(2);
        if (evt && !evt.xjzh_diablo_luanshe) return false;
        return !event.numFixed;
      },
      async content(event, trigger, player) {
        trigger.player.changexjzhBUFF('mumang', 1);
      }
    }
  },
  xjzh_qishu_mingyunzhiquan: {
    translate: '命运之拳',
    translate_info: '<li>你的会心几率+(0.1-77.7)%;<li>你造成伤害有几率+(1-3);<br><br><li>会心:当你对其他角色造成伤害后,你有(0.1-51.8)%几率令其获得随机一层减益buff.',
    dynamicTranslate(player) {
      let storage = player.storage.xjzh_qishu_mingyunzhiquan;
      return `<li>你的会心几率+${(storage.get('huixin') / 10).toFixed(2).replace(/\.00$/, '')}%;<li>你造成伤害有${(storage.get('damage')[0] * 100).toFixed(2).replace(/\.00$/, '')}%几率+${storage.get('damage')[1]};<br><br><li>会心:当你对其他角色造成伤害后,你有${(storage.get('buff') / 10).toFixed(2).replace(/\.00$/, '')}%几率令其获得随机一层减益buff.`;
    },
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px><你会让恐惧欺骗你一生,还是会不惜一切代价去领悟真谛？毕竟,死亡只不过是我们用来交换生命的钱币.> - 祖尔克</font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:230碎片`,
    noTranslate: true,
    level: 4,
    async init(player) {
      let storage = new Map([
      ['huixin', get.rand(100, 777)],
      ['damage', [Math.random(), get.rand(1, 3)]],
      ['buff', get.rand(100, 518)]]
      );
      player.xjzhHuixin ? player.xjzhHuixin += storage.get('huixin') / 1000 : player.xjzhHuixin = 0.1 + storage.get('huixin') / 1000;
      player.storage.xjzh_qishu_mingyunzhiquan = storage;
    }, //这个init只有gamestart会init,后面获得不会init
    skill: {
      trigger: {
        source: 'damageBegin1'
      },
      forced: true,
      charlotte: true,
      superChocolate: true,
      _priority: 10,
      filter(event, player) {
        return !event.numFixed;
      },
      async content(event, trigger, player) {
        if (!player.storage.xjzh_qishu_mingyunzhiquan) {
          let storage = new Map([
          ['huixin', get.rand(100, 777)],
          ['damage', [Math.random(), get.rand(1, 3)]],
          ['buff', get.rand(100, 518)]]
          );
          player.xjzhHuixin ? player.xjzhHuixin += storage.get('huixin') / 1000 : player.xjzhHuixin = 0.1 + storage.get('huixin') / 1000;
          player.storage.xjzh_qishu_mingyunzhiquan = storage;
        } //QQQ
        let storage = player.storage.xjzh_qishu_mingyunzhiquan;
        if (Math.random() < storage.get('damage')[0]) trigger.num += storage.get('damage')[1];
        if (Math.random() < storage.get('buff') / 1000 * (1 + player.xjzhHuixin)) {
          player.
          when({ source: 'damageAfter' }).
          assign({
            firstDo: true
          }).
          then(() => {
            let deBuff = lib.xjzh_Debuff.randomGet();
            trigger.player.changexjzhBUFF(deBuff, 1);
            game.log(player, `因<span style="color: yellow;">〖命运之拳〗</span>触发了会心一击,${get.translation(trigger.player)}获得1层${get.xjzhBUFFtranslate(deBuff)}`);
          });
        }
      }
    }
  },
  xjzh_qishu_junmao: {
    translate: '谐角之冠',
    translate_info: '你所有限制回合发动次数的主动技能+2次发动次数.',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px><这个头饰曾经是一个伪装成宫廷法师的刺客佩戴的.她的背叛行径虽然最终暴露,但在那之前,她已经成功用魔法诅咒了国王和他的整个家族.> - <阿斯顿家族的陨落></font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:230碎片`,
    noTranslate: true,
    level: 4,
    async init(player) {
      let list = player.getSkills(null, false, false).filter(function (skill) {
        let info = lib.skill[skill];
        return info && !info.equipSkill && !info.cardSkill && !lib.skill.global.includes(skill) && info.usable && typeof info.usable == 'number';
      });
      if (!list.length) return;
      for await (let skill of list) {
        let info = get.info(skill);
        if (!info.enable || info.enable != 'phaseUse') continue;
        let newSkill = skill + '_xiejiaozhiguan';
        if (!lib.skill[newSkill]) {
          lib.skill[newSkill] = lib.skill[skill];
          lib.skill[newSkill].usable = info.usable + 2;
          lib.translate[newSkill] = get.translation(skill);
          let text = get.translation(skill + '_info');
          lib.translate[newSkill + '_info'] = game.xjzh_updateText(text, 2);
          if (lib.dynamicTranslate[skill]) {
            const translates = lib.dynamicTranslate[skill];
            lib.dynamicTranslate[newSkill] = function (player) {
              return game.xjzh_updateText(translates.apply(null, arguments), 2);
            };
          }
        }
        player.changeSkills([newSkill], [skill]);
      }
    },
    skill: {
      trigger: {
        player: 'changeSkillsAfter'
      },
      forced: true,
      charlotte: true,
      superChocolate: true,
      _priority: 10,
      filter(event, player) {
        if (!event.addSkill || !event.addSkill.length) return false;
        if (event.parent.name == 'xjzh_qishu_junmao') return false;
        return event.addSkill.every((skill) => {
          return !skill.includes('_xiejiaozhiguan');
        });
      },
      async content(event, trigger, player) {
        let skills = trigger.addSkill.filter((skill) => {
          return !skill.includes('_xiejiaozhiguan');
        });
        if (!skills.length) return;
        for await (let skill of skills) {
          let info = get.info(skill);
          if (!info.enable || info.enable != 'phaseUse') continue;
          let newSkill = skill + '_xiejiaozhiguan';
          if (!lib.skill[newSkill]) {
            lib.skill[newSkill] = lib.skill[skill];
            lib.skill[newSkill].usable = info.usable + 2;
            lib.translate[newSkill] = get.translation(skill);
            let text = get.translation(skill + '_info');
            lib.translate[newSkill + '_info'] = game.xjzh_updateText(text, 2);
            if (lib.dynamicTranslate[skill]) {
              const translates = lib.dynamicTranslate[skill];
              lib.dynamicTranslate[newSkill] = function (player) {
                return game.xjzh_updateText(translates.apply(null, arguments), 2);
              };
            }
          }
          player.changeSkills([newSkill], [skill]);
        }
      }
    }
  },
  xjzh_qishu_tongkuhushou: {
    translate: '痛苦吞食者',
    translate_info: '<li>你使用基本牌造成伤害令其获得等量个<痛>标记;<li>你使用牌对标记的目标造成伤害时,令场上所有被标记的角色受到额外x点伤害,每因此造成一点伤害,你摸一张牌(x为其拥有的标记数量).',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px>这副手套以督瑞尔的甲壳碎片制成, 戴着它或被它击中都会导致剧痛, 如同将手插入千万片碎玻璃一样.</font></span>',
    extra: '等阶:4<br><>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:10%<br><br>兑换所需:230碎片',
    noTranslate: true,
    level: 4,
    skill: {
      trigger: {
        source: 'damageSource'
      },
      forced: true,
      _priority: 10,
      lastDo: true,
      marktext: '痛',
      intro: {
        content: '#'
      },
      filter(event, player, name) {
        if (!event.cards || !event.cards.length) return false;
        return !event.numFixed && !event.cancelled;
      },
      async content(event, trigger, player) {
        if (!trigger.player.hasMark('xjzh_qishu_tongkuhushou')) {
          if (get.type(trigger.cards[0]) == 'basic') await trigger.player.addMark('xjzh_qishu_tongkuhushou', trigger.num, false);
        } else {
          let targets = game.filterPlayer((current) => current.hasMark('xjzh_qishu_tongkuhushou'));
          for await (let target of targets) {
            target.damage(target.countMark('xjzh_qishu_tongkuhushou'), 'nocard', player)._triggered = null;
            target.clearMark('xjzh_qishu_tongkuhushou');
          }
        }
      }
    }
  },
  xjzh_qishu_jiandun: {
    translate: '坚毅之盾',
    translate_info: '当你受到伤害后,你获得等量护甲,此后每个你的回合开始时,若你有护甲,你将一点护甲转为体力上限.',
    extra: '等阶:3<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:17.5%<br><br>兑换所需:150碎片',
    noTranslate: true,
    level: 3,
    skill: {
      trigger: {
        player: ['damageAfter', 'phaseBegin']
      },
      forced: true,
      _priority: 10,
      lastDo: true,
      filter(event, player, name) {
        if (name == 'phaseBegin') return player.hujia > 0;
        if (name == 'damageAfter' && !event.hujia) return !event.numFixed || !event.cancelled;
        return false;
      },
      async content(event, trigger, player) {
        if (trigger.name == 'damage') {
          await player.changeHujia(trigger.num);
        } else {
          player.changeHujia(-1);
          player.gainMaxHp();
        }
      }
    }
  },
  xjzh_qishu_suoding: {
    translate: '锁定目标',
    translate_info: '你使用非装备牌和非延时锦囊牌指定目标不小于2时,你可以为此牌重新指定一个目标(需合法),此牌根据未重新指定目标前的目标数量对其额外生效等量次数.',
    extra: '等阶:4<br><>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:10%<br><br>兑换所需:230碎片',
    noTranslate: true,
    level: 4,
    skill: {
      trigger: {
        player: 'useCard'
      },
      forced: true,
      _priority: 10,
      lastDo: true,
      filter(event, player) {
        if (event.targets.length < 2) return false;
        return get.type(event.card) != 'delay' && get.type(event.card) != 'equip';
      },
      async content(event, trigger, player) {
        const targets = await player.
        chooseTarget(1, `〖锁定目标〗:为${get.translation(trigger.card)}重新指定一个目标并令其额外结算${trigger.targets.length}次`, (card, player, target) => {
          return player.canUse(_status.event.card, target, false);
        }).
        set('ai', (target) => {
          let trigger = _status.event.getTrigger();
          let player = get.player();
          return get.effect(target, trigger.card, player, player);
        }).
        set('card', trigger.card).
        forResultTargets();
        if (targets) {
          let num = trigger.targets.length;
          trigger.targets = targets;
          trigger.effectCount += num;
          game.log(trigger.card, '额外结算', num, '次');
        }
      }
    }
  },
  xjzh_qishu_fenlie: {
    translate: '分裂箭矢',
    translate_info: '你使用不指定为全部目标的牌可以额外指定1个目标.',
    extra: '等阶:5<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:10%<br><br>兑换所需:320碎片',
    noTranslate: true,
    level: 5,
    status: {
      1: [1, 250],
      2: [2, 350],
      3: [3, 500],
      4: [4, 720],
      5: [5, 0]
    },
    maxUp: 5,
    skill: {
      trigger: {
        player: 'useCard2'
      },
      forced: true,
      _priority: 9,
      lastDo: true,
      filter(event, player) {
        var info = get.info(event.card);
        if (info.allowMultiple == false) return false;
        if (event.targets && !info.multitarget) {
          if (
          game.hasPlayer((current) => {
            return !event.targets.includes(current) && player.canUse(event.card, current, false);
          }))
          {
            return true;
          }
        }
        return false;
      },
      async content(event, trigger, player) {
        let num = lib.xjzh_qishuyaojians.xjzh_qishu_fenlie.status[lib.config.xjzh_qishuyaojians.levelEquip.item.level][0];
        let list = num == 1 ? 1 : [1, Math.min(num, game.players.length - trigger.targets.length)];
        const targets = await player.
        chooseTarget(list, `〖分裂箭矢〗:为${get.translation(trigger.card)}额外指定一个目标`, (card, player, target) => {
          if (_status.event.targets.includes(target)) return false;
          return player.canUse(_status.event.card, target, false);
        }).
        set('ai', (target) => {
          let trigger = _status.event.getTrigger();
          let player = _status.event.player;
          return get.effect(target, trigger.card, player, player);
        }).
        set('targets', trigger.targets).
        set('card', trigger.card).
        forResultTargets();
        if (targets) {
          trigger.targets.addArray(result.targets);
          game.log(trigger.player, '成为', trigger.card, '的额外目标');
        }
      }
    }
  },
  xjzh_qishu_waxilidedaogao: {
    translate: '瓦西里的祷告',
    translate_info: '你的熊人技能也视为大地技能,你的所有大地技能等级+3,你的体力上限+3,每个回合开始时,以1:10(体力/灵力)的比例消耗灵力值以回复体力值.',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px><在面向大海的瓦西里雕像处生长着一些大橡树的根,它们有时会出现向后弯曲的情况,根内充满了狂暴的魔法.> - 巴雷特的<名器谱></font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:${230 * 5}碎片<br><br>专属角色:亚非克拉<br><br>冲突装备:风暴咆哮`,
    noTranslate: true,
    level: 4,
    conflict: ['xjzh_qishu_fengbaopaoxiao'],
    filter: 'xjzh_diablo_yafeikela',
    precede: ['xjzh_qishu_wuyan'],
    async init(player) {
      if (!get.is.playerNames(player, 'xjzh_diablo_yafeikela')) return;
      let skills = player.getSkills(null, false, false).filter(function (skill) {
        let info = lib.skill[skill];
        if (lib.skill.global.includes(skill)) return false;
        return info && (info.xjzh_xiongrenSkill || info.xjzh_dadiSkill);
      });
      if (skills.length) {
        for await (let skill of skills) {
          let info = get.info(skill);
          if (info.xjzh_xiongrenSkill) info.xjzh_dadiSkill = true;
        }
        do {
          let skill = skills.shift(),
            info = get.info(skill);
          if (info.level) info.level += 3;
        } while (skills.length);
      }
      await player.gainMaxHp(3);
      await player.recoverTo(player.maxHp);
    },
    skill: {
      trigger: {
        global: 'phaseBefore'
      },
      forced: true,
      _priority: 10,
      lastDo: true,
      filter(event, player) {
        if (player.isHealthy()) return false;
        return get.xjzhMp(player) >= 10;
      },
      async content(event, trigger, player) {
        let num = Math.floor(player.xjzhMp / 10);
        let num2 = Math.min(num, player.getDamagedHp(true));
        player.changexjzhMp(-(num2 * 10));
        player.recover(num2);
        game.log(player, '将', num2 * 10, '点灵力转化为了', num2, '点体力值');
      }
    }
  },
  xjzh_qishu_wuyan: {
    translate: '无餍之怒',
    translate_info: '禁用你的技能〖灵兽〗,你锁定形态为熊形态,你的熊人技能不再消耗灵力,改为回复等量灵力.',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px><灰烬之日>到来时,伟大的德鲁伊纳菲恩提醒他的门徒们说,为了保护图尔·杜拉不受阿斯塔洛斯的烈焰伤害,没有什么是不能牺牲的,哪怕他们的人性.</font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:${230 * 5}碎片<br><br>专属角色:亚非克拉<br><br>冲突装备:疯狼的狂喜`,
    noTranslate: true,
    level: 4,
    conflict: ['xjzh_qishu_fenglangkx'],
    filter: 'xjzh_diablo_yafeikela',
    unequip: ['xjzh_qishu_waxilidedaogao'],
    async init(player) {
      if (!get.is.playerNames(player, 'xjzh_diablo_yafeikela')) return;
      let node;
      if (player.name2 && player.name2 == 'xjzh_diablo_yafeikela') {
        node = player.node.name2;
      } else {
        node = player.node.name;
      }
      player.setAvatar('xjzh_diablo_yafeikela', 'xjzh_diablo_xiong');
      node.innerHTML = get.translation('xjzh_diablo_xiong');
      let skills = lib.character.xjzh_diablo_xiong[3];
      player.addSkill(skills);
    }
  },
  xjzh_qishu_fengbaopaoxiao: {
    translate: '风暴咆哮',
    translate_info: '你的狼人技能也视为风暴技能,你的所有风暴技能等级+3,你的会心几率+50%,你获得25%-35%灵力消耗减免.',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px><孩子,聆听风暴的天籁之音吧.它有自己的节奏,自己的旋律.听它那美妙的歌声,也许有一天你也能加入进来,与之合鸣.> - 艾蕊达</font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:${230 * 5}碎片<br><br>专属角色:亚非克拉<br><br>冲突装备:瓦西里的祷告`,
    noTranslate: true,
    level: 4,
    conflict: ['xjzh_qishu_waxilidedaogao'],
    filter: 'xjzh_diablo_yafeikela',
    precede: ['xjzh_qishu_fenglangkx'],
    async init(player) {
      if (!get.is.playerNames(player, 'xjzh_diablo_yafeikela')) return;
      let skills = player.getSkills(null, false, false).filter(function (skill) {
        let info = lib.skill[skill];
        if (lib.skill.global.includes(skill)) return false;
        return info && (info.xjzh_langrenSkill || info.xjzh_fengbaoSkill);
      });
      if (skills.length) {
        for await (let skill of skills) {
          let info = get.info(skill);
          if (info.xjzh_langrenSkill) info.xjzh_fengbaoSkill = true;
        }
        do {
          let skill = skills.shift(),
            info = get.info(skill);
          if (info.level) info.level += 3;
        } while (skills.length);
      }
      let num = get.rand(25, 35) / 100;
      player.xjzhHuixin ? player.xjzhHuixin += 0.5 : player.xjzhHuixin = 0.5;
      player.xjzhReduce ? player.xjzhReduce += num : player.xjzhReduce = num;
    }
  },
  xjzh_qishu_fenglangkx: {
    translate: '疯狼的狂喜',
    translate_info: '禁用你的技能〖灵兽〗,你锁定形态为狼形态,你的灵力上限+25.<br><br><li>会心:你释放狼人技能时有25%几率获得20点灵力,',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px><他不是诅咒的受害者 - 这都是他自找的.就算他的皮肤裂开,骨骼碎裂,他的笑声也从未停止.> - 疯狂贵族的故事</font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:${230 * 5}碎片<br><br>专属角色:亚非克拉<br><br>冲突装备:无餍之怒`,
    noTranslate: true,
    level: 4,
    conflict: ['xjzh_qishu_wuyan'],
    filter: 'xjzh_diablo_yafeikela',
    unequip: ['xjzh_qishu_fengbaopaoxiao'],
    async init(player) {
      if (!get.is.playerNames(player, 'xjzh_diablo_yafeikela')) return;
      player.changexjzhmaxMp(25);
      player.changexjzhMp(25);
      let node;
      if (player.name2 && player.name2 == 'xjzh_diablo_yafeikela') {
        node = player.node.name2;
      } else {
        node = player.node.name;
      }
      player.setAvatar('xjzh_diablo_yafeikela', 'xjzh_diablo_lang');
      node.innerHTML = get.translation('xjzh_diablo_lang');
      let skills = lib.character.xjzh_diablo_lang[3];
      player.addSkill(skills);
    },
    skill: {
      trigger: {
        player: ['logSkillBegin', 'useSkillBegin']
      },
      silent: true,
      _priority: -1,
      filter(event, player) {
        let skills = event.skill;
        let info = get.info(skills);
        if (lib.skill.global.includes(event.skill)) return false;
        if (info && !info.xjzh_langrenSkill) return false;
        return Math.random() <= 0.25 * (1 + player.xjzhHuixin);
      },
      async content(event, trigger, player) {
        player.changexjzhMp(20);
      }
    }
  },
  xjzh_qishu_wumingzhe: {
    translate: '无名者兜帽',
    translate_info: '你的会心几率+35%,你对被控制的角色使用牌无距离和次数限制,且被控制的角色的手牌对你始终可见.',
    append_info: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px><他被逐出了公会,名字也从书中被划去.彻底抹除他的存在就是对他的惩罚.> - 摘录于一张烧焦的羊皮纸</font></span>',
    extra: `等阶:4<br><br>获取:抽奖、兑换、对局<br><br>抽奖概率:10%<br><br>兑换所需:${230 * 5}碎片<br><br>专属角色:娜塔亚`,
    noTranslate: true,
    level: 4,
    filter: 'xjzh_diablo_nataya',
    async init(player) {
      if (!get.is.playerNames(player, 'xjzh_diablo_nataya')) return;
      player.xjzhHuixin ? player.xjzhHuixin += 0.35 : player.xjzhHuixin = 0.35;
    },
    skill: {
      mod: {
        cardUsableTarget(card, player, target) {
          if (get.xjzh_deEffect(target)) return true;
        },
        targetInRange(card, player, target) {
          if (get.xjzh_deEffect(target)) return true;
        }
      },
      ai: {
        viewHandcard: true,
        skillTagFilter(player, tag, arg) {
          if (tag == 'viewHandcard') {
            if (player == arg) return false;
            if (get.xjzh_deEffect(arg)) return true;
            return false;
          }
        }
      }
    }
  },
  xjzh_qishu_daojian: {
    translate: '疾疫刀尖',
    translate_info: '你使用【杀】造成伤害附加毒属性伤害且该伤害+1.',
    extra: '等阶:1<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:40%<br><br>兑换所需:50碎片',
    noTranslate: true,
    level: 1,
    skill: {
      trigger: {
        source: 'damageBegin'
      },
      forced: true,
      _priority: -1,
      lastDo: true,
      filter(event, player) {
        return event.card && event.card.name == 'sha';
      },
      async content(event, trigger, player) {
        trigger.num++;
        game.setNature(trigger, 'poison', true);
      },
      ai: {
        poisondamage: true
      }
    }
  },
  xjzh_qishu_fuchou: {
    translate: '复仇之笼',
    translate_info: '你所受到的伤害的30%-50%将会被储存起来,直到该数值不小于1时,你可以对一名其他角色以该数值的300%造成等量火焰伤害(四舍五入),若如此做,你清除储存的伤害数值.',
    extra: '等阶:3<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:17.5%<br><br>兑换所需:150碎片',
    noTranslate: true,
    level: 3,
    skill: {
      trigger: {
        player: 'damageAfter'
      },
      forced: true,
      _priority: -1,
      lastDo: true,
      init(player, skill) {
        if (!player.storage[skill]) player.storage[skill] = 0;
      },
      async content(event, trigger, player) {
        let num = trigger.num,
          storage = player.storage.xjzh_qishu_fuchou;
        let num2 = get.rand(30, 50);
        storage += num * num2;
        game.log(player, `受到的伤害的${num2}%将被储存起来,数值为`, num * num2);
        if (storage >= 1) {
          let damageNum = Math.round(storage) * 3;
          const targets = await player.
          chooseTarget(`〖复仇之笼〗:请选择一名其他角色并对其造成${damageNum}点火焰伤害`, (card, player, target) => {
            return target != player;
          }).
          set('ai', (target) => {
            return get.damageEffect(target, _status.event.player, _status.event.player, 'fire');
          });
          if (targets) {
            targets[0].damage(damageNum, player, 'nocard', 'fire');
            storage = 0;
          }
        }
      }
    }
  },
  xjzh_qishu_wuqijingtong: {
    translate: '武器精通',
    translate_info: '你无法再装备武器牌,改为将一张虚拟同名牌置于武将牌上并视为你拥有该武器牌的技能;你武将牌上的每张武器牌为你提供+1进攻距离.',
    extra: '等阶:3<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:17.5%<br><br>兑换所需:150碎片',
    noTranslate: true,
    level: 3,
    skill: {
      trigger: {
        player: 'equipBegin'
      },
      forced: true,
      _priority: -1,
      lastDo: true,
      mod: {
        globalFrom(from, to, distance) {
          var cards = from.getExpansions('xjzh_qishu_wuqijingtong');
          if (!cards.length) return distance;
          return distance - cards.length;
        },
        aiOrder(player, card, num) {
          var cards = player.getExpansions('xjzh_qishu_wuqijingtong'),
            list = [];
          if (!cards) return num;
          for (var i of cards) {
            if (!list.includes(i.name)) list.push(i.name);
          }
          if (list.includes(card.name)) return num - 10;
        }
      },
      marktext: '剑',
      intro: {
        name: '武器精通',
        content: 'expansion',
        markcount: 'expansion'
      },
      filter(event, player) {
        return get.subtype(event.card) == 'equip1';
      },
      onremove(player, skill) {
        var cards = player.getExpansions(skill);
        if (cards.length) {
          for (var card of cards) {
            var info = get.info(card);
            if (!info.skills) continue;
            for (var skill of info.skills) {
              player.removeSkill(skill, true);
            }
          }
          player.loseToDiscardpile(cards);
        }
        if (!player.hasSkill(skill)) player.addSkills(skill);
      },
      content() {
        'step 0';
        var cards = player.getExpansions('xjzh_qishu_wuqijingtong'),
          list = [];
        if (!cards.length) event.goto(1);
        for (var i of cards) {
          if (!list.includes(i.name)) list.push(i.name);
        }
        if (list.includes(trigger.card.name)) event.goto(3);
        'step 1';
        var cards = game.createCard(trigger.card, trigger.card.suit, trigger.card.number);
        player.addToExpansion(cards, player, 'gain2').gaintag.add('xjzh_qishu_wuqijingtong');
        'step 2';
        var cards = player.getExpansions('xjzh_qishu_wuqijingtong');
        for (var card of cards) {
          var info = get.info(card);
          if (!info.skills) continue;
          for (var skill of info.skills) {
            player.addSkill(skill);
          }
        }
        'step 3';
        trigger.cancel(null, null, 'notrigger');
        player.loseToDiscardpile(trigger.card);
      }
    }
  },
  xjzh_qishu_fangjujingtong: {
    translate: '防具精通',
    translate_info: '你无法再装备防具牌,改为将一张虚拟同名牌置于武将牌上并视为你拥有该防具牌的技能;你武将牌上的每张防具牌为你提供+1防御距离.',
    extra: '等阶:3<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:17.5%<br><br>兑换所需:150碎片',
    noTranslate: true,
    level: 3,
    skill: {
      trigger: {
        player: 'equipBegin'
      },
      forced: true,
      _priority: -1,
      lastDo: true,
      mod: {
        globalTo(from, to, distance) {
          var cards = to.getExpansions('xjzh_qishu_fangjujingtong');
          if (!cards.length) return distance;
          return distance + cards.length;
        },
        aiOrder(player, card, num) {
          var cards = player.getExpansions('xjzh_qishu_fangjujingtong'),
            list = [];
          if (!cards) return num;
          for (var i of cards) {
            if (!list.includes(i.name)) list.push(i.name);
          }
          if (list.includes(card.name)) return num - 10;
        }
      },
      marktext: '防',
      intro: {
        name: '防具精通',
        content: 'expansion',
        markcount: 'expansion'
      },
      filter(event, player) {
        return get.subtype(event.card) == 'equip2';
      },
      onremove(player, skill) {
        var cards = player.getExpansions(skill);
        if (cards.length) {
          for (var card of cards) {
            var info = get.info(card);
            if (!info.skills) continue;
            for (var skill of info.skills) {
              player.removeSkill(skill, true);
            }
          }
          player.loseToDiscardpile(cards);
        }
        if (!player.hasSkill(skill)) player.addSkills(skill);
      },
      content() {
        'step 0';
        var cards = player.getExpansions('xjzh_qishu_fangjujingtong'),
          list = [];
        if (!cards.length) event.goto(1);
        for (var i of cards) {
          if (!list.includes(i.name)) list.push(i.name);
        }
        if (list.includes(trigger.card.name)) event.goto(3);
        'step 1';
        var cards = game.createCard(trigger.card, trigger.card.suit, trigger.card.number);
        player.addToExpansion(cards, player, 'gain2').gaintag.add('xjzh_qishu_fangjujingtong');
        'step 2';
        var cards = player.getExpansions('xjzh_qishu_fangjujingtong');
        for (var card of cards) {
          var info = get.info(card);
          if (!info.skills) continue;
          for (var skill of info.skills) {
            player.addSkill(skill);
          }
        }
        'step 3';
        trigger.cancel(null, null, 'notrigger');
        player.loseToDiscardpile(trigger.card);
      }
    }
  },
  xjzh_qishu_binglengjiqiao: {
    translate: '冰冷技巧',
    translate_info: '你有30%几率防止冰属性伤害;当你防止冰属性伤害后,你视为对其使用一张不计入次数的【冰杀】;你造成冰属性伤害有30%几率暴击,造成额外100%基础伤害点伤害.',
    extra: '等阶:3<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:17.5%<br><br>兑换所需:150碎片',
    noTranslate: true,
    level: 3,
    skill: {
      trigger: {
        player: 'damageBegin1',
        source: 'damageBegin1'
      },
      forced: true,
      _priority: -1,
      lastDo: true,
      filter(event, player) {
        if (!game.hasNature(event, 'ice')) return false;
        return Math.random() <= 0.3;
      },
      content() {
        'step 0';
        if (trigger.source == player && trigger.player != player) {
          event.goto(2);
          return;
        }
        trigger.changeToZero();
        'step 1';
        if (!trigger.source || trigger.nosource) return;
        player.useCard({ name: 'sha', nature: 'ice' }, trigger.source, false).set('addCount', false);
        event.finish();
        'step 2';
        game.xjzh_Criticalstrike(player, trigger.num, 2, null, true);
      },
      ai: {
        effect: {
          target: -0.7
        }
      }
    }
  },
  xjzh_qishu_qiyue: {
    translate: '恶念契约',
    translate_info: '你的回合开始时,你从以下3种效果种选择一种:1,获得一点护甲;2,装备一张攻击距离为2的武器牌;3,摸两张牌.',
    extra: '等阶:2<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:30%<br><br>兑换所需:100碎片',
    noTranslate: true,
    level: 2,
    skill: {
      trigger: {
        player: 'phaseBefore'
      },
      forced: true,
      _priority: -1,
      lastDo: true,
      content() {
        'step 0';
        var list = ['获得一点护甲', '装备一张攻击范围为3的武器牌', '摸两张牌'];
        player.chooseControlList(get.prompt(event.name, player), list).set('ai', function () {
          var player = _status.event.player;
          if (player.hp < player.maxHp / 2) {
            if (player.hp == 1) return 0;
            return 1;
          }
          return 2;
        });
        'step 1';
        if (result.control != 'cancel2') {
          switch (result.index) {
            case 0:{
                player.changeHujia(1);
                break;
              }
            case 1:{
                player.equip(
                  get.cardPile(function (cardx) {
                    return get.subtype(cardx) == 'equip1' && get.info(cardx).distance && get.info(cardx).distance.attackFrom == -2;
                  })
                );
                break;
              }
            case 2:{
                player.draw(2);
                break;
              }
          }
        }
      }
    }
  },
  xjzh_qishu_titoushi: {
    translate: '剃头师',
    translate_info: '你所造成的伤害将被其免疫之,40-20秒后将以每10秒提高70%(四舍五入)令其流失等量体力.',
    extra: '等阶:4<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:5%<br><br>兑换所需:230碎片',
    noTranslate: true,
    level: 4,
    skill: {
      trigger: {
        source: 'damageBegin'
      },
      forced: true,
      _priority: 6,
      filter(event, player) {
        return !event.numFixed && !event.cancelled;
      },
      async content(event, trigger, player) {
        let num = get.rand(20000, 40000);
        let numx = num / 1000 * 0.07;
        let damageNum = Math.round(trigger.num * (1 + numx));
        game.log(trigger.player, '受到', player, '的', '#y〖剃头师〗', '影响', trigger.num, '点伤害将于', num / 1000, 's后转为流失', damageNum, '点体力');
        setTimeout(() => {
          if (trigger.player.isAlive()) {
            trigger.player.loseHp(damageNum);
            game.log(trigger.player, '因', player, '的', '#y〖剃头师〗', '流失', damageNum, '点体力');
          }
        }, num);
        trigger.changeToZero();
      }
    }
  },
  xjzh_qishu_yaojishi: {
    translate: '药剂师',
    translate_info: '你造成伤害有25-40%几率令其视为受到火、毒、冰属性伤害,每有一种额外的属性伤害,该伤害+1.',
    extra: '等阶:2<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:30%<br><br>兑换所需:100碎片',
    noTranslate: true,
    level: 2,
    skill: {
      trigger: {
        source: 'damageBegin'
      },
      forced: true,
      _priority: 7,
      filter(event, player) {
        let num = get.rand(25, 40);
        if (Math.random() > num / 100) return false;
        if (event.getParent('xjzh_qishu_yaojishi').name == 'xjzh_qishu_yaojishi') return false;
        let list = get.natureList(event, player),
          list2 = ['poison', 'ice', 'fire'],
          num2 = 0;
        list2.forEach((item) => {
          if (!list.includes(item)) num2++;
        });
        if (num >= 3) return false;
        return !event.numFixed && !event.cancelled;
      },
      async content(event, trigger, player) {
        let list = get.natureList(trigger, player),
          list2 = ['poison', 'ice', 'fire'],
          list3 = [];
        list2.forEach((item) => {
          if (!list.includes(item)) list3.push(item);
        });
        if (list3.length) {
          game.setNature(trigger, list3, true);
          trigger.num += list3.length;
        }
      }
    }
  },
  xjzh_qishu_wushitongku: {
    translate: '无视痛苦',
    translate_info: '你受到伤害有5-25%防止之,改为回复等量体力.',
    extra: '等阶:2<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:30%<br><br>兑换所需:100碎片',
    noTranslate: true,
    level: 2,
    skill: {
      trigger: {
        player: 'damageBegin'
      },
      forced: true,
      _priority: 3,
      filter(event, player) {
        var num = get.rand(5, 25);
        if (Math.random() <= num / 100) return false;
        return !event.numFixed && !event.cancelled;
      },
      content() {
        trigger.player.recover(trigger.num);
        trigger.changeToZero();
      }
    }
  },
  xjzh_qishu_siwanghuanxing: {
    translate: '死亡缓刑',
    translate_info: '你造成伤害后有15-35%几率令其获得一种随机减益buff,你对有减益buff的角色造成伤害根据每1种减益buff附加额外1点毒属性伤害.',
    extra: '等阶:2<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:30%<br><br>兑换所需:100碎片',
    noTranslate: true,
    level: 2,
    skill: {
      trigger: {
        source: 'damageEnd'
      },
      forced: true,
      _priority: 2,
      content() {
        'step 0';
        if (!trigger.cancelled && !trigger.numFixed) {
          var deBuff = lib.xjzh_Debuff.slice(0);
          var num = get.rand(15, 35);
          if (Math.random() <= num / 100) {
            trigger.player.changexjzhBUFF(deBuff.randomGet(), 1);
          }
        }
        'step 1';
        var list = get.xjzhBUFFList(trigger.player, false);
        trigger.player.damage(list.length, player, 'poison', 'nocard');
      }
    }
  },
  xjzh_qishu_shengmingfusu: {
    translate: '生命复苏',
    translate_info: '锁定技,当一名角色因你回复体力时,其回复的体力值基础数值+1,若其处于濒死阶段,则额外+1回复基础数值.',
    extra: '等阶:1<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:40%<br><br>兑换所需:50碎片',
    noTranslate: true,
    level: 1,
    skill: {
      trigger: {
        global: 'recoverBegin'
      },
      _priority: 3,
      forced: true,
      filter(event, player) {
        return event.source == player;
      },
      async content(event, trigger, player) {
        trigger.num++;
        if (trigger.player.isDying()) trigger.num++;
      }
    }
  },
  xjzh_qishu_heianxuewu: {
    translate: '黑暗血舞',
    translate_info: '你的体力值大于体力上限的一半时,你使用[伤害]卡牌须失去一点体力值并令本次造成的伤害+1,但你无需再弃置此牌.',
    extra: '等阶:1<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:40%<br><br>兑换所需:50碎片',
    noTranslate: true,
    level: 1,
    skill: {
      trigger: {
        player: 'useCard'
      },
      forced: true,
      _priority: 3,
      filter(event, player) {
        return player.hp > Math.ceil(player.maxHp / 2) && get.tag(event.card, 'damage');
      },
      content() {
        'step 0';
        player.loseHp();
        'step 1';
        if (!trigger.baseDamage) trigger.baseDamage = 1;
        trigger.baseDamage++;
        'step 2';
        player.gain(trigger.card, player, 'gain2');
      }
    }
  },
  xjzh_qishu_jishudanyao: {
    translate: '集束弹药',
    translate_info: '你使用牌指定的目标有20%几率令其获得1层定身.',
    extra: '等阶:1<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:40%<br><br>兑换所需:50碎片',
    noTranslate: true,
    level: 1,
    skill: {
      trigger: {
        player: 'useCard2'
      },
      forced: true,
      _priority: 3,
      filter(event, player) {
        if (get.xjzhBUFFNum(player, 'dingshen') >= get.xjzhBUFFInfo('dingshen', 'limit')) return false;
        return Math.random() <= 0.2;
      },
      content() {
        player.changexjzhBUFF('dingshen', 1);
      }
    }
  },
  xjzh_qishu_talaxia: {
    translate: '塔拉夏之心',
    translate_info: '若你造成的属性伤害与你上次对其造成的属性伤害不同,你本次造成的属性伤害+1,且你有几率获得一张与你本次造成的属性伤害类型不同的【杀】.',
    extra: '等阶:2<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:30%<br><br>兑换所需:100碎片',
    noTranslate: true,
    level: 2,
    skill: {
      trigger: {
        source: 'damageBegin1'
      },
      forced: true,
      _priority: 3,
      filter(event, player) {
        if (!event.nature) return false;
        var history = player.getAllHistory('sourceDamage', function (evt) {
          return evt && evt.nature;
        });
        var naturex = history[history.length];
        if (naturex != event.nature) return true;
        return false;
      },
      content() {
        'step 0';
        trigger.num++;
        'step 1';
        var history = player.getAllHistory('sourceDamage', function (evt) {
          return evt && evt.nature;
        });
        var naturex = history[history.length];
        var nature2 = Array.from(lib.nature.keys()).remove(naturex).randomGet();
        if (Math.random() <= Math.random()) player.gain({ name: 'sha', nature: nature2 }, player, 'gain2', 'log');
      }
    }
  },
  xjzh_qishu_huanji: {
    translate: '还击',
    translate_info: '当你横置、翻面、判定区置入延时锦囊牌后,你可以令一名其他角色获得相同效果.',
    extra: '等阶:3<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:17.5%<br><br>兑换所需:150碎片',
    noTranslate: true,
    level: 3,
    skill: {
      trigger: {
        player: ['linkAfter', 'turnOverAfter', 'addJudgeAfter']
      },
      forced: true,
      _priority: 4,
      async content(event, trigger, player) {
        if (trigger.name == 'addJudge') {
          str = '〖还击〗:请选择将' + get.translation(trigger.cards[0]) + '置入一名其他角色的判定区';
        } else if (trigger.name == 'link') {
          str = '〖还击〗:请选择令一名其他角色横置武将牌';
        } else if (trigger.name == 'turnOver') {
          str = '〖还击〗:请选择令一名其他角色翻面';
        }
        const targets = await player.
        chooseTarget(str, (card, player, target) => {
          if (trigger.name == 'addJudge') {
            return target.canAddJudge(trigger.cards[0]);
          }
          return target != player;
        }).
        set('ai', (target) => {
          return get.attitude(player, target);
        }).
        forResultTargets();
        if (targets) {
          let target = targets[0];
          if (trigger.name == 'addJudge') {
            let card = game.createCard(trigger.card, trigger.card.number, trigger.card.suit);
            target.addJudge(card);
            target.$gain2(card);
          } else {
            target[trigger.name](true);
          }
        }
      }
    }
  },
  xjzh_qishu_maoxianmingyun: {
    translate: '冒险命运',
    translate_info: '若你造成伤害的点数不小于2,则该伤害增加100%,否则减少100％.',
    extra: '等阶:1<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:40%<br><br>兑换所需:50碎片',
    noTranslate: true,
    level: 1,
    skill: {
      trigger: {
        source: 'damageBegin1'
      },
      forced: true,
      _priority: 4,
      filter(event, player) {
        if (event.numFixed || event.cancelled) return false;
        return true;
      },
      content() {
        if (trigger.num >= 2) trigger.num *= 2;else
        trigger.changeToZero();
      }
    }
  },
  xjzh_qishu_chengfa: {
    translate: '惩罚',
    translate_info: '若你的攻击距离不小于3,你使用[伤害]卡牌指定目标后获得其随机一张牌.',
    extra: '等阶:2<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:30%<br><br>兑换所需:100碎片',
    noTranslate: true,
    level: 2,
    skill: {
      trigger: {
        player: 'useCardToPlayered'
      },
      forced: true,
      _priority: 4,
      filter(event, player) {
        if (!get.tag(event.card, 'damage')) return false;
        return player.getAttackRange() >= 3;
      },
      content() {
        var cards = trigger.target.getGainableCards(player, 'hej');
        player.gain(cards.randomGet(), 'log', trigger.target, 'gain2');
      }
    }
  },
  xjzh_qishu_guimeihuanying: {
    translate: '诡魅幻影',
    translate_info: '其他角色使用牌前,你有几率使用一张同名牌.',
    extra: '等阶:1<br><br>获取途径:抽奖、兑换、对局有概率掉落.<br><br>抽奖概率:40%<br><br>兑换所需:50碎片',
    noTranslate: true,
    level: 1,
    skill: {
      trigger: {
        global: 'useCard'
      },
      forced: true,
      _priority: 6,
      filter(event, player) {
        if (event.player == player) return false;
        if (!player.hasUseTarget(event.card)) return false;
        return game.xjzh_randomSuccess();
      },
      async content(event, trigger, player) {
        let card = game.createCard(trigger.card.name, trigger.card.number, trigger.card.suit);
        await player.chooseUseTarget(card);
      }
    }
  }
};
lib.xjzh_qishuyaojians = qishuyaojians;
const qishuGet = {
  xjzh_suipian() {
    if (typeof lib.config.xjzh_qishuyaojians.suipian != 'number') {
      lib.config.xjzh_qishuyaojians.suipian = 0;
      game.xjzhQishu_saveConfig();
    }
    return lib.config.xjzh_qishuyaojians.suipian;
  },
  xjzh_tokens() {
    if (typeof lib.config.xjzh_qishuyaojians.tokens != 'number') {
      lib.config.xjzh_qishuyaojians.tokens = 0;
      game.xjzhQishu_saveConfig();
    }
    return lib.config.xjzh_qishuyaojians.tokens;
  },
  xjzh_cailiaoTranslate(arg) {
    if (!arg) return '';
    let { ...list } = lib.config.xjzh_qishuyaojians.cailiao;
    return list[arg][0];
  },
  xjzh_cailiaoTranslateInfo(arg) {
    if (!arg) return '';
    let { ...list } = lib.config.xjzh_qishuyaojians.cailiao;
    return list[arg][2];
  },
  xjzh_cailiao(arg) {
    var { ...list } = lib.config.xjzh_qishuyaojians.cailiao;
    var list2 = Object.keys(list);
    if (typeof arg != 'string') {
      var obj = {};
      for (var target of list2) {
        if (!obj[target]) obj[target] = 0;
        obj[target] = list[target][1];
      }
      return obj;
    }
    if (!list2.includes(arg)) return 0;
    if (!list[arg][1]) return 0;
    return list[arg][1];
  },
  xjzh_qishuTranslate(arg) {
    if (!arg) return '';
    return lib.xjzh_qishuyaojians[arg].translate;
  },
  xjzh_equiped(playerName) {
    if (!playerName) return null;
    return lib.config.xjzh_qishuyaojians.player[playerName] || [];
  },
  xjzh_equipPlayer(name) {
    if (!lib.config.xjzh_qishuyaojians.equip) return [];
    if (!lib.config.xjzh_qishuyaojians.equip[name]) return [];
    return lib.config.xjzh_qishuyaojians.equip[name];
  },
  xjzh_equipInfo(name) {
    if (!lib.xjzh_qishuyaojians[name]) return {};
    return lib.xjzh_qishuyaojians[name] || {};
  }
};
Object.assign(get, qishuGet);
const qishuGame = {
  xjzhQishu_saveConfig() {
    'step 0';
    game.saveConfig('xjzh_qishuyaojians', lib.config.xjzh_qishuyaojians);
    'step 1';
    var list = JSON.stringify(lib.config.xjzh_qishuyaojians);
    var data = '奇术要件存档备份:' + list.slice(0);
    game.writeFile(lib.init.encode(data), 'extension/仙家之魂/save', '奇术要件存档备份.json', function (err) {});
  },
  xjzh_resetQishu() {
    'step 0';
    lib.config.xjzh_qishuyaojians = {
      name: '无名玩家',
      level: 1,
      exp: 0,
      date: 0,
      bag: [],
      keys: [],
      player: {},
      levelEquip: {},
      fuwen: {},
      fuwenEquip: {},
      equip: {},
      tokens: 10,
      suipian: 300,
      cailiao: {
        xjzh_cailiao_enianzhixin: ['恶念之心', 0, '瓦尔申挑战材料;他的肌肉毫无规律的抽动着.'],
        xjzh_cailiao_gangtie: ['活体钢铁', 0, '格里高利挑战材料;似乎是一节拥有生命的钢铁.'],
        xjzh_cailiao_nianyedan: ['粘液覆盖的蛋', 0, '都瑞尔挑战材料;里面蠕动着一个新生的强大存在.'],
        xjzh_cailiao_kutong: ['苦痛碎片', 0, '都瑞尔挑战材料;一块破碎的灵魂石,只是拿着他,你的胳膊就隐隐作痛.'],
        xjzh_cailiao_kongju: ['提纯的恐惧', 0, '冰川巨兽挑战材料;不反光的墨水,你发现自己敏锐地感知到自己终有一死.'],
        xjzh_cailiao_xianxue: ['提纯的鲜血', 0, '齐尔领主挑战材料;你几乎能透过玻璃感受到一下心跳.'],
        xjzh_cailiao_wawa: ['针扎娃娃', 0, '安达利尔挑战材料;每一针都是复仇的索取.'],
        xjzh_cailiao_jiasuo: ['焦沙枷锁', 0, '安达利尔挑战材料;牢狱与绞架的天作之合,但愿所有罪人都能带上沉重的铁镣.'],
        xjzh_cailiao_mingyushi: ['冥狱石', 0, '奇术boss强化材料;这块怪石历经漫长岁月的沉淀,喃喃吟诵着古老的亵渎之词.'],
        xjzh_cailiao_shijieshi: ['世界石碎片', 0, '天堂试炼挑战材料;世界之石破碎之后散落的碎片.']
      }
    };
    'step 1';
    var Name = ui.create.div(ui.window, {
      zIndex: '1000',
      left: '0',
      width: '100%',
      top: '0',
      height: '100%'
    });
    var inputDiv = ui.create.div(Name, {
      left: '50%',
      top: '30%',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      height: '270px',
      textAlign: 'center',
      backgroundSize: '100%',
      backgroundImage: 'url(extension/仙家之魂/css/images/qishuyaojian/qishuFiles.png)'
    });
    var input = ui.create.node('input', inputDiv, {
      top: '110px',
      left: '80px',
      position: 'absolute',
      width: '230px',
      height: '20px',
      background: 'none',
      borderStyle: 'none'
    });
    input.id = 'xjzh_qishu_filesName';
    var okBtm = ui.create.div(
      inputDiv,
      {
        left: '153px',
        width: '100px',
        bottom: '55px',
        height: '35px'
      },
      function () {
        var value = document.getElementById('xjzh_qishu_filesName').value;
        lib.config.xjzh_qishuyaojians.name = value;
        game.xjzhQishu_saveConfig();
        window.xjzhOpenLoading('已创建玩家名称为<' + value + '>的奇术要件存档');
        Name.delete();
      }
    );
    var cancelBtm = ui.create.div(
      inputDiv,
      {
        right: '35px',
        width: '25px',
        top: '42px',
        height: '25px'
      },
      function () {
        window.xjzhOpenLoading('你点击了取消,已创建玩家名称为<无名玩家>的奇术要件存档');
        game.xjzhQishu_saveConfig();
        Name.delete();
      }
    );
    'step 2';
    game.xjzhQishu_saveConfig();
  },
  xjzh_levelUp(num) {
    'step 0';
    if (!lib.config.xjzh_qishuyaojians.level) lib.config.xjzh_qishuyaojians.level = 1;
    if (!lib.config.xjzh_qishuyaojians.exp) lib.config.xjzh_qishuyaojians.exp = 0;
    if (!num) num = 0;
    lib.config.xjzh_qishuyaojians.exp += num;
    'step 1';
    const le = lib.config.xjzh_qishuyaojians.level;
    const ex = lib.config.xjzh_qishuyaojians.exp;
    if (le == 100) return [100, 0];
    if (ex >= le * (100 + 10 * le)) {
      lib.config.xjzh_qishuyaojians.level += 1;
      lib.config.xjzh_qishuyaojians.exp -= le * (100 + 10 * le);
    }
    if (ex >= le * (100 + 10 * le)) this.xjzh_levelUp();
    'step 2';
    this.xjzhQishu_saveConfig();
    return [lib.config.xjzh_qishuyaojians.level, lib.config.xjzh_qishuyaojians.exp];
  },
  xjzh_filterAddqishu() {
    if (!_status.xjzhDebug) {
      if (_status.xjzhCheatCount) return false;
    }
    return true;
  },
  xjzh_saveKeys(keys) {
    if (!keys || typeof keys != 'string') return;
    if (!lib.config.xjzh_qishuyaojians.keys) lib.config.xjzh_qishuyaojians.keys = [];
    if (lib.config.xjzh_qishuyaojians.keys.includes(keys)) return;
    lib.config.xjzh_qishuyaojians.keys.push(keys);
    this.xjzhQishu_saveConfig();
    return lib.config.xjzh_qishuyaojians.keys;
  },
  xjzh_hasKeys(keys) {
    if (!keys || typeof keys != 'string') return;
    if (!lib.config.xjzh_qishuyaojians.keys) lib.config.xjzh_qishuyaojians.keys = [];
    if (lib.config.xjzh_qishuyaojians.keys.includes(keys)) return true;
    return false;
  },
  xjzh_changeCailiao(arg, num) {
    if (!this.xjzh_filterAddqishu()) return false;
    if (!get.is.object(lib.config.xjzh_qishuyaojians.cailiao)) {
      lib.config.xjzh_qishuyaojians.cailiao = {
        xjzh_cailiao_enianzhixin: ['恶念之心', 0, '瓦尔申挑战材料;他的肌肉毫无规律的抽动着.'],
        xjzh_cailiao_gangtie: ['活体钢铁', 0, '格里高利挑战材料;似乎是一节拥有生命的钢铁.'],
        xjzh_cailiao_nianyedan: ['粘液覆盖的蛋', 0, '都瑞尔挑战材料;里面蠕动着一个新生的强大存在.'],
        xjzh_cailiao_kutong: ['苦痛碎片', 0, '都瑞尔挑战材料;一块破碎的灵魂石,只是拿着他,你的胳膊就隐隐作痛.'],
        xjzh_cailiao_kongju: ['提纯的恐惧', 0, '冰川巨兽挑战材料;不反光的墨水,你发现自己敏锐地感知到自己终有一死.'],
        xjzh_cailiao_xianxue: ['提纯的鲜血', 0, '齐尔领主挑战材料;你几乎能透过玻璃感受到一下心跳.'],
        xjzh_cailiao_wawa: ['针扎娃娃', 0, '安达利尔挑战材料;每一针都是复仇的索取.'],
        xjzh_cailiao_jiasuo: ['焦沙枷锁', 0, '安达利尔挑战材料;牢狱与绞架的天作之合,但愿所有罪人都能带上沉重的铁镣.'],
        xjzh_cailiao_mingyushi: ['冥狱石', 0, '奇术boss强化材料;这块怪石历经漫长岁月的沉淀,喃喃吟诵着古老的亵渎之词.'],
        xjzh_cailiao_shijieshi: ['世界石碎片', 0, '天堂试炼挑战材料;世界之石破碎之后散落的碎片.']
      };
    }
    if (typeof arg != 'string') {
      var { ...list } = lib.config.xjzh_qishuyaojians.cailiao;
      var list2 = Object.keys(list);
      arg = list2.randomGet();
    }
    if (typeof num != 'number') num = 1;
    if (!lib.config.xjzh_qishuyaojians.cailiao[arg]) {
      switch (arg) {
        case 'xjzh_cailiao_enianzhixin':
          {
            lib.config.xjzh_qishuyaojians.cailiao[arg] = ['恶念之心', 0, '瓦尔申挑战材料;他的肌肉毫无规律的抽动着.'];
          }
          break;
        case 'xjzh_cailiao_gangtie':
          {
            lib.config.xjzh_qishuyaojians.cailiao[arg] = ['活体钢铁', 0, '格里高利挑战材料;似乎是一节拥有生命的钢铁.'];
          }
          break;
        case 'xjzh_cailiao_nianyedan':
          {
            lib.config.xjzh_qishuyaojians.cailiao[arg] = ['粘液覆盖的蛋', 0, '都瑞尔挑战材料;里面蠕动着一个新生的强大存在.'];
          }
          break;
        case 'xjzh_cailiao_kutong':
          {
            lib.config.xjzh_qishuyaojians.cailiao[arg] = ['苦痛碎片', 0, '都瑞尔挑战材料;一块破碎的灵魂石,只是拿着他,你的胳膊就隐隐作痛.'];
          }
          break;
        case 'xjzh_cailiao_kongju':
          {
            lib.config.xjzh_qishuyaojians.cailiao[arg] = ['提纯的恐惧', 0, '冰川巨兽挑战材料;不反光的墨水,你发现自己敏锐地感知到自己终有一死.'];
          }
          break;
        case 'xjzh_cailiao_xianxue':
          {
            lib.config.xjzh_qishuyaojians.cailiao[arg] = ['提纯的鲜血', 0, '齐尔领主挑战材料;你几乎能透过玻璃感受到一下心跳.'];
          }
          break;
        case 'xjzh_cailiao_shijieshi':
          {
            lib.config.xjzh_qishuyaojians.cailiao[arg] = ['世界石碎片', 0, '天堂试炼挑战材料;世界之石破碎之后散落的碎片.'];
          }
          break;
        case 'xjzh_cailiao_wawa':
          {
            lib.config.xjzh_qishuyaojians.cailiao[arg] = ['针扎娃娃', 0, '安达利尔挑战材料;每一针都是复仇的索取.'];
          }
          break;
        case 'xjzh_cailiao_jiasuo':
          {
            lib.config.xjzh_qishuyaojians.cailiao[arg] = ['焦沙枷锁', 0, '安达利尔挑战材料;牢狱与绞架的天作之合,但愿所有罪人都能带上沉重的铁镣.'];
          }
          break;
        case 'xjzh_cailiao_mingyushi':
          {
            lib.config.xjzh_qishuyaojians.cailiao[arg] = ['冥狱石', 0, '奇术boss强化材料;这块怪石历经漫长岁月的沉淀,喃喃吟诵着古老的亵渎之词.'];
          }
          break;
      }
    }
    lib.config.xjzh_qishuyaojians.cailiao[arg][1] += num;
    if (lib.config.xjzh_qishuyaojians.cailiao[arg][1] < 0) lib.config.xjzh_qishuyaojians.cailiao[arg][1] = 0;
    this.xjzhQishu_saveConfig();
    return lib.config.xjzh_qishuyaojians.cailiao[arg][1];
  },
  xjzh_resetCailiao() {
    lib.config.xjzh_qishuyaojians.cailiao = {
      xjzh_cailiao_enianzhixin: ['恶念之心', 0, '瓦尔申挑战材料;他的肌肉毫无规律的抽动着.'],
      xjzh_cailiao_gangtie: ['活体钢铁', 0, '格里高利挑战材料;似乎是一节拥有生命的钢铁.'],
      xjzh_cailiao_nianyedan: ['粘液覆盖的蛋', 0, '都瑞尔挑战材料;里面蠕动着一个新生的强大存在.'],
      xjzh_cailiao_kutong: ['苦痛碎片', 0, '都瑞尔挑战材料;一块破碎的灵魂石,只是拿着他,你的胳膊就隐隐作痛.'],
      xjzh_cailiao_kongju: ['提纯的恐惧', 0, '冰川巨兽挑战材料;不反光的墨水,你发现自己敏锐地感知到自己终有一死.'],
      xjzh_cailiao_xianxue: ['提纯的鲜血', 0, '齐尔领主挑战材料;你几乎能透过玻璃感受到一下心跳.'],
      xjzh_cailiao_wawa: ['针扎娃娃', 0, '安达利尔挑战材料;每一针都是复仇的索取.'],
      xjzh_cailiao_jiasuo: ['焦沙枷锁', 0, '安达利尔挑战材料;牢狱与绞架的天作之合,但愿所有罪人都能带上沉重的铁镣.'],
      xjzh_cailiao_mingyushi: ['冥狱石', 0, '奇术boss强化材料;这块怪石历经漫长岁月的沉淀,喃喃吟诵着古老的亵渎之词.'],
      xjzh_cailiao_shijieshi: ['世界石碎片', 0, '天堂试炼挑战材料;世界之石破碎之后散落的碎片.']
    };
    this.xjzhQishu_saveConfig();
    return lib.config.xjzh_qishuyaojians.cailiao;
  },
  xjzh_canEquip(name, playerName) {
    if (!name || !playerName) return false;
    var info = get.xjzh_equipInfo(name);
    if (!info) return false;
    if (info.conflict) {
      var conflict = info.conflict;
      if (conflict.some((item) => this.xjzh_hasEquiped(item, playerName))) return `此奇术要件与${conflict.map((item) => get.xjzh_qishuTranslate(item)).join('、')}冲突,不能装备.}`;
    }
    if (info.precede) {
      let precede = info.precede;
      if (precede.some((item) => !this.xjzh_hasEquiped(item, playerName))) return `此奇术要件需要先装备${precede.map((item) => get.xjzh_qishuTranslate(item)).join('、')}才能装备.`;
    }
    var filter = info.filter;
    if (typeof filter == 'string') return playerName == filter;else
    if (typeof filter == 'object') return filter.includes(playerName);else
    if (typeof filter == 'function') return filter(playerName);
    return true;
  },
  xjzh_changeSuipian(num) {
    if (!this.xjzh_filterAddqishu()) return false;
    if (typeof lib.config.xjzh_qishuyaojians.suipian != 'number') lib.config.xjzh_qishuyaojians.suipian = 0;
    if (typeof num != 'number') num = 1;
    lib.config.xjzh_qishuyaojians.suipian += num;
    if (lib.config.xjzh_qishuyaojians.suipian < 0) lib.config.xjzh_qishuyaojians.suipian = 0;
    this.xjzhQishu_saveConfig();
    return lib.config.xjzh_qishuyaojians.suipian;
  },
  xjzh_changeTokens(num) {
    if (!this.xjzh_filterAddqishu()) return false;
    if (typeof lib.config.xjzh_qishuyaojians.tokens != 'number') lib.config.xjzh_qishuyaojians.tokens = 0;
    if (typeof num != 'number') num = 1;
    lib.config.xjzh_qishuyaojians.tokens += num;
    if (lib.config.xjzh_qishuyaojians.tokens < 0) lib.config.xjzh_qishuyaojians.tokens = 0;
    this.xjzhQishu_saveConfig();
    return lib.config.xjzh_qishuyaojians.tokens;
  },
  xjzh_qishuLevel(item) {
    if (!item) return;
    if (item.level < 5) return;
    var num = 0;
    var info = get.xjzh_equipInfo(item).status;
    if (!lib.config.xjzh_qishuyaojians.levelEquip) lib.config.xjzh_qishuyaojians.levelEquip = {};
    if (!lib.config.xjzh_qishuyaojians.levelEquip.item) {
      lib.config.xjzh_qishuyaojians.levelEquip.item = {
        level: 1,
        exp: 0
      };
    }
    if (!lib.config.xjzh_qishuyaojians.levelEquip.item.level) lib.config.xjzh_qishuyaojians.levelEquip.item.level = 1;
    if (!lib.config.xjzh_qishuyaojians.levelEquip.item.exp) lib.config.xjzh_qishuyaojians.levelEquip.item.exp = 0;
    var level = lib.config.xjzh_qishuyaojians.levelEquip.item.level;
    var exp = lib.config.xjzh_qishuyaojians.levelEquip.item.exp;
    var num2 = get.xjzh_suipian();
    if (!info) {
      var loading = window.xjzhOpenLoading();
      loading.subViews.text.innerHTML = '条件不符合';
      return;
    } else if (level == 5) {
      var loading = window.xjzhOpenLoading();
      loading.subViews.text.innerHTML = '已是最高等级';
      return;
    } else if (num2 == 0) {
      var loading = window.xjzhOpenLoading();
      loading.subViews.text.innerHTML = '碎片不足';
      return;
    }
    if (num2 >= info[level][1] - exp) {
      num = info[level][1] - exp;
    } else if (num2 < info[level][1] - exp) {
      num = num2;
    }
    lib.config.xjzh_qishuyaojians.levelEquip.item.exp += num;
    if (lib.config.xjzh_qishuyaojians.levelEquip.item.exp >= info[level][1]) {
      lib.config.xjzh_qishuyaojians.levelEquip.item.exp -= info[level][1];
      lib.config.xjzh_qishuyaojians.levelEquip.item.level += 1;
      var loading = window.xjzhOpenLoading();
      loading.subViews.text.innerHTML = get.xjzh_qishuTranslate(item) + '已升级,当前等级:' + lib.config.xjzh_qishuyaojians.levelEquip.item.level;
    } else {
      var loading = window.xjzhOpenLoading();
      loading.subViews.text.innerHTML = '消耗' + num + '碎片,获得等量经验';
    }
    this.xjzhQishu_saveConfig();
  },
  xjzh_gainEquip(name) {
    if (!this.xjzh_filterAddqishu()) return false;
    lib.config.xjzh_qishuyaojians.bag.push(name);
    this.xjzhQishu_saveConfig();
    return name;
  },
  xjzh_loseEquip(name) {
    lib.config.xjzh_qishuyaojians.bag.remove(name);
    this.xjzhQishu_saveConfig();
  },
  xjzh_hasEquiped(name, playerName) {
    if (!name) return false;
    if (!lib.xjzh_qishuyaojians[name]) return;
    if (!playerName) return false;
    if (!lib.config.xjzh_qishuyaojians.player[playerName]) return false;
    return lib.config.xjzh_qishuyaojians.player[playerName].includes(name);
  },
  xjzh_useEquip(name, playerName, nopop, hutong) {
    if (!name || !playerName) return;
    if (!this.xjzh_canEquip(name, playerName) || typeof this.xjzh_canEquip(name, playerName) == 'string') {
      let text = this.xjzh_canEquip(name, playerName);
      window.xjzhOpenLoading(typeof text == 'string' ? text : '该角色不满足装备条件');
      return;
    }
    if (!lib.xjzh_qishuyaojians[name]) return;
    if (!lib.config.xjzh_qishuyaojians.player[playerName]) lib.config.xjzh_qishuyaojians.player[playerName] = [];
    if (lib.config.xjzh_qishuyaojians.player[playerName].length < 3) {
      if (lib.config.xjzh_qishuyaojians.player[playerName].includes(name)) {
        if (!nopop) {
          var loading = window.xjzhOpenLoading();
          loading.subViews.text.innerHTML = get.translation(playerName) + '已经装备了' + lib.xjzh_qishuyaojians[name].translate;
        }
        return;
      }
      lib.config.xjzh_qishuyaojians.player[playerName].push(name);
      if (!lib.config.xjzh_qishuyaojians.equip[name]) lib.config.xjzh_qishuyaojians.equip[name] = [];
      lib.config.xjzh_qishuyaojians.equip[name].add(playerName);
      if (!nopop) {
        var loading = window.xjzhOpenLoading();
        loading.subViews.text.innerHTML = '已为' + get.translation(playerName) + '装备了' + lib.xjzh_qishuyaojians[name].translate;
      }
      if (!hutong) {
        this.xjzh_loseEquip(name);
        for (var i of lib.xjzh_equipHutong) {
          if (i.includes(playerName)) {
            for (var j of i) {
              if (j == playerName) continue;
              this.xjzh_useEquip(name, j, true, true);
            }
          }
        }
      }
    } else {
      var equips = lib.config.xjzh_qishuyaojians.player[playerName];
      var equipName = equips.splice(0, 1)[0];
      lib.config.xjzh_qishuyaojians.equip[equipName].remove(playerName);
      equips.push(name);
      if (!lib.config.xjzh_qishuyaojians.equip[name]) lib.config.xjzh_qishuyaojians.equip[name] = [];
      lib.config.xjzh_qishuyaojians.equip[name].push(playerName);
      if (!nopop) {
        var loading = window.xjzhOpenLoading();
        loading.subViews.text.innerHTML = '已为' + get.translation(playerName) + '装备了' + lib.xjzh_qishuyaojians[name].translate + '<br>(自动卸下了' + lib.xjzh_qishuyaojians[equipName].translate + ')';
      }
      if (!hutong) {
        this.xjzh_loseEquip(name);
        this.xjzh_gainEquip(equipName);
        for (var i of lib.xjzh_equipHutong) {
          if (i.includes(playerName)) {
            for (var j of i) {
              if (j == playerName) continue;
              this.xjzh_useEquip(name, j, true, true);
            }
          }
        }
      }
    }
    this.xjzhQishu_saveConfig();
  },
  xjzh_unEquip(name, playerName, nopop, hutong) {
    if (!name) return;
    if (!lib.xjzh_qishuyaojians[name]) {
      if (playerName) {
        lib.config.xjzh_qishuyaojians.player[playerName] = [];
      }
      return;
    }
    var info = get.xjzh_equipInfo(name);
    if (info && info.unequip) {
      let unequip = info.unequip;
      if (unequip.some((item) => this.xjzh_hasEquiped(item, playerName))) {
        window.xjzhOpenLoading(`此奇术要件需要先卸下${unequip.map((item) => get.xjzh_qishuTranslate(item)).join('、')}才能取消装备.`);
        return;
      }
    }
    if (!lib.config.xjzh_qishuyaojians.player[playerName]) return;
    if (lib.config.xjzh_qishuyaojians.player[playerName].includes(name)) {
      lib.config.xjzh_qishuyaojians.player[playerName].remove(name);
      if (lib.config.xjzh_qishuyaojians.equip[name]) lib.config.xjzh_qishuyaojians.equip[name].remove(playerName);
      if (!hutong) {
        this.xjzh_gainEquip(name);
        for (var i of lib.xjzh_equipHutong) {
          if (i.includes(playerName)) {
            for (var j of i) {
              if (j == playerName) continue;
              this.xjzh_unEquip(name, j, true, true);
            }
          }
        }
      } else return;
    }
    if (!nopop) {
      var loading = window.xjzhOpenLoading();
      loading.subViews.text.innerHTML = '已为' + get.translation(playerName) + '卸下了' + lib.xjzh_qishuyaojians[name].translate;
    }
    this.xjzhQishu_saveConfig();
  },
  xjzh_characters() {
    let characters;
    if (lib.characterPack.XWTZ) characters = lib.characterPack.XWTZ;
    return characters;
  },
  xjzh_forBiddenAll() {
    let characters = this.xjzh_characters();
    if (!characters) return;
    for (var i in characters) {
      if (!lib.character[i]) continue;
      if (!lib.character[i].isQishuBoss) continue;
      if (lib.character[i].isAiForbidden == true) continue;
      lib.character[i].isBoss = false;
      lib.character[i].isBossAllowed = false;
      lib.character[i].isAiForbidden = true;
      lib.character[i].isUnseen = true;
    }
  },
  xjzh_forBiddenOne(name) {
    if (!lib.character[name]) return;
    if (!lib.character[name].isQishuBoss) return;
    lib.character[name].isBoss = false;
    lib.character[name].isBossAllowed = false;
    lib.character[name].isAiForbidden = true;
    lib.character[name].isUnseen = true;
  },
  xjzh_qishuWinner(str, str2) {
    let boxRemove = ui.create.div(ui.window, {
        zIndex: 10000,
        width: '100%',
        height: '100%'
      }),
      obj = ui.create.div('.xjzh-dialog', boxRemove);
    obj.style.transformOrigin = 'center';
    let num = get.rand(0, 5),
      url = 'extension/仙家之魂/css/images/ui/',
      url2 = 'xjzh_info';
    obj.style.backgroundImage = `url(${rootURL}${url}${url2}${num}.png)`;
    let beijing = ui.create.div('.xjzh-dialog-name', obj),
      text = ui.create.div('.xjzh-dialog-text', obj);
    boxRemove.listen(function () {
      boxRemove.delete();
    });
    beijing.innerHTML = str;
    text.innerHTML = str2;
  },
  xjzh_originalFunction(ret) {
    if (ret) {
      if (!_status.event.AchiCover) {
        if (!game.xjzh_filterEligible()) return;
      }
      let player = game.me,
        qishumingyushi = window.qishumingyushi;
      if (!['identity', 'doudizhu', 'boss'].includes(get.mode())) return;
      if (get.mode() == 'boss') {
        if (game.boss == player) return;
        if (!get.isXHwujiang(game.boss)) return;
      } else if (['identity', 'doudizhu'].includes(get.mode())) {
        if (!get.isXHwujiang(player)) return;
      }
      let draw = player.getAllHistory('draw').length,
        use = player.getAllHistory('useCard').length,
        damage = player.getAllHistory('damage').length,
        source = player.getAllHistory('sourceDamage').length,
        kill = player.getAllHistory('kill').length,
        recover = player.getAllHistory('recover').length;
      let num = 1 + lib.config.xjzh_qishuyaojians.level / 20;
      let num3 = Math.floor(use + (source - damage) + (source == kill ? kill : source) + recover),
        num2 = (use + (source - damage) + (source == kill ? kill : source) + recover) * num;
      let qishuReward = {
        jingpo: 0,
        suipian: 0,
        qishuyaojian: {},
        cailiao: {
          xjzh_cailiao_enianzhixin: 0,
          xjzh_cailiao_gangtie: 0,
          xjzh_cailiao_kongju: 0,
          xjzh_cailiao_xianxue: 0
        }
      };
      let suipian = Math.floor(num2);
      qishuReward.suipian += window.qishumingyushi === true ? suipian * 2 : suipian;
      let { ...cailiaoList } = lib.config.xjzh_qishuyaojians.cailiao,
        cailiaoList2 = Object.keys(cailiaoList).filter(function (item) {
          return ['xjzh_cailiao_enianzhixin', 'xjzh_cailiao_gangtie', 'xjzh_cailiao_kongju', 'xjzh_cailiao_xianxue'].includes(item);
        });
      for (let num = 1; num <= 3; num++) {
        let randomNum = suipian < 50 ? 0.25 : num2 / 200,
          index = cailiaoList2.randomGet();
        if (Math.random() <= randomNum) qishuReward.cailiao[index] += 1;
      }
      if (Math.random() <= 0.25 * (qishumingyushi ? 2 : 1)) qishuReward.cailiao.xjzh_cailiao_mingyushi += 1;
      let qishuList = [],
        qishuLevelArr,
        number,
        qishuLevel4;
      for (var i in lib.xjzh_qishuyaojians) {
        let level = get.xjzh_equipInfo(i).level || 1;
        if (level && level < 5) qishuList.push(i);
      }
      if (get.mode() == 'boss') {
        switch (get.nameList(game.boss)[0]) {
          case 'xjzh_boss_lilisi':
            qishuReward.jingpo += qishumingyushi ? 1 : 2 + get.rand(0, 3);
            qishuLevelArr = qishuList.randomGet();
            if (qishumingyushi == true) {
              number = 2;
              while (number > 0) {
                if (!qishuReward.qishuyaojian[qishuLevelArr]) qishuReward.qishuyaojian[qishuLevelArr] = 0;
                qishuReward.qishuyaojian[qishuLevelArr]++;
                number--;
              }
            } else {
              if (!qishuReward.qishuyaojian[qishuLevelArr]) qishuReward.qishuyaojian[qishuLevelArr] = 0;
              qishuReward.qishuyaojian[qishuLevelArr]++;
            }
            if (!qishuReward.cailiao.xjzh_cailiao_shijieshi) qishuReward.cailiao.xjzh_cailiao_shijieshi = 0;
            qishuReward.cailiao.xjzh_cailiao_shijieshi += qishumingyushi ? 2 : 1;
            if (!qishuReward.cailiao.xjzh_cailiao_mingyushi) qishuReward.cailiao.xjzh_cailiao_mingyushi = 0;
            qishuReward.cailiao.xjzh_cailiao_mingyushi += qishumingyushi ? 2 : 1;
            qishuReward.suipian += qishumingyushi ? 60 * 2 : 60;
            qishuReward.suipian *= 2;
            break;
          case 'xjzh_boss_waershen':
            number = 1;
            if (!qishuReward.cailiao.xjzh_cailiao_nianyedan) qishuReward.cailiao.xjzh_cailiao_nianyedan = 0;
            if (game.xjzhAchi.hasAchi('净化恶念', 'game')) number = 2;
            qishuReward.cailiao.xjzh_cailiao_nianyedan += qishumingyushi ? number * 2 : number;
            qishuReward.suipian += qishumingyushi ? 10 * 2 : 10;
            break;
          case 'xjzh_boss_geligaoli':
            if (!qishuReward.cailiao.xjzh_cailiao_kutong) qishuReward.cailiao.xjzh_cailiao_kutong = 0;
            qishuReward.cailiao.xjzh_cailiao_kutong += qishumingyushi ? 2 : 1;
            qishuReward.suipian += qishumingyushi ? 10 * 2 : 10;
            break;
          case 'xjzh_boss_duruier':
            randomNum = Object.keys(cailiaoList).length / 0.5 / 100;
            if (Math.random() < randomNum) {
              if (!qishuReward.cailiao.xjzh_cailiao_mingyushi) qishuReward.cailiao.xjzh_cailiao_mingyushi = 0;
              qishuReward.cailiao.xjzh_cailiao_mingyushi += qishumingyushi ? 2 : 1;
            }
            qishuReward.suipian += qishumingyushi ? 45 * 2 : 45;
            qishuLevel4 = ['xjzh_qishu_fengbaopaoxiao', 'xjzh_qishu_xjzh_qishu_waxilidedaogao', 'xjzh_qishu_tongkuhushou'];
            if (qishumingyushi == true) {
              number = 2;
              while (number > 0) {
                let qishuLevel4Arr = qishuLevel4.randomGet();
                if (!qishuReward.qishuyaojian[qishuLevel4Arr]) qishuReward.qishuyaojian[qishuLevel4Arr] = 0;
                qishuReward.qishuyaojian[qishuLevel4Arr]++;
                number--;
              }
            } else {
              let qishuLevel4Arr = qishuLevel4.randomGet();
              if (!qishuReward.qishuyaojian[qishuLevel4Arr]) qishuReward.qishuyaojian[qishuLevel4Arr] = 0;
              qishuReward.qishuyaojian[qishuLevel4Arr]++;
            }
            break;
          case 'xjzh_boss_qier':
            if (!qishuReward.cailiao.xjzh_cailiao_jiasuo) qishuReward.cailiao.xjzh_cailiao_jiasuo = 0;
            qishuReward.cailiao.xjzh_cailiao_jiasuo += qishumingyushi ? 2 : 1;
            qishuReward.suipian += qishumingyushi ? 10 * 2 : 10;
            qishuLevel4 = ['xjzh_qishu_fenglangkx', 'xjzh_qishu_waxilidedaogao'];
            if (qishumingyushi == true) {
              number = 2;
              while (number > 0) {
                let qishuLevel4Arr = qishuLevel4.randomGet();
                if (!qishuReward.qishuyaojian[qishuLevel4Arr]) qishuReward.qishuyaojian[qishuLevel4Arr] = 0;
                qishuReward.qishuyaojian[qishuLevel4Arr]++;
                number--;
              }
            } else {
              let qishuLevel4Arr = qishuLevel4.randomGet();
              if (!qishuReward.qishuyaojian[qishuLevel4Arr]) qishuReward.qishuyaojian[qishuLevel4Arr] = 0;
              qishuReward.qishuyaojian[qishuLevel4Arr]++;
            }
            break;
          case 'xjzh_boss_bingchuanjushou':
            if (!qishuReward.cailiao.xjzh_cailiao_wawa) qishuReward.cailiao.xjzh_cailiao_wawa = 0;
            qishuReward.cailiao.xjzh_cailiao_wawa += qishumingyushi ? 2 : 1;
            qishuReward.suipian += qishumingyushi ? 10 * 2 : 10;
            break;
          case 'xjzh_boss_andalier':
            randomNum = Object.keys(cailiaoList).length / 0.5 / 100;
            if (Math.random() < randomNum) {
              if (!qishuReward.cailiao.xjzh_cailiao_mingyushi) qishuReward.cailiao.xjzh_cailiao_mingyushi = 0;
              qishuReward.cailiao.xjzh_cailiao_mingyushi += qishumingyushi ? 2 : 1;
            }
            qishuReward.suipian += qishumingyushi ? 45 * 2 : 45;
            qishuLevel4 = ['xjzh_qishu_wuyan', 'xjzh_qishu_fenglangkx', 'xjzh_qishu_wumingzhe'];
            if (qishumingyushi == true) {
              number = 2;
              while (number > 0) {
                let qishuLevel4Arr = qishuLevel4.randomGet();
                if (!qishuReward.qishuyaojian[qishuLevel4Arr]) qishuReward.qishuyaojian[qishuLevel4Arr] = 0;
                qishuReward.qishuyaojian[qishuLevel4Arr]++;
                number--;
              }
            } else {
              let qishuLevel4Arr = qishuLevel4.randomGet();
              if (!qishuReward.qishuyaojian[qishuLevel4Arr]) qishuReward.qishuyaojian[qishuLevel4Arr] = 0;
              qishuReward.qishuyaojian[qishuLevel4Arr]++;
            }
            break;
        }
      }
      let str = '当前模式:' + get.translation(get.mode()) + '<br><br>当前玩家:' + lib.config.xjzh_qishuyaojians.name + '(' + get.translation(get.nameList(game.me)[0]) + ')<br><br>总计得分:' + suipian + '<br><br>对局奖励:';
      str += '<br>&emsp;&emsp;经验(' + num3 + ')';
      for (var i in qishuReward) {
        switch (i) {
          case 'suipian':
            {
              if (qishuReward[i] > 0) {
                this.xjzh_changeSuipian(qishuReward[i]);
                str += '<br>&emsp;&emsp;碎片(' + qishuReward[i] + '个)';
              }
            }
            break;
          case 'jingpo':
            {
              if (qishuReward[i] > 0) {
                this.xjzh_changeTokens(qishuReward[i]);
                str += '<br>&emsp;&emsp;精魄(' + qishuReward[i] + '个)';
              }
            }
            break;
          case 'qishuyaojian':
            {
              let qishuListt = qishuReward[i];
              if (Object.keys(qishuListt).length) {
                for (let j in qishuListt) {
                  if (qishuListt[j] > 0) {
                    this.xjzh_gainEquip(j, qishuListt[j]);
                    str += '<br>&emsp;&emsp;' + get.xjzh_qishuTranslate(j) + '(' + qishuListt[j] + '个)';
                  }
                }
              }
            }
            break;
          case 'cailiao':
            {
              let cailiaoListt = qishuReward[i];
              for (let j in cailiaoListt) {
                if (cailiaoListt[j] > 0) {
                  this.xjzh_changeCailiao(j, cailiaoListt[j]);
                  str += '<br>&emsp;&emsp;' + get.xjzh_cailiaoTranslate(j) + '(' + cailiaoListt[j] + '个)';
                }
              }
            }
            break;
        }
      }
      let doneAchievemen = lib.xjzh_hasDoneAchievement;
      if (doneAchievemen && doneAchievemen.length) {
        str += '<br>成就奖励:';
        for (var i of doneAchievemen) {
          let name = i.split(',');
          let info = game.xjzhAchi.info(name[1], name[0]);
          str += `<br>&emsp;&emsp;${name[1]}:<br>&emsp;&emsp;&emsp;&emsp;碎片:${info.level * 50}<br>&emsp;&emsp;&emsp;&emsp;精魄:${info.level}`;
        }
      }
      let runeLists = get.xjzh_runeList();
      if (Math.random() < Math.max(0.35, Math.min(num3 / (runeLists.length + num3), 0.8))) {
        let runes = runeLists.randomGet();
        str += `<br>符文奖励:<br>&emsp;&emsp;${get.xjzh_runeTranslate(runes, get.xjzh_runeType(runes))}(1个)`;
        game.xjzh_gainRune(runes, 1);
      }
      this.xjzh_levelUp(qishumingyushi ? num3 * 2 : num3);
      this.xjzh_qishuWinner('奖励结算', str);
    }
  },
  xjzh_withPreCheck(originalFunction) {
    let that = this;
    return function (ret) {
      const player = game.me;
      if (!['identity', 'doudizhu', 'boss'].includes(get.mode())) return;
      if (get.mode() == 'boss') {
        if (game.boss == player) return;
        if (!get.isXHwujiang(game.boss)) return;
      } else if (['identity', 'doudizhu'].includes(get.mode())) {
        if (!get.isXHwujiang(player)) return;
      }
      originalFunction.bind(that)(ret);
    };
  },
  xjzh_checkOpenChallenge() {
    let bool = false,
      characters = this.xjzh_characters();
    if (!get.is.object(lib.config.xjzh_qishuyaojians.cailiao) || !characters || typeof characters == 'undefined' || !game.getExtensionConfig('仙家之魂', 'xjzh_qishuyaojianOptions') || game.getExtensionConfig('仙家之魂', 'xjzh_qishuyaojianOptions') === 'close') {
      this.xjzh_forBiddenAll();
      return;
    }
    if (game.getExtensionConfig('仙家之魂', 'xjzh_qishuBossPower')) {
      if (get.xjzh_cailiao('xjzh_cailiao_mingyushi') > 1) bool = true;
    }
    let { ...cailiaoList } = lib.config.xjzh_qishuyaojians.cailiao,
      lilisiCiaoliao = Object.keys(cailiaoList).filter((item) => !['xjzh_cailiao_shijieshi', 'xjzh_cailiao_mingyushi'].includes(item));
    if (lilisiCiaoliao.some((item) => get.xjzh_cailiao(item) < (bool ? 6 : 2))) this.xjzh_forBiddenOne('xjzh_boss_lilisi');
    if (get.xjzh_cailiao('xjzh_cailiao_enianzhixin') < (bool ? 12 : 4)) this.xjzh_forBiddenOne('xjzh_boss_waershen');
    if (get.xjzh_cailiao('xjzh_cailiao_gangtie') < (bool ? 15 : 5)) this.xjzh_forBiddenOne('xjzh_boss_geligaoli');
    if (
    Object.keys(cailiaoList).
    filter(function (item) {
      return ['xjzh_cailiao_nianyedan', 'xjzh_cailiao_kutong'].includes(item);
    }).
    some((item) => {
      return get.xjzh_cailiao(item) < (bool ? 6 : 2);
    }))

    this.xjzh_forBiddenOne('xjzh_boss_duruier');
    if (
    Object.keys(cailiaoList).
    filter(function (item) {
      return ['xjzh_cailiao_wawa', 'xjzh_cailiao_jiasuo'].includes(item);
    }).
    some((item) => {
      return get.xjzh_cailiao(item) < (bool ? 6 : 2);
    }))

    this.xjzh_forBiddenOne('xjzh_boss_andalier');
    if (get.xjzh_cailiao('xjzh_cailiao_kongju') < (bool ? 27 : 9)) this.xjzh_forBiddenOne('xjzh_boss_bingchuanjushou');
    if (get.xjzh_cailiao('xjzh_cailiao_xianxue') < (bool ? 27 : 9)) this.xjzh_forBiddenOne('xjzh_boss_qier');
    if (get.xjzh_cailiao('xjzh_cailiao_shijieshi') < (bool ? 3 : 1)) this.xjzh_forBiddenOne('xjzh_boss_ttshilian');
  }
};
Object.assign(game, qishuGame);
const xjzh_equipHutong = [
['xjzh_huoying_mingren', 'xjzh_huoying_liudaomingren'],
['xjzh_huoying_zuozhu', 'xjzh_huoying_liudaozuozhu']];

lib.xjzh_equipHutong = xjzh_equipHutong;
if (!lib.config.xjzh_qishuyaojians) {
  lib.config.xjzh_qishuyaojians = {
    name: '无名玩家',
    level: 1,
    exp: 0,
    date: 0,
    bag: [],
    keys: [],
    player: {},
    levelEquip: {},
    fuwen: {},
    fuwenEquip: {},
    equip: {},
    tokens: 10,
    suipian: 300,
    cailiao: {
      xjzh_cailiao_enianzhixin: ['恶念之心', 0, '瓦尔申挑战材料;他的肌肉毫无规律的抽动着.'],
      xjzh_cailiao_gangtie: ['活体钢铁', 0, '格里高利挑战材料;似乎是一节拥有生命的钢铁.'],
      xjzh_cailiao_nianyedan: ['粘液覆盖的蛋', 0, '都瑞尔挑战材料;里面蠕动着一个新生的强大存在.'],
      xjzh_cailiao_kutong: ['苦痛碎片', 0, '都瑞尔挑战材料;一块破碎的灵魂石,只是拿着他,你的胳膊就隐隐作痛.'],
      xjzh_cailiao_kongju: ['提纯的恐惧', 0, '冰川巨兽挑战材料;不反光的墨水,你发现自己敏锐地感知到自己终有一死.'],
      xjzh_cailiao_xianxue: ['提纯的鲜血', 0, '齐尔领主挑战材料;你几乎能透过玻璃感受到一下心跳.'],
      xjzh_cailiao_wawa: ['针扎娃娃', 0, '安达利尔挑战材料;每一针都是复仇的索取.'],
      xjzh_cailiao_jiasuo: ['焦沙枷锁', 0, '安达利尔挑战材料;牢狱与绞架的天作之合,但愿所有罪人都能带上沉重的铁镣.'],
      xjzh_cailiao_mingyushi: ['冥狱石', 0, '奇术boss强化材料;这块怪石历经漫长岁月的沉淀,喃喃吟诵着古老的亵渎之词.'],
      xjzh_cailiao_shijieshi: ['世界石碎片', 0, '天堂试炼挑战材料;世界之石破碎之后散落的碎片.']
    }
  };
}
game.xjzhQishu_saveConfig();
lib.translate._xjzh_qishu_effect = '奇术要件';
lib.skill._xjzh_qishu_effect = {
  trigger: {
    global: 'gameStart'
  },
  silent: true,
  lastDo: true,
  _priority: Infinity,
  filter(event, player) {
    let config = game.getExtensionConfig('仙家之魂', 'xjzh_qishuyaojianOptions');
    if (get.nameList(player).length == 0) return false;
    if (!['identity', 'doudizhu', 'boss'].includes(get.mode())) return false;
    if (!player.isUnderControl(true)) return false;
    let playerNames = get.nameList(player),
      qishuEquipsLists = [];
    if (!playerNames.filter((item) => get.xjzh_equiped(item).length).length) return false;
    if (playerNames.length == 1) {
      qishuEquipsLists = get.xjzh_equiped(playerNames[0]);
    } else {
      playerNames.forEach((name) => {
        qishuEquipsLists.addArray(get.xjzh_equiped(name));
      });
    }
    qishuEquipsLists.unique();
    if (!qishuEquipsLists.length) return false;
    if (!config || config === 'close') return false;
    if (config !== 'close') {
      if (config === 'all') return true;
      return get.isXHwujiang(player);
    }
    return false;
  },
  async content(event, trigger, player) {
    let qishuyaojians = new Map();
    let names = get.nameList(player);
    let name = names.filter((item) => {
      return get.xjzh_equiped(item).length;
    });
    var initSkill = function (name, player) {
      if (!name) return;
      var item = lib.xjzh_qishuyaojians[name];
      if (!item) return;
      if (item.init) item.init(player);
      if (item.replaceSkill) {
        for (var origin in item.replaceSkill) {
          if (typeof item.replaceSkill[origin] == 'string') {
            var skill = item.replaceSkill[origin];
          } else {
            var skill = origin + '_changed';
            lib.skill[skill] = item.replaceSkill[origin];
            lib.skill[skill].unique = true;
            lib.translate[skill] = lib.translate[origin];
            game.finishSkill(skill, false);
          }
          if (lib.character[player.name][3].includes(origin)) {
            var index = lib.character[player.name][3].indexOf(origin);
            lib.character[player.name][3].splice(index, 1, skill);
          }
          if (player.skills.includes(origin)) {
            var index = player.skills.indexOf(origin);
            player.skills[index] = skill;
            var info = lib.skill[origin];
            player.unmarkSkill(origin);
            delete player.tempSkills[origin];
            if (info) {
              if (info.onremove) {
                if (typeof info.onremove == 'function') {
                  info.onremove(player, origin);
                } else if (typeof info.onremove == 'string') {
                  if (info.onremove == 'storage') {
                    delete player.storage[origin];
                  } else {
                    var cards = player.storage[origin];
                    if (get.itemtype(cards) == 'card') {
                      cards = [cards];
                    }
                    if (get.itemtype(cards) == 'cards') {
                      if (player.onremove == 'discard') {
                        player.$throw(cards);
                      }
                      if (player.onremove == 'discard' || player.onremove == 'lose') {
                        game.cardsDiscard(cards);
                        delete player.storage[origin];
                      }
                    }
                  }
                } else if (Array.isArray(info.onremove)) {
                  for (var i = 0; i < info.onremove.length; i++) {
                    delete player.storage[info.onremove[i]];
                  }
                } else if (info.onremove === true) {
                  delete player.storage[origin];
                }
              }
              player.removeSkillTrigger(origin);
              if (!info.keepSkill) {
                player.removeAdditionalSkill(origin);
              }
            }
            var info = lib.skill[skill];
            player.addSkillTrigger(skill);
            if (info.init2 && !_status.video) {
              info.init2(player, skill);
            }
            if (info.mark) {
              if (info.mark == 'card' && get.itemtype(player.storage[skill]) == 'card') {
                player.markSkill(skill, player, player.storage[skill]);
              } else if (info.mark == 'card' && get.itemtype(player.storage[skill]) == 'cards') {
                player.markSkill(skill, player, player.storage[skill][0]);
              } else if (info.mark == 'image') {
                player.markSkill(skill, null, ui.create.card(null, 'noclick').init([null, null, skill]));
              } else if (info.mark == 'character') {
                var intro = info.intro.content;
                if (typeof intro == 'function') {
                  intro = intro(player.storage[skill], player);
                } else if (typeof intro == 'string') {
                  intro = intro.replace(/#/g, player.storage[skill]);
                  intro = intro.replace(/&/g, get.cnNumber(player.storage[skill]));
                  intro = intro.replace(/\$/g, get.translation(player.storage[skill]));
                }
                var caption;
                if (typeof info.intro.name == 'function') {
                  caption = info.intro.name(player.storage[skill], player);
                } else if (typeof info.intro.name == 'string') {
                  caption = info.name;
                } else {
                  caption = get.translation(skill);
                }
                player.markSkillCharacter(skill, player.storage[skill], caption, intro);
              } else {
                player.markSkill(skill);
              }
            }
          }
        }
      }
      if (item.replaceSkillInfo) {
        for (var origin in item.replaceSkillInfo) {
          if (origin.slice(origin.length - 5) == '_info') {
            var skill = origin.slice(0, origin.length - 5) + '_changed_info';
            lib.translate[skill] = item.replaceSkillInfo[origin];
          } else {
            var skill = origin + '_changed';
            lib.translate[skill] = item.replaceSkillInfo[origin];
          }
        }
      }
      if (item.skill) {
        let newSkill = name;
        if (!lib.skill[newSkill]) {
          lib.skill[newSkill] = item.skill;
          lib.skill[newSkill].init = item.init; //修复后面获得技能不init
          lib.skill[newSkill].charlotte = true;
          lib.skill[newSkill].xjzh_qishuSkill = true;
          lib.skill[newSkill].superChocolate = true;
          lib.skill[newSkill].nobracket = true;
          lib.skill[newSkill].locked = true;
          lib.skill[newSkill].unique = true;
          if (lib.skill[newSkill].priority === undefined) lib.skill[newSkill].priority = 5;
          if (!lib.skill[newSkill].onremove)
          lib.skill[newSkill].onremove = (player, skill) => {
            if (!player.hasSkill(skill)) player.addSkills(skill);
          };
          if (item.skillName) {
            lib.translate[newSkill] = item.skillName;
          } else {
            lib.translate[newSkill] = item.translate;
          }
          if (item.skillInfo) {
            lib.translate[newSkill + '_info'] = item.skillInfo;
            if (item.append_info) lib.translate[newSkill + '_append'] = item.append_info;
          } else {
            if (!item.noTranslate) {
              lib.translate[newSkill + '_info'] = item.translate_info;
              if (item.append_info) lib.translate[newSkill + '_append'] = item.append_info;
            }
          }
          if (item.dynamicTranslate) {
            lib.translate[newSkill + '_info'] = item.dynamicTranslate(player);
          }
          let str = lib.translate[newSkill + '_info'];
          if (str) {
            if (str.includes('控制')) {
              let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_kongzhi');\">控制</a>`;
              str = str.replace(/控制/g, str2);
            }
            if (str.includes('会心')) {
              let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_huixin');\">会心</a>`;
              str = str.replace(/会心/g, str2);
            }
            lib.translate[newSkill + '_info'] = str;
          }
        }
        player.addSkills(newSkill);
      }
    };
    for await (let item of name) {
      let equiped = get.xjzh_equiped(item);
      if (!equiped.length) continue;
      equiped.forEach((skill) => {
        initSkill(skill, player);
      });
      qishuyaojians.set(item, equiped);
    }
    player.xjzh_qishuyaojians = qishuyaojians;
  }
};
if (!lib.config.xjzh_qishufilesOnload) {
  alert('检测到你更新了仙家之魂游戏版本,此版本添加了新的<奇术要件>功能');
  alert('请你在接下来的提示中输入用户名以创建你的专属存档');
  game.xjzh_resetQishu();
  game.saveConfig('xjzh_qishufilesOnload', true);
}
const qishumingyushi = false;
Reflect.defineProperty(window, 'qishumingyushi', {
  value: qishumingyushi
});
lib.skill.xjzh_qishu_materialRemove = {
  trigger: {
    global: 'gameStart',
    player: 'enterGame'
  },
  silent: true,
  firstDo: true,
  _priority: Infinity,
  filter(event, player) {
    return game.boss && game.boss != game.me;
  }, //QQQ
  init(player) {
    if (game.getExtensionConfig('仙家之魂', 'xjzh_qishuBossPower')) {
      if (get.xjzh_cailiao('xjzh_cailiao_mingyushi') > 1)
      Reflect.defineProperty(window, 'qishumingyushi', {
        value: true
      });
    }
    if (!player.storage.xjzh_qishu_materialRemove) player.storage.xjzh_qishu_materialRemove = player.getOriginalSkills();
    var qishuRemove = window.setInterval(function () {
      for (var skill of player.storage.xjzh_qishu_materialRemove) {
        if (!player.hasSkill(skill)) {
          if (skill == 'xjzh_qishu_materialRemove') {
            window.clearInterval(qishuRemove);
          }
          player.addSkill(skill);
        }
      }
    }, 1000);
    let dieFunc = player.die;
    player.die = function () {
      if (player.getHp(true) > 0) {
        game.log(`检测到${get.translation(player)}的体力值大于0,已为其终止阵亡结算`);
        return;
      }
      let die = dieFunc.apply(player, arguments);
      return die;
    };
  },
  async content(event, trigger, player) {
    let { ...cailiaoList } = lib.config.xjzh_qishuyaojians.cailiao,
      qishumingyushi = window.qishumingyushi,
      qishuName = lib.config.xjzh_qishuyaojians.name,
      str = `${qishuName ? qishuName : '无名玩家'}消耗了`;
    if (qishumingyushi) {
      game.xjzh_changeCailiao('xjzh_cailiao_mingyushi', -2);
      let boss = game.boss;
      await boss.gainMaxHp(boss.maxHp);
      await boss.recoverTo(boss.maxHp);
      await boss.drawTo(boss.maxHp);
      game.log(`#y${get.translation(boss)}`, `被冥狱石强化了`);
    }
    switch (get.nameList(game.boss)[0]) {
      case 'xjzh_boss_ttshilian':
        game.xjzh_changeCailiao('xjzh_cailiao_shijieshi', qishumingyushi ? -3 : -1);
        str += `${qishumingyushi ? 3 : 1}个${get.xjzh_cailiaoTranslate('xjzh_cailiao_shijieshi')}开启了${get.translation(get.nameList(game.boss)[0])}挑战`;
        break;
      case 'xjzh_boss_lilisi':
        var list = Object.keys(cailiaoList).filter((item) => !['xjzh_cailiao_shijieshi', 'xjzh_cailiao_mingyushi'].includes(item)),
          arrList = [];
        for (var i = 0; i < list.length; i++) {
          game.xjzh_changeCailiao(list[i], qishumingyushi ? -6 : -2);
          arrList.push(get.xjzh_cailiaoTranslate(list[i]));
        }
        str += `${arrList}各${qishumingyushi ? 6 : 2}个开启了${get.translation(get.nameList(game.boss)[0])}挑战`;
        break;
      case 'xjzh_boss_waershen':
        game.xjzh_changeCailiao('xjzh_cailiao_enianzhixin', qishumingyushi ? -12 : -4);
        str += `${qishumingyushi ? 12 : 4}个${get.xjzh_cailiaoTranslate('xjzh_cailiao_enianzhixin')}开启了${get.translation(get.nameList(game.boss)[0])}挑战`;
        break;
      case 'xjzh_boss_geligaoli':
        game.xjzh_changeCailiao('xjzh_cailiao_gangtie', qishumingyushi ? -15 : -5);
        str += `${qishumingyushi ? 15 : 5}个${get.xjzh_cailiaoTranslate('xjzh_cailiao_enianzhixin')}开启了${get.translation(get.nameList(game.boss)[0])}挑战`;
        break;
      case 'xjzh_boss_duruier':
        game.xjzh_changeCailiao('xjzh_cailiao_nianyedan', qishumingyushi ? -6 : -2);
        game.xjzh_changeCailiao('xjzh_cailiao_kutong', qishumingyushi ? -6 : -2);
        str += `${get.xjzh_cailiaoTranslate('xjzh_cailiao_nianyedan')}、${get.xjzh_cailiaoTranslate('xjzh_cailiao_kutong')}各${qishumingyushi ? 6 : 2}个开启了${get.translation(get.nameList(game.boss)[0])}挑战`;
        break;
      case 'xjzh_boss_qier':
        game.xjzh_changeCailiao('xjzh_cailiao_xianxue', qishumingyushi ? -27 : -9);
        str += `${qishumingyushi ? 27 : 9}个${get.xjzh_cailiaoTranslate('xjzh_cailiao_xianxue')}开启了${get.translation(get.nameList(game.boss)[0])}挑战`;
        break;
      case 'xjzh_boss_bingchuanjushou':
        game.xjzh_changeCailiao('xjzh_cailiao_kongju', qishumingyushi ? -27 : -9);
        str += `${qishumingyushi ? 27 : 9}个${get.xjzh_cailiaoTranslate('xjzh_cailiao_kongju')}开启了${get.translation(get.nameList(game.boss)[0])}挑战`;
        break;
      case 'xjzh_boss_andalier':
        game.xjzh_changeCailiao('xjzh_cailiao_wawa', qishumingyushi ? -6 : -2);
        game.xjzh_changeCailiao('xjzh_cailiao_jiasuo', qishumingyushi ? -6 : -2);
        str += `${get.xjzh_cailiaoTranslate('xjzh_cailiao_wawa')}、${get.xjzh_cailiaoTranslate('xjzh_cailiao_jiasuo')}各${qishumingyushi ? 6 : 2}个开启了${get.translation(get.nameList(game.boss)[0])}挑战`;
        break;
    }
    game.log(str);
  }
};
lib.arenaReady.push(async () => {
  game.xjzh_checkOpenChallenge();
  if (game.getExtensionConfig('仙家之魂', 'xjzh_qishuyaojianOptions') && game.getExtensionConfig('仙家之魂', 'xjzh_qishuyaojianOptions') !== 'clsoe') {
    lib.onover.push(game.xjzh_withPreCheck(game.xjzh_originalFunction));
  }
});
if (!lib.element.player.inits) lib.element.player.inits = [];
lib.element.player.inits.add(async (player) => {
  let config = game.getExtensionConfig('仙家之魂', 'xjzh_qishuyaojianOptions');
  if (get.nameList(player).length == 0) return;
  if (!['identity', 'doudizhu', 'boss'].includes(get.mode())) return;
  if (!config || config === 'close') return;
  if (config === 'own' && !get.isXHwujiang(player)) return;
  let playerNames = get.nameList(player),
    qishuEquipsLists = [];
  if (!playerNames.filter((item) => get.xjzh_equiped(item).length).length) return;
  if (playerNames.length == 1) {
    qishuEquipsLists = get.xjzh_equiped(playerNames[0]);
  } else {
    playerNames.forEach((name) => {
      qishuEquipsLists.addArray(get.xjzh_equiped(name));
    });
  }
  qishuEquipsLists.unique();
  if (!qishuEquipsLists.length) return;
  if (!player.isUnderControl(true)) return;
  let names = get.nameList(player)[0],
    lists = typeof names == 'string' ? player.xjzh_qishuyaojians ? player.xjzh_qishuyaojians.get(names) : [] : [];
  if (!player.node.xjzh_equipQishus) {
    var style = {
      left: '-18%',
      width: '26%',
      top: '62%',
      height: '18%',
      zIndex: '100',
      overflowX: 'visible',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      cursor: 'pointer',
      margin: '5px',
      position: 'relative',
      backgroundImage: 'url(extension/仙家之魂/css/images/qishuyaojian/qishuAnniu.png)',
      backgroundSize: '70%'
    };
    var equips = ui.create.div(player, style);
    equips.owner = player;
    player.node.xjzh_equipQishus = equips;
    var updateQishu = function (...args) {
      let list, name;
      for (let arg of args) {
        if (Array.isArray(arg)) list = arg;else
        if (typeof arg === 'string') name = arg;
      }
      var blank = ui.create.div(ui.window, {
        zIndex: '200',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
      });
      var setSize = function () {
        window.style.height = blank.clientWidth * 0.28 + 'px';
        window.style.fontSize = blank.clientWidth * 0.6 + 'px';
      };
      var resize = function () {
        setTimeout(setSize, 500);
      };
      lib.onresize.push(resize);
      var removeBlank = function () {
        blank.remove();
        lib.onresize.remove(resize);
      };
      var window = ui.create.div(blank, {
        left: '20%',
        width: '60%',
        top: '20%',
        height: blank.clientWidth * 0.28 + 'px',
        fontSize: blank.clientWidth * 0.6 + 'px',
        backgroundImage: 'url(extension/仙家之魂/css/images/qishuyaojian/userInfo.png)',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
      });
      var eixtAnniu = ui.create.div(window, {
        left: '85%',
        width: '20%',
        top: '10%',
        height: '20%',
        backgroundImage: 'url(extension/仙家之魂/css/images/qishuyaojian/exit2.png)',
        backgroundSize: '30%',
        backgroundRepeat: 'no-repeat'
      });
      eixtAnniu.listen(removeBlank);
      var playerImage = ui.create.div(window, {
        bottom: '11%',
        left: '10%',
        height: '68%',
        width: '23%',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        borderRadius: '20px'
      });
      playerImage.setBackground(name, 'character');
      if (get.nameList(player).length > 1) {
        var switchAnniu = ui.create.div(playerImage, {
          top: '82%',
          left: '6%',
          height: '68%',
          width: '23%',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          borderRadius: '20px',
          backgroundImage: 'url(extension/仙家之魂/css/images/qishuyaojian/switchAnniu.png)'
        });
        switchAnniu.listen(function () {
          names = names == get.nameList(player)[0] ? get.nameList(player)[1] : get.nameList(player)[0], lists = typeof names == 'string' ? player.xjzh_qishuyaojians.get(names) || [] : [];
          updateQishu(names, lists);
        });
      }
      var text = ui.create.div(window, {
        top: '25%',
        left: '40%',
        height: '10%',
        width: '45%',
        color: 'black',
        textAlign: 'center',
        fontSize: '4%',
        fontFamily: 'xinwei'
      });
      text.innerHTML = get.translation(name) + '已装备奇术要件';
      var intro = ui.create.div(blank, {
        zIndex: '51',
        width: '300px',
        textAlign: 'left',
        backgroundColor: '#412812',
        transition: 'left 0s,top 0s'
      });
      let equipPart1 = ui.create.div(window, {
        left: '37%',
        top: '42%',
        width: '17%',
        height: '47%',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
      });
      let equip1 = list[0];
      equipPart1.item = equip1;
      equipPart1.identifier = equip1;
      if (equip1) equipPart1.style.backgroundImage = 'url(extension/仙家之魂/image/qishuyaojian/cards/' + equip1 + '.jpg)';
      var equipPart2 = ui.create.div(window, {
        left: '55%',
        top: '42%',
        width: '17%',
        height: '47%',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
      });
      let runeEuips1 = get.xjzh_runeQishuList(equip1);
      if (runeEuips1.length) {
        let ritual = runeEuips1.find((item) => get.xjzh_runeType(item) == 'ritual');
        let pray = runeEuips1.find((item) => get.xjzh_runeType(item) == 'pray');
        if (ritual) {
          ui.create.div(equipPart1, {
            top: '10%',
            height: '35%',
            left: '36%',
            width: '35%',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundImage: `url(extension/仙家之魂/css/images/runes/ritualRunes.png)`
          });
        }
        if (pray) {
          ui.create.div(equipPart1, {
            top: '50%',
            height: '35%',
            left: '36%',
            width: '35%',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundImage: `url(extension/仙家之魂/css/images/runes/prayRunes.png)`
          });
        }
      }
      var equip2 = list[1];
      equipPart2.item = equip2;
      equipPart2.identifier = equip2;
      if (equip2) equipPart2.style.backgroundImage = 'url(extension/仙家之魂/image/qishuyaojian/cards/' + equip2 + '.jpg)';
      let runeEuips2 = get.xjzh_runeQishuList(equip2);
      if (runeEuips2.length) {
        let ritual = runeEuips2.find((item) => get.xjzh_runeType(item) == 'ritual');
        let pray = runeEuips2.find((item) => get.xjzh_runeType(item) == 'pray');
        if (ritual) {
          ui.create.div(equipPart2, {
            top: '10%',
            height: '35%',
            left: '36%',
            width: '35%',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundImage: `url(extension/仙家之魂/css/images/runes/ritualRunes.png)`
          });
        }
        if (pray) {
          ui.create.div(equipPart2, {
            top: '50%',
            height: '35%',
            left: '36%',
            width: '35%',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundImage: `url(extension/仙家之魂/css/images/runes/prayRunes.png)`
          });
        }
      }
      var equipPart3 = ui.create.div(window, {
        left: '73%',
        top: '42%',
        width: '17%',
        height: '47%',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
      });
      var equip3 = list[2];
      equipPart3.item = equip3;
      equipPart3.identifier = equip3;
      if (equip3) equipPart3.style.backgroundImage = 'url(extension/仙家之魂/image/qishuyaojian/cards/' + equip3 + '.jpg)';
      let runeEuips3 = get.xjzh_runeQishuList(equip3);
      if (runeEuips3.length) {
        let ritual = runeEuips3.find((item) => get.xjzh_runeType(item) == 'ritual');
        let pray = runeEuips3.find((item) => get.xjzh_runeType(item) == 'pray');
        if (ritual) {
          ui.create.div(equipPart3, {
            top: '10%',
            height: '35%',
            left: '36%',
            width: '35%',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundImage: `url(extension/仙家之魂/css/images/runes/ritualRunes.png)`
          });
        }
        if (pray) {
          ui.create.div(equipPart3, {
            top: '50%',
            height: '35%',
            left: '36%',
            width: '35%',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundImage: `url(extension/仙家之魂/css/images/runes/prayRunes.png)`
          });
        }
      }
      var updateIntro = function (obj) {
        obj.onmouseover = function (event) {
          var itemInfo = get.xjzh_equipInfo(this.item);
          if (!itemInfo || !Reflect.ownKeys(itemInfo).length) return;
          let runesList = get.xjzh_runeQishuList(this.item);
          var str = '';
          str += '<span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">' + itemInfo.translate + '</span><br>';
          str += itemInfo.translate_info + '</span>';
          if (runesList) {
            for (var i of runesList) {
              str += '<br><br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">' + get.xjzh_runeTranslate(i, get.xjzh_runeType(i)) + '(' + get.xjzh_runeTypeTranslate(i) + ')</span><br>';
              str += get.xjzh_runeTranslateInfo(i, get.xjzh_runeType(i)) + '</span>';
            }
          }
          intro.innerHTML = str;
          blank.appendChild(intro);
          intro.style.left = (event.clientX + 10) / game.documentZoom + 'px';
          intro.style.top = (event.clientY + 10) / game.documentZoom + 'px';
          intro.show();
        };
        obj.onmousemove = function (event) {
          intro.style.left = (event.clientX + 10) / game.documentZoom + 'px';
          intro.style.top = (event.clientY + 10) / game.documentZoom + 'px';
        };
        obj.onmouseout = function () {
          intro.hide();
        };
      };
      updateIntro(equipPart1);
      updateIntro(equipPart2);
      updateIntro(equipPart3);
    };
    equips.listen(function () {
      var player = this.owner;
      if (!player.xjzh_qishuyaojians) return;
      lists = typeof names == 'string' ? player.xjzh_qishuyaojians.get(names) || [] : [];
      updateQishu(names, lists);
    });
  }
});