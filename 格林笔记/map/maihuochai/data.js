window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('maihuochai1');
    },
    player: 'gl_kali',
    galgame: {
      "maihuochai1": [
      "none:一阵温暖的火光照到了卡莉身上。",
      "gl_maihuochai:我叫卖火柴的小女孩，你叫什么？为什么一个人坐在这里？",
      "gl_kali:我...叫卡莉，我亲戚把我赶出来了，我没地方去......你还是离我远一点吧。",
      "gl_maihuochai:诶？为...为什么？",
      "gl_kali:我的命运之书里面一个字都没有，你离我这么近，说不定会招来厄运的。",
      "gl_maihuochai:真...真的吗？那可真是好厉害啊！",
      "gl_kali:厉...厉害？",
      "gl_maihuochai:是啊！你想想呀！这不就代表卡莉可以去做任何想做的事吗？这也太令人向往......咦？卡莉你怎么哭了？我说错什么了吗？",
      "gl_kali:抱歉，只是从来没有人这么说过...你的命运之书是怎么样的？",
      "gl_maihuochai:我...我的命运之书......上面说我之后会坐在暖炉旁边和奶奶一起吃火鸡呢！",
      "gl_kali:真...真的吗？那可真是很棒的命运呀！我可以一起来吗？",
      "gl_maihuochai:啊？！绝对不可以！！！",
      "gl_kali:抱...抱歉，是我太得寸进尺......",
      "gl_maihuochai:不不不，我不是这个意思，我的意思...我的意思是卡莉可以去做一些更伟大的事嘛！",
      "gl_kali:我...我可以吗？",
      "gl_maihuochai:嗯！我相信卡莉，卡莉以后一定会是一个不可思议的伟人！",
      "none:两个少女互相依偎着，在暴雪的咆哮声中逐渐昏睡了过去。",
      "sp:你就是在万象被混沌吞噬前最后的希望吗？:未知的声音:格林笔记",
      "sp:咳咳咳...可恶，我已经没有时间了！只能拜托你了！本不该存在的混沌调律者！:未知的声音:格林笔记",
      "none:黎明的曙光照在了两位少女的身上。",
      "gl_kali:我好像做了个奇怪的梦......",
      "gl_moligan:这可真是叫人无法直视的悲惨命运。",
      "gl_kali:嗯？谁？命运？你是在说......不会是！？！？",
      "none:卡莉连忙推了推身旁的小女孩。",
      "gl_kali:喂！卖火柴的小女孩！快醒醒！你不是要去和奶奶一起去吃火鸡吗？快醒醒啊！！",
      "none:莫里甘摇了摇头，打算离开。",
      "gl_kali:为什么...为什么会这样......果然还是我招来的厄运吗？",
      "none:一枚书签从卡莉怀中掉了出来。",
      "gl_moligan:嗯？你这家伙是......呵呵，运气真是不错呢？看来那群老东西也有失算的时候啊......",
      "gl_moligan:小姑娘，这不是你的错，你朋友的命运之书已经注定了她的死亡。",
      "gl_kali:命运之书......",
      "gl_moligan:没错，就因为说书人的一时兴起，这个世界每天都有无数这样的悲剧发生，你难道不能想改变它吗？",
      "gl_kali:......",
      "gl_maihuochai:嗯！我相信卡莉，卡莉以后一定会是一个不可思议的伟人！",
      "gl_kali:我...我该怎么做？",
      "gl_moligan:呵呵，先通过我的测试吧。"],

      "maihuochai2": [
      "none:引导之证涌动着......引导之证的气息被混沌所淹没。",
      "gl_moligan:哈哈哈！好！！很好！！！你叫什么名字？",
      "gl_kali:卡莉......",
      "gl_moligan:好，卡莉，从今往后你就是我灰烬教团的巫女，我会教你如何拯救那些被命运捆绑的可怜人！跟我来吧。",
      "gl_kali:能稍微等一下吗？我想给她......",
      "gl_moligan:......给你三分钟，快一点。",
      "none:卡莉转身蹲下对着身前的尸体做了一阵祷告。"]

    },
    pack: {
      skill: {
        "_win": {
          trigger: {
            global: "dieAfter"
          },
          filter: function (event, player) {
            if (game.hasPlayer(function (current) {
              return current.identity == 'fan';
            })) {
              return false;
            }
            return player.name == 'gl_kali';
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('maihuochai2');
            game.gl_gain('gl_maihuochai');
            'step 1';
            game.over(true);
          }
        }
      }
    },
    beyond: [{
      name: "hundun_villain",
      position: 1,
      identity: "fan"
    },
    {
      name: "hundun_villain",
      position: 2,
      identity: "fan"
    },
    {
      name: "hundun_villain",
      position: 3,
      identity: "fan"
    },
    {
      name: "hundun_villain",
      position: 4,
      identity: "fan"
    },
    {
      name: "hundun_villain",
      position: 5,
      identity: "fan"
    }, {
      name: "hundun_villain",
      position: 6,
      identity: "fan"
    },
    {
      name: "hundun_villain",
      position: 7,
      identity: "fan"
    }]

  };
};