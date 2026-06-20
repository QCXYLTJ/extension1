window.gl_load(function (lib, game, ui, get, ai, _status) {
  //增援技能
  var specialSkill = {
    //艾克斯
    gl_aikesi: {
      //单兵系
      gl_lianpo: {
        trigger: {
          global: 'phaseAfter'
        },
        forced: true,
        filter(event, player) {
          return player.getStat('kill') > 0;
        },
        content() {
          player.phase('nodelay');
        }
      },
      gl_xianfeng: {
        trigger: {
          global: 'phaseBefore',
          player: 'enterGame'
        },
        forced: true,
        filter(event, player) {
          return event.name != 'phase' || game.phaseNumber == 0;
        },
        content() {
          player.draw(3);
        }
      },
      gl_tuwei: {
        trigger: {
          player: 'die'
        },
        forced: true,
        forceDie: true,
        content() {
          'step 0';
          player.
          chooseTarget(get.prompt2('gl_tuwei'), function (card, player, target) {
            if (player == target) return false;
            return target.countDiscardableCards(player, 'he');
          }).
          set('forceDie', true).
          set('ai', function (target) {
            return -get.attitude(_status.event.player, target);
          });
          'step 1';
          if (result.bool) {

            player.discardPlayerCard(result.targets[0], 'hej', true, [1, 3]);
          }
        },
        ai: {
          expose: 0.5
        }
      },
      //团队系
      gl_lianhe: {
        zhuSkill: true,
        gl_wuzhuang: {
          name: 'gl_tonghuayuyi'
        },
        trigger: {
          player: 'phaseAfter'
        },
        filter(event, player) {
          if (
          !player.hasZhuSkill('gl_lianhe') ||
          !game.hasPlayer(function (current) {
            return current != player && current.group == player.group;
          }))

          return false;
          return true;
        },
        forced: true,
        content() {
          'step 0';
          player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
            return player != target && target.group == player.group;
          });
          'step 1';
          if (result.bool) {
            var target = result.targets[0];
            event.target = target;
            var skills = player.getSkills(false, false);
            var list = [];
            for (let i = 0; i < skills.length; i++) {
              var name = skills[i];
              if (lib.skill[name].fixed) continue;
              if (!lib.translate[name] || lib.translate[name].length == 0) continue;
              if (!lib.translate[name + '_info'] || lib.translate[name + '_info'].length == 0) {
                continue;
              }
              list.push(name);
            }
            list.remove('gl_lianjie');
            list.remove('gl_lianhe');
            if (list.length) {
              var next = player.chooseControl(list);
              next.dialog = lib.skill.gl_huimeng.getSkillDialog(list, '请选择要交给对方的技能');
            } else {
              event.finish();
            }
          } else {
            event.finish();
          }
          'step 2';
          target.addTempSkill(result.control, {
            player: 'phaseAfter'
          });
          target.popup(result.control, 'thunder');
          player.disableSkill('gl_lianhe', result.control);
          game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
        }
      }
    },
    //蕾娜
    gl_leina: {
      //概念系
      gl_qinhe: {
        trigger: {
          player: ['judgeBegin', 'drawBegin']
        },
        forced: true,
        silent: true,
        filter(event, player) {
          if (event.name == 'draw' && event.num >= ui.cardPile.childNodes.length) return false;
          return !event.directresult;
        },
        content() {
          var tempcard = false,
            temp = -Infinity;
          var cards = [];
          for (let i = 0; i < ui.cardPile.childElementCount; i++) {
            cards.push(ui.cardPile.childNodes[i]);
          }
          cards.sort(function (a, b) {
            if (trigger.name == 'judge') {
              return trigger.judge(b) - trigger.judge(a);
            } else {
              return get.value(b, player, 'raw') - get.value(a, player, 'raw');
            }
          });
          if (cards.length) {
            if (trigger.name == 'judge') {
              trigger.directresult = cards[0];
            } else {
              ui.cardPile.insertBefore(cards[0], ui.cardPile.firstChild);
            }
          }
        },
        ai: {
          luckyStar: true
        }
      },
      //强化系
      gl_tiaolv: {
        gl_wuzhuang: {
          name: 'gl_xiangtingwangguo',
          number: 1,
          suit: 'heart'
        },
        derivation: ['gl_xiangtingwangguo'],

        enable: 'phaseUse',
        content() {
          'step 0';
          event.players = game.filterPlayer();
          player.awakenSkill('gl_tiaolv');
          game.gl_cg('格林笔记/image/tiaolv.mp4');
          'step 1';
          game.animate.window(1);
          'step 2';
          if (event.players.length) {
            var target = event.players.shift();
            target.classList.remove('turnedover');
            target.classList.remove('linked');
            target.lose(target.getCards('hej'), ui.discardPile)._triggered = null;
            target.directgain(get.cards(4));
            target.changeHp(target.maxHp - target.hp);
            event.redo();
          }
          'step 3';
          game.animate.window(2);
        },
        group: 'gl_tiaolv_dying',
        subSkill: {
          dying: {
            trigger: {
              global: 'dying'
            },

            content() {
              player.useSkill('gl_tiaolv');
            }

          }
        }
      }
    },
    gl_aileina: {
      //献祭系
      gl_zaibian: {

        mark: true,
        enable: 'phaseUse',
        filter(event, player) {
          return !player.storage.gl_zaibian;
        },
        intro: {
          content: 'limited'
        },
        filterTarget(card, player, target) {
          return target.countCards('he');
        },
        content() {
          'step 0';
          player.awakenSkill('gl_zaibian');
          player.storage.gl_zaibian = true;
          event.cards = target.getCards('he');
          'step 1';
          if (event.cards.length) {
            var list = [];
            for (let i = 0; i < lib.inpile.length; i++) {
              var name = lib.inpile[i];
              var type = get.type(name);
              list.push([get.translation(type), '', name]);
              if (name == 'sha') {
                for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
              }
            }
            var dialog = ui.create.dialog('再编:请选择要宣言的牌名', 'hidden');
            var text = dialog.add('已宣言0张,将失去0点体力');
            dialog.add([list, 'vcard']);
            var next = player.chooseButton(dialog);
            next.forced = true;
            next.selectButton = [0, Infinity];
            next.set('filterButton', function (button, player) {
              if (ui.selected.buttons) {
                text.innerHTML = '已宣言' + ui.selected.buttons.length + '张,将失去' + Math.abs(event.cards.length - ui.selected.buttons.length) + '点体力';
                for (let i = 0; i < ui.selected.buttons.length; i++) {
                  if (button.link[2] == ui.selected.buttons[i].link[2]) return false;
                }
              }
              return true;
            });
          } else {
            event.finish();
          }
          'step 2';
          if (result.bool) {
            game.gl_cg('格林笔记/image/zaibian.mp4');
            event.links = result.links;
          }
          'step 3';
          target.discard(event.cards);
          var num = Math.abs(event.cards.length - event.links.length);
          if (num > 0) player.loseHp(num);
          'step 4';
          var cards = [];
          for (let i = 0; i < event.links.length; i++) {
            cards.push(
              game.createCard({
                name: event.links[i][2],
                nature: event.links[i][3]
              })
            );
          }
          target.gain(cards, 'gain2', 'log');
        }
      }
    },
    gl_famu: {
      //辅助系
      gl_tanbao: {
        enable: 'phaseUse',
        usable: 1,
        selectCard: [0, 1],
        filterTarget(card, player, target) {
          return target.countCards('e') > 0 && target != player;
        },
        position: 'he',
        selectTarget() {
          if (ui.selected.cards.length == 0) return [1, 1];
          return [0, 0];
        },
        filterCard: true,
        content() {
          'step 0';
          if (cards.length == 0) {
            player.gainPlayerCard(target, 'e', true);
            event.finish();
          } else {
            var list = [];
            for (let i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (get.type(node) == 'equip') {
                list.push(node);
              }
            }
            for (let i = 0; i < ui.discardPile.childElementCount; i++) {
              var node = ui.discardPile.childNodes[i];
              if (get.type(node) == 'equip') {
                list.push(node);
              }
            }
            player.chooseButton(true, ['探宝:请选择要获得的装备', list]);
          }
          'step 1';
          if (result.bool && result.links && result.links.length) {
            player.gain(result.links, 'gain2');
          }
        },
        ai: {
          order: 9.5,
          result: {
            player: 1
          }
        }
      },
      gl_yuhe: {
        trigger: {
          player: 'phaseZhunbeiBegin'
        },
        forced: true,
        filter(event, player) {
          if (!player.gl_mp) return false;
          if (player.gl_mp < 2) return false;
          return true;
        },
        content() {
          'step 0';
          player.chooseTarget(get.prompt2(event.name));
          'step 1';
          if (result.bool) {
            player.gl_changeMp(-2);
            var target = result.targets[0];
            event.target = target;

            var controls = ['摸两张牌'];
            if (target.maxHp > target.hp) {
              controls.push('回复体力');
            }
            if (target.countCards('j')) {
              controls.push('弃置判定牌');
            }
            if (target.isLinked() || target.isTurnedOver()) {
              controls.push('重置武将牌');
            }
            if (controls.length == 1) {
              target.draw(2);
              event.finish();
            } else {
              target.chooseControl(controls).set('prompt', '请选择以下一项执行');
            }
          } else {
            event.finish();
          }
          'step 2';
          switch (result.control) {
            case '回复体力':
              target.recover();
              break;
            case '摸两张牌':
              target.draw(2);
              break;
            case '重置武将牌':
              target.turnOver(false);
              target.link(false);
              break;
            case '弃置判定牌':
              target.discard(target.getCards('j'));
              break;
          }
        }
      }
      //控制系
    },
    gl_aida: {
      //守御系
      gl_shouhu: {
        trigger: {
          global: 'damageBegin4'
        },
        logTarget: 'player',
        forced: true,
        content() {
          'step 0';
          player.chooseToDiscard(get.prompt2(event.name), 'h');
          'step 1';
          if (result.bool) {

            if (trigger.player.hp <= player.hp) {
              player.draw();
            }
            trigger.player = player;
          }
        }
      },
      //反击系
      gl_guishi: {
        trigger: {
          player: 'damageEnd'
        },
        filter(event, player) {
          if (!player.gl_mp) return false;
          if (player.gl_mp < 2) return false;
          if (get.itemtype(event.cards) != 'cards') return false;
          if (get.position(event.cards[0], true) != 'o') return false;
          return true;
        },
        content() {
          player.gl_changeMp(-2);
          player.gain(trigger.cards, 'gain2').gaintag.add('gl_guishi');
        },
        mod: {
          targetInRange(card, player, target, now) {
            if (get.itemtype(card) == 'card' && card.hasGaintag('gl_guishi')) return true;
            if (card.cards && card.cards.length == 1 && card.cards[0].hasGaintag('gl_guishi')) return true;
          },
          cardUsable(card, player, num) {
            if (card.cards && card.cards.length == 1 && card.cards[0].hasGaintag('gl_guishi')) return Infinity;
          }
        }
      }
    },
    gl_ailuoweisi: {
      //强攻系
      gl_congjian: {
        enable: 'phaseUse',
        usable: 1,
        position: 'he',
        filterCard: true,
        selectCard: [1, Infinity],
        prompt: '弃置任意张牌并获得等量的【杀】',
        check(card) {
          return 6 - get.value(card);
        },
        content() {
          var sceer = function (num) {
            if (num == 0) return [];
            var list = [];
            for (let i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'sha') {
                list.push(node);
              }
              if (list.length == num) return list;
            }
            for (let i = 0; i < ui.discardPile.childElementCount; i++) {
              var node = ui.discardPile.childNodes[i];
              if (node.name == 'sha') {
                list.push(node);
              }
              if (list.length == num) return list;
            }
            if (list.length == num) return list;
          };
          player.gain(sceer(cards.length), 'gain2', 'log');
        },
        ai: {
          order: 1,
          result: {
            player: 1
          },
          threaten: 1.5
        }
      },
      gl_jiqi: {
        trigger: {
          player: 'phaseDrawBegin'
        },
        content() {
          trigger.cancel();
          var card = get.cardPile('sha');
          if (card) {
            player.gain(card, 'gain2', 'log');
          }
          player.addTempSkill('gl_jiqi_damage');
        },
        subSkill: {
          damage: {
            trigger: {
              source: 'damageBegin1'
            },
            filter(event, player) {
              return event.card && event.card.name == 'sha' && event.notLink();
            },
            content() {
              trigger.num++;
            },
            ai: {
              damageBonus: true
            },

            forced: true,
            charlotte: true
          }
        }
      },
      gl_suoji: {
        trigger: {
          player: 'useCardToPlayered'
        },
        filter(event, player) {
          return event.card && event.card.name == 'sha';
        },
        forced: true,
        content() {
          'step 0';
          player.chooseControl('不可响应', '技能失效', 'cancel2').set('prompt', get.prompt(event.name));
          'step 1';
          if (result.control == '不可响应') {
            trigger.parent.directHit.add(trigger.target);
          }
          if (result.control == '技能失效') {
            if (!trigger.target.hasSkill('fengyin')) {
              trigger.target.addTempSkill('fengyin');
            }
          }
        }
      },
      gl_qipo: {
        trigger: {
          player: 'damageBegin2'
        },
        filter(event, player) {
          return event.card && event.card.name == 'sha' && !player.inRange(event.player) && event.player.countDiscardableCards(player, 'he');
        },
        forced: true,
        content() {
          player.discardPlayerCard('he', trigger.player, true);
          trigger.num--;
        },
        mod: {
          targetInRange(card) {
            if (card.name == 'sha') return true;
          }
        }
      },
      gl_huashi: {
        trigger: {
          player: 'phaseZhunbeiBegin'
        },
        filter(event, player) {
          if (!player.gl_mp) return false;
          if (player.gl_mp < 2) return false;
          return true;
        },
        forced: true,
        content() {
          'step 0';
          var list = [];
          for (let i = 0; i < ui.cardPile.childElementCount; i++) {
            var node = ui.cardPile.childNodes[i];
            if (get.subtype(node) == 'equip1') {
              list.push(node);
            }
          }
          for (let i = 0; i < ui.discardPile.childElementCount; i++) {
            var node = ui.discardPile.childNodes[i];
            if (get.subtype(node) == 'equip1') {
              list.push(node);
            }
          }
          player.chooseButton([get.prompt(event.name), list]);
          'step 1';
          if (result.bool) {
            player.gl_changeMp(-2);
            player.gain(result.links, 'gain2');
          }
        }
      }
      //压制系
    },
    gl_sade: {
      //迷踪系
      gl_qianxi: {
        trigger: {
          global: 'phaseAfter'
        },
        filter(event, player) {
          return player.getHistory('damage').length == 0 && player.getHistory('sourceDamage').length == 0;
        },
        content() {
          player.$hideCharacter(2);
        },
        group: 'gl_qianxi_mingzhi',
        subSkill: {
          mingzhi: {
            trigger: {
              player: ['useCard', 'respond']
            },
            gl_mingzhi: true,
            forced: true,
            content() {
              player.showCharacter(2);
            }
          }
        }
      },
      gl_qieqv: {
        trigger: {
          player: 'showCharacterAfter'
        },
        forced: true,
        filter(event, player) {
          if (!player.gl_mp) return false;
          if (player.gl_mp < 2) return false;
          return event.toShow && event.toShow.includes('gl_sade');
        },
        hiddenSkill: true,
        content() {
          'step 0';
          player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
            return target.countGainableCards(player, player == target ? 'ej' : 'hej') > 0;
          });
          'step 1';
          if (result.bool) {
            player.gl_changeMp(-2);
            var target = result.targets[0];

            player.gainPlayerCard(player == target ? 'ej' : 'hej', target, true);
          }
        }
      }
      //爆发系
    },
    gl_kali: {
      //抵抗系
      gl_fuyin: {
        trigger: {
          player: 'phaseBefore'
        },
        _priority: 101,
        firstDo: true,
        filter(event, player) {
          var skill = player.getSkills();
          for (let i = 0; i < skill.length; i++) {
            var info = lib.skill[skill[i]];
            if (info.debuff) return true;
          }
          if (player.isLinked()) return true;
          if (player.isTurnedOver()) return true;
          if (player.countCards('j')) return true;
          return false;
        },
        content() {
          var num = 0;
          var skill = player.getSkills();
          for (let i = 0; i < skill.length; i++) {
            var info = lib.skill[skill[i]];
            if (info.debuff) {
              player.gl_changeBuff(skill[i], true);
              num++;
            }
          }
          if (player.isLinked()) {
            player.link();
            num++;
          }
          if (player.isTurnedOver()) {
            player.turnOver();
            num++;
          }
          var js = player.getCards('j');
          num += js.length;
          player.discard(js);
          if (num > 1) {
            player.draw(2);
          }
        },
        ai: {
          noturn: true,
          effect: {
            target(card) {
              if (card.name == 'tiesuo') return 'zeroplayertarget';
              if (get.type(card) == 'delay') return 'zeroplayertarget';
            }
          }
        }
      },
      gl_wuhua: {
        trigger: {
          player: 'phaseJieshuBegin'
        },
        forced: true,
        content() {
          'step 0';
          var list = [];
          for (let i = 0; i < lib.inpile.length; i++) {
            var type = get.type2(lib.inpile[i]);
            list.push([get.translation(type), '', lib.inpile[i]]);
          }
          player.chooseButton([get.prompt('gl_wuhua'), [list, 'vcard']]);
          'step 1';
          if (result.bool) {

            player.storage.gl_wuhua = result.links[0][2];
            player.addTempSkill('gl_wuhua_use', {
              player: 'phaseBegin'
            });
          }
        },
        subSkill: {
          use: {
            trigger: {
              global: 'useCard'
            },
            filter(event, player) {
              return event.card && event.card.name == player.storage.gl_wuhua;
            },
            charlotte: true,
            forced: true,
            content() {
              trigger.cancel();
              player.removeSkill('gl_wuhua_use');
              player.$hideCharacter(2);
              player.addTempSkill('qianxing', {
                player: 'showCharacterAfter'
              });
            },
            ai: {
              threaten: 1.8,
              expose: 0.3
            }
          }
        }
      },
      //连击系
      gl_xinsheng: {
        trigger: {
          global: 'phaseUseBegin'
        },
        filter(event, player) {
          if (!player.gl_mp) return false;
          if (player.gl_mp < 2) return false;
          return event.player.countCards('h') && event.player != player;
        },
        check(event, player) {
          return get.attitude(player, event.player) < 0;
        },
        content() {
          'step 0';
          player.gl_changeMp(-2);
          var list = ['置于牌堆顶', '置入弃牌堆'];
          var dialog = ui.create.dialog('心声', 'hidden');
          var table = document.createElement('div');
          table.classList.add('add-setting');
          table.style.margin = '0';
          table.style.width = '100%';
          table.style.position = 'relative';
          for (let i = 0; i < list.length; i++) {
            if (player.isDisabled(i)) continue;
            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
            td.innerHTML = '<span>' + list[i] + '</span>';
            td.link = i;
            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
            Object.setPrototypeOf(td, lib.element.Button.prototype); //QQQ
            table.appendChild(td);
            dialog.buttons.add(td);
          }
          dialog.content.appendChild(table);
          dialog.add(trigger.player.getCards('h'));
          var next = player.chooseButton(dialog, 2, true);
          next.filterButton = function (button) {
            if (ui.selected.buttons.length && typeof ui.selected.buttons[0].link == 'number') {
              return typeof button.link == 'object';
            }
            return true;
          };
          'step 1';
          if (result.bool) {
            var cards = [],
              index = 2;
            for (const i of result.links) {
              if (typeof i == 'object') {
                cards.push(i);
              } else {
                index = i;
              }
            }
            if (index == 0 || index == 2) {
              var card = cards.shift();
              trigger.player.lose(card, 'insert', ui.cardPile);
              game.log(player, '将一张牌置于牌堆顶');
              game.updateRoundNumber();
              player.turnOver(true);
            }
            if (index == 1 || index == 2) {
              var card = cards.shift();
              trigger.player.$throw(card, 1000);
              trigger.player.lose(card, ui.discardPile, 'visible');
              game.log(player, '将', card, '置入弃牌堆');
              player.link(true);
            }
            if (index == 2) {
              player.$hideCharacter(2);
            }
          }
        }
      }
    },
    translate: {
      gl_lianpo: '连破',
      gl_lianpo_info: '当有角色的回合结束时,若你本回合内击杀过角色,则你可以进行一个额外的回合',
      gl_xianfeng: '先锋',
      gl_xianfeng_info: '游戏开始时,你可以摸三张牌',
      gl_tuwei: '突围',
      gl_tuwei_info: '当你阵亡时,你可以弃置一名其他角色区域内至多三张牌',
      gl_lianhe: '联合',
      gl_lianhe_info: '武装技——「童话羽翼」,主公技,你的回合结束后,你可以选择1名与你势力相同的其他角色,选择1项技能废除并令其获得那项技能直至其的下个回合结束为止',
      gl_tiaolv: '调律',
      gl_tiaolv_info: '武装技——「箱庭王国」,限定技,出牌阶段或当有角色濒死时,你可以令场上所有角色重置武将牌并弃置区域内所有牌,那之后摸4张牌并将体力值回复至体力上限',
      gl_congjian: '从剑',
      gl_congjian_info: '出牌阶段一次,你可以弃置任意张牌并获得等量的【杀】',
      gl_tanbao: '探宝',
      gl_tanbao_info: '出牌阶段限一次,你可以获得其他角色装备区内1张牌;此技能发动时,你可以弃置1张牌改为从牌堆、弃牌堆获得',
      gl_zaibian: '再编',
      gl_zaibian_info: '限定技,出牌阶段,你可以令1名角色弃置区域内所有牌,随后你依次宣言任意种牌名,那之后,你失去X点体力并令其从游戏外获得对应的牌.(X为其因此弃置牌数与你宣言牌数的差值)',
      gl_shouhu: '守护',
      gl_shouhu_info: '每轮限一次,当有角色受到伤害时,你可以弃置1张手牌代替其承受之,若其的体力值不小于你,你摸1张牌',
      gl_qianxi: '潜息',
      gl_qianxi_info: '当有角色的回合结束后,若你于此回合内没有造成或受到过伤害,则你可以隐匿你的武将牌;明置技,锁定技,当你使用或打出牌时,你明置你的武将牌',
      gl_jiqi: '集气',
      gl_jiqi_info: '摸牌阶段开始时,你可以放弃摸牌改为获得1张【杀】,直至此回合结束为止你【杀】的伤害+1',
      gl_suoji: '锁击',
      gl_suoji_info: '当你使用【杀】指定目标后,若你与其的距离为1,则你可以执行以下一项:1,其的非锁定技失效;2,此杀不可响应',
      gl_qipo: '气魄',
      gl_qipo_info: '锁定技,当你使用【杀】造成伤害时,若其不在你的攻击范围内,则你弃置其1张牌并令此伤害-1;你的【杀】没有距离限制',
      gl_qinhe: '亲和',
      gl_qinhe_info: '锁定技,今天是幸运的一天,你应该唱首小幸运',
      gl_wuhua: '雾化',
      gl_wuhua_info: '回合结束后,你可以暗记1种牌名,直至你的下个回合开始为止,当有角色使用你记录的牌名时,那张牌无效之,随后你隐匿武将牌并进入潜行状态直至登场为止',
      gl_guishi: '玫矢',
      gl_guishi_info: '当你受到伤害后,你可以消耗2点魔力,获得对你造成伤害的牌;锁定技,你使用以此法获得的牌没有次数与距离限制',
      gl_yuhe: '愈合',
      gl_yuhe_info: '准备阶段开始时,你可以消耗2点魔力,令1名角色选择以下一项执行:1,摸2张牌;2,回复1点体力;3,重置武将牌;4,弃置判定区内所有牌',
      gl_huashi: '花饰',
      gl_huashi_info: '准备阶段开始时,你可以消耗2点魔力,从牌堆、弃牌堆获得任意1张武器牌',
      gl_xinsheng: '心声',
      gl_xinsheng_info: '其他角色出牌阶段开始时,你可以消耗2点魔力,观看其的手牌并执行以下一项:1,将其中1张牌置于牌堆顶并翻至背面;2,将其中1张牌置入弃牌堆并横置;背水:隐匿你的武将牌',
      gl_qieqv: '窃取',
      gl_qieqv_info: '隐匿技,当你登场时,你可以消耗2点魔力,获得1名角色区域内1张牌'
    }
  };
  lib.gl_skillList = {};
  for (var name in specialSkill) {
    if (name == 'translate') continue;
    lib.gl_skillList[name] = [];
    for (var skill in specialSkill[name]) {
      lib.gl_skillList[name].push(skill);
      game.addSkill(skill, specialSkill[name][skill], specialSkill.translate[skill], specialSkill.translate[skill + '_info']);
    }
  }
  var list = {
    skill: {
      gl_shanqvan: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget(event, player, target) {
          return player != target && target.countCards('hej');
        },
        content() {
          'step 0';
          player.gain(target.getCards('hej'), target, 'giveAuto');
          'step 1';
          player.showHandcards();
          var cards = player.getCards('h');
          var list = [];
          for (let i = 0; i < cards.length; i++) {
            if (!list.includes(cards[i].suit)) {
              list.push(cards[i].suit);
            }
          }
          player.damage(list.length, target);
        }
      },
      gl_huanyi: {
        mod: {
          gl_speed(player, num) {
            return num + player.getDamagedHp();
          }
        }
      },
      gl_duwu: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return player.countCards('h');
        },
        content() {
          'step 0';
          var cards = player.getCards('h');
          player.addGaintag(cards, 'gl_duwu');
          player.addTempSkill('gl_duwu_dying');
          'step 1';
          var cards = player.getCards('hs', function (card) {
            return card.hasGaintag('gl_duwu');
          });
          if (cards.length) {
            if (player.hasUseTarget('sha')) {
              player.chooseUseTarget(true, false, {
                name: 'sha'
              }).cards = [cards[0]];
            }
            event.redo();
          }
          'step 2';
          player.removeSkill('gl_duwu_dying');
        },
        subSkill: {
          dying: {
            trigger: {
              global: 'dying'
            },
            filter(event, player) {
              return event.player != player;
            },
            charlotte: true,
            content() {
              player.loseHp();
              player.chooseToDiscard(2, true);
            },

            forced: true
          }
        }
      },
      gl_zhoufu: {
        trigger: {
          player: 'useCardToPlayered'
        },
        filter(event, player) {
          var type = get.type(event.card);
          if (type == 'basic') return false;
          if (!event.targets) return false;
          if (!event.isFirstTarget) return false;
          if (event.targets.length > player.hp) return false;
          return game.hasPlayer(function (target) {
            return event.targets.includes(target) && !target.isLinked();
          });
        },
        prompt(event) {
          return '是否将' + get.translation(event.targets) + '横置？';
        },
        content() {
          player.line(trigger.targets, 'thunder');
          for (let i = 0; i < trigger.targets.length; i++) {
            trigger.targets[i].link(true);
          }
        },
        group: ['gl_zhoufu_use'],
        subSkill: {
          use: {
            trigger: {
              player: 'useCard2'
            },
            forced: true,
            filter(event, player) {
              var type = get.type(event.card);
              if (type != 'basic') return false;
              return game.hasPlayer(function (target) {
                if (!target.isLinked()) return false;
                if (event.targets.includes(target)) return false;
                return lib.filter.targetEnabled2(event.card, player, target);
              });
            },
            content() {
              var targets = game.filterPlayer(function (target) {
                if (!target.isLinked()) return false;
                if (trigger.targets.includes(target)) return false;
                return lib.filter.targetEnabled2(trigger.card, player, target);
              });
              trigger.targets.addArray(targets);
            }

          }
        }
      },
      gl_guishao: {

        limited: true,
        mark: true,
        init(player, skill) {
          player.storage[skill] = false;
        },
        trigger: {
          source: 'damageEnd'
        },
        filter(event, player) {
          if (event.nature != 'fire') return false;
          return !player.storage.gl_guishao;
        },
        logTarget: 'player',
        intro: {
          content: 'limited'
        },
        content() {
          player.awakenSkill('gl_guishao');
          player.storage.gl_guishao = true;
          player.storage.gl_guishao_buff = trigger.player;
          player.addTempSkill('gl_guishao_buff');
          trigger.player.draw(3);
        },
        group: 'gl_guishao_huogong',
        subSkill: {
          buff: {

            charlotte: true,
            mod: {
              targetInRange(card, player, target, now) {
                if (target == player.storage.gl_guishao_buff) return true;
              },
              cardUsableTarget(card, player, target) {
                if (player.storage.gl_guishao_buff && player.storage.gl_guishao_buff.includes(target)) return true;
              }
            }
          },
          huogong: {
            enable: 'chooseToUse',
            viewAs: {
              name: 'huogong'
            },
            filter(event, player) {
              return player.countCards('hes');
            },
            filterCard: true,
            position: 'hes',
            prompt: '将一张牌当【火攻】使用',
            check(card) {
              var player = _status.currentPhase;
              if (player.countCards('h') > player.hp) {
                return 6 - get.value(card);
              }
              return 3 - get.value(card);
            }
          }
        }
      },
      gl_cannue: {
        trigger: {
          global: 'dying'
        },
        filter(event, player) {
          return _status.currentPhase == player;
        },
        forced: true,
        content() {
          trigger.player.recover();
          player.draw();
        }
      },
      gl_shishang: {
        trigger: {
          player: 'damageBegin2'
        },
        forced: true,
        content() {
          'step 0';
          var cards = [];
          for (let i = 0; i < ui.discardPile.childNodes.length; i++) {
            cards.push(ui.discardPile.childNodes[i]);
          }
          player.chooseButton(['是否发动【嗜伤】？', cards]);
          'step 1';
          if (result.bool && result.links && result.links.length) {
            player.gain(result.links, 'gain2', 'log');
            event.card = result.links[0];
            trigger.num++;

            if (trigger.num >= player.hp) {
              player.addSkill('gl_shishang_damage');
              player.storage.gl_shishang_damage++;
            }
          }
        },
        subSkill: {
          damage: {
            trigger: {
              source: 'damageBegin2'
            },
            init(player) {
              if (!player.storage.gl_shishang_damage) {
                player.storage.gl_shishang_damage = 0;
              }
            },
            forced: true,
            popup: false,
            content() {
              trigger.num += player.storage.gl_shishang_damage;
              player.storage.gl_shishang_damage = 0;
              player.removeSkill('gl_shishang_damage');
            }

          }
        }
      },
      gl_fengkuang: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
          return player != target;
        },
        filter(event, player) {
          return player.countCards('h') > 0;
        },
        selectTarget: -1,
        filterCard: true,
        selectCard: -1,
        discard: false,
        lose: false,
        delay: false,
        multitarget: true,
        multiline: true,
        content() {
          player.useCard(
            {
              name: 'sha'
            },
            cards,
            targets
          );
        },
        ai: {
          order: 1,
          result: {
            player: 1
          }
        }
      },
      gl_moxiao: {
        init(player, skill) {
          player.addFellow('gl_dahuilang');
        },
        trigger: {
          source: 'damageSource'
        },
        forced: true,
        content() {
          'step 0';
          event.cards = get.cards(5);
          player.chooseButton(['魔哮:请选择一张牌获得之', event.cards], true);
          'step 1';
          if (result.bool && result.links && result.links.length) {
            player.gain(result.links);
            event.cards.remove(result.links[0]);
            player.$throw(event.cards, 1000);
            player.lose(event.cards, ui.discardPile, 'visible');
            game.log(player, '将', event.cards, '置入弃牌堆');
          }
        }
      },
      gl_menggong: {
        trigger: {
          player: 'shaMiss'
        },
        forced: true,
        filter(event, player) {
          return event.target.isAlive();
        },
        content() {
          player.loseHp();
          trigger.untrigger();
          trigger.trigger('shaHit');
          trigger._result.bool = false;
          trigger._result.result = null;
        }
      },
      gl_fengbi: {
        trigger: {
          player: 'damageBefore'
        },
        filter(event, player) {
          return _status.currentPhase == player;
        },
        forced: true,
        content() {
          trigger.cancel();
        },
        mod: {
          cardEnabled2(card, player) {
            if (_status.currentPhase == player) return;
            if (get.position(card) == 'h') return false;
          }
        }
      },
      // 将弃牌堆至多3张牌交给你的本体
      gl_canjiao: {
        trigger: {
          player: 'dieBefore'
        },
        filter(event, player) {
          return player.boss?.isIn();
        },
        forced: true,
        async content(event, trigger, player) {
          const cards = Array.from(ui.discardPile.childNodes);
          const { links } = await player.
          chooseButton(['将弃牌堆至多3张牌交给你的本体', cards], [1, 3]).
          set('ai', (button) => get.value(button.link)).forResult();
          if (links?.length) {
            player.boss.gain(links, 'gain2');
          }
        } //QQQ
      },
      gl_cuifeng: {
        trigger: {
          global: 'phaseBefore'
        },
        _priority: 8,
        filter(event, player) {
          if (event.player == player) return false;
          return player.gl_mp && player.gl_mp >= 5;
        },
        content() {
          player.gl_changeMp(-5);
          trigger.player = player;
        }
      },
      gl_yongjian: {
        trigger: {
          source: 'damageSource'
        },
        filter(event, player) {
          return _status.currentPhase == player;
        },
        content() {
          player.loseHp();
          var stat = player.getStat();
          for (var i in stat.skill) {
            var bool = false;
            var info = lib.skill[i];
            if (!info) continue;
            if (info.enable != undefined) {
              if (typeof info.enable == 'string' && info.enable == 'phaseUse') bool = true;else
              if (typeof info.enable == 'object' && info.enable.includes('phaseUse')) bool = true;
            }
            if (bool) stat.skill[i] = 0;
          }
          for (var i in stat.card) {
            var bool = false;
            var info = lib.card[i];
            if (!info) continue;
            if (info.updateUsable == 'phaseUse') stat.card[i] = 0;
          }
        }
      },
      gl_jiandun: {
        trigger: {
          player: 'damageBegin4'
        },
        forced: true,
        content() {
          player.changeHujia();
        },
        group: 'gl_jiandun_phase',
        subSkill: {
          phase: {
            trigger: {
              global: 'phaseAfter'
            },
            forced: true,
            filter(event, player) {
              if (event.player == player) return false;
              var history = player.getHistory('damage', function (evt) {
                if (evt.hujia) return evt.num > evt.hujia;
                return evt.num > 0;
              });
              return history.length;
            },
            content() {
              player.phase('nodelay');
            }
          }
        }
      },
      gl_aiyu: {
        trigger: {
          source: ['damageBegin2', 'damageEnd']
        },
        filter(event, player, name) {
          if (event.player == player) return false;
          if (!event.player.isAlive()) return false;
          if (name == 'damageBegin2' && event.player.hasSex('female')) return true;
          if (name == 'damageEnd' && event.player.hasSex('male')) return player.countCards('he');
          return false;
        },
        forced: true,
        content() {
          'step 0';
          if (event.triggername == 'damageBegin2') {
            player.chooseBool(get.prompt(event.name));
          }
          if (event.triggername == 'damageEnd') {
            player.chooseToDiscard(2, 'he', get.prompt(event.name));
          }
          'step 1';
          if (result.bool) {
            if (event.triggername == 'damageBegin2') {

              player.loseHp();
              trigger.num++;
              trigger.nature = 'fire';
            }
            if (event.triggername == 'damageEnd') {

              player.recover();
              trigger.player.recover();
            }
          }
        }
      },
      gl_binghua: {
        trigger: {
          global: 'loseAfter'
        },
        filter(event, player) {
          if (event.player == player) return false;
          return event.type == 'discard';
        },
        _priority: 5,
        forced: true,
        content() {
          'step 0';
          player.gain(trigger.cards, 'gain2', 'log');
          'step 1';
          if (player.isMaxHandcard(true)) {
            player.loseHp();
          }
        }
      },
      gl_changye: {
        enable: 'phaseUse',
        filterTarget(card, player, target) {
          if (!target.hasSkill('baiban')) return true;
          if (target.countCards('he') > 0) return true;
          return false;
        },
        filter(event, player) {
          if (!player.gl_mp) return false;
          if (player.gl_mp < 2) return false;
          return player.countDisabled() < 5;
        },
        content() {
          'step 0';
          event.cards = player.getCards('e');
          player.gl_changeMp(-2);
          player.chooseToDisable();
          'step 1';
          event.control = result.control;
          target.addTempSkill('baiban');
          player.discardPlayerCard(target, 'he', true);
          'step 2';
          if (Array.isArray(event.cards)) for (const i of event.cards) {
            if (get.subtype(i) == event.control) {
              player.draw();
              break;
            }
          }
        }
      },
      gl_dengji: {
        trigger: {
          player: ['loseAfter', 'damageAfter']
        },
        usable: 1,
        filter(event, player) {
          if (event.name == 'lose') return event.type = 'discard' && !player.isMaxHp() && player.getDamagedHp() != 0;
          return !player.isMaxHandcard();
        },
        content() {
          if (event.name == 'lose') {
            var num = 0;
            for (const i of game.players) {
              if (i.hp > num) num = i.hp;
            }
            player.recover(num - player.hp);
          } else {
            var num = 0;
            for (const i of game.players) {
              if (i.countCards('h') > num) num = i.countCards('h');
            }
            player.draw(num - player.countCards('h'));
          }
        }
      },
      gl_shinue: {
        enable: 'phaseUse',
        usable: 1,
        viewAs: {
          name: 'shuiyanqijunx'
        },
        filterCard() {
          return false;
        },
        selectCard: -1,
        selectTarget: 1,
        prompt: '视为使用一张【水淹七军】',
        check(card) {
          return 15 - get.value(card);
        },
        group: 'gl_shinue_damage',
        subSkill: {
          damage: {
            trigger: {
              source: 'damageEnd'
            },
            forced: true,
            filter(event, player) {
              return event.parent.skill == 'gl_shinue';
            },
            popup: false,
            content() {
              'step 0';
              player.chooseDrawRecover(2);
              'step 1';
              if (result.control == 'draw_card') {
                trigger.player.draw(2);
              } else {
                trigger.player.recover();
              }
            }

          }
        }
      },
      gl_sangzhi: {
        trigger: {
          player: ['damageBegin4', 'phaseDrawBegin2', 'useCardToPlayer']
        },
        forced: true,
        content() {
          if (trigger.name == 'damage') {
            trigger.num++;
          } else if (trigger.name == 'phaseDraw') {
            trigger.num--;
          } else if (trigger.target) {
            trigger.target.addTempSkill('gl_sangzhi', {
              player: ['damageEnd', 'phaseAfter']
            });
          }
        }
      }
    },
    translate: {
      gl_shanqvan: '擅权',
      gl_shanqvan_info: '出牌阶段限一次,你可以获得一名其他角色区域内的所有牌,那之后,你展示手牌,其中每有一种花色的牌,其便对你造成一点伤害',
      gl_huanyi: '幻翼',
      gl_huanyi_info: '锁定技,场上所有角色的速度+X.(X为其的体力上限*2-其的体力值与手牌数)',
      gl_duwu: '黩武',
      gl_duwu_info: '出牌阶段限一次,你可以将所有的手牌依次当【杀】使用,结算过程中,每有一名其他角色濒死你便失去1点体力并弃置两张牌',
      gl_zhoufu: '咒缚',
      gl_zhoufu_info: '当你使用非基本牌指定不大于X名角色为目标时,你可以将这些角色横置;锁定技,你使用的基本牌会将场上被横置的角色也变为额外目标.(X为你当前的体力值)',
      gl_guishao: '鬼烧',
      gl_guishao_info: '你可以将1张牌当【火攻】使用;限定技,当你造成火焰伤害后,你可以令对方摸3张牌且对其使用牌无视次数与距离限制直至本回合结束为止',
      gl_shishang: '嗜伤',
      gl_shishang_info: '当你即将受到伤害时,你可以获得弃牌堆中的1张牌并令此伤害+1,若此伤害为致命伤害,则额外令你下次造成的伤害+1',
      gl_cannue: '残虐',
      gl_cannue_info: '锁定技,当有角色于你的回合内陷入濒死状态时,其回复一点体力且你摸一张牌',
      gl_fengbi: '封闭',
      gl_fengbi_info: '锁定技,你的回合内,你免疫所有伤害;你的回合外,你不能使用或打出手牌',
      gl_moxiao: '魔哮',
      gl_moxiao_info: '侍从技,当你造成伤害后,你可以观看牌堆顶5张牌,获得其中一张牌随后弃置剩余的牌',
      gl_fengkuang: '疯狂',
      gl_fengkuang_info: '出牌阶段限一次,你可以将所有手牌当做【杀】对除你以外的所有角色使用',
      gl_canjiao: '残叫',
      gl_canjiao_info: '当你即将牺牲时,你可以将弃牌堆至多3张牌交给你的本体',
      gl_menggong: '猛攻',
      gl_menggong_info: '当你的杀被闪响应时,你可以失去一点体力令那张杀依旧造成伤害',
      gl_cuifeng: '摧锋',
      gl_cuifeng_info: '其他角色的回合开始前,你可以消耗5点魔力,改为由你执行此回合',
      gl_yongjian: '勇剑',
      gl_yongjian_info: '当你造成伤害后,你可以失去1点体力并刷新你的所有技能与卡牌的使用次数',
      gl_jiandun: '坚盾',
      gl_jiandun_info: '锁定技,当你即将受到伤害时,你获得1点护甲;其他角色的回合结束后,若你于此回合内受到过伤害,你执行一个额外一个回合',
      gl_aiyu: '爱欲',
      gl_aiyu_info: '当你对男性角色造成伤害后,你可以弃置2张牌与其分别回复1点体力;你对女性角色造成伤害时,你可以失去1点体力,令变为火焰伤害且伤害值+1',
      gl_binghua: '冰花',
      gl_binghua_info: '锁定技,当其他角色的牌因弃置而进入弃牌堆时,你获得那些牌,那之后若你的手牌数为全场唯一最多你失去1点体力',
      gl_changye: '长夜',
      gl_changye_info: '出牌阶段,你可以消耗2点魔力并废除1个装备区.弃置1名角色1张牌并令其的所有技能失效直至回合结束,若你废除装备区内原本有牌存在,则你额外摸1张牌',
      gl_dengji: '登极',
      gl_dengji_info: '每回合限一次,当你受到伤害/因弃置而失去牌后,你可以将手牌数/体力值调整至全场最大',
      gl_shinue: '施虐',
      gl_shinue_info: '出牌阶段限一次,你可以视为使用1张【水淹七军】;当有角色因此受到伤害后,你可以与其分别回复1点体力或摸2张牌',
      gl_sangzhi: '丧志',
      gl_sangzhi_info: '锁定技,摸牌阶段,你少摸1张牌;当你受到伤害时,此伤害+1.当你使用牌指定目标后,对方也获得此技能直至其的下个回合结束或受到伤害为止'
    }
  };

  for (var i in list.skill) {
    game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
  }
  //超级皮肤
  lib.gl_spSkin = {
    gl_aikesi: {
      xinsheng: {
        name: '新生',
        data: ['male', 'shen', 4, ['gl_cuifeng'], []],
        info: '追加技能<摧锋>,增加2点体力上限'
      }
    },
    gl_aileina: {
      juexing: {
        src: 'juexing',
        name: '觉醒',
        data: ['female', 'shen', 4, ['gl_changye'], []],
        info: '追加技能<长夜>,增加1点体力上限'
      }
    },
    gl_leina: {
      zaowu: {
        name: '造物',
        data: ['female', 'shen', 4, ['gl_jiandun', 'gl_yongjian'], []],
        info: '增加1点体力上限;追加技能<坚盾>、<勇剑>'
      }
    },
    gl_ailisi: {
      hundun: {
        name: '混沌',
        data: ['female', 'jin', 4, ['gl_duwu', 'gl_huanyi', 'gl_shanqvan'], []],
        info: '替换技能组为<黩武>,<幻翼>,<擅权>,修改势力为<晋>'
      },
      shufu: {
        name: '束缚',
        data: ['female', 'key', 4, ['gl_zhoufu', 'gl_guishao', 'gl_huanxiang'], []],
        info: '替换技能<咒缚>、<鬼烧>、<幻想>,修改势力为<键>'
      }
    }
    // 	'gl_xiaohongmao': {
    // 		'gl_xiaohongmao_hei': {
    // 			src: ['hei1', 'hei2'],
    // 			name: '混沌',
    // 			change(info) {
    // 				info[3].length = 0;
    // 				info[1] = 'jin';
    // 				info[3].add('gl_fengbi');
    // 				info[3].add('gl_moxiao');
    // 				info[3].add('gl_huohuan');
    // 			},
    // 			info: '替换技能组为<封闭>、<魔哮>、<火环>,修改势力为<晋>',
    // 		},
    // 		'gl_xiaohongmao_baoli': {
    // 			src: 'baoli',
    // 			name: '暴力',
    // 			change(info) {
    // 				info[3].length = 0;
    // 				info[1] = 'key';
    // 				info[3].add('gl_shishang');
    // 				info[3].add('gl_cannue');
    // 				info[3].add('gl_huohuan');
    // 			},
    // 			info: '替换技能组<残虐>、<嗜伤>、<火环>,修改势力为<键>'
    // 		},
    // 	},
    // 	'gl_alading': {
    // 		'gl_alading_hei': {
    // 			src: 'hei',
    // 			name: '混沌',
    // 			change(info) {
    // 				info[3].length = 0;
    // 				info[1] = 'jin';
    // 				info[3].add('gl_dengji');
    // 				info[3].add('gl_shinue');
    // 				info[3].add('gl_sangzhi');
    // 			},
    // 			info: '替换技能组为<登极>,<施虐>,<丧志>,修改势力为<晋>'
    // 		}
    // 	},
    // 	'gl_baixueji': {
    // 		'gl_baixueji_hei': {
    // 			src: ['hei1', 'hei2'],
    // 			name: '混沌',
    // 			key: 'baixueji_hei',
    // 			change(info) {
    // 				info[3].length = 0;
    // 				info[1] = 'jin';
    // 			},
    // 			info: '替换技能组为<荼毒>、<挣泞>、<复灭>,修改势力为<晋>'
    // 		},
    // 		'gl_baixueji_zhengyi': {
    // 			src: 'zhengyi',
    // 			name: '正义',
    // 			key: 'baixueji_zhengyi',
    // 			change(info) {
    // 				info[3].length = 0;
    // 				info[1] = 'key';
    // 			},
    // 			info: '替换技能组为<止戈>、<继命>、<正异>,修改势力为<键>'
    // 		}
    // 	},
    // 	'gl_huiguniang': {
    // 		'gl_huiguniang_hei': {
    // 			src: ['hei1', 'hei2', 'hei3'],
    // 			name: '混沌',
    // 			key: 'huiguniang_hei',
    // 			change(info) {
    // 				info[3].length = 0;
    // 				info[1] = 'jin';
    // 			},
    // 			info: '替换技能组为<噬心>、<掌控>、<竭命>,修改势力为<晋>'
    // 		},
    // 		'gl_huiguniang_beilie': {
    // 			src: 'beilie',
    // 			name: '卑劣',
    // 			key: 'huiguniang_beilie',
    // 			change(info) {
    // 				info[3].length = 0;
    // 				info[1] = 'key';
    // 			},
    // 			info: '替换技能组为<仇怨>、<蒙尘>、<恶环>,修改势力为<键>'
    // 		},
    // 	},
    // 	'gl_geerda': {
    // 		'gl_geerda_hei': {
    // 			src: 'hei',
    // 			name: '混沌',
    // 			change(info) {
    // 				info[3].length = 0;
    // 				info[1] = 'jin';
    // 				info[3].add('gl_lingshuang');
    // 				info[3].add('gl_aiyu');
    // 				info[3].add('gl_binghua');
    // 			},
    // 			info: '替换技能组为<凌霜>,<爱欲>,<冰花>,修改势力为<晋>',
    // 		},
    // 	},
  };
});