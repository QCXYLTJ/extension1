export function gelinMap(lib, game, ui, get, ai, _status) {
  var info = {
    start() {
      'step 0';
      // if (!get.gl_data('departure')) {
      // 	game.gl_createDailog('越是强大越是迷茫,你或许该去挑战模式寻求答案', function () {
      // 		game.saveConfig('mode', 'boss');
      // 		localStorage.setItem(lib.configprefix + 'directstart', true);
      // 		game.reload();
      // 	});
      // 	game.pause();
      // 	return;
      // }//AAA
      ui.background.setBackgroundImage('extension/格林笔记/image/title.jpg');
      //导入地图
      game.bage = ui.create.div('.gl_bage.hidden', ui.window);
      game.bage.buttons = [];
      var switchMode = ui.create.div('.gl_switchMode.hidden', ui.window);
      lib.setScroll(switchMode);
      if (!lib.config.touchscreen && lib.config.mousewheel) {
        switchMode._scrollspeed = 30;
        switchMode._scrollnum = 10;
        switchMode.onmousewheel = ui.click.mousewheel;
      }
      event.switchMode = switchMode;
      var map = {
        命运启示: ['huiguniang:灰姑娘', 'xiaohongmao:小红帽', 'jimu:金银岛', 'tangjihede:堂•吉诃德', 'baixueji:白雪公主', 'geerda:冰雪奇缘', 'taotailang:桃太郎', 'alading:阿拉丁与神灯', 'zhende:奥尔良的圣女', 'ailisi:爱丽丝梦游仙境', 'sanyuetu:爱丽丝镜中奇遇'],
        混沌来袭: ['wukong:西游记', 'taolesi:绿野仙踪', 'aobulang:仲夏夜之梦', 'jierdelei:蓝胡子', 'zhuliye:朱丽叶与罗密欧', 'huiye:御伽草子:yujiacaozi', 'yigenisi:冰与火的幻想曲', 'aiernuoya:亲爱与希望之春', 'yase:亚瑟王传奇', 'aikesi:万象'],
        新生回响: ['ailier:海的女儿'],
        万象终局: ['puluomixiusi:复苏的调律者'],
        大千世界: ['kalun:红舞鞋', 'kamila:吸血鬼卡米拉', 'hongqiangwei:红蔷薇与白蔷薇', 'maihuochai:卖火柴的小女孩', 'yuyitiannv:羽衣天女', 'ailike:歌剧魅影', 'huiye:竹取物语', 'busi:穿靴子的猫', 'fulankensitan:科学怪人', 'jintailang:金太郎', 'pudaotailang:浦岛太郎', 'lubang:怪盗绅士'],
        未知领域: ['xita:格林回音', 'bulu:猫女仆,报告!', 'souzhineihaojiang:天诛X神曲'],
        造物起源: ['leina:调律巫女', 'shanluzuode:天方夜谭', 'ludeweixi:格林童话·上', 'yagebu:格林童话·中', 'shashibiya:喜剧与悲剧', 'kaluoer:爱丽丝系列', 'antusheng:安徒生童话', 'xialuote:格林童话·下', 'emama:鹅妈妈的故事·上', 'xiaer:鹅妈妈的故事·下', 'dafenqi:蒙娜丽莎', 'duoluoxiya:不为人知的英雄', 'wangdefa:快乐王子', 'yisuo:伊索寓言'],
        无尽混沌: ['huzhinvshen:象征收集', 'huzhinvshen:试炼之地:shilianchang', 'huzhinvshen:无尽模式:wujin', 'shuiguai:配信活动']
      };
      lib.setScroll(game.bage);
      if (!lib.config.touchscreen && lib.config.mousewheel) {
        game.bage._scrollspeed = 30;
        game.bage._scrollnum = 10;
        game.bage.onmousewheel = ui.click.mousewheel;
      }
      for (var i in map) {
        var button = ui.create.div(switchMode);
        button.innerHTML = i;
        button.links = [];
        button.onclick = function () {
          if (game.bage.link) {
            game.bage.link.classList.remove('select');
          }
          this.classList.add('select');
          game.bage.link = this;
          for (var z = 0; z < game.bage.buttons.length; z++) {
            if (this.links.includes(game.bage.buttons[z])) {
              game.bage.buttons[z].style.display = '';
            } else {
              game.bage.buttons[z].style.display = 'none';
            }
          }
        };
        if (!game.bage.init) {
          game.bage.init = button;
        }
        for (var j = 0; j < map[i].length; j++) {
          var node = ui.create.div(game.bage);
          button.links.push(node);
          game.bage.buttons.push(node);
          var arr = map[i][j].split(':');
          node.setBackgroundImage('extension/格林笔记/character/gl_' + arr[0] + '.jpg');
          ui.create.div('.gl_title', node, arr[1]);
          node.onclick = function () {
            lib.init.js(
              'extension/格林笔记/map/' + this.name,
              'data',
              function () {
                window.gl_init(lib, game, ui, get, ai, _status);
                game.resume();
              },
              function () {
                game.gl_createDailog('这片想区被重重迷雾包裹,没办法进入呢.(未找到想区文件,请检查本地文件后重试!)');
              }
            );
          };
          node.name = arr[2] || arr[0];
        }
      }
      game.bage.init.onclick();
      'step 1';
      setTimeout(function () {
        event.switchMode.show();
        game.bage.show();
        ui.background.setBackgroundImage('extension/格林笔记/mingyunzhishu.jpg');
      }, 1000);
      'step 2';
      game.pause();
      'step 3';
      if (!window.xiangqv) {
        event.goto(2);
      }
      'step 4';
      if (window.xiangqv.initBefore) window.xiangqv.initBefore();
      game.animate.window(1);
      game.complexity = get.config('complexity') || 'ordinary';
      //特殊模块特殊处理
      lib.element.player.init = function (character, character2, skill) {
        if (get.intensify(this) || this.noInit) {
          character = this.name || character;
          character2 = null;
          skill = null;
        }
        return lib.gl_element.init.apply(this, [character, character2, skill]);
      };
      'step 5';
      //战斗模块
      game.addCharacterPack(window.xiangqv.pack, '童话想区');
      game.playBackgroundMusic();
      for (var i in window.xiangqv.galgame) {
        galgame.text[i] = window.xiangqv.galgame[i];
      }
      if (game.bage) game.bage.hide();
      if (event.switchMode) event.switchMode.hide();
      ui.create.cardsAsync();
      game.finishCards();
      ui.arena.setNumber(8);
      var player = ui.create.player();
      player.noRemove = true;
      player.getId();
      var name = 'gl_aikesi';
      if (window.xiangqv.player) name = window.xiangqv.player;
      player.init(name).addTempClass('start');
      player.setIdentity('nei');
      player.identity = 'nei';
      game.players.push(player);
      player.dataset.position = 0;
      game.vitalPlayer.me = player;
      ui.arena.appendChild(player);
      if (window.xiangqv.level) {
        game.nextLevel(0);
      } else {
        game.nextLevel(window.xiangqv.beyond);
        if (window.xiangqv.background) ui.background.setBackgroundImage(window.xiangqv.background);
      }
      ui.create.me();
      'step 6';
      game.animate.window(2);
      'step 7';
      if (get.config('control')) game.addGlobalSkill('autoControl');
      game.addGlobalSkill('gl_bossBuff');
      game.addGlobalSkill('gl_playerBuff');
      for (var skill in window.xiangqv.demand) {
        var name = 'gl_level_' + skill;
        lib.skill[name] = window.xiangqv.demand[skill];
        lib.translate[name] = '';
        lib.skill[name].forceDie = true;
        lib.skill[name].forced = true;
        lib.skill[name].priority = 101;
        lib.skill[name].firstDo = true;
        game.addGlobalSkill(name);
      }
      if (window.xiangqv.init) window.xiangqv.init(game);
      'step 8';
      event.trigger('gameStart');
      'step 9';
      game.gameDraw(true, 4);
      'step 10';
      game.swapControl(game.vitalPlayer.me);
      event.dialog = ui.create.dialog('是否使用手气卡？');
      ui.create.confirm('oc');
      event.custom.replace.confirm = function (bool) {
        _status.event.bool = bool;
        game.resume();
      };
      'step 11';
      _status.imchoosing = true;
      event.switchToAuto = function () {
        _status.event.bool = false;
        game.resume();
      };
      game.pause();
      'step 12';
      _status.imchoosing = false;
      if (event.bool) {
        var hs = game.me.getCards('h');
        game.addVideo('lose', game.me, [get.cardsInfo(hs), [], [], []]);
        for (let i = 0; i < hs.length; i++) {
          hs[i].discard(false);
        }
        game.me.directgain(get.cards(hs.length));
        event.goto(11);
      } else {
        if (event.dialog) event.dialog.close();
        if (ui.confirm) ui.confirm.close();
        game.me._start_cards = game.me.getCards('h');
      }
      'step 13';
      var num = window.xiangqv.loop || 0;
      game.phaseLoop(game.players[num]);
    },
    ui: {
      updatec() {
        if (_status.noupdatec) return;
        var length = 0,
          minoffset = -Infinity;
        var controls = [];
        var widths = [];
        var leftwidths = [];
        var add = function (node, first) {
          var thiswidth = parseInt(node.style.width);
          if (thiswidth) {
            thiswidth += 8;
            length += thiswidth;
            if (first) {
              leftwidths.push(thiswidth);
            } else {
              widths.push(thiswidth);
            }
          } else {
            length += node.offsetWidth;
            if (first) {
              leftwidths.push(node.offsetWidth);
            } else {
              widths.push(node.offsetWidth);
            }
          }
          if (first) {
            controls.unshift(node);
          } else {
            controls.push(node);
          }
        };
        widths = leftwidths.concat(widths);
        var staylefts = [];
        for (let i = 0; i < ui.control.childNodes.length; i++) {
          if (ui.control.childNodes[i].classList.contains('removing')) continue;
          if (lib.config.wuxie_right && ui.control.childNodes[i].stayleft) {
            staylefts.push(ui.control.childNodes[i]);
          } else {
            add(ui.control.childNodes[i]);
          }
        }
        if (staylefts.length) {
          var fullwidth = 0;
          var fullright = game.layout == 'long' || game.layout == 'long2' || game.chess || game.layout != 'nova' && parseInt(ui.arena.dataset.number) <= 5;
          for (let i = 0; i < widths.length; i++) {
            fullwidth += widths[i] + 6;
            if (get.is.phoneLayout()) fullwidth += 6;
          }
          fullwidth /= 2;
          var currentLeft = 0;
          for (var stayleft of staylefts) {
            stayleft.currentLeft = currentLeft;
            fullwidth += stayleft.offsetWidth;
            currentLeft += stayleft.offsetWidth;
            if (get.is.phoneLayout()) {
              fullwidth += 18;
              currentLeft += 18;
            } else {
              fullwidth += 12;
              currentLeft += 12;
            }
          }
          if (fullright) {
            fullwidth += 124;
          } else {
            fullwidth += 154;
          }
          for (var stayleft of staylefts) {
            if (game.layout != 'default' && game.layout != 'newlayout') {
              var current_offset = stayleft._offset;
              if (fullright) {
                stayleft._offset = Math.ceil(-ui.arena.offsetWidth / 2) + 135;
              } else {
                stayleft._offset = Math.ceil(-ui.arena.offsetWidth / 2) + 165;
              }
              stayleft._offset += stayleft.currentLeft;
              if (current_offset != stayleft._offset) {
                stayleft.addTempClass('controlpressdownx', 500);
                stayleft.style.transform = 'translateX(' + stayleft._offset + 'px)';
              }
            } else {
              add(stayleft, true);
            }
          }
          if (staylefts.length && controls.length) {
            var last = staylefts[staylefts.length - 1];
            minoffset = last._offset + last.offsetWidth + (get.is.phoneLayout() ? 18 : 12);
          }
        }
        if (!controls.length) return;
        var offset = -length / 2;
        if (minoffset > offset) offset = minoffset;
        var control = controls.shift();
        if (control._offset != offset) {
          control.addTempClass('controlpressdownx', 500);
          control.style.transform = 'translateX(' + offset + 'px)';
          control._offset = offset;
        }
        while (controls.length) {
          var control = controls.shift();
          var width = widths.shift();
          offset += width + 6;
          if (get.is.phoneLayout()) {
            offset += 6;
          }
          if (control._offset != offset) {
            control.addTempClass('controlpressdownx', 500);
            control.style.transform = 'translateX(' + offset + 'px)';
            control._offset = offset;
          }
        }
      }
    },
    game: {
      gl_avatarList: ['gl_aikesi', 'gl_famu', 'gl_aida', 'gl_ailuoweisi', 'gl_sade', 'gl_kali', 'gl_leina', 'gl_aileina', 'cancel2'],
      syncMenu: true,
      xiangqv: [],
      levelNum: 0,
      vitalPlayer: {},
      playBackgroundMusic() {
        if (lib.config.background_music == 'music_off') {
          ui.backgroundMusic.src = '';
        } else if (game.boss) {
          ui.backgroundMusic.src = 'extension/格林笔记/bgm/boss.mp3';
        } else if (window.xiangqv) {
          ui.backgroundMusic.src = 'extension/格林笔记/bgm/battle.mp3';
        } else {
          ui.backgroundMusic.src = 'extension/格林笔记/bgm/bgm.mp3';
        }
      },
      gameDraw(bool, num) {
        var next = game.createEvent('gameDraw', bool ? true : false);
        next.player = game.me;
        if (num > 0) {
          next.num = num;
        } else {
          next.num = 4;
        }
        next.setContent('gameDraw');
        return next;
      },
      checkResult() {
        if (
        !game.hasPlayer(function (current) {
          return current.identity == 'nei';
        }))
        {
          game.over(false);
        }
      },
      nextLevel(num) {
        var players = game.players.concat(game.dead);
        var cards;
        for (let i = 0; i < players.length; i++) {
          if (players[i] != game.me && !players[i].noRemove) {
            cards = players[i].getCards('hejsx');
            for (var j = 0; j < cards.length; j++) {
              cards[j].discard();
            }
            game.removePlayer(players[i]);
            if (_status.event.player == players[i]) delete _status.event.player;
          }
        }
        if (window.xiangqv.level) {
          for (var skill in window.xiangqv.level[game.levelNum].demand) {
            var name = 'gl_level_' + skill;
            game.removeGlobalSkill(name);
          }
        }
        ui.arena.setNumber(8);
        if (typeof num == 'number') {
          game.levelNum = num;
        } else if (!num) {
          game.levelNum++;
        }
        if (Array.isArray(num)) {
          var data = {
            beyond: num
          };
        } else {
          var data = window.xiangqv.level[game.levelNum];
        }
        if (data.background) ui.background.setBackgroundImage('extension/格林笔记/map/' + data.background);
        for (var i in data.beyond) {
          var player = ui.create.player();
          var beyond = data.beyond[i];
          player.dataset.position = beyond.position || i;
          player.getId();
          for (var j in beyond) {
            if (j == 'name') {
              player.init(beyond[j]).addTempClass('start');
              game.vitalPlayer[beyond[j]] = player;
            } else if (j == 'identity') {
              player.setIdentity(beyond[j]);
              player.identity = beyond[j];
              if (player.identity == 'zhu') {
                game.boss = player;
                game.playBackgroundMusic();
              }
            } else if (j == 'init') {
              beyond[j](player);
            }
          }
          game.players.push(player);
          if (player.seatNum == 0) {
            player.gl_setSeatNum(game.players.length);
          }
          ui.arena.appendChild(player);
        }
        for (var skill in data.demand) {
          var name = 'gl_level_' + skill;
          lib.skill[name] = data.demand[skill];
          lib.translate[name] = '';
          lib.skill[name].forceDie = true;
          lib.skill[name].forced = true;
          lib.skill[name].priority = 101;
          lib.skill[name].firstDo = true;
          game.addGlobalSkill(name);
        }
        if (game.levelNum != 0) game.gameDraw(game.players[game.players.length], 4);
        game.arrangePlayers();
      },
      addPlayer(position, character, character2) {
        if (position < 0 || position > game.players.length + game.dead.length || position == undefined) {
          position = Math.ceil(Math.random() * (game.players.length + game.dead.length));
        }
        var players = game.players.concat(game.dead);
        ui.arena.setNumber(players.length + 1);
        for (let i = 0; i < players.length; i++) {
          if (parseInt(players[i].dataset.position) >= position) {
            players[i].dataset.position = parseInt(players[i].dataset.position) + 1;
          }
        }
        var player = ui.create.player(ui.arena).addTempClass('start');
        player.getId();
        if (character) player.init(character, character2);
        game.players.push(player);
        if (player.seatNum == 0) {
          player.gl_setSeatNum(game.players.length);
        }
        if (!player._hookTrigger) {
          player._hookTrigger = [];
        }
        player._hookTrigger.add('gl_bossBuff');
        player.dataset.position = position;
        game.arrangePlayers();
        return player;
      },
      removePlayer(player) {
        if (_status.roundStart == player) {
          _status.roundStart = player.next || player.next || game.players[0];
        }
        var players = game.players.concat(game.dead);
        player.style.left = player.getLeft() + 'px';
        player.style.top = player.getTop() + 'px';
        if (player == undefined) player = game.dead[0] || game.me.next;
        var position = parseInt(player.dataset.position);
        for (let i = 0; i < players.length; i++) {
          if (parseInt(players[i].dataset.position) > position) {
            players[i].dataset.position = parseInt(players[i].dataset.position) - 1;
          }
        }
        if (player.isAlive()) {
          player.next.previous = player.previous;
          player.previous.next = player.next;
        }
        player.nextSeat.previousSeat = player.previousSeat;
        player.previousSeat.nextSeat = player.nextSeat;
        player.delete();
        game.players.remove(player);
        game.dead.remove(player);
        ui.arena.setNumber(players.length - 1);
        player.removed = true;
        setTimeout(function () {
          player.removeAttribute('style');
        }, 500);
        return player;
      },
      addCharacterPack(pack, packagename) {
        var extname = _status.extension || '扩展';
        packagename = packagename || extname;
        for (var i in pack) {
          if (i == 'mode' || i == 'forbid') continue;
          for (var j in pack[i]) {
            if (i == 'character') {
              if (!pack[i][j][4]) {
                pack[i][j][4] = [];
              }
              var imgsrc;
              if (_status.evaluatingExtension) {
                imgsrc = 'db:extension-' + extname + ':' + j + '.jpg';
              } else {
                imgsrc = 'ext:' + extname + '/' + j + '.jpg';
              }
              pack[i][j][4].push(imgsrc);
              if (pack[i][j][4].includes('boss') || pack[i][j][4].includes('hiddenboss')) {
                lib.config.forbidai.add(j);
              }
              if (lib.config.forbidai_user && lib.config.forbidai_user.includes(j)) {
                lib.config.forbidai.add(j);
              }
              for (var l = 0; l < pack[i][j][3].length; l++) {
                lib.skilllist.add(pack[i][j][3][l]);
              }
            } else if (i == 'skill') {
              if (typeof pack[i][j].audio == 'number' || typeof pack[i][j].audio == 'boolean') {
                pack[i][j].audio = 'ext:' + extname + ':' + pack[i][j].audio;
              }
            }
            lib[i][j] = pack[i][j];
          }
        }
        var packname = 'mode_extension_' + packagename;
        lib.characterPack[packname] = pack.character;
        lib.translate[packname + '_character_config'] = packagename;
      }
    },
    element: {
      content: {
        async gameDraw(event, trigger, player) {
          if (_status.brawl && _status.brawl.noGameDraw) {
            return;
          }
          const end = event.player;
          const numx = event.num;
          do {
            if (typeof event.num == 'function') {
              numx = event.num(event.player);
            }
            if (event.player.getTopCards) {
              event.player.directgain(event.player.getTopCards(numx));
            } else
            {
              event.player.directgain(get.cards(numx));
            }
            event.player._start_cards = event.player.getCards('h');
            event.player = event.player.next;
          } while (event.player != end);
        }
      },
      player: {
        gl_setSeatNum(num) {
          _status.seatNumSettled = true;
          game.broadcastAll(
            function (player, num) {
              player.seatNum = num;
            },
            this,
            num
          );
        },
        dieAfter() {
          game.checkResult();
        },
        removeSkill(skill) {
          if (get.intensify(this) && lib.character[this.name][3].includes(skill)) {
            return skill;
          }
          return lib.gl_element.removeSkill.apply(this, arguments);
        },
        reinit(from, to, maxHp, online) {
          if (get.intensify(this) || this.noInit) {
            return this;
          }
          return lib.gl_element.reinit.apply(this, arguments);
        },
        uninit() {
          if (get.intensify(this) || this.noInit) {
            return this;
          }
          return lib.gl_element.uninit.apply(this, arguments);
        },
        disableSkill(skill, skills) {
          if (get.intensify(this) && lib.character[this.name][3].includes(skills)) {
            return this;
          }
          return lib.gl_element.disableSkill.apply(this, arguments);
        },
        clearSkills(all) {
          if (get.intensify(this)) {
            return [];
          }
          return lib.gl_element.clearSkills.apply(this, arguments);
        },
        awakenSkill(skill, nounmark) {
          if (get.intensify(this) && lib.character[this.name][3].includes(skill)) {
            return this;
          }
          return lib.gl_element.awakenSkill.apply(this, arguments);
        }
      }
    },
    card: {},
    cardPack: {},
    skill: {
      hundun_mishu: {
        init(player) {
          var next = game.createEvent('hundun_mishu', false);
          next.player = player;
          next.setContent(lib.skill.hundun_mishu.content);
          return next;
        },
        list: {
          shu: ['jizhi'],
          wei: ['spzhuilie', 'hundun_zhanyi', 'reshangshi'],
          wu: ['hundun_kurou', 'zhaxiang', 'buyi'],
          qun: ['hundun_liushi', 'fuqi', 'hundun_moukui'],
          jin: [],
          key: []
        },
        forced: true,
        content() {
          if (!player.group) return;
          var skills = lib.skill.hundun_mishu.list[player.group];
          if (!skills) skills = [];
          player.addAdditionalSkill('hundun_mishu', skills);
        },
        mod: {
          cardname(card, player, name) {
            if (player.group == 'wei' && get.type(card) != 'basic') return 'sha';
          },
          cardEnabled2(card, player) {
            if (player.group == 'wu' && get.type(card) != 'basic') return false;
          }
        }
      },
      hundun_zhanyi: {
        enable: 'phaseUse',
        usable: 1,
        audio: 'zhanyi',
        filterCard: true,
        position: 'he',
        check(card) {
          var player = _status.event.player;
          var type = get.type(card, 'trick');
          if (type == 'basic') {
            return 13 - get.value(card);
          }
          return 0;
        },
        content() {
          player.loseHp();
          switch (get.type(cards[0], 'trick')) {
            case 'basic':
              player.addTempSkill('zhanyi_basic');
              break;
            case 'equip':
              player.addTempSkill('zhanyi_equip');
              break;
            case 'trick':
              player.addTempSkill('zhanyi_trick');
              player.draw(2);
              break;
          }
        },
        ai: {
          order: 9.1,
          result: {
            player: 1
          }
        }
      },
      hundun_moukui: {
        trigger: {
          player: 'useCardToPlayered'
        },
        forced: true,
        filter(event, player) {
          return event.card && event.card.name == 'sha';
        },
        audio: 'moukui',
        content() {
          'step 0';
          var controls = ['draw_card'];
          if (trigger.target.countCards('he')) {
            controls.push('discard_card');
          }
          controls.push('cancel');
          player.
          chooseControl(controls).
          set('ai', function () {
            return 'draw_card';
          }).
          set('prompt', get.prompt2('moukui'));
          'step 1';
          if (result.control == 'draw_card') {
            player.draw();
          } else if (result.control == 'discard_card' && trigger.target.countCards('he')) {
            player.discardPlayerCard(trigger.target, 'he', true);
          } else event.finish();
          'step 2';
          player.addTempSkill('moukui2', 'shaEnd');
        },
        ai: {
          expose: 0.1
        }
      },
      hundun_liushi: {
        audio: 'ext:格林笔记/audio:2',
        enable: 'phaseUse',
        filter(event, player) {
          return (
            player.countCards('he', {
              suit: 'heart'
            }) > 0);

        },
        filterCard: {
          suit: 'heart'
        },
        position: 'he',
        filterTarget(card, player, target) {
          return player.canUse('sha', target, false);
        },
        check(card) {
          return 15 - get.value(card);
        },
        discard: false,
        prepare: 'throw',
        loseTo: 'cardPile',
        visible: true,
        insert: true,
        content() {
          game.log(player, '将', cards, '置于牌堆顶');
          player.useCard(
            {
              name: 'sha'
            },
            false,
            targets
          ).card.cxliushi = true;
        },
        group: 'hundun_liushi_damage',
        subSkill: {
          damage: {
            trigger: {
              source: 'damageSource'
            },
            forced: true,
            popup: false,
            filter(event, player) {
              return event.card && event.card.cxliushi == true && event.player.isAlive() && event.getParent(3).name == 'cxliushi';
            },
            content() {
              trigger.player.addMark('cxliushi2', 1);
              trigger.player.addSkill('cxliushi2');
            }
          }
        },
        ai: {
          order: 10,
          result: {
            target(player, target) {
              var eff = get.effect(
                target,
                {
                  name: 'sha'
                },
                player,
                target
              );
              return eff - 5;
            }
          }
        }
      },
      hundun_kurou: {
        enable: 'phaseUse',
        prompt: '失去一点体力并摸两张牌',
        content() {
          'step 0';
          player.loseHp(1);
          'step 1';
          player.draw(2);
        },
        ai: {
          basic: {
            order: 1
          },
          result: {
            player: 10
          }
        }
      },
      gl_playerBuff: {
        group: ['gl_playerBuff_niepan'],
        subSkill: {
          niepan: {
            enable: 'chooseToUse',
            filter(event, player) {
              if (game.complexity != 'simple') return false;
              if (player.identity != 'nei') return false;
              if (game.gl_niepan) return false;
              if (event.type == 'dying') {
                if (player != event.dying) return false;
                return true;
              } else if (event.parent.name == 'phaseUse') {
                return true;
              }
              return false;
            },
            content() {
              'step 0';
              game.gl_niepan = true;
              player.discard(player.getCards('hej'));
              'step 1';
              player.link(false);
              'step 2';
              player.turnOver(false);
              'step 3';
              player.draw(9);
              'step 4';
              if (player.hp < player.maxhp) {
                player.hp = player.maxHp;
              }
              'step 5';
              player.resetSkills();
              'step 6';
              const evt = _status.event.getParent('phase', true);
              if (evt) {
                evt.finish();
              }
            }
          }
        }
      },
      gl_bossBuff: {
        hookTrigger: {
          block(event, player, name, skill) {
            if (game.complexity != 'simple') return false;
            if ((player.getStat('skill').gl_bossBuff || 0) < 20) return false;
            if (game.expandSkills(player.getSkills(false, false)).includes(skill)) return true;
          }
        },
        trigger: {
          player: ['dieBefore', 'damageBegin4', 'logSkill', 'useSkillAfter']
        },
        filter(event, player) {
          if (!get.intensify(player)) return false;
          if (event.name == 'damage') return true;
          if (event.name == 'die' && player.hp > 0) return true;
          return player == game.boss && game.complexity == 'simple';
        },
        forced: true,
        content() {
          if (trigger.name == 'damage') {
            if (trigger.source && !get.intensify(trigger.source)) {
              trigger.source.damage(trigger.num, 'notrigger');
              player.popup('荆棘', 'fire');
            } else {
              trigger.cancel();
              player.popup('天纵', 'fire');
            }
          } else if (trigger.name == 'die' && player.hp > 0) {
            trigger.cancel();
            player.popup('不屈', 'fire');
          } else {
            if (!player.getStat('skill').gl_bossBuff) player.getStat('skill').gl_bossBuff = 0;
            player.getStat('skill').gl_bossBuff++;
          }
        },
        mod: {
          gl_power(player, num) {
            if (game.complexity == 'difficult' && player.identity == 'nei') return num - 100;
            if (get.intensify(player)) return num + 100;
          },
          gl_defense(player, num) {
            if (game.complexity == 'difficult' && player.identity == 'nei') return num - 100;
            if (get.intensify(player)) return num + 100;
          },
          gl_recover(player, num) {
            if (game.complexity == 'difficult' && player.identity == 'nei') return num - 100;
            if (get.intensify(player)) return num + 100;
          },
          gl_magic(player, num) {
            if (game.complexity == 'difficult' && player.identity == 'nei') return num - 100;
            if (get.intensify(player)) return num + 100;
          }
        }
      },
      autoControl: {
        firstDo: true,
        trigger: {
          player: ['playercontrol', 'chooseToUseBegin', 'chooseToRespondBegin', 'chooseToDiscardBegin', 'chooseToCompareBegin', 'chooseButtonBegin', 'chooseCardBegin', 'chooseTargetBegin', 'chooseCardTargetBegin', 'chooseControlBegin', 'chooseBoolBegin', 'choosePlayerCardBegin', 'discardPlayerCardBegin', 'gainPlayerCardBegin', 'chooseToMoveBegin', 'chooseToPlayBeatmapBegin']
        },
        forced: true,
        _priority: 100,
        forceDie: true,
        popup: false,
        filter(event, player) {
          if (event.autochoose && event.autochoose()) return false;
          if (lib.filter.wuxieSwap(event)) return false;
          return player.identity == 'nei';
        },
        content() {
          game.swapControl(player);
          for (const i of game.players) {
            i.classList.remove('current_action');
          }
          game.me.classList.add('current_action');
          game.me.node.action.innerHTML = '行动';
        }
      },
      gl_hundun: {
        trigger: {
          player: ['turnOverBefore', 'linkBefore']
        },
        _priority: 101,
        forced: true,
        firstDo: true,
        content() {
          trigger.cancel();
        },
        mod: {
          targetEnabled(card, player, target) {
            if (get.type(card) == 'delay') {
              return false;
            }
          }
        },
        ai: {
          noturn: true,
          effect: {
            target(card) {
              if (card.name == 'tiesuo') return 'zeroplayertarget';
            }
          }
        }
      }
    },
    character: {
      hundun_villain: ['none', 'jin', 5, ['gl_hundun'], ['ext:格林笔记/character/hundun_villain.jpg']],
      hundun_shitu: ['none', 'jin', 5, ['hundun_mishu'], ['ext:格林笔记/character/hundun_shitu.jpg']]
    },
    translate: {
      zhu: '混沌',
      fan: '混乱',
      zhong: '秩序',
      nei: '调律',
      gl_playerBuff_niepan: '涅槃',
      gl_hundun: '混沌',
      gl_hundun_info: '锁定技,你不能被翻面、横置;你不是延迟锦囊牌的合法目标',
      hundun_villain: '混沌之仆',
      hundun_shitu: '混沌使徒',
      hundun_kurou: '苦肉',
      hundun_kurou_info: '出牌阶段,你可以失去一点体力,然后摸两张牌',
      hundun_mishu: '秘术',
      hundun_mishu_info: '灰烬教团的不传秘术,可以透支生命短时间内大幅度提升力量',
      hundun_liushi: '流矢',
      hundun_liushi_info: '出牌阶段,你可以将一张♥️️️牌置于牌堆顶,视为对一名角色使用一张【杀】(无距离限制且不计入使用次数).当此【杀】造成伤害后,受到伤害的角色获得一个<流>.有<流>的角色手牌上限-X(X为其<流>数)',
      hundun_moukui: '谋溃',
      hundun_moukui_info: '当你使用【杀】指定目标后,你可以选择一项:摸一张牌,或弃置其一张牌.若如此做,当此【杀】被【闪】抵消时,目标角色弃置你的一张牌'
    },
    get: {
      demand(...args) {
        for (const i of args) {
          if (i.indexOf('no_') == 0) {
            if (game.xiangqv.includes(i.slice(3))) return false;
          } else if (!game.xiangqv.includes(i)) {
            return false;
          }
        }
        return true;
      }, //QQQ
      intensify(player) {
        if (player.identity == 'nei') return false;
        if (player.identity == 'zhong') return false;
        return game.complexity == 'difficult';
      },
      rawAttitude(from, to) {
        var num = 0;
        if (from.identity == 'zhu') {
          switch (to.identity) {
            case 'zhong':
              num = -5;
              break;
            case 'fan':
              num = 10;
              break;
            case 'nei':
              num = -5;
              break;
            case 'zhu':
              num = 10;
              break;
          }
        }
        if (from.identity == 'zhong') {
          switch (to.identity) {
            case 'zhu':
              num = -5;
              break;
            case 'fan':
              num = -5;
              break;
            case 'nei':
              num = 5;
              break;
            case 'zhong':
              num = 5;
              break;
          }
        }
        if (from.identity == 'nei') {
          switch (to.identity) {
            case 'zhong':
              num = 5;
              break;
            case 'fan':
              num = -10;
              break;
            case 'nei':
              num = 10;
              break;
            case 'zhu':
              num = -10;
              break;
          }
        }
        if (from.identity == 'fan') {
          switch (to.identity) {
            case 'zhong':
              num = -10;
              break;
            case 'fan':
              num = 10;
              break;
            case 'nei':
              num = -10;
              break;
            case 'zhu':
              num = 10;
              break;
          }
        }
        return num;
      }
    },
    startBefore() {}
  };
  var info2 = {
    translate: '想区',
    config: {
      control: {
        name: '多人控制',
        intro: '是否能够在想区模式中控制其他的调律行动',
        init: true
      },
      complexity: {
        name: '游戏难度',
        init: 'ordinary',
        item: {
          simple: '宝宝童话',
          ordinary: '真实世界',
          difficult: '暗黑次元'
        },
        onclick(item) {
          if (!lib.config.mode_config.xiangqv) lib.config.mode_config.xiangqv = {};
          if (item == 'simple') {
            lib.config.mode_config.xiangqv.complexity = 'ordinary';
            game.saveConfig('mode_config', lib.config.mode_config);
            galgame.sces({
              shijian: 'chaoxiao',
              pause: false
            });
          } else {
            lib.config.mode_config.xiangqv.complexity = item;
            game.saveConfig('mode_config', lib.config.mode_config);
          }
        }
      }
    },
    onremove() {
      game.clearModeConfig('xiangqv');
    }
  };
  return game.addMode('xiangqv', info, info2);
}