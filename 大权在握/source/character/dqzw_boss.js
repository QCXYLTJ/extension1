import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
export let info = {
  character: {
    dqzw_boss_activity_tianhai_huangquan: ['female', 'quan', 3, ['dqzw_boss_activity_tianhai_shenzhui', 'dqzw_boss_activity_tianhai_qichuan']],
    dqzw_boss_activity_tianhai_zhigengniao: ['female', 'quan', 3, ['dqzw_boss_activity_tianhai_aikuan', 'dqzw_boss_activity_tianhai_yueyu']],
    dqzw_boss_activity_tianhai_shajin: ['male', 'quan', 3, ['dqzw_boss_activity_tianhai_yinyuan', 'dqzw_boss_activity_tianhai_tongtu']],
    dqzw_boss_activity_tianhai_Fuxuan: ['female', 'quan', '3/3', ['dqzw_boss_activity_tianhai_Predict', 'dqzw_boss_activity_tianhai_Upstare'], []],
    dqzw_boss_activity_tianhai_Sampo: ['male', 'quan', '3/3/1', ['dqzw_boss_activity_tianhai_Business', 'dqzw_boss_activity_tianhai_Caprices'], []],
    dqzw_boss_activity_tianhai_Xueyi: ['female', 'quan', '3/3', ['dqzw_boss_activity_tianhai_Live', 'dqzw_boss_activity_tianhai_Pierc'], []],
    dqzw_boss_activity_tianhai_Hanya: ['female', 'quan', '3/3', ['dqzw_boss_activity_tianhai_Miss', 'dqzw_boss_activity_tianhai_Quill'], []],
  },
  characterIntro: {
    dqzw_boss_activity_tianhai_huangquan: '自称「巡海游侠」的旅人,本名不详.身佩一柄长刀,独行银河.淡漠寡言,剑出如紫电般迅猛,却从来只以刀鞘战斗,收而不发.',
    dqzw_boss_activity_tianhai_zhigengniao: '出生于匹诺康尼,闻名银河的天环族歌者,举止从容优雅的少女.',
    dqzw_boss_activity_tianhai_shajin: '星际和平公司「战略投资部」的高级干部,「石心十人」之一,基石为「诡弈砂金」.',
    dqzw_boss_activity_tianhai_Fuxuan: '仙舟「罗浮」太卜司之首,自信耿直的智者.<br>凭借第三眼与穷观阵为仙舟占算航路,预卜事务吉凶,坚信自己所做的一切便是事情的「最优解」.<br>符玄等待着将军承诺的「退位让贤」,然而这一天的到来…似乎还遥遥无期.',
    dqzw_boss_activity_tianhai_Sampo: '口若悬河的倒货商人,只要有「利」的地方,就有桑博的身影.<br>桑博手中绝无仅有的情报让人不得不接近他,不过成为他的「客人」并不是什么好事.<br>毕竟只要价钱合适,「客人」也随时可以转化为「商品」.',
    dqzw_boss_activity_tianhai_Xueyi: '仙舟「罗浮」的「十王司」判官之一,负责拘、锁、刑、问的四判官中的「拘」.<br>手持铁索与破魔锥,不知疲倦地寻索重犯,将其勾摄镇伏.',
    dqzw_boss_activity_tianhai_Hanya: '仙舟「罗浮」的「十王司」判官之一,负责拘、锁、刑、问的四判官中的「问」.<br>专司读取犯人的因果罪愆,而后以「冥谶天笔」书写业报判罚.<br>由于整日使用梦占形式工作,承受着巨量魔阴身因果信息的冲刷,早已对世间万事感到索然无味.<br>只有与同为判官的姐姐雪衣行动时,才会流露片刻的真心.',
  },
  characterTitle: {
    dqzw_boss_foyege: '破败之王',
    dqzw_boss_activity_tianhai_huangquan: '真赤尽染的令使',
    dqzw_boss_activity_tianhai_zhigengniao: '齐奏谐乐的诗班',
    dqzw_boss_activity_tianhai_shajin: '策如诡弈的赌徒',
    dqzw_boss_activity_tianhai_Fuxuan: '<font color=#F090FF>知天观命的太卜</font>',
    dqzw_boss_activity_tianhai_Sampo: '<font color=#2C2A58>利益至上的贾者</font>',
    dqzw_boss_activity_tianhai_Xueyi: '<font color=#2F5379>镇魄勾魔的偃偶</font>',
    dqzw_boss_activity_tianhai_Hanya: '<font color=#2F5379>梦占愆罪的判官</font>',
  },
  skill: {
    dqzw_boss_junjue: {
      trigger: {
        player: 'phaseZhunBeiBegin',
        global: 'dieBegin',
      },
      filter: (event, player) => (event.name == 'die' ? _status.currentPhase == player && event.player != player && !game.hasPlayer((current) => player.getStorage('dqzw_boss_junjue').includes(current) && current.isAlive()) : player.getStorage('dqzw_boss_junjue').some((target) => target.isAlive())),
      forced: true,
      logTarget(event, player) {
        if (event.name == 'die') return 'player';
        return player.getStorage('dqzw_boss_junjue').find((target) => target.isAlive());
      },
      content: async function (event, trigger, player) {
        if (trigger.name == 'die') {
          const target = trigger.player;
          target.hp = target.maxHp;
          trigger.cancel();
          player.markAuto(event.name, [target]);
        } else {
          const list = player.getStorage('dqzw_boss_junjue').filter((target) => target.isAlive()),
            num = list.length;
          if (num) {
            if (num > 1) {
              const { targets } = await player
                .chooseTarget(
                  '令一名角色死亡,本回合『贯灵』无次数限制',
                  (_event, _player, target) => get.event('targets').includes(target),
                  () => 1
                )
                .forResult();
              if (targets && targets[0]) {
                const next = game.createEvent('diex', false);
                next.source = player;
                next.player = targets[0];
                next._triggered = null;
                next.restMap = { type: null, count: null, audio: null };
                next.excludeMark = [];
                next.setContent('die');
              } else return;
            } else {
              const next = game.createEvent('diex', false);
              next.source = player;
              next.player = list[0];
              next._triggered = null;
              next.restMap = { type: null, count: null, audio: null };
              next.excludeMark = [];
              next.setContent('die');
            }
            player.addTempSkill('dqzw_boss_junjue_usable');
          }
        }
      },
      subSkill: {
        usable: { charlotte: true },
      },
      intro: {
        content: 'player',
      },
    },
    dqzw_boss_guanling: {
      enable: 'phaseUse',
      usable: 1,
      filterTarget: (_event, player, target) => player != target && target.getCards('h')[0],
      content: async function (event, trigger, player) {
        const { links } = await player.choosePlayerCard(event.target, 'h', '展示一张牌', true).forResult();
        if (links && links[0]) {
          await event.target.showCards(links[0]);
          let num = get.cardNameLength(links[0]);
          if (num < event.target.hp) {
            event.target.recast(links[0]);
            if (event.name == 'dqzw_boss_guanling') player.draw(num + event.target.hp);
          } else {
            await event.target.lose(links[0], ui.cardPile).set('insert_card', true);
            game.log(player, '将', links[0], '置于牌堆顶');
            event.target.damage(player);
          }
        }
        let stat = player.getStat() && player.getStat().skill,
          all = player.getStat() && player.getStat().allSkills;
        if (player.hasSkill('dqzw_boss_junjue_usable') && stat && stat[event.name]) {
          delete stat[event.name];
          if (typeof all == 'number') all--;
        }
      },
    },
    // 天海
    dqzw_boss_activity_tianhai_shenzhui: {
      audio: 2,
      init() {
        if (lib.skill.shencai_death) {
          lib.skill.shencai_death.intro = {
            name: '神裁 - 死',
            name2: '死',
            mark(dialog, storage, player) {
              let num = 0,
                str = () => '锁定技.你的角色手牌上限-#;回合结束时,若场上存活人数小于#,则你死亡.'.replace(/#/g, num);
              if (Array.isArray(storage) && storage.length) {
                num = storage.length;
                dialog.add(str());
                dialog.addSmall(storage);
              } else dialog.add(str());
            },
            markcount(storage, player) {
              if (Array.isArray(storage)) return storage.length;
              return storage;
            },
            onunmark: 'throw',
          };
          lib.skill.shencai_death.onremove = (player, skill) => {
            let cards = player.getExpansions(skill),
              storage = player.getStorage(skill);
            if (cards.length) player.loseToDiscardpile(cards);
            if (Array.isArray(storage)) {
              storage.remove(cards);
              if (storage.length) player.loseToDiscardpile(storage);
            }
          };
        }
      },
      trigger: {
        global: 'useCardAfter',
      },
      filter: (event, player) => event.player.hp == player.hp && get.color(event.card) != 'red' && !/equip|delay/.test(get.type(event.card)) && ((event.cards && event.cards.length) || event.player.getCards('h').length),
      usable: 3,
      forced: true,
      async content(event, trigger, player) {
        let card = trigger.cards || [],
          result,
          allCards = game
            .filterPlayer(true, true, true)
            .reduce((pre, cur) => pre.concat(cur.getExpansions('shencai_death')), [])
            .flat();
        const count = player.getStat('triggerSkill'),
          name = event.name,
          countx = count && count[name],
          usable = get.info(name).usable,
          target = trigger.player;
        let num = usable - countx,
          choice =
            player.countMark('shencai_death') +
            card.length -
            allCards
              .concat(card)
              .filter((card) => player.hasUseTarget(card))
              .slice(0, num).length <=
            game.countPlayer();
        game.broadcastAll(ui.clear);
        if (target.getCards('h').length)
          result = await player
            .choosePlayerCard(get.prompt2(name, target) + (card && card.length ? '<br>' + get.translation(card) : ''), target, 'h', trigger.cards && trigger.cards.length ? [0, 1] : 1, (button) => {
              let player = get.player(),
                count = player.countMark('shencai_death'),
                cardsLen = get
                  .event('_cards')
                  .filter((card) => player.hasUseTarget(card))
                  .slice(0, get.event('_count')).length;
              return [count + 1 - cardsLen, count + get.event('_cardLen') - cardsLen].some((num) => num >= game.countPlayer()) || get.attitude(get.player(), get.event('target')) > 1 || !player.hasUseTarget(button.link) ? 0 : get.player().getUseValue(button.link);
            })
            .set('_cardLen', card.length)
            .set('_cards', allCards)
            .set('_count', num)
            .forResult();
        else
          result = await player
            .chooseBool()
            .set('choice', choice)
            .set('createDialog', [get.prompt2(name, player), card])
            .forResult();
        let { bool, links } = result;
        if (!event.isMine() && !player.isOnline() && !bool && choice) bool = true;
        if (bool) {
          if (links && links[0]) card = links;
          player.markAuto('shencai_death', card);
          let addToExp = player.addToExpansion('shencai_death', card, 'giveAuto');
          addToExp.gaintag.add('shencai_death');
          await addToExp;
          let cards = game
            .filterPlayer(true, true, true)
            .reduce((pre, cur) => pre.concat(cur.getExpansions('shencai_death')), [])
            .flat();
          if (countx && num > 0 && cards.length) {
            let skillName = get.skillTranslation(name, player),
              result = await player
                .chooseBool()
                .set('choice', cards.filter((card) => player.getUseValue(card) > 0).length >= num)
                .set('createDialog', [`###${skillName}###是否消耗此技能剩余发动次数以使用${get.cnNumber(num)}张<死>？`, cards])
                .forResult();
            if (result && result.bool) {
              let proud = game.parseSkillAudio(name + '_proud'),
                filter = (player) => {
                  if (ui.dqzwPageFilter) {
                    ui.dqzwPageFilter.style.setProperty('--scale', 0);
                    ui.dqzwPageFilter.listenTransition(function () {
                      this.remove();
                      if (ui.dqzwPageFilter == this) delete ui.dqzwPageFilter;
                    });
                  }
                  ui.dqzwPageFilter = ui.create.div('.dqzw-page-filter', ui.window);
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => ui.dqzwPageFilter.style.setProperty('--scale', 30));
                  });
                  ui.window.classList.add('dqzw-page-filter-window');
                  player.classList.add('dqzw-nofilter');
                },
                unfilter = (player) => {
                  if (ui.dqzwPageFilter) {
                    ui.dqzwPageFilter.style.setProperty('--scale', 0);
                    ui.dqzwPageFilter.listenTransition(function () {
                      this.remove();
                      if (ui.dqzwPageFilter == this) delete ui.dqzwPageFilter;
                    });
                  }
                  ui.window.classList.remove('dqzw-page-filter-window');
                  player.classList.remove('dqzw-nofilter');
                },
                play = (audio) => {
                  game.broadcastAll((audio) => {
                    game.playAudio(audio);
                  }, audio);
                },
                play2 = (next) => {
                  eval(`
                                        next.oncard = function (){
                                            (${play})('${proud[1]}');
                                        };
                                    `);
                },
                unmark = (cards) =>
                  game.hasPlayer((player) => {
                    player.unmarkAuto('shencai_death', cards);
                  }),
                played;
              count[name] = usable;
              game.broadcastAll(filter, player);
              play(proud[0]);
              await game.asyncDelay(3, 800);
              if (!lib.onover[name]) {
                lib.onover.push(() => {
                  if (!played) play(proud[1]);
                  game.broadcastAll(unfilter, player);
                });
                lib.onover[name] = true;
              }
              if (cards.length > num) {
                while (num-- && cards.length) {
                  result = await player
                    .chooseButton(
                      [`###${skillName}###请选择要使用的牌`, cards],
                      (button) => get.player().getUseValue(button.link),
                      (button) => get.player().hasUseTarget(button.link)
                    )
                    .forResult();
                  if (result && result.links) {
                    let links = result.links;
                    cards.remove(...links);
                    unmark(links);
                    const next = player.chooseUseTarget(links, true, false);
                    if (!played && num < 1) {
                      play2(next);
                      played = true;
                    }
                    await next;
                  }
                }
              } else {
                while (cards.length) {
                  const current = cards.shift();
                  let next;
                  if (player.hasUseTarget(current)) next = player.chooseUseTarget(current, true, false);
                  if (!played && !cards.length) {
                    if (next) play2(next);
                    else play(proud[1]);
                    played = true;
                  }
                  unmark([current]);
                  await next;
                }
              }
              if (!played) play(proud[1]);
              game.broadcastAll(unfilter, player);
            }
          }
        } else if (count && count[name]) count[name]--;
      },
      global: 'shencai_death',
      subSkill: {
        proud: { audio: 2 },
      },
    },
    dqzw_boss_activity_tianhai_qichuan: {
      audio: 2,
      trigger: {
        player: 'useCardBefore',
      },
      filter: (event, player) => get.tag(event.card, 'damage') && !player.hasHistory('useCard', (evt) => get.tag(evt.card, 'damage') && evt != event),
      forced: true,
      content() {
        let cards = [...ui.discardPile.children]
          .reverse()
          .filter((card) => card.name == 'sha')
          .slice(0, 4),
          color = get.color(cards[0]);
        game.cardsGotoOrdering(trigger.cards);
        player.update();
        if (player == game.me) ui.updatehl();
        trigger.cards.length = 0;
        trigger.cards.push(...cards);
        trigger.card.cards.length = 0;
        trigger.card.cards.push(...cards);
        if (cards.length && cards.every((card) => get.color(card) == color)) {
          trigger.deadly = true;
          game.log(trigger.card, '#g致命');
        }
      },
      global: 'dqzw_boss_activity_tianhai_qichuan_deadly',
      subSkill: {
        deadly: {
          trigger: {
            player: 'damageBegin2',
          },
          filter: (event) => event.parent.deadly || event.getParent(2).deadly,
          silent: true,
          content() {
            trigger.num = player.getHp();
          },
        },
      },
    },
    dqzw_boss_activity_tianhai_aikuan: {
      audio: 2,
      trigger: {
        global: ['loseAfter', 'loseAsyncAfter'],
      },
      filter(event, player) {
        if (event.type != 'discard' || event.getlx === false) return false;
        let cards = event.cards;
        if (cards.length > 1) {
          let suit = cards[0].suit;
          return cards.every((card) => card.suit == suit);
        }
        return false;
      },
      forced: true,
      async content(event, trigger, player) {
        let cards = trigger.cards,
          target = trigger.player,
          name = event.name,
          att = get.attitude(target, player),
          map = {
            club: '弃两张牌',
            spade: '翻面',
            heart: '回复1点体力',
            diamond: '摸两张牌',
          };
        let suit = cards[0].suit;
        if (map[suit]) {
          const { bool } = await target
            .chooseBool(`###是否令${get.translation(player)}发动【${get.skillTranslation(name, player)}】？###令${get.translation(player)}${map[suit]}`)
            .set('choice', /heart|diamond/.test(suit) ? att > 2 : att < 3)
            .forResult();
          if (bool) {
            player.line(target, 'green');
            let content = lib.skill.beige.content.toString();
            content = content.slice(content.indexOf('switch')).replace(/trigger\.(player|source)/g, '$1');
            await eval(`event.insert(async function (event, trigger, player){
                                const source = trigger.source,
                                    target = trigger.player,
                                    result = event._result || event.result;
                                ${content}
                            , {
                                _result: {
                                    suit
                                },
                                _trigger: {
                                    player,
                                    source: player
                                },
                                player                            
                            });`);
            if (!(target == player && !player.getCards('e').length) && player.getCards('he').length) player.chooseToGive(target, [1, 2], 'he');
          }
        }
      },
    },
    dqzw_boss_activity_tianhai_yueyu: {
      audio: 2,
      trigger: {
        player: 'phaseDiscardBegin',
      },
      forced: true,
      async content(event, trigger, player) {
        let targets = event.targets || game.filterPlayer(),
          notdiscard = [],
          name = event.name + '_discard',
          str = `是否令${get.translation(player)}本次摸到的牌可于此阶段弃置？`;
        for (let target of targets) {
          target.line(player, 'green');
          const { result } = await player.draw('nodelay');
          const { bool } = await target.chooseBool(str).set('choice', get.attitude(target, player) > 3).forResult();
          if (!bool && result) {
            notdiscard.push(...result);
            target.popup('不弃');
          }
        }
        player.addTempSkill(name, (evt) => evt == trigger && evt.finished);
        player.markAuto(name, notdiscard);
      },
      subSkill: {
        discard: {
          mod: {
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && player.getStorage('dqzw_boss_activity_tianhai_yueyu_discard').includes(card)) return false;
            },
          },
          charlotte: true,
        },
      },
    },
    dqzw_boss_activity_tianhai_yinyuan: {
      audio: 2,
      trigger: {
        target: 'useCardToTargeted',
      },
      filter(event) {
        return !/equip|delay/.test(get.type(event.card)) && event.card.suit == 'spade';
      },
      async content(event, trigger, player) {
        const name = event.name + '_judge',
          info = get.info(name);
        trigger.parent.effectCount = Math.min(player.countCards('h'), 6);
        if (info) {
          info.trigger.target = Object.keys(lib.card).map((name) => name + 'Before');
          info.events.add(trigger.parent.id);
          info.filter = (evt) => info.events.includes(evt.parent.id);
          if (!player.hasSkill(name)) player.addTempSkill(name, (evt) => evt == trigger.parent && evt.finished);
        }
      },
      subSkill: {
        judge: {
          audio: 1,
          trigger: { target: [] },
          events: [],
          silent: true,
          firstDo: true,
          priority: 500,
          async content(event, trigger, player) {
            const {
              _result: { card, bool },
            } = await player.executeDelayCardEffect('shandian');
            if (get.type(card) == 'basic') {
              trigger.cancel();
              player.gain(card, 'gain2');
              if (bool && Math.random() < 0.5) game.trySkillAudio(event.name, player);
            }
          },
        },
      },
    },
    dqzw_boss_activity_tianhai_tongtu: {
      audio: 2,
      trigger: {
        player: 'judge',
      },
      usable: 1,
      forced: true,
      async content(event, trigger, player) {
        let card = (game.getGlobalHistory('useCard').at(-1) || {}).card || { suit: 'none' },
          suit = card && get.translation(card.suit),
          ok = trigger.judge({ ...trigger.player.judging[0], suit: card.suit }) + 1 >= trigger.judge(trigger.player.judging[0]);
        const name = event.name,
          count = player.getStat('triggerSkill');
        let next = player
          .chooseToUse(`###${get.prompt(name)}${suit ? '［' + suit + ']' : ''}<br>不选择卡牌点击取消可摸两张牌###${get.skillInfoTranslation(name, player)}`)
          .set('selectTarget', function () {
            if (!ui.selected.cards.length) return [0, 1];
            return lib.filter.selectTarget.apply(this, arguments);
          })
          .set('filterTarget', function (_event, player, target) {
            return player != target && lib.filter.filterTarget.apply(this, arguments);
          })
          .set('filterCard', function (card) {
            let select = lib.filter.selectTarget(card, get.player()),
              info = get.info(card);
            if (info.toself || !lib.filter.filterCard.apply(this, arguments)) return false;
            if (Array.isArray(select)) return select[1] > 0;
            return select[1];
          })
          .set('ai1', (card) => {
            if (get.event('_replace')) return 0;
            let trigger = get.event().getTrigger(),
              player = get.player(),
              judging = get.event('judging'),
              result = trigger.judge(...judging, { suit: card.suit }) - trigger.judge(judging),
              att = get.attitude(player, trigger.player);
            if ((att > 0 && result >= 0) || (att < 0 && result < 0)) return (att < 0 ? -result : result) + get.order(card);
          })
          .set('judging', trigger.player.judging[0])
          .set('_replace', ok);
				/*if (next.getDefaultHandlerType) {
                    let type = next.getDefaultHandlerType();
                    next.set(type, (next[type] || []).add(function (event, option){
                        let result = event.result;
                        if (result && (result.cards && !result.cards.length || result.targets && !result.targets.length))
                            event.nouse = true;
                    }));
                };*/ const { cards, targets, bool } = await next.forResult();
        if (bool || (!bool && (!cards || !cards.length || !targets || !targets.length))) {
          if (!bool) {
            let result = await player
              .chooseBool(`###${get.prompt(name)}${suit ? '［' + suit + ']' : ''}<br>摸两张牌###${get.skillInfoTranslation(name, player)}`)
              .set('choice', ok)
              .forResult();
            bool = result.bool;
            if (bool) player.draw(2, 'nodelay');
          }
          if (bool) {
            card = (game.getGlobalHistory('useCard').at(-1) || {}).card || { suit: 'none' };
            suit = card.suit;
            trigger.fixedResult = {
              suit,
            };
          } else if (count && count[name]) count[name]--;
        } else if (count && count[name]) count[name]--;
      },
    },
    /* 以下代码来自扩展天海经行(复制粘贴,仅修改技能名与语音) */
    //『星舟占算』<br><li>轮次开始时,你可以<font color=#FFA9D1>观星3</font>;若如此做,本轮内你使用第X张牌结算后,当前回合角色视为使用【洞烛先机】(X为你因此置于牌堆底牌的数量)
    dqzw_boss_activity_tianhai_Predict: {
      audio: 2,
      init(player, skill) {
        if (!player.storage[skill]) player.storage[skill] = 0;
      },
      trigger: {
        global: 'roundStart',
      },
      forced: true,
      async content(event, trigger, player) {
        //QQQ
        var num = 3;
        var cards = get.cards(num);
        game.cardsGotoOrdering(cards);
        const { result } = await player
          .chooseToMove()
          .set('list', [['牌堆顶', cards], ['牌堆底']])
          .set('prompt', '将牌移动到牌堆顶或牌堆底')
          .set('processAI', function (list) {
            var cards = list[0][1];
            const target = game.players[0];
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
          }); //给别人观星
        result.moved[0].reverse();
        for (var i of result.moved[0]) {
          ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
        }
        for (var i of result.moved[1]) {
          ui.cardPile.appendChild(i);
        }
        player.popup(get.cnNumber(result.moved[0].length) + `上${get.cnNumber(result.moved[1].length)}下`);
        player.storage.dqzw_boss_activity_tianhai_Predict = result.moved[1].length;
        player.addTempSkill('dqzw_boss_activity_tianhai_Predict_draw', 'roundStart');
        game.log(player, `将${get.cnNumber(result.moved[0].length)}张牌置于牌堆顶`);
        game.updateRoundNumber();
      },
      ai: {
        threaten: 1.2,
      },
      mark: true,
      intro: {
        name: '观歙',
        content(storage) {
          if (!storage) return '【观歙】未生效';
          return '使用下第' + storage + '张牌后,当前回合角色视为使用【洞烛先机】';
        },
      },
      subSkill: {
        draw: {
          trigger: {
            player: 'useCardAfter',
          },
          forced: true,
          content() {
            'step 0';
            player.storage.dqzw_boss_activity_tianhai_Predict -= 1;
            game.updateRoundNumber();
            ('step 1');
            if (!player.storage.dqzw_boss_activity_tianhai_Predict) {
              var cur = _status.currentPhase;
              cur.useCard({ name: 'dongzhuxianji' }, cur);
              player.removeSkill('dqzw_boss_activity_tianhai_Predict_draw');
            }
          },
          onremove(player, skill) {
            player.storage.dqzw_boss_activity_tianhai_Predict = 0;
          },
          ai: {
            effect: {
              player(card, player, target) {
                if (player.storage.dqzw_boss_activity_tianhai_Predict == 1) return 2 * get.attitude(player, _status.currentPhase);
              },
            },
          },
        },
      },
    },
    dqzw_boss_activity_tianhai_Upstare: {
      audio: 2,
      enable: 'chooseToUse',
      selectCard: -1,
      filterCard(card) {
        return false;
      },
      viewAsFilter(player) {
        return !player.hasSkill('dqzw_boss_activity_tianhai_Upstare_round');
      },
      viewAs: {
        name: 'wuxie',
        storage: {
          dqzw_boss_activity_tianhai_Upstare: true,
        },
      },
      precontent() {
        'step 0';
        player.addTempSkill('dqzw_boss_activity_tianhai_Upstare_round', 'roundStart');
        if (player.countCards('he') >= 2)
          player.chooseCard(2, 'he', '弃置两张牌,或点取消摸两张牌').set('ai', function (card) {
            var num1 = game.filterPlayer((current) => current.isMinHandcard())[0].countCards('h');
            var num2 = game.filterPlayer((current) => current.isMaxHandcard())[0].countCards('h');
            if (player.countCards('h') - 2 <= num1 || player.countCards('h') + 2 >= num2) return 10 - get.value(card);
            else return 4 - get.value(card);
          });
        ('step 1');
        if (result.cards) player.discard(result.cards);
        else player.draw(2);
      },
      prompt: '发动【观歙】,视为使用【无懈可击】',
      group: 'dqzw_boss_activity_tianhai_Upstare_cards',
      subSkill: {
        cards: {
          trigger: {
            player: 'useCardAfter',
          },
          silent: true,
          charlotte: true,
          filter(event, player) {
            if (event.card.name != 'wuxie' || !event.card.storage || !event.card.storage.dqzw_boss_activity_tianhai_Upstare) return false;
            if (player.isMaxHandcard() || player.isMinHandcard()) return true;
          },
          content() {
            if (player.isMaxHandcard()) {
              var cur = game.filterPlayer((current) => current.isMinHandcard());
              var num = cur[0].countCards('h');
            } else {
              var cur = game.filterPlayer((current) => current.isMaxHandcard());
              var num = cur[0].countCards('h');
            }
            var num2 = player.countCards('h');
            if (num2 > num) player.chooseToDiscard(num2 - num, 'h', true);
            else if (num2 < num) player.draw(num - num2);
          },
        },
        round: {
          charlotte: true,
          mark: true,
          marktext: '登瞰',
          intro: {
            name: '登瞰',
            content: '一轮后技能重置',
          },
        },
      },
    },
    dqzw_boss_activity_tianhai_Business: {
      audio: 'dqzw_boss_activity_tianhai_Business2',
      global: 'dqzw_boss_activity_tianhai_Business2',
    },
    dqzw_boss_activity_tianhai_Business2: {
      audio: 2,
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        if (!player.countCards('he')) return false;
        return game.hasPlayer((current) => current.hasSkill('dqzw_boss_activity_tianhai_Business'));
      },
      selectTarget: 1,
      filterTarget(event, player, target) {
        return target.hasSkill('dqzw_boss_activity_tianhai_Business');
      },
      selectCard: 1,
      position: 'he',
      filterCard: true,
      discard: false,
      lose: false,
      check(card) {
        return 7 - get.value(card);
      },
      content() {
        'step 0';
        ui.cardPile.appendChild(cards[0]);
        game.broadcastAll(function (player) {
          player.$throw(cards[0], 1000, 'nobroadcast');
        }, player);
        game.log(player, '将' + get.translation(cards[0]) + '置于牌堆底');
        target.draw(2);
        ('step 1');
        if (target.isMaxHandcard()) {
          var tar = target;
          if (game.hasPlayer((current) => tar.canUse('sha', current)))
            player
              .chooseTarget(true, '选择' + get.translation(target) + '使用【杀】的目标', function (event, player, target) {
                return tar.canUse('sha', target);
              })
              .set('ai', function (target) {
                return get.effect(target, { name: 'sha' }, tar, player) > 0;
              });
        } else event.finish();
        ('step 2');
        if (result.targets && result.targets.length) {
          event.tar = result.targets[0];
          target.chooseCard([2, Infinity], true, '将至少两张牌当【杀】对' + get.translation(event.tar) + '使用').set('ai', function (card) {
            if (ui.selected.cards.length >= 2) return false;
            return 8 - get.value(card);
          });
        } else event.finish();
        ('step 3');
        if (result.cards.length) {
          target.useCard({ name: 'sha' }, result.cards, 'dqzw_boss_activity_tianhai_Business', event.tar, false);
        }
      },
      ai: {
        order: 2,
        threaten: 1.5,
        result: {
          player(player, target) {
            var target = game.findPlayer(function (current) {
              return current.hasSkill('dqzw_boss_activity_tianhai_Business');
            });
            if (target) {
              return get.attitude(player, target);
            }
          },
        },
      },
      prompt: '贸逆:将一张牌置于牌堆底并令桑博摸两张牌',
    },
    dqzw_boss_activity_tianhai_Caprices: {
      audio: 2,
      init(player, skill) {
        if (!player.storage[skill]) player.storage[skill] = [];
      },
      trigger: {
        player: 'useCardToPlayered',
      },
      filter(event, player) {
        if (event.targets.length != 1 || event.card.name != 'sha') return false;
        var extars = [event.targets[0].previous, event.targets[0].next];
        for (var i of extars) {
          if (lib.filter.targetEnabled(event.card, player, i)) return true;
        }
        return false;
      },
      forced: true,
      content() {
        'step 0';
        event.extars = [];
        for (var i of [trigger.targets[0].previous, trigger.targets[0].next]) {
          if (lib.filter.targetEnabled(trigger.card, player, i) && !event.extars.includes(i)) event.extars.push(i);
        }
        var extars = event.extars;
        player.chooseBool('是否发动【暮翻】,令' + get.translation(event.extars) + '成为' + get.translation(trigger.card) + '的额外目标？').set('ai', function (player) {
          var att = [0, 0];
          var player = _status.event.player;
          for (var i of extars) {
            if (get.effect(i, { name: 'sha' }, player, player) > 0) att[0] += 1;
            else att[1] += 1;
          }
          var vlu = 0;
          for (var i of trigger.cards) vlu += get.value(i);
          if (vlu > 16) return att[0] > att[1];
          return att[0] < att[1];
        });
        ('step 1');
        if (result.bool) {
          if (trigger.cards.length) player.storage.dqzw_boss_activity_tianhai_Caprices = trigger.cards;
          for (var i of event.extars) {
            trigger.parent.targets.push(i);
            trigger.parent.triggeredTargets2.push(i);
            game.log(i, '成为了额外目标');
          }
        }
      },
      group: 'dqzw_boss_activity_tianhai_Caprices_delay',
      subSkill: {
        delay: {
          trigger: {
            player: 'shadqzw_boss_activity_tianhai_Miss',
          },
          filter(event, player) {
            return player.storage.dqzw_boss_activity_tianhai_Caprices && event.cards == player.storage.dqzw_boss_activity_tianhai_Caprices && event.cards.someInD();
          },
          silent: true,
          content() {
            trigger.target.gain(trigger.cards, 'gain2');
            player.storage.dqzw_boss_activity_tianhai_Caprices = [];
          },
        },
      },
    },
    dqzw_boss_activity_tianhai_Live: {
      audio: 2,
      mod: {
        maxHandcardBase(player, num) {
          return 5 - player.countCards('e');
        },
      },
      trigger: {
        player: 'phaseDiscardEnd',
      },
      filter(event, player) {
        var tar = game.filterPlayer((current) => current.isLinked());
        if (!tar || tar.length != 1) return false;
        var cards = [];
        player.getHistory('lose', function (evt) {
          if (evt && evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs) cards.addArray(evt.hs);
        });
        return cards.length;
      },
      check(event, player) {
        var tar = game.filterPlayer((current) => current.isLinked())[0];
        return get.attitude(player, tar);
      },
      logTarget(event, player) {
        return game.filterPlayer((current) => current.isLinked())[0];
      },
      content() {
        var tar = game.filterPlayer((current) => current.isLinked())[0];
        tar.link(false);
        tar.draw(2);
      },
    },
    dqzw_boss_activity_tianhai_Pierc: {
      audio: 2,
      trigger: {
        player: 'phaseZhunbeiBegin',
      },
      filter(event, player) {
        return !player.isDisabledJudge() && player.countCards('he') && !player.countCards('j');
      },
      forced: true,
      content() {
        'step 0';
        player
          .chooseCard('he', get.prompt('dqzw_boss_activity_tianhai_Pierc'))
          .set('ai', function (card) {
            return get.color(card) == 'red' ? 4 - get.value(card) : 7 - get.value(card);
          })
          .set('prompt2', '对自己发动【擅专】,再获得场上一张装备牌');
        ('step 1');
        if (result.bool) {
          var card = result.cards[0];
          player.$throw(card);
          if (get.type(card, false) == 'delay') player.addJudge(card);
          else player.addJudge({ name: get.color(card, false) == 'red' ? 'lebu' : 'bingliang' }, result.cards);
          if (game.hasPlayer((current) => current.countCards('e') > 0))
            player
              .chooseTarget(true, '拘寒:获得场上一张装备牌', (card, player, target) => {
                return target.countGainableCards(player, 'e');
              })
              .set('ai', (target) => {
                if (target == _status.event.player) return 10;
                if (get.attitude(_status.event.player, target) < 0) {
                  if (
                    target.hasCard((card) => {
                      return get.value(card, player) >= 6;
                    })
                  )
                    return 12;
                  return 8;
                }
                return 0;
              });
          else event.finish();
        } else event.finish();
        ('step 2');
        if (result.targets && result.targets[0]) {
          //QQQ
          player.addTempSkill('dqzw_boss_activity_tianhai_Pierc_sha');
          player.gainPlayerCard(result.targets[0], 'e', true);
        } else event.finish();
        ('step 3');
        player.addGaintag(result.links, 'dqzw_boss_activity_tianhai_Pierc');
      },
      group: 'dqzw_boss_activity_tianhai_Pierc_tiesuo',
      subSkill: {
        sha: {
          mod: {
            cardname(card) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('dqzw_boss_activity_tianhai_Pierc')) return 'sha';
            },
            cardnature(card) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('dqzw_boss_activity_tianhai_Pierc')) return 'thunder';
            },
          },
          onremove(player) {
            player.removeGaintag('dqzw_boss_activity_tianhai_Pierc');
          },
        },
        tiesuo: {
          trigger: {
            player: 'judgeEnd',
          },
          forced: true,
          filter(event, player) {
            return get.position(event.result.card, true) == 'o';
          },
          content() {
            'step 0';
            player.chooseUseTarget({ name: 'tiesuo' }, [trigger.result.card], false, '将' + get.translation(trigger.result.card) + '当【铁索连环】使用,或点<取消>重铸之');
            ('step 1');
            if (!result.bool) {
              player.loseToDiscardpile(trigger.result.card);
              player.draw();
            }
          },
        },
      },
    },
    dqzw_boss_activity_tianhai_Miss: {
      audio: 2,
      trigger: {
        global: 'phaseEnd',
      },
      forced: true,
      filter(event, player) {
        return !player.hasSkill('dqzw_boss_activity_tianhai_Miss_block');
      },
      content() {
        'step 0';
        var cardx = player.getCards('h', function (card) {
          return !card.hasGaintag('dqzw_boss_activity_tianhai_Miss');
        });
        if (cardx && cardx.length) {
          player.showCards(cardx);
          if (cardx.some((card) => card.suit != 'heart'))
            player.chooseCard('h', true, '重铸其中一张非♥️️牌', function (card) {
              return cardx.includes(card) && card.suit != 'heart';
            });
        }
        ('step 1');
        if (result.bool && result.cards) {
          player.loseToDiscardpile(result.cards);
          player.draw().gaintag = ['dqzw_boss_activity_tianhai_Miss'];
          event.finish();
        } else if (player.canMoveCard()) {
          player.moveCard().set('prompt', '是否移动场上的一张牌,并令【棠棣】于本轮失效？');
        } else event.finish();
        ('step 2');
        if (result.bool) {
          player.addTempSkill('dqzw_boss_activity_tianhai_Miss_block', 'roundStart');
        }
      },
      subSkill: {
        block: {
          chalotte: true,
          mark: true,
          marktext: '思',
          intro: {
            name: '棠棣',
            content: '本轮【棠棣】失效',
          },
        },
      },
    },
    dqzw_boss_activity_tianhai_Quill: {
      audio: 2,
      enable: 'phaseUse',
      filter(event, player) {
        if (!player.countCards('h')) return false;
        return !player.isLinked();
      },
      content() {
        player.link();
        player.useSkill('strl_bifa', false);
      },
    },
  },
  translate: {
    dqzw_boss_foyege: '佛耶戈',
    dqzw_boss_junjue: '君决',
    dqzw_boss_junjue_info: '锁定技,一名其他角色于你回合内死亡时,若你未对存活角色发动过『君决』,其改为回复体力至上限,且其此后回合由你操控;准备阶段,你可以令其死亡,本回合发动『贯灵』不计次数.',
    dqzw_boss_guanling: '贯灵',
    dqzw_boss_guanling_info: '出牌阶段限一次,你可以展示一名其他角色一张牌;若之牌名字数不小于其体力值,你将之置于牌堆顶并对其造成1点伤害;否则重铸此牌.',
    dqzw_boss_activity_tianhai_huangquan: '黄泉',
    dqzw_boss_activity_tianhai_shenzhui: '神坠',
    dqzw_boss_activity_tianhai_shenzhui_info: '每回合限三次,体力值等于你的角色使用非红色即时牌后,你可将此牌或其一张手牌置为<死>;若如此做,你可消耗此技能剩余发动次数,以使用等量张<死>.',
    dqzw_boss_activity_tianhai_qichuan: '泣川',
    dqzw_boss_activity_tianhai_qichuan_info: '锁定技,你每回合首次使用伤害牌时,以弃牌堆中前四张【杀】为实体牌;若颜色均一,则此牌致命.',
    dqzw_boss_activity_tianhai_zhigengniao: '知更鸟',
    dqzw_boss_activity_tianhai_aikuan: '哀宽',
    dqzw_boss_activity_tianhai_aikuan_info: '一名角色弃置至少两张花色均相同的牌后,其可以令你执行<悲歌>中对应花色项,你可交给其至多两张牌.',
    dqzw_boss_activity_tianhai_yueyu: '越羽',
    dqzw_boss_activity_tianhai_yueyu_info: '锁定技,弃牌阶段开始时,所有角色依次:令你摸一张牌,并选择此牌是否能于此阶段被你弃置.',
    dqzw_boss_activity_tianhai_shajin: '砂金',
    dqzw_boss_activity_tianhai_yinyuan: '饮渊',
    dqzw_boss_activity_tianhai_yinyuan_info: '你成为♠️️即时牌的目标后,你可令此牌改为结算你手牌数次(至少为1至多为7),且你抵消此牌的方式改为:进行一次闪电判定,若结果为基本牌,你抵消之并获得判定牌.',
    dqzw_boss_activity_tianhai_tongtu: '通途',
    dqzw_boss_activity_tianhai_tongtu_info: '每回合限一次,你判定时,可摸两张牌或对其他角色使用一张牌,此次判定花色视为与本回合最后被使用的牌相同.',
    dqzw_boss_activity_tianhai_Fuxuan: '符玄',
    dqzw_boss_activity_tianhai_Predict: '观歙',
    dqzw_boss_activity_tianhai_Predict_info: '『星舟占算』<br><li>轮次开始时,你可以<font color=#FFA9D1>观星3</font>;若如此做,本轮内你使用第X张牌结算后,当前回合角色视为使用【洞烛先机】(X为你因此置于牌堆底牌的数量).',
    dqzw_boss_activity_tianhai_Upstare: '会览',
    dqzw_boss_activity_tianhai_Upstare_info: '『登瞰穷极』<br><li>每轮限一次,你可以摸两张牌或弃置两张牌,视为使用【无懈可击】;若你的手牌数为场上最值,你将之调整为另一最值.',
    dqzw_boss_activity_tianhai_Sampo: '桑博',
    dqzw_boss_activity_tianhai_Business: '贸逆',
    dqzw_boss_activity_tianhai_Business_info: '『待沽居奇』<br><li>一名角色的出牌阶段限一次,其可以将一张牌置于牌堆底并令你摸两张牌;若你的手牌数全场最多,你需将至少两张牌当作【杀】对由其指定的一名角色使用.',
    dqzw_boss_activity_tianhai_Business2: '贸逆',
    dqzw_boss_activity_tianhai_Caprices: '暮翻',
    dqzw_boss_activity_tianhai_Caprices_info: '『焚轮朝暮』<br><li>你使用【杀】指定唯一目标后,可令其所有邻家成为额外目标;若如此做,首名响应此【杀】的角色获得之.',
    dqzw_boss_activity_tianhai_Xueyi: '雪衣',
    dqzw_boss_activity_tianhai_Live: '燕归',
    dqzw_boss_activity_tianhai_Live_info: '『昔我往矣』<br><li>锁定技,你的手牌上限为空装备栏数;你弃置过牌的弃牌阶段结束时,可以重置场上唯一横置的角色并令其摸两张牌.',
    dqzw_boss_activity_tianhai_Pierc: '拘寒',
    dqzw_boss_activity_tianhai_Pierc_info: '『破魍锥锋』<br><li>准备阶段,你可以对自己发动『擅专』,获得场上一张装备牌且之于本回合视为雷【杀】;你的判定牌生效后,你需将之当作【铁索连环】使用或重铸.',
    dqzw_boss_activity_tianhai_Hanya: '寒鸦',
    dqzw_boss_activity_tianhai_Miss: '棠棣',
    dqzw_boss_activity_tianhai_Miss_info: '『今我来思』<br><li>锁定技,每回合结束时,你展示不因此获得的手牌并重铸其中一张非♥️️牌;若上述操作未均被执行,你可以移动场上一张牌并令此技能于本轮失效.',
    dqzw_boss_activity_tianhai_Quill: '诛毫',
    dqzw_boss_activity_tianhai_Quill_info: '『忘川冥谶』<br><li>出牌阶段,你可以横置以发动『笔伐』,增加选项三:将移出游戏的牌当冰【杀】对你使用,本回合只能使用该花色的牌.',
  },
};
let str = 'ext:大权在握/audio/skill:',
  set = (info) => {
    if (!get.is.object(info)) return;
    let audio = info.audio;
    if (!audio) info.audio = str + 3;
    else if (typeof audio == 'number') info.audio = str + audio;
  };
for (let name in info.character) {
  let char = info.character[name];
  if (!char[4]) char[4] = [];
  char[4].push('dqzw_lock_character');
}
for (let name in info.skill) {
  let skill = info.skill[name];
  set(skill);
  if (skill.subSkill) for (let sub in skill.subSkill) set(skill.subSkill[sub]);
}
