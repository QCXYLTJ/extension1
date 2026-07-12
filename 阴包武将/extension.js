import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '阴包武将',
        content(config, pack) {
            // if (lib.config.extensions) {
            //     var exts = lib.config.extensions;
            //     for (var i = 0; i < exts.length; i++) {
            //         var name = exts[i];
            //         if (lib.extensionPack[name] && lib.extensionPack[name].author) {
            //             if (['侠义', '超级乱斗', '神魔乱舞'].includes(name) || lib.extensionPack[name].author.includes('周六')) {
            //                 alert('<阴包武将>扩展公告:\n由于本人在沟通交流方面能力实在太弱,与(' + get.translation(name) + ')扩展主<周六>产生了矛盾,在之后我虽然倾听了对方深入的意见,但我对其中的一些持保留态度.现由于不可抗因素,我的扩展和部分参与的扩展将在检测到对方扩展后自动关闭,以防止对方的扩展对无名杀内的文件进行破坏,从而导致严重后果.\n——Al₂O₃·3H₂Oฅฅ*\n\n注:以下言论的弹窗,为扩展主<周六>所做,与无名杀本体、离线包或完整包无关:\n(由于天劳令的作者是个乱喷人的傻逼玩意,<br>特此写个提示:如果你确定要使用傻逼的天牢令.请删除本人扩展.否则游戏开始后本人的扩展会自动删除傻逼的天牢令扩展.)');
            //                 if (game.getExtensionConfig('阴包武将', 'enable')) {
            //                     game.saveConfig('extension_阴包武将_enable', false);
            //                     game.reload();
            //                 }
            //             };
            //         }
            //         else {
            //             if (['侠义', '超级乱斗', '神魔乱舞'].includes(name)) {
            //                 alert('<阴包武将>扩展公告:\n由于本人在沟通交流方面能力实在太弱,与(' + get.translation(name) + ')扩展主<周六>产生了矛盾,在之后我虽然倾听了对方深入的意见,但我对其中的一些持保留态度.现由于不可抗因素,我的扩展和部分参与的扩展将在检测到对方扩展后自动关闭,以防止对方的扩展对无名杀内的文件进行破坏,从而导致严重后果.\n——Al₂O₃·3H₂Oฅฅ*\n\n注:以下言论的弹窗,为扩展主<周六>所做,与无名杀本体、离线包或完整包无关:\n(由于天劳令的作者是个乱喷人的傻逼玩意,<br>特此写个提示:如果你确定要使用傻逼的天牢令.请删除本人扩展.否则游戏开始后本人的扩展会自动删除傻逼的天牢令扩展.)');
            //                 if (game.getExtensionConfig('阴包武将', 'enable')) {
            //                     game.saveConfig('extension_阴包武将_enable', false);
            //                     game.reload();
            //                 }
            //             };
            //         }
            //     }
            // }
            //垃圾武将
            lib.rank.rarity.junk.addArray(['yin_weiwenzhugezhi', 'yin_liubei']);
            //精品武将
            lib.rank.rarity.rare.addArray(['yin_manchong', 'yin_suncezhouyu', 'yin_lvbuyihao', 'yin_dengzhi', 'yin_yuanshu', 'yin_dingfeng', 'yin_zhoutai', 'yin_mateng']);
            //史诗武将
            lib.rank.rarity.epic.addArray(['yin_zhanggong', 'yin_fanchou', 'yinsp_jiaxu', 'yin_sunliang', 'yin_liuyong', 'yin_shibao', 'yin_zhonghui', 'yin_caoang', 'yin_mouzhaoyun', 'yin_xunchen', 'yin_mouxusheng', 'gai_zhangfei', 'yin_caocao', 'gai_shensunce', 'yin_lvbuerhao', 'yin_caishi', 'yin_chunyuqiong', 'yin_zhangliao', 'yin_xunyou', 'yin_lvlingqi', 'yin_zhugeguo', 'yin_chendao']);
            //传说武将
            lib.rank.rarity.legend.addArray(['yin_wolongfengchu', 'yin_sunhao', 'yin_lukang', 'yin_simashi', 'yin_lvkai', 'yin_jushou', 'yin_zhangxiu', 'yin_liuxie', 'gai_liru', 'gai_luotong', 'gai_lingtong', 'gai_mouxusheng', 'yin_guanlu', 'yin_mouhuangzhong', 'gai_huangzhong', 'gai_xushao', 'gai_shenzhaoyun', 'gai_shenlvbu', 'yin_guanyu', 'yin_wupangtong', 'yin_lvbusanhao', 'yin_lingtong', 'yin_fazheng', 'yin_wenchu', 'yin_machao', 'yin_sunxiu']);
            if (config.titleChange == 'fuh') {
                lib.translate.yin_xunyou = '♋荀攸';
                lib.translate.gai_shensunce = '▼神孙策';
                lib.translate.yin_liubei = '♋刘备';
                lib.translate.yin_weiwenzhugezhi = '♋卫温诸葛直';
                lib.translate.yin_zhoutai = '♋周泰';
                lib.translate.yin_zhangliao = '♋张辽';
                lib.translate.yin_caishi = '♋蔡氏';
                lib.translate.yin_chendao = '♋陈到';
                lib.translate.yin_liuxie = '♋刘协';
                lib.translate.yin_guanlu = '♋管辂';
                lib.translate.yin_dingfeng = '♋丁奉';
                lib.translate.yin_mateng = '♋马腾';
                lib.translate.yin_dengzhi = '♋邓芝';
                lib.translate.yin_sunxiu = '♋孙休';
                lib.translate.yin_chunyuqiong = '♋淳于琼';
                lib.translate.gai_xushao = '▼许劭';
                lib.translate.gai_zhangfei = '▼张飞';
                lib.translate.yin_caocao = '♋曹操';
                lib.translate.gai_lingtong = '▼凌统';
                lib.translate.yin_mouhuangzhong = '♋黄忠';
                lib.translate.yin_yuanshu = '♋袁公路';
                lib.translate.yin_caoang = '♋曹昂';
                lib.translate.yin_mouxusheng = '♋谋徐盛';
                lib.translate.gai_mouxusheng = '▼谋徐盛';
                lib.translate.yin_machao = '♋马超';
                lib.translate.yin_wenchu = '♋文俶';
                lib.translate.gai_shenlvbu = '▼神吕布';
                lib.translate.yin_fazheng = '♋法正';
                lib.translate.yin_lvbuyihao = '♋吕布一号';
                lib.translate.yin_lvbuerhao = '♋吕布二号';
                lib.translate.yin_lvbusanhao = '♋吕布三号';
                lib.translate.gai_huangzhong = '▼谋黄忠';
                lib.translate.yin_manchong = '♋满宠';
                lib.translate.yin_wupangtong = '♋吴庞统';
                lib.translate.yin_guanyu = '♋关羽';
                lib.translate.yin_zhonghui = '♋钟会';
                lib.translate.yin_xunchen = '♋荀谌';
                lib.translate.yin_suncezhouyu = '♋孙策周瑜';
                lib.translate.gai_luotong = '▼骆统';
                lib.translate.yin_mouzhaoyun = '♋谋赵云';
                lib.translate.gai_liru = '▼李儒';
                lib.translate.yin_zhugeguo = '♋诸葛果';
                lib.translate.yin_lvlingqi = '♋吕玲绮';
                lib.translate.gai_shenzhaoyun = '▼神赵云';
                lib.translate.yin_lingtong = '♋凌统';
                lib.translate.yin_zhangxiu = '♋张绣';
                lib.translate.yin_jushou = '♋沮授';
                lib.translate.yin_shibao = '♋石苞';
                lib.translate.yin_sunliang = '♋孙亮';
                lib.translate.yin_liuyong = '♋刘永';
                lib.translate.yin_lvkai = '♋吕凯';
                lib.translate.yin_simashi = '♋司马师';
                lib.translate.yin_lukang = '♋陆抗';
                lib.translate.yinsp_jiaxu = '♋贾诩';
                lib.translate.yin_fanchou = '♋樊稠';
                lib.translate.yin_wuguotai = '♋吴国太';
                lib.translate.yin_baolongchenying = '♋鲍隆陈应';
                lib.translate.yin_juyi = '♋麴义';
                lib.translate.yin_sunhao = '♋孙皓';
                lib.translate.yin_beimihu = '♋卑弥呼';
                lib.translate.yin_wolongfengchu = '♋卧龙凤雏';
                lib.translate.yin_zhanggong = '♋张恭';
            }
            if (config.titleChange == 'word') {
                lib.translate.yin_xunyou = '阴荀攸';
                lib.translate.gai_shensunce = '绝神孙策';
                lib.translate.yin_liubei = '阴刘备';
                lib.translate.yin_weiwenzhugezhi = '阴卫温诸葛直';
                lib.translate.yin_zhoutai = '阴周泰';
                lib.translate.yin_zhangliao = '阴张辽';
                lib.translate.yin_caishi = '阴蔡氏';
                lib.translate.yin_chendao = '阴陈到';
                lib.translate.yin_liuxie = '阴刘协';
                lib.translate.yin_guanlu = '阴管辂';
                lib.translate.yin_dingfeng = '阴丁奉';
                lib.translate.yin_mateng = '阴马腾';
                lib.translate.yin_dengzhi = '阴邓芝';
                lib.translate.yin_sunxiu = '阴孙休';
                lib.translate.yin_chunyuqiong = '阴淳于琼';
                lib.translate.gai_xushao = '绝许劭';
                lib.translate.gai_zhangfei = '绝张飞';
                lib.translate.yin_caocao = '阴曹操';
                lib.translate.gai_lingtong = '绝凌统';
                lib.translate.yin_mouhuangzhong = '阴黄忠';
                lib.translate.yin_yuanshu = '阴袁公路';
                lib.translate.yin_caoang = '阴曹昂';
                lib.translate.yin_mouxusheng = '阴谋徐盛';
                lib.translate.gai_mouxusheng = '绝谋徐盛';
                lib.translate.yin_machao = '阴马超';
                lib.translate.yin_wenchu = '阴文俶';
                lib.translate.gai_shenlvbu = '绝神吕布';
                lib.translate.yin_fazheng = '阴法正';
                lib.translate.yin_lvbuyihao = '阴吕布一号';
                lib.translate.yin_lvbuerhao = '阴吕布二号';
                lib.translate.yin_lvbusanhao = '阴吕布三号';
                lib.translate.gai_huangzhong = '绝谋黄忠';
                lib.translate.yin_manchong = '阴满宠';
                lib.translate.yin_wupangtong = '阴吴庞统';
                lib.translate.yin_guanyu = '阴关羽';
                lib.translate.yin_zhonghui = '阴钟会';
                lib.translate.yin_xunchen = '阴荀谌';
                lib.translate.yin_suncezhouyu = '阴孙策周瑜';
                lib.translate.gai_luotong = '绝骆统';
                lib.translate.yin_mouzhaoyun = '阴谋赵云';
                lib.translate.gai_liru = '绝李儒';
                lib.translate.yin_zhugeguo = '阴诸葛果';
                lib.translate.yin_lvlingqi = '阴吕玲绮';
                lib.translate.gai_shenzhaoyun = '绝神赵云';
                lib.translate.yin_lingtong = '阴凌统';
                lib.translate.yin_zhangxiu = '阴张绣';
                lib.translate.yin_jushou = '阴沮授';
                lib.translate.yin_shibao = '阴石苞';
                lib.translate.yin_sunliang = '阴孙亮';
                lib.translate.yin_liuyong = '阴刘永';
                lib.translate.yin_lvkai = '阴吕凯';
                lib.translate.yin_simashi = '阴司马师';
                lib.translate.yin_lukang = '阴陆抗';
                lib.translate.yinsp_jiaxu = '阴贾诩';
                lib.translate.yin_fanchou = '阴樊稠';
                lib.translate.yin_wuguotai = '阴吴国太';
                lib.translate.yin_baolongchenying = '阴鲍隆陈应';
                lib.translate.yin_juyi = '阴麴义';
                lib.translate.yin_sunhao = '阴孙皓';
                lib.translate.yin_beimihu = '阴卑弥呼';
                lib.translate.yin_wolongfengchu = '阴卧龙凤雏';
                lib.translate.yin_zhanggong = '阴张恭';
            }
            if (config.titleChange == 'off') {
                lib.translate.yin_xunyou = '荀攸';
                lib.translate.gai_shensunce = '神孙策';
                lib.translate.yin_liubei = '刘备';
                lib.translate.yin_weiwenzhugezhi = '卫温诸葛直';
                lib.translate.yin_zhoutai = '周泰';
                lib.translate.yin_zhangliao = '张辽';
                lib.translate.yin_caishi = '蔡氏';
                lib.translate.yin_chendao = '陈到';
                lib.translate.yin_liuxie = '刘协';
                lib.translate.yin_guanlu = '管辂';
                lib.translate.yin_dingfeng = '丁奉';
                lib.translate.yin_mateng = '马腾';
                lib.translate.yin_dengzhi = '邓芝';
                lib.translate.yin_sunxiu = '孙休';
                lib.translate.yin_chunyuqiong = '淳于琼';
                lib.translate.gai_xushao = '许劭';
                lib.translate.gai_zhangfei = '张飞';
                lib.translate.yin_caocao = '曹操';
                lib.translate.gai_lingtong = '凌统';
                lib.translate.yin_mouhuangzhong = '黄忠';
                lib.translate.yin_yuanshu = '袁公路';
                lib.translate.yin_caoang = '曹昂';
                lib.translate.yin_mouxusheng = '谋徐盛';
                lib.translate.gai_mouxusheng = '谋徐盛';
                lib.translate.yin_machao = '马超';
                lib.translate.yin_wenchu = '文俶';
                lib.translate.gai_shenlvbu = '神吕布';
                lib.translate.yin_fazheng = '法正';
                lib.translate.yin_lvbuyihao = '吕布一号';
                lib.translate.yin_lvbuerhao = '吕布二号';
                lib.translate.yin_lvbusanhao = '吕布三号';
                lib.translate.gai_huangzhong = '谋黄忠';
                lib.translate.yin_manchong = '满宠';
                lib.translate.yin_wupangtong = '吴庞统';
                lib.translate.yin_guanyu = '关羽';
                lib.translate.yin_zhonghui = '钟会';
                lib.translate.yin_xunchen = '荀谌';
                lib.translate.yin_suncezhouyu = '孙策周瑜';
                lib.translate.gai_luotong = '骆统';
                lib.translate.yin_mouzhaoyun = '谋赵云';
                lib.translate.gai_liru = '李儒';
                lib.translate.yin_zhugeguo = '诸葛果';
                lib.translate.yin_lvlingqi = '吕玲绮';
                lib.translate.gai_shenzhaoyun = '神赵云';
                lib.translate.yin_lingtong = '凌统';
                lib.translate.yin_zhangxiu = '张绣';
                lib.translate.yin_jushou = '沮授';
                lib.translate.yin_shibao = '石苞';
                lib.translate.yin_sunliang = '孙亮';
                lib.translate.yin_liuyong = '刘永';
                lib.translate.yin_lvkai = '吕凯';
                lib.translate.yin_simashi = '司马师';
                lib.translate.yin_lukang = '陆抗';
                lib.translate.yinsp_jiaxu = '贾诩';
                lib.translate.yin_fanchou = '樊稠';
                lib.translate.yin_wuguotai = '吴国太';
                lib.translate.yin_baolongchenying = '鲍隆陈应';
                lib.translate.yin_juyi = '麴义';
                lib.translate.yin_sunhao = '孙皓';
                lib.translate.yin_beimihu = '卑弥呼';
                lib.translate.yin_wolongfengchu = '卧龙凤雏';
                lib.translate.yin_zhanggong = '张恭';
            }
            lib.element.player.$throwEmotion = function (target, name) {
                game.addVideo('throwEmotion', this, [target.dataset.position, name]);
                var getLeft = function (player) {
                    if (player == game.me && !ui.fakeme && !ui.chess) return player.getLeft() + player.node.avatar.offsetWidth / 2;
                    return player.getLeft() + player.offsetWidth / 2;
                };
                var player = this;
                if (target.hasSkill('yin_qianjie') && name == 'egg') {
                    game.log(player, '对', target, '的', '#y砸蛋', '改为了', '<font color=#F08080>送花</font>');
                    name = 'flower';
                }
                var emotion = ui.create.div('', '<div style="text-align:center"> <img src="image/emotion/throw_emotion/' + name + '1.png"> </div>', game.chess ? ui.chess : ui.window);
                emotion.style.width = '60px';
                emotion.style.height = '60px';
                var width = emotion.offsetWidth / 2;
                var height = emotion.offsetHeight / 2;
                if (game.chess) width += 60;
                var left = getLeft(player) - width;
                var top = player.getTop() + player.offsetHeight / 3 - height;
                emotion.style.left = left + 'px';
                emotion.style.top = top + 'px';
                if (['egg', 'flower', 'shoe', 'jiaozi'].includes(name)) {
                    var num1 = 0.95 + Math.random() * (1.1 - 0.95);
                    var num2 = 1 + Math.random() * (3 - 1);
                    var left2 = getLeft(target) / num1 - width;
                    var top2 = target.getTop() + target.offsetHeight / num2 - height;
                } else {
                    var left2 = getLeft(target) - width;
                    var top2 = target.getTop() + target.offsetHeight / 3 - height;
                }
                emotion.style['z-index'] = 10;
                emotion.style.transform = 'translateY(' + (top2 - top) + 'px) translateX(' + (left2 - left) + 'px)';
                if (['egg', 'flower', 'shoe', 'jiaozi'].includes(name)) emotion.firstElementChild.style.transform = 'rotate(1440deg)';
                if (lib.config.background_audio) game.playAudio('effect/throw_' + name + get.rand(1, 2));
                setTimeout(function () {
                    emotion.innerHTML = '<div style="text-align:center"> <img src="image/emotion/throw_emotion/' + name + '2.png"> </div>';
                    setTimeout(function () {
                        emotion.delete();
                    }, 1200);
                }, 600);
            };
            if (game.getFileList) {
                game.getFileList('image/emotion/throw_emotion', (folders, files) => {
                    if (!files.includes('jiaozi1.png')) {
                        if (game.readFile && game.writeFile) {
                            game.readFile('extension/阴包武将/jiaozi.png', (data) => {
                                game.writeFile(data, 'image/emotion/throw_emotion', 'jiaozi1.png', function () { });
                            });
                        }
                    }
                    if (!files.includes('jiaozi2.png')) {
                        if (game.readFile && game.writeFile) {
                            game.readFile('extension/阴包武将/jiaozi.png', (data) => {
                                game.writeFile(data, 'image/emotion/throw_emotion', 'jiaozi2.png', function () { });
                            });
                        }
                    }
                });
            }
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '阴包武将',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    characterIntro: {
                    },
                    skill: {
                        gai_yingba: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter: (event, player) => game.hasPlayer((current) => current != player && current.maxHp > 1),
                            filterTarget: (card, player, target) => target != player && target.maxHp > 1,
                            content() {
                                'step 0';
                                target.loseMaxHp();
                                ('step 1');
                                if (target.isIn()) target.addMark('gai_yingba_mark', 1);
                                player.loseMaxHp();
                                player.draw();
                            },
                            global: 'gai_yingba_mark',
                            mod: {
                                targetInRange(card, player, target) {
                                    if (target.hasMark('gai_yingba_mark')) return true;
                                },
                            },
                            subSkill: {
                                mark: {
                                    marktext: '定',
                                    intro: {
                                        name: '平定',
                                        content: 'mark',
                                    },
                                    mod: {
                                        maxHandcard(player, numx) {
                                            var num = player.countMark('gai_yingba_mark');
                                            if (num > 0)
                                                return (
                                                    numx +
                                                    num *
                                                    game.countPlayer(function (current) {
                                                        return current.hasSkill('gai_yingba');
                                                    })
                                                );
                                        },
                                    },
                                },
                            },
                        },
                        gaifuhai: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.target && event.target.hasMark('gai_yingba_mark');
                            },
                            logTarget: 'target',
                            content() {
                                trigger.directHit.add(trigger.target);
                                player.draw();
                            },
                            group: ['gaifuhai_die'],
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return arg && arg.target && arg.target.hasMark('gai_yingba_mark');
                                },
                            },
                            subSkill: {
                                usea: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return lib.skill.gaifuhai_usea.logTarget(event, player).length;
                                    },
                                    logTarget(event, player) {
                                        return event.targets.filter(function (i) {
                                            return i.hasMark('gai_yingba_mark');
                                        });
                                    },
                                    content() {
                                        var num = 0;
                                        for (var i of trigger.targets) {
                                            var numx = i.countMark('gai_yingba_mark');
                                            if (numx) {
                                                num += numx;
                                                i.removeMark('gai_yingba_mark', numx);
                                            }
                                        }
                                        if (num > 0) player.gainMaxHp(num);
                                    },
                                },
                                die: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.countMark('gai_yingba_mark') > 0;
                                    },
                                    content() {
                                        player.gainMaxHp(trigger.player.countMark('gai_yingba_mark'));
                                        player.draw(trigger.player.countMark('gai_yingba_mark'));
                                    },
                                },
                            },
                        },
                        gai_pinghe: {
                            audio: 'ext:阴包武将/audio:2',
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                            },
                            trigger: {
                                player: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source != player && player.maxHp > 1 && player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    prompt: '请选择【冯河】的牌和目标',
                                    prompt2: '将一张手牌交给一名其他角色并防止伤害' + (player.hasSkill('gai_yingba') ? ',令伤害来源获得一个<平定>标记' : ''),
                                    filterCard: true,
                                    forced: true,
                                    filterTarget: lib.filter.notMe,
                                    ai1(card) {
                                        if (
                                            get.tag(card, 'recover') &&
                                            !game.hasPlayer(function (current) {
                                                return get.attitude(current, player) > 0 && !current.hasSkillTag('nogain');
                                            })
                                        )
                                            return 0;
                                        return 1 / Math.max(0.1, get.value(card));
                                    },
                                    ai2(target) {
                                        var player = _status.event.player,
                                            att = get.attitude(player, target);
                                        if (target.hasSkillTag('nogain')) att /= 9;
                                        return 4 + att;
                                    },
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.gain(result.cards, player, 'giveAuto');
                                    trigger.cancel();
                                    player.loseMaxHp();
                                    if (player.hasSkill('gai_yingba')) {
                                        trigger.source.addMark('gai_yingba_mark', 1);
                                    }
                                }
                            },
                        },
                        yinxianchen: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.sex == 'male' && current.countCards('h') > 0;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('yinxianchen'), function (card, player, target) {
                                        return target.sex == 'male' && target != player && target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.swapHandcards(result.targets[0]);
                                    var nh = result.targets[0].countCards('h') - player.countCards('h');
                                    var nh2 = Math.abs(nh);
                                    if (nh > 0) {
                                        result.targets[0].draw(nh2);
                                    } else if (nh < 0) {
                                        player.draw(nh2);
                                    }
                                }
                            },
                        },
                        yinqixiang: {
                            enable: 'phaseUse',
                            audio: 'ext:阴包武将/audio:2',
                            usable: 2,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            check: (card) => 6 - get.value(card), //QQQ
                            discard: true,
                            lose: true,
                            delay: false,
                            forced: true,
                            content() {
                                'step 0';
                                event.card = get.cardPile(function (card) {
                                    return get.type(card) == 'equip';
                                });
                                if (!event.card) {
                                    player.popup('祁骧失败');
                                    game.log('牌堆中无装备');
                                    event.finish();
                                    return;
                                }
                                ('step 1');
                                player.chooseTarget('选择一名角色装备' + get.translation(event.card), true).set('ai', function (target) {
                                    var att = get.attitude(player, target);
                                    if (target == player) att += 10;
                                    return att;
                                });
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].equip(event.card, true).set('delay', true);
                                    result.targets[0].$draw(event.card);
                                    result.targets[0].draw();
                                }
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') > 2) return 1;
                                        return 0;
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        yinpiaomiao: {
                            audio: 'ext:阴包武将/audio:2',
                            subSkill: {
                                tiaoqipai: {
                                    mark: true,
                                    marktext: '缥缈',
                                    intro: {
                                        content(storage, player, skill) {
                                            return '本回合你跳过弃牌阶段';
                                        },
                                    },
                                    audio: 'yinpiaomiao',
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('yinpiaomiao_tiaoqipai');
                                } else {
                                    if (get.is.altered('yinpiaomiao')) {
                                        player.gain([result.target]);
                                        player.$gain2([result.target]);
                                    } else {
                                        player.gain([result.target]);
                                        player.$gain2([result.target]);
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        var cards = player.getCards('h');
                                        var num = target.countCards('h');
                                        if (num > cards.length + 3 && player.hp > 1) return -2;
                                        if (num > cards.length + 1 && player.hp > 1) return -1;
                                        if (num == cards.length - 1 && player.hp > 1 && !get.is.altered('pozhen')) return -1;
                                        for (var i = 0; i < cards.length; i++) {
                                            if (cards[i].number > 9) return num == 1 ? -1 : -0.5;
                                        }
                                        return 0;
                                    },
                                },
                                order: 9,
                            },
                        },
                        yinxuwu: {
                            trigger: {
                                global: 'gameStart',
                                player: 'gainMaxHpEnd',
                            },
                            _priority: -9,
                            forced: true,
                            popup: false,
                            content() {
                                player.maxHp = 0;
                                player.update();
                            },
                        },
                        yinshenwei: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += Math.min(4, game.players.length - 1);
                            },
                            mod: {
                                maxHandcard(player, current) {
                                    return current + Math.min(4, game.players.length - 1);
                                },
                            },
                        },
                        yinshenji: {
                            audio: 'ext:阴包武将/audio:2',
                            mod: {
                                selectTarget(card, player, range) {
                                    if (range[1] == -1) return;
                                    if (card.name == 'sha') range[1] += 2;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                        },
                        yinfangtian: {
                            audio: 'ext:阴包武将/audio:2',
                            usable: 1,
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(
                                        '选择至多两名角色视为对这些角色使用一张【杀】',
                                        function (card, player, target) {
                                            var tx = trigger.player;
                                            if (player.canUse({ name: 'sha' }, target) && (tx.next == target || tx.previous == target)) return true;
                                            return false;
                                        },
                                        [1, 2]
                                    )
                                    .set('ai', function (target) {
                                        return get.effect(_status.event.player, { name: 'sha' }, target, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, result.targets, false, 'noai');
                                }
                            },
                        },
                        yinjuejing: {
                            audio: 'ext:阴包武将/audio:2',
                            mod: {
                                maxHandcard(player, num) {
                                    return 2 + num;
                                },
                            },
                            audio: 2,
                            trigger: { player: ['dying', 'dyingAfter'] },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        yinbuqu: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        yinzhuiji: {
                            audio: 'ext:阴包武将/audio:2',
                            global: 'yinzhuiji2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                target.addSkill('yinzhuiji_mark');
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: -1,
                                },
                            },
                            group: 'yinzhuiji_rem',
                            subSkill: {
                                rem: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasSkill('yinzhuiji_mark');
                                        });
                                    },
                                    content() {
                                        game.filterPlayer(function (current) {
                                            if (current.hasSkill('yinzhuiji_mark')) current.removeSkill('yinzhuiji_mark');
                                        });
                                    },
                                },
                                mark: {
                                    mark: true,
                                    marktext: '追击',
                                    intro: {
                                        content() {
                                            return ['一抔之土未干,六尺之孤何托？', '请看今日之域中,竟是谁家之天下!', '人神之所同嫉,天地之所不容', '犹复包藏祸心,窥窃神器', '霍子孟之不作,朱虚侯之已亡'].randomGet();
                                        },
                                    },
                                },
                            },
                        },
                        yinzhuiji2: {
                            mod: {
                                globalFrom(from, to) {
                                    if (to.hasSkill('yinzhuiji_mark')) return -Infinity;
                                },
                            },
                        },
                        yinqice: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                global: 'useCard',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                if (player.countMark('yinqice') >= 12) return false;
                                if (event.name == 'damage') return true;
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                player.addMark('yinqice', 1);
                            },
                            marktext: '奇策',
                            intro: {
                                content: 'mark',
                            },
                        },
                        jingzhi: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            usable: 100,
                            filter(event, player) {
                                if (!player.countMark('yinqice') || !player.countCards('hes')) return false;
                                return event.type != 'wuxie' && player.countCards('hes') > 0;
                            },
                            init(player) {
                                if (!player.storage.jingzhi) player.storage.jingzhi = [];
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (player.storage.jingzhi.includes(name)) continue;
                                        if (name == 'sha') {
                                            list.push(['基本', '', 'sha']);
                                            for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                        } else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                    }
                                    if (list.length == 0) {
                                        return ui.create.dialog('锦智已无可用牌/牌名');
                                    }
                                    return ui.create.dialog('锦智', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        audio: 'ext:阴包武将/audio:2',
                                        selectCard: 1,
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        onuse(result, player) {
                                            player.removeMark('yinqice', 1);
                                            var evt = _status.event.getParent('phase');
                                            if (evt && evt.name == 'phase' && !evt.jingzhi) {
                                                evt.jingzhi = true;
                                                var next = game.createEvent('taoluan_clear');
                                                _status.event.next.remove(next);
                                                evt.after.push(next);
                                                next.player = player;
                                                next.setContent(function () {
                                                    player.storage.jingzhi = [];
                                                });
                                            }
                                            player.storage.jingzhi.add(result.card.name);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                        },
                        miaomou: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.countMark('yinqice') || !player.countCards('hes') || player.hasSkill('miaomou2')) return false;
                                for (var i of lib.inpile) {
                                    var type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                            for (var j of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                            }
                                        } else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                        else if (name == 'wuxie' && get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                    }
                                    return ui.create.dialog('妙谋', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        audio: 'ext:阴包武将/audio:2',
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.addTempSkill('miaomou2');
                                            player.removeMark('yinqice', 1);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                var type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countMark('yinqice') > 0 && player.countCards('hes') > 0 && !player.hasSkill('miaomou2');
                            },
                            ai: {
                                combo: 'yinqice',
                                expose: 0.3,
                                save: true,
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countMark('yinqice') || !player.countCards('hes') || player.hasSkill('miaomou2')) return false;
                                },
                                order: 1,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        miaomou2: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            charlotte: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'miaomou_backup';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        yinliezhu: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            filter(event, player, name) {
                                var stat = player.getStat().skill;
                                if (!stat.yinliezhu) stat.yinliezhu = 0;
                                if (stat.yinliezhu > 1) return false;
                                if (player.hp < player.countCards('h')) return false;
                                if (name == 'damageEnd' && !player.storage.yinlihan) return false;
                                if (stat.yinliezhu > 0 && !player.storage.yinlihan) return false;
                                return true;
                            },
                            content() {
                                var stat = player.getStat().skill;
                                stat.yinliezhu++;
                                var num = player.hp - player.countCards('h');
                                var mhp = player.maxHp;
                                if (num >= 0) player.draw(mhp);
                            },
                            ai: {
                                threaten: 1.1,
                                expose: 0.05,
                            },
                        },
                        yinyijie: {
                            audio: 'ext:阴包武将/audio:2',
                            marktext: '义杰',
                            trigger: {
                                source: 'damageSource',
                                player: ['damageEnd', 'enterGame'],
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return (event.name != 'damage' && (event.name != 'phase' || game.phaseNumber == 0)) || event.num > 0;
                            },
                            content() {
                                player.addMark('yinyijie', trigger.name == 'damage' ? trigger.num : 1);
                            },
                            intro: {
                                name: '义杰',
                                content: 'mark',
                            },
                        },
                        yinlihan: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            audio: 'ext:阴包武将/audio:2',
                            juexingji: true,
                            derivation: 'yinlongfen',
                            forced: true,
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = false;
                            },
                            filter(event, player) {
                                if (player.storage.yinlihan) return false;
                                return player.countMark('yinyijie') >= 4;
                            },
                            content() {
                                player.awakenSkill('yinlihan');
                                player.storage.yinlihan = true;
                                player.loseMaxHp();
                                player.recover();
                                player.addSkill('yinlongfen');
                                player.removeMark('yinyijie', 4);
                            },
                        },
                        yinlongfen: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.hp == player.maxHp) return false;
                                return player.countMark('yinyijie') >= 4;
                            },
                            content() {
                                'step 0';
                                player.removeMark('yinyijie', 4);
                                player.chooseTarget(get.prompt2('yinlongfen'), function (card, player, target) {
                                    return player != target;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var mbsp = result.targets[0].getCards('hej');
                                    player.discardPlayerCard(result.targets[0], 10000, 'hej', true);
                                    result.targets[0].damage();
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        yinzhenghai: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                var sqxl = player.getDamagedHp();
                                return (player.getStat('skill').yinzhenghai || 0) < Math.max(1, player.getDamagedHp()) && player.countCards('h') > 0;
                            },
                            filterCard: true,
                            discard: false,
                            lose: false,
                            delay: false,
                            position: 'h',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                var num = get.value(card);
                                if (get.color(card) == 'black') {
                                    return 9 - num;
                                } else {
                                    return 9 - num;
                                }
                            },
                            content() {
                                'step 0';
                                target.gain(cards, player, 'giveAuto');
                                if (player.hp <= player.maxHp) {
                                    var sqx = player.getDamagedHp() + 1;
                                    target
                                        .chooseToDiscard(Math.max(2, sqx), 'he', '弃置X+1张牌,或受到1点伤害并令' + get.translation(player) + '摸X+1张牌(X为其已损失体力值且至少为1)')
                                        .set('ai', function (card) {
                                            if (!_status.event.goon) return -get.value(card);
                                            return 10 - get.value(card);
                                        })
                                        .set('goon', get.attitude(target, player) < 0);
                                }
                                ('step 1');
                                if (!result.bool) {
                                    target.damage();
                                    var wwmp = Math.max(1, player.getDamagedHp()) + 1;
                                    player.draw(wwmp);
                                }
                            },
                            ai: {
                                order: 5,
                                expose: 0.8,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) > 0) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        yinjuefen: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > player.countMark('yinjuefen');
                            },
                            content() {
                                'step 0';
                                var num = 1 - player.hp;
                                var xl = player.hp;
                                var fdcc = player.countMark('yinjuefen');
                                if (player.countCards('he') >= fdcc && xl <= 0) player.recover(num);
                                ('step 1');
                                var jf = player.countMark('yinjuefen');
                                if (player.hp > 0) player.chooseToDiscard(jf, 'he', true);
                                if (player.hp > 0) player.addMark('yinjuefen', 1);
                            },
                            marktext: '绝奋',
                            intro: {
                                content: 'mark',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    var jfs = player.countMark('yinjuefen');
                                    return num + jfs;
                                },
                            },
                            ai: {
                                expose: 0.01,
                                threaten: 0.8,
                            },
                        },
                        yinniqi: {
                            trigger: {
                                player: 'recoverEnd',
                            },
                            forced: true,
                            audio: 'ext:阴包武将/audio:2',
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            content() {
                                player.removeMark('yinjuefen', 1);
                                trigger.source.draw();
                            },
                        },
                        yinminghu: {
                            trigger: {
                                global: 'dying',
                            },
                            audio: 'ext:阴包武将/audio:2',
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('yinminghu2')) return false;
                                return event.player != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget(event) {
                                return event.player;
                            },
                            content() {
                                'step 0';
                                var di = 1 - trigger.player.hp;
                                trigger.player.recover(di);
                                player.addTempSkill('yinminghu2');
                                ('step 1');
                                var jfbj = player.countMark('yinjuefen');
                                player.damage(Math.max(1, jfbj));
                                var jfbjs = player.countMark('yinjuefen');
                                player.draw(Math.max(1, jfbjs));
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        yinminghu2: {
                            mark: true,
                            marktext: '护主',
                            intro: {
                                content: '已发动命护',
                            },
                        },
                        yintuxi: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            check(event, player) {
                                if (player.hp <= 2 && !player.storage.yinduorui) return false;
                                return player.storage.yinduorui;
                            },
                            content() {
                                'step 0';
                                var wjxl = player.hp + 1;
                                player.chooseTarget(
                                    get.prompt('yintuxi'),
                                    '获得至多X+1名其他角色的一张手牌(X为你的体力值)',
                                    [1, wjxl],
                                    function (card, player, target) {
                                        return player != target && target.countCards('h') > 0;
                                    },
                                    function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (target.hasSkill('tuntian')) return att / 10;
                                        return 1 - att;
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets;
                                    player.gainMultiple(targets);
                                    if (player.hp == player.maxHp && !player.storage.yinduorui) player.loseHp();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 1.5,
                                expose: 0.2,
                            },
                        },
                        yinposhi: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                player.addMark('yinposhi', trigger.num);
                            },
                            marktext: '破势',
                            intro: {
                                name: '破势',
                                content: 'mark',
                            },
                            group: 'yinposhi_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var wjsp = player.countCards('h');
                                        if (event.player.countCards('h') > wjsp) return false;
                                        return player != event.player && _status.currentPhase == player;
                                    },
                                    content() {
                                        player.addMark('yinposhi', 1);
                                    },
                                },
                            },
                        },
                        yinduorui: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            audio: 'ext:阴包武将/audio:2',
                            juexingji: true,
                            derivation: 'yinzhenwu',
                            forced: true,
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = false;
                            },
                            filter(event, player) {
                                if (player.storage.yinduorui) return false;
                                return player.countMark('yinposhi') >= 4;
                            },
                            content() {
                                player.awakenSkill('yinduorui');
                                player.storage.yinduorui = true;
                                var hxl = player.maxHp - player.hp;
                                player.addSkill('yinzhenwu');
                                player.recover(hxl);
                                psbjszw = player.countMark('yinposhi');
                            },
                        },
                        yinzhenwu: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('yinposhi') >= 1;
                            },
                            content() {
                                player.removeMark('yinposhi', 1);
                                trigger.num++;
                            },
                            mod: {
                                globalFrom(from, to, distance, player) {
                                    return distance - psbjszw;
                                },
                            },
                            group: 'yinzhenwu_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        return !player.getHistory('sourceDamage').length;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeMark('yinposhi', 1);
                                        ('step 1');
                                        var zwmp = player.countMark('yinposhi');
                                        player.draw(zwmp);
                                    },
                                },
                            },
                        },
                        yinqieer: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                var target = event.player;
                                if (target.getHistory('skipped').includes('phaseUse')) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                var target = trigger.player;
                                event.target = target;
                                event.logged = false;
                                ndxl = player.hp + 0;
                                ('step 2');
                                if (!target.getHistory('sourceDamage').length) player.draw();
                                if (player.getHistory('damage').length > 1) player.recover();
                                ('step 3');
                                if (
                                    target.getHistory('useCard', function (evt) {
                                        return (
                                            evt.targets &&
                                            evt.targets.filter(function (i) {
                                                return i != target;
                                            }).length
                                        );
                                    }).length != 0
                                )
                                    event.finish();
                                ('step 4');
                                player.chooseBool('是否发动【窃耳】令你与当前回合角色各摸X张牌？(X为你的体力值)').set('frequentSkill', 'yinqieer');
                                ('step 5');
                                if (result.bool) {
                                    player.draw(ndxl);
                                    if (target != player) target.draw(ndxl);
                                }
                            },
                        },
                        yinjike: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.es && evt.es.length;
                            },
                            content() {
                                'step 0';
                                event.count = trigger.getl(player).es.length;
                                ('step 1');
                                event.count--;
                                player.draw();
                                player.recover();
                                ('step 2');
                                if (event.count > 0) {
                                    event.goto(1);
                                }
                            },
                        },
                        yinjuexun: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (player.isPhaseUsing()) return true;
                                },
                                cardUsable(card, player, num) {
                                    if (player.hasSkill('yinjuexun2')) return Infinity;
                                },
                            },
                            audio: 'ext:阴包武将/audio:2',
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (!player.hasSkill('yinjuexun2')) return false;
                                return player.isPhaseUsing() && (event.card.name == 'sha' || get.type(event.card) == 'trick');
                            },
                            content() {
                                trigger.nowuxie = true;
                                trigger.directHit.addArray(game.players);
                            },
                            group: 'yinjuexun_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player != event.player;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                        ('step 1');
                                        if (!player.hasSkill('yinjuexun2')) player.addTempSkill('yinjuexun2');
                                    },
                                },
                            },
                        },
                        yinjuexun2: {
                            charlotte: true,
                            mark: true,
                            marktext: '绝勋',
                            intro: {
                                content: '使用牌不限次数、无法被响应',
                            },
                        },
                        yinziwang: {
                            trigger: {
                                global: 'dying',
                            },
                            audio: 'ext:阴包武将/audio:2',
                            forced: true,
                            filter(event, player) {
                                var stat = player.getStat().skill;
                                if (!stat.yinziwang) stat.yinziwang = 0;
                                return _status.currentPhase == player;
                            },
                            check(event, player) {
                                var stat = player.getStat().skill;
                                if (player.hp > 2 && player.countMark('yinziwang') >= 4) return true;
                                var stat = player.getStat().skill;
                                if (player.hp < 4 && stat.yinziwang > 1) return false;
                                var stat = player.getStat().skill;
                                return stat.yinziwang == 0;
                            },
                            content() {
                                'step 0';
                                mps = Math.min(4, player.countMark('yinziwang')) + 1;
                                ('step 1');
                                player.draw(mps);
                                player.addMark('yinziwang', 1);
                                var stat = player.getStat().skill;
                                stat.yinziwang++;
                                ('step 2');
                                var stat = player.getStat().skill;
                                if (stat.yinziwang > 1) player.loseHp();
                            },
                            marktext: '自望',
                            intro: {
                                content: '<自望>已发动次数',
                            },
                            group: 'yinziwang_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    forced: true,
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        if (player.isPhaseUsing()) return false;
                                        if (_status.currentPhase == player) return false;
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        amw = player.hp;
                                        ('step 1');
                                        player.draw(Math.max(1, amw));
                                        player.addMark('yinziwang', 1);
                                    },
                                },
                            },
                        },
                        yintianhan: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            _priority: 10,
                            filter(event, player) {
                                return game.players.length >= 1 && (event.name != 'phase' || game.phaseNumber == 0);
                            },
                            content() {
                                var num = game.countGroup();
                                player.gainMaxHp(num);
                                player.recover(1);
                            },
                            group: 'yintianhan_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.maxHp > 2;
                                    },
                                    content() {
                                        'step 0';
                                        player.loseMaxHp(1);
                                        ('step 1');
                                        var tmxh = 1 - player.hp;
                                        player.recover(tmxh);
                                        player.draw();
                                        player.addMark('yintianhan_1', 1);
                                    },
                                    marktext: '天汉',
                                    intro: {
                                        content: '加手牌上限',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            var ths = player.countMark('yintianhan_1');
                                            return num + ths;
                                        },
                                    },
                                },
                            },
                        },
                        yinshizhao: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                szsj = [0, 1, 2, 3].randomGet();
                                ('step 1');
                                if (szsj == 0) {
                                    player.addTempSkill('rewenji', { player: 'phaseBeginStart' });
                                    player.addTempSkill('new_liyu', { player: 'phaseBeginStart' });
                                    player.addTempSkill('shiyuan', { player: 'phaseBeginStart' });
                                    player.addTempSkill('rangjie', { player: 'phaseBeginStart' });
                                }
                                if (szsj == 1) {
                                    player.addTempSkill('kaikang', { player: 'phaseBeginStart' });
                                    player.addTempSkill('reqingxi', { player: 'phaseBeginStart' });
                                    player.addTempSkill('huituo', { player: 'phaseBeginStart' });
                                    player.addTempSkill('reguicai', { player: 'phaseBeginStart' });
                                }
                                if (szsj == 2) {
                                    player.addTempSkill('yingzi', { player: 'phaseBeginStart' });
                                    player.addTempSkill('rezhijian', { player: 'phaseBeginStart' });
                                    player.addTempSkill('repojun', { player: 'phaseBeginStart' });
                                    player.addTempSkill('mingzhe', { player: 'phaseBeginStart' });
                                }
                                if (szsj == 3) {
                                    player.addTempSkill('tunchu', { player: 'phaseBeginStart' });
                                    player.addTempSkill('rende', { player: 'phaseBeginStart' });
                                    player.addTempSkill('xiangle', { player: 'phaseBeginStart' });
                                    player.addTempSkill('xinliegong', { player: 'phaseBeginStart' });
                                }
                            },
                        },
                        yinshigua: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: 'judgeEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('yinshigua2')) return false;
                                return true;
                            },
                            content() {
                                if (player.countMark('yinshigua') < 10) player.addMark('yinshigua', 1);
                                player.draw();
                            },
                            marktext: '卦象',
                            intro: {
                                content: '少年,来算一卦？',
                            },
                            group: ['yinshigua_1', 'yinshigua_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseZhunbei',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.hasSkill('yinshigua2')) return false;
                                        return player.countMark('yinshigua') <= 6;
                                    },
                                    content() {
                                        var bxjs = [0, 1, 2, 3].randomGet();
                                        player.addMark('yinshigua', bxjs);
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseJieshu',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.hasSkill('yinshigua2')) return false;
                                        return player.countMark('yinshigua') > 6;
                                    },
                                    content() {
                                        var bxjs = [0, 1, 2, 3].randomGet();
                                        player.removeMark('yinshigua', bxjs);
                                    },
                                },
                            },
                        },
                        yinxiaoshi: {
                            audio: 'ext:阴包武将/audio:1',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                return !event.numFixed;
                            },
                            check(event, player) {
                                if (player.countCards('h') >= Math.max(3, player.countMark('yinshigua'))) return false;
                                return player.countMark('yinshigua') > 0;
                            },
                            content() {
                                'step 0';
                                player.discard(player.getCards('h'));
                                ('step 1');
                                var gxs = player.countMark('yinshigua');
                                player.draw(Math.max(3, gxs));
                            },
                            group: ['yinxiaoshi_1', 'yinxiaoshi_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:1',
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    filter(event, player) {
                                        if (player.countMark('yinshigua') == 0) return false;
                                        if (player.countCards('h') == 0) return false;
                                        return player.countMark('yinshigua') != player.countCards('h');
                                    },
                                    check(event, player) {
                                        if (player.countCards('h') < player.hp) return false;
                                        return player.countMark('yinshigua') > 15;
                                    },
                                    content() {
                                        player.removeMark('yinshigua', 1);
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    audio: 'ext:阴包武将/audio:1',
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var gxtl = Math.max(3, player.countMark('yinshigua'));
                                        player.maxHp = gxtl;
                                        player.update();
                                        ('step 1');
                                        var gxbp = player.maxHp - player.countCards('h');
                                        player.draw(Math.min(5, gxbp));
                                    },
                                },
                            },
                        },
                        yinmingjie: {
                            audio: 'ext:阴包武将/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                var shz = player.countMark('yinshigua');
                                player.draw(shz);
                                ('step 1');
                                player.addTempSkill('yinshigua2', 'roundStart');
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.countMark('yinshigua') > 4 && target.hp > 5) return [1, get.tag(card, 'damage') * 2];
                                            if (target.countMark('yinshigua') <= 4 || target.hp <= 5) return [1, get.tag(card, 'damage') * 1];
                                            return 0;
                                        }
                                    },
                                },
                            },
                            group: 'yinmingjie_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:1',
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        var sdsh = event.num;
                                        return player.countMark('yinshigua') >= sdsh;
                                    },
                                    check(event, player) {
                                        var chsh = player.countMark('yinshigua') - event.num;
                                        if (player.hp <= 2) return true;
                                        if (chsh >= 2) return false;
                                        if (player.hp == player.maxHp) return false;
                                        return player.countMark('yinshigua') > 1;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeMark('yinshigua', trigger.num);
                                        trigger.cancel();
                                        ('step 1');
                                        player.recover();
                                    },
                                    ai: {
                                        threaten: 0.6,
                                        expose: 0.05,
                                    },
                                },
                            },
                        },
                        yinshigua2: {
                            mark: true,
                            marktext: '错算',
                            intro: {
                                content: '势卦失效直到新一轮开始',
                            },
                        },
                        yinliangju: {
                            audio: 'ext:阴包武将/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.subtype(event.card) == 'equip3' || get.subtype(event.card) == 'equip4';
                            },
                            content() {
                                player.draw();
                            },
                            mod: {
                                globalFrom(from, to, current) {
                                    return current - from.hp;
                                },
                            },
                        },
                        yinxiongyi: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:阴包武将/audio:2',
                            position: 'he',
                            filterCard: true,
                            check(card) {
                                var num = get.value(card);
                                if (get.type(card) == 'equip') return 11 - num;
                                return 7 - num;
                            },
                            content() {
                                if (get.type(cards[0], null, cards[0].original == 'h' ? player : false) != 'equip') player.draw(3);
                                if (get.type(cards[0], null, cards[0].original == 'h' ? player : false) == 'equip') {
                                    player.draw(4);
                                    player.recover();
                                }
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        yinduanbing: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                                attackFrom(player, target, num) {
                                    return num - 1;
                                },
                            },
                            audio: 'ext:阴包武将/audio:2',
                            forced: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return player != event.player && event.card && event.card.name == 'sha' && event.player.countCards('he') >= 0;
                            },
                            content() {
                                if (trigger.player.countGainableCards(player, 'he') > 0) {
                                    player.gainPlayerCard(trigger.player, 'he', true);
                                } else {
                                    player.draw();
                                }
                            },
                            group: 'yinduanbing_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.name == 'sha' && !event.parent.directHit.includes(event.target) && get.distance(player, event.target) <= 1;
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
                                },
                            },
                        },
                        yinfenpo: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (player == event.player) return false;
                                if (event.player.countDisabled() >= 5) return false;
                                return player.countCards('h') >= 1 && event.player.isAlive();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                tp = trigger.player;
                                player.chooseToDiscard(1, 'he', '重铸一张牌,废除其随机一个装备栏').set('ai', function (card) {
                                    return 9 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    if (player.countCards('h') > tp.countCards('h') && player.hp < tp.hp) {
                                        tp.disableEquip('equip1');
                                        tp.disableEquip('equip2');
                                        tp.disableEquip('equip3');
                                        tp.disableEquip('equip4');
                                        tp.disableEquip('equip5');
                                        player.draw(3);
                                        event.finish();
                                    }
                                } else event.goto(2);
                                ('step 2');
                                if (result.bool) {
                                    if (!tp.isDisabled('equip5')) {
                                        player.draw();
                                        tp.disableEquip('equip5');
                                        event.finish();
                                    }
                                } else event.goto(3);
                                ('step 3');
                                if (result.bool) {
                                    if (!tp.isDisabled('equip1')) {
                                        player.draw();
                                        tp.disableEquip('equip1');
                                        event.finish();
                                    }
                                } else event.goto(4);
                                ('step 4');
                                if (result.bool) {
                                    if (!tp.isDisabled('equip2')) {
                                        player.draw();
                                        tp.disableEquip('equip2');
                                        event.finish();
                                    }
                                } else event.goto(5);
                                ('step 5');
                                if (result.bool) {
                                    if (!tp.isDisabled('equip3')) {
                                        player.draw();
                                        tp.disableEquip('equip3');
                                        event.finish();
                                    }
                                } else event.goto(6);
                                ('step 6');
                                if (result.bool) {
                                    if (!tp.isDisabled('equip4')) {
                                        player.draw();
                                        tp.disableEquip('equip4');
                                        event.finish();
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.2,
                                expose: 0.7,
                            },
                        },
                        yintanquan: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    prompt: get.prompt('yintanquan'),
                                    prompt2: '你可以将一张牌交给一名其他角色',
                                    filterCard: true,
                                    filterTarget(card, player, target) {
                                        return target != player;
                                    },
                                    position: 'he',
                                    ai1(card) {
                                        return 12 - get.value(card);
                                    },
                                    ai2(target) {
                                        var player = _status.event.player,
                                            card = ui.selected.cards[0];
                                        if (get.value(card, target) < 0) return -get.attitude(player, target);
                                        if (get.value(card, target) < 1) return 0.01 * -get.attitude(player, target);
                                        return Math.max(1, get.value(card, target) - get.value(card, player)) * get.attitude(player, target);
                                    },
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.gain(result.cards, player, 'giveAuto');
                                }
                            },
                            group: 'yintanquan_2',
                            subSkill: {
                                2: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        if (event.source == undefined) return false;
                                        if (player.hp > event.source.hp) return false;
                                        return event.num > 0;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.source) <= 0;
                                    },
                                    content() {
                                        player.draw();
                                        var ts = trigger.source;
                                        ts.damage();
                                    },
                                    ai: {
                                        maixie: true,
                                        maixie_hp: true,
                                        effect: {
                                            target(card, player, target) {
                                                if (get.tag(card, 'damage')) {
                                                    if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                                    if (!target.hasFriend()) return;
                                                    if (player.hp >= target.hp && target.hp > 2) return [1, get.tag(card, 'damage') * 1.5];
                                                    return 0;
                                                }
                                            },
                                            player: -1,
                                        },
                                    },
                                },
                            },
                        },
                        yinshuaiyan: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: 'gainAfter',
                            },
                            filter(event, player) {
                                if (player == event.player) return false;
                                var evtx = event.getl(player);
                                return evtx && evtx.cards2 && evtx.cards2.length;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                player.draw();
                                var ttp = trigger.player;
                                ttp.damage();
                            },
                            group: 'yinshuaiyan_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filterTarget(card, player, target) {
                                        return target != player && target.countCards('h') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.viewHandcards(target);
                                        ('step 1');
                                        var nd = target.countCards('h', { color: 'black' });
                                        player.draw(Math.min(5, nd));
                                    },
                                    ai: {
                                        order: 8,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        yinxingguo: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'dyingAfter',
                            },
                            filter(event, player) {
                                return player.hp > 0 && !player.hasSkill('yinxingguo2');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.xgxl = player.hp;
                                player.chooseTarget(get.prompt2('yinxingguo'), function (card, player, target) {
                                    return target != player;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('yinxingguo2');
                                    var xgta = result.targets[0];
                                    player.hp = xgta.hp;
                                    xgta.hp = player.storage.xgxl;
                                }
                                ('step 2');
                                var xgta = result.targets[0];
                                player.update();
                                xgta.update();
                            },
                        },
                        yinxingguo2: {},
                        yinyanke: {
                            audio: 'ext:阴包武将/audio:2',
                            derivation: 'yinfuyan',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.isAlive() && !event.player.hasSkill('yinfuyan');
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                tp = trigger.player;
                                ('step 1');
                                tp.addSkill('yinfuyan');
                            },
                            group: 'yinyanke_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: ['phaseBegin', 'dyingBegin'],
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.hasSkill('yinfuyan');
                                        });
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var targets = game.filterPlayer(function (current) {
                                            return current != player && current.hasSkill('yinfuyan');
                                        });
                                        event.yktarget = targets;
                                        event.yktargets2 = event.yktarget.slice(0);
                                        ('step 1');
                                        if (event.yktargets2.length) {
                                            event.yktargets2.shift().draw();
                                            event.redo();
                                        }
                                    },
                                },
                            },
                        },
                        yinfuyan: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.hasSkill('yinyanke');
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var fytargets = game.filterPlayer(function (current) {
                                    return current != player && current.hasSkill('yinyanke');
                                });
                                event.fytarget = fytargets;
                                player.chooseCard('he', true, '前往赴宴:随个份子？');
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.cards, true);
                                    event.fytarget.shift().draw();
                                }
                            },
                            mark: true,
                            marktext: '赴宴',
                            intro: {
                                content: '答应前来参加宴席',
                            },
                            group: 'yinfuyan_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return player != event.player && event.player.hasSkill('yinyanke');
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        trigger.player.recover();
                                        ('step 1');
                                        player.removeSkill('yinfuyan');
                                    },
                                },
                            },
                        },
                        yinzhaozhu: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            derivation: 'yinzhaozhu2',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                target.addTempSkill('yinzhaozhu2', { player: 'phaseEnd' });
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                            },
                            group: 'yinzhaozhu_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.target && event.target.hasSkill('yinzhaozhu2') && event.target.hasSkill('yinfuyan');
                                    },
                                    logTarget: 'target',
                                    content() {
                                        var tt = trigger.target;
                                        trigger.directHit.add(trigger.target);
                                    },
                                },
                            },
                        },
                        yinzhaozhu2: {
                            mark: true,
                            marktext: '应诛',
                            intro: {
                                content: '手牌上限-1;受伤弃1牌,满足条件时受到伤害将+1',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 1;
                                },
                            },
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            charlotte: true,
                            forced: true,
                            content() {
                                player.chooseToDiscard('he', true);
                                var ts = trigger.source;
                                if (player.hasSkill('yinfuyan') && ts.hasSkill('yinzhaozhu')) trigger.num++;
                            },
                        },
                        yinxiangniang: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'jiu';
                            },
                            content() {
                                player.draw();
                                player.recover();
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'jiu') return Infinity;
                                },
                            },
                        },
                        yinducang: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard(1, 'he', get.prompt2('yinducang', trigger.player)).set('ai', function (card) {
                                    if (_status.event.nono) return -1;
                                    return 7 - get.useful(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseUseTarget({ name: 'jiu' }, true);
                                } else {
                                    event.finish();
                                }
                            },
                            group: 'yinducang_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        return event.card.name == 'jiu' && player.maxHp > 1;
                                    },
                                    check(event, player) {
                                        if (player.hasSkill('yinliangchu') && player.countMark('yinliangchu') < 1) return false;
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.countMark('yinliangchu') > 0) {
                                            player.removeMark('yinliangchu', 1);
                                        } else player.loseMaxHp();
                                        ('step 1');
                                        trigger.cancel();
                                        trigger.player.damage();
                                    },
                                },
                            },
                        },
                        yinshouying: {
                            audio: 'ext:阴包武将/audio:2',
                            juexingji: true,
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'dying'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hp <= 0) return true;
                                return player.maxHp <= 1;
                            },
                            derivation: 'yinliangchu',
                            content() {
                                'step 0';
                                player.awakenSkill('yinshouying');
                                player.maxHp = 4;
                                player.update();
                                player.recover(3);
                                ('step 1');
                                player.addSkill('yinliangchu');
                            },
                        },
                        yinliangchu: {
                            audio: 'ext:阴包武将/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.countMark('yinliangchu') < 3;
                            },
                            forced: true,
                            content() {
                                player.addMark('yinliangchu', 1);
                            },
                            marktext: '粮',
                            intro: {
                                content: '摸牌阶段多摸#张牌,手牌上限+#',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.countMark('yinliangchu');
                                },
                            },
                            group: ['yinliangchu_1', 'yinliangchu_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:1',
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    content() {
                                        trigger.num += player.countMark('yinliangchu');
                                    },
                                    ai: {
                                        threaten: 1.5,
                                    },
                                },
                                2: {
                                    audio: 'ext:阴包武将/audio:1',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.countMark('yinliangchu')) return false;
                                        return event.nature == 'fire';
                                    },
                                    content() {
                                        var ls = player.countMark('yinliangchu');
                                        player.removeMark('yinliangchu', ls);
                                    },
                                },
                            },
                        },
                        gaipaoxiao: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                source: 'damageAfter',
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (player.countMark('gaipaoxiao') >= 4) return false;
                                return event.card && event.card.name == 'sha' && event.source;
                            },
                            forced: true,
                            content() {
                                player.addMark('gaipaoxiao', 1);
                            },
                            marktext: '勇',
                            intro: {
                                name: '勇',
                                content: '回合开始时,获得#张杀',
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                targetInRange(card, player) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            group: 'gaipaoxiao_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:1',
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return player.countMark('gaipaoxiao') > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var i = 0;
                                        var list = [];
                                        var hds = player.countMark('gaipaoxiao');
                                        while (i++ < hds) {
                                            var card = get.discardPile(function (card) {
                                                if (card.name != 'sha') return false;
                                                if (!list.includes(card)) return true;
                                            });
                                            if (card) list.push(card);
                                            else {
                                                var card = get.cardPile2(function (card) {
                                                    if (card.name != 'sha') return false;
                                                    if (!list.includes(card)) return true;
                                                });
                                                if (card) list.push(card);
                                            }
                                        }
                                        event.list = list;
                                        ('step 1');
                                        player.gain(event.list, 'gain2');
                                    },
                                },
                            },
                        },
                        gailiyong: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isPhaseUsing();
                            },
                            content() {
                                player.addSkill('gailiyong2');
                            },
                        },
                        gailiyong2: {
                            audio: 'ext:阴包武将/audio:2',
                            mark: true,
                            marktext: '厉勇',
                            intro: {
                                content: '下一张【杀】不可被响应且伤害+X(<勇>数),指定的目标本回合非锁定技与防具失效',
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                var target = trigger.target;
                                target.addTempSkill('fengyin');
                                trigger.directHit.add(target);
                                var id = target.playerid;
                                var map = trigger.customArgs;
                                var ys = Math.max(1, player.countMark('gaipaoxiao'));
                                if (!map[id]) map[id] = {};
                                if (!map[id].extraDamage) map[id].extraDamage = 0;
                                map[id].extraDamage += ys;
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.target && player.hasSkill('gailiyong2')) return true;
                                    return false;
                                },
                            },
                            group: 'gailiyong2_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return player != event.player && event.card && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        var yss = player.countMark('gaipaoxiao');
                                        player.removeMark('gaipaoxiao', yss);
                                        player.removeSkill('gailiyong2');
                                    },
                                },
                            },
                        },
                        yinjuexiao: {
                            audio: 'ext:阴包武将/audio:1',
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                if (player.hasSkill('yinjuexiao2')) return false;
                                return event.card.name == 'shan' && event.player != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.addTempSkill('yinjuexiao2');
                                ('step 1');
                                var card = { name: 'sha' };
                                player.useCard(card, trigger.player, false);
                            },
                            group: ['yinjuexiao_1', 'yinjuexiao_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:1',
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        if (player.hasSkill('yinjuexiao3')) return false;
                                        return event.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.parent.excluded.add(player);
                                        player.addTempSkill('yinjuexiao3', 'roundStart');
                                    },
                                },
                                2: {
                                    audio: 'ext:阴包武将/audio:1',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        if (player.hasSkill('yinjuexiao2')) return false;
                                        return event.num > 0;
                                    },
                                    content() {
                                        if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') {
                                            player.gain(trigger.cards, 'gain2');
                                        } else player.draw();
                                        player.draw();
                                        player.addTempSkill('yinjuexiao2');
                                    },
                                    ai: {
                                        maixie: true,
                                        maixie_hp: true,
                                        effect: {
                                            target(card, player, target) {
                                                if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                                if (get.tag(card, 'damage') && player != target) return [1, 0.6];
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        yinjuexiao2: {},
                        yinlunying: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            derivation: 'yinchengying',
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('yinlunying'), '令一名角色获得<称英>').set('ai', (target) => get.attitude(_status.event.player, target)); //QQQ
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addTempSkill('yinchengying', { player: 'phaseEnd' });
                                }
                            },
                        },
                        yinchengying: {
                            audio: 'ext:阴包武将/audio:1',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += 2;
                            },
                            mark: true,
                            marktext: '称英',
                            intro: {
                                content: '摸牌阶段多摸2张牌,出牌阶段开始时回复一点体力,出牌阶段使用【杀】次数上限+1,手牌上限+2',
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                                maxHandcard(player, num) {
                                    return num + 2;
                                },
                            },
                            group: ['yinchengying_1', 'yinchengying_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:1',
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                    },
                                },
                                2: {
                                    audio: 'ext:阴包武将/audio:1',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.getHistory('sourceDamage').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cydx = player.hp;
                                        if (player.hasSkill('yinlunying')) {
                                            player.damage();
                                        } else player.loseHp(cydx);
                                        ('step 1');
                                        var cysp = player.countCards('h');
                                        if (player.hasSkill('yinlunying')) {
                                            event.finish;
                                        } else player.chooseToDiscard(cysp, 'h', true);
                                    },
                                },
                            },
                        },
                        yinnaxian: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.hp == 1;
                            },
                            filterTarget: true,
                            limited: true,
                            content() {
                                player.awakenSkill('yinnaxian');
                                var skills = target.getStockSkills(true, true).filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && !info.hiddenSkill && !info.zhuSkill && !info.charlotte;
                                });
                                if (skills.length) {
                                    for (var i of skills) player.addSkillLog(i);
                                }
                                target.draw(4);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        yinjuexiao3: {},
                        yinmouliegong: {
                            shaRelated: true,
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && typeof card.number == 'number') {
                                        if (get.distance(player, target) <= card.number) return true;
                                    }
                                },
                            },
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            logTarget: 'target',
                            derivation: 'yinmoushenshe',
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                if (event.target.countCards('h') != player.countCards('h') || event.target.hp != player.hp) return true;
                                return false;
                            },
                            content() {
                                if (trigger.target.countCards('h') != player.countCards('h') || trigger.target.hp != player.hp) trigger.parent.directHit.push(trigger.target);
                                if (trigger.target.hp > player.hp) {
                                    var id = trigger.target.playerid;
                                    var map = trigger.parent.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].extraDamage != 'number') {
                                        map[id].extraDamage = 0;
                                    }
                                    map[id].extraDamage++;
                                }
                            },
                            ai: {
                                threaten: 0.5,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (
                                        get.attitude(player, arg.target) <= 0 &&
                                        arg.card.name == 'sha' &&
                                        player.countCards('h', function (card) {
                                            return card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card));
                                        }) >= arg.target.countCards('h')
                                    )
                                        return true;
                                    return false;
                                },
                            },
                            group: 'yinmouliegong_1',
                            subSkill: {
                                1: {
                                    audio: 'yinmouliegong',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    selectCard: 2,
                                    position: 'he',
                                    filterCard: true,
                                    filter(event, player) {
                                        return player.countCards('he') >= 2;
                                    },
                                    content() {
                                        player.addSkill('yinmoushenshe');
                                        player.removeSkill('yinmouliegong');
                                    },
                                    ai: {
                                        order: 16,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        yinmoushenshe: {
                            audio: 'ext:阴包武将/audio:2',
                            shaRelated: true,
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            logTarget: 'target',
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.targets.length >= 1;
                            },
                            content() {
                                'step 0';
                                var cardnum = trigger.card.number;
                                var cardshow = get.cards(cardnum);
                                for (var i = cardshow.length; i--; i >= 0) {
                                    ui.cardPile.insertBefore(cardshow[i], ui.cardPile.firstChild);
                                }
                                event.cards = cardshow;
                                player.showCards(cardshow, get.translation(player) + '发动了<神射>');
                                ('step 1');
                                if (trigger.card.number >= trigger.target.countCards('h')) trigger.parent.directHit.push(trigger.target);
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (!map[id].extraDamage) map[id].extraDamage = 0;
                                var color = get.color(trigger.card);
                                for (var i of cards) {
                                    if (color == get.color(i)) {
                                        map[id].extraDamage++;
                                    }
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.target && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        yinzidi: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                var num = player.maxHp;
                                trigger.num = Math.min(5, num);
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + game.countGroup();
                                },
                            },
                            group: 'yinzidi_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getHistory('sourceDamage').length;
                                    },
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                        },
                        yinwangzun: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.isAlive();
                            },
                            limited: true,
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                'step 0';
                                var tp = trigger.player;
                                player.awakenSkill('yinwangzun');
                                tp.skip('phaseUse');
                                tp.addTempSkill('yinwangzun1');
                                ('step 1');
                                player.loseMaxHp();
                                player.phase('nodelay');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        yinwangzun1: {
                            mark: true,
                            marktext: '被夺位',
                            intro: {
                                content: '手牌上限减少Y(Y为全场势力数)',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - game.countGroup();
                                },
                            },
                        },
                        yinkangkai: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.isIn();
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) >= 0;
                            },
                            charlotte: true,
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.draw();
                                if (trigger.target != player) {
                                    player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
                                        if (get.position(card) == 'e') return -1;
                                        if (card.name == 'shan') return 1;
                                        if (get.type(card) == 'equip') return 0.5;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                trigger.target.gain(result.cards, player, 'give');
                                event.card = result.cards[0];
                                ('step 2');
                                if (trigger.target.getCards('h').includes(card) && get.type(card) == 'equip') {
                                    trigger.target.chooseUseTarget(card);
                                    trigger.target.recover();
                                }
                                if (trigger.target.getCards('h').includes(card) && get.type(card) != 'basic') {
                                    trigger.target.draw();
                                    player.draw();
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                            group: 'yinkangkai_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: 'damageBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player == _status.currentPhase && event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.draw();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (target == _status.currentPhase && get.tag(card, 'damage')) return 'zerotarget';
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        yinpinhu: {
                            audio: 'ext:阴包武将/audio:2',
                            charlotte: true,
                            trigger: {
                                global: 'damageBegin2',
                            },
                            filter(event, player) {
                                if (player.hasSkill('yinpinhu2')) return false;
                                return player != _status.currentPhase && event.num > 1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) >= 0;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                if (trigger.player != player) {
                                    player.draw();
                                    trigger.player.draw();
                                }
                                ('step 2');
                                if (trigger.player == player) {
                                    player.recover();
                                    player.addTempSkill('yinpinhu2');
                                } else player.addTempSkill('yinpinhu2');
                            },
                        },
                        yinpinhu2: {},
                        yinmoupojun: {
                            shaRelated: true,
                            forced: true,
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt('yinmoupojun', trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) return 0;
                                    var val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.target;
                                    target.addSkill('yinmoupojun2');
                                    target.addToExpansion('giveAuto', result.cards, target).gaintag.add('yinmoupojun2');
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                            group: ['yinmoupoju', 'yinmoupojun3'],
                        },
                        yinmoupojun2: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return player.getExpansions('yinmoupojun2').length;
                            },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('yinmoupojun2');
                                player.gain(cards, 'draw');
                                game.log(player, '收回了' + get.cnNumber(cards.length) + '张<破军>牌');
                                ('step 1');
                                player.removeSkill('yinmoupojun2');
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('yinmoupojun2');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    else return '共有' + get.cnNumber(cards.length) + '张牌';
                                },
                            },
                        },
                        yinmoupoju: {
                            audio: 'ext:阴包武将/audio:2',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                if (!player.storage.yinmouyicheng) player.storage.yinmouyicheng = [];
                                if (player.storage.yinmouyicheng.length < 3) return false;
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                if (!player.storage.yinmouyicheng) player.storage.yinmouyicheng = [];
                                if (player.storage.yinmouyicheng.length <= 0) return false;
                                return event.card.name == 'sha' && event.targets.length >= 1;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                trigger.card.yinmoupoju = true;
                                event.ycnum = player.storage.yinmouyicheng.length;
                                ('step 1');
                                var pjcard = get.cards(event.ycnum);
                                for (var i = pjcard.length; i--; i >= 0) {
                                    ui.cardPile.insertBefore(pjcard[i], ui.cardPile.firstChild);
                                }
                                game.updateRoundNumber();
                                event.cards = pjcard;
                                player.showCards(pjcard, get.translation(player) + '发动<破军>展示');
                                ('step 2');
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].extraDamage != 'number') {
                                    map[id].extraDamage = 0;
                                }
                                var color = get.color(trigger.card);
                                for (var i of cards) {
                                    if (player.storage.yinmouyicheng.includes(i.suit)) {
                                        map[id].extraDamage++;
                                    }
                                    if (color != get.color(i)) player.changeHujia(1);
                                }
                            },
                        },
                        yinmoupojun3: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.card.yinmoupoju == true;
                            },
                            forced: true,
                            content() {
                                delete player.storage.yinmouyicheng;
                                player.unmarkSkill('yinmouyicheng');
                            },
                        },
                        yinmouyicheng: {
                            marktext: '疑城',
                            intro: {
                                content: '已记录:$',
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (!player.storage.yinmouyicheng) player.storage.yinmouyicheng = [];
                                if (_status.currentPhase == player && player.storage.yinmouyicheng.includes(event.card.suit)) return true;
                                return event.card.suit != undefined && event.card.suit != 'none' && !player.storage.yinmouyicheng.includes(event.card.suit);
                            },
                            forced: true,
                            content() {
                                if (!player.storage.yinmouyicheng) player.storage.yinmouyicheng = [];
                                if (!player.storage.yinmouyicheng.includes(trigger.card.suit)) {
                                    player.storage.yinmouyicheng.push(trigger.card.suit);
                                    player.storage.yinmouyicheng.sort();
                                    player.markSkill('yinmouyicheng');
                                } else if (_status.currentPhase == player && player.storage.yinmouyicheng.includes(trigger.card.suit) && trigger.card.name != 'sha') {
                                    player.storage.yinmouyicheng.remove(trigger.card.suit);
                                    player.storage.yinmouyicheng.sort();
                                    if (player.storage.yinmouyicheng.length <= 0) player.unmarkSkill('yinmouyicheng');
                                }
                            },
                            group: ['yinmouyicheng2', 'yinmouyicheng3'],
                        },
                        yinmouyicheng2: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (!player.storage.yinmouyicheng) player.storage.yinmouyicheng = [];
                                return event.card.suit != undefined && event.card.suit != 'none' && !player.storage.yinmouyicheng.includes(event.card.suit);
                            },
                            forced: true,
                            content() {
                                if (!player.storage.yinmouyicheng) player.storage.yinmouyicheng = [];
                                player.storage.yinmouyicheng.push(trigger.card.suit);
                                player.storage.yinmouyicheng.sort();
                                player.markSkill('yinmouyicheng');
                                player.draw();
                            },
                        },
                        yinmouyicheng3: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                if (!player.storage.yinmouyicheng) player.storage.yinmouyicheng = [];
                                return event.card && !player.storage.yinmouyicheng.includes(event.card.suit); //QQQ
                            },
                            content() {
                                var ychs = player.storage.yinmouyicheng.length;
                                player.draw(ychs);
                            },
                        },
                        gaimoupojun: {
                            shaRelated: true,
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            logTarget: 'target',
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt('gaimoupojun', trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) return 0;
                                    var val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.target;
                                    target.addSkill('gaimoupojun2');
                                    target.addToExpansion('giveAuto', result.cards, target).gaintag.add('gaimoupojun2');
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                            group: ['gaimoupoju', 'gaimoupojun3'],
                        },
                        gaimoupojun2: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return player.getExpansions('gaimoupojun2').length;
                            },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('gaimoupojun2');
                                player.gain(cards, 'draw');
                                game.log(player, '收回了' + get.cnNumber(cards.length) + '张<破军>牌');
                                ('step 1');
                                player.removeSkill('gaimoupojun2');
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('gaimoupojun2');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    else return '共有' + get.cnNumber(cards.length) + '张牌';
                                },
                            },
                        },
                        gaimoupoju: {
                            audio: 'ext:阴包武将/audio:2',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                if (!player.storage.gaimouyicheng) player.storage.gaimouyicheng = [];
                                if (player.storage.gaimouyicheng.length < 2) return false;
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                if (!player.storage.gaimouyicheng) player.storage.gaimouyicheng = [];
                                if (player.storage.gaimouyicheng.length <= 0) return false;
                                return event.card.name == 'sha' && event.targets.length >= 1;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                trigger.card.gaimoupoju = true;
                                var gjjl = player.getAttackRange();
                                var gjs = Math.ceil(gjjl / 2);
                                event.num = player.storage.gaimouyicheng.length + gjs;
                                ('step 1');
                                var gpjcard = get.cards(event.num);
                                for (var i = gpjcard.length; i--; i >= 0) {
                                    ui.cardPile.insertBefore(gpjcard[i], ui.cardPile.firstChild);
                                }
                                game.updateRoundNumber();
                                event.cards = gpjcard;
                                player.showCards(gpjcard, get.translation(player) + '发动<破军>展示');
                                ('step 2');
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].extraDamage != 'number') {
                                    map[id].extraDamage = 0;
                                }
                                var color = get.color(trigger.card);
                                for (var i of cards) {
                                    if (player.storage.gaimouyicheng.includes(i.suit)) {
                                        map[id].extraDamage++;
                                        player.changeHujia(1);
                                    }
                                }
                            },
                        },
                        gaimoupojun3: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.card.gaimoupoju == true;
                            },
                            forced: true,
                            content() {
                                delete player.storage.gaimouyicheng;
                                player.unmarkSkill('gaimouyicheng');
                            },
                        },
                        gaimouyicheng: {
                            audio: 'ext:阴包武将/audio:2',
                            marktext: '疑城',
                            intro: {
                                content: '已记录:$',
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (!player.storage.gaimouyicheng) player.storage.gaimouyicheng = [];
                                return event.card.suit != undefined && event.card.suit != 'none' && !player.storage.gaimouyicheng.includes(event.card.suit);
                            },
                            forced: true,
                            content() {
                                if (!player.storage.gaimouyicheng) player.storage.gaimouyicheng = [];
                                player.storage.gaimouyicheng.push(trigger.card.suit);
                                player.storage.gaimouyicheng.sort();
                                player.markSkill('gaimouyicheng');
                                player.draw();
                            },
                            group: ['gaimouyicheng2', 'gaimouyicheng3'],
                        },
                        gaimouyicheng2: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (!player.storage.gaimouyicheng) player.storage.gaimouyicheng = [];
                                return event.card.suit != undefined && event.card.suit != 'none' && !player.storage.gaimouyicheng.includes(event.card.suit);
                            },
                            forced: true,
                            content() {
                                if (!player.storage.gaimouyicheng) player.storage.gaimouyicheng = [];
                                player.storage.gaimouyicheng.push(trigger.card.suit);
                                player.storage.gaimouyicheng.sort();
                                player.markSkill('gaimouyicheng');
                                player.draw();
                            },
                        },
                        gaimouyicheng3: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                if (!player.storage.gaimouyicheng) player.storage.gaimouyicheng = [];
                                return event.card && (player.countCards('h') >= event.player.countCards('h') || player.countCards('e') >= event.player.countCards('e'));
                            }, //QQQ
                            content() {
                                var ychs = player.storage.gaimouyicheng.length;
                                if (player.storage.gaimouyicheng.includes(trigger.card.suit)) {
                                    trigger.num++;
                                }
                            },
                        },
                        yintieqi: {
                            shaRelated: true,
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                if (!trigger.target.hasSkill('baiban')) {
                                    trigger.target.addTempSkill('baiban');
                                }
                                trigger.parent.directHit.add(trigger.target);
                                ('step 1');
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1.5 : -0.5;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 2');
                                var target = trigger.target;
                                var id = target.playerid;
                                var map = trigger.customArgs;
                                if (result.judge > 0) {
                                    if (!map[id]) map[id] = {};
                                    if (!map[id].extraDamage) map[id].extraDamage = 0;
                                    map[id].extraDamage++;
                                } else {
                                    player.gain(result.card, 'gain2');
                                    player.draw();
                                }
                            },
                            ai: {
                                ignoreSkill: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'directHit_ai') {
                                        return get.attitude(player, arg.target) <= 0;
                                    }
                                    if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                                    if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
                                    if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
                                },
                                directHit_ai: true,
                            },
                        },
                        yinduchou: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event.source == undefined) return false;
                                return event.num > 0 && event.source != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                var card = { name: 'sha' };
                                player.useCard(card, trigger.source, false);
                                if (_status.currentPhase == player) player.draw();
                            },
                        },
                        yinshenyu: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            filterCard(card, player) {
                                return get.type(card, player) != 'basic';
                            },
                            check(card) {
                                var num = get.value(card);
                                return 9 - num;
                            },
                            content() {
                                var stat = player.getStat().skill;
                                if (!stat.yinshenyu) stat.yinshenyu = 0;
                                var card = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                            mod: {
                                globalFrom(from, to, current) {
                                    return current - from.hp;
                                },
                                cardUsable(card, player, num) {
                                    var stat = player.getStat().skill;
                                    if (!stat.yinshenyu) stat.yinshenyu = 0;
                                    var sycs = stat.yinshenyu;
                                    if (card.name == 'sha') return num + sycs;
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        yinlvli: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.yinlvli) return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && card.yinlvli) return Infinity;
                                },
                            },
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            group: 'yinlvli_damage',
                            position: 'he',
                            marktext: '膂力',
                            intro: {
                                content: '已使用花色: $',
                            },
                            viewAs: {
                                name: 'sha',
                                yinlvli: true,
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            init(player) {
                                if (!player.storage.yinlvli) player.storage.yinlvli = [];
                            },
                            filterCard(card, player) {
                                return !player.storage.yinlvli.includes(card.suit);
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            onuse(result, player) {
                                player.storage.yinlvli.add(result.cards.suit);
                                player.markSkill('yinlvli');
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name == 'phase' && !evt.yinlvli) {
                                    evt.yinlvli = true;
                                    var next = game.createEvent('yinlvli_clear');
                                    _status.event.next.remove(next);
                                    evt.after.push(next);
                                    next.player = player;
                                    next.setContent(function () {
                                        player.storage.yinlvli = [];
                                        player.unmarkSkill('yinlvli');
                                    });
                                }
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target: -1,
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
                        yinlvli_damage: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.parent.skill == 'yinlvli';
                            }, //QQQ
                            content() {
                                var card = get.cardPile(function (card) {
                                    return card.suit == trigger.card.suit;
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                        },
                        yinjuefeng: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            group: ['yinjuefeng2', 'yinjuefeng3'],
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                if (player.hasSkill('yinjuefeng_lose')) return false;
                                return event.card.name == 'sha';
                            },
                            logTarget: 'player',
                            content() {
                                player.useCard({ name: 'juedou' }, trigger.player);
                                if (player.hp == player.maxHp) {
                                    trigger.parent.excluded.add(player);
                                }
                            },
                        },
                        yinjuefeng2: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                if (event.card.name != 'juedou') return false;
                                return player.countCards('h') != event.target.countCards('h') || player.hp != event.target.hp;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                if (player.countCards('h') != trigger.target.countCards('h')) player.gainPlayerCard(trigger.target, 'he', true);
                                ('step 1');
                                var target = trigger.target;
                                var id = target.playerid;
                                var map = trigger.customArgs;
                                if (player.hp != target.hp) {
                                    if (!map[id]) map[id] = {};
                                    if (!map[id].extraDamage) map[id].extraDamage = 0;
                                    map[id].extraDamage++;
                                }
                            },
                        },
                        yinduanchou: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.recover();
                                player.draw(2);
                                if (!player.storage.yinlvli) player.storage.yinlvli = [];
                                player.storage.yinlvli = [];
                                player.unmarkSkill('yinlvli');
                            },
                        },
                        yinjuefeng3: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('yinjuefeng_lose')) return false;
                                return event.card && event.card.name == 'juedou';
                            },
                            content() {
                                trigger.cancel();
                                player.addTempSkill('yinjuefeng_lose');
                            },
                        },
                        yinjuefeng_lose: {
                            mark: true,
                            marktext: '失锋',
                            intro: {
                                content: '本回合决锋已失效',
                            },
                        },
                        gaikuangbao: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'enterGame',
                                global: 'phaseBefore',
                            },
                            charlotte: true,
                            forced: true,
                            group: 'gaikuangbao2',
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                player.addMark('gaikuangbao', 3);
                            },
                            marktext: '暴怒',
                            intro: {
                                name: '暴怒',
                                content: 'mark',
                            },
                            ai: {
                                combo: 'gai_shenfen',
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        gaikuangbao2: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.kbnum = trigger.num;
                                ('step 1');
                                event.kbnum--;
                                player.addMark('gaikuangbao');
                                ('step 2');
                                if (event.kbnum > 0) {
                                    event.goto(1);
                                } else event.finish;
                            },
                        },
                        gaiwumou: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            charlotte: true,
                            filter(event, player) {
                                if (player.countMark('gaikuangbao') < 1) return false;
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                return get.type(event.card) == 'trick';
                            },
                            check(event, player) {
                                if (player.countMark('gaikuangbao') <= 2) return false;
                                if (event.target == player) return true;
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                player.removeMark('gaikuangbao', 1);
                                trigger.nowuxie = true;
                                trigger.directHit.addArray(game.players);
                                player.draw();
                            },
                        },
                        gaifutu: {
                            charlotte: true,
                            forced: true,
                            audio: 'ext:阴包武将/audio:2',
                            derivation: ['gailingshi', 'gaishenji'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.countMark('gaikuangbao') >= 4;
                            },
                            content() {
                                player.removeMark('gaikuangbao', 4);
                                player.addTempSkill('gailingshi');
                                player.addTempSkill('gaishenji');
                            },
                        },
                        gailingshi: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                return event.parent.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + Math.max(2, player.hp);
                                },
                            },
                        },
                        gaishenji: {
                            shaRelated: true,
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                return event.card.name == 'sha';
                            },
                            charlotte: true,
                            forced: true,
                            content() {
                                trigger.directHit.addArray(trigger.targets);
                            },
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha') return true;
                                },
                                selectTarget(card, player, range) {
                                    if (range[1] == -1) return;
                                    if (card.name == 'sha') range[1] += 3;
                                },
                            },
                            ai: {
                                directHit_ai: true,
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.target && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        gaishenfen: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player, name) {
                                if (player.hasSkill('gaishenfen2')) return false;
                                return player.countMark('gaikuangbao') >= Math.max(2, game.players.length);
                            },
                            charlotte: true,
                            content() {
                                'step 0';
                                var sfnum = game.players.length;
                                player.removeMark('gaikuangbao', sfnum);
                                player.addTempSkill('gaishenfen2', 'phaseUseEnd');
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                event.targets2 = event.targets.slice(0);
                                ('step 1');
                                var kbs = player.countMark('gaikuangbao') / 100;
                                var sxgl = Math.random();
                                if (sxgl <= kbs) player.removeSkill('gaishenfen2');
                                ('step 2');
                                if (event.targets.length) {
                                    event.targets.shift().damage('nocard');
                                    event.redo();
                                }
                                ('step 3');
                                if (event.targets2.length) {
                                    var target = event.targets2.shift();
                                    var qzs = target.countCards('he');
                                    target.chooseToDiscard(qzs, 'he', true).delay = false;
                                    event.redo();
                                }
                            },
                            ai: {
                                combo: 'gaikuangbao',
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        gaishenfen2: {
                            charlotte: true,
                            forced: true,
                            mark: true,
                            marktext: '愤怒',
                            intro: {
                                content: '爷很愤怒',
                            },
                        },
                        yinjingji: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            derivation: 'yinjingji2l',
                            forced: true,
                            content() {
                                'step 0';
                                player.judge(function () {
                                    return 0;
                                });
                                ('step 1');
                                if (!player.storage.yinjingji) player.storage.yinjingji = [];
                                if (!player.storage.yinjingji.includes(get.type(result.card, 'trick'))) {
                                    player.storage.yinjingji.push(get.type(result.card, 'trick'));
                                    player.storage.yinjingji.sort();
                                    player.markSkill('yinjingji');
                                } else player.gain(result.card, 'gain2');
                                var card = get.cardPile(function (card) {
                                    return get.type(card) != get.type(result.card, 'trick');
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                            marktext: '精计',
                            intro: {
                                content: '已记录类型:$',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (_status.currentPhase == player && !player.storage.yinjingji.includes(get.type(card, 'trick')) && !player.isDying()) return false;
                                },
                                cardUsable(card, player) {
                                    if (_status.currentPhase == player && !player.storage.yinjingji.includes(get.type(card, 'trick')) && !player.isDying()) return false;
                                },
                                cardRespondable(card, player) {
                                    if (_status.currentPhase == player && !player.storage.yinjingji.includes(get.type(card, 'trick')) && !player.isDying()) return false;
                                },
                            },
                        },
                        yinsuance: {
                            audio: 'ext:阴包武将/audio:2',
                            charlotte: true,
                            forced: true,
                            derivation: 'yinchaofeng',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.removeMark('yinsuance', player.countMark('yinsuance'));
                                player.addMark('yinsuance', player.phaseNumber);
                                ('step 1');
                                if (game.roundNumber % 2 == 1) {
                                    var card = get.cardPile(function (card) {
                                        return get.type(card) == 'basic';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                } else {
                                    var card = get.cardPile(function (card) {
                                        return get.type(card) == 'trick';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                }
                            },
                            marktext: '回合',
                            intro: {
                                content: '现在是你的第#个回合',
                            },
                            group: ['yinsuance_1', 'yinsuance_2', 'yinsuance_3', 'yinsuance_4', 'yinsuance_5', 'yinsuance_6', 'yinsuance_7', 'yinsuance_8', 'yinsuance_9', 'yinsuance_10'],
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'phaseZhunbeiEnd',
                                    },
                                    content() {
                                        'step 0';
                                        if (player.phaseNumber % 2 == 1) {
                                            player.moveCard();
                                        } else {
                                            player.chooseTarget('偶数回合,你可以弃置一名角色区域内一张牌.').ai = function (target) {
                                                return -get.attitude(player, target);
                                            };
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            if (player.phaseNumber % 2 == 1) {
                                                event.finish;
                                            } else player.discardPlayerCard(result.targets[0], 1, 'hej', false);
                                        }
                                    },
                                },
                                2: {
                                    audio: 'ext:阴包武将/audio:2',
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'phaseJudgeBefore',
                                    },
                                    filter(event, player) {
                                        return player.countCards('j');
                                    },
                                    content() {
                                        if (player.countCards('j') % 2 == 1) {
                                            player.recover();
                                        } else {
                                            player.loseHp();
                                            trigger.cancel();
                                        }
                                    },
                                },
                                3: {
                                    audio: 'ext:阴包武将/audio:2',
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'phaseDrawBegin1',
                                    },
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    content() {
                                        if (trigger.num % 2 == 1) {
                                            trigger.num++;
                                            player.loseHp();
                                        } else {
                                            if (player.hp == 1) player.recover();
                                        }
                                    },
                                },
                                4: {
                                    audio: 'ext:阴包武将/audio:2',
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.num > 0 && player.hp > 0;
                                    },
                                    content() {
                                        if (player.hp % 2 == 1) {
                                            if (trigger.source != player) trigger.source.damage('nocard');
                                        } else {
                                            var ssxl = player.maxHp - player.hp;
                                            player.draw(Math.max(1, ssxl));
                                        }
                                    },
                                },
                                5: {
                                    audio: 'ext:阴包武将/audio:2',
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        if (_status.currentPhase == player) player.addMark('yinsuance_5', trigger.num);
                                        if (trigger.player.hp % 2 == 1) {
                                            player.recover();
                                        } else player.draw();
                                    },
                                    marktext: '伤害',
                                    intro: {
                                        content: '本回合造成了#点伤害',
                                    },
                                },
                                6: {
                                    audio: 'ext:阴包武将/audio:2',
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        if (_status.currentPhase == player) player.addMark('yinsuance_6', 1);
                                        if (player.countCards('h') % 2 == 1) {
                                            player.loseHp();
                                        } else player.recover();
                                    },
                                    marktext: '用牌',
                                    intro: {
                                        content: '本回合使用了#张牌',
                                    },
                                },
                                7: {
                                    audio: 'ext:阴包武将/audio:2',
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    filter(event, player) {
                                        if (!player.getHistory('useCard').length) return false;
                                        return player.getHistory('useCard').length;
                                    },
                                    content() {
                                        var scyps = player.getHistory('useCard').length;
                                        if (scyps % 2 == 1) {
                                            trigger.cancel();
                                            player.loseHp();
                                        } else player.recover();
                                    },
                                },
                                8: {
                                    audio: 'ext:阴包武将/audio:2',
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return get.type(event.card) == 'equip' && player.countCards('e') > 0;
                                    },
                                    content() {
                                        if (player.countCards('e') % 2 == 1) {
                                            player.moveCard().nojudge = true;
                                        } else player.draw();
                                    },
                                },
                                9: {
                                    audio: 'ext:阴包武将/audio:2',
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        return player.getStat('damage') > 0;
                                    },
                                    content() {
                                        var scshs = player.getStat('damage');
                                        if (scshs % 2 == 1) {
                                            var card = get.cardPile(function (card) {
                                                return get.type(card) == 'trick';
                                            });
                                            if (card) player.gain(card, 'gain2');
                                        } else {
                                            var card = get.cardPile(function (card) {
                                                return get.type(card) == 'basic';
                                            });
                                            if (card) player.gain(card, 'gain2');
                                        }
                                    },
                                },
                                10: {
                                    audio: 'ext:阴包武将/audio:2',
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    content() {
                                        'step 0';
                                        var sc0 = player.countMark('yinsuance');
                                        var sc5 = player.countMark('yinsuance_5');
                                        var sc6 = player.countMark('yinsuance_6');
                                        player.removeMark('yinsuance', sc0);
                                        player.removeMark('yinsuance_5', sc5);
                                        player.removeMark('yinsuance_6', sc6);
                                        ('step 1');
                                        event.scmp = 1;
                                        if (player.countCards('h') % 2 == player.phaseNumber % 2) event.scmp++;
                                        if (player.countCards('e') % 2 == player.phaseNumber % 2) event.scmp++;
                                        if (player.countCards('j') % 2 == player.phaseNumber % 2) event.scmp++;
                                        if (player.hp % 2 == player.phaseNumber % 2) event.scmp++;
                                        ('step 2');
                                        player.draw(event.scmp);
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (_status.currentPhase == player && player.phaseNumber % 2 == 1) return Infinity;
                                        },
                                        targetInRange(card, player) {
                                            if (_status.currentPhase == player && player.phaseNumber % 2 != 1) return true;
                                        },
                                    },
                                },
                            },
                        },
                        yinchaofeng: {},
                        yinjingji2l: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: ['phaseBefore', 'phaseAfter'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge(function () {
                                    return 0;
                                });
                                ('step 1');
                                player.gain(result.card, 'gain2');
                                var card = get.cardPile(function (card) {
                                    return get.type(card) != get.type(result.card, 'trick');
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                        },
                        yinxianmou: {
                            audio: 'ext:阴包武将/audio:2',
                            charlotte: true,
                            forced: true,
                            juexingji: true,
                            derivation: 'yinqilue',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                if (!player.storage.yinjingji) player.storage.yinjingji = [];
                                return player.storage.yinjingji.length >= 2;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('yinxianmou');
                                player.gainMaxHp();
                                player.recover();
                                player.removeSkill('yinjingji');
                                player.addSkill('yinjingji2l');
                                player.addSkill('yinqilue');
                                ('step 1');
                                delete player.storage.yinjingji;
                                player.unmarkSkill('yinjingji');
                            },
                        },
                        yinqilue: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object' && player == _status.currentPhase) {
                                        var evt = player.getLastUsed();
                                        if (evt && evt.card && get.type(evt.card) != 'none' && get.type(card) != 'none' && get.type(evt.card) == get.type(card)) {
                                            return num + 10;
                                        }
                                    }
                                },
                            },
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                var evt = player.getLastUsed(1);
                                if (!evt) return false;
                                var type1 = get.type(evt.card, 'trick');
                                var type2 = get.type(event.card, ';trick');
                                return type1 && type2 && type1 != 'none' && type2 != 'none' && type1 == type2;
                            },
                            content() {
                                var card = get.cardPile(function (card) {
                                    return get.type(card) != get.type(trigger.card, 'trick');
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp < 1) return 3;
                                    return 1;
                                },
                            },
                            group: 'yinqilue_mark',
                            subSkill: {
                                mark: {
                                    slient: true,
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    _priority: 100,
                                    filter(event, player) {
                                        if (_status.currentPhase != player) return false;
                                        if (!player.storage.yinqilue_mark) player.storage.yinqilue_mark = [];
                                        return player.storage.yinqilue_mark;
                                    },
                                    content() {
                                        if (!player.storage.yinqilue_mark) player.storage.yinqilue_mark = [];
                                        if (!player.storage.yinqilue_mark.includes(get.type(trigger.card, 'trick')) && player.storage.yinqilue_mark.length < 1) {
                                            player.storage.yinqilue_mark.push(get.type(trigger.card, 'trick'));
                                            player.storage.yinqilue_mark.sort();
                                            player.markSkill('yinqilue_mark');
                                        } else if (player.storage.yinqilue_mark.length >= 1) {
                                            player.storage.yinqilue_mark = [];
                                            player.storage.yinqilue_mark.push(get.type(trigger.card, 'trick'));
                                            player.storage.yinqilue_mark.sort();
                                            player.markSkill('yinqilue_mark');
                                        }
                                    },
                                    marktext: '奇略',
                                    intro: {
                                        content: '上一张牌的类型:$',
                                    },
                                },
                            },
                        },
                        yinzongheng: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'chooseToUse',
                            prompt: '你可以将一张锦囊牌当作【决斗】使用',
                            viewAs: {
                                name: 'juedou',
                            },
                            position: 'he',
                            filterCard(card, player) {
                                return get.type(card, 'trick') == 'trick';
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            group: ['yinzongheng_1', 'yinzongheng_2', 'yinzongheng_3'],
                            subSkill: {
                                1: {
                                    audio: 'yinzongheng',
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    prompt: '你可以将一张非锦囊牌当作【杀】使用或打出',
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    position: 'he',
                                    filterCard(card, player) {
                                        return get.type(card, 'trick') != 'trick';
                                    },
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    ai: {
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
                                2: {
                                    audio: 'yinzongheng',
                                    forced: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return (event.card.name == 'juedou' || event.card.name == 'sha');
                                    },
                                    content() {
                                        trigger.nowuxie = true;
                                        trigger.directHit.addArray(game.players);
                                    },
                                    ai: {
                                        threaten: 0.5,
                                        directHit_ai: true,
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.target) <= 0;
                                    },
                                    filter(event, player) {
                                        return event.target.countCards('hej') > 0 && (event.card.name == 'sha' || event.card.name == 'juedou');
                                    },
                                    forced: true,
                                    logTarget: 'target',
                                    content() {
                                        player.gainPlayerCard(trigger.target, 'hej', true);
                                    },
                                },
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
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
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
                        yinfeijiang: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && (event.card.name == 'juedou' || event.card.name == 'sha');
                            },
                            content() {
                                var card = get.cardPile(function (card) {
                                    return get.type(card) != 'trick';
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                            mod: {
                                selectTarget(card, player, range) {
                                    if (range[1] == -1) return;
                                    if (card.name == 'sha') range[1] += 1;
                                },
                            },
                        },
                        yinmieshi: {
                            audio: 'ext:阴包武将/audio:1',
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            derivation: ['wushuang', 'yinsheji'],
                            filter(event, player) {
                                return !player.hasSkill('wushuang') && !player.hasSkill('yinsheji');
                            },
                            content() {
                                player.addTempSkill('yinsheji');
                                player.addTempSkill('wushuang');
                            },
                        },
                        yinsheji: {
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable(card, player, num) {
                                    if ((card.name == 'juedou' || card.name == 'sha') && card.isCard) return Infinity;
                                },
                            },
                            audio: 'ext:阴包武将/audio:1',
                            forced: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.num >= 0 && event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        yinliegong: {
                            audio: 'ext:阴包武将/audio:2',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            logTarget: 'target',
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                if (!player.storage.yinliegong) player.storage.yinliegong = [];
                                if (player.storage.yinliegong.length <= 0) return false;
                                return event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('yinliegong2');
                                trigger.parent.directHit.add(trigger.target);
                                ('step 1');
                                var cards = get.cards(Math.max(player.storage.yinliegong.length - 1, 0));
                                for (var i = cards.length - 1; i--; i >= 0) {
                                    ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
                                }
                                event.cards = cards;
                                player.showCards(cards, get.translation(player) + '对' + get.translation(trigger.target) + '发动了【烈弓】');
                                ('step 2');
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].extraDamage != 'number') {
                                    map[id].extraDamage = 0;
                                }
                                for (var i of cards) {
                                    if (player.storage.yinliegong.includes(i.suit)) {
                                        map[id].extraDamage++;
                                    }
                                    if (player.storage.yinliegong.includes(get.type(i, 'trick'))) {
                                        map[id].extraDamage++;
                                    }
                                    if (player.storage.yinliegong.includes(get.color(i))) {
                                        map[id].extraDamage++;
                                    }
                                }
                            },
                            marktext: '烈弓',
                            intro: {
                                content: '已记录: $',
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && typeof card.number == 'number') {
                                        if (get.distance(player, target) <= card.number) return true;
                                    }
                                },
                            },
                            ai: {
                                directHit_ai: true,
                            },
                            group: ['yinliegong_1', 'yinliegong_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        if (!player.storage.yinliegong) player.storage.yinliegong = [];
                                        return (event.card.suit != undefined && event.card.suit != 'none') || (get.color(event.card) != undefined && get.color(event.card) != 'none') || (get.type(event.card, 'trick') != undefined && get.type(event.card, 'trick') != 'none');
                                    },
                                    forced: true,
                                    content() {
                                        if (!player.storage.yinliegong) player.storage.yinliegong = [];
                                        if (!player.storage.yinliegong.includes(trigger.card.suit)) {
                                            player.storage.yinliegong.push(trigger.card.suit);
                                            player.storage.yinliegong.sort();
                                            player.markSkill('yinliegong');
                                        }
                                        if (!player.storage.yinliegong.includes(get.color(trigger.card))) {
                                            player.storage.yinliegong.push(get.color(trigger.card));
                                            player.storage.yinliegong.sort();
                                            player.markSkill('yinliegong');
                                        }
                                        if (!player.storage.yinliegong.includes(get.type(trigger.card, 'trick'))) {
                                            player.storage.yinliegong.push(get.type(trigger.card, 'trick'));
                                            player.storage.yinliegong.sort();
                                            player.markSkill('yinliegong');
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    logTarget: 'player',
                                    filter(event, player) {
                                        if (!player.storage.yinliegong) player.storage.yinliegong = [];
                                        return (event.card.suit != undefined && event.card.suit != 'none') || (get.color(event.card) != undefined && get.color(event.card) != 'none') || (get.type(event.card, 'trick') != undefined && get.type(event.card, 'trick') != 'none');
                                    },
                                    forced: true,
                                    content() {
                                        if (!player.storage.yinliegong) player.storage.yinliegong = [];
                                        if (!player.storage.yinliegong.includes(trigger.card.suit)) {
                                            player.storage.yinliegong.push(trigger.card.suit);
                                            player.storage.yinliegong.sort();
                                            player.markSkill('yinliegong');
                                        }
                                        if (!player.storage.yinliegong.includes(get.color(trigger.card))) {
                                            player.storage.yinliegong.push(get.color(trigger.card));
                                            player.storage.yinliegong.sort();
                                            player.markSkill('yinliegong');
                                        }
                                        if (!player.storage.yinliegong.includes(get.type(trigger.card, 'trick'))) {
                                            player.storage.yinliegong.push(get.type(trigger.card, 'trick'));
                                            player.storage.yinliegong.sort();
                                            player.markSkill('yinliegong');
                                        }
                                    },
                                },
                            },
                        },
                        yinliegong2: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                delete player.storage.yinliegong;
                                player.unmarkSkill('yinliegong');
                                player.removeSkill('yinliegong2');
                            },
                        },
                        yinjunxing: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            check(card) {
                                if (ui.selected.cards.length) return -1;
                                var val = get.value(card);
                                if (get.type(card) == 'basic') return 8 - get.value(card);
                                return 6 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                if (get.color(cards) == 'red') {
                                    var cardnum = target.countCards('hej', { color: 'red' });
                                } else {
                                    var cardnum = target.countCards('hej', { color: 'black' });
                                }
                                var jxnum = Math.max(1, cardnum);
                                target.chooseToDiscard(jxnum, 'he', '弃置' + get.cnNumber(jxnum) + '张手牌并失去1点体力,或点取消将武将牌翻面').set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (player.isTurnedOver()) return -1;
                                    return player.hp * player.hp - get.value(card);
                                });
                                ('step 1');
                                if (!result.bool) {
                                    target.turnOver();
                                    if (!target.countCards('he')) target.draw();
                                } else target.loseHp();
                            },
                            ai: {
                                order: 2,
                                expose: 0.3,
                                threaten: 1.8,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('noturn')) return 0;
                                        if (target.isTurnedOver()) return 2;
                                        return -1 / (target.countCards('h') + 1);
                                    },
                                },
                            },
                        },
                        yinyuce: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.tag(event.card, 'damage') && event.player != player;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h') <= 0) player.draw();
                                var next = player.chooseCard(get.prompt2('yinyuce'));
                                next.set('ai', function (card) {
                                    if (get.type(card) == 'basic') return 1;
                                    return Math.abs(get.value(card)) + 1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.showCards(result.cards);
                                    var type = get.type(result.cards[0], 'trick');
                                    if (trigger.player) {
                                        trigger.player
                                            .chooseToDiscard('弃置一张不为' + get.translation(type) + '牌的牌或令' + get.translation(trigger.card) + '对' + get.translation(player) + '无效', function (card) {
                                                return get.type(card, 'trick') != _status.event.type;
                                            })
                                            .set('ai', function (card) {
                                                if (get.attitude(trigger.player, player) > 0) return 0;
                                                return 9 - get.value(card);
                                            })
                                            .set('type', type);
                                    } else {
                                        event.excluded = true;
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.excluded) {
                                    trigger.parent.excluded.add(player);
                                } else if (result.bool) {
                                    //player.draw();
                                } else {
                                    trigger.parent.excluded.add(player);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            return 0.8;
                                        }
                                    },
                                },
                            },
                            group: 'yinyuce_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0 && player.isDamaged();
                                    },
                                    content() {
                                        'step 0';
                                        event.ycnum = trigger.num;
                                        ('step 1');
                                        event.ycnum--;
                                        if (player.countCards('h') <= 0) player.draw();
                                        var next = player.chooseCard(get.prompt2('yinyuce'));
                                        next.set('ai', function (card) {
                                            if (get.type(card) == 'basic') return 1;
                                            return Math.abs(get.value(card)) + 1;
                                        });
                                        ('step 2');
                                        if (result.bool) {
                                            player.showCards(result.cards);
                                            var type = get.type(result.cards[0], 'trick');
                                            if (trigger.source) {
                                                trigger.source
                                                    .chooseToDiscard('弃置一张不为' + get.translation(type) + '牌的牌或令' + get.translation(player) + '回复1点体力', function (card) {
                                                        return get.type(card, 'trick') != _status.event.type;
                                                    })
                                                    .set('ai', function (card) {
                                                        if (get.recoverEffect(_status.event.parent.player, _status.event.player, _status.event.player) < 0) {
                                                            return 7 - get.value(card);
                                                        }
                                                        return 0;
                                                    })
                                                    .set('type', type);
                                            } else {
                                                event.recover = true;
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (event.recover) {
                                            player.recover();
                                        } else if (result.bool) {
                                            //player.draw();
                                        } else {
                                            player.recover();
                                        }
                                        ('step 4');
                                        if (event.ycnum > 0) {
                                            event.goto(1);
                                        } else event.finish;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.tag(card, 'damage')) {
                                                    return 0.8;
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        yinguolun: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') >= 0;
                            },
                            filterTarget(card, player, target) {
                                if (target.hasSkill('yinguolun2')) return false;
                                return target != player && target.countCards('h');
                            },
                            content() {
                                'step 0';
                                event.num1 = target.countCards('h');
                                event.num2 = player.countCards('h');
                                ('step 1');
                                if (event.num2 <= event.num1) target.addTempSkill('yinguolun2', 'phaseUseEnd');
                                player.swapHandcards(target);
                                if (event.num1 == event.num2) player.draw();
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) > 0 && player.countCards('h') >= target.countCards('h')) return 1;
                                        if (target.countCards('h') < player.countCards('h') && get.attitude(player, target) <= 0) return -1;
                                        return 0.5;
                                    },
                                },
                            },
                            group: 'yinguolun_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: 'recoverEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        yinguolun2: {
                            mark: true,
                            marktext: '过论',
                            intro: {
                                content: '已经成为过【过论】的对象',
                            },
                        },
                        yinsongsang: {
                            forced: true,
                            charlotte: true,
                            audio: 'ext:阴包武将/audio:2',
                            derivation: 'yinzhanji',
                            trigger: {
                                global: 'dieAfter',
                            },
                            content() {
                                if (!player.hasSkill('yinzhanji')) player.addSkill('yinzhanji');
                                player.draw();
                                player.gainMaxHp();
                                player.recover();
                            },
                        },
                        yinzhanji: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.getParent(2).name != 'yinzhanji';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        yinwusheng: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard: true,
                            derivation: 'yinyijue',
                            position: 'hes',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('hes')) return false;
                                } else {
                                    if (!player.countCards('hes')) return false;
                                }
                            },
                            prompt: '将一张牌当【杀】使用或打出',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            marktext: '义绝',
                            intro: {
                                content: '〖义绝〗剩余使用次数:#',
                            },
                            group: 'yinwusheng_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    forced: true,
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        event.yjcs = trigger.num;
                                        ('step 1');
                                        event.yjcs--;
                                        if (!player.hasSkill('yinyijue')) player.addTempSkill('yinyijue');
                                        player.addMark('yinwusheng', 1);
                                        ('step 2');
                                        if (event.yjcs > 0) {
                                            event.goto(1);
                                        } else event.finish;
                                    },
                                },
                            },
                            ai: {
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
                        yinyijue: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            position: 'he',
                            filter(event, player) {
                                return player.countMark('yinwusheng');
                            },
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h');
                            },
                            filterCard: true,
                            onremove: false,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.removeMark('yinwusheng', 1);
                                target.chooseCard(true).ai = function (card) {
                                    var player = _status.event.player;
                                    if ((player.hasShan() || player.hp < 3) && get.color(card) == 'black') return 0.5;
                                    return Math.max(1, 20 - get.value(card));
                                };
                                ('step 1');
                                target.showCards(result.cards);
                                event.card2 = result.cards[0];
                                if (get.color(event.card2) == 'black') {
                                    if (!target.hasSkill('fengyin')) {
                                        target.addTempSkill('fengyin');
                                    }
                                    target.addTempSkill('yinyijue2');
                                    event.finish();
                                } else {
                                    player.gain(event.card2, target, 'give', 'bySelf');
                                    if (target.hp < target.maxHp) {
                                        player.chooseBool('是否让目标回复一点体力？').ai = function (event, player) {
                                            return get.recoverEffect(target, player, player) > 0;
                                        };
                                    }
                                }
                                ('step 2');
                                if (result.bool) {
                                    target.recover();
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        var hs = player.getCards('h');
                                        if (hs.length < 3) return 0;
                                        if (target.countCards('h') > target.hp + 1 && get.recoverEffect(target) > 0) {
                                            return 1;
                                        }
                                        if (player.canUse('sha', target) && (player.countCards('h', 'sha') || player.countCards('he', { color: 'red' }))) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                order: 9,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg.target.hasSkillTag('yinyijue2')) return false;
                                },
                            },
                        },
                        yinyijue2: {
                            trigger: {
                                player: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.source && event.source.hasSkill('yinyijue') && event.card && event.card.name == 'sha' && event.card.suit == 'heart' && event.notLink();
                            },
                            silent: true,
                            popup: false,
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            mark: true,
                            mod: {
                                cardEnabled2(card) {
                                    return false;
                                },
                            },
                            intro: {
                                content: '不能使用或打出牌,非锁定技失效且受到♥️️【杀】的伤害+1',
                            },
                        },
                        yinzhenhua: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            charlotte: true,
                            _priority: 10,
                            filter(event, player) {
                                return game.players.length >= 1 && (event.name != 'phase' || game.phaseNumber == 0);
                            },
                            content() {
                                var card = get.cardPile(function (card) {
                                    return card.name == 'qinglong';
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            group: ['yinzhenhua_1', 'yinzhenhua_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                2: {
                                    shaRelated: true,
                                    trigger: {
                                        player: 'useCardToTargeted',
                                    },
                                    logTarget: 'target',
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.name == 'sha' && get.color(event.card) == 'black';
                                    },
                                    content() {
                                        trigger.parent.directHit.add(trigger.target);
                                    },
                                },
                            },
                        },
                        yintuodao: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('yintuodao2');
                                var next = player.chooseToUse(get.prompt('yintuodao'), { name: 'sha' });
                                next.aidelay = true;
                                next.noButton = true;
                                ('step 1');
                                if (result.bool) {
                                }
                            },
                            group: 'yintuodao_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        event.tdnum = trigger.num;
                                        ('step 1');
                                        event.tdnum--;
                                        player.addTempSkill('yintuodao2');
                                        var next = player.chooseToUse(get.prompt('yintuodao'), { name: 'sha' });
                                        next.aidelay = true;
                                        next.noButton = true;
                                        ('step 2');
                                        if (result.bool) {
                                        }
                                        ('step 3');
                                        if (event.tdnum > 0) {
                                            event.goto(1);
                                        }
                                    },
                                },
                            },
                        },
                        yintuodao2: {
                            trigger: {
                                source: 'damageSource',
                            },
                            silent: true,
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                var tdmp = player.maxHp - player.hp;
                                player.draw(Math.max(1, tdmp));
                                player.recover();
                                player.removeSkill('yintuodao2');
                            },
                            group: 'yintuodao2_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    silent: true,
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.card.name == 'sha';
                                    },
                                    content() {
                                        player.removeSkill('yintuodao2');
                                    },
                                    popup: false,
                                },
                            },
                            popup: false,
                        },
                        yinquanji: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: ['damageEnd', 'phaseUseEnd'],
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player, name) {
                                if (event.name == 'phaseUse') return player.countCards('h') >= player.hp;
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = trigger.num || 1;
                                ('step 1');
                                event.count--;
                                player.draw();
                                ('step 2');
                                if (player.countCards('he')) {
                                    player.chooseCard('将一张牌置于武将牌上作为<权>', 'he');
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards?.length) {
                                    player.addToExpansion(result.cards, player, 'give').gaintag.add('yinquanji');
                                }
                                ('step 4');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('yinquanji')).set('frequentSkill', 'yinquanji');
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getExpansions('yinquanji').length;
                                },
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions('yinquanji');
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
                                            if (!target.hasSkill('yinpaiyi') && target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                            group: ['yinquanji_1', 'yinquanji_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    preHidden: true,
                                    filter(event, player, name) {
                                        if (!event.card) return false;
                                        var evt = event.parent;
                                        return evt && evt.card == event.card && evt.type == 'card';
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                        ('step 1');
                                        var hs = player.getCards('he');
                                        if (hs.length) {
                                            if (hs.length == 1) event._result = { bool: true, cards: hs };
                                            else player.chooseCard('he', '选择一张牌作为<权>');
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            var cs = result.cards;
                                            player.addToExpansion(cs, player, 'give').gaintag.add('yinquanji');
                                        }
                                    },
                                },
                                2: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    filter(event, player) {
                                        return event.type == 'discard';
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                        ('step 1');
                                        var hs = player.getCards('he');
                                        if (hs.length) {
                                            if (hs.length == 1) event._result = { bool: true, cards: hs };
                                            else player.chooseCard('he', '选择一张牌作为<权>');
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            var cs = result.cards;
                                            player.addToExpansion(cs, player, 'give').gaintag.add('yinquanji');
                                        }
                                    },
                                },
                            },
                        },
                        yinpaiyi: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:阴包武将/audio:2',
                            filter(event, player) {
                                return player.getExpansions('yinquanji').length;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('排异', player.getExpansions('yinquanji'), 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'yinpaiyi',
                                        filterTarget: true,
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        card: links[0],
                                        delay: false,
                                        content: lib.skill.yinpaiyi.contentx,
                                        ai: {
                                            order: 10,
                                            result: {
                                                target(player, target) {
                                                    if (player != target) return 0;
                                                    if (player.hasSkill('yinquanji') || player.countCards('h') + 2 <= player.hp + player.getExpansions('yinquanji').length) return 1;
                                                    return 0;
                                                },
                                            },
                                        },
                                    };
                                },
                                prompt() {
                                    return '请选择〖排异〗的目标';
                                },
                            },
                            contentx() {
                                'step 0';
                                var card = lib.skill.yinpaiyi_backup.card;
                                player.loseToDiscardpile(card);
                                ('step 1');
                                if (player.storage.yinzili) {
                                    var pymp = Math.max(2, player.getExpansions('yinquanji').length);
                                    target.draw(Math.min(8, pymp));
                                } else target.draw(2);
                                ('step 2');
                                if (target.countCards('h') > player.countCards('h')) {
                                    target.damage();
                                }
                                if (target != player) player.recover();
                            },
                            ai: {
                                order: 1,
                                combo: 'yinquanji',
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        yinzili: {
                            audio: 'ext:阴包武将/audio:2',
                            charlotte: true,
                            limited: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return !player.storage.yinzili;
                            },
                            init(player) {
                                player.storage.yinzili = false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('yinzili');
                                player.storage.yinzili = true;
                                ('step 1');
                                player.loseMaxHp();
                                player.update();
                                var hxl = player.maxHp - player.hp;
                                player.recover(hxl);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                        },
                        yinpaiyi_backup: {},
                        gaijuesha: {
                            audio: 'ext:阴包武将/audio:2',
                            global: 'gaijuesha2',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 15,
                            forced: true,
                            preHidden: true,
                            charlotte: true,
                            filter(event, player, name) {
                                return event.player != player;
                            },
                            content() { },
                        },
                        gaijuesha2: {
                            mod: {
                                cardSavable(card, player) {
                                    if (card.name == 'tao' || card.name == 'jiu') return false;
                                },
                                cardEnabled(card, player) {
                                    if (card.name == 'tao' || card.name == 'jiu') return false;
                                },
                            },
                        },
                        yindingjiang: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.hasJudge('bingliang')) return false;
                                return (
                                    player.countCards('hes', function (card) {
                                        return get.color(card) == 'black';
                                    }) > 0
                                );
                            },
                            viewAs: {
                                name: 'bingliang',
                            },
                            position: 'hes',
                            filterCard(card, player, event) {
                                return get.color(card) == 'black' && player.canAddJudge({ name: 'bingliang', cards: [card] });
                            },
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            check(card) {
                                return 9 - get.value(card);
                            },
                            onuse(links, player) {
                                var next = game.createEvent('yindingjiang_content', false, _status.event.parent);
                                next.player = player;
                                next.setContent(lib.skill.yindingjiang.yindingjiang_content);
                            },
                            yindingjiang_content() {
                                'step 0';
                                player
                                    .chooseTarget('选择一名其他角色,对其造成2点伤害', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.damage('nocard');
                                }
                            },
                            ai: {
                                result: {
                                    target: 1,
                                },
                                order: 12,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 4,
                                },
                                tag: {
                                    skip: 'phaseDraw',
                                },
                            },
                        },
                        yinyingcai: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.countCards('j') > 0;
                            },
                            content() {
                                var sypd = player.countCards('j');
                                player.draw(sypd);
                                if (sypd >= 2) player.moveCard();
                            },
                        },
                        yinyonghan: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: ['recoverEnd', 'damageEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.num > 0;
                            },
                            async content(event, trigger, player) {
                                event.yh = trigger.num;
                                if (event.yh > 20) event.yh = 20;
                                player.draw(event.yh);
                                trigger.player.addMark('yinyonghan', event.yh); //QQQ
                            },
                            marktext: '寒',
                            intro: {
                                content: '一共有#个标记',
                            },
                        },
                        yinfenglue: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardToTarget',
                            },
                            logTarget: 'target',
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                if (event.target.countMark('yinyonghan') > 0) return false;
                                return event.target != player && event.targets.length == 1;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(get.prompt2('yinfenglue', trigger.target));
                                next.set('ai', function (card) {
                                    if (player.countCards('h') <= 2) return false;
                                    return 5 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.target.addMark('yinyonghan', 1);
                                }
                            },
                            group: 'yinfenglue_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    charlotte: true,
                                    filter(event, player) {
                                        if (event.source == undefined) return false;
                                        return event.source.countMark('yinyonghan') >= event.num;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.source.removeMark('yinyonghan', trigger.num);
                                        ('step 1');
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        yinxueze: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countMark('yinyonghan');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('yinxueze'), '移去一名角色所有的<寒>并摸牌', function (card, player, target) {
                                        return target.countMark('yinyonghan') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return target.countMark('yinyonghan');
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var yhs = result.targets[0].countMark('yinyonghan');
                                    result.targets[0].removeMark('yinyonghan', yhs);
                                    player.draw(yhs + 1);
                                }
                            },
                        },
                        gaiqinzheng: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                return num % 2 == 0 || num % 3 == 0 || num % 4 == 0 || num % 5 == 0 || num % 6 == 0 || num % 7 == 0 || num % 8 == 0 || num % 9 == 0;
                            },
                            content() {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                var cards = [];
                                if (num % 2 == 0) {
                                    player.draw();
                                }
                                if (num % 3 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return card.name == 'sha' || card.name == 'shan';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 4 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return get.type(card) == 'basic';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 5 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return ['tao', 'jiu', 'zong', 'xionghuangjiu'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 6 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 7 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return get.type(card) != 'basic';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 8 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return ['juedou', 'wuzhong', 'zengbin', 'sadouchengbing', 'dongzhuxianji', 'tongzhougongji'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 9 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return get.type(card) == 'equip';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                            group: 'gaiqinzheng_count',
                            intro: {
                                content(num) {
                                    var str = '<li>总次数:';
                                    str += num;
                                    str += '<br><li>摸牌:';
                                    str += num % 2;
                                    str += '/2<br><li>杀/闪:';
                                    str += num % 3;
                                    str += '/3<br><li>基本牌:';
                                    str += num % 4;
                                    str += '/4<br><li>桃/酒:';
                                    str += num % 5;
                                    str += '/5<br><li>锦囊牌:';
                                    str += num % 6;
                                    str += '/6<br><li>非基本牌:';
                                    str += num % 7;
                                    str += '/7<br><li>决斗/无中生有:';
                                    str += num % 8;
                                    str += '/8<br><li>装备牌:';
                                    str += num % 9;
                                    str += '/9';
                                    return str;
                                },
                            },
                        },
                        gaiqinzheng_count: {
                            trigger: {
                                player: ['useCard1', 'respond'],
                            },
                            silent: true,
                            firstDo: true,
                            noHidden: true,
                            content() {
                                player.storage.gaiqinzheng = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                player.markSkill('gaiqinzheng');
                            },
                            forced: true,
                            popup: false,
                        },
                        gaidaimin: {
                            trigger: {
                                global: 'recoverEnd',
                            },
                            forced: true,
                            audio: 'ext:阴包武将/audio:2',
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.source && event.source == player && event.num > 0;
                            },
                            content() {
                                var dmp = 3 - trigger.player.hp;
                                player.draw(Math.max(1, dmp));
                                trigger.player.draw(Math.max(1, dmp));
                            },
                        },
                        yinzhiba: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: ['logSkillBegin', 'useSkillBegin'],
                            },
                            popup: false,
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.player.name != 'JX_daxiaoqiao') return false;
                                if (event.skill != 'DIY_tianxiang_pass') return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                list = [];
                                list.add(player);
                                list.add(trigger.player);
                                player.chooseBool('是否与' + get.translation(trigger.player) + '各摸一张牌').ai = function (event, player) {
                                    if (get.attitude(player, trigger.player) < 0) return false;
                                    return true;
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.asyncDraw(list);
                                }
                            },
                        },
                        yinmoulongdan: {
                            audio: 'ext:阴包武将/audio:2',
                            mod: {
                                targetInRange(card, player) {
                                    if (!card.isCard) return true;
                                },
                            },
                            group: ['yinmoulongdan_sha', 'yinmoulongdan_shan', 'yinmoulongdan_draw'],
                            subSkill: {
                                draw: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.card.isCard;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                sha: {
                                    audio: 'ext:阴包武将/audio:2',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard: {
                                        name: 'shan',
                                    },
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hs', 'shan')) return false;
                                    },
                                    position: 'hs',
                                    prompt: '将一张【闪】当【杀】使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                            },
                                        },
                                        respondSha: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('hs', 'shan')) return false;
                                        },
                                        order() {
                                            return get.order({ name: 'sha' }) + 0.1;
                                        },
                                        useful: -1,
                                        value: -1,
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
                                shan: {
                                    audio: 'ext:阴包武将/audio:2',
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    prompt: '将一张【杀】当【闪】使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    position: 'hs',
                                    viewAsFilter(player) {
                                        if (!player.countCards('hs', 'sha')) return false;
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('hs', 'sha')) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                            },
                                        },
                                        order: 4,
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [7, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        yinmoujizhu: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.countMark('yinmoujizhu') < player.hp;
                            },
                            content() {
                                'step 0';
                                if (player.countMark('yinmoujizhu') < player.hp) player.addMark('yinmoujizhu', 1);
                                ('step 1');
                                player.draw();
                            },
                            marktext: '积著',
                            intro: {
                                content: '因〖积著〗获得牌数:#张',
                            },
                            group: 'yinmoujizhu_mark',
                            subSkill: {
                                mark: {
                                    trigger: {
                                        global: ['phaseBefore', 'phaseAfter'],
                                    },
                                    silent: true,
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.countMark('yinmoujizhu');
                                    },
                                    content() {
                                        var jzs = player.countMark('yinmoujizhu');
                                        player.removeMark('yinmoujizhu', jzs);
                                    },
                                    popup: false,
                                },
                            },
                        },
                        xingaixuanfeng: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: ['loseAfter', 'phaseDiscardEnd'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'phaseDiscard') {
                                    var cards = [];
                                    player.getHistory('lose', function (evt) {
                                        if (evt && evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs) cards.addArray(evt.hs);
                                    });
                                    return cards.length;
                                } else {
                                    var evt = event.getl(player);
                                    return evt && evt.es && evt.es.length;
                                }
                            },
                            async content(event, trigger, player) {
                                event.num = Math.max(2, player.hp);
                                while (event.num > 0 && game.hasPlayer((Q) => Q.isEnemiesOf(player) && Q.countDiscardableCards(Q, 'he'))) {
                                    event.num--;
                                    const result = await player
                                        .chooseTarget(get.prompt('xingaixuanfeng'), '弃置一名其他角色的一张牌', function (card, player, Q) {
                                            return Q.isEnemiesOf(player) && Q.countDiscardableCards(Q, 'he'); //QQQ
                                        })
                                        .set('ai', function (target) {
                                            return get.effect(target, { name: 'guohe_copy2' }, _status.event.player, _status.event.player);
                                        })
                                        .forResult();
                                    if (result.bool) {
                                        player.line(result.targets[0], 'green');
                                        await player.discardPlayerCard(result.targets[0], 'he', true);
                                    }
                                }
                                var zbq = player.countCards('e') + 1;
                                const result1 = await player
                                    .chooseTarget('是否对一名其他角色造成' + get.cnNumber(zbq, true) + '点伤害', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    })
                                    .forResult();
                                if (result1.bool) {
                                    player.line(result1.targets[0], 'thunder');
                                    result1.targets[0].damage(zbq);
                                }
                            }, //QQQ
                        },
                        xingaiyongjin: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.canMoveCard(null, true);
                            },
                            content() {
                                player.moveCard().nojudge = true;
                            },
                            group: 'xingaiyongjin_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:阴包武将/audio:2',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        var equip = get.cardPile2(function (card) {
                                            return get.type(card) == 'equip';
                                        });
                                        if (equip) player.gain(equip, 'gain2', 'log');
                                    },
                                },
                            },
                        },
                        yinmoutangyi: {
                            audio: 'ext:阴包武将/audio:2',
                            selectCard: -1,
                            position: 'h',
                            enable: 'phaseUse',
                            usable: 1,
                            group: 'yinmoutangyi_xg',
                            filterCard(card, player) {
                                return card.name == 'sha';
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            onuse(result, player) {
                                if (!player.storage.yinmoutangyi) player.storage.yinmoutangyi = [];
                                player.storage.yinmoutangyi = result.cards.length;
                            },
                            ai: {
                                order: 0.1,
                                directHit_ai: true,
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target_use(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                    target(player, target) {
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    damage: 1,
                                    respondShan: 1,
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
                            },
                        },
                        yinmoutangyi_xg: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            charlotte: true,
                            silent: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && event.parent.skill == 'yinmoutangyi';
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                trigger.parent.directHit.add(trigger.target);
                                var target = trigger.target;
                                var id = target.playerid;
                                var map = trigger.customArgs;
                                if (!player.storage.yinmoutangyi) player.storage.yinmoutangyi = [];
                                if (!map[id]) map[id] = {};
                                if (!map[id].extraDamage) map[id].extraDamage = 0;
                                map[id].extraDamage = player.storage.yinmoutangyi - 1;
                                ('step 1');
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse') {
                                    evt.skipped = true;
                                    event.finish();
                                }
                            },
                            popup: false,
                        },
                        gaijuece: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: 'loseAfter',
                            },
                            check(event, player) {
                                return get.damageEffect(event.player, player, player) > 0;
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                if (event.player == player) return false;
                                return event.hs && event.hs.length && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                event.count = trigger.cards.length;
                                ('step 1');
                                player.line(trigger.player, 'green');
                                trigger.player.damage();
                                event.count--;
                                ('step 2');
                                if (event.count > 0) event.goto(1);
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        gaimieji: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return (
                                    player.countCards('h', { color: 'black' }) &&
                                    game.hasPlayer(function (current) {
                                        return current != player && !current.hasSkill('gaimieji2');
                                    })
                                );
                            },
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he') > 0 && !target.hasSkill('gaimieji2');
                            },
                            discard: false,
                            delay: false,
                            loseTo: 'cardPile',
                            insert: true,
                            visible: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.draw('bottom');
                                target.addTempSkill('gaimieji2', 'phaseUseEnd');
                                ('step 1');
                                if (
                                    !target.countCards('he', function (card) {
                                        if (get.type2(card) == 'trick') return true;
                                        return lib.filter.cardDiscardable(card, target, 'gaimieji');
                                    })
                                )
                                    event.finish();
                                else
                                    target
                                        .chooseCard('he', true, function (card, player) {
                                            if (get.type2(card) == 'trick') return true;
                                            return lib.filter.cardDiscardable(card, player, 'gaimieji');
                                        })
                                        .set('prompt', '选择交给' + get.translation(player) + '一张锦囊牌,或依次弃置所有非锦囊牌.');
                                ('step 2');
                                if (result.cards?.length) {
                                    if (get.type2(result.cards[0]) == 'trick') {
                                        player.gain(result.cards, target, 'giveAuto');
                                        event.finish();
                                    } else target.discard(result.cards);
                                } else event.finish();
                                ('step 3');
                                if (
                                    target.countCards('he', function (card) {
                                        return get.type2(card) != 'trick';
                                    })
                                )
                                    target.chooseToDiscard('he', true, function (card) {
                                        return get.type2(card) != 'trick';
                                    });
                                ('step 4');
                                if (
                                    target.countCards('he', function (card) {
                                        return get.type2(card) != 'trick';
                                    })
                                ) {
                                    event.goto(3);
                                } else event.finish();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        gaimieji2: {
                            mark: true,
                            charlotte: true,
                            marktext: '被灭计',
                            intro: {
                                content: '已成为过【灭计】的目标',
                            },
                        },
                        gaifencheng: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.gaifencheng;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            limited: true,
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            mark: true,
                            line: 'fire',
                            content() {
                                'step 0';
                                player.storage.gaifencheng = true;
                                player.awakenSkill('gaifencheng');
                                event.num = 1;
                                event.targets = targets.slice(0);
                                event.targets.sort(lib.sort.seat);
                                ('step 1');
                                var fcnum = 2 * event.num;
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    event.target = target;
                                    var res = get.damageEffect(target, player, target, 'fire');
                                    target
                                        .chooseToDiscard('he', '弃置至少' + get.cnNumber(fcnum) + '张牌或受到' + get.cnNumber(2 * event.num) + '点火焰伤害', [fcnum, Infinity])
                                        .set('ai', function (card) {
                                            if (_status.event.parent.num >= 2) return 14 - get.value(card);
                                            if (ui.selected.cards.length > _status.event.parent.num) return -1;
                                            if (_status.event.player.hasSkillTag('nofire')) return -1;
                                            if (_status.event.res >= 0) return 16 - get.value(card);
                                            if (get.type(card) != 'basic') {
                                                return 16 - get.value(card);
                                            }
                                            return 18 - get.value(card);
                                        })
                                        .set('res', res);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (!result.bool) {
                                    event.target.damage(event.num * 2, 'fire');
                                    event.num = 1;
                                } else {
                                    event.num = Math.max(1, result.cards.length);
                                }
                                event.goto(1);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        var num = 0,
                                            eff = 0,
                                            players = game
                                                .filterPlayer(function (current) {
                                                    return current != player;
                                                })
                                                .sortBySeat(player);
                                        for (var target of players) {
                                            if (get.damageEffect(target, player, target, 'fire') >= 0) {
                                                num = 0;
                                                continue;
                                            }
                                            var shao = false;
                                            num++;
                                            if (
                                                target.countCards('he', function (card) {
                                                    if (get.type(card) != 'basic') {
                                                        return get.value(card) < 10;
                                                    }
                                                    return get.value(card) < 8;
                                                }) < num
                                            )
                                                shao = true;
                                            if (shao) {
                                                eff -= 4 * (get.realAttitude || get.attitude)(player, target);
                                                num = 0;
                                            } else eff -= (num * (get.realAttitude || get.attitude)(player, target)) / 4;
                                        }
                                        if (eff < 4) return 0;
                                        return eff;
                                    },
                                },
                            },
                            init(player) {
                                player.storage.gaifencheng = false;
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        yinxiongluan: {
                            enable: 'phaseUse',
                            intro: {
                                content: 'limited',
                            },
                            audio: 'ext:阴包武将/audio:2',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.yinxiongluan = false;
                            },
                            filter(event, player) {
                                if (player.storage.yinxiongluan) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('yinxiongluan');
                                player.storage.yinxiongluan = true;
                                player.addTempSkill('yinxiongluan_use');
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'yellow');
                                        current.addTempSkill('yinxiongluan_effect');
                                    }
                                });
                                event.list = ['武器栏', '防具栏', '进攻马栏', '防御马栏', '宝物栏', '判定区'];
                                ('step 1');
                                player
                                    .chooseControl(event.list)
                                    .set('prompt', '雄乱:请选择要废除的区域')
                                    .set('ai', function () {
                                        return event.list.length - 1;
                                    });
                                ('step 2');
                                event.list.remove(result.control);
                                switch (result.control) {
                                    case '宝物栏':
                                        player.disableEquip('equip5');
                                        break;
                                    case '武器栏':
                                        player.disableEquip('equip1');
                                        break;
                                    case '防具栏':
                                        player.disableEquip('equip2');
                                        break;
                                    case '进攻马栏':
                                        player.disableEquip('equip4');
                                        break;
                                    case '防御马栏':
                                        player.disableEquip('equip3');
                                        break;
                                    case '判定区':
                                        player.disableJudge();
                                        break;
                                }
                                player.chooseUseTarget({ name: 'sha' }, get.prompt('yinxiongluan'), '视为使用一张【杀】', false);
                                if (event.list.length) event.goto(1);
                            },
                            subSkill: {
                                use: {
                                    audio: 'drlt_xiongluan',
                                    charlotte: true,
                                    forced: true,
                                    mod: {
                                        cardUsable(card, player, num) {
                                            return Infinity;
                                        },
                                        targetInRange(card, player, target, now) {
                                            return true;
                                        },
                                    },
                                },
                                effect: {
                                    mark: true,
                                    marktext: '雄乱',
                                    intro: {
                                        content: '不能使用或打出手牌',
                                    },
                                    charlotte: true,
                                    mod: {
                                        cardEnabled2(card) {
                                            if (get.position(card) == 'h') return false;
                                        },
                                    },
                                },
                            },
                            ai: {
                                order: 13,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        yin_chaofeng: {
                            shaRelated: true,
                            forced: true,
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && player.countCards('h') > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                var str = '弃置一张牌并摸一张牌',
                                    color,
                                    type;
                                if (trigger.card) {
                                    type = get.type2(trigger.card, false);
                                    color = get.color(trigger.card, false);
                                    if (color != 'none') str += ';若弃置' + get.translation(color) + '牌则改为摸两张牌';
                                    if (type) str += ';若弃置类型为' + get.translation(type) + '的牌则伤害+1';
                                }
                                var next = player.chooseToDiscard('he', get.prompt('yin_chaofeng', trigger.player), str);
                                next.set('ai', function (card) {
                                    var player = _status.event.player,
                                        suit = _status.event.color,
                                        number = _status.event.type;
                                    var val = 4 - get.value(card);
                                    if (get.color(card) == suit) val += 3;
                                    if (get.type2(card) == number) val += 4;
                                    return val;
                                });
                                if (color != 'none') {
                                    event.color = color;
                                    next.set('color', color);
                                }
                                if (type) {
                                    event.type = type;
                                    next.set('type', type);
                                }
                                ('step 1');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    player.draw(event.color && get.color(card, card.original == 'h' ? player : false) == event.color ? 2 : 1);
                                    if (event.type && get.type2(card, card.original == 'h' ? player : false) == event.type) {
                                        var id = trigger.target.playerid;
                                        var map = trigger.customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (!map[id].extraDamage) map[id].extraDamage = 0;
                                        map[id].extraDamage++;
                                    }
                                    var target = trigger.target;
                                    equip = target.getCards('e').randomGet();
                                    if (equip) target.discard(equip);
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                        },
                        yin_jianying: {
                            audio: 'dcjianying',
                            mod: {
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object' && player.isPhaseUsing()) {
                                        var evt = lib.skill.yin_jianying.getLastUsed(player);
                                        if (evt && evt.card && evt.card.number) {
                                            var num1 = evt.card.number - card.number;
                                            if (num1 < 0) var num2 = -num1;
                                            else var num2 = num1; //QQQ
                                        }
                                        if (evt && evt.card && ((evt.card.suit && evt.card.suit == card.suit) || (evt.card.number && num2 < player.storage.yin_jianying_red))) {
                                            return num + 10;
                                        }
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            getLastUsed(player, event) {
                                var history = player.getAllHistory('useCard');
                                var index;
                                if (event) index = history.indexOf(event) - 1;
                                else index = history.length - 2;
                                if (index >= 0) return history[index];
                                return false;
                            },
                            init(player) {
                                player.storage.yin_jianying_red = 1;
                                player.storage.yin_jianying_thunder = 1;
                            },
                            filter(event, player) {
                                var evt = lib.skill.yin_jianying.getLastUsed(player, event);
                                if (!evt || !evt.card) return false;
                                if (['heart', 'spade', 'diamond', 'club'].includes(evt.card.suit) && evt.card.suit == event.card.suit) return true;
                                var num1 = evt.card.number - event.card.number;
                                if (num1 < 0) {
                                    var num2 = -num1;
                                } else {
                                    var num2 = num1;
                                }
                                return typeof evt.card.number == 'number' && num2 < player.storage.yin_jianying_red;
                            },
                            check(event, player, storage) {
                                var num = ui.cardPile.childElementCount + ui.discardPile.childElementCount;
                                if (num <= player.storage.yin_jianying_thunder || player.countCards('h') >= 50) return false;
                            },
                            content() {
                                'step 0';
                                player.draw(player.storage.yin_jianying_thunder);
                                ('step 1');
                                player
                                    .chooseControl('<span class=firetext>红色</span>', '<span class=thundertext>蓝色</span>', 'cancel2')
                                    .set('prompt', get.prompt('yin_jianying'))
                                    .set('prompt2', '令〖渐营〗中的一个数字+1')
                                    .set('ai', function () {
                                        if (player.storage.yin_jianying_red < 12) return 0;
                                        if (player.storage.yin_jianying_thunder > 19) return 2;
                                        return 1;
                                    });
                                ('step 2');
                                if (result.control != 'cancel2') {
                                    if (result.control == '<span class=firetext>红色</span>') {
                                        player.storage.yin_jianying_red++;
                                    } else {
                                        player.storage.yin_jianying_thunder++;
                                    }
                                    game.log(player, '令〖渐营〗中的', result.control, '的数字', '#y+1');
                                    player.markSkill('yin_jianying');
                                }
                            },
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var history = player.getAllHistory('useCard');
                                    if (history.length) {
                                        card = history[history.length - 1].card;
                                        if (['heart', 'diamond'].includes(card.suit)) suit = '<span class=firetext>' + get.translation(card.suit) + '</span>';
                                        else suit = get.translation(card.suit);
                                    }
                                    str = '<div class="text center"><span class=firetext>红色:' + get.translation(player.storage.yin_jianying_red) + '</span> <span class=thundertext>蓝色:' + get.translation(player.storage.yin_jianying_thunder) + '</span></div>';
                                    if (!history.length) return (str += '<br>上一张使用的牌:无');
                                    else str += '<br>上一张使用的牌:【' + suit + get.translation(card.number) + '】';
                                    return str;
                                },
                            },
                        },
                        yin_zhuosheng: {
                            audio: 'zhuosheng',
                            init(player) {
                                player.addSkill('zhuosheng_count');
                                if (game.phaseNumber > 0) {
                                    var hs = player.getCards('h'),
                                        all = player.getAllHistory(),
                                        cards = [];
                                    for (var i = all.length - 1; i >= 0; i--) {
                                        for (var j of all[i].gain) {
                                            cards.addArray(j.cards);
                                        }
                                        if (all[i].isRound) break;
                                    }
                                    cards = cards.filter(function (i) {
                                        return hs.includes(i);
                                    });
                                    if (cards.length) player.addGaintag(cards, 'zhuosheng');
                                }
                            },
                            onremove(player) {
                                player.removeSkill('zhuosheng_count');
                                player.removeGaintag('zhuosheng');
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (!card.cards || get.type(card) != 'basic') return;
                                    for (var i of card.cards) {
                                        if (i.hasGaintag('zhuosheng')) return game.online ? player == _status.currentPhase : player.isPhaseUsing();
                                    }
                                },
                                cardUsable(card, player, target) {
                                    if (!card.cards || get.mode() == 'guozhan' || get.type(card) != 'basic' || !(game.online ? player == _status.currentPhase : player.isPhaseUsing())) return;
                                    for (var i of card.cards) {
                                        if (i.hasGaintag('zhuosheng')) return Infinity;
                                    }
                                },
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('zhuosheng') && get.type(card) == 'basic') return num - 0.1;
                                },
                            },
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filterx(event, player) {
                                if (!player.isPhaseUsing()) return false;
                                return player.getHistory('lose', function (evt) {
                                    if (evt.parent != event) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('zhuosheng')) return true;
                                    }
                                    return false;
                                }).length;
                            },
                            filter(event, player) {
                                if (!lib.skill.yin_zhuosheng.filterx(event, player)) return false;
                                if (get.type(event.card) != 'trick') return false;
                                if (event.targets && event.targets.length) return true;
                                var info = get.info(event.card);
                                if (info.allowMultiple == false) return false;
                                if (event.targets && !info.multitarget) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
                                        })
                                    ) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var prompt2 = '为' + get.translation(trigger.card) + '增加或减少一个目标';
                                player
                                    .chooseTarget(get.prompt('yin_zhuosheng'), function (card, player, target) {
                                        var player = _status.event.player;
                                        if (_status.event.targets.includes(target)) return true;
                                        return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
                                    })
                                    .set('prompt2', prompt2)
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player) * (_status.event.targets.includes(target) ? -1 : 1);
                                    })
                                    .set('targets', trigger.targets)
                                    .set('card', trigger.card);
                                ('step 1');
                                if (result.bool) {
                                    if (!event.isMine() && !event.isOnline()) game.delayx();
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets) {
                                    if (trigger.targets.includes(event.targets[0])) trigger.targets.removeArray(event.targets);
                                    else trigger.targets.addArray(event.targets);
                                }
                            },
                            group: ['yin_zhuosheng_equip', 'yin_zhuosheng_trick', 'yin_zhuosheng_silent'],
                            subfrequent: ['equip'],
                            subSkill: {
                                equip: {
                                    audio: 'zhuosheng',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return get.type(event.card) == 'equip' && lib.skill.yin_zhuosheng.filterx(event, player);
                                    },
                                    forced: true,
                                    prompt: '是否发动【擢升】摸一张牌？',
                                    content() {
                                        player.draw();
                                    },
                                },
                                trick: {
                                    audio: 'zhuosheng',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) == 'trick' && lib.skill.yin_zhuosheng.filterx(event, player);
                                    },
                                    content() {
                                        trigger.directHit.addArray(game.filterPlayer());
                                    },
                                },
                                silent: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    silent: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return get.mode() != 'guozhan' && get.type(event.card) == 'basic' && lib.skill.yin_zhuosheng.filterx(event, player) && event.addCount !== false;
                                    },
                                    content() {
                                        trigger.addCount = false;
                                        var stat = player.getStat();
                                        if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        yin_kuizhu: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.type != 'discard') return false;
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard') num += evt.cards2.length;
                                });
                                return num > 0;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard') event.num += evt.cards2.length;
                                });
                                if (!player.countCards('h')) {
                                    player.draw(event.num);
                                    event.finish();
                                }
                                ('step 1');
                                event.str1 = '令至多' + event.num + '名角色摸一张牌';
                                event.str2 = '对任意名体力值之和不大于' + event.num + '的角色造成一点伤害';
                                player
                                    .chooseControl('cancel2')
                                    .set('ai', function () {
                                        if (
                                            game.countPlayer(function (current) {
                                                return get.attitude(player, current) < 0 && current.hp == event.num;
                                            }) > 0 &&
                                            event.num <= 3
                                        )
                                            return 1;
                                        return 0;
                                    })
                                    .set('choiceList', [event.str1, event.str2])
                                    .set('prompt', '是否发动【溃诛】？');
                                ('step 2');
                                if (result.control == 'cancel2') event.finish();
                                event.control = [event.str1, event.str2][result.index];
                                ('step 3');
                                if (event.control == event.str2) {
                                    player
                                        .chooseTarget('请选择〖溃诛〗的目标', [1, event.num], function (card, player, target) {
                                            var targets = ui.selected.targets;
                                            var num = 0;
                                            for (var i = 0; i < targets.length; i++) {
                                                num += targets[i].hp;
                                            }
                                            return num + target.hp <= _status.event.num;
                                        })
                                        .set('ai', function (target) {
                                            if (ui.selected.targets[0] != undefined) return -1;
                                            return get.attitude(player, target) < 0;
                                        })
                                        .set('promptbar', 'none')
                                        .set('num', event.num);
                                } else {
                                    player.chooseTarget('请选择〖溃诛〗的目标', [1, event.num]).ai = function (target) {
                                        return get.attitude(player, target);
                                    };
                                }
                                ('step 4');
                                if (result.bool) {
                                    var targets = result.targets.sortBySeat();
                                    if (event.control == event.str1) {
                                        player.line(targets);
                                        game.asyncDraw(targets);
                                    } else {
                                        player.line(targets);
                                        for (var i = 0; i < targets.length; i++) {
                                            targets[i].damage();
                                        }
                                    }
                                }
                            },
                        },
                        yin_chezheng: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (player.isPhaseUsing() && player.inRangeOf(target)) {
                                        return true;
                                    }
                                },
                                cardUsableTarget(card, player, target) {
                                    if (player.isPhaseUsing() && player.inRangeOf(target)) return true;
                                },
                                aiValue(player, card, num) {
                                    if (get.subtype(card) == 'equip3') return -1;
                                    if (card.name == 'zhangba') return 15;
                                    if (player.isPhaseUsing() && player.countCards('hs') > 1 && ['shan', 'tao', 'wuxie'].includes(card.name)) return 0;
                                },
                            },
                            forced: true,
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCard2',
                            },
                            filter(event, player) {
                                return player.isPhaseUsing();
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('掣政:请弃置一张牌,否则' + get.translation(trigger.card) + '对' + get.translation(trigger.targets) + '无效', 'he').set('ai', function (card) {
                                    return 10 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool == false) {
                                    trigger.cancel();
                                    trigger.untrigger();
                                }
                            },
                        },
                        yin_zhuning: {
                            audio: 'ext:阴包武将/audio:4',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectCard: [1, Infinity],
                            delay: false,
                            lose: false,
                            discard: false,
                            check(card) {
                                if (ui.selected.cards.length) return 0;
                                if (!ui.selected.cards.length && ['sha', 'tao', 'wuxie'].includes(card.name)) return 20;
                                var player = get.owner(card);
                                if (ui.selected.cards.length >= Math.max(1, player.countCards('h') - player.hp)) return 0;
                                return 10 - get.value(card);
                            },
                            content() {
                                'step 0';
                                target.gain(cards, player, 'giveAuto').gaintag.add('yin_fengxiang_tag');
                                ('step 1');
                                var list = [];
                                for (var name of lib.inpile) {
                                    var type = get.type(name);
                                    if (type != 'basic' && type != 'trick') continue;
                                    var card = { name: name };
                                    if (get.tag(card, 'damage') > 0 && player.hasUseTarget(card)) {
                                        list.push([type, '', name]);
                                    }
                                    if (name == 'sha') {
                                        for (var i of lib.inpile_nature) {
                                            card.nature = i;
                                            if (player.hasUseTarget(card)) list.push([type, '', name, i]);
                                        }
                                    }
                                }
                                if (list.length) {
                                    player.chooseButton(['是否视为使用一张伤害牌？', [list, 'vcard']]).set('ai', function (button) {
                                        return _status.event.player.getUseValue({ name: button.link[2] });
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, true, false);
                                }
                            },
                            ai: {
                                fireAttack: true,
                                order: 8,
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        if (target.hasSkillTag('nogain')) return 1 * att;
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 1 * att;
                                            return 1 * att;
                                        }
                                        if (target.hasJudge('lebu')) return 1 * att;
                                        var nh = target.countCards('h');
                                        var np = player.countCards('h');
                                        if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
                                            if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 1 * att;
                                        }
                                        return Math.max(1, 5 - nh) * att;
                                    },
                                },
                            },
                        },
                        yin_fengxiang: {
                            getMax(event) {
                                var max = 0,
                                    max2 = null,
                                    players = game.filterPlayer();
                                for (var current of players) {
                                    var num = 0,
                                        cards = current.getCards('h', function (card) {
                                            return card.hasGaintag('yin_fengxiang_tag');
                                        });
                                    if (event) {
                                        if (event.name == 'gain' && event.gaintag.includes('yin_fengxiang_tag')) cards.removeArray(event.cards);
                                        var evt = event.getl(current);
                                        if (evt && evt.gaintag_map) {
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('yin_fengxiang_tag')) num++;
                                            }
                                        }
                                    }
                                    num += cards.length;
                                    if (num > max) {
                                        max = num;
                                        max2 = current;
                                    } else if (num == max) max2 = null;
                                }
                                return max2;
                            },
                            audio: 'ext:阴包武将/audio:4',
                            trigger: {
                                player: 'damage',
                            },
                            forced: true,
                            filter(event, player) {
                                var target = lib.skill.yin_fengxiang.getMax();
                                return !target || target.isDamaged();
                            },
                            logTarget(event, player) {
                                return lib.skill.yin_fengxiang.getMax() || player;
                            },
                            content() {
                                var target = lib.skill.yin_fengxiang.getMax();
                                if (target) player.recover();
                                else player.draw();
                            },
                            group: 'yin_fengxiang_draw',
                            subSkill: {
                                draw: {
                                    trigger: {
                                        global: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'lose' && event.getlx === false) return false;
                                        return lib.skill.yin_fengxiang.getMax() != lib.skill.yin_fengxiang.getMax(event);
                                    },
                                    content() {
                                        if (trigger.delay === false) game.delayx();
                                        player.draw();
                                    },
                                },
                            },
                        },
                        yin_fengxiang_tag: {},
                        yin_tunan: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return ui.cardPile.childNodes.length;
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                event.num1 = 1;
                                while (event.num1 < 14) {
                                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                        var card = ui.cardPile.childNodes[i];
                                        if (card.number == event.num1) cards.push(card);
                                    }
                                    if (cards.length) break;
                                    else event.num1++;
                                }
                                event.card = cards.randomGet();
                                ('step 1');
                                player.showCards(event.card) + ('发动了【图南】', event.card);
                                var card = event.card;
                                event.bool = game.hasPlayer(function (current) {
                                    return player.canUse(card, current, false);
                                });
                                event.directindex = 1;
                                if (event.bool) {
                                    player
                                        .chooseControl(function () {
                                            return 0;
                                        })
                                        .set('choiceList', ['使用' + get.translation(card) + '(没有距离限制)', '将' + get.translation(card) + '当做【杀】使用'])
                                        .set('ai', function () {
                                            return _status.event.choice;
                                        })
                                        .set('choice', player.getUseValue(card, false) > player.getUseValue({ name: 'sha', cards: cards }) ? 0 : 1);
                                }
                                ('step 2');
                                var card = event.card;
                                if (event.bool) event.directindex = result.index;
                                if (event.directindex == 1) {
                                    var next = player.chooseUseTarget(get.prompt('yin_tunan'), '将' + get.translation(card) + '当做【杀】使用', { name: 'sha' }, cards, true, false);
                                    next.set('viewAs', true);
                                    next.set('addCount', false);
                                } else {
                                    player.chooseUseTarget(get.prompt('yin_tunan'), '请选择' + get.translation(card) + '的目标', card, true, false, 'nodistance');
                                }
                                ('step 3');
                                event.num2 = event.num1 + 1;
                                if (event.num > 13) event.finish();
                                ('step 4');
                                var cards = [];
                                for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                    var card = ui.cardPile.childNodes[i];
                                    if (card.number == event.num2) cards.push(card);
                                }
                                if (cards.length) {
                                    event.card = cards.randomGet();
                                    event.num1 = event.num2;
                                    event.goto(1);
                                } else event.num2++;
                                ('step 5');
                                if (event.num2 <= 13) event.goto(4);
                            },
                        },
                        yin_taoyin: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            logTarget() {
                                return _status.currentPhase;
                            },
                            filter(event, player) {
                                var target = _status.currentPhase;
                                return target && target != player && target.isAlive();
                            },
                            check(event, player) {
                                return get.attitude(player, _status.currentPhase) < 0;
                            },
                            content() {
                                _status.currentPhase.addTempSkill('taoyin2');
                                _status.currentPhase.addMark('taoyin2', 2, false);
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        yin_yimie: {
                            mod: {
                                cardname(card, player, name) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var cardname = lib.inpile[i];
                                        if (get.tag({ name: cardname }, 'damage') > 0) list.push(lib.inpile[i]);
                                    }
                                    if (list.includes(card.name)) return 'yin_yidaozhan';
                                },
                            },
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'yin_yidaozhan';
                            },
                            content() { },
                        },
                        yin_ruilve: {
                            audio: 'ext:阴包武将/audio:2',
                            global: 'yin_ruilve_2',
                            zhuSkill: true,
                            subSkill: {
                                2: {
                                    enable: 'phaseUse',
                                    discard: false,
                                    lose: false,
                                    delay: false,
                                    line: true,
                                    forced: true,
                                    clearTime: true,
                                    prepare(cards, player, targets) {
                                    },
                                    prompt() {
                                        var player = _status.event.player;
                                        var list = game.filterPlayer(function (target) {
                                            return target != player && target.hasZhuSkill('yin_ruilve', player);
                                        });
                                        var str = '将一张具有伤害标签的基本牌或锦囊牌交给' + get.translation(list);
                                        if (list.length > 1) str += '中的一人';
                                        return str;
                                    },
                                    filter(event, player) {
                                        if (player.group != 'jin') return false;
                                        if (player.countCards('h', lib.skill.yin_ruilve_2.filterCard) == 0) return false;
                                        return game.hasPlayer(function (target) {
                                            return target != player && target.hasZhuSkill('yin_ruilve', player) && !target.hasSkill('ruilve3');
                                        });
                                    },
                                    filterCard(card) {
                                        if (!get.tag(card, 'damage')) return false;
                                        var type = get.type(card);
                                        return type == 'basic' || type == 'trick';
                                    },
                                    log: false,
                                    visible: true,
                                    filterTarget(card, player, target) {
                                        return target != player && target.hasZhuSkill('yin_ruilve', player) && !target.hasSkill('ruilve3');
                                    },
                                    content() {
                                        target.gain(cards, player, 'giveAuto');
                                        target.addTempSkill('ruilve3', 'phaseUseEnd');
                                    },
                                    ai: {
                                        expose: 0.3,
                                        order: 1,
                                        result: {
                                            target: 5,
                                        },
                                    },
                                },
                            },
                        },
                        yin_tairan: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return player.hp < player.maxHp || player.countCards('h') < player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.addSkill('yin_tairan_2');
                                if (!player.storage.yin_tairan_2) player.storage.yin_tairan_2 = 0;
                                var num = player.maxHp - player.hp;
                                if (num > 0) {
                                    player.storage.yin_tairan_2 += num;
                                    player.recover(num);
                                }
                                ('step 1');
                                if (player.countCards('h') < player.maxHp) player.drawTo(player.maxHp).gaintag = ['tairan'];
                            },
                            subSkill: {
                                2: {
                                    mod: {
                                        aiValue(player, card, num) {
                                            if (card.hasGaintag && card.hasGaintag('tairan')) return num / 10;
                                        },
                                    },
                                    audio: 'yin_tairan',
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        var map = player.storage.yin_tairan_2;
                                        if (map > 0) player.loseHp(map);
                                        var hs = player.getCards('h', function (card) {
                                            return card.hasGaintag('tairan');
                                        });
                                        if (hs.length) player.discard(hs);
                                        player.removeSkill('yin_tairan_2');
                                    },
                                },
                            },
                        },
                        yin_qianjie: {
                            audio: 'ext:阴包武将/audio:2',
                            forced: true,
                        },
                        yin_jueyan: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countDisabled() < 5;
                            },
                            content() {
                                'step 0';
                                event.num = 100;
                                player.chooseToDisable(true).set('ai', function (event, player, list) {
                                    if (list.includes('equip2')) return 'equip2';
                                    if (
                                        list.includes('equip1') &&
                                        player.countCards('h', function (card) {
                                            return card.name == 'sha' && player.hasUseTarget(card);
                                        }) -
                                        player.getCardUsable('sha') >
                                        1
                                    )
                                        return 'equip1';
                                    if (
                                        list.includes('equip5') &&
                                        player.countCards('h', function (card) {
                                            return get.type2(card, player) == 'trick' && player.hasUseTarget(card);
                                        }) > 1
                                    )
                                        return 'equip5';
                                });
                                ('step 1');
                                player.chooseTarget(get.prompt('yin_jueyan'), '决堰:对一名角色砸100个蛋', true).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.getHistory('custom').push({ yin_jueyan: true });
                                    event.target = result.targets[0];
                                }
                                ('step 3');
                                player.throwEmotion(event.target, 'egg');
                                if (game.getExtensionConfig('阴包武将', 'throwEgg', true)) event.target.throwEmotion(player, 'egg');
                                event.num--;
                                ('step 4');
                                if (event.num > 0) event.goto(3);
                            },
                            ai: {
                                order: 13,
                                result: {
                                    player(player) {
                                        if (
                                            player.getHistory('custom', function (evt) {
                                                return evt.yin_jueyan == true;
                                            }).length
                                        )
                                            return -100;
                                        return 100;
                                    },
                                },
                            },
                        },
                        yin_poshi: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'yellow');
                                        player.throwEmotion(current, 'egg');
                                    }
                                });
                                if (game.getExtensionConfig('阴包武将', 'throwEgg', true)) {
                                    game.countPlayer(function (current) {
                                        if (current != player) {
                                            current.throwEmotion(player, 'egg');
                                        }
                                    });
                                }
                            },
                        },
                        yin_zhenlue: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            audio: 'ext:阴包武将/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (lib.inpile.includes(name) && name != 'wuxie') return true;
                            },
                            filter(event, player) {
                                if (event.responded || event.yin_zhenlue) return false;
                                for (var i of lib.inpile) {
                                    if (event.filterCard && event.filterCard({ name: i }, player, event) && i != 'wuxie') return true;
                                }
                                return false;
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                var evt = event.getParent(2);
                                evt.set('yin_zhenlue', true);
                                var list1 = [],
                                    list2 = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var type = get.type(lib.inpile[i]);
                                    if (type == 'basic') {
                                        if (evt.filterCard && evt.filterCard({ name: lib.inpile[i] }, player, evt)) list1.push(['基本', '', lib.inpile[i]]);
                                    } else if (type == 'trick') {
                                        if (evt.filterCard && evt.filterCard({ name: lib.inpile[i] }, player, evt)) list2.push(['锦囊', '', lib.inpile[i]]);
                                    }
                                }
                                player
                                    .chooseButton([get.prompt('yin_zhenlue'), '请选择要使用的牌', [list1.concat(list2), 'vcard']], true)
                                    .set('filterButton', function (button) {
                                        return evt.filterCard({ name: button.link[2] }, player, evt);
                                    })
                                    .set('ai', function (button) {
                                        var card = button.link[2];
                                        if (card == 'wuzhong') return -9;
                                        var val = player.getUseValue(card);
                                        return val;
                                    });
                                ('step 1');
                                if (result.links?.length) {
                                    event.Q = result.links[0][2];
                                    if (player != game.me) {
                                        var card = get.cardPile(function (card) {
                                            return get.color(card) == 'black';
                                        });
                                        if (card) ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    }
                                    player.judge('yin_zhenlue', function (card) {
                                        if (get.color(card) == 'black') return 1.5;
                                        return -0.5;
                                    }).judge2 = function (result) {
                                        return result.bool;
                                    };
                                }
                                ('step 2');
                                var evt = event.getParent(2);
                                if (result.judge > 0) {
                                    var name = event.Q,
                                        aozhan = player.hasSkill('aozhan') && name == 'tao';
                                    if (aozhan) {
                                        name = evt.filterCard(
                                            {
                                                name: 'sha',
                                                cards: [card],
                                            },
                                            evt.player,
                                            evt
                                        )
                                            ? 'sha'
                                            : 'shan';
                                    }
                                    if (evt.name == 'chooseToUse') {
                                        game.broadcastAll(function (name) {
                                            lib.skill.yin_zhenlue_backup.viewAs = { name: name, cards: [result.card] };
                                            lib.skill.yin_zhenlue_backup.prompt = '选择' + get.translation(result.card) + '的目标';
                                        }, name);
                                        evt.set('_backupevent', 'yin_zhenlue_backup');
                                        evt.backup('yin_zhenlue_backup');
                                    } else {
                                        evt.result.card = { name: name };
                                        if (aozhan) evt.result.card.name = name;
                                        evt.result.cards = [result.card];
                                        evt.redo();
                                        return;
                                    }
                                }
                                evt.goto(0);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                                order: 12,
                                fireAttack: true,
                                save: true,
                                respondShan: true,
                                respondSha: true,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        yin_zhenlue_backup: {
                            sourceSkill: 'yin_zhenlue',
                            precontent() {
                                var name = event.result.card.name;
                                event.result.cards = event.result.card.cards;
                                event.result.card = event.result.cards[0];
                                event.result.card.name = name;
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                        },
                        yin_jianshu: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { color: 'black' }) > 0;
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                if (ui.selected.targets.length) {
                                    return ui.selected.targets[0] != target && !ui.selected.targets[0].hasSkillTag('noCompareSource') && target.countCards('h') && !target.hasSkillTag('noCompareTarget');
                                }
                                return true;
                            },
                            filterCard: {
                                color: 'black',
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            check(card) {
                                if (_status.event.player.hp == 1) return 8 - get.value(card);
                                return 6 - get.value(card);
                            },
                            selectTarget: 2,
                            multitarget: true,
                            content() {
                                'step 0';
                                targets[0].gain(cards, player, 'give');
                                ('step 1');
                                targets[0].chooseToCompare(targets[1]);
                                ('step 2');
                                if (result.bool) {
                                    targets[0].chooseToDiscard('he', 2, true);
                                    targets[1].loseHp();
                                } else if (result.tie) {
                                    targets[0].loseHp();
                                    targets[1].loseHp();
                                } else {
                                    targets[1].chooseToDiscard('he', 2, true);
                                    targets[0].loseHp();
                                }
                            },
                            ai: {
                                expose: 0.4,
                                order: 4,
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown()) return 0;
                                        if (ui.selected.targets.length) return -1;
                                        return -0.5;
                                    },
                                },
                            },
                        },
                        yin_yongdi: {
                            audio: 'yongdi',
                            limited: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                if (player.storage.yin_yongdi) return false;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('songwei');
                                    })
                                )
                                    return false;
                                return game.hasPlayer(function (current) {
                                    return current.hasSex('male');
                                });
                            },
                            init(player) {
                                player.storage.yin_yongdi = false;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('yin_yongdi'), function (card, player, target) {
                                        return (target.hasSex('male') || target.name == 'key_yuri') && target != player;
                                    })
                                    .set('ai', function (target) {
                                        if (!_status.event.goon) return 0;
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (att <= 1) return 0;
                                        var mode = get.mode();
                                        if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four')) {
                                            if (target.name && lib.character[target.name]) {
                                                for (var i = 0; i < lib.character[target.name][3].length; i++) {
                                                    if (lib.skill[lib.character[target.name][3][i]].zhuSkill) {
                                                        return att * 2;
                                                    }
                                                }
                                            }
                                        }
                                        return att;
                                    })
                                    .set('goon', !player.hasUnknown());
                                ('step 1');
                                if (result.bool) {
                                    player.awakenSkill('yin_yongdi');
                                    player.storage.yin_yongdi = true;
                                    var target = result.targets[0];
                                    target.gainMaxHp(true);
                                    target.recover();
                                    target.addSkillLog('songwei');
                                    var mode = get.mode();
                                    if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four')) {
                                        if (target.name && lib.character[target.name]) {
                                            var skills = lib.character[target.name][3];
                                            target.storage.zhuSkill_yongdi = ['songwei'];
                                            for (var i = 0; i < skills.length; i++) {
                                                var info = lib.skill[skills[i]];
                                                if (info.zhuSkill) {
                                                    target.storage.zhuSkill_yongdi.push(skills[i]);
                                                    if (info.init) {
                                                        info.init(target);
                                                    }
                                                    if (info.init2) {
                                                        info.init2(target);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        yin_xingluan: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            init(player) {
                                player.storage.yin_xingluan_suit = [];
                                player.storage.yin_xingluan_number = [];
                            },
                            filter(event, player) {
                                if (player.storage.yin_xingluan_suit.length > 3 || player.storage.yin_xingluan_number > 12) return false;
                                return true;
                            },
                            forced: true,
                            mark: true,
                            usable: 4,
                            intro: {
                                content(storage, player) {
                                    var number = player.storage.yin_xingluan_number,
                                        suit = player.storage.yin_xingluan_suit,
                                        list1 = [],
                                        list2 = [];
                                    if (!number.length || !suit.length) return '本回合未发动过';
                                    number.sort(function (a, b) {
                                        return a - b;
                                    });
                                    for (var i = 0; i < number.length; i++) {
                                        var num = number[i];
                                        if (num == 1) num = 'A';
                                        if (num == 11) num = 'J';
                                        if (num == 12) num = 'Q';
                                        if (num == 13) num = 'K';
                                        list1.add(num);
                                    }
                                    for (var i = 0; i < suit.length; i++) {
                                        if (suit[i] == 'heart' || suit[i] == 'diamond') list2.add('<span class=firetext>' + get.translation(suit[i]) + '</span>');
                                        else list2.add(get.translation(suit[i]));
                                    }
                                    str = '点数:' + list1 + '<br>花色:' + list2 + '';
                                    return str;
                                },
                            },
                            async content(event, trigger, player) {
                                var list = [];
                                for (var i = 1; i < 14; i++) {
                                    list.add(i);
                                }
                                const result = await player
                                    .chooseButton(['选择一个花色', [['spade', 'heart', 'club', 'diamond'], 'tdnodes']])
                                    .set('ai', () => Math.random())
                                    .forResult();
                                const result1 = await player
                                    .chooseButton(['选择一个点数', [list, 'tdnodes']])
                                    .set('ai', () => Math.random())
                                    .forResult();
                                if (result.bool && result1.bool) {
                                    var number = result1.links[0],
                                        suit = result.links[0];
                                    var card = get.cardPile2((card) => card.number == number && card.suit == suit);
                                    if (card) player.gain(card, 'gain2');
                                }
                            }, //QQQ
                            group: 'yin_xingluan_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.yin_xingluan_suit = [];
                                        player.storage.yin_xingluan_number = [];
                                    },
                                },
                            },
                        },
                        yin_buyi: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (event.type == 'wuxie') return false;
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.countCards('e');
                                    })
                                ) {
                                    return false;
                                }
                                for (var i of lib.inpile) {
                                    if (get.type(i) != 'basic') continue;
                                    var card = { name: i };
                                    if (event.filterCard(card, player, event)) return true;
                                    if (i == 'sha') {
                                        for (var j of lib.inpile_nature) {
                                            card.nature = j;
                                            if (event.filterCard(card, player, event)) return true;
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
                                        if (event.filterCard(card, player, event)) list.push(['基本', '', i]);
                                        if (i == 'sha') {
                                            for (var j of lib.inpile_nature) {
                                                card.nature = j;
                                                if (event.filterCard(card, player, event)) list.push(['基本', '', i, j]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('补益', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (card.name == 'jiu') return 0;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        if (card.name == 'sha') {
                                            var eff = player.getUseValue(card);
                                            if (eff > 0) return 2.9 + eff / 10;
                                            return 0;
                                        } else if (card.name == 'tao' || card.name == 'shan') {
                                            return 4;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        selectCard: -1,
                                        precontent() {
                                            'step 0';
                                            player
                                                .chooseTarget(
                                                    '选择两名角色交换装备区内的牌',
                                                    2,
                                                    function (card, player, target) {
                                                        if (target.isMin()) return false;
                                                        if (ui.selected.targets.length == 0) return true;
                                                        if (ui.selected.targets[0].countCards('e') == 0 && target.countCards('e') == 0) return false;
                                                        return true;
                                                    },
                                                    true
                                                )
                                                .set('ai', function (target) {
                                                    return get.attitude(player, target) * Math.sqrt(target.countCards('h') + 1);
                                                });
                                            ('step 1');
                                            if (result.bool) {
                                                result.targets[0].swapEquip(result.targets[1]);
                                            } else event.finish();
                                            ('step 2');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择【' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '】的目标';
                                },
                            },
                            ai: {
                                order: 12,
                                fireAttack: true,
                                save: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    return game.hasPlayer(function (current) {
                                        return current.countCards('e');
                                    });
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.type == 'dying') {
                                            return get.attitude(player, _status.event.dying);
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        yin_shiwu: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            usable: 3,
                            filter(event, player) {
                                if (player.hasSkill('yin_shiwu_ed')) return false;
                                return true;
                            },
                            filterCard: true,
                            position: 'he',
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('yin_shiwu_ed');
                                player.addTempSkill('yin_shiwu_damage');
                                ('step 1');
                                var card = get.cards()[0];
                                event.card = card;
                                player.showCards(card);
                                if (get.subtype(card) != 'equip1') {
                                    player.$throw(event.card);
                                    game.cardsDiscard(event.card);
                                    event.goto(1);
                                }
                                ('step 2');
                                player.equip(event.card);
                                event.card_sha = [];
                                event.card_shan = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name == 'lose') {
                                        if (evt.position == ui.discardPile) {
                                            for (var i of evt.cards) {
                                                if (i.name == 'sha') event.card_sha.add(i);
                                                if (i.name == 'shan') event.card_shan.add(i);
                                            }
                                        }
                                    } else {
                                        if (evt.name == 'cardsDiscard') {
                                            for (var i of evt.cards) {
                                                if (i.name == 'sha') event.card_sha.add(i);
                                                if (i.name == 'shan') event.card_shan.add(i);
                                            }
                                        }
                                    }
                                });
                                if (!event.card_sha.length && !event.card_shan.length) event.goto(5);
                                ('step 3');
                                var list = [];
                                if (event.card_sha.length) list.push(['基本', '', 'sha']);
                                if (event.card_shan.length) list.push(['基本', '', 'shan']);
                                player.chooseButton([get.prompt('yin_shiwu'), '请选择要当作无距离和次数限制【杀】使用的牌', [list, 'vcard']]).set('ai', function (button) {
                                    if (button.link[2] == 'sha') return 999;
                                    return 99;
                                });
                                ('step 4');
                                if (result.bool) {
                                    if (result.links[0][2] == 'sha') event.cards = event.card_sha;
                                    else event.cards = event.card_shan;
                                    player.gain(event.cards);
                                    player.addTempSkill('yin_shiwu_sha');
                                    player.addTempSkill('yin_shiwu_miss');
                                    player.chooseUseTarget(get.prompt('yin_shiwu'), '将' + get.translation(event.cards) + '当做【杀】使用', 'sha', event.cards, true, 'nodistance').set('addCount', false);
                                }
                                ('step 5');
                                if (player.hasSkill('yin_shiwu_damage')) {
                                    var e1 = player.getEquip(1);
                                    if (e1) player.discard(e1, 'notBySelf');
                                    player.removeSkill('yin_shiwu_ed');
                                }
                            },
                            subSkill: {
                                ed: {},
                                sha: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    filter(event, player) {
                                        return event.card.name == 'sha';
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        trigger.card.yin_shiwu = true;
                                        player.removeSkill('yin_shiwu_sha');
                                    },
                                },
                                miss: {
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    filter(event, player) {
                                        return event.card.yin_shiwu == true;
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        trigger.target.gain(trigger.cards, 'gain2');
                                        player.removeSkill('yin_shiwu_miss');
                                    },
                                },
                                damage: {
                                    trigger: {
                                        source: 'damage',
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        player.removeSkill('yin_shiwu_damage');
                                    },
                                },
                            },
                        },
                        yin_xiandeng: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: ['phaseDrawBegin', 'phaseUseBegin'],
                            },
                            round: 1,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.name == 'phaseDraw') return player.countCards('he', { type: 'basic' });
                                if (event.name == 'phaseUse') return player.countCards('he', { type: 'equip' });
                                return false;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                                if (event.name == 'phaseDraw') return player.countCards('he', { type: 'basic' }) <= 3;
                                if (event.name == 'phaseUse') return player.countCards('he', { type: 'equip' }) <= 3;
                                return false;
                            },
                            content() {
                                if (trigger.name == 'phaseDraw') {
                                    var hs = player.getCards('he', { type: 'basic' });
                                }
                                if (trigger.name == 'phaseUse') {
                                    var hs = player.getCards('he', { type: 'equip' });
                                }
                                if (hs.length) player.discard(hs);
                                trigger.player = player;
                                player.chooseUseTarget({ name: 'wanjian' }, get.prompt('yin_xiandeng'), '视为使用一张【万箭齐发】', true);
                            },
                        },
                        yin_jiaozi: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'useCardToPlayered') return player != event.target;
                                if (event.name == 'useCardToTargeted') return player != event.player;
                                return true;
                            },
                            content() {
                                player.throwEmotion(trigger.target, 'jiaozi');
                                trigger.target.damage();
                            },
                        },
                        yin_fenyin: {},
                        yin_fuzhu: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.hasSex('male');
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0 && get.effect(event.player, { name: 'sha' }, player, player) > 0;
                            },
                            logTarget: 'player',
                            onWash() {
                                _status.event.getParent('yin_fuzhu').washed = false;
                                return 'remove';
                            },
                            content() {
                                'step 0';
                                event.washed = false;
                                lib.onwash.push(lib.skill.fuzhu.onWash);
                                ('step 1');
                                var card = get.cardPile2(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) {
                                    card.remove();
                                    game.updateRoundNumber();
                                    player.useCard(card, trigger.player, false);
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (!event.washed && trigger.player.isAlive()) event.goto(1);
                                ('step 3');
                                lib.onwash.remove(lib.skill.yin_fuzhu.onWash);
                                var cards = get.cards(ui.cardPile.childElementCount + 1);
                                for (var i = 0; i < cards.length; i++) {
                                    ui.cardPile.insertBefore(cards[i], ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
                                }
                                game.updateRoundNumber();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        yin_yindi: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.hp > 0;
                            },
                            content() {
                                'step 0';
                                event.count = target.hp;
                                ('step 1');
                                player.useCard({ name: 'sha' }, target);
                                event.count--;
                                ('step 2');
                                if (event.count > 0 && target.isAlive()) event.goto(1);
                                else {
                                    if (target.isAlive()) {
                                        target.recover();
                                        game.playAudio('../extension/阴包武将/audio/yin_yindi_damage.mp3');
                                        target.$die();
                                        if (target.countMark('yin_yindi')) {
                                            target.addMark('yin_yindi', 1);
                                            event.finish();
                                        } else {
                                            event.goto(3);
                                        }
                                    } else {
                                        event.finish();
                                    }
                                }
                                ('step 3');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == player.group && (lib.character[name][0] == 'female' || lib.character[name][0] == 'double')) list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != player.group || (lib.character[i][0] != 'female' && lib.character[i][0] != 'double');
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == player.group && (info[0] == 'female' || info[0] == 'double');
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list = list.randomGets(2);
                                var name = target.name1;
                                target.reinit(name, list[0], false);
                                target.changeGroup(player.group);
                                if (_status.characterlist) {
                                    _status.characterlist.add(name);
                                    _status.characterlist.remove(list[0]);
                                }
                                ('step 4');
                                if (!target.a) {
                                    const current = target;
                                    let node = ui.create.div('', '');
                                    node.style.zIndex = 80;
                                    node.style.position = 'relative';
                                    node.style.top = 'calc(50% - 90px)';
                                    node.style.height = 'calc(50% - 90px)';
                                    node.style.width = 'calc(50% - 60px)';
                                    node.style.left = 'calc(50% - 60px)';
                                    current.appendChild(node);
                                    let img = document.createElement('img');
                                    img.style.height = '180px';
                                    img.style.width = '120px';
                                    img.src = 'extension/阴包武将/正/正.png';
                                    img.style.cssText += 'pointer-events:none';
                                    node.appendChild(img);
                                    current.a = node;
                                }
                                //target.node.name.style.color='#f4a6f3';
                                target.addMark('yin_yindi', 1);
                            },
                            marktext: '星怒',
                            intro: {
                                name: '星怒',
                                content(storage, player) {
                                    var str = '';
                                    var num = player.countMark('yin_yindi');
                                    var currents = game.filterPlayer(function (current) {
                                        return current != player && current.hasSkill('yin_yunu');
                                    });
                                    for (var i = 0; i < Math.floor(num / 5); i++) {
                                        str += '<img src="extension/阴包武将/正/5.png" width="25" height="25">';
                                    }
                                    if (num % 5 != 0) str += '<img src="extension/阴包武将/正/' + (num % 5) + '.png" width="25" height="25">';
                                    var getName = function (target) {
                                        if (target._tempTranslate) return target._tempTranslate;
                                        var name = target.name;
                                        if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
                                        return get.translation(name);
                                    };
                                    var getSlimName = function (player) {
                                        var str2 = getName(player);
                                        if (!str2) return '';
                                        if (str2.indexOf('§') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('♋') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('▼') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('阴') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('♦️️') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('☼') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('☀') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('J') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('☆') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('界') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('谋') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('星') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('族') == 0) {
                                            str2 = str2.slice(1);
                                        }
                                        if (str2.indexOf('SP') == 0) {
                                            str2 = str2.slice(2);
                                        }
                                        if (str2.indexOf('TW') == 0) {
                                            str2 = str2.slice(2);
                                        }
                                        if (str2.indexOf('OL') == 0) {
                                            str2 = str2.slice(2);
                                        }
                                        if (str2.indexOf('手杀') == 0) {
                                            str2 = str2.slice(2);
                                        }
                                        return str2;
                                    };
                                    var name = getSlimName(player);
                                    if ([-1, 1].randomGet() > 0) str += '<br>' + getSlimName(currents[0]) + '主人在上,星怒' + name + '给您请安了';
                                    else str += '<br>呜呜,' + name[0] + '奴不想离开' + getSlimName(currents[0]) + '主人';
                                    return str;
                                },
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) - 0.1;
                                },
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        if (!player.countCards('hs', { name: ['tao', 'jiu'] }) && target.countCards('hs', { name: ['tao', 'jiu', 'shan'] })) {
                                            if (att > 0) return 0;
                                            else return att;
                                        }
                                        if (!target.countMark('yin_yindi') && (player.countCards('hs', { name: ['tao', 'jiu'] }) || target.countCards('hs', { name: ['tao', 'jiu', 'shan'] }))) return att;
                                        if (target.countMark('yin_yindi')) return 1;
                                        return -target.hp;
                                    },
                                },
                            },
                        },
                        yin_yunu: {
                            derivation: 'yin_nuli',
                            audio: 'ext:阴包武将/audio:2',
                            global: 'yin_nuli',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.countMark('yin_yindi');
                            },
                            content() {
                                player.draw();
                            },
                            group: 'yin_yunu_cunzhi',
                            subSkill: {
                                cunzhi: {
                                    audio: 'yin_yunu',
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    check(event, player) {
                                        if (get.damageEffect(event.player, player, player) < 0) return true;
                                        return false;
                                    },
                                    filter(event, player) {
                                        return event.player.countMark('yin_yindi');
                                    },
                                    content() {
                                        player.draw();
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        yin_nuli: {
                            audio: 'ext:阴包武将/audio:1',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            usable: 1,
                            filter(event, player) {
                                if (!event.isFirstTarget || (event.card.storage && event.card.storage.yin_nuli)) return false;
                                var type = get.type(event.card);
                                if (type != 'basic' && type != 'trick') return false;
                                return (
                                    player.countMark('yin_yindi') &&
                                    player.countCards('he') > 0 &&
                                    game.hasPlayer(function (current) {
                                        return current != player && current.hasSkill('yin_yunu');
                                    })
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var targets = game.filterPlayer(function (current) {
                                    return current != player && current.hasSkill('yin_yunu');
                                });
                                if (targets.length == 1) {
                                    event.target = targets[0];
                                    player.chooseCard('he', get.prompt('yin_nuli'), '是否交给' + get.translation(targets) + '一张牌,令' + get.translation(trigger.card) + '额外结算' + get.translation(player.countMark('yin_yindi')) + '次？');
                                } else
                                    player.chooseCardTarget({
                                        prompt: get.prompt('yin_nuli'),
                                        prompt2: '是否交给' + get.translation(targets) + '中的一名角色一张牌,令' + get.translation(trigger.card) + '额外结算' + get.translation(player.countMark('yin_yindi')) + '次？',
                                        filterCard: true,
                                        position: 'he',
                                        targets: targets,
                                        filterTarget(card, player, target) {
                                            return _status.event.targets.includes(target);
                                        },
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (!target) target = result.targets[0];
                                    player.line(target);
                                    player.give(result.cards, target);
                                    player.addTempSkill('yin_nuli_effect');
                                    var evt = trigger.getParent('phaseUse');
                                    var num = player.countMark('yin_yindi');
                                    trigger.parent.yin_nuli_effect = [
                                        {
                                            name: trigger.card.name,
                                            nature: trigger.card.nature,
                                            storage: { yin_nuli: true },
                                        },
                                        num,
                                    ];
                                }
                            },
                            subSkill: {
                                effect: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    audio: 'yin_nuli',
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.yin_nuli_effect != undefined;
                                    },
                                    content() {
                                        'step 0';
                                        event.card = trigger.yin_nuli_effect[0];
                                        event.count = trigger.yin_nuli_effect[1];
                                        ('step 1');
                                        event.count--;
                                        for (var i of trigger.targets) {
                                            if (!i.isIn() || !player.canUse(card, i, false)) return;
                                        }
                                        if (trigger.addedTarget && !trigger.addedTarget.isIn()) return;
                                        if (trigger.addedTargets && trigger.addedTargetfs.length) {
                                            for (var i of trigger.addedTargets) {
                                                if (!i.isIn()) return;
                                            }
                                        }
                                        var next = player.useCard(get.copy(card), trigger.targets, false);
                                        if (trigger.addedTarget) next.addedTarget = trigger.addedTarget;
                                        if (trigger.addedTargets && trigger.addedTargets.length) next.addedTargets = trigger.addedTargets.slice(0);
                                        if (event.count > 0) event.redo();
                                    },
                                },
                            },
                        },
                        yin_nafei: {
                            audio: 'ext:阴包武将/audio:1',
                            init(player) {
                                setInterval(
                                    function (player) {
                                        if (get.mode() == 'identity' && game.zhu == player) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != player && current.sex != player.sex && current.group == player.group && current.identity != 'zhong';
                                                })
                                            ) {
                                                game.hasPlayer(function (current) {
                                                    if (current != player && current.sex != player.sex && current.group == player.group && current.identity != 'zhong') {
                                                        player.line(current);
                                                        game.log(current, '的身份改为', '#y忠臣');
                                                        current.identity = 'zhong';
                                                        current.showIdentity();
                                                    }
                                                });
                                                game.checkResult();
                                            }
                                        }
                                    },
                                    1000,
                                    player
                                );
                            },
                            zhuSkill: true,
                            charlotte: true,
                            _priority: -1,
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    get.mode() == 'identity' &&
                                    game.zhu == player &&
                                    game.hasPlayer(function (current) {
                                        return current != player && current.sex != player.sex && current.group == player.group && current.identity != 'zhong';
                                    })
                                );
                            },
                            content() {
                                game.hasPlayer(function (current) {
                                    if (current != player && current.sex != player.sex && current.group == player.group && current.identity != 'zhong') {
                                        player.line(current);
                                        game.log(current, '的身份改为', '#y忠臣');
                                        current.identity = 'zhong';
                                        current.showIdentity();
                                    }
                                });
                                game.checkResult();
                            },
                        },
                        yin_guishu: {
                            zhuanhuanji: true,
                            mark(storage, player) {
                                if (!player.storage.yin_tianzhao_guishu) return true;
                                else return false;
                            },
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.yin_guishu == true) return '当你不因自身技能而即将执行扣减体力的操作时,你可以进行一次判定,若结果为黑色,取消此次操作.反之,你可以获得此次的判定牌,或失去1点体力并转换你的一个转换技.';
                                    return '当你不因自身技能而即将执行失去牌的操作时,你可以进行一次判定,若结果为黑色,取消此次操作.反之,你可以获得此次的判定牌,或失去1点体力并转换你的一个转换技.';
                                },
                            },
                            init(player) {
                                player.storage.yin_guishu = false;
                                player.storage.yin_tianzhao_guishu = false;
                            },
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: ['loseBefore', 'damageBefore', 'loseHpBefore'],
                            },
                            frequent(event, player) {
                                var evt = event;
                                while (evt.name != 'phase') {
                                    if (player.hasSkill(evt.name)) return false;
                                    else evt = evt.parent;
                                }
                                if (event.name == 'lose' && event.parent.name == 'useCard') {
                                    if (get.type(event.parent.card) == 'equip' || get.type(event.parent.card) == 'delay') return false;
                                }
                                return true;
                            },
                            check(event, player) {
                                var evt = event;
                                while (evt.name != 'phase') {
                                    if (player.hasSkill(evt.name)) return false;
                                    else evt = evt.parent;
                                }
                                if (event.name == 'lose' && event.parent.name == 'useCard') {
                                    if (get.type(event.parent.card) == 'equip' || get.type(event.parent.card) == 'delay') return false;
                                }
                                return true;
                            },
                            filter(event, player) {
                                var evt = event;
                                while (evt.name != 'phase') {
                                    if (player.hasSkill(evt.name)) return false;
                                    else evt = evt.parent;
                                }
                                if (!player.storage.yin_tianzhao_guishu) {
                                    if (player.storage.yin_guishu && event.name == 'lose') return false;
                                    if (!player.storage.yin_guishu && event.name != 'lose') return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                if (!player.storage.yin_tianzhao_guishu) player.changeZhuanhuanji('yin_guishu');
                                ('step 1');
                                player.judge(function (card) {
                                    if (get.color(card) == 'black') return 1.5;
                                    return -1.5;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 2');
                                if (result.bool) {
                                    trigger.cancel();
                                    event.finish();
                                } else {
                                    event.card = result.card;
                                    event.skillList = [];
                                    var skills = player.getOriginalSkills();
                                    for (var i = 0; i < skills.length; i++) {
                                        if (lib.skill[skills[i]].zhuanhuanji) {
                                            event.skillList.push(skills[i]);
                                        }
                                    }
                                    if (event.skillList.length) {
                                        player
                                            .chooseControl('拿牌', '转换', 'cancel2')
                                            .set('choiceList', ['获得' + get.translation(event.card), '失去1点体力并转换一个转换技'])
                                            .set('prompt', '鬼术:你可以……')
                                            .set('ai', function () {
                                                if (event.card.name == 'du') return 2;
                                                return 0;
                                            });
                                    } else {
                                        player.gain(event.card, 'gain2');
                                        event.finish();
                                    }
                                }
                                ('step 3');
                                if (result.control != 'cancel2') {
                                    if (result.control == '拿牌') {
                                        player.gain(event.card, 'gain2');
                                        event.finish();
                                    } else {
                                        if (event.skillList.length == 1) {
                                            player.loseHp();
                                            player.changeZhuanhuanji(event.skillList[0]);
                                            game.log(player, '转换了', '#g【' + get.translation(event.skillList[0]) + '】');
                                            event.finish();
                                        } else {
                                            player.chooseControl(event.skillList).set('prompt', '请选择你要转换的转换技');
                                        }
                                    }
                                } else event.finish();
                                ('step 4');
                                if (result.control) {
                                    player.loseHp();
                                    player.changeZhuanhuanji(result.control);
                                    game.log(player, '转换了', '#g【' + get.translation(result.control) + '】');
                                }
                            },
                        },
                        yin_tianzhao: {
                            derivation: 'yin_tianzhao_guidao',
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player.discard(cards);
                                player.awakenSkill('yin_tianzhao');
                                player.storage.yin_tianzhao = true;
                                player.loseMaxHp();
                                ('step 1');
                                game.hasPlayer(function (current) {
                                    if (current != player) {
                                        current.turnOver();
                                    }
                                });
                                ('step 2');
                                player.storage.yin_tianzhao_guishu = true;
                                player.storage.yin_tianzhao_huanhuo = true;
                                var skills = player.getOriginalSkills();
                                for (var i = 0; i < skills.length; i++) {
                                    if (skills[i] != 'yin_tianzhao') {
                                        var info = lib.translate[skills[i] + '_info'];
                                        if (info[2] == '技' && info[0] != '锁' && info[1] != '定') lib.translate[skills[i] + '_info'] = info.slice(4);
                                        if (lib.skill[skills[i]].zhuanhuanji) {
                                            lib.skill[skills[i]].zhuanhuanji = false;
                                            player.unmarkSkill(skills[i]);
                                        }
                                        if (lib.skill[skills[i]].dutySkill) {
                                            lib.skill[skills[i]].dutySkill = false;
                                        }
                                        if (lib.skill[skills[i]].hiddenSkill) {
                                            lib.skill[skills[i]].hiddenSkill = false;
                                        }
                                        if (lib.skill[skills[i]].limited) {
                                            lib.skill[skills[i]].limited = false;
                                        }
                                        if (lib.skill[skills[i]].zhuSkill) {
                                            if (!player.storage.zhuSkill_yongdi) player.storage.zhuSkill_yongdi = [];
                                            player.storage.zhuSkill_yongdi.push(skills[i]);
                                            lib.skill[skills[i]].zhuSkill = false;
                                            player.addSkill(skills[i]);
                                        }
                                    }
                                }
                                player.addSkill('yin_tianzhao_guidao');
                            },
                            complexCard: true,
                            discard: false,
                            position: 'he',
                            filterCard(card) {
                                var suit = card.suit;
                                for (var i = 0; i < ui.selected.cards.length; i++) {
                                    if (ui.selected.cards[i].suit == suit) return false;
                                }
                                return true;
                            },
                            limited: true,
                            selectCard: 4,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            filter(event, player) {
                                return !player.storage.yin_tianzhao;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            line: 'fire',
                            multitarget: true,
                            multiline: true,
                            selectTarget: -1,
                            ai: {
                                order: 13,
                            },
                        },
                        yin_tianzhao_guidao: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('hes', { color: 'black' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('yin_tianzhao_guidao'), 'hes', function (card) {
                                        if (get.color(card) != 'black') return false;
                                        var player = _status.event.player;
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) {
                                            if (trigger.player != player) return 0;
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return get.attitude(player, current) < 0;
                                                })
                                            ) {
                                                var checkx = lib.skill.xinleiji.judgeCheck(card, true) - lib.skill.xinleiji.judgeCheck(judging);
                                                if (checkx > 0) return checkx;
                                            }
                                            return 0;
                                        }
                                        if (attitude > 0) {
                                            return result;
                                        } else {
                                            return -result;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight', 'yin_tianzhao_guidao', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    var card = result.cards[0];
                                    if (card.suit == 'spade' && card.number > 1 && card.number < 10) player.draw('nodelay');
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        yin_huanhuo: {
                            audio: 'ext:阴包武将/audio:2',
                            zhuSkill: true,
                            global: 'yin_huanhuo_2',
                            subSkill: {
                                2: {
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        if (player.hasSkill('yin_huanhuo') || player.hasSkill('yin_huanhuo_3')) return false;
                                        return (
                                            player.countCards('he', { suit: 'spade' }) &&
                                            game.hasPlayer(function (current) {
                                                return current.hasSkill('yin_huanhuo');
                                            })
                                        );
                                    },
                                    filterCard(card) {
                                        return card.suit == 'spade';
                                    },
                                    check(card) {
                                        return 5 - get.useful(card);
                                    },
                                    content() {
                                        'step 0';
                                        player.loseToDiscardpile(cards);
                                        player.draw();
                                        player.addTempSkill('yin_huanhuo_3', 'phaseUseEnd');
                                        ('step 1');
                                        target.judge('yin_guishu', function (card) {
                                            if (get.color(card) == 'black') return 1.5;
                                            return -1.5;
                                        }).judge2 = function (result) {
                                            return result.bool;
                                        };
                                        ('step 2');
                                        if (result.bool) {
                                            event.finish();
                                        } else {
                                            event.card = result.card;
                                            event.skillList = [];
                                            var skills = target.getOriginalSkills();
                                            for (var i = 0; i < skills.length; i++) {
                                                if (lib.skill[skills[i]].zhuanhuanji) {
                                                    event.skillList.push(skills[i]);
                                                }
                                            }
                                            if (event.skillList.length) {
                                                target
                                                    .chooseControl('拿牌', '转换', 'cancel2')
                                                    .set('choiceList', ['获得' + get.translation(event.card), '失去1点体力并转换一个转换技'])
                                                    .set('prompt', '鬼术:你可以……')
                                                    .set('ai', function () {
                                                        if (event.card.name == 'du') return 2;
                                                        return 0;
                                                    });
                                            } else {
                                                target.gain(event.card, 'gain2');
                                                event.finish();
                                            }
                                        }
                                        ('step 3');
                                        if (result.control != 'cancel2') {
                                            if (result.control == '拿牌') {
                                                target.gain(event.card, 'gain2');
                                                event.finish();
                                            } else {
                                                if (event.skillList.length == 1) {
                                                    target.loseHp();
                                                    target.changeZhuanhuanji(event.skillList[0]);
                                                    game.log(target, '转换了', '#g【' + get.translation(event.skillList[0]) + '】');
                                                    event.finish();
                                                } else {
                                                    target.chooseControl(event.skillList).set('prompt', '请选择你要转换的转换技');
                                                }
                                            }
                                        } else event.finish();
                                        ('step 4');
                                        if (result.control) {
                                            target.loseHp();
                                            target.changeZhuanhuanji(result.control);
                                            game.log(target, '转换了', '#g【' + get.translation(result.control) + '】');
                                        }
                                    },
                                    line: true,
                                    forced: true,
                                    clearTime: true,
                                    lose: false,
                                    log: false,
                                    visible: true,
                                    filterTarget(card, player, target) {
                                        return target != player && target.hasZhuSkill('yin_huanhuo', player);
                                    },
                                    loseTo: 'discardPile',
                                    prompt() {
                                        var player = _status.event.player;
                                        var list = game.filterPlayer(function (current) {
                                            return current.hasSkill('yin_huanhuo');
                                        });
                                        if (list.length == 1) return '重铸一张♠️️牌并令一名' + get.translation(list[0]) + '进行一次〖鬼术〗中的判定';
                                        else return '重铸一张♠️️牌并令' + get.translation(list) + '中的一名进行一次〖鬼术〗中的判定';
                                    },
                                    delay: false,
                                },
                                3: {},
                            },
                        },
                        yin_yiyan: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            zhuanhuanji: true,
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.yin_yiyan == true) return '出牌阶段,你可以弃置一张牌并选择一名其他角色,你与其各选择一项:受到1点火属性伤害或弃置手牌中所有【闪】';
                                    return '出牌阶段,你可以弃置一张牌并选择一名其他角色,你与其各选择一项:横置或弃置手牌中所有【杀】';
                                },
                            },
                            init(player) {
                                player.storage.yin_yiyan = false;
                            },
                            prompt() {
                                var player = _status.event.player;
                                if (player.storage.yin_yiyan == true) return '出牌阶段,你可以弃置一张牌并选择一名其他角色,你与其各选择一项:受到1点火属性伤害或弃置手牌中所有【闪】';
                                return '出牌阶段,你可以弃置一张牌并选择一名其他角色,你与其各选择一项:横置或弃置手牌中所有【杀】';
                            },
                            position: 'he',
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                player.changeZhuanhuanji('yin_yiyan');
                                ('step 1');
                                if (player.storage.yin_yiyan) {
                                    var list = ['横置自己', '弃置手牌中所有【杀】'];
                                    if (!player.countCards('h', { name: 'sha' })) {
                                        event.control1 = '选项一';
                                        event.goto(2);
                                    }
                                } else {
                                    var list = ['受到1点火属性伤害', '弃置手牌中所有【闪】'];
                                    if (!player.countCards('h', { name: 'shan' })) {
                                        event.control1 = '选项一';
                                        event.goto(2);
                                    }
                                }
                                if (!event.control1) {
                                    player
                                        .chooseControl('选项一', '选项二')
                                        .set('choiceList', list)
                                        .set('ai', function () {
                                            return '选项一';
                                        })
                                        .set('prompt', '燚焱:请选择一项执行');
                                }
                                ('step 2');
                                if (result.control) event.control1 = result.control;
                                if (event.control1 == '选项一') {
                                    if (player.storage.yin_yiyan) player.link(true);
                                    else player.damage(1, 'fire');
                                } else {
                                    if (player.storage.yin_yiyan) {
                                        player.discard(
                                            player.getCards('h', function (card) {
                                                return card.name == 'sha';
                                            })
                                        );
                                    } else {
                                        player.discard(
                                            player.getCards('h', function (card) {
                                                return card.name == 'shan';
                                            })
                                        );
                                    }
                                }
                                if (!player.isAlive()) event.finish();
                                ('step 3');
                                if (player.storage.yin_yiyan) {
                                    var list = ['横置自己', '弃置手牌中所有【杀】'];
                                    if (!target.countCards('h', { name: 'sha' })) {
                                        event.control2 = '选项一';
                                        event.goto(4);
                                    }
                                } else {
                                    var list = ['受到1点火属性伤害', '弃置手牌中所有【闪】'];
                                    if (!target.countCards('h', { name: 'shan' })) {
                                        event.control2 = '选项一';
                                        event.goto(4);
                                    }
                                }
                                if (!event.control2) {
                                    target
                                        .chooseControl('选项一', '选项二')
                                        .set('choiceList', list)
                                        .set('ai', function () {
                                            return '选项二';
                                        })
                                        .set('prompt', '燚焱:请选择一项执行');
                                }
                                ('step 4');
                                if (result.control) event.control2 = result.control;
                                if (event.control2 == '选项一') {
                                    if (player.storage.yin_yiyan) target.link(true);
                                    else target.damage(1, 'fire');
                                } else {
                                    if (player.storage.yin_yiyan) {
                                        target.discard(
                                            target.getCards('h', function (card) {
                                                return card.name == 'sha';
                                            })
                                        );
                                    } else {
                                        target.discard(
                                            target.getCards('h', function (card) {
                                                return card.name == 'shan';
                                            })
                                        );
                                    }
                                }
                                ('step 5');
                                if (event.control1 != event.control2) player.draw();
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        yin_dingzhi: {
                            audio: 'ext:阴包武将/audio:2',
                            forced: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return event.player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h') <= 3) player.drawTo(3);
                                else player.chooseToDiscard(player.countCards('h') - 3, true, 'h');
                                player.draw(3);
                                var hastao = player.countCards('h', 'tao');
                                player
                                    .chooseToDiscard(3, true, 'he')
                                    .set('ai', function (card) {
                                        var hastao = _status.event.hastao;
                                        var type = get.type(card);
                                        for (var i = 0; i < ui.selected.cards.length; i++) {
                                            if (get.type(ui.selected.cards[i]) == type) {
                                                return -4 - get.value(card);
                                            }
                                        }
                                        return -get.value(card);
                                    })
                                    .set('hastao', hastao);
                                ('step 1');
                                if (result.cards?.length) {
                                    var type = [];
                                    for (var i = 0; i < result.cards.length; i++) {
                                        type.add(get.type(result.cards[i]));
                                    }
                                    if (type.length == result.cards.length) {
                                        player.recover(3 - player.hp);
                                    }
                                }
                            },
                        },
                        yin_qianxin: {
                            audio: 'ext:阴包武将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            position: 'he',
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                'step 0';
                                if (!target.storage.yin_qianxin_xing) target.storage.yin_qianxin_xing = [];
                                target.storage.yin_qianxin_source = player;
                                for (var i = 0; i < cards.length; i++) {
                                    target.storage.yin_qianxin_xing.add(cards[i]);
                                }
                                ('step 1');
                                player.next.addToExpansion(cards, player, 'give').gaintag.add('yin_qianxin_xing');
                            },
                            group: 'yin_qianxin_xing',
                            global: 'yin_qianxin_song',
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                    target(player, target, card) {
                                        var att = get.attitude(player, target);
                                        if (att > 0) return 999;
                                        else return 0;
                                    },
                                },
                            },
                            subSkill: {
                                xing: {
                                    marktext: '信',
                                    intro: {
                                        name: '信',
                                        markcount: 'expansion',
                                        content: 'expansion',
                                    },
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.getExpansions('yin_qianxin_xing').length;
                                    },
                                    content() {
                                        'step 0';
                                        event.cards = [];
                                        var list = trigger.player.getExpansions('yin_qianxin_xing');
                                        for (var i = 0; i < list.length; i++) {
                                            if (trigger.player.storage.yin_qianxin_xing) {
                                                if (trigger.player.storage.yin_qianxin_xing.includes(list[i])) event.cards.add(list[i]);
                                            }
                                        }
                                        ('step 1');
                                        if (event.cards.length) {
                                            trigger.player.gain(event.cards, 'gain2');
                                            trigger.player.storage.yin_qianxin_source.draw(event.cards.length);
                                        }
                                        if (trigger.player == player) {
                                            player.draw(trigger.player.getExpansions('yin_qianxin_xing').length);
                                            player.gain(trigger.player.getExpansions('yin_qianxin_xing'), 'gain2');
                                        }
                                        ('step 2');
                                        if (trigger.player.getExpansions('yin_qianxin_xing').length) {
                                            trigger.player.chooseBool('遣信:是否将<信>转递给你的下家').ai = function (event, player) {
                                                if (get.attitude(trigger.player, player) > 0) return true;
                                                var num = [0, 1].randomGet();
                                                return num < 1 ? true : false;
                                            };
                                        } else {
                                            player.unmarkSkill('yin_qianxin_xing');
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (result.bool) {
                                            trigger.player.next.addToExpansion(trigger.player.getExpansions('yin_qianxin_xing'), trigger.player, 'give').gaintag.add('yin_qianxin_xing');
                                        }
                                    },
                                },
                                song: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.getExpansions('yin_qianxin_xing').length;
                                        },
                                    },
                                },
                            },
                        },
                        yin_zhenxing: {
                            audio: 'ext:阴包武将/audio:2',
                            trigger: {
                                player: ['damageEnd', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.gain = [];
                                event.cards = get.cards(4);
                                player
                                    .chooseButton(['【镇行】:请选择要获得的牌', event.cards], [1, Infinity])
                                    .set('filterButton', function (button) {
                                        var cards = _status.event.cards;
                                        for (var i = 0; i < cards.length; i++) {
                                            if (button.link != cards[i] && cards[i].suit == button.link.suit) return false;
                                        }
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        return get.value(button.link);
                                    })
                                    .set('cards', event.cards);
                                ('step 1');
                                for (var i = event.cards.length - 1; i >= 0; i--) {
                                    if (result.bool && result.links.includes(event.cards[i])) {
                                        event.gain.add(event.cards[i]);
                                    } else {
                                        event.cards[i].fix();
                                        ui.cardPile.insertBefore(event.cards[i], ui.cardPile.childNodes[0]);
                                    }
                                }
                                game.updateRoundNumber();
                                player.gain(event.gain, 'gain2');
                            },
                        },
                    },
                    character: {
                        gai_shensunce: ['male', 'shen', '1/6', ['gai_yingba', 'gaifuhai', 'gai_pinghe'], ['des:字伯符,吴郡富春人.孙坚长子,孙权长兄.东汉末年割据江东一带的军阀,汉末群雄之一,三国时期吴国的奠基者.三国演义中绰号<小霸王>,统一江东.在一次狩猎中为刺客所伤,不久后身亡,年仅二十六岁.其弟孙权接掌孙策势力,并于称帝后,追谥孙策为长沙桓王']],
                        yin_zhugeguo: ['female', 'shu', 3, ['yinxianchen', 'yinpiaomiao', 'yinqixiang'], ['des:传说为诸葛亮的女儿.容貌甚伟,时人异焉.出生时,野外仙气缥缈、白鹤环绕,生来天资聪慧,对道学由衷热爱,成都西南有朝真观,即乘烟观.相传,诸葛果在这里避战乱,最终修成仙道,羽化升天']],
                        yin_lvlingqi: ['female', 'qun', 4, ['yinshenwei', 'yinshenji', 'yinfangtian'], ['des:人物原型为汉末群雄吕布与正妻(演义为严夫人)之女,以继承其父的武勇而自豪']],
                        yin_lingtong: ['male', 'wu', 4, ['xingaixuanfeng', 'xingaiyongjin'], ['des:凌统(189年－217年或237年),字公绩,吴郡馀杭(今浙江杭州市余杭区)人,三国时期吴国名将.凌操之子']],
                        gai_shenzhaoyun: ['male', 'shen', '1/2', ['yinjuejing', 'relonghun', 'yinzhuiji', 'yinbuqu'], ['des:赵云(？－229年),字子龙,常山真定人.身长八尺,姿颜雄伟,汉末三国时期蜀汉名将,与关羽、张飞并称<燕南三士>']],
                        yin_xunyou: ['male', 'wei', 4, ['yinqice', 'jingzhi', 'miaomou'], ['des:字公达,颍川颍阴人.东汉末年曹操的五谋臣之一,荀彧从子,被曹操称为<谋主>.官至尚书令.正始五年被追谥为敬侯']],
                        yin_liubei: ['male', 'shu', '4/5', ['yinliezhu', 'yinyijie', 'yinlihan'], ['des:先主姓刘,讳备,字玄德,涿郡涿县人,汉景帝子中山靖王胜之后也.以仁德治天下']],
                        yin_weiwenzhugezhi: ['male', 'wu', 4, ['yinzhenghai'], ['des:卫温 (？—231年),三国时期东吴将领,曾任将军职.诸葛直(？—231年),三国时期东吴将领.黄龙二年(230年)正月,孙权派卫温、诸葛直带领上万士兵出海寻找夷洲、亶洲,想要俘获那里的民众以充实东吴的人口,陆逊和全琮都谏言反对,孙权不听.230年和卫温一起登上台湾(当时的台湾叫做夷洲),他们是中国历史上记载的最早登陆台湾的人.卫温和诸葛直花费了约一年时间行军,士兵们因为疾病死去了十分之八到十分之九,因为亶洲太过遥远,卫温和诸葛直最终没能到达那里,只带了几千名夷洲的人返回.黄龙三年(231年),孙权认为诸葛直违背诏令,劳财伤民,无功而返,和卫温一同入狱被处死']],
                        yin_zhoutai: ['male', 'wu', 5, ['yinjuefen', 'yinminghu', 'yinniqi'], ['des:字幼平,九江下蔡人,三国时期吴国武将.早年与蒋钦随孙策左右,立过数次战功.孙策讨伐六县山贼时,周泰胆气绝伦,保卫孙权,勇战退敌,身受十二处伤.有诗云:三番救主出重围,忠勇如公世所稀.遍体疮痍犹痛饮,血痕残酒满征衣']],
                        yin_zhangliao: ['male', 'wei', 4, ['yintuxi', 'yinposhi', 'yinduorui'], ['des:字文远,魏雁门马邑人.官至前将军、征东将军、晋阳侯.武功高强,又谋略过人,多次建立奇功,以800人突袭孙权十万大军,皆望风披靡']],
                        yin_caishi: ['female', 'qun', 3, ['yinqieer', 'yinjike'], ['des:原是刘表的小妾,正室死后,成为了刘表的后妻.因刘琮娶了自己的侄女所以对其偏爱有加.刘备客居荆州时险些受其所害.刘表死后为了让刘琮即位不惜献州于曹操']],
                        yin_chendao: ['male', 'shu', 4, ['yinjuexun', 'yinziwang'], ['des:陈到,字叔至,生卒年不详,豫州汝南(今河南驻马店平舆县)人.三国时期蜀汉将领,刘备帐下白毦兵统领,名位常亚于赵云,以忠勇著称.蜀汉建兴年间,任征西将军、永安都督,封亭侯.在任期间去世']],
                        yin_liuxie: ['male', 'qun', '2/3', ['yintianhan', 'yinshizhao'], ['des:字伯和,又字合.汉族,祖籍沛县,生于洛阳.汉灵帝第三子,被董卓迎立为帝.董卓被王允和吕布诛杀后,董卓部将李傕等攻入长安,再次挟持了他,后来逃出长安.公元196年,曹操控制了刘协,并迁都许昌,<挟天子以令诸侯>.公元220年,曹操病死,刘协被曹丕控制,随后被迫禅让于曹丕']],
                        yin_guanlu: ['male', 'wei', 3, ['yinshigua', 'yinxiaoshi', 'yinmingjie'], ['des:管辂(209年－256年),字公明,平原(今山东德州平原县)人.三国时期曹魏术士.年八九岁,便喜仰观星辰.成人后,精通<周易>,善于卜筮、相术,习鸟语,相传每言辄中,出神入化.体性宽大,常以德报怨.正元初,为少府丞.北宋时被追封为平原子.管辂是历史上著名的术士,被后世奉为卜卦观相的祖师']],
                        yin_dingfeng: ['male', 'wu', 4, ['yinduanbing', 'yinfenpo'], ['des:丁奉(？－271年),字承渊.庐江安丰(今安徽省霍邱县)人.三国时期吴国名将.丁奉年少时骁勇善战,先后从属于甘宁、陆逊、潘璋麾下,官至偏将军.太元二年(252年)的东兴之战,丁奉雪中奋短兵大破魏军前屯,迁灭寇将军.吴景帝孙休在位时,丁奉计除权臣孙綝,替孙休夺回皇权,官拜大将军、都护、徐州牧,开始掌握吴国军政大权.孙皓继位后,迁右大司马、左军师.建衡三年(271年),丁奉去世.丁奉一生统兵与北方政权征战,从曹操时代交战到司马炎时代,侍奉了孙权、孙亮、孙休、孙皓四位吴国君主,见证了三国兴衰存亡']],
                        yin_mateng: ['male', 'qun', 4, ['yinliangju', 'yinxiongyi'], ['des:字寿成,扶风茂陵人,东汉末年征西将军,割据西凉一带的军阀,伏波将军马援的后代,官至卫尉,封爵槐里乡侯.因其子马超谋反,而被杀,夷灭三族']],
                        yin_dengzhi: ['male', 'shu', 4, ['yintanquan', 'yinshuaiyan'], ['des:邓芝(178年－251年),字伯苗.义阳郡新野县(今河南新野)人.东汉名将邓禹之后,三国时期蜀汉重臣.邓芝早年曾被预言能位至大将,后被刘备任为郫令,升迁为广汉太守.因任官公廉且有治绩,被征入朝为尚书.刘备逝世后,奉命出使吴国,成功修复两国关系,并深为吴大帝孙权所赏识.建兴六年(228年),丞相诸葛亮策划北伐,命邓芝与大将赵云佯攻郿城,以吸引魏国曹真军主力.建兴十二年(234年),迁前军师、前将军,领兖州刺史,封阳武亭侯,不久督领江州.延熙六年(243年),迁车骑将军,后授假节.又率军平定涪陵叛乱.延熙十四年(251年),邓芝病逝.邓芝性格正直、简单,不刻意修饰情绪.他为将二十多年,赏罚明断,体恤士卒.身上的衣食取自官府,从未经营过私产,妻儿甚至还有忍饥挨饿之时,死时家中也没有多余财物']],
                        yin_sunxiu: ['male', 'wu', 4, ['yinxingguo', 'yinyanke', 'yinzhaozhu'], ['des:孙权第六子,孙綝发动政变罢黜孙亮后,迎立孙休为帝.后孙綝专权,孙休遣使丁奉等人将其诛杀.孙休在位期间,颁布良制,嘉惠百姓,促进了东吴的繁荣']],
                        yin_chunyuqiong: ['male', 'qun', '4/6', ['yinxiangniang', 'yinducang', 'yinshouying'], ['des:淳于琼(？－200年),字仲简,颍川(治今河南禹州)人.东汉时期官吏,于汉灵帝中平五年(188)被任命为西园八校尉之一的右校尉,与蹇硕、袁绍、鲍鸿、曹操、赵融、冯芳、夏牟同列.为袁绍大将,与张郃、高览等人齐名.在官渡之战时镇守乌巢,遭到曹操的偷袭而惨败,自己也被曹操处斩']],
                        gai_zhangfei: ['male', 'shu', 4, ['gaipaoxiao', 'gailiyong'], ['des:字翼德,涿郡人,燕颔虎须,豹头环眼.有诗云:<长坂坡头杀气生,横枪立马眼圆睁.一声好似轰雷震,独退曹家百万兵>']],
                        yin_caocao: ['male', 'wei', 4, ['yinjuexiao', 'yinlunying', 'yinnaxian'], ['des:魏武帝曹操,字孟德,小名阿瞒、吉利,沛国谯人.精兵法,善诗歌,乃治世之能臣,乱世之奸雄也']],
                        gai_lingtong: ['male', 'wu', Infinity, ['gaijuesha'], ['des:字公绩,吴郡馀杭人,三国时期吴国名将.凌操之子,官至偏将军']],
                        yin_mouhuangzhong: ['male', 'shu', 4, ['yinmouliegong'], ['des:字汉升,今河南南阳人.汉末三国时期蜀汉名将.本为刘表部下中郎将,后归刘备,并助刘备攻益州刘璋,在定军山一战中阵斩曹操部下名将夏侯渊.备称汉中王后改封后将军,赐关内侯']],
                        yin_yuanshu: ['male', 'qun', 4, ['yinzidi', 'yinwangzun'], ['des:字公路,汝南汝阳人,袁绍之弟.初为虎贲中郎将.董卓进京后以袁术为后将军,袁术因畏祸而出奔南阳.初平元年与袁绍、曹操等同时起兵,共讨董卓.后与袁绍对立,被袁绍、曹操击败,率馀众奔九江,割据扬州.建安二年称帝,建号仲氏']],
                        yin_caoang: ['male', 'wei', 4, ['yinkangkai', 'yinpinhu'], ['des:字子修,曹操的长子,由于性情谦和且聪慧所以深得曹操喜爱.曹操征讨张绣时,羞辱张绣之婶邹氏,被张绣突然袭击.曹昂为保护曹操撤退,与典韦一起战死在宛城']],
                        yin_mouxusheng: ['male', 'wu', 4, ['yinmoupojun', 'yinmouyicheng'], ['des:字文向,琅邪莒县人.三国时期吴将.徐盛最初因讨伐山贼有功而被加为中郎将,后于濡须口之战中表现出色,得到孙权的赞赏.魏文帝曹丕伐吴时,徐盛以疑城之计退去魏军']],
                        gai_mouxusheng: ['male', 'wu', 4, ['gaimoupojun', 'gaimouyicheng'], ['des:字文向,琅邪莒县人.三国时期吴将.徐盛最初因讨伐山贼有功而被加为中郎将,后于濡须口之战中表现出色,得到孙权的赞赏.魏文帝曹丕伐吴时,徐盛以疑城之计退去魏军']],
                        yin_machao: ['male', 'shu', 4, ['yintieqi', 'yinduchou', 'yinshenyu'], ['des:字孟起,扶风茂陵人.面如冠玉,目如流星,虎体猿臂,彪腹狼腰,声雄力猛.因衣着讲究,举止非凡,故人称<锦马超>.麾铁骑,捻金枪']],
                        yin_wenchu: ['male', 'wei', 4, ['yinlvli', 'yinjuefeng', 'yinduanchou'], ['des:文俶(238年—291年),一作文淑,字次骞,小名阿鸯,世称文鸯,谯郡(今安徽亳州市)人.魏末晋初名将,曹魏扬州刺史文钦之子.骁勇善战,依附大将军曹爽,效忠于王室.司马师废黜皇帝曹芳后,随父联合毌丘俭于淮南起兵勤王.兵败之后,向南投奔吴国.诸葛诞发动淮南叛乱,奉命率军驰援.双方发生内讧,父亲为诸葛诞所害,遂降于司马昭,封关内侯.西晋建立后,任平虏护军.咸宁三年(277年),拜平西将军、都督凉秦雍州三州军事,大破鲜卑首领秃发树机能,名震天下,迁使持节、护东夷校尉、监辽东军事.八王之乱中,为诸葛诞外孙、东安王司马繇所诬杀,惨遭灭族,时年五十四岁']],
                        gai_shenlvbu: ['male', 'shen', 7, ['gaikuangbao', 'gaiwumou', 'gaifutu', 'gaishenfen'], ['des:字奉先,五原郡九原县马.三国第一猛马,曾独力被孙十万一人骑,其食量是世之无双.时人语曰:<人中是上巴,蒙古上单一人单杀鼠鼠之马.>']],
                        yin_fazheng: ['male', 'shu', 4, ['yinjingji', 'yinsuance', 'yinxianmou'], ['des:字孝直,本为刘璋部下,刘备围成都时劝说刘璋投降,而后又与刘备进取汉中,献计将曹操大将夏侯渊斩首.法正善奇谋,深受刘备信任和敬重']],
                        yin_lvbuyihao: ['male', 'qun', 5, ['yinzongheng'], ['des:字奉先,五原郡九原县人.三国第一猛将,曾独力战刘关张三人,其武力世之无双.时人语曰:<人中有吕布,马中有赤兔.>']],
                        yin_lvbuerhao: ['male', 'qun', 5, ['yinzongheng', 'yinfeijiang'], ['des:字奉先,五原郡九原县人.三国第一猛将,曾独力战刘关张三人,其武力世之无双.时人语曰:<人中有吕布,马中有赤兔.>']],
                        yin_lvbusanhao: ['male', 'qun', 5, ['yinzongheng', 'yinfeijiang', 'yinmieshi'], ['des:字奉先,五原郡九原县人.三国第一猛将,曾独力战刘关张三人,其武力世之无双.时人语曰:<人中有吕布,马中有赤兔.>']],
                        gai_huangzhong: ['male', 'shu', 4, ['yinliegong'], ['des:字汉升,今河南南阳人.汉末三国时期蜀汉名将.本为刘表部下中郎将,后归刘备,并助刘备攻益州刘璋,在定军山一战中阵斩曹操部下名将夏侯渊.备称汉中王后改封后将军,赐关内侯']],
                        yin_manchong: ['male', 'wei', 3, ['yinjunxing', 'yinyuce'], ['des:初在曹操手下任许县县令,掌管司法,以执法严格著称;转任汝南太守,开始参与军事,曾参与赤壁之战.后关羽围攻樊城,满宠协助曹仁守城,劝阻了弃城而逃的计划,成功坚持到援军到来.曹丕在位期间,满宠驻扎在新野,负责荆州侧的对吴作战.曹叡在位期间,满宠转任到扬州,接替曹休负责东侧对吴作战,屡有功劳']],
                        yin_wupangtong: ['male', 'wu', 4, ['yinguolun', 'yinsongsang'], ['des:庞统,字士元,襄阳(治今湖北襄阳)人.三国时刘备帐下谋士,官拜军师中郎将.才智与诸葛亮齐名,人称<凤雏>.在进围雒县时,统率众攻城,不幸被流矢击中去世,时年三十六岁.追赐统为关内侯,谥曰靖侯.庞统死后,葬于落凤庞统墓坡']],
                        yin_guanyu: ['male', 'shu', 4, ['yinwusheng', 'yintuodao', 'yinzhenhua'], ['des:字云长,本字长生,并州河东解州人.五虎上将之首,爵至汉寿亭侯,谥曰<壮缪侯>.被奉为<关圣帝君>,崇为<武圣>']],
                        yin_zhonghui: ['male', 'wei', 4, ['yinquanji', 'yinpaiyi', 'yinzili'], ['des:字士季.魏名将,太傅钟繇之子.公元263年,他与邓艾带兵攻打蜀国,最终导致蜀国灭亡.之后钟会设计害死邓艾,联合姜维准备自立,最终因部下反叛失败,与姜维一同死于兵变']],
                        yin_suncezhouyu: ['male', 'wu', 4, ['yindingjiang', 'yinyingcai', 'yinzhiba'], ['des:孙策,字伯符,吴郡富春人.孙坚长子,孙权长兄.东汉末年割据江东一带的军阀,汉末群雄之一,三国时期吴国的奠基者.三国演义中绰号<小霸王>,统一江东.在一次狩猎中为刺客所伤,不久后身亡,年仅二十六岁.其弟孙权接掌孙策势力,并于称帝后,追谥孙策为长沙桓王. 周瑜,字公瑾,庐江舒县人.东汉末年名将.有姿貌、精音律,江东有<曲有误,周郎顾>之语.周瑜少与孙策交好,后孙策遇刺身亡,孙权继任.周瑜将兵赴丧,以中护军的身份与长史张昭共掌众事,建安十三年(208年),周瑜率东吴军与刘备军联合,在赤壁击败曹操.此战也奠定了三分天下的基础']],
                        yin_xunchen: ['male', 'qun', 4, ['yinyonghan', 'yinfenglue', 'yinxueze'], ['des:荀谌,字友若,荀彧之兄(一说荀彧之弟),荀绲之子,颍川人.曾任军阀袁绍的幕僚.帮助袁绍游说韩馥,夺取了冀州']],
                        gai_luotong: ['male', 'wu', 4, ['gaiqinzheng', 'gaidaimin'], ['des:骆统(193年－228年),字公绪.会稽郡乌伤县(今浙江义乌)人.东汉末年至三国时期吴国将领、学者,陈国相骆俊之子.骆统二十岁时已任乌程国相,任内有政绩,使得国中民户过万.又迁为功曹,行骑都尉.曾劝孙权尊贤纳士,省役息民.后出任为建忠中郎将.将军凌统逝世后,统领其部曲.因战功迁偏将军,封新阳亭侯,任濡须督.黄武七年(228年),骆统去世,年仅三十六岁.有集十卷,今已佚']],
                        yin_mouzhaoyun: ['male', 'shu', 4, ['yinmoulongdan', 'yinmoujizhu', 'yinmoutangyi'], ['des:字子龙,常山真定人.身长八尺,姿颜雄伟.长坂坡单骑救阿斗,先主云:<子龙一身都是胆也.>']],
                        gai_liru: ['male', 'qun', 3, ['gaijuece', 'gaimieji', 'gaifencheng'], ['des:董卓的首席谋士,为董卓所亲信,大小事宜皆与其商议.董卓趁乱进京、说降吕布、废立皇帝、迁都长安等举动,均离不开李儒的参谋之功,并奉命毒杀皇帝刘辩.李傕被曹操击败后,李儒从此不知所踪,消失在历史长河中']],
                        yin_zhangxiu: ['male', 'qun', 4, ['yinxiongluan', 'yin_chaofeng'], []],
                        yin_jushou: ['male', 'qun', 3, ['yin_jianying', 'dcshibei'], []],
                        yin_shibao: ['male', 'jin', 4, ['yin_zhuosheng'], []],
                        yin_sunliang: ['male', 'wu', 3, ['yin_kuizhu', 'yin_chezheng'], []],
                        yin_liuyong: ['male', 'shu', 4, ['yin_zhuning', 'yin_fengxiang'], []],
                        yin_lvkai: ['male', 'shu', 4, ['yin_tunan'], []],
                        yin_simashi: ['male', 'jin', 4, ['yin_taoyin', 'yin_yimie', 'yin_ruilve', 'yin_tairan'], ['zhu', 'hiddenSkill']],
                        yin_lukang: ['male', 'wu', 4, ['yin_qianjie', 'yin_jueyan', 'yin_poshi'], []],
                        yinsp_jiaxu: ['male', 'wei', 3, ['yin_zhenlue', 'yin_jianshu', 'yin_yongdi'], []],
                        yin_fanchou: ['male', 'qun', 4, ['yin_xingluan'], []],
                        yin_wuguotai: ['female', 'wu', 3, ['yin_buyi'], []],
                        yin_baolongchenying: ['male', 'qun', 4, ['yin_shiwu'], ['des:鲍隆,小说<三国演义>中的人物.东汉末年桂阳太守赵范的手下将士.鲍隆为桂阳管军校尉,出身桂阳岭山乡猎户,曾射杀双虎.<br>陈应,小说<三国演义>虚拟人物,为桂阳太守赵范的部将,与鲍隆并列.<br><br>赤壁之战后,刘备命赵云攻去桂阳,鲍隆与陈应恃勇而战,被赵云所败.太守赵范纳降后,嫁嫂不成恼羞成怒,鲍隆与陈应至赵云营中诈降,为赵云识破所杀(第52回)']],
                        yin_juyi: ['male', 'qun', 4, ['yin_xiandeng', 'yin_jiaozi'], []],
                        //"yin_xushi":["female","wu",4,["yin_fuzhu"],[]],
                        yin_sunhao: ['male', 'wu', 5, ['yin_yindi', 'yin_yunu', 'yin_nafei'], ['zhu']],
                        yin_beimihu: ['female', 'qun', 3, ['yin_guishu', 'yin_tianzhao', 'yin_huanhuo'], ['zhu']],
                        yin_wolongfengchu: ['male', 'shu', 3, ['yin_yiyan', 'yin_dingzhi'], []],
                        yin_zhanggong: ['male', 'wei', 3, ['yin_qianxin', 'yin_zhenxing'], []],
                    },
                    characterTitle: {
                        yin_caishi: '#b献州以保',
                        yin_liubei: '#g结义情深',
                        yin_xunyou: '#b策出奇法',
                        yin_chendao: '#r白毦统领',
                        yin_liuxie: '#r大汉天威',
                        yin_weiwenzhugezhi: '#g渡海征民',
                        yin_zhangliao: '#b威震逍遥',
                        yin_zhoutai: '#g舍命护主',
                        gai_shensunce: '#r江东小霸王',
                        yin_guanlu: '#b卜算天机',
                        yin_dingfeng: '#g神行太保',
                        yin_dengzhi: '#r直言率语',
                        yin_mateng: '#r雄心异志',
                        yin_sunxiu: '#g兴吴宴权',
                        gai_xushao: '#g试论天下',
                        yin_chunyuqiong: '#r乌巢酒仙',
                        gai_zhangfei: '#r怒吼震世',
                        yin_caocao: '#b乱世的奸雄',
                        gai_lingtong: '#g时代的活阎王',
                        yin_mouhuangzhong: '#r神弓夺命',
                        yin_yuanshu: '#g鲜美无比',
                        yin_caoang: '#b赠骑救父',
                        yin_mouxusheng: '#g破敌卫疆',
                        gai_mouxusheng: '#g看守长江之人',
                        yin_machao: '#r铁骑奔腾',
                        yin_wenchu: '#b背水奋战',
                        gai_shenlvbu: '#r戾火浮屠',
                        yin_fazheng: '#r蜀之谋主',
                        yin_lvbuyihao: '#b误霜废酱',
                        yin_lvbuerhao: '无双飞酱',
                        yin_lvbusanhao: '#b无双飞将',
                        gai_huangzhong: '#g阎罗勾魂弓',
                        yin_manchong: '#b秉公执法',
                        yin_wupangtong: '#g东吴专业丧葬团队',
                        yin_guanyu: '#r威震华夏',
                        yin_zhonghuiz: '#b记仇小能手',
                        yin_xunchen: '&b鸿雪寒山',
                        yin_suncezhouyu: '#g江东二杰',
                        gai_luotong: '#g史诗级歌王',
                        yin_mouzhaoyun: '#r神龙佑主',
                        gai_liru: '#r焚毁长安',
                        yin_zhugeguo: '#r仙辰羽化',
                        gai_shenzhaoyun: '#r百战龙魂',
                        yin_lvlingqi: '#r巾帼之女',
                        yin_zhangxiu: '#r北地枭雄',
                        yin_jushou: '#r监军谋国',
                        yin_shibao: '#r乐陵郡公',
                        yin_sunliang: '#g寒江枯木',
                        yin_liuyong: '',
                        yin_lvkai: '',
                        yin_simashi: '',
                        yin_lukang: '',
                        yinsp_jiaxu: '',
                        yin_fanchou: '',
                        yin_wuguotai: '',
                        yin_baolongchenying: '',
                        yin_juyi: '',
                        yin_xushi: '',
                        yin_sunhao: '',
                        yin_beimihu: '',
                        yin_wolongfengchu: '',
                        yin_zhanggong: '',
                    },
                    translate: {
                        gai_shensunce: '▼神孙策',
                        yin_xunyou: '♋荀攸',
                        yin_liubei: '♋刘备',
                        yin_weiwenzhugezhi: '♋卫温诸葛直',
                        yin_zhoutai: '♋周泰',
                        yin_zhangliao: '♋张辽',
                        yin_caishi: '♋蔡氏',
                        yin_chendao: '♋陈到',
                        yin_liuxie: '♋刘协',
                        yin_guanlu: '♋管辂',
                        yin_dingfeng: '♋丁奉',
                        yin_mateng: '♋马腾',
                        yin_dengzhi: '♋邓芝',
                        yin_sunxiu: '♋孙休',
                        gai_xushao: '▼许劭',
                        yin_chunyuqiong: '♋淳于琼',
                        gai_zhangfei: '▼张飞',
                        yin_caocao: '♋曹操',
                        gai_lingtong: '▼凌统',
                        yin_mouhuangzhong: '♋黄忠',
                        yin_yuanshu: '♋袁公路',
                        yin_caoang: '♋曹昂',
                        yin_mouxusheng: '♋谋徐盛',
                        gai_mouxusheng: '▼谋徐盛',
                        yin_machao: '♋马超',
                        yin_wenchu: '♋文俶',
                        gai_shenlvbu: '▼神吕布',
                        yin_fazheng: '♋法正',
                        yin_lvbuyihao: '♋吕布一号',
                        yin_lvbuerhao: '♋吕布二号',
                        yin_lvbusanhao: '♋吕布三号',
                        gai_huangzhong: '▼谋黄忠',
                        yin_manchong: '♋满宠',
                        yin_wupangtong: '♋吴庞统',
                        yin_guanyu: '♋关羽',
                        yin_zhonghui: '♋钟会',
                        yin_suncezhouyu: '♋孙策周瑜',
                        yin_xunchen: '♋荀谌',
                        gai_luotong: '▼骆统',
                        yin_mouzhaoyun: '♋谋赵云',
                        gai_liru: '▼李儒',
                        yin_zhugeguo: '♋诸葛果',
                        gai_shenzhaoyun: '▼神赵云',
                        yin_lvlingqi: '♋吕玲绮',
                        yin_jushou: '♋沮授',
                        yin_shibao: '♋石苞',
                        yin_sunliang: '♋孙亮',
                        yin_liuyong: '♋刘永',
                        yin_lvkai: '♋吕凯',
                        yin_simashi: '♋司马师',
                        yin_lukang: '♋陆抗',
                        yinsp_jiaxu: '♋贾诩',
                        yin_fanchou: '♋樊稠',
                        yin_wuguotai: '♋吴国太',
                        yin_baolongchenying: '♋鲍隆陈应',
                        yin_juyi: '♋麴义',
                        yin_xushi: '♋徐氏',
                        yin_sunhao: '♋孙皓',
                        yin_beimihu: '♋卑弥呼',
                        yin_wolongfengchu: '♋卧龙凤雏',
                        yin_zhanggong: '♋张恭',
                        gai_yingba: '英霸',
                        gai_yingba_info: '出牌阶段限一次,你可以选择一名体力上限大于1的其他角色,令其减少1点体力上限并获得<平定>标记,你减少1点体力上限并摸一张牌.你对拥有<平定>标记的角色使用牌无距离限制.拥有<平定>标记的角色的手牌上限+X(X为其<平定>标记数量)',
                        gaifuhai: '覆海',
                        gaifuhai_info: '锁定技,拥有<平定>标记的角色不能响应你对其使用的牌.你使用牌指定有<平定>标记的角色为目标时,你摸一张牌.拥有<平定>标记的角色死亡时,你增加X点体力值上限并摸X张牌(X为其拥有的<平定>标记数)',
                        gai_pinghe: '冯河',
                        gai_pinghe_info: '锁定技,你的手牌上限等于体力上限.当你受到其他角色造成的伤害时,若你有手牌且体力上限大于1,则防止本次伤害,减少1点体力值上限并将1张手牌交给一名其他角色,若你拥有技能<英霸>,则令伤害来源获得1个<平定>标记',
                        yinxianchen: '仙辰',
                        yinxianchen_info: '回合结束时,你可以和1名男性角色交换手牌,则你们中手牌较少的角色摸牌至于手牌较多的角色相等',
                        yinqixiang: '祁骧',
                        yinqixiang_info: '出牌阶段限二次,你可以弃置一张手牌从牌堆获得一张装备牌并置入任意角色的装备区,其摸1张牌',
                        yinpiaomiao: '缥缈',
                        yinpiaomiao_info: '出牌阶段限一次,你可以与其他角色拼点,若你赢,本回合跳过弃牌阶段,若你没赢,你获得对方的拼点牌',
                        yinshenwei: '神威',
                        yinshenwei_info: '锁定技,摸牌阶段,你额外摸X张牌,你的手牌上限+X(X为场上其他角色的数且至多为4)',
                        yinshenji: '神戟',
                        yinshenji_info: '锁定技,你使用【杀】指定的目标数+2,使用次数+1',
                        yinfangtian: '方天',
                        yinfangtian_info: '出牌阶段限1次,当你使用【杀】造成伤害后,你可以指定1-2名与其相邻的角色并对其使用一张【杀】',
                        yinjuejing: '绝境',
                        yinjuejing_info: '锁定技,你的手牌上限+2;当你进入或脱离濒死状态时,你摸一张牌',
                        yinlonghun: '龙魂',
                        yinlonghun_info: '你可以将同花色的一至两张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当普【无懈可击】.若你以此法使用了两张红色牌,则此牌回复值或伤害值+1.若你以此法使用了两张黑色牌,则你弃置当前回合角色一张牌',
                        yinbuqu: '不屈',
                        yinbuqu_info: '你的血量变化后,你摸一张牌',
                        yinzhuiji: '追击',
                        yinzhuiji_info: '出牌阶段限一次,你可以令一名其他角色获得<追击>标记:本轮内,所有角色与其距离视为1',
                        yinqice: '奇策',
                        yinqice_info: '锁定技,①当有角色使用非转化的锦囊牌时,你获得一个<奇策>.②当你受到伤害后,你获得一个<奇策>.③你至多拥有12个<奇策>',
                        jingzhi: '锦智',
                        jingzhi_info: '出牌阶段,你可弃置一个<奇策>并将一张牌当作除【无懈可击】以外的普通锦囊牌或【杀】使用,本回合内你以此法使用的牌的牌名不得重复',
                        miaomou: '妙谋',
                        miaomou_info: '每回合限一次,你可弃置一个<奇策>并将一张牌当作任意基本牌或【无懈可击】使用,摸一张牌',
                        miaomou2: '妙谋',
                        miaomou2_info: '',
                        yinliezhu: '烈诛',
                        yinliezhu_info: '每回合限一次,当你造成伤害后,若你的体力值不小于你的手牌数,则你可以摸X张牌.(X为你的体力上限)',
                        yinyijie: '义杰',
                        yinyijie_info: '锁定技,游戏开始时,你获得1枚<义杰>标记;当你造成或受到1点伤害后,你获得1枚<义杰>标记',
                        yinlihan: '立汉',
                        yinlihan_info: '觉醒技,一名角色的回合结束时,若你已拥有4枚或以上的<义杰>,则你弃置4枚<义杰>并失去一点体力上限,回复一点体力,获得技能<龙愤>并将<烈诛>描述修改为<每回合限两次>与<受到伤害也可触发>',
                        yinlongfen: '龙愤',
                        yinlongfen_info: '出牌阶段,若你拥有的<义杰>不小于4枚且你已受伤,则你可以弃置4枚<义杰>标记并选择一名其他角色,其弃置区域内所有牌,受到你对其造成的1点伤害',
                        yinzhenghai: '征海',
                        yinzhenghai_info: '出牌阶段限X次,你可以将一张手牌交给一名其他角色,其选择一项:1.弃置X+1张牌 2.受到1点伤害并令你摸X+1张牌.(X为你已损失体力值且至少为1)',
                        yinjuefen: '绝奋',
                        yinjuefen_info: '锁定技,当你进入濒死状态时,若你的牌数不小于X,则你回复至一点体力,弃置X张牌(X为你拥有的<绝奋>数量)并获得一枚<绝奋>.你的手牌上限+X',
                        yinniqi: '逆起',
                        yinniqi_info: '锁定技,当其他角色使你回复体力后,你弃置一枚<绝奋>并令其摸一张牌',
                        yinminghu: '命护',
                        yinminghu_info: '每回合限一次,当其他角色进入濒死状态时,你可以令其回复至一点体力,你受到Y点伤害并摸Y张牌.(Y为你的<绝奋>数且至少为1)',
                        yinminghu2: '命护',
                        yinminghu2_info: '',
                        yintuxi: '突袭',
                        yintuxi_info: '摸牌阶段,你可以获得至多X+1名其他角色的一张手牌,若你未受伤且未觉醒,则失去一点体力.(X为你的体力值)',
                        yinposhi: '破势',
                        yinposhi_info: '锁定技,①当你受到1点伤害后,你获得一枚<破势>;②当你对其他角色造成伤害后,若其手牌数不大于你,则你获得一枚<破势>',
                        yinduorui: '夺锐',
                        yinduorui_info: '觉醒技,一名角色回合结束时,若你已有4枚以上<破势>,则你获得技能<震吴>,体力值回复至体力上限',
                        yinzhenwu: '震吴',
                        yinzhenwu_info: '锁定技,①当你造成伤害时,若你有<破势>标记,则你弃置一枚<破势>并令此伤害+1;②结束阶段,若你本回合内未造成过伤害,则弃置一枚<破势>,摸Y张牌.③你与其他角色计算距离时-Y(Y为你拥有的<破势>数)',
                        yinqieer: '窃耳',
                        yinqieer_info: '一名角色的结束阶段,若其未跳过出牌阶段,则你可以摸一张牌,该回合内:其没有造成伤害,你摸一张牌;你受到伤害次数大于1,你回复一点体力;其未对其他角色使用过牌,你可以与其(若当前回合角色为你则只摸一次)各摸X张牌.(X为你的体力值)',
                        yinjike: '继客',
                        yinjike_info: '锁定技,当你于回合外失去装备区内的一张牌后,你摸一张牌并回复一点体力',
                        yinjuexun: '绝勋',
                        yinjuexun_info: '锁定技,①出牌阶段内,你使用牌无距离限制;②当你对其他角色造成伤害后,你摸一张牌,若你已经以此法摸过牌,则你获得如下效果直到本回合结束:使用牌无次数限制且无法被响应',
                        yinjuexun2: '绝勋',
                        yinjuexun2_info: '',
                        yinziwang: '自望',
                        yinziwang_info: '①当有角色于你回合内进入濒死状态时,你可以摸X+1张牌,若你不是第一次于本回合发动此技能,则你失去一点体力.②每回合限一次,你于回合外受到伤害后,你可以摸Y张牌(至少一张).(X为此前此技能发动次数且至多为4;Y为你的体力值)',
                        yintianhan: '天汉',
                        yintianhan_info: '锁定技,游戏开始时,你加X点体力上限并回复一点体力.当你进入濒死时,若你体力上限大于2,则你减少一点体力上限,摸一张牌并回复至1点体力.(X为场上势力数)',
                        yinshizhao: '世诏',
                        yinshizhao_info: '锁定技,准备阶段,你摸一张牌,随机获得一项效果直到你的下回合开始:①获得【问计】、【利驭】、【诗怨】、【让节】;②获得【慷忾】、【界倾袭】、【恢拓】、【界鬼才】;③获得【英姿】、【界直谏】、【界破军】、【明哲】;④获得【屯储】、【仁德】、【享乐】、【界烈弓】',
                        yinshigua: '势卦',
                        yinshigua_info: '锁定技,准备阶段,若你的<卦象>不大于6,则你获得0-3枚<卦象>;结束阶段,若你的<卦象>大于6,则你弃置0-3枚<卦象>.任意角色的判定生效后,你获得1枚<卦象>并摸一张牌.你至多拥有10枚<卦象>',
                        yinxiaoshi: '晓世',
                        yinxiaoshi_info: '①出牌阶段开始时,你可以弃置所有手牌并摸X张牌.②弃牌阶段开始时,若你的手牌数不等于<卦象>数,则你可以弃置一枚<卦象>并跳过此阶段.③锁定技,回合结束时,你将体力上限调整为X,将手牌摸至体力上限(至多五张).(X为你拥有的<卦象>数且至少为3)',
                        yinmingjie: '命戒',
                        yinmingjie_info: '①锁定技,当你受到伤害后,摸X张牌,且<势卦>失效直到新一轮开始.②当你受到伤害时,你可以弃置Y枚<卦象>并防止此伤害,回复一点体力.(X为你拥有的<卦象>数,Y为本次伤害值)',
                        yinshigua2: '势卦',
                        yinshigua2_info: '',
                        yinliangju: '良驹',
                        yinliangju_info: '锁定技,你使用坐骑牌时摸一张牌;你与其他角色计算距离时-X.(X为你的体力值)',
                        yinxiongyi: '雄异',
                        yinxiongyi_info: '出牌阶段限一次,你可以弃置一张牌,摸三张牌,若你弃置了装备牌,则你额外摸一张牌并回复一点体力',
                        yinduanbing: '短兵',
                        yinduanbing_info: '锁定技,当你使用【杀】对其他角色造成伤害时,获得其一张牌,若未获得牌,则改为摸一张牌.你使用【杀】的次数上限+1;你的攻击距离+1;与你距离为1的角色需要使用两张【闪】抵消你的【杀】',
                        yinfenpo: '奋破',
                        yinfenpo_info: '当你对其他角色造成伤害后,你可以重铸一张牌,废除其一个装备栏(从宝物栏开始依次废除)',
                        yintanquan: '谈劝',
                        yintanquan_info: '①摸牌阶段开始时,你可以将一张牌交给一名其他角色.②当你受到其他角色造成的伤害后,若其体力值不小于你,则你可以摸一张牌并对其造成一点伤害',
                        yinshuaiyan: '率言',
                        yinshuaiyan_info: '①锁定技.当你的牌被其他角色获得后,你可以摸一张牌并对其造成一点伤害.②出牌阶段限一次,你可以观看一名其他角色的手牌,摸X张牌(至多5张).(X为其中黑色牌数)',
                        yinxingguo: '兴国',
                        yinxingguo_info: '每回合限一次,当你脱离濒死状态后,你可以选择一名其他角色,你与该角色交换体力值',
                        yinxingguo2: '兴国',
                        yinxingguo2_info: '',
                        yinyanke: '宴客',
                        yinyanke_info: '其他角色的回合开始时,你可以令其获得<赴宴>;锁定技,当你的回合开始时或当你进入濒死状态后,拥有<赴宴>的角色摸一张牌',
                        yinfuyan: '赴宴',
                        yinfuyan_info: '锁定技,①准备阶段,你弃置一张牌(无则不弃),令拥有<宴客>的角色摸1张牌.②当你造成伤害时,若对方拥有技能<宴客>,则防止此伤害并令其回复一点体力,你失去<赴宴>',
                        yinzhaozhu: '诏诛',
                        yinzhaozhu_info: '①出牌阶段限一次,你可以令一名其他角色获得<应诛>效果直到其下回合结束.②你使用牌指定<应诛>角色为目标时,若其有<赴宴>,则其无法响应此牌',
                        yinzhaozhu2: '应诛',
                        yinzhaozhu2_info: '锁定技,你的手牌上限-1;当你受到伤害时弃置一张牌,若对方有<诏诛>且你有<赴宴>,则此伤害+1',
                        yinxiangniang: '享酿',
                        yinxiangniang_info: '锁定技,你使用【酒】时摸一张牌并回复一点体力.你使用【酒】无次数限制',
                        yinducang: '独仓',
                        yinducang_info: '①当其他角色使用【酒】时,若你体力上限大于1,则你可以减少一点体力上限,令此【酒】无效并对其造成一点伤害.②准备阶段,你可以弃置一张牌,视为你使用一张【酒】',
                        yinshouying: '守营',
                        yinshouying_info: '觉醒技,准备阶段,你的体力上限为1或当你进入濒死状态时,你将体力上限改为4并回复3点体力,修改<独仓>并获得<粮储>.(<独仓>:减少体力上限时,若有<粮>,则改为弃置1个<粮>)',
                        yinliangchu: '粮储',
                        yinliangchu_info: '锁定技,回合开始时,若<粮>的数量小于3,则你获得1个<粮>;摸牌阶段,你多摸X张牌;当你受到火焰伤害后,弃置所有<粮>;你的手牌上限+X.(X为你的<粮>数量)',
                        gaipaoxiao: '咆哮',
                        gaipaoxiao_info: '锁定技,你使用【杀】无距离与次数限制.当你使用【杀】造成伤害或受到【杀】造成的伤害后,若<勇>小于4,则获得1枚<勇>.回合开始时,你从牌堆/弃牌堆随机获得X张【杀】.(X为<勇>的数量)',
                        gailiyong: '厉勇',
                        gailiyong_info: '锁定技,若你于出牌阶段使用的【杀】被【闪】抵消,则你使用的下一张【杀】不可被响应且伤害+X,指定的目标本回合非锁定技与防具失效,此【杀】造成伤害后,<厉勇>效果消失并弃置所有<勇>.(X为<勇>的数量且至少为1)',
                        gailiyong2: '厉勇',
                        gailiyong2_info: '',
                        yinjuexiao: '绝枭',
                        yinjuexiao_info: '①每回合限发动一个选项:1.当其他角色使用【闪】时,你可以使此【闪】无效并视为对其使用一张不计入次数限制的【杀】;2.当你受到伤害后,你可以获得对你造成伤害的牌并摸一张牌,若未获得牌则改为摸一张牌.②每轮限一次,当你成为【杀】的目标后,你可以使此【杀】无效',
                        yinjuexiao2: '绝枭',
                        yinjuexiao2_info: '',
                        yinlunying: '论英',
                        yinlunying_info: '准备阶段,你可以令一名角色获得<称英>直到其回合结束;若<称英>角色拥有<论英>,则将【失去体力】改为【受到1点伤害】且不用弃牌',
                        yinchengying: '称英',
                        yinchengying_info: '锁定技,你摸牌阶段多摸2张牌,出牌阶段开始时回复一点体力,出牌阶段使用【杀】次数上限+1,手牌上限+2;结束阶段,若你本回合内没有造成过伤害,则你失去X点体力,弃置所有手牌.(X为你的体力值)',
                        yinnaxian: '纳贤',
                        yinnaxian_info: '限定技,出牌阶段,若你体力值为1,则你可以选择一名其他角色,你获得其武将牌上所有技能(主公/隐匿/状态等技除外),其摸4张牌',
                        yinjuexiao3: '绝枭',
                        yinjuexiao3_info: '',
                        gaixuanfeng: '旋风',
                        gaixuanfeng_info: '你可以在以下非行动时机里选择任意次任意名其他角色,令这些角色依次失去所有技能并弃置所有牌,受到你造成的∞点伤害,且你将体力回复至体力上限并获得等量回复值的护甲.<br>非行动时机:每个回合开始前/时/后/结束后丨任意角色的准备阶段丨任意角色的结束阶段开始前/时/后/结束后',
                        yinmouliegong: '烈弓',
                        yinmouliegong_info: '①你使用【杀】可选择在此【杀】点数距离内的角色为目标.当你使用【杀】指定唯一目标后,若你的手牌数/体力值不等于目标的手牌数/体力值,则你可以令其不能响应此【杀】,若你的体力值小于目标的体力值,则此【杀】伤害+1.②出牌阶段限一次,你可以弃置2张牌,失去<烈弓>并获得<神射>',
                        yinmoushenshe: '神射',
                        yinmoushenshe_info: '你使用【杀】没有距离限制且无视防具.当你使用【杀】指定目标后,你可以展示牌堆顶的X张牌,每有一张牌的颜色与此【杀】相同,你便令此【杀】的伤害+1,若目标手牌数不大于X,则其不能响应此【杀】.(X为此【杀】点数)',
                        yinzidi: '自帝',
                        yinzidi_info: '锁定技,摸牌阶段摸牌时,你改为摸X张牌(至多5张).结束阶段,若你本回合内造成过伤害,则你回复一点体力.你的手牌上限+Y.(X为你的体力上限,Y为全场势力数)',
                        yinwangzun: '妄尊',
                        yinwangzun_info: '限定技,其他角色的准备阶段,你可以令其跳过出牌阶段且其本回合手牌上限-Y,你减一点体力上限并在本回合结束时执行一个额外回合.(Y为全场势力数)',
                        yinwangzun1: '妄尊',
                        yinwangzun1_info: '',
                        yinkangkai: '慷忾',
                        yinkangkai_info: '锁定技.①当有角色成为【杀】的目标时,你可以摸一张牌,交给其一张明牌,且:若此牌不为基本牌,则你与其各摸一张牌;若此牌为装备牌,则该角色可以使用这张装备牌并回复一点体力.②你于回合内受到【杀】的伤害时,防止此伤害并摸一张牌',
                        yinpinhu: '坪护',
                        yinpinhu_info: '每回合限一次,当有角色于你回合外受到大于1点的伤害时,你可以防止此伤害,若该角色不是你,则你与其各摸一张牌,否则你回复1点体力',
                        yinpinhu2: '坪护',
                        yinpinhu2_info: '',
                        yinmoupojun: '破军',
                        yinmoupojun_info: '当你使用【杀】指定目标时,你可以将其X张牌移出游戏(回合结束时归还).当你使用【杀】指定目标后,你可以展示牌堆顶的Y张牌,每有一张牌与<疑城>记录花色相同,你便令此【杀】的伤害+1且每有一张牌此【杀】颜色不同,你便获得1点护甲.若如此做,则此【杀】结算完毕后,你移除所有<疑城>记录的花色.(X为其体力值,Y为<疑城>记录的花色数)',
                        yinmoupojun2: '破军',
                        yinmoupojun2_info: '',
                        yinmoupoju: '破军',
                        yinmoupoju_info: '当你使用【杀】指定目标后,你可以展示牌堆顶的Y张牌,每有一张牌与<疑城>记录花色相同,你便令此【杀】的伤害+1且每有一张牌此【杀】颜色不同,你便获得1点护甲.若如此做,则此【杀】结算完毕后,你移除所有<疑城>记录的花色.(Y为<疑城>记录的花色数)',
                        yinmoupojun3: '破军',
                        yinmoupojun3_info: '',
                        yinmouyicheng: '疑城',
                        yinmouyicheng_info: '锁定技,①当你使用牌时,若此牌的花色未被你记录,则你记录此花色;你于回合内使用除【杀】外与<疑城>记录花色相同的牌时,你移除此花色的记录.②当你成为其他角色使用牌的目标后,若此牌花色未被记录,则你记录此牌花色并摸一张牌.③当你使用牌造成伤害时,若此牌的花色与<疑城>记录的花色不同,你摸Y张牌.(Y为<疑城>记录的花色数)',
                        yinmouyicheng2: '疑城',
                        yinmouyicheng2_info: '',
                        yinmouyicheng3: '疑城',
                        yinmouyicheng3_info: '',
                        gaimoupojun: '破军',
                        gaimoupojun_info: '当你使用【杀】指定目标时,你可以将其X张牌移出游戏(回合结束时归还).当你使用【杀】指定目标后,你可以展示牌堆顶的Y张牌,每有一张牌与<疑城>记录花色相同,你便令此【杀】的伤害+1,你获得Y点护甲.若如此做,则此【杀】结算完毕后,你移除所有<疑城>记录的花色.(X为其体力值,Y为<疑城>记录的花色数加你攻击距离的一半且向上取整)',
                        gaimoupojun2: '破军',
                        gaimoupojun2_info: '',
                        gaimoupoju: '破军',
                        gaimoupoju_info: '当你使用【杀】指定目标后,你可以展示牌堆顶的Y张牌,每有一张牌与<疑城>记录花色相同,你便令此【杀】的伤害+1,你获得Y点护甲.若如此做,则此【杀】结算完毕后,你移除所有<疑城>记录的花色.(Y为<疑城>记录的花色数加你攻击距离的一半且向上取整)',
                        gaimoupojun3: '破军',
                        gaimoupojun3_info: '',
                        gaimouyicheng: '疑城',
                        gaimouyicheng_info: '锁定技,①当你使用牌时或成为其他角色使用牌的目标后,若此牌的花色未被你记录,则你记录此花色并摸一张牌.③当你使用牌造成伤害时,若此牌的花色与<疑城>记录的花色相同,此伤害+1',
                        gaimouyicheng2: '疑城',
                        gaimouyicheng2_info: '',
                        gaimouyicheng3: '疑城',
                        gaimouyicheng3_info: '',
                        yintieqi: '铁骑',
                        yintieqi_info: '当你使用【杀】指定一名角色为目标后,你可以令该角色不能响应此【杀】且其非状态技失效直到回合结束,你进行一次判定,若判定结果为:红色,此【杀】伤害+1;黑色,你摸一张牌并获得此判定牌',
                        yinduchou: '妒仇',
                        yinduchou_info: '当你受到其他角色造成的伤害后,你可以视为对伤害来源使用一张【杀】,若此时是你的回合,则你摸一张牌',
                        yinshenyu: '神驭',
                        yinshenyu_info: '①锁定技,你与其他角色计算距离时-X(X为你的体力值).②出牌阶段,你可以弃置一张非基本牌.若如此做,你从牌堆中获得一张【杀】且本回合内使用【杀】次数+1',
                        yinlvli: '膂力',
                        yinlvli_info: '出牌阶段内每种花色限一次,你可以将一张牌当作【杀】使用(无距离限制且无次数限制).若此【杀】造成了伤害,则你从牌堆中获得一张与此【杀】花色相同的牌',
                        yinlvli_damage: '膂力',
                        yinlvli_damage_info: '',
                        yinjuefeng: '决锋',
                        yinjuefeng_info: '①当你成为【杀】的目标后,你可以视为对此【杀】来源使用一张【决斗】,且若你未受伤,则该【杀】无效.②当你使用【决斗】指定目标后,若其[手牌数/体力值]不等于你,你可以[获得其一张牌/令此【决斗】伤害+1].③当你受到【决斗】的伤害时,防止此伤害,本回合内①③效果失效',
                        yinjuefeng2: '决锋',
                        yinjuefeng2_info: '当你使用【决斗】指定目标后,若其[手牌数/体力值]不等于你,你可以[获得其一张牌/令此【决斗】伤害+1]',
                        yinduanchou: '断仇',
                        yinduanchou_info: '锁定技,当你击杀一名角色后,你回复1点体力,摸2张牌并重置【膂力】',
                        yinjuefeng3: '决锋',
                        yinjuefeng3_info: '',
                        yinjuefeng_lose: '决锋',
                        yinjuefeng_lose_info: '',
                        gaikuangbao: '狂暴',
                        gaikuangbao_info: '锁定技,游戏开始时,你获得3枚<暴怒>;当你造成或受到1点伤害后,你获得1枚<暴怒>',
                        gaikuangbao2: '狂暴',
                        gaikuangbao2_info: '',
                        gaiwumou: '无谋',
                        gaiwumou_info: '当你使用锦囊牌指定目标后,你可以弃置1枚<暴怒>,摸一张牌并令此牌不可被响应',
                        gaifutu: '浮屠',
                        gaifutu_info: '锁定技,你的回合开始时,若你<暴怒>数不小于4枚,则你弃置4枚<暴怒>并获得【凌世】、【神戟】直到本回合结束.你的技能不会被失效.(部分技能依然可以影响,如断肠、夺锐)',
                        gailingshi: '凌世',
                        gailingshi_info: '锁定技,你使用【杀】造成的伤害+1.你使用【杀】的次数上限+X.(X为你的体力值且至少为2)',
                        gaishenji: '神戟',
                        gaishenji_info: '锁定技,你使用【杀】可额外指定3个目标且无距离限制.你使用的【杀】不可被响应且无视防具',
                        gaishenfen: '神愤',
                        gaishenfen_info: '出牌阶段限一次,你可以弃置Y枚<暴怒>标记并选择所有其他角色(Y为当前存活人数),对这些角色造成1点伤害再令这些角色弃置全部牌.发动【神愤】后,有概率重置此技能,你的<暴怒>数越多,概率越大',
                        gaishenfen2: '神愤',
                        gaishenfen2_info: '',
                        yinjingji: '精计',
                        yinjingji_info: '锁定技,①回合开始前,你进行一次判定,若此判定牌的类型未被你记录,则你记录此类型并从牌堆中获得一张与其类型不同的牌,否则你获得此判定牌.②若你未濒死,则你在回合内只能使用<精计>已记录的类型相同的牌',
                        yinsuance: '算策',
                        yinsuance_info: '锁定技,①回合开始时,若当前游戏轮数为:奇,你获得一张基本牌;偶,你获得一张锦囊牌.②准备阶段,若当前你的回合数为:奇,你可以移动场上一张牌;偶,你可以弃置一名角色区域内一张牌.③判定阶段,若你判定区内牌数为:奇,你回复1点体力;偶,你失去1点体力并跳过判定阶段.④摸牌阶段摸牌时,若你摸牌基数为:奇,多摸1张牌并失去1点体力;偶,若你体力为1,回复1点体力.⑤当你受到伤害后,若当前体力值为:奇,你对伤害来源造成1点伤害;偶,你摸X张牌(X为已损失体力值且至少为1).⑥当你造成伤害后,若对方体力值为:奇,你回复1点体力;偶,你摸1张牌.⑦当你使用牌时,若你剩余手牌数为:奇,你失去1点体力;偶,你回复1点体力.⑧弃牌阶段开始时,若你本回合已使用过的牌数为:奇,你失去1点体力并跳过弃牌阶段;偶,你回复1点体力.⑨当你使用装备牌时,若你装备区中已有牌数为:奇,你可以移动场上一张牌;偶,你回复1点体力.⑩结束阶段,若你本回合造成伤害点数为:奇,获得一张锦囊牌;偶,获得一张基本牌.⑪回合结束时,你摸1张牌,且你的手牌区/装备区/判定区/体力值中每有一项的奇偶数与当前你的回合数奇偶相同,你便多摸一张.⑫你于奇数回合使用牌无次数限制,偶数回合无距离限制',
                        yinchaofeng: '嘲讽',
                        yinchaofeng_info: "<style>#不想看技能还玩三国杀？{animation:changeS 20s linear 4s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='不想看技能还玩三国杀？'><b>不想看技能还玩三国杀？</b></div></body>",
                        yinjingji2l: '精计',
                        yinjingji2l_info: '锁定技,回合开始前或结束后,你可以进行一次判定,你从牌堆中获得一张与其类型不同的牌并获得此判定牌',
                        yinxianmou: '献谋',
                        yinxianmou_info: '觉醒技,准备阶段,若<精计>已记录过两种或更多类型,则你加1点体力上限并回复1点体力,获得<奇略>并升级<精计>',
                        yinqilue: '奇略',
                        yinqilue_info: '当你于出牌阶段使用牌结算后,若此牌与上一张使用的牌类型相同,则你可以从牌堆中获得一张与该牌类型不同的牌',
                        yinzongheng: '纵横',
                        yinzongheng_info: '你可以将一张锦囊牌当作【决斗】使用或将非锦囊牌当作【杀】使用或打出.你使用非转化的【决斗】或【杀】时不能被响应.当你使用【决斗】或【杀】指定目标后,你可以获得其区域内一张牌',
                        yinfeijiang: '飞将',
                        yinfeijiang_info: '锁定技,当你受到【决斗】或【杀】造成的伤害后,你随机获得一张非锦囊牌.你使用【杀】可额外选择一个目标',
                        yinmieshi: '蔑世',
                        yinmieshi_info: '锁定技,当你造成伤害后,你获得【无双】、【射戟】直到本回合结束',
                        yinsheji: '射戟',
                        yinsheji_info: '锁定技,你使用【杀】无距离限制.你使用非转化的【杀】/【决斗】无次数限制且造成的伤害+1',
                        yinliegong: '烈弓',
                        yinliegong_info: '你使用【杀】可选择在此【杀】点数距离内的角色为目标.你使用牌时或成为其他角色使用牌的目标后,若此牌的颜色/花色/类型有任一项未被<烈弓>记录,则记录此项.当你使用【杀】指定目标后,你可以展示牌堆顶的X张牌(X为你的<烈弓>记录数-1,且至少为0),每有一张牌的颜色/类型/花色与<烈弓>记录的颜色/类型/花色相同,你令此【杀】伤害+1,且令其不能响应此【杀】.若如此做,此【杀】结算结束后,清除<烈弓>的记录',
                        yinliegong2: '烈弓',
                        yinliegong2_info: '',
                        yinjunxing: '峻刑',
                        yinjunxing_info: '出牌阶段限一次,你可以弃置一张牌并选择一名其他角色,其需要弃置X张牌并失去1点体力,否则其将武将牌翻面且若其没有牌,其摸一张牌.(X为其区域中颜色与你弃置的牌相同的牌的数量且至少为1)',
                        yinyuce: '御策',
                        yinyuce_info: '当你成为其他角色使用带有[伤害]标签的牌的目标后/受到1点伤害后,你可以展示1张手牌(若没有手牌则摸一张牌再展示),令使用者/伤害来源弃置1张与此牌类型不同的手牌,否则此牌对你无效/你回复1点体力',
                        yinguolun: '过论',
                        yinguolun_info: '①出牌阶段每名角色限一次,你可以选择与一名有手牌的其他角色,你与其交换手牌.若你手牌数大于其,则你可再次对其发动此技能;若你手牌数与其相等,则你摸一张牌.②当你回复体力后,你摸一张牌',
                        yinguolun2: '过论',
                        yinguolun2_info: '',
                        yinsongsang: '送丧',
                        yinsongsang_info: '锁定技,当有角色死亡后,你摸一张牌,增加1点体力上限并回复1点体力,若你未获得〖展骥〗,则你获得〖展骥〗',
                        yinzhanji: '展骥',
                        yinzhanji_info: '锁定技,当你不因〖展骥〗而获得牌时,你摸一张牌',
                        yinwusheng: '武圣',
                        yinwusheng_info: '你可以将一张牌当作【杀】使用或打出.当你对其他角色造成1点伤害后,你获得〖义绝〗直到本回合结束,你获得1次〖义绝〗次数',
                        yinyijue: '义绝',
                        yinyijue_info: '出牌阶段限X次(X为你拥有的<义绝>次数),你可以弃置一张牌并令一名有手牌的其他角色展示一张手牌.若此牌为黑色,则该角色不能使用或打出牌,非锁定技失效且受到来自你的♥️️【杀】的伤害+1直到回合结束.若此牌为红色,你获得此牌,你可以令其回复一点体力',
                        yinyijue2: '义绝',
                        yinyijue2_info: '不能使用或打出牌,非锁定技失效且受到♥️️【杀】的伤害+1',
                        yinzhenhua: '震华',
                        yinzhenhua_info: '锁定技,游戏开始时,你从牌堆中获得一张【青龙偃月刀】.你使用的红色【杀】造成的伤害+1,黑色【杀】不可被响应.你使用【杀】无距离限制',
                        yintuodao: '拖刀',
                        yintuodao_info: '当你成为【杀】的目标时或受到1点伤害后,你可以使用一张【杀】.若此【杀】造成了伤害,你摸X张牌并回复1点体力.(X为你已损失体力值且至少为1)',
                        yintuodao2: '拖刀',
                        yintuodao2_info: '',
                        yinquanji: '权计',
                        yinquanji_info: '当你受到1点伤害后/使用牌造成伤害后/于出牌阶段结束时,手牌数不小于你的体力值,或当你的牌被弃置后,你可以摸一张牌,你可以将一张牌置于武将牌上,称为<权>.你的手牌上限+X(X为<权>的数量)',
                        yinpaiyi: '排异',
                        yinpaiyi_info: '出牌阶段限一次,你可移去一张<权>,令一名角色摸两张牌.若其手牌数大于你,则其受到1点伤害;若你选择的角色不是自己,则你回复1点体力',
                        yinpaiyi_backup: '排异',
                        yinzili: '自立',
                        yinzili_info: '限定技,当你处于濒死状态时,你可以减少1点体力上限并回复满体力,你将【排异】的描述<摸两张牌>改为<摸X张牌>(X为<权>数且至少为2,至多为8)',
                        gaijuesha: '绝杀',
                        gaijuesha_info: '锁定技,当其他角色濒死时,所有角色不能使用【桃】或【酒】',
                        gaijuesha2: '绝杀',
                        gaijuesha2_info: '',
                        yindingjiang: '定江',
                        yindingjiang_info: '出牌阶段,你可以将一张黑色牌当作【兵粮寸断】置入自己的判定区.若如此做,你可以对一名其他角色造成1点伤害',
                        yinyingcai: '英才',
                        yinyingcai_info: '结束阶段,若你判定区中有牌,你可以摸X张牌(X为你判定区中的牌数).若有两张或更多,则你可以移动场上一张牌',
                        yinyonghan: '拥寒',
                        yinyonghan_info: '锁定技,当一名其他角色受到1点伤害或回复1点体力后,你令其获得1枚<寒>.若其此前已有<寒>,则你摸一张牌.(每次发动至多触发20次【拥寒】)',
                        yinfenglue: '锋略',
                        yinfenglue_info: '①当你使用牌指定唯一其他角色为目标时,若其没有<寒>,则你可以弃置一张手牌并令其获得1枚<寒>.②当你受到伤害时,若伤害来源有<寒>,你可以移去其等量本次伤害值的<寒>,防止此伤害',
                        yinxueze: '雪泽',
                        yinxueze_info: '结束阶段,你可以选择一名有<寒>的其他角色,移去该角色所有<寒>并摸X+1张牌(X为该角色<寒>数量)',
                        gaiqinzheng: '勤政',
                        gaiqinzheng_info: '锁定技,当你使用或打出牌时,若你本局游戏内使用或打出过的牌数和:为2的倍数,你摸一张牌;为3的倍数,你从牌堆中获得一张【杀】或【闪】;为4的倍数,你从牌堆中获得一张基本牌;为5的倍数,你从牌堆中获得一张【桃】或【酒】;为6的倍数,你获得一张锦囊牌;为7的倍数,你从牌堆中获得一张非基本牌;为8的倍数,你从牌堆中获得一张【决斗】或【无中生有】;为9的倍数,你从牌堆中获得一张装备牌.(可获得对应的衍生替换牌,若牌堆中已无符合的牌则不获得)',
                        gaiqinzheng_count: '勤政',
                        gaiqinzheng_count_info: '',
                        gaidaimin: '戴民',
                        gaidaimin_info: '锁定技,当你令其他角色回复1点体力后,你可以与其各摸3-X张牌(X为其当前体力值,且至少摸1张)',
                        yinzhiba: '制霸',
                        yinzhiba_info: '联动技,当一名角色发动〖天香〗之后,若该角色为「§大乔小乔」,你可以与其各摸一张牌',
                        yinmoulongdan: '龙胆',
                        yinmoulongdan_info: '你可以将【闪】当作【杀】,【杀】当作【闪】使用或打出.当你使用或打出转化牌时,你摸一张牌.你使用转化牌无距离限制',
                        yinmoujizhu: '积著',
                        yinmoujizhu_info: '锁定技,当你失去牌后,你可以摸一张牌.你每回合以此法获得的牌数不能超过你的体力值',
                        xingaixuanfeng: '旋风',
                        xingaixuanfeng_info: '当你于弃牌阶段弃置过牌,或当你失去装备区内的牌后,你可以弃置至多2名其他角色的共计X张牌,你可以对一名其他角色造成Y+1点伤害.(X为你的体力值且至少为2,Y为你装备区的牌数)',
                        xingaiyongjin: '勇进',
                        xingaiyongjin_info: '①出牌阶段限一次,你可以移动场上一张装备牌.②准备阶段,你可以从牌堆中获得一张装备类型的牌',
                        yinmoutangyi: '倘义',
                        yinmoutangyi_info: '出牌阶段限一次,你可以将手牌中的所有【杀】当作一张【杀】使用,此【杀】不可被响应且伤害基数改为X(X为以此法转化的【杀】的数量),若如此做,你结束出牌阶段',
                        yinmoutangyi_xg: '倘义',
                        yinmoutangyi_xg_info: '',
                        gaijuece: '绝策',
                        gaijuece_info: '当其他角色在你回合内失去一张手牌时,你可以对其造成一点伤害',
                        gaimieji: '灭计',
                        gaimieji_info: '出牌阶段限一次,你将一张黑色手牌置于牌堆顶并从牌堆底摸一张牌,令一名有牌的其他角色选择一项:交给你一张锦囊牌,或依次弃置所有非锦囊牌',
                        gaimieji2: '灭计',
                        gaimieji2_info: '',
                        gaifencheng: '焚城',
                        gaifencheng_info: '限定技.出牌阶段,你可以令所有其他角色各选择一项:弃置至少2X张牌(X为该角色的上家以此法弃置牌的数量且至少为1);或受到你对其造成的2X点火焰伤害',
                        yinxiongluan: '雄乱',
                        yinxiongluan_info: '限定技,出牌阶段,你可以令其余角色本回合不能使用或打出手牌且你对其使用牌无距离和次数限制,你依次废除未被废除的装备栏和判定区,你每以此法废除一个区域,你视为使用一张【杀】',
                        yin_chaofeng: '朝凤',
                        yin_chaofeng_info: '当你使用【杀】指定一名其他角色为目标时,你可以弃置一张牌,摸一张牌,并随机弃置其装备区内的一张牌.若弃置的牌与此【杀】:颜色相同,多摸一张牌;类别相同,此【杀】伤害+1',
                        yin_jianying: '渐营',
                        yin_jianying_info: '当你使用一张牌时,若你已使用牌的get.AllHistory数组中移除此牌后所包含的元素个数＞1,则执行以下分支:<br>若此牌花色对应的花色集合A与你上一张使用的牌花色的对应花色集合C均为花色全集B＝{<span class=firetext>♥️️</span>,♠️️,<span class=firetext>♦️️</span>,♣️️}的非∅真子集且相等;或其点数m与你上一张使用牌的点数n满足|m-n|＜<span class=firetext>1</span>,你可以摸<span class=thundertext>1</span>张牌.你可以令此技能中带颜色的数字变更为执行一次与1相加运算所得的数值.<br>反之,则不触发此技能',
                        yin_zhuosheng: '擢升',
                        yin_zhuosheng_info: '出牌阶段,①你使用本轮内获得的基本牌时无次数和距离限制.②你使用本轮内获得的锦囊牌不可被响应,且你可令此牌的目标数+1或-1.③你使用本轮内获得的装备牌时可以摸一张牌',
                        yin_kuizhu: '溃诛',
                        yin_kuizhu_info: '当你因弃置而失去牌时,若你没有手牌,你可以摸X张牌;反之,你可以选择一项:1.令至多X名角色各摸一张牌;2.对体力值之和≯X的角色造成一点伤害(x为你本回合因弃置而失去的牌数)',
                        yin_chezheng: '掣政',
                        yin_chezheng_info: '锁定技,你的出牌阶段内,当你使用牌时,除非你弃置一张牌否则无效之;你对攻击范围内包含你的角色使用牌无距离和次数限制',
                        yin_zhuning: '诛佞',
                        yin_zhuning_info: '出牌阶段,你可将任意张牌交给一名其他角色(称为<隙>),可视为使用一张具有伤害标签的基本牌/锦囊牌(不计入次数限制)',
                        yin_fengxiang: '封乡',
                        yin_fengxiang_info: '锁定技.①当你受到伤害后,若场上:存在<隙>唯一最多的角色,则你回复1点体力;不存在,则你摸一张牌.②当有角色的手牌移动后,若场上<隙>最多的角色因此发生变化,则你摸一张牌',
                        yin_fengxiang_tag: '隙',
                        yin_fengxiang_tag_info: '',
                        yin_tunan: '图南',
                        yin_tunan_info: '出牌阶段开始时,你可从牌堆亮出点数最小的一张牌并选择一项:使用之(无距离限制);或将此牌当普通【杀】使用.从牌堆亮出点数递增的牌并重复此流程',
                        yin_taoyin: '韬隐',
                        yin_taoyin_info: '隐匿技,当你登场后,若当前回合角色存在且不是你,则你可令该角色本回合的手牌上限-2',
                        yin_yimie: '夷灭',
                        yin_yimie_info: '锁定技,你的伤害类牌视为【一刀斩】',
                        yin_ruilve: '睿略',
                        yin_ruilve_info: '主公技,其他晋势力角色的出牌阶段限一次,该角色可以将一张带有伤害标签的基本牌或锦囊牌交给你',
                        yin_tairan: '泰然',
                        yin_tairan_info: '锁定技,回合结束时,你回复Y点体力,并将手牌摸至X张.出牌阶段开始时,你失去Y点体力,弃置上次以此法获得的牌.(X为你的体力上限;Y=(X-你的体力值))',
                        yin_qianjie: '谦节',
                        yin_qianjie_info: '锁定技,其他角色对你砸的蛋改成送花',
                        yin_jueyan: '决堰',
                        yin_jueyan_info: '出牌阶段,你可以废除一个装备栏,视为对一名其他角色砸100个蛋',
                        yin_poshi: '破势',
                        yin_poshi_info: '准备阶段,你可以视为对全场角色砸蛋',
                        yin_zhenlue: '缜略',
                        yin_zhenlue_info: '当你需要使用或打出除【无懈可击】以外的一张牌时,你可以进行判定,若结果为黑色,你将判定牌当作此牌使用或打出',
                        yin_zhenlue_backup: '缜略',
                        yin_zhenlue_backup_info: '',
                        yin_jianshu: '间书',
                        yin_jianshu_info: '出牌阶段,你可以将一张黑色手牌交给一名其他角色,并选择另一名其他角色,令这两名角色拼点.赢的角色弃置两张牌,没赢的角色失去一点体力',
                        yin_yongdi: '拥嫡',
                        yin_yongdi_info: '限定技,准备阶段开始时若场上没有人拥有<颂威>,你可令一名其他男性角色增加一点体力上限并回复1点体力,该角色获得其武将牌上的主公技和<颂威>',
                        yin_xingluan: '兴乱',
                        yin_xingluan_info: '每回合每种花色和点数限一次.当你使用的牌结算完成后,你可以从牌堆中随机获得一张指定点数和花色的牌',
                        yin_buyi: '补益',
                        yin_buyi_info: '当你需要使用或打出一张基本牌时,你可以交换两名角色装备区内的牌,视为使用或打出此牌',
                        yin_shiwu: '恃武',
                        yin_shiwu_info: '出牌阶段限一次,你可以弃置一张牌,亮出牌堆顶的一张牌,若此牌不为武器牌则重复此流程;否则你装备此武器牌,将中央区内的【杀】或【闪】当做一张无距离和次数限制的【杀】使用.以此法使用的【杀】被抵消时,你将此【杀】交给其.若你在此技能结算过程中未造成过伤害,你弃置装备区内的武器牌,本回合此技能改为<出牌阶段限三次>',
                        yin_xiandeng: '先登',
                        yin_xiandeng_info: '每轮限一次,一名其他角色的摸牌/出牌阶段即将开始时,你可以弃置所有基本牌/装备牌并改为由你执行之,此阶段开始时你视为使用一张【万箭齐发】',
                        yin_jiaozi: '骄恣',
                        yin_jiaozi_info: '锁定技,你使用牌指定其他角色为目标时,或成为其他角色使用牌的目标时,你对目标造成一点伤害.',
                        yin_fenyin: '奋音',
                        yin_fenyin: '锁定技,转换技,当你使用或打出的一张①<u>黑色</u>/②<u>红色</u>牌结算完成后,若此牌花色为你手牌中③<u>唯一</u>/④<u>最多</u>/⑤<u>最少</u>的花色时,你摸一张牌',
                        yin_fuzhu: '伏诛',
                        yin_fuzhu_info: '一名男性角色的结束阶段,你可以依次对其使用牌堆中所有的【杀】,洗牌',
                        yin_yindi: '淫帝',
                        yin_yindi_info: '出牌阶段限一次,你可以视为对一名其他角色使用X张【杀】(X为其体力值),若其仍存活,你令其回复一点体力并获得一枚<星怒>标记.(若其没有<星怒>标记,你先将其随机替换为一名同势力女将)',
                        yin_yunu: '驭奴',
                        yin_yunu_info: '锁定技,有<星怒>标记的角色视为拥有<奴礼>;当其受到伤害时,你摸一张牌(若伤害来源为你,你可以防止此伤害并摸一张牌)',
                        yin_nuli: '奴礼',
                        yin_nuli_info: '每回合限一次,当你使用一张基本牌或普通锦囊牌时,你可以交给有<驭奴>技能的角色一张牌并令此牌额外结算X次(X为你的<星怒>数)',
                        yin_nafei: '纳妃',
                        yin_nafei_info: '主公技,场上与你异性的同势力武将身份均视为忠臣',
                        yin_guishu: '鬼术',
                        yin_guishu_info: '转换技,当你不因自身技能而即将执行①失去牌②扣减体力的操作时,你可以进行一次判定,若结果为黑色,取消此次操作.反之,你可以获得此次的判定牌,或失去1点体力并转换你的一个转换技',
                        yin_tianzhao: '天照',
                        yin_tianzhao_info: '限定技,出牌阶段,你可以弃置四张花色各不相同的牌并减1点体力上限,翻面所有其他角色,最后你删去其他技能的特殊标签并获得〖鬼道〗',
                        yin_tianzhao_guidao: '鬼道',
                        yin_tianzhao_guidao_info: '一名角色的判定牌生效前,你可以打出一张黑色牌作为判定牌并获得原判定牌.若你以此法打出的牌为♠️️2-9,则你摸一张牌',
                        yin_huanhuo: '幻惑',
                        yin_huanhuo_info: '主公技,其他群势力角色的出牌阶段限一次,其可以重铸一张♠️️牌并令你进行一次〖鬼术〗中的判定',
                        yin_yiyan: '燚焱',
                        yin_yiyan_info: '转换技,出牌阶段,你可以弃置一张牌并选择一名其他角色,你与其各选择一项:①横置或弃置手牌中所有【杀】②受到1点火焰伤害或弃置手牌中所有【闪】.若其与你选择不同,你摸一张牌',
                        yin_dingzhi: '鼎峙',
                        yin_dingzhi_info: '锁定技,当你进入濒死状态时,你将手牌数调整至3,你摸三张牌再弃置三张牌,若类别均不相同,你将体力值回复至3',
                        yin_qianxin: '遣信',
                        yin_qianxin_info: '出牌阶段,你可以选择一名其他角色并将任意张牌作为其的<信>扣置于你下家的武将牌上.有<信>角色的准备阶段,其获得其中属于他的<信>并令你摸等量的牌,若其仍有<信>,其可以将这些<信>转递给其的下家.<br>※<信>占用等量手牌上限',
                        yin_zhenxing: '镇行',
                        yin_zhenxing_info: '结束阶段开始时或当你受到伤害后,你可以观看牌堆顶的四张牌,你获得其中与其余牌花色均不相同的任意张牌',
                    },
                };
                lib.config.all.characters.add('阴包武将');
                lib.config.characters.add('阴包武将');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:阴包武将/image/${i}.jpg`)
                }
                lib.translate['阴包武将_character_config'] = `阴包武将`;
                return QQQ;
            });
        },
        config: {
            titleChange: {
                name: '<font color="#FF0000">神秘の按钮</font>',
                init: 'fuh',
                intro: '用于切换武将名前后缀<br><font color="#FF0000">重启生效</font>',
                item: {
                    fuh: '符号前缀',
                    word: '文字前缀',
                    off: '隐藏前缀',
                },
            },
            throwEgg: {
                name: '<font color="#FF0000">砸蛋回应</font>',
                init: true,
                intro: '用于回应陆抗的砸蛋<br><font color="#FF0000">重启生效</font>',
            },
        },
        package: {
            card: {
                card: {
                    yin_yidaozhan: {
                        enable: true,
                        type: 'trick',
                        fullskin: true,
                        filterTarget(card, player, target) {
                            return target != player;
                        },
                        yingbian_prompt: '当你使用此牌选择目标后,你可为此牌增加一个目标',
                        yingbian_tags: ['add'],
                        content() {
                            target.damage(get.nature(event.card), target.hp);
                        },
                        ai: {
                            basic: {
                                order: 5,
                                useful: 2,
                                value: 6,
                            },
                            yingbian(card, player, targets, viewer) {
                                if (get.attitude(viewer, player) <= 0) return 0;
                                if (
                                    game.hasPlayer(function (current) {
                                        return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                    })
                                )
                                    return 6;
                                return 0;
                            },
                            result: {
                                target(player, target) {
                                    return -target.hp;
                                },
                            },
                            tag: {
                                damage: 1,
                            },
                        },
                        selectTarget: 1,
                    },
                },
                translate: {
                    yin_yidaozhan: '一刀斩',
                    yin_yidaozhan_info: '出牌阶段,对一名其他角色使用,对其造成等同于其体力值的伤害',
                },
            },
            intro: "<span style='color:red'>该包版本: v11.5<br><span style='color:yellow'>说在前面:所有武将插画均为露头素材,需搭配十周年UI露头皮肤使用<br><span style='color:gold'>扩展名:阴(阳鱼)包武将<br>重新设计了原武将<br>可以看作改版/增强武将<br>开启选项-显示中的【武将评级】<br>可以查看对应强度<br>包内所有武将都有对应强度评级             <br><span style='color:green'>该评级不与新杀相同<br>只单纯按照强度排名<br>从A到SSS(强度是自评)<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: "luolitity_luo<br><span style='color:red'>作者:落玖 2HAlO₂·H₂Oฅฅ*<br><span style='color:pink'>扩展群群号:622367989",
            version: '完结撒花版',
        },
    };
});
