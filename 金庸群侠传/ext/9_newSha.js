'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
    lib.arenaReady.push(function () {
        var aiCard = {
            loseCard_ai: {
                button(button) {
                    const player = _status.event.player,
                        target = _status.event.target;
                    let att = get.attitude(player, target),
                        val = get.buttonValue(button),
                        pos = get.position(button.link),
                        name = button.link.name;
                    if (pos === 'j') {
                        name = button.link.viewAs || button.link.name; //区域牌名更改
                        if (name === 'lebu') {
                            let needs = target.needsToDiscard(2);
                            val *= 1.08 + 0.2 * needs;
                        } else if (name == 'shandian' || name == 'fulei' || name == 'plague') val /= 2;
                    }
                    if (att > 0) val = -val;
                    if (pos !== 'e') return val;
                    let sub = get.subtypes(button.link);
                    if (sub.includes('equip1')) return (val * Math.min(3.6, target.hp)) / 3;
                    if (sub.includes('equip2')) {
                        if (name === 'baiyin' && pos === 'e' && target.isDamaged()) {
                            let by = 3 - 0.6 * Math.min(5, target.hp);
                            return get.sgn(get.recoverEffect(target, player, player)) * by;
                        }
                        return 1.57 * val;
                    }
                    if (att <= 0 && (sub.includes('equip3') || sub.includes('equip4')) && (player.hasSkill('shouli') || player.hasSkill('psshouli'))) return 0;
                    if (sub.includes('equip6')) return val;
                    if (sub.includes('equip4')) return val / 2;
                    if (
                        sub.includes('equip3') &&
                        !game.hasPlayer((cur) => {
                            return !cur.inRange(target) && get.attitude(cur, target) < 0;
                        })
                    )
                        return 0.4 * val;
                    return val;
                },
                iCard(card, player, target) {
                    let att = get.attitude(player, target),
                        val = get.buttonValue({ link: card }),
                        pos = get.position(card),
                        name = card.name;
                    if (pos === 'j') {
                        name = card.viewAs || card.name; //区域牌名更改
                        if (name === 'lebu') {
                            let needs = target.needsToDiscard(2);
                            val *= 1.08 + 0.2 * needs;
                        } else if (name == 'shandian' || name == 'fulei' || name == 'plague') val /= 2;
                    }
                    if (att > 0) val = -val;
                    if (pos !== 'e') return val;
                    let sub = get.subtypes(card);
                    if (sub.includes('equip1')) return (val * Math.min(3.6, target.hp)) / 3;
                    if (sub.includes('equip2')) {
                        if (name === 'baiyin' && pos === 'e' && target.isDamaged()) {
                            let by = 3 - 0.6 * Math.min(5, target.hp);
                            return get.sgn(get.recoverEffect(target, player, player)) * by;
                        }
                        return 1.57 * val;
                    }
                    if (att <= 0 && (sub.includes('equip3') || sub.includes('equip4')) && (player.hasSkill('shouli') || player.hasSkill('psshouli'))) return 0;
                    if (sub.includes('equip6')) return val;
                    if (sub.includes('equip4')) return val / 2;
                    if (
                        sub.includes('equip3') &&
                        !game.hasPlayer((cur) => {
                            return !cur.inRange(target) && get.attitude(cur, target) < 0;
                        })
                    )
                        return 0.4 * val;
                    return val;
                },
                ai: {
                    basic: {
                        order: 9,
                        useful: 5,
                        value: 5,
                    },
                    result: {
                        target(player, target, skill, isLink) {
                            const select = get.select(skill.select || [1, 1]);
                            if (select[0] == select[1] && select[0] == 1) return lib.card.loseCard_ai.ai.result.targetx(player, target, skill, isLink);
                            return lib.card.loseCard_ai.ai.result.targetResult(player, target, skill, isLink);
                        },
                        targetx(player, target, skill) {
                            const position = skill.position || 'hej';
                            const filterCard = skill.filterCard || lib.filter.all;
                            //game.log("ai:loseCard:pos:"+position);
                            const att = get.attitude(player, target);
                            const hs = position.includes('h') ? target.getCards('h', filterCard) : [];
                            const es = position.includes('e') ? target.getCards('e', filterCard) : [];
                            const js = position.includes('j') ? target.getCards('j', filterCard) : [];
                            if (!hs.length && !es.length && !js.length) return 0;
                            if (att > 0) {
                                if (
                                    js.some((card) => {
                                        const cardj = card.viewAs ? { name: card.viewAs } : card;
                                        return get.effect(target, cardj, target, player) < 0;
                                    })
                                )
                                    return 3;
                                if (target.isDamaged() && es.some((card) => card.name == 'baiyin') && get.recoverEffect(target, player, player) > 0) {
                                    if (target.hp == 1 && !target.hujia) return 1.6;
                                }
                                if (
                                    es.some((card) => {
                                        return get.value(card, target) < 0;
                                    })
                                )
                                    return 1;
                                return -1.5;
                            } else {
                                const noh = hs.length == 0 || target.hasSkillTag('noh');
                                const noe = es.length == 0 || target.hasSkillTag('noe');
                                const noe2 =
                                    noe ||
                                    !es.some((card) => {
                                        return get.value(card, target) > 0;
                                    });
                                const noj =
                                    js.length == 0 ||
                                    !js.some((card) => {
                                        const cardj = card.viewAs ? { name: card.viewAs } : card;
                                        return get.effect(target, cardj, target, player) < 0;
                                    });
                                if (noh && noe2 && noj) return 1.5;
                                return -1.5;
                            }
                        },
                        targetResult(player, target, skill) {
                            const position = skill.position || 'hej';
                            const filterCard = skill.filterCard || lib.filter.all;
                            const select = get.select(skill.select || [1, 1]);
                            const results = [];
                            let resultNum = 0;
                            //game.log("ai:loseCard:pos:"+position);
                            const att = get.attitude(player, target);
                            const hej = target.getCards(position, filterCard);
                            hej.filter(function (card) {
                                results.push(lib.card.loseCard_ai.iCard(card, player, target));
                            });
                            results.sort(function (a, b) {
                                return b - a;
                            });
                            for (var i = 0; i < results.length; i++) {
                                if (i == select[1] || (select[0] <= i && results[i] <= 0)) break;
                                resultNum += results[i];
                            }
                            //game.log("ai:loseCard:resultNum:"+resultNum);
                            return att > 0 ? resultNum : -resultNum;
                        },
                    },
                    tag: {
                        loseCard: 1,
                        //discard:1
                    },
                },
            },
            tiesuo_ai: {
                ai: {
                    result: {
                        target(player, target) {
                            return lib.card.tiesuo.ai.result.target(player, target);
                        },
                    },
                },
            },
            shunshou_ai2: {
                ai: {
                    result: {
                        player(player, target) {
                            return lib.card.shunshou.ai.result.player(player, target);
                        },
                        target(player, target) {
                            return lib.card.shunshou.ai.result.target(player, target);
                        },
                    },
                    tag: {
                        loseCard: 1,
                        gain: 1,
                    },
                },
            },
            shunshou_ai: {
                iCard(card, player, target) {
                    let att = get.attitude(player, target),
                        val = get.value(card, player) / 60,
                        btv = get.buttonValue({ link: card }),
                        pos = get.position(card),
                        name = card.name;
                    if (pos == 'j') {
                        name = card.viewAs || card.name; //区域牌名更改
                        if (name == 'lebu') {
                            let needs = target.needsToDiscard(2);
                            btv *= 1.08 + 0.2 * needs;
                        } else if (name == 'shandian' || name == 'fulei' || name == 'plague') btv /= 2;
                    }
                    if (att > 0) btv = -btv;
                    if (pos != 'e') {
                        if (pos == 'h' && !player.hasSkillTag('viewHandcard', null, target, true)) return btv + 0.1;
                        return btv + val;
                    }
                    let sub = get.subtype(card);
                    if (sub == 'equip1') return (btv * Math.min(3.6, target.hp)) / 3;
                    if (sub == 'equip2') {
                        if (name == 'baiyin' && pos == 'e' && target.isDamaged()) {
                            let by = 3 - 0.6 * Math.min(5, target.hp);
                            return get.sgn(get.recoverEffect(target, player, player)) * by;
                        }
                        return 1.57 * btv + val;
                    }
                    if (att <= 0 && (sub == 'equip3' || sub == 'equip4') && (player.hasSkill('shouli') || player.hasSkill('psshouli'))) return 0;
                    if (sub == 'equip3' && !game.hasPlayer((cur) => !cur.inRange(target) && get.attitude(cur, target) < 0)) return 0.4 * btv + val;
                    if (sub == 'equip4') return btv / 2 + val;
                    return btv + val;
                },
                ai: {
                    basic: {
                        order: 7.5,
                        useful: 4,
                        value: 9,
                    },
                    result: {
                        target(player, target, skill, isLink) {
                            const select = get.select(skill.select || [1, 1]);
                            if (select[0] == select[1] && select[0] == 1) return lib.card.shunshou_ai.ai.result.targetx(player, target, skill, isLink);
                            return lib.card.shunshou_ai.ai.result.targetResult(player, target, skill, isLink);
                        },
                        player(player, target, skill, isLink) {
                            const select = get.select(skill.select || [1, 1]);
                            if (select[0] == select[1] && select[0] == 1) return lib.card.shunshou_ai.ai.result.playerx(player, target, skill, isLink);
                            return 0;
                        },
                        targetx(player, target, skill) {
                            const position = skill.position || 'hej';
                            const filterCard = skill.filterCard || lib.filter.all;
                            //game.log("ai:shunshou:pos:"+position);
                            const hs = position.includes('h') ? target.getGainableCards(player, 'h', filterCard) : [];
                            const es = position.includes('e') ? target.getGainableCards(player, 'e', filterCard) : [];
                            const js = position.includes('j') ? target.getGainableCards(player, 'j', filterCard) : [];
                            if (get.attitude(player, target) <= 0) {
                                if (hs.length > 0) return -1.5;
                                return es.some((card) => {
                                    return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                }) ||
                                    js.some((card) => {
                                        var cardj = card.viewAs ? { name: card.viewAs } : card;
                                        return get.effect(target, cardj, target, player) < 0;
                                    })
                                    ? -1.5
                                    : 1.5;
                            }
                            return es.some((card) => {
                                return get.value(card, target) <= 0;
                            }) ||
                                js.some((card) => {
                                    var cardj = card.viewAs ? { name: card.viewAs } : card;
                                    return get.effect(target, cardj, target, player) < 0;
                                })
                                ? 1.5
                                : -1.5;
                        },
                        targetResult(player, target, skill) {
                            const position = skill.position || 'hej';
                            const filterCard = skill.filterCard || lib.filter.all;
                            const select = get.select(skill.select || [1, 1]);
                            const results = [];
                            let resultNum = 0;
                            //game.log("ai:shunshou:pos:"+position);
                            const att = get.attitude(player, target);
                            const hej = target.getGainableCards(player, position, filterCard);
                            hej.filter(function (card) {
                                results.push(lib.card.shunshou_ai.iCard(card, player, target));
                            });
                            results.sort(function (a, b) {
                                return b - a;
                            });
                            for (var i = 0; i < results.length; i++) {
                                if (i == select[1] || (select[0] <= i && results[i] <= 0)) break;
                                resultNum += results[i];
                            }
                            //game.log("ai:shunshou:resultNum:"+resultNum);
                            return att > 0 ? resultNum : -resultNum;
                        },
                        playerx(player, target, skill) {
                            const position = skill.position || 'hej';
                            const filterCard = skill.filterCard || lib.filter.all;
                            //game.log("ai:shunshou:pos:"+position);
                            const hs = position.includes('h') ? target.getGainableCards(player, 'h', filterCard) : [];
                            const es = position.includes('e') ? target.getGainableCards(player, 'e', filterCard) : [];
                            const js = position.includes('j') ? target.getGainableCards(player, 'j', filterCard) : [];
                            const att = get.attitude(player, target);
                            if (att < 0) {
                                if (
                                    !hs.length &&
                                    !es.some((card) => {
                                        return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                    }) &&
                                    !js.some((card) => {
                                        var cardj = card.viewAs ? { name: card.viewAs } : card;
                                        return get.effect(target, cardj, target, player) < 0;
                                    })
                                )
                                    return 0;
                            } else if (att > 1) {
                                return es.some((card) => {
                                    return get.value(card, target) <= 0;
                                }) ||
                                    js.some((card) => {
                                        var cardj = card.viewAs ? { name: card.viewAs } : card;
                                        return get.effect(target, cardj, target, player) < 0;
                                    })
                                    ? 1.5
                                    : 0;
                            }
                            return 1;
                        },
                    },
                    tag: {
                        loseCard: 1,
                        gain: 1,
                    },
                },
            },
            guohe_ai2: {
                ai: {
                    result: {
                        target(player, target) {
                            return lib.card.guohe.ai.result.target(player, target);
                        },
                    },
                    tag: {
                        loseCard: 1,
                        discard: 1,
                    },
                },
            },
            guohe_ai: {
                iCard(card, player, target) {
                    let att = get.attitude(player, target),
                        val = get.buttonValue({ link: card }),
                        pos = get.position(card),
                        name = card.name;
                    if (pos === 'j') {
                        name = card.viewAs || card.name; //区域牌名更改
                        if (name === 'lebu') {
                            let needs = target.needsToDiscard(2);
                            val *= 1.08 + 0.2 * needs;
                        } else if (name == 'shandian' || name == 'fulei' || name == 'plague') val /= 2;
                    }
                    if (att > 0) val = -val;
                    if (pos !== 'e') return val;
                    let sub = get.subtypes(card);
                    if (sub.includes('equip1')) return (val * Math.min(3.6, target.hp)) / 3;
                    if (sub.includes('equip2')) {
                        if (name === 'baiyin' && pos === 'e' && target.isDamaged()) {
                            let by = 3 - 0.6 * Math.min(5, target.hp);
                            return get.sgn(get.recoverEffect(target, player, player)) * by;
                        }
                        return 1.57 * val;
                    }
                    if (att <= 0 && (sub.includes('equip3') || sub.includes('equip4')) && (player.hasSkill('shouli') || player.hasSkill('psshouli'))) return 0;
                    if (sub.includes('equip6')) return val;
                    if (sub.includes('equip4')) return val / 2;
                    if (
                        sub.includes('equip3') &&
                        !game.hasPlayer((cur) => {
                            return !cur.inRange(target) && get.attitude(cur, target) < 0;
                        })
                    )
                        return 0.4 * val;
                    return val;
                },
                ai: {
                    basic: {
                        order: 9,
                        useful: 5,
                        value: 5,
                    },
                    result: {
                        target(player, target, skill, isLink) {
                            const select = get.select(skill.select || [1, 1]);
                            if (select[0] == select[1] && select[0] == 1) return lib.card.guohe_ai.ai.result.targetx(player, target, skill, isLink);
                            return lib.card.guohe_ai.ai.result.targetResult(player, target, skill, isLink);
                        },
                        targetx(player, target, skill) {
                            const position = skill.position || 'hej';
                            const filterCard = skill.filterCard || lib.filter.all;
                            //game.log("ai:guohe:pos:"+position);
                            const att = get.attitude(player, target);
                            const hs = position.includes('h') ? target.getDiscardableCards(player, 'h', filterCard) : [];
                            const es = position.includes('e') ? target.getDiscardableCards(player, 'e', filterCard) : [];
                            const js = position.includes('j') ? target.getDiscardableCards(player, 'j', filterCard) : [];
                            if (!hs.length && !es.length && !js.length) return 0;
                            if (att > 0) {
                                if (
                                    js.some((card) => {
                                        const cardj = card.viewAs ? { name: card.viewAs } : card;
                                        return get.effect(target, cardj, target, player) < 0;
                                    })
                                )
                                    return 3;
                                if (target.isDamaged() && es.some((card) => card.name == 'baiyin') && get.recoverEffect(target, player, player) > 0) {
                                    if (target.hp == 1 && !target.hujia) return 1.6;
                                }
                                if (
                                    es.some((card) => {
                                        return get.value(card, target) < 0;
                                    })
                                )
                                    return 1;
                                return -1.5;
                            } else {
                                const noh = hs.length == 0 || target.hasSkillTag('noh');
                                const noe = es.length == 0 || target.hasSkillTag('noe');
                                const noe2 =
                                    noe ||
                                    !es.some((card) => {
                                        return get.value(card, target) > 0;
                                    });
                                const noj =
                                    js.length == 0 ||
                                    !js.some((card) => {
                                        const cardj = card.viewAs ? { name: card.viewAs } : card;
                                        return get.effect(target, cardj, target, player) < 0;
                                    });
                                if (noh && noe2 && noj) return 1.5;
                                return -1.5;
                            }
                        },
                        targetResult(player, target, skill) {
                            const position = skill.position || 'hej';
                            const filterCard = skill.filterCard || lib.filter.all;
                            const select = get.select(skill.select || [1, 1]);
                            const results = [];
                            let resultNum = 0;
                            //game.log("ai:guohe:pos:"+position);
                            const att = get.attitude(player, target);
                            const hej = target.getDiscardableCards(player, position, filterCard);
                            hej.filter(function (card) {
                                results.push(lib.card.guohe_ai.iCard(card, player, target));
                            });
                            results.sort(function (a, b) {
                                return b - a;
                            });
                            for (var i = 0; i < results.length; i++) {
                                if (i == select[1] || (select[0] <= i && results[i] <= 0)) break;
                                resultNum += results[i];
                            }
                            //game.log("ai:guohe:resultNum:"+resultNum);
                            return att > 0 ? resultNum : -resultNum;
                        },
                    },
                    tag: {
                        loseCard: 1,
                        discard: 1,
                    },
                },
            },
        };
        for (var i in aiCard) {
            lib.card[i] = aiCard[i];
        }
    });
    lib.jy_get_translation = get.translation;
    get.translation = function (str, arg) {
        if (str && typeof str == 'object' && str.name) {
            if (arg == 'viewAs' && str.viewAs) {
                return lib.jy_get_translation.apply(this, arguments);
            } else if ((str.name == 'shan' || str.name == 'jiu') && str.nature) {
                if (str.name == 'jiu' && lib.card.jiu.jy_nature.includes(str.nature)) {
                    str.name = str.nature + '_jiu2';
                    var result = lib.jy_get_translation.apply(this, arguments);
                    str.name = 'jiu';
                    return result;
                } else if (str.name == 'shan' && lib.card.shan.jy_nature.includes(str.nature)) {
                    str.name = str.nature + '_shan2';
                    var result = lib.jy_get_translation.apply(this, arguments);
                    str.name = 'shan';
                    return result;
                } else if (lib.jy_nature_jiu.includes(str.name) || lib.jy_nature_shan.includes(str.name)) {
                    var oldname = str.name;
                    str.name = str.name + '2';
                    var result = lib.jy_get_translation.apply(this, arguments);
                    str.name = oldname;
                    return result;
                }
            } else {
                return lib.jy_get_translation.apply(this, arguments);
            }
        }
        return lib.jy_get_translation.apply(this, arguments);
    };
    var addNatureSha = function (nature, translation, config) {
        game.addNature(nature, translation, config); //本体添加属性杀的方法+
        lib.arenaReady.push(function () {
            lib.card[nature + 'damage'] = {
                ai: {
                    result: {
                        target: -1.5,
                    },
                    tag: {
                        damage: 1,
                        natureDamage: 1,
                    },
                },
            };
            lib.card[nature + 'damage'].ai.tag[nature + 'Damage'] = 1;
            lib.translate[nature] = translation;
            if (!lib.cardPack.mode_derivation) {
                lib.cardPack.mode_derivation = [];
            }
            lib.cardPack.mode_derivation.add(nature + 'sha');
            lib.translate[nature + 'sha'] = translation + '杀';
            //lib.translate[nature+'sha']=lib.translate.sha_info;
            lib.card[nature + 'sha'] = {
                type: 'basic',
                naturex: nature,
                image: 'ext:金庸群侠传/image/equip/' + nature + 'sha.png',
                derivation: 'diy_card_jy_card_config',
                derivationpack: 'diy_card_jy',
                fullskin: true,
                //cardimage:'sha',
            };
        });
    };
    var list = [
        [
            ///////////////////////////////////////
            'jy_du', //添加的属性id
            '毒', //添加的属性翻译
            {
                audio: {
                    sha: {
                        jy_du: {
                            male: '../extension/金庸群侠传/peiyin/dusha_male.mp3', //男声音
                            female: '../extension/金庸群侠传/peiyin/dusha_female.mp3',
                        },
                    },
                    damage: {
                        jy_du: {
                            1: '../extension/金庸群侠传/peiyin/jy_du_damage.mp3', //1点伤害
                            2: '../extension/金庸群侠传/peiyin/jy_du_damage.mp3', //2点及以上伤害
                        },
                    },
                },
                linked: true, //是否触发铁索
                order: 40, //数值代表各元素在名称中排列的先后顺序
                background: 'ext:金庸群侠传/image/equip/jy_dusha.png', //这张属性杀的图片
                lineColor: [123, 255, 0], //使用属性杀指定目标的指示线颜色
                color: [123, 255, 0], //使用属性杀指定目标的指示线卡牌字体颜色
            },
        ],
        /////////////////////////////
        [
            'jy_xie', //添加的属性id
            '邪', //添加的属性翻译
            {
                audio: {
                    sha: {
                        jy_xie: {
                            male: '../extension/金庸群侠传/peiyin/jy_xiesha_male.mp3', //男声音
                            female: '../extension/金庸群侠传/peiyin/jy_xiesha_female.mp3',
                        },
                    },
                    damage: {
                        jy_xie: {
                            1: '../extension/金庸群侠传/peiyin/jy_xie_damage.mp3', //1点伤害
                            2: '../extension/金庸群侠传/peiyin/jy_xie_damage.mp3', //2点及以上伤害
                        },
                    },
                },
                linked: true, //是否触发铁索
                order: 30, //数值代表各元素在名称中排列的先后顺序
                background: 'ext:金庸群侠传/image/equip/jy_xiesha.png', //这张属性杀的图片
                lineColor: [197, 52, 154], //使用属性杀指定目标的指示线颜色
                color: [197, 52, 154], //使用属性杀指定目标的指示线卡牌字体颜色
            },
        ],
    ];
    list.filter((i) => addNatureSha(...i));
    //冰属性配音修改
    lib.natureAudio.damage.ice = {
        1: '../extension/金庸群侠传/peiyin/effect_bingdamage.mp3', //1点伤害
        2: '../extension/金庸群侠传/peiyin/effect_bingdamage.mp3', //2点及以上伤害
    };
    lib.arenaReady.push(function () {
        lib.card.sha.ai.tag.jy_xieDamage = function (card, naturex) {
            if (game.hasNature(card, 'jy_xie')) return 1;
        };
        lib.card.sha.ai.tag.jy_duDamage = function (card, naturex) {
            if (game.hasNature(card, 'jy_du')) return 1;
        };
    });
    lib.arenaReady.push(function () {
        ///////////////////////////杀//////////////////////////////
        //邪杀技能
        lib.skill._JY_xiesha = {
            mod: {
                aiValue(player, card, num) {
                    if (card.name == 'sha' && game.hasNature(card, 'jy_xie')) return num + 3;
                    return num;
                },
                aiUseful(player, card, num) {
                    if (card.name == 'sha' && game.hasNature(card, 'jy_xie')) return num + 3;
                    return num;
                },
            },
            priority: 5,
            forced: true,
            popup: false,
            shaRelated: true,
            trigger: { source: 'damageEnd' },
            filter(event, player) {
                if (event._notrigger.includes(event.player)) return false;
                if (event.player == player) return false;
                if (event.card && event.card.name == 'sha' && game.hasNature(event.card, 'jy_xie'))
                    return event.player.countGainableCards(player, 'e', function (equip) {
                        return get.subtype(equip) == 'equip5';
                    });
                return false;
            },
            //logTarget:"player",
            content() {
                player
                    .gainPlayerCard('邪杀：是否获得' + get.translation(trigger.player) + '装备区的宝物牌？', trigger.player, 'visibleMove', 'e')
                    .set('filterButton', function (button) {
                        return get.subtype(button.link) == 'equip5';
                    })
            },
        };
        //毒杀的技能-----美妙的世界添加
        lib.skill._JY_dusha = {
            mod: {
                aiValue(player, card, num) {
                    if (card.name == 'sha' && game.hasNature(card, 'jy_du')) return num + 3;
                    return num;
                },
                aiUseful(player, card, num) {
                    if (card.name == 'sha' && game.hasNature(card, 'jy_du')) return num + 3;
                    return num;
                },
            },
            inherit: 'qinggang_skill',
            filter(event, player) {
                return event.card && event.card.name == 'sha' && game.hasNature(event.card, 'jy_du');
            },
            popup: false,
            forced: true,
            ai: {
                unequip: true,
                unequip: true,
                skillTagFilter(player, tag, arg) {
                    if (arg && arg.name == 'sha' && !arg.isdu && arg.card && game.hasNature(arg.card, 'jy_du')) return true;
                    return false;
                },
            },
        };
        lib.translate.sha_nature_jy_du_info = '出牌阶段，对你攻击范围内的一名角色使用。其须使用一张【闪】，否则你对其造成1点毒属性伤害。(此杀无视(除金丝甲外)防具!)';
        lib.translate.sha_nature_jy_xie_info = '出牌阶段，对你攻击范围内的一名角色使用。其须使用一张【闪】，否则你对其造成1点邪属性伤害。(若造成伤害你可以获得获得目标一张装备区的宝物牌)';
        lib.translate.jy_dusha = lib.translate.sha_nature_jy_du_info;
        lib.translate.jy_xiesha = lib.translate.sha_nature_jy_xie_info;
        lib.translate._JY_dusha = '毒杀';
        lib.translate._JY_xiesha = '邪杀';
        ///////////////////////////杀//////////////////////////////
        if (!lib.element.card.inits) lib.element.card.inits = [];
        lib.jy_card_init = lib.element.card.init;
        lib.element.card.init = function (card) {
            if (Array.isArray(card)) {
                if (card[2] == 'sha' && (card[3] == 'jy_du' || card[3] == 'jy_xie')) {
                    if (card[3] == 'jy_du') {
                        card[2] = 'jy_dusha';
                    } else {
                        card[2] = 'jy_xiesha';
                    }
                    var cardx = lib.jy_card_init.call(this, card);
                    card[2] = 'sha';
                    cardx.nature = card[3];
                    cardx.name = 'sha';
                    cardx.classList.add(card[3]);
                    cardx.node.image.classList.add(card[3]);
                    return cardx;
                }
                if (card[2] == 'shan' && card[3] && lib.card.shan.jy_nature.includes(card[3])) {
                    card[2] = card[3] + '_shan';
                    var cardx = lib.jy_card_init.call(this, card);
                    card[2] = 'shan';
                    cardx.name = 'shan';
                    cardx.nature = card[3];
                    cardx.classList.add(card[3]);
                    cardx.node.image.classList.add(card[3]);
                    return cardx;
                } else if (card[2] == 'jiu' && card[3] && lib.card.jiu.jy_nature.includes(card[3])) {
                    card[2] = card[3] + '_jiu';
                    var cardx = lib.jy_card_init.call(this, card);
                    card[2] = 'jiu';
                    cardx.name = 'jiu';
                    cardx.nature = card[3];
                    cardx.classList.add(card[3]);
                    cardx.node.image.classList.add(card[3]);
                    return cardx;
                } else if (lib.jy_nature_jiu.includes(card[2]) || lib.jy_nature_shan.includes(card[2])) {
                    var nature = lib.card[card[2]].naturex;
                    card[3] = nature;
                    var cardx = lib.jy_card_init.call(this, card);
                    cardx.nature = card[3];
                    cardx.classList.add(card[3]);
                    cardx.node.image.classList.add(card[3]);
                    return cardx;
                } else if (card[2] == 'jy_dusha' || card[2] == 'jy_xiesha') {
                    if (card[2] == 'jy_dusha') {
                        card[3] = 'jy_du';
                    } else {
                        card[3] = 'jy_xie';
                    }
                    var cardx = lib.jy_card_init.call(this, card);
                    cardx.nature = card[3];
                    cardx.classList.add(card[3]);
                    cardx.node.image.classList.add(card[3]);
                    return cardx;
                }
            }
            var cardx = lib.jy_card_init.call(this, card);
            return cardx;
        };
        var cardinit = function (card) {
            if (!card.node.addMark) {
                card.node.addMark = ui.create.div('.addMark', card);
            }
            if (!card.node.addMark.innerHTML) {
                card.node.addMark.innerHTML = '';
            }
            if (!card.addMark) {
                card.addMark = {};
            }
        };
        lib.element.card.inits.push(cardinit);
        /////////////////////////////////////////////
        lib.element.card.setMark = function (skill, player) {
            var card = this;
            if (!card.addMark[skill]) card.addMark[skill] = [];
            card.addMark[skill].add(player);
            card.node.addMark.innerHTML = '';
            var str = [];
            for (var i in card.addMark) {
                str.push(get.translation(i));
            }
            if (str.length) card.node.addMark.innerHTML = str.join('<br>');
            return card;
        };
        lib.element.card.clearMark = function (skill, player, all) {
            var card = this;
            if (all) {
                card.addMark = {};
                card.node.addMark.innerHTML = '';
                return card;
            }
            if (card.addMark[skill]) {
                if (player === true) {
                    delete card.addMark[skill];
                } else {
                    card.addMark[skill].remove(player);
                    if (!card.addMark[skill].length) delete card.addMark[skill];
                }
            }
            card.node.addMark.innerHTML = '';
            var str = [];
            for (var i in card.addMark) {
                str.push(get.translation(i));
            }
            if (str.length) card.node.addMark.innerHTML = str.join('<br>');
            return card;
        };
        lib.element.card.hasMark = function (skill, player) {
            var card = this;
            if (!card.addMark[skill]) return false;
            if (player === true) {
                return card.addMark[skill].length > 0;
            } else {
                if (card.addMark[skill].indexOf(player) == -1) return false;
            }
            return true;
        };
        lib.card.jiu.cardPrompt = function (card) {
            const cardNature = Array.isArray(card) ? card[3] : get.nature(card);
            if (!cardNature || typeof cardNature != 'string') return lib.translate.jiu_info;
            const info = lib.translate[cardNature + '_jiu_info'];
            if (info && info.length) return info;
            return lib.translate.jiu_info;
        };
        lib.card.jiu.jy_nature = ['jy_tusu', 'jy_wubao', 'jy_lanlin', 'jy_zhuangyuan', 'jy_yuhu'];
        lib.jy_nature_jiu = ['jy_tusu_jiu', 'jy_wubao_jiu', 'jy_lanlin_jiu', 'jy_zhuangyuan_jiu', 'jy_yuhu_jiu'];
        lib.translate.jy_tusu = '屠苏酒';
        lib.translate.jy_wubao = '五宝花蜜酒';
        lib.translate.jy_lanlin = '兰陵酒';
        lib.translate.jy_zhuangyuan = '状元红';
        lib.translate.jy_yuhu = '玉壶春';
        lib.translate.jy_tusu_jiu_info = '你可以对濒死状态的其他角色使用此【酒】；一名目标成为此【酒】的目标后，其于本局游戏中不能被横置和翻面。';
        lib.translate.jy_wubao_jiu_info = '你于濒死状态用此【酒】后，你可以对伤害来源（若有）造成一点蛊毒伤害。';
        lib.translate.jy_lanlin_jiu_info = '你使用此【酒】后，下一张【杀】的伤害基数额外+1;你于濒死状态使用此【酒】后，额外回复一点体力。';
        lib.translate.jy_zhuangyuan_jiu_info = '你使用此【酒】后，你可以令你的♥️️手牌数量加倍。';
        lib.translate.jy_yuhu_jiu_info = '你因此【酒】进入“酒状态”或脱离濒死状态后，你可以将一张♣️️牌当【无极而生】使用。';
        for (var i of lib.card.jiu.jy_nature) {
            lib.translate[i + '_jiu'] = '酒';
            lib.translate[i + '_jiu2'] = '酒•' + lib.translate[i];
            lib.card[i + '_jiu'] = {
                naturex: i,
                type: 'basic',
                image: 'ext:金庸群侠传/image/equip/' + i + '_jiu.png',
                derivation: 'diy_card_jy_card_config',
                derivationpack: 'diy_card_jy',
                fullskin: true,
                //cardimage:'sha',
            };
            if (!lib.natureAudio.jiu) lib.natureAudio.jiu = {};
            lib.natureAudio.jiu[i] = {
                male: '../extension/金庸群侠传/peiyin/' + i + '_jiu_male.mp3', //男声音 文件夹命名 例如   jy_wubao_jiu_male.mp3
                female: '../extension/金庸群侠传/peiyin/' + i + '_jiu_female.mp3',
            };
            //lib.natureBg.set(i,"ext:金庸群侠传/image/equip/"+i+"_jiu.png");
        }
        if (!lib.cardPack.mode_derivation) {
            lib.cardPack.mode_derivation = [];
        }
        lib.cardPack.mode_derivation.addArray(lib.jy_nature_jiu);
        lib.skill.jy_yuhu = {
            log: false,
            filterCard(card) {
                return card.suit == 'club';
            },
            position: 'hs',
            viewAs: { name: 'wuzhong' },
            prompt: '将一张♣️️手牌当无中生有使用',
            check(card) {
                return 7 - get.value(card);
            },
        };
        lib.skill.jy_tusu = {
            charlotte: true,
            nopop: true,
            mark: true,
            marktext: '苏',
            init(player) {
                if (player.isTurnedOver()) {
                    game.log(player, '解除了翻面');
                    player.turnOver();
                }
                if (player.isLinked()) {
                    game.log(player, '解除了横置');
                    player.link();
                }
            },
            intro: { name: '屠苏', content: '不能被横置和翻面' },
            trigger: { player: ['turnOverBefore', 'linkBefore'] },
            priority: 20,
            forced: true,
            filter(event, player) {
                if (event.name == 'link') return !player.isLinked();
                return !player.isTurnedOver();
            },
            content() {
                trigger.cancel();
                if (trigger.name == 'link') {
                    game.log(player, '取消了横置');
                } else game.log(player, '取消了翻面');
            },
            ai: {
                noturn: true,
                effect: {
                    target(card) {
                        if (card.name == 'tiesuo') return 'zeroplayertarget';
                    },
                },
            },
        };
        ///////////////////////////酒//////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lib.translate.jy_shuangfei = '双飞彩翼';
        lib.translate.jy_lingbo = '凌波微步';
        lib.translate.jy_shenxing = '神形百变';
        lib.translate.jy_dengping = '登萍渡水';
        lib.translate.jy_taxue = '踏雪无痕';
        lib.translate.jy_shuangfei_shan_info = '抵消一张【杀】的效果，你的攻击范围永久+1。';
        lib.translate.jy_lingbo_shan_info = '抵消一张【杀】的效果，直到你下回合开始其他角色计算与你的距离+1。';
        lib.translate.jy_shenxing_shan_info = '抵消一张【杀】的效果，你摸一张牌。';
        lib.translate.jy_dengping_shan_info = '抵消一张【杀】的效果，你弃置来源一张牌。';
        lib.translate.jy_taxue_shan_info = '抵消一张【杀】的效果，直到你下回合开始，你不能再成为【杀】的目标。';
        lib.skill._jy_nature_use = {
            ai: {
                skillTagFilter(player, tag, target) {
                    const count = player.countCards('hs', function (card) {
                        return card.name == 'jiu' && get.nature(card) == 'jy_tusu';
                    });
                    if (count == 0) return false;
                    return true;
                },
                save: true,
            },
            mod: {
                cardSavable(card, player, target) {
                    if (player['_jy_nature_use3']) return;
                    if (card.name != 'jiu') return;
                    if (get.nature(card) != 'jy_tusu') return;
                    player['_jy_nature_use3'] = true;
                    const mod = game.checkMod(card, player, target, 'unchanged', 'cardSavable', player);
                    delete player['_jy_nature_use3'];
                    if (mod !== false) return true;
                },
                aiOrder(player, card, num) {
                    if (num <= 0) return num;
                    if (typeof card == 'object') {
                        const cardName = card.name;
                        const cardNature = get.nature(card);
                        if (!cardNature || typeof cardNature != 'string') return num;
                        if (cardName != 'shan' && cardName != 'jiu') return num;
                        return num + 0.1;
                    }
                },
            },
            trigger: { player: ['useCardEnd', 'useCard', 'respondEnd'] },
            ////////////////////////////////////////////////////////////////////////////
            jiu: {
                jy_tusu(event, player, card, targets, name) {
                    if (name != 'useCardEnd') return;
                    const trueTargets = event.targets.filter((i) => !event.excluded.includes(i));
                    for (const i of trueTargets) {
                        if (!i.hasSkill('jy_tusu')) {
                            i.addSkill('jy_tusu');
                        }
                    }
                },
                jy_wubao(event, player, card, targets, name) {
                    if (name != 'useCard') return;
                    let evt = event.parent;
                    if (evt.type == 'dying') {
                        evt = evt.getParent('dying');
                        if (evt && evt.source && evt.source != player) {
                            evt.source.damage(player, 'jy_du');
                            player.line(evt.source);
                        }
                    }
                },
                jy_lanlin(event, player, card, targets, name) {
                    if (name != 'useCard') return;
                    if (!event.baseDamage) event.baseDamage = 1;
                    event.baseDamage += 1;
                },
                jy_zhuangyuan(event, player, card, targets, name) {
                    if (name != 'useCardEnd') return;
                    const count = player.countCards('h', { suit: 'heart' });
                    if (!count) return false;
                    const cards = get.randomCards(count, function (card) {
                        return card.suit == 'heart';
                    });
                    if (cards && cards.length) player.gain(cards, 'log', 'gain2');
                },
                jy_yuhu(event, player, card, targets, name) {
                    if (name != 'useCard') return;
                    const players = game.filterPlayer();
                    for (const i of players) {
                        const next = game.createEvent('jy_yuhu_use', false);
                        next.setContent(function () {
                            const bool1 = !event.isHasJiu && player.hasSkill('jiu');
                            const bool2 = !player.isDying() && event.isDying;
                            if (trigger.all_excluded) return;
                            const trueTargets = trigger.targets.filter((i) => !trigger.excluded.includes(i));
                            if (trueTargets.includes(player) && (bool1 || bool2)) {
                                if (!player.countCards('hs', { suit: 'club' })) return;
                                const next = player.chooseToUse();
                                next.set('openskilldialog', '玉壶春:将一张♣️️手牌当无中生有使用');
                                next.set('norestore', true);
                                next.set('_backupevent', 'jy_yuhu');
                                next.set('custom', {
                                    add: {},
                                    replace: { window() { } },
                                });
                                next.backup('jy_yuhu');
                            }
                        });
                        next.player = i;
                        next._trigger = event;
                        next.isHasJiu = i.hasSkill('jiu');
                        next.isDying = (function () {
                            let evt = event.parent;
                            if (i.isDying()) return true;
                            if (evt.type == 'dying') {
                                evt = evt.getParent('dying');
                                if (evt && evt.player && evt.player == i) {
                                    return true;
                                }
                            }
                            return false;
                        })();
                        _status.event.next.remove(next);
                        event.after.push(next);
                    }
                },
                natuers_jiu: ['jy_tusu_jiu', 'jy_wubao_jiu', 'jy_lanlin_jiu', 'jy_zhuangyuan_jiu', 'jy_yuhu_jiu'],
                natuers: ['jy_tusu', 'jy_wubao', 'jy_lanlin', 'jy_zhuangyuan', 'jy_yuhu'],
            },
            ////////////////////////////////////////////////////////////////////////////
            shan: {
                jy_taxue(event, player, card, targets, name) {
                    if (name != 'useCardEnd' && name != 'respondEnd') return;
                    if (!event.respondTo) return;
                    if (!player.hasSkill('jy_taxue')) {
                        player.addTempSkill('jy_taxue', { player: 'phaseBegin' });
                    }
                },
                jy_lingbo(event, player, card, targets, name) {
                    if (name != 'useCardEnd' && name != 'respondEnd') return;
                    if (!event.respondTo) return;
                    if (!player.hasSkill('jy_lingbo')) {
                        player.addTempSkill('jy_lingbo', { player: 'phaseBegin' });
                    }
                },
                jy_shuangfei(event, player, card, targets, name) {
                    if (name != 'useCardEnd' && name != 'respondEnd') return;
                    if (!event.respondTo) return;
                    if (!player.hasSkill('jy_shuangfei')) {
                        player.addSkill('jy_shuangfei');
                    }
                },
                jy_dengping(event, player, card, targets, name) {
                    if (name != 'useCardEnd' && name != 'respondEnd') return;
                    if (!event.respondTo) return;
                    const target = event.respondTo[0];
                    if (target.countDiscardableCards(player, 'he')) {
                        player.line(target);
                        player.discardPlayerCard('he', target);
                    }
                },
                jy_shenxing(event, player, card, targets, name) {
                    if (name != 'useCardEnd' && name != 'respondEnd') return;
                    if (!event.respondTo) return;
                    player.draw();
                },
                natuers_shan: ['jy_shuangfei_shan', 'jy_lingbo_shan', 'jy_shenxing_shan', 'jy_dengping_shan', 'jy_taxue_shan'],
                natuers: ['jy_shuangfei', 'jy_lingbo', 'jy_shenxing', 'jy_dengping', 'jy_taxue'],
            },
            ////////////////////////////////////////////////////////////////
            forced: true,
            lastDo: true,
            priority: -100,
            popup: false,
            content() {
                const evt = trigger;
                const respondTo = evt.respondTo;
                const cardName = evt.card.name;
                const cardNature = evt.card.nature;
                const triggerName = event.triggername;
                if (cardName != 'shan' && cardName != 'jiu') return;
                if (!cardNature) return;
                if (evt.name == 'useCard') {
                    if (evt.all_excluded) return;
                }
                const info = lib.skill._jy_nature_use[cardName];
                if (info && info[cardNature]) info[cardNature](evt, player, evt.card, evt.targets, triggerName);
            },
        };
        ///////////////////////////闪//////////////////////////////
        lib.card.shan.jy_nature = ['jy_shuangfei', 'jy_lingbo', 'jy_shenxing', 'jy_dengping', 'jy_taxue'];
        lib.jy_nature_shan = ['jy_shuangfei_shan', 'jy_lingbo_shan', 'jy_shenxing_shan', 'jy_dengping_shan', 'jy_taxue_shan'];
        lib.cardPack.mode_derivation.addArray(lib.jy_nature_shan);
        for (var i of lib.card.shan.jy_nature) {
            lib.translate[i + '_shan'] = '闪';
            //lib.translate[i+"_shan"]='闪•'+lib.translate[i];
            lib.translate[i + '_shan2'] = '闪•' + lib.translate[i];
            lib.card[i + '_shan'] = {
                naturex: i,
                type: 'basic',
                image: 'ext:金庸群侠传/image/equip/' + i + '_shan.png',
                derivation: 'diy_card_jy_card_config',
                derivationpack: 'diy_card_jy',
                fullskin: true,
                //cardimage:'sha',
            };
            if (!lib.natureAudio.shan) lib.natureAudio.shan = {};
            lib.natureAudio.shan[i] = {
                male: '../extension/金庸群侠传/peiyin/' + i + '_shan_male.mp3', //男声音 文件夹命名 例如   jy_taxue_shan_male.mp3
                female: '../extension/金庸群侠传/peiyin/' + i + '_shan_female.mp3',
            };
            // lib.natureBg.set(i,"ext:金庸群侠传/image/equip/"+i+"_shan.png");
        }
        lib.card.shan.cardPrompt = function (card) {
            const cardNature = Array.isArray(card) ? card[3] : get.nature(card);
            if (!cardNature || typeof cardNature != 'string') return lib.translate.shan_info;
            const info = lib.translate[cardNature + '_shan_info'];
            if (info && info.length) return info;
            return lib.translate.shan_info;
        };
        lib.skill.jy_shuangfei = {
            charlotte: true,
            nopop: true,
            mark: true,
            marktext: '飞',
            intro: { name: '双飞', content: '你的攻击范围+1' },
            mod: {
                attackRange(player, distance) {
                    return distance + 1;
                },
            },
        };
        lib.skill.jy_taxue = {
            charlotte: true,
            nopop: true,
            mark: true,
            marktext: '雪',
            intro: { name: '踏雪', content: '不能成为杀的目标' },
            mod: {
                targetEnabled(card, player, target, now) {
                    if (card.name == 'sha') return false;
                },
            },
        };
        lib.skill.jy_lingbo = {
            charlotte: true,
            nopop: true,
            mark: true,
            marktext: '波',
            intro: { name: '凌波', content: '你的防御距离+1' },
            mod: {
                globalTo(from, to, distance) {
                    return distance + 1;
                },
            },
        };
        ///////////////////////////闪//////////////////////////////
        lib.jy_get_damageEffect = get.damageEffect;
        get.damageEffect = function (target, player, viewer, nature) {
            if (nature && (nature == 'jy_du' || nature == 'jy_xie')) {
                var name;
                if (!player) {
                    player = target;
                }
                if (!viewer) {
                    viewer = target;
                }
                if (nature == 'jy_du') {
                    name = 'jy_dudamage';
                } else {
                    name = 'jy_xiedamage';
                }
                var eff = get.effect(target, { name: name }, player, viewer);
                if (eff > 0 && target.hujia > 0) return 0;
                return eff;
            } else {
                return lib.jy_get_damageEffect.apply(this, arguments);
            }
        };
        ///////音效
        game.jyOrigin_playAudio = game.playAudio;
        game.playAudio = function () {
            var evt = _status.event;
            var _args = Array.from(arguments);
            var list = ['jydiyzhuifenghuang', 'jydiyfeiyunzhui', 'jydiyhanxuebaoma', 'jydiyyinshuangzhudianju', 'jydiyyuhuacong', 'jydiyheimeigui', 'jydiywuyungaixue', 'jydiybiaoche', 'ywhy_huoqilin'];
            if (evt.name == 'equip' && evt.card && list.includes(evt.card.name)) {
                if (_args[0] == 'effect' && _args[1].indexOf('equip') == 0) {
                    game.jyOrigin_playAudio('..', 'extension', '金庸群侠传', 'audio', 'equip', evt.card.name);
                    return;
                }
            }
            game.jyOrigin_playAudio.apply(this, arguments);
        };
    });
    ///////音效
});
