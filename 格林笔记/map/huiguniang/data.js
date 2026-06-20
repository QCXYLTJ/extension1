window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    initBefore: function () {
      if (!get.gl_data('xiangqv_mingyunqishi')) {
        var link = lib.gl_broadcast['命运启示'];
        game.gl_broadcast(link.data, link.src, link.side, function () {
          game.gl_setData('xiangqv_mingyunqishi');
        });
      }
    },
    init: function () {
      galgame.sce('huiguniang1');
      game.me.removeSkill('gl_lianjie');
    },
    galgame: {
      huiguniang1: ['hundun_villain:啊啊啊啊啊！！！', 'gl_aikesi:怎...怎么回事？！为什么村子里会有这么多怪物？！', 'gl_aikesi:等等...那些怪物行进的方向是王宫？！灰姑娘今天可是要去参加王子的舞会的啊！！！'],
      huiguniang2: ['hundun_villain:啊啊啊啊啊！！！', 'gl_aikesi:不...我不能放弃...我明明和灰姑娘约好了...要做她的骑士，直到...直到她嫁给王子的那一天......', 'gl_ludeweixi:唉，真是看不下去了', 'gl_aikesi:是...是谁？', 'none:一个特别的声音在艾克斯的脑海中响起', 'gl_ludeweixi:如果你想遵守那个约定的话，就将这个引导之证放入你的命运之书里去吧', 'none:艾克斯的手中突然出现一枚造型奇特的书签', 'gl_aikesi:这...这是？', 'none:艾克斯将书签放入命运之书中，无数回响从命运之书中传来，仿佛在向艾克斯述说着什么', 'gl_ludeweixi:呼唤它们的名字！直到有人回应你为止！'],
      huiguniang3: ['none:艾克斯用尽全力击退身前的混沌之仆', 'gl_aikesi:罗宾汉！！！', 'none:引导之证气息平稳的流转'],
      huiguniang4: ['none:艾克斯艰难的躲开了混沌之仆的攻击。', 'gl_aikesi:贝儿！', 'none:引导之证气息平稳的流转'],
      huiguniang5: ['none:艾克斯的衣衫被鲜血染红', 'gl_aikesi:时...时钟兔！！！', 'none:引导之证气息平稳的流转'],
      huiguniang6: ['none:艾克斯的意识逐渐模糊', 'gl_ludeweixi:看来，你没有资格啊，倒是我看走眼了', 'gl_aikesi:爱...爱丽丝...', 'none:引导之证涌动着奇迹的气息', 'none:一个模糊的身影从引导之证中飞出拥抱着艾克斯'],
      huiguniang7: ['gl_ailisi:啊...呼....，终于...终于赢了。', 'none:艾克斯重新确认了一下自己的状况', 'gl_ailisi:身体变的轻盈了，反应也变快了，力量也是之前的好几倍。但是......为什么我变成女孩子了啊？！', 'gl_ludeweixi:这可是象征梦想与奇迹的爱丽丝啊，你怎么还在那种小事上抱怨呢？', 'none:引导之证的气息逐渐平稳了下来', 'gl_aikesi:诶？变回来了？对了！你是谁？你在哪？这些怪物是怎么回事？这个书签到底又是什么东西？', 'gl_ludeweixi:你的问题可真多啊......我是谁、在哪并不重要。而这些怪物是因为有人违背了命运之书的叙述，导致想区逐渐变得“混沌”而产生的', 'gl_aikesi:混沌？', 'gl_ludeweixi:没错，你所在的地方可以称为“想区”，每个想区都有自己既定的故事，这些故事会变化为“命运之书”指引这个想区的人们。', 'gl_ludeweixi:如果这个既定的故事被打破了，这个想区的秩序就会开始扭曲产生混沌，这种混沌会逐渐扩散至整个想区，最终导致想区崩溃。', 'gl_ludeweixi:崩溃后的想区就会被迷雾所吞噬。艾克斯，你的命运之书是空白的，这代表着你没有既定的命运，拥有无限的可能性。', 'gl_ludeweixi:我希望，你能穿过想区外的迷雾区，去拯救那些正在陷入混沌的想区。我即将陷入长眠，未来只能依靠你去开辟了，希望这次我没看走眼。', 'gl_aikesi:等等！！！我还有好多问题！！！', 'none:无论艾克斯如何呼唤，得到的回答也只是沉默', 'gl_aikesi:......虽然还有很多疑惑，但灰姑娘正处于危险中，已经没有时间留给我继续思考了！'],
      huiguniang8: ['hundun_luoji:哎呀！这不是今天早上遇见的小兄弟吗？', 'gl_aikesi:你是今天早上的......不说这个了！你赶紧离开王宫！这里现在很危险！', 'hundun_luoji:哦？你身上的气息......真是可惜啊！我还以为我们能成为伙伴呢！', 'gl_aikesi:你在说什么啊......', 'none:一股肉眼可见的混沌气息从洛基身上喷涌而出', 'gl_aikesi:？！这股气息和外面那些怪物一模一样！是你把居民变成怪物得吗？！', 'gl_xiannv:不...那是我做的。', 'gl_aikesi:你......', 'none:艾克斯端详着眼前衣着华丽的女子。', 'gl_aikesi:你是灰姑娘说的仙女？！', 'gl_xiannv:没错哦！不论是辉煌的马车、华丽的衣服还是漂亮的水晶鞋，我都能变出来。守护历代灰姑娘让她和王子结婚，就是我的使命！', 'gl_xiannv:但是，已经够了......你知道吗？历代灰姑娘中的确有人和王子幸福快乐的度过余生，可是更多的灰姑娘，却在婚后被王子冷暴力！', 'gl_xiannv:变得比之前过的更加不幸！不过幸好，我现在已经把灰姑娘的后妈和两个姐姐都变成我的仆人了。她现在也在我的怀抱中永远的沉睡，不会再变得不幸了！', 'gl_xiannv:你难道不觉得，这对灰姑娘而言是最美好的梦境吗？', 'gl_aikesi:别开玩笑了！灰姑娘不止一次向我诉说过，她的期待、她的梦想、她的愿望！这种梦对她来说只会是噩梦！就让我打破它！', 'gl_aikesi:拜托了！爱丽丝！', 'none:引导之证涌动着奇迹的气息。', 'gl_xiannv:......真是的，居然想要打乱灰姑娘的美梦吗......', 'hundun_xiannv:那就让我把你撕碎吧！！！', 'hundun_luoji:呵呵，真是出乎意料的局面啊。'],
      huiguniang9: ['hundun_luoji:哦？你居然让我流血了吗？那就让我来好好教训你一顿吧......', 'hundun_luoji:虽然想这么说，但是巫女大人已经在呼唤我了，等下次有机会再陪你慢慢玩吧。', 'none:洛基的身影化作一团迷雾消失。'],
      huiguniang10: ['hundun_xiannv:为...为什么？难道你就这么痛恨灰姑娘？就这么想破坏她的美梦吗？', 'gl_aikesi:......所有人都惧怕、厌恶命运之书是空白的我，只有灰姑娘她，愿意做我的朋友。所以我发誓一定要让灰姑娘得到幸福。', 'hundun_xiannv:那你为什么——————', 'gl_aikesi:你真的知道灰姑娘她自己的想法吗？这种所谓的美梦真的是灰姑娘想要的吗？', 'hundun_xiannv:......', 'none:艾克斯走向沉睡的灰姑娘。', 'gl_aikesi:灰姑娘，该起床了哟，不然可就见不到王子了哟。', 'none:艾克斯轻轻的抚摸着灰姑娘的头发。', 'gl_huiguniang:......？艾克斯？', 'gl_aikesi:嗯，我在这。', 'none:灰姑娘一把抱住艾克斯，在艾克斯的怀中哭了起来。', 'gl_huiguniang:呜呜呜....艾克斯，我做了一个好可怕的噩梦，梦见姐姐和妈妈还有王子全都变成了怪物。', 'gl_aikesi:没事的，没事的，噩梦已经结束了。', 'hundun_xiannv:......我', 'gl_xiannv:错了吗？', 'background:格林笔记/map/huiguniang/shulin.jpg', 'gl_aikesi:那之后，一切就如同灰姑娘命运之书的记述，王子全城寻找灰姑娘，最后与灰姑娘结婚。看着婚礼上灰姑娘灿烂的笑容，我也由衷的为她感到高兴。', 'gl_aikesi:原本我还在苦恼约定完成以后没有命运的我该去哪里，不过现在已经有一个神秘的家伙给了我新的使命。', 'gl_huiguniang:艾克斯，你一定要离开吗？', 'gl_aikesi:......', 'none:艾克斯看了看手中的引导之证。', 'gl_aikesi:嗯。', 'none:灰姑娘握紧艾克斯的手。', 'gl_huiguniang:那答应我，永远别忘了我————我最好的朋友。', 'none:引导之证涌动着温柔的气息。', 'gl_aikesi:嗯，永远不忘。', 'none:一阵光芒闪耀，一双手从灰姑娘身后抱住了灰姑娘。', 'gl_xiannv:你这家伙，都快把我重要的灰姑娘惹哭了。', 'gl_huiguniang:仙女大人，你在说些什么呀！', 'gl_aikesi:仙女大人，灰姑娘就要劳烦你多加照顾了。', 'gl_xiannv:好了，好了。不要你说我也会做的，你这个讨厌的家伙赶紧走吧！', 'none:仙女的脸颊微微泛红，抱起灰姑娘便往王城的方向飞去。', 'gl_aikesi:...仙女似乎真的很讨厌我的样子。', 'none:引导之证涌动着魔法的气息。', 'gl_aikesi:？？？'],
      huiguniang11: ['gl_huiguniang:咳咳...我这是......我要死了吗？', 'right:格林笔记/map/huiguniang/hundun_xiannv.jpg:混沌仙女', 'gl_aikesi:灰姑娘！！！', 'right:none', 'none:一大片迷雾不知从何处涌来，包裹了灰姑娘的尸体。', 'gl_aikesi:怎...怎么会这样......', "gl_aikesi:灰姑娘！！！<span class='large'>灰姑娘！！！</span><span class='xlarge'>灰姑娘！！！</span>"]
    },
    pack: {
      character: {
        hundun_xiannv: ['female', 'jin', 20, ['gl_modan', 'gl_hundun', 'gl_jili', 'gl_wangyou'], ['ext:格林笔记/map/huiguniang/hundun_xiannv.jpg']],
        hundun_luoji: ['male', 'jin', 4, ['gl_hundun'], ['ext:格林笔记/map/huiguniang/hundun_luoji.jpg']]
      },
      skill: {
        gl_wangyou: {
          trigger: {
            player: 'damageEnd'
          },
          filter: function (event, player) {
            return event.source != undefined;
          },
          check: function (event, player) {
            return get.attitude(player, event.source) <= 0;
          },
          content: function () {
            trigger.source.discard(trigger.source.getCards('hej'));
            trigger.source.turnOver(true);
          }
        },
        gl_jili: {
          enable: 'phaseUse',
          usable: 1,
          content: function () {
            var list = [];
            var cards = [];
            var getName = function (card) {
              if (!list.includes(get.name(card))) {
                list.push(get.name(card));
                cards.push(card);
              }
            };
            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
              var node = ui.cardPile.childNodes[i];
              getName(node);
            }
            for (var i = 0; i < ui.discardPile.childElementCount; i++) {
              var node = ui.discardPile.childNodes[i];
              getName(node);
            }
            player.gain(cards, 'gain2');
          },
          ai: {
            order: 10,
            result: {
              player: 10
            }
          }
        },
        gl_modan: {
          trigger: {
            player: 'useCard'
          },
          filter: function (event) {
            return get.type(event.card) == 'trick';
          },
          content: function () {
            'step 0';
            player.gain(trigger.cards, 'gain2');
            'step 1';
            player.chooseToDiscard('he', 3, true).ai = get.disvalue;
          }
        }
      },
      translate: {
        hundun_xiannv: '混沌仙女',
        hundun_luoji: '洛基',
        gl_wangyou: '忘忧',
        gl_wangyou_info: '当你受到伤害后，你可以令伤害来源弃置区域内所有牌并将武将牌翻至背面。',
        gl_jili: '祭礼',
        gl_jili_info: '出牌阶段限一次，将卡名不同的牌从牌堆、弃牌堆尽可能加入手牌。',
        gl_modan: '魔弹',
        gl_modan_info: '当你使用锦囊牌时，你可以回收此牌并弃置3张牌。'
      }
    },
    level: [
    {
      background: 'huiguniang/jiedao.jpg',
      beyond: {
        1: {
          name: 'hundun_villain',
          identity: 'fan'
        },
        3: {
          name: 'hundun_villain',
          identity: 'fan'
        },
        5: {
          name: 'hundun_villain',
          identity: 'fan'
        },
        7: {
          name: 'hundun_villain',
          identity: 'fan'
        }
      },
      demand: {
        open: {
          trigger: {
            player: 'phaseBefore'
          },
          filter: function (event, player) {
            return player == game.me && get.demand('no_open');
          },
          content: function () {
            if (game.roundNumber > 1) {
              galgame.sce('huiguniang2');
              game.xiangqv.push('open');
            }
          }
        },
        revive: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (get.demand('ailisi')) return false;
            if (
            game.hasPlayer(function (current) {
              return current.identity == 'fan';
            }))
            {
              return false;
            }
            return player == game.me;
          },
          content: function () {
            while (game.dead.length) {
              game.dead[0].revive(game.dead[0].maxHp);
            }
          }
        },
        luobinhan: {
          trigger: {
            player: 'shaAfter'
          },
          filter: function (event, player) {
            return player == game.me && get.demand('open', 'no_luobinhan');
          },
          forced: true,
          content: function () {
            galgame.sce('huiguniang3');
            game.xiangqv.push('luobinhan');
          }
        },
        beier: {
          trigger: {
            player: 'shanAfter'
          },
          filter: function (event, player) {
            return player == game.me && get.demand('open', 'no_beier');
          },
          forced: true,
          content: function () {
            galgame.sce('huiguniang4');
            game.xiangqv.push('beier');
          }
        },
        shizhongtu: {
          trigger: {
            player: 'damageEnd'
          },
          filter: function (event, player) {
            return player == game.me && get.demand('open', 'no_shizhongtu');
          },
          forced: true,
          content: function () {
            galgame.sce('huiguniang5');
            game.xiangqv.push('shizhongtu');
          }
        },
        ailisi: {
          trigger: {
            player: 'dying'
          },
          filter: function (event, player) {
            return player == game.me && get.demand('open', 'beier', 'luobinhan', 'shizhongtu', 'no_ailisi');
          },
          forced: true,
          content: function () {
            'step 0';
            game.xiangqv.push('ailisi');
            galgame.sce('huiguniang6');
            'step 1';
            player.recover(1 - player.hp);
            game.gl_gain('gl_ailisi');
            player.addSkill('gl_lianjie');
            'step 2';
            var info = lib.skill.gl_lianjie.chooseButton;
            lib.skill.gl_lianjie_backup = info.backup(['gl_ailisi'], player);
            lib.skill.gl_lianjie_backup.sourceSkill = 'gl_lianjie';
            var next = game.createEvent('gl_lianjie');
            next.player = player;
            next.setContent(lib.skill.gl_lianjie.contentx);
            player.logSkill('gl_lianjie');
            'step 3';
            var cards = Array.from(ui.ordering.childNodes);
            while (cards.length) {
              cards.shift().discard();
            }
            'step 4';
            const evt = _status.event.getParent('phase', true);
            if (evt) {
              evt.finish();
            }
            player.phase('nodelay');
          }
        },
        win: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (get.demand('no_ailisi')) return false;
            if (
            game.hasPlayer(function (current) {
              return current.identity == 'fan';
            }))
            {
              return false;
            }
            return player == game.me;
          },
          content: function () {
            'step 0';
            galgame.sce('huiguniang7');
            'step 1';
            game.animate.window(1);
            'step 2';
            game.nextLevel();
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('huiguniang8');
          }
        }
      }
    },
    {
      background: 'huiguniang/gongdian.jpg',
      beyond: {
        1: {
          name: 'hundun_villain',
          identity: 'fan'
        },
        2: {
          name: 'hundun_villain',
          identity: 'fan'
        },
        3: {
          name: 'hundun_luoji',
          identity: 'fan'
        },
        4: {
          name: 'hundun_xiannv',
          identity: 'zhu'
        },
        5: {
          name: 'gl_huiguniang',
          init: function (player) {
            player.skills = [];
            player.addSkill('gl_hundun');
            player.classList.add('turnedover');
            player.update();
          },
          identity: 'fan'
        },
        6: {
          name: 'hundun_villain',
          identity: 'fan'
        },
        7: {
          name: 'hundun_villain',
          identity: 'fan'
        }
      },
      demand: {
        luoji: {
          trigger: {
            player: 'damageEnd'
          },
          filter: function (event, player) {
            return player.name == 'hundun_luoji';
          },
          content: function () {
            'step 0';
            galgame.sce('huiguniang9');
            'step 1';
            game.removePlayer(player);
          }
        },
        win: {
          trigger: {
            player: 'dieAfter'
          },
          filter: function (event, player) {
            return player.name == 'hundun_xiannv';
          },
          content: function () {
            'step 0';
            galgame.sce('huiguniang10');
            game.gl_gain('gl_xiannv');
            game.gl_gain('gl_huiguniang');
            'step 1';
            game.over(true);
          }
        }
      }
    }],

    //这里是整场都生效的一些规则
    demand: {
      lose: {
        trigger: {
          player: 'dieAfter'
        },
        filter: function (event, player) {
          return player.name == 'gl_huiguniang';
        },
        forceDie: true,
        forced: true,
        content: function () {
          'step 0';
          galgame.sce('huiguniang11');
          'step 1';
          game.over(false);
        }
      }
    }
  };
};