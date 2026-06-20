+(function () {
  const { lib, game, ui, get, ai, _status } = window.hgmg;
  game.import('card', function () {
    const hgmgcard = {
      name: 'hgmgcard',
      connect: true,
      card: {
        lsyk_uiyi: {
          audio: true,
          fullskin: true,
          nature: ['thunder', 'fire', 'kami', 'ice'],
          type: 'basic',
          image: 'ext:恒梦/image/lsyk/sha.png',
          enable: true,
          usable: 1,
          updateUsable: 'phaseUse',
          global: 'icesha_skill',
          range(card, player, target) {
            return player.inRange(target);
          },
          selectTarget: 1,
          defaultYingbianEffect: 'add',
          filterTarget(card, player, target) {
            return player != target;
          },
          content() {
            const cards = [],
              list = [];
            let prename = 'sha';
            for (const i in lib.card) {
              if (get.type2(i) !== 'equip') continue;
              if (lib.card[i].mode && lib.card[i].mode.includes(get.mode()) === false) continue;
              if (lib.card[i].vanish || lib.card[i].destroy) continue;
              if (lib.card[i].destroy) continue;
              if (typeof filter == 'function' && !filter(i)) continue;
              if (lib.config.bannedcards.includes(i)) continue;
              if (!lib.translate[i + '_info']) continue;
              list.push(i);
            }
            prename = list.randomGet();
            const card = game.createCard(prename, 'none');
            if (card) cards.push(card);
            player
              .when({ player: 'shaHit' })
              .vars({ cards: cards })
              .then(() => {
                if (trigger.card.uiyi) player.gain(cards, 'gain');
              });
            player.useCard({ name: 'sha', uiyi: true }, target, false);
          },
          ai: {
            yingbian(card, player, targets, viewer) {
              if (get.attitude(viewer, player) <= 0) return 0;
              var base = 0,
                hit = false;
              if (get.cardtag(card, 'yingbian_hit')) {
                hit = true;
                if (
                  targets.some((target) => {
                    return (
                      target.mayHaveShan(
                        viewer,
                        'use',
                        target.getCards('h', (i) => {
                          return i.hasGaintag('sha_notshan');
                        })
                      ) &&
                      get.attitude(viewer, target) < 0 &&
                      get.damageEffect(target, player, viewer, get.natureList(card)) > 0
                    );
                  })
                )
                  base += 5;
              }
              if (get.cardtag(card, 'yingbian_add')) {
                if (
                  game.hasPlayer(function (current) {
                    return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                  })
                )
                  base += 5;
              }
              if (get.cardtag(card, 'yingbian_damage')) {
                if (
                  targets.some((target) => {
                    return (
                      get.attitude(player, target) < 0 &&
                      (hit ||
                        !target.mayHaveShan(
                          viewer,
                          'use',
                          target.getCards('h', (i) => {
                            return i.hasGaintag('sha_notshan');
                          })
                        ) ||
                        player.hasSkillTag(
                          'directHit_ai',
                          true,
                          {
                            target: target,
                            card: card,
                          },
                          true
                        )) &&
                      !target.hasSkillTag('filterDamage', null, {
                        player: player,
                        card: card,
                        jiu: true,
                      })
                    );
                  })
                )
                  base += 5;
              }
              return base;
            },
            canLink(player, target, card) {
              if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
              if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
              return true;
            },
            basic: {
              useful: [5, 3, 1],
              value: [5, 3, 1],
            },
            order(item, player) {
              let res = 3.2;
              if (player.hasSkillTag('presha', true, null, true)) res = 10;
              if (typeof item !== 'object' || !game.hasNature(item, 'linked') || game.countPlayer((cur) => cur.isLinked()) < 2) return res;
              let uv = player.getUseValue(item, true);
              if (uv <= 0) return res;
              let temp = player.getUseValue('sha', true) - uv;
              if (temp < 0) return res + 0.15;
              if (temp > 0) return res - 0.15;
              return res;
            },
            result: {
              target(player, target, card, isLink) {
                let eff = -1.5,
                  odds = 1.35,
                  num = 1;
                if (isLink) {
                  let cache = _status.event.getTempCache('sha_result', 'eff');
                  if (typeof cache !== 'object' || cache.card !== ai.getCacheKey(card, true)) return eff;
                  if (cache.odds < 1.35 && cache.bool) return 1.35 * cache.eff;
                  return cache.odds * cache.eff;
                }
                if (
                  player.hasSkill('jiu') ||
                  player.hasSkillTag('damageBonus', true, {
                    target: target,
                    card: card,
                  })
                ) {
                  if (
                    target.hasSkillTag('filterDamage', null, {
                      player: player,
                      card: card,
                      jiu: true,
                    })
                  )
                    eff = -0.5;
                  else {
                    num = 2;
                    if (get.attitude(player, target) > 0) eff = -7;
                    else eff = -4;
                  }
                }
                if (
                  !player.hasSkillTag(
                    'directHit_ai',
                    true,
                    {
                      target: target,
                      card: card,
                    },
                    true
                  )
                )
                  odds -=
                    0.7 *
                    target.mayHaveShan(
                      player,
                      'use',
                      target.getCards('h', (i) => {
                        return i.hasGaintag('sha_notshan');
                      }),
                      'odds'
                    );
                _status.event.putTempCache('sha_result', 'eff', {
                  bool: target.hp > num && get.attitude(player, target) > 0,
                  card: ai.getCacheKey(card, true),
                  eff: eff,
                  odds: odds,
                });
                return odds * eff;
              },
            },
            tag: {
              respond: 1,
              respondShan: 1,
              damage(card) {
                if (game.hasNature(card, 'poison')) return;
                return 1;
              },
              natureDamage(card) {
                if (game.hasNature(card, 'linked')) return 1;
              },
              fireDamage(card, nature) {
                if (game.hasNature(card, 'fire')) return 1;
              },
              thunderDamage(card, nature) {
                if (game.hasNature(card, 'thunder')) return 1;
              },
              poisonDamage(card, nature) {
                if (game.hasNature(card, 'poison')) return 1;
              },
            },
          },
        },
        lsyk_uier: {
          audio: true,
          fullskin: true,
          nature: ['thunder', 'fire', 'kami', 'ice'],
          type: 'basic',
          image: 'ext:恒梦/image/lsyk/sha.png',
          enable: true,
          usable: 1,
          updateUsable: 'phaseUse',
          global: 'icesha_skill',
          range(card, player, target) {
            return player.inRange(target);
          },
          selectTarget: 1,
          defaultYingbianEffect: 'add',
          filterTarget(card, player, target) {
            return player != target;
          },
          content() {
            'step 0';
            player.useCard({ name: 'sha', uisj: true }, target, false);
            ('step 1');
            player.when({ player: 'useCard' }).then(() => {
              trigger.effectCount++;
              game.log(trigger.card, '额外结算一次');
            });
          },
          ai: {
            yingbian(card, player, targets, viewer) {
              if (get.attitude(viewer, player) <= 0) return 0;
              var base = 0,
                hit = false;
              if (get.cardtag(card, 'yingbian_hit')) {
                hit = true;
                if (
                  targets.some((target) => {
                    return (
                      target.mayHaveShan(
                        viewer,
                        'use',
                        target.getCards('h', (i) => {
                          return i.hasGaintag('sha_notshan');
                        })
                      ) &&
                      get.attitude(viewer, target) < 0 &&
                      get.damageEffect(target, player, viewer, get.natureList(card)) > 0
                    );
                  })
                )
                  base += 5;
              }
              if (get.cardtag(card, 'yingbian_add')) {
                if (
                  game.hasPlayer(function (current) {
                    return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                  })
                )
                  base += 5;
              }
              if (get.cardtag(card, 'yingbian_damage')) {
                if (
                  targets.some((target) => {
                    return (
                      get.attitude(player, target) < 0 &&
                      (hit ||
                        !target.mayHaveShan(
                          viewer,
                          'use',
                          target.getCards('h', (i) => {
                            return i.hasGaintag('sha_notshan');
                          })
                        ) ||
                        player.hasSkillTag(
                          'directHit_ai',
                          true,
                          {
                            target: target,
                            card: card,
                          },
                          true
                        )) &&
                      !target.hasSkillTag('filterDamage', null, {
                        player: player,
                        card: card,
                        jiu: true,
                      })
                    );
                  })
                )
                  base += 5;
              }
              return base;
            },
            canLink(player, target, card) {
              if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
              if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
              return true;
            },
            basic: {
              useful: [5, 3, 1],
              value: [5, 3, 1],
            },
            order(item, player) {
              let res = 3.2;
              if (player.hasSkillTag('presha', true, null, true)) res = 10;
              if (typeof item !== 'object' || !game.hasNature(item, 'linked') || game.countPlayer((cur) => cur.isLinked()) < 2) return res;
              let uv = player.getUseValue(item, true);
              if (uv <= 0) return res;
              let temp = player.getUseValue('sha', true) - uv;
              if (temp < 0) return res + 0.15;
              if (temp > 0) return res - 0.15;
              return res;
            },
            result: {
              target(player, target, card, isLink) {
                let eff = -1.5,
                  odds = 1.35,
                  num = 1;
                if (isLink) {
                  let cache = _status.event.getTempCache('sha_result', 'eff');
                  if (typeof cache !== 'object' || cache.card !== ai.getCacheKey(card, true)) return eff;
                  if (cache.odds < 1.35 && cache.bool) return 1.35 * cache.eff;
                  return cache.odds * cache.eff;
                }
                if (
                  player.hasSkill('jiu') ||
                  player.hasSkillTag('damageBonus', true, {
                    target: target,
                    card: card,
                  })
                ) {
                  if (
                    target.hasSkillTag('filterDamage', null, {
                      player: player,
                      card: card,
                      jiu: true,
                    })
                  )
                    eff = -0.5;
                  else {
                    num = 2;
                    if (get.attitude(player, target) > 0) eff = -7;
                    else eff = -4;
                  }
                }
                if (
                  !player.hasSkillTag(
                    'directHit_ai',
                    true,
                    {
                      target: target,
                      card: card,
                    },
                    true
                  )
                )
                  odds -=
                    0.7 *
                    target.mayHaveShan(
                      player,
                      'use',
                      target.getCards('h', (i) => {
                        return i.hasGaintag('sha_notshan');
                      }),
                      'odds'
                    );
                _status.event.putTempCache('sha_result', 'eff', {
                  bool: target.hp > num && get.attitude(player, target) > 0,
                  card: ai.getCacheKey(card, true),
                  eff: eff,
                  odds: odds,
                });
                return odds * eff;
              },
            },
            tag: {
              respond: 1,
              respondShan: 1,
              damage(card) {
                if (game.hasNature(card, 'poison')) return;
                return 1;
              },
              natureDamage(card) {
                if (game.hasNature(card, 'linked')) return 1;
              },
              fireDamage(card, nature) {
                if (game.hasNature(card, 'fire')) return 1;
              },
              thunderDamage(card, nature) {
                if (game.hasNature(card, 'thunder')) return 1;
              },
              poisonDamage(card, nature) {
                if (game.hasNature(card, 'poison')) return 1;
              },
            },
          },
        },
        lsyk_uisj: {
          audio: true,
          fullskin: true,
          nature: ['thunder', 'fire', 'kami', 'ice'],
          type: 'basic',
          image: 'ext:恒梦/image/lsyk/sha.png',
          enable: true,
          usable: 1,
          updateUsable: 'phaseUse',
          global: 'icesha_skill',
          range(card, player, target) {
            return player.inRange(target);
          },
          selectTarget: 1,
          defaultYingbianEffect: 'add',
          filterTarget(card, player, target) {
            return player != target;
          },
          content() {
            player.addSkill('hxyzxkyuwuxk');
            player.useCard({ name: 'sha', uisj: true }, target, false);
          },
          ai: {
            yingbian(card, player, targets, viewer) {
              if (get.attitude(viewer, player) <= 0) return 0;
              var base = 0,
                hit = false;
              if (get.cardtag(card, 'yingbian_hit')) {
                hit = true;
                if (
                  targets.some((target) => {
                    return (
                      target.mayHaveShan(
                        viewer,
                        'use',
                        target.getCards('h', (i) => {
                          return i.hasGaintag('sha_notshan');
                        })
                      ) &&
                      get.attitude(viewer, target) < 0 &&
                      get.damageEffect(target, player, viewer, get.natureList(card)) > 0
                    );
                  })
                )
                  base += 5;
              }
              if (get.cardtag(card, 'yingbian_add')) {
                if (
                  game.hasPlayer(function (current) {
                    return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                  })
                )
                  base += 5;
              }
              if (get.cardtag(card, 'yingbian_damage')) {
                if (
                  targets.some((target) => {
                    return (
                      get.attitude(player, target) < 0 &&
                      (hit ||
                        !target.mayHaveShan(
                          viewer,
                          'use',
                          target.getCards('h', (i) => {
                            return i.hasGaintag('sha_notshan');
                          })
                        ) ||
                        player.hasSkillTag(
                          'directHit_ai',
                          true,
                          {
                            target: target,
                            card: card,
                          },
                          true
                        )) &&
                      !target.hasSkillTag('filterDamage', null, {
                        player: player,
                        card: card,
                        jiu: true,
                      })
                    );
                  })
                )
                  base += 5;
              }
              return base;
            },
            canLink(player, target, card) {
              if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
              if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
              return true;
            },
            basic: {
              useful: [5, 3, 1],
              value: [5, 3, 1],
            },
            order(item, player) {
              let res = 3.2;
              if (player.hasSkillTag('presha', true, null, true)) res = 10;
              if (typeof item !== 'object' || !game.hasNature(item, 'linked') || game.countPlayer((cur) => cur.isLinked()) < 2) return res;
              let uv = player.getUseValue(item, true);
              if (uv <= 0) return res;
              let temp = player.getUseValue('sha', true) - uv;
              if (temp < 0) return res + 0.15;
              if (temp > 0) return res - 0.15;
              return res;
            },
            result: {
              target(player, target, card, isLink) {
                let eff = -1.5,
                  odds = 1.35,
                  num = 1;
                if (isLink) {
                  let cache = _status.event.getTempCache('sha_result', 'eff');
                  if (typeof cache !== 'object' || cache.card !== ai.getCacheKey(card, true)) return eff;
                  if (cache.odds < 1.35 && cache.bool) return 1.35 * cache.eff;
                  return cache.odds * cache.eff;
                }
                if (
                  player.hasSkill('jiu') ||
                  player.hasSkillTag('damageBonus', true, {
                    target: target,
                    card: card,
                  })
                ) {
                  if (
                    target.hasSkillTag('filterDamage', null, {
                      player: player,
                      card: card,
                      jiu: true,
                    })
                  )
                    eff = -0.5;
                  else {
                    num = 2;
                    if (get.attitude(player, target) > 0) eff = -7;
                    else eff = -4;
                  }
                }
                if (
                  !player.hasSkillTag(
                    'directHit_ai',
                    true,
                    {
                      target: target,
                      card: card,
                    },
                    true
                  )
                )
                  odds -=
                    0.7 *
                    target.mayHaveShan(
                      player,
                      'use',
                      target.getCards('h', (i) => {
                        return i.hasGaintag('sha_notshan');
                      }),
                      'odds'
                    );
                _status.event.putTempCache('sha_result', 'eff', {
                  bool: target.hp > num && get.attitude(player, target) > 0,
                  card: ai.getCacheKey(card, true),
                  eff: eff,
                  odds: odds,
                });
                return odds * eff;
              },
            },
            tag: {
              respond: 1,
              respondShan: 1,
              damage(card) {
                if (game.hasNature(card, 'poison')) return;
                return 1;
              },
              natureDamage(card) {
                if (game.hasNature(card, 'linked')) return 1;
              },
              fireDamage(card, nature) {
                if (game.hasNature(card, 'fire')) return 1;
              },
              thunderDamage(card, nature) {
                if (game.hasNature(card, 'thunder')) return 1;
              },
              poisonDamage(card, nature) {
                if (game.hasNature(card, 'poison')) return 1;
              },
            },
          },
        },
        lsyk_uisi: {
          audio: true,
          fullskin: true,
          nature: ['thunder', 'fire', 'kami', 'ice'],
          type: 'basic',
          image: 'ext:恒梦/image/lsyk/sha.png',
          enable: true,
          usable: 1,
          updateUsable: 'phaseUse',
          global: 'icesha_skill',
          range(card, player, target) {
            return player.inRange(target);
          },
          selectTarget: 1,
          defaultYingbianEffect: 'add',
          filterTarget(card, player, target) {
            return player != target;
          },
          content() {
            'step 0';
            player.when({ player: 'shaDamage' }).then(() => {
              if (trigger.card.uisi && trigger.target.isAlive() && !trigger.target.hasSkill('bwjifw')) trigger.target.addSkill('bwjifw');
            });
            ('step 1');
            player.useCard({ name: 'sha', uisi: true }, target, false);
          },
          ai: {
            yingbian(card, player, targets, viewer) {
              if (get.attitude(viewer, player) <= 0) return 0;
              var base = 0,
                hit = false;
              if (get.cardtag(card, 'yingbian_hit')) {
                hit = true;
                if (
                  targets.some((target) => {
                    return (
                      target.mayHaveShan(
                        viewer,
                        'use',
                        target.getCards('h', (i) => {
                          return i.hasGaintag('sha_notshan');
                        })
                      ) &&
                      get.attitude(viewer, target) < 0 &&
                      get.damageEffect(target, player, viewer, get.natureList(card)) > 0
                    );
                  })
                )
                  base += 5;
              }
              if (get.cardtag(card, 'yingbian_add')) {
                if (
                  game.hasPlayer(function (current) {
                    return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                  })
                )
                  base += 5;
              }
              if (get.cardtag(card, 'yingbian_damage')) {
                if (
                  targets.some((target) => {
                    return (
                      get.attitude(player, target) < 0 &&
                      (hit ||
                        !target.mayHaveShan(
                          viewer,
                          'use',
                          target.getCards('h', (i) => {
                            return i.hasGaintag('sha_notshan');
                          })
                        ) ||
                        player.hasSkillTag(
                          'directHit_ai',
                          true,
                          {
                            target: target,
                            card: card,
                          },
                          true
                        )) &&
                      !target.hasSkillTag('filterDamage', null, {
                        player: player,
                        card: card,
                        jiu: true,
                      })
                    );
                  })
                )
                  base += 5;
              }
              return base;
            },
            canLink(player, target, card) {
              if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
              if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
              return true;
            },
            basic: {
              useful: [5, 3, 1],
              value: [5, 3, 1],
            },
            order(item, player) {
              let res = 3.2;
              if (player.hasSkillTag('presha', true, null, true)) res = 10;
              if (typeof item !== 'object' || !game.hasNature(item, 'linked') || game.countPlayer((cur) => cur.isLinked()) < 2) return res;
              let uv = player.getUseValue(item, true);
              if (uv <= 0) return res;
              let temp = player.getUseValue('sha', true) - uv;
              if (temp < 0) return res + 0.15;
              if (temp > 0) return res - 0.15;
              return res;
            },
            result: {
              target(player, target, card, isLink) {
                let eff = -1.5,
                  odds = 1.35,
                  num = 1;
                if (isLink) {
                  let cache = _status.event.getTempCache('sha_result', 'eff');
                  if (typeof cache !== 'object' || cache.card !== ai.getCacheKey(card, true)) return eff;
                  if (cache.odds < 1.35 && cache.bool) return 1.35 * cache.eff;
                  return cache.odds * cache.eff;
                }
                if (
                  player.hasSkill('jiu') ||
                  player.hasSkillTag('damageBonus', true, {
                    target: target,
                    card: card,
                  })
                ) {
                  if (
                    target.hasSkillTag('filterDamage', null, {
                      player: player,
                      card: card,
                      jiu: true,
                    })
                  )
                    eff = -0.5;
                  else {
                    num = 2;
                    if (get.attitude(player, target) > 0) eff = -7;
                    else eff = -4;
                  }
                }
                if (
                  !player.hasSkillTag(
                    'directHit_ai',
                    true,
                    {
                      target: target,
                      card: card,
                    },
                    true
                  )
                )
                  odds -=
                    0.7 *
                    target.mayHaveShan(
                      player,
                      'use',
                      target.getCards('h', (i) => {
                        return i.hasGaintag('sha_notshan');
                      }),
                      'odds'
                    );
                _status.event.putTempCache('sha_result', 'eff', {
                  bool: target.hp > num && get.attitude(player, target) > 0,
                  card: ai.getCacheKey(card, true),
                  eff: eff,
                  odds: odds,
                });
                return odds * eff;
              },
            },
            tag: {
              respond: 1,
              respondShan: 1,
              damage(card) {
                if (game.hasNature(card, 'poison')) return;
                return 1;
              },
              natureDamage(card) {
                if (game.hasNature(card, 'linked')) return 1;
              },
              fireDamage(card, nature) {
                if (game.hasNature(card, 'fire')) return 1;
              },
              thunderDamage(card, nature) {
                if (game.hasNature(card, 'thunder')) return 1;
              },
              poisonDamage(card, nature) {
                if (game.hasNature(card, 'poison')) return 1;
              },
            },
          },
        },
        yttr_hstc: {
          image: 'ext:恒梦/image/yttr/yttr_hstc.png',
          audio: true,
          fullskin: true,
          type: 'special_delay',
          noEffect: true,
          wuxieable: false,
          filterTarget(card, player, target) {
            return lib.filter.judge(card, player, target);
          },
          judge(card) {
            if (card.suit == 'heart') return 1;
            return -2;
          },
          judge2(result) {
            if (result.bool == false) return true;
            return false;
          },
          effect() {
            if (result.bool !== false) {
              player.skip('phaseUse');
            }
          },
          ai: {
            basic: {
              order(card, player) {
                return get.value(card, player);
              },
              useful(card, i) {
                let player = _status.event.player;
                if (_status.event.isPhaseUsing())
                  return game.hasPlayer((cur) => {
                    return cur !== player && lib.filter.judge(card, player, cur) && get.effect(cur, card, player, player) > 0;
                  })
                    ? 4.2
                    : 1;
              },
              value(card, player) {
                return 8;
              },
            },
            result: {
              ignoreStatus: true,
              player(player, target, card) {
                let jpgo = 0;
                const list = ['yttr_hstc', 'yttr_fhpm', 'yttr_mwhx', 'yttr_hwtc'];
                let suit = get.hxse[list.indexOf(card.name)];
                let wwxp = get.threaten(target, player) || 0,
                  tddu = get.attitude(player, target),
                  gp = game.players.sortBySeat(player.storage.yttrphase ? player.storage.yttrphase : player),
                  dhqm = gp.find((p) => p.hasCard((c) => list.includes(get.kapdmkzi(c)), 'j')),
                  dhqmytqi = [];
                if (dhqm) {
                  dhqmytqi = dhqm.getCards('j', (c) => list.includes(get.kapdmkzi(c)));
                } else dhqm = player;
                let mubnytqi = target.getCards('j', (c) => list.includes(get.kapdmkzi(c))),
                  mlen = mubnytqi.length,
                  the = target.getCards('h', (c) => {
                    return c.suit == suit && target.hasUseTarget(c);
                  }),
                  th = the.length,
                  ch = target.countCards('h');
                l(dhqm.name);
                const chen = Array.from(dhqmytqi, ({ suit }) => suit);
                let tian = dhqm
                  .getCards('h', (c) => chen.includes(c.suit))
                  .slice()
                  .sort((a, b) => get.order(b, dhqm) - get.order(a, dhqm));
                let tiansuit = Array.from(tian, ({ suit }) => suit).unique();
                dhqmytqi.sort((a, b) => tiansuit.indexOf(a.suit) - tiansuit.indexOf(b.suit));
                const dhqmww = dhqmytqi.length ? dhqmytqi[0].name : card.name;
                const xxyiww = list.hzmm(dhqmww);
                jpgo = (xxyiww === card.name ? tddu / 6 : 1) * (th + 1) + wwxp / 4;
                let ukjm = 0;
                if (target === _status.currentPhase) ukjm += 2;
                if (mubnytqi && mlen) ukjm += 4 * mlen;
                let juli = (gp.indexOf(target) + gp.length) / gp.length;
                return Math.max(0.1, jpgo * 4 - ukjm - juli);
              },
            },
          },
          selectTarget: 1,
          enable: true,
          content() {
            if (
              !card?.cards.some((card) => {
                return get.position(card, true) !== 'o';
              })
            ) {
              target.addJudge(card, cards);
            }
          },
          allowMultiple: false,
        },
        yttr_fhpm: {
          image: 'ext:恒梦/image/yttr/yttr_fhpm.png',
          audio: true,
          fullskin: true,
          type: 'special_delay',
          noEffect: true,
          wuxieable: false,
          filterTarget(card, player, target) {
            return lib.filter.judge(card, player, target);
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
            if (result.bool !== false) {
              player.skip('phaseUse');
            }
          },
          ai: {
            basic: {
              order(card, player) {
                return get.value(card, player);
              },
              useful(card, i) {
                let player = _status.event.player;
                if (_status.event.isPhaseUsing())
                  return game.hasPlayer((cur) => {
                    return cur !== player && lib.filter.judge(card, player, cur) && get.effect(cur, card, player, player) > 0;
                  })
                    ? 4.2
                    : 1;
              },
              value(card, player) {
                return 8;
              },
            },
            result: {
              ignoreStatus: true,
              player(player, target, card) {
                return lib.card.yttr_hstc.ai.result.player.apply(this, arguments);
              },
            },
          },
          selectTarget: 1,
          enable: true,
          content() {
            if (
              !card?.cards.some((card) => {
                return get.position(card, true) !== 'o';
              })
            ) {
              target.addJudge(card, cards);
            }
          },
          allowMultiple: false,
        },
        yttr_mwhx: {
          image: 'ext:恒梦/image/yttr/yttr_mwhx.png',
          audio: true,
          fullskin: true,
          type: 'special_delay',
          noEffect: true,
          wuxieable: false,
          filterTarget(card, player, target) {
            return lib.filter.judge(card, player, target);
          },
          judge(card) {
            if (card.suit == 'club') return 1;
            return -2;
          },
          judge2(result) {
            if (result.bool == false) return true;
            return false;
          },
          effect() {
            if (result.bool !== false) {
              player.skip('phaseUse');
            }
          },
          ai: {
            basic: {
              order(card, player) {
                return get.value(card, player);
              },
              useful(card, i) {
                let player = _status.event.player;
                if (_status.event.isPhaseUsing())
                  return game.hasPlayer((cur) => {
                    return cur !== player && lib.filter.judge(card, player, cur) && get.effect(cur, card, player, player) > 0;
                  })
                    ? 4.2
                    : 1;
              },
              value(card, player) {
                return 8;
              },
            },
            result: {
              ignoreStatus: true,
              player(player, target, card) {
                return lib.card.yttr_hstc.ai.result.player.apply(this, arguments);
              },
            },
          },
          selectTarget: 1,
          enable: true,
          content() {
            if (
              !card?.cards.some((card) => {
                return get.position(card, true) !== 'o';
              })
            ) {
              target.addJudge(card, cards);
            }
          },
          allowMultiple: false,
        },
        yttr_hwtc: {
          image: 'ext:恒梦/image/yttr/yttr_hwtc.png',
          audio: true,
          fullskin: true,
          type: 'special_delay',
          noEffect: true,
          wuxieable: false,
          filterTarget(card, player, target) {
            return lib.filter.judge(card, player, target);
          },
          judge(card) {
            if (card.suit == 'spade') return 1;
            return -2;
          },
          judge2(result) {
            if (result.bool == false) return true;
            return false;
          },
          effect() {
            if (result.bool !== false) {
              player.skip('phaseUse');
            }
          },
          ai: {
            basic: {
              order(card, player) {
                return get.value(card, player);
              },
              useful(card, i) {
                let player = _status.event.player;
                if (_status.event.isPhaseUsing())
                  return game.hasPlayer((cur) => {
                    return cur !== player && lib.filter.judge(card, player, cur) && get.effect(cur, card, player, player) > 0;
                  })
                    ? 4.2
                    : 1;
              },
              value(card, player) {
                return 8;
              },
            },
            result: {
              ignoreStatus: true,
              player(player, target, card) {
                return lib.card.yttr_hstc.ai.result.player.apply(this, arguments);
              },
            },
          },
          selectTarget: 1,
          enable: true,
          content() {
            if (
              !card?.cards.some((card) => {
                return get.position(card, true) !== 'o';
              })
            ) {
              target.addJudge(card, cards);
            }
          },
          allowMultiple: false,
        },
        vumgmwmg: {
          image: 'ext:恒梦/image/vumg/vumgmwmg.jpg',
          type: 'trick',
          enable(card, player) {
            return player.hp < player.maxHp;
          },
          selectTarget: -1,
          toself: true,
          global: ['vumgmwmg1'],
          ai: {
            basic: {
              order(card, player) {
                if (player.hasSkillTag('pretao')) return 9;
                return 2;
              },
              useful(card, i) {
                let player = _status.event.player;
                if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return 2 / (1 + i);
                let fs = game.filterPlayer((current) => {
                  return get.attitude(player, current) > 0 && current.hp <= 2;
                }),
                  damaged = 0,
                  needs = 0;
                fs.forEach((f) => {
                  if (f.hp > 3 || !lib.filter.cardSavable(card, player, f)) return;
                  if (f.hp > 1) damaged++;
                  else needs++;
                });
                if (needs && damaged) return 5 * needs + 3 * damaged;
                if (needs + damaged > 1 || player.hasSkillTag('maixie')) return 8;
                if (player.hp / player.maxHp < 0.7) return 7 + Math.abs(player.hp / player.maxHp - 0.5);
                if (needs) return 7;
                if (damaged) return Math.max(3, 7.8 - i);
                return Math.max(1, 7.2 - i);
              },
              value(card, player) {
                let fs = game.filterPlayer((current) => {
                  return get.attitude(_status.event.player, current) > 0;
                }),
                  damaged = 0,
                  needs = 0;
                fs.forEach((f) => {
                  if (!player.canUse('tao', f)) return;
                  if (f.hp <= 1) needs++;
                  else if (f.hp == 2) damaged++;
                });
                if ((needs && damaged) || player.hasSkillTag('maixie')) return Math.max(9, 5 * needs + 3 * damaged);
                if (needs || damaged > 1) return 8;
                if (damaged) return 7.5;
                return Math.max(5, 9.2 - player.hp);
              },
            },
            result: {
              target(player, target) {
                if (target.hasSkillTag('maixie')) return 3;
                return 2;
              },
            },
            tag: {
              recover: 1,
            },
          },
          filterTarget(card, player, target) {
            if (!_status.currentPhase || _status.currentPhase !== player) return false;
            return target == player;
          },
          modTarget(card, player, target) {
            return target.hp < target.maxHp;
          },
          content() {
            player.recover();
          },
        },
        vumgeemg: {
          image: 'ext:恒梦/image/vumg/vumgeemg.jpg',
          type: 'trick',
          selectTarget: -1,
          toself: true,
          ai: {
            value: -5,
            useful: 6,
            result: {
              player(player, target) {
                return -1;
              },
            },
            order: 7.5,
          },
          global: ['vumgeemg1', 'vumgeemg2'],
          filterTarget(card, player, target) {
            return target == player;
          },
          modTarget: true,
          content() {
          },
        },
        cvlm_1: {
          image: 'ext:恒梦/image/bahl/cvlm_1.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -3,
          },
          skills: ['vjlu'],
          ai: {
            order: 15,
            equipValue(card, player) {
              if (player.countCards('h') < 2) return 0;
              if (player.countCards('h', 'cvlm_1')) return 12;
              if (player.getStat().card.sha >= 2) return 1;
              return 3;
            },
            basic: {
              equipValue: 6,
              order: 1,
              useful: 2,
              value: 1,
            },
            result: {
              target(player, target, card) {
                return get.equipResult(player, target, card.name);
              },
            },
          },
        },
        cvlm_2: {
          image: 'ext:恒梦/image/bahl/cvlm_2.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -3,
          },
          skills: ['tdee'],
          ai: {
            order: 15,
            equipValue(card, player) {
              if (player.countCards('h') < 2) return 0;
              if (player.countCards('h', 'cvlm_2')) return 12;
              if (player.getStat().card.sha >= 2) return 1;
              return 3;
            },
            basic: {
              equipValue: 6,
              order: 1,
              useful: 2,
              value: 1,
            },
            result: {
              target(player, target, card) {
                return get.equipResult(player, target, card.name);
              },
            },
          },
        },
        cvlm_3: {
          image: 'ext:恒梦/image/bahl/cvlm_3.png',
          fullskin: true,
          type: 'equip',
          distance: {
            attackFrom: -3,
          },
          subtype: 'equip1',
          skills: ['lsyr'],
          ai: {
            order: 15,
            equipValue(card, player) {
              if (player.countCards('h') < 2) return 0;
              if (player.countCards('h', 'cvlm_5')) return 12;
              if (player.getStat().card.sha >= 2) return 1;
              return 3;
            },
            basic: {
              equipValue: 6,
              order: 1,
              useful: 2,
              value: 1,
            },
            result: {
              target(player, target, card) {
                return get.equipResult(player, target, card.name);
              },
            },
          },
        },
        cvlm_4: {
          image: 'ext:恒梦/image/bahl/cvlm_4.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -3,
          },
          skills: ['yuih'],
          ai: {
            order: 15,
            equipValue(card, player) {
              if (player.countCards('h') < 2) return 0;
              if (player.countCards('h', 'cvlm_4')) return 12;
              if (player.getStat().card.sha >= 2) return 1;
              return 3;
            },
            basic: {
              equipValue: 6,
              order: 1,
              useful: 2,
              value: 1,
            },
            result: {
              target(player, target, card) {
                return get.equipResult(player, target, card.name);
              },
            },
          },
        },
        cvlm_5: {
          image: 'ext:恒梦/image/bahl/cvlm_5.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -3,
          },
          skills: ['juqt'],
          ai: {
            order: 15,
            equipValue(card, player) {
              if (player.countCards('h') < 2) return 0;
              if (player.countCards('h', 'cvlm_5')) return 12;
              if (player.getStat().card.sha >= 2) return 1;
              return 3;
            },
            basic: {
              equipValue: 6,
              order: 1,
              useful: 2,
              value: 1,
            },
            result: {
              target(player, target, card) {
                return get.equipResult(player, target, card.name);
              },
            },
          },
        },
        cvlm_6: {
          image: 'ext:恒梦/image/bahl/cvlm_6.png',
          fullskin: true,
          type: 'equip',
          distance: {
            attackFrom: -3,
          },
          subtype: 'equip1',
          loseDelay: false,
          skills: ['gsbu'],
          ai: {
            order: 15,
            equipValue(card, player) {
              if (player.countCards('h') < 2) return 0;
              if (player.countCards('h', 'cvlm_6')) return 12;
              if (player.getStat().card.sha >= 2) return 1;
              return 3;
            },
            basic: {
              equipValue: 6,
              order: 1,
              useful: 2,
              value: 1,
            },
            result: {
              target(player, target, card) {
                return get.equipResult(player, target, card.name);
              },
            },
          },
        },
        cvlm_7: {
          image: 'ext:恒梦/image/bahl/cvlm_7.png',
          fullskin: true,
          type: 'equip',
          distance: {
            attackFrom: -3,
          },
          subtype: 'equip1',
          skills: ['iyjy'],
          ai: {
            order: 15,
            equipValue(card, player) {
              if (player.countCards('h') < 2) return 0;
              if (player.countCards('h', 'cvlm_7')) return 12;
              if (player.getStat().card.sha >= 2) return 1;
              return 3;
            },
            basic: {
              equipValue: 6,
              order: 1,
              useful: 2,
              value: 1,
            },
            result: {
              target(player, target, card) {
                return get.equipResult(player, target, card.name);
              },
            },
          },
        },
        cvlm_8: {
          image: 'ext:恒梦/image/bahl/cvlm_8.png',
          fullskin: true,
          distance: {
            attackFrom: -3,
          },
          type: 'equip',
          subtype: 'equip1',
          skills: ['igyk'],
          ai: {
            order: 15,
            equipValue(card, player) {
              if (player.countCards('h') < 2) return 0;
              if (player.countCards('h', 'cvlm_8')) return 12;
              if (player.getStat().card.sha >= 2) return 1;
              return 3;
            },
            basic: {
              equipValue: 6,
              order: 1,
              useful: 2,
              value: 1,
            },
            result: {
              target(player, target, card) {
                return get.equipResult(player, target, card.name);
              },
            },
          },
        },
        dyui_1: {
          fullskin: true,
        },
        dyui_2: {
          fullskin: true,
        },
        dyui_3: {
          fullskin: true,
        },
        dyui_4: {
          fullskin: true,
        },
        dyui_5: {
          fullskin: true,
        },
      },
      skill: {
        vjlu: {
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha') return num + 1;
            },
          },
          group: 'vjlu1',
        },
        vjlu1: {
          logTarget: 'player',
          equipSkill: true,
          audio: 'ext:恒梦/audio/cards:2',
          trigger: {
            source: 'damageBegin2',
          },
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          content() {
            trigger.num++;
            trigger.player.next.damage('nocard');
            trigger.player.previous.damage('nocard');
          },
          ai: {
            effect: {
              player(card, player, target, current) {
                if (
                  card.name == 'sha' &&
                  !target.hasSkillTag('filterDamage', null, {
                    player: player,
                    card: card,
                  })
                ) {
                  let uh = get.damageEffect(target.previous, player, player),
                    xx = get.damageEffect(target.next, player, player);
                  return [1, uh + xx, 1, -2];
                }
              },
            },
          },
        },
        tdee: {
          equipSkill: true,
          group: 'tdee1',
        },
        tdee1: {
          equipSkill: true,
          audio: 'ext:恒梦/audio/cards:2',
          trigger: {
            source: 'damageBegin1',
          },
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          async content(event, trigger, player) {
            let cards = game.cardsGotoOrdering(get.cards(3)).cards;
            player.showCards(cards, get.translation(player) + '发动了【泰阿】');
            game.asyncDelay(2);
            let types = Array.from(new Set(cards.map((i) => get.type2(i)))).unique();
            trigger.num = types.length;
            if (cards && types.length == 3) player.gain(cards, 'gain2');
          },
          ai: {
            effect: {
              player(card, player, target, current) {
                if (
                  card.name == 'sha' &&
                  !target.hasSkillTag('filterDamage', null, {
                    player: player,
                    card: card,
                  })
                )
                  return [1, 1, 1, -3];
              },
            },
          },
        },
        lsyr: {
          audio: 'ext:恒梦/audio/cards:2',
          trigger: { player: 'useCardToPlayered' },
          forced: true,
          equipSkill: true,
          filter(event, player) {
            return event.card && event.card.name == 'sha' && !player.storage.lsyr;
          },
          async content(event, trigger, player) {
            let cards = get.cards(7);
            player.storage.lsyr = cards;
            game.cardsGotoOrdering(cards);
            player.showCards(cards, get.translation(player) + '发动了【七星龙渊】');
            let cards2 = player.storage.lsyr.filter(function (i) {
              return player.hasUseTarget(i);
            });
            while (cards2.length) {
              const result = await player
                .chooseButton(['是否使用其中一张牌？', cards])
                .set('filterButton', function (button) {
                  return player.hasUseTarget(button.link);
                })//QQQ
                .set('ai', function (button) {
                  let card = button.link;
                  if (card.name == 'wuzhong' || card.name == 'shunshou' || card.name == 'wugu' || card.name == 'yiyi') return 30;
                  else {
                    return player.getUseValue(card);
                  }
                })
                .forResult();
              if (!result.bool) break;
              let card = result.links[0];
              await player.chooseUseTarget(true, card, false).set('filterTarget', function (card, player, target) {
                return [player, trigger.target].includes(target);
              });
              player.storage.lsyr.remove(card);
              cards2 = player.storage.lsyr.filter(function (i) {
                return player.hasUseTarget(i);
              });
            }
            const loses = player.storage.lsyr;
            player.loseToDiscardpile(loses);
          },
        },
        yuih: {
          equipSkill: true,
          group: 'yuih1',
        },
        yuih1: {
          equipSkill: true,
          audio: 'ext:恒梦/audio/cards:2',
          trigger: {
            source: 'damageBegin2',
          },
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          check(event, player) {
            if (get.attitude(player, event.player) > -2) return false;
            if (player.hp > 2) return true;
            if (player.hp == 2 && event.player.hp < 3) return false;
            return player.hp > 1;
          },
          content() {
            player.loseHp();
            const num = trigger.player.hp - trigger.num - 1;
            trigger.num = trigger.player.hp;
            trigger.player
              .when('damageEnd')
              .filter((evt) => evt === trigger)
              .vars({ num })
              .then(() => {
                trigger.player.recover(num);
              });
          },
          ai: {
            effect: {
              player(card, player, target, current) {
                if (
                  card.name == 'sha' &&
                  !target.hasSkillTag('filterDamage', null, {
                    player: player,
                    card: card,
                  })
                ) {
                  if (!target.countCards('h', (i) => ['tao', 'jiu'].includes(i.name))) return [1, 0, 1, -2 * target.hp - 2];
                }
              },
            },
          },
        },
        juqt: {
          audio: 'ext:恒梦/audio/cards:2',
          trigger: { player: 'useCardToBefore' },
          forced: true,
          equipSkill: true,
          mod: {
            selectTarget(card, player, range) {
              if (range[0] != 1 || range[1] != 1) return;
              let range2 = get.select(get.info(card).selectTarget);
              if (range2[0] != 1 && range2[1] != 1) return;
              if (card.name == 'sha' || get.type(card) == 'trick') range[1] = Infinity;
            },
          },
          filter(event, player) {
            if (event.targets.length <= 1) return false;
            if (event.card.name == 'sha') return true;
            else if (get.type(event.card) == 'trick') {
              let range = get.select(get.info(event.card).selectTarget);
              if (range[0] == 1 && range[1] == 1) return true;
            }
            return false;
          },
          content() {
            if (Math.random() < trigger.targets.length / 10) {
              trigger.target.popup('失误');
              trigger.cancel();
            }
          },
        },
        gsbu: {
          equipSkill: true,
          forced: true,
          group: 'gsbu_1',
          audio: 'ext:恒梦/audio/cards:2',
          trigger: {
            source: 'damageSource',
          },
          content() {
            if (!trigger.player.hasSkill('gsbu2')) trigger.player.addSkill('gsbu2');
          },
          subSkill: {
            1: {
              trigger: {
                source: 'damageBegin1',
              },
              forced: true,
              filter(event, player) {
                return true;
              },
              content() {
                trigger.nature = 'fire';
              },
              ai: {
                presha: true,
              },
            },
          },
        },
        gsbu2: {
          trigger: { player: 'damageBegin3' },
          filter(event, player) {
            if (event.nature == 'fire') return true;
            return false;
          },
          equipSkill: true,
          marktext: '风',
          mark: true,
          intro: {
            name: '狂风',
          },
          forced: true,
          content() {
            trigger.num++;
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (get.tag(card, 'fireDamage')) return 1.5;
              },
            },
          },
          group: 'gsbu2_destroy',
          subSkill: {
            destroy: {
              trigger: {
                player: 'dying',
              },
              forced: true,
              equipSkill: true,
              content() {
                player.removeSkill('gsbu2');
              },
            },
          },
        },
        iyjy: {
          group: 'iyjy_one',
          equipSkill: true,
          audio: 'ext:恒梦/audio/cards:2',
          trigger: {
            player: 'useCardToPlayered',
          },
          forced: true,
          filter(event, player) {
            return event.target != event.player && (event.card.name == 'sha' || get.type(event.card) == 'trick');
          },
          content() {
            let target = trigger.target;
            target.addTempSkill('iyjy2', { player: 'phaseAfter' });
            target.addMark('iyjy2', false);
          },
          ai: {},
          subSkill: {
            true1: { audio: true },
            true2: { audio: true },
            false: { audio: true },
            one: {
              trigger: { global: 'phaseDiscardEnd' },
              equipSkill: true,
              filter(event, player) {
                return (
                  event.player.hasSkill('iyjy2') &&
                  event.player.getHistory('lose', function (evt) {
                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) return true;
                  }).length
                );
              },
              logTarget: 'player',
              content() {
                let num = 0;
                trigger.player.getHistory('lose', function (evt) {
                  if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger) num += evt.cards2.length;
                });
                player.draw(num);
              },
              ai: {
                combo: 'iyjy',
              },
            },
          },
        },
        iyjy2: {
          charlotte: true,
          intro: { name2: '纯', content: '手牌上限-#' },
          mod: {
            maxHandcard(player, num) {
              return num - player.countMark('iyjy2');
            },
          },
        },
        igyk: {
          audio: 'ext:恒梦:true',
          trigger: { player: 'useCardToPlayer' },
          filter(event, player) {
            return event.target.isIn() && event.target !== event.player && !event.target.hasSkill('igyk_3');
          },
          content() {
            let targets = game.filterPlayer((i) => player !== i);
            trigger.parent.directHit.addArray(targets);
            player.addTempSkill('igyk_2');
            player.line(trigger.player, 'green');
            trigger.target.addTempSkill('igyk_3');
            let evt = _status.event.getParent('phaseUse');
            if (evt && evt.name == 'phaseUse') {
              let next = game.createEvent('igyk_clear');
              _status.event.next.remove(next);
              evt.after.push(next);
              next.player = player;
              next.setContent(function () {
                game.countPlayer(function (current) {
                  if (current.hasSkill('igtk_3')) {
                    player.line(current, 'green');
                    current.removeSkill('igyk_3');
                  }
                });
              });
            }
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
            effect: {
              player(card, player, target) {
                let num = 0;
                for (const i in player.countCards('h')) {
                  if (get.tag(player.getCards('h')[i], 'damage')) num++;
                }
                if (target && num > target.hp) return 1;//QQQ
                return 0;
              },
            },
          },
          subSkill: {
            2: {
              onremove(player) {
                game.countPlayer(function (current) {
                  if (current != player) delete current.storage.igyk_damage;
                });
              },
              trigger: {
                source: 'damageBegin2',
              },
              lastDo: true,
              forced: true,
              equipSkill: true,
              filter(event, player) {
                return event.player.hasSkill('igyk_3');
              },
              content() {
                let evt = _status.event.getParent('phaseUse');
                if (evt && evt.name == 'phaseUse') {
                  trigger.cancel();
                  trigger.player.storage.igyk_damage += trigger.num;
                  player.addTempSkill('igyk_4', {
                    player: 'phaseDiscardBegin',
                  });
                }
              },
              ai: {
                directHit_ai: true,
              },
            },
            3: {
              init(player) {
                if (!player.storage.igyk_damage) player.storage.igyk_damage = 0;
              },
              onremove(player) {
                delete player.storage.igyk_damage;
              },
              mark: true,
              marktext: '停',
              mod: {
                cardEnabled2(card) {
                  if (get.position(card) == 'h') return false;
                },
                cardDiscardable(card, player) {
                  if (get.position(card) == 'h') return false;
                },
              },
              intro: {
                content: '不能使用或打出或弃置手牌',
              },
            },
            4: {
              onremove(player) {
                player.removeSkill('igyk_2');
              },
              trigger: {
                global: 'phaseDiscardBefore',
              },
              filter(event, player) {
                return (
                  game.countPlayer(function (current) {
                    return current.storage.igyk_damage > 0;
                  }) > 0
                );
              },
              forced: true,
              async content(event, trigger, player) {
                let targets = game.filterPlayer(function (current) {
                  return current.storage.igyk_damage > 0;
                });
                player.line(targets, 'fire');
                for (let i = 0; i < targets.length; i++) {
                  await targets[i].damage(targets[i].storage.igyk_damage);
                }
              },
            },
          },
        },
        vumgeemg1: {
          trigger: {
            player: ['loseAfter', 'compare'],
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
            target: 'compare',
          },
          cardSkill: true,
          filter(event, player, name) {
            if (name == 'compare') {
              if (player == event.player) {
                if (event.iwhile > 0) return false;
                return event.card1.name == 'vumgeemg';
              }
              return event.card2.name == 'vumgeemg';
            }
            if (event.name != 'equip' && !event.visible) return false;
            var evt = event.getl(player);
            if (
              !evt ||
              !evt.hs ||
              !evt.hs.filter(function (i) {
                return i.name == 'vumgeemg';
              }).length
            )
              return false;
            for (const i of lib.skill.g_du.whiteListFilter) {
              if (i(event, player)) return false;
            }
            return true;
          },
          whiteListFilter: [null, null],
          forced: true,
          popup: false,
          content() {
            game.log(player, '触发了', '#g【噩梦】', '的效果');
            var num = 1;
            if (typeof trigger.getl == 'function') {
              num = trigger.getl(player).hs.filter(function (i) {
                return i.name == 'vumgeemg';
              }).length;
            }
            player.loseHp(num).type = 'du';
          },
          _priority: -50,
        },
        vumgeemg2: {
          trigger: { target: 'useCardToTargeted' },
          charlotte: true,
          forced: true,
          usable: 1,
          filter(event, player) {
            if (!player.hasCard((card) => card.name == 'vumgeemg', 'h')) return false;
            return player.countDiscardableCards(event.player, 'he');
          },
          content() {
            trigger.player.discardPlayerCard(player, 'he', true);
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (lib.card[card.name] && target.hasCard((card) => card.name == 'vumgeemg', 'h')) {
                  return [1, -1];
                }
              },//QQQ
            },
          },
        },
        vumgmwmg1: {
          cardSkill: true,
          popup: false,
          audio: 'vumg',
          trigger: {
            player: 'damageEnd',
          },
          filter(event, player) {
            if (player === _status.currentPhase) return false;
            return player.hasUsableCard('vumgmwmg');
          },
          async cost(event, trigger, player) {
            event.result = await player
              .chooseToUse()
              .set('prompt', '是否使用【美梦】进入调离状态？')
              .set('filterCard', function (card, player) {
                if (card.name != 'vumgmwmg') return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable');
              })
              .set('ai1', function (card) {
                if (_status.currentPhase && _status.currentPhase == player) return false;
              })
              .forResult();
          },
          async content(event, trigger, player) {
            await player.addTempSkill('diaohulishan');
          },
        },
      },
      translate: {
        cvlm_1: '湛卢',
        cvlm_1_info: '当你使用【杀】造成伤害时,此伤害+1.其邻位角色受到1点伤害.出牌阶段,你可以多使用一张【杀】.——<湛卢.干将莫邪>',
        vjlu: '湛卢',
        vjlu_info: '当你使用【杀】造成伤害时,此伤害+1.其邻位角色受到1点伤害.出牌阶段,你可以多使用一张【杀】.',
        vjlu1: '湛卢',
        cvlm_2: '泰阿',
        cvlm_2_info: '当你使用一张杀造成伤害时,你可以亮出牌堆顶3张牌,此伤害改为其中类型的数量,若类型数达到3,你获得这些牌.——<泰阿.干将莫邪>',
        tdee: '泰阿',
        tdee_info: '当你使用一张杀造成伤害时,你可以亮出牌堆顶3张牌,此伤害改为其中类型的数量,若类型数达到3,你获得这些牌',
        tdee1: '泰阿',
        cvlm_3: '龙渊',
        cvlm_3_info: '当你对其他角色使用杀后,你可以展示牌堆顶7张牌,并对其使用其中可以用的牌.——<龙渊.干将莫邪>',
        lsyr: '龙渊',
        lsyr_info: '当你对其他角色使用杀后,你可以展示牌堆顶7张牌,并对其使用其中可以用的牌',
        vjlu1: '湛卢',
        cvlm_4: '鱼肠',
        cvlm_4_info: '当你的杀对其他角色造成伤害时,若伤害值X小于Y,则你可失去1点体力,将伤害值改为Y.若其未因此死亡,则伤害改为本应造成的伤害.——<鱼肠.干将莫邪>',
        yuih: '鱼肠',
        yuih_info: '当你的杀对其他角色造成伤害时,若伤害值X小于Y,则你可失去1点体力,将伤害值改为Y.若其未因此死亡,则伤害改为本应造成的伤害',
        yuih1: '鱼肠',
        yuih2: '鱼肠',
        cvlm_5: '巨阙',
        cvlm_5_info: '你的杀和单体锦囊牌可以指向任意目标,指向的目标越多,此牌失效的几率越大(每个目标增加10%失效率).——<巨阙.干将莫邪>',
        juqt: '巨阙',
        juqt_info: '你的杀和单体锦囊牌可以指向任意目标,指向的目标越多,此牌失效的几率越大(每个目标增加10%失效率)',
        cvlm_6: '工布',
        cvlm_6_info: '①锁定技,你造成的伤害均视为火焰伤害.②当你造成伤害后,目标受到火焰伤害+1直到其濒死或本武器不在场上.——<工布.干将莫邪>',
        gsbu: '工布',
        gsbu_info: '①锁定技,你造成的伤害均视为火焰伤害.②当你造成伤害后,目标受到火焰伤害+1直到其濒死或本武器不在场上',
        gsbu_1: '工布',
        gsbu2: '工布',
        cvlm_7: '纯钧',
        cvlm_7_info: '当你使用【杀】或普通锦囊牌指定其他角色为目标后,直到目标回合结束,其手牌上限减1,可叠加.当其于弃牌阶段弃牌后,你摸等量的牌',
        iyjy: '纯钧',
        iyjy2: '纯钧',
        iyjy_info: '当你使用【杀】或普通锦囊牌指定其他角色为目标后,直到目标回合结束,其手牌上限减1,可叠加.当其于弃牌阶段弃牌后,你摸等量的牌',
        cvlm_8: '承影',
        cvlm_8_info: '你使用牌不可被响应.当你使用【杀】或普通锦囊牌指定其他角色为目标后,可以令目标不可使用或打出或弃置手牌直到出牌阶段结束,但你对其造成的伤害于弃牌阶段开始前才结算且以此法结算的伤害均为无属性伤害.——<承影.干将莫邪>',
        igyk: '承影',
        igyk_info: '你使用牌不可被响应.当你使用【杀】或普通锦囊牌指定其他角色为目标后,可以令目标不可使用或打出或弃置手牌直到出牌阶段结束,但你对其造成的伤害于弃牌阶段开始前才结算且以此法结算的伤害均为无属性伤害',
        igyk_1: '承影',
        igyk_2: '承影',
        igyk_3: '承影',
        igyk_4: '承影',
        igyk_clear: '承影',
        lsyk_uiyi: '一式',
        lsyk_uiyi_info: '你向指定目标挥出一拳,若命中,你获得一张随机装备牌',
        lsyk_uier: '二式',
        lsyk_uier_info: '你向指定目标挥出一拳,若命中,你下一张拳将拆分成两小拳',
        lsyk_uisj: '三式',
        lsyk_uisj_info: '你向指定目标挥出一招无形拳,并化有形于无形',
        lsyk_uisi: '四式',
        lsyk_uisi_info: '你向指定目标挥出一拳,若命中,你将其击飞一轮,再次命中,你将其击落,并将其全部勾玉击碎',
        vumgmwmg: '美梦',
        vumgmwmg_info: '①出牌阶段,对自己使用,目标角色回复1点体力.②你的回合外,当你受到1点伤害时,你可以对你使用,本回合进入【调离】状态',
        vumgeemg: '噩梦',
        vumgeemg_info: '①每回合限一次,当你成为牌的目标后,使用者弃置你一张牌.②当此牌正面向上离开你的手牌区,或作为你的拼点牌亮出时,你失去1点体力',
        yttr_hstc: '弦乐器',
        yttr_hstc_info: '特殊判定牌',
        yttr_fhpm: '木管乐器',
        yttr_fhpm_info: '特殊判定牌',
        yttr_mwhx: '铜管乐器',
        yttr_mwhx_info: '特殊判定牌',
        yttr_hwtc: '打击乐器',
        yttr_hwtc_info: '特殊判定牌',
        yiana: '木兰花',
        yianb: '武陵春',
        yianc: '如梦令',
        yiand: '绝句',
        yiane: '念奴娇',
        yianf: '声声慢',
        yiang: '浣溪沙',
        yianh: '蝶恋花',
        yiani: '鹧鸪天',
        ciqt: '词赋',
        dyui_1: '义',
        dyui_2: '礼',
        dyui_3: '智',
        dyui_4: '信',
        dyui_5: '仁',
        dyui_1_bg: '义',
        dyui_2_bg: '礼',
        dyui_3_bg: '智',
        dyui_4_bg: '信',
        dyui_5_bg: '仁',
      },
    };
    lib.translate.hgmgcard_card_config = '恒梦卡牌';
    lib.config.all.cards.add('hgmgcard');
    lib.config.cards.add('hgmgcard');
    return hgmgcard;
  });
})();
