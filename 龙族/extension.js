import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '龙族',
        content(config, pack) {
            game.PlayerName = function (pl, name) {
                if (pl.name == name) return true;
                if (pl.name1 == name) return true;
                if (pl.name2 == name) return true;
                return false;
            };
            lib.skill.longzu_sphuangdi2 = {
                intro: {
                    content: '不能使用或打出卡牌',
                },
                mark: true,
                mod: {
                    cardEnabled() {
                        return false;
                    },
                    cardUsable() {
                        return false;
                    },
                    cardRespondable() {
                        return false;
                    },
                    cardSavable() {
                        return false;
                    },
                    cardDiscardable(card, player, name) {
                        return false;
                    },
                },
            };
            game.longzuMusic = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/龙族', fn);
                }
            };
            lib.extensionMenu.extension_龙族.today = {
                onclick() {
                    $('<p>' + longzu.todayDate() + '</p>').logsay({ type: 'success', sticky: true });
                },
                name: '查看时间',
                clear: true,
            };
            lib.extensionMenu.extension_龙族.moon = {
                onclick() {
                    longzu.video('extension/龙族/moon.html');
                },
                name: '月球旋转',
                clear: true,
            };
            if (config.alert) {
                window.alert = function (write) {
                    $('<p>' + write + '</p>').logsay({ type: 'warning', sticky: true });
                };
            }
            lib.extensionMenu.extension_龙族.yanhua = {
                onclick() {
                    var ur1 = 'extension/龙族';
                    lib.init.css(ur1, 'yanhua', function () { });
                    $('<p>开始运行3D烟花特效</p>').logsay({ type: 'success', sticky: true });
                    function initVars() {
                        pi = Math.PI;
                        ctx = canvas.getContext('2d');
                        canvas.width = canvas.clientWidth;
                        canvas.height = canvas.clientHeight;
                        cx = canvas.width / 2;
                        cy = canvas.height / 2;
                        playerZ = -25;
                        playerX = playerY = playerVX = playerVY = playerVZ = pitch = yaw = pitchV = yawV = 0;
                        scale = 600;
                        seedTimer = 0;
                        (seedInterval = 5), (seedLife = 100);
                        gravity = 0.02;
                        seeds = new Array();
                        sparkPics = new Array();
                        s = 'https://cantelope.org/NYE/';
                        for (var i = 1; i <= 10; ++i) {
                            sparkPic = new Image();
                            sparkPic.src = s + 'spark' + i + '.png';
                            sparkPics.push(sparkPic);
                        }
                        sparks = new Array();
                        pow1 = new Audio(s + 'pow1.mp3');
                        pow2 = new Audio(s + 'pow2.mp3');
                        pow3 = new Audio(s + 'pow3.mp3');
                        pow4 = new Audio(s + 'pow4.mp3');
                        frames = 0;
                    }
                    function rasterizePoint(x, y, z) {
                        var p, d;
                        x -= playerX;
                        y -= playerY;
                        z -= playerZ;
                        p = Math.atan2(x, z);
                        d = Math.sqrt(x * x + z * z);
                        x = Math.sin(p - yaw) * d;
                        z = Math.cos(p - yaw) * d;
                        p = Math.atan2(y, z);
                        d = Math.sqrt(y * y + z * z);
                        y = Math.sin(p - pitch) * d;
                        z = Math.cos(p - pitch) * d;
                        var rx1 = -1000,
                            ry1 = 1,
                            rx2 = 1000,
                            ry2 = 1,
                            rx3 = 0,
                            ry3 = 0,
                            rx4 = x,
                            ry4 = z,
                            uc = (ry4 - ry3) * (rx2 - rx1) - (rx4 - rx3) * (ry2 - ry1);
                        if (!uc) return { x: 0, y: 0, d: -1 };
                        var ua = ((rx4 - rx3) * (ry1 - ry3) - (ry4 - ry3) * (rx1 - rx3)) / uc;
                        var ub = ((rx2 - rx1) * (ry1 - ry3) - (ry2 - ry1) * (rx1 - rx3)) / uc;
                        if (!z) z = 0.000000001;
                        if (ua > 0 && ua < 1 && ub > 0 && ub < 1) {
                            return {
                                x: cx + (rx1 + ua * (rx2 - rx1)) * scale,
                                y: cy + (y / z) * scale,
                                d: Math.sqrt(x * x + y * y + z * z),
                            };
                        } else {
                            return {
                                x: cx + (rx1 + ua * (rx2 - rx1)) * scale,
                                y: cy + (y / z) * scale,
                                d: -1,
                            };
                        }
                    }
                    function spawnSeed() {
                        seed = new Object();
                        seed.x = -50 + Math.random() * 100;
                        seed.y = 25;
                        seed.z = -50 + Math.random() * 100;
                        seed.vx = 0.1 - Math.random() * 0.2;
                        seed.vy = -1.5; //*(1+Math.random()/2);
                        seed.vz = 0.1 - Math.random() * 0.2;
                        seed.born = frames;
                        seeds.push(seed);
                    }
                    function splode(x, y, z) {
                        t = 5 + parseInt(Math.random() * 150);
                        sparkV = 1 + Math.random() * 2.5;
                        type = parseInt(Math.random() * 3);
                        switch (type) {
                            case 0:
                                pic1 = parseInt(Math.random() * 10);
                                break;
                            case 1:
                                pic1 = parseInt(Math.random() * 10);
                                do {
                                    pic2 = parseInt(Math.random() * 10);
                                } while (pic2 == pic1);
                                break;
                            case 2:
                                pic1 = parseInt(Math.random() * 10);
                                do {
                                    pic2 = parseInt(Math.random() * 10);
                                } while (pic2 == pic1);
                                do {
                                    pic3 = parseInt(Math.random() * 10);
                                } while (pic3 == pic1 || pic3 == pic2);
                                break;
                        }
                        for (m = 1; m < t; ++m) {
                            spark = new Object();
                            spark.x = x;
                            spark.y = y;
                            spark.z = z;
                            p1 = pi * 2 * Math.random();
                            p2 = pi * Math.random();
                            v = sparkV * (1 + Math.random() / 6);
                            spark.vx = Math.sin(p1) * Math.sin(p2) * v;
                            spark.vz = Math.cos(p1) * Math.sin(p2) * v;
                            spark.vy = Math.cos(p2) * v;
                            switch (type) {
                                case 0:
                                    spark.img = sparkPics[pic1];
                                    break;
                                case 1:
                                    spark.img = sparkPics[parseInt(Math.random() * 2) ? pic1 : pic2];
                                    break;
                                case 2:
                                    switch (parseInt(Math.random() * 3)) {
                                        case 0:
                                            spark.img = sparkPics[pic1];
                                            break;
                                        case 1:
                                            spark.img = sparkPics[pic2];
                                            break;
                                        case 2:
                                            spark.img = sparkPics[pic3];
                                            break;
                                    }
                                    break;
                            }
                            spark.radius = 25 + Math.random() * 50;
                            spark.alpha = 1;
                            spark.trail = new Array();
                            sparks.push(spark);
                        }
                        switch (parseInt(Math.random() * 4)) {
                            case 0:
                                pow = new Audio(s + 'pow1.mp3');
                                break;
                            case 1:
                                pow = new Audio(s + 'pow2.mp3');
                                break;
                            case 2:
                                pow = new Audio(s + 'pow3.mp3');
                                break;
                            case 3:
                                pow = new Audio(s + 'pow4.mp3');
                                break;
                        }
                        d = Math.sqrt((x - playerX) * (x - playerX) + (y - playerY) * (y - playerY) + (z - playerZ) * (z - playerZ));
                        pow.volume = 1.5 / (1 + d / 10);
                        pow.play();
                    }
                    function doLogic() {
                        if (seedTimer < frames) {
                            seedTimer = frames + seedInterval * Math.random() * 10;
                            spawnSeed();
                        }
                        for (var i = 0; i < seeds.length; ++i) {
                            seeds[i].vy += gravity;
                            seeds[i].x += seeds[i].vx;
                            seeds[i].y += seeds[i].vy;
                            seeds[i].z += seeds[i].vz;
                            if (frames - seeds[i].born > seedLife) {
                                splode(seeds[i].x, seeds[i].y, seeds[i].z);
                                seeds.splice(i, 1);
                            }
                        }
                        for (var i = 0; i < sparks.length; ++i) {
                            if (sparks[i].alpha > 0 && sparks[i].radius > 5) {
                                sparks[i].alpha -= 0.01;
                                sparks[i].radius /= 1.02;
                                sparks[i].vy += gravity;
                                point = new Object();
                                point.x = sparks[i].x;
                                point.y = sparks[i].y;
                                point.z = sparks[i].z;
                                if (sparks[i].trail.length) {
                                    x = sparks[i].trail[sparks[i].trail.length - 1].x;
                                    y = sparks[i].trail[sparks[i].trail.length - 1].y;
                                    z = sparks[i].trail[sparks[i].trail.length - 1].z;
                                    d = (point.x - x) * (point.x - x) + (point.y - y) * (point.y - y) + (point.z - z) * (point.z - z);
                                    if (d > 9) {
                                        sparks[i].trail.push(point);
                                    }
                                } else {
                                    sparks[i].trail.push(point);
                                }
                                if (sparks[i].trail.length > 5) sparks[i].trail.splice(0, 1);
                                sparks[i].x += sparks[i].vx;
                                sparks[i].y += sparks[i].vy;
                                sparks[i].z += sparks[i].vz;
                                sparks[i].vx /= 1.075;
                                sparks[i].vy /= 1.075;
                                sparks[i].vz /= 1.075;
                            } else {
                                sparks.splice(i, 1);
                            }
                        }
                        p = Math.atan2(playerX, playerZ);
                        d = Math.sqrt(playerX * playerX + playerZ * playerZ);
                        d += Math.sin(frames / 80) / 1.25;
                        t = Math.sin(frames / 200) / 40;
                        playerX = Math.sin(p + t) * d;
                        playerZ = Math.cos(p + t) * d;
                        yaw = pi + p + t;
                    }
                    function rgb(col) {
                        var r = parseInt((0.5 + Math.sin(col) * 0.5) * 16);
                        var g = parseInt((0.5 + Math.cos(col) * 0.5) * 16);
                        var b = parseInt((0.5 - Math.sin(col) * 0.5) * 16);
                        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
                    }
                    function draw() {
                        ctx.clearRect(0, 0, cx * 2, cy * 2);
                        ctx.fillStyle = '#ff8';
                        for (var i = -100; i < 100; i += 3) {
                            for (j = -100; j < 100; j += 4) {
                                x = i;
                                z = j;
                                y = 25;
                                point = rasterizePoint(x, y, z);
                                if (point.d != -1) {
                                    size = 250 / (1 + point.d);
                                    d = Math.sqrt(x * x + z * z);
                                    a = 0.75 - Math.pow(d / 100, 6) * 0.75;
                                    if (a > 0) {
                                        ctx.globalAlpha = a;
                                        ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
                                    }
                                }
                            }
                        }
                        ctx.globalAlpha = 1;
                        for (var i = 0; i < seeds.length; ++i) {
                            point = rasterizePoint(seeds[i].x, seeds[i].y, seeds[i].z);
                            if (point.d != -1) {
                                size = 200 / (1 + point.d);
                                ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
                            }
                        }
                        point1 = new Object();
                        for (var i = 0; i < sparks.length; ++i) {
                            point = rasterizePoint(sparks[i].x, sparks[i].y, sparks[i].z);
                            if (point.d != -1) {
                                size = (sparks[i].radius * 200) / (1 + point.d);
                                if (sparks[i].alpha < 0) sparks[i].alpha = 0;
                                if (sparks[i].trail.length) {
                                    point1.x = point.x;
                                    point1.y = point.y;
                                    switch (sparks[i].img) {
                                        case sparkPics[0]:
                                            ctx.strokeStyle = '#f84';
                                            break;
                                        case sparkPics[1]:
                                            ctx.strokeStyle = '#84f';
                                            break;
                                        case sparkPics[2]:
                                            ctx.strokeStyle = '#8ff';
                                            break;
                                        case sparkPics[3]:
                                            ctx.strokeStyle = '#fff';
                                            break;
                                        case sparkPics[4]:
                                            ctx.strokeStyle = '#4f8';
                                            break;
                                        case sparkPics[5]:
                                            ctx.strokeStyle = '#f44';
                                            break;
                                        case sparkPics[6]:
                                            ctx.strokeStyle = '#f84';
                                            break;
                                        case sparkPics[7]:
                                            ctx.strokeStyle = '#84f';
                                            break;
                                        case sparkPics[8]:
                                            ctx.strokeStyle = '#fff';
                                            break;
                                        case sparkPics[9]:
                                            ctx.strokeStyle = '#44f';
                                            break;
                                    }
                                    for (j = sparks[i].trail.length - 1; j >= 0; --j) {
                                        point2 = rasterizePoint(sparks[i].trail[j].x, sparks[i].trail[j].y, sparks[i].trail[j].z);
                                        if (point2.d != -1) {
                                            ctx.globalAlpha = ((j / sparks[i].trail.length) * sparks[i].alpha) / 2;
                                            ctx.beginPath();
                                            ctx.moveTo(point1.x, point1.y);
                                            ctx.lineWidth = 1 + (sparks[i].radius * 10) / (sparks[i].trail.length - j) / (1 + point2.d);
                                            ctx.lineTo(point2.x, point2.y);
                                            ctx.stroke();
                                            point1.x = point2.x;
                                            point1.y = point2.y;
                                        }
                                    }
                                }
                                ctx.globalAlpha = sparks[i].alpha;
                                ctx.drawImage(sparks[i].img, point.x - size / 2, point.y - size / 2, size, size);
                            }
                        }
                    }
                    function frame() {
                        if (frames > 100000) {
                            seedTimer = 0;
                            frames = 0;
                        }
                        frames++;
                        draw();
                        doLogic();
                        requestAnimationFrame(frame);
                    }
                    window.addEventListener('resize', () => {
                        canvas.width = canvas.clientWidth;
                        canvas.height = canvas.clientHeight;
                        cx = canvas.width / 2;
                        cy = canvas.height / 2;
                    });
                    initVars();
                    frame();
                },
                name: '3D烟花特效',
                clear: true,
            };
            lib.element.player.$longzudie = function () {
                game.addVideo('die', this);
                game.broadcast(function (player) {
                    player.$longzudie();
                }, this);
                if (lib.config.die_move != 'off') {
                    this.$longzudieflip(lib.config.die_move);
                }
                if (lib.element.player.$dieAfter) {
                    lib.element.player.$dieAfter.call(this);
                }
            };
            lib.element.player.$longzudieflip = function (type) {
                var top0 = ui.window.offsetHeight / 2;
                var left0 = ui.window.offsetWidth / 2;
                var ratio = (left0 - this.getLeft()) / (top0 - this.getTop());
                var left = Math.abs((50 * ratio) / Math.sqrt(1 + ratio * ratio));
                var top = Math.abs(50 / Math.sqrt(1 + ratio * ratio));
                if (left0 - this.getLeft() > 0) left = -left;
                if (top0 - this.getTop() > 0) top = -top;
                if (get.is.mobileMe(this)) {
                    left = -Math.random() * 5 - 10;
                    top = Math.random() * 5 + 10;
                }
                if (this._chesstransform) {
                    left += this._chesstransform[0];
                    top += this._chesstransform[1];
                }
                var transform = 'translate(' + left + 'px,' + top + 'px) ' + 'rotate(' + (Math.random() * 20 - 10) + 'deg) ';
                if (type == 'flip') {
                    if (game.layout == 'long' || game.layout == 'long2') {
                        transform += 'rotateY(180deg)';
                    } else {
                        transform += Math.random() - 0.5 < 0 ? 'rotateX(180deg)' : 'rotateY(180deg)';
                    }
                }
                if (get.is.mobileMe(this)) {
                    this.node.avatar.style.transform = transform;
                    this.node.avatar2.style.transform = transform;
                    this.style.transform = '';
                } else {
                    this.node.avatar.style.transform = '';
                    this.node.avatar2.style.transform = '';
                    this.style.transform = transform;
                }
                this.queue(false);
            };
            game.namelydead = [];
            game.namelyplayers = [];
            lib.element.player.namelydie = function (reason) {
                var next = game.createEvent('namelydie');
                next.forceDie = true;
                next.player = this;
                next.reason = reason;
                if (game.__Sakura) next.source = game.__Sakura;
                next.setContent('namelydie');
                return next;
            };
            lib.element.event.namelydie = function (reason) {
                event.trigger('namelydie');
            };
            lib.element.content.namelydie = function () {
                'step 0';
                event.forceDie = true;
                if (_status.roundStart == player) {
                    _status.roundStart = player.next || player.next || game.namelyplayers[0x0];
                }
                var unseen = false;
                if (player.classList.contains('unseen')) {
                    player.classList.remove('unseen');
                    unseen = true;
                }
                var logvid = game.logv(player, 'die', source);
                event.logvid = logvid;
                if (unseen) {
                    player.classList.add('unseen');
                }
                if (source && source != player) {
                    game.log(player, '被', source, '杀害');
                    if (source.stat[source.stat.length - 1].kill == undefined) {
                        source.stat[source.stat.length - 1].kill = 1;
                    } else {
                        source.stat[source.stat.length - 1].kill++;
                    }
                } else {
                    game.log(player, '阵亡');
                }
                if (!game.reserveDead) {
                    for (var mark in player.marks) {
                        player.unmarkSkill(mark);
                    }
                    while (player.node.marks.childNodes.length > 1) {
                        player.node.marks.lastChild.remove();
                    }
                    game.broadcast(function (_0x1e70x4) {
                        while (_0x1e70x4.node.marks.childNodes.length > 1) {
                            _0x1e70x4.node.marks.lastChild.remove();
                        }
                    }, player);
                }
                for (var i in player.tempSkills) {
                    player.removeSkill(i);
                }
                var skills = player.getSkills();
                for (var i = 0; i < skills.length; i++) {
                    if (lib.skill[skills[i]].temp) {
                        player.removeSkill(skills[i]);
                    }
                }
                player.removeEquipTrigger();
                Reflect.defineProperty(player, 'dieclassList', {
                    get() {
                        var _0x1e70x7 = this;
                        function _0x1e70x8(_0x1e70x9) {
                            return function (_0x1e70xa) {
                                var _0x1e70xb = _0x1e70x7.className.split(/\s+/g),
                                    _0x1e70xc = _0x1e70xb.indexOf(_0x1e70xa);
                                _0x1e70x9(_0x1e70xb, _0x1e70xc, _0x1e70xa);
                                _0x1e70x7.className = _0x1e70xb.join(' ');
                            };
                        }
                        return {
                            add: _0x1e70x8(function (_0x1e70xb, _0x1e70xc, _0x1e70xa) {
                                if (!~_0x1e70xc) {
                                    _0x1e70xb.push('dead');
                                    _0x1e70x7.node.count.innerHTML = '0';
                                    _0x1e70x7.node.hp.hide();
                                    _0x1e70x7.node.equips.hide();
                                    _0x1e70x7.node.count.hide();
                                }
                            }),
                            remove: _0x1e70x8(function (_0x1e70xb, _0x1e70xc) {
                                _0x1e70xb.push('dead');
                                _0x1e70x7.node.count.innerHTML = '0';
                                _0x1e70x7.node.hp.hide();
                                _0x1e70x7.node.equips.hide();
                                _0x1e70x7.node.count.hide();
                            }),
                            toggle: _0x1e70x8(function (_0x1e70xb, _0x1e70xc, _0x1e70xa) {
                                _0x1e70xb.push('dead');
                                _0x1e70x7.node.count.innerHTML = '0';
                                _0x1e70x7.node.hp.hide();
                                _0x1e70x7.node.equips.hide();
                                _0x1e70x7.node.count.hide();
                            }),
                            contains(_0x1e70xa) {
                                return !!~_0x1e70x7.className.split(/\s+/g).indexOf(_0x1e70xa);
                            },
                            item(i) {
                                return _0x1e70x7.className.split(/\s+/g)[i] || null;
                            },
                        };
                    },
                });
                Reflect.defineProperty(player, 'revive', {
                    get() {
                        return ['undefined'];
                    },
                    set() { },
                });
                Reflect.defineProperty(player, 'phase', {
                    get() {
                        return ['undefined'];
                    },
                    set() { },
                });
                Reflect.defineProperty(player.classList, 'remove', {
                    get() {
                        return function () {
                            player.className += ' dead';
                        };
                    },
                    set() { },
                });
                game.namelyplayers.add = function () {
                    for (var i = 0; i < arguments.length; i++) {
                        if (this.includes(arguments[i])) {
                            return false;
                        }
                        if (arguments[i].classList.contains('dead')) {
                            return false;
                        }
                        this.push(arguments[i]);
                    }
                    return this;
                };
                game.namelydead.remove = function (_0x1e70xd) {
                    if (Array.isArray(_0x1e70xd)) {
                        for (var i = 0; i < _0x1e70xd.length; i++) {
                            if (!_0x1e70xd[i].classList.contains('dead')) {
                                this.remove(_0x1e70xd[i]);
                            }
                        }
                        return;
                    }
                };
                game.broadcastAll(
                    function (_0x1e70x4, _0x1e70xe) {
                        _0x1e70x4.node.count.innerHTML = '0';
                        _0x1e70x4.node.hp.hide();
                        _0x1e70x4.node.equips.hide();
                        _0x1e70x4.node.count.hide();
                        _0x1e70x4.previous.next = _0x1e70x4.next;
                        _0x1e70x4.next.previous = _0x1e70x4.previous;
                        game.countPlayer(function (_0x1e70xf) {
                            game.namelyplayers.add(_0x1e70xf);
                        });
                        game.namelyplayers.remove(_0x1e70x4);
                        game.namelydead.push(_0x1e70x4);
                        _status.dying.remove(_0x1e70x4);
                        _0x1e70x4.dieclassList.add('dead');
                        _0x1e70x4.className += ' dead';
                        if (game.online && _0x1e70x4 == game.me && !_status.over && !game.controlOver && !ui.exit) {
                            if (lib.mode[lib.configOL.mode].config.dierestart) {
                                ui.create.exit();
                            }
                        }
                        if (lib.config.background_speak) {
                            if (lib.character[_0x1e70x4.name] && lib.character[_0x1e70x4.name][0x4].includes('die_audio')) {
                                game.playAudio('die', _0x1e70x4.name);
                            } else {
                                game.playAudio('die', _0x1e70x4.name, function () {
                                    game.playAudio('die', _0x1e70x4.name.slice(_0x1e70x4.name.indexOf('_') + 1));
                                });
                            }
                        }
                    },
                    player,
                    event.cards
                );
                if (!_status.connectMode && player == game.me && !_status.over && !game.controlOver) {
                    ui.control.show();
                    if (get.config('revive') && lib.mode[lib.config.mode].config.revive && !ui.revive) {
                        ui.revive = ui.create.control('revive', ui.click.dierevive);
                    }
                    if (get.config('continue_game') && !ui.continue_game && lib.mode[lib.config.mode].config.continue_game && !_status.brawl) {
                        ui.continue_game = ui.create.control('再战', game.reloadCurrent);
                    }
                    if (get.config('dierestart') && lib.mode[lib.config.mode].config.dierestart && !ui.restart) {
                        ui.restart = ui.create.control('restart', game.reload);
                    }
                }
                if (!_status.connectMode && player == game.me && !game.modeSwapPlayer) {
                    if (ui.auto) {
                        ui.auto.hide();
                    }
                    if (ui.wuxie) {
                        ui.wuxie.hide();
                    }
                }
                game.addVideo('diex', player);
                if (event.animate !== false) {
                    player.$namelydie(source);
                }
                if (player.dieAfter) {
                    player.dieAfter(source);
                }
                event.trigger('namelydie');
                ('step 1');
                if (player.isDead()) {
                    event.cards = player.getCards('hej');
                    if (event.cards.length) {
                        player.$throw(event.cards, 1000);
                        game.log(player, '弃置了', event.cards, event.logvid);
                        game.cardsDiscard(event.cards);
                    }
                }
                if (typeof _status.coin == 'number' && source && !_status.auto) {
                    if (source == game.me || source.isUnderControl()) {
                        _status.coin += 10;
                    }
                }
                if (source && lib.config.border_style == 'auto' && (lib.config.autoborder_count == 'kill' || lib.config.autoborder_count == 'mix')) {
                    switch (source.node.framebg.dataset.auto) {
                        case 'gold':
                        case 'silver':
                            source.node.framebg.dataset.auto = 'gold';
                            break;
                        case 'bronze':
                            source.node.framebg.dataset.auto = 'silver';
                            break;
                        default:
                            source.node.framebg.dataset.auto = lib.config.autoborder_start || 'bronze';
                    }
                    if (lib.config.autoborder_count == 'kill') {
                        source.node.framebg.dataset.decoration = source.node.framebg.dataset.auto;
                    } else {
                        var dnum = 0;
                        for (var j = 0; j < source.stat.length; j++) {
                            if (source.stat[j].damage != undefined) {
                                dnum += source.stat[j].damage;
                            }
                        }
                        source.node.framebg.dataset.decoration = '';
                        switch (source.node.framebg.dataset.auto) {
                            case 'bronze':
                                if (dnum >= 4) {
                                    source.node.framebg.dataset.decoration = 'bronze';
                                }
                                break;
                            case 'silver':
                                if (dnum >= 8) {
                                    source.node.framebg.dataset.decoration = 'silver';
                                }
                                break;
                            case 'gold':
                                if (dnum >= 12) {
                                    source.node.framebg.dataset.decoration = 'gold';
                                }
                                break;
                        }
                    }
                    source.classList.add('topcount');
                }
            };
            lib.element.player.$namelydie = function () {
                game.addVideo('die', this);
                game.broadcast(function (player) {
                    player.$namelydie();
                }, this);
                if (lib.config.die_move != 'off') {
                    this.$namelydieflip(lib.config.die_move);
                }
                if (lib.element.player.$dieAfter) {
                    lib.element.player.$dieAfter.call(this);
                }
            };
            lib.element.player.$namelydieflip = function (type) {
                var top0 = ui.window.offsetHeight / 2;
                var left0 = ui.window.offsetWidth / 2;
                var ratio = (left0 - this.getLeft()) / (top0 - this.getTop());
                var left = Math.abs((50 * ratio) / Math.sqrt(1 + ratio * ratio));
                var top = Math.abs(50 / Math.sqrt(1 + ratio * ratio));
                if (left0 - this.getLeft() > 0) left = -left;
                if (top0 - this.getTop() > 0) top = -top;
                if (get.is.mobileMe(this)) {
                    left = -Math.random() * 5 - 10;
                    top = Math.random() * 5 + 10;
                }
                if (this._chesstransform) {
                    left += this._chesstransform[0];
                    top += this._chesstransform[1];
                }
                var transform = 'translate(' + left + 'px,' + top + 'px) ' + 'rotate(' + (Math.random() * 20 - 10) + 'deg) ';
                if (type == 'flip') {
                    if (game.layout == 'long' || game.layout == 'long2') {
                        transform += 'rotateY(180deg)';
                    } else {
                        transform += Math.random() - 0.5 < 0 ? 'rotateX(180deg)' : 'rotateY(180deg)';
                    }
                }
                if (get.is.mobileMe(this)) {
                    this.node.avatar.style.transform = transform;
                    this.node.avatar2.style.transform = transform;
                    this.style.transform = '';
                } else {
                    this.node.avatar.style.transform = '';
                    this.node.avatar2.style.transform = '';
                    this.style.transform = transform;
                }
                this.queue(false);
            };
            lib.skill._longzu_sphuangdi3 = {
                trigger: {
                    source: 'damageBegin',
                    player: 'recoverBegin',
                },//QQQ
                filter(event, player) {
                    return player.hasSkill('longzu_sphuangdi');
                },
                forced: true,
                content() {
                    // if(trigger.name=='recover'){
                    trigger.player[trigger.name](trigger.num, 'nosource')._triggered = null;
                    trigger.cancel();
                },
                ai: {
                    damageBonus: true,
                },
            };
            if (lib.brawl) {
                lib.brawl.longzu = {
                    name: '自由一日',
                    mode: 'identity',
                    intro: '<li>场上角色拥有抗性会停止游戏,所有角色无法被即死,此模式中身份无效,且最后一名生还者才能获得胜利.<li>一名角色死亡,伤害来源摸三张牌并获得其装备区的牌.<li>所有角色使用卡牌造成伤害+1(路明非为+2).<li>非龙族角色体力上限为4,路明非体力上限+1.<li>所有角色在回合开始阶段视为使用一张【顺手牵羊】',
                    showcase(init) {
                        var node = this;
                        var player1, player2;
                        if (init) {
                            player1 = ui.create.player(null, true).init('longzu_Sakura');
                            player2 = ui.create.player(null, true).init('longzu_chuzihang');
                            player1.setIdentity('龙族');
                            player2.setIdentity('龙族');
                            player1.style.left = '20px';
                            player1.style.top = '20px';
                            player1.style.transform = 'scale(0.9)';
                            player1.node.count.innerHTML = '2';
                            player1.node.count.dataset.condition = 'mid';
                            player2.style.left = 'auto';
                            player2.style.right = '20px';
                            player2.style.top = '20px';
                            player2.style.transform = 'scale(0.9)';
                            player2.node.count.innerHTML = '2';
                            player2.node.count.dataset.condition = 'mid';
                            this.appendChild(player1);
                            this.appendChild(player2);
                            this.player1 = player1;
                            this.player2 = player2;
                        } else {
                            player1 = this.player1;
                            player2 = this.player2;
                        }
                        var rect1 = player1.getBoundingClientRect();
                        var rect2 = player2.getBoundingClientRect();
                        var left1 = rect1.left + rect1.width / 2 - ui.arena.offsetLeft;
                        var left2 = rect2.left + rect2.width / 2 - ui.arena.offsetLeft;
                        var top1 = rect1.top + rect1.height / 2 - ui.arena.offsetTop;
                        var top2 = rect2.top + rect2.height / 2 - ui.arena.offsetTop;
                        var createCard = function (wuxie) {
                            var card;
                            if (wuxie) {
                                card = game.createCard('sha', 'noclick');
                                card.style.transform = 'scale(0.9)';
                            } else {
                                card = ui.create.card(null, 'noclick', true);
                            }
                            card.style.opacity = 0;
                            card.style.position = 'absolute';
                            card.style.zIndex = 2;
                            card.style.margin = 0;
                            return card;
                        };
                        var func = function () {
                            game.linexy([left1, top1, left2, top2]);
                            var card = createCard(true);
                            card.style.left = '43px';
                            card.style.top = '58px';
                            node.appendChild(card);
                            ui.refresh(card);
                            card.style.opacity = 1;
                            card.style.transform = 'scale(0.9) translate(137px,152px)';
                            setTimeout(function () {
                                card.delete();
                            }, 1000);
                            player1.node.count.innerHTML = '1';
                            setTimeout(function () {
                                if (!node.showcaseinterval) return;
                                player1.node.count.innerHTML = '2';
                                var card = createCard();
                                card.style.left = '43px';
                                card.style.top = '58px';
                                card.style.transform = 'scale(0.9) translate(137px,152px)';
                                node.appendChild(card);
                                ui.refresh(card);
                                card.style.opacity = 1;
                                card.style.transform = 'scale(0.9)';
                                setTimeout(function () {
                                    card.delete();
                                }, 1000);
                            }, 300);
                            setTimeout(function () {
                                if (!node.showcaseinterval) return;
                                player2.node.count.innerHTML = '1';
                                game.linexy([left2, top2, left1, top1]);
                                var card = createCard(true);
                                card.style.left = 'auto';
                                card.style.right = '43px';
                                card.style.top = '58px';
                                node.appendChild(card);
                                ui.refresh(card);
                                card.style.opacity = 1;
                                card.style.transform = 'scale(0.9) translate(-137px,152px)';
                                setTimeout(function () {
                                    card.delete();
                                }, 700);
                                setTimeout(function () {
                                    if (!node.showcaseinterval) return;
                                    player2.node.count.innerHTML = '2';
                                    var card = createCard();
                                    card.style.left = 'auto';
                                    card.style.right = '43px';
                                    card.style.top = '58px';
                                    card.style.transform = 'scale(0.9) translate(-137px,152px)';
                                    node.appendChild(card);
                                    ui.refresh(card);
                                    card.style.opacity = 1;
                                    card.style.transform = 'scale(0.9)';
                                    setTimeout(function () {
                                        card.delete();
                                    }, 700);
                                }, 300);
                            }, 1000);
                        };
                        node.showcaseinterval = setInterval(func, 2200);
                        func();
                    },
                    init() {
                        game.saveConfig('identity_mode', 'normal', 'identity');
                        game.saveConfig('player_number', '8', 'identity');
                        game.saveConfig('double_character', false, 'identity');
                        //longzu.video('file:///storage/emulated/0/Android/data/com.widget.noname/extension/龙族/龙族.mp4','_self','height=90, width=120, top=0, left=0, toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes, status=yes');
                        game.longzudead = [];
                        get.population = function (identity) {
                            if (identity == undefined) return game.players.length + game.longzudead.length;
                            var i;
                            var num = 0;
                            for (var i = 0; i < game.players.length; i++) {
                                if (i.identity == identity) num++;
                            }
                            return num;
                        };
                        game.checkResult = function () {
                            if (game.players.length > 1) return;
                            if (game.me.isAlive()) {
                                game.over(true);
                            } else {
                                game.over(false);
                            }
                        };
                        game.over = function (result) {
                            if (_status.over) return;
                            var i, j, k, num, table, tr, td, dialog;
                            _status.over = true;
                            ui.control.show();
                            ui.clear();
                            game.stopCountChoose();
                            if (ui.time3) {
                                clearInterval(ui.time3.interval);
                            }
                            if ((game.layout == 'long2' || game.layout == 'nova') && !game.chess) {
                                ui.arena.classList.add('choose-character');
                                ui.me.hide();
                                ui.mebg.hide();
                                ui.autonode.hide();
                                if (lib.config.radius_size != 'off') {
                                    ui.historybar.style.borderRadius = '0 0 0 4px';
                                }
                            }
                            if (game.online) {
                                var dialog = ui.create.dialog();
                                dialog.content.innerHTML = result;
                                dialog.forcebutton = true;
                                var result2 = arguments[1];
                                if (result2 == true) {
                                    dialog.content.firstChild.innerHTML = '战斗胜利';
                                } else if (result2 == false) {
                                    dialog.content.firstChild.innerHTML = '战斗失败';
                                }
                                ui.update();
                                dialog.add(ui.create.div('.placeholder'));
                                for (var i of game.players) {
                                    var hs = i.getCards('h');
                                    if (hs.length) {
                                        dialog.add('<div class="text center">' + get.translation(i) + '</div>');
                                        dialog.addSmall(hs);
                                    }
                                }
                                for (var j = 0; j < game.longzudead.length; j++) {
                                    var hs = game.longzudead[j].getCards('h');
                                    if (hs.length) {
                                        dialog.add('<div class="text center">' + get.translation(game.longzudead[j]) + '</div>');
                                        dialog.addSmall(hs);
                                    }
                                }
                                dialog.add(ui.create.div('.placeholder.slim'));
                                if (lib.config.background_audio) {
                                    if (result2 === true) {
                                        game.playAudio('effect/win');
                                    } else if (result2 === false) {
                                        game.playAudio('effect/lose');
                                    } else {
                                        game.playAudio('effect/tie');
                                    }
                                }
                                if (!ui.exit) {
                                    ui.create.exit();
                                }
                                if (ui.giveup) {
                                    ui.giveup.remove();
                                    delete ui.giveup;
                                }
                                if (game.servermode) {
                                    ui.exit.firstChild.innerHTML = '返回房间';
                                    setTimeout(function () {
                                        ui.exit.firstChild.innerHTML = '退出房间';
                                        _status.roomtimeout = true;
                                        lib.config.reconnect_info[2] = null;
                                        game.saveConfig('reconnect_info', lib.config.reconnect_info);
                                    }, 10000);
                                }
                                if (ui.tempnowuxie) {
                                    ui.tempnowuxie.close();
                                    delete ui.tempnowuxie;
                                }
                                if (ui.auto) ui.auto.hide();
                                if (ui.wuxie) ui.wuxie.hide();
                                if (game.getIdentityList) {
                                    for (var i of game.players) {
                                        i.setIdentity();
                                    }
                                }
                                return;
                            }
                            if (lib.config.background_audio) {
                                if (result === true) {
                                    game.playAudio('effect/win');
                                } else if (result === false) {
                                    game.playAudio('effect/lose');
                                } else {
                                    game.playAudio('effect/tie');
                                }
                            }
                            var resultbool = result;
                            if (typeof resultbool !== 'boolean') {
                                resultbool = null;
                            }
                            if (result === true) result = '战斗胜利';
                            if (result === false) result = '战斗失败';
                            if (result == undefined) result = '战斗结束';
                            dialog = ui.create.dialog(result);
                            dialog.forcebutton = true;
                            if (game.addOverDialog) {
                                game.addOverDialog(dialog, result);
                            }
                            if (typeof _status.coin == 'number' && !_status.connectMode) {
                                var coeff = Math.random() * 0.4 + 0.8;
                                var added = 0;
                                var betWin = false;
                                if (result == '战斗胜利') {
                                    if (_status.betWin) {
                                        betWin = true;
                                        _status.coin += 10;
                                    }
                                    _status.coin += 20;
                                    if (_status.additionalReward) {
                                        _status.coin += _status.additionalReward();
                                    }
                                    switch (lib.config.mode) {
                                        case 'identity': {
                                            switch (game.me.identity) {
                                                case 'zhu':
                                                case 'zhong':
                                                case 'mingzhong':
                                                    if (get.config('enhance_zhu')) {
                                                        added = 10;
                                                    } else {
                                                        added = 20;
                                                    }
                                                    break;
                                                case 'fan':
                                                    if (get.config('enhance_zhu')) {
                                                        added = 16;
                                                    } else {
                                                        added = 8;
                                                    }
                                                    break;
                                                case 'nei':
                                                    added = 40;
                                                    break;
                                            }
                                            added = (added * (game.players.length + game.longzudead.length)) / 8;
                                            break;
                                        }
                                        case 'guozhan':
                                            if (game.me.identity == 'ye') {
                                                added = 8;
                                            } else {
                                                added = 5 / get.totalPopulation(game.me.identity);
                                            }
                                            added = added * (game.players.length + game.longzudead.length);
                                            break;
                                        case 'versus':
                                            if (_status.friend) {
                                                added = 5 * (game.players.length + _status.friend.length);
                                            }
                                            break;
                                        default:
                                            added = 10;
                                    }
                                } else {
                                    added = 10;
                                }
                                if (lib.config.mode == 'chess' && _status.mode == 'combat' && get.config('additional_player')) {
                                    added = 2;
                                }
                                _status.coin += added * coeff;
                                if (_status.coinCoeff) {
                                    _status.coin *= _status.coinCoeff;
                                }
                                _status.coin = Math.ceil(_status.coin);
                                dialog.add(ui.create.div('', '获得' + _status.coin + '金'));
                                if (betWin) {
                                    game.changeCoin(20);
                                    dialog.content.appendChild(document.createElement('br'));
                                    dialog.add(ui.create.div('', '(下注赢得10金)'));
                                }
                                game.changeCoin(_status.coin);
                            }
                            if (get.mode() == 'versus' && _status.ladder) {
                                var mmr = _status.ladder_mmr;
                                mmr += 10 - get.rank(game.me.name, true) * 2;
                                if (result == '战斗胜利') {
                                    mmr = 20 + Math.round(mmr);
                                    if (mmr > 40) {
                                        mmr = 40;
                                    } else if (mmr < 10) {
                                        mmr = 10;
                                    }
                                    dialog.add(ui.create.div('', '获得 ' + mmr + ' 积分'));
                                } else {
                                    mmr = -30 + Math.round(mmr / 2);
                                    if (mmr > -20) {
                                        mmr = -20;
                                    } else if (mmr < -35) {
                                        mmr = -35;
                                    }
                                    if (lib.storage.ladder.current < 900) {
                                        mmr = Math.round(mmr / 4);
                                    } else if (lib.storage.ladder.current < 1400) {
                                        mmr = Math.round(mmr / 2);
                                    } else if (lib.storage.ladder.current < 2000) {
                                        mmr = Math.round(mmr / 1.5);
                                    } else if (lib.storage.ladder.current > 2500) {
                                        mmr = Math.round(mmr * 1.5);
                                    }
                                    dialog.add(ui.create.div('', '失去 ' + -mmr + ' 积分'));
                                }
                                if (_status.ladder_tmp) {
                                    lib.storage.ladder.current += 40;
                                    delete _status.ladder_tmp;
                                }
                                lib.storage.ladder.current += mmr;
                                if (lib.storage.ladder.top < lib.storage.ladder.current) {
                                    lib.storage.ladder.top = lib.storage.ladder.current;
                                }
                                game.save('ladder', lib.storage.ladder);
                                if (ui.ladder && game.getLadderName) {
                                    ui.ladder.innerHTML = game.getLadderName(lib.storage.ladder.current);
                                }
                            }
                            // if(true){
                            if (game.players.length) {
                                table = document.createElement('table');
                                tr = document.createElement('tr');
                                tr.appendChild(document.createElement('td'));
                                td = document.createElement('td');
                                td.innerHTML = '伤害';
                                tr.appendChild(td);
                                td = document.createElement('td');
                                td.innerHTML = '受伤';
                                tr.appendChild(td);
                                td = document.createElement('td');
                                td.innerHTML = '摸牌';
                                tr.appendChild(td);
                                td = document.createElement('td');
                                td.innerHTML = '出牌';
                                tr.appendChild(td);
                                td = document.createElement('td');
                                td.innerHTML = '杀敌';
                                tr.appendChild(td);
                                table.appendChild(tr);
                                for (var i = 0; i < game.players.length; i++) {
                                    tr = document.createElement('tr');
                                    td = document.createElement('td');
                                    td.innerHTML = get.translation(i);
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < i.stat.length; j++) {
                                        if (i.stat[j].damage != undefined) num += i.stat[j].damage;
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < i.stat.length; j++) {
                                        if (i.stat[j].damaged != undefined) num += i.stat[j].damaged;
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < i.stat.length; j++) {
                                        if (i.stat[j].gain != undefined) num += i.stat[j].gain;
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < i.stat.length; j++) {
                                        for (k in i.stat[j].card) {
                                            num += i.stat[j].card[k];
                                        }
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < i.stat.length; j++) {
                                        if (i.stat[j].kill != undefined) num += i.stat[j].kill;
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    table.appendChild(tr);
                                }
                                dialog.add(ui.create.div('.placeholder'));
                                dialog.content.appendChild(table);
                            }
                            if (game.longzudead.length) {
                                table = document.createElement('table');
                                table.style.opacity = '0.5';
                                if (game.players.length == 0) {
                                    tr = document.createElement('tr');
                                    tr.appendChild(document.createElement('td'));
                                    td = document.createElement('td');
                                    td.innerHTML = '伤害';
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    td.innerHTML = '受伤';
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    td.innerHTML = '摸牌';
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    td.innerHTML = '出牌';
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    td.innerHTML = '杀敌';
                                    tr.appendChild(td);
                                    table.appendChild(tr);
                                }
                                for (var i = 0; i < game.longzudead.length; i++) {
                                    tr = document.createElement('tr');
                                    td = document.createElement('td');
                                    td.innerHTML = get.translation(game.longzudead[i]);
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < game.longzudead[i].stat.length; j++) {
                                        if (game.longzudead[i].stat[j].damage != undefined) num += game.longzudead[i].stat[j].damage;
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < game.longzudead[i].stat.length; j++) {
                                        if (game.longzudead[i].stat[j].damaged != undefined) num += game.longzudead[i].stat[j].damaged;
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < game.longzudead[i].stat.length; j++) {
                                        if (game.longzudead[i].stat[j].gain != undefined) num += game.longzudead[i].stat[j].gain;
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < game.longzudead[i].stat.length; j++) {
                                        for (k in game.longzudead[i].stat[j].card) {
                                            num += game.longzudead[i].stat[j].card[k];
                                        }
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < game.longzudead[i].stat.length; j++) {
                                        if (game.longzudead[i].stat[j].kill != undefined) num += game.longzudead[i].stat[j].kill;
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    table.appendChild(tr);
                                }
                                dialog.add(ui.create.div('.placeholder'));
                                dialog.content.appendChild(table);
                            }
                            if (game.additionaldead && game.additionaldead.length) {
                                table = document.createElement('table');
                                table.style.opacity = '0.5';
                                for (var i = 0; i < game.additionaldead.length; i++) {
                                    tr = document.createElement('tr');
                                    td = document.createElement('td');
                                    td.innerHTML = get.translation(game.additionaldead[i]);
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < game.additionaldead[i].stat.length; j++) {
                                        if (game.additionaldead[i].stat[j].damage != undefined) num += game.additionaldead[i].stat[j].damage;
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < game.additionaldead[i].stat.length; j++) {
                                        if (game.additionaldead[i].stat[j].damaged != undefined) num += game.additionaldead[i].stat[j].damaged;
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < game.additionaldead[i].stat.length; j++) {
                                        if (game.additionaldead[i].stat[j].gain != undefined) num += game.additionaldead[i].stat[j].gain;
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < game.additionaldead[i].stat.length; j++) {
                                        for (k in game.additionaldead[i].stat[j].card) {
                                            num += game.additionaldead[i].stat[j].card[k];
                                        }
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    num = 0;
                                    for (j = 0; j < game.additionaldead[i].stat.length; j++) {
                                        if (game.additionaldead[i].stat[j].kill != undefined) num += game.additionaldead[i].stat[j].kill;
                                    }
                                    td.innerHTML = num;
                                    tr.appendChild(td);
                                    table.appendChild(tr);
                                }
                                dialog.add(ui.create.div('.placeholder'));
                                dialog.content.appendChild(table);
                            }
                            // }
                            dialog.add(ui.create.div('.placeholder'));
                            var clients = game.players.concat(game.longzudead);
                            for (var i = 0; i < clients.length; i++) {
                                if (clients[i].isOnline2()) {
                                    clients[i].send(game.over, dialog.content.innerHTML, game.checkOnlineResult(clients[i]));
                                }
                            }
                            dialog.add(ui.create.div('.placeholder'));
                            for (var i of game.players) {
                                if (!_status.connectMode && i.isUnderControl(true) && game.layout != 'long2') continue;
                                var hs = i.getCards('h');
                                if (hs.length) {
                                    dialog.add('<div class="text center">' + get.translation(i) + '</div>');
                                    dialog.addSmall(hs);
                                }
                            }
                            for (var i = 0; i < game.longzudead.length; i++) {
                                if (!_status.connectMode && game.longzudead[i].isUnderControl(true) && game.layout != 'long2') continue;
                                var hs = game.longzudead[i].getCards('h');
                                if (hs.length) {
                                    dialog.add('<div class="text center">' + get.translation(game.longzudead[i]) + '</div>');
                                    dialog.addSmall(hs);
                                }
                            }
                            dialog.add(ui.create.div('.placeholder.slim'));
                            game.addVideo('over', null, dialog.content.innerHTML);
                            var vinum = parseInt(lib.config.video);
                            if (!_status.video && vinum && game.getVideoName && window.indexedDB && _status.videoInited) {
                                var store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
                                var videos = lib.videos.slice(0);
                                for (var i = 0; i < videos.length; i++) {
                                    if (videos[i].starred) {
                                        videos.splice(i--, 1);
                                    }
                                }
                                for (var deletei = 0; deletei < 5; deletei++) {
                                    if (videos.length >= vinum) {
                                        var toremove = videos.pop();
                                        lib.videos.remove(toremove);
                                        store.delete(toremove.time);
                                    } else {
                                        break;
                                    }
                                }
                                var me = game.me || game.players[0];
                                if (!me) return;
                                var newvid = {
                                    name: game.getVideoName(),
                                    mode: lib.config.mode,
                                    video: lib.video,
                                    win: result == '战斗胜利',
                                    name1: me.name1 || me.name,
                                    name2: me.name2,
                                    time: lib.getUTC(new Date()),
                                };
                                var modecharacters = lib.characterPack['mode_' + get.mode()];
                                if (modecharacters) {
                                    if (get.mode() == 'guozhan') {
                                        if (modecharacters[newvid.name1]) {
                                            if (newvid.name1.indexOf('gz_shibing') == 0) {
                                                newvid.name1 = newvid.name1.slice(3, 11);
                                            } else {
                                                newvid.name1 = newvid.name1.slice(3);
                                            }
                                        }
                                        if (modecharacters[newvid.name2]) {
                                            if (newvid.name2.indexOf('gz_shibing') == 0) {
                                                newvid.name2 = newvid.name2.slice(3, 11);
                                            } else {
                                                newvid.name2 = newvid.name2.slice(3);
                                            }
                                        }
                                    } else {
                                        if (modecharacters[newvid.name1]) {
                                            newvid.name1 = get.mode() + '::' + newvid.name1;
                                        }
                                        if (modecharacters[newvid.name2]) {
                                            newvid.name2 = get.mode() + '::' + newvid.name2;
                                        }
                                    }
                                }
                                if (newvid.name1 && newvid.name1.indexOf('subplayer_') == 0) {
                                    newvid.name1 = newvid.name1.slice(10, newvid.name1.lastIndexOf('_'));
                                }
                                if (newvid.name2 && newvid.name2.indexOf('subplayer_') == 0) {
                                    newvid.name1 = newvid.name2.slice(10, newvid.name1.lastIndexOf('_'));
                                }
                                lib.videos.unshift(newvid);
                                store.put(newvid);
                                ui.create.videoNode(newvid, true);
                            }
                            // _status.auto=false;
                            if (ui.auto) {
                                // ui.auto.classList.remove('glow');
                                ui.auto.hide();
                            }
                            if (ui.wuxie) ui.wuxie.hide();
                            if (ui.giveup) {
                                ui.giveup.remove();
                                delete ui.giveup;
                            }
                            if (lib.config.test_game && !_status.connectMode) {
                                if (typeof lib.config.test_game !== 'string') {
                                    switch (lib.config.mode) {
                                        case 'identity':
                                            game.saveConfig('mode', 'guozhan');
                                            break;
                                        case 'guozhan':
                                            game.saveConfig('mode', 'versus');
                                            break;
                                        case 'versus':
                                            game.saveConfig('mode', 'boss');
                                            break;
                                        case 'boss':
                                            game.saveConfig('mode', 'chess');
                                            break;
                                        case 'chess':
                                            game.saveConfig('mode', 'stone');
                                            break;
                                        case 'stone':
                                            game.saveConfig('mode', 'identity');
                                            break;
                                    }
                                }
                                setTimeout(game.reload, 500);
                            }
                            if (game.controlOver) {
                                game.controlOver();
                                return;
                            }
                            if (!_status.brawl) {
                                if (lib.config.mode == 'boss') {
                                    ui.create.control('再战', function () {
                                        var pointer = game.boss;
                                        var map = { boss: game.me == game.boss, links: [] };
                                        for (var iwhile = 0; iwhile < 10; iwhile++) {
                                            pointer = pointer.nextSeat;
                                            if (pointer == game.boss) {
                                                break;
                                            }
                                            if (!pointer.side) {
                                                map.links.push(pointer.name);
                                            }
                                        }
                                        game.saveConfig('continue_name_boss', map);
                                        game.saveConfig('mode', lib.config.mode);
                                        localStorage.setItem(lib.configprefix + 'directstart', true);
                                        game.reload();
                                    });
                                } else if (lib.config.mode == 'versus') {
                                    if (_status.mode == 'standard' || _status.mode == 'three') {
                                        ui.create.control('再战', function () {
                                            game.saveConfig('continue_name_versus' + (_status.mode == 'three' ? '_three' : ''), {
                                                friend: _status.friendBackup,
                                                enemy: _status.enemyBackup,
                                                color: _status.color,
                                            });
                                            game.saveConfig('mode', lib.config.mode);
                                            localStorage.setItem(lib.configprefix + 'directstart', true);
                                            game.reload();
                                        });
                                    }
                                } else if (!_status.connectMode && get.config('continue_game') && !ui.continue_game && !_status.brawl) {
                                    ui.continue_game = ui.create.control('再战', game.reloadCurrent);
                                }
                            }
                            if (!ui.restart) {
                                if (game.onlineroom && typeof game.roomId == 'number') {
                                    ui.restart = ui.create.control('restart', function () {
                                        game.broadcastAll(function () {
                                            if (ui.exit) {
                                                ui.exit.stay = true;
                                                ui.exit.firstChild.innerHTML = '返回房间';
                                            }
                                        });
                                        game.saveConfig('tmp_owner_roomId', game.roomId);
                                        setTimeout(game.reload, 100);
                                    });
                                } else {
                                    ui.restart = ui.create.control('restart', game.reload);
                                }
                            }
                            if (ui.tempnowuxie) {
                                ui.tempnowuxie.close();
                                delete ui.tempnowuxie;
                            }
                            if (ui.revive) {
                                ui.revive.close();
                                delete ui.revive;
                            }
                            if (ui.swap) {
                                ui.swap.close();
                                delete ui.swap;
                            }
                            for (var i = 0; i < lib.onover.length; i++) {
                                lib.onover[i](resultbool);
                            }
                            if (game.addRecord) {
                                game.addRecord(resultbool);
                            }
                            if (window.isNonameServer) {
                                lib.configOL.gameStarted = false;
                                game.saveConfig('pagecfg' + window.isNonameServer, [lib.configOL, game.roomId, _status.onlinenickname, _status.onlineavatar]);
                                game.reload();
                            }
                        };
                        get.distance = function (from, to, method) {
                            if (from == to) return 0;
                            if (!game.players.includes(from) && !game.longzudead.includes(from)) return Infinity;
                            if (!game.players.includes(to) && !game.longzudead.includes(to)) return Infinity;
                            var player = from,
                                m,
                                n = 1,
                                i;
                            var fxy, txy;
                            if (game.chess) {
                                fxy = from.getXY();
                                txy = to.getXY();
                                n = Math.abs(fxy[0] - txy[0]) + Math.abs(fxy[1] - txy[1]);
                                if (method == 'raw' || method == 'pure' || method == 'absolute') return n;
                            } else if (to.isMin(true) || from.isMin(true)) {
                                if (method == 'raw' || method == 'pure' || method == 'absolute') return n;
                            } else {
                                var length = game.players.length;
                                var totalPopulation = game.players.length + game.longzudead.length + 1;
                                for (var iwhile = 0; iwhile < totalPopulation; iwhile++) {
                                    if (player.nextSeat != to) {
                                        player = player.nextSeat;
                                        if (player.isAlive() && !player.isOut() && !player.hasSkill('undist') && !player.isMin(true)) n++;
                                    } else {
                                        break;
                                    }
                                }
                                for (var i = 0; i < game.players.length; i++) {
                                    if (i.isOut() || i.hasSkill('undist') || i.isMin(true)) length--;
                                }
                                if (method == 'absolute') return n;
                                if (from.isDead()) length++;
                                if (to.isDead()) length++;
                                n = Math.min(n, length - n);
                                if (method == 'raw' || method == 'pure') return n;
                            }
                            n = game.checkMod(from, to, n, 'globalFrom', from);
                            n = game.checkMod(from, to, n, 'globalTo', to);
                            m = n;
                            m = game.checkMod(from, to, m, 'attackFrom', from);
                            m = game.checkMod(from, to, m, 'attackTo', to);
                            var equips1 = from.getCards('e', function (card) {
                                return !ui.selected.cards || !ui.selected.cards.includes(card);
                            }),
                                equips2 = to.getCards('e', function (card) {
                                    return !ui.selected.cards || !ui.selected.cards.includes(card);
                                });
                            for (var i = 0; i < equips1.length; i++) {
                                var info = get.info(equips1[i]).distance;
                                if (!info) continue;
                                if (info.globalFrom) {
                                    m += info.globalFrom;
                                    n += info.globalFrom;
                                }
                                if (info.attackFrom) {
                                    m += info.attackFrom;
                                }
                            }
                            for (var i = 0; i < equips2.length; i++) {
                                var info = get.info(equips2[i]).distance;
                                if (!info) continue;
                                if (info.globalTo) {
                                    m += info.globalTo;
                                    n += info.globalTo;
                                }
                                if (info.attaclTo) {
                                    m += info.attaclTo;
                                }
                            }
                            if (method == 'attack') return m;
                            return n;
                        };
                        lib.element.player.isDead = function () {
                            return this.classList.contains('longzudead');
                        };
                        lib.element.player.isAlive = function () {
                            return !this.classList.contains('longzudead');
                        };
                        lib.element.player.$die = function () {
                            game.addVideo('die', this);
                            game.broadcast(function (player) {
                                player.$die();
                            }, this);
                            if (lib.config.die_move != 'off') {
                                //	this.$dieflip(lib.config.die_move);
                            }
                            if (lib.element.player.$dieAfter) {
                                lib.element.player.$dieAfter.call(this);
                            }
                        };
                        lib.element.player.die = function (reason) {
                            if (!this.storage.longzu_longhuang) {
                                var next = game.createEvent('die');
                                next.player = this;
                                next.reason = reason;
                                if (reason) next.source = reason.source;
                                next.restMap = { type: null, count: null, audio: null };
                                next.excludeMark = [];
                                next.setContent('die');
                                return next;
                            } else {
                                if (this.hp > 0) {
                                    game.log(this, '取消了即死');
                                    return;
                                }
                                if (this.hp <= 0) {
                                    var next = game.createEvent('die');
                                    next.player = this;
                                    next.reason = reason;
                                    if (reason) next.source = reason.source;
                                    next.restMap = { type: null, count: null, audio: null };
                                    next.excludeMark = [];
                                    next.setContent('die');
                                    return next;
                                }
                            }
                        };
                        lib.element.player.revive = function (hp, log) {
                            if (log !== false) game.log(this, '禁止复活');
                        };
                        lib.element.content.die = function () {
                            'step 0';
                            if (player.hp > 0 && player.maxHp > 0) {
                                game.log(player, '免疫即死');
                                return;
                            }
                            event.forceDie = true;
                            if (_status.roundStart == player) {
                                _status.roundStart = player.next || player.next || game.players[0];
                            }
                            var unseen = false;
                            if (player.classList.contains('unseen')) {
                                player.classList.remove('unseen');
                                unseen = true;
                            }
                            var logvid = game.logv(player, 'die', source);
                            event.logvid = logvid;
                            if (unseen) {
                                player.classList.add('unseen');
                            }
                            if (source && source != player) {
                                game.log(player, '被', source, '击败');
                                source.draw(3);
                                if (source.stat[source.stat.length - 1].kill == undefined) {
                                    source.stat[source.stat.length - 1].kill = 1;
                                } else {
                                    source.stat[source.stat.length - 1].kill++;
                                }
                            } else {
                                game.log(player, '被击败');
                            }
                            if (!game.reserveDead) {
                                for (var mark in player.marks) {
                                    player.unmarkSkill(mark);
                                }
                                while (player.node.marks.childNodes.length > 1) {
                                    player.node.marks.lastChild.remove();
                                }
                                game.broadcast(function (player) {
                                    while (player.node.marks.childNodes.length > 1) {
                                        player.node.marks.lastChild.remove();
                                    }
                                }, player);
                            }
                            for (var i in player.tempSkills) {
                                player.removeSkill(i);
                            }
                            var skills = player.getSkills();
                            for (var i = 0; i < skills.length; i++) {
                                if (lib.skill[skills[i]].temp) {
                                    player.removeSkill(skills[i]);
                                }
                            }
                            // player.removeEquipTrigger();
                            // for(var i in lib.skill.globalmap){
                            //     if(lib.skill.globalmap[i].includes(player)){
                            //         lib.skill.globalmap[i].remove(player);
                            //         if(lib.skill.globalmap[i].length==0&&!lib.skill[i].globalFixed){
                            //             game.removeGlobalSkill(i);
                            //         }
                            //     }
                            // }
                            game.broadcastAll(function (player) {
                                player.classList.add('longzudead');
                                player.classList.remove('linked2');
                                player.classList.remove('linked');
                                player.classList.remove('turnedover');
                                player.classList.remove('out');
                                player.node.count.innerHTML = '0';
                                player.node.hp.hide();
                                player.node.equips.hide();
                                player.node.count.hide();
                                //player.previous.next=player.next;
                                //player.next.previous=player.previous;
                                var player2;
                                player2 = player.previousSeat;
                                while (player2.isDead()) player2 = player2.previousSeat;
                                player2.next = player.next;
                                player2 = player.nextSeat;
                                while (player2.isDead()) player2 = player2.nextSeat;
                                player2.previous = player.previous;
                                player.previous.next = player2;
                                game.players.remove(player);
                                game.longzudead.push(player);
                                _status.dying.remove(player);
                                if (lib.config.background_speak) {
                                    if (lib.character[player.name] && lib.character[player.name][4].includes('die_audio')) {
                                        game.playAudio('die', player.name);
                                    }
                                    // else if(true){
                                    else {
                                        game.playAudio('die', player.name, function () {
                                            game.playAudio('die', player.name.slice(player.name.indexOf('_') + 1));
                                        });
                                    }
                                }
                            }, player);
                            game.addVideo('diex', player);
                            if (event.animate !== false) {
                                player.$die(source);
                            }
                            ('step 1');
                            if (player.dieAfter) player.dieAfter(source);
                            ('step 2');
                            event.trigger('die');
                            game.checkResult();
                            ('step 3');
                            if (player.isDead()) {
                                event.cards = player.getCards('hej');
                                if (event.cards.length) {
                                    player.lose(event.cards).forceDie = true;
                                    player.$throw(event.cards, 1000);
                                    game.log(player, '弃置了', event.cards, event.logvid);
                                }
                            }
                            /*		setTimeout(function(){
                                                if(game.players.includes(player)==false){
                                                player.revive();
                                                }
                                            },150000);							*/
                            ('step 4');
                            if (player.dieAfter2) player.dieAfter2(source);
                            ('step 5');
                            /*	game.broadcastAll(function(player){
                                    if(game.online&&player==game.me&&!_status.over&&!game.controlOver&&!ui.exit){
                                        if(lib.mode[lib.configOL.mode].config.dierestart){
                                            ui.create.exit();
                                        }
                                    }
                                },player);
                                if(!_status.connectMode&&player==game.me&&!_status.over&&!game.controlOver){
                                    ui.control.show();
                                    if(get.config('revive')&&lib.mode[lib.config.mode].config.revive&&!ui.revive){
                                        ui.revive=ui.create.control('revive',ui.click.dierevive);
                                    }
                                    if(get.config('continue_game')&&!ui.continue_game&&lib.mode[lib.config.mode].config.continue_game&&!_status.brawl){
                                        ui.continue_game=ui.create.control('再战',game.reloadCurrent);
                                    }
                                    if(get.config('dierestart')&&lib.mode[lib.config.mode].config.dierestart&&!ui.restart){
                                        ui.restart=ui.create.control('restart',game.reload);
                                    }
                                }
                                if(!_status.connectMode&&player==game.me&&!game.modeSwapPlayer){
                                    // _status.auto=false;
                                    if(ui.auto){
                                        // ui.auto.classList.remove('glow');
                                        ui.auto.hide();
                                    }
                                    if(ui.wuxie) ui.wuxie.hide();
                                }
                                */
                            if (typeof _status.coin == 'number' && source && !_status.auto) {
                                if (source == game.me || source.isUnderControl()) {
                                    _status.coin += 10;
                                }
                            }
                            if (source && lib.config.border_style == 'auto' && (lib.config.autoborder_count == 'kill' || lib.config.autoborder_count == 'mix')) {
                                switch (source.node.framebg.dataset.auto) {
                                    case 'gold':
                                    case 'silver':
                                        source.node.framebg.dataset.auto = 'gold';
                                        break;
                                    case 'bronze':
                                        source.node.framebg.dataset.auto = 'silver';
                                        break;
                                    default:
                                        source.node.framebg.dataset.auto = lib.config.autoborder_start || 'bronze';
                                }
                                if (lib.config.autoborder_count == 'kill') {
                                    source.node.framebg.dataset.decoration = source.node.framebg.dataset.auto;
                                } else {
                                    var dnum = 0;
                                    for (var j = 0; j < source.stat.length; j++) {
                                        if (source.stat[j].damage != undefined) dnum += source.stat[j].damage;
                                    }
                                    source.node.framebg.dataset.decoration = '';
                                    switch (source.node.framebg.dataset.auto) {
                                        case 'bronze':
                                            if (dnum >= 4) source.node.framebg.dataset.decoration = 'bronze';
                                            break;
                                        case 'silver':
                                            if (dnum >= 8) source.node.framebg.dataset.decoration = 'silver';
                                            break;
                                        case 'gold':
                                            if (dnum >= 12) source.node.framebg.dataset.decoration = 'gold';
                                            break;
                                    }
                                }
                                source.classList.add('topcount');
                            }
                        };
                        /*		lib.skill._longzu_video={
                                trigger:{
                forced:true,
                    global:"gameStart",
                },
                filter:function (event,player){
                    return player==game.me;
                },
                forced:true,
                content:function (){
                       "step 0"
                game.me.chooseControl('跳转浏览器观看视频','还是算了',function(){        
                     return '还是算了';
                });
                "step 1"
                 if(result.control=='还是算了'){        
                    }
                 if(result.control=='跳转浏览器观看视频'){  
            longzu.video('http://m5.baidu.com/sf?pd=video_page&nid=11882276359419656068&sign=11160643041621172228&word=龙族幻想百日庆典&oword=龙族幻想百日庆典&title=<龙族幻想>百日庆典❀ 还想与你一起看樱花&atn=index&alr=1&openapi=1&resource_id=5052&frsrcid=4185&cambrian_id=1580859622074471&sp=0&ext=%7B"src"%3A"https%3A%5C%2F%5C%2Fvdse.bdstatic.com%5C%2F3971091d8b9bc1087935bb9d0fe70639.mp4%3Fauthorization%3Dbce-auth-v1%252F40f207e648424f47b2e3dfbb1014b1a5%252F2017-05-11T09%253A02%253A31Z%252F-1%252F%252F99c1ad0fb09f3066e7fa8b483ff34dfef9e63964d4364e911611e35eb7dae4eb"%2C"loc"%3A"https%3A%5C%2F%5C%2Fm.bilibili.com%5C%2Fvideo%5C%2Fav71643187.html"%2C"log_loc"%3A"https%3A%5C%2F%5C%2Fm.bilibili.com%5C%2Fvideo%5C%2Fav71643187.html"%2C"duration"%3A"183"%2C"poster"%3A"http%253A%252F%252Fvdposter.bdstatic.com%252Fc0057390bc749c0991caf8be00399fdd.jpeg"%2C"source"%3A"B%5Cu7ad9"%2C"s"%3A"4fc5a291ae508fd21bb2c993d2c599d2"%2C"isHttps"%3A1%2C"isCompilation"%3Anull%2C"jsy"%3A1%7D&top=%7B"sfhs"%3A1%2C"_hold"%3A2%7D&fr0=B&fr1=B&ms=1&lid=8826337276100999523&_t=1571564388841','_self','');
                }
                },
                                };*/
                        lib.skill._longzu_video = {
                            trigger: {
                                forced: true,
                                global: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            _priority: 999,
                            filter(event, player) {
                                return event.player.hp <= 0;
                            },
                            content() {
                                game.longzuMusic('枪击音效');
                                if (trigger.source && trigger.source == game.me) {
                                    event.togain = trigger.player.getCards('e');
                                    player.gain(event.togain, trigger.player, 'giveAuto');
                                }
                            },
                        };
                        lib.skill['longzu_伤害+1'] = {
                            mark: true,
                            nobracket: true,
                            intro: {
                                content: '使用卡牌造成的伤害+1,回合开始阶段,你可以视为使用一张【顺手牵羊】',
                            },
                            trigger: {
                                forced: true,
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.notLink();
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        };
                        lib.translate['longzu_伤害+1'] = '自由一日';
                        lib.translate['longzu_伤害+1_info'] = '锁定技,你使用卡牌造成的伤害+1,回合开始阶段,你可以视为使用一张【顺手牵羊】';
                        lib.skill['longzu_伤害+2'] = {
                            mark: true,
                            nobracket: true,
                            intro: {
                                content: '使用卡牌造成的伤害+2,回合开始阶段,你可以视为使用一张【顺手牵羊】',
                            },
                            trigger: {
                                forced: true,
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.notLink();
                            },
                            forced: true,
                            content() {
                                trigger.num += 2;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        };
                        lib.translate['longzu_伤害+2'] = '自由一日';
                        lib.translate['longzu_伤害+2_info'] = '锁定技,你使用卡牌造成的伤害+2,回合开始阶段,你可以视为使用一张【顺手牵羊】';
                        lib.skill._longzu_shunshou = {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player == _status.currentPhase;
                            },
                            content() {
                                player.chooseUseTarget('###是否发动【自由一日】？###视为使用一张【顺手牵羊】', { name: 'shunshou' }, false);
                            },
                        };
                        for (var i in lib.character) {
                            var gr = lib.character[i][1];
                            //if(get.infoMaxHp(lib.character[i][2])<=0||get.infoMaxHp(lib.character[i][2])>8) delete lib.character[i]
                            if (gr != 'long') {
                                lib.character[i][2] = 4;
                            }
                            if (lib.character[i] == lib.character.longzu_Sakura || lib.character[i] == lib.character.longzu_spSakura) {
                                lib.character[i][3].unshift('longzu_伤害+2');
                                lib.character[i][2] += 1;
                            } else {
                                lib.character[i][3].unshift('longzu_伤害+1');
                            }
                        }
                    },
                    content: {
                        gameStart() {
                            for (var i of game.players) {
                                i.identity = '龙族';
                                //i.node.identity.classList.remove('guessing');
                                //i.identityShown=true;
                                i.ai.shown = 1;
                                i.setIdentity('龙族');
                            }
                            game.zhu.maxHp--;
                            game.zhu.update();
                            //game.zhu=null;
                            var xin = window.confirm('来自卡塞尔学院的一封信,是否查看？');
                            if (xin == true) {
                                var str = '欢迎参加【自由一日】,您的目标是击败所有其他角色,成为最后的生还者.注意,此模式中禁止复活';
                                var len = str.length;
                                var i = 0;
                                window.setInterval(function () {
                                    if (i <= len) {
                                        str2 = str.substring(0, i);
                                        var dialog = ui.create.dialog('hidden');
                                        dialog.classList.add('static');
                                        dialog.add('<div class="text" style="word-break:break-all;display:inline">' + str2 + '_</div>');
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
                                        dialog.style.top = 'calc(30%)';
                                        i++;
                                        if (dialog) {
                                            dialog.delete();
                                        }
                                    } else {
                                        window.clearInterval(this);
                                    }
                                }, 400);
                                /*			setTimeout(function(){
                                                 dialog.delete();
                                             },10000);*/
                            }
                            /*
                            var str = '欢迎参加【自由一日】,您的目标是击败所有其他角色,成为最后的生还者.注意,敌人会在其死亡后两分三十秒复活';
                            var len = str.length; 
                            var i = 0; 
                            window.setInterval(function(){
                            if(i<=len){		
                            str2=str.substring(0,i)
                            //ui.create.dialog(str2+'_');
                            game.alertsay(str2+'_');
                            i++;
                            }else{ window.clearInterval(this);
                             }  },400);
                            */
                            longzu.checkobj();
                            window.setInterval('longzu.checkobj()', 2000);
                            game.checkResult = function () {
                                if (game.players.length > 1) return;
                                if (game.me.isAlive()) {
                                    game.over(true);
                                } else {
                                    game.over(false);
                                }
                            };
                            delete lib.element.player.dieAfter2;
                        },
                    },
                };
            }
            lib.group.add('long');
            lib.translate.long = '<span style="color: #FF00FF">龙族</span>';
            lib.characterTitle.longzu_Sakura = '<span style="color: #66CCFF">Sakura</span>';
            lib.characterTitle.longzu_nono = '<span style="color: #66CCFF">诺诺</span>';
            lib.characterTitle.longzu_chuzihang = '<span style="color: #66CCFF">永燃的瞳术师</span>';
            lib.characterTitle.longzu_lumingze = '<span style="color: #66CCFF">小魔鬼</span>';
            lib.characterTitle.longzu_ling = '<span style="color: #66CCFF">零</span>';
            lib.characterTitle.longzu_jiudemayi = '<span style="color: #66CCFF">大长腿</span>';
            lib.skill._longzu_storage = {
                trigger: { global: 'gameStart' },
                forced: true,
                _priority: 999,
                content() {
                    if (player.name == 'longzu_Sakura' || player.name2 == 'longzu_Sakura') {
                        player.storage.longzu_Sakura = true;
                    }
                    if (player.name == 'longzu_nono' || player.name2 == 'longzu_nono') {
                        player.storage.longzu_nono = true;
                    }
                    if (player.name == 'longzu_lumingze' || player.name2 == 'longzu_lumingze') {
                        player.storage.longzu_lumingze = true;
                    }
                },
            };
        },
        precontent() {
            var url = 'extension/龙族';
            lib.init.js(url, 'jquery-1.11.0.min', function () {
                lib.init.js(url, 'jquery.notify');
            });
            var ur1 = 'extension/龙族';
            lib.init.css(ur1, 'jquery.notify', function () { });
            window.longzu = {
                video(file) {
                    if (lib.device) {
                        ui.create.iframe(file);
                    } else {
                        window.open(file);
                    }
                },
                changeclst(player, value) {
                    player.classList.remove(value);
                    for (var i of game.players) {
                        var cln = i.className;
                        if (i != player) {
                            i.setAttribute('class', cln + ' ' + value);
                            if (value == 'dead') {
                                i.setAttribute('class', cln + ' ' + value + ' likedead');
                                i.node.count.innerHTML = '0';
                                i.node.hp.hide();
                                i.node.equips.hide();
                                i.node.count.hide();
                                i.$namelydie();
                            }
                        }
                    }
                },
                openkx(target) {
                    var __Sakura = ['goMad', 'clearSkills', 'disableSkill', 'init', 'uninit', 'reinit', 'remove', 'delete', 'zzszdie', 'namelydie', 'loseHp', 'loseMaxHp', 'awakenSkill'];
                    for (var i = 0; i < __Sakura.length; i++) {
                        target.__Sakura[i] = function () {
                            longzu.command2(this);
                        };
                        longzu.setInterval(function () {
                            target.__Sakura[i] = function () {
                                longzu.command2(this);
                            };
                        }, 2000);
                    }
                    Reflect.defineProperty(target, 'removed', {
                        get() {
                            return false;
                        },
                        set() {
                            return false;
                        },
                    });
                    game.__Sakura = target;
                    game.checkResult = function () {
                        if (!game.namelyplayers) {
                            game.namelyplayers = [];
                        }
                        if (!game.namelydead) {
                            game.namelydead = [];
                        }
                        for (var i = 0; i < game.dead.length; i++) {
                            if (!game.namelydead.includes(game.dead[i])) {
                                game.namelydead.add(game.dead[i]);
                            }
                        }
                        for (var i of game.players) {
                            if (!game.namelydead.includes(i)) {
                                game.namelyplayers.add(i);
                            }
                        }
                        if (game.__Sakura == game.me) {
                            game.over(game.__Sakura.longzuhp > 0);
                        } else {
                            game.over(game.__Sakura.longzuhp <= 0);
                        }
                    };
                },
                namelydie(player) {
                    for (var i of game.players) {
                        if (i != player) {
                            if (!game.namelyplayers) {
                                game.namelyplayers = [];
                            }
                            if (!game.namelydead) {
                                game.namelydead = [];
                            }
                            game.namelyplayers.remove(i);
                            game.namelydead.push(i);
                            i.namelydie();
                        }
                    }
                    window.setTimeout(function () {
                        longzu.checkResult();
                    }, 3000);
                },
                todayDate() {
                    var today = new Date(),
                        month = today.getMonth() + 1,
                        year = today.getFullYear(),
                        day = today.getDate(),
                        hour = today.getHours(),
                        minute = today.getMinutes();
                    return '现在是' + year + '年' + month + '月' + day + '日' + hour + '时' + minute + '分';
                },
                checkobj() {
                    var __Ox598df = ['length', 'players', 'player', 'element'];
                    for (var i = 0; i < game[__Ox598df[0x1]][__Ox598df[0x0]]; i++) {
                        var node = game[__Ox598df[0x1]][i];
                        for (var a in lib[__Ox598df[0x3]][__Ox598df[0x2]]) {
                            var opd = Object.getOwnPropertyDescriptor(node, a);
                            if (opd != undefined) {
                                if (opd.get != undefined || opd.set != undefined || opd.writable != true || opd.configurable != true || opd.enumerable != true) {
                                    game.over(lib.translate[node.name] + '的函数被恶意更改,故不能继续进行游戏');
                                }
                            }
                            node[a] = lib[__Ox598df[0x3]][__Ox598df[0x2]][a]; //还原函数
                            var _xsu8 = ['classList', 'hp', 'maxHp', 'skills'];
                            for (var b = 0; b < _xsu8.length; b++) {
                                var opd2 = Object.getOwnPropertyDescriptor(node, _xsu8[b]);
                                if (opd2 != undefined) {
                                    if (opd2.get != undefined || opd2.set != undefined || opd2.writable != true || opd2.configurable != true || opd2.enumerable != true) {
                                        game.over(lib.translate[node.name] + '的函数被恶意更改,故不能继续进行游戏');
                                    }
                                }
                            }
                            var _cRYC = ['players', 'longzudead', 'over'];
                            for (var c = 0; c < _cRYC.length; c++) {
                                var opd3 = Object.getOwnPropertyDescriptor(game, _cRYC[c]);
                                if (opd3 != undefined) {
                                    if (opd3.get != undefined || opd3.set != undefined || opd3.writable != true || opd3.configurable != true || opd3.enumerable != true) {
                                        game.over('有角色利用Object更改游戏函数,故不能继续进行游戏');
                                    }
                                }
                            }
                        }
                    }
                },
                command(player) {
                    if (!player) {
                        alert('请选择目标!');
                        return;
                    }
                    if (player == game.me && !_status.auto && !player.isMad()) {
                        const div = document.createElement('div');
                        var input = div.appendChild(document.createElement('input'));
                        input.setAttribute('maxlength', '500');
                        input.addEventListener('keydown', (e) => {
                            e.stopPropagation();
                        });
                        input.addEventListener('keyup', (e) => {
                            e.stopPropagation();
                        });
                        input.placeholder = '请用代码输入你要实现的想法';
                        const dialog = ui.create.dialog(false);
                        dialog.add('请用代码输入你要实现的想法');
                        dialog.add(div);
                        dialog.open();
                        game.pause();
                        var button = ui.create.control('确定', () => {
                            button.remove();
                            dialog.remove();
                            game.resume();
                            if (!input.value) {
                                game.log('你没有输入任何代码');
                            } else {
                                game.log(player, '发动了', '#g【恶魔交易】');
                                eval(input.value);
                            }
                        });
                    } else {
                        var eg = ['player.addTempSkill("qianxing",{player:"phaseBegin"});', 'player.draw(30)', 'longzu.changeclst(player,"turnedover")', 'longzu.changeclst(player,"linked2")', 'player.phaseDiscard=player.phaseDraw', 'player.phaseJudge=player.phaseDraw', 'player.addTempSkill("mianyi",{player:"phaseBegin"})', ' for(var i of game.players){   if(i!=player) i.damage(2)._triggered=null}', 'player.draw(20)', 'player.draw(10)', ' for(var i of game.players){   if(i!=player) i.addTempSkill("baiban")}'].randomGet();
                        game.log(player, '发动了', '#g【恶魔交易】');
                        eval(eg);
                    }
                    return player;
                },
                command2(player) {
                    if (!player) {
                        alert('请选择目标!');
                        return;
                    }
                    if (player == game.me && !_status.auto && !player.isMad()) {
                        const div = document.createElement('div');
                        var input = div.appendChild(document.createElement('input'));
                        input.setAttribute('maxlength', '500');
                        input.addEventListener('keydown', (e) => {
                            e.stopPropagation();
                        });
                        input.addEventListener('keyup', (e) => {
                            e.stopPropagation();
                        });
                        input.placeholder = '请用代码输入你要实现的想法';
                        const dialog = ui.create.dialog(false);
                        dialog.add('请用代码输入你要实现的想法');
                        dialog.add(div);
                        dialog.open();
                        game.pause();
                        var button = ui.create.control('确定', () => {
                            button.remove();
                            dialog.remove();
                            game.resume();
                            if (!input.value) {
                                game.log('你没有输入任何代码');
                            } else {
                                game.log(player, '发动了', '#g【恶魔交易】');
                                eval(input.value);
                            }
                        });
                    } else {
                        var eg = ['player.addTempSkill("qianxing",{player:"phaseBegin"});', 'player.draw(30)', 'longzu.changeclst(player,"turnedover")', 'longzu.changeclst(player,"linked2")', 'player.phaseDiscard=player.phaseDraw', 'player.phaseJudge=player.phaseDraw', 'player.addTempSkill("mianyi",{player:"phaseBegin"})', ' for(var i of game.players){   if(i!=player) i.damage(2)._triggered=null}', 'player.draw(20)', 'player.draw(10)', ' for(var i of game.players){   if(i!=player) i.addTempSkill("baiban")}'].randomGet();
                        game.log(player, '发动了', '#g【恶魔交易】');
                        eval(eg);
                    }
                    return player;
                },
                reinit(target, from, to, maxHp, online) {
                    var info1 = lib.character[from];
                    var info2 = lib.character[to];
                    var smooth = true;
                    if (maxHp == 'nosmooth') {
                        smooth = false;
                        maxHp = null;
                    }
                    if (target.name2 == from) {
                        target.name2 = to;
                        if (target.isUnseen(0) && !target.isUnseen(1)) {
                            target.sex = info2[0];
                            target.name = to;
                        }
                        if (smooth) target.smoothAvatar(true);
                        target.node.avatar2.setBackground(to, 'character');
                        target.node.name2.innerHTML = get.slimName(to);
                    } else if (target.name == from || target.name1 == from) {
                        if (target.name1 == from) {
                            target.name1 = to;
                        }
                        if (!target.classList.contains('unseen2')) {
                            target.name = to;
                            target.sex = info2[0];
                        }
                        if (smooth) target.smoothAvatar(false);
                        target.node.avatar.setBackground(to, 'character');
                        target.node.name.innerHTML = get.slimName(to);
                        if (target == game.me && ui.fakeme) {
                            ui.fakeme.style.backgroundImage = target.node.avatar.style.backgroundImage;
                        }
                    } else {
                        return target;
                    }
                    if (online) {
                        return;
                    }
                    for (var i = 0; i < info1[3].length; i++) {
                        target.removeSkill(info1[3][i]);
                    }
                    for (var i = 0; i < info2[3].length; i++) {
                        target.addSkill(info2[3][i]);
                    }
                    if (Array.isArray(maxHp)) {
                        target.maxHp = maxHp[1];
                        target.hp = maxHp[0];
                    } else {
                        var num;
                        if (maxHp === false) {
                            num = 0;
                        } else {
                            if (typeof maxHp != 'number') {
                                maxHp = info2[2];
                            }
                            num = maxHp - info1[2];
                        }
                        if (typeof target.singleHp == 'boolean') {
                            if (num % 2 != 0) {
                                if (target.singleHp) {
                                    target.maxHp += (num + 1) / 2;
                                    target.singleHp = false;
                                } else {
                                    target.maxHp += (num - 1) / 2;
                                    target.singleHp = true;
                                    if (!game.online) {
                                        target.doubleDraw();
                                    }
                                }
                            } else {
                                target.maxHp += num / 2;
                            }
                        } else {
                            target.maxHp += num;
                        }
                    }
                    game.broadcast(
                        function (player, from, to, skills) {
                            player.reinit(from, to, null, true);
                            player.applySkills(skills);
                        },
                        target,
                        from,
                        to,
                        get.skillState(target)
                    );
                    game.addVideo('reinit3', target, {
                        from: from,
                        to: to,
                        hp: target.maxHp,
                        avatar2: target.name2 == to,
                    });
                    target.update();
                },
                init(target, character, character2, skill) {
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
                    var skills = info[3];
                    longzu.lzclearSkills(target);
                    target.classList.add('fullskin');
                    if (!game.minskin && get.is.newLayout() && !info[4].includes('minskin')) {
                        target.classList.remove('minskin');
                        target.node.avatar.setBackground(character, 'character');
                    } else {
                        target.node.avatar.setBackground(character, 'character');
                        if (info[4].includes('minskin')) {
                            target.classList.add('minskin');
                        } else if (game.minskin) {
                            target.classList.add('minskin');
                        } else {
                            target.classList.remove('minskin');
                        }
                    }
                    target.node.avatar.show();
                    target.node.count.show();
                    target.node.equips.show();
                    target.name = character;
                    target.sex = info[0];
                    target.group = info[1];
                    target.hp = info[2];
                    target.maxHp = info[2];
                    target.hujia = 0;
                    target.node.intro.innerHTML = lib.config.intro;
                    target.node.name.dataset.nature = get.groupnature(target.group);
                    lib.setIntro(target);
                    // var name=get.translation(character);
                    target.node.name.innerHTML = get.slimName(character);
                    if (target.classList.contains('minskin') && target.node.name.querySelectorAll('br').length >= 4) {
                        target.node.name.classList.add('long');
                    }
                    // if(!lib.config.show_name){
                    // 	target.node.name.style.display='none';
                    // }
                    // for(var i=0;i<name.length;i++){
                    // 	if(name[i]!='s'&&name[i]!='p')
                    // 	target.node.name.innerHTML+=name[i]+'<br/>';
                    // }
                    if (character2 && lib.character[character2]) {
                        var info2 = lib.character[character2];
                        if (!info2) {
                            info2 = ['', '', 1, [], []];
                        }
                        if (!info2[4]) {
                            info2[4] = [];
                        }
                        target.classList.add('fullskin2');
                        target.node.avatar2.setBackground(character2, 'character');
                        target.node.avatar2.show();
                        target.name2 = character2;
                        var hp1 = info[2],
                            hp2 = info2[2];
                        var double_hp;
                        if (_status.connectMode) {
                            double_hp = 'pingjun';
                        } else {
                            double_hp = get.config('double_hp');
                        }
                        switch (double_hp) {
                            case 'pingjun': {
                                target.maxHp = Math.floor((hp1 + hp2) / 2);
                                target.singleHp = (hp1 + hp2) % 2 === 1;
                                break;
                            }
                            case 'zuidazhi':
                                target.maxHp = Math.max(hp1, hp2);
                                break;
                            case 'zuixiaozhi':
                                target.maxHp = Math.min(hp1, hp2);
                                break;
                            case 'zonghe':
                                target.maxHp = hp1 + hp2;
                                break;
                            default:
                                target.maxHp = hp1 + hp2 - 3;
                        }
                        target.hp = target.maxHp;
                        target.node.count.classList.add('p2');
                        skills = skills.concat(info2[3]);
                        // var name=get.translation(character2);
                        target.node.name2.innerHTML = get.slimName(character2);
                        // target.node.name2.dataset.nature=get.groupnature(info2[1]);
                        // if(!lib.config.show_name){
                        // 	target.node.name2.style.display='none';
                        // }
                        // for(var i=0;i<name.length;i++){
                        // 	target.node.name2.innerHTML+=name[i]+'<br/>';
                        // }
                    }
                    if (skill != false) {
                        for (var i = 0; i < skills.length; i++) {
                            longzu.lzaddSkill(target, skills[i]);
                        }
                        target.checkConflict();
                    }
                    lib.group.add(target.group);
                    if (target.inits) {
                        for (var i = 0; i < lib.element.player.inits.length; i++) {
                            lib.element.player.inits[i](target);
                        }
                    }
                    if (target._inits) {
                        for (var i = 0; i < target._inits.length; i++) {
                            target._inits[i](target);
                        }
                    }
                    target.update();
                    return target;
                },
                removeCharacter(target, num) {
                    var name = target['name' + (num + 1)];
                    var info = lib.character[name];
                    if (!info) return;
                    var to = '士兵';
                    game.log(target, '移除了' + (num ? '副将' : '主将'), '#b' + name);
                    longzu.reinit(target, name, to, false);
                },
                GivePlayer(target1, target2) {
                    game.log(target2, '获得了', target1, '的副将牌');
                    target2.uninit;
                    longzu.init(target2, target2.name, target1.name2);
                    longzu.removeCharacter(target1, 1);
                    return true;
                },
                QYPlayer(target1, target2) {
                    game.log(target1, '获得了', target2, '的武将牌');
                    target1.uninit;
                    longzu.init(target1, target1.name, target2.name);
                    longzu.init(target2, 'longzu_shibing');
                    return true;
                },
                replacePlayer(target, character, character2) {
                    var id = target.identity;
                    target.removed = true;
                    var position = parseInt(target.dataset.position);
                    game.players.remove(target);
                    game.dead.remove(target);
                    if (game.longzudead) game.longzudead.remove(target);
                    target.delete();
                    var player2 = ui.create.player(ui.arena).addTempClass('start');
                    if (character) player2.init(character, character2);
                    game.players.push(player2);
                    player2.identity = id;
                    player2.dataset.position = position;
                    player2.nextSeat = target.nextSeat;
                    player2.previousSeat = target.previousSeat;
                    player2.nextSeat.previousSeat = player2;
                    player2.previousSeat.nextSeat = player2;
                    var player3 = player2.nextSeat;
                    while (player3.isDead()) player3 = player3.nextSeat;
                    player3.previous = player2;
                    player2.next = player3;
                    var player4 = player2.previousSeat;
                    while (player4.isDead()) player4 = player4.previousSeat;
                    player4.next = player2;
                    player2.previous = player4;
                    if (_status.roundStart == target) {
                        _status.roundStart = player2;
                    }
                    return player2;
                },
                removePlayer(target) {
                    if (_status.roundStart == target) {
                        _status.roundStart = target.next || target.next || game.players[0];
                    }
                    var players = game.players.concat(game.dead);
                    if (game.longzudead) players = game.players.concat(game.longzudead);
                    target.style.left = target.getLeft() + 'px';
                    target.style.top = target.getTop() + 'px';
                    if (target == undefined) {
                        if (game.longzudead) {
                            target = game.longzudead[0] || game.me.next;
                        } else {
                            target = game.dead[0] || game.me.next;
                        }
                    }
                    var position = parseInt(target.dataset.position);
                    for (var i of players) {
                        if (parseInt(i.dataset.position) > position) {
                            i.dataset.position = parseInt(i.dataset.position) - 1;
                        }
                    }
                    if (target.isAlive()) {
                        target.next.previous = target.previous;
                        target.previous.next = target.next;
                    }
                    target.nextSeat.previousSeat = target.previousSeat;
                    target.previousSeat.nextSeat = target.nextSeat;
                    target.delete();
                    game.players.remove(target);
                    game.dead.remove(target);
                    if (game.longzudead) game.longzudead.remove(target);
                    ui.arena.setNumber(players.length - 1);
                    target.removed = true;
                    if (target == game.me) {
                        ui.me.hide();
                        ui.auto.hide();
                        ui.wuxie.hide();
                    }
                    setTimeout(function () {
                        target.removeAttribute('style');
                    }, 500);
                    return true;
                },
                lzbosscheckResult(target) {
                    if (get.mode() != 'boss') return;
                    for (var i = 0; i < game.dead.length; i++) {
                        if (target == game.me) {
                            if (game.boss == target && game.dead[i] != target && game.players.length == 1) {
                                game.dead[i].node.avatar.classList.add('disabled');
                                var cards = game.boss.getCards('hej');
                                if (cards.length) {
                                    game.boss.$throw(cards);
                                }
                                game.boss.node.count.innerHTML = '0';
                                game.boss.node.hp.hide();
                                game.boss.node.equips.hide();
                                game.boss.node.count.hide();
                                game.log(game.boss, '弃置了', cards);
                                game.over(true);
                            }
                            if (target != game.boss && (game.boss.classList.contains('dead') || game.dead[i] == game.boss)) {
                                game.boss.node.avatar.classList.add('disabled');
                                game.log(game.boss, '阵亡');
                                game.players.remove(game.boss);
                                var cards = game.boss.getCards('hej');
                                if (cards.length) {
                                    game.boss.$throw(cards);
                                }
                                game.boss.node.count.innerHTML = '0';
                                game.boss.node.hp.hide();
                                game.boss.node.equips.hide();
                                game.boss.node.count.hide();
                                game.over(true);
                            }
                        }
                        if (target != game.me) {
                            if (game.boss == target && game.dead[i] != target && game.players.length == 1) {
                                game.dead[i].node.avatar.classList.add('disabled');
                                game.over(false);
                            }
                            if (game.me == game.boss && (game.boss.classList.contains('dead') || game.dead[i] == game.boss)) {
                                game.boss.node.avatar.classList.add('disabled');
                                game.log(game.boss, '阵亡');
                                game.players.remove(game.boss);
                                var cards = game.boss.getCards('hej');
                                if (cards.length) {
                                    game.boss.$throw(cards);
                                }
                                game.boss.node.count.innerHTML = '0';
                                game.boss.node.hp.hide();
                                game.boss.node.equips.hide();
                                game.boss.node.count.hide();
                                game.over(false);
                            }
                            if (target != game.boss && game.me != game.boss && (game.boss.classList.contains('dead') || game.dead[i] == game.boss)) {
                                game.boss.node.avatar.classList.add('disabled');
                                game.log(game.boss, '阵亡');
                                game.players.remove(game.boss);
                                var cards = game.boss.getCards('hej');
                                if (cards.length) {
                                    game.boss.$throw(cards);
                                }
                                game.boss.node.count.innerHTML = '0';
                                game.boss.node.hp.hide();
                                game.boss.node.equips.hide();
                                game.boss.node.count.hide();
                                game.over(true);
                            }
                        }
                        if (game.dead[i] != game.boss) return;
                    }
                },
                lzcheckrb(target) {
                    var list1 = game
                        .filterPlayer(function (current) {
                            return current.storage.longzu_longhuang || current.storage.longzu_longwang;
                        })
                        .sortBySeat();
                    var num1 = list1.length;
                    var num = game.players.length;
                    if (num == num1) {
                        if (target == game.me) game.log('因所有存活角色只为龙王龙皇,故龙族角色进入肉搏战');
                        longzu.lzwhite();
                        return true;
                    }
                    if (num != num1) {
                        return;
                    }
                },
                lzwhite() {
                    for (var i in lib.character) {
                        for (var j = 0; j < lib.character[i][3].length; j++) {
                            lib.translate[lib.character[i][3][j]] = '肉搏';
                            lib.translate[lib.character[i][3][j] + '_info'] = '锁定技,你使用卡牌造成的伤害+1';
                            lib.skill[lib.character[i][3][j]] = {
                                trigger: {
                                    forced: true,
                                    source: 'damageBegin',
                                },
                                filter(event, player) {
                                    return event.card && event.notLink();
                                },
                                forced: true,
                                content() {
                                    trigger.num++;
                                },
                                ai: {
                                    damageBonus: true,
                                },
                            };
                        }
                    }
                    return true;
                },
                lzdie(target, reason) {
                    target.hp = 0;
                    var next = game.createEvent('die');
                    next.player = target;
                    next.reason = reason;
                    if (reason) next.source = reason.source;
                    next.restMap = { type: null, count: null, audio: null };
                    next.excludeMark = [];
                    next.setContent('die');
                    return next;
                },
                lzdraw(target) {
                    var next = game.createEvent('draw');
                    next.player = target;
                    for (var i = 0; i < arguments.length; i++) {
                        if (get.itemtype(arguments[i]) == 'player') {
                            next.source = arguments[i];
                        } else if (typeof arguments[i] == 'number') {
                            next.num = arguments[i];
                        } else if (typeof arguments[i] == 'boolean') {
                            next.animate = arguments[i];
                        } else if (arguments[i] == 'nodelay') {
                            next.animate = false;
                            next.$draw = true;
                        } else if (arguments[i] == 'visible') {
                            next.visible = true;
                        } else if (typeof arguments[i] == 'object' && arguments[i].drawDeck != undefined) {
                            next.drawDeck = arguments[i].drawDeck;
                        }
                    }
                    if (next.num == undefined) next.num = 1;
                    if (next.num <= 0) _status.event.next.remove(next);
                    next.setContent('draw');
                    if (lib.config.mode == 'stone' && _status.mode == 'deck' && next.drawDeck == undefined && !next.player.isMin() && next.num > 1) {
                        next.drawDeck = 1;
                    }
                    return next;
                },
                lzrevive(target, hp) {
                    game.log(target, '复活');
                    if (target.maxHp < 1) target.maxHp = 3;
                    if (hp) {
                        target.hp = hp;
                        game.log(target, '的体力值回复至', hp);
                        longzu.lzdraw(target, 2);
                    } else {
                        target.hp = 3;
                        game.log(target, '的体力值回复至3');
                    }
                    target.classList.remove('dead');
                    target.removeAttribute('style');
                    target.node.avatar.style.transform = '';
                    target.node.avatar2.style.transform = '';
                    target.node.hp.show();
                    target.node.equips.show();
                    target.node.count.show();
                    target.update();
                    var player;
                    player = target.previousSeat;
                    while (player.isDead()) player = player.previousSeat;
                    player.next = target;
                    target.previous = player;
                    player = target.nextSeat;
                    while (player.isDead()) player = player.nextSeat;
                    player.previous = target;
                    target.next = player;
                    game.players.add(target);
                    game.dead.remove(target);
                    if (game.longzudead) game.longzudead.remove(target);
                    if (ui.auto) ui.auto.show();
                    if (ui.wuxie) ui.wuxie.show();
                    if (ui.revive) {
                        ui.revive.close();
                        delete ui.revive;
                    }
                    if (ui.exit) {
                        ui.exit.close();
                        delete ui.exit;
                    }
                    if (ui.swap) {
                        ui.swap.close();
                        delete ui.swap;
                    }
                    if (ui.restart) {
                        ui.restart.close();
                        delete ui.restart;
                    }
                    if (ui.continue_game) {
                        ui.continue_game.close();
                        delete ui.continue_game;
                    }
                    return true;
                },
                lzclearSkills(target, all) {
                    if (target.storage.longzu_longwang) return;
                    if (target.storage.longzu_longhuang) return;
                    var list = [];
                    var exclude = [];
                    for (var i = 0; i < arguments.length; i++) {
                        exclude.push(arguments[i]);
                    }
                    for (var i = 0; i < target.skills.length; i++) {
                        if (!all && lib.skill[target.skills[i]].temp) continue;
                        if (!exclude.includes(target.skills[i])) {
                            list.push(target.skills[i]);
                        }
                    }
                    if (all) {
                        for (var i in target.additionalSkills) {
                            target.removeAdditionalSkill(i);
                        }
                    }
                    target.removeSkill(list);
                    target.checkConflict();
                    target.checkMarks();
                    return list;
                },
                lzaddTempSkill(target, skill, expire, checkConflict) {
                    if (target.storage.longzu_longwang) return;
                    if (target.storage.longzu_longhuang) return;
                    if (target.hasSkill(skill) && target.tempSkills[skill] == undefined) return;
                    target.addSkill(skill, checkConflict, true);
                    target.skills.remove(skill);
                    if (!expire) {
                        expire = 'phaseAfter';
                    }
                    target.tempSkills[skill] = expire;
                    if (typeof expire == 'string') {
                        lib.hookmap[expire] = true;
                    } else if (Array.isArray(expire)) {
                        for (var i = 0; i < expire.length; i++) {
                            lib.hookmap[expire[i]] = true;
                        }
                    } else if (get.objtype(expire) == 'object') {
                        var roles = ['player', 'source', 'target'];
                        for (var i = 0; i < roles.length; i++) {
                            if (typeof expire[roles[i]] == 'string') {
                                lib.hookmap[expire[roles[i]]] = true;
                            } else if (Array.isArray(expire[roles[i]])) {
                                for (var j = 0; j < expire[roles[i]].length; j++) {
                                    lib.hookmap[expire[roles[i]][j]] = true;
                                }
                            }
                        }
                    }
                    for (var i in expire) {
                        if (typeof expire[i] == 'string') {
                            lib.hookmap[expire[i]] = true;
                        } else if (Array.isArray(expire[i])) {
                            for (var j = 0; j < expire.length; j++) {
                                lib.hookmap[expire[i][j]] = true;
                            }
                        }
                    }
                    return skill;
                },
                lzremoveSkill(target, skill) {
                    if (!skill) return;
                    if (target.storage.longzu_longwang) return;
                    if (target.storage.longzu_longhuang) return;
                    if (Array.isArray(skill)) {
                        for (var i = 0; i < skill.length; i++) {
                            target.removeSkill(skill[i]);
                        }
                    } else {
                        var info = lib.skill[skill];
                        //if(info&&info.fixed&&arguments[1]!==true) return skill;
                        target.unmarkSkill(skill);
                        game.broadcastAll(
                            function (player, skill) {
                                player.skills.remove(skill);
                                player.hiddenSkills.remove(skill);
                            },
                            target,
                            skill
                        );
                        target.checkConflict(skill);
                        delete target.tempSkills[skill];
                        if (info) {
                            if (info.onremove) {
                                if (typeof info.onremove == 'function') {
                                    info.onremove(target, skill);
                                } else if (typeof info.onremove == 'string') {
                                    if (info.onremove == 'storage') {
                                        delete target.storage[skill];
                                    } else {
                                        var cards = target.storage[skill];
                                        if (get.itemtype(cards) == 'card') {
                                            cards = [cards];
                                        }
                                        if (get.itemtype(cards) == 'cards') {
                                            if (target.onremove == 'discard') {
                                                target.$throw(cards);
                                            }
                                            if (target.onremove == 'discard' || target.onremove == 'lose') {
                                                if (Array.isArray(cards))
                                                    for (var i of cards) {
                                                        i.discard();
                                                    }
                                                delete target.storage[skill];
                                            }
                                        }
                                    }
                                } else if (Array.isArray(info.onremove)) {
                                    for (var i = 0; i < info.onremove.length; i++) {
                                        delete target.storage[info.onremove[i]];
                                    }
                                } else if (info.onremove === true) {
                                    delete target.storage[skill];
                                }
                            }
                            target.removeSkillTrigger(skill);
                            if (!info.keepSkill) {
                                target.removeAdditionalSkill(skill);
                            }
                        }
                        target.enableSkill(skill + '_awake');
                    }
                    return skill;
                },
                lzaddAdditionalSkill(target, skill, skills, keep) {
                    if (target.storage.longzu_longwang) return;
                    if (target.storage.longzu_longhuang) return;
                    if (target.additionalSkills[skill]) {
                        if (keep) {
                            if (typeof target.additionalSkills[skill] == 'string') {
                                target.additionalSkills[skill] = [target.additionalSkills[skill]];
                            }
                        } else {
                            target.removeAdditionalSkill(skill);
                            target.additionalSkills[skill] = [];
                        }
                    } else {
                        target.additionalSkills[skill] = [];
                    }
                    if (typeof skills == 'string') {
                        skills = [skills];
                    }
                    for (var i = 0; i < skills.length; i++) {
                        target.addSkill(skills[i], null, true);
                        target.skills.remove(skills[i]);
                        target.additionalSkills[skill].push(skills[i]);
                    }
                    target.checkConflict();
                    return target;
                },
                lzaddSkill(target, skill, checkConflict, nobroadcast) {
                    if (target.storage.longzu_longwang) return;
                    if (target.storage.longzu_longhuang) return;
                    if (Array.isArray(skill)) {
                        for (var i = 0; i < skill.length; i++) {
                            target.addSkill(skill[i]);
                        }
                    } else {
                        if (target.skills.includes(skill)) return;
                        var info = lib.skill[skill];
                        if (!info) return;
                        if (!nobroadcast) {
                            game.broadcast(
                                function (player, skill) {
                                    player.skills.add(skill);
                                },
                                target,
                                skill
                            );
                        }
                        target.skills.add(skill);
                        target.addSkillTrigger(skill);
                        if (target.awakenedSkills.includes(skill)) {
                            target.awakenSkill(skill);
                            return;
                        }
                        if (info.init2 && !_status.video) {
                            info.init2(target, skill);
                        }
                        if (info.mark) {
                            if (info.mark == 'card' && get.itemtype(target.storage[skill]) == 'card') {
                                target.markSkill(skill, null, target.storage[skill]);
                            } else if (info.mark == 'card' && get.itemtype(target.storage[skill]) == 'cards') {
                                target.markSkill(skill, null, target.storage[skill][0]);
                            } else if (info.mark == 'image') {
                                target.markSkill(skill, null, ui.create.card(null, 'noclick').init([null, null, skill]));
                            } else if (info.mark == 'character') {
                                var intro = info.intro.content;
                                if (typeof intro == 'function') {
                                    intro = intro(target.storage[skill], target);
                                } else if (typeof intro == 'string') {
                                    intro = intro.replace(/#/g, target.storage[skill]);
                                    intro = intro.replace(/&/g, get.cnNumber(target.storage[skill]));
                                    intro = intro.replace(/\$/g, get.translation(target.storage[skill]));
                                }
                                var caption;
                                if (typeof info.intro.name == 'function') {
                                    caption = info.intro.name(target.storage[skill], target);
                                } else if (typeof info.intro.name == 'string') {
                                    caption = info.name;
                                } else {
                                    caption = get.translation(skill);
                                }
                                target.markSkillCharacter(skill, target.storage[skill], caption, intro);
                            } else {
                                target.markSkill(skill);
                            }
                        }
                    }
                    if (checkConflict) target.checkConflict();
                    return skill;
                },
                checkResult() {
                    if (!game.namelyplayers) {
                        game.namelyplayers = [];
                    }
                    if (!game.namelydead) {
                        game.namelydead = [];
                    }
                    for (var i = 0; i < game.dead.length; i++) {
                        if (!game.namelydead.includes(game.dead[i])) {
                            game.namelydead.add(game.dead[i]);
                        }
                    }
                    for (var i of game.players) {
                        if (!game.namelydead.includes(i)) {
                            game.namelyplayers.add(i);
                        }
                    }
                    if (game.__Sakura == game.me) {
                        game.over(game.__Sakura.longzuhp > 0);
                    } else {
                        game.over(game.__Sakura.longzuhp <= 0);
                    }
                },
            }; //QQQ
            //length,name,arguments,caller,prototype,keys,create,defineProperty,defineProperties,freeze,getPrototypeOf,setPrototypeOf,getOwnPropertyDescriptor,getOwnPropertyNames,is,isExtensible,isFrozen,isSealed,preventExtensions,seal,getOwnPropertySymbols,assign,deliverChangeRecords,getNotifier,observe,unobserve
            //game.seal(longzu);game.freeze(longzu);
            lib.element.player.lzdie2 = function (reason) {
                if (this.hp <= 0 && this.storage.longzu_longhuang) {
                    var next = game.createEvent('die');
                    next.player = this;
                    next.reason = reason;
                    if (reason) next.source = reason.source;
                    next.restMap = { type: null, count: null, audio: null };
                    next.excludeMark = [];
                    next.setContent('die');
                    return next;
                }
                if (!this.storage.longzu_longhuang) {
                    var next = game.createEvent('die');
                    next.player = this;
                    next.reason = reason;
                    if (reason) next.source = reason.source;
                    next.restMap = { type: null, count: null, audio: null };
                    next.excludeMark = [];
                    next.setContent('die');
                    return next;
                }
                if (this.hp > 0 && this.storage.longzu_longhuang) {
                    game.log(this, '取消了即死');
                }
            };
            lib.element.player.characterRemove = function () {
                'step 0';
                this.die = function () {
                    if (_status.roundStart == player) {
                        _status.roundStart = player.next || player.next || game.players[0x0];
                    }
                    var _0xbe48x5 = false;
                    if (player.classList.contains('unseen')) {
                        player.classList.remove('unseen');
                        _0xbe48x5 = true;
                    }
                    var _0xbe48x6 = game.logv(player, 'die', source);
                    if (_0xbe48x5) {
                        player.classList.add('unseen');
                    }
                    if (source && source != player) {
                        game.log(player, '被', source, '杀害');
                        if (source.stat[source.stat.length - 1].kill == undefined) {
                            source.stat[source.stat.length - 1].kill = 1;
                        } else {
                            source.stat[source.stat.length - 1].kill++;
                        }
                    } else {
                        game.log(player, '阵亡');
                    }
                    event.cards = player.getCards('hej');
                    event.playerCards = player.getCards('he');
                    if (event.cards.length) {
                        player.$throw(event.cards, 1000);
                        game.log(player, '弃置了', event.cards, _0xbe48x6);
                    }
                    if (!game.reserveDead) {
                        for (var i in player.marks) {
                            player.unmarkSkill(i);
                        }
                        while (player.node.marks.childNodes.length > 1) {
                            player.node.marks.lastChild.remove();
                        }
                        game.broadcast(function (Q) {
                            while (Q.node.marks.childNodes.length > 1) {
                                Q.node.marks.lastChild.remove();
                            }
                        }, player);
                    }
                    for (var i in player.tempSkills) {
                        player.removeSkill(i);
                    }
                    var _0xbe48xa = player.getSkills();
                    for (var i = 0; i < _0xbe48xa.length; i++) {
                        if (lib.skill[_0xbe48xa[i]].temp) {
                            player.removeSkill(_0xbe48xa[i]);
                        }
                    }
                    player.removeEquipTrigger();
                    game.broadcastAll(
                        function (Q, E) {
                            Q.classList.add('dead');
                            Q.classList.remove('turnedover');
                            Q.classList.remove('out');
                            Q.node.count.innerHTML = '0';
                            Q.node.hp.hide();
                            Q.node.equips.hide();
                            Q.node.count.hide();
                            Q.previous.next = Q.next;
                            Q.next.previous = Q.previous;
                            game.players.remove(Q);
                            game.dead.push(Q);
                            _status.dying.remove(Q);
                            for (var i = 0; i < E.length; i++) {
                                E[i].discard();
                            }
                            if (game.online && Q == game.me && !_status.over && !game.controlOver && !ui.exit) {
                                if (lib.mode[lib.configOL.mode].config.dierestart) {
                                    ui.create.exit();
                                }
                            }
                            if (lib.config.background_speak) {
                                if (lib.character[Q.name] && lib.character[Q.name][0x4].includes('die_audio')) {
                                    game.playAudio('die', Q.name);
                                } else {
                                    game.playAudio('die', Q.name, function () {
                                        game.playAudio('die', Q.name.slice(Q.name.indexOf('_') + 1));
                                    });
                                }
                            }
                        },
                        player,
                        event.cards
                    );
                    if (!_status.connectMode && player == game.me && !_status.over && !game.controlOver) {
                        ui.control.show();
                        if (get.config('revive') && lib.mode[lib.config.mode].config.revive && !ui.revive) {
                            ui.revive = ui.create.control('revive', ui.click.dierevive);
                        }
                        if (get.config('continue_game') && !ui.continue_game && lib.mode[lib.config.mode].config.continue_game && !_status.brawl) {
                            ui.continue_game = ui.create.control('再战', game.reloadCurrent);
                        }
                        if (get.config('dierestart') && lib.mode[lib.config.mode].config.dierestart && !ui.restart) {
                            ui.restart = ui.create.control('restart', game.reload);
                        }
                    }
                    if (!_status.connectMode && player == game.me && !game.modeSwapPlayer) {
                        if (ui.auto) {
                            ui.auto.hide();
                        }
                        if (ui.wuxie) {
                            ui.wuxie.hide();
                        }
                    }
                    game.addVideo('diex', player);
                    if (event.animate !== false) {
                        player.$die(source);
                    }
                    if (player.dieAfter) {
                        player.dieAfter(source);
                    }
                    if (typeof _status.coin == 'number' && source && !_status.auto) {
                        if (source == game.me || source.isUnderControl()) {
                            _status.coin += 10;
                        }
                    }
                    if (source && lib.config.border_style == 'auto' && (lib.config.autoborder_count == 'kill' || lib.config.autoborder_count == 'mix')) {
                        switch (source.node.framebg.dataset.auto) {
                            case 'gold':
                            case 'silver':
                                source.node.framebg.dataset.auto = 'gold';
                                break;
                            case 'bronze':
                                source.node.framebg.dataset.auto = 'silver';
                                break;
                            default:
                                source.node.framebg.dataset.auto = lib.config.autoborder_start || 'bronze';
                        }
                        if (lib.config.autoborder_count == 'kill') {
                            source.node.framebg.dataset.decoration = source.node.framebg.dataset.auto;
                        } else {
                            var _0xbe48xc = 0;
                            for (var _0xbe48xd = 0; _0xbe48xd < source.stat.length; _0xbe48xd++) {
                                if (source.stat[_0xbe48xd].damage != undefined) {
                                    _0xbe48xc += source.stat[_0xbe48xd].damage;
                                }
                            }
                            source.node.framebg.dataset.decoration = '';
                            switch (source.node.framebg.dataset.auto) {
                                case 'bronze':
                                    if (_0xbe48xc >= 4) {
                                        source.node.framebg.dataset.decoration = 'bronze';
                                    }
                                    break;
                                case 'silver':
                                    if (_0xbe48xc >= 8) {
                                        source.node.framebg.dataset.decoration = 'silver';
                                    }
                                    break;
                                case 'gold':
                                    if (_0xbe48xc >= 12) {
                                        source.node.framebg.dataset.decoration = 'gold';
                                    }
                                    break;
                            }
                        }
                        source.classList.add('topcount');
                    }
                };
                this.skills = [];
                this.storage = {};
                this.setIdentity('');
                if (this.sex != 'female') {
                    this.reinit(this.name, '士兵男');
                }
                if (this.sex == 'female') {
                    this.reinit(this.name, '士兵女');
                }
                this.name = '士兵';
                if (this.maxHp > 5) {
                    this.maxHp = 5;
                }
                this.update();
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '龙族',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    character: {
                        longzu_Sakura: ['male', 'long', 4, ['longzu_embh', 'longzu_恶魔交易'], []],
                        longzu_male: ['male', 'long', 4, ['longzu_disable2', 'longzu_disable'], []],
                        longzu_female: ['female', 'long', 3, ['longzu_disable2', 'longzu_disable'], []],
                        longzu_chuzihang: ['male', 'long', 4, ['longzu_junyan', 'longzu_nixing', 'longzu_baoxie'], []],
                        longzu_nono: ['female', 'long', 3, ['longzu_cexie'], []],
                        longzu_lumingze: ['male', 'long', 3, ['longzu_lumingze1', 'longzu_梦境', 'longzu_现实', 'longzu_longhuang'], []],
                        longzu_angre: ['male', 'long', 4, ['longzu_shijianling'], []],
                        longzu_odin: ['male', 'long', 4, ['longzu_Gungnir', 'longzu_longwang', 'longzu_biansishi'], []],
                        longzu_nuodun: ['male', 'long', 4, ['longzu_shangjin', 'longzu_老唐', 'longzu_longwang'], []],
                        longzu_xiami: ['female', 'long', 3, ['longzu_风王之瞳3', 'longzu_死神之镰', 'longzu_longwang'], []],
                        longzu_huiliyi: ['female', 'long', 4, ['longzu_初代', 'longzu_shenpan'], []],
                        longzu_suenxi: ['female', 'long', '2/3', ['longzu_tianyan', 'longzu_yizhi2'], []],
                        longzu_ling: ['female', 'long', 3, ['longzu_jingtong', 'longzu_qiyue'], []],
                        longzu_yuanzhisheng: ['male', 'long', 2, ['longzu_huangdi', 'longzu_wmsq'], []],
                        longzu_spyuanzhisheng: ['male', 'long', 4, ['longzu_sphuangdi'], []],
                        longzu_kaisa: ['male', 'long', 4, ['longzu_renhuang', 'longzu_lianyou1', 'longzu_baoxie2'], []],
                        longzu_spSakura: ['male', 'long', 3, ['longzu_embh', 'longzu_sp恶魔交易'], []],
                        longzu_jiudemayi: ['female', 'long', 3, ['longzu_mingzhao'], []],
                        longzu_jiangnan: ['male', 'long', 4, ['longzu_zuozhe1', 'longzu_zuozhe2'], ['boss', 'bossallowed']],
                        longzu_shangshanyue: ['male', 'long', 4, ['longzu_heiri'], ['des:上杉越,作家江南所著<龙族Ⅲ黑月之潮>中角色之一,前任影皇,原蛇岐八家内三家上杉家家主,在人工岛为昂热等人斩开了由鬼齿龙蝰组成的蓝色银河,已故.[1]  言灵为黑日,效果类似于黑洞,不过可以控制强度,死后会坍塌.因为白王是控制精神的龙类,他的龙族血统占到了近全部却没有变成死侍.当时世界上最强混血种']],
                        longzu_shichuiying: ['female', 'long', 3, ['longzu_weizhuang', 'longzu_yinliu'], ['des:矢吹樱,江南所著<龙族Ⅲ黑月之潮>中的人物.源稚生三位家臣之一,杀手出身,蛇岐八家大家长特别助理(也就是日本战国时的小姓,不过日本小姓一向是俊秀的男人,而矢吹樱是女性).曾流落阿富汗,觉醒了龙族血脉后成为杀手,后被本家带回,成为源稚生的助理.信赖并深爱源稚生,在东京塔为掩护源稚生逃离而割破源稚生的皮肤利用其血液引开死侍.最后从东京的塔上跳下坠亡(已故)']],
                    },
                    characterTitle: {
                    },
                    characterIntro: {
                    },
                    skill: {
                        longzu_cexie: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            nobracket: true,
                            check(event, player) {
                                if ((event.card && (event.card.name == 'du' || event.card.name == 'wugu')) || event.card.name == 'tiesuo') return false;
                                return true;
                            },
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    return '到你的下回合开始前不能记录:' + player.storage.longzu_cexie;
                                },
                            },
                            init(player) {
                                player.storage.longzu_nono = true;
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                player.storage.longzu_cexie1 = [];
                                if (!player.storage.longzu_cexie) {
                                    player.storage.longzu_cexie = [];
                                }
                            },
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                if (_status.currentPhase == player) return false;
                                if (event.player == player) return false;
                                if (player.storage.longzu_cexie && player.storage.longzu_cexie.includes(lib.translate[event.card.name])) {
                                    return false;
                                }
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (i.isInPile()) return true;
                                        }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(get.prompt('longzu_cexie'), 1).set('ai', function (card) {
                                    if (card.name == 'tao') return -10;
                                    if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                    return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                });
                                ('step 1');
                                if (result.bool) {
                                    if (!player.storage.longzu_cexie1) {
                                        player.storage.longzu_cexie1 = [];
                                    }
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            if (i.isInPile()) {
                                                player.storage.longzu_cexie1.push(i);
                                                if (!player.storage.longzu_cexie) {
                                                    player.storage.longzu_cexie = [];
                                                }
                                                player.storage.longzu_cexie.push(lib.translate[i.name]);
                                            }
                                        }
                                }
                                if (result.bool == false) {
                                    event.finish();
                                }
                                ('step 2');
                                if (player.storage.longzu_cexie1 && player.storage.longzu_cexie1.length >= 3) {
                                    player.recover();
                                    player.gain(player.storage.longzu_cexie1, 'gain2');
                                    delete player.storage.longzu_cexie1;
                                }
                            },
                            group: 'longzu_cexie_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    content() {
                                        delete player.storage.longzu_cexie;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            ai: {
                                threaten: 1.8,
                            },
                        },
                        longzu_embh: {
                            trigger: {
                                player: ['loseHpBefore', 'loseMaxHpBefore', 'turnOverBefore', 'linkBefore'],
                            },
                            nobracket: true,
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            _priority: 1000,
                            init(player) {
                                player.storage.longzu_Sakura = true;
                                game.countPlayer(function (current) {
                                    if (current.storage.longzu_lumingze) {
                                        player.addSkill('longzu_buyaosi');
                                    }
                                });
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            filter(event, player) {
                                var name = event.name;
                                if (event.name == 'turnOver') return player.classList.contains('turnedover') == false;
                                else if (event.name == 'link') return player.classList.contains('linked2') == false && player.classList.contains('linked') == false;
                                return true;
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                noturnOver: true,
                                nolink: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'turnOver')) return [0, 0];
                                        if (get.tag(card, 'link')) return [0, 0];
                                    },
                                },
                            },
                        },
                        longzu_恶魔交易: {
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init(player) {
                                if (!player.storage.longzu_emjy) {
                                    player.storage.longzu_emjy = 0;
                                }
                            },
                            content() {
                                'step 0';
                                longzu.command(player);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player, target) {
                                        return 10;
                                    },
                                },
                            },
                        },
                        longzu_baoxie: {
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            filter(event, player) {
                                if (player.storage.longzu_baoxie >= 4) return false;
                                return player.storage.longzu_junyan;
                            },
                            init(player) {
                                player.storage.longzu_baoxie = 0;
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            check(event, player) {
                                if (player.hp == 1) return 1;
                                if (player.storage.longzu_baoxie == 3) return 0;
                            },
                            content() {
                                'step 0';
                                player.storage.longzu_baoxie++;
                                player.recover();
                                ('step 1');
                                if (player.storage.longzu_junyan) {
                                    if (player.storage.longzu_baoxie == 1) {
                                        player.removeSkill('longzu_junyan');
                                        player.addSkill('longzu_junyan2');
                                    }
                                    if (player.storage.longzu_baoxie == 2) {
                                        player.removeSkill('longzu_junyan');
                                        player.removeSkill('longzu_junyan2');
                                        player.addSkill('longzu_junyan3');
                                    }
                                    if (player.storage.longzu_baoxie == 3) {
                                        player.removeSkill('longzu_junyan');
                                        player.removeSkill('longzu_junyan2');
                                        player.removeSkill('longzu_junyan3');
                                        player.addSkill('longzu_junyan4');
                                    }
                                    if (player.storage.longzu_baoxie == 4) {
                                        if (get.mode() == 'identity') {
                                            if (player != game.zhu) {
                                                player.identity = 'nei';
                                                player.showIdentity('nei');
                                            }
                                        }
                                    }
                                }
                            },
                        },
                        longzu_baohu: {
                            trigger: {
                                global: 'dieBefore',
                            },
                            _priority: 100,
                            nobracket: true,
                            mark: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            filter(event, player) {
                                if (player.storage.longzu_baohu) return false;
                                if (player.name != 'longzu_lumingze') {
                                    return (event.player.name == 'longzu_Sakura' || event.player.name == 'longzu_nono') && event.player != player;
                                }
                                if (player.name == 'longzu_lumingze' || player.name2 == 'longzu_lumingze') {
                                    return event.player.name == 'longzu_Sakura' || ((player.name2 == 'longzu_Sakura' || player.name1 == 'longzu_Sakura') && event.player == player);
                                }
                                return false;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                trigger.player.hp = trigger.player.maxHp;
                                player.discard(player.getCards('hej'));
                                trigger.player.draw(3);
                                player.awakenSkill('longzu_baohu');
                                player.storage.longzu_baohu = true;
                                ('step 1');
                                if (trigger.player.isTurnedOver()) {
                                    trigger.player.turnOver();
                                    player.turnOver();
                                }
                                ('step 2');
                                if (trigger.player.isLinked()) {
                                    trigger.player.link();
                                    player.link();
                                }
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    if (player.storage.longzu_baohu) return false;
                                },
                                save: true,
                                threaten(player, target) {
                                    if (!target.storage.longzu_baohu) return 0.6;
                                },
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        longzu_taowang: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard: true,
                            selectCard: [1, Infinity],
                            prompt: '弃置任意张牌并摸等量的牌',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.draw(cards.length);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        longzu_junyan: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && !target.storage.longzu_longhuang && !target.storage.longzu_longwang;
                            },
                            filter(event, player) {
                                if (player.storage.longzu_baoxie && player.storage.longzu_baoxie > 1) return false;
                                return !player.storage.longzu_junyan;
                            },
                            nobracket: true,
                            content() {
                                'step 0';
                                player.storage.longzu_junyan = true;
                                target.chooseToDiscard().set('ai', function (card) {
                                    if (card.name == 'tao') return -10;
                                    if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                    return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                });
                                ('step 1');
                                if (result.bool == false) {
                                    target.damage('fire');
                                }
                            },
                            group: 'longzu_junyan_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.longzu_junyan;
                                    },
                                    content() {
                                        delete player.storage.longzu_junyan;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) < 0) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        longzu_junyan2: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && !target.storage.longzu_longhuang && !target.storage.longzu_longwang;
                            },
                            filter(event, player) {
                                return !player.storage.longzu_junyan && player.storage.longzu_baoxie < 2;
                            },
                            nobracket: true,
                            content() {
                                'step 0';
                                player.storage.longzu_junyan = true;
                                target.chooseToDiscard(2).set('ai', function (card) {
                                    if (card.name == 'tao') return -10;
                                    if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                    return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                });
                                ('step 1');
                                if (result.bool == false) {
                                    target.damage('fire');
                                }
                            },
                            group: 'longzu_junyan2_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.longzu_junyan;
                                    },
                                    content() {
                                        delete player.storage.longzu_junyan;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) < 0) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        longzu_junyan3: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && !target.storage.longzu_longhuang && !target.storage.longzu_longwang;
                            },
                            filter(event, player) {
                                return !player.storage.longzu_junyan && player.storage.longzu_baoxie < 4;
                            },
                            nobracket: true,
                            content() {
                                'step 0';
                                player.storage.longzu_junyan = true;
                                target.chooseToDiscard(3).set('ai', function (card) {
                                    if (card.name == 'tao') return -10;
                                    if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                    return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                });
                                ('step 1');
                                if (result.bool == false) {
                                    target.damage('fire');
                                }
                                if (result.bool) {
                                    if (!player.storage.longzu_longwang && !player.storage.longzu_longhuang) {
                                        player.loseHp();
                                    }
                                }
                            },
                            group: 'longzu_junyan3_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.longzu_junyan;
                                    },
                                    content() {
                                        delete player.storage.longzu_junyan;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) < 0) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        longzu_junyan4: {
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') > 0 && !target.storage.longzu_longhuang && !target.storage.longzu_longwang;
                            },
                            filter(event, player) {
                                return !player.storage.longzu_junyan && player.storage.longzu_baoxie >= 3;
                            },
                            content() {
                                'step 0';
                                player.storage.longzu_junyan = true;
                                target
                                    .chooseControl('弃置所有牌', '受到2点伤害', function () {
                                        if (target.countCards('h') > 0) {
                                            return '弃置所有牌';
                                        }
                                        return '受到两点伤害';
                                    })
                                    .set('prompt', '选择弃置所有牌或受到两点火焰伤害');
                                ('step 1');
                                if (result.control == '弃置所有牌') {
                                    target.discard(target.getCards('he'));
                                    if (!player.storage.longzu_longwang && !player.storage.longzu_longhuang) {
                                        player.loseHp();
                                    }
                                }
                                if (result.control == '受到两点伤害') {
                                    target.damage(2, 'fire');
                                }
                            },
                            group: 'longzu_junyan4_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.longzu_junyan;
                                    },
                                    content() {
                                        delete player.storage.longzu_junyan;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) < 0) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        longzu_lumingze1: {
                            nobracket: true,
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                player.storage.longzu_改写血统 = 0;
                                player.storage.longzu_lumingze = true;
                                game.countPlayer(function (current) {
                                    game.countPlayer(function (current2) {
                                        if (current.storage.longzu_Sakura && current2.storage.longzu_nono) {
                                            current2.removeSkill('longzu_baohu');
                                            current.removeSkill('longzu_baohu');
                                            current.addSkill('longzu_taowang2');
                                            delete current.removeSkill;
                                            delete current.clearSkills;
                                        }
                                    });
                                    if (current.storage.longzu_Sakura) {
                                        if (!current.hasSkill('longzu_taowang2') && current != game.Sakura) {
                                            current.addSkill('longzu_buyaosi');
                                            player.line(current, 'green');
                                        }
                                        player.update();
                                    }
                                });
                            },
                        },
                        longzu_longhuang: {
                            group: ['longzu_longhuang_die'],
                            nobracket: true,
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                player.storage.longzu_longhuang = true;
                            },
                            filter(event, player) {
                                if (!player.storage.longzu_lumingze && !player.storage.longzu_Sakura && player != game.Sakura) return false;
                                if (event.nature) return true;
                                return false;
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                nofire: true,
                                nothunder: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage')) return 0;
                                        if (get.tag(card, 'thunderDamage')) return 0;
                                    },
                                },
                            },
                            subSkill: {
                                die: {
                                    forced: true,
                                    init(player) {
                                        window.setInterval(function () {
                                            if (player.hp > 0 && player.className.split(/\s+/g).includes('dead')) {
                                                player.classList.remove('dead');
                                                game.players.add(player);
                                                game.dead.remove(player);
                                                lib.element.player.revive.apply(player, [player.maxHp]);
                                                player.draw(4);
                                            }
                                        }, 1000);
                                    },
                                },
                            },
                        },
                        longzu_longwang: {
                            nobracket: true,
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                player.storage.longzu_longwang = true;
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            _priority: -10000000,
                            filter(event, player) {
                                return event.num > 1;
                            },
                            content() {
                                trigger.num = 1;
                            },
                        },
                        longzu_改写血统: {
                            group: ['longzu_改写血统2'],
                            trigger: {
                                player: 'shunshouBegin',
                            },
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                lib.character.longzu_shibing = ['male', 'long', 4, ['士兵1'], []];
                                lib.translate.longzu_shibing = '士兵';
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                if (player.name2 && player.name2 != '士兵' && player.name2 != 'gz_shibing') return false;
                                return player.storage.longzu_lumingze || player.storage.longzu_Sakura || player == game.Sakura;
                            },
                            content() {
                                'step 0';
                                trigger.untrigger();
                                trigger.cancel();
                                ('step 1');
                                longzu.QYPlayer(player, trigger.target);
                                event.finish();
                            },
                        },
                        longzu_buyaosi: {
                            nobracket: true,
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            filter(event, player) {
                                return player.maxHp > 0 && !player.storage.longzu_longwang && !player.storage.longzu_longhuang;
                            },
                            content() {
                                trigger.cancel();
                                player.loseMaxHp()._triggered = null;
                            },
                        },
                        longzu_shijianling: {
                            nobracket: true,
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                player.storage.longzu_angre = true;
                            },
                            group: 'longzu_shijianling2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return !player.storage.longzu_longwang && !player.storage.longzu_longhuang;
                            },
                            content() {
                                trigger.num += 2;
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (!target.storage.longzu_longwang && !target.storage.longzu_longhuang) return true;
                                },
                                wuxieRespondable(card, player, target, current) {
                                    if (player != current && !current.storage.longzu_longwang && !current.storage.longzu_longhuang) {
                                        return false;
                                    }
                                    return true;
                                },
                            },
                        },
                        longzu_shijianling2: {
                            nobracket: true,
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                player.storage.longzu_angre = true;
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return !event.player.storage.longzu_longwang && !event.player.storage.longzu_longhuang;
                            },
                            content() {
                                var d = new Date();
                                var n = d.getSeconds();
                                if (d % 2 == 0) {
                                    trigger.player.discard(trigger.player.getCards('e'));
                                } else {
                                    trigger.num++;
                                }
                            },
                        },
                        longzu_taowang2: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'dieBefore',
                            },
                            nobracket: true,
                            forced: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                if (!player.storage.longzu_taowang) {
                                    player.storage.longzu_taowang = 0;
                                }
                            },
                            filter(event, player) {
                                if (!game.longzudead) {
                                    for (var i = 0; i < game.dead.length; i++) {
                                        if (game.dead.length && game.dead[i].name == 'longzu_lumingze') return false;
                                    }
                                }
                                if (game.longzudead) {
                                    for (var i = 0; i < game.longzudead.length; i++) {
                                        if (game.longzudead.length && game.longzudead[i].name == 'longzu_lumingze') return false;
                                    }
                                }
                                if (player.storage.longzu_taowang >= 5) return false;
                                if (!event.player.storage.longzu_nono && !event.player.storage.longzu_Sakura) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.longzu_taowang++;
                                player.storage.longzu_emjy = 0;
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                if (!game.longzudead) {
                                    if (game.dead.length) {
                                        while (game.dead.length) {
                                            game.dead[0].revive();
                                        }
                                    }
                                }
                                if (game.longzudead) {
                                    if (game.longzudead.length) {
                                        while (game.longzudead.length) {
                                            game.longzudead[0].revive();
                                        }
                                    }
                                }
                                for (var i of game.players) {
                                    if (i.hp < i.maxHp) i.hp = i.maxHp;
                                    if (i.isTurnedOver()) {
                                        i.turnOver()._triggered = null;
                                    }
                                    if (i.isLinked()) {
                                        i.link()._triggered = null;
                                    }
                                    i.discard(i.getCards('hej'))._triggered = null;
                                    i.draw(4)._triggered = null;
                                    i.update();
                                }
                            },
                        },
                        longzu_mengjing2: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            _priority: -1,
                            filter(event, player) {
                                game.countPlayer(function (current) {
                                    if (!current.storage.longzu_梦境) return false;
                                });
                                if (player.storage.longzu_mengjing2) return false;
                                if (player.storage.longzu_mengjing) return true;
                                return false;
                            },
                            check(event, player) {
                                if (!game.longzudead) {
                                    return player.hp < 2 || game.dead.length > 3;
                                } else {
                                    return player.hp < 2 || game.longzudead.length > 3;
                                }
                            },
                            content() {
                                'step 0';
                                player.storage.longzu_mengjing2 = true;
                                player.hp = player.maxHp;
                                game.countPlayer(function (current) {
                                    player.line(current, 'green');
                                    current.removeSkill('fengyin');
                                    current.removeSkill('wansha');
                                });
                                ('step 1');
                                if (!game.longzudead) {
                                    if (game.dead.length) {
                                        for (var x = 0; x < game.dead.length; x++) {
                                            if (game.dead[x].storage.longzu_梦境) game.dead[x].revive();
                                            player.hp = player.maxHp;
                                            game.dead[x].update();
                                            player.storage.longzu_xianshi = 0;
                                        }
                                    }
                                }
                                if (game.longzudead) {
                                    if (game.longzudead.length) {
                                        for (var x = 0; x < game.longzudead.length; x++) {
                                            if (game.longzudead[x].storage.longzu_梦境) game.longzudead[x].revive();
                                            player.hp = player.maxHp;
                                            game.longzudead[x].update();
                                            player.storage.longzu_xianshi = 0;
                                        }
                                    }
                                }
                                ('step 2');
                                ('step 3');
                                ui.window.style.transition = 'all 0.5s';
                                ui.window.classList.add('zoomout3');
                                ui.window.delete();
                                ui.window.hide();
                                game.addVideo('skill', player, 'longzu_mengjing2');
                                ('step 4');
                                var storage = player.storage.longzu_mengjing;
                                var player, frag;
                                var i, j;
                                for (var i = 0; i < storage.length; i++) {
                                    if (game.players.includes(storage[i].player)) {
                                        player = storage[i].player;
                                        while (player.node.handcards1.childNodes.length) ui.discardPile.appendChild(player.node.handcards1.firstChild);
                                        while (player.node.handcards2.childNodes.length) ui.discardPile.appendChild(player.node.handcards2.firstChild);
                                        while (player.node.judges.childNodes.length) ui.discardPile.appendChild(player.node.judges.firstChild);
                                        while (player.node.equips.childNodes.length) ui.discardPile.appendChild(player.node.equips.firstChild);
                                    }
                                }
                                for (var i = 0; i < storage.length; i++) {
                                    if (game.players.includes(storage[i].player)) {
                                        player = storage[i].player;
                                        for (j = 0; j < storage[i].handcards1.length; j++) {
                                            if (storage[i].handcards1[j].parentNode == ui.discardPile || storage[i].handcards1[j].parentNode == ui.cardPile) player.node.handcards1.appendChild(storage[i].handcards1[j]);
                                        }
                                        for (j = 0; j < storage[i].handcards2.length; j++) {
                                            if (storage[i].handcards2[j].parentNode == ui.discardPile || storage[i].handcards2[j].parentNode == ui.cardPile) player.node.handcards2.appendChild(storage[i].handcards2[j]);
                                        }
                                        for (j = 0; j < storage[i].equips.length; j++) {
                                            if (storage[i].equips[j].parentNode == ui.discardPile || storage[i].equips[j].parentNode == ui.cardPile) player.node.equips.appendChild(storage[i].equips[j]);
                                        }
                                        for (j = 0; j < storage[i].judges.length; j++) {
                                            if (storage[i].judges[j].parentNode == ui.discardPile || storage[i].judges[j].parentNode == ui.cardPile) {
                                                storage[i].judges[j].viewAs = storage[i].viewAs[j];
                                                player.node.judges.appendChild(storage[i].judges[j]);
                                            }
                                        }
                                        player.update();
                                    }
                                }
                                ui.window.classList.remove('zoomout3');
                                ui.window.classList.add('zoomin3');
                                document.body.appendChild(ui.window);
                                var data = {};
                                for (var i of game.players) {
                                    data[i.dataset.position] = {
                                        h: get.cardsInfo(i.get('h')),
                                        e: get.cardsInfo(i.get('e')),
                                        j: get.cardsInfo(i.get('j')),
                                    };
                                }
                                ('step 5');
                                ui.window.show();
                                ui.window.classList.remove('zoomin3');
                                setTimeout(function () {
                                    ui.window.style.transition = '';
                                    game.resume();
                                }, 500);
                                game.pause();
                                ('step 6');
                                ui.control.innerHTML = '';
                                ui.discardPile.innerHTML = '';
                            },
                            group: ['longzu_mengjing'],
                        },
                        longzu_mengjing: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: ['dieBefore'],
                            },
                            _priority: 100,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            nobracket: true,
                            filter(event, player) {
                                game.countPlayer(function (current) {
                                    if (!player.storage.longzu_longhuang && current.storage.longzu_梦境) return false;
                                });
                                return true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                trigger.player.hp = 1;
                                trigger.player.storage.longzu_梦境 = true;
                                trigger.player.update();
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        current.addSkill('fengyin');
                                        current.addSkill('wansha');
                                    }
                                });
                                trigger.cancel();
                                ('step 1');
                                var handcards1, handcards2, judges, equips, viewAs, i, j;
                                player.storage.longzu_mengjing = [];
                                player.storage.longzu_mengjing2 = false;
                                var table = document.createElement('table');
                                var tr, td, str, st;
                                for (var i = 0; i < game.players.length; i++) {
                                    viewAs = [];
                                    handcards1 = [];
                                    handcards2 = [];
                                    judges = [];
                                    equips = [];
                                    for (j = 0; j < i.node.handcards1.childNodes.length; j++) handcards1.push(i.node.handcards1.childNodes[j]);
                                    for (j = 0; j < i.node.handcards2.childNodes.length; j++) handcards2.push(i.node.handcards2.childNodes[j]);
                                    for (j = 0; j < i.node.judges.childNodes.length; j++) {
                                        viewAs.push(i.node.judges.childNodes[j].viewAs);
                                        judges.push(i.node.judges.childNodes[j]);
                                    }
                                    for (j = 0; j < i.node.equips.childNodes.length; j++) equips.push(i.node.equips.childNodes[j]);
                                    tr = document.createElement('tr');
                                    tr.style.verticalAlign = 'top';
                                    table.appendChild(tr);
                                    td = document.createElement('td');
                                    td.innerHTML = get.translation(i);
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    td.innerHTML = handcards1.length + handcards2.length;
                                    tr.appendChild(td);
                                    str = '';
                                    if (equips.length + judges.length) {
                                        if (equips.length) {
                                            str += get.translation(equips);
                                            if (judges.length) {
                                                str += '、';
                                            }
                                        }
                                        if (judges.length) {
                                            str += get.translation(judges, 'viewAs');
                                        }
                                    } else {
                                        str = '';
                                    }
                                    td = document.createElement('td');
                                    td.innerHTML = str;
                                    tr.appendChild(td);
                                    player.storage.longzu_mengjing.push({
                                        player: i,
                                        handcards1: handcards1,
                                        handcards2: handcards2,
                                        judges: judges,
                                        equips: equips,
                                        viewAs: viewAs,
                                        value: handcards1.length + handcards2.length + equips.length - judges.length,
                                    });
                                }
                                table.firstChild.firstChild.style.width = '85px';
                                table.firstChild.childNodes[1].style.width = '48px';
                                player.awakenSkill('longzu_mengjing');
                            },
                        },
                        longzu_yinguo: {
                            mode: ['identity'],
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            nobracket: true,
                            multitarget: true,
                            multiline: true,
                            selectTarget: -1,
                            check(event, player) {
                                return player.hp <= 2 || game.zhu.hp <= 2;
                            },
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                player.storage.longzu_odin = true;
                            },
                            content() {
                                'step 0';
                                event.current = player.next;
                                event.num = 0;
                                player.storage.countfan = 0;
                                player.storage.countzhong = 0;
                                player.storage.countnei = 0;
                                for (var i of game.players) {
                                    if (i.identity == 'fan') player.storage.countfan++;
                                    if (i.identity == 'zhong') player.storage.countzhong++;
                                    if (i.identity == 'zhu') i.identity = player.identity;
                                }
                                var num1;
                                num1 = game.players.length - player.storage.countfan - 1 - player.storage.countzhong;
                                player.storage.countnei = num1;
                                delete game.zhu;
                                game.zhu = player;
                                player.identity = 'zhu';
                                player.update();
                                player.showIdentity('zhu');
                                ('step 1');
                                if (num < event.targets.length && event.current.identity !== 'zhu' && event.current.isAlive()) {
                                    var controls = [];
                                    var namex = event.current.name;
                                    if (player.storage.countzhong > 0) controls.push('zhong');
                                    if (player.storage.countnei > 0) controls.push('nei');
                                    if (player.storage.countfan > 0) controls.push('fan');
                                    var str = '请选择' + get.translation(namex) + '的身份';
                                    player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
                                        return Math.floor(Math.random() * controls.length);
                                    };
                                }
                                ('step 2');
                                if (result.control && event.current != player) {
                                    if (result.control == 'fan') {
                                        player.storage.countfan--;
                                        event.current.setIdentity('fan');
                                        event.current.identity = 'fan';
                                        event.current.update();
                                    }
                                    if (result.control == 'zhong') {
                                        player.storage.countzhong--;
                                        event.current.setIdentity('zhong');
                                        event.current.identity = 'zhong';
                                        event.current.update();
                                    }
                                    if (result.control == 'nei') {
                                        player.storage.countnei--;
                                        event.current.setIdentity('nei');
                                        event.current.identity = 'nei';
                                        event.current.update();
                                    }
                                }
                                if (event.current.next == player) {
                                    player.awakenSkill('longzu_yinguo');
                                    event.finish();
                                } else {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        longzu_Gungnir: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                if (event.target == player) return false;
                                if (event.target.storage.longzu_odin) return false;
                                return true;
                            },
                            nobracket: true,
                            content() {
                                'step 0';
                                if (!trigger.target.storage.longzu_Gungnir) {
                                    if (!trigger.target.hasSkill('longzu_fengyin')) {
                                        longzu.lzaddTempSkill(trigger.target, 'longzu_fengyin', { player: 'phaseAfter' });
                                    }
                                    trigger.target.loseMaxHp();
                                }
                                trigger.target.storage.longzu_Gungnir = true;
                                if (Math.random() <= 0.9) {
                                    trigger.directHit = true;
                                }
                                player.say('别相信自己的眼睛,别否定可能性,别以为你在猎杀一种超级生物,龙,可能此时此刻就看你,就在你身边');
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                        },
                        巧变: {
                            audio: 'qiaobian',
                            group: ['qiaobian1', 'qiaobian2', 'qiaobian3', 'qiaobian4', '巧变_draw'],
                            ai: {
                                threaten: 3,
                            },
                            trigger: {
                                player: ['phaseJudgeCancelled', 'phaseDrawCancelled', 'phaseUseCancelled', 'phaseDiscardCancelled'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.storage.qiaobian) {
                                    player.storage.qiaobian = 0;
                                }
                                ('step 1');
                                player.storage.qiaobian++;
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['phaseEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.qiaobian && player.storage.qiaobian > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw(player.storage.qiaobian);
                                        delete player.storage.qiaobian;
                                    },
                                },
                            },
                        },
                        longzu_fengyin: {
                            init(player, skill) {
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
                                    if (get.skills[i]) {
                                        skills.splice(i--, 1);
                                    }
                                }
                                player.disableSkill(skill, skills);
                            },
                            onremove(player, skill) {
                                player.enableSkill(skill);
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    let list = Object.keys(player.disabledSkills);
                                    if (list.length) {
                                        var str = '失效技能:';
                                        for (var i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) {
                                                str += get.translation(list[i]) + '、';
                                            }
                                        }
                                        return str.slice(0, str.length - 1);
                                    }
                                },
                            },
                        },
                        longzu_zhulong: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return !target.storage.longzu_longwang && !target.storage.longzu_longhuang;
                            },
                            filter(event, player) {
                                if (player.isTurnedOver()) return false;
                                return player.countCards('h') > 0;
                            },
                            content() {
                                player.turnOver();
                                player.discard(player.getCards('hej'));
                                target.discard(target.getCards('hej'));
                                target.hujia = 0;
                                target.damage(2, 'fire');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) <= 0 && target.isLinked()) return 1;
                                        if (player.hp <= 2 && player.countCards('h', 'shan')) return 0;
                                        if (get.attitude(player, target) <= 0 && target.countCards('h') > target.hp) return 1;
                                        if (get.attitude(player, target) > 0) return 0;
                                        return 0;
                                    },
                                },
                            },
                        },
                        longzu_shangjin: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            nobracket: true,
                            forced: true,
                            trigger: {
                                global: 'dieEnd',
                            },
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return (event.source && event.source == player) || player == _status.currentPhase;
                            },
                            content() {
                                player.draw(3);
                            },
                        },
                        longzu_老唐: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            nobracket: true,
                            forced: true,
                            trigger: {
                                global: 'dieEnd',
                            },
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                if (game.players.length == 2) {
                                    lib.translate.longzu_nuodun2 = '诺顿';
                                    lib.character['longzu_nuodun2'] = ['male', 'long', 4, ['longzu_longwang', 'longzu_zhulong'], ['ext:龙族/image/longzu_nuodun2.jpg']];
                                    player.init('longzu_nuodun2');
                                    player.say('别相信自己的眼睛,别否定可能性,别以为你在猎杀一种超级生物,龙,可能此时此刻就看你,就在你身边');
                                }
                            },
                            filter(event, player) {
                                return player.storage.longzu_longwang;
                            },
                            content() {
                                lib.translate.longzu_nuodun2 = '诺顿';
                                lib.character['longzu_nuodun2'] = ['male', 'long', 4, ['longzu_longwang', 'longzu_zhulong'], ['ext:龙族/image/longzu_nuodun2.jpg']];
                                player.skills.remove('longzu_shangjin');
                                player.skills.remove('longzu_老唐');
                                player.init('longzu_nuodun2');
                                player.say('所谓弃族的命运,就是要穿越荒原,再次竖起战旗,返回故乡.死不可怕,只是一场长眠.在我可以吞噬这个世界之前,与其孤独跋涉,不如安然沉睡.我们仍会醒来');
                            },
                        },
                        longzu_死神之镰: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                var he = player.getCards('he');
                                var num = 0;
                                for (var i = 0; i < he.length; i++) {
                                    var info = lib.card[he[i].name];
                                    if (info.type == 'equip') {
                                        num++;
                                        if (num >= 2) return true;
                                    }
                                }
                            },
                            filterCard(card) {
                                var info = get.info(card);
                                return info.type == 'equip';
                            },
                            selectCard: 2,
                            position: 'he',
                            check(card) {
                                return get.value(card);
                            },
                            content() {
                                var name = cards[0].name + '_' + cards[1].name;
                                var info1 = get.info(cards[0]),
                                    info2 = get.info(cards[1]);
                                if (!lib.card[name]) {
                                    var info = {
                                        enable: true,
                                        type: 'equip',
                                        subtype: get.subtype(cards[0]),
                                        cardimage: info1.cardimage || cards[0].name,
                                        filterTarget(card, player, target) {
                                            return target == player;
                                        },
                                        selectTarget: -1,
                                        modTarget: true,
                                        content: lib.element.content.equipCard,
                                        legend: true,
                                        source: [cards[0].name, cards[1].name],
                                        onEquip: [],
                                        onLose: [],
                                        skills: [],
                                        distance: {},
                                        ai: {
                                            order: 8.9,
                                            equipValue: 10,
                                            useful: 2.5,
                                            value: 10,
                                            result: {
                                                target(player, target) {
                                                    return get.equipResult(player, target, name);
                                                },
                                            },
                                        },
                                    };
                                    for (var i in info1.distance) {
                                        info.distance[i] = info1.distance[i];
                                    }
                                    for (var i in info2.distance) {
                                        if (typeof info.distance[i] == 'number') {
                                            info.distance[i] += info2.distance[i];
                                        } else {
                                            info.distance[i] = info2.distance[i];
                                        }
                                    }
                                    if (info1.skills) {
                                        info.skills = info.skills.concat(info1.skills);
                                    }
                                    if (info2.skills) {
                                        info.skills = info.skills.concat(info2.skills);
                                    }
                                    if (info1.onEquip) {
                                        if (Array.isArray(info1.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info1.onEquip);
                                        } else {
                                            info.onEquip.push(info1.onEquip);
                                        }
                                    }
                                    if (info2.onEquip) {
                                        if (Array.isArray(info2.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info2.onEquip);
                                        } else {
                                            info.onEquip.push(info2.onEquip);
                                        }
                                    }
                                    if (info1.onLose) {
                                        if (Array.isArray(info1.onLose)) {
                                            info.onLose = info.onLose.concat(info1.onLose);
                                        } else {
                                            info.onLose.push(info1.onLose);
                                        }
                                    }
                                    if (info2.onLose) {
                                        if (Array.isArray(info2.onLose)) {
                                            info.onLose = info.onLose.concat(info2.onLose);
                                        } else {
                                            info.onLose.push(info2.onLose);
                                        }
                                    }
                                    if (info.onEquip.length == 0) delete info.onEquip;
                                    if (info.onLose.length == 0) delete info.onLose;
                                    lib.card[name] = info;
                                    lib.translate[name] = get.translation(cards[0].name, 'skill') + get.translation(cards[1].name, 'skill');
                                    var str = lib.translate[cards[0].name + '_info'];
                                    if (str[str.length - 1] == '.' || str[str.length - 1] == '') {
                                        str = str.slice(0, str.length - 1);
                                    }
                                    lib.translate[name + '_info'] = str + ';' + lib.translate[cards[1].name + '_info'];
                                    try {
                                        game.addVideo('newcard', null, {
                                            name: '極•' + name,
                                            translate: lib.translate[name],
                                            info: lib.translate[name + '_info'],
                                            card: cards[0].name,
                                            legend: true,
                                        });
                                    } catch (e) { }
                                }
                                player.gain(game.createCard({ name: name, suit: cards[0].suit, number: cards[0].number }), 'gain2');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        longzu_风王之瞳: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            group: ['longzu_风王之瞳_clear', 'longzu_风王之瞳2'],
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            changeSeat: true,
                            filterTarget(card, player, target) {
                                return player != target && player.next != target && !target.storage.longzu_longwang && !target.storage.longzu_longhuang;
                            },
                            filter(event, player) {
                                return !player.storage.longzu_风王之瞳;
                            },
                            filterCard: {
                                color: 'black',
                            },
                            check(card) {
                                return 4 - get.value(card);
                            },
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            content() {
                                game.swapSeat(player, target);
                                player.storage.longzu_风王之瞳 = true;
                            },
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.longzu_风王之瞳;
                                    },
                                    content() {
                                        delete player.storage.longzu_风王之瞳;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player(player, target) {
                                        var att = get.attitude(player, target);
                                        if (target == player.previous && att > 0) return att;
                                        if (target == player.next && att < 0) return -att;
                                        var att2 = get.attitude(player, player.next);
                                        if (target == player.next.next && att < 0 && att2 < 0) return -att - att2;
                                        return 0;
                                    },
                                },
                            },
                        },
                        longzu_风王之瞳2: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            filter(event, player) {
                                return !player.storage.longzu_风王之瞳;
                            },
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            content() {
                                player.addTempSkill('longzu_damage1', { player: 'phaseAfter' });
                                player.storage.longzu_风王之瞳 = true;
                            },
                            ai: {
                                order: 10.5,
                                result: {
                                    player(player, target) {
                                        if (player.countCards('h', 'sha') > 0) return 1;
                                        if (player.countCards('h', 'wanjian') > 0) return 1;
                                        if (player.countCards('h', 'nanman') > 0) return 1;
                                        return 0;
                                    },
                                },
                            },
                            group: 'longzu_风王之瞳2_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.longzu_风王之瞳;
                                    },
                                    content() {
                                        delete player.storage.longzu_风王之瞳;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        longzu_damage1: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.notLink();
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        longzu_风王之瞳3: {
                            nobracket: true,
                            group: ['longzu_风王之瞳', 'longzu_风王之瞳2', 'longzu_风王之瞳3_clear'],
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.longzu_风王之瞳;
                                    },
                                    content() {
                                        delete player.storage.longzu_风王之瞳;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        longzu_sishi: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: ['shaEnd', 'phaseBegin'],
                            },
                            nobracket: true,
                            forced: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                player.classList.add('likedead');
                            },
                            filter(event, player) {
                                return player.storage.longzu_sishi;
                            },
                            content() {
                                player.loseHp(1);
                            },
                        },
                        longzu_biansishi: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            filter(event, player) {
                                //if(game.players.length==2) return false;
                                if (event.player.storage.longzu_longwang) return false;
                                if (event.player.storage.longzu_longhuang) return false;
                                if (event.player.storage.longzu_sishi) return false;
                                if (event.player.hasSkill('longzu_sishi')) return false;
                                if (event.player == game.boss) return false;
                                return event.player != player && (player.storage.longzu_longwang || player.storage.longzu_longhuang);
                            },
                            content() {
                                'step 0';
                                if (lib.config.background_speak) {
                                    if (lib.character[trigger.player.name] && lib.character[trigger.player.name][4].includes('die_audio')) {
                                        game.playAudio('die', trigger.player.name);
                                    }
                                    // else if(true){
                                    else {
                                        game.playAudio('die', trigger.player.name, function () {
                                            game.playAudio('die', trigger.player.name.slice(trigger.player.name.indexOf('_') + 1));
                                        });
                                    }
                                }
                                ('step 1');
                                game.log(trigger.player, '变为死侍');
                                trigger.player.identity = player.identity;
                                if (player == game.zhu) {
                                    trigger.player.identity = 'zhong';
                                }
                                trigger.player.group = player.group;
                                trigger.player.update();
                                ('step 2');
                                trigger.player.classList.remove('linked');
                                trigger.player.classList.remove('linked2');
                                trigger.player.classList.remove('turnedover');
                                trigger.player.classList.remove('out');
                                trigger.player.classList.remove('dead');
                                trigger.player.node.name.innerHTML = '死<br>侍';
                                trigger.player.revive();
                                trigger.player.draw(4);
                                longzu.lzaddSkill(trigger.player, 'longzu_sishi');
                                trigger.player.node.avatar.classList.add('disabled');
                                if (trigger.player.name2) trigger.player.node.avatar2.classList.add('disabled');
                                //trigger.player.classList.add('likedead');
                                ('step 3');
                                trigger.player.hp = trigger.player.maxHp;
                                trigger.player.update();
                                if (trigger.player.setIdentity) trigger.player.setIdentity();
                                trigger.player.storage.longzu_sishi = true;
                                //trigger.cancel();
                            },
                        },
                        longzu_addSkill: {
                            nobracket: true,
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            init(player) {
                                player.addSkill = function (skill, checkConflict, nobroadcast) {
                                    if (!this.storage.longzu_longwang) return;
                                    if (!this.storage.longzu_longhuang) return;
                                    if (Array.isArray(skill)) {
                                        for (var i = 0; i < skill.length; i++) {
                                            this.addSkill(skill[i]);
                                        }
                                    } else {
                                        if (this.skills.includes(skill)) return;
                                        var info = lib.skill[skill];
                                        if (!info) return;
                                        if (!nobroadcast) {
                                            game.broadcast(
                                                function (player, skill) {
                                                    player.skills.add(skill);
                                                },
                                                this,
                                                skill
                                            );
                                        }
                                        this.skills.add(skill);
                                        this.addSkillTrigger(skill);
                                        if (this.awakenedSkills.includes(skill)) {
                                            this.awakenSkill(skill);
                                            return;
                                        }
                                        if (info.init2 && !_status.video) {
                                            info.init2(this, skill);
                                        }
                                        if (info.mark) {
                                            if (info.mark == 'card' && get.itemtype(this.storage[skill]) == 'card') {
                                                this.markSkill(skill, null, this.storage[skill]);
                                            } else if (info.mark == 'card' && get.itemtype(this.storage[skill]) == 'cards') {
                                                this.markSkill(skill, null, this.storage[skill][0]);
                                            } else if (info.mark == 'image') {
                                                this.markSkill(skill, null, ui.create.card(null, 'noclick').init([null, null, skill]));
                                            } else if (info.mark == 'character') {
                                                var intro = info.intro.content;
                                                if (typeof intro == 'function') {
                                                    intro = intro(this.storage[skill], this);
                                                } else if (typeof intro == 'string') {
                                                    intro = intro.replace(/#/g, this.storage[skill]);
                                                    intro = intro.replace(/&/g, get.cnNumber(this.storage[skill]));
                                                    intro = intro.replace(/\$/g, get.translation(this.storage[skill]));
                                                }
                                                var caption;
                                                if (typeof info.intro.name == 'function') {
                                                    caption = info.intro.name(this.storage[skill], this);
                                                } else if (typeof info.intro.name == 'string') {
                                                    caption = info.name;
                                                } else {
                                                    caption = get.translation(skill);
                                                }
                                                this.markSkillCharacter(skill, this.storage[skill], caption, intro);
                                            } else {
                                                this.markSkill(skill);
                                            }
                                        }
                                    }
                                    if (checkConflict) this.checkConflict();
                                    return skill;
                                };
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        current.addSkill = player.addSkill;
                                    }
                                });
                            },
                            content() { },
                        },
                        longzu_nixing: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'phaseAfter',
                            },
                            _priority: -1,
                            nobracket: true,
                            forced: true,
                            content() {
                                'step 0';
                                event.cards = get.cards(3);
                                player.showCards(event.cards);
                                ('step 1');
                                var gained = [];
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        var suit = i.suit;
                                        if (suit && !player.countCards('h', { suit: suit })) {
                                            gained.push(i);
                                        }
                                    }
                                player.gain(gained, 'gain2');
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        longzu_disable: {
                            audio: 'hunzi',
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            nobracket: true,
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            filter(event, player) {
                                return event.source && event.source != player && !player.storage.longzu_disable2;
                            },
                            content() {
                                if (!player.storage.longzu_disable2)
                                    lib.skill.longzu_disable2 = {
                                        group: 'longzu_hunzidie',
                                        nobracket: true,
                                        forced: true,
                                        audio: 'hunzi',
                                        derivation: ['reyingzi', 'yinghun'],
                                        popup: 'hunzi',
                                        trigger: {
                                            player: 'phaseBeginStart',
                                        },
                                        filter(event, player) {
                                            return player.hp == 1;
                                        },
                                        forced: true,
                                        _priority: 3,
                                        content() {
                                            if (player.name != 'longzu_female') player.loseMaxHp();
                                            game.countPlayer(function (current) {
                                                if (current.name == 'longzu_male' || current.name == 'longzu_female') {
                                                    current.say('看着吧,这就是魂姿的...不,这不是魂姿,这是笨姿的力量!');
                                                    current.popup('反刺');
                                                }
                                            });
                                            player.addSkill('reyingzi');
                                            player.addSkill('yinghun');
                                        },
                                        ai: {
                                            threaten(player, target) {
                                                if (target.hp == 1) return 2;
                                                return 0.5;
                                            },
                                            effect: {
                                                target(card, player, target) {
                                                    if (!target.hasFriend()) return;
                                                    if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                                },
                                            },
                                        },
                                    };
                                for (var i = 0; i < trigger.source.skills.length; i++) {
                                    lib.skill[trigger.source.skills[i]] = {
                                        group: 'longzu_hunzidie',
                                        nobracket: true,
                                        superCharlotte: true,
                                        charlotte: true,
                                        fixed: true,
                                        forced: true,
                                        audio: 'hunzi',
                                        derivation: ['reyingzi', 'yinghun'],
                                        popup: 'hunzi',
                                        trigger: {
                                            player: 'phaseBeginStart',
                                        },
                                        /* filter:function (event,player){
                                             return player.hp==1;
                                         },*/
                                        forced: true,
                                        _priority: 3,
                                        content() {
                                            if (player.name != 'longzu_female') player.loseMaxHp();
                                            game.countPlayer(function (current) {
                                                if (current.name == 'longzu_male' || current.name == 'longzu_female') {
                                                    current.say('看着吧,这就是魂姿的...不,这不是魂姿,这是笨姿的力量!');
                                                    current.popup('反刺');
                                                }
                                            });
                                            player.addSkill('reyingzi');
                                            player.addSkill('yinghun');
                                        },
                                        ai: {
                                            threaten(player, target) {
                                                if (target.hp == 1) return 2;
                                                return 0.5;
                                            },
                                            maixie: true,
                                            effect: {
                                                target(card, player, target) {
                                                    if (!target.hasFriend()) return;
                                                    if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                                },
                                            },
                                        },
                                    };
                                    if (trigger.source.maxHp == Infinity) {
                                        trigger.source.maxHp = 5;
                                    }
                                    lib.translate[trigger.source.skills[i]] = '这不是魂姿';
                                    lib.translate[trigger.source.skills[i] + '_info'] = '锁定技,回合开始时,你失去1点体力上限,获得技能【英姿】,【英魂】';
                                    trigger.source.storage = {};
                                    trigger.source.update();
                                }
                            },
                        },
                        longzu_hunzidie: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            popup: false,
                            trigger: {
                                player: 'dieBegin',
                            },
                            filter(event, player) {
                                return player.maxHp == 0;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current.name == 'longzu_male' || current.name == 'longzu_female') {
                                        current.say('看着吧,这就是魂姿的...不,这不是魂姿,这是笨姿的力量!');
                                        trigger.source = current;
                                    }
                                });
                            },
                        },
                        longzu_disable2: {
                            audio: 'hunzi',
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            nobracket: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            content() {
                                'step 0';
                                var 魏 = ['jieming', 'jianxiong', 'tiandu'].randomGet();
                                var 蜀 = ['rende', 'jizhi', 'guanxing'].randomGet();
                                var 吴 = ['jiang', 'lianying', 'keji'].randomGet();
                                var 群 = ['benghuai', 'wushuang', 'guidao', 'luanji'].randomGet();
                                game.log('魏国技能:', 魏);
                                game.log('蜀国技能:', 蜀);
                                game.log('吴国技能:', 吴);
                                game.log('群雄技能:', 群);
                                game.countPlayer(function (current) {
                                    if (current != player && current.skills.length) {
                                        var 随机 = current.skills.randomGet();
                                        if (current.group == 'shu') {
                                            var a = [魏, 蜀, 吴, 群].randomGet();
                                            lib.skill[随机] = lib.skill[a];
                                        }
                                        if (current.group == 'qun') {
                                            var b = [魏, 蜀, 吴, 群].randomGet();
                                            lib.skill[随机] = lib.skill[b];
                                        }
                                        if (current.group == 'wei') {
                                            var c = [魏, 蜀, 吴, 群].randomGet();
                                            lib.skill[随机] = lib.skill[c];
                                        }
                                        if (current.group == 'wu') {
                                            var d = [魏, 蜀, 吴, 群].randomGet();
                                            lib.skill[随机] = lib.skill[d];
                                        }
                                        if (current.group != 'qun' && current.group != 'wei' && current.group != 'shu' && current.group != 'wu') {
                                            lib.skill[随机] = lib.skill[群];
                                        }
                                        if (player != current && current.skills.length == 0) {
                                            current.skills = a;
                                        }
                                    }
                                });
                                ('step 1');
                                player.storage.longzu_disable2 = true;
                                lib.skill.longzu_disable = lib.skill.ganglie;
                            },
                        },
                        longzu_shenpan1: {
                            audio: 'ext:龙族:2',
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            nobracket: true,
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source != player && !event.source.storage.longzu_longwang && !event.source.storage.longzu_longhuang;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                'step 0';
                                trigger.source.loseMaxHp(1);
                                ('step 1');
                                trigger.source.damage('fire')._triggered = null;
                                game.log('一花一世界,一叶一追寻,一曲一场叹,一生为一人');
                            },
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        longzu_shenpan: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            init(player) {
                                game.countPlayer(function (current) {
                                    if (current.storage.longzu_Sakura) {
                                        longzu.lzaddSkill(player, 'longzu_shenpan1');
                                        longzu.lzremoveSkill(player, 'longzu_shenpan2');
                                        ui.background.setBackgroundImage('extension/龙族/image/love.jpg');
                                    }
                                    if (!current.storage.longzu_Sakura) {
                                        longzu.lzaddSkill(player, 'longzu_shenpan2');
                                    }
                                });
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                trigger.player.loseMaxHp(1);
                                game.log('孤单不是与生俱来,而是由你爱上一个人的那一刻开始');
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        longzu_shenpan2: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            nobracket: true,
                            frequent(event) {
                                return true;
                            },
                            filter(event, player) {
                                return !player.hasSkill('longzu_shenpan1');
                            },
                            content() {
                                'step 0';
                                ui.background.setBackgroundImage('extension/龙族/image/love.jpg');
                                ('step 1');
                                player.loseHp(1);
                                longzu.lzaddTempSkill(player, 'longzu_shenpan1', { player: 'phaseBegin' });
                            },
                        },
                        longzu_初代: {
                            trigger: {
                                player: 'recoverBegin',
                            },
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        技能修改: {
                            trigger: {
                                global: 'useSkillEnd',
                            },
                            nobracket: true,
                            content() {
                                'step 0';
                                var str = lib.translate[event.skill + '_info'];
                                str.replace('出牌', '弃牌');
                            },
                        },
                        改进死侍: {
                            audio: 'duanchang',
                            trigger: {
                                player: 'dieBegin',
                            },
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            popup: true,
                            silent: true,
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source != player && (event.source.hasMainCharacter() || event.source.hasViceCharacter());
                            },
                            content() {
                                'step 0';
                                if (!trigger.source.hasViceCharacter()) {
                                    event._result = { control: '主将' };
                                } else if (!trigger.source.hasMainCharacter()) {
                                    event._result = { control: '副将' };
                                } else {
                                    player
                                        .chooseControl('主将', '副将', function () {
                                            return Math.random() < 0.5 ? '主将' : '副将';
                                        })
                                        .set('prompt', '令' + get.translation(trigger.source) + '失去一张武将牌的所有技能');
                                }
                                ('step 1');
                                var skills;
                                if (result.control == '主将') {
                                    trigger.source.showCharacter(0);
                                    game.broadcastAll(function (player) {
                                        player.node.avatar.classList.add('disabled');
                                    }, trigger.source);
                                    skills = lib.character[trigger.source.name][3];
                                    game.log(trigger.source, '失去了主将技能');
                                } else {
                                    trigger.source.showCharacter(1);
                                    game.broadcastAll(function (player) {
                                        player.node.avatar2.classList.add('disabled');
                                    }, trigger.source);
                                    skills = lib.character[trigger.source.name2][3];
                                    game.log(trigger.source, '失去了副将技能');
                                }
                                var list = [];
                                for (var i = 0; i < skills.length; i++) {
                                    list.add(skills[i]);
                                    var info = lib.skill[skills[i]];
                                    if (typeof info.derivation == 'string') {
                                        list.add(info.derivation);
                                    } else if (Array.isArray(info.derivation)) {
                                        list.addArray(info.derivation);
                                    }
                                }
                                trigger.source.disableSkill('gzduanchang_disable', list);
                                trigger.source.syncSkills();
                                player.line(trigger.source, 'green');
                            },
                            logTarget: 'source',
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 0.2;
                                    return 1.5;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (!target.hasFriend()) return;
                                        if (target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -2];
                                    },
                                },
                            },
                            forced: true,
                        },
                        longzu_tianyan: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            mark: true,
                            forced: true,
                            nobracket: true,
                            intro: {
                                mark(dialog, content, player) {
                                    var tnum = 0,
                                        snum = 0,
                                        snnum = 0,
                                        jnum = 0,
                                        wxnum = 0;
                                    var tnum1 = 0,
                                        snum1 = 0,
                                        snnum1 = 0,
                                        jnum1 = 0,
                                        wxnum1 = 0;
                                    var Playertnum = 0,
                                        Playersnum = 0,
                                        Playersnnum = 0,
                                        Playerjnum = 0,
                                        Playerwxnum = 0;
                                    var zhutnum = 0,
                                        zhusnum = 0,
                                        zhusnnum = 0,
                                        zhujnum = 0,
                                        zhuwxnum = 0;
                                    var zhongtnum = 0,
                                        zhongsnum = 0,
                                        zhongsnnum = 0,
                                        zhongjnum = 0,
                                        zhongwxnum = 0;
                                    var fantnum = 0,
                                        fansnum = 0,
                                        fansnnum = 0,
                                        fanjnum = 0,
                                        fanwxnum = 0;
                                    var neitnum = 0,
                                        neisnum = 0,
                                        neisnnum = 0,
                                        neijnum = 0,
                                        neiwxnum = 0;
                                    for (var i of game.players) {
                                        var target = i;
                                        if (get.mode() == 'identity') {
                                            if (target == game.zhu) {
                                                zhutnum += target.countCards('h', 'tao');
                                                zhujnum += target.countCards('h', 'jiu');
                                                zhusnnum += target.countCards('h', 'shan');
                                                zhusnum += target.countCards('h', 'sha');
                                                zhuwxnum += target.countCards('h', 'wuxie');
                                            }
                                            if (target.identity == 'zhong') {
                                                zhongtnum += target.countCards('h', 'tao');
                                                zhongjnum += target.countCards('h', 'jiu');
                                                zhongsnnum += target.countCards('h', 'shan');
                                                zhongsnum += target.countCards('h', 'sha');
                                                zhongwxnum += target.countCards('h', 'wuxie');
                                            }
                                            if (target.identity == 'fan') {
                                                fantnum += target.countCards('h', 'tao');
                                                fanjnum += target.countCards('h', 'jiu');
                                                fansnnum += target.countCards('h', 'shan');
                                                fansnum += target.countCards('h', 'sha');
                                                fanwxnum += target.countCards('h', 'wuxie');
                                            }
                                            if (target.identity == 'nei') {
                                                neitnum += target.countCards('h', 'tao');
                                                neijnum += target.countCards('h', 'jiu');
                                                neisnnum += target.countCards('h', 'shan');
                                                neisnum += target.countCards('h', 'sha');
                                                neiwxnum += target.countCards('h', 'wuxie');
                                            }
                                            for (var a = 0; a < target.skills.length; a++) {
                                                var damadd = 0,
                                                    damadd2 = 0;
                                                var 我方回复, 我方无懈;
                                                if (player == game.zhu || player.identity == 'zhong') {
                                                    我方回复 = zhutnum + zhongtnum;
                                                    我方无懈 = zhuwxnum + zhongwxnum;
                                                }
                                                if (player.identity == 'fan') {
                                                    我方回复 = fantnum;
                                                    我方无懈 = fanwxnum;
                                                }
                                                if (player.identity == 'nei') {
                                                    我方回复 = neitnum;
                                                    我方无懈 = neiwxnum;
                                                }
                                            }
                                        }
                                        if (player != target) {
                                            tnum += target.countCards('h', 'tao');
                                            jnum += target.countCards('h', 'jiu');
                                            snnum += target.countCards('h', 'shan');
                                            snum += target.countCards('h', 'sha');
                                            wxnum += target.countCards('h', 'wuxie');
                                        }
                                        if (game.me == target) {
                                            tnum1 += target.countCards('h', 'tao');
                                            jnum1 += target.countCards('h', 'jiu');
                                            snnum1 += target.countCards('h', 'shan');
                                            snum1 += target.countCards('h', 'sha');
                                            wxnum1 += target.countCards('h', 'wuxie');
                                        }
                                    }
                                    if (get.mode() != 'identity' && player == game.me) {
                                        dialog.addText('其他人一共有' + tnum + '张!【桃】,' + jnum + '张【酒】,' + snnum + '张【闪】,' + snum + '张【杀】,' + wxnum + '张【无懈可击】');
                                    }
                                    if (player != game.me) {
                                        dialog.addText('你一共有' + tnum1 + '张【桃】,' + jnum1 + '张【酒】,' + snnum1 + '张【闪】,' + snum1 + '张【杀】,' + wxnum1 + '张【无懈可击】,别看了就是你!');
                                    }
                                    if (get.mode() == 'identity' && player == game.me) {
                                        dialog.addText('其他人一共有' + tnum + '张【桃】,' + jnum + '张【酒】,' + snnum + '张【闪】,' + snum + '张【杀】,' + wxnum + '张【无懈可击】;我方有' + 我方回复 + '张【桃】,我方有' + 我方无懈 + '张【无懈可击】');
                                    }
                                },
                            },
                        },
                        longzu_yizhi: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'equipBegin',
                            },
                            forced: true,
                            nobracket: true,
                            async content(event, trigger, player) {
                                trigger.cancel();
                                const card = trigger.cards[0];
                                if (card) {
                                    const vcard = new lib.element.VCard(card);
                                    const cardSymbol = Symbol('card');
                                    card.cardSymbol = cardSymbol;
                                    card[cardSymbol] = vcard;
                                    player.vcardsMap?.equips.push(vcard);
                                    player.node.equips.appendChild(card);
                                    card.style.transform = '';
                                    card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                                }
                                const info = get.info(card, false);
                                if (info.skills) {
                                    for (const i of info.skills) {
                                        player.addSkillTrigger(i);
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (get.type(card) == 'equip') return [1, 10];
                                    },
                                },
                            },
                        },
                        longzu_yizhi2: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            nobracket: true,
                            audio: 'kongcheng',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            _priority: 15,
                            init(player) {
                                player.disableJudge();
                                setInterval(function () {
                                    if (player.isDead() == false && player != game.me) {
                                        player.node.hp.hide();
                                        player.node.equips.hide();
                                        player.node.count.innerHTML = '0';
                                    } else {
                                        player.node.hp.show();
                                        player.node.equips.show();
                                    }
                                }, 1000);
                                player.countCards = function (arg1, arg2) {
                                    if (!arg2) {
                                        if (arg1 == 'h') {
                                            return 0;
                                        } else arg1 = arg1.replace(/h/, '');
                                    }
                                    return this.getCards(arg1, arg2).length;
                                };
                                player.countDiscardableCards = function (player, arg1, arg2) {
                                    if (arg1 == 'h') {
                                        return 0;
                                    } else arg1 = arg1.replace(/h/, '');
                                    return this.getDiscardableCards(player, arg1, arg2).length;
                                };
                                player.countGainableCards = function (player, arg1, arg2) {
                                    if (arg1 == 'h') {
                                        return 0;
                                    } else arg1 = arg1.replace(/h/, '');
                                    return this.getGainableCards(player, arg1, arg2).length;
                                };
                            },
                            check(event, player) {
                                return get.effect(event.target, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                return player.countCards('h') == 0 && event.card.name == 'sha';
                            },
                            content() {
                                trigger.cancel();
                            },
                            mod: {
                                maxHandcard(player) {
                                    return Infinity;
                                },
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (target.countCards('h') == 0 && card.name == 'sha') return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        longzu_jingtong: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                player.removeAdditionalSkill('longzu_jingtong');
                                var List = ['复制手牌', '复制技能', '取消'];
                                if (target.storage.longzu_jingtong) List.remove('复制手牌');
                                if (target.skills.length == 0) List.remove('复制技能');
                                player
                                    .chooseControl(List, function () {
                                        if (target.countCards('h') == 0 && target.name == 'huaxiong') {
                                            return '取消';
                                        }
                                        if (target.storage.longzu_jingtong) {
                                            return '复制技能';
                                        }
                                        if (target.skills.length == 0) {
                                            return '复制手牌';
                                        }
                                        if (target.countCards('h') == 0 && target.name != 'huaxiong') {
                                            return '复制技能';
                                        }
                                        if (player.countCards('h') <= 2 && target.countCards('h') > 0) {
                                            return '复制手牌';
                                        }
                                        return '复制技能';
                                    })
                                    .set('prompt', '选择复制其手牌或复制其技能');
                                ('step 1');
                                if (result.control == '取消' && target.storage.longzu_jingtong && target.skills.length == 0) {
                                    player.draw();
                                }
                                if (result.control == '复制手牌') {
                                    var hs = target.get('h');
                                    if (hs.length && !target.storage.longzu_jingtong) {
                                        var hs2 = [];
                                        for (var i = 0; i < hs.length; i++) {
                                            hs2.push(game.createCard(hs[i].name, hs[i].suit, hs[i].number));
                                        }
                                        player.gain(hs2, 'draw');
                                        game.log(player, '获得了', target, '手牌的镜像');
                                        if (target.countCards('h') != 0) target.storage.longzu_jingtong = true;
                                    }
                                }
                                if (result.control == '复制技能') {
                                    var skill1 = target.skills.randomGet();
                                    player.addAdditionalSkill('longzu_jingtong', skill1);
                                    player.popup(skill1);
                                    game.log(player, '获得了', skill1);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) < 0) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        longzu_qiyue: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            init(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                player.storage.longzu_qiyue = 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.longzu_qiyue += 1;
                                if (player.storage.longzu_qiyue <= 2) {
                                    player.draw(1);
                                    player.say('这一路上我们将不彼此抛弃,不彼此出卖,直到死亡的尽头');
                                    trigger.untrigger();
                                    trigger.finish();
                                }
                                ('step 1');
                                if (player.storage.longzu_qiyue > 2) {
                                    trigger.num++;
                                    game.log('零号:如果非要爱什么才能让你有信心活下去的话,不如爱我好了');
                                    game.log('零:好啊……');
                                    player.draw(trigger.num);
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                                },
                            },
                        },
                        士兵1: {},
                        longzu_改写血统2: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.name2 && (player.storage.longzu_lumingze || player.storage.longzu_Sakura || player == game.Sakura);
                            },
                            content() {
                                longzu.GivePlayer(player, target);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) < 0 && (player.name2 == 'gz_shibing' || player.name2 == '士兵')) return 1;
                                        if (get.attitude(player, target) > 2 && player.name2 != 'gz_shibing' && player.name2 != '士兵') return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        longzu_改写血统3: {
                            trigger: {
                                global: 'equipBegin',
                            },
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            nobracket: true,
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            init(player) {
                                lib.skill.chitu = {
                                    nobracket: true,
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance - 1;
                                        },
                                    },
                                };
                                lib.translate.chitu = '赤兔';
                                lib.character.chitu = ['male', 'long', 4, ['chitu'], ['ext:龙族/image/chitu.png']];
                                lib.skill.dawan = {
                                    nobracket: true,
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance - 1;
                                        },
                                    },
                                };
                                lib.translate.dawan = '大宛';
                                lib.character.dawan = ['male', 'long', 4, ['dawan'], ['ext:龙族/image/dawan.png']];
                                lib.skill.zixin = {
                                    nobracket: true,
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance - 1;
                                        },
                                    },
                                };
                                lib.translate.zixin = '紫骍';
                                lib.character.zixin = ['male', 'long', 4, ['zixin'], ['ext:龙族/image/zixin.png']];
                                lib.skill.jingfanma = {
                                    nobracket: true,
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance - 1;
                                        },
                                    },
                                };
                                lib.translate.jingfanma = '惊帆';
                                lib.character.jingfanma = ['male', 'long', 4, ['jingfanma'], ['ext:龙族/image/jingfanma.png']];
                                lib.skill.dilu = {
                                    nobracket: true,
                                    mod: {
                                        globalTo(from, to, distance) {
                                            return distance + 1;
                                        },
                                    },
                                };
                                lib.translate.dilu = '的卢';
                                lib.character.dilu = ['male', 'long', 4, ['dilu'], ['ext:龙族/image/dilu.png']];
                                lib.skill.zhuahuang = {
                                    nobracket: true,
                                    mod: {
                                        globalTo(from, to, distance) {
                                            return distance + 1;
                                        },
                                    },
                                };
                                lib.translate.zhuahuang = '爪黄飞电';
                                lib.character.zhuahuang = ['male', 'long', 4, ['zhuahuang'], ['ext:龙族/image/zhuahuang.png']];
                                lib.skill.jueying = {
                                    nobracket: true,
                                    mod: {
                                        globalTo(from, to, distance) {
                                            return distance + 1;
                                        },
                                    },
                                };
                                lib.translate.jueying = '绝影';
                                lib.character.jueying = ['male', 'jueying', 4, ['jueying'], ['ext:龙族/image/jueying.png']];
                                lib.skill.hualiu = {
                                    nobracket: true,
                                    mod: {
                                        globalTo(from, to, distance) {
                                            return distance + 1;
                                        },
                                    },
                                };
                                lib.translate.hualiu = '骅骝';
                                lib.character.hualiu = ['male', 'long', 4, ['hualiu'], ['ext:龙族/image/hualiu.png']];
                                lib.skill.baiyin = { nobracket: true, group: 'baiyin_skill' };
                                lib.translate.baiyin = '白银狮子';
                                lib.character.baiyin = ['male', 'long', 4, ['baiyin'], ['ext:龙族/image/baiyin.png']];
                                lib.skill.renwang = { nobracket: true, group: 'renwang_skill' };
                                lib.translate.renwang = '仁王盾';
                                lib.character.renwang = ['male', 'long', 4, ['renwang'], ['ext:龙族/image/renwang.png']];
                                lib.skill.hanbing = { nobracket: true, group: 'hanbing_skill' };
                                lib.translate.hanbing = '寒冰箭';
                                lib.character.hanbing = ['male', 'long', 4, ['hanbing'], ['ext:龙族/image/hanbing.png']];
                                lib.skill.zhuge = { nobracket: true, group: 'zhuge_skill' };
                                lib.translate.zhuge = '诸葛连弩';
                                lib.character.zhuge = ['male', 'long', 4, ['zhuge'], ['ext:龙族/image/zhuge.png']];
                                lib.skill.cixiong = { nobracket: true, group: 'cixiong_skill' };
                                lib.translate.cixiong = '雌雄双股剑';
                                lib.character.cixiong = ['male', 'long', 4, ['cixiong'], ['ext:龙族/image/cixiong.png']];
                                lib.skill.qinggang = { nobracket: true, group: 'qinggang_skill' };
                                lib.translate.qinggang = '青釭剑';
                                lib.character.qinggang = ['male', 'long', 4, ['qinggang'], ['ext:龙族/image/qinggang.png']];
                                lib.skill.qinglong = { nobracket: true, group: ['qinglong_skill', 'qinglong_guozhan'] };
                                lib.translate.qinglong = '青龙刀';
                                lib.character.baiyin = ['male', 'long', 4, ['qinglong'], ['ext:龙族/image/qinglong.png']];
                                lib.skill.zhangba = { nobracket: true, group: 'zhangba_skill' };
                                lib.translate.zhangba = '丈八蛇矛';
                                lib.character.zhangba = ['male', 'long', 4, ['zhangba'], ['ext:龙族/image/zhangba.png']];
                                lib.skill.guanshi = { nobracket: true, group: 'guanshi_skill' };
                                lib.translate.guanshi = '贯石斧';
                                lib.character.guanshi = ['male', 'long', 4, ['guanshi'], ['ext:龙族/image/guanshi.png']];
                                lib.skill.fangtian = { nobracket: true, group: 'fangtian_skill' };
                                lib.translate.fangtian = '方天画戟';
                                lib.character.fangtian = ['male', 'long', 4, ['fangtian'], ['ext:龙族/image/fangtian.png']];
                                lib.skill.qilin = { nobracket: true, group: 'qilin_skill' };
                                lib.translate.qilin = '麒麟弓';
                                lib.character.qilin = ['male', 'long', 4, ['qilin'], ['ext:龙族/image/qilin.png']];
                                lib.skill.zhungangshuo = {
                                    nobracket: true,
                                    trigger: { player: 'shaBegin' },
                                    logTarget: 'target',
                                    filter(event, player) {
                                        return event.player.countCards('h') || player.countCards('h');
                                    },
                                    check(event, player) {
                                        var target = event.target;
                                        if (get.attitude(player, target) >= 0) return false;
                                        if (
                                            player.hasCard(function (card) {
                                                return get.value(card) >= 8;
                                            })
                                        ) {
                                            return false;
                                        }
                                        var n1 = event.target.countCards('h');
                                        return n1 > 0 && n1 <= player.countCards('h');
                                    },
                                    content() {
                                        'step 0';
                                        trigger.target.discardPlayerCard('h', player, true);
                                        ('step 1');
                                        player.discardPlayerCard('h', trigger.target, true);
                                    },
                                };
                                lib.translate.zhungangshuo = '衠钢槊';
                                lib.character.zhungangshuo = ['male', 'long', 4, ['zhungangshuo'], ['ext:龙族/image/zhungangshuo.png']];
                                lib.skill.yinyueqiang = { nobracket: true, group: 'yinyueqiang' };
                                lib.translate.yinyueqiang = '银月枪';
                                lib.character.yinyueqiang = ['male', 'long', 4, ['yinyueqiang'], ['ext:龙族/image/yinyueqiang.png']];
                                lib.skill.zhuque = { nobracket: true, group: 'zhuque_skill' };
                                lib.translate.zhuque = '朱雀羽扇';
                                lib.character.zhuque = ['male', 'long', 4, ['zhuque'], ['ext:龙族/image/zhuque.png']];
                                lib.skill.qibao = {
                                    nobracket: true,
                                    trigger: { source: 'damageBegin' },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.player.isHealthy();
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.name == 'sha') return true;
                                            return false;
                                        },
                                        effect: {
                                            player(card, player, target) {
                                                if (card.name == 'sha' && target.isHealthy() && get.attitude(player, target) > 0) {
                                                    return [1, -2];
                                                }
                                            },
                                        },
                                    },
                                };
                                lib.translate.qibaodao = '七宝刀';
                                lib.character.qibaodao = ['male', 'long', 4, ['qibao'], ['ext:龙族/image/qibaodao.png']];
                                lib.skill.wuliu = { nobracket: true, group: 'wuliu_skill' };
                                lib.translate.wuliu = '吴六剑';
                                lib.character.wuliu = ['male', 'long', 4, ['wuliu'], ['ext:龙族/image/wuliu.png']];
                                lib.skill.tengjia = { nobracket: true, group: ['tengjia1', 'tengjia2', 'tengjia3'] };
                                lib.translate.tengjia = '藤甲';
                                lib.character.tengjia = ['male', 'long', 4, ['tengjia'], ['ext:龙族/image/tengjia.png']];
                                lib.skill.guding = { nobracket: true, group: 'guding_skill' };
                                lib.translate.guding = '古锭刀';
                                lib.character.guding = ['male', 'long', 4, ['guding'], ['ext:龙族/image/guding.png']];
                                lib.skill.sanjian = { nobracket: true, group: 'sanjian_skill' };
                                lib.translate.sanjian = '三尖两刃刀';
                                lib.character.sanjian = ['male', 'long', 4, ['sanjian'], ['ext:龙族/image/sanjian.png']];
                                lib.skill.feilongduofeng = { nobracket: true, group: ['feilongduofeng', 'feilongduofeng3'] };
                                lib.translate.feilongduofeng = '飞龙夺凤';
                                lib.character.feilongduofeng = ['male', 'long', 4, ['feilongduofeng'], ['ext:龙族/image/feilongduofeng.png']];
                                lib.skill.bagua = { nobracket: true, group: 'bagua_skill' };
                                lib.translate.bagua = '八卦阵';
                                lib.character.bagua = ['male', 'long', 4, ['bagua'], ['ext:龙族/image/bagua.png']];
                                var 装备1 = ['zhuge', 'cixiong', 'hanbing', 'guding', 'feilongduofeng', 'wuliu', 'qibaodao', 'qinggang', 'sanjian', 'zhangba', 'qinglong', 'zhungangshuo', 'yinyueqiang', 'guanshi', 'zhuque', 'fangtian', 'qilin'];
                                var 装备2 = ['baiyin', 'bagua', 'renwang', 'tengjia'];
                                var 装备3 = ['jueying', 'hualiu', 'dilu', 'zhuahuang'];
                                var 装备4 = ['zixing', 'dawan', 'jingfanma', 'chitu'];
                                player.storage.装备1 = ['zhuge', 'cixiong', 'hanbing', 'guding', 'feilongduofeng', 'wuliu', 'qibaodao', 'qinggang', 'sanjian', 'zhangba', 'qinglong', 'zhungangshuo', 'yinyueqiang', 'guanshi', 'zhuque', 'fangtian', 'qilin'];
                                player.storage.装备2 = ['baiyin', 'bagua', 'renwang', 'tengjia'];
                                player.storage.装备3 = ['jueying', 'hualiu', 'dilu', 'zhuahuang'];
                                player.storage.装备4 = ['zixing', 'dawan', 'jingfanma', 'chitu'];
                                player.storage.longzu_改写血统 = ['zhuge', 'cixiong', 'hanbing', 'guding', 'feilongduofeng', 'wuliu', 'qibaodao', 'qinggang', 'sanjian', 'zhangba', 'qinglong', 'zhungangshuo', 'yinyueqiang', 'guanshi', 'zhuque', 'fangtian', 'qilin', 'baiyin', 'bagua', 'renwang', 'tengjia', 'jueying', 'hualiu', 'dilu', 'zhuahuang', 'zixing', 'dawan', 'jingfanma', 'chitu'];
                                player.storage.longzu_改写血统remove = [];
                            },
                            filter(event, player) {
                                if (event.player == player || event.player.storage.longzu_equipinit) return false;
                                if (player.storage.longzu_改写血统 && !player.storage.longzu_改写血统.includes(event.card.name)) {
                                    return false;
                                }
                                if (get.subtype(event.card) == 'equip1' && player.storage.装备1 && !player.storage.装备1.includes(event.card.name)) {
                                    return false;
                                }
                                if (get.subtype(event.card) == 'equip2' && player.storage.装备2 && !player.storage.装备2.includes(event.card.name)) {
                                    return false;
                                }
                                if (get.subtype(event.card) == 'equip3' && player.storage.装备3 && !player.storage.装备3.includes(event.card.name)) {
                                    return false;
                                }
                                if (get.subtype(event.card) == 'equip4' && player.storage.装备4 && !player.storage.装备4.includes(event.card.name)) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                trigger.player.storage = {};
                                trigger.player.uninit();
                                longzu.init(trigger.player, trigger.card.name);
                                trigger.player.storage.longzu_equipinit = true;
                            },
                        },
                        longzu_huangdi: {
                            forced: true,
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return player.isMinHp(true);
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                norespond: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'norespond' && Array.isArray(arg)) {
                                        if (!arg[1].storage.longzu_longwang && !arg[1].storage.longzu_longhuang) return true;
                                    }
                                    return false;
                                },
                            },
                        },
                        longzu_wmsq: {
                            audio: 'ext:龙族:2',
                            forced: true,
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                player.recover(1);
                            },
                            ai: {
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) return [1, 0.55];
                                    },
                                },
                            },
                        },
                        longzu_sphuangdi: {
                            nobracket: true,
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                for (var i of game.players) {
                                    var self = i;
                                    if (self != player) {
                                        self.skills.add('longzu_sphuangdi2');
                                    }
                                }
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            group: 'longzu_sphuangdi_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    content() {
                                        for (var i of game.players) {
                                            var self = i;
                                            if (self != player) {
                                                self.skills.remove('longzu_sphuangdi2');
                                            }
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        longzu_lianyou: {
                            mark: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            intro: {
                                mark(dialog, content, player) {
                                    var hs = player.getCards('h');
                                    if (hs && hs.length) {
                                        if (player == game.me || player.isUnderControl() || game.me.hasSkill('longzu_lianyou1') || game.me.hasSkill('longzu_xixielian')) {
                                            dialog.addSmall(hs);
                                        } else {
                                            dialog.addText('共有' + hs.length + '张手牌');
                                        }
                                    } else if (!hs.length) {
                                        dialog.addText('无手牌');
                                    }
                                },
                                content(content, player) {
                                    var hs = player.getCards('h');
                                    if (hs && hs.length) {
                                        if (player == game.me || player.isUnderControl() || game.me.hasSkill('longzu_lianyou1') || game.me.hasSkill('longzu_xixielian')) {
                                            return get.translation(hs);
                                        } else {
                                            return '共有' + hs.length + '张手牌';
                                        }
                                    } else if (!hs.length) {
                                        return '无手牌';
                                    }
                                },
                            },
                        },
                        longzu_xixielian2: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'useCardToBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                return event.player != player && (type == 'basic' || type == 'trick');
                            },
                            content() {
                                longzu.lzaddTempSkill(trigger.player, 'longzu_lianyou');
                            },
                        },
                        longzu_lianyou1: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init(player) {
                                player.storage.longzu_lianyou = true;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('longzu_lianyou')) {
                                        player.line(current, 'green');
                                        longzu.lzaddTempSkill(current, 'longzu_lianyou');
                                    }
                                });
                            },
                        },
                        longzu_xixielian: {
                            group: ['longzu_xixielian2'],
                            trigger: {
                                source: 'damageEnd',
                            },
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            nobracket: true,
                            content() {
                                player.recover(trigger.num);
                            },
                        },
                        longzu_baoxie2: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            filter(event, player) {
                                return player.storage.longzu_lianyou;
                            },
                            nobracket: true,
                            content() {
                                longzu.lzaddSkill(player, 'longzu_xixielian');
                                longzu.lzremoveSkill(player, 'longzu_lianyou1');
                                player.recover();
                                player.awakenSkill('longzu_baoxie2');
                            },
                        },
                        longzu_renhuang: {
                            trigger: {
                                player: 'equipBegin',
                            },
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return player.num('e', { subtype: 'equip1' }) && get.subtype(event.card) == 'equip1';
                            },
                            async content(event, trigger, player) {
                                trigger.cancel();
                                const card = trigger.cards[0];
                                if (card) {
                                    const vcard = new lib.element.VCard(card);
                                    const cardSymbol = Symbol('card');
                                    card.cardSymbol = cardSymbol;
                                    card[cardSymbol] = vcard;
                                    player.vcardsMap?.equips.push(vcard);
                                    player.node.equips.appendChild(card);
                                    card.style.transform = '';
                                    card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                                }
                                const info = get.info(card, false);
                                if (info.skills) {
                                    for (const i of info.skills) {
                                        player.addSkillTrigger(i);
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (get.subtype(card) == 'equip1') return [1, 10];
                                    },
                                },
                            },
                        },
                        longzu_sp恶魔交易: {
                            nobracket: true,
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init2(player) {
                                if (!player.storage.longzu) {
                                    player.storage.longzu = true;
                                }
                                if (player.name == 'longzu_spSakura' || player.name2 == 'longzu_spSakura' || player.name1 == 'longzu_spSakura') {
                                    game.Sakura = player;
                                }
                            },
                            group: ['longzu_sp恶魔交易1', 'longzu_sp恶魔交易2', 'longzu_sp恶魔交易3', 'longzu_sp恶魔交易4', 'longzu_sp恶魔交易5'],
                        },
                        longzu_sp恶魔交易1: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && player == game.Sakura;
                            },
                            content() {
                                target.draw(2);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (get.attitude(player, target) > 3) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        longzu_sp恶魔交易2: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            nobracket: true,
                            filter(event, player) {
                                return player == game.Sakura;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('longzu_sp恶魔交易2_1')) {
                                        player.line(current, 'green');
                                        longzu.lzaddTempSkill(current, 'longzu_sp恶魔交易2_1');
                                    }
                                });
                            },
                        },
                        longzu_sp恶魔交易2_1: {
                            mark: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            intro: {
                                mark(dialog, content, player) {
                                    var hs = player.getCards('h');
                                    if (hs && hs.length) {
                                        if (player == game.me || player.isUnderControl() || game.me == game.Sakura) {
                                            dialog.addSmall(hs);
                                        } else {
                                            dialog.addText('共有' + hs.length + '张手牌');
                                        }
                                    } else if (!hs.length) {
                                        dialog.addText('无手牌');
                                    }
                                },
                                content(content, player) {
                                    var hs = player.getCards('h');
                                    if (hs && hs.length) {
                                        if (player == game.me || player.isUnderControl() || game.me == game.Sakura) {
                                            return get.translation(hs);
                                        } else {
                                            return '共有' + hs.length + '张手牌';
                                        }
                                    } else if (!hs.length) {
                                        return '无手牌';
                                    }
                                },
                            },
                        },
                        longzu_sp恶魔交易3: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            usable: 1,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            check(event, player) {
                                return get.effect(event.target, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                if (!event.target) return false;
                                if (event.player == player && event.target == player) return false;
                                return player == game.Sakura;
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'trick' && player != target) return 'zeroplayertarget';
                                    },
                                    player(card, player, target, current) {
                                        if (get.type(card) == 'trick' && player != target) return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        longzu_sp恶魔交易4: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.longzu_gathering = false;
                            },
                            filter(event, player) {
                                if (player.storage.longzu_gathering) return false;
                                if (player != game.Sakura) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('longzu_sp恶魔交易4');
                                player.storage.longzu_gathering = true;
                                //player.discard(player.getCards('jh'));
                                if (0 == player.maxHp) {
                                    player.maxHp = 3;
                                    player.update();
                                }
                                ('step 1');
                                if (player.hp < player.maxHp) {
                                    player.hp = player.maxHp;
                                }
                                ('step 2');
                                //player.draw(3);
                                ('step 3');
                                player.link(false);
                                ('step 4');
                                player.turnOver(false);
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player) {
                                    if (player.storage.longzu_gathering) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp == 0) return 10;
                                        if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.longzu_gathering) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        longzu_sp恶魔交易5: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: ['loseEnd', 'changeHp'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player != game.Sakura) return false;
                                return player.countCards('h') < 2;
                            },
                            content() {
                                player.draw(2 - player.countCards('h'));
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh' && 2 == player.countCards('h')) {
                                        return false;
                                    }
                                },
                            },
                        },
                        longzu_现实: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: ['loseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player != game.Sakura && !player.storage.longzu_lumingze && !player.storage.longzu_Sakura) return false;
                                return event.player != _status.currentPhase;
                            },
                            content() {
                                player.recover();
                                player.draw();
                            },
                        },
                        longzu_梦境: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: ['phaseDiscardBegin', 'damageBefore', 'loseHpBefore', 'phaseJudgeBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player != game.Sakura && !player.storage.longzu_lumingze && !player.storage.longzu_Sakura) return false;
                                return event.player == _status.currentPhase;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        longzu_mingzhao: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    return '你的下次伤害乘' + storage;
                                },
                            },
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            _priority: -1,
                            nobracket: true,
                            init(player) {
                                if (!player.storage.longzu_mingzhao) {
                                    player.storage.longzu_mingzhao = 1;
                                }
                            },
                            filter(event, player) {
                                if (!event.target) return false;
                                if (event.player == player && event.target == player) return false;
                                var evt = event.parent;
                                if (player == _status.currentPhase) return false;
                                //if(evt.targets.length>1) return false;
                                if (player.mingzhao2) return false;
                                return Math.random() <= 0.4;
                            },
                            content() {
                                //trigger.cancel();
                                game.log(trigger.card, '此次对', player, '无效');
                                if (!player.storage.longzu_mingzhao) player.storage.longzu_mingzhao = 1;
                                player.storage.longzu_mingzhao += 1;
                                trigger.targets.remove(player);
                                trigger.untrigger();
                                trigger.finish();
                            },
                            group: ['longzu_mingzhao_damage', 'longzu_mingzhao_phase'],
                            subSkill: {
                                damage: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    _priority: -1,
                                    filter(event, player) {
                                        if (!player.storage.longzu_mingzhao || player.storage.longzu_mingzhao <= 1) return false;
                                        return true;
                                    },
                                    content() {
                                        if (trigger.num <= 0) trigger.num = 1;
                                        // if(player.storage.longzu_mingzhao>1){
                                        trigger.num *= player.storage.longzu_mingzhao;
                                        player.storage.longzu_mingzhao = 1;
                                        player.mingzhao2 = true;
                                        // }
                                    },
                                },
                                phase: {
                                    forced: true,
                                    popup: false,
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    _priority: -1,
                                    content() {
                                        // player.mingzhao=0.2;
                                        delete player.mingzhao2;
                                    },
                                },
                            },
                        },
                        longzu_zuozhe1: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: ['useCardEnd', 'respondEnd'],
                            },
                            forced: true,
                            _priority: -1,
                            filter(event, player) {
                                //if(player==event.player) return false;
                                if (!event.cards) return false;
                                if (!event.cards.length) return false;
                                return true;
                            },
                            init(player) {
                                player.addEventListener('click', function () {
                                    if (game.players.length && game.players.length) {
                                        this.draw();
                                        $('<p>效果触发:事件结算后摸一张牌!(特效由Niya友情提供)</p>').logsay({ type: 'warning', sticky: true });
                                    }
                                });
                            },
                            content() {
                                'step 0';
                                if (trigger.player != player) {
                                    var Card = ['sha', 'lebu', 'shandian', 'bingliang', 'caomu'].randomGet();
                                } else {
                                    var Card = ['tao', 'wuzhong', 'jiu', 'yiyi', 'zengbin'].randomGet();
                                }
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        var suit = i.suit;
                                        var number = i.number;
                                        //var card=game.createCard(Card,suit,number,null);
                                        var shan = [suit, number, Card];
                                        var card = i.init(shan);
                                        trigger.player.useCard(card, trigger.player)._triggered = null;
                                    }
                            },
                        },
                        longzu_zuozhe2: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                source: ['damageBegin', 'recoverBegin'],
                            },
                            forced: true,
                            _priority: -1,
                            filter(event, player) {
                                if (player == event.player) return false;
                                if (player.getEquip(event.player.name)) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var suitList = ['spade', 'heart', 'club', 'diamond'].randomGet();
                                var typeList = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].randomGet();
                                var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet();
                                var skills = lib.character[trigger.player.name][3];
                                var card = {
                                    type: 'equip',
                                    subtype: typeList,
                                    image: 'character/' + trigger.player.name,
                                    skills: skills,
                                    distance: {},
                                    filterTarget(card, player, target) {
                                        return target == player;
                                    },
                                    selectTarget: -1,
                                    modTarget: true,
                                    content: lib.element.content.equipCard,
                                    onEquip: [],
                                    onLose: [],
                                    ai: {},
                                };
                                var List = [];
                                if (typeList == 'equip1') {
                                    disList = [1, 2, 3, 4, 5].randomGet();
                                    card.distance.attackFrom = -disList;
                                    List.push('<li>攻击范围:' + disList);
                                }
                                if (typeList == 'equip3') {
                                    card.distance.globalTo = 1;
                                    List.push('<li>防御距离+1');
                                }
                                if (typeList == 'equip4') {
                                    card.distance.globalFrom = -1;
                                    List.push('<li>攻击距离+1');
                                }
                                lib.card[trigger.player.name] = card;
                                if (skills.length) {
                                    for (var i = 0; i < skills.length; i++) {
                                        List.push('<li>' + lib.translate[skills[i]] + '<br>' + lib.translate[skills[i] + '_info']);
                                    }
                                }
                                lib.translate[trigger.player.name + '_info'] = List;
                                player.equip(game.createCard(trigger.player.name, suitList, numberList));
                            },
                        },
                        longzu_装备: {
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'equipBegin',
                            },
                            forced: true,
                            nobracket: true,
                            async content(event, trigger, player) {
                                trigger.cancel();
                                const card = trigger.cards[0];
                                if (card) {
                                    const vcard = new lib.element.VCard(card);
                                    const cardSymbol = Symbol('card');
                                    card.cardSymbol = cardSymbol;
                                    card[cardSymbol] = vcard;
                                    player.vcardsMap?.equips.push(vcard);
                                    player.node.equips.appendChild(card);
                                    card.style.transform = '';
                                    card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                                }
                                const info = get.info(card, false);
                                if (info.skills) {
                                    for (const i of info.skills) {
                                        player.addSkillTrigger(i);
                                    }
                                }
                                const cards = player.getCards('e', { subtype: get.subtype(card) });//没有trigger.card
                                const num = cards.length - 2;
                                if (num > 0) {
                                    const { links } = await player.chooseButton(['选择弃置', cards], num, true).forResult();
                                    if (links.length) {
                                        player.discard(links);
                                    }
                                }
                            },
                            group: 'longzu_装备_phase',
                            subSkill: {
                                phase: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    silent: true,
                                    content() {
                                        'step 0';
                                        player.enableEquip(1);
                                        player.enableEquip(2);
                                        player.enableEquip(3);
                                        player.enableEquip(4);
                                        player.enableEquip(5);
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (get.subtype(card) == 'equip1') return [1, 10];
                                    },
                                },
                            },
                        },
                        longzu_heiri: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            group: ['longzu_heiri_die'],
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseToDiscard(1).set('ai', function (card) {
                                    if (card.name == 'tao') return -10;
                                    if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                    return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                });
                                ('step 1');
                                if (result.bool == false) {
                                    trigger.player.damage();
                                }
                            },
                            subSkill: {
                                die: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    filter(event, player) {
                                        if (player.next || player.previous) return true;
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.next) {
                                            event.next = player.next;
                                        }
                                        if (player.previous) {
                                            event.previous = player.previous;
                                        }
                                        ('step 1');
                                        if (event.next) {
                                            var List1 = [];
                                            for (var i = 0; i < event.next.skills.length; i++) {
                                                List1.push(event.next.skills[i]);
                                            }
                                            for (var i in event.next.additionalSkills) {
                                                event.next.removeAdditionalSkill(i);
                                            }
                                            longzu.lzremoveSkill(event.next, List1);
                                            event.next.checkConflict();
                                            event.next.checkMarks();
                                            game.log(event.next, '失去了所有技能');
                                        }
                                        if (event.previous) {
                                            var List2 = [];
                                            for (var i = 0; i < event.previous.skills.length; i++) {
                                                List2.push(event.previous.skills[i]);
                                            }
                                            for (var i in event.previous.additionalSkills) {
                                                event.previous.removeAdditionalSkill(i);
                                            }
                                            longzu.lzremoveSkill(event.previous, List2);
                                            event.previous.checkConflict();
                                            event.previous.checkMarks();
                                            game.log(event.previous, '失去了所有技能');
                                        }
                                    },
                                },
                            },
                            ai: {
                                threaten: 0.01,
                            },
                        },
                        longzu_weizhuang: {
                            nobracket: true,
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'phaseBegin',
                            },
                            popup: false,
                            filter(event, player) {
                                if (player.storage.longzu_weizhuang) return false;
                                if (!lib.character[player.name] && !lib.character[player.name1] && !lib.character[player.name2]) return false;
                                return true;
                            },
                            content() {
                                var character;
                                lib.character[player.name][3].includes('longzu_weizhuang') ? (character = player.name) : (character = player.name2);
                                if (character) {
                                    var list;
                                    if (_status.connectMode) {
                                        list = get.charactersOL(function (i) {
                                            return true;
                                        });
                                    } else {
                                        list = get.gainableCharacters(function (info) {
                                            return true;
                                        });
                                    }
                                    var name = list.randomGet();
                                    var mhp = player.maxHp;
                                    var hp = player.hp;
                                    player.reinit(character, name, 'nosmooth');
                                    player.hp = hp;
                                    player.maxHp = mhp;
                                    player.storage.longzu_weizhuang = name;
                                    player.storage['longzu_weizhuang2'] = character;
                                    player.addSkill('longzu_weizhuang_show');
                                    player.update();
                                }
                            },
                            subSkill: {
                                show: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.source != event.player;
                                    },
                                    content() {
                                        'step 0';
                                        if (!trigger.player.storage.longzu_longwang && !trigger.player.storage.longzu_longhuang) {
                                            var remove = false;
                                            if (get.mode() == 'guozhan' && trigger.player.name2 && trigger.player.hasViceCharacter()) {
                                                trigger.player.removeCharacter(0);
                                                remove = true;
                                            }
                                            var skills;
                                            if (remove == false) {
                                                if (trigger.player.skills.length) {
                                                    skills = trigger.player.skills.randomGet();
                                                } else if (trigger.player.hiddenSkills.length) {
                                                    skills = trigger.player.hiddenSkills.randomGet();
                                                }
                                                if (lib.skill[skills]) {
                                                    longzu.lzremoveSkill(trigger.player, skills);
                                                    game.log(trigger.player, '失去了', skills);
                                                }
                                            }
                                        }
                                        var mhp = player.maxHp;
                                        var hp = player.hp;
                                        player.reinit(player.storage.longzu_weizhuang, player.storage.longzu_weizhuang2, 'nosmooth');
                                        player.hp = hp;
                                        player.maxHp = mhp;
                                        ('step 1');
                                        player.removeSkill('longzu_weizhuang_show');
                                        delete player.storage.longzu_weizhuang;
                                        delete player.storage['longzu_weizhuang2'];
                                        player.line(trigger.player, 'green');
                                        trigger.num += trigger.player.hujia == 0 ? 1 : trigger.player.hujia;
                                    },
                                },
                            },
                        },
                        longzu_yinliu: {
                            forced: true,
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return game.players.length > 1;
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && !current.storage.longzu_longwang && !current.storage.longzu_longhuang;
                                    })
                                );
                            },
                        },
                    },
                    translate: {
                        longzu_Sakura: '路明非',
                        longzu_male: '士兵',
                        longzu_female: '士兵',
                        longzu_chuzihang: '楚子航',
                        longzu_nono: '陈墨瞳',
                        longzu_lumingze: '路鸣泽',
                        longzu_angre: '昂热',
                        longzu_odin: '奥丁',
                        longzu_nuodun: '罗纳德·唐',
                        longzu_xiami: '夏弥',
                        longzu_huiliyi: '上杉绘梨衣',
                        longzu_suenxi: '苏恩曦',
                        longzu_ling: '雷娜塔',
                        longzu_yuanzhisheng: '源稚生',
                        longzu_spyuanzhisheng: 'sp源稚生',
                        longzu_kaisa: '恺撒',
                        longzu_spSakura: 'sp路明非',
                        longzu_jiudemayi: '酒德麻衣',
                        longzu_jiangnan: '江南',
                        longzu_shangshanyue: '上杉越',
                        longzu_shichuiying: '矢吹樱',
                        longzu_mingzhao: '言灵·冥照',
                        longzu_mingzhao_info: '锁定技,<li>①在你的回合外,若你成为一张牌的目标时,你有40%几率取消此牌对你的效果.<li>②你每成功取消一次效果,你下一次造成的伤害的基础值翻一倍.<li>③当你造成伤害时,若你造成的伤害因此技能而增加,则到你的下一回合开始,此技能的①效果失效',
                        longzu_梦境: '梦境',
                        longzu_梦境_info: '锁定技,你的回合内,你取消即将进行的体力值减少和失去体力上限.你永久跳过判定阶段和弃牌阶段',
                        longzu_现实: '现实',
                        longzu_现实_info: '锁定技,你的回合外,你失去牌后,你摸一张牌并回复一点体力',
                        longzu_taowang2: '无尽逃亡',
                        longzu_taowang2_info: '锁定技,每局游戏限五次,当路明非或陈墨瞳死亡前,取消死亡,刷新【恶魔交易】并使所有死亡角色复活,所有角色体力值回复至体力上限,弃置所有牌并摸四张牌(期间不触发技能)<li>当路明非,路鸣泽,陈墨瞳同时在场时,路明非和陈墨瞳的【保护】技能失效,路明非添加【无尽逃亡】且路明非添加效果【不会失去技能】<li>当路鸣泽死亡后,此技能失效',
                        longzu_cexie: '侧写',
                        longzu_cexie_info: '当其他角色在你的回合外使用牌后,若此牌进入了弃牌堆,则你可以弃置一张手牌并记录此牌(到你的回合结束前,你不能记录以此法记录过的同名牌).若你记录了三张及以上的牌,则你立即获得这些牌并回复一点体力',
                        longzu_embh: '恶魔的保护',
                        longzu_embh_info: '锁定技,你免疫体力流失、失去体力上限、武将牌翻至背面、武将牌横置',
                        longzu_恶魔交易: '恶魔交易',
                        longzu_恶魔交易_info: '出牌阶段限一次.你可以手动输入代码实现一次你想要的效果',
                        longzu_baoxie: '爆血',
                        longzu_baoxie_info: '每局游戏限四次,出牌阶段限一次,回复一点体力.<li>增强君焰,需在使用君焰后使用<li>君焰可增强三次<li>第四次爆血后会将身份牌变为内奸(身份局且非主公有效)',
                        longzu_baohu: '保护',
                        longzu_baohu_info: '限定技,当名为路明非/陈墨瞳的其他角色(若你为路鸣泽则改为路明非,去掉其他角色的限制)死亡时,你可以弃置你的所有牌,并承担其的翻面,横置效果,并使其的体力回复至体力上限并摸三张牌',
                        longzu_taowang: '无尽逃亡',
                        longzu_taowang_info: '出牌阶段,你可以弃置任意张牌并摸等量的牌,每阶段限1次',
                        longzu_junyan: '言灵·君焰',
                        longzu_junyan_info: '出牌阶段限一次,你可以指定一名其他角色,令其选择弃一张牌或受到你造成的一点火焰伤害',
                        longzu_junyan2: '言灵·君焰',
                        longzu_junyan2_info: '出牌阶段限一次,你可以指定一名其他角色,令其选择弃两张牌或受到你造成的一点火焰伤害',
                        longzu_junyan3: '言灵·君焰',
                        longzu_junyan3_info: '出牌阶段限一次,你可以指定一名其他角色,令其选择弃三张牌或受到你造成的一点火焰伤害,若其选择了弃置三张牌,则你失去一点体力',
                        longzu_junyan4: '言灵·君焰',
                        longzu_junyan4_info: '出牌阶段限一次,你可以指定一名有手牌的其他角色,令其选择弃置所有牌或受到你造成的两点火焰伤害,若其选择了弃置所有牌,则你失去一点体力',
                        longzu_lumingze1: '小魔鬼',
                        longzu_lumingze1_info: '锁定技,<li>当路明非进入游戏时若你在场,且其没有【无尽逃亡】,你使其获得【言灵·不要死】',
                        longzu_longhuang: '龙皇',
                        longzu_longhuang_info: '锁定技,言灵对你无效,你不会受到属性伤害,你不会在体力值大于0的时候死亡',
                        longzu_longwang: '龙王',
                        longzu_longwang_info: '锁定技,言灵对你无效,你每次受到的伤害数值始终为一',
                        longzu_改写血统: '改写血统',
                        longzu_改写血统_info: '<li>当你使用顺手牵羊时,若你没有副将(或副将是士兵),你可以把效果改为<获得目标的主武将牌,并令其副将牌失去所有技能>,获得的武将牌将作为你的副将进行游戏<li>出牌阶段限一次,若你有副将,你可以把你的副将给予一名其他角色,你的副将将作为目标的副将进行游戏',
                        longzu_buyaosi: '言灵·不要死',
                        longzu_buyaosi_info: '锁定技,<li>当你即将死亡时,你失去一点体力上限(不触发技能)并拒绝此次死亡<li>当你体力上限为0时,此技能失效',
                        longzu_shijianling: '言灵·时间零',
                        longzu_shijianling_info: '锁定技,<li>摸牌阶段摸牌数量加二<li>你使用的非延时锦囊牌不可被【无懈可击】抵消<li>你使用的牌没有距离限制<li>当你造成伤害时,若此时的秒数为奇数,则你弃置其装备区的牌,为偶数,伤害+1',
                        longzu_shijianling2: '言灵·时间零',
                        longzu_shijianling2_info: '',
                        longzu_mengjing2: '回归现实',
                        longzu_mengjing2_info: '回归现实:一名角色回合开始前,你可以解除梦境(所有角色移除技能【封印】,【完杀】)使所有角色回归现实,在梦境中死亡的角色除了你使用【梦境】帮助过的角色以外其他的不因【回归现实】复活,之后你将体力值回满,并还原在场角色的手牌,装备区,判定区的牌',
                        longzu_mengjing: '梦境',
                        longzu_mengjing_info: '进入梦境:每局游戏限一次,当一名角色死亡时,将其体力值变为1并取消死亡,记录所有人的手牌,装备区,判定区的牌并使所有角色进入梦境(所有其他角色添加技能【封印】,【完杀】)',
                        longzu_yinguo: '因果',
                        longzu_yinguo_info: '限定技, 你可回收其他角色的身份牌,你变成主公并重新分配身份牌(限身份局使用)',
                        longzu_Gungnir: '昆古尼尔',
                        longzu_Gungnir_info: '当你使用一张【杀】指定一名不为奥丁的其他角色后,你可以使目标角色的所有技能失效直到其回合结束,其失去一点体力上限,(每名角色限一次)<li>锁定技,你的【杀】有90%几率不可闪避,你使用【杀】无距离限制',
                        巧变: '巧变',
                        巧变_info: '你可以弃一张手牌来跳过自己的一个阶段(回合开始和结束阶段除外);若以此法跳过摸牌阶段,你可以从其他至多两名角色手里各抽取一张牌;若以此法跳过出牌阶段,你可以将场上的一张牌移动到另一个合理的位置',
                        longzu_fengyin: '封印',
                        longzu_fengyin_info: '当你获得此技能时,你失去武将牌上的所有技能',
                        longzu_zhulong: '言灵·烛龙',
                        longzu_zhulong_info: '出牌阶段限一次,(当你有手牌且未被翻面时)你可以指定一名其他角色,若如此做,你翻面,将你和目标的所有牌弃置,目标护甲归零,对目标造成两点火属性伤害',
                        longzu_shangjin: '赏金猎人',
                        longzu_shangjin_info: '锁定技,当你击杀一名其他角色后,或一名其他角色在你回合内死亡时,你摸三张牌',
                        longzu_老唐: '觉醒',
                        longzu_老唐_info: '锁定技,满足以下条件时,你觉醒为龙王诺顿:<li>当一名其他角色死亡后<li>当前存活角色为2或更少',
                        longzu_死神之镰: '言灵·死神之镰',
                        longzu_死神之镰_info: '出牌阶段限一次,你可以将两张装备牌合成为一张强化装备<li>注:使用木牛流马强化会有bug,慎用',
                        longzu_风王之瞳: '言灵·风王之瞳',
                        longzu_风王之瞳_info: '你可以弃置一张黑色手牌与一名其他角色交换座位',
                        longzu_风王之瞳2: '言灵·风王之瞳',
                        longzu_风王之瞳2_info: '使自己本回合内使用卡牌造成的伤害+1',
                        longzu_damage1: '言灵·风王之瞳',
                        longzu_damage1_info: '',
                        longzu_风王之瞳3: '言灵·风王之瞳',
                        longzu_风王之瞳3_info: '出牌阶段限一次,你可以选择下面一项发动:<li>使自己本回合内使用卡牌造成的伤害+1<li>你可以弃置一张黑色手牌与一名其他角色(你的下家除外)交换座位',
                        longzu_sishi: '死侍',
                        longzu_sishi_info: '锁定技,当你使用一张【杀】后或回合开始时,你失去一点体力',
                        longzu_biansishi: '死侍',
                        longzu_biansishi_info: '一名其他角色死亡后(死侍,龙王和龙皇除外),你可以将其变为死侍(其身份,势力与你相同),并且其回复满体力值',
                        longzu_addSkill: '添加技能失效',
                        longzu_addSkill_info: '游戏开始时或你进入游戏时,除龙王和龙皇以外,其他角色不能添加技能',
                        longzu_nixing: '逆行',
                        longzu_nixing_info: '锁定技,回合结束后,你亮出牌堆顶的三张牌,你获得其中花色与你手牌中花色均不同的牌,其余牌进入弃牌堆',
                        longzu_disable: '反刺',
                        longzu_disable_info: '你受到伤害时可以令伤害来源的所有技能永久失效(所有角色若拥有其同名技能也会失效),并将失效技能效果改为:回合开始时,若你的体力值为一,则失去1(共x点)点体力上限(失去体力上限对女士兵无效),获得技能【英姿】,【英魂】(x为失效技能数量).若你为本局第一次受到伤害,你将【错乱】的内容改为【魂姿】(失去体力上限对女士兵无效)',
                        longzu_hunzidie: '魂姿',
                        longzu_hunzidie_info: '',
                        longzu_disable2: '错乱',
                        longzu_disable2_info: '游戏开始时,你可以从魏蜀吴群四个势力中各随机举出一个技能(<li>魏国技能:奸雄,节命,天妒;<li>蜀国技能:仁德,集智,观星;<li>吴国技能:激昂,克己,连营;<li>群雄技能:崩坏,鬼道,乱击,无双),使其他角色将其随机一个技能的内容变为列举中的随机一个技能(<li>注:非魏蜀吴群势力的角色只能将其中的一个技能变为列举中的群雄技能<li>注:改成技能内容不包括改技能名称,技能描述,和技能音效),若如此做,你将【反刺】的内容改为【刚烈】',
                        longzu_shenpan1: '言灵·审判',
                        longzu_shenpan1_info: '审判效果:当一名角色受到伤害后,你可以对伤害来源(伤害来源不能为你)造成一点不触发其他技能的火焰伤害',
                        longzu_shenpan: '言灵·审判',
                        longzu_shenpan_info: '锁定技,你造成伤害时均使受伤角色(不能为你)失去一点体力上限;<li>回合结束后,若你没有获得【言灵·审判】的审判效果,你需失去1点体力,获得【言灵·审判】的审判效果直到你的下一个回合开始<li>游戏开始时或你进入游戏时,若场上有路明非,则你永久获得【言灵·审判】的审判效果',
                        longzu_shenpan2: '言灵·审判',
                        longzu_shenpan2_info: '',
                        longzu_初代: '初代血统',
                        longzu_初代_info: '锁定技,你回复体力数值加一',
                        技能修改: '技能修改',
                        技能修改_info: '出牌阶段前,你可以对一名其他能成为杀的角色造成一点伤害并视为使用一张无中生有(每局游戏限四次)',
                        改进死侍: '改进死侍',
                        改进死侍_info: '锁定技,当你死亡时,你令击杀你的角色失去一张武将牌的所有技能',
                        longzu_tianyan: '言灵·天演',
                        longzu_tianyan_info: '锁定技,你始终算出其他角色的【杀】,【闪】,【桃】,【酒】数量,若此时为身份模式,则你还会算出我方【桃】和我方【无懈可击】数量',
                        longzu_yizhi: '孤注一掷',
                        longzu_yizhi_info: '<li>锁定技,1.若你没有手牌,当你成为【杀】或【决斗】的目标时,取消之;2.你的回合外,其他角色交给你的牌置于你的武将牌上,摸牌阶段你获得武将牌上的牌;<li>回合结束阶段,你可以将所有手牌置于武将牌上<li>锁定技,当你受到伤害后,若你没有手牌,则你失去一点体力',
                        longzu_yizhi2: '孤注一掷',
                        longzu_yizhi2_info: '锁定技,<li>①你废除判定区.所有角色视你手牌区,装备区里牌的数量为0,你的血量,装备区对其他角色不可见<li>②你没有手牌时,若你成为【杀】的目标,取消之',
                        longzu_jingtong: '言灵·镜瞳',
                        longzu_jingtong_info: '出牌阶段限一次,你可以选择一名其他角色并选择一项:<li>你复制其的手牌,对每名目标只能生效一次<li>随机复制目标的一个技能直到再次使用此技能<li>若你选择了取消,并且你复制过其的手牌且其没有技能,你摸一张牌',
                        longzu_qiyue: '契约',
                        longzu_qiyue_info: '锁定技,<li>你的手牌上限不会因体力值的减少而减少<li>你取消你前两次受到的伤害并摸一张牌<li>当你受到第三次(及以上)伤害时,你受到的伤害+1,并摸x张牌(x为此次受到的伤害)',
                        士兵1: '士兵',
                        士兵1_info: '',
                        longzu_改写血统2: '改写血统',
                        longzu_改写血统2_info: '',
                        longzu_改写血统3: '改写血统',
                        longzu_改写血统3_info: '',
                        longzu_huangdi: '言灵·皇帝',
                        longzu_huangdi_info: '锁定技,<li>其他角色不能使用或打出牌响应你使用的牌<li>当你的体力为全场唯一最少时,你造成的伤害+1',
                        longzu_wmsq: '完美身躯',
                        longzu_wmsq_info: '锁定技,当你受到伤害后,你回复一点体力',
                        longzu_sphuangdi: '言灵·皇帝',
                        longzu_sphuangdi_info: '锁定技,<li>你的回合内,其他角色不能主动使用,打出,弃置所有牌.<li>你造成的伤害或你回复体力不触发其他技能',
                        longzu_renhuang: '人皇',
                        longzu_renhuang_info: '锁定技,你装备武器时不会弃置原先的武器牌',
                        longzu_lianyou: '展示手牌',
                        longzu_lianyou_info: '',
                        longzu_xixielian2: '言灵·吸血镰',
                        longzu_xixielian2_info: '',
                        longzu_lianyou1: '言灵·镰鼬',
                        longzu_lianyou1_info: '锁定技,你的回合内,其他角色对你显示手牌',
                        longzu_xixielian: '言灵·吸血镰',
                        longzu_xixielian_info: '锁定技,<li>你造成伤害后回复x点体力值(x为此次造成伤害的值)<li>听力增强:其他角色使用锦囊牌时,其手牌对你可见直到此回合结束',
                        longzu_baoxie2: '爆血',
                        longzu_baoxie2_info: '限定技,出牌阶段,回复一点体力.【言灵·镰鼬】增强为【言灵·吸血镰】',
                        longzu_sp恶魔交易: '恶魔交易',
                        longzu_sp恶魔交易_info: '路明非拥有以下五个言灵:(对龙王龙皇有效)<li>Show me the flower:出牌阶段限一次,你可以令一名其他角色摸两张牌<li>Black sheep wall:在你的回合内,你可以随时观看其他角色的手牌<li>No glues:每回合限一次,其他角色对你使用的牌无效<li>The gathering:限定技,濒死阶段,你可以将体力值回复至体力上限(若你的体力上限为0则改为3),并复原武将牌<li>Show me the money:锁定技,你的手牌数不会小于2',
                        longzu_sp恶魔交易1: 'Show me the flower',
                        longzu_sp恶魔交易1_info: '',
                        longzu_sp恶魔交易2: 'Black sheep wall',
                        longzu_sp恶魔交易2_info: '',
                        longzu_sp恶魔交易2_1: '展示手牌',
                        longzu_sp恶魔交易2_1_info: '',
                        longzu_sp恶魔交易3: 'No glues',
                        longzu_sp恶魔交易3_info: '',
                        longzu_sp恶魔交易4: 'The gathering',
                        longzu_sp恶魔交易4_info: '',
                        longzu_sp恶魔交易5: 'Show me the money',
                        longzu_sp恶魔交易5_info: '',
                        longzu_zuozhe2: '江南',
                        longzu_zuozhe2_info: '作者技:当你造成伤害或使其他角色回复体力后,你创造并装备一张带有目标所有技能的装备牌',
                        longzu_zuozhe1: '江南',
                        longzu_zuozhe1_info: '作者技:<br>①其他角色使用或打出牌后,该牌变为【杀】,【兵粮寸断】,【乐不思蜀】,【闪电】,【草木皆兵】中随机一张牌并对该角色使用之<br>②每当你使用或打出牌后,该牌变为【无中生有】,【酒】,【以逸待劳】,【桃】,【增兵减灶】中随机一张牌并对自己使用之<br>③每当你的武将牌被点击后,你摸一张牌',
                        longzu_装备: '装备',
                        longzu_装备_info: '锁定技,<br>①你有两个装备区,回合开始时,回复所有废除的装备栏,并选择切换的装备区<br>②当你进行装备时,你需选择并切换成此牌进入的装备区',
                        longzu_heiri: '言灵·黑日',
                        longzu_heiri_info: '<li>①当你成为其他角色使用牌的目标后,你可以其选择弃置一张手牌或受到来自你的一点伤害.<li>②锁定技,当你死亡时,你的上家和下家失去所有技能.<li>③对龙王龙皇有效',
                        longzu_weizhuang: '伪装',
                        longzu_weizhuang_info: '<li>①游戏开始时或回合开始时,你变身为一名随机角色;<li>②在变身时且当你造成伤害时,若处于国战模式且该角色有副将,则移除其主将.否则该角色失去随机一个技能(对龙王龙皇无效).你变回原武将.若该角色有护甲,你的伤害+x,否则伤害+1(x为该角色护甲值)',
                        longzu_yinliu: '言灵·阴流',
                        longzu_yinliu_info: '锁定技,当你使用牌时,你令所有其他角色不能使用或打出牌响应此牌',
                    },
                };
                lib.config.all.characters.add('龙族');
                lib.config.characters.add('龙族');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:龙族/image/${i}.jpg`)
                }
                lib.translate['龙族_character_config'] = `龙族`;
                return QQQ;
            });
        },
        config: {
            alert: {
                name: '弹窗修改',
                intro: '开启此项后重启游戏生效',
                init: false,
            },
            htmlgame: {
                name: 'html小游戏',
                intro: '来源:源码之家',
                init: '1',
                item: {
                    1: '三国杀连连看',
                    2: 'flappy bird',
                    3: '3D魔方',
                },
            },
        },
        package: {
            card: {
                closeable: true,
                card: {
                    言灵·君焰: {
                        type: 'trick',
                        image: `ext:龙族/image/言灵·君焰.jpg`,
                        enable: true,
                        selectTarget: -1,
                        cardcolor: 'red',
                        filterTarget(card, player, target) {
                            return player != target && !target.storage.longzu_longhuang && !target.storage.longzu_longwang;
                        },
                        content() {
                            'step 0';
                            //player.storage.longzu_junyan=true;
                            target.chooseToDiscard().set('ai', function (card) {
                                if (card.name == 'tao') return -10;
                                if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                            });
                            ('step 1');
                            if (result.bool == false) {
                                target.damage('fire');
                            }
                        },
                        ai: {
                            basic: {
                                order: 7.2,
                                useful: 4.5,
                                value: 9.2,
                            },
                            result: {
                                target(player) {
                                    return -1;
                                },
                                player(player) {
                                    return 0.5;
                                },
                            },
                        },
                        fullimage: true,
                    },
                },
                translate: {
                    言灵·君焰: '言灵·君焰',
                    言灵·君焰_info: '出牌阶段,你可以无限制对所有其他角色释放一次【言灵·君焰】<li>对龙王龙皇无效',
                },
                list: [
                    //牌堆
                    ['heart', '1', '言灵·君焰'],
                    ['diamond', '1', '言灵·君焰'],
                    ['spade', '1', '言灵·君焰'],
                    ['club', '1', '言灵·君焰'],
                ],
            },
            intro: "<li><a target='_blank' href='http://wpa.qq.com/msgrd?v=3&uin=2954700422&site=qq&menu=yes'><img border='0' src='http://wpa.qq.com/pa?p=2:2954700422:51' alt='点击这里私聊我' title='点击这里私聊我'/></a>←点击这里私聊诗笺<br><br><div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5GxmtUP')><span style=\"color: yellow;text-decoration: underline;font-style: oblique\">点击此处</span></div><span style=\"font-style: oblique\">申请加入【无名杀贴吧群】</span><br><br><div onclick=window.open('https://jq.qq.com/?_wv=1027&k=54CFhML')><span style=\"color: yellow;text-decoration: underline;font-style: oblique\">点击此处</span></div><span style=\"font-style: oblique\">申请加入【无名杀扩展交流①】群</span><br><br><div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5qvkVxl')><span style=\"color: yellow;text-decoration: underline;font-style: oblique\">点击此处</span></div><span style=\"font-style: oblique\">申请加入【无名杀扩展交流②】群</span><br><br><div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5XAZqJF')><span style=\"color: yellow;text-decoration: underline;font-style: oblique\">点击此处</span></div><span style=\"font-style: oblique\">申请加入【无名杀联机群】</span><li>龙族专属的乱斗模式【自由一日】<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '诗笺<li><div onclick=window.open(\'https://qinkunwei.gitee.io/noname/\')><span style="color: pink;text-decoration: underline;font-style: oblique">点击此处</span></div><span style="font-style: oblique">了解更多关于【无名杀】的信息</span><li><div onclick=longzu.video(\'file:///storage0/emulated/0/Android/data/com.widget.noname/extension/龙族/龙族.mp4\')><span style="color: green;text-decoration: underline;font-style: oblique">点击此处</span></div><span style="font-style: oblique">观看视频</span>',
            forumURL: 'QQ群聊号码:348943983',
            version: '2.17',
        },
    };
});
