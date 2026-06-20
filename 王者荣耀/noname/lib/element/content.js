import { lib, game, ui, get, ai, _status } from "../../../../../noname.js"
const Player = {
    /**
      * 韵律技
    */
    async changeRhythmSkill(event, trigger, player) {
        await event.trigger("changeRhythmSkill");
        const skill = event.skill;
        if (player.getStat("skill")[skill]) {
            delete player.getStat("skill")[skill];
        }
        else if (player.getStat('triggerSkill')[skill]) {
            delete player.getStat('triggerSkill')[skill];
        }
        game.log(player, "触发", "#g转韵", "，重置了", "#g【" + get.translation(skill) + "】", "的使用次数");
    },
    /**
      * 奇谋
    */
    chooseToQimou() {
        "step 0"
        var chooseButton = function (event, player) {
            var dialog = ui.create.dialog(event.prompt || "请调整以下数值", "hidden");
            if (event.prompt2) dialog.addText(event.prompt2);
            event.dialog = dialog;
            event.dialog.open();
            var index = event.init || event.range[0];
            var baseNumber = event.base || 1;
            event.result = { num: null, bool: false };
            var chooseBg = ui.create.div(".sgs-qimou-pcchoosebg", document.body);
            event.chooseBg = chooseBg;
            if (game.getIsPhone()) chooseBg.classList.add("mobile");
            var leftBtn = ui.create.div(".sgs-qimou-pcleft", chooseBg);
            leftBtn.style.filter = "grayscale(100%)";
            var rightBtn = ui.create.div(".sgs-qimou-pcright", chooseBg);
            var chooseType = ui.create.div(".sgs-qimou-pcchoosetype", chooseBg);
            chooseType.innerHTML = index;
            if (typeof index == "number") chooseType.classList.add("number");
            leftBtn.listen(function () {
                if (index == event.range[0]) return;
                index--;
                leftBtn.style.transform = "scale(0.7)";
                setTimeout(() => leftBtn.style.transform = "scale(1)", 200);
                if (index == event.range[0]) leftBtn.style.filter = "grayscale(100%)";
                else leftBtn.style.filter = "none";
                if (index == event.range[1]) rightBtn.style.filter = "grayscale(100%)";
                else rightBtn.style.filter = "none";
                chooseType.innerHTML = index;
            });
            rightBtn.listen(function () {
                if (index == event.range[1]) return;
                index++;
                rightBtn.style.transform = "scale(0.7)";
                setTimeout(() => rightBtn.style.transform = "scale(1)", 200);
                if (index == event.range[0]) leftBtn.style.filter = "grayscale(100%)";
                else leftBtn.style.filter = "none";
                if (index == event.range[1]) rightBtn.style.filter = "grayscale(100%)";
                else rightBtn.style.filter = "none";
                chooseType.innerHTML = index;
            })
            if (!event.forced) event.controls.add("cancel2");
            event.control = [];
            for (const control of event.controls) {
                const newControls = ui.create.control(control, function (link) {
                    if (link == "cancel2") {
                        event.result.bool = false;
                    } else {
                        event.result.bool = true;
                        event.result.num = index;
                        event.result.control = control;
                    }
                    chooseBg.remove();
                    game.resume();
                    _status.imchoosing = false;
                });
                event.control.add(newControls);
            }
        };
        if (event.isMine()) {
            chooseButton(event, player);
            game.pause();
            game.countChoose();
            event.choosing = true;
        } else if (event.isOnline()) {
            event.send();
        } else {
            if (event.chooseBg) event.chooseBg.remove();
            if (event.dialog) event.dialog.close();
            //if (event.tishi) event.tishi.remove();
            if (event.control) event.control.forEach(i => i.close())
            game.resume();
            event.choosing = false;
            _status.imchoosing = false;
            event.result = event.processAI(event.parent, player);
            event.finish();
        }
        "step 1"
        event.choosing = false;
        _status.imchoosing = false;
        if (event.dialog) event.dialog.close();
        //if (event.tishi) event.tishi.remove();
        if (event.control) event.control.forEach(i => i.close())
        if (event.result.control == "cancel2") {
            event.finish();
            return;
        }
        event.resume();
    },
    /**
      * 点燃牌
    */
    async igniteCards(event, trigger, player) {
        const cards = event.cards;
        player.addGaintag(cards, "igniteCards");
        if (event.log != false) {
            if (event.source) game.log(player, "的", get.cnNumber(cards.length), "张牌被", event.source, "#r点燃");
            else game.log(player, "#r点燃", "了", get.cnNumber(cards.length), "张牌");
        }
        await event.trigger("igniteCardsEnd");
    },
    /**
      * 护甲牌
    */
    async gainHujiaCards(event, trigger, player) {
        const cards = get.cards(event.num);
        player.addSkill("hujiaCards");
        await player.gain(cards, "draw");
        const cards2 = cards
            .filter(card => player.getCards("h").includes(card));
        let num = cards2.length;
        if (player.hujia + num > 5) num = 5 - player.hujia;
        if (num > 0) {
            game.log(player, "获得了", get.cnNumber(num), "张", "#g护甲牌");
            await player.changeHujia(num);
            player.addGaintag(cards, "hujiaCards");
        }
    },
    /**
      * 护甲牌
    */
    async changeHujiaCards(event, trigger, player) {
        const cards = event.cards;
        player.addSkill("hujiaCards");
        game.log(player, "的", get.cnNumber(cards.length), "张视为", "#g护甲牌");
        await player.changeHujia(cards.length);
        player.addGaintag(cards, "hujiaCards");
    },
    /**
      * target & control
    */
    chooseTargetControl() {
        "step 0"
        var chooseTarget = function (event, player) {
            if (!event.result) event.result = {};
            event.forceMine = true;
            //event.dialog?.open()
            if (event.dialog) event.dialog.open();
            event.targets = [];
            event.players = game.players;
            if (event.deadTarget) event.players.addArray(game.dead)
            event.players.forEach(target => {
                target.classList.add("pointerdiv")
                if (event.filterTarget([target], target)) target.classList.add("selectable")
            })
            event.custom.replace.target = function (target) {
                if (!target.classList.contains("selectable")) return
                target.unprompt()
                if (typeof event.selectTarget == "function") selectTarget = event.selectTarget()
                else selectTarget = event.selectTarget
                if (typeof selectTarget == "number") selectTarget = [selectTarget, selectTarget]
                if (target.classList.contains("selected")) {
                    if (event.complexSelect || event.complexTarget) {
                        event.targets = []
                        event.players.forEach(target => {
                            target.unprompt()
                            target.classList.remove("selected")
                            target.classList.remove("selectable")
                            if (event.targets.length < event.selectTarget[1] && event.filterTarget([target], target)) target.classList.add("selectable")
                        })
                    }
                    else {
                        event.targets.remove(target)
                        event.players.forEach(target => {
                            target.classList.remove("selected")
                            target.classList.remove("selectable")
                            if (event.targets.length < event.selectTarget[1] && event.filterTarget(event.targets.slice().add(target), target)) target.classList.add("selectable")
                        })
                    }
                }
                else {
                    event.targets.add(target)
                    event.players.forEach(target => {
                        if (event.targets.includes(target)) return
                        target.classList.remove("selectable")
                        if (event.targets.length < event.selectTarget[1] && event.filterTarget(event.targets.slice().add(target), target)) target.classList.add("selectable")
                    })
                    event.targets.add(target)
                    var targetprompt = get.event().targetprompt
                    if (targetprompt) {
                        if (Array.isArray(targetprompt)) {
                            var targets = event.targets.slice()
                            var index = event.targets.indexOf(target)
                            for (var i of targetprompt) {
                                var target = targets.find(cur => cur.node.prompt && cur.node.prompt.innerHTML === i)
                                if (target) targets.remove(target)
                                else {
                                    index = i
                                    break
                                }
                            }
                            targetprompt = targetprompt[Math.min(targetprompt.length - 1, index)]
                        }
                        else if (typeof targetprompt == "function") targetprompt = targetprompt(target)
                        if (targetprompt && typeof targetprompt == "string") target.prompt(targetprompt)
                    }
                    target.classList.add("selected")
                }
                if (get.event().custom.add.target) get.event().custom.add.target()
                event.replacecontrols()
            }
            event.custom.replace.window = function () {
                event.targets = []
                event.replacecontrols()
                event.players.forEach(target => {
                    target.unprompt()
                    target.classList.remove("selected")
                    if (event.targets.length < event.selectTarget[1] && event.filterTarget([target], target)) target.classList.add("selectable")
                })
            }
            event.controls = [];
            event.replacecontrols = function () {
                var newControls, unchange, change, args = event.control(event.targets, event.controls)
                if (typeof event.selectTarget == "function") selectTarget = event.selectTarget()
                else selectTarget = event.selectTarget
                if (typeof selectTarget == "number") selectTarget = [selectTarget, selectTarget]
                if (Array.isArray(args)) newControls = args
                else if (args !== undefined && args !== null) newControls = [args]
                else newControls = []
                if (!event.forced && !newControls.includes("cancel2") && newControls.every(i => typeof i == "string" || !i.includes("canale2")) && event.targets.length == 0) newControls.add("cancel2")
                if (event.targets.length < selectTarget[0]) {
                    event.controls.forEach(i => i.close())
                    event.controls = []
                    if (event.targets.length == 0 && !event.forced) {
                        newControls.forEach(i => {
                            if (i == "cancel2") {
                                var control = ui.create.control([i])
                                control.custom = control => {
                                    if (control == "cancel2") event.result.bool = false
                                    else {
                                        event.result.bool = true
                                        event.result.targets = event.targets
                                        event.result.control = control
                                        event.result.index = newControls.indexOf(i);
                                    }
                                    //event.dialog?.close()
                                    if (event.dialog) event.dialog.close();
                                    event.controls.forEach(i => i.close())
                                    event.players.forEach(target => {
                                        target.classList.remove("selected")
                                        target.unprompt()
                                        target.classList.remove("selectable")
                                        target.classList.remove("unselectable")
                                    })
                                    game.resume()
                                    _status.imchoosing = false
                                }
                                event.controls.add(control)
                            }
                            else if (Array.isArray(i) && i.includes("cancel2")) {
                                var control = ui.create.control([i])
                                control.custom ??= control => {
                                    //if(control.custom) control.custom= control => {
                                    if (control == "cancel2") event.result.bool = false
                                    else {
                                        event.result.bool = true
                                        event.result.targets = event.targets
                                        event.result.control = control
                                        event.result.index = newControls.indexOf(i);
                                    }
                                    //event.dialog?.close()
                                    if (event.dialog) event.dialog.close();
                                    event.controls.forEach(i => i.close())
                                    event.players.forEach(target => {
                                        target.classList.remove("selected")
                                        target.unprompt()
                                        target.classList.remove("selectable")
                                        target.classList.remove("unselectable")
                                    })
                                    game.resume()
                                    _status.imchoosing = false
                                }
                                event.controls.add(control)
                            }
                        })
                    }
                    //return
                }
                if (newControls[0] == "unchange") unchange = newControls.shift()
                if (typeof newControls[0] == "function") change = newControls.shift()
                newControls.forEach(i => { if (typeof i == "string") i = [i] })
                if (unchange && event.controls.length && event.controls[0].innerHTML != "<div>取消</div>") {
                    if (change) change(control)
                }
                else {
                    event.controls.forEach(i => i.close())
                    event.controls = []
                    newControls.forEach((i, item) => {
                        var control = ui.create.control(i)
                        control.index = item;
                        control.custom ??= control => {
                            //if(control.custom) control.custom = control => {
                            if (control == "cancel2") event.result.bool = false
                            else {
                                event.result.bool = true
                                event.result.targets = event.targets
                                event.result.control = control
                                event.result.index = item;
                            }
                            //event.dialog?.close()
                            if (event.dialog) event.dialog.close();
                            event.controls.forEach(i => i.close())
                            event.players.forEach(target => {
                                target.classList.remove("selected")
                                target.unprompt()
                                target.classList.remove("selectable")
                                target.classList.remove("unselectable")
                            })
                            game.resume()
                            _status.imchoosing = false
                        }
                        if (change) change(control)
                        event.controls.add(control)
                    })
                    if (!event.targets.length) {
                        event.controls.forEach(control => {
                            if (control.innerHTML != "<div>取消</div>") control.classList.add("disabled");
                        });
                    } else {
                        event.controls.forEach(control => {
                            if (control.innerHTML == "<div>取消</div>") return;
                            if (event.filter(control, event.targets[0])) return;
                            control.classList.add("disabled");
                        });
                    }
                }
            }
            event.replacecontrols();
            game.pause();
            game.countChoose();
        }
        if (event.isMine()) chooseTarget(event, player)
        else if (event.isOnline()) {
            //event.player.send(chooseTarget, event, player)
            //event.player.wait()
            //game.pause()
            event.send();
        }
        else {
            if (event.dialog && event.closeDialog) event.dialog.close()
            if (event.controls && event.closeDialog) event.controls.forEach(i => i.close())
            //event.players?.forEach(i => i.classList.remove("selected"))
            //event.players?.forEach(i => i.classList.remove("selectable"))
            if (event.players) event.players.forEach(i => i.classList.remove("selected"))
            if (event.players) event.players.forEach(i => i.classList.remove("selected"))
            game.resume()
            _status.imchoosing = false
            if (event.processAI) event.result = event.processAI(event, player)
            else if (!event.forced) event.result = { bool: false }
            else throw `processAI : ${event.parent.name}"s chooseTargetControl is forced`
            event.finish()
        }
        "step 1"
        if (event.dialog && event.closeDialog) event.dialog.close()
        if (event.controls && event.closeDialog) event.controls.forEach(i => i.close())
        if (event.players) event.players.forEach(i => i.classList.remove("selected"))
        if (event.players) event.players.forEach(i => i.classList.remove("selected"))
        game.resume()
    }
};
export default Player;
