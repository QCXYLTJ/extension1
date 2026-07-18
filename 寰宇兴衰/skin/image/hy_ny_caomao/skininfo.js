'use strict';
window.qhly_import_safe(function (lib, game, ui, get, ai, _status) {
  var obj = {
    name: 'hy_ny_caomao',
    origin: {
      skill: {
        hy_ny_qianlong: {
          order: 0,
          content: '朕为天子，岂忍威权日去！<br>朕行之决矣，正使死又何惧！<br>权臣震主，竟视天子于无物！<br>假以时日，必讨司马一族！<br>若安司马于外，或则皇权可收。<br>暗恤忠君之士，以待破局之机。'
        },
        hy_ny_fensi: {
          order: 1,
          content: '心忿无所表，下笔即成篇。<br>气幽但求醉，醒后寻复来。<br>卿当竭命纳忠，何为此逾矩之举！<br>朕继文帝风流，亦当效其权略。'
        },
        hy_ny_juejin: {
          order: 2,
          content: '朕宁拼一死，逆贼安敢一战！'
        },
        hy_ny_juetao: {
          order: 3,
          content: '朕安可坐受废辱，今日当与卿自出讨之！'
        },
        hy_ny_bilei: {
          order: 4,
          content: '少康诛寒浞以中兴，朕夷司马未尝不可！'
        },
        hy_ny_longyuan: {
          order: 5,
          content: ''
        },
        die: {
          order: 7,
          content: '纵不成身死，朕亦为太祖子孙，大魏君王……'
        }
      }
    },
    skin: {}
  };
  game.qhly_importSkinInfo(obj);
});