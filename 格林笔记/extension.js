import { gelinPack } from './gelin/gelin.js';
import { gelinMap } from './map.js';
import { lib, game, ui, get, ai, _status } from '../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/格林笔记/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
  return {
    name: '格林笔记',
    content(config, pack) {
      ui.gl_wider = true;
      galgame.text.chaoxiao = [
        'gl_shuiguai:呦？孱弱的小宝宝需要我的祝福嘛~',
        'choose:菜菜,救救~:你才是小宝宝嘞!',
        {
          avatar: 'gl_shuiguai',
          text(event) {
            if (event.chooses.includes('菜菜,救救~')) {
              if (!lib.config.mode_config.xiangqv) lib.config.mode_config.xiangqv = {};
              lib.config.mode_config.xiangqv.complexity = 'simple';
              game.saveConfig('mode_config', lib.config.mode_config);
              return '哈哈,那可爱的小宝宝~可要加油哦♡';
            } else {
              return '好吧,就让我看看你还能嘴硬到什么时候~';
            }
          }
        }];

      //统一设置一下内容
      var changeCharacter = function (character, name) {
        var list = lib.config.gelin.data;
        character[4].add('ext:格林笔记/character/' + name + '.jpg');
        if (!list.includes(name)) {
          character[4].push('unseen');
          if (name == 'gl_create') character[3].length = 0;
        }
        if (lib.config.extension_格林笔记_chunjing == '万象之主' && character[3].length && character[4].includes('unseen')) lib.config.gelin.lianjie.push(name);
        if (lib.config.gelin.specialSkill[name]) character[3].addArray(lib.config.gelin.specialSkill[name]);
      };
      var initCharacter = function (name) {
        var pack = lib.characterPack[name];
        for (var i in pack) {
          changeCharacter(pack[i], i);
          if (lib.character[i]) changeCharacter(lib.character[i], i);
        }
      };
      initCharacter('gelin');
      initCharacter('gl_create');
      //回复阶段
      lib.phaseName.splice(4, 0, 'phaseSupply');
      lib.init.json('extension/格林笔记/gelin/galgame.json', function (text) {
        for (var i in text) {
          galgame.text[i] = text[i];
        }
      });
      //卡牌构筑
      if (!lib.gl_initMp) lib.gl_initMp = '4/10';
      lib.gl_custom.triggerUp.push('gelin');
      game.gl_triggerUp('gelin');
      for (var i in lib.character) {
        if (i.indexOf('gl_') == 0) lib.character[i][4].push('gl_mp:4/10');
      }
      game.gl_openBook = function () {
        if (!ui.gl_book) {
          var page = ui.create.div('.gl_book.hidden', ui.window);
          var obj = window.gl_createPage(lib, game, ui, get, ai, _status);
          var node = obj.init(page);
          obj.over = function () {
            page.classList.add('hidden');
          };
          page.link = obj;
          ui.gl_book = page;
        } else if (ui.gl_book.classList.contains('hidden')) {
          ui.gl_book.classList.remove('hidden');
          ui.backgroundMusic.pause();
          if (ui.gl_book.link.backgroundMusic) {
            ui.gl_book.link.backgroundMusic.play();
          }
        }
        return ui.gl_book;
      };
      if (config.pege) {
        ui.click.charactercard = function (name, sourcenode, noedit, resume, avatar) {
          game.gl_openBook();
          ui.gl_book.link.pageList.childNodes[1].onclick();
          ui.gl_book.link.$changeLink(name);
          game.resume2();
        };
      }
      lib.init.js('extension/格林笔记/page', 'index');
      //检测存档异常
      lib.arenaReady.push(function () {
        var version = [1, 10, 6];
        for (const i of lib.version.split('.')) {
          if (parseInt(i) < version.shift()) {
            alert('你的无名杀版本过低,正在关闭本扩展(格林笔记)并重启');
            game.saveConfig('extension_格林笔记_enable', false);
            game.reload();
            return;
          }
          if (version.length == 0) break;
        }
        for (var name in lib.config.skin) {
          if (!lib.character[name]) continue;
          var skin;
          for (let i = 0; i < lib.character[name][4].length; i++) {
            if (lib.character[name][4][i].indexOf('ext:') == 0) {
              skin = lib.character[name][4][i];
              lib.character[name][4].splice(i--, 1);
            }
          }
          if (skin) {
            if (lib.config.skin[name]) {
              lib.character[name][4].push(skin.split('/')[0] + '/skin/' + name + '/' + lib.config.skin[name] + '.jpg');
            }
            lib.character[name][4].push(skin);
          }
        }
        if (!game.gl_save) return;
        if (confirm('检测到你的存档异常,是否启用备份存档？')) {
          game.saveConfig('gelin', game.gl_save);
        }
      });
      //竞速模式
      //注意!该模式存在修改本体函数的行为,出现BUG请不要使用.
      lib.gl_custom.speed.push(function (player, num) {
        var magic = get.gl_nature(player.name).magic;
        var storage = player.storage.gl_lianjie;
        if (storage) {
          for (let i = 0; i < storage.length; i++) {
            magic += get.gl_nature(storage[i]).magic;
          }
          magic = magic / (storage.length + 1);
        }
        num = game.checkMod(player, magic, 'gl_magic', player) / 10 + num;
        if (player.hp / player.maxHp > 0.7) {
          num *= 1.25;
        }
        if (player.hp / player.maxHp < 0.4) {
          num *= 0.75;
        }
        var count = Math.floor(player.countCards('he') / player.maxHp);
        if (count == 0) {
          num++;
        } else if (count > 5) {
          num -= 5;
        } else {
          num -= count;
        }
        return num;
      });
      //处理语音问题
      lib.skill.gl_audio = {
        hookTrigger: {
          log(player, name) {
            if (!lib.config.background_speak) return;
            if (!game.gelinAudio) return;
            var info;
            if (lib.config.skin[name] && game.gelinAudio[lib.config.skin[name] + name]) {
              info = game.gelinAudio[lib.config.skin[name] + name];
            } else {
              info = game.gelinAudio[name];
            }
            while (typeof info == 'string') {
              name = info;
              info = game.gelinAudio[name];
            }
            if (get.is.object(info) && info[player.name]) {
              name = name + '_' + player.name;
              info = info[player.name];
            }
            if (info === true) {
              game.playAudio('../extension/格林笔记/voice', name);
            } else if (typeof info == 'number') {
              game.playAudio('../extension/格林笔记/voice', name + Math.ceil(info * Math.random()));
            }
          }
        },
        trigger: {
          player: ['dieBefore', 'useSkillBegin']
        },
        forced: true,
        _priority: -100,
        lastDo: true,
        forceDie: true,
        filter(event, player) {
          if (!lib.config.background_speak) return false;
          if (event.name == 'die') return player.name.indexOf('gl_') == 0;
          return game.gelinAudio && game.gelinAudio[event.skill];
        },
        content() {
          if (trigger.name == 'die') {
            var name = player.name;
            var playAudio;
            if (player.storage.gl_lianjie) name = player.storage.gl_lianjie[0];
            if (game.gelinAudio && lib.config.skin[name] && game.gelinAudio[lib.config.skin[name] + '_' + name]) {
              name = lib.config.skin[name] + name;
            }
            if (name != player.name) {
              playAudio = function () {
                game.playAudio('../extension/格林笔记/voice', player.name + '_die');
              };
            }
            if (name.indexOf('gl_') == 0) {
              game.playAudio('../extension/格林笔记/voice', name + '_die', playAudio);
            } else if (lib.character[name] && lib.character[name][4].includes('die_audio')) {
              game.playAudio('die', name, playAudio);
            } else {
              game.playAudio('die', name, function () {
                game.playAudio('die', name.slice(name.indexOf('_') + 1), playAudio);
              });
            }
          } else {
            lib.skill.gl_audio.hookTrigger.log(player, trigger.skill);
          }
        }
      };
      game.addGlobalSkill('gl_audio');
      //联结点数
      get.gl_count = function () {
        if (!lib.config.gelin.count) lib.config.gelin.count = 0;
        return lib.config.gelin.lianjie.length * 10 - lib.config.gelin.count;
      };
      //角色属性
      get.gl_nature = function (name) {
        if (!lib.config.gelin.nature[name]) {
          lib.config.gelin.nature[name] = {
            power: 0,
            defense: 0,
            recover: 0,
            magic: 0
          };
        }
        return lib.config.gelin.nature[name];
      };
      game.gl_gainNature = function (name, type, num) {
        var nature = get.gl_nature(name);
        var count = 200;
        for (var i in nature) {
          count -= nature[i];
        }
        if (num > count) num = count;
        if (num == 0) return;
        nature[type] += num;
        if (nature[type] > 100) {
          nature[type] = 100;
        }
        if (nature[type] < 0) {
          nature[type] = 0;
        }
        game.saveConfig('gelin', lib.config.gelin);
      };
      //速度竞赛
      if (get.mode() != 'xiangqv') {
        game.gl_speed = config.speed;
      }
      if (config.nature || get.mode() == 'xiangqv') {
        //暴击判定
        lib.skill._gl_power = {
          trigger: {
            source: 'damageBegin2'
          },
          filter(event, player) {
            var num = Math.random() * 100;
            var count = get.gl_nature(player.name).power;
            var storage = player.storage.gl_lianjie;
            if (storage) {
              for (let i = 0; i < storage.length; i++) {
                count += get.gl_nature(storage[i]).power;
              }
              count = count / (storage.length + 1);
            }
            return num < game.checkMod(player, count, 'gl_power', player);
          },
          lastDo: true,
          _priority: -100000,
          forced: true,
          content() {
            trigger.num = trigger.num * 2;
            player.popup('暴击', 'fire');
            game.log(player, '打中了', trigger.player, '的要害');
          }
        };
        //赐福判定
        lib.skill._gl_recover = {
          trigger: {
            player: 'phaseAfter'
          },
          lastDo: true,
          _priority: -100000,
          forced: true,
          content() {
            var count = get.gl_nature(player.name).recover;
            var storage = player.storage.gl_lianjie;
            if (storage) {
              for (let i = 0; i < storage.length; i++) {
                count += get.gl_nature(storage[i]).recover;
              }
              count = count / (storage.length + 1);
            }
            count = game.checkMod(player, count, 'gl_recover', player);
            var gain = 0;
            player.getHistory('gain', function (evt) {
              var judge = Math.random() * 100;
              if (judge < count && evt.cards) {
                gain += evt.cards.length;
              }
            });
            if (gain > 0) {
              player.directgain(get.cards(gain));
              player.popup('赐福', 'wood');
              game.log(player, '得到了赐福');
            }
          }
        };
        //格挡判定
        lib.skill._gl_defense = {
          trigger: {
            player: 'damageBegin4'
          },
          lastDo: true,
          _priority: -100000,
          filter(event, player) {
            var num = Math.random() * 100;
            var count = get.gl_nature(player.name).defense;
            var storage = player.storage.gl_lianjie;
            if (storage) {
              for (let i = 0; i < storage.length; i++) {
                count += get.gl_nature(storage[i]).defense;
              }
              count = count / (storage.length + 1);
            }
            return num < game.checkMod(player, count, 'gl_defense', player);
          },
          forced: true,
          content() {
            var num = Math.ceil(trigger.num / 2);
            player.changeHujia(num);
            player.popup('格挡', 'soil');
          }
        };
        //再动判定
        if (!game.gl_speed) {
          lib.skill._gl_magic = {
            trigger: {
              player: 'phaseAfter'
            },
            lastDo: true,
            filter(event, player) {
              if (event.skill) return false;
              var num = Math.random() * 100;
              var count = get.gl_nature(player.name).magic;
              var storage = player.storage.gl_lianjie;
              if (storage) {
                for (let i = 0; i < storage.length; i++) {
                  count += get.gl_nature(storage[i]).magic;
                }
                count = count / (storage.length + 1);
              }
              return num < game.checkMod(player, count, 'gl_magic', player);
            },
            _priority: -100001,
            forced: true,
            content() {
              player.phase('nodelay');
              player.popup('再动', 'key');
              game.log(player, '的魔力充盈全身');
            }
          };
        }
      }
      //真尼玛难搞的筛选角色
      ui.create.gl_lianjie = function (list) {
        var dialog;
        var node = ui.create.div('.caption.pointerspan');
        if (get.is.phoneLayout()) {
          node.style.fontSize = '30px';
        }
        var namecapt = [];
        var getCapt = function (str) {
          var capt;
          if (str.indexOf('_') == -1) {
            capt = str[0];
          } else {
            capt = str[str.lastIndexOf('_') + 1];
          }
          capt = capt.toLowerCase();
          if (!/[a-z]/i.test(capt)) {
            capt = '自定义';
          }
          return capt;
        };
        var groups = [];
        for (let i = 0; i < list.length; i++) {
          if (!lib.character[list[i]]) continue;
          var capt = getCapt(list[i]);
          namecapt.add(capt);
          if (get.is.double(list[i])) {
            groups.add('double');
          } else {
            groups.add(lib.character[list[i]][1]);
          }
        }
        groups.sort(lib.sort.group);
        namecapt.sort(function (a, b) {
          return a > b ? 1 : -1;
        });
        namecapt.remove('自定义');
        namecapt.push('newline');
        namecapt.push('快捷');
        namecapt.push('英雄');
        var newlined = false;
        var newlined2;
        var packsource;
        var clickCapt = function (e) {
          if (_status.dragged) return;
          if (this.alphabet) {
            if (this.classList.contains('thundertext')) {
              dialog.currentcapt = null;
              dialog.currentcaptnode = null;
              this.classList.remove('thundertext');
              if (this.touchlink) {
                this.touchlink.classList.remove('active');
              }
              for (let i = 0; i < dialog.buttons.length; i++) {
                if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
                  dialog.buttons[i].classList.add('nodisplay');
                } else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                  dialog.buttons[i].classList.add('nodisplay');
                } else {
                  dialog.buttons[i].classList.remove('nodisplay');
                }
              }
            } else {
              if (dialog.currentcaptnode) {
                dialog.currentcaptnode.classList.remove('thundertext');
                if (dialog.currentcaptnode.touchlink) {
                  dialog.currentcaptnode.touchlink.classList.remove('active');
                }
              }
              dialog.currentcapt = this.link;
              dialog.currentcaptnode = this;
              this.classList.add('thundertext');
              if (this.touchlink) {
                this.touchlink.classList.add('active');
              }
              for (let i = 0; i < dialog.buttons.length; i++) {
                if (dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                  dialog.buttons[i].classList.add('nodisplay');
                } else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                  dialog.buttons[i].classList.add('nodisplay');
                } else if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
                  dialog.buttons[i].classList.add('nodisplay');
                } else {
                  dialog.buttons[i].classList.remove('nodisplay');
                }
              }
            }
          } else {
            if (newlined2) {
              newlined2.style.display = 'none';
              if (!packsource.onlypack) {
                packsource.classList.remove('thundertext');
                if (!get.is.phoneLayout() || !lib.config.filternode_button) {
                  packsource.innerHTML = '武将包';
                }
              }
            }
            if (this.classList.contains('thundertext')) {
              dialog.currentcapt2 = null;
              dialog.currentcaptnode2 = null;
              this.classList.remove('thundertext');
              if (this.touchlink) {
                this.touchlink.classList.remove('active');
              }
              for (let i = 0; i < dialog.buttons.length; i++) {
                if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
                  dialog.buttons[i].classList.add('nodisplay');
                } else if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                  dialog.buttons[i].classList.add('nodisplay');
                } else {
                  dialog.buttons[i].classList.remove('nodisplay');
                }
              }
            } else {
              if (dialog.currentcaptnode2) {
                dialog.currentcaptnode2.classList.remove('thundertext');
                if (dialog.currentcaptnode2.touchlink) {
                  dialog.currentcaptnode2.touchlink.classList.remove('active');
                }
              }
              dialog.currentcapt2 = this.link;
              dialog.currentcaptnode2 = this;
              this.classList.add('thundertext');
              if (this.touchlink) {
                this.touchlink.classList.add('active');
              } else if (this.parentNode == newlined2) {
                packsource.innerHTML = this.innerHTML;
                packsource.classList.add('thundertext');
              }
              for (let i = 0; i < dialog.buttons.length; i++) {
                if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                  dialog.buttons[i].classList.add('nodisplay');
                } else if (dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                  dialog.buttons[i].classList.add('nodisplay');
                } else if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
                  dialog.buttons[i].classList.add('nodisplay');
                } else {
                  if (dialog.buttons[i].activate) {
                    dialog.buttons[i].activate();
                  }
                  dialog.buttons[i].classList.remove('nodisplay');
                }
              }
            }
          }
          if (dialog.seperate) {
            for (let i = 0; i < dialog.seperate.length; i++) {
              if (!dialog.seperate[i].nextSibling.querySelector('.button:not(.nodisplay)')) {
                dialog.seperate[i].style.display = 'none';
                dialog.seperate[i].nextSibling.style.display = 'none';
              } else {
                dialog.seperate[i].style.display = '';
                dialog.seperate[i].nextSibling.style.display = '';
              }
            }
          }
          if (filternode) {
            if (filternode.querySelector('.active')) {
              packsource.classList.add('thundertext');
            } else {
              packsource.classList.remove('thundertext');
            }
          }
          if (e) e.stopPropagation();
        };
        for (let i = 0; i < namecapt.length; i++) {
          if (namecapt[i] == 'newline') {
            newlined = document.createElement('div');
            newlined.style.marginTop = '5px';
            newlined.style.display = 'block';
            if (get.is.phoneLayout()) {
              newlined.style.fontSize = '32px';
            } else {
              newlined.style.fontSize = '22px';
            }
            newlined.style.textAlign = 'center';
            node.appendChild(newlined);
          } else if (newlined) {
            var span = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius');
            span.style.margin = '3px';
            span.style.width = 'auto';
            span.innerHTML = ' ' + namecapt[i].toUpperCase() + ' ';
            span.link = namecapt[i];
            span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
            newlined.appendChild(span);
            node[namecapt[i]] = span;
          } else {
            var span = document.createElement('span');
            span.innerHTML = ' ' + namecapt[i].toUpperCase() + ' ';
            span.link = namecapt[i];
            span.alphabet = true;
            span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
            node.appendChild(span);
          }
        }
        var span = document.createElement('span');
        newlined.appendChild(span);
        span.style.margin = '8px';
        var clickGroup = function () {
          if (_status.dragged) return;
          var node = this,
            link = this.link;
          if (node.classList.contains('thundertext')) {
            dialog.currentgroup = null;
            dialog.currentgroupnode = null;
            node.classList.remove('thundertext');
            for (let i = 0; i < dialog.buttons.length; i++) {
              if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                dialog.buttons[i].classList.add('nodisplay');
              } else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                dialog.buttons[i].classList.add('nodisplay');
              } else {
                dialog.buttons[i].classList.remove('nodisplay');
              }
            }
          } else {
            if (dialog.currentgroupnode) {
              dialog.currentgroupnode.classList.remove('thundertext');
            }
            dialog.currentgroup = link;
            dialog.currentgroupnode = node;
            node.classList.add('thundertext');
            for (let i = 0; i < dialog.buttons.length; i++) {
              if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                dialog.buttons[i].classList.add('nodisplay');
              } else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                dialog.buttons[i].classList.add('nodisplay');
              } else if (dialog.currentgroup == 'double') {
                if (dialog.buttons[i]._changeGroup || dialog.buttons[i].group == 'ye') dialog.buttons[i].classList.remove('nodisplay'); else
                  dialog.buttons[i].classList.add('nodisplay');
              } else {
                if (dialog.buttons[i]._changeGroup || dialog.buttons[i].group == 'ye' || dialog.buttons[i].group != dialog.currentgroup) {
                  dialog.buttons[i].classList.add('nodisplay');
                } else {
                  dialog.buttons[i].classList.remove('nodisplay');
                }
              }
            }
          }
        };
        for (let i = 0; i < groups.length; i++) {
          var span = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin');
          span.style.margin = '3px';
          newlined.appendChild(span);
          span.innerHTML = get.translation(groups[i]);
          span.link = groups[i];
          span.dataset.nature = get.groupnature(groups[i]);
          span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickGroup);
        }
        var span = document.createElement('span');
        newlined.appendChild(span);
        span.style.margin = '8px';
        packsource = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin');
        packsource.style.margin = '3px';
        newlined.appendChild(packsource);
        var filternode = null;
        var clickCaptNode = function (e) {
          delete _status.filterCharacter;
          ui.window.classList.remove('shortcutpaused');
          filternode.delete();
          filternode.classList.remove('shown');
          clickCapt.call(this.link, e);
        };
        if (get.is.phoneLayout() && lib.config.filternode_button) {
          newlined.style.marginTop = '';
          packsource.innerHTML = '筛选';
          filternode = ui.create.div('.popup-container.filter-character.modenopause');
          ui.create.div(filternode);
          filternode.listen(function (e) {
            if (this.classList.contains('removing')) return;
            delete _status.filterCharacter;
            ui.window.classList.remove('shortcutpaused');
            this.delete();
            this.classList.remove('shown');
            e.stopPropagation();
          });
          for (let i = 0; i < node.childElementCount; i++) {
            if (node.childNodes[i].tagName.toLowerCase() == 'span') {
              node.childNodes[i].style.display = 'none';
              node.childNodes[i].touchlink = ui.create.div(filternode.firstChild, clickCaptNode, '.menubutton.large.capt', node.childNodes[i].innerHTML);
              node.childNodes[i].touchlink.link = node.childNodes[i];
            }
          }
          ui.create.node('br', filternode.firstChild);
        } else {
          packsource.innerHTML = '武将包';
        }
        newlined2 = document.createElement('div');
        newlined2.style.marginTop = '5px';
        newlined2.style.display = 'none';
        newlined2.style.fontFamily = 'xinwei';
        newlined2.classList.add('pointernode');
        if (get.is.phoneLayout()) {
          newlined2.style.fontSize = '32px';
        } else {
          newlined2.style.fontSize = '22px';
        }
        newlined2.style.textAlign = 'center';
        node.appendChild(newlined2);
        packsource.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
          if (packsource.onlypack) return;
          if (_status.dragged) return;
          if (get.is.phoneLayout() && lib.config.filternode_button && filternode) {
            _status.filterCharacter = true;
            ui.window.classList.add('shortcutpaused');
            ui.window.appendChild(filternode);
            ui.refresh(filternode);
            filternode.classList.add('shown');
            var dh = filternode.offsetHeight - filternode.firstChild.offsetHeight;
            if (dh > 0) {
              filternode.firstChild.style.top = dh / 2 + 'px';
            } else {
              filternode.firstChild.style.top = '';
            }
          } else {
            if (newlined2.style.display == 'none') {
              newlined2.style.display = 'block';
            } else {
              newlined2.style.display = 'none';
            }
          }
        });
        var packlist = [];
        for (let i = 0; i < lib.config.all.characters.length; i++) {
          if (!lib.config.characters.includes(lib.config.all.characters[i])) continue;
          packlist.push(lib.config.all.characters[i]);
        }
        for (var i in lib.characterPack) {
          if (!lib.config.all.characters.includes(i)) {
            packlist.push(i);
          }
        }
        packlist.remove('gl_create');
        packlist.remove('gelin');
        for (let i = 0; i < packlist.length; i++) {
          var span = document.createElement('div');
          span.style.display = 'inline-block';
          span.style.width = 'auto';
          span.style.margin = '5px';
          if (get.is.phoneLayout()) {
            span.style.fontSize = '32px';
          } else {
            span.style.fontSize = '22px';
          }
          span.innerHTML = lib.translate[packlist[i] + '_character_config'];
          span.link = packlist[i];
          span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
          newlined2.appendChild(span);
          if (filternode) {
            span.touchlink = ui.create.div(filternode.firstChild, clickCaptNode, '.menubutton.large', span.innerHTML);
            span.touchlink.link = span;
          }
        }
        list.sort(lib.sort.character);
        dialog = ui.create.dialog('hidden');
        dialog.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
          _status.clicked2 = true;
        });
        dialog.getCurrentCapt = function (link, capt, noalph) {
          var currentcapt = noalph ? this.currentcapt2 : this.currentcapt;
          if (currentcapt == '英雄') {
            if (link.indexOf('gl_') == '0') return capt;
            return null;
          }
          if (currentcapt == '快捷') {
            if (!lib.config.gelin.keen) return null;
            if (lib.config.gelin.keen.includes(link)) return capt;
            return null;
          }
          if (lib.characterPack[currentcapt]) {
            if (lib.characterPack[currentcapt][link]) {
              return capt;
            }
            return null;
          }
          return this.currentcapt;
        };
        dialog.add(node);
        dialog.add([list, 'character']);
        dialog.add(ui.create.div('.placeholder'));
        for (let i = 0; i < dialog.buttons.length; i++) {
          dialog.buttons[i].group = lib.character[dialog.buttons[i].link][1];
          dialog.buttons[i].capt = getCapt(dialog.buttons[i].link);
        }
        clickCapt.call(node.英雄);
        //照抄本体懒得改
        let container = dialog.querySelector('.content-container>.content');
        let Searcher = ui.create.div('.searcher.caption');
        let input = document.createElement('input');
        input.style.textAlign = 'center';
        input.style.border = 'solid 2px #294510';
        input.style.borderRadius = '6px';
        input.style.fontWeight = 'bold';
        input.style.fontSize = '21px';
        let find = ui.create.button(['find', '搜索'], 'tdnodes');
        find.style.display = 'inline';
        let clickfind = function (e) {
          e.stopPropagation();
          let value = input.value;
          if (value == '') {
            game.alert('搜索不能为空');
            input.focus();
            return;
          }
          let list = [];
          for (let btn of dialog.buttons) {
            if (new RegExp(value, 'g').test(get.translation(btn.link))) {
              btn.classList.remove('nodisplay');
            } else {
              btn.classList.add('nodisplay');
            }
          }
        };
        input.addEventListener('keyup', (e) => {
          if (e.key == 'Enter') clickfind(e);
        });
        find.listen(clickfind);
        Searcher.appendChild(input);
        Searcher.appendChild(find);
        container.prepend(Searcher);
        return dialog;
      };
      game.gl_lianjie = {};
      game.gl_gain = function (name) {
        if (lib.config.gelin.lianjie.includes(name)) return false;
        lib.config.gelin.lianjie.push(name);
        game.saveConfig('gelin', lib.config.gelin);
      };
      game.gl_gainSkin = function (name, key) {
        if (get.gl_spSkin(name, key)) return false;
        lib.config.gelin.spSkin[name].push(key);
        game.saveConfig('gelin', lib.config.gelin);
      };
      game.gl_setData = function (str) {
        if (lib.config.gelin.data.includes(str)) return false;
        lib.config.gelin.data.push(str);
        game.saveConfig('gelin', lib.config.gelin);
        return str;
      };
      game.gl_deleteData = function (str) {
        if (!lib.config.gelin.data.includes(str)) return false;
        lib.config.gelin.data.remove(str);
        game.saveConfig('gelin', lib.config.gelin);
        return str;
      };
      if (lib.config.gelin.lianjie.length > 50) {
        game.gl_setData('leina');
      }
      //处理初始化信息
      if (!lib.element.player.inits) {
        lib.element.player.inits = [];
      }
      lib.element.player.inits.add(function (player) {
        var name1, name2;
        if ((name1 || name2) && get.mode() != 'xiangqv') {
          player.init(name1 || player.name1, name2 || player.name2);
          return;
        } //QQQ
        //网络皮肤
        if (lib.skinOL) {
          if (lib.skinOL[player.name1]) {
            player.node.avatar.style.backgroundImage = lib.skinOL[player.name1];
          }
          if (lib.skinOL[player.name2]) {
            player.node.avatar2.style.backgroundImage = lib.skinOL[player.name2];
          }
        }
        //语音泛用化
        if (!player._hookTrigger) {
          player._hookTrigger = [];
        }
        player._hookTrigger.add('gl_audio');
      });
      get.gl_spSkin = function (name, key) {
        if (lib.gl_spSkin[name]) return false;
        if (!lib.config.gelin.spSkin) lib.config.gelin.spSkin = {};
        if (!lib.config.gelin.spSkin[name]) lib.config.gelin.spSkin[name] = [];
        if (lib.config.gelin.spSkin[name].includes(key)) return true;
        return false;
      };
      game.gl_changeSkin = function (name, link) {
        if (link) {
          lib.config.skin[name] = link;
        } else {
          delete lib.config.skin[name];
        }
        game.saveConfig('skin', lib.config.skin);
        var skin;
        for (let i = 0; i < lib.character[name][4].length; i++) {
          if (lib.character[name][4][i].indexOf('ext:') == 0) {
            skin = lib.character[name][4][i];
            lib.character[name][4].splice(i--, 1);
          }
        }
        if (skin) {
          if (lib.config.skin[name]) {
            lib.character[name][4].push(skin.split('/')[0] + '/skin/' + name + '/' + lib.config.skin[name] + '.jpg');
          }
          lib.character[name][4].push(skin);
        }
        var nodes = game.players.concat(game.dead);
        for (const i of nodes) {
          if (i.name == name || i.name1 == name || i.storage.gl_lianjie && i.storage.gl_lianjie[0] == name) {
            i.node.avatar.setBackground(name, 'character');
          }
          if (i.name2 == name || i.storage.gl_lianjie && i.storage.gl_lianjie[1] == name) {
            i.node.avatar2.setBackground(name, 'character');
          }
        }
        nodes = document.querySelectorAll('.character');
        for (const i of nodes) {
          if (i.link == name) {
            if (i.refresh) i.refresh(i, name);
          }
        }
      };
      game.gl_changeSpskin = function (name, key) {
        var skin = lib.gl_spSkin[name];
        var num = lib.config.skin[name + '_' + key] || 1;
        if (!skin) return;
        var nodes = game.players.concat(game.dead);
        for (const i of nodes) {
          if (i.node.avatar.gl_key == key && (i.name == name || i.name1 == name || i.storage.gl_lianjie && i.storage.gl_lianjie[0] == name)) {
            i.node.avatar.setBackgroundImage('extension/格林笔记/skin/' + name + '/' + key + num + '.jpg');
          }
          if (i.node.avatar2.gl_key == key && (i.name2 == name || i.storage.gl_lianjie && i.storage.gl_lianjie[1] == name)) {
            i.node.avatar.setBackgroundImage('extension/格林笔记/skin/' + name + '/' + key + num + '.jpg');
          }
        }
        nodes = document.querySelectorAll('.character');
        for (const i of nodes) {
          if (i.gl_key == key && i.link == name) {
            i.setBackgroundImage('extension/格林笔记/skin/' + name + '/' + key + num + '.jpg');
          }
        }
      };
      game.gl_initSkin = function (name) {
        var list = lib.gl_spSkin.init[name];
        if (!list) return;
        var character = lib.character[name];
        character[0] = list.sex;
        character[1] = list.group;
        character[2] = list.hp;
        character[3].length = 0;
        character[3].addArray(list.skills);
      };
      //调律者技能
      lib.gl_skill = {
        zaisheng: {
          name: '再生',
          type: 'replace',
          count: 3,
          info: '回复1点体力值',
          content() {
            player.recover();
          }
        },
        tuji: {
          name: '突击',
          type: 'replace',
          count: 5,
          info: '视为使用一张【杀】',
          content() {
            player.chooseUseTarget('sha', true);
          }
        },
        xvzhangshengshi: {
          name: '虚张声势',
          type: 'retreat',
          count: 3,
          info: '除你之外全场所有角色摸3张牌并陷入混乱直至回合结束',
          content() {
            for (const i of game.players) {
              if (i != player) {
                i.addTempSkill('mad');
                i.draw(3);
              }
            }
          }
        },
        zhanzhengbilei: {
          name: '战争壁垒',
          type: 'retreat',
          count: 5,
          info: '装备一张防具牌',
          content() {
            var card = get.cardPile(function (card) {
              return get.subtype('equip2');
            });
            if (card) {
              player.equip(card);
            }
          }
        }
      };
      if (lib.config.gelin.qieti && config.skill) {
        lib.gl_skilling = JSON.parse(JSON.stringify(lib.config.gelin.qieti));
      } else {
        lib.gl_skilling = {};
      }
      if (!lib.config.gelin.amend) lib.config.gelin.amend = {};
      lib.gl_amend = JSON.parse(JSON.stringify(lib.config.gelin.amend));
      //退场机制
      game.gl_qieti = function (list, player) {
        if (!list) return;
        var next = game.createEvent('gl_qieti');
        next.player = player;
        next.list = list.slice(0);
        next.type = 'replace';
        next.setContent('gl_qieti');
      };
      game.gl_cheli = function (list, player) {
        if (!list) return;
        var next = game.createEvent('gl_cheli');
        next.player = player;
        next.list = list.slice(0);
        next.type = 'retreat';
        next.setContent('gl_qieti');
      };
      lib.element.content.gl_qieti = function () {
        if (event.list.length) {
          var name = event.list.shift();
          var skill = lib.gl_skilling;
          if (skill[name]) {
            for (let i = 0; i < skill[name].length; i++) {
              var link = skill[name][i];
              if (lib.gl_skill[link][event.type]) {
                var next = game.createEvent(link, false);
                next.player = player;
                game.log(player, '发动了调律者技能', '#g【' + lib.gl_skill[link].name + '】');
                if (player.gl_mp >= lib.gl_skill[link].price) {
                  player.gl_changeMp(-lib.gl_skill[link].price);
                  next.setContent(lib.gl_skill[link][event.type]);
                } else {
                  next.setContent(lib.gl_skill[link].fail);
                }
              }
            }
          }
          event.redo();
        }
      };
      //对话弹窗
      game.gl_createDailog = function () {
        var page = ui.create.div('.scedi.gl_scedi', ui.window);
        var str, list, click, bool;
        for (let i = 0; i < arguments.length; i++) {
          if (Array.isArray(arguments[i])) {
            list = arguments[i];
          } else if (typeof arguments[i] == 'function') {
            click = arguments[i];
          } else if (typeof arguments[i] == 'boolean') {
            bool = arguments[i];
          } else if (typeof arguments[i] == 'string') {
            str = arguments[i];
          }
        }
        if (bool !== false) {
          var leina = document.createElement('img');
          var name = lib.config.extension_格林笔记_heroine || 'leina';
          leina.setAttribute('src', 'extension/格林笔记/image/' + name + '.png');
          leina.className = 'gl_leina';
          page.appendChild(leina);
        }
        var dialog = ui.create.div('.gl_duihua', page);
        dialog.innerHTML = str;
        var select = ui.create.div('.gl_switch', page);
        if (!list) list = ['确定'];
        for (let i = 0; i < list.length; i++) {
          var node = ui.create.div(select);
          node.onclick = function () {
            ui.window.removeChild(page);
            if (typeof click == 'function') click(this.link);
          };
          node.link = list[i];
          node.innerHTML = get.translation(list[i]);
        }
        ui.window.appendChild(page);
      };
      lib.element.card.originalMoveDelete = function (player) {
        this.fixed = true;
        if (!this._listeningEnd || this._transitionEnded) {
          var dx, dy;
          if (this.classList.contains('center')) {
            var nx = [50, -52];
            var ny = [50, -52];
            nx = nx[0] * ui.arena.offsetWidth / 100 + nx[1];
            ny = ny[0] * ui.arena.offsetHeight / 100 + ny[1];
            dx = player.getLeft() + player.offsetWidth / 2 - 52 - nx;
            dy = player.getTop() + player.offsetHeight / 2 - 52 - ny;
          } else {
            this.style.left = this.offsetLeft + 'px';
            this.style.top = this.offsetTop + 'px';
            dx = player.getLeft() + player.offsetWidth / 2 - 52 - this.offsetLeft;
            dy = player.getTop() + player.offsetHeight / 2 - 52 - this.offsetTop;
          }
          if (get.is.mobileMe(player)) {
            dx += get.cardOffset();
            if (ui.arena.classList.contains('oblongcard')) {
              dy -= 16;
            }
          }
          if (this.style.transform && this.style.transform != 'none' && this.style.transform.indexOf('translate') == -1) {
            this.style.transform += ' translate(' + dx + 'px,' + dy + 'px)';
          } else {
            this.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
          }
          var that = this;
          setTimeout(function () {
            that.delete();
          }, 200);
        } else {
          this._onEndMoveDelete = player;
        }
      };
      //滚动演示
      game.gl_broadcast = function () {
        var data, callback, src, side;
        for (let i = 0; i < arguments.length; i++) {
          if (Array.isArray(arguments[i])) {
            data = arguments[i];
          } else if (typeof arguments[i] == 'function') {
            callback = arguments[i];
          } else if (arguments[i] == 'right') {
            side = 'right';
          } else if (arguments[i] == 'left') {
            side = 'left';
          } else if (typeof arguments[i] == 'string') {
            src = arguments[i];
          }
        }
        if (!data) return;
        var background = ui.create.div('.gl_cg', document.body);
        background.setBackgroundImage(src || 'extension/格林笔记/image/title.jpg');
        var node = ui.create.div('.gl_broadcast', background);
        for (const i of data) {
          ui.create.div('.gl_broadcast', node).innerHTML = i;
        }
        if (side == 'right') {
          node.style.left = 'auto';
          node.style.right = '0';
        }
        if (side == 'left') {
          node.style.left = '0';
          node.style.right = 'auto';
        }
        var num = node.offsetHeight + background.offsetHeight + 100;
        node.style.transform = 'translateY(-' + num + 'px)';
        node.style.transition = 'all ' + num / 60 + 's linear';
        node.addEventListener('webkitTransitionEnd', function () {
          background.delete();
          if (typeof callback == 'function') callback(this.link);
        });
        if (side == 'right') {
          background.style.backgroundPosition = '100% 0';
        }
        if (side == 'left') {
          background.style.backgroundPosition = '0 0';
        }
        return background;
      };
      game.gl_getQieti = function (name) {
        var list = lib.config.gelin.qieti;
        if (!list[name]) list[name] = {};
        return list[name];
      };
      get.gl_data = function (str) {
        return lib.config.gelin.data.includes(str);
      };
      get.gl_specialSkill = function (name) {
        var list = lib.config.gelin.specialSkill;
        if (!list[name]) list[name] = [];
        return list[name];
      };
      //演示库
      lib.gl_broadcast = {
        童话世界: {
          side: 'left',
          data: ['吾不曾有过时间的概念', '那便是很久很久以前罢', '一只小鸟问吾', '<您知道童话世界在哪里吗？>', '吾无心理会这个小家伙', '它在吾的头顶盘旋过后又向远方飞去', '又不知过去多久', '那个小家伙又飞到吾的头顶', '它变得大概有些不同？', '一个小家伙不值得吾留心', '<请..请问您知道童话世界在哪吗？>', '又是曾经的那个问题', '不过刚问完它便从空中坠落', '那些红色的液体是什么？', '吾这才想起并非所有的生命都如吾一般', '花朵凋谢', '<我听说那儿非常的美丽>', '<是个没有痛苦、疾病与战争的地方>', '吾手中的笔被这个小家伙的话语束缚', '微风吹起吾手中尚着墨的白纸', '落在那个小家伙的身上', '迷雾亦伴随吾的迷茫升起......']
        },
        命运启示: {
          side: 'right',
          src: 'extension/格林笔记/image/mingyunqishi.jpg',
          data: ['在这个世界上', '每个人手中都有着一本命运之书', '那是全知全能的说书人所赐下的恩惠', '书上记录着持有者的出生到死亡', '所有人都遵循着命运之书生活', '......', '但我的命运之书为何空无一字呢？', '我诞生的意义是什么？', '我存在的命运又是什么？']
        }
      };
      //开启本家势力联结
      var lianjieGroup = {
        gl_famu: 'gl:wu:wei',
        gl_aida: 'gl:wei:shu',
        gl_ailuoweisi: 'gl:shu:wu',
        gl_leina: 'gl:shen:key',
        gl_aileina: 'gl:key:shen',
        gl_sade: 'gl:jin:qun',
        gl_kali: 'gl:qun:jin'
      };
      for (var i in lianjieGroup) {
        var nature = get.gl_nature(i);
        var count = 200;
        for (var j in nature) {
          count -= nature[j];
        }
        if (count == 0) {
          lib.character[i][4].push(lianjieGroup[i]);
        }
      }
    },
    precontent() {
      //—————————————————————————————————————————————————————————————————————————————boss模式相关函数,目前改用代理来排序
      const boss = function () {
        lib.skill._sort = {
          trigger: {
            player: ['phaseEnd']
          },
          silent: true,
          forceDie: true,
          forceOut: true,
          filter() {
            game.sort();
          },
          content() { }
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
          } //更换game.me之后第一时间排序
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
          }
        });
        game.dead = new Proxy([], {
          set(target, property, value) {
            const result = Reflect.set(target, property, value);
            if (property === 'length') {
              game.sort();
            }
            return result;
          }
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
            cards: []
          },
          gaintag: [],
          forResult() { }
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
            if (Object.hasOwn(obj, key)) {
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
      gelinPack(lib, game, ui, get, ai, _status, this.name);
      get.gl_save = function (data) {
        if (!data) data = {};
        var obj = {
          lianjie: [],
          data: ['gl_jingyue', 'gl_luyisha', 'gl_dimu', 'gl_shuiguai', 'gl_ailixiya', 'gl_taao', 'gl_shiyin', 'gl_aikesi', 'gl_famu', 'gl_aida', 'gl_ailuoweisi', 'gl_sade', 'gl_aileina', 'gl_luoji', 'gl_kali'],
          count: 0,
          wujin: 1,
          nature: {},
          keen: [],
          spSkin: {},
          amend: {},
          specialSkill: {
            gl_leina: ['gl_tiaolv'],
            gl_famu: ['gl_tanbao'],
            gl_aida: ['gl_shouhu'],
            gl_ailuoweisi: ['gl_congjian'],
            gl_sade: ['gl_qianxi'],
            gl_aileina: ['gl_zaibian'],
            gl_kali: ['gl_fuyin']
          },
          qieti: {},
          level: 1,
          Maxlevel: 1
        };
        if (lib.config.extension_格林笔记_chunjing == '万象之主') {
          obj.level = 2;
          obj.Maxlevel = 2;
        } else {
          for (var i in data) {
            if (['data', 'character', 'xiangqv'].includes(i)) {
              obj.data.addArray(data[i]);
            } else {
              obj[i] = data[i];
            }
          }
        }
        return obj;
      };
      if (!lib.config.gelin) {
        lib.init.json(
          'extension/格林笔记/save',
          function (e) {
            game.gl_save = e;
          },
          function () {
            game.gl_save = false;
          }
        );
      }
      lib.config.gelin = get.gl_save(lib.config.gelin);
      window.gl_load = function (obj) {
        obj(lib, game, ui, get, ai, _status);
      };
      lib.init.css('extension/格林笔记', 'gelin');
      lib.init.js('extension/格林笔记', 'create');
      lib.init.js('extension/格林笔记', 'character');
      lib.init.js('extension/格林笔记', 'skill');
      lib.init.js('extension/格林笔记/card', 'card');
      lib.init.js('extension/格林笔记/voice', 'voice');
      //给予抗性
      lib.gl_element = {};
      for (const i of Object.keys(lib.element.player)) {
        lib.gl_element[i] = lib.element.player[i];
      }
      window.gl_load(gelinMap);
    },
    help: {
      格林笔记: '<div style="margin:10px">名词释义</div><ul style="margin-top:0"><li>沉默之雾<br>围绕在想区周围的迷雾,无法驱散.如果没有引导之证指引方向,很容易迷失其中.<li>诗晶石<br>造物主们创造世界时与世界伴生的产物,是想区力量的源泉.<li>引导之证<br>造物主的信物,能够和诗晶石、原典产生共鸣迸发出神奇的力量.<li>造物主/说书人<br>对传说的神明的代称,无人知晓它们的名字.据说是它们在沉默之雾中开辟了作为生存空间的想区.<li>命运之书<br>每个人出生开始就存在于意识之海中的神秘之书,上面记录着这个人的一生.与持有者紧密相连,书毁人死,人灭书散.<li>原典<br>命运之书的原型,每当代理者逝去时,都会去寻找新的代理者开始新的轮回.<li>空白之书<br>空无一字的命运之书,被视作<灾厄>的化身、被造物主遗弃的可怜之人.<li>想区<br>由造物主开辟,遵循某种秩序不断轮回原典的故事,当故事严重背离原典时会崩溃,有一定的自我修复能力,是人们赖以生存的家园.<li>混沌<br>促使想区崩溃的扭曲之物.惧怕诗晶石的力量,无法在正常情况下影响想区.<li>混沌之仆<br>想区的居民命运之书被混沌力量所侵扰的产物,能够被引导之证的力量驱散.<li>混沌之源<br>想区的居民主动寻求混沌力量的产物,会严重削弱诗晶石的力量,导致混沌侵入想区.</ul><div style="margin:10px">技能说明</div><ul style="margin-top:0"><li>调律者技能<br>拥有技能联结的角色,进行联结后可以使用的特殊技能.<li>魔力<br>用于释放调律者技能的消耗点数;初始值为6,上限为10.每轮游戏开始或击杀其他角色后均会自动回复一点.<li>切替技能<br>当使用联结的效果和持有角色进行联结时,会自动释放效果,若使用时魔力不足则会执行惩罚效果.<li>撤离技能<br>当使用联结的效果和持有角色解除联结时,会自动释放效果,若使用时魔力不足则会执行惩罚效果.<li>被动技能<br>对联结状态持有角色的属性进行调整,不会消耗魔力.<li>主动技能<br>联结状态持有角色出牌阶段消耗魔力主动释放效果,魔力不足时无法使用.<li>武力<br>影响暴击率每1点提高1%的暴击率.<li>韧性<br>影响格挡率每1点提高1%的格挡率.<li>祝福<br>影响赐福率每1点提高1%的赐福率.<li>魔性<br>影响再动率每1点提高1%的再动率.<li>速度<br>决定行动条的增长速度;最高为10,最低为1,默认值为3.<li>行动条<br>当补充为最大值时,才能进行行动,只有在出现影响速度的因素时,才会显示.<li>阵法技<br>只有处于<阵法队列>中才能生效,同一阵法队列中的所有角色,共享阵法技的阵法效果.<li>武装技<br>出牌阶段仅一次可以主动武装化,武装化的情况下武装技失效,武装进入弃牌堆时移出游戏并回复武装技.<li>侍从技<br>侍从技持有者会获得1名对应的随从,随从阵亡后,侍从技失效;受到伤害前,本体与随从可以进行交替.<li>条件技<br>必须严格遵守技能的发动要求来把技能发动,否则将会发动失败,此时技能不计入发动.</ul>'
    },
    config: {
      jieshao: {
        name: '观看演示',
        clear: true,
        nopointer: true,
        item: {},
        visualBar(page, item, create) {
          if (page.created) {
            return;
          }
          page.created = true;
          page.classList.add('.menu-buttons');
          var list = lib.gl_broadcast;
          var callback = function () {
            game.gl_broadcast(this.link.data, this.link.src, this.link.side);
          };
          for (var i in list) {
            var node = ui.create.div('.menubutton', i, page, callback);
            node.link = list[i];
          }
        },
        visualMenu() { },
        onclick() { }
      }, //QQQ
      book: {
        name: '<img src="extension/格林笔记/book.png"/>',
        clear: true,
        onclick() {
          game.gl_openBook();
        }
      },
      chunjing: {
        name: '昵称',
        input: true,
        init: '无名作家',
        forced: true,
        onblur() {
          if (lib.config.extension_格林笔记_chunjing == '万象之主') {
            alert('你已开启纯净模式,无法再次进行修改!');
            this.innerHTML = lib.config.extension_格林笔记_chunjing;
            return;
          }
          if (this.innerHTML == '万象之主') {
            if (confirm('注意!你正在尝试开启纯净模式,确认继续吗？(一但开启将不可撤销,你将无法体验格林笔记的完整内容!)')) {
              game.saveConfig('extension_格林笔记_chunjing', this.innerHTML);
              game.reload();
            } else {
              this.innerHTML = lib.config.extension_格林笔记_chunjing;
            }
          } else {
            game.saveConfig('extension_格林笔记_chunjing', this.innerHTML);
          }
        }
      },
      heroine: {
        name: '看板娘',
        init: 'leina',
        item: {
          leina: '蕾娜',
          aileina: '艾蕾娜',
          kali: '卡莉',
          sade: '萨德',
          famu: '法姆'
        },
        onclick(item) {
          game.saveConfig('extension_格林笔记_heroine', item);
        }
      },
      pege: {
        name: '替换武将信息卡',
        init: false
      },
      skill: {
        name: '启动调律者技能',
        init: false
      },
      speed: {
        name: '竞速模式',
        init: false
      },
      nature: {
        name: '启动属性加成',
        init: false
      },
      gouzhu: {
        name: '启动卡牌构筑',
        init: false
      },
      load: {
        name: '载入存档',
        clear: true,
        onclick() {
          var node = this;
          game.gl_createDailog('确定载入本地存档覆盖你的游戏进度？(无法撤销)', ['确定', '取消'], function (bool) {
            if (bool == '确定') {
              node.innerHTML = '正在载入......';
              lib.init.json(
                'extension/格林笔记/save',
                function (e) {
                  game.saveConfig('gelin', e);
                  game.gl_createDailog('载入成功,即将重启游戏!', function () {
                    game.reload();
                  });
                },
                function () {
                  game.gl_createDailog('载入失败,请检查你的本地文件!');
                  node.innerHTML = '载入存档';
                }
              );
            } else {
              game.gl_createDailog('过于频繁的存档和读档可能会导致存档坏死哦!');
            }
          });
        }
      },
      save: {
        name: '导出存档',
        clear: true,
        onclick() {
          var node = this;
          game.gl_createDailog('确定导出存档到本地？', ['确定', '取消'], function (bool) {
            if (bool == '确定') {
              node.innerHTML = '正在导出......';
              var data = JSON.stringify(lib.config.gelin);
              game.writeFile(data, 'extension/格林笔记', 'save', function () {
                lib.init.json(
                  'extension/格林笔记/save',
                  function (e) {
                    game.gl_createDailog('导出成功');
                    node.innerHTML = '导出存档';
                  },
                  function () {
                    game.gl_createDailog('导出失败,请重试!');
                    node.innerHTML = '导出存档';
                  }
                );
              });
            } else {
              game.gl_createDailog('经常备份存档是个好习惯哦!');
            }
          });
        }
      }
    },
    package: extensionInfo
  };
});