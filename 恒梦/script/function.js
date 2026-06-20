+function () {
  const { lib, game, ui, get, ai, _status } = window.hgmg;
  tmjxbnqm = function (zifuir) {
    const objy = Object.values(lib.translate);
    let str = zifuir;
    const replacements = {};
    const indexes = [];
    if (str.includes('bnqm')) {
      for (let index = 0; index < str.length; index++) {
        if (str.slice(index, index + 'bnqm'.length) === 'bnqm') {
          indexes.push(index);
        }
      }
      for (const i of indexes) {
        if (str[i + 5] == '(') {
          const yrui = str.slice(i, str.indexOf(')', i + 5) + 1);
          const skillName = str.slice(i + 4, i + 5);
          const skillInfo = str.slice(i + 5 + 1, str.indexOf(')', i + 5));
          replacements[yrui] = bnqm(skillName, skillInfo);
        } else if (str[i + 6] == '(') {
          const yrui = str.slice(i, str.indexOf(')', i + 6) + 1);
          const skillName = str.slice(i + 4, i + 6);
          const skillInfo = str.slice(i + 6 + 1, str.indexOf(')', i + 6));
          replacements[yrui] = bnqm(skillName, skillInfo);
        } else if (str[i + 7] == '(') {
          const yrui = str.slice(i, str.indexOf(')', i + 7) + 1);
          const skillName = str.slice(i + 4, i + 7);
          const skillInfo = str.slice(i + 7 + 1, str.indexOf(')', i + 7));
          replacements[yrui] = bnqm(skillName, skillInfo);
        } else if (str[i + 8] == '(') {
          const yrui = str.slice(i, str.indexOf(')', i + 8) + 1);
          const skillName = str.slice(i + 4, i + 8);
          const skillInfo = str.slice(i + 9, str.indexOf(')', i + 8));
          replacements[yrui] = bnqm(skillName, skillInfo);
        } else if (objy.includes(str.slice(i + 4, i + 8))) {
          replacements[str.slice(i, i + 8)] = bnqm(str.slice(i + 4, i + 8));
        } else if (objy.includes(str.slice(i + 4, i + 7))) replacements[str.slice(i, i + 7)] = bnqm(str.slice(i + 4, i + 7));else
        if (objy.includes(str.slice(i + 4, i + 6))) replacements[str.slice(i, i + 6)] = bnqm(str.slice(i + 4, i + 6));else
        if (objy.includes(str.slice(i + 4, i + 5))) replacements[str.slice(i, i + 5)] = bnqm(str.slice(i + 4, i + 5));
      }
    }
    for (const key of Object.keys(replacements)) {
      if (str.includes(key)) {
        str = str.replace(new RegExp(key, 'g'), replacements[key]);
      }
    }
    zifuir = str;
    return zifuir;
  };
  bnqm = function (skill, skillInfo) {
    skill = lib.translate[skill] || skill;
    skillInfo = skillInfo || lib.translate[`${get.vijm(lib.translate, skill)}_info`] || lib.translate[skill] || lib.translate[`${skill}_info`] || '无说明';
    if (get.skillInfoTranslation(get.vijm(lib.translate, skill))) {
      let str = skillInfo;
      const replacements = {
        bnqm: ''
      };
      for (const key of Object.keys(replacements)) {
        if (str.includes(key)) {
          str = str.replace(new RegExp(key, 'g'), replacements[key]);
        }
      }
      skillInfo = str;
    }
    return `
            <span style="text-decoration: underline; color: #EE82EE; cursor: pointer;" onclick="bnqmx(this, '${skillInfo}')" >
            ${skill}
            </span>
            <div style="width: 90%; display: none; position: absolute; z-index: 100; left: 0%; margin-top:2px;border-radius: 10px;color: #ccda76; background-color: rgba(36, 29, 19, 0.85); border:#523a24 2px solid; padding: 5px; text-align: left;" onclick="bnqmx(this, '${skillInfo}')"class="bnqmx"
            bnqmx-skill-info=${skillInfo}></div>
            `;
  };
  bnqmx = function (yrsu, skillInfo) {
    event.stopPropagation();
    let ts = yrsu.parentNode.querySelectorAll('.bnqmx');
    for (let i = 0; i < ts.length; i++) {
      ts[i].getAttribute('bnqmx-skill-info').toString() == skillInfo.toString() && (t = ts[i]) || (ts[i].style.display = 'none');
    }
    if (t.style.display === 'none') {
      t.innerHTML = t.getAttribute('bnqmx-skill-info');
      t.style.display = 'block';
    } else {
      t.style.display = 'none';
    }
  };
  morfuijm = function (e) {
    e.preventDefault();
  };
  yrsupgvl = function (yrsu1, yrsu2) {
    const wwvi1 = yrsu1.getBoundingClientRect(),
      wwvi2 = yrsu2.getBoundingClientRect();
    return !(wwvi2.right < wwvi1.left || wwvi2.left > wwvi1.right || wwvi2.bottom < wwvi1.top || wwvi2.top > wwvi1.bottom);
  };
  flipImageWithCSS = function () {
    let img = document.getElementById('image');
    if (document.getElementById('directionSelect').selectedIndex == 0) {
      if (img.style.transform.includes('scaleX')) {
        img.style.transform = img.style.transform.replace('scaleX(-1)', '');
      } else {
        img.style.transform = img.style.transform + ' scaleX(-1)';
      }
    } else {
      if (img.style.transform.includes('scaleY')) {
        img.style.transform = img.style.transform.replace('scaleY(-1)', '');
      } else {
        img.style.transform = img.style.transform + ' scaleY(-1)';
      }
    }
  };
  ujiuyrsu = function (element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  };
  jiuu = function () {
    if (!_status.event.zidsjiuux) _status.event.zidsjiuux = 0;
    _status.event.zidsjiuux++;
    const str = `<font color=#FF0000>计数${_status.event.zidsjiuux}</font>`;
    game.log(str);
  };
  tddu = function (from, to) {
    if (!from || !to) return 0;
    from = from._trueMe || from;
    arguments[0] = from;
    var att = CacheContext.requireCacheContext().get.rawAttitude.apply(this, arguments);
    if (from.isMad()) att = -att;
    if (to.isMad() && att > 0) {
      if (to.identity == 'zhu') {
        att = 1;
      } else {
        att = 0;
      }
    }
    if (!_status.tempnofake) {
      _status.tempnofake = true;
      if (from.ai.modAttitudeFrom) {
        att = from.ai.modAttitudeFrom(from, to, att);
      }
      if (to.ai.modAttitudeTo) {
        att = to.ai.modAttitudeTo(from, to, att);
      }
      delete _status.tempnofake;
    }
    return att;
  };
  l = function (str) {
    game.log.apply(this, arguments);
  };
  xxyiuijm = function () {
    game.broadcastAll(
      () =>
      lib.skill.xxyiuijm = {
        enable: 'phaseUse',
        _priority: 145789,
        silent: true,
        popup: false,
        forced: true,
        log: false,
        content() {}
      }
    );
    const uijm = 'xxyiuijm';
    const event = _status.event;
    event.backup(uijm);
    game.uncheck();
    game.check();
  };
  uuzuxlts = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    const countMap1 = count(arr1);
    const countMap2 = count(arr2);
    function count(arr = []) {
      const resMap = new Map();
      for (const item of arr) {
        resMap.set(item, (resMap.get(item) || 0) + 1);
      }
      return resMap;
    }
    for (const [key, count] of countMap1) {
      if (countMap2.get(key) !== count) {
        return false;
      }
    }
    return true;
  };
  uuzuxltsuyxu = function (arr1, arr2) {
    if (!arr1 || !arr2) {
      return false;
    }
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Arrar.isArray(arr2[i])) {
        if (!uuzuEqualuyxu(arr1[i], arr2[i])) {
          return false;
        }
      } else {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    }
    return true;
  };
  window.uubngyly = ui.click.mousewheel;
  window.tihrpifu = function () {
    const name = this.dataset.name;
    let num = parseInt(this.dataset.num);
    if (num == NaN) num = this.dataset.num;
    if ((lib.config.skin[name] || 0) == num) {
      return;
    }
    if (num == 0) {
      delete lib.config.skin[name];
    } else {
      lib.config.skin[name] = num;
    }
    for (let i = 0; i < lib.character[name][4].length; i++) {
      if (lib.character[name][4][i].indexOf('ext:') == 0) {
        lib.character[name][4].splice(i--, 1);
      }
    }
    let src = 'ext:' + this.parentNode.dataset.pack + '/';
    if (lib.config.skin[name]) {
      src += 'image/characters/' + name + lib.config.skin[name] + '.jpg';
    } else {
      src += 'image/characters/' + name + '.jpg';
    }
    if (Array.isArray(lib.sg_skinInit)) {
      for (let i = 0; i < lib.sg_skinInit.length; i++) lib.kp_skinInit[i]();
    }
    lib.character[name][4].push(src);
    game.saveConfig('skin', lib.config.skin);
    const nodes = [];
    nodes.addArray(ui.window.querySelectorAll('.player'));
    nodes.addArray(ui.window.querySelectorAll('.character'));
    for (const i of nodes) {
      if (i.name == name || i.name1 == name) {
        i.node.avatar.setBackground(name, 'character');
      }
      if (i.name2 == name) {
        i.node.avatar2.setBackground(name, 'character');
      }
      if (i.link == name) {
        i.setBackground(name, 'character');
      }
    }
    const lpbn = lib.character[name][4].find((i) => i.indexOf('yuyb:') == 0);
    if (lib.config.skin[name] && (!lpbn || !lpbn.includes(lib.config.skin[name]))) return;
    const list = Array.from(lib.character[name][3]);
    game.broadcastAll(
      function (list, name) {
        game.expandSkills(list);
        for (const i of list) {
          const qphryuyb = function () {
            var info = lib.skill[i];
            if (!info) return;
            if (!info.audio) return;
            if (!info.audioname2) info.audioname2 = { name };
            if (lib.config.skin[name]) {
              info.audioname2[name] = `${i}_skin${lib.config.skin[name]}`;
            } else {
              delete info.audioname2;
            }
            game.finishSkill(i);
          };
          qphryuyb();
        }
      },
      list,
      name
    );
  };
  Object.assign(lib.element.content, {
    zadj() {
      _status.event.trigger('zadjBefore');
      game.broadcastAll(
        function (player, target, emotion) {
          player.$zadj(target, emotion);
        },
        event.player,
        event.target,
        event.emotion
      );
    },
    chooseToComparerfrj() {
      'step 0';
      if ((!event.fixedResult || !event.fixedResult[player.playerid]) && player.countCards('h') == 0 || (!event.fixedResult || !event.fixedResult[target.playerid]) && target.countCards('h') == 0) {
        event.result = { cancelled: true, bool: false };
        event.finish();
        return;
      }
      game.log(player, '对', target, '发起拼点');
      event.lose_list = [];
      'step 1';
      var sendback = function () {
        if (_status.event != event) {
          return function () {
            event.resultOL = _status.event.resultOL;
          };
        }
      };
      if (event.fixedResult && event.fixedResult[player.playerid]) {
        event.card1 = event.fixedResult[player.playerid];
        event.lose_list.push([player, event.card1]);
      } else if (player.isOnline()) {
        player.wait(sendback);
        event.ol = true;
        player.send(function (ai) {
          game.me.chooseCard('请选择拼点牌', true).set('type', 'compare').set('glow_result', true).ai = ai;
          game.resume();
        }, event.ai);
      } else {
        event.localPlayer = true;
        player.chooseCard('请选择拼点牌', true).set('type', 'compare').set('glow_result', true).ai = event.ai;
      }
      if (event.fixedResult && event.fixedResult[target.playerid]) {
        event.card2 = event.fixedResult[target.playerid];
        event.lose_list.push([target, event.card2]);
      } else if (target.isOnline()) {
        target.wait(sendback);
        event.ol = true;
        target.send(function (ai) {
          target.hvsu_duqu(event.storage);
          game.me.chooseCard('请选择拼点牌', true).set('type', 'compare').set('glow_result', true).ai = ai;
          game.resume();
        }, event.ai);
      } else {
        event.localTarget = true;
      }
      'step 2';
      if (event.localPlayer) {
        if (result.skill && lib.skill[result.skill] && lib.skill[result.skill].onCompare) {
          result.cards = lib.skill[result.skill].onCompare(player);
        } else event.lose_list.push([player, result.cards[0]]);
        event.card1 = result.cards[0];
      }
      if (event.localTarget) {
        target.hvsu_duqu(event.storage);
        target.chooseCard('请选择拼点牌', true).set('type', 'compare').set('glow_result', true).ai = event.ai;
      }
      'step 3';
      if (event.localTarget) {
        if (result.skill && lib.skill[result.skill] && lib.skill[result.skill].onCompare) {
          result.cards = lib.skill[result.skill].onCompare(target);
        } else event.lose_list.push([target, result.cards[0]]);
        event.card2 = result.cards[0];
      }
      if (!event.resultOL && event.ol) {
        game.pause();
      }
      'step 4';
      try {
        if (!event.card1) {
          if (event.resultOL[player.playerid].skill && lib.skill[event.resultOL[player.playerid].skill] && lib.skill[event.resultOL[player.playerid].skill].onCompare) {
            event.resultOL[player.playerid].cards = lib.skill[event.resultOL[player.playerid].skill].onCompare(player);
          } else event.lose_list.push([player, event.resultOL[player.playerid].cards[0]]);
          event.card1 = event.resultOL[player.playerid].cards[0];
        }
        if (!event.card2) {
          if (event.resultOL[target.playerid].skill && lib.skill[event.resultOL[target.playerid].skill] && lib.skill[event.resultOL[target.playerid].skill].onCompare) {
            event.resultOL[target.playerid].cards = lib.skill[event.resultOL[target.playerid].skill].onCompare(player);
          } else event.lose_list.push([target, event.resultOL[target.playerid].cards[0]]);
          event.card2 = event.resultOL[target.playerid].cards[0];
        }
        if (!event.card1 || !event.card2) {
          throw 'err';
        }
      } catch (e) {
        console.log(e);
      }
      if (event.num2 >= 10 || event.num2 <= 4) {
        if (target.countCards('h') > 2) {
          event.addToAI = true;
        }
      }
      if (event.lose_list.length) {
        game.loseAsync({
          lose_list: event.lose_list
        }).setContent('chooseToCompareLose');
      }
      'step 5';
      event.trigger('compareCardShowBefore');
      'step 6';
      game.broadcast(function () {
        ui.arena.classList.add('thrownhighlight');
      });
      ui.arena.classList.add('thrownhighlight');
      game.addVideo('thrownhighlight1');
      player.$compare(event.card1, target, event.card2);
      game.log(player, '的拼点牌为', event.card1);
      game.log(target, '的拼点牌为', event.card2);
      var getNum = function (card) {
        for (const i of event.lose_list) {
          if (i[1] == card) return card.number;
        }
        return card.number;
      };
      event.num1 = getNum(event.card1);
      event.num2 = getNum(event.card2);
      event.trigger('compare');
      'step 7';
      event.result = {
        player: event.card1,
        target: event.card2,
        num1: event.num1,
        num2: event.num2
      };
      event.trigger('compareFixing');
      'step 8';
      var str;
      if (event.forceWinner === player || event.forceWinner !== target && event.num1 > event.num2) {
        event.result.bool = true;
        event.result.winner = player;
        event.result.rfrjyixi = true;
        str = get.translation(player) + '拼点成功';
        player.popup('胜');
        target.popup('负');
      } else {
        event.result.bool = false;
        str = get.translation(player) + '拼点失败';
        if (event.forceWinner !== target && event.num1 == event.num2) {
          event.result.tie = true;
          player.popup('平');
          target.popup('平');
        } else {
          event.result.winner = target;
          player.popup('负');
          target.popup('胜');
        }
      }
      game.broadcastAll(function (str) {
        var dialog = ui.create.dialog(str);
        dialog.classList.add('center');
        setTimeout(function () {
          dialog.close();
        }, 1000);
      }, str);
      'step 9';
      if (typeof event.target.ai.shown == 'number' && event.target.ai.shown <= 0.85 && event.addToAI) {
        event.target.ai.shown += 0.1;
      }
      game.broadcastAll(function () {
        ui.arena.classList.remove('thrownhighlight');
      });
      game.addVideo('thrownhighlight2');
      if (event.clear !== false) {
        game.broadcastAll(ui.clear);
      }
      if (typeof event.preserve == 'function') {
        event.preserve = event.preserve(event.result);
      } else if (event.preserve == 'win') {
        event.preserve = event.result.bool;
      } else if (event.preserve == 'lose') {
        event.preserve = !event.result.bool;
      }
    },
    hvherfrj() {
      'step 0';
      event.hvherfrj = true;
      l('荏苒特殊回合');
      event.trigger('phaseBefore');
      'step 1';
      game.phaseNumber++;
      if (!event.phaseList) {
        event.phaseList = player.storage.jidkjpdr;
      }
      event.vgihlqig = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'];
      if (typeof event.num != 'number') {
        event.num = 0;
        event.jpuu = 0;
        player.storage.cotox = [];
      }
      var isRound = false;
      if (lib.onround.every((i) => i(event, player))) {
        isRound = _status.roundSkipped;
        if (_status.isRoundFilter) {
          isRound = _status.isRoundFilter(event, player);
        } else if (player == _status.roundStart) {
          isRound = true;
        }
        if (isRound) {
          delete _status.roundSkipped;
          game.roundNumber++;
          event._roundStart = true;
          game.updateRoundNumber();
          for (const i of game.players) {
            if (i.isOut() && i.outCount > 0) {
              i.outCount--;
              if (i.outCount == 0 && !i.outSkills) {
                i.in();
              }
            }
          }
          event.trigger('roundStart');
        }
      }
      _status.globalHistory.push({
        cardMove: [],
        custom: [],
        useCard: [],
        changeHp: [],
        everything: []
      });
      var players = game.players.slice(0).concat(game.dead);
      for (const i of players) {
        var current = i;
        current.actionHistory.push({
          useCard: [],
          respond: [],
          skipped: [],
          lose: [],
          gain: [],
          sourceDamage: [],
          damage: [],
          custom: [],
          useSkill: []
        });
        current.stat.push({ card: {}, skill: {} });
        if (isRound) {
          current.getHistory().isRound = true;
          current.getStat().isRound = true;
        }
      }
      if (isRound) {
        game.getGlobalHistory().isRound = true;
      }
      'step 2';
      event.trigger('phaseBeforeStart');
      'step 3';
      event.trigger('phaseBeforeEnd');
      'step 4';
      if (player.isTurnedOver() && !event._noTurnOver) {
        player.turnOver();
        player.phaseSkipped = true;
        var players = game.players.slice(0).concat(game.dead);
        for (const i of players) {
          var current = i;
          current.getHistory().isSkipped = true;
          current.getStat().isSkipped = true;
        }
        event.cancel();
      } else {
        player.phaseSkipped = false;
        player.getHistory().isMe = true;
        player.getStat().isMe = true;
      }
      'step 5';
      while (ui.dialogs.length) {
        ui.dialogs[0].close();
      }
      player.phaseNumber++;
      game.broadcastAll(
        function (player, num, popup) {
          if (lib.config.glow_phase) {
            player.classList.add('glow_phase');
          }
          player.phaseNumber = num;
          _status.currentPhase = player;
          if (popup && lib.config.show_phase_prompt) player.popup('回合开始', null, false);
        },
        player,
        player.phaseNumber,
        !player.noPhaseDelay
      );
      _status.currentPhase = player;
      _status.discarded = [];
      game.syncState();
      game.addVideo('phaseChange', player);
      if (game.phaseNumber == 1) {
        if (lib.configOL.observe) {
          lib.configOL.observeReady = true;
          game.send('server', 'config', lib.configOL);
        }
      }
      game.log();
      game.log(player, '的回合开始');
      player._noVibrate = true;
      if (get.config('identity_mode') != 'zhong' && get.config('identity_mode') != 'purple' && !_status.connectMode) {
        var num;
        switch (get.config('auto_identity')) {
          case 'one':
            num = 1;
            break;
          case 'two':
            num = 2;
            break;
          case 'three':
            num = 3;
            break;
          case 'always':
            num = -1;
            break;
          default:
            num = 0;
            break;
        }
        if (num && !_status.identityShown && game.phaseNumber > game.players.length * num && game.showIdentity) {
          if (!_status.video) player.popup('显示身份');
          _status.identityShown = true;
          game.showIdentity(false);
        }
      }
      player.ai.tempIgnore = [];
      if (ui.land && ui.land.player == player) {
        game.addVideo('destroyLand');
        ui.land.destroy();
      }
      'step 6';
      event.trigger('phaseBeginStart');
      'step 7';
      event.trigger('phaseBegin');
      'step 8';
      if (player.storage.uiys ? event.vgihlqig.indexOf(event.currentPhase) + 1 < event.vgihlqig.length : event.num < player.storage.jidkjpdr.length) {
        if (player.isIn()) event.trigger('phaseChange');
      } else event.goto(11)('step 9');
      if (player.isIn() && num < event.phaseList.length) {
        event.dhqmjpdr = event.currentPhase;
        var phase = player.storage.uiys ? player.storage.iewu === true ? player.storage.jidkjpdr.hzmm(event.currentPhase).split('|') : event.vgihlqig.hzmm(event.currentPhase).split('|') : player.storage.iewu === false ? event.vgihlqig.hzmm(event.currentPhase).split('|') : player.storage.jidkjpdr.hzmm(event.currentPhase).split('|');
        event.currentPhase = phase[0];
        var next = player[event.currentPhase]();
        next.phaseIndex = player.storage.jidkjpdr.indexOf(event.currentPhase);
        if (phase.length > 1) {
          next._extraPhaseReason = phase[1];
        }
      }
      'step 10';
      if (player.storage.iewu === false) {
        event.num = event.dhqmjpdr && event.vgihlqig.indexOf(event.dhqmjpdr) === event.vgihlqig.length - 1 && event.vgihlqig.indexOf(event.currentPhase) === 0 ? event.vgihlqig.length - 1 : event.vgihlqig.indexOf(event.currentPhase);
      } else event.num = event.dhqmjpdr && player.storage.jidkjpdr.indexOf(event.dhqmjpdr) === player.storage.jidkjpdr.length - 1 && player.storage.jidkjpdr.indexOf(event.currentPhase) === 0 ? player.storage.jidkjpdr.length - 1 : player.storage.jidkjpdr.indexOf(event.currentPhase);
      if (event.currentPhase == 'phaseUse') {
        game.broadcastAll(function () {
          if (ui.tempnowuxie) {
            ui.tempnowuxie.close();
            delete ui.tempnowuxie;
          }
        });
        delete player._noSkill;
      }
      event.num++;
      player.storage.cotox.push(event.currentPhase);
      'step 11';
      if (player.storage.uiys ? event.vgihlqig.indexOf(event.currentPhase) + 1 < event.vgihlqig.length : event.num < event.phaseList.length) {
        event.goto(8);
      } else if (!event._phaseEndTriggered) {
        event._phaseEndTriggered = true;
        event.trigger('phaseEnd');
        event.redo();
      }
      'step 12';
      event.trigger('phaseAfter');
      l(player.storage.cotox);
      'step 13';
      game.broadcastAll(function (player) {
        player.classList.remove('glow_phase');
        delete _status.currentPhase;
      }, player);
    },
    hvhe() {
      'step 0';
      event.trigger('phaseBefore');
      'step 1';
      game.phaseNumber++;
      if (!event.phaseList) {
        event.phaseList = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'];
      }
      if (typeof event.num != 'number') {
        event.num = 0;
      }
      var isRound = false;
      _status.globalHistory.push({
        cardMove: [],
        custom: [],
        useCard: [],
        changeHp: [],
        everything: []
      });
      var players = game.players.slice(0).concat(game.dead);
      for (const i of players) {
        var current = i;
        current.actionHistory.push({
          useCard: [],
          respond: [],
          skipped: [],
          lose: [],
          gain: [],
          sourceDamage: [],
          damage: [],
          custom: [],
          useSkill: []
        });
        current.stat.push({ card: {}, skill: {} });
        if (isRound) {
          current.getHistory().isRound = true;
          current.getStat().isRound = true;
        }
      }
      if (isRound) {
        game.getGlobalHistory().isRound = true;
      }
      'step 2';
      event.trigger('phaseBeforeStart');
      'step 3';
      event.trigger('phaseBeforeEnd');
      'step 4';
      if (player.isTurnedOver() && !event._noTurnOver) {
        player.turnOver();
        player.phaseSkipped = true;
        var players = game.players.slice(0).concat(game.dead);
        for (const i of players) {
          var current = i;
          current.getHistory().isSkipped = true;
          current.getStat().isSkipped = true;
        }
        event.cancel();
      } else {
        player.phaseSkipped = false;
        player.getHistory().isMe = true;
        player.getStat().isMe = true;
      }
      'step 5';
      while (ui.dialogs.length) {
        ui.dialogs[0].close();
      }
      player.phaseNumber++;
      game.broadcastAll(
        function (player, num, popup) {
          if (lib.config.glow_phase) {
            player.classList.add('glow_phase');
          }
          player.phaseNumber = num;
          _status.currentPhase = player;
          if (popup && lib.config.show_phase_prompt) player.popup('回合开始', null, false);
        },
        player,
        player.phaseNumber,
        !player.noPhaseDelay
      );
      _status.currentPhase = player;
      _status.discarded = [];
      game.syncState();
      game.addVideo('phaseChange', player);
      if (game.phaseNumber == 1) {
        if (lib.configOL.observe) {
          lib.configOL.observeReady = true;
          game.send('server', 'config', lib.configOL);
        }
      }
      game.log();
      game.log(player, '的回合开始');
      player._noVibrate = true;
      if (get.config('identity_mode') != 'zhong' && get.config('identity_mode') != 'purple' && !_status.connectMode) {
        var num;
        switch (get.config('auto_identity')) {
          case 'one':
            num = 1;
            break;
          case 'two':
            num = 2;
            break;
          case 'three':
            num = 3;
            break;
          case 'always':
            num = -1;
            break;
          default:
            num = 0;
            break;
        }
        if (num && !_status.identityShown && game.phaseNumber > game.players.length * num && game.showIdentity) {
          if (!_status.video) player.popup('显示身份');
          _status.identityShown = true;
          game.showIdentity(false);
        }
      }
      player.ai.tempIgnore = [];
      if (ui.land && ui.land.player == player) {
        game.addVideo('destroyLand');
        ui.land.destroy();
      }
      'step 6';
      event.trigger('phaseBeginStart');
      'step 7';
      event.trigger('phaseBegin');
      'step 8';
      if (num < event.phaseList.length) {
        if (player.isIn()) event.trigger('phaseChange');
      } else event.goto(11);
      'step 9';
      if (player.isIn() && num < event.phaseList.length) {
        var phase = event.phaseList[num].split('|');
        event.currentPhase = phase[0];
        var next = player[event.currentPhase]();
        next.phaseIndex = num;
        if (phase.length > 1) {
          next._extraPhaseReason = phase[1];
        }
      }
      'step 10';
      if (event.currentPhase == 'phaseUse') {
        game.broadcastAll(function () {
          if (ui.tempnowuxie) {
            ui.tempnowuxie.close();
            delete ui.tempnowuxie;
          }
        });
        delete player._noSkill;
      }
      event.num++;
      'step 11';
      if (event.num < event.phaseList.length) {
        event.goto(8);
      } else if (!event._phaseEndTriggered) {
        event._phaseEndTriggered = true;
        event.trigger('phaseEnd');
        event.redo();
      }
      'step 12';
      event.trigger('phaseAfter');
      'step 13';
      game.broadcastAll(function (player) {
        player.classList.remove('glow_phase');
        delete _status.currentPhase;
      }, player);
    },
    phaseUsex() {
      'step 0';
      _status.currentPhase = player;
      const stat = player.getStat();
      for (let i in stat.skill) {
        let bool = false;
        const info = lib.skill[i];
        if (!info) continue;
        if (info.enable != undefined) {
          if (typeof info.enable == 'string' && info.enable == 'phaseUse') bool = true;else
          if (typeof info.enable == 'object' && info.enable.includes('phaseUse')) bool = true;
        }
        if (bool) stat.skill[i] = 0;
      }
      for (let i in stat.card) {
        let bool = false;
        const info = lib.card[i];
        if (!info) continue;
        if (info.updateUsable == 'phaseUse') stat.card[i] = 0;
      }
      'step 1';
      event.trigger('phaseUseBefore');
      'step 2';
      event.trigger('phaseUseBegin');
      'step 3';
      if (!event.logged) {
        game.log(player, '进入了出牌阶段');
        event.logged = true;
      }
      const next = player.chooseToUse();
      if (!lib.config.show_phaseuse_prompt) {
        next.set('prompt', false);
      }
      next.set('type', 'phase');
      'step 4';
      if (result.bool && !event.skipped) {
        event.goto(3);
      }
      game.broadcastAll(function () {
        if (ui.tempnowuxie) {
          ui.tempnowuxie.close();
          delete ui.tempnowuxie;
        }
      });
      'step 5';
      event.trigger('phaseUseEnd');
      'step 6';
      event.trigger('phaseUseAfter');
      _status.currentPhase = target;
    },
    eewdiupd() {
      player.phaseUse();
      game.broadcastAll(function () {
        if (ui.tempnowuxie) {
          ui.tempnowuxie.close();
          delete ui.tempnowuxie;
        }
      });
      player.phaseDiscard();
      delete player._noSkill;
    },
    chooseToMovetm() {
      'step 0';
      if (event.chooseTime && _status.connectMode && !game.online) {
        event.time = lib.configOL.choose_timeout;
        game.broadcastAll(function (time) {
          lib.configOL.choose_timeout = time;
        }, event.chooseTime);
      }
      if (event.isMine()) {
        delete ui.selected.guanxing_button;
        const list = event.list,
          filterMove = event.filterMove,
          filterOk = event.filterOk;
        _status.imchoosing = true;
        var event = _status.event;
        event.settleed = false;
        event.dialog = ui.create.dialog(event.prompt || '请选择要操作的牌', 'hidden', 'forcebutton');
        event.switchToAuto = function () {
          if (!filterOk(event.moved)) {
            if (!event.forced) event._result = { bool: false };else
            event._result = 'ai';
          } else {
            event._result = {
              bool: true,
              moved: event.moved
            };
          }
          event.dialog.close();
          if (ui.confirm) ui.confirm.close();
          game.resume();
          _status.imchoosing = false;
          setTimeout(function () {
            ui.arena.classList.remove('choose-to-move');
          }, 500);
        };
        event.dialog.classList.add('scroll1');
        event.dialog.classList.add('scroll2');
        event.dialog.classList.add('fullwidth');
        if (list.length > 1) {
          ui.arena.classList.add('choose-to-move');
          event.dialog.classList.add('fullheight');
        }
        /**
         * @type { Card[][] } 保存每次移动后的对应实体牌的位置
         */
        event.moved = [];
        /**
         * @type { HTMLDivElement[] } 所有可移动的buttons数组
         */
        var buttonss = [];
        event.buttonss = buttonss;
        /**
         * 是否处于拖拽动画中(禁止其他的选择,拖拽)
         */
        event.isPlayingAnimation = false;
        var touchStartX = 0;
        var touchStartY = 0;
        var elementOffsetX = 0;
        var elementOffsetY = 0;
        var currentElement;
        var firstOnDragElement;
        /**
         * 每次移动后更新数据
         */
        var updateButtons = function () {
          for (const i of buttonss) {
            event.moved[i._link] = get.links(Array.from(i.childNodes));
            if (typeof i.textPrompt == 'function') i.previousSibling.innerHTML = '<div class="text center">' + i.textPrompt(event.moved[i._link]) + '</div>';
          }
          if (filterOk(event.moved)) {
            ui.create.confirm('o');
          } else {
            if (!event.forced) ui.create.confirm('c');else
            if (ui.confirm) ui.confirm.close();
          }
        };
        /**
         * 确认是否是拖拽开始
         *
         * 按下时,是不能判断出是否拖拽开始的,得在move事件才可以
         *
         * @this buttons
         * @param { TouchEvent | MouseEvent } e
         */
        var dragStart = function (e) {
          if (event.isPlayingAnimation) return;
          if (e instanceof MouseEvent) {
            if (e.which != 1) return;
          }
          if (window.TouchEvent && e instanceof TouchEvent) {
            if (e.touches.length != 1) return;
          }
          var cards = Array.from(this.children);
          var target = cards.find((card) => {
            return card.includes(e.target);
          });
          if (target) {
            if (!target.copy) {
              target.copy = target.cloneNode(true);
              target.copy.style.opacity = '0.5';
              target.copy.style.pointerEvents = 'none';
            }
            touchStartX = (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX) / game.documentZoom;
            touchStartY = (e instanceof MouseEvent ? e.clientY : e.touches[0].clientY) / game.documentZoom;
            elementOffsetX = target.offsetLeft - touchStartX;
            elementOffsetY = target.offsetTop - touchStartY;
            currentElement = target;
            e.stopPropagation();
          }
        };
        /**
         * 判断出是否拖拽开始
         *
         * move事件是在button元素上监听的,而不是在dialog.content上.
         *
         * @this dialog
         * @param { TouchEvent | MouseEvent } e
         */
        var onDrag = function (e) {
          if (event.isPlayingAnimation) return;
          if (e instanceof MouseEvent) {
            if (e.which != 1) return;
          }
          if (window.TouchEvent && e instanceof TouchEvent) {
            if (e.touches.length != 1) return;
          }
          if (!currentElement || !currentElement.copy) return;
          if (!firstOnDragElement) {
            if (!currentElement.includes(e.target)) {
              return;
            } else {
              firstOnDragElement = currentElement;
            }
          }
          ui.selected.guanxing_button?.classList.remove('glow2');
          ui.selected.guanxing_button = currentElement;
          ui.selected.guanxing_button.classList.add('glow2');
          /**
           * @type { HTMLDivElement }
           */
          var copy = currentElement.copy;
          if (!ui.window.contains(copy)) {
            copy.style.position = 'absolute';
            copy.style.transition = 'none';
            copy.style.zIndex = '100';
            ui.window.appendChild(copy);
          }
          copy.style.left = `${(e instanceof MouseEvent ? e.clientX - copy.offsetWidth * 3 / 5 : e.touches[0].clientX - copy.offsetWidth * 3 / 5) / game.documentZoom}px`;
          copy.style.top = `${(e instanceof MouseEvent ? e.clientY - copy.offsetHeight * 4 / 7 : e.touches[0].clientY - copy.offsetHeight * 4 / 7) / game.documentZoom}px`;
        };
        var dragEnd = function (e) {
          if (event.isPlayingAnimation) return;
          if (e instanceof MouseEvent) {
            if (e.which != 1) return;
          }
          if (window.TouchEvent && e instanceof TouchEvent) {
            if (e.changedTouches.length != 1) return;
          }
          firstOnDragElement = null;
          buttonss.forEach((btn) => {
            Array.from(btn.children).forEach((element) => {
              if (element.copy && ui.window.contains(element.copy)) {
                ui.window.removeChild(element.copy);
              }
            });
          });
          if (!ui.selected.guanxing_button?.copy) return;
          var clientX = (e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX) / game.documentZoom;
          var clientY = (e instanceof MouseEvent ? e.clientY : e.changedTouches[0].clientY) / game.documentZoom;
          var target = document.elementFromPoint(clientX * game.documentZoom, clientY * game.documentZoom);
          if (ui.selected.guanxing_button.includes(target)) return;
          var button = buttonss.find((b) => {
            return b.includes(target);
          });
          if (!button) return;
          var children = Array.from(button.children);
          var card = children.find((element) => element.includes(target));
          if (!card) {
            if (!filterMove(ui.selected.guanxing_button, button._link, event.moved)) return;
          } else {
            if (!filterMove(card, ui.selected.guanxing_button, event.moved)) return;
          }
          buttonss.forEach((btn) => {
            Array.from(btn.children).forEach((element) => {
              element.style.transition = 'none';
              element._rect = element.getBoundingClientRect();
            });
          });
          if (!button.hasChildNodes()) {
            button.appendChild(ui.selected.guanxing_button);
            if (event.ciuu) event.ciuu--;
          } else if (!card) {
            if (children.length) {
              var firstChild = children[0];
              if (clientX < firstChild.getBoundingClientRect().left / game.documentZoom) {
                button.insertBefore(ui.selected.guanxing_button, firstChild);
              } else button.appendChild(ui.selected.guanxing_button);
            } else button.appendChild(ui.selected.guanxing_button);
            if (event.ciuu) event.ciuu--;
          } else {
            var par1 = ui.selected.guanxing_button.parentNode,
              ind1 = ui.selected.guanxing_button.nextSibling,
              par2 = card.parentNode,
              ind2 = card.nextSibling;
            ui.selected.guanxing_button.classList.remove('glow2');
            par2.insertBefore(ui.selected.guanxing_button, ind2);
            if (event.ciuu) event.ciuu--;
          }
          if (event.ciuu !== undefined && event.ciuu === 0) {
            setTimeout(function () {
              event._result = {
                bool: true,
                moved: event.moved
              };
              event.dialog.close();
              if (ui.confirm) ui.confirm.close();
              game.resume();
              _status.imchoosing = false;
              ui.arena.classList.remove('choose-to-move');
            }, 500);
          }
          buttonss.forEach((btn) => {
            Array.from(btn.children).forEach((element) => {
              element._rect2 = element.getBoundingClientRect();
              element.style.transform = `translateX(${(element._rect.left - element._rect2.left) / game.documentZoom}px) translateY(${(element._rect.top - element._rect2.top) / game.documentZoom}px)`;
            });
          });
          event.isPlayingAnimation = true;
          setTimeout(() => {
            Promise.race([
            new Promise((resolve) => setTimeout(resolve, 0)),
            Promise.all(
              buttonss.
              map((btn) => Array.from(btn.children)).
              flat(1).
              map((element) => {
                return new Promise((resolve) => {
                  element.classList.remove('glow2');
                  element.style.transition = '';
                  const transformValue = element.style.transform;
                  if (transformValue !== 'translateX(0px) translateY(0px)' && transformValue !== '') {
                    element.style.transform = 'translateX(0px) translateY(0px)';
                    element.addEventListener(
                      'transitionend',
                      (event) => {
                        if (event.propertyName === 'transform') {
                          resolve();
                        }
                      },
                      { once: true }
                    );
                  } else resolve();
                });
              })
            )]
            ).then(() => {
              delete ui.selected.guanxing_button;
              event.isPlayingAnimation = false;
              updateButtons();
            });
          }, 0);
        };
        for (let i = 0; i < list.length; i++) {
          var tex = event.dialog.add('<div class="text center">' + list[i][0] + '</div>');
          tex.classList.add('choosetomove');
          var buttons = ui.create.div('.buttons', event.dialog.content);
          buttons.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', dragStart, true);
          event.dialog.addEventListener(lib.config.touchscreen ? 'touchmove' : 'mousemove', onDrag, true);
          event.dialog.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', dragEnd, true);
          buttonss.push(buttons);
          buttons.classList.add('popup');
          buttons.classList.add('guanxing');
          buttons._link = i;
          if (list[i][1]) {
            if (get.itemtype(list[i][1]) == 'cards') {
              var cardsb = ui.create.buttons(list[i][1], 'card', buttons);
              if (list[i][2] && typeof list[i][2] == 'string') {
                for (var ij of cardsb) ij.node.gaintag.innerHTML = get.translation(list[i][2]);
              }
            } else if (list[i][1].length == 2) {
              ui.create.buttons(list[i][1][0], list[i][1][1], buttons);
            }
          }
          if (list[i][2] && typeof list[i][2] == 'function') buttons.textPrompt = list[i][2];
        }
        var tex = event.dialog.add('<div class="text center">点击或拖动两张牌以交换位置;点击一张牌并点击其他区域或拖动到其他区域以移动卡牌</div>');
        tex.classList.add('choosetomove');
        event.dialog.open();
        updateButtons();
        event.custom.replace.button = function (button) {
          if (event.isPlayingAnimation) return;
          var node = button.parentNode;
          if (!buttonss.includes(node)) return;
          if (!ui.selected.guanxing_button) {
            ui.selected.guanxing_button = button;
            button.classList.add('glow2');
            return;
          }
          if (ui.selected.guanxing_button == button) {
            button.classList.remove('glow2');
            delete ui.selected.guanxing_button;
            return;
          }
        };
        event.custom.replace.confirm = function (bool) {
          if (bool)
          event._result = {
            bool: true,
            moved: event.moved
          };else
          event._result = { bool: false };
          event.dialog.close();
          if (ui.confirm) ui.confirm.close();
          game.resume();
          _status.imchoosing = false;
          setTimeout(function () {
            ui.arena.classList.remove('choose-to-move');
          }, 500);
        };
        game.pause();
        game.countChoose();
        event.choosing = true;
      } else if (event.isOnline()) {
        event.send();
      } else {
        event.result = 'ai';
      }
      'step 1';
      if (event.time)
      game.broadcastAll(function (time) {
        lib.configOL.choose_timeout = time;
      }, event.time);
      var result = event.result || result;
      if ((!result || result == 'ai' || event.forced && !result.bool) && event.processAI) {
        var moved = event.processAI(event.list);
        if (moved)
        result = {
          bool: true,
          moved
        };else
        result = { bool: false };
      }
      event.result = result;
    },
    chooseToMoveif() {
      'step 0';
      if (event.chooseTime && _status.connectMode && !game.online) {
        event.time = lib.configOL.choose_timeout;
        game.broadcastAll(function (time) {
          lib.configOL.choose_timeout = time;
        }, event.chooseTime);
      }
      if (event.isMine()) {
        delete ui.selected.guanxing_button;
        const list = event.list,
          filterMove = event.filterMove,
          filterOk = event.filterOk;
        _status.imchoosing = true;
        var event = _status.event;
        event.settleed = false;
        event.dialog = ui.create.dialog(event.prompt || '请选择要操作的牌', 'hidden', 'forcebutton');
        event.switchToAuto = function () {
          if (!filterOk(event.moved)) {
            if (!event.forced) event._result = { bool: false };else
            event._result = 'ai';
          } else {
            event._result = {
              bool: true,
              moved: event.moved
            };
          }
          event.dialog.close();
          if (ui.confirm) ui.confirm.close();
          game.resume();
          _status.imchoosing = false;
          setTimeout(function () {
            ui.arena.classList.remove('choose-to-move');
          }, 500);
        };
        event.dialog.classList.add('scroll1');
        event.dialog.classList.add('scroll2');
        event.dialog.classList.add('fullwidth');
        if (list.length > 1) {
          ui.arena.classList.add('choose-to-move');
          event.dialog.classList.add('fullheight');
        }
        /**
         * @type { Card[][] } 保存每次移动后的对应实体牌的位置
         */
        event.moved = [];
        /**
         * @type { HTMLDivElement[] } 所有可移动的buttons数组
         */
        var buttonss = [];
        event.buttonss = buttonss;
        /**
         * 是否处于拖拽动画中(禁止其他的选择,拖拽)
         */
        event.isPlayingAnimation = false;
        var touchStartX = 0;
        var touchStartY = 0;
        var elementOffsetX = 0;
        var elementOffsetY = 0;
        var currentElement;
        var firstOnDragElement;
        /**
         * 每次移动后更新数据
         */
        var updateButtons = function () {
          for (const i of buttonss) {
            event.moved[i._link] = get.links(Array.from(i.childNodes));
            if (typeof i.textPrompt == 'function') i.previousSibling.innerHTML = '<div class="text center">' + i.textPrompt(event.moved[i._link]) + '</div>';
          }
          if (filterOk(event.moved)) {
            ui.create.confirm('o');
          } else {
            if (!event.forced) ui.create.confirm('c');else
            if (ui.confirm) ui.confirm.close();
          }
        };
        /**
         * 确认是否是拖拽开始
         *
         * 按下时,是不能判断出是否拖拽开始的,得在move事件才可以
         *
         * @this buttons
         * @param { TouchEvent | MouseEvent } e
         */
        var dragStart = function (e) {
          if (event.isPlayingAnimation) return;
          if (e instanceof MouseEvent) {
            if (e.which != 1) return;
          }
          if (window.TouchEvent && e instanceof TouchEvent) {
            if (e.touches.length != 1) return;
          }
          var cards = Array.from(this.children);
          var target = cards.find((card) => {
            return card.includes(e.target);
          });
          if (target) {
            if (!target.copy) {
              target.copy = target.cloneNode(true);
              target.copy.style.opacity = '0.5';
              target.copy.style.pointerEvents = 'none';
            }
            touchStartX = (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX) / game.documentZoom;
            touchStartY = (e instanceof MouseEvent ? e.clientY : e.touches[0].clientY) / game.documentZoom;
            elementOffsetX = target.offsetLeft - touchStartX;
            elementOffsetY = target.offsetTop - touchStartY;
            currentElement = target;
            e.stopPropagation();
          }
        };
        /**
         * 判断出是否拖拽开始
         *
         * move事件是在button元素上监听的,而不是在dialog.content上.
         *
         * @this dialog
         * @param { TouchEvent | MouseEvent } e
         */
        var onDrag = function (e) {
          if (event.isPlayingAnimation) return;
          if (e instanceof MouseEvent) {
            if (e.which != 1) return;
          }
          if (window.TouchEvent && e instanceof TouchEvent) {
            if (e.touches.length != 1) return;
          }
          if (!currentElement || !currentElement.copy) return;
          if (!firstOnDragElement) {
            if (!currentElement.includes(e.target)) {
              return;
            } else {
              firstOnDragElement = currentElement;
            }
          }
          ui.selected.guanxing_button?.classList.remove('glow2');
          ui.selected.guanxing_button = currentElement;
          ui.selected.guanxing_button.classList.add('glow2');
          /**
           * @type { HTMLDivElement }
           */
          var copy = currentElement.copy;
          if (!ui.window.contains(copy)) {
            copy.style.position = 'absolute';
            copy.style.transition = 'none';
            copy.style.zIndex = '100';
            ui.window.appendChild(copy);
          }
          copy.style.left = `${(e instanceof MouseEvent ? e.clientX - copy.offsetWidth * 3 / 5 : e.touches[0].clientX - copy.offsetWidth * 3 / 5) / game.documentZoom}px`;
          copy.style.top = `${(e instanceof MouseEvent ? e.clientY - copy.offsetHeight * 4 / 7 : e.touches[0].clientY - copy.offsetHeight * 4 / 7) / game.documentZoom}px`;
        };
        var dragEnd = function (e) {
          if (event.isPlayingAnimation) return;
          if (e instanceof MouseEvent) {
            if (e.which != 1) return;
          }
          if (window.TouchEvent && e instanceof TouchEvent) {
            if (e.changedTouches.length != 1) return;
          }
          firstOnDragElement = null;
          buttonss.forEach((btn) => {
            Array.from(btn.children).forEach((element) => {
              if (element.copy && ui.window.contains(element.copy)) {
                ui.window.removeChild(element.copy);
              }
            });
          });
          if (!ui.selected.guanxing_button?.copy) return;
          var clientX = (e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX) / game.documentZoom;
          var clientY = (e instanceof MouseEvent ? e.clientY : e.changedTouches[0].clientY) / game.documentZoom;
          var target = document.elementFromPoint(clientX * game.documentZoom, clientY * game.documentZoom);
          if (ui.selected.guanxing_button.includes(target)) return;
          var button = buttonss.find((b) => {
            return b.includes(target);
          });
          if (!button) return;
          var children = Array.from(button.children);
          var card = children.find((element) => element.includes(target));
          if (!card) {
            if (!filterMove(ui.selected.guanxing_button, button._link, event.moved)) return;
          } else {
            if (!filterMove(card, ui.selected.guanxing_button, event.moved)) return;
          }
          buttonss.forEach((btn) => {
            Array.from(btn.children).forEach((element) => {
              element.style.transition = 'none';
              element._rect = element.getBoundingClientRect();
            });
          });
          if (!button.hasChildNodes()) {
            button.appendChild(ui.selected.guanxing_button);
          } else if (!card) {
            if (children.length) {
              var firstChild = children[0];
              if (clientX < firstChild.getBoundingClientRect().left / game.documentZoom) {
                button.insertBefore(ui.selected.guanxing_button, firstChild);
              } else button.appendChild(ui.selected.guanxing_button);
            } else button.appendChild(ui.selected.guanxing_button);
          } else {
            var par1 = ui.selected.guanxing_button.parentNode,
              ind1 = ui.selected.guanxing_button.nextSibling,
              par2 = card.parentNode,
              ind2 = card.nextSibling;
            ui.selected.guanxing_button.classList.remove('glow2');
            par1.insertBefore(card, ind1);
            par2.insertBefore(ui.selected.guanxing_button, ind2);
          }
          buttonss.forEach((btn) => {
            Array.from(btn.children).forEach((element) => {
              element._rect2 = element.getBoundingClientRect();
              element.style.transform = `translateX(${(element._rect.left - element._rect2.left) / game.documentZoom}px) translateY(${(element._rect.top - element._rect2.top) / game.documentZoom}px)`;
            });
          });
          event.isPlayingAnimation = true;
          setTimeout(() => {
            Promise.race([
            new Promise((resolve) => setTimeout(resolve, 0)),
            Promise.all(
              buttonss.
              map((btn) => Array.from(btn.children)).
              flat(1).
              map((element) => {
                return new Promise((resolve) => {
                  element.classList.remove('glow2');
                  element.style.transition = '';
                  const transformValue = element.style.transform;
                  if (transformValue !== 'translateX(0px) translateY(0px)' && transformValue !== '') {
                    element.style.transform = 'translateX(0px) translateY(0px)';
                    element.addEventListener(
                      'transitionend',
                      (event) => {
                        if (event.propertyName === 'transform') {
                          resolve();
                        }
                      },
                      { once: true }
                    );
                  } else resolve();
                });
              })
            )]
            ).then(() => {
              delete ui.selected.guanxing_button;
              event.isPlayingAnimation = false;
              updateButtons();
            });
          }, 0);
        };
        for (let i = 0; i < list.length; i++) {
          var tex = event.dialog.add('<div class="text center">' + list[i][0] + '</div>');
          tex.classList.add('choosetomove');
          var buttons = ui.create.div('.buttons', event.dialog.content);
          buttons.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', dragStart, true);
          event.dialog.addEventListener(lib.config.touchscreen ? 'touchmove' : 'mousemove', onDrag, true);
          event.dialog.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', dragEnd, true);
          buttonss.push(buttons);
          buttons.classList.add('popup');
          buttons.classList.add('guanxing');
          buttons._link = i;
          if (list[i][1]) {
            if (get.itemtype(list[i][1]) == 'cards') {
              var cardsb = ui.create.buttons(list[i][1], 'card', buttons);
              if (list[i][2] && typeof list[i][2] == 'string') {
                for (var ij of cardsb) ij.node.gaintag.innerHTML = get.translation(list[i][2]);
              }
            } else if (list[i][1].length == 2) {
              ui.create.buttons(list[i][1][0], list[i][1][1], buttons);
            }
          }
          if (list[i][2] && typeof list[i][2] == 'function') buttons.textPrompt = list[i][2];
        }
        var tex = event.dialog.add('<div class="text center">点击或拖动两张牌以交换位置;点击一张牌并点击其他区域或拖动到其他区域以移动卡牌</div>');
        tex.classList.add('choosetomove');
        event.dialog.open();
        updateButtons();
        event.custom.replace.button = function (button) {
          if (event.isPlayingAnimation) return;
          var node = button.parentNode;
          if (!buttonss.includes(node)) return;
          if (!ui.selected.guanxing_button) {
            ui.selected.guanxing_button = button;
            button.classList.add('glow2');
            return;
          }
          if (ui.selected.guanxing_button == button) {
            button.classList.remove('glow2');
            delete ui.selected.guanxing_button;
            return;
          }
        };
        event.custom.replace.confirm = function (bool) {
          if (bool)
          event._result = {
            bool: true,
            moved: event.moved
          };else
          event._result = { bool: false };
          event.dialog.close();
          if (ui.confirm) ui.confirm.close();
          game.resume();
          _status.imchoosing = false;
          setTimeout(function () {
            ui.arena.classList.remove('choose-to-move');
          }, 500);
        };
        game.pause();
        game.countChoose();
        event.choosing = true;
      } else if (event.isOnline()) {
        event.send();
      } else {
        event.result = 'ai';
      }
      'step 1';
      if (event.time)
      game.broadcastAll(function (time) {
        lib.configOL.choose_timeout = time;
      }, event.time);
      var result = event.result || result;
      if ((!result || result == 'ai' || event.forced && !result.bool) && event.processAI) {
        var moved = event.processAI(event.list);
        if (moved)
        result = {
          bool: true,
          moved
        };else
        result = { bool: false };
      }
      event.result = result;
    },
    chooseToLiuh() {
      'step 0';
      if ((!event.fixedResult || !event.fixedResult[player.playerid]) && player.countCards('h') == 0 || (!event.fixedResult || !event.fixedResult[target.playerid]) && target.countCards('h') == 0) {
        event.result = { cancelled: true, bool: false };
        event.finish();
        return;
      }
      game.log(player, '对', target, '发起卦命');
      event.lose_list = [];
      'step 1';
      const sendback = function () {
        if (_status.event != event) {
          return function () {
            event.resultOL = _status.event.resultOL;
          };
        }
      };
      if (event.fixedResult && event.fixedResult[player.playerid]) {
        event.card1 = event.fixedResult[player.playerid];
        event.lose_list.push([player, event.card1]);
      } else if (player.isOnline()) {
        player.wait(sendback);
        event.ol = true;
        player.send(function (ai) {
          game.me.chooseCard('请选择卦命牌', true).set('type', 'compare').set('glow_result', true).ai = ai;
          game.resume();
        }, event.ai);
      } else {
        event.localPlayer = true;
        player.chooseCard('请选择卦命牌', true).set('type', 'compare').set('glow_result', true).ai = event.ai;
      }
      if (event.fixedResult && event.fixedResult[target.playerid]) {
        event.card2 = event.fixedResult[target.playerid];
        event.lose_list.push([target, event.card2]);
      } else if (target.isOnline()) {
        target.wait(sendback);
        event.ol = true;
        target.send(function (ai) {
          game.me.chooseCard('请选择卦命牌', true).set('type', 'compare').set('glow_result', true).ai = ai;
          game.resume();
        }, event.ai);
      } else {
        event.localTarget = true;
      }
      'step 2';
      if (event.localPlayer) {
        if (result.skill && lib.skill[result.skill] && lib.skill[result.skill].onCompare) {
          result.cards = lib.skill[result.skill].onCompare(player);
        } else event.lose_list.push([player, result.cards[0]]);
        event.card1 = result.cards[0];
      }
      if (event.localTarget) {
        target.chooseCard('请选择卦命牌', true).set('type', 'compare').set('glow_result', true).ai = event.ai;
      }
      'step 3';
      if (event.localTarget) {
        if (result.skill && lib.skill[result.skill] && lib.skill[result.skill].onCompare) {
          result.cards = lib.skill[result.skill].onCompare(target);
        } else event.lose_list.push([target, result.cards[0]]);
        event.card2 = result.cards[0];
      }
      if (!event.resultOL && event.ol) {
        game.pause();
      }
      'step 4';
      try {
        if (!event.card1) {
          if (event.resultOL[player.playerid].skill && lib.skill[event.resultOL[player.playerid].skill] && lib.skill[event.resultOL[player.playerid].skill].onCompare) {
            event.resultOL[player.playerid].cards = lib.skill[event.resultOL[player.playerid].skill].onCompare(player);
          } else event.lose_list.push([player, event.resultOL[player.playerid].cards[0]]);
          event.card1 = event.resultOL[player.playerid].cards[0];
        }
        if (!event.card2) {
          if (event.resultOL[target.playerid].skill && lib.skill[event.resultOL[target.playerid].skill] && lib.skill[event.resultOL[target.playerid].skill].onCompare) {
            event.resultOL[target.playerid].cards = lib.skill[event.resultOL[target.playerid].skill].onCompare(player);
          } else event.lose_list.push([target, event.resultOL[target.playerid].cards[0]]);
          event.card2 = event.resultOL[target.playerid].cards[0];
        }
        if (!event.card1 || !event.card2) {
          throw 'err';
        }
      } catch (e) {
        console.log(e);
      }
      if (event.num2 >= 10 || event.num2 <= 4) {
        if (target.countCards('h') > 2) {
          event.addToAI = true;
        }
      }
      if (event.lose_list.length) {
        game.loseAsync({
          lose_list: event.lose_list
        }).setContent('chooseToCompareLose');
      }
      'step 5';
      event.trigger('compareCardShowBefore');
      'step 6';
      game.broadcast(function () {
        ui.arena.classList.add('thrownhighlight');
      });
      ui.arena.classList.add('thrownhighlight');
      game.addVideo('thrownhighlight1');
      player.$compare(event.card1, target, event.card2);
      game.log(player, '的卦命牌为', event.card1);
      game.log(target, '的卦命牌为', event.card2);
      const getNum = function (card) {
        for (const i of event.lose_list) {
          if (i[1] == card) return card.number;
        }
        return card.number;
      };
      event.num1 = getNum(event.card1);
      event.num2 = getNum(event.card2);
      event.trigger('compare');
      'step 7';
      event.result = {
        player: event.card1,
        target: event.card2,
        num1: event.num1,
        num2: event.num2
      };
      let str;
      if (event.num1 > event.num2) {
        event.result.bool = true;
        event.result.winner = player;
        str = get.translation(player) + '卦命成功';
        player.popup('胜');
        target.popup('负');
      } else {
        event.result.bool = false;
        str = get.translation(player) + '卦命失败';
        if (event.num1 == event.num2) {
          event.result.tie = true;
          player.popup('平');
          target.popup('平');
        } else {
          event.result.winner = target;
          player.popup('负');
          target.popup('胜');
        }
      }
      game.broadcastAll(function (str) {
        const dialog = ui.create.dialog(str);
        dialog.classList.add('center');
        setTimeout(function () {
          dialog.close();
        }, 1000);
      }, str);
      'step 8';
      if (typeof event.target.ai.shown == 'number' && event.target.ai.shown <= 0.85 && event.addToAI) {
        event.target.ai.shown += 0.1;
      }
      game.broadcastAll(function () {
        ui.arena.classList.remove('thrownhighlight');
      });
      game.addVideo('thrownhighlight2');
      if (event.clear !== false) {
        game.broadcastAll(ui.clear);
      }
      if (typeof event.preserve == 'function') {
        event.preserve = event.preserve(event.result);
      } else if (event.preserve == 'win') {
        event.preserve = event.result.bool;
      } else if (event.preserve == 'lose') {
        event.preserve = !event.result.bool;
      }
    },
    chooseToLiuhMeanwhile() {
      'step 0';
      if (player.countCards('h') == 0) {
        event.result = { cancelled: true, bool: false };
        event.finish();
        return;
      }
      for (let i = 0; i < targets.length; i++) {
        if (targets[i].countCards('h') == 0) {
          event.result = { cancelled: true, bool: false };
          event.finish();
          return;
        }
      }
      if (!event.multitarget) {
        targets.sort(lib.sort.seat);
      }
      game.log(player, '对', targets, '发起了共同卦命');
      event.compareMeanwhile = true;
      'step 1';
      event._result = [];
      event.list = targets.filter(function (current) {
        return !event.fixedResult || !event.fixedResult[current.playerid];
      });
      if (event.list.length || !event.fixedResult || !event.fixedResult[player.playerid]) {
        if (!event.fixedResult || !event.fixedResult[player.playerid]) event.list.unshift(player);
        player.chooseCardOL(event.list, '请选择卦命牌', true).set('type', 'compare').set('ai', event.ai).set('source', player).aiCard = function (target) {
          const hs = target.getCards('h');
          const event = _status.event;
          event.player = target;
          hs.sort(function (a, b) {
            return Math.abs(event.ai(a) - 13 * player.hp / 8 + (Math.random() > 0.5 ? 2 * Math.random() : -2 * Math.random())) - Math.abs(event.ai(b) - 13 * player.hp / 8 + (Math.random() > 0.5 ? 2 * Math.random() : -2 * Math.random()));
          });
          delete event.player;
          return { bool: true, cards: [hs[0]] };
        };
      }
      'step 2';
      var cards = [];
      const lose_list = [];
      if (event.fixedResult && event.fixedResult[player.playerid]) {
        event.list.unshift(player);
        result.unshift({
          bool: true,
          cards: [event.fixedResult[player.playerid]]
        });
        lose_list.push([player, [event.fixedResult[player.playerid]]]);
      } else {
        if (result[0].skill && lib.skill[result[0].skill] && lib.skill[result[0].skill].onCompare) {
          result[0].cards = lib.skill[result[0].skill].onCompare(player);
        } else lose_list.push([player, result[0].cards]);
      }
      for (let j = 0; j < targets.length; j++) {
        if (event.list.includes(targets[j])) {
          const i = event.list.indexOf(targets[j]);
          if (result[i].skill && lib.skill[result[i].skill] && lib.skill[result[i].skill].onCompare) {
            result[i].cards = lib.skill[result[i].skill].onCompare(event.list[i]);
          } else lose_list.push([targets[j], result[i].cards]);
          cards.push(result[i].cards[0]);
        } else if (event.fixedResult && event.fixedResult[targets[j].playerid]) {
          cards.push(event.fixedResult[targets[j].playerid]);
          lose_list.push([targets[j], [event.fixedResult[targets[j].playerid]]]);
        }
      }
      if (lose_list.length) {
        game.loseAsync({
          lose_list: lose_list
        }).setContent('chooseToCompareLose');
      }
      event.lose_list = lose_list;
      event.getNum = function (card) {
        for (const i of event.lose_list) {
          if (i[1].includes && i[1].includes(card)) return card.number;
        }
        return card.number;
      };
      event.cardlist = cards;
      event.cards = cards;
      event.card1 = result[0].cards[0];
      event.num1 = event.getNum(event.card1);
      event.iwhile = 0;
      event.winner = null;
      event.maxNum = -1;
      event.pkjyuu = 0;
      event.tempplayer = event.player;
      const hgmglist = [event.card1, ...event.cardlist],
        hgmglist2 = Array.from(hgmglist, (card) => event.getNum(card));
      for (const i of hgmglist2) {
        event.pkjyuu += i;
      }
      event.pkjyuu = event.pkjyuu / hgmglist2.length;
      event.jpgo = event.pkjyuu * player.hp / 4;
      event.result = {
        winner: null,
        player: event.card1,
        targets: event.cardlist.slice(0),
        num1: [],
        num2: [],
        jpgo: event.jpgo
      };
      'step 3';
      event.trigger('compareCardShowBefore');
      'step 4';
      player.$compareMultiple(event.card1, targets, cards);
      game.log(player, '的卦命牌为', event.card1);
      event.cardlist.forEach((card, index) => {
        game.log(targets[index], '的卦命牌为', card);
      });
      player.addTempClass('target');
      'step 5';
      event.target = null;
      event.trigger('compare');
      'step 6';
      if (event.iwhile < targets.length) {
        event.target = targets[event.iwhile];
        event.target.addTempClass('target');
        event.card2 = event.cardlist[event.iwhile];
        event.num2 = event.getNum(event.card2);
        delete event.player;
        event.trigger('compare');
      } else {
        event.goto(9);
      }
      'step 7';
      event.result.num1[event.iwhile] = event.num1;
      event.result.num2[event.iwhile] = event.num2;
      const listx = [
      [event.tempplayer, event.num1],
      [event.target, event.num2]];

      for (const i of listx) {
        if (Math.abs(i[1] - event.jpgo) < Math.abs(event.maxNum - event.jpgo)) {
          event.maxNum = i[1];
          event.winner = i[0];
        } else if (event.winner && i[1] == event.maxNum && i[0] != event.winner) {
          event.winner = null;
        }
      }
      'step 8';
      event.iwhile++;
      event.goto(6);
      'step 9';
      var player = event.tempplayer;
      event.player = player;
      delete event.tempplayer;
      let str = '无人卦命成功';
      if (event.winner) {
        event.videoId = lib.status.videoId++;
        game.broadcastAll(
          function (player, id, num1, num2, winner) {
            let str;
            if (player == game.me && !_status.auto) {
              str = '卦命<br>天命卦数:';
            } else {
              str = '卦命<br>天命卦数:';
            }
            const dialog = ui.create.dialog(str + num1 + '<br>所占卦数为:' + num2 + '<br>卦数之差为:' + Math.abs(num2 - num1) + '<br>天命之人为:<br>', [[winner.name], 'character']);
            dialog.videoId = id;
          },
          player,
          event.videoId,
          event.jpgo,
          event.maxNum,
          event.winner
        );
        event.time = get.utc();
        game.addVideo('delay', null, 1.5);
        setTimeout(function () {
          game.broadcastAll('closeDialog', event.videoId);
        }, 6000);
        event.result.jpgo = event.jpgo;
        event.result.maxNum = event.maxNum;
        event.result.winner = event.winner;
        str = get.translation(event.winner) + '卦命成功';
        game.log(event.winner, '卦命成功');
        event.winner.popup('胜');
      } else game.log('#b无人', '卦命成功');
      const list = [player].addArray(targets);
      list.yiiu(event.winner);
      for (const i of list) {
        i.popup('负');
      }
      if (str) {
        game.broadcastAll(function (str) {
          const dialog = ui.create.dialog(str);
          dialog.classList.add('center');
          setTimeout(function () {
            dialog.close();
          }, 1000);
        }, str);
      }
      'step 10';
      game.broadcastAll(ui.clear);
      'step 11';
      event.cards.add(event.card1);
    }
  });
  Object.assign(lib, {
    guyzbnqk: ['egg1', 'egg2', 'flower1', 'flower2', 'jiasuo1', 'jiasuo2', 'shoe1', 'shoe2', 'shoukao1', 'shoukao2', 'wine1', 'wine2', 'yuxis1', 'yuxis2', 'yuxisx1', 'yuxisx2']
  });
  Object.assign(lib.translate, {
    eggSpam: '一堆鸡蛋',
    flowerSpam: '一堆鲜花'
  });
  Object.assign(lib.element.player, {
    zadj(target, emotion) {
      var next = game.createEvent('zadj', false);
      next.player = this;
      next.target = target;
      next.emotion = emotion;
      next._args = Array.from(arguments);
      next.setContent('zadj');
    },
    $zadj(target, name) {
      const event = _status.event;
      event.player = this;
      event.target = target;
      event.bnqk = name;
      _status.event.trigger('zadjBegin');
      game.addVideo('zadj', this, [target.dataset.position, name]);
      var getLeft = function (player) {
        if (player == game.me && !ui.fakeme && !ui.chess) return player.getLeft() + player.node.avatar.offsetWidth / 2;
        return player.getLeft() + player.offsetWidth / 2;
      };
      var player = this;
      const lujk = ['egg1', 'egg2', 'flower1', 'flower2', 'jiasuo1', 'jiasuo2', 'shoe1', 'shoe2', 'shoukao1', 'shoukao2', 'wine1', 'wine2', 'yuxis1', 'yuxis2', 'yuxisx1', 'yuxisx2'].includes(name) ? 'image/emotion/throw_emotion/' : 'extension/恒梦/image/bnqk/';
      var emotion = ui.create.div('', '<div style="text-align:center"> <img src="' + lujk + name + '1.png"> </div>', game.chess ? ui.chess : ui.window);
      emotion.style.width = '60px';
      emotion.style.height = '60px';
      var width = emotion.offsetWidth / 2;
      var height = emotion.offsetHeight / 2;
      if (game.chess) width += 60;
      var left = getLeft(player) - width;
      var top = player.getTop() + player.offsetHeight / 3 - height;
      emotion.style.left = left + 'px';
      emotion.style.top = top + 'px';
      var left2 = getLeft(target) - width;
      var top2 = target.getTop() + target.offsetHeight / 3 - height;
      emotion.style['z-index'] = 10;
      emotion.style.transform = 'translateY(' + (top2 - top) + 'px) translateX(' + (left2 - left) + 'px)';
      _status.event.trigger('zadjHit');
      const yiyzyuyb = ['flower', 'egg', 'shoe', 'wine'];
      if (lib.config.background_audio) game.playAudio('effect/throw_' + (yiyzyuyb.includes(name) ? name : yiyzyuyb.randomGet()) + get.rand(1, 2));
      setTimeout(function () {
        _status.event.trigger('zadjAfter');
        emotion.innerHTML = '<div style="text-align:center"> <img src="' + lujk + name + '2.png"> </div>';
        setTimeout(function () {
          emotion.delete();
        }, 1200);
      }, 600);
    },
    chooseToComparerfrj(target, storage, check) {
      var next = game.createEvent('chooseToCompare');
      next.player = this;
      if (Array.isArray(target)) {
        next.targets = target;
        if (check) next.ai = check;else

        next.ai = function (card) {
          if (typeof card == 'string' && lib.skill[card]) {
            var ais =
            lib.skill[card].check ||
            function () {
              return 0;
            };
            return ais();
          }
          var addi = get.value(card) >= 8 && get.type(card) != 'equip' ? -3 : 0;
          if (card.name == 'du') addi -= 3;
          var source = _status.event.source;
          var player = _status.event.player;
          var event = _status.event.parent;
          var getn = function (card) {
            if (player.hasSkillTag('forceWin', null, { card })) return 13 * (Boolean(event.small) ? -1 : 1);
            return card.number * (Boolean(event.small) ? -1 : 1);
          };
          if (source && source != player) {
            if (get.attitude(player, source) > 1) {
              if (Boolean(event.small)) return getn(card) - get.value(card) / 3 + addi;
              return -getn(card) - get.value(card) / 3 + addi;
            }
            if (Boolean(event.small)) return -getn(card) - get.value(card) / 5 + addi;
            return getn(card) - get.value(card) / 5 + addi;
          } else {
            if (Boolean(event.small)) return -getn(card) - get.value(card) / 5 + addi;
            return getn(card) - get.value(card) / 5 + addi;
          }
        };
        next.setContent('chooseToCompareMultiple');
      } else {
        next.target = target;
        if (check) next.ai = check;else

        next.ai = function (card) {
          if (get.attitude(next.player, target) > 0) {
            return 6 - get.value(card);
          }
          return card.number;
        };
        next.storage = storage;
        next.setContent('chooseToComparerfrj');
      }
      next.forceDie = true;
      next._args = Array.from(arguments);
      return next;
    },
    hvsu_duqu(storage) {
      const player = this;
      if (!player.storage[storage]) return;
      let i, j;
      game.broadcastAll(function (player) {
        player.getCards('hej').forEach((i) => i.discard());
      }, player);
      i = player.storage[storage];
      game.broadcastAll(
        function (i, j, current) {
          for (j of i.handcards1) {
            if (j.parentNode == ui.discardPile || j.parentNode == ui.cardPile) {
              current.node.handcards1.appendChild(j);
            } else {
              current.node.handcards1.appendChild(game.createCard2(j));
            }
          }
          for (j of i.handcards2) {
            if (j.parentNode == ui.discardPile || j.parentNode == ui.cardPile) {
              current.node.handcards2.appendChild(j);
            } else {
              current.node.handcards2.appendChild(game.createCard2(j));
            }
          }
          for (j of i.equips) {
            let sut;
            switch (get.subtype(i)) {
              case 'equip1':
                sut = 1;
                break;
              case 'equip2':
                sut = 2;
                break;
              case 'equip3':
                sut = 3;
                break;
              case 'equip4':
                sut = 4;
                break;
              case 'equip5':
                sut = 5;
                break;
            }
            if (!player.hasEnabledSlot(sut)) continue;
            if (j.parentNode == ui.discardPile || j.parentNode == ui.cardPile) {
              j.style.transform = '';
              current.equip(j);
            } else {
              current.equip(game.createCard2(j));
            }
          }
          for (j of i.judges) {
            if (j.parentNode == ui.discardPile || j.parentNode == ui.cardPile) {
              j.style.transform = '';
              j.viewAs = i.viewAs[j];
              if (j.viewAs && j.viewAs != j.name && j.classList.contains('fullskin')) {
                j.classList.add('fakejudge');
                j.node.background.innerHTML = lib.translate[j.viewAs + '_bg'] || get.translation(j.viewAs)[0];
              }
              current.node.judges.appendChild(j);
            }
          }
          for (const mark in current.marks) {
            current.unmarkSkill(mark);
          }
          for (const x in i) {
            if (['player', 'handcards1', 'handcards2', 'judges', 'equips', 'viewAs', 'value'].includes(x)) continue;
            current[x] = i[x];
          }
          current.update();
          ui.updatehl();
        },
        i,
        j,
        player
      );
    },
    hvsu_jilu(storage) {
      const player = this;
      let List, hp, handcards1, handcards2, judges, equips, viewAs, i, j;
      hp = player.hp;
      handcards1 = Array.from(player.node.handcards1.childNodes);
      handcards2 = Array.from(player.node.handcards2.childNodes);
      judges = Array.from(player.node.judges.childNodes);
      equips = Array.from(player.node.equips.childNodes);
      viewAs = judges.map((j) => j.viewAs);
      const datepush = {
        player,
        handcards1,
        handcards2,
        judges,
        equips,
        viewAs,
        value: handcards1.length + handcards2.length + equips.length - judges.length
      };
      List = ['hp', 'maxHp', 'sex', 'className', 'name', 'name1', 'name2', 'group', 'skipList', 'hujia'];
      List.forEach((key) => {
        datepush[key] = player[key];
      });
      player.storage[storage] = datepush;
      ui.updatehl();
    },
    iaruhvherfrj(skill, insert) {
      var evt = _status.event.getParent('phase');
      var next;
      if (evt && evt.parent && evt.parent.next) {
        evt = evt.parent;
        next = game.createEvent('phase', false, evt);
      } else if (_status.event.parent && _status.event.parent.next) {
        evt = _status.event.parent;
        next = game.createEvent('phase', false, evt);
      } else {
        evt = null;
        next = game.createEvent('phase', false);
      }
      if (evt && insert && evt.next.includes(next)) {
        evt.next.remove(next);
        evt.next.unshift(next);
      }
      next.player = this;
      next.forceDie = true;
      next.includeOut = true;
      next.skill = skill || _status.event.name;
      next.setContent('hvherfrj');
      return next;
    },
    hvherfrj(skill) {
      var next = game.createEvent('phase', false);
      next.player = this;
      next.setContent('hvherfrj');
      if (skill) {
        next.skill = skill;
      }
      next.forceDie = true;
      next.includeOut = true;
      return next;
    },
    hvhe(skill) {
      const next = game.createEvent('phase');
      next.player = this;
      next.setContent('hvhe');
      if (skill) {
        next.skill = skill;
      }
      next.forceDie = true;
      next.includeOut = true;
      return next;
    },
    inituyfaji(skillname) {
      if (!this.isUnderControl(true)) {
        return;
      }
      var info = lib.skill[skillname];
      if (!info) return;
      if (info.clickable) {
        var button = ui.create.div('.uyfaji', ui.arena);
        button.style.backgroundSize = '100% 100%';
        button.zIndex = 1000;
        button.innerHTML = get.translation(skillname);
        var player = this;
        button.addEventListener('click', function () {
          if (player.hasSkill(skillname, true, true, false)) {
            if (info.clickable) {
              if (!info.clickableFilter(player) || !player.hasSkill(skillname, false, true, true)) {
                player.chat('当前不可发动!');
                return;
              }
              info.clickable(player);
            }
          } else {
            button.delete();
          }
        });
      }
    },
    inituyfajix(skill) {
      if (!this.isUnderControl(true)) return;
      let info = lib.skill[skill];
      if (!info) return;
      if (info.clickable) {
        let button = ui.create.div('.uyfaji', this);
        button.innerHTML = get.translation(skill);
        button.listen(() => {
          if (this.hasSkill(skill, true, true, false)) {
            if (info.clickable) {
              if (!info.clickableFilter(this) || !this.hasSkill(skill, false, true, true)) {
                this.chat('当前不可发动!');
                return;
              }
              info.clickable(this);
            }
          } else {
            button.delete();
          }
        });
      }
    },
    changeYunlvji(skill) {
      let info = get.info(skill),
        yunlv = info.yunlvji;
      if (typeof yunlv == 'function') yunlv(this, skill);else
      if (yunlv == 'number') this.addMark(skill, 1, false);else
      this.storage[skill] = !this.storage[skill];
      game.broadcastAll(
        function (player, skill) {
          player.$changeYunlvji(skill);
        },
        this,
        skill
      );
      var next = game.createEvent('changeYunlvji');
      next.setContent('changeYunlvji');
      next.player = this;
      next.skill = skill;
    },
    $changeYunlvji(skill) {
      var mark = this.marks[skill];
      if (lib.skill[skill].markimage || lib.skill[skill].noyunlv) return;
      if (mark) {
        if (mark.firstChild.reversed) {
          mark.firstChild.reversed = false;
          mark.firstChild.style.transform = 'none';
        } else {
          mark.firstChild.reversed = true;
          mark.firstChild.style.transform = 'rotate(180deg)';
        }
      }
    },
    queueCssAnimation(animation) {
      var current = this.style.animation;
      var animations = this._cssanimations;
      if (animations == undefined) {
        animations = [];
        this._cssanimations = animations;
        this.addEventListener('animationend', function (e) {
          if (this.style.animationName != e.animationName) return;
          var current = this.style.animation;
          var animations = this._cssanimations;
          while (animations.length) {
            this.style.animation = animations.shift();
            if (this.style.animation != current) return;
            animations.current = this.style.animation;
          }
          animations.current = '';
          this.style.animation = '';
        });
      }
      if (animations.current || animations.length) {
        animations.push(animation);
        return;
      }
      animations.current = animation;
      this.style.animation = animation;
    },
    phaseUsex(target) {
      let next = game.createEvent('phaseUse');
      next.target = target;
      next.player = this;
      next.setContent('phaseUsex');
      return next;
    },
    chooseToMovetm(ciuu) {
      const next = game.createEvent('chooseToMove');
      next.player = this;
      for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'boolean') {
          next.forced = arguments[i];
        } else if (typeof arguments[i] == 'string') {
          next.prompt = arguments[i];
        }
      }
      next.setContent('chooseToMovetm');
      next.ciuu = ciuu;
      next.filterOk = function () {
        return true;
      };
      next.filterMove = function () {
        return true;
      };
      return next;
    },
    chooseToMoveif() {
      const next = game.createEvent('chooseToMove');
      next.player = this;
      for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'boolean') {
          next.forced = arguments[i];
        } else if (typeof arguments[i] == 'string') {
          next.prompt = arguments[i];
        }
      }
      next.setContent('chooseToMoveif');
      next.filterOk = function () {
        return true;
      };
      next.filterMove = function () {
        return true;
      };
      return next;
    },
    isvijing(skillx) {
      const player = this;
      let skills;
      if (skillx && typeof skillx === 'string') {
        skills = [skillx];
      } else if (skillx && Array.isArray(skillx)) {
        skills = skillx;
      } else skills = player.getStockSkills(true, true);
      game.expandSkills(skills);
      const resetSkills = [];
      const suffixs = ['used', 'round', 'block', 'blocker'];
      for (const skill of skills) {
        const info = get.info(skill);
        if (typeof info.usable == 'number') {
          if (player.getStat('triggerSkill')[skill] && player.getStat('triggerSkill')[skill] >= 1) {
            delete player.getStat('triggerSkill')[skill];
            resetSkills.add(skill);
          }
          if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
            delete player.getStat('skill')[skill];
            resetSkills.add(skill);
          }
        }
        if (info.round && player.storage[skill + '_roundcount']) {
          delete player.storage[skill + '_roundcount'];
          resetSkills.add(skill);
        }
        if (player.storage[`temp_ban_${skill}`]) {
          delete player.storage[`temp_ban_${skill}`];
        }
        if (player.awakenedSkills.includes(skill)) {
          player.restoreSkill(skill);
          resetSkills.add(skill);
        }
        for (const suffix of suffixs) {
          if (player.hasSkill(skill + '_' + suffix)) {
            player.removeSkill(skill + '_' + suffix);
            resetSkills.add(skill);
          }
        }
      }
      if (resetSkills.length) {
        let str = '';
        for (const i of resetSkills) {
          str += '【' + get.translation(i) + '】、';
        }
        game.log(player, '重置了技能', '#g' + str.slice(0, -1));
      }
    },
    tnww(target) {
      game.broadcastAll(
        function (p, t) {
          let b = t.getTop();
          let c = p.getTop();
          let d = p.node.avatar.offsetHeight;
          let e = t.getLeft();
          let f = p.getLeft();
          let g = p.node.avatar.offsetWidth;
          p.style.zIndex = 0;
          if (b - c < 300 || c - b < 300) {
            p.style.transform = 'translateY(' + (b - c) + 'px)';
          } else if (c - b > 300) {
            p.style.transform = 'translateY(' + (b - c + d) + 'px)';
          } else {
            p.style.transform = 'translateY(' + (b - c - d) + 'px)';
          }
          if (e < f || f <= e && e < g) p.style.transform += 'translateX(' + (e - f + g + 5) + 'px)';else
          p.style.transform += 'translateX(' + (e - f - g - 5) + 'px)';
        },
        this,
        target
      );
    },
    fuuf(target, config) {
      game.broadcastAll(
        function (p, t, config) {
          let b = t.getTop();
          let c = p.getTop();
          let dt = t.node.avatar.offsetHeight;
          let d = p.node.avatar.offsetHeight;
          let e = t.getLeft();
          let f = p.getLeft();
          let gt = t.node.avatar.offsetWidth;
          let g = p.node.avatar.offsetWidth;
          p.style.zIndex = 100;
          let hg = config % 2;
          let uu = Math.floor(config / 2) + 1;
          p.style.transform = 'translateY(' + (b - c - dt + 60 * uu) + 'px)';
          p.style.transform += 'translateX(' + (e - f + (hg === 1 ? 50 : -50)) + 'px)';
        },
        this,
        target,
        config
      );
    },
    wwyi(target, config) {
      game.broadcastAll(
        function (p, t, config) {
          let b = t.getTop();
          let c = p.getTop();
          let d = p.node.avatar.offsetHeight;
          let e = t.getLeft();
          let f = p.getLeft();
          let g = p.node.avatar.offsetWidth;
          p.style.zIndex = 0;
          if (config === 'uh') {
            if (b - c > 0) p.style.transform = 'translateY(' + (b - c - d) + 'px)';else
            p.style.transform = 'translateY(' + (b - c + d) + 'px)';
            p.style.transform += 'translateX(' + (e - f) + 'px)';
          } else if (config === 'yz') {
            p.style.transform = 'translateY(' + (b - c) + 'px)';
            if (e < f || f <= e && e < g) p.style.transform += 'translateX(' + (e - f + g + 5) + 'px)';else
            p.style.transform += 'translateX(' + (e - f - g - 5) + 'px)';
          } else if (config === 'xp') {
            if (b - c > 0) p.style.transform = 'translateY(' + (b - c - d) + 'px)';else
            p.style.transform = 'translateY(' + (b - c + d) + 'px)';
            if (e < f || f <= e && e < g) p.style.transform += 'translateX(' + (e - f + g + 5) + 'px)';else
            p.style.transform += 'translateX(' + (e - f - g - 5) + 'px)';
          }
        },
        this,
        target,
        config
      );
    },
    lmxm(player, target, config, id) {
      if (get.itemtype(target) == 'players') {
        for (let i = 0; i < target.length; i++) {
          player.lmxm(target[i], config);
        }
      } else if (get.itemtype(target) == 'player') {
        if (target == player) return;
        game.broadcast(
          function (player, target, config) {
            player.line(target, config);
          },
          player,
          target,
          config
        );
        game.addVideo('line', player, [target.dataset.position, config]);
        const node = game.lmxmxy([player.getLeft() + player.offsetWidth / 2, player.getTop() + player.offsetHeight / 2, target.getLeft() + target.offsetWidth / 2, target.getTop() + target.offsetHeight / 2], config, true, id);
      }
    },
    chooseToLiuh(target, check) {
      let next = game.createEvent('chooseToLiuh');
      next.player = this;
      if (Array.isArray(target)) {
        next.targets = target;
        if (check) next.ai = check;else

        next.ai = function (card) {
          if (typeof card == 'string' && lib.skill[card]) {
            const ais =
            lib.skill[card].check ||
            function () {
              return 0;
            };
            return ais();
          }
          let addi = get.value(card) >= 8 && get.type(card) != 'equip' ? -3 : 0;
          if (card.name == 'du') addi -= 3;
          let source = _status.event.source;
          let player = _status.event.player;
          let event = _status.event.parent;
          let getn = function (card) {
            if (player.hasSkill('tianbian') && card.suit == 'heart') return 13 * (Boolean(event.small) ? -1 : 1);
            return card.number * (Boolean(event.small) ? -1 : 1);
          };
          if (source && source != player) {
            if (get.attitude(player, source) > 1) {
              if (Boolean(event.small)) return getn(card) - get.value(card) / 3 + addi;
              return -getn(card) - get.value(card) / 3 + addi;
            }
            if (Boolean(event.small)) return -getn(card) - get.value(card) / 5 + addi;
            return getn(card) - get.value(card) / 5 + addi;
          } else {
            if (Boolean(event.small)) return -getn(card) - get.value(card) / 5 + addi;
            return getn(card) - get.value(card) / 5 + addi;
          }
        };
        next.setContent('chooseToCompareMultiple');
      } else {
        next.target = target;
        if (check) next.ai = check;else

        next.ai = function (card) {
          if (typeof card == 'string' && lib.skill[card]) {
            let ais =
            lib.skill[card].check ||
            function () {
              return 0;
            };
            return ais();
          }
          let player = get.owner(card);
          let getn = function (card) {
            if (player.hasSkill('tianbian') && card.suit == 'heart') return 13;
            return card.number;
          };
          let event = _status.event.parent;
          let to = player == event.player ? event.target : event.player;
          let addi = get.value(card) >= 8 && get.type(card) != 'equip' ? -6 : 0;
          let friend = get.attitude(player, to) > 0;
          if (card.name == 'du') addi -= 5;
          if (player == event.player) {
            if (Boolean(event.small)) return -getn(card) - get.value(card) / (friend ? 4 : 5) + addi;
            return getn(card) - get.value(card) / (friend ? 4 : 5) + addi;
          } else {
            if (friend == Boolean(event.small)) return getn(card) - get.value(card) / (friend ? 3 : 5) + addi;
            return -getn(card) - get.value(card) / (friend ? 3 : 5) + addi;
          }
        };
        next.setContent('chooseToLiuh');
      }
      next.forceDie = true;
      next._args = Array.from(arguments);
      return next;
    }
  });
  Object.assign(lib.message.server, {
    zadj(target, emotion) {
      if (lib.node.observing.includes(this)) return;
      var player = lib.playerOL[this.id];
      if (player) {
        player.zadj(target, emotion);
      }
    }
  });
  Object.assign(game.videoContent, {
    zadj(player, content) {
      if (player && content) {
        player.$zadj(game.playerMap[content[0]], content[1]);
      } else {
        console.log(player);
      }
    },
    swapSeat(content) {
      const player1 = game.playerMap[content[0]];
      const player2 = game.playerMap[content[1]];
      if (!player1 || !player2) {
        console.log(content);
        return;
      }
      let temp1, pos, num;
      temp1 = player1.dataset.position;
      player1.dataset.position = player2.dataset.position;
      player2.dataset.position = temp1;
      game.arrangePlayers();
      if (player1.dataset.position == '0' || player2.dataset.position == '0') {
        pos = parseInt(player1.dataset.position);
        if (pos == 0) pos = parseInt(player2.dataset.position);
        num = game.players.length + game.dead.length;
        for (const i of game.players) {
          temp1 = parseInt(i.dataset.position) - pos;
          if (temp1 < 0) temp1 += num;
          i.dataset.position = temp1;
        }
        for (let i = 0; i < game.dead.length; i++) {
          temp1 = parseInt(game.dead[i].dataset.position) - pos;
          if (temp1 < 0) temp1 += num;
          game.dead[i].dataset.position = temp1;
        }
      }
      game.playerMap = {};
      const players = game.players.concat(game.dead);
      for (const i of players) {
        game.playerMap[i.dataset.position] = i;
      }
    },
    ilzcFellow(content) {
      const player = game.ilzcFellow(content[0], content[1], content[2]);
      game.playerMap[player.dataset.position] = player;
    },
    lmxm(player, content) {
      if (player && content) {
        player.lmxm(game.playerMap[content[0]], content[1]);
      } else {
        console.log(player);
      }
    }
  });
  Object.assign(game, {
    fjyi: {
      phaseZhunbei: '准备阶段',
      phaseJudge: '判定阶段',
      phaseDraw: '摸牌阶段',
      phaseUse: '出牌阶段',
      phaseDiscard: '弃牌阶段',
      phaseJieshu: '结束阶段'
    },
    yzjmcddj(elementID, menuID) {
      var menu = document.getElementById(menuID);
      var element = document.getElementById(elementID);
      element.onmousedown = function (aevent) {
        if (window.event) aevent = window.event;
        if (aevent.button == 2) {
          document.oncontextmenu = function (aevent) {
            if (window.event) {
              aevent = window.event;
              aevent.returnValue = false;
            } else {
              aevent.preventDefault();
            }
          };
          menu.style.cssText = 'display:block;top:' + aevent.clientY + 'px;left:' + aevent.clientX + 'px;';
        }
      };
      menu.onmouseout = function () {
        setTimeout(function () {
          menu.style.display = 'none';
        }, 400);
      };
    },
    hgmgvoiskdgr() {
      if (window.hgmgvois) return;
      window.hgmgvois = ui.create.div('.hgmgvois', ui.arena);
      let items = lib.extensionMenu.extension_恒梦.hgmg_ybyt.item;
      if (lib.config.hgmgvois_voiswwvi) {
        window.hgmgvois.innerHTML = items[lib.config.extension_恒梦_hgmg_ybyt];
        window.hgmgvois.style.setProperty('--l', Math.round(lib.config.hgmgvois_voiswwvi.x * document.body.offsetWidth) + 'px');
        window.hgmgvois.style.setProperty('--t', Math.round(lib.config.hgmgvois_voiswwvi.y * document.body.offsetHeight) + 'px');
      }
      let yidsing = false,
        olx = 0,
        otx = 0;
      if (lib.config.touchscreen) {
        window.hgmgvois.style.display = 'block';
        window.hgmgvois.addEventListener('touchstart', function (e) {
          var evt = e || window.event;
          olx = evt.touches[0].clientX - window.hgmgvois.offsetLeft;
          otx = evt.touches[0].clientY - window.hgmgvois.offsetTop;
          document.addEventListener('touchmove', morfuijm, false);
        });
        window.hgmgvois.addEventListener('touchmove', function (e) {
          var evt = e || window.event;
          var oleftx = evt.touches[0].clientX - olx;
          var otopx = evt.touches[0].clientY - otx;
          window.hgmgvois.style.left = oleftx + 'px';
          window.hgmgvois.style.top = otopx + 'px';
        });
        window.hgmgvois.addEventListener('touchend', function (e) {
          if (!lib.config.hgmgvois_voiswwvi) {
            lib.config.hgmgvois_voiswwvi = {
              x: this.offsetLeft / document.body.offsetWidth,
              y: this.offsetTop / document.body.offsetHeight
            };
          } else {
            lib.config.hgmgvois_voiswwvi.x = this.offsetLeft / document.body.offsetWidth;
            lib.config.hgmgvois_voiswwvi.y = this.offsetTop / document.body.offsetHeight;
          }
          game.saveConfig('hgmgvois_voiswwvi', lib.config.hgmgvois_voiswwvi);
          document.removeEventListener('touchmove', morfuijm);
        });
        window.hgmgvois.addEventListener('click', function (e) {
          document.removeEventListener('click', morfuijm);
          if (lib.config.hgmg_voisgsng == '1') {
            game.bwjkybytx();
            ui.backgroundMusic.addEventListener('ended', game.bwjkybytx);
          }
        });
      } else {
        window.hgmgvois.onmousedown = function (e) {
          const evt = e || window.event;
          if (document.setCapture) this.setCapture();
          if (window.captureEvents) window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
          olx = evt.clientX - window.hgmgvois.offsetLeft;
          otx = evt.clientY - window.hgmgvois.offsetTop;
          document.onmousemove = function (e) {
            const evt = e || window.event;
            if (!yidsing) yidsing = true;
            window.hgmgvois.style.left = parseInt(evt.clientX - olx) + 'px';
            window.hgmgvois.style.top = parseInt(evt.clientY - otx) + 'px';
          };
          window.hgmgvois.onmouseup = function (e) {
            document.onmousemove = null;
            lib.config.hgmgvois_voiswwvi = {
              x: this.offsetLeft / document.body.offsetWidth,
              y: this.offsetTop / document.body.offsetHeight
            };
            game.saveConfig('hgmgvois_voiswwvi', lib.config.hgmgvois_voiswwvi);
            if (document.releaseCapture) this.releaseCapture();
            if (window.releaseEvents) window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP);
            if (yidsing) {
              setTimeout(() => {
                yidsing = false;
              }, 1);
            }
          };
        };
        window.hgmgvois.addEventListener('click', function () {
          if (!yidsing) {
            if (lib.config.hgmg_voisgsng == '1') {
              game.bwjkybytx();
              ui.backgroundMusic.addEventListener('ended', game.bwjkybytx);
            }
          }
        });
      }
    },
    cyzdwfjm(lujk) {
      var fileURL = lujk;
      var xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
      xmlhttp.open('GET', fileURL, false);
      xmlhttp.send()();
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200)
        return true;else
        if (xmlhttp.status == 404)
        return false;else
        alert('Error');
      }
    },
    qkiutupmbyid(id) {
      const node = document.getElementById(id);
      if (node) {
        ui.window.removeChild(node);
      }
    },
    iavcyrsu(id, background) {
      let yrsu = [];
      if (id) return document.getElementById(id);
      if (background) {
        let divs = document.querySelectorAll('div[style*="background-image"]');
        yrsu = Array.from(divs).filter((div) => div.style.backgroundImage.includes(str));
      }
      return yrsu;
    },
    xmuitupm(str, time, options, id, func) {
      const div = document.createElement('div');
      div.style.backgroundImage = 'url(' + str + '?range=' + Math.random() + ')';
      div.style.backgroundSize = '100% 100%';
      div.style.zIndex = '1';
      if (func) {
        div.onclick = func;
      } else div.style.pointerEvents = 'none';
      if (options && options.height) {
        div.style.height = options.height;
      }
      if (options && options.width) {
        div.style.width = options.width;
      }
      let gc = div.style.height.slice(),
        kr = div.style.width.slice();
      if (gc.includes('px')) {
        gc = gc.replace('px', '');
        gc = gc / window.innerHeight * 100;
      } else if (gc.includes('%')) {
        gc = gc.replace('%', '');
      }
      if (kr.includes('px')) {
        kr = kr.replace('px', '');
        kr = kr / window.innerWidth * 100;
      } else if (kr.includes('%')) {
        kr = kr.replace('%', '');
      }
      div.style.position = 'fixed';
      div.style.left = `${50 - kr / 2}%`;
      div.style.top = `${50 - gc / 2}%`;
      if (id) div.id = id;
      ui.window.appendChild(div);
      if (time)
      setTimeout(function () {
        ui.window.style.transition = '';
        ui.window.removeChild(div);
      }, time);
    },
    zvdrlujkjtse(player, target, bool, card) {
      if (bool === undefined) bool = true;
      const choices = [],left = [],right = [];
      let left2 = player.previous,right2 = player.next;
      while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
        left.push(left2);
        right.push(right2);
        left2 = left2.previous;
        right2 = right2.next;
      }
      if (target == left2) {
        for (const i of left) {
          if (!card || lib.filter.targetEnabled2(card, player, i)) {
            choices.push(...left);
            break;
          }
        }
      }
      if (target == right2) {
        for (const i of right) {
          if (!card || lib.filter.targetEnabled2(card, player, i)) {
            choices.push(...right);
            break;
          }
        }
      }
      if (bool === false) choices.reverse();
      return choices;
    },
    zvdrlujkxrxl(player, target, bool, card) {
      if (bool === undefined) bool = true;
      const choices = [],left = [],right = [];
      let left2 = player.previous,right2 = player.next;
      while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
        left.push(left2);
        right.push(right2);
        left2 = left2.previous;
        right2 = right2.next;
      }
      if (target == left2) {
        if (!left.length) choices.push(bool ? '↖' : '↘');else

        for (const i of left) {
          if (!card || lib.filter.targetEnabled2(card, player, i)) {
            choices.push(bool ? '↖' : '↘');
            break;
          }
        }
      }
      if (target == right2) {
        if (!right.length) choices.push(bool ? '↗' : '↙');else

        for (const i of right) {
          if (!card || lib.filter.targetEnabled2(card, player, i)) {
            choices.push(bool ? '↗' : '↙');
            break;
          }
        }
      }
      return choices;
    },
    yiiuFellow(player) {
      if (_status.roundStart == player) {
        _status.roundStart = player.next || player.next || game.players[0];
      }
      if (game.players.includes(player)) {
        const players = game.players.concat(game.dead);
        player.style.left = player.getLeft() + 'px';
        player.style.top = player.getTop() + 'px';
        if (player == undefined) player = game.dead[0] || game.me.next;
        const position = parseInt(player.dataset.position);
        for (const i of players) {
          if (parseInt(i.dataset.position) > position) {
            i.dataset.position = parseInt(i.dataset.position) - 1;
          }
        }
        if (player.isAlive()) {
          player.next.previous = player.previous;
          player.previous.next = player.next;
        }
        player.nextSeat.previousSeat = player.previousSeat;
        player.previousSeat.nextSeat = player.nextSeat;
        ui.arena.setNumber(players.length - 1);
        game.players.remove(player);
        game.dead.remove(player);
      }
      player.delete();
      player.removed = true;
      if (player == game.me) {
        ui.me.hide();
        ui.auto.hide();
        ui.wuxie.hide();
      }
      setTimeout(function () {
        player.removeAttribute('style');
      }, 500);
      return player;
    },
    ilzcFellow(position, character, wwyi, config, time, animation) {
      let timex = time || 1,
        players = [];
      while (timex-- > 0) {
        game.addVideo('ilzcFellow', null, [position, character, animation]);
        const player = ui.create.player(ui.arena).addTempClass(animation || 'start');
        player.dataset.position = position || undefined;
        player.getId();
        if (character) player.init(character);
        player.wwyi(wwyi, config);
        if (position) game.players.push(player);else
        player.addSkill('lijidie');
        game.arrangePlayers();
        players.push(player);
      }
      return players;
    },
    pifuannq(name, packname, hgmgiftmyi, callback) {
      if (lib.config.skin[name]) {
        let src = 'ext:' + packname + '/';
        if (lib.config.skin[name]) {
          src += 'image/characters/' + name + lib.config.skin[name] + '.jpg';
        } else {
          src += 'image/characters/' + name + '.jpg';
        }
        if (hgmgiftmyi.character) hgmgiftmyi.character[name][4].push(src);else
        lib.character[name][4].push(src);
      }
      let num = 1;
      const createButtons = function (num) {
        if (num == 0) return;
        let src =
        '<div class="buttons smallzoom scrollbuttons" data-pack="' + packname + '" onmousewheel="window.uubngyly.apply(this,arguments)">';
        for (let i = 0; i <= num; i++) {
          src += '<div class="button character pointerdiv" onclick="window.tihrpifu.apply(this,arguments)" data-name="' + name + '" data-num="' + i + '" style="background-image:';
          if (i) {
            src += "url('" + ('extension/' + packname + '/image/characters/' + name + i + '.jpg') + "')";
          } else {
            src += "url('" + ('extension/' + packname + '/image/characters/' + name + '.jpg') + "')";
          }
          src += ';"></div>';
        }
        if (callback) callback(src, name, packname);
        src += '</div>';
        if (!lib.characterTitle[name]) {
          lib.characterTitle[name] = '';
        }
        lib.characterTitle[name] += src;
      };
      const loadImage = function () {
        const img = new Image();
        img.onload = function () {
          num++;
          loadImage();
        };
        img.onerror = function () {
          num--;
          createButtons(num);
        };
        img.src = 'extension/' + packname + '/image/characters/' + name + num + '.jpg';
      };
      loadImage();
    },
    playVideo(str, time) {
      ui.arena.hide();
      const videoUrl = 'extension/恒梦/' + str;
      const video = document.createElement('video');
      video.setAttribute('src', videoUrl);
      video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; pointer-events: none;';
      video.autoplay = true;
      video.loop = false;
      let timerId;
      ui.window.appendChild(video);
      const closean = document.createElement('div');
      closean.innerHTML = '╳';
      closean.style.cssText = 'position: absolute; top: 25px; right: 25px; color: white; font-size: 25px; padding: 5px 10px; background: rgba(255, 251, 240, 0); z-index: 101;';
      closean.onclick = function () {
        clearTimeout(timerId);
        ujiuyrsu(video);
        ujiuyrsu(closean);
        ui.arena.show();
        game.resume();
        if (ui.backgroundMusic && ui.backgroundMusic.volume && ui.backgroundMusic.paused) ui.backgroundMusic.play();
      };
      ui.window.appendChild(closean);
      video.addEventListener('loadedmetadata', function () {
        video.controls = true;
        video.play();
        if (ui.backgroundMusic) ui.backgroundMusic.pause();
        game.pause();
      });
      timerId = time ?
      setTimeout(function () {
        ujiuyrsu(video);
        ujiuyrsu(closean);
        ui.arena.show();
        game.resume();
        if (ui.backgroundMusic && ui.backgroundMusic.volume && ui.backgroundMusic.paused) {
          ui.backgroundMusic.play();
        }
      }, time) :
      null;
    },
    lmxmxy(path) {
      let from = [path[0], path[1]],
        to = [path[2], path[3]];
      if (arguments[4]) {
        from = [path[0] - 100, path[1] - 100];
        to = [path[2] - 100, path[3] - 100];
      }
      let total = typeof arguments[1] === 'number' ? arguments[1] : lib.config.duration * 2,
        opacity = 1,
        color = [255, 255, 255],
        dashed = false,
        drag = false;
      if (typeof arguments[1] == 'object') {
        for (const i in arguments[1]) {
          switch (i) {
            case 'opacity':
              opacity = arguments[1][i];
              break;
            case 'color':
              color = arguments[1][i];
              break;
            case 'dashed':
              dashed = arguments[1][i];
              break;
            case 'duration':
              total = arguments[1][i];
              break;
          }
        }
      } else if (arguments[1] == 'fire' || arguments[1] == 'thunder' || arguments[1] == 'green' || arguments[1] == 'blue' || arguments[1] == 'red' || arguments[1] == 'yellow' || arguments[1] == 'purple' || arguments[1] == 'pink' || arguments[1] == 'orange' || arguments[1] == 'gray' || arguments[1] == 'black' || arguments[1] == 'white' || arguments[1] == 'random') {
        color = arguments[1];
      }
      if (color == 'fire') {
        color = [255, 146, 68];
      } else if (color == 'thunder') {
        color = [141, 216, 255];
      } else if (color == 'green') {
        color = [141, 255, 216];
      } else if (color == 'blue') {
        color = [141, 255, 255];
      } else if (color == 'red') {
        color = [255, 141, 141];
      } else if (color == 'yellow') {
        color = [255, 255, 141];
      } else if (color == 'purple') {
        color = [255, 141, 255];
      } else if (color == 'pink') {
        color = [255, 204, 255];
      } else if (color == 'orange') {
        color = [255, 204, 141];
      } else if (color == 'gray') {
        color = [141, 141, 141];
      } else if (color == 'black') {
        color = [0, 0, 0];
      } else if (color == 'white') {
        color = [255, 255, 255];
      } else if (color == 'random') {
        color = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
      }
      let node;
      if (arguments[1] == 'drag') {
        color = [236, 201, 71];
        drag = true;
        if (arguments[2]) {
          node = arguments[2];
        } else {
          node = ui.create.div('.linexy.drag');
          node.style.left = from[0] + 'px';
          node.style.top = from[1] + 'px';
          node.style.background = 'linear-gradient(transparent,rgba(' + color.toString() + ',' + opacity + '),rgba(' + color.toString() + ',' + opacity + '))';
          if (game.chess) {
            ui.chess.appendChild(node);
          } else {
            ui.arena.appendChild(node);
          }
        }
      } else {
        node = ui.create.div('.linexy.hidden');
        node.style.left = from[0] + 'px';
        node.style.top = from[1] + 'px';
        node.style.background = 'linear-gradient(transparent,rgba(' + color.toString() + ',' + opacity + '),rgba(' + color.toString() + ',' + opacity + '))';
        node.style.transitionDuration = total / 3000 + 's';
      }
      let dy = to[1] - from[1],
        dx = to[0] - from[0],
        deg = Math.atan(Math.abs(dy) / Math.abs(dx)) / Math.PI * 180;
      if (dx >= 0) {
        if (dy <= 0) {
          deg += 90;
        } else {
          deg = 90 - deg;
        }
      } else {
        if (dy <= 0) {
          deg = 270 - deg;
        } else {
          deg += 270;
        }
      }
      if (arguments[3]) node.id = arguments[3];
      if (drag) {
        node.style.transform = 'rotate(' + -deg + 'deg)';
        node.style.height = get.xyDistance(from, to) + 'px';
      } else {
        node.style.transform = 'rotate(' + -deg + 'deg) scaleY(0)';
        node.style.height = get.xyDistance(from, to) + 'px';
        if (get.objtype(arguments[1]) == 'div') {
          arguments[1].appendChild(node);
        } else if (game.chess) {
          ui.chess.appendChild(node);
        } else {
          ui.arena.appendChild(node);
        }
        ui.refresh(node);
        node.show();
        node.style.transform = 'rotate(' + -deg + 'deg) scaleY(1)';
      }
      return node;
    }
  });
  HTMLDivElement.prototype.yi = function (bg, pos, time, func) {
    game.broadcastAll(function (that) {
      var img = document.createElement('div');
      img.setBackgroundImage(bg + '?' + Math.random());
      if (pos && typeof pos == 'object') {
        for (var i in pos) {
          img.style[i] = pos[i];
        }
      }
      img.style.backgroundSize = 'cover';
      that.appendChild(img);
      setTimeout(function () {
        if (func)
        func(img);else
        img.delete();
      }, time);
    }, this);
  };
  Array.prototype.bchj = Array.prototype.includes;
  Array.prototype.yids = function (item, num) {
    this.yiiu(item);
    this.splice(num, 0, item);
    return this;
  };
  Array.prototype.yidsx = function (item, num) {
    if (num === 0) return this;
    const pos = this.indexOf(item);
    const posx = pos + num < 0 ? 0 : pos + num > this.length - 1 ? this.length - 1 : pos + num;
    this.yiiu(item);
    this.splice(posx, 0, item);
    return this;
  };
  Array.prototype.yidsy = function (item, num) {
    if (num === 0) return this;
    const pos = this.indexOf(item);
    const posx = (pos + num) % this.length >= 0 ? (pos + num) % this.length : (pos + num) % this.length + this.length;
    this.yiiu(item);
    this.splice(posx, 0, item);
    return this;
  };
  Array.prototype.qmmm = function (item, num) {
    if (!num) num = 1;
    const pos = this.indexOf(item);
    if (pos == -1) {
      return false;
    }
    const posx = pos - num >= 0 ? pos - num : this.length + pos - num;
    return this[posx];
  };
  Array.prototype.hzmm = function (item, num) {
    if (!num) num = 1;
    const pos = this.indexOf(item);
    if (pos == -1) {
      return this[0];
    }
    const posx = pos + num >= this.length ? pos + num - this.length : pos + num;
    return this[posx];
  };
  Array.prototype.hzmmx = function (item, num) {
    if (!num) num = 1;
    const pos = this.indexOf(item);
    if (pos == -1) {
      return this[0];
    }
    const posx = pos + num >= this.length ? pos + num - this.length : pos + num;
    return this[posx];
  };
  Array.prototype.yiiu = function (item) {
    if (Array.isArray(item)) {
      for (const i of item) {
        this.yiiu(i);
      }
      return;
    }
    const pos = this.indexOf(item);
    if (pos == -1) {
      return false;
    }
    this.splice(pos, 1);
    return this;
  };
  Array.prototype.tmjx = function (...args) {
    for (const i of args) {
      if (this.includes(i)) {
        return false;
      }
      this.push(i);
    }
    return this;
  };
  Array.prototype.svjiyiiu = function (num) {
    if (typeof num == 'number') {
      const list = [];
      for (let i = 0; i < num; i++) {
        if (this.length) {
          list.push(this.svjiyiiu());
        } else {
          break;
        }
      }
      return list;
    } else {
      return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }
  };
  Array.prototype.svjipdxu = function () {
    const list = [];
    while (this.length) {
      list.push(this.svjiyiiu());
    }
    for (const i of list) {
      this.push(i);
    }
    return this;
  };
  Array.prototype.svjihoqu = function (...args) {
    const arr = this.slice();
    for (const i of args) {
      arr.yiiu(i);
    }
    return arr[Math.floor(Math.random() * arr.length)];
  };
  Array.prototype.svjihoqus = function (num) {
    if (num > this.length) {
      num = this.length;
    }
    const arr = this.slice(),
      list = [];
    for (let i = 0; i < num; i++) {
      list.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }
    return list;
  };
  Object.assign(get, {
    nodeintro(node, simple, evt) {
      var uiintro = ui.create.dialog('hidden', 'notouchscroll');
      if (node.classList.contains('player') && !node.name) {
        return uiintro;
      }
      var i, translation, intro, str;
      if (node._nointro) return;
      if (typeof node._customintro == 'function') {
        if (node._customintro(uiintro) === false) return;
      } else if (Array.isArray(node._customintro)) {
        var caption = node._customintro[0];
        var content = node._customintro[1];
        if (typeof caption == 'function') {
          caption = caption(node);
        }
        if (typeof content == 'function') {
          content = content(node);
        }
        uiintro.add(caption);
        uiintro.add('<div class="text center" style="padding-bottom:5px">' + content + '</div>');
      } else if (node.classList.contains('player') || node.linkplayer) {
        if (node.linkplayer) {
          node = node.link;
        }
        var capt = get.translation(node.name);
        if (lib.character[node.name] && lib.character[node.name][1] || lib.group.includes(node.group)) {
          capt += '&nbsp;&nbsp;' + (lib.group.includes(node.group) ? get.translation(node.group) : lib.translate[lib.character[node.name][1]]);
        }
        uiintro.add(capt);
        if (lib.characterTitle[node.name]) {
          uiintro.addText(get.colorspan(lib.characterTitle[node.name]));
        }
        if (!node.noclick && (node.isUnderControl() || !game.observe && game.me && game.me.hasSkillTag('viewHandcard', null, node, true))) {
          var hs = node.getCards('h');
          if (hs.length) {
            uiintro.add('<div class="text center">手牌</div>');
            uiintro.addSmall(node.getCards('h'));
          }
        }
        var skills = node.getSkills(null, false, false).slice(0);
        var skills2 = game.filterSkills(skills, node);
        if (node == game.me && node.hiddenSkills.length) {
          skills.addArray(node.hiddenSkills);
        }
        for (var i in node.disabledSkills) {
          if (node.disabledSkills[i].length == 1 && node.disabledSkills[i][0] == i + '_awake' && !node.hiddenSkills.includes(i)) {
            skills.add(i);
          }
        }
        for (let i = 0; i < skills.length; i++) {
          if (lib.skill[skills[i]] && (lib.skill[skills[i]].nopop || lib.skill[skills[i]].equipSkill)) continue;
          if (lib.translate[skills[i] + '_info']) {
            translation = lib.translate[skills[i] + '_ab'] || get.translation(skills[i]).slice(0, 2);
            if (node.forbiddenSkills[skills[i]]) {
              var forbidstr = '<div style="opacity:0.5"><div class="skill">【' + translation + '】</div><div>';
              if (node.forbiddenSkills[skills[i]].length) {
                forbidstr += '(与' + get.translation(node.forbiddenSkills[skills[i]]) + '冲突)<br>';
              } else {
                forbidstr += '(双将禁用)<br>';
              }
              forbidstr += get.skillInfoTranslation(skills[i], node) + '</div></div>';
              uiintro.add(forbidstr);
            } else if (!skills2.includes(skills[i])) {
              if (lib.skill[skills[i]].preHidden && get.mode() == 'guozhan') {
                uiintro.add('<div><div class="skill" style="opacity:0.5">【' + translation + '】</div><div><span style="opacity:0.5">' + get.skillInfoTranslation(skills[i], node) + '</span><br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">预亮技能</div></div></div>');
                var underlinenode = uiintro.content.lastChild.querySelector('.underlinenode');
                if (_status.prehidden_skills.includes(skills[i])) {
                  underlinenode.classList.remove('on');
                }
                underlinenode.link = skills[i];
                underlinenode.listen(ui.click.hiddenskill);
              } else uiintro.add('<div style="opacity:0.5"><div class="skill">【' + translation + '】</div><div>' + get.skillInfoTranslation(skills[i], node) + '</div></div>');
            } else if (lib.skill[skills[i]].temp || !node.skills.includes(skills[i]) || lib.skill[skills[i]].thundertext) {
              if (lib.skill[skills[i]].frequent || lib.skill[skills[i]].subfrequent) {
                uiintro.add('<div><div class="skill thundertext thunderauto">【' + translation + '】</div><div class="thundertext thunderauto">' + get.skillInfoTranslation(skills[i], node) + '<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
                var underlinenode = uiintro.content.lastChild.querySelector('.underlinenode');
                if (lib.skill[skills[i]].frequent) {
                  if (lib.config.autoskilllist.includes(skills[i])) {
                    underlinenode.classList.remove('on');
                  }
                }
                if (lib.skill[skills[i]].subfrequent) {
                  for (var j = 0; j < lib.skill[skills[i]].subfrequent.length; j++) {
                    if (lib.config.autoskilllist.includes(skills[i] + '_' + lib.skill[skills[i]].subfrequent[j])) {
                      underlinenode.classList.remove('on');
                    }
                  }
                }
                if (lib.config.autoskilllist.includes(skills[i])) {
                  underlinenode.classList.remove('on');
                }
                underlinenode.link = skills[i];
                underlinenode.listen(ui.click.autoskill2);
              } else {
                uiintro.add('<div><div class="skill thundertext thunderauto">【' + translation + '】</div><div class="thundertext thunderauto">' + get.skillInfoTranslation(skills[i], node) + '</div></div>');
              }
            } else if (lib.skill[skills[i]].frequent || lib.skill[skills[i]].subfrequent) {
              uiintro.add('<div><div class="skill">【' + translation + '】</div><div>' + get.skillInfoTranslation(skills[i], node) + '<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
              var underlinenode = uiintro.content.lastChild.querySelector('.underlinenode');
              if (lib.skill[skills[i]].frequent) {
                if (lib.config.autoskilllist.includes(skills[i])) {
                  underlinenode.classList.remove('on');
                }
              }
              if (lib.skill[skills[i]].subfrequent) {
                for (var j = 0; j < lib.skill[skills[i]].subfrequent.length; j++) {
                  if (lib.config.autoskilllist.includes(skills[i] + '_' + lib.skill[skills[i]].subfrequent[j])) {
                    underlinenode.classList.remove('on');
                  }
                }
              }
              if (lib.config.autoskilllist.includes(skills[i])) {
                underlinenode.classList.remove('on');
              }
              underlinenode.link = skills[i];
              underlinenode.listen(ui.click.autoskill2);
            } else if (lib.skill[skills[i]].clickable && node.isIn() && node.isUnderControl(true)) {
              var intronode = uiintro.add('<div><div class="skill">【' + translation + '】</div><div>' + get.skillInfoTranslation(skills[i], node) + '<br><div class="menubutton skillbutton" style="position:relative;margin-top:5px">点击发动</div></div></div>').querySelector('.skillbutton');
              if (!_status.gameStarted || lib.skill[skills[i]].clickableFilter && !lib.skill[skills[i]].clickableFilter(node)) {
                intronode.classList.add('disabled');
                intronode.style.opacity = 0.5;
              } else {
                intronode.link = node;
                intronode.func = lib.skill[skills[i]].clickable;
                intronode.classList.add('pointerdiv');
                intronode.listen(ui.click.skillbutton);
              }
            } else if (lib.skill[skills[i]].nobracket) {
              uiintro.add('<div><div class="skilln">' + get.translation(skills[i]) + '</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
            } else {
              uiintro.add('<div><div class="skill">【' + translation + '】</div><div>' + get.skillInfoTranslation(skills[i], node) + '</div></div>');
            }
            if (lib.translate[skills[i] + '_append']) {
              uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + '_append'] + '</div>');
            }
          }
        }
        if (lib.config.right_range && _status.gameStarted) {
          uiintro.add(ui.create.div('.placeholder'));
          var table, tr, td;
          table = document.createElement('table');
          tr = document.createElement('tr');
          table.appendChild(tr);
          td = document.createElement('td');
          td.innerHTML = '距离';
          tr.appendChild(td);
          td = document.createElement('td');
          td.innerHTML = '手牌';
          tr.appendChild(td);
          td = document.createElement('td');
          td.innerHTML = '行动';
          tr.appendChild(td);
          td = document.createElement('td');
          td.innerHTML = '伤害';
          tr.appendChild(td);
          tr = document.createElement('tr');
          table.appendChild(tr);
          td = document.createElement('td');
          if (node == game.me || !game.me || !game.me.isIn()) {
            td.innerHTML = '-';
          } else {
            var dist1 = get.numStr(Math.max(1, game.me.distanceTo(node)));
            var dist2 = get.numStr(Math.max(1, node.distanceTo(game.me)));
            if (dist1 == dist2) {
              td.innerHTML = dist1;
            } else {
              td.innerHTML = dist1 + '/' + dist2;
            }
          }
          tr.appendChild(td);
          td = document.createElement('td');
          td.innerHTML = node.countCards('h');
          tr.appendChild(td);
          td = document.createElement('td');
          td.innerHTML = node.phaseNumber;
          tr.appendChild(td);
          td = document.createElement('td');
          (function () {
            num = 0;
            for (var j = 0; j < node.stat.length; j++) {
              if (typeof node.stat[j].damage == 'number') num += node.stat[j].damage;
            }
            td.innerHTML = num;
          })();
          tr.appendChild(td);
          table.style.width = 'calc(100% - 20px)';
          table.style.marginLeft = '10px';
          uiintro.content.appendChild(table);
          if (!lib.config.show_favourite) {
            table.style.paddingBottom = '5px';
          }
        }
        if (!simple || get.is.phoneLayout()) {
          var es = node.getCards('e');
          for (let i = 0; i < es.length; i++) {
            var cardinfo = lib.card[es[i].name];
            if (cardinfo && cardinfo.cardPrompt) uiintro.add('<div><div class="skill">' + es[i].outerHTML + '</div><div>' + cardinfo.cardPrompt(es[i]) + '</div></div>');else
            uiintro.add('<div><div class="skill">' + es[i].outerHTML + '</div><div>' + lib.translate[es[i].name + '_info'] + '</div></div>');
            uiintro.content.lastChild.querySelector('.skill>.card').style.transform = '';
          }
          var js = node.getCards('j');
          for (let i = 0; i < js.length; i++) {
            if (js[i].viewAs && js[i].viewAs != js[i].name) {
              uiintro.add('<div><div class="skill">' + js[i].outerHTML + '</div><div>' + lib.translate[js[i].viewAs] + ':' + lib.translate[js[i].viewAs + '_info'] + '</div></div>');
            } else {
              uiintro.add('<div><div class="skill">' + js[i].outerHTML + '</div><div>' + lib.translate[js[i].name + '_info'] + '</div></div>');
            }
            uiintro.content.lastChild.querySelector('.skill>.card').style.transform = '';
          }
          if (get.is.phoneLayout()) {
            var markCoutainer = ui.create.div('.mark-container.marks');
            for (var i in node.marks) {
              var nodemark = node.marks[i].cloneNode(true);
              nodemark.classList.add('pointerdiv');
              nodemark.link = node.marks[i];
              nodemark.style.transform = '';
              markCoutainer.appendChild(nodemark);
              nodemark.listen(function () {
                uiintro.noresume = true;
                var rect = this.link.getBoundingClientRect();
                ui.click.intro.call(this.link, {
                  clientX: rect.left + rect.width,
                  clientY: rect.top + rect.height / 2
                });
                if (lib.config.touchscreen) {
                  uiintro._close();
                }
              });
            }
            if (markCoutainer.childElementCount) {
              uiintro.addText('标记');
              uiintro.add(markCoutainer);
            }
          }
        }
        if (!game.observe && _status.gameStarted && game.me && node != game.me) {
          ui.throwEmotion = [];
          uiintro.addText('发送交互表情');
          var click = function () {
            if (_status.dragged) return;
            if (_status.justdragged) return;
            var emotion = this.link;
            if (game.online) {
              game.send('throwEmotion', node, emotion);
            } else game.me.throwEmotion(node, emotion);
          };
          var click2 = function () {
            if (_status.dragged) return;
            if (_status.justdragged) return;
            var emotion = this.link.slice(0, -4);
            if (game.online) {
              game.send('throwEmotion', node, emotion);
            } else game.me.throwEmotion(node, emotion);
            for (let i = 0; i < 15; i++) {
              setTimeout(
                function () {
                  if (game.online) {
                    game.send('throwEmotion', node, emotion);
                  } else game.me.throwEmotion(node, emotion);
                },
                125 * (i + 1)
              );
            }
          };
          var td;
          var table = document.createElement('div');
          table.classList.add('add-setting');
          table.style.margin = '0';
          table.style.width = '100%';
          table.style.position = 'relative';
          var listi = ['flower', 'egg'];
          for (let i = 0; i < listi.length; i++) {
            td = ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
            ui.throwEmotion.add(td);
            td.link = listi[i];
            table.appendChild(td);
            td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', click);
          }
          uiintro.content.appendChild(table);
          table = document.createElement('div');
          table.classList.add('add-setting');
          table.style.margin = '0';
          table.style.width = '100%';
          table.style.position = 'relative';
          var listi = ['wine', 'shoe'];
          if (game.me.storage.zhuSkill_shanli) listi = ['yuxisx', 'jiasuo'];
          for (let i = 0; i < listi.length; i++) {
            td = ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
            ui.throwEmotion.add(td);
            td.link = listi[i];
            table.appendChild(td);
            td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', click);
          }
          uiintro.content.appendChild(table);
          table = document.createElement('div');
          table.classList.add('add-setting');
          table.style.margin = '0';
          table.style.width = '100%';
          table.style.position = 'relative';
          var listi = ['flowerSpam', 'eggSpam'];
          for (let i = 0; i < listi.length; i++) {
            td = ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
            ui.throwEmotion.add(td);
            td.link = listi[i];
            table.appendChild(td);
            td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', click2);
          }
          uiintro.content.appendChild(table);
        }
        var modepack = lib.characterPack['mode_' + get.mode()];
        if (lib.config.show_favourite && lib.character[node.name] && game.players.includes(node) && (!modepack || !modepack[node.name]) && (!simple || get.is.phoneLayout())) {
          var addFavourite = ui.create.div('.text.center.pointerdiv');
          addFavourite.link = node.name;
          if (lib.config.favouriteCharacter.includes(node.name)) {
            addFavourite.innerHTML = '移除收藏';
          } else {
            addFavourite.innerHTML = '添加收藏';
          }
          addFavourite.listen(ui.click.favouriteCharacter);
          uiintro.add(addFavourite);
        }
        if (!simple || get.is.phoneLayout()) {
          if ((lib.config.change_skin || lib.skin) && !node.isUnseen()) {
            var num = 1;
            var introadded = false;
            var createButtons = function (num, avatar2) {
              if (!introadded) {
                introadded = true;
                uiintro.add('<div class="text center">更改皮肤</div>');
              }
              var buttons = ui.create.div('.buttons.smallzoom.scrollbuttons');
              lib.setMousewheel(buttons);
              var nameskin = avatar2 ? node.name2 : node.name1;
              var nameskin2 = nameskin;
              var gzbool = false;
              if (nameskin.indexOf('gz_shibing') == 0) {
                nameskin = nameskin.slice(3, 11);
              } else if (nameskin.indexOf('gz_') == 0) {
                nameskin = nameskin.slice(3);
                gzbool = true;
              }
              for (let i = 0; i <= num; i++) {
                var button = ui.create.div('.button.character.pointerdiv', buttons, function () {
                  if (this._link) {
                    if (avatar2) {
                      lib.config.skin[nameskin] = this._link;
                      node.node.avatar2.style.backgroundImage = this.style.backgroundImage;
                    } else {
                      lib.config.skin[nameskin] = this._link;
                      node.node.avatar.style.backgroundImage = this.style.backgroundImage;
                    }
                  } else {
                    delete lib.config.skin[nameskin];
                    if (avatar2) {
                      if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) node.node.avatar2.setBackground(nameskin2, 'character');else
                      node.node.avatar2.setBackground(nameskin, 'character');
                    } else {
                      if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) node.node.avatar.setBackground(nameskin2, 'character');else
                      node.node.avatar.setBackground(nameskin, 'character');
                    }
                  }
                  game.saveConfig('skin', lib.config.skin);
                });
                button._link = i;
                if (i) {
                  button.setBackgroundImage('image/skin/' + nameskin + '/' + i + '.jpg');
                } else {
                  if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2, 'character', 'noskin');else
                  button.setBackground(nameskin, 'character', 'noskin');
                }
              }
              uiintro.add(buttons);
            };
            var loadImage = function (avatar2) {
              var img = new Image();
              img.onload = function () {
                num++;
                loadImage(avatar2);
              };
              img.onerror = function () {
                num--;
                if (num > 0) {
                  createButtons(num, avatar2);
                }
                if (!avatar2) {
                  if (!node.classList.contains('unseen2') && node.name2) {
                    num = 1;
                    loadImage(true);
                  }
                }
              };
              var nameskin = avatar2 ? node.name2 : node.name1;
              var nameskin2 = nameskin;
              var gzbool = false;
              if (nameskin.indexOf('gz_shibing') == 0) {
                nameskin = nameskin.slice(3, 11);
              } else if (nameskin.indexOf('gz_') == 0) {
                nameskin = nameskin.slice(3);
                gzbool = true;
              }
              img.src = 'image/skin/' + nameskin + '/' + num + '.jpg';
            };
            if (lib.config.change_skin) {
              if (!node.isUnseen(0)) {
                loadImage();
              } else if (node.name2) {
                loadImage(true);
              }
            } else {
              setTimeout(function () {
                var nameskin1 = node.name1;
                var nameskin2 = node.name2;
                if (nameskin1 && nameskin1.indexOf('gz_') == 0) {
                  nameskin1 = nameskin1.slice(3);
                }
                if (nameskin2 && nameskin2.indexOf('gz_') == 0) {
                  nameskin2 = nameskin2.slice(3);
                }
                if (!node.isUnseen(0) && lib.skin[nameskin1]) {
                  createButtons(lib.skin[nameskin1]);
                }
                if (!node.isUnseen(1) && lib.skin[nameskin2]) {
                  createButtons(lib.skin[nameskin2], true);
                }
              });
            }
          }
        }
        uiintro.add(ui.create.div('.placeholder.slim'));
      } else if (node.classList.contains('mark') && node.info && node.parentNode && node.parentNode.parentNode && node.parentNode.parentNode.classList.contains('player')) {
        var info = node.info;
        var player = node.parentNode.parentNode;
        if (info.name) {
          if (typeof info.name == 'function') {
            var named = info.name(player.storage[node.skill], player);
            if (named) {
              uiintro.add(named);
            }
          } else {
            uiintro.add(info.name);
          }
        } else if (info.name !== false) {
          uiintro.add(get.translation(node.skill));
        }
        if (typeof info.id == 'string' && info.id.indexOf('subplayer') == 0 && player.isUnderControl(true) && player.storage[info.id] && !_status.video) {
          var storage = player.storage[info.id];
          uiintro.addText('当前体力:' + storage.hp + '/' + storage.maxHp);
          if (storage.hs.length) {
            uiintro.addText('手牌区');
            uiintro.addSmall(storage.hs);
          }
          if (storage.es.length) {
            uiintro.addText('装备区');
            uiintro.addSmall(storage.es);
          }
        }
        if (typeof info.mark == 'function') {
          var stint = info.mark(uiintro, player.storage[node.skill], player);
          if (stint) {
            var placetext = uiintro.add('<div class="text" style="display:inline">' + stint + '</div>');
            if (stint.indexOf('<div class="skill"') != 0) {
              uiintro._place_text = placetext;
            }
          }
        } else {
          var stint = get.storageintro(info.content, player.storage[node.skill], player, uiintro, node.skill);
          if (stint) {
            if (stint[0] == '@') {
              uiintro.add('<div class="caption">' + stint.slice(1) + '</div>');
            } else {
              var placetext = uiintro.add('<div class="text" style="display:inline">' + stint + '</div>');
              if (stint.indexOf('<div class="skill"') != 0) {
                uiintro._place_text = placetext;
              }
            }
          }
        }
        uiintro.add(ui.create.div('.placeholder.slim'));
      } else if (node.classList.contains('card')) {
        if (ui.arena.classList.contains('observe') && node.parentNode.classList.contains('handcards')) {
          return;
        }
        var name = node.name;
        if (node.parentNode.cardMod) {
          var moded = false;
          for (var i in node.parentNode.cardMod) {
            var item = node.parentNode.cardMod[i](node);
            if (Array.isArray(item)) {
              moded = true;
              uiintro.add(item[0]);
              uiintro._place_text = uiintro.add('<div class="text" style="display:inline">' + item[1] + '</div>');
            }
          }
          if (moded) return uiintro;
        }
        if (node.link && node.link.name && lib.card[node.link.name]) {
          name = node.link.name;
        }
        if (get.position(node) == 'j' && node.viewAs && node.viewAs != name) {
          uiintro.add(get.translation(node.viewAs));
          uiintro.add('<div class="text center">(' + get.translation(get.translation(node)) + ')</div>');
          uiintro.nosub = true;
          name = node.viewAs;
        } else {
          uiintro.add(get.translation(node));
        }
        if (node._banning) {
          var clickBanned = function () {
            var banned = lib.config[this.bannedname] || [];
            if (banned.includes(name)) {
              banned.remove(name);
            } else {
              banned.push(name);
            }
            game.saveConfig(this.bannedname, banned);
            this.classList.toggle('on');
            if (node.updateBanned) {
              node.updateBanned();
            }
          };
          var modeorder = lib.config.modeorder || [];
          for (var i in lib.mode) {
            modeorder.add(i);
          }
          var list = [];
          uiintro.contentContainer.listen(function (e) {
            ui.click.touchpop();
            e.stopPropagation();
          });
          for (let i = 0; i < modeorder.length; i++) {
            if (node._banning == 'online') {
              if (!lib.mode[modeorder[i]].connect) continue;
            } else if (modeorder[i] == 'connect' || modeorder[i] == 'brawl') {
              continue;
            }
            if (lib.config.all.mode.includes(modeorder[i])) {
              list.push(modeorder[i]);
            }
          }
          if (lib.card[name] && lib.card[name].type == 'trick') list.push('zhinang_tricks');
          var page = ui.create.div('.menu-buttons.configpopped', uiintro.content);
          var banall = false;
          for (let i = 0; i < list.length; i++) {
            var cfg = ui.create.div('.config', list[i] == 'zhinang_tricks' ? '设为智囊' : lib.translate[list[i]] + '模式', page);
            cfg.classList.add('toggle');
            if (list[i] == 'zhinang_tricks') {
              cfg.bannedname = (node._banning == 'offline' ? '' : 'connect_') + 'zhinang_tricks';
            } else if (node._banning == 'offline') {
              cfg.bannedname = list[i] + '_bannedcards';
            } else {
              cfg.bannedname = 'connect_' + list[i] + '_bannedcards';
            }
            cfg.listen(clickBanned);
            ui.create.div(ui.create.div(cfg));
            var banned = lib.config[cfg.bannedname] || [];
            if (banned.includes(name) == (list[i] == 'zhinang_tricks')) {
              cfg.classList.add('on');
              banall = true;
            }
          }
          ui.create.div('.menubutton.pointerdiv', banall ? '全部禁用' : '全部启用', uiintro.content, function () {
            if (this.innerHTML == '全部禁用') {
              for (let i = 0; i < page.childElementCount; i++) {
                if (page.childNodes[i].bannedname.indexOf('zhinang_tricks') == -1 && page.childNodes[i].bannedname && page.childNodes[i].classList.contains('on')) {
                  clickBanned.call(page.childNodes[i]);
                }
              }
              this.innerHTML = '全部启用';
            } else {
              for (let i = 0; i < page.childElementCount; i++) {
                if (page.childNodes[i].bannedname.indexOf('zhinang_tricks') == -1 && page.childNodes[i].bannedname && !page.childNodes[i].classList.contains('on')) {
                  clickBanned.call(page.childNodes[i]);
                }
              }
              this.innerHTML = '全部禁用';
            }
          }).style.marginTop = '-10px';
          ui.create.div('.placeholder.slim', uiintro.content);
        } else {
          if (lib.translate[name + '_info']) {
            if (!uiintro.nosub) {
              if (get.subtype(name) == 'equip1') {
                var added = false;
                if (lib.card[node.name] && lib.card[node.name].distance) {
                  var dist = lib.card[node.name].distance;
                  if (dist.attackFrom) {
                    added = true;
                    uiintro.add('<div class="text center">攻击范围:' + (-dist.attackFrom + 1) + '</div>');
                  }
                }
                if (!added) {
                  uiintro.add('<div class="text center">攻击范围:1</div>');
                }
              } else if (get.subtype(name)) {
                uiintro.add('<div class="text center">' + get.translation(get.subtype(name)) + '</div>');
              } else if (lib.card[name] && lib.card[name].addinfomenu) {
                uiintro.add('<div class="text center">' + lib.card[name].addinfomenu + '</div>');
              } else if (lib.card[name] && lib.card[name].derivation) {
                if (typeof lib.card[name].derivation == 'string') {
                  uiintro.add('<div class="text center">来源:' + get.translation(lib.card[name].derivation) + '</div>');
                } else if (lib.card[name].derivationpack) {
                  uiintro.add('<div class="text center">来源:' + get.translation(lib.card[name].derivationpack + '_card_config') + '包</div>');
                }
              } else {
                if (lib.card[name].unique) {
                  uiintro.add('<div class="text center">特殊' + get.translation(lib.card[name].type) + '牌</div>');
                } else {
                  if (lib.card[name].type && lib.translate[lib.card[name].type]) uiintro.add('<div class="text center">' + get.translation(lib.card[name].type) + '牌</div>');
                }
              }
              if (lib.card[name].unique && lib.card[name].type == 'equip') {
                if (lib.cardPile.guozhan && lib.cardPack.guozhan.includes(name)) {
                  uiintro.add('<div class="text center">专属装备</div>').style.marginTop = '-5px';
                } else {
                  uiintro.add('<div class="text center">特殊装备</div>').style.marginTop = '-5px';
                }
              }
            }
            if (lib.card[name].cardPrompt) {
              var str = lib.card[name].cardPrompt(node.link || node),
                placetext = uiintro.add('<div class="text" style="display:inline">' + str + '</div>');
              if (str.indexOf('<div class="skill"') != 0) {
                uiintro._place_text = placetext;
              }
            } else if (lib.translate[name + '_info']) {
              var placetext = uiintro.add('<div class="text" style="display:inline">' + lib.translate[name + '_info'] + '</div>');
              if (lib.translate[name + '_info'].indexOf('<div class="skill"') != 0) {
                uiintro._place_text = placetext;
              }
            }
            if (lib.card[name].yingbian_prompt && get.is.yingbian(node.link || node)) {
              if (typeof lib.card[name].yingbian_prompt == 'function') uiintro.add('<div class="text" style="font-family: yuanli">应变:' + lib.card[name].yingbian_prompt(node.link || node) + '</div>');else
              uiintro.add('<div class="text" style="font-family: yuanli">应变:' + lib.card[name].yingbian_prompt + '</div>');
            }
            if (lib.translate[name + '_append']) {
              uiintro.add('<div class="text" style="display:inline">' + lib.translate[name + '_append'] + '</div>');
            }
          }
          uiintro.add(ui.create.div('.placeholder.slim'));
        }
      } else if (node.classList.contains('character')) {
        var character = node.link;
        if (lib.character[node.link] && lib.character[node.link][1]) {
          var group = get.is.double(node.link, true);
          if (group) {
            var str = get.translation(character) + '&nbsp;&nbsp;';
            for (let i = 0; i < group.length; i++) {
              str += get.translation(group[i]);
              if (i < group.length - 1) str += '/';
            }
            uiintro.add(str);
          } else uiintro.add(get.translation(character) + '&nbsp;&nbsp;' + lib.translate[lib.character[node.link][1]]);
        } else {
          uiintro.add(get.translation(character));
        }
        if (lib.characterTitle[node.link]) {
          uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
        }
        if (node._banning) {
          var clickBanned = function () {
            var banned = lib.config[this.bannedname] || [];
            if (banned.includes(character)) {
              banned.remove(character);
            } else {
              banned.push(character);
            }
            game.saveConfig(this.bannedname, banned);
            this.classList.toggle('on');
            if (node.updateBanned) {
              node.updateBanned();
            }
          };
          var modeorder = lib.config.modeorder || [];
          for (var i in lib.mode) {
            modeorder.add(i);
          }
          var list = [];
          uiintro.contentContainer.listen(function (e) {
            ui.click.touchpop();
            e.stopPropagation();
          });
          for (let i = 0; i < modeorder.length; i++) {
            if (node._banning == 'online') {
              if (!lib.mode[modeorder[i]].connect) continue;
              if (!lib.config['connect_' + modeorder[i] + '_banned']) {
                lib.config['connect_' + modeorder[i] + '_banned'] = [];
              }
            } else if (modeorder[i] == 'connect' || modeorder[i] == 'brawl') {
              continue;
            }
            if (lib.config.all.mode.includes(modeorder[i])) {
              list.push(modeorder[i]);
            }
          }
          var page = ui.create.div('.menu-buttons.configpopped', uiintro.content);
          var banall = false;
          for (let i = 0; i < list.length; i++) {
            var cfg = ui.create.div('.config', lib.translate[list[i]] + '模式', page);
            cfg.classList.add('toggle');
            if (node._banning == 'offline') {
              cfg.bannedname = list[i] + '_banned';
            } else {
              cfg.bannedname = 'connect_' + list[i] + '_banned';
            }
            cfg.listen(clickBanned);
            ui.create.div(ui.create.div(cfg));
            var banned = lib.config[cfg.bannedname] || [];
            if (!banned.includes(character)) {
              cfg.classList.add('on');
              banall = true;
            }
          }
          if (node._banning == 'offline') {
            var cfg = ui.create.div('.config', '随机选将可用', page);
            cfg.classList.add('toggle');
            cfg.listen(function () {
              this.classList.toggle('on');
              if (this.classList.contains('on')) {
                lib.config.forbidai_user.remove(character);
              } else {
                lib.config.forbidai_user.add(character);
              }
              game.saveConfig('forbidai_user', lib.config.forbidai_user);
            });
            ui.create.div(ui.create.div(cfg));
            if (!lib.config.forbidai_user.includes(character)) {
              cfg.classList.add('on');
            }
          }
          ui.create.div('.menubutton.pointerdiv', banall ? '全部禁用' : '全部启用', uiintro.content, function () {
            if (this.innerHTML == '全部禁用') {
              for (let i = 0; i < page.childElementCount; i++) {
                if (page.childNodes[i].bannedname && page.childNodes[i].classList.contains('on')) {
                  clickBanned.call(page.childNodes[i]);
                }
              }
              this.innerHTML = '全部启用';
            } else {
              for (let i = 0; i < page.childElementCount; i++) {
                if (page.childNodes[i].bannedname && !page.childNodes[i].classList.contains('on')) {
                  clickBanned.call(page.childNodes[i]);
                }
              }
              this.innerHTML = '全部禁用';
            }
          }).style.marginTop = '-10px';
          ui.create.div('.placeholder.slim', uiintro.content);
        } else {
          var infoitem = lib.character[character];
          if (!infoitem) {
            for (var itemx in lib.characterPack) {
              if (lib.characterPack[itemx][character]) {
                infoitem = lib.characterPack[itemx][character];
                break;
              }
            }
          }
          var skills = infoitem[3];
          for (let i = 0; i < skills.length; i++) {
            if (lib.translate[skills[i] + '_info']) {
              translation = lib.translate[skills[i] + '_ab'] || get.translation(skills[i]).slice(0, 2);
              if (lib.skill[skills[i]] && lib.skill[skills[i]].nobracket) {
                uiintro.add('<div><div class="skilln">' + get.translation(skills[i]) + '</div><div>' + get.skillInfoTranslation(skills[i]) + '</div></div>');
              } else {
                uiintro.add('<div><div class="skill">【' + translation + '】</div><div>' + get.skillInfoTranslation(skills[i]) + '</div></div>');
              }
              if (lib.translate[skills[i] + '_append']) {
                uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + '_append'] + '</div>');
              }
            }
          }
          var modepack = lib.characterPack['mode_' + get.mode()];
          if (lib.config.show_favourite && lib.character[node.link] && (!modepack || !modepack[node.link]) && (!simple || get.is.phoneLayout())) {
            var addFavourite = ui.create.div('.text.center.pointerdiv');
            addFavourite.link = node.link;
            addFavourite.style.marginBottom = '15px';
            if (lib.config.favouriteCharacter.includes(node.link)) {
              addFavourite.innerHTML = '移除收藏';
            } else {
              addFavourite.innerHTML = '添加收藏';
            }
            addFavourite.listen(ui.click.favouriteCharacter);
            uiintro.add(addFavourite);
          } else {
            uiintro.add(ui.create.div('.placeholder.slim'));
          }
          var addskin = false;
          if (node.parentNode.classList.contains('menu-buttons')) {
            addskin = !lib.config.show_charactercard;
          } else {
            addskin = lib.config.change_skin || lib.skin;
          }
          if (addskin && (!simple || get.is.phoneLayout())) {
            var num = 1;
            var introadded = false;
            var nameskin = node.link;
            var nameskin2 = nameskin;
            var gzbool = false;
            if (nameskin.indexOf('gz_shibing') == 0) {
              nameskin = nameskin.slice(3, 11);
            } else if (nameskin.indexOf('gz_') == 0) {
              nameskin = nameskin.slice(3);
              gzbool = true;
            }
            var createButtons = function (num) {
              if (!num) return;
              if (!introadded) {
                introadded = true;
                uiintro.add('<div class="text center">更改皮肤</div>');
              }
              var buttons = ui.create.div('.buttons.smallzoom.scrollbuttons');
              lib.setMousewheel(buttons);
              for (let i = 0; i <= num; i++) {
                var button = ui.create.div('.button.character.pointerdiv', buttons, function () {
                  if (this._link) {
                    lib.config.skin[nameskin] = this._link;
                    node.style.backgroundImage = this.style.backgroundImage;
                    game.saveConfig('skin', lib.config.skin);
                  } else {
                    delete lib.config.skin[nameskin];
                    if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) node.setBackground(nameskin2, 'character');else
                    node.setBackground(nameskin, 'character');
                    game.saveConfig('skin', lib.config.skin);
                  }
                });
                button._link = i;
                if (i) {
                  button.setBackgroundImage('image/skin/' + nameskin + '/' + i + '.jpg');
                } else {
                  if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2, 'character', 'noskin');else
                  button.setBackground(nameskin, 'character', 'noskin');
                }
              }
              uiintro.add(buttons);
            };
            var loadImage = function () {
              var img = new Image();
              img.onload = function () {
                num++;
                loadImage();
              };
              img.onerror = function () {
                num--;
                createButtons(num);
              };
              img.src = 'image/skin/' + nameskin + '/' + num + '.jpg';
            };
            if (lib.config.change_skin) {
              loadImage();
            } else {
              setTimeout(function () {
                createButtons(lib.skin[nameskin]);
              });
            }
          }
        }
      } else if (node.classList.contains('equips') && ui.arena.classList.contains('selecting')) {
        (function () {
          uiintro.add('选择装备');
          uiintro.addSmall(Array.from(node.childNodes), true);
          uiintro.clickintro = true;
          ui.control.hide();
          uiintro._onclose = function () {
            ui.control.show();
          };
          var confirmbutton;
          for (let i = 0; i < uiintro.buttons.length; i++) {
            var button = uiintro.buttons[i];
            button.classList.add('pointerdiv');
            if (button.link.classList.contains('selected')) {
              button.classList.add('selected');
            }
            button.listen(function (e) {
              ui.click.card.call(this.link, 'popequip');
              ui.click.window.call(ui.window, e);
              if (this.link.classList.contains('selected')) {
                this.classList.add('selected');
              } else {
                this.classList.remove('selected');
              }
              if (ui.confirm && ui.confirm.str && ui.confirm.str.includes('o')) {
                confirmbutton.classList.remove('disabled');
              } else {
                confirmbutton.classList.add('disabled');
              }
            });
          }
          var buttoncontainer = uiintro.add(ui.create.div());
          buttoncontainer.style.display = 'block';
          confirmbutton = ui.create.div(
            '.menubutton.large.pointerdiv',
            '确定',
            function () {
              if (ui.confirm && ui.confirm.str && ui.confirm.str.includes('o')) {
                uiintro._clickintro();
                ui.click.ok(ui.confirm.firstChild);
              }
            },
            buttoncontainer
          );
          confirmbutton.style.position = 'relative';
          setTimeout(function () {
            if (ui.confirm && ui.confirm.str && ui.confirm.str.includes('o')) {
              confirmbutton.classList.remove('disabled');
            } else {
              confirmbutton.classList.add('disabled');
            }
          }, 300);
        })();
      } else if (node.classList.contains('identity') && node.dataset.career) {
        var career = node.dataset.career;
        uiintro.add(get.translation(career));
        uiintro.add('<div class="text center" style="padding-bottom:5px">' + lib.translate['_' + career + '_skill_info'] + '</div>');
      } else if (node.classList.contains('skillbar')) {
        if (node == ui.friendBar) {
          uiintro.add('友方怒气值');
          uiintro.add('<div class="text center" style="padding-bottom:5px">' + _status.friendRage + '/100</div>');
        } else if (node == ui.enemyBar) {
          uiintro.add('敌方怒气值');
          uiintro.add('<div class="text center" style="padding-bottom:5px">' + _status.enemyRage + '/100</div>');
        }
      } else if (node.parentNode == ui.historybar) {
        if (node.dead) {
          if (!node.source || node.source == node.player) {
            uiintro.add('<div class="text center">' + get.translation(node.player) + '阵亡</div>');
            uiintro.addSmall([node.player]);
          } else {
            uiintro.add('<div class="text center">' + get.translation(node.player) + '被' + get.translation(node.source) + '杀害</div>');
            uiintro.addSmall([node.source]);
          }
        }
        if (node.skill) {
          uiintro.add('<div class="text center">' + get.translation(node.skill, 'skill') + '</div>');
          uiintro._place_text = uiintro.add('<div class="text" style="display:inline">' + get.translation(node.skill, 'info') + '</div>');
        }
        if (node.targets && get.itemtype(node.targets) == 'players') {
          uiintro.add('<div class="text center">目标</div>');
          uiintro.addSmall(node.targets);
        }
        if (node.players && node.players.length > 1) {
          uiintro.add('<div class="text center">使用者</div>');
          uiintro.addSmall(node.players);
        }
        if (node.cards && node.cards.length) {
          uiintro.add('<div class="text center">卡牌</div>');
          uiintro.addSmall(node.cards);
        }
        for (let i = 0; i < node.added.length; i++) {
          uiintro.add(node.added[i]);
        }
        if (node.added.length) {
          uiintro.add(ui.create.div('.placeholder.slim'));
        }
        if (uiintro.content.firstChild) {
          uiintro.content.firstChild.style.paddingTop = '3px';
        }
      }
      if (lib.config.touchscreen) {
        lib.setScroll(uiintro.contentContainer);
      }
      return uiintro;
    },
    fjyi(str) {
      return lib.game.fjyi[str];
    },
    hvheList() {
      return ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'];
    },
    tdci(skill, name) {
      let list;
      if (!name) {
        if (_status.connectMode) {
          list = get.charactersOL();
        } else {
          list = get.gainableCharacters();
        }
      }
      for (const i of list) {
        if (lib.character[i][3].includes(skill)) {
          name = i;
          break;
        }
      }
      return game.parseSkillTextMap(skill, name);
    },
    vijmjnhr(obj) {
      const invertedObj = Object.keys(obj).reduce((inverted, key) => {
        inverted[obj[key]] = key;
        return inverted;
      }, {});
      return invertedObj;
    },
    vijm(obj, value) {
      for (const i in obj) {
        if (obj[i] == value) return i;
      }
      return false;
    },
    uhciuiysd(player, event) {
      var history = player.getAllHistory('useCard');
      var index;
      if (event) index = history.indexOf(event) - 1;else
      index = history.length - 1;
      if (index >= 0) return history[index];
      return false;
    },
    dmuu() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    },
    hxse() {
      return ['heart', 'diamond', 'club', 'spade'];
    },
    kapdyrxk(card) {
      const cards = get.itemtype(card) == 'card' ? [card] : card.cards ?? [];
      return cards;
    },
    wujlmkzi(player) {
      const name = [];
      if (player.name) name.push(player.name);
      if (player.name1) name.push(player.name1);
      if (player.name2) name.push(player.name2);
      return name;
    },
    zowwjuli(player, target, bool) {
      if (bool === undefined) bool = true;
      const choices = [],left = [],right = [];
      let left2 = player.previous,right2 = player.next;
      while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
        left.push(left2);
        right.push(right2);
        left2 = left2.previous;
        right2 = right2.next;
      }
      if (target == left2) {
        for (const i of left) {
          choices.push(...left);
          break;
        }
      }
      if (target == right2) {
        for (const i of right) {
          choices.push(...right);
          break;
        }
      }
      return choices.length + 1;
    },
    kapdmkzi(name) {
      const result = typeof name == 'string' ? name : name.viewAs ? name.viewAs : name.name;
      return result;
    },
    bukexrze(item) {
      return item.classList.contains('uncheck');
    },
    bukexrzex(event, player, card, bool) {
      if (event.name == '_wuxie' && card.name != 'wuxie') return true;
      if (!bool && !['chooseToUse', 'chooseToRespond'].includes(event.name)) return false;
      const cardx = ui.create.card();
      cardx.init(get.cardInfo(card));
      cardx.storage = card.storage;
      cardx.gaintag = card.gaintag;
      cardx._cardid = card.cardid;
      return !event.filterCard(cardx, player, event) || lib.card[card.name] && lib.card[card.name].filterTarget && typeof lib.card[card.name].filterTarget == 'function' && !game.players.some((j) => lib.card[card.name].filterTarget(cardx, player, j));
    },
    isjiui(card, player) {
      return ['basic', 'trick'].includes(get.type(card, player || false));
    },
    uzpdindex(card, player, bool = true) {
      let cards = player.getCards('h');
      return bool ? cards.indexOf(card) : cards.length - cards.indexOf(card) - 1;
    }
  });
  Object.assign(lib.skill, {
    smyykui1: {
      audio: 2,
      enable: 'phaseUse',
      filter(event, player) {
        return Array.isArray(event.smyykui1);
      },
      onChooseToUse(event) {
        if (game.online || !event.player.hasSkill('smyykui1')) return;
        const cards = [];
        for (let i = 0; i < 8; i++) {
          const card = ui.cardPile.childNodes[i];
          if (card) cards.push(card);else
          break;
        }
        event.set('smyykui1', cards);
      },
      chooseButton: {
        dialog(event) {
          const dialog = ui.create.dialog('鹰视', 'hidden');
          if (event.smyykui1 && event.smyykui1.length) dialog.add(event.smyykui1);else
          dialog.addText('牌堆无牌');
          for (const i of dialog.buttons) {
            i.classList.add('noclick');
          }
          dialog.buttons.length = 0;
          return dialog;
        },
        filter(event, player) {
          return false;
        }
      }
    },
    smyykui2: {
      audio: 2,
      enable: 'phaseUse',
      filter(event, player) {
        return Array.isArray(event.smyykui2);
      },
      onChooseToUse(event) {
        if (game.online || !event.player.hasSkill('smyykui2')) return;
        const cards = [];
        for (let i = 0; i < 8; i++) {
          const card = ui.cardPile.childNodes[ui.cardPile.childElementCount - 1 - i];
          if (card) cards.push(card);else
          break;
        }
        event.set('smyykui2', cards);
      },
      chooseButton: {
        dialog(event) {
          const dialog = ui.create.dialog('鹰视', 'hidden');
          if (event.smyykui2 && event.smyykui2.length) dialog.add(event.smyykui2);else
          dialog.addText('牌堆无牌');
          for (const i of dialog.buttons) {
            i.classList.add('noclick');
          }
          dialog.buttons.length = 0;
          return dialog;
        },
        filter(event, player) {
          return false;
        }
      }
    },
    lijidie: {
      trigger: { player: 'dyingBefore' },
      charlotte: true,
      forced: true,
      silent: true,
      popup: false,
      forceDie: true,
      content() {
        player.die();
      }
    },
    qivi: {
      mod: {
        ignoredHandcard(card, player) {
          return true;
        },
        cardDiscardable(card, player, name) {
          return false;
        },
        canBeDiscarded(card) {
          return false;
        },
        canBeGained(card) {
          return false;
        },
        cardChongzhuable(card, player) {
          return false;
        }
      }
    },
    uldc: {
      mod: {
        cardUsable(card, player, num) {
          if (card.name == 'sha') return num + 1;
        }
      }
    },
    _dieAudiohgmg: {
      trigger: { global: 'dieBegin' },
      _priority: 2,
      forced: true,
      content() {
        game.playAudio('../extension/恒梦/audio/die', trigger.player.name);
      }
    }
  });
}();