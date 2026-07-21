import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
export let info = {
  name: 'dqzw_shijiadazu',
  connect: true,
  characterSort: {
    dqzw_shijiadazu: {
      chenjun_xieshi: ['dqzw_clan_xiean', 'dqzw_clan_xiexuan', 'dqzw_clan_xiedaoyun', 'dqzw_clan_xielingyun', 'dqzw_clan_xieyi', 'dqzw_clan_xieshang', 'dqzw_clan_xieyan', 'dqzw_clan_xieshi', 'dqzw_clan_xiekun'],
      //langya_zhuge: ['dqzw_clan_zhugeliang', 'dqzw_clan_zhugedan', 'dqzw_clan_zhugejin', 'dqzw_clan_zhugezhan', 'dqzw_clan_zhugeke', 'dqzw_clan_zhugeguo'],
      langya_wangshi: ['dqzw_clan_wangxiang', 'dqzw_clan_wangdun', 'dqzw_clan_wangdao', 'dqzw_clan_wangxizhi', 'dqzw_clan_wanghuizhi', 'dqzw_clan_wangningzhi', 'dqzw_clan_wangyan', 'dqzw_clan_wangxianzhi', 'dqzw_clan_wangrong'],
      wujun_lushi: ['dqzw_clan_luji'],
    },
  },
  characterTitle: {
    dqzw_clan_zhugezhan: '临危不挠',
    dqzw_clan_zhugeke: '白浪掀天',
    dqzw_clan_wangxiang: '毗倚隆政',
    dqzw_clan_wangdun: '蜂目豺声',
    dqzw_clan_wangdao: '江左管夷',
    dqzw_clan_wangxizhi: '凤阙亭歌 ',
    dqzw_clan_wanghuizhi: '卓荦真我',
    dqzw_clan_wangningzhi: '胡为泥中',
    dqzw_clan_wangyan: '神锋太俊',
    dqzw_clan_wangxianzhi: '河朔清憩',
    dqzw_clan_wangrong: '孤渠清赏',
    dqzw_clan_xiean: '东山潜鳞',
    dqzw_clan_xiexuan: '趋川文虎',
    dqzw_clan_xielingyun: '俞掠芙蕖',
    dqzw_clan_xiedaoyun: '林泉贞蕤',
    dqzw_clan_xieyi: '烬翼覆涛',
    dqzw_clan_xieshang: '清畅似达',
    dqzw_clan_xieyan: '贞干垂名',
    dqzw_clan_xieshi: '迎阻碎阶',
    dqzw_clan_xiekun: '临壑谏峰',
    dqzw_clan_luji: '荆衡杞梓',
  },
  character: {
    dqzw_clan_xiexuan: ['male', 'jin', 3, ['dqzw_zhanxun', 'dqzw_zongcu', 'dqzw_zhilan'], ['clan:陈郡谢氏'], ['des:谢玄(343年－388年),字幼度,陈郡阳夏县(今河南省太康县)人.东晋时期名将. [48] 豫州刺史谢奕之子,太傅谢安之侄.']],
    dqzw_clan_xiean: ['male', 'jin', 3, ['dqzw_tengyin', 'dqzw_zhenting', 'dqzw_zhilan'], ['clan:陈郡谢氏'], ['des:谢安(320年-385年10月12日),字安石.陈郡阳夏(今河南省太康县)人.东晋时期政治家、军事家 、名士,太常谢裒第三子、镇西将军谢尚堂弟.']],
    dqzw_clan_xiedaoyun: ['female', 'jin', 3, ['dqzw_langyu', 'dqzw_hongjie', 'dqzw_zhilan'], ['clan:陈郡谢氏'], ['des:谢道韫(生卒年不详),又作谢道蕴,名韬元,字令姜,陈郡阳夏县(今河南省太康县)人,出身陈郡谢氏.东晋时期才女、文学家.安西将军谢奕之女,书法家王凝之之妻.']],
    dqzw_clan_xielingyun: ['male', 'qun', 3, ['dqzw_xiyun', 'dqzw_qianao', 'dqzw_zhilan'], ['clan:陈郡谢氏'], ['des:谢灵运(385年~433年),名公义,字灵运,小名客儿,陈郡阳夏县(今河南省太康县)人,东晋至刘宋时期大臣、佛学家、旅行家,山水诗派鼻祖,秘书郎谢瑍之子,母为王羲之的外孙女刘氏.']],
    dqzw_clan_xieyi: ['male', 'jin', 4, ['dqzw_lingye', 'dqzw_xifeng', 'dqzw_zhilan'], ['clan:陈郡谢氏'], []],
    dqzw_clan_xieshang: ['male', 'jin', 3, ['dqzw_yuming', 'dqzw_lingqing', 'dqzw_zhilan'], ['clan:陈郡谢氏'], []],
    dqzw_clan_xieyan: ['male', 'jin', 4, ['dqzw_yugu', 'dqzw_zhilan'], ['clan:陈郡谢氏'], []],
    dqzw_clan_xieshi: ['male', 'jin', '3/4', ['dqzw_clan_xiangmo', 'dqzw_zhilan'], ['clan:陈郡谢氏'], []],
    dqzw_clan_xiekun: ['male', 'jin', 3, ['dqzw_cimang', 'dqzw_mobi', 'dqzw_zhilan'], ['clan:陈郡谢氏'], []],
    dqzw_clan_wangxiang: ['male', 'jin', 3, ['dqzw_bingxin', 'dqzw_lanying'], ['clan:琅琊王氏', 'character:wangxiang'], ['des:王祥(184年,一作180年－268年4月30日),字休徵.琅邪临沂(今山东省临沂市西孝友村)人  .三国曹魏至西晋时大臣.']],
    dqzw_clan_wangdun: ['male', 'jin', '4/5', ['dqzw_hongzhi', 'dqzw_lanying'], ['clan:琅琊王氏'], ['des:王敦(266年~324年),字处仲,琅琊临沂(今山东省临沂市)人.东晋时期大臣,晋武帝司马炎的女婿,治书侍御史王基的儿子.']],
    dqzw_clan_wangdao: ['male', 'jin', 3, ['dqzw_xieluo', 'dqzw_chegang', 'dqzw_lanying'], ['clan:琅琊王氏'], ['des:王导(276年－339年),字茂弘,小字赤龙 ,琅琊郡临沂县(今山东省临沂市)人.晋朝政治家 、书法家,东晋开国元勋.']],
    dqzw_clan_wangxizhi: ['male', 'jin', 3, ['dqzw_shangxu', 'dqzw_qinxuan', 'dqzw_lanying'], ['clan:琅琊王氏'], ['des:王羲之(303年—361年,一作321年—379年),字逸少,汉族,东晋时期著名书法家,有<书圣>之称.琅琊(今属山东临沂)人,后迁会稽山阴(今浙江绍兴),晚年隐居剡县金庭.']],
    dqzw_clan_wanghuizhi: ['male', 'jin', 3, ['dqzw_ranfeng', 'dqzw_guixian', 'dqzw_lanying'], ['clan:琅琊王氏'], ['des:王徽之(338年～386年),字子猷,琅琊郡临沂县(今山东省临沂市)人.东晋时期名士、书法家,右军将军王羲之(书圣)第五子.']],
    dqzw_clan_wangningzhi: ['male', 'jin', '3/4', ['dqzw_boyan', 'dqzw_wangsu', 'dqzw_lanying'], ['clan:琅琊王氏'], ['des:王凝之(334年～399年),字叔平,东晋时期大臣、书法家.<书圣>王羲之次子,才女谢道韫的丈夫,中书令王献之的兄长.']],
    dqzw_clan_wangyan: ['male', 'jin', 3, ['dqzw_taoyi', 'dqzw_chonghua', 'dqzw_lanying'], ['clan:琅琊王氏', 'character:wangyan'], ['des:王衍(256年～311年),字夷甫,琅邪郡临沂县(今山东郡临沂市)人.西晋末年重臣,著名的清谈家、思想家.名士王戎之弟,平北将军王义之子.']],
    dqzw_clan_wangxianzhi: ['male', 'jin', 3, ['dqzw_ningshu', 'dqzw_junci', 'dqzw_lanying'], ['clan:琅琊王氏']],
    dqzw_clan_wangrong: ['male', 'jin', 3, ['dqzw_suhui', 'dqzw_qingtan', 'dqzw_lanying'], ['clan:琅琊王氏']],
    dqzw_clan_luji: ['male', 'jin', 4, ['dqzw_pianya', 'dqzw_qingcai', 'dqzw_fengfu'], ['clan:吴郡陆氏']],
  },
  skill: {
    dqzw_zhanxun: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        player: 'drawAfter',
      },
      filter(_event, player) {
        return _status.currentPhase != player;
      },
      usable: 1,
      forced: true,
      content() {
        'step 0';
        player.chooseTarget(
          get.prompt2(event.name),
          function (_event, player, target) {
            return target.seatNum <= player.seatNum;
          },
          function (target) {
            let att = get.attitude(_status.event.player, target);
            if (att > 1) return Math.max(att - target.countCards('h', { type: 'basic' }), 1);
            return 0;
          }
        );
        ('step 1');
        let count = player.getStat('triggerSkill');
        if (result.targets?.length) {
          let card = get.cardPile((card) => get.type(card) == 'basic', 'cardPile');
          if (card) result.targets[0].gain(card, 'gain2');
          else game.log('#b牌堆中没有基本牌!');
        } else if (count && count[event.name]) count[event.name]--;
      },
    },
    dqzw_zongcu: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        target: 'useCardToTarget',
      },
      filter(event, player) {
        return get.color(event.card) == 'black' && event.targets.length == 1 && event.player != player;
      },
      logTarget: 'player',
      content: async function (event, trigger, player) {
        if (player.getCards('h').length) {
          await player.showCards(player.getCards('h'));
          const { links } = await trigger.player
            .choosePlayerCard('h', player, true, '重铸其中一张牌')
            .set('ai', (card) => get.value(card))
            .forResult();
          if (links?.length) player.recast(links);
        }
        trigger.getParent('useCard')._dqzw_zongcu_ = true;
      },
      group: 'dqzw_zongcu_gain',
      subSkill: {
        gain: {
          trigger: {
            global: 'useCardAfter',
          },
          filter: (event, player) => event._dqzw_zongcu_ && !player.hasHistory('damage', (evt) => evt.card == event.card),
          silent: true,
          content() {
            player.gain(trigger.cards.filterInD('od'), 'gain2');
          },
        },
      },
    },
    dqzw_tengyin: {
      mod: {
        cardEnabled(card, player) {
          if (get.type2(card, player) == 'trick') return false;
        },
        cardUsable(card, player) {
          if (get.type2(card, player) == 'trick') return false;
        },
        targetEnabled(card, player) {
          if (get.type2(card, player) == 'trick') return false;
        },
      },
      audio: 'ext:大权在握/audio/skill:2',
      forced: true,
      trigger: {
        global: 'phaseEnd',
      },
      filter: (event, player) => game.hasGlobalHistory('cardMove', (evt) => evt.name == 'lose' && evt.type == 'discard' && evt.cards.some((card) => get.cardNameLength(card) == 4)),
      content: async function (event, trigger, player) {
        player.removeSkill(event.name, true);
        let cards = [];
        game.getGlobalHistory('cardMove', (evt) => evt.name == 'lose' && evt.type == 'discard' && cards.add(...evt.cards.filter((card) => get.cardNameLength(card) == 4)));
        const { links } = await player.chooseButton(['获得其中一张', cards], (button) => get.value(button.link)).forResult();
        if (links) player.gain(links, 'gain2');
        player.phase('nodelay');
      },
    },
    dqzw_zhenting: {
      audio: 'ext:大权在握/audio/skill:2',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return game.hasPlayer((target) => lib.skill.dqzw_zhenting.filterTarget(null, player, target));
      },
      filterTarget(card, player, target) {
        return player.canCompare(target) && (target.countCards('h') > player.countCards('h') || target.seatNum > player.seatNum);
      },
      delay: 0.5,
      content: async function (event, trigger, player) {
        const { winner, target } = await player.chooseToCompare(event.target).forResult();
        if (player.hasUseTarget(target, true, true)) player.chooseUseTarget(target, true);
        else if (winner) {
          const { bool } = await player
            .chooseBool(`是否令${winner == player ? '你' : get.translation(winner)}摸两张牌？`)
            .set('choice', get.attitude(player, winner) > 0)
            .forResult();
          if (bool) {
            player.line(winner, 'green');
            winner.draw(2);
          }
        }
      },
      ai: {
        order: 1,
        result: {
          target(player, target) {
            var hs = player.getCards('h').sort((a, b) => b.number - a.number);
            var ts = target.getCards('h').sort((a, b) => b.number - a.number);
            if (!hs.length || !ts.length) return 0;
            if (hs[0].number > ts[0].number) return -1;
            if (hs.some((card) => player.getUseValue(card) > 0)) return 0.5;
            return 0;
          },
        },
      },
    },
    dqzw_langyu: {
      audio: 'ext:大权在握/audio/skill:2',
      forced: true,
      trigger: {
        global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
      },
      filter(event, player) {
        if (player.hasHistory('useSkill', (evt) => evt.skill == 'dqzw_langyu')) return false;
        if (event.name.indexOf('lose') == 0) {
          if (event.position != ui.discardPile) return false;
          if (event.name == 'lose' && event.getlx !== false) {
            var evt = event.getl(event.player);
            return evt && evt.player == _status.currentPhase && evt.cards2 && evt.cards2.length;
          }
          return game.hasPlayer(function (target) {
            var evt = event.getl(target);
            return evt && evt.player == _status.currentPhase && evt.cards2 && evt.cards2.length;
          });
        }
        var rEvt = event.parent.relatedEvent;
        if (!rEvt || rEvt.name == 'useCard' || rEvt.name == 'judge') return false;
        return rEvt.player == _status.currentPhase && rEvt.player.hasHistory('lose', (evt) => evt.parent == rEvt && (evt.hs.length || evt.es.length));
      },
      content() {
        'step 0';
        var cards = [];
        if (trigger.name.indexOf('lose') == 0) {
          game.filterPlayer().forEach(function (target) {
            var evt = trigger.getl(target);
            if (evt && evt.player == _status.currentPhase && evt.cards2) cards.addArray(evt.cards2);
          });
        } else {
          var rEvt = trigger.parent.relatedEvent;
          rEvt.player.checkHistory('lose', function (evt) {
            if (evt.parent == rEvt) {
              cards.addArray(trigger.cards.filter((card) => evt.hs.includes(card) || evt.es.includes(card)));
            }
          });
        }
        if (cards.length) {
          if (cards.length == 1) {
            var prompt2 = '<div class="text center">从牌堆获得一张与此牌同牌名的牌,' + get.translation(_status.currentPhase) + '可以交换你获得的牌</div>';
            player
              .chooseBool()
              .set('createDialog', [get.prompt(event.name), prompt2, cards])
              .set('ai', function () {
                if (get.attitude(player, _status.currentPhase) > 1) return true;
                return _status.currentPhase.countCards('h', (card) => get.value(cards[0]) - get.value(card)) - _status.currentPhase.getDamagedHp() < 0;
              });
            event.card = cards[0];
          } else {
            var prompt2 = '<div class="text center">从牌堆获得一张其中一种牌名的牌,' + get.translation(_status.currentPhase) + '可以交换你获得的牌</div>';
            player.chooseButton([get.prompt(event.name), prompt2, cards]).set('ai', function (button) {
              return player.getUseValue(button.link);
            });
          }
        } else {
          event.finish();
        }
        ('step 1');
        if (result.links?.length) {
          var togain = get.cardPile2((event.card || result.links[0]).name);
          if (togain) {
            player.gain(togain, 'gain2');
            if (_status.currentPhase != player && !_status.currentPhase.isIn()) event.card = togain;
            else event.finish();
          } else {
            event.finish();
          }
        } else {
          event.finish();
        }
        ('step 2');
        var num = _status.currentPhase.getDamagedHp();
        if (num > 0) {
          _status.currentPhase
            .chooseCard('朗喻:你可以用' + get.cnNumber(num) + '张手牌交换此牌', 'h', num)
            .set('promptx', [[card]])
            .set('ai', function (card) {
              return get.value(event.card, _status.event.player) - get.value(card, _status.event.player);
            });
        } else {
          _status.currentPhase
            .chooseBool()
            .set('createDialog', ['朗喻:你可以获得此牌', [card]])
            .set('ai', function (event, player) {
              return get.value(card, player);
            });
        }
        ('step 3');
        if (result.cards?.length) {
          _status.currentPhase.swapHandcards(player, result.cards || [], [card]);
        }
      },
    },
    dqzw_hongjie: {
      audio: 'ext:大权在握/audio/skill:2',
      limited: true,
      trigger: {
        global: 'dying',
      },
      filter(event, player) {
        return event.player.countCards('h') < player.countCards('h') && event.player.hp <= 0;
      },
      logTarget: 'player',
      check(event, player) {
        if (get.attitude(player, event.player) < 4 || event.player.countCards('h') >= event.player.maxHp) return false;
        if (player.countCards('hs', (card) => player.canSaveCard(card, event.player)) >= 1 - event.player.hp) return false;
        if (event.player == player || event.player == get.zhu(player)) return true;
        return !player.hasUnknown();
      },
      content() {
        player.awakenSkill(event.name);
        trigger.player.drawTo(trigger.player.maxHp);
        trigger.player.storage.dqzw_hongjie_target = player;
      },
      global: 'dqzw_hongjie_recover',
      subSkill: {
        recover: {
          trigger: {
            player: 'phaseEnd',
          },
          filter: (_event, player) => player.isDamaged() && player.storage.dqzw_hongjie_target,
          prompt: (_event, player) => `是否回复一点体力并令${get.translation(player.storage.dqzw_hongjie_target)}翻面？`,
          check(_event, player) {
            let target = player.storage.dqzw_hongjie_target;
            return (player.hp < 2 && player.maxHp > 2) || get.attitude(player, target) < 4 || target.hasSkillTag('noturn') || target.isTurnedOver();
          },
          popup: false,
          content() {
            let target = player.storage.dqzw_hongjie_target;
            if (target) {
              player.recover();
              target.turnOver();
            }
          },
        },
      },
    },
    dqzw_xiyun: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        player: ['useCardAfter', 'respondAfter'],
      },
      filter(event, player) {
        return get.type(event.card) == 'basic';
      },
      content: async function (event, trigger, player) {
        let cards = get.bottomCards(3);
        game.updateRoundNumber();
        const { links } = await player
          .chooseCardButton(cards, true, '歙云:选择要置于牌堆顶的牌')
          .set('ai', function (button) {
            if (button.link.name == trigger.card.name) return 10;
            return (_status.event.reverse ? 1 : -1) * get.buttonValue(button);
          })
          .set('reverse', _status.currentPhase && _status.currentPhase.next ? get.attitude(player, _status.currentPhase.next) > 0 : false)
          .forResult();
        if (links?.length) {
          let remaining = cards.filter((card) => card != links[0]);
          ui.cardPile.insertBefore(links[0], ui.cardPile.firstChild);
          game.log(player, '将', links, '置于牌堆顶');
          if (links[0].name == trigger.card.name) player.gain(remaining, 'gain2');
          else {
            const { moved } = await player
              .chooseToMove('歙云:将剩余牌以任意顺序放回牌堆底', true)
              .set('list', [['剩余牌', remaining]])
              .set('processAI', (list) => [list[0][1].slice(0).sort((a, b) => get.value(a) - get.value(b))])
              .forResult();
            if (moved && moved[0]) for (let card of moved[0]) ui.cardPile.appendChild(card);
          }
          game.updateRoundNumber();
        }
      },
    },
    dqzw_qianao: {
      audio: 'ext:大权在握/audio/skill:2',
      forced: true,
      trigger: {
        global: 'roundStart',
      },
      filter(event, player) {
        return player.countCards('h') > player.hp;
      },
      content: async function (event, trigger, player) {
        const { cards } = await player
          .chooseToDiscard('h', Math.max(1, player.countCards('h') - player.hp), get.prompt2(event.name))
          .set('ai', (card) => 6 - get.value(card))
          .forResult();
        if (cards?.length) {
          player.draw(cards.length * 2);
          player.addMark(event.name + '_effect', cards.length, false);
        }
      },
      group: 'dqzw_qianao_effect',
      subSkill: {
        effect: {
          audio: 'dqzw_qianao',
          silent: true,
          charlotte: true,
          intro: {
            content: '下#个回合开始时,进行一次闪电判定',
          },
          trigger: {
            player: 'phaseBegin',
          },
          filter(event, player) {
            return player.countMark('dqzw_qianao_effect') > 0;
          },
          content() {
            player.removeMark(event.name, 1, false);
            player.executeDelayCardEffect('shandian');
          },
        },
      },
    },
    // 清畅似达--谢尚
    dqzw_yuming: {
      trigger: {
        global: 'damageAfter',
      },
      filter(event, player) {
        let evt = event.getParent(2),
          num = Math.abs(player.seatNum - event.player.seatNum);
        if (!event.player.isAlive() || player.countCards('h') < num || event.player.countCards('h') < num || !event.card) return false;
        if (evt.name == 'useCard') return evt.targets && evt.targets.length > 1;
        let info = lib.card[event.card.name];
        if (info) {
          if (info.notarget) return false;
          if (info.selectTarget != undefined) {
            if (Array.isArray(info.selectTarget)) {
              if (info.selectTarget[0] < 0) return !info.toself;
              return info.selectTarget[0] != 1 || info.selectTarget[1] != 1;
            } else {
              if (info.selectTarget < 0) return !info.toself;
              return info.selectTarget != 1;
            }
          }
        }
        return false;
      },
      usable: 1,
      forced: true,
      async content(event, trigger, player) {
        let result,
          count = player.getStat('triggerSkill'),
          target = trigger.player,
          num = Math.abs(player.seatNum - target.seatNum);
        if (target == player) result = player.chooseBool(get.prompt2(event.name, player)).set('choice', true).forResult();
        else {
          let hs = target.getCards('h'),
            shown = hs.filter((card) => get.is.shownCard(card)),
            list = [
              ['你的手牌', player.getCards('h')],
              [get.translation(target) + '的手牌', target.isUnderControl(true) || player.hasSkillTag('viewHandcard', null, target, true) ? hs.remove(shown) : [hs.remove(shown), 'blank']],
            ];

          if (shown.length) list.push([get.translation(target) + '的明置牌', shown]);
          result = await player
            .chooseToMove(get.prompt2(event.name, target))
            .set('list', list)
            .set('filterOk', (moved) => moved[0].filter((card) => !get.event('_hs').includes(card)).length <= num)
            .set('filterMove', (_from, to) => typeof to != 'number')
            .set('processAI', (list) => {
              let num = get.event('num'),
                cards1 = list[0][1].randomRemove(num),
                cards2 = list[1][1].randomRemove(num),
                cards3,
                listx;
              if (cards2.length < num && list[2] && list[2][1]) cards3 = list[2][1].randomRemove(num - cards2.length);
              listx = [list[0][1].concat(cards2), list[1][1].concat(cards1)];
              if (cards3) listx.push(list[2][1].concat(cards3));
              return listx;
            })
            .set('_hs', player.getCards('h'))
            .set('num', num)
            .forResult();
        }
        if (result && result.bool) {
          let bool = true;
          if (result.moved) {
            const moved = result.moved;
            let hs1 = player.getCards('h'),
              cards1 = moved[0].filter((card) => !hs1.includes(card)),
              hs2 = target.getCards('h'),
              cards2 = moved[1].filter((card) => !hs2.includes(card)).concat(moved[2] ? moved[2].filter((card) => !hs2.includes(card)) : []);
            bool = cards1.some((card) => cards2.some((cardx) => cardx.suit == card.suit));
            player.swapHandcards(target, cards2, cards1);
          }
          if (bool) target.addTempSkill(event.name + '_cancel');
        } else if (count && count[event.name]) count[event.name]--;
      },
      subSkill: {
        cancel: {
          mark: true,
          intro: {
            content: '防止下次受到的伤害',
          },
          trigger: {
            player: 'damageBefore',
          },
          charlotte: true,
          silent: true,
          content() {
            trigger.cancel();
            player.removeSkill(event.name);
          },
        },
      },
    },
    dqzw_lingqing: {
      mod: {
        aiOrder(player, card, num) {
          if (lib.skill.dqzw_lingqing.isLingqing(card)) return num + 10;
        },
      },
      trigger: {
        player: 'useCardToTarget',
      },
      filter(event, player) {
        return get.type(event.card, player) == 'trick' && event.targets.length == 1 && lib.skill.dqzw_lingqing.getCard();
      },
      coprime(num1, num2) {
        let factor = (num) => {
          let list = [];
          for (var i = 1; i < num; i++) {
            let result = num / i;
            if (!String(result).includes('.')) list.add(i, result);
          }
          return list;
        };
        let list = factor(num2);
        return !factor(num1).some((num) => list.includes(num) && num != 1);
      },
      getCard() {
        let card,
          use = [];
        game.getGlobalHistory('cardMove', (evt) => {
          if (evt.name == 'lose' && evt.cards && [ui.discardPile, ui.ordering].includes(evt.position)) {
            if (evt.type == 'use') use.add(...evt.cards);
            else use.remove(...evt.cards);
          }
        });
        game.getGlobalHistory('cardMove', (evt) => evt.name == 'cardsDiscard' || (evt.name == 'lose' && evt.type != 'use' && [ui.discardPile, ui.ordering].includes(evt.position)))
          .slice(0)
          .reverse()
          .some((evt) => {
            if (evt.cards) {
              card = evt.cards.remove(...use).find((card) => get.position(card) == 'd');
              if (card) return true;
            }
          });
        return card;
      },
      isLingqing(card, player, nocard, filter = (card) => get.type(card) == 'trick') {
        let info = lib.card[card.name],
          bool;
        if (info && !info.notarget) {
          if (info.selectTarget == undefined && info.filterTarget) bool = true;
          else if (Array.isArray(info.selectTarget)) {
            if (info.selectTarget[0] < 0) bool = player ? game.countPlayer((target) => player.canUse(card, target, true, true)) == 1 : info.toself;
            else bool = info.selectTarget[0] == 1 || info.selectTarget[1] == 1;
          } else {
            if (info.selectTarget < 0) bool = player ? game.countPlayer((target) => player.canUse(card, target, true, true)) == 1 : false;
            else bool = info.selectTarget == 1;
          }
        }
        if (bool) {
          if (nocard) return true;
          let cardx = lib.skill.dqzw_lingqing.getCard();
          if (cardx) return filter(card) && lib.skill.dqzw_lingqing.coprime(cardx.number, card.number);
        }
        return false;
      },
      prompt(event, player) {
        let card = lib.skill.dqzw_lingqing.getCard();
        return `${get.prompt('dqzw_lingqing')}<br>获得${get.translation(card)}并${lib.skill.dqzw_lingqing.coprime(card.number, event.card.number) ? '为' + get.translation(event.card) + '额外指定一个目标' : '失去一点体力'}`;
      },
      check(event) {
        let card = lib.skill.dqzw_lingqing.getCard();
        return lib.skill.dqzw_lingqing.coprime(card.number, event.card.number) || get.tag(card, 'recover');
      },
      async content(event, trigger, player) {
        let card = lib.skill.dqzw_lingqing.getCard();
        if (card) {
          player.gain(card, 'gain2');
          if (lib.skill.dqzw_lingqing.coprime(card.number, trigger.card.number)) {
            const { targets } = await player
              .chooseTarget(
                `为${get.translation(trigger.card)}额外指定一个目标`,
                (_card, player, target) => !_status.event.targets.includes(target) && lib.filter.filterTarget2(get.event('card'), player, target),
                (target) => get.effect(target, get.event('card'), get.player(), get.player())
              )
              .set('targets', trigger.targets)
              .set('card', trigger.card)
              .forResult();
            if (targets?.length) {
              player.line(targets[0], 'green');
              trigger.getParent('useCard').targets.add(targets[0]);
              game.log(targets[0], '成为了', trigger.card, '的额外目标');
            }
          } else player.loseHp();
        }
      },
      group: ['dqzw_lingqing_tag', 'dqzw_lingqing_look'],
      subSkill: {
        look: {
          enable: 'chooseToUse',
          filter(event) {
            return event.dqzw_lingqing_look_card;
          },
          onChooseToUse(event) {
            if (game.online || !event.player.hasSkill('dqzw_lingqing_look')) return;
            event.set('dqzw_lingqing_look_card', lib.skill.dqzw_lingqing.getCard());
          },
          forced: true,
          chooseButton: {
            dialog(event) {
              let dialog = ui.create.dialog(get.translation('dqzw_lingqing'), 'hidden');
              if (event.dqzw_lingqing_look_card) dialog.add([event.dqzw_lingqing_look_card]);
              return dialog;
            },
            filter() {
              return false;
            },
          },
        },
        tag: {
          trigger: {
            global: ['gainAfter', 'loseAfter'],
          },
          silent: true,
          _priority: 50,
          content() {
            player.getCards('h', (card) => {
              if (lib.skill.dqzw_lingqing.isLingqing(card, player)) card.addGaintag(event.name);
              else card.removeGaintag(event.name);
            });
          },
        },
      },
    },
    // 贞干垂名--谢琰
    dqzw_yugu: {
      trigger: {
        source: 'damageAfter',
      },
      filter(event) {
        return event.player.isAlive() && event.player.countCards('h') != event.player.hp;
      },
      check(event, player) {
        let target = event.player,
          hlen = target.countCards('h'),
          num = Math.abs(hlen - target.hp),
          att = get.attitude(player, target);
        if (hlen > target.hp) return att < 4;
        return att > 3 || (num == 1 && !player.hasSkill('dqzw_yugu_draw'));
      },
      logTarget: 'player',
      async content(event, trigger, player) {
        let target = trigger.player,
          hlen = target.countCards('h'),
          num = Math.abs(hlen - target.hp);
        if (hlen > target.hp) {
          const { cards } = await target
            .chooseToDiscard('h', num, true)
            .set('_sourcex', player)
            .set('ai', (card) => {
              let source = get.event('_sourcex'),
                player = get.player();
              if (card.name == 'sha') return get.effect(source, card, player, player);
              return 6 - get.value(card);
            })
            .forResult();
          if (cards?.length) for (let sha of cards.filter((card) => card.name == 'sha')) await target.useCard(sha, player);
        } else {
          const { cards } = await target.draw(num, 'nodelay').forResult();
          if (!cards.some((card) => card.name == 'sha')) player.addTempSkill(event.name + '_draw');
        }
      },
      subSkill: {
        draw: {
          mark: true,
          intro: {
            content: '回合结束时执行一个额外的摸牌阶段',
          },
          trigger: {
            player: 'phaseJieshuBegin',
          },
          charlotte: true,
          silent: true,
          content() {
            player.phaseDraw().set('skill', 'dqzw_yugu');
          },
        },
      },
    },
    // 迎阻碎阶--谢石
    dqzw_clan_xiangmo: {
      trigger: {
        global: 'useCardAfter',
      },
      filter(event, player) {
        return get.type2(event.card) == 'trick' && event.targets && event.targets.includes(player);
      },
      usable: 1,
      forced: true,
      async content(event, trigger, player) {
        const target = trigger.player;
        const { control } = await player
          .chooseControl('一', '二', '三', 'cancel2')
          .set('prompt', get.prompt2(event.name, target))
          .set('targetx', target)
          .set('ai', () => {
            let target = get.event('targetx'),
              hlen = target.countCards('h'),
              player = get.player(),
              att = get.attitude(player, target);
            if (_status.currentPhase == target) {
              if (att > 3) return '三';
              return 'cancel2';
            }
            return att > 3 ? '三' : '一';
          })
          .forResult();
        const map = {
          一: 1,
          二: 2,
          三: 3,
        },
          count = player.getStat('triggerSkill');
        let num = map[control];
        if (num > 0) {
          target.setStorage(event.name + '_mark_target', player);
          target.addMark(event.name + '_mark', num, false);
          target.addTempSkill(event.name + '_mark');
          target.draw(num);
        } else if (count && count[event.name]) count[event.name]--;
      },
      subSkill: {
        mark: {
          mark: true,
          intro: {
            content(storage, player) {
              return `本回合结束前需再对${get.translation(player.getStorage('dqzw_clan_xiangmo_mark_target'))}使用${get.cnNumber(storage)}张牌,否则下回合手牌上限视为1`;
            },
          },
          onremove(player, skill) {
            player.removeStorage(skill, true);
            player.removeStorage(skill + '_target', true);
          },
          trigger: {
            player: 'useCard',
            global: 'phaseEnd',
          },
          filter(event, player) {
            if (event.name == 'useCard') return player.countMark('dqzw_clan_xiangmo_mark') && event.targets && event.targets.includes(player.getStorage('dqzw_clan_xiangmo_mark_target'));
            return player.countMark('dqzw_clan_xiangmo_mark');
          },
          silent: true,
          _priority: 50,
          content() {
            if (trigger.name == 'useCard') {
              player.removeMark(event.name, 1, false);
              if (!player.countMark(event.name)) player.removeStorage(event.name, true);
            } else player.addTempSkill(event.name + '_effect_1', { player: 'phaseBegin' });
          },
        },
        mark_effect_1: {
          trigger: {
            player: 'phaseBefore',
          },
          silent: true,
          _priority: 100,
          content() {
            let name = event.name.slice(0, -1) + '2';
            player.addTempSkill(name, 'phaseAfter');
          },
        },
        mark_effect_2: {
          mark: true,
          intro: {
            content: '本回合手牌上限视为1',
          },
          charlotte: true,
          mod: {
            maxHandcardFinal: () => 1,
          },
        },
      },
    },
    // 临壑谏峰--谢鲲
    dqzw_cimang: {
      trigger: {
        global: 'drawAfter',
      },
      filter(event) {
        return event.num > 1 && _status.currentPhase == event.player;
      },
      logTarget: 'player',
      async content(event, trigger, player) {
        const target = trigger.player,
          { result } = trigger;
        game.addCardKnower(result, player);
        const { links } = await player
          .chooseButton(
            ['弃置一张【杀】', result],
            (button) => {
              let target = get.event('targetx'),
                shalen = target.countCards('hs', (card) => get.tag(card, 'damage') && card.isKnownBy(player) && target.canUse(card, player, true));
              player = get.player();
              if (get.attitude(player, target) > 3) return 0;
              if (shalen > 1) return 0;
              return target.getUseValue(button.link);
            },
            (button) => button.link.name == 'sha'
          )
          .set('targetx', target)
          .forResult();
        if (links?.length) {
          player.line(target, 'green');
          target.discard(links);
        }
        target.setStorage(event.name + '_effect', player);
        target.addTempSkill(event.name + '_effect');
      },
      subSkill: {
        effect: {
          mark: true,
          intro: {
            content: '本回合对$使用的下一张牌无次数限制且其不能响应',
          },
          mod: {
            cardUsableTarget(card, player, target) {
              if (target == player.getStorage('dqzw_cimang_effect')) return true;
            },
          },
          charlotte: true,
          trigger: {
            player: 'useCard',
          },
          filter(event, player) {
            return event.targets && event.targets.includes(player.getStorage('dqzw_cimang_effect'));
          },
          silent: true,
          content() {
            trigger.directHit.add(player.getStorage(event.name));
            player.removeSkill(event.name, true);
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (tag == 'directHit_ai') return arg.target == player.getStorage('dqzw_cimang_effect');
            },
            effect: {
              player(card, player, target) {
                if (get.tag(card, 'damage') && target == player.getStorage('dqzw_cimang_effect')) return [1, 2];
              },
            },
          },
        },
      },
    },
    dqzw_mobi: {
      trigger: {
        global: 'useCardToTarget',
      },
      filter(event, player) {
        return get.tag(event.card, 'damage') && event.targets && event.targets.length == 1 && player.canCompare(event.target);
      },
      check(event, player) {
        return get.attitude(player, event.player) < 0;
      },
      usable: 1,
      logTarget: 'target',
      async content(event, trigger, player) {
        const target = trigger.target;
        const { bool } = await player.chooseToCompare(target, (card) => -card.number).forResult();
        if (!bool) {
          await player.draw('nodelay');
          await target.draw('nodelay');
          player.addTempSkill('diaohulishan', (event) => event == trigger.getParent('useCard'));
        }
      },
    },
    dqzw_zhilan: {
      audio: 'ext:大权在握/audio/skill:2',
      forced: true,
      clanSkill: true,
      trigger: {
        player: 'phaseDrawEnd',
      },
      filter(event, player) {
        return game.hasPlayer((target) => target.hasClan('陈郡谢氏') && (_status.connectMode || player.hasCard((card) => card.suit == 'club' && lib.filter.cardDiscardable(card, player), 'he')));
      },
      content: async function (event, trigger, player) {
        const { cards, targets } = await player
          .chooseCardTarget({
            prompt: get.prompt2(event.name),
            selectCard: [1, 2],
            filterCard: { suit: 'club' },
            filterTarget: (_event, player, target) => target.hasClan('陈郡谢氏') && lib.filter.filterTarget2({ name: target.seatNum > player.seatNum ? 'wuzhong' : 'tao' }, player, target),
            position: 'he',
            ai1: (card) => 6 - get.value(card),
            ai2(target) {
              const player = get.player();
              return get.effect(target, { name: target.seatNum > player.seatNum ? 'wuzhong' : 'tao' }, player, player);
            },
          })
          .forResult();
        if (cards && targets && cards.length && targets.length) {
          const target = targets[0],
            bool = target.seatNum > player.seatNum;
          player.useCard({ name: bool ? 'wuzhong' : 'tao' }, targets, cards);
          player.draw(cards.length);
        }
      },
    },
    // 毗倚隆政--族王祥
    dqzw_bingxin: {
      audio: 'ext:大权在握/audio/skill:2',
      enable: 'chooseToUse',
      usable: 1,
      filter: (event, player) =>
        player.countCards('h') > 0 &&
        ['tao', 'wuzhong'].some(
          (name) =>
            event.filterCard &&
            event.filterCard(
              {
                name: name,
                storage: {
                  dqzw_bingxin: true,
                },
              },
              player,
              event
            )
        ),
      chooseButton: {
        dialog: (event, player) => ui.create.dialog(get.translation('dqzw_bingxin'), [['wuzhong', 'tao'].map((name) => [get.type(name), '', name]), 'vcard']),
        filter(button) {
          let event = _status.event.parent;
          return (
            event &&
            event.filterCard &&
            event.filterCard(
              {
                name: button.link[2],
                storage: {
                  dqzw_bingxin: true,
                },
              },
              _status.event.player,
              event
            )
          );
        },
        check: (button) =>
          get.player().getUseValue({
            name: button.link[2],
            storage: {
              dqzw_bingxin: true,
            },
          }),
        backup(links, player) {
          return {
            audio: 'dqzw_bingxin',
            viewAs: {
              name: links[0][2],
              storage: {
                dqzw_bingxin: true,
              },
            },
            filterCard: (card, player) => !ui.selected.cards.some((cardx) => cardx.suit == card.suit),
            complexCard: true,
            selectCard: [1, Infinity],
            position: 'he',
            popname: true,
            precontent() {
              player
                .when({ player: 'useCard' })
                .filter((event, player) => event.card.storage && event.card.storage.dqzw_bingxin)
                .then(function () {
                  event.insert(
                    async function (event, trigger, player) {
                      let suits = trigger.cards.map((card) => card.suit);
                      const { targets } = await player
                        .chooseTarget(
                          `###${get.prompt('bingxin')}###令自己本回合只能使用${get.translation(suits)}牌并令一名手牌数最少的角色成为${get.translation(trigger.card)}的额外目标`,
                          (_card, player, target) => !_status.event.targets.includes(target) && target.isMinHandcard() && lib.filter.filterTarget2(_status.event.card, player, target),
                          (target) => get.effect(target, _status.event.card, get.player(), get.player())
                        )
                        .set('targets', trigger.targets)
                        .set('card', trigger.card)
                        .set('num', trigger.cards.length)
                        .forResult();
                      if (targets?.length) {
                        player.setStorage('dqzw_bingxin_unusable', suits);
                        player.addTempSkill('dqzw_bingxin_unusable');
                        trigger.targets.add(...targets);
                        game.log(targets, '成为了', trigger.card, '的额外目标');
                      }
                    },
                    { player, _trigger: trigger }
                  );
                });
            },
          };
        },
        prompt: (links) => '选择【' + get.translation(links[0][2]) + '】的目标',
      },
      ai: {
        order: 1,
        save: true,
        result: {
          player: 1,
        },
      },
      subSkill: {
        backup: {},
        unusable: {
          mark: true,
          intro: {
            content: '本回合只能使用$牌',
          },
          mod: {
            cardEnabled(card, player) {
              let suits = player.getStorage('dqzw_bingxin_unusable');
              if (!suits.includes(card.suit)) return false;
            },
            cardUsable(card, player) {
              let suits = player.getStorage('dqzw_bingxin_unusable');
              if (!suits.includes(card.suit)) return false;
            },
            cardSavable(card, player) {
              let suits = player.getStorage('dqzw_bingxin_unusable');
              if (!suits.includes(card.suit)) return false;
            },
          },
        },
      },
    },
    // 蜂目豺声--族王敦
    dqzw_hongzhi: {
      enable: 'chooseToUse',
      filter(event, player) {
        let list = [['zengbin', () => h < max]],
          max = player.getHandcardLimit(),
          h = player.countCards('h');
        if (h > max) list.push(['sha', 'fire', () => h > max]);
        return (
          player.countCards('h') != player.getHandcardLimit() &&
          list.some(
            (item) =>
              !player.getStat()['dqzw_hongzhi_' + item[0]] &&
              !player.storage['dqzw_hongzhi_' + item[0]] &&
              item.at(-1)() &&
              event.filterCard &&
              event.filterCard(
                {
                  name: item[0],
                  nature: item[1],
                },
                player,
                event
              )
          )
        );
      },
      position: 'hes',
      get viewAs() {
        let player = get.player();
        return player && player.countCards('h') > player.getHandcardLimit() ? { name: 'sha', nature: 'fire' } : { name: 'zengbin' };
      },
      filterCard: true,
      selectCard() {
        let player = get.player();
        if (player) {
          let max = player.getHandcardLimit(),
            h = player.countCards('h');
          if (h > max) return h - max;
          return 1;
        }
        return -1;
      },
      check(card) {
        let player = get.player();
        return (player && player.countCards('h') > player.getHandcardLimit() ? 5 : 7) - get.value(card);
      },
      onuse(result, player) {
        player.getStat()['dqzw_hongzhi_' + result.card.name] = true;
      },
      ai: {
        respondSha: true,
        result: {
          target: (target) => Math.max(1, 2 - target.countCards('h') / 10),
        },
      },
      group: 'dqzw_hongzhi_phase',
      subSkill: {
        backup: {},
        phase: {
          trigger: {
            global: 'phaseJieshuBegin',
          },
          filter: (event, player) => event.player.countCards('h') > player.countCards('h'),
          forced: true,
          content() {
            'step 0';
            let max = player.getHandcardLimit(),
              h = player.countCards('h'),
              evt = player.chooseToUse({
                prompt: `###${get.prompt('dqzw_hongzhi')}###将${h > max ? get.cnNumber(h - max) + '张牌当火【杀】使用' : '一张牌当增兵减灶使用'};若如此做,〖泓志〗无法再转化【${h > max ? '增兵减灶' : '杀'}】.`,
                norestore: true,
                logSkill: 'dqzw_hongzhi',
                _backupevent: 'dqzw_hongzhi',
                custom: {
                  add: {},
                  replace: {
                    window: () => 0,
                  },
                },
              });
            if (!lib.skill.dqzw_hongzhi.filter(evt, player)) evt.finish();
            evt.backup('dqzw_hongzhi');
            ('step 1');
            let list = ['zengbin', 'sha'];
            if (result.bool) {
              list.remove(result.card.name);
              player.storage['dqzw_hongzhi_' + list[0]] = true;
            }
          },
        },
      },
    },
    // 江左管夷--族王导
    dqzw_xieluo: {
      trigger: {
        player: 'useCardToPlayered',
        target: 'useCardToTargeted',
      },
      filter: (event, player, name) => get.type2(event.card) == 'trick' && event.targets && event.targets.length && event.target == (name == 'useCardToPlayered' ? event.targets[0] : player),
      usable: 1,
      forced: true,
      content() {
        'step 0';
        let arr = [];
        game.filterPlayer((current) => {
          let num = current.countCards('h');
          if (!arr[num]) arr[num] = 1;
          else arr[num]++;
        });
        let clone = [...arr];
        clone.sort((a, b) => b - a);
        arr = Math.min(...arr.filter((num) => num == clone[0]).map((num) => arr.indexOf(num)));
        event.num = arr;
        player
          .chooseTarget(
            '###' + get.prompt(event.name) + '###令一名目标角色将手牌调整至' + get.cnNumber(arr) + '张' + (trigger.cards && trigger.cards.filterInD('o').length ? ',若其因此弃置了牌则其获得' + get.translation(trigger.cards.filterInD('o')) : ''),
            (_card, _player, target) => {
              let evt = _status.event.getTrigger();
              return evt.targets && evt.targets.includes(target) && target.countCards('h') != _status.event.num;
            },
            (target) => {
              let player = get.player(),
                num = _status.event.num,
                hs = target.getCards('h'),
                evt = _status.event.getTrigger(),
                cards = evt.cards.filterInD('o'),
                att = get.attitude(player, target);
              if (att > 0) {
                let discard = [];
                if (hs.length > num && hs.length - num <= cards.length && cards.every((card) => hs.some((cardx) => !discard.includes(cardx) && lib.filter.cardDiscardable(card, target, evt) && get.value(cardx, target) < get.value(card, target) && discard.push(cardx)))) return att - hs.length;
                if (hs.length < num) return att + hs.length - num;
              }
              if (att < 0) if (hs.length + 1 > num) return -att + hs.length - num;
              return 0;
            }
          )
          .set('num', arr);
        ('step 1');
        let count = player.getStat('triggerSkill');
        if (result.targets?.length) {
          let target = result.targets[0],
            num = target.countCards('h');
          if (num > event.num) target.chooseToDiscard(num - event.num, true);
          else target.drawTo(event.num);
          event.target = target;
        } else if (count && count[event.name]) count[event.name]--;
        ('step 2');
        let cards = trigger.cards && trigger.cards.filterInD('o');
        if (result.cards && result.cards.length && cards && cards.length && target) target.gain(cards, 'gain2');
      },
    },
    dqzw_chegang: {
      trigger: {
        player: 'phaseJieshuBegin',
      },
      filter: () => game.hasPlayer((current) => current.countCards('h') > 0),
      forced: true,
      content() {
        'step 0';
        player
          .chooseTarget(get.prompt2(event.name), (_card, _player, target) => target.countCards('h') > 0)
          .set('ai', (target) => {
            let player = _status.event.player,
              att = get.attitude(player, target);
            if (att > 0) return att + target.countCards('hs');
            return 0;
          });
        ('step 1');
        if (result.targets?.length) {
          let target = result.targets[0];
          target.chooseToUse(get.translation(event.name) + ':使用一张手牌,' + (target == player ? '若指定了目标,则你摸一张牌' : '若指定了其他角色为目标则' + get.translation(player) + '摸一张牌,否则你摸一张牌'));
          event.target = target;
        }
        ('step 2');
        if (result.card && result.targets && result.targets.length && target) {
          if (result.targets.some((current) => current != target)) player.draw('nodelay');
          else target.draw('nodelay');
        }
      },
    },
    // 凤阙亭歌--王羲之
    dqzw_shangxu: {
      audio: 'ext:大权在握/audio/skill:2',
      enable: 'phaseUse',
      usable: 1,
      filter: (_event, player) => player.countCards('hes', { type: 'basic' }),
      filterCard: { type: 'basic' },
      filterTarget(_card, player, target) {
        return ui.selected.targets.length
          ? lib.filter.filterTarget(
            {
              name: 'yiyi',
              storage: {
                dqzw_shangxu: true,
              },
            },
            player,
            target
          )
          : target == player;
      },
      selectTarget: [1, 3],
      viewAs: {
        name: 'yiyi',
        storage: {
          dqzw_shangxu: true,
        },
      },
      onuse(result, player) {
        if (result.targets?.length) for (let target of result.targets) target.addTempSkill('dqzw_shangxu_ai');
      },
      group: 'dqzw_shangxu_discard',
      subSkill: {
        ai: {
          trigger: {
            player: 'chooseToDiscardBefore',
          },
          filter: (event) => event.parent.name == 'yiyi' && event.parent.card.storage.dqzw_shangxu,
          silent: true,
          firstDo: true,
          content() {
            trigger.ai = function (card) {
              let event = _status.event,
                player = event.player,
                num = get.unuseful.apply(this, arguments);
              if (card.suit == 'club' || card.name == 'jiu') return num + (!player.hasSkill('dqzw_shangxu') ? 10 : get.type(card) == 'equip' ? 8 : 3.5);
              return num;
            };
            player.removeSkill(event.name, true);
          },
          charlotte: true,
        },
        discard: {
          trigger: {
            player: 'useCardAfter',
          },
          filter(event) {
            return event.card && event.card.storage && event.card.storage.dqzw_shangxu && event.targets && event.targets.length && event.targets.some((target) => target.getHistory('lose', (evt) => evt.type == 'discard' && evt.getParent(3).name == 'yiyi' && evt.getParent(3).card == event.card && evt.cards.some((card) => card.suit == 'club' || card.name == 'jiu')).length);
          },
          silent: true,
          content() {
            let targets = trigger.targets.filter((target) => target.getHistory('lose', (evt) => evt.type == 'discard' && evt.getParent(3).name == 'yiyi' && evt.getParent(3).card == trigger.card && evt.cards.some((card) => card.suit == 'club' || card.name == 'jiu')).length);
            for (let target of targets) {
              let cards = [];
              if (!target.hasSkill('dqzw_shangxu')) target.addSkillLog('dqzw_shangxu');
              target.getHistory('lose', (evt) => evt.type == 'discard' && evt.getParent(3).name == 'yiyi' && evt.getParent(3).card == trigger.card && cards.push(...evt.cards.filter((card) => card.suit == 'club' || card.name == 'jiu').filterInD('od')));
              for (let card of cards) target.chooseUseTarget(card);
            }
          },
        },
      },
    },
    dqzw_qinxuan: {
      audio: 'ext:大权在握/audio/skill:2',
      mod: {
        aiOrder(card, player, num) {
          if (_status.currentPhase == player && get.color(card) == 'black' && !player.getStat().dqzw_qinxuan_use) return num + player.getUseValue(card);
        },
      },
      trigger: {
        global: 'useCard',
      },
      filter: (event, player) => _status.currentPhase == player && get.color(event.card) == 'black' && !player.getStat().dqzw_qinxuan_use,
      forced: true,
      content() {
        player.getStat().dqzw_qinxuan_use = true;
        trigger.effectCount++;
        let evt = trigger;
        if (evt.getDefaultHandlerType) {
          let type = evt.getDefaultHandlerType();
          evt.set(
            type,
            (evt[type] || []).add(function (event, option) {
              if (option && option.state != 'begin') return;
              if (event.step == 13 && event.__originalCardName__) {
                event.card.name = event.__originalCardName__;
                delete event.__originalCardName__;
              }
              if (event.step == 10 && event.effectedCount == 1 && !event.__skill_dqzw_qinxuan) {
                event.__originalCardName__ = event.card.name;
                event.__skill_dqzw_qinxuan = true;
                event.__original_all_excluded__ = event.all_excluded;
                event.step--;
                event.all_excluded = true;
                event.insert(
                  async function (event, trigger, player) {
                    const { cards } = await player
                      .chooseToDiscard(`###${get.prompt('dqzw_qinxuan')}###弃置一张牌,令此次以【桃】结算`, 'he')
                      .set('ai', (card) => {
                        let evt = get.event().getTrigger(),
                          player = get.player(),
                          eff = 0;
                        if (evt.targets) eff += evt.targets.reduce((pre, cur) => pre + (cur.isDamaged() ? get.effect(cur, { name: 'tao' }, player, player) : 0), 0);
                        if (eff > 0) return get.value({ name: 'tao' }) - get.value(card);
                        return 0;
                      })
                      .forResult();
                    trigger.all_excluded = trigger.__original_all_excluded__;
                    delete trigger.__original_all_excluded__;
                    if (cards?.length) trigger.card.name = 'tao';
                  },
                  { player: event.player, _trigger: event }
                );
              }
            })
          );
        }
      },
    },
    // 卓荦真我--王徽之
    dqzw_ranfeng: {
      enable: 'chooseToUse',
      filter(event, player) {
        let current = _status.currentPhase;
        if (!current || (event.filterCard && !event.filterCard({ name: 'jiu' }, player, event)) || player.getStat().dqzw_ranfeng || current.countDiscardableCards(player, 'he') + player.countDiscardableCards(player, 'he') < 3) return false;
        return true;
      },
      chooseButton: {
        dialog(event, player) {
          let dialog = [],
            target = _status.currentPhase;
          dialog.push('然风:弃置' + (target == player ? '' : '你与' + get.translation(target) + '共计') + '三张牌并视为使用一张【酒】,因此弃置牌的角色摸等量的牌');
          if (player.countCards('h')) dialog.push(...['<div class = "text center">你的手牌</div>', player.getCards('h')]);
          if (player.countCards('e')) dialog.push(...['<div class = "text center">你的装备</div>', player.getCards('e')]);
          if (target != player) {
            if (target.countCards('h')) {
              dialog.push('<div class="text center">' + get.translation(target) + '的手牌</div>');
              if (player.hasSkillTag('viewHandcard', null, target, true)) dialog.push(target.getCards('h'));
              else dialog.push([target.getCards('h'), 'blank']);
            }
            if (target.countCards('e')) dialog.push(...['<div class="text center">' + get.translation(target) + '的装备</div>', target.getCards('e')]);
          }
          return ui.create.dialog(...dialog);
        },
        select: 3,
        forced: true,
        filter: (button) => lib.filter.canBeDiscarded(button.link, _status.event.player, get.owner(button.link)),
        check(button) {
          let player = _status.event.player,
            target = _status.currentPhase,
            att = get.attitude(player, target),
            card = button.link;
          if (att < 2 && get.owner(card) != player) return 0;
          return 6 - get.value(card);
        },
        backup(links, player) {
          let list1 = [],
            list2 = [],
            target = _status.currentPhase;
          for (let card of links) {
            if (get.owner(card) == player) list1.push(card);
            else list2.push(card);
          }
          game.loseAsync({
            lose_list: [
              [player, list1],
              [target, list2],
            ],

            discarder: player,
          }).setContent('discardMultiple');
          player.draw(list1.length, 'nodelay');
          target.draw(list2.length, 'nodelay');
          player.getStat().dqzw_ranfeng = true;
          return {
            audio: true,
            viewAs: {
              name: 'jiu',
            },
            popname: true,
            filterCard: () => false,
            selectCard: -1,
          };
        },
      },
      ai: {
        order: 8,
        save: true,
        result: {
          player: (player) => Number(player.getUseValue({ name: 'jiu' }) > 0),
        },
      },
    },
    dqzw_guixian: {
      trigger: {
        player: 'phaseJieshuBegin',
      },
      filter(event, player) {
        let used = [],
          cards = [];
        game.getGlobalHistory('useCard', (evt) => used.add(evt.card.name));
        game.getGlobalHistory('cardMove', (evt) => {
          if (/cardsDiscard|lose/.test(evt.name) && (evt.name == 'lose' ? evt.position == ui.discardPile : true)) cards.push(...evt.cards.filterInD('d'));
        });
        return cards.some((card) => !used.includes(card.name) && get.type(card) == 'basic' && player.hasUseTarget(card));
      },
      forced: true,
      content() {
        'step 0';
        let used = [],
          cards = [],
          skill = ([player.name, player.name1, player.name2].includes('dqzw_clan_wanghuizhi') ? lib.character.dqzw_clan_wanghuizhi[3] : player.getSkills(true, false, false)).find((name) => lib.skill[name] && !lib.skill[name].limited);
        game.getGlobalHistory('useCard', (evt) => used.add(evt.card.name));
        game.getGlobalHistory('cardMove', (evt) => {
          if (/cardsDiscard|lose/.test(evt.name) && (evt.name == 'lose' ? evt.position == ui.discardPile : true)) cards.push(...evt.cards.filterInD('d'));
        });
        player.chooseButton([get.translation(event.name) + ':视为使用一张基本牌' + (skill ? ',若未造成体力值变动则将『' + get.translation(skill) + '』改为限定技' : ''), cards.filter((card) => !used.includes(card.name) && get.type(card) == 'basic' && player.hasUseTarget(card)).sort((a, b) => lib.inpile.indexOf(a.name) - lib.inpile.indexOf(b.name))], true, (button) => (_status.event.player.getUseValue(button.link) + (get.tag(button.link, 'recover') || get.tag(button.link, 'damage')) ? 5 : -3));
        event.skill = skill;
        ('step 1');
        if (result.links?.length) {
          player.chooseUseTarget(result.links[0], true);
          player.addTempSkill(event.name + '_change', 'changeHp');
        }
        ('step 2');
        if (player.hasSkill(event.name + '_change')) {
          let info = lib.skill[event.skill],
            translate = lib.translate[event.skill + '_info'] || '';
          info.limited = true;
          info.dqzw_guixian_change = true;
          if (!info.contentAfter)
            eval(
              `info.contentAfter = function () {
                                                player.awakenSkill('${event.skill}');
                                            };`
            );
          game.finishSkill(event.skill);
          if (!player.marks[event.skill]) player.markSkill(event.skill);
          if (!/限定技(,|,)/g.test(translate)) lib.translate[event.skill + '_info'] = '限定技' + (/^(,|,)/.test(translate) ? '' : ',') + translate;
          game.log('#g『' + get.translation(event.skill) + '』', '被改为', '#y限定技');
        }
      },
      subSkill: {
        change: {
          charlotte: true,
        },
      },
    },
    _dqzw_ranfeng_awaken: {
      trigger: {
        player: 'logSkillBegin',
      },
      silent: true,
      forceDie: true,
      forceOut: true,
      forced: true,
      charlotte: true,
      firstDo: true,
      filter(event, player) {
        let info = get.info(event.skill);
        return info && info.limited && info.dqzw_guixian_change;
      },
      content() {
        player.awakenSkill(trigger.skill);
      },
    },
    // 胡为泥中--王凝之
    dqzw_boyan: {
      trigger: {
        player: ['recoverAfter', 'gainAfter'],
      },
      filter(event, player) {
        if (player.storage.dqzw_boyan) return event.name != 'gain' && !player.isDamaged();
        return event.name == 'gain' && player.countCards('h') == player.getHandcardLimit();
      },
      zhuanhuanji: true,
      forced: true,
      _priority: 5,
      content() {
        player.changeZhuanhuanji(event.name);
        player.loseHp();
        player.draw(2, 'delay', 'bottom');
      },
      mark: true,
      marktext: '☯',
      intro: {
        content(storage) {
          let str = '';
          if (storage) str = '回复体力后,若你未受伤';
          else str = '获得牌后,若你手牌数等于上限';
          return str + ',失去1点体力并从牌堆底摸两张牌';
        },
      },
    },
    dqzw_wangsu: {
      trigger: {
        target: 'useCardToTargeted',
      },
      filter(event, player) {
        return event.targets && event.targets.length == 1 && event.card.name == 'sha' && player.isDamaged();
      },
      check(event, player) {
        if (get.attitude(player, event.player) > 1) return true;
        return (
          get.recoverEffect(player, player, player) >
          player
            .getCards('h')
            .randomGets(2)
            .reduce((pre, cur) => pre + player.getUseValue(cur), 0) /
          2
        );
      },
      logTarget: 'player',
      content() {
        'step 0';
        player.recover();
        trigger.player.chooseBool('是否' + ((trigger.cards || []).filterInD('od').length ? '将' + get.translation(trigger.cards.filterInD('od')) + '置于牌堆底并' : '') + '弃置' + get.translation(player) + '两张牌？').set('ai', () => {
          let player = _status.event.player,
            evt = _status.event.getTrigger(),
            target = evt.target;
          if (get.attitude(player, target) > 1) return false;
          return true;
        });
        ('step 1');
        if (result.bool) {
          let cards = (trigger.cards || []).filterInD('od');
          if (cards.length) game.log(trigger.player, '将', cards, '置于', '#y牌堆底');
          while (cards.length) ui.cardPile.appendChild(cards.pop().fix());
          game.updateRoundNumber();
          trigger.player.discardPlayerCard(player, 2, true);
        }
      },
    },
    // 神锋太俊--王衍
    dqzw_taoyi: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        global: 'roundStart',
      },
      filter: (_event, player) =>
        player.hasUseTarget({
          name: 'shengdong',
        }),
      forced: true,
      content() {
        player.chooseUseTarget(
          {
            name: 'shengdong',
            storage: {
              dqzw_taoyi: true,
            },
          },
          get.prompt2(event.name)
        );
      },
      group: 'dqzw_taoyi_use',
      subSkill: {
        use: {
          trigger: {
            player: 'useCardAfter',
          },
          filter: (event) => event.targets && event.targets.length && event.card.storage && event.card.storage.dqzw_taoyi,
          silent: true,
          _priority: get.id(),
          content() {
            'step 0';
            let filter = (evt) => evt.type == 'gain' && evt.getParent(2).name == 'shengdong' && evt.getParent('dqzw_taoyi').name == 'dqzw_taoyi' && evt.getParent(2).card.storage && evt.getParent(2).card.storage.dqzw_taoyi && (evt.parent.giver || evt.parent.source) && evt.parent.animate && evt.parent.animate.includes('give') && evt.cards && evt.cards.length && evt.cards.some((card) => get.owner(card) != (evt.parent.giver || evt.parent.source) && get.type(card) == 'trick' && lib.filter.filterTarget2(card, evt.parent.giver || evt.parent.source, player)),
              map = {};
            targets = trigger.targets.filter(
              (target) =>
                target.getHistory('lose', (evt) => {
                  if (filter(evt)) {
                    map[evt.player.playerid] = map[evt.player.playerid] || [];
                    map[evt.player.playerid].add(...evt.cards.filter((card) => get.owner(card) != (evt.parent.giver || evt.parent.source) && get.type(card) == 'trick' && lib.filter.filterTarget2(card, evt.parent.giver || evt.parent.source, player)).map((card) => card.name));
                    return true;
                  }
                }).length
            );
            for (target of targets)
              if (map[target.playerid] && map[target.playerid].length)
                event.insert(
                  function () {
                    'step 0';
                    target.classList.add('selected');
                    if (cards.length > 1)
                      player
                        .chooseButton(['是否视为' + (target != player ? '对' + get.translation(target) : '') + '使用以下一张牌？', [cards.map((item) => [get.type(item), '', item]), 'vcard']], (button) =>
                          get.effect(
                            _status.event.target,
                            {
                              name: button.link[2],
                            },
                            get.player(),
                            get.player()
                          )
                        )
                        .set('target', target);
                    else
                      player
                        .chooseBool('是否视为' + (target != player ? '对' + get.translation(target) : '') + '使用' + get.translation(cards[0]) + '？')
                        .set('ai', () => get.effect(_status.event.target, _status.event.card, get.player(), get.player()) > 0)
                        .set('card', {
                          name: cards[0],
                        })
                        .set('target', target);
                    ('step 1');
                    if (result.bool)
                      player.useCard(
                        {
                          name: result.links && result.links.length ? result.links[0][2] : cards[0],
                        },
                        target
                      );
                  },
                  {
                    cards: map[target.playerid],
                    target: player,
                    player: target,
                  }
                );
          },
        },
      },
    },
    dqzw_chonghua: {
      audio: 'ext:大权在握/audio/skill:2',
      enable: 'chooseToUse',
      filter(event, player) {
        return event.filterCard
          ? event.filterCard(
            {
              name: 'wuxie',
              storage: {
                dqzw_chonghua: true,
              },
            },
            player,
            event
          )
          : true && !player.isMaxHandcard();
      },
      hiddenCard(player, name) {
        return name == 'wuxie' && !player.isMaxHandcard();
      }, //QQQ
      chooseButton: {
        dialog(_event, player) {
          let num = game.findPlayer((target) => target.isMaxHandcard()).countCards('h') - player.countCards('h');
          return ui.create.dialog('###是否' + (num > 0 ? '摸' + get.cnNumber(num) + '张牌并' : '') + '发动【' + get.skillTranslation('dqzw_chonghua', player) + '】？###' + get.skillInfoTranslation('dqzw_chonghua', player));
        },
        chooseControl: () => ['ok', 'cancel2'],
        check() {
          let num = game.findPlayer((target) => target.isMaxHandcard()).countCards('h'),
            player = get.player(),
            card = {
              name: 'wuxie',
              storage: {
                dqzw_chonghua: true,
              },
            },
            evt = _status.event,
            event = evt.parent,
            ai = event.ai1 || event.ai,
            dnum = num - player.countCards('h'),
            typelen = [...new Set(player.getCards('he').map((card) => card.suit))].length;
          if (dnum < 2 || typelen < 2) return 'cancel2';
          _status.event = event;
          if (event.ai2 && event.filterTarget ? game.hasPlayer((target) => ((event.filterTarget === true || event.filterTarget(card, player, target)) && event.ai2(target, card, player, player) > 0 && ai ? ai(card, player, event) > 0 : true)) : ai && ai(card, player, event) > 0) {
            _status.event = evt;
            return 'ok';
          }
          return 'cancel2';
        },
        backup(_result, player) {
          player.drawTo(game.findPlayer((target) => target.isMaxHandcard()).countCards('h'));
          return {
            audio: 'dqzw_chonghua',
            viewAs: {
              name: 'wuxie',
              storage: {
                dqzw_chonghua: true,
              },
            },
            filterCard: () => false,
            selectCard: -1,
            popname: true,
          };
        },
      },
      ai: {
        order: 8,
        result: {
          player: 1,
        },
      },
      group: 'dqzw_chonghua_lose',
      subSkill: {
        lose: {
          trigger: {
            player: 'useCardAfter',
          },
          filter: (event) => event.card.storage && event.card.storage.dqzw_chonghua,
          silent: true,
          _priority: get.id(),
          content: async function (event, trigger, player) {
            const { cards } = await player
              .chooseToDiscard('弃置三种类型不同的牌,否则失去技能【' + get.skillTranslation('dqzw_chonghua', player) + '】', 3, 'he', (card) => !ui.selected.cards.some((cardx) => get.type2(cardx) == get.type2(card)))
              .set('ai', (card) => 100 - get.value(card))
              .set('complexCard', true)
              .forResult();
            if (!cards || cards.length < 3) {
              player.removeSkill('dqzw_chonghua', true);
              player.popup(get.skillTranslation('dqzw_chonghua', player), 'fire');
              game.log(player, '失去了技能' + '<span style = "color: red;">' + '【' + get.skillTranslation('dqzw_chonghua', player) + '】</span>');
            }
          },
        },
      },
    },
    // 河朔清憩--王献之
    dqzw_ningshu: {
      mod: {
        ignoredHandcard(card, player) {
          if (!player.countCards('h', (cardx) => get.type(cardx) != get.type(card) && player.countCards('h', { type: get.type(cardx) }) >= player.countCards('h', { type: get.type(card) }))) return true;
        },
      },
      trigger: {
        global: 'phaseJieshuBegin',
      },
      filter: (_event, player) => !player.getHistory('lose').length && [...new Set(player.getCards('h').map((card) => get.type(card)))].find((type) => !player.countCards('h', (cardx) => get.type(cardx) != type && player.countCards('h', { type: get.type(cardx) }) >= player.countCards('h', { type: type }))),
      prompt2(_event, player) {
        let type = [...new Set(player.getCards('h').map((card) => get.type(card)))].find((type) => !player.countCards('h', (cardx) => get.type(cardx) != type && player.countCards('h', { type: get.type(cardx) }) >= player.countCards('h', { type: type })));
        return '弃置所有' + get.translation(type) + '牌并摸两张牌';
      },
      check(_event, player) {
        let cards = player.getCards('h', {
          type: [...new Set(player.getCards('h').map((card) => get.type(card)))].find((type) => !player.countCards('h', (cardx) => get.type(cardx) != type && player.countCards('h', { type: get.type(cardx) }) >= player.countCards('h', { type: type }))),
        });
        return cards.every((card) => get.value(card) < 7) || (cards.length < 2 && !cards.some((card) => get.value(card) > 7));
      },
      content() {
        let cards = player.getCards('h', {
          type: [...new Set(player.getCards('h').map((card) => get.type(card)))].find((type) => !player.countCards('h', (cardx) => get.type(cardx) != type && player.countCards('h', { type: get.type(cardx) }) >= player.countCards('h', { type: type }))),
        });
        if (cards.length) player.discard(cards);
        player.draw(2);
      },
    },
    dqzw_junci: {
      trigger: {
        player: 'useCardToPlayered',
        target: 'useCardToTargeted',
      },
      filter: (event, player, name) => get.type(event.card) == 'basic' && (player.isDamaged() ? event.player.countCards('h') : event.targets && event.targets.some((target) => target.countCards('h'))) && event.target == (name == 'useCardToPlayered' ? event.targets[0] : player),
      forced: true,
      content() {
        'step 0';
        let target = event.target || (!player.isDamaged() && trigger.targets.length == 1 ? trigger.targets[0] : trigger.player),
          visible = target.isUnderControl() || player.hasSkillTag('viewHandcard', null, target, true) || target == player,
          dialog = [get.prompt2(event.name, target), visible ? target.getCards('h') : [target.getCards('h'), 'blank']];
        if (typeof event.videoId != 'number') event.videoId = lib.status.videoId++;
        if (!event.dialog && target.getCards('h') && !(!player.isDamaged() && trigger.targets.length != 1 && !event.target)) {
          if (player.isOnline2())
            player.send(
              (dialog, id) => {
                ui.create.dialog(...dialog).videoId = id;
              },
              dialog,
              event.videoId
            );
          event.dialog = ui.create.dialog(...dialog);
          event.dialog.videoId = event.videoId;
          if (!event.isMine()) event.dialog.style.display = 'none';
        }
        event._visible = visible;
        if (visible && !(!player.isDamaged() && trigger.targets.length != 1 && !event.target)) {
          event._result = {
            links: target.getCards('h'),
            bool: true,
          };
          return;
        }
        if (player.isDamaged() || event.target || trigger.targets.length == 1) player.chooseButton([1, 2]).set('dialog', event.videoId);
        else
          player
            .chooseTarget(
              get.prompt2(event.name),
              (_card, _player, target) => _status.event.targets && _status.event.targets.includes(target) && target.countCards('h'),
              (target) => (get.attitude(get.player(), target) < 0 ? -get.attitude(get.player(), target) + target.countCards('h') : 0)
            )
            .set('targets', trigger.targets);
        ('step 1');
        event._showCard = (result, id, target, visible) => {
          let dialog = get.idDialog(id);
          if (!dialog) return;
          dialog.content.children[1].textContent = (visible ? '' : get.translation(target) + '的' + get.cnNumber(result.links.length) + '张手牌,请') + '将其中一张牌置于牌堆顶';
          for (let button of dialog.buttons)
            if (result.links.includes(button.link)) {
              let card = ui.create.button(button.link, 'card');
              button.parentNode.replaceChild(card, button);
              dialog.buttons[dialog.buttons.indexOf(button)] = card;
            }
        };
        if (result.links?.length) {
          let target = event.target || (!player.isDamaged() && trigger.targets.length == 1 ? trigger.targets[0] : trigger.player);
          if (player.isOnline2()) player.send(event._showCard, result, event.videoId, target, event._visible);
          else event._showCard(result, event.videoId, target, event._visible);
          player
            .chooseButton()
            .set('dialog', event.videoId)
            .set('links', result.links)
            .set('filterButton', (button) => _status.event.links && _status.event.links.includes(button.link))
            .set('ai', (button) => {
              let current = _status.currentPhase,
                player = get.player(),
                target = _status.event.target;
              if (current && get.attitude(player, current.next) > 1) return get.buttonValue(button);
              if (get.attitude(player, target) > 1) return 6 - get.value(button.link, player);
              return 20 - get.value(button.link);
            })
            .set('target', target);
        } else if (result.targets?.length) {
          event.target = result.targets[0];
          event.goto(0);
        }
        event._result = {};
        ('step 2');
        if (result.links?.length) {
          (event.target || (!player.isDamaged() && trigger.targets.length == 1 ? trigger.targets[0] : trigger.player)).lose(result.links, ui.cardPile, 'insert');
          game.log(player, '将', result.links, '置于牌堆顶');
        }
        game.broadcastAll('closeDialog', event.videoId);
      },
    },
    // 孤渠清赏--王戎
    dqzw_suhui: {
      init() {
        if (!lib.card.ying) {
          lib.card.ying = {
            audio: true,
            fullskin: true,
            type: 'basic',
            enable: false,
            getYing(count) {
              let cards = [];
              if (typeof count != 'number') count = 1;
              while (count-- > 0) cards.push(game.createCard('ying', 'spade', 1));
              return cards;
            },
            global: 'ying_destroy',
            ai: {
              basic: {
                useful: 0,
                value: 0,
              },
            },
          };
          lib.translate.ying = '影';
          lib.translate.ying_info = '当此牌进入弃牌堆后,系统将此牌移出游戏.';
        }
      },
      trigger: {
        player: 'useCardToPlayered',
      },
      filter: (event, player) => get.type2(event.card) == 'trick' && event.targets && event.targets.length == 1,
      forced: true,
      usable: 1,
      content() {
        'step 0';
        trigger.target
          .chooseControl('自己', '对方', 'cancel2')
          .set('prompt', '###是否' + (trigger.player != player ? '令' + get.translation(player) : '') + '发动【' + get.skillTranslation(event.name, player) + '】？###' + '令自己或其获得两张【<dqzw-tiptext text = "当此牌进入弃牌堆后,系统将此牌移出游戏.">影</dqzw-tiptext>】;如此做后若本回合没有角色弃置【影】则你失去1点体力,否则你摸一张牌.')
          .set('ai', () => {
            let list = _status.event.controls,
              target = _status.event.target,
              player = get.player(),
              discarded = game.hasPlayer((target) => target.hasHistory('lose', (evt) => evt.type == 'discard' && evt.cards.some((card) => card.name == 'ying'))),
              att = get.attitude(player, target);
            if (list) {
              if (list.includes('自己') && discarded) return 0;
              if (list.includes('对方')) {
                if ((discarded && att > 1) || (target == _status.currentPhase && att > 1 && target.needsToDiscard(lib.card.ying.getYing(2)))) return 1;
              }
            }
            return 'cancel2';
          })
          .set('target', player);
        ('step 1');
        let count = player.getStat('triggerSkill');
        if (result.control != 'cancel2') {
          if (result.control == '自己') fill(trigger.target);
          if (result.control == '对方') fill(player);
          trigger.target.addTempSkill(event.name + '_loseHp', 'phaseAfter');
          function fill(target) {
            target.directgain(lib.card.ying.getYing(2));
          }
        } else if (count && count[event.name]) count[event.name]--;
      },
      subSkill: {
        loseHp: {
          trigger: {
            global: 'phaseEnd',
          },
          silent: true,
          firstDo: true,
          _priority: 20,
          content() {
            if (!game.hasPlayer((target) => target.hasHistory('lose', (evt) => evt.type == 'discard' && evt.cards.some((card) => card.name == 'ying')))) player.loseHp();
            else player.draw();
            player.removeSkill(event.name, true);
          },
        },
      },
    },
    dqzw_qingtan: {
      enable: 'phaseUse',
      filter: (event, player) => player.hasCard((card) => get.cardNameLength(card) == 4, 'hes'),
      viewAs: {
        name: 'tuixinzhifu',
        storage: {
          dqzw_qingtan: true,
        },
      },
      filterCard: (card) => get.cardNameLength(card) == 4,
      position: 'hes',
      check: (card) => 6 - get.value(card),
      ai: {
        order: 10,
        result: {
          player: 1,
        },
      },
      group: 'dqzw_qingtan_choose',
      subSkill: {
        choose: {
          trigger: {
            player: 'chooseCardBegin',
          },
          filter(event) {
            let card = event.parent.card;
            return card && card.storage && card.storage.dqzw_qingtan;
          },
          silent: true,
          content() {
            {
              let original = trigger.selectCard;
              trigger.selectCard = function () {
                if (ui.selected.cards[0].suit == 'spade') return [1, get.select(original)[1]];
                return get.select(original);
              };
            }
            let original = trigger.ai;
            trigger.ai = function (card) {
              let result = original.apply(this, arguments);
              if (card.suit == 'spade') result += 5;
              if (ui.selected.cards.some((card) => card.suit == 'spade')) return 0;
              return result;
            };
          },
        },
      },
    },
    ying_destroy: {
      trigger: {
        global: ['loseEnd', 'cardsDiscardEnd'],
      },
      silent: true,
      forced: true,
      forceDie: true,
      forceOut: true,
      firstDo: true,
      charlotte: true,
      filter: (event) => event.getd && event.getd().some((card) => card.name == 'ying'),
      content() {
        let cards = trigger.getd().filter((card) => card.name == 'ying');
        game.cardsGotoSpecial(cards);
        if (cards.length) game.log(cards, '被销毁了');
      },
    },
    dqzw_lingye: {
      trigger: {
        source: 'damageBefore',
      },
      forced: true,
      //锁定技,你造成的伤害均为冰属性且你可背水:失去1点体力
      async content(event, trigger, player) {
        //QQQ
        trigger.nature = 'ice';
        const { control } = await player
          .chooseControl('弃牌', '伤害', '背水')
          .set('ai', function () {
            if (trigger.player.hp > 1 && trigger.player.getCards('he').length > 1 && get.attitude(player, trigger.player) < 1 && (player.hp > 2 || get.effect(player, { name: 'losehp' }, player, player) > 2)) return '背水';
            if (get.effect(trigger.player, { name: 'icedamage' }, player, player) < get.effect(trigger.player, { name: 'guohe' }, player, player) * 2) return '弃牌';
            return '伤害';
          })
          .forResult();
        if (control == '背水') {
          var num = 2;
          while (num-- > 0 && trigger.player.countDiscardableCards(player, 'he')) {
            await player.discardPlayerCard('he', trigger.player, true);
          }
        } else if (control == '弃牌') {
          trigger.cancel();
          var num = 2;
          while (num-- > 0 && trigger.player.countDiscardableCards(player, 'he')) {
            await player.discardPlayerCard('he', trigger.player, true);
          }
        }
      },
      ai: {
        natureDamage: true,
        iceDamage: true,
        iceshaSpecial: true,
        skillTagFilter(player, tag, arg) {
          if (tag == 'iceshaSpecial' && arg.event && get.attitude(player, arg.event.player) < 1 && arg.event.player.getCards('he').length > 1 && arg.event.player.hp > 1 && (player.hp > 2 || get.effect(player, { name: 'loseHp' }, player, player) > 2)) return true;
        },
      },
    },
    dqzw_xifeng: {
      trigger: {
        player: ['damageBegin4', 'loseEnd'],
      },
      filter(event, player) {
        const current = player.storage.dqzw_xifeng;
        if (event.name == 'damage') return current;
        return !current && (event.type == 'discard' || event.getlx);
      },
      zhuanhuanji: true,
      forced: true,
      content: async function (event, trigger, player) {
        const { bool } = await player.chooseUseTarget(get.prompt2(event.name), { name: 'sha' }, 'nodistance').forResult();
        if (bool) {
          player.changeZhuanhuanji(event.name);
        }
      },
      mark: true,
      marktext: '☯',
      intro: {
        content(storage, player) {
          return (storage ? '受到伤害时' : '弃置牌后') + ',你可视为对一名角色使用一张【杀】.';
        },
      },
    },
    dqzw_lanying: {
      audio: 'ext:大权在握/audio/skill:2',
      audioname: ['dqzw_clan_wangyan'],
      trigger: {
        player: 'loseAfter',
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
      },
      filter(event, player) {
        if (_status.currentPhase == player || player.hasSkill('dqzw_lanying_used')) return false;
        let evt;
        if (event.getl) evt = event.getl(player);
        return (evt || event).hs && (evt || event).hs.some((card) => /h|e/.test(card.original));
      },
      clanSkill: true,
      silent: true,
      async content(event, trigger, player) {
        let cards = trigger.hs,
          num,
          hp = player.getDamagedHp();
        if (trigger.getl) {
          cards = trigger.getl(player).hs;
        }
        num = cards.filter((card) => /h|e/.test(card.original)).length;
        if (/^[1-3]$/.test(hp) && num >= hp) {
          let info = lib.translate.xinjujian_info;
          const { targets } = await player
            .chooseTarget(
              '###' + get.prompt(event.name) + '###令一名同族角色' + (hp == 1 ? '摸一张牌' : info ? '-' + info.slice(info.indexOf(hp + '.') + 2, info.indexOf(hp > 2 ? '.' : ';', info.indexOf(hp + '.') + 2)) : ''),
              (_card, _player, target) => target.hasClan('琅琊王氏'),
              (target) => {
                let player = _status.event.player,
                  att = get.attitude(player, target),
                  hp = player.getDamagedHp();
                if (att > 0) {
                  if (hp > 2 && target.isTurnedOver()) att += 3;
                  if (hp == 2) {
                    if (hp == 1) att += 3;
                    if (!target.getDamagedHp()) att = 0;
                  }
                  if (hp == 1) return Math.max(1, att - target.countCards('h'));
                }
                return att;
              }
            )
            .forResult();
          if (targets?.length) {
            const list = ['recover_hp', 'draw_card', 'reset_character']; //QQQ
            player.addTempSkill('dqzw_lanying_used');
            switch (list[player.getDamagedHp() - 1]) {
              case 'recover_hp':
                targets[0].recover();
                break;
              case 'draw_card':
                targets[0].draw(2);
                break;
              case 'reset_character': {
                if (targets[0].isTurnedOver()) {
                  targets[0].turnOver();
                }
                if (targets[0].isLinked()) {
                  targets[0].link();
                }
                break;
              }
            }
          }
        }
      },
      subSkill: {
        used: {
          charlotte: true,
        },
      },
    },
    // 荆衡杞梓-陆机
    dqzw_pianya: {
      mod: {
        aiOrder(player, card, num) {
          let list = get.event('dqzw_pianya_list');
          if (list) return list.length && get.position(card) == 'h' ? 1 : get.is.shownCard(card) ? num + 100 : num;
        },
      },
      enable: 'chooseToUse',
      filter: (event, player) => event.dqzw_pianya_list && event.dqzw_pianya_list.length && player.getCards('h', (card) => !get.is.shownCard(card)).length,
      onChooseToUse(event) {
        if (game.online || !event.player || !event.player.hasSkill('dqzw_pianya')) return;
        let num = event.player.getCards('h', (card) => get.is.shownCard(card)).length;
        event.set(
          'dqzw_pianya_list',
          lib.inpile.filter((name) => !event.player.getStorage('dqzw_pianya_record').includes(name) && [num + 1, num + 2].includes(get.cardNameLength(name)) && event.filterCard({ name }, event.player, event) && /trick|basic/.test(get.type(name)) && (get.type(name) == 'trick' ? lib.skill.dqzw_lingqing.isLingqing({ name }, null, true) : true))
        );
      },
      chooseButton: {
        dialog(event, player) {
          let list = [];
          for (let name of event.dqzw_pianya_list || []) {
            let info = [get.type(name), '', name];
            list.push(info);
            if (name == 'sha' && lib.inpile_nature) for (let nature of lib.inpile_nature) list.push(info.concat([nature]));
          }
          return ui.create.dialog(
            '骈雅',
            'hidden',
            player.getCards('h', (card) => !get.is.shownCard(card)),
            [list, 'vcard']
          );
        },
        select() {
          let buttons = ui.selected.buttons,
            num = buttons.filter((button) => get.itemtype(button.link) == 'card').length;
          if (num > 1) return 3;
          return [2, 3];
        },
        filter(button) {
          let buttons = ui.selected.buttons,
            num = buttons.filter((button) => get.itemtype(button.link) == 'card').length,
            shownlen = get.player().getCards('h', (card) => get.is.shownCard(card)).length;
          if (Array.isArray(button.link)) {
            if (buttons.some((button) => Array.isArray(button.link))) return false;
            if (get.cardNameLength(button.link[2]) != num + shownlen) return false;
          }
          if (num > 1 && get.itemtype(button.link) == 'card') return false;
          return true;
        },
        check(button) {
          let player = get.player(),
            buttons = ui.selected.buttons,
            link = button.link,
            shownlen = player.getCards('h', (card) => get.is.shownCard(card)).length,
            cards = get.links(buttons.filter((button) => get.itemtype(button.link) == 'card')),
            list = get.event().parent.dqzw_pianya_list;
          if (Array.isArray(link)) {
            if (cards.some((card) => card.name == link[2]) && player.getCardUsable(link[2]) < 2) return 1;
            return player.getUseValue({ name: link[2], nature: link[3] });
          } else {
            if (list && list.some((name) => shownlen + cards.length == get.cardNameLength(name) && (player.getCardUsable(name) > 1 || !player.hasCard(name, 'h')))) return 0;
            let num = player.getCardUsable(link);
            if (cards.filter((card) => card.name == link.name).length >= num) return 0;
            return get.order(link, player) + (num == Infinity || num == -Infinity ? 0 : num);
          }
          return 0;
        },
        backup(links, player) {
          let cards = links.filter((link) => get.itemtype(link) == 'card'),
            link = links.find((link) => Array.isArray(link));
          if (link && link[2])
            return {
              viewAs: {
                name: link[2],
                nature: link[3],
              },
              filterCard: () => false,
              selectCard: -1,
              async precontent(event, trigger, player) {
                player.addShownCards(cards, 'visible_dqzw');
                player.markAuto('dqzw_pianya_record', [link[2]]);
                player.addTempSkill('dqzw_pianya_record');
              },
            };
          return { content() { } };
        },
        prompt(links) {
          let link = links.find((link) => Array.isArray(link));
          return `请选择${get.translation(link[3] || '')}${get.translation(link[2])}的目标`;
        },
      },
      ai: {
        order: 16,
        result: {
          player(player) {
            if (_status.event.dying) return get.attitude(player, _status.event.dying);
            return 1;
          },
        },
        respondSha: true,
        respondShan: true,
        save: true,
      },
      subSkill: {
        backup: {},
        record: {
          intro: {
            content: '$',
          },
          charlotte: true,
        },
      },
    },
    dqzw_qingcai: {
      trigger: {
        global: 'phaseDrawBefore',
      },
      filter: (event, player) => event.player != player && player.hasCard((card) => get.is.shownCard(card), 'h'),
      forced: true,
      lastDo: true,
      _priority: 50,
      async content(event, trigger, player) {
        const target = trigger.player,
          cards = player.getCards('h', (card) => get.is.shownCard(card));
        const { bool } = await target
          .chooseBool()
          .set('createDialog', [`###是否令${get.translation(player)}发动【${get.skillTranslation(event.name, player)}】？###获得以下牌并令其摸两张牌`, cards])
          .set('choice', get.attitude(target, player) > 2 ? true : cards.length > 3 && cards.length != player.getCards('h').length)
          .forResult();
        if (bool) {
          trigger.cancel();
          player.$give(cards, target);
          target.gain(cards);
          player.draw(2, 'nodelay');
        }
      },
    },
    // 欲立颠厦--陆云
    /*<巧对>摸牌阶段结束时,你可以视为使用【增兵减灶】
                且目标可以改为令你先弃置牌;此牌结算后,若你不为目标而你手牌数与其相同,你回复1点体力.*/
    /*dqzw_qiaodui: {
                    trigger: {
                        global: 'zengbinBefore',
                        player: 'phaseDrawEnd'
                    },
                    filter: evt => evt.name != 'phaseDraw'
                        ? evt.card && evt.card.storage && evt.card.storage.dqzw_qiaodui
                        : true,
                    forced: true,
                    async content(event, trigger, player) {
                        if (trigger.name == 'phaseDraw')
                            player.chooseUseTarget({
                                name: 'zengbin',
                                                                   storage: {
                                    dqzw_qiaodui: true
                                }
                            }, get.prompt2(event.name));
                        else {
                            const name == event.triggername;
                            if (name == 'zengbinBefore') {
                                const target = trigger.target,
                                    {result: { bool }} = await target.chooseBool(
                                    `是否令${get.translation(player)}先替你执行弃牌部分？`
                                );
                                if (bool) {
                                    target.line(player, 'green');
                                };
                            };
                        };
                    },
                    group: 'dqzw_qiaodui_recover',
                    subSkill: {
                        recover: {
                            trigger: {
                                global: ['useCardAfter']
                            },
                        }
                    }
                },
                /*<梦弼>你使用锦囊牌时,可以令下一张牌预演,但期间你的手牌数不能大于上限.*/
    // 参衡显允--陆晔
    /*<故策>你的一个阶段结束时,你可以明置两张
                不同花色牌视为使用一张本阶段失去过的单目标即时牌,
                若此牌花色与明置牌相同,你弃置所有明置牌并摸两倍数量的牌.*/
    /*<兵节>你每回合首次使用即时牌指定目标后,
                你可以发动一次【故策】且使用牌需相同,因此获得的牌将于下阶段开始时弃置.*/
    dqzw_fengfu: {
      trigger: {
        player: ['loseAfter', 'phaseZhunbeiBefore'],
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
      },
      usable: 1,
      silent: true,
      firstDo: true,
      _priority: 100,
      filter(event, player) {
        if (event.name == 'phaseZhunbei') return player.getStorage('dqzw_fengfu', 0);
        if (player.countCards('h')) return false;
        const evt = event.getl(player);
        return evt && evt.player == player && evt.hs && evt.hs.length;
      },
      getCurrentPhase() {
        let current = _status.event;
        while (!lib.phaseName.includes(current.name) && current.parent) current = current.parent;
        if (lib.phaseName.includes(current.name)) return current;
        return {};
      },
      async content(event, trigger, player) {
        let count = player.getStat('triggerSkill'),
          bool;
        if (event.triggername == 'phaseZhunbeiBefore') {
          let name = player.getStorage(event.name, 0);
          if (name && trigger.name == 'phaseZhunbei' && name != 'phaseZhunbei') {
            trigger.name = name;
            trigger.setContent(name);
            trigger.step = 0;
            trigger._triggered = 0;
            trigger.finished = false;
            if (name == 'phaseDraw' && !trigger.num) trigger.num = 2;
            player.removeStorage(event.name, true);
          }
        } else {
          const name = lib.skill.dqzw_fengfu.getCurrentPhase().name;
          const { targets } = await player
            .chooseTarget(
              `###${get.translation(event.name)}###令一名同族角色下个准备阶段改为${get.translation(name)}`,
              true,
              (_event, _player, target) => target.hasClan('吴郡陆氏'),
              (target) => {
                let player = get.player(),
                  att = get.attitude(player, target);
                if (get.event('ai_friendly')) return att;
                return -att;
              }
            )
            .set('ai_friendly', ['phaseDraw', 'phaseUse', 'phaseJieshu'].includes(name))
            .forResult();
          if (targets?.length) {
            targets[0].setStorage(event.name, name);
            targets[0].markSkill(event.name);
            bool = true;
          }
        }
        if (!bool && count && count[event.name]) count[event.name]--;
      },
      intro: {
        content: '下个准备阶段改为$',
      },
      ai: {
        noh: true,
        skillTagFilter(player, tag) {
          if (tag == 'noh') if (player.countCards('h') != 1 || !['phaseDraw', 'phaseUse'].includes(lib.skill.dqzw_fengfu.getCurrentPhase().name)) return false;
        },
      },
    },
  },
  translate: {
    chenjun_xieshi: '陈郡·谢氏',
    langya_zhuge: '琅琊·诸葛',
    langya_wangshi: '琅琊·王氏',
    wujun_lushi: '吴郡·陆氏',
    // --陈郡·谢氏-- //
    dqzw_zhanxun: '崭勋',
    dqzw_zhanxun_info: '每回合限一次,你于回合外摸牌后,可以令一名位次不大于你的角色从牌堆中获得一张基本牌.',
    dqzw_zongcu: '纵蹙',
    dqzw_zongcu_info: '你成为其他角色使用黑色牌的唯一目标后,可展示手牌并令使用者重铸其中一张;此牌结算后,若你未因之受到伤害,你获得之.',
    dqzw_tengyin: '腾隐',
    dqzw_tengyin_info: '锁定技,你不能使用或成为锦囊牌的目标;有角色弃置过四字牌的回合结束时,你失去此技能,获得其中一张与一个额外回合.',
    dqzw_zhenting: '镇廷',
    dqzw_zhenting_info: '出牌阶段限一次,你可以与一名手牌数或位次大于你的角色拼点并依次使用对方的拼点牌;若你不能使用,你可以令赢家摸两张牌.',
    dqzw_langyu: '朗喻',
    dqzw_langyu_info: '每回合限一次,当前回合角色的牌不因使用而进入弃牌堆后,你可以从牌堆中获得一张同名牌,其可以用X张手牌替换之.(X为其已损失体力值)',
    dqzw_hongjie: '鸿节',
    dqzw_hongjie_info: '限定技,手牌数小于你的角色进入濒死状态时,你可以令其将手牌摸至体力上限;此后其回合结束时,其可以回复1点体力并令你翻面.',
    dqzw_xiyun: '歙云',
    dqzw_xiyun_info: '你使用或打出基本牌结算后,可以观看牌堆底三张牌,展示其中一张并置于牌堆顶;若之与你此次使用或打出的牌同名,你获得其余的牌,否则你将其余牌以任意顺序放回牌堆底.',
    dqzw_qianao: '愆遨',
    dqzw_qianao_info: '轮次开始时,你可以弃置多于体力值的手牌并摸两倍的牌;若如此做,你于下等量个回合开始时进行一次【闪电】判定.',
    dqzw_lingye: '零叶',
    dqzw_lingye_info: '锁定技,你造成的伤害均为冰属性且你可背水:失去1点体力.',
    dqzw_xifeng: '汐锋',
    dqzw_xifeng_info: '转换技,当你①受到伤害时;②弃置牌时,你可视为对一名角色使用一张无距离限制的【杀】.',
    dqzw_yuming: '鹆鸣',
    dqzw_yuming_info: '每回合限一次,一名角色因多目标牌受到伤害后,你可以与其交换X张手牌(X为你与其位次差值);若有重合花色,防止其本回合下一次受到的伤害.',
    dqzw_lingqing: '聆磬',
    dqzw_lingqing_info: '你使用普通锦囊牌指定唯一目标后,可以获得本回合上一张不因使用进入弃牌堆的牌;若二者点数互质,你为前者额外指定一个目标,否则你失去1点体力.',
    dqzw_lingqing_tag: '聆磬-互质',
    dqzw_yugu: '虞顾',
    dqzw_yugu_info: '你造成伤害后,可以令受伤角色将手牌调整至体力值;若其因此:未摸取【杀】,你于本回合结束时执行一个额外的摸牌阶段;弃置了【杀】,其对你使用这些牌.',
    dqzw_clan_xiangmo: '襄墨',
    dqzw_clan_xiangmo_info: '每回合限一次,以你为目标的锦囊牌结算后,你可以令使用者摸至多三张牌;本回合结束时,若其期间未能再对你使用等量的牌,其下个回合手牌上限改为1.',
    dqzw_cimang: '辞芒',
    dqzw_cimang_info: '一名角色于回合内摸大于一张牌后,你可以观看这些牌并弃置其中一张【杀】;若如此做,其本回合对你使用的下一张牌无次数限制且你不能响应.',
    dqzw_mobi: '漠弼',
    dqzw_mobi_info: '每回合限一次,一名角色成为伤害牌的唯一目标后,你可以与其拼点:若你没赢,你与其各摸一张牌,你调离至此牌结算结束.',
    dqzw_zhilan: '芝兰',
    dqzw_zhilan_info: '宗族技,摸牌阶段结束时,你可以将至多两张♣️️牌当【无中生有】/【桃】对一名位次大于你/不大于你的同族角色使用,摸等量牌.',
    dqzw_clan_xielingyun: '谢灵运',
    dqzw_clan_xiexuan: '谢玄',
    dqzw_clan_xiean: '谢安',
    dqzw_clan_xiedaoyun: '谢道韫',
    dqzw_clan_xieyi: '谢仪',
    dqzw_clan_xieshang: '谢尚',
    dqzw_clan_xieyan: '谢琰',
    dqzw_clan_xieshi: '谢石',
    dqzw_clan_xiekun: '谢鲲',
    // --琅琊·诸葛-- //
    // --琅琊·王氏-- //
    dqzw_clan_wangxiang: '王祥',
    dqzw_bingxin: '冰心',
    dqzw_bingxin_info: '每回合限一次, 你可以将任意张花色不同的牌当【无中生有】或【桃】使用;你可以令本回合你只能使用上述花色的牌,以额外指定一名手牌最少的角色为目标.',
    dqzw_clan_wangdun: '王敦',
    dqzw_hongzhi: '泓志',
    dqzw_hongzhi_info: '每回合各限一次,若你手牌:不足上限,你可以将一张牌当【增兵减灶】使用;超出上限,你可以将超出的部分当火【杀】使用.手牌数>你的角色回合结束时,你可执行一项并删除另一项.',
    dqzw_clan_wangdao: '王导',
    dqzw_xieluo: '协络',
    dqzw_xieluo_info: '每回合限一次,你指定或成为锦囊牌的目标后,可以令一名目标将手牌数调整为场上的最小众数,若其因此弃置了牌则其获得该锦囊牌对应实体牌.',
    dqzw_chegang: '掣纲',
    dqzw_chegang_info: '结束阶段,你可以令一名角色选择是否使用一张手牌;若其因此使用了牌且未指定其他角色,其摸一张牌,否则你摸一张牌.',
    dqzw_clan_wangxizhi: '王羲之',
    dqzw_shangxu: '觞序',
    dqzw_shangxu_info: '出牌阶段限一次,你可以将一张基本牌当【以逸待劳】对包含你的至多三名角色使用,因此弃置了♧牌或【酒】的角色可以使用之并获得此技能.',
    dqzw_qinxuan: '沁玄',
    dqzw_qinxuan_info: '锁定技,一名角色于你回合内使用的首张黑色牌结算两次,且你可以弃置一张牌令第二次以【桃】结算.',
    dqzw_clan_wanghuizhi: '王徽之',
    dqzw_ranfeng: '然风',
    dqzw_ranfeng_info: '每回合限一次,你可以弃置你与当前回合角色的共计三张牌并视为使用一张【酒】,因此弃置牌的角色摸等量牌.',
    dqzw_guixian: '归弦',
    dqzw_guixian_info: '锁定技,结束阶段,你需视为使用一张本回合被弃置但未被使用的基本牌;若之未造成体力值变化,你将武将牌上首个非限定技改为限定技.',
    dqzw_clan_wangningzhi: '王凝之',
    dqzw_boyan: '薄言',
    dqzw_boyan_info: '转换技,锁定技,你需于下述时机失去1点体力并从牌堆底摸两张牌:阳:你回复体力后,若你未受伤;阴:你获得牌后,若你手牌数等于上限.',
    dqzw_wangsu: '往愬',
    dqzw_wangsu_info: '你成为【杀】的唯一目标后,可以回复1点体力;使用者可以将此【杀】置于牌堆底并弃置你两张牌.',
    dqzw_clan_wangyan: '王衍',
    dqzw_taoyi: '滔易',
    dqzw_taoyi_info: '轮次开始时,你可以视为使用【声东击西】.此牌结算后,目标可以视为对你使用因此被交出的一张普通锦囊牌.',
    dqzw_chonghua: '崇华',
    dqzw_chonghua_info: '你可将手牌摸至全场最多,以视为使用【无懈可击】;除非你弃置三种类型的牌各一张,否则失去此技能.',
    dqzw_clan_wangxianzhi: '王献之',
    dqzw_ningshu: '宁树',
    dqzw_ningshu_info: '你手牌中唯一最多类型的牌不计入上限;你未失去过牌的回合结束时,可以弃置这些牌并摸两张牌.',
    dqzw_junci: '峻辞',
    dqzw_junci_info: '你指定或成为基本牌的目标后,若你已/未受伤,你可以观看使用者/一名目标的两张手牌并将其中一张置于牌堆顶.',
    dqzw_clan_wangrong: '王戎',
    dqzw_suhui: '夙慧',
    dqzw_suhui_info: '每回合限一次,你使用锦囊牌指定唯一目标后,其可以令你或其获得两张【影】;本回合结束时,若本回合没有【影】被弃置过,其失去1点体力,否则其摸一张牌.',
    dqzw_qingtan: '卿谈',
    dqzw_qingtan_info: '出牌阶段, 你可以将一张四字牌当【推心置腹】使用,且你可以仅正面交出一张♠️️牌.',
    dqzw_lanying: '阑缨',
    dqzw_lanying_info: '宗族技,每回合限一次,你于回合外一次性失去至少X张牌后,可令一名同族角色执行第X项: 1.摸一张牌; 2.回复1点体力; 3.复原武将牌(X为你已损失体力值).',
    // --吴郡·陆氏-- //
    dqzw_pianya: '骈雅',
    dqzw_pianya_info: '你可以明置一至两张牌,以视为使用一张本回合未使用过的牌名字数为X的基本牌或单目标普通锦囊牌(X为你的明置牌数).',
    dqzw_qingcai: '倾才',
    dqzw_qingcai_info: '其他角色的摸牌阶段,其可以改为:获得你明置的所有牌并令你摸两张牌.',
    dqzw_fengfu: '枫浮',
    dqzw_fengfu_info: '宗族技,锁定技,每回合限一次,你失去最后的手牌后,令一名同族角色下个准备阶段改为此时所处的阶段.',
    dqzw_clan_luji: '陆机',
    visible_dqzw: '明置',
  },
  dynamicTranslate: {
    dqzw_boyan(player, skill) {
      let info = lib.translate[skill + '_info'],
        tag = '<span class = bluetext>';
      if (player.storage[skill]) return info.replace(/(阳:(.)*?;)/, tag + '$1</span>');
      return info.replace(/(阴:(.)*?.)/, tag + '$1</span>');
    },
    dqzw_xifeng(player, skill) {
      let info = lib.translate[skill + '_info'],
        tag = '<span class = bluetext>';
      if (player.storage[skill]) return info.replace(/(①)/, tag + '$1</span>');
      return info.replace(/(②)/, tag + '$1</span>');
    },
  },
  customSet(info) {
    if (info.translate && info.character)
      for (let name in info.character) {
        let str = info.translate[name];
        info.translate[name + '_prefix'] = '族';
        if (str && str[0] != '族') info.translate[name] = '族' + str;
      }
  },
};
