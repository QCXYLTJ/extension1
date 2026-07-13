import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '综漫季刊叁',
        content(config, pack) {
            //------------------------------------------------星级--------------------------------------------------//
            lib.characterTitle.zmtiamiya = `<img src=extension/综漫季刊叁/四星.png width="77" height="20">`;
            lib.characterTitle.zmlinzhuoxinsikadi = `<img src=extension/综漫季刊叁/四星.png width="77" height="20">`;
            lib.characterTitle.zmlinganziwuergong = `<img src=extension/综漫季刊叁/五星.png width="84" height="22">`;
            lib.characterTitle.zmhushetuxiang = `<img src=extension/综漫季刊叁/二星.png width="47" height="20">`;
            lib.characterTitle.zmhuxingxiong = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmhushennongshi = `<img src=extension/综漫季刊叁/四星.png width="77" height="20">`;
            lib.characterTitle.zmhujiguang = `<img src=extension/综漫季刊叁/二星.png width="47" height="20">`;
            lib.characterTitle.zmkuangangre = `<img src=extension/综漫季刊叁/四星.png width="77" height="20">`;
            lib.characterTitle.zmkuanghuilizi = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmkegangbuluntailang = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmtienlikepuqi = `<img src=extension/综漫季刊叁/四星.png width="77" height="20">`;
            lib.characterTitle.zmkenian = `<img src=extension/综漫季刊叁/四星.png width="77" height="20">`;
            lib.characterTitle.zmfaxi = `<img src=extension/综漫季刊叁/四星.png width="77" height="20">`;
            lib.characterTitle.zmhuniyan = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmfachuxue = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmshakuiying = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmqilijing = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmdouluomulusi = `<img src=extension/综漫季刊叁/四星.png width="77" height="20">`;
            lib.characterTitle.zmqiangyezong = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmgongnengtianshi = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmhusaileiya = `<img src=extension/综漫季刊叁/四星.png width="77" height="20">`;
            lib.characterTitle.zmfahuangshumomeixiang = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmdouqiaonasenqiaosida = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmlinsanguoQ = `<img src=extension/综漫季刊叁/四星.png width="77" height="20">`;
            lib.characterTitle.zmjianpeikelimu = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmjiangaowen = `<img src=extension/综漫季刊叁/四星.png width="77" height="20">`;
            lib.characterTitle.zmshensadan = `<img src=extension/综漫季刊叁/五星.png width="84" height="22">`;
            lib.characterTitle.zmlingaoyangsikaya = `<img src=extension/综漫季刊叁/四星.png width="77" height="20">`;
            lib.characterTitle.zmgongzherenmingyun = `<img src=extension/综漫季刊叁/三星.png width="59" height="22">`;
            lib.characterTitle.zmlinameng = `<img src=extension/综漫季刊叁/五星.png width="84" height="22">`;
            //------------------------------------------------------卡面查看--------------------------------------------------------//
            game.say2 = function (str) {
                var dialog = ui.create.dialog('hidden');
                dialog.classList.add('static');
                dialog.add(`<div class="text" style="word-break:break-all;display:inline">${str}</div>`);
                dialog.classList.add('popped');
                ui.window.appendChild(dialog);
                var width = dialog.content.firstChild.firstChild.offsetWidth;
                if (width < 190) {
                    dialog._mod_height = -16;
                } else {
                    dialog.content.firstChild.style.textAlign = 'left';
                }
                dialog.style.width = width + 16 + 'px';
                lib.placePoppedDialog(dialog, {
                    clientX: (this.offsetLeft + this.offsetWidth / 2) * game.documentZoom,
                    clientY: (this.offsetTop + this.offsetHeight / 4) * game.documentZoom,
                });
                if (dialog._mod_height) {
                    dialog.content.firstChild.style.padding = 0;
                }
                dialog.style.left = 'calc(45%)';
                dialog.style.top = 'calc(10%)';
                setTimeout(function () {
                    dialog.delete();
                }, 3500);
            };
            //------------------------------------------------看来用不上了的分栏及势力--------------------------------------------------//
            lib.group.push('zm3dao');
            lib.translate.zm3dao = '道';
            lib.translate.zm3daoColor = '#FFFF00';
            lib.group.push('zm3ti');
            lib.translate.zm3ti = '替';
            lib.translate.zm3tiColor = '#FFFF00';
            lib.group.push('zm3yan');
            lib.translate.zm3yan = '衍';
            lib.translate.zm3yanColor = '#FFFF00';
            lib.group.push('zm3do');
            lib.translate.zm3do = '斗';
            lib.translate.zm3doColor = '#FFFF00';
            lib.group.push('zm3ke');
            lib.translate.zm3ke = '科';
            lib.translate.zm3keColor = '#FFFF00';
            lib.group.push('zm3xie');
            lib.translate.zm3xie = '谐';
            lib.translate.zm3xieColor = '#FFFF00';
            lib.group.push('zm3qiang');
            lib.translate.zm3qiang = '枪';
            lib.translate.zm3qiangColor = '#FFFF00';
            lib.group.push('zm3kuang');
            lib.translate.zm3kuang = '狂';
            lib.translate.zm3kuangColor = '#FFFF00';
            lib.group.push('zm3gong');
            lib.translate.zm3gong = '弓';
            lib.translate.zm3gongColor = '#FFFF00';
            lib.group.push('zm3fa');
            lib.translate.zm3fa = '法';
            lib.translate.zm3faColor = '#FFFF00';
            lib.group.push('zm3shen');
            lib.translate.zm3shen = '神';
            lib.translate.zm3shenColor = '#FFFF00';
            lib.group.push('zm3jian');
            lib.translate.zm3jian = '剑';
            lib.translate.zm3jianColor = '#FFFF00';
            lib.group.push('zm3ling');
            lib.translate.zm3ling = '灵';
            lib.translate.zm3lingColor = '#FFFF00';
            lib.group.push('zm3qi');
            lib.translate.zm3qi = '骑';
            lib.translate.zm3qiColor = '#FFFF00';
            lib.group.push('zm3sha');
            lib.translate.zm3hu = '护';
            lib.translate.zm3qiColor = '#FFFF00';
            lib.group.push('zm3hu');
            lib.translate.zm3sha = '杀';
            lib.translate.zm3shaColor = '#FFFF00';
            lib.group.push('zm3sha');
            lib.translate.zm3lin = '临';
            lib.translate.zm3linColor = '#FFFF00';
            lib.group.push('zm3lin');
            lib.translate.zm3chan = '禅';
            lib.translate.zm3chanColor = '#FFFF00';
            lib.group.push('zm3chan');
            lib.translate.zm3chan = `<img src=extension/综漫季刊叁/zm3chan.png width="28" height="28">`;
            lib.translate.zm3lin = `<img src=extension/综漫季刊叁/zm3lin.png width="28" height="28">`;
            lib.translate.zm3hu = `<img src=extension/综漫季刊叁/zm3hu.png width="28" height="28">`;
            lib.translate.zm3dao = `<img src=extension/综漫季刊叁/zm3dao.png width="28" height="28">`;
            lib.translate.zm3ti = `<img src=extension/综漫季刊叁/zm3ti.png width="28" height="28">`;
            lib.translate.zm3yan = `<img src=extension/综漫季刊叁/zm3yan.png width="28" height="28">`;
            lib.translate.zm3do = `<img src=extension/综漫季刊叁/zm3do.png width="28" height="28">`;
            lib.translate.zm3ke = `<img src=extension/综漫季刊叁/zm3ke.png width="28" height="28">`;
            lib.translate.zm3sha = `<img src=extension/综漫季刊叁/zm3sha.png width="28" height="28">`;
            lib.translate.zm3gong = `<img src=extension/综漫季刊叁/zm3gong.png width="28" height="28">`;
            lib.translate.zm3fa = `<img src=extension/综漫季刊叁/zm3fa.png width="28" height="28">`;
            lib.translate.zm3qiang = `<img src=extension/综漫季刊叁/zm3qiang.png width="28" height="28">`;
            lib.translate.zm3qi = `<img src=extension/综漫季刊叁/zm3qi.png width="28" height="28">`;
            lib.translate.zm3xie = `<img src=extension/综漫季刊叁/zm3xie.png width="28" height="28">`;
            lib.translate.zm3shen = `<img src=extension/综漫季刊叁/zm3shen.png width="28" height="28">`;
            lib.translate.zm3ling = `<img src=extension/综漫季刊叁/zm3ling.png width="28" height="28">`;
            lib.translate.zm3kuang = `<img src=extension/综漫季刊叁/zm3kuang.png width="28" height="28">`;
            lib.translate.zm3jian = `<img src=extension/综漫季刊叁/zm3jian.png width="28" height="28">`;
            lib.translate.zm3t_jian = `<img src=extension/综漫季刊叁/0ui分栏剑.png width="93" height="27">`;
            lib.translate.zm3t_qiang = `<img src=extension/综漫季刊叁/0ui分栏枪.png width="87" height="27">`;
            lib.translate.zm3t_dou = `<img src=extension/综漫季刊叁/0ui分栏斗.png width="87" height="27">`;
            lib.translate.zm3t_qi = `<img src=extension/综漫季刊叁/0ui分栏骑.png width="87" height="27">`;
            lib.translate.zm3t_gong = `<img src=extension/综漫季刊叁/0ui分栏弓.png width="87" height="27">`;
            lib.translate.zm3t_fa = `<img src=extension/综漫季刊叁/0ui分栏术.png width="87" height="27">`;
            lib.translate.zm3t_sha = `<img src=extension/综漫季刊叁/0ui分栏杀.png width="87" height="27">`;
            lib.translate.zm3t_ke = `<img src=extension/综漫季刊叁/0ui分栏科.png width="87" height="27">`;
            lib.translate.zm3t_hu = `<img src=extension/综漫季刊叁/0ui分栏护.png width="87" height="27">`;
            lib.translate.zm3t_kuang = `<img src=extension/综漫季刊叁/0ui分栏狂.png width="87" height="27">`;
            lib.translate.zm3t_ling = `<img src=extension/综漫季刊叁/0ui分栏灵.png width="87" height="27">`;
            lib.translate.zm3t_lin = `<img src=extension/综漫季刊叁/0ui分栏临.png width="87" height="27">`;
            lib.translate.zm3t_dao = `<img src=extension/综漫季刊叁/0ui分栏道.png width="87" height="27">`;
            lib.translate.zm3t_chan = `<img src=extension/综漫季刊叁/0ui分栏禅.png width="87" height="27">`;
            lib.translate.zm3t_ti = `<img src=extension/综漫季刊叁/0ui分栏替.png width="87" height="27">`;
            lib.translate.zm3t_xie = `<img src=extension/综漫季刊叁/0ui分栏谐.png width="87" height="27">`;
            lib.translate.zm3t_shen = `<img src=extension/综漫季刊叁/0ui分栏神.png width="87" height="27">`;
            lib.translate.zm3t_yan = `<img src=extension/综漫季刊叁/0ui分栏衍.png width="87" height="27">`;
            lib.translate.zm3t_C = `<img src=extension/综漫季刊叁/0ui5.png width="66" height="27">`;
            lib.translate.zm3t_UC = `<img src=extension/综漫季刊叁/0ui4.png width="66" height="27">`;
            lib.translate.zm3t_R = `<img src=extension/综漫季刊叁/0ui3.png width="66" height="27">`;
            lib.translate.zm3t_SR = `<img src=extension/综漫季刊叁/0ui2.png width="66" height="27">`;
            lib.translate.zm3t_SSR = `<img src=extension/综漫季刊叁/0ui1.png width="66" height="27">`;
            //------------------------------------------------特效支持--------------------------------------------------//
            game.mp423 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/综漫季刊叁/mp4/${Q}.mp4`;
                    video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; pointer-events: none;';
                    video.autoplay = true;
                    video.loop = false;
                    const backButton = document.createElement('div');
                    backButton.innerHTML = '返回游戏'; //文字内容
                    backButton.style.cssText = 'z-index: 999; position: absolute; bottom: 10px; right: 10px; color: red; font-size: 16px; padding: 5px 10px; background: rgba(0, 0, 0, 0.3);';
                    backButton.onclick = function () {
                        backButton.remove();
                        video.remove();
                        resolve();
                    }; //设置返回按钮的点击事件
                    document.body.appendChild(video);
                    document.body.appendChild(backButton);
                    video.addEventListener('error', function () {
                        backButton.remove();
                        video.remove();
                        resolve();
                    });
                    video.addEventListener('ended', function () {
                        backButton.remove();
                        video.remove();
                        resolve();
                    });
                });
            }; //播放mp4
            lib.skill._dieAudiozmjk3 = {
                trigger: { global: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/综漫季刊叁/audio', trigger.player.name);
                },
            };
            game.playzm3 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/综漫季刊叁/audio', fn);
                }
            };
            HTMLDivElement.prototype.zm3t = function (bg, pos, time, func) {
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
            };
        },
        precontent() {
            //—————————————————————————————————————————————————————————————————————————————解构魔改本体函数
            const mogai = function () {
                lib.element.player.dyingResult = async function () {
                    const player1 = this;
                    game.log(player1, '濒死');
                    _status.dying.unshift(player1);
                    for (const i of game.players) {
                        const result = await i.chooseToUse({
                            filterCard(card, player, event) {
                                return lib.filter.cardSavable(card, player, player1);
                            },
                            filterTarget(card, player, target) {
                                if (!card || target != player1) {
                                    return false;
                                }
                                const info = get.info(card);
                                if (!info.singleCard || ui.selected.targets.length == 0) {
                                    const mod1 = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
                                    if (mod1 == false) {
                                        return false;
                                    }
                                    const mod2 = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
                                    if (mod2 != 'unchanged') {
                                        return mod2;
                                    }
                                }
                                return true;
                            },
                            prompt: get.translation(player1) + '濒死,是否帮助？',
                            ai1() {
                                return 1;
                            },
                            ai2() {
                                return get.attitude(player1, i);
                            },
                            type: 'dying',
                            targetRequired: true,
                            dying: player1,
                        }).forResult();
                        if (result?.bool) {
                            _status.dying.remove(player1);
                            break;
                        }
                    }
                    if (_status.dying.includes(player1)) {
                        await player1.die();
                    }
                    return player1;
                }; //濒死结算
                lib.element.player.yinni = function () {
                    const player = this;
                    player.storage.rawHp = player.hp;
                    player.storage.rawMaxHp = player.maxHp;
                    if (player.skills.length) {
                        if (!player.hiddenSkills) {
                            player.hiddenSkills = [];
                        }
                        for (const i of player.skills.slice()) {
                            player.removeSkill(i);
                            player.hiddenSkills.add(i);
                        }
                    }
                    player.classList.add('unseen');
                    player.name = 'unknown';
                    player.sex = 'male';
                    player.storage.nohp = true;
                    player.node.hp.hide();
                    player.addSkill('g_hidden_ai');
                    player.hp = 1;
                    player.maxHp = 1;
                    player.update();
                    return player;
                }; //隐匿函数
                lib.element.player.qreinit = function (name) {
                    const player = this;
                    const info = lib.character[name];
                    player.name1 = name;
                    player.name = name;
                    player.sex = info.sex;
                    player.changeGroup(info.group, false);
                    for (const i of info.skills) {
                        player.addSkill(i);
                    }
                    player.maxHp = get.infoMaxHp(info.maxHp);
                    player.hp = player.maxHp;
                    game.addVideo('reinit3', player, {
                        name: name,
                        hp: player.maxHp,
                        avatar2: player.name2 == name,
                    });
                    player.smoothAvatar(false);
                    player.node.avatar.setBackground(name, 'character');
                    player.node.name.innerHTML = get.translation(name);
                    player.update();
                    return player;
                }; //变身
                lib.element.player.quseCard = async function (card, targets, cards) {
                    const player = this;
                    if (typeof card == 'string') {
                        card = { name: card };
                    }
                    const name = card.name;
                    const info = lib.card[name];
                    if (!cards) {
                        cards = [card];
                    }
                    const skill = _status.event.skill;
                    if (info.contentBefore) {
                        const next = game.createEvent(name + 'ContentBefore', false);
                        if (next.parent) {
                            next.parent.stocktargets = targets;
                        }
                        next.targets = targets;
                        next.card = card;
                        next.cards = cards;
                        next.player = player;
                        next.skill = skill;
                        next.type = 'precard';
                        next.forceDie = true;
                        await next.setContent(info.contentBefore);
                    }
                    if (!info.multitarget) {
                        for (const target of targets) {
                            if (target && target.isDead()) return;
                            if (info.notarget) return;
                            const next = game.createEvent(name, false);
                            if (next.parent) {
                                next.parent.directHit = [];
                            }
                            next.targets = targets;
                            next.target = target;
                            next.card = card;
                            if (info.type == 'delay') {
                                next.card = {
                                    name: name,
                                    cards: cards,
                                };
                            }
                            next.cards = cards;
                            next.player = player;
                            next.type = 'card';
                            next.skill = skill;
                            next.baseDamage = Math.max(numberq1(info.baseDamage));
                            next.forceDie = true;
                            next.directHit = true;
                            await next.setContent(info.content);
                        }
                    } else {
                        if (info.notarget) return;
                        const next = game.createEvent(name, false);
                        if (next.parent) {
                            next.parent.directHit = [];
                        }
                        next.targets = targets;
                        next.target = targets[0];
                        next.card = card;
                        if (info.type == 'delay') {
                            next.card = {
                                name: name,
                                cards: cards,
                            };
                        }
                        next.cards = cards;
                        next.player = player;
                        next.type = 'card';
                        next.skill = skill;
                        next.baseDamage = Math.max(numberq1(info.baseDamage));
                        next.forceDie = true;
                        next.directHit = true;
                        await next.setContent(info.content);
                    }
                    if (info.contentAfter) {
                        const next = game.createEvent(name + 'ContentAfter', false);
                        next.targets = targets;
                        next.card = card;
                        next.cards = cards;
                        next.player = player;
                        next.skill = skill;
                        next.type = 'postcard';
                        next.forceDie = true;
                        await next.setContent(info.contentAfter);
                    }
                    return player;
                }; //解构用牌
                lib.element.player.qrevive = function () {
                    const player = this;
                    if (player.parentNode != ui.arena) {
                        ui.arena.appendChild(player);
                    } //防止被移除节点
                    player.classList.remove('removing', 'hidden', 'dead');
                    game.log(player, '复活');
                    player.maxHp = Math.max(lib.character[player.name]?.maxHp || 0, player.maxHp || 0);
                    player.hp = player.maxHp;
                    game.addVideo('revive', player);
                    player.removeAttribute('style');
                    player.node.avatar.style.transform = '';
                    player.node.avatar2.style.transform = '';
                    player.node.hp.show();
                    player.node.equips.show();
                    player.node.count.show();
                    player.update();
                    game.players.add(player);
                    game.dead.remove(player);
                    player.draw(Math.min(player.maxHp, 20));
                    return player;
                }; //复活函数
                lib.element.player.zhenshang = function (num, source, nature) {
                    const player = this;
                    let str = '受到了';
                    if (source) {
                        str += `来自<span class='bluetext'>${source == player ? '自己' : get.translation(source)}</span>的`;
                    }
                    str += get.cnNumber(num) + '点';
                    if (nature) {
                        str += get.translation(nature) + '属性';
                    }
                    str += '伤害';
                    game.log(player, str);
                    const stat = player.stat;
                    const statx = stat[stat.length - 1];
                    if (!statx.damaged) {
                        statx.damaged = num;
                    } else {
                        statx.damaged += num;
                    }
                    if (source) {
                        const stat = source.stat;
                        const statx = stat[stat.length - 1];
                        if (!statx.damage) {
                            statx.damage = num;
                        } else {
                            statx.damage += num;
                        }
                    }
                    player.hp -= num;
                    player.update();
                    player.$damage(source);
                    var natures = (nature || '').split(lib.natureSeparator);
                    game.broadcastAll(
                        function (natures, player) {
                            if (lib.config.animation && !lib.config.low_performance) {
                                if (natures.includes('fire')) {
                                    player.$fire();
                                }
                                if (natures.includes('thunder')) {
                                    player.$thunder();
                                }
                            }
                        },
                        natures,
                        player
                    );
                    var numx = player.hasSkillTag('nohujia') ? num : Math.max(0, num - player.hujia);
                    player.$damagepop(-numx, natures[0]);
                    if (player.hp <= 0 && player.isAlive()) {
                        player.dying({ source: source });
                    }
                    return player;
                }; //真实伤害
                lib.element.player.qequip = function (card) {
                    const player = this;
                    if (Array.isArray(card)) {
                        for (const i of card) {
                            player.qequip(i);
                        }
                    } else if (card) {
                        if (card[card.cardSymbol]) {
                            const owner = get.owner(card);
                            const vcard = card[card.cardSymbol];
                            if (owner) {
                                owner.vcardsMap?.equips.remove(vcard);
                            }
                            player.vcardsMap?.equips.add(vcard);
                        } else {
                            const vcard = new lib.element.VCard(card);
                            const cardSymbol = Symbol('card');
                            card.cardSymbol = cardSymbol;
                            card[cardSymbol] = vcard;
                            player.vcardsMap?.equips.push(vcard);
                        }
                        player.node.equips.appendChild(card);
                        card.style.transform = '';
                        card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                        const info = lib.card[card.name];
                        if (info && info.skills) {
                            for (const i of info.skills) {
                                player.addSkillTrigger(i);
                            }
                        }
                    }
                    return player;
                };
                lib.element.player.qdie = function (source) {
                    const player = this;
                    player.qdie1(source);
                    player.qdie2(source);
                    player.qdie3(source);
                    return player;
                }; //可以触发死亡相关时机,但是死亡无法避免//直接正常堆叠事件即可.如果await每个qdie123事件,那么外部就必须await qdie了,否则就卡掉
                lib.element.player.qdie1 = function (source) {
                    const player = this;
                    const next = game.createEvent('diex1', false);
                    next.source = source;
                    next.player = player;
                    next._triggered = null;
                    next.setContent(async function (event, trigger, player) {
                        await event.trigger('dieBefore');
                        await event.trigger('dieBegin');
                    });
                    return next;
                }; //触发死亡前相关时机//不能用async,不然会卡掉后续事件,不能await那个setcontent
                lib.element.player.qdie2 = function (source) {
                    const player = this;
                    const next = game.createEvent('diex2', false);
                    next.source = source;
                    next.player = player;
                    next._triggered = null;
                    next.restMap = { type: null, count: null, audio: null };
                    next.excludeMark = [];
                    next.setContent('die');
                    return next;
                }; //斩杀
                lib.element.player.qdie3 = function (source) {
                    const player = this;
                    const next = game.createEvent('diex3', false);
                    next.source = source;
                    next.player = player;
                    next._triggered = null;
                    next.setContent(async function (event, trigger, player) {
                        await event.trigger('dieEnd');
                        await event.trigger('dieAfter');
                    });
                    return next;
                }; //触发死亡后相关时机
            }; //解构魔改本体函数
            mogai();
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '综漫季刊叁',
                    connect: true,
                    character: {
                        zmtiamiya: ['female', 'zm3ti', 4, ['zmjingshenganshe', 'zmqingsenuhuo'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"><img src=extension/综漫季刊叁/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】异能者<br>\n【宝具】青色怒火<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【特质】罗德岛的公开领袖,为了感染者的未来,为了让大地挣脱矿石病的阴霾而艰难前行着.<br>\n阿米娅身据四种血脉,是被称为奇美拉的混血.其身世成谜,能力成谜,作为强大术师与小小领袖立于罗德岛台前,没有人知道她的未来会走向何方.<br>\n阿米娅的能力与心灵有关,表面上看可以操作一定范围内生物的情绪,需要时可以通过浏览目标的记忆瞬间掌握其修习多年的技术.随着罗德岛与整合运动的萨卡兹交战,诸多情报都表示这位少女可能就是传说中的下一任萨卡兹之王.虽然这样一位过分善良的外族会是预言中的魔王令人难以置信,但从她具现了萨卡兹古王的佩剑来看,这个推测应该相当接近事实.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zmlinzhuoxinsikadi: ['female', 'zm3lin', 5, ['zmyuanguxueqin', 'zmxuezhiguwu'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"><img src=extension/综漫季刊叁/属性混沌.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性混乱中立.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】远古血亲<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★★★★★★★☆☆☆<br>\n【特质】从某个异常世界线而来,深海猎人最后的痕迹.<br>\n海嗣是一种古老生命的眷族,这些生物每时每刻都在持续变异,巧妙避开致死与劣化.中性理论对它们来说就像个玩笑,遗传变成了个体发展地基的一部分,个体的终点会成为其它个体的起点...只要拥有时间和养料,陆地、沙漠、宇宙都将成为它们的大海.<br>\n在过去,阿戈尔深海猎人曾全体出动不计代价突袭了海嗣的群落,最后由一名叫做斯卡蒂的猎人击杀了<祂>的物质躯体.沉眠前,<祂>对斯卡蒂留下了一句神谕,这成为了新的灾厄开端.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zmlinganziwuergong: ['male', 'zm3ling', 4, ['zmfuxieshifa', 'zmqianghuashifa', 'zsz'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"><img src=extension/综漫季刊叁/属性死灵.png width="34" height="22"><img src=extension/综漫季刊叁/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性混乱中立.png width="57" height="19"> <br>\n【职阶】不眠者<br>\n【宝具】死亡是一切生命的终点<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】脸很可怕,技能很可怕,部下很可怕,但微妙的属于讲道理的正常人.<br>\n安兹本名铃木悟,原本是YGGDRASIL游戏中公会<安兹·乌尔·恭>的会长.在YGGDRASIL结束运营的最后一天意外和公会据点纳萨力克地下大坟墓一起穿越到了异世界,同时公会里的NPC们也拥有了自我意识.为了找寻过去的同伴,他将自己的名字改成了昔日的公会名称<安兹·乌尔·恭>,以令纳萨力克大坟墓登上世界顶点的方式在异世界打出名气来寻找可能存在的同伴.<br>\n其本人在来到异世界后依然保有游戏中的全般能力与法术,作为顶尖玩家拥有极强的战斗力与策略意识.擅长情报战,谋略战,在一口气决出胜负前会尽可能做好万全准备.最终职业为<死之统治者>,是死者大法师职业因为极端加点而解锁的特殊分支.持有的终极技能[死亡是一切生命的终点]可以在读秒后将范围内的一切物质强制即死,可谓是非常犀利的决胜奥义.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zmhushetuxiang: ['female', 'zm3hu', 3, ['zmgundongtuoli', 'zmkezhuangfanghu'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"><img src=extension/综漫季刊叁/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】守卫者<br>\n【宝具】壳状防护<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】身份不明,履历缺失.在强对抗战斗中展现出了不凡的防守强度.现作为重装干员,为罗德岛的多项行动提供服务.<br>\n当这位连自己究竟来自何方都忘记了的神秘少女正式成为罗德岛干员的时候,她学会的第一项技能就是正确写出自己的代号,并一笔一划,极为认真地在任职合同上签下自己的名字.<br>\n蛇屠箱有着天真烂漫的性格,即使成为原石病患者也丝毫未能减损她的阳光.即使因为贪玩棒球而数次击碎了部分设施的玻璃,也无法令人去苛责她.<br>\n经过基础建设与武器整备部门相关人员的检测,蛇屠箱的背包被认为是一种良性防御武器,它所能提供的有效防御,并不逊色于罗德岛基础行动人员配发的制式盾牌.事实上,这枚背包的正面材质并非布料,而是具有相当硬度,却极为轻巧的金属板材.此外,它的缝合极为强韧,数次的锤击测试均未能破坏这枚背包的完整结构.对于背包的由来,干员蛇屠箱以一如既往的愉快态度表示自己没有相关记忆.在查询相关领域的资料均告失败后,对于该武器的调查不得不暂时告一段落.<br>\n【评级】<b><font color=DarkKhaki>C</font></b>\n']],
                        zmhuxingxiong: ['female', 'zm3hu', 5, ['zmzhongzhuanghuwei', 'zmborejingji'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】守卫者<br>\n【宝具】般若•力之锯<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★★★★★★☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】十分高大的鬼族女性,一开口就能让人回想起其督察的身份.<br>\n星熊身份为龙门近卫局特别任务组精英干员,是以强大的生理耐受力著称的重装护卫.除战斗之外,星熊在黑道、白道、政治、经济、教育、外交等领域都很有见地,可说是文武双全的人才.<br>\n在好战方面,星熊和她的同族并没有什么区别,在战场上的她比任何人都要骁勇善战.但在此之上,星熊小姐有着大部分鬼族欠缺的一项十分重要的特质——冷静.从她的言行举止中,能感受到思考,在她的骁勇善战中,能感受到克制.如果说,鬼族的血脉中潜藏着狂躁,那她就是完全克服了这种狂躁.这或许与她过去的经历有关.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zmhushennongshi: ['male', 'zm3hu', 5, ['zmbianchangbaicao', 'zmzebeibafang'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"><img src=extension/综漫季刊叁/属性神性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】守卫者<br>\n【宝具】遍尝百草 泽被八方<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆☆<br>\n【治疗】★★★★★★★☆☆☆<br>\n【特质】上古五帝之一,炎帝神农.<br>\n自上古天皇燧人氏点燃文明之火后,最古老的华夏人族部落得以集聚;在那之后,带领人族先民战胜饥荒、疾病的便是神农氏.传说神农氏体质特异生有牛角,因感人族不能识别毒物与食物多有族人横死,因此大陆上游历,以身试药无数穷究药石生克道理.族人感念其恩德,便推举他为部落领袖,又因其倡导刀耕火种农业启蒙,故称其为炎帝.<br>\n上古末期,苗蛮的蚩尤部族向中原入侵,攻打炎帝部落;炎帝遂联合黄帝轩辕氏共抗蚩尤,一场大战涉及人神妖魔终于奠定了华夏族运,故后世华夏人族始称炎黄子孙.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zmhujiguang: ['female', 'zm3hu', 4, ['zmjidishouwei', 'zmdiwenxiuqi'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】守卫者<br>\n【宝具】低温休憩<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】来自雪国谢拉格的盾卫,主攻雪地极端环境下的防御工程学.<br>\n极光,出身谢拉格,中学毕业后接受希瓦艾什家的资助赴哥伦比亚学习,因不幸感染矿石病而中断学业,来到罗德岛寻求治疗,经考核后,同时作为工程干员与行动队成员活跃在舰内舰外的各项任务中.<br>\n极光的武器由她自己设计并打造,从外形到功能都具备一定的特殊性.作为主体部分的盾牌以谢拉格产的稀有金属为主要构成材料,兼具硬度与韧性,能抵抗中等烈度的常见灾害冲击,并在超低温环境下具备优异的抗裂性能.其表面还附加了由哥伦比亚尖端实验室研发的耐腐蚀绝缘涂层,确保了即便暴露在源石密度较高的环境下,盾牌及关联装置仍能稳定运作.<br>\n盾牌兼具小型打桩机功能,便于在冰原环境下迅速扎营.在极光中止北地考察工作并加入罗德岛之后,她将打桩机改造成了如今的桩身自由伸缩模式.以极光的实战表现来看,这些精钢桩能在瞬间贯穿绝大部分常见地表,为竖立盾面的承压能力带来近280%的增幅.另一组新增部件为贴附在盾牌下半部的<人工降雪机>.该设备并不能真正意义上地影响局部气候,其真正功能接近传导通路,辅助极光的源石技艺,令盾牌前方3米范围内的温度急遽下降.大部分敌人无法承受这样的极端低温,而对出身雪域的极光来说,空气中出现的冰晶不仅不会给她带来伤害,还会让她感觉到属于家乡的<温暖>.<br>\n【评级】<b><font color=DarkKhaki>C+</font></b>\n']],
                        zmkuangangre: ['male', 'zm3kuang', 4, ['zmshijianling', 'zmxuemaijifaa'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"><img src=extension/综漫季刊叁/属性龙血.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性中立善良.png width="57" height="19"> <br>\n【职阶】狂战士<br>\n【宝具】时间零<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】现任卡塞尔学院校长,140岁高龄的洒脱绅士.<br>\n真名希尔伯特·让·昂热,拥有近乎完美的血统、完美的能力、完美的战斗技艺、但在与龙的漫长战争中他依旧无法阻止同袍们一个个死去.百年过去了,同时代的混血种都老得打不动了,可昂热还在世界各地徘徊着,是不死不休的仇恨给了他不竭的动力.<br>\n昂热的言灵是[时间零],作为少数可以作用于更高位者的言灵拥有加快自身,变相减缓时间的效果.这种效果可凭使用者的意志同时作用于领域内的其他人,曾被梅涅克•卡塞尔赞为上帝赐予人类屠龙的利刃.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zmkuanghuilizi: ['female', 'zm3kuang', 4, ['zmkuangaizhili', 'zmzhimingchengjie'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"><img src=extension/综漫季刊叁/属性魔性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性混乱中立.png width="57" height="19"> <br>\n【职阶】狂战士<br>\n【宝具】致命惩戒<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】工会[暮光流星群]的会员,在原世界有着<破坏者>的异名.<br>\n平时是性格稍微有些阴暗的药剂师,某次不小心闻到自己制作的毒药昏倒在路边时被骑士救起,之后就把骑士认为是自己命中注定的人,开展了一系列的危险活动.持有的巨斧是可以提炼惠理子那疯狂爱意的魔导具,能将过激的爱情转化为实打实的破坏力.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zmkegangbuluntailang: ['male', 'zm3ke', 3, ['zmkuayuebianjie', 'zmshixiangxiuzheng'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"><img src=extension/综漫季刊叁/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】机械师<br>\n【宝具】事项修正<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★★★★☆☆☆☆☆☆<br>\n【特质】重度中二病科学家,时常念叨的诸如命运石之门什么的大多都是随口编的词.<br>\n冈部伦太郎本是某个私立寒酸研究所的所长,曾经误打误撞制造出了可以向过去传递信息的时间机器.伴随每次对过去的影响,整个现实世界都会受到蝴蝶效应进而产生一定变化,且世界线修正后不知为何,他可以保留之前的记忆不被世界修正掉.<br>\n可以修改过去就意味着掌握了现在的一切,但滥用时间愚弄命运的代价是惨重的.为了弥补过错让世界回到理想轨道,冈部伦太郎经历了无数次生离死别,准备的计划横跨现在、过去、未来甚至欺骗了作为观测者自己才得以成功.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zmtienlikepuqi: ['male', 'zm3ti', 3, ['zmbaishe', 'zmiyu'], ['des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"><img src=extension/综漫季刊叁/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序邪恶.png width="57" height="19"> <br>\n【职阶】异能者<br>\n【宝具】天堂制造<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】在大多数时候都是虔诚的天主教徒,然而实质上并没有成为殉教者的觉悟.<br>\n作为被DIO认可的挚友,恩里克•普奇在DIO死亡后继承了他到达<天堂>的遗志.普奇的理想是创造一个人人皆明了自己未来的世界;因为知晓了不可逆的命运,所以人们将充满勇气地生活,这就是他口中的<觉悟者恒幸福>.<br>\n通过DIO的遗产与命运的指引,普奇的替身经过两次蜕变终于进化为[天堂制造],可通过加速自身以外全宇宙的重力以无限的加速时间,让时间线加速到极限后回到时间的起点.如此一来,每个人都可以在时光旅行中亲身体会自己的未来...但普奇本人却无法接受自己数年后被敌人击杀的未来,背离了自己的信念去改变命运,最终被命运所抛弃.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zmkenian: ['female', 'zm3ke', 4, ['zmtianyouhonglu', 'zmjijiachengshan'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"><img src=extension/综漫季刊叁/属性龙族.png width="34" height="22"><img src=extension/综漫季刊叁/属性神性.png width="34" height="22"><img src=extension/综漫季刊叁/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性混乱善良.png width="57" height="19"> <br>\n【职阶】机械师<br>\n【宝具】天有洪炉 地生五金<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】在兄弟姐妹中排行第九,爱好拍摄低水平电影和上班拉同事打麻将.<br>\n曾经,被称为神的巨兽[岁]倒在了炎国举国之力下,其存在崩解并诞生了十二个拥有不同概念的单独个体.十二个兄弟姐妹在炎国的监控和照看下长大,当作为岁的集体意识即将醒来时,碎片们却有着自己的想法...<br>\n年掌握的能力是熔铸,拥有对物质进行超乎想象程度的构筑加工能力.年的造物无法逆向分析,无论是厚重的盾牌,还是奇形怪状的剑,年都能运用自如.譬如她的盾牌分散在整个战场上,用现今尚无法解明的技巧,为队友拦下各类冲击.或者她的剑可以随便劈开各种物质？<br>\n<没用的,我们又造不出,那种东西让她自己玩玩就好了.>听到罗德岛工程干员这样说,年自称略微有些丧气.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zmfaxi: ['female', 'zm3fa', 4, ['zmxushihuajing', 'zmxieyishengxing'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"><img src=extension/综漫季刊叁/属性龙族.png width="34" height="22"><img src=extension/综漫季刊叁/属性神性.png width="34" height="22"><img src=extension/综漫季刊叁/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性混乱善良.png width="57" height="19"> <br>\n【职阶】施法者<br>\n【宝具】虚实画境 写意胜形<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】在兄弟姐妹中排行第十一,现寓居罗德岛某偏僻走道的墙上挂画内.<br>\n曾经,被称为神的巨兽[岁]倒在了炎国举国之力下,其存在崩解并诞生了十二个拥有不同概念的单独个体.十二个兄弟姐妹在炎国的监控和照看下长大,当作为岁的集体意识即将醒来时,碎片们却有着自己的想法...<br>\n夕掌握的能力是画道.除了高明的画功外,夕画出来的东西,会根据观测者的认知影响现实.譬如她在墙上画一扇门,不明真相的路人真的拉开门走进去了.或者有位干员在花海中摘了一朵花——事后他完全不清楚自己什么时候看了夕的那副画,但是那朵花就一直在现实中存在着...<br>\n夕的画为何如此神奇,其原理她自己也说不清.但凭除了暴力外正确的推理认知也可以破解虚像这点,大概也可以窥见其中道理的一端.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zmhuniyan: ['female', 'zm3hu', 5, ['zmwotuyushen', 'zmhuirangdexuemai'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】守卫者<br>\n【宝具】秽壤的血脉<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】前整合运动成员,泥岩小队队长,大地的术师.<br>\n泥岩本是一名雇佣兵,为了争取原石病感染者的权益而加入整合运动,又因整合运动日渐激进而早早离开.其人属于控制不住自己善意的好人,在乱局总是透支自己拯救弱者,因而引火烧身.<br>\n泥岩的源石技艺可以简单地操纵泥土与岩石,除此之外,天赋异禀的她还掌握了数种颇具莱塔尼亚特色的古典法术,以及一种古老的、与血脉牵连的萨卡兹巫术,这种巫术使她的意识强行<介入>她的造物躯体中,让原本没有意识的岩石与泥土成为她四肢的延伸.<br>\n或许是因为这点,泥岩会用<朋友>来称呼她自己的源石技艺造物,大到巨像,小到泥块,都是如此.当各位干员看着泥岩一个人在房间里对着小小的泥偶露出你没见过的温婉笑容时,请不要感到讶异.毕竟她和泥土之间的关系可能比她和大部分人都要亲密得多.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zmfachuxue: ['female', 'zm3fa', 3, ['zmshengyinhuixiang', 'zmziranzhenshe'], ['des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】施法者<br>\n【宝具】自然震慑<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】喀兰圣女,全谢拉格的宗教领袖,运用神赐的圣铃呼唤风雪的力量.<br>\n喀兰圣女、神启者、被称颂者……这样那样的称号,都只属于初雪一人.作为整个谢拉格地方宗教至高无上的权首,她拥有着一系列特权,即使是她的哥哥,谢拉格名义上的最高长官银灰,在公开场合见到她时也必须合掌行礼.<br>\n在另一方面,作为一个极端落后的闭塞国度之精神领袖,面对教内事务、其他望族的恶意、山外巨头国家的虎视眈眈和国家内部的血腥变革,太多太多的事务压得她喘不过气来.渴望放下身上的责任展露天性,做一个叫恩雅的普通女孩是她长久以来的夙愿了.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zmshakuiying: ['male', 'zm3sha', 4, ['zmjingzhongxuying', 'zmxueseyuezhang'], ['des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性混乱中立.png width="57" height="19"> <br>\n【职阶】暗匿者<br>\n【宝具】镜中虚影<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】独立刺客、迷之剧团的歌者,不管哪个身份都非常致命.<br>\n傀影第一次踏上罗德岛时,吓坏了当时正在值班的后勤工作人员.他突然出现在对方身后,随后一言不发,就站在原地,一直等到工作人员转身才发现他的存在.在这之后,舰船的监测与防控设施得到了一次全方位的加强.傀影的战场机动力达到了以人眼对颜色的变化才能反应的速度发起袭击、抽身而退的程度.<br>\n在真正成为一名独自行动的刺客之前,傀影曾跟随一个流浪剧团四处巡回表演谋生,在这期间傀影遭遇了一些事,导致了他的歌喉变得可以杀人...最终他击杀了除团长外的所有团员并逃出剧团,但不久后剧团的传说又重新在大陆上流传...<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zmqilijing: ['male', 'zm3qi', 4, ['zmtianjiangfuqianjun', 'zmlinglongbaota'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"><img src=extension/综漫季刊叁/属性神性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性中立善良.png width="57" height="19"> <br>\n【职阶】骑兵<br>\n【宝具】玲珑宝塔<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】阐教三代弟子,天庭卫戍司令,人称托塔李天王.<br>\n李靖为金吒、木吒、哪吒之父,殷氏的丈夫,凡人出身,自幼访道修真,多年前曾拜西昆仑度厄真人为师,只学成五行遁术与平常武力,后因学艺不精,仙道难成,只能下山为官以图富贵.先是做了商朝的陈塘关总兵,后为周朝的中军元帅,在商周大战中于行军上多有出力.<br>\n封神结束后,李靖因善于掌兵又忠心耿耿深得器重.每逢大事,玉帝必先钦点李天王挂帅.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zmdouluomulusi: ['male', 'zm3do', 5, ['zmhuangditequanl', 'zmwudengzhibi'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"><img src=extension/综漫季刊叁/属性神性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性混乱中立.png width="57" height="19"> <br>\n【职阶】格斗家<br>\n【宝具】吾等之臂开拓一切,以达天际<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★★★☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】罗马即为浪漫——神代结束后,作为人,获得爱人之心的人性之物.罗马乃是这一切的象征.<br>\n军神玛尔斯与美丽公主西尔维亚之子,与兽为友一同成长,最终奠定了罗马基石的就是这位建国王罗穆路斯.同时他也是作为抵达天际的罗马至高神三柱中的一柱奎里努斯被供奉的概念形象.<br>\n作为神的时代结束,人的文明兴起的代表之一,罗穆路斯·奎里努斯的宝具正如其使命一般撕裂世界,开拓文明,仿佛终有一天能抵达群星之宙的浪漫...这既是支配了森罗万象的人们傲慢的表现,也是梦想着明日不断进步的人类光辉的表现.倘若用作攻击,就会带来巨大的破坏.倘若用作守护、创造,则会散发出更为耀眼的可能性之光.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zmqiangyezong: ['female', 'zm3qiang', 4, ['zmjiaqiangchongfeng', 'zmyizhixiangqian'], ['des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】枪兵<br>\n【宝具】一致向前<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】红松骑士团成员——<野鬃>骑士艾沃娜.<br>\n艾沃娜·克鲁科夫斯卡.其家族作为忠诚的卡西米尔骑士家族,历来靠征战获得荣誉而长存.在克鲁科夫斯卡家族中,艾沃娜是同一辈里身体最为矫健,性格最为奔放的.因此,她被自己的家族寄予厚望,从小便为成为征战骑士而进行训练.然而,年轻的艾沃娜却在野外进行模拟训练时不慎感染矿石病,从而彻底改变了她的人生道路.从小被教育要成为征战骑士的她曾怀揣着希望,却没想到自己在痊愈后立刻遭到了家族的抛弃.<br>\n尽管对家族残忍的行为大为失望,艾沃娜还是决定朝前迈进.情绪的修复来源于她坚定的人生信条:只要还活着,便要不断找到道路奔跑.艾沃娜是善战者,战斗的热情和热血是她与生俱来的,哪怕在成为感染者后也未能改变分毫.因此她选择成为了竞技骑士,期待以另一种方式重新赢得荣耀的身份.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zmgongnengtianshi: ['female', 'zm3gong', 4, ['zmwuzhuangpeisong', 'zmlatelanchongfeng'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】弓兵<br>\n【宝具】拉特兰冲锋<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】企鹅物流公司成员,拉特兰的天才射手.<br>\n企鹅物流是于灰色地带从事秘密联络,武装押运等危险工作的专家.虽然名气很大,但意外的是这家公司的正式成员却少到连一个中队都凑不出来,当然反过来也证明了这些成员作为精英的含金量.能天使是团队的核心成员,每天活跃于刀光剑影中,据说每月会参加战斗十数次...尽管出任务次数如此之多,老板也十分有钱,但乐于举办聚会又慷慨的她终究还是难以摆脱赤字的阴影.<br>\n虽然拥有光环和翅膀,能天使小姐也经常能让人遗忘她是一个拉特兰人.但唯有在涉及信仰话题时,她的反应与一个普通的拉特兰人别无二致——虔诚.很少有人注意到能天使小姐的这份虔诚.但若是能够注意到,便会发现一点,对前卫的追求,和对信仰的虔诚,竟然在一个人身上同时出现,且互相毫不显得突兀.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zmhusaileiya: ['female', 'zm3hu', 4, ['zmninggu', 'zmgushou'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"><img src=extension/综漫季刊叁/属性龙血.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性混乱善良.png width="57" height="19"> <br>\n【职阶】守卫者<br>\n【宝具】固守<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】当塞雷娅举起盾时,她不是在保护身后的干员,而是在保护整支小队.<br>\n作为前莱茵生命防卫科主任,塞雷娅于生命科学,微生物学,源石技艺等领域皆有建树;同时于歼灭战,要员保全,异常事态处理等任务中表现出强大实力.<br>\n塞雷娅的原石技艺颇为特殊,简而言之,塞雷娅能够自由操作自身为圆心、一定区域内的钙元素及其化合物.将自己渊博的医学知识与能力相融合后,无论是通过源石技艺阻挡、削弱敌人,还是将之用于武装自身、配合队友——类似的需求,塞雷娅都能轻易满足.正如她自己所说,源石技艺的强大不在于它的运作方式,而在于它所能达到的目的.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zmfahuangshumomeixiang: ['female', 'zm3fa', 4, ['zmluoyuzuji', 'zmmofafeijianshanguang'], ['des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】施法者<br>\n【宝具】魔法飞溅闪光<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】总是记错别人名字的魔法少女,力量来自于他人的信任.<br>\n煌树茉美香在原世界是普通的魔法少女主人公,被卷入阿尔泰尔事件而来到创造主世界.心地善良,不喜欢争斗,遇到冲突总希望可以通过对话和平解决,因此容易被诓骗.<br>\n在来到现世接触到形形色色的人后渐渐变得成熟,但想相信他人、拯救他人的初衷一直没变.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zmdouqiaonasenqiaosida: ['male', 'zm3do', 4, ['zmguanghuizhiluq', 'zmbowenjizou'], ['des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】格斗家<br>\n【宝具】波纹疾走<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】真正的绅士,乔斯达家族传奇的开始.<br>\n英国贵族乔斯达家的嫡男,外号JOJO.拥有作为贵族的骄傲却并不傲慢;为人礼貌,性格真诚率直到了滥好人的地步.虽说是如此善良但乔纳森并不懦弱,在背负责任面对敌人时有如狮子般的勇气,这一点无论是同伴还是敌人都不得不予以尊敬.<br>\n乔纳森的故事就是与迪奥•布兰度的斗争史,这如兄弟般一起成长又最终搏杀的二人进行了长久的意志的比拼,终于以乔纳森的勇气划下了句号.虽说迪奥多年后从海底爬出,但乔斯达的血脉永远是他最痛恨又最敬畏的事物.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zmlinsanguoQ: ['none', 'zm3lin', 4, ['zmheisexiwei', 'zmwuxingmaoyi', 'zmtongxingzhuangpei'], ['des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"><img src=extension/综漫季刊叁/属性混沌.png width="34 height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性混乱善良.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】同型装配<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★☆☆☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】金融街的无冕之王,最出色的金融师.<br>\n金融街是一类神秘的亚空间,现实中的人们抵押自己的未来,以自己的可能性为武器战斗.赢家可以根据胜负的程度剥夺输家的一切,破产者其一切都会被未知抹去,化为金融街扩张的养料.<br>\n当金融街繁荣到一定程度时,在其侵蚀现实与扭曲命运的影响下足以令一国破产的金融海啸一次次上演着,最坏情况下整个国家都会从现实与历史中消失.三国壮一郎是远东金融街的黑卡持有者,认为没有办法消灭金融街的他决定建立工会支配这个异界,以正确操控所有的资源来对抗即将发生的毁灭浪潮....<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zmjianpeikelimu: ['female', 'zm3jian', 4, ['zmmeishiqudong', 'zmgongzhutuxi'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】剑士<br>\n【宝具】公主突袭<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】美食殿堂工会的会长,以强大攻防为傲的饿肚子王女.<br>\n真名为尤丝蒂亚娜‧冯‧阿斯特莱亚,为了成为出色的王储独自离开王城游历大陆.因为王家特殊装备的原因,获得了强大力量的同时非常容易变得饥饿,因此打倒的魔物不管是什么都会试着吃掉.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zmjiangaowen: ['male', 'zm3jian', 5, ['zmshengzhedeshuzi', 'zmzhuanlunshenglijian'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"><img src=extension/综漫季刊叁/属性肃正.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】剑士<br>\n【宝具】转轮胜利剑<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】亚瑟王传说中的圆桌骑士之一,身负圣者的祝福,在白天时作为无人可比的勇士而驰名于世.<br>\n高文是圆桌骑士中耀眼的明星,亚瑟王以外的另一位肩负星之圣剑的人.他拥有得天独厚的才能与家世却不招致嫉妒,无论对谁都能做到认真而真挚地应对.其他的圆桌骑士这样说过:<完全不令人讨厌这也算是一种才能吧>.当然,作为骑士对王的忠心亦犹如钢铁一般.<br>\n高文持有被称为Excalibur的姐妹剑的太阳之圣剑;接受了这柄剑的高文得到了白昼、太阳的加护,那股力量在正午会被发挥到极致...也因此,他的实力在圆桌骑士中可与最强的兰斯洛特比肩,且在白天连兰斯洛特也只能拖延到日落才能战胜他.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zmshensadan: ['male', 'zm3shen', 5, ['zmduotianzhimos', 'zmyuanzuizhiwang'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"><img src=extension/综漫季刊叁/属性魔性.png width="34" height="22"><img src=extension/综漫季刊叁/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】上位者<br>\n【宝具】原罪之王<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★★★☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】地狱主宰,七大原罪魔神之首的傲慢魔神.<br>\n撒旦曾是天界的光耀晨星,至高大天使长.他强大且傲慢,明明有着非比寻常的地位却仍未满足,想要与那位至上者并列甚至取而代之.于是撒旦纠集了上古的魔神与天界三分之一的天使对上帝进行了叛乱,最终被击败.因为叛军中有许多强大存在即使是上帝也不能不顾一切强行将他们抹除,所以撒旦众从天界坠落逃往地狱深渊.<br>\n地狱是上帝创世后制造的一片特殊地带,为了安置罪人使自己不被打扰赋予了此地<上帝无法看清地狱><上帝无法听到地狱中人祈祷>等概念.撒旦等魔神利用这一点改造了地狱,使此处成为了隔绝神的魔域并经营着,开启了从天界手中争夺凡人灵魂的无尽战争.<br>\n【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zmlinameng: ['male', 'zm3lin', 4, ['zmtoudaozhe', 'zmmingyunmuma'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"><img src=extension/综漫季刊叁/属性混沌.png width="34" height="22"><img src=extension/综漫季刊叁/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性混乱中立.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】命运木马<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★★★☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】永远戴着单片眼镜的欺诈师,几乎没有什么是祂不能偷的.<br>\n前偷盗者途径真神,序列0[错误];因失去了那片唯一性转化的特殊眼镜而跌落至序列1[时之虫].尊名为[拨弄时光的指针;遨游命运的影子;欺诈与恶作剧的化身.]<br>\n阿蒙是作为完整神话生物出生的非凡者,一出生即拥有代表本途径真神权柄的唯一性<错误>.真实姿态由无数半透明蠕虫构成,以欺诈他人为乐.阿蒙天性喜欢冒险寻求刺激,但在进行冒险时总会做好充足的准备,进行精心谋划.作为顶级欺诈师对人心的把握非常精准,但固然拥有足够的智慧却不能真正理解人性.<br>\n阿蒙的能力简而言之就是偷窃,祂可以偷走物质、思绪、能力、时间、命运甚至一些概念上的东西;譬如祂可以偷走<距离>来达成瞬移的效果.在原世界,就连真神都要小心被他偷走自己的权柄.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zmlingaoyangsikaya: ['female', 'zm3lin', 4, ['zmnff', 'zmleitianriguang'], ['des: 【属性】<img src=extension/综漫季刊叁/属性类人.png width="34" height="22"><img src=extension/综漫季刊叁/属性野兽.png width="34" height="22"><img src=extension/综漫季刊叁/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序邪恶.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】雷天日光・祸音星落火流锤<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】坠落在通古斯的妖星,因其领域外力量扭曲惨死的动物们而糅杂出的特异生灵.<br>\n高扬斯卡娅是于公元2017年崭露头角,短短一个月内成为世界数一数二民用军事公司NFF的CEO,同时也是一名实力和成绩No.1的特工以及BeastⅣ的幼体.Beast是指受到『人类发展过程中诞生的罪业』所加持的某物,这只高扬斯卡娅秉承『被人类迫害的东西・人类用于迫害的东西』的概念,即网罗一切『人类所创造出的杀伤性用具』的神灵与『动物与自然的业报化身』.其能自由使用这个时代人类的兵器以及使兵器威力达到人类使用时的数倍.简而言之即是能瞬间发挥出自然因果报应的循环,并将这份破坏力应用于创造武器的文明上.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zmgongzherenmingyun: ['none', 'zm3gong', 4, ['zmsuminghuixiang', 'zmhongyinxiangchemingyunzhijing'], ['des: 【属性】<img src=extension/综漫季刊叁/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊叁/属性守序善良.png width="57" height="19"> <br>\n【职阶】弓兵<br>\n【宝具】命运交响曲<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】独臂演奏家和乐曲<命运>诞生的精灵,两个人都是非常固执的家伙.<br>\n音乐是照亮人心的光――突然间,那份<光>被世界夺走.自黑色陨石从天空中降下的那晚,异形的怪物<D2>开始将大地与人们蹂躏.D2被人们演奏的歌曲所吸引,最终<音乐>被视作为禁忌.<br>\n以音乐作为力量的少女们――<奏者>.她们的身上寄宿着人类史上残留的伟大歌剧、歌曲的乐谱,利用这股力量击败D2.指挥并引导她们的便是<指挥家>.为了让音乐重回世界,音乐痴朝雏磔人带着重要的人所变生的奏者命运向着纽约交响乐团开始了旅行.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                    },
                    translate: {
                        zmtiamiya: '阿米娅',
                        zmlinzhuoxinsikadi: '浊心斯卡蒂',
                        zmlinganziwuergong: '安兹乌尔恭',
                        zmhushetuxiang: '蛇屠箱',
                        zmhuxingxiong: '星熊',
                        zmhushennongshi: '神农氏',
                        zmhujiguang: '极光',
                        zmkuangangre: '昂热',
                        zmkuanghuilizi: '惠理子',
                        zmkegangbuluntailang: '冈部伦太郎',
                        zmtienlikepuqi: '恩里克普奇',
                        zmkenian: '年',
                        zmfaxi: '夕',
                        zmshakuiying: '傀影',
                        zmfachuxue: '初雪',
                        zmhuniyan: '泥岩',
                        zmqilijing: '李靖',
                        zmdouluomulusi: '罗慕路斯',
                        zmqiangyezong: '野鬃',
                        zmgongnengtianshi: '能天使',
                        zmhusaileiya: '塞雷娅',
                        zmfahuangshumomeixiang: '煌树茉美香',
                        zmdouqiaonasenqiaosida: '乔纳森乔斯达',
                        zmlinsanguoQ: '三国•Q',
                        zmjianpeikelimu: '佩可莉姆',
                        zmjiangaowen: '高文',
                        zmshensadan: '撒旦',
                        zmlinameng: '阿蒙',
                        zmlingaoyangsikaya: '高扬斯卡娅',
                        zmgongzherenmingyun: '磔人•命运',
                        ztiantangzhizao: '天堂制造',
                        ztiantangzhizao_info: '<li>其他角色于其回合内使用或打出牌的数量上限不得超过其回合开始时体力值的数量.<li>其他角色的回合结束后,你可消耗60点能量进行一个额外的回合;<br>&nbsp你每累计以此法进行一个额外的回合,之后场上其他角色于其回合内使用牌的数量上限-1.',
                        zmfuxieshifa: '复写施法',
                        zmfuxieshifa_info: '摸牌阶段结束时 你可查看牌堆顶的2张牌并选择其中1张基本牌或普通锦囊牌记录牌名<b><font color=DarkGray>(仅自己可见)</font></b><br>&nbsp你以此法记录的牌可以在合理的时机作为非实体牌使用或打出.<br>&nbsp你每累计于回合外以此法使用或打出2张牌,你的手牌上限+1,以此法可查看的牌数+1.',
                        zmqianghuashifa: '强化施法',
                        zmqianghuashifa_info: '当你使用带有伤害标签的牌指定目标时,你可消耗15点能量选择:<li>令此牌对该角色结算时伤害基数+1.<li>发动1次【复写施法】.',
                        zsz: '死亡是一切生命的终点',
                        zsz_info: '每局游戏限一次 <br>回合结束时,你可选择任意名没有手牌的角色.<br>&nbsp若如此做,之后的3轮游戏结束时若你未受到伤害,则以此法选择的角色死亡.',
                        zmzhongzhuanghuwei: '重装铁卫',
                        zmzhongzhuanghuwei_info: '出牌阶段限一次 <br>你可以弃置任意张花色不同的牌并指定等量的、未处于此效果中的其他角色;<br>&nbsp若如此做,在你存活期间直到你累计受到不少于2点伤害前这些角色不能成为带有伤害标签的牌之目标.',
                        zmzhongzhuanghuwei1: '护卫',
                        zmzhongzhuanghuwei1_info: '若星熊存活,则你不能成为带有伤害标签的牌之目标.',
                        zmborejingji: '般若•力之锯',
                        zmborejingji_info: '每回合限一次 <br>当你受到伤害时,你可消耗30点能量使此伤害-1.<li>若你已受伤,则每损失1点体力此技能所需的能量消耗-5.<li>若你如此做后剩余伤害不为0且伤害来源在你的攻击范围内,则你视为对其使用1张【杀】.',
                        zmgundongtuoli: '滚动脱离',
                        zmgundongtuoli_info: '出牌阶段限一次 <br>你可令一名其他角色与你同时展示1张手牌;<br>&nbsp若这两张牌颜色相同,则直到你下次发动此技能前你与该角色中首个需要使用或打出【闪】的角色在需要时视为使用或打出了1张闪.',
                        zmkezhuangfanghu: '壳状防护',
                        zmkezhuangfanghu_info: '锁定技 <li>处于【滚动脱离】状态中的其他角色之回合开始时,你消耗25点能量将你们双方的手牌补至与其中手牌数较大的一方相同;<br>&nbsp若如此做时你们双方的手牌数相同,则你们双方分别获得1点护甲.<li>若你的体力值为1,则你独自触发此技能并视自己为另一方进行结算.',
                        zmbianchangbaicao: '遍尝百草',
                        zmbianchangbaicao_info: '当你使用或打出牌后,根据此牌点数你获得同等的能量.',
                        zmzebeibafang: '泽被八方',
                        zmzebeibafang_info: '出牌阶段限一次 <br>你可以废除/回复1个装备栏并标记一名未以此法标记的其他角色/取消一名对应角色的标记.<li>因此法标记的角色其对应的装备栏装备量+1,手牌上限+1.<li>当以此法标记的角色进入濒死状态时,你需消耗30点能量令其与你的体力值调整为双方体力值之平均数并向上取整.<li>当你进入濒死状态时,你可消耗30点能量选择一名以此法标记的角色将双方体力值调整为双方体力值之平均数并向上取整.',
                        zmbaishe: '白蛇',
                        zmbaishe_info: '当你使用【杀】对其他角色造成伤害时,你可令一名除你与该角色外的其他角色获得该角色1个技能且令原技能失效,直到你以此法选择的角色受到伤害为止.',
                        zcmoon: '新月',
                        zcmoon_info: '<li>你的防御距离始终等于你的攻击范围.<li>当你攻击范围内的其他角色受到伤害/回复体力后,你可令其选择:<br>&nbsp①令你摸1张牌;<br>&nbsp②令你弃置其1张牌.',
                        zmiyu: '密语',
                        zmiyu_info: '锁定技 <li>当你于本局内使用第14张牌时,你将【白蛇】替换为【新月】:<b><font color=DarkGray><br>你的防御距离始终等于你的攻击范围.<br>当你攻击范围内的其他角色受到伤害/回复体力后,你可令其选择:<br>&nbsp①令你摸1张牌;<br>&nbsp②令你弃置其1张牌.</font></b><li>当你于本局内使用第24张牌时,你将【新月】替换为【天堂制造】:<b><font color=DarkGray><br>其他角色于其回合内使用或打出牌的数量上限不得超过其回合开始时体力值的数量.<br>其他角色的回合结束后,你可消耗60点能量进行一个额外的回合;<br>&nbsp你每累计以此法进行一个额外的回合,之后场上其他角色于其回合内使用牌的数量上限-1.</font></b>',
                        zmtianyouhonglu: '天有洪炉 地生五金',
                        zmtianyouhonglu_info: '<li>当其他角色使用武器牌时,若你未持有该牌的装备技能,则你可消耗15点能量获得该牌的装备技能并摸1张牌.<li>当你使用防具牌时,你可令任意名其他角色获得该牌的装备技能直到其各的回合结束为止.<li>因此法获得装备技能的角色装备区解除数量限制.',
                        zmjijiachengshan: '积甲成山 干明可鉴',
                        zmjijiachengshan_info: '当你对其他角色造成伤害/其他角色对你造成伤害时,若你与该角色装备区内均有牌,则你可与该角色分别弃置1张装备区内的牌令该伤害+1/-1.',
                        zmxushihuajing: '虚实画境',
                        zmxushihuajing_info: '出牌阶段限一次 <br>你可将1张手牌当做场上存在的1张延时锦囊牌使用;<br>&nbsp你以此法使用的延时锦囊牌离开判定区时将回到你的手牌.',
                        zmxieyishengxing: '写意胜形',
                        zmxieyishengxing_info: '当你于回合外需要因响应使用或打出1张【杀/闪】时,你可消耗30点能量摸1张牌并展示牌堆顶的1张牌:<li>若如此做,你可弃置1张与展示牌相同花色的手牌并获得展示牌;<br>&nbsp不论你是否弃置了牌,进行选择后你重复此过程直到进行4次为止.<li>进行的4次选择中若你完成了至少一半,则选择结束后你视为使用或打出了1张【杀/闪】.',
                        zmjingzhongxuying: '镜中虚影',
                        zmjingzhongxuying_info: '当你于回合外使用牌时,若你没有随从则消耗20点能量获得1个与你武将牌相同但体力为1的随从.<li>当你的回合结束时你切换至该随从,之后该随从进行1个回合后留在场上直到本轮结束时切换回本体继续游戏.<li>持有随从期间每次切换将清空当前能量.',
                        zmxueseyuezhang: '血色乐章',
                        zmxueseyuezhang_info: '出牌阶段限一次 <br>你可选择一名其他角色,之后你声名1种颜色并展示该角色1张手牌:<li>若颜色吻合,则其弃置该牌.<li>若颜色不吻合,在合理条件下该角色立即对你使用此牌.',
                        zmshengyinhuixiang: '圣音回响',
                        zmshengyinhuixiang_info: '当有角色进行判定后,若判定牌为红色则你可令一名角色获得该牌.',
                        zmziranzhenshe: '自然震慑',
                        zmziranzhenshe_info: '当你受到其他角色造成的伤害/对其他角色造成伤害后,你可消耗20点能量进行判定:<li>若判定结果为红色,你令该角色判定区内置入1张【兵粮寸断】.<li>若判定结果为黑色,该角色需弃置相当于你手牌中数量最多的一类牌之总数的牌,若不足则你对其造成1点伤害.',
                        zmwotuyushen: '沃土予身',
                        zmwotuyushen_info: '出牌阶段限一次 <br>你可弃置1张手牌令一名未装备防具的角色选择1种防具牌,之后其装备1张同名牌.<br>&nbsp以此法创造的防具牌将在你的回合开始时或离开装备区时消失.',
                        zmhuirangdexuemai: '秽壤的血脉',
                        zmhuirangdexuemai_info: '当有角色的牌被其他角色获得或弃置时,你可消耗30点能量取消之并令该角色获得你手牌的复制牌;<br>&nbsp若如此做,下次你以【沃土予身】创造的防具牌不会因原效果消失.',
                        zmlinglongbaota: '玲珑宝塔',
                        zmlinglongbaota_info: '出牌阶段限一次 <br>你可消耗至少60点能量选择任意名角色;<br>&nbsp你以此法选择的首个角色需弃置2张牌,其余选择的角色则离开游戏2轮.',
                        zmtianjiangfuqianjun: '天将伏千军',
                        zmtianjiangfuqianjun_info: '每回合限一次<br>当你被其他角色使用【杀】指定时或你失去牌后手牌数为全场最低时,你可与一名装备区内有牌的其他角色交换装备区内的牌并令你们双方各摸1张牌.',
                        zmhuangditequanl: '皇帝特权',
                        zmhuangditequanl_info: '出牌阶段限一次 <br>你可选择1张本轮内曾被使用过的普通锦囊牌视为使用之.',
                        zmwudengzhibi: '吾等之臂开拓一切,以达天际',
                        zmwudengzhibi_info: '回合开始时 你可消耗50点能量激活并将以下效果分享给任意名其他角色直到本轮结束.<li>此技能生效时,持有者获得牌后展示牌堆顶等量的牌;<br>&nbsp若展示的牌中有与本次获得的牌类型相同的牌,则持有者可将这些牌交给一名同样持有本效果的其他角色.<li>此技能失效时,若场上所有持有此效果的角色手牌数均不小于场上角色手牌的平均数,则这些角色的手牌上限永久+1.',
                        zmyizhixiangqian: '一致向前',
                        zmyizhixiangqian_info: '出牌阶段限一次 <br>你可消耗30点能量随机展示任意名角色的1张手牌;<br>&nbsp若如此做,被选定的角色分别摸相当于以此法展示的牌中花色总数数量的牌.<br>&nbsp因此法获得牌的其他角色根据获得牌的数量将在等量的轮数内获得【夹枪冲锋】.',
                        zmjiaqiangchongfeng: '夹枪冲锋',
                        zmjiaqiangchongfeng_info: '转换技 <br>每回合你拥有以下一项效果:<br>①攻击范围+1.<br>②使用【杀】的次数上限+1.',
                        zmwuzhuangpeisong: '武装配送',
                        zmwuzhuangpeisong_info: '回合开始时 你展示牌堆顶的1张牌并将之置于你的武将牌上;<br>&nbsp若回合开始时你的武将牌上有以此法放置的牌,则你可选择:<br>&nbsp①展示牌堆顶的2张牌并置于武将牌上.<br>&nbsp②将武将牌上以此法放置的牌交给一名角色.<br>当你受到伤害后你弃置武将牌上以此法放置的牌,且下次以此法放置牌时展示量改为你的体力值.',
                        zmlatelanchongfeng: '萨科塔冲锋',
                        zmlatelanchongfeng_info: '当你需要使用【杀/闪】时,若你手牌中或武将牌上有以【武装配送】放置的对应的牌,则你可消耗25点能量视为使用了1张对应的牌.',
                        zmguanghuizhiluq: '光辉之路',
                        zmguanghuizhiluq_info: '其他角色的摸牌阶段开始时 你可弃置任意张牌后令其摸牌数增加同等的数量;<br>&nbsp若如此做,该角色本回合可将1张于弃牌阶段弃置的牌交给你.',
                        zmbowenjizou: '波纹疾走',
                        zmbowenjizou_info: '锁定技 <li>出牌阶段开始时,若本轮内你获得的牌数不大于你的体力值,则你消耗15点能量摸1张牌并跳过弃牌阶段.<li>出牌阶段开始时,若你本轮内获得的牌数大于你的体力值,则你消耗15点能量视为使用了1张【酒】.<br>&nbsp发动此技能后本回合你获得[神圣]属性.',
                        zmwuxingmaoyi: '无形贸易',
                        zmwuxingmaoyi_info: '出牌阶段开始时 你可以选择一种方案生效2轮:<br>&nbsp<b><font color=MediumPurple>对冲基金</font></b>:此方案生效后你无法对其他角色使用牌,且你的手牌数固定为场上角色手牌的平均数.<br>&nbsp<b><font color=Orchid>时差套现</font></b>:你提前执行下个摸牌阶段;执行后每回合你首次获得牌时摸1张牌;你的手牌上限翻倍.<br>&nbsp<b><font color=Red>恶意并购</font></b>:你使用牌无次数限制;若生效后直到此方案失效时你未造成过伤害,则你流失全部体力.',
                        zmheisexiwei: '黑色席位',
                        zmheisexiwei_info: '锁定技 <br>当你对其他角色/其他角色对你造成伤害时,伤害来源获得对方与伤害量等量的牌.<br>&nbsp若不足,则改为获得1点体力.',
                        zmwuxingmaoyi1: '对冲基金',
                        zmwuxingmaoyi1_info: '你无法对其他角色使用牌,且手牌数变化时锁定为场上角色手牌之平均数.',
                        zmwuxingmaoyi2: '时差套现',
                        zmwuxingmaoyi2_info: '你的手牌上限翻倍.<br>&nbsp每回合首次获得牌时,你摸1张牌.',
                        zmwuxingmaoyi3: '恶意并购',
                        zmwuxingmaoyi3_info: '你使用牌无次数限制,且此效果结束时若此效果期间你未造成伤害,则流失全部体力.',
                        zmtongxingzhuangpei: '同型装配',
                        zmtongxingzhuangpei_info: '当其他角色抵消你使用的牌时,你可消耗至少60点能量根据你手牌中同类型牌的数量对其造成等量的伤害,弃置这些牌.',
                        zmluoyuzuji: '落雨阻击',
                        zmluoyuzuji_info: '每回合限一次<br>当其他角色受到伤害时,你可与该角色互相弃置对方1张手牌:<li>若双方以此法弃置的牌颜色相同,则该伤害-1;<li>若双方弃置的牌颜色不同,则该角色获得这些牌.',
                        zmmofafeijianshanguang: '魔法飞溅闪光',
                        zmmofafeijianshanguang_info: '当你受到伤害时,你可消耗35点能量使该伤害基数-1;<br>&nbsp若如此做时你以【落雨阻击】抵消过伤害,则你可清空记录并将累计抵消的伤害加入本次结算,且结算时超出此次伤害量的部分视为你对伤害来源造成等量的伤害.',
                        zmmeishiqudong: '美食驱动',
                        zmmeishiqudong_info: '锁定技 <li>结束阶段开始时,你需选择一个正常装备栏废除并摸2张牌.<li>当你对自己使用牌时,你可回复1个被废除的装备栏.',
                        zmgongzhutuxi: '公主突袭',
                        zmgongzhutuxi_info: '出牌阶段限一次 <br>你可消耗50点能量选择一名攻击范围内的其他角色,之后根据你的正常装备栏数进行等量次判定:<br>&nbsp若判定牌为♥️️,则你对其累计造成1点伤害.',
                        zmkuangaizhili: '狂爱之力',
                        zmkuangaizhili_info: '锁定技 <br>出牌阶段开始时,若你已受伤则你摸1张牌并选择使用/弃置此牌,且以此法使用的牌无次数限制;<br>&nbsp当你选择后,根据你的当前体力情况重复此过程:<li>你以此法展示的牌之总数至多相当于你的体力值.<li>你以此法使用的牌之总数至多相当于你已损失部分的体力值.',
                        zmzhimingchengjie: '致命惩戒',
                        zmzhimingchengjie_info: '当你对其他角色造成伤害时,你可消耗至少60点能量令此伤害+1;<li>若如此做时你的体力值大于2,则流失1点体力.<li>若如此做时你的体力值小于2,则回复1点体力.',
                        zmkuayuebianjie: '跨越边界',
                        zmkuayuebianjie_info: '锁定技<br>每轮限一次,当你失去最后的手牌或回复体力后,你依次获得此武将上次死亡时持有的手牌.<br>&nbsp此技能可跨局生效.',
                        zmshixiangxiuzheng: '事项修正',
                        zmshixiangxiuzheng_info: '出牌阶段开始时 你可消耗30点能量指定一名未以此法标记的角色标记之;<br>&nbsp当你发动【跨越边界】时,你可选择一名已标记的受伤角色清除标记令该角色的体力值与已损失部分的体力值互换.',
                        zmzhuanlunshenglijian: '转轮胜利剑',
                        zmzhuanlunshenglijian_info: '当你使用牌对其他角色造成伤害时,你可与该角色先后弃置1张手牌;<br>&nbsp若两张牌颜色相同,则该伤害+1.',
                        zmshengzhedeshuzi: '圣者的数字',
                        zmshengzhedeshuzi_info: '<li>当你累计使用的牌数为3的倍数时,你消耗30点能量重置本回合你的出牌次数并选择摸3张牌或回复1点体力.<li>当游戏轮数为3的倍数时:<br>&nbsp①你造成的伤害均为火焰伤害.<br>&nbsp②你使用的【杀】可指定距离不大于此杀点数的角色为目标.<br>&nbsp③此技能所消耗的能量减半.',
                        zmtoudaozhe: '偷盗者',
                        zmtoudaozhe_info: '每回合限一次 当其他角色使用牌时,你可弃置1张点数相同的牌取消此牌效果并获得此牌;<li>若你以此法弃置的牌与该牌颜色相同,则你根据该角色当前是否进行自己的回合以终止当前阶段或令该角色跳过下个相同的阶段;<br>&nbsp之后你可令一名角色额外执行1个当前阶段.<li>若你以此法弃置的牌与该牌花色相同,则你可选择该角色的1个技能作为临时技能获得直到你受到伤害为止,且在你持有该技能期间原技能失效.',
                        zmmingyunmuma: '命运木马',
                        zmmingyunmuma_info: '其他角色使用牌指定你为目标时,你可消耗40点能量指定一名曾成为【偷盗者】目标的其他角色代替你成为此牌目标<b><font color=DarkGray>(若其已为此牌目标,则此牌对其额外结算1次)</font></b>',
                        zmleitianriguang: '雷天日光・祸音星落火流锤',
                        zmleitianriguang_info: '出牌阶段开始时 <br>若你的能量达到30点,则你清空能量并暗中记录1~6中的1个数字;你至多以此法同时记录2个数字.<br>&nbsp当你死亡后,其他角色的回合结束时若其本回合造成的伤害数与你记录的某一数字相同,则你可清除1个对应的记录并对其造成等量的伤害.',
                        zmbingshasouji: '兵煞蒐集',
                        zmbingshasouji_info: '出牌阶段限一次 <br>你可移动场上其他角色的1张武器牌.',
                        zmnff: '兵煞蒐集',
                        zmnff_info: '<li>出牌阶段限一次 你可移动场上其他角色的1张武器牌至一名角色的空武器栏内.<li>其他角色的出牌阶段开始时,你可令其随机获得相当于其装备区内总牌数数量的武器技能直到回合结束.<br>&nbsp若如此做后该角色于此回合内造成了至少2点伤害或击杀了角色,则你摸2张牌.',
                        zmsuminghuixiang: '谐律',
                        zmsuminghuixiang_info: '若你以黑色-红色的顺序交替使用牌,则你使用牌无次数限制且你每正确使用1组则摸1张牌.',
                        zmhongyinxiangchemingyunzhijing: '命运交响曲',
                        zmhongyinxiangchemingyunzhijing_info: '当你使用牌对其他角色造成伤害时,你可消耗30点能量随机展示该角色的1张牌;<br>&nbsp若展示牌不为红色,其弃置之并重复此流程,直到展示次数大于你本回合使用此牌的次数为止.<br>&nbsp若你于最大次数内展示了红色牌,则该伤害+1.',
                        zmt_np: 'NP',
                        zmt_np_info: '',
                        zmt_np1: '充能',
                        zmt_np1_info: '',
                        zmt_np2: '充能',
                        zmt_np2_info: '',
                        zmtmoxing: '魔性',
                        zmtmoxing_info: '',
                        zmtsuzheng: '肃正',
                        zmtsuzheng_info: '',
                        zmtjuda: '巨大',
                        zmtjuda_info: '',
                        zmtgaodengshengming: '高等生命',
                        zmtgaodengshengming_info: '',
                        zmtlongxue: '龙血',
                        zmtlongxue_info: '',
                        zmtrenxing: '人形',
                        zmtrenxing_info: '',
                        zmtyaren: '亚人',
                        zmtyaren_info: '',
                        zmtleiren: '类人',
                        zmtleiren_info: '',
                        zmtshenzu: '神族',
                        zmtshenzu_info: '',
                        zmtshenxing: '神性',
                        zmtshenxing_info: '',
                        zmtshensheng: '神圣',
                        zmtshensheng_info: '对【魔性/死灵】造成的伤害+1.',
                        zmtsiling: '死灵',
                        zmtsiling_info: '',
                        zmtyeshou: '野兽',
                        zmtyeshou_info: '',
                        zmtmoshou: '魔兽',
                        zmtmoshou_info: '',
                        zmtzaowu: '造物',
                        zmtzaowu_info: '',
                        zmtyuansu: '元素',
                        zmtyuansu_info: '',
                        zmthundun: '混沌',
                        zmthundun_info: '',
                        zmtshikong: '时空',
                        zmtshikong_info: '',
                        zmtshangweizhe: '上位者',
                        zmtshangweizhe_info: '',
                        zmtlongzu: '龙族',
                        zmtlongzu_info: '',
                        zmtjixie: '机械',
                        zmtjixie_info: '',
                        zmtgaodengliliang: '高等力量',
                        zmtgaodengliliang_info: '',
                        zmtchaojuda: '超巨大',
                        zmtchaojuda_info: '',
                        zmjingu: '禁锢',
                        zmjingu_info: '无法使用/打出/基本牌',
                        zmzhongji: '重击',
                        zmzhongji_info: '【杀】的基础伤害加1.',
                        zzhongji: '伤害增幅',
                        zzhongji_info: '',
                        zmchusha1: '出杀+1',
                        zmchusha1_info: '',
                        zmchusha0: '出杀次数无限',
                        zmchusha0_info: '',
                        zmjingshenganshe: '精神干涉',
                        zmjingshenganshe_info: '若你于弃牌阶段弃置了牌,则根据弃牌数你获得等量的猜拳次数;<br>&nbsp直到你的下个回合开始前,当其他角色使用锦囊牌时你可与之猜拳;若你猜拳胜利则该牌失效.',
                        zmqingsenuhuo: '青色怒火',
                        zmqingsenuhuo_info: '当你受到其他角色造成的伤害或其他角色响应了你使用的牌后,你可消耗25点能量激活此技能;<li>此技能生效3轮,生效期间你的摸牌基数+1,出杀次数+1,手牌上限-1.<li>此技能生效期间若你重复发动此技能则持续时间不变,效果叠加.',
                        zmyuanguxueqin: '远古血亲',
                        zmyuanguxueqin_info: '出牌阶段限一次 <br>你可将所有手牌交给一名其他角色并令其获得【嗣】标记.<li>若场上存在持有【嗣】标记的角色,则当你的回合开始时你与这些角色锁定为横置状态.<li>当你或场上持有【嗣】的角色不因此法回复体力时,所有持有【嗣】的角色与你共享回复效果,且你们的体力上限将以每次增加1点的方式向你们中体力上限最大的角色趋同.<li>当持有【嗣】标记的角色对你或持有【嗣】的角色造成伤害时,你可移除其【嗣】标记.',
                        zmxuezhiguwu: '血之鼓舞',
                        zmxuezhiguwu_info: '出牌阶段开始前 你可消耗40点能量选择:<li>回复1点体力.<li>令场上持有【嗣】的角色下次造成伤害时可选择流失1点体力使伤害量+1.',
                        zmjidishouwei: '极地守卫',
                        zmjidishouwei_info: '转换技 <br>每次转换限一次 当其他角色摸牌/弃牌后,若其手牌数大于/小于你,则你可令其摸1张牌/弃1张牌.<br>&nbsp每次转换时若此技能仍有使用次数,则你摸1张牌.',
                        zmdiwenxiuqi: '低温休憩',
                        zmdiwenxiuqi_info: '结束阶段 你可消耗50点能量并弃置区域内所有牌激活此技能:<li>此技能生效时你回复1点体力并记录你因此法弃置的牌数.<li>此技能生效期间,当你摸牌后以此法记录的数字需减去摸牌数,若不小于0,则你回复1点体力;反之,则该效果结束.',
                        zmshijianling: '时间零',
                        zmshijianling_info: '准备阶段开始时 你可先后选择本回合之后将进行的2个阶段;<br>&nbsp若如此做,当你执行先选择的阶段时其内容替换为后选择的阶段.<br>&nbsp此技能至多连续发动2次.',
                        zmxuemaijifaa: '血脉激发',
                        zmxuemaijifaa_info: '当你使用或打出牌响应了其他角色的牌后,你可消耗40点能量收回此牌并可令1名其他角色获得【时间零】直到其回合结束.',
                        zmduotianzhimos: '堕天之魔',
                        zmduotianzhimos_info: '<li>当其他角色获得或弃置你区域内的牌时,其效果仅可作用于你的判定区.<li>每回合限一次 当其他角色弃置牌时,你可为该角色重新选择需弃置的牌<b><font color=DarkGray>(无区域限制)</font></b><br>&nbsp若如此做,则该角色记录你以此法选择的牌之牌名,之后该角色区域内每有1张同名牌,其手牌上限-1.',
                        zmyuanzuizhiwang: '原罪之王',
                        zmyuanzuizhiwang_info: '<li>场上每存在一名手牌数小于你的角色,你使用的牌可指定的合理目标数+1,手牌上限+1.<li>当其他角色对你造成伤害时,若该角色手牌数小于你,则你可消耗伤害量*20的能量取消此伤害.',
                        zmninggu: '凝固',
                        zmninggu_info: '每轮限一次 <br>当有角色失去某一区域内最后的牌时,你可令这些牌依次回到原位.',
                        zmgushou: '固守',
                        zmgushou_info: '<li>当有角色使用基本牌时,你可打出【无懈可击】抵消之.<li>弃牌阶段开始时 你可消耗25点能量取消之并将你的所有手牌转化为【无懈可击】.',
                    },
                    skill: {
                        zmjingshenganshe: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            init(player) {
                                player.storage.zmjingshenganshe = 0;
                            },
                            forced: true,
                            filter(event, player) {
                                var cards = [];
                                player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) {
                                        cards.addArray(evt.cards2);
                                    }
                                });
                                return cards.length;
                            },
                            content() {
                                var cardx = [];
                                trigger.player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger && evt.cards2.filterInD('d').length) cardx.addArray(evt.cards2.filterInD('d'));
                                });
                                var num = cardx.length;
                                player.storage.zmjingshenganshe = num;
                                player.addTempSkill('zmjingshenganshe_1', { player: 'phaseBegin' });
                            },
                            group: ['zmjingshenganshe_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊叁/audio:3',
                                    trigger: {
                                        global: ['useCard1'],
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    filter(event, player) {
                                        if (player.storage.zmjingshenganshe <= 0) return false;
                                        if (event.player == player) return false;
                                        if (get.type(event.card) != 'trick' && get.type(event.card) != 'delay') return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmjingshenganshe--;
                                        ('step 1');
                                        player.chooseToPSS(trigger.player);
                                        ('step 2');
                                        if (result.tie) event.goto(1);
                                        else if (result.bool) {
                                            trigger.cancel();
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmjingshenganshe != 0;
                                    },
                                    content() {
                                        player.storage.zmjingshenganshe = 0;
                                    },
                                },
                            },
                        },
                        zmqingsenuhuo: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num - player.storage.zmqingsenuhuo;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && player.storage.zmqingsenuhuo) return (num += player.storage.zmqingsenuhuo);
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:3',
                            trigger: {
                                global: ['useCard', 'respond', 'damageEnd'],
                            },
                            mark: true,
                            marktext: '青',
                            intro: {
                                content(storage) {
                                    if (storage <= 0) {
                                        return '未生效';
                                    } else {
                                        return `当前叠加至第${storage}层`;
                                    }
                                },
                            },
                            init(player) {
                                player.storage.zmqingsenuhuo = 0;
                                player.markSkill('zmqingsenuhuo');
                            },
                            check(event, player) {
                                if (player.hasSkill('zmqingsenuhuo_1') && player.storage.zmqingsenuhuo_1 <= 1) return false;
                                return true;
                            },
                            filter(event, player, name) {
                                if (name != 'damageEnd') {
                                    if (player.storage.zmt_np < 25) return false;
                                    if (event.player == player) return false;
                                    return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player);
                                } else {
                                    if (player.storage.zmt_np < 25) return false;
                                    return event.source != player && event.player == player;
                                }
                            },
                            prompt(event, player, name) {
                                var str = '';
                                if (!player.hasSkill('zmqingsenuhuo_1')) {
                                    str += '是否对发动【青色怒火】？生效后三轮内摸牌基数与出杀次数+1,手牌上限-1';
                                } else {
                                    str += `是否叠加【青色怒火】？当前已叠加${get.translation(player.storage.zmqingsenuhuo)}层,${get.translation(player.storage.zmqingsenuhuo_1)}轮后效果结束`;
                                }
                                return str;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 25;
                                player.storage.zmqingsenuhuo += 1;
                                player.markSkill('zmqingsenuhuo');
                                if (!player.hasSkill('zmqingsenuhuo_1')) {
                                    var t = Math.random();
                                    if (t <= 0.5) {
                                        game.playzm3('zmamiya2');
                                        game.mp423('zmamiya2');
                                    }
                                    if (t > 0.5) {
                                        game.playzm3('zmamiya1');
                                        game.mp423('zmamiya1');
                                    }
                                    player.addSkill('zmqingsenuhuo_1');
                                    player.storage.zmqingsenuhuo_1 = 3;
                                }
                            },
                            group: ['zmqingsenuhuo_2', 'zmtgaodengliliang', 'zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmqingsenuhuo_1 = 0;
                                        player.markSkill('zmqingsenuhuo_1');
                                    },
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    usable: 1,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.zmqingsenuhuo_1 -= 1;
                                        player.markSkill('zmqingsenuhuo_1');
                                        ('step 1');
                                        if (player.storage.zmqingsenuhuo_1 <= 0) {
                                            player.storage.zmqingsenuhuo = 0;
                                            player.storage.zmqingsenuhuo_1 = 0;
                                            player.removeSkill('zmqingsenuhuo_1');
                                        }
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊叁/audio:8',
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmqingsenuhuo >= 1;
                                    },
                                    content() {
                                        var num0 = player.storage.zmqingsenuhuo;
                                        trigger.num += num0;
                                    },
                                },
                            },
                        },
                        zmyuanguxueqin: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:7',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target && !target.hasSkill('zmyuanguxueqin_1');
                            },
                            content() {
                                'step 0';
                                if (!player.hasSkill('zmyuanguxueqin_4')) {
                                    player.addSkill('zmyuanguxueqin_4');
                                }
                                target.gainPlayerCard(player, 'h', Infinity, true);
                                target.addSkill('zmyuanguxueqin_1');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hp <= 2 || target.countCards('h') <= 2) return 5;
                                        return 1;
                                    },
                                },
                                threaten: 2.5,
                            },
                            group: ['zmyuanguxueqin_2', 'zmyuanguxueqin_3', 'zmyuanguxueqin_4'],
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '嗣',
                                    intro: {
                                        content: '海嗣的印记',
                                    },
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    usable: 30,
                                    filter(event, player) {
                                        var num3 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmyuanguxueqin_1');
                                        });
                                        var num4 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmyuanguxueqin');
                                        });
                                        return num4 >= 1 && event.player.hasSkill('zmyuanguxueqin');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.link(true);
                                    },
                                    ai: {
                                        nolink: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'link')) return [0, 0];
                                            },
                                        },
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊叁/audio:1',
                                    trigger: {
                                        global: 'recoverBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.name == 'zmyuanguxueqin_2') return false;
                                        return event.player.hasSkill('zmyuanguxueqin_1') || event.player.hasSkill('zmyuanguxueqin');
                                    },
                                    content() {
                                        'step 0';
                                        event.num = 0;
                                        event.num2 = 0;
                                        for (var i of game.players) {
                                            if (i.hasSkill('zmyuanguxueqin_1') || i == player) {
                                                event.num2 += i.maxHp;
                                                if (i.maxHp >= event.num) {
                                                    event.num = i.maxHp;
                                                }
                                            }
                                        }
                                        ('step 1');
                                        event.num1 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmyuanguxueqin_1') || i == player;
                                        });
                                        ('step 2');
                                        var num0 = event.num2 / event.num1;
                                        event.num3 = 0;
                                        for (var i of game.players) {
                                            if (i.hasSkill('zmyuanguxueqin_1') || i == player) {
                                                if (i.maxHp == num0) {
                                                    event.num3 += 1;
                                                }
                                            }
                                        }
                                        ('step 3');
                                        var num9 = 0;
                                        for (var i of game.players) {
                                            if (i.hasSkill('zmyuanguxueqin_1') || i == player) {
                                                if (i.maxHp + 1 <= event.num) {
                                                    num9 = event.num - i.maxHp;
                                                    i.gainMaxHp();
                                                }
                                            }
                                        }
                                        ('step 4');
                                        for (var i of game.players) {
                                            if ((i != trigger.player && i.hasSkill('zmyuanguxueqin_1')) || (i != trigger.player && i == player)) {
                                                i.recover(trigger.num);
                                                player.line(i, { color: [68, 68, 136] });
                                            }
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: ['damageEnd'],
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.source) < 0;
                                    },
                                    prompt(event, player) {
                                        return `是否撤销${get.translation(event.source)}的【嗣】标记？`;
                                    },
                                    filter(event, player) {
                                        if (event.source == player) return false;
                                        return event.source && event.source.hasSkill('zmyuanguxueqin_1') && (event.player.hasSkill('zmyuanguxueqin_1') || event.player.hasSkill('zmyuanguxueqin'));
                                    }, //QQQ
                                    content() {
                                        'step 0';
                                        trigger.source.removeSkill('zmyuanguxueqin_1');
                                    },
                                },
                                4: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        var num3 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmyuanguxueqin_1');
                                        });
                                        return num3 >= 1;
                                    },
                                    forced: true,
                                    content() {
                                        player.link(true);
                                    },
                                    ai: {
                                        nolink: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'link')) return [0, 0];
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        zmxuezhiguwu: {
                            group: ['zmthundun', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmyuanguxueqin_1');
                                });
                                return player.storage.zmt_np >= 40;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num4 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmyuanguxueqin_1');
                                });
                                var num5 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmyuanguxueqin_1') && current.hp == 1;
                                });
                                player.chooseControl('血之鼓舞', '回复体力', '取消').set('prompt', '可选择回复一点体力或令持有【嗣】的角色下次造成伤害时可流失1点体力使伤害量+1').ai = function (event, player) {
                                    if ((player.hp >= 4 && num5 <= 0 && num4 >= 1) || (num4 >= 1 && player.maxHp == player.hp)) return '血之鼓舞';
                                    return '回复体力';
                                };
                                ('step 1');
                                if (result.control == '血之鼓舞') {
                                    game.playzm3(['zmxuezhiguwu1', 'zmxuezhiguwu2', 'zmxuezhiguwu3'].randomGet());
                                    player.storage.zmt_np -= 40;
                                    for (var i of game.players) {
                                        if (i.hasSkill('zmyuanguxueqin_1')) {
                                            player.line(i, { color: [85, 0, 0] });
                                            i.addSkill('zmxuezhiguwu_1');
                                        }
                                    }
                                }
                                if (result.control == '回复体力') {
                                    player.storage.zmt_np -= 40;
                                    player.recover();
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmxuezhiguwu_1');
                                        player.chooseControl('增加伤害', '取消').set('prompt', '是否流失一点体力使伤害量+1？').ai = function (event, player) {
                                            if (get.damageEffect(trigger.player, player, player) > 0 && player.hp >= 3) return '增加伤害';
                                            return '取消';
                                        };
                                        ('step 1');
                                        if (result.control == '增加伤害') {
                                            player.loseHp();
                                            trigger.num++;
                                        }
                                    },
                                },
                            },
                        },
                        zsz: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('h') == 0 && current != player;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], '可选择任意名没有手牌的其他角色,之后三轮内若你没有受到伤害则这些角色死亡', function (card, player, target) {
                                        return player != target && target.countCards('h') == 0;
                                    })
                                    .set('ai', function (target) {
                                        if (player.countCards('h', { name: 'shan' }) == 0) return false;
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playzm3('zmanziwuergong1');
                                    game.mp423('zmanziwuergong1');
                                    player.addSkill('zsz_2');
                                    player.removeSkill('zsz');
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                } else event.finish();
                                ('step 2');
                                if (result.bool && event.num2 < event.targets.length) {
                                    event.targets[event.num2].addSkill('zsz_1');
                                    event.num2++;
                                    event.redo();
                                }
                            },
                            subSkill: {
                                1: {},
                                2: {
                                    trigger: {
                                        global: 'roundStart',
                                        player: 'damageEnd',
                                    },
                                    init(player) {
                                        player.storage.zsz_2 = 0;
                                        player.markSkill('zsz_2');
                                    },
                                    usable: 1,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'damageEnd') {
                                            event.goto(4);
                                        } else {
                                            player.storage.zsz_2 += 1;
                                            player.markSkill('zsz_2');
                                        }
                                        ('step 1');
                                        if (player.storage.zsz_2 >= 3) {
                                            player.removeSkill('zsz_2');
                                            event.players = get.players(player);
                                            event.num = 0;
                                            event.players = event.players.filter((i) => i.hasSkill('zsz_1'));
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.players.length >= 1) {
                                            game.playzm3('zmanziwuergong2');
                                            game.mp423('zmanziwuergong2');
                                        }
                                        ('step 3');
                                        if (event.players.length) {
                                            var current = event.players.shift();
                                            current.removeSkill('zsz_1');
                                            current.say('这是!!!');
                                            current.die();
                                            event.redo();
                                        }
                                        ('step 4');
                                        player.removeSkill('zsz_2');
                                        event.players = get.players(player);
                                        event.num = 0;
                                        event.players = event.players.filter((i) => i.hasSkill('zsz_1'));
                                        ('step 5');
                                        if (event.players.length >= 1) {
                                            var current = event.players.shift();
                                            current.removeSkill('zsz_1');
                                            event.redo();
                                        }
                                    },
                                    ai: {
                                        threaten: 4,
                                    },
                                },
                            },
                        },
                        zmfuxieshifa: {
                            init(p, s) {
                                p.storage[s] = [];
                            },
                            marktext: '法',
                            intro: {
                                content(n, p, s, content) {
                                    var str = '';
                                    for (var i = 0; i < n.length; i++) {
                                        var t = n[i];
                                        str += get.translation(t.name);
                                    }
                                    if (p.isUnderControl(true)) {
                                        return str;
                                    }
                                    return '不可见';
                                },
                                markcount(n, p, content) {
                                    return n.filter(function (i) {
                                        return i.use;
                                    }).length;
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:10',
                            trigger: {
                                player: 'phaseDrawEnd',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num0 = Math.floor(player.storage.zmfuxieshifa_1 / 2);
                                if (num0 >= 1) {
                                    event.cards = get.cards(2 + num0);
                                } else {
                                    event.cards = get.cards(2);
                                }
                                ('step 1');
                                var next = player.chooseCardButton('可选择记录其中一张基本牌或普通锦囊牌', event.cards);
                                next.ai = function (button) {
                                    return button.link.name != 'du';
                                };
                                next.filterButton = function (button) {
                                    return get.type(button.link) == 'basic' || get.type(button.link) == 'trick';
                                };
                                ('step 2');
                                if (result.bool) {
                                    event.cards1 = result.links[0];
                                    player.markAuto('zmfuxieshifa', [{ use: true, name: event.cards1.name, natu: event.cards1.nature }]);
                                    game.log(player, '记录了', '<span class=yellowtext>' + get.translation(event.cards1.name));
                                }
                            },
                            group: ['zmfuxieshifa_use', 'zmfuxieshifa_1', 'zmfuxieshifa_re'],
                            subSkill: {
                                1: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            var num0 = Math.floor(player.storage.zmfuxieshifa_1 / 3);
                                            return num + num0;
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmfuxieshifa_1 = 0;
                                    },
                                },
                                re: {
                                    enable: ['chooseToRespond'],
                                    filter(event, player) {
                                        return player.storage.zmfuxieshifa.filter(function (i) {
                                            return i.use && event.filterCard({ name: i.name, nature: i.natu }, player, event);
                                        }).length;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            for (var i = 0; i < player.storage.zmfuxieshifa.length; i++) {
                                                var t = player.storage.zmfuxieshifa[i];
                                                if (t.use) list.push([get.translation(t), '', t.name, t.natu]);
                                            }
                                            return ui.create.dialog('复写施法', [list, 'vcard'], 'hidden');
                                        },
                                        filter(button, player) {
                                            var evt = _status.event.parent;
                                            if (evt && evt.filterCard) {
                                                return evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
                                            }
                                            return false;
                                        },
                                        check(button) {
                                            var player = get.player();
                                            var players = game.filterPlayer();
                                            if (player.countCards('h', button.link[2])) return 0;
                                            if (button.link[2] == 'wuzhong') {
                                                if (player.countCards('h') < player.hp) {
                                                    return 3 + Math.random();
                                                }
                                                return 0;
                                            }
                                            if (button.link[2] == 'tao') {
                                                return 3 + Math.random();
                                            }
                                            if (button.link[2] == 'sha') {
                                                return 2 + Math.random();
                                            }
                                            if (button.link[2] == 'juedou') {
                                                return 2 + Math.random();
                                            }
                                            if (button.link[2] == 'guohe') {
                                                return 2 + Math.random();
                                            }
                                            if (button.link[2] == 'shunshou') {
                                                for (var i of players) {
                                                    if (player.canUse('shunshou', i) && get.attitude(player, i) < 0) {
                                                        return 2 + Math.random();
                                                    }
                                                }
                                                return 0;
                                            }
                                            if (button.link[2] == 'tiesuo') {
                                                return 1 + Math.random();
                                            }
                                            if (button.link[2] == 'jiu') {
                                                if (get.effect(player, { name: 'jiu' }) > 0) {
                                                    return 1 + Math.random();
                                                }
                                                return 0;
                                            }
                                            if (button.link[2] == 'nanman' || button.link[2] == 'wanjian' || button.link[2] == 'taoyuan' || button.link[2] == 'wugu') {
                                                var eff = 0;
                                                for (var i of players) {
                                                    if (i != player) {
                                                        eff += get.effect(i, { name: button.link[2] }, player, player);
                                                    }
                                                }
                                                if (eff > 0) {
                                                    return 1 + Math.random();
                                                }
                                                return 0;
                                            }
                                            return Math.random();
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard() {
                                                    return false;
                                                },
                                                cards: links,
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                                selectCard: -1,
                                                popname: true,
                                                log: false,
                                                precontent() {
                                                    'step 0';
                                                    var name = lib.skill[event.result.skill].cards[0][0];
                                                    if (
                                                        player.storage.zmfuxieshifa.filter(function (i) {
                                                            return get.translation(i) == name;
                                                        })[0].use == true
                                                    ) {
                                                        if (_status.currentPhase != player) {
                                                            game.playzm3(['zmfuxieshifa_use4', 'zmfuxieshifa_use3', 'zmfuxieshifa_use2', 'zmfuxieshifa_use1'].randomGet());
                                                            player.storage.zmfuxieshifa_1++;
                                                        }
                                                        player.storage.zmfuxieshifa.filter(function (i) {
                                                            return get.translation(i) == name;
                                                        })[0].natu = undefined;
                                                        player.storage.zmfuxieshifa.filter(function (i) {
                                                            return get.translation(i) == name;
                                                        })[0].use = undefined;
                                                        player.storage.zmfuxieshifa.filter(function (i) {
                                                            return get.translation(i) == name;
                                                        })[0].name = undefined;
                                                        player.markSkill('zmfuxieshifa');
                                                    }
                                                },
                                            };
                                        },
                                    },
                                    ai: {
                                        order: 11,
                                        respondShan: true,
                                        respondSha: true,
                                        save: true,
                                        skillTagFilter(player, tag) {
                                            var f = function (n) {
                                                return player.storage.zmfuxieshifa.filter(function (i) {
                                                    return i.use && i.name == n;
                                                }).length;
                                            };
                                            if (tag == 'respondSha') {
                                                if (!f('sha')) return false;
                                            } else if (tag == 'respondShan') {
                                                if (!f('shan')) return false;
                                            } else {
                                                if (!f('tao') && !f('jiu')) return false;
                                            }
                                        },
                                        result: {
                                            player(player) {
                                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                                return 1;
                                            },
                                        },
                                    },
                                },
                                use: {
                                    enable: ['chooseToUse'],
                                    filter(event, player) {
                                        return player.storage.zmfuxieshifa.filter(function (i) {
                                            return i.use && event.filterCard({ name: i.name, nature: i.natu }, player, event);
                                        }).length;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            for (var i = 0; i < player.storage.zmfuxieshifa.length; i++) {
                                                var t = player.storage.zmfuxieshifa[i];
                                                if (t.use) list.push([get.translation(t), '', t.name, t.natu]);
                                            }
                                            return ui.create.dialog('复写施法', [list, 'vcard'], 'hidden');
                                        },
                                        filter(button, player) {
                                            var evt = _status.event.parent;
                                            if (evt && evt.filterCard) {
                                                return evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
                                            }
                                            return false;
                                        },
                                        check(button) {
                                            var player = get.player();
                                            var players = game.filterPlayer();
                                            if (player.countCards('h', button.link[2])) return 0;
                                            if (button.link[2] == 'wuzhong') {
                                                if (player.countCards('h') < player.hp) {
                                                    return 3 + Math.random();
                                                }
                                                return 0;
                                            }
                                            if (button.link[2] == 'tao') {
                                                return 3 + Math.random();
                                            }
                                            if (button.link[2] == 'sha') {
                                                return 2 + Math.random();
                                            }
                                            if (button.link[2] == 'juedou') {
                                                return 2 + Math.random();
                                            }
                                            if (button.link[2] == 'guohe') {
                                                return 2 + Math.random();
                                            }
                                            if (button.link[2] == 'shunshou') {
                                                for (var i of players) {
                                                    if (player.canUse('shunshou', i) && get.attitude(player, i) < 0) {
                                                        return 2 + Math.random();
                                                    }
                                                }
                                                return 0;
                                            }
                                            if (button.link[2] == 'tiesuo') {
                                                return 1 + Math.random();
                                            }
                                            if (button.link[2] == 'jiu') {
                                                if (get.effect(player, { name: 'jiu' }) > 0) {
                                                    return 1 + Math.random();
                                                }
                                                return 0;
                                            }
                                            if (button.link[2] == 'nanman' || button.link[2] == 'wanjian' || button.link[2] == 'taoyuan' || button.link[2] == 'wugu') {
                                                var eff = 0;
                                                for (var i of players) {
                                                    if (i != player) {
                                                        eff += get.effect(i, { name: button.link[2] }, player, player);
                                                    }
                                                }
                                                if (eff > 0) {
                                                    return 1 + Math.random();
                                                }
                                                return 0;
                                            }
                                            return Math.random();
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard() {
                                                    return false;
                                                },
                                                cards: links,
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                                selectCard: -1,
                                                popname: true,
                                                log: false,
                                                precontent() {
                                                    'step 0';
                                                    var name = lib.skill[event.result.skill].cards[0][0];
                                                    if (
                                                        player.storage.zmfuxieshifa.filter(function (i) {
                                                            return get.translation(i) == name;
                                                        })[0].use == true
                                                    ) {
                                                        if (_status.currentPhase != player) {
                                                            game.playzm3(['zmfuxieshifa_use4', 'zmfuxieshifa_use3', 'zmfuxieshifa_use2', 'zmfuxieshifa_use1'].randomGet());
                                                            player.storage.zmfuxieshifa_1++;
                                                        }
                                                        player.storage.zmfuxieshifa.filter(function (i) {
                                                            return get.translation(i) == name;
                                                        })[0].natu = undefined;
                                                        player.storage.zmfuxieshifa.filter(function (i) {
                                                            return get.translation(i) == name;
                                                        })[0].use = undefined;
                                                        player.storage.zmfuxieshifa.filter(function (i) {
                                                            return get.translation(i) == name;
                                                        })[0].name = undefined;
                                                        player.markSkill('zmfuxieshifa');
                                                    }
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return `选择${(get.translation(links[0][3]) || '') + get.translation(links[0][2])}的目标`;
                                        },
                                    },
                                    hiddenCard(player) {
                                        return player.storage.zmfuxieshifa.filter(function (i) {
                                            return i.use && i.name == 'wuxie';
                                        }).length;
                                    },
                                    ai: {
                                        order: 11,
                                        respondShan: true,
                                        respondSha: true,
                                        save: true,
                                        skillTagFilter(player, tag) {
                                            var f = function (n) {
                                                return player.storage.zmfuxieshifa.filter(function (i) {
                                                    return i.use && i.name == n;
                                                }).length;
                                            };
                                            if (tag == 'respondSha') {
                                                if (!f('sha')) return false;
                                            } else if (tag == 'respondShan') {
                                                if (!f('shan')) return false;
                                            } else {
                                                if (!f('tao') && !f('jiu')) return false;
                                            }
                                        },
                                        result: {
                                            player(player) {
                                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                                return 1;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        zmqianghuashifa: {
                            group: ['zmtgaodengliliang', 'zmtsiling', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:3',
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zmt_np < 15) return false;
                                if (!event.card) return false;
                                if (!event.targets) return false;
                                return get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('增加伤害', '增加储备', '取消')
                                    .set('prompt', '可选择一项效果发动')
                                    .set('choiceList', [`令${get.translation(trigger.card)}伤害基数+1`, '发动一次【复写施法】', '取消']).ai = function (event, player) {
                                        if ((get.damageEffect(trigger.targets[0], player, player) > 0 && Math.random() < 0.4) || (get.damageEffect(trigger.targets[0], player, player) > 0 && trigger.targets[0].countCards('h') == 0)) return '增加伤害';
                                        return '增加储备';
                                    };
                                ('step 1');
                                if (result.control == '增加伤害') {
                                    player.storage.zmt_np -= 15;
                                    trigger.baseDamage++;
                                }
                                if (result.control == '增加储备') {
                                    player.storage.zmt_np -= 15;
                                    player.useSkill('zmfuxieshifa');
                                }
                            },
                        },
                        zmzhongzhuanghuwei: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:5',
                            usable: 1,
                            enable: 'phaseUse',
                            position: 'he',
                            selectTarget() {
                                return ui.selected.cards.length;
                            },
                            filterTarget(card, player, target) {
                                return target != player && !target.hasSkill('zmzhongzhuanghuwei1');
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            selectCard: [1, Infinity],
                            filterCard(card) {
                                var suit = card.suit;
                                if (Array.isArray(ui.selected.cards))
                                    for (var i of ui.selected.cards) {
                                        if (i.suit == suit) return false;
                                    }
                                return true;
                            },
                            complexCard: true,
                            content() {
                                if (!player.hasSkill('zmzhongzhuanghuwei_1')) {
                                    player.addSkill('zmzhongzhuanghuwei_1');
                                }
                                target.addSkill('zmzhongzhuanghuwei1');
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target(player, target) {
                                        if (
                                            game.countPlayer(function (current) {
                                                return current != player && get.attitude(player, current) > 0;
                                            }) > 0
                                        )
                                            return 1;
                                    },
                                },
                                expose: 0.3,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['damage', 'die'],
                                    },
                                    init(player) {
                                        player.storage.zmzhongzhuanghuwei_1 = 0;
                                    },
                                    usable: 1,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'die') {
                                            player.storage.zmzhongzhuanghuwei_1 += 2;
                                        } else {
                                            player.storage.zmzhongzhuanghuwei_1 += trigger.num;
                                        }
                                        ('step 1');
                                        if (player.storage.zmzhongzhuanghuwei_1 >= 2) {
                                            event.players = get.players(player);
                                            player.storage.zmzhongzhuanghuwei_1 = 0;
                                            event.players = event.players.filter((i) => i.hasSkill('zmzhongzhuanghuwei1'));
                                        }
                                        ('step 2');
                                        if (event.players.length >= 1) {
                                            var current = event.players.shift();
                                            current.removeSkill('zmzhongzhuanghuwei1');
                                            event.redo();
                                        }
                                    },
                                },
                            },
                        },
                        zmzhongzhuanghuwei1: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    var num4 = game.countPlayer(function (current) {
                                        return current.hasSkill('zmzhongzhuanghuwei');
                                    });
                                    if (get.tag(card, 'damage') && num4 >= 1) return false;
                                },
                            },
                        },
                        zmborejingji: {
                            group: ['zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            usable: 1,
                            check(event, player) {
                                return player.hp <= 2;
                            },
                            filter(event, player) {
                                var num = player.maxHp - player.hp;
                                var num1 = num * 5;
                                return player.storage.zmt_np >= 30 - num1 && event.num > 0;
                            },
                            content() {
                                'step 0';
                                var num = player.maxHp - player.hp;
                                var num1 = num * 5;
                                player.storage.zmt_np -= 30 - num1;
                                trigger.num -= 1;
                                ('step 1');
                                if (trigger.source != undefined && trigger.num != 0 && get.distance(player, trigger.source, 'attack') <= 1) {
                                    game.playzm3(['zmborejingji21', 'zmborejingji22'].randomGet());
                                    game.mp423('zmxingxiong');
                                    player.useCard({ name: 'sha' }, trigger.source, false);
                                } else {
                                    game.playzm3(['zmborejingji11', 'zmborejingji12'].randomGet());
                                }
                            },
                            ai: {
                                threaten: 1.6,
                            },
                        },
                        zmgundongtuoli: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h') > 0 && target != player && !target.hasSkill('zmgundongtuoli_2');
                            },
                            content() {
                                'step 0';
                                player.removeSkill('zmgundongtuoli_1');
                                event.players = get.players(player);
                                event.players = event.players.filter((i) => i.hasSkill('zmgundongtuoli_2'));
                                ('step 1');
                                if (event.players.length >= 1) {
                                    var current = event.players.shift();
                                    current.removeSkill('zmgundongtuoli_2');
                                    event.redo();
                                }
                                ('step 2');
                                if (target.countCards('h') == 0 || player.countCards('h') == 0) {
                                    event.finish();
                                    return;
                                }
                                ('step 3');
                                var sendback = function () {
                                    if (_status.event != event) {
                                        return function () {
                                            event.resultOL = _status.event.resultOL;
                                        };
                                    }
                                };
                                if (player.isOnline()) {
                                    player.wait(sendback);
                                    event.ol = true;
                                    player.send(function () {
                                        game.me.chooseCard(true).set('glow_result', true).ai = function () {
                                            return Math.random();
                                        };
                                        game.resume();
                                    });
                                } else {
                                    event.localPlayer = true;
                                    player.chooseCard(true).set('glow_result', true).ai = function () {
                                        return Math.random();
                                    };
                                }
                                if (target.isOnline()) {
                                    target.wait(sendback);
                                    event.ol = true;
                                    target.send(function () {
                                        var rand = Math.random() < 0.4;
                                        game.me.chooseCard(true).set('glow_result', true).ai = function (card) {
                                            if (rand) return card.name == 'shan' ? 1 : 0;
                                            return card.name == 'shan' ? 0 : 1;
                                        };
                                        game.resume();
                                    });
                                } else {
                                    event.localTarget = true;
                                }
                                ('step 4');
                                if (event.localPlayer) {
                                    event.card1 = result.cards[0];
                                }
                                if (event.localTarget) {
                                    var rand = Math.random() < 0.4;
                                    target.chooseCard(true).set('glow_result', true).ai = function (card) {
                                        if (rand) return card.name == 'shan' ? 1 : 0;
                                        return card.name == 'shan' ? 0 : 1;
                                    };
                                }
                                ('step 5');
                                if (event.localTarget) {
                                    event.card2 = result.cards[0];
                                }
                                if (!event.resultOL && event.ol) {
                                    game.pause();
                                }
                                ('step 6');
                                try {
                                    if (!event.card1) event.card1 = event.resultOL[player.playerid].cards[0];
                                    if (!event.card2) event.card2 = event.resultOL[target.playerid].cards[0];
                                    if (!event.card1 || !event.card2) {
                                        throw 'err';
                                    }
                                } catch (e) {
                                    event.finish();
                                    return;
                                }
                                if (event.num2 >= 10 || event.num2 <= 4) {
                                    if (target.countCards('h') > 2) {
                                        event.addToAI = true;
                                    }
                                }
                                game.broadcastAll(
                                    function (card1, card2) {
                                        card1.classList.remove('glow');
                                        card2.classList.remove('glow');
                                    },
                                    event.card1,
                                    event.card2
                                );
                                ('step 7');
                                game.broadcastAll(function () {
                                    ui.arena.classList.add('thrownhighlight');
                                });
                                game.addVideo('thrownhighlight1');
                                player.$compare(event.card1, target, event.card2);
                                ('step 8');
                                game.log(player, '展示了', event.card1);
                                game.log(target, '展示了', event.card2);
                                var color1 = get.color(event.card1);
                                var color2 = get.color(event.card2);
                                player.$gain2(event.card1);
                                target.$gain2(event.card2);
                                if (color1 == color2) {
                                    player.addSkill('zmgundongtuoli_1');
                                    target.addSkill('zmgundongtuoli_2');
                                }
                                game.broadcastAll(function () {
                                    ui.arena.classList.remove('thrownhighlight');
                                });
                                game.addVideo('thrownhighlight2');
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        if (target.hp <= 2) return 5;
                                        if (player.hasSkill('zmgundongtuoli_1')) return 0;
                                        return 2;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊叁/audio:5',
                                    trigger: {
                                        global: ['chooseToRespondBegin', 'chooseToUseBegin'],
                                    },
                                    filter(event, player) {
                                        if (event.responded) return false;
                                        if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                        if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                        return event.player.hasSkill('zmgundongtuoli_1') || event.player.hasSkill('zmgundongtuoli_2');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        trigger.player.removeSkill('zmgundongtuoli_1');
                                        player.removeSkill('zmgundongtuoli_1');
                                        event.players = get.players(player);
                                        event.players = event.players.filter((i) => i.hasSkill('zmgundongtuoli_2'));
                                        ('step 1');
                                        if (event.players.length >= 1) {
                                            var current = event.players.shift();
                                            current.removeSkill('zmgundongtuoli_2');
                                            event.redo();
                                        }
                                        ('step 2');
                                        player.line(trigger.player, 'green');
                                        trigger.untrigger();
                                        trigger.responded = true;
                                        trigger.result = { bool: true, card: { name: 'shan' } };
                                    },
                                },
                                2: {},
                            },
                        },
                        zmkezhuangfanghu: {
                            group: ['zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            trigger: {
                                global: ['phaseBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zmt_np < 25) return false;
                                return (event.player.hasSkill('zmgundongtuoli_2') && event.player != player) || (event.player == player && player.hp == 1);
                            },
                            content() {
                                if (trigger.player == player) {
                                    game.playzm3('zmqiuzhuangfanghu21');
                                }
                                player.storage.zmt_np -= 25;
                                var num1 = trigger.player.countCards('h');
                                var num0 = player.countCards('h');
                                if (num1 >= num0) {
                                    if (num1 == num0) {
                                        player.changeHujia();
                                        trigger.player.changeHujia();
                                    } else {
                                        player.draw(num1 - num0);
                                    }
                                } else {
                                    trigger.player.draw(num0 - num1);
                                }
                            },
                        },
                        zmbianchangbaicao: {
                            group: ['zmtrenxing', 'zmtshenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number != undefined;
                            },
                            content() {
                                var num = trigger.card.number;
                                player.storage.zmt_np += num;
                            },
                        },
                        zmzebeibafang: {
                            nobracket: true,
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 2022,
                            check(event, player) {
                                var num = event.player.hp + player.hp;
                                if (Math.ceil(num / 2) <= 0) return false;
                                return get.attitude(player, event.player) > 0;
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zmt_np < 30) return false;
                                if (!event.player.isDying()) return false;
                                if (event.player != player) {
                                    return event.player.hasSkill('zmzebeibafang_wuqi') || event.player.hasSkill('zmzebeibafang_fangju') || event.player.hasSkill('zmzebeibafang_baowu') || event.player.hasSkill('zmzebeibafang_gongjima') || event.player.hasSkill('zmzebeibafang_fangyuma');
                                } else {
                                    return game.hasPlayer(function (current) {
                                        return (current != player && current.hasSkill('zmzebeibafang_wuqi')) || (current != player && current.hasSkill('zmzebeibafang_fangju')) || (current != player && current.hasSkill('zmzebeibafang_baowu')) || (current != player && current.hasSkill('zmzebeibafang_gongjima')) || (current != player && current.hasSkill('zmzebeibafang_fangyuma'));
                                    });
                                }
                            },
                            content() {
                                'step 0';
                                event.num0 = player.hp;
                                if (trigger.player != player) {
                                    game.playzm3(['zmzebeibafang11', 'zmzebeibafang11', 'zmzebeibafang12', 'zmzebeibafang13'].randomGet());
                                    player.storage.zmt_np -= 30;
                                    var num = Math.ceil((trigger.player.hp + player.hp) / 2);
                                    var num0 = player.hp;
                                    var num1 = trigger.player.hp;
                                    if (num >= num0) {
                                        player.changeHp(+(num - num0));
                                    } else {
                                        player.changeHp(-(num0 - num));
                                    }
                                    if (num >= num1) {
                                        trigger.player.changeHp(+(num - num1));
                                    } else {
                                        trigger.player.changeHp(-(num1 - num));
                                    }
                                    event.goto(2);
                                } else {
                                    player
                                        .chooseTarget('可选择一名以【泽被八方】标记的角色调整体力', [1, 1], function (card, player, target) {
                                            if (target == player) return false;
                                            return target.hasSkill('zmzebeibafang_wuqi') || target.hasSkill('zmzebeibafang_fangju') || target.hasSkill('zmzebeibafang_baowu') || target.hasSkill('zmzebeibafang_gongjima') || target.hasSkill('zmzebeibafang_fangyuma');
                                        })
                                        .set('ai', function (target) {
                                            if (Math.ceil((target.hp + event.num0) / 2) <= 0) return false;
                                            return target.hp;
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    event.num2 = 1;
                                    event.target = result.targets[0];
                                    game.playzm3(['zmzebeibafang21', 'zmzebeibafang22'].randomGet());
                                    player.storage.zmt_np -= 30;
                                    var num = Math.ceil((result.targets[0].hp + player.hp) / 2);
                                    var num0 = player.hp;
                                    var num1 = result.targets[0].hp;
                                    if (num >= num0) {
                                        player.changeHp(+(num - num0));
                                    } else {
                                        player.changeHp(-(num0 - num));
                                    }
                                    if (num >= num1) {
                                        result.targets[0].changeHp(+(num - num1));
                                    } else {
                                        result.targets[0].changeHp(-(num1 - num));
                                    }
                                }
                                ('step 2');
                                if (trigger.player.hp <= 0) {
                                    trigger.player.dying({ source: player });
                                }
                                if (player.hp <= 0) {
                                    player.dying({ source: player });
                                }
                                if (event.num2 == 1) {
                                    if (event.target.hp <= 0) {
                                        event.target.dying({ source: player });
                                    }
                                }
                            },
                            group: ['zmzebeibafang_baowufc', 'zmzebeibafang_baowuhf', 'zmzebeibafang_wuqifc', 'zmzebeibafang_wuqihf', 'zmzebeibafang_fangjufc', 'zmzebeibafang_fangjuhf', 'zmzebeibafang_fangyumafc', 'zmzebeibafang_fangyumahf', 'zmzebeibafang_jingongmafc', 'zmzebeibafang_jingongmahf'],
                            subSkill: {
                                temp: {},
                                jingongmahf: {
                                    name: '回复进攻马栏',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_jingongma');
                                        });
                                        return player.isDisabled(4) && num == 1 && !player.hasSkill('zmzebeibafang_temp');
                                    },
                                    content() {
                                        'step 0';
                                        var aa = game.findPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_jingongma');
                                        });
                                        player
                                            .chooseControl('确定', 'cancel2', function () {
                                                if (get.attitude(player, aa) <= 0) return '确定';
                                                return 'cancel2';
                                            })
                                            .set('prompt', `是否撤销${get.translation(aa)}的标记并回复你的进攻马栏？`);
                                        ('step 1');
                                        var aa = game.findPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_jingongma');
                                        });
                                        if (result.control == '确定') {
                                            game.playzm3('zmzebeibafang00000');
                                            if (!player.hasSkill('zmzebeibafang_temp')) {
                                                player.addTempSkill('zmzebeibafang_temp');
                                            }
                                            player.enableEquip('equip4');
                                            aa.line(player, { color: [153, 204, 85] });
                                            aa.removeSkill('zmzebeibafang_jingongma');
                                        }
                                    },
                                    ai: {
                                        order: 12,
                                        result: {
                                            player(player) {
                                                var aa = game.findPlayer(function (current) {
                                                    return current.hasSkill('zmzebeibafang_jingongma');
                                                });
                                                if (get.attitude(player, aa) <= 0) {
                                                    return 1;
                                                }
                                                return 0;
                                            },
                                        },
                                    },
                                },
                                jingongma: {
                                    mark: true,
                                    marktext: '攻',
                                    intro: {
                                        content: '你的进攻马栏可装备上限+1,手牌上限+1.',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + 1;
                                        },
                                    },
                                    trigger: {
                                        player: 'equipBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('e', { subtype: 'equip4' }) == 1 && get.subtype(event.card) == 'equip4';
                                    },
                                    async content(event, trigger, player) {
                                        trigger.cancel();
                                        player.qequip(trigger.cards);
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (get.subtype(card) == 'equip4') return [1, 10];
                                            },
                                        },
                                    },
                                },
                                jingongmafc: {
                                    name: '废除进攻马栏',
                                    enable: 'phaseUse',
                                    prompt: '废除你的进攻马栏并标记一名其他角色?',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        if (target.hasSkill('zmzebeibafang_fangyuma')) return false;
                                        if (target.hasSkill('zmzebeibafang_fangju')) return false;
                                        if (target.hasSkill('zmzebeibafang_wuqi')) return false;
                                        if (target.hasSkill('zmzebeibafang_baowu')) return false;
                                        return !target.hasSkill('zmzebeibafang_jingongma');
                                    },
                                    filter(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_jingongma');
                                        });
                                        return !player.isDisabled(4) && num == 0 && !player.hasSkill('zmzebeibafang_temp');
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm3(['zmzebeibafang0', 'zmzebeibafang00', 'zmzebeibafang000', 'zmzebeibafang0000'].randomGet());
                                        if (!player.hasSkill('zmzebeibafang_temp')) {
                                            player.addTempSkill('zmzebeibafang_temp');
                                        }
                                        player.disableEquip('equip4');
                                        target.addSkill('zmzebeibafang_jingongma');
                                    },
                                    ai: {
                                        order: 8,
                                        result: {
                                            target(player, target) {
                                                if (target.hp <= 2) return 6;
                                                return 1;
                                            },
                                        },
                                        threaten: 1,
                                    },
                                },
                                fangyumahf: {
                                    name: '回复防御马栏',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_fangyuma');
                                        });
                                        return player.isDisabled(3) && num == 1 && !player.hasSkill('zmzebeibafang_temp');
                                    },
                                    content() {
                                        'step 0';
                                        var aa = game.findPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_fangyuma');
                                        });
                                        player
                                            .chooseControl('确定', 'cancel2', function () {
                                                if (get.attitude(player, aa) <= 0) return '确定';
                                                return 'cancel2';
                                            })
                                            .set('prompt', `是否撤销${get.translation(aa)}的标记并回复你的防御马栏？`);
                                        ('step 1');
                                        var aa = game.findPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_fangyuma');
                                        });
                                        if (result.control == '确定') {
                                            game.playzm3('zmzebeibafang00000');
                                            if (!player.hasSkill('zmzebeibafang_temp')) {
                                                player.addTempSkill('zmzebeibafang_temp');
                                            }
                                            player.enableEquip('equip3');
                                            aa.line(player, { color: [153, 204, 85] });
                                            aa.removeSkill('zmzebeibafang_fangyuma');
                                        }
                                    },
                                    ai: {
                                        order: 12,
                                        result: {
                                            player(player) {
                                                var aa = game.findPlayer(function (current) {
                                                    return current.hasSkill('zmzebeibafang_fangyuma');
                                                });
                                                if (get.attitude(player, aa) <= 0) {
                                                    return 1;
                                                }
                                                return 0;
                                            },
                                        },
                                    },
                                },
                                fangyuma: {
                                    mark: true,
                                    marktext: '御',
                                    intro: {
                                        content: '你的防御马栏可装备上限+1,手牌上限+1.',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + 1;
                                        },
                                    },
                                    trigger: {
                                        player: 'equipBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('e', { subtype: 'equip3' }) == 1 && get.subtype(event.card) == 'equip3';
                                    },
                                    async content(event, trigger, player) {
                                        trigger.cancel();
                                        player.qequip(trigger.cards);
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (get.subtype(card) == 'equip3') return [1, 10];
                                            },
                                        },
                                    },
                                },
                                fangyumafc: {
                                    name: '废除防御马栏',
                                    enable: 'phaseUse',
                                    prompt: '废除你的防御马栏并标记一名其他角色?',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        if (target.hasSkill('zmzebeibafang_jingongma')) return false;
                                        if (target.hasSkill('zmzebeibafang_fangju')) return false;
                                        if (target.hasSkill('zmzebeibafang_wuqi')) return false;
                                        if (target.hasSkill('zmzebeibafang_baowu')) return false;
                                        return !target.hasSkill('zmzebeibafang_fangyuma');
                                    },
                                    filter(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_fangyuma');
                                        });
                                        return !player.isDisabled(3) && num == 0 && !player.hasSkill('zmzebeibafang_temp');
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm3(['zmzebeibafang0', 'zmzebeibafang00', 'zmzebeibafang000', 'zmzebeibafang0000'].randomGet());
                                        if (!player.hasSkill('zmzebeibafang_temp')) {
                                            player.addTempSkill('zmzebeibafang_temp');
                                        }
                                        player.disableEquip('equip3');
                                        target.addSkill('zmzebeibafang_fangyuma');
                                    },
                                    ai: {
                                        order: 8,
                                        result: {
                                            target(player, target) {
                                                if (target.hp <= 2) return 8;
                                                return 1;
                                            },
                                        },
                                        threaten: 1,
                                    },
                                },
                                fangjuhf: {
                                    name: '回复防具栏',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_fangju');
                                        });
                                        return player.isDisabled(2) && num == 1 && !player.hasSkill('zmzebeibafang_temp');
                                    },
                                    content() {
                                        'step 0';
                                        var aa = game.findPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_fangju');
                                        });
                                        player
                                            .chooseControl('确定', 'cancel2', function () {
                                                if (get.attitude(player, aa) <= 0) return '确定';
                                                return 'cancel2';
                                            })
                                            .set('prompt', `是否撤销${get.translation(aa)}的标记并回复你的防具栏？`);
                                        ('step 1');
                                        var aa = game.findPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_fangju');
                                        });
                                        if (result.control == '确定') {
                                            game.playzm3('zmzebeibafang00000');
                                            if (!player.hasSkill('zmzebeibafang_temp')) {
                                                player.addTempSkill('zmzebeibafang_temp');
                                            }
                                            player.enableEquip('equip2');
                                            aa.line(player, { color: [153, 204, 85] });
                                            aa.removeSkill('zmzebeibafang_fangju');
                                        }
                                    },
                                    ai: {
                                        order: 12,
                                        result: {
                                            player(player) {
                                                var aa = game.findPlayer(function (current) {
                                                    return current.hasSkill('zmzebeibafang_fangju');
                                                });
                                                if (get.attitude(player, aa) <= 0) {
                                                    return 1;
                                                }
                                                return 0;
                                            },
                                        },
                                    },
                                },
                                fangju: {
                                    mark: true,
                                    marktext: '防',
                                    intro: {
                                        content: '你的防具栏可装备上限+1,手牌上限+1.',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + 1;
                                        },
                                    },
                                    trigger: {
                                        player: 'equipBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('e', { subtype: 'equip2' }) == 1 && get.subtype(event.card) == 'equip2';
                                    },
                                    async content(event, trigger, player) {
                                        trigger.cancel();
                                        player.qequip(trigger.cards);
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (get.subtype(card) == 'equip2') return [1, 10];
                                            },
                                        },
                                    },
                                },
                                fangjufc: {
                                    name: '废除防具栏',
                                    enable: 'phaseUse',
                                    prompt: '废除你的防具栏并标记一名其他角色?',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        if (target.hasSkill('zmzebeibafang_fangyuma')) return false;
                                        if (target.hasSkill('zmzebeibafang_jingongma')) return false;
                                        if (target.hasSkill('zmzebeibafang_wuqi')) return false;
                                        if (target.hasSkill('zmzebeibafang_baowu')) return false;
                                        return !target.hasSkill('zmzebeibafang_fangju');
                                    },
                                    filter(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_fangju');
                                        });
                                        return !player.isDisabled(2) && num == 0 && !player.hasSkill('zmzebeibafang_temp');
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm3(['zmzebeibafang0', 'zmzebeibafang00', 'zmzebeibafang000', 'zmzebeibafang0000'].randomGet());
                                        if (!player.hasSkill('zmzebeibafang_temp')) {
                                            player.addTempSkill('zmzebeibafang_temp');
                                        }
                                        player.disableEquip('equip2');
                                        target.addSkill('zmzebeibafang_fangju');
                                    },
                                    ai: {
                                        order: 5,
                                        result: {
                                            target(player, target) {
                                                if (target.hp <= 2) return 2;
                                                return 1;
                                            },
                                        },
                                        threaten: 1,
                                    },
                                },
                                wuqihf: {
                                    name: '回复武器栏',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_wuqi');
                                        });
                                        return player.isDisabled(1) && num == 1 && !player.hasSkill('zmzebeibafang_temp');
                                    },
                                    content() {
                                        'step 0';
                                        var aa = game.findPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_wuqi');
                                        });
                                        player
                                            .chooseControl('确定', 'cancel2', function () {
                                                if (get.attitude(player, aa) <= 0) return '确定';
                                                return 'cancel2';
                                            })
                                            .set('prompt', `是否撤销${get.translation(aa)}的标记并回复你的武器栏？`);
                                        ('step 1');
                                        var aa = game.findPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_wuqi');
                                        });
                                        if (result.control == '确定') {
                                            game.playzm3('zmzebeibafang00000');
                                            if (!player.hasSkill('zmzebeibafang_temp')) {
                                                player.addTempSkill('zmzebeibafang_temp');
                                            }
                                            player.enableEquip('equip1');
                                            aa.line(player, { color: [153, 204, 85] });
                                            aa.removeSkill('zmzebeibafang_wuqi');
                                        }
                                    },
                                    ai: {
                                        order: 12,
                                        result: {
                                            player(player) {
                                                var aa = game.findPlayer(function (current) {
                                                    return current.hasSkill('zmzebeibafang_wuqi');
                                                });
                                                if (get.attitude(player, aa) <= 0) {
                                                    return 1;
                                                }
                                                return 0;
                                            },
                                        },
                                    },
                                },
                                wuqi: {
                                    mark: true,
                                    marktext: '武',
                                    intro: {
                                        content: '你的武器栏可装备上限+1,手牌上限+1.',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + 1;
                                        },
                                    },
                                    trigger: {
                                        player: 'equipBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('e', { subtype: 'equip1' }) == 1 && get.subtype(event.card) == 'equip1';
                                    },
                                    async content(event, trigger, player) {
                                        trigger.cancel();
                                        player.qequip(trigger.cards);
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (get.subtype(card) == 'equip1') return [1, 10];
                                            },
                                        },
                                    },
                                },
                                wuqifc: {
                                    name: '废除武器栏',
                                    enable: 'phaseUse',
                                    prompt: '废除你的武器栏并标记一名其他角色?',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        if (target.hasSkill('zmzebeibafang_fangyuma')) return false;
                                        if (target.hasSkill('zmzebeibafang_jingongma')) return false;
                                        if (target.hasSkill('zmzebeibafang_fangju')) return false;
                                        if (target.hasSkill('zmzebeibafang_baowu')) return false;
                                        return !target.hasSkill('zmzebeibafang_wuqi');
                                    },
                                    filter(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_wuqi');
                                        });
                                        return !player.isDisabled(1) && num == 0 && !player.hasSkill('zmzebeibafang_temp');
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm3(['zmzebeibafang0', 'zmzebeibafang00', 'zmzebeibafang000', 'zmzebeibafang0000'].randomGet());
                                        if (!player.hasSkill('zmzebeibafang_temp')) {
                                            player.addTempSkill('zmzebeibafang_temp');
                                        }
                                        player.disableEquip('equip1');
                                        target.addSkill('zmzebeibafang_wuqi');
                                    },
                                    ai: {
                                        order: 3,
                                        result: {
                                            target(player, target) {
                                                if (target.hp <= 2) return 2;
                                                return 1;
                                            },
                                        },
                                        threaten: 1,
                                    },
                                },
                                baowuhf: {
                                    name: '回复宝物栏',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_baowu');
                                        });
                                        return player.isDisabled(5) && num == 1 && !player.hasSkill('zmzebeibafang_temp');
                                    },
                                    content() {
                                        'step 0';
                                        var aa = game.findPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_baowu');
                                        });
                                        player
                                            .chooseControl('确定', 'cancel2', function () {
                                                if (get.attitude(player, aa) <= 0) return '确定';
                                                return 'cancel2';
                                            })
                                            .set('prompt', `是否撤销${get.translation(aa)}的标记并回复你的宝物栏？`);
                                        ('step 1');
                                        var aa = game.findPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_baowu');
                                        });
                                        if (result.control == '确定') {
                                            game.playzm3('zmzebeibafang00000');
                                            if (!player.hasSkill('zmzebeibafang_temp')) {
                                                player.addTempSkill('zmzebeibafang_temp');
                                            }
                                            player.enableEquip('equip5');
                                            aa.line(player, { color: [153, 204, 85] });
                                            aa.removeSkill('zmzebeibafang_baowu');
                                        }
                                    },
                                    ai: {
                                        order: 12,
                                        result: {
                                            player(player) {
                                                var aa = game.findPlayer(function (current) {
                                                    return current.hasSkill('zmzebeibafang_baowu');
                                                });
                                                if (get.attitude(player, aa) <= 0) {
                                                    return 1;
                                                }
                                                return 0;
                                            },
                                        },
                                    },
                                },
                                baowu: {
                                    mark: true,
                                    marktext: '宝',
                                    intro: {
                                        content: '你的宝物栏可装备上限+1,手牌上限+1.',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + 1;
                                        },
                                    },
                                    trigger: {
                                        player: 'equipBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('e', { subtype: 'equip5' }) == 1 && get.subtype(event.card) == 'equip5';
                                    },
                                    async content(event, trigger, player) {
                                        trigger.cancel();
                                        player.qequip(trigger.cards);
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (get.subtype(card) == 'equip5') return [1, 10];
                                            },
                                        },
                                    },
                                },
                                baowufc: {
                                    name: '废除宝物栏',
                                    enable: 'phaseUse',
                                    prompt: '废除你的宝物栏并标记一名其他角色?',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        if (target.hasSkill('zmzebeibafang_fangyuma')) return false;
                                        if (target.hasSkill('zmzebeibafang_jingongma')) return false;
                                        if (target.hasSkill('zmzebeibafang_fangju')) return false;
                                        if (target.hasSkill('zmzebeibafang_wuqi')) return false;
                                        return !target.hasSkill('zmzebeibafang_baowu');
                                    },
                                    filter(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.hasSkill('zmzebeibafang_baowu');
                                        });
                                        return !player.isDisabled(5) && num == 0 && !player.hasSkill('zmzebeibafang_temp');
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm3(['zmzebeibafang0', 'zmzebeibafang00', 'zmzebeibafang000', 'zmzebeibafang0000'].randomGet());
                                        if (!player.hasSkill('zmzebeibafang_temp')) {
                                            player.addTempSkill('zmzebeibafang_temp');
                                        }
                                        player.disableEquip('equip5');
                                        target.addSkill('zmzebeibafang_baowu');
                                    },
                                    ai: {
                                        order: 12,
                                        result: {
                                            target(player, target) {
                                                if (target.hp <= 2) return 8;
                                                return 1;
                                            },
                                        },
                                        threaten: 1,
                                    },
                                },
                            },
                        },
                        zmjidishouwei: {
                            nobracket: true,
                            init(player) {
                                player.storage.zmjidishouwei = true;
                            },
                            mark: true,
                            marktext: '极',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.zmjidishouwei == true) return '当其他角色摸牌后若其手牌数大于你,你可令其弃置1张牌';
                                    return '其他角色弃牌后若其手牌数小于你,你可令其摸1张牌';
                                },
                            },
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            forced: true,
                            _priority: 10,
                            content() {
                                'step 0';
                                if (player.storage.zmjidishouwei_1 >= 1) {
                                    player.storage.zmjidishouwei_1 = 0;
                                    game.playzm3('zmjidishouwei1');
                                    player.draw();
                                }
                                ('step 1');
                                player.storage.zmjidishouwei_1 += 1;
                                if (player.storage.zmjidishouwei) {
                                    player.storage.zmjidishouwei = false;
                                } else {
                                    player.storage.zmjidishouwei = true;
                                }
                            },
                            group: ['zmjidishouwei_1', 'zmjidishouwei_2'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmjidishouwei_1 = 0;
                                    },
                                    audio: 'ext:综漫季刊叁/audio:1',
                                    trigger: {
                                        global: 'drawAfter',
                                    },
                                    check(event, player) {
                                        if (player.storage.zmdiwenxiuqi_1 >= 3 && player.maxHp - player.hp >= 2) return false;
                                        if (player.hp == 1 && player.countCards('h') <= 2) return false;
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    prompt(event, player) {
                                        return `是否令${get.translation(event.player)}弃置一张牌？`;
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.player.countCards('h') > player.countCards('h') && player.storage.zmjidishouwei_1 >= 1 && player.storage.zmjidishouwei == true;
                                    },
                                    content() {
                                        player.storage.zmjidishouwei_1 = 0;
                                        player.line(trigger.player, 'white');
                                        trigger.player.chooseToDiscard(1, 'he', true);
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊叁/audio:1',
                                    trigger: {
                                        global: 'discardAfter',
                                    },
                                    check(event, player) {
                                        if (player.storage.zmdiwenxiuqi_1 >= 3 && player.maxHp - player.hp >= 2) return false;
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    prompt(event, player) {
                                        return `是否令${get.translation(event.player)}摸一张牌？`;
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.player.countCards('h') < player.countCards('h') && player.storage.zmjidishouwei_1 >= 1 && player.storage.zmjidishouwei == false;
                                    },
                                    content() {
                                        player.line(trigger.player, 'white');
                                        player.storage.zmjidishouwei_1 = 0;
                                        trigger.player.draw();
                                    },
                                },
                            },
                        },
                        zmdiwenxiuqi: {
                            group: ['zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:3',
                            trigger: {
                                player: ['phaseJieshu'],
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 50) return false;
                                return player.countCards('hej') > 0 && !player.hasSkill('zmdiwenxiuqi_1');
                            },
                            check(event, player) {
                                if (player.maxHp - player.hp < 2) return false;
                                return (player.countCards('hej') > 3 && player.hp >= 2) || (player.countCards('hej') >= 2 && player.hp == 1);
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 50;
                                event.num = player.countCards('hej');
                                player.discard(player.getCards('hej'));
                                player.recover();
                                ('step 1');
                                player.addSkill('zmdiwenxiuqi_1');
                                player.storage.zmdiwenxiuqi_1 = event.num;
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '憩',
                                    intro: {
                                        content: '剩余牌数为#,低于0则效果结束',
                                    },
                                    init(player) {
                                        player.storage.zmdiwenxiuqi_1 = 0;
                                    },
                                    trigger: {
                                        player: 'drawEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.result.length;
                                    },
                                    content() {
                                        'step 0';
                                        var num = trigger.result.length;
                                        player.storage.zmdiwenxiuqi_1 -= num;
                                        ('step 1');
                                        if (player.storage.zmdiwenxiuqi_1 >= 0) {
                                            player.recover();
                                        } else {
                                            player.storage.zmdiwenxiuqi_1 = 0;
                                            player.removeSkill('zmdiwenxiuqi_1');
                                        }
                                    },
                                },
                            },
                        },
                        zmshijianling: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmshijianling = 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmshijianling >= 2) {
                                    if (player.hasSkill('zmxuemaijifaa')) {
                                        game.playzm3('zmshijianling0');
                                    }
                                    player.storage.zmshijianling = 0;
                                    event.finish();
                                } else {
                                    var list1 = ['判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段', '结束阶段', 'cancel2'];
                                    if (player.skipList.includes('phaseJudge')) {
                                        list1.remove('判定阶段');
                                    }
                                    if (player.skipList.includes('phaseDraw')) {
                                        list1.remove('摸牌阶段');
                                    }
                                    if (player.skipList.includes('phaseUse')) {
                                        list1.remove('出牌阶段');
                                    }
                                    if (player.skipList.includes('phaseDiscard')) {
                                        list1.remove('弃牌阶段');
                                    }
                                    if (player.skipList.includes('phaseJieshu')) {
                                        list1.remove('结束阶段');
                                    }
                                    player
                                        .chooseControl(list1)
                                        .set('ai', function () {
                                            if (player.countCards('j') && player.hp <= 2 && !player.skipList.includes('phaseJudge')) return '判定阶段';
                                            return '弃牌阶段';
                                        })
                                        .set('prompt', '可选择一个需要替换的阶段');
                                }
                                ('step 1');
                                event.jd = 0;
                                event.jd1 = result.control;
                                if (result.control == 'cancel2') {
                                    player.storage.zmshijianling = 0;
                                    event.finish();
                                } else {
                                    player.storage.zmshijianling += 1;
                                }
                                if (result.control == '判定阶段') {
                                    event.jd = 1;
                                }
                                if (result.control == '摸牌阶段') {
                                    event.jd = 2;
                                }
                                if (result.control == '出牌阶段') {
                                    event.jd = 3;
                                }
                                if (result.control == '弃牌阶段') {
                                    event.jd = 4;
                                }
                                if (result.control == '结束阶段') {
                                    event.jd = 5;
                                }
                                ('step 2');
                                var num4 = game.countPlayer(function (current) {
                                    var player = _status.event.player;
                                    return player.getEnemies().includes(current) && get.distance(player, current, 'attack') <= 1 && get.effect(current, { name: 'sha' }, player) > 0;
                                });
                                if (event.jd >= 1) {
                                    var list = ['判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段', '结束阶段'];
                                    if (player.skipList.includes('phaseJudge')) {
                                        list.remove('判定阶段');
                                    }
                                    if (player.skipList.includes('phaseDraw')) {
                                        list.remove('摸牌阶段');
                                    }
                                    if (player.skipList.includes('phaseUse')) {
                                        list.remove('出牌阶段');
                                    }
                                    if (player.skipList.includes('phaseDiscard')) {
                                        list.remove('弃牌阶段');
                                    }
                                    if (player.skipList.includes('phaseJieshu')) {
                                        list.remove('结束阶段');
                                    }
                                    if (event.jd == 1) {
                                        list.remove('判定阶段');
                                    }
                                    if (event.jd == 2) {
                                        list.remove('摸牌阶段');
                                    }
                                    if (event.jd == 3) {
                                        list.remove('出牌阶段');
                                    }
                                    if (event.jd == 4) {
                                        list.remove('弃牌阶段');
                                    }
                                    if (event.jd == 5) {
                                        list.remove('结束阶段');
                                    }
                                    player
                                        .chooseControl(list, true)
                                        .set('ai', function () {
                                            if (player.countCards('h', { name: 'sha' }) >= 1 && num4 >= 1 && !player.skipList.includes('phaseUse')) return '出牌阶段';
                                            return '摸牌阶段';
                                        })
                                        .set('prompt', `选择一个用以替换【${get.translation(event.jd1)}】的阶段`);
                                }
                                ('step 3');
                                //那么多鸟效果根本没人选我却还得挨个写出来aaaa
                                if (player.hasSkill('zmxuemaijifaa')) {
                                    game.playzm3(['zmshijianling11', 'zmshijianling12', 'zmshijianling13', 'zmshijianling14', 'zmshijianling15'].randomGet());
                                } else {
                                    game.playzm3('zmshijianling21');
                                }
                                if (result.control == '判定阶段') {
                                    if (event.jd == 2) {
                                        player.addSkill('zmshijianling_21');
                                    }
                                    if (event.jd == 3) {
                                        player.addSkill('zmshijianling_31');
                                    }
                                    if (event.jd == 4) {
                                        player.addSkill('zmshijianling_41');
                                    }
                                    if (event.jd == 5) {
                                        player.addSkill('zmshijianling_51');
                                    }
                                }
                                if (result.control == '摸牌阶段') {
                                    if (event.jd == 1) {
                                        player.addSkill('zmshijianling_11');
                                    }
                                    if (event.jd == 3) {
                                        player.addSkill('zmshijianling_32');
                                    }
                                    if (event.jd == 4) {
                                        player.addSkill('zmshijianling_42');
                                    }
                                    if (event.jd == 5) {
                                        player.addSkill('zmshijianling_52');
                                    }
                                }
                                if (result.control == '出牌阶段') {
                                    if (event.jd == 1) {
                                        player.addSkill('zmshijianling_12');
                                    }
                                    if (event.jd == 2) {
                                        player.addSkill('zmshijianling_22');
                                    }
                                    if (event.jd == 4) {
                                        player.addSkill('zmshijianling_43');
                                    }
                                    if (event.jd == 5) {
                                        player.addSkill('zmshijianling_53');
                                    }
                                }
                                if (result.control == '弃牌阶段') {
                                    if (event.jd == 1) {
                                        player.addSkill('zmshijianling_13');
                                    }
                                    if (event.jd == 2) {
                                        player.addSkill('zmshijianling_23');
                                    }
                                    if (event.jd == 3) {
                                        player.addSkill('zmshijianling_33');
                                    }
                                    if (event.jd == 5) {
                                        player.addSkill('zmshijianling_54');
                                    }
                                }
                                if (result.control == '结束阶段') {
                                    if (event.jd == 1) {
                                        player.addSkill('zmshijianling_14');
                                    }
                                    if (event.jd == 2) {
                                        player.addSkill('zmshijianling_24');
                                    }
                                    if (event.jd == 3) {
                                        player.addSkill('zmshijianling_34');
                                    }
                                    if (event.jd == 4) {
                                        player.addSkill('zmshijianling_44');
                                    }
                                }
                            },
                            subSkill: {
                                11: {
                                    trigger: {
                                        player: ['phaseJudgeBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_11');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseDraw();
                                    },
                                },
                                12: {
                                    trigger: {
                                        player: ['phaseJudgeBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_12');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseUse();
                                    },
                                },
                                13: {
                                    trigger: {
                                        player: ['phaseJudgeBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_13');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseDiscard();
                                    },
                                },
                                14: {
                                    trigger: {
                                        player: ['phaseJudgeBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_14');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseJieshu();
                                    },
                                },
                                21: {
                                    trigger: {
                                        player: ['phaseDrawBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_21');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseJudge();
                                    },
                                },
                                22: {
                                    trigger: {
                                        player: ['phaseDrawBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_22');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseUse();
                                    },
                                },
                                23: {
                                    trigger: {
                                        player: ['phaseDrawBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_23');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseDiscard();
                                    },
                                },
                                24: {
                                    trigger: {
                                        player: ['phaseDrawBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_24');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseJieshu();
                                    },
                                },
                                31: {
                                    trigger: {
                                        player: ['phaseUseBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_31');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseJudge();
                                    },
                                },
                                32: {
                                    trigger: {
                                        player: ['phaseUseBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_32');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseDraw();
                                    },
                                },
                                33: {
                                    trigger: {
                                        player: ['phaseUseBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_33');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseDiscard();
                                    },
                                },
                                34: {
                                    trigger: {
                                        player: ['phaseUseBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_34');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseJieshu();
                                    },
                                },
                                41: {
                                    trigger: {
                                        player: ['phaseDiscardBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_41');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseJudge();
                                    },
                                },
                                42: {
                                    trigger: {
                                        player: ['phaseDiscardBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_42');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseDraw();
                                    },
                                },
                                43: {
                                    trigger: {
                                        player: ['phaseDiscardBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_43');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseUse();
                                    },
                                },
                                44: {
                                    trigger: {
                                        player: ['phaseDiscardBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_44');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseJieshu();
                                    },
                                },
                                51: {
                                    trigger: {
                                        player: ['phaseJieshuBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_51');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseJudge();
                                    },
                                },
                                52: {
                                    trigger: {
                                        player: ['phaseJieshuBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_52');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseDraw();
                                    },
                                },
                                53: {
                                    trigger: {
                                        player: ['phaseJieshuBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_53');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseUse();
                                    },
                                },
                                54: {
                                    trigger: {
                                        player: ['phaseJieshuBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshijianling_54');
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseDiscard();
                                    },
                                },
                            },
                        },
                        zmxuemaijifaa: {
                            group: ['zmtlongxue', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:6',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 40) return false;
                                if (get.itemtype(event.cards) != 'cards') return false;
                                return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player);
                            },
                            prompt(event, player) {
                                var str = '';
                                str += `是否收回${get.translation(event.card)}？`;
                                return str;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 40;
                                // var respondTo=trigger.respondTo;
                                player.gain(trigger.cards, 'gain2');
                                ('step 1');
                                player
                                    .chooseTarget('是否令一名其他角色获得【时间零】直到其回合结束？', function (card, player, target) {
                                        return target != player && !target.hasSkill('zmshijianling');
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target) / (1 + target.hp);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    game.log(result.targets[0], '获得了【时间零】');
                                    result.targets[0].addTempSkill('zmshijianling', { player: 'phaseEnd' });
                                }
                            },
                        },
                        zmkuangaizhili: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:10',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                var num = player.maxHp - player.hp;
                                return player.hp >= 1 && num >= 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num = 0;
                                event.num1 = 0;
                                ('step 1');
                                player.draw();
                                ('step 2');
                                event.num++;
                                var card = result.cards[0];
                                event.cards = result.cards[0];
                                if (
                                    card &&
                                    game.hasPlayer(function (current) {
                                        return player.canUse(card, current);
                                    }) &&
                                    get.owner(card) == player
                                ) {
                                    player.chooseToUse({
                                        prompt: `是否使用${get.translation(card)}？`,
                                        filterCard(cardx, player, target) {
                                            return cardx == _status.event.cardx;
                                        },
                                        cardx: card,
                                    });
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.num1++;
                                    player.getStat().card = {};
                                    if (event.num1 <= player.maxHp - player.hp - 1 && event.num <= player.hp - 1) {
                                        event.goto(1);
                                    }
                                } else {
                                    player.discard(event.cards);
                                    if (event.num1 <= player.maxHp - player.hp - 1 && event.num <= player.hp - 1) {
                                        event.goto(1);
                                    }
                                }
                            },
                        },
                        zmzhimingchengjie: {
                            group: ['zmtmoxing', 'zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            audio: 'ext:综漫季刊叁/audio:1',
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            check(event, player) {
                                return (get.attitude(player, event.player) <= 0 && player.hp == 1) || (get.attitude(player, event.player) <= 0 && player.hp == player.maxHp);
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 60;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                game.playzm3('zmhuilizi');
                                game.mp423('zmhuilizi');
                                trigger.num += 1;
                                ('step 1');
                                if (player.hp >= 3) {
                                    player.loseHp();
                                }
                                if (player.hp <= 1) {
                                    player.recover();
                                }
                            },
                        },
                        zmkuayuebianjie: {
                            nobracket: true,
                            trigger: {
                                player: ['recoverAfter', 'loseAfter'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name != 'recoverAfter') {
                                    if (player.hasSkill('zmkuayuebianjie_temp')) return false;
                                    return !player.countCards('h') && event.hs && event.hs.length && lib.config[`zmkuayuebianjie${1}`];
                                } else {
                                    if (player.hasSkill('zmkuayuebianjie_temp')) return false;
                                    return lib.config[`zmkuayuebianjie${1}`];
                                }
                            },
                            content() {
                                'step 0';
                                if (!player.hasSkill('zmkuayuebianjie_temp')) {
                                    player.addTempSkill('zmkuayuebianjie_temp', 'roundStart');
                                }
                                var obj = lib.config[`zmkuayuebianjie${1}`];
                                for (var i in obj) {
                                    if (i != 'today' && i != 'getCards') {
                                        player[i] = obj[i];
                                    }
                                }
                                var cards = obj.getCards;
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (!lib.card[i[0]]) continue;
                                        var card = game.createCard(i[0], i[1], i[2], i[3]);
                                        if (i[4] == false) {
                                            player.gain(card);
                                        } else {
                                            player.equip(card);
                                        }
                                    }
                                ('step 1');
                                event.num2 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmshixiangxiuzheng_1') && current.isDamaged();
                                });
                                ('step 2');
                                if (event.num2 >= 1) {
                                    var num4 = game.countPlayer(function (current) {
                                        return player.getEnemies().includes(current) && current.hasSkill('zmshixiangxiuzheng_1') && current.hp - current.getDamagedHp() >= 2 && current.isDamaged() && current.hp != current.maxHp / 2;
                                    });
                                    var num5 = game.countPlayer(function (current) {
                                        return player.getFriends().includes(current) && current.hasSkill('zmshixiangxiuzheng_1') && current.getDamagedHp() - current.hp >= 1 && current.hp <= 2 && current.isDamaged();
                                    });
                                    player
                                        .chooseTarget('可选择一名已标记的受伤角色反转其体力值.', function (card, player, target) {
                                            return target.hasSkill('zmshixiangxiuzheng_1') && target.isDamaged();
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if ((num5 == 0 && player.hasSkill('zmshixiangxiuzheng_1') && player.hp >= 2) || (num5 == 0 && !player.hasSkill('zmshixiangxiuzheng_1')) || num4 >= 1) {
                                                if (target.hp <= target.maxHp / 2) return 0;
                                                var att = -get.attitude(player, target);
                                                var num = target.hp - target.getDamagedHp();
                                                return att * num;
                                            } else {
                                                if (target.hp >= target.maxHp / 2) return 0;
                                                var player = _status.event.player;
                                                if (get.attitude(player, target) > 0) {
                                                    var att = get.attitude(player, target);
                                                    var num = target.getDamagedHp() - target.hp;
                                                    return att * num;
                                                    //return get.recoverEffect(target,player,player);
                                                }
                                                return 0;
                                            }
                                        });
                                }
                                ('step 3');
                                if (result.bool) {
                                    ui.backgroundMusic.src = 'extension/综漫季刊叁/audio/背景音乐命运石之门.mp3';
                                    game.playzm3(['zmgangbuluntailang1', 'zmgangbuluntailang2'].randomGet());
                                    game.mp423('zmgangbuluntailang');
                                    result.targets[0].removeSkill('zmshixiangxiuzheng_1');
                                    event.num0 = result.targets[0].hp;
                                    event.num1 = result.targets[0].maxHp - event.num0;
                                    var num0 = event.num0 - event.num1;
                                    var num2 = event.num1 - event.num0;
                                    if (event.num0 >= event.num1) {
                                        result.targets[0].changeHp(-num0);
                                    } else {
                                        result.targets[0].changeHp(+num2);
                                    }
                                    //result.targets[0].hp=event.num1;
                                } else {
                                    game.playzm3(['zmkuayuebianjie_11', 'zmkuayuebianjie_12', 'zmkuayuebianjie_13', 'zmkuayuebianjie_14', 'zmkuayuebianjie_15', 'zmkuayuebianjie_16', 'zmkuayuebianjie_17', 'zmkuayuebianjie_14', 'zmkuayuebianjie_14'].randomGet());
                                }
                            },
                            group: ['zmkuayuebianjie_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'dieBegin',
                                    },
                                    forced: true,
                                    usable: 1,
                                    content() {
                                        'step 0';
                                        if (player.countCards('h') <= 0) {
                                            for (var i = 1; i <= 1; i++) {
                                                if (lib.config[`zmkuayuebianjie${i}`]) {
                                                    game.saveConfig('zmkuayuebianjie' + i, {});
                                                }
                                            }
                                            game.saveConfig('zmkuayuebianjie', true);
                                            event.finish();
                                        } else {
                                            var obj = {};
                                            var List = [];
                                            for (var i = 0; i < List.length; i++) {
                                                if (List[i] != 'storage') {
                                                    obj[List[i]] = player[List[i]];
                                                } else {
                                                    var storage = Object.assign({}, player.storage);
                                                    for (var x in storage) {
                                                        if (['player', 'players', 'card', 'cards'].includes(get.itemtype(storage[x]))) {
                                                            delete storage[x];
                                                        }
                                                    }
                                                    obj.storage = storage;
                                                }
                                            }
                                            var cards = player.getCards('h');
                                            obj.getCards = [];
                                            if (Array.isArray(cards))
                                                for (var i of cards) {
                                                    obj.getCards.push([i.name, i.suit, i.number, i.nature || null, player.countCards('e', i.name) ? true : false]);
                                                }
                                            event.obj = obj;
                                        }
                                        ('step 1');
                                        game.saveConfig('zmkuayuebianjie' + 1, event.obj);
                                    },
                                },
                                temp: {},
                            },
                        },
                        zmshixiangxiuzheng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:3',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !current.hasSkill('zmshixiangxiuzheng_1') && player.storage.zmt_np >= 30;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num4 = game.countPlayer(function (current) {
                                    return player.getFriends().includes(current) && current != player && !current.hasSkill('zmshixiangxiuzheng_1') && current.hp <= 2 && current.maxHp >= 3;
                                });
                                player
                                    .chooseTarget('可标记一名角色,在下次发动【跨越边界】时反转其体力值.', function (card, player, target) {
                                        return !target.hasSkill('zmshixiangxiuzheng_1');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (num4 <= 0 && player.hasSkill('zmshixiangxiuzheng_1')) {
                                            return -get.attitude(player, target) && target.maxHp >= 3;
                                        } else {
                                            if (num4 <= 0) {
                                                return get.attitude(player, target);
                                            } else {
                                                if (get.attitude(player, target) > 0) {
                                                    return get.recoverEffect(target, player, player) && target.maxHp >= 3;
                                                }
                                                return 0;
                                            }
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 30;
                                    result.targets[0].addSkill('zmshixiangxiuzheng_1');
                                }
                            },
                            group: ['zmtshikong', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '事',
                                    intro: {
                                        content: '体力值可被逆转',
                                    },
                                },
                            },
                        },
                        ztiantangzhizao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:7',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            _priority: -50,
                            mark: true,
                            marktext: '天',
                            init(player) {
                                player.storage.ztiantangzhizao = 0;
                            },
                            intro: {
                                content: '已使用此技能#次',
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 60) return false;
                                return event.skill != 'ztiantangzhizao' && event.player != player;
                            },
                            content() {
                                player.storage.zmt_np -= 60;
                                player.storage.ztiantangzhizao += 1;
                                player.phase('nodelay');
                            },
                            ai: {
                                threaten: 3.8,
                            },
                            group: ['ztiantangzhizao_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['phaseBegin', 'useCard', 'respond'],
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.ztiantangzhizao_1 = 0;
                                    },
                                    filter(event, player) {
                                        return event.player != player && _status.currentPhase == event.player;
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'phaseBegin') {
                                            var num = trigger.player.hp - player.storage.ztiantangzhizao;
                                            player.storage.ztiantangzhizao_1 = num;
                                        } else {
                                            player.storage.ztiantangzhizao_1 -= 1;
                                        }
                                        ('step 1');
                                        if (player.storage.ztiantangzhizao_1 <= 0) {
                                            trigger.player.addTempSkill('ztiantangzhizao_2');
                                        }
                                    },
                                },
                                2: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (get.type(card, 'trick') || get.type(card, 'basic') || get.type(card, 'delay') || get.type(card, 'equip')) return false;
                                        },
                                        cardUsable(card, player) {
                                            if (get.type(card, 'trick') || get.type(card, 'basic') || get.type(card, 'delay') || get.type(card, 'equip')) return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (get.type(card, 'trick') || get.type(card, 'basic') || get.type(card, 'delay') || get.type(card, 'equip')) return false;
                                        },
                                        cardSavable(card, player) {
                                            if (get.type(card, 'trick') || get.type(card, 'basic') || get.type(card, 'delay') || get.type(card, 'equip')) return false;
                                        },
                                    },
                                },
                            },
                        },
                        zcmoon: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return (distance += to.getAttackRange() - 1);
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:5',
                            trigger: {
                                global: ['recoverAfter', 'damageEnd'],
                            },
                            filter(event, player) {
                                return event.player != player && get.distance(player, event.player, 'attack') <= 1 && event.player.isAlive();
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var att = get.attitude(trigger.player, player);
                                var bool = 0;
                                if (att < 0) {
                                    if (trigger.player.countCards('e') == 0 && trigger.player.countCards('h') > 2) bool = 1;
                                    else if (trigger.player.countCards('he') == 0) bool = 1;
                                } else if (att == 0 && trigger.player.countCards('he') == 0) {
                                    bool = 1;
                                }
                                trigger.player
                                    .chooseControl(function () {
                                        return _status.event.bool;
                                    })
                                    .set('prompt', '新月')
                                    .set('bool', bool)
                                    .set('choiceList', [`令${get.translation(player)}摸一张牌`, `令${get.translation(player)}弃置你的一张牌`]);
                                ('step 1');
                                if (result.control == '选项一') {
                                    player.draw();
                                    event.finish();
                                } else if (trigger.player.countCards('he')) {
                                    player.discardPlayerCard(trigger.player, true, 'he');
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 1.8,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                            },
                        },
                        zmiyu: {
                            group: ['zmtshikong', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            mark: true,
                            marktext: '密',
                            init(player) {
                                player.storage.zmiyu = 0;
                                player.markSkill('zmiyu');
                            },
                            intro: {
                                content: '当前使用至第#张牌',
                            },
                            trigger: {
                                player: 'useCardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmiyu += 1;
                                player.markSkill('zmiyu');
                                ('step 1');
                                if (player.storage.zmiyu == 1) {
                                    player.say('『螺旋阶梯』');
                                    game.playzm3('zmiyu1');
                                }
                                if (player.storage.zmiyu == 2) {
                                    player.say('『独角仙』');
                                    game.playzm3('zmiyu2');
                                }
                                if (player.storage.zmiyu == 3) {
                                    player.say('『废墟街道』');
                                    game.playzm3('zmiyu3');
                                }
                                if (player.storage.zmiyu == 4) {
                                    player.say('『无花果塔』');
                                    game.playzm3('zmiyu4');
                                }
                                if (player.storage.zmiyu == 5) {
                                    player.say('『独角仙』');
                                    game.playzm3('zmiyu2');
                                }
                                if (player.storage.zmiyu == 6) {
                                    player.say('『苦伤道』');
                                    game.playzm3('zmiyu6');
                                }
                                if (player.storage.zmiyu == 7) {
                                    player.say('『独角仙』');
                                    game.playzm3('zmiyu2');
                                }
                                if (player.storage.zmiyu == 8) {
                                    player.say('『特异点』');
                                    game.playzm3('zmiyu8');
                                }
                                if (player.storage.zmiyu == 9) {
                                    player.say('『乔托』');
                                    game.playzm3('zmiyu9');
                                }
                                if (player.storage.zmiyu == 10) {
                                    player.say('『天使』');
                                    game.playzm3('zmiyu10');
                                }
                                if (player.storage.zmiyu == 11) {
                                    player.say('『紫阳花』');
                                    game.playzm3('zmiyu11');
                                }
                                if (player.storage.zmiyu == 12) {
                                    player.say('『独角仙』');
                                    game.playzm3('zmiyu2');
                                }
                                if (player.storage.zmiyu == 13) {
                                    player.say('『特异点』');
                                    game.playzm3('zmiyu8');
                                }
                                if (player.storage.zmiyu == 14) {
                                    game.playzm3('zm xinyue');
                                    player.removeSkill('zmbaishe');
                                    game.mp423('zmpuqi1');
                                    player.addSkill('zcmoon');
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊叁/image/新月普奇.jpg');
                                    player.say('『秘密皇帝』!');
                                }
                                if (player.storage.zmiyu == 20) {
                                    game.playzm3('zm weizhi');
                                    player.say('感觉到了..位置来了!');
                                }
                                if (player.storage.zmiyu == 24) {
                                    game.mp423('zmpuqi2');
                                    game.playzm3('zm tianguo');
                                    player.removeSkill('zcmoon');
                                    player.addSkill('ztiantangzhizao');
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊叁/image/天国普奇.jpg');
                                    player.say('赞美吧!所诞生之物正是天国!这份感动难以抑制!');
                                }
                            },
                        },
                        zmbaishe: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:4',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(`令一名其他角色获得${get.translation(trigger.player)}的一个技能？`, function (card, player, target) {
                                        return target != player && target != trigger.player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].addSkill('zmbaishe_1');
                                    var controls = [];
                                    var skills = trigger.player.getCards('s');
                                    for (var i = 0; i < skills.length; i++) {
                                        var info = lib.skill[skills[i]];
                                        if (!info) continue;
                                        if (!lib.translate[skills[i]]) continue;
                                        if (!lib.translate[skills[i] + '_info']) continue;
                                        if (!controls.includes(skills[i])) {
                                            controls.push(skills[i]);
                                        }
                                    }
                                    if (controls.length >= 1) {
                                        event.target = result.targets[0];
                                        result.targets[0]
                                            .chooseControl(controls)
                                            .set('ai', function () {
                                                return Math.floor(Math.random() * controls.length);
                                            })
                                            .set('prompt', `可获得${get.translation(trigger.player)}一个技能直到你受到伤害为止`);
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.control) {
                                    event.target.addTempSkill(result.control, { player: 'damageBefore' });
                                    trigger.player.storage.zmbaishe_1 = true;
                                    trigger.player.popup(result.control);
                                    trigger.player.disableSkill('zmbaishe_1', [result.control]);
                                    game.log(trigger.player, '持有的技能', `【${get.translation(result.control)}】`, `失效直到${get.translation(event.target)}受到伤害为止`);
                                }
                            },
                            ai: {
                                threaten: 1,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.storage.zmbaishe_1;
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        event.players = get.players(player);
                                        event.num = 0;
                                        event.players = event.players.filter((i) => i.storage.zmbaishe_1);
                                        ('step 1');
                                        if (event.players.length) {
                                            var current = event.players.shift();
                                            for (var i = 0; i < current.skills.length; i++) {
                                                current.enableSkill('zmbaishe_1', [player.skills[i]]);
                                            }
                                            event.redo();
                                        }
                                    },
                                },
                            },
                        },
                        zmtianyouhonglu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:4',
                            trigger: {
                                global: 'equipEnd',
                            },
                            check(event, player) {
                                return true;
                            },
                            prompt(event, player) {
                                var str = '';
                                str += `是否获得${get.translation(event.card)}的装备技能？`;
                                return str;
                            },
                            filter(event, player) {
                                var skills = lib.card[event.card.name].skills;
                                if (skills != undefined) {
                                    for (var j = 0; j < skills.length; j++) {
                                        if (player.hasSkill(skills[j])) return false;
                                    }
                                }
                                if (player.storage.zmt_np < 15) return false;
                                if (event.player == player) return false;
                                return lib.card[event.card.name].skills != undefined && get.subtype(event.card) == 'equip1';
                            },
                            content() {
                                player.storage.zmt_np -= 15;
                                player.$gain2(game.createCard(trigger.card.name, '', '', ''));
                                player.draw();
                                var skills = lib.card[trigger.card.name].skills;
                                if (skills != undefined && trigger.card.name != 'muniu') {
                                    game.log(player, '获得了', ` ${get.translation(trigger.card)} 的装备技能`);
                                    for (var j = 0; j < skills.length; j++) {
                                        player.addSkill(skills[j]);
                                    }
                                }
                                if (!player.hasSkill('zmtianyouhonglu_2')) {
                                    player.addSkill('zmtianyouhonglu_2');
                                }
                            },
                            group: ['zmtianyouhonglu_1', 'zmtgaodengliliang', 'zmtlongzu', 'zmtleiren', 'zmtshenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊叁/audio:3',
                                    trigger: {
                                        player: 'equipEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return lib.card[event.card.name].skills != undefined && get.subtype(event.card) == 'equip2';
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget([1, Infinity], `可选择任意名角色获得${get.cnNumber(trigger.card)}的装备技能直到各自的回合结束`, function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', function (target) {
                                                if (trigger.card.name == 'tengjia') return false;
                                                return get.attitude(_status.event.player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.line(result.targets);
                                            event.targets = result.targets;
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            for (var i = 0; i < targets.length; i++) {
                                                var skills = lib.card[trigger.card.name].skills;
                                                if (!targets[i].hasSkill('zmtianyouhonglu_2')) {
                                                    targets[i].addSkill('zmtianyouhonglu_2');
                                                }
                                                targets[i].$gain2(game.createCard(trigger.card.name, '', '', ''));
                                                if (skills != undefined) {
                                                    game.log(targets[i], '获得了', ` ${get.translation(trigger.card)} 的装备技能`);
                                                    for (var j = 0; j < skills.length; j++) {
                                                        targets[i].addTempSkill(skills[j], { player: 'phaseEnd' });
                                                    }
                                                }
                                                //targets[i].addTempSkill(lib.card[trigger.card.name].skills,{player:'phaseAfter'});
                                            }
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'equipBegin',
                                    },
                                    superCharlotte: true,
                                    charlotte: true,
                                    fixed: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('e');
                                    },
                                    async content(event, trigger, player) {
                                        trigger.cancel();
                                        player.qequip(trigger.cards);
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (get.subtype(card) == 'equip1' || get.subtype(card) == 'equip2' || get.subtype(card) == 'equip4' || get.subtype(card) == 'equip4') return [1, 10];
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        zmjijiachengshan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:4',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('e') && event.player != player && event.player.countCards('e');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('e', get.prompt('zmjijiachengshan', trigger.player));
                                next.ai = function (card) {
                                    if (get.attitude(player, trigger.player) < 0) {
                                        return 5 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.chooseToDiscard(1, 'e', '需弃置一张装备区内的牌', true);
                                    trigger.num++;
                                }
                            },
                            ai: {
                                threaten: 1.9,
                            },
                            group: ['zmjijiachengshan_1'],
                            subSkill: {
                                1: {
                                    nobracket: true,
                                    audio: 'ext:综漫季刊叁/audio:4',
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('e') && event.source != player && event.source.countCards('e');
                                    },
                                    content() {
                                        'step 0';
                                        var next = player.chooseToDiscard('e', get.prompt('zmjijiachengshan_1', trigger.source));
                                        next.ai = function (card) {
                                            if (get.attitude(player, trigger.source) <= 0 || player.hp == 1) {
                                                return 9 - get.value(card);
                                            }
                                            return -1;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.source.chooseToDiscard(1, 'e', '需弃置一张装备区内的牌', true);
                                            trigger.num--;
                                        }
                                    },
                                },
                            },
                        },
                        zmxushihuajing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:5',
                            enable: 'phaseUse',
                            usable: 1,
                            init(player) {
                                player.storage.zmxushihuajing = false;
                            },
                            filter(event, player) {
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    if (i.getCards('j').length) {
                                        var mapcc = i.getCards('j');
                                        for (var j = 0; j < mapcc.length; j++) {
                                            var cardxx = mapcc[j];
                                            var cardss = game.createCard(cardxx.viewAs || cardxx.name, cardxx.suit, cardxx.number);
                                            if (event.filterCard && event.filterCard(cardss, player, event)) return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var dialog = ui.create.dialog('虚实画境', 'hidden');
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i.getCards('j').length) {
                                            var map = [];
                                            var mapcc = i.getCards('j');
                                            for (var j = 0; j < mapcc.length; j++) {
                                                var cardxx = mapcc[j];
                                                var cardss = game.createCard(cardxx.viewAs || cardxx.name, cardxx.suit, cardxx.number);
                                                map.push(cardss);
                                            }
                                            dialog.add(map);
                                        }
                                    }
                                    return dialog;
                                },
                                filter(button, player) {
                                    return lib.filter.filterCard(button.link, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var eff = 0,
                                        players = game.filterPlayer();
                                    var info = get.info(button.link);
                                    var select = get.select(info.selectTarget);
                                    if (get.tag(button.link, 'damage') && player.hasSkillTag('notricksource')) return -1;
                                    if (select[1] == -1 || info.notarget) {
                                        if (select[1] == -1) {
                                            for (var i of players) {
                                                if (player.canUse(button.link, i)) {
                                                    var num = get.effect(i, button.link, player, player);
                                                    eff += num >= 0 ? num : 1.5 * num;
                                                }
                                            }
                                            return eff;
                                        } else {
                                            return -1;
                                        }
                                    } else {
                                        var min = 0;
                                        for (var i of players) {
                                            if (player.canUse(button.link, i)) {
                                                var max = get.effect(i, button.link, player, player);
                                                if (max > min) min = max;
                                            }
                                        }
                                        return min;
                                    }
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card, player) {
                                            return true;
                                        },
                                        check(card) {
                                            var playerx = _status.event.player;
                                            if (card.name == links[0].name) return -1;
                                            if (card.name == 'du') return -1;
                                            if (playerx.needsToDiscard()) return 9 - get.value(card);
                                            return 6 - get.value(card);
                                        },
                                        popname: true,
                                        selectCard: 1,
                                        viewAs: {
                                            name: links[0].name,
                                        },
                                        onuse(result, player) {
                                            player.storage.zmxushihuajing = true;
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return `选择${get.translation(links[0].name)}的目标`;
                                },
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                                useful: -1,
                                value: -1,
                            },
                            group: ['zmxushihuajing_1', 'zmxushihuajing_2'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmxushihuajing_1 = [];
                                    },
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    filter(event, player) {
                                        if (event.parent.name != 'useCard') return false;
                                        if (player.storage.zmxushihuajing != true) return false;
                                        if (!event.cards || !event.cards.length) return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (event.hs && event.hs.length == 1) {
                                                    return true;
                                                }
                                            }
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.zmxushihuajing = false;
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (!player.storage.zmxushihuajing_1.includes(i)) {
                                                    player.storage.zmxushihuajing_1.push(i);
                                                    player.markSkill('zmxushihuajing_1');
                                                }
                                            }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'loseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.cards || !event.cards.length) return false;
                                        if (!event.js || event.js.length <= 0) return false;
                                        // if(!player.storage.zmxushihuajing_1.length) return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (player.storage.zmxushihuajing_1.includes(i)) {
                                                    return true;
                                                }
                                            }
                                        return false;
                                    },
                                    content() {
                                        //&&player.storage.zmxushihuajing_1.includes(event.card);
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (player.storage.zmxushihuajing_1.includes(i)) {
                                                    player.gain(i);
                                                    player.$gain2(i);
                                                    player.storage.zmxushihuajing_1.remove(i);
                                                }
                                            }
                                    },
                                },
                            },
                        },
                        zmxieyishengxing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:5',
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            check(event, player) {
                                var num1 = 0;
                                var num2 = 0;
                                var num3 = 0;
                                var num4 = 0;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (hs[i].suit == 'heart' && num1 == 0) {
                                        num1++;
                                    }
                                    if (hs[i].suit == 'spade' && num2 == 0) {
                                        num2++;
                                    }
                                    if (hs[i].suit == 'club' && num3 == 0) {
                                        num3++;
                                    }
                                    if (hs[i].suit == 'diamond' && num4 == 0) {
                                        num4++;
                                    }
                                }
                                var num5 = num1 + num2 + num3 + num4;
                                if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                    if (player.countCards('h', 'shan') && num5 <= 2) return false;
                                }
                                if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                    if (player.countCards('h', 'sha') && num5 <= 2) return false;
                                }
                                return player.countCards('h') >= 1 || player.hp <= 2;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 30) return false;
                                if (event.responded) return false;
                                if (!event.filterCard || (!event.filterCard({ name: 'shan' }, player, event) && !event.filterCard({ name: 'sha' }, player, event))) return false;
                                return _status.currentPhase != player;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 30;
                                event.num = 0;
                                event.num1 = 4;
                                player.draw();
                                ('step 1');
                                event.num1--;
                                var card1 = get.cards()[0];
                                event.card = card1;
                                player.showCards(event.card);
                                var next = player.chooseToDiscard(1, 'h', `可弃置一张花色为${get.translation(card1.suit)}的手牌`, function (card, player) {
                                    return card.suit == card1.suit;
                                });
                                next.ai = function (card) {
                                    if (card1.name == 'du') return false;
                                    if (card.name == 'du') return false;
                                    return true;
                                };
                                ('step 2');
                                if (result.bool) {
                                    event.num++;
                                    player.$gain2(event.card);
                                    player.gain(event.card);
                                    if (event.num1 >= 1) {
                                        event.goto(1);
                                    }
                                } else {
                                    if (event.num1 >= 1) {
                                        event.goto(1);
                                    }
                                }
                                ('step 3');
                                if (event.num >= 2) {
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    if (trigger.filterCard({ name: 'shan' }, player)) {
                                        trigger.result = { bool: true, card: { name: 'shan' } };
                                    } else {
                                        trigger.result = { bool: true, card: { name: 'sha' } };
                                    }
                                }
                            },
                            group: ['zmtgaodengliliang', 'zmtlongzu', 'zmtleiren', 'zmtshenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                        },
                        zmwotuyushen: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:6',
                            enable: 'phaseUse',
                            filter(event, player) {
                                for (var i of game.players) {
                                    if (!i.getEquip(2)) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            filterCard: true,
                            usable: 1,
                            check(card) {
                                return 5 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return !target.getEquip(2);
                            },
                            content() {
                                'step 0';
                                /*  var list=[];
                                for(var i=0;i<lib.inpile.length;i++){
                                    var name=lib.inpile[i];
                                    var card={name:name};
                                    var subtype=get.subtype(card);
                                    if(subtype&&subtype=='equip2'){
                                        list.push(['防具','',name]);              
                                    }
                                }*/
                                var list1 = [];
                                var list = get.inpile('equip');
                                for (var i = 0; i < list.length; i++) {
                                    var card = { name: list[i] };
                                    var info = get.info(card);
                                    if (info.subtype == 'equip2' && info.skills) {
                                        list1.push(list[i]);
                                    }
                                }
                                for (var i = 0; i < list1.length; i++) {
                                    list1[i] = ['防具', '', list1[i]];
                                }
                                var dialog = ui.create.dialog('选择一张防具牌装备直到泥岩的下回合开始', [list1, 'vcard'], 'hidden');
                                target.chooseButton(dialog, true).set('ai', function (button) {
                                    var card = { name: button.link[2] };
                                    var value = get.value(card);
                                    return value;
                                });
                                ('step 1');
                                if (result.bool) {
                                    if (player.hasSkill('zmhuirangdexuemai_1')) {
                                        player.removeSkill('zmhuirangdexuemai_1');
                                        var card = game.createCard(result.buttons[0].link[2]);
                                        target.equip(card, true);
                                    } else {
                                        target.storage.zmwotuyushen_1 = true;
                                        var card = game.createCard(result.buttons[0].link[2]);
                                        target.equip(card, true).set('delay', true);
                                        target.storage.zmwotuyushen_1 = card;
                                        card.zmwotuyushen_link = true;
                                        card._destroy = 'zmwotuyushen';
                                        target.addSkill('zmwotuyushen_1');
                                    }
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        if (player == target && player.countCards('h') > player.hp) return 3;
                                        return 2;
                                    },
                                },
                                threaten: 2,
                            },
                            group: ['zmwotuyushen_0'],
                            subSkill: {
                                0: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        event.players = get.players(player);
                                        event.num = 0;
                                        ('step 1');
                                        if (event.players.length) {
                                            var current = event.players.shift();
                                            var fk = current.getCards('hej', function (card) {
                                                return card.zmwotuyushen_link ? true : false;
                                            });
                                            if (fk.length) {
                                                current.lose(fk)._triggered = null;
                                            }
                                            event.redo();
                                        }
                                    },
                                },
                                1: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.player.hasSkill('zmwotuyushen');
                                    },
                                    content() {
                                        var card = player.storage.zmwotuyushen_1;
                                        ui.special.appendChild(card);
                                        delete player.storage.zmwotuyushen_1;
                                        player.removeSkill('zmwotuyushen_1');
                                    },
                                },
                                die: {
                                    trigger: {
                                        player: 'dieBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.removeSkill('zmwotuyushen_1');
                                    },
                                },
                            },
                        },
                        zmhuirangdexuemai: {
                            group: ['zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:3',
                            trigger: {
                                global: ['rewriteGainResult', 'rewriteDiscardResult'],
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 30) return false;
                                return event.player != event.target;
                            },
                            prompt(event, player) {
                                return `是否对${get.translation(event.target)}发动【秽壤的血脉】？`;
                            },
                            check(event, player) {
                                var num0 = player.countCards('h');
                                if (player.countCards('h', { name: 'tao' }) == 0 && player.countCards('h', { name: 'du' }) >= 1) return false;
                                if (player.hp >= 3 && event.target.hp >= 3) return false;
                                if (num0 == 0 || (player.hp <= 2 && event.target.hp >= 3)) return false;
                                return get.attitude(player, event.target) > 0;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.storage.zmt_np -= 30;
                                ('step 2');
                                var list2 = [];
                                var hs = player.getCards('h');
                                if (hs.length) {
                                    var hs2 = [];
                                    for (var i = 0; i < hs.length; i++) {
                                        hs2.push(game.createCard(hs[i].name, hs[i].suit, hs[i].number));
                                    }
                                }
                                trigger.target.gain(hs2, 'draw');
                                player.addSkill('zmhuirangdexuemai_1');
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmjingzhongxuying: {
                            audio: 'ext:综漫季刊叁/audio:3',
                            nobracket: true,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('subplayer')) return false;
                                if (_status.currentPhase == player) return false;
                                return player.storage.zmt_np >= 20 && player.getSubPlayers('zmjingzhongxuying').length <= 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                var skills = lib.character[player.name][3].slice(0);
                                for (var i = 0; i < skills.length; i++) {
                                    if (lib.skill[skills[i]].nosub) {
                                        skills.splice(i--, 1);
                                    }
                                }
                                player.addSubPlayer({
                                    name: player.name,
                                    skills: skills,
                                    maxHp: player.maxHp,
                                    hp: 1,
                                    hs: get.cards(0),
                                    intro: '你的回合结束时,切换为此随至你的回合开始.',
                                });
                            },
                            group: ['zmjingzhongxuying_1', 'zmjingzhongxuying_exit', 'zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: -60,
                                    filter(event, player) {
                                        return !player.hasSkill('subplayer') && player.getSubPlayers('zmjingzhongxuying').length >= 1;
                                    },
                                    content() {
                                        'step 0';
                                        player.callSubPlayer().set('tag', 'zmjingzhongxuying');
                                        ('step 1');
                                        player.phase('nodelay');
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊叁/image/zmshakuiying.jpg');
                                        ('step 2');
                                        player.stat.push({ card: {}, skill: {} });
                                    },
                                },
                                exit: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        // if(player.hasSkill('subplayer')) return false;
                                        return true;
                                    },
                                    content() {
                                        player.exitSubPlayer();
                                    },
                                },
                            },
                        },
                        zmxueseyuezhang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:6',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('red', 'black').set('ai', function (event) {
                                    switch (Math.floor(Math.random() * 5)) {
                                        case 0:
                                            return 'red';
                                        case 1:
                                            return 'black';
                                        case 2:
                                            return 'red';
                                        case 3:
                                            return 'black';
                                    }
                                });
                                ('step 1');
                                game.log(player, '选择了' + get.translation(result.control));
                                event.choice = result.control;
                                player.popup(event.choice);
                                event.card = target.getCards('h').randomGet();
                                target.showCards(event.card);
                                ('step 2');
                                if (get.color(event.card) != event.choice) {
                                    if (target.canUse(event.card, player)) {
                                        target.useCard(event.card, player, false);
                                    }
                                } else {
                                    target.discard(event.card);
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    target(player, target) {
                                        if (player.countCards('h') > 2) return -1;
                                    },
                                },
                            },
                        },
                        zmshengyinhuixiang: {
                            nobracket: true,
                            trigger: {
                                global: 'judgeEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.color(event.result.card) == 'red';
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                player
                                    .chooseTarget(`是否令一名角色获得${get.translation(trigger.result.card)}？`, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (target.hp == 1 || target.countCards('h') <= 1) att *= 3;
                                        return att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.line(event.target, 'green');
                                    if (event.target == player) {
                                        game.playzm3(['zmshengyinhuixiang11', 'zmshengyinhuixiang12', 'zmshengyinhuixiang13', 'zmshengyinhuixiang14', 'zmshengyinhuixiang13'].randomGet());
                                    } else {
                                        game.playzm3(['zmshengyinhuixiang21', 'zmshengyinhuixiang22', 'zmshengyinhuixiang23', 'zmshengyinhuixiang24', 'zmshengyinhuixiang25', 'zmshengyinhuixiang25', 'zmshengyinhuixiang26'].randomGet());
                                    }
                                    event.target.gain(trigger.result.card);
                                    event.target.$gain2(trigger.result.card);
                                }
                            },
                        },
                        zmziranzhenshe: {
                            group: ['zmziranzhenshe_1', 'zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            trigger: {
                                player: 'damageAfter',
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 20) return false;
                                return event.source != undefined && event.player != undefined && event.source.isAlive();
                            },
                            check(event, player) {
                                if (player.hp >= 2 && player.countCards('h') == 0) return false;
                                return get.attitude(player, event.source) < 0;
                            },
                            prompt(event, player, name) {
                                var str = '';
                                if (name == 'damageBeginAfter') {
                                    var mb = event.source;
                                } else {
                                    var mb = event.source;
                                }
                                str += `是否对${get.translation(mb)}发动【自然震慑】？`;
                                return str;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                event.target = trigger.source;
                                player.line(trigger.source);
                                ('step 1');
                                player.judge(function (card) {
                                    if (get.color(card) == 'black') return 0;
                                    return 0;
                                });
                                ('step 2');
                                if (result.color == 'black') {
                                    game.playzm3(['zmziranzhenshe1', 'zmziranzhenshe2', 'zmziranzhenshe3', 'zmziranzhenshe4'].randomGet());
                                    var num0 = 1;
                                    var map = {};
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        var type = get.type(hs[i], 'trick');
                                        if (!map[type]) {
                                            map[type] = 1;
                                        } else {
                                            map[type]++;
                                            if (map[type] > num0) {
                                                num0 = map[type];
                                            }
                                        }
                                    }
                                    if (event.target.countCards('he') + 1 <= num0) {
                                        event.target.damage();
                                    }
                                    event.target.chooseToDiscard(num0, 'he', true);
                                } else {
                                    var card = game.createCard('bingliang');
                                    event.target.addJudge(card);
                                    event.target.$draw(card);
                                }
                            },
                            ai: {
                                threaten: 1.6,
                                expose: 0.4,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        if (player.storage.zmt_np < 20) return false;
                                        return event.source != undefined && event.player != undefined && event.player.isAlive();
                                    },
                                    check(event, player) {
                                        if (player.hp >= 2 && player.countCards('h') == 0) return false;
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    prompt(event, player, name) {
                                        var str = '';
                                        var mb = event.player;
                                        str += `是否对${get.translation(mb)}发动【自然震慑】？`;
                                        return str;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmt_np -= 20;
                                        event.target = trigger.player;
                                        player.line(trigger.player);
                                        ('step 1');
                                        player.judge(function (card) {
                                            if (get.color(card) == 'black') return 0;
                                            return 0;
                                        });
                                        ('step 2');
                                        if (result.color == 'black') {
                                            game.playzm3(['zmziranzhenshe1', 'zmziranzhenshe2', 'zmziranzhenshe3', 'zmziranzhenshe4'].randomGet());
                                            var num0 = 0;
                                            var map = {};
                                            var hs = player.getCards('h');
                                            for (var i = 0; i < hs.length; i++) {
                                                var type = get.type(hs[i], 'trick');
                                                if (!map[type]) {
                                                    map[type] = 1;
                                                } else {
                                                    map[type]++;
                                                    if (map[type] > num0) {
                                                        num0 = map[type];
                                                    }
                                                }
                                            }
                                            if (event.target.countCards('he') + 1 <= num0) {
                                                event.target.damage();
                                            }
                                            event.target.chooseToDiscard(num0, 'he', true);
                                        } else {
                                            var card = game.createCard('bingliang');
                                            event.target.addJudge(card);
                                            event.target.$draw(card);
                                        }
                                    },
                                },
                            },
                        },
                        zmlinglongbaota: {
                            group: ['zmtshenxing', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            audio: 'ext:综漫季刊叁/audio:3',
                            usable: 1,
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.zmt_np >= 60;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], '可选择任意名其他角色;首个选择的角色需弃置2张牌,其余角色则离开游戏2轮.', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.$fullscreenpop('玲珑宝塔', 'soil');
                                    player.storage.zmt_np = 0;
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.num2 = 1;
                                    event.targets[0].chooseToDiscard(2, 'he', true);
                                }
                                ('step 2');
                                if (result.bool && event.num2 < event.targets.length) {
                                    event.targets[event.num2].out(2);
                                    event.num2++;
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zmtianjiangfuqianjun: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:3',
                            trigger: {
                                target: ['shaBefore'],
                                player: 'loseAfter',
                            },
                            usable: 1,
                            _priority: 5,
                            forced: true,
                            filter(event, player, onrewrite) {
                                if (onrewrite == 'loseAfter') {
                                    if (!player.isMinHandcard()) return false;
                                    return event.hs && event.hs.length;
                                }
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(1, '选择一名装备区内有牌的其他角色交换装备区内的牌.', function (card, player, target) {
                                        return player != target && target.countCards('e') > 0;
                                    })
                                    .set('ai', function (target) {
                                        if (player.countCards('h', { name: 'jinchan' }) == 1 && player.countCards('h') != 1 && player.countCards('e') == 0 && target.countCards('e') >= 2) {
                                            return -get.attitude(_status.event.player, target);
                                        } else {
                                            if (player.countCards('h', { name: 'jinchan' }) == 1 && player.countCards('h') == 1) {
                                                return false;
                                            } else {
                                                return get.attitude(_status.event.player, target);
                                            }
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                }
                                ('step 2');
                                if (result.bool && event.num2 < event.targets.length) {
                                    player.swapEquip(event.targets[event.num2]);
                                    player.draw();
                                    event.targets[event.num2].draw();
                                    event.num2++;
                                    event.redo();
                                }
                            },
                        },
                        zmhuangditequanl: {
                            init(player) {
                                player.storage.zmhuangditequanl = [];
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:8',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zmhuangditequanl.length;
                            },
                            content() {
                                'step 0';
                                var tricklist = [];
                                for (var i = 0; i < player.storage.zmhuangditequanl.length; i++) {
                                    tricklist.push(['锦囊', '', player.storage.zmhuangditequanl[i]]);
                                }
                                player.chooseButton(['可视为使用一张本轮内曾被使用过锦囊牌', [tricklist, 'vcard']], false).set('ai', function (button) {
                                    /*   var name=button.link[2];
                                        if(Math.max(taoyuan,nanman)>1){
                                            if(taoyuan>nanman) return name=='taoyuan'?1:0;
                                            return name=='nanman'?1:0;
                                        }
                                        if(player.countCards('h')<player.hp&&player.hp>=2){
                                            return name=='zengbing'?1:0;
                                        }
                                        if(player.hp<player.maxHp&&player.hp<2){
                                            return name=='wuzhong'?1:0;
                                        }*/
                                    var card = { name: button.link[2] };
                                    return get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseUseTarget({ name: result.links[0][2] }, false);
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['zmhuangditequanl_1', 'zmhuangditequanl_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o' && get.type(event.card) == 'trick';
                                    },
                                    content() {
                                        player.storage.zmhuangditequanl.add(trigger.card.name);
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    _priority: 7,
                                    content() {
                                        'step 0';
                                        player.storage.zmhuangditequanl = [];
                                    },
                                },
                            },
                        },
                        zmwudengzhibi: {
                            group: ['zmtshenxing', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            trigger: {
                                player: 'phaseBefore',
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 50;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], '选择任意名其他角色获得增益效果', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 50;
                                    game.playzm3('zmluomulusi');
                                    game.mp423('zmluomulusi');
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                    player.addSkill('zmwudengzhibi_1');
                                    player.addSkill('zmwudengzhibi_2');
                                }
                                ('step 2');
                                if (result.bool && event.num2 < event.targets.length) {
                                    player.line(event.targets[event.num2], 'fire');
                                    event.targets[event.num2].addSkill('zmwudengzhibi_1');
                                    event.num2++;
                                    event.redo();
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊叁/audio:6',
                                    trigger: {
                                        player: 'gainAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length;
                                    },
                                    content() {
                                        'step 0';
                                        event.type = [];
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                var typ = get.type(i);
                                                if (!event.type.includes(typ)) event.type.push(typ);
                                            }
                                        event.cars = get.cards(trigger.cards.length);
                                        player.showCards(event.cars);
                                        ('step 1');
                                        var cards2 = [];
                                        for (var i = 0; i < event.cars.length; i++) {
                                            if (event.type.includes(get.type(event.cars[i]))) {
                                                cards2.push(event.cars[i]);
                                                event.cars.splice(i--, 1);
                                            }
                                        }
                                        game.cardsDiscard(event.cars);
                                        if (cards2.length) {
                                            event.cards1 = cards2;
                                            player
                                                .chooseTarget(get.prompt('zmwudengzhibi_1'), '可令一名其他角色获得' + get.translation(cards2), function (card, player, target) {
                                                    return target != player && target.hasSkill('zmwudengzhibi_1');
                                                })
                                                .set('ai', function (target) {
                                                    var att = get.attitude(_status.event.player, target);
                                                    var num = Math.max(0, target.hp - target.countCards('h'));
                                                    if (att > 0) {
                                                        return att + num * 2;
                                                    }
                                                    return att;
                                                });
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            player.line(target, 'fire');
                                            target.gain(event.cards1, 'gain2');
                                        }
                                    },
                                    ai: {
                                        expose: 0.3,
                                        effect: {
                                            target(card, player, target) {
                                                if (card.name == 'zengbin') return [1, 3];
                                            },
                                        },
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'roundStart',
                                        player: 'die',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var num0 = game.countPlayer(function (current) {
                                            return true;
                                        });
                                        var num1 = game.countPlayer(function (current) {
                                            return current.countCards('h');
                                        });
                                        event.num0 = Math.round(num1 / num0);
                                        event.num1 = 0;
                                        event.num2 = 0;
                                        player.removeSkill('zmwudengzhibi_2');
                                        ('step 1');
                                        event.players = get.players(player);
                                        event.players = event.players.filter((i) => i.hasSkill('zmwudengzhibi_1'));
                                        ('step 2');
                                        if (event.players.length) {
                                            var current = event.players.shift();
                                            if (current.countCards('h') >= event.num0) {
                                                event.num1 += 1;
                                            }
                                            event.redo();
                                        }
                                        ('step 3');
                                        event.players2 = get.players(player);
                                        for (var i = 0; i < event.players2.length; i++) {
                                            if (!event.players2[i].hasSkill('zmwudengzhibi_1')) {
                                                event.players2.splice(i--, 1);
                                            }
                                        }
                                        ('step 4');
                                        event.num4 = event.players2.length;
                                        ('step 5');
                                        if (event.players2.length) {
                                            var current = event.players2.shift();
                                            current.removeSkill('zmwudengzhibi_1');
                                            if (event.num4 <= event.num1) {
                                                current.addSkill('zmwudengzhibi_3');
                                                current.storage.zmwudengzhibi_3 += 1;
                                                current.popup('手牌上限永久+1', 'fire');
                                            }
                                            event.redo();
                                        }
                                    },
                                },
                                3: {
                                    init(player) {
                                        player.storage.zmwudengzhibi_3 = 0;
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.storage.zmwudengzhibi_3;
                                        },
                                    },
                                },
                            },
                        },
                        zmyizhixiangqian: {
                            group: ['zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zmt_np >= 30;
                            },
                            content() {
                                'step 0';
                                event.cards = [];
                                event.num1 = 0;
                                event.num2 = 0;
                                event.num3 = 0;
                                event.num4 = 0;
                                player
                                    .chooseTarget([1, Infinity], '选择任意名其他角色同时展示一张牌', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 30;
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                }
                                ('step 2');
                                if (result.bool && targets && targets.length) {
                                    for (var i = 0; i < targets.length; i++) {
                                        if (targets[i].countCards('h')) {
                                            var card = targets[i].getCards('h').randomGet();
                                            event.cards.push(card);
                                            if (card.suit == 'heart' && event.num1 == 0) {
                                                event.num1++;
                                            }
                                            if (card.suit == 'spade' && event.num2 == 0) {
                                                event.num2++;
                                            }
                                            if (card.suit == 'club' && event.num3 == 0) {
                                                event.num3++;
                                            }
                                            if (card.suit == 'diamond' && event.num4 == 0) {
                                                event.num4++;
                                            }
                                        }
                                    }
                                }
                                ('step 3');
                                if (result.bool && targets && targets.length) {
                                    player.showCards(event.cards);
                                    var num = event.num1 + event.num2 + event.num3 + event.num4;
                                    for (var i = 0; i < targets.length; i++) {
                                        if (targets[i] != player && num >= 1) {
                                            targets[i].addSkill('zmyizhixiangqian_1');
                                            targets[i].addSkill('zmjiaqiangchongfeng');
                                            targets[i].storage.zmyizhixiangqian_1 = num;
                                        }
                                        targets[i].draw(num);
                                    }
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                    target: 1,
                                },
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmyizhixiangqian_1 = 0;
                                    },
                                    mark: true,
                                    marktext: '枪',
                                    intro: {
                                        content: '#回合后失去【夹枪冲锋】.',
                                    },
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    usable: 1,
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    content() {
                                        'step 0';
                                        player.storage.zmyizhixiangqian_1 -= 1;
                                        player.markSkill('zmyizhixiangqian_1');
                                        ('step 1');
                                        if (player.storage.zmyizhixiangqian_1 <= 0) {
                                            player.storage.zmyizhixiangqian_1 = 0;
                                            player.removeSkill('zmyizhixiangqian_1');
                                            player.removeSkill('zmjiaqiangchongfeng');
                                        }
                                    },
                                },
                            },
                        },
                        zmjiaqiangchongfeng: {
                            nobracket: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.storage.zmjiaqiangchongfeng == true && card.name == 'sha') return num + 1;
                                },
                                attackFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                            init(player) {
                                player.storage.zmjiaqiangchongfeng = true;
                            },
                            mark: true,
                            marktext: '冲',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.zmjiaqiangchongfeng == true) return '你使用【杀】的次数上限+1';
                                    return '你的攻击范围+1';
                                },
                            },
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            forced: true,
                            _priority: 10,
                            content() {
                                if (player.hasSkill('zmyizhixiangqian') && player.storage.zmt_np <= 34) {
                                    game.playzm3(['zmjiaqiangchongfeng1', 'zmjiaqiangchongfeng2', 'zmjiaqiangchongfeng3', 'zmjiaqiangchongfeng4'].randomGet());
                                }
                                if (player.storage.zmjiaqiangchongfeng) {
                                    player.storage.zmjiaqiangchongfeng = false;
                                } else {
                                    player.storage.zmjiaqiangchongfeng = true;
                                }
                            },
                        },
                        zmwuzhuangpeisong: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            init(player) {
                                player.storage.zmwuzhuangpeisong = [];
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        for (var i = 0; i < storage.length; i++) {
                                            storage[i].discard();
                                        }
                                        player.$throw(storage);
                                        player.storage.zmwuzhuangpeisong.length = 0;
                                        game.log(player, '移去了配送货物');
                                    }
                                },
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num2 = 0;
                                if (player.storage.zmwuzhuangpeisong.length == 0) {
                                    game.playzm3(['zmwuzhuangpeisong11', 'zmwuzhuangpeisong12', 'zmwuzhuangpeisong13', 'zmwuzhuangpeisong14'].randomGet());
                                    if (player.storage.zmwuzhuangpeisong_1 >= 1) {
                                        player.storage.zmwuzhuangpeisong_1 = 0;
                                        var num0 = Math.floor(player.hp);
                                        event.card = get.cards(num0);
                                    } else {
                                        event.card = get.cards();
                                    }
                                    player.showCards(event.card);
                                    if (player.storage.zmwuzhuangpeisong == undefined) player.storage.zmwuzhuangpeisong = [];
                                    player.storage.zmwuzhuangpeisong = event.card;
                                    player.markSkill('zmwuzhuangpeisong');
                                    event.trigger('zmwuzhuangpeisong');
                                } else {
                                    var num = 0;
                                    for (var i = 0; i < player.storage.zmwuzhuangpeisong.length; i++) {
                                        if (player.storage.zmwuzhuangpeisong[i].name == 'shan') {
                                            num++;
                                        }
                                    }
                                    player
                                        .chooseControl('交付货物', '增加储备', '取消')
                                        .set('prompt', '可选择一项效果发动')
                                        .set('choiceList', [`将已持有的${get.translation(player.storage.zmwuzhuangpeisong)}交给一名角色`, '将牌堆顶的两张牌置于武将牌上', '取消']).ai = function (event, player) {
                                            if ((num == 0 && player.storage.zmt_np <= 19 && player.countCards('h', { name: 'shan' }) == 0 && !player.getEquip(2)) || player.storage.zmwuzhuangpeisong.length >= 2) return '交付货物';
                                            return '增加储备';
                                        };
                                }
                                ('step 1');
                                if (result.control == '增加储备') {
                                    game.playzm3(['zmwuzhuangpeisong11', 'zmwuzhuangpeisong12', 'zmwuzhuangpeisong13', 'zmwuzhuangpeisong14'].randomGet());
                                    event.card = get.cards(2);
                                    player.showCards(event.card);
                                    for (var i = 0; i < event.card.length; i++) {
                                        player.storage.zmwuzhuangpeisong.add(event.card[i]);
                                        player.markSkill('zmwuzhuangpeisong');
                                        event.trigger('zmwuzhuangpeisong');
                                        event.card.splice(i--, 1);
                                    }
                                }
                                if (result.control == '交付货物') {
                                    event.num2 += 1;
                                    player
                                        .chooseTarget('选择一名角色获得' + get.translation(player.storage.zmwuzhuangpeisong), function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(player, target);
                                            if (target.hp == 1 || target.countCards('h') <= 1) att *= 3;
                                            return att;
                                        });
                                }
                                ('step 2');
                                if (result.bool && event.num2 >= 1) {
                                    event.num2 += 1;
                                    game.playzm3(['zmwuzhuangpeisong21', 'zmwuzhuangpeisong22', 'zmwuzhuangpeisong23', 'zmwuzhuangpeisong22'].randomGet());
                                    player.line(result.targets[0]);
                                    //result.targets[0].gain(player.storage.zmwuzhuangpeisong,'gain','fromStorage');
                                    event.directresult = player.storage.zmwuzhuangpeisong.slice(0);
                                    var links = event.directresult;
                                    for (var i = 0; i < links.length; i++) {
                                        player.storage.zmwuzhuangpeisong.remove(links[i]);
                                    }
                                    if (!player.storage.zmwuzhuangpeisong.length) {
                                        player.unmarkSkill('zmwuzhuangpeisong');
                                    } else {
                                        player.markSkill('zmwuzhuangpeisong');
                                    }
                                    result.targets[0].gain(links, 'gain2', 'fromStorage');
                                }
                                ('step 3');
                                if (event.num2 >= 2) {
                                    player.storage.zmwuzhuangpeisong = [];
                                    player.unmarkSkill('zmwuzhuangpeisong');
                                }
                            },
                            group: ['zmwuzhuangpeisong_1'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmwuzhuangpeisong_1 = 0;
                                    },
                                    audio: 'ext:综漫季刊叁/audio:1',
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        player.$throw(player.storage.zmwuzhuangpeisong, 1000);
                                        game.cardsDiscard(player.storage.zmwuzhuangpeisong);
                                        player.storage.zmwuzhuangpeisong = [];
                                        player.unmarkSkill('zmwuzhuangpeisong');
                                        player.storage.zmwuzhuangpeisong_1 += 1;
                                    },
                                },
                            },
                        },
                        zmlatelanchongfeng: {
                            nobracket: true,
                            group: ['zmlatelanchongfeng_sha', 'zmlatelanchongfeng_shan', 'zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                sha: {
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    filter(event, player) {
                                        if (player.storage.zmt_np < 25) return false;
                                        var num = 0;
                                        for (var i = 0; i < player.storage.zmwuzhuangpeisong.length; i++) {
                                            if (player.storage.zmwuzhuangpeisong[i].name == 'sha') {
                                                num++;
                                            }
                                        }
                                        return num >= 1 || player.countCards('h', { name: 'sha' }) >= 1;
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        return true;
                                    },
                                    selectCard: -1,
                                    mark: false,
                                    precontent() {
                                        player.storage.zmt_np -= 25;
                                        game.playzm3(['zmlatelanchongfeng11', 'zmlatelanchongfeng12', 'zmlatelanchongfeng13', 'zmlatelanchongfeng14'].randomGet());
                                    },
                                    prompt: '视为使用一张杀',
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            if (
                                                !player.hasShan() &&
                                                !game.hasPlayer(function (current) {
                                                    return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
                                                })
                                            ) {
                                                return 0;
                                            }
                                            return 2.95;
                                        },
                                        skillTagFilter(player, tag, arg) {
                                            if (player.hasSkill('zbqixizheduan_disable')) return false;
                                            if (arg != 'use') return false;
                                        },
                                        respondSha: true,
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        result: {
                                            target(player, target) {
                                                if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -6;
                                                    } else {
                                                        return -3;
                                                    }
                                                }
                                                return -1.5;
                                            },
                                        },
                                        tag: {
                                            respond: 1,
                                            respondShan: 1,
                                            damage(card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natureDamage(card) {
                                                if (card.nature) return 1;
                                            },
                                            fireDamage(card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage(card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage(card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                        canLink(player, target, card) {
                                            if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                            if (
                                                target.mayHaveShan() &&
                                                !player.hasSkillTag(
                                                    'directHit_ai',
                                                    true,
                                                    {
                                                        target: target,
                                                        card: card,
                                                    },
                                                    true
                                                )
                                            )
                                                return false;
                                            if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        yingbian(card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) return 0;
                                            var base = 0,
                                                hit = false;
                                            if (get.cardtag(card, 'yingbian_hit')) {
                                                hit = true;
                                                if (
                                                    targets.filter(function (target) {
                                                        return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_all')) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_damage')) {
                                                if (
                                                    targets.filter(function (target) {
                                                        return (
                                                            get.attitude(player, target) < 0 &&
                                                            (hit ||
                                                                !target.mayHaveShan() ||
                                                                player.hasSkillTag(
                                                                    'directHit_ai',
                                                                    true,
                                                                    {
                                                                        target: target,
                                                                        card: card,
                                                                    },
                                                                    true
                                                                )) &&
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        );
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            return base;
                                        },
                                    },
                                },
                                shan: {
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    mark: false,
                                    filter(event, player) {
                                        if (player.storage.zmt_np < 25) return false;
                                        var num = 0;
                                        for (var i = 0; i < player.storage.zmwuzhuangpeisong.length; i++) {
                                            if (player.storage.zmwuzhuangpeisong[i].name == 'shan') {
                                                num++;
                                            }
                                        }
                                        return num >= 1 || player.countCards('h', { name: 'shan' }) >= 1;
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        return true;
                                    },
                                    onuse(event, player) {
                                        player.storage.zmt_np -= 25;
                                        game.playzm3(['zmlatelanchongfeng21', 'zmlatelanchongfeng22', 'zmlatelanchongfeng23', 'zmlatelanchongfeng22'].randomGet());
                                    },
                                    selectCard: -1,
                                    prompt: '视为使用一张闪',
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            return 3.15;
                                        },
                                        skillTagFilter(player) {
                                            if (player.hasSkill('zbqixizheduan_disable')) return false;
                                        },
                                        respondShan: true,
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        zmninggu: {
                            nobracket: true,
                            trigger: {
                                global: 'loseAfter',
                            },
                            prompt(event, player) {
                                return `是否令${get.translation(event.player)}失去的${get.translation(event.cards)}回到原位？`;
                            },
                            check(event, player) {
                                if (event.type == 'gain') return false;
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if ((get.position(i) == 'd' && i.name == 'du') || (get.type(i) == 'equip' && _status.currentPhase == event.player) || (get.type(i) == 'delay' && event.js && event.js.length && _status.currentPhase == event.player) || (get.type(i) == 'delay' && event.type == 'use')) {
                                            num++;
                                        }
                                    }
                                if (get.attitude(player, event.player) > 0) {
                                    if (num > 0 || (event.js && event.js.length)) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                } else {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if ((get.position(i) == 'd' && i.name == 'du') || (get.type(i) == 'delay' && event.js && event.js.length && _status.currentPhase == event.player && i.name != 'shandian' && i.name != 'fulei')) {
                                                return true;
                                            }
                                        }
                                    return false;
                                }
                            },
                            filter(event, player) {
                                if (!event.player.isAlive()) return false;
                                if (player.hasSkill('zmninggu_temp')) return false;
                                return (!event.player.countCards('e') && event.es && event.es.length) || (!event.player.countCards('h') && event.hs && event.hs.length) || (!event.player.countCards('j') && event.js && event.js.length);
                            },
                            content() {
                                if (get.attitude(player, trigger.player) > 0 && event.player != player) {
                                    game.playzm3(['zmninggu1', 'zmninggu2'].randomGet());
                                } else {
                                    game.playzm3('zmninggu1');
                                }
                                if (!player.hasSkill('zmninggu_temp')) {
                                    player.addTempSkill('zmninggu_temp', 'roundStart');
                                }
                                if (!trigger.player.countCards('e') && trigger.es && trigger.es.length) {
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            trigger.player.useCard(i, trigger.player)._triggered = null;
                                        }
                                }
                                if (!trigger.player.countCards('h') && trigger.hs && trigger.hs.length) {
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            trigger.player.gain(i, 'gain2')._triggered = null;
                                        }
                                }
                                if (!trigger.player.countCards('j') && trigger.js && trigger.js.length) {
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            //  trigger.player.gain(i,'gain2');
                                            if (i.viewAs) {
                                                trigger.player.addJudge({ name: i.viewAs }, [i])._triggered = null;
                                            } else {
                                                trigger.player.addJudge(i)._triggered = null;
                                            }
                                        }
                                }
                            },
                            subSkill: {
                                temp: {},
                            },
                        },
                        zmgushou: {
                            group: ['zmgushou_1', 'zmtlongxue', 'zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:4',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            check(event, player) {
                                if (player.countCards('h', { name: 'wuxie' }) >= 1 || (player.hp > 1 && player.countCards('h') == 1)) return false;
                                var cards = player.getCards('h');
                                if (cards.length <= 1) {
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if (i.name == 'shan' || i.name == 'jinchan' || i.name == 'wuxie') return false;
                                        }
                                } else {
                                    return true;
                                }
                                return false;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 25) return false;
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 25;
                                trigger.cancel();
                                ('step 1');
                                for (var i = 0; i < player.getCards('h').length; i++) {
                                    game.broadcastAll(function (card) {
                                        card.init([card.suit, card.number, 'wuxie']);
                                    }, player.getCards('h')[i]);
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊叁/audio:6',
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) == 'basic' && player.countCards('h', { name: 'wuxie' }) > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var next = player.chooseToRespond({ name: 'wuxie' }, `是否打出一张【无懈可击】抵消${get.translation(trigger.player)}使用的${get.translation(trigger.card)}？`);
                                        next.set('ai', function (card) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, trigger.player);
                                            if (att < 0) {
                                                return 12 - get.value(card);
                                            } else {
                                                if (trigger.card.name == 'du') return 12 - get.value(card);
                                                return -1;
                                            }
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.all_excluded = true;
                                            trigger.targets.length = 0;
                                            // trigger.cancel();
                                        } else event.finish();
                                    },
                                },
                            },
                        },
                        zmluoyuzuji: {
                            group: ['zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:5',
                            trigger: {
                                global: 'damageBegin',
                            },
                            usable: 1,
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.player.countCards('h') >= 1 && player.countCards('h') >= 1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .discardPlayerCard(trigger.player, 'h', get.prompt('zmluoyuzuji'), true)
                                    .set('ai', function (button) {
                                        return Math.random();
                                    })
                                    .set('att', get.attitude(player, trigger.player) > 0);
                                ('step 1');
                                if (result.links?.length) {
                                    event.cardss = result.links[0];
                                    trigger.player
                                        .discardPlayerCard(player, 'h', get.prompt('zmluoyuzuji'), true)
                                        .set('ai', function (button) {
                                            return Math.random();
                                        })
                                        .set('att', get.attitude(trigger.player, player) > 0);
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    if (get.color(result.links[0]) == get.color(event.cardss)) {
                                        game.playzm3('zmluoyuzuji0');
                                        player.storage.zmmofafeijianshanguang++;
                                        trigger.num--;
                                    } else {
                                        trigger.player.gain(result.links[0], 'gain2');
                                        trigger.player.gain(event.cardss, 'gain2');
                                    }
                                }
                            },
                        },
                        zmmofafeijianshanguang: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            mark: true,
                            marktext: '闪',
                            init(player) {
                                player.storage.zmmofafeijianshanguang = 0;
                            },
                            intro: {
                                content: '已经累计使用【落雨阻击】抵消伤害#点.',
                            },
                            check(event, player) {
                                var num1 = player.storage.zmmofafeijianshanguang - event.num;
                                // if(player.hp>=event.num+1) return false;
                                return (get.attitude(player, event.source) <= 0 && num1 >= event.source.hp) || (get.attitude(player, event.source) <= 0 && player.hp <= event.num) || (get.attitude(player, event.source) > 0 && event.num >= player.storage.zmmofafeijianshanguang);
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 35;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 35;
                                event.num = player.storage.zmmofafeijianshanguang + 1;
                                player.storage.zmmofafeijianshanguang = 0;
                                var num1 = event.num - trigger.num;
                                if (num1 >= 0) {
                                    trigger.num = 0;
                                } else {
                                    trigger.num -= event.num;
                                }
                                if (trigger.source != undefined && num1 >= 1) {
                                    game.playzm3('zmmofafeijianshanguang2');
                                    if (player.hp <= 2) {
                                        game.mp423('zmhuangshumomeixiang2');
                                    } else {
                                        game.mp423('zmhuangshumeimoxiang');
                                    }
                                    trigger.source.damage(num1);
                                } else {
                                    game.playzm3('zmmofafeijianshanguang1');
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        zmguanghuizhiluq: {
                            group: ['zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:5',
                            trigger: {
                                global: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return player.countCards('he') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard([1, Infinity], 'he', `是否弃置任意张牌令${get.translation(trigger.player)}与此阶段多摸等量的牌？`, function (card, player) {
                                    return true;
                                });
                                var att = get.attitude(_status.event.player, trigger.player);
                                next.ai = function (card) {
                                    if (att > 0) {
                                        if (card.suit == 'heart') {
                                            if (!get.tag(card, 'recover')) return 8 - get.value(card);
                                        }
                                        return 5 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.num += result.cards.length;
                                    trigger.player.addTempSkill('zmguanghuizhiluq_2');
                                    player.addTempSkill('zmguanghuizhiluq_1');
                                }
                            },
                            subSkill: {
                                1: {},
                                2: {
                                    trigger: {
                                        player: 'phaseDiscardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player.isIn()) {
                                            var cardx = [];
                                            event.player.getHistory('lose', function (evt) {
                                                if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.cards2.filterInD('d').length) cardx.addArray(evt.cards2.filterInD('d'));
                                            });
                                            return cardx.length >= 1;
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var cardx = [];
                                        trigger.player.getHistory('lose', function (evt) {
                                            if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger && evt.cards2.filterInD('d').length) cardx.addArray(evt.cards2.filterInD('d'));
                                        });
                                        event.cardx = cardx;
                                        event.target = game.findPlayer(function (current) {
                                            return current.hasSkill('zmguanghuizhiluq_1');
                                        });
                                        ('step 1');
                                        player.chooseCardButton(1, event.cardx, `选择一张弃置的牌交给${get.translation(event.target)}？`).set('ai', function (button) {
                                            var att = get.attitude(_status.event.player, event.target);
                                            if (att > 0) return get.value(button.link);
                                            return 0;
                                        });
                                        ('step 2');
                                        if (result.bool) {
                                            event.target.gain(result.links[0]);
                                            event.target.$gain2(result.links[0]);
                                        }
                                    },
                                },
                            },
                        },
                        zmbowenjizou: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            init(player) {
                                player.storage.zmbowenjizou = 0;
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmt_np >= 15;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('zmtshensheng');
                                player.storage.zmt_np -= 15;
                                var num = player.storage.zmbowenjizou;
                                if (num <= player.hp) {
                                    game.playzm3(['zmbowenjizou11', 'zmbowenjizou12', 'zmbowenjizou13', 'zmbowenjizou14', 'zmbowenjizou15'].randomGet());
                                    player.draw();
                                    player.skip('phaseDiscard');
                                } else {
                                    game.playzm3(['zmbowenjizou21', 'zmbowenjizou22', 'zmbowenjizou23', 'zmbowenjizou24', 'zmbowenjizou25'].randomGet());
                                    player.useCard({ name: 'jiu' }, player);
                                }
                            },
                            group: ['zmbowenjizou_1', 'zmbowenjizou_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        player.storage.zmbowenjizou = 0;
                                    },
                                    popup: false,
                                },
                                2: {
                                    trigger: {
                                        player: 'gainEnd',
                                    },
                                    init(player) {
                                        player.storage.zmbowenjizou = 0;
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmbowenjizou += trigger.cards.length;
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmwuxingmaoyi: {
                            group: ['zmthundun', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:8',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                if (player.hasSkill('zmwuxingmaoyi1') && player.hasSkill('zmwuxingmaoyi2') && player.hasSkill('zmwuxingmaoyi3')) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num4 = game.countPlayer(function (current) {
                                    var player = _status.event.player;
                                    return player.getEnemies().includes(current) && get.distance(player, current, 'attack') <= 1 && get.effect(current, { name: 'sha' }, player) > 0;
                                });
                                var num0 = game.countPlayer(function (current) {
                                    return true;
                                });
                                var num1 = game.countPlayer(function (current) {
                                    return current.countCards('h');
                                });
                                var num3 = Math.round(num1 / num0);
                                if (!player.hasSkill('zmwuxingmaoyi1') && !player.hasSkill('zmwuxingmaoyi2') && !player.hasSkill('zmwuxingmaoyi3')) {
                                    player.chooseControl('对冲基金', '时差套现', '恶意并购', 'cancel').set('prompt', '可选择一项方案生效两轮').ai = function () {
                                        if (player.countCards('h', { name: 'sha' }) >= 2 && num4 >= 1) return 2;
                                        if ((player.hp <= 2 && player.countCards('h', { name: 'sha' }) <= 0 && player.countCards('h', { name: 'shan' }) <= 0) || num3 - player.countCards('h') >= 3) return 0;
                                        return 1;
                                    };
                                } else {
                                    if (!player.hasSkill('zmwuxingmaoyi1') && !player.hasSkill('zmwuxingmaoyi2')) {
                                        player.chooseControl('对冲基金', '时差套现', 'cancel').set('prompt', '可选择一项方案生效两轮').ai = function () {
                                            return 1;
                                        };
                                    }
                                    if (!player.hasSkill('zmwuxingmaoyi1') && !player.hasSkill('zmwuxingmaoyi3')) {
                                        player.chooseControl('对冲基金', '恶意并购', 'cancel').set('prompt', '可选择一项方案生效两轮').ai = function () {
                                            if (player.countCards('h', { name: 'sha' }) >= 2 && num4 >= 1) return 1;
                                            if ((num4 <= 0 && num3 - player.countCards('h') >= 1) || (player.hp <= 1 && player.countCards('h', { name: 'sha' }) <= 0)) return 0;
                                            return 2;
                                        };
                                    }
                                    if (!player.hasSkill('zmwuxingmaoyi2') && !player.hasSkill('zmwuxingmaoyi3')) {
                                        player.chooseControl('时差套现', '恶意并购', 'cancel').set('prompt', '可选择一项方案生效两轮').ai = function () {
                                            return 2;
                                        };
                                    }
                                    if (player.hasSkill('zmwuxingmaoyi1') && player.hasSkill('zmwuxingmaoyi3')) {
                                        player.chooseControl('时差套现', 'cancel').set('prompt', '可选择一项方案生效两轮').ai = function () {
                                            if (player.countCards('h', { name: 'sha' }) <= 0 || num4 <= 0) return 0;
                                            return 1;
                                        };
                                    }
                                    if (player.hasSkill('zmwuxingmaoyi1') && player.hasSkill('zmwuxingmaoyi2')) {
                                        player.chooseControl('恶意并购', 'cancel').set('prompt', '可选择一项方案生效两轮').ai = function () {
                                            return 1;
                                        };
                                    }
                                    if (player.hasSkill('zmwuxingmaoyi2') && player.hasSkill('zmwuxingmaoyi3')) {
                                        player.chooseControl('对冲基金', 'cancel').set('prompt', '可选择一项方案生效两轮').ai = function () {
                                            return 1;
                                        };
                                    }
                                }
                                ('step 1');
                                ('step 2');
                                if (result.control == '对冲基金') {
                                    game.playzm3('zmwuxingmaoyia1');
                                    var num0 = game.countPlayer(function (current) {
                                        return true;
                                    });
                                    var num1 = game.countPlayer(function (current) {
                                        return current.countCards('h');
                                    });
                                    var num3 = Math.round(num1 / num0);
                                    if (player.countCards('h') + 1 <= num3) {
                                        player.draw(num3 - player.countCards('h'));
                                    }
                                    if (player.countCards('h') >= num3 + 1) {
                                        var num = player.countCards('h') - num3;
                                        player.chooseToDiscard(num, 'h', true);
                                    }
                                    player.addSkill('zmwuxingmaoyi1');
                                }
                                if (result.control == '恶意并购') {
                                    game.playzm3('zmwuxingmaoyia3');
                                    player.addSkill('zmwuxingmaoyi3');
                                }
                                if (result.control == '时差套现') {
                                    game.playzm3('zmwuxingmaoyia2');
                                    player.phaseDraw();
                                    event.goto(4);
                                }
                                ('step 3');
                                event.finish();
                                ('step 4');
                                player.skip('phaseDraw');
                                player.addSkill('zmwuxingmaoyi2');
                            },
                        },
                        zmheisexiwei: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:1',
                            trigger: {
                                source: 'damage',
                                player: 'damage',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player && event.source && event.source != event.player;
                            }, //QQQ
                            logTarget: 'source',
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                if (trigger.player.countCards('he') >= event.num) {
                                    trigger.source.gainPlayerCard(event.num, 'he', trigger.player, true);
                                } else {
                                    if (player == trigger.source) {
                                        game.playzm3(['zmheisexiwei0', 'zmheisexiwei00'].randomGet());
                                    }
                                    trigger.player.changeHp(-1);
                                    trigger.source.changeHp(+1);
                                }
                            },
                        },
                        zmwuxingmaoyi1: {
                            mod: {
                                playerEnabled(card, player, target) {
                                    if (target != player) return false;
                                }, //QQQ
                            },
                            nobracket: true,
                            trigger: {
                                player: ['gainEnd', 'loseEnd'],
                            },
                            init(player) {
                                player.storage.zmwuxingmaoyi1 = 0;
                            },
                            forced: true,
                            filter(event, player) {
                                var num0 = game.countPlayer(function (current) {
                                    return true;
                                });
                                var num1 = game.countPlayer(function (current) {
                                    return current.countCards('h');
                                });
                                var num3 = Math.round(num1 / num0);
                                return player.countCards('h') != num3;
                            },
                            content() {
                                'step 0';
                                var num0 = game.countPlayer(function (current) {
                                    return true;
                                });
                                var num1 = game.countPlayer(function (current) {
                                    return current.countCards('h');
                                });
                                var num3 = Math.round(num1 / num0);
                                if (player.countCards('h') <= num3) {
                                    player.draw(num3 - player.countCards('h'));
                                } else {
                                    var num = player.countCards('h') - num3;
                                    player.chooseToDiscard(num, 'h', true);
                                }
                            },
                            group: ['zmwuxingmaoyi1_1'],
                            subSkill: {
                                1: {
                                    silent: true,
                                    forced: true,
                                    name: '对冲基金失效',
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    usable: 1,
                                    content() {
                                        'step 0';
                                        player.storage.zmwuxingmaoyi1 += 1;
                                        ('step 1');
                                        if (player.storage.zmwuxingmaoyi1 >= 2) {
                                            player.storage.zmwuxingmaoyi1 = 0;
                                            player.removeSkill('zmwuxingmaoyi1');
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        zmwuxingmaoyi2: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + num;
                                },
                            },
                            init(player) {
                                player.storage.zmwuxingmaoyi2 = 0;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:1',
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                if (event.getParent(2).name == 'zmwuxingmaoyi2') return false;
                                if (event.getParent(2).name == 'zmwuxingmaoyi') return false;
                                return event.cards && event.cards.length;
                            },
                            content() {
                                player.draw();
                            },
                            group: ['zmwuxingmaoyi2_1'],
                            subSkill: {
                                1: {
                                    name: '时差套现失效',
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    silent: true,
                                    usable: 1,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.zmwuxingmaoyi2 += 1;
                                        ('step 1');
                                        if (player.storage.zmwuxingmaoyi2 >= 2) {
                                            player.storage.zmwuxingmaoyi2 = 0;
                                            player.removeSkill('zmwuxingmaoyi2');
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        zmwuxingmaoyi3: {
                            init(player) {
                                player.storage.zmwuxingmaoyi3 = 0;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    return Infinity;
                                },
                            },
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmwuxingmaoyi3 += 1;
                            },
                            group: ['zmwuxingmaoyi3_1'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmwuxingmaoyi3_1 = 0;
                                    },
                                    name: '恶意并购失效',
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    usable: 1,
                                    silent: true,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.zmwuxingmaoyi3_1 += 1;
                                        ('step 1');
                                        if (player.storage.zmwuxingmaoyi3_1 >= 2) {
                                            if (player.storage.zmwuxingmaoyi3 <= 0) {
                                                game.playzm3('zmwuxingmaoyi30');
                                                var num = player.hp;
                                                player.loseHp(num);
                                            }
                                            player.storage.zmwuxingmaoyi3 = 0;
                                            player.storage.zmwuxingmaoyi3_1 = 0;
                                            player.removeSkill('zmwuxingmaoyi3');
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        zmtongxingzhuangpei: {
                            nobracket: true,
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 60) return false;
                                if (event.player == player) return false;
                                if (!player.countCards('he', { type: get.type(event.card) })) return false;
                                return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player);
                            },
                            content() {
                                var num = player.countCards('he', { type: get.type(trigger.card) });
                                player.storage.zmt_np = 0;
                                game.playzm3('zmsanguoq');
                                if (trigger.player.hp <= num || num >= 3) {
                                    game.mp423('zmsanguoq2');
                                } else {
                                    game.mp423('zmsanguoq');
                                }
                                trigger.player.damage(num);
                                var cards = player.getCards('he', { type: get.type(trigger.card) });
                                if (cards.length) {
                                    player.discard(cards);
                                }
                            },
                        },
                        zmmeishiqudong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:5',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countDisabled() < 5;
                            },
                            content() {
                                player.chooseToDisable().ai = function (event, player, list) {
                                    if (list.includes('equip5')) return 'equip5';
                                    return list.randomGet();
                                };
                                player.draw(2);
                            },
                            group: ['zmmeishiqudong_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊叁/audio:5',
                                    trigger: {
                                        target: 'useCardToBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player == player && player.countDisabled();
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToEnable();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.type(card, 'trick') == 'trick' && player == target) return [1, 1];
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        zmgongzhutuxi: {
                            group: ['zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:2',
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.zmt_np >= 50 && player.countDisabled() < 5;
                            },
                            filterTarget(card, player, target) {
                                if (get.distance(player, target, 'attack') > 1) return false;
                                return target != player;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 50;
                                player.line(target);
                                event.num = 5 - player.countDisabled();
                                event.num1 = 0;
                                ('step 1');
                                event.num--;
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return 1;
                                    return -1;
                                });
                                ('step 2');
                                if (result.bool) {
                                    game.playzm3('zmpeikelimu0');
                                    event.num1 += 1;
                                    if (event.num >= 1) {
                                        event.goto(1);
                                    }
                                } else {
                                    if (event.num >= 1) {
                                        event.goto(1);
                                    }
                                }
                                ('step 3');
                                if (event.num1 > 0) {
                                    game.playzm3('zmpeikelimu');
                                    game.mp423('zmpeikelimu');
                                    target.damage(event.num1);
                                }
                            },
                            ai: {
                                order: 4,
                                result: {
                                    target(player, target) {
                                        if (player.countDisabled() <= 1 || (player.hp <= 1 && player.countDisabled() <= 2)) return -2;
                                        return 0;
                                    },
                                },
                            },
                        },
                        zmzhuanlunshenglijian: {
                            group: ['zmtsuzheng', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:8',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('h')) return false;
                                if (event.num <= 0) return false;
                                return event.card && event.player.isAlive() && event.player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.chooseCard(1, 'h', `你可弃置一张手牌并令${get.translation(trigger.player)}弃置一张手牌,若两张牌颜色相同则该伤害+1`).ai = function (card) {
                                    var att = get.attitude(player, _status.event.getTrigger().player);
                                    if (att > 0) return -1;
                                    return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.color1 = get.color(result.cards[0]);
                                    player.discard(result.cards[0]);
                                } else event.finish();
                                ('step 2');
                                trigger.player.chooseToDiscard(`需弃置一张手牌,若此牌颜色为${get.translation(event.color1)}则${get.translation(player)}对你造成的伤害+1`, true).set('ai', function (card) {
                                    var color = get.color(card);
                                    if (color != event.color1) {
                                        return 7 - get.value(card);
                                    } else return 4 - get.value(card);
                                });
                                ('step 3');
                                if (result.bool) {
                                    var color2 = get.color(result.cards[0]);
                                    if (event.color1 == color2) {
                                        game.playzm3('zmgaowen');
                                        var t = Math.random();
                                        if (t <= 0.5) {
                                            game.mp423('zmgaowen');
                                        } else {
                                            game.mp423('zmgaowen2');
                                        }
                                        trigger.num++;
                                    }
                                }
                            },
                        },
                        zmshengzhedeshuzi: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && card.number && game.roundNumber % 3 == 0) {
                                        if (get.distance(player, target) <= card.number) return true;
                                    }
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:6',
                            trigger: {
                                player: ['useCard'],
                            },
                            init(player) {
                                player.storage.zmshengzhedeshuzi = 0;
                            },
                            forced: true,
                            _priority: 19,
                            intro: {
                                content(storage) {
                                    return `已使用${storage}张牌`;
                                },
                            },
                            content() {
                                'step 0';
                                player.storage.zmshengzhedeshuzi++;
                                ('step 1');
                                if (player.storage.zmshengzhedeshuzi >= 3) {
                                    player.storage.zmshengzhedeshuzi = 0;
                                    if (player.storage.zmt_np >= 30 || (game.roundNumber % 3 == 0 && player.storage.zmt_np >= 15)) {
                                        if (game.roundNumber % 3 == 0) {
                                            player.storage.zmt_np -= 15;
                                        } else {
                                            player.storage.zmt_np -= 30;
                                        }
                                        player.chooseDrawRecover(3, true);
                                        player.getStat().card = {};
                                    }
                                    player.markSkill('zmshengzhedeshuzi');
                                }
                            },
                            group: ['zmshengzhedeshuzi_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.roundNumber % 3 == 0;
                                    },
                                    content() {
                                        trigger.nature = 'fire';
                                    },
                                    ai: {
                                        skillTagFilter(player) {
                                            if (player != _status.currentPhase) return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmduotianzhimos: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:8',
                            trigger: {
                                global: ['discardBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && !player.hasSkill('zmduotianzhimos_1');
                            },
                            content() {
                                'step 0';
                                var num = trigger.cards.length;
                                var prompt = `${get.translation(trigger.player)}即将弃置${get.translation(trigger.cards)},是否更改之？`;
                                var next = player.choosePlayerCard(prompt, num, trigger.player, 'hej', 'visible');
                                next.set('ai', function (button) {
                                    var att1 = get.attitude(player, trigger.player);
                                    var position = get.position(button.link);
                                    if (att1 < 0) {
                                        return get.value(button.link, trigger.player);
                                    } else return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    if (!player.hasSkill('zmduotianzhimos_1')) {
                                        player.addTempSkill('zmduotianzhimos_1');
                                    }
                                    if (!trigger.player.hasSkill('zmduotianzhimos_2')) {
                                        trigger.player.addSkill('zmduotianzhimos_2');
                                    }
                                    // var card=result.links;
                                    for (var i of result.links) {
                                        var name = i.name;
                                        if (!trigger.player.storage.zmduotianzhimos_2.includes(name)) {
                                            trigger.player.storage.zmduotianzhimos_2.push(i);
                                            trigger.player.markSkill('zmduotianzhimos_2');
                                        }
                                    }
                                    trigger.cards = result.links;
                                }
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.tag(card, 'loseCard')) {
                                            return 'zeroplayertarget';
                                        }
                                    },
                                },
                            },
                            group: ['zmduotianzhimos_3', 'zmtgaodengliliang', 'zmtmoxing', 'zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {},
                                2: {
                                    name: '堕天',
                                    mark: true,
                                    marktext: '堕',
                                    init(player) {
                                        player.storage.zmduotianzhimos_2 = [];
                                    },
                                    intro: {
                                        content(storage) {
                                            if (!storage.length) {
                                                return '未记录牌';
                                            } else {
                                                var str = '已记录名称为' + get.translation(storage[0].name);
                                                for (var i = 1; i < storage.length; i++) {
                                                    str += '、' + get.translation(storage[i].name);
                                                }
                                                str += '的牌';
                                                return str;
                                            }
                                        },
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            var num1 = 0;
                                            for (var i = 0; i < player.getCards('hej').length; i++) {
                                                game.broadcastAll(function (card) {
                                                    for (var i = 0; i < player.storage.zmduotianzhimos_2.length; i++) {
                                                        if (card.name && card.name == player.storage.zmduotianzhimos_2[i].name) {
                                                            num1++;
                                                        }
                                                    }
                                                }, player.getCards('hej')[i]);
                                            }
                                            return num - num1;
                                        },
                                    },
                                },
                                3: {
                                    audio: 'ext:综漫季刊叁/audio:1',
                                    trigger: {
                                        global: ['discardPlayerCardBegin', 'gainPlayerCardBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.target == player;
                                    },
                                    content() {
                                        trigger.position = 'j';
                                    },
                                },
                            },
                        },
                        zmyuanzuizhiwang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:4',
                            trigger: {
                                player: 'damageBegin',
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 20 * event.num) return false;
                                if (event.num <= 0) return false;
                                if (event.source == undefined) return false;
                                if (event.source == player) return false;
                                //return event.source && event.source.countCards('h')<player.countCards('h')||event.source.countCards('e')<player.countCards('e')||event.source.countCards('j')<player.countCards('j');
                                return event.source && event.source.countCards('h') < player.countCards('h');
                            },
                            logTarget: 'source',
                            content() {
                                player.storage.zmt_np -= trigger.num * 20;
                                trigger.untrigger();
                                trigger.finish();
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    var num4 = game.countPlayer(function (current) {
                                        return current.countCards('h') < player.countCards('h');
                                    });
                                    return num + num4;
                                },
                                selectTarget(card, player, range) {
                                    var num4 = game.countPlayer(function (current) {
                                        return current.countCards('h') < player.countCards('h');
                                    });
                                    if (Array.isArray(range) && range[1] != -1) range[1] += num4;
                                },
                            },
                            group: ['zmyuanzuizhiwang_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaBefore',
                                    },
                                    silent: true,
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.baseDamage >= 2) {
                                            game.playzm3('zmsadan2');
                                        }
                                        if (trigger.targets.length >= 3) {
                                            game.playzm3('zmsadan1');
                                            game.mp423('zmsadan');
                                        }
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmtoudaozhe: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:6',
                            trigger: {
                                global: ['useCardToBefore'],
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                var num4 = player.hasCard(function (card) {
                                    return card.number == event.card.number;
                                }, 'he');
                                if (num4 <= 0) return false;
                                if (event.player == player) return false;
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (get.position(i, true) == 'o') return true;
                                        }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var val = get.value(trigger.card);
                                var number = trigger.card.number;
                                var eff = get.effect(trigger.target, trigger.card, trigger.player, player);
                                var next = player.chooseCard('he', `是否弃置一张点数为${number}的牌取消${get.translation(trigger.player)}使用的${get.translation(trigger.card)}并获得此牌？`, function (card) {
                                    return card.number == number;
                                });
                                next.ai = function (card) {
                                    var color = get.color(card);
                                    if (eff >= 0) return 0;
                                    if (color == get.color(trigger.card)) return 14 - get.value(card);
                                    return true;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.addSkill('zmtoudaozhe_2');
                                    game.playzm3('zmameng0');
                                    if (_status.event.getParent('phaseJudge').name == 'phaseJudge') {
                                        event.name = 'phaseJudge';
                                    }
                                    if (_status.event.getParent('phaseDraw').name == 'phaseDraw') {
                                        event.name = 'phaseDraw';
                                    }
                                    if (_status.event.getParent('phaseUse').name == 'phaseUse') {
                                        event.name = 'phaseUse';
                                    }
                                    if (_status.event.getParent('phaseDiscard').name == 'phaseDiscard') {
                                        event.name = 'phaseDiscard';
                                    }
                                    if (_status.event.getParent('phaseJieshu').name == 'phaseJieshu') {
                                        event.name = 'phaseJieshu';
                                    }
                                    event.num1 = 0;
                                    event.num2 = 0;
                                    player.discard(result.cards);
                                    if (get.color(result.cards[0]) == get.color(trigger.card)) {
                                        event.num1 += 1;
                                    }
                                    if (result.cards[0].suit == trigger.card.suit) {
                                        event.num2 += 1;
                                    }
                                    var cards = trigger.cards.slice(0);
                                    cards = cards.filter((i) => get.position(i, true) == 'o');
                                    player.gain(cards, 'gain2');
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                    trigger.cancel();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.num2 >= 1) {
                                    var controls = [];
                                    var skills = trigger.player.getCards('s');
                                    for (var i = 0; i < skills.length; i++) {
                                        var info = lib.skill[skills[i]];
                                        if (!info) continue;
                                        if (!lib.translate[skills[i]]) continue;
                                        if (!lib.translate[skills[i] + '_info']) continue;
                                        if (!controls.includes(skills[i])) {
                                            controls.push(skills[i]);
                                        }
                                    }
                                    if (controls.length >= 1) {
                                        player
                                            .chooseControl(controls)
                                            .set('ai', function () {
                                                if (get.attitude(_status.event.player, trigger.player) > 0) return false;
                                                return Math.floor(Math.random() * controls.length);
                                            })
                                            .set('prompt', `可获得${get.translation(trigger.player)}一个技能至你受到伤害为止`);
                                    }
                                }
                                ('step 3');
                                if (result.control) {
                                    trigger.player.storage.zmtoudaozhe = true;
                                    trigger.player.popup(result.control);
                                    trigger.player.disableSkill('zmtoudaozhe', [result.control]);
                                    // player.addSkill(result.control);
                                    player.addTempSkill(result.control, { player: 'damageBefore' });
                                    game.log(trigger.player, '持有的技能', `【${get.translation(result.control)}】`, `失效并由${get.translation(player)}获得直到${get.translation(player)}受到伤害为止`);
                                }
                                ('step 4');
                                if (event.name == 'phaseJudge') {
                                    var str = '判定阶段';
                                }
                                if (event.name == 'phaseDraw') {
                                    var str = '摸牌阶段';
                                }
                                if (event.name == 'phaseUse') {
                                    var str = '出牌阶段';
                                }
                                if (event.name == 'phaseDiscard') {
                                    var str = '弃牌阶段';
                                }
                                if (event.name == 'phaseJieshu') {
                                    var str = '结束阶段';
                                }
                                if (str != undefined && event.num1 > 0) {
                                    player
                                        .chooseTarget(`是否令一名角色进行一个额外的${str}？`, function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            if (event.name == 'phaseDiscard') {
                                                var num = target.countCards('h');
                                                num += get.threaten(target);
                                                if (target.countCards('h') - 1 >= target.getHandcardLimit()) {
                                                    num * 10;
                                                }
                                                return -get.attitude(_status.event.player, target) - num;
                                            } else {
                                                return get.attitude(_status.event.player, target);
                                            }
                                        });
                                }
                                ('step 5');
                                if (result.bool && event.num1 > 0) {
                                    if (event.name == 'phaseJudge') {
                                        var str = '判定阶段';
                                    }
                                    if (event.name == 'phaseDraw') {
                                        var str = '摸牌阶段';
                                    }
                                    if (event.name == 'phaseUse') {
                                        var str = '出牌阶段';
                                    }
                                    if (event.name == 'phaseDiscard') {
                                        var str = '弃牌阶段';
                                    }
                                    if (event.name == 'phaseJieshu') {
                                        var str = '结束阶段';
                                    }
                                    if (_status.event.getParent('phaseJudge').name == 'phaseJudge') {
                                        game.log(result.targets[0], '获得了额外的' + str);
                                        result.targets[0].phaseJudge();
                                    }
                                    if (_status.event.getParent('phaseDraw').name == 'phaseDraw') {
                                        game.log(result.targets[0], '获得了额外的' + str);
                                        result.targets[0].phaseDraw();
                                    }
                                    if (_status.event.getParent('phaseUse').name == 'phaseUse') {
                                        game.log(result.targets[0], '获得了额外的' + str);
                                        result.targets[0].phaseUse();
                                    }
                                    if (_status.event.getParent('phaseDiscard').name == 'phaseDiscard') {
                                        game.log(result.targets[0], '获得了额外的' + str);
                                        result.targets[0].phaseDiscard();
                                    }
                                    if (_status.event.getParent('phaseJieshu').name == 'phaseJieshu') {
                                        game.log(result.targets[0], '获得了额外的' + str);
                                        result.targets[0].phaseJieshu();
                                    }
                                }
                                ('step 6');
                                if (event.num1 > 0) {
                                    if (_status.currentPhase != trigger.player) {
                                        trigger.player.skip(event.name);
                                        if (event.name == 'phaseJudge') {
                                            var str = '判定阶段';
                                        }
                                        if (event.name == 'phaseDraw') {
                                            var str = '摸牌阶段';
                                        }
                                        if (event.name == 'phaseUse') {
                                            var str = '出牌阶段';
                                        }
                                        if (event.name == 'phaseDiscard') {
                                            var str = '弃牌阶段';
                                        }
                                        if (event.name == 'phaseJieshu') {
                                            var str = '结束阶段';
                                        }
                                        game.log(trigger.player, '失去了下个' + str);
                                    } else {
                                        if (['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'].includes(event.name)) {
                                            var evt = _status.event.getParent(event.name);
                                            if (evt && evt.name) {
                                                evt.finish();
                                            }
                                        }
                                    }
                                }
                            },
                            group: ['zmtoudaozhe_a', 'zmtgaodengliliang', 'zmthundun', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                2: {},
                                a: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.storage.zmtoudaozhe;
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        event.players = get.players(player);
                                        event.num = 0;
                                        event.players = event.players.filter((i) => i.storage.zmtoudaozhe);
                                        ('step 1');
                                        if (event.players.length) {
                                            var current = event.players.shift();
                                            for (var i = 0; i < current.skills.length; i++) {
                                                // player.removeSkill(current.skills[i]);
                                                current.enableSkill('zmtoudaozhe', [player.skills[i]]);
                                            }
                                            event.redo();
                                        }
                                    },
                                },
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        zmmingyunmuma: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:4',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            _priority: 5,
                            filter(event, player) {
                                if (player.storage.zmt_np < 40) return false;
                                if (event.player == player) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.hasSkill('zmtoudaozhe_2') && lib.filter.targetEnabled2(event.card, event.player, current);
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(`是否令一名成为过【偷盗者】目标的其他角色代替你成为${get.translation(trigger.cards)}的目标？`, function (card, player, target) {
                                        return target != player && target.hasSkill('zmtoudaozhe_2');
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        if (get.effect(player, trigger.card, player, player) > 0 || !get.tag(trigger.card, 'damage')) return -1;
                                        return -get.effect(target, trigger.card, trigger.player, trigger.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.$fullscreenpop('命运木马', 'thunder');
                                    player.storage.zmt_np -= 40;
                                    var target = result.targets[0];
                                    var evt = trigger.parent;
                                    evt.targets.remove(player);
                                    evt.targets.push(result.targets[0]);
                                }
                            },
                        },
                        zmleitianriguang: {
                            init(player) {
                                player.storage.zmleitianriguang = 0;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:1',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zmleitianriguang > 0 && player.storage.zmleitianriguang_1 > 0) return false;
                                return (player.storage.zmt_np >= 30 && player.storage.zmleitianriguang == 0) || (player.storage.zmt_np >= 30 && player.storage.zmleitianriguang_1 == 0);
                            },
                            content() {
                                'step 0';
                                game.playzm3('zmleitianriguang1');
                                player.storage.zmt_np = 0;
                                if (player.storage.zmleitianriguang == 0) {
                                    var controls = ['1', '2', '3', '4', '5', '6'];
                                    var str = '拟定一个数字,当你死亡后其他角色于其回合内造成了等量伤害时,可令其也受到等量伤害.';
                                    player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
                                        return 1;
                                    };
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                var num;
                                switch (result.control) {
                                    case '1':
                                        num = 1;
                                        break;
                                    case '2':
                                        num = 2;
                                        break;
                                    case '3':
                                        num = 3;
                                        break;
                                    case '4':
                                        num = 4;
                                        break;
                                    case '5':
                                        num = 5;
                                        break;
                                    case '6':
                                        num = 6;
                                        break;
                                }
                                player.storage.zmleitianriguang = num;
                                event.finish();
                                ('step 2');
                                var controls = ['1', '2', '3', '4', '5', '6'];
                                var str = '拟定一个数字,当你死亡后其他角色于其回合内造成了等量伤害时,可令其也受到等量伤害.';
                                player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
                                    return Math.min(1, Math.floor(Math.random() * 4));
                                };
                                ('step 3');
                                var num;
                                switch (result.control) {
                                    case '1':
                                        num = 1;
                                        break;
                                    case '2':
                                        num = 2;
                                        break;
                                    case '3':
                                        num = 3;
                                        break;
                                    case '4':
                                        num = 4;
                                        break;
                                    case '5':
                                        num = 5;
                                        break;
                                    case '6':
                                        num = 6;
                                        break;
                                }
                                player.storage.zmleitianriguang_1 = num;
                                event.finish();
                            },
                            group: ['zmleitianriguang_1'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmleitianriguang_1 = 0;
                                    },
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forceDie: true,
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    prompt(event, player) {
                                        var num0 = event.player.getStat('damage');
                                        var str = '';
                                        str += `是否对${get.translation(event.player)}造成${num0}点伤害？`;
                                        return str;
                                    },
                                    filter(event, player) {
                                        var num0 = event.player.getStat('damage');
                                        if (num0 <= 0) return false;
                                        if (player.isAlive()) return false;
                                        if (player.storage.zmleitianriguang == 0 && player.storage.zmleitianriguang_1 == 0) return false;
                                        return (event.player != player && player.storage.zmleitianriguang == num0) || (event.player != player && player.storage.zmleitianriguang_1 == num0);
                                    },
                                    content() {
                                        'step 0';
                                        var num = trigger.player.getStat('damage');
                                        if (num > 1) {
                                            ui.backgroundMusic.src = ['extension/综漫季刊叁/audio/背景音乐高扬斯卡娅1.mp3', 'extension/综漫季刊叁/audio/背景音乐高扬斯卡娅2.mp3', 'extension/综漫季刊叁/audio/背景音乐高扬斯卡娅3.mp3', 'extension/综漫季刊叁/audio/背景音乐高扬斯卡娅4.mp3'].randomGet();
                                        }
                                        ('step 1');
                                        event.num1 = player.storage.zmleitianriguang;
                                        event.num2 = player.storage.zmleitianriguang_1;
                                        var num = trigger.player.getStat('damage');
                                        if (event.num1 == num) {
                                            player.storage.zmleitianriguang = 0;
                                        } else {
                                            player.storage.zmleitianriguang_1 = 0;
                                        }
                                        ('step 2');
                                        var num0 = trigger.player.getStat('damage');
                                        if (num0 > 1) {
                                            game.mp423('zmgaoyangsikaya');
                                        }
                                        trigger.player.damage(num0);
                                    },
                                },
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        zmnff: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:7',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.countCards('e');
                            },
                            check(event, player) {
                                //if(event.player.countCards('j')>=1) return false;
                                //  if(event.player.countCards('h')<=2) return false;
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                trigger.player.addTempSkill('zmnff_1');
                                trigger.player.addTempSkill('zmnff_2');
                                event.num = trigger.player.countCards('e');
                                ('step 1');
                                event.num--;
                                var equip = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    var card = { name: name };
                                    var subtype = get.subtype(card);
                                    var info = get.info(card);
                                    if (info && info.skills && subtype && subtype == 'equip1') {
                                        equip.push(card);
                                    }
                                }
                                var equip1 = equip.slice(0).randomGet();
                                trigger.player.$gain2(game.createCard(equip1.name, '', '', ''));
                                var skills = get.copy(get.info(equip1)).skills;
                                if (skills) {
                                    if (Array.isArray(skills)) {
                                        while (skills.length) {
                                            var skill = skills.shift();
                                            trigger.player.addTempSkill(skill);
                                        }
                                    } else {
                                        trigger.player.addTempSkill(skills);
                                    }
                                }
                                ('step 2');
                                if (event.num > 0) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.3,
                            },
                            group: ['zmtyeshou', 'zmbingshasouji', 'zmtgaodengliliang', 'zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊叁/audio:2',
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getStat('damage') >= 2 || player.hasSkill('zmnff_3');
                                    },
                                    content() {
                                        'step 0';
                                        var sh = game.findPlayer(function (current) {
                                            return current.hasSkill('zmnff');
                                        });
                                        player.line(sh, { color: [255, 102, 204] });
                                        sh.draw(2);
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('zmnff_3');
                                    },
                                    content() {
                                        player.addTempSkill('zmnff_3');
                                    },
                                },
                                3: {},
                            },
                        },
                        zmbingshasouji: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:5',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.getEquip(1);
                                });
                            },
                            filterTarget(card, player, target) {
                                return player != target && target.getEquip(1);
                            },
                            content() {
                                'step 0';
                                event.target1 = targets[0];
                                player.line(event.target1, 'fire');
                                var next = player.chooseButton();
                                next.set('createDialog', [`选择${get.translation(event.target1)}的一张武器牌移动`, event.target1.getCards('e', { subtype: 'equip1' })]);
                                next.set('ai', function (button) {
                                    return get.buttonValue(button);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.card1 = result.links[0];
                                    // player.gain(result.links[0],event.target1,'giveAuto');
                                } else event.finish();
                                ('step 2');
                                player
                                    .chooseTarget(get.prompt('zmbingshasouji'), `选择可装备${get.translation(event.card1)}的角色`, function (card, player, target) {
                                        return !target.getEquip(1);
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        return att;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    event.target2 = result.targets[0];
                                    player.line(event.target2, 'green');
                                    // var sub=get.subtype(result.links[0]);
                                    //  if(!event.target2.isEmpty(sub)) event.target2.draw(2);
                                    //  event.target2.gain(event.card1,event.target1,'giveAuto');
                                    event.target2.equip(event.card1);
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target: -1.5,
                                },
                                expose: 0.4,
                                threaten: 1.1,
                            },
                        },
                        zmsuminghuixiang: {
                            mod: {
                                cardUsable(card, player, num) {
                                    var cards = player.storage.zmsuminghuixiang;
                                    if (player.storage.zmsuminghuixiang) {
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i != get.color(card)) return Infinity;
                                            }
                                    }
                                },
                            },
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                var cards = player.storage.zmsuminghuixiang;
                                if (!event.cards || event.cards.length != 1) return false;
                                if (!player.storage.zmsuminghuixiang) return false;
                                if (get.color(event.cards[0]) != 'red') return false;
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        return i != undefined && i != get.color(event.cards[0]);
                                    }
                            },
                            content() {
                                player.draw();
                            },
                            group: ['zmsuminghuixiang_1', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊叁/audio:5',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    _priority: -1,
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        if (!player.storage.zmsuminghuixiang && get.color(event.cards[0]) != 'black') return false;
                                        if (!event.cards || event.cards.length != 1) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        event.num = 0;
                                        var cards = player.storage.zmsuminghuixiang;
                                        if (player.storage.zmsuminghuixiang) {
                                            if (Array.isArray(cards))
                                                for (var i of cards) {
                                                    if (i != undefined && i == get.color(trigger.cards[0])) event.num += 1;
                                                }
                                        }
                                        ('step 1');
                                        if (event.num >= 1) {
                                            player.storage.zmsuminghuixiang = [];
                                        } else {
                                            player.storage.zmsuminghuixiang = [];
                                            player.storage.zmsuminghuixiang.add(get.color(trigger.cards[0]));
                                        }
                                    },
                                },
                            },
                        },
                        zmhongyinxiangchemingyunzhijing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊叁/audio:3',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 30) return false;
                                return event.card && event.player.countCards('he') > 0 && event.player.isAlive();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 30;
                                event.num1 = player.countUsed(trigger.card);
                                ('step 1');
                                if (event.num1 >= 0) {
                                    event.num1--;
                                    var sourceShowCard = trigger.player.getCards('he').randomGet();
                                    trigger.player.showCards(sourceShowCard);
                                    if (get.color(sourceShowCard) != 'red') {
                                        trigger.player.discard(sourceShowCard);
                                        event.goto(1);
                                    } else {
                                        if (event.num1 >= 0) {
                                            game.playzm3('zmzherenmingyun');
                                            game.mp423('zmzherenmingyun');
                                            trigger.num++;
                                        }
                                        event.finish();
                                    }
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        zmjingu: {
                            mark: true,
                            markimage: 'extension/综漫季刊叁/标记禁锢.png',
                            intro: {
                                content: '无法使用/打出/基本牌',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (get.type(card, 'basic')) return false;
                                },
                                cardUsable(card, player) {
                                    if (get.type(card, 'basic')) return false;
                                },
                                cardRespondable(card, player) {
                                    if (get.type(card, 'basic')) return false;
                                },
                                cardzm3vable(card, player) {
                                    if (get.type(card, 'basic')) return false;
                                },
                            },
                        },
                        zmzhongji: {
                            mark: true,
                            markimage: 'extension/综漫季刊叁/标记重击.png',
                            intro: {
                                content(storage) {
                                    return '伤害增幅状态中';
                                },
                            },
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                player.removeSkill('zmzhongji');
                                trigger.num += 1;
                            },
                            popup: false,
                        },
                        zzhongji: {
                            mark: true,
                            markimage: 'extension/综漫季刊叁/标记重击.png',
                            intro: {
                                content(storage) {
                                    return '伤害增幅状态中';
                                },
                            },
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                player.removeSkill('zmzhongji');
                                trigger.num += 1;
                            },
                            popup: false,
                        },
                        zmtdongshang: {
                            mark: true,
                            markimage: 'extension/综漫季刊叁/标记冻伤.png',
                            intro: {
                                content(storage) {
                                    return '受到非火焰伤害时有概率使伤害量+1且手牌上限-1.';
                                },
                            },
                            audio: 'ext:综漫季刊叁/audio:1',
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature != 'fire' && Math.random() <= 0.4;
                            },
                            content() {
                                trigger.num++;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 1;
                                },
                            },
                        },
                        zxianfengyunti: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore', 'turnOverBegin', 'linkBefore'],
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                        },
                        zmmiluan: {
                            mark: true,
                            markimage: 'extension/综漫季刊叁/标记迷乱.png',
                            intro: {
                                content(storage) {
                                    return '此状态下使用的牌将指向错误目标';
                                },
                            },
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    event.targets &&
                                    event.targets.length == 1 &&
                                    game.hasPlayer(function (current) {
                                        return current != event.targets[0] && lib.filter.targetEnabled2(event.card, player, current);
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                'step 1';
                                var list = game.filterPlayer(function (current) {
                                    return current != trigger.targets[0] && lib.filter.targetEnabled2(trigger.card, player, current);
                                });
                                if (list.length) {
                                    var target = list.randomGet();
                                    trigger.targets[0] = target;
                                    player.line(target, 'green');
                                }
                                ('step 2');
                                var jm = game.findPlayer(function (current) {
                                    return current.name == 'zmshenjiamo';
                                });
                                if (jm.hp <= jm.maxHp) {
                                    var mubiao = jm;
                                    game.playzm3(['zmwanyuyingti1', 'zmwanyuyingti2'].randomGet());
                                }
                                var ssy = game.findPlayer(function (current) {
                                    return current.name == 'zmshenshashengyuanqihuang';
                                });
                                if (ssy.hp <= ssy.maxHp) {
                                    var mubiao = ssy;
                                    game.playzm3('zmmiluan1');
                                    player.storage.zmt_np -= 10;
                                    ssy.storage.zmt_np += 10;
                                }
                            },
                        },
                        zmchusha1: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return 2;
                                },
                            },
                        },
                        zmchusha0: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        zmt_np: {
                            init(player) {
                                player.storage.zmt_np = 0;
                            },
                            trigger: {
                                global: ['gameStart'],
                            },
                            firstDo: true,
                            silent: true,
                            forced: true,
                            fixed: true,
                            superCharlotte: true,
                            charlotte: true,
                            content() {
                                //能量定位
                                'step 0';
                                player.storage.zmt_np2 += 1;
                                game.broadcastAll(function (player) {
                                    _status.zmt_np = {};
                                    var np = ui.create.div('');
                                    np.style.width = 'calc(5%)';
                                    np.style.height = 'calc(42.5%)';
                                    np.style.left = 'calc(35%)';
                                    np.style.top = 'calc(-25%)';
                                    np.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))';
                                    np.style['box-shadow'] = 'rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
                                    np.style.borderRadius = '9px';
                                    np.style.transform = 'rotate(-90deg)';
                                    player.appendChild(np);
                                    _status.zmt_np.np = np;
                                    var np1 = ui.create.div('');
                                    np1.style.width = 'calc(100%)';
                                    setInterval(function () {
                                        var p = player.storage.zmt_np;
                                        if (p > 100) p = 100;
                                        np1.style.height = `calc(${p}%)`;
                                    }, 500);
                                    np1.style.left = '0px';
                                    np1.style.top = '0px';
                                    np1.style.borderRadius = '8px';
                                    setInterval(function () {
                                        if (player.storage.zmt_np < 70) {
                                            np1.setBackgroundImage('extension/综漫季刊叁/np.png');
                                        }
                                        if (player.storage.zmt_np > 70 && player.storage.zmt_np < 100) {
                                            np1.setBackgroundImage('extension/综漫季刊叁/np0.png');
                                        }
                                        if (player.storage.zmt_np >= 100 && player.storage.zmt_np < 140) {
                                            np1.setBackgroundImage('extension/综漫季刊叁/np00.png');
                                        }
                                        if (player.storage.zmt_np >= 140) {
                                            np1.setBackgroundImage('extension/综漫季刊叁/np000.png');
                                        }
                                    }, 500);
                                    np1.style.backgroundSize = '100% 80px';
                                    np.appendChild(np1);
                                    _status.zmt_np.np1 = np1;
                                    var np2 = ui.create.div('');
                                    np2.style.width = 'calc(100%)';
                                    np2.style.height = '8px';
                                    np2.style.left = '0px';
                                    np2.style.top = 'calc(50% - 4px)';
                                    np2.style['white-space'] = 'nowrap';
                                    np2.style['font-size'] = '10px';
                                    np2.style['text-align'] = 'center';
                                    np2.style['font-family'] = "'STXinwei','xinwei'";
                                    np2.style.transform = 'rotate(90deg)';
                                    np2.style.borderRadius = '8px';
                                    np.appendChild(np2);
                                    setInterval(function () {
                                        np2.innerHTML = player.storage.zmt_np;
                                    }, 100);
                                    _status.zmt_np.np2 = np2;
                                }, player);
                            },
                            popup: false,
                        },
                        zmt_np1: {
                            trigger: {
                                player: ['gainAfter', 'phaseDrawEnd'],
                            },
                            silent: true,
                            forced: true,
                            fixed: true,
                            superCharlotte: true,
                            charlotte: true,
                            filter(event, player, name) {
                                if (name == 'phaseDrawEnd') {
                                    return player.storage.zmt_np < 120;
                                } else {
                                    return _status.currentPhase != player && event.cards && event.cards.length;
                                }
                            },
                            content() {
                                if (event.triggername == 'phaseDrawEnd') {
                                    var num1 = trigger.num;
                                    player.storage.zmt_np += num1 * 5;
                                    if (get.mode() == 'guozhan') {
                                        var num1 = trigger.num;
                                        player.storage.zmt_np += num1 * 5;
                                    }
                                }
                                if (trigger.parent.parent.name != 'phaseDraw' && _status.currentPhase != player) {
                                    player.storage.zmt_np += 5;
                                    if (get.mode() == 'guozhan') {
                                        player.storage.zmt_np += 5;
                                    }
                                }
                            },
                            popup: false,
                        },
                        zmt_np2: {
                            init(player) {
                                player.storage.zmt_np2 = 0;
                            },
                            trigger: {
                                global: ['phaseBefore'],
                            },
                            firstDo: true,
                            silent: true,
                            forced: true,
                            fixed: true,
                            superCharlotte: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.zmt_np2 <= 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmt_np2 <= 0 && !player.hasSkill('subplayer')) {
                                    player.storage.zmt_np2 += 1;
                                    game.broadcastAll(function (player) {
                                        _status.zmt_np = {};
                                        var np = ui.create.div('');
                                        np.style.width = 'calc(5%)';
                                        np.style.height = 'calc(42.5%)';
                                        np.style.left = 'calc(35%)';
                                        np.style.top = 'calc(-25%)';
                                        np.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))';
                                        np.style['box-shadow'] = 'rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
                                        np.style.borderRadius = '9px';
                                        np.style.transform = 'rotate(-90deg)';
                                        player.appendChild(np);
                                        _status.zmt_np.np = np;
                                        var np1 = ui.create.div('');
                                        np1.style.width = 'calc(100%)';
                                        setInterval(function () {
                                            var p = player.storage.zmt_np;
                                            if (p > 100) p = 100;
                                            np1.style.height = `calc(${p}%)`;
                                        }, 500);
                                        np1.style.left = '0px';
                                        np1.style.top = '0px';
                                        np1.style.borderRadius = '8px';
                                        setInterval(function () {
                                            if (player.storage.zmt_np < 70) {
                                                np1.setBackgroundImage('extension/综漫季刊叁/np.png');
                                            }
                                            if (player.storage.zmt_np > 70 && player.storage.zmt_np < 100) {
                                                np1.setBackgroundImage('extension/综漫季刊叁/np0.png');
                                            }
                                            if (player.storage.zmt_np >= 100 && player.storage.zmt_np < 140) {
                                                np1.setBackgroundImage('extension/综漫季刊叁/np00.png');
                                            }
                                            if (player.storage.zmt_np >= 140) {
                                                np1.setBackgroundImage('extension/综漫季刊叁/np000.png');
                                            }
                                        }, 500);
                                        np1.style.backgroundSize = '100% 80px';
                                        np.appendChild(np1);
                                        _status.zmt_np.np1 = np1;
                                        var np2 = ui.create.div('');
                                        np2.style.width = 'calc(100%)';
                                        np2.style.height = '8px';
                                        np2.style.left = '0px';
                                        np2.style.top = 'calc(50% - 4px)';
                                        np2.style['white-space'] = 'nowrap';
                                        np2.style['font-size'] = '10px';
                                        np2.style['text-align'] = 'center';
                                        np2.style['font-family'] = "'STXinwei','xinwei'";
                                        np2.style.transform = 'rotate(90deg)';
                                        np2.style.borderRadius = '8px';
                                        np.appendChild(np2);
                                        setInterval(function () {
                                            np2.innerHTML = player.storage.zmt_np;
                                        }, 100);
                                        _status.zmt_np.np2 = np2;
                                    }, player);
                                }
                            },
                            popup: false,
                        },
                        zmtmoxing: {},
                        zmtsuzheng: {},
                        zmtjuda: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        zmtgaodengshengming: {},
                        zmtlongxue: {},
                        zmtsiling: {},
                        zmtyeshou: {},
                        zmtmoshou: {},
                        zmtzaowu: {},
                        zmtyuansu: {},
                        zmthundun: {},
                        zmtshikong: {},
                        zmtshangweizhe: {},
                        zmtlongzu: {},
                        zmtjixie: {},
                        zmtgaodengliliang: {},
                        zmtchaojuda: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance - 2;
                                },
                            },
                        },
                        zmtrenxing: {},
                        zmtyaren: {},
                        zmtleiren: {},
                        zmtshenzu: {},
                        zmtshenxing: {},
                        zmtshensheng: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return event.num >= event.player.hp;
                            },
                            content() {
                                if (trigger.player.hasSkill('zmtmoxing') || trigger.player.hasSkill('zmtsiling')) {
                                    trigger.num += 1;
                                }
                            },
                        },
                    },
                };
                lib.config.all.characters.add('综漫季刊叁');
                lib.config.characters.add('综漫季刊叁');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:综漫季刊叁/image/${i}.jpg`)
                }
                lib.translate['综漫季刊叁_character_config'] = `综漫季刊叁`;
                return QQQ;
            });
        },
        config: {
            zmthelp: {
                name: '名词释义',
                init: '1',
                item: {
                    1: '查看',
                    2: '✪关于职阶✪:是作为对众多世界观下英灵统合分类进行的规则标准.根据武将原作中的能力、经历、职业、功法等划分出不同职阶.',
                    3: '英灵根据特性被赋予适合的职阶.职阶间不存在克制.【Dominator】作为BOSS职阶强度较高.',
                    4: '✪关于宝具✪:每个英灵独有的特殊能力,可在武将信息栏查看.',
                    5: '宝具是作为英灵原有的、最独特的能力与成就的具现化,可以是武器、法术、异能、规则等等..各有不同的运行模式.',
                    6: '不同宝具与英灵之间不存在平衡.原作中过强的能力套入规则后会有限制,较弱的能力略有提升.',
                    7: '✪职阶一览✪',
                    8: '【Saber——剑士】 符合的英灵自然要有与剑士相称的实力与传说,亦被要求有较高的能力值与剑的理解.',
                    9: '【Archer——弓兵】 要求具有强力射击类型武器,或者与射击武器有关联的特殊能力与相应的成就事迹.',
                    10: '【Lancer——枪兵】 符合条件是枪戟类长兵器达人或是宝具能力上与有其相关概念的英雄.',
                    11: '【Fighter——格斗家】 要求是使用自身作为武器搏杀的英雄,符合的英灵自然皆是格斗高手.',
                    12: '【Rider——骑兵】 符合骑乘、御使某概念并以此成名的英雄.其对象包括并不限于宝物、坐骑、部队等等.',
                    13: '【Assassin——暗匿者】 原本是杀手刺客这样的暗匿者身份才能符合的职阶,要求具备强大刺客应有的能力与事迹.',
                    14: '【Caster——施法者】 合适条件也只有法术能力达至最高等级的大法师们.相应的符合的英灵往往近战防御能力都较低.',
                    15: '【Smability——异能者】 并非通过后天修行得来,凭借先天或外物刺激觉醒特殊能力并以此成名的强大英灵方可被授予此职阶.',
                    16: '【Mechanic——机械师】 原本是科学家或高位机械侧造物可符合该职阶,亦被要求其能力核心是机械侧并拥有相当的机械造诣.',
                    17: '【Berserker——狂战士】 有[发疯或丧失理性的故事/精神构成类似动物或机械/足以扭曲人格程度的强烈的执着]这样的强大英雄可获得该职阶.',
                    18: '【Guardian——守卫者】 限定具备自我牺牲精神并拥有相应光辉事迹的英雄才可被赋予此职阶.',
                    19: '【Taoist——道门】 身份限定为与道教有关的英灵才能获得此职阶,要求拥有高位的道家地位/法术/修为/造诣.',
                    20: '【Buddhist——禅宗】 身份限定为与佛教或印度教有关的英灵才能获得此职阶,要求拥有高位的佛门地位/法术/修为/造诣.',
                    21: '【Undead——不眠者】 生前就接触死亡并取得了非人身份与不死性的英雄或是以死者身份活动并成为英雄的特殊英灵可获得该职阶.',
                    22: '【Foreigner——降临者】 领域外来客或与混沌建立联系,将权能的先兆寄宿在身上并加以利用成名的英灵所被赋予的职阶.',
                    23: '【Comedian——谐星】 限定自搞笑世界观作品被召唤的英灵,该职阶自动覆盖英灵本身能力所被赋予的职阶.',
                    24: '【Dominator——上位者】 要求最苛刻的职阶,需要英灵本身是原世界观中的上位者且具备规则级的权能.',
                    25: '【Assistant——搭档】 已存在英灵所制造/转化/召唤而来的专属衍生角色,及一些被选中的高适性角色会被赋予此职阶.',
                    26: '✪关于玉碟✪:每场战斗胜利后玩家可获得不等数量的玉碟,保底掉落1玉碟.',
                    27: '✪玉碟召唤✪:每3玉碟可进行1次玉碟召唤,或使用30玉碟进行10次召唤.根据召唤结果可获得各职阶中的隐藏英灵或解锁可升级的搭档角色.',
                    28: '✪关于卡池✪:评级越高的角色被抽到的概率越低;抽卡时可能抽到已有的角色.',
                    29: '✪隐藏英灵✪:通过玉碟召唤/兑换获得后才会出现在游戏中的特殊武将.',
                    30: '✪关于搭档✪:搭档角色只能通过玉碟召唤解锁,按强度分为1到5星,每1星代表搭档拥有1个技能或一种效果.',
                    31: '✪搭档特性✪:玩家开始游戏时可选择一名已解锁的搭档角色加入游戏;搭档不直接进行游戏,也无法被攻击.玩家可以点击桌面上的搭档图标可发动技能;搭档技冷却时间统一为三分钟.',
                    32: '✪搭档等级✪:搭档每使用一次技能都会获得100经验,随等级提升可解锁新的能力.',
                    33: '✪关于能量✪:每当角色进行摸牌阶段可根据摸牌数每张牌获得5点能量,且角色在自己的回合外不因摸牌阶段获得牌时获得5点能量..',
                    34: '国战模式下能量获取翻倍.',
                    35: '某些角色可通过特有技能额外获得能量或赋予夺取能量.',
                    36: '能量的获取上限为120点,超过该数字则无法从摸牌阶段获取能量.',
                    37: '储存的能量是释放某些强力技能的必要条件.',
                },
            },
            zmthelp2: {
                name: '属性设定',
                init: '1',
                item: {
                    1: '查看',
                    2: '✪关于属性✪:英灵们根据特性具备不同的属性,这些属性有些与技能效果相关,有些则自带一些效果.',
                    3: '✪属性一览✪',
                    4: '【人形】 身体结构形态与要害接近灵掌人科,许多以此为假想敌锻炼的技术会限定对人形属性特攻.',
                    5: '【类人】 大体与人形有关,但拥有相当部分不属于人形的身体结构,因而不可与人形相并列.',
                    6: '【野兽】 用于与人形大相径庭的身体结构,涵盖众多生命形式.',
                    7: '【造物】 一般指被制造的非生命体,如物品道具等持有的属性..',
                    8: '【机械】 造物中分离出的一类,特指具备相当机械结构者持有的属性..',
                    9: '【死灵】 灵体,已死之物或与之类似的特性会被认定为此属性.',
                    10: '【龙血】 拥有龙类血脉的混血种或浅龙类概念者持有的属性.',
                    11: '【龙族】 纯血或高度纯血的龙族与概念上的龙族持有的属性.',
                    12: '【元素】 元素生命,或与自然力量深度相关者持有的属性..',
                    13: '【神性】 与神道/愿力相关,或神性者后代所持有的属性.通常与魔性不可共存.',
                    14: '【神圣】 与纯粹正愿力相关者所持有的属性.与魔性不可共存.',
                    15: '【魔性】 与魔道/负愿力相关,或魔性者后代所持有的属性.通常与神性不可共存.',
                    16: '【时空】 时间或空间深度相关者持有的属性.',
                    17: '【混沌】 高等力量之一,与世界底层要素:混沌相关联的属性.拥有最高优先级,无序扭曲的代名词,与肃正不可共存.',
                    18: '【肃正】 高等力量之一,与世界底层要素:秩序相关联的属性.为泛世界集体意志或规则相关的抑制力代名词,与混沌不可共存.',
                    19: '【巨大】 体型与智人种相比质量百倍以内的标志.',
                    20: '【超巨大】 体型与智人种相比质量百倍以上的标志.',
                    21: '【高等力量】 特殊类型的高位能力,具备较高优先级的属性;通常表现为概念/因果/权能等.',
                    22: '【高等生命】 存在本身即与世界底层相关的特殊生命,生命层次上的最高阶层.',
                },
            },
        },
        package: {
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>综漫季刊系列为完整包【综漫坛】的小部分武将分离而成,使单包体积不至于过大.分包仅包含卡面查看功能,请无视简介中的其它内容",
            author: '尧',
            version: '1.0',
        },
    };
});
