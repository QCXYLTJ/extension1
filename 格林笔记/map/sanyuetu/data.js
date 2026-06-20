window.gl_init = function (lib, game, ui, get, ai, _status) {
  var list = lib.config.gelin.lianjie || [];
  if (!list.includes('gl_caijunmao') || !list.includes('gl_shizhongtu') || !list.includes('gl_shuishu')) {
    game.gl_createDailog('一股巨大的排斥力袭来，这片想区在拒绝你的访问？！');
    return;
  }
  window.xiangqv = {
    background: 'extension/格林笔记/map/sanyuetu/qipan.jpg',
    init: function () {
      galgame.sce('ailisi1');
      game.me.removeSkill('gl_lianjie');
    },
    cmd: false,
    galgame: {
      ailisi1: ['gl_ailisi:快放开我！我不会替你做任何事情的！！！', 'gl_luoji:这可由不得你啊，小丫头~', 'gl_aikesi:洛基！赶快放开爱丽丝！', 'gl_luoji:居然拖着那样一副伤残的身体就追上来了。啧啧啧，我该说你......真是不懂得爱惜自己吗？加巴沃克，他就交给你了。', 'gl_aikesi:加巴沃克？', 'none:伴随狂风席卷，一个巨大的身影从天空中缓缓落下。', 'hundun_jiabawoke:吾乃镜中王国被众人传唱的传说之龙，死在我的利爪之下，将会是你的荣幸！'],
      ailisi2: ['gl_aikesi:咳咳咳......', 'hundun_jiabawoke:碾死如此弱小的蝼蚁，真是无趣啊。', 'none:加巴沃克口吐龙息，所过之处灰飞烟灭', 'background:格林笔记/map/sanyuetu/fangjian.jpg', 'gl_aikesi:我...我在哪？', 'gl_daina:不要乱动！！！你差点就死了你知道吗！！！', 'gl_aikesi:戴娜？仙境王国的居民不是不可以穿过超时空镜的吗？', 'gl_daina:我也没说过自己是仙境王国的居民啊？', 'gl_sanyuetu:呦~伤的这么重还能调情啊？小弟弟你身体还挺硬朗嘛？', 'gl_aikesi:三月兔？！你也不是仙境王国的居民？！', 'gl_sanyuetu:仙境王国？那是什么地方？那的人喜欢喝茶吗？', 'gl_fengmaozi:很抱歉打扰各位~两位远道而来的客人，我叫疯帽子，镜之王国首席执行官，我们的最高掌权者————镜之女王想要面见二位。'],
      ailisi3: ['gl_jingzhinvwang:不仅仅是传说邪龙加巴沃克降临到了镜之王国，就连预言中的勇者爱丽丝阁下也被抓去了吗？', 'gl_sanyuetu:女王陛下，我已经遵从你的指示让红皇后和白皇后调集兵力准备迎战了。', 'gl_jingzhinvwang:那就请两为贵宾在此休息，大军集结完成即刻出发讨伐邪龙加巴沃克！', 'gl_aikesi:等等！爱丽丝是我的朋友，我们也必须参战！', 'gl_sanyuetu:哈？你被这只小猫咪背过来的时候，都只剩半条命了，参战也只会拖后腿而已。', 'gl_aikesi:我的身体已经没问题了，不信的话我们可以切磋一下！', 'gl_sanyuetu:切磋？那我可是不会手下留情的啊！', 'gl_fengmaozi:既然如此，不如就由我和三月兔联手，你和小猫咪联手来好好“切磋”一下吧！', 'gl_jingzhinvwang:你们两个这样对待客人未免太失礼了！', 'gl_aikesi:没关系！我们接受了！要上了戴娜！', 'gl_daina:交给我吧！'],
      ailisi4: ['gl_sanyuetu:哈哈哈，小弟弟你叫什么名字？', 'gl_aikesi:我叫艾克斯！', 'gl_fengmaozi:艾克斯，很好！我觉得我们相当合得来。', 'gl_jingzhinvwang:既然这样，两位也一起随军出征吧！', 'background:格林笔记/map/sanyuetu/qipan.jpg', 'gl_luoji:好像有一大支军队冲着你来了哟！', 'hundun_jiabawoke:哼！不过是一群蝼蚁罢了！比起担心它们，你还不如赶紧去搞定爱丽丝。', 'gl_luoji:呵呵呵，别急嘛。那个小丫头的反抗还很激烈，想要把原典抽取出来还要费一番功夫。'],
      ailisi5: ['gl_fengmaozi:邪龙加巴沃克！现在夹着尾巴滚回你的龙穴里去说不定我们还能放过你呢！', 'hundun_jiabawoke:哈哈哈！真是好笑，你们以为人多点就能打败我？就让你们明白什么是无法逾越的绝对力量！', 'gl_sanyuetu:嘿嘿嘿，就是得这样才有意思！全军听令！进攻！'],
      ailisi6: ['gl_luoji:哎呀，真是惨烈的景象啊！', 'none:洛基抓着昏迷的爱丽丝从迷雾中走出。', 'gl_daina:你这讨厌鬼！快把爱丽丝还给我！', 'gl_fengmaozi:那个女孩子就是爱丽丝吗？', 'gl_sanyuetu:救回爱丽丝小姐也是女王大人给我们的任务呢。', 'gl_luoji:那可真是头疼啊，我还没把这小丫头的原典抽取出来呢。', 'gl_aikesi:抽取原典？！阿拉丁的原典果然在你那吗？！', 'gl_daina:不要和这个讨厌鬼废话了！我们有四个人，一起上直接把他打趴下，什么事就都解决了！', 'gl_luoji:呵呵呵，是吗？那我们就来试试吧。不过话先说在前面我可也是空白之书的持有者呢。', 'none:洛基举起引导之证。', 'gl_aikesi:什么？！那是！！！', 'gl_luoji:阿拉丁。', 'none:引导之证被混沌的气息所包裹。'],
      ailisi7: ['gl_luoji:拥有这种力量，打败你们真是易如反掌！！！', 'none:一本古朴的羊皮书从爱丽丝体内逐渐分离而出。', 'gl_aikesi:真的已经没办法了吗......', 'gl_luoji:哈哈哈，看来最后的任务也已经圆满完成了！', 'none:羊皮书突然发出强烈的光芒冲向艾克斯。', 'gl_luoji:怎么会？！', 'none:熟悉的声音在艾克斯心中响起。', 'gl_ailisi:艾克斯，别放弃！！！举起你的命运之书呼唤我的名字！！！', 'none:艾克斯挣扎的站起。', 'gl_luoji:发...发生了什么？！', 'gl_aikesi:爱...爱丽丝！！！', 'gl_luoji:开...开什么玩笑啊！！！我从来都没听说过这种事情啊！！！'],
      ailisi8: ['gl_aikesi:洛基你已经彻底输了！快把阿拉丁的原典给我！', 'gl_luoji:咳咳咳，我或许打不赢你...但是你可别想能抓住我！', 'none:一团不知从何的迷雾而来包裹住了洛基消失在原地。', 'gl_aikesi:可恶！又只能眼睁睁的看着他逃走了吗？！', 'gl_ludeweixi:走那么急干什么？坐下来和我说说你的故事怎么样？', 'none:一柄剑不知从何处飞出，直接将快要消失的洛基从迷雾中打出。', 'gl_luoji:呃啊！！！怎...怎么可能！！！', 'gl_ludeweixi:不属于你的东西，可不能乱拿。', 'none:一本古朴的羊皮书和引导之证从洛基身上飞出，落到了艾克斯手中。', 'gl_aikesi:这个声音......你是给我这枚引导之证的人？！', 'gl_ludeweixi:这倒没什么好否认，我叫路德维希·格林，不过其他的事还是待会再谈吧，现在我得好好问问这家伙。', 'gl_ludeweixi:告诉我，是谁给你的混沌之力。', 'gl_luoji:呵呵呵，你直接杀了我就好了，反正我什么都不会告诉你的。', 'gl_ludeweixi:那好吧，看来我也只能杀了你自己去找答案了！', 'none:路德维希举起手中的剑。', 'sp:住手！！！:卡莉:格林笔记/gl_maihuochai.jpg', 'none:一团火焰逼退路德维希。', 'gl_luoji:卡莉大人......', 'sp:快走！！！:卡莉:格林笔记/gl_maihuochai.jpg', 'none:伴随一阵火光冲天，卡莉和洛基消失在两人的视野中。', 'gl_ludeweixi:......虽然很想追上去，但是我得先恢复这个想区的秩序才行了。', 'none:一股不可思议的力量的充斥整个想区。', 'gl_aikesi:你...你是传说中的说书人吧？', 'gl_ludeweixi:说书人？你要这么称呼我也不是不行，好了把阿拉丁的原典给我吧。', 'none:艾克斯递上阿拉丁的原典，原典在路德维希手中发出奇妙的光芒。', 'gl_alading:咦？我这是在哪？我记得我快死了来着...这不是艾克斯吗？看起来你气色不太好啊！', 'none:引导之证涌动着热诚的气息。', 'gl_ludeweixi:好了，阿拉丁跟我走吧，我带你去你该去的地方。', 'gl_aikesi:稍...稍微等一下！', 'gl_ludeweixi:怎么了？', 'gl_aikesi:您...您能告诉我，我的命运之书为什么是空白的呢？我真的是被说书人抛弃的人吗？', 'gl_ludeweixi:......', 'background:格林笔记/map/sanyuetu/fangjian.jpg', 'gl_ailisi:唔...头疼......', 'gl_aikesi:这里疼吗？我帮你揉揉......还疼吗？', 'gl_ailisi:不...不疼了......', 'none:爱丽丝侧过脸，让人无法看到她此刻的表情。', 'gl_aikesi:要是还有哪里不舒服的话，不用客气直接告诉我就好了。', 'gl_ailisi:对...对了，艾克斯我做了一个梦呢！', 'gl_aikesi:梦？是什么样的梦？', 'gl_ailisi:梦见我和......', 'gl_daina:主人，你终于醒啦！！！', 'none:戴娜破门而入飞扑到爱丽丝的身上。', 'gl_ailisi:呜哇！什么主人啊！你不要乱叫啊！', 'gl_daina:没有乱叫呢！', 'none:戴娜扭了扭腰竟然缓缓变成一只白色的小猫。', 'gl_ailisi:哇！戴娜，你怎么都没告诉我你可以变成人的？', 'none:戴娜爬到艾克斯脚边蹭了蹭艾克斯的裤脚。', 'gl_aikesi:哇哦，戴娜你好可爱啊！可以让我摸摸你吗？', 'none:引导之证涌动着神奇的气息。', 'gl_fengmaozi:哦！NO！三月兔，我们真是可怜的打工人啊！', 'gl_sanyuetu:哦！NO！疯帽酱，我们真是悲哀的劳碌命啊！', 'none:跟在戴娜身后的三月兔和疯帽子用着一股奇怪的腔调抱怨了起来。', 'gl_fengmaozi:所有人都幸福美满。', 'gl_sanyuetu:只有我们像是路边的狗尾巴草。', 'gl_fengmaozi:没人在意！', 'gl_sanyuetu:没人来爱！', 'gl_aikesi:谢谢你们疯帽子、三月兔。', 'none:艾克斯朝疯帽子和三月兔深深的鞠了一躬。', 'gl_fengmaozi:突然这么正式，我还有点不习惯啊。', 'gl_sanyuetu:不然还是继续无视我们吧，突然就有点尴尬了。', 'none:艾克斯上前握住三月兔和疯帽子的手。', 'gl_aikesi:我们来开茶会吧！疯狂茶会！', 'gl_fengmaozi:疯狂茶会？这可真是个天才的主意啊~', 'gl_sanyuetu:我都迫不及待了呢~赶紧开始吧！', 'none:引导之证交织着疯狂的气息。']
    },
    pack: {
      character: {
        gl_ailisi: ['female', 'shu', 4, ['gl_huanxiang', 'gl_qiji', 'gl_shuyi'], ['ext:格林笔记/character/gl_ailisi.jpg']],
        gl_daina: ['female', 'shu', 4, ['jiushi', 'xinshensu'], ['ext:格林笔记/character/gl_daina.jpg']],
        gl_sanyuetu: ['female', 'qun', 4, ['drlt_zhenggu', 'mingjian'], ['ext:格林笔记/character/gl_sanyuetu.jpg']],
        gl_fengmaozi: ['male', 'qun', 4, ['haoshi', 'xinkuanggu'], ['ext:格林笔记/character/gl_fengmaozi.jpg']],
        gl_guowangqishi: ['male', 'qun', 3, ['polu', 'qingxi'], ['ext:格林笔记/map/sanyuetu/guowangqishi.jpg']],
        gl_weibingqishi: ['male', 'qun', 4, ['mashu', 'fengze'], ['ext:格林笔记/map/sanyuetu/weibingqishi.jpg']],
        gl_wanghouqishi: ['female', 'qun', 3, ['xinfu_lingren', 'jieyuan'], ['ext:格林笔记/map/sanyuetu/wanghouqishi.jpg']],
        hundun_jiabawoke: ['none', 'jin', 99, ['gl_hundun', 'hundun_nilin', 'hundun_zhenyi', 'hundun_longxi'], ['ext:格林笔记/map/sanyuetu/jiabawoke.jpg']],
        hundun_alading: ['male', 'jin', 4, ['hundun_sangzhi', 'hundun_shinue', 'hundun_dengji'], ['ext:格林笔记/map/sanyuetu/alading.jpg']],
        gl_luoji: ['male', 'jin', 4, ['gl_hundun', 'gl_lianjie', 'reyingzi'], ['ext:格林笔记/character/gl_luoji.jpg']]
      },
      skill: {
        hundun_dengji: {
          trigger: {
            player: ['loseAfter', 'loseHpAfter', 'damageAfter']
          },
          forced: true,
          content: function () {
            var num1 = 0;
            var num2 = 0;
            for (var i = 0; i < game.players.length; i++) {
              if (game.players[i].hp > num1) num1 = game.players[i].hp;
              if (game.players[i].countCards('h') > num2) num2 = game.players[i].countCards('h');
            }
            if (player.hp < num1) {
              player.recover(num1 - player.hp);
            }
            if (player.countCards('h') < num2) {
              player.draw(num2 - player.countCards('h'));
            }
          }
        },
        hundun_shinue: {
          enable: 'phaseUse',
          usable: 1,
          filter: function (event, player) {
            return player.countCards('h') > 0;
          },
          viewAs: {
            name: 'shuiyanqijunx'
          },
          filterCard: true,
          selectCard: -1,
          selectTarget: -1,
          filterTarget: function (card, player, target) {
            return player != target;
          },
          prompt: '将所有手牌当【水淹七军】使用',
          check: function (card) {
            return 15 - get.value(card);
          },
          group: 'hundun_shinue_damage',
          subSkill: {
            damage: {
              trigger: {
                source: 'damageEnd'
              },
              forced: true,
              filter: function (event) {
                return event.parent.skill == 'hundun_shinue';
              },
              popup: false,
              content: function () {
                player.chooseDrawRecover(2);
              },
              sub: true
            }
          }
        },
        hundun_sangzhi: {
          trigger: {
            global: ['damageBegin4', 'phaseDrawBegin2', 'changeHujiaBegin']
          },
          forced: true,
          content: function () {
            if (trigger.name == 'damage') {
              if (trigger.source) trigger.num = 1;
            } else if (trigger.name == 'phaseDraw') {
              trigger.num -= 2;
            } else {
              trigger.cancel();
            }
          }
        },
        hundun_zhenyi: {
          trigger: {
            player: 'changeHp'
          },
          init: function (player) {
            player.storage.hundun_zhenyi = 0;
          },
          mark: true,
          intro: {
            content: '已累计&点体力削减'
          },
          filter: function (event, player) {
            return event.num < 0;
          },
          forced: true,
          content: function () {
            'step 0';
            player.storage.hundun_zhenyi += Math.abs(trigger.num);
            if (player.storage.hundun_zhenyi >= 10) {
              player.storage.hundun_zhenyi -= 10;
              event.num = 3;
              player.draw(10);
            } else {
              event.finish();
            }
            'step 1';
            if (event.num > 0) {
              event.num--;
              player.chooseUseTarget('wanjian', true);
              event.redo();
            }
          }
        },
        hundun_nilin: {
          trigger: {
            player: 'damageEnd'
          },
          filter: function (event, player) {
            return event.source && event.source != player;
          },
          forced: true,
          logTarget: 'source',
          content: function () {
            'step 0';
            trigger.source.chooseToDiscard(2).set('ai', function (card) {
              if (card.name == 'tao') return -10;
              if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
              return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
            });
            'step 1';
            if (result.bool == false) {
              trigger.source.damage();
            }
            'step 2';
            if (trigger.num > 1) {
              trigger.source.turnOver();
            }
          }
        },
        hundun_longxi: {
          enable: 'phaseUse',
          filter: function (event, player) {
            return player.countCards('h') > 0;
          },
          filterCard: true,
          viewAs: {
            name: 'yuansuhuimie'
          },
          selectTarget: -1,
          filterTarget: function (card, player, target) {
            return player != target;
          },
          prompt: '将一张手牌当【元素毁灭】使用',
          check: function (card) {
            return 11 - get.value(card);
          },
          ai: {
            order: 13,
            result: {
              player: 1
            },
            threaten: 1.5
          }
        },
        _kuangbao: {
          trigger: {
            player: 'dying'
          },
          filter: function (event, player) {
            if (game.xiangqv.includes('win1')) return false;
            return player == game.boss;
          },
          forceDie: true,
          forced: true,
          content: function () {
            trigger.player.recover(player.maxHp - player.hp);
            player.draw(20);
          }
        },
        _chongsheng: {
          trigger: {
            player: 'dieAfter'
          },
          filter: function (event, player) {
            return player.identity == 'zhong';
          },
          forceDie: true,
          forced: true,
          content: function () {
            player.revive(player.maxHp);
            player.directgain(get.cards(4));
          }
        },
        _win1: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            if (game.xiangqv.includes('win1')) return false;
            return player == game.me && game.roundNumber > 3;
          },
          lastDo: true,
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            trigger.cancel();
            galgame.sce('ailisi2');
            'step 1';
            game.animate.window(1);
            'step 2';
            player.hp = player.maxHp;
            player.update();
            ui.background.setBackgroundImage('extension/格林笔记/map/sanyuetu/gongdian.jpg');
            var data = [
            {
              name: 'gl_daina',
              position: 1,
              init: function (player) {
                player.noRemove = true;
              },
              identity: 'nei'
            },
            {
              name: 'gl_sanyuetu',
              position: 4,
              init: function (player) {
                player.noRemove = true;
              },
              identity: 'fan'
            },
            {
              name: 'gl_fengmaozi',
              position: 7,
              init: function (player) {
                player.noRemove = true;
              },
              identity: 'fan'
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win1');
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('ailisi3');
          }
        },
        _win2: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win1')) return false;
            if (game.xiangqv.includes('win2')) return false;
            if (
            game.hasPlayer(function (current) {
              return current.identity == 'fan';
            }))
            {
              return false;
            }
            return player == game.me;
          },
          lastDo: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('ailisi4');
            'step 1';
            game.animate.window(1);
            'step 2';
            ui.background.setBackgroundImage('extension/格林笔记/map/sanyuetu/qipan.jpg');
            while (game.dead.length) {
              var fellow = game.dead[0];
              fellow.revive(fellow.maxHp);
              fellow.identity = 'nei';
              fellow.setIdentity('nei');
              if (fellow.name == 'gl_sanyuetu') {
                fellow.dataset.position = 2;
              }
              if (fellow.name == 'gl_fengmaozi') {
                fellow.dataset.position = 3;
              }
            }
            var data = [
            {
              name: 'hundun_jiabawoke',
              position: 4,
              identity: 'zhu'
            },
            {
              name: 'gl_wanghouqishi',
              position: 5,
              identity: 'zhong'
            },
            {
              name: 'gl_weibingqishi',
              position: 6,
              identity: 'zhong'
            },
            {
              name: 'gl_guowangqishi',
              position: 7,
              identity: 'zhong'
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win2');
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('ailisi5');
          }
        },
        _win3: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win2')) return false;
            if (game.xiangqv.includes('win3')) return false;
            return player == game.me && event.player == game.boss;
          },
          lastDo: true,
          forced: true,
          content: function () {
            'step 0';
            var data = [
            {
              name: 'gl_luoji',
              position: 4,
              identity: 'zhu'
            }];

            game.nextLevel(data);
            var players = game.players.concat(game.dead);
            for (var i = 0; i < players.length; i++) {
              switch (players[i].name) {
                case 'gl_daina':
                  players[i].dataset.position = 1;
                  break;
                case 'gl_sanyuetu':
                  players[i].dataset.position = 2;
                  break;
                case 'gl_luoji':
                  players[i].dataset.position = 4;
                  break;
                case 'gl_fengmaozi':
                  players[i].dataset.position = 7;
                  break;
              }
            }
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win3');
            'step 1';
            galgame.sce('ailisi6');
            'step 2';
            var info = lib.skill.gl_lianjie.chooseButton;
            lib.skill.gl_lianjie_backup = info.backup(['hundun_alading'], game.boss);
            lib.skill.gl_lianjie_backup.sourceSkill = 'gl_lianjie';
            var next = game.createEvent('gl_lianjie');
            next.player = game.boss;
            next.setContent(lib.skill.gl_lianjie.contentx);
            game.boss.logSkill('gl_lianjie');
          }
        },
        _win4: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win3')) return false;
            if (game.xiangqv.includes('win4')) return false;
            if (
            game.hasPlayer(function (current) {
              return current.identity == 'nei' && current.name != 'gl_aikesi';
            }))
            {
              return false;
            }
            return player.name == 'gl_aikesi';
          },
          lastDo: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('ailisi7');
            'step 1';
            game.xiangqv.push('win4');
            var info = lib.skill.gl_lianjie.chooseButton;
            lib.skill.gl_lianjie_backup = info.backup(['gl_ailisi'], player);
            lib.skill.gl_lianjie_backup.sourceSkill = 'gl_lianjie';
            var next = game.createEvent('gl_lianjie');
            next.player = player;
            next.setContent(lib.skill.gl_lianjie.contentx);
            player.logSkill('gl_lianjie');
            player.draw(4);
          }
        },
        _win5: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player == game.boss && player.name == 'gl_luoji';
          },
          lastDo: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('ailisi8');
            'step 1';
            game.gl_gain('gl_daina');
            game.gl_gain('gl_sanyuetu');
            game.gl_gain('gl_fengmaozi');
            game.gl_gain('gl_alading');
            game.gl_setData('ludeweixi');
            'step 2';
            game.over(true);
          }
        }
      },
      translate: {
        hundun_jiabawoke: '加巴沃克',
        hundun_alading: '黑混沌阿拉丁',
        gl_guowangqishi: '国王骑士',
        gl_weibingqishi: '卫兵骑士',
        gl_wanghouqishi: '王后骑士',
        hundun_dengji: '登极',
        hundun_dengji_info: '锁定技，当你失去体力、受到伤害或失去牌后，你将体力值与手牌数调整至全场最多。',
        hundun_shinue: '施虐',
        hundun_shinue_info: '出牌阶段限一次，你可以将所有手牌当【水淹七军】对除你之外所有角色使用；当有角色因此受到伤害后，你可以回复1点体力或摸2张牌。',
        hundun_sangzhi: '丧志',
        hundun_sangzhi_info: '锁定技，全场所有角色摸牌阶段少摸2张牌、造成的伤害至多为1且不能获得护甲值。',
        hundun_zhenyi: '振翼',
        hundun_zhenyi_info: '锁定技，你每累计减少10点体力值，你便视为使用3张【万箭齐发】。',
        hundun_nilin: '逆鳞',
        hundun_nilin_info: '锁定技，当你受到来自其他角色的伤害后，对你造成伤害的角色需弃置2张手牌或受到1点伤害，若你此次受到的伤害大于1，再额外令伤害来源翻面。',
        hundun_longxi: '龙息',
        hundun_longxi_info: '出牌阶段，你可以将1张手牌当【元素毁灭】对除你以外的角色使用。'
      }
    },
    beyond: [
    {
      name: 'hundun_jiabawoke',
      position: 4,
      identity: 'zhu'
    }]

  };
};