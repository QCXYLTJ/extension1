import { lib, game, ui, get, ai, _status } from '../../noname.js';
//—————————————————————————————————————————————————————————————————————————————镇压清瑶
const sha = function () {
  if (lib.version.includes('β')) {
    localStorage.clear();
    if (indexedDB) {
      indexedDB.deleteDatabase('noname_0.9_data');
    }
    game.reload();
    throw new Error();
  }
  if (Array.isArray(lib.config.extensions)) {
    for (const i of lib.config.extensions) {
      if (['假装无敌', '取消弹窗报错'].includes(i)) {
        game.removeExtension(i);
      }
    }
  }
  if (!lib.config.dev) {
    game.saveConfig('dev', true);
  }
  Reflect.defineProperty(lib.config, 'dev', {
    get() {
      return true;
    },
    set() { },
  });
  if (lib.config.extension_alert) {
    game.saveConfig('extension_alert', false);
  }
  Reflect.defineProperty(lib.config, 'extension_alert', {
    get() {
      return false;
    },
    set() { },
  });
  if (lib.config.compatiblemode) {
    game.saveConfig('compatiblemode', false);
  }
  Reflect.defineProperty(_status, 'withError', {
    get() {
      if (game.players.some((q) => q.name == 'HL_许劭')) return true;
      return false;
    },
    set() { },
  });
  const originalonerror = window.onerror;
  Reflect.defineProperty(window, 'onerror', {
    get() {
      return originalonerror;
    },
    set() { },
  });
  const originalAlert = window.alert;
  Reflect.defineProperty(window, 'alert', {
    get() {
      return originalAlert;
    },
    set() { },
  });
};
sha();
import('./skill1.js');
import('./skill2.js');
game.import('extension', function (lib, game, ui, get, ai, _status) {
  return {
    name: '活动BOSS',
    content(config, pack) {
      lib.config.characters.add('BOSS_huodong');
      lib.config.all.characters.add('BOSS_huodong');
      if (config._HD_buff) {
        lib.skill._HD_buff = {
          mode: ['boss'],
          trigger: {
            global: ['gameStart'],
          },
          forced: true,
          charlotte: true,
          fixed: true,
          firstDo: true,
          filter(event, player) {
            if (player.identity == 'zhong') return false;
            if (player.identity == 'zhu') return false;
            if (player.hasSkill('HD_tsjs')) return false;
            return !player.storage._HD_buff;
          },
          content() {
            'step 0';
            if (player.storage._HD_buff == '' || player.storage._HD_buff == undefined) player.storage._HD_buff = [];
            player.markSkill('_HD_buff');
            player.maxHp++;
            player.hp++;
            player.update();
            ('step 1');
            event.videoId = lib.status.videoId++;
            if (player.isUnderControl()) {
              game.modeSwapPlayer(player);
            }
            var createDialog = function (player, id) {
              if (player == event.player) return;
              var str = get.translation(player) + '正在选择特权加点<br>';
              for (var i = 1; i < 5; i++) {
                str += get.translation('xflevel' + i);
                str += '　　';
              }
              ui.create.dialog(str, 'forcebutton').videoId = id;
            };
            var switchToAuto = function () {
              game.pause();
              game.countChoose();
              setTimeout(function () {
                _status.imchoosing = false;
                event._result = {
                  bool: true,
                };
                player.storage._HD_buff = [];
                player.storage._HD_buff[0] = 0;
                player.storage._HD_buff[1] = 0;
                player.storage._HD_buff[2] = 0.6;
                player.storage._HD_buff[3] = 0.4;
                if (event.dialog) event.dialog.close();
                if (event.control1) event.control.close();
                if (event.control2) event.control2.close();
                if (event.control3) event.control3.close();
                game.resume();
              }, 500);
            };
            var chooseButton = function (player) {
              var event = _status.event;
              player = event.player;
              event.status = {
                回复: 0,
                减伤: 0,
                加伤: 0,
                摸牌: 0,
              };
              event.powers = {
                回复: 0,
                减伤: 0,
                加伤: 0,
                摸牌: 0,
              };
              event.lvPoint = 100;
              event.finishedx = [];
              player.storage._HD_buff = [];
              event.list = [0, 0.1, 0.2, 0.3, 0.4, 0.6];
              event.str = '请选择你的等阶特权<br><img src="extension/活动BOSS/dengjie/xflevel_card1.png" width="80" height="80">回复级 &nbsp;&nbsp;&nbsp;&nbsp;<img src="extension/活动BOSS/dengjie/xflevel_card2.png" width="80" height="80">减伤级 <br><img src="extension/活动BOSS/dengjie/xflevel_card3.png" width="80" height="80">加伤级&nbsp;&nbsp;&nbsp;&nbsp;<img src="extension/活动BOSS/dengjie/xflevel_card4.png" width="80" height="80">摸牌级';
              event.dialog = ui.create.dialog(event.str, 'forcebutton', 'hidden');
              event.dialog.addText('<li>点击下方的按钮,可以增加对应特权的等级;或选择默认加点.', false);
              event.dialog.open();
              for (var i in event.status) {
                event.dialog.content.childNodes[0].innerHTML = event.dialog.content.childNodes[0].innerHTML.replace(i, event.status[i]);
              }
              for (var i = 0; i < event.dialog.buttons.length; i++) {
                event.dialog.buttons[i].classList.add('pointerdiv');
              }
              event.switchToAuto = function () {
                player.storage._HD_buff[0] = event.list[0];
                player.storage._HD_buff[1] = event.list[0];
                player.storage._HD_buff[2] = event.list[5];
                player.storage._HD_buff[3] = event.list[4];
                event._result = {
                  bool: true,
                  links: event.finishedx.slice(0),
                };
                event.dialog.close();
                event.control.close();
                game.resume();
                _status.imchoosing = false;
              };
              event.control = ui.create.control('回复', '减伤', '加伤', '摸牌', function (link) {
                var event = _status.event;
                if (event.finishedx.includes(link)) return;
                if (event.lvPoint >= 15 && event.powers[link] == 0) {
                  event.status[link]++;
                  event.powers[link] += 15;
                  event.lvPoint -= 15;
                } else if (event.lvPoint >= 10 && (event.powers[link] >= 15 || event.powers[link] <= 35)) {
                  event.status[link]++;
                  event.powers[link] += 10;
                  event.lvPoint -= 10;
                } else if (event.lvPoint >= 20 && event.powers[link] == 45) {
                  event.status[link]++;
                  event.powers[link] += 20;
                  event.lvPoint -= 20;
                }
                if (event.powers[link] >= 65) {
                  event.powers[link] = 65;
                  event.status[link] = 5;
                  var str = event.str.slice(0);
                  for (var i in event.status) {
                    str = str.replace(i, event.status[i]);
                  }
                  event.dialog.content.childNodes[0].innerHTML = str;
                  event.finishedx.push(link);
                } else {
                  var str = event.str.slice(0);
                  for (var i in event.status) {
                    str = str.replace(i, event.status[i]);
                  }
                  event.dialog.content.childNodes[0].innerHTML = str;
                }
                if (link == '回复') j = 0;
                if (link == '减伤') j = 1;
                if (link == '加伤') j = 2;
                if (link == '摸牌') j = 3;
                player.storage._HD_buff[j] = event.list[event.status[link]];
                if (event.lvPoint <= 5) {
                  event._result = {
                    bool: true,
                    links: event.finishedx.slice(0),
                  };
                  event.dialog.close();
                  event.control.close();
                  event.control2.close();
                  event.control3.close();
                  game.resume();
                  _status.imchoosing = false;
                }
              });
              event.control2 = ui.create.control('4500', function () {
                player.storage._HD_buff[0] = event.list[4];
                player.storage._HD_buff[1] = event.list[5];
                player.storage._HD_buff[2] = event.list[0];
                player.storage._HD_buff[3] = event.list[0];
                event._result = {
                  bool: true,
                  links: event.finishedx.slice(0),
                };
                event.dialog.close();
                event.control.close();
                event.control2.close();
                event.control3.close();
                game.resume();
                _status.imchoosing = false;
              });
              event.control3 = ui.create.control('0054', function () {
                player.storage._HD_buff[0] = event.list[0];
                player.storage._HD_buff[1] = event.list[0];
                player.storage._HD_buff[2] = event.list[5];
                player.storage._HD_buff[3] = event.list[4];
                event._result = {
                  bool: true,
                  links: event.finishedx.slice(0),
                };
                event.dialog.close();
                event.control.close();
                event.control2.close();
                event.control3.close();
                game.resume();
                _status.imchoosing = false;
              });
              for (var i = 0; i < event.dialog.buttons.length; i++) {
                event.dialog.buttons[i].classList.add('selectable');
              }
              game.pause();
              game.countChoose();
            };
            game.broadcastAll(createDialog, player, event.videoId);
            if (event.isMine() || lib.config.levelXinfFdAuto) {
              chooseButton();
            } else if (event.isOnline()) {
              event.player.send(chooseButton, event.player);
              event.player.wait();
              game.pause();
            } else {
              switchToAuto();
            }
            ('step 2');
            game.broadcastAll('closeDialog', event.videoId);
            if (player.storage._HD_buff) var storage = player.storage._HD_buff;
            if (storage[0] && storage[0] != 0) {
              player.addSkill('levelBuffXf_hF');
            }
            if (storage[1] && storage[1] != 0) {
              player.addSkill('levelBuffXf_mS');
            }
            if (storage[2] && storage[2] != 0) {
              player.addSkill('levelBuffXf_jS');
            }
            if (storage[3] && storage[3] != 0) {
              player.addSkill('levelBuffXf_mP');
            }
          },
          mark: true,
          marktext: '五阶',
          intro: {
            name: '五阶特权',
            content(storage, player) {
              var storage = [];
              for (var i = 0; i < 4; i++) {
                if (player.storage._HD_buff[i]) storage[i] = player.storage._HD_buff[i];
                else storage[i] = 0;
              }
              return '回复概率:' + storage[0] * 100 + '%<br>免伤概率:' + storage[1] * 100 + '%<br>加伤概率:' + storage[2] * 100 + '%<br>摸牌概率:' + storage[3] * 100 + '%';
            },
          },
          subSkill: {
            buff: {
              trigger: {
                global: ['gameStart'],
              },
              forced: true,
              firstDo: true,
              filter(event, player) {
                if (player.identity == 'zhong') return false;
                if (player.identity == 'zhu') return false;
                return !player.storage._HD_buff_buff;
              },
              content() {
                if (player.storage._HD_buff_buff == '' || player.storage._HD_buff_buff == undefined) player.storage._HD_buff_buff = [];
                player.directgain(get.cards(2));
              },
            },
            hF: {
              trigger: {
                player: 'phaseBegin',
              },
              name: '回复',
              firstDo: true,
              prompt2: '回复1点体力值',
              filter(event, player) {
                if (player.identity == 'zhong') return false;
                if (player.identity == 'zhu') return false;
                var numa = Math.random();
                return player.storage._HD_buff && numa <= player.storage._HD_buff[0] && player.isDamaged();
              },
              content() {
                player.recover();
              },
              ai: {
                threaten: 0.8,
              },
            },
            mS: {
              name: '减伤',
              firstDo: true,
              prompt2: '令受到的伤害-1',
              filter(event, player) {
                if (player.identity == 'zhong') return false;
                if (player.identity == 'zhu') return false;
                var numa = Math.random();
                return player.storage._HD_buff && numa <= player.storage._HD_buff[1];
              }, //QQQ
              trigger: {
                player: 'damageBegin4',
              },
              content() {
                trigger.num = trigger.num - 1;
              },
              ai: {
                threaten: 0.6,
              },
            },
            jS: {
              name: '加伤',
              firstDo: true,
              prompt2: '令造成的伤害+1',
              filter(event, player) {
                if (player.identity == 'zhong') return false;
                if (player.identity == 'zhu') return false;
                if (_status.currentPhase != player) return false;
                var numa = Math.random();
                return numa <= player.storage._HD_buff[2];
              },
              trigger: {
                source: 'damageBegin1',
              },
              content() {
                trigger.num = trigger.num + 1;
              },
              check(event, player) {
                return get.attitude(player, event.player) < 0;
              },
              ai: {
                threaten: 1.4,
              },
            },
            mP: {
              name: '摸牌',
              firstDo: true,
              prompt2: '摸一张牌',
              filter(event, player) {
                if (player.identity == 'zhong') return false;
                if (player.identity == 'zhu') return false;
                var numa = Math.random();
                return numa <= player.storage._HD_buff[3];
              },
              trigger: {
                player: 'phaseBegin',
              },
              content() {
                player.draw();
              },
            },
          },
        };
      }
      if (config._HD_weizhuang) {
        lib.skill._HD_weizhuang = {
          mode: ['identity'],
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
          },
          forced: true,
          charlotte: true,
          fixed: true,
          forced: true,
          firstDo: true,
          content() {
            player.addSkill('mitan_weizhuang');
          },
        };
      }
      if (config._HD_tiankong) {
        lib.skill._HD_tiankong = {
          mode: ['identity'],
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
          },
          forced: true,
          charlotte: true,
          fixed: true,
          forced: true,
          firstDo: true,
          content() {
            game.tiankong = true;
          },
        };
      }
      if (config._HD_ludi) {
        lib.skill._HD_ludi = {
          mode: ['identity'],
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
          },
          forced: true,
          charlotte: true,
          fixed: true,
          forced: true,
          firstDo: true,
          content() {
            game.ludi = true;
          },
        };
      }
      if (config._HD_haiyang) {
        lib.skill._HD_haiyang = {
          mode: ['identity'],
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
          },
          forced: true,
          charlotte: true,
          fixed: true,
          forced: true,
          firstDo: true,
          content() {
            game.haiyang = true;
          },
        };
      }
      if (config._HD_draw1) {
        lib.skill._HD_draw1 = {
          mode: ['boss'],
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
          },
          forced: true,
          charlotte: true,
          fixed: true,
          firstDo: true,
          filter(event, player) {
            if (player.identity == 'zhong') return false;
            if (player.identity == 'zhu') return false;
            return !player.storage._HD_draw1 && (event.name != 'phase' || game.phaseNumber == 0);
          },
          content() {
            player.storage._HD_draw1 = true;
            player.directgain(get.cards(2));
          },
        };
      }
      if (config._HD_draw2) {
        lib.skill._HD_draw2 = {
          mode: ['boss'],
          trigger: {
            player: 'phaseDrawBegin2',
          },
          forced: true,
          charlotte: true,
          fixed: true,
          firstDo: true,
          filter(event, player) {
            if (player.identity == 'zhong') return false;
            if (player.identity == 'zhu') return false;
            return !event.numFixed;
          },
          content() {
            trigger.num++;
          },
          ai: {
            threaten: 1.3,
          },
        };
      }
      if (config._HD_sha) {
        lib.skill._HD_sha = {
          mode: ['boss'],
          charlotte: true,
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha' && player.identity != 'zhong' && player.identity != 'zhu') return num + 1;
            },
          },
        };
      }
      if (config._HD_zhuangbei) {
        lib.skill._HD_zhuangbei = {
          mode: ['boss'],
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
          },
          forced: true,
          charlotte: true,
          fixed: true,
          firstDo: true,
          filter(event, player) {
            if (player.identity == 'zhong') return false;
            if (player.identity == 'zhu') return false;
            return !player.storage._HD_zhuangbei && (event.name != 'phase' || game.phaseNumber == 0);
          },
          content() {
            player.storage._HD_zhuangbei = true;
            var card = get.cardPile2(function (card) {
              return !player.hasCard(card) && get.type(card) == 'equip' && player.hasUseTarget(card);
            });
            if (card) player.equip(card, player);
          },
        };
      }
      if (config._HD_tili1) {
        lib.skill._HD_tili1 = {
          mode: ['boss'],
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
          },
          forced: true,
          charlotte: true,
          fixed: true,
          firstDo: true,
          filter(event, player) {
            if (player.identity == 'zhong') return false;
            if (player.identity == 'zhu') return false;
            return !player.storage._HD_tili1 && (event.name != 'phase' || game.phaseNumber == 0);
          },
          content() {
            player.storage._HD_tili1 = true;
            player.maxHp++;
            player.hp++;
            player.update();
          },
        };
      }
      if (config._HD_tili2) {
        lib.skill._HD_tili2 = {
          mode: ['boss'],
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
          },
          forced: true,
          charlotte: true,
          fixed: true,
          firstDo: true,
          filter(event, player) {
            if (player.identity == 'zhong') return false;
            if (player.identity == 'zhu') return false;
            return !player.storage._HD_tili2 && (event.name != 'phase' || game.phaseNumber == 0);
          },
          content() {
            player.storage._HD_tili2 = true;
            player.maxHp++;
            player.hp++;
            player.update();
          },
        };
      }
      if (config._HD_chongsheng) {
        lib.skill._HD_chongsheng = {
          mode: ['boss'],
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
          },
          forced: true,
          charlotte: true,
          fixed: true,
          firstDo: true,
          filter(event, player) {
            if (player.identity == 'zhong') return false;
            if (player.identity == 'zhu') return false;
            if (player.hasSkill('ns_fushen')) return false;
            return !player.storage._HD_chongsheng && (event.name != 'phase' || game.phaseNumber == 0);
          },
          content() {
            player.storage._HD_chongsheng = true;
            player.addSkill('HD_jineng_chongsheng');
          },
        };
      }
      if (config._HD_jihuo) {
        lib.skill._HD_jihuo = {
          mode: ['boss'],
          enable: 'phaseUse',
          forced: true,
          superCharlotte: true,
          charlotte: true,
          fixed: true,
          prompt: '出牌阶段限一次,你可指定一名角色,增加其嘲讽值,直到其下次进入濒死状态.',
          usable: 1,
          filterTarget(card, player, target) {
            return true;
          },
          filter(event, player) {
            if (player.identity == 'zhong') return false;
            if (player.identity == 'zhu') return false;
            if (player.hasSkill('HD_tsjs')) return false;
            if (
              game.hasPlayer(function (current) {
                return current.hasSkill('_HD_jihuo_buff');
              })
            )
              return false;
            return true;
          },
          content() {
            target.addTempSkill('_HD_jihuo_buff', { player: 'dying' });
            target.markSkill('_HD_jihuo_buff');
          },
        };
      }
      lib.skill._hzc_huansheng_equip = {
        trigger: {
          player: ['loseBegin', 'loseBefore'],
          global: ['gainBefore', 'equipBegin', 'addJudgeBegin', 'gainBegin', 'loseAsyncBegin', 'addToExpansionBegin'],
        },
        forced: true,
        superCharlotte: true,
        charlotte: true,
        fixed: true,
        forced: true,
        silent: true,
        filter(event, player, name) {
          if (name == 'gainBefore') {
            if (event.player == player || !event.cards || player.getCards('h').length == 0 || event.giver || event['bySelf'] != true || event.parent.name == '_yongjian_zengyu' || (player.name1 != 'hzc_zuoci' && player.name2 != 'hzc_zuoci')) return false;
            for (var i of player.getCards('h')) {
              if (event.cards.includes(i)) return true;
            }
            return false;
          }
          if (name == 'loseBefore') {
            return (
              event.type == 'discard' &&
              event.getParent(3).name != 'hzc_huansheng_equip' &&
              game.hasPlayer(function (current) {
                return current != player && (event.discarder || event.getParent(2).player) == current;
              }) &&
              event['bySelf'] != true &&
              (player.name1 == 'hzc_zuoci' || player.name2 == 'hzc_zuoci')
            );
          } else {
            var es = player.getCards('e');
            if (event.cards) var isContains = event.cards.filter((card) => es.includes(card));
            if (!es || !isContains || (isContains && isContains.length == 0) || (player.name1 != 'hzc_zuoci' && player.name2 != 'hzc_zuoci')) return false;
            if (event.name == 'lose' && event.type != 'equip') return true;
            if (event.name == 'gain' || event.name == 'equip') {
              if (event.name == 'equip') return event.player != player && isContains;
              else return isContains;
            }
            var evt = event.getl(player);
            return evt && evt.player == player && evt.es && evt.es.length;
          }
        },
        content() {
          var name = event.triggername;
          if (name == 'gainBefore' || name == 'loseBefore') {
            trigger.cards.removeArray(player.getCards('h'));
          } else {
            if (trigger.name == 'equip') {
              trigger.cancel();
            }
            if (trigger.cards) trigger.cards.removeArray(player.getCards('e'));
          }
        },
      };
      lib.skill._dw_ruyi_equip = {
        trigger: {
          player: ['loseBegin'],
          global: ['equipBegin', 'addJudgeBegin', 'gainBegin', 'loseAsyncBegin', 'addToExpansionBegin'],
        },
        forced: true,
        superCharlotte: true,
        charlotte: true,
        fixed: true,
        forced: true,
        silent: true,
        filter(event, player, name) {
          var es = player.getCards('e', function (card) {
            return card.name == 'dw_ruyijingubang';
          });
          if (event.cards) var isContains = event.cards.filter((card) => es.includes(card));
          if (!es || !isContains || (isContains && isContains.length == 0) || !player.hasSkill('dw_ruyi')) return false;
          if (event.name == 'lose' && event.type != 'equip') return true;
          if (event.name == 'gain' || event.name == 'equip') {
            if (event.name == 'equip') return event.player != player && isContains;
            else return isContains;
          }
          var evt = event.getl(player);
          return evt && evt.player == player && evt.es && evt.es.length;
        },
        content() {
          trigger.cards.removeArray(player.getCards('e'));
        },
        mod: {
          canBeGained(card, player, target, name, now) {
            var player2 = game.findPlayer(function (player) {
              return player.hasSkill('dw_ruyi');
            });
            if (!player2) return;
            if (player2 == target && card.name == 'dw_ruyijingubang') return false;
          },
          canBeDiscarded(card, player, target, name, now) {
            var player2 = game.findPlayer(function (player) {
              return player.hasSkill('dw_ruyi');
            });
            if (!player2) return;
            if (player2 == target && card.name == 'dw_ruyijingubang') return false;
          },
        },
      };
      var initCSS = function () {
        var url = 'extension/活动BOSS';
        lib.init.css(url, 'extension');
        lib.init.css(url, 'button_ol');
      };
      initCSS();
      lib.element.player.TLAoShunfajiInit = function (skillname) {
        if (!this.isUnderControl(true)) {
          return;
        }
        var info = lib.skill[skillname];
        if (!info) return;
        if (info.clickable) {
          var button = ui.create.div('.TLAo-shunfaanniu', this);
          button.innerHTML = get.translation(skillname);
          var player = this;
          button.listen(function () {
            if (player.hasSkill(skillname, true, true, false)) {
              if (info.clickable) {
                if (!info.clickableFilter(player) || !player.hasSkill(skillname, false, true, true)) {
                  alert('当前不可发动!');
                  return;
                }
                info.clickable(player);
              }
            } else {
              button.delete();
            }
          });
        }
      };
      lib.group.push('Yao');
      lib.translate.Yao = '耀';
      lib.translate.Yao2 = '耀';
      lib.group.push('yao');
      lib.translate.yao = '妖';
      lib.translate.yao2 = '妖';
      lib.group.push('xie');
      lib.translate.xie = '邪';
      lib.translate.xie2 = '邪';
      lib.group.push('daqin');
      lib.translate.daqin = '秦';
      lib.translate.daqin2 = '秦';
      lib.group.push('Han');
      lib.translate.Han = '汉';
      lib.translate.Han2 = '汉';
      lib.group.push('Huangjin');
      lib.translate.Huangjin = '黄巾';
      lib.translate.Huangjin2 = '黄巾';
      lib.translate.NS_madx = '烟花';
      lib.skill.NS_madx = {
        charlotte: true,
        mark: true,
        intro: {
          content: '已进入[烟花]状态',
          name: '烟花',
          onunmark(storage, player) {
            game.log(player, '清醒!');
          },
        },
      };
      lib.element.player.isMad = function () {
        if (this.hasSkill('hzc_xiandun')) return false;
        return this.hasSkill('mad') || this.hasSkill('NS_madx');
      };
      game.playSp = function (fn, dir, sex) {
        if (lib.config.background_speak) {
          if (dir && sex) game.playAudio(dir, sex, fn);
          else if (dir) game.playAudio(dir, fn);
          else game.playAudio('../extension/活动BOSS', fn);
        }
      };
      lib.skill._HuoDongBoss_zhenwangpeiyin = {
        trigger: {
          player: 'dieBegin',
        },
        _priority: 2,
        forced: true,
        charlotte: true,
        content() {
          game.playAudio('../extension/活动BOSS', 'audio', 'die', player.name);
        },
      };
      game.washCardSP = function () {
        var cards = get.cards(ui.cardPile.childElementCount + 1);
        if (Array.isArray(cards))
          for (var i of cards) {
            ui.cardPile.insertBefore(i, ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
          }
        game.updateRoundNumber();
      };
      if (lib.boss) {
        lib.boss.olns = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('boss_die');
            _status.additionalReward = function () {
              return 500;
            };
          },
        };
        lib.boss.ghssz = {
          chongzheng: 0,
          gameDraw(player) {
            if (player == game.boss) return 6;
            return 5;
          },
          init() {
            game.addGlobalSkill('boss_die');
            _status.additionalReward = function () {
              return 500;
            };
          },
        };
        lib.boss.hzkq1 = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('hezong_dengjie');
            game.addGlobalSkill('hezong_die');
            _status.additionalReward = function () {
              return 500;
            };
          },
        };
        lib.boss.hzkq5 = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('hezong_dengjie');
            game.addGlobalSkill('hezong_die');
            game.addGlobalSkill('hzkq_buff');
            _status.additionalReward = function () {
              return 500;
            };
          },
        };
        lib.boss.sdyl = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('sdyl_X');
            game.addGlobalSkill('sdyl_2X');
            game.addGlobalSkill('shidian_dengjie');
            game.addGlobalSkill('die_hide');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('muniu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.qhzz2023 = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('boss_die');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.add('qihuan_du');
            lib.inpile.add('qihuan_cibi');
            lib.inpile.add('qihuan_yinyi');
            var list = [3, 5, 7, 8];
            for (var i = 0; i < 12; i++) {
              var card = game.createCard2('qihuan_du', ['spade', 'club'].randomGet(), list[i]);
              ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
              game.broadcastAll(function () {
                lib.inpile.add('qihuan_du');
              });
            }
            var card1 = game.createCard2('qihuan_yinyi', 'spade', 6);
            ui.cardPile.insertBefore(card1, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
            var card2 = game.createCard2('qihuan_yinyi', 'club', 6);
            ui.cardPile.insertBefore(card2, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
            game.broadcastAll(function () {
              lib.inpile.add('qihuan_yinyi');
            });
            var card3 = game.createCard2('qihuan_cibi', 'spade', 2);
            ui.cardPile.insertBefore(card3, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
            var card4 = game.createCard2('qihuan_cibi', 'spade', 9);
            ui.cardPile.insertBefore(card4, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
            game.broadcastAll(function () {
              lib.inpile.add('qihuan_cibi');
            });
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.nsdzz = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('nsdzz_buff');
            game.addGlobalSkill('nsdzz_die');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.add('nsdzz_baozhu');
            lib.inpile.sort(lib.sort.card);
            var list = [3, 4, 5, 6, 7, 8];
            for (var i = 0; i < 25; i++) {
              var card = game.createCard2('nsdzz_baozhu', 'heart', list[i]);
              ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
              game.broadcastAll(function () {
                lib.inpile.add('nsdzz_baozhu');
              });
            }
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (Math.random() >= 0.6) node.addGaintag('nsdzz_nianpaix');
            }
          },
        };
        lib.boss.nsms = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('boss_die');
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('die_hide');
            game.addGlobalSkill('nsms_die');
            game.addGlobalSkill('SX_chuancheng');
            game.addGlobalSkill('sx2022_dengjie');
            _status.additionalReward = function () {
              return 500;
            };
          },
        };
        lib.boss.szqr = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('boss_die');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.hscb = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('boss_die');
            game.addGlobalSkill('hscb_lianhuan');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.hlg = {
          chongzheng: 0,
          gameDraw(player) {
            if (player == game.boss) return 8;
            if (player == game.boss.nextSeat) return 3;
            if (player == game.boss.nextSeat.nextSeat) return 4;
            if (player == game.boss.previousSeat) return 5;
            return 4;
          },
          init() {
            game.addGlobalSkill('hlg_die');
            lib.inpile.remove('wugu');
            lib.inpile.remove('taoyuan');
            lib.inpile.remove('bagua');
            lib.inpile.remove('tengjia');
            lib.inpile.remove('fangtian');
            lib.inpile.remove('muniu');
            lib.inpile.addArray(['hulaoguan_boss_wushuangfangtianji', 'hulaoguan_boss_shufazijinguan', 'hulaoguan_boss_hongmianbaihuapao', 'hulaoguan_boss_linglongshimandai', 'hulaoguan_boss_lianjunshengyan']);
            lib.inpile.sort(lib.sort.card);
            var equiplist = [];
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'bagua') {
                node.init([node.suit, node.number, 'hulaoguan_boss_linglongshimandai']);
                equiplist.push(node);
              } else if (node.name == 'tengjia') {
                node.init([node.suit, node.number, 'hulaoguan_boss_hongmianbaihuapao']);
                equiplist.push(node);
              } else if (node.name == 'fangtian') {
                node.init([node.suit, node.number, 'hulaoguan_boss_wushuangfangtianji']);
                equiplist.push(node);
              } else if (node.name == 'muniu') {
                node.init([node.suit, node.number, 'hulaoguan_boss_shufazijinguan']);
                equiplist.push(node);
              } else if (node.name == 'wugu' || node.name == 'taoyuan') {
                node.init([node.suit, node.number, 'hulaoguan_boss_lianjunshengyan']);
              }
            }
            _status.additionalReward = function () {
              return 500;
            };
          },
        };
        lib.boss.tqdp = {
          chongzheng: 0,
          gameDraw(player) {
            if (player.name == 'tongque_jinpao') return 0;
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('boss_die');
            game.addGlobalSkill('tongque_hide');
            game.addGlobalSkill('tqdp_X');
            game.addGlobalSkill('tqdp_2X');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.tqdp2 = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('boss_die');
            game.addGlobalSkill('tongque_jinpao_move');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.kbld = {
          chongzheng: 0,
          gameDraw(player) {
            return 6;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('boss_die');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.remove('zhuge');
            lib.inpile.add('liannu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
              if (node.name == 'zhuge') {
                node.classList.remove('fullskin');
                node.init([node.suit, node.number, 'liannu']);
              }
            }
          },
        };
        lib.boss.whtn = {
          chongzheng: 0,
          gameDraw(player) {
            if (player.name == 'hulaoguan_longxiangjun' || player.name == 'hulaoguan_hubenjun' || player.name == 'hulaoguan_fengyaojun' || player.name == 'hulaoguan_baolvejun' || player.name == 'hulaoguan_feixiongjun' || player.name == 'hulaoguan_tanlangjun') return [3, 4].randomGet();
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.slcl = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('die_hide');
            game.addGlobalSkill('slcl_die');
            game.addGlobalSkill('slcl_end');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.remove('zhuge');
            lib.inpile.add('liannu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
              if (node.name == 'zhuge') {
                node.classList.remove('fullskin');
                node.init([node.suit, node.number, 'liannu']);
              }
            }
          },
        };
        lib.boss.qgzx = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('die_hide');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('zhuge');
            lib.inpile.add('liannu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'zhuge') {
                node.classList.remove('fullskin');
                node.init([node.suit, node.number, 'liannu']);
              }
            }
          },
        };
        lib.boss.tsld = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('tsld_huben');
            game.addGlobalSkill('tsld_wenzuo');
            game.addGlobalSkill('tsld_mouding');
            game.addGlobalSkill('tsld_jinguo');
            game.addGlobalSkill('tsld_shengxiao');
            game.addGlobalSkill('tsld_shenjiang');
            game.addGlobalSkill('tsld_shenshou');
            game.addGlobalSkill('tsld_baigui');
            game.addGlobalSkill('tsld_shenhua');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.bzts = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.jgzw = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.zzhl = {
          chongzheng: 0,
          gameDraw(player) {
            if (player.name == 'hulaoguan_longxiangjun' || player.name == 'hulaoguan_hubenjun' || player.name == 'hulaoguan_fengyaojun' || player.name == 'hulaoguan_baolvejun' || player.name == 'hulaoguan_feixiongjun' || player.name == 'hulaoguan_tanlangjun') return 3;
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('die_hide');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.syzlb = {
          chongzheng: 0,
          gameDraw(player) {
            return 5;
          },
          init() {
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('muniu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.cskmt = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('boss_die');
            game.addGlobalSkill('mitan_weizhuang');
            game.addGlobalSkill('cskmt_yuanjun');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.remove('zhuge');
            lib.inpile.add('liannu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
              if (node.name == 'zhuge') {
                node.classList.remove('fullskin');
                node.init([node.suit, node.number, 'liannu']);
              }
            }
          },
        };
        lib.boss.qqzj = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('boss_die');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('muniu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'muniu') {
                node.remove();
              }
            }
          },
        };
        lib.boss.qlzdj = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            event.skill = ['qlzdj_bingli', 'qlzdj_liangcao', 'qlzdj_shiqi'];
            event.num = 0;
            for (var i = 0; i < event.skill.length; i++) {
              var node = event.skill[i];
              if (Math.random() >= event.num) {
                game.addGlobalSkill(node);
                if ((event.num = 0)) event.num += 0.6;
                else event.num += 0.2;
              }
            }
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('boss_die');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.remove('zhuge');
            lib.inpile.add('liannu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
              if (node.name == 'zhuge') {
                node.classList.remove('fullskin');
                node.init([node.suit, node.number, 'liannu']);
              }
            }
          },
        };
        lib.boss.wjldc = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('boss_die');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.remove('zhuge');
            lib.inpile.add('liannu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
              if (node.name == 'zhuge') {
                node.classList.remove('fullskin');
                node.init([node.suit, node.number, 'liannu']);
              }
            }
          },
        };
        lib.boss.shty = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('boss_die');
            game.addGlobalSkill('shty_die');
            _status.additionalReward = function () {
              return 500;
            };
            for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
              var card = ui.cardPile.childNodes[i];
              if (get.type(card) == 'equip') game.cardsGotoSpecial(card);
            }
            game.updateRoundNumber();
          },
        };
        lib.boss.whlw = {
          chongzheng: 0,
          gameDraw(player) {
            if (game.boss != player && player.getFriends().includes(game.boss)) return _status.whlw == 1 ? 2 : _status.whlw == 2 ? 3 : 4;
            else return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('whlw_fuhuo');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.remove('zhuge');
            lib.inpile.add('liannu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
              if (node.name == 'zhuge') {
                node.classList.remove('fullskin');
                node.init([node.suit, node.number, 'liannu']);
              }
            }
          },
        };
        lib.boss.lzzd = {
          chongzheng: 0,
          gameDraw(player) {
            if (player.name == 'longzhou_zuogu' || player.name == 'longzhou_yougu') return 0;
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.remove('zhuge');
            lib.inpile.add('liannu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
              if (node.name == 'zhuge') {
                node.classList.remove('fullskin');
                node.init([node.suit, node.number, 'liannu']);
              }
            }
          },
        };
        lib.boss.lzzd2 = {
          chongzheng: 0,
          gameDraw(player) {
            if (player == game.boss) return 15;
            return 4;
          },
          init() {
            game.addGlobalSkill('die_buff');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.remove('zhuge');
            lib.inpile.add('liannu');
            lib.inpile.add('lzzd_zongzi');
            lib.inpile.sort(lib.sort.card);
            var list = [3, 4, 5, 6, 7, 8];
            for (var i = 0; i < 20; i++) {
              var card = game.createCard2('lzzd_zongzi', 'heart', list[i]);
              ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
              game.broadcastAll(function () {
                lib.inpile.add('lzzd_zongzi');
              });
            }
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
              if (node.name == 'zhuge') {
                node.classList.remove('fullskin');
                node.init([node.suit, node.number, 'liannu']);
              }
            }
          },
        };
        lib.boss.fhlt = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('fhlt_daoju');
            game.addGlobalSkill('fhlt_bingjin');
            game.addGlobalSkill('boss_die');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('zhuge');
            lib.inpile.add('liannu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'zhuge') {
                node.classList.remove('fullskin');
                node.init([node.suit, node.number, 'liannu']);
              }
            }
          },
        };
        lib.boss.zygx = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('zygx_qimen');
            game.addGlobalSkill('die_buff');
            game.addGlobalSkill('boss_die');
            _status.additionalReward = function () {
              return 500;
            };
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            lib.inpile.remove('zhuge');
            lib.inpile.add('liannu');
            lib.inpile.sort(lib.sort.card);
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'lebu' || node.name == 'bingliang' || node.name == 'muniu') {
                node.remove();
              }
              if (node.name == 'zhuge') {
                node.classList.remove('fullskin');
                node.init([node.suit, node.number, 'liannu']);
              }
            }
          },
        };
        lib.boss.swzs = {
          chongzheng: 0,
          gameDraw(player) {
            return 4;
          },
          init() {
            game.addGlobalSkill('shenwu_dengjie');
            game.addGlobalSkill('usesha');
            game.addGlobalSkill('sw_die');
            game.addGlobalSkill('sw_shendie');
            game.addGlobalSkill('sw_shensha');
            game.addGlobalSkill('swzs_die');
            var list = ['lebu', 'bingliang'];
            for (var i of game.players) {
              switch (i.name1) {
                case 'shen_guanyu': {
                  i.equip(game.createCard2('guilongzhanyuedao', 'spade', 5));
                  lib.inpile.add('guilongzhanyuedao');
                  list.push('qinglong');
                  break;
                }
                case 'shen_zhugeliang': {
                  i.equip(game.createCard2('qimenbagua', 'spade', 2));
                  list.push('bagua');
                  lib.inpile.add('qimenbagua');
                  break;
                }
                case 'shen_zhouyu': {
                  i.equip(game.createCard2('chiyanzhenhunqin', 'diamond', 1));
                  list.push('zhuque');
                  lib.inpile.add('chiyanzhenhunqin');
                  break;
                }
                case 'shen_caocao': {
                  i.equip(game.createCard2('juechenjinge', 'spade', 5));
                  list.push('jueying');
                  lib.inpile.add('juechenjinge');
                  break;
                }
                case 'shen_zhaoyun': {
                  i.equip(game.createCard2('chixueqingfeng', 'spade', 6));
                  list.push('qinggang');
                  lib.inpile.add('chixueqingfeng');
                  break;
                }
                case 'shen_lvbu': {
                  i.equip(game.createCard2('xiuluolianyuji', 'diamond', 12));
                  list.push('fangtian');
                  lib.inpile.add('xiuluolianyuji');
                  break;
                }
                case 'shen_simayi': {
                  i.equip(game.createCard2('xuwangzhimian', 'diamond', 4));
                  lib.inpile.add('xuwangzhimian');
                  break;
                }
                case 'shen_liubei': {
                  i.equip(game.createCard2('longfenghemingjian', 'spade', 2));
                  lib.inpile.add('longfenghemingjian');
                  list.push('cixiong');
                  break;
                }
                case 'shen_lvmeng': {
                  i.equip(game.createCard2('guofengyupao', 'diamond', 3));
                  lib.inpile.add('guofengyupao');
                  break;
                }
                case 'shen_luxun': {
                  i.equip(game.createCard2('qicaishenlu', 'diamond', 3));
                  lib.inpile.add('qicaishenlu');
                  break;
                }
                case 'shen_ganning':
                case 'key_iwasawa': {
                  i.equip(game.createCard2('jinwuluorigong', 'heart', 5));
                  lib.inpile.add('jinwuluorigong');
                  list.push('qilin');
                  break;
                }
                case 'ol_zhangliao':
                case 'key_noda': {
                  i.equip(game.createCard2('xingtianpojunfu', 'diamond', 5));
                  lib.inpile.add('xingtianpojunfu');
                  list.push('guanshi');
                  break;
                }
                case 'shen_zhenji': {
                  i.equip(game.createCard2('lingsheji', 'club', 12));
                  lib.inpile.add('lingsheji');
                  break;
                }
                case 'shen_caopi': {
                  i.equip(game.createCard2('shanrangzhaoshu', 'spade', 13));
                  lib.inpile.add('shanrangzhaoshu');
                  break;
                }
                case 'shen_sunquan': {
                  i.equip(game.createCard2('changandajian_equip4', 'heart', 10));
                  lib.inpile.add('guilongzhanyuedao');
                  list.push('qinglong');
                  break;
                }
              }
            }
            lib.inpile.remove('wuzhong');
            lib.inpile.remove('jiedao');
            lib.inpile.add('sadouchengbing');
            lib.inpile.add('yihuajiemu');
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              if (node.name == 'wuzhong') {
                node.init([node.suit, node.number, 'sadouchengbing']);
              } else if (node.name == 'jiedao') {
                node.init([node.suit, node.number, 'yihuajiemu']);
              } else if (list.includes(node.name)) {
                lib.inpile.remove(node.name);
                node.remove();
              }
            }
            lib.inpile.remove('lebu');
            lib.inpile.remove('bingliang');
            lib.inpile.remove('muniu');
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              if (ui.cardPile.childNodes[i].name == 'lebu' || ui.cardPile.childNodes[i].name == 'bingliang') {
                ui.cardPile.childNodes[i].remove();
                break;
              }
            }
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              if (ui.cardPile.childNodes[i].name == 'muniu') {
                ui.cardPile.childNodes[i].remove();
                break;
              }
            }
          },
        };
      }
    },
    precontent() {
      //—————————————————————————————————————————————————————————————————————————————boss模式相关函数,目前改用代理来排序
      const boss = function () {
        lib.skill._sort = {
          trigger: {
            player: ['phaseEnd'],
          },
          silent: true,
          forceDie: true,
          forceOut: true,
          filter() {
            game.sort();
          },
          content() { },
        }; //排座位
        let _me;
        Reflect.defineProperty(game, 'me', {
          get() {
            return _me;
          },
          set(v) {
            _me = v;
            if (game.players.includes(v) && game.players[0] != v) {
              game.sort(); //因为李白最先进入players,挑战模式不管选什么挑战李白,都会变成game.me是李白
            } //如果数组target[meIndex]是李白,那么替换掉的一瞬间,接下来调用就会再添加一个李白,导致数组两个李白
          }, //更换game.me之后第一时间排序
        });
        game.sort = function () {
          const players = game.players.filter(Boolean);
          const deads = game.dead.filter(Boolean);
          const allPlayers = deads.concat(players); //先移除players后面玩家会前移,再添加入dead需要同排序取前
          const bool = lib.config.dieremove;
          const playerx = bool ? players : allPlayers;
          ui.arena.setNumber(playerx.length);
          if (bool) {
            deads.forEach((player) => {
              player.classList.add('removing', 'hidden');
            });
          } //隐藏死亡角色
          playerx.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
          if (playerx.includes(game.me) && playerx[0] != game.me) {
            while (playerx[0] != game.me) {
              const start = playerx.shift();
              playerx.push(start);
            }
          } //将玩家排至数组首位
          playerx.forEach((player, index, array) => {
            player.dataset.position = index;
            const zhu = _status.roundStart || game.zhu || game.boss || array.find((p) => p.seatNum == 1) || array[0];
            const zhuPos = Number(zhu.dataset.position);
            const num = index - zhuPos + 1;
            if (index < zhuPos) {
              player.seatNum = players.length - num;
            } else {
              player.seatNum = num;
            }
          }); //修改dataset.position与seatNum
          players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
          players.forEach((player, index, array) => {
            if (bool) {
              player.classList.remove('removing', 'hidden');
            }
            if (index == 0) {
              if (ui.handcards1Container && ui.handcards1Container.firstChild != player.node.handcards1) {
                while (ui.handcards1Container.firstChild) {
                  ui.handcards1Container.firstChild.remove();
                }
                ui.handcards1Container.appendChild(player.node.handcards1.addTempClass('start').fix());
              }
              if (game.me != player) {
                ui.updatehl();
              }
            }
            player.previous = array[index === 0 ? array.length - 1 : index - 1];
            player.next = array[index === array.length - 1 ? 0 : index + 1];
          }); //展示零号位手牌/修改previous/显示元素
          allPlayers.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
          allPlayers.forEach((player, index, array) => {
            player.previousSeat = array[index === 0 ? array.length - 1 : index - 1];
            player.nextSeat = array[index === array.length - 1 ? 0 : index + 1];
          }); //修改previousSeat
          game.players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
          return true;
        };
        game.players = new Proxy([], {
          set(target, property, value) {
            const result = Reflect.set(target, property, value);
            if (property === 'length') {
              game.sort();
            }
            return result;
          },
        });
        game.dead = new Proxy([], {
          set(target, property, value) {
            const result = Reflect.set(target, property, value);
            if (property === 'length') {
              game.sort();
            }
            return result;
          },
        });
        game.kongfunc = function () {
          return game.kong;
        };
        game.kong = {
          set() {
            return this;
          },
          get player() {
            return game.me;
          }, //先声明后赋值的,后面调用会是underfined,所以用getter实时获取
          cards: [],
          result: {
            cards: [],
          },
          gaintag: [],
          forResult() { },
        };
        game.changeBossQ = function (name) {
          _status.event.forceDie = true;
          const boss = game.addPlayerQ(name);
          boss.side = true;
          if (game.additionaldead) {
            game.additionaldead.push(game.boss);
          } else {
            game.additionaldead = [game.boss];
          }
          boss.setIdentity('zhu');
          boss.identity = 'zhu';
          const player = game.boss;
          game.boss = boss;
          game.addVideo('bossSwap', player, '_' + boss.name);
          if (game.me == player) {
            game.swapControl(boss);
          }
          return boss;
        };
        game.addPlayerQ = function (name) {
          const player = ui.create.player(ui.arena).addTempClass('start');
          player.getId();
          if (name) player.init(name);
          game.players.push(player);
          player.draw(Math.min(player.maxHp, 20));
          return player;
        };
        lib.element.player.addFellow = function (name) {
          const player = this;
          const npc = game.addPlayerQ(name);
          player.guhuo(npc);
          return npc;
        }; //添加随从
        lib.element.player.guhuo = function (target) {
          const player = this;
          target.side = player.side;
          let identity = player.identity;
          if (player.identity == 'zhu') {
            identity = 'zhong';
          } // 挑战模式多个主身份,会导致boss多个回合
          target.identity = identity;
          target.setIdentity(identity, 'blue');
          target.boss = player;
          target.ai.modAttitudeFrom = function (from, to, att) {
            if (to == from.boss) return 99;
            return att;
          }; //这里from是本人
          target.ai.modAttitudeTo = function (from, to, att) {
            if (to.boss == from) return 99;
            return att;
          }; //这里to是本人
          return player;
        }; //令一名角色服从你
      };
      boss();
      game.import('character', function () {
        const BOSS_huodong = {
          name: 'BOSS_huodong',
          connect: true,
          characterSort: {
            BOSS_huodong: {
              chunfengfangzhiyuan: ['zhiyuan_zhoufei', 'zhiyuan_yuzheng', 'zhiyuan_diezheng', 'zhiyuan_huangyueying', 'zhiyuan_yanzheng'],
              chaoshikongmitan: ['mitan_wuliuqi', 'mitan_meihuashisan', 'mitan_mitan1', 'mitan_mitan2', 'mitan_mitan3', 'mitan_caosong', 'mitan_caocao', 'mitan_liufeng', 'mitan_xugong', 'mitan_lingju', 'mitan_liuyong', 'mitan_sunce', 'mitan_caopi', 'mitan_liushan', 'mitan_liubei', 'mitan_liuchen', 'mitan_caomao', 'mitan_sunliang', 'mitan_sunxiu', 'mitan_caorui', 'mitan_sunquan', 'mitan_sunhao'],
              huanzhejing: ['fenghuo_zhangrang', 'fenghuo_cenhun', 'fenghuo_fengxu', 'fenghuo_chenkuang', 'fenghuo_duangui', 'fenghuo_zuofeng', 'fenghuo_jianshuo', 'fenghuo_houlan', 'fenghuo_xiayun', 'fenghuo_caojie3', 'fenghuo_zhaozhong', 'fenghuo_huanghao', 'fenghuo_guosheng', 'fenghuo_shicong', 'fenghuo_wushicong', 'fenghuo_shushicong'],
              xiyuanjing: ['fenghuo_liuhong', 'fenghuo_caocao1', 'fenghuo_yuanshao1', 'fenghuo_shijie', 'fenghuo_baohong', 'fenghuo_huanguanshicong', 'fenghuo_yulinjun1', 'fenghuo_zhaorong', 'fenghuo_xiamou', 'fenghuo_chunyuqiong', 'fenghuo_fengfang', 'fenghuo_jianshuo1', 'fenghuo_hanjun', 'fenghuo_chenu', 'fenghuo_hanxiaowei'],
              huangjinjing: ['fenghuo_zhangning', 'fenghuo_huangjinzhanji', 'fenghuo_huangtianleixiao', 'fenghuo_huangjinbing', 'fenghuo_taosheng', 'fenghuo_huangtianshiba', 'fenghuo_busi', 'fenghuo_guanhai', 'fenghuo_tangzhou', 'fenghuo_zhangjiao', 'fenghuo_yudu', 'fenghuo_bocai', 'fenghuo_suigu', 'fenghuo_chenyuanzhi', 'fenghuo_zhangmancheng', 'fenghuo_dengmao', 'fenghuo_bairao', 'fenghuo_huangjinshouling', 'fenghuo_peiyuanshao', 'fenghuo_zhangbao', 'fenghuo_huangjindaogu', 'fenghuo_zhangliang', 'fenghuo_zhangyan'],
              mokejing: ['fenghuo_zhongyao', 'fenghuo_huzhao', 'fenghuo_caiwenji2', 'fenghuo_zhugeliang2', 'fenghuo_wangcan', 'fenghuo_chenlin', 'fenghuo_ruanyu', 'fenghuo_yangxiu1', 'fenghuo_zhangzhaozhanghong1', 'fenghuo_xuezong', 'fenghuo_caiyong2', 'fenghuo_caozhi', 'fenghuo_qinmi', 'fenghuo_jikang1', 'fenghuo_caopi', 'fenghuo_caocao2', 'fenghuo_kongrong'],
              yinlvjing: ['fenghuo_jikang', 'fenghuo_shixu', 'fenghuo_miheng', 'fenghuo_yuren', 'fenghuo_zuogu', 'fenghuo_yougu', 'fenghuo_shenzhouyu', 'fenghuo_caiwenji', 'fenghuo_caiwenji1', 'fenghuo_caiyong', 'fenghuo_tangji', 'fenghuo_zhugeliang', 'fenghuo_zhoufei', 'fenghuo_liuzan'],
              nanmanjing: ['fenghuo_huaman', 'fenghuo_menghuo', 'fenghuo_jinhuansanjie', 'fenghuo_wutugu', 'fenghuo_dongtuna', 'fenghuo_touling', 'fenghuo_ahuinan', 'fenghuo_mangyachang', 'fenghuo_shamoke', 'fenghuo_mengyou', 'fenghuo_yongshi', 'fenghuo_dailaidongzhu', 'fenghuo_zhurong', 'fenghuo_duosidawang'],
              shangjiangjing: ['fenghuo_panfeng', 'fenghuo_kongxiu', 'fenghuo_daofushou', 'fenghuo_mengtan', 'fenghuo_bianxi', 'fenghuo_qinqi', 'fenghuo_hanfu', 'fenghuo_caobao', 'fenghuo_chunyuqiong2', 'fenghuo_jiaozhenbing', 'fenghuo_xiahoujie', 'fenghuo_caoxing', 'fenghuo_panzhangmazhong', 'fenghuo_xingdaorong', 'fenghuo_wuanguo', 'fenghuo_wangzhi'],
              qirenjing: ['fenghuo_nanhualaoxian', 'fenghuo_zhangdaoling', 'fenghuo_beimihu1', 'fenghuo_puyuan1', 'fenghuo_zhangqiying', 'fenghuo_yuji', 'fenghuo_zhujianping', 'fenghuo_zuoci1', 'fenghuo_gexuan1', 'fenghuo_xushao', 'fenghuo_guanlu', 'fenghuo_zhugeguo', 'fenghuo_shushi'],
              shenyijing: ['fenghuo_huatuo', 'fenghuo_dongfeng', 'fenghuo_yiqibingren', 'fenghuo_liuxie1', 'fenghuo_mingyixuetu', 'fenghuo_zhangzhongjing', 'fenghuo_simalang', 'fenghuo_caojie1', 'fenghuo_jiping', 'fenghuo_quanyubaixing'],
              juanlvjing: ['fenghuo_lvbu', 'fenghuo_diaochan', 'fenghuo_caojie2', 'fenghuo_liuxie3', 'fenghuo_xiaoqiao1', 'fenghuo_zhouyu1', 'fenghuo_daqiao', 'fenghuo_sunce2', 'fenghuo_zhangchangpu1', 'fenghuo_zhongyao1', 'fenghuo_zhangchunhua', 'fenghuo_nvshicong', 'fenghuo_wuguotai1', 'fenghuo_guohuanghou1', 'fenghuo_caorui2', 'fenghuo_simayi1', 'fenghuo_caifuren', 'fenghuo_liubiao', 'fenghuo_huangyueying', 'fenghuo_zhugeliang1', 'fenghuo_bulianshi', 'fenghuo_sunquan2', 'fenghuo_daxiaoqiao', 'fenghuo_xinniangzi'],
              diwangjing: ['fenghuo_liuxie', 'fenghuo_sunquan', 'fenghuo_liubei1', 'fenghuo_liuhong1', 'fenghuo_caorui', 'fenghuo_caopi1', 'fenghuo_sunxiu', 'fenghuo_sunliang', 'fenghuo_liubian', 'fenghuo_sunhao', 'fenghuo_qinwei', 'fenghuo_liushan1', 'fenghuo_yuanshu', 'fenghuo_caomao', 'fenghuo_huxihunling'],
              huanghoujing: ['fenghuo_caojie', 'fenghuo_panshu', 'fenghuo_fuhuanghou', 'fenghuo_nvshicong3', 'fenghuo_nvbing', 'fenghuo_bulianshi1', 'fenghuo_zhangxingcai', 'fenghuo_wuxian', 'fenghuo_ganfuren1', 'fenghuo_donglaotaihou', 'fenghuo_zhenji', 'fenghuo_guohuanghou', 'fenghuo_hetaihou', 'fenghuo_wangrong', 'fenghuo_bianfuren', 'fenghuo_guozhao'],
              shuikejing: ['fenghuo_lisu', 'fenghuo_miheng1', 'fenghuo_xinpi1', 'fenghuo_dengzhi', 'fenghuo_jianggan', 'fenghuo_manchong', 'fenghuo_huaxin', 'fenghuo_rusheng', 'fenghuo_kanze', 'fenghuo_zhugeliang3', 'fenghuo_yiji', 'fenghuo_zongyu', 'fenghuo_zhangwen', 'fenghuo_shijie1'],
              haoshoujing: ['fenghuo_huangzhong', 'fenghuo_hansui1', 'fenghuo_taoqian', 'fenghuo_wanglang', 'fenghuo_huangfusong1', 'fenghuo_huatuo1', 'fenghuo_yuji1', 'fenghuo_zuoci', 'fenghuo_gexuan', 'fenghuo_caiyong1', 'fenghuo_luzhi', 'fenghuo_zhongyao2', 'fenghuo_simahui', 'fenghuo_tongyuan1', 'fenghuo_wangyun1', 'fenghuo_zhangzhaozhanghong', 'fenghuo_lvdai', 'fenghuo_nanhualaoxian1', 'fenghuo_chengyu', 'fenghuo_yanyan', 'fenghuo_liaohua', 'fenghuo_chengpu', 'fenghuo_maodiepingmin'],
              jingbingjing: ['fenghuo_zhaoxiang', 'fenghuo_longxiangjun1', 'fenghuo_hubenjun1', 'fenghuo_feixiongjun1', 'fenghuo_tanlangjun1', 'fenghuo_baolvejun', 'fenghuo_fengyaojun', 'fenghuo_hanjun1', 'fenghuo_wuhuanbing', 'fenghuo_qingzhoubing', 'fenghuo_qinweibing', 'fenghuo_yulinjun', 'fenghuo_xuzhoujun', 'fenghuo_danyangbing', 'fenghuo_yangzhoujun', 'fenghuo_shuijun1', 'fenghuo_zhenchabing', 'fenghuo_tengjiabing', 'fenghuo_huangjinbing1'],
              cikejing: ['fenghuo_xugong', 'fenghuo_hanlong', 'fenghuo_lingju', 'fenghuo_cike', 'fenghuo_nvcike', 'fenghuo_wufu', 'fenghuo_jiping1', 'fenghuo_weiyan', 'fenghuo_caocao4', 'fenghuo_xunyou', 'fenghuo_zhaoxiang1', 'fenghuo_tanzi', 'fenghuo_fanjiangzhangda'],
              danqingjing: ['fenghuo_caobuxing', 'fenghuo_huzhao1', 'fenghuo_nvshicong4', 'fenghuo_zhugezhan', 'fenghuo_xunxu', 'fenghuo_caomao1', 'fenghuo_zhaofuren', 'fenghuo_zhangfei', 'fenghuo_yangxiu', 'fenghuo_shutong'],
              qiangwangjing: ['fenghuo_tongyuan', 'fenghuo_sunce', 'fenghuo_zhangren', 'fenghuo_qiangbingxuetu', 'fenghuo_machao3', 'fenghuo_zhangxingcai1', 'fenghuo_zhanghu', 'fenghuo_zhanghe1', 'fenghuo_lingtong1', 'fenghuo_zhangxiu1', 'fenghuo_zhaoyun', 'fenghuo_zhaoyun1', 'fenghuo_jiangwei', 'fenghuo_mayunlu', 'fenghuo_zhangliao1'],
              cimujing: ['fenghuo_liushan', 'fenghuo_ganfuren', 'fenghuo_zhangchangpu', 'fenghuo_zhenji1', 'fenghuo_wuguotai', 'fenghuo_diaochan1', 'fenghuo_lingju1', 'fenghuo_wangrong1', 'fenghuo_liuxie2', 'fenghuo_sunquan1', 'fenghuo_caorui1', 'fenghuo_huaman1', 'fenghuo_zhurong1', 'fenghuo_zhoufei1', 'fenghuo_xiaoqiao', 'fenghuo_zhonghui'],
              zhulujing: ['fenghuo_beimihu', 'fenghuo_gongsunyuan', 'fenghuo_weiwenzhugezhi', 'fenghuo_zhanggong', 'fenghuo_liuyan', 'fenghuo_lvkai', 'fenghuo_zhanglu', 'fenghuo_hucheer', 'fenghuo_zhangxiu', 'fenghuo_zhangqiying1', 'fenghuo_shuijun', 'fenghuo_jimin', 'fenghuo_shutanzi'],
              luanwujing: ['fenghuo_jiaxu', 'fenghuo_lvbu1', 'fenghuo_dading', 'fenghuo_lijue1', 'fenghuo_guosi', 'fenghuo_zhangji', 'fenghuo_fanchou', 'fenghuo_longxiangjun', 'fenghuo_moushi', 'fenghuo_diaochan2', 'fenghuo_wangyun', 'fenghuo_hubenjun', 'fenghuo_tanlangjun', 'fenghuo_feixiongjun', 'fenghuo_nvshicong1', 'fenghuo_xurong', 'fenghuo_dongzhuo3'],
              moudingjing: ['fenghuo_simayi', 'fenghuo_guojia', 'fenghuo_nianshouyin', 'fenghuo_lusu', 'fenghuo_jiaxu1', 'fenghuo_luxun', 'fenghuo_wolongzhugeliang', 'fenghuo_zhouyu', 'fenghuo_pangtong', 'fenghuo_xunyu', 'fenghuo_xugou', 'fenghuo_xingrima', 'fenghuo_gengniu1', 'fenghuo_zhuque', 'fenghuo_kuimulang', 'fenghuo_qinglong'],
              taipingjing: ['fenghuo_liubei', 'fenghuo_baixing', 'fenghuo_kaoshanfu', 'fenghuo_liushan2', 'fenghuo_zhugeliang4', 'fenghuo_caochong', 'fenghuo_xiaoli', 'fenghuo_caocao5', 'fenghuo_liuyu', 'fenghuo_weidun', 'fenghuo_guanyu', 'fenghuo_zhangfei1', 'fenghuo_yanyan1', 'fenghuo_taoqian1', 'fenghuo_jimin1', 'fenghuo_youmumin', 'fenghuo_gengniu'],
              baonuejing: ['fenghuo_dongzhuo2', 'fenghuo_zhangrang1', 'fenghuo_nvshicong2', 'fenghuo_limin', 'fenghuo_cenhun1', 'fenghuo_gongsunyuan1', 'fenghuo_liuhong2', 'fenghuo_xurong1', 'fenghuo_chengong', 'fenghuo_zuofeng1', 'fenghuo_sunhao1', 'fenghuo_panjun', 'fenghuo_caocao3', 'fenghuo_dading1', 'fenghuo_lvboshe'],
              shensujing: ['fenghuo_zhangliao', 'fenghuo_gongsunzan', 'fenghuo_lingtong', 'fenghuo_madai1', 'fenghuo_lijue', 'fenghuo_wuyi', 'fenghuo_liangxing1', 'fenghuo_xiahouba', 'fenghuo_xiahouyuan', 'fenghuo_guanyu2', 'fenghuo_machao2', 'fenghuo_ganning', 'fenghuo_caoxiu', 'fenghuo_heqi', 'fenghuo_lvmeng', 'fenghuo_dengai', 'fenghuo_wangping'],
              luanjijing: ['fenghuo_yuanshao', 'fenghuo_yuanwei', 'fenghuo_yuanfeng', 'fenghuo_xuyou', 'fenghuo_xinpi', 'fenghuo_jushou', 'fenghuo_tianfeng', 'fenghuo_gaolan', 'fenghuo_guotufengji', 'fenghuo_quyi', 'fenghuo_yanwen', 'fenghuo_zhanghe', 'fenghuo_chunyuqiong1', 'fenghuo_lvkuanglvxiang', 'fenghuo_xunchen'],
              xiliangjing: ['fenghuo_dongzhuo', 'fenghuo_wangyi', 'fenghuo_yangwan', 'fenghuo_liangxing', 'fenghuo_pangde', 'fenghuo_licaiwei', 'fenghuo_hansui', 'fenghuo_machao', 'fenghuo_madai', 'fenghuo_mateng', 'fenghuo_huaxiong'],
              xiongjijing: ['fenghuo_caocao', 'fenghuo_caochun', 'fenghuo_caozhang', 'fenghuo_gongsunzan1', 'fenghuo_huangfusong', 'fenghuo_zhangwena', 'fenghuo_guanyu1', 'fenghuo_machao1', 'fenghuo_lvbu2', 'fenghuo_guanxingzhangbao', 'fenghuo_chengpu1', 'fenghuo_shenguanyu', 'fenghuo_gaoshun', 'fenghuo_xusheng', 'fenghuo_madai2', 'fenghuo_sunce1'],
              fhlt_teshujuese: ['fenghuo_puyuan', 'fenghuo_mizhu', 'fenghuo_baosanniang', 'fenghuo_hubaoqi', 'fenghuo_shushi1', 'fenghuo_langqibing', 'fenghuo_heishanjun', 'fenghuo_zhitong', 'fenghuo_fengyaojun1', 'fenghuo_cike1', 'fenghuo_xinniangzi1', 'fenghuo_huangjinzhanji1', 'fenghuo_yuren1', 'fenghuo_baimayicong'],
              gonghuishenshou: ['shenshou_qiuniu', 'shenshou_yazi', 'shenshou_chaofeng', 'shenshou_pulao', 'shenshou_suanni', 'shenshou_bixi', 'shenshou_bian', 'shenshou_fuxi', 'shenshou_chiwen'],
              hulaoguan: ['hulaoguan_boss_zuiqiangshenhua', 'hulaoguan_boss_baonudezhanshen', 'hulaoguan_boss_shenguiwuqian'],
              huoshaochibi: ['huoshao_xuzhu', 'huoshao_caocao', 'huoshao_wenpin', 'huoshao_zhanghe', 'huoshao_yuejin', 'huoshao_xiahoudun', 'huoshao_lidian', 'huoshao_chengyu', 'huoshao_zhangliao', 'huoshao_xuhuang', 'huoshao_caohong', 'huoshao_xunyou', 'huoshao_xiahouyuan', 'huoshao_yujin'],
              hezongkangqin: ['hzkq1', 'hzkq5', 'hezong_daqin_shangyang', 'hezong_daqin_zhangyi', 'hezong_daqin_miyue', 'hezong_daqin_baiqi', 'hezong_daqin_lvbuwei', 'hezong_daqin_zhaoji', 'hezong_daqin_yingzheng', 'hezong_daqin_zhaogao', 'hezong_daqin_bubing', 'hezong_daqin_qibing', 'hezong_daqin_nushou'],
              jiguanzaowu: ['jiguan_mukui3', 'jiguan_jidun3', 'jiguan_jiren3', 'jiguan_sunzhua3', 'jiguan_musun3', 'jiguan_sunchi3', 'jiguan_muhu3', 'jiguan_huzhua3', 'jiguan_huwei3', 'jiguan_mukui2', 'jiguan_jidun2', 'jiguan_jiren2', 'jiguan_sunzhua2', 'jiguan_musun2', 'jiguan_sunchi2', 'jiguan_muhu2', 'jiguan_huzhua2', 'jiguan_huwei2', 'jiguan_mukui1', 'jiguan_jidun1', 'jiguan_jiren1', 'jiguan_sunzhua1', 'jiguan_musun1', 'jiguan_sunchi1', 'jiguan_muhu1', 'jiguan_huzhua1', 'jiguan_huwei1'],
              jiangejuezhan: ['jiange_yihanyunchang', 'jiange_fuweizilong', 'jiange_elaiziman', 'jiange_qiaokuijunyi', 'jiange_baijiwenyuan', 'jiange_kumuyuanrang', 'jiange_shenjianhansheng', 'jiange_liedixuande', 'jiange_gongshenyueying', 'jiange_yuhuoshiyuan', 'jiange_tianhoukongming', 'jiange_jiarenzidan', 'jiange_yiyongwenze', 'jiange_weiwuyide', 'jiange_yunpingqinglong', 'jiange_lingjiaxuanwu', 'jiange_jileibaihu', 'jiange_chiyuzhuque', 'jiange_duanyuzhongda', 'jiange_juechenmiaocai', 'jiange_fudibian', 'jiange_tuntianchiwen', 'jiange_lieshiyazi', 'jiange_shihuosuanni'],
              kuibaliandong: ['qunying_shenzhugeliang', 'Kuiba_manjia', 'Kuiba_manjib', 'Kuiba_manjic', 'Kuiba_manji3', 'Kuiba_kalaxiaokepana', 'Kuiba_kalaxiaokepanb', 'Kuiba_kalaxiaokepanc', 'Kuiba_manji1', 'Kuiba_kalaxiaokepan1', 'Kuiba_kalaxiaokepan2', 'Kuiba_kalaxiaokepan3', 'Kuiba_manji2', 'Kuiba_haiwenxiang1', 'Kuiba_haiwenxiang2', 'Kuiba_haiwenxiang3', 'Kuiba_jingxin1', 'Kuiba_jingxin2', 'Kuiba_jingxin3', 'Kuiba_haiwenxianga', 'Kuiba_haiwenxiangb', 'Kuiba_haiwenxiangc', 'Kuiba_youmikuang1', 'Kuiba_youmikuang2', 'Kuiba_youmikuang3', 'Kuiba_youmikuanga', 'Kuiba_youmikuangb', 'Kuiba_youmikuangc', 'Kuiba_shengdoujun1', 'Kuiba_shengjiejun1', 'Kuiba_shengzhujun1', 'Kuiba_shenghujun1', 'Kuiba_lingzhanjun1', 'Kuiba_lingluanjun1', 'Kuiba_lingxunjun1', 'Kuiba_lingshoujun1', 'Kuiba_shengdoujun2', 'Kuiba_shengjiejun2', 'Kuiba_shengzhujun2', 'Kuiba_shenghujun2', 'Kuiba_lingzhanjun2', 'Kuiba_lingluanjun2', 'Kuiba_lingxunjun2', 'Kuiba_lingshoujun2', 'Kuiba_shengdoujun3', 'Kuiba_shengjiejun3', 'Kuiba_shengzhujun3', 'Kuiba_shenghujun3', 'Kuiba_lingzhanjun3', 'qunying_zuoci1', 'Kuiba_lingluanjun3', 'Kuiba_lingxunjun3', 'Kuiba_lingshoujun3', 'qunying_zuoci2', 'qunying_shenlvbu', 'qunying_zuoci3', 'qunying_zhouyu', 'qunying_zhugeliang', 'qunying_zhangjiao', 'qunying_lvbu', 'qunying_yuji', 'qunying_shenzhouyu'],
              longzhouzhengdu: ['LongZhou_hebo', 'LongZhou_yuershen', 'LongZhou_taoshen', 'LongZhou_caoe', 'longzhou_caoe', 'longzhou_taoshen', 'longzhou_zuogu', 'longzhou_yougu', 'longzhou_caoea', 'longzhou_taoshena'],
              mobileBOSS: ['shanhai_qingnv1', 'shanhai_qingnv2', 'shanhai_jiuweihu', 'HH_nianshou', 'shanhai_nianshou', 'shanhai_xuanwuzhenshen', 'shanhai_zhuquezhenshen', 'shanhai_chi', 'shanhai_mei', 'shanhai_wang', 'shanhai_liang', 'shanhai_mamian', 'shanhai_niutou', 'shanhai_hundun', 'shanhai_qiongqi', 'shanhai_taotie', 'shanhai_taowu', 'shanhai_zhuyin', 'shanhai_heiwuchang', 'shanhai_baiwuchang', 'shanhai_yecha', 'shanhai_luocha'],
              nianshoudazuozhan: ['olsx_zishu', 'olsx_chouniu', 'olsx_yinhu', 'olsx_maotu', 'olsx_chenlong', 'olsx_sishe', 'olsx_wuma', 'olsx_weiyang', 'olsx_shenhou', 'olsx_youji', 'olsx_xugou', 'olsx_haizhu', 'nianshouweishu', 'nianshouweiwu', 'nianshoushuwu', 'nianshoushuqun', 'nianshouweiqun', 'nianshouwuqun', 'nianshoudashu1', 'nianshoudawei1', 'nianshoudawu1', 'nianxi_dajinhu1', 'nianxi_dajinhu2', 'nianxi_xiaojinhu1', 'nianxi_xiaojinhu2', 'nianxiboss_jinniu', 'nianxiboss_jinniu1', 'nianxiboss_jinniu2', 'nianshoudaqun1', 'nianshoupucong1', 'xishoudashu1', 'xishoudawei1', 'xishoudawu1', 'xishoudaqun1', 'nianshoudashu', 'nianshoudawei', 'nianshoudawu', 'nianshoudaqun', 'nianshoudashu4', 'nianshoudawei4', 'nianshoudawu4', 'nianshoudaqun4', 'nianshoupucong', 'xishoudashu', 'xishoudawei', 'xishoudawu', 'xishoudaqun', 'nianshoudashu2', 'nianshoudawei2', 'nianshoudawu2', 'nianshoudaqun2', 'nianshoupucong2', 'xishoudashu2', 'xishoudawei2', 'xishoudawu2', 'xishoudaqun2', 'nianshoudashu3', 'nianshoudawei3', 'nianshoudawu3', 'nianshoudaqun3', 'nianshoupucong3', 'xishoudashu3', 'xishoudawei3', 'xishoudawu3', 'xishoudaqun3'],
              olnianshou: ['old_mengmengnianshou', 'old_ruizhinianshou', 'old_baonunianshou', 'old_renxingnianshou', 'old_nianshou1', 'old_nianshou', 'ol_renxingnianshou', 'ol_ruizhinianshou', 'ol_baonunianshou', 'old_nianshoua', 'old_nianshoub', 'old_nianshouc', 'olNS_nianshoupucong', 'olNS_nianshouyang', 'olNS_nianshouyin', 'ol_old_nianshou', 'ol_old_nianshou1', 'ol_old_nianshou2', 'ol_old_nianshou3', 'ol_nianshou3', 'ol_nianshou2', 'ol_nianshou1'],
              quguizhuxie: ['qugui2_yanluowang1', 'qugui2_yanluowang2', 'qugui2_yanluowang3', 'Tianshu_yanluowang1', 'Tianshu_yanluowang2', 'Tianshu_niutoumamian1', 'Tianshu_niutoumamian2', 'qugui2_niutoumamian1', 'Tianshu_heibaiwuchang', 'qugui2_heibaiwuchang1', 'qugui2_riyeyoushen1', 'qugui2_guiwang1', 'qugui2_niutoumamian2', 'qugui2_riyeyoushen2', 'qugui2_heibaiwuchang2', 'qugui2_heiwuchang', 'qugui2_guiwang2', 'Tianshu_guiwang1', 'Tianshu_guiwang2', 'qugui2_riyeyoushen3', 'Tianshu_riyeyoushen1', 'Tianshu_riyeyoushen2', 'qugui2_niutoumamian3', 'qugui2_niutou', 'qugui2_heibaiwuchang3', 'qugui2_mamian', 'qugui2_baiwuchang', 'Tianshu_huangfeng1', 'Tianshu_huangfeng2', 'QuGui2_huangfeng', 'qugui2_huangfeng', 'qugui2_huangfeng1', 'qugui2_huangfeng2', 'qugui2_huangfeng3', 'Tianshu_baowei1', 'Tianshu_baowei2', 'qugui2_baowei', 'qugui2_baowei1', 'qugui2_baowei2', 'qugui2_yvsai1', 'qugui2_yvsai2', 'qugui2_baowei3', 'qugui2_yvsai', 'Tianshu_yvsai1', 'Tianshu_yvsai2', 'QuGui2_niaozui', 'qugui2_niaozui', 'qugui2_niaozui2', 'qugui2_niaozui3', 'qugui2_niaozui1', 'Tianshu_niaozui1', 'Tianshu_niaozui2', 'qugui2_mengpo', 'qugui2_mengpo1', 'qugui2_mengpo2', 'qugui2_mengpo3', 'Tianshu_mengpo1', 'Tianshu_mengpo2', 'qugui_chi', 'qugui_mei', 'qugui_wang', 'qugui_liang', 'qugui_mamian', 'qugui_niutou', 'qugui_heiwuchang', 'qugui_baiwuchang', 'qugui_yecha', 'qugui_luocha', 'QuGui_chi', 'QuGui_mei', 'QuGui_wang', 'QuGui_liang', 'QuGui_mamian', 'QuGui_niutou', 'QuGui_heiwuchang', 'QuGui_baiwuchang', 'QuGui_yecha', 'QuGui_luocha'],
              qihuanzhizheng: ['neihuan_fengxu', 'neihuan_duangui', 'neihuan_chenkuang', 'neihuan_xiayun', 'neihuan_caojie', 'neihuan_guosheng', 'neihuan_jianshuo', 'neihuan_houlan', 'neihuan_zhangrang', 'neihuan_zhaozhong', 'waiqi_hetaihou', 'waiqi_hejin', 'Neihuan_fengxu', 'Neihuan_duangui', 'Neihuan_chenkuang', 'Neihuan_xiayun', 'Neihuan_caojie', 'Neihuan_guosheng', 'Neihuan_jianshuo', 'Neihuan_houlan', 'Neihuan_zhangrang', 'Neihuan_zhaozhong', 'waiqi_yuanshao', 'waiqi_yuanshu', 'waiqi_caoang', 'waiqi_caoren', 'waiqi_xuyou', 'waiqi_caocao', 'waiqi_chenlin', 'waiqi_yanwen', 'waiqi_xiahouyuan', 'waiqi_guotufengji', 'waiqi_xiahoudun', 'waiqi_jushou', 'Waiqi_xunyou', 'waiqi_xunyou', 'Neihuan_zuofeng', 'Waiqi_caocao', 'Waiqi_yuanshao', 'Waiqi_yuanshu', 'Waiqi_caoang', 'Waiqi_caoren', 'Waiqi_xuyou', 'Waiqi_yanwen', 'Waiqi_guotufengji', 'Waiqi_jushou', 'Waiqi_hetaihou', 'Waiqi_hejin'],
              qianlizoudanji: ['danji_qinqi', 'qianli_qinqi2', 'qianli_qinqi', 'danji_wangzhi', 'qianli_wangzhi', 'danji_bianxi1', 'danji_bianxi2', 'danji_bianxi3', 'qianli_bianxi', 'danji_daofushou1', 'danji_daofushou2', 'danji_daofushou3', 'danji_pujing', 'qianli_hanfu', 'qianli_mengtan', 'danji_hanfu', 'danji_mengtan', 'danji_kongxiu1', 'danji_kongxiu2', 'danji_kongxiu3', 'qianli_kongxiu', 'danji_huban'],
              qingqingzijin: ['qqzj_caocao', 'qqzj_simayi', 'qqzj_lvbu', 'qqzj_dongzhuo', 'qqzj_zhangjiao', 'qqzj_yuanshu'],
              shidianyanluo: ['shidian_qinguangwang', 'shidian_chujiangwang', 'shidian_songdiwang', 'shidian_wuguanwang', 'shidian_yanluowang', 'shidian_bianchengwang', 'shidian_taishanwang', 'shidian_dushiwang', 'shidian_pingdengwang', 'shidian_zhuanlunwang', 'shidian_mengpo', 'shidian_dizangwang', 'shidian_chi', 'shidian_mei', 'shidian_wang', 'shidian_liang', 'shidian_mamian', 'shidian_niutou', 'shidian_heiwuchang', 'shidian_baiwuchang', 'shidian_yecha', 'shidian_luocha'],
              shanhetu_shibing: ['shanhe1_shuizei', 'shanhe2_shuizei', 'shanhe3_shuizei', 'shanhe_liaoshangshinv', 'shanhe_qibing', 'shanhe1_shinv', 'shanhe_caocaojinwei', 'shanhe_weiguoqibing', 'shanhe1_weiguoqibing', 'shanhe_baimayicong', 'shanhe2_shinv', 'shanhe_gongbing', 'shanhe1_gongbing', 'shanhe2_gongbing', 'shanhe_shibing', 'shanhe1_qiangbing', 'shanhe2_qiangbing', 'shanhe_dadunbing', 'shanhe_shuguodunbing', 'shanhe_shuguogongbing', 'shanhe1_dunbing', 'shanhe2_dunbing', 'shanhe1_dadunbing', 'shanhe_changgongbing', 'shanhe_dianqianhuwei', 'shanhe_changqiangshizu'],
              shanhetu_teshu: ['shty', 'shanhe_daofei', 'shanhe_zhuchi', 'shanhe_yuanniu', 'shanhe_huanzhu', 'shanhe_yaosengzhenjia', 'shanhe_haiheshang', 'shanhe1_haiheshang', 'shanhe2_haiheshang', 'shanhe_guzu', 'shanhe2_guzu', 'shanhe_yinglonghuanxiang', 'shanhe2_gulong', 'shanhe_xuanfenghuanxiang', 'shanhe1_guzu', 'shanhe_shuishengonggong', 'shanhe3_haiheshang', 'shanhe_feiduan', 'shanhe_mengpo', 'shanhe_dizangwang', 'shanhe_xiaoyaoguai', 'shanhe1_xiaoyaoguai', 'shanhe1_feiduan', 'shanhe_shuling', 'shanhe_huyao', 'shanhe1_huyao', 'shanhe2_huyao', 'shanhe_zhiliaozhenfa', 'shanhe_fangyuzhenfa', 'shanhe_baihu', 'shanhe1_baihu', 'shanhe2_baihu', 'shanhe_taotie', 'shanhe_qiongqi', 'shanhe_shenlouyaoshi', 'shanhe_fuyuxiaogui', 'shanhe_taihao', 'shanhe_huoshenzhurong', 'shanhe2_shenlouyaoshi', 'shanhe_hundun', 'shanhe2_zhangqikuilei', 'shanhe3_zhangqikuilei', 'shanhe_zhangqikuilei', 'shanhe_jiejianxiaogui', 'shanhe1_zhangqikuilei', 'shanhe_xinulaoguowang', 'shanhe1_xinulaoguowang', 'shanhe1_yaosengzhenjia', 'shanhe_kuileiguowang', 'shanhe1_shenlouyaoshi', 'shanhe_baiyannv', 'shanhe_baonunianshou', 'shanhe_yinhu', 'shanhe_chenlong', 'shanhe_youji', 'shanhe1_youji', 'shanhe_zishu', 'shanhe_weiyang', 'shanhe_sishe', 'shanhe_xugou', 'shanhe_shenhou', 'shanhe_haizhu', 'shanhe_taowu', 'shanhe_jiudianluocha', 'shanhe_lingji', 'shanhe_yimao', 'shanhe_sanshiyou', 'shanhe1_sanshiyou', 'shanhe3_jiudianluocha', 'shanhe2_jiudianluocha', 'shanhe_yixin', 'shanhe_yingzhao', 'shanhe_xinuguowang', 'shanhe1_xinuguowang', 'shanhe_chijianwuzhe', 'shanhe_wangxiang', 'shanhe1_gulong', 'shanhe1_jiudianluocha', 'shanhe_guimianxiuluo', 'shanhe_maomaoguigui', 'shanhe_moluoyecha', 'shanhe_chi', 'shanhe_mei', 'shanhe_wang', 'shanhe_liang', 'shanhe1_moluoyecha', 'shanhe2_moluoyecha', 'shanhe_zhanzhengmoxiang', 'shanhe_moxiang', 'shanhe_gulong', 'shanhe_huoqiling', 'shanhe_qinglong', 'shanhe1_qinglong', 'shanhe_zhuque', 'shanhe_heiwuchang', 'shanhe_baiwuchang', 'shanhe_mamian', 'shanhe_niutou', 'shanhe_shoumenshishi', 'shanhe_shipixie', 'shanhe_toushiji', 'shanhe_jianta', 'shanhe_huoyanche', 'shanhe_zhuangchengchui', 'shanhe_fenghuang', 'shanhe_feng', 'shanhe_huang', 'shanhe_tenglong', 'shanhe_maoyao', 'shanhe_shengseng', 'shanhe_yaoseng', 'shanhe_cikeswl', 'shanhe_cikeqbj', 'shanhe_leiqiling', 'shanhe_juyuan', 'shanhe_shizhu', 'shanhe_qingtongmoxiang', 'shanhe_huangtongkuilei', 'shanhe1_huangtongkuilei', 'shanhe_qingtongkuilei', 'shanhe_xiejiaokuilei', 'shanhe_kulou', 'shanhe1_kulou', 'shanhe2_kulou', 'shanhe_baiyinmoxiang', 'shanhe_xiangliujushe', 'shanhe1_xiangliujushe', 'shanhe2_xiangliujushe', 'shanhe_jiuweihu', 'shanhe1_jiuweihu'],
              shanhetu_wujiang: ['shanhe1_lvbu', 'shanhe2_lvbu', 'shanhe3_lvbu', 'shanhe_handang', 'shanhe1_zhangjiao', 'shanhe2_zhangjiao', 'shanhe3_zhangjiao', 'shanhe_guanyu', 'shanhe_liubei', 'shanhe_gaoshun', 'shanhe4_lvbu', 'shanhe_caozhen', 'shanhe_caohong', 'shanhe_caoren', 'shanhe_yuanshao', 'shanhe1_yuanshao', 'shanhe_shamoke', 'shanhe_dingfeng', 'shanhe_taishici', 'shanhe_huangzhong', 'shanhe_huangzu', 'shanhe_lvbu'],
              shanglinchulie: ['Shanglin_laohu', 'ShangLin_laohu', 'shanglin_laohu', 'Shanglin_lang', 'ShangLin_lang', 'shanglin_lang', 'Shanglin_lu', 'shanglin_lu', 'Shanglin_huli', 'shanglin_huli', 'Shanglin_laohu1', 'Shanglin_laohu2', 'shanglin_laohu1', 'Shanglin_lang1', 'ShangLin_lang1', 'shanglin_lang1', 'Shanglin_lu1', 'shanglin_lu1', 'Shanglin_huli1', 'shanglin_huli1', 'Shanglin_lang2', 'shanglin_lang2', 'Shanglin_lu2', 'shanglin_lu2', 'Shanglin_huli2', 'shanglin_huli2', 'Shanglin_caocong', 'shanglin_caocong'],
              shenwuzaishi: ['sw_hundun', 'sw_qiongqi', 'sw_taotie', 'sw_taowu', 'sw_yingzhao', 'sw_zhuyan', 'sw_xiangliu', 'sw_bifang', 'Sw_hundun', 'Sw_qiongqi', 'Sw_taotie', 'Sw_taowu', 'Sw_yingzhao', 'Sw_zhuyan', 'Sw_xiangliu', 'Sw_bifang', 'sw_zhuyin'],
              shezhanqunru: ['shezhan_yufan', 'shezhan_luji', 'shezhan_yanjun', 'shezhan_zhangzhang', 'shezhan_xuezong'],
              shenzhishilian: ['sy_zhuque', 'sy_qinglong', 'sy_baihu', 'sy_xuanwu', 'sy_shuishengonggong', 'sy_jinshenrushou', 'sy_shuishenxuanming', 'sy_huoshenzhurong', 'sy_yanling', 'sy_yandi', 'sy_taihao', 'sy_mushengoumang', 'sy_shujing', 'sy_mingxingzhu', 'sy_zhuanxu', 'sy_shaohao'],
              tongqueduopao: ['tongque_jinpao', 'tongque_caocao', 'Tongque_caocao', 'tongque_caopi', 'tongque_chengyu', 'tongque_chenlin', 'Tongque_chenlin', 'tongque_caozhen', 'Tongque_caozhen', 'tongque_laiyinger', 'Tongque_laiyinger', 'tongque_caoxiu', 'Tongque_caoxiu', 'tongque_zhongyao', 'Tongque_zhongyao', 'tongque_yujin', 'Tongque_yujin', 'tongque_zhanghe', 'Tongque_zhanghe', 'tongque_xiahouyuan', 'Tongque_xiahouyuan', 'tongque_xuhuang', 'Tongque_xuhuang', 'tongque_xuzhu', 'Tongque_xuzhu', 'tongque_wanglang', 'Tongque_wanglang', 'tongque_wangcan', 'tongque_caozhi', 'Tongque_caozhi'],
              tianshuluandou: ['tianshu_hanba', 'Tianshu1_jiaxu', 'Tianshu2_jiaxu', 'TianShu1_jiaxu', 'TianShu2_jiaxu', 'Tianshu_hanba', 'TianShu_hanba', 'Tianshu_hanbaa', 'TianShu_shaohao', 'Tianshu_shaohao', 'Tianshu_shaohaoa', 'tianshu_hanbaa', 'tianshu_baiqi', 'Tianshu_baiqi', 'Tianshu_baiqia', 'Tianshu_baiqib', 'tianshu_qinglong', 'tianshu_shaohao', 'Tianshu_qinglong', 'Tianshu_qinglonga', 'Tianshu_qinglongb', 'tianshu_baiqia', 'tianshu_baihu', 'tianshu_huoshenzhurong', 'Tianshu_huoshenzhurong', 'TianShu_huoshenzhurong', 'TianShu_kuafu', 'Tianshu_kuafu', 'Tianshu_huoshenzhuronga', 'tianshu_xuannv', 'tianshu_shuishengonggong', 'Tianshu_shuishengonggonga', 'Tianshu_xuannva', 'Tianshu_shuishengonggong', 'TianShu_shuishengonggong', 'tianshu_zhuque', 'Tianshu_baihu', 'Tianshu_baihua', 'Tianshu_zhuque', 'Tianshu_zhuquea', 'Tianshu_zhuqueb', 'tianshu_kuafu', 'Tianshu_kuafua', 'tianshu_xuanwu', 'Tianshu_xuanwu', 'Tianshu_xuanwua', 'xn_xiaoshan', 'xn_xiaosha', 'Tianshu_xuannv', 'TianShu_xuannv', 'tianshu_kuafua', 'xn_xiaojiu', 'xn_xiaotao', 'xn_xiaole', 'tianshu_xuannva'],
              wenhetaoni: ['whlw_lijue', 'whlw_jiaxu', 'whlw_fanchou', 'whlw_zhangji', 'whlw_guosi', 'whlw1_lijue', 'whlw1_jiaxu', 'whlw1_fanchou', 'whlw1_zhangji', 'whlw1_guosi', 'whlw2_lijue', 'whlw2_jiaxu', 'whlw2_fanchou', 'whlw2_zhangji', 'whlw2_guosi', 'WenHe_jiaxu', 'WenHe_lijue', 'WenHe_guosi', 'WenHe_fanchou', 'WenHe_zhangji', 'wenhe_jiaxu', 'wenhe_lijue', 'wenhe_guosi', 'wenhe_fanchou', 'wenhe_zhangji'],
              zhuhoufadong: ['fadong_sunjian', 'fadong_huaxiong', 'fadong_guosi', 'fadong_lijue', 'fadong_fanchou', 'fadong_dongyue', 'fadong_niufudongxie', 'fadong_zhangji', 'fadong_baolvejun', 'fadong_fengyaojun', 'fadong_hubenjun', 'fadong_longxiangjun', 'fadong_feixiongjunzuo', 'fadong_feixiongjunyou'],
              zhongyeguanxing: ['zhongye_qinglong', 'zhongye_baihu', 'zhongye_zhuque', 'zhongye_xuanwu', 'zhongye_jiaomujiao', 'zhongye_kangjinlong', 'zhongye_xingrima', 'zhongye_yihuoshe', 'zhongye_canshuiyuan', 'zhongye_doumuxie', 'zhongye_kuimulang', 'zhongye_weiyueyan'],
              zhengzhanhulao: ['sanying_lvbu', 'hulao22_lvbu3', 'hulao22_lvbu2', 'hulao22_lvbu1', 'hulao23_lvbu3', 'hulao23_lvbu2', 'hulao23_lvbu1', 'hulao21_lvbu3', 'hulao20_lvbub', 'hulao20_lvbu2', 'hulao20_lvbua', 'hulao20_lvbu1', 'hulao24_lvbu1', 'hulao24_lvbu2', 'hulao24_lvbu3', 'hulao21_lvbu2', 'hulao21_lvbu1', 'hulaoguan_lijue', 'hulaoguan_guosi', 'xinhulaoguan_lijue', 'xinhulaoguan_guosi', 'hulaoguan_huaxiong', 'xinhulaoguan_huaxiong', 'zhengzhan_huaxiong', 'xinhulaoguan_zhangji', 'xinhulaoguan_fanchou', 'hulaoguan_tanlangjun', 'hulaoguan_feixiongjun', 'hulaoguan_baolvejun', 'hulaoguan_fengyaojun', 'xinhulaoguan_caoxing', 'xinhulaoguan_chengong', 'xinhulaoguan_gaoshun', 'zhengzhan_caoxing', 'zhengzhan_dongxie', 'zhengzhan_chengong', 'zhengzhan_gaoshun', 'hulaoguan_hubenjun', 'hulaoguan_longxiangjun', 'hulaoguan_dongxie', 'xinhulaoguan_dongxie', 'hulaoguan_caoxing', 'hulaoguan_chengong', 'Hulaoguan_chengong', 'hulaoguan_gaoshun', 'hulaoguan_zhangji', 'hulaoguan_fanchou'],
            },
          },
          character: {
            wjldc: ['male', '', 0, ['wjldc_boss'], ['boss', 'hiddenboss']],
            hzkq1: ['male', '', 0, ['pzms', 'hzkq_boss_intro1', 'hzkq_boss_intro2', 'hzkq_boss_intro9', 'hzkq_boss_intro3', 'hzkq_boss_intro4'], ['boss', 'bossallowed']],
            hzkq5: ['male', '', 0, ['ppms', 'hzkq_boss_intro5', 'hzkq_boss_intro6', 'hzkq_boss_intro10', 'hzkq_boss_intro7', 'hzkq_boss_intro8'], ['boss', 'bossallowed']],
            shty: ['male', '', 0, ['shty_boss'], ['boss', 'hiddenboss']],
            tsld: ['male', '', 0, ['tsld_boss'], ['boss', 'hiddenboss']],
            bzts: ['male', '', 0, ['bzts_boss'], ['boss', 'hiddenboss']],
            zzhl: ['male', '', 0, ['zzhl_boss'], ['boss', 'hiddenboss']],
            olns: ['male', '', 0, ['olns_boss'], ['boss', 'hiddenboss']],
            qgzx: ['male', '', 0, ['qgzx_boss'], ['boss', 'hiddenboss']],
            jgzw: ['male', '', 0, ['jgzw_boss'], ['boss', 'hiddenboss']],
            jiguan_mukui3: ['male', 'qun', 60, ['jiguan_jihuo', 'jiguan_chongzhuang', 'jiguan_chongneng', 'jiguan_dangji'], []],
            jiguan_mukui2: ['male', 'qun', 40, ['jiguan_jihuoa', 'jiguan_chongzhuanga', 'jiguan_chongnenga', 'jiguan_dangji'], []],
            jiguan_mukui1: ['male', 'qun', 20, ['jiguan_jihuoa', 'jiguan_chongnengb', 'jiguan_dangji'], []],
            jiguan_jidun3: ['male', 'qun', 30, ['jiguan_tongdun', 'jiguan_dunfan', 'jiguan_dunlie'], []],
            jiguan_jidun2: ['male', 'qun', 20, ['jiguan_tongdun', 'jiguan_dunfana', 'jiguan_dunliea'], []],
            jiguan_jidun1: ['male', 'qun', 10, ['jiguan_tongdun', 'jiguan_dunlieb'], []],
            jiguan_jiren3: ['male', 'qun', 30, ['jiguan_lianren', 'jiguan_huoren', 'jiguan_zhatang'], []],
            jiguan_jiren2: ['male', 'qun', 20, ['jiguan_lianrena', 'jiguan_huorena', 'jiguan_zhatanga'], []],
            jiguan_jiren1: ['male', 'qun', 10, ['jiguan_lianrenb', 'jiguan_huorena', 'jiguan_zhatangb'], []],
            jiguan_sunzhua3: ['male', 'qun', 30, ['jiguan_lizhua', 'jiguan_gelie'], []],
            jiguan_sunzhua2: ['male', 'qun', 20, ['jiguan_lizhua', 'jiguan_geliea'], []],
            jiguan_sunzhua1: ['male', 'qun', 10, ['jiguan_lizhuaa', 'jiguan_geliea'], []],
            jiguan_musun3: ['male', 'qun', 60, ['jiguan_siming', 'jiguan_zhenchi', 'jiguan_yufeng', 'jiguan_zhuiluo'], []],
            jiguan_musun2: ['male', 'qun', 40, ['jiguan_siminga', 'jiguan_zhenchi', 'jiguan_zhuiluo'], []],
            jiguan_musun1: ['male', 'qun', 20, ['jiguan_siminga', 'jiguan_zhenchi', 'jiguan_zhuiluo'], []],
            jiguan_sunchi3: ['male', 'qun', 60, ['jiguan_fukong', 'jiguan_fuchong', 'jiguan_shiheng'], []],
            jiguan_sunchi2: ['male', 'qun', 40, ['jiguan_fukong', 'jiguan_fuchonga', 'jiguan_shihenga'], []],
            jiguan_sunchi1: ['male', 'qun', 20, ['jiguan_fukong', 'jiguan_fuchongb', 'jiguan_shihengb'], []],
            jiguan_muhu3: ['male', 'qun', 60, ['jiguan_huxiao', 'jiguan_xushi', 'jiguan_tieshan', 'jiguan_daodi'], []],
            jiguan_muhu2: ['male', 'qun', 40, ['jiguan_huxiao', 'jiguan_xushia', 'jiguan_daodi'], []],
            jiguan_muhu1: ['male', 'qun', 20, ['jiguan_huxiao', 'jiguan_xushib', 'jiguan_daodi'], []],
            jiguan_huzhua3: ['male', 'qun', 30, ['jiguan_mengzhua', 'jiguan_mengji', 'jiguan_pozhua'], []],
            jiguan_huzhua2: ['male', 'qun', 20, ['jiguan_mengzhua', 'jiguan_mengjia', 'jiguan_pozhuaa'], []],
            jiguan_huzhua1: ['male', 'qun', 10, ['jiguan_mengzhua', 'jiguan_pozhuab'], []],
            jiguan_huwei3: ['male', 'qun', 30, ['jiguan_tiewei', 'jiguan_hengsao', 'jiguan_powei'], []],
            jiguan_huwei2: ['male', 'qun', 20, ['jiguan_tiewei', 'jiguan_hengsaoa', 'jiguan_poweia'], []],
            jiguan_huwei1: ['male', 'qun', 10, ['jiguan_tiewei', 'jiguan_poweib'], []],
            jiange_yunpingqinglong: ['male', 'shu', 4, ['jiange_jiguan', 'jiange_mojian'], ['clan:器械']],
            jiange_lingjiaxuanwu: ['male', 'shu', 5, ['jiange_jiguan', 'jiange_yizhong', 'jiange_lingyu'], ['clan:器械']],
            jiange_chiyuzhuque: ['female', 'shu', 4, ['jiange_jiguan', 'jiange_yuhuo', 'jiange_tianyun'], ['clan:器械']],
            jiange_jileibaihu: ['male', 'shu', 4, ['jiange_jiguan', 'jiange_zhenwei', 'jiange_benlei'], ['clan:器械']],
            jiange_fudibian: ['male', 'wei', 3, ['jiange_jiguan', 'shidian_didong'], ['clan:器械']],
            jiange_tuntianchiwen: ['male', 'wei', 5, ['jiange_jiguan', 'jiange_tanshi', 'jiange_tunshi'], ['clan:器械']],
            jiange_lieshiyazi: ['male', 'wei', 5, ['jiange_jiguan', 'jiange_nailuo'], ['clan:器械']],
            jiange_shihuosuanni: ['male', 'wei', 3, ['jiange_jiguan', 'shidian_lianyu'], ['clan:器械']],
            jiange_duanyuzhongda: ['male', 'wei', 5, ['jiange_konghun', 'jiange_fanshi', 'jiange_xuanlei'], ['clan:英魂']],
            jiange_juechenmiaocai: ['male', 'wei', 4, ['jiange_chuanyun', 'jiange_leili', 'jiange_fengxing'], ['clan:英魂']],
            jiange_tianhoukongming: ['male', 'shu', 4, ['jiange_biantian', 'jiange_bazhen'], ['clan:英魂']],
            jiange_gongshenyueying: ['female', 'shu', 3, ['jiange_gongshen', 'jiange_zhinang', 'jiange_jingmiao'], ['clan:英魂']],
            jiange_liedixuande: ['male', 'shu', 4, ['jiange_lingfeng', 'jiange_jizhen', 'jiange_qinzhen'], ['clan:英魂']],
            jiange_shenjianhansheng: ['male', 'shu', 4, ['jiange_qixian', 'jiange_jinggong', 'jiange_beishi'], ['clan:英魂']],
            jiange_yuhuoshiyuan: ['male', 'shu', 4, ['jiange_yuhuo', 'jiange_qiwu', 'jiange_tianyu'], ['clan:英魂']],
            jiange_weiwuyide: ['male', 'shu', 4, ['jiange_mengwu', 'jiange_hupo', 'jiange_shuhun'], ['clan:英魂']],
            jiange_baijiwenyuan: ['male', 'wei', 5, ['jiange_jiaoxie', 'jiange_shuailing'], ['clan:英魂']],
            jiange_elaiziman: ['male', 'wei', 5, ['jiange_yingji', 'jiange_zhene', 'jiange_weizhu'], ['clan:英魂']],
            jiange_yiyongwenze: ['male', 'wei', 5, ['jiange_hanjun', 'jiange_pigua', 'jiange_zhengji'], ['clan:英魂']],
            jiange_jiarenzidan: ['male', 'wei', 5, ['jiange_chiying', 'jiange_jingfan', 'jiange_zhenxi'], ['clan:英魂']],
            jiange_kumuyuanrang: ['male', 'wei', 5, ['jiange_bashi', 'jiange_danjing', 'jiange_tongjun'], ['clan:英魂']],
            jiange_qiaokuijunyi: ['male', 'wei', 4, ['jiange_huodi', 'jiange_jueji'], ['clan:英魂']],
            jiange_fuweizilong: ['male', 'shu', 5, ['jiange_fengjian', 'jiange_keding', 'jiange_longwei'], ['clan:英魂']],
            jiange_yihanyunchang: ['male', 'shu', 5, ['jiange_xiaorui', 'jiange_huchen', 'jiange_tianjiang'], ['clan:英魂']],
            sy_zhuque: ['female', 'shen', 4, ['sy_shenyi', 'sy_fentian'], []],
            sy_qinglong: ['male', 'shen', 4, ['sy_shenyi', 'sy_tengyun'], []],
            sy_baihu: ['male', 'shen', 4, ['sy_shenyi', 'sy_kuangxiao'], []],
            sy_xuanwu: ['female', 'shen', 4, ['sy_shenyi', 'sy_lingqu'], []],
            sy_shuishengonggong: ['male', 'shen', 6, ['sy_shenyi', 'sy_juehong'], []],
            sy_shuishenxuanming: ['female', 'shen', 6, ['sy_shenyi', 'sy_zirun'], []],
            sy_jinshenrushou: ['male', 'shen', 5, ['sy_shenyi', 'sy_xingqiu'], []],
            sy_yanling: ['male', 'shen', 4, ['sy_huihuo', 'sy_furan'], []],
            sy_mushengoumang: ['male', 'shen', 5, ['sy_shenyi', 'sy_buchun'], []],
            sy_shujing: ['female', 'shen', 2, ['sy_cuidu'], []],
            sy_mingxingzhu: ['female', 'shen', 3, ['sy_qingzhu', 'sy_jiazu'], []],
            sy_taihao: ['male', 'shen', 6, ['sy_shenyi', 'sy_shenen', 'sy_qingyi'], []],
            sy_yandi: ['male', 'shen', 6, ['sy_shenyi', 'sy_shenen', 'sy_chiyi'], []],
            sy_shaohao: ['male', 'shen', 6, ['sy_shenyi', 'sy_shenen', 'sy_baiyi'], []],
            sy_zhuanxu: ['male', 'shen', 4, ['sy_shenyi', 'sy_shenen', 'sy_zaoyi'], []],
            sy_huoshenzhurong: ['male', 'shen', 5, ['sy_shenyi', 'sy_xingxia'], []],
            huoshao_caohong: ['male', 'wei', 20, ['huoshao_heyi', 'huoshao_huyuan', 'huoshao_zhanjian'], []],
            huoshao_caocao: ['male', 'wei', 20, ['new_rejianxiong', 'huoshao_hujia', 'huoshao_zhanjian'], []],
            huoshao_zhanghe: ['male', 'wei', 20, ['huoshao_qiaobian', 'huoshao_yangwu', 'huoshao_zhanjian'], []],
            huoshao_yuejin: ['male', 'wei', 20, ['huoshao_xiaoguo', 'huoshao_zhanjian'], []],
            huoshao_lidian: ['male', 'wei', 20, ['huoshao_xunxun', 'huoshao_wangxi', 'huoshao_zhanjian'], []],
            huoshao_xiahoudun: ['male', 'wei', 20, ['huoshao_ganglie', 'huoshao_qingjian', 'huoshao_zhanjian'], []],
            huoshao_chengyu: ['male', 'wei', 20, ['huoshao_shipo', 'huoshao_shefu', 'huoshao_benyu', 'huoshao_zhanjian'], []],
            huoshao_zhangliao: ['male', 'wei', 20, ['huoshao_tuxi', 'huoshao_zhanjian'], []],
            huoshao_xiahouyuan: ['male', 'wei', 20, ['huoshao_shensu', 'huoshao_zhanjian'], []],
            huoshao_xuhuang: ['male', 'wei', 20, ['huoshao_duanliang', 'huoshao_jiezi', 'huoshao_zhanjian'], []],
            huoshao_xunyou: ['male', 'wei', 20, ['huoshao_qice', 'huoshao_zhanjian'], []],
            huoshao_yujin: ['male', 'wei', 20, ['huoshao_zhenjun', 'huoshao_zhanjian'], []],
            huoshao_wenpin: ['male', 'wei', 20, ['huoshao_zhenwei', 'huoshao_zhanjian'], []],
            huoshao_xuzhu: ['male', 'wei', 20, ['huoshao_luoyi', 'huoshao_zhanjian'], []],
            shezhan_yufan: ['male', 'wu', 25, ['shezhan_zongxuan', 'shezhan_zhiyan', 'shezhan_shezhan'], []],
            shezhan_luji: ['male', 'wu', 25, ['shezhan_huaiju', 'shezhan_yili', 'shezhan_zhenglun', 'shezhan_shezhan'], []],
            shezhan_yanjun: ['male', 'wu', 25, ['xinfu_guanchao', 'shezhan_xunxian', 'shezhan_shezhan'], []],
            shezhan_zhangzhang: ['male', 'wu', 25, ['shezhan_zhijian', 'shezhan_guzheng', 'shezhan_shezhan'], []],
            shezhan_xuezong: ['male', 'wu', 25, ['shezhan_funan', 'shezhan_jiexun', 'shezhan_shezhan'], []],
            shanhe_jiudianluocha: ['male', 'yao', 5, ['shanhe_cuorui', 'sy_kuangxiao', 'shanhe_roulin', 'shanhe_yaowang', 'shanhe_zhaxiang', 'shanhe_tianming', 'shanhe_shijiu', 'shanhe_kuangfu', 'shanhe_shoucheng', 'shanhe_qiangwu'], []],
            shanhe1_jiudianluocha: ['male', 'yao', 7, ['shanhe_cuorui', 'sy_kuangxiao', 'shanhe_roulin', 'shanhe_yaowang', 'shanhe_zhaxiang', 'shanhe_hanzhan', 'shanhe_shijiu', 'shanhe_huji', 'shanhe_hongyan', 'shanhe_fangzhu'], []],
            shanhe2_jiudianluocha: ['male', 'yao', 7, ['shanhe_cuorui', 'sy_kuangxiao', 'shanhe_roulin', 'shanhe_yaowang', 'shanhe_zhaxiang', 'shanhe_jili', 'shanhe_shijiu', 'shanhe_wuliang', 'shanhe_wusheng'], []],
            shanhe3_jiudianluocha: ['male', 'yao', 7, ['shanhe_cuorui', 'sy_kuangxiao', 'shanhe_roulin', 'shanhe_yaowang', 'shanhe_zhaxiang', 'shanhe_shijiu', 'jiange_chiying', 'shanhe_yimie', 'shanhe_kuanggu'], []],
            shanhe1_moluoyecha: ['male', 'yao', 5, ['shanhe_kongcheng', 'shanhe_yuanchou', 'shanhe_sanyi', 'shanhe_yuren', 'shanhe_leizhou', 'shanhe_gangliea'], []],
            shanhe2_moluoyecha: ['male', 'yao', 5, ['shanhe_kongcheng', 'shanhe_yuanchou', 'shanhe_sanyi', 'shanhe_yuren', 'shanhe_leizhou', 'shidian_xiaoshou'], []],
            shanhe_moxiang: ['male', 'yao', 5, ['shanhe_liegonga', 'jiange_jiguan', 'shanhe_linglong', 'shanhe_bamen', 'shanhe_fanzhen'], []],
            shanhe_xiejiaokuilei: ['male', 'yao', 6, ['shanhe_qingzhong', 'jiange_jiguan', 'fenghuo_dimeng', 'shanhe_ganlu', 'qq_zhue', 'shanhe_jijiu'], []],
            shanhe1_gulong: ['male', 'yao', 4, ['jiange_zhene', 'shanhe_bingfen', 'hd_xiangde', 'fenghuo_tiaoxin', 'shanhe_ganglie', 'shanhe_zhongyun', 'shanhe_jieminga'], []],
            shanhe2_gulong: ['male', 'qun', 4, ['shanhe_zhenggu', 'shidian_taiping', 'shanhe_modao', 'shanhe_kunfen', 'xl_jiushou', 'shanhe_yinhu', 'shanhe_baoli', 'shidian_beiming'], []],
            shanhe_xiaoyaoguai: ['male', 'yao', 5, ['hulaoguan_jingji', 'shanhe_huaiju', 'shanhe_qingzhong', 'jiange_xiaorui', 'shanhe_longyin'], []],
            shanhe1_xiaoyaoguai: ['male', 'yao', 5, ['hulaoguan_jingji', 'shanhe_huaiju', 'shanhe_qingzhong', 'shanhe_tianjiang', 'shanhe_longyin'], []],
            shanhe_zhangqikuilei: ['male', 'yao', 3, ['shanhe_langxi', 'jiange_fengjian', 'jiange_keding', 'shanhe_kuanggu', 'jiange_jueji'], []],
            shanhe1_zhangqikuilei: ['male', 'yao', 4, ['shanhe_langxi', 'jiange_fengjian', 'jiange_keding', 'shanhe_kuanggu', 'jiange_jueji'], []],
            shanhe2_zhangqikuilei: ['male', 'yao', 5, ['shanhe_langxi', 'jiange_fengjian', 'jiange_keding', 'shanhe_jixia', 'fenghuo_shuimeng', 'shanhe_yinju'], []],
            shanhe3_zhangqikuilei: ['male', 'yao', 6, ['shanhe_langxi', 'jiange_fengjian', 'jiange_keding', 'shanhe_jixia', 'fenghuo_shuimeng', 'shanhe_yinju'], []],
            shanhe_huangtongkuilei: ['male', 'yao', 4, ['jiange_jiguan', 'shanhe_anjian', 'shanhe_jilia', 'shanhe_xili'], []],
            shanhe1_huangtongkuilei: ['male', 'yao', 4, ['jiange_jiguan', 'shanhe_anjian', 'shanhe_longyin', 'shanhe_xili'], []],
            shanhe_qingtongkuilei: ['male', 'yao', 5, ['jiange_jiguan', 'fenghuo_yicong', 'shanhe_jieyinga', 'shanhe_xili'], []],
            shanhe_xinulaoguowang: ['male', 'xie', 4, ['shanhe_qianxun', 'shanhe_qinwang', 'shanhe_naman', 'shanhe_shanduan', 'shanhe_dianjun', 'shanhe_hunzi', 'shanhe_fangquana'], ['zhu']],
            shanhe1_xinulaoguowang: ['male', 'xie', 4, ['shanhe_qianxun', 'shanhe_qinwang', 'shanhe_naman', 'shanhe_dianjun', 'jiange_zhenxi', 'shanhe_yuhua'], ['zhu']],
            shanhe_dianqianhuwei: ['male', 'xie', 3, ['shanhe_longdan', 'shanhe_qiangwu', 'shanhe_chongzhen', 'shanhe_yingzia', 'shanhe_xianzhen', 'shanhe_buqua'], []],
            shanhe_xinuguowang: ['male', 'xie', 6, ['shanhe_feiyang', 'shanhe_xingluan', 'shanhe_chenshuo', 'shanhe_buwu', 'jiange_shuailing', 'jiange_longwei', 'shanhe_zonghe', 'shanhe_zhenggu', 'shanhe_lvli'], ['zhu']],
            shanhe1_xinuguowang: ['male', 'xie', 7, ['shanhe_feiyang', 'shanhe_xingluan', 'shanhe_chenshuo', 'shanhe_buwu', 'jiange_shuailing', 'jiange_longwei', 'shanhe_zonghe', 'jiange_chiying', 'sy_buchun'], ['zhu']],
            shanhe_zhiliaozhenfa: ['male', 'qun', 3, ['shanhe_jijiu', 'shanhe_qingnang', 'jiange_jiguan', 'nianshou_jingjue', 'nianshou_renxing', 'shanhe_hongyan'], []],
            shanhe_fangyuzhenfa: ['male', 'qun', 3, ['shanhe_xianfu', 'shanhe_tianxiang', 'jiange_jiguan', 'shanhe_fankui', 'shanhe_jilia', 'shanhe_duanhuna'], []],
            shanhe_jiuweihu: ['female', 'yao', 4, ['nianshou_mengtai', 'shanhe_meibu', 'shanhe_biri', 'shanhe_luoshen', 'shanhe_keji', 'shanhe_cangxin', 'shanhe_tianfa', 'shanhe_guose', 'shanhe_anguo'], []],
            shanhe_xuanfenghuanxiang: ['male', 'yao', 5, ['shanhe_luanfeng', 'shanhe_huaiju', 'shanhe_qingzhong', 'shanhe_fengpo', 'shanhe_zhiji', 'shanhe_beige', 'shanhe_liangzhu'], []],
            shanhe_yinglonghuanxiang: ['male', 'yao', 5, ['jiange_longwei', 'shanhe_huaiju', 'shanhe_qingzhong', 'shanhe_shajue', 'shanhe_xionghuo', 'shanhe_langxi', 'shanhe_jieyuan'], []],
            shanhe1_huyao: ['male', 'yao', 4, ['shanhe_yinhu', 'jiange_huchen', 'jiange_xiaorui', 'jiange_hupo', 'shanhe_chenghu', 'shanhe_yinju'], []],
            shanhe1_xiangliujushe: ['male', 'yao', 8, ['nianshou_mengtai', 'sw_yaoshou', 'xl_duqu', 'shanhe_bashou', 'shanhe_zhenggu', 'shanhe_kongcheng', 'shanhe_xueji', 'shanhe_zaie', 'xl_re_echou', 'nianshou_jingti', 'shanhe_chouhai'], []],
            shanhe2_xiangliujushe: ['male', 'yao', 9, ['nianshou_mengtai', 'sw_yaoshou', 'xl_duqu', 'shanhe_bashou', 'shanhe_zhenggu', 'shanhe_kongcheng', 'jiange_jingfan', 'shanhe_chouhai'], []],
            shanhe_yaosengzhenjia: ['male', 'xie', 5, ['shanhe_qianjie', 'shanhe_guhuo', 'shanhe_sankuang', 'shanhe_cuanchao', 'shanhe_taoluan', 'shanhe_yingzi', 'shanhe_luanxin', 'jiange_chiying', 'shanhe_qianhuan'], []],
            shanhe1_yaosengzhenjia: ['male', 'xie', 5, ['shanhe_qianjie', 'shanhe_guhuo', 'shanhe_sankuang', 'shanhe_cuanchao', 'shanhe_youji', 'shanhe_luanxin', 'shanhe_shanduan', 'shanhe_yilie', 'shanhe_dangxian'], []],
            shanhe_kuileiguowang: ['male', 'xie', 7, ['shanhe_qianjie', 'shanhe_hezhong', 'boss_qice', 'jiange_tunshi', 'shanhe_jianying', 'shanhe_lianying', 'jiange_zhene', 'shanhe_zhufang', 'shanhe_duanhuna'], []],
            shanhe_haiheshang: ['male', 'yao', 5, ['nianshou_qixiang', 'shanhe_tanyu', 'shanhe_jicai', 'shanhe_baoyu', 'shanhe_jieyuan', 'shanhe_xuzhang', 'shanhe_gongqing', 'shanhe_chouhai', 'shanhe_benyu'], []],
            shanhe1_haiheshang: ['male', 'yao', 5, ['nianshou_qixiang', 'shanhe_tanyu', 'shanhe_jicai', 'shanhe_baoyu', 'shanhe_jueyan', 'shanhe_xuzhang', 'shanhe_tuxing', 'shanhe_lvli'], []],
            shanhe2_haiheshang: ['male', 'yao', 5, ['nianshou_qixiang', 'shanhe_tanyu', 'shanhe_jicai', 'shanhe_baoyu', 'shanhe_jiexuan', 'shanhe_xuzhang', 'shanhe_xianji', 'shanhe_zhengding'], []],
            shanhe3_haiheshang: ['male', 'yao', 18, ['nianshou_qixiang', 'shanhe_tanyu', 'shanhe_jicai', 'shanhe_ranshang', 'shanhe_enyuan', 'shanhe_xuzhang', 'fadong_yangwu', 'shanhe_zhaxiang'], []],
            shanhe_feiduan: ['male', 'xie', 3, ['shanhe_qiangxi', 'shanhe_yangkuang', 'shanhe_busi', 'shanhe_juexing', 'shanhe_kuanggu', 'shanhe_xietu', 'shanhe_qiaomeng', 'shanhe_jianxiong'], []],
            shanhe1_feiduan: ['male', 'xie', 3, ['shanhe_qiangxi', 'shanhe_yangkuang', 'fenghuo_tiaoxin', 'shanhe_nuyan', 'shanhe_xietu', 'shanhe_zhaxiang', 'shanhe_dangxian'], []],
            shanhe_shenlouyaoshi: ['male', 'yao', 6, ['shanhe_qianhuan', 'yz_fengdong', 'shanhe_jinghua', 'shanhe_jizhi', 'shanhe_qicai', 'shanhe_nuzhan', 'shanhe_huanyue', 'shanhe_zhinang', 'shanhe_sijian'], []],
            shanhe1_shenlouyaoshi: ['male', 'yao', 6, ['shanhe_zhenlue', 'shanhe_qianhuan', 'yz_fengdong', 'shanhe_jinghua', 'shanhe_huanyue', 'shanhe_zhenwei', 'shanhe_tianxianga'], []],
            shanhe2_shenlouyaoshi: ['male', 'yao', 5, ['shanhe_zhenlue', 'shanhe_qianhuan', 'yz_fengdong', 'shanhe_jinghua', 'shanhe_huanyue', 'jiange_zhene', 'shanhe_beiqi'], []],
            shanhe_jiejianxiaogui: ['male', 'yao', 6, ['shanhe_luoying', 'nianshou_jingjue', 'shanhe_xiaoguo', 'shanhe_mingzhe'], []],
            shanhe_fuyuxiaogui: ['male', 'yao', 6, ['shanhe_mizhao', 'fenghuo_ziyuan', 'shanhe_haoshi', 'shanhe_rende'], []],
            shanhe_guimianxiuluo: ['male', 'yao', 5, ['shanhe_ningwu', 'shanhe_guixin', 'shanhe_zongyu', 'shanhe_baobian', 'shanhe_duling', 'shanhe_qimou', 'shanhe_liegonga'], []],
            shanhe_moluoyecha: ['male', 'yao', 6, ['shanhe_kongcheng', 'shanhe_yuanchou', 'shanhe_sanyi', 'jiange_jingmiao', 'jiange_yuhuo', 'shanhe_zhidao', 'shanhe_yuren', 'shanhe_wuying', 'shanhe_juejue'], []],
            shanhe_kulou: ['male', 'yao', 2, ['shidian_guihuo', 'shanhe_jingfan', 'shanhe_juejing', 'shidian_mingbao', 'shanhe_zhuiyi', 'shanhe_cuiku'], []],
            shanhe1_kulou: ['male', 'yao', 2, ['shidian_guihuo', 'shanhe_yaowua', 'shanhe_juejing', 'shidian_mingbao', 'shanhe_zhuiyi', 'shanhe_cuiku'], []],
            shanhe2_kulou: ['male', 'yao', 2, ['shidian_guihuo', 'shanhe_juejing', 'shidian_mingbao', 'shanhe_zhuiyi', 'shanhe_cuiku'], []],
            shanhe_gulong: ['male', 'yao', 5, ['shanhe_shensu', 'shanhe_zhengding', 'shanhe_kongcheng', 'shanhe_shiyuan', 'shanhe_yizhao'], []],
            shanhe_chi: ['male', 'yao', 4, ['shanhe_lieshu', 'sy_fentian', 'shanhe_huoxing', 'shanhe_shensua', 'shanhe_mengtai'], []],
            shanhe_mei: ['male', 'yao', 4, ['shanhe_ningwua', 'shanhe_qingleng', 'shanhe_leizhu', 'shanhe_shensua', 'shanhe_mengtai'], []],
            shanhe_wang: ['male', 'yao', 4, ['shanhe_zhouyu', 'shanhe_leizhou', 'shanhe_leizhu', 'shanhe_shensua', 'shanhe_mengtai'], []],
            shanhe_liang: ['male', 'yao', 4, ['shanhe_yanshuang', 'shanhe_yunshen', 'shanhe_leizhu', 'shanhe_shensua', 'shanhe_mengtai'], []],
            shanhe_changgongbing: ['male', 'xie', 2, ['shanhe_liegong', 'shanhe_anjian', 'shanhe_niluan', 'shanhe_liushi', 'shanhe_zhanwan'], []],
            shanhe_dadunbing: ['male', 'xie', 3, ['shanhe_dungong', 'shanhe_jilia', 'shanhe_zishou', 'shanhe_zhufang', 'shanhe_jilei'], []],
            shanhe1_dadunbing: ['male', 'xie', 3, ['shanhe_dungong', 'shanhe_zhenwei', 'shanhe_zishou', 'shanhe_zhufang', 'shanhe_jilei'], []],
            shanhe_guzu: ['male', 'yao', 2, ['shanhe_langdao', 'shanhe_kuanggua', 'shanhe_shouyi', 'sw_yaoshou', 'shanhe_gangliea'], []],
            shanhe1_guzu: ['male', 'yao', 2, ['shanhe_modao', 'jiange_tianyun', 'shanhe_leizhu', 'shanhe_zongkui', 'shanhe_canshia'], []],
            shanhe2_guzu: ['male', 'yao', 2, ['shanhe_modao', 'jiange_tianyun', 'shanhe_leizhu', 'shanhe_guju', 'shanhe_baijia'], []],
            shanhe_qingtongmoxiang: ['male', 'yao', 5, ['shanhe_canshi', 'shanhe_kongcheng', 'shanhe_yimie', 'fenghuo_aocai', 'shanhe_xiangle', 'shanhe_wuyan'], []],
            shanhe_baiyinmoxiang: ['male', 'yao', 5, ['shanhe_canshi', 'shanhe_zishua', 'shanhe_yimie', 'shanhe_huaiju', 'shanhe_yingzi', 'shanhe_wuyan'], []],
            shanhe_hundun: ['male', 'yao', 4, ['hd_wuzang', 'hd_xiangde', 'sw_eyi', 'hd_yinzei', 'shanhe_paoxiao', 'shanhe_jianga', 'shanhe_kuanggu'], []],
            shanhe_qiongqi: ['male', 'yao', 4, ['qq_futai', 'qq_zhue', 'sw_eyi', 'qq_yandu', 'shanhe_shenxian'], []],
            shanhe_taotie: ['male', 'yao', 4, ['tt_tanyu', 'tt_cangmu', 'sw_eyi', 'tt_jicai', 'shanhe_chouhai', 'shanhe_keshou', 'shanhe_jiaozi'], []],
            shanhe_taowu: ['male', 'yao', 4, ['tw_minwan', 'tw_nitai', 'sw_eyi', 'shanhe_luanchang', 'shanhe_zhendu', 'sy_lingqu'], []],
            shanhe1_jiuweihu: ['female', 'yao', 5, ['shanhe_zhenlue', 'shanhe_meibu', 'shanhe_biri', 'shanhe_lianzhu', 'shanhe_xiehui', 'shanhe_bixiong', 'shanhe_tianfa', 'shanhe_dulie', 'shanhe_beiqi'], []],
            shanhe_huoqiling: ['male', 'yao', 5, ['shanhe_zhue', 'shanhe_jueman', 'shanhe_zhaohuo', 'shanhe_honglian'], []],
            shanhe_leiqiling: ['male', 'yao', 5, ['shanhe_zhue', 'shanhe_jianman', 'shanhe_zhaohuo', 'shanhe_honglian'], []],
            shanhe_xiangliujushe: ['male', 'yao', 6, ['sw_yaoshou', 'xl_duqu', 'shanhe_bashou', 'shanhe_sishe', 'shanhe_jiaozi', 'shanhe_chouhai', 'shanhe_zaie', 'fadong_moqu', 'shanhe_bamen'], []],
            shanhe_yixin: ['male', 'xie', 6, ['shanhe_feiyang', 'shanhe_tiepao', 'shanhe_taidao', 'shanhe_changqiang', 'shanhe_zhongyi', 'shanhe_yongjue', 'shanhe_jiansheng', 'shanhe_zhihu', 'shanhe_jianhe'], []],
            shanhe_chijianwuzhe: ['male', 'xie', 6, ['shanhe_choutao', 'shanhe_kuanggu', 'shanhe_shihun', 'shanhe_zhengding', 'shanhe_yilie', 'shanhe_zhuiji', 'shanhe_tonghua', 'shanhe_longdana'], []],
            shanhe_lingji: ['female', 'yao', 6, ['shanhe_feiyang', 'shanhe_bingxin', 'yz_fengdong', 'shanhe_juepan', 'shanhe_wanyi', 'nianshou_mengtai', 'shanhe_biyue', 'shanhe_zhouxue', 'shanhe_xuechi', 'shanhe_zhangji'], []],
            shanhe_sanshiyou: ['male', 'yao', 4, ['sw_eyi', 'shanhe_sanku', 'shanhe_rensan', 'fenghuo_yicong', 'shanhe_tuntian', 'shanhe_zaoxian', 'shanhe_wangliangb'], []],
            shanhe1_sanshiyou: ['male', 'yao', 3, ['shanhe_rensan', 'shanhe_mengjin', 'shanhe_wangliang'], []],
            shanhe_shuishengonggong: ['male', 'yao', 4, ['sy_juehong', 'sy_lingqu', 'sw_eyi', 'shanhe_pojuna', 'shanhe_juece', 'shanhe_shanzhuan'], []],
            shanhe_wangxiang: ['male', 'yao', 2, ['shanhe_shuiyong', 'sy_baiyi', 'shanhe_chengxiong', 'shanhe_lianzhang', 'shanhe_fangquan', 'shanhe_jijiu', 'jiange_chiying', 'shanhe_jieming'], []],
            shanhe_shuling: ['female', 'yao', 6, ['shanhe_nitai', 'jiange_jueji', 'shanhe_qiongmu', 'shanhe_quhu', 'shanhe_ranshang', 'shanhe_shunxue', 'shidian_manjia', 'shanhe_zhaxiang', 'shanhe_jilia'], []],
            shanhe_huyao: ['male', 'yao', 4, ['tt_cangmu', 'shanhe_lianying', 'shanhe_qianxi', 'shanhe_yinhua', 'shanhe_chenghu', 'shidian_mingbao'], []],
            shanhe2_huyao: ['male', 'yao', 2, ['shanhe_langxi', 'shanhe_dangxian', 'shanhe_zhiman', 'shanhe_feijun'], []],
            shanhe_baihu: ['male', 'yao', 5, ['shanhe_qianxia', 'shanhe_yimie', 'shanhe_yaowu', 'shanhe_xiaoxi', 'shanhe_cuijue', 'shanhe_wuying', 'shanhe_xianji'], []],
            shanhe_yimao: ['female', 'yao', 2, ['shanhe_kuanggu', 'shanhe_xianji', 'shanhe_lingdong', 'jiange_lingyu', 'shanhe_jilia', 'shanhe_shuanghun', 'shanhe_xiangle', 'shanhe_xushi'], []],
            shanhe_yingzhao: ['male', 'yao', 4, ['yz_fengdong', 'yz_xunyou', 'sw_eyi', 'yz_sipu', 'fenghuo_aocai', 'shanhe_congjian', 'nianshou_shouyi'], []],
            shanhe_maomaoguigui: ['male', 'yao', 1, ['shanhe_nitai', 'shanhe_chouhai', 'shanhe_tiaoxin', 'shanhe_jigong', 'shanhe_kongcheng'], []],
            shanhe_yuanniu: ['male', 'yao', 5, ['shanhe_qianxi', 'shanhe_shuiyong', 'shanhe_zhangdu', 'shanhe_yidu', 'shanhe_jieyuan', 'shanhe_huangkong', 'shanhe_enyuana', 'shanhe_juexing'], []],
            shanhe_huanzhu: ['female', 'yao', 4, ['shanhe_qianjie', 'shanhe_nitai', 'sy_fentian', 'shanhe_jiesi', 'shanhe_tianjie', 'shidian_xixing', 'shanhe_zhudu', 'shanhe_shenfu', 'shanhe_faen'], []],
            shanhe_baiyannv: ['female', 'yao', 6, ['shanhe_guanxu', 'shanhe_sidao', 'shanhe_jimu', 'shanhe_jiang', 'sy_chiyi', 'shanhe_zhengding', 'shanhe_shenshia', 'shanhe_juexing', 'shanhe_longhun'], []],
            shanhe_baonunianshou: ['male', 'yao', 6, ['shanhe_feiyang', 'NS_suizhonga', 'NS_nianyib', 'NS_cuikub', 'jiange_chiying', 'NS_baonua'], ['clan:年兽']],
            shanhe_yinhu: ['male', 'yao', 4, ['sx_yinhu', 'shanhe_xiongshou', 'shanhe_xisheng'], ['clan:生肖兽']],
            shanhe_chenlong: ['male', 'yao', 4, ['sx_chenlong', 'shanhe_jingfan', 'shanhe_xisheng'], ['clan:生肖兽']],
            shanhe_youji: ['male', 'yao', 4, ['sx_youji', 'fadong_kuangxi', 'shanhe_xisheng'], ['clan:生肖兽']],
            shanhe_haizhu: ['male', 'yao', 4, ['sx_haizhu', 'shanhe_xisheng'], ['clan:生肖兽']],
            shanhe_mengpo: ['female', 'shen', 4, ['shidian_shiyou', 'shidian_wanghun', 'shidian_wangshi', 'shanhe_xingwu', 'shanhe_luoyan', 'shanhe_shiyuan', 'jiange_chiying'], []],
            shanhe_dizangwang: ['male', 'shen', 5, ['shidian_bufo', 'shidian_wuliang', 'shidian_dayuan', 'shanhe_hunzi'], []],
            shanhe_changqiangshizu: ['male', 'qun', 2, ['shanhe_yanzheng', 'shanhe_baobian'], []],
            shanhe_qinglong: ['male', 'qun', 8, ['tw_luanchang', 'shanhe_tengyun', 'jiange_yuhuo', 'jiange_qiwu'], []],
            shanhe_zhuque: ['female', 'qun', 8, ['fenghuo_manyi', 'shanhe_qingnang', 'shanhe_jijiu', 'shanhe_jinzhi', 'shanhe_honglian'], []],
            shanhe1_qinglong: ['male', 'yao', 3, ['shanhe_longyin', 'sw_xiongshou', 'shanhe_hengjiang'], []],
            shanhe1_baihu: ['male', 'shen', '7/8', ['sw_xiongshou', 'shanhe_kuanggu', 'yz_sipu', 'NS_shouhun', 'yz_fengdong'], []],
            shanhe_daofei: ['male', 'xie', '7/8', ['shanhe_duodao', 'shanhe_zhanjin', 'fadong_jielve', 'shanhe_qiangxib', 'shanhe_kuanggu', 'shanhe_zhaxiang', 'shanhe_bamen'], []],
            shanhe1_lvbu: ['male', 'shen', 6, ['shanhe_mashu', 'hulaoguan_boss_xiuluo', 'hulaoguan_boss_shenwei', 'hulaoguan_boss_shenji', 'shanhe_zhongyong', 'hulaoguan_boss_wansha', 'shanhe_lunhui'], []],
            shanhe2_lvbu: ['male', 'qun', 8, ['baonu', 'wumou', 'ol_wuqian', 'shanhe_zizhong', 'shanhe_shijiu'], []],
            shanhe3_lvbu: ['male', 'qun', 7, ['wushuang', 'new_liyu', 'hulaoguan_boss_shenji', 'shanhe_liushi', 'shanhe_libing', 'jiange_yingji', 'shanhe_jinzhu'], ['character:re_lvbu']],
            shanhe4_lvbu: ['male', 'qun', 7, ['wushuang', 'shanhe_chuming', 'shanhe_weijing', 'shanhe_xiaoxi', 'shanhe_shensu', 'jiange_yingji'], ['character:re_lvbu']],
            shanhe_guanyu: ['male', 'shu', 7, ['olsbweilin', 'olsbduoshou', 'shanhe_shicai', 'shanhe_zhongyi', 'shanhe_abi', 'shanhe_paoxiaoa', 'shanhe_yuren'], ['character:ol_sb_guanyu']],
            shanhe_gaoshun: ['male', 'qun', 5, ['olxianzhen', 'decadejinjiu', 'shanhe_hanzhan', 'shanhe_shijiu', 'shanhe_yaowang', 'shanhe_baoli'], ['character:re_gaoshun']],
            shanhe_liubei: ['male', 'shu', 6, ['rerende', 'rejijiang', 'shanhe_qianxuna', 'shanhe_enyuan', 'jiange_xiaorui', 'jiange_zhenxi', 'shanhe_tianjiang', 'jiange_jingfan'], ['zhu', 'character:re_liubei']],
            shanhe1_yuanshao: ['male', 'qun', 7, ['olsbhetao', 'olsbshenli', 'olsbyufeng', 'shanhe_feiyang', 'shanhe_guixiang', 'shanhe_zhuandui', 'shanhe_jieming', 'shanhe_fangzhu', 'shanhe_yirong'], ['zhu', 'character:ol_sb_yuanshao']],
            shanhe_caozhen: ['male', 'wei', 5, ['xinsidi', 'shanhe_zizhong', 'shanhe_duanjia', 'shanhe_jibao'], ['character:caozhen']],
            shanhe_caohong: ['male', 'wei', 5, ['yuanhu', 'shanhe_zizhong', 'shanhe_jibao', 'shanhe_duanjia', 'shanhe_libing'], ['character:caohong']],
            shanhe_caoren: ['male', 'wei', 5, ['weikui', 'lizhan', 'shidian_guiji', 'shanhe_zhaxiang', 'fadong_yanglie', 'shanhe_jinzhu'], ['character:sp_caoren']],
            shanhe_taishici: ['male', 'wu', 6, ['tianyi', 'hanzhan', 'jiange_jinggong', 'shanhe_liushi', 'shanhe_libing', 'shanhe_chengxiong', 'shanhe_jinzhu'], ['character:re_taishici']],
            shanhe_dingfeng: ['male', 'wu', 6, ['reduanbing', 'refenxun', 'shanhe_fuqi', 'shanhe_gangliea', 'shanhe_enyuan', 'shanhe_wuyana', 'shanhe_zongyu', 'shanhe_bufo'], ['character:dingfeng']],
            shanhe_yuanshao: ['male', 'qun', 9, ['luanji', 'shanhe_hanyong', 'shanhe_quandao', 'jiange_mojian', 'shanhe_luanxin', 'shanhe_jieming', 'xl_jiushou'], ['character:re_yuanshao']],
            shanhe_shamoke: ['male', 'shu', 5, ['gzjili', 'shanhe_feiyang', 'shanhe_fentian', 'shanhe_zishua', 'shanhe_huaiyuan', 'shanhe_libing', 'shanhe_duanjia', 'shanhe_baonu'], ['character:shamoke']],
            shanhe_huangzhong: ['male', 'shu', 6, ['xinliegong', 'jiange_shuhun', 'shanhe_liushi', 'shanhe_libing', 'shanhe_shijiu', 'shanhe_jinzhu'], ['character:ol_huangzhong']],
            shanhe_huangzu: ['male', 'qun', 6, ['wangong', 'shanhe_zhihu', 'shanhe_liushi', 'shanhe_libing', 'shanhe_mengwu', 'shanhe_jinzhu'], ['character:huangzu']],
            shanhe_lvbu: ['male', 'qun', 9, ['shanhe_mashu', 'hulaoguan_boss_wushuang', 'hulaoguan_boss_aozhan', 'hulaoguan_boss_shenwei', 'hulaoguan_boss_shenji', 'shanhe_duorui', 'shanhe_pojuna'], []],
            shanhe_handang: ['male', 'wu', 6, ['gongji', 'jiefan', 'shanhe_mengwu', 'shanhe_zizhong', 'shanhe_xuanfeng', 'shanhe_lianyinga', 'jiange_yingji'], ['character:handang']],
            shanhe1_zhangjiao: ['male', 'qun', 8, ['xinleiji', 'xinguidao', 'shanhe_gongzheng', 'shanhe_tiaoxin', 'shanhe_shenfu', 'shanhe_congjian', 'sy_lingqu'], ['character:sp_zhangjiao']],
            shanhe2_zhangjiao: ['male', 'qun', 8, ['shanhe_leijie', 'shanhe_dayuan', 'shanhe_gongzheng', 'shanhe_miji', 'shanhe_gangliea', 'shanhe_yuren', 'shanhe_huituo'], ['character:re_zhangjiao']],
            shanhe3_zhangjiao: ['male', 'shen', 8, ['yizhao', 'shanhe_sijun', 'tianjie', 'shanhe_gongzheng', 'shanhe_cangxin', 'shanhe_chengqi', 'fenghuo_aocai', 'fenghuo_fuzhu', 'shanhe_xietu'], ['character:shen_zhangjiao']],
            shanhe2_baihu: ['male', 'yao', 3, ['shanhe_huxiao', 'sw_xiongshou', 'nianshou_kuangbao'], []],
            shanhe_heiwuchang: ['male', 'shen', 5, ['jiange_konghun', 'shanhe_heisheng', 'shanhe_huihun', 'shanhe_tairan', 'shanhe_yangkuang', 'shanhe_bamen'], []],
            shanhe_baiwuchang: ['male', 'shen', 5, ['jiange_konghun', 'shanhe_jicai', 'shanhe_huihun', 'shanhe_tairan', 'shanhe_huanyina', 'shanhe_wuying'], []],
            shanhe_mamian: ['male', 'yao', 5, ['shanhe_wuma', 'shanhe_shihun', 'shanhe_zhinang', 'yz_xunyou', 'shanhe_ningwua', 'NS_shouhun', 'shanhe_juhun'], []],
            shanhe_niutou: ['male', 'yao', 6, ['fenghuo_chouniu', 'shanhe_shihun', 'shanhe_yinju', 'yz_xunyou', 'shanhe_bufo', 'NS_shouhun', 'jiange_zhene'], []],
            shanhe_shoumenshishi: ['male', 'yao', 7, ['shanhe_shouxi', 'shanhe_wanrong', 'shanhe_shicai', 'shanhe_jushou', 'shanhe_gangliea', 'shanhe_bamen', 'mitan_zhichi'], []],
            shanhe_shipixie: ['male', 'shen', 7, ['shanhe_wuzanga', 'shanhe_zhenggu', 'shanhe_jiaozi', 'shanhe_baozhu', 'shanhe_gengzhan', 'shanhe_bixiong', 'shanhe_zhouxue', 'shanhe_zhengyi'], []],
            shanhe_zhuangchengchui: ['male', 'wei', 3, ['shanhe_xianshuai', 'shanhe_dangxian', 'fadong_kuangxi', 'shidian_manjia', 'hulaoguan_jingji'], ['clan:器械']],
            shanhe_huoyanche: ['male', 'wei', 3, ['shanhe_tianfa', 'shanhe_fanshi', 'shanhe_jiesi', 'shidian_manjia', 'sy_baiyi'], ['clan:器械']],
            shanhe_jianta: ['male', 'wei', 2, ['jiange_mojian', 'shanhe_luanji', 'shanhe_chuming', 'shidian_manjia', 'shanhe_juexinga'], ['clan:器械']],
            shanhe_toushiji: ['male', 'wei', 2, ['zy_xushi', 'jiange_nailuo', 'shanhe_yicheng', 'shidian_manjia', 'shanhe_cuipo'], ['clan:器械']],
            shanhe_maoyao: ['female', 'yao', 6, ['sy_lingqu', 'shanhe_lingdong', 'zy_xushi', 'shanhe_qimoua', 'jiange_qiwu', 'nianshou_mengtai'], []],
            shanhe_zhuchi: ['male', 'qun', 8, ['shanhe_wangxi', 'shanhe_jizhia', 'shanhe_qianjie', 'nianshou_boxue', 'shanhe_duanjia', 'sw_yaoshou', 'shanhe_fuyou'], []],
            shanhe_yaoseng: ['male', 'xie', 5, ['shanhe_zongyu', 'shanhe_jiesi', 'shanhe_tianfa', 'shanhe_kuanggua'], []],
            shanhe_shengseng: ['male', 'qun', 6, ['shanhe_shengzhi', 'shanhe_yirong', 'shanhe_quanji', 'shanhe_shenju', 'shanhe_duanjia', 'shanhe_caiwang'], []],
            shanhe_juyuan: ['male', 'shen', '9/13', ['jiange_duanbing', 'shanhe_qiongshou', 'shanhe_nitai', 'shanhe_fuqi', 'shanhe_yimie', 'shanhe_wuhun', 'shanhe_bufo'], []],
            shanhe_shizhu: ['male', 'yao', 5, ['shidian_mingbao', 'sy_qingzhu', 'shidian_beiming', 'shanhe_wanghun'], []],
            shanhe_shibing: ['male', 'qun', 3, ['shanhe_mingce', 'shanhe_jibao', 'shanhe_duanjia', 'shanhe_shengong'], []],
            shanhe_gongbing: ['male', 'qun', 4, ['jiange_qixian', 'shanhe_huojia', 'shanhe_dianjun', 'shanhe_jicai', 'shanhe_jinzhu', 'jiange_mojian'], []],
            shanhe1_gongbing: ['male', 'qun', 4, ['shanhe_liegong', 'shanhe_liushi', 'Waiqi_fankui', 'jiange_danjing', 'shanhe_baoli'], []],
            shanhe2_gongbing: ['male', 'qun', 5, ['shanhe_liegong', 'shanhe_wangong', 'shanhe_liushi', 'Waiqi_fankui', 'jiange_danjing', 'shanhe_baoli'], []],
            shanhe1_dunbing: ['male', 'qun', 4, ['shidian_manjia', 'shanhe_shuiyong', 'Waiqi_fankui', 'jiange_danjing', 'shanhe_baoli'], []],
            shanhe2_dunbing: ['male', 'qun', 5, ['shidian_manjia', 'qqzj_jianzheng', 'shanhe_shuiyong', 'Waiqi_fankui', 'jiange_danjing', 'shanhe_baoli'], []],
            shanhe1_qiangbing: ['male', 'qun', 4, ['shanhe_paoxiao', 'shanhe_wusheng', 'Waiqi_fankui', 'jiange_danjing', 'shanhe_baoli'], []],
            shanhe2_qiangbing: ['male', 'qun', 5, ['shanhe_paoxiao', 'shanhe_juguan', 'shanhe_wusheng', 'Waiqi_fankui', 'jiange_danjing', 'shanhe_baoli'], []],
            shanhe_shuguodunbing: ['male', 'shu', 3, ['shanhe_lizhan', 'shanhe_mengjin', 'shanhe_luoying', 'shanhe_baoli'], []],
            shanhe_shuguogongbing: ['male', 'shu', 3, ['shanhe_gongji', 'shanhe_wangong', 'shanhe_anjian', 'shanhe_baoli'], []],
            shanhe_liaoshangshinv: ['female', 'wu', 3, ['shanhe_hongyana', 'shanhe_qingnang', 'shanhe_jijiu'], []],
            shanhe1_shuizei: ['male', 'qun', 3, ['shanhe_qixi', 'shanhe_jianchu', 'shanhe_yifa', 'shanhe_jueqing'], []],
            shanhe2_shuizei: ['male', 'qun', 3, ['shanhe_tuxi', 'shanhe_zhuandui', 'shanhe_yifa', 'shanhe_jueqing'], []],
            shanhe3_shuizei: ['male', 'qun', 3, ['shanhe_shanxi', 'shanhe_huanfu', 'shanhe_yifa', 'shanhe_jueqing'], []],
            shanhe1_shinv: ['female', 'wu', 4, ['shanhe_tianxiang', 'shanhe_jijiu', 'shanhe_fuyou', 'shanhe_hongyana', 'shanhe_qiwu'], []],
            shanhe2_shinv: ['female', 'wu', 4, ['shanhe_liuli', 'shanhe_jijiu', 'shanhe_fuyou', 'shanhe_hongyana', 'shanhe_qiwu'], []],
            shanhe_zhanzhengmoxiang: ['male', 'qun', 2, ['shanhe_jinjiu', 'shanhe_shizhi', 'shanhe_baoli', 'shanhe_feijun', 'shanhe_yuanjun'], []],
            shanhe_baimayicong: ['male', 'qun', 2, ['shanhe_mashu', 'shanhe_fuqi', 'hulaoguan_jingji'], []],
            shanhe_qibing: ['male', 'shu', 4, ['shanhe_tuxi', 'shanhe_yuanlve', 'shanhe_shunshi', 'yz_fengdong'], []],
            shanhe_weiguoqibing: ['male', 'wei', 2, ['shanhe_mashu', 'shanhe_tiejia', 'fadong_ruiji', 'shanhe_fuqi'], []],
            shanhe1_weiguoqibing: ['male', 'qun', 3, ['shanhe_qiangxi', 'shanhe_gongqing', 'shanhe_zhihu', 'shanhe_buqua', 'shanhe_zhaxiang'], []],
            shanhe_caocaojinwei: ['male', 'wei', 3, ['shanhe_jinjiu', 'shidian_manjia', 'shanhe_jisu', 'shanhe_tuxi', 'shanhe_mengjin'], []],
            shanhe_zishu: ['male', 'yao', 3, ['sx_zishu', 'shanhe_cunmu', 'shanhe_jizhi', 'shanhe_bingfen', 'shanhe_luanxin'], ['clan:生肖兽']],
            shanhe1_youji: ['male', 'yao', 3, ['sx_youji', 'shanhe_luanfeng', 'shanhe_bingfen', 'shanhe_luanxin'], ['clan:生肖兽']],
            shanhe_weiyang: ['female', 'yao', 3, ['sx_weiyang', 'shanhe_suizhong', 'shanhe_gangliea', 'shanhe_bingfen', 'shanhe_luanxin'], ['clan:生肖兽']],
            shanhe_sishe: ['female', 'yao', 3, ['sx_sishe', 'shanhe_fuyin', 'shanhe_dushi', 'shidian_beiming', 'shanhe_chengxiong'], ['clan:生肖兽']],
            shanhe_xugou: ['male', 'yao', 4, ['sx_xugou', 'shanhe_qianjie', 'shanhe_liezhen', 'shidian_beiming', 'shanhe_chengxiong'], ['clan:生肖兽']],
            shanhe_shenhou: ['male', 'yao', 3, ['sx_shenhou', 'shanhe_bihun', 'sy_lingqu', 'shidian_beiming', 'shanhe_chengxiong'], ['clan:生肖兽']],
            shanhe_cikeswl: ['male', 'xie', '6/7', ['shanhe_qimou', 'shanhe_moukui', 'shanhe_tieji', 'shanhe_kongcheng', 'zy_xushi', 'mitan_zhuixi', 'jiange_duanbing'], []],
            shanhe_cikeqbj: ['male', 'xie', 8, ['shanhe_yimie', 'jiange_duanbing', 'shanhe_kuanggu', 'shanhe_jigong', 'shanhe_zhaxiang', 'shanhe_xiying', 'jiange_zhene'], []],
            shanhe_tenglong: ['male', 'shen', 5, ['shanhe_juexing', 'shanhe_tengyun', 'ns_fushen', 'shanhe_xianshuai', 'shanhe_chenlong', 'shanhe_weilu'], []],
            shanhe_fenghuang: ['male', 'shen', 8, ['shanhe_zhaohuo', 'shanhe_honglian', 'shanhe_chongsheng', 'shanhe_nuyan', 'shanhe_shangshena', 'shanhe_niepan', 'shanhe_ranji', 'shanhe_baoli'], []],
            shanhe_huang: ['male', 'shu', 6, ['shanhe_zhaohuo', 'shanhe_honglian', 'shanhe_wuzang', 'shanhe_yanyu', 'shanhe_baoli'], []],
            shanhe_feng: ['male', 'shu', 6, ['shanhe_zhaohuo', 'shidian_niepan', 'shanhe_huoji', 'shanhe_yanyu', 'shanhe_baoli'], []],
            shanglin_caocong: ['', 'qun', 5, ['shanglin_pukong'], []],
            Shanglin_caocong: ['', 'qun', 4, ['shanglin_pukong', 'Shanglin_caochong'], []],
            shanglin_laohu: ['male', 'qun', 72, ['shanglin_huxiao', 'shanglin_juli', 'shanglin_shouwang', 'shanglin_houpi', 'shanglin_jianzhong', 'shanglin_xiongmeng'], []],
            Shanglin_laohu: ['male', 'qun', 40, ['Shanglin_shuxing', 'Shanglin_huwei', 'Shanglin_mengji', 'Shanglin_shouwang'], []],
            ShangLin_laohu: ['male', 'qun', 30, ['Shanglin_shuxing', 'Shanglin_huwei', 'Shanglin_mengji', 'Shanglin_tuxi'], []],
            Shanglin_laohu1: ['male', 'qun', 15, ['Shanglin_huweia', 'Shanglin_mengjia'], []],
            Shanglin_laohu2: ['male', 'qun', 5, ['Shanglin_huweib'], []],
            shanglin_laohu1: ['male', 'qun', 24, ['shanglin_huxiao', 'shanglin_julia', 'shanglin_houpia', 'shanglin_jianzhonga', 'shanglin_xiongmenga'], []],
            shanglin_lang: ['male', 'qun', 60, ['shanglin_langxi', 'shanglin_qunxiang', 'shanglin_langzhu', 'shanglin_houpi', 'shanglin_jianzhong', 'shanglin_xiongmeng'], []],
            Shanglin_lang: ['male', 'qun', 40, ['Shanglin_shuxing', 'Shanglin_qunlang', 'Shanglin_qunxiang', 'shanglin_langwang'], []],
            ShangLin_lang: ['male', 'qun', 30, ['Shanglin_shuxing', 'Shanglin_qunlang', 'fenghuo_huangbao', 'shanglin_langwang'], []],
            Shanglin_lang1: ['male', 'qun', 20, ['Shanglin_qunlanga', 'Shanglin_qunxiang'], []],
            ShangLin_lang1: ['male', 'qun', 15, ['Shanglin_qunlanga', 'fenghuo_huangbao'], []],
            Shanglin_lang2: ['male', 'qun', 5, ['Shanglin_qunlangb'], []],
            shanglin_lang1: ['male', 'qun', 20, ['shanglin_langxia', 'shanglin_qunxiang', 'shanglin_houpia', 'shanglin_jianzhonga', 'shanglin_xiongmenga'], []],
            shanglin_lang2: ['male', 'qun', 10, ['shanglin_langxib', 'shanglin_qunxiang', 'shanglin_houpib', 'shanglin_jianzhongb', 'shanglin_xiongmengb'], []],
            shanglin_huli: ['female', 'qun', 60, ['shanglin_jiaoxia', 'shanglin_sanku', 'shanglin_linghu', 'shanglin_houpi', 'shanglin_jianzhong', 'shanglin_xiongmeng'], []],
            Shanglin_huli: ['female', 'qun', 24, ['Shanglin_shuxing', 'shanglin_jiaoxia', 'Shanglin_sanku', 'Shanglin_linghu'], []],
            Shanglin_huli1: ['female', 'qun', 12, ['shanglin_jiaoxia', 'Shanglin_sankua'], []],
            Shanglin_huli2: ['female', 'qun', 4, ['Shanglin_sankub'], []],
            shanglin_huli1: ['female', 'qun', 20, ['shanglin_jiaoxia', 'shanglin_sankua', 'shanglin_houpia', 'shanglin_jianzhonga', 'shanglin_xiongmenga'], []],
            shanglin_huli2: ['female', 'qun', 10, ['shanglin_jiaoxia', 'shanglin_sankua', 'shanglin_houpib', 'shanglin_jianzhongb', 'shanglin_xiongmengb'], []],
            shanglin_lu: ['male', 'qun', 60, ['shanglin_jiaozi', 'shanglin_luming', 'shanglin_julu', 'shanglin_houpi', 'shanglin_jianzhong', 'shanglin_xiongmeng'], []],
            Shanglin_lu: ['male', 'qun', 30, ['Shanglin_shuxing', 'Shanglin_jiaozi', 'Shanglin_luming', 'Shanglin_julu'], []],
            Shanglin_lu1: ['male', 'qun', 15, ['Shanglin_jiaozia', 'Shanglin_luminga'], []],
            Shanglin_lu2: ['male', 'qun', 5, ['Shanglin_jiaozib'], []],
            shanglin_lu1: ['male', 'qun', 20, ['shanglin_jiaozia', 'shanglin_luminga', 'shanglin_houpia', 'shanglin_jianzhonga', 'shanglin_xiongmenga'], []],
            shanglin_lu2: ['male', 'qun', 10, ['shanglin_jiaozia', 'shanglin_luminga', 'shanglin_houpib', 'shanglin_jianzhongb', 'shanglin_xiongmengb'], []],
            olNS_nianshouyang: ['male', 'shen', 6, ['NS_yangshou', 'NS_beimingyang', 'NS_nuyan', 'NS_hundunyang'], []],
            olNS_nianshouyin: ['female', 'shen', 6, ['NS_yinshou', 'NS_beimingyin', 'NS_huihun', 'NS_hundunyin'], []],
            olNS_nianshoupucong: ['male', 'qun', 2, ['nianshou_xiongshou', 'nianshou_xishenga'], []],
            hulaoguan_boss_zuiqiangshenhua: ['male', 'shen', 8, ['shanhe_mashu', 'hulaoguan_boss_wushuang', 'hulaoguan_boss_jingjia', 'hulaoguan_boss_aozhan'], []],
            hulaoguan_boss_baonudezhanshen: ['male', 'shen', 6, ['shanhe_mashu', 'hulaoguan_boss_wushuang', 'hulaoguan_boss_xiuluo', 'hulaoguan_boss_shenwei', 'hulaoguan_boss_shenji'], []],
            hulaoguan_boss_shenguiwuqian: ['male', 'shen', 6, ['hulaoguan_boss_wushuang', 'hulaoguan_boss_shenqu', 'hulaoguan_boss_jiwu'], []],
            tongque_caocao: ['male', 'wei', 9, ['new_rejianxiong', 'tongque_hujia', 'tongque_duopao', 'tongque_weiwu'], []],
            Tongque_caocao: ['male', 'wei', 30, ['new_rejianxiong', 'tongque_hujia', 'tongque_pipao', 'tongque_weiwua'], []],
            tongque_caozhi: ['male', 'wei', 6, ['reluoying', 'dcjiushi', 'tongque_duopao', 'tongque_chengzhang'], []],
            Tongque_caozhi: ['male', 'wei', 30, ['tongque_luoying', 'jiushi', 'tongque_zhengpao', 'tongque_chengzhang'], []],
            tongque_caozhen: ['male', 'wei', 6, ['residi', 'tongque_duopao', 'tongque_fugu'], []],
            Tongque_caozhen: ['male', 'wei', 30, ['tongque_sidi', 'tongque_zhengpao', 'tongque_fugu'], []],
            tongque_caopi: ['male', 'wei', 5, ['fangzhu', 'xingshang', 'tongque_duopao', 'tongque_songwei'], []],
            tongque_xuzhu: ['male', 'wei', 3, ['shanhe_luoyi', 'tongque_duopao', 'tongque_wuchi'], []],
            Tongque_xuzhu: ['male', 'wei', 30, ['tongque_luoyi', 'tongque_zhengpao', 'tongque_wuchi'], []],
            tongque_wangcan: ['male', 'wei', 4, ['xinfu_sanwen', 'xinfu_qiai', 'xinfu_denglou', 'tongque_duopao', 'tongque_wenyong'], []],
            tongque_zhanghe: ['male', 'wei', 3, ['qiaobian', 'tongque_duopao', 'tongque_pingkou'], []],
            Tongque_zhanghe: ['male', 'wei', 30, ['tongque_qiaobian', 'tongque_jiepao', 'tongque_pingkoua'], []],
            tongque_xiahouyuan: ['male', 'wei', 3, ['xinshensu', 'tongque_duopao', 'tongque_pingkou'], []],
            Tongque_xiahouyuan: ['male', 'wei', 30, ['tongque_shensu', 'tongque_zhengpao', 'tongque_pingkoua'], []],
            tongque_zhongyao: ['male', 'wei', 4, ['huomo', 'zuoding', 'tongque_duopao', 'tongque_shenpin'], []],
            Tongque_zhongyao: ['male', 'wei', 30, ['tongque_huomo', 'tongque_zuoding', 'tongque_jiepao', 'tongque_shenpin'], []],
            tongque_wanglang: ['male', 'wei', 4, ['regushe', 'tongque_duopao', 'rejici'], []],
            Tongque_wanglang: ['male', 'wei', 30, ['regushe', 'tongque_jiepao', 'rejici'], []],
            tongque_xuhuang: ['male', 'wei', 3, ['gzduanliang', 'jiezi', 'tongque_duopao'], []],
            Tongque_xuhuang: ['male', 'wei', 30, ['duanliang', 'tongque_jiezi', 'tongque_jiepao'], []],
            tongque_yujin: ['male', 'wei', 3, ['decadezhenjun', 'tongque_duopao', 'tongque_yizhong'], []],
            Tongque_yujin: ['male', 'wei', 30, ['tongque_zhenjun', 'tongque_jiepao', 'tongque_yizhong'], []],
            tongque_chenlin: ['male', 'wei', 4, ['bifa', 'songci', 'tongque_duopao', 'tongque_xiwen'], []],
            Tongque_chenlin: ['male', 'wei', 30, ['tongque_bifa', 'tongque_songci', 'tongque_zhengpao', 'tongque_xiwen'], []],
            tongque_chengyu: ['male', 'wei', 4, ['shefu', 'benyu', 'tongque_duopao', 'tongque_pengri'], []],
            tongque_caoxiu: ['male', 'wei', 6, ['qianju', 'reqingxi', 'tongque_duopao', 'tongque_chuanglie'], []],
            Tongque_caoxiu: ['male', 'wei', 30, ['qianju', 'tongque_qingxi', 'tongque_zhengpao', 'fenghuo_chuanyun'], []],
            tongque_laiyinger: ['female', 'qun', 6, ['xiaowu', 'shawu', 'tongque_duopao', 'tongque_tongque'], []],
            Tongque_laiyinger: ['female', 'qun', 30, ['tongque_xiaowu', 'huaping', 'tongque_pipao', 'tongque_tongque'], []],
            tongque_jinpao: ['', 'qun', 1, ['tongque_jinpao_skill'], []],
            old_nianshou1: ['male', 'qun', Infinity, ['nianshou_nianrui', 'nianshou_qixiang'], ['clan:年兽']],
            old_nianshou: ['male', 'qun', 12, ['nianshou_yingzi', 'shanhe_mengtaia', 'nianshou_dongmian', 'nianshou_juexinga'], ['clan:年兽']],
            old_mengmengnianshou: ['male', 'qun', 6, ['jiange_leili', 'jiange_fengxing', 'shidian_beiming'], ['clan:年兽']],
            old_renxingnianshou: ['male', 'qun', 7, ['shidian_qiangzheng', 'shanhe_fankui', 'shidian_juece'], ['clan:年兽']],
            old_baonunianshou: ['male', 'qun', 8, ['shidian_lianyu', 'shidian_xiaoshou', 'shidian_niepan'], ['clan:年兽']],
            old_ruizhinianshou: ['male', 'qun', 9, ['shidian_didong', 'shidian_yushou', 'shidian_danshu'], ['clan:年兽']],
            ol_renxingnianshou: ['male', 'shu', 12, ['nianshou_yingzia', 'shanhe_mengtai', 'nianshou_dongmian', 'shanhe_juexing'], ['doublegroup:shu:wei', 'clan:年兽']],
            ol_ruizhinianshou: ['male', 'shu', 12, ['nianshou_yingzia', 'shanhe_mengtai', 'nianshou_dongmian', 'shanhe_juexing', 'nianshou_ruizhi'], ['doublegroup:shu:wei', 'clan:年兽']],
            ol_baonunianshou: ['male', 'shu', 14, ['shanhe_mengtai', 'nianshou_dongmian', 'shanhe_juexing', 'shanhe_baonu', 'shanhe_shouyi'], ['doublegroup:shu:wei', 'clan:年兽']],
            old_nianshoua: ['male', 'shen', 6, ['nianshou_jiyuan', 'nianshou_suizhonga', 'nianshou_cuikub'], ['clan:年兽']],
            old_nianshoub: ['male', 'shen', 8, ['nianshou_jiyuan', 'NS_nianyia', 'nianshou_suizhong', 'nianshou_cuikua'], ['clan:年兽']],
            old_nianshouc: ['male', 'shen', 0, ['nianshou_jiyuan', 'nianshou_nianyi', 'nianshou_suizhong', 'nianshou_cuiku'], ['clan:年兽']],
            ol_old_nianshou: ['male', 'shu', 16, ['nianshou_yingzi', 'nianshou_mengtai', 'nianshou_juexing'], ['clan:年兽']],
            ol_old_nianshou1: ['male', 'wei', 16, ['nianshou_yingzi', 'nianshou_mengtai', 'nianshou_juexing'], ['clan:年兽']],
            ol_old_nianshou2: ['male', 'wu', 16, ['nianshou_yingzi', 'nianshou_mengtai', 'nianshou_juexing'], ['clan:年兽']],
            ol_old_nianshou3: ['male', 'qun', 16, ['nianshou_yingzi', 'nianshou_mengtai', 'nianshou_juexing'], ['clan:年兽']],
            ol_nianshou3: ['male', 'qun', 6, ['NS_suizhong', 'NS_nianyi', 'NS_cuiku', 'NS_jiyuan', 'NS_baonu', 'NS_shouhun'], ['clan:年兽']],
            ol_nianshou2: ['male', 'qun', 5, ['NS_suizhonga', 'NS_nianyia', 'NS_cuikua', 'NS_jiyuana', 'NS_baonua', 'NS_shouhun'], ['clan:年兽']],
            ol_nianshou1: ['male', 'qun', 4, ['NS_suizhonga', 'NS_nianyib', 'NS_cuikub', 'NS_jiyuanb', 'NS_shouhun'], ['clan:年兽']],
            shanhai_qingnv1: ['female', 'qun', 3, ['shanhai_duomo', 'shanhai_meihuo'], []],
            shanhai_qingnv2: ['female', 'qun', 4, ['shanhai_duomo', 'shanhai_meihuo', 'shidian_yushou'], []],
            shanhai_jiuweihu: ['female', 'qun', 5, ['shanhai_duomo', 'shanhai_meihuo', 'shidian_yushou', 'shanhai_qinyun', 'shanhai_duanwei'], []],
            HH_nianshou: ['male', 'qun', 25, ['nianshou_weiqu', 'nianshou_fengnian', 'nianshou_zhennu', 'nianshou_jusheng', 'nianshou_juhuo'], ['clan:年兽']],
            shanhai_nianshou: ['male', 'qun', 7, ['nianshou_juhuo', 'nianshou_zhennu', 'shanhe_hanyong', 'shanhe_yingzi'], ['clan:年兽']],
            shanhai_xuanwuzhenshen: ['female', 'qun', 4, ['nianshou_xiongqu', 'nianshou_zhenlei', 'jiange_leili', 'nianshou_lingsi'], []],
            shanhai_zhuquezhenshen: ['male', 'qun', 4, ['nianshou_xiongqu', 'nianshou_lihuo', 'jiange_fengxing', 'shidian_beiming'], []],
            xn_xiaosha: ['female', 'qun', 4, ['xn_guisha', 'xn_shuli', 'xn_xuxiang1'], []],
            xn_xiaotao: ['female', 'qun', 4, ['xn_taoyan', 'xn_yanli', 'xn_xuxiang4'], []],
            xn_xiaoshan: ['female', 'qun', 4, ['xn_shanwu', 'xn_xianli', 'xn_xuxiang2'], []],
            xn_xiaojiu: ['female', 'qun', 4, ['xn_meiniang', 'xn_yaoli', 'xn_xuxiang3'], []],
            xn_xiaole: ['female', 'qun', 4, ['xn_leyu', 'xn_yuanli', 'xn_xuxiang5'], []],
            hezong_daqin_zhangyi: ['male', 'daqin', 4, ['hezong_zhangyi_lianheng', 'hezong_zhangyi_xichu', 'hezong_zhangyi_xiongbian', 'hezong_zhangyi_qiaoshe'], []],
            hezong_daqin_zhaogao: ['male', 'daqin', 3, ['hezong_zhaogao_zhilu', 'hezong_zhaogao_gaizhao', 'hezong_zhaogao_haizhong', 'hezong_zhaogao_yuanli'], []],
            hezong_daqin_yingzheng: ['male', 'daqin', 4, ['hezong_yingzheng_yitong', 'hezong_yingzheng_shihuang', 'hezong_yingzheng_zulong', 'hezong_yingzheng_fenshu'], []],
            hezong_daqin_shangyang: ['male', 'daqin', 4, ['hezong_shangyang_bianfa', 'hezong_shangyang_limu', 'hezong_shangyang_kencao'], []],
            hezong_daqin_nushou: ['male', 'daqin', 3, ['hezong_daqin_tongpao', 'hezong_nushou_jinnu'], []],
            hezong_daqin_qibing: ['male', 'daqin', 3, ['hezong_daqin_tongpao', 'hezong_qibing_changjian', 'hezong_qibing_liangju'], []],
            hezong_daqin_bubing: ['male', 'daqin', 4, ['hezong_daqin_tongpao', 'hezong_bubing_fangzhen', 'hezong_bubing_changbing'], []],
            hezong_daqin_baiqi: ['male', 'daqin', 4, ['hezong_baiqi_wuan', 'hezong_baiqi_shashen', 'hezong_baiqi_fachu', 'hezong_baiqi_changsheng'], []],
            hezong_daqin_miyue: ['female', 'daqin', 3, ['hezong_miyue_zhangzheng', 'hezong_miyue_taihou', 'hezong_miyue_youmie', 'hezong_miyue_yintui'], []],
            hezong_daqin_lvbuwei: ['male', 'daqin', 3, ['hezong_lvbuwei_jugu', 'hezong_lvbuwei_qihuo', 'hezong_lvbuwei_chunqiu', 'hezong_lvbuwei_baixiang'], []],
            hezong_daqin_zhaoji: ['female', 'daqin', 3, ['hezong_zhaoji_shanwu', 'hezong_zhaoji_daqi', 'hezong_zhaoji_xianji', 'hezong_zhaoji_huoluan'], []],
            Tianshu1_jiaxu: ['male', 'qun', 40, ['Tianshu_wansha', 'Tianshu_guimou', 'Tianshu_yinfeng', 'Tianshu_huoyan', 'Tianshu_shanshen'], []],
            Tianshu2_jiaxu: ['male', 'qun', 40, ['Tianshu_wansha', 'Tianshu_guimou', 'Tianshu_duji', 'Tianshu_jienu', 'Tianshu_shanshen'], []],
            TianShu1_jiaxu: ['male', 'qun', 18, ['Tianshu_wanshaa', 'Tianshu_guimou', 'Tianshu_yinfeng', 'Tianshu_huoyana'], []],
            TianShu2_jiaxu: ['male', 'qun', 18, ['Tianshu_wanshaa', 'Tianshu_guimou', 'Tianshu_duji', 'Tianshu_jienua'], []],
            tianshu_huoshenzhurong: ['male', 'shen', 11, ['tianshu_xingxia'], []],
            Tianshu_huoshenzhurong: ['male', 'shen', 25, ['Tianshu_xingxia', 'Tianshu_baoyan', 'Tianshu_huoshen'], []],
            Tianshu_huoshenzhuronga: ['male', 'shen', 10, ['Tianshu_xingxiaa', 'Tianshu_baoyana'], []],
            tianshu_shuishengonggong: ['male', 'shen', 11, ['sy_juehong'], []],
            Tianshu_shuishengonggong: ['male', 'shen', 25, ['sy_juehong', 'Tianshu_tuanliu', 'Tianshu_shuishen'], []],
            Tianshu_shuishengonggonga: ['male', 'shen', 10, ['sy_juehong', 'Tianshu_tuanliua'], []],
            hulao23_lvbu3: ['male', 'qun', 40, ['shanhe_mashu', 'hulao_wushuang', 'lvbu_shenqu', 'lvbu_shenji', 'lvbu_shenwei'], []],
            hulao23_lvbu2: ['male', 'qun', 24, ['shanhe_mashu', 'hulao_wushuang', 'lvbu_shenjia', 'lvbu_shenweia'], []],
            hulao23_lvbu1: ['male', 'qun', 16, ['shanhe_mashu', 'hulao_wushuang', 'lvbu_shenweib'], []],
            hulao22_lvbu3: ['male', 'qun', 30, ['shanhe_mashu', 'hulao_wushuang', 'lvbu_shenqu', 'lvbu_shenji', 'hulao_shenwei'], []],
            hulao22_lvbu2: ['male', 'qun', 20, ['shanhe_mashu', 'hulao_wushuang', 'lvbu_shenjia', 'hulao_shenweia'], []],
            hulao22_lvbu1: ['male', 'qun', 10, ['shanhe_mashu', 'hulao_wushuang', 'hulao_shenweib'], []],
            whlw_fanchou: ['male', 'qun', 60, ['hulaoguan_fangong', 'hulaoguan_xingluana', 'wenhe_niluan', 'wenhe_dangxian', 'wenhe_panshou'], []],
            whlw1_fanchou: ['male', 'qun', 12, ['hulaoguan_fangong', 'hulaoguan_xingluan', 'wenhe_panshoua'], []],
            whlw2_fanchou: ['male', 'qun', 24, ['hulaoguan_fangong', 'hulaoguan_xingluan', 'wenhe_niluan', 'wenhe_panshoub'], []],
            wenhe_fanchou: ['male', 'qun', 50, ['wenhe_tianmub', 'wenhe_xinglang', 'wenhe_anfan', 'wenhe_dangxian', 'wenhe_niluan'], []],
            whlw_zhangji: ['male', 'qun', 60, ['hulaoguan_jielue', 'hulaoguan_lveminga', 'wenhe_niluan', 'wenhe_dangxian', 'wenhe_rongjia'], []],
            whlw1_zhangji: ['male', 'qun', 12, ['hulaoguan_jielue', 'hulaoguan_lveming', 'wenhe_rongjiaa'], []],
            whlw2_zhangji: ['male', 'qun', 24, ['hulaoguan_jielue', 'hulaoguan_lveming', 'wenhe_niluan', 'wenhe_rongjiab'], []],
            wenhe_zhangji: ['male', 'qun', 50, ['wenhe_tianmub', 'wenhe_lveming', 'wenhe_congjian', 'wenhe_dangxian', 'wenhe_niluan'], []],
            WenHe_fanchou: ['male', 'qun', 9, ['wenhe_weimua', 'wenhe_xinglang', 'wenhe_anfan'], []],
            WenHe_zhangji: ['male', 'qun', 8, ['wenhe_weimua', 'wenhe_lveming', 'wenhe_congjian'], []],
            whlw_lijue: ['male', 'qun', 60, ['wenhe_langxi', 'wenhe_yisuan', 'wenhe_niluan', 'wenhe_dangxian', 'wenhe_langkai'], []],
            whlw1_lijue: ['male', 'qun', 12, ['wenhe_langxia', 'wenhe_yisuan', 'wenhe_langkaia'], []],
            whlw2_lijue: ['male', 'qun', 24, ['wenhe_langxib', 'wenhe_yisuan', 'wenhe_niluan', 'wenhe_langkaib'], []],
            whlw_jiaxu: ['male', 'qun', 60, ['wenhe_tianmu', 'wenhe_yinbing', 'wenhe_niluan', 'wenhe_fenluan', 'wenhe_dangxian', 'wenhe_moucun'], []],
            whlw1_jiaxu: ['male', 'qun', 12, ['wenhe_weimu', 'wenhe_yinbing', 'wenhe_moucuna'], []],
            whlw2_jiaxu: ['male', 'qun', 24, ['wenhe_tianmu', 'wenhe_yinbing', 'wenhe_niluan', 'wenhe_moucunb'], []],
            WenHe_jiaxu: ['male', 'qun', 8, ['wenhe_tianmu', 'wenhe_wansha', 'wenhe_fenluan'], []],
            WenHe_lijue: ['male', 'qun', 12, ['wenhe_tianmua', 'wenhe_langxi', 'wenhe_yisuan'], []],
            WenHe_guosi: ['male', 'qun', 15, ['wenhe_weimua', 'wenhe_sidao'], []],
            wenhe_jiaxu: ['male', 'qun', 50, ['wenhe_tianmu', 'wenhe_wansha', 'wenhe_fenluan', 'wenhe_dangxian', 'wenhe_niluan'], []],
            wenhe_lijue: ['male', 'qun', 50, ['wenhe_tianmua', 'wenhe_langxi', 'wenhe_yisuan', 'wenhe_dangxian', 'wenhe_niluan'], []],
            whlw_guosi: ['male', 'qun', 60, ['boss_sidaoa', 'boss_tanbeia', 'wenhe_niluan', 'wenhe_dangxian', 'wenhe_tanyu'], []],
            whlw1_guosi: ['male', 'qun', 12, ['boss_sidao', 'boss_tanbei', 'wenhe_tanyua'], []],
            whlw2_guosi: ['male', 'qun', 24, ['boss_sidao', 'boss_tanbeib', 'wenhe_niluan', 'wenhe_tanyub'], []],
            wenhe_guosi: ['male', 'qun', 50, ['wenhe_tianmub', 'wenhe_sidao', 'wenhe_tanbei', 'wenhe_dangxian', 'wenhe_niluan'], []],
            nianshouweiwu: ['male', 'wei', 6, ['nianshou_weihe'], ['doublegroup:wei:wu', 'clan:年兽']],
            nianshouweiqun: ['male', 'qun', 6, ['nianshou_yuxiang'], ['doublegroup:qun:wei', 'clan:年兽'], []],
            nianshoushuwu: ['female', 'wu', 8, ['nianshou_huanling', 'nianshou_fangong'], ['doublegroup:wu:shu', 'clan:年兽']],
            nianshouwuqun: ['male', 'qun', 6, ['nianshou_huozhong', 'nianshou_zange'], ['doublegroup:qun:wu', 'clan:年兽']],
            nianshouweishu: ['male', 'shu', 5, ['nianshou_qubi', 'nianshou_huaji'], ['doublegroup:shu:wei', 'clan:年兽']],
            nianshoushuqun: ['male', 'shu', 6, ['nianshou_xunshou', 'nianshou_xunlie'], ['doublegroup:shu:qun', 'clan:年兽']],
            nianshoudashu1: ['male', 'shu', 5, ['nianshou_siyao', 'nianshou_hengsaoa', 'boss_suishoub'], ['clan:年兽']],
            nianshoudashu2: ['male', 'shu', 10, ['nianshou_siyao', 'nianshou_hengsaoa', 'boss_suishoua'], ['clan:年兽']],
            nianshoudashu3: ['male', 'shu', 20, ['nianshou_siyao', 'nianshou_hengsaoa', 'boss_suishou'], ['clan:年兽']],
            nianshoudashu: ['male', 'shu', 4, ['nianshou_siyao', 'nianshou_hengsao'], ['clan:年兽']],
            nianshoudashu4: ['male', 'shu', 200, ['nianshou_hengsaob', 'nianshou_xiongshoub'], ['clan:年兽']],
            nianshoudawei1: ['male', 'wei', 6, ['nianshou_fangea', 'boss_suishoub'], ['clan:年兽']],
            nianshoudawei2: ['male', 'wei', 12, ['nianshou_fangea', 'boss_suishoua'], ['clan:年兽']],
            nianshoudawei3: ['male', 'wei', 24, ['nianshou_fangea', 'boss_suishou'], ['clan:年兽']],
            nianshoudawei: ['male', 'wei', 7, ['nianshou_fange'], ['clan:年兽']],
            nianshoudawei4: ['male', 'wei', 200, ['nianshou_fangeb', 'nianshou_xiongshoub'], ['clan:年兽']],
            nianshoudawu1: ['female', 'wu', 5, ['nianshou_zhuyana', 'nianshou_xiaoji', 'boss_suishoub_female'], ['clan:年兽']],
            nianshoudawu2: ['female', 'wu', 10, ['nianshou_zhuyana', 'nianshou_xiaoji', 'boss_suishoua_female'], ['clan:年兽']],
            nianshoudawu3: ['female', 'wu', 20, ['nianshou_zhuyana', 'nianshou_xiaoji', 'boss_suishou_female'], ['clan:年兽']],
            nianshoudawu: ['female', 'wu', 5, ['nianshou_zhuyan', 'nianshou_xiaoji'], ['clan:年兽']],
            nianshoudawu4: ['female', 'wu', 200, ['nianshou_zhuyanb', 'nianshou_xiongshoub'], ['clan:年兽']],
            nianshoudaqun1: ['male', 'qun', 5, ['nianshou_qunxiang', 'nianshou_tanshi', 'boss_suishoub'], ['clan:年兽']],
            nianshoudaqun2: ['male', 'qun', 10, ['nianshou_qunxiang', 'nianshou_tanshi', 'boss_suishoua'], ['clan:年兽']],
            nianshoudaqun3: ['male', 'qun', 20, ['nianshou_qunxiang', 'nianshou_tanshi', 'boss_suishou'], ['clan:年兽']],
            nianshoudaqun: ['male', 'qun', 5, ['nianshou_qunxiang', 'nianshou_tanshi'], ['clan:年兽']],
            nianshoudaqun4: ['male', 'qun', 200, ['nianshou_qunxianga', 'nianshou_xiongshoub'], ['clan:年兽']],
            xishoudawu1: ['female', 'wu', 4, ['xishou_mingzhe', 'xishou_feizong', 'boss_suishoub_female'], ['clan:年兽']],
            xishoudawu2: ['female', 'wu', 8, ['xishou_mingzhe', 'xishou_feizong', 'boss_suishoua_female'], ['clan:年兽']],
            xishoudawu3: ['female', 'wu', 16, ['xishou_mingzhe', 'xishou_feizong', 'boss_suishou_female'], ['clan:年兽']],
            xishoudawu: ['female', 'wu', 4, ['xishou_mingzhe', 'xishou_tianxiang'], ['clan:年兽']],
            xishoudaqun1: ['male', 'qun', 5, ['xishou_mane', 'xishou_shouxi', 'boss_suishoub'], ['clan:年兽']],
            xishoudaqun2: ['male', 'qun', 10, ['xishou_mane', 'xishou_shouxi', 'boss_suishoua'], ['clan:年兽']],
            xishoudaqun3: ['male', 'qun', 20, ['xishou_mane', 'xishou_shouxi', 'boss_suishou'], ['clan:年兽']],
            xishoudaqun: ['male', 'qun', 5, ['xishou_juxiang', 'xishou_shouxi'], ['clan:年兽']],
            xishoudashu1: ['male', 'shu', 5, ['xishou_paoxiao', 'xishou_lizhan', 'boss_suishoub'], ['clan:年兽']],
            xishoudashu2: ['male', 'shu', 10, ['xishou_paoxiao', 'xishou_lizhan', 'boss_suishoua'], ['clan:年兽']],
            xishoudashu3: ['male', 'shu', 20, ['xishou_paoxiao', 'xishou_lizhan', 'boss_suishou'], ['clan:年兽']],
            xishoudashu: ['male', 'shu', 5, ['xishou_paoxiao', 'xishou_lizhan'], ['clan:年兽']],
            xishoudawei1: ['male', 'wei', 6, ['xishou_taoyuan1', 'boss_suishoub'], ['clan:年兽']],
            xishoudawei2: ['male', 'wei', 12, ['xishou_taoyuan1', 'boss_suishoua'], ['clan:年兽']],
            xishoudawei3: ['male', 'wei', 24, ['xishou_taoyuan1', 'boss_suishou'], ['clan:年兽']],
            xishoudawei: ['male', 'wei', 6, ['xishou_taoyuan'], ['clan:年兽']],
            hulao20_lvbua: ['male', 'qun', Infinity, ['shanhe_mashu', 'hulao_wushuang', 'hulao_shenji', 'hulao_zhankai', 'hulao_yangwu'], []],
            hulao20_lvbub: ['male', 'qun', Infinity, ['shanhe_mashu', 'hulao_wushuang', 'hulao_shenjia', 'hulao_zhankaia'], []],
            hulao21_lvbu3: ['male', 'qun', 30, ['shanhe_mashu', 'hulao_wushuang', 'hulao_xiuluo'], []],
            hulao21_lvbu2: ['male', 'qun', 20, ['shanhe_mashu', 'hulao_wushuang', 'hulao_xiuluoa'], []],
            hulao21_lvbu1: ['male', 'qun', 10, ['shanhe_mashu', 'hulao_wushuang', 'hulao_xiuluoa'], []],
            qunying_yuji: ['male', 'qun', 9, ['qunying_yaohuo', 'qunying_qianhuan'], []],
            qunying_zhangjiao: ['male', 'qun', 9, ['releiji', 'guidao', 'qqzj_jianzheng'], []],
            danji_qinqi: ['male', 'wei', 60, ['danji_yisuan', 'danji_shenduan', 'danji_yonglue', 'danji_fengling', 'danji_zhangshi'], []],
            qianli_qinqi2: ['male', 'wei', 30, ['danji_yisuan', 'qianli_fenglinga', 'danji_zhangshia'], []],
            qianli_qinqi: ['male', 'wei', 60, ['danji_yisuan', 'qianli_fengling', 'qianli_zhangshi', 'qianli_hengjiang', 'qianli_xunwen'], []],
            hulao20_lvbu2: ['male', 'qun', 27, ['shanhe_mashu', 'hulao_wushuang', 'hulao_baguan', 'hulao_zhanjia', 'hulao_xuli'], []],
            hulao20_lvbu1: ['male', 'qun', 16, ['shanhe_mashu', 'hulao_wushuang', 'hulao_baguana', 'hulao_zhanjiaa', 'hulao_xulia'], []],
            hulao24_lvbu1: ['male', 'qun', 10, ['shanhe_mashu', 'hulao_wushuang', 'LvBu_shenweib', 'hulao_yazi'], []],
            hulao24_lvbu2: ['male', 'qun', 20, ['shanhe_mashu', 'hulao_wushuang', 'LvBu_shenjia', 'LvBu_shenweia', 'hulao_yazi'], []],
            hulao24_lvbu3: ['male', 'qun', 30, ['shanhe_mashu', 'hulao_wushuang', 'LvBu_shenji', 'LvBu_shenwei', 'hulao_yazi'], []],
            sanying_lvbu: ['male', 'qun', 10, ['lvbu_baguan', 'lvbu_wuwei', 'lvbu_jinghu', 'lvbu_jianju'], []],
            qunying_shenzhouyu: ['male', 'shen', 36, ['qunying_xiongzi', 'qunying_yehuo', 'qunying_shenhuo', 'qunying_qinyin'], []],
            qunying_shenzhugeliang: ['male', 'shen', 36, ['qunying_qixing', 'qunying_miwu', 'qunying_shenfeng', 'qunying_jizhi'], []],
            shenshou_chiwen: ['male', 'shen', 8, ['shenshou_longao', 'shenshou_quyan', 'shenshou_yuhuo', 'shenshou_fubing'], []],
            fadong_guosi: ['male', 'qun', 4, ['fadong_yanglie', 'fadong_mojun'], []],
            fadong_lijue: ['male', 'qun', 5, ['fadong_yangwu', 'fadong_mojun'], []],
            fadong_fanchou: ['male', 'qun', 4, ['fadong_fangong', 'fadong_mojun'], []],
            fadong_dongyue: ['male', 'qun', 4, ['fadong_kuangxi', 'fadong_mojun'], []],
            fadong_niufudongxie: ['double', 'qun', 4, ['fadong_tunjun', 'fadong_jiaoxia', 'fadong_mojun'], []],
            fadong_zhangji: ['male', 'qun', 4, ['fadong_jielve', 'fadong_mojun'], []],
            fadong_hubenjun: ['male', 'qun', 5, ['fadong_huying'], []],
            fadong_baolvejun: ['male', 'qun', 3, ['fadong_baoying'], []],
            fadong_fengyaojun: ['female', 'qun', 3, ['fadong_fengying'], []],
            fadong_longxiangjun: ['male', 'qun', 4, ['fadong_longying'], []],
            fadong_feixiongjunzuo: ['male', 'qun', 4, ['hulaoguan_jingji'], []],
            fadong_feixiongjunyou: ['male', 'qun', 4, ['fadong_ruiji'], []],
            fadong_sunjian: ['male', 'qun', 6, ['gzyinghun', 'fadong_polu'], []],
            fadong_huaxiong: ['male', 'qun', 8, ['fadong_moqu', 'yaowu', 'fadong_mojun'], []],
            mitan_caosong: ['male', 'wei', 20, ['cslilu', 'csyizheng', 'mitan_taigong'], []],
            mitan_liufeng: ['male', 'shu', 14, ['xiansi', 'mitan_suizhan'], []],
            mitan_caomao: ['male', 'wei', 12, ['mitan_wenhui', 'mitan_qintao', 'mitan_xianggong'], []],
            mitan_liuyong: ['male', 'shu', 12, ['mitan_zhuning', 'mitan_fengxiang', 'mitan_jitong'], []],
            mitan_liubei: ['male', 'shu', 20, ['rerende', 'mitan_jijiang'], []],
            mitan_liuchen: ['male', 'shu', 16, ['zhanjue', 'mitan_qinwang'], []],
            mitan_caopi: ['male', 'wei', 10, ['xingshang', 'fangzhu', 'mitan_songwei', 'mitan_zhuixi', 'mitan_zhichi'], []],
            mitan_caocao: ['male', 'wei', 16, ['new_rejianxiong', 'mitan_hujia', 'feiying'], []],
            mitan_lingju: ['female', 'qun', 30, ['jieyuan', 'mitan_yinci'], []],
            mitan_xugong: ['male', 'wu', 30, ['biaozhao', 'yechou'], []],
            mitan_sunce: ['male', 'wu', 12, ['jiang', 'mitan_yingzi', 'mitan_yinghun', 'mitan_zhiba'], []],
            mitan_sunhao: ['male', 'wu', 18, ['mitan_canshi', 'rechouhai', 'mitan_guiming'], []],
            mitan_sunquan: ['male', 'wu', 16, ['rezhiheng', 'mitan_jiuyuan'], []],
            mitan_liushan: ['male', 'shu', 18, ['xiangle', 'fangquan', 'mitan_ruoyu'], []],
            mitan_caorui: ['male', 'wei', 18, ['huituo', 'mingjian', 'mitan_xingshuai'], []],
            sw_zhuyin: ['male', 'qun', 5, ['sw_xiongshou'], []],
            sw_hundun: ['male', 'qun', '25/30', ['sw_xiongshou', 'hd_wuzang', 'hd_xiangde', 'hd_yinzei'], []],
            sw_zhuyan: ['male', 'qun', '20/25', ['sw_yaoshou', 'zy_bingxian', 'zy_juyuan', 'zy_xushi'], []],
            sw_qiongqi: ['male', 'qun', '20/25', ['sw_xiongshou', 'qq_futai', 'qq_zhue', 'qq_yandu'], []],
            sw_taotie: ['male', 'qun', '20/25', ['sw_xiongshou', 'tt_tanyu', 'tt_cangmu', 'tt_jicai'], []],
            sw_bifang: ['male', 'qun', '20/25', ['sw_yaoshou', 'bf_zhaohuo', 'bf_honglian', 'bf_yanyu'], []],
            sw_taowu: ['male', 'qun', '20/25', ['sw_xiongshou', 'tw_minwan', 'tw_nitai', 'tw_luanchang'], []],
            sw_xiangliu: ['male', 'qun', '16/20', ['sw_yaoshou', 'xl_duqu', 'xl_jiushou', 'xl_echou'], []],
            sw_yingzhao: ['male', 'qun', '20/25', ['sw_yaoshou', 'yz_fengdong', 'yz_xunyou', 'yz_sipu'], []],
            Sw_hundun: ['male', 'qun', 20, ['sw_xiongshou', 'hd_wuzang', 'hd_xiangde', 'sw_eyi', 'hd_yinzei'], []],
            Sw_zhuyan: ['male', 'qun', 15, ['sw_yaoshou', 'zy_bingxian', 'zy_juyuan', 'sw_eyi', 'zy_xushi'], []],
            Sw_qiongqi: ['male', 'qun', 15, ['sw_xiongshou', 'qq_futai', 'qq_zhue', 'sw_eyi', 'qq_yandu'], []],
            Sw_taotie: ['male', 'qun', 18, ['sw_xiongshou', 'tt_tanyu', 'tt_cangmu', 'sw_eyi', 'tt_jicai'], []],
            Sw_bifang: ['male', 'qun', 15, ['sw_yaoshou', 'bf_zhaohuo', 'bf_honglian', 'sw_eyi', 'bf_yanyu'], []],
            Sw_taowu: ['male', 'qun', 15, ['sw_xiongshou', 'tw_minwan', 'tw_nitai', 'sw_eyi', 'tw_luanchang'], []],
            Sw_xiangliu: ['male', 'qun', 12, ['sw_yaoshou', 'xl_duqu', 'xl_jiushou', 'sw_eyi', 'xl_echou'], []],
            Sw_yingzhao: ['male', 'qun', 18, ['sw_yaoshou', 'yz_fengdong', 'yz_xunyou', 'sw_eyi', 'yz_sipu'], []],
            shenshou_bian: ['male', 'shen', 8, ['shenshou_longshi', 'shenshou_songyan', 'shenshou_suwei', 'shenshou_hualao'], ['clan:神兽']],
            shenshou_pulao: ['male', 'shen', 8, ['shenshou_longhou', 'shenshou_quejing', 'shenshou_mingyin', 'shenshou_duyuan'], ['clan:神兽']],
            shenshou_suanni: ['male', 'shen', 8, ['shenshou_longzhen', 'shenshou_ruiyan', 'shenshou_raoling', 'shenshou_xiangjin'], ['clan:神兽']],
            shenshou_yazi: ['male', 'shen', 8, ['shenshou_longlie', 'shenshou_chaiyue', 'shenshou_langri', 'shenshou_bibao'], ['clan:神兽']],
            shenshou_bixi: ['male', 'shen', 8, ['shenshou_longxuan', 'shenshou_lingxi', 'shenshou_shuliu', 'shenshou_jienu'], ['clan:神兽']],
            shenshou_fuxi: ['male', 'shen', 8, ['shenshou_longzhi', 'shenshou_lingjie', 'shenshou_feizhang', 'shenshou_bowen'], ['clan:神兽']],
            shenshou_qiuniu: ['male', 'shen', 8, ['shenshou_longxian', 'shenshou_lige', 'shenshou_heming', 'shenshou_jilv'], ['clan:神兽']],
            shenshou_chaofeng: ['male', 'shen', 8, ['shenshou_longlin', 'shenshou_zhijiao', 'shenshou_zhixie', 'shenshou_haoxian'], ['clan:神兽']],
            tianshu_shaohao: ['male', 'shen', 18, ['tianshu_shenen', 'tianshu_baiyi'], []],
            Tianshu_shaohao: ['male', 'shen', 25, ['Tianshu_shenen', 'Tianshu_baiyi'], []],
            Tianshu_shaohaoa: ['male', 'shen', 10, ['tianshu_shenen', 'Tianshu_baiyia'], []],
            Tianshu_baiqia: ['male', 'qun', 10, ['tianshubaiqi_wuana', 'tianshubaiqi_shashen', 'tianshubaiqi_changsheng'], []],
            Tianshu_baiqib: ['male', 'qun', 6, ['tianshubaiqi_wuan', 'tianshubaiqi_changsheng'], []],
            tianshu_hanbaa: ['female', 'shen', 18, ['hanba_fenshi', 'tianshu_zhiri', 'hanba_xinji'], []],
            Tianshu_hanba: ['female', 'shen', 25, ['hanba_fenshi', 'tianshu_zhiri', 'Tianshu_xinji'], []],
            Tianshu_hanbaa: ['female', 'shen', 10, ['hanba_fenshi', 'hanba_zhiri', 'Tianshu_xinjia'], []],
            olsx_zishu: ['male', 'qun', 3, ['sx_zishu'], ['clan:生肖兽']],
            olsx_chouniu: ['male', 'qun', '1/5', ['sx_chouniu'], ['clan:生肖兽']],
            olsx_yinhu: ['male', 'qun', 4, ['sx_yinhu'], ['clan:生肖兽']],
            olsx_maotu: ['female', 'qun', 3, ['sx_maotu'], ['clan:生肖兽']],
            olsx_chenlong: ['male', 'qun', 4, ['sx_chenlong'], ['clan:生肖兽']],
            olsx_sishe: ['female', 'qun', 3, ['sx_sishe'], ['clan:生肖兽']],
            olsx_wuma: ['male', 'qun', 4, ['sx_wuma'], ['clan:生肖兽']],
            olsx_weiyang: ['female', 'qun', 3, ['sx_weiyang'], ['clan:生肖兽']],
            olsx_shenhou: ['male', 'qun', 3, ['sx_shenhou'], ['clan:生肖兽']],
            olsx_youji: ['male', 'qun', 3, ['sx_youji'], ['clan:生肖兽']],
            olsx_xugou: ['male', 'qun', 4, ['sx_xugou'], ['clan:生肖兽']],
            olsx_haizhu: ['male', 'qun', 5, ['sx_haizhu'], ['clan:生肖兽']],
            zhiyuan_zhoufei: ['female', 'wu', 6, ['liangyin', 'kongsheng', 'zhiyuan_nuanyuan'], []],
            zhiyuan_huangyueying: ['female', 'shu', 5, ['linglong', 'jizhi', 'zhiyuan_yuanfei'], []],
            zhiyuan_yuzheng: ['', 'qun', 6, ['zhiyuan_yuxing', 'zhiyuan_lingkong', 'zhiyuan_feiyuan'], []],
            zhiyuan_diezheng: ['', 'qun', 5, ['zhiyuan_diexing', 'zhiyuan_lingkong', 'zhiyuan_feiyuan'], []],
            zhiyuan_yanzheng: ['', 'qun', 5, ['zhiyuan_yanxing', 'zhiyuan_lingkong', 'zhiyuan_feiyuan'], []],
            nianxi_dajinhu1: ['male', 'qun', 99, ['nianxi_hesui'], []],
            nianxi_dajinhu2: ['male', 'qun', 99, ['nianxi_hesui'], []],
            nianxi_xiaojinhu1: ['male', 'qun', 99, ['nianxi_jinhu', 'shanhe_mashu'], []],
            nianxi_xiaojinhu2: ['male', 'qun', 99, ['nianxi_jinhu', 'shanhe_mashu'], []],
            nianxiboss_jinniu2: ['male', 'qun', 6, ['nianxi_manjin'], []],
            nianxiboss_jinniu1: ['male', 'qun', 8, ['nianxi_manjin'], []],
            nianxiboss_jinniu: ['male', 'qun', '8/12', ['nianxi_jinniu', 'nianxi_manjin'], []],
            hulaoguan_lijue: ['male', 'qun', '6/8', ['boss_langxi', 'boss_yisuan', 'hulaoguan_mojun'], []],
            hulaoguan_guosi: ['male', 'qun', 6, ['boss_tanbei', 'boss_sidao', 'hulaoguan_mojun'], []],
            hulaoguan_fanchou: ['male', 'qun', 6, ['hulaoguan_fangong', 'hulaoguan_mojun'], []],
            hulaoguan_zhangji: ['male', 'qun', 6, ['hulaoguan_jielue', 'hulaoguan_mojun'], []],
            xinhulaoguan_lijue: ['male', 'qun', 12, ['boss_langxia', 'boss_yisuan', 'hulaoguan_xiongluan'], []],
            xinhulaoguan_guosi: ['male', 'qun', 12, ['boss_tanbeia', 'boss_sidaoa', 'hulaoguan_xiongluan'], []],
            xinhulaoguan_fanchou: ['male', 'qun', 12, ['hulaoguan_fangong', 'hulaoguan_xingluana', 'hulaoguan_xiongluan'], []],
            xinhulaoguan_zhangji: ['male', 'qun', 12, ['hulaoguan_jielue', 'hulaoguan_lveminga', 'hulaoguan_xiongluan'], []],
            hulaoguan_huaxiong: ['male', 'qun', 10, ['hulaoguan_moqu', 'boss_yaowu', 'hulaoguan_mojun'], []],
            xinhulaoguan_huaxiong: ['male', 'qun', 15, ['hulaoguan_moqu', 'hulaoguan_yangwei', 'hulaoguan_mojuna'], []],
            hulaoguan_caoxing: ['male', 'qun', 8, ['boss_liushi', 'boss_zhanwan'], []],
            hulaoguan_chengong: ['male', 'qun', 7, ['hulaoguan_shence', 'boss_zhichi'], []],
            Hulaoguan_chengong: ['male', 'qun', 6, ['hulaoguan_shence', 'hulaoguan_zhichi'], []],
            fenghuo_tongyuan: ['male', 'qun', 6, ['fenghuo_youyong', 'chaofeng', 'chuanshu', 'fenghuo_qiangshu', 'fenghuo_tongxin', 'fenghuo_zhanfan'], []],
            fenghuo_zhangxiu1: ['male', 'qun', 5, ['drlt_xiongluan', 'drlt_congjian', 'fenghuo_tongxin'], []],
            fenghuo_zhaoyun: ['male', 'qun', 5, ['ollongdan', 'chongzhen', 'fenghuo_tongxin'], []],
            fenghuo_zhaoyun1: ['male', 'shu', 5, ['ollongdan', 'new_yajiao', 'fenghuo_tongxin'], []],
            fenghuo_zhangxingcai1: ['female', 'shu', 5, ['shenxian', 'qiangwu', 'fenghuo_tongxin'], []],
            fenghuo_zhanghu: ['male', 'wei', 5, ['cuijian', 'zhtongyuan', 'fenghuo_tongxin'], []],
            fenghuo_machao3: ['male', 'shu', 5, ['shanhe_mashu', 'retieji', 'fenghuo_tongxin'], []],
            fenghuo_jiangwei: ['male', 'shu', 5, ['tiaoxin', 'zhiji', 'fenghuo_tongxin'], []],
            fenghuo_mayunlu: ['female', 'shu', 5, ['shanhe_mashu', 'fengpo', 'fenghuo_tongxin'], []],
            fenghuo_lingtong1: ['male', 'wu', 5, ['decadexuanfeng', 'yongjin', 'fenghuo_tongxin'], []],
            fenghuo_sunce: ['male', 'wu', 5, ['jiang', 'hunzi', 'fenghuo_tongxin'], []],
            fenghuo_zhangren: ['male', 'qun', 5, ['fenghuo_bainiao', 'fenghuo_chuanyun', 'fenghuo_tongxin'], []],
            fenghuo_zhanghe1: ['male', 'wei', 5, ['qiaobian', 'fenghuo_tongxin'], []],
            fenghuo_zhangliao1: ['male', 'wei', 5, ['new_retuxi', 'fenghuo_tongxin'], []],
            xinhulaoguan_caoxing: ['male', 'qun', 12, ['boss_liushi', 'boss_zhanwan', 'boss_wangong'], []],
            xinhulaoguan_chengong: ['male', 'qun', 10, ['hulaoguan_shence', 'remingce', 'boss_qice'], []],
            xinhulaoguan_gaoshun: ['male', 'qun', 12, ['shanhe_mashu', 'hulaoguan_jinjiu', 'hulaoguan_xianzhen', 'hulaoguan_sizhen'], []],
            xinhulaoguan_dongxie: ['female', 'qun', 10, ['hulaoguan_juntuna', 'hulaoguan_jiaoxia'], []],
            zhengzhan_huaxiong: ['male', 'qun', 8, ['hulaoguan_moqu', 'hulaoguan_yangwei', 'hulaoguan_mojuna'], []],
            zhengzhan_caoxing: ['male', 'qun', 8, ['boss_liushi', 'boss_zhanwan', 'boss_wangong'], []],
            zhengzhan_chengong: ['male', 'qun', 8, ['hulaoguan_shence', 'remingce', 'boss_zhichi'], []],
            zhengzhan_gaoshun: ['male', 'qun', 8, ['shanhe_mashu', 'hulaoguan_jinjiu', 'hulaoguan_xianzhen', 'hulaoguan_sizhen'], []],
            zhengzhan_dongxie: ['female', 'qun', 8, ['hulaoguan_juntuna', 'hulaoguan_jiaoxia'], []],
            hulaoguan_gaoshun: ['male', 'qun', 8, ['shanhe_mashu', 'hulaoguan_sizhen', 'hulaoguan_juejiu'], []],
            hulaoguan_dongxie: ['female', 'qun', 7, ['hulaoguan_juntun', 'hulaoguan_jiaoxia'], []],
            fenghuo_xugong: ['male', 'wu', 6, ['biaozhao', 'yechou', 'fenghuo_youyong', 'fenghuo_huixin', 'fenghuo_yinni'], []],
            fenghuo_fanjiangzhangda: ['male', 'shu', 5, ['fenghuo_duandao', 'fenghuo_huixin', 'fenghuo_yinni'], []],
            fenghuo_lingju: ['female', 'qun', 5, ['jieyuan', 'fenghuo_huixin', 'fenghuo_yinni'], []],
            fenghuo_cike: ['male', 'qun', 3, ['fenghuo_yinni', 'shanhe_tuxi', 'fenghuo_huixin'], []],
            fenghuo_nvcike: ['female', 'qun', 3, ['fenghuo_yinni', 'fenghuo_guisha', 'fenghuo_huixin'], []],
            fenghuo_tanzi: ['male', 'qun', 3, ['fenghuo_yinni', 'fenghuo_huixin'], []],
            fenghuo_zhaoxiang1: ['female', 'shu', 5, ['refanghun', 'refuhan', 'fenghuo_huixin', 'fenghuo_yinni'], []],
            fenghuo_weiyan: ['male', 'shu', 5, ['xinkuanggu', 'qimou', 'fenghuo_huixin', 'fenghuo_yinni'], []],
            fenghuo_caocao4: ['male', 'wei', 5, ['fenghuo_zhixi', 'new_rejianxiong', 'fenghuo_huixin', 'fenghuo_yinni'], []],
            fenghuo_xunyou: ['male', 'wei', 5, ['qice', 'zhiyu', 'fenghuo_huixin', 'fenghuo_yinni'], []],
            fenghuo_hanlong: ['male', 'wei', 5, ['fenghuo_pojun', 'fenghuo_huixin', 'fenghuo_yinni'], []],
            fenghuo_wufu: ['male', 'qun', 5, ['fenghuo_juesha', 'fenghuo_huixin', 'fenghuo_yinni'], []],
            hulaoguan_fengyaojun: ['female', 'qun', 4, ['hulaoguan_fengying'], []],
            hulaoguan_longxiangjun: ['male', 'qun', 5, ['hulaoguan_longying'], []],
            hulaoguan_hubenjun: ['male', 'qun', 4, ['hulaoguan_huying'], []],
            mitan_wuliuqi: ['male', 'qun', 6, ['mitan_shenghu', 'mitan_feijian', 'mitan_yirong', 'mitan_qingsuo', 'mitan_xuefa'], []],
            mitan_meihuashisan: ['female', 'qun', 3, ['mitan_lingshou', 'mitan_meibiao', 'mitan_biandao', 'mitan_yingyue', 'mitan_huti'], []],
            mitan_mitan1: ['male', 'qun', 4, ['mitan_zhibi', 'mitan_anqi1', 'mitan_weizhuang1', 'mitan_neigong1', 'mitan_lingmin1', 'mitan_chuyi1', 'mitan_duanzao1'], []],
            mitan_mitan2: ['male', 'qun', 4, ['mitan_zhibi', 'mitan_anqi2', 'mitan_weizhuang2', 'mitan_neigong2', 'mitan_lingmin2', 'mitan_chuyi2', 'mitan_duanzao2'], []],
            mitan_mitan3: ['male', 'qun', 4, ['mitan_zhibi', 'mitan_anqi3', 'mitan_weizhuang3', 'mitan_neigong3', 'mitan_lingmin3', 'mitan_chuyi3', 'mitan_duanzao3'], []],
            mitan_sunxiu: ['male', 'wu', 14, ['reyanzhu', 'rexingxue', 'mitan_zhaofu'], []],
            mitan_sunliang: ['male', 'wu', 20, ['xinkuizhu', 'xinzhizheng', 'mitan_lijun'], []],
            hulaoguan_feixiongjun: ['male', 'qun', 4, ['hulaoguan_jingji'], []],
            hulaoguan_baolvejun: ['male', 'qun', 4, ['hulaoguan_baoying'], []],
            hulaoguan_tanlangjun: ['male', 'qun', 3, ['hulaoguan_ruiji'], []],
            zhongye_qinglong: ['male', 'qun', 32, ['zhongye_longhui', 'zhongye_longlin'], []],
            zhongye_zhuque: ['female', 'qun', 32, ['zhongye_zhuyu', 'zhongye_tianhuo'], []],
            zhongye_xuanwu: ['female', 'qun', 32, ['zhongye_shengqu', 'zhongye_xuankai'], []],
            zhongye_baihu: ['male', 'qun', 32, ['zhongye_huwei', 'zhongye_tianxiao'], []],
            danji_daofushou3: ['male', 'wei', 8, ['danji_cangbi'], []],
            danji_daofushou2: ['male', 'wei', 6, ['danji_cangbia'], []],
            danji_daofushou1: ['male', 'wei', 4, ['danji_cangbib'], []],
            zhongye_canshuiyuan: ['male', 'qun', 8, ['zhongye_canshui'], []],
            zhongye_kuimulang: ['male', 'qun', 8, ['zhongye_kuimu'], []],
            zhongye_yihuoshe: ['female', 'qun', 8, ['zhongye_yihuo'], []],
            zhongye_weiyueyan: ['female', 'qun', 8, ['zhongye_weiyue'], []],
            zhongye_doumuxie: ['male', 'qun', 8, ['zhongye_doumu'], []],
            zhongye_xingrima: ['male', 'qun', 8, ['zhongye_xingri'], []],
            zhongye_kangjinlong: ['male', 'qun', 8, ['zhongye_kangjin'], []],
            zhongye_jiaomujiao: ['male', 'qun', 8, ['zhongye_jiaomu'], []],
            danji_pujing: ['male', 'qun', 6, ['danji_fencha'], []],
            nianshoupucong: ['male', 'qun', 3, ['nianshou_xiongshou', 'nianshou_xishenga'], []],
            nianshoupucong1: ['male', 'qun', 3, ['nianshou_xiongshou', 'nianshou_xisheng'], []],
            nianshoupucong2: ['male', 'qun', 6, ['nianshou_xiongshou', 'nianshou_xisheng'], []],
            nianshoupucong3: ['male', 'qun', 12, ['nianshou_xiongshoua', 'nianshou_xisheng'], []],
            waiqi_hejin: ['male', 'qun', 80, ['hejin_zhenmou', 'hejin_guiluan', 'hejin_waixi', 'hejin_quanba'], []],
            neihuan_zhangrang: ['male', 'qun', 80, ['neihuan_huanshi', 'zhangrang_huoluan', 'zhangrang_yankong', 'zhangrang_jiquan', 'zhangrang_luanzheng'], []],
            neihuan_zhaozhong: ['male', 'qun', 60, ['neihuan_huanshi', 'zhaozhong_duanzheng', 'zhaozhong_lianhuo', 'zhaozhong_huangkong', 'zhaozhong_luanzheng'], []],
            waiqi_hetaihou: ['female', 'qun', 60, ['hetaihou_zunqin', 'hetaihou_chuhuan', 'hetaihou_nongquan', 'hetaihou_shexie'], []],
            qunying_lvbu: ['male', 'qun', 10, ['wushuang', 'new_liyu', 'hulao_zhanjia'], []],
            qunying_zhugeliang: ['male', 'shu', 9, ['huoji', 'qunying_jizhi', 'bazhen'], []],
            qunying_zhouyu: ['male', 'wu', 9, ['reyingzi', 'qunying_yinghun', 'qunying_fanjian'], []],
            qunying_zuoci1: ['male', 'qun', 4, ['qunying_huaxinga', 'fenghuo_xianti', 'qunying_xianfua'], []],
            qunying_zuoci2: ['male', 'qun', 7, ['qunying_huaxing', 'fenghuo_xianti', 'qunying_xianfua'], []],
            qunying_zuoci3: ['male', 'qun', 10, ['qunying_huaxing', 'fenghuo_xianti', 'qunying_xianfu'], []],
            danji_huban: ['male', 'wei', 16, ['fenghuo_zhongyong', 'danji_jiashu'], []],
            qunying_shenlvbu: ['male', 'shen', 36, ['shanhe_mashu', 'hulao_wushuang', 'hulao_shenji', 'qunying_shenkai', 'hulao_yangwu'], []],
            danji_bianxi1: ['male', 'wei', 6, ['danji_cangdaob', 'danji_jiayan'], []],
            danji_bianxi2: ['male', 'wei', 12, ['danji_cangdaoa', 'danji_jiayan'], []], //QQQ
            danji_bianxi3: ['male', 'wei', 18, ['danji_cangdao', 'danji_jiayan'], []],
            qianli_bianxi: ['male', 'wei', 18, ['danji_cangdao', 'danji_jiayan', 'qianli_chuixi'], []],
            danji_kongxiu1: ['male', 'wei', 6, ['danji_youyan', 'danji_shilib'], []],
            danji_kongxiu2: ['male', 'wei', 9, ['danji_youyan', 'danji_shilia'], []],
            danji_kongxiu3: ['male', 'wei', 12, ['danji_youyan', 'danji_shili'], []],
            qianli_kongxiu: ['male', 'wei', 12, ['danji_youyan', 'danji_shili', 'qianli_tingqiang'], []],
            danji_wangzhi: ['male', 'wei', 36, ['danji_huoji', 'danji_zonghuo', 'danji_jiayi'], []],
            qianli_wangzhi: ['male', 'wei', 36, ['danji_huoji', 'qianli_zonghuo', 'danji_jiayi'], []],
            danji_hanfu: ['male', 'wei', 10, ['shanhe_xili', 'danji_anjian'], []],
            qianli_hanfu: ['male', 'wei', 10, ['shanhe_xili', 'danji_anjian', 'qianli_wangong'], []],
            danji_mengtan: ['male', 'wei', 10, ['shanhe_xili', 'danji_xianfeng', 'danji_yangbai'], []],
            qianli_mengtan: ['male', 'wei', 10, ['shanhe_xili', 'danji_xianfeng', 'qianli_yangbai'], []],
            fenghuo_diaochan: ['female', 'qun', 6, ['lijian', 'rebiyue', 'fenghuo_jiban', 'fenghuo_chuchu'], []],
            fenghuo_liuxie3: ['male', 'qun', 5, ['tianming', 'mizhao', 'fenghuo_jiban'], []],
            fenghuo_caojie2: ['female', 'qun', 5, ['shouxi', 'huimin', 'fenghuo_jiban'], []],
            fenghuo_sunce2: ['male', 'wu', 5, ['jiang', 'hunzi', 'fenghuo_jiban'], []],
            fenghuo_daqiao: ['female', 'wu', 5, ['reguose', 'liuli', 'fenghuo_jiban'], []],
            fenghuo_xiaoqiao1: ['female', 'wu', 5, ['retianxiang', 'hongyan', 'fenghuo_jiban'], []],
            fenghuo_zhouyu1: ['male', 'wu', 5, ['reyingzi', 'refanjian', 'fenghuo_jiban'], []],
            fenghuo_sunquan2: ['male', 'wu', 5, ['rezhiheng', 'fenghuo_jiban'], []],
            fenghuo_simayi1: ['male', 'wei', 5, ['fankui', 'reguicai', 'fenghuo_jiban'], []],
            fenghuo_bulianshi: ['female', 'wu', 5, ['dcanxu', 'dczhuiyi', 'fenghuo_jiban'], []],
            fenghuo_daxiaoqiao: ['female', 'wu', 5, ['fenghuo_xingwu', 'fenghuo_luoyan', 'fenghuo_jiban'], []],
            fenghuo_zhangchunhua: ['female', 'wei', 5, ['rejueqing', 'reshangshi', 'fenghuo_jiban'], []],
            fenghuo_liubiao: ['male', 'qun', 5, ['decadezishou', 'decadezongshi', 'fenghuo_jiban'], []],
            fenghuo_caifuren: ['female', 'qun', 5, ['reqieting', 'rexianzhou', 'fenghuo_jiban'], []],
            fenghuo_caorui2: ['male', 'wei', 5, ['huituo', 'mingjian', 'fenghuo_jiban'], []],
            fenghuo_guohuanghou1: ['female', 'wei', 5, ['jiaozhao', 'danxin', 'fenghuo_jiban'], []],
            fenghuo_wuguotai1: ['female', 'wu', 5, ['ganlu', 'buyi'], []],
            fenghuo_zhongyao1: ['male', 'wei', 5, ['huomo', 'zuoding', 'fenghuo_jiban'], []],
            fenghuo_zhangchangpu1: ['female', 'wei', 5, ['yanjiao', 'xingshen', 'fenghuo_jiban'], []],
            fenghuo_huangyueying: ['female', 'shu', 5, ['rejizhi', 'qicai', 'fenghuo_jiban'], []],
            fenghuo_zhugeliang1: ['male', 'shu', 5, ['guanxing', 'kongcheng', 'fenghuo_jiban'], []],
            fenghuo_nvshicong: ['female', 'qun', 3, ['fenghuo_shibi'], []],
            fenghuo_lvbu: ['male', 'qun', 6, ['wushuang', 'new_liyu', 'fenghuo_youyong', 'fenghuo_jiban'], []],
            fenghuo_lvbu1: ['male', 'qun', 5, ['wushuang', 'new_liyu', 'hulao_zhankai', 'hulao_shenji'], []],
            fenghuo_zhangning: ['female', 'qun', 6, ['fenghuo_youyong', 'tianze', 'difa', 'fenghuo_xingchou', 'fenghuo_huitu', 'fenghuo_luocao'], []],
            fenghuo_huangjinbing: ['male', 'qun', 3, ['fenghuo_baodong', 'fenghuo_chibi', 'fenghuo_jieshe'], []],
            fenghuo_huangjindaogu: ['female', 'qun', 3, ['fenghuo_yunjv', 'fenghuo_xinji'], []],
            fenghuo_huangjinshouling: ['male', 'qun', 3, ['fenghuo_bahu', 'fenghuo_yihui', 'fenghuo_jieshe'], []],
            fenghuo_zhangjiao: ['male', 'qun', 5, ['fenghuo_sanhe', 'releiji', 'guidao', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_peiyuanshao: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_luocao', 'fenghuo_youyong'], []],
            fenghuo_huangjinzhanji: ['female', 'qun', 3, ['fenghuo_baodong', 'fenghuo_fanghun', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_yudu: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_niluan', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_chenyuanzhi: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_shouzhi', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_zhangmancheng: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_xingluan', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_bocai: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_huoluan', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_suigu: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_yelve', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_guanhai: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_qinxi', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_zhangyan: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_feiyan', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_tangzhou: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_weicheng', 'fenghuo_niluan', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_bairao: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_shouchong', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_taosheng: ['male', 'qun', 5, ['fenghuo_mouni', 'fenghuo_mitian', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_busi: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_shehun', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_dengmao: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_hengchong', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_jiping: ['male', 'qun', 5, ['fenghuo_duzhen', 'shanhe_jijiu'], []],
            fenghuo_dongfeng: ['male', 'qun', 5, ['fenghuo_huoqi', 'shanhe_jijiu'], []],
            fenghuo_zhangzhongjing: ['male', 'qun', 5, ['shanhe_jijiu'], []],
            fenghuo_mingyixuetu: ['male', 'qun', 3, ['shanhe_qingnang'], []],
            fenghuo_yiqibingren: ['male', 'qun', 3, ['fenghuo_jizhou', 'fenghuo_danshi'], []],
            fenghuo_quanyubaixing: ['male', 'qun', 3, ['fenghuo_duane'], []],
            fenghuo_jiping1: ['male', 'qun', 5, ['fenghuo_zhixi', 'fenghuo_huixin', 'fenghuo_yinni'], []],
            fenghuo_zhangbao: ['male', 'qun', 5, ['fenghuo_sanhe', 'xinzhoufu', 'xinyingbing', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_zhangliang: ['male', 'qun', 5, ['qqzj_yinlei', 'fenghuo_rendao', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_liuxie: ['male', 'qun', 6, ['tianming', 'mizhao', 'fenghuo_tianyi', 'fenghuo_youyong', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_liuhong1: ['male', 'qun', 5, ['yujue', 'tuxing', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_sunquan: ['male', 'wu', 5, ['rezhiheng', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_liubei1: ['male', 'shu', 5, ['rerende', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_yuanshu: ['male', 'qun', 5, ['qqzj_wangzun', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_caomao: ['male', 'wei', 5, ['mitan_wenhui', 'mitan_qintao', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_caorui: ['male', 'wei', 5, ['huituo', 'mingjian', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_sunliang: ['male', 'wu', 5, ['xinkuizhu', 'xinzhizheng', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_liubian: ['male', 'qun', 5, ['shiyuan', 'dushi', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_sunhao: ['male', 'wu', 5, ['recanshi', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_sunxiu: ['male', 'wu', 5, ['reyanzhu', 'rexingxue', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_liushan1: ['male', 'shu', 5, ['xiangle', 'fangquan', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_caopi1: ['male', 'wei', 5, ['xingshang', 'mitan_songwei', 'fenghuo_quanba', 'fenghuo_tianyou'], []],
            fenghuo_caojie1: ['female', 'qun', 5, ['shouxi', 'huimin', 'fenghuo_ganlu', 'shanhe_jijiu'], []],
            fenghuo_liuxie1: ['male', 'qun', 5, ['tianming', 'mizhao', 'fenghuo_ganlu', 'shanhe_jijiu'], []],
            fenghuo_simalang: ['male', 'wei', 5, ['junbing', 'quji', 'shanhe_jijiu'], []],
            fenghuo_caojie: ['female', 'qun', 6, ['fenghuo_pianchong', 'shouxi', 'huimin', 'fenghuo_youyong', 'fenghuo_zunhou', 'fenghuo_nongquan'], []],
            fenghuo_guozhao: ['female', 'wei', 5, ['pianchong', 'fenghuo_zunwei', 'fenghuo_nongquan'], []],
            fenghuo_panshu: ['female', 'wu', 5, ['zhiren', 'yaner', 'fenghuo_nongquan'], []],
            fenghuo_fuhuanghou: ['female', 'qun', 5, ['rezhuikong', 'reqiuyuan', 'fenghuo_nongquan'], []],
            fenghuo_wuxian: ['female', 'shu', 5, ['fumian', 'daiyan', 'fenghuo_nongquan'], []],
            fenghuo_zhangxingcai: ['female', 'shu', 5, ['shenxian', 'qiangwu', 'fenghuo_nongquan'], []],
            fenghuo_bulianshi1: ['female', 'wu', 5, ['dcanxu', 'dczhuiyi', 'fenghuo_nongquan'], []],
            fenghuo_ganfuren1: ['female', 'shu', 5, ['fenghuo_shushen', 'shenzhi', 'fenghuo_nongquan'], []],
            fenghuo_nvbing: ['female', 'qun', 3, ['fenghuo_shuli'], []],
            fenghuo_hetaihou: ['female', 'qun', 5, ['fenghuo_zhendu', 'qiluan', 'fenghuo_nongquan'], []],
            fenghuo_wangrong: ['female', 'qun', 5, ['minsi', 'jijing', 'zhuide', 'fenghuo_nongquan'], []],
            fenghuo_guohuanghou: ['female', 'wei', 5, ['jiaozhao', 'danxin', 'fenghuo_nongquan'], []],
            fenghuo_bianfuren: ['female', 'wei', 5, ['fuwei', 'fenghuo_zunwei', 'fenghuo_nongquan'], []],
            fenghuo_donglaotaihou: ['female', 'qun', 5, ['fenghuo_qiyuan', 'fenghuo_nongquan'], []],
            fenghuo_huangtianleixiao: ['male', 'qun', 10, ['fenghuo_guimei', 'fenghuo_xiaoshou', 'fenghuo_taipinga', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_huangtianshiba: ['male', 'qun', 10, ['fenghuo_guimei', 'fenghuo_manji', 'fenghuo_lingqu', 'fenghuo_youyong', 'fenghuo_luocao'], []],
            fenghuo_lisu: ['male', 'qun', 6, ['fenghuo_shence', 'fenghuo_nizhuan', 'fenghuo_yuanbi'], []],
            fenghuo_jianggan: ['male', 'wei', 5, ['weicheng', 'daoshu', 'fenghuo_yuanbi'], []],
            fenghuo_miheng1: ['male', 'qun', 5, ['rekuangcai', 'reshejian', 'fenghuo_yuanbi'], []],
            fenghuo_huaxin: ['male', 'wei', 5, ['spwanggui', 'xibing', 'fenghuo_yuanbi'], []],
            fenghuo_manchong: ['male', 'wei', 5, ['junxing', 'yuce', 'fenghuo_yuanbi'], []],
            fenghuo_xinpi1: ['male', 'wei', 5, ['xpchijie', 'yinju', 'fenghuo_yuanbi'], []],
            fenghuo_dengzhi: ['male', 'shu', 5, ['fenghuo_dimeng', 'fenghuo_qiaoshui', 'fenghuo_yuanbi'], []],
            fenghuo_yiji: ['male', 'shu', 5, ['xinfu_jijie', 'xinfu_jiyuan', 'fenghuo_yuanbi'], []],
            fenghuo_zhugeliang3: ['male', 'shu', 5, ['fenghuo_shangshi', 'fenghuo_qiaoshui', 'fenghuo_yuanbi'], []],
            fenghuo_kanze: ['male', 'wu', 5, ['xiashu', 'rekuanshi', 'fenghuo_yuanbi'], []],
            fenghuo_zongyu: ['male', 'shu', 5, ['fenghuo_aocai', 'fenghuo_yuanbi'], []],
            fenghuo_zhangwen: ['male', 'wu', 5, ['songshu', 'sibian', 'fenghuo_yuanbi'], []],
            fenghuo_huatuo: ['male', 'qun', 6, ['qingnang', 'fenghuo_lihuo', 'fenghuo_chunlao', 'fenghuo_youyong', 'jijiu', 'fenghuo_bihu', 'fenghuo_tiebi'], []],
            fenghuo_liuhong: ['male', 'qun', 6, ['fenghuo_zhangxi', 'yujue', 'tuxing', 'fenghuo_quanba', 'fenghuo_youyong'], []],
            fenghuo_mizhu: ['male', 'shu', 5, ['ziyuan', 'jugu', 'fenghuo_jifu', 'qqzj_lingba', 'fenghuo_bianji'], []],
            fenghuo_baosanniang: ['female', 'shu', 3, ['decadewuniang', 'decadezhennan', 'fenghuo_mansi'], []],
            fenghuo_zhangqiying: ['female', 'qun', 5, ['xinfu_falu', 'xinfu_dianhua', 'xinfu_zhenyi', 'fenghuo_tiebi'], []],
            fenghuo_puyuan1: ['male', 'shu', 5, ['pytianjiang', 'pyzhuren', 'fenghuo_tiebi'], []],
            fenghuo_zuoci1: ['male', 'qun', 5, ['huashen', 'xinsheng', 'fenghuo_tiebi'], []],
            fenghuo_gexuan1: ['male', 'wu', 5, ['gxlianhua', 'zhafu', 'fenghuo_tiebi'], []],
            fenghuo_guanlu: ['male', 'wei', 5, ['tuiyan', 'busuan', 'mingjie', 'fenghuo_tiebi'], []],
            fenghuo_zhugeguo: ['female', 'shu', 5, ['qirang', 'yuhua', 'fenghuo_tiebi'], []],
            fenghuo_xushao: ['male', 'qun', 5, ['pingjian', 'fenghuo_tiebi'], []],
            fenghuo_puyuan: ['male', 'shu', 5, ['pytianjiang', 'pyzhuren', 'fenghuo_shanjia', 'fenghuo_jiewei', 'shanhe_qizhoua'], []],
            fenghuo_jiaxu: ['male', 'qun', 6, ['wenhe_posha', 'wenhe_fenluan', 'wenhe_tianmu', 'fenghuo_zhengtuo'], []],
            fenghuo_dading: ['', 'qun', 3, ['fenghuo_qianjun', 'fenghuo_hunling', 'fenghuo_anfan'], []],
            fenghuo_dading1: ['', 'qun', 3, ['fenghuo_qianjun', 'fenghuo_hunling'], []],
            fenghuo_huxihunling: ['female', 'qun', 20, ['fenghuo_hunling'], []],
            fenghuo_qinwei: ['male', 'qun', 3, ['fenghuo_kaikang'], []],
            fenghuo_zhurong: ['female', 'shu', 5, ['juxiang', 'lieren', 'fenghuo_manchuang', 'fenghuo_manxi', 'fenghuo_nanman'], []],
            fenghuo_menghuo: ['male', 'shu', 5, ['huoshou', 'zaiqi', 'fenghuo_manchuang', 'fenghuo_manxi', 'fenghuo_nanman'], []],
            fenghuo_liushan: ['male', 'shu', 6, ['xiangle', 'fangquan', 'fenghuo_chenshui', 'fenghuo_suxing'], []],
            fenghuo_ganfuren: ['female', 'shu', 6, ['fenghuo_shushen', 'shenzhi', 'fenghuo_xianli', 'fenghuo_youyong', 'fenghuo_cimu'], []],
            fenghuo_zhoufei1: ['female', 'wu', 5, ['liangyin', 'kongsheng', 'fenghuo_cimu'], []],
            fenghuo_zhangchangpu: ['female', 'wei', 5, ['yanjiao', 'xingshen', 'fenghuo_cimu'], []],
            fenghuo_zhonghui: ['male', 'wei', 5, ['xinquanji', 'xinzili', 'fenghuo_chenshui', 'fenghuo_suxing'], []],
            fenghuo_huaman1: ['female', 'shu', 5, ['manyi', 'mansi', 'souying', 'fenghuo_chenshui', 'fenghuo_suxing'], []],
            fenghuo_zhenji: ['female', 'wei', 5, ['reluoshen', 'reqingguo', 'fenghuo_nongquan'], []],
            fenghuo_zhenji1: ['female', 'wei', 5, ['reluoshen', 'reqingguo', 'fenghuo_cimu'], []],
            fenghuo_wangrong1: ['female', 'qun', 5, ['minsi', 'jijing', 'zhuide', 'fenghuo_cimu'], []],
            fenghuo_wuguotai: ['female', 'wu', 5, ['ganlu', 'buyi', 'fenghuo_cimu'], []],
            fenghuo_zhurong1: ['female', 'shu', 5, ['juxiang', 'lieren', 'fenghuo_cimu'], []],
            fenghuo_diaochan1: ['female', 'qun', 5, ['lijian', 'rebiyue', 'fenghuo_cimu'], []],
            fenghuo_sunquan1: ['male', 'wu', 5, ['rezhiheng', 'fenghuo_chenshui', 'fenghuo_suxing'], []],
            fenghuo_xiaoqiao: ['female', 'wu', 5, ['retianxiang', 'hongyan', 'fenghuo_chenshui', 'fenghuo_suxing'], []],
            fenghuo_liuxie2: ['male', 'qun', 5, ['tianming', 'mizhao', 'fenghuo_chenshui', 'fenghuo_suxing'], []],
            fenghuo_caorui1: ['male', 'wei', 5, ['huituo', 'mingjian', 'fenghuo_chenshui', 'fenghuo_suxing'], []],
            fenghuo_lingju1: ['female', 'qun', 5, ['jieyuan', 'fenghuo_chenshui', 'fenghuo_suxing'], []],
            fenghuo_liubei: ['male', 'shu', 6, ['fenghuo_yinhu', 'rerende', 'fenghuo_youyong'], []],
            fenghuo_gengniu: ['male', 'qun', 3, ['fenghuo_chouniu', 'fenghuo_chuhe', 'fenghuo_yinhu'], []],
            fenghuo_gengniu1: ['male', 'qun', 3, ['fenghuo_siyao', 'fenghuo_tanshi', 'fenghuo_yexing'], []],
            fenghuo_youmumin: ['male', 'qun', 3, ['fenghuo_manlve', 'fenghuo_yinhu'], []],
            fenghuo_machao: ['male', 'qun', 5, ['fenghuo_jisun', 'zhuiji', 'fenghuo_shichou', 'fenghuo_linxia'], []],
            fenghuo_yangwan: ['female', 'shu', 5, ['shanhe_mashu', 'youyan', 'zhuihuan', 'fenghuo_linxia'], []],
            fenghuo_licaiwei: ['female', 'wei', 5, ['shanhe_mashu', 'yijiao', 'qibie', 'fenghuo_linxia'], []],
            fenghuo_liangxing: ['male', 'qun', 5, ['shanhe_mashu', 'lulve', 'lxzhuixi', 'fenghuo_linxia'], []],
            fenghuo_pangde: ['male', 'qun', 5, ['shanhe_mashu', 'jianchu', 'fenghuo_linxia'], []],
            fenghuo_hansui: ['male', 'qun', 5, ['shanhe_mashu', 'spniluan', 'spweiwu', 'fenghuo_linxia'], []],
            fenghuo_wangyi: ['female', 'wei', 5, ['shanhe_mashu', 'zhenlie', 'miji', 'fenghuo_linxia'], []],
            fenghuo_huaxiong: ['male', 'qun', 5, ['shanhe_mashu', 'fenghuo_jiaoxie', 'new_reyaowu', 'fenghuo_linxia'], []],
            fenghuo_mateng: ['male', 'qun', 5, ['fenghuo_jisun', 'shanhe_mashu', 'fenghuo_xiongyi', 'fenghuo_linxia'], []],
            fenghuo_madai: ['male', 'shu', 5, ['fenghuo_jisun', 'shanhe_mashu', 'reqianxi', 'fenghuo_linxia'], []],
            fenghuo_chunyuqiong: ['male', 'qun', 5, ['recangchu', 'reliangying', 'fenghuo_huannan', 'fenghuo_chouyong', 'fenghuo_quanba'], []],
            fenghuo_chunyuqiong1: ['male', 'qun', 5, ['fenghuo_fuzhe', 'recangchu', 'reliangying', 'fenghuo_shishou'], []],
            fenghuo_zhaorong: ['male', 'qun', 5, ['fenghuo_ziyuan', 'fenghuo_zizhan', 'fenghuo_jiyuan', 'fenghuo_huannan', 'fenghuo_chouyong', 'fenghuo_quanba'], []],
            fenghuo_baohong: ['male', 'qun', 5, ['fenghuo_tanbei', 'fenghuo_jiquan', 'fenghuo_huannan', 'fenghuo_chouyong', 'fenghuo_quanba'], []],
            fenghuo_xiamou: ['male', 'qun', 5, ['shanhe_duliang', 'qqzj_jianzheng', 'fenghuo_huannan', 'fenghuo_chouyong', 'fenghuo_quanba'], []],
            fenghuo_yuanshao1: ['male', 'qun', 5, ['luanji', 'fenghuo_fangjun', 'fenghuo_huannan', 'fenghuo_chouyong', 'fenghuo_quanba'], []],
            fenghuo_yuanshao: ['male', 'qun', 6, ['fenghuo_jisun', 'fenghuo_yuyong', 'luanji', 'xueyi', 'fenghuo_fuzhe', 'fenghuo_shanbi'], ['zhu']],
            fenghuo_yuanwei: ['male', 'qun', 5, ['fenghuo_fuzhe', 'fenghuo_yuanmen'], []],
            fenghuo_yuanfeng: ['male', 'qun', 5, ['fenghuo_fuzhe', 'fenghuo_yuanmen'], []],
            fenghuo_lvkuanglvxiang: ['male', 'wei', 5, ['fenghuo_fuzhe', 'dcshuhe', 'dcliehou'], []],
            fenghuo_xunchen: ['male', 'qun', 5, ['fenghuo_fuzhe', 'refenglve', 'anyong'], []],
            fenghuo_gaolan: ['male', 'qun', 5, ['fenghuo_fuzhe', 'xizhen'], []],
            fenghuo_yanwen: ['male', 'qun', 5, ['fenghuo_fuzhe', 'shuangxiong', 'fenghuo_yuyong'], []],
            fenghuo_zhanghe: ['male', 'wei', 5, ['fenghuo_fuzhe', 'qiaobian'], []],
            fenghuo_jushou: ['male', 'qun', 5, ['fenghuo_fuzhe', 'dcjianying', 'dcshibei'], []],
            fenghuo_guotufengji: ['male', 'qun', 5, ['fenghuo_fuzhe', 'rejigong', 'shifei'], []],
            fenghuo_xuyou: ['male', 'qun', 5, ['fenghuo_fuzhe', 'nzry_chenglve', 'nzry_shicai', 'nzry_cunmu'], []],
            fenghuo_quyi: ['male', 'qun', 5, ['fenghuo_fuzhe', 'refuqi', 'jiaozi'], []],
            fenghuo_xinpi: ['male', 'wei', 5, ['fenghuo_fuzhe', 'xpchijie', 'yinju'], []],
            fenghuo_tianfeng: ['male', 'qun', 5, ['fenghuo_fuzhe', 'shanhe_sijian', 'fenghuo_suishi'], []],
            fenghuo_zhangliao: ['male', 'wei', 6, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'new_retuxi', 'fenghuo_dushan', 'fenghuo_shanbi'], []],
            fenghuo_gongsunzan: ['male', 'qun', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'reyicong', 'dcqiaomeng', 'fenghuo_dushan'], []],
            fenghuo_lingtong: ['male', 'wu', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'decadexuanfeng', 'yongjin', 'fenghuo_dushan'], []],
            fenghuo_xiahouyuan: ['male', 'wei', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'xinshensu', 'fenghuo_dushan'], []],
            fenghuo_guanyu2: ['male', 'shu', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'new_rewusheng', 'new_yijue', 'fenghuo_dushan'], []],
            fenghuo_machao2: ['male', 'shu', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'shanhe_mashu', 'retieji', 'fenghuo_dushan'], []],
            fenghuo_ganning: ['male', 'wu', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'qixi', 'fenwei', 'fenghuo_dushan'], []],
            fenghuo_lvmeng: ['male', 'wu', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'keji', 'fenghuo_qinxue', 'fenghuo_dushan'], []],
            fenghuo_dengai: ['male', 'wei', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'tuntian', 'zaoxian', 'fenghuo_dushan'], []],
            fenghuo_wangping: ['male', 'shu', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'nzry_feijun', 'nzry_binglve', 'fenghuo_dushan'], []],
            fenghuo_xiahouba: ['male', 'shu', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'rebaobian', 'fenghuo_dushan'], []],
            fenghuo_caoxiu: ['male', 'wei', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'qianju', 'reqingxi', 'fenghuo_dushan'], []],
            fenghuo_heqi: ['male', 'wu', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'qizhou', 'shanxi', 'fenghuo_dushan'], []],
            fenghuo_madai1: ['male', 'shu', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'shanhe_mashu', 'reqianxi', 'fenghuo_dushan'], []],
            fenghuo_wuyi: ['male', 'shu', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'xinbenxi', 'fenghuo_dushan'], []],
            fenghuo_lijue: ['male', 'qun', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'xinfu_langxi', 'xinfu_yisuan', 'fenghuo_dushan'], []],
            fenghuo_liangxing1: ['male', 'qun', 5, ['fenghuo_suzhan', 'fenghuo_chongfeng', 'lulve', 'lxzhuixi', 'fenghuo_dushan'], []],
            fenghuo_fengfang: ['male', 'qun', 5, ['fenghuo_huangbao', 'fenghuo_tanbei', 'fenghuo_huannan', 'fenghuo_chouyong', 'fenghuo_quanba'], []],
            fenghuo_hanjun: ['male', 'qun', 3, ['fenghuo_shuwei'], []],
            fenghuo_hanxiaowei: ['male', 'qun', 3, ['fenghuo_juhan'], []],
            fenghuo_shijie: ['male', 'qun', 3, ['fenghuo_sheyan'], []],
            fenghuo_shijie1: ['male', 'qun', 3, ['fenghuo_shuimeng'], []],
            fenghuo_rusheng: ['male', 'qun', 3, ['fenghuo_qiuping'], []],
            fenghuo_chenu: ['', 'qun', 3, ['fenghuo_lianshe'], []],
            fenghuo_jianshuo: ['male', 'qun', 5, ['fenghuo_huandang', 'neihuan_jibing', 'fenghuo_gongao'], []],
            fenghuo_jianshuo1: ['male', 'qun', 5, ['neihuan_jibing', 'fenghuo_gongao', 'fenghuo_huannan', 'fenghuo_chouyong', 'fenghuo_quanba'], []],
            fenghuo_caocao1: ['male', 'wei', 5, ['new_rejianxiong', 'fenghuo_zhixi', 'fenghuo_huannan', 'fenghuo_chouyong', 'fenghuo_quanba'], []],
            fenghuo_caocao: ['male', 'wei', 6, ['fenghuo_zhuangji', 'fenghuo_yuma', 'new_rejianxiong', 'hujia', 'fenghuo_fuzhe', 'fenghuo_mazhan'], ['zhu']],
            fenghuo_zhangwena: ['male', 'qun', 5, ['fenghuo_zhuangji', 'fenghuo_jingyong', 'fenghuo_shuwei', 'fenghuo_mazhan'], []],
            fenghuo_caozhang: ['male', 'wei', 5, ['fenghuo_zhuangji', 'xinjiangchi', 'fenghuo_mazhan'], []],
            fenghuo_guanxingzhangbao: ['male', 'shu', 5, ['fenghuo_zhuangji', 'fuhun', 'retongxin', 'fenghuo_mazhan'], []],
            fenghuo_xusheng: ['male', 'wu', 5, ['fenghuo_zhuangji', 'decadepojun', 'fenghuo_mazhan'], []],
            fenghuo_chengpu1: ['male', 'wu', 5, ['fenghuo_zhuangji', 'ollihuo', 'fenghuo_chunlaob', 'fenghuo_mazhan'], []],
            fenghuo_gaoshun: ['male', 'qun', 5, ['fenghuo_zhuangji', 'decadexianzhen', 'decadejinjiu', 'fenghuo_mazhan'], []],
            fenghuo_shenguanyu: ['male', 'shen', 5, ['fenghuo_zhuangji', 'fenghuo_yuma', 'fenghuo_wushen', 'new_wuhun', 'fenghuo_mazhan'], []],
            fenghuo_madai2: ['male', 'shu', 5, ['fenghuo_zhuangji', 'shanhe_mashu', 'reqianxi', 'fenghuo_mazhan'], []],
            fenghuo_caochun: ['male', 'wei', 5, ['fenghuo_zhuangji', 'xinshanjia', 'fenghuo_mazhan'], []],
            fenghuo_gongsunzan1: ['male', 'qun', 5, ['fenghuo_zhuangji', 'reyicong', 'dcqiaomeng', 'fenghuo_mazhan'], []],
            fenghuo_huangfusong: ['male', 'qun', 5, ['fenghuo_zhuangji', 'fenghuo_fenyue', 'fenghuo_shesheng', 'fenghuo_mazhan'], []],
            fenghuo_lvbu2: ['male', 'qun', 5, ['fenghuo_zhuangji', 'wushuang', 'new_liyu', 'fenghuo_mazhan'], []],
            fenghuo_guanyu1: ['male', 'shu', 5, ['fenghuo_zhuangji', 'new_rewusheng', 'new_yijue', 'fenghuo_mazhan'], []],
            fenghuo_machao1: ['male', 'shu', 5, ['fenghuo_zhuangji', 'shanhe_mashu', 'retieji', 'fenghuo_mazhan'], []],
            fenghuo_sunce1: ['male', 'wu', 5, ['fenghuo_zhuangji', 'fenghuo_yuma', 'jiang', 'hunzi', 'fenghuo_mazhan'], []],
            fenghuo_dongzhuo: ['male', 'qun', 6, ['shanhe_mashu', 'fenghuo_jiaoxie', 'jiuchi', 'roulin', 'benghuai', 'fenghuo_shanbi', 'fenghuo_linxia'], []],
            fenghuo_dongzhuo2: ['male', 'qun', 6, ['jiuchi', 'roulin', 'fenghuo_youyong', 'qqzj_baonue', 'fenghuo_lingruo'], []],
            fenghuo_xurong1: ['male', 'qun', 5, ['xinfu_xionghuo', 'xinfu_shajue', 'fenghuo_baonue', 'fenghuo_lingruo'], []],
            fenghuo_zuofeng1: ['male', 'qun', 5, ['fenghuo_suohui', 'fenghuo_jinchan', 'fenghuo_baonue', 'fenghuo_lingruo'], []],
            fenghuo_cenhun1: ['male', 'wu', 5, ['fenghuo_yingsi', 'fenghuo_baonue', 'fenghuo_lingruo'], []],
            fenghuo_sunhao1: ['male', 'wu', 5, ['recanshi', 'rechouhai', 'fenghuo_baonue', 'fenghuo_lingruo'], []],
            fenghuo_liuhong2: ['male', 'qun', 5, ['yujue', 'tuxing', 'fenghuo_baonue', 'fenghuo_lingruo'], []],
            fenghuo_gongsunyuan1: ['male', 'qun', 5, ['rehuaiyi', 'fenghuo_baonue', 'fenghuo_lingruo'], []],
            fenghuo_chengong: ['male', 'qun', 5, ['mingce', 'zhichi'], []],
            fenghuo_zhangrang1: ['male', 'qun', 5, ['taoluan', 'fenghuo_baonue', 'fenghuo_lingruo'], []],
            fenghuo_limin: ['male', 'qun', 5, ['fenghuo_shoupeng', 'fenghuo_baonue', 'fenghuo_lingruo'], []],
            fenghuo_caocao3: ['male', 'wei', 5, ['new_rejianxiong', 'fenghuo_baonue', 'fenghuo_lingruo'], []],
            fenghuo_panjun: ['male', 'qun', 3, ['fenghuo_niluan', 'fenghuo_baonue', 'fenghuo_lingruo'], []],
            fenghuo_lvboshe: ['male', 'qun', 3, ['fenghuo_shichoua'], []],
            fenghuo_dongzhuo3: ['male', 'qun', 10, ['jiuchi', 'roulin', 'benghuai', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_xurong: ['male', 'qun', 5, ['xinfu_xionghuo', 'xinfu_shajue', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_lijue1: ['male', 'qun', 5, ['wenhe_langxi', 'xinfu_yisuan', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_fanchou: ['male', 'qun', 5, ['wenhe_xinglang', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_diaochan2: ['female', 'qun', 5, ['lijian', 'rebiyue'], []],
            fenghuo_wangyun: ['male', 'qun', 5, ['dclianji', 'xinjingong', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_guosi: ['male', 'qun', 5, ['xinfu_sidao', 'xinfu_tanbei', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_zhangji: ['male', 'qun', 5, ['xinfu_lveming', 'xinfu_tunjun', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_longxiangjun: ['male', 'qun', 3, ['hulaoguan_longying', 'fenghuo_anfan'], []],
            fenghuo_hubenjun: ['male', 'qun', 3, ['hulaoguan_huying', 'fenghuo_anfan'], []],
            fenghuo_feixiongjun: ['male', 'qun', 3, ['hulaoguan_jingji', 'fenghuo_anfan'], []],
            fenghuo_tanlangjun: ['male', 'qun', 3, ['hulaoguan_ruiji', 'fenghuo_anfan'], []],
            fenghuo_longxiangjun1: ['male', 'qun', 5, ['hulaoguan_longying', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_hubenjun1: ['male', 'qun', 5, ['hulaoguan_huying', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_feixiongjun1: ['male', 'qun', 5, ['hulaoguan_jingji', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_tanlangjun1: ['male', 'qun', 5, ['hulaoguan_ruiji', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_baolvejun: ['male', 'qun', 5, ['hulaoguan_baoying', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_fengyaojun: ['female', 'qun', 5, ['hulaoguan_fengying', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_hanjun1: ['male', 'qun', 5, ['fenghuo_shuwei', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_wuhuanbing: ['male', 'qun', 5, ['fenghuo_lingluan', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_nvshicong1: ['female', 'qun', 3, ['fenghuo_shibi'], []],
            fenghuo_nvshicong2: ['female', 'qun', 3, ['shanhe_linglong'], []],
            fenghuo_nvshicong3: ['female', 'qun', 3, ['fenghuo_shibi'], []],
            fenghuo_nvshicong4: ['female', 'qun', 3, ['fenghuo_shibi'], []],
            fenghuo_moushi: ['male', 'qun', 3, ['fenghuo_pomou'], []],
            fenghuo_simayi: ['male', 'wei', 6, ['fankui', 'reguicai', 'fenghuo_youyong', 'fenghuo_yinmi'], []],
            fenghuo_guojia: ['male', 'wei', 5, ['tiandu', 'new_reyiji', 'fenghuo_yinmi'], []],
            fenghuo_jiaxu1: ['male', 'qun', 5, ['wansha', 'weimu', 'luanwu', 'fenghuo_yinmi'], []],
            fenghuo_wolongzhugeliang: ['male', 'shu', 5, ['huoji', 'bazhen', 'kanpo', 'fenghuo_yinmi'], []],
            fenghuo_zhouyu: ['male', 'wu', 5, ['reyingzi', 'refanjian', 'fenghuo_yinmi'], []],
            fenghuo_pangtong: ['male', 'shu', 5, ['lianhuan', 'niepan', 'fenghuo_yinmi'], []],
            fenghuo_lusu: ['male', 'wu', 5, ['haoshi', 'dimeng', 'fenghuo_yinmi'], []],
            fenghuo_luxun: ['male', 'wu', 5, ['reqianxun', 'relianying', 'fenghuo_yinmi'], []],
            fenghuo_xunyu: ['male', 'wei', 5, ['quhu', 'jieming', 'fenghuo_yinmi'], []],
            fenghuo_xugou: ['male', 'qun', 3, ['sx_xugou', 'fenghuo_yexing'], []],
            fenghuo_nianshouyin: ['female', 'qun', 3, ['NS_yinshou', 'NS_beimingyin', 'NS_huihun', 'fenghuo_yexing'], []],
            fenghuo_xingrima: ['male', 'qun', 3, ['zhongye_xingri', 'fenghuo_yexing'], []],
            fenghuo_kuimulang: ['male', 'qun', 3, ['zhongye_kuimu', 'fenghuo_yexing'], []],
            fenghuo_zhuque: ['female', 'qun', 3, ['fenghuo_fengpo', 'shidian_niepan', 'fenghuo_yexing'], []],
            fenghuo_qinglong: ['male', 'qun', 3, ['fenghuo_longzhen', 'fenghuo_longhou', 'fenghuo_yexing'], []],
            longzhou_taoshen: ['male', 'qun', 10, ['taoshen_nutao', 'shanhe_mashu', 'taoshen_yingzi', 'taoshen_longdan', 'taoshen_wushuang'], []],
            longzhou_caoe: ['female', 'qun', 8, ['caoe_shoujiang', 'shanhe_mashu', 'caoe_luoshen', 'caoe_biyue', 'caoe_guose'], []],
            longzhou_caoea: ['female', 'qun', 40, ['caoe_shoujianga', 'shanhe_mashu', 'caoe_luoshen', 'caoe_biyue', 'caoe_jizhi'], []],
            longzhou_taoshena: ['male', 'qun', 40, ['taoshen_nutaoa', 'shanhe_mashu', 'taoshen_xiongzi', 'taoshen_paoxiao', 'taoshen_wushuang'], []],
            LongZhou_taoshen: ['male', 'qun', 35, ['longzhou_xiongzi', 'taoshen_wushuang', 'longzhou_nutao', 'longzhou_lanjiang'], []],
            LongZhou_caoe: ['female', 'qun', 35, ['longzhou_luoshen', 'longzhou_shoujiang', 'longzhou_lanjiang', 'caoe_jizhi'], []],
            longzhou_zuogu: ['none', 'qun', 30, ['zuogu_jisheng', 'zuogu_zuogu'], []],
            longzhou_yougu: ['none', 'qun', 30, ['yougu_ousheng', 'yougu_yougu'], []],
            LongZhou_hebo: ['male', 'qun', 35, ['longzhou_zhangchuan', 'longzhou_xiaozi', 'longzhou_lanjiang', 'longzhou_zunqing'], []],
            LongZhou_yuershen: ['male', 'qun', 35, ['longzhou_wanshe', 'longzhou_lanjiang', 'longzhou_xuntan', 'longzhou_shanlin'], []],
            tianshu_hanba: ['female', 'shen', 16, ['sy_shenyi', 'hanba_fenshi', 'hanba_zhiri', 'hanba_xinji'], []],
            Tianshu_baiqi: ['male', 'qun', 25, ['Tianshu_wuan', 'Tianshu_shashen', 'tianshubaiqi_changsheng'], []],
            tianshu_baiqi: ['male', 'qun', 8, ['tianshubaiqi_wuan', 'tianshubaiqi_shashen', 'tianshubaiqi_changsheng'], []],
            tianshu_baiqia: ['male', 'shen', 11, ['tianshubaiqi_wuana', 'tianshubaiqi_shashena', 'tianshubaiqi_changsheng'], []],
            tianshu_kuafu: ['male', 'shen', 16, ['tianshukuafu_zhuri', 'tianshukuafu_yinjiang', 'tianshukuafu_lieben', 'tianshukuafu_shenqu'], []],
            Tianshu_kuafu: ['male', 'shen', 25, ['tianshukuafu_zhuria', 'tianshukuafu_yinjianga', 'tianshukuafu_lieben', 'Tianshu_shenqu'], []],
            Tianshu_kuafua: ['male', 'shen', 10, ['tianshukuafu_zhuria', 'tianshu_yinjiang', 'tianshu_lieben'], []],
            tianshu_kuafua: ['male', 'shen', 18, ['tianshukuafu_zhuria', 'tianshukuafu_yinjianga', 'tianshukuafu_lieben', 'tianshukuafu_shenqua'], []],
            fenghuo_zhangrang: ['male', 'qun', 6, ['fenghuo_huandang', 'zhangrang_luanzheng', 'zhangrang_yankong', 'fenghuo_youyong', 'fenghuo_yingsi'], []],
            fenghuo_zhaozhong: ['male', 'qun', 5, ['fenghuo_huandang', 'zhaozhong_duanzheng', 'zhaozhong_lianhuo'], []],
            fenghuo_chenkuang: ['male', 'qun', 5, ['fenghuo_huandang', 'neihuan_andu', 'neihuan_biri'], []],
            fenghuo_duangui: ['male', 'qun', 5, ['fenghuo_huandang', 'neihuan_suxi'], []],
            fenghuo_fengxu: ['male', 'qun', 5, ['fenghuo_huandang', 'neihuan_leixi', 'fenghuo_huangkong'], []],
            fenghuo_houlan: ['male', 'qun', 5, ['fenghuo_huandang', 'neihuan_jingshe'], []],
            fenghuo_xiayun: ['male', 'qun', 5, ['fenghuo_huandang', 'neihuan_jifu', 'fenghuo_chibi'], []],
            fenghuo_guosheng: ['male', 'qun', 5, ['fenghuo_huandang', 'neihuan_heimu'], []],
            fenghuo_caojie3: ['male', 'qun', 5, ['fenghuo_huandang', 'neihuan_huangbao'], []],
            fenghuo_cenhun: ['male', 'wu', 5, ['fenghuo_huandang', 'fenghuo_yingsi'], []],
            fenghuo_huanghao: ['male', 'shu', 5, ['fenghuo_huandang', 'fenghuo_nongquan'], []],
            fenghuo_zuofeng: ['male', 'qun', 5, ['fenghuo_huandang', 'fenghuo_suohui'], []],
            fenghuo_zhongyao: ['male', 'wei', 6, ['huomo', 'zuoding', 'fenghuo_pindi', 'fenghuo_youyong', 'fenghuo_mobao', 'fenghuo_yuanbi'], []],
            fenghuo_kongrong: ['male', 'qun', 5, ['lirang', 'fenghuo_yaoming', 'fenghuo_mobao'], []],
            fenghuo_caozhi: ['male', 'wei', 5, ['reluoying', 'jiushi', 'fenghuo_mobao'], []],
            fenghuo_chenlin: ['male', 'wei', 5, ['bifa', 'songci', 'fenghuo_mobao'], []],
            fenghuo_caiyong2: ['male', 'qun', 5, ['bizhuan', 'tongbo', 'fenghuo_mobao'], []],
            fenghuo_yangxiu1: ['male', 'wei', 5, ['jilei', 'danlao', 'fenghuo_mobao'], []],
            fenghuo_wangcan: ['male', 'qun', 5, ['xinfu_sanwen', 'xinfu_qiai', 'xinfu_denglou', 'fenghuo_mobao'], []],
            fenghuo_zhangzhaozhanghong1: ['male', 'wu', 5, ['zhijian', 'guzheng', 'fenghuo_mobao'], []],
            fenghuo_qinmi: ['male', 'shu', 5, ['jianzheng', 'zhuandui', 'tianbian', 'fenghuo_mobao'], []],
            fenghuo_xuezong: ['male', 'wu', 5, ['funan', 'jiexun', 'fenghuo_mobao'], []],
            fenghuo_zhugeliang2: ['male', 'shu', 5, ['shanhe_qicai', 'fenghuo_qiangzhi', 'fenghuo_mobao'], []],
            fenghuo_ruanyu: ['male', 'wei', 5, ['xingzuo', 'miaoxian', 'fenghuo_mobao'], []],
            fenghuo_caiwenji2: ['female', 'wei', 5, ['chenqing', 'mozhi', 'fenghuo_mobao'], []],
            fenghuo_caocao2: ['male', 'wei', 5, ['fenghuo_nengchen', 'new_guixin', 'fenghuo_mobao'], []],
            tianshu_xuannv: ['female', 'shen', 16, ['tianshuxuannv_dishi', 'tianshuxuannv_jiutian', 'tianshuxuannv_xuanliea', 'tianshuxuannv_shenqu'], []],
            tianshu_xuannva: ['female', 'shen', 18, ['tianshuxuannv_dishi', 'tianshuxuannv_jiutian', 'tianshuxuannv_xuanliea', 'tianshuxuannv_shenqua'], []],
            Tianshu_xuannv: ['female', 'shen', 25, ['tianshuxuannv_dishi', 'Tianshu_jiutian', 'tianshuxuannv_xuanlie'], []],
            Tianshu_xuannva: ['female', 'shen', 10, ['tianshuxuannv_dishi', 'Tianshu_jiutiana', 'tianshuxuannv_xuanliea'], []],
            TianShu_hanba: ['female', 'shen', 6, ['hanba_fenshi', 'Tianshu_zhiri'], []],
            TianShu_shaohao: ['male', 'shen', 6, ['tianshu_shenen', 'Tianshu_baiyib'], []],
            TianShu_xuannv: ['female', 'shen', 6, ['tianshuxuannv_dishi', 'Tianshu_jiutianb'], []],
            TianShu_kuafu: ['male', 'shen', 6, ['tianshukuafu_zhuria', 'tianshu_yinjiang', 'tianshu_lieben'], []],
            TianShu_shuishengonggong: ['male', 'shen', 6, ['sy_juehong', 'Tianshu_tuanliub'], []],
            tianshu_qinglong: ['male', 'shen', 6, ['sy_shenyi', 'qinglong_tengyun'], []],
            TianShu_huoshenzhurong: ['male', 'shen', 6, ['Tianshu_xingxiab', 'Tianshu_baoyana'], []],
            Tianshu_qinglong: ['male', 'shen', 12, ['sy_shenyi', 'Tianshu_tengyun'], []],
            Tianshu_qinglonga: ['male', 'shen', 12, ['sy_shenyi', 'Tianshu_tengyuna'], []],
            Tianshu_qinglongb: ['male', 'shen', 6, ['sy_shenyi', 'Tianshu_tengyunb'], []],
            tianshu_baihu: ['male', 'shen', 6, ['sy_shenyi', 'baihu_kuangxiao'], []],
            Tianshu_baihua: ['male', 'shen', 6, ['sy_shenyi', 'Tianshu_kuangxiaoa'], []],
            Tianshu_baihu: ['male', 'shen', 12, ['sy_shenyi', 'Tianshu_kuangxiao'], []],
            tianshu_zhuque: ['female', 'shen', 6, ['sy_shenyi', 'zhuque_fentian'], []],
            Tianshu_zhuqueb: ['female', 'shen', 6, ['sy_shenyi', 'Tianshu_fentianb'], []],
            Tianshu_zhuquea: ['female', 'shen', 12, ['sy_shenyi', 'Tianshu_fentiana'], []],
            Tianshu_zhuque: ['female', 'shen', 12, ['sy_shenyi', 'Tianshu_fentian'], []],
            tianshu_xuanwu: ['female', 'shen', 6, ['sy_shenyi', 'xuanwu_lingqu'], []],
            Tianshu_xuanwu: ['female', 'shen', 12, ['sy_shenyi', 'Tianshu_lingqu'], []],
            Tianshu_xuanwua: ['female', 'shen', 6, ['sy_shenyi', 'Tianshu_lingqu'], []],
            qqzj_caocao: ['male', 'wei', 30, ['new_rejianxiong', 'qqzj_lingba', 'qqzj_yishen'], []],
            qqzj_simayi: ['male', 'wei', 30, ['refankui', 'reguicai', 'qqzj_langgu', 'qqzj_yuanlv'], []],
            qqzj_lvbu: ['male', 'qun', 30, ['shanhe_mashu', 'wushuang', 'hulao_shenji', 'hulao_zhanjia'], []],
            qqzj_dongzhuo: ['male', 'qun', 30, ['jiuchi', 'roulin', 'qqzj_baonue', 'qqzj_yubu'], []],
            qqzj_zhangjiao: ['male', 'qun', 24, ['guidao', 'releiji', 'qqzj_jianzheng', 'qqzj_yinlei'], []],
            qqzj_yuanshu: ['male', 'qun', 30, ['drlt_yongsi', 'qqzj_wangzun', 'qqzj_duoxi'], []],
            fenghuo_shenzhouyu: ['male', 'shen', 5, ['qinyin', 'qunying_yehuo', 'fenghuo_nizhuan'], []],
            fenghuo_shixu: ['male', 'wei', 5, ['fenghuo_qinyin', 'shanhe_zhiyan', 'fenghuo_nizhuan'], []],
            fenghuo_zhoufei: ['female', 'wu', 5, ['liangyin', 'kongsheng', 'fenghuo_nizhuan'], []],
            fenghuo_miheng: ['male', 'qun', 5, ['rekuangcai', 'fenghuo_duxiu', 'fenghuo_nizhuan'], []],
            fenghuo_caiwenji: ['female', 'wei', 5, ['chenqing', 'mozhi', 'fenghuo_nizhuan'], []],
            fenghuo_caiwenji1: ['female', 'qun', 5, ['beige', 'shanhe_guose', 'fenghuo_nizhuan'], []],
            fenghuo_liuzan: ['male', 'wu', 5, ['refenyin', 'liji', 'fenghuo_nizhuan'], []],
            fenghuo_caiyong: ['male', 'qun', 5, ['bizhuan', 'tongbo', 'fenghuo_nizhuan'], []],
            fenghuo_zhugeliang: ['male', 'shu', 5, ['qunying_qixing', 'kongcheng', 'fenghuo_nizhuan'], []],
            fenghuo_tangji: ['female', 'qun', 5, ['kangge', 'jielie', 'fenghuo_nizhuan'], []],
            fenghuo_jikang: ['male', 'wei', 6, ['fenghuo_fenyin', 'fenghuo_miaoxian', 'fenghuo_kanggea', 'fenghuo_youyong', 'fenghuo_hexian', 'fenghuo_minxiang'], []],
            fenghuo_zuogu: ['', 'qun', 3, ['fenghuo_qunxiang', 'fenghuo_duyuan'], []],
            fenghuo_yougu: ['', 'qun', 3, ['fenghuo_qunxiang', 'fenghuo_duyuan'], []],
            fenghuo_huanguanshicong: ['male', 'qun', 3, ['neihuan_huanshi'], []],
            fenghuo_shicong: ['male', 'qun', 3, ['neihuan_huanshi', 'fenghuo_jinchan'], []],
            fenghuo_shushicong: ['male', 'shu', 3, ['neihuan_huanshi', 'fenghuo_jinchan'], []],
            fenghuo_wushicong: ['male', 'wu', 3, ['neihuan_huanshi', 'fenghuo_jinchan'], []],
            fenghuo_huzhao: ['male', 'qun', 5, ['fenghuo_huomo', 'fenghuo_yinshi', 'fenghuo_mobao'], []],
            fenghuo_jikang1: ['male', 'wei', 5, ['fenghuo_fenyin', 'fenghuo_kanggea', 'fenghuo_mobao'], []],
            fenghuo_caopi: ['male', 'wei', 5, ['xingshang', 'mitan_songwei', 'fenghuo_mobao'], []],
            fenghuo_huzhao1: ['male', 'qun', 5, ['fenghuo_huomo', 'fenghuo_yinshi', 'fenghuo_linmo'], []],
            fenghuo_xunxu: ['male', 'wei', 5, ['fenghuo_shenxing', 'fenghuo_feizhang', 'fenghuo_linmo'], []],
            fenghuo_shutong: ['male', 'qun', 3, ['fenghuo_shengzhu'], []],
            fenghuo_caobuxing: ['male', 'wu', 6, ['fenghuo_xingzuo', 'fenghuo_hualao', 'fenghuo_youyong', 'fenghuo_linmo'], []],
            fenghuo_zhaofuren: ['female', 'wu', 5, ['fenghuo_zhiren', 'shanhe_yise', 'fenghuo_linmo'], []],
            fenghuo_zhugezhan: ['male', 'shu', 5, ['xinfu_zuilun', 'xinfu_fuyin', 'fenghuo_linmo'], []],
            fenghuo_caomao1: ['male', 'wei', 5, ['mitan_wenhui', 'mitan_qintao', 'fenghuo_linmo'], []],
            fenghuo_yangxiu: ['male', 'wei', 5, ['jilei', 'danlao', 'fenghuo_linmo'], []],
            fenghuo_zhangfei: ['male', 'shu', 5, ['new_repaoxiao', 'new_tishen', 'fenghuo_linmo'], []],
            fenghuo_panfeng: ['male', 'qun', 6, ['xinkuangfu', 'fenghuo_yuma', 'fenghuo_youyong', 'fenghuo_mazhan', 'fenghuo_jingjue'], []],
            fenghuo_jiaozhenbing: ['male', 'qun', 3, ['fenghuo_tiaoxin'], []],
            fenghuo_daofushou: ['male', 'qun', 3, ['fenghuo_qiaoyong'], []],
            fenghuo_kongxiu: ['male', 'wei', 5, ['danji_shili', 'fenghuo_mazhan'], []],
            fenghuo_mengtan: ['male', 'wei', 5, ['shanhe_xili', 'fenghuo_mazhan'], []],
            fenghuo_hanfu: ['male', 'wei', 5, ['shanhe_xili', 'fenghuo_mazhan'], []],
            fenghuo_qinqi: ['male', 'wei', 5, ['fenghuo_shoujiang', 'fenghuo_mazhan'], []],
            fenghuo_caobao: ['male', 'qun', 5, ['fenghuo_panqin', 'fenghuo_mazhan'], []],
            fenghuo_xingdaorong: ['male', 'qun', 5, ['xuxie', 'shanhe_jieminga', 'fenghuo_mazhan'], []],
            fenghuo_xiahoujie: ['male', 'wei', 5, ['fenghuo_danshou', 'fenghuo_mazhan'], []],
            fenghuo_wuanguo: ['male', 'qun', 5, ['fenghuo_wumeng', 'fenghuo_mazhan'], []],
            fenghuo_chunyuqiong2: ['male', 'qun', 5, ['recangchu', 'reliangying', 'fenghuo_mazhan'], []],
            fenghuo_panzhangmazhong: ['male', 'wu', 5, ['reduodao', 'reanjian', 'fenghuo_mazhan'], []],
            fenghuo_caoxing: ['male', 'qun', 5, ['cxliushi', 'zhanwan', 'fenghuo_mazhan'], []],
            fenghuo_bianxi: ['male', 'wei', 5, ['fenghuo_fuzhu', 'fenghuo_mazhan'], []],
            fenghuo_wangzhi: ['male', 'wei', 5, ['danji_huoji', 'danji_zonghuo', 'fenghuo_mazhan'], []],
            fenghuo_dailaidongzhu: ['male', 'shu', 5, ['fenghuo_zhanxiang', 'fenghuo_manchuang', 'fenghuo_manxi', 'fenghuo_nanman'], []],
            fenghuo_dongtuna: ['male', 'shu', 5, ['fenghuo_gudao', 'fenghuo_manchuang', 'fenghuo_manxi', 'fenghuo_nanman'], []],
            fenghuo_jinhuansanjie: ['male', 'shu', 5, ['fenghuo_manrou', 'fenghuo_manji', 'fenghuo_manchuang', 'fenghuo_manxi', 'fenghuo_nanman'], []],
            fenghuo_shamoke: ['male', 'shu', 5, ['gzjili', 'fenghuo_manchuang', 'fenghuo_manxi', 'fenghuo_nanman'], []],
            fenghuo_mangyachang: ['male', 'qun', 5, ['spjiedao', 'fenghuo_manchuang', 'fenghuo_manxi', 'fenghuo_nanman'], []],
            fenghuo_wutugu: ['male', 'qun', 16, ['ranshang', 'hanyong', 'fenghuo_manchuang', 'fenghuo_manxi', 'fenghuo_nanman'], []],
            fenghuo_mengyou: ['male', 'shu', 5, ['fenghuo_mansi', 'fenghuo_manchuang', 'fenghuo_manxi', 'fenghuo_nanman'], []],
            fenghuo_yongshi: ['male', 'qun', 5, ['fenghuo_manyi', 'fenghuo_manlve', 'fenghuo_nanman'], []],
            fenghuo_touling: ['male', 'qun', 3, ['fenghuo_manyi', 'fenghuo_manlve', 'fenghuo_manji', 'fenghuo_nanman'], []],
            fenghuo_duosidawang: ['male', 'shu', 5, ['fenghuo_huangbao', 'fenghuo_manchuang', 'fenghuo_manxi', 'fenghuo_nanman'], []],
            fenghuo_ahuinan: ['male', 'shu', 5, ['fenghuo_manjin', 'fenghuo_manchuang', 'fenghuo_manxi', 'fenghuo_nanman'], []],
            fenghuo_huaman: ['female', 'shu', 6, ['manyi', 'mansi', 'souying', 'fenghuo_youyong', 'fenghuo_manchuang', 'fenghuo_manxi', 'fenghuo_nanman', 'fenghuo_juao'], []],
            shidian_qinguangwang: ['male', 'qun', 3, ['shidian_panguan', 'shidian_juhun', 'shidian_wangxiang'], []],
            shidian_chujiangwang: ['male', 'qun', 4, ['shidian_weimu', 'shidian_fankui', 'shidian_bingfen'], []],
            shidian_songdiwang: ['male', 'qun', 4, ['shidian_heisheng', 'shidian_shengfu', 'shidian_enyuan'], []],
            shidian_wuguanwang: ['male', 'qun', 4, ['shidian_zhiwang', 'shidian_gongzheng', 'shidian_xuechi'], []],
            shidian_yanluowang: ['male', 'qun', 4, ['shidian_tiemian', 'shidian_zhadao', 'shidian_zhuxin'], []],
            shidian_bianchengwang: ['male', 'qun', 5, ['shidian_leizhou', 'shidian_leifu', 'shidian_leizhu'], []],
            shidian_taishanwang: ['male', 'qun', 5, ['shidian_fudu', 'shidian_kujiu', 'shidian_renao'], []],
            shidian_dushiwang: ['male', 'qun', 5, ['shidian_remen', 'shidian_zhifen', 'shidian_huoxing'], []],
            shidian_pingdengwang: ['male', 'qun', 5, ['shidian_suozu', 'shidian_abi', 'shidian_pingdeng'], []],
            shidian_zhuanlunwang: ['male', 'qun', 6, ['shidian_modao', 'shidian_lunhui', 'shidian_wangsheng', 'shidian_fanshi'], []],
            shidian_mengpo: ['female', 'qun', 3, ['shidian_shiyou', 'shidian_wanghun', 'shidian_wangshi'], []],
            shidian_dizangwang: ['male', 'qun', 8, ['shidian_bufo', 'shidian_wuliang', 'shidian_dayuan', 'shidian_diting'], []],
            shidian_chi: ['male', 'qun', 2, ['shidian_panguan', 'shidian_didong'], []],
            shidian_mei: ['female', 'qun', 2, ['shidian_panguan', 'shanhe_enyuan'], []],
            shidian_wang: ['male', 'qun', 2, ['shidian_panguan', 'shidian_huilei'], []],
            shidian_liang: ['female', 'qun', 2, ['shidian_panguan', 'shidian_beiming'], []],
            shidian_heiwuchang: ['male', 'qun', 2, ['shidian_guiji', 'shidian_xiaoshou'], []],
            shidian_baiwuchang: ['male', 'qun', 2, ['shidian_baolian', 'shidian_zuijiu'], []],
            shidian_niutou: ['male', 'qun', 2, ['shidian_baolian', 'shidian_manjia'], []],
            shidian_mamian: ['male', 'qun', 2, ['shidian_guiji', 'shidian_lianyu'], []],
            shidian_yecha: ['male', 'qun', 3, ['shanhe_modao', 'jiange_mojian'], []],
            shidian_luocha: ['female', 'qun', 3, ['shanhe_modao', 'shidian_yushou'], []],
            qugui_chi: ['male', 'qun', 3, ['shidian_guimei', 'shidian_didong', 'shidian_shanbeng'], []],
            qugui_mei: ['female', 'qun', 3, ['shidian_guimei', 'shanhe_enyuan', 'shidian_beiming'], []],
            qugui_wang: ['male', 'qun', 3, ['shidian_guimei', 'shidian_luolei', 'shidian_huilei'], []],
            qugui_liang: ['female', 'qun', 3, ['shidian_guimei', 'shidian_guihuo', 'shidian_mingbao'], []],
            qugui_heiwuchang: ['male', 'qun', 5, ['shidian_guiji', 'shidian_suoming', 'shidian_xixing'], []],
            qugui_baiwuchang: ['male', 'qun', 5, ['shidian_baolian', 'shidian_qiangzheng', 'shidian_zuijiu'], []],
            qugui_niutou: ['male', 'qun', 5, ['shidian_baolian', 'shidian_manjia', 'shidian_xiaoshou'], []],
            qugui_mamian: ['male', 'qun', 4, ['shidian_guiji', 'shanhe_fankui', 'shidian_lianyu'], []],
            qugui_yecha: ['male', 'qun', 6, ['shidian_modao', 'jiange_mojian', 'shidian_danshu'], []],
            qugui_luocha: ['female', 'qun', 6, ['shidian_modao', 'shidian_yushou', 'shidian_moyan'], []],
            QuGui_chi: ['male', 'qun', 5, ['shidian_guimei', 'shidian_didong', 'shidian_shanbeng'], []],
            QuGui_mei: ['female', 'qun', 5, ['shidian_guimei', 'shanhe_enyuan', 'shidian_beiming'], []],
            QuGui_wang: ['male', 'qun', 5, ['shidian_guimei', 'shidian_luolei', 'shidian_huilei'], []],
            QuGui_liang: ['female', 'qun', 5, ['shidian_guimei', 'shidian_guihuo', 'shidian_mingbao'], []],
            QuGui_heiwuchang: ['male', 'qun', 9, ['shidian_guiji', 'shidian_taiping', 'shidian_suoming', 'shidian_xixing'], []],
            QuGui_baiwuchang: ['male', 'qun', 9, ['shidian_baoliana', 'shidian_qiangzheng', 'shidian_zuijiu', 'shidian_juece'], []],
            QuGui_niutou: ['male', 'qun', 7, ['shidian_baoliana', 'shidian_niepan', 'shidian_manjia', 'shidian_xiaoshou'], []],
            QuGui_mamian: ['male', 'qun', 6, ['shidian_guiji', 'shanhe_fankui', 'shidian_lianyu', 'shidian_juece'], []],
            QuGui_yecha: ['male', 'qun', 11, ['shidian_modao', 'jiange_mojian', 'jiange_bazhen', 'shidian_danshu'], []],
            QuGui_luocha: ['female', 'qun', 12, ['shidian_modao', 'shidian_yushou', 'jiange_yizhong', 'shidian_moyana'], []],
            shanhai_chi: ['male', 'qun', 2, ['shanhai_guimei', 'shanhe_junxing'], []],
            shanhai_mei: ['female', 'qun', 2, ['shanhai_guimei', 'shanhe_enyuan'], []],
            shanhai_wang: ['male', 'qun', 2, ['shanhai_guimei', 'shanhai_tuxi'], []],
            shanhai_liang: ['female', 'qun', 2, ['shanhai_guimei', 'shanhe_qiangxi'], []],
            shanhai_baiwuchang: ['male', 'qun', 4, ['shanhai_guimei', 'shidian_modao', 'shidian_zuijiu', 'shanhe_shensua'], []],
            shanhai_heiwuchang: ['male', 'qun', 4, ['shanhai_guimei', 'shanhe_wushuang', 'jiange_leili', 'shanhe_kuanggu'], []],
            shanhai_niutou: ['male', 'qun', 3, ['shanhai_guimei', 'shanhe_mingzhe', 'shanhe_xiangle'], []],
            shanhai_mamian: ['male', 'qun', 3, ['shanhai_guimei', 'shanhe_juece', 'shanhai_xiansi'], []],
            shanhai_yecha: ['male', 'qun', 4, ['shanhai_guimei', 'jiange_mojian', 'shidian_danshu', 'shanhe_yingzia'], []],
            shanhai_luocha: ['female', 'qun', 4, ['shanhai_guimei', 'shidian_yushou', 'shanhe_gangliea', 'shanhe_biyuea'], []],
            shanhai_qiongqi: ['male', 'qun', 3, ['shanhai_xiemei', 'shanhe_tuxi'], []],
            shanhai_hundun: ['male', 'qun', 3, ['shanhai_xiemei', 'shidian_guihuo'], []],
            shanhai_taowu: ['male', 'qun', 4, ['shanhai_xiemei', 'shanhai_shehun', 'shanhai_lingsi'], []],
            shanhai_taotie: ['male', 'qun', 4, ['shanhai_xiemei', 'shanhai_taoyuan', 'shanhai_duoling'], []],
            shanhai_zhuyin: ['male', 'qun', 7, ['shanhe_jushou', 'shanhai_jingxin', 'shanhai_zhiyi', 'shanhai_yazi'], []],
            Kuiba_youmikuanga: ['male', 'qun', 5, ['Kuiba_sanjiana', 'Kuiba_baizhan', 'Kuiba_yiyou'], []],
            Kuiba_youmikuangb: ['male', 'qun', 8, ['Kuiba_wuyaoa', 'Kuiba_sanjiana', 'Kuiba_baizhan', 'Kuiba_yiyou'], []],
            Kuiba_youmikuangc: ['male', 'qun', 12, ['Kuiba_wuyao', 'Kuiba_sanjian', 'Kuiba_baizhan', 'Kuiba_yiyou'], []],
            Kuiba_haiwenxianga: ['female', 'qun', 4, ['Kuiba_jinghong', 'Kuiba_wenjia', 'Kuiba_huanguangb'], []],
            Kuiba_haiwenxiangb: ['female', 'qun', 7, ['Kuiba_linyaoa', 'Kuiba_jinghong', 'Kuiba_wenjia', 'Kuiba_huanguanga'], []],
            Kuiba_haiwenxiangc: ['female', 'qun', 10, ['Kuiba_linyao', 'Kuiba_jinghong', 'Kuiba_wenjia', 'Kuiba_huanguang'], []],
            Kuiba_kalaxiaokepana: ['male', 'qun', 5, ['Kuiba_wangjiana', 'Kuiba_tianyi', 'Kuiba_tianbian'], []],
            Kuiba_kalaxiaokepanb: ['male', 'qun', 8, ['Kuiba_wangjiana', 'Kuiba_tianyi', 'Kuiba_zhuandui', 'Kuiba_tianbian'], []],
            Kuiba_kalaxiaokepanc: ['male', 'qun', 12, ['Kuiba_wangjian', 'Kuiba_tianyi', 'Kuiba_zhuandui', 'Kuiba_tianbian'], []],
            Kuiba_youmikuang1: ['male', 'qun', 5, ['Kuiba_sanjiana', 'Kuiba_baizhan'], []],
            Kuiba_youmikuang2: ['male', 'qun', 8, ['Kuiba_wuyaoa', 'Kuiba_sanjiana', 'Kuiba_baizhan'], []],
            Kuiba_youmikuang3: ['male', 'qun', 12, ['Kuiba_wuyao', 'Kuiba_sanjian', 'Kuiba_baizhan'], []],
            Kuiba_haiwenxiang1: ['female', 'qun', 5, ['Kuiba_jinghong', 'Kuiba_wenjia'], []],
            Kuiba_haiwenxiang2: ['female', 'qun', 8, ['Kuiba_linyaoa', 'Kuiba_jinghong', 'Kuiba_wenjia'], []],
            Kuiba_haiwenxiang3: ['female', 'qun', 12, ['Kuiba_linyao', 'Kuiba_jinghong', 'Kuiba_wenjia'], []],
            Kuiba_kalaxiaokepan1: ['male', 'qun', 5, ['Kuiba_wangjiana', 'Kuiba_tianyi'], []],
            Kuiba_kalaxiaokepan2: ['male', 'qun', 8, ['Kuiba_wangjiana', 'Kuiba_tianyi', 'Kuiba_zhuandui'], []],
            Kuiba_kalaxiaokepan3: ['male', 'qun', 12, ['Kuiba_wangjian', 'Kuiba_tianyi', 'Kuiba_zhuandui'], []],
            Kuiba_manjia: ['male', 'qun', 15, ['Kuiba_julia', 'Kuiba_Kuiba'], []],
            Kuiba_manjib: ['male', 'qun', 24, ['Kuiba_kuiqua', 'Kuiba_julia', 'Kuiba_Kuiba'], []],
            Kuiba_manjic: ['male', 'qun', 36, ['Kuiba_kuiqu', 'Kuiba_juli', 'Kuiba_Kuiba'], []],
            Kuiba_manji1: ['male', 'qun', 5, ['Kuiba_bachong', 'Kuiba_qiheng'], []],
            Kuiba_manji2: ['male', 'qun', 8, ['Kuiba_kuitia', 'Kuiba_bachong', 'Kuiba_qiheng'], []],
            Kuiba_manji3: ['male', 'qun', 12, ['Kuiba_kuiti', 'Kuiba_bachong', 'Kuiba_qiheng'], []],
            Kuiba_jingxin1: ['female', 'qun', 5, ['Kuiba_guangshia', 'Kuiba_guangmiea'], []],
            Kuiba_jingxin2: ['female', 'qun', 8, ['Kuiba_tianshen', 'Kuiba_guangshia', 'Kuiba_guangmiea'], []],
            Kuiba_jingxin3: ['female', 'qun', 12, ['Kuiba_tianshen', 'Kuiba_guangshi', 'Kuiba_guangmie'], []],
            Kuiba_lingshoujun1: ['male', 'qun', 4, ['Kuiba_lingshoub'], []],
            Kuiba_lingzhanjun1: ['male', 'qun', 3, ['Kuiba_lingzhana'], []],
            Kuiba_lingxunjun1: ['male', 'qun', 3, ['Kuiba_lingxuna'], []],
            Kuiba_lingluanjun1: ['male', 'qun', 3, ['Kuiba_lingluanb'], []],
            Kuiba_shengdoujun1: ['male', 'qun', 3, ['Kuiba_shengdoua'], []],
            Kuiba_shenghujun1: ['male', 'qun', 4, ['Kuiba_shenghub'], []],
            Kuiba_shengjiejun1: ['male', 'qun', 3, ['Kuiba_shengjiea'], []],
            Kuiba_shengzhujun1: ['male', 'qun', 3, ['Kuiba_shengzhua'], []],
            Kuiba_lingshoujun3: ['male', 'qun', 8, ['Kuiba_lingshan', 'Kuiba_lingshou'], []],
            Kuiba_lingzhanjun3: ['male', 'qun', 7, ['Kuiba_lingshan', 'Kuiba_lingzhan'], []],
            Kuiba_lingxunjun3: ['male', 'qun', 7, ['Kuiba_lingshan', 'Kuiba_lingxun'], []],
            Kuiba_lingluanjun3: ['male', 'qun', 7, ['Kuiba_lingshan', 'Kuiba_lingluan'], []],
            Kuiba_shengdoujun3: ['male', 'qun', 7, ['Kuiba_shengmeng', 'Kuiba_shengdou'], []],
            Kuiba_shenghujun3: ['male', 'qun', 8, ['Kuiba_shengmeng', 'Kuiba_shenghu'], []],
            Kuiba_shengjiejun3: ['male', 'qun', 7, ['Kuiba_shengmeng', 'Kuiba_shengjie'], []],
            Kuiba_shengzhujun3: ['male', 'qun', 7, ['Kuiba_shengmeng', 'Kuiba_shengzhu'], []],
            Kuiba_lingshoujun2: ['male', 'qun', 6, ['Kuiba_lingshana', 'Kuiba_lingshoua'], []],
            Kuiba_lingzhanjun2: ['male', 'qun', 5, ['Kuiba_lingshana', 'Kuiba_lingzhana'], []],
            Kuiba_lingxunjun2: ['male', 'qun', 5, ['Kuiba_lingshana', 'Kuiba_lingxuna'], []],
            Kuiba_lingluanjun2: ['male', 'qun', 5, ['Kuiba_lingshana', 'Kuiba_lingluana'], []],
            Kuiba_shengdoujun2: ['male', 'qun', 5, ['Kuiba_shengmenga', 'Kuiba_shengdoua'], []],
            Kuiba_shenghujun2: ['male', 'qun', 6, ['Kuiba_shengmenga', 'Kuiba_shenghua'], []],
            Kuiba_shengjiejun2: ['male', 'qun', 5, ['Kuiba_shengmenga', 'Kuiba_shengjiea'], []],
            Kuiba_shengzhujun2: ['male', 'qun', 5, ['Kuiba_shengmenga', 'Kuiba_shengzhua'], []],
            qugui2_yanluowang3: ['male', 'qun', 18, ['qugui2_tiemian', 'qugui2_difu', 'qugui2_zhennu', 'qugui2_xingpan', 'qugui2_dianwei', 'qugui2_xuanpan'], []],
            Tianshu_yanluowang1: ['male', 'qun', 6, ['qugui2_dianwei', 'qugui2_xingpan', 'Tianshu_zhennu', 'qugui2_xuanpan'], []],
            Tianshu_yanluowang2: ['male', 'qun', 12, ['qugui2_dianwei', 'qugui2_xingpan', 'Tianshu_zhennu', 'qugui2_xuanpan'], []],
            qugui2_yanluowang1: ['male', 'qun', 12, ['qugui2_tiemian', 'qugui2_difu', 'qugui2_xingpan', 'qugui2_guimei'], []],
            qugui2_yanluowang2: ['male', 'qun', 12, ['qugui2_tiemian', 'qugui2_difu', 'yanluo_zhennu', 'qugui2_xingpan', 'qugui2_guimei'], []],
            fenghuo_nanhualaoxian: ['male', 'qun', 6, ['gongxiu', 'jinghe', 'fenghuo_youyong', 'fenghuo_xianti', 'fenghuo_tiebi'], []],
            fenghuo_shushi: ['male', 'qun', 3, ['fenghuo_guaming'], []],
            fenghuo_shushi1: ['male', 'qun', 12, ['fenghuo_guaming'], []],
            fenghuo_hubaoqi: ['male', 'qun', 12, ['fenghuo_shanji'], []],
            fenghuo_heishanjun: ['male', 'qun', 12, ['fenghuo_qiangshu'], []],
            fenghuo_yuren1: ['female', 'qun', 12, ['fenghuo_luanlv'], []],
            fenghuo_cike1: ['male', 'qun', 12, ['mitan_yinci'], []],
            fenghuo_fengyaojun1: ['female', 'qun', 12, ['fenghuo_xumei'], []],
            fenghuo_xinniangzi1: ['female', 'qun', 12, ['fenghuo_tongming'], []],
            fenghuo_huangjinzhanji1: ['female', 'qun', 12, ['fenghuo_baxi'], []],
            fenghuo_zhitong: ['male', 'qun', 12, ['fenghuo_wuji'], []],
            fenghuo_langqibing: ['male', 'qun', 12, ['fenghuo_chongfeng'], []],
            fenghuo_baimayicong: ['male', 'qun', 12, ['fenghuo_yicong'], []],
            fenghuo_xinniangzi: ['female', 'qun', 3, ['fenghuo_chuchu'], []],
            fenghuo_zhujianping: ['male', 'qun', 5, ['fenghuo_xiongzi', 'fenghuo_tuiyan', 'fenghuo_tiebi'], []],
            fenghuo_zhangdaoling: ['male', 'qun', 5, ['fenghuo_midao', 'fenghuo_yishe', 'fenghuo_shenhuo', 'fenghuo_tiebi'], []],
            Tianshu_riyeyoushen1: ['male', 'qun', 6, ['qugui2_zhoucha', 'Tianshu_yezhonga', 'qugui2_huiyun'], []],
            Tianshu_riyeyoushen2: ['male', 'qun', 12, ['Tianshu_zhoucha', 'Tianshu_yezhong', 'qugui2_huiyun', 'qugui2_duane'], []],
            qugui2_riyeyoushen3: ['male', 'qun', 10, ['qugui2_zhoucha', 'qugui2_yezhong', 'qugui2_huiyun', 'qugui2_duane'], []],
            qugui2_riyeyoushen2: ['male', 'qun', 8, ['qugui2_zhoucha', 'qugui2_yezhong', 'qugui2_huiyun'], []],
            qugui2_riyeyoushen1: ['male', 'qun', 6, ['qugui2_zhoucha', 'qugui2_yezhong'], []],
            Tianshu_niutoumamian1: ['male', 'qun', 6, ['Tianshu_xiaoshoua', 'qugui2_manji', 'qugui2_shiyv'], []],
            Tianshu_niutoumamian2: ['male', 'qun', 12, ['Tianshu_xiaoshou', 'qugui2_manji', 'qugui2_shiyv', 'qugui2_guizhao'], []],
            qugui2_niutoumamian3: ['male', 'qun', 12, ['qugui2_xiaoshou', 'qugui2_manji', 'qugui2_shiyv', 'qugui2_guizhao'], []],
            qugui2_niutoumamian1: ['male', 'qun', 4, ['qugui2_xiaoshoua', 'qugui2_manjia', 'qugui2_shiyv'], []],
            qugui2_niutoumamian2: ['male', 'qun', 8, ['qugui2_xiaoshouc', 'qugui2_manji', 'qugui2_shiyv', 'qugui2_guizhao'], []],
            qugui2_heibaiwuchang1: ['male', 'qun', 4, ['qugui2_xixinga', 'qugui2_taipinga', 'qugui2_mizuia'], []],
            qugui2_heibaiwuchang2: ['male', 'qun', 8, ['qugui2_xixingc', 'qugui2_taipinga', 'qugui2_mizui', 'qugui2_qiangzhenga'], []],
            qugui2_heibaiwuchang3: ['male', 'qun', 12, ['qugui2_xixing', 'qugui2_taiping', 'qugui2_mizui', 'qugui2_qiangzheng'], []],
            Tianshu_heibaiwuchang: ['male', 'qun', 6, ['qugui2_xixingc', 'qugui2_qiangzhenga', 'qugui2_mizui'], []],
            fenghuo_beimihu: ['female', 'qun', 6, ['zongkui', 'guju', 'baijia', 'fenghuo_youyong', 'fenghuo_bihu', 'fenghuo_taiping'], []],
            fenghuo_gongsunyuan: ['male', 'qun', 5, ['rehuaiyi', 'fenghuo_bihu'], []],
            fenghuo_weiwenzhugezhi: ['male', 'wu', 5, ['xinfu_fuhai', 'fenghuo_bihu'], []],
            fenghuo_zhanggong: ['male', 'wei', 5, ['xinfu_qianxin', 'xinfu_zhenxing', 'fenghuo_bihu'], []],
            fenghuo_zhanglu: ['male', 'qun', 5, ['yishe', 'bushi', 'midao', 'fenghuo_bihu'], []],
            fenghuo_liuyan: ['male', 'qun', 5, ['xinfu_tushe', 'xinfu_limu', 'fenghuo_bihu'], []],
            fenghuo_lvkai: ['male', 'shu', 5, ['xinfu_tunan', 'xinfu_bijing', 'fenghuo_bihu'], []], //QQQ
            fenghuo_zhangqiying1: ['female', 'qun', 5, ['xinfu_falu', 'xinfu_dianhua', 'xinfu_zhenyi', 'fenghuo_bihu'], []],
            fenghuo_zhangxiu: ['male', 'qun', 5, ['drlt_xiongluan', 'drlt_congjian', 'fenghuo_bihu'], []],
            fenghuo_hucheer: ['male', 'qun', 5, ['redaoji', 'fuzhong', 'fenghuo_bihu'], []],
            fenghuo_beimihu1: ['female', 'qun', 5, ['zongkui', 'guju', 'baijia', 'fenghuo_tiebi'], []],
            fenghuo_yuji: ['male', 'qun', 5, ['qunying_yaohuo', 'fenghuo_tiebi'], []],
            fenghuo_yuji1: ['male', 'qun', 5, ['qunying_yaohuo', 'fenghuo_yizhuang'], []],
            fenghuo_jimin: ['male', 'qun', 3, ['fenghuo_lveliang'], []],
            fenghuo_jimin1: ['male', 'qun', 3, ['fenghuo_zhixi', 'fenghuo_yinhu'], []],
            fenghuo_yuren: ['female', 'qun', 3, ['fenghuo_luanlv'], []],
            fenghuo_shuijun: ['male', 'wu', 3, ['fenghuo_canglang', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_shutanzi: ['male', 'shu', 3, ['fenghuo_yinni', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_zhaoxiang: ['female', 'shu', 6, ['refanghun', 'refuhan', 'fenghuo_youyong', 'fenghuo_bingying', 'fenghuo_sizhen'], []],
            fenghuo_huangjinbing1: ['male', 'qun', 5, ['fenghuo_baodong', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_qingzhoubing: ['male', 'qun', 5, ['fenghuo_shengzhu', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_xuzhoujun: ['male', 'qun', 5, ['fenghuo_sanjian', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_shuijun1: ['male', 'qun', 5, ['fenghuo_nutao', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_zhenchabing: ['male', 'qun', 5, ['fenghuo_wuyao', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_yangzhoujun: ['male', 'qun', 5, ['fenghuo_lingxun', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_danyangbing: ['male', 'qun', 5, ['fenghuo_lingzhan', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_tengjiabing: ['male', 'qun', 5, ['fenghuo_lingshou', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_qinweibing: ['male', 'qun', 5, ['fenghuo_wangjian', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_yulinjun1: ['male', 'qun', 3, ['fenghuo_jinwei'], []],
            fenghuo_qiangbingxuetu: ['male', 'qun', 3, ['fenghuo_qiangshua', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            fenghuo_yulinjun: ['male', 'qun', 5, ['fenghuo_jinwei', 'fenghuo_youyong', 'fenghuo_sizhen'], []],
            qugui2_baiwuchang: ['male', 'qun', 7, ['qugui2_baolian', 'qugui2_qiangzhengb', 'qugui2_mizuib', 'qugui2_guimei'], []],
            qugui2_heiwuchang: ['male', 'qun', 4, ['qugui2_xixingb', 'qugui2_taipingb', 'qugui2_duanhun', 'qugui2_guimei'], []],
            Tianshu_mengpo1: ['female', 'qun', 6, ['qugui2_aotang', 'Tianshu_yunjva'], []],
            Tianshu_mengpo2: ['female', 'qun', 12, ['qugui2_aotang', 'Tianshu_yunjv', 'qugui2_guimeib'], []],
            qugui2_mengpo: ['female', 'qun', 8, ['qugui2_aotang', 'qugui2_yunjv', 'qugui2_guimeib'], []],
            qugui2_mengpo1: ['female', 'qun', 5, ['qugui2_aotang', 'qugui2_yunjva'], []],
            qugui2_mengpo2: ['female', 'qun', 8, ['qugui2_aotang', 'qugui2_yunjva', 'qugui2_guimeib'], []],
            qugui2_mengpo3: ['female', 'qun', 12, ['qugui2_aotang', 'qugui2_yunjva', 'qugui2_guimeib'], []],
            fenghuo_huangzhong: ['male', 'shu', 6, ['xinliegong', 'fenghuo_gongjian', 'fenghuo_youyong', 'fenghuo_yizhuang'], []],
            fenghuo_tongyuan1: ['male', 'qun', 5, ['chaofeng', 'chuanshu', 'fenghuo_yizhuang'], []],
            fenghuo_wangyun1: ['male', 'qun', 5, ['dclianji', 'xinjingong', 'fenghuo_yizhuang'], []],
            fenghuo_huatuo1: ['male', 'qun', 5, ['jijiu', 'qingnang', 'fenghuo_yizhuang'], []],
            fenghuo_zuoci: ['male', 'qun', 5, ['huashen', 'xinsheng', 'fenghuo_yizhuang'], []],
            fenghuo_huangfusong1: ['male', 'qun', 5, ['fenghuo_fenyue', 'fenghuo_yizhuang'], []],
            fenghuo_hansui1: ['male', 'qun', 5, ['spniluan', 'spweiwu', 'fenghuo_yizhuang'], []],
            fenghuo_caiyong1: ['male', 'qun', 5, ['rebizhuan', 'retongbo', 'fenghuo_yizhuang'], []],
            fenghuo_chengyu: ['male', 'wei', 5, ['benyu', 'shanhe_jieminga', 'fenghuo_yizhuang'], []],
            fenghuo_zhongyao2: ['male', 'wei', 5, ['huomo', 'zuoding', 'fenghuo_yizhuang'], []],
            fenghuo_nanhualaoxian1: ['male', 'qun', 5, ['gongxiu', 'jinghe', 'fenghuo_yizhuang'], []],
            fenghuo_lvdai: ['male', 'wu', 5, ['xinfu_qinguo', 'fenghuo_yizhuang'], []],
            fenghuo_yanyan: ['male', 'shu', 5, ['nzry_juzhan', 'fenghuo_pozhan', 'fenghuo_yizhuang'], []],
            fenghuo_liaohua: ['male', 'shu', 5, ['xindangxian', 'xinfuli', 'fenghuo_yizhuang'], []],
            fenghuo_luzhi: ['male', 'qun', 5, ['nzry_mingren', 'nzry_zhenliang', 'fenghuo_yizhuang'], []],
            fenghuo_chengpu: ['male', 'wu', 5, ['ollihuo', 'fenghuo_chunlaob', 'fenghuo_yizhuang'], []],
            fenghuo_wanglang: ['male', 'wei', 5, ['regushe', 'rejici', 'fenghuo_yizhuang'], []],
            fenghuo_gexuan: ['male', 'wu', 5, ['gxlianhua', 'zhafu', 'fenghuo_yizhuang'], []],
            fenghuo_zhangzhaozhanghong: ['male', 'wu', 5, ['zhijian', 'guzheng', 'fenghuo_yizhuang'], []],
            fenghuo_simahui: ['male', 'qun', 5, ['jianjie', 'xinfu_chenghao', 'xinfu_yinshi', 'fenghuo_yizhuang'], []],
            fenghuo_taoqian: ['male', 'qun', 5, ['zhaohuo', 'reyixiang', 'reyirang', 'fenghuo_yizhuang'], []],
            fenghuo_taoqian1: ['male', 'qun', 5, ['zhaohuo', 'reyixiang', 'reyirang', 'fenghuo_yinhu'], []],
            fenghuo_caocao5: ['male', 'wei', 5, ['new_rejianxiong', 'fenghuo_yinhu'], []],
            fenghuo_yanyan1: ['male', 'shu', 5, ['nzry_juzhan', 'fenghuo_pozhan', 'fenghuo_yinhu'], []],
            fenghuo_liushan2: ['male', 'shu', 5, ['xiangle', 'fangquan', 'fenghuo_yinhu'], []],
            fenghuo_baixing: ['male', 'qun', 3, ['fenghuo_chuhe', 'fenghuo_yinhu'], []],
            fenghuo_xiaoli: ['male', 'wei', 3, ['fenghuo_weili', 'fenghuo_yinhu'], []],
            fenghuo_kaoshanfu: ['female', 'qun', 3, ['fenghuo_jiedao', 'fenghuo_yinhu'], []],
            fenghuo_zhangfei1: ['male', 'shu', 5, ['new_repaoxiao', 'fenghuo_zhanyong', 'fenghuo_yinhu'], []],
            fenghuo_guanyu: ['male', 'shu', 5, ['new_rewusheng', 'new_yijue', 'fenghuo_yinhu'], []],
            fenghuo_weidun: ['male', 'qun', 5, ['fenghuo_zhongyong', 'fenghuo_yinhu'], []],
            fenghuo_liuyu: ['male', 'qun', 5, ['fenghuo_renai', 'fenghuo_yinhu'], []],
            fenghuo_zhugeliang4: ['male', 'shu', 5, ['reguanxing', 'kongcheng', 'fenghuo_yinhu'], []],
            fenghuo_caochong: ['male', 'wei', 5, ['chengxiang', 'renxin', 'fenghuo_yinhu'], []],
            fenghuo_maodiepingmin: ['male', 'qun', 3, ['fenghuo_xinian', 'fenghuo_yizhuang'], []],
            Tianshu_yvsai1: ['female', 'qun', 6, ['Tianshu_guixi', 'qugui2_anchao'], []],
            Tianshu_yvsai2: ['female', 'qun', 12, ['Tianshu_guixi', 'qugui2_anchao'], []],
            qugui2_yvsai: ['female', 'qun', 12, ['qugui2_guixi', 'qugui2_anchao', 'qugui2_guimeib'], []],
            qugui2_yvsai1: ['female', 'qun', 6, ['qugui2_guixi', 'qugui2_anchao'], []],
            qugui2_yvsai2: ['female', 'qun', 9, ['qugui2_guixi', 'qugui2_anchao', 'qugui2_guimeib'], []],
            Tianshu_niaozui1: ['male', 'qun', 6, ['Tianshu_bingyi', 'qugui2_suoxue'], []],
            Tianshu_niaozui2: ['male', 'qun', 12, ['Tianshu_bingyi', 'Tianshu_suoxue'], []],
            QuGui2_niaozui: ['male', 'qun', 6, ['qugui2_bingyia', 'qugui2_suoxue', 'qugui2_guimei'], []],
            qugui2_niaozui: ['male', 'qun', 7, ['qugui2_bingyi', 'qugui2_suoxue', 'qugui2_guimei'], []],
            qugui2_niaozui1: ['male', 'qun', 4, ['qugui2_bingyia', 'qugui2_suoxue'], []],
            qugui2_niaozui2: ['male', 'qun', 7, ['qugui2_bingyia', 'qugui2_suoxue', 'qugui2_guimei'], []],
            qugui2_niaozui3: ['male', 'qun', 10, ['qugui2_bingyia', 'qugui2_suoxue', 'qugui2_guimei'], []],
            Tianshu_huangfeng1: ['male', 'qun', 6, ['qugui2_duzhen', 'qugui2_mingchong'], []],
            Tianshu_huangfeng2: ['male', 'qun', 12, ['qugui2_duzhen', 'qugui2_mingchong'], []],
            QuGui2_huangfeng: ['male', 'qun', 4, ['qugui2_duzhena', 'qugui2_mingchonga', 'qugui2_guimei'], []],
            qugui2_huangfeng: ['male', 'qun', 5, ['qugui2_duzhen', 'qugui2_mingchong', 'qugui2_guimei'], []],
            qugui2_huangfeng1: ['male', 'qun', 3, ['qugui2_duzhena', 'qugui2_mingchonga'], []],
            qugui2_huangfeng2: ['male', 'qun', 5, ['qugui2_duzhena', 'qugui2_mingchonga', 'qugui2_guimei'], []],
            qugui2_huangfeng3: ['male', 'qun', 7, ['qugui2_duzhena', 'qugui2_mingchonga', 'qugui2_guimei'], []],
            Tianshu_baowei1: ['male', 'qun', 6, ['qugui2_eli', 'Tianshu_yinsha'], []],
            Tianshu_baowei2: ['male', 'qun', 12, ['qugui2_eli', 'Tianshu_yinsha'], []],
            qugui2_baowei: ['male', 'qun', 6, ['qugui2_yinsha', 'qugui2_eli', 'qugui2_guimei'], []],
            qugui2_baowei1: ['male', 'qun', 3, ['qugui2_yinsha', 'qugui2_elia'], []],
            qugui2_baowei2: ['male', 'qun', 6, ['qugui2_yinsha', 'qugui2_elia', 'qugui2_guimei'], []],
            qugui2_baowei3: ['male', 'qun', 9, ['qugui2_yinsha', 'qugui2_elia', 'qugui2_guimei'], []],
            qugui2_guiwang2: ['male', 'qun', 30, ['qugui2_jizhou', 'qugui2_danshi', 'qugui2_tiemianb', 'qugui2_chihu'], []],
            qugui2_guiwang1: ['male', 'qun', 12, ['qugui2_jizhoua', 'qugui2_danshi', 'qugui2_tiemianb'], []],
            Tianshu_guiwang1: ['male', 'qun', 6, ['Tianshu_jizhou', 'Tianshu_danshi'], []],
            Tianshu_guiwang2: ['male', 'qun', 12, ['Tianshu_jizhou', 'Tianshu_danshi', 'Tianshu_chihu'], []],
            qugui2_niutou: ['male', 'qun', 6, ['qugui2_xiaoshoub', 'qugui2_manjib', 'qugui2_guimei'], []],
            qugui2_mamian: ['male', 'qun', 6, ['qugui2_shiyvb', 'qugui2_guizhaob', 'qugui2_guimei'], []],
            Neihuan_zhaozhong: ['male', 'qun', 25, ['Neihuan_huanshi', 'zhaozhong_duanzheng', 'zhaozhong_lianhuo', 'Neihuan_huangkong', 'Neihuan_luanzhenga'], []],
            Neihuan_guosheng: ['male', 'qun', 16, ['Neihuan_huanshi', 'neihuan_heimu', 'Neihuan_niluan'], []],
            Neihuan_xiayun: ['male', 'qun', 25, ['Neihuan_huanshi', 'neihuan_jifu', 'shanhe_jiaozi'], []],
            Neihuan_chenkuang: ['male', 'qun', 16, ['Neihuan_huanshi', 'neihuan_andu', 'Neihuan_biri'], []],
            Neihuan_houlan: ['male', 'qun', 12, ['Neihuan_huanshi', 'Neihuan_lancai', 'neihuan_jingshe'], []],
            Neihuan_jianshuo: ['male', 'qun', 25, ['Neihuan_huanshi', 'neihuan_jibing', 'Neihuan_weizhong'], []],
            Neihuan_caojie: ['male', 'qun', 25, ['Neihuan_huanshi', 'neihuan_huangbao', 'Neihuan_mane'], []],
            Neihuan_fengxu: ['male', 'qun', 25, ['Neihuan_huanshi', 'neihuan_leixi', 'neihuan_huangjie'], []],
            Neihuan_duangui: ['male', 'qun', 25, ['Neihuan_huanshi', 'neihuan_suxi', 'neihuan_chibi', 'Neihuan_dangxian'], []],
            Neihuan_zuofeng: ['male', 'qun', 16, ['Neihuan_huanshi', 'fenghuo_suohui', 'Neihuan_huolu'], []],
            Neihuan_zhangrang: ['male', 'qun', 25, ['Neihuan_huanshi', 'zhangrang_huoluan', 'zhangrang_yankong', 'Neihuan_jiquan', 'Neihuan_luanzheng'], []],
            Waiqi_caocao: ['male', 'wei', 16, ['new_rejianxiong', 'fenghuo_pozhan', 'qqzj_lingba'], []],
            waiqi_caocao: ['male', 'wei', 11, ['new_rejianxiong', 'Waiqi_guicai'], []],
            Waiqi_yuanshao: ['male', 'qun', 25, ['luanji', 'Waiqi_xueyi', 'Waiqi_qiluan'], []],
            waiqi_yuanshao: ['male', 'qun', 11, ['luanji', 'Waiqi_zongshi'], []],
            Waiqi_guotufengji: ['male', 'qun', 16, ['rejigong', 'shifei', 'Waiqi_chanmou'], []],
            waiqi_guotufengji: ['male', 'qun', 7, ['jigong', 'shifei', 'Waiqi_jiuchi'], []],
            Waiqi_yanwen: ['male', 'qun', 25, ['shuangxiong', 'Waiqi_jianchu', 'Waiqi_yongdou'], []],
            waiqi_yanwen: ['male', 'qun', 8, ['shuangxiong', 'Waiqi_jianchu'], []],
            Waiqi_caoang: ['male', 'wei', 15, ['kaikang', 'shanhe_wushuang', 'feiying'], []],
            waiqi_caoang: ['male', 'wei', 8, ['kaikang', 'shanhe_wushuang'], []],
            Waiqi_yuanshu: ['male', 'qun', 25, ['drlt_yongsi', 'qqzj_wangzun', 'Waiqi_weidi'], []],
            waiqi_yuanshu: ['male', 'qun', 10, ['drlt_yongsi', 'Waiqi_congjian'], []],
            Waiqi_caoren: ['male', 'wei', 25, ['xinjushou', 'fenghuo_jiewei', 'shanhe_shensub'], []],
            waiqi_caoren: ['male', 'wei', 8, ['xinjushou', 'fenghuo_jiewei', 'Waiqi_tiandu'], []],
            Waiqi_xuyou: ['male', 'qun', 16, ['nzry_chenglve', 'nzry_shicai', 'shanhe_yingzi'], []],
            waiqi_xuyou: ['male', 'qun', 7, ['nzry_chenglve', 'nzry_shicai', 'nzry_cunmu', 'shanhe_yingzi'], []],
            Waiqi_jushou: ['male', 'qun', 16, ['jianying', 'dcshibei', 'shanhe_zhaxiang'], []],
            waiqi_jushou: ['male', 'qun', 6, ['jianying', 'shibei', 'shanhe_zhaxiang'], []],
            Waiqi_hejin: ['male', 'qun', 25, ['hejin_zhenmou', 'Waiqi_guiluan', 'Waiqi_waixi', 'hejin_quanba'], []],
            Waiqi_hetaihou: ['female', 'qun', 25, ['hetaihou_zunqin', 'Waiqi_chuhuan', 'hetaihou_nongquan', 'hetaihou_shexie'], []],
            waiqi_chenlin: ['male', 'wei', 9, ['bifa', 'songci', 'Waiqi_danlao'], []],
            Waiqi_xunyou: ['male', 'wei', 16, ['reqice', 'rezhiyu', 'Waiqi_anyong'], []],
            waiqi_xunyou: ['male', 'wei', 9, ['qice', 'zhiyu', 'shanhe_jieminga'], []],
            waiqi_xiahouyuan: ['male', 'wei', 8, ['xinshensu', 'Waiqi_fankui'], []],
            waiqi_xiahoudun: ['male', 'wei', 8, ['reganglie', 'new_qingjian', 'Waiqi_xunxun'], []],
            neihuan_guosheng: ['male', 'qun', 10, ['neihuan_huanshi', 'neihuan_heimu', 'neihuan_heizhi'], []],
            neihuan_xiayun: ['male', 'qun', 8, ['neihuan_huanshi', 'neihuan_jifu'], []],
            neihuan_chenkuang: ['male', 'qun', 4, ['neihuan_huanshi', 'neihuan_andu', 'neihuan_biri'], []],
            neihuan_houlan: ['male', 'qun', 6, ['neihuan_huanshi', 'neihuan_lancai', 'neihuan_jingshe'], []],
            neihuan_jianshuo: ['male', 'qun', 20, ['neihuan_huanshi', 'neihuan_jibing'], []],
            neihuan_caojie: ['male', 'qun', 15, ['neihuan_huanshi', 'neihuan_huangbao'], []],
            neihuan_fengxu: ['male', 'qun', 10, ['neihuan_huanshi', 'neihuan_leixi', 'neihuan_huangjie'], []],
            neihuan_duangui: ['male', 'qun', 10, ['neihuan_huanshi', 'neihuan_suxi', 'neihuan_chibi'], []],
          },
          characterIntro: {
            shidian_qinguangwang: '秦广王蒋,二月初一日诞辰(一说为二月初二日).秦广王心性至仁至孝,统辖人间寿命之长短,一生功过经由各地城隍、土地、查察司会报本殿,由秦广王亲审宣判,功过相当者,免受其刑直转第十殿转轮王处,或者按照其生前所造善恶发放投胎,或男或女,或贫或富等承受其果报.罪孽深重者,发配各殿大小地狱去承受应得的酷刑以消业.',
            shidian_chujiangwang: '楚江王历,十殿阎罗王之一,在三月初一诞生.楚江王的前世是东汉末年义阳侯厉温,涿郡涿县(河北涿州)人,魏郡太守.汉灵帝中平元年(公元184年)2月,黄巾军领袖张角组织大批教徒在邺城(邯郸临漳)集结,准备起义,被厉温率军配合卢植、皇甫嵩平叛.魏文帝黄初年间,曹丕设立义阳郡,厉温被封为义阳侯,世袭侯爵.厉温为官清正,被玉皇大帝敕封为<第二殿阎罗楚江王>,管理大地狱,又被称为剥衣婷寒冰地狱,除此之外还建立了16座小狱.',
            shidian_songdiwang: '宋帝王,中国古代神话中的十殿阎王之一,二月初八日诞辰,专司黑绳大地狱.宋帝王的前世是唐朝工部尚书余懃,江西余干人.余懃天资聪颖,学习刻苦.唐中宗神龙元年(公元705年)高中进士,勋封上柱国.余懃为官清廉,体恤民情,为百姓办了不少实事,被玉皇大帝敕封为<第三殿阎王宋帝王>.专司在阳间忤逆尊长、背信弃义、教唆兴讼等罪.',
            shidian_wuguanwang: '五官王,中国古代神话中的十殿阎王之一,第四殿阎罗,农历二月十八日诞辰.五官王的前世是三国时期孙权的托孤大臣吕岱,吕岱一生戮力奉公,兢兢业业为孙吴开疆拓土,战功赫赫,死后被玉皇大帝敕封为<第四殿阎罗仵官王>.司掌合大地狱,又名剥剹血池地狱,凡世人抗粮赖租,交易欺诈者,推入此狱,另再判以小狱受苦,满日送解第五殿察核.',
            shidian_yanluowang: '阎罗王,亦称<阎王>、<阎罗>、<阎王爷>、<阎魔王>、<阎罗大王>,中国古代神话中的十殿阎王之一,为阴曹地府中第五殿的殿主冥王,是中国古代宗教神话信仰中的一尊阴间神祇,正月初八日诞辰,司掌大海之底,东北方沃礁石下的<叫唤大地狱>,另设十六小地狱,传说阎罗天子的前世是包拯.',
            shidian_bianchengwang: '卞城王,中国古代神话中的十殿阎王之一,司掌唤大地狱及枉死城,农历三月初八日诞辰.卞城王的前世是南北朝的平远将军毕元宾.毕元宾从小为人仗义,武艺高强,任南朝刘宋正员将军.后随父入魏,被赐爵须昌侯,加封平南将军、兖州刺史等.毕元宾死后被玉皇大帝敕封为<第六殿阎罗卞城王>.凡世人忤逆不孝、怨天尤地者,发至此狱,被小鬼分尸、锥打、火烧,刑满发往第七殿.',
            shidian_taishanwang: '泰山王是中国民间传说中的冥间之神,十殿阎王之一,第七殿阎王.泰山王掌管大海底,丁北方沃焦石下的热恼大地狱.',
            shidian_dushiwang: '都市王掌管大海底,正西方沃燋石下的大地狱.此地狱宽长八千里(五百由旬).都市王黄,四月初一日诞辰,司掌大热大恼大地狱,又名恼闷锅地狱,另设十六小地狱.凡在世不孝,使父母翁姑愁闷烦恼者,掷入此狱.再交各小狱加刑,受尽痛苦,解交第十殿,改头换面,永为畜类.附:十六小地狱分别为:一、车崩小地狱;二、闷锅小地狱;三、碎剐小地狱;四、孔小地狱;五、翦朱小地狱;六、常圊小地狱;七、断肢小地狱;八、煎脏小地狱;九、炙髓小地狱;十、爬肠小地狱;十一、焚小地狱;十二、开瞠小地狱;十三剐胸小地狱;十四、破顶撬齿小地狱;十五、割小地狱;十六、钢叉小地狱.形象:白净面皮,双手捧笏(大足石窟石箓山第九龛).',
            shidian_pingdengwang: '平等王,司掌大海之底,西南方沃燋石下的阿鼻大地狱.阿鼻大地狱又称无间地狱、阿毗脂大地狱、阿鼻焦热地狱、阿鼻大城.阿鼻大地狱广、深两万由旬,也就是九百亿平方公里.密设铁网之内,平等王陆,四月初八日诞辰,司掌丰都城铁网阿鼻地狱,另设十六小狱.凡阳世杀人放火、斩绞正法者,解到本殿,用空心铜桩,链其手足相抱,煽火焚烧,烫烬心肝,随发阿鼻地狱受刑.直到 被害者个个投生,方准提出,解交第十殿发生六道(天道、人道、地道、阿修罗道、地狱道、畜生道).附:十六小地狱分别为:一、敲骨灼身小地狱;二、抽筋擂骨小地狱;三、鸦食心肝小地狱;四、狗食肠肺小地狱;五、身溅热油小地狱;六、脑箍拔舌拔齿小地狱;七、取脑填小地狱;八、蒸头刮脑小地狱;九、羊搐成盐小地狱;十、木夹顶小地狱;十一、磨心小地狱;十二、沸汤淋身小地狱;十三、黄蜂小地狱;十四、蝎钩小地狱;十五、蚁蛀熬眈小地狱;十六、紫赤毒蛇钻孔小地狱.形象:老者形象,连鬃长髯,头戴方冠,身着长袍;双手握于袖中,怀中抱笛板(大足石窟石箓山第九龛).',
            shidian_zhuanlunwang: '转轮王是十殿阎王之一.',
            hezong_daqin_yingzheng: '秦始皇嬴政(前259年—前210年),嬴姓,赵氏,名政(一说名<正>),又称赵政、祖龙,也有吕政一说(详见<人物争议-姓名之争>目录).秦庄襄王和赵姬之子.中国古代杰出的政治家、战略家、改革家,首次完成中国大一统的政治人物,也是中国第一个称皇帝的君主.',
            hezong_daqin_shangyang: '商鞅(约公元前390年－公元前338年),姬姓,公孙氏,名鞅,卫国人.战国时期政治家、改革家、思想家、军事家,法家代表人物,卫国国君后代.',
            hezong_daqin_baiqi: '白起(？－前257年),一称公孙起,郿邑(今陕西眉县常兴镇白家村)人.中国战国时期名将,杰出的军事家,<兵家>代表人物.',
            hezong_daqin_miyue: '宣太后(？―公元前265年),芈(mǐ)姓,出生地楚国丹阳,又称芈八子、秦宣太后,战国时期秦国王太后,秦惠文王之妾,秦昭襄王之母,是中国历史上第一个被称为<太后>的人.',
            hezong_daqin_lvbuwei: '吕不韦(？—前235年),姜姓,吕氏,名不韦,卫国濮阳(今河南省安阳市滑县)人.战国末年卫国商人、政治家、思想家,后为秦国丞相,姜子牙的二十三世孙.',
            hezong_daqin_zhaoji: '帝太后赵姬(？—公元前228年),真实姓名失载,<赵姬>这一称呼始见于<东周列国志>,故史学家称呼她为赵姬.赵姬出生于赵国邯郸,是秦庄襄王子楚的王后,秦始皇嬴政的生母,是中国历史上第一位帝太后.',
            hezong_daqin_zhaogao: '赵高(？－前207年),嬴姓,赵氏.秦朝二世皇帝时丞相,任中车府令,兼行符玺令事,<管事二十余年>.秦始皇死后,赵高发动沙丘政变,他与丞相李斯合谋伪造诏书,逼秦始皇长子扶苏自杀,另立始皇幼子胡亥为帝,是为秦二世,并自任郎中令.他在任职期间独揽大权,结党营私,征役更加繁重,行政更加苛暴.公元前208年又设计害死李斯,继之为秦朝丞相.第三年他迫秦二世自杀,另立子婴为秦王.不久被子婴设计杀掉,诛夷三族.',
            hezong_daqin_zhangyi: '张仪(？－公元前309年),魏国安邑(今山西万荣县王显乡张仪村)人.战国时期著名的纵横家、外交家和谋略家.',
            shanhe_baiyannv: '百目鬼,女,是在西欧传说中多以巨型怪兽居多的百目怪传到日本.',
            shanhe_jiuweihu: '玉藻前是传说在平安时代末期、鸟羽上皇院政期间(1129年到1156年)出现由白面金毛九尾狐变化而成的绝世美女,由于其才识广博而又绝世美艳,被人称为日本第一才女.',
            shanhe1_jiuweihu: '玉藻前是传说在平安时代末期、鸟羽上皇院政期间(1129年到1156年)出现由白面金毛九尾狐变化而成的绝世美女,由于其才识广博而又绝世美艳,被人称为日本第一才女.',
            shanhe_shenlouyaoshi: '滑头鬼,日本的一种妖怪,喜欢进别人家里恶作剧.因为是光头,也被称为滑头鬼.滑瓢是日本的一种妖怪,源于日本民间传说中的客人神(外来神).',
            shanhe1_shenlouyaoshi: '滑头鬼,日本的一种妖怪,喜欢进别人家里恶作剧.因为是光头,也被称为滑头鬼.滑瓢是日本的一种妖怪,源于日本民间传说中的客人神(外来神).',
            shanhe2_shenlouyaoshi: '滑头鬼,日本的一种妖怪,喜欢进别人家里恶作剧.因为是光头,也被称为滑头鬼.滑瓢是日本的一种妖怪,源于日本民间传说中的客人神(外来神).',
            shanhe_sanshiyou: '天邪鬼别名:若海,具有令任何事物翻转程度的能力,是日本民间故事中出现的恶鬼.一般人将忤逆人意之各种事情、一种叫天逆每的妖怪都可以称作天邪鬼,通过人们对它的恐惧而增加力量,会附在人的身上,不能容忍别人所说的话逆反它.天邪鬼会模仿他人的外表或声音举止,或把人的言行举止变的相反,以藉此对人作乱.',
            shanhe1_sanshiyou: '天邪鬼别名:若海,具有令任何事物翻转程度的能力,是日本民间故事中出现的恶鬼.一般人将忤逆人意之各种事情、一种叫天逆每的妖怪都可以称作天邪鬼,通过人们对它的恐惧而增加力量,会附在人的身上,不能容忍别人所说的话逆反它.天邪鬼会模仿他人的外表或声音举止,或把人的言行举止变的相反,以藉此对人作乱.',
            shanhe_xiangliujushe: '八岐大蛇是日本神话中的怪物,别称八俣远吕智、八俣远吕知,一般被认为是某种强大的妖怪或祸神.它是一种能带来灾难的凶猛巨蛇,有着八头八尾的可怕外貌,其身体内蕴藏一把传说中的宝剑.它在七年间吃了奇稻田姬的姐妹,但最后在第八年被须佐之男斩杀.',
            shanhe1_xiangliujushe: '八岐大蛇是日本神话中的怪物,别称八俣远吕智、八俣远吕知,一般被认为是某种强大的妖怪或祸神.它是一种能带来灾难的凶猛巨蛇,有着八头八尾的可怕外貌,其身体内蕴藏一把传说中的宝剑.它在七年间吃了奇稻田姬的姐妹,但最后在第八年被须佐之男斩杀.',
            shanhe2_xiangliujushe: '八岐大蛇是日本神话中的怪物,别称八俣远吕智、八俣远吕知,一般被认为是某种强大的妖怪或祸神.它是一种能带来灾难的凶猛巨蛇,有着八头八尾的可怕外貌,其身体内蕴藏一把传说中的宝剑.它在七年间吃了奇稻田姬的姐妹,但最后在第八年被须佐之男斩杀.',
            shanhe_moluoyecha: '天狗,日本神话传说中的一种生物.在日本的一般说法认为,天狗有又高又长的红鼻子与红脸,手持团扇、羽扇或宝槌,身材高大、穿着"山伏"(日本服饰的一种),背后长着双翼.通常居住在深山之中,具有令人难以想像的怪力和神通,腰际悬著武士刀,穿着日式传统高脚木屐,随身带着蓑衣以便随时把自己隐藏起来,也具有不可一世的傲慢姿态.通常居住于深林之内,寻常人不敢靠近.',
            shanhe1_moluoyecha: '天狗,日本神话传说中的一种生物.在日本的一般说法认为,天狗有又高又长的红鼻子与红脸,手持团扇、羽扇或宝槌,身材高大、穿着"山伏"(日本服饰的一种),背后长着双翼.通常居住在深山之中,具有令人难以想像的怪力和神通,腰际悬著武士刀,穿着日式传统高脚木屐,随身带着蓑衣以便随时把自己隐藏起来,也具有不可一世的傲慢姿态.通常居住于深林之内,寻常人不敢靠近.',
            shanhe2_moluoyecha: '天狗,日本神话传说中的一种生物.在日本的一般说法认为,天狗有又高又长的红鼻子与红脸,手持团扇、羽扇或宝槌,身材高大、穿着"山伏"(日本服饰的一种),背后长着双翼.通常居住在深山之中,具有令人难以想像的怪力和神通,腰际悬著武士刀,穿着日式传统高脚木屐,随身带着蓑衣以便随时把自己隐藏起来,也具有不可一世的傲慢姿态.通常居住于深林之内,寻常人不敢靠近.',
            shanhe_jiudianluocha: '酒吞童子,日本古代神话传说中的妖王,平安时期的鬼族首领;又称<酒天(颠)童子>或<朱吞童子>等,本名外道丸.为日本三大妖怪之一,因嗜酒而得名,占领丹波国大江山,亦称大江山之鬼;曾震撼京都,出现于酒吞退治、百鬼夜行等传说.相传其专以妇女儿童的血肉为食,擅长勾引处女,并将女性乳房割下吃掉.',
            shanhe1_jiudianluocha: '酒吞童子,日本古代神话传说中的妖王,平安时期的鬼族首领;又称<酒天(颠)童子>或<朱吞童子>等,本名外道丸.为日本三大妖怪之一,因嗜酒而得名,占领丹波国大江山,亦称大江山之鬼;曾震撼京都,出现于酒吞退治、百鬼夜行等传说.相传其专以妇女儿童的血肉为食,擅长勾引处女,并将女性乳房割下吃掉.',
            shanhe2_jiudianluocha: '酒吞童子,日本古代神话传说中的妖王,平安时期的鬼族首领;又称<酒天(颠)童子>或<朱吞童子>等,本名外道丸.为日本三大妖怪之一,因嗜酒而得名,占领丹波国大江山,亦称大江山之鬼;曾震撼京都,出现于酒吞退治、百鬼夜行等传说.相传其专以妇女儿童的血肉为食,擅长勾引处女,并将女性乳房割下吃掉.',
            shanhe3_jiudianluocha: '酒吞童子,日本古代神话传说中的妖王,平安时期的鬼族首领;又称<酒天(颠)童子>或<朱吞童子>等,本名外道丸.为日本三大妖怪之一,因嗜酒而得名,占领丹波国大江山,亦称大江山之鬼;曾震撼京都,出现于酒吞退治、百鬼夜行等传说.相传其专以妇女儿童的血肉为食,擅长勾引处女,并将女性乳房割下吃掉.',
            shanhe_haiheshang: '海坊主,传说为海女房的丈夫,头上无毛,身躯庞大,大概有五、六尺左右,当其在暴风雨的海面上出现时,那黑压压的一片确实给人以相当恐怖的感觉.',
            shanhe1_haiheshang: '海坊主,传说为海女房的丈夫,头上无毛,身躯庞大,大概有五、六尺左右,当其在暴风雨的海面上出现时,那黑压压的一片确实给人以相当恐怖的感觉.',
            shanhe2_haiheshang: '海坊主,传说为海女房的丈夫,头上无毛,身躯庞大,大概有五、六尺左右,当其在暴风雨的海面上出现时,那黑压压的一片确实给人以相当恐怖的感觉.',
            shanhe3_haiheshang: '海坊主,传说为海女房的丈夫,头上无毛,身躯庞大,大概有五、六尺左右,当其在暴风雨的海面上出现时,那黑压压的一片确实给人以相当恐怖的感觉.',
            shanhe_lingji: '雪女是日本古代传说中出现的一种妖怪.<雪女出,早归家>是一句日本民间广为流传的古话.擅长制造冰雪的雪女,又名雪姬,是传统的日式妖怪,妇孺皆知.在深山中居住,和人类差不多,有着令人惊艳的美丽外表,常常把进入雪山的男子吸引到没人的地方与他接吻,接吻的同时将其完全冰冻起来,取走其灵魂食用.',
            shanhe_shuling: '人面树生长在山里,其盛开的花犹如人的脸一样,默默无语,不停地微笑,微笑过后,花便凋落.<百鬼夜行>中认为它是山茶花的灵魂所变.像这样灵魂寄生在树木中的情况在日本各地都有发现,比如传说中,从前津轻地区(现在的青森县)的某个寺院里,有一棵不同寻常的树,只要一碰伤这棵树,就会有血从树的伤口处流出来.一个叫做善藏的男子想试验一下,于是便悄悄地折断了一个树枝,果然流出鲜红的血.对此,人们十分害怕,就在树干上雕琢了一个高达一米五左右的佛像,以此来安抚树木的灵魂,并对它进行祭祀.由于这棵树是桂树,所以人们把它称作<佛桂>.',
            shanhe_yimao: '猫又,俗称猫妖、猫股,在日本神话中是一种有着两条尾巴的黑猫形象.耳朵大而尖,牙齿为双面锯齿型,是猫妖的一种,据说能直立行走.最早版本来自<日本灵异记>.',
            shanhe_guimianxiuluo: '般若是日本传说中的一种怨灵类鬼怪,据说是因强烈的妒忌与怨念所形成的恶灵.日本能剧中有假面(能面)名叫般若.',
            shanhe_yuanniu: '牛鬼是日本神话中的妖怪,出自鸟山石燕的<画图百鬼夜行>.牛鬼是一种恶毒的海怪,它的头是牛的形状,而身子则仿佛巨型的蜘蛛或螃蟹.传说中常可以在日本西边沿海遇见,在岛根县尤其常见.善于用毒,会经常从口中喷射出毒液来发动攻击.',
            shanhe_huanzhu: '络新妇,日本传说的妖怪,本来的意义为<女郎蜘蛛>,也叫新妇罗.在鸟山石燕的<画图百鬼夜行>中有记载,是蜘蛛变为人形的妖怪,会诱惑男子,当男子被诱惑后,会将男子的首级取走食用.弱点是怕火.',
            shanhe_wangxiang: '河童是日本民间传说中的传说生物,有鸟的喙、青蛙的四肢、猴子的身体及乌龟的壳,如同多种动物的综合体.传说其弱点为头顶的碟,只要诱骗河童弯身,让他头顶碟子里装的水流尽,他就会精力尽失.',
          },
          characterTitle: {
            fenghuo_liushan: '慈母境(精英)',
            fenghuo_ganfuren: '慈母境(精英)',
            fenghuo_huaman1: '慈母境(普通)',
            fenghuo_zhurong1: '慈母境(普通)',
            fenghuo_zhenji1: '慈母境(普通)',
            fenghuo_zhonghui: '慈母境(普通)',
            fenghuo_zhangchangpu: '慈母境(普通)',
            fenghuo_zhoufei1: '慈母境(普通)',
            fenghuo_xiaoqiao: '慈母境(普通)',
            fenghuo_lingju1: '慈母境(普通)',
            fenghuo_diaochan1: '慈母境(普通)',
            fenghuo_wuguotai: '慈母境(普通)',
            fenghuo_wangrong1: '慈母境(普通)',
            fenghuo_liuxie2: '慈母境(普通)',
            fenghuo_sunquan1: '慈母境(普通)',
            fenghuo_caorui1: '慈母境(普通)',
            fenghuo_liubei: '太平境(精英)',
            fenghuo_baixing: '太平境(普通)',
            fenghuo_xiaoli: '太平境(普通)',
            fenghuo_kaoshanfu: '太平境(普通)',
            fenghuo_guanyu: '太平境(普通)',
            fenghuo_zhangfei1: '太平境(普通)',
            fenghuo_liushan2: '太平境(普通)',
            fenghuo_liuyu: '太平境(普通)',
            fenghuo_taoqian1: '太平境(普通)',
            fenghuo_caocao5: '太平境(普通)',
            fenghuo_weidun: '太平境(普通)',
            fenghuo_zhugeliang4: '太平境(普通)',
            fenghuo_caochong: '太平境(普通)',
            fenghuo_yanyan1: '太平境(普通)',
            fenghuo_gengniu: '太平境(普通)',
            fenghuo_youmumin: '太平境(普通)',
            fenghuo_jimin1: '太平境(普通)',
            fenghuo_zhangning: '黄巾境(精英)',
            fenghuo_huangjinbing: '黄巾境(普通)',
            fenghuo_huangjindaogu: '黄巾境(普通)',
            fenghuo_huangjinshouling: '黄巾境(普通)',
            fenghuo_zhangmancheng: '黄巾境(普通)',
            fenghuo_bocai: '黄巾境(普通)',
            fenghuo_suigu: '黄巾境(普通)',
            fenghuo_tangzhou: '黄巾境(普通)',
            fenghuo_chenyuanzhi: '黄巾境(普通)',
            fenghuo_yudu: '黄巾境(普通)',
            fenghuo_huangjinzhanji: '黄巾境(普通)',
            fenghuo_busi: '黄巾境(普通)',
            fenghuo_dengmao: '黄巾境(普通)',
            fenghuo_bairao: '黄巾境(普通)',
            fenghuo_limin: '黄巾境(普通)',
            fenghuo_peiyuanshao: '黄巾境(普通)',
            fenghuo_zhangjiao: '黄巾境(普通)',
            fenghuo_zhangbao: '黄巾境(普通)',
            fenghuo_guanhai: '黄巾境(普通)',
            fenghuo_zhangyan: '黄巾境(普通)',
            fenghuo_zhangliang: '黄巾境(普通)',
            fenghuo_huangtianshiba: '黄巾境(普通)',
            fenghuo_huangtianleixiao: '黄巾境(普通)',
            fenghuo_dongzhuo2: '暴虐境(精英)',
            fenghuo_nvshicong2: '暴虐境(普通)',
            fenghuo_zuofeng1: '暴虐境(普通)',
            fenghuo_cenhun1: '暴虐境(普通)',
            fenghuo_sunhao1: '暴虐境(普通)',
            fenghuo_xurong1: '暴虐境(普通)',
            fenghuo_gongsunyuan1: '暴虐境(普通)',
            fenghuo_liuhong2: '暴虐境(普通)',
            fenghuo_chengong: '暴虐境(普通)',
            fenghuo_zhangrang1: '暴虐境(普通)',
            fenghuo_limin: '暴虐境(普通)',
            fenghuo_caocao3: '暴虐境(普通)',
            fenghuo_dading1: '暴虐境(普通)',
            fenghuo_lvboshe: '暴虐境(普通)',
            fenghuo_panjun: '暴虐境(普通)',
            fenghuo_dongzhuo: '西凉境(精英)',
            fenghuo_yuanshao: '乱击境(精英)',
            fenghuo_yuanwei: '乱击境(普通)',
            fenghuo_yuanfeng: '乱击境(普通)',
            fenghuo_lvkuanglvxiang: '乱击境(普通)',
            fenghuo_chunyuqiong1: '乱击境(普通)',
            fenghuo_xunchen: '乱击境(普通)',
            fenghuo_jushou: '乱击境(普通)',
            fenghuo_xinpi: '乱击境(普通)',
            fenghuo_xuyou: '乱击境(普通)',
            fenghuo_guotufengji: '乱击境(普通)',
            fenghuo_gaolan: '乱击境(普通)',
            fenghuo_zhanghe: '乱击境(普通)',
            fenghuo_quyi: '乱击境(普通)',
            fenghuo_tianfeng: '乱击境(普通)',
            fenghuo_yanwen: '乱击境(普通)',
            fenghuo_machao: '西凉境(普通)',
            fenghuo_yangwan: '西凉境(普通)',
            fenghuo_hansui: '西凉境(普通)',
            fenghuo_licaiwei: '西凉境(普通)',
            fenghuo_pangde: '西凉境(普通)',
            fenghuo_liangxing: '西凉境(普通)',
            fenghuo_wangyi: '西凉境(普通)',
            fenghuo_madai: '西凉境(普通)',
            fenghuo_huaxiong: '西凉境(普通)',
            fenghuo_mateng: '西凉境(普通)',
            fenghuo_caocao: '雄骑境(精英)',
            fenghuo_caochun: '雄骑境(普通)',
            fenghuo_shenguanyu: '雄骑境(普通)',
            fenghuo_caozhang: '雄骑境(普通)',
            fenghuo_madai2: '雄骑境(普通)',
            fenghuo_gongsunzan1: '雄骑境(普通)',
            fenghuo_xusheng: '雄骑境(普通)',
            fenghuo_gaoshun: '雄骑境(普通)',
            fenghuo_chengpu1: '雄骑境(普通)',
            fenghuo_guanxingzhangbao: '雄骑境(普通)',
            fenghuo_zhangwena: '雄骑境(普通)',
            fenghuo_guanyu1: '雄骑境(普通)',
            fenghuo_sunce1: '雄骑境(普通)',
            fenghuo_huangfusong: '雄骑境(普通)',
            fenghuo_lvbu2: '雄骑境(普通)',
            fenghuo_guanyi1: '雄骑境(普通)',
            fenghuo_machao1: '雄骑境(普通)',
            fenghuo_zhangliao: '神速境(精英)',
            fenghuo_gongsunzan: '神速境(普通)',
            fenghuo_lingtong: '神速境(普通)',
            fenghuo_xiahouyuan: '神速境(普通)',
            fenghuo_guanyu2: '神速境(普通)',
            fenghuo_machao2: '神速境(普通)',
            fenghuo_ganning: '神速境(普通)',
            fenghuo_lvmeng: '神速境(普通)',
            fenghuo_dengai: '神速境(普通)',
            fenghuo_wangping: '神速境(普通)',
            fenghuo_xiahouba: '神速境(普通)',
            fenghuo_caoxiu: '神速境(普通)',
            fenghuo_heqi: '神速境(普通)',
            fenghuo_madai1: '神速境(普通)',
            fenghuo_wuyi: '神速境(普通)',
            fenghuo_lijue: '神速境(普通)',
            fenghuo_liangxing1: '神速境(普通)',
            fenghuo_xugong: '刺客境(精英)',
            fenghuo_lingju: '刺客境(普通)',
            fenghuo_cike: '刺客境(普通)',
            fenghuo_jiping1: '刺客境(普通)',
            fenghuo_cike: '刺客境(普通)',
            fenghuo_nvcike: '刺客境(普通)',
            fenghuo_wufu: '刺客境(普通)',
            fenghuo_hanlong: '刺客境(普通)',
            fenghuo_caocao4: '刺客境(普通)',
            fenghuo_xunyou: '刺客境(普通)',
            fenghuo_tanzi: '刺客境(普通)',
            fenghuo_zhaoxiang1: '刺客境(普通)',
            fenghuo_weiyan: '刺客境(普通)',
            fenghuo_fanjiangzhangda: '刺客境(普通)',
            fenghuo_zhongyao: '墨客境(精英)',
            fenghuo_caozhi: '墨客境(普通)',
            fenghuo_wangcan: '墨客境(普通)',
            fenghuo_caiyong2: '墨客境(普通)',
            fenghuo_chenlin: '墨客境(普通)',
            fenghuo_zhangzhaozhanghong1: '墨客境(普通)',
            fenghuo_qinmi: '墨客境(普通)',
            fenghuo_yangxiu1: '墨客境(普通)',
            fenghuo_ruanyu: '墨客境(普通)',
            fenghuo_xuezong: '墨客境(普通)',
            fenghuo_zhugeliang2: '墨客境(普通)',
            fenghuo_caiwenji2: '墨客境(普通)',
            fenghuo_kongrong: '墨客境(普通)',
            fenghuo_caocao2: '墨客境(普通)',
            fenghuo_huzhao: '墨客境(普通)',
            fenghuo_jikang1: '墨客境(普通)',
            fenghuo_caopi: '墨客境(普通)',
            fenghuo_simayi: '谋定境(精英)',
            fenghuo_guojia: '谋定境(普通)',
            fenghuo_jiaxu1: '谋定境(普通)',
            fenghuo_pangtong: '谋定境(普通)',
            fenghuo_zhouyu: '谋定境(普通)',
            fenghuo_luxun: '谋定境(普通)',
            fenghuo_lusu: '谋定境(普通)',
            fenghuo_wolongzhugeliang: '谋定境(普通)',
            fenghuo_xunyu: '谋定境(普通)',
            fenghuo_xugou: '谋定境(普通)',
            fenghuo_gengniu1: '谋定境(普通)',
            fenghuo_nianshouyin: '谋定境(普通)',
            fenghuo_xingrima: '谋定境(普通)',
            fenghuo_qinglong: '谋定境(普通)',
            fenghuo_kuimulang: '谋定境(普通)',
            fenghuo_zhuque: '谋定境(普通)',
            fenghuo_tongyuan: '枪王境(精英)',
            fenghuo_zhanghu: '枪王境(普通)',
            fenghuo_machao3: '枪王境(普通)',
            fenghuo_zhangxingcai1: '枪王境(普通)',
            fenghuo_qiangbingxuetu: '枪王境(普通)',
            fenghuo_sunce: '枪王境(普通)',
            fenghuo_lingtong1: '枪王境(普通)',
            fenghuo_zhaoyun: '枪王境(普通)',
            fenghuo_zhaoyun1: '枪王境(普通)',
            fenghuo_mayunlu: '枪王境(普通)',
            fenghuo_jiangwei: '枪王境(普通)',
            fenghuo_zhangxiu1: '枪王境(普通)',
            fenghuo_zhangren: '枪王境(普通)',
            fenghuo_zhanghe1: '枪王境(普通)',
            fenghuo_zhangliao1: '枪王境(普通)',
            fenghuo_zhangrang: '宦者境(精英)',
            fenghuo_zhaozhong: '宦者境(普通)',
            fenghuo_fengxu: '宦者境(普通)',
            fenghuo_duangui: '宦者境(普通)',
            fenghuo_chenkuang: '宦者境(普通)',
            fenghuo_jianshuo: '宦者境(普通)',
            fenghuo_xiayun: '宦者境(普通)',
            fenghuo_houlan: '宦者境(普通)',
            fenghuo_guosheng: '宦者境(普通)',
            fenghuo_cenhun: '宦者境(普通)',
            fenghuo_huanghao: '宦者境(普通)',
            fenghuo_caojie3: '宦者境(普通)',
            fenghuo_zuofeng: '宦者境(普通)',
            fenghuo_shicong: '宦者境(普通)',
            fenghuo_shushicong: '宦者境(普通)',
            fenghuo_wushicong: '宦者境(普通)',
            fenghuo_jiaxu: '乱武境(精英)',
            fenghuo_dading: '乱武境(普通)',
            fenghuo_lvbu1: '乱武境(普通)',
            fenghuo_dongzhuo3: '乱武境(普通)',
            fenghuo_xurong: '乱武境(普通)',
            fenghuo_diaochan2: '乱武境(普通)',
            fenghuo_lijue1: '乱武境(普通)',
            fenghuo_guosi: '乱武境(普通)',
            fenghuo_zhangji: '乱武境(普通)',
            fenghuo_fanchou: '乱武境(普通)',
            fenghuo_wangyun: '乱武境(普通)',
            fenghuo_feixiongjun: '乱武境(普通)',
            fenghuo_tanlangjun: '乱武境(普通)',
            fenghuo_longxiangjun: '乱武境(普通)',
            fenghuo_hubenjun: '乱武境(普通)',
            fenghuo_nvshicong1: '乱武境(普通)',
            fenghuo_moushi: '乱武境(普通)',
            fenghuo_zhaoxiang: '精兵境(精英)',
            fenghuo_huangjinbing1: '精兵境(普通)',
            fenghuo_danyangbing: '精兵境(普通)',
            fenghuo_yangzhoujun: '精兵境(普通)',
            fenghuo_tengjiabing: '精兵境(普通)',
            fenghuo_longxiangjun1: '精兵境(普通)',
            fenghuo_hubenjun1: '精兵境(普通)',
            fenghuo_feixiongjun1: '精兵境(普通)',
            fenghuo_tanlangjun1: '精兵境(普通)',
            fenghuo_fengyaojun: '精兵境(普通)',
            fenghuo_baolvejun: '精兵境(普通)',
            fenghuo_hanjun1: '精兵境(普通)',
            fenghuo_wuhuanbing: '精兵境(普通)',
            fenghuo_qingzhoubing: '精兵境(普通)',
            fenghuo_qinweibing: '精兵境(普通)',
            fenghuo_xuzhoujun: '精兵境(普通)',
            fenghuo_shuijun1: '精兵境(普通)',
            fenghuo_zhenchabing: '精兵境(普通)',
            fenghuo_yulinjun: '精兵境(普通)',
            fenghuo_huangzhong: '皓首境(精英)',
            fenghuo_yuji1: '皓首境(普通)',
            fenghuo_huatuo1: '皓首境(普通)',
            fenghuo_wangyun1: '皓首境(普通)',
            fenghuo_taoqian: '皓首境(普通)',
            fenghuo_huangfusong1: '皓首境(普通)',
            fenghuo_hansui1: '皓首境(普通)',
            fenghuo_zuoci: '皓首境(普通)',
            fenghuo_gexuan: '皓首境(普通)',
            fenghuo_caiyong1: '皓首境(普通)',
            fenghuo_luzhi: '皓首境(普通)',
            fenghuo_simahui: '皓首境(普通)',
            fenghuo_tongyuan1: '皓首境(普通)',
            fenghuo_nanhualaoxian1: '皓首境(普通)',
            fenghuo_chengyu: '皓首境(普通)',
            fenghuo_wanglang: '皓首境(普通)',
            fenghuo_zhongyao2: '皓首境(普通)',
            fenghuo_yanyan: '皓首境(普通)',
            fenghuo_liaohua: '皓首境(普通)',
            fenghuo_lvdai: '皓首境(普通)',
            fenghuo_chengpu: '皓首境(普通)',
            fenghuo_zhangzhaozhanghong: '皓首境(普通)',
            fenghuo_maodiepingmin: '皓首境(普通)',
            fenghuo_nanhualaoxian: '奇人境(精英)',
            fenghuo_zhangdaoling: '奇人境(普通)',
            fenghuo_shushi: '奇人境(普通)',
            fenghuo_zhujianping: '奇人境(普通)',
            fenghuo_beimihu1: '奇人境(普通)',
            fenghuo_puyuan1: '奇人境(普通)',
            fenghuo_zhugeguo: '奇人境(普通)',
            fenghuo_guanlu: '奇人境(普通)',
            fenghuo_gexuan1: '奇人境(普通)',
            fenghuo_xushao: '奇人境(普通)',
            fenghuo_zuoci1: '奇人境(普通)',
            fenghuo_zhangqiying: '奇人境(普通)',
            fenghuo_yuji: '奇人境(普通)',
            fenghuo_beimihu: '逐鹿境(精英)',
            fenghuo_gongsunyuan: '逐鹿境(普通)',
            fenghuo_weiwenzhugezhi: '逐鹿境(普通)',
            fenghuo_zhanggong: '逐鹿境(普通)',
            fenghuo_liuyan: '逐鹿境(普通)',
            fenghuo_lvkai: '逐鹿境(普通)',
            fenghuo_zhanglu: '逐鹿境(普通)',
            fenghuo_zhangqiying1: '逐鹿境(普通)',
            fenghuo_zhangxiu: '逐鹿境(普通)',
            fenghuo_hucheer: '逐鹿境(普通)',
            fenghuo_jimin: '逐鹿境(普通)',
            fenghuo_shuijun: '逐鹿境(普通)',
            fenghuo_shutanzi: '逐鹿境(普通)',
            fenghuo_lisu: '说客境(精英)',
            fenghuo_miheng1: '说客境(普通)',
            fenghuo_jianggan: '说客境(普通)',
            fenghuo_huaxin: '说客境(普通)',
            fenghuo_manchong: '说客境(普通)',
            fenghuo_xinpi1: '说客境(普通)',
            fenghuo_dengzhi: '说客境(普通)',
            fenghuo_zongyu: '说客境(普通)',
            fenghuo_yiji: '说客境(普通)',
            fenghuo_zhugeliang3: '说客境(普通)',
            fenghuo_kanze: '说客境(普通)',
            fenghuo_zhangwen: '说客境(普通)',
            fenghuo_shijie1: '说客境(普通)',
            fenghuo_rusheng: '说客境(普通)',
            fenghuo_lvbu: '眷侣境(精英)',
            fenghuo_diaochan: '眷侣境(精英)',
            fenghuo_xinniangzi: '眷侣境(普通)',
            fenghuo_liuxie3: '眷侣境(普通)',
            fenghuo_caojie2: '眷侣境(普通)',
            fenghuo_sunce2: '眷侣境(普通)',
            fenghuo_daqiao: '眷侣境(普通)',
            fenghuo_zhouyu1: '眷侣境(普通)',
            fenghuo_xiaoqiao1: '眷侣境(普通)',
            fenghuo_daxiaoqiao: '眷侣境(普通)',
            fenghuo_sunquan2: '眷侣境(普通)',
            fenghuo_bulianshi: '眷侣境(普通)',
            fenghuo_zhugeliang1: '眷侣境(普通)',
            fenghuo_huangyueying: '眷侣境(普通)',
            fenghuo_liubiao: '眷侣境(普通)',
            fenghuo_caifuren: '眷侣境(普通)',
            fenghuo_simayi1: '眷侣境(普通)',
            fenghuo_zhangchunhua: '眷侣境(普通)',
            fenghuo_zhongyao1: '眷侣境(普通)',
            fenghuo_zhangchangpu1: '眷侣境(普通)',
            fenghuo_caorui2: '眷侣境(普通)',
            fenghuo_guohuanghou1: '眷侣境(普通)',
            fenghuo_wuguotai1: '眷侣境(普通)',
            fenghuo_nvshicong: '眷侣境(普通)',
            fenghuo_jikang: '音律境(精英)',
            fenghuo_miheng: '音律境(普通)',
            fenghuo_yuren: '音律境(普通)',
            fenghuo_shixu: '音律境(普通)',
            fenghuo_zuogu: '音律境(普通)',
            fenghuo_yougu: '音律境(普通)',
            fenghuo_shenzhouyu: '音律境(普通)',
            fenghuo_caiyong: '音律境(普通)',
            fenghuo_caiwenji: '音律境(普通)',
            fenghuo_caiwenji1: '音律境(普通)',
            fenghuo_tangji: '音律境(普通)',
            fenghuo_zhugeliang: '音律境(普通)',
            fenghuo_zhoufei: '音律境(普通)',
            fenghuo_liuzan: '音律境(普通)',
            fenghuo_huaman: '南蛮境(精英)',
            fenghuo_duosidawang: '南蛮境(普通)',
            fenghuo_ahuinan: '南蛮境(普通)',
            fenghuo_dailaidongzhu: '南蛮境(普通)',
            fenghuo_dongtuna: '南蛮境(普通)',
            fenghuo_jinhuansanjie: '南蛮境(普通)',
            fenghuo_mengyou: '南蛮境(普通)',
            fenghuo_shamoke: '南蛮境(普通)',
            fenghuo_mangyachang: '南蛮境(普通)',
            fenghuo_wutugu: '南蛮境(普通)',
            fenghuo_yongshi: '南蛮境(普通)',
            fenghuo_touling: '南蛮境(普通)',
            fenghuo_zhurong: '南蛮境(普通)',
            fenghuo_menghuo: '南蛮境(普通)',
            fenghuo_panfeng: '上将境(精英)',
            fenghuo_kongxiu: '上将境(普通)',
            fenghuo_hanfu: '上将境(普通)',
            fenghuo_mengtan: '上将境(普通)',
            fenghuo_wangzhi: '上将境(普通)',
            fenghuo_bianxi: '上将境(普通)',
            fenghuo_qinqi: '上将境(普通)',
            fenghuo_caobao: '上将境(普通)',
            fenghuo_chunyuqiong2: '上将境(普通)',
            fenghuo_wuanguo: '上将境(普通)',
            fenghuo_caoxing: '上将境(普通)',
            fenghuo_panzhangmazhong: '上将境(普通)',
            fenghuo_xingdaorong: '上将境(普通)',
            fenghuo_xiahoujie: '上将境(普通)',
            fenghuo_daofushou: '上将境(普通)',
            fenghuo_jiaozhenbing: '上将境(普通)',
            fenghuo_caobuxing: '丹青境(精英)',
            fenghuo_zhugezhan: '丹青境(普通)',
            fenghuo_nvshicong4: '丹青境(普通)',
            fenghuo_caomao1: '丹青境(普通)',
            fenghuo_yangxiu: '丹青境(普通)',
            fenghuo_zhangfei: '丹青境(普通)',
            fenghuo_zhaofuren: '丹青境(普通)',
            fenghuo_huzhao1: '丹青境(普通)',
            fenghuo_shutong: '丹青境(普通)',
            fenghuo_xunxu: '丹青境(普通)',
            fenghuo_liuhong: '西园境(精英)',
            fenghuo_chunyuqiong: '西园境(普通)',
            fenghuo_xiamou: '西园境(普通)',
            fenghuo_baohong: '西园境(普通)',
            fenghuo_zhaorong: '西园境(普通)',
            fenghuo_huanguanshicong: '西园境(普通)',
            fenghuo_caocao1: '西园境(普通)',
            fenghuo_yuanshao1: '西园境(普通)',
            fenghuo_yulinjun1: '西园境(普通)',
            fenghuo_jianshuo1: '西园境(普通)',
            fenghuo_fengfang: '西园境(普通)',
            fenghuo_hanjun: '西园境(普通)',
            fenghuo_shijie: '西园境(普通)',
            fenghuo_hanxiaowei: '西园境(普通)',
            fenghuo_chenu: '西园境(普通)',
            fenghuo_liuxie: '帝王境(精英)',
            fenghuo_caorui: '帝王境(普通)',
            fenghuo_liuhong1: '帝王境(普通)',
            fenghuo_sunquan: '帝王境(普通)',
            fenghuo_liubei1: '帝王境(普通)',
            fenghuo_sunhao: '帝王境(普通)',
            fenghuo_sunxiu: '帝王境(普通)',
            fenghuo_sunliang: '帝王境(普通)',
            fenghuo_liubian: '帝王境(普通)',
            fenghuo_yuanshu: '帝王境(普通)',
            fenghuo_caopi1: '帝王境(普通)',
            fenghuo_caomao: '帝王境(普通)',
            fenghuo_liushan1: '帝王境(普通)',
            fenghuo_huxihunling: '帝王境(普通)',
            fenghuo_qinwei: '帝王境(普通)',
            fenghuo_caojie: '皇后境(精英)',
            fenghuo_guozhao: '皇后境(普通)',
            fenghuo_panshu: '皇后境(普通)',
            fenghuo_nvbing: '皇后境(普通)',
            fenghuo_bulianshi1: '皇后境(普通)',
            fenghuo_zhangxingcai: '皇后境(普通)',
            fenghuo_ganfuren1: '皇后境(普通)',
            fenghuo_fuhuanghou: '皇后境(普通)',
            fenghuo_wuxian: '皇后境(普通)',
            fenghuo_nvshicong3: '皇后境(普通)',
            fenghuo_hetaihou: '皇后境(普通)',
            fenghuo_wangrong: '皇后境(普通)',
            fenghuo_guohuanghou: '皇后境(普通)',
            fenghuo_donglaotaihou: '皇后境(普通)',
            fenghuo_bianfuren: '皇后境(普通)',
            fenghuo_zhenji: '皇后境(普通)',
            fenghuo_huatuo: '神医境(精英)',
            fenghuo_jiping: '神医境(普通)',
            fenghuo_dongfeng: '神医境(普通)',
            fenghuo_yiqibingren: '神医境(普通)',
            fenghuo_mingyixuetu: '神医境(普通)',
            fenghuo_quanyubaixing: '神医境(普通)',
            fenghuo_zhangzhongjing: '神医境(普通)',
            fenghuo_caojie1: '神医境(普通)',
            fenghuo_liuxie1: '神医境(普通)',
            fenghuo_simalang: '神医境(普通)',
            fenghuo_mizhu: '商人(特殊)',
            fenghuo_baosanniang: '华容道(特殊)',
            fenghuo_puyuan: '铁匠(特殊)',
            fenghuo_shushi1: '副将(特殊)',
            fenghuo_langqibing: '副将(特殊)',
            fenghuo_heishanjun: '副将(特殊)',
            fenghuo_yuren1: '副将(特殊)',
            fenghuo_zhitong: '副将(特殊)',
            fenghuo_cike1: '副将(特殊)',
            fenghuo_huangjinzhanji1: '副将(特殊)',
            fenghuo_fengyaojun1: '副将(特殊)',
            fenghuo_hubaoqi: '副将(特殊)',
            fenghuo_baimayicong: '副将(特殊)',
            sanying_lvbu: '三英吕布',
            hulao20_lvbu2: '鏖战虎牢',
            hulao20_lvbu1: '鏖战虎牢',
            hulao21_lvbu3: '修罗之怒',
            hulao20_lvbua: '戾火浮屠',
            hulao20_lvbub: '戾火浮屠',
            hulao21_lvbu2: '修罗之怒',
            hulao21_lvbu1: '修罗之怒',
            hulao22_lvbu3: '神威再临',
            hulao22_lvbu2: '神威再临',
            hulao22_lvbu1: '神威再临',
            hulao23_lvbu3: '神威再临',
            hulao23_lvbu2: '神威再临',
            hulao23_lvbu1: '神威再临',
            hulao24_lvbu3: '神威再临',
            hulao24_lvbu2: '神威再临',
            hulao24_lvbu1: '神威再临',
            hulaoguan_boss_zuiqiangshenhua: '最强神话',
            hulaoguan_boss_baonudezhanshen: '暴怒的战神',
            hulaoguan_boss_shenguiwuqian: '神鬼无前',
            hezong_daqin_yingzheng: '横扫六合',
            hezong_daqin_shangyang: '变法者',
            hezong_daqin_baiqi: '血战长平',
            hezong_daqin_miyue: '始太后',
            hezong_daqin_lvbuwei: '吕氏春秋',
            hezong_daqin_zhaoji: '祸乱宫闱',
            hezong_daqin_zhaogao: '沙丘谋变',
            hezong_daqin_zhangyi: '合纵连横',
            shanhe_jiudianluocha: '万妖之主',
            shanhe1_jiudianluocha: '万妖之主',
            shanhe2_jiudianluocha: '万妖之主',
            shanhe3_jiudianluocha: '万妖之主',
            shanhe_guimianxiuluo: '雾山妖鬼',
            shanhe_moluoyecha: '怒火',
            shanhe1_moluoyecha: '弩国之请',
            shanhe2_moluoyecha: '弩国之请',
            shanhe_qingtongmoxiang: '青铜魔像',
            shanhe_baiyinmoxiang: '青铜魔像',
            shanhe_qingtongkuilei: '万妖之主',
            shanhe_huangtongkuilei: '万妖之主',
            shanhe1_huangtongkuilei: '万妖之主',
            shanhe_xiejiaokuilei: '飞断阻拦',
            shanhe_moxiang: '执棋老者',
            shanhe_guzu: '荒坟骨冢',
            shanhe1_guzu: '溶洞遇袭',
            shanhe2_guzu: '溶洞遇袭',
            shanhe_xiaoyaoguai: '万妖之主',
            shanhe1_xiaoyaoguai: '万妖之主',
            shanhe_zhangqikuilei: '暴怒大蛇',
            shanhe1_zhangqikuilei: '暴怒大蛇',
            shanhe2_zhangqikuilei: '西弩国王',
            shanhe3_zhangqikuilei: '西弩国王',
            shanhe_kulou: '骷髅兵群',
            shanhe1_kulou: '骷髅兵群',
            shanhe2_kulou: '骷髅兵群',
            shanhe_xinuguowang: '西弩国王',
            shanhe1_xinuguowang: '西弩国王',
            shanhe_xinulaoguowang: '弩国之请',
            shanhe1_xinulaoguowang: '弩国之请',
            shanhe_dianqianhuwei: '弩国之请',
            shanhe_jiuweihu: '万妖之主',
            shanhe1_jiuweihu: '夜袭',
            shanhe_huoqiling: '夜袭',
            shanhe_leiqiling: '夜袭',
            shanhe_yixin: '守护之人',
            shanhe_yingzhao: '槐江山',
            shanhe_zhiliaozhenfa: '窜朝妖僧',
            shanhe_fangyuzhenfa: '窜朝妖僧',
            shanhe_chijianwuzhe: '妖怪武士',
            shanhe_lingji: '雪山之女',
            shanhe_sanshiyou: '埋伏',
            shanhe1_sanshiyou: '雾山妖鬼',
            shanhe_shuishengonggong: '不周之倾',
            shanhe_wangxiang: '河中童子',
            shanhe_shuling: '茶之花',
            shanhe_huyao: '茶之花',
            shanhe1_huyao: '西弩国王',
            shanhe2_huyao: '河中童子',
            shanhe_baihu: '林中白虎',
            shanhe1_baihu: '白虎伏林',
            shanhe_daofei: '太仓平乱',
            shanhe1_lvbu: '濮阳抗布',
            shanhe2_lvbu: '无双上将',
            shanhe_yuanshao: '箭如雨下',
            shanhe1_yuanshao: '强者之路',
            shanhe_caozhen: '曹氏霸业',
            shanhe_caohong: '宏图霸业',
            shanhe_caoren: '宏图霸业',
            shanhe_shamoke: '往昔追忆',
            shanhe_dingfeng: '雪中奋短',
            shanhe_huangzhong: '百步穿杨',
            shanhe_taishici: '百步穿杨',
            shanhe_huangzu: '百步穿杨',
            shanhe3_lvbu: '百步穿杨',
            shanhe4_lvbu: '天下无双',
            shanhe_handang: '江东虎臣',
            shanhe_gaoshun: '陷阵统帅',
            shanhe_guanyu: '强者之路',
            shanhe_liubei: '强者之路',
            shanhe1_zhangjiao: '节外生枝',
            shanhe2_zhangjiao: '节外生枝',
            shanhe3_zhangjiao: '节外生枝',
            shanhe_lvbu: '往昔追忆',
            shanhe2_baihu: '义除三害',
            shanhe_xuanfenghuanxiang: '万妖之主',
            shanhe_yinglonghuanxiang: '万妖之主',
            shanhe_yimao: '猫猫妖怪',
            shanhe_maomaoguigui: '猫猫妖怪',
            shanhe_xiangliujushe: '密林蛇影',
            shanhe1_xiangliujushe: '暴怒大蛇',
            shanhe2_xiangliujushe: '暴怒大蛇',
            shanhe_yuanniu: '牛首水妖',
            shanhe_huanzhu: '溶洞遇袭',
            shanhe_yaosengzhenjia: '窜朝妖僧',
            shanhe1_yaosengzhenjia: '窜朝妖僧',
            shanhe_kuileiguowang: '窜朝妖僧',
            shanhe_haiheshang: '暴雨之主',
            shanhe1_haiheshang: '暴雨之主',
            shanhe2_haiheshang: '暴雨之主',
            shanhe3_haiheshang: '暴雨之主',
            shanhe_feiduan: '飞断阻拦',
            shanhe1_feiduan: '飞断阻拦',
            shanhe_shenlouyaoshi: '将棋之局',
            shanhe1_shenlouyaoshi: '执棋老者',
            shanhe2_shenlouyaoshi: '执棋老者',
            shanhe_jiejianxiaogui: '执棋老者',
            shanhe_fuyuxiaogui: '执棋老者',
            shanhe_baiyannv: '无目之鬼',
            shanhe_baonunianshou: '新年大吉',
            shanhe_haizhu: '新年大吉',
            shanhe_youji: '新年大吉',
            shanhe_chenlong: '新年大吉',
            shanhe_yinhu: '新年大吉',
            shanhe_xugou: '十二生肖',
            shanhe_zishu: '十二生肖',
            shanhe_weiyang: '十二生肖',
            shanhe1_youji: '十二生肖',
            shanhe_sishe: '十二生肖',
            shanhe_shenhou: '十二生肖',
            shanhe_mengpo: '地府考验',
            shanhe_dizangwang: '地府考验',
            shanhe_changqiangshizu: '台前幕下',
            shanhe_dongzhuo: '暗巷对决',
            shanhe_shen_lvbu: '荣耀决斗',
            shanhe_qiongqi: '异兽天降',
            shanhe_taotie: '饕餮袭击',
            shanhe_hundun: '怒天之兽',
            shanhe_taowu: '梼杌巨兽',
            shanhe_gulong: '骨龙啸月',
            shanhe1_gulong: '西弩国王',
            shanhe_chi: '魍魉之妖',
            shanhe_mei: '魍魉之妖',
            shanhe_wang: '魍魉之妖',
            shanhe_liang: '魍魉之妖',
            shanhe_changgongbing: '丹泽心阵',
            shanhe_dadunbing: '丹泽心阵',
            shanhe1_dadunbing: '丹泽心阵',
            jiguan_mukui3: '机关造物',
            jiguan_jidun3: '机关造物',
            jiguan_jiren3: '机关造物',
            jiguan_sunzhua3: '机关造物',
            jiguan_musun3: '机关造物',
            jiguan_sunchi3: '机关造物',
            jiguan_muhu3: '机关造物',
            jiguan_huzhua3: '机关造物',
            jiguan_huwei3: '机关造物',
            jiguan_mukui2: '机关造物',
            jiguan_jidun2: '机关造物',
            jiguan_jiren2: '机关造物',
            jiguan_sunzhua2: '机关造物',
            jiguan_musun2: '机关造物',
            jiguan_sunchi2: '机关造物',
            jiguan_muhu2: '机关造物',
            jiguan_huzhua2: '机关造物',
            jiguan_huwei2: '机关造物',
            jiguan_mukui1: '机关造物',
            jiguan_jidun1: '机关造物',
            jiguan_jiren1: '机关造物',
            jiguan_sunzhua1: '机关造物',
            jiguan_musun1: '机关造物',
            jiguan_sunchi1: '机关造物',
            jiguan_muhu1: '机关造物',
            jiguan_huzhua1: '机关造物',
            jiguan_huwei1: '机关造物',
            shanhe_zhanzhengmoxiang: '濡须会师',
            shanhe2_gulong: '骨龙临世',
            shanhe_zhuque: '围攻洛阳',
            shanhe_qinglong: '围攻洛阳',
            shanhe1_qinglong: '义除三害',
            shanhe_heiwuchang: '阴阳两隔',
            shanhe_baiwuchang: '阴阳两隔',
            shanhe_mamian: '厉鬼收魂',
            shanhe_niutou: '厉鬼收魂',
            shanhe_shoumenshishi: '石狮生灵',
            shanhe_shipixie: '辟邪显灵',
            shanhe_huoyanche: '精妙绝伦',
            shanhe_toushiji: '精妙绝伦',
            shanhe_jianta: '精妙绝伦',
            shanhe_zhuangchengchui: '精妙绝伦',
            shanhe_juyuan: '锁灵台前',
            shanhe_shizhu: '锁灵台前',
            shanhe1_shinv: '雪中奋短',
            shanhe2_shinv: '雪中奋短',
            shanhe_liaoshangshinv: '公覆之约',
            shanhe1_shuizei: '勇猛水贼',
            shanhe2_shuizei: '勇猛水贼',
            shanhe3_shuizei: '勇猛水贼',
            shanhe_shibing: '蛮族之乱',
            shanhe_qibing: '威震华夏',
            shanhe_caocaojinwei: '近卫出征',
            shanhe_weiguoqibing: '千里奔袭',
            shanhe1_weiguoqibing: '决战合肥',
            shanhe_baimayicong: '强者之路',
            shanhe_gongbing: '西羌国主',
            shanhe1_gongbing: '长驱直入',
            shanhe2_gongbing: '长驱直入',
            shanhe1_dunbing: '长驱直入',
            shanhe2_dunbing: '长驱直入',
            shanhe1_qiangbing: '长驱直入',
            shanhe2_qiangbing: '长驱直入',
            shanhe_shuguogongbing: '正面对决',
            shanhe_shuguodunbing: '正面对决',
            shanhe_cikeswl: '武库夜袭',
            shanhe_cikeqbj: '桥上遇刺',
            shanhe_maoyao: '妖猫倩影',
            shanhe_yaoseng: '亦正亦邪',
            shanhe_shengseng: '亦正亦邪',
            shanhe_zhuchi: '打坐老僧',
            shanhe_tenglong: '龙战于野',
            shanhe_fenghuang: '凤凰于飞',
            shanhe_feng: '烈焰焚天',
            shanhe_huang: '烈焰焚天',
          },
          dynamicTranslate: {
            hzc_xiandun(player) {
              if (player.storage.hzc_xiandun && player.storage.hzc_xiandun > 0) return '锁定技,①你不能被翻面或横置,延时类锦囊一定判定失败,不能成为其他角色拼点的目标,使用牌的次数不受技能减少,防止异常死亡且本局游戏共可复活' + Math.ceil(player.storage.hzc_xiandun / 2) + '次.<br>②回合开始时,你回复装备栏并重置武将牌,摸牌阶段摸牌时,你额外摸' + Math.ceil(player.storage.hzc_xiandun / 2) + '张牌,出牌阶段可使用【杀】的次数改为' + player.storage.hzc_xiandun + ',手牌上限改为' + player.maxHp + ',你计算与其他角色的距离-' + player.storage.hzc_xiandun + ',其他角色计算与你的距离' + Math.ceil(0.5 * Math.max(player.maxHp - player.storage.hzc_xiandun, 1)) + '.<br>③你的体力上限变化无效,每回合你至多受到' + Math.ceil(player.storage.hzc_xiandun / 2) + '点伤害且准备/结束/出牌阶段或受到伤害后,你可随机获得一个此阶段/时机可发动的技能.';
              return '锁定技,①你不能被翻面或横置,延时类锦囊一定判定失败,不能成为其他角色拼点的目标,使用牌的次数不受技能减少,防止异常死亡且本局游戏可复活X/2(向上取整)次.<br>②游戏开始时,你记录『仙遁数』为X(X为1至体力上限间的任意整数).<br>③回合开始时,你回复装备栏并重置武将牌,摸牌阶段摸牌时,你额外摸X/2(向上取整)张牌,出牌阶段可使用【杀】的次数改为X,手牌上限改为Y(Y为体力上限),你计算与其他角色的距离-X,其他角色计算与你的距离+(Y-X)/2(向上取整).<br>④你的体力上限变化无效,每回合你至多受到X/2(向上取整)点伤害且准备/结束/出牌阶段或受到伤害后,你可随机获得一个此阶段/时机可发动的技能.';
            },
            huoshao_xiaoguo(player) {
              if (player.countMark('huoshao_xiaoguo') > 0) return '其他角色的结束阶段开始时,若你未被横置,你可以弃置一张牌,令该角色选择一项:1.弃置' + Math.min(5, 1 + player.countMark('huoshao_xiaoguo')) + '张装备牌,你摸' + Math.min(5, 1 + player.countMark('huoshao_xiaoguo')) + '张牌;2.受到你对其造成的' + Math.min(5, 1 + player.countMark('huoshao_xiaoguo')) + '点伤害.(每次发动技能两个选项中数字+1,至多为5)';
              return '其他角色的结束阶段开始时,若你未被横置,你可以弃置一张牌,令该角色选择一项:1.弃置1张装备牌,你摸1张牌;2.受到你对其造成的1点伤害.(每次发动技能两个选项中数字+1,至多为5)';
            },
            huoshao_zhanjian(player) {
              if (player.storage.huoshao_zhanjian == 1) return '锁定技,你无法被横置.当你的体力值小于5时,该技能失效.';
              if (player.storage.huoshao_zhanjian == 2) return '锁定技,你无法被横置.当你的体力值小于10时,该技能失效.';
              if (player.storage.huoshao_zhanjian == 3) return '锁定技,你无法被横置.当你的体力值降低到一半以下(向上取整)时,该技能失效.';
              if (player.storage.huoshao_zhanjian == 4) return '锁定技,你无法被横置.当你受到过10点以上伤害时,该技能失效.';
              if (player.storage.huoshao_zhanjian == 5) return '锁定技,你无法被横置.当你的手牌小于5张时,该技能失效.';
              if (player.storage.huoshao_zhanjian == 6) return '锁定技,你无法被横置.当你的手牌小于2张时,该技能失效.';
              if (player.storage.huoshao_zhanjian == 7) return '锁定技,你无法被横置.当你的装备区没有装备牌时,该技能失效.';
              if (player.storage.huoshao_zhanjian == 8) return '锁定技,你无法被横置.当你处于受伤状态时,该技能失效.';
              if (player.storage.huoshao_zhanjian == 9) return '锁定技,你无法被横置.当你本回合成为过3张以上锦囊牌目标后时,该技能失效.';
              if (player.storage.huoshao_zhanjian == 10) return '锁定技,你无法被横置.当你本回合成为过3张以上基本牌目标后时,该技能失效.';
              return '锁定技,你无法被横置.';
            },
            shanhe_kunfen(player) {
              if (player.storage.shanhe_kunfen) return '结束阶段开始时,你可以失去1点体力,摸两张牌.';
              return '锁定技,结束阶段开始时,你失去1点体力,摸两张牌.';
            },
            NS_shouhun(player) {
              if (player.storage.NS_shouhun) return '锁定技,你的摸牌数+' + player.storage.NS_shouhun[0] + '、手牌上限+' + player.storage.NS_shouhun[1] + '、体力上限+' + player.storage.NS_shouhun[2] + ';当你受到伤害时,令兽魂效果中数值最低的一项数值+1.(所有效果最大+3)';
              return '锁定技,你的摸牌数+0、手牌上限+0、体力上限+0;当你受到伤害时,令兽魂效果中数值最低的一项数值+1.(所有效果最大+3)';
            },
          },
          translate: {
            wjldc: '无尽乱斗场',
            huanzhejing: '宦者境(祸国之伥)',
            xiyuanjing: '西园境(西园校尉)',
            huangjinjing: '黄巾境(黄天当立)',
            mokejing: '墨客境(笔走龙蛇)',
            yinlvjing: '音律境(高山流水)',
            nanmanjing: '南蛮境(南溟百蛮)',
            shangjiangjing: '上将境(无双上将)',
            qirenjing: '奇人境(奇人异士)',
            shenyijing: '神医境(妙手回春)',
            juanlvjing: '眷侣境(情衷千古)',
            diwangjing: '帝王境(九五之尊)',
            huanghoujing: '皇后境(母仪天下)',
            shuikejing: '说客境(纵横捭阖)',
            haoshoujing: '皓首境(老当益壮)',
            jingbingjing: '精兵境(金戈铁马)',
            cikejing: '刺客境(白虹贯日)',
            danqingjing: '丹青境(画龙点睛)',
            qiangwangjing: '枪王境(枪出如龙)',
            cimujing: '慈母境(寸心草晖)',
            zhulujing: '逐鹿境(逐鹿中原)',
            luanwujing: '乱武境(春秋乱武)',
            moudingjing: '谋定境(谋定天下)',
            taipingjing: '太平境(太平盛世)',
            baonuejing: '暴虐境(天地不仁)',
            shensujing: '神速境(风驰电掣)',
            luanjijing: '乱击境(万箭齐发)',
            xiliangjing: '西凉境(西凉铁骑)',
            xiongjijing: '雄骑境(铁马冰河)',
            fhlt_teshujuese: '特殊角色',
            shanglinchulie: '上林出猎',
            chunfengfangzhiyuan: '春风放纸鸢',
            diy: '自制武将',
            taixuhuanjing: '太虚幻境',
            quguizhuxie: '驱鬼逐邪',
            shidianyanluo: '十殿阎罗',
            shenwuzaishi: '神武再世',
            qianlizoudanji: '千里走单骑',
            gonghuishenshou: '公会神兽',
            zhengzhanhulao: '征战虎牢',
            tongqueduopao: '铜雀夺袍',
            hulaoguan: '虎牢关',
            qihuanzhizheng: '戚宦之争',
            huoshaochibi: '火烧赤壁',
            wenhetaoni: '文和讨逆',
            longzhouzhengdu: '龙舟争渡',
            zhuhoufadong: '诸侯伐董',
            shanhetu_wujiang: '山河图·武将',
            shanhetu_shibing: '山河图·士兵',
            shanhetu_teshu: '山河图·特殊',
            jiangejuezhan: '剑阁决战',
            shenzhishilian: '神之试炼',
            kuibaliandong: '魁拔联动',
            tianshuluandou: '天书乱斗',
            olnianshou: 'OL年兽',
            mobileBOSS: '手杀BOSS',
            qingqingzijin: '青青子衿',
            chaoshikongmitan: '超时空密探',
            nianshoudazuozhan: '年兽大作战',
            hezongkangqin: '合纵抗秦',
            jiguanzaowu: '机关造物',
            zhongyeguanxing: '仲夜观星',
            shezhan_luji: '陆绩',
            shezhan_yufan: '虞翻',
            shezhan_yanjun: '严畯',
            shezhan_zhangzhang: '张昭张纮',
            shezhan_xuezong: '薛综',
            waiqi_hejin: '何进',
            neihuan_zhangrang: '张让',
            neihuan_zhaozhong: '赵忠',
            waiqi_hetaihou: '何太后',
            Waiqi_hejin: '何进',
            Neihuan_zuofeng: '左丰',
            Neihuan_zhangrang: '张让',
            Neihuan_zhaozhong: '赵忠',
            Waiqi_hetaihou: '何太后',
            LongZhou_hebo: '河伯',
            LongZhou_yuershen: '于儿神',
            LongZhou_caoe: '曹娥',
            LongZhou_taoshen: '涛神',
            longzhou_taoshen: '涛神',
            longzhou_caoe: '曹娥',
            longzhou_zuogu: '左鼓',
            longzhou_yougu: '右鼓',
            TianShu_hanba: '旱魃',
            tianshu_hanba: '旱魃',
            Tianshu_hanba: '旱魃',
            Tianshu_hanbaa: '旱魃',
            tianshu_baiqi: '白起',
            Tianshu_baiqi: '白起',
            Tianshu_baiqia: '白起',
            Tianshu_baiqib: '白起',
            tianshu_baiqia: '白起',
            TianShu_kuafu: '夸父',
            tianshu_kuafu: '夸父',
            Tianshu_kuafu: '夸父',
            Tianshu_kuafua: '夸父',
            tianshu_kuafua: '夸父',
            TianShu_xuannv: '玄女',
            tianshu_xuannv: '玄女',
            Tianshu_xuannv: '玄女',
            tianshu_xuannva: '玄女',
            Tianshu_xuannva: '玄女',
            tianshu_qinglong: '青龙',
            Tianshu_qinglong: '青龙',
            Tianshu_qinglonga: '青龙',
            Tianshu_qinglongb: '青龙',
            tianshu_baihu: '白虎',
            Tianshu_baihu: '白虎',
            Tianshu_baihua: '白虎',
            tianshu_zhuque: '朱雀',
            Tianshu_zhuque: '朱雀',
            Tianshu_zhuquea: '朱雀',
            Tianshu_zhuqueb: '朱雀',
            tianshu_xuanwu: '玄武',
            Tianshu_xuanwu: '玄武',
            Tianshu_xuanwua: '玄武',
            shanhe_jiudianluocha: '酒癫罗刹',
            shanhe1_jiudianluocha: '酒癫罗刹',
            shanhe2_jiudianluocha: '酒癫罗刹',
            shanhe3_jiudianluocha: '酒癫罗刹',
            shanhe_guimianxiuluo: '鬼面修罗',
            shanhe_moluoyecha: '魔罗夜叉',
            shanhe1_moluoyecha: '魔罗夜叉',
            shanhe2_moluoyecha: '魔罗夜叉',
            shanhe_qingtongmoxiang: '青铜魔像',
            shanhe_baiyinmoxiang: '白银魔像',
            shanhe_qingtongkuilei: '青铜傀儡',
            shanhe_huangtongkuilei: '黄铜傀儡',
            shanhe1_huangtongkuilei: '黄铜傀儡',
            shanhe_xiejiaokuilei: '邪教傀儡',
            shanhe_moxiang: '魔像',
            shanhe_guzu: '骨卒',
            shanhe1_guzu: '骨卒',
            shanhe2_guzu: '骨卒',
            shanhe_xiaoyaoguai: '小妖怪',
            shanhe1_xiaoyaoguai: '小妖怪',
            shanhe_zhangqikuilei: '瘴气傀儡',
            shanhe1_zhangqikuilei: '瘴气傀儡',
            shanhe2_zhangqikuilei: '瘴气傀儡',
            shanhe3_zhangqikuilei: '瘴气傀儡',
            shanhe_kulou: '骷髅',
            shanhe1_kulou: '骷髅',
            shanhe2_kulou: '骷髅',
            shanhe_xinuguowang: '西弩国王',
            shanhe1_xinuguowang: '西弩国王',
            shanhe_xinulaoguowang: '西弩老国王',
            shanhe1_xinulaoguowang: '西弩老国王',
            shanhe_dianqianhuwei: '殿前护卫',
            shanhe_jiuweihu: '九尾狐',
            shanhe1_jiuweihu: '九尾狐',
            shanhe_huoqiling: '火麒麟',
            shanhe_leiqiling: '雷麒麟',
            shanhe_yixin: '一心',
            shanhe_yingzhao: '英招',
            shanhe_zhiliaozhenfa: '治疗阵法',
            shanhe_fangyuzhenfa: '防御阵法',
            shanhe_chijianwuzhe: '痴剑武者',
            shanhe_lingji: '凌姬',
            shanhe_sanshiyou: '三逝友',
            shanhe1_sanshiyou: '三逝友',
            shanhe_shuishengonggong: '水神共工',
            shanhe_wangxiang: '魍象',
            shanhe_shuling: '树灵',
            shanhe_huyao: '虎妖',
            shanhe1_huyao: '虎妖',
            shanhe2_huyao: '虎妖',
            shanhe_baihu: '白虎',
            shanhe1_baihu: '受伤的白虎',
            shanhe_daofei: '饥饿的盗匪',
            shanhe_dingfeng: '丁奉',
            shanhe_yuanshao: '袁绍',
            shanhe1_yuanshao: '袁绍',
            shanhe_caozhen: '曹真',
            shanhe_caohong: '曹洪',
            shanhe_caoren: '曹仁',
            shanhe_huangzhong: '黄忠',
            shanhe_shamoke: '沙摩柯',
            shanhe_huangzu: '黄祖',
            shanhe_taishici: '太史慈',
            shanhe1_lvbu: '吕布',
            shanhe2_lvbu: '吕布',
            shanhe3_lvbu: '吕布',
            shanhe4_lvbu: '吕布',
            shanhe_lvbu: '暴怒的战神',
            shanhe_guanyu: '关羽',
            shanhe_liubei: '刘备',
            shanhe_gaoshun: '高顺',
            shanhe_handang: '韩当',
            shanhe1_zhangjiao: '大贤良师',
            shanhe2_zhangjiao: '黄巾首领',
            shanhe3_zhangjiao: '天公将军',
            shanhe2_baihu: '白虎',
            shanhe_xuanfenghuanxiang: '玄凤幻象',
            shanhe_yinglonghuanxiang: '应龙幻象',
            shanhe_yimao: '异猫',
            shanhe_maomaoguigui: '猫猫鬼鬼',
            shanhe_xiangliujushe: '相柳巨蛇',
            shanhe1_xiangliujushe: '相柳巨蛇',
            shanhe2_xiangliujushe: '相柳巨蛇',
            shanhe_yuanniu: '怨牛',
            shanhe_huanzhu: '幻蛛',
            shanhe_yaosengzhenjia: '妖僧真迦',
            shanhe1_yaosengzhenjia: '妖僧真迦',
            shanhe_kuileiguowang: '傀儡国王',
            shanhe_haiheshang: '海和尚',
            shanhe1_haiheshang: '海和尚',
            shanhe2_haiheshang: '海和尚',
            shanhe3_haiheshang: '海和尚',
            shanhe_feiduan: '飞断',
            shanhe1_feiduan: '飞断',
            shanhe_shenlouyaoshi: '蜃楼妖师',
            shanhe1_shenlouyaoshi: '蜃楼妖师',
            shanhe2_shenlouyaoshi: '蜃楼妖师',
            shanhe_jiejianxiaogui: '节俭小鬼',
            shanhe_fuyuxiaogui: '富裕小鬼',
            shanhe_baiyannv: '百眼女',
            shanhe_baonunianshou: '暴怒年兽',
            shanhe_haizhu: '亥猪',
            shanhe_youji: '酉鸡',
            shanhe1_youji: '酉鸡',
            shanhe_weiyang: '未羊',
            shanhe_zishu: '子鼠',
            shanhe_xugou: '戌狗',
            shanhe_sishe: '巳蛇',
            shanhe_shenhou: '申猴',
            shanhe_chenlong: '辰龙',
            shanhe_yinhu: '寅虎',
            shanhe_mengpo: '孟婆',
            shanhe_dizangwang: '地藏王',
            shanhe_changqiangshizu: '长枪士卒',
            shanhe_qiongqi: '穷奇',
            shanhe_taotie: '饕餮',
            shanhe_hundun: '混沌',
            shanhe_taowu: '梼杌',
            shanhe_gulong: '骨龙',
            shanhe1_gulong: '骨龙',
            shanhe2_gulong: '骨龙',
            shanhe_heiwuchang: '黑无常',
            shanhe_baiwuchang: '白无常',
            shanhe_mamian: '马面',
            shanhe_niutou: '牛头',
            shanhe_shoumenshishi: '守门石狮',
            shanhe_huoyanche: '火焰车',
            shanhe_jianta: '箭塔',
            shanhe_toushiji: '投石机',
            shanhe_zhuangchengchui: '撞城锤',
            shanhe_shipixie: '石辟邪',
            shanhe_fenghuang: '凤凰',
            shanhe_feng: '凤',
            shanhe_huang: '凰',
            shanhe_zhanzhengmoxiang: '战争魔像',
            shanhe_juyuan: '巨猿',
            shanhe_shizhu: '石柱',
            shanhe_gongbing: '弓兵',
            shanhe1_gongbing: '弓兵',
            shanhe2_gongbing: '弓兵',
            shanhe1_dunbing: '盾兵',
            shanhe2_dunbing: '盾兵',
            shanhe1_qiangbing: '枪兵',
            shanhe2_qiangbing: '枪兵',
            shanhe_shuguogongbing: '蜀国弓兵',
            shanhe_shuguodunbing: '蜀国盾兵',
            shanhe1_shinv: '侍女',
            shanhe2_shinv: '侍女',
            shanhe_liaoshangshinv: '疗伤侍女',
            shanhe1_shuizei: '水贼',
            shanhe2_shuizei: '水贼',
            shanhe3_shuizei: '水贼',
            shanhe_shibing: '士兵',
            shanhe_qibing: '骑兵',
            shanhe_caocaojinwei: '曹操禁卫',
            shanhe_weiguoqibing: '魏国骑兵',
            shanhe1_weiguoqibing: '魏国骑兵',
            shanhe_baimayicong: '白马义从',
            shanhe_cikeswl: '刺客四五六',
            shanhe_cikeqbj: '刺客七八九',
            shanhe_maoyao: '猫妖',
            shanhe_yaoseng: '妖僧',
            shanhe_shengseng: '圣僧',
            shanhe_zhuchi: '住持',
            shanhe_tenglong: '腾龙',
            shanhe_zhuque: '朱雀',
            shanhe_qinglong: '青龙',
            shanhe1_qinglong: '青龙',
            shanhe_chi: '魑',
            shanhe_mei: '魅',
            shanhe_wang: '魍',
            shanhe_liang: '魉',
            shanhe_changgongbing: '长弓兵',
            shanhe_dadunbing: '大盾兵',
            shanhe1_dadunbing: '大盾兵',
            olNS_nianshoupucong: '年兽仆从',
            nianshoupucong: '年兽仆从',
            nianshoupucong1: '年兽仆从',
            nianshouweiwu: '年兽魏吴',
            nianshouweiqun: '年兽魏群',
            nianshouweishu: '年兽魏蜀',
            nianshouwuqun: '年兽吴群',
            nianshoushuqun: '年兽蜀群',
            nianshoushuwu: '年兽蜀吴',
            nianshoudashu: '年兽大蜀',
            nianshoudawei: '年兽大魏',
            nianshoudawu: '年兽大吴',
            nianshoudaqun: '年兽大群',
            nianshoudashu4: '年兽大蜀',
            nianshoudawei4: '年兽大魏',
            nianshoudawu4: '年兽大吴',
            nianshoudaqun4: '年兽大群',
            xishoudashu: '夕兽大蜀',
            xishoudawei: '夕兽大魏',
            xishoudawu: '夕兽大吴',
            xishoudaqun: '夕兽大群',
            nianshoudashu1: '年兽大蜀',
            nianshoudawei1: '年兽大魏',
            nianshoudawu1: '年兽大吴',
            nianshoudaqun1: '年兽大群',
            xishoudashu1: '夕兽大蜀',
            xishoudawei1: '夕兽大魏',
            xishoudawu1: '夕兽大吴',
            xishoudaqun1: '夕兽大群',
            nianshoupucong2: '年兽仆从',
            nianshoudashu2: '年兽大蜀',
            nianshoudawei2: '年兽大魏',
            nianshoudawu2: '年兽大吴',
            nianshoudaqun2: '年兽大群',
            xishoudashu2: '夕兽大蜀',
            xishoudawei2: '夕兽大魏',
            xishoudawu2: '夕兽大吴',
            xishoudaqun2: '夕兽大群',
            nianxi_dajinhu1: '大金虎',
            nianxi_dajinhu2: '大金虎',
            nianxi_xiaojinhu1: '小金虎',
            nianxi_xiaojinhu2: '小金虎',
            nianxiboss_jinniu: '金牛',
            nianxiboss_jinniu1: '金牛',
            nianxiboss_jinniu2: '金牛',
            zhongye_qinglong: '青龙',
            zhongye_baihu: '白虎',
            zhongye_zhuque: '朱雀',
            zhongye_xuanwu: '玄武',
            nianshoupucong3: '年兽仆从',
            nianshoudashu3: '年兽大蜀',
            nianshoudawei3: '年兽大魏',
            nianshoudawu3: '年兽大吴',
            nianshoudaqun3: '年兽大群',
            xishoudashu3: '夕兽大蜀',
            xishoudawei3: '夕兽大魏',
            xishoudawu3: '夕兽大吴',
            xishoudaqun3: '夕兽大群',
            shidian_qinguangwang: '秦广王',
            shidian_chujiangwang: '楚江王',
            shidian_songdiwang: '宋帝王',
            shidian_wuguanwang: '五官王',
            shidian_yanluowang: '阎罗王',
            shidian_bianchengwang: '卞城王',
            shidian_taishanwang: '泰山王',
            shidian_dushiwang: '都市王',
            shidian_pingdengwang: '平等王',
            shidian_zhuanlunwang: '转轮王',
            shidian_mengpo: '孟婆',
            shidian_dizangwang: '地藏王',
            hulao20_lvbu2: '吕布',
            hulao20_lvbu1: '吕布',
            hulao20_lvbua: '吕布',
            hulao20_lvbub: '吕布',
            hulao21_lvbu3: '吕布',
            hulao21_lvbu2: '吕布',
            hulao21_lvbu1: '吕布',
            hulao24_lvbu1: '吕布',
            hulao24_lvbu2: '吕布',
            hulao24_lvbu3: '吕布',
            danji_qinqi: '秦琪',
            qianli_qinqi2: '秦琪',
            qianli_qinqi: '秦琪',
            danji_wangzhi: '王植',
            qianli_wangzhi: '王植',
            danji_bianxi1: '卞喜',
            danji_bianxi2: '卞喜',
            danji_bianxi3: '卞喜',
            qianli_bianxi: '卞喜',
            danji_daofushou1: '刀斧手',
            danji_daofushou2: '刀斧手',
            danji_daofushou3: '刀斧手',
            danji_pujing: '普净和尚',
            danji_hanfu: '韩福',
            danji_mengtan: '孟坦',
            danji_kongxiu1: '孔秀',
            danji_kongxiu2: '孔秀',
            danji_kongxiu3: '孔秀',
            qianli_hanfu: '韩福',
            qianli_mengtan: '孟坦',
            qianli_kongxiu: '孔秀',
            danji_huban: '胡班',
            zhongye_canshuiyuan: '参水猿',
            zhongye_kuimulang: '奎木狼',
            zhongye_yihuoshe: '翼火蛇',
            zhongye_xingrima: '星日马',
            zhongye_kangjinlong: '亢金龙',
            zhongye_jiaomujiao: '角木蛟',
            zhongye_weiyueyan: '危月燕',
            zhongye_doumuxie: '斗木獬',
            shenshou_chiwen: '螭吻',
            shenshou_bian: '狴犴',
            shenshou_pulao: '蒲牢',
            shenshou_suanni: '狻猊',
            shenshou_yazi: '睚眦',
            shenshou_bixi: '赑屃',
            shenshou_fuxi: '负屃',
            shenshou_qiuniu: '囚牛',
            shenshou_chaofeng: '嘲风',
            longzhou_caoea: '曹娥',
            longzhou_taoshena: '涛神',
            qugui2_yanluowang1: '阎罗王',
            qugui2_yanluowang2: '阎罗王',
            qugui2_yanluowang3: '阎罗王',
            Tianshu_yanluowang1: '阎罗王',
            Tianshu_yanluowang2: '阎罗王',
            Tianshu_guiwang1: '鬼王',
            Tianshu_guiwang2: '鬼王',
            qugui2_guiwang1: '鬼王',
            qugui2_guiwang2: '鬼王',
            qugui2_niutou: '牛头',
            qugui2_mamian: '马面',
            qugui2_heiwuchang: '黑无常',
            Tianshu_riyeyoushen1: '日夜游神',
            Tianshu_riyeyoushen2: '日夜游神',
            qugui2_riyeyoushen1: '日夜游神',
            qugui2_riyeyoushen2: '日夜游神',
            qugui2_riyeyoushen3: '日夜游神',
            Tianshu_niutoumamian1: '牛头马面',
            Tianshu_niutoumamian2: '牛头马面',
            qugui2_niutoumamian1: '牛头马面',
            qugui2_niutoumamian2: '牛头马面',
            qugui2_niutoumamian3: '牛头马面',
            Tianshu_heibaiwuchang: '黑白无常',
            qugui2_heibaiwuchang1: '黑白无常',
            qugui2_heibaiwuchang2: '黑白无常',
            qugui2_heibaiwuchang3: '黑白无常',
            qugui2_baiwuchang: '白无常',
            Tianshu_mengpo1: '孟婆',
            Tianshu_mengpo2: '孟婆',
            qugui2_mengpo: '孟婆',
            qugui2_mengpo1: '孟婆',
            qugui2_mengpo2: '孟婆',
            qugui2_mengpo3: '孟婆',
            Tianshu_yvsai1: '鱼鳃',
            Tianshu_yvsai2: '鱼鳃',
            qugui2_yvsai: '鱼鳃',
            qugui2_yvsai1: '鱼鳃',
            qugui2_yvsai2: '鱼鳃',
            Tianshu_niaozui1: '鸟嘴',
            Tianshu_niaozui2: '鸟嘴',
            QuGui2_niaozui: '鸟嘴',
            qugui2_niaozui: '鸟嘴',
            qugui2_niaozui1: '鸟嘴',
            qugui2_niaozui2: '鸟嘴',
            qugui2_niaozui3: '鸟嘴',
            Tianshu_huangfeng1: '黄蜂',
            Tianshu_huangfeng2: '黄蜂',
            QuGui2_huangfeng: '黄蜂',
            qugui2_huangfeng: '黄蜂',
            qugui2_huangfeng1: '黄蜂',
            qugui2_huangfeng2: '黄蜂',
            qugui2_huangfeng3: '黄蜂',
            Tianshu_baowei1: '豹尾',
            Tianshu_baowei2: '豹尾',
            qugui2_baowei: '豹尾',
            qugui2_baowei1: '豹尾',
            qugui2_baowei2: '豹尾',
            qugui2_baowei3: '豹尾',
            sanying_lvbu: '吕布',
            hulaoguan_lijue: '李傕',
            hulaoguan_guosi: '郭汜',
            hulaoguan_fanchou: '樊稠',
            hulaoguan_zhangji: '张济',
            xinhulaoguan_lijue: '李傕',
            xinhulaoguan_guosi: '郭汜',
            xinhulaoguan_fanchou: '樊稠',
            xinhulaoguan_zhangji: '张济',
            xinhulaoguan_caoxing: '曹性',
            xinhulaoguan_chengong: '陈宫',
            xinhulaoguan_gaoshun: '高顺',
            xinhulaoguan_dongxie: '董翓',
            hulaoguan_huaxiong: '华雄',
            xinhulaoguan_huaxiong: '华雄',
            hulaoguan_caoxing: '曹性',
            hulaoguan_chengong: '陈宫',
            Hulaoguan_chengong: '陈宫',
            hulaoguan_gaoshun: '高顺',
            hulaoguan_dongxie: '董翓',
            zhengzhan_huaxiong: '华雄',
            zhengzhan_caoxing: '曹性',
            zhengzhan_chengong: '陈宫',
            zhengzhan_gaoshun: '高顺',
            zhengzhan_dongxie: '董翓',
            hulaoguan_fengyaojun: '凤瑶军',
            hulaoguan_longxiangjun: '龙骧军',
            hulaoguan_hubenjun: '虎贲军',
            hulaoguan_feixiongjun: '飞熊军',
            hulaoguan_baolvejun: '豹掠军',
            hulaoguan_tanlangjun: '贪狼军',
            Tianshu1_jiaxu: '贾诩',
            Tianshu2_jiaxu: '贾诩',
            TianShu1_jiaxu: '贾诩',
            TianShu2_jiaxu: '贾诩',
            TianShu_huoshenzhurong: '火神祝融',
            tianshu_huoshenzhurong: '火神祝融',
            Tianshu_huoshenzhurong: '火神祝融',
            Tianshu_huoshenzhuronga: '火神祝融',
            TianShu_shuishengonggong: '水神共工',
            tianshu_shuishengonggong: '水神共工',
            Tianshu_shuishengonggong: '水神共工',
            Tianshu_shuishengonggonga: '水神共工',
            sy_shuishengonggong: '水神共工',
            sy_shuishenxuanming: '水神玄冥',
            sy_jinshenrushou: '金神蓐收',
            sy_mushengoumang: '木神勾芒',
            sy_shujing: '树精',
            sy_mingxingzhu: '明刑柱',
            sy_zhuque: '朱雀',
            sy_qinglong: '青龙',
            sy_baihu: '白虎',
            sy_xuanwu: '玄武',
            sy_huoshenzhurong: '火神祝融',
            sy_yanling: '焰灵',
            sy_yandi: '炎帝',
            sy_taihao: '太昊',
            sy_shaohao: '少昊',
            sy_zhuanxu: '颛顼',
            whlw_jiaxu: '贾诩',
            whlw_lijue: '李傕',
            whlw_guosi: '郭汜',
            whlw_fanchou: '樊稠',
            whlw_zhangji: '张济',
            whlw1_jiaxu: '贾诩',
            whlw1_lijue: '李傕',
            whlw1_guosi: '郭汜',
            whlw1_fanchou: '樊稠',
            whlw1_zhangji: '张济',
            whlw2_jiaxu: '贾诩',
            whlw2_lijue: '李傕',
            whlw2_guosi: '郭汜',
            whlw2_fanchou: '樊稠',
            whlw2_zhangji: '张济',
            wenhe_jiaxu: '魔贾诩',
            wenhe_lijue: '魔李傕',
            wenhe_guosi: '魔郭汜',
            wenhe_fanchou: '魔樊稠',
            wenhe_zhangji: '魔张济',
            WenHe_jiaxu: '魔贾诩',
            WenHe_lijue: '魔李傕',
            WenHe_guosi: '魔郭汜',
            WenHe_fanchou: '魔樊稠',
            WenHe_zhangji: '魔张济',
            qunying_shenzhugeliang: '神诸葛亮',
            qunying_shenlvbu: '神吕布',
            qunying_shenzhouyu: '神周瑜',
            qqzj_caocao: '曹操',
            qqzj_simayi: '司马懿',
            qqzj_lvbu: '吕布',
            qqzj_dongzhuo: '董卓',
            qqzj_zhangjiao: '张角',
            qqzj_yuanshu: '袁术',
            TianShu_shaohao: '少昊',
            tianshu_shaohao: '少昊',
            Tianshu_shaohao: '少昊',
            Tianshu_shaohaoa: '少昊',
            tianshu_hanbaa: '旱魃',
            qunying_zuoci1: '左慈',
            qunying_zuoci2: '左慈',
            qunying_zuoci3: '左慈',
            qunying_lvbu: '吕布',
            qunying_zhugeliang: '诸葛亮',
            qunying_zhouyu: '周瑜',
            fenghuo_zhangrang: '张让',
            fenghuo_zhangrang1: '张让',
            fenghuo_taosheng: '陶升',
            fenghuo_limin: '李旻',
            fenghuo_caorui: '曹叡',
            fenghuo_sunhao: '孙皓',
            fenghuo_sunhao1: '孙皓',
            fenghuo_sunxiu: '孙休',
            fenghuo_sunliang: '孙亮',
            fenghuo_liubian: '刘辩',
            fenghuo_caomao: '曹髦',
            fenghuo_caomao1: '曹髦',
            fenghuo_zhaozhong: '赵忠',
            fenghuo_duangui: '段珪',
            fenghuo_chenkuang: '程旷',
            fenghuo_fengxu: '封谞',
            fenghuo_houlan: '侯览',
            fenghuo_xiayun: '夏恽',
            fenghuo_guosheng: '郭胜',
            fenghuo_cenhun: '岑昏',
            fenghuo_cenhun1: '岑昏',
            fenghuo_huanghao: '黄皓',
            fenghuo_zuofeng: '左丰',
            fenghuo_zuofeng1: '左丰',
            fenghuo_huanguanshicong: '宦官侍从',
            fenghuo_shicong: '侍从',
            fenghuo_shushicong: '蜀侍从',
            fenghuo_wushicong: '吴侍从',
            fenghuo_zhongyao: '钟繇',
            fenghuo_zhongyao1: '钟繇',
            fenghuo_zhongyao2: '钟繇',
            fenghuo_chenlin: '陈琳',
            fenghuo_xuezong: '薛综',
            fenghuo_wangcan: '王粲',
            fenghuo_qinmi: '秦宓',
            fenghuo_ruanyu: '阮瑀',
            fenghuo_caozhi: '曹植',
            fenghuo_kongrong: '孔融',
            qunying_yuji: '于吉',
            qunying_zhangjiao: '张角',
            neihuan_guosheng: '郭胜',
            neihuan_xiayun: '夏恽',
            neihuan_chenkuang: '程旷',
            neihuan_houlan: '侯览',
            neihuan_jianshuo: '蹇硕',
            neihuan_caojie: '曹节',
            fenghuo_qiangbingxuetu: '枪兵学徒',
            fenghuo_tongyuan: '童渊',
            fenghuo_tongyuan1: '童渊',
            fenghuo_huangfusong: '皇甫嵩',
            fenghuo_huangfusong1: '皇甫嵩',
            fenghuo_sunce: '孙策',
            fenghuo_zhangren: '张任',
            fenghuo_sunce1: '孙策',
            fenghuo_sunce2: '孙策',
            fenghuo_daqiao: '大乔',
            fenghuo_daxiaoqiao: '大乔小乔',
            fenghuo_zhangliao1: '张辽',
            fenghuo_lijue: '李傕',
            fenghuo_wuyi: '吴懿',
            neihuan_fengxu: '封谞',
            neihuan_duangui: '段珪',
            Neihuan_guosheng: '郭胜',
            Neihuan_xiayun: '夏恽',
            Neihuan_chenkuang: '程旷',
            Neihuan_houlan: '侯览',
            Neihuan_jianshuo: '蹇硕',
            Neihuan_caojie: '曹节',
            Neihuan_fengxu: '封谞',
            Neihuan_duangui: '段珪',
            Kuiba_shengzhujun1: '圣助军',
            Kuiba_shengjiejun1: '圣捷军',
            Kuiba_shenghujun1: '圣护军',
            Kuiba_shengdoujun1: '圣斗军',
            Kuiba_lingluanjun1: '灵乱军',
            Kuiba_lingxunjun1: '灵迅军',
            Kuiba_lingzhanjun1: '灵战军',
            Kuiba_lingshoujun1: '灵守军',
            Kuiba_shengzhujun2: '圣助军',
            Kuiba_shengjiejun2: '圣捷军',
            Kuiba_shenghujun2: '圣护军',
            Kuiba_shengdoujun2: '圣斗军',
            Kuiba_lingluanjun2: '灵乱军',
            Kuiba_lingxunjun2: '灵迅军',
            Kuiba_lingzhanjun2: '灵战军',
            Kuiba_lingshoujun2: '灵守军',
            Kuiba_shengzhujun3: '圣助军',
            Kuiba_shengjiejun3: '圣捷军',
            Kuiba_shenghujun3: '圣护军',
            Kuiba_shengdoujun3: '圣斗军',
            Kuiba_lingluanjun3: '灵乱军',
            Kuiba_lingxunjun3: '灵迅军',
            Kuiba_lingzhanjun3: '灵战军',
            Kuiba_lingshoujun3: '灵守军',
            Kuiba_jingxin1: '镜心',
            Kuiba_jingxin2: '镜心',
            Kuiba_jingxin3: '镜心',
            Kuiba_manjia: '蛮吉(觉醒)',
            Kuiba_manjia_ab: '蛮吉',
            Kuiba_manjib: '蛮吉(觉醒)',
            Kuiba_manjib_ab: '蛮吉',
            Kuiba_manjic: '蛮吉(觉醒)',
            Kuiba_manjic_ab: '蛮吉',
            Kuiba_manji3: '蛮吉',
            Kuiba_manji1: '蛮吉',
            Kuiba_manji2: '蛮吉',
            fenghuo_nanhualaoxian: '南华老仙',
            fenghuo_nanhualaoxian1: '南华老仙',
            fenghuo_zhangdaoling: '张道陵',
            fenghuo_zhujianping: '朱建平',
            fenghuo_shushi: '术士',
            fenghuo_shushi1: '术士',
            fenghuo_langqibing: '狼骑兵',
            fenghuo_heishanjun: '黑山军',
            fenghuo_yuren1: '玉人',
            fenghuo_zhitong: '稚童',
            fenghuo_cike1: '刺客',
            fenghuo_huangjinzhanji1: '黄巾战姬',
            fenghuo_fengyaojun1: '凤瑶军',
            fenghuo_hubaoqi: '虎豹骑',
            fenghuo_baimayicong: '白马义从',
            Kuiba_kalaxiaokepana: '卡拉肖克潘(觉醒)',
            Kuiba_kalaxiaokepana_ab: '卡拉肖克潘',
            Kuiba_kalaxiaokepanb: '卡拉肖克潘(觉醒)',
            Kuiba_kalaxiaokepanb_ab: '卡拉肖克潘',
            Kuiba_kalaxiaokepanc: '卡拉肖克潘(觉醒)',
            Kuiba_kalaxiaokepanc_ab: '卡拉肖克潘',
            Kuiba_haiwenxianga: '海问香(觉醒)',
            Kuiba_haiwenxianga_ab: '海问香',
            Kuiba_haiwenxiangb: '海问香(觉醒)',
            Kuiba_haiwenxiangb_ab: '海问香',
            Kuiba_haiwenxiangc: '海问香(觉醒)',
            Kuiba_haiwenxiangc_ab: '海问香',
            Kuiba_youmikuanga: '幽弥狂(觉醒)',
            Kuiba_youmikuanga_ab: '幽弥狂',
            Kuiba_youmikuangb: '幽弥狂(觉醒)',
            Kuiba_youmikuangb_ab: '幽弥狂',
            Kuiba_youmikuangc: '幽弥狂(觉醒)',
            Kuiba_youmikuangc_ab: '幽弥狂',
            Kuiba_kalaxiaokepan1: '卡拉肖克潘',
            Kuiba_kalaxiaokepan2: '卡拉肖克潘',
            Kuiba_kalaxiaokepan3: '卡拉肖克潘',
            Kuiba_haiwenxiang1: '海问香',
            Kuiba_haiwenxiang2: '海问香',
            Kuiba_haiwenxiang3: '海问香',
            Kuiba_youmikuang1: '幽弥狂',
            Kuiba_youmikuang2: '幽弥狂',
            Kuiba_youmikuang3: '幽弥狂',
            hezong_daqin_yingzheng: '嬴政',
            hezong_daqin_shangyang: '商鞅',
            hezong_daqin_nushou: '秦军弩手',
            hezong_daqin_qibing: '秦军骑兵',
            hezong_daqin_bubing: '秦军步兵',
            hezong_daqin_baiqi: '白起',
            hezong_daqin_miyue: '芈月',
            hezong_daqin_lvbuwei: '吕不韦',
            hezong_daqin_zhaoji: '赵姬',
            hezong_daqin_zhaogao: '赵高',
            hezong_daqin_zhangyi: '张仪',
            sw_hundun: '混沌',
            sw_zhuyan: '朱厌',
            sw_qiongqi: '穷奇',
            sw_taotie: '饕餮',
            sw_bifang: '毕方',
            sw_taowu: '梼杌',
            sw_xiangliu: '相柳',
            sw_yingzhao: '英招',
            Sw_hundun: '混沌',
            Sw_zhuyan: '朱厌',
            Sw_qiongqi: '穷奇',
            Sw_taotie: '饕餮',
            Sw_bifang: '毕方',
            Sw_taowu: '梼杌',
            Sw_xiangliu: '相柳',
            Sw_yingzhao: '英招',
            sw_zhuyin: '烛阴',
            shanhai_zhuyin: '烛阴',
            shanhai_hundun: '混沌',
            shanhai_taowu: '梼杌',
            shanhai_qiongqi: '穷奇',
            shanhai_taotie: '饕餮',
            wjldc: '无尽乱斗场',
            Waiqi_caocao: '曹操',
            Waiqi_yuanshao: '袁绍',
            Waiqi_guotufengji: '郭图逢纪',
            Waiqi_yanwen: '颜良文丑',
            Waiqi_caoang: '曹昂',
            Waiqi_yuanshu: '袁术',
            Waiqi_jushou: '沮授',
            Waiqi_caoren: '曹仁',
            Waiqi_xuyou: '许攸',
            waiqi_caocao: '曹操',
            waiqi_yuanshao: '袁绍',
            waiqi_guotufengji: '郭图逢纪',
            waiqi_yanwen: '颜良文丑',
            waiqi_caoang: '曹昂',
            waiqi_yuanshu: '袁术',
            waiqi_jushou: '沮授',
            waiqi_caoren: '曹仁',
            waiqi_xuyou: '许攸',
            waiqi_chenlin: '陈琳',
            waiqi_xiahouyuan: '夏侯渊',
            waiqi_xiahoudun: '夏侯惇',
            Waiqi_xunyou: '荀攸',
            waiqi_xunyou: '荀攸',
            tsld: '天书乱斗',
            bzts: '百战天书',
            xn_xiaosha: '小杀',
            xn_xiaotao: '小桃',
            xn_xiaoshan: '小闪',
            xn_xiaojiu: '小酒',
            xn_xiaole: '小乐',
            fenghuo_xinniangzi: '新娘子',
            fenghuo_xinniangzi1: '新娘子',
            fenghuo_diaochan: '貂蝉',
            fenghuo_diaochan1: '貂蝉',
            fenghuo_diaochan2: '貂蝉',
            fenghuo_lijue1: '李傕',
            fenghuo_guosi: '郭汜',
            fenghuo_zhangji: '张济',
            fenghuo_fanchou: '樊稠',
            fenghuo_wangyun: '王允',
            fenghuo_wangyun1: '王允',
            fenghuo_longxiangjun: '龙骧军',
            fenghuo_longxiangjun1: '龙骧军',
            fenghuo_hubenjun: '虎贲军',
            fenghuo_hubenjun1: '虎贲军',
            fenghuo_feixiongjun: '飞熊军',
            fenghuo_feixiongjun1: '飞熊军',
            fenghuo_tanlangjun: '贪狼军',
            fenghuo_tanlangjun1: '贪狼军',
            fenghuo_baolvejun: '豹掠军',
            fenghuo_fengyaojun: '凤瑶军',
            fenghuo_hanjun1: '汉军',
            fenghuo_wuhuanbing: '乌桓兵',
            fenghuo_moushi: '谋士',
            fenghuo_lvbu: '吕布',
            fenghuo_lvbu1: '吕布',
            fenghuo_lvbu2: '吕布',
            fenghuo_rusheng: '儒生',
            fenghuo_lisu: '李肃',
            fenghuo_zhangning: '张宁',
            fenghuo_huangjindaogu: '黄巾道姑',
            fenghuo_huangjinbing: '黄巾兵',
            fenghuo_huangjinshouling: '黄巾首领',
            fenghuo_zhangjiao: '张角',
            fenghuo_zhangbao: '张宝',
            fenghuo_zhangliang: '张梁',
            fenghuo_guanhai: '管亥',
            fenghuo_zhangyan: '张燕',
            fenghuo_huangjinzhanji: '黄巾战姬',
            fenghuo_zhangmancheng: '张曼成',
            fenghuo_bocai: '波才',
            fenghuo_suigu: '眭固',
            fenghuo_tangzhou: '唐周',
            fenghuo_chenyuanzhi: '程远志',
            fenghuo_yudu: '于毒',
            fenghuo_busi: '卜巳',
            fenghuo_dengmao: '邓茂',
            fenghuo_bairao: '白绕',
            fenghuo_peiyuanshao: '裴元绍',
            fenghuo_huangtianleixiao: '黄天雷枭',
            fenghuo_huangtianshiba: '黄天尸魃',
            fenghuo_simayi: '司马懿',
            fenghuo_simayi1: '司马懿',
            fenghuo_guojia: '郭嘉',
            fenghuo_jiaxu1: '贾诩',
            fenghuo_lusu: '鲁肃',
            fenghuo_luxun: '陆逊',
            fenghuo_zhouyu: '周瑜',
            fenghuo_zhouyu1: '周瑜',
            fenghuo_pangtong: '庞统',
            fenghuo_wolongzhugeliang: '诸葛亮',
            fenghuo_xunyu: '荀彧',
            fenghuo_xugou: '戌狗',
            fenghuo_nianshouyin: '年兽阴',
            fenghuo_xingrima: '星日马',
            fenghuo_qinglong: '青龙',
            fenghuo_kuimulang: '奎木狼',
            fenghuo_zhuque: '朱雀',
            fenghuo_jiaxu: '贾诩',
            fenghuo_dading: '大鼎',
            fenghuo_dading1: '大鼎',
            fenghuo_huxihunling: '护玺魂灵',
            fenghuo_qinwei: '亲卫',
            fenghuo_hanjun: '汉军',
            fenghuo_shijie: '使节',
            fenghuo_shijie1: '使节',
            fenghuo_hanxiaowei: '汉校尉',
            fenghuo_chenu: '车弩',
            fenghuo_puyuan: '蒲元',
            fenghuo_puyuan1: '蒲元',
            fenghuo_xushao: '许劭',
            fenghuo_zhugeguo: '诸葛果',
            fenghuo_guanlu: '管辂',
            fenghuo_zhangqiying: '张琪瑛',
            fenghuo_mizhu: '糜竺',
            fenghuo_baosanniang: '鲍三娘',
            fenghuo_liuhong: '刘宏',
            fenghuo_liuhong1: '刘宏',
            fenghuo_liuhong2: '刘宏',
            fenghuo_chengong: '陈宫',
            fenghuo_sunquan: '孙权',
            fenghuo_sunquan1: '孙权',
            fenghuo_sunquan2: '孙权',
            fenghuo_bulianshi: '步练师',
            fenghuo_bulianshi1: '步练师',
            fenghuo_nvbing: '女兵',
            fenghuo_caorui1: '曹叡',
            fenghuo_caorui2: '曹叡',
            fenghuo_wuguotai: '吴国太',
            fenghuo_wuguotai1: '吴国太',
            fenghuo_yuanshu: '袁术',
            fenghuo_liuxie: '刘协',
            fenghuo_liuxie1: '刘协',
            fenghuo_liuxie2: '刘协',
            fenghuo_liuxie3: '刘协',
            fenghuo_caojie: '曹节',
            fenghuo_guozhao: '郭照',
            fenghuo_panshu: '潘淑',
            fenghuo_wangrong: '王荣',
            fenghuo_wangrong1: '王荣',
            fenghuo_hetaihou: '何太后',
            fenghuo_guohuanghou: '郭皇后',
            fenghuo_guohuanghou1: '郭皇后',
            fenghuo_donglaotaihou: '董老太后',
            fenghuo_bianfuren: '卞夫人',
            fenghuo_caojie1: '曹节',
            fenghuo_caojie2: '曹节',
            fenghuo_caojie3: '曹节',
            fenghuo_simalang: '司马朗',
            fenghuo_huatuo: '华佗',
            fenghuo_huatuo1: '华佗',
            fenghuo_jiping: '吉平',
            fenghuo_dongfeng: '董奉',
            fenghuo_zhangzhongjing: '张仲景',
            fenghuo_yiqibingren: '疫气病人',
            fenghuo_mingyixuetu: '名医学徒',
            fenghuo_quanyubaixing: '痊愈百姓',
            fenghuo_jiping1: '吉平',
            fenghuo_liubei: '刘备',
            fenghuo_liuyu: '刘虞',
            fenghuo_caochong: '曹冲',
            fenghuo_youmumin: '游牧民',
            fenghuo_liushan1: '刘禅',
            fenghuo_liushan2: '刘禅',
            fenghuo_liubei1: '刘备',
            fenghuo_gengniu: '耕牛',
            fenghuo_gengniu1: '耕牛',
            fenghuo_liushan: '刘禅',
            fenghuo_ganfuren: '甘夫人',
            fenghuo_ganfuren1: '甘夫人',
            fenghuo_wuxian: '吴苋',
            fenghuo_fuhuanghou: '伏皇后',
            fenghuo_zhangxingcai: '张星彩',
            fenghuo_zhangxingcai1: '张星彩',
            fenghuo_zhangchangpu: '张昌蒲',
            fenghuo_huangyueying: '黄月英',
            fenghuo_zhangchangpu1: '张昌蒲',
            fenghuo_zhonghui: '钟会',
            fenghuo_zhoufei1: '周妃',
            fenghuo_xiaoqiao: '小乔',
            fenghuo_xiaoqiao1: '小乔',
            fenghuo_yuanshao: '袁绍',
            fenghuo_yuanwei: '袁隗',
            fenghuo_yuanfeng: '袁逢',
            fenghuo_lvkuanglvxiang: '吕旷吕翔',
            fenghuo_xunchen: '荀谌',
            fenghuo_yanwen: '颜良文丑',
            fenghuo_zhanghe: '张郃',
            fenghuo_zhanghe1: '张郃',
            fenghuo_gaolan: '高览',
            fenghuo_quyi: '麴义',
            fenghuo_guotufengji: '郭图逢纪',
            fenghuo_xuyou: '许攸',
            fenghuo_xinpi: '辛毗',
            fenghuo_xinpi1: '辛毗',
            fenghuo_yiji: '伊籍',
            fenghuo_kanze: '阚泽',
            fenghuo_huaxin: '华歆',
            fenghuo_manchong: '满宠',
            fenghuo_dengzhi: '邓芝',
            fenghuo_zhangwen: '张温',
            fenghuo_zhangwena: '张温',
            fenghuo_jianggan: '蒋干',
            fenghuo_tianfeng: '田丰',
            fenghuo_jushou: '沮授',
            fenghuo_yuanshao1: '袁绍',
            fenghuo_xiamou: '夏牟',
            fenghuo_zhaorong: '赵融',
            fenghuo_baohong: '鲍鸿',
            fenghuo_chunyuqiong: '淳于琼',
            fenghuo_chunyuqiong1: '淳于琼',
            fenghuo_chunyuqiong2: '淳于琼',
            fenghuo_machao: '马超',
            fenghuo_machao1: '马超',
            fenghuo_baixing: '百姓',
            fenghuo_xiaoli: '小吏',
            fenghuo_kaoshanfu: '靠山妇',
            fenghuo_guanyu: '关羽',
            fenghuo_guanyu1: '关羽',
            fenghuo_machao2: '马超',
            fenghuo_machao3: '马超',
            fenghuo_zhanghu: '张虎',
            fenghuo_guanyu2: '关羽',
            fenghuo_yangwan: '杨婉',
            fenghuo_pangde: '庞德',
            fenghuo_liangxing: '梁兴',
            fenghuo_liangxing1: '梁兴',
            fenghuo_hansui: '韩遂',
            fenghuo_hansui1: '韩遂',
            fenghuo_licaiwei: '李采薇',
            fenghuo_wangyi: '王异',
            fenghuo_huaxiong: '华雄',
            fenghuo_madai: '马岱',
            fenghuo_madai1: '马岱',
            fenghuo_madai2: '马岱',
            fenghuo_mateng: '马腾',
            fenghuo_caochun: '曹纯',
            fenghuo_lvboshe: '吕伯奢',
            fenghuo_panjun: '叛军',
            fenghuo_caocao: '曹操',
            fenghuo_caocao1: '曹操',
            fenghuo_caocao2: '曹操',
            fenghuo_caocao3: '曹操',
            fenghuo_caocao4: '曹操',
            fenghuo_caocao5: '曹操',
            fenghuo_weiyan: '魏延',
            fenghuo_xunyou: '荀攸',
            fenghuo_tanzi: '探子',
            fenghuo_jianshuo: '蹇硕',
            fenghuo_jianshuo1: '蹇硕',
            fenghuo_fengfang: '冯方',
            fenghuo_zhangliao: '张辽',
            fenghuo_gongsunzan: '公孙瓒',
            fenghuo_gongsunzan1: '公孙瓒',
            fenghuo_caozhang: '曹彰',
            fenghuo_xusheng: '徐盛',
            fenghuo_chengpu1: '程普',
            fenghuo_gaoshun: '高顺',
            fenghuo_shenguanyu: '神关羽',
            fenghuo_guanxingzhangbao: '关兴张苞',
            fenghuo_lingtong: '凌统',
            fenghuo_lingtong1: '凌统',
            fenghuo_xiahouyuan: '夏侯渊',
            fenghuo_ganning: '甘宁',
            fenghuo_lvmeng: '吕蒙',
            fenghuo_dengai: '邓艾',
            fenghuo_wangping: '王平',
            fenghuo_xiahouba: '夏侯霸',
            fenghuo_caoxiu: '曹休',
            fenghuo_heqi: '贺齐',
            fenghuo_beimihu1: '卑弥呼',
            fenghuo_yuji: '于吉',
            fenghuo_yuji1: '于吉',
            fenghuo_xurong: '徐荣',
            fenghuo_xurong1: '徐荣',
            fenghuo_dongzhuo: '董卓',
            fenghuo_dongzhuo2: '董卓',
            fenghuo_dongzhuo3: '董卓',
            fenghuo_beimihu: '卑弥呼',
            fenghuo_gongsunyuan: '公孙渊',
            fenghuo_gongsunyuan1: '公孙渊',
            fenghuo_weiwenzhugezhi: '卫温诸葛直',
            fenghuo_zhanggong: '张恭',
            fenghuo_liuyan: '刘焉',
            fenghuo_lvkai: '吕凯',
            fenghuo_zhanglu: '张鲁',
            fenghuo_zhangqiying1: '张琪瑛',
            fenghuo_zhangxiu: '张绣',
            fenghuo_zhangxiu1: '张绣',
            fenghuo_jiangwei: '姜维',
            fenghuo_mayunlu: '马云禄',
            fenghuo_zhaoyun: '赵云',
            fenghuo_zhaoyun1: '赵云',
            fenghuo_hucheer: '胡车儿',
            fenghuo_shuijun: '水军',
            fenghuo_jimin: '饥民',
            fenghuo_jimin1: '饥民',
            fenghuo_shutanzi: '蜀探子',
            fenghuo_jikang: '嵇康',
            fenghuo_jikang1: '嵇康',
            fenghuo_miheng: '祢衡',
            fenghuo_miheng1: '祢衡',
            fenghuo_yuren: '玉人',
            fenghuo_zuogu: '左鼓',
            fenghuo_yougu: '右鼓',
            fenghuo_shenzhouyu: '神周瑜',
            fenghuo_caiwenji: '蔡文姬',
            fenghuo_caiwenji1: '蔡文姬',
            fenghuo_caiwenji2: '蔡文姬',
            fenghuo_caiyong: '蔡邕',
            fenghuo_caiyong1: '蔡邕',
            fenghuo_caiyong2: '蔡邕',
            fenghuo_tangji: '唐姬',
            fenghuo_zhoufei: '周妃',
            fenghuo_liuzan: '留赞',
            fenghuo_zhugeliang: '诸葛亮',
            fenghuo_zhugeliang1: '诸葛亮',
            fenghuo_zhugeliang2: '诸葛亮',
            fenghuo_zhugeliang3: '诸葛亮',
            fenghuo_zhugeliang4: '诸葛亮',
            fenghuo_liubiao: '刘表',
            fenghuo_weidun: '尾敦',
            fenghuo_zongyu: '宗预',
            fenghuo_caifuren: '蔡夫人',
            fenghuo_zhangchunhua: '张春华',
            fenghuo_nvshicong: '女侍从',
            fenghuo_nvshicong1: '女侍从',
            fenghuo_nvshicong2: '女侍从',
            fenghuo_nvshicong3: '女侍从',
            fenghuo_nvshicong4: '女侍从',
            fenghuo_duosidawang: '朵思大王',
            fenghuo_ahuinan: '阿会喃',
            fenghuo_dongtuna: '董荼那',
            fenghuo_dailaidongzhu: '带来洞主',
            fenghuo_jinhuansanjie: '金环三结',
            fenghuo_mengyou: '孟优',
            fenghuo_mangyachang: '忙牙长',
            fenghuo_wutugu: '兀突骨',
            fenghuo_shamoke: '沙摩柯',
            fenghuo_yongshi: '勇士',
            fenghuo_touling: '头领',
            fenghuo_zhurong: '祝融',
            fenghuo_zhurong1: '祝融',
            fenghuo_zhenji: '甄姬',
            fenghuo_zhenji1: '甄姬',
            fenghuo_menghuo: '孟获',
            fenghuo_huaman: '花鬘',
            fenghuo_huaman1: '花鬘',
            fenghuo_panfeng: '潘凤',
            fenghuo_kongxiu: '孔秀',
            fenghuo_hanfu: '韩福',
            fenghuo_mengtan: '孟坦',
            fenghuo_caobao: '曹豹',
            fenghuo_wangzhi: '王植',
            fenghuo_bianxi: '卞喜',
            fenghuo_qinqi: '秦琪',
            fenghuo_wuanguo: '武安国',
            fenghuo_xingdaorong: '邢道荣',
            fenghuo_xiahoujie: '夏侯杰',
            fenghuo_caoxing: '曹性',
            fenghuo_panzhangmazhong: '潘璋马忠',
            fenghuo_jiaozhenbing: '叫阵兵',
            fenghuo_daofushou: '刀斧手',
            fenghuo_caobuxing: '曹不兴',
            fenghuo_zhugezhan: '诸葛瞻',
            fenghuo_zhaofuren: '赵夫人',
            fenghuo_yangxiu: '杨修',
            fenghuo_yangxiu1: '杨修',
            fenghuo_zhangfei: '张飞',
            fenghuo_zhangfei1: '张飞',
            fenghuo_huzhao: '胡昭',
            fenghuo_caopi: '曹丕',
            fenghuo_shixu: '师勖',
            fenghuo_caopi1: '曹丕',
            fenghuo_huzhao1: '胡昭',
            fenghuo_xunxu: '荀勖',
            fenghuo_shutong: '书童',
            fenghuo_zhaoxiang: '赵襄',
            fenghuo_zhaoxiang1: '赵襄',
            fenghuo_huangjinbing1: '黄巾兵',
            fenghuo_danyangbing: '丹阳兵',
            fenghuo_yangzhoujun: '扬州军',
            fenghuo_xuzhoujun: '徐州军',
            fenghuo_zhenchabing: '侦察兵',
            fenghuo_tengjiabing: '藤甲兵',
            fenghuo_shuijun1: '水军',
            fenghuo_qingzhoubing: '青州兵',
            fenghuo_qinweibing: '亲卫兵',
            fenghuo_yulinjun: '羽林军',
            fenghuo_yulinjun1: '羽林军',
            fenghuo_cike: '刺客',
            fenghuo_nvcike: '女刺客',
            fenghuo_hanlong: '韩龙',
            fenghuo_wufu: '伍孚',
            fenghuo_fanjiangzhangda: '范疆张达',
            fenghuo_xugong: '许贡',
            fenghuo_lingju: '灵睢',
            fenghuo_lingju1: '灵睢',
            fenghuo_huangzhong: '黄忠',
            fenghuo_zhangzhaozhanghong: '张昭张纮',
            fenghuo_zhangzhaozhanghong1: '张昭张纮',
            fenghuo_chengpu: '程普',
            fenghuo_chengyu: '程昱',
            fenghuo_lvdai: '吕岱',
            fenghuo_liaohua: '廖化',
            fenghuo_yanyan: '严颜',
            fenghuo_yanyan1: '严颜',
            fenghuo_wanglang: '王朗',
            fenghuo_simahui: '司马徽',
            fenghuo_luzhi: '卢植',
            fenghuo_gexuan: '葛玄',
            fenghuo_gexuan1: '葛玄',
            fenghuo_zuoci: '左慈',
            fenghuo_zuoci1: '左慈',
            fenghuo_taoqian: '陶谦',
            fenghuo_taoqian1: '陶谦',
            fenghuo_maodiepingmin: '耄耋平民',
            olsx_zishu: '子鼠',
            olsx_chouniu: '丑牛',
            olsx_yinhu: '寅虎',
            olsx_maotu: '卯兔',
            olsx_chenlong: '辰龙',
            olsx_sishe: '巳蛇',
            olsx_wuma: '午马',
            olsx_weiyang: '未羊',
            olsx_shenhou: '申猴',
            olsx_youji: '酉鸡',
            olsx_xugou: '戌狗',
            olsx_haizhu: '亥猪',
            mitan_mitan1: '密探',
            mitan_mitan2: '密探',
            mitan_mitan3: '密探',
            mitan_caocao: '曹操',
            mitan_lingju: '灵雎',
            mitan_xugong: '许贡',
            mitan_caosong: '曹嵩',
            mitan_liufeng: '刘封',
            mitan_caomao: '曹髦',
            mitan_liuyong: '刘永',
            mitan_caopi: '曹丕',
            mitan_caorui: '曹叡',
            mitan_liubei: '刘备',
            mitan_liushan: '刘禅',
            mitan_sunce: '孙策',
            mitan_sunhao: '孙皓',
            mitan_sunxiu: '孙休',
            mitan_sunquan: '孙权',
            mitan_sunliang: '孙亮',
            mitan_liuchen: '刘谌',
            zzhl: '征战虎牢',
            olns: 'OL年兽',
            qgzx: '驱鬼逐邪',
            slcl: '上林出猎',
            jgzw: '机关造物',
            hulao22_lvbu3: '吕布',
            hulao22_lvbu2: '吕布',
            hulao22_lvbu1: '吕布',
            hulao23_lvbu3: '吕布',
            hulao23_lvbu2: '吕布',
            hulao23_lvbu1: '吕布',
            syzlb: '三英战吕布',
            hzkq1: '篇章模式',
            hzkq5: '匹配模式',
            shty: '山河图妖',
            sdyl: '十殿阎罗',
            shidian_chi: '魑',
            shidian_mei: '魅',
            shidian_wang: '魍',
            shidian_liang: '魉',
            shidian_heiwuchang: '黑无常',
            shidian_baiwuchang: '白无常',
            shidian_niutou: '牛头',
            shidian_mamian: '马面',
            shidian_yecha: '夜叉',
            shidian_luocha: '罗刹',
            qugui_chi: '魑',
            qugui_mei: '魅',
            qugui_wang: '魍',
            qugui_liang: '魉',
            qugui_heiwuchang: '黑无常',
            qugui_baiwuchang: '白无常',
            qugui_niutou: '牛头',
            qugui_mamian: '马面',
            qugui_yecha: '夜叉',
            qugui_luocha: '罗刹',
            QuGui_chi: '魑',
            QuGui_mei: '魅',
            QuGui_wang: '魍',
            QuGui_liang: '魉',
            QuGui_heiwuchang: '黑无常',
            QuGui_baiwuchang: '白无常',
            QuGui_niutou: '牛头',
            QuGui_mamian: '马面',
            QuGui_yecha: '夜叉',
            QuGui_luocha: '罗刹',
            shanhai_chi: '魑',
            shanhai_mei: '魅',
            shanhai_wang: '魍',
            shanhai_liang: '魉',
            shanhai_heiwuchang: '黑无常',
            shanhai_baiwuchang: '白无常',
            shanhai_niutou: '牛头',
            shanhai_mamian: '马面',
            shanhai_yecha: '夜叉',
            shanhai_luocha: '罗刹',
            old_mengmengnianshou: '萌萌年兽',
            old_renxingnianshou: '任性年兽',
            old_baonunianshou: '暴怒年兽',
            old_ruizhinianshou: '睿智年兽',
            old_nianshou: '年兽',
            old_nianshou1: '年兽',
            ol_renxingnianshou: '任性年兽',
            ol_ruizhinianshou: '睿智年兽',
            ol_baonunianshou: '暴怒年兽',
            old_nianshoua: '年兽',
            old_nianshoub: '年兽',
            old_nianshouc: '年兽',
            ol_old_nianshou: '年兽',
            ol_old_nianshou1: '年兽',
            ol_old_nianshou2: '年兽',
            ol_old_nianshou3: '年兽',
            ol_nianshou3: '困难年兽',
            ol_nianshou3_ab: '年兽',
            ol_nianshou2: '普通年兽',
            ol_nianshou2_ab: '年兽',
            ol_nianshou1: '简单年兽',
            ol_nianshou1_ab: '年兽',
            shanhai_qingnv1: '青女',
            shanhai_qingnv2: '青女',
            shanhai_jiuweihu: '九尾狐',
            HH_nianshou: '年兽',
            shanhai_nianshou: '年兽',
            shanhai_xuanwuzhenshen: '玄武真身',
            shanhai_zhuquezhenshen: '朱雀真身',
            hulaoguan_boss_zuiqiangshenhua: '神吕布',
            hulaoguan_boss_baonudezhanshen: '神吕布',
            hulaoguan_boss_shenguiwuqian: '神吕布',
            olNS_nianshouyang: '年兽阳',
            olNS_nianshouyin: '年兽阴',
            tongque_caocao: '曹操',
            Tongque_caocao: '曹操',
            tongque_caozhen: '曹真',
            Tongque_caozhen: '曹真',
            tongque_chengyu: '程昱',
            huoshao_chengyu: '程昱',
            tongque_chenlin: '陈琳',
            Tongque_chenlin: '陈琳',
            tongque_xuzhu: '许褚',
            Tongque_xuzhu: '许褚',
            huoshao_xuzhu: '许褚',
            tongque_yujin: '于禁',
            Tongque_yujin: '于禁',
            huoshao_yujin: '于禁',
            tongque_xiahouyuan: '夏侯渊',
            Tongque_xiahouyuan: '夏侯渊',
            huoshao_xiahouyuan: '夏侯渊',
            tongque_wanglang: '王朗',
            Tongque_wanglang: '王朗',
            tongque_zhongyao: '钟繇',
            Tongque_zhongyao: '钟繇',
            tongque_wangcan: '王粲',
            tongque_zhanghe: '张郃',
            Tongque_zhanghe: '张郃',
            huoshao_zhanghe: '张郃',
            tongque_xuhuang: '徐晃',
            Tongque_xuhuang: '徐晃',
            huoshao_xuhuang: '徐晃',
            huoshao_caohong: '曹洪',
            huoshao_yuejin: '乐进',
            huoshao_xiahoudun: '夏侯惇',
            huoshao_lidian: '李典',
            huoshao_caocao: '曹操',
            huoshao_zhangliao: '张辽',
            huoshao_xunyou: '荀攸',
            huoshao_wenpin: '文聘',
            tongque_caozhi: '曹植',
            Tongque_caozhi: '曹植',
            tongque_caopi: '曹丕',
            tongque_caoxiu: '曹休',
            Tongque_caoxiu: '曹休',
            tongque_laiyinger: '来莺儿',
            Tongque_laiyinger: '来莺儿',
            tongque_jinpao: '锦袍',
            mitan_wuliuqi: '伍六七',
            mitan_meihuashisan: '♣️️十三',
            zhiyuan_zhoufei: '周妃',
            zhiyuan_huangyueying: '黄月英',
            zhiyuan_yuzheng: '鱼筝',
            zhiyuan_yanzheng: '燕筝',
            zhiyuan_diezheng: '蝶筝',
            Shanglin_laohu: '虎',
            ShangLin_laohu: '虎',
            shanglin_laohu: '虎',
            ShangLin_lang: '狼',
            Shanglin_lang: '狼',
            shanglin_lang: '狼',
            Shanglin_lu: '鹿',
            shanglin_lu: '鹿',
            Shanglin_huli: '狐',
            shanglin_huli: '狐',
            Shanglin_laohu1: '虎',
            Shanglin_laohu2: '虎',
            shanglin_laohu1: '虎',
            Shanglin_lang1: '狼',
            ShangLin_lang1: '狼',
            shanglin_lang1: '狼',
            Shanglin_lu1: '鹿',
            shanglin_lu1: '鹿',
            Shanglin_huli1: '狐',
            shanglin_huli1: '狐',
            Shanglin_lang2: '狼',
            shanglin_lang2: '狼',
            Shanglin_lu2: '鹿',
            shanglin_lu2: '鹿',
            Shanglin_huli2: '狐',
            shanglin_huli2: '狐',
            Shanglin_caocong: '草丛',
            shanglin_caocong: '草丛',
            jiange_yunpingqinglong: '云屏青龙',
            jiange_lingjiaxuanwu: '灵甲玄武',
            jiange_chiyuzhuque: '炽羽朱雀',
            jiange_jileibaihu: '机雷白虎',
            jiange_fudibian: '缚地狴犴',
            jiange_tuntianchiwen: '吞天螭吻',
            jiange_shihuosuanni: '食火狻猊',
            jiange_lieshiyazi: '裂石睚眦',
            jiange_elaiziman: '恶来子满',
            jiange_baijiwenyuan: '百计文远',
            jiange_jiarenzidan: '佳人子丹',
            jiange_yiyongwenze: '毅勇文泽',
            jiange_duanyuzhongda: '断狱仲达',
            jiange_juechenmiaocai: '绝尘妙才',
            jiange_kumuyuanrang: '枯木元让',
            jiange_qiaokuijunyi: '巧魁儁乂',
            jiange_fuweizilong: '扶危子龙',
            jiange_yihanyunchang: '翊汉云长',
            jiange_yuhuoshiyuan: '浴火士元',
            jiange_weiwuyide: '威武翼德',
            jiange_liedixuande: '烈帝玄德',
            jiange_shenjianhansheng: '神箭汉升',
            jiange_gongshenyueying: '工神月英',
            jiange_tianhoukongming: '天侯孔明',
            jiguan_mukui3: '木傀',
            jiguan_jidun3: '机盾',
            jiguan_jiren3: '机刃',
            jiguan_sunzhua3: '隼爪',
            jiguan_musun3: '木隼',
            jiguan_sunchi3: '隼翅',
            jiguan_muhu3: '木虎',
            jiguan_huzhua3: '虎爪',
            jiguan_huwei3: '虎尾',
            jiguan_mukui2: '木傀',
            jiguan_jidun2: '机盾',
            jiguan_jiren2: '机刃',
            jiguan_sunzhua2: '隼爪',
            jiguan_musun2: '木隼',
            jiguan_sunchi2: '隼翅',
            jiguan_muhu2: '木虎',
            jiguan_huzhua2: '虎爪',
            jiguan_huwei2: '虎尾',
            jiguan_mukui1: '木傀',
            jiguan_jidun1: '机盾',
            jiguan_jiren1: '机刃',
            jiguan_sunzhua1: '隼爪',
            jiguan_musun1: '木隼',
            jiguan_sunchi1: '隼翅',
            jiguan_muhu1: '木虎',
            jiguan_huzhua1: '虎爪',
            jiguan_huwei1: '虎尾',
            fadong_lijue: '李傕',
            fadong_guosi: '郭汜',
            fadong_zhangji: '张济',
            fadong_fanchou: '樊稠',
            fadong_dongyue: '董越',
            fadong_niufudongxie: '牛辅董翓',
            fadong_hubenjun: '虎贲军',
            fadong_baolvejun: '豹掠军',
            fadong_fengyaojun: '凤瑶军',
            fadong_longxiangjun: '龙骧军',
            fadong_feixiongjunzuo: '飞熊左军',
            fadong_feixiongjunyou: '飞熊右军',
            fadong_sunjian: '孙坚',
            fadong_huaxiong: '华雄',
            sx_zishu: '子鼠',
            sx_zishu_info: '出牌阶段限一次,你可以获得手牌数大于你的其他角色一张手牌,你可以重复此流程直到你的手牌数为全场最多.',
            fenghuo_chouniu: '丑牛',
            fenghuo_chouniu_info: '锁定技,结束阶段,若你的体力值为全场最小,则你回复1点体力.',
            sx_chouniu: '丑牛',
            sx_chouniu_info: '锁定技,结束阶段,若你的体力值为全场最小,则你回复1点体力.',
            sx_yinhu: '寅虎',
            sx_yinhu_info: '出牌阶段,你可以弃置一张牌(以此法弃置的牌须类型各不相同),对一名其他角色造成1点伤害;若你以此法导致一名角色进入濒死状态,则此技能失效直到回合结束.',
            shanhe_yinhu: '寅虎',
            shanhe_yinhu_info: '出牌阶段,你可以弃置一张牌(以此法弃置的牌须类型各不相同),对一名其他角色造成1点伤害;若你以此法导致一名角色进入濒死状态,则此技能失效直到回合结束.',
            shanhe_yinhua: '寅虎',
            shanhe_yinhua_info: '出牌阶段,你可以弃置一张牌(以此法弃置的牌须花色各不相同),对一名其他角色造成1点伤害;若你以此法导致一名角色进入濒死状态,则此技能失效直到回合结束.',
            sx_maotu: '卯兔',
            sx_maotu_info: '锁定技,场上有角色阵亡时,你获得【卯兔】标记,你的回合开始时,你移除【卯兔】标记(【卯兔】标记:你不是体力大于等于你的其他角色使用牌的合法目标).',
            sx_chenlong: '辰龙',
            sx_chenlong_info: '限定技,出牌阶段,你可以失去任意点体力(至多为5),对一名其他角色造成等量的伤害.若你以此法进入濒死状态,则你将体力值回复至1,减少1点体力上限.',
            sx_sishe: '巳蛇',
            sx_sishe_info: '当你受到伤害后,你可以对伤害来源造成等量伤害.',
            sx_wuma: '午马',
            sx_wuma_info: '锁定技,你不能被翻面;你的阶段不能被跳过;当你成为其他角色使用锦囊牌的目标后,摸一张牌.',
            shanhe_wuma: '午马',
            shanhe_wuma_info: '锁定技,你不能被翻面;你的阶段不能被跳过;当你成为其他角色使用锦囊牌的目标后,摸一张牌.',
            sx_weiyang: '未羊',
            sx_weiyang_info: '出牌阶段限一次,你可以弃置任意张不同类型的牌,令至多等量角色回复1点体力.',
            sx_shenhou: '申猴',
            sx_shenhou_info: '当你成为【杀】的目标后,你可以进行判定,若结果为红色,则此【杀】对你无效.',
            sx_youji: '酉鸡',
            sx_youji_info: '锁定技,摸牌阶段,你多摸X张牌(X为游戏轮数且最多为5).',
            sx_xugou: '戌狗',
            sx_xugou_info: '锁定技,红色【杀】对你无效;你使用红色【杀】无距离限制且造成伤害+1.',
            sx_haizhu: '亥猪',
            sx_haizhu_info: '锁定技,当其他角色的黑色牌因弃置而置入弃牌堆后,你获得这些牌;准备阶段,若你的手牌数为场上最多的或之一,你失去1点体力.',
            sx_jinzhu: '金猪',
            sx_jinzhu_info: '锁定技,你的手牌上限+1,摸牌阶段摸牌数+1,当你死亡时,你失去<金猪>,并复活将体力回复至3点.',
            shanhe_baoli: '暴力',
            shanhe_baoli_info: '锁定技,你造成的伤害+1.',
            shanhe_keshou: '恪守',
            shanhe_keshou_info: '当你受到伤害时,你可以弃置两张颜色相同的牌,令此伤害-1,若没有与你势力相同的其他角色,你判定,若结果为红色,你摸一张牌.',
            jiange_jueji: '绝汲',
            jiange_jueji_info: '敌方角色摸牌阶段结束时,若其已受伤,则你获得其一张牌.',
            jiange_huodi: '惑敌',
            jiange_huodi_info: '结束阶段,若有武将牌背面朝上的己方角色,你可以令一名敌方角色将其武将牌翻面.',
            shanhe_tiejia: '铁骑',
            shanhe_tiejia_info: '当你使用【杀】指定目标后,你可以进行判定.若结果为红色,则此【杀】不可被闪避.',
            shanhe_neifa: '内伐',
            shanhe_neifa_info: '出牌阶段开始时,你可以摸两张牌或获得场上的一张牌,弃置一张牌.若弃置的牌是基本牌,本回合你不能使用锦囊和装备牌,且【杀】的使用次数+X且目标+1;若弃置的不是基本牌,本回合你不能使用基本牌,且使用普通锦囊牌选择目标时可以增加或减少一个目标,前两次使用装备牌时摸X张牌(X为你发动〖内伐〗弃牌后手牌中因〖内伐〗而不能使用的牌的数量且最多为5).',
            shanhe_neifa_use: '内伐',
            shanhe_yuheng: '驭衡',
            shanhe_yuheng_info: '锁定技.①回合开始时,你须弃置任意张花色不同的牌,随机获得等量吴势力角色的技能.②回合结束时,你失去所有因〖驭衡〗获得的技能,摸等量的牌.',
            shanhe_yuheng_faq: 'FAQ',
            shanhe_yuheng_faq_info: '非全扩技能库如下:<br>制衡、缔盟、慎行、下书、弘援、观微、安恤、秉壹、兴学、澜疆、安国、戒训、调度、弼政、诱敌',
            shanhe_dili: '帝力',
            shanhe_dili_info: '觉醒技,当你拥有的技能数大于你的体力上限时,你减1点体力上限,选择失去任意个其他技能,获得〖圣质〗、〖权道〗、〖持纲〗的前等量个.',
            shanhe_zhuikong: '惴恐',
            shanhe_zhuikong_info: '其他角色的准备阶段,若你已受伤,你可以与该角色拼点.若你赢,该角色本回合使用的牌不能指定除该角色外的角色为目标.若你没赢,其本回合至你的距离视为1.',
            shanhe_keji: '克己',
            shanhe_keji_info: '弃牌阶段开始时,若你于本回合的出牌阶段内没有过使用或打出过【杀】,则你可以跳过此阶段.',
            shanhe_kejia: '克己',
            shanhe_kejia_info: '锁定技,若你没有在出牌阶段内使用过颜色不同的牌,则你本回合的手牌上限+4.',
            shanhe_kejia_add: '克己',
            shanhe_kejia_add_info: '',
            shanhe_liegong: '烈弓',
            shanhe_liegong_info: '当你于出牌阶段使用【杀】指定目标时,若其手牌数大于等于你的体力值,或小于等于你的攻击范围,你可令此【杀】不能被响应.',
            shanhe_liegonga: '烈弓',
            shanhe_liegonga_info: '①你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标.②当你使用【杀】指定一个目标后,你可以根据下列条件执行相应的效果:1.其手牌数小于等于你的手牌数,此【杀】不可被响应,2.其体力值大于等于你的体力值,此【杀】伤害+1.',
            shanhe_zhufang: '驻防',
            shanhe_zhufang_info: '锁定技,当你受到伤害后,若你的体力值小于5,则你回复1点体力.',
            shanhe_juejue: '绝决',
            shanhe_juejue_info: '锁定技,当你受到伤害后,若你的体力值小于5,则你令伤害来源本回合非锁定技失效.',
            shanhe_dulie: '笃烈',
            shanhe_dulie_info: '每回合限一次,当你成为其他角色使用基本牌或普通锦囊牌的目标时,你可以令此牌额外结算一次.若如此做,此牌结算完毕后,你摸X张牌(X为你的攻击范围且至多为5).',
            shanhe_beiqi: '悲泣',
            shanhe_beiqi_info: '锁定技,当你受到伤害后,若你的体力值小于10,则你令伤害来源随机失去一个技能.',
            shanhe_shilu: '失路',
            shanhe_shilu_info: '锁定技.当你受到伤害后,你摸X张牌(X为你的体力值且至多为5).你展示攻击范围内一名角色的一张手牌,令此牌的牌名视为【杀】.',
            shanhe_zhongjie: '忠节',
            shanhe_zhongjie_info: '当你死亡时,你可令一名其他角色加1点体力上限并回复1点体力,摸一张牌.',
            shanhe_xianji: '先机',
            shanhe_xianji_info: '锁定技,当你成为其他角色使用的牌的目标时,若你的体力值小于8,则你摸两张牌.',
            shanhe_chenghu: '成虎',
            shanhe_chenghu_info: '锁定技,游戏第3轮以及之后每进行3轮时,出牌阶段你可以使用的【杀】限制次数+1.',
            jiange_hupo: '虎魄',
            jiange_hupo_info: '锁定技,你的锦囊牌视为【杀】.',
            jiange_shuhun: '蜀魂',
            jiange_shuhun_info: '锁定技,当你造成伤害后,令随机一名己方角色回复一点体力.',
            jiange_mengwu: '猛武',
            jiange_mengwu_info: '锁定技,你使用【杀】无距离和次数限制;当你使用的【杀】被抵消后,你摸两张牌.',
            shanhe_mengwu: '猛武',
            shanhe_mengwu_info: '锁定技,你使用【杀】无距离和次数限制;当你使用的【杀】被抵消后,你摸一张牌.',
            shanhe_zhuishe: '追摄',
            shanhe_zhuishe_info: '锁定技,出牌阶段你可以使用的【杀】限制次数+1.',
            shanhe_xuli: '蓄力',
            shanhe_xuli_info: '锁定技,游戏第4轮以及之后每进行4轮时,出牌阶段你可以使用的【杀】限制次数+1.',
            shezhan_xunxian: '逊贤',
            shezhan_xunxian_info: '当你使用或打出的牌结算完成后,你可以将其对应的所有实体牌交给一名其他角色.',
            shezhan_funan: '复难',
            shezhan_funan_info: '其他角色使用或打出牌响应你使用的牌时,你获得其使用或打出的牌;你使用或打出牌响应其他角色使用的牌时,你获得其使用的牌.',
            shezhan_jiexun: '诫训',
            shezhan_jiexun_info: '当你受到伤害后,你可令一名其他角色摸等同于场上♦️️牌数的牌,弃置X张牌(X为此前该技能发动过的次数且至多为6).',
            shezhan_zhijian: '直谏',
            shezhan_zhijian_info: '出牌阶段,你可以将手牌中的一张装备牌置于一名其他角色装备区里(不得替换原装备),摸三张牌.',
            shezhan_guzheng: '固政',
            shezhan_guzheng_info: '其他角色的弃牌阶段结束时,你可以获得本阶段内进入弃牌堆的牌,随机对敌方角色造成X点伤害(X为你以此法获得的牌数且至多为3).',
            shezhan_zhiyan: '直言',
            shezhan_zhiyan_info: '当你受到伤害后,你可以令一名角色摸一张牌并展示之,若为基本牌,则你摸两张牌;若为装备牌,其使用此牌并回复两点体力.',
            shezhan_huaiju: '怀橘',
            shezhan_huaiju_info: '锁定技,游戏开始时,你获得3个<橘>标记.(有<橘>的角色受到伤害时,防止此伤害,移去一个<橘>,并对伤害来源造成1点伤害;有<橘>的角色摸牌阶段额外摸三张牌)',
            shezhan_huaiju_effect: '怀橘',
            shanhe_huaiju: '怀橘',
            shanhe_huaiju_info: '锁定技,游戏开始时,你获得3个<橘>标记.(有<橘>的角色受到伤害时,防止此伤害,移去一个<橘>;有<橘>的角色摸牌阶段额外摸一张牌)',
            shanhe_huaiju_effect: '怀橘',
            shezhan_yili: '遗礼',
            shezhan_yili_info: '出牌阶段开始时,你可以失去一点体力或移去一个<橘>,令所有其他己方角色获得一个<橘>.',
            shezhan_zhenglun: '整论',
            shezhan_zhenglun_info: '若你没有<橘>,摸牌阶段开始时获得一个<橘>.',
            shezhan_shezhan: '舌战',
            shezhan_shezhan_info: '锁定技,敌方角色出牌阶段开始时,随机一名己方角色对其发动一次辩论:若敌方胜利,则该敌方角色本局游戏造成的伤害+1;若己方胜利,则该己方角色本局游戏造成的伤害+1,且该敌方角色失去所有体力.',
            shanhe_suji: '肃疾',
            shanhe_suji_info: '一名角色的出牌阶段开始时,若其已受伤,你可以将一张黑色牌当【杀】使用.若其受到此【杀】的伤害,你获得其一张牌.',
            shanhe_fanshi: '反噬',
            shanhe_fanshi_info: '锁定技,当你每回合非首次受到伤害后,你对随机一名敌方角色造成1点伤害.',
            shanhe_shenshi1: '审时',
            shanhe_shenshi: '审时',
            shanhe_shenshi_info: '转换技,阴:出牌阶段限一次,你可以将一张牌交给一名除你外手牌数最多的角色,对其造成一点伤害,若该角色因此死亡,则你可以令一名角色将手牌摸至四张.阳:其他角色对你造成伤害后,你可以观看该角色的手牌,交给其一张牌,当前角色回合结束时,若此牌仍在该角色的区域内,你将手牌摸至四张.',
            shanhe_shicai: '恃才',
            shanhe_shicai_info: '当你使用非装备牌结算结束后,或成为自己使用装备牌的目标后,若此牌与你本回合使用的牌类型均不同,则你可以将此牌置于牌堆顶,摸一张牌.',
            shanhe_cunmu: '寸目',
            shanhe_cunmu_info: '锁定技,当你摸牌时,改为从牌堆底摸牌.',
            shanhe_lieren: '烈刃',
            shanhe_lieren_info: '当你使用【杀】造成伤害后,可与受到该伤害的角色进行拼点;若你赢,你获得对方的一张牌.',
            shanhe_dushi: '毒逝',
            shanhe_dushi_info: '锁定技,你处于濒死状态时,其他角色不能对你使用【桃】.你死亡时,你选择一名其他角色获得〖毒逝〗.',
            shanhe_shennu: '神怒',
            shanhe_shennu_info: '锁定技,当你受到伤害时,你获得1枚<怒>标记;当你造成伤害时,每有1枚<怒>标记,此伤害+1;当你造成伤害后,你失去1枚<怒>标记.',
            shanhe_fanzhen: '反震',
            shanhe_fanzhen_info: '锁定技,当你受到伤害后,伤害来源获得1枚<伤>标记;拥有<伤>标记的角色回合结束时,失去等同于<伤>标记数量的体力值并移除1枚<伤>标记.',
            shanhe_yidu: '遗毒',
            shanhe_yidu_info: '当你使用仅指定唯一目标的【杀】或伤害锦囊牌后,若此牌未对其造成伤害,你可以展示其至多三张手牌,若颜色均相同,其弃置这些牌.',
            shanhe_shenxian: '甚贤',
            shanhe_shenxian_info: '每名角色的回合限一次,你的回合外,当有其他角色因弃置而失去基本牌时,你可以摸一张牌.',
            shanhe_xiongshu: '凶竖',
            shanhe_xiongshu_info: '其他角色的出牌阶段开始时,你可弃置X张牌(X为你本轮内此前已发动过此技能的次数,为0则不弃)并展示其一张手牌,你预测<其本阶段内是否会使用与展示牌牌名相同的牌>.此阶段结束时,若你的预测正确,则你对其造成1点伤害;否则你获得展示牌.',
            shanhe_gengzhan: '更战',
            shanhe_gengzhan_info: '①其他角色的出牌阶段限一次,当有【杀】因弃置而进入弃牌堆后,你可以获得这些【杀】.②其他角色的结束阶段,若其本回合内未使用过【杀】,则你下个出牌阶段使用【杀】的次数上限+1.',
            shanhe_dongdang: '动荡',
            shanhe_dongdang_info: '锁定技,当你进入战场时,立刻结束当前结算,结束当前角色行动阶段,开始你的回合.',
            shanhe_zhengyi: '征役',
            shanhe_zhengyi_info: '锁定技,每回合限一次,出牌阶段结束后,你获得一个额外的出牌阶段.',
            shanhe_weizhong: '威重',
            shanhe_weizhong_info: '锁定技,当你的体力上限增加或减少时,你摸一张牌.若你的手牌数为全场最少,则你改为摸两张牌.',
            shanhe_buqua: '不屈',
            shanhe_buqua_bg: '创',
            shanhe_buqua_info: '锁定技,当你处于濒死状态时,你亮出牌堆顶的一张牌并置于你的武将牌上,称之为<创>.若此牌的点数与你武将牌上已有的<创>点数均不同,则你回复至1体力.若点数相同,则将此牌置入弃牌堆.只要你的武将牌上有<创>,你的手牌上限便与<创>的数量相等.',
            shanhe_buqu: '不屈',
            shanhe_buqu_info: '①当你扣减1点体力时,若你的体力值小于1,你可以将牌堆顶的一张牌置于你的武将牌上,称为<创>.②当你回复1点体力时,你移去一张<创>.③若你有<创>且点数均不相同,则你不结算濒死流程.',
            shanhe_yinghun: '英魂',
            shanhe_yinghun_info: '准备阶段,若你已受伤,你可令一名其他角色执行一项:摸X张牌,弃置一张牌;或摸一张牌,弃置X张牌(X为你已损失的体力值)',
            shanhe_shibei: '矢北',
            shanhe_shibei_info: '锁定技,当你受到伤害后:若此伤害是你本回合第一次受到的伤害,则你回复1点体力;否则你失去1点体力.',
            shanhe_lianhuo: '链祸',
            shanhe_lianhuo_info: '锁定技,当你受到火焰伤害时,若你的武将牌处于横置状态且此伤害不为连环伤害,则此伤害+1.',
            shanhe_hanyong: '悍勇',
            shanhe_hanyong_info: '当你使用【南蛮入侵】或【万箭齐发】时,若你的体力值小于游戏轮数,则你可以令此牌的伤害值基数+1.',
            shanhe_dianjun: '殿军',
            shanhe_dianjun_info: '锁定技.回合结束时,你受到1点无来源伤害,执行一个额外的出牌阶段.',
            shanhe_jieming: '节命',
            shanhe_jieming_info: '当你受到1点伤害后或死亡时,你可令一名角色摸X张牌.若其手牌数大于X,则其将手牌弃置至X张(X为其体力上限且至多为5).',
            shanhe_fuyin: '父荫',
            shanhe_fuyin_info: '锁定技,你每回合第一次成为【杀】或【决斗】的目标后,若你的手牌数小于等于该角色,此牌对你无效.',
            shanhe_qiaomeng: '趫猛',
            shanhe_qiaomeng_info: '当你使用【杀】对一名角色造成伤害后,你可以弃置该角色区域内的一张牌.若此牌为坐骑牌,则你于此弃置事件结算结束后获得此牌.',
            shanhe_jianxiong: '奸雄',
            shanhe_jianxiong_info: '当你受到伤害后,你可以获得对你造成伤害的牌并摸一张牌.',
            shanhe_fankui: '反馈',
            shanhe_fankui_info: '当你受到伤害后,你可以获得伤害来源的一张牌.',
            shanhe_leizhou: '雷咒',
            shanhe_leizhou_info: '锁定技,准备阶段,你对随机一名敌方角色造成1点雷电伤害.',
            shanhe_leifu: '雷缚',
            shanhe_leifu_info: '锁定技,结束阶段,你随机令一名敌方角色进入连环状态.',
            shanhe_nianyi: '年裔',
            shanhe_nianyi_info: ' 锁定技,你使用牌无距离限制.准备阶段,你随机弃置判定区的两张牌.一名其他角色的回合结束后,若你于此回合内失去过至少三张牌,你对所有敌方角色各造成1点伤害.',
            shanhe_zongkui: '纵傀',
            shanhe_zongkui_mark: '纵傀',
            shanhe_zongkui_mark_bg: '傀',
            shanhe_zongkui_info: '回合开始前,你可以指定一名未拥有<傀>标记的其他角色,令其获得一枚<傀>标记.一轮游戏开始时,你指定一名体力值最少且没有<傀>标记的其他角色,令其获得一枚<傀>标记.',
            shanhe_guju: '骨疽',
            shanhe_guju_info: '锁定技,拥有<傀>标记的其他角色受到伤害后,你摸一张牌.',
            shanhe_baijia: '拜假',
            shanhe_baijia_info: '觉醒技,准备阶段,若你因〖骨疽〗得到的牌不少于7张,则你增加1点体力上限,回复1点体力,令所有未拥有<傀>标记的其他角色获得<傀>标记,最后失去技能〖骨疽〗,并获得技能〖蚕食〗.',
            shanhe_canshia: '蚕食',
            shanhe_canshia_info: '一名角色使用基本牌或普通锦囊牌指定你为唯一目标时,若其有<傀>标记,你可以取消之,其失去<傀>标记;你使用牌仅指定一名角色为目标时,你可以额外指定任意名带有<傀>标记的角色为目标(无距离限制),这些角色失去<傀>标记.',
            shanhe_haoshi: '好施',
            shanhe_haoshi_info: '摸牌阶段,你可以额外摸两张牌.若此时你的手牌数多于五张,你须将一半(向下取整)的手牌交给场上除你外手牌数最少的一名角色.',
            shanhe_rende: '仁德',
            shanhe_rende_info: '出牌阶段,你可以将任意张手牌交给其他角色.当你以此法于一回合内给出第二张牌时,你回复1点体力.',
            shanhe_canshi: '残蚀',
            shanhe_canshi2: '残蚀',
            shanhe_canshi_info: '摸牌阶段开始时,你可以多摸X张牌(X为已受伤的角色数),若如此做,当你于此回合内使用【杀】或普通锦囊牌时,你弃置一张牌.',
            shanhe_juece: '绝策',
            shanhe_juece_info: '结束阶段,你可以对一名没有手牌的其他角色造成1点伤害.',
            shanhe_benxi: '奔袭',
            shanhe_benxi_info: '锁定技,当你于回合内使用牌时,你本回合计算与其他角色的距离-1.你的回合内,若你至场上所有其他角色的距离均不大于1,则当你使用【杀】或普通锦囊牌选择唯一目标后,你选择至多两项:1.为此牌多指定一个目标;2.令此牌无视防具;3.令此牌不可被抵消;4.此牌造成伤害后摸一张牌.',
            shanhe_shanzhuan: '擅专',
            shanhe_shanzhuan_info: '①当你对其他角色造成伤害后,若其判定区没有延时类锦囊牌,则你可以将其的一张牌置于其的判定区.若此牌不为延时锦囊牌且此牌为:红色,此牌视为【乐不思蜀】;黑色,此牌视为【兵粮寸断】.②回合结束时,若你本回合内未造成伤害,你可摸一张牌.',
            shanhe_enyuana: '恩怨',
            shanhe_enyuana2: '恩怨',
            shanhe_enyuana_info: '当你获得一名其他角色两张或更多的牌后,你可以令其摸一张牌;当你受到1点伤害后,你可以令伤害来源选择一项:1、将一张手牌交给你;2、失去1点体力.',
            shanhe_enyuan: '恩怨',
            shanhe_enyuan_info: '锁定技,其他角色每令你回复1点体力,该角色摸一张牌;其他角色每对你造成一次伤害,须给你一张♥️️手牌,否则该角色失去1点体力.',
            shanhe_shanduan: '善断',
            shanhe_shanduan_info: '锁定技.①摸牌/出牌/弃牌阶段开始时,你为本回合摸牌阶段摸牌数/攻击范围和使用【杀】的限制次数/手牌上限的默认值从数组R=[1,2,3,4]中分配数值.②当你于回合外受到伤害后,你令下回合〖善断①〗以此法分配的数值集合R中的最小值+1.',
            shanhe_shebian: '设变',
            shanhe_shebian_info: '当你的武将牌翻面后,你可以移动场上的一张装备牌.',
            shanhe_shangshi: '伤逝',
            shanhe_shangshi_info: '当你的手牌数小于X时,你可以将手牌摸至X张.(X为你已损失的体力值)',
            shanhe_jueqing: '绝情',
            shanhe_jueqing_info: '锁定技,你即将造成的伤害均视为失去体力.',
            shanhe_gangzhi: '刚直',
            shanhe_gangzhi_info: '锁定技,当你即将受到其他角色造成的伤害时,或即将对其他角色造成伤害时,你防止此伤害,改为受到伤害的角色失去等量的体力.',
            shanhe_huanfu: '宦浮',
            shanhe_huanfu_info: '当你使用【杀】指定第一个目标后,或成为【杀】的目标后,你可以弃置X张牌(X∈[1, 你的体力上限]).此【杀】结算结束后,若此【杀】累计因执行效果而造成的伤害值等于X,则你摸2X张牌.',
            shanhe_shanxi: '闪袭',
            shanhe_shanxi_info: '出牌阶段限一次,你可以弃置一张红色基本牌,弃置攻击范围内的一名其他角色的一张牌.若弃置的牌是【闪】,你观看其手牌,若弃置的不是【闪】,其观看你的手牌.',
            shanhe_shichou: '誓仇',
            shanhe_shichou_info: '当你使用【杀】时,你可以令至多X+1名角色也成为此【杀】的目标(X为你已损失的体力值).',
            shanhe_shichoua: '誓仇',
            shanhe_shichoua_info: '你使用的【杀】可以多指定X个目标(X为你已损失体力值且至少为1).',
            shanhe_wansha: '完杀',
            shanhe_wansha_info: '锁定技,你的回合内,不处于濒死状态的其他角色不能使用【桃】.',
            shanhe_lunhui: '轮回',
            shanhe_lunhui_info: '锁定技,准备阶段,若你的体力小于等于2,则你与场上出你以外体力最高且大于2的敌方角色交换体力值.',
            shanhe_duorui: '夺锐',
            shanhe_duorui2: '夺锐',
            shanhe_duorui_info: '当你于出牌阶段内对一名角色造成伤害后,你可以选择该角色武将牌上的一个技能.若如此做,你结束出牌阶段,且你令此技能于其下个回合结束之前无效.',
            shanhe_zhongyong: '忠勇',
            shanhe_zhongyong_info: '当你使用的【杀】结算完毕后,你可以将此【杀】或目标角色使用的【闪】交给一名该角色以外的其他角色,以此法得到红色牌的角色可以对你攻击范围内的角色使用一张【杀】.',
            shanhe_fulin: '腹鳞',
            shanhe_fulin_info: '锁定技,你于回合内得到的牌不计入你本回合的手牌上限.',
            shanhe_qiangwu: '枪舞',
            shanhe_qiangwu_info: '出牌阶段,你可以进行判定.若如此做,直到回合结束,你使用点数小于判定结果的【杀】时不受距离限制,且你使用点数大于判定结果的【杀】时无使用次数限制.',
            shanhe_yingzia: '英姿',
            shanhe_yingzia_info: '摸牌阶段,你可以多摸一张牌.',
            shanhe_yingzi: '英姿',
            shanhe_yingzi_info: '锁定技,摸牌阶段摸牌时,你额外摸一张牌;你的手牌上限为你的体力上限.',
            shanhe_youji: '酉鸡',
            shanhe_youji_info: '锁定技,摸牌阶段,你多摸X张牌(X为游戏轮数且最多为5).',
            shanhe_luanfeng: '鸾凤',
            shanhe_luanfeng_info: '限定技,一名角色进入濒死状态时,若其体力上限不小于你,你可令其回复至3点体力,回复其被废除的装备栏,令其手牌补至6-X张(X为以此法回复的装备栏数量).若该角色是你,重置你因<游龙>使用过的牌名.',
            shanhe_qingzhong: '清忠',
            shanhe_qingzhong_info: '出牌阶段开始时,你可以摸两张牌,若如此做,此阶段结束时,你与手牌数最少的角色交换手牌.',
            shanhe_weijing: '卫境',
            shanhe_weijing_info: '每轮限一次,当你需要使用【杀】或【闪】时,你可以视为使用一张【杀】或【闪】.',
            jiange_bazhen: '八阵',
            jiange_bazhen_info: '锁定技,若你的防具栏内没有牌且没有被废除,则你视为装备着【八卦阵】.',
            shanhe_hengjiang: '横江',
            shanhe_hengjiang2: '横江',
            shanhe_hengjiang_info: '当你受到1点伤害后,你可以令当前回合角色本回合的手牌上限-1.若其弃牌阶段内没有弃牌,则你摸一张牌.',
            shanhe_liezhen: '列阵',
            shanhe_liezhen_info: '锁定技,若你的防具栏内没有牌且没有被废除,则奇数轮次中你视为装备着【仁王盾】,偶数轮次中你视为装备着【八卦阵】.',
            shanhe_yifa: '仪法',
            shanhe_yifa2: '仪法',
            shanhe_yifa_info: '锁定技,其他角色使用【杀】或黑色普通锦囊牌指定你为目标后,其手牌上限-1直到其回合结束.',
            shanhe_zhiheng: '制衡',
            shanhe_zhiheng_info: '出牌阶段一次,你可以弃置任意张牌,摸等量的牌.',
            shanhe_zhihenga: '制衡',
            shanhe_zhihenga_info: '出牌阶段限一次,你可以弃置任意张牌,摸等量张牌,若你以此法弃置了所有手牌,你额外摸一张牌.',
            shanhe_juxiang: '巨象',
            shanhe_juxiang_info: '锁定技,【南蛮入侵】对你无效;锁定技,每当其他角色使用的【南蛮入侵】因结算完毕而置入弃牌堆后,你获得之.',
            shanhe_guidao: '鬼道',
            shanhe_guidao_info: '一名角色的判定牌生效前,你可以打出一张黑色牌作为判定牌并获得原判定牌.若你以此法打出的牌为♠️️2-9,则你摸一张牌.',
            shanhe_tianyi: '天义',
            shanhe_tianyi_info: '出牌阶段限一次,你可以与一名角色拼点.若你赢,直到回合结束,你能额外使用一张【杀】且使用【杀】无距离限制且使用【杀】选择目标的个数上限+1.若你没赢,你不能使用【杀】,直到回合结束.',
            shanhe_chenlong: '辰龙',
            shanhe_chenlong_info: '限定技,出牌阶段,你可以失去任意点体力(至多为5),对一名其他角色造成等量的伤害.若你以此法进入濒死状态,则你将体力值回复至1,减少1点体力上限.',
            shanhe_jinzhu: '金猪',
            shanhe_jinzhu_info: '锁定技,你的手牌上限+1,摸牌阶段摸牌数+1,当你死亡时,你失去<金猪>,并复活将体力回复至3点.',
            shanhe_jili: '蒺藜',
            shanhe_jili_info: '当你于一回合内使用或打出第X张牌时,你可以摸X张牌(X为你的攻击范围).',
            shanhe_weilu: '威虏',
            shanhe_weilu_info: '锁定技,当你受到伤害后,伤害来源获得一枚「虏」.你的下个出牌阶段开始时,所有有「虏」的角色将体力失去至1点.此阶段结束后,这些角色回复以此法失去的体力.',
            shanhe_hanzhan: '酣战',
            shanhe_hanzhan_gain: '酣战',
            shanhe_hanzhan_info: '①当你发起拼点时,或成为拼点的目标时,你可以令对方选择拼点牌的方式改为随机选择一张手牌.②当你拼点结束后,你可以获得本次拼点的拼点牌中点数最大的【杀】.',
            shanhe_baozhu: '爆竹',
            shanhe_baozhu_info: '限定技,击破场上所有角色护甲,并失去1点体力值;同时使所有单位【杀】造成的伤害+1,效果持续至使用者下一回合开始时.',
            shanhe_xianshuai: '先率',
            shanhe_xianshuai_info: '锁定技,有角色造成伤害后,若此伤害是本轮第一次造成伤害:你摸一张牌;若伤害来源是你,则你对受伤角色再造成1点伤害.',
            shanhe_cuipo: '摧破',
            shanhe_cuipo_info: '锁定技.当你使用牌时,若此牌是你本回合使用的第X张牌(X为此牌牌名的字数),则:{若此牌为【杀】或伤害类锦囊牌,则此牌的伤害值基数+1,否则你摸一张牌}.',
            shanhe_luanji: '乱击',
            shanhe_luanji_info: '你可以将两张与你本回合以此法转化的花色均不相同的手牌当【万箭齐发】使用.当一名与你势力相同的角色因响应此牌而打出【闪】时,该角色摸一张牌.',
            shanhe_yicheng: '易城',
            shanhe_yicheng_info: '出牌阶段限一次,你可以亮出牌堆顶的X张牌(X为你的体力上限),你可以以任意手牌交换其中等量张牌,若亮出的牌的点数和因此增加,则你可以选择用所有手牌交换亮出的牌.最后你将亮出的牌置于牌堆顶.',
            shanhe_chuming: '畜鸣',
            shanhe_chuming_info: '锁定技.当你对其他角色造成伤害时,或当你受到其他角色造成的伤害时,若此伤害的渠道不为牌或没有对应的实体牌,此伤害+1,否则其于本回合结束时将以此法造成伤害的牌当【借刀杀人】或【过河拆桥】对你使用.',
            shanhe_bixiong: '避凶',
            shanhe_bixiong2: '避凶',
            shanhe_bixiong_info: '锁定技,当你于弃牌阶段弃置手牌后,其他角色不能使用与这些牌花色相同的牌指定你为目标直到你的下回合开始.',
            shanhe_lianzhu: '连诛',
            shanhe_lianzhu_info: '出牌阶段限一次,你可以展示并交给一名其他角色一张牌,若此牌为黑色,其选择一项:1.你摸两张牌;2.弃置两张牌.',
            shanhe_longhun: '龙魂',
            shanhe_longhun_info: '你可以将同花色的一至两张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当普【无懈可击】.若你以此法使用了两张红色牌,则此牌回复值或伤害值+1.若你以此法使用了两张黑色牌,则你弃置当前回合角色一张牌.',
            shanhe_wuyan: '无言',
            shanhe_wuyan_info: '锁定技,你使用的普通锦囊牌对其他角色无效;其他角色使用的普通锦囊牌对你无效.',
            shanhe_wuyana: '无言',
            shanhe_wuyana_info: '锁定技,当你使用锦囊牌造成伤害时,你防止此伤害;锁定技,当你受到锦囊牌对你造成的伤害时,你防止此伤害.',
            shanhe_fengzi: '丰姿',
            shanhe_fengzi_info: '出牌阶段限一次.当你使用有目标的基本牌或普通锦囊牌时,你可弃置一张与此牌类型相同的牌,令此牌结算两次.',
            shanhe_jizhan: '吉占',
            shanhe_jizhan_info: '摸牌阶段开始时,你可以放弃摸牌.你展示牌堆顶的一张牌,并猜测牌堆顶的下一张牌点数大于或小于此牌.若你猜对,你可继续重复此流程.你获得以此法展示的所有牌.',
            shanhe_fusong: '赋颂',
            shanhe_fusong_info: '当你死亡时,你可以选择一名体力上限大于你的其他角色.其选择获得〖吉占〗或〖丰姿〗.',
            shanhe_longnu: '龙怒',
            shanhe_longnu_info: '转换技,锁定技,阴:出牌阶段开始时,你失去1点体力并摸一张牌,本阶段内你的红色手牌均视为火【杀】且无距离限制.阳:出牌阶段开始时,你减1点体力上限并摸一张牌,本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制.',
            shanhe_tongxie: '同协',
            shanhe_tongxie_info: '出牌阶段开始时,你可以选择包括你在内的至多三名角色(你与这些角色均称为<同协角色>).这些角色中手牌数唯一最少的角色摸一张牌,且你获得如下效果直到你下回合开始:①当有<同协角色>对唯一目标角色使用的【杀】结算结束后,其他<同协角色>可以依次对目标角色使用一张【杀】(无距离和次数限制,且不能再触发此效果).②当有<同协角色>受到伤害时,其他<同协角色>(本回合内失去过体力的角色除外)可以防止此伤害,失去1点体力.',
            shanhe_bolan: '博览',
            shanhe_bolan_info: '①出牌阶段开始时,你可从三个描述中带有<出牌阶段限一次>的技能中选择一个,令当前回合角色获得直至此阶段结束.②其他角色出牌阶段限一次,其可以失去1点体力,令你发动一次〖博览①〗.',
            shanhe_naman: '纳蛮',
            shanhe_naman_info: '当其他角色打出的【杀】结算结束后,你可以获得此牌对应的所有实体牌.',
            jiange_chiying: '持盈',
            jiange_chiying_info: '锁定技,当己方角色受到大于1点伤害时,你防止超过1点的伤害.',
            shanhe_caishi: '才识',
            shanhe_caishix: '才识/忠鉴',
            shanhe_caishi_info: '摸牌阶段开始时,你可以选择一项:1.令手牌上限+1;2.回复1点体力,本回合内不能对自己使用牌.',
            shanhe_quanji: '权计',
            shanhe_quanji_info: '当你受到1点伤害后,你可以摸一张牌,将一张手牌置于武将牌上,称为<权>;你的手牌上限+X(X为<权>的数量).',
            shanhe_paiyi: '排异',
            shanhe_paiyi_info: '出牌阶段限一次,你可以移去一张<权>并选择一名角色,令其摸两张牌,若其手牌数大于你,你对其造成1伤害.',
            shanhe_guixiang: '贵相',
            shanhe_guixiang_info: '锁定技.你的非出牌阶段开始前,若此阶段即将成为你本回合内的第X个阶段(X为你的手牌上限),则你终止此阶段,改为进行一个出牌阶段.',
            shanhe_yirong: '移荣',
            shanhe_yirong2: '移荣',
            shanhe_yirong_info: '出牌阶段限两次.若你的手牌数:小于X,则你可以将手牌摸至X张,X-1;大于X,则你可以将手牌弃置至X张,X+1.(X为你的手牌上限)',
            shanhe_jingfan: '惊帆',
            shanhe_jingfan_info: '锁定技,其他己方角色计算与敌方角色的距离-1.',
            jiange_jingfan: '惊帆',
            jiange_jingfan_info: '锁定技,其他己方角色计算与敌方角色的距离-1且视为拥有技能【短兵】.',
            jiange_duanbing: '短兵',
            jiange_duanbing_info: '当你使用【杀】选择目标后,你可以令一名距离为1的角色也成为此【杀】的目标.当你使用【杀】指定距离为1的角色为目标后,该角色需依次使用两张【闪】才能抵消此【杀】.',
            shanhe_tiaoxin: '挑衅',
            shanhe_tiaoxin_info: '出牌阶段限一次,你可以选择一名攻击范围内包含你的角色.除非该角色对你使用一张【杀】且此【杀】对你造成伤害,否则你弃置其一张牌,将此技能于此出牌阶段内修改为出牌阶段限两次. ',
            shanhe_xionghuo: '凶镬',
            shanhe_xionghuo_info: '游戏开始时,你获得3个<暴戾>标记(标记上限为3).出牌阶段,你可以交给一名其他角色一个<暴戾>标记.当你对有<暴戾>标记的其他角色造成伤害时,此伤害+1.有<暴戾>标记的其他角色的出牌阶段开始时,其移去所有<暴戾>标记并随机执行一项:1.受到1点火焰伤害且本回合不能对你使用【杀】;2.失去1点体力且本回合手牌上限-1;3.你随机获得其一张手牌和一张装备区的牌.',
            shanhe_shajue: '杀绝',
            shanhe_shajue_info: '锁定技,其他角色进入濒死状态时,你获得一个<暴戾>标记.若其体力值小于0,你获得使其进入濒死状态的牌.',
            jiange_lingyu: '灵愈',
            jiange_lingyu_info: '结束阶段,你可以将自己的武将牌翻面,令所有已受伤的己方其他角色回复1点体力.',
            shanhe_anxu: '安恤',
            shanhe_anxu_info: '出牌阶段限一次,你可以选择两名手牌数不同的其他角色,令其中手牌少的角色获得手牌多的角色的一张手牌并展示之.若此牌不为♠️️,则你摸一张牌.',
            shanhe_tianming: '天命',
            shanhe_tianming_info: '当你成为【杀】的目标时,你可以弃置两张牌(不足则全弃,无牌则不弃),摸两张牌;若此时全场体力值最多的角色仅有一名且不是你,该角色也可以如此做.',
            shanhe_jiexuan: '解悬',
            shanhe_jiexuan_info: '限定技,转换技.阴:你可以将一张红色牌当【顺手牵羊】使用;阳:你可以将一张黑色牌当【过河拆桥】使用.',
            shanhe_chunlao: '醇醪',
            shanhe_chunlao2: '醇醪',
            shanhe_chunlao_info: '结束阶段开始时,若你没有<醇>,你可以将至少一张【杀】置于你的武将牌上,称为<醇>.当一名角色处于濒死状态时,你可以移去一张<醇>,视为该角色使用一张【酒】.',
            shanhe_zhenlie: '贞烈',
            shanhe_zhenlie_info: '当你成为其他角色使用【杀】或普通锦囊牌的目标后,你可以失去一点体力并令此牌对你无效,弃置对方一张牌.',
            shanhe_wumou: '无谋',
            shanhe_wumou_info: '锁定技,当你使用普通锦囊牌时,你选择一项:1.弃置1枚<暴怒>标记;2.失去1点体力.',
            shanhe_zhuijia: '追姬',
            shanhe_zhuijia_info: '出牌阶段开始时,你可选择一项:①摸两张牌,并于出牌阶段结束时失去1点体力;②回复1点体力,并于出牌阶段结束时弃置两张牌.',
            shanhe_yishi: '宜室',
            shanhe_yishi_info: '每回合限一次,当有其他角色于其出牌阶段内因弃置而失去手牌后,你可令其获得这些牌中位于弃牌堆的一张,你获得其余位于弃牌堆的牌.',
            shanhe_shiduo: '识度',
            shanhe_shiduo_info: '出牌阶段限一次,你可以与一名其他角色拼点.若你赢,你获得其所有手牌.你交给其X张手牌(X为你手牌数的一半,向下取整).',
            shanhe_liejie: '烈节',
            shanhe_liejie_info: '当你受到伤害后,你可以弃置至多三张牌,摸等量的牌,可弃置伤害来源的至多X张牌(X为你以此法弃置的红色牌的数量).',
            shanhe_duwu: '黩武',
            shanhe_duwu_info: '出牌阶段,你可以弃置X张牌对你攻击范围内的一名其他角色造成1点伤害(X为该角色的体力值).若该角色因此法进入濒死状态,则你于濒死状态结算后失去1点体力,且本回合不能再发动【黩武】.',
            shanhe_qizhi: '奇制',
            shanhe_qizhi_info: '当你于回合内使用基本牌或锦囊牌指定目标后,你可以弃置不是此牌目标的一名角色的一张牌.若如此做,其摸一张牌.',
            shanhe_zhuandui: '专对',
            shanhe_zhuandui_info: '当你使用【杀】指定目标后,你可以与其拼点,若你赢,其不能响应此【杀】;当你成为【杀】的目标后,你可以与其拼点,若你赢,此【杀】对你无效.',
            shanhe_qingleng: '清冷',
            shanhe_qingleng_info: '一名角色的回合结束时,若其体力值与手牌数之和不小于X,则你可将一张牌当无距离限制的冰属性【杀】对其使用(X为牌堆数量的个位数).若这是你本局游戏内首次其发动过此技能,则你摸一张牌.',
            shanhe_yunshen: '熨身',
            shanhe_yunshen_info: '出牌阶段各限一次.你可以令一名其他角色回复1点体力,选择一项:1.你视为对其使用一张冰【杀】;2.其视为对你使用一张冰【杀】.',
            shanhe_yunshenb: '熨身',
            shanhe_yunshenb_info: '出牌阶段限一次.你可以令一名其他角色回复1点体力,选择一项:1.你视为对其使用一张冰【杀】;2.其视为对你使用一张冰【杀】.',
            shanhe_sankuanga: '三恇',
            shanhe_sankuanga_info: '锁定技,当你于每轮第一次使用一种类型的牌后,你令一名其他角色获得此牌或交给你至少X张牌(X为该角色『场上牌数,已损失体力值,手牌数与体力值之差』之间的最小值,且X至多为3).',
            shanhe_beishi: '卑势',
            shanhe_beishi_info: '锁定技,当你或第一次成为【三恇】的目标角色失去最后的手牌后,你选择移除或复原【三恇】描述『 』中的一个条件,回复1点体力.',
            shanhe_lieshi: '烈誓',
            shanhe_lieshi_info: '你可以将你场上的牌当作场上没有的延时锦囊牌使用并执行一项,令目标角色执行后一项:『①受到1点火焰伤害;②弃置手牌中的所有【闪】;③弃置手牌中的所有【杀】』.',
            shanhe_dianzhan: '点盏',
            shanhe_dianzhan_info: '锁定技,当你于每轮第一次使用一种花色的牌后,你依次执行以下选项直到你执行完所有选项或需要执行无法执行的选项:『①重铸此花色的一张手牌;②令此牌唯一目标进入连环状态;③摸一张牌』.',
            shanhe_huanyin: '还阴',
            shanhe_huanyin_info: '锁定技,当你进入濒死状态时,你将〖烈誓〗和〖点盏〗描述『 』中的内容倒置,将手牌数补至四张.',
            shanhe_huanyina: '还阴',
            shanhe_huanyina_info: '锁定技,当你进入濒死状态时,你将手牌数补至四张.',
            shanhe_yunshena: '熨身',
            shanhe_yunshena_info: '出牌阶段各限一次,你可以令一名其他角色回复1点体力,你选择一项:①视为你对其使用一张冰【杀】;②视为其对你使用一张冰【杀】.',
            shanhe_shangshen: '伤神',
            shanhe_shangshen_info: '当一名角色受到属性伤害后,你可以选择下列两项:①获得你场上的所有牌;②将其一张牌当作随机一张延时锦囊牌对你使用;③令其将手牌数补至四张.',
            shanhe_shangshena: '伤神',
            shanhe_shangshena_info: '当一名角色受到属性伤害后,若本回合此前没有角色或已死亡的角色受到过属性伤害,你可以执行目标角色为你的【闪电】效果,其将手牌摸至四张.',
            shanhe_fenchai: '分钗',
            shanhe_fenchai_info: '锁定技,你和首次成为你发动技能指定的异性角色的牌的花色均视为♥️️.首次成为你发动技能指定的异性角色死亡时,其可以交给你至多一半手牌(向上取整).',
            shanhe_panqin: '叛侵',
            shanhe_panqin_info: '出牌阶段或弃牌阶段结束时,你可将你于本阶段内弃置且位于弃牌堆的所有牌当做【南蛮入侵】使用.若此牌被使用时对应的实体牌数不大于此牌的目标数,则你执行并移除【蛮王】中的最后一个选项.',
            shanhe_lvli: '膂力',
            shanhe_lvli_info: '每回合限一次,当你造成伤害后,你可选择:1,若你的体力值大于你的手牌数,你摸Ｘ张牌;2,若你的手牌数大于你的体力值且你已受伤,你回复Ｘ点体力(Ｘ为你的手牌数与体力值之差).',
            shanhe_chengxiang: '称象',
            shanhe_chengxiang_info: '当你受到伤害后,你可以亮出牌堆顶的四张牌.获得其中任意数量点数之和不大于13的牌.',
            shanhe_benghuai: '崩坏',
            shanhe_benghuai_info: '锁定技,结束阶段,若你的体力不是全场最少的(或之一),你须减1点体力或体力上限.',
            shanhe_xuanhuo: '眩惑',
            shanhe_xuanhuo_info: '摸牌阶段开始时,你可以改为令一名其他角色摸两张牌,该角色需对其攻击范围内你选择的另一名角色使用一张【杀】,否则你获得其两张牌.',
            shanhe_qiangxib: '强袭',
            shanhe_qiangxib_info: '出牌阶段限两次.你可以弃置一张武器牌或受到1点无来源伤害,对一名本回合内未成为过〖强袭〗目标的其他角色造成1点伤害.',
            shanhe_ningwu: '狞恶',
            shanhe_ningwu_info: '锁定技.当一名角色A于一回合内第二次受到伤害后,若A或伤害来源为你,则你摸一张牌,弃置其装备区或判定区内的一张牌.',
            shanhe_zhuyan: '驻颜',
            shanhe_zhuyan_info: '每名角色每项各限一次.结束阶段,你可以令一名角色将以下一项调整至与其上一个准备阶段结束后相同:1.体力值;2.手牌数(体力值至多失去至1,手牌数至多摸至5;若其未执行过准备阶段则改为游戏开始时).',
            nianshou_ruizhi: '睿智',
            nianshou_ruizhi_info: '锁定技,其他角色的准备阶段,其选择一张手牌和一张装备区里的牌,弃置其余的牌.',
            nianshou_jingjue: '警觉',
            nianshou_jingjue_info: '锁定技,当你因弃置或被其他角色获得而失去牌后,你回复1点体力.',
            shanhe_xiaoguo: '骁果',
            shanhe_xiaoguo_info: '其他角色的结束阶段开始时,你可以弃置一张基本牌,令该角色选择一项:1.弃置一张装备牌,你摸一张牌;2.受到你对其造成的1点伤害.',
            shanhe_mingzhea: '明哲',
            shanhe_mingzhea_info: '锁定技.当你于出牌阶段外失去红色牌后,你展示这些牌中所有背面朝上移动的牌(没有则不展示),摸一张牌.',
            shanhe_duanliang: '断粮',
            shanhe_duanliang_info: '你可以将一张黑色基本牌或黑色装备牌当【兵粮寸断】使用;你可以对距离为2的角色使用【兵粮寸断】.',
            shanhe_xiehui: '黠慧',
            shanhe_xiehui2: '黠慧',
            shanhe_xiehui_info: '锁定技,你的黑色牌不计入手牌上限;其他角色获得你的黑色牌时,其不能使用、打出、弃置这些牌直到其体力值扣减为止.',
            shanhe_beizhan: '备战',
            shanhe_beizhan2: '备战',
            shanhe_beizhan_info: '结束阶段,你可以令一名角色将手牌摸至体力上限(至多为5).其下个回合开始时,若其手牌数为全场最多,则其此回合内使用的牌不能指定其他角色为目标.',
            shanhe_langdao: '狼蹈',
            shanhe_langdao_info: '当你使用【杀】指定唯一目标时,你可以与该目标角色同时选择一项:1.令此【杀】伤害基数+1;2.令你可以为此【杀】多选择一个目标;3.令此【杀】不可被响应.若没有角色因此【杀】死亡,你移除本次被选择的项.',
            shanhe_zhuiyi: '追忆',
            shanhe_zhuiyi_info: '当你死亡时,你可以令一名其他角色(击杀你的角色除外)摸三张牌,其回复1点体力.',
            shanhe_jilei: '鸡肋',
            shanhe_jilei2: '鸡肋',
            shanhe_jilei2_bg: '肋',
            shanhe_jilei_info: '当你受到有来源的伤害后,你可以声明一种牌的类别.若如此做,你令伤害来源不能使用、打出或弃置此类别的手牌直到回合结束.',
            shanhe_zhige: '止戈',
            shanhe_zhige_info: '出牌阶段限一次,若你的手牌数大于你的体力值,你可以选择攻击范围内含有你的一名其他角色,其选择一项:1.使用一张【杀】;2.将装备区里的一张牌交给你.',
            shanhe_fuli: '伏枥',
            shanhe_fuli_info: '限定技,当你处于濒死状态时,你可以将体力回复至与场上势力数相同,翻面.',
            shanhe_zishou: '自守',
            shanhe_zishou2: '自守',
            shanhe_zishou_info: '摸牌阶段,你可以多摸X张牌(X为存活势力数).若如此做,本回合你对其他角色造成伤害时,防止此伤害.',
            shanhe_jiaozhao: '矫诏',
            shanhe_jiaozhao3: '矫诏',
            shanhe_jiaozhao3_backup: '矫诏',
            shanhe_jiaozhao2: '矫诏',
            shanhe_jiaozhao_info: '出牌阶段限一次,你可以展示一张手牌,选择距离最近的一名其他角色,该角色声明一张基本牌的牌名.在此出牌阶段内,你可以将此手牌当声明的牌使用(你不能对自己使用此牌).',
            shanhe_danxin: '殚心',
            shanhe_danxin_info: '当你受到伤害后,你可以摸一张牌,或对<矫诏>的描述依次执行下列一项修改:1.将<基本牌>改为<基本牌或普通锦囊牌>;2.将<选择距离最近的一名其他角色,该角色>改为<你>.',
            shanhe_leijie: '雷劫',
            shanhe_leijie_info: '准备阶段,你可以令一名角色判定,若结果为♠️️2~9,其受到2点雷电伤害,否则其摸两张牌.',
            shanhe_qizhou: '绮冑',
            shanhe_qizhou_info: '锁定技.每个回合开始前,或当你装备区内的牌发生变化后,你失去所有因此技能获得过的额外技能,根据你装备区内的花色数获得对应的技能.至少一种:【短兵】、至少两种:【英姿】、至少三种:【奋威】、至少四种:【澜江】.',
            shanhe_luanwu: '乱武',
            shanhe_luanwu_info: '限定技,出牌阶段,你可令所有其他角色依次选择一项:①对距离最近(或之一)的角色使用一张【杀】;②失去1点体力.结算完成后,你可视为使用一张【杀】(无距离限制).',
            shanhe_qimou: '奇谋',
            shanhe_qimou_info: '限定技,出牌阶段,你可以失去任意点体力,直到回合结束,你计算与其他角色的距离时-X,且你可以多使用X张【杀】.(X为你失去的体力值)',
            shanhe_qimoua: '奇谋',
            shanhe_qimoua_info: '限定技,出牌阶段,你可以失去任意点体力并摸等量的牌,直到回合结束,你计算与其他角色的距离时-X,且你可以多使用X张【杀】.(X为你失去的体力值)',
            shanhe_zengou: '谮构',
            shanhe_zengou_info: '当有角色使用【闪】时,若其在你的攻击范围内,则你可以弃置一张非基本牌或失去1点体力,取消此【闪】的目标并获得其对应的实体牌.',
            shanhe_yimie: '夷灭',
            shanhe_yimie2: '夷灭',
            shanhe_yimie_info: '每回合限一次,当你对其他角色造成伤害时,若伤害值X小于Y,则你可失去1点体力,将伤害值改为Y.此伤害结算结束后,其回复(Y-X)点体力(Y为其体力值).',
            shanhe_xiantu: '献图',
            shanhe_xiantu2: '献图',
            shanhe_xiantu3: '献图',
            shanhe_xiantu_info: '一名其他角色的出牌阶段开始时,你可以摸两张牌,交给其两张牌.若如此做,此阶段结束时,若该角色未于此阶段内击杀过角色,则你失去1点体力.',
            shanhe_fenji: '奋激',
            shanhe_fenji_info: '当一名角色因另一名角色的弃置或获得而失去手牌后,你可以失去1点体力.若如此做,失去手牌的角色摸两张牌.',
            shanhe_jixian: '急陷',
            shanhe_jixian_info: '摸牌阶段结束时,你可以选择一名满足以下至少一项条件的角色:⒈装备区内有防具牌;⒉拥有的普通技能数大于你;⒊体力值等于体力上限.你视为对其使用一张【杀】,摸X张牌(X为其于此【杀】结算前满足的条件数);若此【杀】未造成伤害,则你失去1点体力.',
            fenghuo_shanjia: '缮甲',
            fenghuo_shanjia_info: '出牌阶段开始时,你可以摸三张牌,弃置3-X张牌(X为你本局游戏内不因使用而失去过的装备牌的数目且至多为3).若你没有以此法弃置:基本牌,此阶段你使用【杀】的次数上限+1;锦囊牌,此阶段你使用牌无距离限制;基本牌或锦囊牌,你可以视为使用一张【杀】.',
            shanhe_xuanfeng: '旋风',
            shanhe_xuanfeng_info: '当你失去装备区内的牌时,或于弃牌阶段弃置了两张或更多的手牌后,你可以依次弃置一至两名其他角色的共计两张牌.',
            shanhe_xianzhou: '献州',
            shanhe_xianzhou_info: '限定技,出牌阶段,你可以将装备区内的所有牌交给一名其他角色,该角色选择一项:令你回复X点体力;或对其攻击范围内的X名角色各造成1点伤害.(X为你以此法交给该角色的牌的数量)',
            shanhe_yinju: '引裾',
            shanhe_yinju_info: '限定技,出牌阶段,你可以选择一名其他角色.若如此做,当你于此阶段内使用牌指定其为目标后,你与其各摸一张牌;当你即将对其造成伤害时,防止此伤害,其回复等量的体力.',
            shanhe_yinju2: '引裾',
            shanhe_xiongzhi: '雄志',
            shanhe_xiongzhi_info: '限定技,出牌阶段,你可展示牌堆顶的一张牌并使用之.若如此做,你重复此流程,直到你以此法展示的牌无法使用.',
            shanhe_tishen: '替身',
            shanhe_tishen_info: '限定技,准备阶段,你可以将体力回复至上限,摸X张牌(X为你回复的体力值).',
            shanhe_juesheng: '决生',
            shanhe_juesheng_info: '限定技.出牌阶段,你可视为使用一张【决斗】.当你因此【决斗】造成伤害时,你将伤害值改为X(X为目标角色本局游戏内使用过【杀】的数量且至少为1)且令目标角色获得此技能直到其下回合结束.',
            shanhe_mengjin: '猛进',
            shanhe_mengjin_info: '当你使用的【杀】被【闪】抵消时,你可以弃置目标角色的一张牌.',
            shanhe_abi: '阿鼻',
            shanhe_abi_info: '锁定技,当你受到伤害后,你对伤害来源造成1点随机属性伤害.',
            shanhe_ganglie: '刚烈',
            shanhe_ganglie_info: '当你受到伤害后,你可以判定.若结果不为♥️️,则伤害来源须弃置两张手牌,否则受到来自你的1点伤害.',
            shanhe_gangliea: '刚烈',
            shanhe_gangliea_info: '当你受到1点伤害后,你可进行判定,若结果为:红色,你对伤害来源造成1点伤害;黑色,你弃置伤害来源一张牌.',
            shanhe_zhongyun: '忠允',
            shanhe_zhongyun2: '忠允',
            shanhe_zhongyun_info: '锁定技.每名角色的回合限一次,你受伤/回复体力后,若你的体力值与手牌数相等,你回复一点体力或对你攻击范围内的一名角色造成1点伤害;每名角色的回合限一次,你获得手牌或失去手牌后,若你的体力值与手牌数相等,你摸一张牌或弃置一名其他角色一张牌.',
            shanhe_luanchang: '乱常',
            shanhe_luanchang_info: '锁定技,准备阶段,你视为使用【南蛮入侵】;结束阶段,你视为使用【万箭齐发】.',
            shanhe_jiangchi: '将驰',
            shanhe_jiangchi_info: '摸牌阶段结束时,你可以选择一项:1、摸一张牌,若如此做,你本回合内不能使用或打出【杀】且【杀】不计入手牌上限. 2、弃置一张牌,若如此做,出牌阶段你使用【杀】无距离限制且你可以额外使用一张【杀】,直到回合结束.',
            shanhe_zhue: '助恶',
            shanhe_zhue_info: '锁定技,当其他角色造成伤害后,其与你分别摸两张和一张牌.',
            shanhe_qicaia: '奇才',
            shanhe_qicaia_info: '锁定技,你使用锦囊牌无距离限制.',
            shanhe_qicai: '奇才',
            shanhe_qicai_info: '锁定技,你使用锦囊牌无距离限制.当其他角色弃置你装备区里的防具或宝物牌时,你防止之.',
            shanhe_mingzhe: '明哲',
            shanhe_mingzhe_info: '每当你于回合外使用或打出红色牌时,或于回合外因弃置而失去一张红色牌后,你可以摸一张牌.',
            shanhe_biyuea: '闭月',
            shanhe_biyuea_info: '结束阶段,你可以摸一张牌.',
            shanhe_biyue: '闭月',
            shanhe_biyue_info: '结束阶段,你可以摸一张牌,若你没有手牌,则改为摸两张牌.',
            shanhe_zhouxue: '咒雪',
            shanhe_zhouxue_info: '锁定技,受到你造成的伤害的其他角色直到你的下回合开始时,手牌上限为0且无法获得护甲.',
            shanhe_xuechi: '血池',
            shanhe_xuechi_info: '锁定技,结束阶段,你令随机一名敌方角色失去2点体力.',
            shanhe_zhangji: '长姬',
            shanhe_zhangji_info: '每名角色的结束阶段,若你于此回合:造成过伤害,你可以令其摸两张牌;受到过伤害,你可以令其弃置两张牌.',
            shanhe_juepan: '绝叛',
            shanhe_juepan_info: '出牌阶段限一次,你可重铸至多3张牌,对一名角色造成X点伤害(X为本次重铸后你手牌中增加的【杀】的数量).',
            shanhe_wanyi: '婉嫕',
            shanhe_wanyi_info: '①当你使用【杀】或普通锦囊牌指定其他角色为唯一目标后,你可将其的一张牌置于你的武将牌上作为<嫕>.②你不能使用/打出/弃置与<嫕>花色相同的牌.③结束阶段或当你受到伤害后,你令一名角色获得你的一张<嫕>.',
            shanhe_hezhong: '和衷',
            shanhe_hezhong_info: '每回合每项限一次,当你的手牌数变为1后,你可以展示唯一手牌并摸一张牌,你选择一项:①本回合使用的下一张点数大于此牌的点数的普通锦囊牌额外结算一次;②本回合使用的下一张点数小于此牌的点数的普通锦囊牌额外结算一次.',
            shanhe_jianying: '渐营',
            shanhe_jianying_info: '当你于出牌阶段内使用与此阶段你使用的上一张牌点数或花色相同的牌时,你可以摸一张牌.',
            jiange_tanshi: '贪食',
            jiange_tanshi_info: '锁定技,结束阶段开始时,你须弃置一张手牌.',
            jiange_tunshi: '吞噬',
            jiange_tunshi_info: '锁定技,准备阶段,你对所有手牌数大于你的敌方角色造成1点伤害.',
            jiange_nailuo: '奈落',
            jiange_nailuo_info: '结束阶段,你可以将你的武将牌翻面,令所有敌方角色弃置装备区内的所有牌.',
            shanhe_luoshena: '洛神',
            shanhe_luoshena_info: '准备阶段,你可以判定.若结果为黑色,你获得判定牌.你可重复此流程,直到出现红色的判定结果.',
            shanhe_luoshen: '洛神',
            shanhe_luoshen_info: '准备阶段,你可以进行判定,若结果为黑色则获得此判定牌,且可重复此流程直到出现红色的判定结果.你通过〖洛神〗获得的牌,不计入当前回合的手牌上限.',
            shanhe_jiejian: '捷谏',
            shanhe_jiejian_info: '当你每回合使用第x张牌指定目标后,你可以令其中一个目标摸x张牌.(为此牌牌名字数)',
            shanhe_yanhuo: '延祸',
            shanhe_yanhuo_info: '当你死亡时,你可以弃置击杀你的角色至多X张牌(X为你的牌数).',
            shanhe_denglou: '登楼',
            shanhe_denglou_info: '限定技,结束阶段,若你没有手牌,则你可以观看牌堆顶的四张牌,依次使用其中的所有基本牌(不能使用则弃置),获得其余的牌.',
            shanhe_mingjian: '明鉴',
            shanhe_mingjian2: '明鉴',
            shanhe_mingjian_info: '出牌阶段限一次,你可以将所有手牌交给一名其他角色,若如此做,该角色于其下个回合的手牌上限+1,且使用【杀】的次数上限+1.',
            shanhe_xiaosi: '效死',
            shanhe_xiaosi_info: '出牌阶段限一次.你可以选择一名有手牌的其他角色并弃置一张基本牌.若其有可被弃置的基本牌,其弃置一张基本牌.你可以以任意顺序使用你与其以此法弃置的牌(无距离和次数限制).最后若其未以此法弃置牌,你摸一张牌.',
            shanhe_zhiji: '志继',
            shanhe_zhiji_info: '觉醒技,准备阶段,若你没有手牌,你须回复1点体力或摸两张牌,减1点体力上限,并获得技能〖观星〗.',
            shanhe_wanghun: '忘魂',
            shanhe_wanghun_info: '锁定技,你死亡时,令随机一名敌方角色随机失去一个技能(觉醒技除外),并在牌堆中加入两张回魂.',
            shanhe_wuzanga: '无脏',
            shanhe_wuzanga_info: '锁定技,摸牌阶段,你的摸牌基数改为X(X为你的体力值一半且至少为5);你的手牌上限基数为0.',
            shanhe_zhiyan: '直言',
            shanhe_zhiyan_info: '结束阶段,你可以令一名角色摸一张牌并展示之,若为装备牌,其使用此牌并回复一点体力.',
            jiange_zhenwei: '镇卫',
            jiange_zhenwei_info: '锁定技,敌方角色计算与己方其他角色的距离+1.',
            jiange_benlei: '奔雷',
            jiange_benlei_info: '准备阶段,你可对一名敌方攻城器械随机造成2~3点雷电伤害.',
            shanhe_zhenwei: '镇卫',
            shanhe_zhenwei2: '镇卫',
            shanhe_zhenwei_info: '当一名其他角色成为【杀】或黑色锦囊牌的目标时(使用者不是你),若该角色的体力值小于你且此牌的目标角色数为1,你可以弃置一张牌.若如此做,你选择一项:1、摸一张牌,将此【杀】或黑色锦囊牌转移给你;2、令此【杀】或黑色锦囊牌无效,将此【杀】或黑色锦囊牌置于使用者的武将牌旁,若如此做,当前回合结束后,使用者获得使用者武将牌旁的这些牌.',
            shanhe_tianbian: '天辩',
            shanhe_tianbian_info: '你可以用牌堆顶牌进行拼点;若你拼点的牌花色为♥️️,则点数视为K.',
            shanhe_wurong: '怃戎',
            shanhe_wurong_info: '出牌阶段限一次,你可以令一名其他角色与你同时展示一张手牌:若你展示的是【杀】且该角色展示的不是【闪】,则你弃置此【杀】并对其造成1点伤害;若你展示的不是【杀】且该角色展示的是【闪】,则你弃置你展示的牌并获得其一张牌.',
            shanhe_wuhun22: '武魂',
            shanhe_wuhun23: '武魂',
            shanhe_wuhun: '武魂',
            shanhe_wuhun_info: '锁定技,当你受到伤害后,伤害来源获得X个<梦魇>标记(X为伤害点数).锁定技,当你死亡时,你选择一名<梦魇>标记数量最多的其他角色.该角色进行判定:若判定结果不为【桃】或【桃园结义】,则该角色死亡.',
            shanhe_jianchu: '鞬出',
            shanhe_jianchu_info: '当你使用【杀】指定一名角色为目标后,你可以弃置其一张牌,若以此法弃置的牌不为基本牌,此【杀】不可被【闪】响应且你本回合使用【杀】的次数上限+1,为基本牌,该角色获得此【杀】.',
            shanhe_bolong: '驳龙',
            shanhe_bolong_info: '出牌阶段限一次.你可以令一名其他角色选择一项:1.你交给其一张牌,视为对其使用一张雷【杀】;2.交给你等同于你手牌数的牌,视为对你使用一张【酒】.',
            shanhe_anjian: '暗箭',
            shanhe_anjian_info: '锁定技,当你使用【杀】对目标角色造成伤害时,若你不在其攻击范围内,则此杀伤害+1.',
            shanhe_jieyinga: '劫营',
            shanhe_jieyinga_info: '回合开始时,若场上没有拥有<营>标记的角色,你获得1个<营>标记;结束阶段,你可以将你的一个<营>标记交给一名角色;有<营>标记的角色摸牌阶段多摸一张牌,出牌阶段使用【杀】的次数上限+1,手牌上限+1.有<营>的其他角色回合结束时,其移去<营>标记,你获得其所有手牌.',
            shanhe_jieyinga_mark: '劫营',
            shanhe_xiangle: '享乐',
            shanhe_xiangle_info: '锁定技,当其他角色使用【杀】指定你为目标时,其需弃置一张基本牌,否则此【杀】对你无效.',
            shanhe_jigong: '急攻',
            shanhe_jigong_info: '出牌阶段开始时,你可以摸两张牌.若如此做,你本回合的手牌上限改为X(X为你此阶段造成的伤害点数之和).',
            shanhe_xiying: '袭营',
            shanhe_xiying2: '袭营',
            shanhe_xiying_info: '出牌阶段开始时,你可以弃置一张非基本手牌,令所有其他角色依次选择一项:弃置一张牌,或本回合内不能使用或打出牌;且你本回合内获得如下效果:结束阶段,若你于本回合的出牌阶段内造成过伤害,则你从牌堆中获得一张伤害性基本牌或普通锦囊牌.',
            shanhe_wuji: '武继',
            shanhe_wuji_info: '觉醒技,结束阶段开始时,若你于此回合内造成过3点或更多伤害,你加1点体力上限并回复1点体力,失去〖虎啸〗,从场上、牌堆或弃牌堆中获得【青龙偃月刀】',
            shanhe_wangxi: '忘隙',
            shanhe_wangxi_info: '每当你对其他角色造成1点伤害后,或受到其他角色造成的1点伤害后,你可与该角色各摸一张牌.',
            shanhe_guanxing: '观星',
            shanhe_guanxing_info: '准备阶段,你可以观看牌堆顶的X张牌,并将其以任意顺序置于牌堆项或牌堆底.(X为存活角色数且至多为5)',
            shanhe_kongcheng: '空城',
            shanhe_kongcheng_info: '锁定技,当你没有手牌时,你不能成为【杀】或【决斗】的目标.',
            shanhe_zishua: '自书',
            shanhe_zishua_info: '锁定技,你的回合外,你获得的牌均会在当前回合结束后置入弃牌堆;你的回合内,当你不因〖自书〗而获得牌时,你摸一张牌.',
            shanhe_xuanlve: '旋略',
            shanhe_xuanlve_info: '当你失去装备区里的牌后,你可以弃置一名其他角色的一张牌.',
            shanhe_zaowang: '造王',
            shanhe_zaowang2: '造王',
            shanhe_zaowang_info: '限定技.出牌阶段,你可以令一名角色加1点体力上限,回复1点体力并摸三张牌,且获得如下效果:主公死亡时,若其身份为忠臣,则其和主公交换身份牌;其死亡时,若其身份为反贼且伤害来源的身份为主公或忠臣,则以主忠胜利结束本局游戏.',
            shanhe_yongjin: '勇进',
            shanhe_yongjin_info: '限定技,出牌阶段,你可以依次移动场上的至多三张不同的装备牌.',
            shanhe_xiangshu: '襄戍',
            shanhe_xiangshu_info: '限定技,结束阶段开始时,若你本回合内造成过伤害,则你可以选择一名已受伤的角色.该角色回复X点体力并摸X张牌(X为你本回合内造成的伤害值总和且至多为5).',
            shanhe_jiefan: '解烦',
            shanhe_jiefan_info: '限定技,出牌阶段,你可以选择一名角色,令攻击范围内含有该角色的所有角色依次选择一项:1.弃置一张武器牌;2.令其摸一张牌.',
            shanhe_xiongyi: '雄异',
            shanhe_xiongyi_info: '限定技,出牌阶段,你可以令与你势力相同的所有角色各摸三张牌,若你的势力是角色最少的势力(或之一),则你回复1点体力.',
            shanhe_xiongsuan: '凶算',
            shanhe_xiongsuan_info: '限定技,出牌阶段,你可以弃置一张手牌并选择与你势力相同的一名角色,对其造成1点伤害,你摸三张牌.若该角色有已发动的限定技,则你选择其中一个限定技,此回合结束后视为该限定技未发动过.',
            shanhe_tianjie: '天劫',
            shanhe_tianjie_info: '一名角色的回合结束时,若本回合牌堆洗过牌,你可以选择至多三名其他角色.你依次对每名目标角色造成X点雷电伤害(X为其手牌中【闪】的数量,至少为1).',
            shanhe_huituo: '恢拓',
            shanhe_huituo_info: '当你受到伤害后,你可以令一名角色进行一次判定,若结果为红色,该角色回复1点体力;若结果为黑色,该角色摸X张牌(X为此次伤害的伤害点数).',
            shanhe_tairan: '泰然',
            shanhe_tairan2: '泰然',
            shanhe_tairan_info: '锁定技,回合结束时,你将体力回复至体力上限,并将手牌摸至体力上限(称为<泰然>牌).你的下一个出牌阶段开始时,你失去上一次以此法回复的体力值的体力,弃置所有<泰然>牌.',
            shanhe_botu: '博图',
            shanhe_botu_info: '每轮限X次.回合结束时,若本回合内置入弃牌堆的牌中包含至少四种花色,则你可获得一个额外的回合.(X为存活角色数且至多为3)',
            shanhe_fengying: '奉迎',
            shanhe_fengying_info: '限定技,出牌阶段,你可以弃置所有手牌,本回合结束后,你执行一个额外的回合.此额外的回合开始时,若你所属势力的角色数是全场唯一最多的,你将手牌摸至体力上限.',
            shanhe_sanyao: '散谣',
            shanhe_sanyao_info: '出牌阶段限一次,你可以弃置一张牌并指定一名体力值最多(或之一)的角色,你对其造成1点伤害.',
            shanhe_choutao: '仇讨',
            shanhe_choutao_info: '当你使用【杀】指定目标后或成为【杀】的目标后,你可以弃置此【杀】使用者的一张牌,令此【杀】不可被响应.若你是此【杀】的使用者,则你令此【杀】不计入次数限制.',
            shanhe_paoxiaoa: '咆哮',
            shanhe_paoxiaoa2: '咆哮',
            shanhe_paoxiaoa_info: '锁定技,你使用【杀】无次数限制.当你使用的【杀】被抵消后,你本回合下一次【杀】造成的伤害+1.',
            shanhe_fanjiana: '反间',
            shanhe_fanjiana_info: '出牌阶段限一次,你可以令一名其他角色选择一种花色,令其获得并展示你的一张手牌,若此牌花色与其选择的花色不同,你对其造成1点伤害.',
            shanhe_weimu: '帷幕',
            shanhe_weimu_info: '锁定技.①你不能成为黑色锦囊牌的目标.②当你于回合内受到伤害时,你防止此伤害.',
            shanhe_pojun: '破军',
            shanhe_pojun2: '破军',
            shanhe_pojun_info: '当你于出牌阶段内使用【杀】指定一个目标后,你可以将其至多X张牌扣置于该角色的武将牌旁(X为其体力值).若如此做,当前回合结束后,该角色获得其武将牌旁的所有牌.',
            shanhe_pojuna: '破军',
            shanhe_pojuna2: '破军',
            shanhe_pojuna3: '破军',
            shanhe_pojuna_info: '当你使用【杀】指定目标后,你可以将其的至多X张牌置于其武将牌上(X为其体力值),其于当前回合结束时获得这些牌.当你使用【杀】对一名角色造成伤害时,若该角色的手牌数和装备区内的牌数均不大于你,则此伤害+1.',
            shanhe_jieyuan: '竭缘',
            shanhe_jieyuan_more: '竭缘',
            shanhe_jieyuan_less: '竭缘',
            shanhe_jieyuan_info: '当你对一名其他角色造成伤害时,若其体力值大于或等于你的体力值,你可弃置一张黑色手牌,令此伤害+1;当你受到一名其他角色造成的伤害时,若其体力值大于或等于你的体力值,你可弃置一张红色手牌,令此伤害-1.',
            shanhe_gongqing: '公清',
            shanhe_gongqing_info: '锁定技.当你受到伤害时,若伤害来源的攻击范围:<3,则你令此伤害的数值减为1.>3,你令此伤害+1.',
            shanhe_benyu: '贲育',
            shanhe_benyu2: '贲育',
            shanhe_benyu_info: '当你受到伤害后,你可选择:①将手牌摸至与伤害来源手牌数相同(至多摸至5张);②弃置大于伤害来源手牌数的牌,对其造成1点伤害.',
            shanhe_gongji: '弓骑',
            shanhe_gongji_info: '出牌阶段限一次,你可以弃置一张牌,你的攻击范围视为无限直到回合结束.若你以此法弃置的牌为装备牌,则你可以弃置一名其他角色的一张牌.',
            shanhe_lizhan: '励战',
            shanhe_lizhan_info: '结束阶段,你可以令任意名已受伤的角色摸一张牌.',
            shanhe_hongyan: '红颜',
            shanhe_hongyan_info: '锁定技,你区域内的♠️️牌和♠️️判定牌均视为♥️️.',
            shanhe_hongyana: '红颜',
            shanhe_hongyana_info: '锁定技,你的♠️️牌的花色视为♥️️.若你的装备区内有♥️️牌,则你的手牌上限基数视为体力上限.',
            shanhe_shuangren: '双刃',
            shanhe_shuangren_info: '出牌阶段开始时,你可以与一名角色拼点.若你赢,你视为对其或与其势力相同的另一名角色使用一张【杀】(不计入出牌阶段的次数限制);若你没赢,你结束出牌阶段.',
            shanhe_bamen: '八门',
            shanhe_bamen_info: '每轮开始时,你随机指定一名敌方角色,令其本轮内获得技能【金锁】.',
            shanhe_jinsuo: '金锁',
            shanhe_jinsuo_info: '锁定技,出牌阶段,若你本阶段使用过6张牌,则你不能使用牌.',
            fadong_ruiji: '锐骑',
            fadong_ruiji_info: '锁定技,己方角色摸牌阶段额外摸一张牌.',
            fadong_jiaoxia: '狡黠',
            fadong_jiaoxia_info: '锁定技,己方角色的黑色手牌不计入手牌上限.',
            fadong_moqu: '魔躯',
            fadong_moqu_info: '锁定技,每名角色的结束阶段,若你的手牌数不大于当前体力值,你摸两张牌;其他己方角色受到伤害后,你弃置一张牌.',
            shanhe_longyin: '龙吟',
            shanhe_longyin_info: '当一名角色于其出牌阶段内使用【杀】时,你可弃置一张牌令此【杀】不计入出牌阶段使用次数,若此【杀】为红色,你摸一张牌.',
            jiange_tianjiang: '天将',
            jiange_tianjiang_info: '锁定技,当己方角色每回合首次使用【杀】造成伤害后,其摸三张牌.',
            shanhe_tianjiang: '天将',
            shanhe_tianjiang_info: '锁定技,当己方角色每回合首次使用【杀】造成伤害后,其摸一张牌.',
            jiange_zhenxi: '镇西',
            jiange_zhenxi_info: '锁定技,当己方角色受到伤害后,你令其下个摸牌阶段摸牌数+1.',
            jiange_zhenxi2: '镇西',
            shanhe_beige: '悲歌',
            shanhe_beige_info: '当有角色受到【杀】造成的伤害后,你可以弃一张牌,并令其进行一次判定,若判定结果为:♥️️该角色回复1点体力;♦️️︎该角色摸两张牌;♣️️伤害来源弃两张牌;♠️️伤害来源将其武将牌翻面.',
            shanhe_liangzhu: '良助',
            shanhe_liangzhu_info: '当一名角色于其出牌阶段内回复体力时,你可以选择一项:1、摸一张牌;2、令该角色摸两张牌.',
            shanhe_fumian: '福绵',
            shanhe_fumian_info: '准备阶段,你可以选择一项:1.摸牌阶段多摸一张牌;2.使用红色牌可以多选择一个目标(限一次).若与你上回合选择的选项不同,则该选项数值+1并复原此技能.',
            shanhe_daiyan: '怠宴',
            shanhe_daiyan_info: '结束阶段,你可以令一名其他角色从牌堆中获得一张♥️️基本牌,若其于上回合成为过该技能目标,则其失去1点体力.',
            shanhe_feiyang: '飞扬',
            shanhe_feiyang_info: '判定阶段开始时,你可以弃置两张手牌并弃置判定区所有牌.',
            shanhai_sixie: '祀邪',
            shanhai_sixie_info: '准备阶段,你可以从随机三个技能中获得一个技能,若你的技能数超过三个,则你须选择失去一个技能.',
            shanhai_duomo: '堕魔',
            shanhai_duomo_info: '锁定技,其他角色发动【祀邪】后,或你的回合开始时,你依次获得<准备阶段摸一张牌>/<使用【杀】的次数上限+1>/<手牌上限+1>的效果(每项至多获得5次).',
            shanhai_meihuo: '魅惑',
            shanhai_meihuo_info: '出牌阶段限一次,你可以与一名角色拼点.若你赢,你本回合无视与该角色的距离,无视该角色的防具且对其使用【杀】没有次数限制;若你没赢,你本回合不能使用【杀】.',
            shanhai_qinyun: '琴韵',
            shanhai_qinyun_info: '你的回合外,你可以将一张红色牌当作【桃】使用.',
            shanhai_duanwei: '断尾',
            shanhai_duanwei_info: '判定阶段开始时,若你的判定区有牌,则你可以弃置两张手牌,弃置你判定区的一张牌.',
            shanhe_luoyi: '裸衣',
            shanhe_luoyi_info: '摸牌阶段开始时,你展示牌堆顶的三张牌.你可以放弃摸牌.若如此做,你获得其中的基本牌、武器牌和【决斗】,且直到你的下回合开始,你使用的【杀】或【决斗】造成伤害时,此伤害+1.否则,你将这些牌置入弃牌堆.',
            shanhe_luoyia: '裸衣',
            shanhe_luoyia_info: '摸牌阶段,你可以少摸一张牌.若如此做,当你本回合内使用【杀】或【决斗】造成伤害时,此伤害+1.',
            tongque_luoyi: '裸衣',
            tongque_luoyi_info: '摸牌阶段开始时,你展示牌堆顶的五张牌.你可以放弃摸牌.若如此做,你获得其中的基本牌、武器牌和【决斗】,且直到你的下回合开始,你使用的【杀】或【决斗】造成伤害时,此伤害+2.否则,你将这些牌置入弃牌堆.',
            huoshao_luoyi: '裸衣',
            huoshao_luoyi2: '裸衣',
            huoshao_luoyi_info: '摸牌阶段开始时,你展示牌堆顶的三张牌并获得.其中每有一张基本牌、武器牌和【决斗】,以你为伤害来源的【杀】或【决斗】造成的伤害+1,直到你的下回合开始.',
            huoshao_hujia: '护驾',
            huoshao_hujia_info: '每回合限X次,当你需要使用或打出一张【闪】时,你可以视为使用或打出了一张【闪】.(X为其他魏势力角色存活人数)',
            huoshao_zhenjun: '镇军',
            huoshao_zhenjun_info: '准备阶段或结束阶段,你可以弃置一名角色X张牌,视为对其使用X张【杀】.(X为其手牌数减体力值且至少为1)',
            huoshao_zhenwei: '镇卫',
            huoshao_zhenwei_info: '锁定技,当一名其他己方角色成为【杀】或黑色锦囊牌的唯一目标时,若你未横置,你令此牌无效(此技能每回合发动三次后,改为你摸一张牌,将此【杀】或黑色锦囊牌转移给你).',
            huoshao_qice: '奇策',
            huoshao_qice_info: '出牌阶段限一次,你可以将所有的手牌(至少一张)当做任意一张普通锦囊牌使用,此牌结算完成后,你摸等同于此牌目标数张牌.',
            huoshao_zhiyu: '智愚',
            huoshao_zhiyu_info: '当你受到伤害后,你可以摸等同于伤害量张牌并令下回合奇策发动次数+1.展示所有手牌且伤害来源弃置等量张手牌.',
            huoshao_qiaobian: '巧变',
            huoshao_qiaobian1: '巧变·判定',
            huoshao_qiaobian2: '巧变·摸牌',
            huoshao_qiaobian3: '巧变·出牌',
            huoshao_qiaobian4: '巧变·弃牌',
            huoshao_qiaobian_info: '你可以跳过自己的一个阶段(准备阶段和结束阶段除外);若你以此法跳过了摸牌阶段,则你可以获得每名敌方角色的各一张手牌;若你以此法跳过了出牌阶段,则你可以移动场上的一张牌,视为对所有敌方角色各使用一张【杀】.',
            huoshao_shensu: '神速',
            huoshao_shensu_info: '每个阶段开始时(准备阶段和结束阶段除外),你可以视为使用一张无距离限制的【杀】,若此【杀】未造成伤害,则你弃置一张牌并跳过此阶段.',
            huoshao_shensu1: '神速',
            huoshao_shensu2: '神速',
            huoshao_shensu4: '神速',
            huoshao_yangwu: '扬武',
            huoshao_yangwu_info: '锁定技,己方角色成为【杀】的目标后,你随机弃置来源的一张牌.',
            huoshao_shipo: '识破',
            huoshao_shipo_info: '锁定技,敌方角色使用锦囊牌时,有70%概率你令此牌失效.',
            huoshao_shefu: '设伏',
            huoshao_shefu_info: '当有其他角色出牌阶段使用手牌时,若此牌与你本回合失去过的牌花色相同,你可以取消此牌的所有目标且该角色所有非Charlotte技失效直至回合结束.',
            huoshao_benyu: '贲育',
            huoshao_benyu_info: '当你受到伤害后,你可将手牌摸至与伤害来源手牌数相同(至多摸至5张),弃置一张牌对其造成1点伤害.',
            huoshao_ganglie: '刚烈',
            huoshao_ganglie_info: '当你受到伤害后,若你未被横置,则你可以对伤害来源造成等量伤害并随机弃置其等量张牌.',
            huoshao_qingjian: '清俭',
            huoshao_qingjian_info: '当你于摸牌阶段外获得牌时,你可以展示任意张牌并交给一名其他角色.你可令当前回合角色回复或失去X点体力(X为你给出的牌中包含的类别数).每回合限一次.',
            huoshao_duanliang: '断粮',
            huoshao_duanliang_info: '锁定技,当你对其他角色造成伤害后,随机弃置其一张手牌.你对手牌数小于你的角色造成的伤害+1.',
            huoshao_jiezi: '截辎',
            huoshao_jiezi_info: '锁定技,敌方角色摸牌阶段摸牌后,你摸等量张牌.',
            huoshao_heyi: '鹤翼',
            huoshao_heyi_info: '锁定技,所有己方角色视为拥有技能〖飞影〗.',
            huoshao_huyuan: '护援',
            huoshao_huyuan_info: '结束阶段开始时,你可以将牌堆第一张装备牌置入一名角色的装备区内,该角色回复1点体力(满血则改为摸两张牌),你可获得该角色距离为1的每名角色的各一张牌.',
            huoshao_xiaoguo: '骁果',
            huoshao_xiaoguo_info: '其他角色的结束阶段开始时,若你未被横置,你可以弃置一张牌,令该角色选择一项:1.弃置1张装备牌,你摸1张牌;2.受到你对其造成的1点伤害.(每次发动技能两个选项中数字+1,至多为5)',
            huoshao_xunxun: '恂恂',
            huoshao_xunxun_info: '摸牌阶段,你可以观看牌堆顶的四张牌,将其中的两张牌置于牌堆顶,将其余的牌交给一名其他角色.',
            huoshao_wangxi: '忘隙',
            huoshao_wangxi_info: '锁定技,当你对其他角色造成伤害后,摸等同于该角色体力值张牌,交给其一张牌.',
            huoshao_tuxi: '突袭',
            huoshao_tuxi_info: '摸牌阶段,你可以获得每名敌方角色的各一张手牌,摸等量的牌并视为对这些角色各使用一张【杀】.',
            huoshao_zhanjian: '战舰',
            huoshao_zhanjian_info: '锁定技,你无法被横置.',
            huoshao_jiechuan: '结船',
            huoshao_jiechuan_info: '锁定技,你始终处于横置状态.',
            huoshao_tiesuo: '铁索',
            huoshao_tiesuo_info: '锁定技,当你使用牌后,横置从你开始逆时针计算第X名角色(X为此牌点数).',
            huoshao_huoman: '火蔓',
            huoshao_huoman_info: '锁定技,当你使用火【杀】或者【火攻】后,随机对敌方发射3~10枚火弹,被命中的敌方受到1点火焰伤害.',
            shanhe_wushuang: '无双',
            shanhe_wushuang_info: '锁定技,当你使用【杀】指定一个目标后,该角色需依次使用两张【闪】才能抵消此【杀】;当你使用【决斗】指定一个目标后,或成为一名角色使用【决斗】的目标后,该角色每次响应此【决斗】需依次打出两张【杀】.',
            shanhe_kunfen: '困奋',
            shanhe_kunfen_info: '锁定技,结束阶段开始时,你失去1点体力,摸两张牌.',
            shanhe_ranji: '燃己',
            shanhe_ranji_info: '限定技,结束阶段.若你本回合使用过牌的阶段数大于等于/小于等于体力值,你可以获得技能〖困奋〗/〖诈降〗(同时满足则都获得,以此法获得的〖困奋〗直接修改为非锁定技).若如此做,你将手牌数调整至手牌上限或将体力值回复至体力上限,你不能回复体力直到你击杀角色.',
            shanhe_chongsheng: '重生',
            shanhe_chongsheng_info: '限定技,当你处于濒死状态时,你可以弃置所有判定区牌,复原你的武将牌,将手牌摸至体力上限(至多为5),将体力回复至体力上限(至多为5).',
            shanhe_qiangxia: '强袭',
            shanhe_qiangxia_info: '出牌阶段限两次,你可以失去1点体力或弃置一张武器牌,一名本阶段内未成为过〖强袭〗的目标的其他角色造成1点伤害.',
            shanhe_jiang: '激昂',
            shanhe_jiang_info: '每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或红色的【杀】时,你可以摸一张牌.',
            shanhe_jianga: '激昂',
            shanhe_jianga_info: '①当你使用【决斗】或红色【杀】指定第一个目标后,或成为【决斗】或红色【杀】的目标后,你可以摸一张牌.②当有【决斗】或红色【杀】于每回合内首次因弃置而进入弃牌堆后,你可以失去1点体力并获得这些牌.',
            shanhe_zhanjue: '战绝',
            shanhe_zhanjue_info: '出牌阶段,你可以将所有手牌当作【决斗】使用.此【决斗】结算后,你与以此法受到伤害的角色各摸一张牌.若你在同一阶段内以此法摸了两张或更多的牌,则此技能失效直到回合结束.',
            shanhe_lijian: '离间',
            shanhe_lijian_info: '出牌阶段限一次,你可以弃置一张牌,视为一名男性角色对另一名男性角色使用一张【决斗】(不可被【无懈可击】响应).',
            shanhe_guosea: '国色',
            shanhe_guosea_info: '你可以将一张♦️️牌当做【乐不思蜀】使用.',
            shanhe_jilia: '寄篱',
            shanhe_jilia_info: '锁定技,当一名其他角色成为红色基本牌或红色普通锦囊牌的目标时,若其与你的距离为1且你既不是此牌的使用者也不是目标,你也成为此牌的目标.',
            shanhe_lianying: '连营',
            shanhe_lianying_info: '当你失去最后的手牌时,你可以摸一张牌.',
            shanhe_lianyinga: '连营',
            shanhe_lianyinga_info: '当你失去最后的手牌时,你可以令至多X名角色各摸一张牌(X为你此次失去的手牌数).',
            shanhe_xuanbei: '选备',
            shanhe_xuanbei_info: '出牌阶段限一次.你可选择一名其他角色区域内的一张牌.其对你使用对应实体牌为此牌的【杀】.若此【杀】,未对你造成过伤害,你摸一张牌;对你造成过伤害,你摸两张牌.',
            shanhe_chengqi: '承启',
            shanhe_chengqi_info: '你可以将至少两张手牌当作本回合未使用过的基本牌或普通锦囊牌使用,且你以此法转化的牌名字数须不大于以此法转化的所有实体牌牌名字数之和,若你以此法转化的牌名字数等于以此法转化的所有实体牌牌名字数之和,则你使用此牌时可以令一名角色摸一张牌.',
            shanhe_xuanfeng: '旋风',
            shanhe_xuanfeng_info: '当你一次性失去至少两张牌后,或失去装备区的牌后,你可以依次弃置一至两名其他角色的共计两张牌.',
            shanhe_tianxianga: '天香',
            shanhe_tianxianga_info: '当你受到伤害时,你可以弃置一张♥️️手牌将此伤害转移给一名其他角色,令其摸X张牌(X为其已损失体力值).',
            shanhe_tianxiang: '天香',
            shanhe_tianxiang_info: '当你受到伤害时,你可以弃置一张♥️️手牌,防止此次伤害并选择一名其他角色,你选择一项:1.令其受到伤害来源对其造成的1点伤害,摸X张牌(X为其已损失体力值且至多为5);2.令其失去1点体力,获得你弃置的牌.',
            shanhe_liuli: '流离',
            shanhe_liuli_info: '当你成为【杀】的目标时,你可以弃置一张牌并将此【杀】转移给攻击范围内的一名其他角色(不能是此【杀】的使用者).',
            shanhe_zhuhai: '诛害',
            shanhe_zhuhai_info: '一名其他角色的结束阶段开始时,若该角色本回合造成过伤害,你可以对其使用一张【杀】.',
            shanhe_wenji: '问计',
            shanhe_wenji_info: '出牌阶段开始时,你可以令一名其他角色交给你一张牌.你于本回合内使用与该牌名称相同的牌时不能被其他角色响应.',
            shanhe_ziqu: '资取',
            shanhe_ziqu_info: '每名角色限一次,当你对有牌的其他角色造成伤害后,你可以防止此伤害.其将其点数最大的牌交给你.',
            shanhe_lirang: '礼让',
            shanhe_lirang_info: '当你的牌因弃置而置入弃牌堆后,你可以将其中的任意张牌交给其他角色.',
            shezhan_zongxuan: '纵玄',
            shezhan_zongxuan_info: '当你的牌因弃置而置入弃牌堆后,你可以令一名其他角色获得其中一张,你可获得其至多两张牌.',
            shanhe_duanhuna: '断魂',
            shanhe_duanhuna_info: '锁定技,当你死亡时,击杀你的角色失去所有战法.',
            sy_huihuo: '回火',
            sy_huihuo_info: '锁定技,出牌阶段,你可以多使用一张【杀】;当你死亡时,你对所有敌方角色各造成3点火焰伤害.',
            sy_furan: '复燃',
            sy_furan2: '复燃',
            sy_furan_info: '锁定技,当你处于濒死状态时,敌方角色可以将一张红色牌当【桃】对你使用.',
            shanhe_zhengnan: '征南',
            shanhe_zhengnan_info: '其他角色死亡后,你可以摸三张牌并获得下列技能中的任意一个:〖武圣〗、〖当先〗和〖制蛮〗.',
            shanhe_lianpo: '连破',
            shanhe_lianpo_info: '一名角色的回合结束时,若你本回合内击杀过角色,则你可以进行一个额外的回合.',
            shanhe_xianfu: '先辅',
            shanhe_xianfu2: '先辅',
            shanhe_xianfu2_bg: '辅',
            shanhe_xianfu_info: '锁定技,游戏开始时,你选择一名其他角色,当其受到伤害后,你受到等量的伤害,当其回复体力后,你回复等量的体力.',
            shanhe_chouce: '筹策',
            shanhe_chouce_info: '当你受到1点伤害后,你可以判定,若结果为:黑色,你弃置一名角色区域里的一张牌;红色,你选择一名角色,其摸一张牌,若其是〖先辅〗选择的角色,改为其摸两张牌.',
            shanhe_zhihu: '执笏',
            shanhe_zhihu_info: '锁定技,每回合限两次,当你对其他角色造成伤害后,你摸两张牌.',
            shanhe_tuxing: '图兴',
            shanhe_tuxing2: '图兴',
            shanhe_tuxing_info: '锁定技,当你废除一个装备栏时,你加1点体力上限并回复1点体力.若你所有的装备栏均已被废除,则你减4点体力上限,且本局游戏内造成的伤害+1.',
            fadong_yanglie: '扬烈',
            fadong_yanglie_info: '锁定技,准备阶段,你获得所有其他角色区域里的一张牌,你失去1点体力.',
            fadong_yangwu: '扬武',
            fadong_yangwu_info: '锁定技,准备阶段,你对所有其他角色造成1点伤害,你失去1点体力.',
            shanhe_aocai: '傲才',
            shanhe_aocai_info: '当你于回合外需要使用或打出一张基本牌时,你可以观看牌堆顶的两张牌.若你观看的牌中有此牌,你可以使用打出之.',
            shanhe_nitai: '拟态',
            shanhe_nitai_info: '锁定技,防止你于回合内受到的伤害;你于回合外受到火焰伤害+1.',
            sy_lingqu: '灵躯',
            sy_lingqu_info: '锁定技,当你受到伤害后,你摸一张牌,手牌上限+1;防止你受到的大于1点的伤害.',
            shanhe_xianwan: '娴婉',
            shanhe_xianwan_info: '①当你需要使用【闪】时,若你的武将牌未横置,则你可以横置武将牌并视为使用【闪】.②当你需要使用【杀】时,若你的武将牌横置,则你可以重置武将牌并视为使用【杀】.',
            shanhe_wanrong: '婉容',
            shanhe_wanrong_info: '当你成为【杀】的目标后,你可以摸一张牌.',
            shanhe_xingshang: '行殇',
            shanhe_xingshang_info: '当有角色死亡后,你可以获得该角色的所有牌.',
            shanhe_duanzi: '断辎',
            shanhe_duanzi_info: '锁定技,当你死亡时,击杀你的角色废除所有装备区.',
            shanhe_zhendu: '鸩毒',
            shanhe_zhendu_info: '一名角色的出牌阶段开始时,你可以弃置一张手牌,视为该角色使用了一张【酒】.若该角色不是你,你对其造成一点伤害.',
            shanhe_yiji: '遗计',
            shanhe_yiji_info: '当你受到1点伤害后,你可以摸两张牌,可以将至多两张手牌交给其他角色.',
            shanhe_hongde: '弘德',
            shanhe_hongde_info: '当你一次获得或失去至少两张牌后,你可以令一名其他角色摸一张牌.',
            shanhe_junbing: '郡兵',
            shanhe_junbing_info: '一名角色的结束阶段开始时,若其手牌数不大于1,该角色可以摸一张牌.若如此做,该角色将所有手牌交给你,你交给其等量的牌.',
            shanhe_qianxun: '谦逊',
            shanhe_qianxun_info: '每当一张延时类锦囊牌或其他角色使用的普通锦囊牌生效时,若你是此牌的唯一目标,你可以将所有手牌置于你的武将牌上,若如此做,此回合结束时,你获得你武将牌上的所有牌.',
            shanhe_qianxun2: '谦逊',
            shanhe_qianxuna: '谦逊',
            shanhe_qianxuna_info: '锁定技,当你成为【顺手牵羊】的目标时,或有【乐不思蜀】进入你的判定区时,取消之.',
            shanhe_qinwang: '勤王',
            shanhe_qinwang1: '勤王',
            shanhe_qinwang2: '勤王',
            shanhe_qinwang_info: '主公技,当你需要使用或打出一张【杀】时,你可以弃置一张牌,视为你发动了〖激将①〗.若有角色响应,则该角色打出【杀】时摸一张牌.',
            fadong_polu: '破虏',
            fadong_polu_info: '锁定技,当己方角色击杀一名敌方角色或你死亡时,你令己方角色各摸X张牌(X为此技能发动的次数).',
            shanhe_duanchang: '断肠',
            shanhe_duanchang_info: '锁定技,当你死亡时,击杀你的角色失去所有技能.',
            shanhe_duanchanga: '断肠',
            shanhe_duanchanga_info: '锁定技,当你死亡时,击杀你的角色失去所有技能.',
            jiange_lingfeng: '灵锋',
            jiange_lingfeng_info: '摸牌阶段,你可以放弃摸牌,亮出牌堆顶的三张牌,获得之,若这些牌的颜色不完全相同,你可令一名敌方角色失去1点体力.',
            jiange_jizhen: '激阵',
            jiange_jizhen_info: '结束阶段,你令所有已受伤的己方角色摸一张牌.',
            jiange_qinzhen: '亲阵',
            jiange_qinzhen_info: '锁定技,己方角色于其出牌阶段出杀次数+1.',
            jiange_gongshen: '工神',
            jiange_gongshen_info: '结束阶段,若已方器械已受伤,你可以为其回复1点体力,你可以对敌方器械造成1点火焰伤害.',
            jiange_yuhuo: '浴火',
            jiange_yuhuo_info: '锁定技,每当你受到火焰伤害时,防止此伤害.',
            shanhe_wuying: '无影',
            shanhe_wuying_info: '锁定技,敌方角色于其回合内获得手牌时,若其手牌数大于10,则你对其造成1点伤害.',
            shanhe_jieying: '结营',
            shanhe_jieying_info: '锁定技,游戏开始时或当你的武将牌重置时,你横置;所有已横置的角色手牌上限+2;结束阶段,你横置一名其他角色.',
            jiange_tianyu: '天狱',
            jiange_tianyu_info: '结束阶段,你令所有敌方角色进入连环状态.',
            shanhe_dianhu: '点虎',
            shanhe_dianhu_info: '锁定技,游戏开始时,你选择一名其他角色.当其受到来自你的伤害后或回复体力后,你摸一张牌.',
            shanhe_dianhu2: '点虎',
            shidian_moyan: '魔炎',
            shidian_moyan_info: '锁定技,每当你于回合外失去牌时,你进行一次判定,若结果为红色,你对一名其他角色造成1点火焰伤害.',
            shidian_moyana: '魔炎',
            shidian_moyana_info: '锁定技,每当你于回合外失去牌后,你进行一次判定,若结果为红色,你对一名其他角色造成2点火焰伤害.',
            shidian_danshu: '丹术',
            shidian_danshu_info: '锁定技,每当你于回合外失去牌后,你进行一次判定,若结果为红色,你回复1点体力.',
            shanhe_sijun: '肆军',
            shanhe_sijun_info: '准备阶段,若<黄>数大于牌堆的牌数,你可以移去所有<黄>,随机获得任意张点数之和为36的牌.',
            shanhe_miji: '秘计',
            shanhe_miji_info: '准备/结束阶段开始时,若你已受伤,你可以判定,若判定结果为黑色,你观看牌堆顶的X张牌(X为你已损失的体力值),将这些牌交给一名角色.',
            shanhe_cangxin: '藏心',
            shanhe_cangxin_info: '锁定技.①当你每回合首次受到伤害时,你展示牌堆底的三张牌并弃置其中的任意张牌,此伤害-X(X为以此法弃置的♥️️牌的数量).②摸牌阶段开始时,你展示牌堆底的三张牌,摸X张牌(X为其中♥️️牌的数量).',
            shanhe_meibu: '魅步',
            shanhe_meibu_info: '其他角色的出牌阶段开始时,若你在其攻击范围内,你可以弃置一张牌,令该角色于本回合内获得技能〖止息〗.若你以此法弃置的牌不是【杀】或黑色锦囊牌,则本回合其与你的距离视为1.',
            shanhe_zhixi: '止息',
            shanhe_zhixi_info: '锁定技.出牌阶段内,若你使用过锦囊牌或使用过的牌数不小于X,则你不能使用牌(X为你的体力值).',
            shanhe_anguo: '安国',
            shanhe_anguo_info: '出牌阶段限一次,你可以选择一名其他角色,若其手牌数为全场最少,其摸一张牌;体力值为全场最低,回复1点体力;装备区内牌数为全场最少,随机使用一张装备牌.若该角色有未执行的效果且你满足条件,你执行之.',
            shanhe_fentian: '焚天',
            shanhe_fentian_info: '锁定技,结束阶段,若你的手牌数小于体力值,你选择攻击范围内的一名角色,将其一张牌置于你的武将牌上,称为<焚>.你的攻击范围+X(X为<焚>的数量).',
            shanhe_huaiyuan: '怀远',
            shanhe_huaiyuanx: '绥',
            shanhe_huaiyuan_info: '①游戏开始时,你将你的手牌标记为<绥>.②当你失去一张<绥>后,你令一名角色执行一项:⒈其的手牌上限+1.⒉其的攻击范围+1.⒊其摸一张牌.③当你死亡时,你可令一名其他角色的手牌上限+X,且攻击范围+Y(X和Y为你自己被执行过〖怀远②〗的选项一和选项二的次数).',
            shanhe_shuiyong: '水泳',
            shanhe_shuiyong_info: '锁定技,每当你受到火焰伤害时,防止此伤害.',
            shanhe_chengxiong: '逞凶',
            shanhe_chengxiong_info: '锁定技,游戏轮数为单数时,你造成的伤害+1;游戏轮数为偶数时,你造成的伤害-1.',
            shanhe_biri: '蔽日',
            shanhe_biri_info: '锁定技,每当你受到火焰伤害时,防止此伤害,你回复此伤害两倍的体力并摸等同于回复值的牌.',
            shanhe_tianfa: '天罚',
            shanhe_tianfa_info: '准备阶段,随机对场上所有角色分配等同于你的体力上限的火焰伤害,此伤害视为无伤害来源.',
            shanhe_baobian: '豹变',
            shanhe_baobian_info: '锁定技,若你的体力值为3或更少,你视为拥有技能〖挑衅〗;若你的体力值为2或更少;你视为拥有技能〖咆哮〗;若你的体力值为1,你视为拥有技能〖神速〗.',
            shanhe_yanzheng: '严整',
            shanhe_yanzheng_info: '若你的手牌数大于你的体力值,则你可以将你装备区内的牌当做【无懈可击】使用.',
            jiange_qiwu: '栖梧',
            jiange_qiwu_info: '每当你使用一张♣️️牌,你可以令一名己方角色回复1点体力.',
            shanhe_qiwu: '栖梧',
            shanhe_qiwu_info: '当你每回合首次受到伤害时,若伤害来源为你或在你的攻击范围内,你可以弃置一张红色牌,防止此伤害.',
            shanhe_jinzhi: '锦织',
            shanhe_jinzhi2: '锦织',
            shanhe_jinzhi_info: '当你需要使用或打出一张基本牌时,你可弃置X+1张颜色相同的牌并摸一张牌,视为你使用或打出了此牌.(X为你于本轮内发动此技能的次数)',
            fenghuo_linxia: '临下',
            fenghuo_linxia_info: '锁定技,你对装备区内没有坐骑牌的角色造成的伤害翻倍.',
            fenghuo_huixin: '会心',
            fenghuo_huixin_info: '锁定技,其他角色受到你对其造成的伤害时,伤害值翻倍.',
            fenghuo_luanlv: '乱律',
            fenghuo_luanlv_info: '锁定技,己方角色的出牌阶段结束时,若其本回合使用的牌都是同一颜色,其获得一个额外的出牌阶段,每名角色每回合限一次.',
            fenghuo_lveliang: '掠粮',
            fenghuo_lveliang_info: '锁定技,其他角色的回合结束时,若其手牌数多于你,其必须选择一张手牌保留,将其余手牌交给你.',
            fenghuo_jinwei: '禁卫',
            fenghuo_jinwei_info: '锁定技,每个其他角色回合内首张以你为目标的牌对你无效.',
            fenghuo_zhangxi: '掌玺',
            fenghuo_zhangxi_info: '锁定技,你不能被翻面;其他角色回合内的第一张包含你或以你为目标的锦囊牌对你无效.',
            fenghuo_yinni: '隐匿',
            fenghuo_yinni_info: '锁定技,普通【杀】对你无效.',
            fenghuo_tiebi: '铁壁',
            fenghuo_tiebi_info: '锁定技,有颜色的【杀】和伤害锦囊对你无效.',
            hulaoguan_xiongluan: '凶乱',
            hulaoguan_xiongluan_info: '锁定技,己方角色使用【杀】造成伤害后,受伤的角色随机弃置一张【杀】,否则失去1点体力.',
            fenghuo_wuyao: '雾妖',
            fenghuo_wuyao_info: '锁定技,当你受到伤害时,你进行一次判定.若判定结果为黑色,则此伤害-1,如果你手中有【杀】,则你随机弃置其中的一张并视为对伤害来源使用一张【杀】.',
            fenghuo_sanjian: '伞剑',
            fenghuo_sanjian_info: '锁定技,你使用【杀】的次数上限+1;当你用【杀】造成伤害后,受伤角色弃置两张牌.',
            Kuiba_wuyao: '雾妖',
            Kuiba_wuyao_info: '锁定技,当你受到伤害时,你进行一次判定.若判定结果为黑色,则此伤害-1,如果你手中有【杀】,则你随机弃置其中的一张并视为对伤害来源使用一张【杀】.',
            Kuiba_wuyaoa: '雾妖',
            Kuiba_wuyaoa_info: '锁定技,当你受到伤害时,你进行一次判定.若判定结果为♠️️,则此伤害-1,如果你手中有【杀】,则你随机弃置其中的一张并视为对伤害来源使用一张【杀】.',
            Kuiba_sanjian: '伞剑',
            Kuiba_sanjian_info: '锁定技,你使用【杀】的次数上限+1;当你用【杀】造成伤害后,受伤角色弃置两张牌.',
            Kuiba_sanjiana: '伞剑',
            Kuiba_sanjiana_info: '锁定技,你使用【杀】的次数上限+1;当你用【杀】造成伤害后,受伤角色弃置一张牌.',
            Kuiba_baizhan: '百战',
            Kuiba_baizhan_info: '锁定技,出牌阶段开始时,你从牌堆或弃牌堆中随机获得两张【杀】.',
            Kuiba_yiyou: '义友',
            Kuiba_yiyou_info: '锁定技,准备阶段,你进行一次判定并获得该判定牌.若判定结果为红色,本回合你视为拥有技能【义绝】;若判定结果为黑色,本回合你视为拥有技能【天义】.',
            shanhe_yijue: '义绝',
            shanhe_yijue_info: '出牌阶段限一次,你可以弃置一张牌并令一名有手牌的其他角色展示一张手牌.若此牌为黑色,则该角色不能使用或打出牌,非锁定技失效且受到来自你的♥️️【杀】的伤害+1直到回合结束.若此牌为红色,则你可以获得此牌,并可以令其回复1点体力.',
            shanhe_yijue2: '义绝',
            Kuiba_linyao: '粼妖',
            Kuiba_linyao_info: '锁定技,你无法成为敌方红色锦囊牌的目标;防止你受到的火焰伤害.',
            Kuiba_linyaoa: '粼妖',
            Kuiba_linyaoa_info: '锁定技,你无法成为敌方红色锦囊牌的目标.',
            Kuiba_jinghong: '惊虹',
            Kuiba_jinghong_info: '锁定技,当你使用黑色/红色锦囊牌时,你从牌堆中随机获得一张红色/黑色牌.',
            Kuiba_wenjia: '纹甲',
            Kuiba_wenjia_info: '锁定技,其他角色死亡后,你获得1枚<击毁>标记.摸牌阶段,你多摸X张牌(X为你拥有的<击毁>标记数).若你拥有1个<击毁>标记,你获得技能【武娘】;若你拥有2个<击毁>标记,你获得技能【无双】;若你拥有3个<击毁>标记,则当你造成伤害时,此伤害+1.',
            shanhe_wuniang: '武娘',
            shanhe_wuniang_info: '当你使用或打出【杀】时,你可以获得一名其他角色的一张牌.若如此做,该角色和场上所有的<关索>各摸一张牌.',
            Kuiba_huanguang: '幻光',
            Kuiba_huanguang_info: '出牌阶段,你使用的前四张普通锦囊牌可以多指定一个目标或少指定一个目标.',
            Kuiba_huanguanga: '幻光',
            Kuiba_huanguanga_info: '出牌阶段,你使用的前两张普通锦囊牌可以多指定一个目标或少指定一个目标.',
            Kuiba_huanguangb: '幻光',
            Kuiba_huanguangb_info: '出牌阶段,你使用的第一张普通锦囊牌可以多指定一个目标或少指定一个目标.',
            Kuiba_wangjian: '王剑',
            Kuiba_wangjian_info: '锁定技,你使用【杀】造成的伤害+1,且无视目标角色的防具.',
            Kuiba_wangjiana: '王剑',
            Kuiba_wangjiana_info: '锁定技,你使用【杀】造成的伤害+1.',
            fenghuo_wangjian: '王剑',
            fenghuo_wangjian_info: '锁定技,你使用【杀】造成的伤害+1,且无视目标角色的防具.',
            Kuiba_tianyi: '天义',
            Kuiba_tianyi_info: '出牌阶段限一次,你可以与一名角色拼点.若你赢,直到回合结束,你能额外使用一张【杀】且使用【杀】无距离限制且使用【杀】选择目标的个数上限+1.若你没赢,你不能使用【杀】,直到回合结束.',
            Kuiba_zhuandui: '专对',
            Kuiba_zhuandui_info: '当你使用【杀】指定目标后,你可以与其拼点,若你赢,其不能响应此【杀】;当你成为【杀】的目标后,你可以与其拼点,若你赢,此【杀】对你无效.',
            Kuiba_tianbian: '天辩',
            Kuiba_tianbian_info: '你可以用牌堆顶牌进行拼点;若你拼点的牌花色为♥️️,则点数视为K.',
            Kuiba_kuiqu: '魁躯',
            Kuiba_kuiqu_info: '锁定技,当你受到1点伤害后,你摸一张牌,伤害来源随机弃置一张牌.',
            Kuiba_kuiqua: '魁躯',
            Kuiba_kuiqua_info: '锁定技,当你受到1点伤害后,你摸一张牌.',
            shanglin_juli: '巨力',
            shanglin_juli_info: '锁定技,你的【杀】的基础伤害值等于你距离其为1的角色数.若其他角色与你的距离大于1,其不能响应你使用的牌.',
            shanglin_julia: '巨力',
            shanglin_julia_info: '锁定技,你的【杀】的基础伤害值等于你距离其为1的角色数.若其他角色与你的距离大于1,其不能响应你使用的【杀】.',
            shanglin_shouwang: '兽王',
            shanglin_shouwang_info: '锁定技,当你使用【杀】对其他角色造成伤害后,随机弃置其一张手牌,若弃置的牌为红色,则对其造成1点火焰伤害.其他角色在摸牌阶段外获得牌后,你摸一张牌.',
            Shanglin_shouwang: '兽王',
            Shanglin_shouwang_info: '锁定技,当你使用【杀】对其他角色造成伤害后,随机弃置其X张手牌.(X为伤害值)<br>其他角色在摸牌阶段外获得牌后,你摸一张牌.',
            Shanglin_mengji: '猛击',
            Shanglin_mengji_info: '锁定技,结束阶段,你视为对所有敌方角色使用一张不可响应的【杀】.',
            Shanglin_mengjia: '猛击',
            Shanglin_mengjia_info: '锁定技,结束阶段,你视为对随机一名敌方角色使用一张不可响应的【杀】.',
            Shanglin_tuxi: '突袭',
            Shanglin_tuxi_info: '摸牌阶段,你可以获得每名敌方角色的各一张手牌,摸等量的牌并视为对这些角色各使用一张【杀】.',
            Shanglin_huwei: '虎威',
            Shanglin_huwei_info: '锁定技,你造成的伤害+1.<br>当你一回合内受到伤害达到4次及以上,该回合结束时,失去一个本局获得的随机技能.失去所有随机技能后,本技能失效.',
            Shanglin_huweia: '虎威',
            Shanglin_huweia_info: '锁定技,你造成的伤害+1.<br>当你一回合内受到伤害达到2次及以上,该回合结束时,失去一个本局获得的随机技能.失去所有随机技能后,本技能失效.',
            Shanglin_huweib: '虎威',
            Shanglin_huweib_info: '锁定技,你造成的伤害+1.<br>当你一回合内受到伤害达到2次及以上,该回合结束时,失去一个本局获得的随机技能.失去所有随机技能后,本技能失效.',
            Shanglin_shuxing: '属性',
            Shanglin_shuxing_info: '摸牌数:4',
            Shanglin_jiaozi: '矫姿',
            Shanglin_jiaozi_info: '锁定技,每轮开始时,若你没有<速>标记,你获得3个<速>标记.<br>其他角色计算与你的距离+X.(X为速>标记的个数)<br>当你受到伤害后,失去1个<速>标记.当你失去所有<速>标记后,失去一个本局获得的随机技能,获得3个<速>标记.失去所有随机技能后,本技能失效.',
            Shanglin_jiaozia: '矫姿',
            Shanglin_jiaozia_info: '锁定技,每轮开始时,若你没有<速>标记,你获得2个<速>标记.<br>其他角色计算与你的距离+X.(X为速>标记的个数)<br>当你受到伤害后,失去1个<速>标记.当你失去所有<速>标记后,失去一个本局获得的随机技能,获得2个<速>标记.失去所有随机技能后,本技能失效.',
            Shanglin_jiaozib: '矫姿',
            Shanglin_jiaozib_info: '锁定技,每轮开始时,若你没有<速>标记,你获得2个<速>标记.<br>其他角色计算与你的距离+X.(X为速>标记的个数)<br>当你受到伤害后,失去1个<速>标记.当你失去所有<速>标记后,失去一个本局获得的随机技能,获得2个<速>标记.失去所有随机技能后,本技能失效.',
            shanglin_jiaozi: '矫姿',
            shanglin_jiaozi_info: '锁定技,若你的手牌数与持有的<奇>、<偶>标记相同,则你受到的伤害-1.',
            shanglin_jiaozia: '矫姿',
            shanglin_jiaozia_info: '锁定技,当你的手牌数为奇数时,受到的伤害-1,否则受到的伤害+1.',
            Shanglin_luming: '鹿鸣',
            Shanglin_luming_info: '锁定技,当你成为其他角色使用的牌的目标后,在此牌结算完毕后,若此牌点数为奇数,则你获得<奇>标记;若此牌点数为偶数,则你获得<偶>标记.(不会同时拥有两种标记).<br>其他角色使用的牌,若点数与<奇>或<偶>标记相同,则该牌对你造成的伤害为0.',
            Shanglin_luminga: '鹿鸣',
            Shanglin_luminga_info: '锁定技,当你成为其他角色使用的牌的目标后,在此牌结算完毕后,若此牌点数为奇数,则你获得<奇>标记;若此牌点数为偶数,则你获得<偶>标记.(不会同时拥有两种标记).<br>其他角色使用的牌,若点数与<奇>或<偶>标记相同,则该牌对你造成的伤害-1.',
            shanglin_luming: '鹿鸣',
            shanglin_luming_info: '锁定技,当你成为锦囊牌的目标后,若手牌数与持有的<奇>、<偶>标记相同,则你回复1点体力.',
            shanglin_luminga: '鹿鸣',
            shanglin_luminga_info: '锁定技,每回合限一次,当你成为锦囊牌的目标后,若手牌数为奇数,则你回复1点体力.',
            Shanglin_julu: '巨鹿',
            Shanglin_julu_info: '锁定技,其他角色若手牌数与你持有的<奇>或<偶>标记相同,则其受到的伤害+1.',
            shanglin_julu: '巨鹿',
            shanglin_julu_info: '锁定技,你的回合结束时随机获得<奇>、<偶>标记中的一种.当你使用牌指定目标后,若其手牌数与你持有的<奇>、<偶>标记相同,则其不能响应该牌.',
            Shanglin_sanku: '三窟',
            Shanglin_sanku_info: '锁定技,当你成为【杀】的目标后,视为使用了一张【闪】.<br>当你受到【杀】造成的伤害后,失去一个本局获得的随机技能.失去所有随机技能后,本技能失效.',
            Shanglin_sankua: '三窟',
            Shanglin_sankua_info: '锁定技,当你每回合首次成为【杀】的目标后,视为使用了一张【闪】.<br>当你受到【杀】造成的伤害后,失去一个本局获得的随机技能.失去所有随机技能后,本技能失效.',
            Shanglin_sankub: '三窟',
            Shanglin_sankub_info: '锁定技,当你每回合首次成为【杀】的目标后,视为使用了一张【闪】.<br>当你受到【杀】造成的伤害后,失去一个本局获得的随机技能.失去所有随机技能后,本技能失效.',
            shanglin_sanku: '三窟',
            shanglin_sanku_info: '锁定技,当你受到【杀】的伤害时,随机弃置一张装备牌防止此伤害.当你使用【杀】指定目标后,随机弃置一张装备牌令该【杀】无法被响应.',
            shanglin_sankua: '三窟',
            shanglin_sankua_info: '锁定技,当你受到【杀】的伤害时,随机弃置一张装备牌防止此伤害.',
            shanglin_linghu: '灵狐',
            shanglin_linghu_info: '锁定技,游戏开始时,随机记录一种颜色.当你使用该颜色的牌造成伤害或受到该颜色的牌的伤害时,令该伤害+1,且随机获得一名敌方角色装备区内的一张牌,重新随机记录一种颜色.',
            Shanglin_linghu: '灵狐',
            Shanglin_linghu_info: '锁定技,游戏开始时,随机记录一种颜色.当你使用该颜色的牌造成伤害或受到该颜色的牌的伤害时,令该伤害+1,且随机获得一名敌方角色的一张牌,重新随机记录一种颜色.',
            shanglin_houpi: '厚皮',
            shanglin_houpi_info: '锁定技,摸牌阶段摸牌数+1.当你受到伤害后,回复1点体力.当你受到超过3点的伤害后,体力减少一半且失去此技能.',
            shanglin_houpia: '厚皮',
            shanglin_houpia_info: '锁定技,摸牌阶段摸牌数+1.每个回合开始时,你回复1点体力.当你受到超过1点的伤害后,体力减少一半且失去此技能.',
            shanglin_houpib: '厚皮',
            shanglin_houpib_info: '锁定技,摸牌阶段摸牌数+1.回合开始时,你回复1点体力.当你受到超过1点的伤害后,体力减少一半且失去此技能.',
            shanglin_jianzhong: '健踵',
            shanglin_jianzhong_info: '锁定技,摸牌阶段摸牌数+1.其他角色的出牌阶段,其使用的前三张牌对你无效(不包括延时锦囊).当你在其他角色的同一回合内累计成为六张【杀】或普通锦囊牌的目标后,结算完毕后体力减少一半且失去此技能.',
            shanglin_jianzhonga: '健踵',
            shanglin_jianzhonga_info: '锁定技,摸牌阶段摸牌数+1.其他角色的出牌阶段,其使用的前两张牌对你无效(不包括延时锦囊).当你在其他角色的同一回合内累计成为四张【杀】或普通锦囊牌的目标后,结算完毕后体力减少一半且失去此技能.',
            shanglin_jianzhongb: '健踵',
            shanglin_jianzhongb_info: '锁定技,摸牌阶段摸牌数+1.其他角色的出牌阶段,其使用的第一张牌对你无效(不包括延时锦囊).当你在其他角色的同一回合内累计成为两张【杀】或普通锦囊牌的目标后,结算完毕后体力减少一半且失去此技能.',
            shanglin_xiongmeng: '凶猛',
            shanglin_xiongmeng_info: '锁定技,摸牌阶段摸牌数+1.当你造成伤害时,伤害值+1.当你累计受到6点火焰伤害后,体力减少一半且失去此技能.',
            shanglin_xiongmenga: '凶猛',
            shanglin_xiongmenga_info: '锁定技,摸牌阶段摸牌数+1.当你使用【杀】造成伤害时,伤害值+1.当你累计受到3点火焰伤害后,体力减少一半且失去此技能.',
            shanglin_xiongmengb: '凶猛',
            shanglin_xiongmengb_info: '锁定技,摸牌阶段摸牌数+1.当你使用【杀】造成伤害时,伤害值+1.当你受到火焰伤害后,体力减少一半且失去此技能.',
            shanhe_qiangxi: '强袭',
            shanhe_qiangxi_info: '出牌阶段限一次,你可以失去1点体力或弃置一张武器牌,对你攻击范围内的一名其他角色造成一点伤害.',
            Kuiba_juli: '巨力',
            Kuiba_juli_info: '锁定技,你的【杀】的基础伤害值等于你距离其为1的角色数.若其他角色与你的距离大于1,其不能响应你使用的牌.',
            Kuiba_julia: '巨力',
            Kuiba_julia_info: '锁定技,你的【杀】的基础伤害值等于你距离其为1的角色数.若其他角色与你的距离大于1,其不能响应你使用的【杀】.',
            Kuiba_Kuiba: '魁拔',
            Kuiba_Kuiba_info: '锁定技,摸牌阶段,你多摸两张牌;你使用【杀】和【决斗】均指定所有敌方角色为目标(无距离限制),如果目标在你的攻击范围内,则其受到你使用【杀】和【决斗】对其造成的伤害+1.',
            Kuiba_tianshen: '天神',
            Kuiba_tianshen_info: '锁定技,当你受到锦囊牌造成的伤害时,防止此伤害.',
            Kuiba_guangshi: '光势',
            Kuiba_guangshi_info: '锁定技,回合结束时,若你的<光势>标记数小于3,你获得3个<光势>标记;当你受到伤害后,你失去1个<光势>标记.',
            Kuiba_guangshia: '光势',
            Kuiba_guangshia_info: '锁定技,回合结束时,若你的<光势>标记数小于3,你获得2个<光势>标记;当你受到伤害后,你失去1个<光势>标记.',
            Kuiba_guangmie: '光灭',
            Kuiba_guangmie_info: '限定技,准备阶段,若你的<光势>标记数大于2,你可以失去所有<光势>标记,且你每失去1枚<光势>标记,所有敌方角色失去1点体力.',
            Kuiba_guangmiea: '光灭',
            Kuiba_guangmiea_info: '限定技,准备阶段,若你的<光势>标记数大于2,你可以失去所有<光势>标记,且你每失去1枚<光势>标记,所有敌方角色失去1点体力.',
            shanhe_huxiao: '虎啸',
            shanhe_huxiao3: '虎啸',
            shanhe_huxiao_info: '锁定技,当你造成火焰伤害后,受到此伤害的角色各摸一张牌,本回合你对这些角色使用牌没有次数限制.',
            shanglin_huxiao: '虎啸',
            shanglin_huxiao3: '虎啸',
            shanglin_huxiao_info: '锁定技,当你造成火焰伤害后,受到此伤害的角色各摸一张牌,本回合你对这些角色使用牌没有次数限制.',
            fenghuo_taiping: '太平',
            fenghuo_taiping_info: '锁定技,当你受到敌方角色造成的1点伤害后,伤害来源需弃置两张花色不同的手牌,否则其失去1点体力.',
            fenghuo_hexian: '和弦',
            fenghuo_hexian_info: '锁定技,敌方角色出牌阶段开始时,为其随机生成一个卡牌种类队列,如果其使用了一张与队列种类不同的卡牌,在结算完成后结束其出牌阶段.',
            fenghuo_kanggea: '抗歌',
            fenghuo_kanggea_info: '出牌阶段开始时,你可以进行一次判定,出牌阶段内,每次有与判定牌同花色的牌进入弃牌堆,回合结束时你便额外摸一张牌.',
            fenghuo_fenyin: '奋音',
            fenghuo_fenyin_info: '锁定技,你的回合内,当一张牌进入弃牌堆后,若本回合内没有过与此牌花色相同的卡牌进入过弃牌堆,则你摸一张牌.',
            fenghuo_miaoxian: '妙弦',
            fenghuo_miaoxian_info: '若你的手牌中仅有一张黑色牌,你可将此牌当作任意一张普通锦囊牌使用(每回合限一次);若你的手牌中仅有一张红色牌,你使用此牌时摸一张牌.',
            shanhe_luanxin: '乱心',
            shanhe_luanxin_info: '锁定技,当你被弃置手牌后,你的手牌上限+1;当你受到伤害后,你的体力上限+1;当你造成伤害后,你回复1点体力;当你获得其他角色的手牌后,你下回合摸牌阶段摸牌数+1.',
            shanhe_luanxin2: '乱心',
            shanhe_cuanchao: '篡朝',
            shanhe_cuanchao_info: '转换技,阳:当你成为基本牌的目标后,你可令此牌对你无效.阴:当你成为锦囊牌的目标后,你可令此牌对你无效.',
            shanhe_taoluan: '滔乱',
            shanhe_taoluan_backup: '滔乱',
            shanhe_taoluan_info: '你可以将一张牌当做任意一张基本牌或普通锦囊牌使用(此牌不得是本局游戏你以此法使用过的牌),你令一名其他角色选择一项:1.交给你一张与你以此法使用的牌类别不同的牌;2.你失去1点体力且〖滔乱〗无效直到回合结束.',
            shanhe_jixia: '急袭',
            shanhe_jixia_info: '你可以将一张锦囊牌当【顺手牵羊】使用.',
            jiange_fengjian: '封缄',
            jiange_fengjian2: '封缄',
            jiange_fengjian_info: '受到你伤害的角色于其下个回合结束前,无法使用牌指定你为目标.',
            jiange_keding: '克定',
            jiange_keding_info: '当你使用【杀】或普通锦囊牌仅指定唯一目标时,你可以弃置任意张手牌,为其指定等量的额外目标.',
            shanhe_langxi: '狼袭',
            shanhe_langxi_info: '准备阶段,你可以对一名体力小于或等于你的其他角色造成0～2点随机伤害.',
            shanhe_zhiman: '制蛮',
            shanhe_zhiman_info: '当你对一名其他角色造成伤害时,你可以防止此伤害,获得其区域内的一张牌.',
            shanhe_ranshang: '燃殇',
            shanhe_ranshang2: '燃殇',
            shanhe_ranshang_info: '锁定技,当你受到1点火焰伤害后,你获得1枚<燃>标记;结束阶段开始时,你失去X点体力.(X为<燃>标记的数量)',
            shanhe_qiongmu: '琼木',
            shanhe_qiongmu_info: '锁定技,每名角色回合开始时,你的下列属性之一获得+1.(体力值、体力上限、手牌上限)',
            shanhe_qiongmu2: '琼木',
            shanhe_shunxue: '吮血',
            shanhe_shunxue_info: '出牌阶段开始时和结束阶段开始时,你将手牌摸至手牌上限.',
            shanhe_quhu: '驱虎',
            shanhe_quhu_info: '出牌阶段限一次,你可以与一名体力值大于你的角色拼点,若你赢,则该角色对其攻击范围内另一名由你指定的角色造成1点伤害.若你没赢,该角色对你造成1点伤害.',
            shanhe_sankuang: '三恇',
            shanhe_sankuang_info: '锁定技.当你每轮第一次使用一种类别的牌后,你令一名其他角色交给你至少X张牌,于装备区或处理区内获得你使用的牌对应的所有实体牌(X为以下条件中其满足的项数:场上有牌、已受伤、体力值小于手牌数).',
            shanhe_guhuo: '蛊惑',
            shanhe_guhuo_info: '每名角色的回合限一次,你可以扣置一张手牌当作一张基本牌或普通锦囊牌使用或打出.其他角色同时选择是否质疑.你展示此牌.若有质疑的角色:若此牌为假,则此牌作废,且所有质疑者各摸一张牌;为真,则所有质疑角色于此牌结算完成后依次弃置一张牌或失去1点体力,并获得技能〖缠怨〗.',
            shanhe_guhuo_guess: '蛊惑',
            shanhe_guhuo_guess_info: '',
            shanhe_chanyuan: '缠怨',
            shanhe_chanyuan_info: '锁定技,你不能于〖蛊惑〗的结算流程中进行质疑.当你的体力值不大于1时,你的其他技能失效.',
            shanhe_guhuo_ally: '信任',
            shanhe_guhuo_betray: '质疑',
            shanhe_guhuo_ally_bg: '真',
            shanhe_guhuo_betray_bg: '假',
            shanhe_tuxi: '突袭',
            shanhe_tuxi_info: '摸牌阶段摸牌时,你可以少摸任意张牌,获得等量的角色的各一张手牌.',
            shanhai_tuxi: '突袭',
            shanhai_tuxi_info: '摸牌阶段,你可以改为获得至多两名其他角色的各一张手牌.',
            shanhai_xiansi: '陷嗣',
            shanhai_xiansix: '陷嗣',
            shanhai_xiansi_bg: '逆',
            shanhai_xiansi2: '陷嗣',
            shanhai_xiansi_info: '准备阶段,你可以将一至两名角色的各一张牌置于你的武将牌上,称为<逆>;当一名角色需要对你使用【杀】时,其可以移去两张<逆>,视为对你使用了一张【杀】.',
            Kuiba_lingshan: '灵山',
            Kuiba_lingshan_info: '锁定技,当你受到♠️️牌和♦️️牌造成的伤害时,此伤害-1.',
            Kuiba_lingshana: '灵山',
            Kuiba_lingshana_info: '锁定技,当你受到♦️️牌造成的伤害时,此伤害-1.',
            Kuiba_shengmeng: '圣盟',
            Kuiba_shengmeng_info: '锁定技,当你受到♣️️牌和♥️️牌造成的伤害时,此伤害-1.',
            Kuiba_shengmenga: '圣盟',
            Kuiba_shengmenga_info: '锁定技,当你受到♥️️牌造成的伤害时,此伤害-1.',
            fenghuo_lingshou: '灵守',
            fenghuo_lingshou_info: '锁定技,己方其他角色受到伤害时,令此伤害-1,你失去1点体力,伤害来源弃置三张牌.',
            Kuiba_lingshou: '灵守',
            Kuiba_lingshou_info: '锁定技,己方其他角色受到伤害时,令此伤害-1,你失去1点体力,伤害来源弃置三张牌.',
            Kuiba_lingshoua: '灵守',
            Kuiba_lingshoua_info: '锁定技,己方其他角色受到伤害时,令此伤害-1,你失去1点体力,伤害来源弃置两张牌.',
            Kuiba_lingshoub: '灵守',
            Kuiba_lingshoub_info: '锁定技,己方其他角色受到伤害时,令此伤害-1,你失去1点体力,伤害来源弃置一张牌.',
            fenghuo_lingzhan: '灵战',
            fenghuo_lingzhan_info: '锁定技,己方角色回合内首次造成伤害时,你令此伤害值+1.',
            Kuiba_lingzhan: '灵战',
            Kuiba_lingzhan_info: '锁定技,己方角色回合内首次造成伤害时,你令此伤害值+1.',
            Kuiba_lingzhana: '灵战',
            Kuiba_lingzhana_info: '锁定技,己方角色回合内首次造成伤害时,你随机弃置一张牌令该伤害值+1.',
            fenghuo_lingxun: '灵迅',
            fenghuo_lingxun_info: '锁定技,己方角色成为敌方角色使用【杀】的目标后,你获得该敌方角色的随机一张手牌.',
            Kuiba_lingxun: '灵迅',
            Kuiba_lingxun_info: '锁定技,己方角色成为敌方角色使用【杀】的目标后,你获得该敌方角色的随机一张手牌.',
            Kuiba_lingxuna: '灵迅',
            Kuiba_lingxuna_info: '锁定技,己方角色成为敌方角色使用【杀】的目标后,你随机弃置一张牌,并获得该敌方角色一张随机手牌.',
            fenghuo_lingluan: '灵乱',
            fenghuo_lingluan_info: '锁定技,敌方角色结束阶段弃置两张牌.',
            Kuiba_lingluan: '灵乱',
            Kuiba_lingluan_info: '锁定技,敌方角色结束阶段弃置两张牌.',
            Kuiba_lingluana: '灵乱',
            Kuiba_lingluana_info: '锁定技,敌方角色结束阶段弃置一张牌.',
            Kuiba_lingluanb: '灵乱',
            Kuiba_lingluanb_info: '锁定技,敌方角色结束阶段如果手牌数多于两张,则弃置一张牌.',
            Kuiba_shengdou: '圣斗',
            Kuiba_shengdou_info: '己方角色使用【杀】指定目标时,你可令此【杀】的目标+1.',
            Kuiba_shengdoua: '圣斗',
            Kuiba_shengdoua_info: '己方角色使用【杀】指定目标时,你可以随机弃置一张牌令此【杀】的目标+1.',
            Kuiba_shenghu: '圣护',
            Kuiba_shenghu_info: '锁定技,己方其他角色受到伤害时,令该伤害-1,你失去1点体力,你摸一张牌,该角色摸两张牌.',
            Kuiba_shenghua: '圣护',
            Kuiba_shenghua_info: '锁定技,己方其他角色受到伤害时,令该伤害-1,你失去1点体力,你与该己方角色各摸一张牌.',
            Kuiba_shenghub: '圣护',
            Kuiba_shenghub_info: '锁定技,己方其他角色受到伤害时,令该伤害-1,你失去1点体力,该己方角色摸一张牌.',
            Kuiba_shengjie: '圣捷',
            Kuiba_shengjie_info: '锁定技,己方角色成为敌方角色普通锦囊牌的目标后,你令此牌的所有目标各摸两张牌.',
            Kuiba_shengjiea: '圣捷',
            Kuiba_shengjiea_info: '锁定技,己方角色成为敌方角色普通锦囊牌的目标后,你随机弃置一张牌,令此牌的所有目标各摸两张牌.',
            fenghuo_shengzhu: '圣助',
            fenghuo_shengzhu_info: '锁定技,己方角色结束阶段摸两张牌.',
            Kuiba_shengzhu: '圣助',
            Kuiba_shengzhu_info: '锁定技,己方角色结束阶段摸两张牌.',
            Kuiba_shengzhua: '圣助',
            Kuiba_shengzhua_info: '锁定技,己方角色结束阶段摸一张牌.',
            mitan_hujia: '护驾',
            mitan_hujia_info: '锁定技,当你需要使用或打出【闪】时,当前回合角色随机弃置一张手牌,若弃置的牌为【闪】,视为你使用或打出一张【闪】.',
            fenghuo_yingsi: '营私',
            fenghuo_yingsi_info: '锁定技,摸牌阶段改为从牌堆或弃牌堆中随机获得八张牌名各不相同且副类别不同的牌.',
            fenghuo_mobao: '墨宝',
            fenghuo_mobao_info: '锁定技,你使用黑色牌对其他角色造成伤害或其他角色使用黑色牌对你造成伤害时,伤害+1.其他角色的红色伤害牌无法指定你为目标.',
            fenghuo_pindi: '品第',
            fenghuo_pindi_info: '出牌阶段每名角色限一次.你可以弃置一张本阶段未以此法弃置过的类型的牌并选择一名角色,你选择一项:1.其摸X张牌;2.其弃置X张牌(X为你本回合发动〖品第〗的次数).若其已受伤,你横置或重置.',
            xishou_feizong: '绯鬃',
            xishou_feizong_info: '锁定技,当你受到敌方角色造成的伤害时,若你手牌中有红色牌,则随机弃置一张红色手牌并防止此次伤害.若弃置的牌为♥️️牌,则令随机一名己方角色回复1点体力;若弃置的牌为♦️️牌,则令伤害来源失去1点体力.',
            hejin_zhenmou: '镇谋',
            hejin_zhenmou_info: '锁定技,敌方角色于其出牌阶段内使用前两张锦囊牌时,除非该角色弃置两张非锦囊牌,否则此牌无效.',
            hejin_guiluan: '贵乱',
            hejin_guiluan_info: '锁定技,你的【杀】、【决斗】、【过河拆桥】均指定敌方所有角色为目标.',
            Waiqi_guiluan: '贵乱',
            Waiqi_guiluan_info: '锁定技,你的【杀】、【决斗】、【过河拆桥】均指定敌方所有角色为目标(每回合限三次).',
            shidian_suoming: '索命',
            shidian_suoming_info: '锁定技,结束阶段,你令所有其他角色进入连环状态.',
            Kuiba_kuiti: '魁体',
            Kuiba_kuiti_info: '锁定技,当你受到【杀】的伤害时,该伤害-1,你摸一张牌.',
            Kuiba_kuitia: '魁体',
            Kuiba_kuitia_info: '锁定技,当你受到【杀】的伤害后,你摸一张牌.',
            Kuiba_bachong: '霸冲',
            Kuiba_bachong_info: '锁定技,当你使用【杀】指定目标后,除非该角色弃置一张牌,否则不能使用【闪】.',
            Kuiba_qiheng: '齐衡',
            Kuiba_qiheng_info: '觉醒技,准备阶段,若你的体力值低于最大体力的一半,随机获得牌堆中的三张不同类型的牌,获得<魁拔>.',
            shidian_didong: '地动',
            shidian_didong_info: '锁定技,结束阶段,你令一名敌方角色将其武将牌翻面.',
            liezhuan_donghe: '恫吓',
            liezhuan_donghe_info: '出牌阶段限一次,你可以弃置一张牌.若如此做,当己方其他角色于你的下回合开始之前造成伤害时(时机同【古锭刀】),其令伤害值+1.',
            liezhuan_shangyin: '赏银',
            liezhuan_shangyin_info: '出牌阶段,你可以弃置一张牌.若如此做,所有其他己方角色各摸两张牌.',
            liezhuan_wudi: '无敌',
            liezhuan_wudi_info: '锁定技,防止你受到的伤害.',
            nianshou_nianrui: '年瑞',
            nianshou_nianrui_info: '锁定技,摸牌阶段,你多摸两张牌.',
            nianshou_yingzi: '影姿',
            nianshou_yingzi_info: '锁定技,摸牌阶段,你多摸两张牌.',
            nianshou_yingzia: '影姿',
            nianshou_yingzia_info: '锁定技,摸牌阶段,你多摸四张牌.',
            nianshou_dongmian: '冬眠',
            nianshou_dongmian_info: '锁定技,若你的体力值在第一轮不大于6,你不能被选择为其他角色使用牌的目标.',
            nianshou_mengtai: '萌态',
            nianshou_mengtai_info: '锁定技,你的【乐不思蜀】【兵粮寸断】判定结果反转.当你的武将牌被翻至背面时,你将武将牌翻至正面并摸一张牌.',
            shanhe_mengtai: '萌态',
            shanhe_mengtai_info: '锁定技,若你的出牌阶段被跳过,你跳过本回合的弃牌阶段;结束阶段,若你的摸牌阶段被跳过,你摸四张牌.',
            shanhe_mengtaia: '萌态',
            shanhe_mengtaia_info: '锁定技,若你的出牌阶段被跳过,你跳过本回合的弃牌阶段;结束阶段,若你的摸牌阶段被跳过,你摸三张牌.',
            nianshou_ruya: '儒雅',
            nianshou_ruya_info: '锁定技,你的锦囊牌造成伤害时,你令此伤害+1;你受到锦囊牌造成的伤害后,你摸一张牌;你的回合外,你受到【杀】造成的伤害时,此伤害+1.',
            nianshou_boxue: '博学',
            nianshou_boxue_info: '锁定技,你的回合内,你使用的普通锦囊牌无法被【无懈可击】响应.',
            nianshou_jingti: '警惕',
            nianshou_jingti_info: '锁定技,你的回合外,其他角色回复体力或在非摸牌阶段获得牌,你摸一张牌.',
            nianshou_jingkong: '惊恐',
            nianshou_jingkong_info: '锁定技,当你成为其他角色使用的普通锦囊牌的目标(或之一)时,你弃置其一张牌,你弃置一张牌(使用牌的人没牌可以被弃则后续也不发动).',
            nianshou_kuangbao: '狂暴',
            nianshou_kuangbao_info: '锁定技,你的回合内,你所有的普通锦囊牌均视为雷【杀】,你的【桃】均视为火【杀】,你使用【杀】的次数+1,你使用【杀】可以额外选择至多2名角色为目标.',
            nianshou_shouyi: '兽裔',
            nianshou_shouyi_info: '锁定技,你使用【杀】无距离限制且伤害+1;你的回合外,你受到锦囊牌造成的伤害时,此伤害+1.',
            nianshou_juexing: '觉醒',
            nianshou_juexing_info: '锁定技,你的回合外,若你于一个回合内受到超过5点伤害,或因弃置而失去超过3张牌时,你对其他角色各造成1点伤害,中止一切结算并结束当前回合.',
            nianshou_juexinga: '觉醒',
            nianshou_juexinga_info: '锁定技,若你于一个回合内受到了3点或更多的伤害,中止一切结算并结束当前回合,你对其他角色各造成X点伤害(X为本局游戏内此技能触发的次数).',
            shanhe_juexing: '觉醒',
            shanhe_juexing_info: '锁定技,若你于一个回合内受到了3点或更多的伤害,中止一切结算并结束当前回合,你对其他角色各造成X点伤害(X为本局游戏内此技能触发的次数).',
            shanhe_juexinga: '觉醒',
            shanhe_juexinga_info: '锁定技,你的回合外,若你于一个回合内受到超过5点伤害,或因弃置或被其他角色获得而失去超过3张牌时,中止一切结算并结束当前回合,你对其他角色各造成1点伤害.',
            ns_old_bianshen: '专属机制',
            ns_old_bianshen_info: '<li>游戏开始时,年兽处于初始形态,拥有技能【影姿】、【萌态】和【冬眠】.<br><li>第二轮开始年兽将进入<睿智>、<警觉>、<任性>和<暴怒>四种随机状态中的一种,若年兽已幻化了四种状态,则下轮将再次重置四种随机状态.',
            ns_bianshen: '专属机制',
            ns_bianshen_info: '<li>年兽分为初始形态、特殊形态(睿智、警觉、暴怒),一共4种不同的形态.每局游戏开始时随机获得一组特殊形态顺序,同一局游戏内该顺序固定.<br><li>年兽最开始为初始形态,此后按照当局获得的特殊形态顺序依次变换.',
            ns_hp: '专属机制',
            ns_hp_info: '<li>年兽的体力上限和体力值为所有其他角色的体力上限和.',
            lvbu_buff: '专属机制',
            lvbu_buff_info: '<li>吕布观看10张武将牌,选择并获得其中一张武将牌上的所有技能.',
            jinniu_buff: '专属机制',
            jinniu_buff_info: '<li>金牛随机获得以下技能库中的一/两/三个生肖兽技能.<br><li>技能库:【子鼠】、【寅虎】、【午马】、【未羊】、【申猴】、【酉鸡】、【戌狗】和【亥猪】.',
            mitan_xingshuai: '兴衰',
            mitan_xingshuai_info: '锁定技,当你脱离濒死状态后,一名随机敌人流失一点体力.',
            mitan_taigong: '太王',
            mitan_taigong_info: '锁定技,每回合限一次,当有角色一次性受到大于等于两点伤害后,你增加一点体力上限.',
            mitan_qinwang: '勤王',
            mitan_qinwang_info: '锁定技,当有角色发起【决斗】时,你从牌堆随机获得一张基本牌.',
            mitan_suizhan: '随战',
            mitan_suizhan_info: '锁定技,摸牌阶段你额外摸X张牌(X为你身上<逆>的个数).',
            nsdzz_nianpaix: '年',
            mitan_wenhui: '文绘',
            mitan_wenhui_info: '当你于回合内弃置其他角色的牌后,你随机从牌堆中获得一张与此牌类别相同的牌(没有则改为摸一张牌).你以此法获得的牌本回合不计入使用次数和手牌上限.',
            mitan_qintao: '亲讨',
            mitan_qintao_info: '若你使用的指定唯一目标的【杀】未造成伤害,结算完成后,你可以失去1点体力并令其选择一项:①失去1点体力;②令你弃置其两张牌.',
            mitan_xianggong: '乡公',
            mitan_xianggong_info: '锁定技,当你受到伤害后,伤害来源需弃置等同于你已损失体力值张牌,摸一张牌.',
            mitan_fengxiang: '封乡',
            mitan_fengxiang_info: '当你获得其他角色的牌后,你可以立即将此牌当做【杀】对任意一名其他角色使用.(不计入次数,无距离限制)',
            mitan_jitong: '继统',
            mitan_jitong_info: '锁定技,结束阶段,若你本回合未使用【杀】造成伤害,免疫你下次受到的伤害.',
            mitan_zhuning: '诛佞',
            mitan_zhuning_info: '当你使用【杀】造成伤害时,若此伤害为你本回合首次造成伤害,该伤害+1.',
            mitan_songwei: '颂威',
            mitan_songwei_info: '锁定技,当其他角色的判定牌生效后,你随机获得其一张牌.',
            mitan_zhuixi: '追袭',
            mitan_zhuixi_info: '锁定技,当你造成伤害或受到伤害时,若受伤角色的翻面状态和伤害来源的翻面状态不同,则此伤害+1.',
            mitan_zhichi: '智迟',
            mitan_zhichi_info: '锁定技,当你于回合外受到伤害后,所有【杀】或普通锦囊牌对你无效直到回合结束.',
            hulaoguan_zhichi: '智迟',
            hulaoguan_zhichi_info: '锁定技,当你于回合外受到伤害后,己方体力值最少的一名角色本回合不能成为敌方的【杀】和普通锦囊牌的目标.',
            lvbu_shenjia: '神戟',
            lvbu_shenjia_info: '你的出牌阶段内可以多使用一张【杀】,你的【杀】或【决斗】可以额外指定两个目标.你使用的【杀】或【决斗】造成伤害后,你可以摸X张牌.(X为你的攻击范围,每回合限一次)',
            lvbu_shenji: '神戟',
            lvbu_shenji_info: '你的出牌阶段内可以多使用一张【杀】,你的【杀】或【决斗】可以额外指定两个目标.你使用的【杀】或【决斗】造成伤害后,你可以摸X张牌.(X为你的攻击范围,每回合限两次)',
            LvBu_shenji: '神戟',
            LvBu_shenji_info: '你的出牌阶段内可以多使用两张【杀】,你的【决斗】可以额外指定两个目标.你使用的【杀】造成伤害后,你可以摸X张牌.(X为你的攻击范围,每回合限一次)',
            LvBu_shenjia: '神戟',
            LvBu_shenjia_info: '你的出牌阶段内可以多使用一张【杀】,你的【决斗】可以额外指定一个目标.你使用的【杀】造成伤害后,你可以摸两张牌.(每回合限一次)',
            lvbu_shenqu: '神躯',
            lvbu_shenqu_info: '锁定技,当你受到其他角色造成的伤害后,伤害来源选择交给你一张牌或失去1点体力.伤害来源选择交给你牌时,每回合每种类型的牌限一次.',
            lvbu_shenqu2: 'lvbu_shenqu2',
            lvbu_shenqu2_info: '',
            hulao_shenweib: '神威',
            hulao_shenweib_info: '锁定技,你不能成为延时类锦囊牌的目标且不会被翻面,摸牌阶段额外摸两张牌.当你的体力值首次降至体力上限的一半以下或进入濒死状态时,你将体力值回复至体力上限的一半.获得【神武】,并且获得一个额外的回合.',
            hulao_shenweia: '神威',
            hulao_shenweia_info: '锁定技,你不能成为延时类锦囊牌的目标且不会被翻面,摸牌阶段额外摸三张牌.当你的体力值首次降至体力上限的一半以下或进入濒死状态时,你将体力值回复至体力上限的一半.获得【神武】,并且获得一个额外的回合.',
            hulao_shenwei: '神威',
            hulao_shenwei_info: '锁定技,你不能成为延时类锦囊牌的目标且不会被翻面,摸牌阶段额外摸四张牌.当你的体力值首次降至体力上限的一半以下或进入濒死状态时,你将体力值回复至体力上限的一半.获得【神武】,并且获得一个额外的回合.',
            lvbu_shenweib: '神威',
            lvbu_shenweib_info: '锁定技,你不能成为延时类锦囊牌的目标且不会被翻面,摸牌阶段额外摸两张牌.当你的体力值首次降至体力上限的一半以下或进入濒死状态时,你将体力值回复至体力上限的一半.获得【神武】,并且获得一个额外的回合.',
            lvbu_shenweia: '神威',
            lvbu_shenweia_info: '锁定技,你不能成为延时类锦囊牌的目标且不会被翻面,摸牌阶段额外摸三张牌.当你的体力值首次降至体力上限的一半以下或进入濒死状态时,你将体力值回复至体力上限的一半.获得【神武】,并且获得一个额外的回合.',
            lvbu_shenwei: '神威',
            lvbu_shenwei_info: '锁定技,你不能成为延时类锦囊牌的目标且不会被翻面,摸牌阶段额外摸四张牌.当你的体力值首次降至体力上限的一半以下或进入濒死状态时,你将体力值回复至体力上限的一半.获得【神武】,并且获得一个额外的回合.',
            LvBu_shenwei: '神威',
            LvBu_shenwei_info: '锁定技,你不能成为延时类锦囊牌的目标且不会被翻面,摸牌阶段额外摸三张牌.当你的体力值首次降至体力上限的一半以下或进入濒死状态时,你将体力值回复至体力上限的一半.获得【神武】和【六臂】,并且获得一个额外的回合.',
            LvBu_shenweia: '神威',
            LvBu_shenweia_info: '锁定技,你不能成为延时类锦囊牌的目标且不会被翻面,摸牌阶段额外摸一张牌.当你的体力值首次降至体力上限的一半以下或进入濒死状态时,你将体力值回复至体力上限的一半.获得【神武】和【六臂】,并且获得一个额外的回合.',
            LvBu_shenweib: '神威',
            LvBu_shenweib_info: '锁定技,你不能成为延时类锦囊牌的目标且不会被翻面.当你的体力值首次降至体力上限的一半以下或进入濒死状态时,你将体力值回复至体力上限的一半.获得【神武】和【六臂】,并且获得一个额外的回合.',
            shidian_niepan: '涅槃',
            shidian_niepan_info: '限定技,当你处于濒死状态时,你可以弃置你区域内的所有牌并复原你的武将牌,摸三张牌并将体力回复至3点.',
            shanhe_niepan: '涅槃',
            shanhe_niepan_info: '限定技,当你处于濒死状态时,你可以弃置你区域内的所有牌并复原你的武将牌,摸三张牌并将体力回复至3点.你选择获得以下技能中的一个:【八阵】/【火计】/【看破】.',
            shidian_juece: '绝策',
            shidian_juece_info: '每当一名角色于你的回合内失去最后的手牌时,若该角色的体力值大于0,你可以对其造成1点伤害.',
            qianli_chuixi: '锤袭',
            qianli_chuixi_info: '出牌阶段限一次,你可以指定一名敌方角色,依次弃置一张牌并对其造成1点伤害.(每次弃置的牌的点数需要大于等于本回合内上次以此法弃置的牌的两倍)',
            neihuan_leixi: '雷袭',
            neihuan_leixi_info: '当你于回合外使用或打出【杀】或【闪】时,你可以选择一名其他角色,令其进行判定,若结果为红色,弃置该角色两张牌;若结果为黑色,对其造成2点伤害.',
            neihuan_huangjie: '黄结',
            neihuan_huangjie_info: '锁定技,出牌阶段,你使用一张牌时,若此牌目标不是敌方角色,你摸一张牌.',
            neihuan_suxi: '速袭',
            neihuan_suxi_info: '当你造成伤害后,你可以弃置一张牌令受伤角色的上家或下家失去1点体力.',
            zhiyuan_yuanfei: '鸢飞',
            zhiyuan_yuanfei_info: '锁定技,回合结束时,你从牌堆获得三张锦囊牌.',
            fenghuo_chibi: '持匕',
            fenghuo_chibi_info: '锁定技,出牌阶段结束时,若你手牌中没有杀,你从牌堆中获得两张【杀】.(没有不会获得,牌堆中若仅有一张则只获得一张)',
            neihuan_chibi: '持匕',
            neihuan_chibi_info: '锁定技,出牌阶段结束时,若你手牌中没有杀,你从牌堆中获得两张【杀】.(没有不会获得,牌堆中若仅有一张则只获得一张)',
            neihuan_huangbao: '荒暴',
            neihuan_huangbao_info: '锁定技,出牌阶段开始时,视为对所有敌方角色使用一张【南蛮入侵】.若此【南蛮入侵】没有造成伤害,你摸三张牌.',
            Neihuan_lancai: '揽财',
            Neihuan_lancai_info: '锁定技,出牌阶段开始时,你将手牌摸至8.若你的手牌不是全场最多,再将你的手牌摸至和全场最多一样.',
            zhiyuan_nuanyuan: '暖鸢',
            zhiyuan_nuanyuan_info: '锁定技,摸牌阶段结束时,你将手牌摸至体力上限.',
            neihuan_lancai: '揽财',
            neihuan_lancai_info: '锁定技,出牌阶段开始时,你将手牌摸至体力上限.',
            neihuan_jingshe: '惊蛇',
            neihuan_jingshe_info: '锁定技,当你受到伤害后,若此时为敌方角色的回合,该角色不能使用牌直到出牌阶段结束.若此伤害超过1点,你回复1点体力.',
            liezhuan_jibing: '集兵',
            liezhuan_jibing_info: '锁定技,回合结束时,你减少1点体力上限;当你的体力上限减少时,你对随机一名敌方角色造成1点伤害.',
            neihuan_jibing: '集兵',
            neihuan_jibing_info: '锁定技,回合结束时,你减少1点体力上限;当你的体力上限减少时,你对随机一名敌方角色造成1点伤害.',
            neihuan_andu: '暗毒',
            neihuan_andu_info: '锁定技,敌方角色的回合结束时,若其体力值小于等于你,你对其造成1点伤害.',
            neihuan_biri: '蔽日',
            neihuan_biri_info: '锁定技,当你受到敌方角色造成的伤害时,该角色弃置所有手牌;若其弃置的手牌数小于你的体力值,此伤害-1.',
            fenghuo_jifu: '嫉富',
            fenghuo_jifu_info: '锁定技,准备阶段,你获得手牌数大于你的敌方角色一张手牌.重复此步骤直到所有敌方角色手牌数都不大于你.',
            neihuan_jifu: '嫉富',
            neihuan_jifu_info: '锁定技,准备阶段,你获得手牌数大于你的敌方角色一张手牌.重复此步骤直到所有敌方角色手牌数都不大于你.',
            neihuan_heimu: '黑幕',
            neihuan_heimu_info: '锁定技,敌方角色使用黑色牌时,你摸一张牌.你使用黑色牌时,敌方随机一名角色随机弃置一张牌.',
            neihuan_heizhi: '黑邸',
            neihuan_heizhi_info: '锁定技,你的判定牌生效时,若结果为黑色,你对所有敌方角色造成1点伤害.',
            SX_chuancheng: '传承',
            SX_chuancheng_info: '锁定技,你令击杀你的敌方角色获得你的生肖兽技能,若其已拥有因【传承】获得的技能,则改为替换之前的技能.',
            qunying_miwu: '迷雾',
            qunying_miwu_info: '锁定技,结束阶段,你随机弃置一张手牌,所有敌方角色选择一项:1.弃置一张相同类型的牌;2.直到你的下回合开始前,无法对你使用【杀】和【决斗】.',
            qunying_miwu2: '迷雾',
            qunying_qixing: '七星',
            qunying_qixing_info: '锁定技,摸牌阶段改为将手牌摸至七张.如果手牌数大于等于五张,则改为摸三张牌.',
            qunying_jizhi: '集智',
            qunying_jizhi_info: '每当你使用普通锦囊牌时,你可以摸一张牌.',
            qunying_shenfeng: '神风',
            qunying_shenfeng_info: '出牌阶段,你可以弃置最多三张不同类型的手牌,所有敌方角色需要依次弃置该数量两倍的手牌,每少弃置一张牌,受到1点伤害.',
            liezhuan_jiancheng: '坚城',
            liezhuan_jiancheng_info: '锁定技,每名角色的回合结束时,若你的手牌数小于当前体力值,你摸两张牌.',
            liezhuan_yapo: '压迫',
            liezhuan_yapo_info: '锁定技,敌方角色的回合结束时,若其手牌数大于等于其当前体力值,你弃置其两张手牌.',
            liezhuan_xiji: '袭击',
            liezhuan_xiji_info: '锁定技,敌方角色的回合结束时,若其手牌数小于其当前体力值,你可以对其造成2点伤害.',
            fenghuo_yishe: '义舍',
            fenghuo_yishe_bg: '米',
            fenghuo_yishe_info: '结束阶段开始时,若你的武将牌上没有「米」,则你可以摸两张牌.若如此做,你将两张牌置于武将牌上,称为「米」;当有「米」移至其他区域后,若你的武将牌上没有「米」,则你回复1点体力.',
            fenghuo_midao: '米道',
            fenghuo_midao_info: '一名角色的判定牌生效前,你可以打出一张「米」代替之.',
            fenghuo_quanba: '权霸',
            fenghuo_quanba_info: '锁定技,敌方角色的回合内,其使用【杀】指定目标后,若该角色已经使用了三张或更多的【杀】,其失去1点体力.',
            fenghuo_huangbao: '荒暴',
            fenghuo_huangbao_info: '锁定技,出牌阶段开始时,视为对所有敌方角色使用一张【南蛮入侵】.若此【南蛮入侵】没有造成伤害,你摸三张牌.',
            danji_cangbi: '藏壁',
            danji_cangbi_info: '锁定技,每回合首次受到伤害后,回复1点体力.回合开始时若你未受伤,则跳过你的出牌阶段和弃牌阶段.其他角色的出牌阶段内,若你未受伤,则其使用的第一张【杀】和第一张普通锦囊牌对你无效.  ',
            danji_cangbia: '藏壁',
            danji_cangbia_info: '锁定技,每回合首次受到伤害后,回复1点体力.回合开始时若你未受伤,则跳过你的出牌阶段和弃牌阶段.其他角色的出牌阶段内,若你未受伤,则其使用的第一张【杀】对你无效.  ',
            danji_cangbib: '藏壁',
            danji_cangbib_info: '锁定技,每回合首次受到伤害后,回复1点体力.回合开始时若你未受伤,则跳过你的出牌阶段和弃牌阶段.  ',
            qunying_yaohuo: '妖惑',
            qunying_yaohuo_info: '锁定技,摸牌阶段,你放弃摸牌,改为与手牌数最多的一名敌方角色交换手牌.',
            qunying_qianhuana: '千幻',
            qunying_qianhuana_info: '当一名己方角色受到伤害后,你可以将一张与你武将牌上花色均不同的牌置于你的武将牌上.当一名己方角色成为基本牌或锦囊牌的唯一目标时,你可以移去一张<千幻>牌,取消之.',
            qunying_qianhuan: '千幻',
            qunying_qianhuan_info: '当与你势力相同的一名角色受到伤害后,你可以将一张与你武将牌上花色均不同的牌置于你的武将牌上.当一名与你势力相同的角色成为基本牌或锦囊牌的唯一目标时,你可以移去一张<千幻>牌,取消之.',
            shanhe_qianhuan: '千幻',
            shanhe_qianhuan_info: '当与你势力相同的一名角色受到伤害后,你可以将一张与你武将牌上花色均不同的牌置于你的武将牌上.当一名与你势力相同的角色成为基本牌或锦囊牌的唯一目标时,你可以移去一张<千幻>牌,取消之.',
            shanhe_jinghua: '镜花',
            shanhe_jinghua_info: '当你成为其他角色使用牌的目标时,你可弃置两张手牌令此牌对你无效.',
            shanhe_jizhi: '集智',
            shanhe_jizhi_info: '当你使用锦囊牌时,你可以摸一张牌.若此牌为基本牌,则你可以弃置之,令本回合手牌上限+1.',
            shanhe_jizhia: '集智',
            shanhe_jizhia_info: '每当你使用普通锦囊牌时,你可以摸一张牌.',
            shanhe_huanyue: '幻月',
            shanhe_huanyue_info: '当你需要使用或打出一张基本牌时,你可重铸两张手牌并弃置其中一张,视为你使用或打出了此牌.',
            jiange_zhinang: '智囊',
            jiange_zhinang_info: '准备阶段,你可以亮出牌堆顶的六张牌,你可以将其中锦囊或装备牌交给一名己方角色.',
            shanhe_zhinang: '智囊',
            shanhe_zhinang_info: '准备阶段,你可以亮出牌堆顶的五张牌,你可以将其中锦囊或装备牌交给一名己方角色.',
            shanhe_sijian: '死谏',
            shanhe_sijian_info: '当你失去最后的手牌时,你可以弃置一名其他角色的一张牌.',
            shanhe_nuzhan: '怒斩',
            shanhe_nuzhan2: '怒斩',
            shanhe_nuzhan_info: '锁定技,你使用的由一张锦囊牌转化的【杀】不计入出牌阶段的次数限制;锁定技,你使用的由一张装备牌转化的【杀】的伤害值基数+1.',
            shanhe_yuanchou: '怨仇',
            shanhe_yuanchou_info: '锁定技.当你使用黑色【杀】指定目标角色后或成为黑色【杀】的目标角色后,你令目标角色的防具技能无效直到此【杀】被抵消或造成伤害.',
            jiange_biantian: '变天',
            jiange_biantian_info: '准备阶段,你进行一次判定,若为红色,直到下个回合开始前,令所有敌方角色处于<狂风>状态,若为♠️️,直到下个回合开始前,令所有己方角色处于<大雾>状态.',
            jiange_biantian2: '大雾',
            jiange_biantian3: '狂风',
            jiange_jingmiao: '精妙',
            jiange_jingmiao_info: '锁定技,当敌方角色使用的【无懈可击】生效后,你令其失去1点体力.',
            shanhe_tiepao: '铁炮',
            shanhe_tiepao_info: '当你受到其他角色造成的伤害后,你可将任意牌视为【杀】对伤害来源使用,若此【杀】造成伤害,其与你距离+1,直到你的回合开始.',
            shanhe_tiepao2: '铁炮',
            shanhe_jiansheng: '剑圣',
            shanhe_jiansheng_jiu: '剑圣',
            shanhe_jiansheng_shan: '剑圣',
            shanhe_jiansheng_info: '你的回合外,你可以将任意牌当【闪】使用或打出;你的回合内,你可以将任意牌当【酒】使用或打出.',
            shanhe_jiansheng_jiu_info: '你的回合外,你可以将任意牌当【闪】使用或打出;你的回合内,你可以将任意牌当【酒】使用或打出.',
            shanhe_jiansheng_shan_info: '你的回合外,你可以将任意牌当【闪】使用或打出;你的回合内,你可以将任意牌当【酒】使用或打出.',
            shanhe_bihun: '弼昏',
            shanhe_bihun_info: '锁定技.当你使用牌指定其他角色为目标时,若你的手牌数大于手牌上限且若此牌的目标数:大于1,取消此目标;为1,其获得此牌.',
            shanhe_jianhe: '剑合',
            shanhe_jianhe_info: '出牌阶段每名角色限一次.你可以重铸至少两张同名牌或至少两张装备牌,令一名角色选择一项:1.重铸等量张与你以此法重铸的牌类型相同的牌;2.受到你造成的1点雷电伤害.',
            shanhe_taidao: '太刀',
            shanhe_taidao_info: '锁定技,你的回合内,你使用的每张【杀】会使本回合后续的【杀】的伤害+1;你的回合外,你使用或打出的每张手牌会使你下回合摸牌阶段摸牌数+1.',
            shanhe_changqiang: '长枪',
            shanhe_changqiang_info: '出牌阶段限一次,你可弃置X张手牌,对所有其他角色视为使用一张不可响应的【杀】(X为其他角色数).',
            shanhe_zhongyi: '忠义',
            shanhe_zhongyi2: '忠义',
            shanhe_zhongyi_info: '限定技,出牌阶段,你可以将一张红色手牌置于你的武将牌上,若如此做,此轮结束后,你将此牌置入弃牌堆.若你的武将牌上有「忠义」牌,己方角色使用【杀】的伤害+1.',
            shanhe_yongjue: '勇决',
            shanhe_yongjue_info: '与你势力相同的一名角色于其回合内使用【杀】结算完成后,若此牌是其本回合内使用的第一张牌,则其可以获得此牌对应的所有实体牌.',
            mitan_ruoyu: '若愚',
            mitan_ruoyu_info: '锁定技,准备阶段,若你是体力值最少的角色,回复1点体力值.',
            mitan_jiuyuan: '救援',
            mitan_jiuyuan_info: '锁定技,每回合一次,当其他角色于其出牌阶段使用【桃】后,若你处于受伤状态,回复1点体力.',
            liezhuan_baoli: '暴戾',
            liezhuan_baoli_info: '锁定技,出牌阶段开始时,你摸一张牌,你使用的【杀】的伤害值基数永久+1.',
            liezhuan_tunfu: '吞符',
            liezhuan_tunfu_info: '出牌阶段限一次,你可以将一张牌置于你的武将牌上.若如此做,当你于此回合内使用牌时,你摸一张牌.',
            fenghuo_xinian: '夕年',
            fenghuo_xinian_info: '锁定技,摸牌阶段摸到的牌中每有1张红色牌,额外摸1张牌.(额外摸到的牌不会再触发此技能)',
            fenghuo_niluan: '逆乱',
            fenghuo_niluan_info: '你可以将一张黑色牌当做【杀】使用.',
            fenghuo_manrou: '蛮柔',
            fenghuo_manrou_info: '锁定技,当你使用【南蛮入侵】造成伤害后,你摸一张牌.',
            fenghuo_manlve: '蛮掠',
            fenghuo_manlve_info: '当你造成伤害后,你可以摸一张牌.',
            fenghuo_ziyuan: '资援',
            fenghuo_ziyuan_info: '出牌阶段限一次,你可以将任意张点数之和为13的手牌交给一名其他角色,该角色回复1点体力.',
            fenghuo_zizhan: '资战',
            fenghuo_zizhan_info: '你的出牌阶段,当有其他角色回复体力时,你可以令该角色对其攻击范围内的一名角色造成1点伤害.',
            fenghuo_taipinga: '太平',
            fenghuo_taipinga_info: '当你回复一次体力时,你可以展示牌堆顶的六张牌,获得其中的所有红色牌.',
            liezhuan_liudao: '六道',
            liezhuan_liudao_info: '每局游戏限6次,当你处于濒死状态时,你可以将体力回复至3点.',
            liezhuan_huihun: '回魂',
            liezhuan_huihun_info: '结束阶段开始时,你可以视为使用你于出牌阶段内使用过的一张基本牌或普通锦囊牌.',
            liezhuan_zhaohun: '招魂',
            liezhuan_zhaohun_info: '出牌阶段,你可以弃置两张牌.若如此做,你召唤一个【黄巾兵】.',
            liezhuan_tiansuan: '天算',
            liezhuan_tiansuan_info: '锁定技,其他角色的弃牌阶段结束时,你进行X次判定(X为本回合进入弃牌堆的牌的数量),其获得其中的9和5.',
            liezhuan_guijian: '规谏',
            liezhuan_guijian_info: '锁定技,己方角色的回合结束时,若本回合进入弃牌堆的牌数不少于9,其执行一个额外的回合并减1点体力上限.',
            liezhuan_yuqiang: '御强',
            liezhuan_yuqiang_info: '出牌阶段限一次,你可以弃置场上的一张武器牌.',
            fenghuo_huomo: '活墨',
            fenghuo_huomo_info: '当你需要使用一张本回合内未使用过的基本牌时,你可以将一张黑色非基本牌置于牌堆顶,视为使用此基本牌.',
            fenghuo_yinshi: '隐士',
            fenghuo_yinshi_info: '锁定技,若你没有龙印、凤印且防具栏为空,则当你受到属性伤害或锦囊牌造成的伤害时,防止此伤害.',
            fenghuo_zhanxiang: '战象',
            fenghuo_zhanxiang_info: '出牌阶段每种花色限一次,你可以将两张相同花色的手牌当做【南蛮入侵】使用.',
            fenghuo_manyi: '蛮裔',
            fenghuo_manyi_info: '锁定技,【南蛮入侵】对你无效.',
            fenghuo_mansi_viewas: '蛮嗣',
            fenghuo_mansi: '蛮嗣',
            fenghuo_mansi_info: '出牌阶段限一次,你可以将所有手牌当做【南蛮入侵】使用;当有角色受到【南蛮入侵】的伤害后,你摸一张牌.',
            fenghuo_rendao: '人道',
            fenghuo_rendao_info: '当你受到伤害后,你可以摸两张牌,若为相同花色,重复此流程.',
            liezhuan_jieji: '截击',
            liezhuan_jieji_info: '锁定技,敌方角色从牌堆获得伤害牌后,你随机获得其中一张.',
            nianshou_baonu: '暴怒',
            nianshou_baonu_info: '锁定技,摸牌阶段,你改为摸X张牌(X为4到你体力值间的随机数且至少为4);若你的体力值小于5,则你使用【杀】造成的伤害+1且无次数限制.',
            shanhe_baonu: '暴怒',
            shanhe_baonu_info: '锁定技,摸牌阶段,你改为摸X张牌(X为4到你体力值间的随机数);若你的体力值小于8,则你使用【杀】造成的伤害+1且无次数限制.',
            shanhe_baonua: '暴怒',
            shanhe_baonua_info: '锁定技,摸牌阶段,你改为摸X张牌(X为4到你体力值间的随机数);若你的体力值小于5,则你使用【杀】造成的伤害+1且无次数限制.',
            shanhe_liushi: '流矢',
            shanhe_liushi2: '流矢',
            shanhe_liushi_info: '出牌阶段,你可以将一张♥️️牌置于牌堆顶,视为对一名角色使用一张【杀】(无距离限制且不计入使用次数).当此【杀】造成伤害后,受到伤害的角色获得一个<流>.有<流>的角色手牌上限-X(X为其<流>数).',
            shanhe_zhanwan: '斩腕',
            shanhe_zhanwan_info: '锁定技,受到『流矢』效果影响的角色若弃牌阶段有弃牌,你摸等量的牌,移除『流矢』的效果.',
            shanhe_wangong: '挽弓',
            shanhe_wangong2: '挽弓',
            shanhe_wangong_info: '锁定技,当你使用基本牌时,你获得如下效果:当你使用下一张牌时,若此牌为【杀】,则此牌无次数和距离限制且伤害+1.',
            liezhuan_bianli: '鞭励',
            liezhuan_bianli_info: '锁定技,当你受到【杀】的伤害时,伤害来源可以选择防止此伤害:1．摸两张牌;2．对一名其他角色造成两点伤害.',
            liezhuan_lousuan: '漏算',
            liezhuan_lousuan_info: '锁定技,每名角色回合内使用的牌的点数之和大于等于13时,其摸两张牌.',
            liezhuan_guzhen: '固阵',
            liezhuan_guzhen_info: '锁定技,当你受到伤害后,当前回合结束.',
            liezhuan_xiongti: '凶惕',
            liezhuan_xiongti_info: '锁定技,当你于回合外获得黑色手牌时,对一名随机敌方角色造成X点伤害(X为获得的黑色手牌数量).',
            fenghuo_sanhe: '三合',
            fenghuo_sanhe_info: '当你受到伤害后,你可以摸三张牌.',
            liezhuan_yifu: '蚁附',
            liezhuan_yifu_info: '①游戏的第一个回合开始时(时机同【七星】),你令所有角色各获得1个<黄巾>标记.②有<黄巾>的角色的出牌阶段,其可以扔掉所有<黄巾>,摸一张牌,将X个<黄巾>放到其武将牌上(X为其以此法扔掉的<黄巾>数+1).若3≤X＜6,你失去1点体力;若X≥6,你失去2点体力.',
            danji_shili: '施礼',
            danji_shili_info: '出牌阶段和弃牌阶段开始时,你可以弃置一张手牌,所有敌方角色弃置所有同花色的手牌.',
            danji_shilia: '施礼',
            danji_shilia_info: '出牌阶段和弃牌阶段开始时,你可以弃置一张手牌,所有敌方角色随机弃置两张同花色的手牌.',
            danji_shilib: '施礼',
            danji_shilib_info: '出牌阶段和弃牌阶段开始时,你可以弃置一张手牌,所有敌方角色随机弃置一张同花色的手牌.',
            danji_youyan: '诱言',
            danji_youyan_info: '出牌阶段/弃牌阶段各限一次,当你的牌因弃置进入弃牌堆后,你可以从牌堆中获得本次弃牌中没有的花色的牌各一张.',
            qianli_youyan: '诱言',
            qianli_youyan_info: '出牌阶段/弃牌阶段各限一次.当有牌进入弃牌堆后,若其中有你不因使用或打出而失去的牌,你可以从牌堆中获得你本次失去的牌中没有的花色的牌各一张.',
            danji_fencha: '奉茶',
            danji_fencha_info: '锁定技,所有角色在其回合结束时25%几率增加1点体力上限.',
            danji_jiayi: '假义',
            danji_jiayi_info: '锁定技,当你使用红色牌造成伤害后,你摸两张牌.回合开始时你与所有敌方角色分别弃置所有黑色手牌,你从弃牌堆中随机获得等于你弃牌数的红色牌. ',
            shanhe_huoji: '火计',
            shanhe_huoji_info: '你可以将一张红色手牌当【火攻】使用.',
            shanhe_kanpo: '看破',
            shanhe_kanpo_info: '①你可以将一张黑色牌当【无懈可击】使用.②你使用的【无懈可击】不可被响应.',
            shanhe_huojia: '火计',
            shanhe_huojia_info: '①你可以将一张红色牌当【火攻】使用.②你使用【火攻】的作用效果改为<目标角色随机展示一张手牌A,你可以弃置一张与A颜色相同的牌,对目标造成1点火焰伤害>.',
            liezhuan_huoji: '火计',
            liezhuan_huoji_info: '你可以将一张红色手牌当【火攻】使用,每回合限三次.',
            danji_huoji: '火计',
            danji_huoji_info: '你可以将一张红色手牌当【火攻】使用,每回合限三次.',
            danji_zonghuo: '纵火',
            danji_zonghuo_info: '锁定技,你造成的火焰伤害+1.',
            qianli_zonghuo: '纵火',
            qianli_zonghuo_info: '锁定技,你造成的火焰伤害+X.(X为本回合此技能触发的次数,至多为2)',
            nianshou_xiongshou: '凶兽',
            nianshou_xiongshou_info: '锁定技,你的判定区的牌中,【乐不思蜀】【兵粮寸断】判定结果反转;摸牌阶段你的摸牌数+1;结束阶段,你摸一张牌.',
            nianshou_xiongshoua: '凶兽',
            nianshou_xiongshoua_info: '锁定技,你的判定区的牌中,【乐不思蜀】【兵粮寸断】判定结果反转;摸牌阶段你的摸牌数+2;结束阶段,你摸两张牌.',
            nianshou_xiongshoub: '凶兽',
            nianshou_xiongshoub_info: '锁定技,你不能使用或打出红色牌;你使用黑色牌造成伤害后摸一张牌.',
            nianshou_xisheng: '牺牲',
            nianshou_xisheng_info: '锁定技,你死亡时,若你的队友手牌数低于体力值,则将手牌摸至与体力值相同,否则将体力回复至与手牌数相同.',
            wenhe_posha: '破杀',
            wenhe_posha_info: '锁定技,你的回合内,其他角色进入濒死状态时,其随机弃置一张手牌.',
            wenhe_wansha: '完杀',
            wenhe_wansha_info: '锁定技,你的回合内,只有你和处于濒死状态的角色才能使用【桃】.',
            qqzj_lingba: '凌霸',
            qqzj_lingba_info: '锁定技,你的回合开始时,若你手牌数为全场最多,则对一名随机敌人造成2点伤害.若你手牌数大于等于你体力值的两倍,则改为对所有敌人造成伤害.',
            qqzj_yishen: '疑神',
            qqzj_yishen_info: '当你回复体力时,可以改为获得所有敌人各一张随机装备.',
            qqzj_langgu: '狼顾',
            qqzj_langgu_info: '锁定技,每回合限一次,当你获得其他角色的牌时,进行一次判定:若结果为黑色,随机弃置其1张手牌,且视为此技能本回合未发动过.',
            qqzj_yuanlv: '远虑',
            qqzj_yuanlv_info: '当你使用锦囊牌对敌方角色造成伤害时,你可以防止该伤害,改为摸一张牌且该敌方角色对你造成1点伤害.',
            fenghuo_xianti: '仙体',
            fenghuo_xianti_info: '锁定技,当你受到伤害时,防止该伤害.当你失去最后的手牌时,你失去所有体力.',
            qunying_huaxing: '化形',
            qunying_huaxing_info: '锁定技,摸牌阶段,你放弃摸牌,改为将手牌摸至与手牌数最多的一名角色相同.你跳过弃牌阶段.',
            qunying_huaxinga: '化形',
            qunying_huaxinga_info: '锁定技,摸牌阶段,你放弃摸牌,改为将手牌摸至与手牌数最多的一名角色相同.',
            qunying_xianfu: '仙符',
            qunying_xianfu_info: '锁定技,当你于回合外失去1张手牌时,获得1个<符>标记.当你死亡时,随机对一名敌方角色造成等同于<符>数量的伤害.',
            qunying_xianfua: '仙符',
            qunying_xianfua_info: '锁定技,当你于回合外失去手牌时,获得1个<符>标记.当你死亡时,随机对一名敌方角色造成等同于<符>数量的伤害.',
            sy_shenen: '神恩',
            sy_shenen_info: '锁定技,所有己方角色使用牌无距离限制;所有敌方角色摸牌阶段多摸一张牌且手牌上限+1.',
            tianshu_shenen: '神恩',
            tianshu_shenen_info: '锁定技,所有己方角色使用牌没有距离限制.所有敌方角色手牌上限+1.',
            Tianshu_shenen: '神恩',
            Tianshu_shenen_info: '锁定技,所有己方角色使用牌没有距离限制.',
            tianshu_baiyi: '白仪',
            tianshu_baiyi_info: '锁定技,每名敌方角色的摸牌阶段,若当前轮数小于3,其少摸一张牌;第五轮开始时,每名敌方角色受到2点雷电伤害;当己方角色受到的雷电伤害时,若当前轮数小于7,则此伤害无效. ',
            Tianshu_baiyi: '白仪',
            Tianshu_baiyi_info: '锁定技,每名敌方角色的回合开始时,若当前轮数小于3,你随机获得其三张牌;若当前轮数小于5,对其造成3点雷电伤害;若当前轮数小于7,其随机弃置三张牌. ',
            Tianshu_baiyia: '白仪',
            Tianshu_baiyia_info: '锁定技,每名敌方角色的回合开始时,若当前轮数小于3,你随机获得其两张牌;若当前轮数小于5,对其造成2点雷电伤害;若当前轮数小于7,其随机弃置两张牌. ',
            Tianshu_baiyib: '白仪',
            Tianshu_baiyib_info: '锁定技,每名敌方角色的回合开始时,若当前轮数小于3,你随机获得其一张牌;若当前轮数小于5,对其造成1点雷电伤害;若当前轮数小于7,其随机弃置一张牌. ',
            shanhe_jingong: '矜功',
            shanhe_jingong_backup: '矜功',
            shanhe_jingong_info: '出牌阶段限一次,你可以将一张【杀】或装备牌当做三张随机锦囊牌中的一张使用.',
            shanhe_zhenlue: '缜略',
            shanhe_zhenlue_info: '锁定技,你使用的普通锦囊牌不能被【无懈可击】响应;你不能成为延时锦囊牌的目标.',
            shanhe_dungong: '盾弓',
            shanhe_dungong_info: '锁定技,防止对你造成的超过3点以上部分的伤害.',
            tianshu_zhiri: '炙日',
            tianshu_zhiri_info: '锁定技,当敌方角色使用红色锦囊牌指定目标后,你摸三张牌.',
            Tianshu_zhiri: '炙日',
            Tianshu_zhiri_info: '锁定技,当敌方角色使用红色锦囊牌指定目标后,你摸一张牌.',
            liezhuan_zhanjia: '战甲',
            liezhuan_zhanjia_info: '锁定技,每回合限一次,当你受到大于2点的伤害时,将此伤害减至2点,摸两张牌.',
            qqzj_baonue: '暴虐',
            qqzj_baonue_info: '锁定技,回合开始时,你摸X张牌并对至多X名角色造成1点伤害,你失去1点体力.(X为你已损失体力且最大为5)',
            fenghuo_baonue: '暴虐',
            fenghuo_baonue_info: '锁定技,回合开始时,你摸X张牌并对至多X名角色造成1点伤害,你失去1点体力.(X为你已损失体力且最大为5)',
            qqzj_yubu: '驭布',
            qqzj_yubu_info: '锁定技,当己方角色使用【杀】指定目标时,你进行一次判定:若结果为黑色,你对此【杀】的所有目标造成1点伤害.',
            qqzj_jianzheng: '谏征',
            qqzj_jianzheng_info: '当一名其他角色使用【杀】指定目标时,若你在其攻击范围内且你不是目标,则你可以将一张手牌置于牌堆顶,取消所有目标,若此【杀】不为黑色,你成为目标.',
            qqzj_yinlei: '引雷',
            qqzj_yinlei_info: '锁定技,当你失去牌时,随机横置一名角色.',
            qqzj_wangzun: '妄尊',
            qqzj_wangzun_info: '锁定技,敌方角色的结束阶段,若其本回合:1.没有对你造成伤害,则其弃置两张牌;2.对你造成过伤害,则你对其造成1点伤害.',
            qqzj_wangzuna: '妄尊',
            qqzj_wangzuna_info: '锁定技,敌方角色的结束阶段,若其本回合:1.没有对你造成伤害,则其弃置一张牌;2.对你造成伤害数超过1点,则你对其造成1点伤害.',
            qqzj_duoxi: '夺玺',
            qqzj_duoxi_info: '其他角色的摸牌阶段,你可以失去1点体力改为你摸两张牌.',
            liezhuan_duoxi: '夺玺',
            liezhuan_duoxi_info: '其他角色的摸牌阶段,你可以失去1点体力改为你与其各摸一张牌.',
            tianshu_xingxia: '行夏',
            tianshu_xingxia_info: '锁定技,每轮限一次,出牌阶段开始时,你对一名其他己方角色造成1点火焰伤害,令所有敌方角色选择一项:1.弃置两张红色牌;2.受到你造成的2点火焰伤害.',
            Tianshu_xingxia: '行夏',
            Tianshu_xingxia_info: '锁定技,出牌阶段开始时,你对随机一名己方角色造成1点火焰伤害,令所有敌方角色选择一项:1.弃置三张红色牌;2.受到你造成的2点火焰伤害.',
            Tianshu_xingxiaa: '行夏',
            Tianshu_xingxiaa_info: '锁定技,出牌阶段开始时,你对随机一名己方角色造成1点火焰伤害,令所有敌方角色选择一项:1.弃置两张红色牌;2.受到你造成的1点火焰伤害.',
            Tianshu_xingxiab: '行夏',
            Tianshu_xingxiab_info: '锁定技,出牌阶段开始时,你对随机一名己方角色造成1点火焰伤害,令所有敌方角色选择一项:1.弃置一张红色牌;2.受到你造成的1点火焰伤害.',
            Tianshu_baoyan: '爆炎',
            Tianshu_baoyan_info: '锁定技,每当有角色造成火焰伤害后,你获得一个<炎>标记.你的回合结束时,弃置所有<炎>标记,随机对一名敌方角色造成X点火焰伤害.(X为弃置的<炎>标记数量)',
            Tianshu_baoyana: '爆炎',
            Tianshu_baoyana_info: '锁定技,每当有角色造成火焰伤害后,你获得一个<炎>标记.你的回合结束时,弃置所有<炎>标记,随机对X名敌方角色各造成1点火焰伤害.(X为弃置的<炎>标记数量)',
            Tianshu_huoshen: '火神',
            Tianshu_huoshen_info: '锁定技,每当有角色造成火焰伤害后,你回复一点体力并摸一张牌,若你的体力值为满,则改为摸三张牌.',
            sy_zirun: '滋润',
            sy_zirun_info: '锁定技,准备阶段,你令所有角色摸一张牌,若其装备区内有牌,则其额外摸一张牌.',
            sy_juehong: '决洪',
            sy_juehong_info: '锁定技,准备阶段,你令所有敌方角色自己弃置自己的装备区内的所有牌,若其装备区内没有牌,则改为随机弃置两张手牌.',
            sy_juehong: '决洪',
            sy_juehong_info: '锁定技,准备阶段,你令所有敌方角色自己弃置自己的装备区内的所有牌,若其装备区内没有牌,则改为随机弃置一张手牌.',
            Tianshu_tuanliua: '湍流',
            Tianshu_tuanliua_info: '锁定技,结束阶段,若本回合进入弃牌堆的牌数量:大于4,你回复两点体力;大于5,你摸四张牌;大于9,你对所有敌方角色各造成1点伤害.',
            Tianshu_tuanliub: '湍流',
            Tianshu_tuanliub_info: '锁定技,结束阶段,若本回合进入弃牌堆的牌数量:大于4,你回复一点体力;大于5,你摸两张牌;大于9,你对所有敌方角色各造成1点伤害.',
            Tianshu_tuanliu: '湍流',
            Tianshu_tuanliu_info: '锁定技,结束阶段,若本回合进入弃牌堆的牌数量:大于4,你回复三点体力;大于5,你摸六张牌;大于9,你对所有敌方角色各造成1点伤害.',
            Tianshu_shuishen: '水神',
            Tianshu_shuishen_info: '锁定技,弃牌堆中,不同牌名的牌的数量达到4时,你回复体力时回复量+1;达到5时,摸牌阶段额外摸5张牌;达到9时,你造成伤害时伤害+1.',
            Tianshu_duji: '毒计',
            Tianshu_duji_info: '锁定技,当你使用锦囊牌指定敌方角色为目标后,随机弃置其一张牌,若目标没有牌则改为对其造成1点伤害.',
            Tianshu_guimou: '诡谋',
            Tianshu_guimou_info: '锁定技,你使用普通锦囊牌结算完毕后,会随机再对其中任意目标额外结算一次.',
            Tianshu_wansha: '完杀',
            Tianshu_wansha_info: '锁定技,你的回合内,每名角色首次进入濒死状态时,你摸三张牌,其他角色使用的第一张【桃】无效.',
            Tianshu_wanshaa: '完杀',
            Tianshu_wanshaa_info: '锁定技,你的回合内,每名角色首次进入濒死状态时,你摸两张牌,其他角色使用的第一张【桃】无效.',
            Tianshu_yinfeng: '隐锋',
            Tianshu_yinfeng_info: '锁定技,当你使用伤害牌结算完毕后,若未造成伤害,则你摸一张牌.',
            Tianshu_shanshen: '善身',
            Tianshu_shanshen_info: '限定技,出牌阶段,将体力值回复至与本轮开始时相同,手牌数摸至与本轮开始时相同.',
            Tianshu_huoyan: '惑言',
            Tianshu_huoyan_info: '出牌阶段限一次,令一名角色对另一名其他角色使用手牌中至多5张【杀】或【决斗】.',
            Tianshu_huoyana: '惑言',
            Tianshu_huoyana_info: '出牌阶段限一次,令一名角色对另一名其他角色使用手牌中至多3张【杀】或【决斗】.',
            Tianshu_jienu: '竭怒',
            Tianshu_jienu_info: '出牌阶段限一次,对一名敌方角色造成X点伤害.(X为其技能数且至多为5)',
            Tianshu_jienua: '竭怒',
            Tianshu_jienua_info: '出牌阶段限一次,对一名敌方角色造成X点伤害.(X为其技能数且至多为3)',
            shengxiao_zishu: '子鼠',
            shengxiao_zishu_info: '出牌阶段限一次,你可以获得手牌数大于你的其他角色一张手牌,你可以重复此流程直到你的手牌数为全场最多.',
            shengxiao_yinhu: '寅虎',
            shengxiao_yinhu_info: '出牌阶段,你可以弃置一张牌(以此法弃置的牌须类型各不相同),对一名其他角色造成1点伤害;若你以此法导致一名角色进入濒死状态,则此技能失效直到回合结束.',
            shengxiao_wuma: '午马',
            shengxiao_wuma_info: '锁定技,你不能被翻面;你的阶段不能被跳过;当你成为其他角色使用锦囊牌的目标后,摸一张牌.',
            shengxiao_weiyang: '未羊',
            shengxiao_weiyang_info: '出牌阶段限一次,你可以弃置任意张不同类型的牌,令至多等量角色回复1点体力.',
            shengxiao_shenhou: '申猴',
            shengxiao_shenhou_info: '当你成为【杀】的目标后,你可以进行判定,若结果为红色,则此【杀】对你无效.',
            shengxiao_youji: '酉鸡',
            shengxiao_youji_info: '锁定技,摸牌阶段,你多摸X张牌(X为游戏轮数且最多为5).',
            shengxiao_xugou: '戌狗',
            shengxiao_xugou_info: '锁定技,红色【杀】对你无效;你使用红色【杀】无距离限制且伤害值基数+1.',
            shengxiao_haizhu: '亥猪',
            shengxiao_haizhu_info: '锁定技,当其他角色的黑色牌因弃置而置入弃牌堆后,你获得这些牌;准备阶段,若你的手牌数为场上最多的或之一,你失去1点体力.',
            fenghuo_zunwei: '尊位',
            fenghuo_zunwei_backup: '尊位',
            fenghuo_zunwei_info: "出牌阶段限一次,你可选择本局游戏内未选择过的一项:①若你已受伤,则你可以选择一名体力值大于你的其他角色,你将体力值回复至X(X为你的体力上限与其体力值中的较小值)②选择一名手牌数大于你的其他角色,你将手牌数摸至与其相同(至多摸五张)③选择一名装备区内牌数大于你的其他角色.你令X=1.若你装备区内的('equip'+X)栏为空,则你使用牌堆中的一张副类别为('equip'+X),且能对自己使用的装备牌.你令X+1.若X不大于5,且你装备区内的牌数仍小于目标角色,则你重复此流程.",
            shanhe_yizhao: '异兆',
            shanhe_yizhao_info: '锁定技.当你使用或打出牌时,你获得等同于此牌点数枚<黄>标记.若<黄>的十位数发生变化,你获得牌堆中一张点数为你<黄>的十位数的牌.',
            fenghuo_shishou: '失守',
            fenghuo_shishou2: '失守',
            fenghuo_shishou_info: '锁定技,当你使用【酒】时或受到火焰伤害后,你移去一个<粮>.准备阶段,若你没有<粮>,你失去1点体力.',
            fenghuo_qinxi: '侵袭',
            fenghuo_qinxi_info: '出牌阶段限一次,若你有<暴>标记,你可以失去1点体力,对一名敌方角色造成2点伤害.',
            fenghuo_feiyan: '飞燕',
            fenghuo_feiyan_info: '出牌阶段限一次,你可以获得体力值不大于你的一名其他角色的一张牌.',
            fenghuo_xingluan: '兴乱',
            fenghuo_xingluan_info: '出牌阶段限一次,当你使用的仅指定一个目标的牌结算完成后,你可以从牌堆中随机获得一张点数为6的牌(若牌堆中没有符合要求的牌则改为摸六张牌).',
            hulaoguan_xingluan: '兴乱',
            hulaoguan_xingluan_info: '出牌阶段限一次,当你使用的仅指定一个目标的牌结算完成后,你可以从牌堆中随机获得一张点数为6的牌(若牌堆中没有符合要求的牌则改为摸六张牌).',
            hulaoguan_xingluana: '兴乱',
            hulaoguan_xingluana_info: '出牌阶段限两次,当你使用的仅指定一个目标的牌结算完成后,你可以从牌堆中随机获得一张点数为6的牌(若牌堆中没有符合要求的牌则改为摸六张牌).',
            wenhe_niluan: '逆乱',
            wenhe_niluan_info: '出牌阶段,你可以将一张黑色牌当做【杀】使用.此【杀】使用结算完成后,若你未因此【杀】造成过伤害,则你令此【杀】不计入使用次数.',
            qianli_wangong: '挽弓',
            qianli_wangong_info: '你可以将装备牌当做无距离和次数限制的【杀】使用.此杀造成的伤害改为X(X为你计算与该角色的距离且至多为3).',
            shanhe_linglong: '玲珑',
            shanhe_linglong_info: '锁定技,若你的装备区没有武器牌,则你使用【杀】的次数上限+1;若你的装备区没有防具牌,视为你装备着【八卦阵】;若你的装备区没有坐骑牌,你的手牌上限+1;若你的装备区没有宝物牌,则你视为拥有技能【奇才】.',
            fenghuo_zhiren: '织纴',
            fenghuo_zhiren_info: '当你于你的回合内使用第一张非转化牌时,你可依次执行以下选项中的前X项:①卜算X.②可弃置场上的一张装备牌和延时锦囊牌.③回复1点体力.④摸三张牌.(X为此牌的名称的字数)',
            shanhe_yise: '异色',
            shanhe_yise_info: '其他角色得到你的牌后,若这些牌中:有红色牌,你可令其回复1点体力;有黑色牌,其下次受到【杀】造成的伤害时,此伤害+1.',
            shanhe_shunshi: '顺世',
            shanhe_shunshi_info: '准备阶段或当你受到伤害后,你可将一张牌交给一名不为伤害来源的其他角色并获得如下效果直到你的回合结束:摸牌阶段的额定摸牌数+1,使用【杀】的次数上限+1,手牌上限+1.',
            shanhe_yuanlve: '远略',
            shanhe_yuanlve_info: '出牌阶段限一次,你可以将一张非装备牌交给一名角色,该角色可以使用该牌并令你摸一张牌.',
            fenghuo_lihuo: '疠火',
            fenghuo_lihuo2: '疠火',
            fenghuo_lihuo3: '疠火',
            fenghuo_lihuo4: '疠火',
            fenghuo_lihuo_info: '你使用普通的【杀】可以改为火【杀】,若此【杀】造成过伤害,你失去1点体力;你使用火【杀】可以多选择一个目标.你每回合使用的第一张牌如果是【杀】,则此【杀】结算完毕后可置于你的武将牌上.',
            fenghuo_chunlao: '醇醪',
            fenghuo_chunlao2: '醇醪',
            fenghuo_chunlao_info: '结束阶段开始时,若你没有<醇>,你可以将至少一张【杀】置于你的武将牌上,称为<醇>.当一名角色处于濒死状态时,你可以移去一张<醇>,视为该角色使用一张【酒】.',
            fenghuo_chunlaoa: '醇醪',
            fenghuo_chunlaoa2: '醇醪',
            fenghuo_chunlaoa_info: '出牌阶段结束时,若你没有<醇>,你可以将至少一张【杀】置于你的武将牌上,称为<醇>.当一名角色处于濒死状态时,你可以移去一张<醇>,视为该角色使用一张【酒】,若此<醇>的属性为:火,你回复1点体力、雷,你摸两张牌.',
            fenghuo_chunlaob: '醇醪',
            fenghuo_chunlaob2: '醇醪',
            fenghuo_chunlaob_info: '结束阶段开始时,若你没有<醇>,你可以将至少一张【杀】置于你的武将牌上,称为<醇>.当一名角色处于濒死状态时,你可以移去一张<醇>,视为该角色使用一张【酒】.',
            fenghuo_minxiang: '冥想',
            fenghuo_minxiang_info: '锁定技,每个回合结束时,若你已受伤,将体力回复至体力上限.',
            liezhuan_leijun: '雷君',
            liezhuan_leijun_info: '出牌阶段限一次,你可以弃置一张牌.若如此做,你进行一次判定,令从你的座位开始逆时针第X名角色受到2点伤害(X为判定牌的点数).',
            fenghuo_dundang: '盾挡',
            fenghuo_dundang_info: '锁定技,当你受到【杀】的伤害时,此伤害-1.',
            fenghuo_pomou: '破谋',
            fenghuo_pomou_info: '锁定技,当你受到锦囊牌的伤害时,此伤害-1.',
            fenghuo_shibi: '侍婢',
            fenghuo_shibi_info: '锁定技,每回合限一次,当你在回合外获得牌时,所有已受伤的己方角色回复1点体力.',
            shanhe_qixi: '奇袭',
            shanhe_qixi_info: '你可以将一张黑色牌当做【过河拆桥】使用.',
            fenghuo_tongming: '同命',
            fenghuo_tongming_info: '锁定技,每回合限一次,当己方角色造成伤害后,对随机一名敌人造成X点伤害.(X为该技能本局游戏发动的次数)',
            fenghuo_baxi: '魃吸',
            fenghuo_baxi_info: '锁定技,当己方一次性造成至少三点伤害时,其回复1点体力.',
            fenghuo_xumei: '须眉',
            fenghuo_xumei_info: '锁定技,所有己方手牌上限+3.',
            fenghuo_wuji: '无忌',
            fenghuo_wuji_info: '锁定技,己方受到伤害时,有30%概率伤害-1.',
            fenghuo_chuchu: '楚楚',
            fenghuo_chuchu_info: '锁定技,每回合限三次,当你受到伤害时,伤害来源弃置一张手牌.若伤害值大于1,则有50%概率防止之.',
            shanhe_ganlu: '甘露',
            shanhe_ganlu_info: '出牌阶段限一次,你可以选择两名装备区内装备数之差不大于X的角色,令其交换装备区内的牌(X为你已损失的体力值).',
            fenghuo_ganlu: '甘露',
            fenghuo_ganlu_info: '锁定技,当你首次进入濒死状态时,复原你的武将牌,弃置所有牌,回复三点体力,摸三张牌.',
            fhlt_changbanpoxunzhang: '绝境',
            fhlt_sanniangdejiurenjian: '镇南',
            fhlt_kuimulang: '奎木',
            fhlt_kuimulang_info: '锁定技,当其他角色失去体力后,你本局游戏对其造成的伤害+1.',
            fhlt_fenghuang: '凤凰',
            fhlt_fenghuang_info: '锁定技,当你脱离濒死状态时,对所有敌人造成1点火焰伤害.每轮限一次,当你进入濒死状态时,回复1点体力.',
            fhlt_banwenhu: '纹虎',
            fhlt_banwenhu_info: '锁定技,每个准备阶段,将一张随机的装备牌置入你的装备区.',
            fhlt_weiyueyan: '危月',
            fhlt_weiyueyan_info: '每回合限两次,你的判定牌生效前,你可以从牌堆顶的16张牌中选择一张牌代替之..',
            fhlt_xiaoxiongmao: '小熊猫',
            fhlt_xiaoxiongmao_info: '获得道具后,会再随机获得一件未选择的道具.',
            fhlt_caocaodexupao: '割须',
            fhlt_caocaodexupao_info: '锁定技,当你受到伤害时,有50%概率防止此伤害改为失去1点体力.',
            fhlt_guansuodemeiguihua: '玫瑰',
            fhlt_guansuodemeiguihua_info: '锁定技,女性角色对你造成伤害时,50%概率伤害-1,对伤害来源造成1点伤害.',
            fhlt_xiahoudundeyanzhao: '眼罩',
            fhlt_xiahoudundeyanzhao_info: '锁定技,你每次判定后,随机对一名敌方角色造成1点伤害.',
            fhlt_zhuqueyushan: '朱雀羽扇',
            fhlt_zhuqueyushan_info: '你使用的【杀】可视为火【杀】.',
            fhlt_zhugeliannu: '诸葛连弩',
            fhlt_zhugeliannu_info: '击败敌人后牌堆里有50%概率增加一张【杀】.',
            fhlt_xushaodemingdan: '许劭的名单',
            fhlt_xushaodemingdan_info: '游戏开始时,随机获得一名武将.',
            fhlt_bingjin: '兵尽',
            fhlt_kongmingdeng: '孔明灯',
            fhlt_kongmingdeng_info: '击败敌人首领后,你弃置4张不同花色的牌,随机获得一件被动道具.',
            fhlt_dabing: '大饼',
            fhlt_dabing_info: '所有套装技能所需部件数-1.',
            fhlt_sanguoyanyi: '三国演义',
            fhlt_sanguoyanyi_info: '选择道具时,额外选择一次道具.',
            fhlt_junlingzhuang: '拱手',
            fhlt_junlingzhuang_info: '准备阶段,你可以选择一名敌方角色,该角色有5%概率变成友方.如果触发失败,你流失一点体力并使概率增加5%.',
            liezhuan_gongshou: '拱手',
            liezhuan_gongshou_info: '准备阶段,你可以选择一名敌方角色,该角色有5%概率变成友方.如果触发失败,你流失一点体力并使概率增加5%.',
            liezhuan_tianxin: '天心',
            liezhuan_tianxin_info: '锁定技,"拱手"成功率+X%(X为你已损失的体力值).',
            fhlt_wulandechangmao: '长矛',
            fhlt_wulandechangmao_info: '锁定技,当你判定区有牌时,你造成的伤害+1.',
            fhlt_leitongdedadun: '大盾',
            fhlt_leitongdedadun_info: '锁定技,当你判定区有牌时,你受到的伤害-1.',
            fhlt_chushibiao: '出师表',
            fhlt_chushibiao_info: '每次有新武将加入队伍,获得一张随机的锦囊牌.',
            fhlt_weiwenzhugezhidefan: '卫温诸葛直的帆',
            fhlt_weiwenzhugezhidefan_info: '选择道具时,有50%概率额外选择一次道具.',
            fhlt_maan: '马鞍',
            fhlt_maan_info: '锁定技,你造成的伤害增加X(X为所有己方坐骑区卡牌张数).',
            fhlt_mangyachangdemaozi: '狼帽',
            fhlt_mangyachangdemaozi_info: '锁定技,出牌阶段开始时,你失去体力值直到仅剩1点体力,此阶段结果时回复以此法失去的体力值.',
            fhlt_zhuiliechui: '追猎',
            shanhe_zaiqia: '再起',
            shanhe_zaiqia_info: '摸牌阶段,你可以改为亮出牌堆顶X张牌(X为你已损失体力值),回复与其中♥️️牌数等量的体力,弃置这些♥️️牌并获得剩余牌.',
            shanhe_zaiqi: '再起',
            shanhe_zaiqi_info: '摸牌阶段,若你已受伤,你可以改为亮出牌堆顶X张牌(X为你已损失体力值+1),回复与其中♥️️牌数等量的体力并获得剩余牌.',
            fhlt_menghuodebingfashu: '再起',
            fhlt_menghuodebingfashu_info: '摸牌阶段,你可以改为亮出牌堆顶X张牌(X为你已损失体力值),回复与其中♥️️牌数等量的体力,弃置这些♥️️牌并获得剩余牌.',
            fhlt_huamandegudao: '骨刀',
            fenghuo_gudao: '骨刀',
            fenghuo_gudao_info: '当有角色受到【南蛮入侵】的伤害时,你可以弃一张手牌令该伤害+1.',
            fhlt_wutugudetengjia: '藤甲',
            fhlt_wutugudetengjia_info: '锁定技,普通【杀】对你造成的伤害-1,你受到的火焰伤害+1.',
            fhlt_sunhaodeyupao: '浴袍',
            fhlt_sunhaodeyupao_info: '锁定技,当你于出牌阶段弃置牌后,你本回合造成的伤害+1.',
            fenghuo_tongxin: '同心',
            fenghuo_tongxin_info: '当有同心的其他角色对没有同心的角色造成伤害时,你可弃置一张手牌令此伤害+2.',
            fenghuo_wushen: '武神',
            fenghuo_wushen_info: '锁定技,你的♥️️手牌均视为【杀】;锁定技,你使用♥️️【杀】无距离限制.',
            fenghuo_yuma: '御马',
            fenghuo_yuma_info: '当有角色使用坐骑牌后,你可以摸两张牌或者对一名装备区内没有坐骑牌的角色造成两点伤害.',
            fenghuo_dushan: '独善',
            fenghuo_dushan_info: '锁定技,若其他角色使用牌指定了包括你在内的多个目标,该牌对你无效.',
            fenghuo_duxiu: '独秀',
            fenghuo_duxiu_info: '当你使用【杀】或伤害锦囊牌指定目标后,若你的手牌中没有同名牌,你可以选择一项:1.摸两张牌;2.此牌造成的伤害+1.',
            fenghuo_juesha: '绝杀',
            fenghuo_juesha_info: '每回合限一次,当你使用【杀】造成伤害时,你可以令该伤害+1.',
            fenghuo_bihu: '闭户',
            fenghuo_bihu_info: '锁定技,当你成为【杀】或伤害锦囊牌的目标时,若你本回合没有获得过牌,此牌对你无效.',
            fenghuo_juao: '倨傲',
            fenghuo_juao_info: '锁定技,当你成为其他角色使用牌的目标时,若你的手牌数大于该角色,此牌对你无效.',
            fenghuo_jingjue: '惊觉',
            fenghuo_jingjue_info: '锁定技,当你于回合外失去手牌后,随机对一名敌方角色造成1点伤害.',
            fhlt_qingshejian: '青蛇',
            fhlt_qingshejian_info: '锁定技,你对其他角色造成伤害时,若你的体力上限大于你的手牌数,伤害值增加你体力上限与你手牌数的差值.',
            fhlt_baguazhen: '八阵',
            fhlt_zhenjidehudiejie: '洛结',
            fhlt_zhenjidehudiejie_info: '锁定技,黑色牌造成的伤害+1.',
            fhlt_zhangmadezuoyeben: '作业',
            fhlt_zhangmadezuoyeben_info: '锁定技,每回合限一次,获得你使用技能弃置的牌(至少三张才能触发).',
            fhlt_zhangqiyingdefalu: '法伤',
            fhlt_zhangqiyingdefalu_info: '你每通过套装获得一个技能,本局游戏造成的伤害+1.',
            fhlt_xingdaorongdedafu: '大斧',
            fhlt_xingdaorongdedafu_info: '锁定技,出牌阶段结束时,若你的体力上限不为全场最高,你加2点体力上限.',
            fhlt_yajiaoqiang: '涯角',
            fhlt_yajiaoqiang_info: '锁定技,当你使用红色【杀】造成伤害时,进行一次判定,若为红色,此伤害+1,若为黑色,你摸两张牌.',
            fhlt_chenlindebi: '笔杆',
            fhlt_chenlindebi_info: '锁定技,当你失去体力后,体力上限+1.',
            fhlt_liuzandekuoyinqi: '扩音',
            fhlt_liuzandekuoyinqi_info: '锁定技,你使用非卡牌对其他角色造成的伤害+1.',
            fhlt_longyin: '龙印',
            fhlt_longyin_info: '锁定技,你造成的所有火焰伤害+1.',
            fhlt_fengyin: '凤印',
            fhlt_fengyin_info: '锁定技,你造成的所有传导伤害+1.',
            fhlt_makai: '马铠',
            fhlt_makai_info: '锁定技,其他角色不能弃置你坐骑区的牌.',
            fhlt_luoshenfu: '洛神',
            fhlt_jdd: '丹药',
            fhlt_jdd_info: '每回合首次受到的伤害-1.',
            fhlt_tqd: '丹药',
            fhlt_tqd_info: '每个回合的结束阶段回复1点体力.',
            fhlt_yyd: '丹药',
            fhlt_yyd_info: '每次回复体力时可以摸一张牌.',
            fhlt_hss: '丹药',
            fhlt_hss_info: '初始手牌+3.',
            fhlt_wss: '丹药',
            fhlt_wss_info: '每个回合的结束阶段随机摸1-2张牌.',
            fhlt_zky: '丹药',
            fhlt_zky_info: '每次受到大于一点的伤害后,若你未进入濒死状态,回复1点体力.',
            fhlt_jljdd: '丹药',
            fhlt_jljdd_info: '每次受到的伤害-1.',
            fhlt_jltqd: '丹药',
            fhlt_jltqd_info: '每个回合的准备阶段和结束阶段回复1点体力.',
            fhlt_jlyyd: '丹药',
            fhlt_jlyyd_info: '每次回复体力时可以摸两张牌.',
            fhlt_jzhss: '丹药',
            fhlt_jzhss_info: '初始手牌+5.',
            fhlt_jzwss: '丹药',
            fhlt_jzwss_info: '每个回合的结束阶段随机摸3张牌.',
            fhlt_huatuodeyaoxiang: '药箱',
            fhlt_huatuodeyaoxiang_info: '游戏开始时,25%概率获得一个随机的丹药.',
            fhlt_kongchengjuechang: '空城',
            fhlt_caiwenjidechangdi: '默识',
            fhlt_caochongdeshitouchuan: '称象',
            fhlt_caochongdeshitouchuan_info: '当你受到伤害后,你可以亮出牌堆顶的四张牌.获得其中任意数量点数之和不大于13的牌',
            fhlt_xuyoudechuanhuji: '成略',
            fhlt_xuyoudechuanhuji1: '成略',
            fhlt_xuyoudechuanhuji_info: '转换技,出牌阶段限一次,阴:你可以摸一张牌,弃置两张手牌.阳:你可以摸两张牌,弃置一张手牌.若如此做,直到本回合结束,你使用与弃置牌花色相同的牌无距离和次数限制.',
            fhlt_zhoutaideshabu: '不屈',
            fhlt_mingjiangzhongjiejian: '暗箭',
            fhlt_fanjiangzhangdadedao: '短刀',
            fhlt_guanyudelvmaozi: '关帽',
            fhlt_guanyudelvmaozi_info: '限定技,你可以获得一名其他角色的所有红色手牌.',
            fhlt_tianlang: '天狼',
            fhlt_tianlang_info: '当你获得其他角色的牌时,可以对其造成两点伤害或摸一张牌.',
            fhlt_lv: '驴',
            fhlt_lv_info: '限定技,准备阶段,若你有已发动的限定技,你可以将自己的所有限定技视为未发动过.',
            fhlt_jiaomujiao: '角木',
            fhlt_jiaomujiao_info: '锁定技,当你使用锦囊牌造成伤害后,体力上限+1.',
            fhlt_kangjinlong: '亢金',
            fhlt_kangjinlong_info: '锁定技,当你使用【杀】指定目标后,对所有目标角色造成X点雷电伤害.(X为此【杀】指定的目标数)',
            fhlt_yihuoshe: '翼火',
            fhlt_yihuoshe_info: '锁定技,你造成的伤害均视为火焰伤害.',
            fhlt_xingrima: '星日',
            fhlt_xingrima_info: '锁定技,当你使用【杀】指定目标后,进行一次判定:若判定结果为红色,则此杀不计入出牌阶段使用次数.',
            fhlt_zhongyaodezitie: '字帖',
            fhlt_zhongyaodezitie_info: '锁定技,你有50%概率可以获得其他角色弃置或判定的♠️️卡牌.',
            fhlt_ywt2: '乐舞',
            fhlt_ywt2_info: '你所有其他带生效概率的宝物全部提升10%.(最多100%)',
            fhlt_ywt5: '乐舞',
            fhlt_ywt5_info: '你所有其他带生效概率的宝物全部提升40%.(最多100%)',
            fhlt_fmt2: '天匠',
            fhlt_fmt2_move: '天匠',
            fhlt_fmt2_info: '游戏开始时,你随机获得两张不同副类别的装备牌,并置入你的装备区.出牌阶段,你可以将装备区的牌移动至其他角色的装备区(可替换原装备).若你以此法移动了〖铸刃〗的衍生装备,你摸两张牌.',
            fhlt_mbt2: '怒袭',
            fhlt_mbt2_info: '出牌阶段限一次,你可以弃置两张点数相同的牌,若点数不大于你的体力上限,则你对一名角色造成该点数的伤害.',
            fhlt_mbt4: '墨宝',
            fhlt_mbt4_info: '锁定技,你每次使用黑色牌造成伤害后,体力上限+1.',
            fhlt_mbt6: '墨宝',
            fhlt_mbt6_info: '锁定技,你所有黑色牌造成的伤害增加你当前体力上限的值.',
            fhlt_tyt2: '桃园',
            fhlt_tyt2_info: '击败敌人后牌堆里有50%概率增加一张【桃园结义】.',
            fhlt_tyt4: '桃园',
            fhlt_tyt4_info: '锁定技,每次使用桃园结义获得一个标记,使用指定多目标的杀或锦囊指定目标后,摸标记个数张牌.',
            fhlt_tyt6: '桃园',
            fhlt_tyt6_info: '锁定技,每次使用桃园结义获得一个标记,使用指定多目标的杀或锦囊造成伤害时,令伤害值增加标记个数点伤害.',
            fhlt_zhurongling: '祝融令',
            fhlt_zhurongling_info: '游戏开始时,牌堆里增加一张【南蛮入侵】.',
            fhlt_nmt2: '南蛮',
            fhlt_nmt2_info: '击败敌人后牌堆里有50%概率增加一张【南蛮入侵】.',
            fhlt_nmt4: '南蛮',
            fhlt_nmt4_info: '锁定技,当一张南蛮入侵造成的伤害超过四点,你本局游戏造成的伤害永久+1.',
            fhlt_nmt6: '南蛮',
            fhlt_nmt6_info: '锁定技,当有角色使用南蛮入侵时,你选择其中一个目标并对其造成其当前体力值的伤害.',
            fhlt_canbao: '残暴',
            fhlt_cbt2: '残暴',
            fhlt_cbt2_info: '其他角色的准备阶段,你可以弃置四张不同花色的牌,让其本回合失去所有技能.',
            fhlt_cbt4: '残暴',
            fhlt_cbt4_info: '出牌阶段限一次,你可以弃置三张相同花色的牌,让一名其他角色本回合失去所有技能.',
            fhlt_cbt6: '残暴',
            fhlt_cbt6_info: '限定技,准备阶段,选择一名其他角色,该角色失去所有技能.',
            fhlt_hejindetudao: '屠刀',
            fhlt_hejindetudao_info: '击败敌人后随机获得一至三张牌.',
            fhlt_bintiedakandao: '虎痴',
            fhlt_bintiedakandao_info: '限定技,当有其他角色从牌堆底摸牌时,你可以对其造成其当前体力值的伤害.',
            fhlt_jiaoweiqin: '焦尾',
            fhlt_jiaoweiqin_info: '锁定技,当你使用♠️️牌指定其他角色为目标时,你有50%概率获得其中随机一个目标一张随机手牌.',
            fhlt_shenzhouyudeqin: '神周瑜的琴',
            fhlt_shenzhouyudeqin_info: '锁定技,当你造成火焰伤害后,所有敌方角色各有50%概率失去1点体力.',
            fhlt_luxundehuoba: '火把',
            fhlt_luxundehuoba_info: '锁定技,你对所有已横置的角色造成的伤害+1.',
            fhlt_zhangludebudaofan: '道幡',
            fhlt_zhangludebudaofan_info: '锁定技,你使用【杀】造成伤害时,增加你阵容中武将个数的数值.',
            fhlt_zhangjiaodetianshu: '天书',
            fhlt_zhangjiaodetianshu_info: '锁定技,你造成的雷电伤害翻倍.',
            fhlt_lvshichunqiu: '春秋',
            fhlt_lvshichunqiu_info: '锁定技,你使用锦囊牌造成的伤害+1.',
            fhlt_fuchen: '拂尘',
            fhlt_fuchen_info: '锁定技,你使用的🃏牌造成的伤害+X(X为你已损失的体力).',
            fhlt_fengmingguan: '凌人',
            fhlt_zhanxiang: '战象',
            fhlt_zhanxiang_info: '出牌阶段每种花色限一次,你可以将两张相同花色的手牌当做【南蛮入侵】使用.',
            fhlt_lu: '鹿',
            fhlt_lu_info: '锁定技,当你手牌数小于体力值时,受到的伤害-1.',
            fhlt_canshuiyuan: '参水',
            fhlt_canshuiyuan_info: '锁定技,当你受到【杀】造成的伤害后,回复1点体力.',
            fhlt_caochuan: '草船',
            fhlt_caochuan_info: '你的【草船借箭】可以在出牌阶段当作【万箭齐发】使用.',
            fhlt_hudieyi: '强锁',
            fhlt_hudieyi_info: '出牌阶段限一次,你可弃置任意张手牌,横置等量名角色.',
            fhlt_adoudeqiangbao: '襁褓',
            fhlt_adoudeqiangbao_info: '每回合限一次,其他角色对你使用牌时,你可以选择:摸一张牌,此牌对你无效或弃置使用者至多两张牌.',
            liezhuan_qiangbao: '襁褓',
            liezhuan_qiangbao_info: '每回合限一次,其他角色对你使用牌时,你可以选择:摸一张牌,此牌对你无效或弃置使用者至多两张牌.',
            fhlt_mengdexinshu: '能臣',
            fenghuo_nengchen: '能臣',
            fenghuo_nengchen_info: '出牌阶段限一次,当你使用的牌造成伤害后,你可以在此牌结算完成后将这张牌重新拿回手牌,并且摸一张牌.',
            fenghuo_yaoming: '邀名',
            fenghuo_yaoming_info: '每回合每个选项限一次,当你造成或受到伤害后,你可以选择一项:1. 弃置手牌数大于你的一名角色的一张手牌;2. 令手牌数小于你的一名角色摸一张牌;3.令手牌数等于你的角色弃置至多两张牌,摸等量的牌.',
            fenghuo_canglang: '沧浪',
            fenghuo_canglang_info: '锁定技,以你为目标的【杀】有60%的概率无效.',
            fenghuo_youyong: '游勇',
            fenghuo_youyong_info: '锁定技,你使用牌无距离限制.',
            fenghuo_yexing: '野性',
            fenghuo_yexing_info: '当你对其他角色造成伤害后,目标额外流失一点体力.',
            fenghuo_xingchou: '兴仇',
            fenghuo_xingchou_info: '当己方角色进入濒死状态时,你获得一个<复仇>标记.你每次造成伤害时,令伤害值增加<复仇>标记个数的值.',
            fenghuo_fanghun: '芳魂',
            fenghuo_fanghun_info: '当你使用【杀】或成为【杀】的目标后,你获得1个<梅影>标记;你可以移去1个<梅影>标记来发动【龙胆】并摸一张牌.',
            fenghuo_fanghun_sha: '龙胆',
            fenghuo_huitu: '秽土',
            fenghuo_huitu_info: '锁定技,每个座位限一次,己方角色死亡后将其换将为【黄天尸魃】(黄天尸魃体力上限等于死亡角色的体力上限)重新登场.',
            fenghuo_luocao: '落草',
            fenghuo_luocao_info: '锁定技,当你成为【杀】的目标时,你进行一次判定,若判定结果的花色与该【杀】的花色一致,此【杀】对你无效.',
            fenghuo_pianchong: '偏宠',
            fenghuo_pianchong2: '偏宠',
            fenghuo_pianchong_info: '摸牌阶段开始时,你可放弃摸牌.若如此做,你从牌堆中获得一张红色牌和一张黑色牌.你选择一种颜色.你的下回合开始前,当你失去该颜色的一张牌后,你从牌堆中获得另一种颜色的一张牌.',
            shanhe_jijiu: '急救',
            shanhe_jijiu_info: '你的回合外,你可以将一张红色牌当做【桃】使用.',
            fenghuo_zunhou: '尊后',
            fenghuo_zunhou_info: '准备阶段,你可以选择一名其他角色,将你的体力值回复至与该角色相同,随机使用牌堆中的装备牌至与该角色相同,将你的手牌数补至与该角色相同(至多摸五张).',
            fenghuo_chenshui: '沉睡',
            fenghuo_chenshui_info: '锁定技,准备阶段,若场上有其他己方角色存活,则你跳过你的出牌阶段并令其获得一个额外的回合.',
            fenghuo_suxing: '苏醒',
            fenghuo_suxing_info: '觉醒技,当其他己方角色死亡后,若你拥有技能<沉睡>,则你失去技能<沉睡>.立即开始你的回合并从牌堆摸当前轮数张牌,且你每次造成伤害时令伤害值增加当前轮数的值.',
            fenghuo_cimu: '慈母',
            fenghuo_cimu_info: '出牌阶段限一次,你可弃一张牌并指定一名其他角色,选择一项:1.令其摸X张牌;2.令其对另一名其他角色造成X点伤害.(X为你弃置的牌的点数)',
            fenghuo_jiyuan: '急援',
            fenghuo_jiyuan_info: '当有角色进入濒死状态时,或你将牌交给一名其他角色后,你可以令该角色摸一张牌.',
            fenghuo_yunjv: '云飓',
            fenghuo_yunjv_info: '锁定技,敌方角色的回合结束时,该角色随机弃置一张手牌.',
            fenghuo_shuwei: '戍卫',
            fenghuo_shuwei_info: '当你成为【杀】的目标后,你可以摸一张牌,若如此做,你弃一张牌.',
            liezhuan_jishi: '犄势',
            liezhuan_jishi_info: '锁定技,你的回合外,若你与当前回合角色攻击范围内的角色数相等,你防止其造成的伤害并摸两张牌.',
            liezhuan_sishou: '思首',
            liezhuan_sishou_info: '限定技,出牌阶段,你可以令所有拥有【戍卫】技能的角色失去【戍卫】,获得【举汉】.',
            liezhuan_yigang: '溢刚',
            liezhuan_yigang_info: '锁定技,当你成为【杀】的目标后,若你已发动过【思首】,你失去1点体力.',
            liezhuan_wucai: '五才',
            liezhuan_wucai_info: '你可以将一张锦囊牌当【杀】使用或打出.',
            fenghuo_sheyan: '舍宴',
            fenghuo_sheyan_info: '当你成为普通锦囊牌的目标时(【借刀杀人】等带有指向目标的锦囊除外),你可以为此牌增加一个目标或令其对其中一个目标无效.(有效目标数至少为一)',
            fenghuo_shuimeng: '说盟',
            fenghuo_shuimeng_info: '出牌阶段结束时,你可以与一名角色拼点,若你赢,视为你使用【无中生有】;若你没赢,视为其对你使用【过河拆桥】.',
            shanhe_qingnang: '青囊',
            shanhe_qingnang_info: '出牌阶段限一次,你可以弃置一张手牌并令一名角色回复1点体力.',
            fenghuo_qingnang: '青囊',
            fenghuo_qingnang_info: '出牌阶段,你可以弃置一张手牌,令一名本回合内未成为过〖青囊〗的目标的角色回复1点体力.若你弃置的是黑色牌,则你本回合内不能再发动〖青囊〗.',
            fenghuo_shouchong: '首冲',
            fenghuo_shouchong_info: '锁定技,一名有"暴"标记的己方角色于其出牌阶段内造成伤害时,若其出牌阶段之前未造成过伤害,你令伤害值+1.',
            fenghuo_shehun: '摄魂',
            fenghuo_shehun_info: '当一名有"暴"标记的角色造成伤害时,你可以获得一名其他角色的一张手牌.',
            fenghuo_bahu: '跋扈',
            fenghuo_bahu_info: '摸牌阶段开始前,若此阶段未被跳过,你可以跳过此阶段.若如此做,你令所有其他己方角色各摸三张牌,所有其他己方角色各弃置一张牌.',
            fenghuo_yihui: '猗惠',
            fenghuo_yihui_info: '当你成为【杀】的目标后,你可以摸一张牌.',
            fenghuo_juhan: '举汉',
            fenghuo_juhan_info: '当你成为【杀】的目标后,你可以摸两张牌.',
            liezhuan_jingjue: '警觉',
            liezhuan_jingjue_info: '锁定技,当你的武将牌翻面后,视为对随机一名敌方角色使用一张【杀】.',
            fenghuo_lianshe: '连射',
            fenghuo_lianshe_info: '锁定技,出牌阶段开始前,若此阶段未被跳过,你跳过此阶段,对一名随机敌方角色造成1点伤害.',
            liezhuan_zizhu: '资助',
            liezhuan_zizhu_info: '锁定技,摸牌阶段开始前,若此阶段未被跳过,你跳过此阶段,令随机1~2名己方角色各摸一张牌.',
            liezhuan_yuyan: '玉颜',
            liezhuan_yuyan_info: '锁定技,出牌阶段开始前,若此阶段未被跳过,你跳过此阶段,所有己方角色各摸一张牌.',
            liezhuan_xiangu: '险固',
            liezhuan_xiangu_info: '锁定技,出牌阶段开始前,若此阶段未被跳过,你跳过此阶段,弃置随机一名敌方角色的一张牌或对一名随机敌方角色造成1点伤害.',
            liezhuan_tianfa: '天罚',
            liezhuan_tianfa_info: '锁定技,出牌阶段开始前,若此阶段未被跳过,你跳过此阶段,弃置一名随机敌方角色的一张牌,若其体力值为敌方角色最大的,则对其造成1点雷电伤害.',
            liezhuan_paoji: '炮击',
            liezhuan_paoji_info: '锁定技,出牌阶段开始前,若此阶段未被跳过,你跳过此阶段,随机弃置至多2名敌方角色的各随机一张装备牌.',
            liezhuan_zuijiu: '醉酒',
            liezhuan_zuijiu_info: '锁定技,你始终处于酒的作用下.',
            fenghuo_yuanmen: '袁门',
            fenghuo_yuanmen_info: '当你成为锦囊牌的目标后,若你不是此牌的唯一目标,你可以令使用者摸一张牌,此牌对你无效.',
            fenghuo_qiuping: '求评',
            fenghuo_qiuping_info: '每个其他角色的回合限一次,当你成为其他角色使用牌的目标后,你可以从牌堆里随机获得一张同类型的牌.',
            liezhuan_wendou: '文斗',
            liezhuan_wendou_info: '锁定技,防止你造成的伤害,改为伤害来源摸等同于伤害量的牌.',
            liezhuan_zhijing: '治经',
            liezhuan_zhijing_info: '锁定技,跳过你的出牌阶段,随机使用牌堆底10张牌中的锦囊牌,洗牌.',
            liezhuan_tongdou: '童斗',
            liezhuan_tongdou_info: '锁定技,防止你对拥有"童斗"的其他角色造成的伤害,改为令其摸等同于伤害量的牌.',
            liezhuan_tongzhi: '童稚',
            liezhuan_tongzhi_info: '锁定技,若你手牌数大于你的体力值,点数为奇数的牌对你无效;若你手牌数小于你的体力值,点数为偶数的牌对你无效.',
            fenghuo_tianyou: '天佑',
            fenghuo_tianyou_info: '当你成为其他角色使用牌的目标时,你可进行一次判定,若判定结果的类型与该牌的类型不同,此牌对你无效.',
            fenghuo_shichou: '誓仇',
            fenghuo_shichou_info: '当你使用【杀】时,你可以令至多X名角色也成为此【杀】的目标.此牌结算结束后,若你未因【杀】造成过伤害,则你获得此【杀】(X为你已损失的体力值).',
            fenghuo_shichoua: '誓仇',
            fenghuo_shichoua_info: '当你使用【杀】时,你可以令至多X名角色也成为此【杀】的目标.此牌结算结束后,若你未因【杀】造成过伤害,则你获得此【杀】(X为你已损失的体力值).',
            fenghuo_nanman: '南蛮',
            fenghuo_nanman_info: '锁定技,当一张【南蛮入侵】造成的伤害超过4点时,你本局游戏造成的伤害永久+1.',
            fenghuo_fuzhe: '覆辙',
            fenghuo_fuzhe_info: '锁定技,当你受到卡牌造成的伤害后,弃置伤害来源手中所有的同名牌.',
            fenghuo_jiaoxie: '缴械',
            fenghuo_jiaoxie_info: '锁定技,当你受到伤害后,获得伤害来源装备区内的所有牌.',
            fenghuo_yuyong: '愈勇',
            fenghuo_yuyong_info: '锁定技,你的出牌阶段内,每次造成伤害后,下一次造成的伤害+1.',
            fenghuo_chongfeng: '冲锋',
            fenghuo_chongfeng_info: '准备阶段,你可以视为使用一张无距离限制的【杀】.',
            fenghuo_suzhan: '速战',
            fenghuo_suzhan_info: '锁定技,手牌数小于你的角色无法响应你使用的牌.',
            fenghuo_yinhu: '荫护',
            fenghuo_yinhu_info: '锁定技,当你受到伤害时,若伤害来源的手牌数多于你,免疫此伤害.',
            fhlt_zhangfeidebianzi: '鞭击',
            fenghuo_bianji: '鞭击',
            fenghuo_bianji_info: '锁定技,你对手牌数小于你的角色造成的伤害+1.',
            fenghuo_shanbi: '闪避',
            fenghuo_shanbi_info: '锁定技,当你受到伤害时,若伤害来源的手牌数小于你,防止此伤害并失去1点体力.',
            fenghuo_mazhan: '马战',
            fenghuo_mazhan_info: '锁定技,当你受到伤害时,若伤害来源没有装备坐骑牌,防止此伤害并失去1点体力.',
            fenghuo_yinmi: '隐秘',
            fenghuo_yinmi_info: '锁定技,当你受到伤害时,若为非传导伤害,防止此伤害并失去1点体力.',
            fenghuo_yuanbi: '远避',
            fenghuo_yuanbi_info: '锁定技,当你受到伤害时,若伤害来源攻击范围小于4,防止此伤害并失去1点体力.',
            fenghuo_zhengtuo: '挣脱',
            fenghuo_zhengtuo_info: '锁定技,当你受到伤害时,若你未被横置,防止此伤害并失去1点体力.',
            shanhe_kuangfu: '狂斧',
            shanhe_kuangfu_info: '当你使用【杀】造成伤害时,你可以选择一项:弃置其装备区内的一张牌,或将其装备区内的一张牌移动到你的装备区内.',
            liezhuan_elai: '恶来',
            liezhuan_elai_info: '锁定技,每当你失去1点体力后,你摸三张牌.若此时是你的出牌阶段,则直到回合结束,你使用黑色【杀】不计入次数限制且造成的伤害+1.',
            fenghuo_zhixi: '直袭',
            fenghuo_zhixi_info: '当你于回合外获得牌时,若为基本牌,可以令当前回合角色弃置两张手牌;若为装备牌,可以对当前回合角色造成1点伤害.',
            liezhuan_jikai: '激忾',
            liezhuan_jikai_info: '当一名角色成为伤害类锦囊的目标后,若你至该角色的距离为1,你可以摸一张牌.若如此做,你交给其一张牌并展示之.若为装备牌,该角色可以使用此牌.',
            Shanglin_caochong: '草丛',
            Shanglin_caochong_info: '锁定技,当你受到火焰伤害后,失去所有体力.',
            shanglin_pukong: '扑空',
            shanglin_pukong_info: '锁定技,跳过你的出牌阶段.当你使用或打出【闪】时,当前回合角色随机弃置两张牌并受到1点伤害.',
            nianxi_hesui: '贺岁',
            nianxi_hesui_info: '锁定技,跳过你的回合.当你受到【杀】和普通锦囊牌的伤害后,将随机一张与造成伤害的牌点数相同的手牌交给伤害来源.',
            nianxi_jinhu: '金虎',
            nianxi_jinhu_info: '出牌阶段限两次,你可以将一张手牌当作【杀】使用或打出,且此【杀】不计入使用次数. ',
            nianxi_jinniu: '金牛',
            nianxi_jinniu_info: '锁定技,结束阶段开始时,回复1点体力,摸两张牌.',
            fenghuo_manjin: '蛮劲',
            fenghuo_manjin_info: '每回合限一次,当你使用【杀】或伤害类锦囊造成伤害后,你可以将手牌摸至与当前体力值相同.',
            nianxi_manjin: '蛮劲',
            nianxi_manjin_info: '每回合限一次,当你使用【杀】或伤害类锦囊造成伤害后,你可以将手牌摸至与当前体力值相同.',
            fenghuo_duliang: '督粮',
            fenghuo_duliang2: '督粮',
            fenghuo_duliang_info: '出牌阶段限一次,你可以获得一名其他角色的一张手牌,选择一项:1.令其观看牌堆顶的两张牌,获得其中的基本牌;2.令其于下个摸牌阶段额外摸一张牌.',
            shanhe_duliang: '督粮',
            shanhe_duliang2: '督粮',
            shanhe_duliang_info: '出牌阶段限一次,你可以获得一名其他角色的一张手牌,选择一项:1.令其观看牌堆顶的两张牌,获得其中的基本牌;2.令其于下个摸牌阶段额外摸一张牌.',
            wenhe_xinglang: '兴浪',
            wenhe_xinglang_info: '出牌阶段限一次,当你使用的仅指定一个目标的牌结算完成后,你可以对一名随机敌方角色造成1点伤害.',
            fenghuo_shenxing: '慎行',
            fenghuo_shenxing_info: '出牌阶段,你可以弃置X张牌(X为你本阶段内发动过〖慎行〗的次数且至少为0,至多为2),摸一张牌.',
            fenghuo_fenyue: '奋钺',
            fenghuo_fenyue2: '奋钺',
            fenghuo_fenyue2_bg: '钺',
            fenghuo_fenyue_info: '出牌阶段限一次,你可以与一名角色拼点,若你赢,其不能使用或打出手牌直到回合结束.若你没赢,其视为对你使用一张【杀】.',
            fenghuo_shesheng: '舍身',
            fenghuo_shesheng_info: '锁定技,当己方角色受到【杀】的伤害时,你防止此伤害.若如此做,你失去1点体力,若如此做,你摸两张牌.',
            fenghuo_chuhe: '锄禾',
            fenghuo_chuhe_info: '出牌阶段开始时,若你装备了武器牌,你可以弃一张手牌,若如此做,回合结束时,你摸三张牌.',
            fenghuo_zhanyong: '战勇',
            fenghuo_zhanyong_info: '锁定技,出牌阶段,你每使用一张【杀】,战勇状态+1;当你使用【杀】造成伤害时,伤害增加战勇状态的值,直到你的下回合开始.',
            fenghuo_jiedao: '借刀',
            fenghuo_jiedao_info: '当你使用【杀】对目标角色造成伤害时,若其手中有武器牌,你可令此【杀】的基础伤害等于其手中武器牌的攻击范围.',
            fhlt_rat2: '仁爱',
            fhlt_rat2_info: '锁定技,你使用【桃】时,回复值+1～3.',
            fhlt_rat4: '仁爱',
            fhlt_rat4_info: '锁定技,其他角色每次获得你的手牌后,你本局游戏造成的伤害+1.',
            fenghuo_renai: '仁爱',
            fenghuo_renai_info: '锁定技,其他角色每次获得你的手牌后,你本局游戏造成的伤害+1.',
            fenghuo_weili: '畏力',
            fenghuo_weili_info: '锁定技,当你受到伤害时,若伤害值大于1,你令伤害值+1.',
            fenghuo_tiaoxin: '挑衅',
            fenghuo_tiaoxin_info: '出牌阶段限一次,你可以指定一名攻击范围内包含你的角色,该角色需对你使用一张【杀】,否则你弃置其一张牌.',
            fenghuo_shoupeng: '受烹',
            fenghuo_shoupeng_info: '锁定技,非属性伤害对你无效,你受到的火焰伤害+1.',
            fenghuo_shouzhi: '首志',
            fenghuo_shouzhi_info: '①锁定技,当你使用红色【杀】造成伤害时,你令伤害值+1.②锁定技,当你受到红色【杀】造成的伤害时,你令伤害值+1.',
            shanhe_huisheng: '贿生',
            shanhe_huisheng_info: '当你受到其他角色对你造成的伤害时,你可以令其观看你任意数量的牌并令其选择一项:1.获得这些牌中的一张,防止此伤害,你不能再对其发动〖贿生〗;2.弃置等量的牌.',
            fenghuo_huoluan: '祸乱',
            fenghuo_huoluan_info: '锁定技,当一名有<暴>标记的角色造成伤害时,若伤害值大于1,你摸两张牌.',
            fenghuo_yelve: '野掠',
            fenghuo_yelve_info: '锁定技,回合结束时,若你于此回合内对其他角色造成过伤害,你对所有其他角色各造成1点雷电伤害.',
            fenghuo_mitian: '弥天',
            fenghuo_mitian_info: '锁定技,当你使用或打出【闪】时,将所有不处于连环状态的其他角色横置.',
            fenghuo_mouni: '谋逆',
            fenghuo_mouni_info: '准备阶段,你可对一名其他角色依次使用你手牌中所有的【杀】(若其进入了濒死状态,则终止此流程).若这些【杀】中有未造成伤害的【杀】,则你跳过本回合的出牌阶段和弃牌阶段.',
            fenghuo_qianjun: '千钧',
            fenghuo_qianjun_info: '锁定技,当你成为其他角色使用牌的目标时,若本回合你没有受到过伤害,该牌对你无效.',
            fenghuo_hunling: '魂灵',
            fenghuo_hunling_info: '锁定技,你每次于回合外失去手牌后,失去X点体力.(X为本次你失去手牌的数量)',
            fenghuo_anfan: '暗反',
            fenghuo_anfan_info: '锁定技,你的回合外,当你成为敌方角色使用牌的唯一目标后,你对其造成1点火焰伤害.(每回合限1次)',
            wenhe_anfan: '暗反',
            wenhe_anfan_info: '锁定技,你的回合外,当你成为敌方角色使用牌的唯一目标后,你对其造成1点火焰伤害.(每回合限1次)',
            hulaoguan_lveming: '掠命',
            hulaoguan_lveming_info: '出牌阶段限一次,你可以选择一名装备区装备比你少的角色,令其选择一个点数,你进行判定:<br>若点数相同,你对其造成2点伤害;<br>若点数不同,则你随机获得其区域内的一张牌.',
            hulaoguan_lveminga: '掠命',
            hulaoguan_lveminga_info: '出牌阶段限两次,你可以选择一名装备区装备比你少的角色,令其选择一个点数,你进行判定:<br>若点数相同,你对其造成2点伤害;<br>若点数不同,则你随机获得其区域内的一张牌.',
            wenhe_lveming: '掠命',
            wenhe_lveming_info: '出牌阶段限一次,你可以选择一名装备区装备比你少的角色,令其选择一个点数,你进行判定:<br>若点数相同,你对其造成2点伤害;<br>若点数不同,则你随机获得其区域内的一张牌.',
            wenhe_congjian: '从谏',
            wenhe_congjian_info: '当你成为锦囊牌的目标时,若此牌的目标数大于1,则你可以交给其中一名其他目标角色一张牌,摸一张牌,若你给出的是装备牌,改为摸两张牌',
            hejin_waixi: '外檄',
            hejin_waixi_info: '锁定技,你的回合内,当你造成伤害后,你摸四张牌,获得每名手牌数小于你的敌方角色各一张牌(每回合限三次).',
            Waiqi_waixi: '外檄',
            Waiqi_waixi_info: '锁定技,你的回合内,当你造成伤害后,你摸三张牌,获得每名手牌数小于你的敌方角色各一张牌(每回合限三次).',
            zhongye_longlin: '龙鳞',
            zhongye_longlin_info: '锁定技,当你受到伤害类锦囊造成的伤害时,防止该伤害.如果当前星象为东官,当你使用锦囊牌造成伤害时,令该伤害+1.',
            zhongye_longhui: '龙慧',
            zhongye_longhui_info: '锁定技,准备阶段,从牌堆或弃牌堆中随机获得三张锦囊牌,如果当前星象为东官,改为六张锦囊牌.',
            zhongye_huwei: '虎威',
            zhongye_huwei_info: '锁定技,准备阶段,从牌堆或弃牌堆中随机获得三张【杀】.如果当前星象为西官,则改为随机获得六张【杀】.',
            zhongye_tianxiao: '天啸',
            zhongye_tianxiao_info: '锁定技,你使用【杀】没有距离限制,你使用【杀】的次数+2且指定所有敌方角色为目标.如果当前为西官,则使用【杀】无次数限制.',
            zhongye_zhuyu: '朱羽',
            zhongye_zhuyu_info: '锁定技,准备阶段,从牌堆中获得四张不同花色的牌.',
            zhongye_shengqu: '圣躯',
            zhongye_shengqu_info: '锁定技,当你受到伤害后,你摸两张牌.如果己方数量大于1,防止你受到的大于1点的伤害.',
            zhongye_xuankai: '玄铠',
            zhongye_xuankai_info: '当你受到伤害后,你使用的下一张牌不能被响应.当你造成伤害后,你可以摸两张牌,如果当前星象为北官,则改为可以获得受伤角色两张牌.',
            zhongye_tianhuo: '天火',
            zhongye_tianhuo_info: '出牌阶段,你可以弃置一张牌,对至多两名敌方角色造成1点火焰伤害,每种花色的牌限一次.如果当前星象为南官,则每种花色的牌无限制次数.',
            zygx_qimen: '奇门',
            zygx_qimen_info: '出牌阶段限三次,选择一名角色,弃置一张当前观星任务指定花色点数类型的牌,将星象切换至下个星象,令该角色失去1点体力.若你在一回合内造成超过3点伤害,回合结束时随机从牌堆或弃牌堆中获得一张剩余观星任务指定的牌.完成所有观星任务后,所有敌方角色失去所有技能和手牌.',
            qunying_shenkai: '神铠',
            qunying_shenkai_info: '锁定技,你的手牌上限为12.当你受到伤害后,伤害来源弃置装备区里的所有牌(没有装备牌改为随机两张手牌),你摸两张牌并从弃牌堆获得一张【杀】.',
            fenghuo_bingying: '兵营',
            fenghuo_bingying_info: '锁定技,当你于出牌阶段内使用与你于此阶段内使用的上一张牌类别相同的牌后,你的出牌阶段直接结束.每当你于出牌阶段内使用与你于此阶段内使用的上一张牌类别不同的牌时,获得一个标记.回合结束时,你移除所有标记,对一名敌方角色造成标记个数点伤害.',
            fenghuo_sizhen: '死阵',
            fenghuo_sizhen_info: '锁定技,你的【杀】无视目标角色防具且伤害+1.',
            fenghuo_zhuangji: '壮骑',
            fenghuo_zhuangji_info: '锁定技,摸牌阶段,你额外摸Ⅹ张牌(X为场上装备区内坐骑牌张数).',
            wenhe_yinbing: '阴兵',
            wenhe_yinbing_info: '锁定技,你使用的【杀】造成伤害改为失去体力.其他角色失去体力后,你摸一张牌.',
            wenhe_fenluan: '纷乱',
            wenhe_fenluan_info: '锁定技,出牌阶段开始时,敌方每名角色依次选择一项:1.弃置一张【杀】;2.失去1点体力.若所有角色均选择了弃置【杀】,则你失去1点体力.',
            wenhe_moucun: '谋存',
            wenhe_moucun_info: '锁定技,当你成为敌方角色锦囊牌的目标后,失去5点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得20点韧性.',
            wenhe_langkai: '狼铠',
            wenhe_langkai_info: '锁定技,当你受到技能造成的伤害后,失去5点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得20点韧性.',
            wenhe_tanyu: '贪欲',
            wenhe_tanyu_info: '锁定技,当你于回合外被弃置或获得牌后,失去5点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得20点韧性.',
            wenhe_panshou: '叛首',
            wenhe_panshou_info: '锁定技,当其他己方角色受到伤害后,失去4点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得20点韧性.',
            wenhe_rongjia: '戎甲',
            wenhe_rongjia_info: '锁定技,当你于回合外失去装备区内的牌或敌方角色使用装备牌后,失去3点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得20点韧性.',
            wenhe_moucuna: '谋存',
            wenhe_moucuna_info: '锁定技,当你成为敌方角色锦囊牌的目标后,失去2点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得4点韧性.',
            wenhe_langkaia: '狼铠',
            wenhe_langkaia_info: '锁定技,当你受到技能造成的伤害后,失去2点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得4点韧性.',
            wenhe_tanyua: '贪欲',
            wenhe_tanyua_info: '锁定技,当你于回合外被弃置或获得牌后,失去2点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得4点韧性.',
            wenhe_panshoua: '叛首',
            wenhe_panshoua_info: '锁定技,当其他己方角色受到伤害后,失去2点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得4点韧性.',
            wenhe_rongjiaa: '戎甲',
            wenhe_rongjiaa_info: '锁定技,当你于回合外失去装备区内的牌或敌方角色使用装备牌后,失去1点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得4点韧性.',
            wenhe_moucunb: '谋存',
            wenhe_moucunb_info: '锁定技,当你成为敌方角色锦囊牌的目标后,失去3点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得8点韧性.',
            wenhe_langkaib: '狼铠',
            wenhe_langkaib_info: '锁定技,当你受到技能造成的伤害后,失去3点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得8点韧性.',
            wenhe_tanyub: '贪欲',
            wenhe_tanyub_info: '锁定技,当你于回合外被弃置或获得牌后,失去3点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得8点韧性.',
            wenhe_panshoub: '叛首',
            wenhe_panshoub_info: '锁定技,当其他己方角色受到伤害后,失去3点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得8点韧性.',
            wenhe_rongjiab: '戎甲',
            wenhe_rongjiab_info: '锁定技,当你于回合外失去装备区内的牌或敌方角色使用装备牌后,失去2点韧性.当你受到伤害后,失去等量韧性.韧性为0时破防:破防状态下受到的伤害翻倍,敌方角色使用4张牌后结束破防,并获得8点韧性.',
            wenhe_renxing: '韧性',
            wenhe_pofang: '破防',
            wenhe_nuqi: '怒气',
            wenhe_taoni: '讨逆',
            wenhe_taoni_info: '出牌阶段,若你怒气已满,你可以消耗所有怒气对一名敌方角色造成8点伤害.你对敌方角色造成伤害后(本技能造成的伤害不计入内),获得X点怒气,X为本次伤害值.你击败敌方角色后,获得16点怒气.(满怒:16)',
            wenhe_taonia: '讨逆',
            wenhe_taonia_info: '出牌阶段,若你怒气已满,你可以消耗所有怒气对一名敌方角色造成3点伤害.你对敌方角色造成伤害后(本技能造成的伤害不计入内),获得X点怒气,X为本次伤害值.你击败敌方角色后,获得6点怒气.(满怒:6)',
            wenhe_taonib: '讨逆',
            wenhe_taonib_info: '出牌阶段,若你怒气已满,你可以消耗所有怒气对一名敌方角色造成5点伤害.你对敌方角色造成伤害后(本技能造成的伤害不计入内),获得X点怒气,X为本次伤害值.你击败敌方角色后,获得10点怒气.(满怒:10)',
            wenhe_weimua: '帷幕',
            wenhe_weimua_info: '锁定技,你不能成为黑色锦囊牌的目标.',
            wenhe_weimu: '帷幕',
            wenhe_weimu_info: '锁定技,你不能成为黑色锦囊牌的目标.',
            wenhe_tianmu: '天幕',
            wenhe_tianmu_info: '锁定技,你不能成为黑色锦囊牌的目标.当你使用黑色【杀】指定目标后,或成为黑色【杀】的目标后,你摸一张牌.',
            wenhe_tianmua: '天幕',
            wenhe_tianmua_info: '锁定技,你不能成为黑色锦囊牌的目标.当你使用黑色【杀】指定目标后,或成为黑色【杀】的目标后,你摸一张牌.',
            wenhe_tianmub: '天幕',
            wenhe_tianmub_info: '锁定技,你不能成为黑色锦囊牌的目标.当你使用黑色【杀】指定目标后,或成为黑色【杀】的目标后,你摸一张牌.',
            wenhe_dangxian: '当先',
            wenhe_dangxian_info: '锁定技,回合开始时,你执行一个额外的出牌阶段.此阶段开始时,你失去1点体力并从牌堆/弃牌堆中获得一张【杀】.',
            wenhe_langxi: '狼袭',
            wenhe_langxi_info: '准备阶段,你可以对一名体力小于或等于你的其他角色造成1-3点随机伤害.',
            wenhe_langxia: '狼袭',
            wenhe_langxia_info: '准备阶段,你可以对一名体力小于或等于你的其他角色造成0-2点随机伤害.',
            wenhe_langxib: '狼袭',
            wenhe_langxib_info: '准备阶段,你可以对一名体力小于或等于你的其他角色造成1-2点随机伤害.',
            shanglin_langxi: '狼袭',
            shanglin_langxi_info: '准备阶段,你可以对一名体力小于或等于你的其他角色造成1-3点随机伤害.',
            shanglin_langxia: '狼袭',
            shanglin_langxia_info: '准备阶段,你可以对一名体力小于或等于你的其他角色造成0-2点随机伤害.',
            shanglin_langxib: '狼袭',
            shanglin_langxib_info: '准备阶段,你可以对一名体力小于或等于你的其他角色造成0-1点随机伤害.',
            wenhe_yisuan: '亦算',
            wenhe_yisuan_info: '出牌阶段限一次,当你使用的锦囊牌进入弃牌堆时,你可以减1点体力上限,从弃牌堆获得之.',
            hejin_quanba: '权霸',
            hejin_quanba_info: '锁定技,敌方角色的回合内,其使用【杀】指定目标后,若该角色已经使用了三张或更多的【杀】,其失去1点体力.',
            neihuan_huanshi: '宦势',
            neihuan_huanshi_info: '锁定技,当你成为延时锦囊牌的目标后,进行一次判定,若结果为黑色,将此牌置入弃牌堆.',
            zhangrang_huoluan: '祸乱',
            zhangrang_huoluan_info: '锁定技,出牌阶段开始时,你视为随机使用四张牌堆里有的黑色普通锦囊.',
            zhangrang_yankong: '炎恐',
            zhangrang_yankong_info: '锁定技,当你受到伤害后,你下一次对敌方角色造成的伤害+1(最多叠加四次).',
            zhangrang_yankonga: '炎恐',
            zhangrang_yankonga_info: '锁定技,当你受到伤害后,你下一次对敌方角色造成的伤害+1(最多叠加两次).',
            fenghuo_jiquan: '集权',
            fenghuo_jiquan_info: '锁定技,准备阶段,将你的手牌摸至八张.',
            zhangrang_jiquan: '集权',
            zhangrang_jiquan_info: '锁定技,准备阶段,将你的手牌摸至八张.',
            zhangrang_luanzheng: '乱政',
            zhangrang_luanzheng_info: '锁定技,敌方角色于其出牌阶段内获得手牌时,若其手牌数超过十张,则其本回合不能再使用牌;敌方角色的出牌阶段内,当你受到伤害后,若你本回合受到的伤害超过5点,则其本回合不能再使用牌.',
            zhongye_weiyue: '危月',
            zhongye_weiyue_info: '每回合限一次,当你在摸牌阶段外获得或失去手牌后,可以对一名敌方角色造成1点伤害.',
            zhongye_doumu: '斗木',
            zhongye_doumu_info: '每回合限一次,当你在摸牌阶段外获得或失去手牌后,可以选择一名敌方角色,随机弃置其一张牌,并视为对其使用一张【决斗】.',
            zhaozhong_duanzheng: '断政',
            zhaozhong_duanzheng_info: '锁定技,敌方角色在其回合内使用第一张牌时,弃置手牌中与此牌花色相同的所有牌.',
            zhaozhong_duanzhenga: '断政',
            zhaozhong_duanzhenga_info: '锁定技,敌方角色在其回合内使用第一张牌时,弃置手牌中与此牌花色相同的两张牌.',
            liezhuan_fuhua: '腐化',
            liezhuan_fuhua_info: '锁定技,敌方角色的回合内,其♣️️牌视为【毒】.',
            liezhuan_mingwang: '名望',
            liezhuan_mingwang_info: '锁定技,敌方角色于回合外失去最后手牌后,其变为己方角色.',
            shanhe_guixin: '归心',
            shanhe_guixin_info: '当你受到1点伤害后,你可以按照你选择的区域优先度随机获得每名其他角色区域里的一张牌,你翻面.',
            zhaozhong_lianhuo: '连祸',
            zhaozhong_lianhuo_info: '锁定技,你每回合前三次受到伤害后,随机一名敌方角色失去1点体力.',
            zhaozhong_lianhuoa: '连祸',
            zhaozhong_lianhuoa_info: '锁定技,你每回合第一次受到伤害后,随机一名敌方角色失去1点体力.',
            fenghuo_huangkong: '惶恐',
            fenghuo_huangkong_info: '锁定技,你的回合外,当你成为【杀】或伤害类锦囊的唯一目标后,若你没有手牌,你摸四张牌.',
            zhaozhong_huangkong: '惶恐',
            zhaozhong_huangkong_info: '锁定技,你的回合外,当你成为【杀】或伤害类锦囊的唯一目标后,若你没有手牌,你摸四张牌.',
            Neihuan_huangkong: '惶恐',
            Neihuan_huangkong_info: '锁定技,你的回合外,当你成为【杀】或伤害类锦囊的唯一目标后,若你手牌数为全场唯一最少,你摸四张牌.',
            zhaozhong_luanzheng: '乱政',
            zhaozhong_luanzheng_info: '锁定技,敌方角色于其出牌阶段内获得手牌时,若其手牌数超过十张,则其本回合不能再使用牌;敌方角色的出牌阶段内,当你受到伤害后,若你本回合受到的伤害超过5点,则其本回合不能再使用牌.',
            hetaihou_zunqin: '尊亲',
            hetaihou_zunqin_info: '锁定技,以你为目标的黑色锦囊牌生效后进入弃牌堆时,你获得之.(每回合限三次)',
            liezhuan_zunqin: '尊亲',
            liezhuan_zunqin_info: '锁定技,以你为目标的黑色锦囊牌生效后进入弃牌堆时,你获得之.(每回合限一次)',
            hetaihou_chuhuan: '除患',
            hetaihou_chuhuan_info: '锁定技,当你使用【杀】指定目标后,你与其各失去1点体力.',
            liezhuan_chuhuan: '除患',
            liezhuan_chuhuan_info: '锁定技,当你使用【杀】指定目标后,你与其各失去1点体力.',
            hetaihou_nongquan: '弄权',
            hetaihou_nongquan_info: '锁定技,当你受到伤害后,你对敌方体力值唯一最少的角色造成2点伤害并随机弃置其两张牌.',
            fenghuo_nongquan: '弄权',
            fenghuo_nongquan_info: '锁定技,当你受到伤害后,你对敌方体力值唯一最少的角色造成2点伤害并随机弃置其两张牌.',
            liezhuan_nongquan: '弄权',
            liezhuan_nongquan_info: '锁定技,当你受到伤害后,你对敌方体力值唯一最少的角色造成1点伤害.',
            shanhe_zhanjin: '蘸金',
            shanhe_zhanjin_info: '锁定技,若你有空置的武器栏,则你视为装备【贯石斧】.',
            shanhe_duodao: '夺刀',
            shanhe_duodao_info: '当你受到【杀】造成的伤害后,你可以弃置一张牌,获得伤害来源装备区里的武器牌.',
            liezhuan_duodao: '夺刀',
            liezhuan_duodao_info: '当你成为【杀】的目标后,你可以弃置一张牌.你获得此【杀】使用者装备区里的武器牌.',
            liezhuan_elong: '扼龙',
            liezhuan_elong_info: '锁定技,当你受到伤害后,令手牌数唯一最少的敌方角色失去1点体力.',
            hetaihou_shexie: '蛇蝎',
            hetaihou_shexie_info: '锁定技,敌方角色进入濒死状态时,你随机获得该角色两张手牌.',
            longzhou_nutao: '怒涛',
            longzhou_nutao_info: '锁定技,当你使用锦囊牌指定其他角色为目标时,随机对其中一名角色造成1点雷电伤害;你在出牌阶段每次造成雷电伤害后,本阶段出【杀】次数+1.',
            liezhuan_nutao: '怒涛',
            liezhuan_nutao_info: '锁定技,回合开始时,随机对一名敌方角色造成1点雷电伤害.',
            taoshen_nutao: '怒涛',
            taoshen_nutao_info: '锁定技,回合开始时,随机对一名敌方角色造成1点雷电伤害.',
            taoshen_yingzi: '英姿',
            taoshen_yingzi_info: '锁定技,摸牌阶段,你多摸一张牌;你的手牌上限等于X(X为你的体力上限).',
            taoshen_longdan: '龙胆',
            taoshen_longdan_info: '你可以将一张【杀】当【闪】、【闪】当【杀】使用或打出.',
            shanhe_yingyang: '鹰扬',
            shanhe_yingyang_info: '当你的拼点牌亮出后,你可以令此牌的点数+3或-3(至多为K,至少为1).',
            shanhe_longdan: '龙胆',
            shanhe_longdan_info: '你可以将一张【杀】当【闪】、【闪】当【杀】使用或打出.',
            shanhe_longdana: '龙胆',
            shanhe_longdana_info: '你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出.',
            shanhe_chongzhen: '冲阵',
            shanhe_chongzhen_info: '当你因发动〖龙胆〗而使用或打出【杀】或【闪】时,你可以获得对方的一张手牌.',
            nianshou_renxing: '任性',
            nianshou_renxing_info: '锁定技,你的回合外,一名角色受到1点伤害后或回复1点体力时,你摸一张牌.',
            taoshen_wushuang: '无双',
            taoshen_wushuang_info: '锁定技,当你使用【杀】指定一个目标后,该角色需依次使用两张【闪】才能抵消此【杀】;当你使用【决斗】指定一个目标后,或成为一名角色使用【决斗】的目标后,该角色每次响应此【决斗】需依次打出两张【杀】.',
            caoe_shoujiang: '守江',
            caoe_shoujiang_info: '锁定技,当你受到伤害时,若本次伤害值大于1,则你只受到1点伤害(防止多余的伤害),你摸一张牌.',
            caoe_luoshen: '洛神',
            caoe_luoshen_info: '准备阶段,你可以进行判定,当黑色判定牌生效后,你获得之.若结果为黑色,你可以重复此流程.',
            caoe_biyue: '闭月',
            caoe_biyue_info: '结束阶段,你可以摸一张牌.若你没有手牌,则改为摸两张牌.',
            shenshou_longshi: '龙视',
            shenshou_longshi_info: '锁定技,每回合限一次,当非神兽的其他角色成为基本牌的目标后,其摸一张牌.若为陆地,所有己方其他角色各摸一张牌.',
            shenshou_bibao: '必报',
            shenshou_bibao_info: '锁定技,回合开始时,你失去1点体力,视为对随机一名敌方角色使用一张【杀】.',
            shenshou_longao: '龙鳌',
            shenshou_longao_info: '锁定技,当己方其他角色受到属性伤害时,若环境:不为海洋,你令此伤害-1;为海洋,你令此伤害-2.',
            shenshou_quyan: '驱炎',
            shenshou_quyan_info: '锁定技,你造成的属性伤害+1.若环境为海洋,则你令己方其他角色造成的属性伤害+1.',
            shenshou_yuhuo: '鱼火',
            shenshou_yuhuo_info: '①你可以将一张♦️️手牌当火【杀】使用.②你可以将一张♠️️手牌当【铁索连环】使用.',
            shenshou_fubing: '负兵',
            shenshou_fubing_info: '锁定技,出牌阶段开始时,你令随机一名敌方角色的武将牌横置,令随机一名己方角色的武将牌重置.',
            shenshou_songyan: '讼言',
            shenshou_songyan_info: '锁定技,每回合限一次,当非神兽的其他角色成为普通锦囊牌的目标后, 其摸一张牌.若为陆地,所有己方其他角色各摸一张牌.',
            shenshou_suwei: '肃威',
            shenshou_suwei_info: '锁定技,当你成为敌方角色于其回合内使用的牌的目标后,你弃置其一张手牌.',
            fenghuo_longhou: '龙吼',
            fenghuo_longhou_info: '锁定技,回合结束时,你视为使用一张【万箭齐发】.',
            shenshou_longhou: '龙吼',
            shenshou_longhou_info: '锁定技,回合结束时,你视为使用一张【万箭齐发】.',
            shenshou_mingyin: '鸣音',
            shenshou_mingyin_info: '锁定技,你即将造成的伤害均视为体力流失.',
            shenshou_duyuan: '独远',
            shenshou_duyuan_info: '锁定技,己方角色不是你使用基本牌和锦囊牌的合法目标.你的出牌阶段内,你即将造成的所有伤害均+1.',
            fenghuo_duyuan: '独远',
            fenghuo_duyuan_info: '锁定技,己方角色不是你使用基本牌和锦囊牌的合法目标.你的出牌阶段内,你即将造成的所有伤害均+1.',
            shenshou_quejing: '怯鲸',
            shenshou_quejing_info: '锁定技,当一名角色使用牌指定超过一个目标后,若环境:不为海洋,你弃置一张牌,摸一张牌;为海洋,你弃置一张牌,对一名敌方角色造成1点伤害.',
            shenshou_longlie: '龙烈',
            shenshou_longlie_info: '锁定技,当你使用的【杀】指定目标后,若环境不为陆地,你令此【杀】不能被颜色相同的 【闪】响应,若环境为陆地,你令此【杀】不能被【闪】响应.',
            fenghuo_longzhen: '龙镇',
            fenghuo_longzhen_info: '锁定技,每回合限一次,当其他己方角色于其回合外获得牌时,你令其摸两张牌.',
            shenshou_longzhen: '龙镇',
            shenshou_longzhen_info: '锁定技,每回合限一次,当其他己方角色于其回合外获得牌时,你令其摸两张牌.',
            shenshou_ruiyan: '瑞烟',
            shenshou_ruiyan_info: '锁定技,结束阶段开始时,若环境:不为陆地,你摸一张牌.为陆地,你摸三张牌. ',
            shenshou_raoling: '绕棱',
            shenshou_raoling_info: '出牌阶段限两次,你可以将一张手牌交给一名其他己方角色.',
            shenshou_xiangjin: '香金',
            shenshou_xiangjin_info: '出牌阶段限一次,你可以令一名与你手牌数不同的其他角色将手牌摸或弃置至与你的手牌数相同.',
            shenshou_chaiyue: '豺月',
            shenshou_chaiyue_info: '锁定技,你使用的【杀】固定为敌方全体角色,你不能对己方角色使用【杀】.',
            shenshou_langri: '狼日',
            shenshou_langri_info: '锁定技,你使用【杀】无距离限制;若环境为陆地,你使用【杀】无视防具.',
            shenshou_longxuan: '龙玄',
            shenshou_longxuan_info: '锁定技,摸牌阶段,你令额定摸牌数-1,你的手牌上限-X,(X为<碑铭>的数目).其他角色的出牌阶段限一次,其可以将一张锦囊牌扣置于你的武将牌上,称为<碑铭>,其回复1点体力,你的体力上限+1.',
            shenshou_longxuan2: '龙玄',
            shenshou_lingxi: '灵屃',
            shenshou_lingxi_info: '锁定技,当你受到1点伤害后,若你的武将牌上有<碑铭>,你将一张<碑铭>置入弃牌堆,你的体力上限-1,令所有己方角色各摸一张牌;若环境为海洋,改为摸两张牌.',
            shenshou_shuliu: '疏流',
            shenshou_shuliu_info: '锁定技,当你使用的普通锦囊牌结算结束后,你将此牌当作<碑铭>,扣置于你的武将牌上,你的体力上限+1.',
            shenshou_jienu: '介怒',
            shenshou_jienu_info: '锁定技,出牌阶段开始时,如果你的<碑铭>大于等于7,你回复X点体力,对自己造成X点伤害(X=碑铭数).',
            shenshou_longzhi: '龙识',
            shenshou_longzhi_info: '锁定技,摸牌阶段,你多摸X张牌(X为<碑文>数).其他角色的阶段限一次,其可以将一张普通锦囊牌扣置于你的武将牌上,称为<碑文>,摸一张牌.',
            shenshou_longzhi2: '龙识',
            shenshou_lingjie: '灵碣',
            shenshou_lingjie_info: '出牌阶段,你可以将一张牌当<碑文>中的一张普通锦囊牌使用(每种锦囊牌每回合限一次).若环境为天空,你摸一张牌.',
            fenghuo_feizhang: '斐章',
            fenghuo_feizhang_info: '当你于出牌阶段使用普通锦囊牌选择目标后,若你于此阶段未发动过此技能,你可以令一名其他角色也成为此牌的目标.',
            fenghuo_zhiyan: '直言',
            fenghuo_zhiyan_info: '结束阶段开始时,你可令一名角色摸一张牌(正面朝上移动).若此牌为基本牌,则你摸一张牌.若此牌为装备牌,则其回复1点体力并使用此装备牌.',
            shenshou_feizhang: '斐章',
            shenshou_feizhang_info: '当你于出牌阶段使用普通锦囊牌选择目标后,若你于此阶段未发动过此技能,你可以令一名其他角色也成为此牌的目标.',
            shenshou_bowen: '博文',
            shenshou_bowen_info: '摸牌阶段开始时,你可以移去一张<碑文>令你的手牌上限+1.',
            shenshou_bowen2: '博文',
            shenshou_zhijiao: '置角',
            shenshou_zhijiao_info: '出牌阶段,你可将一张坐骑牌置入一名己方角色的装备区,你与其随机获得一张红色牌.',
            shenshou_zhixie: '止邪',
            shenshou_zhixie_info: '其他角色的回合结束时,若其于此回合内未造成过伤害,你可以获得场上的一张装备牌.',
            shenshou_haoxian: '好险',
            shenshou_haoxian_info: '锁定技,结束阶段,若所有敌方角色装备区里的牌数和不小于4,你令所有敌方角色各将装备区里的所有牌置入弃牌堆,你摸等量的牌.',
            shenshou_hualao: '画牢',
            shenshou_hualao_info: '锁定技,若已方其他角色的体力值和不大于3,这些角色不能成为敌方角色使用牌的目标.',
            fenghuo_hualao: '画牢',
            fenghuo_hualao_info: '锁定技,若已方其他角色的体力值和不大于3,这些角色不能成为敌方角色使用牌的目标.',
            shenshou_longxian: '龙弦',
            shenshou_longxian_info: '①每回合限一次,你可以将一张♦️️牌当【乐不思蜀】使用.②每回合限一次,若环境为天空,你可以将一张♣️️牌当【兵粮寸断】使用(无距离限制).',
            shenshou_lige: '离歌',
            shenshou_lige_info: '当一名角色的判定牌生效前,你可以打出一张牌替换之.',
            shenshou_heming: '和鸣',
            shenshou_heming_info: '锁定技,当其他角色的跳过一个阶段,你令一名己方其他角色摸一张牌.',
            shenshou_jilv: '集律',
            shenshou_jilv_info: '锁定技,己方其他角色的判定牌生效后,你获得之.',
            '1_info': '出牌阶段,你可以展示一张未强化过的【诸葛连弩】或标准包/军争包/SP包中的防具牌,对其进行强化.当你处于濒死状态时,你可以重铸一张防具牌,将体力回复至1点.',
            shenshou_longlin: '龙鳞',
            shenshou_longlin_info: '出牌阶段限一次,你可展示手牌中的一张防具牌,令所有己方角色回复1点体力,若环境为天空,则令所有未装备防具的己方角色随机将一张防具牌置入装备区.',
            fenghuo_tuiyan: '推演',
            fenghuo_tuiyan_info: '出牌阶段开始时,你可以观看牌堆顶的三张牌.',
            fenghuo_xiongzi: '雄姿',
            fenghuo_xiongzi_info: '锁定技,摸牌阶段,你多摸一张牌,如果手牌数小于等于两张,则改为多摸三张牌.',
            qunying_xiongzi: '雄姿',
            qunying_xiongzi_info: '锁定技,摸牌阶段,你多摸一张牌,如果手牌数小于等于两张,则改为多摸三张牌.',
            fenghuo_shenhuo: '神火',
            fenghuo_shenhuo_info: '锁定技,你即将造成的伤害视为火焰伤害.当你造成火焰伤害时,摸1张牌,如果受伤角色红色手牌数大于黑色手牌数,则该伤害+1且受伤角色随机弃置一张红色手牌.',
            qunying_shenhuo: '神火',
            qunying_shenhuo_info: '锁定技,你即将造成的伤害视为火焰伤害.当你造成火焰伤害时,摸1张牌,如果受伤角色红色手牌数大于黑色手牌数,则该伤害+1且受伤角色随机弃置一张红色手牌.',
            fenghuo_danshou: '胆守',
            fenghuo_danshou_info: '①每回合限一次,当你成为基本牌或锦囊牌的目标后,你可以摸X张牌(X为你本回合内成为过基本牌或锦囊牌的目标的次数).②一名其他角色的结束阶段,若你本回合内没有发动过〖胆守①〗,则你可以弃置X张牌并对其造成1点伤害(X为其手牌数,无牌则不弃).',
            fenghuo_qinyin: '琴音',
            fenghuo_qinyin_info: '弃牌阶段结束时,若你于此阶段内弃置过两张或更多的牌,则你可以选择一项:1. 令所有角色各回复1点体力;2. 令所有角色各失去1点体力.',
            qunying_qinyin: '琴音',
            qunying_qinyin_info: '锁定技,当你受到一名角色【杀】的伤害后,如果该角色红色手牌数小于黑色手牌数,其失去1点体力;如果该角色红色手牌数大于黑色手牌数,你回复1点体力.',
            qunying_yehuo: '业火',
            qunying_yehuo_info: '锁定技,结束阶段,你对所有敌方角色造成1~2点火焰伤害.',
            liezhuan_yehuo: '业火',
            liezhuan_yehuo_info: '锁定技,结束阶段,你对所有敌方角色造成1点火焰伤害.',
            liezhuan_tianyang: '天阳',
            liezhuan_tianyang_info: '锁定技,其他角色使用牌结算后,若其为手牌数最多的角色,进行一次判定,若为♥️️2~9,受到3点火焰伤害.',
            liezhuan_yanyu: '焰羽',
            liezhuan_yanyu_info: '锁定技,你受到其他角色大于1点的伤害减至1点,对伤害来源造成等同于减少量的火焰伤害.',
            liezhuan_shiliang: '噬粮',
            liezhuan_shiliang_info: '锁定技,每次有其他敌方角色从牌堆获得牌后,你有70%概率弃置其两张牌.',
            liezhuan_shilianga: '噬粮',
            liezhuan_shilianga_info: '锁定技,每次有其他敌方角色从牌堆获得牌后,你有50%概率弃置其一张牌.',
            liezhuan_qunju: '群居',
            liezhuan_qunju_info: '锁定技,当你成为【杀】或锦囊牌的目标后,若你是此牌的唯一目标,你摸一张牌,此牌对你无效.',
            liezhuan_suli: '肃立',
            liezhuan_suli_info: '锁定技,跳过你的回合.防止手牌数不为x的角色对你造成的伤害(x为你与其的距离).',
            liezhuan_zaofen: '造氛',
            liezhuan_zaofen_info: '锁定技,跳过你的回合.',
            liezhuan_jingjie: '警戒',
            liezhuan_jingjie_info: '锁定技,若你未受伤,跳过你的回合.',
            liezhuan_fengbao: '风暴',
            liezhuan_fengbao_info: '锁定技,游戏开始时,你获得一个风暴标记.每个回合开始时,将风暴标记随机移给一名角色.每个回合结束时,其他角色将手牌数调整为X(X为其与拥有风暴标记角色的距离).',
            liezhuan_saowei: '扫尾',
            liezhuan_saowei_info: '锁定技,当你受到伤害后,将手牌数调整至与体力值相同,对所有敌方角色造成X点伤害(X为以此法摸或弃的牌数).',
            liezhuan_yangxi: '佯息',
            liezhuan_yangxi_info: '锁定技,敌方角色使用一张牌时,若你没有该花色的手牌,你获得之,若有,你弃置这些手牌.',
            hulaoguan_boss_wushuang: '无双',
            hulaoguan_boss_wushuang_info: '锁定技,你使用的【杀】需两张【闪】才能抵消;与你进行【决斗】的角色每次需打出两张【杀】.',
            hulaoguan_boss_jingjia: '精甲',
            hulaoguan_boss_jingjia_info: '锁定技,游戏开始时,将本局游戏中加入的装备置入你的装备区.',
            hulaoguan_boss_aozhan: '鏖战',
            hulaoguan_boss_aozhan_info: '锁定技,若你装备区内有:武器牌,你可以多使用一张【杀】;防具牌,防止你受到的超过1点的伤害;坐骑牌,摸牌阶段多摸一张牌;宝物牌,跳过你的判定阶段.',
            hulaoguan_boss_bianshen: '变身',
            hulaoguan_boss_bianshen_info: '锁定技,当你体力值降到4点或更少时,你弃置判定区里的所有牌并重置武将牌,选择变身为<暴怒的战神>或<神鬼无前>,终止当前回合,立即开始你的回合.',
            hulaoguan_boss_xiuluo: '修罗',
            hulaoguan_boss_xiuluo_info: '准备阶段,若你的判定区内有牌,则你可以弃置一张牌,弃置判定区内一张与该牌花色相同的牌.你可以重复此流程.',
            hulaoguan_boss_shenwei: '神威',
            hulaoguan_boss_shenwei_info: '锁定技,摸牌阶段,你多摸X张牌,你的手牌上限+X(X为敌方存活角色数).',
            hulaoguan_boss_shenji: '神戟',
            hulaoguan_boss_shenji_info: '你使用【杀】可以多选择两名角色为目标;你可以多使用一张【杀】.',
            hulaoguan_boss_shenqu: '神躯',
            hulaoguan_boss_shenqu_info: '每名角色的准备阶段,若你的手牌数不大于体力上限,你可以摸两张牌.当你受到伤害后,你可以使用一张【桃】.',
            shanhe_shenqu: '神躯',
            shanhe_shenqu_info: '每名角色的准备阶段,若你的手牌数不大于体力上限,你可以摸两张牌.当你受到伤害后,你可以使用一张【桃】.',
            hulaoguan_boss_jiwu: '极武',
            hulaoguan_boss_jiwu_info: '出牌阶段,你可以弃置一张牌,直到本回合结束,你获得以下其中一个技能:<强袭>、<铁骑(界限突破)>、<旋风>、<完杀>.',
            hulaoguan_boss_qiangxi: '强袭',
            hulaoguan_boss_qiangxi_info: '出牌阶段限一次,你可以失去1点体力或弃置一张武器牌,并对你攻击范围内的一名其他角色造成1点伤害.',
            hulaoguan_boss_wansha: '完杀',
            hulaoguan_boss_wansha_info: '锁定技,你的回合内,不处于濒死状态的其他角色不能使用【桃】.',
            hulaoguan_boss_xuanfeng: '旋风',
            hulaoguan_boss_xuanfeng_info: '当你于弃牌阶段弃置过至少两张牌,或当你失去装备区里的牌后,你可以弃置至多两名其他角色的共计两张牌.',
            hulaoguan_boss_tieji: '铁骑',
            hulaoguan_boss_tieji_info: '当你使用【杀】指定一个目标后,你可令其本回合内非锁定技失效,你进行判定,除非该角色弃置与结果花色相同的一张牌,否则不能使用【闪】响应此【杀】.',
            shanhe_tieji: '铁骑',
            shanhe_tieji_info: '当你使用【杀】指定一个目标后,你可令其本回合内非锁定技失效,你进行判定,除非该角色弃置与结果花色相同的一张牌,否则不能使用【闪】响应此【杀】.',
            hulaoguan_boss_shufazijinguan_skill: '束发紫金冠',
            hulaoguan_boss_shufazijinguan_skill_info: '准备阶段,你可以对一名其他角色造成1点伤害.',
            hulaoguan_boss_linglongshimandai_skill: '玲珑狮蛮带',
            hulaoguan_boss_linglongshimandai_skill_info: '当其他角色使用牌指定你为唯一目标后,你可以进行一次判定,若判定结果为♥️️,则此牌对你无效.',
            hulaoguan_boss_hongmianbaihuapao_skill: '红棉百花袍',
            hulaoguan_boss_hongmianbaihuapao_skill_info: '锁定技,防止你受到的属性伤害.',
            hulaoguan_boss_wushuangfangtianji_skill: '无双方天戟',
            hulaoguan_boss_wushuangfangtianji_skill_info: '你使用【杀】对目标角色造成伤害后,可以摸一张牌或弃置目标角色一张牌.',
            fenghuo_siyao: '撕咬',
            fenghuo_siyao_info: '你使用【杀】指定目标后,你可以对此【杀】目标中的敌方角色各造成1点伤害.此【杀】造成伤害后,受伤角色随机弃置一张牌.',
            nianshou_siyao: '撕咬',
            nianshou_siyao_info: '你使用【杀】指定目标后,你可以对此【杀】目标中的敌方角色各造成1点伤害.此【杀】造成伤害后,受伤角色随机弃置一张牌.',
            nianshou_hengsao: '横扫',
            nianshou_hengsao_info: '锁定技,出牌阶段开始时,若你的手牌数为三到六张,你本阶段【杀】的次数+1,目标数+1.',
            nianshou_hengsaoa: '横扫',
            nianshou_hengsaoa_info: '你使用的【杀】可额外指定一个目标.',
            nianshou_hengsaob: '横扫',
            nianshou_hengsaob_info: '锁定技,你使用的【杀】或伤害类锦囊指定所有敌方角色为目标.',
            nianshou_zhuyan: '朱颜',
            nianshou_zhuyan_info: '锁定技,摸牌阶段,你放弃摸牌,改为从牌堆中随机获得四张牌.',
            nianshou_zhuyana: '朱颜',
            nianshou_zhuyana_info: '锁定技,摸牌阶段,你放弃摸牌,改为从牌堆中随机获得三张牌名和副类别不同的牌.',
            nianshou_zhuyanb: '朱颜',
            nianshou_zhuyanb_info: '锁定技,摸牌阶段,你放弃摸牌,改为从牌堆中随机获得五张牌名不同的牌.',
            xishou_taoyuan: '饕怨',
            xishou_taoyuan_info: '当你受到伤害后,你可以摸两张牌,若这两张牌花色不同,你随机获得伤害来源的一张手牌(对己方角色无效).',
            xishou_taoyuan1: '饕怨',
            xishou_taoyuan1_info: '当你受到伤害后,你可以摸两张牌,若这两张牌花色不同,你视为对伤害来源使用一张【杀】(对己方角色无效).',
            xishou_juxiang: '巨象',
            xishou_juxiang_info: '锁定技,【南蛮入侵】对你无效;锁定技,每当其他角色使用的【南蛮入侵】因结算完毕而置入弃牌堆后,你获得之.',
            xishou_shouxi: '兽袭',
            xishou_shouxi_info: '当你使用黑色锦囊牌时可以进行一次判定,若判定结果为黑色,你随机对一名敌人造成1点伤害.若结果为红色,你回复1点体力并获得判定的牌.',
            xishou_tianxiang: '天香',
            xishou_tianxiang_info: '当你受到伤害时,你可以弃置一张♥️️手牌,防止此次伤害并选择一名其他角色,若如此做,你选择一项:令其受到伤害来源对其造成的1点伤害,摸X张牌(X为其已损失体力值且至多为5);令其失去1点体力,其获得你弃置的牌.',
            xishou_mingzhe: '明哲',
            xishou_mingzhe_info: '每当你于回合外使用或打出红色牌时,或于回合外因弃置而失去一张红色牌后,你可以摸一张牌.',
            xishou_mane: '蛮恶',
            xishou_mane_info: '锁定技,当有角色受到【南蛮入侵】或【万箭齐发】造成的伤害后,你从弃牌堆随机获得一张黑色锦囊牌,每回合每名角色限一次.',
            xishou_lizhan: '历战',
            xishou_lizhan_info: '出牌阶段开始时,获得牌堆或弃牌堆中的两张【杀】.每回合使用的第一张【杀】进入弃牌堆后,可以将该【杀】交给一名其他角色.',
            xishou_paoxiao: '咆哮',
            xishou_paoxiao_info: '锁定技,你出【杀】无次数限制,你的出牌阶段,如果你已经使用过【杀】,你于此阶段使用【杀】无距离限制.',
            zhiyuan_yuxing: '鱼形',
            zhiyuan_yuxing_info: '锁定技,你受到的属性伤害+1.其他角色的弃牌阶段结束时,若其于此阶段弃置过♣️️牌,你流失一点体力.',
            zhiyuan_diexing: '蝶形',
            zhiyuan_diexing_info: '锁定技,你受到的属性伤害+1.当有【酒】进入弃牌堆后,你流失一点体力.',
            zhiyuan_yanxing: '燕形',
            zhiyuan_yanxing_info: '锁定技,你受到的属性伤害+1.当一张【杀】或锦囊指定了包括你在内的多个目标,你流失一点体力.',
            zhiyuan_feiyuan: '飞鸢',
            zhiyuan_feiyuan_info: '锁定技,准备阶段,跳过你的回合,所有拥有该技能的角色增加一个飞鸢标记.根据当前标记个数执行以下效果:1~6.所有敌方随机弃置一张牌.＞6.所有敌方流失一点体力.',
            zhiyuan_lingkong: '凌空',
            zhiyuan_lingkong_info: '锁定技,游戏开始时,其他角色与你距离+X(X为1~5随机数字,每个准备阶段,X数值会发生改变).当你受到伤害时,若你不在伤害来源攻击范围内,有50%概率令该伤害-1.',
            liezhuan_duhe: '渡河',
            liezhuan_duhe_info: '锁定技,当你受到【杀】造成的伤害后,其他角色计算到你的距离+1.',
            liezhuan_jiliu: '激流',
            liezhuan_jiliu_info: '锁定技,你的回合外,当前回合角色使用一张牌后,你将手牌数调整为x(x为当前回合角色计算到你的距离).',
            fenghuo_qiyuan: '祈愿',
            fenghuo_qiyuan_info: '出牌阶段限一次,你可以选择一个点数,从牌堆里随机获得该点数的一张牌.',
            fenghuo_jiewei: '解围',
            fenghuo_jiewei_info: '你可以将装备区里的牌当【无懈可击】使用;当你的武将牌从背面翻至正面时,你可以弃置一张牌,移动场上的一张牌',
            shanhe_renxin: '仁心',
            shanhe_renxin_info: '当体力值为1的一名其他角色受到伤害时,你可以将武将牌翻面并弃置一张装备牌,防止此伤害.',
            shanhe_qizhoua: '绮胄',
            shanhe_qizhoua_info: '锁定技,你根据你装备区里牌的花色数视为拥有对应技能:不小于1,【马术】;不小于2,【英姿】;不小于3,【短兵】;为4,【奋威】.',
            shanhe_shanjia: '缮甲',
            shanhe_shanjia_info: '出牌阶段开始时,你可以摸三张牌,弃置3-X张牌(X为你本局游戏内不因使用而失去过的装备牌的数目且至多为3).若你没有以此法弃置基本牌或锦囊牌,则你可以视为使用了一张无距离限制且不计入出牌阶段使用次数的【杀】.',
            fenghuo_shanji: '缮骑',
            fenghuo_shanji_info: '出牌阶段开始时,你可以摸三张牌,弃置三张牌(本局游戏你每失去过一张装备区里的牌,便少弃置一张)若你本次没有弃置坐骑牌,可视为使用一张【杀】(无视距离,不计入次数限制且可指定任意个目标).',
            fenghuo_xiaoji: '枭姬',
            fenghuo_xiaoji_info: '当你失去装备区里的一张牌后,你可以摸两张牌.',
            nianshou_xiaoji: '枭姬',
            nianshou_xiaoji_info: '当你失去装备区里的一张牌后,你可以摸两张牌.',
            nianshou_weihe: '威吓',
            nianshou_weihe_info: '当你成为【杀】的⽬标后,你可令此【杀】的使⽤者随机弃置两张牌.若这两张牌是同⼀类型,你随机获得其中⼀张.',
            nianshou_huanling: '幻灵',
            nianshou_huanling_info: '锁定技,你跳过摸牌阶段;出牌阶段开始时,你视为依次使用两张普通锦囊牌,且目标随机指定敌方角色.',
            nianshou_fangong: '返功',
            nianshou_fangong_info: '结束阶段,若你本回合没有造成过伤害,你可以摸两张牌.',
            nianshou_xunshou: '巡狩',
            nianshou_xunshou_info: '锁定技,准备阶段,所有手牌数大于3的敌方角色随机弃置两张手牌.',
            nianshou_xunlie: '寻猎',
            nianshou_xunlie_info: '锁定技,结束阶段,所有体力值大于3的敌方角色受到1点伤害.',
            nianshou_qubi: '祛蔽',
            nianshou_qubi_info: '当你造成或受到伤害后,若此伤害不是【杀】造成的,你可令受伤角色或伤害来源随机弃置一张【杀】和一张【闪】.',
            nianshou_huaji: '化吉',
            nianshou_huaji_info: '锁定技,己方角色回合结束时,若其本回合跳过了摸牌阶段,你摸两张牌;若其本回合跳过了出牌阶段,你随机对一名敌方角色造成1点火焰伤害.',
            nianshou_huozhong: '祸重',
            nianshou_huozhong_info: '每个出牌阶段限一次,当你于回合内使用的锦囊牌进入弃牌堆后,你可以弃置一张牌将此锦囊牌收回手牌.若你以此法弃置的牌是装备牌,你摸一张牌.',
            nianshou_zange: '攒戈',
            nianshou_zange_info: '锁定技,己方有角色阵亡时,你随机将牌堆中的一张武器牌、一张防具牌、一张+1坐骑和一张-1坐骑置入装备区.',
            nianshou_yuxiang: '余响',
            nianshou_yuxiang_info: '锁定技,一名敌方角色的回合结束时,若你本回合失去过基本牌,当前回合角色随机弃置一张手牌;若你本回合失去过锦囊牌,当前回合角色受到1点伤害;若你本回合失去过装备牌,你摸一张牌并回复1点体力.',
            fenghuo_jingyong: '精勇',
            fenghuo_jingyong_info: '当你的牌因弃置而进入弃牌堆后,你可以将这些牌交给一名其他角色,若如此做,你视为使用一张【杀】.',
            shanglin_langzhu: '狼主',
            shanglin_langzhu_info: '锁定技,你的【杀】指定攻击范围内的所有敌方角色为目标.当你使用牌指定多个目标后,随机对其中一名其他角色造成1点伤害并随机获得其一张牌.',
            shanglin_langwang: '狼王',
            shanglin_langwang_info: '锁定技,你的【杀】指定攻击范围内的所有敌方角色为目标.当你使用牌指定多个目标后,随机对其中一名其他角色造成1点伤害并随机获得其一张牌.',
            shanglin_qunxiang: '群响',
            shanglin_qunxiang_info: '锁定技,准备阶段或结束阶段,你视为使用一张【南蛮入侵】或【万箭齐发】.',
            Shanglin_qunxiang: '群响',
            Shanglin_qunxiang_info: '锁定技,准备阶段,你视为使用【万箭齐发】;结束阶段,你视为使用【南蛮入侵】.',
            Shanglin_qunlang: '群狼',
            Shanglin_qunlang_info: '锁定技,每轮开始时,若你没有<狼>标记,你获得2个<狼>标记.<br>你使用的【杀】或伤害类锦囊额外执行X次.若此牌未造成伤害,则你失去1个<狼>标记.(X为<狼>标记的个数)<br>当你失去所有<狼>标记后,失去一个本局获得的随机技能,获得2个<狼>标记.失去所有随机技能后,本技能失效.',
            Shanglin_qunlanga: '群狼',
            Shanglin_qunlanga_info: '锁定技,每轮开始时,若你没有<狼>标记,你获得1个<狼>标记.<br>你使用的【杀】或伤害类锦囊额外执行X次.若此牌未造成伤害,则你失去1个<狼>标记.(X为<狼>标记的个数)<br>当你失去所有<狼>标记后,失去一个本局获得的随机技能,获得1个<狼>标记.失去所有随机技能后,本技能失效.',
            Shanglin_qunlangb: '群狼',
            Shanglin_qunlangb_info: '锁定技,每轮开始时,若你没有<狼>标记,你获得1个<狼>标记.<br>你使用的【杀】或伤害类锦囊额外执行X次.若此牌未造成伤害,则你失去1个<狼>标记.(X为<狼>标记的个数)<br>当你失去所有<狼>标记后,失去一个本局获得的随机技能,获得1个<狼>标记.失去所有随机技能后,本技能失效.',
            fenghuo_qunxiang: '群响',
            fenghuo_qunxiang_info: '锁定技,准备阶段或结束阶段,你视为使用一张【南蛮入侵】或【万箭齐发】.',
            nianshou_qunxiang: '群响',
            nianshou_qunxiang_info: '锁定技,准备阶段或结束阶段,你视为使用一张【南蛮入侵】或【万箭齐发】.',
            nianshou_qunxianga: '群响',
            nianshou_qunxianga_info: '锁定技,准备阶段,你视为使用【万箭齐发】;结束阶段,你视为使用【南蛮入侵】.',
            fenghuo_tanshi: '贪食',
            fenghuo_tanshi_info: '当你造成伤害后,你可以进行一次判定,若结果为黑色,你回复1点体力(若你体力满则改为摸一张牌).',
            nianshou_tanshi: '贪食',
            nianshou_tanshi_info: '当你造成伤害后,你可以进行一次判定,若结果为黑色,你回复1点体力(若你体力满则改为摸一张牌).',
            nianshou_fange: '反戈',
            nianshou_fange_info: '当你受到伤害后,你可以摸两张牌,若这两张牌点数之差大于等于你当前体力值,你对伤害来源造成1点伤害(对己方角色无效).',
            nianshou_fangea: '反戈',
            nianshou_fangea_info: '当你受到伤害后,你可以摸两张牌,若这两张牌点数之差大于等于你当前体力值,你对伤害来源造成2点伤害(对己方角色无效).',
            nianshou_fangeb: '反戈',
            nianshou_fangeb_info: '锁定技,当你受到伤害后,你摸一张牌,若这张牌点数小于伤害值,你随机获得伤害来源的一张牌(对己方角色无效).',
            boss_suishou: '岁兽',
            boss_suishou_info: '锁定技,敌方角色回合开始时,你获得一个>岁<标记.当你失去体力后或受到火焰伤害后,失去1个>岁<标记.出牌阶段开始时,你摸X张牌;你造成伤害时,伤害值增加X;你受到的非火焰伤害减少X.X为>岁<标记的数量且最大为5.',
            boss_suishou_female: '岁兽',
            boss_suishou_female_info: '锁定技,敌方角色回合开始时,你获得一个>岁<标记.当你失去体力后或受到火焰伤害后,失去1个>岁<标记.出牌阶段开始时,你摸X张牌;你造成伤害时,伤害值增加X;你受到的非火焰伤害减少X.X为>岁<标记的数量且最大为5.',
            boss_suishoua: '岁兽',
            boss_suishoua_info: '锁定技,每轮开始时,你获得一个>岁<标记.当你失去体力后或受到火焰伤害后,失去1个>岁<标记.出牌阶段开始时,你摸X张牌;你造成伤害时,伤害值增加X;你受到伤害时,若该伤害不是火焰伤害,则伤害值减少X.X为>岁<标记的数量且最大为3.',
            boss_suishoua_female: '岁兽',
            boss_suishoua_female_info: '锁定技,每轮开始时,你获得一个>岁<标记.当你失去体力后或受到火焰伤害后,失去1个>岁<标记.出牌阶段开始时,你摸X张牌;你造成伤害时,伤害值增加X;你受到伤害时,若该伤害不是火焰伤害,则伤害值减少X.X为>岁<标记的数量且最大为3.',
            boss_suishoub: '岁兽',
            boss_suishoub_info: '锁定技,每轮开始时,你获得一个>岁<标记.当你失去体力后或受到火焰伤害后,失去所有>岁<标记.出牌阶段开始时,你摸X张牌;你造成伤害时,伤害值增加X;你受到伤害时,若该伤害不是火焰伤害,则伤害值减少X.X为>岁<标记的数量且最大为2.',
            boss_suishoub_female: '岁兽',
            boss_suishoub_female_info: '锁定技,每轮开始时,你获得一个>岁<标记.当你失去体力后或受到火焰伤害后,失去所有>岁<标记.出牌阶段开始时,你摸X张牌;你造成伤害时,伤害值增加X;你受到伤害时,若该伤害不是火焰伤害,则伤害值减少X.X为>岁<标记的数量且最大为2.',
            shanhe_guose: '国色',
            shanhe_guose_info: '出牌阶段限一次,你选择一项,摸一张牌:1.将一张♦️️牌当【乐不思蜀】使用;2.弃置一张♦️️牌并弃置场上的一张【乐不思蜀】.',
            caoe_guose: '国色',
            caoe_guose_info: '出牌阶段限一次,你选择一项,摸一张牌:1.将一张♦️️牌当【乐不思蜀】使用;2.弃置一张♦️️牌并弃置场上的一张【乐不思蜀】.',
            hezong_shangyangbianfa_dying: '商鞅变法',
            hezong_shangyangbianfa_dying_info: '造成随机1~3点伤害,若该角色进入濒死状态,则进行判定,若判定结果为黑色,则该角色本次濒死状态无法向其他角色求桃.',
            xiuluo_skill: '无双修罗戟',
            xiuluo_skill_info: '你的【杀】或【决斗】造成伤害后,你可以对受伤目标的一名相邻角色造成1点伤害.',
            fumo_skill: '伏魔金刚杵',
            fumo_skill_info: '你使用【杀】指定目标后,令其防具无效.你对有防具的角色造成的伤害+1.',
            feijiang_skill: '飞将神威剑',
            feijiang_skill_info: '你使用【杀】造成伤害时,改为流失体力.每当有角色流失1点体力,你摸一张牌.',
            youhuo_skill: '幽火摄魄令',
            youhuo_skill_info: '出牌阶段结束时,你可以对所有敌方角色造成1点伤害,你回复等同于造成伤害数量的体力.',
            honglian_skill: '红莲紫金冠',
            honglian_skill_info: '你的回合结束时,你可以随机弃置所有敌方角色一张牌.其中每有一张基本牌,你摸两张牌;每有一张装备牌,随机一名敌方角色失去1点体力;每有一张锦囊牌,随机获得一名敌方角色的一张牌.',
            xichuanhongjinpao_skill: '西川红锦袍',
            xichuanhongjinpao_skill_info: '锁定技,所有己方角色的摸牌阶段多摸X张牌,出牌阶段可以多出X张【杀】,手牌上限加X(X为本局游戏你使用此宝物牌的次数).',
            sy_shenyi: '神裔',
            sy_shenyi_info: '锁定技,你的武将牌始终正面向上(即不能被翻面),判定区内的牌判定结果反转.(生效变为不生效,不生效变为生效.)',
            hanba_fenshi: '焚世',
            hanba_fenshi_info: '锁定技,准备阶段,若你的手牌数小于体力值,则将手牌摸至于体力值相等;若你的手牌数大于体力值,则你对敌方角色造成共计X点伤害,点数随机分配(X为手牌数减体力值).',
            hanba_zhiri: '炙日',
            hanba_zhiri_info: '锁定技,当敌方角色使用红色锦囊牌指定目标后,你摸两张牌.',
            fenghuo_xinji: '心悸',
            fenghuo_xinji_info: '锁定技,当你于回合外因弃置而失去手牌时,你对当前回合角色造成1点伤害(对己方角色无效).',
            hanba_xinji: '心悸',
            hanba_xinji_info: '锁定技,当你于回合外因弃置而失去手牌时,你对当前回合角色造成1点伤害(对己方角色无效).',
            Tianshu_xinji: '心悸',
            Tianshu_xinji_info: '锁定技,当己方角色于回合外因弃置而失去手牌时,你对当前回合角色造成2点伤害(对己方角色无效).',
            Tianshu_xinjia: '心悸',
            Tianshu_xinjia_info: '锁定技,当己方角色于回合外因弃置而失去手牌时,你对当前回合角色造成1点伤害(对己方角色无效).',
            Tianshu_wuan: '武安',
            Tianshu_wuan_info: '锁定技,你可使用的【杀】的次数+3,【杀】造成的伤害+1.',
            tianshubaiqi_wuan: '武安',
            tianshubaiqi_wuan_info: '锁定技,你可使用的【杀】的次数+1,【杀】造成的伤害+1.',
            tianshubaiqi_wuana: '武安',
            tianshubaiqi_wuana_info: '锁定技,你可使用的【杀】的次数+2,【杀】造成的伤害+1.',
            tianshukuafu_zhuri: '逐日',
            tianshukuafu_zhuri_info: '锁定技,准备阶段,你进行一次判定:若判定结果为红色,本回合你使用红色牌结算完毕后将该牌放置在牌堆底;若判定结果为黑色,本回合你使用黑色牌时,你摸一张牌.',
            tianshukuafu_yinjiang: '饮江',
            tianshukuafu_yinjiang_info: '锁定技,当你在出牌阶段摸牌后,额外从牌堆底获得一张牌,如果该牌是红色,则随机对一名敌方角色造成1点伤害.',
            tianshukuafu_lieben: '烈奔',
            tianshukuafu_lieben_info: '锁定技,当你使用【杀】指定目标后,使用牌堆底的牌进行一次判定:若判定结果为红色,则此杀不计入出牌阶段使用次数且伤害+1.',
            tianshu_lieben: '烈奔',
            tianshu_lieben_info: '锁定技,当你使用【杀】指定目标后,使用牌堆底的牌进行一次判定:若判定结果为红色,则此杀不计入出牌阶段使用次数.',
            tianshukuafu_shenqu: '神躯',
            tianshukuafu_shenqu_info: '锁定技,当你受到1点伤害后,使用牌堆底的牌进行一次判定:若判定结果为红色,你摸一张牌,伤害来源弃置一张牌.',
            tianshuxuannv_shenqu: '神躯',
            tianshuxuannv_shenqu_info: '锁定技,当你受到1点伤害后,使用牌堆底的牌进行一次判定:若判定结果为红色,你摸一张牌,伤害来源弃置一张牌.',
            tianshuxuannv_dishi: '帝师',
            tianshuxuannv_dishi_info: '当你使用【杀】或普通锦囊牌指定目标时,如果目标数为1,可以增加一个目标;如果目标数大于1,可以减少一个目标.',
            tianshuxuannv_jiutian: '九天',
            tianshuxuannv_jiutian_info: '锁定技,准备阶段,如果敌方角色有超过两种不同花色的手牌,则你获得其一张手牌.如果你以此法获得的所有牌花色均不同,则对所有你以此法获得其牌的敌方角色造成1点伤害.',
            Tianshu_jiutian: '九天',
            Tianshu_jiutian_info: '锁定技,准备阶段,你获得所有敌方角色各两张手牌.若你以此法获得的牌包含两种颜色,则对所有你以此法获得其牌的敌方角色造成1点伤害.若这些牌包含四种花色,这些角色再额外失去1点体力.',
            Tianshu_jiutiana: '九天',
            Tianshu_jiutiana_info: '锁定技,准备阶段,你获得所有敌方角色各两张手牌.若你以此法获得的牌包含两种颜色,则对所有你以此法获得其牌的敌方角色造成1点伤害.',
            Tianshu_jiutianb: '九天',
            Tianshu_jiutianb_info: '锁定技,准备阶段,你获得所有敌方角色各一张手牌.若你以此法获得的牌包含两种颜色,则对所有你以此法获得其牌的敌方角色造成1点伤害.',
            tianshuxuannv_xuanlie: '玄烈',
            tianshuxuannv_xuanlie_info: '锁定技,回合结束时,对所有本回合你获得过其牌的敌方角色依次造成2点伤害.',
            tianshuxuannv_xuanliea: '玄烈',
            tianshuxuannv_xuanliea_info: '锁定技,回合结束时,对所有本回合你获得过其牌的敌方角色依次造成1点伤害.',
            Tianshu_shashen: '杀神',
            Tianshu_shashen_info: '你可以将手牌中的任意牌当【杀】使用或打出.你使用的【杀】造成伤害后,摸三张牌.',
            tianshubaiqi_shashen: '杀神',
            tianshubaiqi_shashen_info: '你可以将手牌中的任意牌当【杀】使用或打出.每回合你使用的第一张【杀】造成伤害后,摸一张牌.',
            tianshubaiqi_shashena: '杀神',
            tianshubaiqi_shashena_info: '你可以将手牌中的任意牌当【杀】使用或打出.每回合你使用的第一张【杀】造成伤害后,摸两张牌.',
            tianshubaiqi_changsheng: '常胜',
            tianshubaiqi_changsheng_info: '锁定技,你使用【杀】无距离限制.',
            shidian_manjia: '蛮甲',
            shidian_manjia_info: '锁定技,若你的装备区内没有防具牌,则你视为装备了【藤甲】.',
            shidian_guiji: '诡计',
            shidian_guiji_info: '锁定技,准备阶段,若你的判定区内有牌,你随机弃置其中一张牌.',
            shanhe_tengyun: '腾云',
            shanhe_tengyun_info: '锁定技,当你受到伤害后,其他角色对你使用的牌无效直到你的回合结束.',
            sy_tengyun: '腾云',
            sy_tengyun_info: '锁定技,当你受到伤害后,其他角色使用的牌对你无效直到回合结束.',
            qinglong_tengyun: '腾云',
            qinglong_tengyun_info: '锁定技,当你受到伤害后,其他角色使用的牌对你无效直到回合结束.',
            Tianshu_tengyun: '腾云',
            Tianshu_tengyun_info: '锁定技,当你受到伤害后,其他角色本回合计算与你的距离+1,你获得伤害来源随机三张牌.',
            Tianshu_tengyunb: '腾云',
            Tianshu_tengyunb_info: '锁定技,当你受到伤害后,其他角色本回合计算与你的距离+1,你获得伤害来源随机两张牌.',
            Tianshu_tengyuna: '腾云',
            Tianshu_tengyuna_info: '锁定技,当你受到伤害后,其他角色计算与你的距离+1,你获得伤害来源随机X张牌.(X为你与伤害来源的距离)',
            baihu_kuangxiao: '狂啸',
            baihu_kuangxiao_info: '锁定技,你于回合内使用【杀】无距离限制且指定所有敌方角色为目标.',
            Tianshu_kuangxiao: '狂啸',
            Tianshu_kuangxiao_info: '锁定技,你于回合内使用【杀】无距离限制;你使用【杀】或【决斗】指定所有敌方角色为目标且无法响应,并且伤害+1.',
            Tianshu_kuangxiaoa: '狂啸',
            Tianshu_kuangxiaoa_info: '锁定技,你于回合内使用【杀】无距离限制;你使用【杀】或【决斗】指定所有敌方角色为目标,且伤害+1.',
            zhuque_fentian: '焚天',
            zhuque_fentian_info: '出牌阶段限一次,你可以对一名其他角色造成1点火焰伤害,若其死亡,此阶段你发动此技能的次数限制+1.',
            Tianshu_fentiana: '焚天',
            Tianshu_fentiana_info: '出牌阶段限一次,你可以弃置所有红色牌,对一名敌方角色造成3点火焰伤害.',
            Tianshu_fentianb: '焚天',
            Tianshu_fentianb_info: '出牌阶段限一次,你可以弃置所有红色牌,对一名敌方角色造成2点火焰伤害.',
            Tianshu_fentian: '焚天',
            Tianshu_fentian_info: '出牌阶段限一次,你可以弃置所有红色牌,对所有敌方角色各造成2点火焰伤害.',
            xuanwu_lingqu: '灵躯',
            xuanwu_lingqu_info: '锁定技,当你受到伤害后,你摸一张牌且手牌上限+1,本回合防止你受到的大于1点的伤害.',
            Tianshu_lingqu: '灵躯',
            Tianshu_lingqu_info: '锁定技,当你受到伤害后,你摸X张牌且手牌上限+X.(X为受到的伤害值)',
            fenghuo_lingqu: '灵躯',
            fenghuo_lingqu_info: '锁定技,当你受到伤害后,你摸一张牌且手牌上限+1,本回合防止你受到的大于1点的伤害.',
            linmai: '林脉',
            linmai_info: '锁定技,每轮限一次,当你造成伤害或受到伤害后,所有己方角色回复1点体力.',
            huomai: '火脉',
            huomai_info: '每回合限两次,当你使用【杀】造成伤害时,你可令该伤害增加X,X为本回合你使用【杀】的数量且最大为2.',
            shanmai: '山脉',
            shanmai_info: '每回合限一次,当你受到伤害时,你可以将该伤害减少1点并对伤害来源造成1点伤害.',
            fengmai: '风脉',
            fengmai_info: '每回合限两次,当你使用【闪】时,你可以获得当前回合角色一张手牌.',
            hulaoguan_xianzhen: '陷阵',
            hulaoguan_xianzhen2: '陷阵',
            hulaoguan_xianzhen_info: '每回合限一次.出牌阶段,你可以和一名其他角色拼点.若你赢:本回合你无视该角色的防具,且对其使用牌没有次数和距离限制,且本回合对其使用牌造成伤害时,此伤害+1(每种牌名每回合限一次).',
            shanhe_xianzhen: '陷阵',
            shanhe_xianzhen_info: '出牌阶段限一次,你可以与一名角色拼点.若你赢,你获得以下效果直到回合结束:无视该角色的防具且对其使用牌没有次数和距离限制,且当你使用【杀】或普通锦囊牌指定其他角色为唯一目标时可以令该角色也成为此牌的目标.若你没赢,你不能使用【杀】且你的【杀】不计入手牌上限直到回合结束.',
            shanhe_xianzhen2: '陷阵',
            fenghuo_hengchong: '横冲',
            fenghuo_hengchong_info: '锁定技,你手牌区里的【闪】都视为普通【杀】.',
            shanhe_yitaozhijiu: '以桃置酒',
            shanhe_yitaozhijiu_info: '锁定技,你手牌区里的【桃】都视为【酒】.',
            shanhe_shaqitengteng: '杀气腾腾',
            shanhe_shaqitengteng_info: '锁定技,你手牌区里的【闪】都视为普通【杀】.',
            shanhe_daodaobaoji: '刀刀暴击',
            shanhe_daodaobaoji_info: '锁定技,你造成的伤害+1.',
            shanhe_shuxingwuju: '属性无惧',
            shanhe_shuxingwuju_info: '锁定技,防止你受到的属性伤害.',
            shanhe_pijiazaibing: '被甲载兵',
            shanhe_pijiazaibing_info: '锁定技,开局随机使用一张装备牌.',
            hulaoguan_jinjiu: '禁酒',
            hulaoguan_jinjiu_info: '锁定技.你的【酒】的牌名均视为【杀】且点数视为K;你的回合内,其他角色不能使用【酒】.',
            tongque_qiaobian: '巧变',
            tongque_qiaobian1: '巧变·判定',
            tongque_qiaobian2: '巧变·摸牌',
            tongque_qiaobian3: '巧变·出牌',
            tongque_qiaobian4: '巧变·弃牌',
            tongque_qiaobian_info: '你可以跳过自己的一个阶段(准备阶段和结束阶段除外);若你以此法跳过了摸牌阶段,则你可以获得至多两名其他角色的各一张手牌;若你以此法跳过了出牌阶段,则你可以移动场上的一张牌.',
            tongque_shensu: '神速',
            tongque_shensu_info: '你可以选择至多三项:1.跳过判定阶段和摸牌阶段;2.跳过出牌阶段;3.跳过弃牌阶段.你每选择一项,视为你使用一张无距离限制的【杀】.',
            tongque_shensu1: '神速',
            tongque_shensu2: '神速',
            tongque_shensu4: '神速',
            shanhe_shensu: '神速',
            shanhe_shensu_info: '你可以选择至多三项:1.跳过判定阶段和摸牌阶段;2.跳过出牌阶段并弃置一张装备牌;3.跳过弃牌阶段并失去1点体力.你每选择一项,视为你使用一张无距离限制的【杀】.',
            shanhe_shensu1: '神速',
            shanhe_shensu2: '神速',
            shanhe_shensu4: '神速',
            shanhe_shensua: '神速',
            shanhe_shensua_info: '你可以选择至多两项:1.跳过判定阶段和摸牌阶段;2.跳过出牌阶段并弃置一张装备牌.你每选择一项,视为你使用一张无距离限制的【杀】.',
            shanhe_shensua1: '神速',
            shanhe_shensua2: '神速',
            shanhe_shensua4: '神速',
            shanhe_shensub: '神速',
            shanhe_shensub_info: '你可以选择至多三项:1.跳过判定阶段和摸牌阶段;2.跳过出牌阶段并弃置一张装备牌;3.跳过弃牌阶段并翻面.你每选择一项,视为你使用一张无距离限制的【杀】.',
            shanhe_shensub1: '神速',
            shanhe_shensub2: '神速',
            shanhe_shensub4: '神速',
            shanhe_jisu: '急速',
            shanhe_jisu_info: '你可以跳过判定阶段和摸牌阶段,视为使用了一张无距离限制的【杀】.',
            shidian_bingfen: '冰封',
            shidian_bingfen_info: '锁定技,你死亡时,若击杀你的角色武将牌是正面朝上, 你令其翻面.',
            shanhe_bingfen: '冰封',
            shanhe_bingfen_info: '锁定技,你死亡时,若击杀你的角色武将牌是正面朝上, 你令其翻面.',
            shidian_fankui: '反馈',
            shidian_fankui_info: '每当你受到1点伤害后,你可以获得伤害来源的一张牌.',
            shidian_weimu: '帷幕',
            shidian_weimu_info: '锁定技,你不能成为黑色锦囊牌的目标.',
            shidian_bufo: '不佛',
            shidian_bufo_info: '锁定技,准备阶段,你对所有距离为1的敌方角色造成1点火焰伤害;你受到大于等于2的伤害时,令此伤害-1.',
            shidian_wuliang: '无量',
            shidian_wuliang_info: '锁定技,你登场时额外摸四张牌;结束阶段,你摸两张牌;准备阶段,若你的体力值小于3,你回复至3点体力.',
            shanhe_bufo: '不佛',
            shanhe_bufo_info: '锁定技,准备阶段,你对所有距离为1的敌方角色造成1点火焰伤害;你受到大于等于2的伤害时,令此伤害-1.',
            shanhe_wuliang: '无量',
            shanhe_wuliang_info: '锁定技,你登场时额外摸四张牌;结束阶段,你摸两张牌;准备阶段,若你的体力值小于3,你回复至3点体力.',
            shidian_dayuan: '大愿',
            shidian_dayuan_info: ' 当一名角色判定牌最终生效前,你可以指定该判定牌的点数和花色.',
            shanhe_dayuan: '大愿',
            shanhe_dayuan_info: ' 当一名角色判定牌最终生效前,你可以指定该判定牌的点数和花色.',
            shidian_diting: '谛听',
            shidian_diting_info: '锁定技,你的坐骑区被废除,你与别人计算距离时-1,别人与你计算距离时+1;你的坐骑牌均用于重铸.',
            shidian_suozu: '锁足',
            shidian_suozu_info: '锁定技,准备阶段,你令所有敌方角色进入连环状态.',
            shanhe_suozu: '锁足',
            shanhe_suozu_info: '锁定技,准备阶段,你令所有敌方角色进入连环状态.',
            shidian_heisheng: '黑绳',
            shidian_heisheng_info: '锁定技,当你死亡时,你令所有敌方角色进入连环状态.',
            shanhe_heisheng: '黑绳',
            shanhe_heisheng_info: '锁定技,当你死亡时,你令所有敌方角色进入连环状态.',
            shidian_tiemian: '铁面',
            shidian_tiemian_info: '锁定技,你的防具区没有牌时,视为你装备【仁王盾】.',
            jiange_yizhong: '毅重',
            jiange_yizhong_info: '锁定技,若你的装备区里没有防具牌,黑色【杀】对你无效.',
            shidian_zhadao: '铡刀',
            shidian_zhadao_info: '锁定技,你使用【杀】指定目标后,你令目标角色防具无效.',
            shidian_zhuxin: '诛心',
            shidian_zhuxin_info: '锁定技,你死亡时,你令场上血量最少的一名敌方角色受到2点伤害.',
            shanhe_zhuxin: '诛心',
            shanhe_zhuxin_info: '锁定技,你死亡时,你令场上血量最少的一名敌方角色受到2点伤害.',
            shidian_fudu: '服毒',
            shidian_fudu_info: '锁定技,其他角色使用【桃】时,你令随机另一名敌方角色失去1点体力.',
            shanhe_fudu: '服毒',
            shanhe_fudu_info: '锁定技,其他角色使用【桃】时,你令随机另一名敌方角色失去1点体力.',
            shidian_kujiu: '苦酒',
            shidian_kujiu_info: '锁定技,敌方角色的准备阶段,你令其失去1点体力,该角色视为使用一张【酒】.',
            shidian_renao: '热恼',
            shidian_renao_info: '锁定技,当你死亡时,你令随机一名敌方角色受到3点火焰伤害.',
            shanhe_renao: '热恼',
            shanhe_renao_info: '锁定技,当你死亡时,你令随机一名敌方角色受到3点火焰伤害.',
            shidian_remen: '热闷',
            shidian_remen_info: '锁定技,若你的装备区内没有防具牌,则【南蛮入侵】、【万箭齐发】和普通【杀】对你无效.',
            shidian_zhifen: '炙焚',
            shidian_zhifen_info: '锁定技,准备阶段,你随机选择一名敌方角色,获得其一张手牌,并对其造成1点火焰伤害.',
            shidian_panguan: '判官',
            shidian_panguan_info: '锁定技,你不能成为延时类锦囊的目标.',
            shidian_juhun: '拘魂',
            shidian_juhun_info: '锁定技,结束阶段,你令随机一名敌方角色翻面、进入或解除连环状态.',
            shanhe_juhun: '拘魂',
            shanhe_juhun_info: '锁定技,结束阶段,你令随机一名敌方角色翻面、进入或解除连环状态.',
            shidian_wangxiang: '望乡',
            shidian_wangxiang_info: '锁定技,当你死亡时,你令所有敌方角色弃置其装备区内的所有牌.',
            shidian_zhiwang: '治妄',
            shidian_zhiwang_info: '锁定技,敌方角色于非摸牌阶段获得手牌时,你随机弃置其一张手牌.',
            shanhe_zhiwang: '治妄',
            shanhe_zhiwang_info: '锁定技,敌方角色于非摸牌阶段获得手牌时,你随机弃置其一张手牌.',
            shidian_gongzheng: '公正',
            shidian_gongzheng_info: '锁定技,准备阶段,若你判定区有牌,你随机弃置一张你判定区的牌.',
            shanhe_gongzheng: '公正',
            shanhe_gongzheng_info: '锁定技,准备阶段,若你判定区有牌,你随机弃置一张你判定区的牌.',
            shidian_xuechi: '血池',
            shidian_xuechi_info: '锁定技,结束阶段,你令随机一名敌方角色失去2点体力.',
            shidian_shengfu: '绳缚',
            shidian_shengfu_info: '锁定技,结束阶段,你随机弃置一张场上敌方角色的坐骑牌.',
            shanhe_zhenggu: '镇骨',
            shanhe_zhenggu2: '镇骨',
            shanhe_zhenggu_info: '结束阶段,你可以选择一名其他角色,本回合结束时和其下回合结束时,其将手牌调整至与你手牌数相同(至多摸至五张).',
            shidian_modao: '魔道',
            shidian_modao_info: '锁定技,准备阶段,你摸两张牌.',
            shidian_taiping: '太平',
            shidian_taiping_info: '锁定技,摸牌阶段摸牌时,你的摸牌数量+2.',
            shanhe_modao: '魔道',
            shanhe_modao_info: '锁定技,准备阶段,你摸两张牌.',
            shidian_lunhui: '轮回',
            shidian_lunhui_info: '锁定技,准备阶段,若你的体力小于等于2,则你与场上出你以外体力最高且大于2的敌方角色交换体力值.',
            shidian_wangsheng: '往生',
            shidian_wangsheng_info: '锁定技,出牌阶段开始时,你视为随机使用一张【南蛮入侵】或【万箭齐发】.',
            shidian_fanshi: '反噬',
            shidian_fanshi_info: '锁定技,当你每回合非首次受到伤害后,你对随机一名敌方角色造成1点伤害.',
            shidian_huoxing: '火刑',
            shidian_huoxing_info: '锁定技,当你死亡时,你对所有敌方角色造成1点火焰伤害.',
            shanhe_huoxing: '火刑',
            shanhe_huoxing_info: '锁定技,当你死亡时,你对所有敌方角色造成1点火焰伤害.',
            shidian_guihuo: '鬼火',
            shidian_guihuo_info: '锁定技,结束阶段,你对一名其他角色造成1点火焰伤害.',
            shanhe_yaowua: '耀武',
            shanhe_yaowua_info: '锁定技,一名角色使用红色【杀】对你造成伤害时,该角色回复1点体力或摸一张牌.',
            shidian_luolei: '落雷',
            shidian_luolei_info: '锁定技,准备阶段,你对一名其他角色造成1点雷电伤害.',
            shidian_shanbeng: '山崩',
            shidian_shanbeng_info: '锁定技,当你死亡时,你令所有其他角色弃置其装备区内的所有牌.',
            shidian_mingbao: '冥爆',
            shidian_mingbao_info: '锁定技,当你死亡时,你对所有其他角色造成1点火焰伤害.',
            shidian_leizhu: '雷诛',
            shidian_leizhu_info: '锁定技,当你死亡时,你对所有敌方角色造成1点雷电伤害.',
            shanhe_leizhu: '雷诛',
            shanhe_leizhu_info: '锁定技,当你死亡时,你对所有敌方角色造成1点雷电伤害.',
            jiange_tianyun: '天陨',
            jiange_tianyun_info: '结束阶段,你可以失去1点体力,令一名敌方角色随机受到2~3点火焰伤害并弃置其装备区里的所有牌.',
            shidian_abi: '阿鼻',
            shidian_abi_info: '锁定技,当你受到伤害后,你对伤害来源造成1点随机属性伤害.',
            shidian_enyuan: '恩怨',
            shidian_enyuan_info: '锁定技,其他角色每令你回复1点体力,该角色摸一张牌;其他角色每对你造成一次伤害,须给你一张♥️️手牌,否则该角色失去1点体力.',
            shidian_leizhou: '雷咒',
            shidian_leizhou_info: '锁定技,准备阶段,你对随机一名敌方角色造成1点雷电伤害.',
            shidian_leifu: '雷缚',
            shidian_leifu_info: '锁定技,结束阶段,你随机令一名敌方角色进入连环状态.',
            shanhe_shiyou: '拾忧',
            shanhe_shiyou_info: '其他角色于弃牌阶段弃置的牌进入弃牌堆前,你可以选择其中任意张花色各不相同的牌获得之.',
            shidian_shiyou: '拾忧',
            shidian_shiyou_info: '其他角色于弃牌阶段弃置的牌进入弃牌堆前,你可以选择其中任意张花色各不相同的牌获得之.',
            shidian_wanghun: '忘魂',
            shidian_wanghun_info: '锁定技,你死亡时,令随机一名敌方角色随机失去一个技能(觉醒技除外),并在牌堆中加入两张回魂.',
            shidian_wangshi: '往事',
            shidian_wangshi_info: '锁定技,你存活时,敌方角色的准备阶段,令其于本回合不能使用或打出随机一种类型的牌(基本、锦囊、装备).',
            mitan_yinci: '隐刺',
            mitan_yinci_info: '锁定技,己方对与其距离为1的角色使用卡牌时,目标无法响应.',
            jiguan_dunfan: '盾反',
            jiguan_dunfan_info: '锁定技,当你受到【杀】的伤害后,对伤害来源造成X点伤害,X为你本回合受到【杀】的伤害的次数.',
            jiguan_dunfana: '盾反',
            jiguan_dunfana_info: '锁定技,当你受到【杀】的伤害后,对伤害来源造成1点伤害.',
            jiguan_tongdun: '铜盾',
            jiguan_tongdun_info: '锁定技,跳过你的出牌阶段;当其他己方角色成为敌方角色【杀】的目标时,将目标改为你.',
            jiguan_lianren: '连刃',
            jiguan_lianren_info: '锁定技,出牌阶段你可多出三张【杀】;出牌阶段开始时,你从牌堆获得三张【杀】.',
            jiguan_lianrena: '连刃',
            jiguan_lianrena_info: '锁定技,出牌阶段你可多出两张【杀】;出牌阶段开始时,你从牌堆获得两张【杀】.',
            jiguan_lianrenb: '连刃',
            jiguan_lianrenb_info: '锁定技,出牌阶段你可多出一张【杀】;出牌阶段开始时,你从牌堆获得一张【杀】.',
            jiguan_huoren: '火刃',
            jiguan_huoren_info: '锁定技,若你处于燃火状态:你使用【杀】时,木傀失去1个<机火>将其改为火【杀】;你使用火【杀】造成的伤害+1,且需要两张【闪】才能抵消.',
            jiguan_huorena: '火刃',
            jiguan_huorena_info: '锁定技,若你处于燃火状态:你使用【杀】时,木傀失去1个<机火>将其改为火【杀】;你使用火【杀】造成的伤害+1.',
            jiguan_jihuo: '机火',
            jiguan_jihuo_info: '锁定技,己方角色使用【杀】后,你获得2个<机火>.累计6个<机火>后,机刃进入燃火状态.机刃已经处于燃火状态时无法再获得<机火>,失去所有<机火>后结束机刃的燃火状态.',
            jiguan_jihuo_chosen: '燃火',
            jiguan_jihuoa: '机火',
            jiguan_jihuoa_info: '锁定技,己方角色使用【杀】后,你获得1个<机火>.累计4个<机火>后,机刃进入燃火状态.机刃已经处于燃火状态时无法再获得<机火>,失去所有<机火>后结束机刃的燃火状态.',
            jiguan_jihuoa_chosen: '燃火',
            jiguan_chongzhuang: '冲撞',
            jiguan_chongzhuang_info: '锁定技,出牌阶段开始时,对一名随机敌方角色造成3点伤害.若你与其距离大于1,则距离每增加1点,伤害减少1点.成功以此法造成伤害后,再对其他敌方角色造成1点伤害.机刃燃火状态下此技能造成的伤害+1.',
            jiguan_chongzhuanga: '冲撞',
            jiguan_chongzhuanga_info: '锁定技,出牌阶段开始时,对一名随机敌方角色造成2点伤害.若你与其距离大于1,则距离每增加1点,伤害减少1点.成功以此法造成伤害后,再对其他敌方角色造成1点伤害.',
            jiguan_chongneng: '充能',
            jiguan_chongneng_info: '锁定技,己方角色摸牌阶段多摸X张牌,Ⅹ为你<机火>的数量,且至少为3.',
            jiguan_chongnenga: '充能',
            jiguan_chongnenga_info: '锁定技,己方角色摸牌阶段多摸X张牌,Ⅹ为你<机火>的数量,且至少为1.',
            jiguan_chongnengb: '充能',
            jiguan_chongnengb_info: '锁定技,己方角色摸牌阶段多摸X张牌,Ⅹ为你<机火>的数量.',
            jiguan_xushi: '蓄势',
            jiguan_xushi_info: '锁定技,出牌阶段开始时,展示并获得牌堆顶的四张牌:若其中有【杀】,则所有己方角色从牌堆获得一张【杀】,虎爪下个回合使用【杀】不限次数,虎尾下个回合伤害+1;否则你从牌堆获得四张【杀】.',
            jiguan_xushia: '蓄势',
            jiguan_xushia_info: '锁定技,出牌阶段开始时,展示并获得牌堆顶的三张牌:若其中有【杀】,则所有己方角色从牌堆获得一张【杀】,虎爪下个回合使用【杀】不限次数,虎尾下个回合伤害+1;否则你从牌堆获得三张【杀】.',
            jiguan_xushib: '蓄势',
            jiguan_xushib_info: '锁定技,出牌阶段开始时,展示并获得牌堆顶的两张牌:若其中有【杀】,则所有己方角色从牌堆获得一张【杀】,虎爪下个回合使用【杀】不限次数,虎尾下个回合伤害+1;否则你从牌堆获得两张【杀】.',
            jiguan_lizhua: '利爪',
            jiguan_lizhua_info: '锁定技,你的【杀】无视防具且伤害+1.',
            jiguan_lizhuaa: '利爪',
            jiguan_lizhuaa_info: '锁定技,你的【杀】无视防具.',
            jiguan_gelie: '割裂',
            jiguan_gelie_info: '锁定技,当你使用【杀】对敌方角色造成伤害后,受伤角色获得一个<流血>标记.拥有<流血>标记的角色回合开始时失去X点体力,失去一个<流血>标记.',
            jiguan_geliea: '割裂',
            jiguan_geliea_info: '锁定技,当你使用【杀】对敌方角色造成伤害后,受伤角色获得一个<流血>标记.拥有<流血>标记的角色回合开始时失去1点体力,失去所有<流血>标记.',
            jiguan_liuxue: '流血',
            jiguan_liuxuea: '流血',
            jiguan_huxiao: '虎啸',
            jiguan_huxiao_info: '锁定技,你使用【杀】无距离限制且不限次数.',
            jiguan_siming: '嘶鸣',
            jiguan_siming_info: '锁定技,出牌阶段开始时,令所有敌方角色弃置手中数量最多的一种花色的牌,对其造成1点伤害.',
            jiguan_siminga: '嘶鸣',
            jiguan_siminga_info: '锁定技,出牌阶段开始时,令所有敌方角色弃置手中数量最多的一种花色的牌.',
            jiguan_zhenchi: '振翅',
            jiguan_zhenchi_info: '锁定技,当你受到【杀】的伤害时,若【杀】的来源与你距离大于1,你有50%几率防止此【杀】造成的伤害.',
            jiguan_yufeng: '御风',
            jiguan_yufeng_info: '锁定技,回合结束后,从牌堆获得两张【闪】;你使用【闪】后,摸两张牌.',
            jiguan_fukong: '浮空',
            jiguan_fukong_info: '锁定技,敌方角色计算与己方其他角色的距离+1,己方角色计算与敌方角色的距离-1.',
            jiguan_fuchong: '俯冲',
            jiguan_fuchong_info: '锁定技,出牌阶段开始时,你令隼爪视为对敌方角色随机使用两张不可响应的【杀】.',
            jiguan_fuchonga: '俯冲',
            jiguan_fuchonga_info: '锁定技,出牌阶段开始时,你令隼爪视为对敌方角色随机使用一张不可响应的【杀】.',
            jiguan_fuchongb: '俯冲',
            jiguan_fuchongb_info: '锁定技,出牌阶段开始时,你令隼爪视为对敌方角色随机使用一张【杀】.',
            jiguan_tieshan: '铁山',
            jiguan_tieshan_info: '锁定技,出牌阶段你每使用三张【杀】后,对所有距离为2及以内的敌方角色造成1点伤害.',
            jiguan_tiewei: '铁尾',
            jiguan_tiewei_info: '锁定技,你的【杀】指定所有距离为2及以内的敌方角色为目标.',
            jiguan_hengsao: '横扫',
            jiguan_hengsao_info: '锁定技,结束阶段,对距离为2及以内的敌方角色造成2点伤害,对其他敌方角色造成1点伤害.',
            jiguan_hengsaoa: '横扫',
            jiguan_hengsaoa_info: '锁定技,结束阶段,对随机一名敌方角色造成1点伤害.',
            jiguan_mengzhua: '猛爪',
            jiguan_mengzhua_info: '锁定技,你的【杀】伤害+1,你使用【杀】造成伤害后,弃置目标角色的一张牌.',
            jiguan_mengji: '猛击',
            jiguan_mengji_info: '锁定技,结束阶段,若你本回合使用了两张及以上的【杀】,视为对随机两名敌方角色使用一张不可响应的【杀】,造成伤害后弃置其装备区内的所有牌.',
            jiguan_mengjia: '猛击',
            jiguan_mengjia_info: '锁定技,结束阶段,若你本回合使用了两张及以上的【杀】,视为对随机一名敌方角色使用一张不可响应的【杀】.',
            jiguan_dangji: '宕机',
            jiguan_dangji_info: '锁定技,僵直状态下,你受到的伤害翻倍,且你的其他技能均失效.',
            jiguan_dunlie: '盾裂',
            jiguan_dunlie_info: '锁定技,当你累计受到4次【杀】的伤害后,进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_dunliea: '盾裂',
            jiguan_dunliea_info: '锁定技,当你累计受到3次【杀】的伤害后,进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_dunlieb: '盾裂',
            jiguan_dunlieb_info: '锁定技,当你累计受到2次【杀】的伤害后,进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_zhatang: '炸膛',
            jiguan_zhatang_info: '锁定技,当你在燃火状态下累计受到8点伤害后,将会直接结束燃火状态,木傀失去所有<机火>,且所有己方角色进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_zhatanga: '炸膛',
            jiguan_zhatanga_info: '锁定技,当你在燃火状态下累计受到5点伤害后,将会直接结束燃火状态,木傀失去所有<机火>,且所有己方角色进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_zhatangb: '炸膛',
            jiguan_zhatangb_info: '锁定技,当你在燃火状态下累计受到3点伤害后,将会直接结束燃火状态,木傀失去所有<机火>,且所有己方角色进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_zhuiluo: '坠落',
            jiguan_zhuiluo_info: '锁定技,僵直状态下,你受到的伤害翻倍,且你的其他技能均失效.',
            jiguan_shiheng: '失衡',
            jiguan_shiheng_info: '锁定技,当你累计受到8次伤害后,所有己方角色进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_shihenga: '失衡',
            jiguan_shihenga_info: '锁定技,当你累计受到6次伤害后,所有己方角色进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_shihengb: '失衡',
            jiguan_shihengb_info: '锁定技,当你累计受到4次伤害后,所有己方角色进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_daodi: '倒地',
            jiguan_daodi_info: '锁定技,若虎爪、虎尾均进入僵直状态或死亡后,你进入僵直状态.僵直状态下,你受到的伤害翻倍,且你的其他技能均失效.',
            jiguan_pozhua: '破爪',
            jiguan_pozhua_info: '锁定技,当你累计受到5次伤害后,进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_pozhuaa: '破爪',
            jiguan_pozhuaa_info: '锁定技,当你累计受到4次伤害后,进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_pozhuab: '破爪',
            jiguan_pozhuab_info: '锁定技,当你累计受到3次伤害后,进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_powei: '破尾',
            jiguan_powei_info: '锁定技,当你累计受到5次伤害后,进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_poweia: '破尾',
            jiguan_poweia_info: '锁定技,当你累计受到4次伤害后,进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_poweib: '破尾',
            jiguan_poweib_info: '锁定技,当你累计受到3次伤害后,进入僵直状态.僵直状态下,你的其他技能均失效.',
            jiguan_jiangzhi: '僵直',
            jiguan_jiangzhi_info: '僵直状态持续4个回合.如果在出牌阶段进入僵直状态,直接结束出牌阶段.',
            jgjn_sunchi: '隼翅',
            jgjn_sunchi_info: '锁定技,敌方角色与你的距离+1,你与敌方角色距离-1.你使用【闪】后,50%几率摸一张牌.',
            jgjn_jigong: '机弓',
            jgjn_jigong_info: '锁定技,你的攻击距离+1.每轮限1次,你使用【杀】造成伤害时伤害+1.',
            jgjn_jidun: '机盾',
            jgjn_jidun_info: '锁定技,每轮限1次,你受到伤害时令伤害-1.',
            jgjn_quanzhua: '拳爪',
            jgjn_quanzhua_info: '锁定技,你使用的【杀】有50%几率伤害+1且造成伤害后弃置目标角色1张牌.',
            jgjn_jiren: '机刃',
            jgjn_jiren_info: '锁定技,你出牌阶段可以多出1张【杀】.你使用火【杀】造成的伤害+1,且需要使用两张【闪】才能抵消.',
            hulao_shenjian: '神剑',
            hulao_shenjian_info: '锁定技,你的【杀】和【决斗】指定目标后,对目标造成1点伤害.',
            hulao_liechu: '烈杵',
            hulao_liechu_info: '锁定技,你每回合使用的第一张【杀】和第一张【决斗】造成伤害后,获得牌堆顶五张牌中的所有装备牌和基本牌.',
            hulao_fumo: '伏魔',
            hulao_fumo_info: '锁定技,当你在回合外失去装备区里的牌后,随机弃置每名敌方角色两张牌,优先弃置装备区里的牌.',
            shenshou_longlie2: '龙烈',
            shenshou_longlie2_info: '',
            shenshou_langri2: '狼日',
            shenshou_langri2_info: '',
            fumo2: '破防',
            fumo2_info: '',
            hulao_jingang: '金刚',
            hulao_jingang_info: '锁定技,当你受到其他角色造成的伤害后,伤害来源选择交给你一张牌或受到1点伤害.伤害来源选择交给你牌时,每回合每种花色的牌限一次.',
            hulao_xiuluo: '修罗',
            hulao_xiuluo_info: '锁定技,游戏开始时,你随机获得下列技能中的一个:【神剑】、【烈杵】、【伏魔】、【金刚】.当你体力值首次降至三分之二及以下后,再随机获得上述四个技能中的一个,并进行一个额外回合.当你体力值首次降至三分之一及以下后,获得【狂戟】,并在当前结算完毕后,立即进行一个额外回合.',
            hulao_xiuluoa: '修罗',
            hulao_xiuluoa_info: '锁定技,游戏开始时,你随机获得下列技能中的一个:【神剑】、【烈杵】、【伏魔】、【金刚】.当你体力值首次降至一半及以下后,再随机获得上述四个技能中的一个,并在当前结算完毕后,立即进行一个额外回合.',
            hulao_kuangji: '狂戟',
            hulao_kuangji_info: '摸牌阶段,弃置所有手牌,将手牌摸至十张.你每回合可以多使用一张【杀】,你的【杀】和【决斗】可以多指定两个目标.当你使用【杀】和【决斗】对敌方角色造成伤害后,随机弃置其一张手牌.',
            hulao_zhankai: '战铠',
            hulao_zhankai_info: '锁定技,你的手牌上限为12.当你受到1点伤害后,伤害来源弃置装备区里的所有牌(没有装备牌改为随机两张手牌),你摸两张牌并从弃牌堆获得一张【杀】.',
            hulao_shenji: '神戟',
            hulao_shenji_info: '判定阶段,你可以弃置两张手牌,弃置你判定区里的牌.摸牌阶段,你多摸两张牌;出牌阶段,你可以多使用两张【杀】,你的【杀】可以多指定两名角色为目标.',
            hulao_yangwu: '扬武',
            hulao_yangwu_info: '锁定技,敌方有角色使用【无懈可击】时,该角色随机弃置两张牌.',
            hulao_baguan: '霸关',
            hulao_baguan_info: '其他角色的回合结束后,你进行一个额外的回合.此额外回合的摸牌阶段,你视为拥有技能【英姿】.',
            hulao_zhanjia: '战甲',
            hulao_zhanjia_info: '锁定技,每回合限一次,当你受到大于2点的伤害时,将此伤害减至2点,摸两张牌.',
            hulao_xuli: '蓄力',
            hulao_xuli_info: '当你受到伤害后,若你的损失体力值大于当前体力值,当前事件结算完毕后,你将体力上限减至当前体力值,将手牌摸至当前体力值,结束当前回合,开始你的回合(进入下一阶段).',
            hulao_baguana: '霸关',
            hulao_baguana_info: '其他角色的回合结束后,你进行一个额外的回合.',
            hulao_yazi: '睚眦',
            hulao_yazi_info: '锁定技,你的【杀】指定上一次对你造成伤害的敌方角色为目标.',
            hulao_liubi: '六臂',
            hulao_liubi_info: '锁定技,敌方角色的回合结束后,你进行一个额外的回合.',
            liezhuan_sice: '伺策',
            liezhuan_sice_info: '锁定技,其他角色的回合结束时,若你的手牌数大于体力值,你进行一个额外的回合(每轮限两次).',
            liezhuan_hemou: '合谋',
            liezhuan_hemou_info: '锁定技,拥有<合谋>的角色造成或受到伤害时,其他拥有<合谋>的角色摸一张牌.拥有<合谋>的角色死亡时,其他拥有<合谋>的角色死亡.',
            liezhuan_zhengbei: '整备',
            liezhuan_zhengbei_info: '锁定技,游戏开始时,随机使用牌堆内武器,防具,防御马,进攻马各一张.',
            liezhuan_weihuo: '为祸',
            liezhuan_weihuo_info: '锁定技,当己方角色对其他角色造成伤害时,你令伤害值+1.',
            liezhuan_xunxin: '寻衅',
            liezhuan_xunxin_info: '锁定技,准备阶段,对随机敌方角色使用牌堆底中的【杀】和普通锦囊牌,洗牌.',
            liezhuan_yuli: '驭利',
            liezhuan_yuli_info: '锁定技,当你受到伤害后,伤害来源随机获得你的一张牌,视为其对你选择的另一名角色使用一张【决斗】.',
            hulao_zhanjiaa: '战甲',
            hulao_zhanjiaa_info: '锁定技,每回合限一次,当你受到大于2点的伤害时,你摸两张牌.',
            hulao_xulia: '蓄力',
            hulao_xulia_info: '当你受到伤害后,若你的损失体力值大于当前体力值,当前事件结算完毕后,你将体力上限减至当前体力值,将手牌摸至当前体力值,结束当前回合,开始你的回合(进入下一阶段).',
            danji_fengling: '奉令',
            danji_fengling_info: '锁定技,每轮开始时你获得一个<令>,至多拥有三个<令>.每当有角色进入濒死状态时你失去一个<令>.当你拥有大于等于:一个<令>时,你手牌无上限且摸牌阶段多摸五张牌;两个<令>时,你受到伤害后摸一张牌;三个<令>时,你使用牌无距离和次数限制且造成的伤害+1.',
            qianli_fengling: '奉令',
            qianli_fengling_info: '锁定技,每轮开始时你获得一个<令>,至多拥有三个<令>.每当有角色进入濒死状态时你失去一个<令>.当你拥有大于等于:一个<令>时,你手牌无上限且摸牌阶段多摸五张牌;两个<令>时,你使用【杀】或伤害类锦囊可以额外指定两个目标;三个<令>时,你使用牌无距离和次数限制且造成的伤害+1.',
            qianli_fenglinga: '奉令',
            qianli_fenglinga_info: '锁定技,每轮开始时你获得一个<令>,至多拥有三个<令>.每当有角色进入濒死状态时你失去一个<令>.当你拥有大于等于:一个<令>时,你手牌无上限且摸牌阶段多摸三张牌;两个<令>时,你使用【杀】或伤害类锦囊可以额外指定一个目标;三个<令>时,你使用牌无距离和次数限制.',
            danji_zhangshi: '仗势',
            danji_zhangshi_info: '锁定技,当你在摸牌阶段外获得牌后,进行一次判定,若结果为:红色,对所有敌方角色造成1点伤害;黑色,随机弃置所有敌方角色各一张牌.',
            danji_zhangshia: '仗势',
            danji_zhangshia_info: '锁定技,当你在摸牌阶段外获得牌后,进行一次判定,若结果为:红色,对随机一名敌方角色造成1点伤害;黑色,随机弃置一名敌方角色一张牌.',
            qianli_zhangshi: '仗势',
            qianli_zhangshi_info: '锁定技,当你在摸牌阶段外获得牌后,进行一次判定,若结果为:红色,所有敌方角色失去1点体力;黑色,随机弃置所有敌方角色各一张牌.',
            qianli_hengjiang: '横江',
            qianli_hengjiang_info: '锁定技,当你造成伤害后,随机横置一名敌方角色.每当有角色横置时,你摸一张牌.',
            qianli_xunwen: '询文',
            qianli_xunwen_info: '锁定技,当你受到卡牌造成的伤害后,伤害来源随机弃置一张与该卡牌花色相同的牌,若伤害来源没有同花色的牌可以弃置,你摸两张牌.',
            danji_shenduan: '慎断',
            danji_shenduan_info: '当你的黑色基本牌或装备牌因弃置而进入弃牌堆后,你可以将其当做【兵粮寸断】使用(无距离限制).',
            danji_yonglue: '勇略',
            danji_yonglue_info: '其他角色的判定阶段开始时,你可以弃置其判定区里的一张牌.若该角色在你攻击范围内,你摸一张牌.若其在你攻击范围外,视为你对其使用一张【杀】.',
            danji_yisuan: '亦算',
            danji_yisuan_info: '出牌阶段限一次,当你使用的锦囊牌进入弃牌堆时,你可以减1点体力上限,从弃牌堆获得之.',
            hulao_zhankaia: '战铠',
            hulao_zhankaia_info: '锁定技,你的手牌上限为8.当你受到1点伤害后,伤害来源随机弃置一张牌(优先装备区),你摸一张牌.',
            liezhuan_zhankai: '战铠',
            liezhuan_zhankai_info: '锁定技,你的手牌上限为8.当你受到1点伤害后,伤害来源随机弃置一张牌(优先装备区),你摸一张牌.',
            liezhuan_shenkai: '神铠',
            liezhuan_shenkai_info: '锁定技,你的手牌上限为8.当你受到伤害后,伤害来源随机弃置一张牌(优先装备区),你摸一张牌.',
            shanhe_xili: '系力',
            shanhe_xili_info: '每回合限一次,你的回合外,当其他拥有<系力>技能的角色在其回合内对没有<系力>技能的角色造成伤害时,你可以弃置一张牌,令此伤害+1,你与其各摸两张牌.',
            danji_anjian: '暗箭',
            danji_anjian_info: '锁定技,当你使用【杀】指定目标后,若你不在其攻击范围内,则此杀伤害+1且无视其防具.若其因执行此【杀】的效果受到伤害而进入濒死状态,则其不能使用【桃】直到此濒死事件结算结束.',
            liezhuan_anjian: '暗箭',
            liezhuan_anjian_info: '锁定技,当你使用【杀】指定目标后,若你不在其攻击范围内,则此杀伤害+1且无视其防具.若其因执行此【杀】的效果受到伤害而进入濒死状态,则其不能使用【桃】直到此濒死事件结算结束.',
            danji_xianfeng: '先锋',
            danji_xianfeng_info: '锁定技,敌方角色计算与己方其他角色的距离+1.',
            danji_yangbai: '佯败',
            danji_yangbai_info: '锁定技,当你受到敌方角色【杀】造成的伤害后,本回合伤害来源计算与你的距离+1.敌方角色回合结束时,若你不在其攻击范围内,对其造成X-1点伤害并弃置其武器牌,X为其与你的距离.',
            qianli_yangbai: '佯败',
            qianli_yangbai_info: '锁定技,当你受到敌方角色【杀】造成的伤害后,本回合伤害来源计算与你的距离+1.敌方角色回合结束时,若你不在其攻击范围内,对其造成2点伤害并弃置其武器牌.',
            hulao_wushuang: '无双',
            hulao_wushuang_info: '锁定技,当你使用【杀】指定一个目标后,该角色需依次使用两张【闪】才能抵消此【杀】;当你使用【决斗】指定一个目标后,或成为一名角色使用【决斗】的目标后,该角色每次响应此【决斗】需依次打出两张【杀】.',
            hulao_shenjia: '神戟',
            hulao_shenjia_info: '判定阶段,你可以弃置两张手牌,弃置你判定区里的牌.摸牌阶段,你多摸两张牌;你的【杀】可以多指定两名角色为目标.',
            shidian_pingdeng: '平等',
            shidian_pingdeng_info: '锁定技,当你死亡时,你对体力最多的一名敌方角色造成2点随机属性伤害,再对一名体力最多的敌方角色造成1点随机属性伤害.',
            nianshou_xishenga: '牺牲',
            nianshou_xishenga_info: '锁定技,当你死亡时,你的队友随机摸一张牌或回复1点体力.',
            danji_jiayan: '假宴',
            danji_jiayan_info: '锁定技,当你受到伤害时,你随机弃置一张手牌防止此伤害,并令伤害来源摸一张牌.',
            danji_cangdao: '藏刀',
            danji_cangdao_info: '首轮结束时,失去<假宴>,所有未受伤的己方角色获得技能<抽刀>.',
            danji_cangdaoa: '藏刀',
            danji_cangdaoa_info: '首轮结束时,失去<假宴>,所有未受伤的己方角色获得技能<抽刀>.',
            danji_cangdaob: '藏刀',
            danji_cangdaob_info: '首轮结束时,失去<假宴>,所有未受伤的己方角色获得技能<抽刀>.',
            danji_choudao: '抽刀',
            danji_choudao_info: '锁定技,你使用牌无距离限制.当你使用牌指定目标后,随机选择其中一名敌方角色,随机弃置其两张牌并对其造成1点伤害.',
            danji_choudaoa: '抽刀',
            danji_choudaoa_info: '锁定技,你使用牌无距离限制.当你使用牌指定目标后,随机选择其中一名敌方角色,随机弃置其一张牌并对其造成1点伤害.',
            danji_choudaob: '抽刀',
            danji_choudaob_info: '锁定技,你使用牌无距离限制.当你使用牌指定目标后,随机选择其中一名敌方角色,随机弃置其一张牌.',
            danji_jiashu: '家书',
            danji_jiashu_info: '锁定技,当你在摸牌阶段外获得牌后,每获得一张牌则获得1个>家书"标记,当你拥有的>家书<标记大于等于6时,移除所有>家书<标记,并将身份变为敌方阵营.失去<家书>,获得<敬义>.',
            danji_jingyi: '敬义',
            danji_jingyi_info: '锁定技,己方角色使用红色牌无距离和次数限制,且使用红色牌造成伤害时伤害+1,受到红色牌伤害时伤害-1.',
            fenghuo_zhongyong: '忠勇',
            fenghuo_zhongyong_info: '当你使用【杀】后,你可以将此【杀】以及目标角色使用的【闪】交给一名其他角色,若其获得的牌中有红色,则其可以对你攻击范围内的角色使用一张【杀】.若其获得的牌中有黑色,其摸一张牌.',
            zhongye_jiaomu: '角木',
            zhongye_jiaomu_info: '锁定技,当你使用锦囊牌后,随机一名己方角色摸一张牌.',
            zhongye_kangjin: '亢金',
            zhongye_kangjin_info: '锁定技,当你成为锦囊牌的目标后,随机一名己方角色摸一张牌.',
            zhongye_yihuo: '翼火',
            zhongye_yihuo_info: '锁定技,你造成的伤害视为火焰伤害.当你造成火焰伤害后,受伤角色弃一张牌.',
            zhongye_xingri: '星日',
            zhongye_xingri_info: '锁定技,你造成的伤害视为火焰伤害.当你造成火焰伤害后,你摸一张牌.',
            zhongye_kuimu: '奎木',
            zhongye_kuimu_info: '锁定技,当你使用【杀】造成伤害后,所有敌方角色受到1点伤害.',
            zhongye_canshui: '参水',
            zhongye_canshui_info: '锁定技,当你使用【杀】造成伤害后,所有己方角色回复1点体力.',
            tianshukuafu_zhuria: '逐日',
            tianshukuafu_zhuria_info: '锁定技,你使用红色牌时摸一张牌.当你成为【杀】或普通锦囊牌的目标后,结算完毕后将此牌放置在牌堆底.',
            qugui2_aotang: '熬汤',
            qugui2_aotang_info: '锁定技,回合开始时,你令随机一名敌方角色遗忘所有武将技能直到你的下回合开始.',
            qugui2_yunjv: '云飓',
            qugui2_yunjv_info: '锁定技,敌方角色的回合结束时,该角色随机弃置一张手牌和一张装备区里的牌.',
            qugui2_yunjva: '云飓',
            qugui2_yunjva_info: '锁定技,敌方角色的回合结束时,该角色随机弃置一张手牌.',
            Tianshu_yunjv: '云飓',
            Tianshu_yunjv_info: '锁定技,敌方角色的回合结束时,该角色随机弃置三张手牌.',
            Tianshu_yunjva: '云飓',
            Tianshu_yunjva_info: '锁定技,敌方角色的回合结束时,该角色随机弃置两张手牌.',
            fenghuo_guimei: '鬼魅',
            fenghuo_guimei_info: '锁定技,你不会被翻面;你跳过摸牌阶段时,摸一张牌;你跳过出牌阶段时,本回合手牌无上限.',
            qugui2_guimei: '鬼魅',
            qugui2_guimei_info: '锁定技,你不会被翻面;你跳过摸牌阶段时,摸一张牌;你跳过出牌阶段时,本回合手牌无上限.',
            qugui2_guimeib: '鬼魅',
            qugui2_guimeib_info: '锁定技,你不会被翻面;你跳过摸牌阶段时,摸一张牌;你跳过出牌阶段时,本回合手牌无上限.',
            liezhuan_weiya: '威压',
            liezhuan_weiya_info: '锁定技,出牌阶段开始时,若你的手牌数为全场最多,你对所有敌方角色造成1点伤害.',
            qugui2_xixing: '吸星',
            qugui2_xixing_info: '锁定技,准备阶段,你对所有敌方角色造成1点雷电伤害,你回复1点体力.',
            qugui2_xixinga: '吸星',
            qugui2_xixinga_info: '锁定技,准备阶段,你对敌方体力最多的一名角色造成1点雷电伤害,你回复1点体力.',
            qugui2_xixingb: '吸星',
            qugui2_xixingb_info: '锁定技,准备阶段,你对敌方体力最多的一名角色造成1点雷电伤害,你回复1点体力.',
            qugui2_xixingc: '吸星',
            qugui2_xixingc_info: '锁定技,准备阶段,你对敌方体力最多的一名角色造成1~2点雷电伤害,你回复1点体力.',
            qugui2_taiping: '太平',
            qugui2_taiping_info: '锁定技,当你受到敌方角色造成的1点伤害后,伤害来源需弃置两张花色不同的手牌,否则其失去1点体力.',
            qugui2_duanhun: '断魂',
            qugui2_duanhun_info: '锁定技,若你的手牌数小于等于1,你受到非【杀】的伤害-1.',
            qugui2_taipingb: '太平',
            qugui2_taipingb_info: '锁定技,当你受到敌方角色造成的伤害后,伤害来源需弃置两张花色不同的手牌,否则其失去1点体力.',
            qugui2_taipinga: '太平',
            qugui2_taipinga_info: '锁定技,当你受到敌方角色造成的伤害后,伤害来源需弃置两张花色不同的手牌,否则其失去1点体力.',
            liezhuan_taiping: '太平',
            liezhuan_taiping_info: '锁定技,当你受到敌方角色造成的伤害后,伤害来源需弃置两张花色不同的手牌,否则其失去1点体力.',
            qugui2_baolian: '暴敛',
            qugui2_baolian_info: '锁定技,准备阶段,你放弃摸牌,改为获得每名敌方角色装备区里各一张牌.若有角色装备区里没有牌,则改为随机获得其一张手牌.',
            qugui2_mizui: '迷醉',
            qugui2_mizui_info: '你使用的红色或属性【杀】造成伤害后,你可以弃置目标的两张牌.',
            qugui2_mizuib: '迷醉',
            qugui2_mizuib_info: '你使用的红色或属性【杀】造成伤害后,你可以弃置目标的一张牌.',
            qugui2_mizuia: '迷醉',
            qugui2_mizuia_info: '你使用的红色或属性【杀】造成伤害后,你可以弃置目标的一张牌.',
            qugui2_qiangzheng: '强征',
            qugui2_qiangzheng_info: '锁定技,结束阶段,若敌方有角色的手牌数小于等于2,则你获得其手牌.',
            qugui2_qiangzhengb: '强征',
            qugui2_qiangzhengb_info: '锁定技,结束阶段,若敌方有角色的手牌数等于1,则你获得其手牌.',
            qugui2_qiangzhenga: '强征',
            qugui2_qiangzhenga_info: '锁定技,结束阶段,若敌方有角色的手牌数等于1,则你获得其手牌.',
            fenghuo_xiaoshou: '枭首',
            fenghuo_xiaoshou_info: '锁定技,准备阶段,你对一名体力值大于你的敌方角色造成2点伤害.',
            Tianshu_xiaoshou: '枭首',
            Tianshu_xiaoshou_info: '锁定技,准备阶段,你对随机一名敌方角色造成2点伤害.',
            Tianshu_xiaoshoua: '枭首',
            Tianshu_xiaoshoua_info: '锁定技,准备阶段,你对随机一名敌方角色造成1点伤害.',
            qugui2_xiaoshou: '枭首',
            qugui2_xiaoshou_info: '锁定技,准备阶段,你对一名体力值大于等于你的敌方角色造成2点伤害.',
            qugui2_xiaoshoub: '枭首',
            qugui2_xiaoshoub_info: '锁定技,准备阶段,你对一名体力值大于你的敌方角色造成2点伤害.',
            qugui2_xiaoshouc: '枭首',
            qugui2_xiaoshouc_info: '锁定技,准备阶段,你对一名体力值大于你的敌方角色造成2点伤害.',
            qugui2_xiaoshoua: '枭首',
            qugui2_xiaoshoua_info: '锁定技,准备阶段,你对一名体力值大于你的敌方角色造成1点伤害.',
            fenghuo_manji: '蛮击',
            fenghuo_manji_info: '你使用【杀】指定单一目标后,你可以弃置该角色一张手牌.若此牌是【杀】,你本次【杀】的伤害+1;若此牌不是【杀】,你获得之.',
            qugui2_manji: '蛮击',
            qugui2_manji_info: '你使用【杀】指定单一目标后,你可以弃置该角色一张手牌.若此牌是【杀】,你本次【杀】的伤害+1;若此牌不是【杀】,你获得之.',
            qugui2_manjib: '蛮击',
            qugui2_manjib_info: '你使用【杀】指定单一目标后,你可以弃置该角色一张手牌.若此牌是【杀】,你本次【杀】的伤害+1;若此牌不是【杀】,你获得之.',
            qugui2_manjia: '蛮击',
            qugui2_manjia_info: '你使用【杀】指定单一目标后,你可以弃置该角色一张手牌.若此牌是【杀】,你本次【杀】的伤害+1.',
            qugui2_shiyv: '施狱',
            qugui2_shiyv_info: '锁定技,摸牌阶段你改为从牌堆中获得4张花色各不同的牌.',
            qugui2_shiyvb: '施狱',
            qugui2_shiyvb_info: '锁定技,摸牌阶段你改为从牌堆中获得4张花色各不同的牌.',
            qugui2_guizhao: '诡招',
            qugui2_guizhao_info: '锁定技,当你于回合内使用一张牌时,若此牌的类别是你本回合第一次使用,则你摸一张牌.',
            qugui2_guizhaob: '诡招',
            qugui2_guizhaob_info: '锁定技,当你于回合内使用一张牌时,若此牌的类别是你本回合第一次使用,则你摸一张牌.',
            fenghuo_duane: '断恶',
            fenghuo_duane_info: '锁定技,当敌方角色于其弃牌阶段弃置了黑色牌,该角色失去1点体力.',
            qugui2_duane: '断恶',
            qugui2_duane_info: '锁定技,当敌方角色于其弃牌阶段弃置了黑色牌,该角色失去1点体力.',
            qugui2_zhoucha: '昼刹',
            qugui2_zhoucha_info: '锁定技,准备阶段,你进行一次判定并获得该判定牌,若结果为红色,你本回合使用【杀】的次数+2.',
            qugui2_yezhong: '夜冢',
            qugui2_yezhong_info: '锁定技,结束阶段,你进行一次判定并获得该判定牌,若结果为黑色,你令所有敌方角色随机弃置一张手牌.',
            Tianshu_zhoucha: '昼刹',
            Tianshu_zhoucha_info: '锁定技,准备阶段,你进行一次判定并获得该判定牌,若结果为红色,你本回合使用【杀】的次数+3.',
            Tianshu_yezhong: '夜冢',
            Tianshu_yezhong_info: '锁定技,结束阶段,你进行一次判定并获得该判定牌,若结果为黑色,你令所有敌方角色随机弃置三张手牌.',
            Tianshu_yezhonga: '夜冢',
            Tianshu_yezhonga_info: '锁定技,结束阶段,你进行一次判定并获得该判定牌,若结果为黑色,你令所有敌方角色随机弃置两张手牌.',
            qugui2_huiyun: '晦运',
            qugui2_huiyun_info: '出牌阶段限一次,你可以展示一名敌方角色的手牌,并弃置其中至多两张牌.你可以弃置一张与该角色弃置的牌牌名相同的牌,对其造成2点伤害.',
            Tianshu_yinsha: '隐煞',
            Tianshu_yinsha_info: '锁定技,若其他角色的攻击范围内不包括你,其不能使用牌指定你为目标,且这些角色不能响应你使用的牌.',
            qugui2_yinsha: '隐煞',
            qugui2_yinsha_info: '锁定技,敌方角色的出牌阶段开始时,若其手牌数大于其体力上限,你本回合不能成为【杀】的目标.',
            qugui2_eli: '恶力',
            qugui2_eli_info: '锁定技,当你对一名敌方角色造成伤害时,若此伤害是该角色第一次受到伤害,你进行一次判定:若结果为红色,此伤害+1;若结果为黑色,你获得【完杀】直到回合结束.',
            qugui2_elia: '恶力',
            qugui2_elia_info: '锁定技,你每回合第一次对敌方角色造成伤害时,你进行一次判定:若结果为红色,此伤害+1;若结果为黑色,你获得【完杀】直到回合结束.',
            qugui2_bingyi: '病疑',
            qugui2_bingyi_info: '锁定技,每回合限一次,当你失去最后的手牌时,己方所有角色将手牌摸至六张.',
            qugui2_bingyia: '病疑',
            qugui2_bingyia_info: '锁定技,每回合限一次,当你失去最后的手牌时,你摸六张牌.',
            Tianshu_bingyi: '病疑',
            Tianshu_bingyi_info: '锁定技,当你失去最后的手牌时,你摸六张牌.',
            qugui2_suoxue: '索穴',
            qugui2_suoxue_info: '你使用【杀】指定目标后,若其手牌数大于你,你可将手牌摸至与该角色相同;若其手牌数小于你,你可弃置一张手牌令此【杀】不能被闪避.',
            Tianshu_suoxue: '索穴',
            Tianshu_suoxue_info: '你使用【杀】指定目标后,若其手牌数大于你,你可将手牌摸至与该角色相同;若其手牌数小于你,你可弃置一张手牌令此【杀】伤害+1且不能被闪避.',
            qugui2_duzhen: '毒针',
            qugui2_duzhen_info: '锁定技,你的回合内,当你使用【杀】或锦囊牌指定敌方角色为目标后,该角色随机弃置一张牌(优先装备区里的牌).',
            qugui2_duzhena: '毒针',
            qugui2_duzhena_info: '锁定技,你的回合内,当你使用牌指定单一敌方角色为目标后,该角色随机弃置一张牌(优先装备区里的牌).',
            fenghuo_duzhen: '毒针',
            fenghuo_duzhen_info: '锁定技,你的回合内,当你使用【杀】或锦囊牌指定敌方角色为目标后,该角色随机弃置一张牌(优先装备区里的牌).',
            qugui2_mingchong: '冥虫',
            qugui2_mingchong_info: '锁定技,你死亡时,若有其他己方角色存活,该角色获得技能【毒针】并将手牌摸至体力上限.',
            qugui2_mingchonga: '冥虫',
            qugui2_mingchonga_info: '锁定技,你死亡时,若有其他己方角色存活,该角色获得技能【毒针】.',
            qugui2_guixi: '鬼吸',
            qugui2_guixi_info: '锁定技,当你受到伤害后,你进行一次判定:若结果为♥️️,你回复1点体力,否则你失去1点体力值.',
            Tianshu_guixi: '鬼吸',
            Tianshu_guixi_info: '锁定技,当你受到伤害后,你进行一次判定:若结果为红色,你回复1点体力,否则你摸一张牌.',
            qugui2_anchao: '暗潮',
            qugui2_anchao_info: '锁定技,己方角色的回合结束时,若此回合该角色没有造成伤害,则获得一个<暗潮>标记,若该角色造成过伤害,则移去所有<暗潮>标记.己方角色的回合开始时,若该角色有暗潮标记,则本回合摸牌阶段多摸X张牌且对敌方角色造成的伤害+X(X为<暗潮>标记数).',
            liezhuan_tiemian: '铁面',
            liezhuan_tiemian_info: '锁定技,红色【杀】有75%的概率对你无效.',
            qugui2_tiemian: '铁面',
            qugui2_tiemian_info: '锁定技,红色【杀】有75%的概率对你无效.',
            qugui2_tiemianb: '铁面',
            qugui2_tiemianb_info: '锁定技,红色【杀】有75%的概率对你无效.',
            fenghuo_jizhou: '疾咒',
            fenghuo_jizhou_info: '锁定技,一名敌方角色的出牌阶段结束时,你进行一次判定,该角色需要弃置任意张点数之和大于判定结果的牌(若弃置的牌超过两张,你获得一枚<噬>标记),否则该角色失去1点体力值.',
            Tianshu_jizhou: '疾咒',
            Tianshu_jizhou_info: '锁定技,一名敌方角色的出牌阶段结束时,你进行一次判定,该角色需要弃置任意张点数之和大于判定结果的牌(若弃置的牌超过两张,你获得一枚<噬>标记),否则该角色失去1点体力值.',
            qugui2_jizhou: '疾咒',
            qugui2_jizhou_info: '锁定技,一名敌方角色的出牌阶段结束时,你进行一次判定,该角色需要弃置任意张点数之和大于判定结果的牌(若弃置的牌超过两张,你获得一枚<噬>标记),否则该角色失去1点体力值.',
            qugui2_jizhoua: '疾咒',
            qugui2_jizhoua_info: '锁定技,一名敌方角色的出牌阶段结束时,你进行一次判定,该角色需要弃置任意张点数之和大于判定结果的牌(若弃置的牌超过一张,你获得一枚<噬>标记),否则该角色失去1点体力值.',
            fenghuo_danshi: '啖噬',
            fenghuo_danshi_info: '锁定技,当你受到伤害时,此伤害+X,你失去一枚<噬>标记(X为你拥有的<噬>标记数量).',
            qugui2_danshi: '啖噬',
            qugui2_danshi_info: '锁定技,当你受到伤害时,此伤害+X,你失去一枚<噬>标记(X为你拥有的<噬>标记数量).',
            Tianshu_danshi: '啖噬',
            Tianshu_danshi_info: '锁定技,当你受到伤害时,此伤害+X,你摸X张牌并失去一枚<噬>标记(X为你拥有的<噬>标记数量).',
            qugui2_chihu: '赤虎',
            qugui2_chihu_info: '锁定技,你的手牌不为全场最多的,摸牌阶段你多摸两张牌.你的体力值不为全场最多的,你造成的伤害+1.',
            Tianshu_chihu: '赤虎',
            Tianshu_chihu_info: '锁定技,你的手牌不为全场最多的,摸牌阶段你多摸四张牌.你的体力值不为全场最多的,你造成的伤害+1.',
            qugui2_difu: '地府',
            qugui2_difu_info: '锁定技,一名敌方角色的出牌阶段开始时,若其手牌数大于其体力上限,则其将手牌弃置至体力上限.',
            Tianshu_zhennu: '震怒',
            Tianshu_zhennu_info: '锁定技,当你的体力值首次降至一半以下时,你立即开始你的回合并摸四张牌.',
            qugui2_zhennu: '震怒',
            qugui2_zhennu_info: '锁定技,当你的体力值首次降至8点或以下时,在当前阶段结束后,你立即开始你的回合并摸四张牌.',
            qugui2_xingpan: '刑判',
            qugui2_xingpan_info: '锁定技,出牌阶段开始时,你进行一次判定:若结果为红色,敌方唯一手牌最多的角色将一半(向下取整)手牌交给你;若结果为黑色,敌方唯一体力最多的角色失去1点体力值.',
            qugui2_dianwei: '殿威',
            qugui2_dianwei_info: '锁定技,准备阶段,你视为对装备区里没牌的敌方角色使用一张【杀】,装备区里有牌的敌方角色随机弃置一张装备区里的牌.',
            qugui2_xuanpan: '宣判',
            qugui2_xuanpan_info: '锁定技,一名敌方角色回合结束时:①若其本回合对你造成过4点或更多的伤害,你随机对其造成0~3点伤害;②若其本回合摸牌数达到8张或更多,你随机摸0~3张牌;③若其本回合回复了3点或更多的体力,你随机回复0~3点体力;④若你本回合弃置了4张或更多的牌,其随机弃置0~3张牌.',
            qlzdj_bingli: '兵力充足',
            qlzdj_liangcao: '粮草丰盈',
            qlzdj_shiqi: '士气高昂',
            shanhe_luoying: '落英',
            shanhe_luoying_info: '当其他角色的♣️️牌因弃置或判定而进入弃牌堆后,你可以获得之.',
            tongque_luoying: '落英',
            tongque_luoying_info: '当其他角色的♣️️牌进入弃牌堆后,你可以获得之.',
            liezhuan_fengmao: '丰茂',
            liezhuan_fengmao_info: '锁定技,跳过你的出牌阶段,弃牌阶段开始时,所有角色根据红色手牌的数量摸等量的牌.',
            liezhuan_paidun: '牌遁',
            liezhuan_paidun_info: '锁定技,回合结束时,所有角色的牌可能会发生奇特的变化.',
            liezhuan_baoman: '暴蛮',
            liezhuan_baoman_info: '①锁定技,你不能使用装备牌.②锁定技,你能重铸装备牌.',
            liezhuan_minwang: '民望',
            liezhuan_minwang_info: '锁定技,敌方角色弃牌阶段开始时,视为对其使用X张【杀】(X为其黑色手牌的数量).',
            liezhuan_junwang: '军望',
            liezhuan_junwang_info: '锁定技,手牌唯一最多的角色回合开始时,手牌比其少的角色依次视为对其使用一张【杀】.',
            liezhuan_yexing: '夜行',
            liezhuan_yexing_info: '锁定技,当你在回合外获得手牌时,你失去1点体力.',
            shanhe_paoxiao: '咆哮',
            shanhe_paoxiao_info: '锁定技,出牌阶段,你使用【杀】无次数限制.',
            shanhe_wusheng: '武圣',
            shanhe_wusheng_info: '你可以将一张红色牌当做【杀】使用或打出.你使用的♦️️【杀】没有距离限制.',
            shanhe_xiongshou: '凶兽',
            shanhe_xiongshou_info: '锁定技,你的判定区的牌中,【乐不思蜀】【兵粮寸断】判定结果反转;摸牌阶段你的摸牌数+1;结束阶段,你摸一张牌.',
            shanhe_xisheng: '牺牲',
            shanhe_xisheng_info: '锁定技,当你死亡时,你的队友随机摸一张牌或回复1点体力.',
            fadong_kuangxi: '狂袭',
            fadong_kuangxi_info: '出牌阶段,你可以失去1点体力,对一名其他角色造成1点伤害,若其因受到此伤害而进入濒死状态,当此濒死结算结束后,此技能于此回合内无效.',
            shanhe_juguan: '拒关',
            shanhe_juguan_backup: '拒关',
            shanhe_juguan_info: '出牌阶段限一次,你可将一张手牌当【杀】或【决斗】使用.若受到此牌伤害的角色未在你的下回合开始前对你造成过伤害,你的下个摸牌阶段摸牌数+2.',
            jiange_jiguan: '机关',
            jiange_jiguan_info: '锁定技,你不能成为【乐不思蜀】的目标.',
            shanhe_chouhai: '仇海',
            shanhe_chouhai_info: '锁定技,当你受到伤害时,若你没有手牌,此伤害+1.',
            longzhou_zhangchuan: '掌川',
            longzhou_zhangchuan_info: '锁定技,每当有1张牌进入弃牌堆后,你获得一个<川>标记;当<川>标记数达到4的倍数时,你摸1张牌;当<川>标记数达到5的倍数时,随机弃置一名敌方角色的一张牌;当<川>标记数大于100时,弃置所有<川>标记,并获得所有其他角色的手牌.',
            longzhou_xiaozi: '潇姿',
            longzhou_xiaozi_info: '锁定技,你的摸牌阶段多摸X张牌(X为<川>标记的十位数).',
            longzhou_zunqing: '尊清',
            longzhou_zunqing_info: '锁定技,当你的<川>标记数达到20,你造成伤害时伤害+1;当你的<川>标记数达到40,你回复体力时回复量+2.',
            longzhou_wanshe: '挽蛇',
            longzhou_wanshe_info: '锁定技,当你使用或打出一张牌时,若此牌与上一张使用或打出的牌类别不同,随机弃置一名敌方角色的一张牌.',
            longzhou_xuntan: '巡潭',
            longzhou_xuntan_info: '锁定技,每当场上角色累计回复5点体力后,你立即获得一个额外的回合.',
            longzhou_shanlin: '闪鳞',
            longzhou_shanlin_info: '锁定技,当你受到1点以上的伤害后,你进行一次判定,若结果为红色,你回复1点体力;若结果为黑色,伤害来源受到1点伤害.',
            longzhou_luoshen: '洛神',
            longzhou_luoshen_info: '准备阶段,你可以进行一次判定,从牌堆中获得三张与判定牌颜色相同的锦囊牌.',
            longzhou_shoujiang: '守江',
            longzhou_shoujiang_info: '锁定技,每回合限一次,当你受到伤害时,若该伤害大于1点,则此伤害变为1点(防止多余的伤害),你摸三张锦囊牌.',
            longzhou_lanjiang: '澜江',
            longzhou_lanjiang_info: '锁定技,每当你累计受到5点伤害,从牌堆中获得不同类型的牌各1张;每当你累计失去5张牌,所有敌方角色随机弃置一张牌.',
            longzhou_xiongzi: '雄姿',
            longzhou_xiongzi_info: '锁定技,摸牌阶段,你多摸X张牌,如果手牌数为全场最少,则改为多摸2X张牌.(X为场上存活人数)',
            taoshen_paoxiao: '咆哮',
            taoshen_paoxiao_info: '锁定技,你出【杀】无次数限制,你的出牌阶段,如果你已经使用过【杀】,你于此阶段使用【杀】无距离限制.',
            taoshen_xiongzi: '雄姿',
            taoshen_xiongzi_info: '锁定技,摸牌阶段,你多摸一张牌,如果手牌数小于等于两张,则改为多摸三张牌.',
            fenghuo_duandao: '短刀',
            fenghuo_duandao_info: '锁定技,其他角色的结束阶段,你对其造成X点伤害.(X为本回合其对你使用过的牌数)',
            fenghuo_wumeng: '武猛',
            fenghuo_wumeng_info: '锁定技,敌方角色每次在回合外失去手牌时,若其体力值大于1,你对其造成1点伤害.',
            fenghuo_qiaoyong: '趫勇',
            fenghuo_qiaoyong_info: '当有其他角色在其回合外失去装备区里的牌时,你可以对其造成两点伤害.',
            fenghuo_fuzhu: '伏诛',
            fenghuo_fuzhu_info: '一名男性角色的结束阶段,若牌堆剩余牌数不大于你体力值的十倍,则你可以依次对其使用牌堆中所有的【杀】(不能超过游戏人数),洗牌.',
            fenghuo_shoujiang: '守江',
            fenghuo_shoujiang_info: '锁定技,每回合限一次,当你受到伤害时,若该伤害大于1点,则此伤害变为1点(防止多余的伤害),你摸三张牌.',
            caoe_shoujianga: '守江',
            caoe_shoujianga_info: '锁定技,每回合限一次,当你受到伤害时,若该伤害大于1点,则此伤害变为1点(防止多余的伤害),你摸三张牌.',
            fenghuo_nutao: '怒涛',
            fenghuo_nutao_info: '锁定技,回合开始时,对所有敌方角色造成1点雷电伤害.',
            taoshen_nutaoa: '怒涛',
            taoshen_nutaoa_info: '锁定技,回合开始时,对所有敌方角色造成1点雷电伤害.',
            caoe_jizhi: '集智',
            caoe_jizhi_info: '每当你使用普通锦囊牌时,你可以摸一张牌.',
            fadong_jielve: '劫掠',
            fadong_jielve_info: '锁定技,当你对一名其他角色造成伤害后,你获得其区域内的各一张牌,失去1点体力.',
            fadong_baoying: '豹营',
            fadong_baoying_info: '限定技,己方角色进入濒死状态时,你可以令其体力回复至1.',
            fadong_fengying: '凤营',
            fadong_fengying_info: '锁定技,敌方角色不能使用牌指定体力值唯一最少的己方角色.',
            fadong_longying: '龙营',
            fadong_longying_info: '锁定技,出牌阶段开始时,若将领已受伤,则你失去1点体力,令其回复1点体力并摸一张牌.',
            fadong_huying: '虎营',
            fadong_huying_info: '锁定技,出牌阶段开始时,除非你将一张【杀】交给将领,否则失去1点体力并令将领随机获得牌堆中的一张【杀】.',
            choosefdjiangling: '将领选择',
            choosefdjiangling_info: '<br>游戏开始时,你选择一名其他角色作为你的将领.',
            fadong_tunjun: '屯军',
            fadong_tunjun_info: '锁定技,每轮游戏开始,若你的体力上限不为1,则你须扣减1点体力上限,摸X张牌(X为你的体力上限).',
            fadong_mojun: '魔军',
            fadong_mojun_info: '锁定技,当己方角色使用【杀】对目标角色造成伤害后,其进行判定,若结果为黑色,己方角色各摸一张牌.',
            hulaoguan_mojun: '魔军',
            hulaoguan_mojun_info: '锁定技,己方角色使用【杀】造成伤害后,若其手牌数小于等于受伤角色,则你和该角色各摸一张牌.',
            hulaoguan_mojuna: '魔军',
            hulaoguan_mojuna_info: '锁定技,己方角色造成伤害后,若其手牌数小于等于受伤角色,则你和该角色各摸一张牌.',
            hulaoguan_fangong: '反攻',
            hulaoguan_fangong_info: '锁定技,当你成为一名敌方角色使用【杀】或伤害类锦囊的目标且该牌结算完成后,你视为对其使用一张【杀】(无距离限制).',
            hulaoguan_jielue: '劫掠',
            hulaoguan_jielue_info: '锁定技,当你对一名其他角色造成伤害后,你获得其手牌、装备区各一张牌.',
            fenghuo_jielue: '劫掠',
            fenghuo_jielue_info: '锁定技,当你对一名其他角色造成伤害后,你获得其手牌、装备区各一张牌.',
            hulaoguan_moqu: '魔躯',
            hulaoguan_moqu_info: '锁定技,己方角色回合结束时,该角色将手牌补至6张.',
            hulaoguan_yangwei: '扬威',
            hulaoguan_yangwei_info: '锁定技,当你受到【杀】造成的伤害后,若此【杀】为红色,则你摸两张牌;若此【杀】不为红色,则你获得伤害来源的一张牌.',
            hulaoguan_yaowu: '耀武',
            hulaoguan_yaowu_info: '锁定技,当你受到【杀】造成的伤害时,若此【杀】为红色,伤害来源回复1点体力或摸一张牌;若此【杀】不为红色,则你摸一张牌.',
            boss_yaowu: '耀武',
            boss_yaowu_info: '锁定技,当你受到【杀】造成的伤害时,若此【杀】为红色,伤害来源回复1点体力或摸一张牌;若此【杀】不为红色,则你摸一张牌.',
            boss_qice: '奇策',
            boss_qice_info: '出牌阶段限一次,你可以将所有的手牌(至少一张)当做任意一张普通锦囊牌使用.',
            hulaoguan_shence: '神策',
            hulaoguan_shence_info: '锁定技,己方角色的出牌阶段开始时,该角色从弃牌堆获得一张【杀】且本回合使用【杀】次数+1,出牌阶段使用的第一张【杀】无视距离.',
            hulaoguan_sizhen: '死阵',
            hulaoguan_sizhen_info: '锁定技,你的【杀】无视目标角色防具且伤害+1.',
            hulaoguan_juejiu: '绝酒',
            hulaoguan_juejiu_info: '锁定技,你的回合内,所有角色均不能使用【酒】.',
            hulaoguan_juntun: '军屯',
            hulaoguan_juntun_info: '锁定技,准备阶段,若你的体力上限不为1,则你扣减1点体力上限,摸X张牌(X为你的体力上限).',
            hulaoguan_juntuna: '军屯',
            hulaoguan_juntuna_info: '锁定技,每轮游戏开始,若你的体力上限不为1,则你扣减1点体力上限,摸X张牌(X为你的体力上限).',
            shanglin_jiaoxia: '狡黠',
            shanglin_jiaoxia_info: '锁定技,你的红色手牌不计入手牌上限,且使用黑色牌无距离和次数限制.',
            hulaoguan_jiaoxia: '狡黠',
            hulaoguan_jiaoxia_info: '锁定技,你的红色手牌不计入手牌上限,且使用黑色牌无距离和次数限制.',
            hulaoguan_fengying: '凤营',
            hulaoguan_fengying_info: '锁定技,敌方角色使用黑色牌指定己方角色为唯一目标后,若目标角色体力值是全场最少的(或之一),则此牌对其无效.',
            hulaoguan_longying: '龙营',
            hulaoguan_longying_info: '锁定技,出牌阶段开始时,若己方有其他角色已受伤,你失去1点体力,随机一名己方受伤角色回复1点体力并摸两张牌.',
            hulaoguan_huying: '虎营',
            hulaoguan_huying_info: '锁定技,出牌阶段开始时,随机一名己方角色获得牌堆中的两张【杀】.',
            mitan_zhaofu: '诏缚',
            mitan_zhaofu_info: '锁定技,己方计算与其他角色的距离始终视为1.',
            hulaoguan_jingji: '精骑',
            hulaoguan_jingji_info: '锁定技,己方角色计算与敌方角色的距离-1.',
            hulaoguan_ruiji: '锐骑',
            hulaoguan_ruiji_info: '锁定技,己方角色摸牌阶段额外摸一张牌.',
            fenghuo_shangshi: '上使',
            fenghuo_shangshi_info: '锁定技,己方角色摸牌阶段额外摸一张牌.',
            hulaoguan_baoying: '豹营',
            hulaoguan_baoying_info: '锁定技,己方有其他角色进入濒死状态时,你随机弃置一张牌,该角色回复1点体力.',
            tianshukuafu_yinjianga: '饮江',
            tianshukuafu_yinjianga_info: '锁定技,当你在出牌阶段摸牌后,额外从牌堆底获得一张牌,如果该牌是红色,则对所有敌方角色造成1点伤害.当你于同一阶段内以此法造成过两次或更多的伤害后,该技能失效直到回合结束.',
            tianshu_yinjiang: '饮江',
            tianshu_yinjiang_info: '锁定技,当你在出牌阶段摸牌后,额外从牌堆底获得一张牌,如果该牌是红色,则随机对一名敌方角色造成1点伤害.当你于同一阶段内以此法造成过两次或更多的伤害后,该技能失效直到回合结束.',
            tianshukuafu_shenqua: '神躯',
            tianshukuafu_shenqua_info: '锁定技,当你受到伤害后,获得牌堆底的牌.若此牌为红色,则伤害来源随机弃置一张手牌.',
            Tianshu_shenqu: '神躯',
            Tianshu_shenqu_info: '锁定技,当你受到伤害后,将所有红色手牌置于牌堆底,并摸等量的牌.',
            tianshuxuannv_shenqua: '神躯',
            tianshuxuannv_shenqua_info: '锁定技,当你受到伤害后,获得牌堆底的牌.若此牌为红色,则伤害来源随机弃置一张手牌.',
            liezhuan_qingjiao: '清剿',
            liezhuan_qingjiao_info: '出牌阶段开始时,你可以弃置所有手牌,从牌堆或弃牌堆中随机获得八张牌名各不相同且副类别不同的牌.若如此做,结束阶段,你弃置所有牌.',
            boss_liushi2: '流矢',
            boss_tanbei_effect1: '贪狈',
            boss_tanbei_effect1_info: '',
            boss_tanbei_effect2: '贪狈',
            boss_tanbei_effect2_info: '',
            boss_sidaox: '伺盗',
            wenhe_tanbei_effect1: '贪狈',
            wenhe_tanbei_effect1_info: '',
            wenhe_tanbei_effect2: '贪狈',
            wenhe_tanbei_effect2_info: '',
            wenhe_sidaox: '伺盗',
            fenghuo_tanbei_effect1: '贪狈',
            fenghuo_tanbei_effect1_info: '',
            fenghuo_tanbei_effect2: '贪狈',
            fenghuo_tanbei_effect2_info: '',
            fenghuo_tanbei: '贪狈',
            fenghuo_tanbei_info: '出牌阶段限一次,你可以令一名其他角色选择一项:1. 令你随机获得其区域内的一张牌,此回合不能再对其使用牌;2. 令你此回合对其使用牌没有次数和距离限制.',
            fenghuo_weicheng: '伪诚',
            fenghuo_weicheng_info: '当其他角色获得你的手牌后,若你的手牌数小于体力值,你可以摸一张牌.',
            fenghuo_bainiao: '百鸟',
            fenghuo_bainiao_info: '锁定技,当你对其他角色造成伤害时,如果你装备了武器牌,弃置该武器牌并使该伤害增加武器攻击范围的点数.',
            fenghuo_chuanyun: '穿云',
            fenghuo_chuanyun_info: '当你使用【杀】指定目标后,你可令目标角色随机弃置其装备区内的一张牌.',
            fenghuo_huoqi: '活气',
            fenghuo_huoqi_info: '出牌阶段限一次,你可以弃置一张牌,令体力值最少的一名角色回复1点体力并摸一张牌.',
            fenghuo_pojun: '破军',
            fenghuo_pojun2: '破军',
            fenghuo_pojun_info: '当你使用【杀】指定目标后,你可以将其的至多X张牌置于其武将牌上(X为其体力值).若这些牌中:有装备牌,你将这些装备牌中的一张置于弃牌堆;有锦囊牌,你摸一张牌.其于回合结束时获得其武将牌上的这些牌.',
            boss_langxi: '狼袭',
            boss_langxi_info: '准备阶段,你可以对一名体力小于或等于你的其他角色造成0-2点随机伤害.',
            boss_langxia: '狼袭',
            boss_langxia_info: '准备阶段,你可以对一名体力小于或等于你的其他角色造成1-3点随机伤害.',
            boss_yisuan: '亦算',
            boss_yisuan_info: '出牌阶段限一次,当你使用的锦囊牌进入弃牌堆时,你可以减1点体力上限,从弃牌堆获得之.',
            boss_sidao: '伺盗',
            boss_sidao_info: '出牌阶段限一次,当你对一名其他角色连续使用两张牌后,你可将一张手牌当【顺手牵羊】对其使用(目标须合法).',
            boss_tanbei: '贪狈',
            boss_tanbei_info: '出牌阶段限一次,你可以令一名其他角色选择一项:1. 令你随机获得其区域内的一张牌,此回合不能再对其使用牌;2. 令你此回合对其使用牌没有次数和距离限制.',
            boss_sidaoa: '伺盗',
            boss_sidaoa_info: '出牌阶段限两次,当你对一名其他角色连续使用两张牌后,你可将一张手牌当【顺手牵羊】对其使用(目标须合法).',
            boss_tanbeia: '贪狈',
            boss_tanbeia_info: '出牌阶段限一次,你可以令一名其他角色选择一项:1. 令你随机获得其区域内的三张牌,此回合不能再对其使用牌;2. 令你此回合对其使用牌没有次数和距离限制.',
            boss_tanbeib: '贪狈',
            boss_tanbeib_info: '出牌阶段限一次,你可以令一名其他角色选择一项:1. 令你随机获得其区域内的两张牌,此回合不能再对其使用牌;2. 令你此回合对其使用牌没有次数和距离限制.',
            wenhe_sidao: '伺盗',
            wenhe_sidao_info: '出牌阶段限一次,当你对一名其他角色连续使用两张牌后,你可以将一张手牌当做【顺手牵羊】对其使用.',
            mitan_lijun: '立军',
            mitan_lijun_info: '锁定技,你的回合内,获得其他角色弃置的牌.',
            wenhe_tanbei: '贪狈',
            wenhe_tanbei_info: '出牌阶段限一次,你可以令一名其他角色选择一项:1.令你随机获得其区域内的一张牌,本回合内你不能对其使用牌.2.令你此回合内对其使用牌没有次数与距离限制.',
            boss_liushi: '流矢',
            boss_liushi_info: '出牌阶段,你可以将一张♥️️牌置于牌堆顶,视为对一名角色使用一张【杀】(不计入次数且无距离限制).若此【杀】造成伤害,该角色手牌上限-1.',
            boss_zhichi: '智迟',
            boss_zhichi_info: '锁定技,当你于回合外受到伤害后,本回合【杀】和普通锦囊牌对你无效.',
            yanluo_zhennu: '震怒',
            yanluo_zhennu_info: '锁定技,当你的体力值首次降至8点或4点以下时,在当前阶段结束后,你立即开始你的回合并摸四张牌.',
            liezhuan_zhennu: '震怒',
            liezhuan_zhennu_info: '锁定技,当你的体力值首次降至8点或4点以下时,在当前阶段结束后,你立即开始你的回合并摸四张牌.',
            boss_zhanwan: '斩腕',
            boss_zhanwan_info: '锁定技,受到『流矢』效果影响的角色若弃牌阶段有弃牌,你摸等量的牌,移除『流矢』的效果.',
            zuogu_jisheng: '奇声',
            zuogu_jisheng_info: '锁定技,跳过摸牌阶段.奇数轮时,你受到伤害后,每受到1点伤害,随机一名有性别的己方角色失去1点体力.偶数轮时,当你受到伤害时,防止此伤害.',
            yougu_ousheng: '偶声',
            yougu_ousheng_info: '锁定技,跳过摸牌阶段.偶数轮时,你受到伤害后,每受到1点伤害,随机一名有性别的己方角色失去1点体力.奇数轮时,当你受到伤害时,防止此伤害.',
            zuogu_zuogu: '左鼓',
            zuogu_zuogu_info: '锁定技,每回合你首次受到伤害后,伤害来源摸两张牌;第二次受到伤害后,伤害来源弃置两张牌;后续每次受到伤害后,伤害来源失去1点体力.',
            yougu_yougu: '右鼓',
            yougu_yougu_info: '锁定技,每回合你首次受到伤害后,伤害来源回复1点体力.第二次受到伤害后,伤害来源受到1点伤害.后续每次受到伤害后,伤害来源弃置两张牌.',
            qunying_yinghun: '英魂',
            qunying_yinghun_info: '准备阶段,若你已受伤,你可以选择一项:1.令一名其他角色摸X张牌,弃置一张牌;2.令一名其他角色摸一张牌,弃置X张牌.(X为你已损失的体力值且最大为5)',
            shanhe_fanjian: '反间',
            shanhe_fanjian_info: '出牌阶段限一次,你可以展示一张手牌并将此牌交给一名其他角色.该角色选择一项:展示其手牌并弃置所有与此牌花色相同的牌,或失去1点体力.',
            qunying_fanjian: '反间',
            qunying_fanjian_info: '出牌阶段限两次,你可以展示一张手牌并将此牌交给一名其他角色.该角色选择一项:展示其手牌并弃置所有与此牌花色相同的牌,或失去1点体力.',
            hezong_zhangyi_lianheng: '连横',
            hezong_zhangyi_lianheng_info: '锁定技,游戏开始时,你令随机一名敌方的角色获得<横>标记.拥有<横>标记的角色使用牌时,无法指定拥有技能【连横】的角色的己方角色为目标.你的回合开始时,场上所有角色弃置<横>标记.若敌方角色大于等于2人,则你令随机一名敌方角色获得<横>标记.',
            hezong_zhangyi_xichu: '戏楚',
            hezong_zhangyi_xichu_info: '锁定技,当你成为【杀】的目标时,若其攻击范围内有其他角色,则该角色需要弃置一张点数为6的牌,否则此【杀】的目标转移给其攻击范围内你指定的另一名角色.',
            hezong_zhangyi_xiongbian: '雄辩',
            hezong_zhangyi_xiongbian_info: '锁定技,当你成为普通锦囊牌的目标或之一时,你进行判定,若点数为6,你令此牌无效.',
            hezong_zhangyi_qiaoshe: '巧舌',
            hezong_zhangyi_qiaoshe_info: '当一名角色进行判定时,你可以令其判定牌的点数加减3以内的任意值.',
            hezong_yingzheng_yitong: '一统',
            hezong_yingzheng_yitong_info: '锁定技,当你使用【杀】、【过河拆桥】、【顺手牵羊】、【火攻】时,你令所有不为此牌目标的敌方角色也成为此牌的目标.你使用【杀】和【顺手牵羊】无距离限制.',
            hezong_yingzheng_shihuang: '始皇',
            hezong_yingzheng_shihuang_info: '锁定技,其他角色的回合结束后,你有X%的几率进行一个额外的回合(X为当前轮数*6,且X最大为100).',
            hezong_yingzheng_zulong: '祖龙',
            hezong_yingzheng_zulong_info: '锁定技,你的回合开始时,若牌堆里有【传国玉玺】或【真龙长剑】,且不在你的手牌区或装备区,你获得之;若没有则你摸两张牌.',
            hezong_yingzheng_fenshu: '焚书',
            hezong_yingzheng_fenshu_info: '锁定技,敌方角色于其回合内使用的第一张普通锦囊牌无效.',
            hezong_shangyang_bianfa: '变法',
            hezong_shangyang_bianfa_info: '出牌阶段限一次,你可以将任意一张普通锦囊牌当【商鞅变法】使用.',
            hezong_shangyang_limu: '立木',
            hezong_shangyang_limu_info: '锁定技,你使用的普通锦囊牌无法被【无懈可击】抵消.',
            hezong_shangyang_kencao: '垦草',
            hezong_shangyang_kencao_info: '锁定技,你存活时,己方角色每造成1点伤害,可获得一个<功>标记.若己方角色拥有大于等于3个<功>标记,则弃置所有<功>标记,增加1点体力上限,并回复1点体力.',
            hezong_nushou_jinnu: '劲弩',
            hezong_nushou_jinnu_info: '锁定技,你的回合开始时,若你的装备区里没有【秦弩】,你使用一张【秦弩】.',
            hezong_qibing_changjian: '长剑',
            hezong_qibing_changjian_info: '锁定技,你的攻击范围+1,你使用【杀】指定目标后,可额外选择一名目标,或令此杀伤害+1.',
            hezong_qibing_liangju: '良驹',
            hezong_qibing_liangju_info: '锁定技,你使用【杀】指定目标后,令目标进行判定,若为♠️️则此杀不可被闪避;当你成为【杀】的目标后,你进行判定,若为♥️️则此杀对你无效.',
            hezong_bubing_fangzhen: '方阵',
            hezong_bubing_fangzhen_info: '锁定技,当你成为敌方角色使用普通锦囊或【杀】的目标后,若其在你的攻击范围内,你进行判定,若为黑色,则视为你对其使用一张【杀】.',
            hezong_bubing_changbing: '长兵',
            hezong_bubing_changbing_info: '锁定技,你的攻击范围+2.',
            hezong_daqin_tongpao: '同袍',
            hezong_daqin_tongpao_info: '锁定技,若你没有装备防具,其他己方角色使用防具牌时,你视为使用一张同名防具牌(通过〖同袍〗使用的防具牌离开装备区时销毁).',
            hezong_dengjie_niepan: '涅槃',
            hezong_dengjie_niepan_info: '限定技,当你处于濒死状态时,你可以弃置区域里的所有牌,复原你的武将牌,摸三张牌,将体力回复至3点.',
            ns_fushen: '福神',
            ns_fushen_info: '限定技,当你处于濒死状态时,你可以弃置区域里的所有牌,复原你的武将牌,摸三张牌,将体力回复至3点.',
            hezong_cpzz_wushuang: '长平之战',
            hezong_cpzz_sha: '长平之战',
            hezong_cpzz_shan: '长平之战',
            hezong_baiqi_wuan: '武安',
            hezong_baiqi_wuan_info: '锁定技,你存活时,所有己方角色每回合可使用【杀】的上限+1.',
            hezong_baiqi_shashen: '杀神',
            hezong_baiqi_shashen_info: '你可以将手牌中的任意一张牌当【杀】使用或打出.每回合你使用的第一张【杀】造成伤害后,摸一张牌.',
            hezong_baiqi_fachu: '伐楚',
            hezong_baiqi_fachu_info: '锁定技,当你对敌方角色造成伤害而导致其进入濒死状态后,你随机废除其一个装备区.',
            hezong_baiqi_changsheng: '常胜',
            hezong_baiqi_changsheng_info: '锁定技,你使用【杀】无距离限制.',
            hezong_miyue_zhangzheng: '掌政',
            hezong_miyue_zhangzheng_info: '锁定技,你的回合开始时,所有敌方角色依次选择:1.弃置一张手牌;2.失去1点体力.',
            hezong_miyue_taihou: '太后',
            hezong_miyue_taihou_info: '锁定技,男性角色对你使用【杀】或普通锦囊牌时,需要额外弃置一张同种类型的牌,否则此牌无效.',
            hezong_miyue_youmie: '诱灭',
            hezong_miyue_youmie_info: '出牌阶段限一次,你可以将一张牌交给一名角色,若如此做,直到你的下个回合开始,该角色于其回合外无法使用或打出牌.',
            hezong_miyue_yintui: '隐退',
            hezong_miyue_yintui_info: '锁定技,当你失去最后一张手牌时,你翻面.你的武将牌背面朝上时,若受到伤害,令此伤害-1,摸一张牌.',
            hezong_lvbuwei_jugu: '巨贾',
            hezong_lvbuwei_jugu_info: '锁定技,你的手牌上限+X;游戏开始时,你多摸X张牌(X为你的体力上限).',
            shanhe_jugu: '巨贾',
            shanhe_jugu_info: '锁定技,你的手牌上限+X;游戏开始时,你多摸X张牌(X为你的体力上限).',
            hezong_lvbuwei_qihuo: '奇货',
            hezong_lvbuwei_qihuo_info: '出牌阶段限一次,你可以弃置一种类型的牌,并摸等同于你弃置牌数量等量的牌.',
            hezong_lvbuwei_chunqiu: '春秋',
            hezong_lvbuwei_chunqiu_info: '锁定技,每个回合你使用或打出第一张牌时,你摸一张牌.',
            hezong_lvbuwei_baixiang: '拜相',
            hezong_lvbuwei_baixiang_info: '觉醒技,你的回合开始时,若你的手牌数大于等于你当前体力的3倍,则你将体力回复至体力上限,并获得【仲父】技能.',
            hezong_lvbuwei_zhongfu: '仲父',
            hezong_lvbuwei_zhongfu_info: '锁定技,你的回合开始时,直到你的下个回合开始为止,你随机获得【界奸雄】、【界仁德】、【界制衡】中的一个.',
            hezong_zhaoji_shanwu: '善舞',
            hezong_zhaoji_shanwu_info: '锁定技,你使用【杀】指定目标后,你进行判定,若为黑色则该【杀】不能被抵消.当你成为【杀】的目标后,你进行判定,若为红色此杀无效.',
            hezong_zhaoji_daqi: '大期',
            hezong_zhaoji_daqi_info: '锁定技,你每使用或打出一张手牌、造成1点伤害、受到1点伤害,均会得到一个<期>标记.你的回合开始时,若你拥有的<期>标记大于等于10,则弃置所有<期>,体力回复至体力上限,并将手牌补至体力上限.',
            hezong_zhaoji_xianji: '献姬',
            hezong_zhaoji_xianji_info: '限定技,出牌阶段,你可以弃置所有手牌、装备牌和<期>标记,失去1点体力上限,立即发动大期的回复体力和补牌效果.',
            hezong_zhaoji_huoluan: '祸乱',
            hezong_zhaoji_huoluan_info: '锁定技,你每次发动大期的回复体力和补牌效果后,你对所有敌方角色造成1点伤害.',
            hezong_zhaogao_zhilu: '指鹿',
            hezong_zhaogao_zhilu_info: '你可以将红色手牌当【闪】使用或打出;将黑色手牌当【杀】使用或打出.',
            hezong_zhaogao_gaizhao: '改诏',
            hezong_zhaogao_gaizhao_info: '当你成为【杀】或普通锦囊牌的目标后(借刀杀人除外),若场上有其他己方角色存活,你可以将此牌的目标改为其他不是该牌目标的己方角色.',
            hezong_zhaogao_haizhong: '害忠',
            hezong_zhaogao_haizhong_info: '锁定技,敌方角色回复体力时,其需要选择:1.弃置一张红色牌,2.受到你造成的X点伤害(X为该角色拥有的<害>标记,且至少为1).该角色获得一个<害>标记.',
            hezong_zhaogao_yuanli: '爰历',
            hezong_zhaogao_yuanli_info: '锁定技,你的出牌阶段开始时,你额外获得两张普通锦囊牌.',
            shidian_lianyu: '炼狱',
            shidian_lianyu_info: '锁定技,结束阶段,你对所有敌方角色各造成1点火焰伤害.',
            boss_wangong: '挽弓',
            boss_wangong_info: '锁定技,你使用的【杀】对你距离其不为1的目标造成的伤害+1.',
            danji_juezhan: '绝战',
            danji_juezhan_info: '锁定技,当一名己方角色进入濒死状态时,你获得<绝战>标记,本局你造成的伤害+1. ',
            hulao_pindao: '拼刀',
            hulao_pindao_info: '当你成为敌方角色【杀】的目标后.你可以打出一张【杀】与其拼刀.并进行判定,若拼刀成功,此【杀】无效,你对其造成3点伤害;若拼刀失败,此【杀】无法响应.两张【杀】点数差距越小,拼刀成功率越高.',
            qihuan_zhendu: '鸩毒',
            qihuan_zhendu_info: '每轮限一次,出牌阶段你可以将至多两张牌交给一名其他角色,摸等量的牌.',
            qihuan_zhendu1: '鸩毒',
            qihuan_zhendu1_info: '出牌阶段限一次,你可以将一张手牌交给一名其他角色.若其与你阵营不同,则你摸一张牌.',
            Neihuan_biri: '蔽日',
            Neihuan_biri_info: '锁定技,当你受到敌方角色造成的伤害时,该角色弃置所有非基本牌;若其弃置的牌中有黑色牌,此伤害-1.',
            Neihuan_huanshi: '宦势',
            Neihuan_huanshi_info: '锁定技,每回合各限一次,当你成为敌方使用牌的唯一目标时,其他拥有此技能的一名己方角色随机弃置一张同类型的牌,使此牌无效. 当你使用杀或伤害类锦囊指定敌方为目标后,其他拥有此技能的一名己方角色随机弃置一张同类型的牌,使此牌不能被抵消.',
            Neihuan_mane: '蛮恶',
            Neihuan_mane_info: '锁定技,当有角色受到【南蛮入侵】或【万箭齐发】造成的伤害后,你从弃牌堆随机获得一张黑色锦囊牌,每回合每名角色限一次.',
            Neihuan_weizhong: '威重',
            Neihuan_weizhong_info: '锁定技,每当你的体力上限增加或减少时,你摸一张牌.',
            Neihuan_niluan: '逆乱',
            Neihuan_niluan_info: '出牌阶段,你可以将一张黑色牌当做【杀】使用.此【杀】使用结算完成后,若你未因此【杀】造成过伤害,则你令此【杀】不计入使用次数.',
            Neihuan_dangxian: '当先',
            Neihuan_dangxian_info: '锁定技,回合开始时,你执行一个额外的出牌阶段.此阶段开始时,你失去1点体力并从牌堆/弃牌堆中获得一张【杀】.',
            shanhe_jiaozi: '骄恣',
            shanhe_jiaozi_info: '锁定技,若你的手牌数为全场唯一最多,则当你造成或受到伤害时,此伤害+1.',
            fenghuo_pozhan: '迫战',
            fenghuo_pozhan_info: '每次你于回合外从牌堆摸牌后,可以视为对当前回合角色使用一张【杀】.',
            Waiqi_xueyi: '血裔',
            Waiqi_xueyi_info: '锁定技,摸牌阶段,你额外摸X张牌.你的手牌上限+X.(X为全场群雄势力角色数量)',
            Waiqi_qiluan: '戚乱',
            Waiqi_qiluan_info: '一名其他角色死亡后,你可以在当前回合结束时摸一张牌.若该角色是你击杀的,则改为摸三张牌.',
            Waiqi_anyong: '暗涌',
            Waiqi_anyong_info: '当一名角色于其回合内第一次对其他角色造成伤害后,若伤害值为1,则你可弃置一张牌,并对受伤角色造成1点伤害.',
            Waiqi_chanmou: '谗谋',
            Waiqi_chanmou_info: '每回合限一次,当你成为一张牌的非唯一目标时,你可以获得此牌一名其他目标的X张牌.(X为此牌的目标数)',
            Waiqi_yongdou: '勇斗',
            Waiqi_yongdou_info: '锁定技,当有【决斗】被黑色的【杀】响应后,你摸一张牌;被红色的【杀】响应后,你弃一张牌并回复1点体力.',
            Waiqi_jianchu: '鞬出',
            Waiqi_jianchu_info: '当你使用【杀】指定一名角色为目标后,你可以弃置其一张牌,若以此法弃置的牌为装备牌,此【杀】不可被【闪】响应,若不为装备牌,该角色获得此【杀】.',
            Waiqi_chuhuan: '除患',
            Waiqi_chuhuan_info: '锁定技,当你使用【杀】指定敌方角色为目标后,你与其各失去1点体力.当你成为敌方角色使用的普通锦囊牌的目标后,你与使用者各失去1点体力.',
            Waiqi_weidi: '伪帝',
            Waiqi_weidi_info: '锁定技,其他群雄角色的牌因弃置进入弃牌堆时,你随机获得其中的一张,并随机获得该角色区域内的一张牌.',
            Waiqi_jiuchi: '酒池',
            Waiqi_jiuchi_info: '你可以将一张♠️️手牌当作【酒】使用.',
            Waiqi_tiandu: '天妒',
            Waiqi_tiandu_info: '当你的判定牌生效后,你可以获得之.',
            Waiqi_xunxun: '恂恂',
            Waiqi_xunxun_info: '摸牌阶段,你可以观看牌堆顶的四张牌,将其中的两张牌置于牌堆顶,并将其余的牌以任意顺序置于牌堆底.',
            Waiqi_zongshi: '宗室',
            Waiqi_zongshi_info: '锁定技,你的手牌上限+X(X为场上现存势力数).',
            Waiqi_fankui: '反馈',
            Waiqi_fankui_info: '每当你受到1点伤害后,你可以获得伤害来源的一张牌.',
            Waiqi_guicai: '鬼才',
            Waiqi_guicai_info: '在任意角色的判定牌生效前,你可以打出一张牌代替之',
            shanhe_jieminga: '节命',
            shanhe_jieminga_info: '当你受到1点伤害后,你可令一名角色将手牌摸至X张(X为其体力上限且至多为5).',
            Waiqi_danlao: '啖酪',
            Waiqi_danlao_info: '当你成为一张指定了多个目标的【杀】或普通锦囊牌的目标时,你可以摸一张牌,令此牌对你无效.',
            fenghuo_lingruo: '凌弱',
            fenghuo_lingruo_info: '锁定技,准备阶段,你对一名体力值小于你的敌方角色造成2点伤害.',
            Waiqi_congjian: '从谏',
            Waiqi_congjian_info: '当你成为锦囊牌的目标时,若此牌的目标数大于1,则你可以交给其中一名其他目标角色一张牌,摸一张牌,若你给出的是装备牌,改为摸两张牌',
            mitan_canshi: '残蚀',
            mitan_canshi2: '残蚀',
            mitan_canshi_info: '摸牌阶段开始时,你可以多摸X张牌(X为已受伤的角色数),若如此做,当你于此回合内使用【杀】或普通锦囊牌时,你弃置一张牌.',
            shanhe_zhaxiang: '诈降',
            shanhe_zhaxiang_info: '锁定技,每当你失去1点体力后,你摸三张牌.若此时是你的出牌阶段,则直到回合结束,你使用红色【杀】无距离限制且不能被【闪】响应,你可以额外使用一张【杀】.',
            shanhe_zhaxiang2: '诈降',
            fenghuo_shenzhi: '神智',
            fenghuo_shenzhi_info: '准备阶段,若你的手牌数大于体力值,你可以弃置一张手牌,回复1点体力.',
            fenghuo_shushen: '淑慎',
            fenghuo_shushen_info: '当你回复1点体力时,你可以令一名其他角色摸一张牌.',
            fenghuo_shushena: '淑慎',
            fenghuo_shushena_info: '当你回复1点体力时,你可以令一名其他角色回复1点体力或与其各摸一张牌.',
            fenghuo_nizhuan: '逆转',
            fenghuo_nizhuan_info: '锁定技,游戏开始时,选择一种花色记录在武将牌上.当你成为其他角色使用的牌的目标时,如果该牌的花色与你记录的花色不同,则此牌对你无效,你将记录的花色该牌的花色.',
            fenghuo_kaikang: '慷忾',
            fenghuo_kaikang_info: '当一名角色成为【杀】的目标后,若你至该角色的距离为1,你可以摸一张牌.若如此做,你交给其一张牌并展示之.若为装备牌,该角色可以使用此牌.',
            fenghuo_panqin: '攀亲',
            fenghuo_panqin_info: '锁定技,当你成为一名角色使用【杀】的目标后,其需弃置一张非基本牌,否则此【杀】对你无效.',
            fenghuo_baodong: '暴动',
            fenghuo_baodong_info: '摸牌阶段结束时,你可以使用一张【杀】.若此【杀】造成过伤害,你获得1个<暴>标记.回合结束时,你扔掉你的所有<暴>标记.',
            fenghuo_jieshe: '劫舍',
            fenghuo_jieshe_info: '出牌阶段限一次,选择一名敌方角色,该角色必须交给你一张装备牌或者两张非装备牌,否则受到两点你对其造成的伤害.',
            fenghuo_guaming: '卦命',
            fenghuo_guaming_info: '锁定技,己方角色在奇数轮的出牌阶段可以额外使用一张【杀】,偶数轮的出牌阶段开始时从牌堆获得一张锦囊牌.',
            fenghuo_shence: '神策',
            fenghuo_shence_info: '锁定技,己方角色的出牌阶段开始时,该角色从弃牌堆获得一张【杀】且本回合使用【杀】次数+1,出牌阶段使用的第一张【杀】无视距离.',
            lvbu_shenwu: '神武',
            lvbu_shenwu_info: '锁定技,出牌阶段开始时,从随机三件神武装备牌中选择一件.每当你使用装备牌时,你弃置所有敌方角色的武器牌,并随机获得X张【杀】或【决斗】(X为以此法弃置的武器牌数且至少为1).',
            hulao_shenwu: '神武',
            hulao_shenwu_info: '锁定技,出牌阶段开始时,从随机三件神武装备牌中选择一件.每当你使用装备牌时,你弃置所有敌方角色的防具牌,并随机获得X张【杀】或【决斗】(X为以此法弃置的防具牌数且至少为1).',
            fenghuo_jisun: '击损',
            fenghuo_jisun_info: '锁定技,游戏开始时,为三位敌方角色每人增加一个<损>标记(每少一个目标,剩余目标多获得一个标记).拥有该标记的角色每次受到伤害增加X(X为标记个数).',
            fenghuo_manchuang: '蛮创',
            fenghuo_manchuang_info: '锁定技,当敌方角色受到【南蛮入侵】的伤害时,其获得一个<蛮创>标记.一名角色回合结束时,若其的<蛮创>标记达到7个,其立即死亡.',
            fenghuo_manxi: '蛮袭',
            fenghuo_manxi_info: '锁定技,当你对拥有<蛮创>标记的角色造成伤害时,令伤害增加其拥有的<蛮创>标记个数的值.',
            fenghuo_huannan: '患难',
            fenghuo_huannan_info: '锁定技,其他拥有此技能的角色受到伤害后,你获得一个<患难>标记.若场上有一名拥有该技能的角色进入濒死状态,你获得技能<仇勇>.',
            fenghuo_chouyong: '仇勇',
            fenghuo_chouyong_info: '锁定技,当你造成伤害时,令伤害增加你拥有的<患难>标记个数的值.',
            shanhe_yuanjun: '援军',
            shanhe_yuanjun_info: '出牌阶段限一次,对至多两名其他角色使用.目标角色各回复1点体力.',
            shanhe_shizhi: '矢志',
            shanhe_shizhi_info: '锁定技,当你的体力值为1时,你的【闪】均视为【杀】.',
            shanhe_jinjiu: '禁酒',
            shanhe_jinjiu_info: '锁定技,你的【酒】均视为【杀】.',
            shanhe_feijun: '飞军',
            shanhe_feijun_info: '出牌阶段限一次.你可以弃置一张牌,选择一项:⒈令一名手牌数大于你的角色交给你一张牌;⒉令一名装备区里牌数大于你的角色弃置装备区内的一张牌.',
            shanhe_moukui: '谋溃',
            shanhe_moukui2: '谋溃',
            shanhe_moukui_info: '当你使用【杀】指定目标后,你可以选择一项:摸一张牌,或弃置其一张牌.若如此做,当此【杀】被【闪】抵消时,目标角色弃置你的一张牌.',
            shanhe_shenju: '慎拒',
            shanhe_shenju_info: '锁定技,你的手牌上限+X(X为敌方体力值最多的角色的体力值).',
            shanhe_caiwang: '才望',
            shanhe_caiwang_info: '①当你使用或打出牌响应其他角色使用的牌,或其他角色使用或打出牌响应你使用的牌后,若这两张牌颜色相同,则你可以弃置对方的一张牌.②若你的手牌数为1,则你可以将该手牌当做【闪】使用或打出.③若你的装备区牌数为1,则你可以将该装备当做【无懈可击】使用或打出.④若你的判定区牌数为1,则你可以将该延时锦囊牌当做【杀】使用或打出.',
            shanhe_caiwang_hand: '才望',
            shanhe_caiwang_equip: '才望',
            shanhe_caiwang_judge: '才望',
            shanhe_shengzhi: '圣质',
            shanhe_shengzhi_info: '锁定技.当你发动非锁定技后,你令你本回合使用的下一张牌无距离和次数限制.',
            shanhe_quandao: '权道',
            shanhe_quandao_info: '锁定技.当你使用【杀】或普通锦囊牌时,{若你手牌中的【杀】或普通锦囊牌的数量之差X不为0,则你弃置X张数量较多的一种牌},你摸一张牌.',
            shanhe_mingce: '明策',
            shanhe_mingce_info: '出牌阶段,你可以交给一名其他角色一张装备牌或【杀】,令该角色选择一项:1. 视为对其攻击范围内的另一名由你指定的角色使用一张【杀】.2. 摸一张牌.每回合限一次.',
            shanhe_shengong: '神工',
            shanhe_shengong_info: '出牌阶段每项限一次.你可以弃置一张武器牌/防具牌/其他装备牌,并发起一次<锻造>.你从锻造结果中选择一张牌,置于一名角色的装备区内(可替换原装备).当有因你发动〖神工〗而加入游戏的牌进入弃牌堆后,你将此牌移出游戏,你于当前回合结束后摸一张牌.',
            shanhe_libing: '厉兵',
            shanhe_libing_info: '准备阶段,若你没有武器,则将一件随机武器置入你的装备区.',
            shanhe_duanjia: '锻甲',
            shanhe_duanjia_info: '准备阶段,若你没有防具,则将一件随机防具置入你的装备区.',
            shanhe_jibao: '集宝',
            shanhe_jibao_info: '准备阶段,若你没有宝物,则将一件随机宝物置入你的装备区.',
            shanhe_zizhong: '辎重',
            shanhe_zizhong_info: '准备阶段,若你有空的装备栏,则将一件随机装备置入你的装备区.',
            shanhe_fuqi: '伏骑',
            shanhe_fuqi_info: '锁定技,当你使用牌时,你令所有与你距离为1的其他角色不能使用或打出牌响应此牌.',
            shanhe_qiongshou: '穷守',
            shanhe_qiongshou_info: '锁定技.①游戏开始时,你废除所有装备栏并摸四张牌.②你的手牌上限+4.',
            shanhe_fenrui: '奋锐',
            shanhe_fenrui_info: '结束阶段,你可以弃置一张牌并回复一个装备栏.系统检索一张对应的装备牌,你使用之.你可以选择一名装备区内牌数小于你的其他角色,对其造成X点伤害(X为你与其装备区内的牌数之差,且每局限一次).',
            jiange_xiaorui: '骁锐',
            jiange_xiaorui2: '骁锐',
            jiange_xiaorui_info: '己方角色于其回合内使用【杀】造成伤害后,其使用【杀】的次数+1.',
            jiange_huchen: '虎臣',
            jiange_huchen_info: '锁定技,你摸牌阶段摸牌数+X(X为你击杀的敌方角色数).',
            shanhe_jueyan: '决堰',
            shanhe_jueyan_info: '出牌阶段限一次,你可以废除一种装备栏,执行对应一项:武器栏,你本回合内使用【杀】的次数上限+3;防具栏,你摸三张牌,且本回合手牌上限+3;坐骑栏,你本回合内使用牌无距离限制;宝物栏,你获得〖集智〗直到回合结束.',
            shanhe_mizhao: '密诏',
            shanhe_mizhao_info: '出牌阶段限一次,你可以将所有手牌交给一名其他角色.若如此做,你令该角色与你指定的另一名有手牌的角色拼点,视为拼点赢的角色对没赢的角色使用一张【杀】.',
            shanhe_congjian: '从谏',
            shanhe_congjian_info: '锁定技,当你于回合外造成伤害,或于回合内受到伤害时,此伤害+1.',
            fadong_fangong: '反攻',
            fadong_fangong_info: '当你成为一名敌方角色使用牌的目标且该牌结算完成后,你可以对其使用一张【杀】(无距离限制).',
            fenghuo_gongao: '功獒',
            fenghuo_gongao_info: '锁定技,当一名角色死亡后,你增加一点体力上限,回复1点体力.',
            fenghuo_fangjun: '方军',
            fenghuo_fangjun_info: '锁定技,当其他角色死亡时,你选择一项:1.回复2点体力;2.摸三张牌.',
            fenghuo_jiban: '羁绊',
            fenghuo_jiban_info: '锁定技,拥有该技能的角色受到伤害后,伤害来源获得一个<羁绊>标记.你对拥有该标记的角色造成的伤害基础值永久增加X(X为其拥有的<羁绊>标记的数量).',
            fenghuo_jinchan: '进谗',
            fenghuo_jinchan_info: '出牌阶段限一次,你可以弃置一张黑色锦囊牌并指定一名其他角色,该角色选择弃两张手牌或失去1点体力.',
            fenghuo_huandang: '宦党',
            fenghuo_huandang_info: '锁定技,你不能成为【决斗】和【乐不思蜀】的目标.',
            fenghuo_suohui: '索贿',
            fenghuo_suohui_info: '锁定技,当你成为其他角色牌的使用目标后,该角色必须选择给你一张牌或者让你摸两张牌.',
            Neihuan_huolu: '祸赂',
            Neihuan_huolu_info: '锁定技,出牌阶段开始时,若你的手牌数为全场最多.你将手牌弃置至与全场手牌数最少的角色相同,并对所有敌方随机造成5点伤害.',
            Neihuan_jingshe: '惊蛇',
            Neihuan_jingshe_info: '锁定技,当你受到伤害后,若此时为敌方角色的回合,该角色不能使用牌指定你为目标直到出牌阶段结束.若此伤害超过1点,你回复1点体力.',
            Neihuan_jiquan: '集权',
            Neihuan_jiquan_info: '锁定技,准备阶段,将你的手牌摸至十张.若你的手牌数为全场唯一最多,你随机获得所有敌方角色各一张牌.',
            Neihuan_luanzheng: '乱政',
            Neihuan_luanzheng_info: '锁定技,敌方角色于其出牌阶段内获得手牌时,若其手牌数超过十张,则你对其造成1点伤害;敌方角色的出牌阶段内,若你本回合受到的伤害超过5点,则其使用一张牌后随机弃置一张牌.',
            Neihuan_luanzhenga: '乱政',
            Neihuan_luanzhenga_info: '锁定技,敌方角色于其出牌阶段内获得手牌时,若其手牌数超过十张,则你对其造成1点伤害;敌方角色的出牌阶段内,若你本回合受到的伤害超过5点,则其使用一张牌后随机弃置一张牌.',
            Neihuan_luanzheng_buff: '乱政',
            Neihuan_luanzhenga_buff: '乱政',
            mitan_zhiba: '制霸',
            mitan_zhiba_info: '锁定技,你获得所有角色拼点弃置的牌.',
            fenghuo_tianyi: '天意',
            fenghuo_tianyi_info: '当有角色发起拼点时,你可以猜测拼点赢的一方,若你猜对,拼点牌进入弃牌堆后,你获得之.',
            mitan_yinghun: '英魂',
            mitan_yinghun_info: '准备阶段,若你已受伤,你可令一名其他角色执行一项:摸X张牌,弃置一张牌;或摸一张牌,弃置X张牌(X为你已损失的体力值)',
            mitan_yingzi: '英姿',
            mitan_yingzi_info: '锁定技,摸牌阶段摸牌时,你额外摸一张牌;你的手牌上限为你的体力上限.',
            fenghuo_xingzuo: '兴作',
            fenghuo_xingzuo2: '兴作',
            fenghuo_xingzuo_info: '出牌阶段开始时,你可观看牌堆底的三张牌并用任意张手牌替换其中等量的牌.若如此做,结束阶段,你可令一名有手牌的角色用所有手牌替换牌堆底的三张牌.若其因此法失去的牌多于三张,则你失去1点体力.',
            fenghuo_linmo: '临摹',
            fenghuo_linmo_info: '当其他角色对你使用仅以你为目标的【杀】或普通锦囊牌结算后,你可以弃置一张手牌,视为你对其使用该牌.',
            fenghuo_qiangshu: '枪术',
            fenghuo_qiangshu_info: '锁定技,己方角色攻击范围+1.',
            fenghuo_qiangshua: '枪术',
            fenghuo_qiangshua_info: '当你使用【杀】造成伤害后,你可以进行一次判定,若结果为红色,你摸两张牌;若结果为黑色,该角色弃置两张牌.',
            fenghuo_zhanfan: '战反',
            fenghuo_zhanfan_info: '锁定技,当你受到伤害时,若伤害来源未装备防具牌,则伤害来源失去等同于此伤害值的体力值.',
            mitan_guiming: '归命',
            mitan_guiming_info: '锁定技,你的回合内,所有其他角色均视为已受伤.',
            syzlb_lianjun: '联军',
            syzlb_lianjun_info: '锁定技.你阵亡后,若当前回合结束后仍有联军在场,你回到战场,并将体力值回复至3点,摸三张牌.',
            fenghuo_yizhuang: '益壮',
            fenghuo_yizhuang_info: '锁定技,你使用【杀】或伤害类锦囊对其他角色造成伤害时,令伤害增加X(X为目标角色的体力上限).',
            fenghuo_haoshou: '皓首',
            fenghuo_haoshou_info: '锁定技,当其他角色受到你造成的伤害时,若伤害值大于1,令伤害减少当前轮数的值(至少为1).',
            fenghuo_junbei: '军备',
            fenghuo_junbei_info: '锁定技,每名己方角色的准备阶段,你需弃置等同于场上己方角色数量的牌,每少一张则失去1点体力.',
            fenghuo_gongjian: '攻坚',
            fenghuo_gongjian_info: '每回合限一次,当有角色使用【杀】指定第一个目标后,若此【杀】的目标和本局游戏内被使用的上一张【杀】的目标的交集A不为空,则你可以依次弃置A中所有角色的至多两张牌,获得以此法弃置的所有【杀】.',
            bingzhu_skill_info: '你可以将两张手牌当【杀】使用或打出.',
            qihuan_cibi_skill: '刺匕',
            qihuan_cibi_skill_info: '你使用黑色牌造成的伤害+1,使用红色牌造成的伤害-1.',
            qihuan_yinyi_skill: '隐衣',
            qihuan_yinyi_skill_info: '普通杀对你无效,当此牌于你的回合外离开你的装备区后,你失去1点体力.',
            qianli_tingqiang: '挺枪',
            qianli_tingqiang_info: '锁定技,你对只有一种颜色手牌的目标造成的伤害+1.',
            shidian_zuijiu: '醉酒',
            shidian_zuijiu_info: '锁定技,你使用的【杀】额外造成1点伤害.',
            shidian_huilei: '挥泪',
            shidian_huilei_info: '锁定技,当你死亡时,击杀你的角色弃置所有的牌.',
            shidian_beiming: '悲鸣',
            shidian_beiming_info: '锁定技,当你死亡时,你令击杀你的角色弃置所有手牌.',
            jiange_longwei: '龙威',
            jiange_longwei_info: '己方角色处于濒死状态时,你可以减少1点体力上限,令其回复至1点体力.',
            jiange_bashi: '拔矢',
            jiange_bashi_info: '每当你成为其他角色使用的【杀】或普通锦囊牌的目标时,你可以从正面翻至背面并摸一张牌,若如此做,此牌对你无效.',
            shanhe_danjing: '啖睛',
            shanhe_danjing_info: '己方角色处于濒死状态时,若你的体力上限大于1,你可以失去1点体力或减少1点体力上限,视为对其使用一张【桃】.',
            jiange_danjing: '啖睛',
            jiange_danjing_info: '己方角色进入濒死状态时,若你的体力上限大于1,你可以失去1点体力或减少1点体力上限,视为对其使用一张【桃】.',
            jiange_tongjun: '统军',
            jiange_tongjun_info: '己方攻城器械攻击范围+2.每轮开始时,己方攻城器械各获得一张【杀】.',
            mitan_jijiang: '激将',
            mitan_jijiang_info: '锁定技,当你使用或打出【杀】后,你摸一张牌,若此牌是基本牌,你的下个出牌阶段出【杀】次数+1.',
            shenwu_dengjie_kunshou: '困兽',
            shenwu_dengjie_kunshou_info: '觉醒技,你陷入濒死时立即将体力回复至5,并且将手牌补至5,将武将牌翻回至正面,并获得【崩坏】.',
            shenwu_dengjie_benghuai: '崩坏',
            shenwu_dengjie_benghuai_info: '锁定技,结束阶段,若你的体力不是全场最少的(或之一),你须减1点体力或体力上限.',
            shanhai_xiemei: '邪魅',
            shanhai_xiemei_info: '锁定技,你与其他角色距离-1.',
            shanhe_jushou: '据守',
            shanhe_jushou_info: '结束阶段,你可以翻面并摸四张牌,弃置一张手牌,若以此法弃置的是装备牌,则你改为使用之.',
            shanhe_shouxi: '守玺',
            shanhe_shouxi_info: '当你成为【杀】的目标后,你可声明一种未以此法声明过的基本牌或锦囊牌的牌名.若使用者弃置一张你声明的牌,其获得你的一张牌;若否,则此【杀】对你无效.',
            shanhai_shehun: '摄魂',
            shanhai_shehun_info: '每当你受到伤害后,你可以获得对你造成伤害的牌,摸一张牌.',
            shanhai_lingsi: '灵嘶',
            shanhai_lingsi_info: '锁定技,准备阶段,你对所有其他角色造成一点伤害.',
            shanhai_taoyuan: '饕怨',
            shanhai_taoyuan_info: '准备阶段,你可以视为使用一张无距离限制的【杀】.',
            shanhai_duoling: '夺灵',
            shanhai_duoling_info: '锁定技,当你造成伤害后,若受伤角色受到此伤害时你与其的距离不大于1,你回复X点体力(X为伤害值).',
            shanhai_jingxin: '惊心',
            shanhai_jingxin_info: '当你使用【杀】对一名其他角色造成伤害后,你可以获得其一张牌.若此牌不为装备牌,则其摸一张牌.若此牌为装备牌,则视为你对其选择的另一名角色使用一张【决斗】.',
            shanhai_yazi: '睚眦',
            shanhai_yazi_info: '当你受到伤害后,你可以获得伤害来源的一张牌.',
            shanhe_mashu: '马术',
            shanhe_mashu_info: '锁定技,你与其他角色距离-1.',
            sw_yaoshou: '妖兽',
            sw_yaoshou_info: '锁定技,你与其他角色距离-2;你的每个回合,首次你使用的基本牌或普通锦囊牌结算两次.',
            xl_duqu: '毒躯',
            xl_duqu_info: '锁定技,当你造成/受到伤害后,受伤角色/伤害来源获得等同于此次伤害值的『蛇毒』标记;你自身不会拥有『蛇毒』标记;你的【桃】均视为【杀】.(『蛇毒』标记:锁定技,拥有『蛇毒』标记的角色准备阶段,需要选择弃置X张牌或者失去X点体力,弃置一枚『蛇毒』标记.X为其拥有的『蛇毒』标记个数.)',
            xl_duqua: '毒躯',
            xl_duqua_info: '锁定技,你受到伤害时,伤害来源获得1枚『蛇毒』标记;你自身不会拥有『蛇毒』标记;你的【桃】均视为【杀】.(『蛇毒』标记:锁定技,拥有『蛇毒』标记的角色准备阶段,需要选择弃置X张牌或者失去X点体力,弃置一枚『蛇毒』标记.X为其拥有的『蛇毒』标记个数.)',
            xl_shedu: '蛇毒',
            shanhe_zaie: '灾厄',
            shanhe_zaie_info: '准备阶段,你可以弃置X张牌,触发全场〖蛇毒〗标记,摸等同于全场最高〖蛇毒〗标记数量的牌(X为拥有〖蛇毒〗标记的角色数量).',
            shanhe_bashou: '八首',
            shanhe_bashou_info: '锁定技,你的体力上限始终为8;当你受到伤害时,若伤害值等于1,将此伤害值改为0,若伤害值大于1,将此伤害值改为1.',
            shanhe_qianjie: '谦节',
            shanhe_qianjie_info: '锁定技,当你进入连环状态时,你防止之.你不能成为延时锦囊牌和其他角色拼点的目标.',
            shanhe_sidao: '伺盗',
            shanhe_sidao_info: '出牌阶段限一次,当你对一名其他角色连续使用两张牌后,你可将一张手牌当【顺手牵羊】对其使用(目标须合法).',
            shanhe_sidaox: '伺盗',
            shanhe_guanxu: '观虚',
            shanhe_guanxu_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,你可将其中一张手牌与牌堆顶五张牌中的一张交换.若如此做,你弃置其手牌中三张花色相同的牌.',
            nianshou_qixiang: '祺祥',
            nianshou_qixiang1: '祺祥',
            nianshou_qixiang2: '祺祥',
            nianshou_qixiang_info: '锁定技,【乐不思蜀】判定时,你的♦️️判定牌视为♥️️;【兵粮寸断】判定时,你的♠️️判定牌视为♣️️.',
            shanhe_jimu: '集目',
            shanhe_jimu_info: '锁定技.当你使用或打出牌后,你获得2枚『目』标记.若『目』的十位数发生变大,则本局游戏中你的摸牌阶段摸牌数、出牌阶段使用【杀】的次数、体力上限均+1,若『目』的百位数发生变大,则令所有敌方角色死亡.',
            sy_chiyi: '赤仪',
            sy_chiyi_info: '锁定技,若游戏轮数不少于4,敌方角色受到的伤害+1;当游戏轮数为7时,你对所有其他角色造成1点火焰伤害;当游戏轮数为10时,你令【焰灵】死亡.',
            sy_qingyi: '青仪',
            sy_qingyi_info: '锁定技,第三轮开始时,己方角色各增加1点体力上限,回复1点体力;第六轮开始时,敌方角色各失去1点体力;第九轮开始时,你复活所有己死亡的己方角色,令这些角色将体力回复至上限,摸四张牌,令所有己方角色获得技能【青囊】.',
            sy_baiyi: '白仪',
            sy_baiyi_info: '锁定技,每名敌方角色的摸牌阶段,若当前轮数小于3,其少摸一张牌;第五轮开始时,每名敌方角色弃置两张牌;当己方角色受到的雷电伤害时,若当前轮数小于7,其防止此伤害.',
            sy_zaoyi: '皂仪',
            sy_zaoyi_info: '锁定技,只要【水神玄冥】存活,你不会成为敌方角色使用锦囊牌的目标,只要【水神共工】存活,你不会成为敌方角色使用基本牌的目标.【水神玄冥】和【水神共工】均死亡后,你摸四张牌,从下回合开始,每个准备阶段使体力值最少的敌方角色失去所有体力.',
            sy_xingxia: '行夏',
            sy_xingxia_info: '锁定技,每两轮限一次,出牌阶段开始时,你对一名其他己方角色造成2点火焰伤害,令所有敌方角色选择一项:1.弃置一张红色牌;2.受到你造成的1点火焰伤害.',
            sy_buchun: '布春',
            sy_buchun_info: '锁定技,每两轮限一次,准备阶段,若场上有己方角色死亡,则你令其体力值回复至1点,手牌补至体力上限,否则你对一名敌方角色造成2点伤害.',
            sy_xingqiu: '刑秋',
            sy_xingqiu_info: '锁定技,每两轮限一次,出牌阶段开始时,你令所有敌方角色进入连环状态,使【明刑柱】获得【殛顶】.',
            sy_qingzhu: '擎柱',
            sy_qingzhu_info: '锁定技,你跳过弃牌阶段,若你没有【殛顶】,你于出牌阶段不能使用【杀】.',
            sy_jiazu: '枷足',
            sy_jiazu_info: '锁定技,准备阶段,弃置你上家和下家的敌方角色的装备区内的坐骑牌.',
            sy_jiding: '殛顶',
            sy_jiding_info: '锁定技,其他己方角色受到伤害后,若伤害来源为敌方角色,则你视为对伤害来源使用雷【杀】,若此【杀】造成伤害,【金神蓐收】回复1点体力.你失去此技能(只有发动了才会失去,没发动不会失去).',
            sy_cuidu: '淬毒',
            sy_cuidu_info: '锁定技,你对敌方角色造成伤害后,若其没有<中毒>,你令其获得<中毒>,令木神勾芒摸一张牌.',
            sy_zhongdu: '中毒',
            sy_zhongdu_bg: '毒',
            sy_zhongdu_info: '锁定技,准备阶段,你进行一次判定,若结果为♦️️,你失去1点体力,否则你失去此技能.',
            shanhe_shenfu: '神赋',
            shanhe_shenfu_info: '回合结束时,若你的手牌数为:奇数,你对一名其他角色造成1点雷电伤害.若其因此死亡,你可以重复此流程;偶数,你令一名角色摸一张牌或你弃置其一张手牌,若其手牌数等于体力值,你可以重复此流程(不能对本回合指定过的目标使用).',
            shanhe_faen: '法恩',
            shanhe_faen_info: '当一名角色翻至正面或进入连环状态后,你可以令其摸一张牌.',
            sy_fentian: '焚天',
            sy_fentian_info: '出牌阶段限一次,你可以对一名其他角色造成1点火焰伤害,若其死亡,此阶段你发动此技能的次数限制+1.',
            shanhe_sishe: '巳蛇',
            shanhe_sishe_info: '当你受到伤害后,你可以对伤害来源造成等量伤害.',
            shanhe_xietu: '邪徒',
            shanhe_xietu_info: '当你受到伤害后,你可弃置一张牌,对伤害来源造成同等伤害.',
            shanhe_yangkuang: '阳狂',
            shanhe_yangkuang_info: '当你回复体力后,若你的体力值等于体力上限,则你可以视为使用一张【酒】,当前回合角色摸一张牌,你摸一张牌.',
            shanhe_zhengding: '正订',
            shanhe_zhengding_info: '锁定技,当你于回合外使用或打出牌响应其他角色使用的牌时,若这两张牌颜色相同,则你加1点体力上限.',
            shanhe_yilie: '义烈',
            shanhe_yilie_info: '每轮每种牌名限一次.你可以将两张颜色相同的手牌当做任意一种基本牌使用.',
            shanhe_zhuiji: '追击',
            shanhe_zhuiji_info: '锁定技.①你至体力值不大于你的角色的距离为1.②当你使用【杀】指定距离为1的角色为目标后,你令其选择一项:⒈弃置一张牌.⒉重铸装备区内的所有牌.',
            shanhe_shihun: '噬魂',
            shanhe_shihun_info: '当你使用【杀】造成伤害后,你随机获得目标的一个非锁定技能.',
            shanhe_tonghua: '同化',
            shanhe_tonghua_info: '锁定技,你对妖势力角色造成的伤害+1;敌方角色对你造成伤害后,其进行一次判定,若结果为♠️️,则其势力变更为妖.',
            shanhe_jueman: '蟨蛮',
            shanhe_jueman_info: '锁定技.一名角色的回合结束时,若本回合被使用过的基本牌数不小于2,且前两张基本牌的使用者:均不为你,你视为使用本回合被使用的第三张基本牌;有且仅有其中之一为你,你摸一张牌.',
            shanhe_jianman: '鹣蛮',
            shanhe_jianman_info: '锁定技.一名角色的回合结束时,若本回合被使用过的基本牌数不小于2,且前两张基本牌的使用者:均为你,你视为使用其中的一张牌;有且仅有其中之一为你,你弃置另一名使用者一张牌.',
            shanhe_shenshia: '神视',
            shanhe_shenshia_info: '当你受到伤害后,你移去1枚『目』标记;当你造成伤害时,你可将伤害值修改为『目』的个位数数值.',
            shanhe_sanyi: '散疫',
            shanhe_sanyi_info: '你的回合开始时,所有其他角色获得1枚『疫』标记;当你造成伤害后,令受伤角色获得1枚『疫』标记.(『疫』标记:锁定技,拥有『疫』标记的角色准备阶段,若『疫』的标记数达到6,则其减少1点体力上限,并弃置6枚『疫』标记.)',
            shanhe_yuren: '羽刃',
            shanhe_yuren_info: '当你造成伤害后,你可进行一次判定,若结果为红色,则对一名其他角色造成1点雷电伤害.',
            shanhe_zonghe: '纵合',
            shanhe_zonghe_info: '妖势力角色造成伤害后,你回复1点体力,你可令其摸两张牌.',
            shanhe_chenshuo: '谶说',
            shanhe_chenshuo_info: '结束阶段,你可以展示一张手牌,展示牌堆顶的一张牌.若这两张牌类型/花色/点数/牌名字数中任一项相同且已展示的牌数小于3,则你重复此流程,获得所有所有展示牌.',
            jiange_jiaoxie: '缴械',
            jiange_jiaoxie_info: '出牌阶段限一次,你可令至多两名敌方守城器械交给你一张牌,每少选一个目标便摸一张牌.',
            jiange_shuailing: '帅令',
            jiange_shuailing_info: '锁定技,己方角色摸牌阶段开始时,其进行一次判定,若结果为黑色,则其获得此判定牌.',
            shanhe_buwu: '布武',
            shanhe_buwu_info: '主公技,己方角色造成伤害时,伤害值+1且令你摸等同于伤害值的牌;防止己方角色对你造成的伤害.',
            shanhe_xingluan: '兴乱',
            shanhe_xingluan_info: '出牌阶段限一次,当你使用一张牌后,你可以选择一项:①观看牌堆中的两张点数为6的牌并获得其中一张(没有则改为摸一张牌);②令一名其他角色弃置一张点数为6的牌或交给你一张牌;③获得场上的一张点数为6的牌.',
            shanhe_lingdong: '灵动',
            shanhe_lingdong_info: '锁定技,当你受到伤害时,你可进行一次判定,若结果为红色,则防止此伤害.',
            shanhe_shuanghun: '双魂',
            shanhe_shuanghun_info: '限定技,当你处于濒死状态时,你可以复原你的武将牌,将手牌摸至体力上限并将体力回复至体力上限,若场上存在其他己方角色,你视为此技能未发动.',
            shanhe_jiesi: '结丝',
            shanhe_jiesi_info: '准备阶段与结束阶段开始时,你可令所有其他角色进入连环状态.',
            shidian_xixing: '吸星',
            shidian_xixing_info: '锁定技,准备阶段,你对任意一名连环状态的其他角色造成1点雷电伤害,你回复1点体力.',
            shanhe_zhudu: '蛛毒',
            shanhe_zhudu_info: '锁定技,你的回合内,进入连环状态的角色获得1枚『瘴』标记.(『瘴』标记:锁定技,拥有『瘴』标记的角色准备阶段,需要选择失去X点体力或者减少X点体力上限,弃置所有『瘴』标记.X为其拥有的『瘴』标记个数.)',
            shanhe_xuzhang: '蓄瘴',
            shanhe_xuzhang_info: '锁定技,你对其他角色造成伤害后,其获得等同于此伤害量枚『瘴』标记.(『瘴』标记:锁定技,拥有『瘴』标记的角色准备阶段,需要选择失去X点体力或者减少X点体力上限,弃置所有『瘴』标记.X为其拥有的『瘴』标记个数.)',
            shanhe_lianzhang: '连瘴',
            shanhe_lianzhang_info: '当你受到伤害后,你可对所有敌方角色造成你已损失体力值的伤害并令其获得等量枚『瘴』标记.(『瘴』标记:锁定技,拥有『瘴』标记的角色准备阶段,需要选择失去X点体力或者减少X点体力上限,弃置所有『瘴』标记.X为其拥有的『瘴』标记个数.)',
            shanhe_zhangdu: '瘴毒',
            shanhe_zhangdu_info: '锁定技,防止你造成的伤害,目标获得伤害量+1枚『瘴』标记.(『瘴』标记:锁定技,拥有『瘴』标记的角色准备阶段,需要选择失去X点体力或者减少X点体力上限,弃置所有『瘴』标记.X为其拥有的『瘴』标记个数.)',
            shanhe_zhang: '瘴',
            shanhe_busi: '不死',
            shanhe_busi_info: '锁定技,你无法使用【桃】;当你进入濒死状态时,你将体力回至体力上限,获2枚『碎』标记.(『碎』标记:锁定技,每轮开始时,若『碎』的标记数大于当前体力值,你死亡.)',
            shanhe_baoyu: '暴雨',
            shanhe_baoyu_info: '锁定技,每当你受到火焰伤害时,防止此伤害;每轮开始时,对所有其他角色各造成1点伤害.',
            shanhe_sanku: '三窟',
            shanhe_sanku_info: '锁定技.①当你进入濒死状态时,你减1点体力上限,将体力回复至体力上限.②当你加体力上限前,取消之.',
            shanhe_fangquan: '放权',
            shanhe_fangquan_info: '出牌阶段开始前,你可以跳过此阶段.若如此做,弃牌阶段开始时,你可以弃置一张手牌,令一名其他角色进行一个额外回合.',
            shanhe_fangquana: '放权',
            shanhe_fangquana_info: '你可跳过你的出牌阶段,若如此做,回合结束时,你可以弃置一张手牌并令一名其他角色进行一个额外的回合.',
            shanhe_tuntian: '屯田',
            shanhe_tuntian_info: '①当你于回合外失去牌后,你可以判定.若判定结果不为♥️️,则你将此牌置于你的武将牌上,称为<田>.②你计算与其他角色的距离时-X(X为你武将牌上<田>的数目).',
            shanhe_zaoxian: '凿险',
            shanhe_zaoxian_info: '觉醒技,准备阶段,若你武将牌上<田>的数量达到3张或更多,则你减1点体力上限,并获得技能〖急袭〗.',
            shanhe_jixi: '急袭',
            shanhe_jixi_info: '出牌阶段,你可以将任意一张<田>当作【顺手牵羊】使用.',
            shanhe_jicai: '积财',
            shanhe_jicai_info: '锁定技,一名角色回复体力后,你与其各摸一张牌.',
            shanhe_qianxi: '潜袭',
            shanhe_qianxi_info: '准备阶段,你可以摸一张牌,并弃置一张牌,令一名距离为1的角色不能使用或打出与你弃置的牌颜色相同的手牌直到回合结束.',
            shanhe_qianxia: '潜袭',
            shanhe_qianxia_info: '准备阶段,你可以进行判定,你选择距离为1的一名角色,直到回合结束,该角色不能使用或打出与结果颜色相同的手牌.',
            shanhe_xiaoxi: '骁袭',
            shanhe_xiaoxi_info: '一轮游戏开始时,你可以视为使用一张无距离限制的【杀】.',
            shanhe_cuijue: '摧决',
            shanhe_cuijue_info: '每回合每名角色限一次.出牌阶段,你可以弃置一张牌,对攻击范围内距离最远的一名其他角色造成1点伤害(没有则不选).',
            shanhe_yaowu: '耀武',
            shanhe_yaowu_info: '锁定技,当你受到牌造成的伤害时,若此牌为红色,则伤害来源摸一张牌;否则你摸一张牌.',
            shanhe_niluan: '逆乱',
            shanhe_niluan_info: '体力值大于你的其他角色的结束阶段,若其本回合内使用过【杀】,则你可以将一张黑色牌当作【杀】对其使用(无距离限制).',
            shanhe_cuorui: '挫锐',
            shanhe_cuorui_info: '锁定技,①游戏开始时,你将手牌摸至场上存活人数张(至多摸至8张).②当你成为延时锦囊牌的目标后,你跳过下个判定阶段.',
            sy_kuangxiao: '狂啸',
            sy_kuangxiao_info: '锁定技,你于回合内使用【杀】无距离限制且指定所有敌方角色为目标.',
            shanhe_yaowang: '妖王',
            shanhe_yaowang_info: '锁定技,当你使用【杀】或伤害类锦囊时,需与此牌所有目标同时拼点,你获得所有没赢的其他角色的拼点牌.',
            shanhe_shijiu: '嗜酒',
            shanhe_shijiu_info: '你可以将一张黑色牌当做【酒】使用.锁定技,你使用【酒】的次数+2;当你使用【酒】后,你使用的下一张【杀】不可被响应,此【杀】造成伤害后,你回复等量体力并摸等量的牌.',
            shanhe_roulin: '肉林',
            shanhe_roulin_info: '锁定技.你对女性角色、女性角色对你使用【杀】时,都需连续使用两张【闪】才能抵消.',
            shanhe_fangzhu: '放逐',
            shanhe_fangzhu_info: '当你受到伤害后,你可令一名其他角色摸X张牌(X为你已损失的体力值),该角色将武将牌翻面.',
            shanhe_huji: '虎骑',
            shanhe_huji_info: '锁定技,你与其他角色的距离-1,当你于回合外受到伤害后,你可进行判定,若结果为红色,视为你对伤害来源使用一张【杀】(无距离限制).',
            shanhe_shoucheng: '守成',
            shanhe_shoucheng_info: '当与你势力相同的一名角色于其回合外失去手牌时,若其没有手牌,则你可以令其摸一张牌.',
            shanhe_zhouyu: '骤雨',
            shanhe_zhouyu_miehuo: '骤雨',
            shanhe_zhouyu_info: '锁定技.其他角色造成火焰伤害时,取消之;一名角色受到雷电伤害后,所有与其座次相邻的角色失去1点体力.',
            shanhe_lieshu: '烈暑',
            shanhe_lieshu_info: '锁定技.其他角色的结束阶段开始时,若其体力值为全场最大,则其失去1点体力.',
            shanhe_yanshuang: '严霜',
            shanhe_yanshuang_info: '锁定技.其他角色的结束阶段开始时,若其体力值为全场最小,则其失去1点体力.',
            shanhe_ningwua: '凝雾',
            shanhe_ningwua_info: '锁定技.其他角色使用【杀】指定与其座次不相邻唯一目标时,则其判定.若判定结果的点数大于此【杀】,则此【杀】对其无效.',
            shanhe_xueji: '雪恨',
            shanhe_xueji_info: '出牌阶段限一次,你可以弃置一张红色牌,选择至多X名角色,横置这些角色并对其中一名角色造成1点火焰伤害.(X为你已损失的体力值且至少为1)',
            shanhe_qianxi2: '潜袭',
            shanhe_qianxi2_bg: '袭',
            shanhe_huangkong: '惶恐',
            shanhe_huangkong_info: '锁定技,摸牌阶段你的摸牌量翻倍;弃牌阶段你的弃牌量翻倍.',
            shanhe_zongyu: '纵欲',
            shanhe_zongyu_info: '锁定技,你造成/受到的伤害+1;你摸牌阶段摸牌数/弃牌阶段弃牌数+1;你回复体力/体力流失数量+1.',
            shanhe_duling: '妒灵',
            shanhe_duling_info: '每轮限一次,出牌阶段,你可指定一名敌方角色,若其手牌数/体力上限/装备区内的牌数大于你,则你获得其一半手牌/当前体力/装备区内的牌(向上取整).',
            jiange_yingji: '影戟',
            jiange_yingji_info: '出牌阶段限一次,你展示所有手牌视为对一名其他角色使用一张【杀】,此【杀】造成伤害后,令此伤害修改为X.(X为你展示牌中包含的类型)',
            jiange_zhene: '震恶',
            jiange_zhene_info: '锁定技,当你于出牌阶段使用牌指定目标后,若其手牌数不大于你,其无法响应你使用的牌.',
            jiange_weizhu: '卫主',
            jiange_weizhu_info: '其他己方角色受到伤害时,你可以弃置一张手牌令此伤害无效.',
            jiange_beishi: '备矢',
            jiange_beishi_info: '锁定技,当其他己方角色对敌方角色造成伤害后,你摸一张牌.',
            jiange_zhengji: '整纪',
            jiange_zhengji_info: '锁定技,己方角色装备区内的牌被弃置后,你令所有己方角色各摸一张牌.',
            shty_zhanfa_1: '后发先至',
            shty_zhanfa_1_info: '摸牌阶段,你的摸牌数-1;你的回合结束时,你摸两张牌.',
            shty_zhanfa_2: '二连击·贰',
            shty_zhanfa_2_info: '你的出牌阶段,你的出杀次数+2.',
            shty_zhanfa_3: '药理精通·壹',
            shty_zhanfa_3_info: '回复体力时,额外回复1点.',
            shty_zhanfa_4: '求仁得仁',
            shty_zhanfa_4_info: '回合外失去最后一张手牌后,摸1张牌.',
            shty_zhanfa_5: '五鬼搬运',
            shty_zhanfa_5_info: '你的回合开始时,从随机敌方手牌区获得1张牌.',
            shty_zhanfa_6: '牢固装备',
            shty_zhanfa_6_info: '你的装备不能被弃置.',
            shty_zhanfa_7: '万物化甲',
            shty_zhanfa_7_info: '若你没有【防具】,进入战斗时装备随机【防具】.',
            shty_zhanfa_8: '手到擒来·叁',
            shty_zhanfa_8_info: '每回合你使用第六张牌后,你摸两张牌.',
            shty_zhanfa_9: '塞翁失马',
            shty_zhanfa_9_info: '受到1点伤害后,摸一张牌.',
            xl_jiushou: '九首',
            xl_jiushou_info: '锁定技,你的手牌上限为9.你始终跳过摸牌阶段.出牌阶段开始时和结束阶段,你将手牌摸至手牌上限.',
            xl_echou: '恶臭',
            xl_echou_info: '锁定技,当其他角色使用【桃】或【酒】时,其获得1枚『蛇毒』标记.',
            xl_re_echou: '恶臭',
            xl_re_echou_info: '锁定技,当敌方角色回复体力时,其获得1枚『蛇毒』标记.每名角色的结束阶段,你令随机一名敌方角色获得1枚『蛇毒』标记.',
            zy_bingxian: '兵燹',
            zy_bingxian_info: '锁定技,其他角色的回合结束时,若其回合内没有使用【杀】,你对其造成一点伤害.',
            zy_juyuan: '巨猿',
            zy_juyuan_info: '锁定技,你的出牌阶段内,若你已受伤,则你使用【杀】可额外指定1个目标.',
            zy_xushi: '蓄势',
            zy_xushi_info: '锁定技,你的出牌阶段结束时,你令自己翻面;当你的武将牌从背面翻至正面时,对所有其他角色造成随机1~2点伤害,随机弃置其2~3张牌.',
            shanhe_xushi: '蓄势',
            shanhe_xushi_info: '锁定技,你的出牌阶段结束时,你令自己翻面;当你的武将牌从背面翻至正面时,对所有其他角色造成随机1~2点伤害.',
            bf_zhaohuo: '兆火',
            bf_zhaohuo_info: '锁定技,你造成的所有伤害均视为火焰伤害;你的回合中,所有其他角色的防具牌无效;你免疫所有火焰伤害.',
            shanhe_zhaohuo: '兆火',
            shanhe_zhaohuo_info: '锁定技,你造成的所有伤害均视为火焰伤害;你的回合中,所有其他角色的防具牌无效;你免疫所有火焰伤害;你使用红色牌造成的伤害值和回复量+1.',
            bf_honglian: '红莲',
            bf_honglian_info: '锁定技,你的红色牌不计入你的手牌上限;准备阶段,你随机获得牌堆中0到3张红色牌,随机对3到0名其他角色各造成1点火焰伤害.',
            shanhe_honglian: '红莲',
            shanhe_honglian_info: '锁定技,你的红色牌不计入手牌上限;回合开始时,你随机获得牌堆中1~3张红色牌,随机对3~1名其他角色各造成1点火焰伤害.',
            bf_yanyu: '炎狱',
            bf_yanyu_info: '锁定技,其他角色的准备阶段,其进行判定,若为红色则其受到1点火焰伤害并令你获得此判定牌,重复此过程(每个回合最多判定3次).',
            shanhe_yanyu: '炎狱',
            shanhe_yanyu_info: '锁定技,其他角色的准备阶段,其进行判定,若为红色则其受到1点火焰伤害,重复此过程(每个回合最多判定3次).',
            yz_fengdong: '封冻',
            yz_fengdong_info: '锁定技,你的回合内,其他角色的非锁定技无效.',
            yz_xunyou: '巡游',
            yz_xunyou_info: '锁定技,其他角色的准备阶段,你随机获得场上除你以外的一名角色区域内的一张牌,若你获得的是装备牌,则你使用之.',
            yz_sipu: '司圃',
            yz_sipu_info: '锁定技,你的出牌阶段内,若你使用的牌数小于等于两张,其他角色无法使用或打出牌.',
            hd_wuzang: '无脏',
            hd_wuzang_info: '锁定技,摸牌阶段,你的摸牌基数改为X(X为你的体力值一半且至少为5);当你于回合内使用牌后,你本回合手牌上限-1.',
            shanhe_wuzang: '无脏',
            shanhe_wuzang_info: '锁定技,摸牌阶段,你的摸牌基数改为X(X为你的体力值一半且至少为5);当你于回合内使用牌后,你随机弃置一张基本牌,本回合手牌上限-1.',
            hd_xiangde: '相德',
            hd_xiangde_info: '锁定技,其他角色对你造成伤害时,若其装备区内有武器牌,此伤害+1.',
            hd_yinzei: '隐贼',
            hd_yinzei_info: '锁定技,若你没有手牌,其他角色对你造成伤害后,你随机获得其一张牌.',
            qq_zhue: '助恶',
            qq_zhue_info: '锁定技,当其他角色造成伤害后,其与你各摸一张牌.',
            qq_futai: '复态',
            qq_futai_info: '锁定技,你的回合外,其他角色不能使用【桃】;准备阶段,你令所有角色回复1点体力.',
            qq_yandu: '厌笃',
            qq_yandu_info: '锁定技,其他角色回合结束后,若其未造成过伤害,你获得其一张牌.',
            tw_minwan: '冥顽',
            tw_minwan_info: '锁定技,当你于回合内使用牌对其他角色造成伤害后,你于此回合内使用牌只能指定你与这些角色为目标,且你每使用一张牌,摸一张牌.',
            tw_nitai: '拟态',
            tw_nitai_info: '锁定技,防止你于回合内受到的伤害.',
            tw_luanchang: '乱常',
            tw_luanchang_info: '锁定技,准备阶段和结束阶段,你视为使用【南蛮入侵】或【万箭齐发】.',
            tt_tanyu: '贪欲',
            tt_tanyu_info: '锁定技,跳过你的弃牌阶段;结束阶段,若你的手牌数为全场最多,你随机弃置两张手牌.',
            shanhe_tanyu: '贪欲',
            shanhe_tanyu_info: '锁定技,跳过你的弃牌阶段;结束阶段,若你的手牌数为全场最多,你失去1点体力.',
            tt_cangmu: '藏目',
            tt_cangmu_info: '锁定技,你的摸牌阶段摸牌数改为X(X为存活角色数).',
            tt_jicai: '积财',
            tt_jicai_info: '锁定技,一名角色回复体力后,你摸一张牌.',
            sw_xiongshou: '凶兽',
            sw_xiongshou_info: '锁定技,你使用【杀】造成的伤害+1;你与其他角色距离-1;你不能被翻面;每回合首次受到大于1点的伤害后,视为对伤害来源使用一张【杀】.',
            sw_eyi: '恶意',
            sw_eyi_info: '锁定技,每个回合,若你的当前体力值等于体力上限,则目标无法响应你本回合使用的首张【杀】.',
            sw_shendie: '传承',
            shanhe_songsang: '送丧',
            shanhe_songsang_info: '限定技,其他角色死亡时,你可以回复1点体力(若你未受伤,则改为加一点体力上限);获得技能〖展骥〗.',
            shanhai_zhiyi: '执义',
            shanhai_zhiyi_info: '锁定技,一名角色的结束阶段开始时,若你本回合内使用或打出过基本牌,则你选择一项:1.摸一张牌.2.视为使用一张你本回合内使用或打出过的基本牌.',
            shanhe_junxing: '峻刑',
            shanhe_junxing_info: '出牌阶段限一次,你可以弃置至少一张手牌并选择一名其他角色,该角色需弃置一张与你弃置的牌类别均不同的手牌,否则其先将其武将牌翻面再摸X张牌(X为你以此法弃置的手牌数量).',
            shanhe_yuce: '御策',
            shanhe_yuce_info: '当你受到伤害后,你可以展示一张手牌,并令伤害来源选择一项:弃置一张与此牌类型不同的手牌,或令你回复一点体力.',
            shanhe_rensan: '人三',
            shanhe_rensan_info: '锁定技,你每损失3点体力,减少1点体力上限.',
            shanhe_wangliang: '魍魉',
            shanhe_wangliang_info: '你拥有三种状态(初始为赤),发动此技能后切换至下一状态(循环).赤:当你造成伤害时,你可令此伤害翻倍;黄:当你受到伤害后,你回复等量体力;青:当你成为其他角色使用牌的目标时,弃置其一半手牌.',
            shanhe_wangliangb: '魍魉',
            shanhe_wangliangb_info: '你拥有三种状态(初始为青),发动此技能后切换至下一状态(循环).赤:当你造成伤害时,你可令此伤害翻倍;黄:当你受到伤害后,你回复等量体力;青:当你成为其他角色使用牌的目标时,弃置其一半手牌.',
            fenghuo_yicong: '义从',
            fenghuo_yicong_info: '锁定技,你计算与其他角色的距离时-1.若你的体力值不大于2,则其他角色计算与你的距离时+1.',
            shanhe_bingxin: '冰心',
            shanhe_bingxin_info: '每种牌名每回合限一次.当你需要使用基本牌时,若你的手牌数等于体力值且这些牌的颜色均相同,则你可以摸一张牌,视为使用一张基本牌.',
            jiange_chuanyun: '穿云',
            jiange_chuanyun_info: '结束阶段,你可以对一名体力值大于你的敌方角色造成1点伤害.',
            jiange_leili: '雷厉',
            jiange_leili_info: '当你使用【杀】造成伤害后,你可以对另一名敌方角色造成1点雷电伤害.',
            jiange_fengxing: '风行',
            jiange_fengxing_info: '准备阶段,你可以视为对一名敌方角色使用了一张【杀】.',
            jiange_konghun: '控魂',
            jiange_konghun_info: '出牌阶段开始时,若你已损失体力值不小于敌方角色数,你可以对所有敌方角色各造成1点雷电伤害,你回复X点体力(X为受到伤害的角色数).',
            jiange_fanshi: '反噬',
            jiange_fanshi_info: '锁定技,结束阶段,你失去1点体力.',
            jiange_xuanlei: '玄雷',
            jiange_xuanlei_info: '锁定技,准备阶段,令所有判定区内有牌的敌方角色受到1点雷电伤害.',
            lzzd_leigu: '擂鼓',
            tongque_fugu: '抚孤',
            tongque_fugu_info: '锁定技,己方角色使用牌指定一名其他角色为唯一目标时,你随机弃一张牌,令此牌无法被响应或抵消;其他己方角色成为敌方角色使用牌的唯一目标时,你摸一张牌并令此牌的目标改为自己.',
            tongque_qingxi: '倾袭',
            tongque_qingxi_info: '当你使用【杀】或【决斗】指定目标后,你可以令其选择一项:1、弃置X张手牌(X为你攻击范围内的角色数,且当你装备区内有武器牌/没有武器牌时至多为4/2);2、令此牌的伤害值+2且你进行判定,若结果为红色,则其不能响应此牌.',
            tongque_shenpin: '神品',
            tongque_shenpin_info: '锁定技,每当你使用一张牌后,若使用的牌为黑色:随机弃置一张红色牌并对一名敌方角色造成1点伤害;若使用的牌为红色:随机弃置一张黑色牌并回复1点体力.当你成为其他角色使用的牌的目标后,若此牌为黑色:从牌堆获得一张红色牌;若此牌为红色:从牌堆获得一张黑色牌.',
            tongque_yizhong: '毅重',
            tongque_yizhong_info: '锁定技,你造成伤害时,伤害增加X;你受到伤害时,随机弃置场上一张黑色装备牌防止此伤害.(X为场上黑色装备数量)',
            tongque_wenyong: '文涌',
            tongque_wenyong_info: '当你一次获得两张或以上的牌时,若这些牌的种类相同,本回合内你使用或打出该类型的牌时可以摸一张牌.',
            tongque_xiaowu: '绡舞',
            tongque_xiaowu_info: '出牌阶段限一次,你可以选择任意名座位连续且包含你的上家/下家的角色.这些角色依次选择一项:⒈令你摸两张牌;⒉其摸两张牌.若选择选项一的角色数大于选项二的角色数,则你获得两枚<沙>;若选择选项二的角色数大于选项一的角色数,则你对所有敌方角色依次造成2点伤害.',
            tongque_wuchi: '武痴',
            tongque_wuchi_info: '锁定技,你使用的【杀】或【决斗】被响应时,对血量最少的一名敌方角色造成2点伤害.',
            tongque_huomo: '活墨',
            tongque_huomo_info: '当你需要使用基本牌时(每种牌名每回合限一次),你可以将一张黑色牌置于牌堆顶,视为使用此基本牌(视为使用【杀】有距离限制且计入出牌阶段使用限制).',
            tongque_zuoding: '佐定',
            tongque_zuoding_info: '当其他角色于其回合内使用♠️️牌指定目标后,若本回合内没有角色受到过伤害,则你可以令其中一名目标角色与你各摸一张牌.',
            tongque_chuanglie: '疮裂',
            tongque_chuanglie_info: '锁定技,当你对其他角色造成伤害时,若你的体力值小于受伤的角色,你失去X点体力,令该伤害增加X.(X为你当前的体力值)',
            tongque_chengzhang: '成章',
            tongque_chengzhang_info: '锁定技,每回合限三次,每当你使用基本牌后,从牌堆中随机获得一张锦囊牌;每当你使用锦囊牌后,从牌堆中随机获得一张装备牌;每当你使用装备牌后,从牌堆中随机获得一张基本牌.当有角色使用或打出【酒】,本回合此技能可发动次数+1.',
            tongque_songwei: '颂威',
            tongque_songwei_info: '锁定技,每当魏势力角色造成伤害后,你的下回合摸牌阶段多摸一张牌;每当魏势力角色受到伤害后,你随机使用一张牌堆中的装备牌.',
            tongque_jinpao_skill: '锦袍',
            tongque_jinpao_skill_info: '锁定技,跳过你的回合.你死亡时,令伤害来源使用一张【西川红锦袍】.',
            tongque_tongque: '铜雀',
            tongque_tongque_info: '锁定技,你的回合开始时,你随机获得所有男性角色的各一张牌.你以此法获得的牌中,若基本牌最多,你本回合使用基本牌无次数和距离限制;若锦囊牌最多,你本回合使用锦囊牌时摸一张牌;若装备牌最多,你本回合使用装备牌时随机弃置所有敌方角色各一张牌.',
            tongque_jiushi1: '酒诗',
            tongque_jiushi2: '酒诗',
            tongque_jiushi3: '酒诗',
            tongque_jiushi4: '酒诗',
            tongque_jiushi: '酒诗',
            tongque_jiushi_info: '当你需要使用一张【酒】时,若你的武将牌正面朝上,则你可以将武将牌翻面并视为使用了一张【酒】;当你受到伤害时,若你的武将牌背面朝上,则你可在此伤害结算后将武将牌翻回正面.你每次使用酒后,你使用杀的次数+1直到你的回合结束.',
            shanhe_jiushi: '酒诗',
            shanhe_jiushi1: '酒诗',
            shanhe_jiushi2: '酒诗',
            shanhe_jiushi3: '酒诗',
            shanhe_jiushi_info: '当你需要使用一张【酒】时,若你的武将牌正面朝上,则你可以将武将牌翻面并视为使用了一张【酒】;当你受到伤害时,若你的武将牌背面朝上,则你可在此伤害结算后将武将牌翻回正面.',
            tongque_bifa: '笔伐',
            tongque_bifa_info: '结束阶段开始时,你可以将一张手牌移出游戏并指定一名其他角色.该角色的准备阶段,其观看你移出游戏的牌并选择一项:交给你两张与此牌类型相同的手牌并获得此牌;或将此牌置入弃牌堆,失去2点体力.',
            tongque_songci: '颂词',
            tongque_songci_info: '①出牌阶段,你可以选择一名本回合未以此法选择过的角色.若其手牌数:大于其体力值,其弃置两张牌;不大于其体力值,其摸两张牌.②弃牌阶段结束时,你摸两张牌.',
            tongque_xiwen: '檄文',
            tongque_xiwen_info: '锁定技,敌方角色的回合开始时,手牌唯一最多的敌方角色弃置一半的手牌,血量唯一最多的敌方角色失去1点体力.',
            tongque_duopao: '夺袍',
            tongque_duopao_info: '锁定技,其他角色使用【西川红锦袍】时,你摸一张牌.若使用者为敌方,对其造成1点伤害.',
            tongque_feipao: '绯袍',
            tongque_feipao_info: '出牌阶段,当你装备【西川红锦袍】时,你可将一张手牌当作无距离限制且不计入次数限制的【杀】使用.你每以此法使用一张【杀】,本回合后续造成的伤害+1,且当此【杀】结算完毕后,你进行一次判定,若判定牌的花色与此【杀】花色相同,你受到1点无伤害来源的伤害.',
            tongque_zhengpao: '争袍',
            tongque_zhengpao_info: '锁定技,当你装备【西川红锦袍】时,己方角色使用【杀】指定目标后,你对目标角色造成1点伤害.',
            tongque_jiepao: '劫袍',
            tongque_jiepao_info: '锁定技,当你装备【西川红锦袍】时,己方角色使用【杀】指定目标后,你随机获得目标角色一张手牌.',
            tongque_pipao: '披袍',
            tongque_pipao_info: '锁定技,当你装备【西川红锦袍】时,己方角色受到伤害后,伤害来源需弃置X张牌,否则你对其造成X点伤害.(X为己方角色受到的伤害值)',
            tongque_hujia: '护驾',
            tongque_hujia_info: '锁定技,每当有角色使用或打出【闪】时,你摸两张牌并回复1点体力.',
            tongque_weiwu: '魏武',
            tongque_weiwu_info: '锁定技,己方魏势力角色造成伤害时,伤害增加X,摸牌阶段额外摸X张牌.(X为场上魏势力角色数量)',
            tongque_weiwua: '魏武',
            tongque_weiwua_info: '锁定技,你造成伤害时,伤害增加X,摸牌阶段额外摸X张牌.(X为场上己方魏势力角色数量)',
            tongque_pengri: '捧日',
            tongque_pengri_info: '锁定技,你对其他角色造成伤害时,若你在其攻击范围内,此伤害增加X;其他角色对你造成伤害时,若你不在其攻击范围内,此伤害减少X.(X为你与其他角色的距离)',
            fenghuo_dimeng: '缔盟',
            fenghuo_dimeng_info: '出牌阶段限一次,你可以选择其他两名角色,你弃置等同于这两名角色手牌数量之差的牌,交换他们的手牌.',
            fenghuo_aocai: '傲才',
            fenghuo_aocai_info: '当你于回合外需要使用或打出一张基本牌时,你可以观看牌堆顶的两张牌(若你没有手牌则改为四张).若你观看的牌中有此牌,你可以使用打出之.',
            fenghuo_qiaoshui: '巧说',
            fenghuo_qiaoshui_info: '出牌阶段,你可与一名其他角色拼点.若你赢,你使用的下一张基本牌或普通锦囊牌可以额外指定任意一名其他角色为目标或减少指定一个目标;若你没赢,你结束出牌阶段且本回合内锦囊牌不计入手牌上限.',
            shanhe_jiuchi: '酒池',
            shanhe_jiuchi_info: '你可以将一张♠️️手牌当做【酒】使用.锁定技,你使用【酒】无次数限制,且当你于回合内使用带有【酒】效果的【杀】造成伤害后,你令你的【崩坏】失效直到回合结束.',
            fenghuo_xiongyi: '雄异',
            fenghuo_xiongyi_info: '限定技,出牌阶段,你可以令与你势力相同的所有角色各摸三张牌,若你的势力是角色最少的势力(或之一),则你回复1点体力.',
            fenghuo_xiongyia: '雄异',
            fenghuo_xiongyia_info: '限定技,出牌阶段,你可以令所有己方角色各摸三张牌,若己方角色数少于敌方角色数,则你回复1点体力.',
            fenghuo_suishi: '随势',
            fenghuo_suishi2: '随势',
            fenghuo_suishi_info: '锁定技,其他角色进入濒死状态时,若伤害来源为己方角色,你摸一张牌;其他角色死亡时,若其为其他己方角色,你失去1点体力.',
            shanhe_kangge: '抗歌',
            shanhe_kangge_info: '你的第一个回合开始时,选择一名其他角色,该角色每次于其回合外获得牌后,你摸等量的牌(每回合至多摸三张);其进入濒死状态时,你可令其回复体力至1点(每轮限一次).该角色死亡时,你弃置所有牌并失去1点体力.',
            xn_xuxiang5: '虚像',
            xn_xuxiang5_info: '锁定技:①当你受到伤害时,防止该伤害;②在所有其他己方角色皆阵亡后,你死亡.',
            xn_xuxiang1: '虚像',
            xn_xuxiang1_info: '锁定技:①当你受到伤害时,防止该伤害;②在所有其他己方角色皆阵亡后,你死亡.',
            xn_xuxiang2: '虚像',
            xn_xuxiang2_info: '锁定技:①当你受到伤害时,防止该伤害;②在所有其他己方角色皆阵亡后,你死亡.',
            xn_xuxiang3: '虚像',
            xn_xuxiang3_info: '锁定技:①当你受到伤害时,防止该伤害;②在所有其他己方角色皆阵亡后,你死亡.',
            xn_xuxiang4: '虚像',
            xn_xuxiang4_info: '锁定技:①当你受到伤害时,防止该伤害;②在所有其他己方角色皆阵亡后,你死亡.',
            fenghuo_guisha: '瑰杀',
            fenghuo_guisha_info: '当其他角色使用【杀】时,你可以弃置一张牌令此【杀】伤害+1且不计入次数限制.',
            xn_guisha: '瑰杀',
            xn_guisha_info: '当其他角色使用【杀】时,你可以弃置一张牌令此【杀】伤害+1且不计入次数限制.',
            xn_shuli: '姝丽',
            xn_shuli_info: '每回合限两次,当其他角色使用【杀】造成伤害后,你可以与其各摸一张牌.',
            fenghuo_shuli: '姝丽',
            fenghuo_shuli_info: '每回合限两次,当其他角色使用【杀】造成伤害后,你可以与其各摸一张牌.',
            xn_taoyan: '桃宴',
            xn_taoyan_info: '回合开始时,你可以令至多两名其他角色从牌堆中获得一张【桃】并摸一张牌.',
            xn_yanli: '妍丽',
            xn_yanli_info: '每轮限一次,有角色于你的回合外进入濒死状态时,你可以令其回复体力至1点并摸一张牌.',
            xn_shanwu: '闪舞',
            xn_shanwu_info: '当其他角色成为【杀】的目标时,你可以弃置一张【闪】,取消该【杀】的所有目标.',
            xn_xianli: '娴丽',
            xn_xianli_info: '每回合限两次,当你失去手牌的【闪】时,你可以获得当前回合角色的一张牌.',
            fenghuo_xianli: '娴丽',
            fenghuo_xianli_info: '每回合限两次,当你失去手牌的【闪】时,你可以获得当前回合角色的一张牌.',
            xn_meiniang: '美酿',
            xn_meiniang_info: '其他角色的出牌阶段开始时,你可以令其视为使用一张【酒】(不计入次数限制).',
            xn_yaoli: '媱丽',
            xn_yaoli_info: '其他角色使用【酒】后,你可以令其本回合使用的下一张【杀】的目标数+1且不可被响应.',
            xn_leyu: '乐虞',
            xn_leyu_info: '一名角色的回合开始时,你可以弃置三张牌令其进行判定,若结果不为♥️️,其跳过出牌阶段.',
            xn_yuanli: '媛丽',
            xn_yuanli_info: '当一名角色跳过出牌阶段时,你可以选择一名其他角色,与其各摸一张牌.',
            shanhe_zhanji: '展骥',
            shanhe_zhanji_info: '锁定技.你的出牌阶段内,当你因摸牌且不是因为此技能效果而得到牌后,你摸一张牌.',
            shanhe_dangxian: '当先',
            shanhe_dangxian_info: '锁定技,回合开始时,你执行一个额外的出牌阶段.',
            fenghuo_qiangzhi: '强识',
            fenghuo_qiangzhi_draw: '强识',
            fenghuo_qiangzhi_info: '出牌阶段开始时,你可以展示一名其他角色的一张手牌.若如此做,当你于此阶段内使用与此牌类别相同的牌时,你可以摸一张牌.',
            fenghuo_zhendu: '鸩毒',
            fenghuo_zhendu_info: '其他角色的出牌阶段开始时,你可以弃置一张手牌,该角色视为使用一张【酒】,你对其造成1点伤害.',
            lvbu_jinghu: '惊虎',
            lvbu_jinghu_info: '锁定技,你使用的【杀】或伤害类锦囊结算完毕后,若只对一个其他角色造成了伤害,该角色再失去1点体力.',
            lvbu_wuwei: '武威',
            lvbu_wuwei_info: '你使用【杀】或【决斗】可以额外指定两个目标.你的出牌阶段可以多使用一张【杀】.',
            lvbu_baguan: '霸关',
            lvbu_baguan_info: '锁定技,你的延时类锦囊一定判定失败,你不会被翻面.你的摸牌阶段额外摸三张牌. ',
            lvbu_jianju: '健驹',
            lvbu_jianju_info: '锁定技,你与其他角色的距离视为1.第三轮你的回合结束后,撤离战场.',
            shidian_xiaoshou: '枭首',
            shidian_xiaoshou_info: '锁定技,结束阶段,你对一名体力值不小于你的敌方角色造成3点伤害.',
            shidian_guimei: '鬼魅',
            shidian_guimei_info: '锁定技,你不能成为延时类锦囊的目标.',
            shanhai_guimei: '鬼魅',
            shanhai_guimei_info: '锁定技,你的手牌上限+4.',
            shidian_baolian: '暴敛',
            shidian_baolian_info: '锁定技,结束阶段,你摸一张牌.',
            shidian_baoliana: '暴敛',
            shidian_baoliana_info: '锁定技,结束阶段,你摸两张牌.',
            shidian_qiangzheng: '强征',
            shidian_qiangzheng_info: '锁定技,结束阶段,你获得每名其他角色一张手牌.',
            jiange_jinggong: '惊弓',
            jiange_jinggong_info: '锁定技,你使用【杀】无距离限制;你的回合结束时,若你没有使用【杀】,则你失去1点体力.',
            jiange_qixian: '启弦',
            jiange_qixian_info: '你的出牌阶段,每额外获得一张牌,令本回合下一次【杀】的伤害+1.',
            jiange_hanjun: '撼军',
            jiange_hanjun_info: '每回合限一次,出牌阶段,你可随机弃置所有敌方角色的各一张牌,你可以获得其中的装备牌或非装备牌.',
            jiange_pigua: '披挂',
            jiange_pigua_info: '锁定技,准备阶段,若你的装备区内没有牌,你失去1点体力,从弃牌堆或牌堆获得一张装备牌.',
            sw_weishen: '伪神',
            sw_weishen_info: '锁定技,你使用牌无距离限制;你使用黑色牌造成的伤害值+1;当你受到神势力角色对你使用的【杀】造成的伤害时,改为失去等量的体力上限.',
            sw_juqu: '巨躯',
            sw_juqu_info: '锁定技,出牌阶段开始时,你废除一个装备栏并失去10点体力上限,视为对所有其他角色使用一张火【杀】且此【杀】需要两张【闪】才能抵消,因此法受到伤害的角色本回合内非锁定技失效.',
            sw_cuicheng: '摧城',
            sw_cuicheng_info: '锁定技,若你的体力值不大于:40,摸牌阶段多摸两张牌;30,其他角色的准备阶段,你摸两张牌;20,其他角色不能抵消你使用的普通锦囊牌;10,你的黑色非基本牌视为【决斗】.',
            sw_tianxiang: '天相',
            sw_tianxiang_info: '锁定技,准备阶段,你令所有其他角色获得<狂风>标记.',
            sw_jixing: '箕星',
            sw_jixing_info: '锁定技,你造成的所有伤害均视为火焰伤害;你受到的火焰伤害+1;一名角色回合结束时,你摸X张牌(X为其本回合造成的火焰伤害数).',
            sw_jinsao: '进扫',
            sw_jinsao_info: '出牌阶段各限一次,你可以失去1点体力,对所有敌方角色造成共计2点伤害(随机分配);你可以弃置一张牌,弃置所有敌方角色各一张牌;你可以横置你的武将牌,横置所有敌方角色.',
            sw_jinsao_damage: '伤害',
            sw_jinsao_discard: '弃牌',
            sw_jinsao_link: '横置',
            sw_bingzhu: '兵主',
            sw_bingzhu_info: '你可以将两张手牌当【杀】使用或打出;你使用【杀】可以额外指定两名角色为目标;当你使用的【杀】被目标角色使用的【闪】抵消时,你可以弃置两张牌,令此【杀】依然对其造成伤害;当你使用【杀】对目标角色造成伤害时,你可以弃置其坐骑栏的所有装备.',
            sw_jiuli: '九黎',
            sw_jiuli_info: '锁定技,每名角色的回合开始和结束时,你将手牌数调整至9;你的装备牌视为【酒】.',
            sw_yejin: '冶金',
            sw_yejin_info: '出牌阶段限一次,你可以弃置三张牌,获得牌堆中所有的【铁索连环】和副类别不同的装备牌各一张.',
            sw_lumu: '乳目',
            sw_lumu_info: '准备阶段,你摸三张牌;出牌阶段开始时,你可以与任意名其他角色同时拼点,赢的角色视为对没赢的角色使用一张【杀】,你可以重复此步骤直到你受到伤害或你成为至少四次【杀】的目标.',
            sw_qikou: '脐口',
            sw_qikou_info: '锁定技,当你于出牌阶段内造成1点伤害后,摸一张牌.',
            sw_zhankuang: '战狂',
            sw_zhankuang_info: '当你于出牌阶段内对一名其他角色造成伤害后,你可以失去1点体力,本回合内对其使用牌无次数限制.',
            sw_yilu: '夷戮',
            sw_yilu_info: '限定技,当你使用【杀】或伤害锦囊牌指定一名其他角色为目标后,你可以令其他所有角色依次选择是否失去一个其武将牌上的技能,选择否的角色成为此牌的额外目标,且此牌额外执行X次(X为未选择失去技能的角色数).',
            sw_qingtian: '倾天',
            sw_qingtian_info: '锁定技,出牌阶段开始时,你移除牌堆中的两张【闪】,对所有敌方角色造成共计3点雷电伤害(随机分配);当你翻至正面时,你移除牌堆中的四张【闪】,对所有敌方角色造成共计6点雷电伤害(随机分配).',
            sw_xiandi: '陷地',
            sw_xiandi_info: '锁定技,你的回合开始时,你获得场上和牌堆里的所有坐骑牌;你的坐骑牌视为无次数限制的雷【杀】.',
            sw_zuiling: '坠陵',
            sw_zuiling_info: '锁定技,每回合各限两次,当你对其他角色造成伤害后,你令其选择一项:视为对你使用一张【杀】;弃置两张牌.当你受到其他角色造成的伤害后,你令其选择一项:视为你对其使用一张【杀】;弃置两张牌.',
            sw_runwu: '润物',
            sw_runwu_info: '锁定技,游戏开始时,将本局游戏中的【桃】移除,改为加入等量张【雨】;准备阶段,你获得牌堆中的两张【雨】;一名角色使用【雨】结算后,你摸一张牌.',
            sw_huoxin: '惑心',
            sw_huoxin_info: '锁定技,你的回合结束后,你令下一轮角色行动的顺序改为相反的行动顺序.',
            sw_sadao: '洒道',
            sw_sadao_info: '转换技,阳:当你使用一张普通锦囊牌后,你的下一张基本牌造成的伤害值或回复值+1;阴:当你使用一张基本牌后,你的下一张普通锦囊牌不能被响应.',
            dw_jinjing: '金睛',
            dw_jinjing_info: '锁定技,其他角色的手牌始终对你可见.',
            dw_ruyi: '如意',
            dw_ruyi_info: '锁定技,你始终装备【如意金箍棒】,你的其他武器牌视为【杀】.',
            dw_ruyijingubang_skill: '如意金箍棒',
            dw_ruyijingubang_skill2: '如意金箍棒',
            dw_ruyijingubang_skill_info: '出牌阶段限一次,你可以将金箍棒攻击范围调整至1~4.<br>1:你使用【杀】无次数限制;<br>2:你使用【杀】伤害+1;<br>3:你使用【杀】无法被响应;<br>4:你使用【杀】可以额外增加一个目标.',
            dw_cibei: '慈悲',
            dw_cibei_info: '每回合每名角色限一次,当你对其他角色造成伤害时,可以防止此伤害,改为摸五张牌.',
            dw_longgong: '龙宫',
            dw_longgong_info: '每回合一次,当你受到伤害时,你可以防止此伤害改为让伤害来源随机获得牌堆中一张装备牌.',
            dw_sitian: '司天',
            dw_sitian_info: '出牌阶段,你可以弃置两张不同色的手牌,改变天气(从两个选项中选择一项).<br>烈日:对其他角色各造成1点火焰伤害;<br>雷电:令其他角色各进行一次闪电判定;<br>大浪:弃置其他角色装备区所有牌(没装备的需要失去1点体力);<br>暴雨:弃置一名角色所有手牌(没手牌的需要失去1点体力);<br>大雾:其他角色使用的下张基本牌无效.',
            liezhuan_jiyuan: '积怨',
            liezhuan_jiyuan_info: '锁定技,敌方角色回合结束时,若其未造成伤害,你本局游戏造成的伤害+1.',
            shanhe_quji: '去疾',
            shanhe_quji_info: '出牌阶段限一次,你可以弃置X张牌(X为你已损失的体力值),令至多X名已受伤的角色各回复1点体力.若你以此法弃置的牌中有黑色牌,你失去1点体力.',
            shanhe_zhiming: '知命',
            shanhe_zhiming_info: '准备阶段或弃牌阶段结束时,你摸一张牌,可以将一张牌置于牌堆顶.',
            shanhe_xingbu: '星卜',
            shanhe_xingbu_info: '结束阶段,你可以亮出牌堆顶的三张牌,你可以根据X值(X为这三张牌中红色牌的数量),令一名其他角色获得对应的效果直到其下回合结束:①三张:其摸牌阶段多摸两张牌,使用【杀】的次数上限+1.②两张:其使用【杀】的次数上限-1,跳过弃牌阶段.③小于两张:其于准备阶段弃置一张手牌.',
            shanhe_bihuo: '避祸',
            shanhe_bihuo_info: '限定技.一名角色脱离濒死状态时,你可以令其摸三张牌,其他角色计算至其的距离时+X直到本轮结束(X为角色数).',
            liezhuan_chuanshu: '传书',
            liezhuan_chuanshu_info: '锁定技,结束阶段,每名角色将所有手牌交给下家.',
            liezhuan_taishou: '太守',
            liezhuan_taishou_info: '锁定技,当你受到伤害时,此伤害-1.',
            liezhuan_shanggu: '殇骨',
            liezhuan_shanggu_info: '锁定技,你受到的伤害+X(X为你已损失的体力值).',
            shidian_yushou: '驭兽',
            shidian_yushou_info: '锁定技,出牌阶段开始时,你视为对所有敌方角色使用了一张【南蛮入侵】.',
            liezhuan_qingluan: '清乱',
            liezhuan_qingluan_info: '锁定技,每轮开始时或一名角色死亡后,所有角色选择一项:对与其距离最近的另一名角色使用一张【杀】,或失去1点体力.',
            liezhuan_huiji: '回击',
            liezhuan_huiji_info: '锁定技,每次受到伤害后,视为使用一张【万箭齐发】.',
            jiange_mojian: '魔箭',
            jiange_mojian_info: '锁定技,出牌阶段开始时,你视为对所有敌方角色使用了一张【万箭齐发】.',
            shanhe_kuanggu: '狂骨',
            shanhe_kuanggu_info: '当你对距离1以内的一名角色造成1点伤害后,你可以回复1点体力或摸一张牌.',
            shanhe_kuanggua: '狂骨',
            shanhe_kuanggua_info: '当你造成1点伤害后,你可以进行判定,若结果为黑色,你回复1点体力.',
            shanhe_fuyou: '福祐',
            shanhe_fuyou_info: '锁定技,你的普通【红色锦囊牌】结算2次;当你的普通【红色锦囊牌】造成伤害后,摸1张牌,每回合限1次.',
            shanhe_shouyi: '兽裔',
            shanhe_shouyi_info: '锁定技,你使用牌无距离限制.',
            shanhe_juejing: '绝境',
            shanhe_juejing_info: '锁定技.①你的手牌上限+2.②当你进入或脱离濒死状态时,你摸一张牌.',
            shanhe_leiji: '雷击',
            shanhe_leiji_misa: '雷击',
            shanhe_leiji_info: '①当你使用【闪】或【闪电】,或打出【闪】时,你可以进行判定.②当你的判定的判定牌生效后,若结果为:♠️️,你可对一名其他角色造成2点雷电伤害;♣️️:你回复1点体力并可对一名其他其他角色造成1点雷电伤害.',
            shanhe_leiji_append: '<span style="font-family:yuanli">不能触发〖雷击〗的判定:〖暴虐〗、〖助祭〗、<br>〖弘仪〗、〖孤影〗.</span>',
            shanhe_leiji_faq: '不能触发〖雷击〗的判定',
            shanhe_leiji_faq_info: '<br>董卓/界董卓〖暴虐〗<br>黄巾雷使〖助祭〗<br>羊徽瑜〖弘仪〗<br>鸣濑白羽〖孤影〗',
            zhongye_dongguan: '东官',
            zhongye_dongguan_info: '锁定技,出牌阶段,你使用的前三张普通锦囊牌可以多选或少选一个目标.',
            zhongye_nanguan: '南官',
            zhongye_nanguan_info: '锁定技,出牌阶段,你首次造成属性伤害时,该伤害+2.',
            zhongye_xiguan: '西官',
            zhongye_xiguan_info: '锁定技,出牌阶段,你首次使用普通【杀】造成伤害时,该伤害+2.',
            zhongye_beiguan: '北官',
            zhongye_beiguan_info: '锁定技,出牌阶段,你每使用或打出两张牌后,摸一张牌.',
            liezhuan_jueshi: '绝食',
            liezhuan_jueshi_info: '锁定技,摸牌阶段,你跳过摸牌,选择一种牌的类别,从牌堆或弃牌堆中获取一张该类别的牌.',
            liezhuan_xuetong: '血统',
            liezhuan_xuetong_info: '准备阶段,你可以进行判定,若结果为红色则获得此判定牌,且可重复此流程直到出现黑色的判定结果.你通过〖血统〗获得的牌,不计入当前回合的手牌上限.',
            mitan_duanzao1: '锻造',
            mitan_duanzao1_info: '锁定技,准备阶段,有65%~95的概率你从牌堆随机获得一张装备牌.',
            mitan_duanzao2: '锻造',
            mitan_duanzao2_info: '锁定技,准备阶段,你从牌堆随机获得一张装备牌.当你失去装备区的牌时,你有60%~90%的概率摸等同你当前装备区装备数张牌(至少为1).',
            mitan_duanzao3: '锻造',
            mitan_duanzao3_info: '锁定技,准备阶段,你从牌堆随机获得一张装备牌.当你失去装备区的牌时,你摸等同你当前装备区装备数张牌(至少为1).当你对装备区装备数少于你的敌方角色造成伤害时,有65%~85%的概率令伤害增加等同于当前你装备个数的值.',
            mitan_chuyi1: '厨艺',
            mitan_chuyi1_info: '锁定技,当你使用【桃】或【酒】后,有50%~95%的概率摸1~3张牌.',
            mitan_chuyi2: '厨艺',
            mitan_chuyi2_info: '锁定技,当你使用【桃】或【酒】后,摸3张牌,并且有40%~85%的概率对一名敌方角色造成等同于其中基本牌数量的伤害值(至少为1).',
            mitan_chuyi3: '厨艺',
            mitan_chuyi3_info: '锁定技,当你使用【桃】或【酒】后,摸3张牌,并且对一名敌方角色造成等同于其中基本牌数量的伤害值(至少为1).当你对手牌中有基本牌的敌方角色造成伤害时,有40%~80%的概率令伤害增加等同于其手牌中基本牌张数的值.',
            mitan_lingmin1: '灵敏',
            mitan_lingmin1_info: '锁定技,准备阶段,有65%~95%的概率本回合你对其他角色距离视为1.',
            mitan_lingmin2: '灵敏',
            mitan_lingmin2_info: '锁定技,准备阶段,本回合你对其他角色距离视为1.当你对你距离为1的角色使用普通锦囊牌时,有40%~85%的概率目标无法响应.',
            mitan_lingmin3: '灵敏',
            mitan_lingmin3_info: '锁定技,准备阶段,本回合你对其他角色距离视为1.当你对你距离为1的角色使用普通锦囊牌时,目标无法响应且该牌造成的伤害基础值有40%~80%的概率等同于场上你距离为1的角色数.',
            mitan_neigong1: '内功',
            mitan_neigong1_info: '锁定技,准备阶段,你有60%~95%的概率增加一点体力上限.',
            mitan_neigong2: '内功',
            mitan_neigong2_info: '锁定技,准备阶段,你增加一点体力上限,你本回合可以使用【杀】的次数有50%~90%的概率等于你当前已损失的体力值.',
            mitan_neigong3: '内功',
            mitan_neigong3_info: '锁定技,准备阶段,你增加一点体力上限,你本回合可以使用【杀】的次数等于你当前已损失的体力值.当你使用【杀】造成伤害时,有40%~80%的概率令该牌的伤害基础值等同于你当前的体力上限.',
            mitan_weizhuang: '伪装',
            mitan_weizhuang_info: '限定技,出牌阶段,你可以将武将牌更换为【密探】,并获得对应的能力效果.',
            mitan_weizhuang1: '伪装',
            mitan_weizhuang1_info: '锁定技,只有当你进入濒死状态时,才会触发技能<暴露>.当你每回合首次成为敌方角色使用的【杀】或者普通锦囊牌的目标后,有50%~90%的概率该牌对你无效.',
            mitan_weizhuang2: '伪装',
            mitan_weizhuang2_info: '锁定技,只有当你进入濒死状态时,才会触发技能<暴露>.当你每回合首次成为敌方角色使用的【杀】或者普通锦囊牌的目标后,该牌对你无效,且你有40%~85%的概率获得其一张牌.',
            mitan_weizhuang3: '伪装',
            mitan_weizhuang3_info: '锁定技,只有当你进入濒死状态时,才会触发技能<暴露>.当你每回合首次成为敌方角色使用的【杀】或者普通锦囊牌的目标后,该牌对你无效,且你获得其一张牌.并且你有40%~80%的概率对其造成你获得牌点数的伤害.',
            mitan_anqi1: '暗器',
            mitan_anqi1_info: '锁定技,当你对敌方角色造成伤害后,若你不在其攻击范围内,有60%~90%的概率该角色随机弃置1~3张牌.',
            mitan_anqi2: '暗器',
            mitan_anqi2_info: '锁定技,当你对敌方角色造成伤害后,若你不在其攻击范围内,该角色随机弃置3张牌,你有60%~90%的概率获得之.',
            mitan_anqi3: '暗器',
            mitan_anqi3_info: '锁定技,当你对敌方角色造成伤害后,若你不在其攻击范围内,该角色随机弃置3张牌,你获得之.当你对你不在其攻击范围内的敌方角色造成伤害时,有40%~75%的概率令该伤害翻倍.',
            NS_buzhuo: '捕捉',
            NS_buzhuo_info: '每回合限一次,出牌阶段,你可捕获生肖兽(其体力越低,成功率越高),若捕获成功,则其死亡,你获得其生肖技能.',
            NS_yanhua: '烟花',
            NS_yanhua_info: '限定技,对任意敌方单位使用,可使该单位进入[烟花]状态,令其在自己回合内攻击本方单位,在造成伤害后则移除该状态(未造成伤害则使用者下一回合开始时移除该状态).',
            NS_baozhu: '爆竹',
            NS_baozhu_info: '限定技,出牌阶段对年兽使用,爆竹可直接打破年兽的护盾,年兽没有护盾时可使年兽翻面一个回合.',
            NS_hongbao: '红包',
            NS_hongbao_info: '限定技,对生肖兽使用,可令生肖兽的成功捕捉概率翻倍(*2),直至使用者下一回合开始.',
            hezong_qinnu_skill: '秦弩',
            hezong_qinnu_skill_info: '当你使用【杀】指定一个目标后,你令其防具无效,你的出牌阶段内,可使用的【杀】数量+1;当你失去装备区里的【秦弩】,你令此牌销毁.',
            hezong_zhenlongchangjian_skill: '真龙长剑',
            hezong_zhenlongchangjian_skill_info: '每回合,你使用的第一张非延时性锦囊无法被【无懈可击】抵消.',
            hezong_chuanguoyuxi_skill: '传国玉玺',
            hezong_chuanguoyuxi_skill_info: '出牌阶段开始时,你可以从【南蛮入侵】、【万箭齐发】、【桃园结义】、【五谷丰登】中选择一张使用.',
            shanhe_yaodaochitong_skill: '妖刀赤瞳',
            shanhe_yaodaochitong_skill_info: '锁定技,你使用黑色【杀】造成的伤害+1;当你使用【杀】指定目标后需判定,若结果为黑色,则随机转移其他合理目标.',
            shanhe_zhanhundao_skill: '斩魂刀',
            shanhe_zhanhundao_skill_info: '你对目标造成伤害时,若目标体力值不为满,你可以防止此伤害并令其体力上限-1.',
            shanhe_anqifeiren_skill: '暗器飞刃',
            shanhe_anqifeiren_skill_info: '锁定技,每名其他角色每回合限一次,你对其造成伤害时令目标随机一个非锁定技失效直至目标的回合结束.', //QQQ
            shanhe_anqifeiren_skill2: '暗器飞刃',
            shanhe_duanhun_skill: '断魂',
            shanhe_duanhun_skill_info: '锁定技,你造成的伤害无视目标护甲.',
            shanhe_duanhun_skill2: '断魂',
            shanhe_leizhen_skill: '雷震',
            shanhe_leizhen_skill_info: '锁定技,你每使用3张手牌后,你的下一张【杀】造成的伤害+1(不可叠加).',
            shanhe_leizhen_skill2: '雷震',
            shanhe_tiejiazhou_skill: '铁甲胄',
            shanhe_tiejiazhou_skill_info: '当你受到高于1或致命伤害时,则你可以将装备区内的【铁甲胄】置入弃牌堆,本回合结束前,防止你受到的伤害.',
            shanhe_tiejiazhou_skill2: '铁甲胄',
            shanhe_gouxiang_skill: '勾镶',
            shanhe_gouxiang_skill_info: '锁定技,你使用同花色或同点数【闪】响应【杀】后,随机获得对方一张手牌.',
            shanhe_kunlunjing_skill: '昆仑镜',
            shanhe_kunlunjing_skill_info: '锁定技,在你受到一张锦囊牌伤害后,直到战斗结束,防止同名锦囊牌对你造成的伤害.',
            shanhe_pinganfu_skill: '平安符',
            shanhe_pinganfu_skill_info: '锁定技,你摸牌阶段摸牌数+X(X为你击杀的敌方角色数).',
            shanhe_chiwenyupei_skill: '螭纹玉佩',
            shanhe_chiwenyupei_skill_info: '锁定技,出牌阶段结束时回复你的1点体力;摸牌阶段开始时,若你的体力为满,则摸牌数+2.',
            tongque_zhenjun: '镇军',
            tongque_zhenjun_info: '准备阶段或结束阶段,你可以弃置一名角色X张牌(X为其手牌数减体力值且至少为2),获得其中的装备牌,若其中没有装备牌,你选择一项:1.你弃一张牌;2.该角色摸等量的牌.',
            tongque_pingkou: '平寇',
            tongque_pingkou_info: '回合结束时,你可以对至多X名其他角色各造成1点伤害(X为你本回合跳过的阶段数).',
            tongque_pingkoua: '平寇',
            tongque_pingkoua_info: '回合结束时,你可以对至多X名其他角色各造成1点伤害并弃置其一张牌(X为你本回合跳过的阶段数).',
            tongque_sidi: '司敌',
            tongque_sidi_push: '司敌',
            tongque_sidi2: '司敌',
            tongque_sidi3: '司敌',
            tongque_sidi_info: '结束阶段,你可以将一张非基本牌置于武将牌上,称为<司>.其他角色的出牌阶段开始时,你可以移去一张<司>.若如此做,其本阶段内不能使用或打出与<司>颜色相同的牌.此阶段结束时,若其于此阶段内未使用过:【杀】,你视为对其使用一张【杀】并弃其一张牌.锦囊牌,你摸三张牌.',
            tongque_jiezi: '截辎',
            tongque_jiezi_info: '锁定技,其他角色跳过摸牌阶段后,你摸三张牌.',
            fenghuo_fengpo: '凤魄',
            fenghuo_fengpo_info: '每种牌名各限一次.当你于出牌阶段内使用的第一张【杀】或【决斗】指定目标后,若目标角色数为1,你可以选择一项:1.摸X张牌;2.令此牌的伤害值基数+X.(X为其手牌中♦️️牌的数量)',
            shanhe_fengpo: '凤魄',
            shanhe_fengpo_info: '当你于出牌阶段内使用的第一张【杀】或【决斗】指定目标后,若目标角色数为1,你可以选择一项:1.摸X张牌;2.令此牌的伤害值基数+X.(X为其手牌中♦️️牌的数量)',
            fenghuo_xingwu: '星舞',
            fenghuo_xingwu_info: '弃牌阶段开始时,你可以将一张手牌置于武将牌上,称为<星舞>.若你的<星舞>牌达到三张,则你可移去三张<星舞>,弃置一名其他角色装备区里的所有牌,对其造成X点伤害(X为移去的<星舞>牌的花色数,若为女性角色则改为1点伤害).',
            shanhe_xingwu: '星舞',
            shanhe_xingwu_info: '弃牌阶段开始时,你可以将一张牌置于武将牌上,称为<舞>.你可以选择一项:①将三张<舞>置入弃牌堆;②弃置两张手牌并将武将牌翻面.若如此做,你选择一名角色,该角色弃置其装备区的所有牌并受到2点伤害(若为女性,则改为1点).',
            shanhe_shiyuan: '诗怨',
            shanhe_shiyuan_info: '每回合每项限一次,当你成为其他角色使用牌的目标后:①若其体力值大于你,你摸三张牌.②若其体力值等于你,你摸两张牌.③若其体力值小于你,你摸一张牌.',
            shanhe_hunzi: '魂姿',
            shanhe_hunzi_info: '觉醒技,准备阶段,若你的体力值为1,你减1点体力上限,并获得技能【英姿】和【英魂】.',
            shanhe_yuhua: '羽化',
            shanhe_yuhua_info: '锁定技.①你的非基本牌不计入手牌上限.②准备阶段和结束阶段开始时,你卜算1.',
            fenghuo_luoyan: '落雁',
            fenghuo_luoyan_info: '锁定技,若你有<星舞>牌,你视为拥有技能〖天香〗和〖流离〗.',
            shanhe_luoyan: '落雁',
            shanhe_luoyan_info: '锁定技,若你有<星舞>牌,你视为拥有技能【天香】和【流离】.',
            fenghuo_qinxue: '勤学',
            fenghuo_qinxue_info: '觉醒技,准备阶段,若你的手牌数比你的体力值多3或更多(若游戏人数大于等于7则改为2),你减一点体力上限,获得技能【攻心】.',
            shanhe_zhidao: '雉盗',
            shanhe_zhidao_info: '锁定技,当你于你的回合内第一次对区域里有牌的其他角色造成伤害后,你获得其手牌、装备区和判定区里的各一张牌,直到回合结束,其他角色不能被选择为你使用牌的目标.',
            nianshou_jiyuan: '汲源',
            nianshou_jiyuan_info: '锁定技,结束阶段,你摸X张牌(X为体力上限的一半,向上取整).',
            nianshou_suizhong: '岁终',
            nianshou_suizhong_info: '限定技,当你处于濒死状态时,你可以将体力值回复至1,令其他角色弃置所有牌,若当前回合角色不为你,则结束当前回合.',
            nianshou_suizhonga: '岁终',
            nianshou_suizhonga_info: '限定技,当你处于濒死状态时,你可以将体力值回复至1,若当前回合角色不为你,则结束当前回合.',
            nianshou_cuiku: '摧枯',
            nianshou_cuiku_info: '锁定技,游戏开始时或游戏每进行6轮时,你对所有其他角色造成X点伤害(X为其体力值一半,向下取整),每有一名体力上限为奇数的其他角色,你便摸一张牌.',
            nianshou_cuikua: '摧枯',
            nianshou_cuikua_info: '锁定技,游戏开始时或游戏每进行6轮时,你对至多2名其他角色造成2点伤害.',
            nianshou_cuikub: '摧枯',
            nianshou_cuikub_info: '锁定技,游戏开始时或游戏每进行6轮时,你对至多1名其他角色造成2点伤害.',
            NS_cuikub: '摧枯',
            NS_cuikub_info: '锁定技,每六轮开始时,你对一名敌方角色造成1点伤害.',
            NS_jiyuan: '汲源',
            NS_jiyuan_info: '锁定技,结束阶段,你摸三张牌.',
            NS_jiyuana: '汲源',
            NS_jiyuana_info: '锁定技,结束阶段,你摸两张牌.',
            NS_jiyuanb: '汲源',
            NS_jiyuanb_info: '锁定技,结束阶段,你摸一张牌.',
            shanhe_suizhong: '岁终',
            shanhe_suizhong_info: '锁定技,当你于一回合内第一次受到伤害后,若你的体力值为1,你回复1点体力,弃置所有敌方角色各一张手牌.',
            NS_suizhong: '岁终',
            NS_suizhong_info: '锁定技,当你于一回合内第一次受到伤害后,若你的体力值为1,你回复1点体力,弃置所有敌方角色各一张手牌.',
            NS_suizhonga: '岁终',
            NS_suizhonga_info: '锁定技,当你于一回合内第一次受到伤害后,若你的体力值为1,你回复1点体力.',
            NS_cuiku: '摧枯',
            NS_cuiku_info: '锁定技,每四轮开始时,你对至多两名敌方角色各造成1点伤害,每有一位体力上限为奇数的其他角色,你摸一张牌.',
            NS_cuikua: '摧枯',
            NS_cuikua_info: '锁定技,每五轮开始时,你对一名敌方角色造成1点伤害.',
            shanhe_cuikua: '摧枯',
            shanhe_cuikua_info: '锁定技,每五轮开始时,你对一名敌方角色造成1点伤害.',
            NS_cuikub: '摧枯',
            NS_cuikub_info: '锁定技,每六轮开始时,你对一名敌方角色造成1点伤害.',
            shanhe_cuiku: '摧枯',
            shanhe_cuiku_info: '锁定技,每四轮开始时,你对至多两名敌方角色各造成1点伤害,每有一位体力上限为奇数的其他角色,你摸一张牌.',
            NS_baonu: '暴怒',
            NS_baonu_info: '锁定技,每当一只生肖兽阵亡时,你会获得一层暴怒状态,获得暴怒状态时,你会对所有敌方角色造成1点火焰伤害;每层暴怒状态都会使你出【杀】的次数+1.',
            NS_baonua: '暴怒',
            NS_baonua_info: '锁定技,每当一只生肖兽阵亡时,你会获得一层暴怒状态;每层暴怒状态都会使你出【杀】的次数+1.',
            nianshou_nianyi: '年裔',
            nianshou_nianyi_info: '锁定技,你使用牌无距离限制.准备阶段,你随机弃置你判定区内的一张牌.一名其他角色回合结束后,若你于该回合内失去的牌不少于三张,则你对所有其他角色造成1点伤害.',
            NS_nianyi: '年裔',
            NS_nianyi_info: '锁定技,你使用牌无距离限制.准备阶段,你随机弃置判定区的两张牌.一名其他角色的回合结束后,若你于此回合内失去过至少三张牌,你对所有敌方角色各造成1点伤害.',
            NS_nianyia: '年裔',
            NS_nianyia_info: '锁定技,你使用牌无距离限制.准备阶段,你随机弃置判定区的一张牌.',
            NS_nianyib: '年裔',
            NS_nianyib_info: '锁定技,你使用牌无距离限制.',
            NS_shouhun: '兽魂',
            NS_shouhun_info: '锁定技,你的摸牌数+0、手牌上限+0、体力上限+0;当你受到伤害时,令兽魂效果中数值最低的一项数值+1.(所有效果最大+3)',
            shanhai_sxbuff: '祀邪机制',
            shanhai_sxbuff_info: '<li>本局游戏增加祀邪机制.<br><li>祀邪:准备阶段,你可以从随机三个技能中获得一个技能,若你的技能数超过三个,则你须选择失去一个技能.',
            nianshou_lingli: '聚灵',
            nianshou_lingli_bg: '灵',
            nianshou_lingli_gain: '聚灵',
            nianshou_lingli_skill: '聚灵',
            nianshou_lingli_draw: '聚灵',
            ns_lingli: '聚灵机制',
            ns_lingli_info: '<li>本局游戏增加聚灵机制(灵力值上限为5,年兽的初始灵力值为5).<br><li>①每轮开始时,你获得1点灵力值(年兽额外获得1点灵力值).<br><li>②游戏开始时,随机指定一名敌方角色为击杀目标,随机指定一名其他己方角色为保护目标.有角色死亡的回合结束时,若存活角色数不大于总人数的一半,则进入死战,否则重新指定击杀目标和保护目标.<br><li>③当你对击杀目标造成1点伤害后或令保护目标回复1点体力后,你获得1点灵力值.当你击杀任意角色后,你获得2点灵力值并摸一张牌(若为击杀目标则改为获得3点灵力值并摸两张牌,年兽将击杀目标改为所有敌方角色).当保护目标死亡后,你随机弃置四张牌(年兽将保护目标改为所有己方角色且不执行弃牌效果).<br><li>④回合开始时你可以选择消耗两点灵力值获得一个新技能(当额外技能超过3个时,需要选择放弃其中一个技能).选择新技能时你可以通过消耗一点灵力值重新刷新三个新技能再做选择.<br><li>⑤出牌阶段限一次,你可以弃置任意数量的灵力值,摸等量的牌(至多为5).<br><li>死战:回合结束时,若你本回合未造成过伤害,则你失去一点体力,获得1点灵力值.',
            nianshou_fengnian: '丰年',
            nianshou_fengnian_info: '锁定技,若你受到伤害后或死亡时,伤害来源或击杀你的角色于本回合结束时随机执行一项:1.获得2点灵力值;2.获得1点灵力值并摸一张牌;3.摸两张牌.',
            nianshou_weiqu: '伟躯',
            nianshou_weiqu_info: '锁定技,你不能成为【偷梁换柱】和【釜底抽薪】的目标;你视为在所有其他角色的攻击范围内.',
            nianshou_baozhu_skill: '爆竹',
            nianshou_zhennu: '震怒',
            nianshou_zhennu_info: '锁定技,准备阶段,你对所有其他角色造成1点伤害.',
            nianshou_jusheng: '惧声',
            nianshou_jusheng_info: '锁定技,当以你为目标的【爆竹】生效时,【爆竹】的效果改为令你受到该【爆竹】使用者造成的1点火焰伤害.',
            nianshou_juhuo: '惧火',
            nianshou_juhuo_info: '锁定技,你受到的火焰伤害始终+2.',
            nianshou_lihuo: '离火',
            nianshou_lihuo_info: '结束阶段,你可以对一名其他角色造成1点火焰伤害',
            nianshou_zhenlei: '震雷',
            nianshou_zhenlei_info: '准备阶段,你可以对一名其他角色造成1点雷电伤害.',
            nianshou_lingsi: '灵嘶',
            nianshou_lingsi_info: '锁定技,当你死亡时,对场上所有其他角色造成1点火焰伤害.',
            nianshou_zhuguo_jiawei: '假威',
            nianshou_zhuguo_jiawei_info: '出牌阶段,你可以选择消耗三点朱果获得一个新技能(当额外技能超过3个时,需要选择放弃其中一个技能).',
            nianshou_zhuguo: '朱果',
            ns_zhuguo: '假威机制',
            ns_zhuguo_info: '<li>本局游戏增加假威机制.<br><li>①当你对敌方角色造成1点伤害后,己方获得1个朱果.<br><li>②当你击杀敌方角色后,己方获得2个朱果.<br><li>假威:出牌阶段,你可以选择消耗3个朱果获得一个新技能(当额外技能超过3个时,需要选择放弃其中一个技能).<br><li>当朱雀或玄武受到伤害时,己方角色各摸一张牌.',
            nianshou_xiongqu: '雄躯',
            nianshou_xiongqu_info: '锁定技,你不能获得或失去技能,且不能成为【偷梁换柱】和【釜底抽薪】的目标.',
            NS_yangshou: '阳兽',
            NS_yangshou_info: '锁定技,当你因翻面导致武将牌背面朝上时,若年兽阴的武将牌背面朝上,年兽阴将武将牌翻面至正面朝上;你的判定区的牌中,乐不思蜀和兵粮寸断判定反转;你免疫火焰伤害;摸牌阶段你的摸牌数+2.',
            NS_yinshou: '阴兽',
            NS_yinshou_info: '锁定技,当你因翻面导致武将牌背面朝上时,若年兽阳的武将牌背面朝上,则年兽阳将武将牌翻面至正面朝上;你的判定区的牌中,乐不思蜀和兵粮寸断判定反转;你免疫雷电伤害;你的回合结束时,你摸两张牌.',
            NS_beimingyang: '悲鸣',
            NS_beimingyang_info: '锁定技,当你死亡时,你对所有敌方角色造成1点火焰伤害.',
            NS_beimingyin: '悲鸣',
            NS_beimingyin_info: '锁定技,当你死亡时,你对所有敌方角色造成1点雷电伤害.',
            NS_nuyan: '怒焰',
            NS_nuyan_info: '出牌阶段限一次,你可以弃置一张红色手牌,并失去1点体力,直到本回合结束前,你使用的红色牌造成伤害时,均视为火焰伤害且伤害+1.',
            shanhe_nuyan: '怒焰',
            shanhe_nuyan_info: '出牌阶段限一次,你可以弃置一张红色手牌,并失去1点体力,直到本回合结束前,你使用的红色牌造成伤害时,均视为火焰伤害且伤害+1.',
            NS_huihun: '回魂',
            NS_huihun_info: '出牌阶段限一次,你可以弃置一张黑色手牌,并失去1点体力,使一名角色回复2点体力.',
            shanhe_huihun: '回魂',
            shanhe_huihun_info: '出牌阶段限一次,你可以弃置一张黑色手牌,并失去1点体力,使一名角色回复2点体力.',
            NS_hundunyang: '混沌',
            NS_hundunyang_info: '觉醒技,出牌阶段开始时,若年兽阴已阵亡,你增加1点体力上限,并回复1点体力,获得技能【回魂】.',
            NS_hundunyin: '混沌',
            NS_hundunyin_info: '觉醒技,出牌阶段开始时,若年兽阳已阵亡,你增加1点体力上限,并回复1点体力,获得技能【怒焰】.',
            shanglin_chooseskill: '技能选择',
            shanglin_chooseskill_info: '<li>游戏开始时,你选择保留一/两个专属技能,并失去其它技能.<br><li>专属技能:【厚皮】、【健踵】、【凶猛】.',
            mitan_chooseskill_wuliuqi: '技能选择',
            mitan_chooseskill_wuliuqi_info: '<li>游戏开始时,你选择保留一个专属技能,并失去其它技能.<br><li>伍六七:<易容>、<情锁>、<削发>.',
            mitan_chooseskill_meihuashishan: '技能选择',
            mitan_chooseskill_meihuashishan_info: '<li>游戏开始时,你选择保留一个专属技能,并失去其它技能.<br><li>♣️️十三:<辫刀>、<映月>、<护体>.',
            mitan_lingshou: '灵守',
            mitan_lingshou_info: '锁定技,己方其他角色受到伤害时,令该伤害-1,你失去1点体力,伤害来源弃置两张牌.',
            mitan_feijian: '飞剪',
            mitan_feijian_info: '锁定技,出牌阶段结束时,若你的装备区中有武器牌且本回合对其他角色造成过伤害,则弃置该武器牌并对这些角色依次造成2~4点随机伤害.',
            mitan_yirong: '易容',
            mitan_yirong_info: '锁定技,你每回合首次造成伤害时,将伤害来源改为场上一名随机其他角色.',
            mitan_qingsuo: '情锁',
            mitan_qingsuo_info: '锁定技,其他角色对你造成伤害后,你与其将武将牌翻面.',
            mitan_xuefa: '削发',
            mitan_xuefa_info: '锁定技,当你对其他角色造成伤害后,你随机弃置其一至三张牌.',
            mitan_shenghu: '圣护',
            mitan_shenghu_info: '锁定技,己方其他角色受到伤害时,令该伤害-1,你失去1点体力,你与该己方角色各摸一张牌.',
            mitan_meibiao: '梅镖',
            mitan_meibiao_info: '锁定技,你使用♣️️牌无法被其他角色响应,且此牌造成的伤害+2.',
            mitan_biandao: '辫刀',
            mitan_biandao_info: '锁定技,你的出牌阶段结束时,若本回合未对其他角色造成过伤害,你对所有敌方角色依次造成1~2点随机伤害.',
            mitan_yingyue: '映月',
            mitan_yingyue_info: '你在出牌阶段使用首张指定单一目标的【杀】或普通锦囊牌时,可为此牌额外增加一个目标.',
            mitan_huti: '护体',
            mitan_huti_info: '锁定技,其他角色对你造成伤害时,若此伤害为该角色本回合首次造成的伤害,则你防止此伤害,随机弃置一张牌.',
            mitan_zhibi: '知彼',
            mitan_zhibi_info: '限定技,出牌阶段,你可以选择一名敌方角色,该角色本回合所有技能失效.',
            shanhe_xiongluan: '雄乱',
            shanhe_xiongluan_info: '限定技,出牌阶段,你可以废除你的判定区和装备区,指定一名其他角色.直到回合结束,你对其使用牌无距离和次数限制,其不能使用和打出手牌',
            hezong_bftq: '变法图强',
            hezong_hzlh: '合纵连横',
            hezong_scth: '始称太后',
            hezong_cpzz: '长平之战',
            hezong_lscq: '吕氏春秋',
            hezong_zjzl: '赵姬之乱',
            hezong_hslh: '横扫六合',
            hezong_sqzb: '沙丘之变',
            lzzd_yintian: '阴天',
            wjldc_end: '结算',
            whtn_pojun: '破军',
            whtn2_kill: '复活',
            _HD_draw2: '摸牌特权',
            _HD_sha: '出杀特权',
            _HD_zhuangbei: '装备特权',
            ns_bianshen_group: '选择势力',
            ns2022_dengjie: '等阶特权',
            sx2022_dengjie: '等阶特权',
            hzkq_buff: '武将特权',
            HD_jineng_chongsheng: '重生',
            HD_jineng_chongsheng_info: '限定技,当你处于濒死状态时,你可以弃置所有判定区牌,复原你的武将牌,将手牌摸至体力上限(至多为5),将体力回复至体力上限.',
            _HD_jihuo: '集火',
            hzkq_boss_intro1: '篇章模式',
            hzkq_boss_intro1_info: '共四章,分别为帝国先驱、中流砥柱、乱!和璀璨星河',
            hzkq_boss_intro2: '游戏规则',
            hzkq_boss_intro2_info: '帝国先驱:挑战张仪与商鞅<br>中流砥柱:挑战白起与芈月<br>乱!:挑战赵姬、吕不韦与赵高<br>璀璨星河:挑战嬴政、白起、张仪与商鞅',
            hzkq_boss_intro3: '击败奖励',
            hzkq_boss_intro3_info: '若被击败者为秦军士兵,则击败者摸三张牌,否则所有三国武将各摸一张牌',
            hzkq_boss_intro4: '胜利条件',
            hzkq_boss_intro4_info: '帝国先驱:击败张仪<br>中流砥柱:击败白起<br>乱!:击败赵姬<br>璀璨星河:击败嬴政',
            hzkq_boss_intro5: '匹配模式',
            hzkq_boss_intro5_info: '共一关',
            hzkq_boss_intro6: '游戏规则',
            hzkq_boss_intro6_info: '挑战商鞅、张仪、芈月、白起、吕不韦、赵姬、嬴政、赵高随机之一与秦军士兵随机之二与随机一名三国武将(有特殊加成)',
            hzkq_boss_intro7: '击败奖励',
            hzkq_boss_intro7_info: '若被击败者为秦军士兵,则击败者摸三张牌,否则所有三国武将各摸一张牌',
            hzkq_boss_intro8: '胜利条件',
            hzkq_boss_intro8_info: '击败商鞅、张仪、芈月、白起、吕不韦、赵姬、嬴政、赵高随机之一',
            hzkq_boss_intro9: '特殊事件',
            hzkq_boss_intro9_info: '帝国先驱:合纵连横<br>中流砥柱:长平之战<br>乱!:赵姬之乱<br>璀璨星河:横扫六合',
            hzkq_boss_intro10: '特殊事件',
            hzkq_boss_intro10_info: '变法图强、合纵连横、始称太后、长平之战、吕氏春秋、赵姬之乱、横扫六合、沙丘之变随机之一',
            hzc_huansheng: '幻生',
            hzc_huansheng_info: '锁定技,①游戏开始时,回合开始前/结束后,你随机观看10张武将牌以及记录的武将牌,你可获得其中一张武将牌上的所有技能并将你的势力和性别改至与其相同并记录此武将牌(至多记录5张).<br>②出牌阶段限一次,你可从5张随机的武将牌上选择一个技能,你可令一名角色失去上次以此法获得的技能并获得此技能,你可变更一次角色牌.<br>③游戏开始时,你随机观看5张武将牌并将其中一张作为角色牌加入游戏并置入装备区(视为拥有此武将的技能,此牌离开你的装备区时会被销毁);你的区域内的牌不能被其他角色弃置或获得且装备区内的牌只能因替换而失去.',
            hzc_xiandun: '仙遁',
            hzc_xiandun_info: '锁定技,①你不能被翻面或横置,延时类锦囊一定判定失败,不能成为其他角色拼点的目标,使用牌的次数不受技能减少,防止异常死亡且本局游戏可复活X/2(向上取整)次.<br>②游戏开始时,你记录『仙遁数』为X(X为1至体力上限间的任意整数).<br>③回合开始时,你回复装备栏并重置武将牌,摸牌阶段摸牌时,你额外摸X/2(向上取整)张牌,出牌阶段可使用【杀】的次数改为X,手牌上限改为Y(Y为体力上限),你计算与其他角色的距离-X,其他角色计算与你的距离+(Y-X)/2(向上取整).<br>④你的体力上限变化无效,每回合你至多受到X/2(向上取整)点伤害且准备/结束/出牌阶段或受到伤害后,你可随机获得一个此阶段/时机可发动的技能.',
          },
        };
        for (const i in BOSS_huodong.character) {
          const info = BOSS_huodong.character[i];
          info[4].push('ext:活动BOSS/image/character/' + i + '.jpg');
          info[4].push(`die:ext:活动BOSS/audio/die/${i}.mp3`); //QQQ
        }
        lib.config.all.characters.add('BOSS_huodong');
        lib.config.characters.add('BOSS_huodong');
        lib.translate['BOSS_huodong_character_config'] = '活动BOSS';
        return BOSS_huodong;
      });
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
          name: '活动BOSS',
          connect: true,
          card: {
            hulaoguan_boss_wushuangfangtianji: {
              type: 'equip',
              subtype: 'equip1',
              distance: {
                attackFrom: -3,
              },
              ai: {
                basic: {
                  equipValue: 2.5,
                  order: 1,
                  useful: 2,
                  value: 1,
                },
                result: {
                  target(player, target) {
                    return get.equipResult(player, target, name);
                  },
                },
              },
              skills: ['hulaoguan_boss_wushuangfangtianji_skill'],
              enable: true,
              selectTarget: -1,
              filterTarget(card, player, target) {
                return target == player;
              },
              modTarget: true,
              allowMultiple: false,
              content() {
                target.equip(card);
              },
              toself: true,
              fullimage: true,
            },
            hulaoguan_boss_shufazijinguan: {
              type: 'equip',
              subtype: 'equip5',
              ai: {
                basic: {
                  equipValue: 9,
                  order: 1,
                  useful: 2,
                  value: 1,
                },
                result: {
                  target(player, target) {
                    return get.equipResult(player, target, name);
                  },
                },
              },
              skills: ['hulaoguan_boss_shufazijinguan_skill'],
              enable: true,
              selectTarget: -1,
              filterTarget(card, player, target) {
                return target == player;
              },
              modTarget: true,
              allowMultiple: false,
              content() {
                target.equip(card);
              },
              toself: true,
              fullimage: true,
            },
            hulaoguan_boss_hongmianbaihuapao: {
              type: 'equip',
              subtype: 'equip2',
              ai: {
                basic: {
                  equipValue: 7,
                  order: 1,
                  useful: 2,
                  value: 1,
                },
                result: {
                  target(player, target) {
                    return get.equipResult(player, target, name);
                  },
                },
              },
              skills: ['hulaoguan_boss_hongmianbaihuapao_skill'],
              enable: true,
              selectTarget: -1,
              filterTarget(card, player, target) {
                return target == player;
              },
              modTarget: true,
              allowMultiple: false,
              content() {
                target.equip(card);
              },
              toself: true,
              fullimage: true,
            },
            hulaoguan_boss_linglongshimandai: {
              type: 'equip',
              subtype: 'equip2',
              ai: {
                basic: {
                  equipValue: 7.5,
                  order: 1,
                  useful: 2,
                  value: 1,
                },
                result: {
                  target(player, target) {
                    return get.equipResult(player, target, name);
                  },
                },
              },
              skills: ['hulaoguan_boss_linglongshimandai_skill'],
              enable: true,
              selectTarget: -1,
              filterTarget(card, player, target) {
                return target == player;
              },
              modTarget: true,
              allowMultiple: false,
              content() {
                target.equip(card);
              },
              toself: true,
              fullimage: true,
            },
            fumojingangchu: {
              type: 'equip',
              subtype: 'equip1',
              onDestroy(card) {
                if (_status.lvbu_shenwu && _status.lvbu_shenwu[card.name]) {
                  delete _status.lvbu_shenwu[card.name];
                }
              },
              distance: {
                attackFrom: -2,
              },
              ai: {
                basic: {
                  equipValue: 2.5,
                  order: 1,
                  useful: 2.5,
                  value: 1,
                },
                result: {
                  target(player, target, card) {
                    return get.equipResult(player, target, card.name);
                  },
                },
              },
              skills: ['fumo_skill'],
              enable: true,
              selectTarget: -1,
              filterTarget(card, player, target) {
                return target == player;
              },
              modTarget: true,
              allowMultiple: false,
              content() {
                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
              },
              toself: true,
              fullimage: true,
            },
            feijiangshenweijian: {
              fullimage: true,
              type: 'equip',
              subtype: 'equip1',
              onDestroy(card) {
                if (_status.lvbu_shenwu && _status.lvbu_shenwu[card.name]) {
                  delete _status.lvbu_shenwu[card.name];
                }
              },
              distance: {
                attackFrom: -1,
              },
              ai: {
                basic: {
                  equipValue: 4,
                },
              },
              skills: ['feijiang_skill'],
            },
            wushuangxiuluoji: {
              fullimage: true,
              type: 'equip',
              subtype: 'equip1',
              onDestroy(card) {
                if (_status.lvbu_shenwu && _status.lvbu_shenwu[card.name]) {
                  delete _status.lvbu_shenwu[card.name];
                }
              },
              distance: {
                attackFrom: -4,
              },
              ai: {
                equipValue(card, player) {
                  var num = 4 + (player.getEnemies().length - 1);
                  return Math.min(num, 6);
                },
                basic: {
                  equipValue: 5,
                },
              },
              skills: ['xiuluo_skill'],
            },
            honglianzijinguan: {
              fullimage: true,
              type: 'equip',
              subtype: 'equip5',
              onDestroy(card) {
                if (_status.lvbu_shenwu && _status.lvbu_shenwu[card.name]) {
                  delete _status.lvbu_shenwu[card.name];
                }
              },
              ai: {
                basic: {
                  equipValue: 8.5,
                },
              },
              skills: ['honglian_skill'],
            },
            youhuoshepoling: {
              fullimage: true,
              type: 'equip',
              subtype: 'equip5',
              onDestroy(card) {
                if (_status.lvbu_shenwu && _status.lvbu_shenwu[card.name]) {
                  delete _status.lvbu_shenwu[card.name];
                }
              },
              ai: {
                equipValue(card, player) {
                  var num = 7.5 + player.getDamagedHp() / 5;
                  return Math.min(num, 9.5);
                },
                basic: {
                  equipValue: 8,
                },
              },
              skills: ['youhuo_skill'],
            },
            lzzd_zongzi: {
              global: ['longzhou_zongzi'],
              type: 'trick',
              enable: true,
              selectTarget: -1,
              toself: true,
              filterTarget(card, player, target) {
                return target == player;
              },
              modTarget: true,
              content() {
                player.draw(5);
                game.lzzd_zongzi = true;
              },
              ai: {
                basic: {
                  order(name, player) {
                    if (player != game.boss) return 8;
                    else return 0;
                  },
                  useful: 5,
                  value: 9.5,
                },
                result: {
                  target: 3,
                },
                tag: {
                  draw: 5,
                },
              },
              fullimage: true,
            },
            sw_yu: {
              type: 'basic',
              enable(card, player) {
                return true;
              },
              selectTarget: 1,
              nopower: true,
              filterTarget(card, player, target) {
                return target != player || (target == player && target.hp < target.maxHp);
              },
              modTarget(card, player, target) {
                return target != player || (target == player && target.hp < target.maxHp);
              },
              content() {
                if (target == player) target.recover(event.baseDamage || 1);
                else target.damage(event.baseDamage || 1, 'thunder');
              },
              ai: {
                basic: {
                  order(card, player) {
                    if (player.hasSkillTag('pretao')) return 5;
                    return 2;
                  },
                  useful: [6.5, 4, 3, 2],
                  value: [6.5, 4, 3, 2],
                },
                result: {
                  target(player, target, card, isLink) {
                    if (target == player) return ai.get.recoverEffect(target, player);
                    if (target != player) return get.damageEffect(target, player, target, 'thunder');
                  },
                },
                tag: {
                  recover: 1,
                  damage: 1,
                },
              },
            },
            qihuan_du: {
              type: 'basic',
              global: ['qihuan_du_buff'],
              enable(card, player) {
                return player;
              },
              content() { },
              ai: {
                value: -5,
                useful: 0,
                result: {
                  player(player, target) {
                    if (player.hasSkillTag('maihp')) return 5;
                    return -1;
                  },
                },
                order: 7.5,
              },
              fullimage: true,
            },
            nsdzz_baozhu: {
              type: 'trick',
              enable: true,
              selectTarget: 1,
              global: 'nsdzz_baozhu_buff',
              postAi(targets) {
                return targets.length == 1;
              },
              filterTarget(card, player, target) {
                return target.hasSkill('boss_suishou') || target.hasSkill('boss_suishoua') || target.hasSkill('boss_suishoub') || target.hasSkill('boss_suishouc') || target.hasSkill('boss_suishoud') || target.hasSkill('boss_suishou_female');
              },
              content() {
                target.damage('fire');
                if (target.countCards('he') > 0) {
                  event.card = target.getCards('he').randomGet();
                  target.discard(event.card);
                }
              },
              chongzhu: true,
              ai: {
                basic: {
                  order: 9.5,
                  useful: 3,
                  value: 3,
                },
                result: {
                  target(player, target) {
                    if (target.countMark('boss_suishou') > 0 || target.countMark('boss_suishoua') > 0 || target.countMark('boss_suishoub') > 0 || target.countMark('boss_suishouc') > 0 || target.countMark('boss_suishoud') > 0 || target.countMark('boss_suishou_female') > 0) return get.damageEffect(target, player, target, 'fire') - 100;
                    return get.damageEffect(target, player, target, 'fire');
                  },
                },
                tag: {
                  loseCard: 1,
                  discard: 1,
                },
              },
            },
            hezong_qinnu: {
              type: 'equip',
              subtype: 'equip1',
              skills: ['hezong_qinnu_skill'],
              distance: {
                attackFrom: -8,
              },
              enable: true,
              ai: {
                basic: {
                  useful: 2.5,
                  equipValue: 2.5,
                },
              },
              fullimage: true,
            },
            hezong_zhenlongchangjian: {
              type: 'equip',
              subtype: 'equip1',
              distance: {
                attackFrom: -1,
              },
              ai: {
                basic: {
                  equipValue: 4,
                },
              },
              skills: ['hezong_zhenlongchangjian_skill'],
              enable: true,
              fullimage: true,
            },
            hezong_chuanguoyuxi: {
              type: 'equip',
              subtype: 'equip5',
              ai: {
                basic: {
                  equipValue: 8.5,
                },
              },
              skills: ['hezong_chuanguoyuxi_skill'],
              enable: true,
              fullimage: true,
            },
            hezong_shangyangbianfa: {
              audio: true,
              global: 'hezong_shangyangbianfa_dying',
              type: 'trick',
              enable: true,
              filterTarget(card, player, target) {
                return target != player;
              },
              selectTarget: 1,
              content() {
                'step 0';
                var num = [1, 2].randomGet();
                target.damage(num).type = 'hezong_shangyangbianfa';
              },
              ai: {
                basic: {
                  order: 5,
                  useful: 1,
                  value: 5.5,
                },
                result: {
                  target: -1.5,
                },
                tag: {
                  damage: 1,
                },
              },
              fullimage: true,
            },
            nianshou_toulianghuanzhu: {
              enable: true,
              audio: true,
              chongzhu: true,
              type: 'trick',
              filterTarget(card, player, target) {
                return target.getSkills(null, false, false).filter(function (skill) {
                  var info = get.info(skill);
                  return info && !info.charlotte && lib.translate[skill + '_info'] && !get.skillInfoTranslation(skill, player).length == 0;
                }).length;
              },
              content() {
                'step 0';
                if (!target.storage.nianshou_lingli_skill) target.storage.nianshou_lingli_skill = [];
                event.skills = [];
                if (target.storage.nianshou_lingli_skill && target.storage.nianshou_lingli_skill.length) {
                  var skills = target.getSkills(null, false, false).filter(function (skill) {
                    var info = get.info(skill);
                    return (player.getFriends().includes(target) || target == player ? info : info && info.ai && info.ai.neg) && target.storage.nianshou_lingli_skill.includes(skill) && !info.charlotte && lib.translate[skill + '_info'] && !get.skillInfoTranslation(skill, player).length == 0;
                  });
                } else {
                  var skills = target.getSkills(null, false, false).filter(function (skill) {
                    var info = get.info(skill);
                    return info && !info.charlotte && lib.translate[skill + '_info'] && !get.skillInfoTranslation(skill, player).length == 0;
                  });
                  target.addMark('nianshou_lingli_skill_extra', 1);
                }
                for (var i = 0; i < skills.length; i++) {
                  event.skills.push(skills[i]);
                }
                event.skill = event.skills.randomGet();
                if (target.storage.nianshou_lingli_skill.includes(event.skill)) target.storage.nianshou_lingli_skill.remove(event.skill);
                target.removeSkill(event.skill);
                target.popup(event.skill);
                game.log(target, '失去了技能', '【', event.skill, '】');
                target.update();
                ('step 1');
                if (event.skill) {
                  var list = [];
                  for (var i in lib.character) {
                    if (lib.character[i][4].includes('boss')) continue;
                    if (i.includes('zuoci')) continue;
                    list.push(i);
                  }
                  if (!event.skills2) {
                    event.skills2 = [];
                    for (var i of list) {
                      event.skills2.addArray(
                        (lib.character[i][3] || []).filter(function (skill) {
                          var info = get.info(skill);
                          return (player.getFriends().includes(target) || target == player ? info : info && info.ai && info.ai.neg) && !info.charlotte && lib.translate[skill + '_info'] && !get.skillInfoTranslation(skill, player).length == 0;
                        })
                      );
                    }
                  }
                  var skills = event.skills2;
                  skills.randomSort();
                  var list = [];
                  for (var i = 0; i < skills[i].length; i++) {
                    if (!target.storage.nianshou_lingli_skill.includes(skills[i]) && !list.includes(skills[i]) && !target.getSkills(null, false, false).includes(skills[i]) && !get.skillInfoTranslation(skills[i], player).length == 0) list.push(skills[i]);
                    if (list.length == 1) break;
                  }
                  event.skill2 = list.randomGet();
                  target.storage.nianshou_lingli_skill.push(event.skill2);
                  target.addSkill(event.skill2);
                  target.popup(event.skill2);
                  game.log(target, '获得了技能', '【', event.skill2, '】');
                  target.update();
                }
              },
              ai: {
                wuxie(target, card, player, viewer) {
                  if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                    return 0;
                  }
                },
                order: 9.9,
                result: {
                  target(player, target) {
                    if (target.storage.nianshou_lingli_skill && target.storage.nianshou_lingli_skill.length) {
                      var skills = target.getSkills(null, false, false).filter(function (skill) {
                        var info = get.info(skill);
                        return target.storage.nianshou_lingli_skill && target.storage.nianshou_lingli_skill.length && target.storage.nianshou_lingli_skill.includes(skill) && info && info.ai && info.ai.neg && !info.charlotte && lib.translate[skill + '_info'] && !get.skillInfoTranslation(skill, player).length == 0;
                      });
                      if (target.storage.nianshou_lingli_skill.length == skills.length) return player.getFriends().includes(target) || target == player ? 1 : 0;
                      else return 0.5 - (player.getFriends().includes(target) || target == player ? (Math.random() - ((player.getFriends().includes(target) || target == player) && skills && skills.length) ? 1 : 0) : 1 - (target.storage.nianshou_lingli_skill && target.storage.nianshou_lingli_skill.length) ? skills.length / target.storage.nianshou_lingli_skill.length : 0);
                    } else return 0.5 - (player.getFriends().includes(target) || target == player ? (Math.random() - ((player.getFriends().includes(target) || target == player) && skills && skills.length) ? 1 : 0) : 1);
                  },
                },
              },
            },
            nianshou_fudichouxin: {
              enable: true,
              audio: true,
              type: 'trick',
              filterTarget(card, player, target) {
                return (
                  target != player &&
                  target.getSkills(null, false, false).filter(function (skill) {
                    var info = get.info(skill);
                    return info && !info.charlotte && lib.translate[skill + '_info'] && !get.skillInfoTranslation(skill, player).length == 0;
                  }).length
                );
              },
              content() {
                if (!target.storage.nianshou_lingli_skill) target.storage.nianshou_lingli_skill = [];
                event.skills = [];
                if (target.storage.nianshou_lingli_skill && target.storage.nianshou_lingli_skill.length) {
                  var skills = target.getSkills(null, false, false).filter(function (skill) {
                    var info = get.info(skill);
                    return target.storage.nianshou_lingli_skill.includes(skill) && info && !info.charlotte && lib.translate[skill + '_info'] && !get.skillInfoTranslation(skill, player).length == 0;
                  });
                } else {
                  var skills = target.getSkills(null, false, false).filter(function (skill) {
                    var info = get.info(skill);
                    return info && !info.charlotte && lib.translate[skill + '_info'] && !get.skillInfoTranslation(skill, player).length == 0;
                  });
                  target.addMark('nianshou_lingli_skill_extra', 1);
                }
                for (var i = 0; i < skills.length; i++) {
                  event.skills.push(skills[i]);
                }
                event.skill = event.skills.randomGet();
                if (target.storage.nianshou_lingli_skill.includes(event.skill)) target.storage.nianshou_lingli_skill.remove(event.skill);
                target.removeSkill(event.skill);
                target.popup(event.skill);
                game.log(target, '失去了技能', '【', event.skill, '】');
                target.update();
              },
              ai: {
                wuxie(target, card, player, viewer) {
                  if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                    return 0;
                  }
                },
                order: 10,
                result: {
                  target(player, target) {
                    if (target.storage.nianshou_lingli_skill && target.storage.nianshou_lingli_skill.length) {
                      var skills = target.getSkills(null, false, false).filter(function (skill) {
                        var info = get.info(skill);
                        return target.storage.nianshou_lingli_skill && target.storage.nianshou_lingli_skill.length && target.storage.nianshou_lingli_skill.includes(skill) && info && info.ai && info.ai.neg && !info.charlotte && lib.translate[skill + '_info'] && !get.skillInfoTranslation(skill, player).length == 0;
                      });
                      return target.storage.nianshou_lingli_skill && target.storage.nianshou_lingli_skill.length ? (Math.random() <= skills.length / target.storage.nianshou_lingli_skill.length ? 1 : -1) : -1;
                    } else return -1;
                  },
                },
              },
            },
            nianshou_baozhu: {
              enable: true,
              audio: true,
              type: 'basic',
              selectTarget: 1,
              nature: 'fire',
              filterTarget(card, player, target) {
                return true;
              },
              content() {
                'step 0';
                if (!target.hasSkill('nianshou_baozhu_skill')) {
                  target.addSkill('nianshou_baozhu_skill');
                }
                target.storage.nianshou_baozhu_skill++;
                ('step 1');
                if (target.storage.nianshou_baozhu_skill >= 3) {
                  delete target.storage.nianshou_baozhu_skill;
                  target.damage(3, 'fire', 'nosource');
                  target.removeSkill('nianshou_baozhu_skill');
                }
              },
              ai: {
                order: 2.1,
                result: {
                  target(player, target) {
                    var n = 0;
                    if (target.storage.nianshou_baozhu_skill) n = target.storage.nianshou_baozhu_skill;
                    return -(1 + n);
                  },
                },
                tag: {
                  damage: 1,
                },
              },
            },
            liannu: {
              skills: ['liannu1'],
              type: 'equip',
              subtype: 'equip1',
              ai: {
                order() {
                  return get.order({ name: 'sha' }) - 0.1;
                },
                equipValue(card, player) {
                  var result = (function () {
                    if (
                      !game.hasPlayer(function (current) {
                        return get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                      })
                    ) {
                      return 1;
                    }
                    if (player.hasSha() && _status.currentPhase == player) {
                      if ((player.getEquip('liannu') && player.countUsed('sha')) || player.getCardUsable('sha') == 0) {
                        return 10;
                      }
                    }
                    var num = player.countCards('h', 'sha');
                    if (num > 1) return 6 + num;
                    return 3 + num;
                  })();
                  return result;
                },
                basic: {
                  equipValue: 5,
                },
                tag: {
                  valueswap: 1,
                },
              },
            },
            shanhe_yaodaochitong: {
              skills: ['shanhe_yaodaochitong_skill'],
              type: 'equip',
              subtype: 'equip1',
              distance: {
                attackFrom: -1,
              },
              enable: true,
              ai: {
                basic: {
                  equipValue: 5,
                },
              },
            },
            shanhe_zhanhundao: {
              skills: ['shanhe_zhanhundao_skill'],
              type: 'equip',
              subtype: 'equip1',
              distance: {
                attackFrom: -2,
              },
              enable: true,
              ai: {
                basic: {
                  equipValue: 4,
                },
              },
            },
            shanhe_duanhun: {
              skills: ['shanhe_duanhun_skill'],
              type: 'equip',
              subtype: 'equip1',
              distance: {
                attackFrom: -1,
              },
              enable: true,
              ai: {
                basic: {
                  equipValue: 4,
                },
              },
            },
            shanhe_anqifeiren: {
              skills: ['shanhe_anqifeiren_skill'],
              type: 'equip',
              subtype: 'equip1',
              distance: {
                attackFrom: -4,
              },
              enable: true,
              ai: {
                basic: {
                  equipValue: 5,
                },
              },
            },
            shanhe_leizhen: {
              skills: ['shanhe_leizhen_skill'],
              type: 'equip',
              subtype: 'equip1',
              distance: {
                attackFrom: -2,
              },
              enable: true,
              ai: {
                basic: {
                  equipValue: 4.5,
                },
              },
            },
            shanhe_tiejiazhou: {
              type: 'equip',
              subtype: 'equip2',
              skills: ['shanhe_tiejiazhou_skill'],
              enable: true,
              fullimage: true,
              ai: {
                basic: {
                  equipValue: 6,
                },
              },
            },
            shanhe_gouxiang: {
              type: 'equip',
              subtype: 'equip2',
              skills: ['shanhe_gouxiang_skill'],
              enable: true,
              fullimage: true,
              ai: {
                basic: {
                  equipValue: 5,
                },
              },
            },
            shanhe_kunlunjing: {
              type: 'equip',
              subtype: 'equip2',
              skills: ['shanhe_kunlunjing_skill'],
              enable: true,
              fullimage: true,
              ai: {
                basic: {
                  equipValue: 4,
                },
              },
            },
            shanhe_pinganfu: {
              type: 'equip',
              subtype: 'equip5',
              ai: {
                basic: {
                  equipValue: 3,
                },
              },
              skills: ['shanhe_pinganfu_skill'],
              enable: true,
              fullimage: true,
            },
            shanhe_chiwenyupei: {
              type: 'equip',
              subtype: 'equip5',
              ai: {
                basic: {
                  equipValue: 6,
                },
              },
              skills: ['shanhe_chiwenyupei_skill'],
              enable: true,
              fullimage: true,
            },
            shidian_mengpohuihun: {
              global: ['shidian_mengpohuihun1'],
              mode: ['boss'],
              type: 'trick',
              enable(card, player) {
                return true;
              },
              filterTarget(card, player, target) {
                return true;
              },
              selectTarget: -1,
              content() {
                target.enableSkill('shidian_wanghun');
              },
              ai: {
                basic: {
                  order() {
                    return 11;
                  },
                  useful: [3, 1],
                  value: 10,
                },
                result: {
                  player(player, target) {
                    if (player == game.boss) {
                      return -2;
                    } else {
                      return 5;
                    }
                  },
                },
              },
            },
            shanhe_mengpohuihun: {
              global: ['shanhe_mengpohuihun1'],
              mode: ['boss'],
              type: 'trick',
              enable(card, player) {
                return true;
              },
              filterTarget(card, player, target) {
                return true;
              },
              selectTarget: -1,
              content() {
                target.enableSkill('shanhe_wanghun');
              },
              ai: {
                basic: {
                  order() {
                    return 11;
                  },
                  useful: [3, 1],
                  value: 10,
                },
                result: {
                  player(player, target) {
                    if (player == game.boss) {
                      return -2;
                    } else {
                      return 5;
                    }
                  },
                },
              },
            },
            hzc_haoshouqiongjing: {
              type: 'trick',
              enable: true,
              selectTarget: -1,
              toself: true,
              chongzhu: true,
              filterTarget(card, player, target) {
                return target == player && player.name1 != 'hzc_zuoci' && player.name2 != 'hzc_zuoci';
              },
              modTarget: true,
              content() {
                'step 0';
                if (target.name == 'hzc_zuoci' || target.name2 == 'hzc_zuoci') event.finish();
                if (!target.storage.hzc_haoshouqiongjing) target.storage.hzc_haoshouqiongjing = [];
                var list = [];
                for (var i in lib.character) {
                  if (lib.character[i][4].includes('boss')) continue;
                  if (i.includes('zuoci')) continue;
                  list.push(i);
                }
                if (!skills) {
                  var skills = [];
                  for (var i of list) {
                    skills.addArray(
                      (lib.character[i][3] || []).filter(function (skill) {
                        var info = get.info(skill);
                        return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.ruleSkill;
                      })
                    );
                  }
                }
                event.num = target.storage.hzc_haoshouqiongjing.length;
                var num1 = 10 * (event.num + 1);
                var num2 = num1 + 10;
                var list2 = [];
                for (var i in lib.skill) {
                  if (!skills.includes(i)) continue;
                  if (lib.skill[i].nobracket == true) continue;
                  if (!get.translation(i, 'info') || get.translation(i + '_info').length == 0) continue;
                  var leng = get.translation(i + '_info').replace(new RegExp('<(\S*?)[^>]*>.*?|<.*? />', 'gi'), '').length;
                  if (leng >= num1 && leng <= num2) list2.add(i);
                }
                var func = function (list2) {
                  var info = get.info(list2);
                  if (!info || info.unique || info.limited || info.juexingji || info.charlotte || info.zhuSkill || info.hiddenSkill || info.dutySkill) return false;
                  return true;
                };
                list2.remove(target.getSkills());
                list = list2.randomGets(3);
                if (list.length == 0) return target.draw();
                event.skillai = function () {
                  return get.max(list, get.skillRank, 'item');
                };
                if (event.isMine()) {
                  var dialog = ui.create.dialog('forcebutton');
                  dialog.add('皓首穷经:选择获得一项技能');
                  var clickItem = function () {
                    _status.event._result = this.link;
                    dialog.close();
                    game.resume();
                  };
                  for (var i = 0; i < list.length; i++) {
                    if (lib.translate[list[i] + '_info']) {
                      var translation = get.translation(list[i]);
                      if (translation[0] == '新' && translation.length == 3) {
                        translation = translation.slice(1, 3);
                      } else {
                        translation = translation.slice(0, 2);
                      }
                      var item = dialog.add('<div class="popup pointerdiv" style="width:100%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                      item.firstChild.addEventListener('click', clickItem);
                      item.firstChild.link = list[i];
                    }
                  }
                  dialog.add(ui.create.div('.placeholder'));
                  event.switchToAuto = function () {
                    event._result = event.skillai();
                    dialog.close();
                    game.resume();
                  };
                  _status.imchoosing = true;
                  game.pause();
                } else {
                  event._result = event.skillai();
                }
                ('step 1');
                _status.imchoosing = false;
                var link = result;
                target.storage.hzc_haoshouqiongjing.add(link);
                if (target.storage.hzc_haoshouqiongjing.length >= 4) {
                  var skill = target.storage.hzc_haoshouqiongjing.slice(target.storage.hzc_haoshouqiongjing.length - 4);
                  target.removeSkill(skill[0]);
                }
                target.addSkillLog(link);
                target.popup(link);
              },
              ai: {
                basic: {
                  order: 12,
                  useful() {
                    var player = _status.event.player;
                    if (player.name1 != 'hzc_zuoci' && player.name2 != 'hzc_zuoci') return 6;
                    return 0;
                  },
                  value(card, player) {
                    if (player.name1 != 'hzc_zuoci' && player.name2 != 'hzc_zuoci') return 10;
                    return 0;
                  },
                },
                result: {
                  target(player, target) {
                    if (target.name1 == 'hzc_zuoci' || target.name2 == 'hzc_zuoci') return 0;
                    return 2;
                  },
                },
              },
            },
            hzc_huanhundan: {
              type: 'basic',
              enable() {
                return game.dead.length;
              },
              cardcolor: 'red',
              notarget: true,
              async content(event, trigger, player) {
                const { links } = await player
                  .chooseButton(['选择一名角色令其复活', game.dead])
                  .set('ai', (button) => get.attitude(player, button.link))
                  .forResult();
                if (links && links[0]) {
                  links[0].revive(1);
                  links[0].draw(2);
                }
              }, //QQQ
              ai: {
                basic: {
                  useful() {
                    var player = _status.event.player;
                    for (var i = 0; i < game.dead.length; i++) {
                      if (get.attitude(player, game.dead[i]) > 1) return 8;
                    }
                    return 0;
                  },
                  value(card, player) {
                    for (var i = 0; i < game.dead.length; i++) {
                      if (get.attitude(player, game.dead[i]) > 1) return 12;
                    }
                    return 0;
                  },
                },
                order(card, player) {
                  for (var i = 0; i < game.dead.length; i++) {
                    if (get.attitude(player, game.dead[i]) > 3) return 7;
                  }
                  return -10;
                },
                result: {
                  player(player) {
                    for (var i = 0; i < game.dead.length; i++) {
                      if (get.attitude(player, game.dead[i]) > 3) return 2;
                    }
                    return -10;
                  },
                },
              },
            },
            hezong_daqin_tongpao_bagua: {
              type: 'equip',
              subtype: 'equip2',
              skills: ['bagua_skill'],
              enable: true,
              ai: {
                basic: {
                  equipValue: 7.5,
                  useful: 2,
                },
              },
            },
            hezong_daqin_tongpao_baiyin: {
              onLose() {
                player.recover();
              },
              filterLose(card, player) {
                if (player.hasSkillTag('unequip2')) return false;
                return player.hp < player.maxHp;
              },
              tag: {
                recover: 1,
              },
              type: 'equip',
              subtype: 'equip2',
              skills: ['baiyin_skill'],
              enable: true,
              enable: true,
              ai: {
                order: 9.5,
                equipValue(card, player) {
                  if (player.hp == player.maxHp) return 5;
                  if (player.countCards('h', 'baiyin')) return 6;
                  return 0;
                },
                basic: {
                  equipValue: 5,
                  useful: 2,
                },
              },
            },
            hezong_daqin_tongpao_renwang: {
              type: 'equip',
              subtype: 'equip2',
              skills: ['renwang_skill'],
              enable: true,
              enable: true,
              ai: {
                basic: {
                  equipValue: 7.5,
                },
              },
            },
            hezong_daqin_tongpao_tengjia: {
              cardnature: 'fire',
              type: 'equip',
              subtype: 'equip2',
              enable: true,
              enable: true,
              ai: {
                equipValue(card, player) {
                  if (player.hasSkillTag('maixie') && player.hp > 1) return 0;
                  if (player.hasSkillTag('noDirectDamage')) return 10;
                  if (get.damageEffect(player, player, player, 'fire') >= 0) return 10;
                  var num =
                    3 -
                    game.countPlayer(function (current) {
                      return get.attitude(current, player) < 0;
                    });
                  if (player.hp == 1) num += 4;
                  if (player.hp == 2) num += 1;
                  if (player.hp == 3) num--;
                  if (player.hp > 3) num -= 4;
                  return num;
                },
                basic: {
                  equipValue: 3,
                },
              },
              skills: ['tengjia1', 'tengjia2', 'tengjia3'],
            },
            wenhe_lidaitaojiang: {
              audio: true,
              type: 'trick',
              enable: true,
              selectTarget: 1,
              filterTarget(card, player, target) {
                if (player == target) return false;
                return target.countCards('h') + target.countCards('h') > 1;
              },
              content() {
                var cards = player.getCards('h').concat(target.getCards('h'));
                var list1 = [];
                var list2 = [];
                var list = [list1, list2];
                if (Array.isArray(cards))
                  for (var i of cards) {
                    list.randomGet().push(i);
                  }
                if (list1.length) {
                  player.$draw(list1.length);
                  player.gain(list1);
                }
                if (list2.length) {
                  target.$draw(list2.length);
                  target.gain(list2);
                }
              },
              ai: {
                basic: {
                  order: 1,
                  useful: 1,
                  value: 5,
                },
                result: {
                  target(player, target) {
                    var ph = player.countCards('h') - 1;
                    var th = target.countCards('h');
                    return ph - th;
                  },
                },
              },
            },
            //出牌阶段,对一名其他角色使用.随机分配你与其的体力.(至少为1,至多不能超出上限.)
            wenhe_douzhuanxingyi: {
              audio: true,
              type: 'trick',
              enable: true,
              selectTarget: 1,
              filterTarget(card, player, target) {
                return player != target;
              },
              content() {
                const num = player.hp + target.hp;
                player.hp = Math.ceil(Math.random() * num);
                target.hp = num - player.hp;
              },
              ai: {
                basic: {
                  order: 1,
                  useful: 1,
                  value: 5,
                },
                result: {
                  target(player, target) {
                    var ph = player.hp;
                    var pm = player.maxHp;
                    var th = target.hp;
                    var tm = target.maxHp;
                    if (ph == pm && th == tm) return 0;
                    if (th == tm) return ph - pm;
                    if (ph == pm) return tm - th;
                    if (ph == 1) return ph - th;
                    if (th == 1) return ph - th;
                    return ph - th;
                  },
                },
              },
            },
            xichuanhongjinpao: {
              type: 'equip',
              subtype: 'equip5',
              skills: ['jinpao_skill'],
              enable: true,
              ai: {
                basic: {
                  equipValue: 10,
                  useful: 3,
                },
              },
              fullimage: true,
            },
            hulaoguan_boss_lianjunshengyan: {
              audio: true,
              type: 'trick',
              enable(card, player) {
                return true;
              },
              filterTarget(card, player, target) {
                return true;
              },
              selectTarget: -1,
              content() {
                'step 0';
                if (player == target) target.draw(game.filterPlayer().length);
                else target.chooseDrawRecover(true);
                event.finish();
                ('step 1');
                if (target != player) target.link(false);
                else if (typeof result.control == 'string') {
                  var index = result.control.indexOf('回');
                  var draw = parseInt(result.control.slice(1, index));
                  var recover = parseInt(result.control.slice(index + 1));
                  if (draw) target.draw(draw);
                  if (recover) target.recover(recover);
                }
              },
              ai: {
                order: 3,
                value: 4,
                useful: 2,
                result: {
                  target(player, target) {
                    if (player == target) return 2;
                    return 1;
                  },
                },
              },
            },
            dw_ruyijingubang: {
              type: 'equip',
              subtype: 'equip1',
              distance: {
                attackFrom: -2,
              },
              ai: {
                basic: {
                  equipValue: 10,
                  value(card, player) {
                    if (player.hasSkill('dw_ruyi')) return 0;
                  },
                },
              },
              skills: ['dw_ruyijingubang_skill', 'dw_ruyijingubang_skill2'],
            },
            qihuan_cibi: {
              skills: ['qihuan_cibi_skill'],
              type: 'equip',
              subtype: 'equip1',
              ai: {
                basic: {
                  equipValue: 3,
                },
              },
            },
            qihuan_yinyi: {
              skills: ['qihuan_yinyi_skill'],
              type: 'equip',
              subtype: 'equip2',
              onLose() {
                var next = game.createEvent('qihuan_yinyi_lose');
                event.next.remove(next);
                var evt = event.parent;
                if (evt.getlx === false) evt = evt.parent;
                evt.after.push(next);
                next.player = player;
                next.setContent(function () {
                  if (_status.currentPhase != player) player.loseHp();
                });
              },
              ai: {
                basic: {
                  equipValue: 5,
                },
              },
              fullimage: true,
            },
          },
          translate: {
            xichuanhongjinpao: '西川红锦袍',
            xichuanhongjinpao_info: '锁定技,所有己方角色的摸牌阶段多摸X张牌,出牌阶段可以多出X张【杀】,手牌上限加X(X为本局游戏你使用此宝物牌的次数).',
            fumojingangchu: '伏魔金刚杵',
            fumojingangchu_info: '你使用【杀】指定目标后,令其防具无效.你对有防具的角色造成的伤害+1.',
            feijiangshenweijian: '飞将神威剑',
            feijiangshenweijian_info: '你使用【杀】造成伤害时,改为流失体力.每当有角色流失1点体力,你摸一张牌.',
            wushuangxiuluoji: '无双修罗戟',
            wushuangxiuluoji_info: '你的【杀】或【决斗】造成伤害后,你可以对受伤目标的一名相邻角色造成1点伤害.',
            honglianzijinguan: '红莲紫金冠',
            honglianzijinguan_info: '你的回合结束时,你可以随机弃置所有敌方角色一张牌.其中每有一张基本牌,你摸两张牌;每有一张装备牌,随机一名敌方角色失去1点体力;每有一张锦囊牌,随机获得一名敌方角色的一张牌.',
            youhuoshepoling: '幽火摄魄令',
            youhuoshepoling_info: '出牌阶段结束时,你可以对所有敌方角色造成1点伤害,你回复等同于造成伤害数量的体力.',
            qihuan_du: '毒',
            qihuan_du_info: '出牌阶段,你可以使用此牌.当【毒】以正面向上的形式离开你的手牌区时,你失去1点体力.',
            sw_yu: '雨',
            sw_yu_info: '①出牌阶段,对自己使用,目标角色回复1点体力.②出牌阶段,对其他角色使用,目标角色受到1点雷电伤害.',
            nianshou_toulianghuanzhu: '偷梁换柱',
            nianshou_toulianghuanzhu_info: '出牌阶段,对一名角色使用,目标角色随机失去一个技能并随机获得一个技能.可重铸.',
            nianshou_fudichouxin: '釜底抽薪',
            nianshou_fudichouxin_info: '出牌阶段,对一名其他角色使用,目标角色随机失去一个技能.',
            nianshou_baozhu: '爆竹',
            nianshou_baozhu_info: '出牌阶段,对一名角色使用,其获得一个<爆>印记.<br>当其拥有三个<爆>印记时,其移除所有<爆>印记并受到3点无来源的火焰伤害.',
            liannu: '连弩',
            liannu_info: '出牌阶段,你可以多使用三张【杀】.',
            hezong_shangyangbianfa: '商鞅变法',
            hezong_shangyangbianfa_info: '出牌阶段,对一名其他角色使用.你对目标角色造成随机1~2点伤害,若该角色以此法进入濒死状态,则其进行判定,若判定结果为黑色,则所有角色角色不能使用【桃】直到此濒死事件结算结束.',
            hezong_qinnu: '秦弩',
            hezong_qinnu_info: '当你使用【杀】指定一个目标后,你令其防具无效,你的出牌阶段内,可使用的【杀】数量+1;当你失去装备区里的【秦弩】,你令此牌销毁.',
            hezong_zhenlongchangjian: '真龙长剑',
            hezong_zhenlongchangjian_info: '每回合,你使用的第一张非延时性锦囊无法被【无懈可击】抵消.',
            hezong_chuanguoyuxi: '传国玉玺',
            hezong_chuanguoyuxi_info: '出牌阶段开始时,你可以从南蛮入侵、万箭齐发、桃园结义、五谷丰登中选择一张使用.',
            shanhe_yaodaochitong: '妖刀赤瞳',
            shanhe_yaodaochitong_info: '锁定技,你使用黑色【杀】造成的伤害+1;当你使用【杀】指定目标后需判定,若结果为黑色,则随机转移其他合理目标.',
            shanhe_zhanhundao: '斩魂刀',
            shanhe_zhanhundao_info: '你对目标造成伤害时,若目标体力值不为满,你可以防止此伤害并令其体力上限-1.',
            shanhe_duanhun: '断魂',
            shanhe_duanhun_info: '锁定技,你造成的伤害无视目标护甲.',
            shanhe_anqifeiren: '暗器飞刃',
            shanhe_anqifeiren_info: '锁定技,每名其他角色每回合限一次,你对其造成伤害时令目标随机一个非锁定技失效直至目标的回合结束.', //QQQ
            shanhe_leizhen: '雷震',
            shanhe_leizhen_info: '锁定技,你每使用3张手牌后,你的下一张【杀】造成的伤害+1(不可叠加).',
            shanhe_tiejiazhou_bg: '胄',
            shanhe_tiejiazhou: '铁甲胄',
            shanhe_tiejiazhou_info: '当你受到高于1或致命伤害时,则你可以将装备区内的【铁甲胄】置入弃牌堆,本回合结束前,防止你受到的伤害.',
            shanhe_gouxiang: '勾镶',
            shanhe_gouxiang_info: '锁定技,你使用同花色或同点数【闪】响应【杀】后,随机获得对方一张手牌.',
            shanhe_kunlunjing: '昆仑镜',
            shanhe_kunlunjing_info: '锁定技,在你受到一张锦囊牌伤害后,直到战斗结束,防止同名锦囊牌对你造成的伤害.',
            shanhe_pinganfu: '平安符',
            shanhe_pinganfu_info: '锁定技,摸牌阶段开始时,你额外摸X张牌(X为你击杀的敌方角色数).',
            shanhe_chiwenyupei: '螭纹玉佩',
            shanhe_chiwenyupei_info: '锁定技,出牌阶段结束时回复你的1点体力;摸牌阶段开始时,若你的体力为满,则摸牌数+2.',
            wenhe_lidaitaojiang: '李代桃僵',
            wenhe_lidaitaojiang_info: '出牌阶段,对一名其他角色使用.随机分配你们的手牌.',
            wenhe_douzhuanxingyi: '斗转星移',
            wenhe_douzhuanxingyi_info: '出牌阶段,对一名其他角色使用.随机分配你与其的体力.(至少为1,至多不能超出上限.)',
            hulaoguan_boss_wushuangfangtianji: '无双方天戟',
            hulaoguan_boss_wushuangfangtianji_info: '你使用【杀】对目标角色造成伤害后,可以摸一张牌或弃置目标角色一张牌.',
            hulaoguan_boss_shufazijinguan: '束发紫金冠',
            hulaoguan_boss_shufazijinguan_info: '准备阶段,你可以对一名其他角色造成1点伤害.',
            hulaoguan_boss_hongmianbaihuapao: '红棉百花袍',
            hulaoguan_boss_hongmianbaihuapao_info: '锁定技,防止你受到的属性伤害.',
            hulaoguan_boss_linglongshimandai: '玲珑狮蛮带',
            hulaoguan_boss_linglongshimandai_info: '当其他角色使用牌指定你为唯一目标后,你可以进行一次判定,若判定结果为♥️️,则此牌对你无效.',
            shidian_mengpohuihun: '回魂',
            shidian_mengpohuihun_info: '若场上有角色在本局游戏中因孟婆的【忘魂】失去过技能,则令其回复该技能;此牌进入弃牌堆后,会被销毁.',
            shanhe_mengpohuihun: '回魂',
            shanhe_mengpohuihun_info: '若场上有角色在本局游戏中因孟婆的【忘魂】失去过技能,则令其回复该技能;此牌进入弃牌堆后,会被销毁.',
            hulaoguan_boss_lianjunshengyan: '联军盛宴',
            hulaoguan_boss_lianjunshengyan_info: '出牌阶段,对场上所有角色使用.你摸X张牌(X为存活角色数),其他角色依次选择回复1点体力或摸一张牌.',
            hzc_huanhundan: '还魂丹',
            hzc_huanhundan_info: '出牌阶段,对一名已死亡的角色使用.令其复活并摸两张牌.',
            hzc_haoshouqiongjing: '皓首穷经',
            hzc_haoshouqiongjing_info: '①出牌阶段,对你使用.你从所有武将牌中随机观看至多三个技能并选择其中一个技能获得(除主公技、觉醒技、限定技、使命技、隐匿技和charlotte技),你每次观看到的技能描述字数将单调递增,当你以此法获得的新技能超过三个时将替换旧技能,若无可获得的技能,你摸一张牌;②重铸.(魂左慈不可使用此牌且此牌对魂左慈无效)',
            hezong_daqin_tongpao_bagua: '八卦阵',
            hezong_daqin_tongpao_bagua_info: '每当你需要使用(或打出)一张【闪】时,你可以进行一次判定:若结果为红色,则视为你使用(或打出)了一张【闪】;若为黑色,则你仍可从手牌里使用(或打出).当此装备离开你的装备区时,你令此牌销毁.',
            hezong_daqin_tongpao_baiyin: '白银狮子',
            hezong_daqin_tongpao_baiyin_info: '锁定技,每次你受到伤害时,最多承受1点伤害(防止多余的伤害);当你失去装备区里的白银狮子时,你回复1点体力.当此装备离开你的装备区时,你令此牌销毁.',
            hezong_daqin_tongpao_renwang: '仁王盾',
            hezong_daqin_tongpao_renwang_info: '锁定技,黑色的【杀】对你无效.当此装备离开你的装备区时,你令此牌销毁.',
            hezong_daqin_tongpao_tengjia: '藤甲',
            hezong_daqin_tongpao_tengjia_info: '锁定技,【南蛮入侵】、【万箭齐发】和普通【杀】对你无效.每次受到火焰伤害时,该伤害+1.当此装备离开你的装备区时,你令此牌销毁.',
            qihuan_cibi: '刺匕',
            qihuan_cibi_info: '你使用黑色牌造成的伤害+1,使用红色牌造成的伤害-1.',
            qihuan_yinyi: '隐衣',
            qihuan_yinyi_info: '普通杀对你无效,当此牌于你的回合外离开你的装备区后,你失去1点体力.',
            lzzd_zongzi: '粽子',
            lzzd_zongzi_info: '出牌阶段使用,立即摸5张牌,本回合内龙舟前进速度翻倍.',
            nsdzz_baozhu: '爆竹',
            nsdzz_baozhu_info: '①出牌阶段,对一名年兽或夕兽使用,令其受到1点火焰伤害并随机弃置一张牌;②重铸.',
            dw_ruyijingubang: '如意金箍棒',
            dw_ruyijingubang_info: '出牌阶段限一次,你可以将金箍棒攻击范围调整至1~4.<br>1:你使用【杀】无次数限制;<br>2:你使用【杀】伤害+1;<br>3:你使用【杀】无法被响应;<br>4:你使用【杀】可以额外增加一个目标.',
          },
        };
        for (const i in QQQ.card) {
          if (!QQQ.translate[i] || !QQQ.translate[`${i}_info`]) {
            console.warn(i, '没有翻译');
          }
        }
        for (const i in QQQ.card) {
          const info = QQQ.card[i];
          if (!info.image) {
            if (info.fullskin) {
              info.image = `ext:活动BOSS/image/card/${i}.png`;
            } else {
              info.image = `ext:活动BOSS/image/card/${i}.jpg`;
            }
          }
          lib.inpile.add(i);
          if (info.mode && !info.mode.includes(lib.config.mode)) continue;
          lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
        }
        lib.config.all.cards.add('活动BOSS');
        lib.config.cards.add('活动BOSS');
        lib.translate.活动BOSS_card_config = '活动BOSS';
        return QQQ;
      });
    },
    config: {
      死亡移除: {
        name: '<span class="Qmenu">死亡移除</span>',
        intro: '死亡后移出游戏',
        init: true,
        onclick(result) {
          game.saveConfig('dieremove', result);
        },
      },
      HD_ghhj: {
        clear: true,
        name: '<li>OL身份模式环境加成',
      },
      _HD_tiankong: {
        name: '当前环境为天空',
        intro: '开启后,在身份模式中,环境为天空',
        init: false,
      },
      _HD_ludi: {
        name: '当前环境为陆地',
        intro: '开启后,在身份模式中,环境为陆地',
        init: false,
      },
      _HD_haiyang: {
        name: '当前环境为海洋',
        intro: '开启后,在身份模式中,环境为海洋',
        init: false,
      },
      HD_dengjie1: {
        clear: true,
        name: '<li>OL挑战模式等阶加成',
      },
      _HD_zhuangbei: {
        name: '开局使用一张装备牌',
        intro: '开启后,在挑战模式中,开局使用一张装备牌',
        init: false,
      },
      _HD_draw1: {
        name: '初始手牌+2',
        intro: '开启后,在挑战模式中,开局摸两张牌',
        init: false,
      },
      _HD_draw2: {
        name: '摸牌阶段额外摸一张牌',
        intro: '开启后,在挑战模式中,于摸牌阶段摸牌时多摸一张牌',
        init: false,
      },
      _HD_sha: {
        name: '使用杀的次数上限+1',
        intro: '开启后,在挑战模式中,出牌阶段你可以额外使用一张杀',
        init: false,
      },
      _HD_tili1: {
        name: '增加一点体力上限',
        intro: '开启后,在挑战模式中,你增加一点体力上限',
        init: false,
      },
      _HD_tili2: {
        name: '再增加一点体力上限',
        intro: '开启后,在挑战模式中,你增加一点体力上限',
        init: false,
      },
      _HD_chongsheng: {
        name: '获得技能【重生】',
        intro: '开启后,在挑战模式中,你获得技能【重生】',
        init: false,
      },
      HD_dengjie2: {
        clear: true,
        name: '<li>十周年挑战模式等阶加成',
        intro: '开启后,在挑战模式中,获得十周年挑战模式等阶加成',
        init: false,
      },
      _HD_buff: {
        name: '五阶加成',
        intro: '开启后,在挑战模式中,获得十周年挑战模式五阶加成',
        init: false,
      },
      HD_tsjn: {
        clear: true,
        name: '<li>特殊技能',
      },
      _HD_weizhuang: {
        name: '获得特殊技能【伪装】',
        intro: '开启后,在挑战模式中,你获得特殊技能【伪装】',
        init: false,
      },
      _HD_jihuo: {
        name: '获得特殊技能【集火】',
        intro: '开启后,在挑战模式中,你获得特殊技能【集火】',
        init: false,
      },
    },
    package: {
      intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br>本扩展更新了龙舟争渡,征战虎牢,驱鬼逐邪,合纵抗秦,千里走单骑,仲夜观星,年兽大作战等活动BOSS,并为挑战模式追加了可以单独开启的等阶特权,需要手动开启.',
      author: '烟雨墨染',
      version: '1.0',
    },
  };
});
