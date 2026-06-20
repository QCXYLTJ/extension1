lib.config.characters.add('随笔录');//QQQ
if (config.ysblgfsl) {
    Reflect.defineProperty(lib, 'group', {
        get() {
            return ['shen', 'wei', 'shu', 'wu', 'qun', 'jin'];
        },
        set() {
        },
    });
    lib.skill._ysblgfsl = {
        trigger: {
            global: 'gameStart',
            player: 'enterGame',
        },
        forced: true,
        popup: false,
        silent: true,
        priority: 100001,
        filter(event, player) {
            var mode = get.mode();
            if (mode != 'guozhan') {
                return !lib.group.includes(player.group);
            }
            if (mode == 'guozhan') {
                if (lib.character[player.name1][1] == 'ye') return false;
                if (lib.character[player.name2][1] == 'ye') return false;
                return !lib.group.includes(lib.character[player.name1][1]) || !lib.group.includes(lib.character[player.name2][1]);
            }
        },
        content() {
            'step 0'
            //game.showIdentity(true);
            var list = lib.group.slice(1, 6);
            player.chooseControl(list).set('prompt', '请选择替换的势力').set('ai', function () {
                return list.randomGet();
            });
            'step 1'
            var mode = get.mode();
            if (mode != 'guozhan') player.group = result.control;
            else {
                lib.character[player.name1][1] = result.control;
                lib.character[player.name2][1] = result.control;
            }
        },
    };
}
HTMLDivElement.prototype.ysblbf = function (bg, pos, time, func) {
    var that = this;
    game.broadcastAll(function (that) {
        var img = document.createElement('div');
        img.setBackgroundImage(bg + '?' + Math.random());
        if (pos && typeof pos == 'object') {
            for (var i in pos) {
                img.style[i] = pos[i];
            }
        }
        img.style.backgroundSize = 'cover';
        that.appendChild(img);
        setTimeout(function () {
            if (func) func(img);
            else img.delete();
        }, time);
    }, that);
},  //借用了综漫季刊的代码,特此感谢
    lib.skill._ysblcharukapai = {
        trigger: {
            global: ["gameStart"],
        },
        firstDo: true,
        silent: true,
        forced: true,
        fixed: true,
        superCharlotte: true,
        charlotte: true,
        forced: true,
        filter(event, player) {
            if (player != game.me) return false;
            if (lib.config.extension_随笔录_ycharukapai != "1" && lib.config.extension_随笔录_ycharukapai != "2" && lib.config.extension_随笔录_ycharukapai != "3") return false;
            return true;
        },
        content() {
            'step 0'
            var list = [];
            for (var i in lib.card) {
                if (lib.card[i].mode && lib.card[i].mode.includes(get.mode()) == false) continue;
                if (lib.card[i].vanish || lib.card[i].destroy) continue;
                if (lib.card[i].destroy) continue;
                if (typeof filter == 'function' && !filter(i)) continue;
                if (lib.config.bannedcards.includes(i)) continue;
                if (!lib.translate[i + '_info']) continue;
                list.push(i);
            }
            list.remove('pss_stone');
            list.remove('pss_scissor');
            list.remove('pss_paper');
            list.remove('zhengsu_leijin');
            list.remove('zhengsu_bianzhen');
            list.remove('zhengsu_mingzhi');
            list.remove('cooperation_damage');
            list.remove('cooperation_discard');
            list.remove('cooperation_use');
            list.remove('cooperation_draw');
            list.remove('feichu_equip1');
            list.remove('feichu_equip2');
            list.remove('feichu_equip3');
            list.remove('feichu_equip4');
            list.remove('feichu_equip5');
            list.remove('feichu_equip6');
            list.remove('feichu_equip1');
            list.remove('disable_judge');
            if (!list.length) {
                event.finish();
                return;
            }
            var listxx = list.randomGet();
            if (lib.config.extension_随笔录_ycharukapai == "1") {
                var ysblnum = Math.ceil(ui.cardPile.childNodes.length * 0.3);
            }
            if (lib.config.extension_随笔录_ycharukapai == "2") {
                var ysblnum = Math.ceil(ui.cardPile.childNodes.length * 0.4);
            }
            if (lib.config.extension_随笔录_ycharukapai == "3") {
                var ysblnum = Math.ceil(ui.cardPile.childNodes.length * 0.5);
            }
            for (var i = 1; i < ysblnum; i++) {
                var card = game.createCard2(listxx);
                listxx = list.randomGet();
                ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
            }
        },
    },
    lib.skill._ysblquanjutupiangif = {
        trigger: {
            global: ["gameStart"],
            player: ['enterGame'],
        },
        firstDo: true,
        silent: true,
        forced: true,
        fixed: true,
        superCharlotte: true,
        charlotte: true,
        filter(event, player) {
            var num0 = 0;
            for (var i in lib.characterPack['随笔录']) {
                if (i == player.name) {
                    num0++;
                }
            };
            if (num0 == 0 && get.mode() != 'guozhan') return false;
            return true;
            if (lib.config.extension_随笔录_ykamiantexiao != "1" && lib.config.extension_随笔录_ykamiantexiao != "2") return false;
        },
        content() {
            if (lib.config.extension_随笔录_ykamiantexiao == "1") {
                player.node.avatar.ysblbf('extension/随笔录/sucai/萤火.gif', {
                    width: "100%",
                    height: "100%",
                }, 1000000000);
            }
            if (lib.config.extension_随笔录_ykamiantexiao == "2") {
                player.node.avatar.ysblbf('extension/随笔录/sucai/樱花.gif', {
                    width: "100%",
                    height: "100%",
                }, 1000000000);
            }
        },
    },
    lib.element.player.initysbl = function (character, character2, skill, update) {
        if (typeof character == 'string' && !lib.character[character]) {
            lib.character[character] = get.character(character);
        }
        if (typeof character2 == 'string' && !lib.character[character2]) {
            lib.character[character2] = get.character(character2);
        }
        if (!lib.character[character]) return;
        if (get.is.jun(character2)) {
            var tmp = character;
            character = character2;
            character2 = tmp;
        }
        if (character2 == false) {
            skill = false;
            character2 = null;
        }
        var info = lib.character[character];
        if (!info) {
            info = ['', '', 1, [], []];
        }
        if (!info[4]) {
            info[4] = [];
        }
        var skills = info[3].slice(0);
        //	this.clearSkills(true);
        this.classList.add('fullskin');
        if (!game.minskin && get.is.newLayout() && !info[4].includes('minskin')) {
            this.classList.remove('minskin');
            this.node.avatar.setBackground(character, 'character');
        }
        else {
            this.node.avatar.setBackground(character, 'character');
            if (info[4].includes('minskin')) {
                this.classList.add('minskin');
            }
            else if (game.minskin) {
                this.classList.add('minskin');
            }
            else {
                this.classList.remove('minskin');
            }
        }
        var hp1 = get.infoHp(info[2]);
        var maxHp1 = get.infoMaxHp(info[2]);
        var hujia1 = get.infoHujia(info[2]);
        this.node.avatar.show();
        this.node.count.show();
        this.node.equips.show();
        this.name = character;
        this.name1 = character;
        this.sex = info[0];
        this.group = info[1];
        this.hp = hp1;
        this.maxHp = maxHp1;
        this.hujia = hujia1;
        this.node.intro.innerHTML = lib.config.intro;
        this.node.name.dataset.nature = get.groupnature(this.group);
        lib.setIntro(this);
        this.node.name.innerHTML = get.slimName(character);
        if (this.classList.contains('minskin') && this.node.name.querySelectorAll('br').length >= 4) {
            this.node.name.classList.add('long');
        }
        if (info[4].includes('hiddenSkill') && !this.noclick) {
            if (!this.hiddenSkills) this.hiddenSkills = [];
            this.hiddenSkills.addArray(skills);
            skills = [];
            this.classList.add(_status.video ? 'unseen_v' : 'unseen');
            this.name = 'unknown';
            if (!this.node.name_seat && !_status.video) {
                this.node.name_seat = ui.create.div('.name.name_seat', get.verticalStr(get.translation(this.name)), this);
                this.node.name_seat.dataset.nature = get.groupnature(this.group);
            }
            this.sex = 'male';
            //this.group='unknown';
            this.storage.nohp = true;
            skills.add('g_hidden_ai');
        }
        if (character2 && lib.character[character2]) {
            var info2 = lib.character[character2];
            if (!info2) {
                info2 = ['', '', 1, [], []];
            }
            if (!info2[4]) {
                info2[4] = [];
            }
            this.classList.add('fullskin2');
            this.node.avatar2.setBackground(character2, 'character');
            this.node.avatar2.show();
            this.name2 = character2;
            var hp2 = get.infoHp(info2[2]);
            var maxHp2 = get.infoMaxHp(info2[2]);
            var hujia2 = get.infoHujia(info2[2]);
            this.hujia += hujia2;
            var double_hp;
            if (_status.connectMode || get.mode() == 'single') {
                double_hp = 'pingjun';
            }
            else {
                double_hp = get.config('double_hp');
            }
            switch (double_hp) {
                case 'pingjun': {
                    this.maxHp = Math.floor((maxHp1 + maxHp2) / 2);
                    this.hp = Math.floor((hp1 + hp2) / 2);
                    this.singleHp = ((maxHp1 + maxHp2) % 2 === 1);
                    break;
                }
                case 'zuidazhi': {
                    this.maxHp = Math.max(maxHp1, maxHp2);
                    this.hp = Math.max(hp1, hp2);
                    break;
                }
                case 'zuixiaozhi': {
                    this.maxHp = Math.min(maxHp1, maxHp2);
                    this.hp = Math.min(hp1, hp2);
                    break;
                }
                case 'zonghe': {
                    this.maxHp = maxHp1 + maxHp2;
                    this.hp = hp1 + hp2;
                    break;
                }
                default: {
                    this.maxHp = maxHp1 + maxHp2 - 3;
                    this.hp = hp1 + hp2 - 3;
                };
            }
            this.node.count.classList.add('p2');
            if (info2[4].includes('hiddenSkill') && !this.noclick) {
                if (!this.hiddenSkills) this.hiddenSkills = [];
                this.hiddenSkills.addArray(info2[3]);
                this.classList.add(_status.video ? 'unseen2_v' : 'unseen2');
                this.storage.nohp = true;
                skills.add('g_hidden_ai');
            }
            else skills = skills.concat(info2[3]);
            this.node.name2.innerHTML = get.slimName(character2);
        }
        if (this.storage.nohp) {
            this.storage.rawHp = this.hp;
            this.storage.rawMaxHp = this.maxHp;
            this.hp = 1;
            this.maxHp = 1;
            this.node.hp.hide();
        }
        if (skill != false) {
            for (var i = 0; i < skills.length; i++) {
                this.addSkill(skills[i]);
            }
            this.checkConflict();
        }
        lib.group.add(this.group);
        if (this.inits) {
            for (var i = 0; i < lib.element.player.inits.length; i++) {
                lib.element.player.inits[i](this);
            }
        }
        if (this._inits) {
            for (var i = 0; i < this._inits.length; i++) {
                this._inits[i](this);
            }
        }
        if (update !== false) this.update();
        return this;
    };
lib.arenaReady.push(function () {
    let ysblscBtn = document.body.querySelector('#ysblscBtn');
    //  let ysblscBg = document.body.querySelector('#ysblscBg');
    if (config.extYsblsc_setBtnSize) {
        ysblscBtn.style.width = Math.round(parseFloat(config.extYsblsc_setBtnSize) * 56) + 'px';
        ysblscBtn.style.height = Math.round(parseFloat(config.extYsblsc_setBtnSize) * 56) + 'px';
    }
    if (config.extYsblsc_setBtnPosX && config.extYsblsc_setBtnPosY) {
        ysblscBtn.style.left = parseInt(config.extYsblsc_setBtnPosX) + 'px';
        ysblscBtn.style.top = parseInt(config.extYsblsc_setBtnPosY) + 'px';
    }
    if (config.extYsblsc_enableBtnDrag) {
        if (lib.config.touchscreen) {
            ysblscBtn.addEventListener('touchstart', onYsblscBtnTouchStart);
            function onYsblscBtnTouchStart(e) {
                var ol = e.touches[0].clientX - ysblscBtn.offsetLeft;
                var ot = e.touches[0].clientY - ysblscBtn.offsetTop;
                document.addEventListener('touchmove', onYsblscBtnTouchMove);
                document.addEventListener('touchend', onYsblscBtnTouchEnd);
            }
            function onYsblscBtnTouchMove(e) {
                var ol = e.touches[0].clientX - ysblscBtn.offsetLeft;
                var ot = e.touches[0].clientY - ysblscBtn.offsetTop;
                var oleft = parseInt(e.touches[0].clientX);
                var otop = parseInt(e.touches[0].clientY);
                ysblscBtn.style.left = oleft + 'px';
                ysblscBtn.style.top = otop + 'px';
            }
            function onYsblscBtnTouchEnd() {
                game.saveConfig('extension_随笔录_extYsblsc_setBtnPosX', ysblscBtn.style.left.replace('px', ''));
                game.saveConfig('extension_随笔录_extYsblsc_setBtnPosY', ysblscBtn.style.top.replace('px', ''));
                document.removeEventListener('touchmove', onYsblscBtnTouchMove);
                document.removeEventListener('touchend', onYsblscBtnTouchEnd);
            }
        } else {
            ysblscBtn.addEventListener('mousedown', onYsblscBtnMouseDown);
            function onYsblscBtnMouseDown(e) {
                var ol = e.clientX - ysblscBtn.offsetLeft;
                var ot = e.clientY - ysblscBtn.offsetTop;
                document.addEventListener('mousemove', onYsblscBtnMouseMove);
                document.addEventListener('mouseup', onYsblscBtnMouseUp);
            }
            function onYsblscBtnMouseMove(e) {
                ysblscBtn.style.left = parseInt(e.clientX/* - ol*/) + 'px';
                ysblscBtn.style.top = parseInt(e.clientY/* - ot*/) + 'px';
            }
            function onYsblscBtnMouseUp() {
                game.saveConfig('extension_随笔录_extYsblsc_setBtnPosX', ysblscBtn.style.left.replace('px', ''));
                game.saveConfig('extension_随笔录_extYsblsc_setBtnPosY', ysblscBtn.style.top.replace('px', ''));
                document.removeEventListener('mousemove', onYsblscBtnMouseMove);
                document.removeEventListener('mouseup', onYsblscBtnMouseUp);
            }
        }
    }
    /*   ysblscBtn.addEventListener('click', function (event) {
           refreshWifeInfo();
       });*/
    ysblscBtn.style.display = 'block';
    //    if (config.extYsblsc_portraitMode) {
    /*     ysblscBg.style.transform = "translate(+9990%, +9990%) scale(1.35) rotate(-90deg)";*/
    //    }
    ysblscBtn.addEventListener('click', function (event) {
        //  game.over(true);
        //   'step 0'
        //  ui.backgroundMusic.pause();
        if (!game.me.storage.diange) {
            game.me.storage.diange = [];
        }
        var str = 'extension/随笔录/桌宠专用音乐库';
        game.getFileList(str, (folders, files) => {
            if (files && files.length) {
                files.forEach(n => {
                    var ext = n.substring(n.lastIndexOf('.'));
                    if (ext == '.mp3' || '.MP3' || '.Mp3' || '.mP3') game.me.storage.diange.push(n);
                });
            };
        });
        //   'step 1'
        var name = game.me.storage.diange.randomGet(1); if (name) {
            ui.backgroundMusic.src = str + '/' + name;
        }
        else {
            ui.backgroundMusic.src = 'extension/随笔录/music/暗色.mp3';
        }
        if (lib.config.extension_随笔录_ygaintttt == "2") {
            // game.me.draw();         
            var listb = get.typeCard('trick').randomGets(Infinity);
            var listc = [];
            listb.addArray(get.typeCard('basic').randomGets(Infinity));
            listb.addArray(get.typeCard('equip').randomGets(Infinity));
            listb.addArray(get.typeCard('spell').randomGets(Infinity));
            listb.addArray(get.typeCard('delay').randomGets(Infinity));
            listb.addArray(get.typeCard('zhenfa').randomGets(Infinity));
            listb.addArray(get.typeCard('land').randomGets(Infinity));
            listb.addArray(get.typeCard('jiguan').randomGets(Infinity));
            listb.addArray(get.typeCard('jiqi').randomGets(Infinity));
            listc = listb.randomGets(3);
            var carda = game.createCard(listc[0]);
            game.me.gain(carda, 'gain2');
            var cardb = game.createCard(listc[1]);
            game.me.gain(cardb, 'gain2');
            var cardc = game.createCard(listc[2]);
            game.me.gain(cardc, 'gain2');
        }
        if (lib.config.extension_随笔录_yhuanhuazhiwutt == "2") {
            game.me.equip(game.createCard('yhuanhuazhiwuw'));
        }
        //   var ext=name.substring(name.lastIndexOf('.'));
        //    var song=name.replace(ext,'');
    });
});
if (lib.config.extension_随笔录_y_zhenglitt) {
    lib.sort.card2 = function (a, b) {
        if (a.name != b.name) return lib.sort.card(a.name, b.name);
        else if (a.suit != b.suit) return lib.suit.indexOf(a.suit) - lib.suit.indexOf(b.suit);
        else if (a.number != b.number) return a.number - b.number;
        else if (a.nature != b.nature) return a.nature - b.nature;
        else return parseInt(a.cardid) - parseInt(b.cardid);
    };
    lib.skill._yzhenglit = {
        forced: true,
        charlotte: true,
        firstDo: true,
        priority: Infinity,
        trigger: {
            player: ["gainAfter", "loseAfter"]
        },
        content() {
            "step 0"
            var sort = function (a, b) {
                return -lib.sort[player.useCard2 ? "rd_duel" : "card2"](a, b);
            };
            var sort2 = function (a, b) {
                var p1 = get.position(a);
                var p2 = get.position(b);
                if (p1 != p2) {
                    if (p1 == "h") return 1;
                    else return -1;
                }
                return sort(a, b);
            };
            var cards = player.getCards("hs");
            if (cards.length > 1) {
                game.addVideo('lose', player, [get.cardsInfo(cards), [],
                []
                ]);
                for (var i = 0; i < cards.length; i++) {
                    cards[i].goto(ui.special);
                }
                cards.sort(sort2);
                player.directgain(cards, false);
            }
        },
        filter(event, player) {
            if (lib.config.extension_随笔录_y_zhenglitt == "false") return false;
            if (player == game.me && player.countCards("h")) {
                var j = function (a, b) {
                    var n1 = a.length;
                    var n2 = b.length;
                    if (n1 != n2) return 0;
                    for (var i = 0; i < n1; i++) {
                        if (a[i] != b[i]) return 0;
                    }
                    return 1;
                };
                var cards = player.getCards("h");
                var ca = cards.slice(0);
                ca.sort(function (a, b) {
                    return lib.sort[player.useCard2 ? "rd_duel" : "card2"](a, b);
                });
                return j(ca, cards) != 1;
            }
        },
    };
}