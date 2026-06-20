window.gl_init = function (lib, game, ui, get, ai, _status) {
  var list = lib.config.gelin.data;
  if (!list.includes('ludeweixi')) {
    game.gl_createDailog('有谁又知道造物主遗失的真名呢？');
    return;
  }
  window.xiangqv = {
    init: function () {
      galgame.sce('gelintonghua1');
    },
    player: 'gl_ludeweixi',
    galgame: {
      gelintonghua1: ['gl_xialuote:可...可是我才和小红帽成为朋友啊！', 'gl_xiaer:那又怎么样？小女孩犯了错就该被大灰狼吃掉。', 'gl_ludeweixi:的确如此，所以说，夏洛特你啊......', 'gl_xialuote:呜呜呜...我最讨厌三哥了！！！', 'none:夏洛特转身跑向森林。', 'gl_ludeweixi:喂！夏洛特......嘁！这小丫头！', 'gl_yagebu:......', 'gl_weilian:大哥，怎么了？', 'gl_yagebu:路德维希，去把小妹追回来。', 'gl_ludeweixi:我去？', 'gl_yagebu:我不想说第二遍。', 'gl_ludeweixi:我知道了......', 'none:路德维希向森林深处追去。', 'gl_yagebu:夏尔前辈，我觉得对小女孩来说这个惩罚太重了一点。', 'gl_weilian:大哥！', 'gl_xiaer:哦？你这是在教训我吗？', 'gl_yagebu:我实话实说罢了。', 'gl_xiaer:既然如此......', 'background:none', 'gl_dahuilang:嗷呜！！！', 'gl_ludeweixi:夏洛特！！！', 'gl_xialuote:三哥！...不对！我才不要你救呢！二哥呢？大哥呢？', 'gl_ludeweixi:喂喂喂，这种时候就别耍性子了啊......'],
      gelintonghua2: ['gl_ludeweixi:对不起，夏洛特。我知道错了，我们回去找夏尔前辈，拜托他放过你的朋友好吗？', 'gl_xialuote:谢谢三哥...其实我也不该耍性子的......', 'none:两人一起回到木屋。', 'gl_xiaohongmao:谢谢你，猎人叔叔，我还以为我要死了呢。', 'gl_xialuote:那个好像是小红帽？可是为什么呢？', 'gl_weilian:你们两个回来啦？', 'gl_xiaer:嘶...疼...疼...疼......', 'gl_ludeweixi:夏尔前辈，你的脸怎么了？', 'gl_xiaer:啊...哦！刚...刚刚走路不小心摔的！', 'gl_xialuote:二哥，小红帽不是被狼吃了吗？怎么我刚刚看到她跟着一个叔叔回村子里去了？', 'gl_weilian:哈哈哈，夏尔前辈突然觉得那样的惩罚对一个小女孩太重了，所以让一个猎人来把小红帽救出来了呢。', 'gl_yagebu:并且这将成为那个猎人的命运，从今往后，这个想区的小红帽，再也不会死在狼的肚子里了。', 'gl_xialuote:真的吗？太好啦！咦~大哥，你的眼镜怎么碎了？', 'gl_yagebu:.....这很重要吗？', 'gl_xialuote:没有...我只是......', 'gl_yagebu:那就不要多问！', 'gl_xialuote:呜呀！！！（大哥果然还是好可怕，还是二哥对我好！）']
    },
    pack: {
      character: {
        gl_ludeweixi: ['male', 'shen', 4, ['gl_huanyu', 'gl_huimeng'], ['ext:格林笔记/character/gl_ludeweixi.jpg']],
        gl_dahuilang: ['male', 'qun', 8, ['kuanggu', 'qiangxi'], ['ext:格林笔记/character/gl_dahuilang.jpg']],
        gl_xialuote: ['female', 'shen', 4, ['liuli'], ['ext:格林笔记/character/gl_xialuote.jpg']]
      },
      skill: {
        _win1: {
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
            galgame.sce('gelintonghua2');
            game.gl_setData('gl_ludeweixi');
            'step 1';
            game.over(true);
          }
        },
        _lose1: {
          trigger: {
            player: 'dieAfter'
          },
          filter: function (event, player) {
            return player.identity != 'fan';
          },
          forceDie: true,
          forced: true,
          content: function () {
            game.over(false);
          }
        }
      },
      translate: {}
    },
    beyond: [
    {
      name: 'gl_dahuilang',
      position: 3,
      identity: 'fan'
    },
    {
      name: 'gl_xialuote',
      position: 4,
      identity: 'zhong'
    },
    {
      name: 'gl_dahuilang',
      position: 5,
      identity: 'fan'
    }]

  };
};