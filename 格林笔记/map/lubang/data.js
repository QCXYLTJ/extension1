window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('guaidao1');
    },
    player: 'gl_sade',
    loop: 1,
    galgame: {
      "guaidao1": [
      "none:沉默之雾中，引导之证微弱的光芒被周围白茫茫的雾气压的摇摇欲坠。",
      "gl_sade:真是的，爸爸你的枪里面根本不能装子弹嘛。",
      "none:萨德独自坐在一个机关匣的面前自言自语。",
      "gl_sade:就是因为你总是心慈手软的，所以关键时候才会连反抗的机会都没有呢......",
      "none:伴随萨德手上的动作越来越快，她手中杂乱无章的零件也逐渐拼接成型。",
      "gl_sade:完成了呢，我该走了爸爸......",
      "none:伴随萨德捡起地上的引导之证，周围的迷雾也彻底围了上来，贪婪的吞没最后一寸土地。",
      "gl_sade:好了，告诉我刚刚那个带着鸟嘴面具的家伙跑哪去了？",
      "none:引导之证上的长弓图案缓缓旋转，最终指向某个方向后停下。"],

      "guaidao2": [
      "hundun_shitu:主上万岁！！！",
      "none:眼前的混沌使徒发出临死前最后的呐喊。",
      "gl_sade:主上？！这样的疯子还有很多个都形成团体了吗？！",
      "none:伴随砰砰砰连续不断的枪鸣，萨德身前混沌使徒的尸体逐渐变的不可描述。",
      "gl_sade:既然都是群疯子的话，那就把你们连同那个什么主上全都干掉好啦。",
      "none:萨德收起因为过热导致枪管有些变形的布朗宁，转身又朝不知何方前行。"]

    },
    pack: {
      skill: {
        _win1: {
          trigger: {
            player: "dieAfter"
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('guaidao2');
            game.gl_gain('gl_lubang');
            game.gl_gain('gl_jianimaer');
            'step 1';
            game.over(true);
          }
        }
      }
    },
    beyond: [{
      name: "hundun_shitu",
      position: 4,
      init: function (player) {
        player.group = 'qun';
      },
      identity: "zhu"
    }]
  };
};