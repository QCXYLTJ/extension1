window.gl_init = function (lib, game, ui, get, ai, _status) {
  var list = lib.config.gelin.data;
  if (!list.includes('leina')) {
    game.gl_createDailog('有谁又知道造物主遗失的真名呢？');
    return;
  }
  window.xiangqv = {
    init: function () {
      galgame.sce('tiaolvwunv1');
    },
    player: 'gl_leina',
    galgame: {
      "tiaolvwunv1": [
      "gl_duoluoxiya:终于成功了！",
      "gl_xiaer:成功了？什么东西啊？",
      "gl_duoluoxiya:这是我以诗晶石为媒介缔造的“箱庭王国”，它相当于一个移动的迷你型想区。",
      "gl_wangdefa:你的才华真是叫人羡慕啊。",
      "gl_dafenqi:还有更厉害的在后面呢。",
      "gl_antusheng:你是指你们之前提到过的“引导之证”？",
      "gl_duoluoxiya:没错，这是以“万象书签”为原型制作的“引导之证”，它具有和万象书签类似的力量，可以和诗晶石、想区原典产生共鸣。",
      "gl_yisuo:那这个东西岂不是非常危险？！",
      "gl_duoluoxiya:就是这样......虽然想这么说，但是它的缺陷也很严重......",
      "gl_dafenqi:这个引导之证需要和命运之书配合使用，但是它又会让使用者的命运之书产生扭曲。",
      "gl_xiaer:意思就是说，用了就会死喽？这又是什么乌龙发明啊，哈哈哈哈。",
      "gl_duoluoxiya:......",
      "gl_antusheng:那如果使用者有命运之书却没有命运呢？",
      "gl_duoluoxiya:我推测是不会有事的。",
      "gl_dafenqi:所以今天叫你们来的主要目的，就是希望你们各自拿上一枚引导之证，去找找有没有这样特殊的存在。",
      "gl_wangdefa:我明白了。",
      "none:众人散去。"],

      "tiaolvwunv2": [
      "sp:这就是我们的大小姐啊，听说是个命运之书里空无一字的怪胎呢。:女佣甲:格林笔记",
      "sp:这种怪胎，如果不是费曼家族唯一的继承者的话，早就已经被放逐了吧？:女佣已:格林笔记",
      "gl_leina:......今天太阳好像有点大，还是回去吃布丁吧......",
      "none:蕾娜低着头往家中走去。",
      "sp:她刚刚不会听到了吧？:女佣甲:格林笔记",
      "sp:得了吧，她就是一个白痴饭桶！:女佣已:格林笔记",
      "none:不远处。",
      "gl_luoji:呵呵呵......今天想不见血都不行了。"]

    },
    pack: {
      skill: {
        _open: {
          trigger: {
            player: "phaseBefore"
          },
          filter: function (event, player) {
            return player == game.me;
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('tiaolvwunv2');
            game.gl_setData('gl_leina');
            'step 1';
            game.over();
          }
        }
      }
    },
    beyond: []
  };
};