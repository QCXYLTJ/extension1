import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import './init.js';
export const config = {
  qq_group: { "name": "<div><button id=\"qq_group\" onclick=\"window.open('http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Sf4MlhkLR0ORapNJYMLEz659INilpJwk&authKey=jtT4tczILChg9OCmBGBYKThahisipZBNn%2FDVLykZRkg6ZEa5Wvsl0hcG13UeL9MD&noverify=0&group_code=741344791', '_blank');\">点击链接加入群聊【Iking和Sunny的求援群】</button> </div><br><font color='#FFFF00'>如果有意见或者bug或者想设计新的武将可以直接加群提出!</font><br>", "clear": true },
  yuri_checkNew: {
    name: "<samp id='点此查看更新公告'><strong>点此查看更新公告</strong></samp></body><style>#点此查看更新公告{animation:change 10s linear 0s infinite;font-family:xingkai;}@keyframes change{0% {color: #FF0000;}20%{color: #FFFF00;}40% {color: #00FFFF;60%{color: #8B00FF;}80%{color: #00FF00;}100%{color: #FF0000;}}</style>",
    clear: true,
    onclick() {
      try {
        game.YuriAndOtherShowNewPack = function () {
          //更新告示
          var YuriAndOther_update = [
          '/setPlayer/',
          '/setCard/',
          `跟进了一下新版本的无名杀,调整和新增了一些武将、卡牌、技能、机制、原画、皮肤,加强了一些武将,优化了一些AI,修复了一些bug……`,
          `新增了一个非常阴间的挑战(现在本扩展有两个挑战了);但是开着Sunny的<JoJo>v1.5就可能看不到,因为他现在有部分代码有锅,会把我一个window的属性覆盖,导致本扩展半个content.js加载不成功……`,
          `我发现不知为何,在v1.10.13无名杀里,本扩展的卡牌包即使加了<closable>标签也没法关,【编辑牌堆】也在演我.于是我把本扩展的卡牌包导入方式改成了原本可能更常见的调用game.import导入,现在可以随便关、也可以随便编辑牌堆了.`,
          `新增了一个对大家来说可能没啥用的按钮选项(详见本扩展的扩展页).`,
          'To be continued...'];

          //更新武将
          var YuriAndOther_players = [
          'syr_dzgGargantuar', 'syr_студентка', 'lll_lumusi', 'lll_aosheng', 'syr_diaochandongbai'];

          //更新卡牌
          var YuriAndOther_cards = [].
          map((card) => game.createCard2(card[2], card[0], card[1], card[3]));
          //加载
          var dialog = ui.create.dialog(
            '<span class="text center">' +
            '白河子与其他 ' + lib.extensionPack.白河子与其他.version + ' 更新内容' +
            '</span>', 'hidden');
          for (var i = 0; i < YuriAndOther_update.length; i++) {
            if (YuriAndOther_update[i] == '/setPlayer/') {
              if (YuriAndOther_players.length) dialog.addSmall([YuriAndOther_players, 'character']);
            } else
            if (YuriAndOther_update[i] == '/setCard/') {
              if (YuriAndOther_cards.length) dialog.addSmall([YuriAndOther_cards, 'card']);
            } else
            {
              var li = document.createElement('li');
              li.innerHTML = YuriAndOther_update[i];
              li.style.textAlign = 'left';
              dialog.content.appendChild(li);
            }
          }
          dialog.open();
          var hidden = false;
          if (!ui.auto.classList.contains('hidden')) {
            ui.auto.hide();
            hidden = true;
          }
          game.pause();
          var control = ui.create.control('确定', function () {
            dialog.close();
            control.close();
            if (hidden) ui.auto.show();
            game.resume();
          });
        };
        game.YuriAndOtherShowNewPack();
      }
      catch (e) {alert('打开更新公告时出问题了,请凭此截图找Iking反馈此bug');}
    }
  },
  yuri_shengming: {
    name: "作者声明",
    init: "1",
    intro: "点击查看作者声明",
    item: {
      "1": "<font style='color: rgb(255,175,0)'>查看声明</font>", "2": "本扩展的主要内容由Iking本人编写,而在角色、技能、卡牌、机制等方面引用了<JoJo>、<活动武将>、<极略>、<玄武江湖>、<天庭>、<阳光包>、<福瑞拓展>、<奥特物语>、<桃源幻梦>、<猫猫叹气>、<第叁幻界>等扩展的部分源码.关于被我引用的部分,一切应有的权利均属原作者所有.鉴于无名杀扩展和无名杀本体在理念上基本都是遵守GNU GPL3.0的开源项目(不过有些不开源的扩展可能不是),本人也按照GNU的GPL精神将本扩展开源分发,<giving you legal permission to copy,distribute and/or modify it>."
    }
  },
  yuri_laiyuan: {
    name: "角色来源",
    init: "1",
    intro: "点击查看角色来源",
    item: {
      "1": "<font style='color: rgb(255,190,0)'>角色来源</font>", "2": "<li>有很多角色来源为一些百合作品(这些角色的武将介绍里我都会写出处);<br><li>还有一些是欢乐三国杀或极略三国中的武将(其中有很多的技能代码是我自己写的,根据我所看到的技能描述);<br><li>还有三国杀原有武将的初版或旧版(或缝合版);<br><li>还有另一些我DIY的、有三国人物作为原型的武将;<br><li>还有B站的<三国杀>UP主;<br><li>还有一些与三国无关的人物;<br><li>还有几个Iking原创武将(这些武将的角色介绍一般都是好几段文字(大都出自我写的未发表的小说),并且她们当中有些人的原图用的是和她们无关的角色的图)."
    }
  },
  yuri_huanjing: {
    name: "运行环境",
    init: "1",
    intro: "点击查看扩展运行环境",
    item: {
      "1": "<font style='color: rgb(255,205,0)'>查看环境</font>", "2": "<li>较新的游戏版本(必需)<br><li>较新的游戏内核(必需,不然的话本扩展里有一些ES6才支持的写法(解构赋值、生成器函数、ES Module等)会报错)<br><li><font color='orange'>※<千幻聆音></font>扩展(可选)"
    }
  },
  yuri_other: {
    name: '其他',
    init: '1',
    intro: '点击查看其他有关本扩展的信息',
    item: {
      1: "<font style='color: rgb(255,220,0)'>其他</font>", 2: "<li>本扩展1.0版本的时候,武将可以在私服联机使用,需要使用<font color='orange'>※<一劳永逸></font>解除联机禁用扩展的限制;现在这个4.0版本嘛……我也不知道了,暂时没人和我联机玩.试试看,说不定能联？<br><li>使用<font color='orange'>※<千幻聆音></font>可以给本扩展的少部分武将换肤.<br><li>作者的QQ是754261629,QQ名也叫Iking.欢迎各位来骚扰我."
    }
  },
  sXS_sTM_yjtime: {
    name: `${get.prefixSpan('神')}许劭与${get.prefixSpan('水')}童溟的阴间时间`,
    init: false,
    intro: `<li><span style="color: #faecd1;nature:orangemm">此选项在挑战模式将强制开启哦.</span><li>开启此选项后,本扩展中的<${get.prefixSpan('神')}许劭>和<${get.prefixSpan('水')}童溟>在获得出牌阶段的技能时可优先获得Iking遴选出来的一点阴间技能.(关于此效果,最好结合<font color='orange'>※<极略></font>扩展和<font color='orange'>※<第叁幻界></font>扩展食用……)<li>此外,如果开启了此选项,${get.prefixSpan('水')}童溟<font color=\"#F0768B\"><b>专属技</b></font>【千仞】描述中的最后八个字<直到你的回合结束>将会被删去.(你甚至可以在牌局内通过反复开关此选项来反复修改${get.prefixSpan('水')}童溟的技能!)`
  },
  NOlqtq_quan: {
    name: '废掉类红爹〖驱黯〗技能',
    init: true,
    intro: `<li><span style="color: #faecd1;nature:orangemm">此选项在挑战模式将强制开启哦.</span><li>开启此选项后,类似<浪琴天阙>扩展中<红爹>的〖驱黯〗那样的技能将被强制废除.<br><br><span style="font-family: yuanli">【驱黯】一名其他角色发动技能或触发技能对其的询问时,你可以取消之并摸一张牌.</span>`
  },
  zhengzhanhougong: {
    name: '征战后宫',
    init: false,
    intro: '<征战后宫>是Iking制作的一个乱斗模式中的关卡.开启此选项后,如果不想要这个关卡了,要先关闭此选项,在乱斗模式中手动删除.'
  },
  mingzhuneizhan: {
    name: '名著内战',
    init: false,
    intro: '<名著内战>是Iking制作的一个乱斗模式中的关卡.开启此选项后,如果不想要这个关卡了,要先关闭此选项,在乱斗模式中手动删除.'
  }
};