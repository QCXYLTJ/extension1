import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '拉拉',
        content(config, pack) { },
        precontent(lala) {
            window.lala_import = function (func) {
                func(lib, game, ui, get, ai, _status);
            };
            lib.init.js('extension/拉拉/character.js', null);
            (lib.translate.llbz_yanchu_append = '"我知道,你们一直在我身边"'), (lib.translate.llbz_hymashu_append = '梨子拥有各种动物相关的知识.'), lib.group.add('miu');
            lib.translate.miu = '缪';
            lib.translate.miu2 = '缪';
            lib.groupnature.miu = 'fire';
            lib.group.add('shui');
            lib.translate.shui = '水';
            lib.translate.shui2 = '水';
            lib.groupnature.shui = 'water';
            lib.group.add('hong');
            lib.translate.hong = '虹';
            lib.translate.hong2 = '虹';
            lib.groupnature.hong = 'orange';
            lib.group.add('xing');
            lib.translate.xing = '星';
            lib.translate.xing2 = '星';
            lib.groupnature.xing = 'thunder';
            lib.group.add('lian');
            lib.translate.lian = '莲';
            lib.translate.lian2 = '莲';
            lib.groupnature.lian = 'soil';
            lib.group.add('huan');
            lib.translate.huan = '幻';
            lib.translate.huan2 = '幻';
            lib.groupnature.huan = 'wood';
            lib.group.add('dui');
            lib.translate.dui = '对';
            lib.translate.dui2 = '对';
            lib.groupnature.dui = 'metal';
            lib.arenaReady.push(function () {
                for (var pack of ['lovelive']) {
                    for (var name in lib.characterPack[pack]) {
                        // var rarity=lib.characterPack[pack][name][5];
                        // if(['junk','common','rare','epic','legend'].includes(rarity)) lib.rank.rarity[rarity].add(name);
                        for (var rarity of ['junk', 'common', 'rare', 'epic', 'legend']) {
                            //废材,普通,精品,史诗,传说
                            if (lib.characterPack[pack][name][4].includes(rarity)) {
                                lib.rank.rarity[rarity].add(name);
                                break;
                            }
                        }
                    }
                }
            });
            game.import('card', function () {
                var lalacard = {
                    name: 'lalacard',
                    connect: true,
                    card: {
                        llbz_diaogan: {
                            type: 'equip',
                            subtype: 'equip1',
                            skills: ['llbz_diaogan_skill', 'llbz_diaogan_effect'],
                            equipDelay: false,
                            distance: { attackFrom: -5 },
                            ai: {
                                basic: {
                                    equipValue: 4,
                                },
                            },
                        },
                        GeatsBusterQB9: {
                            image: 'ext:拉拉/image/card/GeatsBusterQB9.png',
                            fullimage: true,
                            type: 'equip',
                            subtype: 'equip1',
                            equipDelay: false,
                            distance: { attackFrom: -8 },
                            ai: {
                                basic: {
                                    equipValue: 4,
                                },
                            },
                        },
                        lailapusi: {
                            image: 'ext:拉拉/image/card/lailapusi.png',
                            type: 'equip',
                            subtype: 'equip5',
                            equipDelay: false,
                            skills: ['lailapusi_attack', 'lailapusi_defend', 'lailapusi_friend'],
                        },
                        llbz_recovermagic: {
                            type: 'trick',
                            enable: true,
                            cardcolor: 'red',
                            selectTarget: 1,
                            filterTarget: true,
                            content() {
                                player.draw(2);
                                target.recover(1);
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) <= 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: 1,
                                    player(player, target, card) {
                                        if (get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 2;
                                        }
                                        if (get.attitude(player, target) <= 0 && get.attitude(target, player) <= 0) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    recover: 0.5,
                                },
                            },
                        },
                        llbz_flameattack: {
                            type: 'trick',
                            enable: true,
                            cardcolor: 'red',
                            selectTarget: [1, 3],
                            filterTarget: true,
                            content() {
                                target.damage(1, 'fire');
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: 1,
                                    player(player, target, card) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (lib.config.mode == 'versus') return -1;
                                        if (player.hasUnknown()) return 0;
                                        return get.damageEffect(target, player);
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                    nature: 'fire',
                                },
                            },
                        },
                        llbz_defendmagic: {
                            type: 'trick',
                            enable: true,
                            cardcolor: 'black',
                            selectTarget: 1,
                            filterTarget: true,
                            content() {
                                target.addTempSkill('llbz_hykanpo', { player: 'phaseBegin' });
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) <= 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: 1,
                                    player(player, target, card) {
                                        if (get.attitude(player, target) > 0 && get.attitude(target, player) > 0 && target.hp > 2) {
                                            return 2;
                                        }
                                        if (get.attitude(player, target) > 0 && get.attitude(target, player) > 0 && target.hp <= 2) {
                                            return 4;
                                        }
                                        if (get.attitude(player, target) <= 0 && get.attitude(target, player) <= 0) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                            },
                        },
                        llbz_magicshield: {
                            type: 'trick',
                            enable: true,
                            cardcolor: 'black',
                            selectTarget: 1,
                            filterTarget: true,
                            content() {
                                player.changeHujia(1, null, true);
                                target.changeHujia(1, null, true);
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) <= 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: 1,
                                    player(player, target, card) {
                                        if (get.attitude(player, target) > 0 && get.attitude(target, player) > 0 && target.countCards('hes') > 2) {
                                            return 2;
                                        }
                                        if (get.attitude(player, target) <= 0 && get.attitude(target, player) <= 0) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                            },
                        },
                    },
                    skill: {},
                    translate: {
                        llbz_diaogan: '钓竿',
                        llbz_diaogan_info: '出牌阶段限一次,你可以将钓钩扔给一名其他角色,其回合开始时,你获得其装备区和手牌区各一张牌,收回钓钩,若其没有牌,其流失一点体力.你对被钓钩钩中的目标造成伤害时,此伤害+1.你的其他装备牌均视为【杀】且无次数限制.',
                        lailapusi: '莱拉普斯',
                        lailapusi_info: '出牌阶段限两次,你可以视为使用一张无距离限制的【杀】.每轮限一次,当你需要使用【闪】时,你可以视为使用一张【闪】.你即将收到【决斗】、【南蛮入侵】的伤害时,防止之.',
                        llbz_recovermagic: '回复魔法',
                        llbz_recovermagic_info: '选择一名目标,令其回复1点体力,你摸2张牌',
                        llbz_flameattack: '火焰攻击',
                        llbz_flameattack_info: '选择一至三名目标造成1点火焰伤害',
                        llbz_defendmagic: '防御魔法',
                        llbz_defendmagic_info: '选择一名目标,令其获得<看破>直到其下个回合开始',
                        llbz_magicshield: '魔法护盾',
                        llbz_magicshield_info: '选择一名目标,你与其各获得1点护甲.',
                        GeatsBusterQB9: 'GeatsBusterQB9',
                        GeatsBusterQB9_info: 'GeatsBusterQB9',
                    },
                };
                lib.config.all.cards.add('lalacard');
                lib.config.cards.add('lalacard');
                lib.translate['lalacard_card_config'] = "<span style='color: #ff00cc'>拉拉牌堆</span>";
                return lalacard;
            });
        },
        package: {
            intro: "拉拉拓展 由于wiki的问题目前只有缪水虹星老五人有语音,新人和莲幻语音在后续更新<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '琉紫苑',
            version: '1.0',
        },
    };
});
