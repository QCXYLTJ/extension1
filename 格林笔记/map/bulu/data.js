window.gl_init = function (lib, game, ui, get, ai, _status) {
  var list = ['大法师与猫女仆'];
  if (get.gl_data('maonvpu_start')) list.push('米娅想要一起玩');
  if (get.gl_data('maonvpu_start')) list.push('布鲁感觉很贫穷');
  if (get.gl_data('maonvpu_start')) list.push('卡罗罗请求指教');
  if (get.gl_data('maonvpu_miya') && get.gl_data('maonvpu_bulu') && get.gl_data('maonvpu_kaluoluo')) list.push('怀特对你很满意');
  list.push('cancel2');
  var date = {
    '大法师与猫女仆': {
      init: function () {
        var event = galgame.sce('maonvpu1');
        var next = game.createEvent('over', false);
        next.setContent(function () {
          game.gl_setData('maonvpu_start');
          game.over(true);
        });
        _status.event.next.remove(next);
        event.after.push(next);
      },
      galgame: {
        "maonvpu1": [
        "gl_famu:我亲爱的公主殿下，您不会又双叒叕带错路了吧？",
        "gl_leina:大...大概没有吧？",
        "gl_aikesi:但这里的确是一点被混沌侵蚀的迹象都没有呢。",
        "gl_leina:那...那我重新感应一下？",
        "none:蕾娜闭上双眼开始祷告。",
        "gl_ailuoweisi:有结果了吗？",
        "gl_leina:嗯......呀，我们似乎走反了！",
        "gl_famu:我的公主殿下呀，您这次偏的方向已经不能用大来形容啦！！！",
        "gl_aida:唉......",
        "gl_sade:艾达姐居然都已经忍不住叹气了吗？真是少见啊！",
        "gl_leina:对...对不起......",
        "gl_aikesi:好了各位，只是走错路了而已重新再走过就是了。",
        "gl_ailuoweisi:天色不早了，还是先找地方休息明天再重新上路吧。",
        "gl_famu:各位觉得去前面那座城堡借宿怎么样？",
        "gl_aikesi:嗯？看起来挺宏伟的，但是会不会打扰到别人？要不还是露营吧？",
        "gl_famu:艾克斯你还记得我们已经露营多少天了吗？",
        "gl_aikesi:诶？大...大概三...三十天的样子吧？",
        "gl_famu:你原来还记得啊？！难道你不知道没有哪个女孩子可以接受一直露营的吗？！",
        "gl_aikesi:抱...抱歉......",
        "gl_sade:如果哥哥想的话，其实我......唔唔唔唔！！！",
        "gl_famu:大人说话，小孩子不要插嘴哦~",
        "gl_ailuoweisi:够了别闹了！我和艾达先去前面问问，能够借宿就借宿不能借宿就露营。",
        "background:格林笔记/map/bulu/shinei.jpg",
        "sp:明明作为主人的我应该好好招待来宾才是，但是突然收到法师协会的邀请也没办法拒绝......:大法师:格林笔记",
        "gl_huaite:我都明白的，主人请放心喵~",
        "gl_miya:芜湖，米娅会让所有客人都快乐的跳起来的！",
        "gl_bulu:突然给我增加工作量，下个月必要涨工资才行哦......",
        "gl_kaluoluo:虽...虽然这么多人让卡罗罗有些害羞......"]

      },
      pack: {
        character: {},
        skill: {},
        translate: {}
      },
      beyond: [{
        name: 'gl_leina',
        identity: 'nei',
        position: 1
      }, {
        name: 'gl_aida',
        identity: 'nei',
        position: 3
      }, {
        name: 'gl_ailuoweisi',
        identity: 'nei',
        position: 4
      }, {
        name: 'gl_sade',
        identity: 'nei',
        position: 5
      }, {
        name: 'gl_famu',
        identity: 'nei',
        position: 7
      }]
    },
    '米娅想要一起玩': {
      init: function () {
        var event = galgame.sce('maonvpu1');
        var next = game.createEvent('over', false);
        next.player = game.me;
        next.setContent(function () {
          'step 0';
          event.speed = 10;
          event.leap = 50;
          'step 1';
          var timeleap = [1000];
          while (timeleap.length < 100) {
            var num = timeleap[timeleap.length - 1];
            timeleap.push(num + Math.floor(Math.random() * event.leap) + event.leap);
          }
          player.chooseToPlayBeatmap({
            name: '鳥の詩',
            filename: 'tori_no_uta',
            timeleap: timeleap,
            current: -546,
            judgebar_height: 0.14,
            range1: [86, 110],
            range2: [92, 104],
            range3: [96, 100],
            speed: event.speed
          });
          'step 2';
          if (result.accuracy) {
            if (result.accuracy >= 80) {
              game.gl_setData('maonvpu_miya');
              galgame.sce('maonvpu3');
              game.gl_gain('gl_miya');
            } else {
              galgame.sce('maonvpu2');
              event.speed += 5;
              event.leap += 50;
              event.goto(1);
            }
          } else {
            game.over();
          }
          'step 3';
          game.over(true);
        });
        _status.event.next.remove(next);
        event.after.push(next);
      },
      galgame: {
        "maonvpu1": [
        "gl_miya:呀，这位客人您怎么一直闷闷不乐的？",
        "gl_ailuoweisi:你在问我吗？",
        "gl_miya:当然啦~您看您的同伴们都很高兴呢~",
        "gl_famu:哇！那个水晶球看起来是个稀罕货，我能不能......",
        "gl_leina:不能！",
        "none:蕾娜拿起箱庭王国往法姆头顶狠狠的砸了一下。",
        "gl_famu:好疼！我话都还没说完呢！",
        "gl_leina:你不说我都知道你想干什么！",
        "gl_sade:蕾娜姐姐，你看这个长得奇形怪状是什么？",
        "gl_leina:嗯？那个应该是用怪异组织制作的摆件，千万不要随便碰它不然会伤到自己的。",
        "none:蕾娜握住萨德的手又摸了摸萨德的头。",
        "gl_famu:呜呜呜......我的公主殿下为什么只对我这么严苛！",
        "gl_aikesi:哈哈哈。原本我还担心蕾娜和法姆会不会还心存芥蒂呢，现在看来完全是我想太多了。你说是吧，艾...艾达？",
        "gl_aida:<span class='small'>毛...毛茸茸....斯哈...斯哈....</span>",
        "gl_bulu:怎么突然感觉浑身一阵恶寒......肯定是最近劳累过度了！回头必需要求精神补贴才行！",
        "gl_ailuoweisi:这群家伙......我只是不喜形于色而已，你不需要管我。",
        "gl_miya:像您这种嘴硬的客人我也见过呢~这种时候就得来玩游戏！",
        "gl_ailuoweisi:我说过了，我......",
        "gl_aikesi:艾洛维斯你还记得吉尔德雷先生最后和你说过的话吗？",
        "none:艾克斯不知何时走到艾洛维斯身后，拍了拍艾洛维斯的肩膀。",
        "gl_ailuoweisi:......输了可别哭鼻子。",
        "gl_aikesi:不介意的话，我也一起来吧~",
        "gl_miya:芜湖！米娅的游戏时间到了~"],

        "maonvpu2": [
        "gl_aikesi:哈呼....米娅你太...太厉害了！",
        "gl_miya:哈哈哈，客人您们的身手看来很差劲嘛~",
        "gl_ailuoweisi:......",
        "gl_aikesi:抱歉，艾洛维斯我拖你后腿了。",
        "gl_miya:别气馁，多尝试几次客人们说不定就能赢了呢~"],

        "maonvpu3": [
        "gl_aikesi:太好了，艾洛维斯我们赢了！",
        "gl_ailuoweisi:呵，有我在那是当然的。",
        "gl_miya:哈哈哈，您的笑容明明很健康嘛~",
        "gl_ailuoweisi:......谢谢。",
        "gl_miya:芜湖，米娅也玩的很尽兴了呢~",
        "none:引导之证充满了元气。"]

      },
      pack: {
        character: {},
        skill: {},
        translate: {}
      },
      beyond: [{
        name: 'gl_ailuoweisi',
        position: 1,
        identity: 'nei'
      }, {
        name: 'gl_miya',
        position: 7,
        identity: 'zhong'
      }]
    },
    '布鲁感觉很贫穷': {
      init: function () {
        var event = galgame.sce('maonvpu1');
        var next = game.createEvent('over', false);
        next.player = game.me;
        next.starttime = get.utc();
        next.end = function () {
          _status.event.next.length = 0;
          game.createEvent('giveup', false).setContent(function () {
            'step 0';
            galgame.sce('maonvpu8');
            game.gl_gain('gl_bulu');
            game.gl_setData('maonvpu_bulu');
            'step 1';
            game.over(false);
          }).player = game.me;
          if (_status.paused && _status.imchoosing && !_status.auto) {
            ui.click.auto();
            ui.autonode.hide();
          }
        };
        next.setContent(function () {
          'step 0';
          event.win = 0;
          event.lose = 0;
          event.round = 0;
          'step 1';
          player.chooseControl('正面', '背面').prompt = '请猜测硬币的正反';
          'step 2';
          event.link = result.control == '正面' ? true : false;
          if (event.directWin) {
            game.gl_throwCoin(event.link);
          } else if (event.win == 2) {
            game.gl_throwCoin(!event.link);
            if (event.sade) {
              galgame.sce('maonvpu6');
              event.directWin = true;
            }
          } else {
            game.gl_throwCoin();
          }
          'step 3';
          if (event.link == result.bool) {
            event.win++;
          } else {
            event.lose++;
          }
          if (event.win == 3) {
            if (!event.directWin) {
              game.over(true);
            } else {
              galgame.sce('maonvpu7');
              event.over = true;
            }
          }
          if (event.lose == 3) {
            galgame.sce('maonvpu2');
            event.round++;
            if (event.round > 3 && !event.directWin) {
              galgame.sce('maonvpu3');
              event.over = true;
            } else {
              if (!event.directWin) galgame.sce('maonvpu4');
            }
            event.win = 0;
            event.lose = 0;
          }
          if (event.win == 2 && event.directWin) {
            setTimeout(event.end, 90000);
          }
          'step 4';
          if (event.over) game.over();
          var num = Math.round((get.utc() - event.starttime) / 1000);
          if (num > 240 && !event.sade) {
            galgame.sce('maonvpu5');
            var sade = game.addPlayer(1, 'gl_sade');
            sade.getId();
            sade.identity = 'nei';
            sade.setIdentity('nei');
            event.sade = true;
          }
          event.goto(1);
        });
        _status.event.next.remove(next);
        event.after.push(next);
      },
      galgame: {
        "maonvpu1": [
        "gl_bulu:唉......",
        "none:布鲁望着手里的一枚硬币，不住的叹气。",
        "gl_aikesi:布鲁小姐你的休息时间已经到了吗？",
        "gl_bulu:哦，客人啊。现在的确是我的休息时间，您有什么事吗？我还是可以帮您稍微处理......",
        "gl_aikesi:不不不，完全不是！只是我看你明明是在休息但是好像不怎么高兴，所以就想着过来问问是不是出什么事了。",
        "gl_bulu:倒也没有......这么一说客人不介意陪我玩个游戏吧？",
        "gl_aikesi:我倒是很乐意，不过布鲁小姐原来你也喜欢玩游戏吗？我还以外只有米娅有娱乐活动呢！",
        "gl_bulu:额...也不算是喜欢吧......规则的话很简单，我来抛硬币客人您来猜测正反，合计猜对3次就算您赢，合计猜错3次就算您输喽~",
        "gl_aikesi:我明白了，那就赶快开始吧！",
        "gl_bulu:等等，我们再加点彩头吧！这样更有意思！",
        "gl_aikesi:彩头？",
        "gl_bulu:没错，输的一方要给赢的一方十枚银币~",
        "gl_aikesi:我倒是没什么问题......",
        "gl_bulu:那就开始喽~"],

        "maonvpu2": [
        "gl_bulu:嘿嘿，我赢了。银元拿来~",
        "gl_aikesi:给...不过布鲁你的运气真不错啊。"],

        "maonvpu3": [
        "gl_bulu:哈哈哈，那是当然......呀！工作时间又到了，下次有空再来吧！",
        "gl_aikesi:嗯，那我也不打扰你努力工作了。"],

        "maonvpu4": [
        "gl_bulu:哈哈哈，那是当然......离工作还有段时间我们再来一盘吧~",
        "gl_aikesi:嗯，乐意奉陪！"],

        "maonvpu5": [
        "gl_sade:猜猜我是谁~",
        "none:萨德从身后捂住艾克斯的眼睛，嘴里发出和法姆几乎一摸一样的声音。",
        "gl_aikesi:萨德别闹哦，我在陪布鲁小姐玩游戏呢~",
        "none:萨德将捂着艾克斯的眼睛手滑到艾克斯肩膀上，一个空翻坐到艾克斯大腿上。",
        "gl_sade:那我可以在这里看哥哥和布鲁小姐玩吗？",
        "gl_aikesi:这个当然没问题，不过下次如果不是已经在做才问我就更好了~"],

        "maonvpu6": [
        "gl_sade:嗯？<span class='small'>哥哥，这家伙刚刚用了魔术手！</span>",
        "gl_aikesi:<span class='small'>什...什么意思？</span>",
        "gl_sade:<span class='small'>简单来说就是她作弊了！不过没关系，这种小把戏在我这种在怪盗面前根本不值一提！</span>",
        "gl_bulu:两位在说什么悄悄话呢？还要玩下去吗？",
        "gl_aikesi:我们还是.......",
        "gl_sade:当然要继续！而且还要加注玩把大的！这是十枚金币！",
        "gl_bulu:金...金币？！",
        "gl_sade:怎么布鲁小姐你害怕了吗？",
        "gl_bulu:才...才不会呢！只是赢走客人十枚金币，主人回来知道了万一把我开除了怎么办？",
        "gl_sade:放心，只要你等等输了别赖账，这事不会有第四个人知道~"],

        "maonvpu7": [
        "gl_sade:怎么样？我们赢了！十枚金币快点拿出来！",
        "gl_bulu:......给（呜呜呜......之后几个月连猫粮都没得吃了，只能去和野猫抢垃圾桶了！）"],

        "maonvpu8": [
        "gl_sade:哥哥，别发呆快猜呀！你随便猜一个我们就赢了！",
        "gl_aikesi:......哈哈哈，之前一直输这次肯定也赢不了呢。认输啦，认输啦！总不能我说正面打开就是正面吧？",
        "none:盖杯打开，硬币正面朝上。",
        "gl_bulu:唔！！！",
        "gl_sade:是正面，我们赢......",
        "gl_aikesi:哇，居然真的是正面，但是太可惜了，我已经认输了呢~",
        "gl_bulu:......",
        "gl_aikesi:来，布鲁小姐，你的十枚金币。下次要是有烦恼能直接说出来就更好了！",
        "gl_bulu:我...我的休息时间结束了，我先回去工作了......",
        "none:引导之证涌动着娇矜的气息，布鲁离开休息间。",
        "gl_sade:哼，我生气了！",
        "gl_aikesi:啊......哦！刚刚你输掉了十枚金币，来拿着吧~",
        "gl_sade:才不是金币的问题啦！！！"]

      },
      pack: {
        character: {},
        skill: {},
        translate: {}
      },
      beyond: [{
        name: "gl_bulu",
        position: 4,
        identity: "zhong"
      }]
    },
    '卡罗罗请求指教': {
      init: function () {
        var event = galgame.sce('maonvpu1');
        var next = game.createEvent('over', false);
        next.player = game.me;
        next.setContent(function () {
          "step 0";
          event.speed = 300;
          event.win = 0;
          "step 1";
          if (_status.connectMode) event.time = lib.configOL.choose_timeout;
          var cards = [];
          var names = [];
          while (true) {
            var card = get.cardPile(function (carde) {
              return carde.name != 'du' && !names.includes(carde.name);
            });
            if (card) {
              cards.push(card);
              names.push(card.name);
            } else break;
          };
          event.cards = cards;
          if (cards.length < 30) {
            game.over(false);
            return;
          };
          event.videoId = lib.status.videoId++;
          if (player.isUnderControl()) {
            game.swapPlayerAuto(player);
          }
          var switchToAuto = function () {
            names.remove('du');
            game.pause();
            game.countChoose();
            setTimeout(function () {
              _status.imchoosing = false;
              event._result = {
                bool: true,
                links: names.slice(0)
              };
              if (event.dialog) event.dialog.close();
              if (event.control) event.control.close();
              game.resume();
            }, 5000);
          };
          var createDialog = function (player, id) {
            if (_status.connectMode) lib.configOL.choose_timeout = '30';
            if (player == game.me) return;
            var str = get.translation(player) + '正在整理魔法书...<br>';
            ui.create.dialog(str).videoId = id;
          };
          var chooseButton = function (list) {
            var roundmenu = false;
            if (ui.roundmenu && ui.roundmenu.display != 'none') {
              roundmenu = true;
              ui.roundmenu.style.display = 'none';
            }
            var event = _status.event;
            event.settleed = false;
            event.finishedx = [];
            event.map = {};
            var names = list.slice(0);
            event.zhengjing_nodes = [];
            names.push('du');
            names.randomSort();
            var names2 = names.slice(0);
            for (var i = 0; i < 2; i++) {
              names2.randomSort();
              names = names.concat(names2);
            }

            event.zhengjing = names;
            for (var i of list) {
              event.map[i] = 0;
            }
            event.dialog = ui.create.dialog('forcebutton', 'hidden');
            event.dialog.textPrompt = event.dialog.add('<div class="text center">及时点击卡牌，但不要点到毒了！</div>');
            var str = '<div class="text center">';
            for (var i of list) {
              str += get.translation(i) + ': ' + Math.min(2, event.map[i]) + '/2 ';
            }
            str += '</div>';
            event.dialog.textPrompt2 = event.dialog.add(str);
            event.switchToAuto = function () {
              event._result = {
                bool: true,
                links: event.finishedx.slice(0)
              };
              event.dialog.close();
              game.resume();
              _status.imchoosing = false;
              if (roundmenu) ui.roundmenu.style.display = '';
            };
            event.dialog.classList.add('fixed');
            event.dialog.classList.add('scroll1');
            event.dialog.classList.add('scroll2');
            event.dialog.classList.add('fullwidth');
            event.dialog.classList.add('fullheight');
            event.dialog.classList.add('noupdate');
            event.dialog.open();
            event.settle = function (du) {
              if (event.settleed) return;
              event.settleed = true;
              event.dialog.textPrompt2.innerHTML = '';
              if (du) {
                if (lib.config.background_speak) game.playAudio('skill', 'zhengjing_boom');
                event.dialog.textPrompt.innerHTML = '<div class="text center">这谁丢的爆破试剂啊！</div>';
              } else {
                if (lib.config.background_speak) game.playAudio('skill', 'zhengjing_finish');
                event.dialog.textPrompt.innerHTML = '<div class="text center">整理完成啦！</div>';
              }
              while (event.zhengjing_nodes.length) {
                event.zhengjing_nodes.shift().delete();
              }
              setTimeout(function () {
                event.switchToAuto();
              }, 1000);
            };

            var click = function () {
              var name = this.name;
              if (name == 'du') {
                event.zhengjing.length = 0;
                event.settle(true);
              } else {
                if (lib.config.background_speak) game.playAudio('skill', 'zhengjing_click');
                event.map[name]++;
                if (event.map[name] > 1) event.finishedx.add(name);
                if (event.finishedx.length < list.length) {
                  var str = '<div class="text center">';
                  for (var i of list) {
                    str += get.translation(i) + ': ' + Math.min(2, event.map[i]) + '/2 ';
                  }
                  str += '</div>';
                  event.dialog.textPrompt2.innerHTML = str;
                } else {
                  event.zhengjing.length = 0;
                  event.settle();
                }
              }
              event.zhengjing_nodes.remove(this);
              this.style.transition = 'all 0.5s';
              this.style.transform = 'scale(1.2)';
              this.delete();
            };
            var addNode = function () {
              if (event.zhengjing.length) {
                var card = ui.create.card(ui.special, 'noclick', true);
                card.init(['', '', event.zhengjing.shift()]);
                card.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', click);
                event.zhengjing_nodes.push(card);
                card.style.position = 'absolute';
                var rand1 = Math.round(Math.random() * 100);
                var rand2 = Math.round(Math.random() * 100);
                var rand3 = Math.round(Math.random() * 40) - 20;
                card.style.left = 'calc(' + rand1 + '% - ' + rand1 + 'px)';
                card.style.top = 'calc(' + rand2 + '% - ' + rand2 + 'px)';
                card.style.transform = 'scale(0.8) rotate(' + rand3 + 'deg)';
                card.style.opacity = 0;
                event.dialog.appendChild(card);
                ui.refresh(card);
                card.style.opacity = 1;
                card.style.transform = 'scale(1) rotate(' + rand3 + 'deg)';
              }
              if (event.zhengjing_nodes.length > (event.zhengjing.length > 0 ? 2 : 0)) event.zhengjing_nodes.shift().delete();
              if (event.zhengjing.length || event.zhengjing_nodes.length) setTimeout(function () {
                addNode();
              }, event.speed);else
              event.settle();
            };
            game.pause();
            game.countChoose();
            addNode();
          };
          game.broadcastAll(createDialog, player, event.videoId);
          chooseButton(names);
          "step 2";
          game.broadcastAll(function (id, time) {
            if (_status.connectMode) lib.configOL.choose_timeout = time;
            var dialog = get.idDialog(id);
            if (dialog) {
              dialog.close();
            }
          }, event.videoId, event.time);
          var result = event.result || result;
          var num = cards.length - result.links.length;
          if (num == 0) {
            event.win++;
          } else {
            event.speed += 50;
          }
          if (event.win < 3) {
            galgame.sce('maonvpu2');
            event.goto(1);
          } else {
            galgame.sce('maonvpu3');
            game.gl_gain('gl_kaluoluo');
            game.gl_setData('maonvpu_kaluoluo');
          }
          "step 3";
          game.over(true);
        });
        _status.event.next.remove(next);
        event.after.push(next);
      },
      galgame: {
        "maonvpu1": [
        "gl_aikesi:法姆，你在这干什么呢？",
        "gl_famu:呜哇，你吓死我啦！我还以为是公主殿下呢！",
        "gl_aikesi:抱歉，不过法姆你为什么要害怕蕾娜呢？",
        "gl_famu:也不能说害怕吧......对了，我们的好好先生请往那边看~",
        "gl_aikesi:不要再给我起奇怪的外号啦！那边......只是卡罗罗在打扫书房而已，有什么特别的吗？",
        "gl_famu:你仔细看嘛~别人眉头紧锁肯定是遇到问题啦，一般这种时候你不都得去多管闲事吗？",
        "gl_aikesi:......那我稍微过去看看？",
        "none:艾克斯刚进入书房。",
        "gl_aikesi:卡罗罗在干什么呢？",
        "gl_kaluoluo:呀？！",
        "none:似乎是艾克斯突如其来的打招呼惊吓到了卡罗罗，卡罗罗手中正在凝聚的魔法球直接爆炸开来。",
        "gl_aikesi:咳咳咳......卡罗罗，没事吧！",
        "none:烟雾逐渐散去，卡罗罗看了看已经一片狼藉的书房。",
        "gl_kaluoluo:呜......卡罗罗要对你施加再不出去就会被电死的诅咒。",
        "none:一双泪汪汪的眼睛对着艾克斯放狠话。",
        "gl_aikesi:抱...抱歉！都是我不好，无论如何请让我来帮忙收拾吧！"],

        "maonvpu2": [
        "gl_kaluoluo:1，2，3...魔法书的册数不齐......",
        "gl_aikesi:额...说不定少几册大法师也发现不了呢？",
        "gl_kaluoluo:卡罗罗要对你施加再不把书找齐就会被烧死的诅咒。",
        "gl_aikesi:虽然是我的错，但是这样诅咒客人真的没关系吗？",
        "gl_kaluoluo:......",
        "gl_aikesi:抱...抱歉，我只是想缓和一下气氛。"],

        "maonvpu3": [
        "gl_kaluoluo:1，2，3...魔法书的册数不齐......",
        "gl_aikesi:不对！已经重新检查了这么多次了，不应该再有遗漏了！",
        "gl_kaluoluo:呜呜呜......",
        "gl_aikesi:你先别哭，再让我想一下......哦，对了！刚刚整理书时候还碰到了几支爆破试剂！卡罗罗，今天法姆有来过书房吗？",
        "gl_kaluoluo:那个蓝头发的客人想到书房看看，但是卡罗罗没让她进门。",
        "gl_aikesi:虽然怀疑同伴是不应该的......",
        "none:两人离开书房，在后院找到了法姆。",
        "gl_kaluoluo:客...客人，您在干什么呢？",
        "gl_famu:当然是在看趁着爆炸偷摸出来的魔法书呦~",
        "gl_aikesi:居然爽快的承认了？！这是值得骄傲的事情吗？？？",
        "gl_famu:嘿嘿嘿，给小妹妹拿回去好好保管吧~",
        "gl_kaluoluo:太...太好了，这样就齐了。",
        "gl_famu:不过再稍微等一下~",
        "none:法姆手掐法决，大量的魔力往法姆手中汇聚，形成一颗看起来极度危险的魔法球。",
        "gl_famu:你的魔法天赋其实很不错，但是魔法是借助自然元素完成的艺术。总把自己关在书房那种压抑的地方，可是没办法听清自然元素传来的回响声的呦~",
        "none:法姆手中的魔法球朝卡罗罗冲去，正要命中卡罗罗时又变成水花崩裂开来。",
        "gl_aikesi:我之前还以为你老毛病又犯了呢......",
        "gl_famu:我们不是说好要做彼此的翅膀了吗？你这样想真是伤透了我的心，呜呜呜......",
        "gl_aikesi:抱...抱歉，都是我不好！",
        "gl_famu:一句抱歉就完了？一点诚意都没有，呜呜呜......",
        "gl_aikesi:那...那你想要什么只要我有，想做什么只要我能做到我都答应你可以吗？",
        "gl_famu:哈哈哈，就等你这句话啦~你再不说我都已经要挤不出眼泪来啦~",
        "gl_aikesi:......（总感觉相当不妙啊！）",
        "gl_kaluoluo:两...两位，卡...卡罗罗要对你施加......",
        "gl_aikesi:唔...又要被诅咒了？希望这次的死法能稍微舒服一点吧，哈哈哈！",
        "gl_kaluoluo:马上摸摸小猫咪就能变得幸运的祝福......",
        "gl_aikesi:诶，不是诅咒了吗？",
        "gl_famu:木头人先生，你再不摸摸别人的头安慰她，别人就要哭出来了哟~",
        "gl_kaluoluo:卡...卡罗罗才不会哭呢......",
        "none:法姆摸了摸卡罗罗的头。",
        "gl_famu:是是是，卡罗罗最坚强了哟~"]

      },
      pack: {
        character: {},
        skill: {},
        translate: {}
      },
      beyond: [{
        name: "gl_kaluoluo",
        position: 4,
        identity: "zhong"
      }]
    },
    '怀特对你很满意': {
      init: function () {
        var event = galgame.sce('maonvpu1');
        var next = game.createEvent('over', false);
        next.player = game.me;
        next.setContent(function () {
          "step 0";
          game.pause();
          var dialog = ui.create.dialog('forcebutton', 'hidden');
          event.dialog = dialog;
          event.dialog.classList.add('fixed');
          event.dialog.classList.add('scroll1');
          event.dialog.classList.add('scroll2');
          event.dialog.classList.add('fullwidth');
          event.dialog.classList.add('fullheight');
          event.dialog.classList.add('noupdate');
          event.dialog.style.overflow = 'hidden';
          event.dialog.open();
          var height = event.dialog.offsetHeight;
          var width = event.dialog.offsetWidth;
          var length = 500;
          var content = ui.create.div();
          event.dialog.add(content);
          content.style.width = length + 'px';
          content.style.height = length + 'px';
          /**每个item的宽度*/
          var count = 10;
          var itemWidth = length / count;
          /**item数量*/
          var itemSize = 99;
          /**其实空白位置*/
          var emptyPositionX = count;
          var emptyPositionY = count;
          var items = [];

          var initItems = function () {
            var contentStr = "";
            items = [];
            for (var i = 0; i < itemSize; ++i) {
              var positionX = i % count + 1;
              var positionY = Math.floor(i / count) + 1;
              var imgOffsetX = (positionX - 1) * -itemWidth;
              var imgOffsetY = (positionY - 1) * -itemWidth;
              var item = ui.create.div(content);
              item.currentPositionX = positionX;
              item.orignPositionX = positionX;
              item.currentPositionY = positionY;
              item.orignPositionY = positionY;
              item.imgOffsetX = imgOffsetX;
              item.imgOffsetY = imgOffsetY;
              item.transformX = 0;
              item.transformY = 0;
              items.push(item);
              item.style.left = -imgOffsetX + 'px';
              item.style.top = -imgOffsetY + 'px';
              item.setBackgroundImage('extension/格林笔记/map/bulu/xiangqv.png');
              item.dataset.index = i;
              item.style.width = itemWidth + 'px';
              item.style.height = itemWidth + 'px';
              item.style.backgroundPosition = item.imgOffsetX + 'px ' + item.imgOffsetY + 'px';
              item.onclick = function () {
                onItemClick(this);
              };
            }
          };
          initItems();
          var onItemClick = function (e) {
            var moved = false;
            if (parseInt(items[e.dataset.index].currentPositionX) + 1 === emptyPositionX && parseInt(items[e.dataset.index].currentPositionY) === emptyPositionY) {
              items[e.dataset.index].currentPositionX = emptyPositionX;
              emptyPositionX -= 1;
              items[e.dataset.index].transformX = itemWidth * (items[e.dataset.index].currentPositionX - items[e.dataset.index].orignPositionX);
              moved = true;
            } else if (parseInt(items[e.dataset.index].currentPositionX) - 1 === emptyPositionX && parseInt(items[e.dataset.index].currentPositionY) === emptyPositionY) {
              items[e.dataset.index].currentPositionX = emptyPositionX;
              emptyPositionX += 1;
              items[e.dataset.index].transformX = itemWidth * (items[e.dataset.index].currentPositionX - items[e.dataset.index].orignPositionX);
              moved = true;
            } else if (parseInt(items[e.dataset.index].currentPositionY + 1) === emptyPositionY && parseInt(items[e.dataset.index].currentPositionX) === emptyPositionX) {
              items[e.dataset.index].currentPositionY = emptyPositionY;
              emptyPositionY -= 1;
              items[e.dataset.index].transformY = itemWidth * (items[e.dataset.index].currentPositionY - items[e.dataset.index].orignPositionY);
              moved = true;
            } else if (parseInt(items[e.dataset.index].currentPositionY) - 1 === emptyPositionY && parseInt(items[e.dataset.index].currentPositionX) === emptyPositionX) {
              items[e.dataset.index].currentPositionY = emptyPositionY;
              emptyPositionY += 1;
              items[e.dataset.index].transformY = itemWidth * (items[e.dataset.index].currentPositionY - items[e.dataset.index].orignPositionY);
              moved = true;
            }
            e.style.transform = "translate(" + items[e.dataset.index].transformX + "px," + items[e.dataset.index].transformY + "px)";
            if (moved) {
              /**先执行动画在判断是否拼成功*/
              setTimeout(function () {
                var suc = true;
                for (var i = 0; i < items.length; ++i) {
                  if (items[i].orignPositionX !== items[i].currentPositionX || items[i].orignPositionY !==
                  items[i].currentPositionY) {
                    suc = false;
                    break;
                  }
                }
                if (suc) {
                  game.resume();
                  dialog.close();
                }
              }, 300);
            }
          };
          var randomNext = [1, -1];

          /**打乱图片顺序*/
          var randomImg = function () {
            if (items.length === 0) {
              return;
            }
            var xOrY = 1;

            var elements = items;
            for (var i = 0; i < 300; ++i) {
              xOrY = Math.floor(Math.random() * 1000 % 2);
              var step = Math.floor(Math.random() * 1000 % 2);
              if (xOrY === 1) {
                if (emptyPositionX + randomNext[step] <= 0 || emptyPositionX + randomNext[step] >= count) {
                  continue;
                }
                onItemClick(elements[emptyPositionX + randomNext[step] + (emptyPositionY - 1) * count - 1]);
              } else {
                if (emptyPositionY + randomNext[step] <= 0 || emptyPositionY + randomNext[step] >= count) {
                  continue;
                }
                onItemClick(elements[emptyPositionX + (emptyPositionY - 1 + randomNext[step]) * count - 1]);
              }
            }
          };
          randomImg();
          'step 1';
          galgame.sce('maonvpu2');
          game.gl_gain('gl_huaite');
          'step 2';
          game.over(true);
        });
        _status.event.next.remove(next);
        event.after.push(next);
      },
      galgame: {
        "maonvpu1": [
        "gl_miya:怀特姐姐你在干什么？？？",
        "gl_huaite:我在偷懒喵~",
        "none:怀特躺在艾达大腿上扭了扭腰换了个更舒服的姿势。",
        "gl_bulu:不要把偷懒说的理所当然！更不要打扰到客人！！最重要是的赶紧回来工作！！！",
        "none:布鲁直接把怀特从艾达身上拖走。",
        "gl_aida:<span class='small'>毛...毛茸茸，我的毛茸茸没有了......</span>",
        "gl_aikesi:艾达你原来在......你的脸色看起来很差啊？！身体不舒服吗？！",
        "gl_aida:<span class='small'>没...没事，找我有什么事吗？</span>",
        "gl_aikesi:蕾娜说想去看看这个想区的诗晶石。但是一个人担心迷路，所以想找两个人一起去。你要是身体不适的话，就先好好休息吧！法姆似乎还挺闲的，等等我叫上她一起去就行了。",
        "gl_aida:<span class='small'>那就祝你们.......</span>",
        "gl_huaite:人家才不要干活喵~",
        "none:怀特从房间里飞扑了出来。",
        "gl_bulu:可恶啊！！明明这个家里就属你最年长能不能发挥点表率作用啊！！！",
        "gl_huaite:知道我是前辈，那不应该要来讨前辈喜欢，自己主动把前辈的活都干了喵！",
        "gl_bulu:既然软的不行那就只能来硬的了！卡罗罗，快用牵引魔法把她拽回来！",
        "gl_kaluoluo:交...交给卡罗罗吧！",
        "none:一股强大的吸力锁定了怀特。",
        "gl_huaite:怎么可以用魔法作弊喵~",
        "none:怀特要被吸走的一瞬间死死拽住了艾克斯的衣角。",
        "gl_aikesi:哇！！！衣...衣服要被扯坏啦！！！",
        "gl_kaluoluo:不...不要...给客人...添...添麻烦，快...快松手......",
        "gl_huaite:不松喵！要松也是你们先松喵！",
        "gl_leina:艾克斯你在......你看起来玩的很开心啊？那我还是自己去找诗晶石，就不用麻烦你了......",
        "gl_kaluoluo:不...不行了，卡...卡罗罗的魔力用完了......",
        "none:卡罗罗周围的魔法元素散去，艾克斯和怀特直接因为惯性飞了出去。",
        "gl_aikesi:这...这哪里像是在玩啊？！而且我哪里看起来开心啦！！",
        "gl_huaite:客人们要出去喵？那就让怀特来带路怎么样喵？",
        "gl_leina:我当然是很乐意，不过可以吗？",
        "gl_huaite:太可以了，我又有正当理由可以偷懒了喵~",
        "gl_bulu:可恶啊，又让她找到正当理由偷懒了！",
        "gl_kaluoluo:呜哇...不要拿卡罗罗的头发泄...疼啊！卡罗罗要诅咒...疼疼疼，米...米娅快来救卡罗罗，卡...卡罗罗的脑袋要...要被布鲁拧下来啦！！！",
        "gl_leina:那艾克斯你现在还跟我去找诗晶石吗？",
        "gl_aikesi:我当然要陪你去啦！不过艾达她......",
        "gl_aida:<span class='small'>保护您的安全是我的荣幸，请允许我同行吧。</span>",
        "gl_aikesi:不要逞强啊！你刚刚明明还很难受啊！",
        "gl_aida:<span class='small'>骑士是不会勉强自己的。</span>",
        "none:艾达拍了拍自己胸口表示没问题。",
        "gl_leina:那就一起出发吧？"],

        "maonvpu2": [
        "gl_huaite:这里就是主人之前说过有特殊磁场的地方喵~",
        "gl_leina:的确就是这里没错了。艾克斯！艾达！",
        "none:艾克斯与艾达取出引导之证将蕾娜护在中间。",
        "gl_leina:矗立于永恒之上的说书人啊，请倾听我的祈祷......为这个世界降下福泽。",
        "none:一枚光彩夺目的结晶石从空中缓缓浮现。",
        "gl_huaite:喵！那是什么东西好刺眼喵！",
        "none:诗晶石感受到蕾娜的气息似乎非常开心，围绕着蕾娜的身形翩翩起舞。",
        "none:第二天，城堡门口。",
        "gl_leina:这段时间打扰各位了，我们就此告辞了。",
        "gl_miya:有空要再来找米娅玩哦~",
        "gl_aikesi:嗯，一定！",
        "gl_ailuoweisi:我可不是那么闲的人。",
        "gl_bulu:那...那个，这个给你离开以后才准看......",
        "gl_aikesi:诶，给我的礼物吗？那就谢谢啦~",
        "gl_sade:嘁，神神秘秘指不定是什么地摊货呢！",
        "gl_aikesi:萨德，不能这么说话呦~",
        "gl_sade:哼！",
        "gl_kaluoluo:下...下次来的时候，能再教卡罗罗魔法吗？",
        "gl_famu:乐意奉陪，不过下次就要收学费......好疼！！！",
        "gl_leina:不准！！！",
        "gl_huaite:不过昨天我为什么突然就昏迷了，而且现在感觉浑身酸痛喵......",
        "gl_leina:怀特小姐昏迷大概是因为诗晶的能量波动吧，不过那个对身体应该只有益处没有坏处才是......咦？艾达你怎么在发抖，果然还是太勉强了吗？",
        "none:蕾娜有些自责的握起艾达的手。",
        "gl_aida:<span class='small'>请...请不要自责......</span>"]

      },
      pack: {
        character: {},
        skill: {},
        translate: {}
      },
      beyond: [{
        name: 'gl_leina',
        position: 1,
        identity: 'nei'
      }, {
        name: 'gl_huaite',
        position: 4,
        identity: 'zhong'
      }, {
        name: 'gl_aida',
        position: 7,
        identity: 'nei'
      }]
    }
  };
  game.gl_createDailog('请选择要进入的分支', list, function (bool) {
    if (bool != 'cancel2') {
      if (!date[bool]) {
        game.gl_createDailog('还在紧张的制作中！');
        return;
      }
      window.xiangqv = date[bool];
      game.resume();
    }
  });
};