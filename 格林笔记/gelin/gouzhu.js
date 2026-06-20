export function initGouzhu(lib, game, ui, get, ai, _status, datasrc) {
  lib.init.css('extension/' + datasrc + '/gelin', 'gouzhu');
  //触发卡牌系统
  lib.skill.gl_triggerCard = {
    trigger: {},
    cards: {},
    direct: true,
    priority: 9,
    filter(event, player, name) {
      var cards = lib.skill.gl_triggerCard.cards;
      if (!cards[name]) return false;
      _status.gl_triggerCard = event;
      for (var i of cards[name]) {
        if (!player.hasUsableCard(i)) continue;
        if (lib.card[i].filter && !lib.card[i].filter(event, player, name)) continue;
        if (
        !lib.card[i].notarget &&
        !game.hasPlayer(function (current) {
          return lib.filter.targetEnabled(
            {
              name: i
            },
            player,
            current
          );
        }))

        continue;
        for (var j in lib.card[i].trigger) {
          if (event[j] != player && j != 'global') continue;
          var trigger = lib.card[i].trigger[j];
          if (trigger == name || Array.isArray(trigger) && trigger.includes(name)) {
            return true;
          }
        }
      }
      delete _status.gl_triggerCard;
      return false;
    },
    content() {
      'step 0';
      var next = player.chooseToUse(function (card, player) {
        var name = get.name(card);
        if (!lib.skill.gl_triggerCard.cards[event.triggername].includes(name)) return false;
        if (lib.card[name].filter && !lib.card[name].filter(trigger, player, event.triggername)) return false;
        for (var i in lib.card[name].trigger) {
          if (trigger[i] != player && i != 'global') continue;
          var tig = lib.card[name].trigger[i];
          if (tig == event.triggername || Array.isArray(tig) && tig.includes(event.triggername)) {
            return lib.filter.cardEnabled(card, player, 'forceEnable');
          }
        }
        return false;
      });
      next.onresult = function (result) {
        result._apply_args = {
          customArgs: {
            default: {
              _trigger: trigger
            }
          }
        };
      };
      'step 1';
      if (result.bool && lib.skill.gl_triggerCard.filter(trigger, player, event.triggername)) {
        event.goto(0);
      }
    }
  };
  lib.translate.gl_triggerCard = '卡牌';
  game.gl_triggerUp = function (pack) {
    game.removeGlobalSkill('gl_triggerCard');
    var info = lib.skill.gl_triggerCard;
    var trigger, card;
    for (var name of lib.cardPack[pack]) {
      card = lib.card[name];
      for (var i in card.trigger) {
        if (!info.trigger[i]) info.trigger[i] = [];
        if (Array.isArray(card.trigger[i])) {
          for (var j of card.trigger[i]) {
            trigger = card.trigger[i][j];
            info.trigger[i].add(trigger);
            if (!info.cards[trigger]) info.cards[trigger] = [];
            info.cards[trigger].add(name);
          }
        } else {
          trigger = card.trigger[i];
          info.trigger[i].add(trigger);
          if (!info.cards[trigger]) info.cards[trigger] = [];
          info.cards[trigger].add(name);
        }
      }
    }
    game.addGlobalSkill('gl_triggerCard');
  };
  for (var pack of lib.gl_custom.triggerUp) {
    game.gl_triggerUp(pack);
  }
  lib.element.card.inits.push(function (card) {
    if (!card.name) return;
    if (!card.node.sp) {
      card.node.sp = ui.create.div(ui.create.div('.gl_sp', card));
    }
    if (lib.card[card.name] && lib.card[card.name].gl_sp) {
      card.node.sp.parentNode.show();
    } else {
      card.node.sp.parentNode.hide();
    }
    var info = lib.card[card.name];
    if (!info.gl_material) return;
    if (!card.node.gl_mp) card.node.gl_mp = ui.create.div('.gl_cardmp', card);
    var types = get.gl_mp(card, false);
    var str = '';
    if (Object.keys(types).length == 1 && types.gl_magic) {
      str += '★' + types.gl_magic;
    } else {
      for (var type in types) {
        str += lib.translate[type] + ':' + types[type] + '</br>';
      }
    }
    card.node.gl_mp.innerHTML = str;
  });
  //设置卡牌力量
  lib.element.card.gl_changeSp = function () {};
  //设置阶段泛用修改，提高兼容性。
  lib.skill.gl_changePhase = {
    trigger: {
      player: 'phaseBeforeStart'
    },
    priority: 75,
    firstDo: true,
    forced: true,
    silent: true,
    filter(event, player) {
      var arr = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'];
      if (event.phaseList.length != arr.length) return false;
      for (var i of arr) {
        if (!event.phaseList.includes(i)) return false;
      }
      return true;
    },
    content() {
      trigger.phaseList = lib.phaseName.slice(0);
    }
  };
  game.addGlobalSkill('gl_changePhase');
  //回魔阶段
  lib.element.player.phaseSupply = function () {
    var next = game.createEvent('phaseSupply');
    next.player = this;
    next.num = 2;
    next.setContent('phaseSupply');
    return next;
  };
  lib.element.content.phaseSupply = function () {
    'step 0';
    if (event.num <= 0) {
      event.finish();
    } else {
      game.broadcastAll(function (player) {
        if (lib.config.show_phase_prompt) {
          player.popup('回魔阶段', null, false);
        }
      }, player);
    }
    event.trigger('phaseSupplyBegin1');
    game.log(player, '进入了回魔阶段');
    'step 1';
    event.link = player.gl_changeMp(event.num, 'gl_magic');
    'step 2';
    event.trigger('phaseSupplyEnd1');
    'step 3';
    event.num = event.link.num;
  };
  //配套魔力
  lib.translate.gl_magic = '魔力';
  lib.translate.gl_mp = '能力';
  lib.element.player.gl_initMp = function () {
    var player = this;
    if (!player.node.gl_mp) {
      var mp = ui.create.div('.gl_mp', player);
      var div = ui.create.div(mp);
      player.node.gl_mp = ui.create.div(div);
      player.node.gl_textMp = document.createElement('span');
      div.appendChild(player.node.gl_textMp);
      ui.refresh(player.node.gl_mp);
    }
    player.node.gl_mp.type = 'gl_magic';
    var info = lib.character[player.name1];
    if (info && info[4]) {
      for (var i of info[4]) {
        if (i.indexOf('gl_mp:') == 0) {
          var mp = i.slice(6).split('/');
          player.gl_mp = parseInt(mp[0]);
          player.gl_maxMp = parseInt(mp[1] || mp[0]);
          break;
        }
      }
    }
    if (typeof player.gl_mp != 'number') {
      player.gl_mp = get.infoHp(lib.gl_initMp || 0);
    }
    if (typeof player.gl_maxMp != 'number') {
      player.gl_maxMp = get.infoMaxHp(lib.gl_initMp || 0);
    }
    var result;
    for (var func of lib.gl_custom.mp) {
      result = func(player);
      if (result) player.gl_replaceMp(result);
    }
    player.gl_update();
    return player.node.gl_mp;
  };
  lib.element.player.inits.add(function (player) {
    lib.element.player.gl_initMp.apply(player);
  });
  //获取魔力值
  lib.element.player.gl_getMp = function (type) {
    if (type) {
      if (get.gl_typeMp(this, type)) return this.gl_mp;
      if (this.storage[type]) {
        if (typeof this.storage[type] == 'number') return this.storage[type];
        if (typeof this.storage[type] == 'object') return this.storage[type].gl_mp;
      }
      return 0;
    }
    return this.gl_mp;
  };
  lib.element.player.gl_getMaxMp = function (type) {
    if (type) {
      if (get.gl_typeMp(this, type)) return this.gl_maxMp;
      if (this.storage[type]) {
        if (typeof this.storage[type] == 'number') return Infinity;
        if (typeof this.storage[type] == 'object') return this.storage[type].gl_maxMp;
      }
      return 0;
    }
    return this.gl_mp;
  };
  //获取魔力类型，如果给type值就是判断是否为该类型的魔力，不给定则直接告知该角色的魔力类型。
  get.gl_typeMp = function (player, type) {
    if (type) {
      if (player.node.gl_mp.type == type) return true;
      return false;
    }
    return player.node.gl_mp.type;
  };
  //切换能力条
  //实例：player.gl_replaceMp({name:'nuqi',color:'linear-gradient(#ff5500, #ff0000)',color2:'linear-gradient(#ffff00, #b4b400)',gl_mp:10,gl_maxMp:20});
  lib.element.player.gl_replaceMp = function (result, name) {
    var type = get.gl_typeMp(this);
    if (type) {
      if (this.node.gl_mp.color || this.node.gl_mp.color2 || this.gl_maxMp != Infinity) {
        if (!this.storage[type]) this.storage[type] = {};
        var storage = this.storage[type];
        storage.color = this.node.gl_mp.color;
        storage.color2 = this.node.gl_mp.color2;
        storage.pop = this.node.gl_mp.pop;
        storage.gl_mp = this.gl_mp;
        storage.gl_maxMp = this.gl_maxMp;
      } else {
        this.storage[type] = this.gl_mp;
      }
      this.syncStorage(type);
    }
    if (typeof result == 'number') {
      this.gl_mp = result;
      this.gl_maxMp = Infinity;
    } else if (typeof result == 'object') {
      this.node.gl_mp.color = result.color;
      this.node.gl_mp.color2 = result.color2;
      this.node.gl_mp.pop = result.pop;
      this.gl_mp = result.gl_mp;
      this.gl_maxMp = result.gl_maxMp || Infinity;
    }
    this.node.gl_mp.type = name || result.type;
    this.gl_update();
  };
  //更新样式，没实际作用但别动。
  lib.element.player.gl_update = function () {
    game.broadcast(
      function (player, gl_mp, gl_maxMp, type, color, color2) {
        if (!player.node.gl_mp) player.gl_initMp();
        player.gl_mp = gl_mp;
        player.gl_maxMp = gl_maxMp;
        player.node.gl_mp.type = type;
        player.node.gl_mp.color = color;
        player.node.gl_mp.color2 = color2;
        player.$gl_update();
      },
      this,
      this.gl_mp,
      this.gl_maxMp,
      this.node.gl_mp.type,
      this.node.gl_mp.color,
      this.node.gl_mp.color2
    );
    this.$gl_update();
  };
  lib.element.player.$gl_update = function () {
    var num;
    if (this.gl_maxMp == 0) {
      if (this.gl_mp > 0) {
        num = 101;
      } else {
        num = 100;
      }
    } else if (this.gl_maxMp == Infinity) {
      num = 0;
      if (this.gl_mp == Infinity) num = 100;
    } else {
      num = this.gl_mp / this.gl_maxMp * 100;
    }
    this.node.gl_textMp.innerHTML = (this.gl_mp == Infinity ? '∞' : this.gl_mp) + '/' + (this.gl_maxMp == Infinity ? '∞' : this.gl_maxMp);
    if (num > 100) {
      num = 100;
      this.node.gl_mp.style.background = this.node.gl_mp.color2 || 'linear-gradient(#ff5500, #ff0000)';
    } else {
      this.node.gl_mp.style.background = this.node.gl_mp.color || '';
    }
    this.node.gl_mp.style.width = num + '%';
    if (this.gl_maxMp == 0 && this.gl_mp == 0) {
      this.node.gl_mp.parentNode.hide();
    } else {
      this.node.gl_mp.parentNode.show();
    }
  };
  //魔力值发生改变，如果传入字符串作为type则只会对对应的能力值进行调整，否则为无差别调整。
  lib.element.player.gl_changeMp = function () {
    var next = game.createEvent('gl_changeMp');
    next.player = this;
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == 'string') {
        next.type = arguments[i];
      } else if (typeof arguments[i] == 'number') {
        next.num = arguments[i];
      }
    }
    if (!next.num) next.num = 1;
    if (next.type && get.gl_typeMp(this) != next.type) {
      var storage = this.storage[next.type];
      if (!storage || typeof storage != 'number' && (typeof storage != 'object' || typeof storage.gl_mp != 'number')) {
        _status.event.next.remove(next);
      }
    }
    next.setContent('gl_changeMp');
    return next;
  };
  lib.element.content.gl_changeMp = function () {
    if (event.type && get.gl_typeMp(player) != event.type) {
      var storage = player.storage[event.type];
      if (storage && (typeof storage == 'number' || typeof storage == 'object' && typeof storage.gl_mp == 'number')) {
        player.gl_replaceMp(storage, event.type);
      }
    }
    var maxMp = game.checkMod(player, player.gl_maxMp, 'gl_maxMp', player);
    if (num > maxMp - player.gl_mp) {
      num = maxMp - player.gl_mp;
      if (num < 0) num = 0;
      event.num = num;
    }
    if (num < 0 && -num > player.gl_mp) {
      num = -player.gl_mp;
      event.num = num;
    }
    if (num == 0) return;
    player.$damagepop(num, player.node.gl_mp.pop || 'mp');
    game.log(player, (num > 0 ? '回复' : '消耗') + '了' + get.cnNumber(Math.abs(num)) + '点' + get.translation(player.node.gl_mp.type || 'gl_mp'));
    player.gl_mp += num;
    player.gl_update();
  };
  //魔力上限发生改变，如果传入字符串作为type则只会对对应的能力值进行调整，否则为无差别调整。
  lib.element.player.gl_changeMaxMp = function () {
    var next = game.createEvent('gl_changeMaxMp');
    next.player = this;
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == 'string') {
        next.type = arguments[i];
      } else if (typeof arguments[i] == 'number') {
        next.num = arguments[i];
      }
    }
    if (!next.num) next.num = 1;
    if (next.type && get.gl_typeMp(this) != next.type) {
      var storage = this.storage[next.type];
      if (!storage || typeof storage != 'number' && (typeof storage != 'object' || typeof storage.gl_mp != 'number')) {
        _status.event.next.remove(next);
      }
    }
    next.setContent('gl_changeMaxMp');
    return next;
  };
  lib.element.content.gl_changeMaxMp = function () {
    if (event.type && get.gl_typeMp(player) != event.type) {
      var storage = player.storage[event.type];
      if (storage && (typeof storage == 'number' || typeof storage == 'object' && typeof storage.gl_mp == 'number')) {
        player.gl_replaceMp(storage, event.type);
      }
    }
    game.log(player, (num > 0 ? '获得' : '失去') + '了' + get.cnNumber(Math.abs(num)) + '点' + get.translation(player.node.gl_mp.type || 'gl_mp') + '上限');
    if (num < 0 && -num > player.gl_maxMp) {
      num = -player.gl_maxMp;
      event.num = num;
    }
    if (num == 0) return;
    player.gl_maxMp += num;
    player.gl_update();
  };
  //魔力值是否为全场最大，传入equal则判定是否为唯一最大。
  lib.element.player.gl_isMaxMp = function (equal, type) {
    for (var current of game.players) {
      if (current.isOut() || current == this) continue;
      if (equal) {
        if (current.gl_getMp(type) >= this.gl_getMp(type)) return false;
      } else {
        if (current.gl_getMp(type) > this.gl_getMp(type)) return false;
      }
    }
    return true;
  };
  //魔力上限是否为全场最大，传入equal则判定是否为唯一最大。
  lib.element.player.gl_isMinMp = function (equal, type) {
    for (var current of game.players) {
      if (current.isOut() || current == this) continue;
      if (equal) {
        if (current.gl_getMaxMp(type) >= this.gl_getMaxMp(type)) return false;
      } else {
        if (current.gl_getMaxMp(type) > this.gl_getMaxMp(type)) return false;
      }
    }
    return true;
  };
  //查询构筑的历史，all的值为true的话，则查询所有构筑历史;
  lib.element.player.getGouzhuHistory = function (filter, all) {
    if (all) {
      return player.getAllHistory('custom', function (event) {
        if (event.name != 'gl_gouzhu') return false;
        return filter(event);
      });
    }
    return player.getHistory('custom', function (event) {
      if (event.name != 'gl_gouzhu') return false;
      return filter(event);
    });
  };
  //进行非常规构筑
  lib.element.player.gl_useGouzhu = function () {
    var next = game.createEvent('gl_useGouzhu');
    next.player = this;
    next.setContent('gl_useGouzhu');
    return next;
  };
  lib.element.content.gl_useGouzhu = function () {
    'step 0';
    var info = lib.skill.gl_gouzhu;
    var dialog = info.chooseButton.dialog(event, player);
    var next = player.chooseButton(dialog);
    next.set('selectButton', info.chooseButton.select);
    next.set('filterButton', info.chooseButton.filter);
    next.set('ai', info.chooseButton.check);
    next.set('filterOk', info.chooseButton.filterOk);
    'step 1';
    if (result.bool) {
      var info = lib.skill.gl_gouzhu.chooseButton;
      lib.skill.gl_gouzhu_backup = info.backup(result.links, player);
      lib.skill.gl_gouzhu_backup.sourceSkill = 'gl_gouzhu';
    } else {
      event.finish();
    }
    'step 2';
    var info = lib.skill.gl_gouzhu_backup;
    var dialog = info.chooseButton.dialog(event, player);
    var next = player.chooseButton(dialog);
    next.set('selectButton', info.chooseButton.select);
    next.set('filterButton', info.chooseButton.filter);
    next.set('ai', info.chooseButton.check);
    next.set('filterOk', info.chooseButton.filterOk);
    'step 3';
    if (result.bool) {
      var info = lib.skill.gl_gouzhu_backup.chooseButton;
      lib.skill.gl_gouzhu_backup_backup = info.backup(result.links, player);
      lib.skill.gl_gouzhu_backup_backup.sourceSkill = 'gl_gouzhu_backup';
      var next = game.createEvent('gl_gouzhu_backup');
      next.player = player;
      next.setContent(lib.skill.gl_gouzhu.contentx);
      player.logSkill('gl_gouzhu_backup');
    }
  };
  //获取本回合进行构筑的次数，若key值为字符串，则获取指定卡名的构筑次数，若key值为true，则获取常规构筑的次数
  lib.element.player.getGouzhuCount = function (key) {
    var stat = player.getStat().gl_gouzhu;
    if (!stat) return 0;
    var num = stat.num;
    if (key === true) {
      num = stat.num2;
    }
    if (typeof key == 'string') {
      num = stat[key];
    }
    if (typeof num) return num;
    return 0;
  };
  //构筑系统
  lib.element.player.gl_gouzhu = function (names, cards, mp) {
    var next = game.createEvent('glGouzhu');
    next.player = this;
    if (Array.isArray(names)) {
      next.names = names.slice(0);
    } else if (typeof names == 'string') {
      next.names = [names];
    } else {
      next.names = ['sha'];
    }
    if (Array.isArray(cards)) {
      next.cards = cards.slice(0);
    } else if (get.itemtype(arguments[i]) == 'card') {
      next.cards = [cards];
    } else {
      next.cards = [];
    }
    next.mp = mp;
    next.setContent('gl_gouzhu');
    return next;
  };
  lib.element.content.gl_gouzhu = function () {
    'step 0';
    if (!event.mp) {
      event.mp = {};
      for (var card of event.names) {
        var types = get.gl_mp(card, player);
        for (var type in types) {
          if (!event.mp[type]) event.mp[type] = 0;
          event.mp[type] += types[type];
        }
      }
    }
    for (var type in event.mp) {
      player.gl_changeMp(-event.mp[type], type);
    }
    player.lose(event.cards, ui.discardPile, 'visible').type = 'gl_gouzhu';
    game.log(player, '将', event.cards, '置入了弃牌堆');
    player.getHistory('custom').push(event);
    'step 1';
    event.resultCards = [];
    var stat = player.getStat().gl_gouzhu;
    if (!stat) {
      stat = {
        num: 0,
        num2: 0
      };
    }
    stat.num++;
    if (!event.sp) stat.num2++;
    for (var i of event.names) {
      var card = game.createCard(i);
      event.resultCards.push(card);
      card.storage.gl_gouzhu = event.cards.slice(0);
      card.storage.gl_mp = event.mp;
      if (!stat[i]) stat[i] = 0;
      stat[i]++;
    }
    if (game.me == player) player.$gl_gainCard(event.resultCards, event.cards);
    player.gain(event.resultCards);
    event.num = 0;
    'step 2';
    var name = event.resultCards[event.num].name;
    if (lib.card[name].gl_gouzhuAfter) {
      var next = game.createEvent('gl_gouzhuAfter', false);
      next.setContent(lib.card[name].gl_gouzhuAfter);
      next.resultCards = event.resultCards;
      next.player = player;
      next.card = event.resultCards[event.num];
      next.cards = event.cards;
    }
    event.num++;
    if (event.num < event.resultCards.length) {
      event.redo();
    }
  };
  //获取动态消耗
  get.gl_mp = function (card, player) {
    if (typeof card == 'string') {
      card = {
        name: card
      };
    }
    var owner;
    if (get.itemtype(player) == 'player' || player !== false && get.position(card) == 'h') {
      owner = player || get.owner(card);
    }
    var mp = lib.card[card.name].gl_mp;
    if (typeof mp == 'function') mp = mp(card, owner);
    if (typeof mp == 'number') {
      if (isNaN(mp)) mp = 0;
      mp = {
        gl_magic: mp
      };
    }
    if (owner) {
      mp = game.checkMod(owner, card, mp, 'gl_gouzhuMp', owner);
    }
    for (var type in mp) {
      if (mp[type] < 0) mp[type] = 0;
    }
    return mp;
  };
  //获取该角色允许被使用的构筑牌
  get.gl_gouzhuList = function (player) {
    const list = [];
    for (const i in lib.card) {
      if (lib.card[i].gl_material) {
        list.add(i);
      }
    }
    return game.checkMod(player, list, 'gl_gouzhuList', player);
  };
  //从数组中提取符合条件的牌，与player.getCards()类似。
  get.countCards = (list, filter) => list.filter(filter).length;
  //开始构筑吧
  lib.skill.gl_gouzhu = {
    enable: 'phaseUse',
    usable: 1,
    filter(event, player) {
      return get.gl_gouzhuList(player).length;
    },
    chooseButton: {
      dialog(event, player) {
        const list = get.gl_gouzhuList(player).map((name) => [get.translation(lib.card[name].type), '', name]);
        if (list.length == 0) {
          return ui.create.dialog('无可用牌库');
        }
        return ui.create.dialog('请选择需要构筑的卡牌', [list, 'vcard']);
      },
      filter(button, player) {
        const mp = {};
        const buttons = ui.selected.buttons.slice(0);
        buttons.push(button);
        for (var card of buttons) {
          var types = get.gl_mp(card.link[2], player);
          for (var type in types) {
            if (!mp[type]) mp[type] = 0;
            mp[type] += types[type];
          }
        }
        for (var type in mp) {
          if (player.gl_getMp(type) < mp[type]) return false;
        }
        const cards = player.getCards('hes');
        for (const obj of lib.card[button.link[2]].gl_material) {
          if (
          get.countCards(cards, function (card) {
            return obj.filter(card, player, true);
          }) < get.select(obj.num)[0])

          return false;
        }
        return true;
      },
      check(button) {
        const player = _status.event.player;
        return (player.getUseValue(button.link[2]) || 0) + 10;
      },
      backup(links, player) {
        const name = links[0][2];
        return {
          filterCard(c) {
            const arr = deepClone(lib.card[name].gl_material);
            const cards = ui.selected.cards.slice();
            const arrx = arr.filter((obj) => {
              const cardx = cards.find((c) => obj.filter(c, player));
              if (cardx) {
                cards.remove(cardx);
                obj.num--;
                if (obj.num < 1) {
                  return false;
                }
              }
              return true;
            });
            return arrx[0]?.filter(c, player);
          },
          selectCard() {
            const arr = lib.card[name].gl_material;
            const select = [0, 0];
            for (const obj of arr) {
              select[0] += get.select(obj.num)[0];
              select[1] += get.select(obj.num)[1];
            }
            return select;
          },
          position: 'he',
          check: (card) => 12 - get.value(card),
          viewAs: {
            suit: links[0][0],
            number: links[0][1],
            name: name,
            nature: links[0][3]
          }
        };
      }
    },
    ai: {
      order: 1,
      result: {
        player: 2
      }
    }
  };
  lib.translate.gl_gouzhu = '构筑';
  lib.translate.gl_gouzhu_backup = '构筑';
  lib.translate.gl_gouzhu_backup_backup = '构筑';
  game.addGlobalSkill('gl_gouzhu');
  //构筑特效
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
  lib.element.player.$gl_gainCard = function (card, cards) {
    game.pause();
    var card = card.slice(0);
    var cards = cards.slice(0);
    ui.arena.classList.add('playerfocus');
    var page = ui.create.div('.gl_gouzhu', ui.window);
    var cardNode = ui.create.div('.gl_fazhen');
    for (var i of Object.keys(lib.element.player)) {
      cardNode[i] = lib.element.player[i];
    }
    ui.arena.appendChild(cardNode);
    var player = this;
    var boolCard = function () {
      var node = card.shift().copy('thrown', false);
      node.classList.add('playerfocus');
      node.style.transform = 'scale(0) rotateX(180deg)';
      node.style.left = 'calc(50% - 52px)';
      node.style.top = 'calc(50% - 52px)';
      setTimeout(function () {
        ui.arena.appendChild(node);
        ui.refresh(node);
        node.show();
        node.style.transform = '';
        setTimeout(function () {
          node.moveDelete(player);
        }, 600);
        if (card.length == 0) {
          setTimeout(function () {
            page.remove();
            cardNode.remove();
            game.resume();
            ui.arena.classList.remove('playerfocus');
          }, 600);
        } else {
          boolCard();
        }
      }, 500);
    };
    var bool = function () {
      if (cardNode.over) return;
      cardNode.over = true;
      boolCard();
    };
    if (!_status.connectMode) {
      var event = _status.event;
      event.forceMine = true;
      event.custom.replace.window = function () {
        if (!cardNode.over) {
          delete event.forceMine;
          bool();
          cardNode.over = true;
          game.resume();
        }
      };
    }
    var moveCard = function (node, num) {
      if (cardNode.over) return;
      var node;
      node = node.copy('thrown', false);
      node.classList.add('playerfocus');
      node.fixed = true;
      var top, left;
      switch (num % 4) {
        case 1:
          left = '100%';
          top = Math.random() * 100 + '%';
          break;
        case 2:
          left = '-10%';
          top = Math.random() * 100 + '%';
          break;
        case 3:
          left = Math.random() * 100 + '%';
          top = '100%';
          break;
        case 0:
          left = Math.random() * 100 + '%';
          top = '-10%';
          break;
      }
      node.style.left = left;
      node.style.top = top;
      node.style.transform = 'scale(0)';
      node.hide();
      ui.arena.appendChild(node);
      ui.refresh(node);
      node.show();
      node.style.transform = '';
      lib.listenEnd(node);
      setTimeout(function () {
        lib.element.card.originalMoveDelete.apply(node, [cardNode]);
        if (cards.length) {
          moveCard(cards.shift(), num + 1);
        } else {
          bool();
        }
      }, 500);
    };
    if (cards && cards.length) {
      setTimeout(function () {
        moveCard(cards.shift(), 1);
      }, 300);
    } else {
      bool();
    }
  };
}