'use strict';
window.Sacredimport(function (lib, game, ui, get, ai, _status) {
   //Power by 玄武江湖
   lib.element.player.addFateBuff = function (obj, num) {
      return game.addFateBuff(this, obj, num);
   };
   lib.element.player.addFateBuff2 = function (obj, num, num2) {
      this.storage[obj + '1'] = num2;
      return game.addFateBuff(this, obj, num);
   };
   lib.element.player.removeFateBuff = function (obj, num) {
      return game.removeFateBuff(this, obj, num);
   };
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
   game.addFateBuff = function (player, obj, num) {
      var event = game.createEvent('addFateBuff');
      if (typeof obj == 'string') {
         var m = {};
         if (typeof num == 'number') {
            m[obj] = num;
         } else {
            m[obj] = 1;
         }
         obj = m;
      }
      for (var i in obj) {
         var info = get.info(i);
         if (info && (get.Fatebuff(i) == true && player.hasSkill('Fate_buffresist')) || (get.Fatedebuff(i) == true && player.hasSkill('Fate_debuffresist'))) {
            delete obj[i];
            game.log(player, "不能获得", i, "状态.");
            continue;
         }
         if (!get.FateBuffCanAdd(i)) {
            if (player.hasSkill(i)) {
               delete obj[i];
            } else {
               obj[i] = 1;
            }
         } else {
            if (obj[i] <= 0) {
               delete obj[i];
            }
         }
      }
      event.set('buff', obj);
      event.set('player', player);
      event.setContent(function () {
         'step 0'
         this.trigger('addFateBuffBegin1');//附加状态前,可以更改附加的数量.
         'step 1'
         this.trigger('addFateBuffBegin2');//附加状态时,可以直接免疫附加.
         'step 2'
         this.trigger('addFateBuffBegin');
         'step 3'
         if (this.player) {
            var buffObj = this.buff;
            for (var i in buffObj) {
               var info = get.info(i);
               if (info && (get.Fatebuff(i) == true && player.hasSkill('Fate_buffresist')) || (get.Fatedebuff(i) == true && player.hasSkill('Fate_debuffresist'))) {
                  delete buffObj[i];
                  game.log(this.player, "不能获得", i, "状态.");
                  continue;
               }
               if (get.FateBuffCanAdd(i)) {
                  var num = buffObj[i];
                  this.player.addMark(i, num);
               }
               if (!this.player.hasSkill(i)) {
                  game.log(this.player, '附加了效果【', i, '】.');
                  this.player.addSkill(i);
               }
            }
         }
         'step 4'
         this.trigger('addFateBuffEnd1');
      });
      var arr = Object.keys(obj);
      if (arr.length == 0) {
         _status.event.next.remove(event);
      }
      return event;
   };
   game.removeFateBuff = function (player, obj, num) {
      var event = game.createEvent('removeFateBuff');
      if (typeof obj == 'string') {
         var m = {};
         if (typeof num == 'number') {
            m[obj] = num;
         } else {
            m[obj] = 1;
         }
         obj = m;
      }
      for (var i in obj) {
         if (!get.FateBuffCanAdd(i)) {
            if (!player.hasSkill(i)) {
               delete obj[i];
            } else {
               obj[i] = 1;
            }
         } else {
            var num = obj[i];
            var count = player.countMark(i);
            if (count <= num) {
               num = count;
            }
            obj[i] = num;
            if (obj[i] <= 0) {
               delete obj[i];
            }
         }
      }
      event.set('buff', obj);
      event.set('player', player);
      event.setContent(function () {
         'step 0'
         this.trigger('removeFateBuffBegin1');//移除状态前,可以更改数量.
         'step 1'
         this.trigger('removeFateBuffBegin2');//移除状态时,可以直接免疫.
         'step 2'
         this.trigger('removeFateBuffBegin');
         'step 3'
         if (this.player) {
            var buffObj = this.buff;
            for (var i in buffObj) {
               if (get.FateBuffCanAdd(i)) {
                  var num = buffObj[i];
                  if (num > this.player.countMark(i)) {
                     num = this.player.countMark(i);
                  }
                  buffObj[i] = num;
                  if (num > 0) {
                     this.player.removeMark(i, num);
                     if (this.player.countMark(i) == 0) {
                        this.player.unmarkSkill(i);
                        this.player.removeSkill(i);
                     }
                     delete buffObj[i];
                  }
               } else {
                  if (this.player.hasSkill(i)) {
                     game.log(player, '移除了状态【', i, '】.');
                     this.player.removeSkill(i);
                  } else {
                     delete buffObj[i];
                  }
               }
            }
         }
         'step 4'
         this.trigger('removeFateBuffEnd1');
      });
      var arr = Object.keys(obj);
      if (arr.length == 0) {
         _status.event.next.remove(event);
      }
      return event;
   };
   get.FateBuffs = function (player, positive) {
      var skills = player.getSkills(false, false);
      var ret = [];
      for (var i = 0; i < skills.length; i++) {
         var s = skills[i];
         //game.log(s);
         var info = get.info(s);
         if (info && (info.buff || info.debuff)) {
            if (positive === true && info.buff) {
               ret.add(s);
            } else if (positive === false && info.debuff) {
               ret.add(s);
            }
         }
      }
      var marks = player.marks;
      for (var s in marks) {
         //game.log(s);
         var info = get.info(s);
         //game.log(info);
         if (info && (info.buff || info.debuff)) {
            if (positive === true && info.buff) {
               ret.add(s);
            } else if (positive === false && info.debuff) {
               ret.add(s);
            }
         }
      }
      return ret;
   };
   get.FateBuffCanAdd = function (buff) {
      var info = get.info(buff);
      if (!info) return false;
      return info.FateCanAdd;
   };
   get.isFateBuff = function (buff) {
      var info = get.info(buff);
      return info && (info.buff || info.debuff);
   };
   game.clearFateBuff = function (player, totrigger, type) {
      if (totrigger) {
         var buffObj = get.FateBuffNums(player, type);
         game.removeXwBuff(player, buffObj);
      } else {
         var buffs = get.FateBuffs(player, type);
         for (var buff of buffs) {
            if (get.FateBuffCanAdd(buff)) {
               player.removeFateBuff(buff, player.countMark(buff));
            } else {
               player.removeSkill(buff);
            }
         }
      }
   };
   get.FateBuffNums = function (player, positive) {
      var buffs = get.FateBuffs(player, positive);
      var obj = {};
      for (var buff of buffs) {
         if (get.FateBuffCanAdd(buff)) {
            obj[buff] = player.countMark(buff);
         } else {
            obj[buff] = 1;
         }
      }
      return obj;
   };
   get.Fatebuff = function (buff) {
      var info = get.info(buff);
      if (!info) return false;
      if (!info.buff) return false;
      return true;
   };
   get.Fatedebuff = function (buff) {
      var info = get.info(buff);
      if (!info) return false;
      if (!info.debuff) return false;
      return true;
   };
   lib.skill.FateNPccc = {
      trigger: {
         player: ["loseSkillBefore", "loseSkillsBefore", "removeSkillBefore", "removeSkillsBefore", "loseMaxHpBefore", "clearSkillsBefore", "clearSkillBefore"],
      },
      forced: true,
      superCharlotte: true,
      charlotte: true,
      filter(event, player) {
         return player != event.player;
      },
      content() {
         trigger.untrigger();
         trigger.finish();
      },
      group: ['FateNPccc_1'],
      subSkill: {
         1: {
            forced: true,
            trigger: {
               global: 'gameStart',
            },
            filter(event, player) {
               if (get.mode() == 'guozhan') return false;
               return true;
            },
            async content(event, trigger, player) {//QQQ
               if (player.name == 'Fate_SajyouManaka') {
                  game.log(player, '<br><span class="bluetext"style="color: #FF3333">宣告——</span><br><br><span class="bluetext"style="color: #FF3333">我既灭杀 我亦创生</span><br><br><span class="bluetext"style="color: #FF3333">我既伤害 我亦济世</span><br><br><span class="bluetext"style="color: #FF3333">无一人得逃离我手 无一人不收我眼底</span><br><br><span class="bluetext"style="color: #FF3333">回归尘土吧</span><br><br><span class="bluetext"style="color: #FF3333">败走者、衰老者为我所召</span><br><br><span class="bluetext"style="color: #FF3333">对我委身 从我而学 为我效忠</span><br><br><span class="bluetext"style="color: #FF3333">赐汝休憩</span><br><br><span class="bluetext"style="color: #FF3333">不忘歌颂 不忘祈祷 不忘我名</span><br><br><span class="bluetext"style="color: #FF3333">我身为轻</span><br><br><span class="bluetext"style="color: #FF3333">解放汝于万物之重苦</span><br><br><span class="bluetext"style="color: #FF3333">除去伪装吧</span><br><br><span class="bluetext"style="color: #FF3333">予宽恕以报复 予信赖以背弃 对希望以绝望 对光明以黑暗 对生世之物予昏黑之死</span><br><br><span class="bluetext"style="color: #FF3333">休息乃我所带来</span><br><br><span class="bluetext"style="color: #FF3333">燃烧汝罪 刻于烙印</span><br><br><span class="bluetext"style="color: #FF3333">永远之命只能由死所赐予</span><br><br><span class="bluetext"style="color: #FF3333">宽恕于此 受肉之我在此宣誓</span><br><br><span class="bluetext"style="color: #77FFCC">愿主怜此哀魂');
               } else if (player.hasSkill('FateNPBoss')) {
                  game.log('<span class="bluetext"style="color: #FFFF00">　　　<特异点><span><br>　　　', player, '<br><span class="bluetext"style="color: #FFFF00">　　　冠位再临<span>');
               } else {
                  game.log(player, '<br><span class="bluetext"style="color: #FF3333">满盈吧,满盈吧,满盈吧,满盈吧,满盈吧</span><br><br><span class="bluetext"style="color: #FF3333">周而复始,其次为五</span><br><br><span class="bluetext"style="color: #FF3333">然,满盈之时便是废弃之机</span><br><br><span class="bluetext"style="color: #FF3333">宣告</span><br><br><span class="bluetext"style="color: #FF3333">汝身听吾号令,吾命与汝剑同在</span><br><br><span class="bluetext"style="color: #FF3333">应圣杯之召,若愿顺此意志、此义理的话就回应吧</span><br><br><span class="bluetext"style="color: #FF3333">在此起誓</span><br><br><span class="bluetext"style="color: #FF3333">吾愿成就世间一切之善行</span><br><br><span class="bluetext"style="color: #FF3333">吾愿诛尽世间一切之恶行</span><br><br><span class="bluetext"style="color: #FF3333">吾即手握其锁链之人</span><br><br><span class="bluetext"style="color: #FF3333">汝为身缠三大言灵之七天,来自于抑止之轮</span><br><br><span class="bluetext"style="color: #77FFCC">天秤之守护者!!!');
                  player.say('回应您的愿望,Servant <br><span class="bluetext"style="color: #00BBFF">' + get.translation(player.name) + '</span> 遵从召唤而来')
               }
            },
         },
      },
   };
   lib.skill.FateNPBoss = {
      trigger: { player: 'turnOverBefore' },
      priority: 20,
      superCharlotte: true,
      charlotte: true,
      forced: true,
      filter(event, player) {
         return !player.isTurnedOver();
      },
      content() {
         trigger.cancel();
         game.log(player, '取消了翻面');
      },
      ai: {
         noturn: true,
         effect: {
            target(card, player, target) {
               if (get.type(card) == 'delay') return 0.5;
            }
         }
      }
   };
   lib.skill._Fate_storage = {
      trigger: {
         global: 'gameStart'
      },
      forced: true,
      superCharlotte: true,
      charlotte: true,
      filter(event, player) {
         return !_status.connectMode;
      },
      content() {
         if (get.mode() == 'guozhan') {
            player.addSkill('Fate_storageguozhan');
         }
         else {
            if (player.name.indexOf('Fate_') >= 0 && player.hasSkill('FateNPccc') >= 0) {
               player.addSkill('Fate_np');
               player.markSkill('Fate_np');
               player.addSkill('Fate_bjx');
               player.markSkill('Fate_bjx');
            }
            else {
               player.storage.Fate_js = 0;   //即死
               player.storage.Fate_jsxz = 0;   //即死修正
               player.storage.Fate_bjxgain = 0;  //暴击概率、星数增加  
            }
         }
      }
   };
   lib.skill.Fate_storageguozhan = {
      trigger: { player: ['showCharacterAfter'] },
      mode: ['guozhan'],
      forced: true,
      superCharlotte: true,
      charlotte: true,
      content() {
         if ((player.name1.indexOf('Fate_') >= 0 || player.name2.indexOf('Fate_') >= 0) && player.hasSkill('FateNPccc') >= 0) {
            player.addSkill('Fate_np');
            player.markSkill('Fate_np');
            player.useSkill('Fate_np');
            player.addSkill('Fate_bjx');
            player.markSkill('Fate_bjx');
         }
      }
   };
   lib.skill._Fate_dieAudio = {
      trigger: {
         player: "dieBegin",
      },
      forced: true,
      popup: false,
      forced: true,
      silent: true,
      filter(event, player) {
         return player.name.indexOf('Fate_') >= 0;
      },
      content() {
         game.playAudio("../extension/命运·冠位指定/audio/", player.name);
      },
   };
   lib.skill.Fate_np = {
      init(player) {
         player.storage.Fate_np = 0;
         player.storage.Fate_bjx = 0;
         player.storage.spAttack = []; //特攻名单
         player.storage.Fate_js = 0;   //即死
         player.storage.Fate_jsxz = 0;   //即死修正
         player.storage.Fate_bjxgain = 0;  //暴击概率、星数增加
      },
      trigger: {
         global: 'gameStart',
      },
      silent: true,
      forced: true,
      superCharlotte: true,
      charlotte: true,
      content() {
         game.broadcastAll(function (player) {
            _status.Fate_np = {};
            var np = ui.create.div('');
            np.style.width = 'calc(5%)';
            np.style.height = 'calc(42.5%)';
            np.style.left = 'calc(35%)';
            if (player.hasSkill("zmt_np")) {
               np.style.top = 'calc(-18%)';
            } else {
               np.style.top = 'calc(-25%)';
            }
            np.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
            np.style['box-shadow'] = 'rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
            np.style.borderRadius = '8px';
            np.style.transform = 'rotate(-90deg)';
            player.appendChild(np);
            _status.Fate_np.np = np;
            var np1 = ui.create.div('');
            np1.style.width = 'calc(100%)';
            setInterval(function () {
               var p = player.storage.Fate_np;
               if (p > 100) p = 100;
               np1.style.height = 'calc(' + p + '%)';
            }, 100);
            np1.style.left = '0px';
            np1.style.top = '0px';
            np1.style.borderRadius = '8px';
            np1.setBackgroundImage('extension/命运·冠位指定/source/np.png');
            np1.style.backgroundSize = "100% 100%";
            np.appendChild(np1);
            _status.Fate_np.np1 = np1;
            var np2 = ui.create.div('');
            np2.style.width = 'calc(100%)';
            np2.style.height = '8px';
            np2.style.left = '0px';
            np2.style.top = 'calc(50% - 4px)';
            np2.style['white-space'] = 'nowrap';
            np2.style['font-size'] = '9px';
            np2.style['text-align'] = 'center';
            np2.style['font-family'] = "'STXinwei','xinwei'";
            np2.style.transform = 'rotate(90deg)';
            np2.style.borderRadius = '8px';
            np.appendChild(np2);
            setInterval(function () {
               np2.innerHTML = player.storage.Fate_np;
            }, 100);
            _status.Fate_np.np2 = np2;
         }, player);
      },
      group: ['Fate_np_1'],
      subSkill: {
         1: {
            trigger: {
               player: 'phaseBegin',
            },
            silent: true,
            forced: true,
            content() {
               if (player.storage.EXCD) player.storage.EXCD--     //宝具技能cd
               if (player.storage.Skill1CD) player.storage.Skill1CD--    //1技能cd
               if (player.storage.Skill2CD) player.storage.Skill2CD--    //2技能cd
               if (player.storage.Skill3CD) player.storage.Skill3CD--    //3技能cd
               player.removeFateBuff('Fate_Invincible');
               player.removeFateBuff('Fate_Invinciblepierce');
               player.removeFateBuff('Fate_Avoid');
               player.removeFateBuff('Fate_Tauntstatu');
            }
         }
      }
   };
   lib.skill.Fate_bjx = {
      mark: true,
      superCharlotte: true,
      charlotte: true,
      marktext: "<img src='extension/命运·冠位指定/status/np.png' width='20' height='20'>",
      intro: {
         markcount(num) {
            return 0;
         },
         content(storage) {
            return '<span class="bluetext"style="color: #4DFFFF">当前暴击概率:' + storage + '%'
         }
      },
   };
   lib.skill._Fate_bjx_eff = {
      trigger: {
         source: 'damageBegin',
      },
      filter(event, player) { return (Math.random() * 100) <= player.storage.Fate_bjx; },
      forced: true,
      content() {
         player.popup('暴击');
         game.log(player, '暴击了!');
         var num1 = (player.hasSkill('Fate_criticalpowerup') ? 1 : 0);
         var num2 = (player.hasSkill('Fate_criticalpowerdown') ? 1 : 0);
         trigger.num = (trigger.num + Math.ceil(trigger.num / 2) + num1 - num2);
         player.storage.Fate_bjx = 0;
      }
   };
   lib.skill._Fate_bjx_get = {
      trigger: {
         source: 'damageAfter',
      },
      filter(event, player) {
         if (player.hasSkill('Fate_bjxgain')) {
            var ncg = 0.8
         } else {
            var ncg = 0.6
         }
         if (!player.hasSkill('Fate_bjx') && Math.random() < ncg) return false;
         return !_status.connectMode;
      },
      forced: true,
      content() {
         if (player.hasSkill('Fate_bjxgainmore')) {
            var n = [6, 7, 8, 9].randomGet();
         } else if (player.hasSkill('Fate_bjxgainless')) {
            var n = [1, 2, 3].randomGet();
         } else {
            var n = [4, 5, 6].randomGet();
         }
         player.storage.Fate_bjx += n
      }
   };
   lib.skill.Fate_bjxgain = {};
   lib.skill.Fate_bjxgainmore = {};
   lib.skill.Fate_bjxgainless = {};
   //暴击星每回合获得
   lib.skill.Fate_bjxincrease = {
      trigger: {
         player: 'phaseBegin',
      },
      silent: true,
      forced: true,
      superCharlotte: true,
      charlotte: true,
      content() {
         var n = [3, 6].randomGet();
         player.storage.Fate_bjx += n
         player.storage.Fate_bjxincrease--
         if (!player.storage.Fate_bjxincrease) {
            player.removeSkill('Fate_bjxincrease')
         }
      }
   };
   lib.skill._Fate_skill_0003 = {
      trigger: {
         global: "dieAfter",
      },
      forced: true,
      filter(event, player) {
         return player == event.source;
      },
      priority: 1,
      content() {
         player.changeNp(30);
         game.log(trigger.source, 'Over kill+30NP')
         var pl = game.players.concat(game.dead)
      }
   };
   lib.skill._Fate_skill_0004 = {
      trigger: {
         source: "damage",
         player: "damageBegin",
      },
      forced: true,
      silent: true,
      firstDo: true,
      filter(event, player) {
         if (player.hasSkill('Fate_npnogain')) return false;
         return true;
      },
      content() {
         var n = [10, 10, 10, 11, 11, 11, 12, 12, 13, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 30].randomGet();
         if (player.hasSkill('BlueCard')) {
            var n = Math.round(1.2 * n)
         }
         player.changeNp(n);
      }
   };
   //色卡
   lib.skill.BlueCard = {
      superCharlotte: true,
      charlotte: true,
   };
   lib.skill.GreenCard = {
      superCharlotte: true,
      charlotte: true,
   };
   lib.skill.RedCard = {
      superCharlotte: true,
      charlotte: true,
   };
   //-----------------------------------------------游戏基础概念-------------------------------------------//
   //对xx特攻
   lib.skill._Fate_specialattack = {
      trigger: { player: 'useCardToPlayered' },
      forced: true,
      filter(event, player) {
         return event.card.name == 'sha' && player.storage.spAttack && player.spAttack(event.target, player.storage.spAttack) > 0 && !event.parent.directHit.includes(event.target);
      },//QQQ
      //priority:-1,
      logTarget: 'target',
      content() {
         player.popup('触发特攻');
         game.log(player, '对', trigger.target, '特攻了!');
         var id = trigger.target.playerid;
         var map = trigger.parent.customArgs;
         if (!map[id]) map[id] = {};
         if (typeof map[id].shanRequired == 'number') {
            map[id].shanRequired++;
         }
         else {
            map[id].shanRequired = 2;
         }
      },
   };
   lib.skill._Fate_specialnobleattack = {
      trigger: {
         source: 'damageBegin'
      },
      filter(event, player) {
         if (event.getParent('useCard')) return false;
         return lib.skill[event.reason.parent.name].NobleP && player.spAttack(event.player, player.storage.spAttack) > 0;
      },
      forced: true,
      content() {
         player.popup('触发特攻');
         game.log(player, '对', trigger.player, '特攻了!');
         if (trigger.player.countCards('he')) player.discardPlayerCard(trigger.player, true, 'he');
      },
   };
   //-----------------------------------------------特殊状态-------------------------------------------//
   //毅力               
   lib.skill.Fate_Gutsstatus = {
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Gutsstatus.png' width='20' height='20'>",
      FateCanAdd: false,
      intro: {
         content(storage) {
            return '毅力(濒死回复)状态剩余:' + storage + '次';
         }
      },
      trigger: {
         player: 'dying'
      },
      filter(event, player) {
         return player.storage.Fate_Gutsstatus;
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.recover(1 - player.hp);
         player.update();
         game.log(player, '发动毅力效果,解除濒死并回复至1生命');
         player.removeFateBuff(event.name, 1);
      },
   };
   lib.skill.Fate_Gutsstatus2 = {
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Gutsstatus.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '毅力(濒死回复)状态剩余:' + storage + '回合';
         }
      },
      FateCanAdd: true,
      trigger: {
         player: 'dying'
      },
      filter(event, player) {
         return player.storage.Fate_Gutsstatus2;
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.recover(1 - player.hp);
         player.update();
         game.log(player, '发动毅力效果,解除濒死并回复至1生命');
         player.removeFateBuff(event.name);
         if (player.hasSkill("HassaniSabbah1_2_siyuan")) player.useSkill("HassaniSabbah1_2_siyuan");
      },
      group: ['Fate_Gutsstatus2_1'],
      subSkill: {
         1: {
            trigger: {
               player: "phaseBegin",
            },
            silent: true,
            filter(event, player) {
               return player.storage.Fate_Gutsstatus2;
            },
            content() {
               player.storage.Fate_Gutsstatus2--;
               if (!player.storage.Fate_Gutsstatus2) {
                  player.removeSkill('Fate_Gutsstatus2')
                  player.unmarkSkill('Fate_Gutsstatus2')
               }
            }
         }
      }
   };
   lib.skill.Fate_Gutsstatus3 = {
      FateCanAdd: false,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Gutsstatus.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '毅力(濒死回复)状态剩余:' + storage + '回合';
         }
      },
      trigger: {
         player: 'dying'
      },
      filter(event, player) {
         return player.storage.Fate_Gutsstatus3;
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.recover(1 - player.hp);
         player.update();
         game.log(player, '发动毅力效果,解除濒死并回复至1生命');
         player.storage.Fate_Gutsstatus31--;
         if (!player.storage.Fate_Gutsstatus31) {
            player.storage.Fate_Gutsstatus3 = 0;
            player.unmarkSkill('Fate_Gutsstatus3')
            player.removeSkill('Fate_Gutsstatus3')
         }
         if (player.hasSkill("HassaniSabbah1_2_siyuan")) player.useSkill("HassaniSabbah1_2_siyuan");
      },
      group: ['Fate_Gutsstatus3_1'],
      subSkill: {
         1: {
            trigger: {
               player: "phaseBegin",
            },
            silent: true,
            filter(event, player) {
               return player.storage.Fate_Gutsstatus3;
            },
            content() {
               player.storage.Fate_Gutsstatus3--;
               if (!player.storage.Fate_Gutsstatus3) {
                  player.removeSkill('Fate_Gutsstatus3')
                  player.unmarkSkill('Fate_Gutsstatus3')
               }
            }
         }
      }
   };
   //灼烧(无)              
   lib.skill.Fate_Burn = {
      FateCanAdd: true,
      mark: true,
      debuff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Burn.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '灼烧状态剩余:' + storage + '次';
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.damage('fire', 'nosource');
         game.log(player, '触发灼烧效果,受到一点无来源的火焰伤害');
         player.removeFateBuff(event.name, 1);
      }
   };
   //灼烧(有来源)               
   lib.skill.Fate_Burn2 = {
      FateCanAdd: true,
      mark: true,
      debuff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Burn.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '灼烧状态剩余:' + storage + '次';
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         'step 0'
         var zssource = player.storage.Fate_Burn2source;
         player.damage('fire', zssource);
         game.log(player, '触发灼烧效果,受到一点', zssource, '的火焰伤害');
         player.removeFateBuff(event.name, 1);
         'step 1'
         if (player.countMark(event.name) == 0) delete player.storage.Fate_Burn2source;
      }
   };
   //回合内眩晕          
   lib.skill.Fate_Stunstatus = {
      FateCanAdd: true,
      mark: true,
      debuff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Stunstatus.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '眩晕状态剩余:' + storage + '回合';
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      forced: true,
      silent: true,
      charlotte: true,
      priority: -30,
      content() {
         player.skip('phaseUse');
         player.removeFateBuff(event.name, 1);
      }
   };
   //回合内无敌               
   lib.skill.Fate_Invincible = {
      FateCanAdd: false,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Invincible.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '我,无敌!(免疫状态伤害,免疫混乱)';
         }
      },
      init(player) {
         player.goMad = game.kongfunc;
         player.mad = game.kongfunc;
         player.isMad = () => false;
      },
      trigger: {
         player: 'damageBegin4'
      },
      filter(event, player) {
         var list = ['Fate_Burn', 'Fate_Burn2', 'Fate_Poison', 'Fate_Curse'];
         if (event.reason && list.includes(event.reason.parent.name)) return true;
         return !event.source || !event.source.hasSkill('Fate_Invinciblepierce');
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.popup('无敌');
         trigger.cancel();
      },
   };
   //一定次数的无敌&&一定回合内有限次无敌
   lib.skill.Fate_InvincibleFinite = {
      FateCanAdd: true,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Invincible.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '我,无敌!(免疫状态伤害,免疫混乱)';
         }
      },
      init(player) {
         player.goMad = game.kongfunc;
         player.mad = game.kongfunc;
         player.isMad = () => false;
      },
      trigger: {
         player: 'damageBegin4'
      },
      onremove(player) {
         player.storage.Fate_InvincibleFinite1 = 0;
         player.storage.Fate_InvincibleFinite = 0;
      },
      filter(event, player) {
         var list = ['Fate_Burn', 'Fate_Burn2', 'Fate_Poison', 'Fate_Curse'];
         if (event.reason && list.includes(event.reason.parent.name)) return true;
         return !event.source || !event.source.hasSkill('Fate_Invinciblepierce');
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         trigger.cancel();
         player.popup('无敌');
         player.removeFateBuff(event.name, 1);
      },
      group: ['Fate_InvincibleFinite_rem'],
      subSkill: {
         rem: {
            trigger: {
               player: 'phaseBegin'
            },
            forced: true,
            silent: true,
            content() {
               player.storage.Fate_InvincibleFinite1--;
               if (!player.storage.Fate_InvincibleFinite1) {
                  player.removeSkill('Fate_InvincibleFinite')
                  player.unmarkSkill('Fate_InvincibleFinite')
               }
            },
         }
      }
   };
   //无敌贯通     
   lib.skill.Fate_Invinciblepierce = {
      FateCanAdd: false,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Invinciblepierce.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '在我面前谁能称无敌';
         }
      },
      trigger: {
         source: 'damageBegin1'
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         trigger.player.hp -= trigger.num;
         trigger.finished = true;
      },
      ai: {
         "unequip": true,
         nohujia: true,
         skillTagFilter(player, tag, arg) {
            if (arg && arg.name == 'sha') return true;
            return false;
         },
      },
   };
   //防御无视               
   lib.skill.Fate_Defensepierce = {
      FateCanAdd: true,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Defensepierce.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '防御力无视状态剩余:' + storage + '回合';
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      forced: true,
      silent: true,
      content() {
         player.removeFateBuff(event.name, 1);
      },
      ai: {
         nohujia: true,
      },
   };
   //防御力上升               
   lib.skill.Fate_Defenseup = {
      FateCanAdd: true,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Defenseup.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '防御力上升状态剩余:' + storage + '回合';
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      forced: true,
      silent: true,
      content() {
         player.removeFateBuff(event.name, 1);
      },
      group: ['Fate_Defenseup_rem'],
      subSkill: {
         rem: {
            trigger: {
               player: 'damageBegin3'
            },
            filter(event, player) {
               if (event.reason && lib.skill[event.reason.parent.name].NobleP) return false;
               if (event.source && event.source.hasSkill('Fate_Defensepierce')) return false;
               return player.storage.Fate_Defenseup;
            },
            forced: true,
            content() {
               trigger.num--;
            },
         }
      }
   };
   //防御力下降
   lib.skill.Fate_Defensedown = {
      FateCanAdd: true,
      mark: true,
      debuff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Defensedown.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '防御弱化状态,状态:' + storage + '回合';
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.removeFateBuff(event.name, 1);
      },
      group: ['Fate_Defensedown_rem'],
      subSkill: {
         rem: {
            trigger: {
               player: 'damageBegin1'
            },
            filter(event, player) {
               return player.storage.Fate_Defensedown;
            },
            forced: true,
            silent: true,
            charlotte: true,
            content() {
               trigger.num++;
            },
         }
      }
   };
   //攻击力上升
   lib.skill.Fate_Attackup = {
      FateCanAdd: true,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Attackup.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '攻击力上升状态剩余:' + storage + '回合';
         }
      },
      trigger: {
         player: 'phaseBeginStart'
      },
      forced: true,
      silent: true,
      content() {
         player.removeFateBuff(event.name, 1);
      },
      group: ['Fate_Attackup_rem'],
      subSkill: {
         rem: {
            trigger: {
               source: 'damageBegin1'
            },
            filter(event, player) {
               return player.storage.Fate_Attackup;
            },
            forced: true,
            silent: true,
            charlotte: true,
            content() {
               trigger.num++;
            },
         }
      }
   };
   //攻击力下降               
   lib.skill.Fate_Attackdown = {
      FateCanAdd: true,
      mark: true,
      debuff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Attackdown.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '攻击力下降状态剩余:' + storage + '回合';
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.removeFateBuff(event.name, 1);
      },
      group: ['Fate_Attackdown_rem'],
      subSkill: {
         rem: {
            trigger: {
               source: 'damageBegin1'
            },
            filter(event, player) {
               return player.storage.Fate_Attackdown;
            },
            forced: true,
            silent: true,
            charlotte: true,
            content() {
               if (player.storage.Fate_Attackdownn > 0) {
                  trigger.num -= player.storage.Fate_Attackdownn;
               } else {
                  trigger.num--;
               }
            },
         }
      }
   };
   //宝具封印
   lib.skill.Fate_Skillseal = {
      FateCanAdd: true,
      debuff: true,
      init(player, skill) {
         var skills = player.getSkills(true, false);
         for (var i = 0; i < skills.length; i++) {
            if (!lib.skill[skills[i]].NobleP) {
               skills.splice(i--, 1);
            }
         }
         player.disableSkill(skill, skills);
      },
      onremove(player, skill) {
         player.enableSkill(skill);
      },
      charlotte: true,
      mark: true,
      marktext: "<img src='extension/命运·冠位指定/status/Skillseal.png' width='20' height='20'>",
      intro: {
         markcount(num) {
            return 0;
         },
         content(storage, player, skill) {
            var list = [];
            for (var i in player.disabledSkills) {
               if (player.disabledSkills[i].includes(skill)) {
                  list.push(i)
               }
            }
            if (list.length) {
               if (storage - 1 <= 0) {
                  var str = '宝具封印状态剩余:' + (storage) + '回合,封印宝具:';
               } else {
                  var str = '宝具封印状态剩余:' + (storage - 1) + '回合,封印宝具:';
               }
               for (var i = 0; i < list.length; i++) {
                  if (lib.translate[list[i] + '_info']) {
                     str += get.translation(list[i]) + '、';
                  }
               }
               return str.slice(0, str.length - 1);
            }
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      filter(event, player) {
         return event.player.storage.Fate_Skillseal;
      },
      forced: true,
      silent: true,
      content() {
         player.removeFateBuff(event.name, 1);
      }
   };
   //技能封印
   lib.skill.Fate_Skillseal2 = {
      FateCanAdd: true,
      debuff: true,
      init(player, skill) {
         var skills = player.getSkills(true, false);
         for (var i = 0; i < skills.length; i++) {
            var info = lib.skill[skills[i]];
            if (info.NobleP || info.charlotte) {
               skills.splice(i--, 1);
            }
         }
         player.disableSkill(skill, skills);
      },
      onremove(player, skill) {
         player.enableSkill(skill);
      },
      charlotte: true,
      mark: true,
      silent: true,
      marktext: "<img src='extension/命运·冠位指定/status/Skillseal.png' width='20' height='20'>",
      intro: {
         markcount(num) {
            return 0;
         },
         content(storage, player, skill) {
            var list = [];
            for (var i in player.disabledSkills) {
               if (player.disabledSkills[i].includes(skill)) {
                  list.push(i)
               }
            }
            if (list.length) {
               if (storage - 1 <= 0) {
                  var str = '技能封印状态剩余:' + (storage) + '回合,封印技能:';
               } else {
                  var str = '技能封印状态剩余:' + (storage - 1) + '回合,封印技能:';
               }
               for (var i = 0; i < list.length; i++) {
                  if (lib.translate[list[i] + '_info']) {
                     str += get.translation(list[i]) + '、';
                  }
               }
               return str.slice(0, str.length - 1);
            }
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      charlotte: true,
      silent: true,
      filter(event, player) {
         return event.player.storage.Fate_Skillseal2;
      },
      forced: true,
      content() {
         player.removeFateBuff(event.name, 1);
      }
   };
   //魅惑  禁用所有技能
   lib.skill.Fate_Charmstatus = {
      FateCanAdd: true,
      mark: true,
      debuff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Charmstatus.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '魅惑状态剩余:' + storage + '回合';
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      filter(event, player) {
         return event.player.storage.Fate_Charmstatus;
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         'step 0'
         player.removeFateBuff(event.name, 1);
         'step 1'
         if (player.countMark(event.name) == 0) player.enableSkill('Fate_Charmstatus', lib.character[player.name][3]);
      },
   };
   //中毒
   lib.skill.Fate_Poison = {
      FateCanAdd: true,
      mark: true,
      debuff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Poison.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '中毒状态,状态:' + storage + '回合';
         }
      },
      trigger: {
         player: 'phaseAfter'
      },
      filter(event, player) {
         return player.storage.Fate_Poison;
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.damage('poison', 'nosource');
         game.log(player, '回合结束时受到一点无来源的毒伤害');
         player.removeFateBuff(event.name, 1);
      },
   };
   //诅咒
   lib.skill.Fate_Curse = {
      FateCanAdd: true,
      mark: true,
      debuff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Curse.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '诅咒状态,状态:' + storage + '回合';
         }
      },
      trigger: {
         player: 'phaseAfter'
      },
      filter(event, player) {
         return event.player.storage.Fate_Curse;
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.loseHp();
         game.log(player, '回合结束时流失一点体力');
         player.removeFateBuff(event.name, 1);
      },
   };
   //恐怖
   lib.skill.Fate_kb = {
      FateCanAdd: true,
      mark: true,
      silent: true,
      debuff: true,
      charlotte: true,
      marktext: "怖",
      intro: {
         content(storage) {
            return '恐怖状态:' + storage + '回合<li>不能使用或打出手牌';
         }
      },
      mod: {
         cardEnabled2(card) {
            if (get.position(card) == 'h') return false;
         },
      },
      trigger: {
         player: 'phaseBegin'
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.removeFateBuff(event.name, 1);
      }
   };
   //睡眠
   lib.skill.Fate_Sleep = {
      FateCanAdd: true,
      mark: true,
      silent: true,
      debuff: true,
      charlotte: true,
      marktext: "<img src='extension/命运·冠位指定/status/Sleep.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '睡眠状态:' + storage + '回合<li>跳过出牌</li>';
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.removeFateBuff(event.name, 1);
      },
      group: ['Fate_Sleep_rem'],
      subSkill: {
         rem: {
            trigger: {
               player: ['phaseBegin', 'damageEnd']
            },
            filter(event, player) {
               if (event.name == 'damage' && event.num <= 0) return false;
               return true;
            },
            content() {
               if (trigger.name == 'damage') {
                  player.removeFateBuff('Fate_Sleep', 1);
                  player.removeFateBuff('Fate_Defensedown', player.countMark('Fate_Defensedown'));
               } else player.skip('phaseUse');
            },
         }
      }
   };
   //回避
   lib.skill.Fate_Avoid = {
      FateCanAdd: false,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Avoid.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '回避伤害';
         }
      },
      trigger: {
         player: 'damageBegin4'
      },
      filter(event, player) {
         return !event.source || (event.source && !event.source.hasSkill('Fate_Surehit'));
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         trigger.cancel();
         player.popup('没打着')
         game.log(player, '回避了伤害');
      },
   };
   //一定回合回避次数
   lib.skill.Fate_Avoid2 = {
      FateCanAdd: true,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Avoid.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '回避伤害';
         }
      },
      trigger: {
         player: 'damageBegin'
      },
      filter(event, player) {
         return !event.source || (event.source && !event.source.hasSkill('Fate_Surehit'));
      },
      onremove(player) {
         player.storage.Fate_Avoid2 = 0;
         player.storage.Fate_Avoid21 = 0;
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         trigger.cancel();
         player.popup('Miss')
         game.log(player, '回避了伤害');
         player.storage.Fate_Avoid2--;
         if (player.storage.Fate_Avoid2 == 0) {
            player.unmarkSkill('Fate_Avoid2')
            player.removeSkill('Fate_Avoid2')
         }
      },
      group: ['Fate_Avoid2_rem'],
      subSkill: {
         rem: {
            trigger: {
               player: 'phaseBeginStart'
            },
            forced: true,
            silent: true,
            charlotte: true,
            content() {
               player.storage.Fate_Avoid21--;
               if (player.storage.Fate_Avoid21 == 0) {
                  player.storage.Fate_Avoid2 = 0;
                  player.unmarkSkill('Fate_Avoid2')
                  player.removeSkill('Fate_Avoid2')
               }
            }
         }
      }
   };
   //一定回合内每回合回避
   lib.skill.Fate_Avoid3 = {
      FateCanAdd: false,
      buff: true,
      trigger: {
         player: 'phaseBegin',
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.removeFateBuff(event.name, 1);
      },
      subSkill: {
         1: {
            mark: true,
            marktext: "<img src='extension/命运·冠位指定/status/Avoid.png' width='20' height='20'>",
            intro: {
               content(storage) {
                  return '回避伤害';
               }
            },
            trigger: {
               player: 'damageBegin',
            },
            forced: true,
            silent: true,
            charlotte: true,
            filter(event, player) {
               return !event.source || (event.source && !event.source.hasSkill('Fate_Surehit'));
            },
            content() {
               trigger.cancel();
               player.popup('Miss')
               game.log(player, '回避了伤害');
               player.storage.Fate_Avoid3_1--;
               player.unmarkSkill('Fate_Avoid3_1')
               player.removeSkill('Fate_Avoid3_1')
            }
         }
      }
   };
   //嘲讽
   lib.skill.Fate_Tauntstatu = {
      FateCanAdd: false,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Tauntstatus.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '嘲讽状态';
         }
      },
      global: '_Fate_Tauntstatu_disable',
      gainnable: true,
      charlotte: true,
      subSkill: {
         disable: {
            mod: {
               targetEnabled(card, player, target) {
                  if (player.storage.Fate_Tauntstatu) return;
                  if (card.name == 'sha') {
                     if (target.storage.Fate_Tauntstatu) return;
                     if (game.hasPlayer(function (current) {
                        return current.storage.Fate_Tauntstatu && get.distance(player, current, 'attack') <= 1;
                     })) {
                        return false;
                     }
                  }
               }
            }
         }
      }
   };
   //必中
   lib.skill.Fate_Surehit = {
      FateCanAdd: true,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Surehit.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '必中状态剩余:' + storage + '回合';
         }
      },
      trigger: {
         player: 'phaseBeginStart'
      },
      forced: true,
      silent: true,
      content() {
         player.removeFateBuff(event.name, 1);
      },
      group: ['Fate_Surehit_rem'],
      subSkill: {
         rem: {
            trigger: { player: 'useCardToTargeted' },
            filter(event, player) {
               if (event.card.name != 'sha') return false;
               if (player.storage.Fate_Surehit) return true;
               return false;
            },
            forced: true,
            silent: true,
            charlotte: true,
            content() {
               trigger.parent.directHit.push(trigger.target);
            },
         }
      }
   };
   //精神耐性
   lib.skill.Fate_SpiritResist = {
   };
   //治疗
   lib.skill.Fate_Hpregen = {
      FateCanAdd: true,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/Hpregen.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '回复状态,状态:' + storage + '回合';
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.recover();
         player.removeFateBuff(event.name, 1);
      },
   };
   lib.skill.Fate_Hpregenup = {
      mark: true,
      marktext: "<img src='extension/命运·冠位指定/status/Hpregenup.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '回复量提升';
         }
      },
      trigger: {
         player: 'recoverBegin'
      },
      filter(event, player) {
         return event.num > 0;
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         trigger.num++
      }
   };
   //即死
   lib.skill.Fate_js = {
      onremove(player) {
         player.storage.Fate_js = 0;
      },
   };
   //一回合后获得状态
   lib.skill.Fate_Statusdelay = {
      trigger: {
         player: 'phaseBefore'
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         'step 0'
         var Fstatus = player.storage.Fate_Statusdelay;
         player.addFateBuff(Fstatus, 1);
         'step 1'
         player.storage.Fate_Statusdelay = 0;
      }
   };
   lib.skill.Fate_buffresist = {
      mark: true,
      marktext: '√',
      intro: {
         content: '抵抗BUFF',
      }
   }
   lib.skill.Fate_debuffresist = {
      mark: true,
      marktext: '🚫',
      intro: {
         content: '抵抗DEBUFF',
      }
   }
   lib.skill.Fate_criticalpowerup = {
      FateCanAdd: true,
      mark: true,
      buff: true,
      marktext: "<img src='extension/命运·冠位指定/status/criticalpowerup.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return '暴击威力增加状态,状态:' + storage + '回合';
         }
      },
      trigger: {
         player: 'phaseBegin'
      },
      forced: true,
      silent: true,
      charlotte: true,
      content() {
         player.removeFateBuff(event.name, 1);
      },
   },
      lib.skill.Fate_criticalpowerdown = {
         FateCanAdd: true,
         mark: true,
         buff: true,
         marktext: "<img src='extension/命运·冠位指定/status/criticalpowerdown.png' width='20' height='20'>",
         intro: {
            content(storage) {
               return '暴击威力削弱状态,状态:' + storage + '回合';
            }
         },
         trigger: {
            player: 'phaseBegin'
         },
         forced: true,
         silent: true,
         charlotte: true,
         content() {
            player.removeFateBuff(event.name, 1);
         },
      },
      //色卡相关
      //——Power by xiaoas
      lib.skill._Fate_draw = {
         audio: "ext:命运·冠位指定/audio:3",
         trigger: { player: "gainAfter", },
         forced: true,
         popup: false,
         charlotte: true,
         filter(event, player) {
            return event.player.name.indexOf('Fate_') >= 0 && event.cards && event.cards.length;
         },
         content() {
            var list = player.getCards('h', function (card) {
               return !((card.isSecard && card.isSecard[1]) || (card.isSecard && card.isSecard[2]) || (card.isSecard && card.isSecard[3]));
            })
            if (list.length) {
               for (var i = 0; i < list.length; i++) {
                  let paint = function (card, paintType, toggle = true) {
                     if (!document.body.contains(card.parentElement)) {//QQQ
                        return;
                     }
                     var target = card.querySelector(`#Secard${paintType}`);
                     if (target) {
                        if (!toggle) {
                           card.removeChild(target);
                        }
                        return;
                     }
                     let div = document.createElement("div");
                     card.appendChild(div);
                     div.style.minWidth = "33%";
                     div.style.top = "33%";
                     div.style.height = "14px";
                     // div.style.opacity = "0.5";
                     switch (paintType) {
                        case 1:
                           div.setAttribute("id", "Secard1");
                           div.style.left = "0%";
                           div.style.backgroundColor = "rgba(255,0,0,0.6)";
                           div.innerHTML = '<span class="bluetext"style="color: #FFFFFF">Buster</span>';
                           break;
                        case 2:
                           div.setAttribute("id", "Secard2");
                           div.style.left = "0%";
                           div.style.backgroundColor = "rgba(0,255,0,0.6)";
                           div.innerHTML = '<span class="bluetext"style="color: #FFFFFF">Quick</span>';
                           break;
                        case 3:
                           div.setAttribute("id", "Secard3");
                           div.style.left = "0%";
                           div.style.backgroundColor = "rgba(0,0,255,0.6)";
                           div.innerHTML = '<span class="bluetext"style="color: #FFFFFF">Arts</span>';
                           break;
                        default:
                           break;
                     }
                  };
                  if (!list[i].isSecard) list[i].isSecard = {
                     // _paint(paintType, toggle) {
                     //   paint(event.card, paintType, toggle);
                     // },
                     _card: list[i],
                     get 1() { return this._1; },
                     get 2() { return this._2; },
                     get 3() { return this._3; },
                     set 1(value) {
                        if (value == this._1) return;
                        this._1 = !!value;
                        game.broadcastAll(paint, this._card, 1, !!value);
                     },
                     set 2(value) {
                        if (value == this._2) return;
                        this._2 = !!value;
                        game.broadcastAll(paint, this._card, 2, !!value);
                     },
                     set 3(value) {
                        if (value == this._3) return;
                        this._3 = !!value;
                        game.broadcastAll(paint, this._card, 3, !!value);
                     },
                     _1: false,
                     _2: false,
                     _3: false,
                  };
                  var j = [1, 2, 3].randomGet()
                  list[i].isSecard[j] = true;
               }
            }
         },
         global: ['_Fate_draw_clear'],
         subSkill: {
            clear: {
               // FIXME: missing clear logic
               trigger: { player: ['useCardAfter', 'discardAfter'] },
               silent: true,
               filter(event, player) {
                  var cards = event.cards;
                  if (!cards) cards = event.card && event.card.cards;
                  return cards;// && cards.length == 1 && cards[0].isSecard;
               },
               forced: true,
               popup: false,
               content() {
                  if (trigger.card) {
                     if (trigger.card.isSecard) {
                        trigger.card.isSecard._card = trigger.card;
                        trigger.card.isSecard[1] = false;
                        trigger.card.isSecard[2] = false;
                        trigger.card.isSecard[3] = false;
                        delete trigger.card.isSecard;
                     }
                     if (trigger.card.cards) {
                        for (card of trigger.card.cards) {
                           if (card.isSecard) {
                              card.isSecard._card = card;
                              card.isSecard[1] = false;
                              card.isSecard[2] = false;
                              card.isSecard[3] = false;
                              delete card.isSecard;
                           }
                        }
                     }
                  } else if (trigger.cards) {
                     for (card of trigger.cards) {
                        if (card.isSecard) {
                           card.isSecard._card = card;
                           card.isSecard[1] = false;
                           card.isSecard[2] = false;
                           card.isSecard[3] = false;
                           delete card.isSecard;
                        }
                     }
                  }
               }
            }
         }
      };
   lib.skill.Artspowerup = {
      mark: true,
      charlotte: true,
      marktext: "<img src='extension/命运·冠位指定/status/Artsup.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return 'Arts卡性能提升了,使用Arts牌摸牌';
         }
      },
      trigger: { player: 'useCard' },
      filter(event, player) {
         return (event.card && event.card.isSecard && event.card.isSecard[3] ||
            event.cards[0] && event.cards[0].isSecard && event.cards[0].isSecard[3]);
      },
      forced: true,
      content() {
         player.draw()
      }
   };
   lib.skill.Quickpowerup = {
      mark: true,
      charlotte: true,
      marktext: "<img src='extension/命运·冠位指定/status/Quickup.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return 'Quick卡性能提升了,使用Quick牌不能响应';
         }
      },
      trigger: { player: 'useCard' },
      filter(event, player) {
         if (!event.card) return false;
         if (get.itemtype(event.cards) != 'cards') return false;
         return player.isPhaseUsing() && (event.card.name == 'sha' || get.type(event.card) == 'trick') && (event.card.isSecard && event.card.isSecard[2] ||
            event.cards[0] && event.cards[0].isSecard && event.cards[0].isSecard[2]);
      },
      forced: true,
      content() {
         trigger.nowuxie = true;
         trigger.directHit.addArray(game.players);
      },
   };
   lib.skill.Busterpowerup = {
      mark: true,
      marktext: "<img src='extension/命运·冠位指定/status/Busterup.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return 'Buster卡性能提升了,使用Buster的带有伤害标签牌伤害+1';
         }
      },
      trigger: { source: 'damageBegin' },
      forced: true,
      charlotte: true,
      filter(event, player) {
         var criterion = get.tag(event.card, 'damage') && (event.card.isSecard && event.card.isSecard[1] ||
            event.cards[0] && event.cards[0].isSecard && event.cards[0].isSecard[1]);
         return event.card && criterion && get.itemtype(event.cards) == 'cards' && event.notLink();
      },
      content() {
         trigger.num++;
      }
   };
   lib.skill.Artspowerdown = {
      mark: true,
      marktext: "<img src='extension/命运·冠位指定/status/Artsdown.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return 'Arts卡性能下降了,使用Arts牌弃牌';
         }
      },
      trigger: { player: 'useCard' },
      filter(event, player) {
         // return event.card && event.card.isSecard && event.card.isSecard[1];
         if (!event.card) return false;
         return player.countCards('h') && (event.card.isSecard && event.card.isSecard[3] ||
            event.cards[0] && event.cards[0].isSecard && event.cards[0].isSecard[3]);
      },
      forced: true,
      charlotte: true,
      content() {
         player.chooseToDiscard('h', true);
      }
   };
   lib.skill.Quickpowerdown = {
      mark: true,
      marktext: "<img src='extension/命运·冠位指定/status/Quickdown.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return 'Quick卡性能下降了,不能使用打出或弃置Quick牌';
         }
      },
      charlotte: true,
      mod: {
         cardDiscardable(card, player) {
            if (card.isSecard && card.isSecard[2]) return false;
         },
         cardEnabled(card, player) {
            if (card.isSecard && card.isSecard[2]) return false;
         },
         cardUsable(card, player) {
            if (card.isSecard && card.isSecard[2]) return false;
         },
         cardRespondable(card, player) {
            if (card.isSecard && card.isSecard[2]) return false;
         },
         cardSavable(card, player) {
            if (card.isSecard && card.isSecard[2]) return false;
         },
      },
   };
   lib.skill.Busterpowerdown = {
      mark: true,
      marktext: "<img src='extension/命运·冠位指定/status/Busterdown.png' width='20' height='20'>",
      intro: {
         content(storage) {
            return 'Buster卡性能下降了,使用Buster的带有伤害标签牌伤害-1';
         }
      },
      trigger: { source: 'damageBegin' },
      forced: true,
      silent: true,
      charlotte: true,
      filter(event, player) {
         return event.card && get.tag(event.card, 'damage') && (event.card.isSecard && event.card.isSecard[1] ||
            event.cards[0] && event.cards[0].isSecard && event.cards[0].isSecard[1]) && event.notLink();
      },
      content() {
         trigger.num--;
      }
   };
   //Extra Attack
   lib.skill._Fate_BraveChaincount = {
      trigger: { player: 'useCard' },
      filter(event, player) {
         return (event.card && event.card.isSecard) || (event.cards[0] && event.cards[0].isSecard);
      },
      forced: true,
      content() {
         var Setype;
         if (trigger.card && trigger.card.isSecard) {
            if (trigger.card.isSecard[1]) Setype = 1;
            if (trigger.card.isSecard[2]) Setype = 2;
            if (trigger.card.isSecard[3]) Setype = 3;
         }
         if (trigger.cards[0] && trigger.cards[0].isSecard) {
            if (trigger.cards[0].isSecard[1]) Setype = 1;
            if (trigger.cards[0].isSecard[2]) Setype = 2;
            if (trigger.cards[0].isSecard[3]) Setype = 3;
         }
         if (!player.storage.Fate_BraveChain) player.storage.Fate_BraveChain = [];
         if (!player.storage.Fate_BraveChainxu) player.storage.Fate_BraveChainxu = 0;
         if (player.storage.Fate_BraveChain.length == 0 || player.storage.Fate_BraveChain.includes(Setype)) {
            player.storage.Fate_BraveChain.add(Setype);
            player.storage.Fate_BraveChainxu++;
         } else {
            player.storage.Fate_BraveChain = [];
            player.storage.Fate_BraveChainxu = 1;
            player.storage.Fate_BraveChain.add(Setype);
         }
      }
   };
   lib.skill._Fate_BraveChain = {
      trigger: { player: 'useCardAfter' },
      filter(event, player) {
         return player.storage.Fate_BraveChainxu >= 3;
      },
      forced: true,
      content() {
         if (['basic', 'trick'].includes(get.type(trigger.card))) {
            player.popup('Extra Attack');
            var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
            player.useCard(card, (trigger._targets || trigger.targets).slice(0));
         }
         delete player.storage.Fate_BraveChainxu;
         player.storage.Fate_BraveChain = [];
      }
   }
   //-----------------------------------------------特殊状态-------------------------------------------//
   //灵衣装备
   lib.skill._F_clothe = {
      trigger: {
         global: "gameStart",
      },
      priority: 101,
      usable: 1,
      forced: true,
      filter(event, player) {
         return (lib.config.Fate_JeanneAlterclothe == true && player.name == 'Fate_JeanneAlter') || (lib.config.Fate_AltriaAlterclothe == true && player.name == 'Fate_AltriaAlter') || (lib.config.Fate_Scathachclothe && player.name == 'Fate_Scathach');
      },
      content() {
         'step 0'
         player.chooseControl('ok2', 'cancel').set('prompt', '是否使用灵衣')
         'step 1'
         if (result.control == 'ok2') {
            lib.character[player.name][4] = (['ext:命运·冠位指定/clothes/' + player.name + 'clothe.jpg']);
            player.node.avatar.setBackgroundImage('extension/命运·冠位指定/clothes/' + player.name + 'clothe.jpg');
         }
      }
   };
   lib.translate.Fate_np = "NP";
   lib.translate.FaE = '#33FF33';
   lib.translate.FaD = '#5599FF';
   lib.translate.FaC = '#E93EFF';
   lib.translate.FaB = '#FFAA33';
   lib.translate.FaA = '#FF3333';
   lib.translate.FaEX = '#FFFF33';
   lib.translate.Quickpowerup = 'Quick';
   lib.translate.Artspowerup = 'Arts';
   lib.translate.Busterpowerup = 'Buster';
   lib.translate.Quickpowerdown = 'Quick';
   lib.translate.Artspowerdown = 'Arts';
   lib.translate.Busterpowerdown = 'Buster';
   //状态
   lib.translate.Fate_Avoid = '回避';
   lib.translate.Fate_Avoid2 = '回避(回合)';
   lib.translate.Fate_Avoid3 = '回避(每回合)';
   lib.translate.Fate_Hpregen = '治疗';
   lib.translate.Fate_Burn = '灼烧';
   lib.translate.Fate_Burn2 = '灼烧';
   lib.translate.Fate_Stunstatus = '回合内眩晕';
   lib.translate.Fate_Invincible = '回合内无敌';
   lib.translate.Fate_Invinciblepierce = '回合内无敌贯通';
   lib.translate.Fate_InvincibleFinite = '无敌(计次)';
   lib.translate.Fate_Defenseup = '防御力上升';
   lib.translate.Fate_Defensepierce = '防御无视';
   lib.translate.Fate_Defensedown = '防御力下降';
   lib.translate.Fate_Attackup = '攻击力上升';
   lib.translate.Fate_Attackdown = '攻击力下降';
   lib.translate.Fate_Gutsstatus = '毅力(濒死回复)';
   lib.translate.Fate_Gutsstatus2 = '毅力(濒死回复)';
   lib.translate.Fate_Gutsstatus3 = '毅力(濒死回复)';
   lib.translate.Fate_Poison = '中毒';
   lib.translate.Fate_Curse = '诅咒(持续掉血)';
   lib.translate.Fate_Skillseal = '宝具封印';
   lib.translate.Fate_Skillseal2 = '技能封印';
   lib.translate.Fate_Charmstatus = '魅惑(封印技能)';
   lib.translate.Fate_Tauntstatu = '嘲讽';
   lib.translate.Fate_kb = '恐怖';
   lib.translate.Fate_SpiritResist = '精神耐性';
   lib.translate.Fate_ds = '毅力';
   lib.translate.Fate_bjx = '暴击';
   lib.translate.Fate_Surehit = '必中';
   lib.translate.Fate_debuffresist = '负面增益抵抗';
   lib.translate.Fate_buffresist = '正面增益抵抗';
   lib.translate.Fate_criticalpowerdown = '暴击威力下降';
   lib.translate.Fate_criticalpowerup = '暴击威力上升';
   lib.translate.sacred = "神";
   lib.translate.Loong = "龙";
   lib.translate.LoongColor = "#4f4f4f";
   lib.translate.sacredColor = "#ffff93";
});