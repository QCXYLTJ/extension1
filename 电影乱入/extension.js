
window.dy_update = '2023/08/09';
import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '电影乱入',
        content(config, pack) {
            game.randomMatrix = function (arr) {
                var length = arr.length,
                    randomIndex,
                    temp;
                while (length) {
                    randomIndex = Math.floor(Math.random() * length--);
                    temp = arr[randomIndex];
                    arr[randomIndex] = arr[length];
                    arr[length] = temp;
                }
                return arr;
            };
            game.myturn = function (release, num) {
                lib.skill.dy_myturn = {
                    trigger: {
                        player: 'phaseEnd',
                    },
                    charlotte: true,
                    forced: true,
                    firstDo: true,
                    silent: true,
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        game.filterPlayer(function (current) {
                            if (current != player) current.skip('phase');
                            return;
                        });
                        game.dy_myturn--;
                        player.say('连续回合:还剩' + game.dy_myturn + '回合');
                        if (!game.dy_myturn) {
                            player.removeSkill('dy_myturn');
                        }
                    },
                };
                if (!release) var release = game.me;
                if (release.hasSkill('dy_myturn')) {
                    if (num && parseFloat(num) != NaN && parseFloat(num) > 0) {
                        game.dy_myturn = parseFloat(num);
                        return get.translation(release.name) + ':' + get.cnNumber(parseFloat(num)) + '回合';
                    } else {
                        release.removeSkill('dy_myturn');
                        return get.translation(release.name) + ':移除效果';
                    }
                } else {
                    release.addSkill('dy_myturn');
                    if (num && parseFloat(num) != NaN && parseFloat(num) > 0) {
                        game.dy_myturn = parseFloat(num);
                        return get.translation(release.name) + ':' + get.cnNumber(parseFloat(num)) + '回合';
                    } else {
                        game.dy_myturn = Infinity;
                        return get.translation(release.name) + ':无限回合';
                    }
                }
            };
            var stars = {
                mny_dy_longdi: ['legend', 'dypack_mny'],
                mny_dy_init_longdi: ['epic', 'dypack_mny'],
                zjz_dy_t600: ['rare', 'dypack_zjz'],
                zjz_dy_t800: ['rare', 'dypack_zjz'],
                zjz_dy_t1000: ['epic', 'dypack_zjz'],
                zjz_dy_tx: ['legend', 'dypack_zjz'],
                mny_dy_ahmanet: ['epic', 'dypack_mny'],
                hkdg_dy_neo: ['rare', 'dypack_hkdg'],
                hkdg_dy_init_neo: ['legend', 'dypack_hkdg'],
                hkdg_dy_smith: ['epic', 'dypack_hkdg'],
                hkdg_dy_morpheus: ['rare', 'dypack_hkdg'],
                hkdg_dy_trinity: ['rare', 'dypack_hkdg'],
                mny_dy_ancksunamun: ['rare', 'dypack_mny'],
                mny_dy_moduniran: ['epic', 'dypack_mny'],
                qnyh_dy_yanchixia: ['legend', 'dypack_qnyh'],
                qnyh_dy_zuoqianhu: ['epic', 'dypack_qnyh'],
                qnyh_dy_puducihang: ['legend', 'dypack_qnyh'],
                qnyh_dy_init_puducihang: ['legend', 'dypack_qnyh'],
                qnyh_dy_init2_puducihang: ['legend', 'dypack_qnyh'],
                qnyh_dy_zhiqiuyiye: ['epic', 'dypack_qnyh'],
                qnyh_dy_baiyunchanshi: ['legend', 'dypack_qnyh'],
                qnyh_dy_heishanlaoyao: ['legend', 'dypack_qnyh'],
                qnyh_dy_init_heishanlaoyao: ['junk', 'dypack_qnyh'],
                zmid_dy_malcolmrivers: ['rare', 'dypack_zmid'],
            };
            lib.translate.dypack_mny = '木乃伊';
            lib.translate.dypack_zjz = '终结者';
            lib.translate.dypack_hkdg = '黑客帝国';
            lib.translate.dypack_qnyh = '倩女幽魂';
            lib.translate.dypack_zmid = '致命ID';
            var dypack = lib.characterPack.电影乱入;
            var rank = lib.rank.rarity;
            lib.characterSort.电影乱入 = {};
            if (!localStorage.getItem('dy_vip')) localStorage.setItem('dy_vip', 'blank');
            var vips = localStorage.getItem('dy_vip');
            if (!vips) vips = 'blank';
            game.bossrealname = {};
            for (const a in dypack) {
                const info = stars[a];
                if (!info) continue;
                if (info[0] != 'common') {
                    if (!rank[info[0]].includes(a)) {
                        rank[info[0]].push(a);
                    }
                }
                if (!lib.characterSort.电影乱入[info[1]]) {
                    lib.characterSort.电影乱入[info[1]] = [];
                }
                lib.characterSort.电影乱入[info[1]].push(a);
                for (const j of dypack[a][4]) {
                    if (j.includes('vip_name:')) {
                        game.bossrealname[a] = get.translation(a);
                        lib.translate[a] = '☠' + j.slice(9);
                    }
                }
            }
            game.getRandomInt = function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            lib.translate._boss_vip_dy_vip = '解锁';
            lib.skill._boss_vip_dy = {
                subSkill: {
                    draw: {
                        firstDo: true,
                        forced: true,
                        filter(event, player) {
                            if (get.mode() != 'boss') return false;
                            if (player.identity != 'zhu') return false;
                            if (player.name.indexOf('dy_') == -1) return false;
                            return !event.numFixed;
                        },
                        trigger: {
                            player: 'phaseDrawBegin2',
                        },
                        content() {
                            trigger.num++;
                        },
                    },
                    gain: {
                        firstDo: true,
                        forced: true,
                        filter(event, player) {
                            if (get.mode() != 'boss') return false;
                            if (player.identity != 'zhu') return false;
                            if (player.name.indexOf('dy_') == -1) return false;
                            if (event.source && event.source != player) return false;
                            return event.limited;
                        },
                        trigger: {
                            player: ['gainHpBegin', 'gainMaxHpBegin', 'recoverBegin'],
                        },
                        content() {
                            trigger.num *= 2;
                        },
                    },
                    vip: {
                        forceDie: true,
                        _priority: -Infinity,
                        forced: true,
                        filter(event, player) {
                            if (get.mode() != 'boss') return false;
                            if (player.identity != 'zhu') return false;
                            if (player.name.indexOf('dy_') == -1) return false;
                            if (!game.dy_vip_lock) return false;
                            if (player == game.me) return false;
                            var name = game.dy_vip_lock;
                            if (game.bossrealname && game.bossrealname[name]) {
                                var cnname = game.bossrealname[name];
                                lib.skill._boss_vip_dy_vip.animationStr = '已解锁:' + cnname;
                            }
                            return true;
                        },
                        trigger: {
                            player: ['dieBegin'],
                        },
                        content() {
                            player.$damagepop('已解锁角色');
                            var vips = localStorage.getItem('dy_vip');
                            var name = game.dy_vip_lock;
                            if (vips.indexOf(name) == -1) {
                                vips = vips + '-' + name;
                                localStorage.setItem('dy_vip', vips);
                            }
                            var name = game.dy_vip_lock;
                            if (game.bossrealname && game.bossrealname[name]) {
                                var cnname = game.bossrealname[name];
                                var str = '☠已解锁角色:' + cnname;
                            } else {
                                var str = '☠已解锁本关BOSS';
                            }
                            game.log('恭喜通关BOSS');
                            game.log('<span style=\"animation: -webkit-animation:fairy 20s infinite;animation:fairy 20s infinite;\">' + str + '</span>');
                        },
                    },
                    boss: {
                        trigger: {
                            player: 'enterGame',
                            global: 'gameDrawBefore',
                        },
                        firstDo: true,
                        forced: true,
                        filter(event, player) {
                            if (get.mode() != 'boss') return false;
                            if (player.identity != 'zhu') return false;
                            if (player.name.indexOf('dy_') == -1) return false;
                            return game.phaseNumber == 0;
                        },
                        content() {
                            'step 0';
                            if (!game.dy_vip_lock) game.dy_vip_lock = player.name;
                            if (player.hasSkill('dy_bossinfo')) player.removeSkill('dy_bossinfo');
                        },
                    },
                },
                trigger: {
                    global: ['phaseBefore'],
                },
                firstDo: true,
                forced: true,
                filter(event, player) {
                    if (get.mode() != 'boss') return false;
                    if (player.identity != 'zhu') return false;
                    if (player.name.indexOf('dy_') == -1) return false;
                    if (event.is_boss_vip) return false;
                    if (game.phaseNumber == 0) return false;
                    return true;
                },
                content() {
                    'step 0';
                    trigger.parent._dy_boss_phase = true;
                    ('step 1');
                    if (trigger.player == player) {
                        trigger.cancel();
                    } else {
                        player.phase('nodelay').is_boss_vip = true;
                    }
                },
            };
            lib.dy_character_links = {
                mny_dy_longdi: {
                    friend: [],
                    enemy: [],
                    neutral: [],
                },
                mny_dy_init_longdi: {
                    friend: [],
                    enemy: [],
                    neutral: [],
                },
                zjz_dy_t600: {
                    friend: [],
                    enemy: [],
                    neutral: [],
                },
                zjz_dy_t800: {
                    friend: [],
                    enemy: ['zjz_dy_t600', 'zjz_dy_t1000', 'zjz_dy_tx'],
                    neutral: ['zjz_dy_t600'],
                },
                zjz_dy_t1000: {
                    friend: [],
                    enemy: ['zjz_dy_t800'],
                    neutral: ['zjz_dy_t600'],
                },
                zjz_dy_tx: {
                    friend: [],
                    enemy: ['zjz_dy_t800'],
                    neutral: ['zjz_dy_t600'],
                },
                mny_dy_ahmanet: {
                    friend: [],
                    enemy: [],
                    neutral: [],
                },
                hkdg_dy_neo: {
                    friend: ['hkdg_dy_trinity', 'hkdg_dy_morpheus'],
                    enemy: ['hkdg_dy_smith'],
                    neutral: [],
                },
                hkdg_dy_init_neo: {
                    friend: ['hkdg_dy_trinity', 'hkdg_dy_morpheus'],
                    enemy: ['hkdg_dy_smith'],
                    neutral: [],
                },
                hkdg_dy_smith: {
                    friend: [],
                    enemy: ['hkdg_dy_neo', 'hkdg_dy_trinity', 'hkdg_dy_morpheus'],
                    neutral: [],
                },
                hkdg_dy_morpheus: {
                    friend: ['hkdg_dy_neo', 'hkdg_dy_trinity'],
                    enemy: ['hkdg_dy_smith'],
                    neutral: [],
                },
                hkdg_dy_trinity: {
                    friend: ['hkdg_dy_neo', 'hkdg_dy_morpheus'],
                    enemy: ['hkdg_dy_smith'],
                    neutral: [],
                },
                mny_dy_ancksunamun: {
                    friend: ['mny_dy_moduniran'],
                    enemy: [],
                    neutral: [],
                },
                mny_dy_moduniran: {
                    friend: ['mny_dy_ancksunamun'],
                    enemy: [],
                    neutral: [],
                },
                qnyh_dy_yanchixia: {
                    friend: ['qnyh_dy_zhiqiuyiye'],
                    enemy: ['qnyh_dy_puducihang', 'qnyh_dy_heishanlaoyao'],
                    neutral: ['qnyh_dy_zuoqianhu'],
                },
                qnyh_dy_zuoqianhu: {
                    friend: ['qnyh_dy_zhiqiuyiye'],
                    enemy: ['qnyh_dy_puducihang'],
                    neutral: ['qnyh_dy_yanchixia'],
                },
                qnyh_dy_puducihang: {
                    friend: [],
                    enemy: ['qnyh_dy_yanchixia', 'qnyh_dy_zhiqiuyiye', 'qnyh_dy_zuoqianhu'],
                    neutral: ['qnyh_dy_heishanlaoyao'],
                },
                qnyh_dy_init_puducihang: {
                    friend: [],
                    enemy: [],
                    neutral: [],
                },
                qnyh_dy_init2_puducihang: {
                    friend: [],
                    enemy: [],
                    neutral: [],
                },
                qnyh_dy_zhiqiuyiye: {
                    friend: ['qnyh_dy_yanchixia'],
                    enemy: ['qnyh_dy_puducihang'],
                    neutral: ['qnyh_dy_zuoqianhu'],
                },
                qnyh_dy_baiyunchanshi: {
                    friend: [],
                    enemy: ['qnyh_dy_heishanlaoyao'],
                    neutral: [],
                },
                qnyh_dy_heishanlaoyao: {
                    friend: [],
                    enemy: ['qnyh_dy_yanchixia', 'qnyh_dy_baiyunchanshi'],
                    neutral: ['qnyh_dy_puducihang'],
                },
                qnyh_dy_init_heishanlaoyao: {
                    friend: [],
                    enemy: [],
                    neutral: [],
                },
                zmid_dy_malcolmrivers: {
                    friend: [],
                    enemy: [],
                    neutral: [],
                },
            };
            lib.skill._link_dy = {
                trigger: {
                    player: 'enterGame',
                    global: 'gameDrawBefore',
                },
                filter(event, player) {
                    return lib.config.extension_电影设置_link && player == game.players[0];
                },
                _priority: Infinity,
                firstDo: true,
                silent: true,
                forced: true,
                content() {
                    var randomBox = function (arr) {
                        var length = arr.length,
                            randomIndex,
                            temp;
                        while (length) {
                            randomIndex = Math.floor(Math.random() * length--);
                            temp = arr[randomIndex];
                            arr[randomIndex] = arr[length];
                            arr[length] = temp;
                        }
                        return arr;
                    };
                    var checkdy = function (him) {
                        var ids = [0, 0, 1, 0];
                        if (him.name == 'unknown') return false;
                        if (him.name.includes('dy_')) {
                            var ids = [1, 0, 1, 1];
                        }
                        if (him.name2) {
                            ids[2]++;
                            if (him.name2.includes('dy_')) {
                                ids[1]++;
                                ids[3]++;
                            }
                        }
                        return ids;
                    };
                    var players = game.players;
                    var initpack = [];
                    var links = lib.dy_character_links;
                    var ischanged = [];
                    var zhuchanged = [];
                    var randplayers = randomBox(game.players);
                    var friendrandnum =
                        parseFloat(lib.config.extension_电影设置_linkfriend) /
                        Math.max(
                            1,
                            game.countPlayer(function (current) {
                                if (current == game.me || current.identity == 'zhu') return false;
                                if (!checkdy(current) || checkdy(current)[0] == 1) return false;
                                return current.isFriendsOf(player);
                            }) +
                            game.countPlayer(function (current) {
                                if (current == game.me || current.identity == 'zhu') return false;
                                if (!checkdy(current) || checkdy(current)[1] == 1) return false;
                                return current.isFriendsOf(player) && current.name2;
                            })
                        );
                    if (parseFloat(lib.config.extension_电影设置_linkfriend) == 100) friendrandnum = 100;
                    var enemyrandnum =
                        parseFloat(lib.config.extension_电影设置_linkenemy) /
                        Math.max(
                            1,
                            game.countPlayer(function (current) {
                                if (current == game.me || current.identity == 'zhu') return false;
                                if (!checkdy(current) || checkdy(current)[0] == 1) return false;
                                return current.isEnemiesOf(player);
                            }) +
                            game.countPlayer(function (current) {
                                if (current == game.me || current.identity == 'zhu') return false;
                                if (!checkdy(current) || checkdy(current)[1] == 1) return false;
                                return current.isEnemiesOf(player) && current.name2;
                            })
                        );
                    if (parseFloat(lib.config.extension_电影设置_linkenemy) == 100) enemyrandnum = 100;
                    var neutralrandnum =
                        parseFloat(lib.config.extension_电影设置_linkneutral) /
                        Math.max(
                            1,
                            game.countPlayer(function (current) {
                                if (current == game.me || current.identity == 'zhu') return false;
                                if (!checkdy(current) || checkdy(current)[0] == 1) return false;
                                return current.isEnemiesOf(player) && current.isFriendsOf(player);
                            }) +
                            game.countPlayer(function (current) {
                                if (current == game.me || current.identity == 'zhu') return false;
                                if (!checkdy(current) || checkdy(current)[1] == 1) return false;
                                return current.isEnemiesOf(player) && current.isFriendsOf(player) && current.name2;
                            })
                        );
                    if (parseFloat(lib.config.extension_电影设置_linkneutral) == 100) neutralrandnum = 100;
                    for (var i of players) {
                        var playeri = randi;
                        if (zhuchanged.includes(playeri)) continue;
                        if (playeri != game.me && lib.config.extension_电影设置_linkmod == 'me') continue;
                        if (!checkdy(playeri) || checkdy(playeri)[3] == 0) continue;
                        if (!links[playeri.name]) continue;
                        var randplayersj = randomBox(game.players);
                        if (checkdy(playeri)[0])
                            for (var j = 0; j < players.length; j++) {
                                var playerj = randplayersj[j];
                                if (ischanged.includes(playerj)) continue;
                                if (playerj == game.me || playerj.identity == 'zhu' || !checkdy(playerj)) continue;
                                if (checkdy(playerj)[2] - checkdy(playerj)[3] == 0) continue;
                                if (playerj.isFriendsOf(playeri)) {
                                    if (!links[playeri.name].friend) continue;
                                    if (!links[playeri.name].friend.length) continue;
                                    var jinfo = checkdy(playerj);
                                    var friends = links[playeri.name].friend;
                                    var chtes = links[playeri.name].friend.slice(0);
                                    var friendsnum = links[playeri.name].friend.length;
                                    for (var k = 0; k < friendsnum; k++) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                if (current.name == 'unknown') return false;
                                                if (current.name == chtes[k]) return true;
                                                if (current.name2) {
                                                    if (current.name2 == chtes[k]) return true;
                                                }
                                                return false;
                                            }) ||
                                            !lib.character[chtes[k]]) {
                                            friends.remove(chtes[k]);
                                        }
                                    }
                                    if (friends.length < 1) continue;
                                    if (friendrandnum >= Math.random() * 100) {
                                        var nums = 0;
                                        if (!checkdy(playerj)[0]) nums = 1;
                                        if (!checkdy(playerj)[1] && checkdy(playerj)[2] > 1) nums += 2;
                                        if (nums == 3) nums = [1, 2].randomGet();
                                        if (nums < 2) {
                                            playerj.init(friends.randomGet());
                                            zhuchanged.push(playerj);
                                        } else {
                                            playerj.init(playerj.name, friends.randomGet());
                                        }
                                        ischanged.push(playerj);
                                    }
                                } else if (playerj.isEnemiesOf(playeri)) {
                                    if (!links[playeri.name].enemy) continue;
                                    if (!links[playeri.name].enemy.length) continue;
                                    var jinfo = checkdy(playerj);
                                    var enemies = links[playeri.name].enemy;
                                    var chtes = links[playeri.name].enemy.slice(0);
                                    var enemiesnum = links[playeri.name].enemy.length;
                                    for (var k = 0; k < enemiesnum; k++) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                if (current.name == 'unknown') return false;
                                                if (current.name == chtes[k]) return true;
                                                if (current.name2) {
                                                    if (current.name2 == chtes[k]) return true;
                                                }
                                                return false;
                                            }) ||
                                            !lib.character[chtes[k]]) {
                                            enemies.remove(chtes[k]);
                                        }
                                    }
                                    if (enemies.length < 1) continue;
                                    if (enemyrandnum >= Math.random() * 100) {
                                        var nums = 0;
                                        if (!checkdy(playerj)[0]) nums = 1;
                                        if (!checkdy(playerj)[1] && checkdy(playerj)[2] > 1) nums += 2;
                                        if (nums == 3) nums = [1, 2].randomGet();
                                        if (nums < 2) {
                                            playerj.init(enemies.randomGet());
                                            zhuchanged.push(playerj);
                                        } else {
                                            playerj.init(playerj.name, enemies.randomGet());
                                        }
                                        ischanged.push(playerj);
                                    }
                                } else {
                                    if (!links[playeri.name].neutral) continue;
                                    if (!links[playeri.name].neutral.length) continue;
                                    var jinfo = checkdy(playerj);
                                    var neutrals = links[playeri.name].neutral;
                                    var chtes = links[playeri.name].neutral.slice(0);
                                    var neutralsnum = links[playeri.name].neutral.length;
                                    for (var k = 0; k < neutralsnum; k++) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                if (current.name == 'unknown') return false;
                                                if (current.name == chtes[k]) return true;
                                                if (current.name2) {
                                                    if (current.name2 == chtes[k]) return true;
                                                }
                                                return false;
                                            }) ||
                                            !lib.character[chtes[k]]) {
                                            neutrals.remove(chtes[k]);
                                        }
                                    }
                                    if (neutrals.length < 1) continue;
                                    if (neutralrandnum >= Math.random() * 100) {
                                        var nums = 0;
                                        if (!checkdy(playerj)[0]) nums = 1;
                                        if (!checkdy(playerj)[1] && checkdy(playerj)[2] > 1) nums += 2;
                                        if (nums == 3) nums = [1, 2].randomGet();
                                        if (nums < 2) {
                                            playerj.init(neutrals.randomGet());
                                            zhuchanged.push(playerj);
                                        } else {
                                            playerj.init(playerj.name, neutrals.randomGet());
                                        }
                                        ischanged.push(playerj);
                                    }
                                }
                            }
                        if (checkdy(playeri)[1])
                            for (var j = 0; j < players.length; j++) {
                                var playerj = randplayersj[j];
                                if (ischanged.includes(playerj)) continue;
                                if (playerj == game.me || playerj.identity == 'zhu' || !checkdy(playerj)) continue;
                                if (checkdy(playerj)[2] - checkdy(playerj)[3] == 0) continue;
                                if (playerj.isFriendsOf(playeri)) {
                                    if (!links[playeri.name2].friend) continue;
                                    if (!links[playeri.name2].friend.length) continue;
                                    var jinfo = checkdy(playerj);
                                    var friends = links[playeri.name2].friend;
                                    var chtes = links[playeri.name].friend.slice(0);
                                    var friendsnum = links[playeri.name2].friend.length;
                                    for (var k = 0; k < friendsnum; k++) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                if (current.name == 'unknown') return false;
                                                if (current.name == chtes[k]) return true;
                                                if (current.name2) {
                                                    if (current.name2 == chtes[k]) return true;
                                                }
                                                return false;
                                            }) ||
                                            !lib.character[chtes[k]]) {
                                            friends.remove(chtes[k]);
                                        }
                                    }
                                    if (friends.length < 1) continue;
                                    if (friendrandnum >= Math.random() * 100) {
                                        var nums = 0;
                                        if (!checkdy(playerj)[0]) nums = 1;
                                        if (!checkdy(playerj)[1] && checkdy(playerj)[2] > 1) nums += 2;
                                        if (nums == 3) nums = [1, 2].randomGet();
                                        if (nums < 2) {
                                            playerj.init(friends.randomGet());
                                            zhuchanged.push(playerj);
                                        } else {
                                            playerj.init(playerj.name, friends.randomGet());
                                        }
                                        ischanged.push(playerj);
                                    }
                                } else if (playerj.isEnemiesOf(playeri)) {
                                    if (!links[playeri.name2].enemy) continue;
                                    if (!links[playeri.name2].enemy.length) continue;
                                    var jinfo = checkdy(playerj);
                                    var enemies = links[playeri.name2].enemy;
                                    var chtes = links[playeri.name].enemy.slice(0);
                                    var enemiesnum = links[playeri.name2].enemy.length;
                                    for (var k = 0; k < enemiesnum; k++) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                if (current.name == 'unknown') return false;
                                                if (current.name == chtes[k]) return true;
                                                if (current.name2) {
                                                    if (current.name2 == chtes[k]) return true;
                                                }
                                                return false;
                                            }) ||
                                            !lib.character[chtes[k]]) {
                                            enemies.remove(chtes[k]);
                                        }
                                    }
                                    if (enemies.length < 1) continue;
                                    if (enemyrandnum >= Math.random() * 100) {
                                        var nums = 0;
                                        if (!checkdy(playerj)[0]) nums = 1;
                                        if (!checkdy(playerj)[1] && checkdy(playerj)[2] > 1) nums += 2;
                                        if (nums == 3) nums = [1, 2].randomGet();
                                        if (nums < 2) {
                                            playerj.init(enemies.randomGet());
                                            zhuchanged.push(playerj);
                                        } else {
                                            playerj.init(playerj.name, enemies.randomGet());
                                        }
                                        ischanged.push(playerj);
                                    }
                                } else {
                                    if (!links[playeri.name2].neutral) continue;
                                    if (!links[playeri.name2].neutral.length) continue;
                                    var jinfo = checkdy(playerj);
                                    var neutrals = links[playeri.name2].neutral;
                                    var chtes = links[playeri.name].neutral.slice(0);
                                    var neutralsnum = links[playeri.name2].neutral.length;
                                    for (var k = 0; k < neutralsnum; k++) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                if (current.name == 'unknown') return false;
                                                if (current.name == chtes[k]) return true;
                                                if (current.name2) {
                                                    if (current.name2 == chtes[k]) return true;
                                                }
                                                return false;
                                            }) ||
                                            !lib.character[chtes[k]]) {
                                            neutrals.remove(chtes[k]);
                                        }
                                    }
                                    if (neutrals.length < 1) continue;
                                    if (neutralrandnum >= Math.random() * 100) {
                                        var nums = 0;
                                        if (!checkdy(playerj)[0]) nums = 1;
                                        if (!checkdy(playerj)[1] && checkdy(playerj)[2] > 1) nums += 2;
                                        if (nums == 3) nums = [1, 2].randomGet();
                                        if (nums < 2) {
                                            playerj.init(neutrals.randomGet());
                                            zhuchanged.push(playerj);
                                        } else {
                                            playerj.init(playerj.name, neutrals.randomGet());
                                        }
                                        ischanged.push(playerj);
                                    }
                                }
                            }
                    }
                },
            };
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '电影乱入',
                    connect: true,
                    character: {
                        mny_dy_longdi: ['male', 'jin', 4, ['mny_dy_xianmu', 'mny_dy_guidi'], ['boss', 'vip_name:千古一帝', 'des:<br>♕「角色定位」<br>核心型输出,前期能力较一般,需要队友保护到后期觉醒,觉醒后能力非常强,此时可以自由发挥.<br><br>♗「能力分布」<br>输出:◆◆◆◆◆◇◇<br>控牌:◆◆◆◆◇◇◇<br>辅助:◆◇◇◇◇◇◇<br>抗性:◆◆◆◇◇◇◇<br>潜力:◆◆◆◆◆◆◆<br><br>♘「影视来源」<li>来自<木乃伊III:龙帝之墓><li>背景故事:<br>2000多年前,残暴虐杀的始皇帝终遭女巫诅咒,和兵将一起被变成了兵马俑,封印在地下宫殿中.如今,隐居于英国牛津郡过着平静生活的冒险家里克和妻子伊芙琳,又一次得到了<任务’--把一件从中国上海博物馆偷走的珍贵文物物归原主.他们的儿子阿历克斯已长大,里克带着妻儿来到中国的里克,与伊芙琳的哥哥乔纳森重逢,而他们这时惊惧地发现当年被封印的帝王竟被唤醒,沉睡多年的他不仅神力过人,且誓言要让世人皆陷暴政!一场惊心动魄的大战随即开始.', 'hiddenSkill']],
                        mny_dy_init_longdi: ['male', 'shu', 4, ['mny_dy_shalu', 'mny_dy_mishu', 'mny_dy_changsheng'], ['des:<br>♕「角色定位」<br>全能型输出,具有一定的自保和输出能力,可以先手跳身份.<br><br>♗「能力分布」<br>输出:◆◆◆◆◆◇◇<br>控牌:◆◆◆◇◇◇◇<br>辅助:◇◇◇◇◇◇◇<br>抗性:◆◆◆◆◆◇◇<br>潜力:◆◆◇◇◇◇◇<br><br>♘「影视来源」<li>来自<木乃伊III:龙帝之墓><li>背景故事:<br>2000多年前,残暴虐杀的始皇帝终遭女巫诅咒,和兵将一起被变成了兵马俑,封印在地下宫殿中.如今,隐居于英国牛津郡过着平静生活的冒险家里克和妻子伊芙琳,又一次得到了<任务’--把一件从中国上海博物馆偷走的珍贵文物物归原主.他们的儿子阿历克斯已长大,里克带着妻儿来到中国的里克,与伊芙琳的哥哥乔纳森重逢,而他们这时惊惧地发现当年被封印的帝王竟被唤醒,沉睡多年的他不仅神力过人,且誓言要让世人皆陷暴政!一场惊心动魄的大战随即开始.', 'zhu']],
                        zjz_dy_t600: ['male', 'qun', 4, ['mny_dy_gangqu'], ['des:<br>♕「角色定位」<br>战士型输出,具有较强的自保能力,具有一定输出能力,需要考虑手牌搭配.<br><br>♗「能力分布」<br>输出:◆◆◆◆◇◇◇<br>控牌:◇◇◇◇◇◇◇<br>辅助:◇◇◇◇◇◇◇<br>抗性:◆◆◆◆◆◆◇<br>潜力:◇◇◇◇◇◇◇<br><br>♘「影视来源」<li>来自<终结者><li>背景故事:<br>这是一个未来的世界,天下已经由机器人来操控.机器人想完全占有这个世界,把人类赶尽杀绝,然而却遇到了顽强抵抗的人类精英康纳.于是,终结者机器人T-800受命回到1984年,杀害康纳母亲莎拉,目的是灭掉康纳的出生. 康纳得知后,火速派战士雷斯前往救援.雷斯来到1984年的洛杉矶,及时搭救了被机器人追杀的莎拉——她当时还是一个大学生.然而,莎拉把雷斯当成疯子,不相信未来机器人统治世界. 直到莎拉又一次遭到机器人追击,她才相信了这一切.奔走中她和雷斯相爱,怀上了未来的康纳,而雷斯也陷入和机器人的苦斗当中.人类世界能否从因为这场斗争改变原来的噩运？']],
                        zjz_dy_t800: ['male', 'qun', 4, ['mny_dy_gangqu', 'zjz_dy_jiangshi'], ['des:<br>♕「角色定位」<br>战士型辅助、输出,前期需要积攒手牌度过危险期,具有一定的抗性和输出能力,不宜选未知敌我身份的场.<br><br>♗「能力分布」<br>输出:◆◆◆◇◇◇◇<br>控牌:◇◇◇◇◇◇◇<br>辅助:◆◆◇◇◇◇◇<br>抗性:◆◆◆◆◆◇◇<br>潜力:◆◇◇◇◇◇◇<br><br>♘「影视来源」<li>来自<终结者II:审判日><li>背景故事:<br>超级电脑<天网>阻止人类抵抗领袖约翰·康纳诞生的行动失败,时隔13年后,在<审判日>到来之前,<天网>派出了更加先进的生化机器人T-1000从公元2029年回到洛杉矶追杀已经长大的约翰,与此同时,约翰也派出了机器人T-800回去保护年幼的自己.此时,萨拉·康纳因为怪异的言行而住进了精神疗养院,约翰则和养父母住在一起,行为叛逆.T-800找到他们,在逃避T-1000追杀过程中,获得了二人的信任.为了改变未来的历史,挽救人类的命运,萨拉、约翰和T-800 Model 101找到了<天网>之父,迈尔斯·戴森,说服他销毁一切有关<天网>的资料,此时,警察和T-1000同时赶来,他们陷入了多方争斗中.']],
                        zjz_dy_t1000: ['male', 'qun', 4, ['zjz_dy_yequ', 'zjz_dy_jiangshi'], ['des:<br>♕「角色定位」<br>战士型辅助,前期需要积攒手牌度过危险期,具有一定的抗性和过牌能力,不宜选未知敌我身份的场.<br><br>♗「能力分布」<br>输出:◆◆◇◇◇◇◇<br>控牌:◆◆◇◇◇◇◇<br>辅助:◆◆◆◇◇◇◇<br>抗性:◆◆◆◆◆◆◇<br>潜力:◆◆◇◇◇◇◇<br><br>♘「影视来源」<li>来自<终结者II:审判日><li>背景故事:<br>超级电脑<天网>阻止人类抵抗领袖约翰·康纳诞生的行动失败,时隔13年后,在<审判日>到来之前,<天网>派出了更加先进的生化机器人T-1000从公元2029年回到洛杉矶追杀已经长大的约翰,与此同时,约翰也派出了机器人T-800回去保护年幼的自己.此时,萨拉·康纳因为怪异的言行而住进了精神疗养院,约翰则和养父母住在一起,行为叛逆.T-800找到他们,在逃避T-1000追杀过程中,获得了二人的信任.为了改变未来的历史,挽救人类的命运,萨拉、约翰和T-800 Model 101找到了<天网>之父,迈尔斯·戴森,说服他销毁一切有关<天网>的资料,此时,警察和T-1000同时赶来,他们陷入了多方争斗中.']],
                        zjz_dy_tx: ['female', 'qun', 3, ['zjz_dy_taiqu', 'zjz_dy_jiangshi'], ['des:<br>♕「角色定位」<br>战士型辅助、输出,对手牌依赖较高,前期需要积攒手牌度过危险期,具有较高的抗性和输出能力,不宜选未知敌我身份的对局.<br><br>♗「能力分布」<br>输出:◆◆◆◆◇◇◇<br>控牌:◆◆◆◇◇◇◇<br>辅助:◆◆◆◆◇◇◇<br>抗性:◆◆◆◆◆◆◆<br>潜力:◆◆◇◇◇◇◇<br><br>♘「影视来源」<li>来自<终结者III><li>背景故事:<br>10年之后,此时约翰·康纳已经22岁,他的母亲去世后,他过着隐姓埋名的生活,不愿意面对即将到来的命运.但是,命运并不以他的意志为转移,<天网>经历了两个失败之后,派出了更为先进的T-X终结者来追杀他,人类也同样送回了T-800改良后的终结者T-850保护约翰·康纳.约翰巧遇了儿时的伙伴,兽医凯特·布鲁斯特,凯特的父亲是美国军方<天网>系统的负责人,她本人也将成为人类反抗军的副统领,理所当然成了T-X的打击对象.二人在T-850的保护下,开始了逃亡之路.同时,美国电脑系统病毒入侵,人类束手无策之下准备启用<天网>,一旦<天网>接管美国军方防御系统,人类将首当其冲的被消灭.面对已经发生的未来,约翰·康纳和凯特·布鲁斯特决定奋起反抗,在T-850的帮助下,他们将又一次改变人类的命运.']],
                        mny_dy_ahmanet: ['female', 'wei', 3, ['mny_dy_sizhou', 'mny_dy_zonghun', 'mny_dy_jishen'], ['des:<br>♕「角色定位」<br>核心型法师、辅助,多人局才能发挥出优势,需要队友配合解铁索连环,后期帮助队友觉醒后能力强大,作用不可忽视.<br><br>♗「能力分布」<br>输出:◇◇◇◇◇◇◇<br>控牌:◆◆◇◇◇◇◇<br>辅助:◆◆◆◆◆◇◇<br>抗性:◆◆◆◆◆◆◇<br>潜力:◆◆◆◆◇◇◇<br><br>♘「影视来源」<li>来自<新木乃伊><li>背景故事:<br>埃及公主安玛奈特为了夺权,和死神塞特达成协议,死神塞特还阳后,安玛奈特将成为埃及女王;然而计划失败,安玛奈特被制作成木乃伊.时间来到了新世界,一名叫尼克·摩顿的海豹突击队成员,在执行任务期间,意外地带着自己的小队闯入一个地下古墓;尼克无意中释放了安玛奈特的灵魂及已风干但保存较为完好的木乃伊,因而被安玛奈特选中作为死神塞特的新人选.遗恨千年的安玛奈特重返人间,誓要在新世界再建属于她的埃及王朝.为了阻止这个可怕的阴谋,尼克与考古学家珍妮·哈尔西及<博见部>联手对抗安玛奈特.最后尼克英雄救美,牺牲了自己但变成了死神塞特,他在击杀了安玛奈特后前往埃及去寻找如何破解自己身上的诅咒.....']],
                        hkdg_dy_neo: ['male', 'wu', 4, ['hkdg_dy_juzhen', 'hkdg_dy_jueze'], ['des:<br>♕「角色定位」<br>爆发型法师,可以通过多人局配合女性队友获得胜利,打法比较灵活,上手具有一定难度.<br><br>♗「能力分布」<br>输出:◇◇◇◇◇◇◇<br>控牌:◇◇◇◇◇◇◇<br>辅助:◇◇◇◇◇◇◇<br>抗性:◆◆◆◇◇◇◇<br>潜力:◆◆◆◆◆◆◆<br><br>♘「影视来源」<li>来自<黑客帝国><li>背景故事:<br>在矩阵中生活的一名年轻的网络黑客尼奥发现,看似正常的现实世界实际上似乎被某种力量控制着,尼奥便在网络上调查此事.而在现实中生活的人类反抗组织的船长墨菲斯, 也一直在矩阵中寻找传说的救世主,就这样在人类反抗组织成员崔妮蒂的指引下,两人见面了,尼奥也在墨菲斯的指引下,回到了真正的现实中,逃离了矩阵,这才了解到,原来他一直活在虚拟世界当中.']],
                        hkdg_dy_init_neo: ['male', 'shen', 4, ['hkdg_dy_juzhen', 'hkdg_dy_yuanjie', 'hkdg_dy_tequan'], ['boss', 'vip_name:救世之主', 'des:<br>♕「角色定位」<br>战士型输出,拥有强硬命中、免疫负面效果、抵消自己和队友伤害的技能,可攻可守,能力不可忽视,缺点是没有过牌能力.<br><br>♗「能力分布」<br>输出:◆◆◆◆◆◆◇<br>控牌:◇◇◇◇◇◇◇<br>辅助:◆◆◆◆◆◇◇<br>抗性:◆◆◆◆◆◆◇<br>潜力:◆◆◆◇◇◇◇<br><br>♘「影视来源」<li>来自<黑客帝国II:重装上阵><li>背景故事:<br>在<黑客帝国>系列电影最后一集中,延续上集<黑客帝国2:重装上阵>的故事,并揭晓机器与人类的最终命运.面对如潮的电子乌贼,人类城市危在旦夕,墨菲斯和崔妮蒂等欲与入侵者决一死战.此时,<救世主>尼奥的身体和思想却意外分离,后者再度陷入到<母体>中.墨菲斯和崔妮蒂也不得不回到<母体>和守护天使一起寻找他.']],
                        hkdg_dy_smith: ['male', 'wu', 4, ['hkdg_dy_juzhen', 'hkdg_dy_fuzhi'], ['des:<br>♕「角色定位」<br>全能型法师,可以将敌人转化为队友,且能造成持续的伤害效果,拥有不俗的伤害能力,通常前期会被敌方集火压制发挥.<br><br>♗「能力分布」<br>输出:◆◆◆◆◆◆◇<br>控牌:◇◇◇◇◇◇◇<br>辅助:◆◆◇◇◇◇◇<br>抗性:◇◇◇◇◇◇◇<br>潜力:◆◆◆◆◆◆◆<br><br>♘「影视来源」<li>来自<黑客帝国III:矩阵革命><li>背景故事:<br>在<黑客帝国>系列电影最后一集中,延续上集<黑客帝国2:重装上阵>的故事,并揭晓机器与人类的最终命运.面对如潮的电子乌贼,人类城市危在旦夕,墨菲斯和崔妮蒂等欲与入侵者决一死战.此时,<救世主>尼奥的身体和思想却意外分离,后者再度陷入到<母体>中.墨菲斯和崔妮蒂也不得不回到<母体>和守护天使一起寻找他.']],
                        hkdg_dy_morpheus: ['male', 'wu', 4, ['hkdg_dy_juzhen', 'hkdg_dy_xian', 'hkdg_dy_jiejiu'], ['des:<br>♕「角色定位」<br>协助型辅助,辅助能力较强,能给队友增加抗伤效果,可以延缓队友的伤亡,具有一定技巧性.<br><br>♗「能力分布」<br>输出:◇◇◇◇◇◇◇<br>控牌:◇◇◇◇◇◇◇<br>辅助:◆◆◆◆◆◆◇<br>抗性:◆◆◆◆◇◇◇<br>潜力:◇◇◇◇◇◇◇<br><br>♘「影视来源」<li>来自<黑客帝国><li>背景故事:<br>在矩阵中生活的一名年轻的网络黑客尼奥发现,看似正常的现实世界实际上似乎被某种力量控制着,尼奥便在网络上调查此事.而在现实中生活的人类反抗组织的船长墨菲斯, 也一直在矩阵中寻找传说的救世主,就这样在人类反抗组织成员崔妮蒂的指引下,两人见面了,尼奥也在墨菲斯的指引下,回到了真正的现实中,逃离了矩阵,这才了解到,原来他一直活在虚拟世界当中.']],
                        hkdg_dy_trinity: ['female', 'wu', 3, ['hkdg_dy_juzhen', 'hkdg_dy_xian', 'hkdg_dy_haike'], ['des:<br>♕「角色定位」<br>协助型辅助,抗性和救援能力较强,也可以承担主要抗伤类型的作用,具有一定技巧性.<br><br>♗「能力分布」<br>输出:◇◇◇◇◇◇◇<br>控牌:◇◇◇◇◇◇◇<br>辅助:◆◆◆◆◆◇◇<br>抗性:◆◆◆◆◆◇◇<br>潜力:◇◇◇◇◇◇◇<br><br>♘「影视来源」<li>来自<黑客帝国><li>背景故事:<br>在矩阵中生活的一名年轻的网络黑客尼奥发现,看似正常的现实世界实际上似乎被某种力量控制着,尼奥便在网络上调查此事.而在现实中生活的人类反抗组织的船长墨菲斯, 也一直在矩阵中寻找传说的救世主,就这样在人类反抗组织成员崔妮蒂的指引下,两人见面了,尼奥也在墨菲斯的指引下,回到了真正的现实中,逃离了矩阵,这才了解到,原来他一直活在虚拟世界当中.']],
                        mny_dy_ancksunamun: ['female', 'wei', 3, ['mny_dy_juechong', 'mny_dy_jinluan'], ['des:<br>♕「角色定位」<br>协助型输出,具有较好的过牌能力,可以破坏敌方控牌,配合队友或自己输出,弱点是保命能力比较一般.<br><br>♗「能力分布」<br>输出:◆◆◇◇◇◇◇<br>控牌:◆◆◆◆◆◇◇<br>辅助:◆◆◇◇◇◇◇<br>抗性:◆◇◇◇◇◇◇<br>潜力:◇◇◇◇◇◇◇<br><br>♘「影视来源」<li>来自<木乃伊><li>背景故事:<br>公元前1719年,埃及底比斯城,邪恶的巫师埃默霍特普和法老妻子阿克苏娜的恋情曝光了.阿克苏娜自杀了,而埃默霍特普绝望中在汉姆奈普特拉——死亡之城的举动亵渎了神灵.因为他不光彩的行动,他受到终极诅咒会成为僵尸,但永远也不会死去.只有当他腐烂的身体消失他才会得到解脱.当埃默霍特普随着石棺的合上而恐惧地尖叫时,诅咒已经随着埋下,他的邪恶、复仇的心在黑暗中越来越强大.埃默霍特普生不如死地过了3000年.1923年,活跃的军人理查德·奥康奈尔和战友贝尼在一次战役中蹒跚地走过曾经是汉姆奈普特拉的废墟.几年后,当奥康奈尔在监狱中等待一个几乎肯定的审判时,忽然觉得自己知晓汉姆奈普特拉废墟也许可以救自己的命.在传说中,汉姆奈普特拉埋葬着大量的财富, 寻宝者和地理学家都为这个传说而疯狂.奥康奈尔找到了几乎不算同伙的美丽埃及学家伊夫林和她兄弟乔纳森.三人离开了开罗,来到尼罗河,穿越了撒哈拉大沙漠,并与一队怀有恶意的军队相遇.他们在路上,还发现一队美国流浪者与他们有同样的目的,还有阿德斯贝,一群保护宗教墓地,防止埃默霍特普重生的神秘战士的领袖,也阻止他们.贪婪的美国寻宝者揭开了地下的诅咒.正如预言的,埃默霍特普可怕的力量展现为木乃伊的形式.他的力量不是能够想象的,他能够将埃及曾经爆发的瘟疫重新在大地上流行.探险者们成为了木乃伊诅咒的牺牲品.那些存活的人必须进行最后一次不顾一切的尝试,阻止木乃伊完全重生成为不可战胜的邪恶力量,也阻止艾弗琳成为埃默霍特普认为的爱人:阿克苏娜.']],
                        mny_dy_moduniran: ['male', 'wei', 4, ['mny_dy_xihun', 'mny_dy_kuangsha', 'mny_dy_huanhun'], ['des:<br>♕「角色定位」<br>核心型法师,具有一定的保命和输出能力,可以大规模破坏敌方控牌,配合队友或自己输出,弱点是没有过牌能力且释放技能对牌的需求量大.<br><br>♗「能力分布」<br>输出:◆◆◇◇◇◇◇<br>控牌:◆◆◆◇◇◇◇<br>辅助:◆◆◆◆◆◇◇<br>抗性:◆◆◇◇◇◇◇<br>潜力:◆◆◆◆◇◇◇<br><br>♘「影视来源」<li>来自<木乃伊><li>背景故事:<br>公元前1719年,埃及底比斯城,邪恶的巫师埃默霍特普和法老妻子阿克苏娜的恋情曝光了.阿克苏娜自杀了,而埃默霍特普绝望中在汉姆奈普特拉——死亡之城的举动亵渎了神灵.因为他不光彩的行动,他受到终极诅咒会成为僵尸,但永远也不会死去.只有当他腐烂的身体消失他才会得到解脱.当埃默霍特普随着石棺的合上而恐惧地尖叫时,诅咒已经随着埋下,他的邪恶、复仇的心在黑暗中越来越强大.埃默霍特普生不如死地过了3000年.1923年,活跃的军人理查德·奥康奈尔和战友贝尼在一次战役中蹒跚地走过曾经是汉姆奈普特拉的废墟.几年后,当奥康奈尔在监狱中等待一个几乎肯定的审判时,忽然觉得自己知晓汉姆奈普特拉废墟也许可以救自己的命.在传说中,汉姆奈普特拉埋葬着大量的财富, 寻宝者和地理学家都为这个传说而疯狂.奥康奈尔找到了几乎不算同伙的美丽埃及学家伊夫林和她兄弟乔纳森.三人离开了开罗,来到尼罗河,穿越了撒哈拉大沙漠,并与一队怀有恶意的军队相遇.他们在路上,还发现一队美国流浪者与他们有同样的目的,还有阿德斯贝,一群保护宗教墓地,防止埃默霍特普重生的神秘战士的领袖,也阻止他们.贪婪的美国寻宝者揭开了地下的诅咒.正如预言的,埃默霍特普可怕的力量展现为木乃伊的形式.他的力量不是能够想象的,他能够将埃及曾经爆发的瘟疫重新在大地上流行.探险者们成为了木乃伊诅咒的牺牲品.那些存活的人必须进行最后一次不顾一切的尝试,阻止木乃伊完全重生成为不可战胜的邪恶力量,也阻止艾弗琳成为埃默霍特普认为的爱人:阿克苏娜.']],
                        qnyh_dy_yanchixia: ['male', 'shu', 4, ['qnyh_dy_faqi', 'qnyh_dy_jiqian', 'qnyh_dy_haori', 'qnyh_dy_yujian', 'qnyh_dy_guizong'], ['des:<br>♕「角色定位」<br>全能型法师,具有很强的保命、输出和辅助能力,控场能力极强,可以单独战斗也可以配合队友输出,操作灵活但需考虑自身技能释放.<br><br>♗「能力分布」<br>输出:◆◆◆◆◆◇◇<br>控牌:◇◇◇◇◇◇◇<br>辅助:◆◆◆◆◆◇◇<br>抗性:◆◆◆◆◆◇◇<br>潜力:◆◆◆◆◆◇◇<br><br>♘「影视来源」<li>来自<倩女幽魂I:妖魔道><li>背景故事:<br>宁采臣赴郭北县收账,逢大雨,躲入传说纷纭的兰若寺投宿一宿,但为寺内道士燕赤霞所拒,于是宁采臣偷偷潜入寺中.入夜,宁采臣被一阵琴音所吸引,邂逅少女聂小倩.聂小倩突露杀机,幸燕赤霞赶到,救下宁采臣一命.聂小倩感其正直善良,逐渐心生爱意,但被燕赤霞阻止.宁采臣却误认燕赤霞为杀人犯,欲与聂小倩逃走.树妖姥姥逼聂小倩杀宁采臣,但聂小倩始终不肯,于是姥姥命众魔欲杀宁采臣与聂小倩,燕赤霞出现救下二人,树妖姥姥与燕赤霞大战之后被其掌心雷封印了一百年.此时宁采臣才得知聂小倩原来是一个幽魂,因尸骨被弃荒野而受姥姥所控制,每夜四处寻找壮男为姥姥吸取阳精,增益延寿.为免聂小倩再次受辱,宁采臣答应将其尸骨送回乡间安葬转世投胎.不料聂小倩却被地府老妖抢去为妻.燕赤霞经不住宁采臣苦苦相求,决定再次出手,终于救回小倩.']],
                        qnyh_dy_zuoqianhu: ['male', 'shu', 4, ['qnyh_dy_yanling', 'qnyh_dy_podao', 'qnyh_dy_feiren'], ['des:<br>♕「角色定位」<br>协助型输出,具有非常高的输出能力,灵活性较强,没有过牌和保命技能,操作上手难度大.<br><br>♗「能力分布」<br>输出:◆◆◆◆◆◆◆<br>控牌:◆◆◇◇◇◇◇<br>辅助:◆◇◇◇◇◇◇<br>抗性:◇◇◇◇◇◇◇<br>潜力:◆◆◆◆◆◇◇<br><br>♘「影视来源」<li>来自<倩女幽魂II:人间道><li>背景故事:<br>故事发生于一个奸臣当道,朝政混乱,民生困苦的时代,宁采臣与专斩妖除魔的好友燕赤霞分手后路经一个半荒弃的市场,无辜被牵连入狱.幸得狱中通天博学士诸葛卧龙相助逃狱,逃狱后与年青鬼马道士知秋一叶纠缠上,从误会以至相交,后一起投宿于一荒废山庄.山庄中阴森恐怖,隐藏着一只巨尸,然巨尸未现,两人已先与一班鬼大打起来.经一番解释,始知这班鬼皆为人扮,尽是忠义之士.在傅清风及其妹妹傅月池的带领下,埋伏山庄,拯救被陷害入狱,被押上京受审的父亲——兵都尚书傅天仇.众人因误认宁为诸葛卧龙前辈而对其尊敬有加.宁无从解释之际,又觉清风貌似旧爱小倩,以为其为小倩投胎,遂将错就错,留下以便试探真假.山庄中,巨尸突然出现,知秋一叶救宁出险境,并斩巨尸成半截,然巨尸上半身为患人间,遂追逐巨尸而去.宁无奈,留在山庄,与壮士商讨营救傅天仇之计划.']],
                        qnyh_dy_puducihang: ['male', 'wei', 2, ['qnyh_dy_fanjing', 'qnyh_dy_xunyin', 'qnyh_dy_puzhao', 'qnyh_dy_huoguo', 'qnyh_dy_tuotai'], ['boss', 'vip_name:祸国妖僧', 'des:<br>♕「角色定位」<br>协助型法师,具有非常高的控制和反伤能力,但是发挥运气依赖非常大,同时实力也与牌堆锦囊牌构成相关,操作难度很大.<br><br>♗「能力分布」<br>输出:◆◆◆◇◇◇◇<br>控牌:◆◇◇◇◇◇◇<br>辅助:◆◆◆◆◆◇◇<br>抗性:◆◆◆◆◇◇◇<br>潜力:◆◆◆◆◆◆◆<br><br>♘「影视来源」<li>来自<倩女幽魂II:人间道><li>背景故事:<br>故事发生于一个奸臣当道,朝政混乱,民生困苦的时代,宁采臣与专斩妖除魔的好友燕赤霞分手后路经一个半荒弃的市场,无辜被牵连入狱.幸得狱中通天博学士诸葛卧龙相助逃狱,逃狱后与年青鬼马道士知秋一叶纠缠上,从误会以至相交,后一起投宿于一荒废山庄.山庄中阴森恐怖,隐藏着一只巨尸,然巨尸未现,两人已先与一班鬼大打起来.经一番解释,始知这班鬼皆为人扮,尽是忠义之士.在傅清风及其妹妹傅月池的带领下,埋伏山庄,拯救被陷害入狱,被押上京受审的父亲——兵都尚书傅天仇.众人因误认宁为诸葛卧龙前辈而对其尊敬有加.宁无从解释之际,又觉清风貌似旧爱小倩,以为其为小倩投胎,遂将错就错,留下以便试探真假.山庄中,巨尸突然出现,知秋一叶救宁出险境,并斩巨尸成半截,然巨尸上半身为患人间,遂追逐巨尸而去.宁无奈,留在山庄,与壮士商讨营救傅天仇之计划.', 'zhu']],
                        qnyh_dy_init_puducihang: ['male', 'wei', 3, [], ['des:<br>♕「角色定位」<br>协助型法师,具有非常高的控制和反伤能力,但是发挥运气依赖非常大,同时实力也与牌堆锦囊牌构成相关,操作难度很大.<br><br>♗「能力分布」<br>输出:◆◆◆◆◇◇◇<br>控牌:◆◆◇◇◇◇◇<br>辅助:◆◆◆◆◆◇◇<br>抗性:◆◆◆◆◇◇◇<br>潜力:◆◆◆◆◆◆◆<br><br>♘「影视来源」<li>来自<倩女幽魂II:人间道><li>背景故事:<br>故事发生于一个奸臣当道,朝政混乱,民生困苦的时代,宁采臣与专斩妖除魔的好友燕赤霞分手后路经一个半荒弃的市场,无辜被牵连入狱.幸得狱中通天博学士诸葛卧龙相助逃狱,逃狱后与年青鬼马道士知秋一叶纠缠上,从误会以至相交,后一起投宿于一荒废山庄.山庄中阴森恐怖,隐藏着一只巨尸,然巨尸未现,两人已先与一班鬼大打起来.经一番解释,始知这班鬼皆为人扮,尽是忠义之士.在傅清风及其妹妹傅月池的带领下,埋伏山庄,拯救被陷害入狱,被押上京受审的父亲——兵都尚书傅天仇.众人因误认宁为诸葛卧龙前辈而对其尊敬有加.宁无从解释之际,又觉清风貌似旧爱小倩,以为其为小倩投胎,遂将错就错,留下以便试探真假.山庄中,巨尸突然出现,知秋一叶救宁出险境,并斩巨尸成半截,然巨尸上半身为患人间,遂追逐巨尸而去.宁无奈,留在山庄,与壮士商讨营救傅天仇之计划.']],
                        qnyh_dy_init2_puducihang: ['male', 'wei', 4, [], ['des:<br>♕「角色定位」<br>协助型法师,具有非常高的控制和反伤能力,但是发挥运气依赖非常大,同时实力也与牌堆锦囊牌构成相关,操作难度很大.<br><br>♗「能力分布」<br>输出:◆◆◆◆◆◇◇<br>控牌:◇◇◇◇◇◇◇<br>辅助:◇◇◇◇◇◇◇<br>抗性:◆◆◆◆◆◇◇<br>潜力:◆◆◆◆◆◆◆<br><br>♘「影视来源」<li>来自<倩女幽魂II:人间道><li>背景故事:<br>故事发生于一个奸臣当道,朝政混乱,民生困苦的时代,宁采臣与专斩妖除魔的好友燕赤霞分手后路经一个半荒弃的市场,无辜被牵连入狱.幸得狱中通天博学士诸葛卧龙相助逃狱,逃狱后与年青鬼马道士知秋一叶纠缠上,从误会以至相交,后一起投宿于一荒废山庄.山庄中阴森恐怖,隐藏着一只巨尸,然巨尸未现,两人已先与一班鬼大打起来.经一番解释,始知这班鬼皆为人扮,尽是忠义之士.在傅清风及其妹妹傅月池的带领下,埋伏山庄,拯救被陷害入狱,被押上京受审的父亲——兵都尚书傅天仇.众人因误认宁为诸葛卧龙前辈而对其尊敬有加.宁无从解释之际,又觉清风貌似旧爱小倩,以为其为小倩投胎,遂将错就错,留下以便试探真假.山庄中,巨尸突然出现,知秋一叶救宁出险境,并斩巨尸成半截,然巨尸上半身为患人间,遂追逐巨尸而去.宁无奈,留在山庄,与壮士商讨营救傅天仇之计划.']],
                        qnyh_dy_zhiqiuyiye: ['male', 'shu', 4, ['qnyh_dy_kongfu', 'qnyh_dy_yuwu', 'qnyh_dy_dundi'], ['des:<br>♕「角色定位」<br>协助型法师,具有较强的控制能力,可以辅助队友转变攻势,有基本的抗伤能力防止溢伤,没有过牌且技能对手牌依赖较大,队友配合好可以有比较大的发挥.<br><br>♗「能力分布」<br>输出:◆◆◆◇◇◇◇<br>控牌:◆◇◇◇◇◇◇<br>辅助:◆◆◆◆◆◇◇<br>抗性:◆◆◇◇◇◇◇<br>潜力:◆◆◆◆◇◇◇<br><br>♘「影视来源」<li>来自<倩女幽魂II:人间道><li>背景故事:<br>故事发生于一个奸臣当道,朝政混乱,民生困苦的时代,宁采臣与专斩妖除魔的好友燕赤霞分手后路经一个半荒弃的市场,无辜被牵连入狱.幸得狱中通天博学士诸葛卧龙相助逃狱,逃狱后与年青鬼马道士知秋一叶纠缠上,从误会以至相交,后一起投宿于一荒废山庄.山庄中阴森恐怖,隐藏着一只巨尸,然巨尸未现,两人已先与一班鬼大打起来.经一番解释,始知这班鬼皆为人扮,尽是忠义之士.在傅清风及其妹妹傅月池的带领下,埋伏山庄,拯救被陷害入狱,被押上京受审的父亲——兵都尚书傅天仇.众人因误认宁为诸葛卧龙前辈而对其尊敬有加.宁无从解释之际,又觉清风貌似旧爱小倩,以为其为小倩投胎,遂将错就错,留下以便试探真假.山庄中,巨尸突然出现,知秋一叶救宁出险境,并斩巨尸成半截,然巨尸上半身为患人间,遂追逐巨尸而去.宁无奈,留在山庄,与壮士商讨营救傅天仇之计划.']],
                        qnyh_dy_baiyunchanshi: ['male', 'shu', 3, ['qnyh_dy_jinfo', 'qnyh_dy_jingang', 'qnyh_dy_xingluo', 'qnyh_dy_diting', 'qnyh_dy_sushen'], ['des:<br>♕「角色定位」<br>全能型法师,可以把握全局的控牌情况,较好的运用能有很高的发挥水平,技能会使自己的抗性降低需要再三斟酌使用.<br><br>♗「能力分布」<br>输出:◆◆◆◇◇◇◇<br>控牌:◆◆◆◇◇◇◇<br>辅助:◆◆◆◆◆◆◇<br>抗性:◆◆◆◆◇◇◇<br>潜力:◆◆◆◆◇◇◇<br><br>♘「影视来源」<li>来自<倩女幽魂III:道道道><li>背景故事:<br>十方和尚随师父白云禅师护送金佛,在兰若寺遇到女鬼小卓与小蝶.十方放走小卓,但白云却被姥姥所擒.树妖姥姥逼小卓嫁给黑山老妖,小卓向十方求助,十方掘出小卓骸骨逃出兰若寺,并在剑侠燕赤霞的帮助下救出师父.在斗法中燕赤霞与白云合力消灭了姥姥,但此时黑山老妖用黑云遮天,欲将其一网打尽.十方唯有化成佛祖金身,由小卓带着飞上天空接太阳纯阳之气,借以消灭老妖.']],
                        qnyh_dy_heishanlaoyao: ['male', 'wei', 4, ['qnyh_dy_mingfu', 'qnyh_dy_gouhun', 'qnyh_dy_guishou', 'qnyh_dy_anjie', 'qnyh_dy_wangsi'], ['boss', 'vip_name:鬼府妖王', 'des:<br>♕「角色定位」<br>核心型法师,拥有非常强力的控牌技能,可以使得附近的敌人抑制过牌,失去防御能力,并且有强控和全场伤害,对局节奏会变得很快,但是本身比较脆弱,需谨慎考虑.<br><br>♗「能力分布」<br>输出:◆◆◆◆◆◆◇<br>控牌:◆◆◆◆◆◆◇<br>辅助:◆◆◆◇◇◇◇<br>抗性:◆◇◇◇◇◇◇<br>潜力:◆◆◆◆◇◇◇<br><br>♘「影视来源」<li>来自<倩女幽魂I:妖魔道><li>背景故事:<br>宁采臣赴郭北县收账,逢大雨,躲入传说纷纭的兰若寺投宿一宿,但为寺内道士燕赤霞所拒,于是宁采臣偷偷潜入寺中.入夜,宁采臣被一阵琴音所吸引,邂逅少女聂小倩.聂小倩突露杀机,幸燕赤霞赶到,救下宁采臣一命.聂小倩感其正直善良,逐渐心生爱意,但被燕赤霞阻止.宁采臣却误认燕赤霞为杀人犯,欲与聂小倩逃走.树妖姥姥逼聂小倩杀宁采臣,但聂小倩始终不肯,于是姥姥命众魔欲杀宁采臣与聂小倩,燕赤霞出现救下二人,树妖姥姥与燕赤霞大战之后被其掌心雷封印了一百年.此时宁采臣才得知聂小倩原来是一个幽魂,因尸骨被弃荒野而受姥姥所控制,每夜四处寻找壮男为姥姥吸取阳精,增益延寿.为免聂小倩再次受辱,宁采臣答应将其尸骨送回乡间安葬转世投胎.不料聂小倩却被地府老妖抢去为妻.燕赤霞经不住宁采臣苦苦相求,决定再次出手,终于救回小倩.', 'zhu']],
                        qnyh_dy_init_heishanlaoyao: ['male', 'wei', 2, ['qnyh_dy_anjie', 'qnyh_dy_anzhang'], ['des:<br>♕「角色定位」<br>核心型法师,拥有非常强力的控牌技能,可以使得附近的敌人抑制过牌,失去防御能力,并且有强控和全场伤害,对局节奏会变得很快,但是本身比较脆弱,需谨慎考虑.<br><br>♗「能力分布」<br>输出:◇◇◇◇◇◇◇<br>控牌:◆◆◆◇◇◇◇<br>辅助:◆◆◇◇◇◇◇<br>抗性:◇◇◇◇◇◇◇<br>潜力:◇◇◇◇◇◇◇<br><br>♘「影视来源」<li>来自<倩女幽魂III:道道道><li>背景故事:<br>十方和尚随师父白云禅师护送金佛,在兰若寺遇到女鬼小卓与小蝶.十方放走小卓,但白云却被姥姥所擒.树妖姥姥逼小卓嫁给黑山老妖,小卓向十方求助,十方掘出小卓骸骨逃出兰若寺,并在剑侠燕赤霞的帮助下救出师父.在斗法中燕赤霞与白云合力消灭了姥姥,但此时黑山老妖用黑云遮天,欲将其一网打尽.十方唯有化成佛祖金身,由小卓带着飞上天空接太阳纯阳之气,借以消灭老妖.']],
                        zmid_dy_malcolmrivers: ['male', 'qun', 4, ['zmid_dy_benglie'], ['des:<br>♕「角色定位」<br>全能型输出,控牌、回血、输出、抵抗基本上都有具备,但是使命技成功之前不可控性比较大,手牌的掌握和当前回合持有的技能有概率不匹配,同时有些技能还会带来负面增益,这就需要比较好的技术来维持平衡.<br><br>♗「能力分布」<br>输出:◆◆◇◇◇◇◇<br>控牌:◆◆◆◆◇◇◇<br>辅助:◆◇◇◇◇◇◇<br>抗性:◆◆◇◇◇◇◇<br>潜力:◆◆◆◇◇◇◇<br><br>♘「影视来源」<li>来自<致命ID><li>背景故事:<br>在一个漆黑的夜晚,一片无边无际的沙漠荒原,一场肆虐的暴风雨,将矗立在其中的一座汽车旅馆与外界完全隔离,道路不通,通讯中断.11个此前相互完全不了解的陌生人,被迫聚集在这个摇摇欲坠的破汽车旅馆中.拉里·华盛顿是这家汽车旅馆的老板,他的举止异常,似乎潜藏着很多秘密.爱德华·达科塔(艾德)过去曾是个警察,如今则为女影星卡洛琳·苏珊开私家车,他们因在路上撞到了艾莉丝·约克而不得不把她送到了这家汽车旅馆进行治疗.艾莉丝和丈夫乔治及儿子提姆西在开车的途中,车子突然爆胎.他们下车检查时,艾莉丝被艾德的车子撞到了.帕瑞斯·内华达是一个妓女,她在途中找打火机的时候,把一个高跟鞋掉出了车去.结果,正是这个高跟鞋使得艾莉丝的车子爆了胎.艾德想要去找医生,在去的途中,他遇到了路·易斯安那和吉尼,由于雨实在是太大,所以他们只好返回了汽车旅馆.罗德斯·塞姆尔警官押着一个犯人罗伯特·缅因进入了旅馆.这11个人被分在了不同的房间,他们都拿着带有号码的房间钥匙.可怕的事情很快就发生了,女演员卡洛琳·苏珊意外被杀,头颅可怕地出现在了洗衣房的洗衣机里.而且她的手上还有一个带着10号的房间钥匙.随后,路也被人捅死了,他的手上有个带着9号的房间钥匙.大家不禁有些担心,这会不会是按照这个顺序死的啊.他们也发现他们有着共同点:他们的姓氏都是以州名的,出生地相同——内华达州,他们的生日也都在同一天,5月10日.结果证实了他们的猜测.监狱的犯人、乔治以及艾莉丝和吉尼都相继死去,他们正是按照这个顺序死的.而帕瑞斯在警车里面找到了一个犯罪证明,以及原警察的尸体,证明了罗德其实不是警察,他和那个逃犯一起击杀了警察并假冒了警察.罗德知道后非常想要杀帕瑞斯灭口,他击杀了拉里,打伤了艾德.艾德在最后的关头击杀了罗德.最后只有帕瑞斯活了下去 .而当帕瑞斯真正到了她想要去的地方的时候.但其实这些都不是存在的,这11个人(包括小孩)都是麦肯·瑞夫的11个分裂人格.这11个人格互相交替控制着他的身体,而在麦肯·瑞夫幼年时遭受到妓女母亲虐待形成的邪恶人格在现实中的四年前杀害了一幢大楼上的6名住户.在最后被判死刑前夕,他的主治精神病医生马力克发现了一本麦肯·瑞夫小时候的日记,这本日记更加印证了医生对于麦肯·瑞夫杀人是由于他有人格分裂造成的学说,于是医生告知法官要紧急提审麦肯·瑞夫,马力克医生和麦肯·瑞夫在法官面前对话要他消灭身体里所有邪恶的人格,于是上面的故事发生了.没错,他们正是麦肯·瑞夫内心中的十一个人格,其中三个就是那个邪恶灵魂,而那个世界就是麦肯·瑞夫的内心世界,所以这个人的世界观和现实世界稍微有点不同.医生在现实中和其中一个善良勇敢的人格(艾德)对话了,告诉这个人格真相并要他帮助麦肯·瑞夫消灭邪恶的人格.随后善良人格和一个邪恶的人格(罗德)同归于尽,只有一个女性人格(帕瑞斯)逃出了魔掌.故事的结局是隐藏的邪恶人格(提姆西)将帕瑞斯杀害了,原来前面害死六个人格实际上都是提姆西所为.在麦肯·瑞夫小的时候,他的母亲是个妓女,虐待了他,所以提姆西就是麦肯·瑞夫自小培养出的邪恶灵魂的人格.因为麦肯·瑞夫体内存活的人格是邪恶的,所以在影片的最后,这个邪恶的人格击杀了马力克医生和一名狱车司机.']],
                    },
                    translate: {
                        mny_dy_longdi: '龙帝',
                        mny_dy_init_longdi: '龙帝',
                        zjz_dy_t600: '☠六〇〇',
                        zjz_dy_t800: '☠八〇〇',
                        zjz_dy_t1000: '☠一〇〇〇',
                        zjz_dy_tx: '☠Χ',
                        mny_dy_ahmanet: '安玛奈特',
                        hkdg_dy_neo: '尼奥',
                        hkdg_dy_init_neo: '尼奥',
                        hkdg_dy_smith: '史密斯',
                        hkdg_dy_morpheus: '墨菲斯',
                        hkdg_dy_trinity: '崔妮蒂',
                        mny_dy_ancksunamun: '安苏纳姆',
                        mny_dy_moduniran: '伊莫顿',
                        qnyh_dy_yanchixia: '燕赤霞',
                        qnyh_dy_zuoqianhu: '左千户',
                        qnyh_dy_puducihang: '普渡慈航',
                        qnyh_dy_init_puducihang: '普渡慈航',
                        qnyh_dy_init2_puducihang: '普渡慈航',
                        qnyh_dy_zhiqiuyiye: '知秋一叶',
                        qnyh_dy_baiyunchanshi: '白云禅师',
                        qnyh_dy_heishanlaoyao: '黑山老妖',
                        qnyh_dy_init_heishanlaoyao: '黑山暗像',
                        zmid_dy_malcolmrivers: '麦肯芮夫',
                        dy_bossinfo: '挑战',
                        dy_bossinfo_info: '挑战奖励:<li>当玩家在本模式控制其他角色战胜此角色时,解锁此角色.',
                        dy_blankinfo: '白板',
                        dy_blankinfo_info: '此角色还没有设计好技能,现在是个白板.',
                        mny_dy_xianmu: '现墓',
                        mny_dy_xianmu_info: '隐匿技,当你登场后,你将势力变为蜀,获得技能〖秦俑〗、〖掷首〗.',
                        mny_dy_guidi: '归帝',
                        mny_dy_guidi_info: '觉醒技,准备阶段,若你拥有<泉>的数量超过六枚,你失去〖秦俑〗和〖掷首〗,清空所有的<俑>和<泉>标记并重置武将牌,将体力值回复至满并将势力变为神,获得技能〖五行〗和〖陵兵〗.',
                        mny_dy_qinyong: '秦俑',
                        mny_dy_qinyong_info: '锁定技,结束阶段你回复一点体力,你的手牌上限始终视为四,你大于一的体力值均转化为<俑>标记,超出已失体力值的<俑>转化为<泉>.(<俑>标记可以替你抵挡等量的伤害,且你每有一枚<俑>你的手牌上限便加一)',
                        mny_dy_zhishou: '掷首',
                        mny_dy_zhishou_info: '出牌阶段限一次,你可以失去一枚<俑>并指定一名其他角色,该角色受到一点火焰伤害.',
                        mny_dy_wuxing: '五行',
                        mny_dy_wuxing_info: '出牌阶段开始时,你可以从以下属性中获得一项直到下回合开始:青龙,你濒死时体力回复值加一,你可以将一张♦️️牌当做【桃】使用;白虎,你使用【杀】没有次数限制,你可以将一张♠️️牌当做雷【杀】使用或打出;朱雀,你使用【火攻】可以额外指定一名角色为目标,你可以将一张♥️️牌当做【火攻】使用;玄武,你受到锦囊牌的伤害减一,你可以将一张♣️️牌当做【无懈可击】使用;麒麟,你使用【闪】后来源失去一点体力,出牌阶段,你可以弃置两张不同颜色的牌并移动场上一张牌.',
                        mny_dy_lingbing: '陵兵',
                        mny_dy_lingbing_info: '锁定技,当你获得此技能时,你获得四枚<陵>标记,你的手牌数少于<陵>的数量时补齐手牌,出牌阶段限一次,你可以弃置一枚<陵>指定一名角色:该角色每个准备阶段需打出一张【杀】,否则其受到一点来自你的伤害.',
                        mny_dy_shalu: '杀戮',
                        mny_dy_shalu_info: '锁定技,游戏开始时,你获得四枚<戮>标记;准备阶段,你将手牌补齐至与<戮>相等;当你即将受到伤害时,你可以弃置任意枚<戮>并取消此伤害,对伤害来源造成等量的伤害.',
                        mny_dy_mishu: '密术',
                        mny_dy_mishu_info: '出牌阶段,你可以将一张黑色手牌当【火攻】使用,你使用的【火攻】可以额外指定一名角色为目标.',
                        mny_dy_changsheng: '长生',
                        mny_dy_changsheng_info: '主公技,蜀势力的角色准备阶段可以翻开牌堆顶的三张牌,若其中有♥️️牌,你回复一点体力.',
                        mny_dy_gangqu: '钢躯',
                        mny_dy_gangqu_info: '锁定技,你受到的非属性伤害减一,你受到雷属性伤害后翻面;你对距离为一的角色使用的【杀】需要额外使用一张【闪】来响应.',
                        zjz_dy_jiangshi: '降世',
                        zjz_dy_jiangshi_info: '锁定技,游戏开始时,你弃置区域内的所有牌并翻面,获得<潜行>直到下次翻面,你指定一名角色并选择一项:保护,每轮限一次,当该角色成为【杀】或【决斗】的目标时,你可以将目标转移给你;追击,你计算与该角色的距离始终视为一.',
                        zjz_dy_yequ: '液躯',
                        zjz_dy_yequ_info: '锁定技,你流失体力或受到非属性伤害时获得等量的<液>标记,你受到雷属性伤害后翻面,你的<液>标记可以不计算次数当做任意无属性基本牌使用或打出;出牌阶段限一次,你可以失去一点体力并摸一张牌.',
                        zjz_dy_taiqu: '钛躯',
                        zjz_dy_taiqu_info: '锁定技,你受到非属性和火焰伤害减一,你受到雷属性伤害后翻面;每回合限一次,你可以将一张牌当做任意基本牌使用;你使用的【杀】需要额外使用一张【闪】来响应.',
                        mny_dy_sizhou: '死咒',
                        mny_dy_sizhou_info: '锁定技,你判定区的牌效果反转;你的手牌上限始终视为体力值上限;你受到的伤害均视为体力流失;当你濒死时,若你不处于横置状态,你立刻将体力值变为一并脱离濒死状态.',
                        mny_dy_zonghun: '纵魂',
                        mny_dy_zonghun_info: '结束阶段,若场上存在阵亡的角色,你可以复活该角色并令其摸四张牌,你操纵该角色进行一个出牌阶段,出牌阶段结束后该角色死亡.',
                        mny_dy_jishen: '祭神',
                        mny_dy_jishen_info: '使命技.①出牌阶段,你可以弃置一张黑色手牌并指定一名男性角色,之后你的每个准备阶段进行一次判定:若出现与之前判定相同的花色,你解除横置状态.②成功:若判定的结果包含了四种不同花色,则该角色获得技能〖赛特〗.③失败:若该角色死亡,你失去所有的牌进入横置状态.',
                        mny_dy_saite: '赛特',
                        mny_dy_saite_info: '限定技,出牌阶段,你可以令一名其他角色获得一枚<死魂>标记,该角色体力值变为零并进入濒死状态.拥有<死魂>标记的角色死亡后你重置此技能.',
                        hkdg_dy_juzhen: '矩阵',
                        hkdg_dy_juzhen_info: '锁定技,游戏开始时,你获得虚拟世界状态:①在虚拟世界中,<源>标记视为你的体力值,且不能超出体力上限;②<源>标记代替你承受等量的伤害或体力流失;③你减少的体力不会超出你拥有的<源>标记,你失去所有<源>标记时进入濒死状态;④你只能通过【桃】的效果给自己回复一枚<源>标记;⑤你的手牌上限始终视为你拥有<源>标记的数量;⑥准备阶段,场上所有不在矩阵世界的角色技能均失效.',
                        hkdg_dy_xian: '锡安',
                        hkdg_dy_xian_info: '准备阶段,你可以令你的〖矩阵〗失效直到下个回合开始.',
                        hkdg_dy_fuzhi: '复制',
                        hkdg_dy_fuzhi_info: '出牌阶段限一次,你可以将两张牌当做一张无视距离和次数的【杀】使用,若此【杀】即将造成伤害,则你防止此伤害并令目标获得一枚<病毒>标记:拥有<病毒>标记的角色每个结束阶段失去一点体力,其死亡后复活并变成与你名称和身份相同的角色(作为主公你创造的身份不参与胜负结算).',
                        hkdg_dy_jueze: '抉择',
                        hkdg_dy_jueze_info: '限定技,出牌阶段或当你在〖矩阵〗中濒死时,你可以进行一次选择:红色药丸,你获得〖情谛〗和〖锡安〗,同时若你濒死,你防止此次死亡;蓝色药丸,你将武将牌的状态、区域内的牌和<源>标记复原至游戏开始时的状态.',
                        hkdg_dy_qingdi: '情谛',
                        hkdg_dy_qingdi_info: '觉醒技,锁定技,当一名其他女性角色使用或打出【桃】令你脱离濒死时,游戏胜利.',
                        hkdg_dy_haike: '骇客',
                        hkdg_dy_haike_info: '你可以将一张黑色的牌当做【桃】使用或打出.',
                        hkdg_dy_jiejiu: '解救',
                        hkdg_dy_jiejiu_info: '出牌阶段,你可以弃置两张颜色不同的牌并指定一名没有〖矩阵〗的其他角色:该角色获得〖矩阵〗和〖锡安〗.',
                        hkdg_dy_yuanjie: '源界',
                        hkdg_dy_yuanjie_info: '当你成为其他角色使用的【杀】、【决斗】、【南蛮入侵】或【万箭齐发】的目标时,你可以弃置一张黑色手牌,取消此牌的所有目标.',
                        hkdg_dy_tequan: '特权',
                        hkdg_dy_tequan_info: '锁定技,你废除你的判定区,你的武将牌始终正面朝上且不能被横置,你使用的牌没有距离限制且不能被其他角色响应.',
                        mny_dy_xihun: '吸魂',
                        mny_dy_xihun_info: '准备阶段,若你的体力值不为满,你可以令一名其他角色展示一张【杀】或【闪】,否则你吸取其一点体力值.',
                        mny_dy_kuangsha: '狂沙',
                        mny_dy_kuangsha_info: '出牌阶段限一次,你可以弃置两张手牌,指定数量不超过你体力值的其他角色:这些角色随机失去两张牌.',
                        mny_dy_huanhun: '还魂',
                        mny_dy_huanhun_info: '限定技,出牌阶段,你可以弃置四张花色各不相同的牌或将武将牌翻面,指定一名已阵亡的角色复活至一点体力,其摸四张牌并获得以下效果:该角色的非锁定技失效直到其体力值回复至满,此期间该角色视为拥有〖吸魂〗.',
                        mny_dy_juechong: '决宠',
                        mny_dy_juechong_info: '出牌阶段限一次,你可以弃一张牌指定一名拥有至少两张牌的其他角色A,该角色指定另一名角色B:由你视为对B发起决斗,若此决斗造成伤害,则防止伤害,改为A交给胜利的角色两张牌.',
                        mny_dy_jinluan: '禁脔',
                        mny_dy_jinluan_info: '锁定技,你每使用或打出一张♠️️【杀】后你摸一张牌,你可以将♠️️牌当【杀】使用或打出.',
                        qnyh_dy_faqi: '法器',
                        qnyh_dy_faqi_info: '锁定技,游戏开始时,你获得四枚<剑>标记,准备阶段,你可以翻开牌堆顶的两张牌,其中每有一张红色牌你获得一枚<剑>,你的武将牌上最多能存在四枚<剑>标记.',
                        qnyh_dy_jiqian: '极乾',
                        qnyh_dy_jiqian_info: '出牌阶段,你可以弃置一张黑色手牌并移除一枚<剑>标记,视为对一名其他角色使用一张无视次数和距离的雷【杀】.',
                        qnyh_dy_haori: '浩日',
                        qnyh_dy_haori_info: '当你成为【杀】的目标时,你可以弃置一张红色手牌并移除一枚<法>标记,同时取消此【杀】的所有目标,视为你对该角色使用此【杀】.',
                        qnyh_dy_yujian: '御剑',
                        qnyh_dy_yujian_info: '出牌阶段,你可以弃置一枚<剑>标记,你指定一名角色:直到你的下个回合开始,该角色的进攻和防守距离加一.',
                        qnyh_dy_guizong: '归宗',
                        qnyh_dy_guizong_info: '出牌阶段限一次,你可以弃置四枚<剑>标记并指定任意名角色:这些角色进入潜行状态直到你的下个回合开始.',
                        qnyh_dy_yanling: '雁翎',
                        qnyh_dy_yanling_info: '锁定技,游戏开始时,你获得五枚<刃>标记:①出牌阶段,你可以将一枚本回合未使用过的<刃>置于其他没有<刃>的角色武将牌上;②获得<刃>的角色随机失去一张手牌,其响应【杀】时需额外使用一张【闪】,其他角色与其计算距离时减一;③拥有<刃>的角色受到伤害或死亡时你获得此<刃>.',
                        qnyh_dy_podao: '朴刀',
                        qnyh_dy_podao_info: '出牌阶段开始时,你可以将<刃>和<刀>相互转换,你按拥有<刀>的数量获得以下效果:一枚,你【杀】的使用距离加一,你可以将♠️️手牌当【杀】使用或打出;两枚,你【杀】使用的限制次数加一;三枚,你【杀】使用的限制次数加一(你最多只能有三枚<刀>).',
                        qnyh_dy_feiren: '飞刃',
                        qnyh_dy_feiren_info: '限定技,出牌阶段,你可以视为对任意名其他角色使用一张无视距离和次数的【杀】.',
                        qnyh_dy_fanjing: '梵经',
                        qnyh_dy_fanjing_info: '锁定技,你不能成为黑色非延时锦囊牌的目标;准备阶段,你随机获得牌堆中的四张非延时锦囊牌并背面朝上置于武将牌上,称为<梵>,你的下个回合开始时你清空所有的<梵>(所有的<梵>仅你可见>).',
                        qnyh_dy_xunyin: '殉音',
                        qnyh_dy_xunyin_info: '出牌阶段限一次,你可以弃置两张红色的<梵>,指定至多三名其他角色:这些角色需展示一张本轮未展示过的黑色非延时锦囊牌,否则直到你的下个回合开始,其进入混乱状态.',
                        qnyh_dy_puzhao: '普照',
                        qnyh_dy_puzhao_info: '当你成为【杀】、【决斗】或【顺手牵羊】的目标时,你可以弃置一张红色的<梵>令来源展示一张本轮未展示过的黑色非延时锦囊牌,否则取消你作为目标,该角色失去一点体力.',
                        qnyh_dy_huoguo: '祸国',
                        qnyh_dy_huoguo_info: '主公技,出牌阶段开始时,其他魏势力角色可以交给你一张红色的锦囊牌令你替换掉一张<梵>,你交回给该角色替换出来的牌.',
                        qnyh_dy_tuotai: '脱胎',
                        qnyh_dy_tuotai_info: '觉醒技,锁定技,当你进入濒死状态时,你立即获得一点体力上限并回复至三点体力,获得技能〖佛光〗和〖换骨〗.',
                        qnyh_dy_foguang: '佛光',
                        qnyh_dy_foguang_info: '锁定技,你使用【杀】没有距离限制,你的〖殉音〗和〖普照〗令目标展示锦囊牌后你立即销毁此牌.',
                        qnyh_dy_huangu: '换骨',
                        qnyh_dy_huangu_info: '觉醒技,锁定技,当你进入濒死状态时,你立即获得一点体力上限并回复至四点体力,失去技能〖殉音〗、〖普照〗和〖佛光〗,获得技能〖百足〗和〖化龙〗.',
                        qnyh_dy_baizu: '百足',
                        qnyh_dy_baizu_info: '锁定技,你免疫所有的属性伤害,你使用的【杀】无视目标防具且需要额外使用一张【闪】来响应.',
                        qnyh_dy_hualong: '化龙',
                        qnyh_dy_hualong_info: '使命技,锁定技.①使命:结束阶段,当你的〖殉音〗的<梵>牌有且全为红色时,你展示之并获得游戏胜利;②失败:当你进入濒死状态时,你直接死亡.',
                        qnyh_dy_kongfu: '控符',
                        qnyh_dy_kongfu_info: '出牌阶段,你可以将一张锦囊牌当做以下符纸置于一名其他角色的判定区:①风符·【逐鬼驱魔令】若判定结果不为【闪】,该角色随机弃置两张牌.②火符·【天罡五离火】若判定结果不为【闪】,该角色受到一点火焰伤害.③雷符·【风雷地动令】若判定结果为【闪】,该角色跳过出牌阶段.',
                        qnyh_dy_yuwu: '御物',
                        qnyh_dy_yuwu_info: '出牌阶段限一次,你可以弃置一张基本牌,将一名角色装备区或判定区的牌移动到另一名角色对应的区域.',
                        qnyh_dy_dundi: '遁地',
                        qnyh_dy_dundi_info: '锁定技,当你成为带伤害标签卡牌的目标后,你进入潜行状态直到回合结束.',
                        qnyh_dy_jinfo: '金佛',
                        qnyh_dy_jinfo_info: '锁定技,游戏开始时,你获得一张【无懈可击】(13·♥️️),此牌不计入你的手牌数量,且当场上有角色因使用而失去此牌后,此牌回到你的手牌且本轮内你不能将其使用.',
                        qnyh_dy_jingang: '金刚',
                        qnyh_dy_jingang_info: '锁定技,你免疫锦囊牌对你造成的伤害;你受到伤害后,伤害来源随机失去一张黑色的牌.',
                        qnyh_dy_xingluo: '星罗',
                        qnyh_dy_xingluo_info: '出牌阶段限一次,你可以展示并弃置一张基本牌,指定至多三名其他角色:这些角色需打出和你名称相同的牌,否则其受到一点火焰伤害.',
                        qnyh_dy_diting: '谛听',
                        qnyh_dy_diting_info: '锁定技,与你距离不大于二的其他角色拥有基本牌的种类始终于你可知.',
                        qnyh_dy_sushen: '塑身',
                        qnyh_dy_sushen_info: '限定技,出牌阶段,若你的体力值大于一,你可以指定一名其他男性角色:你失去体力直到变为一,该角色获得等量的<阳>标记,并获得技能〖罗汉〗.',
                        qnyh_dy_luohan: '罗汉',
                        qnyh_dy_luohan_info: '锁定技.①你免疫基本的负面状态,其他角色使用的牌对你无效,防止你受到的任何伤害或体力流失,与其他角色拼点时你的点数加二;②准备阶段,你移除一枚<阳>并摸一张牌,可以选择与至多三名其他角色拼点:若你赢,则你获得对方的拼点牌;③出牌阶段,你可以与一名其他角色拼点:若你赢,则你对其造成一点火焰伤害;④结束阶段,若你的武将牌上没有<阳>,你失去〖罗汉〗.',
                        qnyh_dy_mingfu: '冥府',
                        qnyh_dy_mingfu_info: '限定技,出牌阶段,你可以选择令一名其他角色移动到你的上家或下家,该角色横置并翻面.',
                        qnyh_dy_gouhun: '勾魂',
                        qnyh_dy_gouhun_info: '出牌阶段开始时,你可以弃置一张黑色手牌并令一名其他角色选择一项:①该角色弃置一张红色锦囊牌并对你造成一点伤害;②该角色弃置一张黑色锦囊牌;③该角色失去一点体力,你获得其非特殊技直到回合结束.',
                        qnyh_dy_guishou: '鬼首',
                        qnyh_dy_guishou_info: '出牌阶段限一次,你可以将不超过你体力值的黑色手牌当做无距离和次数限制且无视目标防具的【杀】对等量的其他角色使用:你以此法使用的【杀】造成伤害后,目标于其回合内不能使用锦囊牌和装备牌且手牌上限减一直到其回合结束;若此【杀】没命中目标,则你随机收回一张以此法打出去的牌.',
                        qnyh_dy_anjie: '暗界',
                        qnyh_dy_anjie_info: '锁定技.①你的手牌和【乌云蔽日】展示的牌中的♥️️牌或♦️️牌均变为♠️️牌或♣️️牌;②;③每轮开始时,你从牌堆中随机选取黑色的牌视为【乌云蔽日】贴在包括你在内的所有与你距离不大于二角色的判定区内.',
                        qnyh_dy_card_wuyun: '乌云蔽日',
                        qnyh_dy_card_wuyun_info: '你跳过你的摸牌阶段,同时你展示牌堆顶的三张牌(至少一张为黑色),获得其中黑色的牌.',
                        qnyh_dy_wangsi: '枉死',
                        qnyh_dy_wangsi_info: '主公技,非<暗像>的魏势力角色死亡时可以选择复活并变成<暗像>(暗像拥有技能〖暗畀〗和〖暗障〗).',
                        qnyh_dy_anzhang: '暗障',
                        qnyh_dy_anzhang_info: '锁定技,出牌阶段开始时,若你有黑色的手牌,你随机将一张黑色手牌交给令你变成<暗像>的角色.',
                        zmid_dy_benglie: '崩裂',
                        zmid_dy_benglie_info: '使命技,锁定技.①游戏开始时,你获得十一个不同的<人格>,其中随机一个<人格>为隐藏人格(于你不可见);②准备阶段,你随机展示两个<人格>,获得其对应的技能直到下个回合开始;③结束阶段,你需指定一个<人格>,于下个回合开始时对其进行审判,若审判的不是隐藏人格,则隐藏人格会随机抹杀一个其他<人格>;④成功:若你成功审判了隐藏人格,则你的准备阶段可以自主选择展示的人格;⑤失败:若除隐藏人格外你已无其他<人格>,则你进入混乱状态.',
                    },
                    skill: {
                        dy_bossinfo: {},
                        dy_blankinfo: {},
                        mny_dy_xianmu: {
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            hiddenSkill: true,
                            derivation: ['mny_dy_qinyong', 'mny_dy_zhishou'],
                            filter(event, player) {
                                return event.toShow.includes('mny_dy_longdi');
                            },
                            forced: true,
                            content() {
                                game.playAudio('../extension/电影乱入/audio/mny/dy_xianmu.mp3');
                                player.group = 'shu';
                                player.update();
                                player.addSkill('mny_dy_qinyong');
                                player.addSkill('mny_dy_zhishou');
                            },
                        },
                        mny_dy_guidi: {
                            juexingji: true,
                            derivation: ['mny_dy_wuxing', 'mny_dy_lingbing'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                if (player.countMark('mny_dy_qinyong_quan') < 6 || player.storage.mny_dy_guidi) return false;
                                game.playAudio('../extension/电影乱入/audio/mny/dy_guidi.mp3');
                                return true;
                            },
                            forced: true,
                            content() {
                                player.name = 'mny_dy_init_longdi';
                                player.setBackground('mny_dy_init_longdi', 'character');
                                player.flashAvatar('mny_dy_guidi', 'mny_dy_init_longdi');
                                player.removeMark('mny_dy_qinyong_quan', player.countMark('mny_dy_qinyong_quan'));
                                player.removeMark('mny_dy_qinyong', player.countMark('mny_dy_qinyong'));
                                player.removeSkill('mny_dy_qinyong');
                                player.removeSkill('mny_dy_zhishou');
                                player.hp = player.maxHp;
                                player.group = 'shen';
                                player.update();
                                game.log(player, '获得了技能', '#g〖五行〗和〖陵兵〗');
                                player.addSkill('mny_dy_wuxing');
                                player.addSkill('mny_dy_lingbing');
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                            ai: {
                                threaten(player, target) {
                                    return 0.5 + target.countMark('mny_dy_qinyong_quan') * 0.3;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'recover')) return [1.3, 1.5];
                                    },
                                },
                            },
                        },
                        mny_dy_qinyong: {
                            subSkill: {
                                quan: {
                                    marktext: '泉',
                                    intro: {
                                        name: '永生之泉',
                                        content(storage, player, skill) {
                                            var num = Math.min(player.countMark('mny_dy_qinyong_quan'), 6);
                                            return '泉水已收集〈' + num + '/6〉';
                                        },
                                    },
                                },
                                rec: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        game.playAudio('../extension/电影乱入/audio/mny/dy_qinyong_recover.mp3');
                                        player.recover();
                                    },
                                },
                                hujia: {
                                    preHidden: true,
                                    trigger: {
                                        player: ['damageBegin4'],
                                    },
                                    forced: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return event.num > 0 && player.countMark('mny_dy_qinyong') > 0;
                                    },
                                    content() {
                                        game.playAudio('../extension/电影乱入/audio/mny/dy_qinyong_damage.mp3');
                                        if (trigger.num > player.countMark('mny_dy_qinyong')) {
                                            var num = player.countMark('mny_dy_qinyong');
                                        } else {
                                            var num = trigger.num;
                                        }
                                        if (trigger.name == 'damage') {
                                            if (trigger.animate !== false) {
                                                player.$damage(trigger.source);
                                                game.broadcastAll(
                                                    function (nature, player) {
                                                        if (lib.config.animation && !lib.config.low_performance) {
                                                            if (nature == 'fire') {
                                                                player.$fire();
                                                            } else if (nature == 'thunder') {
                                                                player.$thunder();
                                                            }
                                                        }
                                                    },
                                                    trigger.nature,
                                                    player
                                                );
                                                player.$damagepop(-num, trigger.nature);
                                            }
                                        }
                                        game.log(player, '的护甲抵挡了', get.cnNumber(num), '点伤害');
                                        player.removeMark('mny_dy_qinyong', num);
                                        trigger.num -= num;
                                    },
                                    mod: {
                                        maxHandcardBase(player, num) {
                                            return num + player.countMark('mny_dy_qinyong');
                                        },
                                    },
                                },
                            },
                            group: ['mny_dy_qinyong_hujia', 'mny_dy_qinyong_rec'],
                            trigger: {
                                player: ['changeHp'],
                            },
                            loced: true,
                            forced: true,
                            firstDo: true,
                            filter(event, player) {
                                return player.hp > 1;
                            },
                            content() {
                                'step 0';
                                event.num = player.hp - 1;
                                player.hp = 1;
                                player.update();
                                player.addMark('mny_dy_qinyong', event.num);
                                ('step 1');
                                event.num2 = player.maxHp - 1;
                                if (player.countMark('mny_dy_qinyong') > event.num2) {
                                    var num = player.countMark('mny_dy_qinyong') - event.num2;
                                    player.removeMark('mny_dy_qinyong', num);
                                    player.addMark('mny_dy_qinyong_quan', num);
                                }
                            },
                            init(player) {
                                if (player.hp > 1) {
                                    var num = player.hp - 1;
                                    player.addMark('mny_dy_qinyong', num);
                                    player.hp = 1;
                                    player.update();
                                }
                            },
                            marktext: '俑',
                            intro: {
                                name: '秦俑',
                                content: 'mark',
                            },
                        },
                        mny_dy_zhishou: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('mny_dy_qinyong') > 0;
                            },
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playAudio('../extension/电影乱入/audio/mny/dy_zhishou.mp3');
                                ('step 1');
                                player.removeMark('mny_dy_qinyong');
                                game.playAudio('../extension/电影乱入/audio/mny/dy_qinyong_damage.mp3');
                                target.damage('fire');
                            },
                            ai: {
                                order: 8.5,
                                fireAttack: true,
                                result: {
                                    target(player, target) {
                                        var hps = player.hp + player.countMark('mny_dy_qinyong');
                                        if (hps < 2) return 0;
                                        if (target.hp >= hps) return 0;
                                        if (hps == player.maxHp) return 0;
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        mny_dy_wuxing: {
                            subSkill: {
                                qinglong: {
                                    mark: true,
                                    marktext: '青龙',
                                    intro: {
                                        name: '五行之术',
                                        content(storage, player, skill) {
                                            return '你濒死时体力回复值加一,你可以将一张♦️️牌当做【桃】使用';
                                        },
                                    },
                                    onuse(result, player) {
                                        game.playAudio('../extension/电影乱入/audio/mny/dy_wuxing_use.mp3');
                                    },
                                    group: 'mny_dy_wuxing_qinglong_rec',
                                    mod: {
                                        aiValue(player, card, num) {
                                            if (card.name != 'tao' && card.suit != 'diamond') return;
                                            var cards = player.getCards('hs', function (card) {
                                                return card.name == 'tao' || card.suit == 'diamond';
                                            });
                                            cards.sort(function (a, b) {
                                                return (a.name == 'tao' ? 1 : 2) - (b.name == 'tao' ? 1 : 2);
                                            });
                                            var geti = function () {
                                                if (cards.includes(card)) {
                                                    return cards.indexOf(card);
                                                }
                                                return cards.length;
                                            };
                                            return Math.max(num, [6.5, 4, 3, 2][Math.min(geti(), 2)]);
                                        },
                                        aiUseful() {
                                            return lib.skill.kanpo.mod.aiValue.apply(this, arguments);
                                        },
                                    },
                                    enable: 'chooseToUse',
                                    viewAsFilter(player) {
                                        return player.countCards('hes', { suit: 'diamond' }) > 0;
                                    },
                                    filterCard(card, player) {
                                        return card.suit == 'diamond';
                                    },
                                    position: 'hes',
                                    viewAs: {
                                        name: 'tao',
                                    },
                                    prompt: '将一张♦️️牌当桃使用',
                                    check(card) {
                                        return 15 - get.value(card);
                                    },
                                    ai: {
                                        threaten: 1.5,
                                        basic: {
                                            order(card, player) {
                                                if (player.hasSkillTag('pretao')) return 5;
                                                return 2;
                                            },
                                            useful: [6.5, 4, 3, 2],
                                            value: [6.5, 4, 3, 2],
                                        },
                                        result: {
                                            target: 2,
                                            target_use(player, target) {
                                                if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                                var nd = player.needsToDiscard();
                                                var keep = false;
                                                if (nd <= 0) {
                                                    keep = true;
                                                } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                                    keep = true;
                                                }
                                                var mode = get.mode();
                                                if (target.hp >= 2 && keep && target.hasFriend()) {
                                                    if (target.hp > 2 || nd == 0) return 0;
                                                    if (target.hp == 2) {
                                                        if (
                                                            game.hasPlayer(function (current) {
                                                                if (target != current && get.attitude(target, current) >= 3) {
                                                                    if (current.hp <= 1) return true;
                                                                    if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                                }
                                                            })
                                                        ) {
                                                            return 0;
                                                        }
                                                    }
                                                }
                                                if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                                var att = get.attitude(player, target);
                                                if (att < 3 && att >= 0 && player != target) return 0;
                                                var tri = _status.event.getTrigger();
                                                if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                                    if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                        var num = game.countPlayer(function (current) {
                                                            if (current.identity == 'fan') {
                                                                return current.countCards('h', 'tao');
                                                            }
                                                        });
                                                        if (num > 1 && player == target) return 2;
                                                        return 0;
                                                    }
                                                }
                                                if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                                    if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                        return 0;
                                                    }
                                                }
                                                if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                                    return 0;
                                                }
                                                return 2;
                                            },
                                        },
                                        tag: {
                                            recover: 1,
                                            save: 1,
                                        },
                                    },
                                },
                                qinglong_rec: {
                                    trigger: {
                                        player: 'recoverBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isDying() && !event.numFixed;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        threaten: 0.8,
                                    },
                                },
                                baihu: {
                                    mark: true,
                                    marktext: '白虎',
                                    intro: {
                                        name: '五行之术',
                                        content(storage, player, skill) {
                                            return '你使用【杀】没有次数限制,你可以将一张♠️️牌当做雷【杀】使用或打出';
                                        },
                                    },
                                    onuse(result, player) {
                                        game.playAudio('../extension/电影乱入/audio/mny/dy_wuxing_use.mp3');
                                    },
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return Infinity;
                                        },
                                    },
                                    filterCard(card, player) {
                                        return card.suit == 'spade';
                                    },
                                    position: 'hes',
                                    viewAs: {
                                        nature: 'thunder',
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hes', { suit: 'spade' })) return false;
                                    },
                                    prompt: '将一张♠️️牌当杀使用或打出',
                                    check(card) {
                                        var val = get.value(card);
                                        if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                        return 5 - val;
                                    },
                                    ai: {
                                        skillTagFilter(player) {
                                            if (!player.countCards('hes', { suit: 'spade' })) return false;
                                        },
                                        respondSha: true,
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
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        basic: {
                                            useful: [5, 3, 1],
                                            value: [5, 3, 1],
                                        },
                                        order(item, player) {
                                            if (player.hasSkillTag('presha', true, null, true)) return 10;
                                            if (lib.linked.includes(get.nature(item))) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                                    }) &&
                                                    game.countPlayer(function (current) {
                                                        return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                                    }) > 1
                                                )
                                                    return 3.1;
                                                return 3;
                                            }
                                            return 3.05;
                                        },
                                        result: {
                                            target(player, target, card, isLink) {
                                                var eff = (function () {
                                                    if (!isLink && player.hasSkill('jiu')) {
                                                        if (
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        ) {
                                                            if (get.attitude(player, target) > 0) {
                                                                return -7;
                                                            } else {
                                                                return -4;
                                                            }
                                                        }
                                                        return -0.5;
                                                    }
                                                    return -1.5;
                                                })();
                                                if (
                                                    !isLink &&
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
                                                    return eff / 1.2;
                                                return eff;
                                            },
                                        },
                                        tag: {
                                            respond: 1,
                                            respondShan: 1,
                                            damage(card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natuspadeamage(card) {
                                                if (card.nature) return 1;
                                            },
                                            fispadeamage(card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage(card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage(card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                    },
                                },
                                zhuque: {
                                    mark: true,
                                    marktext: '朱雀',
                                    intro: {
                                        name: '五行之术',
                                        content(storage, player, skill) {
                                            return '你使用【火攻】可以额外指定一名角色为目标,你可以将一张♥️️牌当做【火攻】使用';
                                        },
                                    },
                                    onuse(result, player) {
                                        game.playAudio('../extension/电影乱入/audio/mny/dy_wuxing_use.mp3');
                                    },
                                    enable: 'phaseUse',
                                    mod: {
                                        selectTarget(card, player, range) {
                                            if (card.name == 'huogong' && Array.isArray(range) && range[1] != -1) range[1]++;
                                        },
                                    },
                                    filterCard(card, player) {
                                        return card.suit == 'heart';
                                    },
                                    viewAs: {
                                        name: 'huogong',
                                        nature: 'fire',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hes', { suit: 'heart' })) return false;
                                    },
                                    position: 'hes',
                                    prompt: '将一张♥️️牌当火攻使用',
                                    check(card) {
                                        var player = _status.currentPhase;
                                        if (player.countCards('h') > player.hp) {
                                            return 7 - get.value(card);
                                        }
                                        return 4 - get.value(card);
                                    },
                                    ai: {
                                        fireAttack: true,
                                        basic: {
                                            order: 4,
                                            value: [3, 1],
                                            useful: 1,
                                        },
                                        wuxie(target, card, player, current, state) {
                                            if (get.attitude(current, player) >= 0 && state > 0) return false;
                                        },
                                        result: {
                                            player(player) {
                                                var nh = player.countCards('he');
                                                if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                                    if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                        return -10;
                                                    }
                                                    if (_status.event.skill) {
                                                        var viewAs = get.info(_status.event.skill).viewAs;
                                                        if (viewAs == 'huogong') return -10;
                                                        if (viewAs && viewAs.name == 'huogong') return -10;
                                                    }
                                                }
                                                return 0;
                                            },
                                            target(player, target) {
                                                if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                                                if (player.countCards('h') <= 1) return 0;
                                                if (target == player) {
                                                    if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                        return -1.15;
                                                    }
                                                    if (_status.event.skill) {
                                                        var viewAs = get.info(_status.event.skill).viewAs;
                                                        if (viewAs == 'huogong') return -1.15;
                                                        if (viewAs && viewAs.name == 'huogong') return -1.15;
                                                    }
                                                    return 0;
                                                }
                                                return -1.15;
                                            },
                                        },
                                        tag: {
                                            damage: 1,
                                            fiheartamage: 1,
                                            natuheartamage: 1,
                                            norepeat: 1,
                                        },
                                    },
                                },
                                xuanwu: {
                                    mark: true,
                                    marktext: '玄武',
                                    intro: {
                                        name: '五行之术',
                                        content(storage, player, skill) {
                                            return '你受到锦囊牌的伤害减一,你可以将一张♣️️牌当做【无懈可击】使用';
                                        },
                                    },
                                    onuse(result, player) {
                                        game.playAudio('../extension/电影乱入/audio/mny/dy_wuxing_use.mp3');
                                    },
                                    group: ['mny_dy_wuxing_xuanwu_force', 'mny_dy_wuxing_xuanwu_dam'],
                                    mod: {
                                        aiValue(player, card, num) {
                                            if (card.name != 'wuxie' && card.suit != 'club') return;
                                            var cards = player.getCards('hs', function (card) {
                                                return card.name == 'wuxie' || card.suit == 'club';
                                            });
                                            cards.sort(function (a, b) {
                                                return (b.name == 'wuxie' ? 1 : 2) - (a.name == 'wuxie' ? 1 : 2);
                                            });
                                            var geti = function () {
                                                if (cards.includes(card)) {
                                                    return cards.indexOf(card);
                                                }
                                                return cards.length;
                                            };
                                            if (card.name == 'wuxie') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                            return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
                                        },
                                        aiUseful() {
                                            return lib.skill.rekanpo.mod.aiValue.apply(this, arguments);
                                        },
                                    },
                                    position: 'hes',
                                    enable: 'chooseToUse',
                                    filterCard(card, player) {
                                        return card.suit == 'club';
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('hes', { suit: 'club' }) > 0;
                                    },
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    prompt: '将一张黑色牌当无懈可击使用',
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                },
                                xuanwu_force: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'wuxie';
                                    },
                                    content() {
                                        trigger.directHit.addArray(game.players);
                                    },
                                },
                                xuanwu_dam: {
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    check(event, player) {
                                        if (player == event.player) return true;
                                        return false;
                                    },
                                    filter(event, player) {
                                        return get.type(event.card, 'trick') == 'trick';
                                    },
                                    content() {
                                        trigger.num--;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                                    return 'zeroplayertarget';
                                                }
                                            },
                                        },
                                    },
                                },
                                qilin: {
                                    mark: true,
                                    marktext: '麒麟',
                                    intro: {
                                        name: '五行之术',
                                        content(storage, player, skill) {
                                            return '你使用【闪】后来源失去一点体力,出牌阶段,你可以弃置两张不同颜色的牌并移动场上一张牌';
                                        },
                                    },
                                    group: 'mny_dy_wuxing_qilin_miss',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        return player.canMoveCard(true) && player.countCards('h', { color: 'black' }) > 0 && player.countCards('h', { color: 'red' }) > 0;
                                    },
                                    filterCard(card, player) {
                                        if (ui.selected.cards.length) {
                                            return get.color(card) != get.color(ui.selected.cards[0]);
                                        }
                                        var cards = player.getCards('h');
                                        if (Array.isArray(cards)) for (var i of cards) {
                                            if (card != i) {
                                                if (get.color(card) != get.color(i)) return true;
                                            }
                                        }
                                        return false;
                                    },
                                    complexCard: true,
                                    selectCard: 2,
                                    check(card) {
                                        if (player.canMoveCard(true)) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return get.attitude(player, current) > 0 && current.countCards('j');
                                                })
                                            )
                                                return 9 - get.value(card);
                                        }
                                        return 0;
                                    },
                                    content() {
                                        player.moveCard();
                                    },
                                    ai: {
                                        order: 2,
                                        result: {
                                            player(player, target) {
                                                if (player.canMoveCard(true)) {
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            return get.attitude(player, current) > 0 && current.countCards('j');
                                                        })
                                                    )
                                                        return 2;
                                                }
                                                return 0;
                                            },
                                        },
                                    },
                                },
                                qilin_miss: {
                                    trigger: {
                                        global: 'shaMiss',
                                    },
                                    filter(event, player) {
                                        return event.target == player;
                                    },
                                    check(event, player, source) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    logTarget: 'target',
                                    content() {
                                        trigger.player.loseHp();
                                    },
                                    ai: {
                                        threaten: 0.8,
                                    },
                                },
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.skills = ['mny_dy_wuxing_qinglong', 'mny_dy_wuxing_baihu', 'mny_dy_wuxing_zhuque', 'mny_dy_wuxing_xuanwu', 'mny_dy_wuxing_qilin'];
                                var tips = ['<li>〖青龙·木〗 你濒死时体力回复值加一,你可以将一张♦️️牌当做【桃】使用', '<li>〖白虎·金〗 你使用【杀】没有次数限制,你可以将一张♠️️牌当做雷【杀】使用或打出', '<li>〖朱雀·火〗 你使用【火攻】可以额外指定一名角色为目标,你可以将一张♥️️牌当做【火攻】使用', '<li>〖玄武·水〗 你受到锦囊牌的伤害减一,你可以将一张♣️️牌当做【无懈可击】使用', '<li>〖麒麟·土〗 你使用【闪】后来源失去一点体力,出牌阶段,你可以弃置两张不同颜色的牌并移动场上一张牌'];
                                lib.translate.mny_dy_wuxing_qinglong = '青龙';
                                lib.translate.mny_dy_wuxing_baihu = '白虎';
                                lib.translate.mny_dy_wuxing_zhuque = '朱雀';
                                lib.translate.mny_dy_wuxing_xuanwu = '玄武';
                                lib.translate.mny_dy_wuxing_qilin = '麒麟';
                                player
                                    .chooseControl(event.skills, function () {
                                        return event.skills.randomGet();
                                    })
                                    .set('choiceList', tips);
                                ('step 1');
                                game.playAudio('../extension/电影乱入/audio/mny/dy_wuxing_' + [1, 2, 3, 4].randomGet() + '.mp3');
                                player.addTempSkill(result.control, { player: 'phaseBegin' });
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        mny_dy_lingbing: {
                            group: 'mny_dy_lingbing_move',
                            subSkill: {
                                dam: {
                                    mark: true,
                                    marktext: '战区',
                                    intro: {
                                        name: '陵墓军团',
                                        content(storage, player, skill) {
                                            var he = player.storage.mny_dy_lingbing_source;
                                            if (he && he.isAlive()) {
                                                var him = player.storage.mny_dy_lingbing_source.name;
                                                return '准备阶段需打出一张【杀】,否则其受到来自' + get.translation(him) + '的伤害.';
                                            } else {
                                                return '陵墓军团不受控制,即将销声匿迹';
                                            }
                                        },
                                    },
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (!player.storage.mny_dy_lingbing_source || !player.storage.mny_dy_lingbing_source.isAlive()) {
                                            player.removeSkill('mny_dy_lingbing_dam');
                                            event.finish();
                                        }
                                        ('step 1');
                                        game.playAudio('../extension/电影乱入/audio/mny/dy_lingbing_damage.mp3');
                                        next = player.chooseToRespond('陵兵:打出一张【杀】,否则受到一点来自' + get.translation(player.storage.mny_dy_lingbing_source.name) + '的伤害', { name: 'sha' });
                                        next.set('ai', function () {
                                            return 2;
                                        });
                                        next.set('source', player.storage.mny_dy_lingbing_source);
                                        next.set('mny_dy_lingbing', true);
                                        next.noOrdering = true;
                                        next.autochoose = lib.filter.autoUseSha;
                                        ('step 2');
                                        if (!result.bool) {
                                            player.storage.mny_dy_lingbing_source.line(player, 'yellow');
                                            player.damage(player.storage.mny_dy_lingbing_source);
                                        }
                                    },
                                },
                                move: {
                                    enable: 'phaseUse',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        if (target.hasSkill('mny_dy_lingbing_dam')) return false;
                                        return player.countMark('mny_dy_lingbing') > 0;
                                    },
                                    usable: 1,
                                    prompt: '出牌阶段限一次,你可以弃置一枚<陵>指定一名角色:该角色每个准备阶段需打出一张【杀】,否则其受到一点来自你的伤害.',
                                    content() {
                                        'step 0';
                                        game.playAudio('../extension/电影乱入/audio/mny/dy_lingbing.mp3');
                                        player.removeMark('mny_dy_lingbing');
                                        ('step 1');
                                        target.addSkill('mny_dy_lingbing_dam');
                                        target.storage.mny_dy_lingbing_source = player;
                                    },
                                    ai: {
                                        order: 1,
                                        result: {
                                            target(player, target) {
                                                return get.damageEffect(target, player);
                                            },
                                        },
                                    },
                                },
                            },
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            firstDo: true,
                            filter(event, player) {
                                if (player.countMark('mny_dy_lingbing') < 1) return false;
                                var num = player.countMark('mny_dy_lingbing');
                                var evt = event.getl(player);
                                if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= num) return false;
                                var evt = event;
                                for (var i = 0; i < 4; i++) {
                                    evt = evt.getParent('mny_dy_lingbing');
                                    if (evt.name != 'mny_dy_lingbing') return true;
                                }
                                return false;
                            },
                            content() {
                                var num = player.countMark('mny_dy_lingbing') - player.countCards('h');
                                if (num > 0) player.draw(num);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            marktext: '陵',
                            init(player) {
                                player.addMark('mny_dy_lingbing', 4);
                                if (player.countCards('h') < 4) {
                                    player.draw(4 - player.countCards('h'));
                                }
                            },
                            intro: {
                                name: '陵墓军团',
                                content(storage, player, skill) {
                                    var num = Math.min(player.countMark('mny_dy_lingbing'), 4);
                                    return '麾下军团数量〈' + num + '/4〉';
                                },
                            },
                        },
                        mny_dy_shalu: {
                            group: 'mny_dy_shalu_dam',
                            subSkill: {
                                dam: {
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    forced: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return player.countMark('mny_dy_shalu') > 0 && event.num > 0 && event.source && event.source != player;
                                    },
                                    content() {
                                        'step 0';
                                        var num = player.countMark('mny_dy_shalu');
                                        var cholist = [];
                                        event.chotrans = {};
                                        for (var i = 0; i < num; i++) {
                                            cholist.push(get.cnNumber(i + 1));
                                            event.chotrans[get.cnNumber(i + 1)] = i + 1;
                                        }
                                        cholist.push(get.translation('cancel'));
                                        event.chotrans[get.translation('cancel')] = 'cancel';
                                        player
                                            .chooseControl(cholist, function () {
                                                if (get.attitude(player, trigger.source) > 0 || get.damageEffect(player, player, trigger.source, trigger.nature) < 0) return '取消';
                                                if (get.attitude(player, trigger.source) > -2) {
                                                    return '一';
                                                } else {
                                                    if (player.countMark('mny_dy_shalu') > trigger.source.hp) {
                                                        return get.cnNumber(trigger.source.hp + 1);
                                                    } else {
                                                        return '一';
                                                    }
                                                }
                                                return '取消';
                                            })
                                            .set('prompt', '杀戮:即将受到来自' + get.translation(trigger.source.name) + '的' + get.cnNumber(trigger.num) + '点' + (trigger.nature ? get.translation(trigger.nature) : '') + '伤害,是否弃置<戮>标记进行反伤？');
                                        ('step 1');
                                        if (result.control == '取消') {
                                            event.finish();
                                        }
                                        ('step 2');
                                        game.playAudio('../extension/电影乱入/audio/mny/dy_shalu_damage.mp3');
                                        var num = event.chotrans[result.control];
                                        player.removeMark('mny_dy_shalu', num);
                                        ('step 3');
                                        trigger.changeToZero();
                                        var num = event.chotrans[result.control];
                                        trigger.source.damage(num, player);
                                    },
                                },
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            firstDo: true,
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return player.countCards('h') < player.countMark('mny_dy_shalu');
                            },
                            content() {
                                game.playAudio('../extension/电影乱入/audio/mny/dy_shalu_draw.mp3');
                                var num = player.countMark('mny_dy_shalu') - player.countCards('h');
                                player.draw(num);
                            },
                            init(player) {
                                player.storage.mny_dy_shalu = 4;
                                player.markSkill('mny_dy_shalu');
                            },
                            onremove(player) {
                                player.storage.mny_dy_shalu = 0;
                                player.unmarkSkill('mny_dy_shalu');
                            },
                            marktext: '戮',
                            intro: {
                                name: '杀戮秦军',
                                content(storage, player, skill) {
                                    var num = Math.min(player.countMark('mny_dy_shalu'), 4);
                                    return '麾下军团数量〈' + num + '/4〉';
                                },
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                            },
                        },
                        mny_dy_mishu: {
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'huogong' && Array.isArray(range) && range[1] != -1) range[1]++;
                                },
                            },
                            viewAs: {
                                name: 'huogong',
                                nature: 'fire',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hs', { color: 'black' })) return false;
                            },
                            position: 'hs',
                            prompt: '将一张黑色牌当火攻使用',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('h') > player.hp) {
                                    return 6 - get.value(card);
                                }
                                return 3 - get.value(card);
                            },
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/mny/dy_mishu.mp3');
                            },
                            ai: {
                                fireAttack: true,
                                basic: {
                                    order: 4,
                                    value: [3, 1],
                                    useful: 1,
                                },
                                wuxie(target, card, player, current, state) {
                                    if (get.attitude(current, player) >= 0 && state > 0) return false;
                                },
                                result: {
                                    player(player) {
                                        var nh = player.countCards('h');
                                        if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -10;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -10;
                                                if (viewAs && viewAs.name == 'huogong') return -10;
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                                        if (player.countCards('h') <= 1) return 0;
                                        if (target == player) {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -1.15;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -1.15;
                                                if (viewAs && viewAs.name == 'huogong') return -1.15;
                                            }
                                            return 0;
                                        }
                                        return -1.15;
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                    norepeat: 1,
                                },
                            },
                        },
                        mny_dy_changsheng: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            firstDo: true,
                            forced: true,
                            zhuSkill: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('mny_dy_changsheng')) return false;
                                return player.getDamagedHp() > 0 && event.player != player && event.player.group == 'shu';
                            },
                            content() {
                                'step 0';
                                trigger.player
                                    .chooseControl('确定', '取消', function () {
                                        if (get.attitude(trigger.player, player) > 1) return '确定';
                                        return '取消';
                                    })
                                    .set('prompt', '是否对' + get.translation(player.name) + '发动长生:翻开牌堆顶的三张牌,若其中有♥️️牌,其回复一点体力？');
                                ('step 1');
                                if (result.control == '取消') {
                                    event.finish();
                                }
                                ('step 2');
                                game.playAudio('../extension/电影乱入/audio/mny/dy_changsheng.mp3');
                                var cards = get.cards(3);
                                player.showCards(cards);
                                var has = false;
                                if (Array.isArray(cards)) for (var i of cards) {
                                    if (i.suit == 'heart') has = true;
                                }
                                if (has) {
                                    player.recover(1, trigger.player);
                                }
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        mny_dy_gangqu: {
                            group: 'mny_dy_gangqu_sha',
                            subSkill: {
                                sha: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        if (get.distance(player, event.target) > 1) return false;
                                        return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                                    },
                                    logTarget: 'target',
                                    content() {
                                        var id = trigger.target.playerid;
                                        var map = trigger.parent.customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (typeof map[id].shanRequired == 'number') {
                                            map[id].shanRequired++;
                                        } else {
                                            map[id].shanRequired = 2;
                                        }
                                    },
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > 1 || get.distance(player, arg.target) > 1) return false;
                                        },
                                    },
                                },
                            },
                            trigger: {
                                player: 'damageBegin3',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.num > 0 && (event.nature == 'thunder' || !event.nature);
                            },
                            content() {
                                if (trigger.nature == 'thunder') {
                                    game.playAudio('../extension/电影乱入/audio/zjz/mny_dy_gangqu_thunder.mp3');
                                    if (!player.isTurnedOver()) player.turnOver(true);
                                } else {
                                    game.playAudio('../extension/电影乱入/audio/zjz/mny_dy_gangqu_damage.mp3');
                                    trigger.num--;
                                }
                            },
                            ai: {
                                nodamage: true,
                                filterDamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (player.hasSkillTag('jueqing')) return;
                                        if (get.tag(card, 'thunderDamage')) return [1, -2];
                                        if (!(get.tag(card, 'fireDamage') || get.tag(card, 'iceDamage'))) {
                                            if (get.tag(card, 'damage')) return 'zeroplayertarget';
                                        }
                                    },
                                },
                            },
                        },
                        zjz_dy_jiangshi: {
                            subSkill: {
                                save: {
                                    mark: true,
                                    marktext: '保护',
                                    intro: {
                                        name: '保护指令',
                                        content(storage, player, skill) {
                                            var him = player.storage.zjz_dy_jiangshi_target;
                                            if (!him || !him.isAlive()) return '已失去行动目标';
                                            return '已锁定目标:' + get.translation(him.name);
                                        },
                                    },
                                    trigger: {
                                        global: 'useCardToTarget',
                                    },
                                    logTarget: 'target',
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.zjz_dy_jiangshi_target) return false;
                                        if (!event.targets.includes(player.storage.zjz_dy_jiangshi_target)) return false;
                                        if (player.hasSkill('qianxing')) return false;
                                        if (player.hasSkill('zjz_dy_jiangshi_used')) return false;
                                        return (event.card.name == 'sha' || event.card.name == 'juedou') && event.player != player && !event.targets.includes(player);
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseControl('确定', '取消', function () {
                                                if (get.attitude(player, trigger.target) > 0) {
                                                    var eff1 = get.effect(trigger.target, trigger.card, trigger.player, player);
                                                    var eff2 = get.effect(player, trigger.card, trigger.player, player);
                                                    if (eff1 < eff2) return '确定';
                                                }
                                                return '取消';
                                            })
                                            .set('prompt', '保护:是否对' + get.translation(trigger.target.name) + '使用的' + get.translation(trigger.card) + '目标转移给你？');
                                        ('step 1');
                                        if (result.control == '确定') {
                                            var evt = trigger.parent;
                                            evt.triggeredTargets2.remove(trigger.target);
                                            evt.targets.remove(trigger.target);
                                            evt.targets.push(player);
                                            game.log(trigger.card, '对', trigger.target, '的目标转移给了', player);
                                            player.addTempSkill('zjz_dy_jiangshi_used', { player: 'phaseBefore' });
                                        }
                                    },
                                },
                                used: {
                                    charlotte: true,
                                },
                                kill: {
                                    mark: true,
                                    marktext: '追击',
                                    intro: {
                                        name: '追杀指令',
                                        content(storage, player, skill) {
                                            var him = player.storage.zjz_dy_jiangshi_target;
                                            if (!him || !him.isAlive()) return '已失去行动目标';
                                            return '已锁定目标:' + get.translation(him.name);
                                        },
                                    },
                                    mod: {
                                        globalFrom(from, to) {
                                            if (from.storage.zjz_dy_jiangshi_target) {
                                                var him = from.storage.zjz_dy_jiangshi_target;
                                                if (him == to) return -Infinity;
                                            }
                                        },
                                    },
                                },
                                zhu: {
                                    trigger: {
                                        player: ['phaseBegin'],
                                    },
                                    charlotte: true,
                                    firstDo: true,
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player == _status.currentPhase && player.isTurnedOver();
                                    },
                                    content() {
                                        'step 0';
                                        player.turnOver();
                                        ('step 1');
                                        trigger.cancel();
                                    },
                                },
                            },
                            trigger: {
                                player: ['enterGame'],
                                global: 'phaseBefore',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                'step 0';
                                player.discard(player.getCards('hej'));
                                if (!player.isTurnedOver()) player.turnOver();
                                player.addTempSkill('zjz_dy_jiangshi_zhu');
                                game.playAudio('../extension/电影乱入/audio/zjz/dy_jiangshi.mp3');
                                ('step 1');
                                player.addTempSkill('qianxing', { player: 'turnOverAfter' });
                                player.chooseTarget(
                                    '降世:请选择一名角色以执行命令',
                                    1,
                                    true,
                                    function (card, player, target) {
                                        return player != target;
                                    },
                                    function (target) {
                                        return Math.abs(get.attitude(_status.event.player, target));
                                    }
                                );
                                ('step 2');
                                if (!result.targets || result.targets.length < 1) {
                                    event.finish();
                                    return;
                                }
                                event.target = result.targets[0];
                                var name = get.translation(event.target.name);
                                player.chooseControl(event.skills, function () {
                                    return event.skills.randomGet();
                                });
                                player
                                    .chooseControl('保护', '追击', function () {
                                        if (get.attitude(player, event.target) > 0) return '保护';
                                        return '追击';
                                    })
                                    .set('choiceList', ['<li>保护,每轮限一次,当' + name + '成为【杀】或【决斗】的目标时,你可以将目标转移给你', '<li>追击,你计算与' + name + '的距离始终视为一.']);
                                ('step 3');
                                game.playAudio('../extension/电影乱入/audio/zjz/dy_jiangshi_order.mp3');
                                if (result.control == '保护') {
                                    player.addSkill('zjz_dy_jiangshi_save');
                                } else {
                                    player.addSkill('zjz_dy_jiangshi_kill');
                                }
                                player.storage.zjz_dy_jiangshi_target = event.target;
                                player.line(event.target, 'red');
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        zjz_dy_yequ: {
                            group: ['zjz_dy_yequ_use', 'zjz_dy_yequ_lose'],
                            subSkill: {
                                lose: {
                                    usable: 1,
                                    enable: 'phaseUse',
                                    prompt: '失去一点体力并摸一张牌',
                                    content() {
                                        'step 0';
                                        game.playAudio('../extension/电影乱入/audio/zjz/dy_yequ_use.mp3');
                                        player.loseHp(1);
                                        ('step 1');
                                        player.draw();
                                    },
                                    ai: {
                                        basic: {
                                            order: 1,
                                        },
                                        result: {
                                            player(player) {
                                                if (player.countCards('h') >= player.hp) return -1;
                                                if (player.hp < 3) return -1;
                                                return 1;
                                            },
                                        },
                                    },
                                },
                                use: {
                                    enable: 'chooseToUse',
                                    hiddenCard(player, name) {
                                        if (get.type(name) == 'basic' && lib.inpile.includes(name)) return true;
                                    },
                                    filter(event, player) {
                                        if (player.countMark('zjz_dy_yequ') < 1) return false;
                                        if (event.type == 'wuxie') return false;
                                        for (var i of lib.inpile) {
                                            if (get.type(i) != 'basic') continue;
                                            var card = { name: i };
                                            if (event.filterCard && event.filterCard(card, player, event)) return true;
                                            if (i == 'sha') {
                                                for (var j of lib.inpile_nature) {
                                                    card.nature = j;
                                                    if (event.filterCard && event.filterCard(card, player, event)) return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            for (var i of lib.inpile) {
                                                if (get.type(i) != 'basic') continue;
                                                var card = { name: i };
                                                if (event.filterCard && event.filterCard(card, player, event)) list.push(['基本', '', i]);
                                            }
                                            return ui.create.dialog('液躯', [list, 'vcard'], 'hidden');
                                        },
                                        check(button) {
                                            if (button.link[2] == 'shan') return 3;
                                            var player = _status.event.player;
                                            if (button.link[2] == 'jiu') {
                                                if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                                                if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                                                return 0;
                                            }
                                            return player.getUseValue({ name: button.link[2], nature: button.link[3] }) / 4;
                                        },
                                        backup(links, player) {
                                            return {
                                                selectCard: -1,
                                                filterCard: () => false,
                                                viewAs: {
                                                    name: links[0][2],
                                                    nature: links[0][3],
                                                },
                                                precontent() {
                                                    game.playAudio('../extension/电影乱入/audio/zjz/dy_yequ_use.mp3');
                                                    player.removeMark('zjz_dy_yequ');
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            var name = links[0][2];
                                            return '将一枚<液>当' + get.translation(name) + '使用';
                                        },
                                    },
                                    ai: {
                                        order(item, player) {
                                            return 2;
                                        },
                                        respondShan: true,
                                        respondSha: true,
                                        skillTagFilter(player, tag) {
                                            if (player.countMark('zjz_dy_yequ') < 1) return false;
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
                            init(player) {
                                lib.translate.zjz_dy_yequ_use = '固化';
                                lib.translate.zjz_dy_yequ_lose = '液化';
                            },
                            trigger: {
                                player: ['damage', 'loseHpBegin'],
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'damage' && event.nature && event.nature != 'thunder') return false;
                                return event.num > 0;
                            },
                            content() {
                                if (trigger.name && trigger.nature && trigger.nature == 'thunder') {
                                    game.playAudio('../extension/电影乱入/audio/zjz/mny_dy_gangqu_thunder.mp3');
                                    if (!player.isTurnedOver()) player.turnOver(true);
                                } else {
                                    game.playAudio('../extension/电影乱入/audio/zjz/dy_yequ_damage.mp3');
                                    player.addMark('zjz_dy_yequ', trigger.num);
                                }
                            },
                            marktext: '液',
                            intro: {
                                name: '液态金属',
                                content: 'mark',
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'thunderDamage')) return [1, -2];
                                        if (!(get.tag(card, 'fireDamage') || get.tag(card, 'iceDamage'))) {
                                            if (get.tag(card, 'damage')) return 'zeroplayertarget';
                                        }
                                    },
                                },
                            },
                        },
                        zjz_dy_taiqu: {
                            group: ['zjz_dy_taiqu_sha', 'zjz_dy_taiqu_lose'],
                            subSkill: {
                                sha: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                                    },
                                    logTarget: 'target',
                                    content() {
                                        var id = trigger.target.playerid;
                                        var map = trigger.parent.customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (typeof map[id].shanRequired == 'number') {
                                            map[id].shanRequired++;
                                        } else {
                                            map[id].shanRequired = 2;
                                        }
                                    },
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > 1) return false;
                                        },
                                    },
                                },
                                lose: {
                                    usable: 1,
                                    enable: 'chooseToUse',
                                    hiddenCard(player, name) {
                                        if (player.countCards('hes') > 0 && get.type(name) == 'basic' && lib.inpile.includes(name)) return true;
                                    },
                                    filter(event, player) {
                                        if (player.countCards('hes') < 1) return false;
                                        if (event.type == 'wuxie') return false;
                                        if (event.type == 'respondShan') return false;
                                        for (var i of lib.inpile) {
                                            if (get.type(i) != 'basic') continue;
                                            var card = { name: i };
                                            if (event.filterCard && event.filterCard(card, player, event)) return true;
                                            if (i == 'sha') {
                                                for (var j of lib.inpile_nature) {
                                                    card.nature = j;
                                                    if (event.filterCard && event.filterCard(card, player, event)) return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    onuse(result, player) {
                                        game.playAudio('../extension/电影乱入/audio/zjz/dy_jiangshi_order.mp3');
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            for (var i = 0; i < lib.inpile.length; i++) {
                                                var name = lib.inpile[i];
                                                if (get.type(name) != 'basic') continue;
                                                if (name == 'sha') {
                                                    list.push(['基本', '', 'sha']);
                                                    for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                                } else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                            }
                                            if (list.length == 0) {
                                                return ui.create.dialog('钛躯已无可用牌');
                                            }
                                            return ui.create.dialog('钛躯', [list, 'vcard']);
                                        },
                                        filter(button, player) {
                                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                        },
                                        check(button) {
                                            var player = _status.event.player;
                                            if (player.countCards('hs', button.link[2]) > 0) return 0;
                                            if (button.link[2] == 'wugu') return 0;
                                            var effect = player.getUseValue(button.link[2]);
                                            if (effect > 0) return effect;
                                            return 0;
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard: true,
                                                selectCard: 1,
                                                popname: true,
                                                check(card) {
                                                    return 7 - get.value(card);
                                                },
                                                position: 'hes',
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                        },
                                    },
                                    ai: {
                                        skillTagFilter(player) {
                                            if (!player.countCards('hes')) return false;
                                        },
                                        order: 4,
                                        result: {
                                            player(player) {
                                                var allshown = true,
                                                    players = game.filterPlayer();
                                                for (var i of players) {
                                                    if (i.ai.shown == 0) {
                                                        allshown = false;
                                                    }
                                                    if (i != player && i.countCards('h') && get.attitude(player, i) > 0) {
                                                        return 1;
                                                    }
                                                }
                                                if (allshown) return 1;
                                                return 0;
                                            },
                                        },
                                        threaten: 1.9,
                                    },
                                },
                            },
                            trigger: {
                                player: 'damageBegin3',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.num > 0 && (['fire', 'thunder'].includes(event.nature) || !event.nature);
                            },
                            content() {
                                if (trigger.nature == 'thunder') {
                                    game.playAudio('../extension/电影乱入/audio/zjz/mny_dy_gangqu_thunder.mp3');
                                    if (!player.isTurnedOver()) player.turnOver(true);
                                } else {
                                    game.playAudio('../extension/电影乱入/audio/zjz/mny_dy_gangqu_damage.mp3');
                                    trigger.num--;
                                }
                            },
                            ai: {
                                nodamage: true,
                                filterDamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'thunderDamage')) return [1, -2];
                                        if (!get.tag(card, 'iceDamage')) {
                                            if (get.tag(card, 'damage')) return 'zeroplayertarget';
                                        }
                                    },
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
                                },
                            },
                        },
                        mny_dy_sizhou: {
                            group: ['mny_dy_sizhou_die', 'mny_dy_sizhou_tiesuo'],
                            subSkill: {
                                revive: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    preHidden: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.discard(player.getCards('j'));
                                        ('step 1');
                                        player.link(false);
                                        ('step 2');
                                        player.turnOver(false);
                                    },
                                },
                                link: {
                                    trigger: {
                                        player: ['enterGame'],
                                        global: 'phaseBefore',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        return (event.name != 'phase' || game.phaseNumber == 0) && !player.isLinked();
                                    },
                                    content() {
                                        player.link(true);
                                    },
                                },
                                die: {
                                    trigger: {
                                        player: 'chooseToUseBefore',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        if (player.isLinked()) return false;
                                        return event.type == 'dying' && player.isDying() && event.dying == player && !event.parent._mny_dy_sizhou_die;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.parent._mny_dy_sizhou_die = true;
                                        trigger.cancel();
                                        trigger.result = { bool: true };
                                        if (player.hp <= 0) {
                                            player.hp = 1;
                                        }
                                        player.update();
                                    },
                                    ai: {
                                        save: true,
                                        mingzhi: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'damage') && target.hp == 1 && !target.isLinked()) return 'zeroplayertarget';
                                            },
                                        },
                                        skillTagFilter(player, tag, target) {
                                            if (player.isLinked()) return false;
                                            if (player != target) return false;
                                        },
                                    },
                                },
                                tiesuo: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return (event.name != 'phase' || game.phaseNumber == 0) && !lib.inpile.includes('tiesuo');
                                    },
                                    content() {
                                        for (var i = 2; i < 8; i++) {
                                            var card = game.createCard2('tiesuo', i % 2 ? 'club' : 'spade', i);
                                            ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                        }
                                        game.broadcastAll(function () {
                                            lib.inpile.add('tiesuo');
                                        });
                                        game.updateRoundNumber();
                                    },
                                },
                            },
                            trigger: {
                                player: 'damageBegin1',
                            },
                            forced: true,
                            firstDo: true,
                            check() {
                                return false;
                            },
                            content() {
                                game.playAudio('../extension/电影乱入/audio/mny/dy_sizhou.mp3');
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num);
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                                judge(player, result) {
                                    if (_status.event.type == 'phase') {
                                        if (result.bool == false) {
                                            result.bool = null;
                                        } else {
                                            result.bool = false;
                                        }
                                    }
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'delay') return 0.5;
                                        if (card.name == 'suolianjia') return 'zeroplayertarget';
                                        if (card.name == 'tao' && target.isDying() && !target.isLinked()) return 'zeroplayertarget';
                                        if (card.name == 'tiesuo') {
                                            if (!target.isLinked() && get.attitude(player, target) < 0) {
                                                return 2;
                                            }
                                            if (target.isLinked() && get.attitude(player, target) > 0) {
                                                return 2;
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        mny_dy_zonghun: {
                            subSkill: {
                                hun: {
                                    mark: true,
                                    marktext: '傀儡',
                                    intro: {
                                        name: '丧尸傀儡',
                                        content: '武将正在被操控',
                                    },
                                    trigger: {
                                        player: ['useCardBefore'],
                                    },
                                    firstDo: true,
                                    filter(event, player) {
                                        return player.storage.mny_dy_zonghun_benti;
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        var him = player.storage.mny_dy_zonghun_benti;
                                        him.line(player, 'grey');
                                    },
                                    mod: {
                                        maxHandcardBase(player, num) {
                                            return 0;
                                        },
                                    },
                                    popup: false,
                                },
                                dam: {
                                    mark: true,
                                    marktext: '纵魂',
                                    intro: {
                                        name: '法术本体',
                                        content: '纵魂期间本体防止受到的任何伤害或体力流失',
                                    },
                                    trigger: {
                                        player: ['damageBefore', 'loseHpBefore'],
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    firstDo: true,
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        noice: true,
                                        nofire: true,
                                        nothunder: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'damage')) return 'zerotarget';
                                            },
                                        },
                                    },
                                },
                            },
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return game.dead && game.dead.length;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                event.cho = game.getRandomInt(0, game.dead.length);
                                player.chooseButton(ui.create.dialog('选择要复活的角色', [list, 'character']), function (button) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++) return event.cho == i;
                                });
                                ('step 1');
                                if (result.bool) {
                                    game.playAudio('../extension/电影乱入/audio/mny/dy_zonghun.mp3');
                                    event.auto = _status.auto;
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
                                    var dead = game.dead[i];
                                    dead.revive(dead.maxHp);
                                    dead.draw(4);
                                    game.addVideo('revive', dead);
                                    event.target = dead;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.target.phaseUse();
                                ('step 3');
                                event.target.die();
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                                threaten: 1.2,
                            },
                        },
                        mny_dy_jishen: {
                            derivation: 'mny_dy_saite',
                            enable: 'phaseUse',
                            dutySkill: true,
                            filter(event, player) {
                                if (player.countCards('h', { color: 'black' }) < 1) return false;
                                return !player.storage.mny_dy_jishen_him;
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            check(card, player) {
                                return 9 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return target.sex == 'male' && !target.hasSkill('mny_dy_saite');
                            },
                            init(player, skill) {
                                player.storage.mny_dy_jishen_break = true;
                                player.storage.mny_dy_jishen_him = false;
                            },
                            content() {
                                'step 0';
                                game.playAudio('../extension/电影乱入/audio/mny/dy_jishen.mp3');
                                target.addSkill('mny_dy_jishen_judge');
                                player.storage.mny_dy_jishen_break = false;
                                player.markSkill('mny_dy_jishen_achieve');
                                player.storage.mny_dy_jishen_him = target;
                                player.storage.mny_dy_jishen_achieve = target;
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        return target.hp;
                                    },
                                    player(player, target) {
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return get.attitude(player, current) > 2 && current.sex == 'male';
                                            })
                                        )
                                            return -1;
                                        if (player.isLinked()) return 3;
                                        return 1;
                                    },
                                },
                            },
                            group: ['mny_dy_jishen_achieve', 'mny_dy_jishen_fail'],
                            subSkill: {
                                judge: {
                                    marktext: '祭',
                                    intro: {
                                        name: '亡灵祭坛',
                                        content(storage, player) {
                                            return get.translation(storage);
                                        },
                                        onunmark(storage, player) {
                                            player.storage.mny_dy_jishen_achieve = [];
                                        },
                                    },
                                },
                                log: {
                                    juexingji: true,
                                    init(player, skill) {
                                        player.storage[skill] = false;
                                    },
                                },
                                achieve: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    firstDo: true,
                                    filter(event, player) {
                                        if (player.storage.mny_dy_jishen_break) return false;
                                        return player.storage.mny_dy_jishen_him && player.storage.mny_dy_jishen_him.isAlive();
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.him = player.storage.mny_dy_jishen_him;
                                        if (!event.him.storage.mny_dy_jishen_judge) event.him.storage.mny_dy_jishen_judge = [];
                                        var suits = event.him.storage.mny_dy_jishen_judge;
                                        player.line(event.him, 'thunder');
                                        player.judge(function (card) {
                                            if (suits.includes(card.suit)) return -0.5;
                                            return 2;
                                        }).judge2 = function (result) {
                                            return result.bool;
                                        };
                                        ('step 1');
                                        if (!event.him.storage.mny_dy_jishen_judge.includes(result.suit)) {
                                            event.him.storage.mny_dy_jishen_judge.push(result.suit);
                                            event.him.markSkill('mny_dy_jishen_judge');
                                        } else {
                                            if (player.isLinked()) player.link(false);
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.him.storage.mny_dy_jishen_judge.length < 4) {
                                            event.finish();
                                        }
                                        ('step 3');
                                        game.playAudio('../extension/电影乱入/audio/mny/dy_jishen_judge.mp3');
                                        game.log(player, '成功完成使命');
                                        player.awakenSkill('mny_dy_jishen');
                                        player.storage.mny_dy_jishen_break = true;
                                        player.unmarkSkill('mny_dy_jishen_achieve');
                                        event.him.addSkill('mny_dy_saite');
                                    },
                                    marktext: '祭司',
                                    intro: {
                                        name: '召唤赛特',
                                        content: 'player',
                                    },
                                },
                                fail: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    filter(event, player) {
                                        if (player.storage.mny_dy_jishen_break) return false;
                                        if (!player.storage.mny_dy_jishen_him) return false;
                                        return player.storage.mny_dy_jishen_him == event.player;
                                    },
                                    content() {
                                        'step 0';
                                        game.log(player, '使命失败');
                                        player.awakenSkill('mny_dy_jishen');
                                        player.discard(player.getCards('he'));
                                        if (!player.isLinked()) player.link(true);
                                        player.storage.mny_dy_jishen_break = true;
                                        player.unmarkSkill('mny_dy_jishen_achieve');
                                    },
                                },
                            },
                        },
                        mny_dy_saite: {
                            subSkill: {
                                die: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    forceDie: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    mark: true,
                                    marktext: '死魂',
                                    intro: {
                                        name: '死灵叹息',
                                        content(storage, player) {
                                            var him = player.storage.mny_dy_saite_die;
                                            return '死亡后' + get.translation(him.name) + '回复〖赛特〗';
                                        },
                                    },
                                    content() {
                                        'step 0';
                                        event.source = player.storage.mny_dy_saite_die;
                                        if (!event.source || !event.source.isAlive()) {
                                            player.removeSkill('mny_dy_saite_die');
                                            event.finish();
                                        }
                                        ('step 1');
                                        event.source.restoreSkill('mny_dy_saite');
                                        event.source.storage.mny_dy_saite = false;
                                        player.removeSkill('mny_dy_saite_die');
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (player.storage.mny_dy_saite) return false;
                                return target != player && target.hp > 0;
                            },
                            mark: true,
                            marktext: '赛特',
                            limited: true,
                            init(player) {
                                player.storage.mny_dy_saite = false;
                            },
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/mny/dy_saite.mp3');
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('mny_dy_saite');
                                player.storage.mny_dy_saite = true;
                                target.addSkill('mny_dy_saite_die');
                                target.storage.mny_dy_saite_die = player;
                                ('step 1');
                                target.hp = 0;
                                target.update();
                                target.dying();
                            },
                            intro: {
                                name: '赛特之息',
                                content: 'limited',
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return -target.hp;
                                    },
                                },
                                threaten: 1.7,
                            },
                        },
                        hkdg_dy_juzhen: {
                            group: ['hkdg_dy_juzhen_hp', 'hkdg_dy_juzhen_tao', 'hkdg_dy_juzhen_skill'],
                            subSkill: {
                                forbid: {
                                    mark: true,
                                    marktext: '锡安',
                                    intro: {
                                        name: '现实世界',
                                        content: '〖矩阵〗的效果失效',
                                    },
                                    init(player) {
                                        game.playAudio('../extension/电影乱入/audio/hkdg/dy_xian_on.mp3');
                                        game.log(player, '退出了虚拟世界');
                                    },
                                    onremove(player) {
                                        game.playAudio('../extension/电影乱入/audio/hkdg/dy_xian_off.mp3');
                                        game.log(player, '进入了虚拟世界');
                                    },
                                    charlotte: true,
                                },
                                skill: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('hkdg_dy_juzhen_forbid');
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current != player) {
                                                var one = !current.hasSkill('hkdg_dy_juzhen_lost');
                                                var two = !current.hasSkill('hkdg_dy_juzhen');
                                                var three = current.hasSkill('hkdg_dy_juzhen_forbid');
                                                if (one && (two || three)) {
                                                    current.addTempSkill('hkdg_dy_juzhen_lost');
                                                }
                                            }
                                        });
                                    },
                                },
                                lost: {
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    skillBlocker(skill, player) {
                                        if (lib.skill[skill].charlotte) return false;
                                        if (!lib.translate[skill]) return false;
                                        if (lib.translate[skill] == '') return false;
                                        if (!lib.translate[skill + '_info']) return false;
                                        if (lib.translate[skill + '_info'] == '') return false;
                                        return true;
                                    },
                                    mark: true,
                                    marktext: '失效',
                                    intro: {
                                        name: '虚拟世界',
                                        content(storage, player, skill) {
                                            var list = player.getSkills(null, false, false).filter(function (i) {
                                                return lib.skill.hkdg_dy_juzhen_lost.skillBlocker(i, player);
                                            });
                                            if (list.length) return '现实世界的技能在此处失效<li>失效技能:' + get.translation(list);
                                            return '现实世界的技能在此处失效<li>无失效技能';
                                        },
                                    },
                                },
                                tao: {
                                    mod: {
                                        cardname(card, player) {
                                            if (card.name == 'tao' && !player.hasSkill('hkdg_dy_juzhen_forbid')) return 'hkdg_dy_card_tao';
                                        },
                                    },
                                    init(player) {
                                        lib.translate.hkdg_dy_card_tao_info = get.translation('tao_info');
                                        lib.translate.hkdg_dy_card_tao = '虚拟';
                                        lib.card.hkdg_dy_card_tao = {
                                            image: 'ext:电影乱入/card/hkdg_dy_card_tao.png',
                                            fullskin: false,
                                            type: 'basic',
                                            cardcolor: 'red',
                                            toself: true,
                                            enable(card, player) {
                                                if (player.hasSkill('hkdg_dy_juzhen') && !player.hasSkill('hkdg_dy_juzhen_forbid')) {
                                                    return player.countMark('hkdg_dy_juzhen') < player.maxHp;
                                                } else {
                                                    return player.canUse({ name: 'tao' }, player);
                                                }
                                            },
                                            savable: true,
                                            selectTarget: -1,
                                            filterTarget(card, player, target) {
                                                if (target.hasSkill('hkdg_dy_juzhen') && !target.hasSkill('hkdg_dy_juzhen_forbid')) {
                                                    return target == player && target.countMark('hkdg_dy_juzhen') < target.maxHp;
                                                } else {
                                                    return target == player && player.canUse({ name: 'tao' }, target);
                                                }
                                            },
                                            modTarget(card, player, target) {
                                                if (target.hasSkill('hkdg_dy_juzhen') && !target.hasSkill('hkdg_dy_juzhen_forbid')) {
                                                    return target.countMark('hkdg_dy_juzhen') < target.maxHp;
                                                } else {
                                                    return player.canUse({ name: 'tao' }, target);
                                                }
                                            },
                                            content() {
                                                if (target.hasSkill('hkdg_dy_juzhen') && !target.hasSkill('hkdg_dy_juzhen_forbid')) {
                                                    var num = 1;
                                                    if (lib.config.background_audio) {
                                                        game.playAudio('effect/recover');
                                                    }
                                                    game.broadcast(function () {
                                                        if (lib.config.background_audio) {
                                                            game.playAudio('effect/recover');
                                                        }
                                                    });
                                                    if (num > 0) {
                                                        game.broadcastAll(function (player) {
                                                            if (lib.config.animation && !lib.config.low_performance) {
                                                                player.$recover();
                                                            }
                                                        }, player);
                                                        player.$damagepop(num, 'wood');
                                                        game.log(target, '在虚拟世界中回复了一点体力');
                                                    }
                                                    player.$recover();
                                                    if (target.countMark('hkdg_dy_juzhen') < target.maxHp) target.addMark('hkdg_dy_juzhen');
                                                } else {
                                                    target.recover(event.baseDamage || 1);
                                                }
                                            },
                                            ai: {
                                                basic: {
                                                    order(card, player) {
                                                        if (player.hasSkillTag('pretao')) return 5;
                                                        return 2;
                                                    },
                                                    useful: [6.5, 4, 3, 2],
                                                    value: [6.5, 4, 3, 2],
                                                },
                                                result: {
                                                    target: 2,
                                                    target_use(player, target) {
                                                        if (target.hasSkill('hkdg_dy_juzhen') && !target.hasSkill('hkdg_dy_juzhen_forbid')) {
                                                            if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                                            var nd = player.needsToDiscard();
                                                            var keep = false;
                                                            if (nd <= 0) {
                                                                keep = true;
                                                            } else if (nd == 1 && target.countMark('hkdg_dy_juzhen') >= 2 && target.countCards('h', 'tao') <= 1) {
                                                                keep = true;
                                                            }
                                                            var mode = get.mode();
                                                            if (target.countMark('hkdg_dy_juzhen') >= 2 && keep && target.hasFriend()) {
                                                                if (target.countMark('hkdg_dy_juzhen') > 2 || nd == 0) return 0;
                                                                if (target.countMark('hkdg_dy_juzhen') == 2) {
                                                                    if (
                                                                        game.hasPlayer(function (current) {
                                                                            if (target != current && get.attitude(target, current) >= 3) {
                                                                                if (current.hp <= 1) return true;
                                                                                if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                                            }
                                                                        })
                                                                    ) {
                                                                        return 0;
                                                                    }
                                                                }
                                                            }
                                                            if (target.countMark('hkdg_dy_juzhen') < 0 && target != player && target.identity != 'zhu') return 0;
                                                            var att = get.attitude(player, target);
                                                            if (att < 3 && att >= 0 && player != target) return 0;
                                                            var tri = _status.event.getTrigger();
                                                            if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                                                if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                                    var num = game.countPlayer(function (current) {
                                                                        if (current.identity == 'fan') {
                                                                            return current.countCards('h', 'tao');
                                                                        }
                                                                    });
                                                                    if (num > 1 && player == target) return 2;
                                                                    return 0;
                                                                }
                                                            }
                                                            if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                                                if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                                    return 0;
                                                                }
                                                            }
                                                            if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                                                return 0;
                                                            }
                                                            return 2;
                                                        } else {
                                                            if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                                            var nd = player.needsToDiscard();
                                                            var keep = false;
                                                            if (nd <= 0) {
                                                                keep = true;
                                                            } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                                                keep = true;
                                                            }
                                                            var mode = get.mode();
                                                            if (target.hp >= 2 && keep && target.hasFriend()) {
                                                                if (target.hp > 2 || nd == 0) return 0;
                                                                if (target.hp == 2) {
                                                                    if (
                                                                        game.hasPlayer(function (current) {
                                                                            if (target != current && get.attitude(target, current) >= 3) {
                                                                                if (current.hp <= 1) return true;
                                                                                if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                                            }
                                                                        })
                                                                    ) {
                                                                        return 0;
                                                                    }
                                                                }
                                                            }
                                                            if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                                            var att = get.attitude(player, target);
                                                            if (att < 3 && att >= 0 && player != target) return 0;
                                                            var tri = _status.event.getTrigger();
                                                            if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                                                if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                                    var num = game.countPlayer(function (current) {
                                                                        if (current.identity == 'fan') {
                                                                            return current.countCards('h', 'tao');
                                                                        }
                                                                    });
                                                                    if (num > 1 && player == target) return 2;
                                                                    return 0;
                                                                }
                                                            }
                                                            if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                                                if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                                    return 0;
                                                                }
                                                            }
                                                            if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                                                return 0;
                                                            }
                                                            return 2;
                                                        }
                                                    },
                                                },
                                                tag: {
                                                    recover: 1,
                                                    save: 1,
                                                },
                                            },
                                        };
                                    },
                                },
                                hp: {
                                    trigger: {
                                        player: ['loseHpBefore'],
                                    },
                                    firstDo: true,
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return !player.hasSkill('hkdg_dy_juzhen_forbid');
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num = Math.min(trigger.num, player.countMark('hkdg_dy_juzhen'));
                                        if (trigger.animate !== false) {
                                            if (lib.config.background_audio) {
                                                game.playAudio('effect/loseHp');
                                            }
                                            game.broadcast(function () {
                                                if (lib.config.background_audio) {
                                                    game.playAudio('effect/loseHp');
                                                }
                                            });
                                            game.log(player, '失去了' + get.cnNumber(num) + '点体力');
                                            player.$damagepop(-trigger.num, 'water');
                                        }
                                        game.log(player, '在虚拟世界中失去了', get.cnNumber(trigger.num), '点体力');
                                        player.removeMark('hkdg_dy_juzhen', trigger.num);
                                        trigger.changeToZero();
                                        ('step 1');
                                        event.targets = game.filterPlayer();
                                        event.targets.sort(lib.sort.seat);
                                        if (player.countMark('hkdg_dy_juzhen') < 1) {
                                            game.log(player, '在虚拟世界中陷入了濒死状态');
                                        }
                                        ('step 2');
                                        if (player.countMark('hkdg_dy_juzhen') > 0) {
                                            event.finish();
                                        } else {
                                            result.bool = false;
                                        }
                                        ('step 3');
                                        if (event.targets.length) {
                                            event.shift = event.targets.shift();
                                            var next = event.shift.chooseToRespond('矩阵:' + get.translation(player.name) + '即将脑死亡,是否替其打出一张【桃】令其在虚拟世界回复一点体力？');
                                            next.set('filterCard', function (card) {
                                                return ['hkdg_dy_card_tao', 'tao'].includes(card.name);
                                            });
                                            next.set('ai', function () {
                                                return get.attitude(event.shift, player) - 2;
                                            });
                                            next.set('source', player);
                                            next.set('hkdg_dy_juzhen', true);
                                            next.set('skillwarn', '令' + get.translation(player.name) + '在虚拟世界中回复了一点体力');
                                            next.noOrdering = true;
                                            next.autochoose = lib.filter.autoUseTao;
                                            next.is_hkdg_dy_juzhen_saving = true;
                                            next.is_hkdg_dy_juzhen_player = player;
                                        } else {
                                            player.die();
                                        }
                                        ('step 4');
                                        if (result.bool) {
                                            if (player.countMark('hkdg_dy_juzhen') < player.maxHp) {
                                                var num = 1;
                                                if (lib.config.background_audio) {
                                                    game.playAudio('effect/recover');
                                                }
                                                game.broadcast(function () {
                                                    if (lib.config.background_audio) {
                                                        game.playAudio('effect/recover');
                                                    }
                                                });
                                                if (num > 0) {
                                                    player.changeHp(num, false);
                                                    game.broadcastAll(function (player) {
                                                        if (lib.config.animation && !lib.config.low_performance) {
                                                            player.$recover();
                                                        }
                                                    }, player);
                                                    player.$damagepop(num, 'wood');
                                                    game.log(player, '在虚拟世界中回复了一点体力');
                                                }
                                                player.$recover();
                                                player.addMark('hkdg_dy_juzhen');
                                            } else {
                                                game.log(player, '在虚拟世界中体力值已满');
                                            }
                                        }
                                        event.goto(2);
                                    },
                                },
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    if (!player.hasSkill('hkdg_dy_juzhen_forbid')) {
                                        return player.countMark('hkdg_dy_juzhen');
                                    }
                                },
                            },
                            marktext: '源',
                            trigger: {
                                player: ['damageBegin4', 'enterGame'],
                                global: 'phaseBefore',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('hkdg_dy_juzhen_forbid')) return false;
                                return (event.name != 'damage' && (event.name != 'phase' || game.phaseNumber == 0)) || event.num > 0;
                            },
                            content() {
                                'step 0';
                                if (trigger.name == 'damage') {
                                    trigger.num = Math.min(trigger.num, player.countMark('hkdg_dy_juzhen'));
                                    if (trigger.animate !== false) {
                                        player.$damage(trigger.source);
                                        game.broadcastAll(
                                            function (nature, player) {
                                                if (lib.config.animation && !lib.config.low_performance) {
                                                    if (nature == 'fire') {
                                                        player.$fire();
                                                    } else if (nature == 'thunder') {
                                                        player.$thunder();
                                                    }
                                                }
                                            },
                                            trigger.nature,
                                            player
                                        );
                                        player.$damagepop(-trigger.num, trigger.nature);
                                    }
                                    game.log(player, '在虚拟世界中受到了', get.cnNumber(trigger.num), '点' + (trigger.source ? '来自' + get.translation(trigger.source.name) + '的' : '') + (trigger.nature ? get.translation(trigger.nature) : '') + '伤害');
                                    player.removeMark('hkdg_dy_juzhen', trigger.num);
                                    trigger.changeToZero();
                                } else {
                                    player.addMark('hkdg_dy_juzhen', player.hp);
                                }
                                ('step 1');
                                event.targets = game.filterPlayer();
                                event.targets.sort(lib.sort.seat);
                                if (player.countMark('hkdg_dy_juzhen') < 1) {
                                    game.log(player, '在虚拟世界中陷入了濒死状态');
                                }
                                ('step 2');
                                if (player.countMark('hkdg_dy_juzhen') > 0) {
                                    event.finish();
                                } else {
                                    result.bool = false;
                                }
                                ('step 3');
                                if (event.targets.length) {
                                    event.shift = event.targets.shift();
                                    var next = event.shift.chooseToRespond('矩阵:' + get.translation(player.name) + '即将脑死亡,是否替其打出一张【桃】令其在虚拟世界回复一点体力？');
                                    next.set('filterCard', function (card) {
                                        return ['hkdg_dy_card_tao', 'tao'].includes(card.name);
                                    });
                                    next.set('ai', function () {
                                        return get.attitude(event.shift, player) - 2;
                                    });
                                    next.set('source', player);
                                    next.set('hkdg_dy_juzhen', true);
                                    next.set('skillwarn', '令' + get.translation(player.name) + '在虚拟世界中回复了一点体力');
                                    next.noOrdering = true;
                                    next.autochoose = lib.filter.autoUseTao;
                                    next.is_hkdg_dy_juzhen_saving = true;
                                    next.is_hkdg_dy_juzhen_player = player;
                                } else {
                                    player.die();
                                }
                                ('step 4');
                                if (result.bool) {
                                    if (player.countMark('hkdg_dy_juzhen') < player.maxHp) {
                                        var num = 1;
                                        if (lib.config.background_audio) {
                                            game.playAudio('effect/recover');
                                        }
                                        game.broadcast(function () {
                                            if (lib.config.background_audio) {
                                                game.playAudio('effect/recover');
                                            }
                                        });
                                        if (num > 0) {
                                            player.changeHp(num, false);
                                            game.broadcastAll(function (player) {
                                                if (lib.config.animation && !lib.config.low_performance) {
                                                    player.$recover();
                                                }
                                            }, player);
                                            player.$damagepop(num, 'wood');
                                            game.log(player, '在虚拟世界中回复了一点体力');
                                        }
                                        player.$recover();
                                        player.addMark('hkdg_dy_juzhen');
                                    } else {
                                        game.log(player, '在虚拟世界中体力值已满');
                                    }
                                }
                                event.goto(2);
                            },
                            viewAsDamageContent() {
                                'step 0';
                                if (lib.config.background_audio) {
                                    game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                }
                                game.broadcast(function (num) {
                                    if (lib.config.background_audio) {
                                        game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                    }
                                }, num);
                                var str = '在虚拟世界中受到了';
                                if (source) str += '来自<span class="bluetext">' + (source == player ? '自己' : get.translation(source)) + '</span>的';
                                str += get.cnNumber(num) + '点';
                                if (event.nature) str += get.translation(event.nature) + '属性';
                                str += '伤害';
                                game.log(player, str);
                                if (player.stat[player.stat.length - 1].damaged == undefined) {
                                    player.stat[player.stat.length - 1].damaged = num;
                                } else {
                                    player.stat[player.stat.length - 1].damaged += num;
                                }
                                if (source) {
                                    source.getHistory('sourceDamage').push(event);
                                    if (source.stat[source.stat.length - 1].damage == undefined) {
                                        source.stat[source.stat.length - 1].damage = num;
                                    } else {
                                        source.stat[source.stat.length - 1].damage += num;
                                    }
                                }
                                player.getHistory('damage').push(event);
                                if (event.animate !== false) {
                                    player.$damage(source);
                                    game.broadcastAll(
                                        function (nature, player) {
                                            if (lib.config.animation && !lib.config.low_performance) {
                                                if (nature == 'fire') {
                                                    player.$fire();
                                                } else if (nature == 'thunder') {
                                                    player.$thunder();
                                                }
                                            }
                                        },
                                        event.nature,
                                        player
                                    );
                                    var numx = Math.max(0, num - player.hujia);
                                    player.$damagepop(-numx, 'gray');
                                }
                                ('step 1');
                                event.trigger('damageSource');
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (game.countPlayer((i) => i != player) < 2) return 0;
                                        var list = game
                                            .filterPlayer((current) => current != player)
                                            .map((current) => {
                                                var _hp = current.hp,
                                                    _maxhp = current.maxHp;
                                                current.hp = 10;
                                                current.maxHp = 10;
                                                var eff = get.damageEffect(current, player, current) + 10;
                                                current.hp = _hp;
                                                current.maxHp = _maxhp;
                                                return [current, eff];
                                            })
                                            .sort((a, b) => b[1] - a[1])[0];
                                        if (list[1] < 0) return 0;
                                        var targetx = list[0],
                                            sign = get.sgnAttitude(player, target);
                                        if (ui.selected.targets.length) return target == targetx ? sign : 0;
                                        return (
                                            sign *
                                            (game
                                                .filterPlayer((current) => {
                                                    return current != player && current != targetx;
                                                })
                                                .map((current) => {
                                                    var _hp = targetx.hp,
                                                        _maxhp = targetx.maxHp;
                                                    targetx.hp = 10;
                                                    targetx.maxHp = 10;
                                                    var eff = get.damageEffect(targetx, current, player);
                                                    targetx.hp = _hp;
                                                    targetx.maxHp = _maxhp;
                                                    return [current, eff];
                                                })
                                                .sort((a, b) => b[1] - a[1])[0][0] == target
                                                ? 10
                                                : 1)
                                        );
                                    },
                                },
                            },
                            intro: {
                                name: '矩阵代码',
                                content(storage, player, skill) {
                                    var num = player.countMark('hkdg_dy_juzhen');
                                    return '虚拟体力值〈' + num + '/' + player.maxHp + '〉';
                                },
                            },
                        },
                        hkdg_dy_xian: {
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            firstDo: true,
                            filter(event, player) {
                                return player.hasSkill('hkdg_dy_juzhen');
                            },
                            check(event, player) {
                                if (player.countCards('h', { name: 'tao' }) > 0) {
                                    if (player.countMark('hkdg_dy_juzhen') > player.hp) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                } else {
                                    if (player.countMark('hkdg_dy_juzhen') < player.hp) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('hkdg_dy_juzhen_forbid', { player: 'phaseBefore' });
                            },
                        },
                        hkdg_dy_fuzhi: {
                            subSkill: {
                                virus: {
                                    group: ['hkdg_dy_fuzhi_lose'],
                                    trigger: {
                                        player: 'die',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    forceDie: true,
                                    filter(event, player) {
                                        var info = player.storage.hkdg_dy_fuzhi_virus_infos;
                                        if (!(info && info.length >= 2 && lib.character[info[0]])) return false;
                                        game.playAudio('../extension/电影乱入/audio/hkdg/dy_fuzhi_die.mp3');
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.revive(1);
                                        ('step 1');
                                        var name = player.storage.hkdg_dy_fuzhi_virus_infos[0];
                                        var ide = player.storage.hkdg_dy_fuzhi_virus_infos[1];
                                        player.init(name);
                                        player.storage.hkdg_dy_juzhen = player.hp;
                                        player.markSkill('hkdg_dy_juzhen');
                                        player.draw(4);
                                        player.identity = ide;
                                        player.setIdentity();
                                        player.identityShown = false;
                                    },
                                    mark: true,
                                    marktext: '病毒',
                                    intro: {
                                        name: '程序入侵',
                                        content(storage, player, skill) {
                                            if (player.hasSkill('hkdg_dy_juzhen') && !player.hasSkill('hkdg_dy_juzhen_forbid')) {
                                                var num = Math.max(player.maxHp - player.countMark('hkdg_dy_juzhen'), 0);
                                            } else {
                                                var num = player.maxHp - player.hp;
                                            }
                                            return '病毒复制进度〈' + num + '/' + player.maxHp + '〉';
                                        },
                                    },
                                },
                                lose: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        player.loseHp();
                                    },
                                },
                                damage: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (player.hasSkill('hkdg_dy_fuzhi_virus')) return false;
                                        return event.parent.skill == 'hkdg_dy_fuzhi';
                                    },
                                    content() {
                                        game.playAudio('../extension/电影乱入/audio/hkdg/dy_fuzhi.mp3');
                                        trigger.changeToZero();
                                        trigger.player.addSkill('hkdg_dy_fuzhi_virus');
                                        trigger.player.storage.hkdg_dy_fuzhi_virus_infos = [player.name, player.identity];
                                    },
                                },
                            },
                            usable: 1,
                            group: 'hkdg_dy_fuzhi_damage',
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            selectCard: 2,
                            position: 'hs',
                            viewAs: {
                                name: 'sha',
                                is_hkdg_dy_fuzhi: true,
                            },
                            precontent() {
                                event.parent.addCount = false;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && card.is_hkdg_dy_fuzhi) return Infinity;
                                },
                            },
                            prompt: '将两张黑色手牌当杀使用',
                            viewAsFilter(player) {
                                return player.countCards('hs', { color: 'black' }) > 1;
                            },
                            filterTarget(card, player, target) {
                                return target != player && player.canUse({ name: 'sha' }, target, false) && !target.hasSkill('hkdg_dy_fuzhi_virus') && !target.hasSkill('hkdg_dy_fuzhi');
                            },
                            check(card) {
                                if (_status.event.name == 'chooseToRespond') {
                                    if (card.name == 'sha') return 0;
                                    return 6 - get.useful(card);
                                }
                                if (_status.event.player.countCards('hs') < 4) return 6 - get.useful(card);
                                return 7 - get.useful(card);
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (player.countCards('hs', { color: 'black' }) < 2) return false;
                                },
                                order(item, player) {
                                    if (player.countCards('hs') < 4) {
                                        return 1;
                                    }
                                    return 4;
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
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                ) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -0.5;
                                            }
                                            return -1.5;
                                        })();
                                        if (
                                            !isLink &&
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
                                            return eff / 1.2;
                                        return eff;
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
                            },
                        },
                        hkdg_dy_jueze: {
                            derivation: ['hkdg_dy_qingdi', 'hkdg_dy_xian'],
                            group: ['hkdg_dy_jueze_source'],
                            subSkill: {
                                source: {
                                    trigger: {
                                        player: ['enterGame'],
                                        global: ['phaseBefore', 'gameDrawAfter'],
                                    },
                                    forced: true,
                                    silent: true,
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        return game.phaseNumber == 0 || !player.storage.hkdg_dy_jueze_init;
                                    },
                                    content() {
                                        player.storage.hkdg_dy_jueze = false;
                                        player.storage.hkdg_dy_jueze_init = [player.maxHp, player.getCards('h')];
                                    },
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            mark: true,
                            limited: true,
                            filter(event, player) {
                                if (!player.storage.hkdg_dy_jueze_init) return false;
                                if (player.storage.hkdg_dy_jueze_init.length < 2) return false;
                                if (typeof player.storage.hkdg_dy_jueze_init[0] != 'number') return false;
                                if (player.storage.hkdg_dy_jueze) return false;
                                if (event.is_hkdg_dy_juzhen_saving) {
                                    if (event.is_hkdg_dy_juzhen_player != player) return false;
                                    return true;
                                } else if (event.parent.name == 'phaseUse') {
                                    return true;
                                }
                                return false;
                            },
                            init(player) {
                                player.storage.hkdg_dy_jueze = false;
                            },
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/hkdg/dy_jueze.mp3');
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('hkdg_dy_jueze');
                                player.storage.hkdg_dy_jueze = true;
                                var next = player.chooseControl('红色药丸', '蓝色药丸').set('ai', function () {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return get.attitude(player, current) > 2 && current.sex == 'female' && current.hp + current.countCards('hs') > 2;
                                        }) ||
                                        player.countMark('hkdg_dy_juzhen') > 1
                                    ) {
                                        return '红色药丸';
                                    } else {
                                        return '蓝色药丸';
                                    }
                                });
                                next.set('prompt', '这是你最后的机会,一旦做出选择,再无回头之路');
                                next.set('choiceList', ['<li>红色药丸:你获得〖情谛〗和〖锡安〗,同时若你濒死,你防止此次死亡.', '<li>蓝色药丸:你将武将牌的状态、区域内的牌和<源>标记复原至游戏开始时的状态.']);
                                ('step 1');
                                if (result.control == '红色药丸') event.goto(5);
                                ('step 2');
                                player.link(false);
                                ('step 3');
                                player.turnOver(false);
                                ('step 4');
                                var hp = player.storage.hkdg_dy_jueze_init[0];
                                var gains = player.storage.hkdg_dy_jueze_init[1];
                                if (player.hasSkill('hkdg_dy_juzhen')) {
                                    player.storage.hkdg_dy_juzhen = hp;
                                    player.markSkill('hkdg_dy_juzhen');
                                }
                                var hs = player.getCards('hej');
                                game.addVideo('lose', event.target, [get.cardsInfo(hs), [], [], []]);
                                for (var i = 0; i < hs.length; i++) {
                                    hs[i].discard(false);
                                }
                                player.directgain(gains);
                                player.update();
                                event.finish();
                                ('step 5');
                                player.addSkill('hkdg_dy_qingdi');
                                player.addSkill('hkdg_dy_xian');
                                game.log(player, '获得了技能', '#g〖情谛〗和〖锡安〗');
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player, tag, target) {
                                    if (player != target || player.storage.hkdg_dy_jueze) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.isDying()) return 10;
                                        if (player.countMark('hkdg_dy_juzhen') <= 1 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.hkdg_dy_jueze) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        hkdg_dy_qingdi: {
                            juexingji: true,
                            firstDo: true,
                            trigger: {
                                target: ['taoBegin', 'hkdg_dy_card_taoBegin'],
                                global: 'respondAfter',
                            },
                            filter(event, player) {
                                if (player.storage.hkdg_dy_qingdi) return false;
                                if (event.player == player) return false;
                                if (event.player.sex != 'female') return false;
                                if (event.is_hkdg_dy_juzhen_saving) {
                                    return event.is_hkdg_dy_juzhen_player == player;
                                }
                                game.playAudio('../extension/电影乱入/audio/hkdg/dy_qingdi.mp3');
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                                player.discard(player.getCards('hej'));
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                                ('step 3');
                                player.name = 'hkdg_dy_init_neo';
                                player.setBackground('hkdg_dy_init_neo', 'character');
                                player.flashAvatar('hkdg_dy_qingdi', 'hkdg_dy_init_neo');
                                player.draw(4);
                                ('step 4');
                                if (player.hasSkill('hkdg_dy_juzhen')) {
                                    player.storage.hkdg_dy_juzhen = player.maxHp;
                                    player.markSkill('hkdg_dy_juzhen');
                                }
                                if (player.hp < player.maxHp) {
                                    player.hp = player.maxHp;
                                }
                                player.update();
                                ('step 5');
                                ('step 6');
                                var bool = false;
                                if (player == game.me || player.isFriendsOf(game.me)) bool = true;
                                else
                                    switch (get.mode()) {
                                        case 'identity': {
                                            game.showIdentity();
                                            var id1 = player.identity;
                                            var id2 = game.me.identity;
                                            if (['zhu', 'zhong', 'mingzhong'].includes(id1)) {
                                                if (['zhu', 'zhong', 'mingzhong'].includes(id2)) bool = true;
                                                break;
                                            } else if (id1 == 'fan') {
                                                if (id2 == 'fan') bool = true;
                                                break;
                                            }
                                            break;
                                        }
                                    }
                                game.over(bool);
                            },
                        },
                        hkdg_dy_haike: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'tao' && get.color(card) != 'black') return;
                                    var cards = player.getCards('hs', function (card) {
                                        return card.name == 'tao' || get.color(card) == 'black';
                                    });
                                    cards.sort(function (a, b) {
                                        return (a.name == 'tao' ? 1 : 2) - (b.name == 'tao' ? 1 : 2);
                                    });
                                    var geti = function () {
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    return Math.max(num, [6.5, 4, 3, 2][Math.min(geti(), 2)]);
                                },
                                aiUseful() {
                                    return lib.skill.kanpo.mod.aiValue.apply(this, arguments);
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (player.countCards('hes', { color: 'black' }) < 1) return false;
                                if (event.is_hkdg_dy_juzhen_saving) {
                                    lib.skill.hkdg_dy_haike.viewAs = {
                                        name: 'tao',
                                    };
                                    return true;
                                } else {
                                    lib.skill.hkdg_dy_haike.viewAs = false;
                                }
                                if (!event.filterCard || !event.filterCard({ name: 'tao' }, player, event) && !event.filterCard({ name: 'hkdg_dy_card_tao' }, player, event)) return false;
                                return game.hasPlayer(function (current) {
                                    if (current.hasSkill('hkdg_dy_juzhen') && !current.hasSkill('hkdg_dy_juzhen_forbid')) {
                                        return player.canUse({ name: 'hkdg_dy_card_tao' }, current);
                                    } else {
                                        return player.canUse({ name: 'tao' }, current) || current.isDying();
                                    }
                                });
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            filterTarget(card, player, target) {
                                var event = _status.event;
                                if (event.is_hkdg_dy_juzhen_saving) {
                                    return event.is_hkdg_dy_juzhen_player == target;
                                }
                                if (target.hasSkill('hkdg_dy_juzhen') && !target.hasSkill('hkdg_dy_juzhen_forbid')) {
                                    if (event.type && event.type == 'dying' && event.dying != target) return false;
                                    return player.canUse({ name: 'hkdg_dy_card_tao' }, target);
                                } else {
                                    if (event.type && event.type == 'dying' && event.dying != target) return false;
                                    return player.canUse({ name: 'tao' }, target) || (player.canSave(target) && target.isDying());
                                }
                            },
                            selectTarget: -1,
                            discard: false,
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/hkdg/dy_haike.mp3');
                            },
                            content() {
                                'step 0';
                                if (!target) {
                                    event.finish();
                                }
                                ('step 1');
                                if (target.hasSkill('hkdg_dy_juzhen') && !target.hasSkill('hkdg_dy_juzhen_forbid')) {
                                    player.useCard(cards, target, { name: 'hkdg_dy_card_tao' });
                                } else {
                                    player.useCard(cards, target, { name: 'tao' });
                                }
                            },
                            position: 'hes',
                            prompt: '将一张黑色牌当桃使用',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                save: true,
                                threaten: 1.5,
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
                                    useful: [6.5, 4, 3, 2],
                                    value: [6.5, 4, 3, 2],
                                },
                                result: {
                                    target: 2,
                                    target_use(player, target) {
                                        if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                        var nd = player.needsToDiscard();
                                        var keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                            keep = true;
                                        }
                                        var mode = get.mode();
                                        if (target.hp >= 2 && keep && target.hasFriend()) {
                                            if (target.hp > 2 || nd == 0) return 0;
                                            if (target.hp == 2) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        if (target != current && get.attitude(target, current) >= 3) {
                                                            if (current.hp <= 1) return true;
                                                            if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                        }
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                        if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                        var att = get.attitude(player, target);
                                        if (att < 3 && att >= 0 && player != target) return 0;
                                        var tri = _status.event.getTrigger();
                                        if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                var num = game.countPlayer(function (current) {
                                                    if (current.identity == 'fan') {
                                                        return current.countCards('h', 'tao');
                                                    }
                                                });
                                                if (num > 1 && player == target) return 2;
                                                return 0;
                                            }
                                        }
                                        if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                return 0;
                                            }
                                        }
                                        if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                            return 0;
                                        }
                                        return 2;
                                    },
                                },
                                tag: {
                                    recover: 1,
                                    save: 1,
                                },
                            },
                        },
                        hkdg_dy_jiejiu: {
                            enable: 'phaseUse',
                            check(card) {
                                return 9 - get.value(card);
                            },
                            filter(event, player) {
                                if (player.countCards('he', { color: 'black' }) < 1) return false;
                                if (player.countCards('he', { color: 'red' }) < 1) return false;
                                return true;
                            },
                            filterCard(card, player) {
                                var color = get.color(card);
                                if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                                    if (get.color(i) == color) return false;
                                }
                                return true;
                            },
                            complexCard: true,
                            position: 'he',
                            selectCard: 2,
                            position: 'hs',
                            filterTarget(card, player, target) {
                                if (target.hasSkill('hkdg_dy_juzhen')) return false;
                                return true;
                            },
                            content() {
                                game.playAudio('../extension/电影乱入/audio/hkdg/dy_jiejiu.mp3');
                                target.addSkill('hkdg_dy_juzhen');
                                target.addSkill('hkdg_dy_xian');
                                game.log(player, '令', target, '获得了技能', '#g〖矩阵〗和〖锡安〗');
                                if (target.hasSkill('hkdg_dy_juzhen')) {
                                    target.storage.hkdg_dy_juzhen = target.maxHp;
                                    target.markSkill('hkdg_dy_juzhen');
                                }
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, target) {
                                        return target.maxHp - target.hp;
                                    },
                                },
                            },
                        },
                        hkdg_dy_yuanjie: {
                            firstDo: true,
                            shaRelated: true,
                            preHidden: true,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!['sha', 'juedou', 'nanman', 'wanjian'].includes(event.card.name)) return false;
                                if (event.player == player) return false;
                                return player.countCards('h', { color: 'black' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard(get.prompt('hkdg_dy_yuanjie'), 'h', '弃置一张手牌并取消' + get.translation(trigger.card) + '的所有目标(' + get.translation(trigger.targets) + ')', function (card) {
                                        return get.color(card) == 'black';
                                    })
                                    .set('ai', function (card) {
                                        if (get.effect(player, card, trigger.player, player) >= 0) return 0;
                                        return 9 - get.value(card);
                                    })
                                    .setHiddenSkill('hkdg_dy_yuanjie');
                                ('step 1');
                                if (result.bool) {
                                    game.playAudio('../extension/电影乱入/audio/hkdg/dy_yuanjie.mp3');
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                    game.log(player, '取消了', trigger.card, '的所有目标');
                                }
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (player.countCards('h', { color: 'black' }) < 1) return false;
                                },
                                threaten: 0.9,
                            },
                        },
                        hkdg_dy_tequan: {
                            group: ['hkdg_dy_tequan_lock'],
                            subSkill: {
                                lock: {
                                    trigger: {
                                        player: ['turnOverBefore', 'linkBefore'],
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (event.name == 'turnOver' && !player.isTurnedOver()) {
                                            trigger.cancel();
                                            game.log(player, '取消了翻面');
                                        }
                                        if (event.name == 'link' && !player.isLinked()) {
                                            trigger.cancel();
                                            game.log(player, '取消了横置');
                                        }
                                        ('step 1');
                                        if (player.isTurnedOver()) player.turnOver(false);
                                        if (player.isLinked()) player.link(false);
                                    },
                                    ai: {
                                        noturn: true,
                                        effect: {
                                            target(card) {
                                                if (card.name == 'tiesuo') return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                },
                            },
                            init(player, skill) {
                                if (player.isTurnedOver()) player.turnOver(false);
                                if (player.isLinked()) player.link(false);
                                var js = player.getCards('j');
                                if (js.length) player.discard(js);
                                player.storage._disableJudge = true;
                                ('step 1');
                                game.broadcastAll(function (player, card) {
                                    player.$disableJudge();
                                }, player);
                            },
                            onremove(player, skill) {
                                player.enableJudge();
                                if (!player.storage._disableJudge) return;
                                game.broadcastAll(function (player) {
                                    player.$enableJudge();
                                }, player);
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            firstDo: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                game.playAudio('../extension/电影乱入/audio/hkdg/dy_tequan.mp3');
                                trigger.nowuxie = true;
                                trigger.directHit.addArray(game.players);
                            },
                            ai: {
                                threaten: 2,
                                noautowuxie: true,
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    return true;
                                },
                            },
                        },
                        mny_dy_xihun: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                'step 0';
                                var check;
                                var i,
                                    num = game.countPlayer(function (current) {
                                        return current != player && get.attitude(player, current) <= 0;
                                    });
                                check = num >= 1;
                                player
                                    .chooseTarget(
                                        get.prompt('mny_dy_xihun'),
                                        '令一名其他角色展示一张【闪】,否则你吸取其一点体力值',
                                        1,
                                        function (card, player, target) {
                                            return player != target;
                                        },
                                        function (target) {
                                            if (!_status.event.aicheck) return 0;
                                            var att = get.attitude(_status.event.player, target);
                                            if (att > 0) return -1;
                                            return 10 * Math.max(4 - target.hp, 1) - att;
                                        }
                                    )
                                    .set('aicheck', check);
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.target.countCards('h') < 1) {
                                    game.log(event.target, '已无可展示的牌');
                                    game.playAudio('../extension/电影乱入/audio/mny/dy_xihun_true.mp3');
                                    event.goto(5);
                                }
                                ('step 3');
                                event.target.chooseCard('吸魂:展示一张【杀】或【闪】,否则被' + get.translation(player.name) + '吸取一点体力', function (card) {
                                    return ['sha', 'shan'].includes(card.name);
                                }).ai = function (card) {
                                    if (['sha', 'shan'].includes(card.name) && get.attitude(event.target, player) < 1) return 99;
                                    if (_status.event.getRand() < 0.5) return Math.random();
                                    return get.value(card);
                                };
                                ('step 4');
                                if (result.bool) {
                                    var target = event.target;
                                    event.dialog = ui.create.dialog(get.translation(target) + '展示的手牌', result.cards);
                                    event.videoId = lib.status.videoId++;
                                    game.broadcast('createDialog', event.videoId, get.translation(target) + '展示的手牌', result.cards);
                                    game.addVideo('cardDialog', null, [get.translation(target) + '展示的手牌', get.cardsInfo(result.cards), event.videoId]);
                                    game.log(target, '展示了', result.cards[0]);
                                    event._result = {};
                                    game.playAudio('../extension/电影乱入/audio/mny/dy_xihun_false.mp3');
                                    event.goto(6);
                                } else {
                                    game.log(event.target, '未展示出闪');
                                    game.playAudio('../extension/电影乱入/audio/mny/dy_xihun_true.mp3');
                                    event.goto(5);
                                }
                                ('step 5');
                                event.target.loseHp();
                                game.log(player, '吸取了', event.target, '一点体力');
                                player.recover();
                                event.goto(7);
                                ('step 6');
                                event.dialog.close();
                                game.addVideo('cardDialog', null, event.videoId);
                                game.broadcast('closeDialog', event.videoId);
                                ('step 7');
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp < target.maxHp) return 1.7;
                                    return 0.6;
                                },
                                expose: 0.1,
                            },
                        },
                        mny_dy_kuangsha: {
                            usable: 1,
                            enable: 'phaseUse',
                            position: 'h',
                            filter(card, player) {
                                return player.hp >= 1 && player.countCards('h') >= 2;
                            },
                            filterCard: true,
                            selectCard: 2,
                            complexCard: true,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he') > 0;
                            },
                            selectTarget() {
                                var player = _status.event.player;
                                return [1, player.hp];
                            },
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/mny/dy_kuangsha.mp3');
                            },
                            content() {
                                'step 0';
                                event.cards = target.getCards('he');
                                if (event.cards.length < 1) event.finish();
                                ('step 1');
                                if (event.cards.length > 2) {
                                    var cards = event.cards.randomGets(2);
                                } else {
                                    var cards = event.cards;
                                }
                                target.$damage(player);
                                game.broadcastAll(
                                    function (nature, player) {
                                        if (lib.config.animation && !lib.config.low_performance) {
                                            player.$thunder();
                                        }
                                    },
                                    'thunder',
                                    target
                                );
                                target.$damagepop(-cards.length);
                                target.discard(cards, 'notBySelf', player);
                            },
                            check(card) {
                                var player = _status.event.player;
                                var num = 0;
                                var count = game.countPlayer(function (current) {
                                    if (get.attitude(player, current) > 0) {
                                        num += Math.min(current.countCards('he'), 2);
                                        return true;
                                    } else {
                                        return false;
                                    }
                                });
                                if (num < 2 || (player.hp <= 1 && count >= 2 && num < 4 && player.countCards('h') < 4)) return false;
                                return 6 - get.value(card);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('he') < 1) return 0;
                                        return -Math.max(1, 5 - Math.abs(target.countCards('he') - 2.5));
                                    },
                                },
                            },
                        },
                        mny_dy_huanhun: {
                            subSkill: {
                                max: {
                                    trigger: {
                                        player: 'changeHp',
                                    },
                                    forced: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return player.hp >= player.maxHp;
                                    },
                                    content() {
                                        player.removeSkill('mny_dy_huanhun_revive');
                                    },
                                },
                                revive: {
                                    group: ['mny_dy_xihun', 'mny_dy_huanhun_max'],
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    skillBlocker(skill, player) {
                                        var info = lib.translate[skill + '_info'];
                                        var name = lib.translate[skill];
                                        if (lib.skill[skill].charlotte) return false;
                                        if (skill == 'mny_dy_xihun') return false;
                                        return name && name != '' && info && info.indexOf('锁定技') == -1 && !get.is.locked(skill, player);
                                    },
                                    mark: true,
                                    marktext: '封印',
                                    intro: {
                                        name: '行尸走肉',
                                        content(storage, player, skill) {
                                            var list = player.getSkills(null, false, false).filter(function (i) {
                                                return lib.skill.mny_dy_huanhun_revive.skillBlocker(i, player);
                                            });
                                            if (list.length) return '你视为拥有〖吸魂〗<li>失效技能:' + get.translation(list);
                                            return '你视为拥有〖吸魂〗<li>无失效技能';
                                        },
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                var suit = card.suit;
                                if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                                    if (i.suit == suit) return false;
                                }
                                return true;
                            },
                            complexCard: true,
                            limited: true,
                            selectCard(card) {
                                if (!ui.selected.cards.length) return [0, 4];
                                return 4;
                            },
                            position: 'h',
                            check() {
                                return -1;
                            },
                            filter(event, player) {
                                return game.dead && game.dead.length;
                            },
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/mny/dy_huanhun.mp3');
                            },
                            content() {
                                'step 0';
                                if (cards.length == 0) player.turnOver();
                                player.awakenSkill('mny_dy_huanhun');
                                var list = [];
                                for (var i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                player.chooseButton(ui.create.dialog('选择要复活的角色', [list, 'character']), function (button) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++) return get.attitude(_status.event.player, game.dead[i]);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.auto = _status.auto;
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
                                    var dead = game.dead[i];
                                    dead.revive(1);
                                    dead.draw(4);
                                    game.addVideo('revive', dead);
                                    event.target = dead;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.target.addTempSkill('mny_dy_huanhun_revive', { player: 'dieBefore' });
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player, target) {
                                        if (lib.config.mode == 'versus') return -1;
                                        if (player.hasUnknown()) return 0;
                                        for (var i = 0; i < game.dead.length; i++) {
                                            if (get.attitude(player, game.dead[i]) > 2) return 4;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            mark: true,
                            marktext: '还魂',
                            intro: {
                                name: '召唤灵魂',
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        mny_dy_juechong: {
                            group: 'mny_dy_juechong_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBefore',
                                        player: 'damageBefore',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        var source = player.storage.mny_dy_juechong;
                                        if (!source) return false;
                                        if (!source.isAlive()) return false;
                                        return event.parent.skill == 'mny_dy_juechong';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.changeToZero();
                                        event.targetA = player.storage.mny_dy_juechong;
                                        event.win = trigger.source;
                                        event.lose = trigger.player;
                                        event.lose.$damage(event.win);
                                        event.win.$damagepop('胜利');
                                        event.lose.$damagepop('败北');
                                        game.log(event.win, '获得了决斗的胜利');
                                        ('step 1');
                                        event.targetA
                                            .chooseCard('决宠:' + get.translation(event.win.name) + '决斗胜利,请交给其两张牌', 'he', 2, true, function (card) {
                                                return true;
                                            })
                                            .set('ai', function (card) {
                                                if (get.attitude(event.targetA, event.win) > 1) {
                                                    return get.value(card);
                                                } else {
                                                    return -get.value(card);
                                                }
                                            });
                                        ('step 2');
                                        if (result.bool) {
                                            game.playAudio('../extension/电影乱入/audio/mny/dy_juechong_win.mp3');
                                            event.targetA.line(event.win, 'fire');
                                            event.win.gain(result.cards, event.targetA, 'giveAuto');
                                        }
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (player.countCards('he') < 1) return false;
                                return game.countPlayer(function (current) {
                                    return (
                                        player.canUse({ name: 'juedou' }, current) &&
                                        player != current &&
                                        game.countPlayer(function (current2) {
                                            return current != current2 && player != current2 && current2.countCards('he') >= 2;
                                        }) > 0
                                    );
                                });
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (card.suit == 'spade' && player.hasSkill('mny_dy_jinluan')) return 3 - get.value(card);
                                if (card.name == 'sha') return 4 - get.value(card);
                                return 8 - get.value(card);
                            },
                            position: 'he',
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he') >= 2;
                            },
                            selectTarget: 1,
                            multitarget: true,
                            content() {
                                'step 0';
                                event.player = player;
                                event.targetA = targets[0];
                                player.storage.mny_dy_juechong = targets[0];
                                game.log(event.targetA, '开始为', player, '选择决斗对象');
                                event.targetA
                                    .chooseTarget('决宠:请为' + get.translation(player.name) + '选择决斗的对象', 1, true, function (card, player, target) {
                                        return target != event.targetA && target != event.player && event.player.canUse({ name: 'juedou' }, target);
                                    })
                                    .set('ai', function (target) {
                                        if (get.attitude(event.targetA, target) > 0) {
                                            return target.countCards('hs');
                                        } else {
                                            return -1;
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playAudio('../extension/电影乱入/audio/mny/dy_juechong.mp3');
                                    event.targetA.line(event.targetB, 'fire');
                                    event.targetB = result.targets[0];
                                    game.log(event.targetA, '选择了', event.targetB, '作为', player, '的决斗对象');
                                    var next = player.useCard({ name: 'juedou' }, 'nowuxie', event.targetB, 'noai', 'mny_dy_juechong');
                                    next.animate = false;
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('he') <= 1) return -1;
                                        if (player.countCards('hs', { suit: 'spade' }) > 1 && player.hasSkill('mny_dy_jinluan')) return -4;
                                        if (player.countCards('hs', { name: 'sha' }) >= 1 && player.hasSkill('mny_dy_jinluan')) return -3;
                                        return -2;
                                    },
                                },
                                threaten: 1.2,
                            },
                        },
                        mny_dy_jinluan: {
                            group: 'mny_dy_jinluan_draw',
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    firstDo: true,
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        return event.card.suit == 'spade' && event.card.name == 'sha';
                                    },
                                    content() {
                                        game.playAudio('../extension/电影乱入/audio/mny/dy_jinluan.mp3');
                                        player.draw();
                                    },
                                    ai: {
                                        threaten: 1.1,
                                        effect: {
                                            player(card, player, target) {
                                                if (card.name == 'sha' && card.suit == 'spade') return [1, 1];
                                            },
                                        },
                                    },
                                },
                            },
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                return card.suit == 'spade';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', { suit: 'spade' })) return false;
                            },
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/mny/dy_jinluan.mp3');
                            },
                            prompt: '将一张♠️️牌当杀使用或打出',
                            check(card) {
                                var val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                return 5 - val;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('hes', { suit: 'spade' })) return false;
                                },
                                respondSha: true,
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
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 3.1;
                                        return 3;
                                    }
                                    return 3.05;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                ) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -0.5;
                                            }
                                            return -1.5;
                                        })();
                                        if (
                                            !isLink &&
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
                                            return eff / 1.2;
                                        return eff;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.nature == 'poison') return;
                                        return 1;
                                    },
                                    natuspadeamage(card) {
                                        if (card.nature) return 1;
                                    },
                                    fispadeamage(card, nature) {
                                        if (card.nature == 'fire') return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') return 1;
                                    },
                                },
                            },
                        },
                        qnyh_dy_faqi: {
                            marktext: '剑',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'enterGame'],
                                global: 'phaseBefore',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0 || event.name == 'phaseZhunbei';
                            },
                            content() {
                                'step 0';
                                if (trigger.name != 'phaseZhunbei') {
                                    event.num = 4;
                                    event.goto(3);
                                } else {
                                    event.num = 0;
                                }
                                ('step 1');
                                event.cards = get.cards(2);
                                game.cardsGotoOrdering(event.cards);
                                player.showCards(event.cards);
                                ('step 2');
                                event.cards = event.cards.filter((i) => {
                                    if (get.color(i) == 'red') {
                                        event.num++;
                                        return false;
                                    }
                                    return true;
                                });
                                ('step 3');
                                if (player.countMark('qnyh_dy_faqi') + event.num > 4) {
                                    event.num = 4 - player.countMark('qnyh_dy_faqi');
                                }
                                ('step 4');
                                if (event.num > 0) {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_faqi_gain.mp3');
                                    player.addMark('qnyh_dy_faqi', event.num);
                                } else {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_faqi_none.mp3');
                                }
                            },
                            intro: {
                                name: '轩辕神剑',
                                content(storage, player, skill) {
                                    var num = player.countMark('qnyh_dy_faqi');
                                    return '剑匣存剑数量〈' + num + '/4〉';
                                },
                            },
                            ai: {
                                combo: 'ol_shenfen',
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        qnyh_dy_jiqian: {
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'hs',
                            check(card) {
                                return 5 - get.value(card);
                            },
                            filter(event, player) {
                                if (player.countMark('qnyh_dy_faqi') < 1) return false;
                                return player.countCards('h', { color: 'black' });
                            },
                            filterTarget(card, player, target) {
                                return player != target && player.canUse({ name: 'sha', nature: 'thunder', is_qnyh_dy_jiqian: true }, target, false);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && card.is_qnyh_dy_jiqian) return Infinity;
                                },
                            },
                            content() {
                                'step 0';
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_jiqian.mp3');
                                player.removeMark('qnyh_dy_faqi');
                                ('step 1');
                                player.useCard(cards, target, { name: 'sha', nature: 'thunder', is_qnyh_dy_jiqian: true }, 'qnyh_dy_jiqian').addCount = false;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (player.countMark('qnyh_dy_faqi') < 1) return false;
                                    if (player.countCards('hs', { color: 'black' }) < 1) return false;
                                },
                                order(item, player) {
                                    if (player.countCards('hs') < 4) {
                                        return 1;
                                    }
                                    return 4;
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
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                ) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -0.5;
                                            }
                                            return -1.5;
                                        })();
                                        if (
                                            !isLink &&
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
                                            return eff / 1.2;
                                        return eff;
                                    },
                                },
                                tag: {
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
                            },
                        },
                        qnyh_dy_haori: {
                            firstDo: true,
                            shaRelated: true,
                            preHidden: true,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                if (event.player == player) return false;
                                if (player.countMark('qnyh_dy_faqi') < 1) return false;
                                return event.cards && player.countCards('hs', { color: 'red' });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard(get.prompt('qnyh_dy_haori'), 'hs', '弃置一张红色手牌并移除一枚<法>标记,取消' + get.translation(trigger.card) + '的所有目标,视为你对' + get.translation(trigger.player.name) + '使用此牌', function (card) {
                                        return get.color(card) == 'red';
                                    })
                                    .set('ai', function (card) {
                                        if (get.effect(player, card, trigger.player, player) >= 0) return -1;
                                        if (get.effect(trigger.player, card, player, player) < 0 && get.attitude(player, trigger.player) > 0) return 0;
                                        return 9 - get.value(card);
                                    })
                                    .setHiddenSkill('qnyh_dy_haori');
                                ('step 1');
                                if (result.bool) {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_haori.mp3');
                                    player.removeMark('qnyh_dy_faqi');
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                    game.log(player, '取消了', trigger.card, '的所有目标');
                                    player.useCard(trigger.card, trigger.player, { name: 'sha', nature: trigger.nature, is_qnyh_dy_haori: true }).addCount = false;
                                }
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (player.countMark('qnyh_dy_faqi') < 1) return false;
                                    if (player.countCards('hs', { color: 'red' }) < 1) return false;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (player.countMark('qnyh_dy_faqi') > 0 && player.countCards('hs') > 1 && card.name == 'sha' && get.color(card) == 'red') return [1, 0.5];
                                    },
                                },
                            },
                        },
                        qnyh_dy_yujian: {
                            subSkill: {
                                jian: {
                                    trigger: {
                                        global: 'phaseZhunbeiBegin',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.qnyh_dy_yujian_jian_source) return true;
                                        if (!player.storage.qnyh_dy_yujian_jian_source.isAlive()) return true;
                                        return event.player == player.storage.qnyh_dy_yujian_jian_source;
                                    },
                                    content() {
                                        player.storage.qnyh_dy_yujian_jian = 0;
                                        player.unmarkSkill('qnyh_dy_yujian_jian');
                                        player.removeSkill('qnyh_dy_yujian_jian');
                                    },
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            if (from.countMark('qnyh_dy_yujian_jian') > 0) {
                                                return distance - from.countMark('qnyh_dy_yujian_jian');
                                            }
                                        },
                                        globalTo(from, to, distance) {
                                            if (to.countMark('qnyh_dy_yujian_jian') > 0) {
                                                return distance + to.countMark('qnyh_dy_yujian_jian');
                                            }
                                        },
                                    },
                                    marktext: '飞',
                                    intro: {
                                        name: '飞剑驭空',
                                        content(storage, player, skill) {
                                            var num = player.countMark('qnyh_dy_yujian_jian');
                                            return '进攻距离加' + get.cnNumber(num) + ',防守距离加' + get.cnNumber(num);
                                        },
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.countMark('qnyh_dy_faqi') < 1) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (!target.hasSkill('qnyh_dy_yujian_jian')) target.addSkill('qnyh_dy_yujian_jian');
                                ('step 1');
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_yujian.mp3');
                                player.removeMark('qnyh_dy_faqi');
                                target.addMark('qnyh_dy_yujian_jian');
                                target.storage.qnyh_dy_yujian_jian_source = player;
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player) {
                                    if (player.countMark('qnyh_dy_faqi') < 1) return false;
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1 && !target.hasSkill('qnyh_dy_yujian_jian')) return 3;
                                        if (player.countMark('qnyh_dy_faqi') <= 1 && player.countCards('hs', { color: 'red' }) > 0) return 0;
                                        return Math.max(2 - target.countMark('qnyh_dy_yujian_jian'), 0);
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                        qnyh_dy_guizong: {
                            derivation: 'qianxing',
                            subSkill: {
                                jian: {
                                    group: 'qianxing',
                                    trigger: {
                                        global: 'phaseZhunbeiBegin',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.qnyh_dy_guizong_jian_source) return true;
                                        if (!player.storage.qnyh_dy_guizong_jian_source.isAlive()) return true;
                                        return event.player == player.storage.qnyh_dy_guizong_jian_source;
                                    },
                                    content() {
                                        player.removeSkill('qnyh_dy_guizong_jian');
                                    },
                                    mark: true,
                                    marktext: '潜行',
                                    intro: {
                                        name: '万剑归宗',
                                        content: '锁定技,你不能成为其他角色的卡牌的目标',
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.countMark('qnyh_dy_faqi') < 4) return false;
                                return true;
                            },
                            selectTarget: [1, Infinity],
                            filterTarget(card, player, target) {
                                return !target.hasSkill('qnyh_dy_guizong_jian');
                            },
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_guizong.mp3');
                                player.removeMark('qnyh_dy_faqi', 4);
                            },
                            content() {
                                'step 0';
                                target.addSkill('qnyh_dy_guizong_jian');
                                target.storage.qnyh_dy_guizong_jian_source = player;
                            },
                            ai: {
                                order: 2,
                                skillTagFilter(player) {
                                    if (player.countMark('qnyh_dy_faqi') < 4) return false;
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1 && !target.hasSkill('qnyh_dy_guizong_jian')) return 3;
                                        if (player.countCards('hs', { color: 'red' }) > 2) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        qnyh_dy_yanling: {
                            group: 'qnyh_dy_yanling_phase',
                            subSkill: {
                                phase: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin', 'enterGame'],
                                        global: ['phaseBefore', 'phaseAfter'],
                                    },
                                    firstDo: true,
                                    silent: true,
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        player.storage.qnyh_dy_yanling_use = 0;
                                    },
                                },
                                ren: {
                                    group: 'qnyh_dy_yanling_damage',
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    charlotte: true,
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (event.card.name != 'sha') return false;
                                        return true;
                                    },
                                    check(event, player) {
                                        return player == event.player;
                                    },
                                    content() {
                                        var id = player.playerid;
                                        var map = trigger.parent.customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (typeof map[id].shanRequired == 'number') {
                                            map[id].shanRequired++;
                                        } else {
                                            map[id].shanRequired = 2;
                                        }
                                    },
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > 1) return false;
                                        },
                                    },
                                    mark: true,
                                    marktext: '刃1',
                                    intro: {
                                        name: '雁翎飞刀',
                                        content(storage, player, skill) {
                                            return '响应【杀】时需额外使用一张【闪】';
                                        },
                                    },
                                    init(player) {
                                        var source = player.storage.qnyh_dy_yanling_ren;
                                        player.$damage(source);
                                        game.broadcastAll(
                                            function (nature, player) {
                                                if (lib.config.animation && !lib.config.low_performance) {
                                                    player.$thunder();
                                                }
                                            },
                                            'thunder',
                                            player
                                        );
                                        player.$damagepop(-1);
                                        if (player.countCards('he')) {
                                            player.discard(player.getCards('he').randomGet(), 'notBySelf', source);
                                        }
                                    },
                                },
                                damage: {
                                    trigger: {
                                        player: ['damageAfter', 'die'],
                                    },
                                    forced: true,
                                    forceDie: true,
                                    content() {
                                        'step 0';
                                        game.playAudio('../extension/电影乱入/audio/qnyh/dy_yanling_back.mp3');
                                        player.removeSkill('qnyh_dy_yanling_ren');
                                        ('step 1');
                                        var source = player.storage.qnyh_dy_yanling_ren;
                                        if (source && source.isAlive() && source.hasSkill('qnyh_dy_yanling') && source.countMark('qnyh_dy_yanling') < 5) {
                                            player.line(source, 'fire');
                                            source.addMark('qnyh_dy_yanling');
                                            source.storage.qnyh_dy_yanling_use++;
                                        }
                                    },
                                },
                            },
                            filter(event, player) {
                                if (player.countMark('qnyh_dy_yanling') < 1) return false;
                                if (player.countMark('qnyh_dy_yanling') <= player.storage.qnyh_dy_yanling_use) return false;
                                return game.hasPlayer(function (current) {
                                    return player != current && !current.hasSkill('qnyh_dy_yanling_ren');
                                });
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (target.hasSkill('qnyh_dy_yanling_ren')) return false;
                                return true;
                            },
                            enable: 'phaseUse',
                            selectTarget() {
                                var player = _status.event.player;
                                var num = player.countMark('qnyh_dy_yanling');
                                var use = Math.min(player.storage.qnyh_dy_yanling_use ? player.storage.qnyh_dy_yanling_use : 0, num);
                                return [1, num - use];
                            },
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_yanling_use.mp3');
                            },
                            content() {
                                'step 0';
                                target.storage.qnyh_dy_yanling_ren = player;
                                player.removeMark('qnyh_dy_yanling');
                                ('step 1');
                                target.addSkill('qnyh_dy_yanling_ren');
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_yanling_hit.mp3');
                            },
                            init(player) {
                                player.storage.qnyh_dy_yanling_use = 0;
                                player.storage.qnyh_dy_yanling = 5;
                                player.markSkill('qnyh_dy_yanling');
                            },
                            onremove(player) {
                                player.storage.qnyh_dy_yanling = 0;
                                player.unmarkSkill('qnyh_dy_yanling');
                            },
                            marktext: '刃',
                            intro: {
                                name: '雁翎五刀',
                                content(storage, player, skill) {
                                    var num = player.countMark('qnyh_dy_yanling');
                                    var use = Math.min(player.storage.qnyh_dy_yanling_use ? player.storage.qnyh_dy_yanling_use : 0, num);
                                    return '未使用过的刀〈' + (num - use) + '/' + num + '〉';
                                },
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        return -1.5;
                                    },
                                },
                            },
                        },
                        qnyh_dy_podao: {
                            group: 'qnyh_dy_podao_sha',
                            subSkill: {
                                1: {
                                    marktext: '单刀',
                                    intro: {
                                        name: '朴刀三流',
                                        content: '单手持刀形态〈1/3〉',
                                    },
                                },
                                2: {
                                    marktext: '双刀',
                                    intro: {
                                        name: '朴刀三流',
                                        content: '双手持刀形态〈2/3〉',
                                    },
                                },
                                3: {
                                    marktext: '三刀',
                                    intro: {
                                        name: '朴刀三流',
                                        content: '手口持刀形态〈3/3〉',
                                    },
                                },
                                sha: {
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard(card, player) {
                                        return card.suit == 'spade';
                                    },
                                    position: 'hs',
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        var plus = player.storage.qnyh_dy_podao_num ? player.storage.qnyh_dy_podao_num : 0;
                                        if (!player.countCards('hs', { suit: 'spade' })) return false;
                                        return plus > 0;
                                    },
                                    prompt: '将一张♠️️手牌当杀使用或打出',
                                    check(card) {
                                        var val = get.value(card);
                                        if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                        return 5 - val;
                                    },
                                    ai: {
                                        skillTagFilter(player) {
                                            if (!player.countCards('hs', { suit: 'spade' })) return false;
                                        },
                                        respondSha: true,
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
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        basic: {
                                            useful: [5, 3, 1],
                                            value: [5, 3, 1],
                                        },
                                        order(item, player) {
                                            if (player.hasSkillTag('presha', true, null, true)) return 10;
                                            if (lib.linked.includes(get.nature(item))) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                                    }) &&
                                                    game.countPlayer(function (current) {
                                                        return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                                    }) > 1
                                                )
                                                    return 3.1;
                                                return 3;
                                            }
                                            return 3.05;
                                        },
                                        result: {
                                            target(player, target, card, isLink) {
                                                var eff = (function () {
                                                    if (!isLink && player.hasSkill('jiu')) {
                                                        if (
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        ) {
                                                            if (get.attitude(player, target) > 0) {
                                                                return -7;
                                                            } else {
                                                                return -4;
                                                            }
                                                        }
                                                        return -0.5;
                                                    }
                                                    return -1.5;
                                                })();
                                                if (
                                                    !isLink &&
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
                                                    return eff / 1.2;
                                                return eff;
                                            },
                                        },
                                        tag: {
                                            respond: 1,
                                            respondShan: 1,
                                            damage(card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natuspadeamage(card) {
                                                if (card.nature) return 1;
                                            },
                                            fispadeamage(card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage(card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage(card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                    },
                                },
                            },
                            forced: true,
                            firstDo: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                if (!player.storage.qnyh_dy_podao_num) player.storage.qnyh_dy_podao_num = 0;
                                if (player.countMark('qnyh_dy_yanling') + player.storage.qnyh_dy_podao_num < 1) return false;
                                return true;
                            },
                            init(player) {
                                if (!player.storage.qnyh_dy_podao_num) player.storage.qnyh_dy_podao_num = 0;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                event.map = {};
                                var num = Math.min(player.countMark('qnyh_dy_yanling') + player.storage.qnyh_dy_podao_num, 3);
                                for (var i = 0; i <= num; i++) {
                                    var cn = get.cnNumber(i, true);
                                    event.map[cn] = i;
                                    list.push(cn);
                                }
                                var gets = Math.min(player.countCards('hs', { suit: 'spade' }) + player.countCards('hs', { name: 'sha', suit: 'club' }) + player.countCards('hs', { name: 'sha', color: 'red' }), 3);
                                player
                                    .chooseControl(list, function () {
                                        return get.cnNumber(gets, true);
                                    })
                                    .set('prompt', '朴刀:转换成<刀>的数量');
                                ('step 1');
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_podao_' + [1, 2, 3].randomGet() + '.mp3');
                                player.unmarkSkill('qnyh_dy_podao_1');
                                player.unmarkSkill('qnyh_dy_podao_2');
                                player.unmarkSkill('qnyh_dy_podao_3');
                                var num = event.map[result.control] || 0;
                                if (player.storage.qnyh_dy_podao_num < num) {
                                    var add = num - player.storage.qnyh_dy_podao_num;
                                    player.removeMark('qnyh_dy_yanling', add);
                                    player.storage.qnyh_dy_podao_num += add;
                                } else if (player.storage.qnyh_dy_podao_num > num) {
                                    var add = player.storage.qnyh_dy_podao_num - num;
                                    player.storage.qnyh_dy_podao_num -= add;
                                    player.addMark('qnyh_dy_yanling', add);
                                }
                                ('step 2');
                                var trs = {
                                    0: '空手',
                                    1: '单刀',
                                    2: '双刀',
                                    3: '三刀',
                                };
                                var num = Math.min(player.storage.qnyh_dy_podao_num, 3);
                                player.$damagepop(trs[num]);
                                lib.skill.qnyh_dy_podao.marktext = trs[num];
                                ('step 3');
                                if (player.storage.qnyh_dy_podao_num > 0) {
                                    player.markSkill('qnyh_dy_podao_' + player.storage.qnyh_dy_podao_num);
                                }
                            },
                            mod: {
                                attackFrom(from, to, distance) {
                                    var plus = from.storage.qnyh_dy_podao_num ? from.storage.qnyh_dy_podao_num : 0;
                                    if (plus > 0) {
                                        return distance - 1;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    var plus = player.storage.qnyh_dy_podao_num ? player.storage.qnyh_dy_podao_num : 0;
                                    if (card.name == 'sha' && plus > 1) return (num += Math.min(2, plus - 1));
                                },
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        if (!ui.selected.cards.length) {
                                            if (player.hp < 2) return 0;
                                            if (target.hp >= player.hp) return 0;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        qnyh_dy_feiren: {
                            forceDie: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target && player.canUse({ name: 'sha', is_qnyh_dy_feiren: true }, target, false);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && card.is_qnyh_dy_feiren) return Infinity;
                                },
                            },
                            limited: true,
                            line: 'fire',
                            check() {
                                return -1;
                            },
                            selectTarget: [1, Infinity],
                            multitarget: true,
                            multiline: true,
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_feiren.mp3');
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('qnyh_dy_feiren');
                                targets.sortBySeat();
                                ('step 1');
                                player.useCard(targets, { name: 'sha', is_qnyh_dy_feiren: true }).addCount = false;
                            },
                            ai: {
                                order(item, player) {
                                    return 1;
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
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                ) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -0.5;
                                            }
                                            return -1.5;
                                        })();
                                        if (
                                            !isLink &&
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
                                            return eff / 1.2;
                                        return eff;
                                    },
                                },
                                tag: {
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
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        qnyh_dy_fanjing: {
                            trigger: {
                                player: ['enterGame', 'phaseZhunbeiBegin'],
                                global: 'gameDrawAfter',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_fanjing.mp3');
                                player.storage.qnyh_dy_fanjing_shows = [];
                                event.num = 4;
                                event.cardpile = [];
                                if (player.storage.qnyh_dy_fanjing) {
                                    player.unmarkSkill('qnyh_dy_fanjing');
                                }
                                ('step 1');
                                event.num--;
                                ('step 2');
                                event.card = get.cardPile(function (card) {
                                    for (var a = 0; a < event.cardpile.length; a++) {
                                        if (card == event.cardpile[a]) return false;
                                    }
                                    if (['trick'].includes(get.type(card))) return true;
                                    return false;
                                }, true);
                                if (!event.card) {
                                    if (event.cardpile.length) {
                                        event.goto(4);
                                    } else {
                                        event.finish();
                                        return;
                                    }
                                }
                                ('step 3');
                                event.cardpile.push(event.card);
                                if (event.num > 0) event.goto(1);
                                ('step 4');
                                if (player == game.me || player.isUnderControl()) {
                                    player.showCards(event.cardpile, '月影梵经');
                                } else {
                                    game.log(player, '展示了' + get.cnNumber(event.cardpile.length) + '张牌');
                                }
                                ('step 5');
                                player.storage.qnyh_dy_fanjing = game.cardsGotoSpecial(event.cardpile).cards;
                                player.markSkill('qnyh_dy_fanjing');
                            },
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (get.color(card) == 'black' && get.type(card) == 'trick') return false;
                                },
                            },
                            marktext: '梵',
                            intro: {
                                name: '月影梵经',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                                mark(dialog, content, player) {
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            dialog.addAuto(content);
                                        } else {
                                            return '共有' + get.cnNumber(content.length) + '张梵经';
                                        }
                                    }
                                },
                                content(content, player) {
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            return get.translation(content);
                                        }
                                        return '共有' + get.cnNumber(content.length) + '张梵经';
                                    }
                                },
                            },
                        },
                        qnyh_dy_xunyin: {
                            subSkill: {
                                mad: {
                                    group: 'mad',
                                    trigger: {
                                        global: 'phaseZhunbeiBegin',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.qnyh_dy_xunyin_mad_source) return true;
                                        if (!player.storage.qnyh_dy_xunyin_mad_source.isAlive()) return true;
                                        return event.player == player.storage.qnyh_dy_xunyin_mad_source;
                                    },
                                    content() {
                                        player.removeSkill('qnyh_dy_xunyin_mad');
                                    },
                                    mark: true,
                                    marktext: '忏悔',
                                    intro: {
                                        name: '索命梵音',
                                        content: '已进入混乱状态',
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (player.countMark('qnyh_dy_fanjing') < 1) return false;
                                var num = 0;
                                var storage = player.storage.qnyh_dy_fanjing;
                                for (var i = 0; i < storage.length; i++) {
                                    if (get.color(storage[i]) == 'red') num++;
                                }
                                return num >= 2;
                            },
                            filterTarget(card, player, target) {
                                return !target.hasSkill('qnyh_dy_xunyin_mad') && target != player;
                            },
                            selectTarget: [1, 3],
                            precontent() {
                                'step 0';
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_xunyin_use.mp3');
                                player.chooseCardButton(player.storage.qnyh_dy_fanjing, '请弃置两张红色的梵经', 2, true).set('filterButton', function (button) {
                                    return get.color(button.link) == 'red';
                                }).ai = function (button) {
                                    var val = get.value(button.link);
                                    return -val;
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_xunyin.mp3');
                                    for (var i of result.links) {
                                        player.storage.qnyh_dy_fanjing.remove(i);
                                    }
                                    player.$throw(result.links, 1000);
                                    game.log(player, '弃置了', get.translation(result.links));
                                    if (player.countMark('qnyh_dy_fanjing') < 1) {
                                        player.unmarkSkill('qnyh_dy_fanjing');
                                    } else {
                                        player.markSkill('qnyh_dy_fanjing');
                                    }
                                }
                            },
                            content() {
                                'step 0';
                                if (target.countCards('h') < 1) {
                                    game.log(target, '已无可展示的牌');
                                    event.goto(3);
                                }
                                ('step 1');
                                target.chooseCard('殉音:展示一张未展示过的黑色非延时锦囊牌,否则进入混乱状态', function (card) {
                                    if (player.storage.qnyh_dy_fanjing_shows.includes(card)) return false;
                                    return ['trick'].includes(get.type(card)) && get.color(card) == 'black';
                                }).ai = function (card) {
                                    if (['trick'].includes(get.type(card)) && get.color(card) == 'black') return 99;
                                    if (_status.event.getRand() < 0.5) return Math.random();
                                    return get.value(card);
                                };
                                ('step 2');
                                if (result.bool) {
                                    event.dialog = ui.create.dialog(get.translation(target) + '展示的手牌', result.cards);
                                    event.videoId = lib.status.videoId++;
                                    game.broadcast('createDialog', event.videoId, get.translation(target) + '展示的手牌', result.cards);
                                    game.addVideo('cardDialog', null, [get.translation(target) + '展示的手牌', get.cardsInfo(result.cards), event.videoId]);
                                    game.log(target, '展示了', result.cards[0]);
                                    event.dis = result.cards[0];
                                    event._result = {};
                                    event.goto(4);
                                } else {
                                    game.log(target, '未展示出锦囊');
                                    event.goto(3);
                                }
                                ('step 3');
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_xunyin_hit.mp3');
                                target.addSkill('qnyh_dy_xunyin_mad');
                                target.storage.qnyh_dy_xunyin_mad_source = player;
                                game.log(target, '进入了混乱状态');
                                event.goto(5);
                                ('step 4');
                                event.dialog.close();
                                game.addVideo('cardDialog', null, event.videoId);
                                game.broadcast('closeDialog', event.videoId);
                                player.storage.qnyh_dy_fanjing_shows.push(event.dis);
                                if (player.hasSkill('qnyh_dy_foguang')) {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_foguang.mp3');
                                    target.$throw(event.dis, 1000);
                                    event.dis.fix();
                                    event.dis.remove();
                                    event.dis.destroyed = true;
                                    game.log(event.dis, '被销毁了');
                                    target.update();
                                }
                                ('step 5');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (lib.config.mode == 'versus') return 0;
                                        return -1.5;
                                    },
                                },
                                threaten: 1.7,
                            },
                        },
                        qnyh_dy_puzhao: {
                            firstDo: true,
                            shaRelated: true,
                            preHidden: true,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!['sha', 'juedou', 'shunshou'].includes(event.card.name)) return false;
                                if (event.player == player) return false;
                                if (player.countMark('qnyh_dy_fanjing') < 1) return false;
                                var num = 0;
                                var storage = player.storage.qnyh_dy_fanjing;
                                for (var i = 0; i < storage.length; i++) {
                                    if (get.color(storage[i]) == 'red') num++;
                                }
                                if (num < 1) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_puzhao_' + [1, 2].randomGet() + '.mp3');
                                player
                                    .chooseCardButton(player.storage.qnyh_dy_fanjing, '普照:弃置一张红色的梵经,令' + get.translation(trigger.player.name) + '展示一张非延时锦囊牌,否则取消' + get.translation(trigger.card) + '对你的目标并令其失去一点体力', 1)
                                    .set('filterButton', function (button) {
                                        return get.color(button.link) == 'red';
                                    })
                                    .set('ai', function (button) {
                                        if (get.attitude(player, trigger.player) > 1) return -1;
                                        var val = get.value(button.link);
                                        return 99 - val;
                                    })
                                    .setHiddenSkill('qnyh_dy_puzhao');
                                ('step 1');
                                if (result.bool) {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_xunyin.mp3');
                                    for (var i of result.links) {
                                        player.storage.qnyh_dy_fanjing.remove(i);
                                    }
                                    player.$throw(result.links, 1000);
                                    game.log(player, '弃置了', get.translation(result.links));
                                    if (player.countMark('qnyh_dy_fanjing') < 1) {
                                        player.unmarkSkill('qnyh_dy_fanjing');
                                    } else {
                                        player.markSkill('qnyh_dy_fanjing');
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                result.bool = false;
                                if (trigger.player.countCards('h') < 1) {
                                    game.log(trigger.player, '已无可展示的牌');
                                    event.goto(5);
                                }
                                ('step 3');
                                trigger.player.chooseCard('普照:展示一张未展示过的黑色非延时锦囊牌,否则取消' + get.translation(trigger.card) + '对' + get.translation(player.name) + '的目标并失去一点体力', function (card) {
                                    if (player.storage.qnyh_dy_fanjing_shows.includes(card)) return false;
                                    return ['trick'].includes(get.type(card)) && get.color(card) == 'black';
                                }).ai = function (card) {
                                    if (['trick'].includes(get.type(card)) && get.color(card) == 'black') return 99;
                                    if (_status.event.getRand() < 0.5) return Math.random();
                                    return get.value(card);
                                };
                                ('step 4');
                                if (result.bool) {
                                    event.dialog = ui.create.dialog(get.translation(trigger.player) + '展示的手牌', result.cards);
                                    event.videoId = lib.status.videoId++;
                                    game.broadcast('createDialog', event.videoId, get.translation(trigger.player) + '展示的手牌', result.cards);
                                    game.addVideo('cardDialog', null, [get.translation(trigger.player) + '展示的手牌', get.cardsInfo(result.cards), event.videoId]);
                                    game.log(trigger.player, '展示了', result.cards[0]);
                                    event.dis = result.cards[0];
                                    event._result = {};
                                    event.goto(6);
                                } else {
                                    game.log(trigger.player, '未展示出锦囊');
                                    event.goto(5);
                                }
                                ('step 5');
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_puzhao_hit.mp3');
                                trigger.parent.excluded.add(player);
                                game.log(player, '取消了', player, '作为目标');
                                trigger.player.loseHp();
                                event.goto(7);
                                ('step 6');
                                event.dialog.close();
                                game.addVideo('cardDialog', null, event.videoId);
                                game.broadcast('closeDialog', event.videoId);
                                player.storage.qnyh_dy_fanjing_shows.push(event.dis);
                                if (player.hasSkill('qnyh_dy_foguang')) {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_foguang.mp3');
                                    trigger.player.$throw(event.dis, 1000);
                                    event.dis.fix();
                                    event.dis.remove();
                                    event.dis.destroyed = true;
                                    game.log(event.dis, '被销毁了');
                                    trigger.player.update();
                                }
                                ('step 7');
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.countMark('qnyh_dy_fanjing') < 4) {
                                        return 4.5 - target.countMark('qnyh_dy_fanjing');
                                    } else {
                                        return 0.8;
                                    }
                                },
                            },
                        },
                        qnyh_dy_huoguo: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            zhuSkill: true,
                            forced: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('qnyh_dy_huoguo')) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'wei' && current.countCards('h') > 0;
                                });
                            },
                            content() {
                                'step 0';
                                result.bool = false;
                                if (event.current == undefined) event.current = player.next;
                                if (event.current == player) {
                                    event.finish();
                                } else if (event.current.group == 'wei' && event.current.countCards('h') > 0) {
                                    var him = event.current;
                                    var me = player;
                                    event.current
                                        .chooseCard('祸国:交给' + get.translation(player.name) + '一张红色非延时锦囊牌并令其替换一张梵经交回给你', 'h', function (card) {
                                            return ['trick'].includes(get.type(card)) && get.color(card) == 'red';
                                        })
                                        .set('ai', function (card) {
                                            if (get.attitude(him, me) < 1) return -1;
                                            return 99 - get.value(card);
                                        })
                                        .setHiddenSkill('qnyh_dy_huoguo')
                                        .set('source', player);
                                } else {
                                    event.goto(3);
                                }
                                ('step 1');
                                if (result.bool) {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_huoguo.mp3');
                                    event.gain = result.cards[0];
                                    if (player == game.me || player.isUnderControl()) {
                                        event.current.$give(event.gain, player);
                                    } else {
                                        event.current.$give(1, player);
                                    }
                                    event.current.lose(result.cards, ui.special, 'toStorage');
                                    player
                                        .chooseCardButton(player.storage.qnyh_dy_fanjing, '普照:交回给' + get.translation(event.current.name) + '一张梵经', 1, true)
                                        .set('filterButton', function (button) {
                                            return true;
                                        })
                                        .set('ai', function (button) {
                                            var val = get.value(button.link);
                                            var isblack = get.color(button.link) == 'black' ? 5 : 0;
                                            if (get.attitude(player, trigger.player) > 0) {
                                                return isblack + val;
                                            } else {
                                                return isblack + 99 - val;
                                            }
                                        });
                                } else {
                                    event.goto(3);
                                }
                                result.bool = false;
                                ('step 2');
                                if (result.bool) {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_huoguo_back.mp3');
                                    event.give = result.links[0];
                                    player.storage.qnyh_dy_fanjing.remove(event.give);
                                    game.log(event.current, '替换了', player, '的一张梵经');
                                    event.current.gain(event.give, player, 'give');
                                    player.storage.qnyh_dy_fanjing.push(event.gain);
                                }
                                ('step 3');
                                event.current = event.current.next;
                                event.goto(0);
                            },
                        },
                        qnyh_dy_tuotai: {
                            juexingji: true,
                            derivation: ['qnyh_dy_foguang', 'qnyh_dy_huangu', 'qnyh_dy_baizu', 'qnyh_dy_hualong'],
                            forced: true,
                            firstDo: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                if (player.storage.qnyh_dy_tuotai) return false;
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_tuotai.mp3');
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainMaxHp().limited = true;
                                ('step 1');
                                if (player.hp < 3) {
                                    player.recover(3 - player.hp).limited = true;
                                }
                                player.update();
                                ('step 2');
                                player.name = 'qnyh_dy_init_puducihang';
                                player.setBackground('qnyh_dy_init_puducihang', 'character');
                                player.flashAvatar('qnyh_dy_tuotai', 'qnyh_dy_init_puducihang');
                                player.addSkill('qnyh_dy_foguang');
                                player.addSkill('qnyh_dy_huangu');
                                game.log(player, '获得了技能', '#g〖佛光〗和〖换骨〗');
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                        },
                        qnyh_dy_foguang: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name) return true;
                                },
                            },
                        },
                        qnyh_dy_huangu: {
                            juexingji: true,
                            derivation: ['qnyh_dy_baizu', 'qnyh_dy_hualong'],
                            forced: true,
                            firstDo: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                if (player.storage.qnyh_dy_huangu) return false;
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_huangu.mp3');
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainMaxHp().limited = true;
                                var list = ['qnyh_dy_xunyin', 'qnyh_dy_puzhao', 'qnyh_dy_foguang'];
                                for (var i = 0; i < list.length; i++) {
                                    if (player.hasSkill(list[i])) player.removeSkill(list[i]);
                                }
                                ('step 1');
                                if (player.hp < 4) {
                                    player.recover(4 - player.hp).limited = true;
                                }
                                player.update();
                                ('step 2');
                                player.name = 'qnyh_dy_init2_puducihang';
                                player.setBackground('qnyh_dy_init2_puducihang', 'character');
                                player.flashAvatar('qnyh_dy_huangu', 'qnyh_dy_init2_puducihang');
                                player.addSkill('qnyh_dy_baizu');
                                player.addSkill('qnyh_dy_hualong');
                                game.log(player, '获得了技能', '#g〖百足〗和〖化龙〗');
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                        },
                        qnyh_dy_baizu: {
                            group: 'qnyh_dy_baizu_defend',
                            subSkill: {
                                ressha: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        'step 0';
                                        var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
                                        trigger.player
                                            .chooseToDiscard('百足:弃置一张黑色非延时锦囊牌,否则杀对' + get.translation(player) + '无效', function (card) {
                                                return get.type(card) == 'trick' && get.color(card) == 'black';
                                            })
                                            .set('ai', function (card) {
                                                if (_status.event.eff > 0) {
                                                    return 10 - get.value(card);
                                                }
                                                return 0;
                                            })
                                            .set('eff', eff);
                                        ('step 1');
                                        if (result.bool == false) {
                                            game.playAudio('../extension/电影乱入/audio/qnyh/dy_baizu.mp3');
                                            trigger.parent.excluded.add(player);
                                        }
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (card.name == 'sha' && get.attitude(player, target) < 0) {
                                                    if (_status.event.name == 'xiangle') return;
                                                    var bs = player.getCards('h', { type: 'trick', color: 'black' });
                                                    if (bs.length < 2) return 0;
                                                    if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
                                                    if (bs.length <= 3 && player.countCards('h', 'sha') <= 1) {
                                                        for (var i = 0; i < bs.length; i++) {
                                                            if (bs[i].name != 'sha' && get.value(bs[i]) < 7) {
                                                                return [1, 0, 1, -0.5];
                                                            }
                                                        }
                                                        return 0;
                                                    }
                                                    return [1, 0, 1, -0.5];
                                                }
                                            },
                                        },
                                    },
                                },
                                defend: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        if (
                                            event.source &&
                                            event.source.hasSkillTag('unequip', false, {
                                                name: event.card ? event.card.name : null,
                                                target: player,
                                                card: event.card,
                                            })
                                        )
                                            return;
                                        if (event.nature) return true;
                                    },
                                    firstDo: true,
                                    forced: true,
                                    content() {
                                        game.playAudio('../extension/电影乱入/audio/qnyh/dy_baizu.mp3');
                                        trigger.cancel();
                                    },
                                    ai: {
                                        nofire: true,
                                        nothunder: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (
                                                    player.hasSkillTag('unequip', false, {
                                                        name: card ? card.name : null,
                                                        target: player,
                                                        card: card,
                                                    })
                                                )
                                                    return;
                                                if (get.tag(card, 'natureDamage')) return 'zerotarget';
                                                if (card.name == 'tiesuo') {
                                                    return [0, 0];
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            firstDo: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                trigger.target.addTempSkill('qinggang2');
                                trigger.target.storage.qinggang2.add(trigger.card);
                                trigger.target.markSkill('qinggang2');
                                ('step 1');
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].shanRequired == 'number') {
                                    map[id].shanRequired++;
                                } else {
                                    map[id].shanRequired = 2;
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > 1) return false;
                                },
                            },
                        },
                        qnyh_dy_hualong: {
                            dutySkill: true,
                            forced: true,
                            group: ['qnyh_dy_hualong_achieve', 'qnyh_dy_hualong_fail'],
                            subSkill: {
                                achieve: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countMark('qnyh_dy_fanjing') < 1) return false;
                                        var num = 0;
                                        var storage = player.storage.qnyh_dy_fanjing;
                                        for (var i = 0; i < storage.length; i++) {
                                            if (get.color(storage[i]) == 'red') num++;
                                        }
                                        if (num < player.countMark('qnyh_dy_fanjing')) return false;
                                        game.playAudio('../extension/电影乱入/audio/qnyh/dy_hualong_achieve.mp3');
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.showCards(player.storage.qnyh_dy_fanjing);
                                        game.log(player, '成功完成使命');
                                        player.awakenSkill('qnyh_dy_hualong');
                                        ('step 1');
                                        var bool = false;
                                        if (player == game.me || player.isFriendsOf(game.me)) bool = true;
                                        else
                                            switch (get.mode()) {
                                                case 'identity': {
                                                    game.showIdentity();
                                                    var id1 = player.identity;
                                                    var id2 = game.me.identity;
                                                    if (['zhu', 'zhong', 'mingzhong'].includes(id1)) {
                                                        if (['zhu', 'zhong', 'mingzhong'].includes(id2)) bool = true;
                                                        break;
                                                    } else if (id1 == 'fan') {
                                                        if (id2 == 'fan') bool = true;
                                                        break;
                                                    }
                                                    break;
                                                }
                                            }
                                        game.over(bool);
                                    },
                                },
                                fail: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    content() {
                                        game.playAudio('../extension/电影乱入/audio/qnyh/dy_hualong_die.mp3');
                                        game.log(player, '使命失败');
                                        player.awakenSkill('qnyh_dy_hualong');
                                        player.die();
                                    },
                                },
                            },
                            derivation: 'xuancun',
                        },
                        qnyh_dy_kongfu: {
                            enable: 'phaseUse',
                            discard: false,
                            lose: false,
                            delay: false,
                            init(player) {
                                lib.translate.qnyh_dy_card_feng = '逐鬼驱魔令';
                                lib.translate.qnyh_dy_card_feng_info = '出牌阶段,对一名其他角色使用.若判定结果不为【闪】,该角色随机弃置两张牌.';
                                lib.card.qnyh_dy_card_feng = {
                                    image: 'ext:电影乱入/card/qnyh_dy_card_feng.png',
                                    fullskin: false,
                                    type: 'delay',
                                    filterTarget(card, player, target) {
                                        return lib.filter.judge(card, player, target) && player != target;
                                    },
                                    judge(card) {
                                        if (card.name == 'shan') return 1;
                                        return -2;
                                    },
                                    judge2(result) {
                                        if (result.bool == false) return true;
                                        return false;
                                    },
                                    effect() {
                                        if (result.bool == false) {
                                            if (player.countCards('he') <= 2) {
                                                var cards = player.getCards('he');
                                            } else {
                                                var cards = player.getCards('he').randomGets(2);
                                            }
                                            player.discard(cards, 'notBySelf');
                                            game.playAudio('../extension/电影乱入/audio/qnyh/dy_kongfu_hit.mp3');
                                        } else {
                                            game.playAudio('../extension/电影乱入/audio/qnyh/dy_kongfu_miss.mp3');
                                        }
                                    },
                                    ai: {
                                        basic: {
                                            order: 1,
                                            useful: 1,
                                            value: 8,
                                        },
                                        result: {
                                            target(player, target) {
                                                if (target.countCards('he') < 2) return 0;
                                                return -1.5 / Math.sqrt(target.countCards('he') + 1);
                                            },
                                        },
                                    },
                                    selectTarget: 1,
                                    enable: true,
                                    content() {
                                        if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
                                    },
                                    allowMultiple: false,
                                };
                                lib.translate.qnyh_dy_card_huo = '天罡五离火';
                                lib.translate.qnyh_dy_card_huo_info = '出牌阶段,对一名其他角色使用.若判定结果不为【闪】,该角色受到一点火焰伤害.';
                                lib.card.qnyh_dy_card_huo = {
                                    image: 'ext:电影乱入/card/qnyh_dy_card_huo.png',
                                    fullskin: false,
                                    type: 'delay',
                                    filterTarget(card, player, target) {
                                        return lib.filter.judge(card, player, target) && player != target;
                                    },
                                    judge(card) {
                                        if (card.name == 'shan') return 1;
                                        return -2;
                                    },
                                    judge2(result) {
                                        if (result.bool == false) return true;
                                        return false;
                                    },
                                    effect() {
                                        if (result.bool == false) {
                                            player.damage(1, 'fire', 'nosource');
                                            game.playAudio('../extension/电影乱入/audio/qnyh/dy_kongfu_hit.mp3');
                                        } else {
                                            game.playAudio('../extension/电影乱入/audio/qnyh/dy_kongfu_miss.mp3');
                                        }
                                    },
                                    ai: {
                                        basic: {
                                            order: 1,
                                            useful: 1,
                                            value: 8,
                                        },
                                        result: {
                                            ignoreStatus: true,
                                            target(player, target) {
                                                if (target.hasSkillTag('nofire')) return 0;
                                                if (player.hasUnknown()) return 0;
                                                return get.damageEffect(target, player);
                                            },
                                        },
                                        tag: {
                                            damage: 1,
                                            fireDamage: 1,
                                            natureDamage: 1,
                                        },
                                    },
                                    selectTarget: 1,
                                    enable: true,
                                    content() {
                                        if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
                                    },
                                    allowMultiple: false,
                                };
                                lib.translate.qnyh_dy_card_lei = '风雷地动令';
                                lib.translate.qnyh_dy_card_lei_info = '出牌阶段,对一名其他角色使用.若判定结果不为【闪】,该角色跳过出牌阶段.';
                                lib.card.qnyh_dy_card_lei = {
                                    image: 'ext:电影乱入/card/qnyh_dy_card_lei.png',
                                    fullskin: false,
                                    type: 'delay',
                                    filterTarget(card, player, target) {
                                        return lib.filter.judge(card, player, target) && player != target;
                                    },
                                    judge(card) {
                                        if (card.name == 'shan') return 1;
                                        return -2;
                                    },
                                    judge2(result) {
                                        if (result.bool == false) return true;
                                        return false;
                                    },
                                    effect() {
                                        if (result.bool == false) {
                                            player.skip('phaseUse');
                                            game.playAudio('../extension/电影乱入/audio/qnyh/dy_kongfu_hit.mp3');
                                        } else {
                                            game.playAudio('../extension/电影乱入/audio/qnyh/dy_kongfu_miss.mp3');
                                        }
                                    },
                                    ai: {
                                        basic: {
                                            order: 1,
                                            useful: 1,
                                            value: 8,
                                        },
                                        result: {
                                            ignoreStatus: true,
                                            target(player, target) {
                                                var num = target.hp - target.countCards('h') - 2;
                                                if (num > -1) return -0.01;
                                                if (target.hp < 3) num--;
                                                if (target.isTurnedOver()) num /= 2;
                                                var dist = get.distance(player, target, 'absolute');
                                                if (dist < 1) dist = 1;
                                                return (num / Math.sqrt(dist)) * get.threaten(target, player);
                                            },
                                        },
                                        tag: {
                                            skip: 'phaseUse',
                                        },
                                    },
                                    selectTarget: 1,
                                    enable: true,
                                    content() {
                                        if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
                                    },
                                    allowMultiple: false,
                                };
                            },
                            filter(event, player) {
                                return player.countCards('hs', { type: 'trick' }) + player.countCards('hs', { type: 'delay' }) > 0;
                            },
                            position: 'hs',
                            filterCard(card, player) {
                                return ['trick', 'delay'].includes(get.type(card));
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                var judges = ['qnyh_dy_card_feng', 'qnyh_dy_card_huo', 'qnyh_dy_card_lei'];
                                for (var i = 0; i < judges.length; i++) {
                                    if (target.canAddJudge({ name: judges[i] })) return true;//QQQ
                                }
                                return false;
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                'step 0';
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_kongfu.mp3');
                                var judges = ['qnyh_dy_card_feng', 'qnyh_dy_card_huo', 'qnyh_dy_card_lei'];
                                event.card = [];
                                var tips = [];
                                for (var i = 0; i < judges.length; i++) {
                                    if (target.canAddJudge({ name: judges[i] })) {
                                        event.card.push(judges[i]);
                                        tips.push('【' + get.translation(judges[i]) + '】' + get.translation(judges[i] + '_info'));
                                    }
                                }
                                player
                                    .chooseControl(event.card, function () {
                                        return event.card && event.card.randomGet();
                                    })
                                    .set('choiceList', tips);
                                ('step 1');
                                if (result.control == 'qnyh_dy_card_feng') {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_kongfu_feng.mp3');
                                }
                                if (result.control == 'qnyh_dy_card_huo') {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_kongfu_huo.mp3');
                                }
                                if (result.control == 'qnyh_dy_card_lei') {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_kongfu_lei.mp3');
                                }
                                player.$give(cards, target);
                                target.addJudge({ name: result.control }, cards);
                                player.line(target);
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        return -2;
                                    },
                                },
                                order: 9,
                            },
                        },
                        qnyh_dy_yuwu: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('hs', { type: 'basic' }) > 0 && player.canMoveCard();
                            },
                            position: 'hs',
                            filterCard(card, player) {
                                return get.type(card) == 'basic';
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            multitarget: true,
                            targetprompt: ['被移走', '移动目标'],
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length) {
                                    var from = ui.selected.targets[0];
                                    var judges = from.getCards('j');
                                    for (var i = 0; i < judges.length; i++) {
                                        if (!target.hasJudge(judges[i].viewAs || judges[i].name)) return true;
                                    }
                                    if (target.isMin()) return false;
                                    if ((from.getEquip(1) && !target.getEquip(1)) || (from.getEquip(2) && !target.getEquip(2)) || (from.getEquip(3) && !target.getEquip(3)) || (from.getEquip(4) && !target.getEquip(4)) || (from.getEquip(5) && !target.getEquip(5))) return true;
                                    return false;
                                } else {
                                    return target.countCards('ej') > 0;
                                }
                            },
                            selectTarget: 2,
                            content() {
                                'step 0';
                                if (targets.length == 2) {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_kongfu.mp3');
                                    player.choosePlayerCard(
                                        'ej',
                                        function (button) {
                                            if (get.attitude(player, targets[0]) > get.attitude(player, targets[1])) {
                                                return get.position(button.link) == 'j' ? 10 : 0;
                                            } else {
                                                if (get.position(button.link) == 'j') return -10;
                                                return get.equipValue(button.link);
                                            }
                                        },
                                        targets[0]
                                    );
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_yuwu.mp3');
                                    if (get.position(result.buttons[0].link) == 'e') {
                                        event.targets[1].equip(result.buttons[0].link);
                                    } else if (result.buttons[0].link.viewAs) {
                                        event.targets[1].addJudge({ name: result.buttons[0].link.viewAs }, [result.buttons[0].link]);
                                    } else {
                                        event.targets[1].addJudge(result.buttons[0].link);
                                    }
                                    event.targets[0].$give(result.buttons[0].link, event.targets[1]);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length == 0) {
                                            if (target.countCards('j') && get.attitude(player, target) > 0) return 1;
                                            if (get.attitude(player, target) < 0) {
                                                var players = game.filterPlayer();
                                                for (var i of players) {
                                                    if (get.attitude(player, i) > 0) {
                                                        if ((target.getEquip(1) && !i.getEquip(1)) || (target.getEquip(2) && !i.getEquip(2)) || (target.getEquip(3) && !i.getEquip(3)) || (target.getEquip(4) && !i.getEquip(4)) || (target.getEquip(5) && !i.getEquip(5))) return -1;
                                                    }
                                                }
                                            }
                                            return 0;
                                        } else {
                                            return get.attitude(player, ui.selected.targets[0]) > 0 ? -1 : 1;
                                        }
                                    },
                                },
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        qnyh_dy_dundi: {
                            firstDo: true,
                            forced: true,
                            logTarget: 'target',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return player == event.target && get.tag(event.card, 'damage') > 0;
                            },
                            content() {
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_dundi.mp3');
                                player.addTempSkill('qianxing');
                            },
                        },
                        qnyh_dy_jinfo: {
                            group: ['qnyh_dy_jinfo_fo', 'qnyh_dy_jinfo_back', 'qnyh_dy_jinfo_forbid'],
                            subSkill: {
                                forbid: {
                                    trigger: {
                                        player: ['phaseBefore'],
                                    },
                                    firstDo: true,
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.qnyh_dy_jinfo_card) return false;
                                        if (!player.storage.qnyh_dy_jinfo_card.length) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getCards('hs');
                                        var jinfo = player.storage.qnyh_dy_jinfo_card;
                                        var list = [];
                                        if (Array.isArray(cards)) for (var i of cards) {
                                            if (i.hasGaintag('qnyh_dy_jinfo_forbid')) i.removeGaintag('qnyh_dy_jinfo_forbid');
                                            if (jinfo.includes(i)) {
                                                i.addGaintag('qnyh_dy_jinfo');
                                                list.push(i);
                                            }
                                        }
                                    },
                                    mod: {
                                        cardname(card, player) {
                                            var event = _status.event ? _status.event.name : 'none';
                                            if (
                                                event.indexOf('choose') == -1 &&
                                                player.countCards('hs', function (card2) {
                                                    return card2.name == 'wuxie' && get.itemtype(card2) == 'card' && !card2.hasGaintag('qnyh_dy_jinfo_forbid');
                                                }) < 1 &&
                                                get.itemtype(card) == 'card' &&
                                                card.hasGaintag('qnyh_dy_jinfo_forbid')
                                            ) {
                                                return 'qnyh_dy_card_wuxie';
                                            }
                                        },
                                        cardEnabled(card, player) {
                                            if (get.itemtype(card) == 'card' && card.hasGaintag('qnyh_dy_jinfo_forbid')) {
                                                return false;
                                            }
                                        },
                                        cardEnabled2(card, player) {
                                            if (get.itemtype(card) == 'card' && card.hasGaintag('qnyh_dy_jinfo_forbid')) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                back: {
                                    trigger: {
                                        global: ['useCardAfter'],
                                    },
                                    firstDo: true,
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.qnyh_dy_jinfo_card) return false;
                                        if (!player.storage.qnyh_dy_jinfo_card.length) return false;
                                        var cards = event.cards;
                                        var jinfo = player.storage.qnyh_dy_jinfo_card;
                                        var list = [];
                                        if (Array.isArray(cards)) for (var i of cards) {
                                            if (jinfo.includes(i)) list.push(i);
                                        }
                                        return list.length && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                                    },
                                    content() {
                                        'step 0';
                                        var cards = trigger.cards;
                                        var jinfo = player.storage.qnyh_dy_jinfo_card;
                                        var list = [];
                                        if (Array.isArray(cards)) for (var i of cards) {
                                            if (jinfo.includes(i)) list.push(i);
                                        }
                                        event.list = list;
                                        if (event.list.length < 1) event.finish();
                                        ('step 1');
                                        game.playAudio('../extension/电影乱入/audio/qnyh/dy_jinfo.mp3');
                                        player.gain(event.list, 'gain2');
                                        ('step 2');
                                        for (var i = 0; i < event.list.length; i++) {
                                            if (event.list[i].hasGaintag('qnyh_dy_jinfo')) event.list[i].removeGaintag('qnyh_dy_jinfo');
                                        }
                                        ('step 3');
                                        player.addGaintag(event.list, 'qnyh_dy_jinfo_forbid');
                                    },
                                },
                                fo: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    firstDo: true,
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.qnyh_dy_jinfo_card) return false;
                                        if (!player.storage.qnyh_dy_jinfo_card.length) return false;
                                        if (event.name == 'gain' && event.player == player) return true;
                                        var evt = event.getl(player);
                                        if (!evt || !evt.hs || evt.hs.length == 0) return false;
                                        var evt = event;
                                        for (var i = 0; i < 4; i++) {
                                            evt = evt.getParent('qnyh_dy_jinfo_fo');
                                            if (evt.name != 'qnyh_dy_jinfo_fo') return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var cards = player.getCards('hs');
                                        var jinfo = player.storage.qnyh_dy_jinfo_card;
                                        var list = [];
                                        if (Array.isArray(cards)) for (var i of cards) {
                                            if (jinfo.includes(i)) {
                                                if (!i.hasGaintag('qnyh_dy_jinfo') || !i.hasGaintag('qnyh_dy_jinfo_forbid')) {
                                                    i.addGaintag('qnyh_dy_jinfo');
                                                }
                                                if (i.hasGaintag('qnyh_dy_jinfo') && i.hasGaintag('qnyh_dy_jinfo_forbid')) {
                                                    i.removeGaintag('qnyh_dy_jinfo');
                                                }
                                                list.push(i);
                                            }
                                        }
                                        if (list.length) {
                                            player.markSkill('qnyh_dy_jinfo_fo');
                                        } else {
                                            player.unmarkSkill('qnyh_dy_jinfo_fo');
                                        }
                                    },
                                    marktext: '金佛',
                                    intro: {
                                        name: '如来佛像',
                                        content(storage, player, skill) {
                                            var cards = player.getCards('hs');
                                            var jinfo = player.storage.qnyh_dy_jinfo_card;
                                            var list = [];
                                            if (Array.isArray(cards)) for (var i of cards) {
                                                if (jinfo.includes(i)) list.push(i);
                                            }
                                            if (list.length) {
                                                return '金佛在木匣里';
                                            } else {
                                                return '金佛已丢失';
                                            }
                                        },
                                    },
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            var jinfo = player.storage.qnyh_dy_jinfo_card;
                                            if (jinfo.includes(card)) return true;
                                        },
                                        cardDiscardable(card, player) {
                                            var jinfo = player.storage.qnyh_dy_jinfo_card;
                                            if (jinfo.includes(card)) return false;
                                        },
                                    },
                                },
                            },
                            trigger: {
                                player: ['enterGame'],
                                global: 'phaseBefore',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            init(player) {
                                player.storage.qnyh_dy_jinfo_card = [];
                            },
                            content() {
                                'step 0';
                                lib.translate.qnyh_dy_jinfo_forbid = '损毁';
                                lib.card.qnyh_dy_card_wuxie = {
                                    type: 'trick',
                                    image: 'ext:电影乱入/card/qnyh_dy_card_wuxie.png',
                                    fullskin: false,
                                };
                                lib.translate.qnyh_dy_card_wuxie = get.translation('wuxie');
                                lib.translate.qnyh_dy_card_wuxie_info = get.translation('wuxie_info');
                                event.fo = game.createCard({ name: 'wuxie', suit: 'heart', number: 13 });
                                player.storage.qnyh_dy_jinfo_card = [event.fo];
                                ('step 1');
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_jinfo.mp3');
                                player.gain(event.fo, 'draw');
                                ('step 2');
                                player.addGaintag([event.fo], 'qnyh_dy_jinfo');
                            },
                        },
                        qnyh_dy_jingang: {
                            group: 'qnyh_dy_jingang_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source && event.source != player;
                                    },
                                    forced: true,
                                    firstDo: true,
                                    check(event, player) {
                                        return get.attitude(player, event.source) <= 0;
                                    },
                                    logTarget: 'source',
                                    content() {
                                        'step 0';
                                        event.cards = trigger.source.getCards('he', { color: 'black' });
                                        ('step 1');
                                        if (event.cards.length < 1) event.finish();
                                        ('step 2');
                                        game.playAudio('../extension/电影乱入/audio/qnyh/dy_jingang_damage.mp3');
                                        trigger.source.discard(event.cards.randomGet(), 'notBySelf', player);
                                    },
                                    ai: {
                                        maixie_defend: true,
                                        effect: {
                                            target(card, player, target) {
                                                if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                                return 0.95;
                                            },
                                        },
                                    },
                                },
                            },
                            trigger: {
                                player: 'damageBegin1',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_jingang.mp3');
                                trigger.cancel();
                            },
                            ai: {
                                notrick: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                            return 'zeroplayertarget';
                                        }
                                    },
                                },
                            },
                        },
                        qnyh_dy_xingluo: {
                            usable: 1,
                            enable: 'phaseUse',
                            position: 'hs',
                            filter(card, player) {
                                return player.countCards('hs', { type: 'basic' }) > 0;
                            },
                            filterCard(card, player) {
                                return get.type(card) == 'basic';
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: [1, 3],
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_xingluo.mp3');
                                player.showCards(result.cards);
                            },
                            content() {
                                'step 0';
                                next = target.chooseToRespond('星罗:打出一张【' + get.translation(cards[0].name) + '】,否则受到一点来自' + get.translation(player.name) + '火焰害', { name: cards[0].name });
                                next.set('ai', function () {
                                    if (get.damageEffect(target, player, target, 'fire') < 0) {
                                        return 2;
                                    }
                                    return -1;
                                });
                                next.set('source', player);
                                next.set('qnyh_dy_xingluo', true);
                                next.noOrdering = true;
                                ('step 1');
                                if (!result.bool) {
                                    target.damage(player, 'fire');
                                }
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                order: 7,
                                fireAttack: true,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (lib.config.mode == 'versus') return -1;
                                        if (player.hasUnknown()) return 0;
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        qnyh_dy_diting: {
                            subSkill: {},
                            trigger: {
                                global: ['loseAfter', 'gainAfter'],//QQQ
                            },
                            firstDo: true,
                            silent: true,
                            forced: true,
                            forceDie: true,
                            filter(event, player) {
                                if (game.me.hasSkill('qnyh_dy_diting') && player != game.me) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                event.players = game.filterPlayer();
                                ('step 1');
                                var audio = false;
                                for (var i of event.players) {
                                    if (i == player) continue;
                                    if (get.distance(player, i) <= 2 && player.isAlive() && (player == game.me || player.isUnderControl())) {
                                        var cards = i.getCards('h', { type: 'basic' });
                                    } else {
                                        var cards = [];
                                    }
                                    var basic = [];
                                    if (!i.storage.qnyh_dy_diting_log) {
                                        var log = [];
                                    } else {
                                        var log = i.storage.qnyh_dy_diting_log;
                                    }
                                    for (var j = 0; j < cards.length; j++) {
                                        var name = cards[j].name;
                                        if (!basic.includes(name)) {
                                            basic.push(name);
                                            if (!lib.skill['qnyh_dy_diting_' + name]) {
                                                lib.translate['qnyh_dy_diting_' + name] = get.translation(name) + '〉';
                                                lib.skill['qnyh_dy_diting_' + name] = {
                                                    charlotte: true,
                                                    mark: true,
                                                    marktext: get.translation(name) + '〉',
                                                    intro: {
                                                        name: '耳听八方',
                                                        content: '来自技能〖谛听〗<li>手牌里存在基本牌·' + get.translation(name),
                                                    },
                                                };
                                            }
                                            if (log.includes(name)) {
                                                log.remove(name);
                                            } else {
                                                i.addTempSkill('qnyh_dy_diting_' + name, { player: 'die' });
                                                audio = true;
                                            }
                                        }
                                    }
                                    for (var k = 0; k < log.length; k++) {
                                        var name = log[k];
                                        if (i.hasSkill('qnyh_dy_diting_' + name)) {
                                            i.removeSkill('qnyh_dy_diting_' + name);
                                        }
                                    }
                                    i.storage.qnyh_dy_diting_log = basic;
                                }
                                if (audio) game.playAudio('../extension/电影乱入/audio/qnyh/dy_diting.mp3');
                            },
                            onremove(player) {
                                var gameall = game.filterPlayer();
                                for (var i = 0; i < gameall.length; i++) {
                                    if (gameall[i] == player) continue;
                                    var cards = [];
                                    var basic = [];
                                    if (!gameall[i].storage.qnyh_dy_diting_log) {
                                        var log = [];
                                    } else {
                                        var log = gameall[i].storage.qnyh_dy_diting_log;
                                    }
                                    for (var j = 0; j < cards.length; j++) {
                                        var name = cards[j].name;
                                        if (!basic.includes(name)) {
                                            basic.push(name);
                                            if (!lib.skill['qnyh_dy_diting_' + name]) {
                                                lib.translate['qnyh_dy_diting_' + name] = get.translation(name) + '〉';
                                                lib.skill['qnyh_dy_diting_' + name] = {
                                                    charlotte: true,
                                                    mark: true,
                                                    marktext: get.translation(name) + '〉',
                                                    intro: {
                                                        name: '耳听八方',
                                                        content: '来自技能〖谛听〗<li>手牌里存在基本牌·' + get.translation(name),
                                                    },
                                                };
                                            }
                                            if (log.includes(name)) {
                                                log.remove(name);
                                            } else {
                                                gameall[i].addSkill('qnyh_dy_diting_' + name);
                                            }
                                        }
                                    }
                                    for (var k = 0; k < log.length; k++) {
                                        var name = log[k];
                                        if (gameall[i].hasSkill('qnyh_dy_diting_' + name)) {
                                            gameall[i].removeSkill('qnyh_dy_diting_' + name);
                                        }
                                    }
                                    gameall[i].storage.qnyh_dy_diting_log = basic;
                                }
                            },
                        },
                        qnyh_dy_sushen: {
                            derivation: 'qnyh_dy_luohan',
                            enable: 'phaseUse',
                            mark: true,
                            limited: true,
                            filter(event, player) {
                                return (
                                    player.hp > 1 &&
                                    game.hasPlayer(function (target) {
                                        return player != target && target.sex == 'male';
                                    })
                                );
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.sex == 'male';
                            },
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_sushen.mp3');
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('qnyh_dy_sushen');
                                target.link(false);
                                target.turnOver(false);
                                target.discard(target.getCards('j'));
                                ('step 1');
                                target.addSkill('qnyh_dy_luohan');
                                event.num = player.hp - 1;
                                ('step 2');
                                target.addMark('qnyh_dy_luohan', event.num);
                                ('step 3');
                                player.changeHp(-event.num);
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            intro: {
                                name: '金血开道',
                                content: 'limited',
                            },
                            ai: {
                                order: 8,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (target.hp * 2 + target.countCards('hes') < 4) return 8;
                                        if (
                                            player.countCards('hs', { name: 'tao' }) + player.getEquip('e2') < 1 &&
                                            game.countPlayer(function (current) {
                                                return current.isFriendsOf(player) && current != player && current.countCards('hs', { name: 'tao' }) > 0;
                                            }) < 1
                                        )
                                            return 0;
                                        if (target.hp * 2 + target.countCards('hes') < 5) return 7;
                                        return 5;
                                    },
                                },
                            },
                        },
                        qnyh_dy_luohan: {
                            group: ['qnyh_dy_luohan_lose', 'qnyh_dy_luohan_compare', 'qnyh_dy_luohan_forcecom', 'qnyh_dy_luohan_damagecom'],
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        return player.countMark('qnyh_dy_luohan') < 1;
                                    },
                                    content() {
                                        game.playAudio('../extension/电影乱入/audio/qnyh/dy_luohan_end.mp3');
                                        player.removeSkill('qnyh_dy_luohan');
                                    },
                                },
                                damagecom: {
                                    enable: 'phaseUse',
                                    filterTarget(card, player, target) {
                                        return player.canCompare(target);
                                    },
                                    filter(event, player) {
                                        return player.countCards('h') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        game.playAudio('../extension/电影乱入/audio/qnyh/dy_luohan_compare.mp3');
                                        player.chooseToCompare(target);
                                        ('step 1');
                                        if (result.bool) {
                                            game.log('✔拼点胜利');
                                            player.line(target, 'fire');
                                            target.damage(player, 'fire');
                                        } else {
                                            game.log('✘拼点失败');
                                        }
                                    },
                                    ai: {
                                        order(card, player) {
                                            if (player.countCards('h', { name: 'zengbin' })) return 1;
                                            return 9;
                                        },
                                        fireAttack: true,
                                        result: {
                                            target(player, target) {
                                                var num = target.countCards('h');
                                                if (num == 1) return -2;
                                                if (num == 2) return -1.5;
                                                return -1;
                                            },
                                        },
                                    },
                                },
                                forcecom: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        game.playAudio('../extension/电影乱入/audio/qnyh/dy_luohan.mp3');
                                        if (player.countMark('qnyh_dy_luohan') > 0) player.removeMark('qnyh_dy_luohan');
                                        player.draw();
                                        player.chooseTarget(get.prompt2('qnyh_dy_luohan'), '请选择是否与至多三名其他角色拼点', [1, 3], function (card, player, target) {
                                            return player != target && player.canCompare(target);
                                        }).ai = function (target) {
                                            return -get.attitude(player, target);
                                        };
                                        ('step 1');
                                        if (!result.bool || !result.targets) event.finish();
                                        ('step 2');
                                        player.line(result.targets);
                                        var targets = result.targets;
                                        player.chooseToCompare(targets).callback = lib.skill.qnyh_dy_luohan_forcecom.callback;
                                    },
                                    callback() {
                                        'step 0';
                                        if (event.num1 > event.num2) {
                                            game.log('✔拼点胜利:', event.card1, '大于', event.card2);
                                            if (get.position(event.card2) == 'd') {
                                                player.gain([event.card2], 'gain2');
                                            }
                                        } else if (event.num1 == event.num2) {
                                            game.log('✘拼点失败:', event.card1, '等于', event.card2);
                                        } else {
                                            game.log('✘拼点失败:', event.card1, '小于', event.card2);
                                        }
                                    },
                                },
                                compare: {
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        return !event.iwhile;
                                    },
                                    firstDo: true,
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        'step 0';
                                        if (player == trigger.player) {
                                            var card1 = trigger.card1.copy();
                                            trigger.num1 += 2;
                                            if (trigger.num1 > 13) trigger.num1 = 13;
                                            trigger.card1.num = trigger.num1;
                                            trigger.num1 = trigger.num1;
                                            var card2 = trigger.card1;
                                        } else {
                                            var card1 = trigger.card2.copy();
                                            trigger.num2 += 2;
                                            if (trigger.num2 > 13) trigger.num2 = 13;
                                            trigger.card2.num = trigger.num2;
                                            trigger.num2 = trigger.num2;
                                            var card2 = trigger.card2;
                                        }
                                        game.log(player, '的', card1, '变为', card2);
                                    },
                                },
                            },
                            trigger: {
                                player: ['damageBegin1', 'loseHpBegin', 'turnOverBefore', 'linkBefore'],
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                if (event.name == 'useCard') return event.player != player;
                                return true;
                            },
                            firstDo: true,
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            marktext: '阳',
                            intro: {
                                name: '罗汉塑身',
                                content(storage, player, skill) {
                                    return get.translation(skill + '_info');
                                },
                            },
                            ai: {
                                noturn: true,
                                nofire: true,
                                nodamage: true,
                                nothunder: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (target != player) return 'zerotarget';
                                    },
                                },
                            },
                        },
                        qnyh_dy_mingfu: {
                            enable: 'phaseUse',
                            mark: true,
                            limited: true,
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (ui.selected.targets.length == 1) {
                                    return [player.next, player.previous].includes(target);
                                }
                                return true;
                            },
                            targetprompt(target) {
                                var player = _status.event.player;
                                if (ui.selected.targets.length > 1) {
                                    if (target == player.next) {
                                        return '移至下家';
                                    } else {
                                        return '移至上家';
                                    }
                                } else {
                                    return '目标';
                                }
                            },
                            selectTarget: 2,
                            multitarget: true,
                            filter(event, player) {
                                if (player.storage.qnyh_dy_mingfu) return false;
                                return (
                                    game.countPlayer(function (current) {
                                        return current != player && current.isIn();
                                    }) >= 2
                                );
                            },
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_mingfu.mp3');
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('qnyh_dy_mingfu');
                                player.storage.qnyh_dy_mingfu = true;
                                if (![player.next, player.previous].includes(targets[1])) event.finish();
                                ('step 1');
                                if (targets[1] == player.previous) {
                                    var seat = player;
                                } else {
                                    var seat = player.next;
                                }
                                game.swapSeat(targets[0], seat, true, true);
                                targets[0].link();
                                target.turnOver();
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length == 0) {
                                            if (get.distance(player, target) <= 2) {
                                                return -1;
                                            } else {
                                                return -4;
                                            }
                                        } else {
                                            return 1;
                                        }
                                    },
                                },
                                expose: 0.3,
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        qnyh_dy_gouhun: {
                            subSkill: {
                                lock: {
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    skillBlocker(skill, player) {
                                        var info = lib.translate[skill + '_info'];
                                        var name = lib.translate[skill];
                                        if (lib.skill[skill].limited) return false;
                                        if (lib.skill[skill].charlotte) return false;
                                        if (lib.skill[skill].juexingji) return false;
                                        if (lib.skill[skill].zhuSkill) return false;
                                        if (lib.skill[skill].dutySkill) return false;
                                        if (lib.skill[skill].hiddenSkill) return false;
                                        if (skill == 'mny_dy_xihun') return false;
                                        return name && name != '' && info && info != '';
                                    },
                                    mark: true,
                                    marktext: '失魂',
                                    intro: {
                                        name: '失魂落魄',
                                        content(storage, player, skill) {
                                            var list = player.getSkills(null, false, false).filter(function (i) {
                                                return lib.skill.qnyh_dy_gouhun_lock.skillBlocker(i, player);
                                            });
                                            if (list.length) return '失效技能:' + get.translation(list);
                                            return '无失效技能';
                                        },
                                    },
                                },
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            firstDo: true,
                            preHidden: true,
                            filter(event, player) {
                                if (player.countCards('h', { color: 'black' }) < 1) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var next = player
                                    .chooseCardTarget({
                                        position: 'h',
                                        filterCard(card, player) {
                                            if (get.color(card) != 'black') return false;
                                            return lib.filter.cardDiscardable;
                                        },
                                        filterTarget(card, player, target) {
                                            return player != target;
                                        },
                                        ai1(card) {
                                            return get.unuseful(card) + 9;
                                        },
                                        ai2(target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (att > 0) return -1;
                                            return 5 - target.countCards('h');
                                        },
                                        prompt: get.prompt('qnyh_dy_gouhun'),
                                        prompt2: '弃置一张黑色手牌并令一名其他角色选择一项:①该角色弃置一张红色锦囊牌并对你造成一点伤害;②该角色弃置一张黑色锦囊牌;③该角色失去一点体力,你获得其非特殊技直到回合结束',
                                    })
                                    .setHiddenSkill(event.name);
                                ('step 1');
                                if (result.bool) {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_gouhun.mp3');
                                    result.bool = false;
                                    event.target = result.targets[0];
                                    player.discard(result.cards);
                                    event.target
                                        .chooseToDiscard('①弃置一张红色锦囊牌并对' + get.translation(player) + '造成一点伤害;②弃置一张黑色锦囊牌;③失去一点体力,' + get.translation(player) + '获得你的非特殊技直到回合结束', function (card) {
                                            return ['trick', 'delay'].includes(get.type(card));
                                        })
                                        .set('ai', function (card) {
                                            if (get.attitude(event.target, player) > 0) {
                                                if (get.color(card) == 'black') return 10 - get.value(card);
                                            } else {
                                                if (get.color(card) == 'red') return 10 - get.value(card);
                                                if (get.color(card) == 'black') return 7 - get.value(card);
                                            }
                                            return -1;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    if (get.color(card) == 'red') {
                                        player.damage(event.target);
                                    }
                                } else {
                                    event.target.loseHp();
                                    var list = event.target.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.qnyh_dy_gouhun_lock.skillBlocker(i, event.target);
                                    });
                                    for (var i = 0; i < list.length; i++) {
                                        player.addTempSkill(list[i]);
                                    }
                                    event.target.addTempSkill('qnyh_dy_gouhun_lock');
                                }
                            },
                        },
                        qnyh_dy_guishou: {
                            group: ['qnyh_dy_guishou_sha', 'qnyh_dy_guishou_miss', 'qnyh_dy_guishou_unequip'],
                            subSkill: {
                                damage: {
                                    charlotte: true,
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (!_status.currentPhase) return;
                                            if (_status.currentPhase == player) {
                                                if (['trick', 'delay', 'equip'].includes(get.type(card))) return false;
                                            }
                                        },
                                        maxHandcardBase(player, num) {
                                            return num - 1;
                                        },
                                    },
                                    mark: true,
                                    marktext: '缠首',
                                    intro: {
                                        name: '鬼首缠身',
                                        content: '回合内不能使用锦囊牌和装备牌,手牌上限减一',
                                    },
                                },
                                sha: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.skill == 'qnyh_dy_guishou';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.addTempSkill('qnyh_dy_guishou_damage', { player: 'phaseAfter' });
                                    },
                                },
                                miss: {
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o' && event.card.is_qnyh_dy_guishou;
                                    },
                                    content() {
                                        'step 0';
                                        event.back = trigger.cards.randomGet();
                                        player.gain(event.back, 'gain2');
                                        ('step 1');
                                        trigger.cards.remove(event.back);
                                    },
                                },
                                unequip: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.parent.skill == 'qnyh_dy_guishou';
                                    },
                                    silent: true,
                                    forced: true,
                                    firstDo: true,
                                    logTarget: 'target',
                                    content() {
                                        trigger.target.addTempSkill('qinggang2');
                                        trigger.target.storage.qinggang2.add(trigger.card);
                                        trigger.target.markSkill('qinggang2');
                                    },
                                },
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && card.is_qnyh_dy_guishou) return Infinity;
                                },
                            },
                            precontent() {
                                event.parent.addCount = false;
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            viewAs: {
                                name: 'sha',
                                color: 'black',
                                is_qnyh_dy_guishou: true,
                            },
                            prompt: '将任意张黑色手牌当杀对等量的角色使用',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            viewAsFilter(player) {
                                return player.countCards('hs', { color: 'black' }) > 0;
                            },
                            position: 'hs',
                            onuse(result, player) {
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_guishou_onuse.mp3');
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_guishou.mp3');
                            },
                            selectCard() {
                                if (ui.selected.targets.length) return [ui.selected.targets.length, Math.min(ui.selected.targets.length + 1, game.players.length - 1)];
                                return [1, Infinity];
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    game.countPlayer(function (current) {
                                        return current != player && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                    }) <= ui.selected.cards.length
                                )
                                    return 0;
                                return 6 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return target != player && player.canUse({ name: 'sha' }, target, false);
                            },
                            selectTarget() {
                                return ui.selected.cards.length;
                            },
                            check(card) {
                                if (_status.event.name == 'chooseToRespond') {
                                    if (card.name == 'sha') return 0;
                                    return 6 - get.useful(card);
                                }
                                if (_status.event.player.countCards('hs') < 4) return 6 - get.useful(card);
                                return 7 - get.useful(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (player.countCards('hs', { color: 'black' }) < 2) return false;
                                },
                                order(item, player) {
                                    return 9;
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
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                ) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -0.5;
                                            }
                                            return -1.5;
                                        })();
                                        if (
                                            !isLink &&
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
                                            return eff / 1.2;
                                        return eff;
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
                            },
                        },
                        qnyh_dy_anjie: {
                            derivation: 'qnyh_dy_card_wuyun',
                            group: 'qnyh_dy_anjie_black',
                            subSkill: {
                                black: {
                                    trigger: {
                                        player: ['loseAfter', 'gainAfter'],
                                        global: ['equipAfter', 'addJudgeAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        if (event.parent.is_anjie_black) return false;
                                        return player.countCards('h', { color: 'red' }) > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.parent.is_anjie_black = true;
                                        ('step 1');
                                        event.heart = player.getCards('h', { suit: 'heart' });
                                        event.diamond = player.getCards('h', { suit: 'diamond' });
                                        ('step 2');
                                        for (var i = 0; i < event.heart.length; i++) {
                                            event.heart[i].init(['spade', event.heart[i].number, event.heart[i].name]);
                                        }
                                        for (var i = 0; i < event.diamond.length; i++) {
                                            event.diamond[i].init(['club', event.diamond[i].number, event.diamond[i].name]);
                                        }
                                    },
                                },
                            },
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            firstDo: true,
                            filter(event, player) {
                                return true;
                            },
                            init(player) {
                                lib.translate.qnyh_dy_card_wuyun = '乌云蔽日';
                                lib.translate.qnyh_dy_card_wuyun_info = '你跳过你的摸牌阶段,同时你展示牌堆顶的三张牌(至少一张为黑色),获得其中黑色的牌.';
                                lib.card.qnyh_dy_card_wuyun = {
                                    image: 'ext:电影乱入/card/qnyh_dy_card_wuyun.png',
                                    fullskin: false,
                                    type: 'delay',
                                    filterTarget(card, player, target) {
                                        return lib.filter.judge(card, player, target);
                                    },
                                    effect() {
                                        'step 0';
                                        game.playAudio('../extension/电影乱入/audio/qnyh/dy_anjie_judge.mp3');
                                        event.cards = get.cards(2).concat(
                                            get.cardPile(function (card) {
                                                if (event.cards.includes(card)) return false;
                                                return get.color(card) == 'black';
                                            }, true)
                                        );
                                        game.cardsGotoOrdering(event.cards);
                                        player.showCards(event.cards);
                                        ('step 1');
                                        var num = 0;
                                        event.cards = event.cards.filter((i) => {
                                            if (!player.hasSkill('qnyh_dy_anjie')) {
                                                if (get.color(i) != 'black') {
                                                    num++;
                                                    return false;
                                                }
                                            }
                                            return true;
                                        });
                                        ('step 2');
                                        if (event.cards.length) {
                                            player.gain(event.cards);
                                            player.$gain2(event.cards);
                                        }
                                        player.skip('phaseDraw');
                                    },
                                    ai: {
                                        basic: {
                                            order: 1,
                                            useful: 1,
                                            value: 4,
                                        },
                                        result: {
                                            target(player, target) {
                                                if (target.hasSkill('qnyh_dy_anjie')) return 1;
                                                return -2;
                                            },
                                        },
                                        tag: {
                                            skip: 'phaseDraw',
                                        },
                                    },
                                    selectTarget: 1,
                                    enable: true,
                                    content() {
                                        if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
                                    },
                                    allowMultiple: false,
                                };
                            },
                            content() {
                                'step 0';
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_anjie_music.mp3');
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_anjie_voice.mp3');
                                event.targets = game.filterPlayer(function (current) {
                                    if (!player.canUse({ name: 'qnyh_dy_card_wuyun' }, current)) return false;
                                    return get.distance(player, current) <= 2 || player == current;
                                });
                                event.targets.sort(lib.sort.seat);
                                ('step 1');
                                event.card = get.cardPile(function (card) {
                                    if (get.color(card) != 'black') return false;
                                    if (['trick', 'delay'].includes(get.type(card))) return true;
                                    return false;
                                }, true);
                                if (event.card) {
                                    player.useCard({ name: 'qnyh_dy_card_wuyun' }, event.targets.shift(), [event.card]).animate = false;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        qnyh_dy_wangsi: {
                            derivation: ['qnyh_dy_anzhang'],
                            trigger: {
                                global: 'die',
                            },
                            forced: true,
                            zhuSkill: true,
                            forceDie: true,
                            filter(event, player) {
                                if (event.player.name == 'qnyh_dy_init_heishanlaoyao') return false;
                                return event.player.group == 'wei' && player.hasZhuSkill('qnyh_dy_wangsi');
                            },
                            content() {
                                'step 0';
                                trigger.player
                                    .chooseControl('确定', '取消', function () {
                                        var att = get.attitude(trigger.player, player);
                                        if (att > 0) {
                                            return '确定';
                                        }
                                        return '取消';
                                    })
                                    .set('prompt', get.prompt('qnyh_dy_wangsi'))
                                    .set('prompt2', '是否复活并变成' + get.translation(player.name) + '的<暗像>？');
                                ('step 1');
                                if (result.control == '确定') {
                                    game.playAudio('../extension/电影乱入/audio/qnyh/dy_wangsi.mp3');
                                    trigger.player.revive(2);
                                    trigger.player.init('qnyh_dy_init_heishanlaoyao');
                                    trigger.player.draw(2);
                                    trigger.player.storage.qnyh_dy_wangsi_source = player;
                                }
                            },
                        },
                        qnyh_dy_anzhang: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                if (!player.storage.qnyh_dy_wangsi_source) return false;
                                if (!player.storage.qnyh_dy_wangsi_source.isIn()) return false;
                                return player.countCards('h', { color: 'black' }) > 0;
                            },
                            forced: true,
                            firstDo: true,
                            preHidden: true,
                            content() {
                                game.playAudio('../extension/电影乱入/audio/qnyh/dy_anzhang.mp3');
                                var source = player.storage.qnyh_dy_wangsi_source;
                                source.gain(player.getCards('h', { color: 'black' }).randomGet(), 'giveAuto', player);
                            },
                        },
                        zmid_dy_benglie: {
                            dutySkill: true,
                            forced: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                'step 0';
                                game.playAudio('../extension/电影乱入/audio/zmid/dy_benglie.mp3');
                                var characters = ['timmy', 'george', 'alice', 'caroline', 'gini', 'louisiana', 'larry', 'rhodes', 'maine', 'paris', 'edward'];
                                var items = {
                                    timmy: {
                                        name: '提姆西',
                                        info: '一个看起来有点自闭的小男孩,很少说话,也不喜欢玩闹,很受父母的疼爱.',
                                        skill: 'danmo',
                                        skill_name: '淡漠',
                                        skill_info: '锁定技,你使用的锦囊牌对其他角色无效;其他角色使用的锦囊牌对你无效.',
                                        sex: 'male',
                                    },
                                    george: {
                                        name: '乔治',
                                        info: '提姆西的父亲,为人木讷不善言谈,从事低收入的工作,很爱他的妻子.',
                                        skill: 'fuai',
                                        skill_name: '父爱',
                                        skill_info: '锁定技,你区域内的♠️️牌均视为♥️️牌;当你因使用、打出或弃牌阶段外因弃置而失去一张♥️️手牌时,你摸一张牌.',
                                        sex: 'male',
                                    },
                                    alice: {
                                        name: '艾莉丝',
                                        info: '乔治的妻子,很疼爱提姆西.',
                                        skill: 'muai',
                                        skill_name: '母爱',
                                        skill_info: '锁定技,你区域内的♦️️牌均视为♥️️牌;当你成为带伤害标签卡牌的目标时,你随机弃置一张♥️️牌并取消此牌对你的目标.',
                                        sex: 'female',
                                    },
                                    caroline: {
                                        name: '卡洛琳',
                                        info: '一个过气的女明星,脾气暴躁,对生活的档次要求非常高,不能忍受稍次的生活条件.',
                                        skill: 'yanwu',
                                        skill_name: '厌恶',
                                        skill_info: '锁定技,每当你使用一张牌时,你摸一张牌;出牌阶段内你每个花色的牌只能使用一张.',
                                        sex: 'female',
                                    },
                                    gini: {
                                        name: '吉妮',
                                        info: '路易斯的女友,较为胆小且迷信鬼神.',
                                        skill: 'nuoruo',
                                        skill_name: '懦弱',
                                        skill_info: '锁定技,摸牌阶段你额外摸一张牌;你的【杀】造成伤害时你随机弃置一张手牌.',
                                        sex: 'female',
                                    },
                                    louisiana: {
                                        name: '路易斯',
                                        info: '吉妮的男友,非常年轻且不太成熟,脾气糟糕.',
                                        skill: 'baozao',
                                        skill_name: '暴躁',
                                        skill_info: '锁定技,出牌阶段你可以额外使用一张【杀】;结束阶段时若你本回合内没有使用过【杀】,你摸一张牌,否则你失去一点体力.',
                                        sex: 'male',
                                    },
                                    larry: {
                                        name: '赖瑞',
                                        info: '一个赌徒,阴差阳错成了汽车旅馆的老板.对金钱很贪婪,特别鄙视妓女,不乐意协助别人.',
                                        skill: 'tanlan',
                                        skill_name: '贪婪',
                                        skill_info: '锁定技,你的手牌上限加一;当你于摸牌阶段外摸牌时,你令摸牌数加一;你不能使用或打出红色的牌.',
                                        sex: 'male',
                                    },
                                    rhodes: {
                                        name: '罗德斯',
                                        info: '一名杀人犯,伪装成警察.控制欲很强.',
                                        skill: 'weishan',
                                        skill_name: '伪善',
                                        skill_info: '锁定技,你使用【杀】指定一名角色为目标时,你可以摸一张牌并交给该角色一张手牌,你令该角色不能响应此牌.',
                                        sex: 'male',
                                    },
                                    maine: {
                                        name: '缅因',
                                        info: '一名罪犯,与罗德一同被押运.目光凶狠.',
                                        skill: 'xionge',
                                        skill_name: '凶恶',
                                        skill_info: '锁定技,你使用【杀】对其他角色造成的伤害加一;每当你于摸牌阶段外摸牌时,你失去一点体力.',
                                        sex: 'male',
                                    },
                                    paris: {
                                        name: '帕瑞斯',
                                        info: '一名妓女,性格开朗善于言谈.',
                                        skill: 'shanliang',
                                        skill_name: '善良',
                                        skill_info: '锁定技,你使用【杀】时需弃置一张红色的牌才能生效;你可以将一张红色的牌当【桃】对一名角色使用.',
                                        sex: 'female',
                                    },
                                    edward: {
                                        name: '爱德华',
                                        info: '一名司机,曾经做过警察,饱受短暂性失忆的困扰.乐于助人不怕麻烦,敢于承担责任,不惧危险.',
                                        skill: 'zhengyi',
                                        skill_name: '正义',
                                        skill_info: '锁定技,当你因弃置而失去一张红色的牌时,你获得一张黑色的牌;出牌阶段限一次/受到伤害后,你可以弃置一张手牌并视为对一名角色/伤害来源使用一张【决斗】.',
                                        sex: 'male',
                                    },
                                };
                                var sub = 'zmid_dy_benglie_';
                                var cards = [];
                                for (var i = 0; i < characters.length; i++) {
                                    var name = characters[i];
                                    lib.translate[sub + items[name].skill] = items[name].skill_name;
                                    lib.translate[sub + items[name].skill + '_info'] = items[name].skill_info;
                                    lib.card['zmid_card_' + name] = {
                                        fullborder: 'bronze',
                                        fullskin: false,
                                        image: 'ext:电影乱入/card/zmid/dy_card_' + name + '.png',
                                        skill: sub + items[name].skill,
                                        type: items[name].skill,
                                        subtype: items[name].skill_name,
                                        sex: items[name].sex,
                                    };
                                    lib.translate['zmid_card_' + name] = items[name].name;
                                    lib.translate['zmid_card_' + name + '_info'] = items[name].skill_info;
                                    lib.translate['zmid_card_' + name + '_append'] = '<' + items[name].info + '>';
                                    var mycard = game.createCard({ name: 'zmid_card_' + name, number: '人', suit: '格' });
                                    mycard.skill = sub + items[name].skill;
                                    cards.push(mycard);
                                    lib.skill[sub + items[name].skill].spiritCard = 'zmid_card_' + name;
                                    lib.skill[sub + items[name].skill].init = function (player, skill) {
                                        var card = lib.skill[skill].spiritCard;
                                        if (!player.storage.zmid_dy_benglie_onuse) {
                                            player.storage.zmid_dy_benglie_onuse = [];
                                        }
                                        if (!player.storage.zmid_dy_benglie_onuse.includes(card)) {
                                            player.storage.zmid_dy_benglie_onuse.push(card);
                                        }
                                    };
                                    lib.skill[sub + items[name].skill].onremove = function (player, skill) {
                                        var card = lib.skill[skill].spiritCard;
                                        if (!player.storage.zmid_dy_benglie_onuse) {
                                            player.storage.zmid_dy_benglie_onuse = [];
                                        }
                                        if (player.storage.zmid_dy_benglie_onuse.includes(card)) {
                                            player.storage.zmid_dy_benglie_onuse.remove(card);
                                        }
                                    };
                                }
                                event.cards = game.randomMatrix(cards);
                                var hide = event.cards.randomGet();
                                player.storage.zmid_dy_benglie_hide = hide;
                                player.storage.zmid_dy_benglie_characters = characters;
                                game.zmid_dy_benglie_all = event.cards;
                                player.storage.zmid_dy_benglie = event.cards;
                                player.storage.zmid_dy_benglie_onuse = [];
                                ('step 1');
                                player.showCards(event.cards);
                                player.markSkill('zmid_dy_benglie');
                                ('step 2');
                                player.chooseControl('ok').set('dialog', ['你的' + get.cnNumber(event.cards.length) + '个人格', event.cards]);
                            },
                            derivation: 'zmid_dy_benglie_show',
                            marktext: '人格',
                            intro: {
                                name: '精神分裂',
                                content(storage, player) {
                                    var list = storage;
                                    var str = '';
                                    var str2 = '';
                                    var onuse = player.storage.zmid_dy_benglie_onuse;
                                    if (list.length) {
                                        if (onuse.includes(list[0].name)) {
                                            str2 += get.translation(list[0]);
                                        } else {
                                            str += get.translation(list[0]);
                                        }
                                        for (var i = 1; i < list.length; i++) {
                                            if (onuse.includes(list[i].name)) {
                                                str2 += '、' + get.translation(list[i]);
                                            } else {
                                                str += '、' + get.translation(list[i]);
                                            }
                                        }
                                    }
                                    if (str2 != '') {
                                        str += '<p>主控人格' + str2;
                                    }
                                    return str;
                                },
                                mark(dialog, content, player) {
                                    var list = content.slice(0);
                                    var list2 = [];
                                    var onuse = player.storage.zmid_dy_benglie_onuse;
                                    for (var i = 0; i < content.length; i++) {
                                        if (onuse.includes(content[i].name)) {
                                            list2.push(content[i]);
                                            list.remove(content[i]);
                                        }
                                    }
                                    if (list.length) {
                                        dialog.addSmall([list, 'card']);
                                    }
                                    if (list2.length) {
                                        dialog.add('主控人格');
                                        dialog.addSmall([list2, 'card']);
                                    }
                                },
                            },
                            group: ['zmid_dy_benglie_phase', 'zmid_dy_benglie_kill'],
                            subSkill: {
                                phase: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        var storage = player.storage.zmid_dy_benglie;
                                        if (!storage) return false;
                                        if (!storage.length) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var storage = player.storage.zmid_dy_benglie;
                                        if (player.storage.zmid_dy_benglie_hide) {
                                            event.isAchieve = false;
                                            if (storage.length > 2) {
                                                event.cards = storage.randomGets(2);
                                            } else {
                                                event.cards = storage;
                                            }
                                        } else {
                                            event.isAchieve = true;
                                            player
                                                .chooseCardButton(storage, '请选择控制的人格', Math.min(2, storage.length), true)
                                                .set('filterButton', function (button) {
                                                    return true;
                                                })
                                                .set('ai', function (button) {
                                                    return Math.random() + 1;
                                                });
                                        }
                                        ('step 1');
                                        if (event.isAchieve) {
                                            event.cards = result.links;
                                        }
                                        player.showCards(event.cards);
                                        ('step 2');
                                        player.$gain2(event.cards);
                                        if (Array.isArray(event.cards)) for (var i of event.cards) {
                                            player.addTempSkill(i.skill, { player: 'phaseBegin' });
                                        }
                                    },
                                },
                                kill: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        var storage = player.storage.zmid_dy_benglie;
                                        if (!storage) return false;
                                        if (!storage.length) return false;
                                        return player.storage.zmid_dy_benglie_hide;
                                    },
                                    content() {
                                        'step 0';
                                        var storage = player.storage.zmid_dy_benglie;
                                        player
                                            .chooseCardButton(storage, '请指定要对其进行审判的人格', 1, true)
                                            .set('filterButton', function (button) {
                                                return true;
                                            })
                                            .set('ai', function (button) {
                                                return Math.random() + 1;
                                            });
                                        ('step 1');
                                        if (result.links?.length) {
                                            event.kill = result.links[0];
                                            player.addSkill('zmid_dy_benglie_nextkill');
                                            player.storage.zmid_dy_benglie_kill = event.kill;
                                            game.log(player, '选择于下回合开始审判', '#y' + get.translation(event.kill.name), '人格');
                                        }
                                    },
                                },
                                nextkill: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    charlotte: true,
                                    firstDo: true,
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var storage = player.storage.zmid_dy_benglie;
                                        var kill = player.storage.zmid_dy_benglie_kill;
                                        if (!kill) event.goto(4);
                                        if (!storage || !storage.length) event.goto(3);
                                        if (!storage.includes(kill)) event.goto(3);
                                        ('step 1');
                                        var kill = player.storage.zmid_dy_benglie_kill;
                                        player.$throw(kill, 1000);
                                        player.storage.zmid_dy_benglie.remove(kill);
                                        game.log(player, '审判了', '#y' + get.translation(kill.name), '人格');
                                        ('step 2');
                                        var storage = player.storage.zmid_dy_benglie.slice(0);
                                        var kill = player.storage.zmid_dy_benglie_kill;
                                        var hide = player.storage.zmid_dy_benglie_hide;
                                        if (!hide) hide = 'none';
                                        if (kill == hide || hide == 'none') {
                                            game.playAudio('../extension/电影乱入/audio/zmid/dy_benglie_achieve.mp3');
                                            if (hide != 'none') game.log('#y' + get.translation(kill.name), '为', '#b隐藏人格');
                                            player.storage.zmid_dy_benglie_hide = false;
                                            game.log(player, '成功完成使命');
                                        } else {
                                            if (storage.includes(hide)) storage.remove(hide);
                                            if (storage.length) {
                                                var die = storage.randomGet();
                                                player.$throw(die, 1000);
                                                player.storage.zmid_dy_benglie.remove(die);
                                                storage.remove(die);
                                                game.log('#b隐藏人格', '击杀了', '#y' + get.translation(die.name), '人格');
                                            }
                                            if (storage.length < 1) {
                                                game.playAudio('../extension/电影乱入/audio/zmid/dy_benglie_fail.mp3');
                                                player.storage.zmid_dy_benglie_hide = false;
                                                game.log(player, '的所有表人格已被消灭');
                                                game.log(player, '使命失败');
                                                player.addSkill('zmid_dy_benglie_fail');
                                            } else {
                                                game.playAudio('../extension/电影乱入/audio/zmid/dy_benglie_kill.mp3');
                                            }
                                        }
                                        event.goto(4);
                                        ('step 3');
                                        game.log('对人格的审判失败');
                                        ('stwp 4');
                                        player.removeSkill('zmid_dy_benglie_nextkill');
                                    },
                                },
                                achieve: {
                                },
                                fail: {
                                    group: 'mad',
                                    mark: true,
                                    marktext: '混乱',
                                    charlotte: true,
                                    intro: {
                                        name: '精神错乱',
                                        content: '已进入混乱状态',
                                    },
                                },
                                danmo: {
                                    firstDo: true,
                                    trigger: {
                                        target: 'useCardToBefore',
                                        player: 'useCardToBefore',
                                    },
                                    forced: true,
                                    _priority: 15,
                                    check(event, player) {
                                        return get.effect(event.target, event.card, event.player, player) < 0;
                                    },
                                    filter(event, player) {
                                        if (!event.target) return false;
                                        if (event.player == player && event.target == player) return false;
                                        return ['trick', 'delay'].includes(get.type(event.card));
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (['trick', 'delay'].includes(get.type(card)) && player != target) return 'zeroplayertarget';
                                            },
                                            player(card, player, target, current) {
                                                if (['trick', 'delay'].includes(get.type(card)) && player != target) return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                },
                                fuai: {
                                    firstDo: true,
                                    trigger: {
                                        player: ['loseAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!['use', 'respond', 'discard'].includes(event.type)) return false;
                                        if (event.getParent('phaseDiscard').player == player) return false;
                                        var evt = event.getl(player);
                                        if (evt && evt.player == player) {
                                            var sumcard = [];
                                            if (evt.hs && evt.hs.length) {
                                                var sumcard = sumcard.concat(evt.hs);
                                            }
                                        }
                                        for (var i = 0; i < sumcard.length; i++) {
                                            if (player.getCards('he').includes(sumcard[i])) continue;
                                            if (sumcard[i].suit == 'heart') return true;
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        game.playAudio('../extension/电影乱入/audio/zmid/dy_fuai.mp3');
                                        event.num = 0;
                                        var evt = trigger.getl(player);
                                        var sumcard = [];
                                        if (evt.hs && evt.hs.length) {
                                            var sumcard = sumcard.concat(evt.hs);
                                        }
                                        for (var i = 0; i < sumcard.length; i++) {
                                            if (player.getCards('he').includes(sumcard[i])) continue;
                                            if (sumcard[i].suit == 'heart') event.num++;
                                        }
                                        ('step 1');
                                        player.draw(event.num);
                                    },
                                    mod: {
                                        suit(card, suit) {
                                            if (suit == 'spade') return 'heart';
                                        },
                                    },
                                },
                                muai: {
                                    firstDo: true,
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        return get.tag(event.card, 'damage') && player.countCards('he', { suit: 'heart' }) > 0;
                                    },
                                    content() {
                                        'step 0';
                                        game.playAudio('../extension/电影乱入/audio/zmid/dy_muai.mp3');
                                        player.discard(player.getCards('he', { suit: 'heart' }).randomGet());
                                        ('step 1');
                                        trigger.parent.excluded.add(player);
                                    },
                                    mod: {
                                        suit(card, suit) {
                                            if (suit == 'diamond') return 'heart';
                                        },
                                    },
                                },
                                yanwu: {
                                    firstDo: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        return event.card;
                                    },
                                    content() {
                                        player.draw();
                                        if (!player.hasSkill('zmid_dy_benglie_yanwu_forbid')) player.addTempSkill('zmid_dy_benglie_yanwu_forbid');
                                        if (_status.currentPhase == player && _status.event.getParent('phaseUse')) {
                                            if (trigger.card.suit) {
                                                var suit = trigger.card.suit;
                                                player.storage.zmid_dy_benglie_yanwu_forbid.push(suit);
                                            }
                                            game.playAudio('../extension/电影乱入/audio/zmid/dy_yanwu_' + player.storage.zmid_dy_benglie_yanwu_forbid.length + '.mp3');
                                        }
                                    },
                                },
                                yanwu_forbid: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '厌恶',
                                    intro: {
                                        name: '爱慕虚荣',
                                        content(storage, player) {
                                            return '不能使用' + get.translation(storage) + '花色的牌';
                                        },
                                    },
                                    init(player, skill) {
                                        player.storage.zmid_dy_benglie_yanwu_forbid = [];
                                    },
                                    onremove(player, skill) {
                                        player.storage.zmid_dy_benglie_yanwu_forbid = [];
                                    },
                                    mod: {
                                        cardEnabled(card, player) {
                                            var suits = player.storage.zmid_dy_benglie_yanwu_forbid;
                                            if (suits.includes(card.suit) && _status.currentPhase == player && _status.event.getParent('phaseUse') && !player.hasSkill('boss_jiding')) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                nuoruo: {
                                    firstDo: true,
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'phaseDraw') {
                                            return !event.numFixed;
                                        } else {
                                            if (player.countCards('h') < 1) return false;
                                            return event.card && event.card.name == 'sha';
                                        }
                                    },
                                    content() {
                                        if (trigger.name == 'phaseDraw') {
                                            game.playAudio('../extension/电影乱入/audio/zmid/dy_nuoruo_draw.mp3');
                                            trigger.num++;
                                        } else if (player.countCards('h') > 0) {
                                            game.playAudio('../extension/电影乱入/audio/zmid/dy_nuoruo_damage.mp3');
                                            player.discard(player.getCards('h').randomGet());
                                        }
                                    },
                                },
                                baozao: {
                                    firstDo: true,
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        game.playAudio('../extension/电影乱入/audio/zmid/dy_baozao.mp3');
                                        var usesha = false;
                                        var history = player.getHistory('useCard').concat(player.getHistory('respond'));
                                        for (var i = 0; i < history.length; i++) {
                                            if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) usesha = true;
                                        }
                                        if (usesha) {
                                            player.loseHp();
                                        } else {
                                            player.draw();
                                        }
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + 1;
                                        },
                                    },
                                },
                                tanlan: {
                                    firstDo: true,
                                    trigger: {
                                        player: 'drawBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.getParent('phaseDraw').player == player) return false;
                                        return !event.numFixed;
                                    },
                                    content() {
                                        game.playAudio('../extension/电影乱入/audio/zmid/dy_tanlan.mp3');
                                        trigger.num++;
                                    },
                                    mod: {
                                        maxHandcardBase(player, num) {
                                            return num + 1;
                                        },
                                        cardSavable(card, player) {
                                            if (get.color(card) == 'red') return false;
                                        },
                                        cardEnabled(card, player) {
                                            if (get.color(card) == 'red') return false;
                                        },
                                        cardResponsabled(card, player) {
                                            if (get.color(card) == 'red') return false;
                                        },
                                    },
                                },
                                weishan: {
                                    firstDo: true,
                                    shaRelated: true,
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.target) <= 0;
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    logTarget: 'target',
                                    preHidden: true,
                                    content() {
                                        'step 0';
                                        game.playAudio('../extension/电影乱入/audio/zmid/dy_weishan.mp3');
                                        player.draw();
                                        ('step 1');
                                        player.chooseCard(
                                            '选择交给' + get.translation(trigger.target.name) + '一张手牌并令其不可闪避此杀',
                                            'h',
                                            1,
                                            true,
                                            function (card, player) {
                                                return true;
                                            },
                                            function (card, player) {
                                                return 13 - get.value(card);
                                            }
                                        );
                                        ('step 2');
                                        if (result.bool) {
                                            trigger.target.gain(result.cards, 'gain2');
                                            trigger.parent.directHit.add(trigger.target);
                                        }
                                    },
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha' || !ui.cardPile.firstChild || get.color(ui.cardPile.firstChild, player) != 'red') return false;
                                        },
                                    },
                                },
                                xionge: {
                                    firstDo: true,
                                    trigger: {
                                        player: 'drawAfter',
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'damage') {
                                            return event.card && event.card.name == 'sha';
                                        } else {
                                            return event.getParent('phaseDraw').player != player;
                                        }
                                    },
                                    content() {
                                        if (trigger.name == 'damage') {
                                            game.playAudio('../extension/电影乱入/audio/zmid/dy_xionge_damage.mp3');
                                            trigger.num++;
                                        } else {
                                            game.playAudio('../extension/电影乱入/audio/zmid/dy_xionge_losehp.mp3');
                                            player.loseHp();
                                        }
                                    },
                                },
                                shanliang: {
                                    group: 'zmid_dy_benglie_shanliang_sha',
                                    firstDo: true,
                                    enable: ['chooseToUse', 'phaseUse'],
                                    filter(event, player) {
                                        return (
                                            player.countCards('hes', { color: 'red' }) > 0 &&
                                            game.hasPlayer(function (current) {
                                                return lib.filter.targetEnabled2({ name: 'tao', color: 'red' }, player, current);
                                            })
                                        );
                                    },
                                    filterTarget(card, player, target) {
                                        var event = _status.event;
                                        if (event.type && event.type == 'dying' && event.dying != target) return false;
                                        return lib.filter.targetEnabled2({ name: 'tao', color: 'red' }, player, target) || (player.canSave(target) && target.isDying());
                                    },
                                    selectTarget() {
                                        if (_status.event.type && _status.event.type == 'dying') return [-1, -1];
                                        return [1, 1];
                                    },
                                    filterCard(card, player) {
                                        return get.color(card) == 'red';
                                    },
                                    position: 'hes',
                                    init(player, skill) {
                                        game.dy_tao_copy = lib.card.tao.slice(0);
                                        game.dy_tao_else = lib.card.tao.slice(0);
                                    },
                                    content() {
                                        game.playAudio('../extension/电影乱入/audio/zmid/dy_shanliang_tao.mp3');
                                        player.useCard({ name: 'tao' }, target, cards);
                                    },
                                    prompt: '将一张红色牌当桃对一名角色使用',
                                    check(card) {
                                        return 9 - get.value(card);
                                    },
                                    mod: {
                                        aiValue(player, card, num) {
                                            if (card.name != 'tao' && get.color(card) != 'red') return;
                                            var cards = player.getCards('hs', function (card) {
                                                return card.name == 'tao' || get.color(card) == 'red';
                                            });
                                            cards.sort(function (a, b) {
                                                return (a.name == 'tao' ? 1 : 2) - (b.name == 'tao' ? 1 : 2);
                                            });
                                            var geti = function () {
                                                if (cards.includes(card)) {
                                                    return cards.indexOf(card);
                                                }
                                                return cards.length;
                                            };
                                            return Math.max(num, [6.5, 4, 3, 2][Math.min(geti(), 2)]);
                                        },
                                        aiUseful() {
                                            return lib.skill.kanpo.mod.aiValue.apply(this, arguments);
                                        },
                                    },
                                    ai: {
                                        order: 9,
                                        result: {
                                            target(player, target) {
                                                if (target.hp == 1) return 5;
                                                if (player == target && player.countCards('h') > player.hp) return 5;
                                                return 2;
                                            },
                                        },
                                    },
                                },
                                shanliang_sha: {
                                    firstDo: true,
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    init(player, skill) {
                                        lib.translate[skill] = '善良';
                                    },
                                    content() {
                                        'step 0';
                                        game.playAudio('../extension/电影乱入/audio/zmid/dy_shanliang_sha.mp3');
                                        var eff = get.effect(trigger.target, trigger.card, player, player);
                                        player
                                            .chooseToDiscard('弃置一张红色的牌,否则杀对' + get.translation(trigger.target) + '无效', function (card) {
                                                return get.color(card) == 'red';
                                            })
                                            .set('ai', function (card) {
                                                if (_status.event.eff > 0) {
                                                    return 10 - get.value(card);
                                                }
                                                return 0;
                                            })
                                            .set('eff', eff);
                                        ('step 1');
                                        if (result.bool == false) {
                                            trigger.parent.excluded.add(trigger.target);
                                        }
                                    },
                                    ai: {
                                        effect: {
                                            player(card, target, player, current) {
                                                if (card.name == 'sha' && get.attitude(player, target) < 0) {
                                                    var bs = player.getCards('h', { color: 'red' });
                                                    if (bs.length - player.getCards('h', { name: 'sha' }) < 1) return 0;
                                                    if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
                                                    if (bs.length <= 3 && player.countCards('h', 'sha') <= 1) {
                                                        for (var i = 0; i < bs.length; i++) {
                                                            if (bs[i].name != 'sha' && get.value(bs[i]) < 7) {
                                                                return [1, 0, 1, -0.5];
                                                            }
                                                        }
                                                        return 0;
                                                    }
                                                    return [1, 0, 1, -0.5];
                                                }
                                            },
                                        },
                                    },
                                },
                                zhengyi: {
                                    group: ['zmid_dy_benglie_zhengyi_draw', 'zmid_dy_benglie_zhengyi_damage'],
                                    firstDo: true,
                                    enable: 'phaseUse',
                                    filterCard: true,
                                    usable: 1,
                                    check(card) {
                                        return 9 - get.value(card);
                                    },
                                    filter(event, player) {
                                        if (!lib.filter.cardEnabled({ name: 'juedou' }, player)) return false;
                                        return player.countCards('h') > 0;
                                    },
                                    filterTarget(card, player, target) {
                                        return player.canUse({ name: 'juedou' }, target);
                                    },
                                    content() {
                                        game.playAudio('../extension/电影乱入/audio/zmid/dy_zhengyi_juedou.mp3');
                                        player.useCard({ name: 'juedou' }, target);
                                    },
                                    ai: {
                                        damage: true,
                                        order(item, player) {
                                            if (player.countCards('h', 'tao') > 0) {
                                                return get.order({ name: 'tao' }) - 1;
                                            }
                                            return 0.5;
                                        },
                                        effect: {
                                            player(card, player, target) {
                                                if (_status.event.skill == 'zhanjue') {
                                                    if (
                                                        player.hasSkillTag(
                                                            'directHit_ai',
                                                            true,
                                                            {
                                                                target: target,
                                                                card: card,
                                                            },
                                                            true
                                                        )
                                                    )
                                                        return;
                                                    if (player.countCards('h') >= 3 || target.countCards('h') >= 3) return 'zeroplayertarget';
                                                    if (player.countCards('h', 'tao')) return 'zeroplayertarget';
                                                    if (target.countCards('h', 'sha') > 1) return 'zeroplayertarget';
                                                }
                                            },
                                        },
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
                                            target: -1.5,
                                            player(player, target, card) {
                                                if (
                                                    player.hasSkillTag(
                                                        'directHit_ai',
                                                        true,
                                                        {
                                                            target: target,
                                                            card: card,
                                                        },
                                                        true
                                                    )
                                                ) {
                                                    return 0;
                                                }
                                                if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                                    return 0;
                                                }
                                                var hs1 = target.countCards('hs', 'sha');
                                                var hs2 = player.countCards('hs', 'sha');
                                                if (hs1 > hs2 + 1) {
                                                    return -2;
                                                }
                                                if (player.hp == 1 && hs2 == 0 && hs1 >= 1) {
                                                    return -2;
                                                }
                                                var hsx = target.countCards('hs');
                                                if (hsx.length == 0) {
                                                    return 0;
                                                }
                                                if (hsx > 3 && hs2 == 0) {
                                                    return -2;
                                                }
                                                return -0.5;
                                            },
                                        },
                                        tag: {
                                            respond: 2,
                                            respondSha: 2,
                                            damage: 1,
                                        },
                                    },
                                },
                                zhengyi_damage: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        if (!player.countCards('h')) return false;
                                        return event.source != undefined && player.canUse({ name: 'juedou' }, event.source);
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.source) <= 0;
                                    },
                                    init(player, skill) {
                                        lib.translate[skill] = '正义';
                                    },
                                    logTarget: 'source',
                                    content() {
                                        'step 0';
                                        var eff = get.effect(trigger.source, { name: 'juedou' }, player, player);
                                        player
                                            .chooseToDiscard('弃置一张手牌并视为对' + get.translation(trigger.source) + '使用一张决斗', 'h', function (card) {
                                                return true;
                                            })
                                            .set('ai', function (card) {
                                                if (_status.event.eff > 0) {
                                                    return 5 - get.value(card);
                                                }
                                                return 0;
                                            })
                                            .set('eff', eff);
                                        ('step 1');
                                        if (result.bool) {
                                            game.playAudio('../extension/电影乱入/audio/zmid/dy_zhengyi_juedou.mp3');
                                            player.useCard({ name: 'juedou' }, trigger.source);
                                        }
                                    },
                                },
                                zhengyi_draw: {
                                    firstDo: true,
                                    trigger: {
                                        player: ['loseAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.type != 'discard') return false;
                                        var evt = event.getl(player);
                                        if (evt && evt.player == player) {
                                            var sumcard = [];
                                            if (evt.hs && evt.hs.length) {
                                                var sumcard = sumcard.concat(evt.hs);
                                            }
                                            if (evt.es && evt.es.length) {
                                                var sumcard = sumcard.concat(evt.es);
                                            }
                                        }
                                        for (var i = 0; i < sumcard.length; i++) {
                                            if (player.getCards('he').includes(sumcard[i])) continue;
                                            if (get.color(sumcard[i], player) == 'red') return true;
                                        }
                                    },
                                    init(player, skill) {
                                        lib.translate[skill] = '正义';
                                    },
                                    content() {
                                        'step 0';
                                        game.playAudio('../extension/电影乱入/audio/zmid/dy_zhengyi_draw.mp3');
                                        event.num = 0;
                                        var evt = trigger.getl(player);
                                        var sumcard = [];
                                        if (evt.hs && evt.hs.length) {
                                            var sumcard = sumcard.concat(evt.hs);
                                        }
                                        if (evt.es && evt.es.length) {
                                            var sumcard = sumcard.concat(evt.es);
                                        }
                                        for (var i = 0; i < sumcard.length; i++) {
                                            if (player.getCards('he').includes(sumcard[i])) continue;
                                            if (get.color(sumcard[i], player) == 'red') event.num++;
                                        }
                                        ('step 1');
                                        player.gain(get.cards(event.num, { color: 'black' }), 'draw');
                                    },
                                },
                            },
                        },
                    },
                };
                lib.config.all.characters.add('电影乱入');
                lib.config.characters.add('电影乱入');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:电影乱入/image/${i}.jpg`)
                }
                lib.translate['电影乱入_character_config'] = `电影乱入`;
                return QQQ;
            });
        },
        config: {
            lineb: {
                name: '<li>挑战BOSS----->>>',
                init: true,
                intro: '我是分割线_(:з」∠)_',
                clear: true,
            },
            vipclear: {
                name: '重置角色解锁进度',
                intro: '<li>这个功能可以重置所有你已解锁的角色,并可以在挑战模式重新挑战这些BOSS角色',
                init: 'none',
                item: {
                    none: '点击设置',
                },
                textMenu(node, link) {
                    if (!game.DYclsvipNodes) game.DYclsvipNodes = [];
                    game.DYclsvipNodes[link] = node;
                    game.DYclsvipMenu = function (linkn) {
                        var items = game.DYclsiscls;
                        var iscls = localStorage.getItem('dy_vip');
                        if (items) {
                            var click = '已重置';
                        } else if (iscls == 'blank') {
                            var click = '未有进度';
                        } else {
                            var click = '重置进度';
                        }
                        return click;
                    };
                    lib.setScroll(node.parentNode);
                    node.innerHTML = game.DYclsvipMenu(link);
                },
                onclick(item) {
                    var iscls = localStorage.getItem('dy_vip');
                    if (iscls != 'blank') game.DYclsiscls = true;
                    localStorage.setItem('dy_vip', 'blank');
                    if (game.DYclsvipNodes[item]) {
                        game.DYclsvipNodes[item].innerHTML = game.DYclsvipMenu(item);
                    }
                },
            },
            linec: {
                name: '<li>角色联动----->>>',
                init: true,
                intro: '我是分割线_(:з」∠)_',
                clear: true,
            },
            link: {
                name: '开启羁绊角色登场',
                intro: '<li>打开此选项,场上的电影角色将有概率召唤出联动的其他角色登场响应配合',
                init: false,
            },
            linkmod: {
                name: '引发羁绊范围',
                intro: '<li>设置能触发联动召唤的角色<br>(以联动召唤出的角色不会再次引发召唤,召唤不会影响主公和玩家)',
                init: 'me',
                item: {
                    me: '仅限玩家',
                    all: '全场角色',
                },
            },
            linkfriend: {
                name: '友方登场概率',
                intro: '<li>登场的概率会根据游戏场上的人数进行一定的稀释,此选项仅影响同一战线的联动召唤',
                init: '60',
                item: {
                    0: '☺☺☺☺☺',
                    20: '☻☺☺☺☺',
                    40: '☻☻☺☺☺',
                    60: '☻☻☻☺☺',
                    80: '☻☻☻☻☺',
                    100: '☻☻☻☻☻',
                },
                textMenu(node, link) {
                    lib.setScroll(node.parentNode);
                    var tralist = {
                        0: '不登场',
                        20: '20%概率',
                        40: '40%概率',
                        60: '60%概率',
                        80: '80%概率',
                        100: '100%概率',
                    };
                    node.innerHTML = tralist[link];
                },
            },
            linkenemy: {
                name: '敌方登场概率',
                intro: '<li>登场的概率会根据游戏场上的人数进行一定的稀释,此选项仅影响对立战线的联动召唤',
                init: '40',
                item: {
                    0: '☺☺☺☺☺',
                    20: '☻☺☺☺☺',
                    40: '☻☻☺☺☺',
                    60: '☻☻☻☺☺',
                    80: '☻☻☻☻☺',
                    100: '☻☻☻☻☻',
                },
                textMenu(node, link) {
                    lib.setScroll(node.parentNode);
                    var tralist = {
                        0: '不登场',
                        20: '20%概率',
                        40: '40%概率',
                        60: '60%概率',
                        80: '80%概率',
                        100: '100%概率',
                    };
                    node.innerHTML = tralist[link];
                },
            },
            linkneutral: {
                name: '中立登场概率',
                intro: '<li>登场的概率会根据游戏场上的人数进行一定的稀释,此选项仅影响酱油角色的联动召唤',
                init: '20',
                item: {
                    0: '☺☺☺☺☺',
                    20: '☻☺☺☺☺',
                    40: '☻☻☺☺☺',
                    60: '☻☻☻☺☺',
                    80: '☻☻☻☻☺',
                    100: '☻☻☻☻☻',
                },
                textMenu(node, link) {
                    lib.setScroll(node.parentNode);
                    var tralist = {
                        0: '不登场',
                        20: '20%概率',
                        40: '40%概率',
                        60: '60%概率',
                        80: '80%概率',
                        100: '100%概率',
                    };
                    node.innerHTML = tralist[link];
                },
            },
        },
        package: {
            intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br>☢_最新拍摄日期:' + window.dy_update,
            author: 'ℋℯ𝓁𝒶𝓈𝒾𝓈𝓎',
            version: '1.0',
        },
    };
});