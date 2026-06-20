window.gl_init = function (lib, game, ui, get, ai, _status) {
  var list = lib.config.gelin.data;
  if (!list.includes('shanluzuode')) {
    game.gl_createDailog('有谁又知道造物主遗失的真名呢？');
    return;
  }
  window.xiangqv = {
    init: function () {
      galgame.sce('tianfangyetan1');
    },
    player: 'gl_shanluzuode',
    galgame: {
      "tianfangyetan1": [
      "gl_shanluzuode:愿万象保佑您，国王大人。",
      "sp:行了行了，免了那些繁琐的礼仪吧！你应该知道，你要做什么吧？:国王:格林笔记",
      "gl_shanluzuode:当然，成为您的妻子为您侍寝，然后第二天一早去断头台引颈就戮。",
      "sp:既然知道，那就赶紧过来躺下吧！:国王:格林笔记",
      "gl_shanluzuode:谨遵您的旨意，不过在此之前我想为您讲一个故事......"],

      "tianfangyetan2": [
      "gl_shanluzuode:很久很久以前，有一个富饶的国度叫做......"],

      "tianfangyetan3": [
      "gl_shanluzuode:那里有一个穷苦的孩子叫做......"],

      "tianfangyetan4": [
      "gl_shanluzuode:这天他遇到一个让他念念不忘的女子叫做......"],

      "tianfangyetan5": [
      "gl_shanluzuode:有个巫师蛊惑了阿拉丁......"],

      "tianfangyetan6": [
      "gl_shanluzuode:那个巫师要阿拉丁去神奇洞窟帮他拿......"],

      "tianfangyetan7": [
      "gl_shanluzuode:可怜的阿拉丁被困在神奇洞窟中......",
      "gl_shanluzuode:阿拉丁向灯神说出了他的第一个愿望......",
      "choose:逃离洞窟:成为王子:获得财富:迎娶茉莉"],

      "tianfangyetan8": [
      "gl_shanluzuode:邪恶的贾方为了拿到神灯，把阿拉丁沉入了海底......",
      "gl_shanluzuode:阿拉丁的第二个愿望......",
      "choose:没有许愿:逃出海底:杀死贾方:成为苏丹"],

      "tianfangyetan9": [
      "gl_shanluzuode:最终阿拉丁打败了邪恶的贾方......",
      "gl_shanluzuode:阿拉丁对灯神说出了第三个愿望......",
      "choose:成为王子:给灯神自由:迎娶茉莉:成为苏丹:废除法令"],

      "tianfangyetan10": [
      "sp:客官，您还好吗？:路人甲:格林笔记",
      "gl_shanluzuode:嗯？我刚刚似乎睡着了呢......有什么事吗？",
      "sp:有个叫做莎士比亚的人找您，似乎有急事呢。:路人甲:格林笔记",
      "gl_shanluzuode:看来，又有一场浩劫要来了啊......"]

    },
    pack: {
      character: {
        "gl_shanluzuode": ["female", "shen", 4, [],
        ["ext:格林笔记/character/gl_shanluzuode.jpg"]]

      },
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
            galgame.sce('tianfangyetan2');
            'step 1';
            game.prompt('那个国家的名字是？', function (str) {
              if (str != '阿格拉巴') {
                event.goto(18);
              }
              game.resume();
            }, true);
            game.pause();
            'step 2';
            galgame.sce('tianfangyetan3');
            'step 3';
            game.prompt('那个孩子的名字是？', function (str) {
              if (str != '阿拉丁') {
                event.goto(18);
              }
              game.resume();
            }, true);
            game.pause();
            'step 4';
            galgame.sce('tianfangyetan4');
            'step 5';
            game.prompt('那名女子的名字是？', function (str) {
              if (str != '茉莉' && str != '茉莉公主') {
                event.goto(18);
              }
              game.resume();
            }, true);
            game.pause();
            'step 6';
            galgame.sce('tianfangyetan5');
            'step 7';
            game.prompt('那个巫师的名字叫做？', function (str) {
              if (str != '贾方') {
                event.goto(18);
              }
              game.resume();
            }, true);
            game.pause();
            'step 8';
            galgame.sce('tianfangyetan6');
            'step 9';
            game.prompt('那个巫师要阿拉丁去拿？', function (str) {
              if (str != '神灯') {
                event.goto(18);
              }
              game.resume();
            }, true);
            game.pause();
            'step 10';
            galgame.sce('tianfangyetan7');
            'step 11';
            if (result.bool != '成为王子') {
              event.goto(18);
            }
            'step 12';
            galgame.sce('tianfangyetan8');
            'step 13';
            if (result.bool != '没有许愿') {
              event.goto(18);
            }
            'step 14';
            galgame.sce('tianfangyetan9');
            'step 15';
            if (result.bool != '给灯神自由') {
              event.goto(18);
            }
            'step 16';
            game.gl_setData('gl_shanluzuode');
            galgame.sce('tianfangyetan10');
            'step 17';
            game.over();
          }
        }
      },
      translate: {}
    },
    beyond: []
  };
};