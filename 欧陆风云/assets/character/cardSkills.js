import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
/** @type { importCharacterConfig['skill'] } */
const cardSkills = {
  g_Europa_rottenBanana: {
    trigger: {
      player: ['loseAfter', 'compare'],
      global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
      target: 'compare'
    },
    cardSkill: true,
    filter(event, player, name) {
      if (name == 'compare') {
        if (player == event.player) {
          if (event.iwhile > 0) return false;
          return event.card1.name == 'Europa_rottenBanana';
        }
        return event.card2.name == 'Europa_rottenBanana';
      }
      if (event.name != 'equip' && !event.visible) return false;
      var evt = event.getl(player);
      if (
      !evt ||
      !evt.hs ||
      !evt.hs.filter(function (i) {
        return i.name == 'Europa_rottenBanana';
      }).length)

      return false;
      return true;
    },
    forced: true,
    popup: false,
    content() {
      game.log(player, '触发了', '#g【烂香蕉】', '的效果');
      var num = 1;
      if (typeof trigger.getl == 'function') {
        num = trigger.getl(player).hs.filter(function (i) {
          return i.name == 'Europa_rottenBanana';
        }).length;
      }
      player.loseHp(num).type = 'Europa_rottenBanana';
    }
  },
  g_Europa_rottenBanana_give: {
    trigger: {
      player: 'gainAfter',
      global: 'phaseBefore'
    },
    cardSkill: true,
    direct: true,
    filter(event, player) {
      if (event.name == 'phase') {
        if (game.phaseNumber != 0) return false;
        if (!player._start_cards) return false;
        let hs = player.getCards('h');
        for (let card of player._start_cards) {
          if (card.name == 'Europa_rottenBanana' && hs.includes(card)) return true;
        }
      } else {
        if (event.parent.name != 'draw') return false;
        let hs = player.getCards('h');
        for (let card of event.getg(player)) {
          if (card.name == 'Europa_rottenBanana' && hs.includes(card)) return true;
        }
      }
      return false;
    },
    content() {
      'step 0';
      var hs = player.getCards('h');
      if (trigger.name == 'phase') {
        event.cards = player._start_cards.filter(function (card) {
          return card.name == 'Europa_rottenBanana' && hs.includes(card);
        });
      } else {
        event.cards = trigger.cards.filter(function (card) {
          return card.name == 'Europa_rottenBanana' && hs.includes(card);
        });
      }
      if (_status.connectMode)
      game.broadcastAll(function () {
        _status.noclearcountdown = true;
      });
      event.given_map = {};
      'step 1';
      player.chooseCardTarget({
        filterCard(card) {
          return _status.event.cards.includes(card);
        },
        filterTarget: lib.filter.notMe,
        selectCard: [1, cards.length],
        cards: event.cards,
        prompt: '是否发动【赠烂香蕉】？',
        prompt2: '将本次获得的【烂香蕉】交给其他角色',
        ai1(card) {
          var player = get.player();
          if (get.effect(player, { name: 'losehp' }, player, player) > 0) return 0;
          if (!ui.selected.cards.length) return 1;
          return 0;
        },
        ai2(target) {
          return -get.attitude(_status.event.player, target) + 0.01;
        }
      });
      'step 2';
      if (result.bool) {
        event.given = true;
        var res = result.cards,
          target = result.targets[0].playerid;
        player.addGaintag(res, 'Europa_rottenBanana_given');
        cards.removeArray(res);
        if (!event.given_map[target]) event.given_map[target] = [];
        event.given_map[target].addArray(res);
        if (cards.length) event.goto(1);
      } else if (!event.given) {
        if (_status.connectMode) {
          game.broadcastAll(function () {
            delete _status.noclearcountdown;
            game.stopCountChoose();
          });
        }
        event.finish();
      }
      'step 3';
      if (_status.connectMode) {
        game.broadcastAll(function () {
          delete _status.noclearcountdown;
          game.stopCountChoose();
        });
      }
      var logs = [];
      var map = [],
        cards = [];
      for (var i in event.given_map) {
        var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
        logs.push(source);
        map.push([source, event.given_map[i]]);
        cards.addArray(event.given_map[i]);
      }
      player.showCards(
        cards,
        `${get.translation(player)}对${((targets) => {
          if (get.itemtype(targets) == 'player') targets = [targets];
          if (targets[0] != player) return get.translation(targets);
          var selfTargets = targets.slice();
          selfTargets[0] = '自己';
          return get.translation(selfTargets);
        })(logs)}发动了【${get.skillTranslation(event.name, player)}】`
      );
      game.loseAsync({
        gain_list: map,
        player: player,
        cards: cards,
        giver: player,
        animate: 'giveAuto'
      }).setContent('gaincardMultiple');
    },
    ai: {
      expose: 0.1
    }
  },
  Europa_blameBanana_effect: {
    cardSkill: true,
    trigger: {
      player: 'useCard'
    },
    forced: true,
    charlotte: true,
    async content(event, trigger, player) {
      player.removeSkill(event.name);
      if (Math.random() <= 0.5) trigger.effectCount++;else
      if (player.countCards('he')) player.chooseToDiscard(2, 'he', true);
    },
    mark: true,
    marktext: '怪',
    intro: {
      name: '怪香蕉',
      content: '你使用下一张牌时概率额外结算一次或弃置两张牌'
    },
    mod: {
      aiOrder(player, card, num) {
        if (typeof card == 'object' && !get.tag(card, 'norepeat')) {
          const type = get.type(card);
          if (type === 'basic' || type === 'trick') return num + 20;
        }
      }
    }
  },
  g_Europa_mukeladedabiaoge: {
    cardSkill: true,
    trigger: {
      player: 'phaseBegin'
    },
    forced: true,
    filter(event, player) {
      if (!game.hasPlayer((target) => target != player && get.nameList(target).includes('Europa_mukela'))) return false;
      return player.countCards('h', { name: 'Europa_mukeladedabiaoge' }) && player.countCards('h', (card) => card.name != 'Europa_mukeladedabiaoge');
    },
    async content(event, trigger, player) {
      game.log(player, '触发了', '#y【穆克拉的大表哥】', '效果');
      const target = game.filterPlayer((target) => target != player && get.nameList(target).includes('Europa_mukela')).randomGet(),
        card = player.getCards('h', (card) => card.name != 'Europa_mukeladedabiaoge').randomGet();
      if (target) await player.give(card, target);
    }
  },
  g_Europa_mukeladedabiaoge_discard: {
    cardSkill: true,
    trigger: {
      player: 'loseAfter',
      global: 'loseAsyncAfter'
    },
    forced: true,
    popup: false,
    filter(event, player) {
      return event.type == 'discard' && event.getl && event.getl(player) && event.getl(player).hs.some((i) => i.name == 'Europa_mukeladedabiaoge');
    },
    async content(event, trigger, player) {
      game.log(player, '触发了', '#g【穆克拉的大表哥】', '的效果');
      if (typeof trigger.getl == 'function') {
        const cards = trigger.getl(player).hs.filter(function (i) {
          return i.name == 'Europa_mukeladedabiaoge';
        });
        for (const card of cards) {
          const mukela = card.storage._Europa_biaoge || 'nosource';
          await player.damage(mukela, 2);
        }
      }
    }
  },
  Europa_fengkuanghouzi_skill: {
    equipSkill: true,
    trigger: {
      player: 'phaseBegin'
    },
    forced: true,
    filter(event, player) {
      return game.hasPlayer((target) => get.nameList(target).includes('Europa_mukela'));
    },
    logTarget(event, player) {
      return game.filterPlayer((target) => get.nameList(target).includes('Europa_mukela'));
    },
    async content(event, trigger, player) {
      for (const target of event.targets) {
        const card = game.createCard(
          get.Europa_bananas('ordinary').randomGet(),
          lib.suit.randomGet(),
          Array.from({ length: 13 }).
          map((info) => info + 1).
          randomGet()
        );
        if (card) await target.gain(card, 'gain2');
      }
    }
  },
  //万神殿×玩原神殿√
  Europa_wanyuanshendian_skill: {
    equipSkill: true
  },
  g_Europa_wanyuanshendian_skill: {
    equipSkill: true,
    mod: {
      cardnature(card, player) {
        if (!game.hasPlayer((t) => t.hasSkill('Europa_wanyuanshendian_skill'))) return;
        if (
        player.group !== 'shen' &&
        !['', '1', '2'].some((item) => {
          const name = player['name' + item];
          if (!name || !get.character(name)) return false;
          return get.is.double(name) ? get.is.double(name, true).includes('shen') : get.character(name).group === 'shen';
        }))

        return;
        if (card.name === 'sha') return 'thunder';
      }
    }
  },
  Europa_diaoduoxichengqiang_skill: {
    equipSkill: true,
    trigger: {
      target: 'useCardToTarget'
    },
    forced: true,
    filter(event, player) {
      if (player.hasSkillTag('unequip2')) return false;
      if (
      event.player.hasSkillTag('unequip', false, {
        name: event.card ? event.card.name : null,
        target: player,
        card: event.card
      }))

      return false;
      return get.type(event.card) == 'trick';
    },
    async content(event, trigger, player) {
      trigger.excluded.add(player);
    },
    ai: {
      effect: {
        target_use(card, player, target) {
          if (get.type(card) == 'trick') return 'zerotarget';
        }
      }
    },
    mod: {
      cardEnabled(card) {
        if (get.subtype(card) == 'equip2') return false;
      }
    }
  },
  Europa_yeniqieli_skill: {
    equipSkill: true,
    trigger: {
      source: 'damageSource'
    },
    forced: true,
    filter(event, player) {
      if (get.distance(player, event.player, 'pure') > 1) return false;
      return event.card && event.card.name == 'sha';
    },
    async content(event, trigger, player) {
      if (player.canUse({ name: 'shunshou' }, trigger.player)) {
        player.useCard({ name: 'shunshou' }, trigger.player);
      }
    }
  },
  Europa_renayayongbing_skill: {
    equipSkill: true,
    trigger: {
      target: 'useCardToBefore'
    },
    direct: true,
    priority: 6,
    filter(event, player) {
      if (player.hasSkillTag('unequip2')) return false;
      if (
      event.player.hasSkillTag('unequip', false, {
        name: event.card ? event.card.name : null,
        target: player,
        card: event.card
      }))

      return false;
      if (event.card.name == 'sha') return true;
      return false;
    },
    content() {
      player.
      chooseToUse(
        function (card, player, event) {
          if (card.name != 'sha') return false;
          return lib.filter.filterCard.apply(this, arguments);
        },
        '热那亚佣兵：是否对' + get.translation(trigger.player) + '使用一张杀？'
      ).
      set('complexSelect', true).
      set('filterTarget', function (card, player, target) {
        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
        return lib.filter.targetEnabled.apply(this, arguments);
      }).
      set('nodistance', true).
      set('sourcex', trigger.player);
    }
  },
  Europa_wuerbandapao_skill: {
    equipSkill: true,
    trigger: {
      player: 'useCard'
    },
    forced: true,
    filter(event, player) {
      return event.card.name == 'sha' && event.baseDamage && event.baseDamage >= 3;
    },
    async content(event, trigger, player) {
      trigger.directHit.addArray(game.filterPlayer());
    }
  },
  Europa_junshitandingbao_skill: {
    global: 'Europa_junshitandingbao_skill_global',
    trigger: {
      player: 'phaseZhunbeiBegin'
    },
    prompt: `你可以摸一张牌并获得1点护甲`,
    async content(event, trigger, player) {
      await player.draw();
      player.changeHujia(1, null, true);
    },
    mod: {
      canBeGained(card, source, player) {
        if (player.getEquips('Europa_junshitandingbao').includes(card)) return false;
      },
      canBeDiscarded(card, source, player) {
        if (player.getEquips('Europa_junshitandingbao').includes(card)) return false;
      },
      canBeReplaced(card, player) {
        if (player.getEquips('Europa_junshitandingbao').includes(card)) return false;
      },
      cardDiscardable(card, player) {
        if (player.getEquips('Europa_junshitandingbao').includes(card)) return false;
      },
      cardEnabled2(card, player) {
        if (player.getEquips('Europa_junshitandingbao').includes(card)) return false;
      },
      cardRecastable(card, player) {
        if (player.getEquips('Europa_junshitandingbao').includes(card)) return false;
      }
    },
    group: 'Europa_junshitandingbao_skill_lose',
    subSkill: {
      lose: {
        trigger: {
          player: ['loseBefore']
        },
        forced: true,
        equipSkill: true,
        filter(event, player) {
          const cards = player.getEquips('Europa_junshitandingbao');
          return event.cards.some((card) => cards.includes(card));
        },
        async content(event, trigger, player) {
          trigger.cards.removeArray(player.getEquips('Europa_junshitandingbao'));
        }
      },
      global: {
        trigger: {
          player: 'phaseEnd'
        },
        direct: true,
        filter(event, player) {
          if (!player.countCards('h')) return false;
          if (!player.hasClan('东正教') && !player.hasClan('逊尼派')) return false;
          return game.hasPlayer((target) => {
            return target.hasSkill('Europa_junshitandingbao_skill');
          });
        },
        async content(event, trigger, player) {
          const { bool, cards, targets } = await player.
          chooseCardTarget({
            position: 'h',
            filterCard: true,
            filterTarget(card, player, target) {
              return target.hasSkill('Europa_junshitandingbao_skill');
            },
            prompt: '你可以将一张手牌交给一名其他角色并回复1点体力',
            ai1(card) {
              return 1 / Math.max(1, get.value(card));
            },
            ai2(target) {
              return get.attitude(_status.event.player, target);
            }
          }).
          forResult();
          if (bool) {
            await player.give(cards, targets[0], 'giveAuto');
            player.recover();
          }
        }
      }
    }
  },
  Europa_kelakefanchuan_skill: {
    trigger: {
      source: 'damageBegin1',
      player: 'damageBegin3'
    },
    forced: true,
    equipSkill: true,
    filter(event, player, name) {
      if (player.hasSkillTag('unequip2')) return false;
      if (
      name == 'damageBegin1' &&
      event.player &&
      event.player.hasSkillTag('unequip', false, {
        name: event.card ? event.card.name : null,
        target: player,
        card: event.card
      }))

      return false;
      if (
      name == 'damageBegin3' &&
      event.source &&
      event.source.hasSkillTag('unequip', false, {
        name: event.card ? event.card.name : null,
        target: player,
        card: event.card
      }))

      return false;
      return event.hasNature(name == 'damageBegin1' ? 'fire' : 'thunder');
    },
    async content(event, trigger, player) {
      trigger.num++;
    }
  },
  Europa_haitu_skill: {
    equipSkill: true,
    group: ['Europa_haitu_skill_exploration', 'Europa_haitu_skill_draw'],
    subSkill: {
      exploration: {
        trigger: {
          player: 'chooseEuropa_colonialExplorationBegin2'
        },
        forced: true,
        filter(event, player) {
          return true;
        },
        async content(event, trigger, player) {
          trigger.num--;
        }
      },
      draw: {
        trigger: {
          player: 'drawEnd'
        },
        forced: true,
        async content(event, trigger, player) {
          const cards = get.cards();
          game.cardsGotoOrdering(cards);
          const next = player.chooseToMove();
          next.set('list', [['牌堆顶', cards], ['牌堆底']]);
          next.set('prompt', '海图：点击将牌移动到牌堆顶或牌堆底');
          next.processAI = (list) => {
            const cards = list[0][1],
              player = _status.event.player;
            const target = _status.currentPhase?.next || player;
            const att = get.attitude(player, target);
            const top = [],
              bottom = cards;
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
          const { moved } = await next.forResult();
          const top = moved[0];
          const bottom = moved[1];
          top.reverse();
          game.cardsGotoPile(top.concat(bottom), ['top_cards', top], (event, card) => {
            if (event.top_cards.includes(card)) return ui.cardPile.firstChild;
            return null;
          });
          player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
          game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
          game.asyncDelayx();
        }
      }
    }
  },
  Europa_tenuoqiditelan_skill: {
    equipSkill: true,
    enable: 'phaseUse',
    usable: 1,
    filter(event, player) {
      return game.hasPlayer(function (current) {
        return current.hasClan('原住民');
      });
    },
    chooseButton: {
      dialog(event, player) {
        const dialog = ui.create.dialog('特诺奇蒂特兰', [['wugu', 'taoyuan'], 'vcard']);
        dialog.direct = true;
        return dialog;
      },
      filter(button, player) {
        var evt = _status.event.parent;
        return evt.filterCard(
          {
            name: button.link[2]
          },
          player,
          evt
        );
      },
      check(button) {
        return _status.event.player.getUseValue({
          name: button.link[2]
        });
      },
      backup(links) {
        return {
          viewAs: {
            name: links[0][2],
            nature: links[0][3]
          },
          filterCard: true,
          filterTarget(card, player, target) {
            return target.hasClan('原住民');
          },
          selectTarget: -1,
          async precontent(event, trigger, player) {}
        };
      },
      prompt(links) {
        return '其中一张牌，视为使用一张以场上原住民角色为目标的' + get.translation(links[0][2]);
      }
    },
    mod: {
      canBeGained(card, source, player) {
        if (player.getEquips('Europa_tenuoqiditelan').includes(card)) return false;
      },
      canBeDiscarded(card, source, player) {
        if (player.getEquips('Europa_tenuoqiditelan').includes(card)) return false;
      },
      canBeReplaced(card, player) {
        if (player.getEquips('Europa_tenuoqiditelan').includes(card)) return false;
      },
      cardDiscardable(card, player) {
        if (player.getEquips('Europa_tenuoqiditelan').includes(card)) return false;
      },
      cardEnabled2(card, player) {
        if (player.getEquips('Europa_tenuoqiditelan').includes(card)) return false;
      },
      cardRecastable(card, player) {
        if (player.getEquips('Europa_tenuoqiditelan').includes(card)) return false;
      }
    },
    group: 'Europa_tenuoqiditelan_skill_lose',
    subSkill: {
      lose: {
        trigger: {
          player: ['loseBefore']
        },
        forced: true,
        equipSkill: true,
        filter(event, player) {
          const cards = player.getEquips('Europa_tenuoqiditelan');
          return event.cards.some((card) => cards.includes(card));
        },
        async content(event, trigger, player) {
          trigger.cards.removeArray(player.getEquips('Europa_tenuoqiditelan'));
        }
      },
      backup: {}
    }
  },
  Europa_xiongyingzhanshi_skill: {
    trigger: {
      player: 'useCard'
    },
    equipSkill: true,
    forced: true,
    filter(event, player) {
      return event.card.name == 'sha' && ['heart', 'spade'].includes(event.card.suit);
    },
    async content(event, trigger, player) {
      trigger.directHit.addArray(game.filterPlayer());
    }
  },
  Europa_pabao_skill: {
    trigger: {
      target: 'useCardToBefore'
    },
    forced: true,
    equipSkill: true,
    filter(event, player) {
      return event.card.name == 'sha' && get.distance(event.player, player) > 1;
    },
    async content(event, trigger, player) {
      trigger.cancel();
    },
    ai: {
      effect: {
        target(card, player, target) {
          if (get.distance(player, target) <= 1) return;
          if (card.name == 'nanman') return 'zeroplayertarget';
        }
      }
    }
  },
  Europa_lisiben_skill: {
    global: 'Europa_lisiben_skill_global',
    mod: {
      canBeGained(card, source, player) {
        if (player.getEquips('Europa_lisiben').includes(card)) return false;
      },
      canBeDiscarded(card, source, player) {
        if (player.getEquips('Europa_lisiben').includes(card)) return false;
      },
      canBeReplaced(card, player) {
        if (player.getEquips('Europa_lisiben').includes(card)) return false;
      },
      cardDiscardable(card, player) {
        if (player.getEquips('Europa_lisiben').includes(card)) return false;
      },
      cardEnabled2(card, player) {
        if (player.getEquips('Europa_lisiben').includes(card)) return false;
      },
      cardRecastable(card, player) {
        if (player.getEquips('Europa_lisiben').includes(card)) return false;
      }
    },
    group: 'Europa_lisiben_skill_lose',
    subSkill: {
      lose: {
        trigger: {
          player: ['loseBefore']
        },
        forced: true,
        equipSkill: true,
        filter(event, player) {
          const cards = player.getEquips('Europa_lisiben');
          return event.cards.some((card) => cards.includes(card));
        },
        async content(event, trigger, player) {
          trigger.cards.removeArray(player.getEquips('Europa_lisiben'));
        }
      },
      global: {
        trigger: {
          player: ['judgeEnd', 'explorationContingencyBegin']
        },
        prompt: '你可以摸一张牌',
        filter(event, player) {
          return _status.currentPhase != player;
        },
        async content(event, trigger, player) {
          player.draw();
        }
      }
    }
  },
  Europa_babalihaidao_skill: {
    trigger: {
      player: 'phaseDrawEnd'
    },
    forced: true,
    equipSkill: true,
    filter(event, player) {
      return player.countCards('h', function (card) {
        return lib.filter.cardDiscardable(card, player, 'Europa_babalihaidao_skill');
      });
    },
    async content(event, trigger, player) {
      if (player.countCards('h')) player.chooseToDiscard('h', true);
    },
    ai: {
      noEuropa_colonialExploration: true
    }
  },
  Europa_kekechuan_skill: {
    enable: 'phaseUse',
    usable: 1,
    filter(event, player) {
      return (
        lib.tradeGoodsCardList.some((info) => player.getExpansions(info).length) &&
        game.hasPlayer(function (current) {
          return target != player && target.hasSkillTag('Europa_colonialExploration') && target.hasSkill('Europa_colonialExploration');
        }));

    },
    chooseButton: {
      dialog(event, player) {
        return ui.create.dialog('柯克船', [lib.tradeGoodsCardList, 'vcard']);
      },
      check(button) {
        return 1 + Math.random();
      },
      backup(links, player) {
        let next = {
          exploration: links[0][2],
          position: 'x',
          filterTarget(card, player, target) {
            return target != player && target.hasSkillTag('Europa_colonialExploration') && target.hasSkill('Europa_colonialExploration');
          },
          lose: false,
          discard: false,
          delay: false,
          async content(event, trigger, player) {
            const cards = event.cards;
            target.addToExpansion(cards, 'giveAuto').gaintag.add(get.info('kekechuan_skill').chooseButton.backup.exploration);
          },
          ai: {
            target: 1
          }
        };
        get.event().links = links;
        next.filterCard = function (card) {
          const player = get.player();
          const links = get.event('links');
          return player.getExpansions(links[0][2]).includes(card);
        };
        return next;
      },
      prompt(links, player) {
        return '将一种货物全部移动至一枚其他角色';
      }
    },
    ai: {
      order: 1,
      result: {
        player: 1
      }
    },
    subSkill: {
      backup: {}
    }
  },
  Europa_shuzuiquan_skill: {
    trigger: {
      source: 'damageBegin'
    },
    forced: true,
    priority: 6,
    cardSkill: true,
    filter(event, player) {
      if (!player.countCards('hs', { name: 'Europa_shuzuiquan' })) return false;
      return player.hasUsableCard('Europa_shuzuiquan');
    },
    async content(event, trigger, player) {
      trigger.Europa_shuzuiquan = true;
      var next = player.chooseToUse();
      next.set('prompt', '是否使用【赎罪券】，令你即将造成的伤害改为无来源');
      next.set('filterCard', function (card, player) {
        if (card.name != 'Europa_shuzuiquan') return false;
        return lib.filter.cardEnabled(card, player, 'forceEnable');
      });
      next.set('ai1', function (card) {
        if (event.player.hasSkillTag('maixie_defend')) return true;
        if (get.damageEffect(trigger.player, player, player) > 0) return false;
        return Math.random() > 0.7;
      });
      await next;
      trigger.Europa_shuzuiquan = false;
    }
  },
  Europa_dadaniyaerhaixiapao_skill: {
    equipSkill: true,
    trigger: {
      target: 'useCardToTargeted'
    },
    filter(event, player) {
      if (player.hasSkillTag('unequip2')) return false;
      var evt = event;
      if (
      evt.player &&
      evt.player.hasSkillTag('unequip', false, {
        name: evt.card ? evt.card.name : null,
        target: player,
        card: evt.card
      }))

      return false;
      if (!player.canUse({ name: 'sha' }, event.player)) return false;
      return event.card.name == 'sha' && player.countCards('h') >= 3;
    },
    check(event, player) {
      if (get.attitude(player, event.player) > 0) return false;
      return get.effect(event.player, { name: 'sha' }, player, player) > 0;
    },
    async content(event, trigger, player) {
      await player.discard(player.getCards('h'));
      if (player.canUse({ name: 'sha' }, trigger.player)) {
        player.chooseUseTarget({ name: 'sha' }, trigger.player, true).set('oncard', () => {
          _status.event.baseDamage = 3;
        });
      }
    }
  },
  Europa_suifaqiang_skill: {
    equipSkill: true,
    trigger: {
      player: ['useCard', 'useCardAfter']
    },
    forced: true,
    filter(event, player) {
      return event.card.name == 'sha';
    },
    async content(event, trigger, player) {
      if (event.triggername == 'useCard') trigger.directHit.addArray(game.filterPlayer());else
      player.addTempSkill('Europa_suifaqiang_skill_ban1');
    },
    ai: {
      directHit_ai: true,
      skillTagFilter(player, tag, arg) {
        if (arg && arg.card && arg.card.name == 'sha' && !player.hasSkillTag('unequip_equip1')) return true;
        return false;
      }
    },
    subSkill: {
      ban1: {
        mark: true,
        marktext: '禁',
        intro: {
          content: '本回合及下回合不能使用【杀】'
        },
        charlotte: true,
        onremove(player) {
          player.addTempSkill('Europa_suifaqiang_skill_ban2', { player: 'phaseAfter' });
        },
        mod: {
          cardEnabled(card, player) {
            if (card.name == 'sha') return false;
          }
        }
      },
      ban2: {
        mark: true,
        marktext: '禁',
        intro: {
          content: '本回合不能使用【杀】'
        },
        charlotte: true,
        mod: {
          cardEnabled(card, player) {
            if (card.name == 'sha') return false;
          }
        }
      }
    }
  },
  Europa_xinzhongkangyi_clear: {
    trigger: {
      player: 'phaseEnd'
    },
    forced: true,
    popup: false,
    charlotte: true,
    onremove: true,
    async content(event, trigger, player) {
      const cards = player.getStorage(event.name);
      await game.cardsGotoSpecial(cards);
      player.removeSkill(event.name);
      game.log(cards, '被销毁了');
      player.directgain(player.getCards('h'), false);
    }
  },
  Europa_jiaohuangguanmian_skill: {
    equipSkill: true,
    trigger: {
      player: 'phaseZhunbeiBegin'
    },
    forced: true,
    async content(event, trigger, player) {
      let card = game.createCard('Europa_shuzuiquan');
      player.gain(card, 'gain2');
      player.addSkill('Europa_jiaohuangguanmian_skill_clear');
      player.markAuto('Europa_jiaohuangguanmian_skill_clear', [card]);
    },
    subSkill: {
      clear: {
        trigger: {
          player: 'phaseEnd'
        },
        forced: true,
        popup: false,
        charlotte: true,
        onremove: true,
        async content(event, trigger, player) {
          const cards = player.getStorage(event.name);
          await game.cardsGotoSpecial(cards);
          player.removeSkill(event.name);
          game.log(cards, '被销毁了');
          player.directgain(player.getCards('h'), false);
        }
      }
    }
  },
  Europa_fandigang_skill: {
    equipSkill: true,
    global: 'Europa_fandigang_skill_global',
    group: 'Europa_fandigang_skill_lose',
    mod: {
      canBeGained(card, source, player) {
        if (player.getEquips('Europa_fandigang').includes(card)) return false;
      },
      canBeDiscarded(card, source, player) {
        if (player.getEquips('Europa_fandigang').includes(card)) return false;
      },
      canBeReplaced(card, player) {
        if (player.getEquips('Europa_fandigang').includes(card)) return false;
      },
      cardDiscardable(card, player) {
        if (player.getEquips('Europa_fandigang').includes(card)) return false;
      },
      cardEnabled2(card, player) {
        if (player.getEquips('Europa_fandigang').includes(card)) return false;
      },
      cardRecastable(card, player) {
        if (player.getEquips('Europa_fandigang').includes(card)) return false;
      }
    },
    subSkill: {
      lose: {
        trigger: {
          player: ['loseBefore']
        },
        forced: true,
        equipSkill: true,
        filter(event, player) {
          const cards = player.getEquips('Europa_junshitandingbao');
          return event.cards.some((card) => cards.includes(card));
        },
        async content(event, trigger, player) {
          trigger.cards.removeArray(player.getEquips('Europa_junshitandingbao'));
        }
      },
      global: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          if (!player.hasClan('天主教')) return false;
          return game.hasPlayer(function (current) {
            return current != player && current.hasSkill('Europa_fandigang_skill');
          });
        },
        prompt: '出牌阶段限一次，你可以回复1点体力并从牌库或弃牌堆中获得一张【赎罪券】，若如此做，你不能弃置【赎罪券】直至你下回合并始。',
        async content(event, trigger, player) {
          await player.recover();
          var card = get.cardPile(function (card) {
            return card.name == 'Europa_shuzuiquan';
          });
          if (card) {
            player.gain(card, 'gain2');
            player.addTempSkill('Europa_fandigang_skill_nodis', { player: 'phaseBefore' });
          }
        },
        ai: {
          order: 1,
          result: {
            player(player) {
              return get.recoverEffect(player, player, player);
            }
          }
        }
      },
      nodis: {
        charlotte: true,
        mod: {
          cardDiscardable(card, player) {
            if (card.name == 'Europa_shuzuiquan') return false;
          }
        }
      }
    }
  },
  Europa_sheji_used: {
    charlotte: true,
    mark: true,
    marktext: '禁射',
    intro: {
      content: '不能使用【射击】'
    }
  },
  _g_Europa_maoyu: {
    cardSkill: true,
    trigger: {
      target: 'useCardToBefore'
    },
    forced: true,
    popup: false,
    filter(event, player) {
      if (event.player == player) return false;
      if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
      if (event.parent.directHit.includes(player)) return false;
      return player.countCards('h', { name: 'Europa_maoyu' });
    },
    content() {
      'step 0';
      player.
      chooseToUse('是否对' + get.translation(trigger.card) + '使用【矛御】？').
      set('ai1', function (card) {
        return _status.event.bool;
      }).
      set('bool', -get.effect(player, trigger.card, trigger.player, player)).
      set('respondTo', [trigger.player, trigger.card]).
      set('filterCard', function (card, player) {
        if (card.name != 'Europa_maoyu') return false;
        return lib.filter.cardEnabled(card, player, 'forceEnable');
      });
      trigger.Europa_maoyu = true;
      'step 1';
      delete trigger.Europa_maoyu;
    }
  },
  Europa_gudian_baseDamage: {
    trigger: {
      player: 'useCard'
    },
    forced: true,
    charlotte: true,
    onremove: true,
    filter(event, player) {
      return event.card.name == 'Europa_sheji';
    },
    async content(event, trigger, player) {
      trigger.baseDamage += player.countMark(event.name);
      player.removeSkill(event.name);
    }
  },
  Europa_gudian_effectCount: {
    trigger: {
      player: 'useCard'
    },
    forced: true,
    charlotte: true,
    onremove: true,
    filter(event, player) {
      return event.card.name == 'Europa_sheji';
    },
    async content(event, trigger, player) {
      trigger.effectCount += player.countMark(event.name);
      player.removeSkill(event.name);
    }
  },
  Europa_tangjihede_skill: {
    equipSkill: true,
    mod: {
      playerEnabled(card, player, target) {
        if (!player.isPhaseUsing()) return;
        if (player.hasHistory('useCard', (evt) => evt.card.name == 'sha' && evt.isPhaseUsing())) return;
        if (card.name != 'sha') return;
        if (!target.isMinHandcard()) return false;
      }
    }
  },
  Europa_wudijiandui_skill: {
    trigger: {
      source: 'damageBegin1'
    },
    equipSkill: true,
    forced: true,
    logTarget: 'player',
    filter(event, player) {
      const target = event.player;
      if (!player.inRange(target)) return false;
      var distance = get.distance(player, target);
      return !game.hasPlayer((current) => current != target && player.inRange(current) && get.distance(player, current) > distance);
    },
    async content(event, trigger, player) {
      trigger.num++;
    }
  },
  g_Europa_qiyi: {
    trigger: {
      player: ['loseAfter', 'compare'],
      global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
      target: 'compare'
    },
    forced: true,
    popup: false,
    cardSkill: true,
    filter(event, player, name) {
      if (event.parent.name == 'useCard' || event.getParent(2).name == 'Europa_deguoliangshixuqiu') return false;
      if (name == 'compare') {
        if (player == event.player) {
          if (event.iwhile > 0) return false;
          return event.card1.name == 'Europa_qiyi';
        }
        return event.card2.name == 'Europa_qiyi';
      }
      if (event.name != 'equip' && !event.visible) return false;
      return event.getl(player)?.hs?.some((i) => i.name == 'Europa_qiyi');
    },
    async content(event, trigger, player) {
      if (trigger.delay === false) await game.asyncDelay();
      game.log(player, '触发了', '#g【起义】', '的效果');
      var num = 1,
        cards = [];
      if (typeof trigger.getl == 'function') {
        cards = trigger.getl(player).hs.filter(function (i) {
          return i.name == 'Europa_qiyi';
        });
        num = cards.length;
      }
      if (!trigger.parent.noqiyi) await player.damage(num, 'nosource');
      if (cards.length) {
        await game.cardsGotoSpecial(cards);
        game.log(cards, '被销毁了');
      }
    }
  },
  Europa_qingyunjian_skill1: {
    trigger: {
      source: 'damageSource'
    },
    forced: true,
    equipSkill: true,
    filter(event, player) {
      if (!get.nameList(player).includes('Europa_piliufujia')) return false;
      return event.card && event.card.name == 'sha';
    },
    async content(event, trigger, player) {
      trigger.player.damage('thunder');
    },
    ai: {
      unequip: true,
      unequip: true,
      skillTagFilter(player, tag, arg) {
        if (!arg || !arg.card || arg.card.name != 'sha' || !get.nameList(player).includes('Europa_piliufujia')) return false;
      }
    }
  },
  Europa_qingyunjian_skill2: {
    trigger: {
      global: 'phaseBegin'
    },
    forced: true,
    equipSkill: true,
    filter(event, player) {
      return !get.nameList(player).includes('Europa_piliufujia');
    },
    async content(event, trigger, player) {
      const { bool } = await player.
      judge(function (card) {
        return card.suit == 'spade' ? -2 : 0;
      }).
      set('judge2', (result) => !result.bool).
      forResult();
      if (!bool) {
        player.damage('thunder');
        player.addTempSkill('Europa_qingyunjian_skill2_ban');
      }
    },
    subSkill: {
      ban: {
        charlotte: true,
        mod: {
          cardEnabled2(card, player) {
            if (card.name == 'sha') return false;
          }
        }
      }
    }
  },
  Europa_chilong_skill1: {
    equipSkill: true,
    trigger: {
      player: 'phaseZhunbeiBegin'
    },
    popup: false,
    filter(event, player) {
      return get.nameList(player).includes('Europa_piliubocha');
    },
    async cost(event, trigger, player) {
      event.result = await player.
      chooseTarget(get.prompt2(event.name.slice(0, -5))).
      set('filterTarget', (card, player, target) => {
        return target != player;
      }).
      set('ai', (target) => {
        const player = get.player();
        return get.damageEffect(target, player, player);
      }).
      forResult();
    },
    async content(event, trigger, player) {
      const target = event.targets[0];
      target.damage('fire');
    }
  },
  Europa_chilong_skill2: {
    trigger: {
      player: 'damageBegin3'
    },
    forced: true,
    equipSkill: true,
    filter(event, player) {
      return event.hasNature('fire') && !get.nameList(player).includes('Europa_piliubocha');
    },
    async content(event, trigger, player) {
      trigger.num++;
    },
    group: 'Europa_chilong_skill2_ban',
    subSkill: {
      ban: {
        charlotte: true,
        mod: {
          cardEnabled(card, player) {
            if (get.nameList(player).includes('Europa_piliubocha')) return;
            if (card.cards) {
              const hs = player.getCards('h');
              if (card.cards.some((card) => hs.includes(card))) return false;
            }
          },
          cardSavable(card, player) {
            if (get.nameList(player).includes('Europa_piliubocha')) return;
            if (card.cards) {
              const hs = player.getCards('h');
              if (card.cards.some((card) => hs.includes(card))) return false;
            }
          }
        }
      }
    }
  },
  Europa_yupipa_skill: {
    equipSkill: true,
    trigger: {
      source: 'damageBegin1'
    },
    popup: false,
    async cost(event, trigger, player) {
      const { index } = await player.
      chooseControl('任意属性', '失去体力', 'cancel2').
      set('ai', () => {
        const player = get.player(),
          trigger = get.event().getTrigger();
        if (trigger.player.hasSkillTag('maixie')) return 1;
        if (get.damageEffect(trigger.player, player, player) <= 0) return 1;
        return 0;
      }).
      forResult();
      if (index != 2) event.result = { bool: true, cost_data: { index } };
    },
    async content(event, trigger, player) {
      const index = event.cost_data.index;
      if (index == 0) {
        var list = lib.linked.slice(0);
        list.removeArray(get.natureList(trigger.card));
        const { control } = await player.chooseControl(list).set('prompt', '转换为任意属性').forResult();
        game.log('此次伤害被转为了', '#y' + get.translation(control), '属性');
        game.setNature(trigger, control);
      } else {
        trigger.player.loseHp(trigger.num);
      }
    }
  },
  Europa_hunyuanzhenzhusan_skill: {
    equipSkill: true,
    zhuanhuanji: true,
    group: ['Europa_hunyuanzhenzhusan_skill_kai', 'Europa_hunyuanzhenzhusan_skill_he'],
    subSkill: {
      kai: {
        enable: 'phaseUse',
        filterTarget: true,
        selectTarget: [1, 2],
        multitarget: true,
        filter(event, player) {
          if (player.isTempBanned('Europa_hunyuanzhenzhusan_skill')) return false;
          return !player.storage.Europa_hunyuanzhenzhusan_skill;
        },
        prompt: '你可以对至多两名角色造成1点伤害',
        async content(event, trigger, player) {
          player.tempBanSkill('Europa_hunyuanzhenzhusan_skill', false, false);
          player.changeZhuanhuanji('Europa_hunyuanzhenzhusan_skill');
          for (const target of event.targets) await target.damage();
        },
        ai: {
          order: 1,
          result: {
            target(player, target) {
              game.log(target, get.damageEffect(target, player, target));
              return get.damageEffect(target, player, target);
            }
          }
        }
      },
      he: {
        enable: ['chooseToUse', 'chooseToRespond'],
        filter(event, player) {
          if (!player.storage.Europa_hunyuanzhenzhusan_skill) return false;
          if (_status.currentPhase == player) return false;
          if (player.hasSkill('Europa_hunyuanzhenzhusan_skill_used')) return false;
          return get.
          inpileVCardList((info) => {
            const name = info[2],
              type = get.type(name),
              infox = get.info({ name: name });
            return type == 'basic';
          }).
          filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event)).length;
        },
        chooseButton: {
          dialog(event, player) {
            const list = get.
            inpileVCardList((info) => {
              const name = info[2],
                type = get.type(name),
                infox = get.info({ name: name });
              return type == 'basic';
            }).
            filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
            const dialog = ui.create.dialog('混元珍珠伞', [list, 'vcard']);
            dialog.direct = true;
            return dialog;
          },
          filter(button, player) {
            return _status.event.parent.filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.parent);
          },
          check(button) {
            if (_status.event.parent.type != 'phase') return 1;
            const player = get.player();
            return player.getUseValue({
              name: button.link[2],
              nature: button.link[3]
            });
          },
          backup(links, player) {
            return {
              viewAs: {
                name: links[0][2],
                nature: links[0][3]
              },
              filterCard: () => false,
              selectCard: -1,
              log: false,
              async precontent(event, trigger, player) {
                player.tempBanSkill('Europa_hunyuanzhenzhusan_skill', false, false);
                player.changeZhuanhuanji('Europa_hunyuanzhenzhusan_skill');
              }
            };
          },
          prompt(links, player) {
            return '视为使用一张' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
          }
        },
        hiddenCard(player, name) {
          if (player.isTempBanned('Europa_hunyuanzhenzhusan_skill')) return false;
          if (!lib.inpile.includes(name)) return false;
          const type = get.type(name);
          return type == 'basic' && _status.currentPhase != player && player.storage.Europa_hunyuanzhenzhusan_skill;
        },
        ai: {
          fireAttack: true,
          respondSha: true,
          respondShan: true,
          skillTagFilter(player, tag) {
            if (player.isTempBanned('Europa_hunyuanzhenzhusan_skill')) return false;
          },
          order() {
            const player = get.player();
            const event = _status.event;
            if (event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
              return 3.3;
            }
            return 3.1;
          },
          result: {
            player(player) {
              if (_status.event.dying) return get.attitude(player, _status.event.dying);
              return 1;
            }
          }
        }
      },
      he_backup: {},
      used: {
        charlotte: true
      }
    }
  },
  Europa_xiushejijian: {
    subSkill: {
      dis: {
        charlotte: true,
        onremove: true,
        mod: {
          globalFrom(from, to, distance) {
            return distance - from.countMark('Europa_xiushejijian_dis');
          }
        }
      }
    }
  },
  g_Europa_shan: {
    cardSkill: true,
    trigger: {
      target: 'useCardToTargeted'
    },
    forced: true,
    popup: false,
    filter(event, player) {
      if (event.card.name != 'sha') return false;
      return player.countCards('h', { name: 'Europa_shan' });
    },
    async content(event, trigger, player) {
      var effect = 0;
      if (trigger.card.name == 'wuxie' || trigger.card.name == 'shan') {
        if (get.attitude(player, trigger.player) < -1) {
          effect = -1;
        }
      } else if (trigger.targets && trigger.targets.length) {
        for (var i = 0; i < trigger.targets.length; i++) {
          effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
        }
      }
      const { bool } = await player.
      chooseToUse('是否使用御【闪】？').
      set('ai1', function (card) {
        return _status.event.bool;
      }).
      set('bool', () => {
        const trigger = get.event().getTrigger(),
          player = get.player();
        var target = trigger.targets[0];
        if (target == player) {
          return !player.countCards('h', 'shan') || player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1;
        } else {
          return target.getHp() == 1 || target.countCards('h') <= 2 && target.getHp() <= 2;
        }
      }).
      set('respondTo', [trigger.player, trigger.card]).
      set('filterCard', function (card, player) {
        if (card.name != 'Europa_shan') return false;
        return lib.filter.cardEnabled(card, player, 'forceEnable');
      }).
      forResult();
      if (bool) {
        trigger.parent.excluded.add(player);
      }
    }
  },
  g_Europa_cha: {
    cardSkill: true,
    trigger: {
      player: 'phaseZhunbeiBegin'
    },
    forced: true,
    popup: false,
    filter(event, player) {
      return player.countCards('h', { name: 'Europa_cha' });
    },
    async content(event, trigger, player) {
      const { bool } = await player.
      chooseToUse('是否使用【茶】？').
      set('ai1', function (card) {
        return _status.event.bool;
      }).
      set('bool', player.hasSha() || player.hasJudge('lebu')).
      set('filterCard', function (card, player) {
        if (card.name != 'Europa_cha') return false;
        return lib.filter.cardEnabled(card, player, 'forceEnable');
      }).
      forResult();
      if (bool) {
        await player.
        chooseToUse(function (card) {
          if (card.name != 'sha') return false;
          return lib.filter.cardEnabled.apply(this, arguments);
        }).
        set('prompt', `你可以使用一张【杀】`).
        set('addCount', false);
        if (player.hasJudge('lebu')) {
          player.discard(player.getJudge('lebu'));
        }
      }
    }
  },
  Europa_chuanguoyuxi_skill: {
    equipSkill: true,
    init(player) {
      if (game.zhu == player) return;
      const skills = player.getStockSkills(true, true).filter((skill) => {
        if (player.hasSkill(skill)) return false;
        let info = get.info(skill);
        return info && info.zhuSkill;
      });
      if (skills.length) player.addSkills(skills);
    },
    group: ['Europa_chuanguoyuxi_skill_draw', 'Europa_chuanguoyuxi_skill_use', 'Europa_chuanguoyuxi_skill_remove'],
    subSkill: {
      draw: {
        equipSkill: true,
        trigger: {
          player: 'phaseDrawBegin2'
        },
        forced: true,
        filter(event, player) {
          return !event.numFixed;
        },
        async content(event, trigger, player) {
          trigger.num++;
        }
      },
      use: {
        equipSkill: true,
        trigger: {
          player: 'phaseUseBegin'
        },
        popup: false,
        locked: true,
        filter(event, player) {
          return game.hasPlayer((current) => current.countCards('h'));
        },
        async cost(event, trigger, player) {
          event.result = await player.
          chooseTarget(`传国玉玺：你可以观看一名角色的手牌`).
          set('filterTarget', (card, player, target) => {
            return target.countCards('h');
          }).
          set('ai', (target) => {
            return -target.countCards('h');
          }).
          forResult();
        },
        async content(event, trigger, player) {
          player.viewHandcards(event.targets[0]);
        }
      },
      remove: {
        equipSkill: true,
        trigger: {
          player: 'phaseJieshuBegin'
        },
        forced: true,
        filter(event, player) {
          return game.hasPlayer((target) => {
            return target != player && target.hasSkill('Europa_tianchaojizhi');
          });
        },
        logTarget(event, player) {
          return game.filterPlayer((target) => {
            return target != player && target.hasSkill('Europa_tianchaojizhi');
          });
        },
        async content(event, trigger, player) {
          for (const target of event.targets) {
            get.info('Europa_tianchaojizhi').Europa_Mark(target, 10, 'remove');
          }
        }
      }
    }
  },
  Europa_beijing_skill: {
    equipSkill: true,
    trigger: {
      global: 'roundStart'
    },
    forced: true,
    filter(event, player) {
      return game.roundNumber == 1;
    },
    async content(event, trigger, player) {
      var card = get.cardPile2(function (card) {
        return card.name == 'Europa_chuanguoyuxi';
      });
      if (card) player.gain(card, 'gain2');
    },
    mod: {
      canBeGained(card, source, player) {
        if (player.getEquips('Europa_beijing').includes(card)) return false;
      },
      canBeDiscarded(card, source, player) {
        if (player.getEquips('Europa_beijing').includes(card)) return false;
      },
      canBeReplaced(card, player) {
        if (player.getEquips('Europa_beijing').includes(card)) return false;
      },
      cardDiscardable(card, player) {
        if (player.getEquips('Europa_beijing').includes(card)) return false;
      },
      cardEnabled2(card, player) {
        if (player.getEquips('Europa_beijing').includes(card)) return false;
      },
      cardRecastable(card, player) {
        if (player.getEquips('Europa_beijing').includes(card)) return false;
      }
    },
    group: ['Europa_beijing_skill_lose', 'Europa_beijing_skill_add'],
    subSkill: {
      lose: {
        trigger: {
          player: ['loseBefore']
        },
        forced: true,
        equipSkill: true,
        filter(event, player) {
          const cards = player.getEquips('Europa_beijing');
          return event.cards.some((card) => cards.includes(card));
        },
        async content(event, trigger, player) {
          trigger.cards.removeArray(player.getEquips('Europa_beijing'));
        }
      },
      add: {
        equipSkill: true,
        trigger: {
          player: 'phaseZhunbeiBegin'
        },
        forced: true,
        filter(event, player) {
          if (!get.info('Europa_tianchaojizhi').filterx(event, player)) return false;
          return player.getEquips('Europa_chuanguoyuxi').length;
        },
        async content(event, trigger, player) {
          get.info('Europa_tianchaojizhi').Europa_Mark(player, 5);
        }
      }
    }
  },
  //奥斯曼乐园
  Europa_aosimanleyuan_skill: {
    equipSkill: true,
    trigger: { player: 'useCard' },
    filter(event, player) {
      if (!player.isPhaseUsing() || event.card.name !== 'sha') return false;
      return (
        player.
        getHistory('useCard', (evt) => {
          if (evt.card.name !== 'sha') return false;
          return evt.getParent('phaseUse') === event.getParent('phaseUse');
        }).
        indexOf(event) === 0);

    },
    async content(event, trigger, player) {
      await player.draw();
      if (trigger.addCount !== false) {
        trigger.addCount = false;
        player.getStat('card')[trigger.card.name]--;
        game.log(trigger.card, '不计入次数');
      }
    }
  },
  Europa_shenhuofeiya_skill: {
    equipSkill: true,
    trigger: {
      player: 'phaseJieshuBegin'
    },
    filter(event, player) {
      return player.countCards('h');
    },
    check(event, player) {
      return Object.keys(lib.color).some((color) => player.countCards('h', { color: color }) == 1);
    },
    async content(event, trigger, player) {
      await player.showHandcards();
      let colors = player.getCards('h').reduce((list, card) => list.add(get.color(card)), []);
      const result = await player.
      chooseControl(colors).
      set('prompt', '神火飞鸦：弃置一种颜色的所有手牌并对一名角色造成1点火焰伤害').
      set('ai', () => {
        const player = get.event().player;
        let controls = get.event().controls.slice();
        return controls.sort((a, b) => {
          return player.countCards('h', { color: a == 'none2' ? 'none' : a }) - player.countCards('h', { color: b == 'none2' ? 'none' : b });
        })[0];
      }).
      forResult();
      const color = result.control == 'none2' ? 'none' : result.control;
      const cards = player.getCards('h', { color: color });
      if (cards.length) await player.discard(cards);
      const { bool, targets } = await player.
      chooseTarget(true, `神火飞鸦：请选择对一名角色造成1点火焰伤害`).
      set('ai', (target) => {
        const player = get.player();
        return get.damageEffect(target, player, player, 'fire');
      }).
      forResult();
      if (bool) {
        player.line(targets);
        targets[0].damage('fire');
      }
    }
  },
  Europa_qijiaqiang_skill: {
    equipSkill: true,
    trigger: {
      source: 'damageBegin1'
    },
    filter(event, player) {
      if (event.player == player || event.num != 1) return false;
      return _status.currentPhase == player && !player.hasHistory('sourceDamage', (evt) => evt.player != place);
    },
    async cost(event, trigger, player) {
      event.result = await player.
      chooseToDiscard('he', get.prompt2(event.name.slice(0, -5), trigger.player)).
      set('ai', (card) => {
        const player = get.player(),
          target = get.event().getTrigger().player;
        if (get.damageEffect(target, player, player) >= 0) return 0;
        return 5 - get.value(card);
      }).
      set('chooseonly', true).
      forResult();
    },
    logTarget: 'player',
    async content(event, trigger, player) {
      await player.discard(event.cards);
      trigger.num++;
    }
  },
  Europa_qijiadao_skill: {
    equipSkill: true,
    trigger: {
      player: 'useCard'
    },
    filter(event, player) {
      if (event.card.name != 'shan') return false;
      return Array.isArray(event.respondTo) && event.respondTo[0] != player && player.canUse({ name: 'sha' }, event.respondTo[0], false);
    },
    async cost(event, trigger, player) {
      event.result = await player.
      chooseToDiscard('he', get.prompt2(event.name.slice(0, -5), trigger.respondTo[0])).
      set('ai', (card) => {
        const player = get.player(),
          target = get.event().getTrigger().player;
        game.log(get.effect(target, { name: 'sha' }, player, player));
        if (get.effect(target, { name: 'sha' }, player, player) >= 0) return 0;
        return 5 - get.value(card);
      }).
      set('chooseonly', true).
      forResult();
    },
    logTarget(event, player) {
      return event.respondTo[0];
    },
    async content(event, trigger, player) {
      const target = event.targets[0];
      await player.discard(event.cards);
      if (player.canUse({ name: 'sha' }, target, false)) {
        await player.useCard({ name: 'sha' }, target, false);
      }
    }
  },
  Europa_tengpai_skill: {
    equipSkill: true,
    trigger: {
      target: 'useCardToTargeted'
    },
    forced: true,
    filter(event, player) {
      if (player.hasSkillTag('unequip2')) return false;
      if (
      event.player.hasSkillTag('unequip', false, {
        name: event.card ? event.card.name : null,
        target: player,
        card: event.card
      }))

      return false;
      return event.card.name == 'sha';
    },
    async content(event, trigger, player) {
      const { bool } = await player.
      judge(function (card) {
        return get.color(card, false) == get.color(trigger.card) ? 2 : -2;
      }).
      set('judge2', (result) => result.bool).
      forResult();
      if (bool) {
        trigger.parent.excluded.push(player);
      }
    }
  },
  Europa_changpai_skill: {
    equipSkill: true,
    trigger: {
      target: 'useCardToBefore'
    },
    forced: true,
    priority: 6,
    filter(event, player) {
      if (player.hasSkillTag('unequip2')) return false;
      if (
      event.player.hasSkillTag('unequip', false, {
        name: event.card ? event.card.name : null,
        target: player,
        card: event.card
      }))

      return false;
      if (event.card.name == 'wanjian') return true;
      return false;
    },
    async content(event, trigger, player) {
      trigger.cancel();
    },
    ai: {
      effect: {
        target(card, player, target, current) {
          if (target.hasSkillTag('unequip2')) return;
          if (
          player.hasSkillTag('unequip', false, {
            name: card ? card.name : null,
            target: target,
            card: card
          }))

          return;
          if (card.name == 'wanjian') return 'zeroplayertarget';
        }
      }
    },
    group: 'Europa_changpai_skill_damage',
    subSkill: {
      damage: {
        equipSkill: true,
        trigger: {
          player: 'damageBegin3'
        },
        forced: true,
        filter(event, player) {
          if (player.hasSkillTag('unequip2')) return false;
          if (
          event.player.hasSkillTag('unequip', false, {
            name: event.card ? event.card.name : null,
            target: player,
            card: event.card
          }))

          return false;
          if (event.num < 2) return false;
          if (player.hasHistory('damage', (evt) => evt.num > 1)) return false;
          return true;
        },
        async content(event, trigger, player) {
          player.tempBanSkill(event.name, 'roundStart', false);
          trigger.num--;
        }
      }
    }
  },
  Europa_shachenbao_use: {
    trigger: {
      player: 'useCard'
    },
    forced: true,
    popup: false,
    charlotte: true,
    priority: 15,
    filter(event, player) {
      return player.getHistory('useCard').indexOf(event) == 0;
    },
    async content(event, trigger, player) {
      trigger.all_excluded = true;
      trigger.targets.length = 0;
      game.log(trigger.card, '被无效了');
      player.removeSkill('Europa_shachenbao_use');
    },
    mark: true,
    intro: {
      content: '本回合你使用的第一张牌无效'
    },
    mod: {
      aiOrder(player, card, order) {
        var use = get.useful(card) + 0.01;
        return order / use;
      }
    }
  },
  Europa_kailuo_skill: {
    equipSkill: true,
    locked: true,
    global: 'Europa_yanbaketu_skill_global',
    mod: {
      canBeGained(card, source, player) {
        if (player.getEquips('Europa_kailuo').includes(card)) return false;
      },
      canBeDiscarded(card, source, player) {
        if (player.getEquips('Europa_kailuo').includes(card)) return false;
      },
      canBeReplaced(card, player) {
        if (player.getEquips('Europa_kailuo').includes(card)) return false;
      },
      cardDiscardable(card, player) {
        if (player.getEquips('Europa_kailuo').includes(card)) return false;
      },
      cardEnabled2(card, player) {
        if (player.getEquips('Europa_kailuo').includes(card)) return false;
      },
      cardRecastable(card, player) {
        if (player.getEquips('Europa_kailuo').includes(card)) return false;
      }
    },
    subSkill: {
      global: {
        equipSkill: true,
        trigger: {
          player: 'phaseBegin'
        },
        forced: true,
        filter(event, player) {
          return player.hasClan('穆斯林');
        },
        async content(event, trigger, player) {
          const card = get.cardPile(function (cardx) {
            return get.type2(cardx) == 'trick';
          });
          if (card) player.gain(card, 'gain2');
        }
      }
    }
  },
  Europa_yanbaketu_skill: {
    equipSkill: true,
    trigger: {
      global: 'phaseBefore',
      player: 'enterGame'
    },
    forced: true,
    filter(event, player) {
      return (
        game.hasPlayer((target) => {
          return target.hasClan('原住民') || target.hasClan('穆斯林');
        }) && (
        event.name !== 'phase' || game.phaseNumber === 0));

    },
    async content(event, trigger, player) {
      const targets = game.filterPlayer((target) => {
        return target.hasClan('原住民') || target.hasClan('穆斯林');
      });
      if (targets.length) await game.asyncDraw(targets, 2);
    },
    mod: {
      canBeGained(card, source, player) {
        if (player.getEquips('Europa_yanbaketu').includes(card)) return false;
      },
      canBeDiscarded(card, source, player) {
        if (player.getEquips('Europa_yanbaketu').includes(card)) return false;
      },
      canBeReplaced(card, player) {
        if (player.getEquips('Europa_yanbaketu').includes(card)) return false;
      },
      cardDiscardable(card, player) {
        if (player.getEquips('Europa_yanbaketu').includes(card)) return false;
      },
      cardEnabled2(card, player) {
        if (player.getEquips('Europa_yanbaketu').includes(card)) return false;
      },
      cardRecastable(card, player) {
        if (player.getEquips('Europa_yanbaketu').includes(card)) return false;
      }
    }
  }
};
export default cardSkills;