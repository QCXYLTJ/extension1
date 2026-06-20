import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
import Is from "./is.js";
//代码来源于雷佬，感谢雷佬给搬运
Object.assign(get, {
    skillIndicate(tipname, id) {
        const dibeijing = ui.create.div('.hokdibeijing', document.body);
        dibeijing.style.zIndex = 25;
        const skilltip = ui.create.div('.hok-skilltip', dibeijing);
        skilltip.innerHTML = tipname;
        const herf = document.getElementById(id);
        if (herf) {
            let left = herf.getBoundingClientRect().left;
            if (game.getIsPhone()) left += herf.offsetParent.offsetLeft;
            left += document.body.offsetWidth * 0.15;
            skilltip.style.left = left + 'px';
            skilltip.style.top = (herf.getBoundingClientRect().top + 30) + 'px';
        }
        dibeijing.listen(function (e) {
            e.stopPropagation();
            this.remove();
        });
    },
    skillTipsInfo(str1, str2) {
        var temp = '', numx = 1;
        while (numx != 10000) {
            temp += get.rand(1, 9) / numx;
            numx = numx * 10;
        }
        return "<a id='" + temp + "' style='color:unset' href=\"javascript:window.HOK.skillIndicate('" + str2 + "','" + temp + "');\">" + str1 + "※" + "</a>";
    },
    skillTagsInfo(str1, str2) {
        var temp = '', numx = 1;
        while (numx != 10000) {
            temp += get.rand(1, 9) / numx;
            numx = numx * 10;
        }
        return "<a id='" + temp + "' style='color:unset' href=\"javascript:window.HOK.skillIndicate('" + str2 + "','" + temp + "');\">" + str1 + "</a>";
    },
    playHistoryrecord(name, mode) {
        let num = lib.config.HoKwinrecord?.[name]?.[mode]?.win;
        if (num === undefined) num = 0;
        return num;
    },
    characterExploit(name) {
        let str1 = "",
            str2 = "";
        let list = lib.characterExploit[name];
        if (!list || !Array.isArray(list)) return lib.characterIntro[name];
        let num = get.playHistoryrecord(name, "identity");
        str1 += `<br>${HOK.skillTagsInfo(list[0], `${list[1]}`)}${true ? "(进行中)" : "(已完成)"}`;
        str2 += `<br>${HOK.skillTagsInfo(get.plainText(lib.characterTitle[name]),
            `获得条件：使用${get.translation(name)}获得100场身份模式游戏胜利
            <br>15场游戏胜利${num}/15
            <br>50场游戏胜利${num}/50
            <br>100场游戏胜利${num}/100`
        )}${true ? "(进行中)" : "(已完成)"}`;
        return `${lib.characterIntro[name]}<br><span class="yellowtext">武将战功</span>${str1}${str2}`;
    },
})
Object.assign(get.is, Is)
