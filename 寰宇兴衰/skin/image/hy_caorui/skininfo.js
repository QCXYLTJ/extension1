'use strict';
window.qhly_import_safe(function (lib, game, ui, get, ai, _status) {
  var obj = {
    name: 'hy_caorui',
    origin: {
      skill: {
        hy_huituo: {
          order: 0,
          content: '富我大魏，扬我国威！<br>大展宏图，就在今日！'
        },
        hy_mingjian: {
          order: 1,
          content: '孰忠孰奸，朕尚能明辨！<br>你我推心置腹，岂能相负。'
        },
        hy_xingshuai: {
          order: 2,
          content: '聚群臣而嘉勋，隆天子之气运！<br>百年兴衰皆由人，不由天！'
        },
        die: {
          order: 4,
          content: '愧为人主，何颜见父……'
        }
      }
    },
    skin: {}
  };
  game.qhly_importSkinInfo(obj);
});