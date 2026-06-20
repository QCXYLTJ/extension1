import { lib, game, ui, get, ai, _status } from "../../../../../noname.js"
const Player = {
    /**
      * 瞬发技，搬运至【时空枢纽》扩展，感谢帷幕大佬，已获得搬运许可
      * @param { string } skill
    */
    initShunfaji(skill) {
        let player = this;
        if (!this.isUnderControl(true)) return;
        let info = lib.skill[skill];
        if (!info) return;
        if (info.clickable) {
            let node = ui.create.div(".shunfajiButton", this);
            let button = ui.create.div(".skillName", node);
            button.link = skill;
            let skillitem = ui.create.div(".skillitem", button);
            let skillitemChild = ui.create.div(".skillitem-child", button);
            skillitem.innerHTML = get.translation(skill);
            skillitemChild.innerHTML = get.translation(skill);
            button.addEventListener(lib.config.touchscreen ? "touchend" : "click", function () {
                if (player.hasSkill(skill, true, true, false)) {
                    if (info.clickable) {
                        if (!info.clickableFilter(player)) {
                            player.say(`瞬发技【${get.translation(skill)}》当前不可发动！！！`);
                            console.log(`瞬发技【${get.translation(skill)}》当前不可发动！！！`);
                            return;
                        }
                        info.clickable(player);
                    }
                } else {
                    button.delete();
                }
            });
        }
    },
    /**
      * 韵律技
      * @param { string } skill
    */
    changeRhythmSkill(skill) {
        let info = get.info(skill),
            rhythm = info.rhythmSkill;
        if (typeof rhythm == "function") rhythm(this, skill);
        else if (rhythm == "number") this.addMark(skill, 1, false);
        else this.storage[skill] = !this.storage[skill];
        game.broadcastAll(
            function (player, skill) {
                player.$changeRhythmSkill(skill);
            },
            this,
            skill
        );
        var next = game.createEvent('changeRhythmSkill');
        next.setContent('changeRhythmSkill');
        next.player = this;
        next.skill = skill;
    },
    $changeRhythmSkill(skill) {
        var mark = this.marks[skill];
        if (mark) {
            if (lib.skill[skill].$rhythmSkill) {
                lib.skill[skill].$rhythmSkill(skill, this);
                return;
            }
            // @ts-ignore
            if (typeof mark.firstChild.reversed != "number") {
                // @ts-ignore
                mark.firstChild.reversed = 0;
            }
            // @ts-ignore
            mark.firstChild.reversed += 180;
            // @ts-ignore
            mark.firstChild.style.transform = "rotate(" + parseFloat(mark.firstChild.reversed) + "deg)";
        }
    },
    /**
      * 选择数字
      * @param { any } 
    */
    chooseToQimou(...args) {
        var next = game.createEvent('chooseToQimou');
        next.player = this;
        next.controls = [];
        for (var arg of args) {
            if (typeof arg == 'string') {
                next.prompt = arg;
            } else if (Array.isArray(arg)) {
                if (arg.length == 1) next.range = [0, arg[0]].sort((a, b) => a - b);
                else next.range = [Math.min(...arg), Math.max(...arg)];
            } else if (typeof arg == 'number') {
                if (!next.base) next.base = arg;
                else next.init = arg;
            } else if (arg === true) {
                next.forced = arg;
            } else if (typeof arg === 'function') {
                next.filter = arg;
            }
        }
        if (!next.base || next.base <= 0) next.base = 1;
        if (next.init < next.range[0]) next.init = next.range[0];
        if (next.init > next.range[1]) next.init = next.range[1];
        next.setContent('chooseToQimou');
        next._args = args;
        return next;
    },
    /**
      * 点燃牌
    */
    igniteCards() {
        let next = game.createEvent('igniteCards');
        next.player = this;
        for (let i = 0; i < arguments.length; i++) {
            if (get.itemtype(arguments[i]) == 'player') {
                next.source = arguments[i];
            }
            else if (get.itemtype(arguments[i]) == 'cards') {
                next.cards = arguments[i].slice(0);
            }
            else if (get.itemtype(arguments[i]) == 'card') {
                next.cards = [arguments[i]];
            }
            else if (arguments[i] == 'notBySelf') {
                next.notBySelf = true;
            }
        }
        if (next.cards == undefined) _status.event.next.remove(next);
        next.setContent('igniteCards');
        return next;
    },
    /**
      * 护甲牌
    */
    gainHujiaCards(num) {
        var next = game.createEvent('gainHujiaCards');
        next.player = this;
        next.num = num ?? 1;
        next.setContent('gainHujiaCards');
        return next;
    },
    /**
      * 护甲牌
    */
    changeHujiaCards() {
        let next = game.createEvent('changeHujiaCards');
        next.player = this;
        for (let i = 0; i < arguments.length; i++) {
            if (get.itemtype(arguments[i]) == 'player') {
                next.source = arguments[i];
            }
            else if (get.itemtype(arguments[i]) == 'cards') {
                next.cards = arguments[i].slice(0);
            }
            else if (get.itemtype(arguments[i]) == 'card') {
                next.cards = [arguments[i]];
            }
            else if (arguments[i] == 'notBySelf') {
                next.notBySelf = true;
            }
        }
        if (next.cards == undefined) _status.event.next.remove(next);
        next.setContent('changeHujiaCards');
        return next;
    },
    /**
      * 护甲牌
    */
    getHujiaCards() {
        return this.getCards("h", card => card.hasGaintag("hujiaCards"));
    },
    /**
      * target & control
    */
    chooseTargetControl(...args) {
        var next = game.createEvent('chooseTargetControl')
        next.player = this;
        if (args.length == 1 && get.objtype(args[0]) == 'object') {
            for (var key in args[0]) {
                next[key] = args[0][key];
            }
        }
        else for (var arg of args)
            if (get.itemtype(arg) == 'dialog') next.dialog = arg
            else if (typeof arg == 'number') next.selectTarget = [arg, arg]
            else if (typeof arg == 'string')
                if (next.prompt) next.prompt2 = arg
                else next.prompt = arg
            else if (get.itemtype(arg) == 'select') next.selectTarget = arg
            else if (Array.isArray(arg)) next.createDialog = arg
            else if (typeof arg == 'boolean') next.forced = arg
            else if (typeof arg == 'function')
                if (!next.control) next.control = arg
                else if (!next.processAI) next.processAI = arg
                else next.filterTarget = arg
        if (!next.selectTarget) next.selectTarget = [1, 1]
        if (get.itemtype(next.dialog) == 'dialog') next.closeDialog = true
        else if (!next.dialog && Array.isArray(next.createDialog)) {
            next.dialog = ui.create.dialog.apply(this, next.createDialog)
            next.closeDialog = true
        }
        else if (!next.dialog && (next.prompt || next.prompt2)) {
            var createDialog = []
            if (next.prompt) createDialog.push(next.prompt)
            if (next.prompt2) createDialog.push(`<div class='text center'>${next.prompt2}</div>`)
            next.dialog = ui.create.dialog.apply(this, createDialog)
            next.closeDialog = true
        }
        else if (!next.dialog) {
            var str = '<div class=`text center`>请选择'
            if (next.selectTarget[0] == next.selectTarget[1]) str += get.cnNumber(next.selectTarget[0], true)
            else str += get.cnNumber(next.selectTarget[0], true) + '至' + get.cnNumber(next.selectTarget[1], true)
            str += '名角色</div>'
            next.dialog = ui.create.dialog.apply(this, [str])
            next.closeDialog = true
        }
        if (typeof next.forced != 'boolean') next.forced = false
        if (next.isMine() == false && next.dialog) next.dialog.style.display = 'none'
        if (!next.control) next.control = () => ['unchange', 'ok']
        if (!next.filterTarget) next.filterTarget = () => true
        next.setContent('chooseTargetControl')
        next._args = args;
        return next
    },
};
export default Player;
