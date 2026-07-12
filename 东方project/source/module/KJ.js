KJZR = function (lib, game, ui, get, ai, _status) {
  game.KJimport('extension', function (lib, game, ui, get, ai, _status) {
    return {
      name: '未来科技',
      content(config, pack) {
        //等同于,player.hp=num;不过这是有时机的
        lib.element.player.changeHpTo = function (num) {
          this.changeHp(num - this.hp);
        };
        lib.element.player.changeMaxHpTo = function (num) {
          var next = game.createEvent('changeMaxHpTo', false);
          next.num = Math.abs(num - this.maxHp);
          next.resultNum = num;
          next.player = this;
          next.setContent('changeMaxHpTo');
          return next;
        };
        lib.element.content.changeMaxHpTo = function () {
          player.maxHp = event.resultNum;
          event.trigger('changeMaxHp');
        };
        //刷新添加的sub技能
        game.updateSkill = function (type) {
          function check(skill) {
            //skill是字符串
            var sub = get.info(skill).subSkill;
            for (var i in sub) {
              lib.skill[skill + '_' + i] = lib.skill[skill].subSkill[i];
              var info = get.info(lib.skill[skill + '_' + i]);
              if (info && info.subSkill) check(i);
            }
          }
          if (!type) {
            for (var i in lib.skill) check(i);
          } else {
            if (typeof type === 'string' && lib.skill[type]) {
              var info = get.info(lib.skill[type]);
              if (info && info.subSkill) {
                check(type);
              }
              return false;
            } else if (get.itemtype(type) == 'player') {
              var skills = type.getSkills();
              for (let i = 0; i < skills.length; i++) {
                check(skills[i]);
              }
            }
            return false;
          }
        };
        game.setProperty = function (obj, property, ...attributes) {
          if (!obj || !property) throw '无';
          for (let i = 0; i < attributes.length; i++) {
            if (get.objtype(attributes[i]) === 'object') var attribute = attributes[i];else
            if (typeof attributes[i] === 'boolean') var bool = attributes[i];else
            var num = attributes[i];
          }
          //if(typeof bool==="undefined"&&typeof attribute==="undefined"&&typeof num==="undefined") throw "无";
          if (typeof attribute === 'undefined') attribute = {};
          var pro = Object.getOwnPropertyDescriptor(obj, property);
          if (pro) {
            if (pro.configurable === false) {
              if (pro.writable === false && attribute.writable === true) throw '不可配置可写性';else
              if (pro.writable === false && attribute.value) throw 'value已不可改写';else
              throw '此对象不可配置';
            }
          }
          if (attribute.get || attribute.set) {
            if (attribute.value || typeof attribute.writable !== 'undefined') throw 'get与set,value和writable只能存在一组';
            //alert(num)
            //alert(bool)
            if (typeof num !== 'undefined' || typeof bool !== 'undefined') throw 'get与set,value和writable只能存在一组';
          }
          if (typeof num !== 'undefined') attribute.value = num;
          if (typeof bool !== 'undefined') attribute.configurable = bool;
          if (typeof attribute.writable === 'undefined' && typeof attribute.get === 'undefined' && typeof pro.get === 'undefined' && typeof attribute.set === 'undefined' && typeof pro.set === 'undefined') attribute.writable = true;
          if (typeof attribute.configurable === 'undefined') attribute.configurable = true;
          if (typeof attribute.enumerable === 'undefined') attribute.enumerable = true;
          if (attribute.set || attribute.get) {
            obj['%E7%9C%9F%E6%AD%A3%20%E5%80%BC'] = obj['%E7%9C%9F%E6%AD%A3%20%E5%80%BC'] || {};
            obj['%E7%9C%9F%E6%AD%A3%20%E5%80%BC'][property] = obj[property];
            var nother = attribute.set || function () {}; //另外赋值
            var getter = attribute.get || function () {};
            var setfuc = function (value) {
              var num = nother(value);
              obj['%E7%9C%9F%E6%AD%A3%20%E5%80%BC'] = obj['%E7%9C%9F%E6%AD%A3%20%E5%80%BC'] || {};
              if (typeof num !== 'undefined') obj['%E7%9C%9F%E6%AD%A3%20%E5%80%BC'][property] = num;else
              obj['%E7%9C%9F%E6%AD%A3%20%E5%80%BC'][property] = value;
              //alert(game.me["%E7%9C%9F%E6%AD%A3%20%E5%80%BC"].hp)
            }; //另外赋值
            attribute.set = setfuc;
            attribute.get = function () {
              var num = getter();
              if (num !== undefined) return num;
              return obj['%E7%9C%9F%E6%AD%A3%20%E5%80%BC'][property];
            }; //读取先前的
          }
          //alert(attribute. set.toString());
          Reflect.defineProperty(obj, property, attribute);
          if (get.itemtype(obj) === 'player') obj.update();
          return true;
        };
        //lib.skill._dieLiliAudio.extensionName
        //game.createSkill("dieLiliAudio","东方project");
        //创建扩展死亡、出杀音效
        game.createSkill = function (skillName, ...types) {
          if (skillName.indexOf('_') !== 0) skillName = '_' + skillName;
          if (lib.skill[skillName]) alert(skillName + '已存在!');
          for (let i = 0; i < types.length; i++) {
            if (types[i] === 'die' || types[i] === 'sha') var type = types[i];else
            var extensionName = types[i];
          }
          if (!type) var type = 'die';
          switch (type) {
            case 'die':
              lib.skill[skillName] = {
                trigger: {
                  player: 'dieBegin'
                },
                _priority: -Infinity,
                forced: true,
                extensionName: extensionName,
                content() {
                  'step 0';
                  var exName = lib.skill[event.name].extensionName;
                  var name = get.truename(player);
                  var name2 = player.name2;
                  var tags = lib.character[name][4];
                  if (name2) var tags2 = lib.character[name2][4];
                  if (tags && tags.length) {
                    for (let i = 0; i < tags.length; i++) {
                      if (tags[i].indexOf('dieAudio:') == 0) {
                        var audionum = tags[i].slice(9);
                      }
                    }
                  }
                  if (audionum) {
                    audionum = +audionum;
                    if (audionum > 1) var num = get.rand(1, audionum);else
                    var num = 1;
                    var audioname = name + num;
                    game.playAudio('..', 'extension', exName, audioname);
                  } else {
                    game.playAudio('..', 'extension', exName, name);
                    event.KJ = true;
                  }
                  if (name2 && tags2 && tags2.length) {
                    event.tags2 = tags2;
                    event.Q = name2;
                  } else {
                    setTimeout(function () {
                      game.playAudio('..', 'extension', exName, name2);
                    }, 3000);
                    event.finish();
                  }
                  'step 1';
                  var tags2 = event.tags2;
                  var name = event.Q;
                  for (let i = 0; i < tags2.length; i++) {
                    if (tags2[i].indexOf('dieAudio:') == 0) {
                      var audionum = tags2[i].slice(9);
                    }
                  }
                  if (audionum) {
                    audionum = +audionum;
                    if (audionum > 1) var num = get.rand(1, audionum);else
                    var num = 1;
                    var audioname = name + num;
                    if (event.KJ) game.playAudio('..', 'extension', exName, audioname);else
                    {
                      setTimeout(function () {
                        game.playAudio('..', 'extension', exName, audioname);
                      }, 3000);
                    }
                  } else {
                    setTimeout(function () {
                      game.playAudio('..', 'extension', exName, name);
                    }, 3000);
                  }
                }
              };
              break;
            case 'sha':
              ////game.createSkill("shaWwzAudio","王者荣耀—<br>神梦一刀");
              lib.skill[skillName] = {
                trigger: {
                  player: 'useCardToPlayered'
                },
                filter(event, player) {
                  return event.card && event.card.name == 'sha';
                },
                forced: true,
                extensionName: extensionName,
                popup: false,
                superCharlotte: true,
                charlotte: true,
                forced: true,
                content() {
                  'step 0';
                  //alert("出杀音效")
                  var exName = lib.skill[event.name].extensionName;
                  var name = get.truename(player);
                  var name2 = player.name2;
                  var tags = lib.character[name][4];
                  if (name2) var tags2 = lib.character[name2][4];
                  if (tags && tags.length) {
                    for (let i = 0; i < tags.length; i++) {
                      if (tags[i].indexOf('shaAudio:') == 0) {
                        var audionum = tags[i].slice(9);
                      }
                    }
                  }
                  if (audionum) {
                    audionum = +audionum;
                    if (audionum > 1) var num = get.rand(1, audionum);else
                    var num = 1;
                    var audioname = name + 'ShaAudio' + num;
                    game.playAudio('..', 'extension', exName, audioname);
                    //alert(audioname)
                  } else {
                    game.playAudio('..', 'extension', exName, name + 'ShaAudio');
                    //alert(name+"ShaAudio")
                    event.KJ = true;
                  }
                  if (name2 && tags2 && tags2.length) {
                    event.tags2 = tags2;
                    event.Q = name2;
                  } else {
                    setTimeout(function () {
                      game.playAudio('..', 'extension', exName, name2 + 'ShaAudio');
                    }, 3000);
                    //alert(name2+"ShaAudio")
                    event.finish();
                  }
                  'step 1';
                  var tags2 = event.tags2;
                  var name = event.Q;
                  for (let i = 0; i < tags2.length; i++) {
                    if (tags2[i].indexOf('shaAudio:') == 0) {
                      var audionum = tags2[i].slice(9);
                    }
                  }
                  if (audionum) {
                    audionum = +audionum;
                    if (audionum > 1) var num = get.rand(1, audionum);else
                    var num = 1;
                    var audioname = name + 'ShaAudio' + num;
                    if (event.KJ) {
                      game.playAudio('..', 'extension', exName, audioname);
                      //alert(audioname)
                    } else {
                      setTimeout(function () {
                        game.playAudio('..', 'extension', exName, audioname);
                      }, 3000);
                      //alert(audioname)
                    }
                  } else {
                    setTimeout(function () {
                      game.playAudio('..', 'extension', exName, name + 'ShaAudio');
                      //alert(name+"ShaAudio")
                    }, 3000);
                  }
                }
              };
              break;
          }
          return lib.skill[skillName];
        };
        if (!game.KJloadExtensioning) {
          lib.extensionMenu.extension_未来科技.KJplayerAddSkill = {
            name: '<center>测 试 技 能</center>',
            intro: '开局为玩家添加指定技能',
            clear: true
          };
          lib.extensionMenu.extension_未来科技.KJplayerAddSkilladd = {
            name: '添加',
            clear: true,
            onclick() {
              var p = prompt('开局为玩家添加指定技能,请输入技能英文名', '');
              if (p !== '' && p !== null) {
                if (!lib.skill[p]) alert('此技能不存在哦');else
                {
                  if (!lib.config.KJplayerAddSkill) lib.config.KJplayerAddSkill = [];
                  lib.config.KJplayerAddSkill.add(p);
                  game.saveConfig('KJplayerAddSkill', lib.config.KJplayerAddSkill);
                  var str = '【' + get.translation(p) + '】添加成功';
                  alert(str);
                }
              }
              //else alert("空字符串");
            }
          };
        }
        if (lib.config.KJplayerAddSkill && lib.config.KJplayerAddSkill.length) {
          //lib.config.KJplayerAddSkill
          var ableextensions = '';
          var X = lib.config.KJplayerAddSkill;
          for (let i = 0; i < X.length; i++) {
            ableextensions += '<option value=' + X[i] + '>' + get.translation(X[i]) + '</option>';
          }
          var KJname = '请选择需要删除的技能<br><select id="KJplayerAddSkill" size="1" style="width:180px">' + ableextensions + '</select>';
          lib.extensionMenu.extension_未来科技.KJplayerAddSkill2 = {
            name: KJname,
            clear: true,
            nopointer: true
          };
          lib.extensionMenu.extension_未来科技.KJplayerAddSkillDo = {
            name: '删除',
            clear: true,
            onclick() {
              var country = document.getElementById('KJplayerAddSkill');
              var str = country.options[country.selectedIndex].value;
              if (confirm('是否删除【' + get.translation(str) + '】？')) {
                if (!lib.config.KJplayerAddSkill.includes(str)) alert('请不要重复操作!');else
                {
                  alert('删除成功');
                  lib.config.KJplayerAddSkill.remove(str);
                  game.saveConfig('KJplayerAddSkill', lib.config.KJplayerAddSkill);
                }
              }
            }
          };
          lib.extensionMenu.extension_未来科技.KJplayerAddSkillAll = {
            name: '全部删除',
            clear: true,
            onclick() {
              if (confirm('是否删除所有技能？')) {
                game.saveConfig('KJplayerAddSkill', []);
                alert('清除完毕');
              }
            }
          };
          lib.skill._KJplayerAddSkill = {
            trigger: {
              global: 'gameStart'
            },
            _priority: Infinity,
            forced: true,
            filter(event, player) {
              return player === game.me;
            },
            content() {
              var X = lib.config.KJplayerAddSkill;
              for (let i = 0; i < X.length; i++) {
                player.addSkill(X[i]);
              }
            }
          };
        }
        //game.otherUseCard();
        //其他角色随机用牌
        game.otherUseCard = function () {
          for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'number') {
              var num = arguments[i];
            } else if (get.itemtype(arguments[i]) == 'players') {
              var me = arguments[i];
            } else if (get.itemtype(arguments[i]) == 'player') {
              var me = arguments[i];
            } else if (get.itemtype(arguments[i]) == 'card') {
              var card = arguments[i];
            } else if (typeof arguments[i] === 'object' && arguments[i].name) {
              var suit, number, nature;
              if (arguments[i].suit) {
                suit = arguments[i].suit;
              } else {
                suit = '';
              }
              if (arguments[i].number) {
                number = arguments[i].number;
              } else {
                number = '';
              }
              if (arguments[i].nature) {
                nature = arguments[i].nature;
              } else {
                nature = '';
              }
              var card = game.createCard(arguments[i].name, suit, number, nature);
              card.destroyed = true;
            }
          } //参数
          var other = [];
          if (!me) var me = game.me;
          for (const i of game.players) {
            if (i !== me) other.add(i);
          }
          if (typeof num === 'undefined') var num = 1;
          if (num <= 0) return;
          if (num === 1) var players = [other.randomGet()];else
          var players = other.randomGets(num);
          //随机其他人
          for (const i of players) {
            i.useCard(card, me);
          }
        };
        // ---------------------------------------基本属性------------------------------------------\\
        //为了实现暂时死亡复活的技能
        lib.skill._timedie = {
          trigger: {
            player: 'dieAfter'
          },
          forced: true,
          forceDie: true,
          forced: true,
          popup: false,
          filter(event, player) {
            return player.hasSkill('timedie');
          },
          content() {
            player.markSkill('timedie');
          }
        };
        lib.skill.timedie = {
          init(player) {
            if (!player.storage.timedie2) player.storage.timedie2 = 0;
          },
          intro: {
            name: '复活倒计时',
            content(storage) {
              return '你在' + storage + '个角色死亡时复活';
            }
          },
          marktext: '复',
          mark: true,
          trigger: {
            global: 'dieBegin'
          },
          forced: true,
          forceDie: true,
          forced: true,
          popup: false,
          filter(event, player) {
            return player.storage.timedie && event.player != player && player.isDead();
            return false;
          },
          content() {
            'step 0';
            player.storage.timedie2++;
            'step 1';
            if (player.storage.timedie2 < player.storage.timedie) event.finish();
            'step 2';
            if (player.storage.alivenum < 0) player.revive(player.maxHp);else
            player.revive(player.storage.alivenum);
            if (player.storage.drawnum > 0) player.draw(player.storage.drawnum);
            player.unmarkSkill('timedie');
            delete player.storage.alivenum;
            delete player.storage.drawnum;
            delete player.storage.timedie;
          }
        };
        //暂时死亡函数,无时机
        lib.element.player.timedie = function (time, num, num2) {
          'step 0';
          event.forceDie = true;
          if (time < 0 || num < 0 || num2 < 0) return;
          this.die();
          'step 1';
          if (typeof time != 'number') time = 1;
          if (typeof num != 'number') num = -1;
          if (typeof num2 != 'number') num = 0;
          game.log(this, '将在' + get.cnNumber(time) + '名角色死亡后复活');
          this.storage.timedie = time;
          this.storage.alivenum = num;
          this.storage.drawnum = num2;
          this.addSkill('timedie');
          this.update();
        };
        lib.element.content.useModSha = function () {
          'step 0';
          if (event.unequip) player.addSkill('unequip');
          if (event.direct) player.addSkill('shadirectall');
          if (event.baseDamage) {
            player.storage.KJmodSha_baseDamage = event.baseDamage;
            player.addSkill('KJmodSha_baseDamage');
          }
          if (event.extraDamage) {
            player.storage.KJmodSha_extraDamage = event.extraDamage;
            player.addSkill('KJmodSha_extraDamage');
          }
          'step 1';
          //alert(event.direct);
          player.useCard.apply(player, event.arg);
          'step 2';
          if (event.unequip) player.removeSkill('unequip');
          if (event.direct) player.removeSkill('shadirectall');
          if (event.baseDamage) {
            player.storage.KJmodSha_baseDamage = 0;
            player.removeSkill('KJmodSha_baseDamage');
          }
          if (event.extraDamage) {
            player.storage.KJmodSha_extraDamage = 0;
            player.removeSkill('KJmodSha_extraDamage');
          }
        };
        //game.me.useModSha(game.zhu,{direct:true,baseDamage:1})
        lib.element.player.useModSha = function (...X) {
          var next = game.createEvent('useModSha', false);
          var card = { name: 'sha' };
          for (let i = 0; i < X.length; i++) {
            if (get.itemtype(X[i]) == 'card') {
              //alert(1)
              var dinged = true;
            } else if (typeof X[i] == 'object' && X[i] && X[i].name && get.itemtype(X[i]) !== 'player' && get.itemtype(X[i]) !== 'players') {
              var dinged = true;
              //alert(2)
            } else {
              if (typeof X[i] === 'object' && X[i].mod) {
                var mod = X[i];
                X.remove(X[i]);
              }
            }
          }
          if (!dinged) X.push(card);
          //alert(mod)
          if (mod) {
            for (var i in mod) {
              //alert(i)
              switch (i) {
                case 'unequip':
                  next.unequip = true;
                  break;
                case 'baseDamage':
                  next.baseDamage = mod[i];
                  break;
                case 'extraDamage': //只对特定的目标有效,不对额外的有效
                  next.extraDamage = mod[i];
                  break;
                case 'direct':
                  next.direct = true;
                  break;
              }
            }
          }
          next.arg = X;
          next.player = this;
          next.setContent('useModSha');
        };
        lib.skill.KJmodSha_baseDamage = {
          trigger: { player: 'useCard' },
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          forced: true,
          popup: false,
          forced: true,
          superCharlotte: true,
          charlotte: true,
          content() {
            if (!trigger.baseDamage) trigger.baseDamage = 1;
            trigger.baseDamage += player.storage.KJmodSha_baseDamage;
            //alert(trigger.baseDamage)
          }
        };
        lib.skill.KJmodSha_extraDamage = {
          audio: 'ext:东方project/audio:2',
          trigger: { player: 'shaBegin' },
          forced: true,
          popup: false,
          forced: true,
          superCharlotte: true,
          charlotte: true,
          content() {
            if (typeof trigger.extraDamage != 'number') trigger.extraDamage = 0;
            trigger.extraDamage += player.storage.KJmodSha_extraDamage;
          }
        };
        //技能次数
        //get函数
        var pack = {
          get: {
            other(pl) {
              var players = game.players.slice();
              players.remove(pl);
              return players.randomGet();
            },
            killNum(target) {
              var num = 0;
              for (var j = 0; j < target.stat.length; j++) {
                if (target.stat[j].kill != undefined) num += target.stat[j].kill;
              }
              return num;
            },
            egname(tra, type) {
              if (!type) var all = true;else
              {
                if (type = 'skill') var skill = true;
                if (type = 'card') var card = true;
              }
              if (!tra) return;
              var cards = [];
              var skills = [];
              if (card || all) {
                for (var i in lib.card) {
                  var name = get.translation(i);
                  if (name === tra) cards.add(i);
                }
              }
              if (skill || all) {
                for (var i in lib.skill) {
                  var name = get.translation(i);
                  if (name === tra) skills.add(i);
                }
              }
              var result = '';
              if (cards?.length) result += '卡牌:' + cards + '<br>';
              if (skills && skills.length) result += '技能:' + skills;
              return result;
            },
            truename(pe) {
              if (get.itemtype(pe) == 'player') {
                if (get.mode() == 'guozhan') return pe.name1;
                return pe.name;
              }
              return;
            }
          }
        };
        for (var i in pack.get) get[i] = pack.get[i];
        // ---------------------------------------设置------------------------------------------\\
        //报错
        lib.KJtranslateMessage = {
          'is not defined': '尚未定义',
          'is not a function': '不是一个函数',
          'Maximum call stack size exceeded': '超出了最大调用堆栈大小',
          'Cannot read property': ['不能读取未定义的属性', 'of undefined'],
          'Cannot set property': ['不能设置未定义的属性', 'of undefined'],
          'Invalid regular expression:': ['无效的正则表达式分组', ': Invalid group'],
          'Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #': '无效的属性描述符.不能同时指定访问器和值或可写属性,#'
        };
        lib.KJtranslateReason = {
          'Maximum call stack size exceeded': '原因是每次执行代码时,都会分配一定尺寸的栈空间(Windows系统中为1M),每次方法调用时都会在栈里储存一定信息(如参数、局部变量、返回值等等),这些信息再少也会占用一定空间,成千上万个此类空间累积起来,自然就超过线程的栈空间了.<li>可能运用了递归运算(即在函数内部调用本体),递归非常耗费内存,因为需要同时保存成千上百个调用记录,很容易发生"栈溢出"错误(stack overflow)<li>反复调用函数,即函数复函数',
          'is not a function': '<li>该函数未定义直接使用,很可能函数名写错了<li>类型错误.一些函数只能针对于指定类型的对象,说明该对象的类型不对或未定义,如:<li>X.replace 不是一个函数,说明X不是字符串',
          'Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #': '使用Object.defineProperty修改的东西产生冲突,你要知道get与set,value和writable只能存在一组'
        };
        //作为函数库不需要加载的部分
        if (!game.KJloadExtensioning) {
          // ---------------------------------------界面加载后------------------------------------------\\
          lib.arenaReady.push(function () {
            //调整设置位置
            var ed = lib.extensionMenu.extension_未来科技.edit;
            var de = lib.extensionMenu.extension_未来科技.delete;
            delete lib.extensionMenu.extension_未来科技.edit;
            delete lib.extensionMenu.extension_未来科技.delete;
            lib.extensionMenu.extension_未来科技.edit = ed;
            lib.extensionMenu.extension_未来科技.delete = de;
          });
          //关扩展
          var extensions = '';
          var X = lib.config.extensions;
          for (let i = 0; i < X.length; i++) {
            if (X[i] != '未来科技' && X[i].indexOf('>') == -1) extensions += '<option value=' + X[i] + '>' + X[i] + '</option>';
          }
          lib.extensionMenu.extension_未来科技.KJdisableextensions.name = '请选择需要暂时关闭的扩展<br><select id="KJdisableextensions" size="1" style="width:180px">' + extensions + '</select>';
          if (lib.config.KJdisableextensionsed) {
            var ableextensions = '';
            var X = lib.config.KJdisableextensions;
            for (let i = 0; i < X.length; i++) {
              if (X[i] != '未来科技') ableextensions += '<option value=' + X[i] + '>' + X[i] + '</option>';
            }
            var KJname = '请选择需要回复的扩展<br><select id="ableextensions" size="1" style="width:180px">' + ableextensions + '</select>';
            lib.extensionMenu.extension_未来科技.KJableextensions = {
              name: KJname,
              clear: true,
              nopointer: true
            };
            lib.extensionMenu.extension_未来科技.KJableextensionsDo = {
              name: '回复此扩展',
              clear: true,
              onclick() {
                var country = document.getElementById('ableextensions');
                var str = country.options[country.selectedIndex].value;
                if (confirm('是否回复' + str + '(此扩展将在下次启动时回复)？')) {
                  if (!lib.config.KJdisableextensions.includes(str)) alert('此扩展已回复,请不要重复操作!');else
                  {
                    alert('回复成功');
                    lib.config.KJdisableextensions.remove(str);
                    if (!lib.config.KJdisableextensions.length) game.saveConfig('KJdisableextensionsed', false);
                    game.saveConfig('KJdisableextensions', lib.config.KJdisableextensions);
                    lib.config.extensions.push(str);
                    game.saveConfig('extensions', lib.config.extensions);
                  }
                }
              }
            };
            lib.extensionMenu.extension_未来科技.KJableextensionsAll = {
              name: '全部回复',
              clear: true,
              onclick() {
                if (confirm('是否回复所有已经关闭的扩展？')) {
                  var X = lib.config.KJdisableextensions;
                  for (let i = 0; i < X.length; i++) {
                    lib.config.extensions.push(X[i]);
                  }
                  game.saveConfig('extensions', lib.config.extensions);
                  alert('关闭的扩展已全部回复');
                  game.saveConfig('KJdisableextensionsed', false);
                  var extensions = [];
                  game.saveConfig('KJdisableextensions', extensions);
                }
              }
            };
          }
          //扩展帮助
          if (game.getExtensionConfig('未来科技', 'brawlhelp') > 1) {
            if (lib.config.brawlhelpPack) {
              var help = lib.config.brawlhelpPack;
              for (var i in help) {
                lib.help[i] = help[i];
              }
            }
          }
        }
        // ---------------------------------------函数------------------------------------------\\
        var pack = {
          plays: {
            jishuan() {
              //(math,timenum)
              for (let i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] === 'string') var math = arguments[i];
                if (typeof arguments[i] === 'number') var time = arguments[i];
                if (Array.isArray(arguments[i])) var num = arguments[i];
              }
              game.log('debug');
              if (!num || !math) return;
              game.log('debug1');
              alert(math);
              alert(time);
              alert(num);
              if (this == game.me) {
                game.log('debug4');
                if (math == 'random') {
                  game.log('debug5');
                  if (num.length = 1) return;
                  game.log('debug2');
                  if (num.length = 2) {
                    var anstrue = num[0];
                    var arr = [];
                    are.push(anstrue);
                    while (arr.length <= num[1]) {
                      var toarr = Math.random() * anstrue;
                      var toarr2 = Math.round(toarr);
                      for (let i = 0; i < arr.length; i++) {
                        if (toarr2 == arr[i]) {
                          var unique = true;
                          continue;
                        }
                      }
                      are.push(toarr2);
                    }
                    var todo = '猜猜' + arr + '这几个数中哪一个为正确答案';
                  }
                  if (num.length = 3) {
                    var anstrue = num[0];
                    var num1 = num[1];
                    var num2 = num[2];
                    var todo = '猜猜' + num1 + '到' + num2 + '中的一个数';
                  }
                }
                game.log('debug3');
                var ans = prompt(todo, '');
              } else {
                game.log('debug4');
                if (math == 'random') {
                  if (num.length = 1) return;
                  if (num.length = 2) {
                    var the = num[1] / 10;
                    var choice = Math.max(0.1, 1 - the);
                    if (Math.random <= choice) var ai = true;
                  }
                  if (num.length = 3) {
                    var num1 = num[1];
                    var num2 = num[2];
                    var the = Math.abs(num2 - num1) / 10;
                    var choice = Math.max(0.1, 1 - the);
                    if (Math.random <= choice) var ai = true;
                  }
                }
              }
              if (time) {
              }
              while ((ans == '' || ans == null) && !gameover && this == game.me) {
                alert('你没有输入任何东西!');
                var ans = prompt(todo, '');
              }
              if ((ans == '' || ans == null) && !gameover && this == game.me) {
              } else {
                if (ans == anstrue || ai) {
                  var gameover = true;
                  game.log(this, '游戏成功');
                } else {
                  var gameover = true;
                  game.log(this, '游戏失败');
                }
              }
            }
          }
        };
        //for(var i in pack.eltc) lib.element.content[i]=pack.eltc[i];
        for (var i in pack.plays) lib.element.player[i] = pack.plays[i];
        //游戏包
        //game.me.getRandomSkill("unique","nobracket",["forced",true,"direct",false],false,"superCharlotte");
        //获取指定个数个规定规格的技能英文名
        lib.element.player.getRandomSkill = function (...tiaojian) {
          //var log=true;      //是否进行游戏记录
          var must = []; //要满足的条件
          var mustnot = []; //不满足的
          var str = []; //数组外面的字符串和布朗值的集合
          var num = 1; //技能数
          var arg = []; //数组参数集合
          for (let i = 0; i < tiaojian.length; i++) {
            if (typeof tiaojian[i] === 'boolean' || typeof tiaojian[i] === 'string') str.push(tiaojian[i]);
            if (typeof tiaojian[i] === 'number') num = tiaojian[i];
            if (Array.isArray(tiaojian[i])) arg.push(tiaojian[i]);
          }
          //if(!str.length&&!arg.length) return;
          if (str.length) {
            str.remove(false);
            if (str.includes(true)) {
              str.remove(true);
              for (let i = 0; i < str.length; i++) {
                must.push(str[i]);
              }
            } else {
              for (let i = 0; i < str.length; i++) {
                mustnot.push(str[i]);
              }
            }
          }
          if (arg && arg.length) {
            for (let i = 0; i < arg.length; i++) {
              arg[i].remove(false);
              if (arg[i].includes(true)) {
                //arg[i]才是需要处理的数组
                arg[i].remove(true);
                for (var j = 0; j < arg[i].length; j++) {
                  must.push(arg[i][j]);
                }
              } else {
                for (var j = 0; j < arg[i].length; j++) {
                  mustnot.push(arg[i][j]);
                }
              }
            }
          }
          var list = [];
          for (var i in lib.character) {
            if (lib.character[i][4]) {
              if (lib.character[i][4].includes('boss')) continue;
              if (lib.character[i][4].includes('hiddenboss')) continue;
              if (lib.character[i][4].includes('minskin')) continue;
              if (lib.character[i][4].includes()) continue;
            }
            for (var x = 0; x < game.players.length; x++) {
              if (lib.character[i] == lib.character[game.players[x].name]) continue;
              if (lib.character[i] == lib.character[game.players[x].name1]) continue;
              if (lib.character[i] == lib.character[game.players[x].name2]) continue;
            }
            for (var j = 0; j < lib.character[i][3].length; j++) {
              var skill = lib.character[i][3][j];
              var info = lib.skill[skill];
              if (lib.filter.skillDisabled(skill)) continue;
              if (this.hasSkill && info.ai && info.ai.combo && !this.hasSkill(info.ai.combo)) continue;
              if (this.hasSkill && this.hasSkill(skill)) continue;
              list.add(skill);
            }
          }
          //开始过滤了
          if (list.length) {
            var skills = [];
            if (mustnot.length) {
              var the = 0;
              for (var j = 0; j < list.length; j++) {
                for (let i = 0; i < mustnot.length; i++) {
                  var info = get.info(list[j]);
                  if (info[mustnot[i]]) break;
                  the++;
                }
                if (the == mustnot.length) {
                  skills.push(list[j]);
                }
                the = 0;
              }
            } else skills = list;
            if (skills && skills.length) {
              if (must.length) {
                var endSkills = [];
                var you = 0;
                for (var j = 0; j < skills.length; j++) {
                  for (let i = 0; i < must.length; i++) {
                    var info = get.info(skills[j]);
                    if (!info[must[i]]) break;
                    you++;
                  }
                  if (you == must.length) {
                    endSkills.push(skills[j]);
                  }
                  you = 0;
                }
              } else endSkills = skills;
            }
            if (endSkills && endSkills.length) {
              //alert(endSkills.length);
              if (num == 1) {
                var link = endSkills.randomGet();
              }
              if (num > 1) {
                var link = endSkills.randomGets(num);
              }
              if (link) return link;
            }
          }
        };
        //最大
        lib.element.player.ismax = function (shushing, ...arg) {
          if (!shushing) return;
          if (this[shushing] == undefined) return;
          if (arg && arg.includes('one')) {
            var bool = true;
            arg.remove('one');
          }
          if (typeof this[shushing] == 'function') {
            if (arg && arg.length) {
              if (this[shushing]() == undefined) return;
              for (const i of game.players) {
                if (i.isOut() || i == this) continue;
                if (bool == true) {
                  if (i[shushing].apply(i, arg) >= this[shushing].apply(this, arg)) return false;
                } else {
                  if (i[shushing].apply(i, arg) > this[shushing].apply(this, arg)) return false;
                }
              }
            } else {
              if (this[shushing]() == undefined) return;
              for (const i of game.players) {
                if (i.isOut() || i == this) continue;
                if (bool == true) {
                  if (i[shushing]() >= this[shushing]()) return false;
                } else {
                  if (i[shushing]() > this[shushing]()) return false;
                }
              }
            }
          } else {
            for (const i of game.players) {
              if (i.isOut() || i == this) continue;
              if (bool == true) {
                if (i[shushing] >= this[shushing]) return false;
              } else {
                if (i[shushing] > this[shushing]) return false;
              }
            }
          }
          return true;
        };
        //最小
        lib.element.player.ismin = function (shushing, ...arg) {
          if (!shushing) return;
          if (this[shushing] == undefined) return;
          if (arg && arg.includes('one')) {
            var bool = true;
            arg.remove('one');
          }
          if (typeof this[shushing] == 'function') {
            if (arg && arg.length) {
              if (this[shushing]() == undefined) return;
              for (const i of game.players) {
                if (i.isOut() || i == this) continue;
                if (bool == true) {
                  if (i[shushing].apply(i, arg) <= this[shushing].apply(this, arg)) return false;
                } else {
                  if (i[shushing].apply(i, arg) < this[shushing].apply(this, arg)) return false;
                }
              }
            }
            if (this[shushing]() == undefined) return;
            for (const i of game.players) {
              if (i.isOut() || i == this) continue;
              if (bool == true) {
                if (i[shushing]() <= this[shushing]()) return false;
              } else {
                if (i[shushing]() < this[shushing]()) return false;
              }
            }
          } else {
            for (const i of game.players) {
              if (i.isOut() || i == this) continue;
              if (bool == true) {
                if (i[shushing] <= this[shushing]) return false;
              } else {
                if (i[shushing] < this[shushing]) return false;
              }
            }
          }
          return true;
        };
        lib.element.player.changePhase = function (...name) {
          if (!name.length) return;
          if (!this.name && !this.name) return;
          if (name.includes(true)) {
            this.changePhaseAllthetime = true;
            name.remove(true);
          }
          if (!this.truephase) this.truephase = this.phase;
          this.phase = function (skill) {
            var next = game.createEvent('phase');
            next.player = this;
            this.changePhaseorder = name;
            this.changePhaseordermarks = name.slice(0);
            this.markSkill('_changePhase');
            if (get.mode() == 'guozhan') next.setContent(this.name1 + 'changePhase');else
            next.setContent(this.name + 'changePhase');
            if (!_status.roundStart) {
              _status.roundStart = this;
            }
            if (skill) {
              next.skill = skill;
            }
            return next;
          };
          if (get.mode() == 'guozhan') var b = this.name1;else
          var b = this.name;
          lib.element.content[b + 'changePhase'] = function () {
            'step 0';
            var name = player.changePhaseorder[0];
            if (!player[name]) event.goto(2);
            player[name]();
            'step 1';
            if (player.changePhaseorder[0] == 'phaseUse') {
              game.broadcastAll(function () {
                if (ui.tempnowuxie) {
                  ui.tempnowuxie.close();
                  delete ui.tempnowuxie;
                }
              });
            }
            'step 2';
            player.changePhaseorder.splice(0, 1);
            if (player.changePhaseorder.length <= 0) {
              delete player.using;
              delete player._noSkill;
              if (!player.changePhaseAllthetime) {
                player.phase = player.truephase;
                player.unmarkSkill('_changePhase');
              }
              return;
            } else event.goto(0);
          };
        };
        //国战时连胜利条件一起改变
        lib.element.player.changeGroupIdentity = function (group, log) {
          if (get.mode() != 'guozhan') return;
          game.broadcastAll(
            function (player, group) {
              player.group = group;
              player.node.name.dataset.nature = get.groupnature(group);
              player.identity = group;
              player.setIdentity(player.identity);
              player.ai.shown = 1;
              player.node.identity.classList.remove('guessing');
            },
            this,
            group
          );
          if (log !== false) game.log(this, '将势力变为了', '#y' + get.translation(group + 2));
        };
        // ---------------------------------------技能------------------------------------------\\
        //配合回合顺序变换的全局技能
        lib.translate.phaseZhunbei = '准备阶段';
        lib.translate.phaseJudge = '判定阶段';
        lib.translate.phaseDraw = '摸牌阶段';
        lib.translate.phaseUse = '出牌阶段';
        lib.translate.phaseDiscard = '弃牌阶段';
        lib.translate.phaseJieshu = '结束阶段';
        lib.translate._changePhase = '回合顺序';
        lib.skill._changePhase = {
          mark: true,
          popup: false,
          forced: true,
          nobracket: true,
          superCharlotte: true,
          intro: {
            content(content, player) {
              var str = '';
              //if(player.changePhaseordermarks) str="你现在的回合内阶段顺序分别为:<br>"+player.changePhaseordermarks;
              if (player.changePhaseordermarks) {
                str = '你现在的回合内阶段顺序分别为:<br>' + get.translation(player.changePhaseordermarks[0]);
                for (let i = 1; i < player.changePhaseordermarks.length; i++) {
                  str += '、' + get.translation(player.changePhaseordermarks[i]);
                }
              }
              return str;
            }
          }
        };
        lib.translate.ruodian = '弱点';
        lib.skill.ruodian = {
          trigger: {
            player: 'damageBegin'
          },
          filter(event, player) {
            if (event.source == undefined || event.source == event.player) return false;
            return true;
          },
          mark: true,
          intro: {
            content: '已被洞察到弱点,下次受到的伤害加一'
          },
          _priority: -10,
          popup: false,
          forced: true,
          nobracket: true,
          superCharlotte: true,
          content() {
            trigger.num++;
          },
          ai: {
            threaten: 2,
            effect: {
              player(card) {
                if (card.name == 'sha') return 'zeroplayertarget';
              }
            }
          }
        };
        //杀对指定目标伤害加一
        lib.skill.shanum = {
          audio: 'ext:东方project/audio:2',
          trigger: { player: 'shaBegin' },
          forced: true,
          popup: false,
          superCharlotte: true,
          charlotte: true,
          content() {
            if (typeof trigger.extraDamage != 'number') trigger.extraDamage = 0;
            trigger.extraDamage++;
          }
        };
        //杀基础伤害加一
        lib.skill.shabasenum = {
          trigger: { player: 'useCard' },
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          forced: true,
          popup: false,
          superCharlotte: true,
          charlotte: true,
          content() {
            if (!trigger.baseDamage) trigger.baseDamage = 1;
            trigger.baseDamage++;
          }
        };
        //自标不能响应杀
        lib.skill.shadirect = {
          trigger: { player: 'useCardToPlayered' },
          forced: true,
          popup: false,
          charlotte: true,
          superCharlotte: true,
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          content() {
            trigger.parent.directHit.push(trigger.target);
          }
        };
        //全部角色不能响应杀
        lib.skill.shadirectall = {
          trigger: { player: 'shaBegin' },
          forced: true,
          popup: false,
          charlotte: true,
          superCharlotte: true,
          content() {
            trigger.directHit = true;
          }
        };
        //封印一名角色所有技能
        lib.skill.tofengyin = {
          init(player, skill) {
            var skills = player.getSkills(true, false);
            for (let i = 0; i < skills.length; i++) {
              if (get.skills[i]) {
                skills.splice(i--, 1);
              }
            }
            player.disableSkill(skill, skills);
          },
          onremove(player, skill) {
            player.enableSkill(skill);
          },
          mark: true,
          superCharlotte: true,
          intro: {
            content(storage, player, skill) {
              var list = [];
              for (var i in player.disabledSkills) {
                if (player.disabledSkills[i].includes(skill)) {
                  list.push(i);
                }
              }
              if (list.length) {
                var str = '失效技能:';
                for (let i = 0; i < list.length; i++) {
                  if (lib.translate[list[i] + '_info']) {
                    str += get.translation(list[i]) + '、';
                  }
                }
                return str.slice(0, str.length - 1);
              }
            }
          }
        };
        lib.translate.tofengyin = '神圣封印';
      },
      precontent(KJexPrecontent) {
        if (!game.KJloadExtensioning) {
          //作为函数库载入时不会加载的内容,且扩展开启
          // ---------------------------------------扩展执行块------------------------------------------\\
          //关闭设置中的扩展
          if (lib.config.KJdisableextensionsed) {
            var X = lib.config.KJdisableextensions;
            for (let i = 0; i < X.length; i++) {
              if (lib.config.extensions.includes(X[i])) lib.config.KJdisableextensions.remove(X[i]);
              game.saveConfig('KJdisableextensions', lib.config.KJdisableextensions);
            }
          }
        }
        // ---------------------------------------立即执行块------------------------------------------\\
        //扩展开没开启都可以,不管是不是作为函数库引入的
        //载入外部库
        lib.KJaddress = 'extension/未来科技'; //扩展未来科技文件夹
        lib.KJzaiRuJs = ['pinyin', 'circular-json', 'beautify'];
        if (!lib.KJzaiRuJsEd) {
          lib.init.js(lib.KJaddress, lib.KJzaiRuJs, function () {
            lib.KJzaiRuJsEd = true;
          });
        }
      },
      help: {
        未来科技: "这是一个萌新开发的扩展.<br><li>【真正之名】<br>get.truename(pe);<br>获取pe的英文名,众所周知:<br>非国战模式,玩家英文名为player.name<br>在国战player.name1才是玩家英文名,player.name是座位号.<br><li>【国战变势力】<br>国战的胜利条件与势力一起变<br>仅限国战使用<br>player.changeGroupIdentity(group,log);<br>group为势力如:wu(吴)、shu(蜀)、wei(魏)<br>log不为false进行游戏记录<br>player.changeGroupIdentity('ye');<br><li>【回合顺序调整】<br>player.changePhase(X,Y,Z);X、Y、Z都为字符串,数量不限<br>此函数用于改变回合内阶段顺序<br>另外可加true使其回合一直这样<br>如果要变回来:<br>delete player.changePhaseAllthetime;<br>player.phase=player.truephase;<br>player.unmarkSkill('_changePhase');<br>范围为函数名:<br>如:<br>phaseZhunbei:准备阶段<br>phaseJudge:判定阶段<br>phaseDraw:摸牌阶段<br>phaseUse:出牌阶段<br>phaseDiscard:弃牌阶段<br>phaseJieshu:结束阶段<br>eg:<br>    player.changePhase('phaseUse','phaseDraw','phaseDiscard');<br>玩家的回合内阶段顺序变为:出牌阶段,摸牌阶段,弃牌阶段.<br>不写的阶段默认跳过<br>也可以不与这些,前提是这个函数能用且不能有参数<br>如果不是这几个时机必须要写翻译:<br>eg:<br>player.changePhase('draw','damage','goMad');<br>lib.translate.draw='摸牌';<br>lib.translate.damage='受到伤害';<br>lib.translate.goMad='发疯';<br>玩家在回合内依次进行以下事件:<br>摸一张牌,受到一点伤害,发疯.<br><li>【技能列表】<br>用player.addSkill('X')函数添加<br>常用的添加方法:<br>玩家获得X技能直到当前回合结束<br>player.addTempSkill('X','phaseAfter');<br>玩家获得X技能直到你回合结束<br>player.addTempSkill('X',{player:'phaseAfter'});<br>玩家获得X技能直到有人使用了杀后<br>player.addTempSkill('X','shaAfter');<br>玩家所有技能失效,但不包括状态技<br>tofengyin<br>玩家下次受到的伤害加一<br>ruodian<br>玩家使用杀对指定目标伤害加一<br>shanum<br>玩家的杀的基础伤害加一<br>shabasenum<br>指定目标无法闪避此杀<br>shadirect<br>此杀不可闪避<br>shadirectall<br><li>【随机获得技能】<br>player.getRandomSkill(X,Y);<br>参数顺序不管,若无参数则没有条件<br>X为字符串或布朗值<br>Y为数组<br>此函数用于获得指定标签指定个数个技能的英文名<br><li>【随机用牌】game.otherUseCard(card,player);<br>随机其他角色对player使用card<br>card可以为字符串或对象方法:<br><li>【暂时死亡】<br>player.timedie(time,num,num2);<br>操作后玩家死亡,并在time个数个玩家死亡时复活num体力值,摸num2张牌.<br><li>【最大最小】<br>player.ismax(shushing,arg);<br>player.ismin(shushing,arg);<br>用来检测玩家的某种属性的值是否为场上最高或最低<br>shushing为玩家的某种属性,如countCards('h'),hp,maxHp等等<br>不一定要是游戏自带的,但必须是已经定义的而且是数字,否则跳过此函数或游戏出错<br>arg里可以填'one',表示唯一最高或最低<br><li>【创建扩展死亡、出杀音效】<br>game.createSkill(skillName,types)<br><li>【载入拓展帮助】<br>game.loadHelp(extensionName,files)<br><li>【使用特殊杀】<br>player.useModSha(target,card,mod);<br>target目标<br>card卡牌,默认是无属性杀<br>mod效果<br>除了card有默认值、mod外,用法与player.useCard一样<br>mod现在有这几个:<br>direct 不可闪避<br>unequip 无视防具<br>baseDamage:num 基础伤害加num //酒加的是基础伤害<br>trigger.baseDamage的初始伤害为1<br>extraDamage:num 对指定目标伤害加num //烈弓是指定伤害<br>trigger.extraDamage的初始值为0"
      },
      config: {
        brawlhelp: {
          name: '乱斗帮助',
          intro: '解决乱斗介绍(至少150字)太长无法滑动的问题,将其介绍复制进帮助,主要用于扩展ol.初次加载帮助需要进一次乱斗模式,再次进入游戏才会显示,也就是说要进两次,再次点击打开可以刷新帮助',
          init: '2',
          item: {
            1: '关闭',
            2: '打开'
          },
          onclick(item) {
            switch (item) {
              case '1':
                break;
              case '2':
                if (lib.brawl) {
                  for (var i in lib.brawl) {
                    if (!lib.brawl[i].name || !lib.brawl[i].intro || lib.help[lib.brawl[i].name] && !lib.config.brawlhelpPack[lib.brawl[i].name]) continue;
                    var name = lib.brawl[i].name;
                    var X = lib.brawl[i].intro;
                    if (!X) continue;
                    if (Array.isArray(X)) {
                      var num = 0;
                      var C = '';
                      for (let i = 0; i < X.length; i++) {
                        num += X[i].length;
                        C += '<li>';
                        C += X[i];
                      }
                    } else {
                      num = X.length;
                      C = X;
                    }
                    if (num >= 150) {
                      if (!brawlhelpPack) var brawlhelpPack = {};
                      brawlhelpPack[name] = C;
                      if (!should) var should = true;
                    }
                    num = 0;
                  }
                  if (should) {
                    game.saveConfig('brawlhelpPack', brawlhelpPack);
                    var log = [];
                    var help = lib.config.brawlhelpPack;
                    for (var i in help) {
                      log.push(i);
                    }
                    alert('已将' + log + '加入帮助重启后生效');
                  } else alert('乱斗里没用任何超过150字的介绍!');
                } //
                else alert('请在乱斗模式打开此选项!否则无效!');
                break;
            }
          }
        },
        KJdisableextensions: {
          name: '',
          clear: true,
          nopointer: true
        },
        KJdisableextensions_delete: {
          name: '关闭此扩展',
          clear: true,
          onclick() {
            var country = document.getElementById('KJdisableextensions');
            var str = country.options[country.selectedIndex].value;
            if (confirm('是否关闭' + str + '(此扩展将在下次启动时关闭直到回复此扩展)？')) {
              if (lib.config.KJdisableextensions.includes(str)) alert('此扩展已关闭,请不要重复操作!');else
              {
                alert('关闭成功');
                if (lib.config.KJdisableextensions && lib.config.KJdisableextensions.length) lib.config.KJdisableextensions.push(str);else
                {
                  lib.config.KJdisableextensions = [];
                  lib.config.KJdisableextensions.push(str);
                }
                game.saveConfig('KJdisableextensionsed', true);
                game.saveConfig('KJdisableextensions', lib.config.KJdisableextensions);
                var X = lib.config.KJdisableextensions;
                for (let i = 0; i < X.length; i++) {
                  lib.config.extensions.remove(X[i]);
                }
                game.saveConfig('extensions', lib.config.extensions);
              }
            }
          }
        },
        KJdisableextensions_deleteAll: {
          name: '全部关闭',
          clear: true,
          onclick() {
            if (confirm('是否关闭除此扩展外的全部扩展？')) {
              var extensions = [];
              var X = lib.config.extensions;
              for (let i = 0; i < X.length; i++) {
                if (X[i].includes('>')) {
                  alert(X[i] + '存在非法字符,无法关闭');
                  continue;
                }
                if (X[i] != '未来科技' && !lib.config.KJdisableextensions.includes(X[i])) lib.config.KJdisableextensions.push(X[i]);
              }
              game.saveConfig('KJdisableextensions', lib.config.KJdisableextensions);
              var X = lib.config.KJdisableextensions;
              for (let i = 0; i < X.length; i++) {
                lib.config.extensions.remove(X[i]);
              }
              game.saveConfig('extensions', lib.config.extensions);
              alert('全部扩展已关闭,开机时间至少减至一半!');
              game.saveConfig('KJdisableextensionsed', true);
            }
          }
        }
      },
      package: {
        skill: {
          skill: {
            _wwz_baojilu: {
              init(player) {
                if (!player.storage._wwz_baojilu) player.storage._wwz_baojilu = 0;
              },
              audio: 'ext:东方project/audio:2',
              trigger: {
                source: 'damageBegin'
              },
              filter(event, player) {
                if (player.storage._wwz_baojixiaoguo >= 100) player.storage._wwz_baojixiaoguo = 100;
                var num = player.storage._wwz_baojilu / 100;
                if (num < 0) var num = 0;
                return event.card && event.card.name == 'sha' && Math.random() <= num;
              },
              popup: false,
              forced: true,
              _priority: null,
              content() {
                'step 0';
                trigger.num *= 2;
                'step 1';
                if (player.storage._wwz_baojixiaoguo >= 50) {
                  var oldnum = player.storage._wwz_baojixiaoguo % 50;
                  var newnum = player.storage._wwz_baojixiaoguo - oldnum;
                  trigger.num += newnum / 50;
                }
              }
            },
            _wwz_baojixiaoguo: {
              popup: false,
              forced: true,
              _priority: null,
              init(player) {
                if (!player.storage._wwz_baojixiaoguo) player.storage._wwz_baojixiaoguo = 0;
              }
            },
            _wwz_mianshang: {
              popup: false,
              forced: true,
              _priority: 2020,
              trigger: {
                player: 'damageBefore'
              },
              filter(event, player) {
                var num = player.storage._wwz_mianshang / 100;
                return Math.random() <= num;
              },
              content() {
                trigger.cancel();
                player.$damagepop('免疫', 'unknownx');
                game.log(trigger.source, '的攻击被', player, '的免伤抵消了');
              }
            },
            _wwz_physics: {
              popup: false,
              forced: true,
              _priority: 2019,
              init(player) {
                if (!player.storage._wwz_physics) player.storage._wwz_physics = 0;
              },
              trigger: {
                player: 'damageBefore'
              },
              filter(event, player) {
                if (!player.storage._wwz_physics) return false;
                if (player.storage._wwz_physics >= 70) player.storage._wwz_physics = 70;
                if (event.source.storage._wwz_unphysics) {
                  var num = player.storage._wwz_physics - event.source.storage._wwz_unphysics;
                } else var num = player.storage._wwz_physics;
                var newnum = num / 100;
                return Math.random() <= newnum && !event.nature;
              },
              content() {
                trigger.cancel();
                game.log(trigger.source, '的攻击被', player, '的物理防御抵消了');
                player.$damagepop('物防', 'unknownx');
              }
            },
            _wwz_magic: {
              popup: false,
              forced: true,
              _priority: 2019,
              init(player) {
                if (!player.storage._wwz_magic) player.storage._wwz_magic = 0;
              },
              trigger: {
                player: 'damageBefore'
              },
              filter(event, player) {
                if (!player.storage._wwz_magic) return false;
                if (player.storage._wwz_magic >= 70) player.storage._wwz_magic = 70;
                if (event.source.storage._wwz_unmagic) {
                  var num = player.storage._wwz_magic - event.source.storage._wwz_unmagic;
                } else var num = player.storage._wwz_magic;
                var newnum = num / 100;
                return Math.random() <= newnum && event.nature;
              },
              content() {
                trigger.cancel();
                game.log(trigger.source, '的攻击被', player, '的法术防御抵消了');
                player.$damagepop('法防', 'unknownx');
              }
            },
            _wwz_zhenshang: {
              audio: 'ext:东方project/audio:2',
              trigger: {
                source: 'damageBefore'
              },
              filter(event, player) {
                return player.hasSkill('wwz_zhenshang1');
              },
              popup: false,
              forced: true,
              _priority: null,
              content() {
                player.storage.wwz_zhenshang1 = trigger.num;
              }
            },
            _wwz_zhenshangthen: {
              audio: 'ext:东方project/audio:2',
              trigger: {
                source: 'damageBegin'
              },
              filter(event, player) {
                return player.hasSkill('wwz_zhenshang1');
              },
              popup: false,
              forced: true,
              _priority: null,
              content() {
                if (trigger.num < player.storage.wwz_zhenshang1) trigger.num = player.storage.wwz_zhenshang1;
                delete player.storage.wwz_zhenshang1;
              }
            },
            wwz_zhenshang1: {
              mark: true,
              popup: false,
              forced: true,
              _priority: null,
              audio: 'ext:东方project/audio:2',
              intro: {
                content(storage, player, skill) {
                  return '您当前拥有真伤效果,你造成伤害时,伤害值不会变小,真伤属于物理伤害';
                }
              }
            },
            _wwz_unmagic: {
              init(player) {
                if (!player.storage._wwz_unmagic) player.storage._wwz_unmagic = 0;
              }
            },
            _wwz_huimie: {
              init(player) {
                if (!player.storage._wwz_huimie) player.storage._wwz_huimie = 0;
              },
              audio: 'ext:东方project/audio:2',
              trigger: {
                source: 'damageBegin'
              },
              filter(event, player) {
                if (player.storage._wwz_huimie >= 100) player.storage._wwz_huimie = 100;
                var num = player.storage._wwz_huimie / 100;
                if (num < 0) var num = 0;
                return event.card && event.card.name == 'sha' && Math.random() <= num;
              },
              popup: false,
              forced: true,
              _priority: null,
              content() {
                'step 0';
                trigger.num *= 2;
                'step 1';
                if (player.storage._wwz_huimie >= 50) {
                  var oldnum = player.storage._wwz_huimie % 50;
                  var newnum = player.storage._wwz_huimie - oldnum;
                  trigger.num += newnum / 50;
                }
              }
            },
            _wwz_unphysics: {
              init(player) {
                if (!player.storage._wwz_unphysics) player.storage._wwz_unphysics = 0;
              }
            },
            _wwz_magictrue: {
              init(player) {
                if (!player.storage._wwz_magictrue) player.storage._wwz_magictrue = 0;
              }
            },
            _wwz_movespeed: {
              trigger: {
                player: ['chooseToRespondBegin', 'chooseToUseBegin']
              },
              filter(event, player) {
                if (event.responded) return false;
                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                var evt = event.parent;
                if (player.storage._wwz_movespeed <= evt.player.storage._wwz_movespeed) return false;
                var num = player.storage._wwz_movespeed - evt.player.storage._wwz_movespeed;
                var shannum = num / 100;
                return Math.random() <= shannum;
              },
              forced: true,
              content() {
                trigger.untrigger();
                trigger.responded = true;
                trigger.result = { bool: true, card: { name: 'shan' } };
                player.$damagepop('闪避', 'unknownx');
              },
              ai: {
                respondShan: true
              }
            },
            _wwz_hitspeed: {
              init(player) {
                if (!player.storage._wwz_hitspeed) player.storage._wwz_hitspeed = 0;
              },
              trigger: {
                player: 'useCardAfter'
              },
              popup: false,
              forced: true,
              _priority: 4000,
              forced: true,
              filter(event, player) {
                if (player.storage._wwz_hitspeed >= 100) player.storage._wwz_hitspeed = 100;
                if (!event.targets || !event.card) return false;
                if (player.storage._wwz_hitspeed >= 50 && !player.storage._wwz_hitspeedstop && event.card.name == 'sha') return true;
              },
              content() {
                'step 0';
                player.storage._wwz_hitspeedstop = true;
                'step 1';
                var oldnum = player.storage._wwz_hitspeed % 50;
                var newnum = player.storage._wwz_hitspeed - oldnum;
                var wwznum = newnum / 50;
                for (let i = 0; i < wwznum; i++) {
                  var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                  player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                }
                'step 2';
                player.storage._wwz_hitspeedstop = false;
              }
            },
            _wwz_movespeedtosha: {
              trigger: {
                player: 'useCardToPlayered'
              },
              forced: true,
              filter(event, player) {
                if (event.card.name != 'sha') return false;
                if (player.storage._wwz_movespeed <= event.target.storage._wwz_movespeed) return false;
                var num = player.storage._wwz_movespeed - event.target.storage._wwz_movespeed;
                var shanum = num / 100;
                return Math.random() <= shanum;
              },
              _priority: null,
              forced: true,
              popup: false,
              audio: 'ext:东方project/audio:2',
              content() {
                trigger.parent.directHit.push(trigger.target);
                game.log(player, '强制命中', trigger.target);
                player.$fullscreenpop('强制命中', 'fire');
              }
            }
          },
          translate: {
            _wwz_baojilu: '暴击率',
            _wwz_baojilu_info: '当你的杀造成物理伤害前,你有X%机率,将攻击翻倍,X为暴击率,且暴击在所有同时机技能(不包括暴击效果)之后触发',
            _wwz_baojixiaoguo: '暴击效果',
            _wwz_baojixiaoguo_info: '每50%效果在暴击后额外附加一点伤害,一同结算',
            _wwz_gamewongzestart: '游戏开始',
            _wwz_gamewongzestart_info: '',
            _wwz_mianshang: '免伤',
            _wwz_mianshang_info: '你受到伤害时,有X%机率免疫,X为免伤数值,免伤在法术/物理防御前结算,不受真伤影响',
            _wwz_physics: '物理防御',
            _wwz_physics_info: '受到物理伤害时,有X%机率免疫,X为物理防御数值',
            _wwz_magic: '法术防御',
            _wwz_magic_info: '受到法术伤害时,有X%机率免疫,X为法术防御数值',
            _wwz_zhenshang: '真伤前',
            _wwz_zhenshang_info: '你造成伤害时,无视物理防御/护甲,真伤属于物理伤害',
            _wwz_zhenshangthen: '真伤后',
            _wwz_zhenshangthen_info: '',
            wwz_zhenshang1: '真伤',
            wwz_zhenshang1_info: '',
            _wwz_unmagic: '破魔',
            _wwz_unmagic_info: '每1%的破魔效果抵消1%的法术防御',
            _wwz_huimie: '毁灭效果',
            _wwz_huimie_info: '当你造成法术伤害前,你有X%机率,将法术攻击翻倍,X为毁灭效果数值,且毁灭效果在所有同时机技能(不包括法术强度)之后触发',
            _wwz_unphysics: '破甲',
            _wwz_unphysics_info: '每1%的破甲效果抵消1%的物理防御',
            _wwz_magictrue: '法术强度',
            _wwz_magictrue_info: '每50%强度在毁灭效果后额外附加一点法术伤害,一同结算',
            _wwz_movespeed: '移速',
            _wwz_movespeed_info: '你成为杀的目标后,有X%机率视为使用了闪,X为你的移速减去杀的使用者的移速(初始移速为50)',
            _wwz_hitspeed: '攻速',
            _wwz_hitspeed_info: '每50%攻速额外结算一次杀的效果',
            _wwz_movespeedtosha: '移速',
            _wwz_movespeedtosha_info: ''
          }
        },
        intro: "<li>创新驱动未来,科技改变生活<li>本扩展为功能性扩展,力求短小精悍,不会占用太大内存<li>扩展内有一些状态mod类技能,可以用player.addSkill('技能名')函数添加,技能在其他→帮助→未来科技里<li>现在虽然有技能,但无帮助,请自行查看js文件<br下几个版本会更新帮助的><li>本扩展内有新函数,请打开扩展文件夹自行查看,没有时间写帮助",
        author: '清风逍悦',
        version: '1.776'
      }
    };
  });
};