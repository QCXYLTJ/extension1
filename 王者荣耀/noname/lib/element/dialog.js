import { lib, game, ui, get, ai, _status } from "../../../../../noname.js"
export async function dialog() {
    //——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    ui.create.mobileDialog = class mobileDialog {
        constructor(event, skill) {
            this.event = event;
            this.skill = skill;
            this.player = get.player();
            this.init();
        }
        init() {
            const dialog = ui.create.dialog(),
                event = this.event;
            dialog.id = 'mobiledialog';
            const skillTitle = ui.create.div('.game_skill_title', dialog),
                arrow = new Image();
            skillTitle.classList.add('ssTitle');
            skillTitle.innerHTML = get.translation(this.skill);
            arrow.classList.add('game_skill_arrow');
            arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
            /*
            arrow.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', () => {
                dialog.classList.toggle("open");
            });
            */
            skillTitle.appendChild(arrow);
            event.dialog = dialog;
            this.dialog = event.dialog;
        }
        area() {
            const event = this.event,
                dialog = this.dialog,
                idlist = event.idlist,
                imglist = event.imglist,
                heroid = event.imglist ? Math.floor(event.imglist[0] / 100) : 0,
                titlelist = event.titlelist,
                deslist = event.deslist;
            dialog.classList.add('noupdate');
            if (!event.isMine()) dialog.style.display = 'none';
            dialog.style.height = 200 + 'px';
            for (let i = 0; i < 4; i++) {
                const area = ui.create.div('.sgs-xingshangarea', dialog.contentContainer);
                area.style.left = (22 + (i % 2) * 30.8) + '%';
                area.style.top = (i > 1 ? 46 : 3) + '%';
                area.link = idlist ? idlist[i] : i;
                dialog.buttons.add(area);
                area.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                if (deslist) {
                    const des = ui.create.div('.xingshang-skillTips', area);
                    des.innerHTML = deslist[i];
                    if (event.desStyle) {
                        for (const key in event.desStyle) {
                            des.style[key] = event.desStyle[key];
                        }
                    }
                }
                if (imglist) {
                    const img = ui.create.div('.heroimg', area);
                    img.style.backgroundImage = `url(${`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${heroid}/${imglist[i]}.png`})`;
                    if (event.imgStyle) {
                        for (const key in event.imgStyle) img.style[key] = event.imgStyle[key];
                    }
                }
                if (titlelist) {
                    const name = ui.create.div('.skillName', area);
                    name.innerHTML = titlelist[i];
                    if (event.nameStyle) {
                        for (const key in event.nameStyle) name.style[key] = event.nameStyle[key];
                    }
                }
            }
        }
        des() {
        }
        addSkills(skills) {
            const player = this.player,
                dialog = this.dialog;
            dialog.buttons.forEach((button, index) => {
                button.innerHTML = "";
                let node = ui.create.div(".skill-button", button);
                let skillitem = ui.create.div(".skillitem", node);
                skillitem.innerHTML = get.translation(skills[index]);
                let skillitemChild = ui.create.div(".skillitem-child", get.translation(skills[index]), node);
                let skillInfo = ui.create.div(".skillinfo", get.skillInfoTranslation(skills[index], player), node);
            });
        }
        tishi(tips) {
            const tishi = ui.create.div('.skillTishi', this.dialog);
            tishi.innerHTML = tips;
        }
        addTip() {
            let str = "",
                str2 = "",
                logvid = null;
            const color = new Map([
                ["r", "fire"],
                ["y", "yellow"],
                ["g", "green"],
                ["b", "blue"],
            ]);
            Array.from(arguments).forEach(value => {
                const itemtype = get.itemtype(value);
                if (itemtype == "player" || itemtype == "players") {
                    str += `<span class="bluetext">${get.translation(value)}</span>`;
                    str2 += get.translation(value);
                } else if (itemtype == "cards" || itemtype == "card" || (typeof value == "object" && value && value.name)) {
                    str += `<span class="yellowtext">${get.translation(value)}</span>`;
                    str2 += get.translation(value);
                } else if (typeof value == "object") {
                    if (value.parentNode == ui.historybar) logvid = value.logvid;
                    else {
                        str += get.translation(value);
                        str2 += get.translation(value);
                    }
                } else if (typeof value == "string") {
                    if (value[0] == "【" && value[value.length - 1] == "】") {
                        str += `<span class="greentext">${get.translation(value)}</span>`;
                        str2 += get.translation(value);
                    } else if (value[0] == "#") {
                        str += `<span class="${color.get(value[1]) || ""}text">${get.translation(value.slice(2))}</span>`;
                        str2 += get.translation(value.slice(2));
                    } else {
                        str += get.translation(value);
                        str2 += get.translation(value);
                    }
                } else {
                    str += value;
                    str2 += value;
                }
            });
            const node = ui.create.div('.skillTishi', this.dialog);
            node.innerHTML = str;
        }
    }
    //——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    ui.create.expansionDialog = class expansionDialog {
        constructor(name, content) {
            this.name = name;
            this.content = content;
            this.init();
        }
        init() {
            const dialog = ui.create.div('.dialog#mobiledialog', ui.window);
            dialog.classList.add('noupdate');
            dialog.style.height = 170 + 'px';
            const contentContainer = ui.create.div('.content', dialog)
            const skillName = ui.create.div('.sgs-quanjiname', contentContainer);
            skillName.innerText = this.name;
            const skillTitle = ui.create.div('.game_skill_title', dialog);
            this.dialog = dialog;
            this.skillTitle = skillTitle;
            this.contentContainer = contentContainer;
        }
        guanchao() {
            const dialog = this.dialog;
            const area = ui.create.div('.sgs-guanchaoarea', this.dialog);
            const tip = document.createElement('div');
            tip.classList.add('trigger-skillTips');
            tip.style.top = '20%';
            tip.style.fontSize = '15px';
            tip.style.textAlign = 'left';
            area.appendChild(tip);
            this.tip = tip;
            this.paiku();
            ui.window.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
                dialog.classList.remove('hidden')
                dialog.remove();
            });
        }
        quanji() {
            const area = ui.create.div('.sgs-quanjiarea', this.contentContainer);
            const areaOW = document.querySelector('.sgs-quanjiarea').offsetWidth;
            const dialog = this.dialog;
            const cards = this.content;
            for (let i = 0; i < cards.length; i++) {
                let smCard = ui.create.card(area, 'noclick').init(cards[i]);
                let cardOW = smCard.offsetWidth;
                if (game.getIsPhone()) smCard.classList.add('dui-mobile');
                smCard.style.left = (cardOW * cards.length < areaOW ? (cardOW * i) : (areaOW - cardOW) / (cards.length) * i) + 'px';
            }
            this.area = area;
            this.paiku();
            ui.window.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
                dialog.classList.remove('hidden')
                dialog.remove();
            });
        }
        paiku() {
            this.skillTitle.innerHTML = '<img src="extension/王者荣耀/image/game_skill_title/game_skill_tittle_pk.png">';
            const dialog = this.dialog;
            const arrow = new Image();
            arrow.classList.add('game_skill_arrow');
            arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
            this.skillTitle.appendChild(arrow);
            this.skillTitle.addEventListener("click", function () {
                if (dialog.classList.contains("open")) {
                    dialog.classList.remove('open');
                    arrow.style.transform = "rotate(0deg)";
                } else {
                    dialog.classList.add('open');
                    arrow.style.transform = "rotate(180deg)";
                }
            })
        }
        des() {
        }
        tishi(tips) {
            const tishi = ui.create.div('.skillTishi', this.dialog);
            tishi.innerHTML = tips;
        }
    }
}
