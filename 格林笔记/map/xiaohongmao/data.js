window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('xiaohongmao1');
    },
    galgame: {
      xiaohongmao1: ['hundun_villain:啊啊啊啊！！！！', 'gl_xiaohongmao:......', 'gl_aikesi:小心！！！'],
      xiaohongmao2: ['gl_aikesi:你没受伤吧？', 'gl_xiaohongmao:你...你是谁？我怎么从来没有见过你？', 'gl_aikesi:我叫艾克斯，是......应该算是旅行者吧？你呢？为什么一个人跑到离村子这么远的地方？', 'gl_xiaohongmao:我...我叫小红帽，妈妈要我去给外婆送面包和葡萄酒。', 'gl_aikesi:是吗？你的妈妈怎么放心你一个人啊？', 'gl_xiaohongmao:......她从来都不关心我，村子里其他人也是...呜呜呜...', 'none:小红帽突然哭了起来。', 'gl_aikesi:这...我陪你一起去吧！正好我也有些问题想问你呢！', 'gl_xiaohongmao:陪我...我吗？', 'none:两个人一起朝小红帽外婆家走去。', 'gl_aikesi:小红帽命运之书写的是什么样的呢？', 'gl_xiaohongmao:上面说...我长大以后会被大灰狼吃掉......', 'gl_aikesi:这...（随口就找了一个这么沉重的话题？）那你可真勇敢啊！', 'gl_xiaohongmao:勇敢？', 'gl_aikesi:对呀，如果我是这种命运的话肯定会害怕的不敢出门了。', 'none:小红帽耸拉着脑袋似乎更加难受了。', 'gl_aikesi:......（这种情况该怎么办呀！！！）对了！我们来做个约定吧！', 'gl_xiaohongmao:约定？', 'gl_aikesi:对！约定！如果你真的遇到危险了，不论如何我都会来拯救你的！', 'gl_xiaohongmao:我......', 'gl_dahuilang:嗷呜！！！', 'none:一只体型壮硕的狼人突然出现在两人面前，随即抓起小红帽往村庄的方向跑去。', 'gl_xiaohongmao:啊！！！', 'gl_aikesi:小红帽！！！'],
      xiaohongmao3: ['none:艾克斯一路追到村庄，只见四周都被熊熊烈火覆盖。', 'gl_dahuilang:嗷呜！！！', 'gl_aikesi:你就是混沌之源吗？！小红帽呢？！你把她拐哪去了？！', 'gl_dahuilang:嗷呜！！！', 'gl_aikesi:可恶！！！看来只能先把你打趴下才行了！！！'],
      xiaohongmao4: ['gl_xiaohongmao:哈哈哈！！！艾克斯，你可真厉害啊！', 'gl_aikesi:小红帽！你没事吗？真是太好了！', 'gl_xiaohongmao:那个家伙只是我的玩具而已，怎么可能伤害到我呢？', 'gl_aikesi:玩...玩具？你......', 'none:一股磅礴的混沌气息从小红帽身上喷涌而出。', 'hundun_xiaohongmao:我把整个村子的人都变成了我的玩具，明明还想要把你也变成我的玩具来着，但是混沌的力量似乎对你不起作用呢。', 'gl_aikesi:为什么？为什么要做这种事情？！', 'hundun_xiaohongmao:那还用说吗？村子里所有的人都盼望着我去死，我只好先一步毁掉他们啦！', 'gl_dahuilang:不...不是这样的。', 'hundun_xiaohongmao:该死，你这个想抢走我妈妈的家伙，怎么突然摆脱我的控制了？！', 'gl_aikesi:你居然还能说话的吗？', 'gl_dahuilang:小伙子......帮帮我，有些话......我必须对小红帽说......', 'gl_aikesi:我明白了，交给我吧！'],
      xiaohongmao5: ['hundun_xiaohongmao:呼...呼...呼...', 'gl_dahuilang:村子里的人，没想你死，你知道吗？我的命运之书上说......', 'hundun_xiaohongmao:啊啊啊！！！我不要听！！！', 'gl_aikesi:小红帽身上的混沌气息更重了，这个想区已经快要崩溃了！'],
      xiaohongmao6: ['gl_dahuilang:我会遇到一只熟睡的大灰狼，剖开它那巨大的肚子，救出它肚子里的小红帽', 'hundun_xiaohongmao:......', 'gl_dahuilang:大家并不是期盼你被大灰狼吃掉，而是相信我会去拯救你。还有你的妈妈，我并不想抢走她，我只是想照顾你们，就像你的爸爸那样。', 'gl_xiaohongmao:你...你骗人...我不信...', 'gl_dahuilang:我说的都是真的，我用我的生命保证', 'gl_xiaohongmao:我......', 'none:大灰狼紧紧抱住了小红帽，伴随光华闪烁，大灰狼身上的毛发竟然逐渐褪去，变成了一名猎人。', 'gl_lieren:谢谢你小伙子。', 'gl_aikesi:太好了！这样事情就算解决了吧？', 'gl_xiaohongmao:艾克斯......', 'gl_aikesi:怎么了？你有什么话想对我说嘛？', 'none:小红帽扑进艾克斯怀里。', 'gl_xiaohongmao:谢谢你，我都已经放弃自己的时候，你却还想着拯救我......', 'gl_aikesi:哈哈哈，毕竟我们有约定嘛！', 'gl_xiaohongmao:约定......嗯！！！', 'none:引导之证涌动着火焰的气息。'],
      xiaohongmao7: ['gl_aikesi:可恶！这个想区已经到达极限了！', 'none:周围的迷雾逐渐吞噬了一切', 'gl_aikesi:我终究是拯救不了任何人吗？'],
      xiaohongmao8: ['hundun_xiaohongmao:哈哈哈！！！我就知道，所有人都盼望着我死，包括你......', 'gl_aikesi:我不是......也是呢...像我这样的家伙.....']
    },
    pack: {
      character: {
        hundun_xiaohongmao: ['female', 'jin', 10, ['gl_yanfa', 'gl_moxiao', 'gl_fengkuang', 'gl_hundun'], ['ext:格林笔记/map/xiaohongmao/hundun_xiaohongmao.jpg']],
        gl_dahuilang: ['male', 'shen', 4, ['kuanggu', 'qiangxi'], ['ext:格林笔记/map/xiaohongmao/gl_lieren.jpg']],
        gl_lieren: ['male', 'shen', 4, ['kuanggu', 'qiangxi'], ['ext:格林笔记/map/xiaohongmao/lieren.jpg']],
        gl_xiaohongmao: ['female', 'qun', 3, ['gl_yanfa'], ['ext:格林笔记/character/gl_xiaohongmao.jpg']]
      },
      skill: {
        gl_yanfa: {
          trigger: {
            player: 'useCardToPlayered',
            target: 'useCardToTargeted'
          },
          filter: function (event, player) {
            return event.target != event.player;
          },
          forced: true,
          content: function () {
            if (trigger.player == player) {
              trigger.target.damage('fire');
            }
            if (trigger.target == player) {
              trigger.player.damage('fire');
            }
          },
          ai: {
            effect: {
              target: function (card, player, target, current) {
                return 'zeroplayertarget';
              }
            }
          }
        },
        gl_moxiao: {
          trigger: {
            source: 'damageEnd'
          },
          forced: true,
          content: function () {
            player.draw();
          }
        },
        gl_fengkuang: {
          enable: 'phaseUse',
          usable: 1,
          filterTarget: function (card, player, target) {
            return player != target;
          },
          filter: function (event, player) {
            return player.countCards('h') > 0;
          },
          selectTarget: -1,
          filterCard: true,
          selectCard: -1,
          discard: false,
          lose: false,
          delay: false,
          multitarget: true,
          multiline: true,
          content: function () {
            player.useCard(
              {
                name: 'sha'
              },
              cards,
              targets
            );
          },
          ai: {
            order: 1,
            result: {
              player: 1
            }
          }
        }
      },
      translate: {
        hundun_xiaohongmao: '混沌小红帽',
        gl_lieren: '猎人',
        gl_dahuilang: '大灰狼',
        gl_yanfa: '炎罚',
        gl_yanfa_info: '锁定技，当你使用牌指定其他角色为目标或其他角色使用牌指定你为目标时，你对其造成一点火焰伤害',
        gl_moxiao: '魔啸',
        gl_moxiao_info: '锁定技，当你造成伤害后，你可以摸一张牌。',
        gl_fengkuang: '疯狂',
        gl_fengkuang_info: '出牌阶段限一次，你可以将所有手牌当做【杀】对除你以外的所有角色使用。'
      }
    },
    level: [
    {
      background: 'xiaohongmao/cunzhuang.jpg',
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
          name: 'hundun_villain',
          identity: 'fan'
        },
        4: {
          name: 'gl_xiaohongmao',
          identity: 'zhong'
        },
        5: {
          name: 'hundun_villain',
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
        over: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player.name == 'gl_xiaohongmao';
          },
          content: function () {
            game.nextLevel(2);
          }
        },
        win: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (
            game.hasPlayer(function (current) {
              return current.identity == 'fan';
            }))
            {
              return false;
            }
            return player == game.me;
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('xiaohongmao2');
            'step 1';
            game.animate.window(1);
            'step 2';
            game.nextLevel();
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('xiaohongmao3');
          }
        }
      }
    },
    {
      beyond: {
        4: {
          name: 'gl_dahuilang',
          identity: 'fan'
        }
      },
      demand: {
        win: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player.name == 'gl_dahuilang';
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('xiaohongmao4');
            trigger.cancel();
            player.hp = 1;
            player.update();
            'step 1';
            player.noRemove = true;
            player.dataset.position = '1';
            player.setIdentity('zhong');
            player.identity = 'zhong';
            game.nextLevel();
          }
        }
      }
    },
    {
      beyond: {
        2: {
          name: 'hundun_villain',
          identity: 'fan'
        },
        3: {
          name: 'hundun_villain',
          identity: 'fan'
        },
        4: {
          name: 'hundun_xiaohongmao',
          identity: 'zhu'
        },
        5: {
          name: 'hundun_villain',
          identity: 'fan'
        },
        6: {
          name: 'hundun_villain',
          identity: 'fan'
        }
      },
      demand: {
        win: {
          trigger: {
            player: 'phaseBefore'
          },
          filter: function (event, player) {
            return player.name == 'gl_dahuilang';
          },
          forced: true,
          content: function () {
            'step 0';
            if (game.roundNumber >= 15 && game.boss.hp < 6 && get.demand('no_xiaohongmao5')) {
              galgame.sce('xiaohongmao5');
              game.boss.draw(10);
              game.xiangqv.push('xiaohongmao5');
            }
            if (game.roundNumber >= 20 && game.boss.hp < 2) {
              galgame.sce('xiaohongmao6');
              game.gl_gain('gl_xiaohongmao');
            }
            'step 1';
            if (game.roundNumber >= 20 && game.boss.hp < 2) {
              game.over(true);
            }
          }
        },
        lose: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player.name == 'gl_dahuilang';
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('xiaohongmao7');
            'step 1';
            game.over(false);
          }
        },
        over: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player.name == 'hundun_xiaohongmao';
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('xiaohongmao8');
            'step 1';
            game.over(true);
          }
        }
      }
    }]

  };
};