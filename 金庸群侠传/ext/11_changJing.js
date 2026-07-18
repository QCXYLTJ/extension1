'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
  var skill = {
    _jy_changjin: {
      translate: '',
      translate_info: '',
      trigger: { player: 'roundStart' },
      forced: true,
      priority: 100,
      popup: false,
      firstDo: true,
      content() {
        'step 0';
        event.noCangJin = false;
        if (_status.locked_jy_changjin) {
          //如果锁定场景
          if (_status.locked_jy_changjin != _status.jy_changjin) {
            event.goto(2); //如果锁定场景 并且与当前场景不同 则跳过步骤1的判断
          } else {
            event.finish(); //如果锁定场景 并且与当前场景相同 则在此步骤停止
          }
        }
        'step 1';
        // "item":{
        //    "0":"不切换场景",
        //    "1":"每1轮改变",
        //    "2":"每2轮改变",
        //    "3":"每3轮改变",
        //    "4":"每4轮改变",
        //    "5":"间次出现",
        //    "off":"关闭",
        //},
        var cfg = lib.config.extension_金庸群侠传_jy_changjing;
        event.cfg = cfg;
        var round = game.roundNumber - 1; //round为轮数减一
        if (cfg == 'off') {
          //如果是关闭 则停止
          event.finish();
          return;
        } else if (round == 0) {
          //如果是第一轮则必然开启场景
          event.goto(2);
        } else if (cfg == '5') {
          //如果是间次 则偶数轮关闭场景
          //cfg=parseInt(cfg);
          if (round % 2 == 1) {
            event.noCangJin = true;
          }
        } else if (cfg == '0') {
          //除了第一轮 不变换场景
          event.finish();
          return;
        } else {
          cfg = parseInt(cfg);
          if (cfg != 1) {
            //排除每次改变的选项
            if (round % cfg != 0) {
              //如果与选项的轮数不同  则在此步骤停止
              event.finish();
              return;
            }
          }
        }
        'step 2';
        var list = lib.jy_changJinList.slice(0);
        if (_status.jy_changjin) {
          list.remove(_status.jy_changjin);
          game.removeGlobalSkill(_status.jy_changjin);
          var info = lib.skill[_status.jy_changjin];
          if (info && info.removeGlobalSkill) info.removeGlobalSkill(lib, game, ui, get, ai, _status);
        }
        delete _status.jy_changjin;
        if (event.noCangJin) {
          if (ui.jy_changjin) {
            ui.jy_changjin.style.display = 'none';
          }
          if (lib.config.image_background && lib.config.image_background != 'default' && lib.config.image_background.indexOf('custom_') != 0) {
            ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
          }
          event.finish();
          return;
        }
        event.jy_changjin = _status.locked_jy_changjin || list.randomGet(); //场景优先取锁定场景
        'step 3';
        var changjing_name = lib.skill[event.jy_changjin].translate2;
        var vcards = [['事件', '', event.jy_changjin]];
        event.dialog = ui.create.dialog('<div class="text center">当前事件' + (_status.connectMode ? '' : '<br>（点击屏幕可跳过等待）'), [vcards, 'vcard']);
        var delay = 2000;
        game.pause();
        event.jy_changjing_delayed = true;
        setTimeout(function () {
          if (event.jy_changjing_delayed == true) {
            delete event.jy_changjing_delayed;
            game.resume();
          }
        }, delay);
        if (!_status.connectMode) {
          event.forceMine = true;
          event.custom.replace.window = function () {
            if (event.jy_changjing_delayed == true) {
              delete event.forceMine;
              delete event.jy_changjing_delayed;
              game.resume();
            }
          };
        }
        game.log('当前事件为:', { name: changjing_name });
        game.addGlobalSkill(event.jy_changjin);
        var info = lib.skill[event.jy_changjin];
        if (info && info.addGlobalSkill) info.addGlobalSkill(lib, game, ui, get, ai, _status);
        _status.jy_changjin = event.jy_changjin;
        _status.jy_changjin_translate = changjing_name;
        if (!ui.jy_changjin) {
          ui.jy_changjin = ui.create.system(_status.jy_changjin_translate, null, true, true);
          lib.setPopped(
            ui.jy_changjin,
            function () {
              var uiintro = ui.create.dialog('hidden');
              if (!_status.jy_changjin) {
                uiintro.addText('暂无');
                return uiintro;
              }
              var skill = _status.jy_changjin;
              var vcards = [['事件', '', skill]];
              uiintro.add([vcards, 'vcard']);
              uiintro.add(lib.translate[skill + '_info']);
              uiintro.add(ui.create.div('.placeholder.slim'));
              return uiintro;
            },
            500
          );
        } else {
          ui.jy_changjin.innerHTML = _status.jy_changjin_translate;
          ui.jy_changjin.style.display = '';
        }
        if (ui.time3) ui.time3.style.display = 'none';
        game.me.$fullscreenpop(_status.jy_changjin_translate, lib.skill[event.jy_changjin].color || 'fire');
        ui.background.setBackgroundImage('extension/金庸群侠传/changjing/' + event.jy_changjin + '.jpg');
        'step 4';
        'step 5';
        if (game.me && game.me.isAlive()) {
          //此处为显示当前场景技的标记，方便玩家查看当前场景技能。若不想显示，可以注释下面两行代码。
          game.me.unmarkSkill('_jy_changjin_mark');
          game.me.markSkill('_jy_changjin_mark');
        }
      },
      subSkill: {
        mark: {
          charlotte: true,
          onremove: true,
          mark: true,
          marktext: '场景',
          intro: {
            name: '场景',
            mark(dialog, storage, player) {
              var skill = _status.jy_changjin;
              if (!skill) return '暂无场景事件';
              var vcards = [['事件', '', skill]];
              dialog.addSmall([vcards, 'vcard']);
            }
          }
        }
      }
    },
    ///////////////////技能/////////////////
    jycj_siguoya: {
      color: 'fire',
      jy_changjin: true,
      translate: '面壁',
      translate2: '思过崖',
      translate_info: '◆场景技。思过崖。名字中没有“令狐冲”、“风清扬”的角色的回合结束时，需弃置X张牌(X为本回合造成的伤害点数)增益:名字中有“令狐冲”的角色回合结束时，若本回合造成的伤害至少为: 1/2/3点， 随机获得一张基本牌/普通锦囊/秘籍。',
      trigger: { player: 'phaseJieshuBegin' },
      forced: true,
      direct: true,
      content() {
        const bool = get.jy_nameCNBool(player, ['令狐冲', '风清扬'], true);
        const bool2 = get.jy_nameCNBool(player, '令狐冲', true);
        const disCards = player.getCards('he').filter((card) => lib.filter.cardDiscardable(card, player, event.name));
        const history = player.getHistory('sourceDamage');
        let count = 0;
        for (const evt of history) {
          count += evt.num;
        }
        if (!bool && count > 0) {
          if (count >= disCards.length) {
            player.discard(disCards);
          } else {
            player.chooseToDiscard(count, 'he', true);
          }
        } else if (bool2 && count > 0) {
          const gainenable = [];
          if (count >= 3) {
            const gain1 = get.randomCard(function (cardx) {
              return lib.jy_mijiList.includes(cardx.name);
            });
            if (gain1) gainenable.add(gain1);
          }
          if (count >= 2) {
            const gain2 = get.randomCard(function (cardx) {
              return get.type(cardx) == 'trick';
            });
            if (gain2) gainenable.add(gain2);
          }
          if (count >= 1) {
            const gain3 = get.randomCard(function (cardx) {
              return get.type(cardx) == 'basic';
            });
            if (gain3) gainenable.add(gain3);
          }
          if (gainenable.length) {
            player.gain(gainenable, 'gain2', 'log');
          } else {
            game.log('牌堆没牌可得！');
          }
        }
      }
    },
    jycj_piaomiaofeng: {
      color: 'fire',
      jy_changjin: true,
      translate: '反叛',
      translate2: '缥缈峰',
      translate_info: '◆<b>场景技。缥缈峰。</b>判定阶段开始时，若你判定区有延时锦囊牌，你可以失去1点体力，获得之。<b>增益：</b>名字中有“虚竹”的角色发动此技能不用失去体力，且判定阶段开始时，若其判定区没有延时锦囊牌，可随机获得一张。',
      trigger: { player: 'phaseJudgeBefore' },
      check(event, player) {
        const cardCount = player.countCards('hs', function (cardx) {
          const mod2 = game.checkMod(cardx, player, 'unchanged', 'cardEnabled2', player);
          if (mod2 != 'unchanged') return mod2;
          const card = cardx;
          const mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
          if (mod != 'unchanged') return mod;
          var savable = get.info(card).savable;
          if (typeof savable == 'function') savable = savable(card, player, player);
          if (!savable) return false;
          const mod3 = game.checkMod(card, player, player, 'unchanged', 'playerEnabled', player);
          if (mod3 != 'unchanged') return mod3;
          const mod4 = game.checkMod(card, player, player, 'unchanged', 'targetEnabled', player);
          if (mod4 != 'unchanged') return mod4;
          return true;
        });
        const bool = get.jy_nameCNBool(player, '虚竹', true);
        if (!bool) {
          if (!cardCount && player.hp == 1) return false;
        }
        const togain = player.getCards('j');
        if (!bool && get.effect(player, { name: 'losehp' }, player, player) > 0) return true;
        if (bool && !togain.length) return true;
        return togain.some(function (j) {
          return (
            get.effect(
              player,
              {
                name: j.viewAs || j.name,
                cards: [j]
              },
              player,
              player
            ) < 0);

        });
      },
      filter(event, player) {
        if (get.jy_nameCNBool(player, '虚竹', true)) return true;
        return player.getCards('j').length > 0;
      },
      content() {
        const bool = get.jy_nameCNBool(player, '虚竹', true);
        const togain = player.getCards('j');
        if (togain.length) {
          player.gain(togain, 'gain2', 'log');
          if (!bool) player.loseHp();
        } else if (bool) {
          const gainCard = get.cardPile(function (card) {
            return get.type(card) == 'delay';
          });
          if (gainCard) {
            player.gain(gainCard, 'gain2', 'log');
          } else {
            game.log('牌堆没有延时锦囊牌！');
          }
        }
      }
    },
    jycj_tianningsi: {
      color: 'fire',
      jy_changjin: true,
      translate: '毒饵',
      translate2: '天宁寺',
      translate_info: '◆<b>场景技。天宁寺。</b>所有角色使用装备牌后，有50%的几率受到一点无来源的蛊毒伤害。增益效果：名字中含“狄云”的角色无视上述效果，且使用一张装备后可摸一张牌。',
      forced: true,
      trigger: { player: 'useCardEnd' },
      filter(event, player) {
        if (get.type(event.card) != 'equip') return false;
        if (get.jy_nameCNBool(player, ['狄云'], true)) return true;
        if (!event.jycj_tianningsi) event.set('jycj_tianningsi', Math.random());
        if (event.jycj_tianningsi < 0.5) return false;
        return true;
      },
      content() {
        if (get.jy_nameCNBool(player, ['狄云'], true)) {
          player.draw(1);
        } else {
          player.damage('jy_du', 'nocard', 'nosource');
        }
      },
      ai: {
        effect: {
          player(card, player, target) {
            if (get.type(card) != 'equip') return;
            if (get.jy_nameCNBool(player, ['狄云'], true)) {
              if (get.cardtag(card, 'gifts')) return;
              return [1, 0.7];
            } else {
              if (get.damageEffect(player, player, player, 'jy_du') >= 0) return;
              return [1, -2];
            }
          }
        }
      }
    },
    jycj_tiejiangpu: {
      color: 'fire',
      jy_changjin: true,
      translate: '浇铸',
      translate2: '铁匠铺',
      mod: {
        attackRange(player, num) {
          const count = player.countCards('e', { subtype: 'equip1' });
          if (count > 0) return num + 2;
          return num;
        }
      },
      translate_info: '◆<b>场景技。铁匠铺。</b>你可以令你装备里的武器攻击范围+2。增益效果：桃花岛的角色出牌阶段限一次，可随机获得一张冯默风的衍生装备。',
      filter(event, player) {
        const bp = get.jy_bangpai(player);
        return bp.includes('jy_taohuadao');
      },
      enable: 'phaseUse',
      usable: 1,
      content() {
        const nameCard = ['jydiy_yitianjian_re', 'jydiy_dagoubang_re', 'jydiy_ruanweijia_re', 'jydiy_shenghuoling_re', 'jydiytaohuazhen_re'].randomGet();
        let card = get.cardPile(function (card) {
          return card.name == nameCard;
        });
        if (!card) {
          card = game.createCard(nameCard);
        }
        player.gain(card, 'gain2', 'log');
      },
      ai: {
        basic: { order: 11 },
        result: { player: 1 }
      }
    },
    jycj_tieqiangmiao: {
      color: 'fire',
      jy_changjin: true,
      translate: '轶事',
      translate2: '铁枪庙',
      translate_info: '◆<b>场景技。铁枪庙。</b>所有角色造成的属性伤害+1。增益效果：名字含有“黄蓉”的角色在此场景下视为装备了【厉刃百兽甲】。',
      addGlobalSkill(lib, game, ui, get, ai, _status) {
        game.countPlayer((i) => {
          if (get.jy_nameCNBool(i, ['黄蓉'], true)) {
            i.addAdditionalSkills('jycj_tieqiangmiao', ['jydiy_ruanweijia_re_skill']);
          }
        });
      },
      removeGlobalSkill(lib, game, ui, get, ai, _status) {
        game.countPlayer((i) => {
          i.removeAdditionalSkills('jycj_tieqiangmiao');
        });
      },
      trigger: { source: 'damageBegin1' },
      filter(event) {
        return event.hasNature() && event.notLink();
      },
      forced: true,
      content() {
        trigger.num++;
      },
      ai: {
        effect: {
          player(card, player, target, current, isLink) {
            if (!target) return;
            if (isLink) return;
            if (
            target.hasSkillTag('filterDamage', null, {
              player: player,
              card: card
            }))

            return;
            if (game.hasNature(card) || get.tag(card, 'natureDamage')) return [1, 0, 1, -1.5];
          }
        }
        /*
        damageBonus:true,
        skillTagFilter (player, tag, arg) {
            return arg&&arg.card&&(game.hasNature(arg.card)||get.tag(arg.card,"natureDamage"));
        },
        */
      }
    },
    jycj_qingzhong: {
      color: 'fire',
      jy_changjin: true,
      translate: '情冢',
      translate2: '小镜湖',
      translate_info: '◆<b>场景技。小镜湖。锁定技。</b>结束阶段开始时，若有队友存活，你选择一项：弃置一名队友的两张牌；或你对一名队友造成一点伤害。',
      trigger: {
        player: 'phaseJieshuBegin'
      },
      forced: true,
      filter(event, player) {
        return game.hasPlayer(function (current) {
          if (current == player) return false;
          return current.getFriends(true).includes(player);
        });
      },
      content() {
        'step 0';
        var targets = game.filterPlayer(function (current) {
          if (current == player) return false;
          return current.getFriends(true).includes(player);
        });
        if (targets.length > 1) {
          player.
          chooseTarget(true, '小镜湖:请选择一名队友', function (card, player, target) {
            return _status.event.list.includes(target);
          }).
          set('ai', function (target) {
            return -get.attitude(player, target);
          }).
          set('list', targets);
        } else if (targets.length == 1) {
          event._result = { bool: true, targets: targets };
        } else {
          event.finish();
        }
        'step 1';
        if (result.targets?.length) {
          player.line(result.targets);
          event.target = result.targets[0];
        } else {
          event.finish();
        }
        'step 2';
        if (target.countDiscardableCards(player, 'he') >= 2) {
          var next = player.discardPlayerCard('he', target, [2, 2], '小镜湖：是否弃置队友两张牌？否则你对其造成一点伤害。');
          next.set('ai', function (button) {
            var card = button.link;
            var player = _status.event.player;
            var target = _status.event.target;
            if (get.damageEffect(target, player, player) > 0) return -1;
            return 5 - get.buttonValue(button);
          });
        } else {
          event._result = { bool: false };
        }
        'step 3';
        if (!result.bool) {
          target.damage(player);
        }
      }
    },
    //黑沼潭
    jycj_xiannao: {
      color: 'thunder',
      jy_changjin: true,
      translate: '陷淖',
      translate2: '黑沼潭',
      translate_info: '<b>场景技。黑沼潭。锁定技。</b>出牌阶段开始时，除非你弃置任意张点数的乘积为24的牌，否则本阶段你只能对下家使用牌。增益效果：此场景技对桃花岛的角色以及名字中有瑛姑的角色无效。',
      getResult(cards) {
        var l = cards.length;
        var all = Math.pow(l, 2);
        var list = [];
        for (var i = 1; i < all; i++) {
          var array = [];
          for (var j = 0; j < l; j++) {
            if (Math.floor(i % Math.pow(2, j + 1) / Math.pow(2, j)) > 0) array.push(cards[j]);
          }
          var num = 1;
          for (var k of array) {
            num *= k.number;
          }
          if (num == 24) list.push(array);
        }
        if (list.length) {
          list.sort(function (a, b) {
            if (a.length != b.length) return a.length - b.length;
            return get.value(a) - get.value(b);
          });
          return list[0];
        }
        return list;
      },
      forced: true,
      filter(event, player) {
        if (get.jy_nameCNBool(player, '瑛姑', true)) return false;
        var bp = get.jy_bangpai(player);
        if (bp.includes('jy_taohuadao')) return false;
        return true;
      },
      trigger: {
        player: 'phaseUseBegin'
      },
      content() {
        'step 0';
        const next = player.chooseToDiscard('陷淖：弃置任意张点数的乘积为24的牌，否则本阶段你只能对下家使用牌。', 'he');
        next.set('ai', function (cardx) {
          const player = _status.event.player;
          if (!player.needsToDiscard()) return 0;
          const evt = _status.event;
          if (!evt.jycj_xiannao_choice)
          evt.jycj_xiannao_choice = lib.skill.jycj_xiannao.getResult(
            player.getCards('he', function (card) {
              if (card.number == 1) return false;
              return lib.filter.cardDiscardable(card, player, 'jycj_xiannao');
            })
          );
          if (!evt.jycj_xiannao_choice.includes(cardx)) return 0;
          return 1;
        });
        next.set('complexCard', true);
        next.set('selectCard', [1, Infinity]);
        next.set('filterOk', function () {
          var num = 1;
          for (var i = 0; i < ui.selected.cards.length; i++) {
            num *= ui.selected.cards[i].number;
          }
          return num == 24;
        });
        next.set('filterCard', function (card) {
          var num = 1;
          for (var i = 0; i < ui.selected.cards.length; i++) {
            num *= ui.selected.cards[i].number;
          }
          return card.number * num <= 24;
        });
        'step 1';
        if (!result.bool) {
          player.addTempSkill('jycj_xiannao_debuff');
        }
      }
    },
    jycj_xiannao_debuff: {
      mark: true,
      marktext: '陷',
      translate: '',
      translate_info: '',
      forced: true,
      popup: false,
      charlotte: true,
      intro: {
        name: '陷淖',
        content: '本阶段你只能对下家使用牌。'
      },
      mod: {
        playerEnabled(card, player, target) {
          if (target != player.next) return false;
        },
        cardSavable(card, player, target) {
          if (target != player.next) return false;
        }
      }
    },
    //少室山
    jycj_duizhi: {
      color: 'thunder',
      jy_changjin: true,
      translate: '对质',
      translate2: '少室山',
      locked: true,
      ai: {
        viewHandcard: true,
        skillTagFilter(player, tag, arg) {
          if (!_status.jycj_duizhi) return false;
          if (!_status.jycj_duizhi.includes(arg)) return false;
          if (player == arg) return false;
        }
      },
      addGlobalSkill(lib, game, ui, get, ai, _status) {
        _status.jycj_duizhi = [];
        game.addGlobalSkill('jycj_duizhi_buff');
        game.addGlobalSkill('jycj_duizhi_buff1');
        game.addGlobalSkill('jycj_duizhi_buff2');
        game.addGlobalSkill('jycj_duizhi_buff3');
        game.addGlobalSkill('jycj_duizhi_buff4');
        game.addGlobalSkill('jycj_duizhi_buff5');
        game.addGlobalSkill('jycj_duizhi_buff6');
        lib.translate.visible_jycj_duizhi = 'invisible';
      },
      removeGlobalSkill(lib, game, ui, get, ai, _status) {
        delete _status.jycj_duizhi;
        game.removeGlobalSkill('jycj_duizhi_buff');
        game.removeGlobalSkill('jycj_duizhi_buff1');
        game.removeGlobalSkill('jycj_duizhi_buff2');
        game.removeGlobalSkill('jycj_duizhi_buff3');
        game.removeGlobalSkill('jycj_duizhi_buff4');
        game.removeGlobalSkill('jycj_duizhi_buff5');
        game.removeGlobalSkill('jycj_duizhi_buff6');
        game.countPlayer((i) => {
          const cards = i.getCards('h', (card) => card.hasGaintag('visible_jycj_duizhi'));
          if (cards.length) {
            i.hideShownCards(cards, 'visible_jycj_duizhi');
          }
        });
      },
      translate_info: function () {
        var strinfo = ['<b>场景技。少室山。</b>本轮首号位的回合开始时，你可以选择是否明置手牌。', '若选择是，则你每令一名角色进入濒死状态，你摸三张牌。', '场景增益:', '<br><li>萧远山、慕容博在此场景下明牌，造成的伤害+1;', '<br><li>玄慈在此场景下明牌，体力为1时避免受到伤害;', '<br><li>乔峰在此场景下明牌，发动【降龙】时可以连续判定两次 (结果累加) ;', '<br><li>慕容复在此场景下明牌，发动【移星】时可以多选择一个目标。'];
        return strinfo.join('');
      }(),
      forced: true,
      popup: false,
      forceDie: true,
      trigger: { player: 'roundBegin' },
      content() {
        'step 0';
        event.forceDie = true;
        _status.jycj_duizhi = [];
        event.targets = game.filterPlayer().sortBySeat(player);
        'step 1';
        if (event.targets.length) {
          event.target = event.targets.shift();
          if (!event.target.isIn()) {
            event.redo();
            return;
          }
          event.target.chooseBool('对质:本轮是否明牌?').set('ai', () => true);
        } else {
          event.finish();
        }
        'step 2';
        if (result.bool) {
          if (!_status.jycj_duizhi) _status.jycj_duizhi = [];
          _status.jycj_duizhi.add(target);
          game.log(target, '选择了明牌!');
          var cardsx = target.getCards('h');
          if (cardsx.length) {
            target.showHandcards();
            target.addShownCards(cardsx, 'visible_jycj_duizhi');
          }
        }
        event.goto(1);
      }
    },
    jycj_duizhi_buff: {
      color: 'thunder',
      translate: '对质',
      translate2: '',
      trigger: { source: 'dying' },
      forced: true,
      filter(event, player) {
        if (!_status.jycj_duizhi) return false;
        if (!_status.jycj_duizhi.includes(player)) return false;
        return true;
      },
      content() {
        player.draw(3);
      }
    },
    jycj_duizhi_buff2: {
      color: 'thunder',
      translate: '对质',
      translate2: '',
      trigger: { source: 'damageBegin1' },
      filter(event, player) {
        if (!_status.jycj_duizhi) return false;
        if (!_status.jycj_duizhi.includes(player)) return false;
        if (!event.notLink()) return false;
        return get.jy_nameCNBool(player, ['慕容博', '萧远山'], true);
      },
      forced: true,
      content() {
        trigger.num++;
      },
      ai: {
        effect: {
          player(card, player, target, current, isLink) {
            if (!target) return;
            if (isLink) return;
            if (!_status.jycj_duizhi) return;
            if (!_status.jycj_duizhi.includes(player)) return;
            if (!get.tag(card, 'damage')) return;
            if (
            target.hasSkillTag('filterDamage', null, {
              player: player,
              card: card
            }))

            return;
            if (get.jy_nameCNBool(player, ['慕容博', '萧远山'], true)) return [1, 0, 1, -1.5];
          }
        }
        //damageBonus: true,
        //skillTagFilter (player, tag, arg) {
        //    if(!_status.jycj_duizhi) return false;
        //    if(!_status.jycj_duizhi.includes(player)) return false;
        //    return get.jy_nameCNBool(player,['慕容博','萧远山'],true);
        //},
      }
    },
    jycj_duizhi_buff3: {
      color: 'thunder',
      translate: '对质',
      translate2: '',
      trigger: { player: 'damageBegin4' },
      filter(event, player) {
        if (!_status.jycj_duizhi) return false;
        if (!_status.jycj_duizhi.includes(player)) return false;
        if (player.hp != 1) return false;
        return get.jy_nameCNBool(player, '玄慈', true);
      },
      forced: true,
      content() {
        trigger.cancel();
      },
      ai: {
        effect: {
          target(card, player, target, current) {
            if (!lib.skill['jycj_duizhi_buff3'].filter(null, target)) return;
            if (get.tag(card, 'damage')) return 'zerotarget';
          }
        }
      }
    },
    jycj_duizhi_buff4: {
      color: 'thunder',
      translate: '对质',
      translate2: '',
      ai: {
        xianglong_buff: true,
        skillTagFilter(player, tag, arg) {
          if (!_status.jycj_duizhi) return false;
          if (!_status.jycj_duizhi.includes(player)) return false;
          return get.jy_nameCNBool(player, '乔峰', true);
        }
      }
    },
    jycj_duizhi_buff5: {
      color: 'thunder',
      translate: '对质',
      translate2: '',
      ai: {
        yixing_buff: true,
        skillTagFilter(player, tag, arg) {
          if (!_status.jycj_duizhi) return false;
          if (!_status.jycj_duizhi.includes(player)) return false;
          return get.jy_nameCNBool(player, '慕容复', true);
        }
      }
    },
    jycj_duizhi_buff6: {
      trigger: {
        player: 'gainBegin'
      },
      forced: true,
      silent: true,
      filter(event, player) {
        if (!_status.jycj_duizhi) return false;
        if (!_status.jycj_duizhi.includes(player)) return false;
        return true;
      },
      content() {
        trigger.gaintag.add('visible_jycj_duizhi');
      }
    },
    //精绝古城
    jycj_yiji: {
      color: 'thunder',
      jy_changjin: true,
      translate: '遗迹',
      translate2: '精绝古城',
      translate_info: '<b>场景技。精绝古城。</b>出牌阶段限一次， 你可以展示一张基本牌或锦囊牌，从弃牌堆中获得至多两张同名的牌。',
      usable: 1,
      enable: 'phaseUse',
      check(card) {
        const player = _status.event.player;
        const num = player.getUseValue(card, null, true);
        return num > 0 ? num : 1;
      },
      filter(event, player) {
        return player.countCards('h', lib.skill.jycj_yiji.filterCard) > 0;
      },
      filterCard(card, player, event) {
        const name = card.name;
        const type = get.type2(card);
        if (type != 'basic' && type != 'trick') return false;
        return (
          get.randomCardsNum(function (cardx) {
            return cardx.name == name;
          }, 'discardPile') > 0);

      },
      position: 'h',
      discard: false,
      lose: false,
      delay: false,
      locked: false,
      content() {
        'step 0';
        player.showCards(cards);
        'step 1';
        const namex = cards[0].name;
        const gains = get.randomCards(
          2,
          function (cardx) {
            return cardx.name == namex;
          },
          'discardPile'
        );
        if (gains && gains.length) {
          player.gain(gains, 'gain2', 'log');
        }
      },
      ai: {
        order: 9,
        result: {
          player: 1
        }
      }
    },
    //武当山
    jycj_canwu: {
      nopop: true,
      trigger: { player: 'equipBefore' },
      color: 'fire',
      jy_changjin: true,
      translate: '参悟',
      translate2: '武当山',
      translate_info: '<b>场景技。武当山。锁定技，</b>一名角色的准备阶段，若其有未觉醒的技能，其可以选择其中一个技能，其视为满足觉醒的条件。<p>增益：名字中含“张三丰”和“张君宝”的角色可以在回合开始时获得一名未出场角色的一项觉醒技。',
      trigger: {
        player: 'phaeZhunbeiBegin'
      },
      direct: true,
      locked: true,
      priority: 99,
      group: ['jycj_canwu_add'],
      filter(event, player) {
        var list = player.getSkills(null, false, false).filter(function (skill) {
          var info = lib.skill[skill];
          return info && info.juexingji && !player.awakenedSkills.includes(skill);
        });
        return list.length;
      },
      content() {
        'step 0';
        var list = player.getSkills(null, false, false).filter(function (skill) {
          var info = lib.skill[skill];
          return info && info.juexingji && !player.awakenedSkills.includes(skill);
        });
        if (!list.length) {
          event.finish();
          return;
        }
        event.skills = list;
        'step 1';
        var list = [];
        for (var skill of event.skills) {
          list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
        }
        var next = player.chooseButton(['请选择一项觉醒技视为满足觉醒条件', [list, 'textbutton']]);
        next.set('forced', true);
        next.set('selectButton', [1, 1]);
        next.set('filterButton', function (button) {
          return true;
        });
        next.set(
          'ai',
          event.ai ||
          function (button) {
            var target = _status.event.player;
            //if(target.hasSkill(button.link,false,false,false)) return 0;
            return get.skillRank(button.link);
          }
        );
        'step 2';
        if (result.links?.length) {
          player.storage.jycj_canwu = result.links[0];
          var info = lib.skill[result.links[0]];
          if (info.filter && !info.jycj_canwu_filter) {
            info.jycj_canwu_filter = info.filter;
            info.filter = function (event, player) {
              if (player.storage.jycj_canwu) return true;
              return this.jycj_canwu_filter.apply(this, arguments);
            };
          }
        }
      },
      subSkill: {
        add: {
          trigger: {
            player: 'phaseBefore'
          },
          direct: true,
          priority: 100,
          sub: true,
          filter(event, player) {
            // var list=[];
            // if(player.name) list.add(player.name);
            // if(player.name1) list.add(player.name1);
            // if(player.name2) list.add(player.name2);
            // for(var i=0;i<list.length;i++){
            //     if(/zhangjunbao|zhangsanfeng/.test(list[i])==true) return true;
            // }
            return get.jy_nameCNBool(player, ['张三丰', '张君宝'], true);
          },
          content() {
            var list = [];
            var list2 = [];
            var players = game.players.concat(game.dead);
            for (var i = 0; i < players.length; i++) {
              list2.add(players[i].name);
              list2.add(players[i].name1);
              list2.add(players[i].name2);
            }
            for (var i in lib.character) {
              if (list2.includes(i)) continue;
              for (var j = 0; j < lib.character[i][3].length; j++) {
                if (lib.skill[lib.character[i][3][j]] && lib.translate[lib.character[i][3][j] + '_info']) {
                  var info = lib.skill[lib.character[i][3][j]];
                  if (info && info.juexingji) {
                    list.add(lib.character[i][3][j]);
                  }
                }
              }
            }
            var link = list.randomGet();
            player.addSkills(link);
          }
        }
      }
    },
    //桃花岛
    jycj_wuyun: {
      nopop: true,
      trigger: { player: 'equipBegin' },
      color: 'fire',
      jy_changjin: true,
      translate: '遁甲',
      translate2: '桃花岛',
      translate_info: '<b>场景技。桃花岛。锁定技，</b>场上非桃花阵的装备牌视为【桃花阵】、【桃花阵】视为【五行八卦阵】；帮派属性有桃花岛上的角色若未安装防具牌，视为装备着【五行八卦阵】。',
      forced: true,
      //popup:false,
      filter(event, player) {
        if (get.subtype(event.card) != 'equip2') return false;
        if (event.card.name == 'jydiytaohuazhen_re') return false;
        if (event.card.origin_name) return false;
        if (!lib.inpile.includes(event.card.name)) {
          return false;
        }
        /*
        var owner=get.owner(event.card);
        if(owner){
            var name=event.card.name;
            if(event.card.origin_name) name=event.card.origin_name;
            if(!lib.inpile.includes(name)){
                return false;
            };  
        }else{
            if(event.card.origin_name) return false;
            if(!lib.inpile.includes(event.card.name)){
                return false;
            };
        };  
        */
        return true;
      },
      content() {
        trigger.pushHandler(function (event, option) {
          if (event.step == 3 && option.state == 'begin') {
            if (event.card.origin_name) return false;
            if (!lib.inpile.includes(event.card.name)) return false;
            const origin_name = event.card.name;
            var new_name = 'jydiytaohuazhen';
            if (origin_name == 'jydiytaohuazhen') new_name = 'jydiytaohuazhen_re';
            event.card.name = new_name;
            event.card.origin_name = origin_name;
          }
        });
        /*
        var owner=get.owner(trigger.card);
        if(owner){
            var name=trigger.card.name;
            if(trigger.card.origin_name) name=trigger.card.origin_name;
            var new_name='jydiytaohuazhen';
            if(name=='jydiytaohuazhen') new_name='jydiytaohuazhen_re';
            trigger.card.temp_to_name=new_name; 
        }
        else{
            var origin_name=trigger.card.name;
            var new_name='jydiytaohuazhen';
            if(origin_name=='jydiytaohuazhen') new_name='jydiytaohuazhen_re';
            trigger.card.name=new_name;
            trigger.card.origin_name=origin_name;         
        }; 
        */
      },
      addGlobalSkill(lib, game, ui, get, ai, _status) {
        game.addGlobalSkill('jycj_wuyun2');
        game.countPlayer(function (current) {
          current.countCards('e', function (cardx) {
            if (get.subtype(cardx) != 'equip2') return false;
            if (cardx.name == 'jydiytaohuazhen_re') return false;
            if (cardx.origin_name) return false;
            if (!lib.inpile.includes(cardx.name)) {
              return false;
            }
            var origin_name = cardx.name;
            var new_name = 'jydiytaohuazhen';
            if (origin_name == 'jydiytaohuazhen') new_name = 'jydiytaohuazhen_re';
            current.removeEquipTrigger(cardx);
            cardx.name = new_name;
            cardx.origin_name = origin_name;
            current.addEquipTrigger(cardx);
          });
        });
      },
      removeGlobalSkill(lib, game, ui, get, ai, _status) {
        game.removeGlobalSkill('jycj_wuyun2');
        game.countPlayer(function (current) {
          current.countCards('e', function (cardx) {
            if (get.subtype(cardx) != 'equip2') return false;
            if (!cardx.origin_name) return false;
            if (current.hasSkillTag('jycj_wuyun')) return false;
            if (cardx.name != 'jydiytaohuazhen' && cardx.name != 'jydiytaohuazhen_re') return false;
            current.removeEquipTrigger(cardx);
            var origin_name = cardx.origin_name;
            delete cardx.origin_name;
            cardx.name = origin_name;
            current.addEquipTrigger(cardx);
          });
        });
      }
    },
    jycj_wuyun2: {
      equipSkill: true,
      inherit: 'bagua_skill',
      nopop: true,
      filter(event, player) {
        if (!lib.skill.bagua_skill.filter(event, player)) return false;
        if (!player.hasEmptySlot(2)) return false;
        var bp = get.jy_bangpai(player);
        return bp.includes('jy_taohuadao');
      },
      translate: '五行八卦阵',
      content() {
        'step 0';
        trigger.bagua_skill = true;
        player.judge(event.name, function (card) {
          return card.suit != 'club' ? 1.5 : -0.5;
        }).judge2 = function (result) {
          return result.bool;
        };
        'step 1';
        if (result.judge > 0) {
          trigger.untrigger();
          trigger.set('responded', true);
          trigger.result = { bool: true, card: { name: 'shan' } };
        }
      },
      ai: {
        respondShan: true,
        skillTagFilter(player) {
          var bp = get.jy_bangpai(player);
          if (!bp.includes('jy_taohuadao')) return false;
        },
        effect: {
          target(card, player, target) {
            var bp = get.jy_bangpai(target);
            if (!bp.includes('jy_taohuadao')) return;
            if (player == target && get.subtype(card) == 'equip2') {
              if (get.equipValue(card) <= 7.5) return 0;
            }
            if (!target.hasEmptySlot(2)) return;
            return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
          }
        }
      }
    },
    //紫禁城
    jycj_danei: {
      color: 'fire',
      jy_changjin: true,
      translate: '大内',
      translate2: '紫禁城',
      translate_info: '<b>场景技。紫禁城。</b>盟主需要使用或打出【杀】、【闪】时，可令同朝代的其他角色选择是否代替其使用或打出此牌；非盟主角色出牌阶段限一次，其可以将一张♠️️手牌当【比武】对盟主使用，且回合结束时需弃置X张牌（X为其本回合对盟主造成伤害数）。<p>场景增益：若韦小宝不为盟主，回合结束时不需弃牌；若玄烨、弘历为盟主，X改为2X。',
      removeGlobalSkill(lib, game, ui, get, ai, _status) {
        game.removeGlobalSkill('jycj_danei_juedou');
        game.removeGlobalSkill('jycj_danei_sha');
        game.removeGlobalSkill('jycj_danei_shan');
        game.removeGlobalSkill('jycj_danei_sha1');
      },
      addGlobalSkill(lib, game, ui, get, ai, _status) {
        game.addGlobalSkill('jycj_danei_juedou');
        game.addGlobalSkill('jycj_danei_sha');
        game.addGlobalSkill('jycj_danei_shan');
        game.addGlobalSkill('jycj_danei_sha1');
      }
    },
    jycj_danei_juedou: {
      unique: true,
      translate: '大内',
      translate2: '',
      translate_info: '',
      filter(event, player) {
        if (player.identity == 'zhu') return false;
        return game.hasPlayer(function (current) {
          return current.identity == 'zhu' && event.filterTarget({ name: 'juedou' }, player, current);
        });
      },
      prompt: '出牌阶段限一次，可以将一张♠️️手牌对盟主使用一张【比武】，且回合结束时需弃置X张牌(X为本回合对盟主造成伤害数)。',
      filterTarget(card, player, target) {
        var bool = false;
        var players = ui.selected.targets.slice(0);
        for (var i = 0; i < players.length; i++) {
          if (players[i].identity == 'zhu') bool = true;
          break;
        }
        if (!bool && target.identity != 'zhu') return false;
        return _status.event._backup.filterTarget.apply(this, arguments);
      },
      usable: 1,
      enable: 'phaseUse',
      viewAs: { name: 'juedou' },
      filterCard(card) {
        return card.suit == 'spade';
      },
      precontent() {
        player.addTempSkill('jycj_danei_juedou_temp');
      },
      position: 'hs',
      viewAsFilter(player) {
        if (!player.countCards('hs', { suit: 'spade' })) return false;
        return true;
      },
      check(card) {
        return 6 - get.value(card);
      },
      complexSelect: true
    },
    jycj_danei_juedou_temp: {
      translate: '大内',
      translate2: '',
      translate_info: '',
      trigger: { player: 'phaseJieshuBegin' },
      popup: false,
      priority: -100,
      lastDo: true,
      charlotte: true,
      nopop: true,
      unique: true,
      forced: true,
      filter(event, player) {
        if (get.jy_nameCNBool(player, '韦小宝', true)) return false;
        var cards = player.getCards('he', function (card) {
          return lib.filter.cardDiscardable(card, player);
        });
        if (!cards.length) return false;
        return (
          player.getHistory('sourceDamage', function (evt) {
            return evt.player.identity == 'zhu' && evt.num > 0;
          }).length > 0);

      },
      content() {
        var count = 0;
        player.getHistory('sourceDamage', function (evt) {
          if (evt.player.identity == 'zhu' && evt.num > 0) count += evt.num;
          return false;
        });
        var target = game.findPlayer(function (current) {
          return current.identity == 'zhu';
        });
        if (get.jy_nameCNBool(target, ['玄烨', '弘历'], true)) count = count * 2;
        var cards = player.getCards('he', function (card) {
          return lib.filter.cardDiscardable(card, player, event.name);
        });
        if (cards.length > count) {
          player.chooseToDiscard('he', true, count, lib.filter.cardDiscardable);
        } else {
          player.discard(cards);
        }
      }
    },
    jycj_danei_sha: {
      translate: '大内',
      translate2: '',
      translate_info: '',
      unique: true,
      filter(event, player) {
        if (player.identity != 'zhu') return false;
        if (
        !game.hasPlayer(function (current) {
          return current != player && current.group == player.group;
        }))

        return false;
        return !event.jycj_danei_sha && (event.type != 'phase' || !player.hasSkill('jycj_danei_sha3'));
      },
      enable: ['chooseToUse', 'chooseToRespond'],
      viewAs: { name: 'sha' },
      filterCard() {
        return false;
      },
      selectCard: -1,
      ai: {
        order() {
          return get.order({ name: 'sha' }) + 0.3;
        },
        respondSha: true,
        skillTagFilter(player) {
          if (player.identity != 'zhu') return false;
          if (
          !game.hasPlayer(function (current) {
            return current != player && current.group == player.group;
          }))

          return false;
        }
      }
    },
    jycj_danei_sha1: {
      translate: '大内',
      translate2: '',
      translate_info: '',
      trigger: { player: ['useCardBegin', 'respondBegin'] },
      logTarget: 'targets',
      filter(event, player) {
        return event.skill && event.skill == 'jycj_danei_sha';
      },
      forced: true,
      content() {
        'step 0';
        delete trigger.skill;
        trigger.parent.set('jycj_danei_sha', true);
        'step 1';
        if (event.current == undefined) event.current = player.next;
        if (event.current == player) {
          player.addTempSkill('jycj_danei_sha3', 'phaseUseEnd');
          event.finish();
          trigger.cancel();
          trigger.parent.goto(0);
        } else if (event.current.group == player.group) {
          var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张杀？', { name: 'sha' });
          next.set('ai', function () {
            var event = _status.event;
            return get.attitude(event.player, event.source) - 2;
          });
          next.set('source', player);
          next.set('jycj_danei_sha', true);
          next.set('skillwarn', '替' + get.translation(player) + '打出一张杀');
          next.noOrdering = true;
          next.autochoose = lib.filter.autoRespondSha;
        } else {
          event.current = event.current.next;
          event.redo();
        }
        'step 2';
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
      }
    },
    jycj_danei_sha3: {
      popup: false,
      priority: -100,
      lastDo: true,
      charlotte: true,
      nopop: true,
      unique: true,
      forced: true,
      translate: '大内',
      translate2: '',
      translate_info: ''
    },
    jycj_danei_shan: {
      translate: '大内',
      translate2: '',
      translate_info: '',
      unique: true,
      trigger: { player: ['chooseToRespondBefore', 'chooseToUseBefore'] },
      filter(event, player) {
        if (event.responded) return false;
        if (player.identity != 'zhu') return false;
        if (player.storage.jycj_danei_shan) return false;
        if (!event.filterCard({ name: 'shan' }, player, event)) return false;
        return game.hasPlayer(function (current) {
          return current != player && current.group == player.group;
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
        } else if (event.current.group == player.group) {
          if (event.current == game.me && !_status.auto || get.attitude(event.current, player) > 2 || event.current.isOnline()) {
            player.storage.jycj_danei_shan = true;
            var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张闪？', { name: 'shan' });
            next.set('ai', function () {
              var event = _status.event;
              return get.attitude(event.player, event.source) - 2;
            });
            next.set('skillwarn', '替' + get.translation(player) + '打出一张闪');
            next.autochoose = lib.filter.autoRespondShan;
            next.set('source', player);
          }
        }
        'step 1';
        player.storage.jycj_danei_shan = false;
        if (result.bool) {
          event.finish();
          trigger.result = { bool: true, card: { name: 'shan' } };
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
          if (player.identity != 'zhu') return false;
          if (player.storage.jycj_danei_shan) return false;
          return game.hasPlayer(function (current) {
            return current != player && current.group == player.group;
          });
        }
      }
    },
    //剑冢
    jycj_wufeng: {
      ai: { order: 10, result: { player: 1 } },
      color: 'wood',
      jy_changjin: true,
      translate: '无锋',
      translate2: '剑冢',
      translate_info: '场景技。剑冢。所有角色出牌阶段限一次，其可观看牌堆顶前四张牌并选择获得其中一张装备。依此法获得【屠龙刀】、【倚天剑】或【玄铁重剑】的角色于当前回合视为拥有技能〖无招〗。场景增益:武将名含杨过的角色只要获得剑类武器即可于当前回合拥有〖无招〗。',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        if (!ui.cardPile.hasChildNodes()) return false;
        return true;
      },
      content() {
        'step 0';
        var cardPile = Array.from(ui.cardPile.childNodes);
        cardPile = cardPile.slice(0, Math.min(cardPile.length, 4));
        var next = player.chooseCardButton(cardPile, 1, '选择获得一张装备牌');
        next.set('filterButton', function (button) {
          if (get.type(button.link) == 'equip') return true;
          return false;
        });
        next.set('ai', function (button) {
          var player = _status.event.player;
          var value = get.value(button.link, player);
          if (get.type(button.link) == 'equip' && player.hasEmptySlot(get.subtype(button.link))) return 3 * value;
          return value;
        });
        'step 1';
        if (result.bool && result.links) {
          player.gain(result.links, 'log', 'draw');
          var name = result.links[0].name;
          var str = get.translation(name);
          if (['jydiy_yitianjian', 'jydiy_xuantiezhongjian', 'jydiy_tulongdao'].includes(name)) {
            if (!player.hasSkill('jue_wuzhao')) {
              player.addTempSkills('jue_wuzhao');
            }
          } else if (str.includes('剑') && get.subtype(result.links[0]) == 'equip1' && get.jy_nameCNBool(player, '杨过', true)) {
            if (!player.hasSkill('jue_wuzhao')) {
              player.addTempSkills('jue_wuzhao');
            }
          }
        } else event.finish();
      }
    },
    //绿竹巷
    jycj_qingxin: {
      color: 'wood',
      jy_changjin: true,
      translate: '清心',
      translate2: '绿竹巷',
      translate_info: '◆<b>场景技。绿竹巷。锁定技，</b>一名角色的判定阶段开始时，进行一次【运功疗伤】判定。<br>增益角色：令狐冲、任盈盈、令狐冲任盈盈（判定两次）。',
      trigger: { player: 'phaseJudgeBegin' },
      forced: true,
      nameList: ['xajh_renyingying', 'xajh_linghuchong', 'xajh_linghuchongrenyinyin'],
      content() {
        'step 0';
        var next = game.createEvent('jycj_qingxin', false, trigger);
        next.player = player;
        next.setContent(lib.skill.jycj_qingxin.contenx);
        'step 1';
        if (get.jy_nameCNBool(player, ['令狐冲', '任盈盈', '令狐冲任盈盈'], true)) {
          var next = game.createEvent('jycj_qingxin', false, trigger);
          next.player = player;
          next.setContent(lib.skill.jycj_qingxin.contenx);
        }
      },
      contenx() {
        'step 0';
        event.card = { name: 'jydiy_yungongliaoshang' };
        var next = player.judge(event.card);
        next.card = event.card;
        next.judge = get.judge(event.card);
        next.judge2 = get.judge2(event.card);
        next.cardname = event.card.name;
        next.judgestr = get.translation(event.card.name);
        'step 1';
        var next = game.createEvent('jydiy_yungongliaoshang');
        next.setContent(lib.card.jydiy_yungongliaoshang.effect);
        next._result = result;
        next.card = event.card;
        next.cards = [];
        next.player = player;
      }
    },
    //雁门关
    jycj_biansheng: {
      trigger: { source: 'damageBegin1' },
      color: 'thunder',
      jy_changjin: true,
      translate: '边声',
      translate2: '雁门关',
      translate_info: '◆<b>场景技。雁门关。锁定技，</b>汉人角色和异族角色对对方造成的伤害+1。免疫角色:萧峰、乔峰、绝萧峰、乔峰阿朱。',
      banedList: ['tlbb_xiaofeng', 'tlbb_juexiaofeng', 'tlbb_qiaofengazhu', 'tlbb_qiaofeng'],
      filter(event, player) {
        if (player == event.player) return false;
        if (get.jy_nameCNBool(player, ['萧峰', '乔峰', '绝萧峰', '乔峰阿朱'], true)) return false;
        var group1 = get.jy_group(player);
        var group2 = get.jy_group(event.player);
        if (group1 == 'hanren' && group2 == 'yizu') return true;
        if (group2 == 'hanren' && group1 == 'yizu') return true;
        return false;
      },
      forced: true,
      content() {
        trigger.num++;
      },
      ai: {
        effect: {
          player(card, player, target, current, isLink) {
            if (!target) return;
            if (isLink) return;
            if (player == target) return;
            if (!get.tag(card, 'damage')) return;
            if (get.jy_nameCNBool(player, ['萧峰', '乔峰', '绝萧峰', '乔峰阿朱'], true)) return;
            if (
            target.hasSkillTag('filterDamage', null, {
              player: player,
              card: card
            }))

            return;
            var group1 = get.jy_group(player);
            var group2 = get.jy_group(target);
            if (group1 == 'hanren' && group2 == 'yizu') return [1, 0, 1, -1.5];
            if (group2 == 'hanren' && group1 == 'yizu') return [1, 0, 1, -1.5];
          }
        }
        /*
        damageBonus:true,
        skillTagFilter (player, tag, arg) {
            if(!arg) return false;
            if(!arg.target) return false;
            if(player==arg.target) return false;
            if(get.jy_nameCNBool(player,['萧峰','乔峰','绝萧峰','乔峰阿朱'],true)) return false;               
            var group1=get.jy_group(player);
            var group2=get.jy_group(arg.target);
            if(group1=='hanren'&&group2=='yizu') return true;
            if(group2=='hanren'&&group1=='yizu') return true;
            return false;   
        },
        */
      }
    },
    jycj_hanshu: {
      color: 'thunder',
      jy_changjin: true,
      translate: '寒暑',
      translate2: '冰火岛',
      translate_info: '◆<b>场景技。冰火岛。锁定技，</b>除张无忌、张翠山、谢逊、殷素素以外的角色不因本技能受到火焰/寒冰伤害后，其有65%的几率再受到等量无来源的寒冰/火焰伤害。',
      trigger: { player: 'damageAfter' },
      forced: true,
      banedList: ['yttl_yinsusu', 'yttl_zhangcuishan', 'yttl_xiexun', 'yttl_zhangwuji'],
      filter(event, player) {
        if (get.jy_nameCNBool(player, ['张无忌', '张翠山', '谢逊', '殷素素'], true)) return false;
        if (event.jycj_hanshu) return false;
        if (!event.hasNature('fire') && !event.hasNature('ice')) return false;
        var rand = Math.random();
        if (rand >= 0.65) return false;
        return event.num > 0;
      },
      content() {
        player.damage(trigger.num, trigger.hasNature('fire') ? 'ice' : 'fire', 'nocard', 'nosource').set('jycj_hanshu', true);
      }
    },
    //高昌迷宫
    jycj_mishi: {
      color: 'thunder',
      jy_changjin: true,
      translate: '迷失',
      translate2: '高昌迷宫',
      translate_info: '◆<b>场景技。高昌迷宫。锁定技，</b>除李文秀外，一名角色因弃置失去牌时，改为系统随机从其区域内选择要失去的牌。',
      trigger: { player: 'discardBefore' },
      forced: true,
      filter(event, player) {
        if (get.jy_nameCNBool(player, '李文秀', true)) return false;
        return event.cards.length;
      },
      content() {
        var num = trigger.cards.length;
        var evt = trigger.parent;
        var position = 'hej';
        if (evt.name == 'chooseToDiscard' || evt.name == 'discardPlayerCard') {
          position = evt.position || 'h';
        }
        var func = function (card) {
          return true;
        };
        if (evt.name == 'chooseToDiscard') {
          func = function (card) {
            return lib.filter.cardDiscardable(card, player, evt.parent.name);
          };
        } else if (evt.name == 'discardPlayerCard') {
          func = function (card) {
            return lib.filter.canBeDiscarded(card, evt.player, player);
          };
        }
        var list = player.getCards(position, func);
        var cardx = list.randomGets(num);
        if (cardx.length < num) return;
        trigger.cards = cardx;
        if (evt.name == 'chooseToDiscard') {
          evt.result.cards = cardx.slice(0);
        } else if (evt.name == 'discardPlayerCard') {
          evt.result.cards = cardx.slice(0);
          evt.result.links = cardx.slice(0);
        }
      }
    },
    jycj_neihong: {
      color: 'thunder',
      jy_changjin: true,
      translate: '内讧',
      translate2: '凌霄城',
      translate_info: '◆<b>场景技。凌宵成。锁定技，</b>所有角色不能抵消或响应同势力、同帮派角色的伤害类卡牌。',
      forced: true,
      trigger: { player: 'useCard' },
      filter(event, player) {
        var card = event.card;
        var type = get.type(card);
        if (type != 'trick' && type != 'basic') return false;
        if (['shan', 'tao', 'jiu', 'du'].includes(event.card.name)) return false;
        if (!get.tag(card, 'damage')) return false;
        return game.hasPlayer(function (current) {
          if (current == player) return false;
          if (current.group == player.group) return true;
          if (get.jy_bangpai) {
            var bp1 = get.jy_bangpai(player);
            var bp2 = get.jy_bangpai(current);
            for (var i of bp1) {
              if (bp2.includes(i)) return true;
            }
          }
          return false;
        });
      },
      content() {
        var targets = game.filterPlayer(function (current) {
          if (current == player) return false;
          if (current.group == player.group) return true;
          if (get.jy_bangpai) {
            var bp1 = get.jy_bangpai(player);
            var bp2 = get.jy_bangpai(current);
            for (var i of bp1) {
              if (bp2.includes(i)) return true;
            }
          }
          return false;
        });
        trigger.directHit.addArray(targets);
      },
      ai: {
        directHit_ai: true,
        skillTagFilter(player, tag, arg) {
          var target = arg.target;
          var card = arg.card;
          var type = get.type(card);
          if (type != 'trick' && type != 'basic') return false;
          if (['shan', 'tao', 'jiu', 'du'].includes(card.name)) return false;
          if (!get.tag(card, 'damage')) return false;
          if (target == player) return false;
          if (target.group == player.group) return true;
          if (get.jy_bangpai) {
            var bp1 = get.jy_bangpai(player);
            var bp2 = get.jy_bangpai(target);
            for (var i of bp1) {
              if (bp2.includes(i)) return true;
            }
          }
          return false;
        }
      }
    },
    jycj_mengyuan: {
      color: 'wood',
      jy_changjin: true,
      translate: '蒙冤',
      translate2: '杏子林',
      translate_info: '◆<b>场景技。杏子林。</b>所有角色的判定结果反转。',
      mod: {
        judge(player, result) {
          if (result.bool == false) {
            result.bool = true;
            game.log(player, '的判定结果反转');
          } else {
            result.bool = false;
            game.log(player, '的判定结果反转');
          }
        }
      }
    },
    jycj_wanjuan: {
      color: 'water',
      jy_changjin: true,
      translate: '万卷',
      translate2: '琅擐玉洞',
      //usable:1,
      translate_info: '<b>场景技。琅擐玉洞。</b>准备阶段开始时，你可以从秘籍牌库里获取一张秘籍牌的技能（不能与你上一次因此法获得的秘籍技能相同），直到回合结束。',
      //enable:'phaseUse',
      trigger: { player: 'phaseZhunbeiBegin' },
      frequent: true,
      content() {
        'step 0';
        if (!_status.jycj_wanjuan) _status.jycj_wanjuan = [];
        var inpile = lib.jy_mijiList.slice(0);
        if (_status.jycj_wanjuan[player.playerid]) inpile.remove(_status.jycj_wanjuan[player.playerid]);
        var text = '万卷：获得一张秘籍牌的技能，直到回合结束。';
        player.chooseVCardButton(true, inpile, text, 1).set('ai', function (button) {
          return Math.random();
        });
        'step 1';
        if (result.links?.length) {
          var name = result.links[0][2];
          _status.jycj_wanjuan[player.playerid] = name;
          var skills = get.info({ name: name }).skills;
          if (skills) {
            for (var i of skills) {
              player.addTempSkills(i);
            }
          }
        }
      },
      ai: { basic: { order: 12 }, result: { player: 1 } }
    },
    jycj_duoshuai: {
      color: 'fire',
      jy_changjin: true,
      translate: '夺帅',
      translate2: '封禅台',
      translate_info: '◆<b>场景技。封禅台。</b>当有角色因【比武】造成伤害后，其摸一张牌。',
      trigger: { source: 'damageEnd' },
      filter(event) {
        return event.card && event.card.name == 'juedou';
      },
      forced: true,
      content() {
        player.draw();
      }
    },
    jycj_juejiu: {
      color: 'fire',
      jy_changjin: true,
      translate: '绝酒',
      translate2: '聚贤庄',
      translate_info: '◆<b>场景技。聚贤庄。锁定技，</b>所有角色的酒【杀】令目标的非锁定技失效且不能抵消其使用的酒【杀】。',
      shaRelated: true,
      trigger: { player: 'useCardToPlayered' },
      filter(event, player) {
        return event.card.name == 'sha' && event.parent.jiu === true;
      },
      logTarget: 'target',
      forced: true,
      content() {
        if (!trigger.target.hasSkill('fengyin')) {
          trigger.target.addTempSkill('fengyin');
        }
        trigger.parent.directHit.add(trigger.target);
      },
      ai: {
        ignoreSkill: true,
        skillTagFilter(player, tag, arg) {
          if (!player.hasSkill('jiu')) return false;
          if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
          if (!arg.target) return false;
          if (tag == 'directHit_ai') {
            return true;
          }
          if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
        },
        directHit_ai: true
      }
    }
  };
  lib.jy_changJinList = [];
  for (var i in skill) {
    game.addSkill(i, skill[i], skill[i].translate, skill[i].translate_info);
    delete skill[i].translate;
    delete skill[i].translate_info;
    if (skill[i].jy_changjin) {
      lib.jy_changJinList.add(i);
      lib.card[i] = {
        fullskin: true,
        derivation: 'diy_card_jy_card_config',
        derivationpack: 'diy_card_jy',
        image: 'ext:金庸群侠传/image/equip/' + i + '.png'
      };
    }
  }
  lib.arenaReady.push(function () {
    /////////////往衍生牌堆塞 卡牌///////////////
    /*
    if(!lib.cardPack.mode_derivation){
        lib.cardPack.mode_derivation=[];
    };
    var list=lib.jy_changJinList.slice(0);
    lib.cardPack.mode_derivation.addArray(list);    
    */
    var list = lib.jy_changJinList.slice(0);
    var menu = lib.extensionMenu.extension_金庸群侠传.jy_changjingzizhu;
    for (var i of list) {
      menu.item[i] = lib.skill[i].translate2;
    }
    var cfg = lib.config.extension_金庸群侠传_jy_changjingzizhu;
    if (cfg && cfg != 'off') {
      _status.locked_jy_changjin = cfg;
    }
  });
});