window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('gejumeiying1');
      ui.giveup = ui.create.system(
        '投降',
        function () {
          var player = game.me;
          this.remove();
          _status.event.next.length = 0;
          game.createEvent('giveup', false).setContent(function () {
            'step 0';
            game.log(player, '投降');
            player.popup('投降');
            if (game.gl_ailike) {
              galgame.sce('gejumeiying3');
              game.gl_gain('gl_ailike');
              game.gl_gain('gl_kelisidina');
            } else {
              galgame.sce('gejumeiying4');
            }
            'step 1';
            game.over(false);
          }).player = player;
          if (_status.paused && _status.imchoosing && !_status.auto) {
            ui.click.auto();
            ui.autonode.hide();
          }
        },
        true,
        true
      );
    },
    player: 'gl_ailuoweisi',
    galgame: {
      gejumeiying1: ['sp:所以我和克里斯蒂娜希望你能帮忙，在我们两个的婚礼开始之前铲除那个幽灵。:拉乌尔:格林笔记/map/ailike/gl_lawuer.jpg', 'gl_ailuoweisi:是这样吗，克里斯蒂娜小姐？', 'gl_kelisidina:......', 'none:克里斯蒂娜似乎有些心不在焉。', 'sp:克里斯蒂娜！！！:拉乌尔:格林笔记/map/ailike/gl_lawuer.jpg', 'gl_kelisidina:啊？哦，嗯！', 'sp:总之就是这样！事成之后，我会给你一大笔钱！:拉乌尔:格林笔记/map/ailike/gl_lawuer.jpg', 'gl_ailuoweisi:那事不宜迟，今晚就动手吧！', 'none:夜幕降临，艾洛维斯正准备动身时门口传来了一阵敲门声。', 'gl_ailuoweisi:请进。', 'gl_kelisidina:您...您好，艾洛维斯先生。', 'gl_ailuoweisi:哦？克里斯蒂娜小姐，我正准备出发呢，你有什么事吗？', 'gl_kelisidina:我...我想和你一起去......', 'gl_ailuoweisi:为什么？', 'gl_kelisidina:因为...因为......对！我不是亲自见证那个幽灵死掉的话，他在我心里留下的阴霾就永远不会散去！就是这样！没错！', 'gl_ailuoweisi:但我届时可无法分神保护你啊。', 'gl_kelisidina:没关系，我会一些治疗方法和防身术，不必担心我。', 'none:艾洛维斯和克里斯蒂娜来到了歌剧院。'],
      gejumeiying2: ['gl_ailuoweisi:别再装神弄鬼了，赶紧显出真身来！', 'gl_ailike:呵呵，看来真让拉乌尔那混蛋找到了一个有本事的家伙。', 'gl_kelisidina:......', 'gl_ailike:真正的表演现在才要开始！'],
      gejumeiying3: ['gl_ailuoweisi:好了，我投降。', 'gl_ailike:你这家伙什么意思？！是在瞧不起我吗？！', 'gl_ailuoweisi:你还没明白吗？再打下去也没有任意意义。', 'gl_ailike:......', 'none:埃里克放下了武器，看起来似乎更加惆怅了。', 'gl_ailuoweisi:这里交给你了克里斯蒂娜小姐。', 'gl_kelisidina:诶？我......', 'none:克里斯蒂娜眼睛里泪光闪烁。', 'gl_kelisidina:谢...谢谢你.....', 'none:艾洛维斯径直走出了剧院。', 'gl_ailuoweisi:圣女大人......我已经越来越迷茫了，如果您还能像曾经那样教诲我就好了......', 'none:引导之证交织着阴暗与闪亮气息。'],
      gejumeiying4: ['gl_ailuoweisi:到此为止了吗？！', 'none:一个漆黑的身影伴随着呼啸声杀向了艾洛维斯。'],
      gejumeiying5: ['gl_ailuoweisi:结束了，你不用再害怕了，克里斯蒂娜小姐。', 'gl_kelisidina:.......', 'gl_ailuoweisi:你怎么了，克里斯蒂娜小姐？', 'gl_kelisidina:啊？哦......后天我的婚礼，艾洛维斯先生您也请来吧......', 'gl_ailuoweisi:......我知道了。']
    },
    pack: {
      character: {
        gl_kelisidina: ['female', 'shu', 3, ['gl_sheshen', 'jijiu'], ['ext:格林笔记/character/gl_kelisidina.jpg']],
        gl_ailike: ['female', 'qun', 4, ['repojun', 'yingjian'], ['ext:格林笔记/character/gl_ailike.jpg']],
        gl_youling: ['none', 'jin', 4, ['duwu', 'drlt_yongsi'], ['ext:格林笔记/map/ailike/youling.jpg']]
      },
      skill: {
        gl_sheshen: {
          trigger: {
            global: 'damageBegin4'
          },
          logTarget: 'player',
          check: function (event, player) {
            return event.player.name == 'gl_ailike';
          },
          filter: function (event, player) {
            if (event.num < event.player.hp) return false;
            return event.player != player && player.hp > 1;
          },
          content: function () {
            trigger.player = player;
            game.gl_ailike = true;
          },
          ai: {
            effect: {
              target: function (card, player, target, current) {
                if (get.tag(card, 'damage')) {
                  return 'zeroplayertarget';
                }
              },
              player: function (card, player, target, current) {
                if (get.tag(card, 'damage')) {
                  return 'zeroplayertarget';
                }
              }
            }
          }
        }
      },
      translate: {
        gl_lawuer: '拉乌尔',
        gl_youling: '幽灵',
        gl_sheshen: '舍身',
        gl_sheshen_info: '其他角色受到致命伤害前，若你的体力值大于1，你可以代替其承受之。'
      }
    },
    level: [
    {
      beyond: {
        1: {
          name: 'gl_kelisidina',
          init: function (player) {
            player.noInit = true;
          },
          identity: 'zhong'
        },
        4: {
          name: 'gl_youling',
          identity: 'zhu'
        }
      },
      demand: {
        win: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player == game.boss;
          },
          content: function () {
            'step 0';
            trigger.cancel();
            if (player.name == 'gl_youling') {
              player.name = 'gl_ailike';
              player.init('gl_ailike');
              galgame.sce('gejumeiying2');
              event.finish();
            } else {
              galgame.sce('gejumeiying5');
            }
            'step 1';
            game.over(true);
          }
        },
        lose: {
          trigger: {
            player: 'dieAfter'
          },
          filter: function (event, player) {
            return player.name == 'gl_kelisidina';
          },
          content: function () {
            game.over(false);
          }
        }
      }
    }]

  };
};