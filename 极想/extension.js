import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '极想',
        content(config, pack) {
            /*评级*/
            //A,几乎没表现,从头弱到尾
            lib.rank.rarity.junk.addArray(['flowey', 'dg_songrenB', 'xx_zuosha', 'xx_sanhuan', 'xx_jq_guyu', 'xx_yegong', 'xx_nanguoxiansheng', 'xx_liangxiaoer', 'xx_yugong', 'xx_wunikuang', 'xx_shoulingshaonian', 'dg_zhengrenA', 'dg_zhengrenB', 'dg_zhengrenC', 'dg_songrenA', 'xx_duguyou', 'jiu_pilihuo', 'gerson', 'xx_ceshi', 'xx_huaxiong', 'napstablook', 'sans', 'xx_madai']);
            //S,有些强度,有的时候表现很好
            lib.rank.rarity.rare.addArray(['xx_renxixing', 'xx_renjiangyou', 'xx_jq_lixia', 'xx_xs_taixisi', 'xx_zhangliao', 'xx_yanghu', 'xx_zhaoyang', 'xx_kongyu', 'xx_jq_chunfen', 'xx_jq_qingming', 'xx_jr_qingming', 'xx_luxun', 'xx_longyangjun', 'xx_qiguosanshi', 'xx_helaer', 'xx_xujing', 'xx_maliang', 'xx_nilincike', 'xx_lusu', 'xx_zhouchu', 'xx_sp_zhaoyun', 'xx_sunshangxiang', 'xx_jq_yushui', 'xx_jq_jingzhe', 'xx_jq_lichun', 'xx_dimensi', 'xx_guanyinping', 'xx_zhangxingcai', 'xx_linxiangru', 'xx_lianpo', 'xx_wenyuke', 'xx_jq_xiaohan', 'xx_caoren', 'xx_caozhang', 'xx_caochong', 'xx_jiangwan', 'xx_jihe', 'xx_qiou', 'xx_xuhuang', 'xx_yuejin', 'xx_jr_yuandan', 'xx_yanliangwenchou', 'xx_huaxiong', 'xx_lijueguosi', 'xx_kongrong', 'xx_lijue', 'xx_guosi', 'xx_luzhi', 'xx_bushiming', 'xx_xunyou', 'xx_sp_libai', 'xx_chendao', 'xx_liaohua', 'xx_madai', 'xx_chongjibo', 'xx_xusheng', 'xx_xiaoyu', 'xx_xiongfu', 'xx_zhuangxin', 'xx_genglei', 'xx_caogui', 'xx_fazheng', 'xx_xiongmeng', 'xx_diaochan', 'xx_mengxi', 'xx_guijuezhiying', 'xx_moluoyi', 'xx_zutiliukun', 'xx_zhangsenyao', 'htl_quanjilang', 'htl_shuangdaochalang', 'xx_cheyinsunkang', 'xx_yihan', 'xx_zhangyun', 'xx_sunjingsuqin', 'xx_zhongziqi', 'xx_jijiang', 'xx_zhangbao', 'xx_zhangliang', 'xx_budongbai', 'lanyangyang', 'htl_xiaohuihui', 'htl_huiertaitailang', 'htl_baiyanlang', 'htl_hongtailang', 'l_hongtailang', 'htl_wushilang', 'htl_yetailang', 'xx_xueyingmodao', 'mettaton_neo', 'kj_xinnan', 'xyy_meiyangyang', 'xyy_nuanyangyang', 'xin_flowey', 'alphys', 'muffet', 'xyy_manyangyang', 'xyy_daoyang', 'chara', 'undyne', 'sp_undyne', 'mettaton_ex', 'papyrus', 'xx_guanyu', 'frisk', 'xx_zhangfei', 'xx_huangzhong', 'xx_machao', 'xx_zhaoyun', 'xx_sp_huangyueying', 'xx_yujin', 'xx_zhanghe', 'xx_sp_zhugeliang', 'xx_sunquan', 'xx_zhouyu', 'xx_huanggai', 'xx_lvmeng', 'xx_ganning', 'xx_zhoutai', 'xx_xiahoudun', 'xx_guojia', 'xx_dianwei', 'longjuanfeng', 'libatian', 'jixianfeng', 'pilihuo', 'xiyangyang', 'xyy_feiyangyang', 'luoluo', 'toriel', 'xx_gongsunzan', 'xx_xuzhu']);
            //SS,强度较高,几乎任何局都能有不错战绩
            lib.rank.rarity.epic.addArray(['xx_liubei', 'xx_zhonghuijiangwei', 'xx_tiya', 'xx_zhaowuxu', 'xx_zhaoyangzhaowuxu', 'xx_jr_chunjie', 'xx_yankailingzhu', 'xx_jr_yuanxiao', 'xx_biling', 'xx_chilian', 'xx_mozi', 'xx_kj_xizhao', 'xx_kj_xizhao_x', 'xx_kj_kunzhong', 'xx_kj_kunzhong_x', 'xx_kj_beimiao', 'xx_kj_beimiao_x', 'xx_kj_dongshan', 'xx_kj_dongshan_x', 'xx_kj_xinnan', 'xx_kj_xinnan_x', 'xx_liushan', 'xx_huangyueying', 'xx_yongyezhanlong', 'xx_xs_gaiya', 'xx_jq_dahan', 'xx_turuisi', 'xx_xianqujunzhu', 'xx_jiangwei', 'xx_libai', 'xx_aobinglong', 'xx_nezha', 'xx_walong', 'xx_shengzhu', 'xx_dimoruisi', 'xx_xiaofan', 'xx_huangming', 'xx_tanatuosi', 'xx_badun', 'xx_senyou', 'xx_liao', 'xx_yiliya', 'xx_tianjilingzhu', 'xx_vk01_yingtao', 'xx_buxiulingzhu', 'xx_yunlinyinshi', 'xx_ruoye', 'xx_dujiuxianzi', 'xx_yanhunlingzhu', 'st_luoji', 'xyy_ruanmianmian', 'cl_heihuafu', 'xx_yuboya', 'cl_chenglong', 'cl_laodie', 'xx_zhugeliang', 'xx_simayi', 'xyy_xiyangyang', 'menghuwang', 'kuangyexing', 'xyy_sanjianke', 'baolongshen', 'xx_sunce', 'xx_caocao', 'xx_zhangjiao', 'xx_lvbu', 'yanlongxia', 'xx_pilihuo_jixianfeng']);
            //SSS,强度很高,几乎任何局都会让人觉得强大到离谱
            lib.rank.rarity.legend.addArray(['xx_tianxiangzixu', 'xx_sp_tianxiangzixu', 'xx_x_tianxiangzixu', 'xx_x_sp_tianxiangzixu', 'xx_youmingwang', 'xx_shen_liubei', 'xx_shen_guanyu', 'xx_shen_zhaoyun', 'xx_shen_zhangliao', 'xx_sp_shengzhu', 'xx_xuehaimohun', 'xx_lingkongshenyu', 'xx_sp_lingkongshenyu', 'xx_lingkongshenyuX', 'xx_xingnuo', 'htl_huitailang', 're_frisk', 'dg_lihuowang', 'undying_the_undyne', 'spsans', 'Asgore', 'huitailang', 'omega_flowey', 'xx_shendiaochan', 'xx_shenlvbu', 'gk']);
            //测试
            lib.skill._xx_xianzhi = {
                forced: true,
                charlotte: true,
                _priority: 999,
                trigger: {
                    global: 'gameStart',
                },
                filter(event, player) {
                    return true;
                },
                content() {
                    var name = lib.config.connect_nickname;
                    if (name && name.includes('天想')) {
                        game.log(name + '加入游戏=)');
                    } else {
                        var num = game.me.getSkills(null, false, false).filter(function (skill) {
                            var info = get.info(skill);
                            if (!info || info.charlotte) return false;
                            if (info.zhuSkill) return player.hasZhuSkill(skill);
                            return true;
                        }).length;
                    }
                },
            };
        },
        precontent(xxC) {
            //—————————————————————————————————————————————————————————————————————————————boss模式相关函数,目前改用代理来排序
            const boss = function () {
                lib.skill._sort = {
                    trigger: {
                        player: ['phaseEnd'],
                    },
                    silent: true,
                    forceDie: true,
                    forceOut: true,
                    filter() {
                        game.sort();
                    },
                    content() { },
                }; //排座位
                let _me;
                Reflect.defineProperty(game, 'me', {
                    get() {
                        return _me;
                    },
                    set(v) {
                        _me = v;
                        if (game.players.includes(v) && game.players[0] != v) {
                            game.sort();//因为李白最先进入players,挑战模式不管选什么挑战李白,都会变成game.me是李白
                        } //如果数组target[meIndex]是李白,那么替换掉的一瞬间,接下来调用就会再添加一个李白,导致数组两个李白
                    }, //更换game.me之后第一时间排序
                });
                game.sort = function () {
                    const players = game.players.filter(Boolean);
                    const deads = game.dead.filter(Boolean);
                    const allPlayers = deads.concat(players);//先移除players后面玩家会前移,再添加入dead需要同排序取前
                    const bool = lib.config.dieremove;
                    const playerx = bool ? players : allPlayers;
                    ui.arena.setNumber(playerx.length);
                    if (bool) {
                        deads.forEach((player) => {
                            player.classList.add('removing', 'hidden');
                            if (!player.deadposition) {
                                const num = Number(player.dataset.position);
                                player.deadposition = num;
                                player.dataset.position = num - 1;
                            }
                        });
                    }//隐藏死亡角色
                    playerx.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                    if (playerx.includes(game.me) && playerx[0] != game.me) {
                        while (playerx[0] != game.me) {
                            const start = playerx.shift();
                            playerx.push(start);
                        }
                    }//将玩家排至数组首位
                    playerx.forEach((player, index, array) => {
                        player.dataset.position = index;
                        const zhu = _status.roundStart || game.zhu || game.boss || array.find((p) => p.seatNum == 1) || array[0];
                        const zhuPos = Number(zhu.dataset.position);
                        const num = index - zhuPos + 1;
                        if (index < zhuPos) {
                            player.seatNum = players.length - num;
                        } else {
                            player.seatNum = num;
                        }
                    });//修改dataset.position与seatNum
                    players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                    players.forEach((player, index, array) => {
                        if (bool) {
                            player.classList.remove('removing', 'hidden');
                        }
                        if (index == 0) {
                            if (ui.handcards1Container && ui.handcards1Container.firstChild != player.node.handcards1) {
                                while (ui.handcards1Container.firstChild) {
                                    ui.handcards1Container.firstChild.remove();
                                }
                                ui.handcards1Container.appendChild(player.node.handcards1.addTempClass('start').fix());
                            }
                            if (game.me != player) {
                                ui.updatehl();
                            }
                        }
                        player.previous = array[index === 0 ? array.length - 1 : index - 1];
                        player.next = array[index === array.length - 1 ? 0 : index + 1];
                    });//展示零号位手牌/修改previous/显示元素
                    allPlayers.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                    allPlayers.forEach((player, index, array) => {
                        player.previousSeat = array[index === 0 ? array.length - 1 : index - 1];
                        player.nextSeat = array[index === array.length - 1 ? 0 : index + 1];
                    });//修改previousSeat
                    game.players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                    return true;
                };
                game.players = new Proxy([], {
                    set(target, property, value) {
                        const result = Reflect.set(target, property, value);
                        if (property === 'length') {
                            game.sort();
                        }
                        return result;
                    },
                });
                game.dead = new Proxy([], {
                    set(target, property, value) {
                        const result = Reflect.set(target, property, value);
                        if (property === 'length') {
                            game.sort();
                        }
                        return result;
                    },
                });
                game.kongfunc = function () {
                    return game.kong;
                };
                game.kong = {
                    set() {
                        return this;
                    },
                    get player() {
                        return game.me;
                    }, //先声明后赋值的,后面调用会是underfined,所以用getter实时获取
                    cards: [],
                    result: {
                        cards: [],
                    },
                    gaintag: [],
                    forResult() { },
                };
                game.changeBossQ = function (name) {
                    _status.event.forceDie = true;
                    const boss = game.addPlayerQ(name);
                    boss.side = true;
                    if (game.additionaldead) {
                        game.additionaldead.push(game.boss);
                    } else {
                        game.additionaldead = [game.boss];
                    }
                    boss.setIdentity('zhu');
                    boss.identity = 'zhu';
                    const player = game.boss;
                    game.boss = boss;
                    game.addVideo('bossSwap', player, '_' + boss.name);
                    if (game.me == player) {
                        game.swapControl(boss);
                    }
                    return boss;
                };
                game.addPlayerQ = function (name) {
                    const player = ui.create.player(ui.arena).addTempClass('start');
                    player.getId();
                    if (name) player.init(name);
                    game.players.push(player);
                    player.draw(Math.min(player.maxHp, 20));
                    return player;
                };
                lib.element.player.addFellow = function (name) {
                    const player = this;
                    const npc = game.addPlayerQ(name);
                    player.guhuo(npc);
                    return npc;
                }; //添加随从
                lib.element.player.guhuo = function (target) {
                    const player = this;
                    target.side = player.side;
                    let identity = player.identity;
                    if (player.identity == 'zhu') {
                        identity = 'zhong';
                    } // 挑战模式多个主身份,会导致boss多个回合
                    target.identity = identity;
                    target.setIdentity(identity, 'blue');
                    target.boss = player;
                    target.ai.modAttitudeFrom = function (from, to, att) {
                        if (to == from.boss) return 99;
                        return att;
                    }; //这里from是本人
                    target.ai.modAttitudeTo = function (from, to, att) {
                        if (to.boss == from) return 99;
                        return att;
                    }; //这里to是本人
                    return player;
                }; //令一名角色服从你
            };
            boss();
            var url = 'extension/极想';
            lib.init.css(url, 'extension');
            /*势力*/
            {
                lib.group.push('an');
                lib.translate.an = '暗';
                lib.translate.anColor = '#14151c';
                lib.group.push('xxmo');
                lib.translate.xxmo = '魔';
                lib.translate.xxmoColor = '#14151c';
                lib.group.push('xxshouhu');
                lib.translate.xxshouhu = '守';
                lib.translate.xxshouhuColor = 'fire';
                lib.group.push('ren');
                lib.translate.ren = '人';
                lib.translate.renColor = '#ff4646';
                lib.group.push('guai');
                lib.translate.guai = '怪';
                lib.translate.guaiColor = '#dcdcdc';
                lib.group.push('che');
                lib.translate.che = '车';
                lib.translate.cheColor = '#f50000';
                lib.group.push('shou');
                lib.translate.shou = '兽';
                lib.translate.shouColor = '#d232c1';
                lib.group.push('yang');
                lib.translate.yang = '羊';
                lib.translate.yangColor = '#32d263';
                lib.group.push('lang');
                lib.translate.lang = '狼';
                lib.translate.langColor = '#2b0d4a';
                lib.group.push('guang');
                lib.translate.guang = '光';
                lib.translate.guangColor = '#ffec92';
                lib.group.push('ying');
                lib.translate.yingColor = '#00066d';
                lib.group.push('xx_gu');
                lib.translate.xx_gu = '故';
                lib.translate.xx_guColor = '#ffec92';
                lib.group.push('xx_zheng');
                lib.translate.xx_zheng = '正';
                lib.translate.xx_zhengColor = '#ffec92';
                lib.group.push('xx_xiee');
                lib.translate.xx_xiee = '邪';
                lib.translate.xx_xieeColor = '#ffec92';
                lib.group.push('xx_jie');
                lib.translate.xx_jie = '节';
                lib.translate.xx_jieColor = 'fire';
            }
            //新增函数
            {
                //返回一个角色的属性
                lib.element.player.get_xx_shuxing = function () {
                    var pl = this;
                    if (pl.storage.xx_shuxing) return pl.storage.xx_shuxing;
                    return false;
                };
                //判断一个角色是否包含某属性
                lib.element.player.has_xx_shuxing = function (name) {
                    var sxs = this.get_xx_shuxing();
                    var n = 'xx_shuxing_' + name;
                    return sxs && sxs.includes(n);
                };
                //判断是否场上存在相应环境
                lib.element.player.xx_has_huanjing = function (name) {
                    var hj = this.xx_game_get_huanjing();
                    return hj && hj[1] && hj[1] == 'xx_hj_' + name + '_skill';
                };
                //减少当前环境持续回合
                lib.element.player.xx_remove_huanjing = function (num) {
                    var hj = this.xx_game_get_huanjing();
                    if (!hj) return false;
                    var tar = hj[0];
                    tar.removeMark(hj[1], num);
                    tar.update();
                    if (!this.xx_count_huanjing()) {
                        tar.removeSkill(hj[1]);
                        game.broadcastAll(function () {
                            delete _status.xx_hj_tempBackground;
                            game.xx_updateBackground();
                        });
                    }
                    return true;
                };
                //获得当前环境持续回合
                lib.element.player.xx_count_huanjing = function () {
                    var hj = this.xx_game_get_huanjing();
                    if (!hj) return false;
                    var tar = hj[0];
                    return tar.countMark(hj[1]);
                };
                // 返回场上的环境,如果不存在环境则返回false
                lib.element.player.xx_game_get_huanjing = function () {
                    var hjs = lib.skill.xx_hj_xs.huanjings;
                    var tars = game.filterPlayer(true);
                    var tarx;
                    var chjs;
                    var hjskills = [];
                    for (var n of hjs) {
                        hjskills.push('xx_hj_' + n + '_skill');
                    }
                    for (var tar of tars) {
                        for (var sk of hjskills) {
                            if (tar.hasSkill(sk)) {
                                tarx = tar;
                                chjs = sk;
                            }
                        }
                    }
                    if (tarx && chjs) {
                        return [tarx, chjs];
                    }
                    return false;
                };
                // 召唤环境 环境名、召唤者、持续回合数、类型(召唤、延续、召唤&延续)
                // 根据type,0为召唤,将当前环境以及回合数改变为所召唤的值
                // 1为延续,只能延续当前环境的回合数
                // 2为召唤&延续,召唤与延续的结合,如果当前环境与要召唤的相同,则不直接更改持续回合数,而是在剩余回合数的基础上增加
                lib.element.player.xx_zhaohuan_huanjing = function (name, player, num, type) {
                    // 获取环境数组
                    var hjs = lib.skill.xx_hj_xs.huanjings;
                    // 判断是否存在此环境
                    if (!hjs.includes(name)) {
                        game.log(player, '试图召唤不存在的环境');
                        return false;
                    }
                    // 获取所有角色
                    var tars = game.filterPlayer(true);
                    // 当前开启环境的角色
                    var tarx;
                    // 当前环境
                    var chjs;
                    // 环境对应的技能
                    var hjskills = [];
                    for (var n of hjs) {
                        hjskills.push('xx_hj_' + n + '_skill');
                    }
                    // 要召唤的环境的技能
                    var tohj = 'xx_hj_' + name + '_skill';
                    // 获取当前环境角色以及当前环境
                    for (var tar of tars) {
                        for (var sk of hjskills) {
                            if (tar.hasSkill(sk)) {
                                tarx = tar;
                                chjs = sk;
                            }
                        }
                    }
                    var hjname = get.translation(tohj);
                    var tarxname = get.translation(tarx);
                    var chjsname = get.translation(chjs);
                    if (type == 0) {
                        if (tarx && chjs) {
                            game.log(player, '试图召唤' + hjname + '环境' + num + '回合,成功,且替换掉了' + tarxname + '召唤的' + chjsname + '.');
                        } else {
                            game.log(player, '试图召唤' + hjname + '环境' + num + '回合,成功.');
                        }
                    } else if (type == 1) {
                        if (tarx && chjs) {
                            if (chjs == tohj) {
                                game.log(player, '试图延续' + hjname + '环境' + num + '回合,成功.');
                            } else {
                                game.log(player, '试图延续' + hjname + '环境' + num + '回合,失败,当前环境为' + tarxname + '召唤的' + chjsname + '.');
                                return false;
                            }
                        } else {
                            game.log(player, '试图延续' + hjname + '环境' + num + '回合,失败,当前场上并不存在该环境.');
                            return false;
                        }
                    } else if (type == 2) {
                        game.log(player, '试图召唤/延续' + hjname + '环境' + num + '回合,成功.');
                    } else {
                        game.log(player, '试图使用未知的召唤方式,召唤失败');
                        return false;
                    }
                    if (type == 0) {
                        for (var tar of tars) {
                            for (var sk of hjskills) {
                                if (tar.hasSkill(sk)) {
                                    tar.removeSkill(sk);
                                }
                            }
                        }
                        player.addSkill(tohj);
                        player.addMark(tohj, num);
                    }
                    if (type == 1) {
                        tarx.addMark(chjs, num);
                    }
                    if (type == 2) {
                        var nx = num;
                        if (tarx && chjs) {
                            if (chjs == tohj && tarx.countMark(chjs) > 0) {
                                nx += tarx.countMark(chjs);
                            }
                        }
                        for (var tar of tars) {
                            for (var sk of hjskills) {
                                if (tar.hasSkill(sk)) {
                                    tar.removeSkill(sk);
                                }
                            }
                        }
                        player.addSkill(tohj);
                        player.addMark(tohj, nx);
                    }
                    //ui.background.setBackgroundImage('extension/极想/huanjing/' + name + [1, 2, 3].randomGet() + '.jpg');
                    game.broadcastAll(
                        function (bg) {
                            _status.xx_hj_tempBackground = bg;
                            game.xx_updateBackground();
                        },
                        'extension/极想/huanjing/' + name + [1, 2, 3].randomGet() + ''
                    );
                    return true;
                };
            }
            {
                game.xx_updateBackground = function () {
                    const background = _status.tempBackground || lib.config.image_background;
                    var xxbool = false;
                    ui.background.delete();
                    const uiBackground = (ui.background = ui.create.div('.background')),
                        style = uiBackground.style;
                    if (lib.config.image_background_blur) {
                        style.filter = 'blur(8px)';
                        style.webkitFilter = 'blur(8px)';
                        style.transform = 'scale(1.05)';
                    }
                    document.body.insertBefore(uiBackground, document.body.firstChild);
                    if (background.startsWith('db:')) uiBackground.setBackgroundDB(background.slice(3));
                    else if (background.startsWith('ext:')) uiBackground.setBackgroundImage(`extension/${background.slice(4)}`);
                    else if (background == 'default') {
                        uiBackground.addTempClass('start');
                        style.backgroundImage = 'none';
                    } else if (background.startsWith('custom_')) {
                        style.backgroundImage = 'none';
                        game.getDB('image', background).then((fileToLoad) => {
                            if (!fileToLoad) return;
                            const fileReader = new FileReader();
                            fileReader.onload = (fileLoadedEvent) => (style.backgroundImage = `url(${fileLoadedEvent.target.result})`);
                            fileReader.readAsDataURL(fileToLoad, 'UTF-8');
                        });
                    } else {
                        uiBackground.setBackgroundImage(`image/background/${background}.jpg`);
                    }
                    if (_status.xx_hj_tempBackground) {
                        uiBackground.setBackgroundImage('' + _status.xx_hj_tempBackground + '.jpg');
                        xxbool = true;
                    }
                    style.backgroundSize = 'cover';
                    style.backgroundPosition = '50% 50%';
                };
            }
            lib.init.js('extension/极想/character.js', null);
            lib.init.js('extension/极想/card.js');
        },
        config: {
            死亡移除: {
                name: '<span class="Qmenu">死亡移除</span>',
                intro: '死亡后移出游戏',
                init: true,
                onclick(result) {
                    game.saveConfig('dieremove', result);
                },
            },
            XXQianzhui: {
                name: '炫彩前缀',
                intro: '开启极想的前缀美化',
                init: true,
                onclick(item) {
                    game.saveConfig('XXQianzhui', item);
                    game.saveConfig('extension_极想_XXQianzhui', item);
                },
            },
            xx_xinjizhi: {
                name: "<font class='jx_wj_name_shu'>新机制讲解</font>",
                init: '1',
                intro: '新机制讲解^-^',
                item: {
                    1: ' ',
                    2: '<b><font color=cyan>环境</font>>>>',
                    3: '<li>环境默认为全局锁定技,场上只能存在一种环境.</font>',
                    4: '<li>召唤环境后会更换背景图片,如果没有更换,大概率是缺失素材,需要导入完整包.</font>',
                    5: '<li>召唤环境有三种方式:召唤、延续、召唤/延续.</font>',
                    6: '<li>召唤会覆盖当前环境,不会叠加持续回合数.</font>',
                    7: '<li>延续只能延续当前环境,需要场上存在环境,且与想要延续的环境相同.</font>',
                    8: '<li>召唤/延续,覆盖当前环境且如果被覆盖的环境与当前环境相同,则叠加持续回合数.</font>',
                    9: '<li>目前环境有:冰雪、梦境、迷雾、阴雨、恶魔城、瘴气、暴晒、圣光、曙光、芬芳、龙阵、雷暴、沃土、巽空.</font>',
                    10: '',
                    11: '<b><font color=cyan>属性</font>>>>',
                    12: '<li>本扩展部分角色自带属性,大部分环境对特定属性有增益或减益效果.</font>',
                    13: '<li>目前属性有:水、火、草、土、冰、石、风、毒、光、龙、幽灵、恶魔、机械.</font>',
                    14: '',
                    15: '<b><font color=cyan>状态</font>>>>',
                    16: '<li>状态默认为锁定技,类似【封印】.</font>',
                    17: '<li>目前状态有:禁锢、诡协、爱、睡眠、诅咒.</font>',
                },
            },
            xx_huanjing: {
                name: "<font class='jx_wj_name_shu'>环境机制详情</font>",
                init: '1',
                intro: '环境机制详情^-^',
                item: {
                    1: ' ',
                    2: '<b><font color=cyan>冰雪</font>:',
                    3: '<li>非冰属性角色手牌上限-1,且不因此弃置牌后额外弃置一张牌.</font>',
                    4: ' ',
                    5: '<b><font color=cyan>梦境</font>:',
                    6: '<li>处于【睡眠状态】的角色每回合免疫一次伤害.</font>',
                    7: ' ',
                    8: '<b><font color=cyan>迷雾</font>:',
                    9: '<li>幽灵属性角色进攻距离与防御距离+1,非幽灵属性角色对攻击范围外的角色使用牌无效.</font>',
                    10: ' ',
                    11: '<b><font color=cyan>阴雨</font>:',
                    12: '<li>水属性角色弃置牌后摸一张牌.</font>',
                    13: ' ',
                    14: '<b><font color=cyan>恶魔城</font>:',
                    15: '<li>恶魔属性角色准备/结束阶段将护甲增加至一.</font>',
                    16: ' ',
                    17: '<b><font color=cyan>瘴气</font>:',
                    18: '<li>非毒属性角色受到伤害后,若其手牌中有【毒】,其流失一点体力.</font>',
                    19: ' ',
                    20: '<b><font color=cyan>暴晒</font>:',
                    21: '<li>火属性角色造成的非属性伤害改为火焰伤害,水属性角色手牌上限-1,水/冰属性角色使用牌后,若其有护甲,其失去一点护甲,否则弃置一张牌.</font>',
                    22: ' ',
                    23: '<b><font color=cyan>圣光</font>:',
                    24: '<li>光属性角色的【杀】无视防具,且受到的属性伤害-1.</font>',
                    25: ' ',
                    26: '<b><font color=cyan>曙光</font>:',
                    27: '<li>光属性角色使用牌后可以重铸其区域内一张牌,光属性角色失去最后的手牌后摸一张牌.</font>',
                    28: ' ',
                    29: '<b><font color=cyan>芬芳</font>:',
                    30: '<li>草属性角色回合开始时回复一点体力,草属性角色回合结束时,此环境延续x回合(x为其手牌数).</font>',
                    31: ' ',
                    32: '<b><font color=cyan>龙阵</font>:',
                    33: '<li>龙属性角色受到伤害后令伤害来源随机弃置一张牌,非龙属性角色使用牌后随机弃置一张同花色的牌.</font>',
                    34: ' ',
                    35: '<b><font color=cyan>雷暴</font>:',
                    36: '<li>电属性角色出牌阶段开始时摸一张牌,非电属性角色受到的雷电伤害+1.</font>',
                    34: ' ',
                    35: '<b><font color=cyan>沃土</font>:',
                    36: '<li>土属性角色准备阶段或受到一点伤害后从弃牌堆获得一张基本牌.</font>',
                    37: ' ',
                    38: '<b><font color=cyan>巽空</font>:',
                    39: '<li>风属性角色可以将x张牌作为【杀/闪】使用(x为其手牌数减体力值,不小于0).</font>',
                },
            },
        },
        package: {
            intro: "<font color='#bbbbdd'>极想</font><br>[极想将喜欢的角色做出来^-^]<br>哎嘿,欢迎你," + lib.config.connect_nickname + "!祝你玩的开心.<br>QQ群:778497970<br>如果导入并开启此扩展后发现没有扩展的内容,请去>选项>武将>极想>开启<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '天想子虚(QQ:2932453828)',
            version: '0.240.5',
        },
    };
});
