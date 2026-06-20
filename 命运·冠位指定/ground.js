'use strict';
window.Sacredimport(function (lib, game, ui, get, ai, _status) {
   lib.skill._Fateground = {
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
         if (_status.Fateground == 'waterside' && player.name == 'Fate_MarthaRuler') return false;
         if (_status.Fateground == 'waterside' && player.name == 'Fate_JeanneArcher') return false;
         return ['Fate_MarthaRuler', 'Fate_JeanneArcher'].includes(player.name);
      },
      content() {
         switch (player.name) {
            case 'Fate_zhangjiao': _status.Fateground = 'sunshine'; break;
            case 'Fate_MarthaRuler': _status.Fateground = 'waterside'; break;
            case 'Fate_JeanneArcher': _status.Fateground = 'waterside'; break;
            case 'Fate_zhangjiao': _status.Fateground = 'burnning'; break;
            case 'Fate_zhangjiao': _status.Fateground = 'forest'; break;
            case 'Fate_NeroClaudius': _status.Fateground = 'city'; break;
            case 'Fate_BB': _status.Fateground = 'voidspace'; break;
            case 'Fate_Archetype_Earth': _status.Fateground = 'thousandyearcastle'; break;
         }
         if (ui.FGDInfo) ui.FGDInfo.innerHTML = '场地:' + get.translation(_status.Fateground);
      },
      ai: {
         order: 13,
         result: {
            player: 1,
         },
      },
   };
   lib.translate._Fateground = '场地作成';
   lib.translate._Fateground_info = '把场地改为有增益BUFF的类型';
   lib.translate.sunshine = '日光直射';
   lib.translate.waterside = '水边';
   lib.translate.burnning = '燃烧';
   lib.translate.forest = '森林';
   lib.translate.city = '城市';
   lib.translate.voidspace = '虚数空间';
   lib.translate.thousandyearcastle = '千年城';
});