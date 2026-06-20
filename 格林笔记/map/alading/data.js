window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('alading1');
    },
    galgame: {
      alading1: ['background:格林笔记/map/alading/jiedao.jpg', 'sp:喂！小哥你该不会想吃霸王餐吧？:路人甲:格林笔记', 'gl_aikesi:等等...再让我找找......（我的钱袋怎么不见了？该不会是今天早上遇到的那个家伙....）', 'sp:在我这吃霸王餐，我可要把你送去王宫论罪啦！:路人甲:格林笔记', 'sp:老板，这是一枚金币，这个少年的帐我替他结。:???:格林笔记/gl_moli.jpg', 'none:一名蒙面纱的少女将一枚金币丢在了桌子上。', 'gl_aikesi:我叫艾克斯，谢谢你帮我付钱。', 'sp:我叫乐雅，谢谢就不必了，帮我个忙怎么样？:???:格林笔记/gl_moli.jpg', 'gl_aikesi:你说吧，只要不用太久的话，我不会拒绝的。', 'sp:我和我的丈夫走散了，有人说见到他往沙漠中央去了，所以我想去沙漠里找他，拜托你担任一下我的护卫。:乐雅:格林笔记/gl_moli.jpg', 'gl_aikesi:没问题，交给我吧！'],
      alading2: ['none:茫茫沙海，两个人行走其中。', 'gl_aikesi:天色不早了，我们还是先回城里去吧。', 'sp:好吧......:乐雅:格林笔记/gl_moli.jpg', 'none:周围流沙涌动。', 'gl_aikesi:怎么回事？！', 'none:一群蠕虫从黄沙中探出头。', 'sp:这...这是死亡蠕虫！！！:乐雅:格林笔记/gl_moli.jpg', 'gl_aikesi:乐雅，跟紧我！（这个数量不能赶快突围的话，一定会被耗死在这里的！）'],
      alading3: ['gl_aikesi:可恶啊！根本找不到出路！', 'sp:我们会被那些虫子吃掉吗......:乐雅:格林笔记/gl_moli.jpg', 'none:虫群中突然传来一阵巨大的爆炸声。', 'gl_alading:茉莉，往这边来！！！', 'sp:阿里王子！艾克斯，那就是我的丈夫，我们快去那边！:乐雅:格林笔记/gl_moli.jpg', 'gl_aikesi:那家伙好像是...我知道了！我们走吧！'],
      alading4: ['gl_aikesi:好了大概安全了，那你们两位是不是有什么事情该和我说一下？', 'gl_alading:这是我今天早上偷你的金币，还给你......', 'gl_aikesi:那种事情不重要了，毕竟这位“乐雅”小姐还是茉莉公主，已经替“阿里”王子还是阿拉丁先生还给我了。', 'gl_alading:对...对不起，茉莉。我骗了你，我不是什么阿里王子，我只是一个......小混混阿拉丁。', 'gl_moli:那种事情我早就听说了，只不过没和你确认而已。', 'gl_alading:啊？真...真的吗？', 'gl_moli:阿拉丁，你知道吗？在你逃走了以后，爸爸变得好奇怪......变得骄奢淫逸、残暴不仁......', 'gl_alading:对...对不起，因为命运之书里没有写这种事情，所以我没想到你爸爸会偷神灯......', 'gl_aikesi:命运之书里没有写？！麻烦你好好说明一下！', 'none:阿拉丁述说了自己的命运。', 'gl_moli:那必须得拿回神灯才行。', 'gl_aikesi:请让我也帮忙。（混沌之源一定是国王无疑了！）', 'gl_alading:谢...谢谢你们。'],
      alading5: ['gl_alading:奇怪啊，街上的居民呢？', 'gl_luoji:呵呵呵，几位看起来很着急去王宫呢？', 'gl_aikesi:又是你？！', 'gl_moli:这家伙今天早上我还看到他和爸爸在一起！', 'gl_aikesi:阿拉丁！保护好茉莉公主！我今天一定要在这干掉这个家伙永绝后患！', 'gl_alading:我...我知道了！茉莉，靠过来点。我会保护好你的！'],
      alading6: ['none:艾克斯从东门一路追杀洛基到北门。', 'gl_luoji:嘁！真是难缠！', 'gl_aikesi:今天你不要想活着离开！', 'gl_luoji:说真的，我已经开始佩服你的实力了，要是你能理解我崇高的理想就好了。', 'gl_aikesi:毁灭大家赖以生存的想区？这是什么崇高的理想！', 'gl_luoji:不，那不过是表象罢了。身为空白之书的持有者，你应该感受过被所有人排斥、厌恶。我自己已经堕入深渊，无药可救了。但是我想拯救那些在我之后出生的空白之书持有者们。', 'gl_aikesi:......', 'none:想区发生巨大的震动，天空、大地开始崩裂。', 'gl_aikesi:怎么回事？！', 'gl_luoji:呵呵，看来那边结束了，告辞了。', 'gl_aikesi:那边？！不好！阿拉丁和茉莉公主！！！', 'none:艾克斯急忙往回赶。', 'gl_moli:阿拉丁，为什么...你明明自己可以逃掉......', 'none:阿拉丁躺在茉莉公主的胸口，身上有一条可怖的伤痕。', 'gl_alading:我...懦弱了...一辈子，但是为了你......茉莉，我不想再懦弱下去了...', 'none:阿拉丁缓缓的闭上双眼，双手无力的垂下。', 'gl_moli:阿拉丁！！！', 'none:艾克斯匆匆跑来，只见阿拉丁和茉莉公主周围横七竖八躺着一群混沌之仆。', 'gl_aikesi:可恶！都是我不好！我不该丢下你们......', 'none:茉莉公主抱着阿拉丁的尸体痛哭。', 'gl_aikesi:想区的主角死去了......这个想区已经必然毁......', 'right:格林笔记/gl_moli.jpg:茉莉公主', 'gl_aikesi:神灯！！！', 'right:none', 'none:茉莉公主抹干眼泪站了起来。', 'gl_aikesi:只要能拿到神灯就能复活阿拉丁！', 'gl_moli:阿拉丁，现在换我来救你了！', 'none:两人离开不久后。', 'gl_luoji:呵，就让我浇灭这最后的希望吧。', 'none:一本古朴的羊皮书从阿拉丁的身体中缓缓的分离出来。'],
      alading7: ['hundun_guowang:女儿啊，你可真是不乖啊！怎么能自己偷偷溜出去呢？', 'gl_moli:爸爸，把神灯给我！不要再错下去了！', 'hundun_guowang:错？我只不过要了所有人都渴望的东西罢了，有什么错？', 'gl_aikesi:茉莉公主！没时间说服他了！阿拉丁还等着我们拿神灯回去救他！', 'gl_dengshen:什么？阿拉丁？那小子怎么了？', 'hundun_guowang:灯神！！！你现在可是我的奴隶！！！', 'gl_dengshen:抱...抱歉....主人......', 'hundun_guowang:够了！现在我的第三个愿望！给我打败这两个家伙！！！', 'right:格林笔记/gl_moli.jpg:茉莉公主', 'gl_dengshen:什么？！', 'right:none', 'gl_dengshen:可...可是茉莉她不是你的女儿吗？', 'hundun_guowang:给我服从命令！！！', 'gl_moli:爸爸......', 'gl_dengshen:遵从您的意志......'],
      alading8: ['gl_moli:灯神，我的第一个愿望，我希望阿拉丁复活。', 'gl_dengshen:阿拉丁...他死了？', 'gl_moli:对没错，所以拜托了赶紧复活他！', 'gl_dengshen:抱歉...我也很想，但是我做不到......', 'gl_moli:什么？！你不是无所不能吗？', 'none:灯神神色落寞的摇摇头。', 'gl_aikesi:那该怎么办？！难道这个想区注定要毁灭了吗？！', 'gl_dengshen:等等，如果问题真的有那么严重的话。我反而有办法了！', 'gl_aikesi:是...是什么？！', 'gl_dengshen:世界濒临破碎时，呼唤伟大造物主的真名，神圣的光辉将会拯救一切。', 'gl_moli:造物主的真名？！可是从来都没有人知道造物主的真名啊！', 'gl_dengshen:的确如此，但是你如果许愿的话......', 'gl_moli:好，我明白了！灯神，我得第一个愿望，请告诉我造物主的真名！', 'gl_dengshen:来吧！！！伟大的造物主赐予我的权能！！！伟大造物主的真名就是————', 'gl_dengshen:山鲁佐德！！！', 'none:一股无法言喻的强大气息席卷整个想区。', 'gl_shanluzuode:啊啦，这一个美容觉睡的可真久啊。', 'gl_moli:您...您就是造物主大人？我恳求您...', 'gl_shanluzuode:不用说了，我都知道了，情况比你们想象的还要恶劣！有人把阿拉丁的原典带出了想区，失去原典的我已经无法复活我可爱的孩子了。', 'gl_aikesi:怎么会......', 'gl_shanluzuode:现在我只能冻结整个想区，剩下的只能拜托你了，孕育着自然纹章的调律者。', 'gl_aikesi:我？！', 'gl_shanluzuode:没错，拜托你在三个月内带回阿拉丁被取走的原典。茉莉、灯神你们也来助他一臂之力吧！', 'gl_moli:拜托你了，艾克斯。', 'none:引导之证涌动着自立的气息。', 'gl_dengshen:虽然刚认识不久，但是恳请你能把阿拉丁那小子带回来......他是一个很好的主人。', 'none:引导之证涌动着超凡的气息。', 'gl_shanluzuode:这次我被强行唤醒，已经损失太多的力量，所以你绝不能再犯类似的错误了。', 'gl_aikesi:我...我明白了......']
    },
    pack: {
      character: {
        gl_moli: ['female', 'wu', 3, ['xiaoji', 'jizhi', 'qiangzhi'], ['ext:格林笔记/character/gl_moli.jpg']],
        gl_alading: ['male', 'wu', 4, ['gl_zhayao'], ['ext:格林笔记/character/gl_alading.jpg']],
        gl_dengshen: ['male', 'wu', 4, ['gl_shenyou', 'gl_xuepin'], ['ext:格林笔记/character/gl_dengshen.jpg']],
        gl_luoji: ['male', 'jin', 4, ['mianyi', 'qianxing', 'gl_hundun'], ['ext:格林笔记/character/gl_luoji.jpg']],
        gl_ruchong: ['none', 'wu', 4, ['gl_xuepin'], ['ext:格林笔记/map/alading/gl_ruchong.jpg']],
        hundun_guowang: ['male', 'jin', 99, ['gl_hundun', 'gl_aofa', 'gl_wangqvan', 'gl_kulie'], ['ext:格林笔记/map/alading/hundun_guowang.jpg']]
      },
      skill: {
        gl_wangqvan: {
          trigger: {
            player: 'phaseBefore'
          },
          forced: true,
          content: function () {
            player.recover(3);
            player.draw(6);
          }
        },
        gl_kulie: {
          trigger: {
            source: 'damageBegin3'
          },
          forced: true,
          content: function () {
            trigger.num *= 2;
          }
        },
        gl_aofa: {
          enable: 'phaseUse',
          init: function (player) {
            if (!player.storage.gl_aofa) player.storage.gl_aofa = [];
          },
          filter: function (event, player) {
            return player.countCards('he');
          },
          chooseButton: {
            dialog: function (event, player) {
              var list = [];
              for (var i in lib.card) {
                if (player.storage.gl_aofa.includes(i)) {
                  continue;
                }
                if (get.type(i) == 'trick') list.push(['锦囊', '', i]);
              }
              if (list.length == 0) {
                return ui.create.dialog('奥法已无可用牌');
              }
              return ui.create.dialog('奥法', [list, 'vcard'], 'hidden');
            },
            check: function (button) {
              var player = _status.event.player;
              if (player.countCards('hs', button.link[2]) > 0) return 0;
              var effect = player.getUseValue(button.link[2]);
              if (effect > 0) return effect;
              return 0;
            },
            filter: function (button, player) {
              var bool = false;
              if (
              lib.filter.filterCard(
                {
                  name: button.link[2]
                },
                player,
                _status.event.getParent()
              ))
              {
                bool = true;
              }
              return bool;
            },
            backup: function (links, player) {
              return {
                filterCard: true,
                position: 'he',
                selectCard: 1,
                check: function (card) {
                  return 11 - get.value(card);
                },
                viewAs: {
                  name: links[0][2]
                },
                onuse: function (result, player) {
                  player.storage.gl_aofa.add(result.card.name);
                }
              };
            }
          },
          prompt: function (links, player) {
            return '将1张牌当使用' + get.translation(links[0][2]);
          },
          group: 'gl_aofa_lose',
          subSkill: {
            lose: {
              trigger: {
                global: 'roundStart'
              },
              direct: true,
              content: function () {
                player.storage.gl_aofa = [];
              }
            }
          },
          ai: {
            order: 15,
            result: {
              player: 1
            },
            respondSha: true,
            respondShan: true,
            fireAttack: true
          }
        },
        gl_xuepin: {
          enable: 'phaseUse',
          usable: 1,
          filterTarget: function (card, player, target) {
            return player != target;
          },
          content: function () {
            target.damage(player.hp);
            player.damage(player.hp);
          },
          ai: {
            threaten: 1.5,
            order: 7,
            result: {
              target: function (player, target) {
                var eff = get.damageEffect(target, player, target);
                return eff;
              }
            }
          }
        },
        gl_zhayao: {
          enable: 'phaseUse',
          usable: 1,
          filter: function (event, player) {
            return (
              player.countCards('he', {
                color: 'red'
              }) > 0);

          },
          filterTarget: true,
          position: 'he',
          filterCard: {
            color: 'red'
          },
          check: function (card) {
            return 8 - get.value(card);
          },
          multiline: true,
          line: 'fire',
          content: function () {
            target.previous.damage('fire', 'nocard');
            target.damage('fire', 'nocard');
            target.next.damage('fire', 'nocard');
          },
          ai: {
            damage: true,
            fireAttack: true,
            threaten: 1.5,
            order: 7,
            result: {
              target: function (player, target) {
                var eff = get.damageEffect(target, player, target, 'fire');
                eff += get.damageEffect(target.next, player, target, 'fire');
                eff += get.damageEffect(target.previous, player, target, 'fire');
                return eff;
              }
            }
          }
        },
        gl_shenyou: {
          trigger: {
            player: 'changeHp'
          },
          filter: function (event, player) {
            return event.num < 0;
          },
          forced: true,
          content: function () {
            player.recover(player.maxHp - player.hp);
          },
          ai: {
            effect: {
              target: function (card, player, target, current) {
                return 'zeroplayertarget';
              }
            }
          }
        }
      },
      translate: {
        gl_ruchong: '死亡蠕虫',
        hundun_guowang: '混沌国王',
        gl_zhayao: '炸药',
        gl_zhayao_info: '出牌阶段限一次，你可以弃置一张红色牌，并对1名角色上下家在内分别造成1点火焰伤害。',
        gl_xuepin: '血拼',
        gl_xuepin_info: '出牌阶段限一次，你可以与一名其他角色分别受到点伤害。（X为你当前的体力值）',
        gl_shenyou: '神佑',
        gl_shenyou_info: '锁定技，当你的体力减少时，你回复所有体力。',
        gl_wangqvan: '王权',
        gl_wangqvan_info: '锁定技，你的回合开始时，你恢复3点体力并摸6张牌',
        gl_kulie: '酷烈',
        gl_kulie_info: '锁定技，你造成的伤害翻倍。',
        gl_aofa: '奥法',
        gl_aofa_info: '出牌阶段，你可以将1张手牌当本轮未以此法使用过的锦囊牌使用。'
      }
    },
    level: [
    {
      background: 'alading/shamo.jpg',
      beyond: {
        1: {
          name: 'gl_moli',
          init: function (player) {
            player.node.name.innerHTML = get.verticalStr('乐雅');
          },
          identity: 'zhong'
        },
        2: {
          name: 'gl_ruchong',
          identity: 'fan'
        },
        3: {
          name: 'gl_ruchong',
          identity: 'fan'
        },
        4: {
          name: 'gl_ruchong',
          identity: 'fan'
        },
        5: {
          name: 'gl_ruchong',
          identity: 'fan'
        },
        6: {
          name: 'gl_ruchong',
          identity: 'fan'
        },
        7: {
          name: 'gl_ruchong',
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
            game.xiangqv.push('open');
            galgame.sce('alading2');
          }
        },
        ruchong: {
          trigger: {
            player: 'dieAfter'
          },
          filter: function (event, player) {
            return player.name == 'gl_ruchong' && get.demand('no_ruchong');
          },
          content: function () {
            if (!game.ruchong) {
              game.ruchong = 0;
            }
            game.ruchong++;
            game.removePlayer(player);
            if (game.ruchong < 30) {
              var ruchong = game.addPlayer(7, 'gl_ruchong');
              ruchong.getId();
              ruchong.directgain(get.cards(4));
              ruchong.setIdentity('fan');
              ruchong.identity = 'fan';
            } else {
              var alading = game.addPlayer(7, 'gl_alading');
              alading.getId();
              alading.directgain(get.cards(4));
              alading.setIdentity('zhong');
              alading.identity = 'zhong';
              galgame.sce('alading3');
              game.xiangqv.push('ruchong');
            }
          }
        },
        win: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (
            !game.hasPlayer(function (current) {
              return current.name == 'gl_alading';
            }))
            {
              return false;
            }
            if (
            game.hasPlayer(function (current) {
              return current.name == 'gl_ruchong';
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
            galgame.sce('alading4');
            'step 1';
            game.animate.window(1);
            'step 2';
            game.nextLevel();
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('alading5');
          }
        }
      }
    },
    {
      background: 'alading/xiyang.jpg',
      beyond: {
        4: {
          name: 'gl_luoji',
          identity: 'zhu'
        }
      },
      demand: {
        win: {
          trigger: {
            global: 'dieBefore'
          },
          filter: function (event, player) {
            return player == game.me && event.player == game.vitalPlayer.gl_luoji;
          },
          content: function () {
            'step 0';
            galgame.sce('alading6');
            'step 1';
            game.animate.window(1);
            'step 2';
            game.nextLevel();
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('alading7');
          }
        }
      }
    },
    {
      background: 'alading/gongdian.jpg',
      beyond: {
        win: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player == game.boss;
          },
          content: function () {
            'step 0';
            galgame.sce('alading8');
            game.gl_gain('gl_moli');
            game.gl_gain('gl_dengshen');
            game.gl_setData('shanluzuode');
            'step 1';
            game.over(false);
          }
        }
      },
      demand: {
        1: {
          name: 'gl_moli',
          identity: 'zhong'
        },
        4: {
          name: 'hundun_guowang',
          identity: 'zhu'
        },
        5: {
          name: 'gl_dengshen',
          identity: 'fan'
        }
      }
    }],

    demand: {
      lose: {
        trigger: {
          player: 'dieAfter'
        },
        filter: function (event, player) {
          return game.vitalPlayer.gl_moli == player || game.vitalPlayer.gl_dengshen == player || game.vitalPlayer.gl_alading == player;
        },
        content: function () {
          game.over(false);
        }
      }
    }
  };
};