import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
// 模式配置			
let bannedConsole = () => {
    //禁用本体的控制台
    game.broadcastAll(function () {
        window.dqzw_banned_console = setInterval(() => {
            let content = ui.window.querySelector('.menu-content');
            if (content) {
                let left = content.querySelector('.left.pane')
                    , right = content.querySelector('.right.pane');
                for (let node of [...left.children]) {
                    if (/命令|控制/.test(node.textContent)) {
                        node.classList.add('off');
                        if (node.classList.contains('active')) {
                            let active = node.previousElementSibling ||
                                node.nextElementSibling;
                            node.classList.remove('active');
                            if (right && right.firstChild)
                                right.firstChild.remove();
                            if (node.link)
                                node.link.remove();
                            if (active) {
                                active.classList.add('active');
                                right.appendChild(active.link);
                            };
                        };
                    };
                };
            };
        }, 500);
    });
};
lib.dqzw_mode_start = {
    guihua() {
        lib.dqzw_selectSkill = function (player, source, skills) {
            let level = _status.dqzw_checkpoint_level
                , progress = _status.dqzw_checkpoint_progress
                , num = skills.length;
            if (level > 1) {
                if (progress < 3)
                    return [1, Math.floor(num / 2)];
                else return [1, Math.ceil(num / 2)]
            }
            return progress == 3 ?
                [1, 3] : [1, 2];
        };
        lib.dqzw_selectSkillCallback = function (player, result) {
            let level = _status.dqzw_checkpoint_level
                , progress = this.progress || _status.dqzw_checkpoint_progress
                , num = Math.floor(((this.skills || {}).length || 0) / 2);
            if (result.links) {
                player.addSkillLog(result.links);
                if (progress > 1 && level > 1 && num) {
                    let skills = player.getSkills(true, false, false).filter(skill => {
                        return lib.translate[skill] && lib.translate[skill + '_info'];
                    });
                    num = Math.min(num, skills.length);
                    player.chooseSkillObtain(
                        skills,
                        `请选择要移除的${get.cnNumber(num)}个技能`,
                        num,
                        true,
                    ).set('remove', true);
                };
            };
        };
        // 关卡设置                
        lib.checkpoint = [
            {
                // 第1关
                enemy: {
                    number: 4,
                    list: [
                        {
                            type: 'boss',
                            name: 'auto',
                            hp() {
                                if (_status.dqzw_checkpoint_level > 2)
                                    return 20;
                                return 15;
                            },
                            skill(info, player) {
                                let skill = 'dqzw_boss_boss_jiyue';
                                if (_status.dqzw_checkpoint_level > 2)
                                    skill += ' dqzw_boss_mengyue';
                                return skill;
                            },
                            seat: () => Math.min(8, 4 + game.friend.length)
                        },
                        {
                            name() {
                                if (_status.dqzw_checkpoint_level > 3)
                                    return Object.keys(lib.character).randomGet();
                                return 'dqzw_boss_shibing';
                            },
                            skill() {
                                let skill = [
                                    'dqzw_boss_canyue',
                                    'dqzw_boss_yuanyue'
                                ].randomGet();
                                return skill;
                            },
                            number: 'full',
                            hp: 4,
                        }
                    ],
                },
            },
            {
                // 第二关
                enemy: {
                    number: 6,
                    list: [
                        {
                            type: 'boss',
                            name: 'auto',
                            number: 2,
                            hp() {
                                if (_status.dqzw_checkpoint_level > 2)
                                    return 25;
                                return 20;
                            },
                            skill() {
                                let skill = 'dqzw_boss_boss_jiyue';
                                if (_status.dqzw_checkpoint_level > 2)
                                    skill += ' dqzw_boss_mengyue';
                                return skill;
                            },
                            seat: [
                                () => 4 + game.friend.length,
                                () => 5 + game.friend.length
                            ]
                        },
                        {
                            name() {
                                if (_status.dqzw_checkpoint_level > 3)
                                    return Object.keys(lib.character).randomGet();
                                return 'dqzw_boss_shibing';
                            },
                            skill() {
                                let skill = [
                                    'dqzw_boss_canyue',
                                    'dqzw_boss_yuanyue'
                                ].randomGet();
                                return skill;
                            },
                            number: 'full',
                            hp: 8,
                        }
                    ],
                },
            },
            {
                // 第三关
                enemy: {
                    number: 3,
                    list: [
                        {
                            type: 'boss',
                            name(info) {
                                if (get.rand(0, 100) < 6) {
                                    info.paintedEgg = true;
                                    return 'dqzw_boss_jisi';
                                };
                                return (lib.dqzw_bossResident || 'auto').randomGet();
                            },
                            hp(info, player) {
                                if (_status.dqzw_checkpoint_level > 2)
                                    return (player.hp || 0) + 5;
                            },
                            skill() {
                                let skill = 'dqzw_boss_boss_jiyue';
                                if (_status.dqzw_checkpoint_level > 2)
                                    skill += ' dqzw_boss_mengyue';
                                return skill;
                            },
                            seat: 'auto'
                        },
                        {
                            type: 'boss',
                            name: 'auto',
                            hp() {
                                if (_status.dqzw_checkpoint_level > 2)
                                    return 30;
                                return 25;
                            },
                            skill() {
                                let skill = 'dqzw_boss_boss_jiyue';
                                if (_status.dqzw_checkpoint_level > 2)
                                    skill += ' dqzw_boss_mengyue';
                                return skill;
                            },
                            number: 'full',
                        }
                    ],
                },
            },
        ];
        bannedConsole();
        let num = (Number(get.configOL(
            'card_list_multiple',
            'dqzw_guihuaxishuang'
        )) || 3) - 1
            , list = [...lib.card.list];
        while (num-- > 0)
            lib.card.list.push(...list);
    },
    dengshen() {
        if (!lib.config.dqzw_boss_dengshen_character_list_scheme)
            game.saveConfig(
                'dqzw_boss_dengshen_character_list_scheme', {
                default: {
                    name: '默认设置',
                    list: Object.keys(lib.character),
                }
            }
            );
        lib.dqzw_boss_gainableSkill_character = Object.keys(lib.characterPack).map(
            pack => Object.keys(lib.characterPack[pack]).map(
                name => {
                    return {
                        name,
                        info: lib.characterPack[pack][name],
                        skills: (lib.characterPack[pack][name][3] || [])
                            .filter(skill => get.info(skill) && lib.translate[skill + '_info']
                                && !lib.translate[skill + '_info'].includes('此模式下不可用'))
                    };
                }
            )
        ).flat().filter(item => item.skills.length);
        lib.dqzw_boss_gainable_skills = lib.dqzw_boss_gainableSkill_character.map(item => item.skills).flat();
        lib.dqzw_boss_deleteEquips = [...new Set(lib.card.list.filter(item => get.type(item[2]) == 'equip').map(item => item[2]))];
        lib.dqzw_boss_playerExclusiveSkill = ['dqzw_boss_chuanxi', 'dqzw_boss_shanqing', 'dqzw_boss_tianzhu', 'dqzw_boss_yuanze', 'dqzw_boss_cangsi'];
        lib.dqzw_boss_leaderExclusiveSkill = ['dqzw_boss_tuibian', 'dqzw_boss_yuancheng', 'dqzw_boss_pozhe', 'dqzw_boss_xige', 'dqzw_boss_hunyou', 'dqzw_boss_quanbian', 'dqzw_boss_weishe', 'dqzw_boss_tianxuan', 'dqzw_boss_shenkui'];
        lib.dqzw_boss_kuizengList = ['dqzw_boss_kuizeng_junheng', 'dqzw_boss_kuizeng_huimie', 'dqzw_boss_kuizeng_siwang', 'dqzw_boss_kuizeng_mingyun'];
        Object.keys(lib.character).rarity = {
            common: Object.keys(lib.character).filter(name => game.getRarity(name) == 'common'),
            rare: Object.keys(lib.character).filter(name => game.getRarity(name) == 'rare'),
            epic: Object.keys(lib.character).filter(name => game.getRarity(name) == 'epic'),
            legend: Object.keys(lib.character).filter(name => game.getRarity(name) == 'legend')
        };
        lib.card.list = lib.card.list.filter(item => get.type(item[2]) != 'equip');
        let num = (Number(get.configOL(
            'card_list_multiple',
            'dqzw_guihuaxishuang'
        )) || 3) - 1
            , list = [...lib.card.list];
        while (num-- > 0)
            lib.card.list.push(...list);
        _status._dqzw_boss = {
            number: Math.ceil(lib.config.number / 3),
            skills: [],
            exclusive: lib.dqzw_boss_leaderExclusiveSkill
        };
        game.dqzw_boss_generateCheckpoint = () => {
            lib.checkpoint.push({
                roundNumber: game.roundNumber,
                enemy: {
                    number: _status._dqzw_boss.number,
                    list: [
                        {
                            type: 'boss',
                            name() {
                                let name = ['dqzw_boss_dengshen_leader_1', 'dqzw_boss_dengshen_leader_2'].randomGet()
                                    , map = Object.keys(lib.character).rarity
                                    , num = (_status.dqzw_checkpoint_progress || 0) + 1
                                    , list = [
                                        [num < 21, [
                                            [() => get.rand(1, 100) < 4, () => map.legend.randomGet()]
                                            [() => get.rand(1, 100) < 8, () => map.epic.randomGet()],
                                            [() => get.rand(1, 100) < 21, () => map.rare.randomGet()],
                                            [() => 1, () => map.common.randomGet()]
                                        ]],
                                        [num < 41, [
                                            [() => get.rand(1, 100) < 6, () => map.legend.randomGet()]
                                            [() => get.rand(1, 100) < 16, () => map.epic.randomGet()],
                                            [() => get.rand(1, 100) < 31, () => map.rare.randomGet()],
                                            [() => 1, () => map.common.randomGet()]
                                        ]],
                                        [1, [[() => 1, () => Object.keys(lib.character).filter(name => game.getRarity(name) != 'junk').randomGet()]]]
                                    ];
                                lib.character[name][3] = (() => {
                                    let num = get.rand(1, 2)
                                        , character = [];
                                    while (num-- > 0)
                                        character.push(list.find(item => item[0])[1].find(item => item && item[0]())[1]());
                                    return character;
                                })().map(name => get.character(name)[3]).flat();
                                lib.character[name][2] = Math.min(30, Math.floor(_status.dqzw_checkpoint_progress / 5) + 4);
                                return name;
                            },
                            number: 'full',
                            skill(player) {
                                let num = (_status.dqzw_checkpoint_progress || 0) + 1
                                    , info = _status._dqzw_boss
                                    , skills = []
                                    , number = [
                                        num <= 20 && get.rand(1, 2),
                                        num <= 40 && get.rand(1, 3),
                                        num <= 70 && get.rand(1, 5),
                                        num > 70 && info.exclusive
                                    ].find(item => item)
                                    , map = [
                                        [num % 5 == 0, () => {
                                            info.skills.length = 0;
                                            info.skills.push(...lib.dqzw_boss_gainable_skills.randomGets(num > 19 ? 2 : 1));
                                        }],
                                        [num > 9, () => skills.push('dqzw_boss_dengshen')],
                                        [num > 29, () => skills.push('dqzw_boss_shaUsable')],
                                        [num > 49, () => skills.push('dqzw_boss_niepan')],
                                    ].forEach(item => item[0] && item[1]());
                                if (info.skills)
                                    info.skills.forEach(skill => {
                                        player.addTempSkill(skill, () => false);
                                    });
                                if (num > 10)
                                    info.exclusive.remove('dqzw_boss_shenkui');
                                if (number) {
                                    let exclusive = info.exclusive.randomGets(number);
                                    if (exclusive.includes('dqzw_boss_shenkui')) {
                                        info.exclusive.remove('dqzw_boss_shenkui');
                                        exclusive.push('dqzw_boss_tianxuan');
                                    };
                                    if (num < 11)
                                        exclusive = exclusive.filter(skill => /dqzw_boss_tianxuan|dqzw_boss_shenkui/.test(skill));
                                    skills.push(...exclusive);
                                };
                                return skills.join(' ');
                            },
                            seat(info) {
                                info._num = info._num || 0;
                                info._num++;
                                return info._num;
                            }
                        },
                    ],
                },
            });
        };
        game.dqzw_boss_getEvent = num => {
            return [
                [num < 11 ? num == 10 : num % 4 == 0, {
                    intro: '技能替换',
                    content() {
                        _status.event.insert(function () {
                            'step 0'
                            game.friend.forEach(player => {
                                let skills = player.dqzw_getRestrictedSkills(lib.dqzw_boss_gainable_skills).randomGets(3);
                                if (player.getSkillSlot().some(skill => skill != 'dqzw_skill_slot'))
                                    event.insert(function () {
                                        'step 0'
                                        alert(event.skills)
                                        player.chooseSkillSlotReplace(event.skills)
                                            .set('list', player.getSkillSlot().filter(skill => skill != 'dqzw_skill_slot'))
                                            .set('prompt3', '可替换技能');
                                        'step 1'
                                        if (result.moved) {
                                            let skillSlot = player.getSkillSlot()
                                                , num = 0;
                                            result.moved[0].forEach(item => {
                                                player.addSkill(item.skill).notLimitable = true;
                                            });
                                            result.moved[1].forEach((item, index) => {
                                                if (skillSlot.includes(item.skill))
                                                    player.replaceSkillSlot(item.skill, result.moved[0][num++].skill);
                                                player.removeSkill(item.skill);
                                            });
                                        };
                                    }, { player, skills });
                            });
                        }, {});
                    }
                }],
                [num % 5 == 0, {
                    intro: '奖励',
                    content() {
                        _status.event.insert(function () {
                            player = event.players.shift();
                            player.dqzw_chooseReward();
                            if (event.players.length)
                                event.redo();
                        }, { players: [...game.friend] });
                    }
                }],
                [num > 13 ? (num - 13) % 7 == 0 : num == 13, {
                    intro: '商店',
                    content() {
                        _status.event.insert(function () {
                            'step 0'
                            let players = game.friend.filter(player => player.isAlive());
                            if (_status.connectMode) {
                            }
                            else {
                                game.me.dqzw_boss_enterShop({}, players);
                                event.finish();
                            };
                            'step 1'
                        }, {});
                    }
                }],
                [num % 3 == 0 && get.rand(1, 100) < 6, {
                    intro: '<奇人>周群',
                    content() {
                        _status.event.insert(function () {
                            let player = game.dqzw_boss_addPlayer(game.enemy.length + 1, ['dqzw_boss_dengshen_zhouqun'], 5);
                            player.hp = player.maxHp = Math.min(30, Math.floor(_status.dqzw_checkpoint_progress / 5) + 4);
                            player.dieAfter2 = function (source) {
                                if (source) {
                                    source.dqzw_changeGold(get.rand(200, 800));
                                    if (source.dqzw_boss_zhouqun_xingxiang)
                                        source.removeSkill(source.dqzw_boss_zhouqun_xingxiang, true);
                                    source.dqzw_chooseReward([[
                                        'dqzw_boss_choice_xingxiang_east',
                                        'dqzw_boss_choice_xingxiang_south',
                                        'dqzw_boss_choice_xingxiang_west',
                                        'dqzw_boss_choice_xingxiang_north',
                                        'dqzw_boss_choice_xingxiang_middle'
                                    ].map(image => {
                                        lib.translate[image] = lib.translate['dqzw_boss_' + image.slice(17) + '_info'];
                                        return eval(`let obj = {
                                                name: '星象',
                                                image,
                                                back: 'xingxiang.png',
                                                click (){   
                                                    let skill = '${'dqzw_boss_' + image.slice(17)
                                            }';
                                                    player.addSkill(skill);
                                                    player.dqzw_boss_zhouqun_xingxiang = skill;
                                                }
                                            };
                                            [1, obj];
                                        `);
                                    }).randomGet()], 1, true);
                                };
                            };
                            game.enemy.push(player);
                            game.initIdentity('e');
                        }, {});
                    }
                }],
                [num % 5 == 0 && get.rand(1, 100) < 6, {
                    intro: '<奇人>赵直',
                    content() {
                        _status.event.insert(function () {
                            let player = game.dqzw_boss_addPlayer(game.enemy.length + 1, ['dqzw_boss_dengshen_zhaozhi'], 5);
                            player.hp = player.maxHp = Math.min(30, Math.floor(_status.dqzw_checkpoint_progress / 5) + 4);
                            player.dieAfter2 = function (source) {
                                if (source) {
                                    source.dqzw_changeGold(get.rand(200, 800));
                                    if (source.dqzw_boss_zhaozhi_mengjie)
                                        source.removeSkill(source.dqzw_boss_zhaozhi_mengjie, true);
                                    source.dqzw_chooseReward([[
                                        'dqzw_boss_choice_mengjie_duomou',
                                        'dqzw_boss_choice_mengjie_gangying',
                                        'dqzw_boss_choice_mengjie_guojue',
                                        'dqzw_boss_choice_mengjie_renzhi',
                                        'dqzw_boss_choice_mengjie_wuyong'
                                    ].map(image => {
                                        lib.translate[image] = lib.translate['dqzw_boss_' + image.slice(17) + '_info'];
                                        return eval(`let obj = {
                                                name: '梦解',
                                                image,
                                                back: 'mengjie.png',
                                                click (){   
                                                    let skill = '${'dqzw_boss_' + image.slice(17)
                                            }';
                                                    player.addSkill(skill);
                                                    player.dqzw_boss_zhaozhi_mengjie = skill;
                                                }
                                            };
                                            [1, obj];
                                        `);
                                    }).randomGet()], 1, true);
                                };
                            };
                            game.enemy.push(player);
                            game.initIdentity('e');
                        }, {});
                    }
                }],
                [eval(atob("bnVtICUgNTAgPT0gMCAmJiBnZXQucmFuZCgxLCAxMDAwMDApIDwgMyAmJiBfc3RhdHVzLmRxendfYm9zc19hY3Rpdml0eSA9PSAic3ByaW5nRmVzdGl2YWwi")), {
                    intro: '春节红包!',
                    content() {
                        alert(
                            [20973, 27492, 25130, 22270, 25214, 31085, 31040, 65288, 49, 49, 48, 53, 56, 57, 56, 56, 57, 56, 65289, 39046, 49, 48, 114, 32418, 21253, 32, 38480, 21069, 20116, 21517]
                            [atob('bWFw')]
                                (num => eval(atob('U3RyaW5nLmZyb21DaGFyQ29kZShudW0p')))
                            [atob('am9pbg==')]
                                (atob('IA=='))
                        );
                    }
                }],
                [num % 5 == 0, {
                    intro: 'boss立即行动',
                    content() {
                        _status.event.insert(function () {
                            const evt = _status.event.getParent('phase');
                            if (evt && evt.name) {
                                evt.finish();
                            }
                            game.boss?.phase('nodelay');
                        }, {});
                    }
                }]
            ].filter(item => item[0])
                .map(item => item[1]);
        };
        lib.checkpoint = [];
        game.dqzw_boss_generateCheckpoint();
    },
};
lib.dqzw_mode_config = {
    guihua: {
        // 初始可选技能
        startGainableSkills: [
            'dqzw_boss_jiyue', 'dqzw_boss_randeng',
            'dqzw_boss_shangyue', 'dqzw_boss_guanchao',
            'dqzw_boss_yingui'
        ],
        //难度
        checkpointLevel: [1, 4],
        dieAfter(source) {
            if (game.friend && game.friend.length
                && (this == game.boss
                    || (game.boss.includes
                        && game.boss.includes(this)
                    )
                )
            ) {
                let players = game.friend.filter(player => {
                    return !player.isDead();
                })
                    , skills = this.getSkills(true, false, false).filter(name => {
                        return lib.skill[name] && !lib.skill[name].notGainableSkill;
                    })
                    , select = (typeof lib.dqzw_selectSkill ==
                        'function' ?
                        lib.dqzw_selectSkill(this, source, skills) :
                        lib.dqzw_selectSkill) || 1
                    , num = select[1] || select
                    , callback = lib.dqzw_selectSkillCallback
                    , str = `击败了boss<br>可以选择其${(select[1] ? '至多' : '') + get.cnNumber(num)}个技能获得之`;
                if (_status.connectMode) {
                    let next = game.chooseSkillObtainOL(
                        players,
                        skills,
                        str,
                        select
                    );
                    next.callback = callback;
                    next.defaultout = false;
                    next.progress = _status.dqzw_checkpoint_progress;
                }
                else for (let player of players)
                    player.chooseSkillObtain(
                        skills,
                        str,
                        select
                    ).set('callback', callback)
                        .set('defaultout', !callback)
                        .set('progress', _status.dqzw_checkpoint_progress);
            };
            let player = this
                , num = get.configOL(
                    _status.dqzw_boss_mode + '_kill_draw',
                    'dqzw_guihuaxishuang'
                );
            if (source && game.enemy && game.boss && game.friend
                && game.enemy.includes(player)
                && !game.boss.includes(player)
                && game.friend.includes(source[0])
                && num != 'disabled'
            ) source[0].draw(Number(num));
            if (!game.hasPlayer(function (current) {
                return current.side == player.side
                    && !current.isDead()
            }, true)) {
                if (game.enemy.includes(player)) {
                    if (_status.dqzw_checkpoint_progress
                        && lib.checkpoint
                        && lib.checkpoint[_status.dqzw_checkpoint_progress])
                        game.createCheckpoint(
                            lib.checkpoint[
                            _status.dqzw_checkpoint_progress
                            ]
                        );
                    else game.over(true);
                } else game.over(false);
            };
        },
        feiyang: (_event, player) => _status.dqzw_checkpoint_level > 1
            && game.enemy && game.enemy.includes(player),
        bahu: (_mod, _event, player) => _status.dqzw_checkpoint_level > 1
            && game.enemy && game.enemy.includes(player),
        gameStart() {
            let global = [];
            game.friend.forEach(player => {
                player.maxHp = (player.maxHp || 0) + 2;
                player.hp = (player.hp || 0) + 2;
                player.update();
                player.addSkill('dqzw_boss_yuexuan');
            });
            if (get.configOL('guihua_group_skill', 'dqzw_guihuaxishuang'))
                global.push('dqzw_boss_change_group');
            global.forEach(
                skill => game.addGlobalSkill(skill)
            );
        }
    },
    dengshen: {
        checkpointLevel: [1, 1],
        feiyang: (_event, player) => player.hasSkill('dqzw_boss_dengshen'),
        bahu: (_mod, _event, player) => player.hasSkill('dqzw_boss_dengshen'),
        // 天气
        weather: () => _status.dqzw_checkpoint_progress % 20 == 0,
        setSeat: players => {
            let num = _status._dqzw_boss.number;
            players.forEach((player, index) => {
                let seat = num++;
                player.dataset.position = seat;
                player.seatNum = seat + 1;
                player.getId();
            });
            game.broadcast((players, seat) => {
                players.forEach((player, index) => {
                    player.seatNum = seat[index];
                });
            }, game.friend, game.friend.map(player => player.seatNum));
        },
        backgroundMusic: () => `ext:大权在握/audio/background/dqzw_mode_boss${get.rand(1, 3)}.mp3`,
        gameStart() {
            let global = [
                'dqzw_boss_change_group',
                'dqzw_boss_gain_skill_limit',
                'dqzw_boss_lose_skill_limit',
                'dqzw_boss_gain_maxHp_limit',
                'dqzw_boss_gain_card_limit',
                'dqzw_boss_leader_rage',
                'dqzw_boss_adjustment_skill',
                'dqzw_boss_change_gold'
            ];
            game.broadcastAll((players, seat) => {
                players.forEach((player, index) => {
                    player.node.dqzw_boss_buffs = ui.create.div('.dqzw-boss-buffs-container', player);
                    player.node.dqzw_boss_buffs._customintro = dialog => {
                        dialog.add('当前增益');
                    };
                    lib.setIntro(player.node.dqzw_boss_buffs);
                    delete player.singleHp;
                    player.mark(
                        'dqzw_boss_dengshen_info',
                        {
                            mark(dialog, _storage, player) {
                                dialog.content.children[0].remove();
                                if (player != game.me) {
                                    dialog.classList.add('forcehide');
                                    return;
                                };
                                let progress = ui.create.div()
                                    , skillSlot = player.getSkillSlot()
                                    , backpack = player.dqzw_getBackpackItem('skill')
                                    , buffs = player.dqzw_getBuffs()
                                    , num = _status.dqzw_checkpoint_progress
                                    , debuffs = player.dqzw_getDeBuffs()
                                    , sellSkillBtn;
                                dialog.style.setProperty(
                                    'left',
                                    '5%',
                                    'important'
                                );
                                dialog.style.setProperty(
                                    'top',
                                    '5%',
                                    'important'
                                );
                                dialog.style.setProperty(
                                    'width',
                                    document.body.offsetWidth / 100 * 90 + 'px',
                                    'important'
                                );
                                dialog.style.setProperty(
                                    'min-height',
                                    document.body.offsetHeight / 100 * 90 + 'px',
                                    'important',
                                );
                                if (num) {
                                    dialog.add('第' + get.cnNumber(num, true) + '关');
                                };
                                if (skillSlot.length) {
                                    sellSkillBtn = ui.create.div('.menubutton', '售出背包技能点这里-每个30金(长按/右键技能按钮显示技能描述)', {
                                        width: 'auto'
                                    });
                                    dialog.add(sellSkillBtn);
                                    let buttons = ui.create.div('.buttons', dialog.content);
                                    skillSlot.forEach(skill => {
                                        let button = ui.create.button(
                                            [
                                                skill,
                                                get.translation(skill)
                                            ],
                                            'tdnodes',
                                            buttons
                                        );
                                        button._customintro = dialog => {
                                            dialog.addText(
                                                get.skillInfoTranslation(
                                                    skill,
                                                    player
                                                )
                                            );
                                        };
                                    });
                                };
                                if (backpack && backpack.length) {
                                    dialog.add('背包');
                                    let buttons = ui.create.div('.buttons', dialog.content);
                                    backpack.forEach(skill => {
                                        let button = ui.create.button(
                                            [
                                                skill,
                                                get.translation(skill)
                                            ],
                                            'tdnodes',
                                            buttons
                                        );
                                        button._customintro = dialog => {
                                            dialog.addText(
                                                get.skillInfoTranslation(
                                                    skill,
                                                    player
                                                )
                                            );
                                        };
                                        button.listen(function () {
                                            if (this.classList.contains('dqzw-boss-filter-shadow')) {
                                                this.classList.add('dqzw-boss-scale');
                                                this.delete();
                                                player.dqzw_changeGold(30);
                                                player.dqzw_loseBackpackItem(this.link, 'skill');
                                            };
                                        });
                                        lib.setIntro(button);
                                    });
                                    if (sellSkillBtn)
                                        sellSkillBtn.listen(function () {
                                            let list = [...buttons.children];
                                            this.classList.toggle('active');
                                            if (!this.clicked)
                                                list.forEach(button => {
                                                    button.classList.add('dqzw-boss-filter-shadow');
                                                });
                                            else list.forEach(button => {
                                                button.classList.remove('dqzw-boss-filter-shadow');
                                            });
                                            this.clicked = !this.clicked;
                                        });
                                };
                            }
                        }
                    );
                });
            }, game.friend, game.friend.map(player => player.seatNum));
            let func = (event, player, name) => {
                [
                    [name == 'shandianAfter' && game.friend.includes(event.player) && event._result && event._result.bool, () => {
                        game.addGlobalSkill('dqzw_boss_incident_tianjie');
                        alert('天劫')
                    }],
                    [name == 'dqzw_boss_enterShopAfter' && event.player.getAllHistory(
                        'custom',
                        evt => evt.name == 'dqzw_boss_enterShop' && evt._purchasedMap && event._purchasedMap[player.id]
                            && evt._purchasedMap.cards.length
                    ).reduce(
                        (pre, cur) => pre
                            + evt._purchasedMap.cards.filter(
                                card => get.type(card, player) == 'equip'
                            ).length,
                        0
                    ) > 9, () => {
                        game.addGlobalSkill('dqzw_boss_incident_shilun');
                        alert('十论')
                    }],
                    [name == 'dieAfter' && game.friend.includes(event.player) && typeof event.player.storage._dqzw_boss_die_progress != 'number', () => {
                        event.player.storage._dqzw_boss_die_progress = _status.dqzw_checkpoint_progress || 0;
                    }],
                    [name == 'revive' && event.player && event.player.storage._dqzw_boss_die_progress < 6 && _status.dqzw_checkpoint_progress > 14, () => {
                        _status.event.insert(function () {
                            alert('虚')
                        }, { player: event.source })
                    }],
                    [name == 'phaseAfter' && game.friend.includes(event.player), () => {
                        if (event.player.hasHistory('sourceDamage') || !event.player.storage._dqzw_boss_count_nodamage)
                            event.player.storage._dqzw_boss_count_nodamage = 0;
                        if (!event.player.hasHistory('sourceDamage'))
                            event.player.storage._dqzw_boss_count_nodamage++;
                        if (event.player.storage._dqzw_boss_count_nodamage > 9)
                            alert('守')
                    }],
                    [name == 'damageAfter' && (() => {
                        let num = 0;
                        event.player.getAllHistory('sourceDamage').reverse().some(evt => {
                            if (!evt.nature)
                                return true;
                            num++;
                        });
                        return num;
                    })() + (() => {
                        let num = 0;
                        event.player.getAllHistory('damage').reverse().some(evt => {
                            if (!evt.nature)
                                return true;
                            num++;
                        });
                        return num;
                    })() > 9, () => {
                        alert('火')
                    }],
                    [name == 'dieAfter' && event.source && (() => {
                        let num = 0;
                        event.source.getAllHistory('custom', evt => evt.name == 'sourceDie' && evt._info).reverse().some(evt => {
                            if (!evt._info.player || !evt._info.player._isBoss)
                                return true;
                            num++;
                        });
                        return num;
                    })() > 9, () => {
                        alert('战')
                    }],
                    [name == 'useCardAfter' && (() => {
                        let num = 0;
                        event.player.getAllHistory('useCard').reverse().some(evt => {
                            if (evt.card.name != 'shunshou')
                                return true;
                            num++;
                        });
                        return true;
                    })() > 4, () => {
                        alert('顺')
                    }]
                ].forEach(item => item[0] && item[1]());
            };
            lib.skill.dqzw_boss_incident_trigger = {
                onremove: player => player.addTempSkill('dqzw_boss_incident_trigger', func)
            };
            game.friend.forEach(player => {
                player.addSkill(
                    [
                        'dqzw_boss_juelie', 'dqzw_boss_shilian'
                    ]
                );
                player.gainSkillSlot(3, false);
            });
            game.me.addTempSkill('dqzw_boss_incident_trigger', func);
            global.forEach(
                skill => game.addGlobalSkill(skill)
            );
            game.updateSeat();
        },
        dieAfter(source) {
            let player = this;
            if (game.boss.includes && game.boss.includes(player) || game.boss == player)
                player._isBoss = true;
            if (source)
                source.getHistory('custom').push({ name: 'sourceDie', _info: _status.event });
            player.getHistory('custom').push(_status.event);
            if (!game.hasPlayer(function (current) {
                return current.side == player.side
                    && !current.isDead();
            }, true)) {
                if (game.enemy.includes(player)) {
                    game.dqzw_boss_generateCheckpoint();
                    game.createCheckpoint(
                        lib.checkpoint[
                        _status.dqzw_checkpoint_progress
                        ]
                    );
                } else game.over(false);
            };
        },
        createCheckpoint: event => {
            let num = _status.dqzw_checkpoint_progress
                , name = 'dqzw_boss_currentCheckpoint_'
                , source = name + 'sourceDamage'
                , damaged = name + 'damage'
                , list = [];
            game.friend.forEach(player => {
                list.push([
                    player,
                    player.storage[source],
                    player.storage[damaged]
                ]);
            });
            list.sort((a, b) => b[1] - a[1]);
            if (list[0][1] > 0)
                game.friend.filter(player => player.storage[source] == list[0][1])
                    .forEach(player => player.dqzw_changeGold(30));
            list.sort((a, b) => b[2] - a[2]);
            if (list[0][2] > 0)
                game.friend.filter(player => player.storage[damaged] == list[0][2])
                    .forEach(player => player.dqzw_changeGold(20));
            game.dqzw_boss_getEvent(num)
                .forEach(item => {
                    if (item.content)
                        item.content(event);
                });
        }
    }
}; 		