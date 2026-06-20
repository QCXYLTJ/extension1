import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
import { check } from "./check.js";
Object.assign(game,{
    //代码参考太虚幻境，感谢太虚幻境制作组
    popupMessageTips(info) {
        var home = document.getElementById('hokmessagePopupHome');
        if (!home) {
            home = ui.create.div('#hokmessagePopupHome');
            document.body.appendChild(home);
            var setmessagePopupSize = function(){
                var screenWidth = ui.window.offsetWidth;
                var screenHeight = ui.window.offsetHeight;
                var whr = 2.4;
                var width;
                var height;
                if(screenWidth / whr > screenHeight){
                    height = screenHeight;
                    width = height * whr;
                }else{
                    width = screenWidth;
                    height = screenWidth/whr;
                }
                home.style.height = Math.round(height)+"px";
                home.style.width = Math.round(width)+"px";
            };
            setmessagePopupSize();
            var remessagePopupsize = function(){
                setTimeout(setmessagePopupSize,500);
            };
            lib.onresize.push(remessagePopupsize);
        }
        var div = ui.create.div('.hokmessagePopupDiv',home);
        var bg  = ui.create.div('.hokmessagePopupDivBg',div);
        var text  = ui.create.div('.hokmessagePopupDivText',info+'',div);
        setTimeout(function(){
            home.removeChild(div);
        },1600);
    },
    HoKrecordGameOver(name, win, player) {
      if (win !== true && win !== false) return;
      if (!lib.config.HoKwinrecord) lib.config.HoKwinrecord = {};
      var record = lib.config.HoKwinrecord[name];
      if (!record) {
        record = {};
        lib.config.HoKwinrecord[name] = record;
      }
      var recordMode = record[get.mode()];
      if (!recordMode) {
        recordMode = {};
        record[get.mode()] = recordMode;
      }
      if (win === true) {
        if (!recordMode.win) {
          recordMode.win = 0;
        }
        recordMode.win++;
      } else if (win === false) {
        if (!recordMode.lose) {
          recordMode.lose = 0;
        }
        recordMode.lose++;
      }
      game.saveConfig('HoKwinrecord', lib.config.HoKwinrecord);
    },
})
check();
